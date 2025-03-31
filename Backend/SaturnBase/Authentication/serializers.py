from rest_framework import serializers
from .models import User, ActivityLog
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth.tokens import default_token_generator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, required=False)
    confirm_password = serializers.CharField(
        write_only=True, min_length=8, required=False
    )

    user_type = serializers.CharField(required=False)
    is_active = serializers.BooleanField()

    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "gender",
            "is_active",
            "is_staff",
            "user_type",
            "password",
            "confirm_password",
        ]

    def __init__(self, *args, **kwargs):
        if kwargs.get("instance"):
            self.fields.pop("password")
            self.fields.pop("confirm_password")
        super().__init__(*args, **kwargs)

    def validate(self, data):
        if "password" in data and "confirm_password" in data:
            if data["password"] != data["confirm_password"]:
                raise serializers.ValidationError(
                    {"password": "Passwords do not match"}
                )
        return data

    def create(self, validated_data):
        validated_data.pop("confirm_password")

        user = User.objects.create_user(**validated_data)
        user.is_active = False  # Require activation
        user.save()

        self.save_activation_link(user)

        return user

    def save_activation_link(self, user):
        # Generate the activation link
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = default_token_generator.make_token(user)
        activation_link = (
            f"http://localhost:8000/backend/api/user/activate/{uid}/{token}/"
        )

        # Write the activation link to a file
        with open("activation_links.txt", "a") as file:
            file.write(f"User: {user.email} - Activation Link: {activation_link}\n")


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if email is None or password is None:
            raise serializers.ValidationError("Email and password are required.")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found.")

        if not user.check_password(password):
            raise serializers.ValidationError("Invalid password.")

        if not user.is_active:
            raise serializers.ValidationError(
                "Account is not activated. Please check your email."
            )

        return super().validate(attrs)


class ForgetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()


class ResetPasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(min_length=8)
    confirm_password = serializers.CharField(min_length=8)

    def validate(self, data):
        if data["new_password"] != data["confirm_password"]:
            raise serializers.ValidationError(
                {"new_password": "Passwords do not match"}
            )
        return data


class ActivityLogSerializer(serializers.ModelSerializer):
    """
    Serializer for simplified Activity Log model
    """

    username = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = ActivityLog
        fields = ["id", "time", "username", "action", "description", "status"]

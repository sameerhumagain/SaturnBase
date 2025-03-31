from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import force_str
from django.contrib.auth.tokens import default_token_generator
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import (
    UserSerializer,
    CustomTokenObtainPairSerializer,
    ForgetPasswordSerializer,
    ResetPasswordSerializer,
    ActivityLogSerializer
)
from rest_framework_simplejwt.views import TokenObtainPairView
import csv
from io import StringIO
from rest_framework_simplejwt.tokens import RefreshToken
import random
from django.utils import timezone
from rest_framework.permissions import AllowAny, IsAuthenticated
import os
from rest_framework import generics

from .models import ActivityLog

User = get_user_model()


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Please check your email to activate your account."},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActivateAccountView(APIView):
    def get(self, request, uidb64, token):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)

            if default_token_generator.check_token(user, token):
                user.is_active = True
                user.save()
                return Response(
                    {"message": "Account activated successfully!"},
                    status=status.HTTP_200_OK,
                )

            return Response(
                {"error": "Invalid activation link"}, status=status.HTTP_400_BAD_REQUEST
            )
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response(
                {"error": "Invalid activation link"}, status=status.HTTP_400_BAD_REQUEST
            )


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ForgetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return Response(
                    {"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST
                )

            otp = random.randint(100000, 999999)
            otp_expiration = timezone.now() + timezone.timedelta(minutes=10)
            user.password_reset_otp = otp
            user.otp_expiration = otp_expiration
            user.save()

            file_path = "reset_password_links.txt"

            with open(file_path, "a") as file:
                file.write(f"User: {user.email} - OTP: {otp}\n")

            return Response(
                {
                    "message": f"Reset Password Link generated. File saved at {file_path}"
                },
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyOtpView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        otp = request.data.get("otp")
        email = request.data.get("email")

        if not otp or not email:
            return Response(
                {"error": "OTP and email are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST
            )

        if user.password_reset_otp != int(otp):
            return Response(
                {"error": "Invalid OTP."}, status=status.HTTP_400_BAD_REQUEST
            )

        if user.otp_expiration < timezone.now():
            return Response(
                {"error": "OTP expired."}, status=status.HTTP_400_BAD_REQUEST
            )

        user.otp_validated = True
        user.save()

        return Response(
            {"message": "OTP validated. You can now reset your password."},
            status=status.HTTP_200_OK,
        )


class ResetPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        new_password = request.data.get("new_password")
        confirm_password = request.data.get("confirm_password")

        if not email or not new_password or not confirm_password:
            return Response(
                {"error": "Email, new password, and confirmation are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST
            )

        if not user.otp_validated:
            return Response(
                {"error": "Invalid OTP or OTP not verified."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if new_password != confirm_password:
            return Response(
                {"error": "Passwords do not match."}, status=status.HTTP_400_BAD_REQUEST
            )

        user.set_password(new_password)
        user.password_reset_otp = None
        user.otp_validated = False
        user.save()

        return Response(
            {"message": "Password reset successfully!"}, status=status.HTTP_200_OK
        )


class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            {"message": "Please check your email to activate your account."},
            status=status.HTTP_201_CREATED,
        )


class BulkUserUploadView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        if "file" not in request.FILES:
            return Response(
                {"detail": "No file uploaded."}, status=status.HTTP_400_BAD_REQUEST
            )

        file = request.FILES["file"]
        if not file.name.endswith(".csv"):
            return Response(
                {"detail": "File is not a CSV."}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            csv_file = StringIO(file.read().decode("utf-8"))
            reader = csv.DictReader(csv_file)

            users_to_create = []
            for row in reader:
                print(f"Row data: {row}")  # Debug print to check the row content
                if isinstance(row, dict):
                    user_data = {
                        "first_name": row.get("first_name"),
                        "last_name": row.get("last_name"),
                        "email": row.get("email"),
                        "gender": row.get("gender", "M"),
                        "is_active": row.get("is_active", "False") == "True",
                        "user_type": row.get("user_type", "normal"),
                    }
                    users_to_create.append(User(**user_data))
                else:
                    print(f"Unexpected row format: {row}")

            if users_to_create:
                User.objects.bulk_create(users_to_create)

            return Response(
                {"message": f"{len(users_to_create)} users created successfully."},
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response(
                {"detail": f"Error processing CSV file: {str(e)}"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class UserUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return User.objects.get(id=self.kwargs["pk"])

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response(
            {"message": "User updated successfully."}, status=status.HTTP_200_OK
        )

    def destroy(self, request, *args, **kwargs):
        user = self.get_object()
        user.delete()

        return Response(
            {"message": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT
        )


class ActivityLogListCreateView(generics.ListCreateAPIView):
    """
    API view for listing and creating activity logs
    """

    serializer_class = ActivityLogSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        """
        Optionally filter logs by username
        """
        queryset = ActivityLog.objects.all()

        # Filter by username if provided
        username = self.request.query_params.get("username", None)
        if username:
            queryset = queryset.filter(user__username=username)

        return queryset

    def perform_create(self, serializer):
        """
        Automatically set the user to the current user when creating a log
        """
        serializer.save(user=self.request.user)


# utility function
def create_activity_log(user, time, action, description=None, status=None):
    """
    Utility function to create an activity log
    """
    return ActivityLog.objects.create(
        user=user, time=time, action=action, description=description, status=status
    )

from rest_framework import serializers
from .models import Medias


class MediaFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medias
        fields = "__all__"
        extra_kwargs = {"file": {"required": False}}

from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Medias
from .serializers import MediaFileSerializer


class MediaLibraryAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    # GET method: Retrieve all media files
    def get(self, request):
        media_files = Medias.objects.all()
        serializer = MediaFileSerializer(media_files, many=True)
        return Response(serializer.data)

    # POST method: Create a new media file
    def post(self, request):
        serializer = MediaFileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # This will save the new media file to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MediaUpdateAPIView(APIView):
    permission_classes = [permissions.AllowAny]

    def put(self, request, pk=None):
        try:
            media_file = Medias.objects.get(pk=pk)
        except Medias.DoesNotExist:
            return Response(
                {"error": "Media file not found"}, status=status.HTTP_404_NOT_FOUND
            )

        # Use partial=True to allow partial updates
        serializer = MediaFileSerializer(media_file, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

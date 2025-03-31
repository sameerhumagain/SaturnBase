from django.urls import path
from .views import MediaLibraryAPIView, MediaUpdateAPIView

urlpatterns = [
    path('', MediaLibraryAPIView.as_view(), name='media-list'),  # GET and POST
    path('<int:pk>/', MediaUpdateAPIView.as_view(), name='media-update'),  # PUT for updating
]

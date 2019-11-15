from .api import PostViewSet
from django.urls import path
from .views import FileUploadView


urlpatterns = [
    path('api/posts/', FileUploadView.as_view())
]

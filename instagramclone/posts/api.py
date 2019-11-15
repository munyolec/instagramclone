from posts.models import Posts
from rest_framework import viewsets, permissions
from .serializers import PostSerializer

#Post viewset
class PostViewSet(viewsets.ModelViewSet):

    queryset=Posts.objects.all()   
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=PostSerializer
    
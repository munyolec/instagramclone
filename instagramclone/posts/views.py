from django.shortcuts import render
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import viewsets, permissions

from .models import Posts
from .serializers import PostSerializer

# Create your views here.


class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def get(self, request, *args, **kwargs):
        posts = Posts.objects.all()
        permission_classes = [
            permissions.AllowAny
        ]
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwards):
        file_serializer = PostSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(file_serializer.errors)
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

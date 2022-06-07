from django.shortcuts import render
from rest_framework import status

from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Student,Post
from .serializers import PostSerializer,StudentSerializer




class StudentApi(APIView):

  def get(self, request, pk=None, format=None):
    id = pk
    if id is not None:
      stu = Student.objects.get(id=id)
      serializer = StudentSerializer(stu)
      return Response(serializer.data)
    stu = Student.objects.all()
    serializer = StudentSerializer(stu, many=True)
    return Response(serializer.data)

  def post(self, request, format=None):
    serializer = StudentSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response({"msg": " created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def put(self, request, pk, format=None):
    id = pk
    stu = Student.objects.get(pk=id)

    serializer = StudentSerializer(stu, data=request.data)

    if serializer.is_valid():
      serializer.save()
      return Response({'msg': "complete data update"})

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delete(self, request, pk):
    # Get object with this pk
    id = pk
    stu = Student.objects.get(pk=id)
    stu.delete()
    return Response({"msg": "data deleted successfully"})


class PostApi(APIView):

    def get(self, request, pk=None, format=None):
      id = pk
      if id is not None:
        pts = Post.objects.get(id=id)
        serializer = PostSerializer(pts)
        return Response(serializer.data)
      pts = Post.objects.all()
      serializer = PostSerializer(pts, many=True)
      return Response(serializer.data)

    def post(self, request, format=None):
      serializer = PostSerializer(data=request.data)
      if serializer.is_valid():
        serializer.save()
        return Response({"msg": " created successfully"}, status=status.HTTP_201_CREATED)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
      id = pk
      pts = Post.objects.get(pk=id)

      serializer = PostSerializer(pts, data=request.data)

      if serializer.is_valid():
        serializer.save()
        return Response({'msg': "complete data update"})

      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
      # Get object with this pk
      id = pk
      pts = Post.objects.get(pk=id)
      pts.delete()
      return Response({"msg": "data deleted successfully"})


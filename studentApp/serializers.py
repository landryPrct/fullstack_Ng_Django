from rest_framework  import  serializers
from serializers import serializer

from studentApp.models import Post,Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"



class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields="__all__"

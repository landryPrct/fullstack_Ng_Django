from django.db import models

# Create your models here.
class Student(models.Model):
 

    fname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    age=models.IntegerField()
    room_class=models.CharField(max_length=100)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fname


class Post(models.Model):
    title=models.CharField(max_length=100)
    body=models.TextField()
    created_by=models.ForeignKey(Student,on_delete=models.CASCADE)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

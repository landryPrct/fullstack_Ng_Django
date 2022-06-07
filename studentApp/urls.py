from django.contrib import admin
from django.urls import path

from studentApp import views

urlpatterns = [


    path('student/', views.StudentApi.as_view()),
    path('student/<int:pk>', views.StudentApi.as_view()),

    path('post/', views.PostApi.as_view()),
    path('post/<int:pk>', views.PostApi.as_view()),
]

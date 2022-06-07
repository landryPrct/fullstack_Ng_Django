
from django.contrib import admin
from django.urls import path, include

from studentApp import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(urls)),
    path('dj-rest-auth/',include('dj_rest_auth.urls')),
]

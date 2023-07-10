from rest_framework import serializers
from rest_framework import viewsets
from rest_framework.response import Response
from intsureview_be.apps.users.models import User
from django.shortcuts import get_object_or_404


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Django creates the GET, POST, PUT, etc for us


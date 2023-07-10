from django.contrib import admin
from .models import User
# Register your models here.
MODELS = [User]
admin.site.register(MODELS)
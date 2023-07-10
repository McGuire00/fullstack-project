from rest_framework.routers import DefaultRouter
from intsureview_be.apps.users.api.users.query.base import UserViewSet

app_name = "users"

router = DefaultRouter()
router.register(r'recipients', UserViewSet, basename='recipients')

urlpatterns = router.urls


from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from request.api.views import RequestViewSet

router = routers.DefaultRouter()
router.register('requests', RequestViewSet, base_name='requests')


urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]

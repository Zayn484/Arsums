
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from request.api.views import RequestViewSet, MessageViewSet, CallScheduleViewSet
from content.api.views import ExpertiseViewSet

router = routers.DefaultRouter()
router.register('requests', RequestViewSet, base_name='requests')
router.register('messages', MessageViewSet, base_name='messages')
router.register('call-schedules', CallScheduleViewSet, base_name='call-schedules')
router.register('expertise', ExpertiseViewSet, base_name='expertise')


urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]

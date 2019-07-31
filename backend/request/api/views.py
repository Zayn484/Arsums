from rest_framework import viewsets
from rest_framework.permissions import (
    AllowAny,
)
from .serializers import RequestSerializer, MessageSerializer, CallScheduleSerializer
from request.models import Request, Message, CallSchedule

class RequestViewSet(viewsets.ModelViewSet):

    serializer_class = RequestSerializer
    permission_classes = [AllowAny, ]
    queryset = Request.objects.all()


class MessageViewSet(viewsets.ModelViewSet):

    serializer_class = MessageSerializer
    permission_classes = [AllowAny, ]
    queryset = Message.objects.all()


class CallScheduleViewSet(viewsets.ModelViewSet):

    serializer_class = CallScheduleSerializer
    permission_classes = [AllowAny, ]
    queryset = CallSchedule.objects.all()

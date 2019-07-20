from rest_framework import viewsets
from rest_framework.permissions import (
    AllowAny,
)
from .serializers import RequestSerializer
from request.models import Request

class RequestViewSet(viewsets.ModelViewSet):

    serializer_class = RequestSerializer
    permission_classes = [AllowAny, ]
    queryset = Request.objects.all()

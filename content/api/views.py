from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticatedOrReadOnly,
)
from .serializers import ExpertiseSerializer
from content.models import ExpertiseContent


class ExpertiseViewSet(viewsets.ModelViewSet):

    serializer_class = ExpertiseSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, ]

    def get_queryset(self):
        q = self.request.GET.get('category')
        if q is not None:
            return ExpertiseContent.objects.filter(category__icontains=q)
        return ExpertiseContent.objects.all()


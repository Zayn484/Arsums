from rest_framework import serializers
from content.models import ExpertiseContent


class ExpertiseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ExpertiseContent
        fields = '__all__'


from rest_framework import serializers
from request.models import Request, Message, CallSchedule


class RequestSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Request
        fields = ('project_type', 'project_description','duration', 'username','email')


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = ('firstname', 'lastname', 'email', 'phone', 'message')


class CallScheduleSerializer(serializers.ModelSerializer):

    class Meta:
        model = CallSchedule
        fields = '__all__'

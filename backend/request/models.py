from django.db import models

# Create your models here.

class Request(models.Model):
    project_type = models.CharField(max_length=100)
    project_description = models.TextField()
    duration = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    email = models.EmailField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class Message(models.Model):
    firstname = models.CharField(max_length=120)
    lastname = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=120)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

        
class CallSchedule(models.Model):
    date = models.DateField()
    country = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    time = models.TimeField()

    def __str__(self):
        return self.date

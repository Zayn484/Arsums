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

        
    
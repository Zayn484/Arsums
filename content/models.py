from django.db import models

# Create your models here.

EXPERTISE_CHOICES = (
    ('Branding','Branding'),
    ('UI', 'UI'),
    ('Web development','Web development'),
    ('Mobile development','Mobile development'),
    ('Frontend & Backend','Frontend & Backend'),
    ('Ecommerce','Ecommerce'),
    ('IT & Startups Consulting','IT & Startups Consulting'),
    ('SEO','SEO'),
    ('Digital Marketing','Digital Marketing'),
    ('White Label','White Label'),
)


class ExpertiseContent(models.Model):
    category = models.CharField(max_length=100, choices=EXPERTISE_CHOICES)
    title = models.CharField(max_length=50)
    content = models.TextField()
    
    def __str__(self):
        return self.category

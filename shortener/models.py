from django.db import models
from django.urls import reverse
from randomslugfield import RandomSlugField

# Create your models here.

class Shortener(models.Model):
    slug = RandomSlugField(length=5)
    link_to = models.URLField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.slug} -> {self.link_to}"
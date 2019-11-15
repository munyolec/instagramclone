from django.db import models
from datetime import datetime

# Create your models here.


class Posts(models.Model):
    caption = models.CharField(max_length=500, blank=True)
    comment = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    photo_main = models.ImageField(upload_to='photos/')

    def __str__(self):
        return self.file.name

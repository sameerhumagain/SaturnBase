from django.db import models

# Create your models here.


class Medias(models.Model):

    file = models.ImageField(upload_to="Medias")
    title = models.CharField(max_length=255, null=True, blank=True)
    altText = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title if self.title else str(self.id)

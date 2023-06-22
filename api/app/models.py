from django.db import models
from PIL import Image


class Category(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
      return self.name
    

class Seller(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
      return self.name 
    

class Book(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    price = models.FloatField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to='books/')
    author = models.CharField(max_length=250, null=True, blank=True)

    def save(self, *args, **kwargs):
        super(Book, self).save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 1000 or img.width > 800:
            output_size = (1000, 800)
            img.thumbnail(output_size)
            img.save(self.image.path)

    def __str__(self):
        return self.name
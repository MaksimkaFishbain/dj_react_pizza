from django.db import models

class Card(models.Model):
    title = models.CharField(max_length=25)
    image = models.ImageField(upload_to="pizzaName")
    price = models.PositiveIntegerField()
    modalContent = models.TextField(blank="True")
    isMeat = models.BooleanField(default="True")
    popularity = models.PositiveIntegerField()
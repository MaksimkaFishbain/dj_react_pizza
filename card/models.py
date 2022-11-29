from django.db import models

class Card(models.Model):
    title = models.CharField(max_length=25)
    image = models.ImageField(upload_to="pizzaName")
    price = models.PositiveIntegerField()
    modalContent = models.TextField(blank="True")
    isMeat = models.PositiveIntegerField()
    popularity = models.PositiveIntegerField()
    date_create = models.CharField(max_length=10)
    date_update = models.CharField(max_length=10)

    def __str__(self):
        return self.title



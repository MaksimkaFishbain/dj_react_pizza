from django.db import models
from django.urls import reverse

class Card(models.Model):
    title = models.CharField(max_length=25, verbose_name='Название')
    image = models.ImageField(upload_to="pizzaImage/", verbose_name='Картинка')
    price = models.PositiveIntegerField(verbose_name='Цена')
    modalContent = models.TextField(blank="True", verbose_name='Описание')
    isMeat = models.PositiveIntegerField(verbose_name='Тип пиццы(0/1)')
    popularity = models.PositiveIntegerField(verbose_name='Популярность')
    date_create = models.CharField(max_length=10, verbose_name='Дата создания')
    date_update = models.CharField(max_length=10, verbose_name='Дата обновления')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('Card', kwargs={'название': self.title})

    class Meta:
        verbose_name='Карточки пицц'
        verbose_name_plural='Карточки пицц'
        ordering=['date_create','title']

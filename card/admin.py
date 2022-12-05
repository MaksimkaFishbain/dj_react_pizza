from django.contrib import admin

# Register your models here.
from card.models import Card


class CardAdmin(admin.ModelAdmin):
    list_display = ('id','title','date_create','image','isMeat')
    list_display_links = ('id','title')
    search_fields = ('title','modalContent')

admin.site.register(Card, CardAdmin)
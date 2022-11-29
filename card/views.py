from django.shortcuts import render
from card.models import Card
from django.core import serializers
from django.http import JsonResponse
import json

print(*Card.objects.values())



with open('frontend/src/infoCard.json','w',encoding='utf-8') as file:
    json.dump([*Card.objects.values()],file,indent = 2,ensure_ascii=False)

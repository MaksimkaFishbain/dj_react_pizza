from django.urls import path
from .urls import *
from card.views import *
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='home')
]
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("carte", views.tous, name="tous"),
    path("recette", views.recette, name="recette"),
]
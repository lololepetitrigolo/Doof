from django.urls import path

from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="index"),
    path("carte/", views.tous, name="tous"),
    path("carte/<int:n>/", views.spec, name="spec"),
    path("recette/", views.recep, name="recette"),
    path("recette/<int:n>/", views.specrece, name="rece"),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
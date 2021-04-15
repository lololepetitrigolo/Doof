from django.contrib import admin
from .models import menu, recette
# Register your models here.

admin.site.register(menu)
admin.site.register(recette)

class menuAdmin(admin.ModelAdmin):
    list_display = ("id","aliment1","nutriscore1","aliment2","nutriscore2","midi","commentaire")

class recetteAdmin(admin.ModelAdmin):
    list_display = ("id","nom","recette","sucrée")
from django.db import models

# Create your models here.
class menu(models.Model):
    aliment1 = models.CharField(max_length=30)
    nutriscore1 = models.IntegerField(default=-1)
    aliment2 = models.CharField(max_length=30, default="None")
    nutriscore2 = models.IntegerField(default=-1)
    midi = models.BooleanField()
    commentaire = models.CharField(max_length=280, default="None")

    def __str__(self):
        if self.aliment2 != 'None':
            return self.aliment1 + ' ' +self.aliment2
        return self.aliment1
    

class recette(models.Model):
    nom = models.CharField(max_length=75)
    rec = models.TextField(max_length=1500)
    sucrée = models.BooleanField()

    def __str__(self):
        return self.nom
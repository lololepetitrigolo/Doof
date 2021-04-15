from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from random import randint

from .models import menu, recette
# Create your views here.


def index(request):
    x = randint(1, len(menu.objects.all())-1)
    print(x)
    return render(request, "menu/index.html", {
        'n': x,
    })


def tous(request):
    menus_midi = menu.objects.all().filter(midi=True)
    menus_soir = menu.objects.all().filter(midi=False)
    return render(request, "menu/tous.html", {
        "liste_menu_midi": menus_midi,
        "liste_menu_soir": menus_soir,
    })


def recep(request):
    menus_sucree = recette.objects.all().filter(sucrée=True)
    menus_salee = recette.objects.all().filter(sucrée=False)
    return render(request, "menu/recette.html", {
        "liste_menus_sucree": menus_sucree,
        "liste_menus_salee": menus_salee,
    })


def spec(request, n):
    try:
        menus_midi = menu.objects.all().filter(midi=True)
        menus_soir = menu.objects.all().filter(midi=False)
        m = menu.objects.filter(id=n)[0]
        print(m)
        return render(request, "menu/spec.html", {
            "al1": m.aliment1,
            "al2": m.aliment2,
            "nutr1": m.nutriscore1,
            "nutr2": m.nutriscore2,
            "com": m.commentaire,
            "liste_menu_midi": menus_midi,
            "liste_menu_soir": menus_soir,
        })
    except:
        return HttpResponseRedirect(reverse("tous"))


def specrece(request, n):
    try:
        menus_sucree = recette.objects.all().filter(sucrée=True)
        menus_salee = recette.objects.all().filter(sucrée=False)
        r = recette.objects.filter(id=n)[0]
        return render(request, "menu/specrece.html", {
            "nom": r.nom,
            "rec": r.rec,
            "liste_menus_sucree": menus_sucree,
            "liste_menus_salee": menus_salee,
        })
    except:
        return HttpResponseRedirect(reverse("recette"))


def recherche(request):
    if request.method == 'POST':
        res = []
        r = request.POST['r']
        if r.replace(' ','') == '':
            return render(request, "menu/resultat.html", {
                "resultat": []
            })
        men = menu.objects.all()
        print(men)
        for m in men:
            print(m)
            if trouver(m.aliment1, r) or (trouver(m.aliment2, r) and m.aliment2 != 'None') or (trouver(m.commentaire, r) and m.commentaire != 'None'):
                res.append(m)
        return render(request, "menu/resultat.html", {
            "resultat": res
        })
    return HttpResponseRedirect(reverse("index"))


def trouver(t, m):
    t = t.lower()
    m = m.lower()
    for i in range(0, len(t)):
        if t[i:i+len(m)] == m:
            return True
    return False

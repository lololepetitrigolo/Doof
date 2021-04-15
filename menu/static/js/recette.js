/*
var printemps = [
                [leg, nutri leg, viandes, nutri viande, [accompagnement, accompagnement],[ingredient, ingredient], // menu1
                [leg, nutri leg, viandes, nutri viande, [accompagnement, accompagnement],[ingredient, ingredient], //menu2
                ...
              ]

- créer un tab pour chaque saison / types et un tableau avec tous les plats en commun
- récuperer le btn cliqué
- génerer un nb aléatoire
- décomposer le tableau de réferenece
- modifier la page de base pour afficher les bonnes valeurs
*/
var menu = [
  [
    "Crêpes",
    250,
    "g de farine, ",
    3,
    "oeufs, ",
    2,
    "cuillères à soupe de sucre, ",
    2,
    "cuillères à soupe d'huile, ",
    50,
    "cl d'eau/de lait",
    "melanger la farine plus la moitié du liquide. Ajouter ensuite les oeuf le sucre et l'huile. Pour finir ajouter le reste du liquide.",
    "sucree",
  ],
  [
    "Cookies",
    75,
    "g de farine, ",
    1,
    "oeufs, ",
    42.5,
    "g de sucre, ",
    42.5,
    "g de beure, ",
    50,
    "g de pépites de chocolat",
    0.5,
    "cuillère à café de levure chimique",
    "melanger la farine plus la moitié du liquide. Ajouter ensuite les oeuf le sucre et l'huile. Pour finir ajouter le reste du liquide.",
    "sucree",
  ],
];
var slider = document.getElementById("myRange");

function Hide(addr) {
  document.getElementById(addr).style.visibility = "hidden";
}

function Show(addr) {
  document.getElementById(addr).style.visibility = "visible";
  aleatoire();
}

function Hidenav() {
  document.getElementById("check").checked = false;
}

function Id() {
  var sucree = document.getElementById("divA");
  var salee = document.getElementById("divB");
  direct(sucree, salee);
  console.log('fr');
  return slider;
}

function direct(sucree, salee) {
  for (var i = 0; i < menu.length; i++) {
    if (menu[i][menu[i].length - 1] === "sucree") {
      var e = document.createElement("li");
      e.id = "nouveau";
      e.indice = i;
      e.onclick = function () {
        Affrecette(this.indice);
      };
      e.textContent = menu[i][0];
      sucree.appendChild(e);
    } else {
      var e = document.createElement("li");
      e.id = "nouveau";
      e.indice = i;
      e.onclick = function () {
        Affrecette(this.indice);
      };
      e.textContent = menu[i][0];
      salee.appendChild(e);
    }
    delete e;
  }
}

function Affrecette(n) {
  document.getElementById("nom_recette").innerHTML = menu[n][0];
  var ingr = document.getElementById("ingr");
  var prep = document.getElementById("preparation");
  var bot = document.getElementById("bot");
  bot.removeChild(ingr);

  var nouveau = document.createElement("p");
  nouveau.id = "ingr";
  nouveau.textContent = "Ingrédients: ";
  bot.insertBefore(nouveau, prep);

  var ingr = document.getElementById("ingr");
  var prep = document.getElementById("preparation");

  for (var i = 1; i < menu[n].length - 2; i += 2) {
    var e = document.createElement("a");
    var q = document.createElement("a");
    var ing = document.createElement("a");
    q.id = "quantité";
    q.textContent = menu[n][i];
    ing.id = "ingredient";
    ing.textContent = menu[n][i + 1];
    e.appendChild(q);
    e.appendChild(ing);
    ingr.appendChild(e);
  }

  document.getElementById("prep").innerHTML = menu[n][menu[n].length - 2];

  //prep
  if (menu[n][menu[n].length - 2] === "") {
    document.getElementById("preparation").innerHTML = "";
  }

  document.getElementById("foo").style.visibility = "visible";
}

function controle() {
  nom = document.getElementById("nom_recette").textContent;

  for (var i = 0; i < menu.length; i++) {
    if (nom === menu[i][0]) {
      n = i;
    }
  }

  var prep = document.getElementById("preparation");
  var ingredient = document.getElementById("ingr");
  var bot = document.getElementById("bot");
  bot.removeChild(ingredient);

  var nouveau = document.createElement("p");
  nouveau.id = "ingr";
  nouveau.textContent = "Ingrédients: ";
  bot.insertBefore(nouveau, prep);

  for (var i = 1; i < menu[n].length - 2; i += 2) {
    var ingredient = document.getElementById("ingr");
    var valeur = document.getElementById("myRange").value;

    var e = document.createElement("a");
    var q = document.createElement("a");
    var ing = document.createElement("a");
    q.id = "quantité";
    q.textContent = menu[n][i] * valeur;
    ing.id = "ingredient";
    ing.textContent = menu[n][i + 1];
    e.appendChild(q);
    e.appendChild(ing);
    ingredient.appendChild(e);
  }
}
function aleatoire() {
  var n = Math.round(Math.random() * (menu.length - 1));

  document.getElementById("nom_recette").innerHTML = menu[n][0];
  var ingr = document.getElementById("ingr");
  var prep = document.getElementById("preparation");
  var bot = document.getElementById("bot");
  bot.removeChild(ingr);

  var nouveau = document.createElement("p");
  nouveau.id = "ingr";
  nouveau.textContent = "Ingrédients: ";
  bot.insertBefore(nouveau, prep);

  var ingr = document.getElementById("ingr");
  var prep = document.getElementById("preparation");

  for (var i = 1; i < menu[n].length - 2; i += 2) {
    var e = document.createElement("a");
    var q = document.createElement("a");
    var ing = document.createElement("a");
    q.id = "quantité";
    q.textContent = menu[n][i];
    ing.id = "ingredient";
    ing.textContent = menu[n][i + 1];
    e.appendChild(q);
    e.appendChild(ing);
    ingr.appendChild(e);
  }

  document.getElementById("prep").innerHTML = menu[n][menu[n].length - 2];

  //prep
  if (menu[n][menu[n].length - 2] === "") {
    document.getElementById("preparation").innerHTML = "";
  }

  document.getElementById("foo").style.visibility = "visible";
}

Id();

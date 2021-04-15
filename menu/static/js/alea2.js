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
  ["Patates",70,"Roti",50,"midi",""],
  ["Tomates",90,"Jambon",25,"midi",""],
  ["Chou rouge",100,"Poulet",40,"midi",""],
  ["Riz",0,"Aiguilette de poulet",0,"midi",""],
  ["Steak haché",0,"Frites",0,"midi",""],
  ["Petit pois",0,"Côtes de porc",75,"midi",""],
  ["Ratatouile",78,"Poisson pané",0,"midi","Conseil : Vous pouvez mettre du comté sur le poisson pané c'est un délice"],
  ["Poélée Basquaise",90,"Poisson",0,"midi",""],
  ["Cake au Gorgonzola/Aubergine",0,"",0,"soir","Ingrédients : boite d'aubergines, oeuf, farine, gorgonzola, levure chimique"],
  ["Pain perdu",0,"",0,"soir","Conseil : Vous pouvez en faire des sucrés et des salés"],
  ["Crêpes",0,"",0,"soir","Conseil : Vous pouvez en faire des sucrés et des salés"],
  ["Lasagne",0,"",0,"midi","Ingrédients : pâtes à lasagne, viande hachées, sauce tomates, oignons, bechamelle"],
  ["Rizotto",0,"",0,"soir","Ingrédients : riz, thon, sauce tomate, olives"],
  ["Salade",0,"Pizza",0,"soir",""],
  ["Gnocchi",0,"",0,"soir",""],
  ["Ravioli",0,"",0,"soir",""],
  ["Raviole",0,"",0,"soir",""],
  ["Lentilles",0,"Saucisse de morteau",0,"midi",""],
  ["Croziflette",0,"",0,"midi","Ingredients : crozet, Roblochon, lardons, oignons"],
  ["Haricots vert",0,"Aiguilette de poulet",0,"midi",""],
  ["Salsifis",0,"Steak haché",0,"midi",""],
  ["Quiche",36,"",0,"soir","Ingrédients : pâtes à tarte, crème, oeuf, lait, comté, lardons, oignons"],
  ["Spaghetti",90,"Bolognaise",0,"midi",""],
  ["Salade d'endive",0,"",0,"soir","Ingrédients : endives, pomme, jamboneau, comté, tomates"],
  ["Salade coleslow",0,"paté en croute",5,"soir",""],
  ["Boudin",0,"Pommes",0,"soir",""],
  ["Courgettes rapées",70,"maquereau",50,"soir","Conseil : comme fromage vous pouvez choisir du : chèvre, madame Loïc"],
  ["Carotte",0,"Terrine",0,"midi",""],
  ["Hamburger",0,"frites/salade",90,"midi","Ingrédient : pain à hamburger, steak, oignons, salade, lard, tartare, sauce"],
  ["Crêpes savoyarde",0,"",0,"soir",""],
  ["Tarte au thon",0,"",0,"soir","Ingrédients : pâtes à tarte, thon, moutarde, oeuf, lait, crème, oignons"],
  ["Boulgour thomate",0,"Poulet estragon",0,"midi",""],
  ["Poêlé meridionale",0,"Steak",0,"midi",""],
  ["Poêlé basquaise",90,"Côte de porc",75,"midi",""],
  ["Haricots",90,"Wings de poulet",60,"midi",""],
  ["Nems",0,"Salade/Endive",0,"soir",""],
  ["Salalde de pâtes",0,"",0,"soir","Ingrédients : pâtes, olive, maïs, tomates, poulet en tranche"],
  ["Riz poivrons",0,"Aiguilette de poulet",0,"midi",""],
  ["Tomates provençale",0,"Côte de porc",75,"midi",""],
  ["Croques monsieur",0,"",0,"soir","Ingrédients : pain de mie, tapenade, jambon, tomates, comté"],
  ["Taboulé",0,"Jambon de poulet",0,"soir",""],
  ["Riz",0,"Veau marengo",0,"midi",""],
  ["Gaspacho",0,"",0,"soir","Ingredients : gaspacho, tomates, concombres, poivrons"],
  ["Tomates provençale",0,"Filet de merlu",0,"midi",""],
  ["Tomates farcie",0,"",0,"midi","Conseil : vous pouvez aussi farcire des courgettes et des poivrons"],
  ["Fajitas",0,"",0,"midi","Ingrédient : galette de blé, viande hachées, sauce tomates, épice"],
  ["Purée",0,"Petites saucisses",0,"midi",""],
  ["Aubergine cuisinées",0,"Cordon bleu",0,"midi",""],
  ["Tartines de thiriet",0,"",0,"soir",""],
  ["Courgettes",0,"Steak de thon",0,"midi",""],
  ["Barbecue",0,"",0,"midi",""],
  ["Pommes de terre grenaille",78,"Côtes de porc",75,"midi",""],
  ["Pates",90,"Steak",0,"midi",""],
  ["Tomates",0,"Rotis de porc",42,"soir",""],
  ["Semoule",90,"Côtes de porc",75,"midi",""]
];


function Hide (addr) {
  document.getElementById(addr).style.visibility = "hidden";
}

function Show (addr) {
  document.getElementById(addr).style.visibility = "visible";
  aff();
}

function Hidenav () {
  document.getElementById("check").checked = false;
}

function aff() {
  var n = Math.round(Math.random()*(menu.length-1));
  document.getElementById('leg').innerHTML = menu[n][0];
  if (menu[n][2] != "") {
    document.getElementById('via').innerHTML = menu[n][2];
  }
  else{
    document.getElementById('via').innerHTML = "Aucune";
  }
  document.getElementById('nutrileg').innerHTML = menu[n][1]+"/100";
  document.getElementById('nutrivia').innerHTML = menu[n][3]+"/100";
  //nutriscore
  if (menu[n][1] === 0) {
    document.getElementById('nutrileg').innerHTML = "";
  }
  if (menu[n][3] === 0) {
    document.getElementById('nutrivia').innerHTML = "";
  }

  //prep
  if(menu[n][5] == ""){
    document.getElementById('prep').innerHTML ="";
  }

  //viande
  if(menu[n][2] == ""){
    document.getElementById('via').innerHTML ="";
  }

  //légume
  if(menu[n][0] == ""){
    document.getElementById('leg').innerHTML ="";
  }
  
}

function Id() {
  var m = document.getElementById("divA");
  var s = document.getElementById("divB");
  direct(m,s);
  return m,s;
}

function direct(m,s) {
  for (var i = 0; i < menu.length + 1; i++) {
    if (menu[i][4] === "midi") {
      var e = document.createElement("li");
      e.id = "nouveau";
      e.indice = i;
      e.onclick = function() { Affmenu(this.indice); };
      e.textContent = menu[i][0] +" "+ menu[i][2];
      m.appendChild(e);
    } else {
      var e = document.createElement("li");
      e.id = "nouveau";
      e.indice = i;
      e.onclick = function() { Affmenu(this.indice); };
      e.textContent = menu[i][0] +" "+ menu[i][2];
      s.appendChild(e);
    }
    delete(e);
  }
}

function Affmenu(n) {
  document.getElementById('leg').innerHTML = menu[n][0];
  document.getElementById('prep').innerHTML = menu[n][5];
  document.getElementById('via').innerHTML = menu[n][2];
  document.getElementById('nutrileg').innerHTML = menu[n][1]+"/100";
  document.getElementById('nutrivia').innerHTML = menu[n][3]+"/100";

  //nutriscore
  if (menu[n][1] === 0) {
    document.getElementById('nutrileg').innerHTML = "";
  }
  if (menu[n][3] === 0) {
    document.getElementById('nutrivia').innerHTML = "";
  }

  //prep
  if(menu[n][5] == ""){
    document.getElementById('prep').innerHTML ="";
  }

  //viande
  if(menu[n][2] == ""){
    document.getElementById('via').innerHTML ="";
  }

  //légume
  if(menu[n][0] == ""){
    document.getElementById('leg').innerHTML ="";
  }
  
  document.getElementById('foo').style.visibility = "visible";
}

Id()
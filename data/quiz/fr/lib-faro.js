QBANK("fr", "lib-faro", {
  "f": [
    {
      "type": "mc",
      "q": "De quoi le phare avertit-il les bateaux ?",
      "options": [
        "De l'endroit où trouver des poissons",
        "De l'heure exacte",
        "Des rochers dangereux et de l'entrée des ports"
      ],
      "answer": 2,
      "explain": "Le phare signale les zones dangereuses et indique où sont les ports."
    },
    {
      "type": "tf",
      "q": "La pièce de verre tout en haut du phare s'appelle la lanterne.",
      "answer": true,
      "explain": "La lanterne contient la lampe et la lentille."
    },
    {
      "type": "text",
      "q": "Comment s'appelait la personne qui vivait dans le phare et s'occupait de la lumière ?",
      "answer": [
        "gardien",
        "le gardien",
        "gardien de phare",
        "le gardien de phare"
      ],
      "explain": "Le gardien allumait la lampe, nettoyait les vitres et remontait le mécanisme."
    },
    {
      "type": "mc",
      "q": "Qu'y a-t-il sur le dôme du phare pour le protéger de la foudre ?",
      "options": [
        "Un drapeau",
        "Un paratonnerre",
        "Une cloche"
      ],
      "answer": 1,
      "explain": "Le phare est le point le plus haut de la côte, il a donc un paratonnerre."
    }
  ],
  "m": [
    {
      "type": "text",
      "q": "Comment s'appelle la lentille inventée en 1822 qui concentre la lumière du phare en faisceaux puissants ?",
      "answer": [
        "lentille de fresnel",
        "la lentille de fresnel",
        "fresnel"
      ],
      "explain": "C'est la lentille de Fresnel, faite d'anneaux de verre."
    },
    {
      "type": "tf",
      "q": "Un phare dont la lumière est plus basse se voit de plus loin, parce que la lumière est plus concentrée.",
      "answer": false,
      "explain": "Faux : plus la lumière est haute, plus on la voit de loin, car la Terre est ronde."
    },
    {
      "type": "mc",
      "q": "Pourquoi construit-on les phares sur des falaises, des pointes et des îlots ?",
      "options": [
        "Parce qu'il y a plus de touristes",
        "Parce que la mer y est toujours calme",
        "Parce que c'est là que les bateaux courent le plus de risques"
      ],
      "answer": 2,
      "explain": "On met les phares là où le danger pour les bateaux est le plus grand."
    },
    {
      "type": "order",
      "q": "Range de bas en haut.",
      "items": [
        "Falaise",
        "Tour avec l'escalier",
        "Lanterne avec la lentille",
        "Dôme avec le paratonnerre"
      ],
      "explain": "On part de la falaise, on monte la tour jusqu'à la lanterne et tout en haut se trouve le dôme."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Marc dit : « La lentille de Fresnel fait plus de lumière que la lampe. » Qu'est-ce qui est faux ?",
      "options": [
        "Elle sert à faire tourner le phare",
        "Elle ne crée pas de lumière : elle concentre celle de la lampe en faisceaux étroits",
        "Elle sert seulement à protéger du vent"
      ],
      "answer": 1,
      "explain": "La lentille courbe les rayons et les rassemble en faisceaux, mais la lumière vient de la lampe."
    },
    {
      "type": "tf",
      "q": "Aujourd'hui les bateaux ont le GPS, donc les phares ne servent plus à rien.",
      "answer": false,
      "explain": "Faux : si l'électronique tombe en panne, la lumière d'un phare peut encore sauver un bateau."
    },
    {
      "type": "num",
      "q": "Une lentille à deux faisceaux fait un tour toutes les 15 secondes. Combien d'éclats un bateau voit-il en 1 minute ?",
      "answer": 8,
      "unit": "éclats",
      "explain": "En 60 secondes, il y a 60 : 15 = 4 tours. À chaque tour passent 2 faisceaux, donc 4 × 2 = 8 éclats."
    },
    {
      "type": "mc",
      "q": "Un bateau voit un phare avec 3 éclats toutes les 10 secondes et sait lequel c'est. Qu'a-t-il utilisé ?",
      "options": [
        "La couleur des bandes de la tour",
        "Le bruit de la lentille",
        "La caractéristique du phare, c'est-à-dire son rythme d'éclats"
      ],
      "answer": 2,
      "explain": "Chaque phare a son propre rythme d'éclats et, en les comptant, on le reconnaît."
    }
  ]
});

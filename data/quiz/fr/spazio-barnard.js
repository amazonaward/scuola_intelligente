QBANK("fr", "spazio-barnard", {
  "f": [
    {
      "type": "mc",
      "q": "Dans quelle constellation se trouve l'étoile de Barnard ?",
      "options": [
        "Orion",
        "Ophiuchus",
        "Le Cygne"
      ],
      "answer": 1,
      "explain": "Elle se trouve dans la constellation d'Ophiuchus."
    },
    {
      "type": "tf",
      "q": "L'étoile de Barnard est visible à l'œil nu.",
      "answer": false,
      "explain": "Non : elle est trop faible (magnitude 9,5), il faut un télescope."
    },
    {
      "type": "num",
      "q": "À environ combien d'années-lumière de la Terre se trouve l'étoile de Barnard ? (arrondis à l'entier)",
      "answer": 6,
      "tol": 0.5,
      "unit": "années-lumière",
      "explain": "Elle est à 5,96 années-lumière, donc environ 6."
    },
    {
      "type": "text",
      "q": "Comment s'appelait l'astronome qui a remarqué en 1916 que cette étoile se déplace dans le ciel plus que toutes les autres ?",
      "answer": [
        "barnard",
        "edward barnard",
        "edward emerson barnard"
      ],
      "explain": "C'était Edward Barnard, et l'étoile porte son nom."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Pourquoi l'étoile de Barnard semble-t-elle autant se déplacer dans le ciel ?",
      "options": [
        "Parce qu'elle est proche de nous et se déplace vite",
        "Parce qu'elle est énorme",
        "Parce qu'elle est très brillante"
      ],
      "answer": 0,
      "explain": "Son mouvement apparent est grand parce qu'elle est proche et rapide."
    },
    {
      "type": "tf",
      "q": "Le rayon de l'étoile de Barnard vaut 0,19 fois celui du Soleil : elle est donc plus petite que le Soleil.",
      "answer": true,
      "explain": "Un rayon inférieur à 1 fois celui du Soleil signifie une étoile plus petite."
    },
    {
      "type": "mc",
      "q": "Que va-t-il se passer dans environ 10 000 ans, d'après les calculs ?",
      "options": [
        "Elle explosera en supernova",
        "Elle quittera notre galaxie",
        "Elle sera à moins de 4 années-lumière de nous"
      ],
      "answer": 2,
      "explain": "Elle s'approchera au point de devenir, pour un temps, l'étoile la plus proche de nous."
    },
    {
      "type": "num",
      "q": "L'étoile de Barnard a peut-être 10 milliards d'années, le Soleil 4,6 milliards. Combien de milliards d'années de plus a l'étoile de Barnard ?",
      "answer": 5.4,
      "tol": 0.2,
      "unit": "milliards d'années",
      "explain": "10 − 4,6 = 5,4 milliards d'années."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Qu'est-il arrivé aux planètes de l'étoile de Barnard ?",
      "options": [
        "Pendant des années on en a annoncé qui n'existaient pas, puis en 2024–2025 on en a trouvé de vraies, petites et rocheuses",
        "On ne les a jamais cherchées",
        "En 2024 on a trouvé des planètes géantes plus grosses que Jupiter"
      ],
      "answer": 0,
      "explain": "La science corrige ses erreurs : les anciennes planètes étaient une erreur, les nouvelles sont petites et rocheuses."
    },
    {
      "type": "order",
      "q": "Classe ces étoiles de la plus proche à la plus lointaine de la Terre (sans compter le Soleil).",
      "items": [
        "Proxima du Centaure",
        "Étoile de Barnard",
        "Sirius",
        "Bételgeuse"
      ],
      "explain": "Proxima est à 4,2 années-lumière, Barnard à 6, Sirius à 8,6, Bételgeuse à environ 550."
    },
    {
      "type": "tf",
      "q": "Si en 180 ans l'étoile de Barnard parcourt dans le ciel la largeur de la Pleine Lune, en 360 ans elle en parcourra environ le double.",
      "answer": true,
      "explain": "À la même vitesse, un temps double donne une distance double : 2 largeurs de Lune."
    },
    {
      "type": "mc",
      "q": "Pourquoi l'étoile de Barnard, bien que si proche, n'est-elle pas visible à l'œil nu ?",
      "options": [
        "Parce qu'elle est cachée derrière le Soleil",
        "Parce que c'est une petite naine rouge froide qui émet très peu de lumière",
        "Parce qu'elle est très très loin"
      ],
      "answer": 1,
      "explain": "Une naine rouge est petite et peu chaude (environ 3 200 K), donc peu lumineuse : il faut un télescope."
    }
  ]
});

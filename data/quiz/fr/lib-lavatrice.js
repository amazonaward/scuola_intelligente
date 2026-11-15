QBANK("fr", "lib-lavatrice", {
  "f": [
    {
      "type": "mc",
      "q": "Où met-on la lessive avant de lancer le lave-linge ?",
      "options": [
        "Dans le bac à lessive",
        "Dans la pompe de vidange",
        "Dans le hublot"
      ],
      "answer": 0,
      "explain": "L'eau qui entre passe par le bac et entraîne la lessive dans la cuve."
    },
    {
      "type": "tf",
      "q": "Pendant le lavage, le hublot se verrouille tout seul, donc on ne peut pas l'ouvrir avec de l'eau à l'intérieur.",
      "answer": true,
      "explain": "Le verrouillage de la porte évite que l'eau s'échappe."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le grand « tonneau » percé de trous où l'on met le linge ?",
      "answer": [
        "tambour",
        "le tambour"
      ],
      "explain": "Le tambour tourne dans la cuve et soulève le linge avec ses palettes."
    },
    {
      "type": "mc",
      "q": "Quel choix fait économiser le plus d'énergie ?",
      "options": [
        "Laver toujours à 90 °C",
        "Laver à 30 °C quand le linge est peu sale",
        "Laver à 60 °C même le linge propre"
      ],
      "answer": 1,
      "explain": "Chauffer l'eau est ce qui consomme le plus : à 30 °C, on utilise moins de la moitié de l'énergie d'un lavage à 60 °C."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un lavage à 30 °C consomme 0,5 kWh et un lavage à 60 °C en consomme 1,2. Combien de kWh économise-t-on en faisant 10 lavages à 30 °C au lieu de 60 °C ?",
      "answer": 7,
      "unit": "kWh",
      "explain": "1,2 − 0,5 = 0,7 kWh par lavage ; 0,7 × 10 = 7 kWh."
    },
    {
      "type": "mc",
      "q": "Pourquoi le lave-linge doit-il être bien à niveau sur ses pieds réglables ?",
      "options": [
        "Pour laver avec moins d'eau",
        "Pour faire moins de mousse",
        "Parce que sinon il vibre et « se promène » à l'essorage",
        "Pour chauffer plus vite"
      ],
      "answer": 2,
      "explain": "S'il n'est pas bien à niveau, les vibrations de l'essorage le font trembler et se déplacer."
    },
    {
      "type": "tf",
      "q": "La grande roue (poulie) fixée au tambour tourne plus lentement que la petite roue du moteur, mais avec plus de force.",
      "answer": true,
      "explain": "La courroie relie les deux roues : la grande tourne plus lentement et avec plus de force."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre comment l'eau entre dans le lave-linge.",
      "items": [
        "La carte électronique ouvre l'électrovanne",
        "L'eau passe par le bac et emporte la lessive",
        "L'eau entre dans la cuve",
        "Le pressostat détecte qu'il y en a assez et la vanne se ferme"
      ],
      "explain": "L'eau entre seulement jusqu'à ce que le capteur de pression sente qu'il y en a assez : alors la vanne se ferme."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Après un déménagement, le lave-linge « se promène » et gronde à l'essorage. Que vérifies-tu en premier ?",
      "options": [
        "Que la lessive soit dans le bon bac",
        "Que la pompe ne soit pas bouchée",
        "Que la résistance soit chaude",
        "Qu'il soit bien à niveau sur ses pieds et que le linge soit bien réparti dans le tambour"
      ],
      "answer": 3,
      "explain": "Une machine mal à niveau ou avec tout le linge d'un côté vibre beaucoup : c'est la première chose à vérifier."
    },
    {
      "type": "num",
      "q": "Le moteur tourne à 6000 tours par minute. La grande roue fixée au tambour a un diamètre 5 fois plus grand que la petite roue du moteur. À combien de tours par minute tourne le tambour ?",
      "answer": 1200,
      "unit": "tr/min",
      "explain": "Avec une courroie, une roue 5 fois plus grande tourne 5 fois moins vite : 6000 ÷ 5 = 1200 tours par minute."
    },
    {
      "type": "tf",
      "q": "La résistance sert à faire tourner le tambour, car le courant la fait bouger comme un moteur.",
      "answer": false,
      "explain": "Faux : la résistance chauffe quand le courant la traverse et chauffe l'eau. C'est le moteur électrique qui fait tourner le tambour."
    },
    {
      "type": "mc",
      "q": "Les tissus synthétiques comme la polaire perdent de minuscules fils de plastique à chaque lavage. Quel choix aide le plus à réduire le problème ?",
      "options": [
        "Toujours laver à 90 °C",
        "Utiliser un sac ou un filtre spécial qui retient les fils",
        "Utiliser plus de lessive",
        "Essorer plus longtemps"
      ],
      "answer": 1,
      "explain": "Il existe des sacs et des filtres spéciaux qui retiennent les microplastiques, pour qu'ils n'arrivent pas jusqu'à la mer."
    }
  ]
});

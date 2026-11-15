QBANK("fr", "lib-computer", {
  "f": [
    {
      "type": "mc",
      "q": "Où restent enregistrés les photos et les jeux, même quand l'ordinateur est éteint ?",
      "options": [
        "Dans la RAM",
        "Dans le ventilateur",
        "Dans le SSD"
      ],
      "answer": 2,
      "explain": "Le SSD est l'entrepôt qui n'oublie pas : les données restent même sans courant."
    },
    {
      "type": "tf",
      "q": "Le clavier est un périphérique d'entrée.",
      "answer": true,
      "explain": "Il envoie à l'ordinateur un code pour chaque touche pressée : il fait entrer tes commandes dans l'ordinateur."
    },
    {
      "type": "text",
      "q": "Comment s'appellent les millions de petits points qui forment l'image sur l'écran ?",
      "answer": [
        "pixels",
        "pixel",
        "les pixels"
      ],
      "explain": "L'écran est fait de millions de points colorés, les pixels."
    },
    {
      "type": "mc",
      "q": "Quelle pièce calcule la couleur des pixels et dessine les images ?",
      "options": [
        "La carte mère",
        "La carte graphique",
        "La souris"
      ],
      "answer": 1,
      "explain": "La carte graphique (GPU) calcule la couleur de chaque pixel et envoie l'image au moniteur."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Une carte graphique prépare 60 images par seconde. Combien d'images prépare-t-elle en 5 secondes de jeu ?",
      "answer": 300,
      "unit": "images",
      "explain": "60 × 5 = 300 images."
    },
    {
      "type": "mc",
      "q": "Quand tu ouvres un jeu, ses données sont copiées du SSD vers la RAM. Pourquoi ?",
      "options": [
        "Parce que la RAM est beaucoup plus rapide et que le processeur y accède tout de suite",
        "Parce que le SSD se vide quand tu ouvres un jeu",
        "Parce que la RAM garde les données pour toujours",
        "Parce que la RAM est plus grande que le SSD"
      ],
      "answer": 0,
      "explain": "La RAM est l'établi ultra-rapide : le processeur y lit les données des programmes ouverts sans attendre."
    },
    {
      "type": "tf",
      "q": "Si tu coupes le courant de l'ordinateur, les photos enregistrées sur le SSD disparaissent.",
      "answer": false,
      "explain": "Faux : le SSD utilise des puces de mémoire flash et garde les données même sans courant. Seule la RAM s'efface."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre le trajet d'une lettre que tu tapes au clavier.",
      "items": [
        "Tu appuies sur la touche du clavier",
        "Le clavier envoie un code à l'ordinateur",
        "Le processeur traite le code",
        "L'écran affiche la lettre"
      ],
      "explain": "Entrée (clavier), traitement (processeur), sortie (écran) : c'est le cycle de tout ordinateur."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "L'ordinateur de Luc s'éteint tout seul après une demi-heure de jeu. Dans le boîtier, le ventilateur du processeur est plein de poussière. Quelle est l'explication la plus probable ?",
      "options": [
        "La RAM s'est remplie de photos",
        "L'écran est trop grand",
        "La souris envoie trop de commandes",
        "Le processeur chauffe trop et s'éteint pour ne pas brûler"
      ],
      "answer": 3,
      "explain": "Avec un ventilateur encrassé, la chaleur n'est pas évacuée : le processeur chauffe et s'éteint pour se protéger."
    },
    {
      "type": "mc",
      "q": "Quelle comparaison entre RAM et SSD est correcte ?",
      "options": [
        "La RAM garde les données pendant des années, le SSD les perd quand on éteint",
        "La RAM est très rapide mais se vide sans courant ; le SSD est plus lent mais garde les données",
        "C'est la même chose avec deux noms différents",
        "Le SSD exécute les instructions des programmes, la RAM non"
      ],
      "answer": 1,
      "explain": "RAM = établi rapide et temporaire ; SSD = entrepôt pour conserver. C'est le processeur qui exécute les instructions."
    },
    {
      "type": "tf",
      "q": "La souris est un périphérique de sortie, parce qu'elle affiche la flèche à l'écran.",
      "answer": false,
      "explain": "Faux : la souris est un périphérique d'entrée, elle envoie tes mouvements à l'ordinateur. C'est l'écran, de sortie, qui affiche la flèche."
    },
    {
      "type": "num",
      "q": "Un écran fait 400 pixels de large et 300 de haut, et la carte graphique calcule 60 images par seconde. Combien de couleurs de pixels doit-elle calculer en une seconde ?",
      "answer": 7200000,
      "unit": "couleurs",
      "explain": "400 × 300 = 120 000 pixels par image ; 120 000 × 60 = 7 200 000."
    }
  ]
});

QBANK("fr", "spazio-cygnus-x1", {
  "f": [
    {
      "type": "mc",
      "q": "Dans quelle constellation se trouve Cygnus X-1 ?",
      "options": [
        "Orion",
        "Le Cygne",
        "Le Scorpion"
      ],
      "answer": 1,
      "explain": "Cygnus X-1 se trouve dans le Cygne, près de l'étoile Sadr."
    },
    {
      "type": "tf",
      "q": "Cygnus X-1 a été le premier objet reconnu par les astronomes comme un trou noir.",
      "answer": true,
      "explain": "Dans les années 1970, ce fut le premier trou noir reconnu."
    },
    {
      "type": "mc",
      "q": "Avec quel type d'étoile Cygnus X-1 tourne-t-il ?",
      "options": [
        "Une supergéante bleue",
        "Une naine rouge",
        "Une planète géante"
      ],
      "answer": 0,
      "explain": "Sa compagne est la supergéante bleue HDE 226868."
    },
    {
      "type": "num",
      "q": "Le trou noir et son étoile compagne tournent l'un autour de l'autre en 5,6 jours. Combien de jours cela fait-il, arrondi à l'entier ?",
      "answer": 6,
      "tol": 0.5,
      "unit": "jours",
      "explain": "5,6 s'arrondit à 6 jours."
    }
  ],
  "m": [
    {
      "type": "mc",
      "q": "Pourquoi utilise-t-on des fusées et des satellites pour étudier les rayons X de Cygnus X-1 ?",
      "options": [
        "Parce que les rayons X sont trop faibles",
        "Parce que les télescopes au sol sont trop petits",
        "Parce que l'atmosphère terrestre bloque les rayons X"
      ],
      "answer": 2,
      "explain": "Les rayons X ne traversent pas l'atmosphère : il faut monter au-dessus."
    },
    {
      "type": "num",
      "q": "Cygnus X-1 a une masse d'environ 21 Soleils, Gaia BH1 d'environ 10. Environ combien de masses solaires de plus a Cygnus X-1 ?",
      "answer": 11,
      "tol": 1,
      "unit": "masses solaires",
      "explain": "21 − 10 = 11 masses solaires."
    },
    {
      "type": "tf",
      "q": "L'horizon des événements est la frontière au-delà de laquelle même la lumière ne peut s'échapper d'un trou noir.",
      "answer": true,
      "explain": "À l'intérieur de l'horizon, la gravité est si forte que rien, pas même la lumière, ne peut sortir."
    },
    {
      "type": "mc",
      "q": "Quelle forme prend le gaz que le trou noir arrache à son étoile compagne avant de tomber ?",
      "options": [
        "Un nuage sphérique immobile",
        "Un disque qui tourne en spirale",
        "Un anneau de glace"
      ],
      "answer": 1,
      "explain": "Le gaz forme un disque qui tourne en spirale et chauffe de plus en plus."
    }
  ],
  "d": [
    {
      "type": "order",
      "q": "Mets dans l'ordre l'histoire des rayons X de Cygnus X-1.",
      "items": [
        "Une très grosse étoile s'effondre",
        "Un trou noir se forme",
        "Le trou noir arrache du gaz à son étoile compagne",
        "Le gaz forme un disque et chauffe",
        "Le disque émet des rayons X"
      ],
      "explain": "De l'effondrement naît le trou noir ; le gaz volé forme un disque, chauffe à des millions de degrés et émet des rayons X."
    },
    {
      "type": "tf",
      "q": "Si l'étoile compagne s'éloignait et que le gaz ne tombait plus dans le trou noir, Cygnus X-1 deviendrait presque invisible aux rayons X, comme Gaia BH1.",
      "answer": true,
      "explain": "Les rayons X viennent du gaz qui tombe : sans gaz, le trou noir devient « dormant »."
    },
    {
      "type": "mc",
      "q": "L'horizon des événements de Cygnus X-1 a un diamètre d'environ 120 km, mais le trou noir a 21 masses solaires. Qu'est-ce que cela signifie ?",
      "options": [
        "Que le trou noir est vide à l'intérieur",
        "Qu'il occupe la place d'une étoile aussi grande que le Soleil",
        "Que 21 masses solaires sont concentrées dans un espace minuscule : densité énorme"
      ],
      "answer": 2,
      "explain": "Le Soleil mesure environ 1,4 million de km de large : 21 Soleils dans 120 km, c'est une densité incroyable."
    },
    {
      "type": "num",
      "q": "Le trou noir et sa compagne tournent ensemble en 5,6 jours. Combien de tours complets font-ils en 28 jours ?",
      "answer": 5,
      "tol": 0.1,
      "unit": "tours",
      "explain": "28 ÷ 5,6 = 5 tours."
    }
  ]
});

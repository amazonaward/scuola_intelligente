QBANK("fr", "p5-tec-dati-binario", {
  "f": [
    {
      "type": "mc",
      "q": "Quels chiffres le code binaire utilise-t-il ?",
      "options": [
        "De 0 à 9",
        "Seulement 0 et 1",
        "Seulement 1 et 2"
      ],
      "answer": 1,
      "explain": "Le binaire utilise seulement deux chiffres : 0 et 1."
    },
    {
      "type": "tf",
      "q": "Un bit peut valoir seulement 0 ou 1.",
      "answer": true,
      "explain": "Le bit est la plus petite information : un oui ou un non."
    },
    {
      "type": "num",
      "q": "Combien vaut le nombre binaire 11 en décimal ?",
      "answer": 3,
      "explain": "Les positions valent 2 et 1 : 2 + 1 = 3."
    },
    {
      "type": "mc",
      "q": "Qu'est-ce qu'un transistor ?",
      "options": [
        "Un type de câble",
        "Une mémoire pour les photos",
        "Un minuscule interrupteur électronique"
      ],
      "answer": 2,
      "explain": "Un transistor est un interrupteur qui peut être allumé (1) ou éteint (0). Les ordinateurs en contiennent des milliards."
    },
    {
      "type": "tf",
      "q": "Le code Unicode contient aussi les émojis.",
      "answer": true,
      "explain": "Unicode compte plus de 150 000 caractères de toutes les langues, y compris les émojis."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Combien vaut le nombre binaire 10011 en décimal ?",
      "answer": 19,
      "explain": "Les positions sont 16, 8, 4, 2, 1 : 16 + 0 + 0 + 2 + 1 = 19."
    },
    {
      "type": "mc",
      "q": "Comment écrit-on 12 en binaire ?",
      "options": [
        "1010",
        "1100",
        "1001"
      ],
      "answer": 1,
      "explain": "12 = 8 + 4, donc les positions 8 et 4 sont allumées : 1100."
    },
    {
      "type": "num",
      "q": "Une image a 10 pixels et chaque pixel utilise 3 octets (rouge, vert, bleu). Combien d'octets occupe-t-elle ?",
      "answer": 30,
      "unit": "octets",
      "explain": "10 × 3 = 30 octets."
    },
    {
      "type": "order",
      "q": "Mets ces nombres binaires dans l'ordre, du plus petit au plus grand.",
      "items": [
        "101",
        "110",
        "1000",
        "1011"
      ],
      "explain": "Ils valent 5, 6, 8 et 11."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le code, créé en 1963, qui attribue un numéro à chaque lettre (A = 65) ?",
      "answer": [
        "ascii",
        "le code ascii",
        "code ascii"
      ],
      "explain": "L'ASCII donne un numéro à chaque caractère, ensuite écrit en binaire."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Combien de bits faut-il au minimum pour écrire 20 valeurs différentes ?",
      "answer": 5,
      "unit": "bits",
      "explain": "Avec 4 bits il y a 2×2×2×2 = 16 valeurs, trop peu. Avec 5 bits il y en a 32 : c'est assez. Il faut 5 bits."
    },
    {
      "type": "num",
      "q": "Un dessin en couleurs est fait de 8 × 8 pixels et chaque pixel utilise 3 octets. Combien d'octets occupe-t-il en tout ?",
      "answer": 192,
      "unit": "octets",
      "explain": "8 × 8 = 64 pixels ; 64 × 3 = 192 octets."
    },
    {
      "type": "mc",
      "q": "Les ampoules 16, 2 et 1 sont allumées (10011). Tu allumes aussi celle du 4. Quel nombre décimal obtiens-tu ?",
      "options": [
        "22",
        "23",
        "24"
      ],
      "answer": 1,
      "explain": "Maintenant 16, 4, 2 et 1 sont allumées : 16 + 4 + 2 + 1 = 23."
    },
    {
      "type": "tf",
      "q": "En passant de 4 bits à 8 bits, les combinaisons possibles ne font que doubler (de 16 à 32).",
      "answer": false,
      "explain": "Chaque bit en plus double les combinaisons : 4 bits en plus multiplient par 2×2×2×2 = 16, donc 16 devient 256."
    },
    {
      "type": "mc",
      "q": "Marco compare 0111 et 1000. Quelle affirmation est juste ?",
      "options": [
        "0111 est plus grand, car il a trois uns",
        "1000 est plus grand, car il vaut 8 contre 7",
        "Ils sont égaux, car ils ont 4 chiffres"
      ],
      "answer": 1,
      "explain": "0111 = 4 + 2 + 1 = 7 ; 1000 = 8. Ce qui compte, c'est la valeur de la position, pas le nombre de uns."
    }
  ]
});

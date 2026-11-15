QBANK("fr", "lib-frigorifero", {
  "f": [
    {
      "type": "mc",
      "q": "Quelle pièce garde bien fermée la porte du réfrigérateur grâce à un aimant ?",
      "options": [
        "Le thermostat",
        "Le joint",
        "La clayette"
      ],
      "answer": 1,
      "explain": "Le bord en caoutchouc avec un aimant se colle au meuble en métal et empêche l'air froid de s'échapper."
    },
    {
      "type": "tf",
      "q": "Si tu laisses la porte du réfrigérateur ouverte longtemps, le compresseur doit travailler davantage.",
      "answer": true,
      "explain": "L'air chaud de la pièce entre et le frigo doit enlever plus de chaleur pour rester froid."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le liquide spécial qui circule dans les tuyaux du réfrigérateur et transporte la chaleur ?",
      "answer": [
        "fluide frigorigène",
        "le fluide frigorigène",
        "réfrigérant",
        "le réfrigérant",
        "frigorigène",
        "gaz réfrigérant",
        "liquide réfrigérant"
      ],
      "explain": "Le fluide frigorigène circule dans un circuit fermé : il s'évapore et se condense sans cesse."
    },
    {
      "type": "mc",
      "q": "Qu'est-ce qui mesure la température dans le frigo et allume ou éteint le compresseur ?",
      "options": [
        "Le thermostat",
        "L'ampoule",
        "La clayette en verre"
      ],
      "answer": 0,
      "explain": "Le thermostat éteint le compresseur quand il fait assez froid et le rallume quand ça se réchauffe."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Le congélateur est à −18 °C et le réfrigérateur à +4 °C. De combien de degrés le congélateur est-il plus froid que le réfrigérateur ?",
      "answer": 22,
      "unit": "°C",
      "explain": "De +4 à −18 : 4 + 18 = 22 degrés."
    },
    {
      "type": "mc",
      "q": "Pourquoi vaut-il mieux ne pas mettre au frigo une marmite de soupe encore bouillante ?",
      "options": [
        "Parce que le frigo se remplit d'eau",
        "Parce que la soupe devient plus salée",
        "Parce que le frigo doit enlever beaucoup plus de chaleur et le compresseur travaille beaucoup plus",
        "Parce que la soupe ne peut pas geler"
      ],
      "answer": 2,
      "explain": "Un aliment chaud apporte beaucoup de chaleur : le frigo doit l'évacuer et consomme plus, en réchauffant aussi les autres aliments."
    },
    {
      "type": "tf",
      "q": "Si tu laisses ouverte la porte d'un réfrigérateur en marche dans une cuisine fermée, la cuisine se refroidit.",
      "answer": false,
      "explain": "Faux : le frigo envoie la chaleur par le condenseur dans la cuisine. Avec la chaleur du moteur, la pièce se réchauffe un peu."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre ce qui se passe quand la température monte dans le frigo.",
      "items": [
        "L'intérieur du frigo se réchauffe",
        "Le thermostat le détecte",
        "Le compresseur se rallume",
        "Le fluide frigorigène évacue la chaleur et l'intérieur redevient froid"
      ],
      "explain": "Le thermostat commande le compresseur : il l'allume seulement quand il le faut et l'éteint quand il fait assez froid."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Le réfrigérateur d'Anna est collé au mur et la grille noire à l'arrière est couverte de poussière. Que se passe-t-il ?",
      "options": [
        "Le frigo devient plus froid",
        "La chaleur s'évacue mal, le compresseur travaille plus et on consomme plus d'énergie",
        "Le fluide frigorigène se transforme en eau",
        "Le thermostat tombe en panne tout de suite"
      ],
      "answer": 1,
      "explain": "Le condenseur doit céder de la chaleur à l'air : s'il est sale ou étouffé, il le fait mal et le compresseur doit travailler davantage."
    },
    {
      "type": "mc",
      "q": "Quel phénomène explique à la fois le froid que tu sens en sortant mouillé de la piscine et le froid de l'évaporateur ?",
      "options": [
        "La condensation libère de la chaleur",
        "La glace produit du froid",
        "L'évaporation absorbe la chaleur de ce qui l'entoure",
        "L'air froid monte toujours"
      ],
      "answer": 2,
      "explain": "Quand un liquide s'évapore, il prend de la chaleur à son entourage : à ta peau, ou à l'air et aux aliments du frigo."
    },
    {
      "type": "num",
      "q": "Le réfrigérateur A consomme 1,2 kWh par jour, le réfrigérateur B 0,8 kWh par jour. Combien de kWh de moins B consomme-t-il en 30 jours ?",
      "answer": 12,
      "unit": "kWh",
      "explain": "1,2 − 0,8 = 0,4 kWh par jour ; 0,4 × 30 = 12 kWh."
    },
    {
      "type": "tf",
      "q": "Le climatiseur fonctionne selon le même principe que le réfrigérateur : il déplace la chaleur d'un endroit à un autre.",
      "answer": true,
      "explain": "La pompe à chaleur qui chauffe les maisons fait le même travail, dans l'autre sens."
    }
  ]
});

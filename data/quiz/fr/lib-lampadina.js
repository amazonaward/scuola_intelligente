QBANK("fr", "lib-lampadina", {
  "f": [
    {
      "type": "mc",
      "q": "Quelle ampoule consomme le moins d'énergie pour la même lumière ?",
      "options": [
        "Celle à incandescence",
        "Celle à LED",
        "Elles consomment pareil"
      ],
      "answer": 1,
      "explain": "La LED fait de la lumière presque sans chauffer, c'est pourquoi elle consomme beaucoup moins."
    },
    {
      "type": "tf",
      "q": "L'ampoule à incandescence est brûlante parce que presque toute l'énergie se transforme en chaleur.",
      "answer": true,
      "explain": "Environ 95 parties sur 100 deviennent de la chaleur et seulement 5 de la lumière."
    },
    {
      "type": "text",
      "q": "Comment s'appelle la partie métallique de l'ampoule qui se visse dans la douille ?",
      "answer": [
        "culot",
        "le culot",
        "culot à vis",
        "culot e27"
      ],
      "explain": "Le culot à vis amène le courant de la douille à l'ampoule."
    },
    {
      "type": "mc",
      "q": "Qui a rendu l'ampoule à incandescence pratique en 1879 ?",
      "options": [
        "Isaac Newton",
        "Léonard de Vinci",
        "Thomas Edison"
      ],
      "answer": 2,
      "explain": "Edison a utilisé un filament de bambou carbonisé, mais d'autres inventeurs y travaillaient aussi."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Une ampoule à incandescence de 100 watts est remplacée par une LED de 12 watts qui donne la même lumière. Combien de watts économise-t-on en changeant 5 ampoules ?",
      "answer": 440,
      "unit": "watts",
      "explain": "100 − 12 = 88 watts par ampoule ; 88 × 5 = 440 watts."
    },
    {
      "type": "mc",
      "q": "Pourquoi le filament devient-il incandescent alors que les fils qui amènent le courant restent froids ?",
      "options": [
        "Parce que le filament est très fin et que le courant a du mal à le traverser",
        "Parce que le filament est en bois",
        "Parce que les fils n'ont pas de courant",
        "Parce que le filament est peint en noir"
      ],
      "answer": 0,
      "explain": "Dans le fil très fin, le courant rencontre beaucoup de difficulté et le chauffe ; dans les gros fils, il passe facilement."
    },
    {
      "type": "tf",
      "q": "Une LED émet de la lumière directement, sans avoir besoin de devenir incandescente.",
      "answer": true,
      "explain": "Quand le courant la traverse, les électrons libèrent leur énergie sous forme de lumière, presque sans chaleur."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre ce qui se passe quand tu allumes une ampoule à incandescence.",
      "items": [
        "Tu appuies sur l'interrupteur et le circuit se ferme",
        "Le courant traverse le filament",
        "Le filament chauffe jusqu'à environ 2500 °C",
        "Le filament brille d'une lumière jaune"
      ],
      "explain": "Le circuit fermé laisse passer le courant, qui chauffe le filament jusqu'à le faire briller."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Deux ampoules donnent la même quantité de lumière, 800 lumens : la A utilise 60 watts, la B 8 watts. Quelle affirmation est correcte ?",
      "options": [
        "A est meilleure, parce qu'elle consomme plus",
        "Elles sont pareilles, parce que les watts ne comptent pas",
        "A donne plus de lumière, parce qu'elle a plus de watts",
        "B est meilleure, parce qu'elle donne la même lumière avec moins d'énergie"
      ],
      "answer": 3,
      "explain": "Les lumens disent combien de lumière, les watts combien d'énergie est consommée : une bonne ampoule donne beaucoup de lumens avec peu de watts."
    },
    {
      "type": "num",
      "q": "Une ampoule LED dure 20 000 heures, une ampoule à incandescence dure 1000 heures. Combien d'ampoules à incandescence faut-il pour égaler les heures d'une LED ?",
      "answer": 20,
      "unit": "ampoules",
      "explain": "20 000 ÷ 1000 = 20 ampoules."
    },
    {
      "type": "tf",
      "q": "Si le filament casse, le circuit reste fermé et l'ampoule continue d'éclairer.",
      "answer": false,
      "explain": "Faux : le fil cassé interrompt le circuit, le courant ne peut plus passer et l'ampoule s'éteint."
    },
    {
      "type": "mc",
      "q": "Pourquoi l'ampoule LED contient-elle un petit circuit appelé « driver » ?",
      "options": [
        "Pour faire tourner les lumières",
        "Parce que les LED ne supportent pas le courant de la maison et qu'il faut le transformer en courant faible et continu",
        "Pour chauffer l'ampoule",
        "Pour remplir le bulbe de gaz"
      ],
      "answer": 1,
      "explain": "Le courant de la maison est trop « fort » pour les LED : le driver le transforme en courant faible et continu."
    }
  ]
});

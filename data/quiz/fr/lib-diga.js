QBANK("fr", "lib-diga", {
  "f": [
    {
      "type": "mc",
      "q": "Qu'est-ce qui se forme derrière le mur d'un barrage ?",
      "options": [
        "Un lac artificiel",
        "Un désert",
        "Un volcan"
      ],
      "answer": 0,
      "explain": "Le barrage arrête la rivière et l'eau s'accumule en formant un lac."
    },
    {
      "type": "tf",
      "q": "L'eau qui a fait tourner la turbine est consommée et ne retourne jamais dans la rivière.",
      "answer": false,
      "explain": "Faux : l'eau retourne dans la rivière, elle n'a été ni consommée ni salie."
    },
    {
      "type": "text",
      "q": "Comment s'appelle le gros tuyau d'acier qui amène l'eau du lac à la centrale ?",
      "answer": [
        "conduite forcée",
        "la conduite forcée",
        "conduite"
      ],
      "explain": "Dans la conduite forcée, l'eau descend et prend de la vitesse."
    },
    {
      "type": "mc",
      "q": "Qu'est-ce que l'eau qui arrive de la conduite fait tourner ?",
      "options": [
        "Le pylône",
        "Le transformateur",
        "La turbine"
      ],
      "answer": 2,
      "explain": "L'eau frappe les pales courbes de la turbine et la fait tourner très vite."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Chaque turbine d'une centrale produit 25 mégawatts. Une petite ville en utilise 100. Combien de turbines faut-il pour l'alimenter ?",
      "answer": 4,
      "unit": "turbines",
      "explain": "100 ÷ 25 = 4 turbines."
    },
    {
      "type": "mc",
      "q": "Pourquoi le transformateur élève-t-il la tension avant d'envoyer le courant dans les câbles ?",
      "options": [
        "Pour faire bouger les pylônes",
        "Parce qu'ainsi on perd très peu d'énergie dans les câbles pendant le trajet",
        "Pour que le courant soit plus sûr à toucher",
        "Pour faire tourner la turbine plus vite"
      ],
      "answer": 1,
      "explain": "Avec la haute tension, le courant peut voyager sur des centaines de kilomètres en perdant très peu d'énergie."
    },
    {
      "type": "tf",
      "q": "Un lac artificiel est une réserve d'énergie : l'eau en hauteur peut descendre faire tourner les turbines quand il le faut.",
      "answer": true,
      "explain": "L'eau en hauteur a de l'énergie potentielle : on ouvre la prise et l'énergie se transforme en mouvement."
    },
    {
      "type": "text",
      "q": "Comment s'appelle l'énergie obtenue grâce à l'eau qui tombe et fait tourner les turbines ? (énergie …)",
      "answer": [
        "hydroélectrique",
        "énergie hydroélectrique",
        "l'énergie hydroélectrique",
        "hydroelectrique",
        "energie hydroelectrique",
        "hydroélectricité",
        "hydraulique"
      ],
      "explain": "C'est l'énergie hydroélectrique : « hydro » veut dire eau."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Pourquoi un barrage doit-il toujours laisser couler un peu d'eau dans la rivière en aval (débit minimum) ?",
      "options": [
        "Pour faire tourner la turbine plus vite",
        "Pour alléger le mur",
        "Pour que les poissons et les plantes de la rivière ne meurent pas",
        "Pour produire plus de courant"
      ],
      "answer": 2,
      "explain": "La rivière en aval a besoin d'eau, sinon les poissons et les plantes qui y vivent ne survivent pas."
    },
    {
      "type": "mc",
      "q": "Certaines centrales ont deux lacs et, quand il y a de l'énergie en trop, pompent l'eau du lac du bas vers celui du haut. À quoi cela sert-il ?",
      "options": [
        "À stocker de l'énergie, comme une gigantesque batterie, pour l'utiliser quand il le faut",
        "À nettoyer l'eau du lac du bas",
        "À faire remonter les poissons",
        "À refroidir le générateur"
      ],
      "answer": 0,
      "explain": "L'eau en hauteur a de l'énergie potentielle : quand il le faut, on la laisse retomber et elle produit du courant."
    },
    {
      "type": "num",
      "q": "À 8 heures, un lac artificiel contient 6 000 000 m³ d'eau. Pour faire tourner les turbines, 2000 m³ sortent chaque minute et aucune eau n'arrive de la rivière. Combien d'eau reste-t-il dans le lac après 1 heure ?",
      "answer": 5880000,
      "unit": "m³",
      "explain": "1 heure = 60 minutes : 2000 × 60 = 120 000 m³ sortis. 6 000 000 − 120 000 = 5 880 000 m³."
    },
    {
      "type": "tf",
      "q": "Dans le générateur, le courant naît seulement si les aimants se déplacent par rapport aux bobines : si la turbine s'arrête, le courant n'est plus produit.",
      "answer": true,
      "explain": "Le mouvement d'un aimant près d'une bobine fait naître du courant. Sans mouvement, pas de courant."
    }
  ]
});

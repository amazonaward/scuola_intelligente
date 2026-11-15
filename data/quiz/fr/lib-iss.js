QBANK("fr", "lib-iss", {
  "f": [
    {
      "type": "mc",
      "q": "Comment s'appelle le bras robotisé de la Station spatiale ?",
      "options": [
        "Kibo",
        "Canadarm2",
        "Zvezda"
      ],
      "answer": 1,
      "explain": "Canadarm2, long de 17 mètres, attrape les vaisseaux cargo et déplace les pièces lourdes."
    },
    {
      "type": "tf",
      "q": "La Station spatiale internationale a à peu près la taille d'un terrain de football.",
      "answer": true,
      "explain": "Elle mesure 109 mètres de long et pèse environ 420 tonnes."
    },
    {
      "type": "text",
      "q": "Autour de quelle planète tourne la Station spatiale internationale ?",
      "answer": [
        "terre",
        "la terre"
      ],
      "explain": "L'ISS tourne autour de la Terre à environ 400 km d'altitude."
    },
    {
      "type": "mc",
      "q": "Quel vaisseau russe emmène trois astronautes à la station ?",
      "options": [
        "Crew Dragon",
        "Zarya",
        "Soyouz"
      ],
      "answer": 2,
      "explain": "Le Soyouz transporte trois personnes ; le Crew Dragon est celui qui s'amarre tout seul."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "L'ISS voyage à environ 8 km par seconde. Combien de kilomètres parcourt-elle en 10 secondes ?",
      "answer": 80,
      "unit": "km",
      "explain": "8 × 10 = 80 km."
    },
    {
      "type": "mc",
      "q": "Pourquoi les moteurs du module Zvezda « remontent-ils » parfois la station ?",
      "options": [
        "Parce que la station descend petit à petit et doit être remontée",
        "Parce que la station doit tourner plus vite",
        "Parce que les panneaux solaires doivent pivoter",
        "Parce qu'elle doit éviter la Lune"
      ],
      "answer": 0,
      "explain": "À 400 km, il reste un tout petit peu d'air qui freine la station : sans les poussées des moteurs, elle descendrait lentement."
    },
    {
      "type": "tf",
      "q": "À bord de l'ISS, presque toute l'eau est recyclée, même la sueur, et rendue de nouveau potable.",
      "answer": true,
      "explain": "L'eau est filtrée et redevient potable, car l'apporter depuis la Terre coûte très cher."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre l'arrivée à la station d'un vaisseau avec des astronautes.",
      "items": [
        "Le vaisseau quitte la Terre",
        "Il s'approche tout doucement de la station",
        "Il s'amarre à un nœud",
        "Les astronautes entrent dans l'ISS"
      ],
      "explain": "Le vaisseau rejoint la station, s'amarre à un nœud par ses portes, puis l'équipage entre."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Que se passerait-il si l'ISS ralentissait énormément en restant à la même altitude ?",
      "options": [
        "Elle resterait immobile dans l'espace",
        "Elle s'envolerait dans l'espace",
        "Elle s'arrêterait au-dessus de la même ville",
        "Elle tomberait vers la Terre, car elle n'aurait plus assez de vitesse latérale"
      ],
      "answer": 3,
      "explain": "La station ne tombe pas seulement parce qu'elle va très vite sur le côté : si elle perdait de la vitesse, la gravité la ferait descendre."
    },
    {
      "type": "num",
      "q": "L'ISS voyage à 8 km par seconde. Combien de kilomètres parcourt-elle en 5 minutes ?",
      "answer": 2400,
      "unit": "km",
      "explain": "5 minutes = 300 secondes ; 8 × 300 = 2400 km."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces associations module–signification est correcte ?",
      "options": [
        "Kibo – laboratoire européen",
        "Canadarm2 – bras robotisé russe",
        "Columbus – laboratoire européen",
        "Destiny – laboratoire japonais"
      ],
      "answer": 2,
      "explain": "Columbus est le laboratoire de l'Agence spatiale européenne ; Kibo est japonais, Canadarm2 canadien, Destiny américain."
    },
    {
      "type": "tf",
      "q": "Les astronautes grandissent de quelques centimètres dans l'espace et restent ainsi pour toujours, même de retour sur Terre.",
      "answer": false,
      "explain": "Faux : sans pesanteur, la colonne vertébrale s'allonge jusqu'à 5 cm, mais de retour sur Terre ils redeviennent comme avant."
    }
  ]
});

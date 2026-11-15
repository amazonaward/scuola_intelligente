QBANK("fr", "lib-elicottero", {
  "f": [
    {
      "type": "mc",
      "q": "Où se trouve le rotor principal de l'hélicoptère ?",
      "options": [
        "À l'arrière",
        "Sous les patins",
        "Au-dessus de la cabine"
      ],
      "answer": 2,
      "explain": "Les longues pales du rotor tournent au-dessus de la cabine : ce sont les « ailes » de l'hélicoptère."
    },
    {
      "type": "tf",
      "q": "Un hélicoptère peut voler en arrière et sur le côté.",
      "answer": true,
      "explain": "Il peut se déplacer dans toutes les directions et même tourner sur lui-même sans bouger de place."
    },
    {
      "type": "mc",
      "q": "Qui a dessiné, il y a environ 500 ans, une « vis aérienne » considérée comme l'ancêtre de l'hélicoptère ?",
      "options": [
        "Léonard de Vinci",
        "Galilée",
        "Thomas Edison"
      ],
      "answer": 0,
      "explain": "Léonard de Vinci a dessiné vers 1490 une hélice en spirale pour voler."
    },
    {
      "type": "text",
      "q": "Qu'ont beaucoup d'hélicoptères à la place des roues pour se poser sur l'herbe, la neige ou les rochers ?",
      "answer": [
        "patins",
        "des patins",
        "les patins",
        "deux patins"
      ],
      "explain": "Les patins sont simples, légers et permettent de se poser presque partout."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Le rotor principal tourne à 400 tours par minute. Combien de tours fait-il en 30 secondes ?",
      "answer": 200,
      "unit": "tours",
      "explain": "30 secondes, c'est une demi-minute : 400 ÷ 2 = 200 tours."
    },
    {
      "type": "mc",
      "q": "Un hélicoptère en vol a le moteur éteint. Comment le pilote peut-il se poser en douceur ?",
      "options": [
        "Il ne peut pas : il doit tomber",
        "En repliant les pales",
        "Avec l'autorotation : l'air qui monte pendant la descente continue de faire tourner le rotor",
        "En ouvrant un parachute dans la cabine"
      ],
      "answer": 2,
      "explain": "En descendant, l'air qui remonte fait tourner le rotor tout seul ; le pilote s'en sert pour ralentir la descente et se poser."
    },
    {
      "type": "tf",
      "q": "Pour faire avancer l'hélicoptère, le pilote incline le plateau cyclique, et donc le rotor, vers l'avant.",
      "answer": true,
      "explain": "Le rotor incliné pousse aussi l'air vers l'arrière et l'hélicoptère avance."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre le trajet du mouvement, du carburant jusqu'aux pales.",
      "items": [
        "La turbine brûle le carburant et tourne",
        "La transmission réduit la vitesse avec des engrenages",
        "Le rotor principal tourne",
        "Les pales poussent l'air vers le bas"
      ],
      "explain": "Le moteur tourne très vite : la transmission le ralentit avant de transmettre le mouvement au rotor, qui pousse l'air vers le bas."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Que se passerait-il si le rotor de queue se cassait en vol ?",
      "options": [
        "L'hélicoptère tomberait tout droit tout de suite",
        "L'hélicoptère monterait plus vite",
        "Le rotor principal s'arrêterait",
        "Le fuselage tournerait sur lui-même, en sens inverse du rotor principal"
      ],
      "answer": 3,
      "explain": "Action et réaction : sans la poussée latérale du rotor de queue, le fuselage tourne dans le sens contraire du rotor principal."
    },
    {
      "type": "mc",
      "q": "Pourquoi le rotor de queue est-il au bout d'une longue poutre ?",
      "options": [
        "Pour équilibrer le poids du carburant",
        "Parce que loin du centre, comme un long levier, il contrarie mieux la rotation du fuselage",
        "Pour que les pilotes voient mieux",
        "Pour faire plus de bruit"
      ],
      "answer": 1,
      "explain": "Comme avec un levier, plus le rotor de queue est loin du centre, plus sa petite poussée est efficace pour garder le fuselage droit."
    },
    {
      "type": "num",
      "q": "Un hélicoptère de secours vole à 180 km/h. Combien de minutes met-il pour atteindre un refuge situé à 45 km à vol d'oiseau ?",
      "answer": 15,
      "unit": "minutes",
      "explain": "45 ÷ 180 = 0,25 heure. 0,25 × 60 = 15 minutes."
    },
    {
      "type": "tf",
      "q": "Les pales du rotor d'un hélicoptère obtiennent la portance de façon semblable aux ailes d'un avion : en poussant l'air vers le bas.",
      "answer": true,
      "explain": "Chaque pale a une forme d'aile : la différence est que c'est la pale qui tourne qui se déplace dans l'air, et non tout l'appareil."
    }
  ]
});

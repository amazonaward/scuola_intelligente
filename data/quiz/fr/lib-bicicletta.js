QBANK("fr", "lib-bicicletta", {
  "f": [
    {
      "type": "mc",
      "q": "Quelle roue du vélo est celle qui pousse, la roue motrice ?",
      "options": [
        "Celle de devant",
        "Celle de derrière",
        "Les deux de la même façon"
      ],
      "answer": 1,
      "explain": "La chaîne fait tourner les pignons de la roue arrière : c'est elle qui pousse."
    },
    {
      "type": "tf",
      "q": "Quand il fait nuit, le feu à l'arrière du vélo doit être rouge.",
      "answer": true,
      "explain": "Le feu avant est blanc et l'arrière est rouge : ainsi les autres te voient et comprennent dans quel sens tu vas."
    },
    {
      "type": "mc",
      "q": "À quoi servent les rayons de la roue ?",
      "options": [
        "À faire sonner le vélo",
        "À arrêter la chaîne",
        "À garder la jante parfaitement ronde"
      ],
      "answer": 2,
      "explain": "Les rayons fins tirent la jante depuis le centre et la gardent ronde."
    },
    {
      "type": "text",
      "q": "Comment s'appelle la force de frottement qui ralentit la roue quand tu freines ?",
      "answer": [
        "frottement",
        "le frottement",
        "friction",
        "la friction"
      ],
      "explain": "Les patins frottent sur la jante : le frottement ralentit la roue."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un vélo a un plateau de 48 dents et un pignon de 12 dents. Combien de tours fait la roue arrière pour chaque tour de pédalier ?",
      "answer": 4,
      "unit": "tours",
      "explain": "48 ÷ 12 = 4 tours."
    },
    {
      "type": "mc",
      "q": "Pourquoi est-il dangereux de freiner seulement avec le frein avant, à fond ?",
      "options": [
        "Parce que le vélo peut basculer vers l'avant",
        "Parce que la chaîne casse",
        "Parce que les pneus se dégonflent",
        "Parce que la selle s'abaisse"
      ],
      "answer": 0,
      "explain": "En freinant fort seulement devant, le poids passe vers l'avant et le vélo peut basculer : mieux vaut utiliser les deux freins en douceur."
    },
    {
      "type": "tf",
      "q": "Quand tu freines, l'énergie du mouvement du vélo disparaît dans le néant.",
      "answer": false,
      "explain": "Faux : l'énergie ne disparaît pas, elle se transforme en chaleur à cause du frottement des patins sur la jante."
    },
    {
      "type": "order",
      "q": "Remets dans l'ordre le trajet de la force, de la jambe à la route.",
      "items": [
        "La jambe pousse sur la pédale",
        "La manivelle fait tourner le plateau",
        "La chaîne entraîne le pignon",
        "La roue arrière pousse sur la route"
      ],
      "explain": "Pédale, manivelle et plateau, puis chaîne et pignon ; enfin la roue arrière pousse la route vers l'arrière et la route pousse le vélo vers l'avant."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Pourquoi un vélo en mouvement reste-t-il debout, alors qu'à l'arrêt il tombe tout de suite ?",
      "options": [
        "Parce qu'à l'arrêt il pèse plus",
        "Parce que les freins le tiennent seulement quand il roule",
        "Parce que le cadre est plus rigide à grande vitesse",
        "Parce que de petites corrections du guidon et les roues qui tournent le remettent sous toi"
      ],
      "answer": 3,
      "explain": "En mouvement, tu fais de petites corrections constantes avec le guidon et les roues qui tournent aident : si tu tombes d'un côté, tu tournes de ce côté et le vélo se remet sous toi."
    },
    {
      "type": "num",
      "q": "Un vélo a un plateau de 36 dents et un pignon de 12 dents. La roue mesure 2 mètres de circonférence. Combien de mètres parcourt-il en 10 tours de pédalier ?",
      "answer": 60,
      "unit": "m",
      "explain": "36 ÷ 12 = 3 tours de roue par tour de pédalier ; 3 × 2 = 6 m par tour ; 6 × 10 = 60 m."
    },
    {
      "type": "mc",
      "q": "Laquelle de ces phrases sur le vélo est FAUSSE ?",
      "options": [
        "Le triangle est une forme rigide, c'est pourquoi on l'utilise dans le cadre",
        "Avec un petit pignon on va plus vite mais on fait plus d'effort",
        "Avec un gros pignon, la roue fait plus de tours à chaque coup de pédale",
        "Les pneus gonflés d'air absorbent les bosses"
      ],
      "answer": 2,
      "explain": "La troisième est fausse : c'est le petit pignon qui fait faire plus de tours à la roue ; le gros pignon en fait moins, mais demande moins de force."
    },
    {
      "type": "tf",
      "q": "Avec un plateau de 24 dents et un pignon de 48 dents, la roue fait moins d'un tour pour chaque tour de pédalier.",
      "answer": true,
      "explain": "24 ÷ 48 = 0,5 : un demi-tour de roue pour chaque tour de pédalier. C'est un braquet très « facile », adapté aux fortes montées."
    }
  ]
});

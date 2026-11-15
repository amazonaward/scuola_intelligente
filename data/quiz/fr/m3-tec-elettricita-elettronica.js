QBANK("fr", "m3-tec-elettricita-elettronica", {
 "f": [
  {
   "type": "mc",
   "q": "Quel instrument mesure l'intensité du courant électrique ?",
   "options": [
    "Voltmètre",
    "Ampèremètre",
    "Ohmmètre"
   ],
   "answer": 1,
   "explain": "L'ampèremètre mesure l'intensité du courant en ampères (A)."
  },
  {
   "type": "tf",
   "q": "L'eau salée ne conduit pas l'électricité.",
   "answer": false,
   "explain": "Faux : les sels dissous permettent le passage des charges, donc l'eau salée conduit."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la diode qui émet de la lumière ? (sigle de trois lettres)",
   "answer": [
    "led",
    "une led",
    "la led",
    "del"
   ],
   "explain": "LED = Light Emitting Diode, « diode électroluminescente »."
  },
  {
   "type": "mc",
   "q": "Dans quelle unité mesure-t-on la puissance électrique ?",
   "options": [
    "Ohm",
    "Ampère",
    "Watt"
   ],
   "answer": 2,
   "explain": "La puissance se mesure en watts (W) : P = V × I."
  },
  {
   "type": "num",
   "q": "Combien de volts a une pile AA ordinaire ?",
   "answer": 1.5,
   "unit": "V",
   "explain": "Une pile AA fournit 1,5 V."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un radiateur d'appoint branché sur 230 V absorbe 6 A. Quelle est sa puissance en watts ?",
   "answer": 1380,
   "unit": "W",
   "explain": "P = V × I = 230 × 6 = 1380 W."
  },
  {
   "type": "num",
   "q": "Une résistance de 1000 Ω est branchée sur 5 V. Combien de milliampères (mA) la traversent ?",
   "answer": 5,
   "unit": "mA",
   "explain": "I = V ÷ R = 5 ÷ 1000 = 0,005 A = 5 mA."
  },
  {
   "type": "mc",
   "q": "Trois ampoules identiques sont branchées en série sur une pile de 9 V. Quelle tension y a-t-il aux bornes de chacune ?",
   "options": [
    "9 V",
    "3 V",
    "27 V"
   ],
   "answer": 1,
   "explain": "En série, la tension se partage en parts égales : 9 V ÷ 3 = 3 V."
  },
  {
   "type": "tf",
   "q": "Un transistor peut fonctionner comme un interrupteur commandé par un signal électrique.",
   "answer": true,
   "explain": "Vrai : un petit signal sur une borne commande le passage d'un courant plus grand. Les puces en contiennent des milliards."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre les étapes pour calculer la résistance de protection d'une LED.",
   "items": [
    "Fixer le courant voulu de la LED",
    "Soustraire la tension de la LED de celle de l'alimentation",
    "Calculer R = V ÷ I",
    "Choisir la valeur normalisée égale ou un peu plus grande"
   ],
   "explain": "D'abord le courant, puis la tension à absorber, puis la loi d'Ohm, enfin la valeur normalisée."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Vous voulez allumer une LED de 2 V et 10 mA avec une batterie de 9 V. Quelle résistance en série (en Ω) faut-il ?",
   "answer": 700,
   "unit": "Ω",
   "explain": "La résistance doit absorber 9 − 2 = 7 V. 10 mA = 0,01 A, donc R = 7 ÷ 0,01 = 700 Ω."
  },
  {
   "type": "num",
   "q": "Une lampe de 100 W reste allumée 8 heures. L'énergie coûte 0,25 € le kWh. Combien cela coûte-t-il (en €) ?",
   "answer": 0.2,
   "tol": 0.005,
   "unit": "€",
   "explain": "100 W × 8 h = 800 Wh = 0,8 kWh. Coût : 0,8 × 0,25 = 0,20 €."
  },
  {
   "type": "mc",
   "q": "Si la tension aux bornes d'une résistance double et que la résistance reste la même, que devient le courant ?",
   "options": [
    "Il est divisé par deux",
    "Il double",
    "Il reste le même",
    "Il devient quatre fois plus grand"
   ],
   "answer": 1,
   "explain": "Selon la loi d'Ohm I = V ÷ R : à R constante, tension et courant sont directement proportionnels."
  },
  {
   "type": "mc",
   "q": "Vous voulez une alarme qui se déclenche seulement quand une personne bouge devant la porte. Quel capteur choisissez-vous ?",
   "options": [
    "Photorésistance (LDR)",
    "Thermistance (NTC)",
    "Capteur infrarouge passif (PIR)"
   ],
   "answer": 2,
   "explain": "Le PIR détecte le mouvement de corps chauds ; la photorésistance ne sent que la lumière et la thermistance la température."
  },
  {
   "type": "tf",
   "q": "Pour mesurer la tension d'une pile, on branche l'ampèremètre directement entre ses deux pôles.",
   "answer": false,
   "explain": "Faux : la tension se mesure avec un voltmètre ; l'ampèremètre a une résistance très faible et, branché ainsi, provoquerait un court-circuit."
  }
 ]
});

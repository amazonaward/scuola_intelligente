QBANK("fr", "m3-sci-elettricita", {
 "f": [
  {
   "type": "mc",
   "q": "Que se passe-t-il entre deux charges électriques de signes opposés ?",
   "options": [
    "si respingono",
    "si attraggono",
    "non interagiscono"
   ],
   "answer": 1,
   "explain": "Des charges de signes opposés (une positive et une négative) s'attirent ; des charges de même signe se repoussent."
  },
  {
   "type": "tf",
   "q": "Le cuivre est un bon conducteur d'électricité.",
   "answer": true,
   "explain": "Les métaux, et le cuivre en particulier, laissent facilement passer le courant : c'est pourquoi les fils électriques sont en cuivre."
  },
  {
   "type": "mc",
   "q": "Avec quel instrument mesure-t-on l'intensité du courant électrique ?",
   "options": [
    "amperometro",
    "voltmetro",
    "termometro"
   ],
   "answer": 0,
   "explain": "L'intensité du courant, en ampères, se mesure avec un ampèremètre ; le voltmètre mesure la tension."
  },
  {
   "type": "num",
   "q": "Une pile ordinaire de type AA fournit une tension de combien de volts ?",
   "answer": 1.5,
   "tol": 0.01,
   "unit": "V",
   "explain": "Une pile AA alcaline ou salin fournit 1,5 V ; c'est pourquoi trois piles en série donnent 4,5 V."
  },
  {
   "type": "text",
   "q": "Quelle est l'unité de mesure de la tension électrique ?",
   "answer": [
    "volt",
    "le volt",
    "volts",
    "v"
   ],
   "explain": "La tension électrique se mesure en volts (V), en l'honneur d'Alessandro Volta."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Une ampoule de 60 W reste allumée pendant 5 heures. Combien de kWh consomme-t-elle ?",
   "answer": 0.3,
   "tol": 0.005,
   "unit": "kWh",
   "explain": "60 W = 0,06 kW. Énergie = puissance × temps = 0,06 × 5 = 0,3 kWh."
  },
  {
   "type": "num",
   "q": "Dans un circuit, un courant de 2 A traverse une résistance de 15 Ω. Quelle est la tension à ses bornes ?",
   "answer": 30,
   "unit": "V",
   "explain": "Loi d'Ohm : V = R × I = 15 × 2 = 30 V."
  },
  {
   "type": "num",
   "q": "Trois résistances de 5 Ω, 10 Ω et 15 Ω sont montées en série. Quelle est la résistance totale ?",
   "answer": 30,
   "unit": "Ω",
   "explain": "En série, les résistances s'additionnent : 5 + 10 + 15 = 30 Ω."
  },
  {
   "type": "mc",
   "q": "Comment faut-il brancher un voltmètre pour mesurer la tension aux bornes d'une ampoule ?",
   "options": [
    "en série",
    "en parallèle",
    "à une seule borne"
   ],
   "answer": 1,
   "explain": "Le voltmètre se branche en parallèle avec le composant, car il mesure la différence de potentiel entre ses deux bornes."
  },
  {
   "type": "tf",
   "q": "Un fusible protège l'appareil s'il est branché en parallèle avec lui.",
   "answer": false,
   "explain": "Faux : le fusible se branche en série ; ainsi, quand le courant est trop fort, le fil fond et coupe le circuit."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Une résistance de 12 Ω et une de 4 Ω sont branchées en parallèle. Quelle est la résistance totale ?",
   "answer": 3,
   "unit": "Ω",
   "explain": "En parallèle : 1/R = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3, donc R = 3 Ω. (Ou produit ÷ somme = 48 ÷ 16 = 3 Ω.)"
  },
  {
   "type": "num",
   "q": "Une pile de 9 V alimente en série deux résistances, de 100 Ω et de 200 Ω. Combien de milliampères (mA) circulent dans le circuit ?",
   "answer": 30,
   "unit": "mA",
   "explain": "Résistance totale = 100 + 200 = 300 Ω. I = V ÷ R = 9 ÷ 300 = 0,03 A = 30 mA (1 A = 1000 mA)."
  },
  {
   "type": "mc",
   "q": "Un sèche-cheveux de 1500 W est branché sur le secteur à 230 V. Quel courant absorbe-t-il environ ?",
   "options": [
    "circa 0,15 A",
    "circa 345 A",
    "circa 6,5 A"
   ],
   "answer": 2,
   "explain": "De P = V × I on tire I = P ÷ V = 1500 ÷ 230 ≈ 6,5 A."
  },
  {
   "type": "tf",
   "q": "En ajoutant en série une seconde ampoule identique à la première, le courant dans le circuit augmente.",
   "answer": false,
   "explain": "Faux : en série les résistances s'additionnent, la résistance totale augmente et, à tension égale, le courant diminue (I = V ÷ R)."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre le trajet de l'électricité de la centrale à la prise de la maison.",
   "items": [
    "L'eau ou la vapeur fait tourner la turbine",
    "L'alternateur transforme le mouvement en courant électrique",
    "Un transformateur élève la tension",
    "Le courant circule sur les lignes à haute tension",
    "Un autre transformateur abaisse la tension à 230 V"
   ],
   "explain": "La turbine entraîne l'alternateur, qui produit le courant ; la tension est élevée pour réduire les pertes dans les lignes, puis abaissée à 230 V pour l'usage domestique."
  }
 ]
});

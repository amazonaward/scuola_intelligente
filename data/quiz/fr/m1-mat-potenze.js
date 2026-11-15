QBANK("fr", "m1-mat-potenze", {
 "f": [
  {
   "type": "mc",
   "q": "Comment écrit-on 7 × 7 × 7 sous forme de puissance ?",
   "options": [
    "7³",
    "3⁷",
    "7 × 3"
   ],
   "answer": 0,
   "explain": "Le facteur 7 se répète 3 fois : base 7, exposant 3."
  },
  {
   "type": "tf",
   "q": "Zéro à la puissance 5 donne 0.",
   "answer": true,
   "explain": "0 × 0 × 0 × 0 × 0 = 0 : avec une base 0 et un exposant différent de 0, le résultat est 0."
  },
  {
   "type": "num",
   "q": "Un carré a un côté de 8 cm. Quelle est son aire en cm² ?",
   "answer": 64,
   "unit": "cm²",
   "explain": "Aire = 8² = 8 × 8 = 64 cm²."
  },
  {
   "type": "mc",
   "q": "Combien de zéros a le nombre 10⁷ (dix millions) ?",
   "options": [
    "6",
    "7",
    "8"
   ],
   "answer": 1,
   "explain": "10ⁿ s'écrit 1 suivi de n zéros : 10⁷ = 10 000 000, avec 7 zéros."
  },
  {
   "type": "text",
   "q": "Comment s'appelle le nombre 10¹⁰⁰, c'est-à-dire 1 suivi de 100 zéros ?",
   "answer": [
    "googol",
    "un googol",
    "le googol"
   ],
   "explain": "Il s'appelle googol ; le nom Google en dérive."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Dans un tournoi à élimination directe, il y a 64 joueurs et la moitié est éliminée à chaque tour. Combien de tours faut-il pour trouver le vainqueur ?",
   "answer": 6,
   "unit": "tours",
   "explain": "64 = 2⁶ : en divisant par 2 à chaque fois, 64 → 32 → 16 → 8 → 4 → 2 → 1, soit 6 tours."
  },
  {
   "type": "mc",
   "q": "Quelle écriture est égale à 5⁴ × 5² ?",
   "options": [
    "5⁶",
    "5⁸",
    "25⁶"
   ],
   "answer": 0,
   "explain": "Même base : on additionne les exposants, 4 + 2 = 6."
  },
  {
   "type": "tf",
   "q": "7⁵ : 7⁵ = 0",
   "answer": false,
   "explain": "Un nombre divisé par lui-même donne 1 : 7⁵ : 7⁵ = 7⁰ = 1."
  },
  {
   "type": "num",
   "q": "Combien vaut 4,5 × 10³ ?",
   "answer": 4500,
   "explain": "10³ = 1000 et 4,5 × 1000 = 4500."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre les étapes pour calculer 3 + 2³ × 4⁰.",
   "items": [
    "Je calcule les puissances : 2³ = 8 et 4⁰ = 1",
    "J'effectue la multiplication : 8 × 1 = 8",
    "J'effectue l'addition : 3 + 8 = 11"
   ],
   "explain": "D'abord les puissances, puis la multiplication, enfin l'addition : le résultat est 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Quelle égalité est FAUSSE ?",
   "options": [
    "2⁴ × 2⁴ = 2⁸",
    "(2⁴)² = 2⁸",
    "2⁴ + 2⁴ = 2⁸"
   ],
   "answer": 2,
   "explain": "2⁴ + 2⁴ = 16 + 16 = 32 = 2⁵, et non 2⁸. Il n'existe pas de propriétés pour l'addition."
  },
  {
   "type": "num",
   "q": "Les feuilles de nénuphar sur un lac doublent chaque jour la surface couverte. Au bout de 30 jours, tout le lac est couvert. Au bout de combien de jours la moitié seulement du lac était-elle couverte ?",
   "answer": 29,
   "unit": "jours",
   "explain": "Comme la surface double chaque jour, la veille la moitié était couverte : 30 − 1 = 29."
  },
  {
   "type": "num",
   "q": "Un fichier occupe 2¹² octets et un autre 2⁹ octets. Combien de fois le premier est-il plus grand que le second ?",
   "answer": 8,
   "explain": "2¹² : 2⁹ = 2¹²⁻⁹ = 2³ = 8."
  },
  {
   "type": "mc",
   "q": "Quelle est la façon la plus rapide de calculer 5⁴ × 2⁴ ?",
   "options": [
    "(5 + 2)⁴ = 7⁴",
    "(5 × 2)⁴ = 10⁴ = 10 000",
    "10⁸"
   ],
   "answer": 1,
   "explain": "Même exposant : on multiplie les bases et l'exposant reste 4. 5 × 2 = 10, donc 10⁴ = 10 000."
  },
  {
   "type": "tf",
   "q": "Marc écrit 2³ × 3³ = 6⁶. Le calcul est correct.",
   "answer": false,
   "explain": "Avec le même exposant, on multiplie les bases et l'exposant reste le même : 2³ × 3³ = 6³ = 216."
  }
 ]
});

QBANK("fr", "m3-mat-calcolo-letterale", {
 "f": [
  {
   "type": "mc",
   "q": "Laquelle de ces expressions est un monôme ?",
   "options": [
    "3x²y",
    "x + y",
    "2x − 5"
   ],
   "answer": 0,
   "explain": "Un monôme est un produit d'un nombre et de lettres : 3x²y. Les deux autres contiennent une somme ou une différence."
  },
  {
   "type": "tf",
   "q": "Les monômes 3a et 5a sont semblables.",
   "answer": true,
   "explain": "Deux monômes sont semblables s'ils ont la même partie littérale : ici c'est a pour les deux."
  },
  {
   "type": "num",
   "q": "Calcule la valeur de 3x + 2 pour x = 4.",
   "answer": 14,
   "explain": "On remplace x par 4 : 3 · 4 + 2 = 12 + 2 = 14."
  },
  {
   "type": "mc",
   "q": "Combien font x · x · x ?",
   "options": [
    "3x",
    "x³",
    "x + 3"
   ],
   "answer": 1,
   "explain": "Multiplier trois fois la même base revient à l'élever au cube : x · x · x = x³."
  },
  {
   "type": "text",
   "q": "Comment s'appelle le nombre qui multiplie la partie littérale d'un monôme (le 5 dans 5x²) ?",
   "answer": [
    "coefficient",
    "le coefficient"
   ],
   "explain": "Le nombre placé devant la partie littérale est le coefficient : dans 5x² c'est 5."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "Réduis : 6x² − 2x² + x²",
   "options": [
    "3x²",
    "5x²",
    "5x⁶"
   ],
   "answer": 1,
   "explain": "Ce sont des monômes semblables : on additionne les coefficients 6 − 2 + 1 = 5 et on garde x². Résultat : 5x²."
  },
  {
   "type": "num",
   "q": "Calcule la valeur de (x − 2)(x + 2) pour x = 7.",
   "answer": 45,
   "explain": "Somme par différence : (x − 2)(x + 2) = x² − 4 = 49 − 4 = 45. Ou simplement 5 · 9 = 45."
  },
  {
   "type": "mc",
   "q": "(2x − 3)² = ?",
   "options": [
    "4x² − 9",
    "4x² + 9",
    "4x² − 12x + 9",
    "2x² − 12x + 9"
   ],
   "answer": 2,
   "explain": "Carré d'un binôme : (2x)² − 2·(2x)·3 + 3² = 4x² − 12x + 9."
  },
  {
   "type": "text",
   "q": "Comment s'appelle un polynôme formé de trois termes ?",
   "answer": [
    "trinôme",
    "trinome",
    "un trinôme",
    "le trinôme"
   ],
   "explain": "Un polynôme de trois termes, par exemple x² + 2x − 5, s'appelle un trinôme."
  },
  {
   "type": "mc",
   "q": "Un rectangle a pour côtés 2a et 3b. Comment s'écrit son périmètre ?",
   "options": [
    "5ab",
    "2a + 3b",
    "4a + 6b",
    "6ab"
   ],
   "answer": 2,
   "explain": "Périmètre = 2 · (base + hauteur) = 2(2a + 3b) = 4a + 6b."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Trouve l'erreur : laquelle de ces égalités est FAUSSE ?",
   "options": [
    "(x + 3)² = x² + 6x + 9",
    "(x − 3)(x + 3) = x² − 9",
    "(x − 3)² = x² − 9",
    "3x · 2x = 6x²"
   ],
   "answer": 2,
   "explain": "(x − 3)² = x² − 6x + 9, et non x² − 9 : x² − 9 est le résultat de (x − 3)(x + 3)."
  },
  {
   "type": "num",
   "q": "Simplifie 3(x + 2) − (x − 4) et calcule le résultat pour x = 5.",
   "answer": 20,
   "explain": "3x + 6 − x + 4 = 2x + 10. Pour x = 5 : 2 · 5 + 10 = 20."
  },
  {
   "type": "mc",
   "q": "Un carré a pour côté (a + 4). Quelle expression donne son aire ?",
   "options": [
    "a² + 16",
    "4a + 16",
    "a² + 4a + 16",
    "a² + 8a + 16"
   ],
   "answer": 3,
   "explain": "Aire = (a + 4)² = a² + 2·a·4 + 4² = a² + 8a + 16. Attention au double produit 8a."
  },
  {
   "type": "tf",
   "q": "Le carré d'un binôme (a − b)² est égal à a² − b².",
   "answer": false,
   "explain": "Faux : (a − b)² = a² − 2ab + b². La différence de carrés a² − b² vient de (a + b)(a − b)."
  },
  {
   "type": "order",
   "q": "Simplifie 2(x + 3) − 3(x − 1) : mets les étapes dans l'ordre.",
   "items": [
    "2(x + 3) − 3(x − 1)",
    "2x + 6 − 3x + 3",
    "−x + 9"
   ],
   "explain": "On applique la distributivité (2x + 6 − 3x + 3), puis on additionne les termes semblables : (2x − 3x) + (6 + 3) = −x + 9."
  }
 ]
});

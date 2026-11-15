QBANK("it", "m3-mat-calcolo-letterale", {
 "f": [
  {
   "type": "mc",
   "q": "Quale di queste espressioni è un monomio?",
   "options": [
    "3x²y",
    "x + y",
    "2x − 5"
   ],
   "answer": 0,
   "explain": "Un monomio è un prodotto di un numero e di lettere: 3x²y. Le altre due contengono somme o differenze."
  },
  {
   "type": "tf",
   "q": "I monomi 3a e 5a sono simili.",
   "answer": true,
   "explain": "Due monomi sono simili se hanno la stessa parte letterale: qui è a per entrambi."
  },
  {
   "type": "num",
   "q": "Calcola il valore di 3x + 2 per x = 4.",
   "answer": 14,
   "explain": "Si sostituisce x con 4: 3 · 4 + 2 = 12 + 2 = 14."
  },
  {
   "type": "mc",
   "q": "Quanto fa x · x · x?",
   "options": [
    "3x",
    "x³",
    "x + 3"
   ],
   "answer": 1,
   "explain": "Moltiplicare la stessa base tre volte significa elevarla alla terza: x · x · x = x³."
  },
  {
   "type": "text",
   "q": "Come si chiama il numero che moltiplica la parte letterale di un monomio (il 5 in 5x²)?",
   "answer": [
    "coefficiente",
    "il coefficiente"
   ],
   "explain": "Il numero che precede la parte letterale è il coefficiente: in 5x² è 5."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "Riduci: 6x² − 2x² + x²",
   "options": [
    "3x²",
    "5x²",
    "5x⁶"
   ],
   "answer": 1,
   "explain": "Sono monomi simili: si sommano i coefficienti 6 − 2 + 1 = 5 e si lascia x². Risultato: 5x²."
  },
  {
   "type": "num",
   "q": "Calcola il valore di (x − 2)(x + 2) per x = 7.",
   "answer": 45,
   "explain": "Per la somma per differenza: (x − 2)(x + 2) = x² − 4 = 49 − 4 = 45. Oppure 5 · 9 = 45."
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
   "explain": "Quadrato di un binomio: (2x)² − 2·(2x)·3 + 3² = 4x² − 12x + 9."
  },
  {
   "type": "text",
   "q": "Come si chiama un polinomio formato da tre termini?",
   "answer": [
    "trinomio",
    "un trinomio",
    "il trinomio"
   ],
   "explain": "Un polinomio di tre termini, per esempio x² + 2x − 5, si chiama trinomio."
  },
  {
   "type": "mc",
   "q": "Un rettangolo ha lati 2a e 3b. Come si scrive il suo perimetro?",
   "options": [
    "5ab",
    "2a + 3b",
    "4a + 6b",
    "6ab"
   ],
   "answer": 2,
   "explain": "Perimetro = 2 · (base + altezza) = 2(2a + 3b) = 4a + 6b."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Trova l'errore: quale di queste uguaglianze è FALSA?",
   "options": [
    "(x + 3)² = x² + 6x + 9",
    "(x − 3)(x + 3) = x² − 9",
    "(x − 3)² = x² − 9",
    "3x · 2x = 6x²"
   ],
   "answer": 2,
   "explain": "(x − 3)² = x² − 6x + 9, non x² − 9: x² − 9 è invece il risultato di (x − 3)(x + 3)."
  },
  {
   "type": "num",
   "q": "Semplifica 3(x + 2) − (x − 4) e calcola il risultato per x = 5.",
   "answer": 20,
   "explain": "3x + 6 − x + 4 = 2x + 10. Per x = 5: 2 · 5 + 10 = 20."
  },
  {
   "type": "mc",
   "q": "Un quadrato ha il lato lungo (a + 4). Quale espressione dà la sua area?",
   "options": [
    "a² + 16",
    "4a + 16",
    "a² + 4a + 16",
    "a² + 8a + 16"
   ],
   "answer": 3,
   "explain": "Area = (a + 4)² = a² + 2·a·4 + 4² = a² + 8a + 16. Attenzione al doppio prodotto 8a."
  },
  {
   "type": "tf",
   "q": "Il quadrato di un binomio (a − b)² è uguale ad a² − b².",
   "answer": false,
   "explain": "Falso: (a − b)² = a² − 2ab + b². La differenza di quadrati a² − b² si ottiene da (a + b)(a − b)."
  },
  {
   "type": "order",
   "q": "Semplifica 2(x + 3) − 3(x − 1): metti in ordine i passaggi.",
   "items": [
    "2(x + 3) − 3(x − 1)",
    "2x + 6 − 3x + 3",
    "−x + 9"
   ],
   "explain": "Si applica la proprietà distributiva (2x + 6 − 3x + 3), poi si sommano i termini simili: (2x − 3x) + (6 + 3) = −x + 9."
  }
 ]
});

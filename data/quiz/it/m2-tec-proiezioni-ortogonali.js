QBANK("it", "m2-tec-proiezioni-ortogonali", {
 "f": [
  {
   "type": "mc",
   "q": "Quale piano riceve la vista dall'alto?",
   "options": [
    "Piano orizzontale (P.O.)",
    "Piano verticale (P.V.)",
    "Piano laterale (P.L.)"
   ],
   "answer": 0,
   "explain": "La vista dall'alto (pianta) si proietta sul piano orizzontale, P.O."
  },
  {
   "type": "tf",
   "q": "Nelle proiezioni ortogonali non c'è prospettiva: gli spigoli uguali restano uguali anche se sono lontani.",
   "answer": true,
   "explain": "I raggi paralleli non deformano: le facce parallele al piano appaiono in vera forma e grandezza."
  },
  {
   "type": "mc",
   "q": "Come si chiama anche la vista frontale?",
   "options": [
    "Pianta",
    "Prospetto",
    "Sezione"
   ],
   "answer": 1,
   "explain": "La vista frontale si chiama anche prospetto."
  },
  {
   "type": "num",
   "q": "Quante viste (frontale, dall'alto, laterale) si usano di solito per descrivere un oggetto?",
   "answer": 3,
   "tol": 0,
   "explain": "Si usano tre viste, una per ciascun piano: P.V., P.O. e P.L."
  },
  {
   "type": "text",
   "q": "Come si chiama il sistema dei tre piani perpendicolari che formano un angolo come quello di una stanza?",
   "answer": [
    "triedro",
    "il triedro"
   ],
   "explain": "Il triedro è formato da P.V., P.O. e P.L."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un mattone misura 12 cm di lunghezza, 7 cm di profondità e 5 cm di altezza. Quanti cm² è l'area della sua vista laterale?",
   "answer": 35,
   "tol": 0,
   "unit": "cm²",
   "explain": "La vista laterale è un rettangolo profondità × altezza = 7 × 5 = 35 cm²."
  },
  {
   "type": "mc",
   "q": "Un cono appoggiato sulla base: quali sono le sue viste frontale, laterale e dall'alto?",
   "options": [
    "Triangolo, triangolo, cerchio",
    "Rettangolo, rettangolo, cerchio",
    "Cerchio, cerchio, triangolo"
   ],
   "answer": 0,
   "explain": "Di fronte e di lato un cono appare come un triangolo isoscele; dall'alto come un cerchio."
  },
  {
   "type": "mc",
   "q": "In quale coppia di viste compare l'altezza dell'oggetto?",
   "options": [
    "Frontale e laterale",
    "Frontale e dall'alto",
    "Dall'alto e laterale"
   ],
   "answer": 0,
   "explain": "L'altezza si vede nella vista frontale e in quella laterale; nella pianta non c'è."
  },
  {
   "type": "num",
   "q": "Un cubo ha lo spigolo di 4 cm. Quanti cm è il perimetro della sua vista dall'alto?",
   "answer": 16,
   "tol": 0,
   "unit": "cm",
   "explain": "La vista dall'alto è un quadrato di lato 4 cm: 4 × 4 = 16 cm."
  },
  {
   "type": "text",
   "q": "Come si chiama la vista dall'alto di un oggetto?",
   "answer": [
    "pianta",
    "la pianta"
   ],
   "explain": "La vista dall'alto si chiama pianta ed è disegnata sotto il prospetto."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un parallelepipedo ha nel prospetto un rettangolo di 9 × 4 cm (larghezza × altezza) e nella pianta un rettangolo di 9 × 6 cm (larghezza × profondità). Quanti cm³ è il volume?",
   "answer": 216,
   "tol": 0,
   "unit": "cm³",
   "explain": "Dimensioni: larghezza 9, altezza 4, profondità 6. Volume = 9 × 4 × 6 = 216 cm³."
  },
  {
   "type": "mc",
   "q": "Uno studente deve disegnare le viste di un mattone 8 × 5 × 3 cm (larghezza × profondità × altezza). Sotto il prospetto disegna un rettangolo 8 × 3 cm. Qual è l'errore?",
   "options": [
    "La pianta deve essere 8 × 5 (larghezza e profondità)",
    "La pianta va disegnata sopra il prospetto",
    "La pianta deve essere un quadrato"
   ],
   "answer": 0,
   "explain": "La pianta mostra larghezza e profondità: deve essere un rettangolo 8 × 5 cm."
  },
  {
   "type": "tf",
   "q": "Se due oggetti hanno la stessa vista frontale e la stessa vista laterale, hanno necessariamente anche la stessa vista dall'alto.",
   "answer": false,
   "explain": "Falso: un cilindro e un parallelepipedo possono avere gli stessi due rettangoli, ma la pianta (cerchio o rettangolo) li distingue."
  },
  {
   "type": "mc",
   "q": "Un pezzo meccanico arriva «a specchio» e non si monta. Quale causa è più probabile?",
   "options": [
    "Il disegno è stato letto con il metodo sbagliato (europeo invece di americano o viceversa)",
    "È stata usata la linea tratteggiata per gli spigoli nascosti",
    "La scala del disegno era 1:1"
   ],
   "answer": 0,
   "explain": "Il metodo europeo e quello americano mettono le viste in posizioni diverse: leggere un disegno con il metodo sbagliato inverte il pezzo."
  },
  {
   "type": "num",
   "q": "Un parallelepipedo misura 10 cm di larghezza, 6 cm di profondità e 4 cm di altezza. Quale misura (in cm) viene riportata dalla pianta alla vista laterale con la linea a 45°?",
   "answer": 6,
   "tol": 0,
   "unit": "cm",
   "explain": "La linea a 45° riporta la profondità, che compare nella pianta e nel fianco: 6 cm."
  }
 ]
});

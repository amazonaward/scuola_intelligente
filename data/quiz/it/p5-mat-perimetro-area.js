QBANK("it", "p5-mat-perimetro-area", {
  "f": [
    {
      "type": "num",
      "q": "Un pentagono ha i lati di 3 cm, 4 cm, 4 cm, 5 cm e 6 cm. Quanto misura il perimetro?",
      "answer": 22,
      "unit": "cm",
      "explain": "Si sommano tutti i lati: 3 + 4 + 4 + 5 + 6 = 22 cm."
    },
    {
      "type": "tf",
      "q": "Per calcolare il perimetro di un poligono si sommano le lunghezze di tutti i suoi lati.",
      "answer": true,
      "explain": "Vero: il perimetro è la lunghezza di tutto il contorno, cioè la somma di tutti i lati."
    },
    {
      "type": "mc",
      "q": "Quale di queste figure ha il perimetro P = lato × 4?",
      "options": [
        "Triangolo equilatero",
        "Rombo",
        "Trapezio"
      ],
      "answer": 1,
      "explain": "Il rombo ha 4 lati uguali, quindi P = lato × 4. Il triangolo equilatero ha 3 lati uguali."
    },
    {
      "type": "num",
      "q": "Un rettangolo è fatto di 3 file con 6 quadretti da 1 cm² ciascuna. Quanti cm² misura la sua area?",
      "answer": 18,
      "unit": "cm²",
      "explain": "Contiamo i quadretti: 3 × 6 = 18 quadretti da 1 cm², cioè 18 cm²."
    },
    {
      "type": "text",
      "q": "Come si chiama il segmento perpendicolare alla base che serve per calcolare l'area di un triangolo o di un parallelogramma?",
      "answer": [
        "altezza",
        "l'altezza"
      ],
      "explain": "È l'altezza (h): parte da un vertice e arriva alla base formando un angolo retto."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un orto rettangolare è lungo 12 m e largo 8 m. Quanti metri di rete servono per recintarlo tutto intorno?",
      "answer": 40,
      "unit": "m",
      "explain": "Perimetro: (12 + 8) × 2 = 20 × 2 = 40 m."
    },
    {
      "type": "num",
      "q": "Una parete rettangolare alta 3 m e larga 7 m va dipinta. Con un litro di vernice si coprono 6 m². Quanti litri servono?",
      "answer": 3.5,
      "tol": 0.01,
      "unit": "L",
      "explain": "Area: 3 × 7 = 21 m². Litri: 21 : 6 = 3,5 L."
    },
    {
      "type": "mc",
      "q": "Un parallelogramma ha base 9 cm e altezza 4 cm. Qual è la sua area?",
      "options": [
        "18 cm²",
        "36 cm²",
        "13 cm²"
      ],
      "answer": 1,
      "explain": "A = b × h = 9 × 4 = 36 cm². (Non si divide per 2: quello serve solo per il triangolo.)"
    },
    {
      "type": "tf",
      "q": "Un rettangolo di 6 cm × 2 cm ha la stessa area di un rettangolo di 4 cm × 3 cm.",
      "answer": true,
      "explain": "Vero: 6 × 2 = 12 cm² e 4 × 3 = 12 cm². Hanno la stessa area ma perimetri diversi (16 cm e 14 cm)."
    },
    {
      "type": "num",
      "q": "Un quadrato ha il perimetro di 20 cm. Quanto misura la sua area?",
      "answer": 25,
      "unit": "cm²",
      "explain": "Lato: 20 : 4 = 5 cm. Area: 5 × 5 = 25 cm²."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un giardino è formato da due zone rettangolari separate: una di 10 m × 6 m e una di 4 m × 3 m. Quanti m² misura l'area totale?",
      "answer": 72,
      "unit": "m²",
      "explain": "Prima zona: 10 × 6 = 60 m². Seconda zona: 4 × 3 = 12 m². Totale: 60 + 12 = 72 m²."
    },
    {
      "type": "mc",
      "q": "Una stanza rettangolare di 6 m × 4 m va coperta con piastrelle quadrate di lato 50 cm. Quante piastrelle servono?",
      "options": [
        "48",
        "96",
        "24",
        "192"
      ],
      "answer": 1,
      "explain": "Lungo 6 m ci stanno 12 piastrelle (600 : 50), lungo 4 m ne stanno 8 (400 : 50): 12 × 8 = 96. Oppure: 24 m² : 0,25 m² = 96."
    },
    {
      "type": "tf",
      "q": "Se si raddoppia il lato di un quadrato, anche la sua area raddoppia.",
      "answer": false,
      "explain": "Falso: l'area diventa 4 volte più grande. Per esempio con lato 3 cm l'area è 9 cm², con lato 6 cm è 36 cm²."
    },
    {
      "type": "num",
      "q": "Un rettangolo ha la base di 1,2 m e l'altezza di 80 cm. Quanti centimetri misura il suo perimetro?",
      "answer": 400,
      "unit": "cm",
      "explain": "Converto: 1,2 m = 120 cm. Perimetro: (120 + 80) × 2 = 200 × 2 = 400 cm."
    },
    {
      "type": "order",
      "q": "Ordina le figure dall'area più piccola alla più grande.",
      "items": [
        "Triangolo: base 6 cm, altezza 3 cm",
        "Rettangolo: 3 cm × 4 cm",
        "Parallelogramma: base 5 cm, altezza 3 cm",
        "Rombo: diagonali 8 cm e 5 cm",
        "Quadrato: lato 5 cm"
      ],
      "explain": "Triangolo 6 × 3 : 2 = 9 cm²; rettangolo 3 × 4 = 12 cm²; parallelogramma 5 × 3 = 15 cm²; rombo 8 × 5 : 2 = 20 cm²; quadrato 5 × 5 = 25 cm²."
    }
  ]
});

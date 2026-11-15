QBANK("it", "p4-mat-poligoni", {
  "f": [
    {
      "type": "mc",
      "q": "Quanti lati ha un pentagono?",
      "options": [
        "4",
        "5",
        "6"
      ],
      "answer": 1,
      "explain": "Penta- vuol dire cinque: il pentagono ha 5 lati."
    },
    {
      "type": "tf",
      "q": "Un triangolo equilatero ha tutti e tre i lati uguali.",
      "answer": true,
      "explain": "Equilatero vuol dire «a lati uguali»: i suoi tre angoli sono tutti di 60°."
    },
    {
      "type": "text",
      "q": "Che forma ha il cartello di STOP?",
      "answer": [
        "ottagono",
        "un ottagono",
        "l'ottagono"
      ],
      "explain": "Il cartello di STOP è un ottagono: ha 8 lati."
    },
    {
      "type": "num",
      "q": "Quante diagonali ha un quadrilatero?",
      "answer": 2,
      "explain": "Dai 4 vertici si possono unire due coppie di vertici non vicini: le diagonali sono 2."
    },
    {
      "type": "mc",
      "q": "Quale triangolo ha tutti e tre i lati diversi?",
      "options": [
        "equilatero",
        "isoscele",
        "scaleno"
      ],
      "answer": 2,
      "explain": "Lo scaleno ha tre lati diversi; l'isoscele ne ha due uguali; l'equilatero tre uguali."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un triangolo isoscele ha l'angolo al vertice di 40°. Quanto misura ciascuno dei due angoli alla base?",
      "answer": 70,
      "unit": "°",
      "explain": "La somma è 180°: 180 − 40 = 140°. I due angoli alla base sono uguali: 140 : 2 = 70°."
    },
    {
      "type": "mc",
      "q": "Un quadrilatero ha i quattro angoli retti, ma i lati vicini sono di lunghezza diversa. Che cos'è?",
      "options": [
        "rettangolo",
        "rombo",
        "trapezio"
      ],
      "answer": 0,
      "explain": "Il rettangolo ha 4 angoli retti e i lati uguali a due a due, non tutti uguali."
    },
    {
      "type": "tf",
      "q": "Un trapezio ha sempre quattro lati uguali.",
      "answer": false,
      "explain": "Il trapezio ha solo una coppia di lati paralleli; i lati di solito sono diversi. I quattro lati uguali sono del rombo e del quadrato."
    },
    {
      "type": "num",
      "q": "Quante piastrelle a forma di triangolo equilatero stanno attorno a uno stesso punto, senza buchi?",
      "answer": 6,
      "explain": "Ogni angolo è di 60° e 360° : 60° = 6."
    },
    {
      "type": "mc",
      "q": "Un triangolo ha un angolo di 120°. Come si chiama, secondo gli angoli?",
      "options": [
        "acutangolo",
        "rettangolo",
        "ottusangolo"
      ],
      "answer": 2,
      "explain": "Un angolo maggiore di 90° è ottuso: il triangolo è ottusangolo."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Un rombo ha due angoli opposti di 70° ciascuno. Quanto misura ciascuno degli altri due angoli?",
      "answer": 110,
      "unit": "°",
      "explain": "La somma è 360°. 70 + 70 = 140°; 360 − 140 = 220°. Gli altri due angoli sono uguali: 220 : 2 = 110°."
    },
    {
      "type": "mc",
      "q": "Perché non si può piastrellare un pavimento senza buchi usando solo pentagoni regolari?",
      "options": [
        "Perché i pentagoni hanno troppi lati",
        "Perché i pentagoni sono concavi",
        "L'angolo di 108° non entra un numero esatto di volte in 360°: con 3 pentagoni resta un buco, con 4 si sovrappongono"
      ],
      "answer": 2,
      "explain": "3 × 108° = 324° (manca un pezzo) e 4 × 108° = 432° (troppo). Per riempire 360° l'angolo deve entrarci un numero esatto di volte."
    },
    {
      "type": "order",
      "q": "Metti in ordine i passi per trovare il terzo angolo di un triangolo con angoli di 65° e 45°.",
      "items": [
        "Ricordo che gli angoli di un triangolo sommano 180°",
        "Sommo i due angoli noti: 65° + 45° = 110°",
        "Sottraggo da 180°: 180° − 110° = 70°",
        "Il terzo angolo misura 70°"
      ],
      "explain": "Prima si ricorda la regola (180°), poi si sommano gli angoli noti, poi si sottrae dal totale."
    },
    {
      "type": "mc",
      "q": "Quale affermazione è vera?",
      "options": [
        "Ogni rombo è un quadrato",
        "Ogni quadrato è un rombo",
        "Ogni rettangolo ha i quattro lati uguali"
      ],
      "answer": 1,
      "explain": "Il quadrato ha 4 lati uguali, quindi è anche un rombo. Ma un rombo può avere gli angoli non retti, e un rettangolo può avere lati diversi."
    },
    {
      "type": "num",
      "q": "Da ogni vertice di un pentagono partono 2 diagonali. Quante diagonali ha in tutto il pentagono?",
      "answer": 5,
      "explain": "5 vertici × 2 = 10, ma così ogni diagonale è contata due volte (una per ciascun estremo): 10 : 2 = 5."
    }
  ]
});

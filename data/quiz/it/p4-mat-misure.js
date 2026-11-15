QBANK("it", "p4-mat-misure", {
  "f": [
    {
      "type": "tf",
      "q": "1 litro è uguale a 1000 millilitri.",
      "answer": true,
      "explain": "Sì: 1 l = 1000 ml, perché «milli» vuol dire un millesimo."
    },
    {
      "type": "num",
      "q": "Quanti grammi sono 2 hg?",
      "answer": 200,
      "unit": "g",
      "explain": "1 hg = 100 g, quindi 2 × 100 = 200 g."
    },
    {
      "type": "mc",
      "q": "Quale di queste è un'unità di misura della capacità?",
      "options": [
        "il chilogrammo",
        "il litro",
        "il metro"
      ],
      "answer": 1,
      "explain": "La capacità si misura in litri; il chilogrammo misura la massa e il metro la lunghezza."
    },
    {
      "type": "text",
      "q": "Come si chiama il peso del solo prodotto, senza il contenitore?",
      "answer": [
        "peso netto",
        "il peso netto",
        "netto"
      ],
      "explain": "Il peso netto è il peso del solo prodotto; con il contenitore (tara) si ottiene il peso lordo."
    },
    {
      "type": "mc",
      "q": "Quale di queste monete vale di più?",
      "options": [
        "50 c",
        "20 c",
        "1 €"
      ],
      "answer": 2,
      "explain": "1 € = 100 centesimi, più di 50 c e di 20 c."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Un cartone contiene 6 bottiglie da 1,5 l. Quanti litri ci sono in tutto?",
      "answer": 9,
      "unit": "l",
      "explain": "6 × 1,5 = 9 l."
    },
    {
      "type": "mc",
      "q": "Quale uguaglianza è corretta?",
      "options": [
        "2500 g = 250 hg",
        "2500 g = 2,5 hg",
        "2500 g = 25 hg"
      ],
      "answer": 2,
      "explain": "1 hg = 100 g, quindi 2500 g : 100 = 25 hg."
    },
    {
      "type": "num",
      "q": "Un vasetto di miele ha peso netto 250 g e peso lordo 340 g. Quanto pesa il vasetto vuoto (la tara)?",
      "answer": 90,
      "unit": "g",
      "explain": "T = PL − PN = 340 − 250 = 90 g."
    },
    {
      "type": "num",
      "q": "Un pacco di riso da 500 g costa 1,20 €. Quanto costano 3 kg di riso?",
      "answer": 7.2,
      "unit": "€",
      "explain": "3 kg = 3000 g e 3000 : 500 = 6 pacchi. Spesa: 6 × 1,20 = 7,20 €."
    },
    {
      "type": "tf",
      "q": "Una bottiglia da 75 cl contiene più di 1 litro.",
      "answer": false,
      "explain": "75 cl = 0,75 l, che è meno di 1 l."
    }
  ],
  "d": [
    {
      "type": "num",
      "q": "Per una merenda servono 20 bicchieri da 25 cl di succo. Le bottiglie sono da 1,5 l. Quante bottiglie devi comprare almeno?",
      "answer": 4,
      "explain": "20 × 25 cl = 500 cl = 5 l. 5 : 1,5 ≈ 3,3, quindi 3 bottiglie non bastano: ne servono 4."
    },
    {
      "type": "mc",
      "q": "Marco trasforma 3,4 kg in grammi così: «divido per 1000, quindi 0,0034 g». Qual è l'errore?",
      "options": [
        "Da kg a g si moltiplica per 1000: 3,4 kg = 3400 g",
        "Il risultato giusto è 34 g",
        "Non si possono trasformare i chili in grammi"
      ],
      "answer": 0,
      "explain": "Il grammo è un'unità più piccola del chilo, quindi il numero deve diventare più grande: 3,4 × 1000 = 3400 g."
    },
    {
      "type": "num",
      "q": "Compri 2,5 kg di arance a 1,60 € al kg e 3 hg di formaggio a 12 € al kg. Paghi con 10 €. Quanto ricevi di resto?",
      "answer": 2.4,
      "unit": "€",
      "explain": "Arance: 2,5 × 1,60 = 4 €. Formaggio: 3 hg = 0,3 kg, 0,3 × 12 = 3,60 €. Totale 7,60 €. Resto: 10 − 7,60 = 2,40 €."
    },
    {
      "type": "order",
      "q": "Metti in ordine queste capacità, dalla più grande alla più piccola.",
      "items": [
        "1 hl",
        "30 l",
        "2500 cl",
        "5000 ml",
        "1 dl"
      ],
      "explain": "In litri: 1 hl = 100 l, 30 l, 2500 cl = 25 l, 5000 ml = 5 l, 1 dl = 0,1 l."
    },
    {
      "type": "tf",
      "q": "Tre bottigliette da 50 cl costano 0,75 € in tutto. Una bottiglia da 1,5 l a 0,70 € conviene di più.",
      "answer": true,
      "explain": "3 × 50 cl = 150 cl = 1,5 l: la stessa quantità. Costa 0,75 € contro 0,70 €, quindi la bottiglia grande conviene."
    }
  ]
});

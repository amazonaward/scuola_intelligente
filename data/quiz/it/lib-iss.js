QBANK("it", "lib-iss", {
  "f": [
    {
      "type": "mc",
      "q": "Come si chiama il braccio robotico della Stazione Spaziale?",
      "options": [
        "Kibo",
        "Canadarm2",
        "Zvezda"
      ],
      "answer": 1,
      "explain": "Il Canadarm2, lungo 17 metri, afferra le navette e sposta pezzi pesanti."
    },
    {
      "type": "tf",
      "q": "La Stazione Spaziale Internazionale è grande più o meno come un campo da calcio.",
      "answer": true,
      "explain": "È lunga 109 metri e pesa circa 420 tonnellate."
    },
    {
      "type": "text",
      "q": "Intorno a quale pianeta gira la Stazione Spaziale Internazionale?",
      "answer": [
        "terra",
        "la terra"
      ],
      "explain": "La ISS orbita intorno alla Terra a circa 400 km di altezza."
    },
    {
      "type": "mc",
      "q": "Quale navetta russa porta tre astronauti alla stazione?",
      "options": [
        "Crew Dragon",
        "Zarya",
        "Soyuz"
      ],
      "answer": 2,
      "explain": "La Soyuz porta tre persone; la Crew Dragon è la navetta che si aggancia da sola."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "La ISS viaggia a circa 8 km al secondo. Quanti chilometri percorre in 10 secondi?",
      "answer": 80,
      "unit": "km",
      "explain": "8 × 10 = 80 km."
    },
    {
      "type": "mc",
      "q": "Perché ogni tanto i motori del modulo Zvezda «rialzano» la stazione?",
      "options": [
        "Perché la stazione scende piano piano e va riportata più in alto",
        "Perché la stazione deve girare più veloce",
        "Perché i pannelli solari devono ruotare",
        "Perché deve evitare la Luna"
      ],
      "answer": 0,
      "explain": "A 400 km c'è ancora un pochissimo di aria che frena la stazione: senza le spinte dei motori scenderebbe lentamente."
    },
    {
      "type": "tf",
      "q": "A bordo della ISS si ricicla quasi tutta l'acqua, anche il sudore, e la si rende di nuovo potabile.",
      "answer": true,
      "explain": "L'acqua viene filtrata e torna potabile, perché portarla dalla Terra costa molto."
    },
    {
      "type": "order",
      "q": "Metti in ordine l'arrivo di una navetta con gli astronauti alla stazione.",
      "items": [
        "La navetta parte dalla Terra",
        "Si avvicina piano piano alla stazione",
        "Si aggancia a un nodo",
        "Gli astronauti entrano nella ISS"
      ],
      "explain": "La navetta raggiunge la stazione, si aggancia a un nodo con le sue porte e poi l'equipaggio entra."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Che cosa succederebbe se la ISS rallentasse moltissimo, restando alla stessa altezza?",
      "options": [
        "Resterebbe ferma nello spazio",
        "Volerebbe via nello spazio",
        "Si fermerebbe sopra la stessa città",
        "Cadrebbe verso la Terra, perché non avrebbe più abbastanza velocità di lato"
      ],
      "answer": 3,
      "explain": "La stazione non cade solo perché va velocissima di lato: se perdesse velocità, la gravità la farebbe scendere."
    },
    {
      "type": "num",
      "q": "La ISS viaggia a 8 km al secondo. Quanti chilometri percorre in 5 minuti?",
      "answer": 2400,
      "unit": "km",
      "explain": "5 minuti = 300 secondi; 8 × 300 = 2400 km."
    },
    {
      "type": "mc",
      "q": "Quale di queste coppie modulo–significato è corretta?",
      "options": [
        "Kibo – laboratorio europeo",
        "Canadarm2 – braccio robotico russo",
        "Columbus – laboratorio europeo",
        "Destiny – laboratorio giapponese"
      ],
      "answer": 2,
      "explain": "Columbus è il laboratorio dell'Agenzia Spaziale Europea; Kibo è giapponese, Canadarm2 è canadese, Destiny è americano."
    },
    {
      "type": "tf",
      "q": "Gli astronauti diventano più alti di qualche centimetro nello spazio e restano così per sempre, anche tornati sulla Terra.",
      "answer": false,
      "explain": "È falso: senza peso la colonna vertebrale si allunga fino a 5 cm, ma al ritorno sulla Terra tornano come prima."
    }
  ]
});

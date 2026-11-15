QBANK("it", "m3-mat-solidi", {
 "f": [
  {
   "type": "mc",
   "q": "Quale solido ha 6 facce quadrate tutte uguali?",
   "options": [
    "sfera",
    "cubo",
    "cono"
   ],
   "answer": 1,
   "explain": "Il cubo ha 6 facce quadrate uguali. La sfera e il cono sono solidi di rotazione."
  },
  {
   "type": "tf",
   "q": "La sfera è un poliedro.",
   "answer": false,
   "explain": "Falso: un poliedro ha solo facce piane. La sfera ha una superficie curva, quindi è un solido di rotazione."
  },
  {
   "type": "num",
   "q": "Quante facce ha una piramide con base quadrata?",
   "answer": 5,
   "explain": "Ha 1 faccia di base quadrata e 4 facce laterali triangolari: in tutto 5 facce."
  },
  {
   "type": "mc",
   "q": "Una lattina di bibita ha la forma di un…",
   "options": [
    "cono",
    "prisma",
    "cilindro"
   ],
   "answer": 2,
   "explain": "Una lattina ha due basi circolari uguali e una superficie laterale curva: è un cilindro."
  },
  {
   "type": "text",
   "q": "Come si chiama il solido ottenuto facendo ruotare un triangolo rettangolo attorno a un cateto?",
   "answer": [
    "cono",
    "il cono"
   ],
   "explain": "Ruotando un triangolo rettangolo attorno a un cateto si ottiene un cono."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un barattolo cilindrico ha raggio 3 cm e altezza 5 cm. Qual è il suo volume? (π = 3,14)",
   "answer": 141.3,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = π × r² × h = 3,14 × 3² × 5 = 3,14 × 45 = 141,3 cm³."
  },
  {
   "type": "num",
   "q": "Un cono gelato ha raggio di base 3 cm e altezza 4 cm. Quanto vale il suo volume? (π = 3,14)",
   "answer": 37.68,
   "tol": 0.05,
   "unit": "cm³",
   "explain": "V = (π × r² × h) : 3 = (3,14 × 9 × 4) : 3 = 113,04 : 3 = 37,68 cm³."
  },
  {
   "type": "num",
   "q": "Una piscina è un parallelepipedo di 10 m × 5 m × 2 m. Quanti litri d'acqua contiene quando è piena?",
   "answer": 100000,
   "unit": "litri",
   "explain": "V = 10 × 5 × 2 = 100 m³. Poiché 1 m³ = 1000 litri, la piscina contiene 100 × 1000 = 100 000 litri."
  },
  {
   "type": "mc",
   "q": "La superficie totale di un cubo è 54 cm². Quanto misura lo spigolo?",
   "options": [
    "9 cm",
    "3 cm",
    "6 cm"
   ],
   "answer": 1,
   "explain": "St = 6 × s² = 54, quindi s² = 54 : 6 = 9 e s = √9 = 3 cm."
  },
  {
   "type": "tf",
   "q": "Se si raddoppia lo spigolo di un cubo, il suo volume raddoppia.",
   "answer": false,
   "explain": "Falso: V = s³. Con lo spigolo 2s si ha (2s)³ = 8s³, quindi il volume diventa 8 volte più grande."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un contenitore cilindrico con raggio 5 cm, pieno d'acqua fino all'altezza di 12 cm, viene svuotato in una vaschetta a base quadrata di lato 10 cm. A che altezza arriva l'acqua nella vaschetta? (π = 3,14)",
   "answer": 9.42,
   "tol": 0.02,
   "unit": "cm",
   "explain": "Volume dell'acqua = 3,14 × 5² × 12 = 942 cm³. Area di base della vaschetta = 10 × 10 = 100 cm². Altezza = 942 : 100 = 9,42 cm."
  },
  {
   "type": "num",
   "q": "Un blocco di legno è un parallelepipedo di 20 cm × 10 cm × 5 cm e ha peso specifico 0,6 g/cm³. Quanto pesa?",
   "answer": 600,
   "unit": "g",
   "explain": "Volume = 20 × 10 × 5 = 1000 cm³. Peso = volume × peso specifico = 1000 × 0,6 = 600 g."
  },
  {
   "type": "mc",
   "q": "Un cilindro ha raggio 3 cm e altezza 10 cm. Qual è l'area della sua superficie laterale? (π = 3,14)",
   "options": [
    "94,2 cm²",
    "188,4 cm²",
    "282,6 cm²"
   ],
   "answer": 1,
   "explain": "S laterale = 2 × π × r × h = 2 × 3,14 × 3 × 10 = 188,4 cm². È l'area del rettangolo che si ottiene srotolando la superficie."
  },
  {
   "type": "tf",
   "q": "Per il volume di un cilindro con r = 4 cm e h = 5 cm, Marco calcola 3,14 × 4 × 5 = 62,8 cm³. Il suo calcolo è corretto.",
   "answer": false,
   "explain": "Falso: nella formula il raggio va elevato al quadrato. V = 3,14 × 4² × 5 = 3,14 × 80 = 251,2 cm³."
  },
  {
   "type": "order",
   "q": "Ordina questi solidi dal volume più piccolo al più grande.",
   "items": [
    "cubo di spigolo 3 cm",
    "parallelepipedo 2 cm × 3 cm × 5 cm",
    "cilindro di raggio 2 cm e altezza 3 cm (π = 3,14)",
    "prisma con area di base 10 cm² e altezza 4 cm",
    "cubo di spigolo 4 cm"
   ],
   "explain": "Volumi: 27 cm³; 30 cm³; 3,14 × 4 × 3 = 37,68 cm³; 10 × 4 = 40 cm³; 64 cm³."
  }
 ]
});

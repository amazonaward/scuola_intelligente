QBANK("it", "l2-mat-circonferenza-poligoni", {
  "f": [
    { "type": "mc", "q": "Come si chiama la corda che passa per il centro della circonferenza?", "options": ["Raggio", "Diametro", "Arco"], "answer": 1, "explain": "Il diametro è la corda massima e passa per il centro; vale il doppio del raggio." },
    { "type": "num", "q": "Una circonferenza ha il raggio di 7 cm. Quanto misura il diametro?", "answer": 14, "unit": "cm", "explain": "d = 2r = 2 × 7 = 14 cm." },
    { "type": "tf", "q": "Una retta tangente a una circonferenza ha un solo punto in comune con essa.", "answer": true, "explain": "Per definizione la tangente tocca la circonferenza in un solo punto." },
    { "type": "num", "q": "Un angolo al centro misura 90°. Quanto misura l'angolo alla circonferenza che insiste sullo stesso arco?", "answer": 45, "unit": "°", "explain": "L'angolo alla circonferenza è la metà: 90° / 2 = 45°." },
    { "type": "mc", "q": "Un poligono con tutti i vertici sulla circonferenza si dice…", "options": ["Circoscritto", "Inscritto", "Regolare"], "answer": 1, "explain": "Inscritto = vertici sulla circonferenza; circoscritto = lati tangenti." }
  ],
  "m": [
    { "type": "num", "q": "Da un punto P esterno si traccia la tangente PA a una circonferenza di raggio 3 cm. Se OP = 5 cm, quanto è lunga PA?", "answer": 4, "unit": "cm", "explain": "OAP è rettangolo in A: PA = √(5² − 3²) = √16 = 4 cm." },
    { "type": "tf", "q": "Un triangolo inscritto in una semicirconferenza (con il diametro come lato) è rettangolo.", "answer": true, "explain": "L'angolo opposto al diametro insiste su una semicirconferenza, quindi misura 90°." },
    { "type": "num", "q": "Un quadrilatero inscritto ha un angolo di 83°. Quanto misura l'angolo opposto?", "answer": 97, "unit": "°", "explain": "Gli angoli opposti sono supplementari: 180° − 83° = 97°." },
    { "type": "mc", "q": "Quale punto notevole di un triangolo è il centro della circonferenza inscritta?", "options": ["Il circocentro", "L'incentro", "L'ortocentro"], "answer": 1, "explain": "L'incentro è l'incontro delle bisettrici ed è equidistante dai tre lati." },
    { "type": "num", "q": "Un esagono regolare ha raggio 5 cm. Quanto misura il suo perimetro?", "answer": 30, "unit": "cm", "explain": "Il lato dell'esagono regolare è uguale al raggio: 6 × 5 = 30 cm." }
  ],
  "d": [
    { "type": "num", "q": "Un quadrilatero circoscritto a una circonferenza ha tre lati consecutivi di 11 cm, 6 cm e 13 cm. Quanto misura il quarto lato?", "answer": 18, "unit": "cm", "explain": "Per Pitot, AB + CD = BC + DA: 11 + 13 = 6 + DA, quindi DA = 18 cm." },
    { "type": "mc", "q": "Il rombo non quadrato è…", "options": ["Solo inscrivibile", "Solo circoscrivibile", "Né inscrivibile né circoscrivibile"], "answer": 1, "explain": "Ha i lati opposti con somma uguale (circoscrivibile), ma gli angoli opposti sono uguali e non supplementari se non sono retti." },
    { "type": "num", "q": "Un poligono regolare ha area 150 cm² e apotema 5 cm. Quanto misura il suo perimetro?", "answer": 60, "unit": "cm", "explain": "A = p × a / 2, quindi p = 2A / a = 300 / 5 = 60 cm." },
    { "type": "num", "q": "Nel triangolo ABC l'angolo in C è 62° e il triangolo è inscritto in una circonferenza di centro O. Quanto misura l'angolo al centro AOB che insiste sullo stesso arco AB (quello non contenente C)?", "answer": 124, "unit": "°", "explain": "L'angolo al centro è il doppio di quello alla circonferenza: 2 × 62° = 124°." },
    { "type": "tf", "q": "Tutti gli angoli alla circonferenza che insistono sullo stesso arco sono congruenti.", "answer": true, "explain": "Ciascuno è la metà dello stesso angolo al centro, quindi sono tutti uguali." }
  ]
});

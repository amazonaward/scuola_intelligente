QBANK("it", "l2-ita-testo-poetico", {
  f: [
    { type: "mc", q: "Come si chiama una strofa di quattro versi?", options: ["Quartina", "Terzina", "Distico", "Sestina"], answer: 0, explain: "Quartina = 4 versi; terzina = 3; distico = 2; sestina = 6." },
    { type: "tf", q: "Il sonetto è formato da 14 versi.", answer: true, explain: "Due quartine e due terzine, per un totale di 14 endecasillabi." },
    { type: "mc", q: "Quante sillabe ha un settenario piano?", options: ["7", "6", "8", "11"], answer: 0, explain: "Il nome del verso indica il numero delle sillabe metriche (con ultima parola piana)." },
    { type: "text", q: "Come si chiama l'identità di suoni alla fine di due versi?", answer: ["rima"], explain: "La rima unisce i versi e dà musicalità al testo." },
    { type: "mc", q: "Chi scrisse la Divina Commedia in terzine?", options: ["Dante Alighieri", "Francesco Petrarca", "Giacomo Leopardi", "Ugo Foscolo"], answer: 0, explain: "Dante usò la terzina incatenata ABA BCB." }
  ],
  m: [
    { type: "mc", q: "Qual è lo schema della rima alternata?", options: ["ABAB", "AABB", "ABBA", "ABCABC"], answer: 0, explain: "Il primo verso rima con il terzo, il secondo con il quarto." },
    { type: "mc", q: "Come si chiama la fusione di due vocali tra parole vicine?", options: ["Sinalefe", "Dieresi", "Cesura", "Assonanza"], answer: 0, explain: "La sinalefe conta come una sola sillaba l'incontro tra vocale finale e vocale iniziale." },
    { type: "tf", q: "Un verso sdrucciolo ha, nel conteggio, una sillaba in meno rispetto a quelle reali.", answer: true, explain: "Se la parola finale è sdrucciola si toglie una sillaba." },
    { type: "num", q: "Quante sillabe metriche ha il verso «Sempre caro mi fu quest'ermo colle»?", answer: 11, tol: 0, explain: "Con l'elisione in quest'ermo il verso è un endecasillabo di 11 sillabe." },
    { type: "order", q: "Ordina queste strofe dalla più corta alla più lunga.", items: ["Distico", "Terzina", "Quartina", "Ottava"], explain: "Rispettivamente 2, 3, 4 e 8 versi." }
  ],
  d: [
    { type: "mc", q: "Che cosa distingue l'assonanza dalla rima?", options: ["Coincidono solo le vocali dopo l'accento", "Coincidono solo le consonanti", "Coincide tutta la parola", "Non ha alcun suono comune"], answer: 0, explain: "Cuore e morte sono in assonanza: coincidono le vocali (o, e) ma non le consonanti." },
    { type: "mc", q: "In quale tipo di componimento Ungaretti scrisse «Mi illumino / d'immenso»?", options: ["Verso libero", "Sonetto", "Ode in terzine", "Ottava"], answer: 0, explain: "È un testo del 1917 in versi liberi e brevissimi." },
    { type: "tf", q: "L'enjambement fa coincidere sempre la fine della frase con la fine del verso.", answer: false, explain: "Fa l'opposto: la frase continua nel verso successivo." },
    { type: "mc", q: "Perché la rima era importante nella poesia antica?", options: ["Aiutava a memorizzare e a recitare i versi", "Serviva solo come decorazione", "Rendeva i testi più brevi", "Era obbligatoria per legge"], answer: 0, explain: "In una cultura orale ritmo e rima facilitavano la memoria." },
    { type: "text", q: "Come si chiama il verso di dieci sillabe, con accento sulla nona?", answer: ["decasillabo"], explain: "Il decasillabo è molto usato per testi cantati e corali (Manzoni, Adelchi)." }
  ]
});

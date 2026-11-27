QBANK("it", "l2-sci-evoluzione-classificazione", {
  f: [
    { type: "text", q: "Chi pubblicò nel 1859 \"L'origine delle specie\"?", answer: ["darwin", "charles darwin"], explain: "Charles Darwin espose la teoria della selezione naturale." },
    { type: "tf", q: "Le specie attuali discendono da antenati comuni.", answer: true, explain: "È la tesi centrale della teoria evolutiva, sostenuta da fossili, anatomia e DNA." },
    { type: "mc", q: "Quale di questi è un nome scientifico corretto?", options: ["Homo sapiens", "homo Sapiens", "HOMO SAPIENS"], answer: 0, explain: "Il genere inizia con la maiuscola, l'epiteto specifico con la minuscola." },
    { type: "mc", q: "Quanti sono i domini della vita nel sistema di Woese?", options: ["2", "3", "5"], answer: 1, explain: "Bacteria, Archaea ed Eukarya." },
    { type: "tf", q: "Un fungo è un animale.", answer: false, explain: "I funghi formano un regno a sé." }
  ],
  m: [
    { type: "mc", q: "Che cosa produce nuova variabilità genetica?", options: ["Le mutazioni", "Il cibo", "L'esercizio fisico"], answer: 0, explain: "Le mutazioni creano nuovi alleli; i caratteri acquisiti in vita non si ereditano." },
    { type: "num", q: "In equilibrio di Hardy-Weinberg p = 0,7. Quanto vale q?", answer: 0.3, tol: 0.001, explain: "p + q = 1, quindi q = 0,3." },
    { type: "mc", q: "Una popolazione ridotta da una catastrofe a pochi individui subisce un...", options: ["effetto collo di bottiglia", "flusso genico", "crossing-over"], answer: 0, explain: "Il collo di bottiglia riduce drasticamente la variabilità genetica." },
    { type: "tf", q: "Due specie che vivono in ambienti simili possono sviluppare strutture simili pur non essendo imparentate.", answer: true, explain: "È l'evoluzione convergente: le strutture sono analoghe." },
    { type: "order", q: "Ordina dalla categoria più ampia alla più specifica.", items: ["Regno", "Classe", "Genere", "Specie"], explain: "Il genere raggruppa specie affini." }
  ],
  d: [
    { type: "num", q: "Una malattia recessiva colpisce 1 persona su 1600 (q² = 0,000625). Qual è la frequenza q dell'allele recessivo?", answer: 0.025, tol: 0.0005, explain: "q = √0,000625 = 0,025." },
    { type: "num", q: "Con q = 0,02 e p = 0,98, qual è la frequenza dei portatori eterozigoti (2pq)? Arrotonda a tre decimali.", answer: 0.039, tol: 0.001, explain: "2 × 0,98 × 0,02 = 0,0392." },
    { type: "mc", q: "Perché il mulo è sterile?", options: ["Ha un numero dispari di cromosomi (63) che non si appaiano correttamente in meiosi", "Perché è troppo robusto", "Perché è una specie senza gameti"], answer: 0, explain: "Il cavallo ha 64 cromosomi e l'asino 62: nel mulo gli omologhi non si appaiano e i gameti non sono normali." },
    { type: "mc", q: "Quale affermazione sulla classificazione per cladistica è corretta?", options: ["I gruppi validi sono quelli con un antenato e tutti i suoi discendenti", "Si basa solo sulla taglia", "Ignora il DNA"], answer: 0, explain: "I gruppi monofiletici riflettono la parentela evolutiva." },
    { type: "tf", q: "Secondo la teoria sintetica, i caratteri acquisiti durante la vita (es. muscoli sviluppati) si trasmettono ai figli.", answer: false, explain: "Solo le variazioni del DNA delle cellule germinali sono ereditabili; il lamarckismo è stato abbandonato." }
  ]
});

QBANK("it", "l5-sci-vulcani-terremoti", {
  f: [
    { type: "mc", q: "Come si chiama il materiale fuso che esce da un vulcano?", options: ["Lava", "Magma sotterraneo", "Cenere", "Lapillo"], answer: 0, explain: "Il magma che raggiunge la superficie si chiama lava." },
    { type: "tf", q: "Il Vesuvio seppellì Pompei nel 79 d.C.", answer: true, explain: "L'eruzione pliniana del 79 d.C. distrusse Pompei, Ercolano e Stabia." },
    { type: "mc", q: "Quale strumento registra le onde sismiche?", options: ["Il sismografo", "Il barometro", "Il termometro", "Il pluviometro"], answer: 0, explain: "Il sismografo registra le vibrazioni del suolo in un sismogramma." },
    { type: "text", q: "Come si chiama il punto della superficie che sta sulla verticale dell'ipocentro?", answer: ["epicentro", "l'epicentro"], explain: "L'epicentro è il punto in superficie sopra all'ipocentro." },
    { type: "mc", q: "Quale di questi è un vulcano italiano molto attivo, in Sicilia?", options: ["Etna", "Fuji", "Krakatoa", "Teide"], answer: 0, explain: "L'Etna è il più alto vulcano attivo d'Europa." }
  ],
  m: [
    { type: "mc", q: "Quale tipo di eruzione ha esplosioni moderate e regolari, tipica di Stromboli?", options: ["Stromboliana", "Pliniana", "Hawaiana", "Peleana"], answer: 0, explain: "Il nome del tipo di eruzione deriva proprio da Stromboli." },
    { type: "tf", q: "La magnitudo di un terremoto è la stessa in tutti i luoghi, mentre l'intensità cambia da luogo a luogo.", answer: true, explain: "La magnitudo misura l'energia alla sorgente; l'intensità gli effetti in un certo luogo." },
    { type: "mc", q: "Come si chiama la teoria che spiega i terremoti con l'accumulo e il rilascio improvviso di energia sulle faglie?", options: ["Rimbalzo elastico", "Deriva dei continenti", "Isostasia", "Convezione"], answer: 0, explain: "Formulata da Reid dopo il terremoto di San Francisco del 1906." },
    { type: "num", q: "Quante scale di gradi ha la scala Mercalli-Cancani-Sieberg (numero di gradi)?", answer: 12, tol: 0, explain: "Va dal I (non avvertito) al XII (distruzione totale)." },
    { type: "mc", q: "Che cosa sono i lapilli?", options: ["Frammenti solidi di 2-64 mm", "Gas vulcanici", "Colate di lava", "Onde sismiche"], answer: 0, explain: "Sono piroclasti di dimensione intermedia tra ceneri e bombe." }
  ],
  d: [
    { type: "num", q: "Quante volte circa è maggiore l'energia di un terremoto di magnitudo 8 rispetto a uno di magnitudo 6? (arrotonda a 1000)", answer: 1000, tol: 50, explain: "Differenza di 2 unità: 32² ≈ 1000 volte l'energia." },
    { type: "mc", q: "Perché a parità di magnitudo un terremoto in Italia può fare più danni che in Giappone?", options: ["Per la maggiore vulnerabilità del patrimonio edilizio", "Perché in Italia la magnitudo è misurata diversamente", "Perché le placche sono diverse", "Perché ci sono più vulcani"], answer: 0, explain: "In Italia molti edifici sono antichi e costruiti senza criteri antisismici: la vulnerabilità è alta." },
    { type: "tf", q: "In un terremoto il tsunami si genera sempre se l'epicentro è in mare.", answer: false, explain: "Serve un forte terremoto superficiale con spostamento verticale del fondale: non tutti i sismi marini generano uno tsunami." },
    { type: "mc", q: "Come si ottiene l'epicentro di un terremoto con i dati dei sismografi?", options: ["Con la triangolazione di almeno tre stazioni, usando il ritardo S-P", "Misurando la temperatura", "Contando le scosse", "Misurando la magnitudo in una sola stazione"], answer: 0, explain: "Il ritardo tra S e P dà la distanza da ogni stazione; i tre cerchi si incontrano nell'epicentro." },
    { type: "mc", q: "Quali sono i tre fattori del rischio sismico?", options: ["Pericolosità, vulnerabilità, esposizione", "Magnitudo, intensità, profondità", "Faglia, onda, epicentro", "Placca, mantello, crosta"], answer: 0, explain: "Rischio = pericolosità × vulnerabilità × esposizione." }
  ]
});

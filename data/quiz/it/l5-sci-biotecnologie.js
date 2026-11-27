QBANK("it", "l5-sci-biotecnologie", {
  f: [
    { type: "mc", q: "Quale ormone umano è prodotto oggi da batteri modificati?", options: ["Insulina", "Adrenalina", "Testosterone", "Melatonina"], answer: 0, explain: "L'insulina ricombinante, approvata dal 1982, è prodotta da batteri o lieviti che portano il gene umano." },
    { type: "tf", q: "Il lievito che fa lievitare il pane è un esempio di biotecnologia tradizionale.", answer: true, explain: "Si usano da millenni microrganismi per produrre alimenti." },
    { type: "text", q: "Come si chiamano le molecole circolari di DNA dei batteri usate come vettori?", answer: ["plasmidi", "plasmide", "i plasmidi", "il plasmide"], explain: "I plasmidi sono piccoli cerchi di DNA che si replicano indipendentemente." },
    { type: "mc", q: "Che cosa significa la sigla OGM?", options: ["Organismo geneticamente modificato", "Organo genetico molecolare", "Operazione genetica mirata", "Organismo giovane maturo"], answer: 0, explain: "OGM: organismo il cui genoma è stato modificato con ingegneria genetica." },
    { type: "mc", q: "Per che cosa si usa soprattutto la PCR?", options: ["Per amplificare il DNA", "Per misurare il pH", "Per tagliare il DNA", "Per sintetizzare proteine"], answer: 0, explain: "La PCR produce milioni di copie di un frammento di DNA scelto." }
  ],
  m: [
    { type: "num", q: "Quante copie di DNA si hanno, in teoria, dopo 8 cicli di PCR a partire da una molecola?", answer: 256, tol: 0, explain: "2⁸ = 256." },
    { type: "mc", q: "Perché si aggiunge un antibiotico al terreno in cui si coltivano i batteri trasformati?", options: ["Per selezionare quelli che hanno il plasmide con il gene di resistenza", "Per uccidere tutti i batteri", "Per far crescere più in fretta i batteri", "Per tagliare il DNA"], answer: 0, explain: "Solo i batteri che hanno acquisito il plasmide sono resistenti e sopravvivono." },
    { type: "tf", q: "Nell'elettroforesi su gel di agarosio i frammenti di DNA più grandi percorrono più strada dei piccoli.", answer: false, explain: "I frammenti piccoli passano più facilmente tra le maglie del gel e arrivano più lontano." },
    { type: "mc", q: "Chi ha ricevuto il Nobel per la chimica 2020 per CRISPR-Cas9?", options: ["Doudna e Charpentier", "Watson e Crick", "Mullis e Sanger", "Wilmut e Yamanaka"], answer: 0, explain: "Jennifer Doudna ed Emmanuelle Charpentier, per lo sviluppo di un metodo di editing del genoma." },
    { type: "mc", q: "I vaccini a mRNA...", options: ["Non entrano nel nucleo e non modificano il DNA", "Inseriscono il gene nel DNA", "Usano il virus intero", "Sono prodotti da piante"], answer: 0, explain: "L'mRNA viene tradotto nel citoplasma e poi degradato, senza integrarsi nel genoma." }
  ],
  d: [
    { type: "mc", q: "Perché i primer sono necessari nella PCR?", options: ["La polimerasi parte solo da un'estremità già appaiata e i primer delimitano la regione da copiare", "Servono a tagliare il DNA", "Forniscono i nucleotidi", "Servono a colorare il DNA"], answer: 0, explain: "La DNA polimerasi può solo allungare un filamento già iniziato: i primer, complementari alle estremità del bersaglio, danno l'innesco e determinano quale tratto viene amplificato." },
    { type: "tf", q: "La clonazione di Dolly fu ottenuta trasferendo il nucleo di una cellula adulta in un ovulo privato del nucleo.", answer: true, explain: "Fu il primo mammifero clonato da una cellula somatica adulta (1996)." },
    { type: "mc", q: "Che differenza c'è tra terapia genica somatica e germinale?", options: ["La somatica non è ereditaria, la germinale sì", "La somatica è più pericolosa", "La germinale riguarda solo le piante", "Nessuna"], answer: 0, explain: "Le modifiche alle cellule del corpo non passano ai figli; quelle ai gameti o all'embrione sì." },
    { type: "num", q: "Un enzima di restrizione che riconosce una sequenza di 4 basi taglia in media ogni quante basi (assumendo basi equiprobabili)?", answer: 256, tol: 0, explain: "La probabilità di una data sequenza di 4 basi è (1/4)⁴ = 1/256: in media un sito ogni 256 basi." },
    { type: "mc", q: "Qual è un rischio specifico di CRISPR-Cas9?", options: ["Tagli in punti non voluti (effetti off-target)", "Sterilizzazione del batterio", "Aumento della temperatura", "Impossibilità di usare l'RNA"], answer: 0, explain: "La guida può appaiarsi anche a sequenze simili e Cas9 può tagliare altrove, causando mutazioni indesiderate." }
  ]
});

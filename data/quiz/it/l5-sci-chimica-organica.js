QBANK("it", "l5-sci-chimica-organica", {
  f: [
    { type: "mc", q: "Quanti legami forma normalmente un atomo di carbonio?", options: ["2", "3", "4", "6"], answer: 2, explain: "Il carbonio ha 4 elettroni di valenza e forma 4 legami covalenti." },
    { type: "text", q: "Come si chiama l'alcano con 3 atomi di carbonio?", answer: ["propano", "il propano"], explain: "Met-, et-, prop-, but-: il terzo della serie è il propano, C₃H₈." },
    { type: "tf", q: "Il metano ha formula CH₄.", answer: true, explain: "Un atomo di carbonio legato a quattro idrogeni." },
    { type: "mc", q: "Che cos'è un idrocarburo?", options: ["Un composto di solo carbonio e idrogeno", "Un composto di carbonio e ossigeno", "Un composto di idrogeno e ossigeno", "Un sale del carbonio"], answer: 0, explain: "Idro-carburo: contiene soltanto C e H." },
    { type: "mc", q: "Quale composto ha un doppio legame carbonio-carbonio?", options: ["Etano", "Etene", "Etino", "Metano"], answer: 1, explain: "Il suffisso -ene indica un doppio legame: etene, CH₂=CH₂." }
  ],
  m: [
    { type: "num", q: "Quanti atomi di idrogeno ha l'alcano con 6 atomi di carbonio?", answer: 14, tol: 0, explain: "CₙH₂ₙ₊₂ con n = 6: 2·6 + 2 = 14 (esano, C₆H₁₄)." },
    { type: "mc", q: "Qual è l'angolo tra i legami in una geometria tetraedrica del carbonio sp³?", options: ["90°", "109,5°", "120°", "180°"], answer: 1, explain: "Nel tetraedro regolare gli angoli di legame misurano circa 109,5°." },
    { type: "tf", q: "Il butano e l'isobutano (2-metilpropano) sono isomeri.", answer: true, explain: "Entrambi hanno formula C₄H₁₀ ma scheletro diverso." },
    { type: "mc", q: "Quale formula generale hanno gli alchini?", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], answer: 2, explain: "Il triplo legame toglie quattro idrogeni rispetto all'alcano: CₙH₂ₙ₋₂." },
    { type: "mc", q: "Che cosa succede all'acqua di bromo (arancione) se vi si fa gorgogliare etene?", options: ["Si decolora", "Diventa più scura", "Non cambia", "Bolle"], answer: 0, explain: "Il bromo si addiziona al doppio legame e il colore scompare: è un test per gli insaturi." }
  ],
  d: [
    { type: "mc", q: "Qual è il nome IUPAC di (CH₃)₃C-CH₃?", options: ["2,2-dimetilpropano", "Pentano", "2-metilbutano", "Butano"], answer: 0, explain: "Catena di 3 C (propano) con due metili sul carbonio 2: 2,2-dimetilpropano (C₅H₁₂)." },
    { type: "mc", q: "Quale di queste molecole presenta stereoisomeria cis-trans?", options: ["CH₃-CH=CH-CH₃", "CH₂=CH₂", "CH₃-CH₂-CH₃", "CH₃-C≡C-CH₃"], answer: 0, explain: "Serve un doppio legame con due sostituenti diversi su ciascun carbonio: il 2-butene li ha, l'etene no; nel triplo legame la geometria è lineare." },
    { type: "tf", q: "Nel benzene i legami C-C hanno due lunghezze diverse, una per i semplici e una per i doppi.", answer: false, explain: "Per la delocalizzazione degli elettroni π tutti e sei i legami hanno la stessa lunghezza (139 pm)." },
    { type: "num", q: "Quanti stereoisomeri ottici (enantiomeri) esistono al massimo per una molecola con un solo centro chirale?", answer: 2, tol: 0, explain: "Con un solo carbonio asimmetrico esiste una coppia di enantiomeri, immagini speculari l'uno dell'altro." },
    { type: "mc", q: "Perché il punto di ebollizione degli alcani aumenta con la lunghezza della catena?", options: ["Aumentano le forze di London tra le molecole", "Si formano legami ionici", "Si formano legami a idrogeno", "Diminuisce la massa molare"], answer: 0, explain: "Molecole più grandi hanno nubi elettroniche più polarizzabili e forze di dispersione più intense: serve più energia per separarle." }
  ]
});

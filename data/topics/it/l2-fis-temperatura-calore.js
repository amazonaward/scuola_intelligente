TOPIC('it', {
  id: "l2-fis-temperatura-calore",
  title: "Temperatura e calore",
  intro: "«Che caldo!», «questo ferro è bollente», «il caffè si è raffreddato»: usiamo tutti i giorni le parole <b>temperatura</b> e <b>calore</b>, spesso come se fossero la stessa cosa. In fisica sono due concetti distinti, e distinguerli è il primo passo per capire perché il mare d'estate scalda più lentamente della sabbia, come funziona un termos, perché le rotaie hanno dei giunti e perché sudare ci rinfresca. In questa lezione colleghiamo le grandezze macroscopiche (temperatura, calore) al moto invisibile di atomi e molecole.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "La temperatura e le sue scale",
      html: `<p>La <b>temperatura</b> misura quanto un corpo è «caldo» o «freddo», ma il nostro senso del tatto inganna (una maniglia di metallo sembra più fredda del legno alla stessa temperatura, perché conduce meglio il calore). A livello microscopico la temperatura è legata all'<b>energia cinetica media</b> delle particelle (atomi e molecole) che costituiscono il corpo, che sono sempre in agitazione termica disordinata: più sono agitate, più il corpo è caldo.</p>
<p>Per misurarla si usano i <b>termometri</b>, che sfruttano una proprietà che varia con la temperatura: la dilatazione di un liquido (mercurio, alcol colorato), la resistenza elettrica, la radiazione infrarossa emessa. Le scale principali:</p>
<table>
<tr><th>Scala</th><th>Punti di riferimento</th><th>Conversioni</th></tr>
<tr><td><b>Celsius (°C)</b></td><td>0 °C ghiaccio fondente, 100 °C acqua bollente (a pressione di 1 atm)</td><td>T(K) = T(°C) + 273,15</td></tr>
<tr><td><b>Kelvin (K)</b></td><td>0 K = zero assoluto (−273,15 °C)</td><td>Unità SI; ΔT in K e in °C coincidono</td></tr>
<tr><td><b>Fahrenheit (°F)</b></td><td>32 °F ghiaccio fondente, 212 °F acqua bollente</td><td>T(°F) = 1,8 · T(°C) + 32</td></tr>
</table>
<p>La scala Celsius deve il nome ad Anders Celsius (1742); la scala assoluta fu proposta da William Thomson, lord Kelvin, a metà Ottocento. Lo <b>zero assoluto</b> è la temperatura minima concepibile, quella in cui l'agitazione termica sarebbe minima; non può essere raggiunta nei fatti (terzo principio della termodinamica). Per questo la scala Kelvin non ha valori negativi.</p>`
    },
    {
      type: "example",
      title: "Convertire le temperature",
      html: `<p>Temperatura corporea: 37 °C = 310,15 K = 1,8 · 37 + 32 = <b>98,6 °F</b>. L'acqua a 20 °C = 293,15 K. Una giornata a 77 °F è (77 − 32)/1,8 = <b>25 °C</b>. L'azoto liquido bolle a −196 °C, cioè circa 77 K. Una differenza di 10 °C è una differenza di 10 K, ma di 18 °F.</p>`
    },
    {
      type: "text",
      title: "La dilatazione termica",
      html: `<p>Riscaldando un corpo, l'agitazione delle particelle aumenta e in media esse si allontanano un po': il corpo si <b>dilata</b>. Per piccole variazioni di temperatura:</p>
<ul>
<li><b>dilatazione lineare</b> (barre, fili): <b>ΔL = λ · L₀ · ΔT</b>, con λ coefficiente di dilatazione lineare (K⁻¹). Valori tipici: acciaio ≈ 12·10⁻⁶ K⁻¹, alluminio ≈ 23·10⁻⁶ K⁻¹, vetro comune ≈ 9·10⁻⁶ K⁻¹;</li>
<li><b>dilatazione volumica</b>: ΔV = β · V₀ · ΔT; per i solidi isotropi β ≈ 3λ. I liquidi si dilatano più dei solidi e i gas ancora di più.</li>
</ul>
<p>Conseguenze pratiche: i giunti di dilatazione nei ponti e nelle rotaie, i fili elettrici lasciati un po' lenti d'estate, i pavimenti con fughe. Le lamine bimetalliche (due metalli con λ diversi saldati) si curvano al variare di T e comandano molti termostati.</p>
<p><b>Un'eccezione importante: l'acqua.</b> Tra 0 °C e 4 °C l'acqua, scaldandosi, si <i>contrae</i>: la sua densità è massima a circa 4 °C. Per questo il ghiaccio galleggia e in inverno i laghi gelano dalla superficie, lasciando acqua liquida (a 4 °C) sul fondo, dove la vita sopravvive.</p>`
    },
    {
      type: "example",
      title: "Il binario e il ponte",
      html: `<p>Una rotaia di acciaio lunga 100 m passa da −10 °C d'inverno a +30 °C d'estate: ΔT = 40 K. ΔL = 12·10⁻⁶ · 100 · 40 = 0,048 m = <b>4,8 cm</b>. Se i binari non avessero giunti o non fossero saldati con tecniche di pre-tensione, d'estate si deformerebbero (le rotaie «a sciabola»). Un ponte lungo 500 m d'alluminio per lo stesso salto di temperatura si allungherebbe di 23·10⁻⁶ · 500 · 40 = 0,46 m.</p>`
    },
    {
      type: "curiosity",
      title: "La torre che cresce d'estate",
      html: `<p>La Torre Eiffel è alta circa 330 m ed è di ferro: tra l'inverno e l'estate la sua altezza varia di qualche centimetro (secondo le stime, circa 15 cm tra i valori estremi). Anche il Pyrex è famoso proprio per il basso coefficiente di dilatazione, che gli permette di non rompersi quando passa dal frigorifero al forno: un vetro comune, scaldato in modo non uniforme, si dilata in modo disomogeneo e si spacca.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: temperatura e dilatazione",
      questions: [
        { type: "num", q: "Converti 27 °C in kelvin (usa 273).", answer: 300, tol: 0.5, unit: "K", explain: "T(K) = 27 + 273 = 300 K." },
        { type: "tf", q: "Una temperatura di −300 °C è fisicamente possibile.", answer: false, explain: "Lo zero assoluto è −273,15 °C: non esistono temperature più basse." },
        { type: "num", q: "Una barra lunga 2 m con λ = 20·10⁻⁶ K⁻¹ è scaldata di 50 K. Di quanti millimetri si allunga?", answer: 2, tol: 0.05, unit: "mm", explain: "ΔL = 20·10⁻⁶ · 2 · 50 = 2·10⁻³ m = 2 mm." }
      ]
    },
    {
      type: "text",
      title: "Che cos'è il calore",
      html: `<p>Il <b>calore</b> non è una «cosa» contenuta nei corpi: è <b>energia in transito</b> che passa da un corpo a temperatura più alta a uno a temperatura più bassa. Un corpo non «ha» calore: ha energia interna (la somma delle energie delle sue particelle); il calore Q è la quantità di energia che si trasferisce per effetto di una differenza di temperatura. Si misura in <b>joule</b>, anche se si usa ancora la <b>caloria</b> (1 cal = 4,186 J, la quantità di calore che porta 1 g d'acqua da 14,5 a 15,5 °C).</p>
<p>Se mettiamo a contatto due corpi a temperature diverse, il calore passa dal più caldo al più freddo finché si raggiunge l'<b>equilibrio termico</b>: stessa temperatura (principio zero della termodinamica).</p>
<p><b>Capacità termica e calore specifico.</b> Per scaldare corpi diversi della stessa quantità serve più o meno energia. Vale:</p>
<p style="text-align:center"><b>Q = m · c · ΔT</b></p>
<p>dove <b>c</b> è il <b>calore specifico</b>, in J/(kg·K): l'energia necessaria per aumentare di 1 K la temperatura di 1 kg di sostanza. Valori tipici: <b>acqua 4186</b>, ghiaccio ≈ 2100, alluminio ≈ 900, ferro ≈ 450, rame ≈ 385, piombo ≈ 130 J/(kg·K). L'acqua ha un calore specifico molto alto: si scalda e si raffredda lentamente, e per questo il mare modera il clima delle coste.</p>
<p><b>Calore latente.</b> Durante un passaggio di stato (fusione, evaporazione...) la temperatura resta costante: il calore serve a rompere i legami tra le particelle. Vale <b>Q = m · L</b>. Per l'acqua: fusione <b>L = 3,34·10⁵ J/kg</b>, evaporazione <b>L = 2,26·10⁶ J/kg</b>.</p>`
    },
    {
      type: "svg",
      title: "Scaldare 1 kg di ghiaccio fino al vapore",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="60" y1="260" x2="610" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="260" x2="60" y2="20" stroke="#475569" stroke-width="2"/>
<polyline points="60,230 140,200" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="140" y1="200" x2="260" y2="200" stroke="#dc2626" stroke-width="5"/>
<polyline points="260,200 340,120" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="340" y1="120" x2="540" y2="120" stroke="#dc2626" stroke-width="5"/>
<polyline points="540,120 580,50" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="62" y="278" font-size="15" fill="#0f172a">Calore fornito Q →</text>
<text x="70" y="38" font-size="15" fill="#0f172a">T</text>
<text x="40" y="204" font-size="15" fill="#0f172a" text-anchor="end">0 °C</text>
<text x="40" y="124" font-size="15" fill="#0f172a" text-anchor="end">100 °C</text>
<text x="150" y="222" font-size="15" fill="#dc2626" font-weight="bold">fusione</text>
<text x="395" y="140" font-size="15" fill="#dc2626" font-weight="bold">evaporazione</text>
<text x="85" y="250" font-size="14" fill="#0f172a">ghiaccio</text>
<text x="255" y="170" font-size="14" fill="#0f172a">acqua</text>
<text x="545" y="105" font-size="14" fill="#0f172a">vapore</text>
</g>
</svg>`,
      caption: "Nei tratti orizzontali (rosso) il calore non fa salire la temperatura: serve a cambiare lo stato di aggregazione."
    },
    {
      type: "example",
      title: "Acqua, ghiaccio e miscele",
      html: `<p><b>Riscaldare l'acqua.</b> Per portare 1 kg di acqua da 20 °C a 100 °C: Q = 1 · 4186 · 80 ≈ <b>335 kJ</b>. Per farla poi evaporare tutta serve ancora Q = 1 · 2,26·10⁶ = 2260 kJ, quasi sette volte di più.</p>
<p><b>Equilibrio termico.</b> Mescoli 200 g di acqua a 80 °C con 300 g di acqua a 20 °C. Il calore ceduto dall'acqua calda è uguale a quello assorbito dalla fredda: 0,2 · c · (80 − T<sub>f</sub>) = 0,3 · c · (T<sub>f</sub> − 20), da cui T<sub>f</sub> = (0,2·80 + 0,3·20)/0,5 = 22/0,5 = <b>44 °C</b>. Il valore di c si semplifica perché è lo stesso liquido.</p>
<p><b>Il sudore.</b> Evaporare 1 g di sudore sottrae al corpo circa 2,3 kJ (L·m = 2,26·10⁶ · 0,001): è il nostro condizionatore naturale.</p>`
    },
    {
      type: "text",
      title: "Come si propaga il calore",
      html: `<p>Il calore passa da un corpo all'altro in tre modi:</p>
<ul>
<li><b>Conduzione</b>: nei solidi (e un po' in tutti i corpi) l'agitazione delle particelle si trasmette di urto in urto, senza che la materia si sposti. I metalli sono ottimi conduttori (gli elettroni liberi trasportano energia); legno, polistirolo e aria ferma sono isolanti. Il flusso di calore è proporzionale alla differenza di temperatura, alla sezione e inversamente proporzionale allo spessore (legge di Fourier);</li>
<li><b>Convezione</b>: nei fluidi (liquidi e gas) il calore è trasportato dal movimento stesso della materia. Il fluido caldo si dilata, diventa meno denso e sale; quello freddo scende: si formano correnti. È il principio dei caloriferi, delle brezze marine e dei moti dell'atmosfera;</li>
<li><b>Irraggiamento</b>: il calore è trasportato da <b>onde elettromagnetiche</b> (soprattutto infrarosso) e non ha bisogno di materia. È l'unico modo in cui l'energia del Sole arriva fino a noi attraverso il vuoto dello spazio. Ogni corpo emette radiazione termica, tanto più intensa quanto più è caldo.</li>
</ul>
<p>Un <b>termos</b> sfrutta tutti e tre i principi: doppia parete con il vuoto in mezzo (niente conduzione né convezione) e superfici argentate che riflettono la radiazione.</p>`
    },
    {
      type: "widget",
      title: "Conduzione, convezione o irraggiamento?",
      widget: "classify",
      options: { groups: ["Conduzione", "Convezione", "Irraggiamento"], items: [
        ["Il manico di un cucchiaio nella pentola si scalda", 0],
        ["Il calore del Sole arriva sulla Terra", 2],
        ["L'acqua in una pentola si mescola mentre bolle", 1],
        ["Il calore di un fuoco da campo sul viso a distanza", 2],
        ["Il termosifone scalda l'aria della stanza", 1],
        ["Una padella di ferro che si scalda sul fornello", 0]
      ] },
      caption: "Chiediti se serve contatto, movimento di materia o nessuna materia."
    },
    {
      type: "remember",
      title: "Formule da ricordare",
      html: `<p><b>T(K) = T(°C) + 273,15</b> · <b>ΔL = λ·L₀·ΔT</b> · <b>Q = m·c·ΔT</b> · <b>Q = m·L</b> (passaggi di stato, T costante) · all'equilibrio: <b>Σ calori ceduti = Σ calori assorbiti</b>.</p>
<p>Temperatura = agitazione media delle particelle; calore = energia che passa per differenza di temperatura. Un cubetto di ghiaccio e una vasca d'acqua tiepida: la vasca ha temperatura maggiore ma anche enormemente più energia interna.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Temperatura e calore sono facili da confondere: ecco tre analogie.",
      tabs: [
        { label: "💧 I due serbatoi", html: "<p>Immagina due serbatoi d'acqua collegati da un tubo: l'acqua scorre dal livello più alto al più basso finché i livelli coincidono. Il <b>livello</b> è la temperatura; la <b>quantità d'acqua che passa</b> è il calore. Il serbatoio grande ha bisogno di più acqua (calore) per cambiare livello (temperatura): è la capacità termica m·c. Ed è per questo che il mare cambia temperatura molto più lentamente di una pozzanghera.</p>" },
        { label: "🔬 Le molecole", html: "<p>Nel modello cinetico un gas è un insieme di particelle che si muovono a caso e si urtano. Se scaldi il recipiente le particelle diventano più veloci; la <b>temperatura assoluta è proporzionale all'energia cinetica media</b> (Ec media = 3/2 k_B T per un gas ideale). Il calore è lo scambio di energia che avviene quando particelle veloci urtano le pareti di un corpo con particelle lente.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.9, y: 0.6, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.9, y: 0.6, z: 0, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2]] } },
        { label: "🧊 Il cubetto nella tazza", html: "<p>Metti un cubetto di ghiaccio (0 °C) in una tazza di tè caldo. Il tè cede calore, il cubetto lo assorbe; ma per un bel po' la temperatura del ghiaccio non sale: l'energia serve a <b>fondere</b> (calore latente), non a scaldare. Soltanto quando tutto il ghiaccio è liquido la temperatura comincia a salire. Ecco perché una bevanda con ghiaccio si mantiene fresca più a lungo di una a 0 °C senza ghiaccio.</p>" }
      ]
    },
    {
      type: "quiz",
      title: "Controlla: calore",
      questions: [
        { type: "num", q: "Quanto calore serve per scaldare 2 kg d'acqua di 10 K? (c = 4186 J/(kg·K))", answer: 83720, tol: 100, unit: "J", explain: "Q = 2 · 4186 · 10 = 83 720 J." },
        { type: "mc", q: "Perché durante la fusione del ghiaccio la temperatura resta a 0 °C?", options: ["Il ghiaccio non assorbe calore", "Il calore serve a rompere i legami, non ad aumentare l'agitazione", "Il termometro è difettoso", "Il calore si riflette"], answer: 1, explain: "Il calore latente aumenta l'energia potenziale delle particelle, non quella cinetica." },
        { type: "tf", q: "Il vuoto isola dalla conduzione e dalla convezione ma non dall'irraggiamento.", answer: true, explain: "Conduzione e convezione richiedono materia; l'irraggiamento si propaga anche nel vuoto." }
      ]
    },
    {
      type: "curiosity",
      title: "Perché il caffè in tazza di metallo scotta?",
      html: `<p>Una tazza di ceramica e una di alluminio con lo stesso caffè a 70 °C: la seconda scotta di più le labbra e si raffredda più in fretta. Il metallo conduce meglio il calore, quindi lo porta rapidamente alla mano o all'ambiente. Allo stesso modo, a −10 °C un guanto di lana trattiene il calore perché l'aria racchiusa nelle fibre è un ottimo isolante. Un'altra curiosità storica: prima di Joule si pensava al calore come a un fluido invisibile (il «calorico»), idea poi abbandonata quando si capì che si poteva produrre calore all'infinito per attrito, come aveva notato già Benjamin Thompson (conte Rumford) alla fine del Settecento mentre alesava le canne dei cannoni.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa di temperatura e calore",
      nodes: [
        { id: "temp", label: "Temperatura", x: 15, y: 12, color: "#ef4444", html: "Misura dell'agitazione termica media delle particelle (K, °C, °F).", why: "Si definisce operativamente con i termometri; la teoria cinetica (Maxwell, Boltzmann, seconda metà dell'Ottocento) mostrò che è proporzionale all'energia cinetica media delle molecole di un gas." },
        { id: "calore", label: "Calore", x: 50, y: 12, color: "#f59e0b", html: "Energia che passa da un corpo caldo a uno freddo.", why: "Joule negli anni 1840 dimostrò l'equivalente meccanico del calore: dissipando lavoro meccanico si produce una quantità fissa di calore. Il calore è dunque una forma di trasferimento di energia, non una sostanza." },
        { id: "dil", label: "Dilatazione", x: 85, y: 12, color: "#2563eb", html: "ΔL = λL₀ΔT: i corpi si espandono scaldandosi.", why: "Gli atomi in un solido vibrano attorno a posizioni di equilibrio; poiché la forza tra gli atomi non è perfettamente simmetrica, con più agitazione la distanza media aumenta. Per l'acqua i legami a idrogeno causano l'anomalia a 4 °C." },
        { id: "spec", label: "Calore specifico", x: 20, y: 52, color: "#16a34a", html: "Q = m·c·ΔT: quanta energia serve per scaldare.", why: "Black (Settecento) distinse tra quantità di calore e temperatura osservando che masse uguali di sostanze diverse richiedono calore diverso per salire di 1 grado. L'acqua ha c alto per i forti legami a idrogeno." },
        { id: "lat", label: "Calore latente", x: 52, y: 62, color: "#a855f7", html: "Q = m·L: energia dei cambiamenti di stato.", why: "Anche questo fu scoperto da Joseph Black (circa 1760): scaldando ghiaccio fondente la temperatura non cresce, ma il calore serve a cambiare stato. Fu cruciale per la macchina a vapore di Watt." },
        { id: "prop", label: "Propagazione", x: 85, y: 52, color: "#0ea5e9", html: "Conduzione, convezione, irraggiamento.", why: "Fourier (1822) formulò la legge matematica della conduzione; Stefan (1879) e Boltzmann (1884) quella dell'irraggiamento del corpo nero, che aprì la strada alla fisica quantistica con Planck (1900)." },
        { id: "eq", label: "Equilibrio termico", x: 50, y: 90, color: "#64748b", html: "Corpi a contatto raggiungono la stessa temperatura.", why: "È il principio zero della termodinamica: se A e B sono in equilibrio con C, lo sono tra loro. Sta alla base della definizione stessa di temperatura e del funzionamento dei termometri." }
      ],
      edges: [["temp", "calore", "differenza di T muove il"], ["calore", "spec", "quantificato da"], ["calore", "lat", "nei passaggi di stato"], ["temp", "dil", "causa la"], ["calore", "prop", "avviene per"], ["calore", "eq", "porta all'"]]
    }
  ],
  glossary: [
    { t: "Temperatura", d: "Grandezza legata all'energia cinetica media delle particelle di un corpo." },
    { t: "Kelvin (K)", d: "Unità SI di temperatura; 0 K è lo zero assoluto." },
    { t: "Dilatazione termica", d: "Variazione delle dimensioni di un corpo al variare della temperatura." },
    { t: "Calore", d: "Energia trasferita da un corpo a temperatura maggiore a uno a temperatura minore." },
    { t: "Calore specifico", d: "Energia necessaria per aumentare di 1 K la temperatura di 1 kg di sostanza." },
    { t: "Calore latente", d: "Energia per unità di massa che serve a un passaggio di stato a temperatura costante." },
    { t: "Equilibrio termico", d: "Situazione in cui i corpi a contatto hanno la stessa temperatura." },
    { t: "Conduzione, convezione, irraggiamento", d: "I tre modi di propagazione del calore." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "A quale temperatura Kelvin corrisponde 0 °C (circa)?", options: ["0 K", "100 K", "273 K", "373 K"], answer: 2, explain: "T(K) = T(°C) + 273,15." },
      { type: "num", q: "Converti 50 °F in gradi Celsius.", answer: 10, tol: 0.1, unit: "°C", explain: "T(°C) = (50 − 32)/1,8 = 10 °C." },
      { type: "num", q: "Una sbarra di acciaio (λ = 12·10⁻⁶ K⁻¹) lunga 10 m si scalda di 50 K. Di quanti millimetri si allunga?", answer: 6, tol: 0.1, unit: "mm", explain: "ΔL = 12·10⁻⁶ · 10 · 50 = 6·10⁻³ m = 6 mm." },
      { type: "tf", q: "Alla temperatura di 4 °C l'acqua liquida ha la sua densità massima.", answer: true, explain: "Tra 0 e 4 °C l'acqua si contrae scaldandosi: per questo il ghiaccio galleggia e i laghi gelano dall'alto." },
      { type: "num", q: "Quanto calore serve per scaldare 500 g di rame (c = 385 J/(kg·K)) di 40 K?", answer: 7700, tol: 10, unit: "J", explain: "Q = 0,5 · 385 · 40 = 7700 J." },
      { type: "num", q: "Mescoli 1 kg di acqua a 90 °C con 1 kg di acqua a 10 °C (nessuna dispersione). Qual è la temperatura finale?", answer: 50, tol: 0.5, unit: "°C", explain: "Masse uguali e stesso c: media delle temperature, 50 °C." },
      { type: "num", q: "Quanta energia serve per fondere 2 kg di ghiaccio già a 0 °C (L = 3,34·10⁵ J/kg)?", answer: 668000, tol: 1000, unit: "J", explain: "Q = m·L = 2 · 3,34·10⁵ = 6,68·10⁵ J." },
      { type: "mc", q: "In quale modo l'energia del Sole arriva sulla Terra?", options: ["Conduzione", "Convezione", "Irraggiamento", "Evaporazione"], answer: 2, explain: "Nello spazio vuoto l'energia si propaga solo per onde elettromagnetiche." },
      { type: "tf", q: "Il calore è una sostanza contenuta nei corpi caldi.", answer: false, explain: "È energia in transito; ciò che un corpo possiede è energia interna." },
      { type: "order", q: "Metti in ordine di calore specifico crescente.", items: ["Piombo", "Rame", "Alluminio", "Acqua"], explain: "Piombo ≈ 130 < rame ≈ 385 < alluminio ≈ 900 < acqua 4186 J/(kg·K)." }
    ]
  }
});

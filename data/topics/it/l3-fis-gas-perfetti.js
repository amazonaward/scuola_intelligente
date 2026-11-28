TOPIC('it', {
  id: "l3-fis-gas-perfetti",
  title: "I gas e la teoria cinetica",
  intro: "Perché la pressione degli pneumatici sale d'estate? Perché una siringa tappata si fa fatica a comprimerla? Perché un palloncino lasciato in frigo si affloscia? I gas si comportano in modo molto più semplice dei solidi e dei liquidi: bastano <b>tre grandezze</b>, pressione, volume e temperatura, e una sola equazione, <b>pV = nRT</b>, per descriverli. In questa lezione scopriamo le <b>leggi dei gas</b>, il modello del <b>gas perfetto</b> e la <b>teoria cinetica</b>, che spiega pressione e temperatura con il moto disordinato delle molecole.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Lo stato di un gas: p, V, T",
      html: `<p>Lo <b>stato</b> di una certa quantità di gas si descrive con tre <b>variabili di stato</b>:</p>
<ul>
<li><b>pressione p</b>: forza per unità di superficie che il gas esercita sulle pareti (Pa = N/m²; si usano anche l'atmosfera: 1 atm = 101 325 Pa e il bar: 1 bar = 10⁵ Pa);</li>
<li><b>volume V</b>: lo spazio occupato, uguale al volume del contenitore (m³; 1 L = 10⁻³ m³);</li>
<li><b>temperatura T</b>: nelle formule va sempre espressa in <b>kelvin</b>, la scala assoluta: <b>T(K) = t(°C) + 273,15</b>.</li>
</ul>
<p>La scala Kelvin (William Thomson, poi Lord Kelvin, 1848) parte dallo <b>zero assoluto</b>, −273,15 °C, la temperatura più bassa possibile, dove l'agitazione termica è minima. Per questo nelle leggi dei gas non si possono usare i gradi Celsius: 20 °C non è «il doppio» di 10 °C, ma 293 K non è molto più di 283 K.</p>
<p>Come quantità di gas si usa la <b>mole</b> (n): una mole contiene <b>N<sub>A</sub> = 6,022·10²³</b> particelle (numero di Avogadro). Una mole di un gas qualunque, a 0 °C e 1 atm (condizioni normali), occupa circa <b>22,4 litri</b> (volume molare).</p>`
    },
    {
      type: "text",
      title: "Le leggi dei gas",
      html: `<p>Tre leggi sperimentali descrivono come due variabili variano quando la terza è tenuta costante (per una quantità fissa di gas):</p>
<ol>
<li><b>Legge di Boyle (trasformazione isoterma, T costante)</b>, 1662 (Robert Boyle; indipendentemente da Edme Mariotte nel 1676): <b>p · V = costante</b>. Se il volume si dimezza, la pressione raddoppia: p e V sono <b>inversamente proporzionali</b> (grafico: iperbole).</li>
<li><b>Prima legge di Gay-Lussac (isobara, p costante)</b>, 1802: <b>V / T = costante</b>, con T in kelvin. Il volume è <b>direttamente proporzionale</b> alla temperatura assoluta (retta per l'origine).</li>
<li><b>Seconda legge di Gay-Lussac (isocora, V costante)</b>: <b>p / T = costante</b>. La pressione è proporzionale alla temperatura assoluta.</li>
</ol>
<p>Le tre leggi si riassumono nella <b>legge generale</b> (per una quantità fissa di gas):</p>
<p style="text-align:center"><b>p<sub>1</sub>V<sub>1</sub> / T<sub>1</sub> = p<sub>2</sub>V<sub>2</sub> / T<sub>2</sub></b></p>
<p>Joseph Louis Gay-Lussac e Alexander von Humboldt, studiando le reazioni tra gas, scoprirono anche che i volumi dei gas che reagiscono stanno tra loro in rapporti di numeri interi piccoli; per spiegarlo, <b>Amedeo Avogadro</b> propose nel 1811 che <b>volumi uguali di gas diversi, alla stessa temperatura e pressione, contengano lo stesso numero di molecole</b>. La sua ipotesi, ignorata per quasi cinquant'anni, fu riscoperta da Stanislao Cannizzaro al congresso di Karlsruhe nel 1860.</p>`
    },
    {
      type: "svg",
      title: "I grafici delle trasformazioni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="100" y="22" font-size="15" fill="#0f172a" text-anchor="middle" font-weight="bold">Isoterma (p,V)</text>
<line x1="30" y1="250" x2="180" y2="250" stroke="#334155" stroke-width="3"/><line x1="30" y1="250" x2="30" y2="40" stroke="#334155" stroke-width="3"/>
<path d="M50 60 Q 70 190 170 235" stroke="#dc2626" stroke-width="4" fill="none"/>
<text x="105" y="278" font-size="14" fill="#334155" text-anchor="middle">V</text>
<text x="14" y="150" font-size="14" fill="#334155" text-anchor="middle">p</text>
<text x="100" y="120" font-size="14" fill="#991b1b">p·V = cost</text>
<text x="300" y="22" font-size="15" fill="#0f172a" text-anchor="middle" font-weight="bold">Isobara (V,T)</text>
<line x1="230" y1="250" x2="380" y2="250" stroke="#334155" stroke-width="3"/><line x1="230" y1="250" x2="230" y2="40" stroke="#334155" stroke-width="3"/>
<line x1="230" y1="250" x2="370" y2="70" stroke="#2563eb" stroke-width="4"/>
<text x="305" y="278" font-size="14" fill="#334155" text-anchor="middle">T (K)</text>
<text x="214" y="150" font-size="14" fill="#334155" text-anchor="middle">V</text>
<text x="290" y="160" font-size="14" fill="#1e3a8a">V/T = cost</text>
<text x="500" y="22" font-size="15" fill="#0f172a" text-anchor="middle" font-weight="bold">Isocora (p,T)</text>
<line x1="430" y1="250" x2="580" y2="250" stroke="#334155" stroke-width="3"/><line x1="430" y1="250" x2="430" y2="40" stroke="#334155" stroke-width="3"/>
<line x1="430" y1="250" x2="570" y2="70" stroke="#16a34a" stroke-width="4"/>
<text x="505" y="278" font-size="14" fill="#334155" text-anchor="middle">T (K)</text>
<text x="414" y="150" font-size="14" fill="#334155" text-anchor="middle">p</text>
<text x="490" y="160" font-size="14" fill="#166534">p/T = cost</text>
</g>
</svg>`,
      caption: "Isoterma: iperbole. Isobara e isocora: rette che passano per l'origine se la temperatura è in kelvin."
    },
    {
      type: "example",
      title: "Siringa, pneumatico e bombola",
      html: `<p><b>Siringa (Boyle).</b> Una siringa tappata contiene 20 mL d'aria a 1,0 atm. Spingendo lo stantuffo fino a 5 mL (a temperatura costante): p<sub>2</sub> = p<sub>1</sub>V<sub>1</sub>/V<sub>2</sub> = 1,0 × 20/5 = <b>4,0 atm</b>.</p>
<p><b>Pneumatico (Gay-Lussac, V quasi costante).</b> Un pneumatico a 20 °C (293 K) ha 2,00 bar. Dopo una lunga corsa si scalda a 50 °C (323 K): p<sub>2</sub> = 2,00 × 323/293 ≈ <b>2,20 bar</b>. Per questo la pressione va controllata «a freddo».</p>
<p><b>Palloncino in frigorifero (Gay-Lussac).</b> Un palloncino di 3,0 L a 27 °C (300 K) messo in un congelatore a −23 °C (250 K) si riduce a V<sub>2</sub> = 3,0 × 250/300 = <b>2,5 L</b>. Si gonfia di nuovo tornando a temperatura ambiente.</p>
<p><b>Legge generale.</b> Una bolla d'aria sale da 40 m di profondità (p = 5 atm, 4 °C = 277 K) alla superficie (1 atm, 20 °C = 293 K), con volume iniziale 1,0 cm³: V<sub>2</sub> = 1,0 × 5 × 293/(1 × 277) ≈ <b>5,3 cm³</b>. Per questo i subacquei devono risalire espirando: i polmoni si espanderebbero e potrebbero lesionarsi.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: leggi dei gas",
      questions: [
        { type: "num", q: "Un gas a 2 atm occupa 6 L. A temperatura costante lo si comprime a 3 L. Quale sarà la pressione?", answer: 4, tol: 0, unit: "atm", explain: "p·V = costante: 2 × 6 = p × 3 ⟹ p = 4 atm." },
        { type: "num", q: "Quanto vale 27 °C in kelvin?", answer: 300, tol: 0.2, unit: "K", explain: "T = 27 + 273,15 ≈ 300 K." },
        { type: "mc", q: "In un recipiente rigido chiuso la temperatura assoluta raddoppia. Che cosa succede alla pressione?", options: ["Raddoppia", "Si dimezza", "Resta uguale", "Quadruplica"], answer: 0, explain: "Seconda legge di Gay-Lussac: p/T costante a V costante." }
      ]
    },
    {
      type: "text",
      title: "Il gas perfetto e l'equazione di stato",
      html: `<p>Un <b>gas perfetto</b> (o ideale) è un modello: un insieme di molecole puntiformi, <b>senza interazioni</b> tra loro se non negli urti elastici, che occupano un volume trascurabile rispetto al contenitore. I gas reali (aria, azoto, elio…) si comportano così con ottima approssimazione quando sono <b>rarefatti</b> (bassa pressione) e lontani dalla temperatura di liquefazione.</p>
<p>Combinando le leggi di Boyle, Gay-Lussac e Avogadro si ottiene l'<b>equazione di stato dei gas perfetti</b>:</p>
<p style="text-align:center"><b>p · V = n · R · T</b></p>
<p>con <b>R = 8,314 J/(mol·K)</b> costante universale dei gas. Se si scrive il numero di molecole N = n·N<sub>A</sub> si ottiene la forma equivalente <b>p·V = N·k<sub>B</sub>·T</b>, dove <b>k<sub>B</sub> = R/N<sub>A</sub> = 1,381·10⁻²³ J/K</b> è la <b>costante di Boltzmann</b>.</p>
<p>Le tre leggi sono casi particolari: se n e T sono costanti, p·V = costante; se n e p sono costanti, V/T = costante; se n e V sono costanti, p/T = costante. Dall'equazione si ritrova anche il volume molare: V = nRT/p = 1 × 8,314 × 273,15/101 325 = 0,0224 m³ = <b>22,4 L</b> ✓.</p>
<p><b>Esempio.</b> Quante moli ci sono in una bombola da 10 L a 2,0·10⁵ Pa e 27 °C? n = pV/(RT) = (2,0·10⁵ × 0,010)/(8,314 × 300) = 2000/2494 ≈ <b>0,80 mol</b> (circa 4,8·10²³ molecole).</p>`
    },
    {
      type: "widget",
      title: "Quale grandezza resta costante?",
      widget: "match",
      options: { pairs: [
        ["Isoterma", "T costante: p·V = cost"],
        ["Isobara", "p costante: V/T = cost"],
        ["Isocora", "V costante: p/T = cost"],
        ["Legge generale", "pV/T = cost"]
      ] },
      caption: "Collega il nome della trasformazione alla grandezza che resta costante."
    },
    {
      type: "text",
      title: "La teoria cinetica dei gas",
      html: `<p>Perché un gas esercita pressione? Perché è fatto di molecole in rapido moto disordinato che colpiscono le pareti. La <b>teoria cinetica</b> (Bernoulli, 1738; poi Clausius, Maxwell e Boltzmann nell'Ottocento) spiega le proprietà macroscopiche a partire dal comportamento medio delle molecole.</p>
<p>Si assume: molecole di massa m, puntiformi, in moto casuale, urti elastici con le pareti e tra loro, senza altre interazioni. Dall'impulso trasmesso alle pareti negli urti si ottiene la <b>pressione del gas</b>:</p>
<p style="text-align:center"><b>p = (1/3) · (N/V) · m · ⟨v²⟩</b></p>
<p>dove ⟨v²⟩ è il valor medio del quadrato della velocità delle molecole. Poiché l'energia cinetica media di una molecola è <b>⟨K⟩ = ½·m·⟨v²⟩</b>, risulta p·V = (2/3)·N·⟨K⟩. Confrontando con p·V = N·k<sub>B</sub>·T si ottiene il risultato fondamentale:</p>
<p style="text-align:center"><b>⟨K⟩ = (3/2) · k<sub>B</sub> · T</b></p>
<p><b>La temperatura assoluta è una misura dell'energia cinetica media delle molecole</b>: più è alta la temperatura, più le molecole sono veloci in media. E non dipende dal tipo di gas: a una data T, tutte le molecole hanno la stessa energia cinetica media (le più leggere sono più veloci).</p>
<p>La <b>velocità quadratica media</b> è <b>v<sub>qm</sub> = √⟨v²⟩ = √(3·k<sub>B</sub>·T/m) = √(3RT/M)</b> (M = massa molare in kg/mol).</p>
<table>
<tr><th>Gas (a 300 K)</th><th>M (g/mol)</th><th>v<sub>qm</sub> (m/s)</th></tr>
<tr><td>Idrogeno H₂</td><td>2</td><td>≈ 1930</td></tr>
<tr><td>Elio He</td><td>4</td><td>≈ 1370</td></tr>
<tr><td>Azoto N₂</td><td>28</td><td>≈ 517</td></tr>
<tr><td>Ossigeno O₂</td><td>32</td><td>≈ 483</td></tr>
<tr><td>Anidride carbonica CO₂</td><td>44</td><td>≈ 412</td></tr>
</table>
<p>Le molecole dell'aria viaggiano a circa 500 m/s (il suono, 340 m/s, è più lento perché è una perturbazione collettiva), ma si urtano miliardi di volte al secondo e percorrono solo circa 70 nm tra un urto e l'altro (cammino libero medio): per questo un profumo si diffonde nella stanza in decine di secondi e non in un istante.</p>`
    },
    {
      type: "example",
      title: "Quanta energia ha una molecola?",
      html: `<p>A 300 K l'energia cinetica media (traslazionale) di una molecola è ⟨K⟩ = (3/2) × 1,381·10⁻²³ × 300 = <b>6,2·10⁻²¹ J</b>: piccolissima, ma ce ne sono tantissime. Una mole contiene N<sub>A</sub> molecole: l'energia totale è U = (3/2)·n·R·T = 1,5 × 1 × 8,314 × 300 ≈ <b>3,7 kJ</b>.</p>
<p>Per raddoppiare la velocità quadratica media bisogna <b>quadruplicare la temperatura assoluta</b> (v ∝ √T): da 300 K a 1200 K. Perché l'elio sfugge dall'atmosfera terrestre e l'azoto no? Perché a parità di T le molecole leggere sono molto più veloci, e una piccola frazione di molecole di He raggiunge la velocità di fuga (11,2 km/s). La Luna, con v<sub>fuga</sub> di 2,4 km/s, non trattiene nemmeno i gas pesanti.</p>`
    },
    {
      type: "svg",
      title: "Molecole in un contenitore",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<defs>
<marker id="gpA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="50" y="40" width="240" height="200" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<g fill="#2563eb">
<circle cx="90" cy="80" r="8"/><circle cx="140" cy="140" r="8"/><circle cx="200" cy="90" r="8"/><circle cx="250" cy="180" r="8"/><circle cx="110" cy="200" r="8"/><circle cx="180" cy="210" r="8"/><circle cx="240" cy="70" r="8"/>
</g>
<line x1="90" y1="80" x2="60" y2="60" stroke="#dc2626" stroke-width="3" marker-end="url(#gpA)"/>
<line x1="250" y1="180" x2="280" y2="190" stroke="#dc2626" stroke-width="3" marker-end="url(#gpA)"/>
<line x1="140" y1="140" x2="175" y2="120" stroke="#dc2626" stroke-width="3" marker-end="url(#gpA)"/>
<text x="170" y="270" font-size="15" fill="#0f172a" text-anchor="middle">T bassa: molecole lente</text>
<rect x="330" y="40" width="240" height="200" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<g fill="#ea580c">
<circle cx="370" cy="80" r="8"/><circle cx="420" cy="140" r="8"/><circle cx="480" cy="90" r="8"/><circle cx="530" cy="180" r="8"/><circle cx="390" cy="200" r="8"/><circle cx="460" cy="210" r="8"/><circle cx="520" cy="70" r="8"/>
</g>
<line x1="370" y1="80" x2="338" y2="48" stroke="#dc2626" stroke-width="5" marker-end="url(#gpA)"/>
<line x1="530" y1="180" x2="565" y2="200" stroke="#dc2626" stroke-width="5" marker-end="url(#gpA)"/>
<line x1="420" y1="140" x2="490" y2="105" stroke="#dc2626" stroke-width="5" marker-end="url(#gpA)"/>
<text x="450" y="270" font-size="15" fill="#0f172a" text-anchor="middle">T alta: molecole veloci, più urti</text>
</g>
</svg>`,
      caption: "Le frecce lunghe indicano molecole più veloci: gli urti contro le pareti sono più frequenti e più forti, quindi la pressione aumenta."
    },
    {
      type: "quiz",
      title: "Controlla: equazione di stato e teoria cinetica",
      questions: [
        { type: "num", q: "Quante moli di gas ci sono in 5 L a 1·10⁵ Pa e 300 K? (R = 8,31 J/mol·K)", answer: 0.2, tol: 0.01, unit: "mol", explain: "n = pV/(RT) = 10⁵ × 0,005/(8,31 × 300) ≈ 0,20 mol." },
        { type: "mc", q: "Se la temperatura assoluta di un gas perfetto quadruplica, la velocità quadratica media delle molecole:", options: ["quadruplica", "raddoppia", "resta uguale", "si dimezza"], answer: 1, explain: "v ∝ √T: √4 = 2." },
        { type: "tf", q: "A parità di temperatura le molecole di idrogeno hanno un'energia cinetica media maggiore di quelle dell'azoto.", answer: false, explain: "⟨K⟩ = (3/2)k_B·T dipende solo da T: le molecole di H₂ sono più veloci, ma hanno la stessa energia cinetica media." }
      ]
    },
    {
      type: "text",
      title: "Energia interna di un gas perfetto",
      html: `<p>L'<b>energia interna U</b> è la somma delle energie delle molecole. In un gas perfetto monoatomico (He, Ne, Ar) le molecole hanno solo energia cinetica di traslazione:</p>
<p style="text-align:center"><b>U = N · (3/2)·k<sub>B</sub>·T = (3/2) · n · R · T</b></p>
<p>L'energia interna di un gas perfetto <b>dipende solo dalla temperatura</b> (non da p o V separatamente), perché non ci sono forze tra le molecole e quindi nessuna energia potenziale. Per gas biatomici (N₂, O₂) a temperatura ambiente, alle 3 traslazioni si aggiungono 2 rotazioni e U = (5/2)·n·R·T. Questo risultato è alla base del primo principio della termodinamica, che studieremo nella prossima lezione.</p>
<p>Il numero di modi indipendenti in cui una molecola può immagazzinare energia si chiama <b>numero di gradi di libertà</b> f: U = (f/2)·n·R·T (<b>teorema di equipartizione dell'energia</b>, Boltzmann): f = 3 per un gas monoatomico, f = 5 per uno biatomico a temperatura ambiente.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i gas",
      intro: "Dietro le formule c'è un'immagine molto semplice: tante palline in movimento.",
      tabs: [
        {
          label: "🏀 La stanza di palline",
          html: "<p>Immagina una stanza piena di palline da ping-pong che rimbalzano ovunque. <b>Pressione</b> = numero e violenza degli urti sulle pareti. Se <b>riduci la stanza</b> (diminuisci V), le palline colpiscono le pareti più spesso: p aumenta (Boyle). Se <b>aumenti la velocità</b> delle palline (T più alta), gli urti sono più frequenti e più forti: p sale (Gay-Lussac). Se <b>aggiungi palline</b> (n maggiore), c'è più pressione. L'equazione pV = nRT riassume tutto questo.</p>"
        },
        {
          label: "🧪 La bottiglia nel frigo",
          html: "<p>Esperimento: tappa una bottiglietta di plastica vuota (piena d'aria) a temperatura ambiente e mettila in freezer. Dopo un po' la bottiglia si <b>schiaccia</b>: l'aria si è raffreddata, le molecole sono più lente, la pressione interna è calata e la pressione atmosferica esterna ha schiacciato la bottiglia. Riportandola al caldo torna come prima. È la legge di Gay-Lussac che puoi vedere con i tuoi occhi!</p>"
        },
        {
          label: "🎬 Dal Celsius al Kelvin",
          html: "<p>Passa dai gradi Celsius ai kelvin e confronta le tre temperature più importanti: punto di fusione del ghiaccio (0 °C = 273,15 K), temperatura ambiente (20 °C ≈ 293 K), ebollizione dell'acqua (100 °C = 373,15 K). Il «punto zero» dei kelvin è lo zero assoluto, a −273,15 °C: nessuna temperatura può essere più bassa, perché l'energia cinetica media non può essere negativa.</p>",
          widget: "timeline",
          options: { unit: "K", events: [
            { year: 0, label: "Zero assoluto", icon: "🧊" },
            { year: 77, label: "Azoto liquido", icon: "💧" },
            { year: 273, label: "Ghiaccio fonde", icon: "❄️" },
            { year: 293, label: "Ambiente", icon: "🏠" },
            { year: 373, label: "Acqua bolle", icon: "♨️" }
          ] }
        },
        {
          label: "🔗 Abbina grandezze",
          html: "<p>Collega ogni grandezza al suo valore o significato.</p>",
          widget: "match",
          options: { pairs: [
            ["R", "8,314 J/(mol·K)"],
            ["k_B", "1,381·10⁻²³ J/K"],
            ["N_A", "6,022·10²³ mol⁻¹"],
            ["Volume molare (0 °C, 1 atm)", "22,4 L"],
            ["Energia cinetica media", "(3/2)·k_B·T"]
          ] }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo zero assoluto non si raggiunge (ma ci si avvicina)",
      html: `<p>Il terzo principio della termodinamica afferma che non si può raggiungere lo zero assoluto con un numero finito di operazioni. Eppure i laboratori ci si avvicinano molto: i fisici hanno raffreddato gas di atomi a temperature di <b>pochi nanokelvin</b>, un miliardesimo di kelvin sopra lo zero assoluto, più fredde di qualsiasi luogo naturale dell'universo (lo spazio vuoto è a 2,7 K, la temperatura della radiazione cosmica di fondo). In questi gas ultrafreddi compaiono stati della materia spettacolari, come il <b>condensato di Bose-Einstein</b>, osservato per la prima volta nel 1995.</p>`
    },
    {
      type: "curiosity",
      title: "Il moto browniano: vedere l'agitazione termica",
      html: `<p>Nel 1827 il botanico <b>Robert Brown</b> osservò al microscopio che i granuli di polline in acqua si muovevano a scatti in modo disordinato. Nel 1905 <b>Albert Einstein</b> spiegò che sono i continui urti delle molecole d'acqua, invisibili ma in agitazione termica, a spingere il granulo ora da una parte ora dall'altra. Pochi anni dopo, <b>Jean Perrin</b> confermò sperimentalmente la teoria e ottenne una stima del numero di Avogadro, convincendo anche gli scettici dell'esistenza reale degli atomi: Perrin ottenne per questo il Nobel per la fisica nel 1926.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa dei gas",
      nodes: [
        { id: "stato", label: "Variabili di stato p, V, T", x: 50, y: 8, color: "#2563eb", html: "Pressione, volume e temperatura assoluta descrivono lo stato di un gas.", why: "Sono le grandezze macroscopiche misurabili direttamente; la scala Kelvin (1848) rende T proporzionale all'energia delle molecole." },
        { id: "leggi", label: "Leggi di Boyle e Gay-Lussac", x: 15, y: 42, color: "#16a34a", html: "Isoterma: pV = cost; isobara: V/T = cost; isocora: p/T = cost.", why: "Frutto di esperimenti del Seicento e Ottocento (Boyle 1662, Gay-Lussac 1802). Valgono per tutti i gas rarefatti, indipendentemente dalla natura chimica." },
        { id: "eq", label: "pV = nRT", x: 55, y: 42, color: "#ef4444", html: "Equazione di stato del gas perfetto.", why: "Si ottiene combinando le leggi sperimentali con l'ipotesi di Avogadro (1811) sul numero di molecole in un dato volume. La sintesi fu data da Clapeyron nel 1834." },
        { id: "cinetica", label: "Teoria cinetica", x: 88, y: 42, color: "#f59e0b", html: "Pressione e temperatura derivano dagli urti e dall'energia delle molecole: ⟨K⟩ = (3/2)k_B T.", why: "Bernoulli (1738), Clausius, Maxwell e Boltzmann (Ottocento) ricavarono le leggi macroscopiche dal moto delle molecole, dando forza all'ipotesi atomica." },
        { id: "interna", label: "Energia interna U", x: 30, y: 82, color: "#8b5cf6", html: "Per un gas monoatomico U = (3/2)nRT: dipende solo da T.", why: "Nel gas perfetto non ci sono forze tra molecole, quindi niente energia potenziale. Per i gas biatomici contano anche le rotazioni (equipartizione)." },
        { id: "reale", label: "Gas reali", x: 75, y: 82, color: "#64748b", html: "A pressioni alte o temperature basse le interazioni e il volume delle molecole contano: il modello perfetto fallisce.", why: "Van der Waals (1873) corresse l'equazione includendo il volume molecolare e le attrazioni, prevedendo anche la liquefazione dei gas (Nobel 1910)." }
      ],
      edges: [["stato", "leggi", "legate da"], ["leggi", "eq", "si riassumono in"], ["eq", "cinetica", "spiegata da"], ["cinetica", "interna", "implica"], ["eq", "reale", "modello limite di"]]
    }
  ],
  glossary: [
    { t: "Gas perfetto", d: "Modello di gas con molecole puntiformi senza interazioni, che segue pV = nRT." },
    { t: "Kelvin (K)", d: "Unità di temperatura assoluta: T(K) = t(°C) + 273,15." },
    { t: "Zero assoluto", d: "0 K = −273,15 °C: la temperatura più bassa teoricamente possibile." },
    { t: "Mole", d: "Quantità di sostanza contenente N_A = 6,022·10²³ particelle." },
    { t: "Costante dei gas R", d: "R = 8,314 J/(mol·K), nella legge pV = nRT." },
    { t: "Costante di Boltzmann", d: "k_B = R/N_A = 1,381·10⁻²³ J/K: lega temperatura ed energia delle molecole." },
    { t: "Isoterma / isobara / isocora", d: "Trasformazioni a temperatura / pressione / volume costante." },
    { t: "Velocità quadratica media", d: "v_qm = √(3k_B T/m): misura tipica della velocità delle molecole." },
    { t: "Energia interna", d: "Somma delle energie delle molecole del sistema." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto vale in kelvin una temperatura di 127 °C?", answer: 400, tol: 0.2, unit: "K", explain: "T = 127 + 273,15 ≈ 400 K." },
      { type: "num", q: "Un gas a 1 atm occupa 12 L. A temperatura costante lo si espande a 36 L. Quale sarà la pressione?", answer: 0.333, tol: 0.005, unit: "atm", explain: "p = 1 × 12/36 = 1/3 atm ≈ 0,33 atm." },
      { type: "num", q: "Un gas occupa 2,0 L a 300 K e pressione costante. A che volume arriva scaldandolo a 450 K?", answer: 3, tol: 0.01, unit: "L", explain: "V2 = V1·T2/T1 = 2 × 450/300 = 3,0 L." },
      { type: "tf", q: "Nelle leggi dei gas la temperatura può essere usata in gradi Celsius.", answer: false, explain: "Va usata la temperatura assoluta in kelvin, altrimenti i rapporti sono sbagliati." },
      { type: "num", q: "Calcola la pressione di 0,50 mol di gas perfetto in 10 L a 300 K. Usa R = 8,31 J/mol·K.", answer: 124650, tol: 300, unit: "Pa", explain: "p = nRT/V = 0,50 × 8,31 × 300/0,010 ≈ 1,25·10⁵ Pa." },
      { type: "mc", q: "Che cosa misura la temperatura assoluta in un gas perfetto?", options: ["La massa delle molecole", "L'energia cinetica media delle molecole", "Il numero di molecole", "Il volume molecolare"], answer: 1, explain: "⟨K⟩ = (3/2)·k_B·T." },
      { type: "mc", q: "Se la temperatura assoluta di un gas quadruplica, la velocità quadratica media delle sue molecole:", options: ["quadruplica", "raddoppia", "resta uguale", "diventa 16 volte"], answer: 1, explain: "v_qm ∝ √T." },
      { type: "tf", q: "Un gas perfetto monoatomico ha energia interna U = (3/2)nRT.", answer: true, explain: "Solo energia cinetica di traslazione: tre gradi di libertà." },
      { type: "mc", q: "Perché la pressione di uno pneumatico aumenta dopo un lungo viaggio?", options: ["L'aria si comprime", "L'aria si scalda e le molecole urtano di più le pareti", "L'aria si raffredda", "Aumenta la massa d'aria"], answer: 1, explain: "A volume quasi costante p/T è costante: più T, più p." },
      { type: "order", q: "Ordina in modo crescente la velocità quadratica media a 300 K.", items: ["Anidride carbonica", "Ossigeno", "Azoto", "Elio", "Idrogeno"], explain: "A parità di T, v ∝ 1/√M: CO₂ (412 m/s) < O₂ (483) < N₂ (517) < He (1370) < H₂ (1930)." }
    ]
  }
});

TOPIC('it', {
  id: "l3-sci-legami-chimici",
  title: "I legami chimici",
  intro: "Perché l'ossigeno dell'aria è O₂ e non O? Perché il sale da cucina è un solido duro che si scioglie in acqua e conduce solo se disciolto, mentre il rame è un filo flessibile che conduce sempre? La risposta sta nel modo in cui gli atomi condividono, cedono o mettono in comune i <b>elettroni di valenza</b>. In questa lezione studiamo il legame <b>ionico</b>, <b>covalente</b> e <b>metallico</b>, impariamo a disegnare le strutture di Lewis e a prevedere la <b>forma delle molecole</b> con il modello <b>VSEPR</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Perché gli atomi si legano",
      html: `<p>Un legame si forma quando l'insieme degli atomi legati ha un'<b>energia più bassa</b> degli atomi isolati: rompere il legame richiede quindi energia (energia di legame). Nel 1916 <b>Gilbert Lewis</b> e, indipendentemente, <b>Walther Kossel</b> osservarono che i gas nobili, con otto elettroni nel guscio esterno (due per l'elio), sono molto stabili e poco reattivi. Gli altri atomi tendono a raggiungere la stessa situazione: è la <b>regola dell'ottetto</b>.</p>
<p>Ci sono tre strade per ottenere un ottetto:</p>
<ul>
<li><b>cedere o acquistare</b> elettroni diventando ioni che si attraggono: <b>legame ionico</b>;</li>
<li><b>condividere</b> coppie di elettroni: <b>legame covalente</b>;</li>
<li><b>mettere in comune</b> gli elettroni di valenza di molti atomi uguali: <b>legame metallico</b>.</li>
</ul>
<p>Per rappresentare gli elettroni di valenza si usano i <b>simboli di Lewis</b>: il simbolo dell'elemento circondato da punti, uno per elettrone. Il sodio ha un punto (Na·), il cloro sette (tre coppie e un punto spaiato), l'ossigeno sei (due punti spaiati).</p>
<p>La regola ha eccezioni: l'idrogeno si ferma a 2 elettroni (duetto); il boro in BF₃ ha 6 elettroni; gli elementi dal terzo periodo in poi, come P e S, possono avere più di otto elettroni (PCl₅, SF₆).</p>`
    },
    {
      type: "text",
      title: "Quale legame? Lo decide l'elettronegatività",
      html: `<p>Come hai visto nella tavola periodica, l'<b>elettronegatività (EN)</b> misura quanto un atomo attira gli elettroni di legame. Dalla <b>differenza ΔEN</b> tra i due atomi si capisce che tipo di legame si forma (soglie indicative):</p>
<ul>
<li><b>ΔEN ≈ 0 – 0,4</b>: legame <b>covalente apolare</b>, gli elettroni sono condivisi in modo uguale (Cl₂, O₂, C–H).</li>
<li><b>ΔEN ≈ 0,4 – 1,7</b>: legame <b>covalente polare</b>, gli elettroni sono spostati verso l'atomo più elettronegativo, che assume una carica parziale negativa δ⁻ (HCl, H₂O).</li>
<li><b>ΔEN &gt; 1,7 circa</b>: legame <b>ionico</b>, il trasferimento di elettroni è quasi completo (NaCl, MgO).</li>
</ul>
<p>Esempi con la scala di Pauling: NaCl: 3,16 − 0,93 = 2,23 (ionico). HCl: 3,16 − 2,20 = 0,96 (polare). O–H: 3,44 − 2,20 = 1,24 (polare). C–H: 2,55 − 2,20 = 0,35 (quasi apolare). In realtà la transizione è graduale: ogni legame ionico ha un po' di carattere covalente e viceversa.</p>`
    },
    {
      type: "svg",
      title: "Dal covalente al ionico",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><linearGradient id="gr" x1="0" x2="1"><stop offset="0" stop-color="#4ade80"/><stop offset="0.5" stop-color="#facc15"/><stop offset="1" stop-color="#f87171"/></linearGradient></defs>
<rect x="40" y="100" width="520" height="40" rx="8" fill="url(#gr)"/>
<text x="300" y="35" font-size="17" font-weight="bold" fill="#1f2937" text-anchor="middle">Il carattere del legame cresce con ΔEN</text>
<text x="60" y="90" font-size="15" fill="#166534" font-weight="bold">covalente apolare</text>
<text x="300" y="90" font-size="15" fill="#92400e" font-weight="bold" text-anchor="middle">covalente polare</text>
<text x="540" y="90" font-size="15" fill="#991b1b" font-weight="bold" text-anchor="end">ionico</text>
<g stroke="#1f2937" stroke-width="2"><line x1="60" y1="140" x2="60" y2="158"/><line x1="180" y1="140" x2="180" y2="158"/><line x1="320" y1="140" x2="320" y2="158"/><line x1="500" y1="140" x2="500" y2="158"/></g>
<g font-size="15" fill="#1f2937" text-anchor="middle">
<text x="60" y="182">Cl–Cl</text><text x="60" y="203" fill="#475569" font-size="14">ΔEN = 0</text>
<text x="180" y="182">C–H</text><text x="180" y="203" fill="#475569" font-size="14">0,35</text>
<text x="320" y="182">H–Cl</text><text x="320" y="203" fill="#475569" font-size="14">0,96</text>
<text x="500" y="182">Na⁺Cl⁻</text><text x="500" y="203" fill="#475569" font-size="14">2,23</text>
</g>
<text x="300" y="260" font-size="15" fill="#475569" text-anchor="middle">La suddivisione è una convenzione: il passaggio è graduale.</text>
</svg>`,
      caption: "Più grande è la differenza di elettronegatività, più gli elettroni sono spostati verso un atomo, fino al trasferimento completo."
    },
    {
      type: "text",
      title: "Il legame ionico",
      html: `<p>Si forma tra un <b>metallo</b> (bassa energia di ionizzazione) e un <b>non metallo</b> (alta affinità elettronica). Il sodio cede il suo elettrone 3s al cloro: Na → Na⁺ + e⁻ (configurazione del neon), Cl + e⁻ → Cl⁻ (configurazione dell'argon). I due ioni di carica opposta si attraggono con forza di Coulomb.</p>
<p>Un composto ionico <b>non è fatto di molecole</b> ma di un <b>reticolo cristallino</b> in cui ogni ione è circondato da ioni di carica opposta (in NaCl ogni Na⁺ ha 6 Cl⁻ vicini e viceversa). La formula indica solo il <b>rapporto</b> tra gli ioni (formula unità): MgCl₂ vuol dire 1 Mg²⁺ ogni 2 Cl⁻, neutro in totale. La stabilità del cristallo è data dall'<b>energia reticolare</b>: più alte sono le cariche e più piccoli gli ioni, più forte è il legame.</p>
<p><b>Proprietà</b> dei composti ionici:</p>
<ul>
<li>solidi cristallini, <b>duri ma fragili</b> (uno scorrimento di un piano affianca ioni uguali che si respingono e il cristallo si rompe);</li>
<li>alta temperatura di fusione (NaCl 801 °C, MgO circa 2850 °C);</li>
<li><b>non conducono</b> allo stato solido (ioni bloccati), ma conducono <b>fusi o in soluzione</b>, perché gli ioni sono liberi di muoversi;</li>
<li>spesso solubili in acqua, le cui molecole polari circondano gli ioni.</li>
</ul>`
    },
    {
      type: "example",
      title: "Scrivere la formula di un composto ionico",
      html: `<p>Si bilanciano le cariche in modo che il totale sia zero. <b>Ossido di alluminio</b>: Al forma Al³⁺, l'ossigeno O²⁻. Il minimo comune multiplo di 3 e 2 è 6: servono 2 Al³⁺ (+6) e 3 O²⁻ (−6), quindi <b>Al₂O₃</b>. <b>Cloruro di calcio</b>: Ca²⁺ e Cl⁻, quindi CaCl₂. Una scorciatoia: si scambiano le cariche come pedici (Al³⁺ O²⁻ → Al₂O₃).</p>`
    },
    {
      type: "text",
      title: "Il legame covalente",
      html: `<p>Tra due <b>non metalli</b> nessuno dei due riesce a strappare l'elettrone all'altro: li <b>condividono</b>. Una coppia condivisa è un <b>legame singolo</b>; due coppie un <b>doppio</b>, tre un <b>triplo</b>. Nelle strutture di Lewis la coppia di legame si disegna con un trattino, le coppie non condivise (<b>coppie solitarie</b>) con due punti.</p>
<p><b>Come si disegna una struttura di Lewis</b>:</p>
<ol>
<li>Si somma il numero degli elettroni di valenza di tutti gli atomi (aggiungi uno per ogni carica negativa, togli uno per ogni positiva).</li>
<li>Si mette l'atomo meno elettronegativo al centro (mai l'idrogeno) e si collegano gli altri con legami singoli.</li>
<li>Si distribuiscono gli elettroni rimasti come coppie solitarie, prima sugli atomi esterni, fino a completare l'ottetto.</li>
<li>Se al centro mancano elettroni, si trasformano coppie solitarie in legami doppi o tripli.</li>
</ol>
<p><b>Esempi.</b> H₂: H–H. Cl₂: Cl–Cl con tre coppie solitarie per atomo. O₂: O=O (doppio). N₂: N≡N (triplo; è un legame fortissimo, 945 kJ/mol: ecco perché l'azoto atmosferico è così poco reattivo). CO₂: O=C=O. H₂O: H–O–H con due coppie solitarie sull'ossigeno. NH₃: tre legami N–H e una coppia solitaria sull'azoto.</p>
<p>Più legami ci sono fra due atomi, <b>più il legame è corto e forte</b>. Per esempio C–C 154 pm e circa 347 kJ/mol, C=C 134 pm e 614 kJ/mol, C≡C 120 pm e 839 kJ/mol.</p>
<p>Nel <b>legame dativo</b> (o di coordinazione) entrambi gli elettroni della coppia vengono dallo stesso atomo: nello ione ammonio NH₄⁺ la coppia solitaria dell'azoto di NH₃ si lega a un H⁺. Una volta formato, è identico agli altri tre legami N–H.</p>
<p>A livello orbitale, il legame covalente è la <b>sovrapposizione</b> di orbitali atomici: un legame <b>σ</b> è la sovrapposizione frontale lungo l'asse (il primo legame è sempre σ), un legame <b>π</b> è la sovrapposizione laterale di orbitali p (il secondo e il terzo legame sono π). Un doppio legame è quindi σ + π, un triplo σ + 2π.</p>`
    },
    {
      type: "svg",
      title: "Strutture di Lewis",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="22" font-weight="bold" fill="#1f2937" text-anchor="middle">
<text x="80" y="90">H</text><text x="140" y="90">H</text><line x1="92" y1="82" x2="128" y2="82" stroke="#1f2937" stroke-width="3"/>
<text x="110" y="130" font-size="15" font-weight="normal" fill="#475569">H₂ (singolo)</text>
<text x="260" y="90">O</text><text x="320" y="90">O</text>
<line x1="274" y1="78" x2="306" y2="78" stroke="#1f2937" stroke-width="3"/><line x1="274" y1="87" x2="306" y2="87" stroke="#1f2937" stroke-width="3"/>
<text x="290" y="130" font-size="15" font-weight="normal" fill="#475569">O₂ (doppio)</text>
<text x="450" y="90">N</text><text x="510" y="90">N</text>
<line x1="464" y1="74" x2="496" y2="74" stroke="#1f2937" stroke-width="3"/><line x1="464" y1="82" x2="496" y2="82" stroke="#1f2937" stroke-width="3"/><line x1="464" y1="90" x2="496" y2="90" stroke="#1f2937" stroke-width="3"/>
<text x="480" y="130" font-size="15" font-weight="normal" fill="#475569">N₂ (triplo)</text>
<text x="110" y="230">H</text><text x="160" y="205" fill="#dc2626">O</text><text x="210" y="230">H</text>
<line x1="124" y1="222" x2="148" y2="208" stroke="#1f2937" stroke-width="3"/><line x1="172" y1="208" x2="196" y2="222" stroke="#1f2937" stroke-width="3"/>
<circle cx="150" cy="185" r="3" fill="#2563eb"/><circle cx="162" cy="185" r="3" fill="#2563eb"/><circle cx="170" cy="185" r="3" fill="#2563eb"/>
<text x="160" y="268" font-size="15" font-weight="normal" fill="#475569">H₂O: 2 coppie solitarie</text>
<text x="360" y="230">O</text><text x="430" y="230" fill="#dc2626">C</text><text x="500" y="230">O</text>
<line x1="376" y1="218" x2="414" y2="218" stroke="#1f2937" stroke-width="3"/><line x1="376" y1="227" x2="414" y2="227" stroke="#1f2937" stroke-width="3"/>
<line x1="446" y1="218" x2="484" y2="218" stroke="#1f2937" stroke-width="3"/><line x1="446" y1="227" x2="484" y2="227" stroke="#1f2937" stroke-width="3"/>
<text x="430" y="268" font-size="15" font-weight="normal" fill="#475569">CO₂: due doppi legami</text>
</g>
<text x="300" y="30" font-size="16" fill="#0369a1" text-anchor="middle" font-weight="bold">Ogni trattino è una coppia di elettroni condivisa</text>
</svg>`,
      caption: "Le coppie solitarie sull'ossigeno (punti blu) non partecipano ai legami ma determinano la forma della molecola."
    },
    {
      type: "quiz",
      title: "Mini-quiz: ionico e covalente",
      questions: [
        { type: "mc", q: "Quale formula è corretta per il composto tra Mg²⁺ e Cl⁻?", options: ["MgCl₂", "Mg₂Cl", "MgCl", "Mg₂Cl₂"], answer: 0, explain: "Servono due Cl⁻ (−2) per bilanciare un Mg²⁺ (+2): MgCl₂." },
        { type: "tf", q: "Il cloruro di sodio solido conduce bene la corrente elettrica.", answer: false, explain: "Allo stato solido gli ioni sono bloccati nel reticolo; conduce solo fuso o in soluzione." },
        { type: "num", q: "Quante coppie di elettroni condividono i due atomi di azoto in N₂?", answer: 3, explain: "N₂ ha un legame triplo: tre coppie condivise, 1 σ e 2 π." }
      ]
    },
    {
      type: "text",
      title: "Il legame metallico",
      html: `<p>In un metallo gli atomi hanno pochi elettroni di valenza e bassa energia di ionizzazione. Nel solido gli elettroni di valenza <b>non appartengono a un atomo</b> ma sono <b>delocalizzati</b>: formano un "mare" di elettroni che si muove tra i cationi disposti in un reticolo regolare. È un legame forte e non direzionale.</p>
<p>Questo modello spiega le proprietà dei metalli:</p>
<ul>
<li><b>conducibilità elettrica e termica</b> elevate: gli elettroni sono liberi di muoversi;</li>
<li><b>lucentezza</b>: gli elettroni riflettono la luce;</li>
<li><b>malleabilità e duttilità</b>: i piani di cationi scorrono l'uno sull'altro senza che il legame si rompa, perché il mare di elettroni si adatta (a differenza dei cristalli ionici);</li>
<li>temperature di fusione molto varie: bassa per il mercurio (liquido a −39 °C), altissima per il tungsteno (circa 3420 °C).</li>
</ul>
<p>Le <b>leghe</b> sono miscugli di metalli (o metalli con piccole quantità di non metalli) con proprietà migliorate: l'<b>acciaio</b> è ferro con poco carbonio, il <b>bronzo</b> è rame e stagno, l'<b>ottone</b> rame e zinco.</p>`
    },
    {
      type: "text",
      title: "La forma delle molecole: il modello VSEPR",
      html: `<p>La formula di Lewis non dice come sono disposti gli atomi nello spazio. Il modello <b>VSEPR</b> (<i>Valence Shell Electron Pair Repulsion</i>, Gillespie e Nyholm, 1957) parte da un'idea semplice: le <b>coppie di elettroni</b> attorno all'atomo centrale (di legame e solitarie) si respingono e si dispongono il più lontano possibile. Un legame multiplo conta come una sola "nuvola".</p>
<table>
<tr><th>Nuvole attorno al centro</th><th>Coppie solitarie</th><th>Forma</th><th>Angolo</th><th>Esempio</th></tr>
<tr><td>2</td><td>0</td><td>lineare</td><td>180°</td><td>CO₂, BeCl₂</td></tr>
<tr><td>3</td><td>0</td><td>trigonale planare</td><td>120°</td><td>BF₃, SO₃</td></tr>
<tr><td>4</td><td>0</td><td>tetraedrica</td><td>109,5°</td><td>CH₄</td></tr>
<tr><td>4</td><td>1</td><td>piramidale trigonale</td><td>circa 107°</td><td>NH₃</td></tr>
<tr><td>4</td><td>2</td><td>angolata (a V)</td><td>circa 104,5°</td><td>H₂O</td></tr>
<tr><td>5</td><td>0</td><td>bipiramide trigonale</td><td>90° e 120°</td><td>PCl₅</td></tr>
<tr><td>6</td><td>0</td><td>ottaedrica</td><td>90°</td><td>SF₆</td></tr>
</table>
<p>Le coppie solitarie occupano più spazio di quelle di legame: per questo gli angoli di NH₃ (107°) e H₂O (104,5°) sono un po' minori di quello perfetto del tetraedro (109,5°). La geometria si descrive guardando solo gli <b>atomi</b>, non le coppie solitarie: l'acqua, con quattro nuvole attorno all'ossigeno, ha forma "angolata", non tetraedrica.</p>
<p>Gli orbitali ibridi (<b>sp³</b>, <b>sp²</b>, <b>sp</b>) sono lo strumento con cui la teoria del legame di valenza spiega queste geometrie: nel metano il carbonio mescola un 2s e tre 2p in quattro orbitali sp³ identici, diretti verso i vertici di un tetraedro.</p>`
    },
    {
      type: "svg",
      title: "Quattro geometrie fondamentali",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">
<g>
<line x1="30" y1="120" x2="120" y2="120" stroke="#64748b" stroke-width="4"/>
<circle cx="75" cy="120" r="14" fill="#f59e0b"/><circle cx="30" cy="120" r="10" fill="#ef4444"/><circle cx="120" cy="120" r="10" fill="#ef4444"/>
<text x="75" y="175">Lineare</text><text x="75" y="198" font-weight="normal">180° (CO₂)</text>
</g>
<g>
<line x1="225" y1="120" x2="225" y2="75" stroke="#64748b" stroke-width="4"/><line x1="225" y1="120" x2="186" y2="143" stroke="#64748b" stroke-width="4"/><line x1="225" y1="120" x2="264" y2="143" stroke="#64748b" stroke-width="4"/>
<circle cx="225" cy="120" r="14" fill="#f59e0b"/><circle cx="225" cy="75" r="10" fill="#ef4444"/><circle cx="186" cy="143" r="10" fill="#ef4444"/><circle cx="264" cy="143" r="10" fill="#ef4444"/>
<text x="225" y="175">Trigonale</text><text x="225" y="198" font-weight="normal">120° (BF₃)</text>
</g>
<g>
<line x1="375" y1="120" x2="375" y2="68" stroke="#64748b" stroke-width="4"/><line x1="375" y1="120" x2="335" y2="150" stroke="#64748b" stroke-width="4"/><line x1="375" y1="120" x2="420" y2="148" stroke="#64748b" stroke-width="4"/><line x1="375" y1="120" x2="395" y2="95" stroke="#94a3b8" stroke-width="4" stroke-dasharray="4 3"/>
<circle cx="375" cy="120" r="14" fill="#f59e0b"/><circle cx="375" cy="68" r="10" fill="#ef4444"/><circle cx="335" cy="150" r="10" fill="#ef4444"/><circle cx="420" cy="148" r="10" fill="#ef4444"/><circle cx="395" cy="95" r="9" fill="#ef4444"/>
<text x="375" y="175">Tetraedrica</text><text x="375" y="198" font-weight="normal">109,5° (CH₄)</text>
</g>
<g>
<line x1="525" y1="95" x2="555" y2="140" stroke="#64748b" stroke-width="4"/><line x1="525" y1="95" x2="490" y2="140" stroke="#64748b" stroke-width="4"/>
<circle cx="525" cy="95" r="14" fill="#f59e0b"/><circle cx="555" cy="140" r="10" fill="#ef4444"/><circle cx="490" cy="140" r="10" fill="#ef4444"/>
<path d="M505 68 q12 -14 24 0" stroke="#2563eb" stroke-width="3" fill="none"/>
<text x="525" y="175">Angolata</text><text x="525" y="198" font-weight="normal">104,5° (H₂O)</text>
</g>
</g>
<text x="300" y="250" font-size="15" fill="#475569" text-anchor="middle">Arancione = atomo centrale, rosso = atomi legati, arco blu = coppie solitarie</text>
<text x="300" y="30" font-size="16" fill="#0369a1" text-anchor="middle" font-weight="bold">Le nuvole elettroniche si allontanano il più possibile</text>
</svg>`,
      caption: "Il numero di nuvole elettroniche attorno all'atomo centrale decide la geometria."
    },
    {
      type: "3d",
      title: "Il metano in 3D",
      scene: "molecule",
      options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#475569", label: "C" }, { x: 0.65, y: 0.65, z: 0.65, r: 0.3, color: "#e2e8f0", label: "H" }, { x: 0.65, y: -0.65, z: -0.65, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.65, y: 0.65, z: -0.65, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.65, y: -0.65, z: 0.65, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]] },
      caption: "CH₄: quattro legami identici diretti verso i vertici di un tetraedro regolare (109,5°)."
    },
    {
      type: "example",
      title: "Prevedere la forma di SO₂ e di BF₃",
      html: `<p><b>BF₃</b>: B ha 3 elettroni di valenza, ogni F ne ha 7: tre legami singoli B–F, tre nuvole attorno al boro e nessuna coppia solitaria. Forma <b>trigonale planare</b>, 120°, molecola apolare (è un'eccezione all'ottetto: il boro ha solo 6 elettroni).</p>
<p><b>SO₂</b>: S (6) + 2 O (6 + 6) = 18 elettroni. Si disegna O=S–O (o con un legame doppio e uno singolo che risuonano), con una coppia solitaria sullo zolfo. Sono tre nuvole (due legami e una coppia solitaria): la molecola è <b>angolata</b> con angolo di circa 119°, ed è polare.</p>`
    },
    {
      type: "text",
      title: "Molecole polari e forze intermolecolari",
      html: `<p>Una molecola è <b>polare</b> se ha un <b>dipolo elettrico</b> complessivo, cioè se i dipoli dei suoi legami non si annullano. Conta la forma:</p>
<ul>
<li><b>CO₂</b>: i due legami C=O sono polari ma opposti (lineare): la molecola è <b>apolare</b>.</li>
<li><b>H₂O</b>: i legami O–H sono polari e disposti ad angolo: i dipoli si sommano, la molecola è <b>polare</b>.</li>
<li><b>CCl₄</b>: quattro legami polari in un tetraedro simmetrico: apolare. <b>CHCl₃</b> (cloroformio): simmetria rotta, polare.</li>
</ul>
<p>Tra le molecole agiscono forze molto più deboli dei legami (<b>forze intermolecolari</b>), che decidono stato fisico, ebollizione e solubilità:</p>
<ul>
<li><b>forze di London</b> (dispersione): presenti in tutte le molecole, crescono con la massa e la superficie; sono le sole nelle molecole apolari;</li>
<li><b>dipolo-dipolo</b>: tra molecole polari;</li>
<li><b>legame a idrogeno</b>: H legato a F, O o N attratto da una coppia solitaria di un altro F, O, N. È la più forte e spiega perché l'acqua (massa 18) bolle a 100 °C mentre H₂S (massa 34) bolle a −60 °C.</li>
</ul>
<p>Regola pratica: <b>il simile scioglie il simile</b>. Sostanze polari e ioniche si sciolgono in solventi polari (acqua), le apolari (olio, benzina) in solventi apolari.</p>`
    },
    {
      type: "remember",
      title: "Riassunto dei tre legami",
      html: `<table>
<tr><th></th><th>Ionico</th><th>Covalente</th><th>Metallico</th></tr>
<tr><td>Tra</td><td>metallo + non metallo</td><td>non metalli</td><td>metalli</td></tr>
<tr><td>Elettroni</td><td>trasferiti</td><td>condivisi a coppie</td><td>delocalizzati</td></tr>
<tr><td>Struttura</td><td>reticolo di ioni</td><td>molecole (o reticoli covalenti: diamante, SiO₂)</td><td>reticolo di cationi</td></tr>
<tr><td>Conducibilità</td><td>solo fuso/disciolto</td><td>di solito isolanti</td><td>sempre, da solidi</td></tr>
<tr><td>Fusione</td><td>alta</td><td>bassa (molecole) o altissima (reticoli)</td><td>variabile</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: forma e polarità",
      questions: [
        { type: "mc", q: "Qual è la forma della molecola di acqua?", options: ["Angolata", "Lineare", "Tetraedrica", "Trigonale planare"], answer: 0, explain: "L'ossigeno ha due coppie di legame e due solitarie: quattro nuvole, ma la forma degli atomi è a V." },
        { type: "tf", q: "La molecola di CO₂ è apolare anche se i legami C=O sono polari.", answer: true, explain: "È lineare: i due dipoli sono uguali e opposti e si annullano." },
        { type: "num", q: "Quali sono gli angoli di legame ideali in una molecola tetraedrica? (in gradi, un decimale)", answer: 109.5, tol: 0.1, unit: "°", explain: "Per quattro nuvole identiche l'angolo è 109,5°." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i legami",
      intro: "Immagini e modelli diversi per le stesse idee.",
      tabs: [
        { label: "🎈 I palloncini", html: "<p>Lega a un punto quattro palloncini gonfiati: si dispongono da soli ai vertici di un tetraedro, perché si respingono e occupano tutto lo spazio. Con tre palloncini formano un triangolo piatto, con due si mettono uno di fronte all'altro. È esattamente il VSEPR: i palloncini sono le nuvole di elettroni. Un palloncino \"grosso\" (coppia solitaria, più voluminosa) spinge via gli altri: gli angoli si chiudono un po'. Dei quattro palloncini di H₂O, due sono coppie solitarie: guardando solo gli atomi vedi una V.</p>" },
        { label: "🤝 Il tiro alla fune", html: "<p>Due atomi sono due giocatori che tirano una corda (la coppia di elettroni). Se hanno la stessa forza (ΔEN = 0), la corda resta al centro: legame covalente apolare. Se uno è un po' più forte, la corda si sposta verso di lui: legame polare. Se uno è molto più forte, gli porta via la corda: legame ionico. Questa immagine è la stessa dello spettro colorato della lezione, e spiega perché non c'è un confine netto.</p>" },
        { label: "💧 Ammonia in 3D", html: "<p>L'ammoniaca ha quattro nuvole attorno all'azoto, ma una è una coppia solitaria: i tre atomi di idrogeno formano la base di una piramide e la coppia solitaria è sul vertice opposto. Gli angoli H–N–H sono circa 107°. Ruota la molecola e osserva come è una piramide, non un triangolo piatto.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0.35, z: 0, r: 0.45, color: "#3b82f6", label: "N" }, { x: 0.9, y: -0.3, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.45, y: -0.3, z: 0.78, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.45, y: -0.3, z: -0.78, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2], [0, 3]] } },
        { label: "🧪 Laboratorio virtuale", html: "<p>Nel laboratorio virtuale puoi far reagire sostanze diverse e osservare come cambiano gli stati e le formule: sodio e cloro formano un solido ionico, idrogeno e ossigeno una molecola.</p>", widget: "chemLab", options: {} }
      ]
    },
    {
      type: "curiosity",
      title: "Diamante e grafite: stesso atomo, legami diversi",
      html: `<p>Il <b>diamante</b> e la <b>grafite</b> sono entrambi carbonio puro. Nel diamante ogni C forma 4 legami σ tetraedrici (sp³) con quattro vicini: un reticolo covalente rigidissimo, durissimo, isolante, con temperatura di fusione altissima. Nella grafite ogni C ha 3 legami in un piano (sp²) e un elettrone p delocalizzato: gli strati scivolano uno sull'altro (la mina della matita) e conducono la corrente. Nel 2004 Geim e Novoselov isolarono un singolo strato, il <b>grafene</b>, e vinsero il Nobel per la fisica nel 2010.</p>`
    },
    {
      type: "curiosity",
      title: "Il sale e l'acqua: perché si scioglie",
      html: `<p>Quando versi il sale in acqua, le molecole polari si orientano con l'ossigeno (δ⁻) verso i Na⁺ e gli idrogeni (δ⁺) verso i Cl⁻, strappando gli ioni dal cristallo e circondandoli (<b>idratazione</b>). Se l'acqua fosse apolare, come l'olio, il sale non si scioglierebbe. Anche per questo la stessa molecola d'acqua, piegata e polare, è alla base di quasi tutta la chimica della vita.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: dal legame alle proprietà",
      nodes: [
        { id: "ottetto", label: "Regola dell'ottetto", x: 20, y: 12, color: "#2563eb", html: "Gli atomi tendono ad avere otto elettroni esterni.", why: "Lewis e Kossel (1916) partirono dall'inerzia dei gas nobili: la loro configurazione s²p⁶ è un minimo di energia. È una regola empirica con eccezioni, ma spiega gran parte della chimica dei gruppi principali." },
        { id: "en", label: "Elettronegatività", x: 80, y: 12, color: "#f59e0b", html: "Lo strumento per scegliere tra ionico e covalente.", why: "Pauling (1932) la definì confrontando le energie di legame: il legame tra atomi diversi è più forte del previsto per la parte di carattere ionico; la differenza dà la scala di EN." },
        { id: "ion", label: "Legame ionico", x: 15, y: 55, color: "#dc2626", html: "Trasferimento di elettroni e attrazione tra ioni.", why: "Spiega perché il sale conduce solo fuso o sciolto: la corrente elettrica è un moto di ioni, non di elettroni. L'idea di ioni fu proposta da Arrhenius (1884) studiando le soluzioni." },
        { id: "cov", label: "Legame covalente", x: 50, y: 55, color: "#16a34a", html: "Condivisione di coppie di elettroni; σ e π.", why: "Con la meccanica quantistica Heitler e London (1927) mostrarono che la condivisione abbassa l'energia perché la funzione d'onda dei due elettroni si sovrappone tra i nuclei." },
        { id: "met", label: "Legame metallico", x: 85, y: 55, color: "#a855f7", html: "Mare di elettroni delocalizzati.", why: "La delocalizzazione spiega le proprietà dei metalli; con la teoria delle bande (Bloch, Wilson) si capisce perché alcuni solidi siano conduttori, altri isolanti, altri semiconduttori." },
        { id: "vsepr", label: "Geometria VSEPR", x: 35, y: 90, color: "#0ea5e9", html: "La forma è decisa dalla repulsione delle nuvole elettroniche.", why: "Sidgwick e Powell (1940) e Gillespie e Nyholm (1957) osservarono che le forme delle molecole si prevedono contando le coppie di elettroni intorno all'atomo centrale." },
        { id: "prop", label: "Polarità e forze", x: 70, y: 90, color: "#ef4444", html: "Dipoli, forze di London e legami a idrogeno.", why: "Decidono la solubilità e le temperature di ebollizione: il legame a idrogeno spiega perché l'acqua è liquida in condizioni in cui molecole simili sono gas." }
      ],
      edges: [["ottetto", "ion", "porta al"], ["ottetto", "cov", "porta al"], ["en", "ion", "se ΔEN è alta"], ["en", "cov", "se ΔEN è bassa"], ["cov", "vsepr", "ha una"], ["vsepr", "prop", "determina la"], ["met", "prop", "dà le"]]
    }
  ],
  glossary: [
    { t: "Regola dell'ottetto", d: "Tendenza degli atomi a raggiungere otto elettroni nel guscio esterno." },
    { t: "Struttura di Lewis", d: "Rappresentazione di una molecola con trattini per le coppie di legame e punti per le coppie solitarie." },
    { t: "Legame ionico", d: "Attrazione elettrostatica tra ioni di carica opposta, formati per trasferimento di elettroni." },
    { t: "Legame covalente", d: "Legame dovuto alla condivisione di una o più coppie di elettroni." },
    { t: "Legame polare", d: "Legame covalente in cui gli elettroni sono spostati verso l'atomo più elettronegativo." },
    { t: "Legame metallico", d: "Legame dovuto a elettroni di valenza delocalizzati fra cationi metallici." },
    { t: "Legame σ e π", d: "σ: sovrapposizione frontale lungo l'asse; π: sovrapposizione laterale di orbitali p." },
    { t: "VSEPR", d: "Modello che prevede la forma delle molecole dalla repulsione tra coppie di elettroni di valenza." },
    { t: "Coppia solitaria", d: "Coppia di elettroni di valenza non impegnata in un legame." },
    { t: "Legame a idrogeno", d: "Forza intermolecolare tra un H legato a F, O o N e una coppia solitaria di un altro F, O o N." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale legame si forma tra sodio e cloro?", options: ["Ionico", "Covalente apolare", "Metallico", "Covalente dativo"], answer: 0, explain: "ΔEN = 3,16 − 0,93 = 2,23: il sodio cede un elettrone al cloro, formando Na⁺ e Cl⁻." },
      { type: "mc", q: "Quale sostanza conduce la corrente allo stato solido?", options: ["Rame", "NaCl", "Diamante", "Zucchero"], answer: 0, explain: "I metalli hanno elettroni delocalizzati; gli ionici solidi e i solidi covalenti molecolari non conducono." },
      { type: "num", q: "Quante coppie di elettroni sono condivise nel legame tra gli atomi di O in O₂?", answer: 2, explain: "O₂ ha un doppio legame: due coppie condivise (1 σ + 1 π)." },
      { type: "mc", q: "Qual è la formula del composto tra Al³⁺ e O²⁻?", options: ["Al₂O₃", "AlO", "Al₃O₂", "AlO₃"], answer: 0, explain: "Il m.c.m. tra 3 e 2 è 6: 2 Al³⁺ (+6) e 3 O²⁻ (−6)." },
      { type: "tf", q: "Il legame H–Cl è covalente polare, con carica parziale negativa sul cloro.", answer: true, explain: "ΔEN = 0,96: gli elettroni sono spostati verso il cloro, più elettronegativo." },
      { type: "mc", q: "Quale forma ha NH₃ secondo il modello VSEPR?", options: ["Piramidale trigonale", "Trigonale planare", "Tetraedrica", "Lineare"], answer: 0, explain: "Tre legami N–H e una coppia solitaria: quattro nuvole, forma a piramide con angoli di circa 107°." },
      { type: "mc", q: "Perché la molecola di CO₂ è apolare nonostante abbia legami polari?", options: ["È lineare: i dipoli si annullano", "Perché il carbonio è metallico", "Perché ha legami ionici", "Perché ha coppie solitarie"], answer: 0, explain: "I due momenti di dipolo C=O sono uguali e opposti." },
      { type: "mc", q: "Perché l'acqua bolle a 100 °C, molto più di H₂S?", options: ["Per i legami a idrogeno tra le molecole", "Perché ha massa maggiore", "Perché è ionica", "Perché ha legami doppi"], answer: 0, explain: "L'ossigeno è molto elettronegativo e piccolo: i legami a idrogeno tengono unite le molecole." },
      { type: "tf", q: "In un metallo, applicando una forza, i piani di cationi possono scorrere senza rompere il legame.", answer: true, explain: "Il mare di elettroni si adatta: i metalli sono malleabili e duttili, a differenza dei cristalli ionici, che sono fragili." },
      { type: "order", q: "Ordina per forza crescente del legame carbonio-carbonio.", items: ["C–C", "C=C", "C≡C"], explain: "Il legame triplo è il più forte e il più corto: 347 < 614 < 839 kJ/mol." }
    ]
  }
});

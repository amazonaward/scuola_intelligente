TOPIC('it', {
  id: "l5-sci-chimica-organica",
  title: "La chimica organica",
  intro: "Plastica, benzina, farmaci, profumi, zuccheri, DNA: quasi tutto ciò che usiamo e che siamo è fatto di <b>composti del carbonio</b>. Se ne conoscono molti milioni, più di tutti i composti degli altri elementi messi insieme. Come può un solo elemento dare tanta varietà? Perché il carbonio forma <b>quattro legami</b>, si lega a se stesso in catene lunghe, ramificate e ad anello, e può unirsi con legami semplici, doppi e tripli. In questa lezione scopriamo come si comporta l'atomo di carbonio (ibridazione), come si nominano e si disegnano <b>alcani, alcheni, alchini e aromatici</b>, e perché la stessa formula può nascondere molecole diverse: l'<b>isomeria</b>.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Che cos'è la chimica organica",
      html: `<p>La <b>chimica organica</b> studia i composti del carbonio (esclusi pochi casi semplici, come CO, CO₂, carbonati e cianuri, di solito trattati con l'inorganica). Il nome ha una storia: fino all'Ottocento si credeva che i composti \"organici\", prodotti dagli organismi viventi, richiedessero una misteriosa \"forza vitale\" e non si potessero fare in laboratorio (<b>vitalismo</b>). Nel <b>1828</b> il chimico tedesco <b>Friedrich Wöhler</b> scaldò il cianato di ammonio, una sostanza inorganica, e ottenne <b>urea</b>, un composto presente nell'urina: la barriera tra \"vivo\" e \"non vivo\" cadde.</p>
<p>Ogni molecola organica ha uno <b>scheletro di carbonio</b> (catena o anello) a cui sono legati soprattutto <b>idrogeno</b>, e poi ossigeno, azoto, zolfo, alogeni. I composti fatti solo di C e H sono gli <b>idrocarburi</b>: il punto di partenza di tutto il resto. Si dividono in:</p>
<ul>
<li><b>alifatici</b>: a catena aperta (<b>alcani</b>, <b>alcheni</b>, <b>alchini</b>) o ciclici (<b>cicloalcani</b>);</li>
<li><b>aromatici</b>: derivati del <b>benzene</b>, con un anello particolarmente stabile.</li>
</ul>
<p>Gli idrocarburi sono la base di <b>petrolio e gas naturale</b>, da cui otteniamo carburanti, plastiche, solventi e lubrificanti.</p>`
    },
    {
      type: "text",
      title: "Il carbonio: quattro legami e tre geometrie (ibridazione)",
      html: `<p>Il carbonio (Z = 6) ha configurazione 1s² 2s² 2p². Con soli due elettroni spaiati dovrebbe fare due legami, invece ne fa <b>quattro</b>. Il modello dell'<b>ibridazione</b> spiega perché: gli orbitali 2s e 2p si \"mescolano\" in orbitali ibridi equivalenti, che si dispongono nello spazio più lontano possibile per minimizzare la repulsione tra elettroni.</p>
<table>
<tr><th>Ibridazione</th><th>Orbitali ibridi</th><th>Geometria e angolo</th><th>Legami tipici</th><th>Esempio</th></tr>
<tr><td><b>sp³</b></td><td>4</td><td>tetraedrica, 109,5°</td><td>4 legami σ (semplici)</td><td>metano CH₄</td></tr>
<tr><td><b>sp²</b></td><td>3 (+1 orbitale p puro)</td><td>trigonale planare, 120°</td><td>1 doppio legame (σ + π)</td><td>etene C₂H₄</td></tr>
<tr><td><b>sp</b></td><td>2 (+2 orbitali p puri)</td><td>lineare, 180°</td><td>1 triplo legame (σ + 2π) o 2 doppi</td><td>etino C₂H₂</td></tr>
</table>
<p>Il legame <b>σ</b> (sigma) nasce dalla sovrapposizione frontale di orbitali lungo l'asse del legame: permette la <b>rotazione</b> degli atomi attorno ad esso. Il legame <b>π</b> (pi greco) nasce dalla sovrapposizione laterale degli orbitali p: è più debole, più reattivo e <b>impedisce la rotazione</b>. Un doppio legame è quindi \"rigido\", e questo avrà conseguenze importanti per l'isomeria.</p>`
    },
    {
      type: "3d",
      title: "La molecola del metano in 3D",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.5, color: "#334155", label: "C" },
          { x: 0.7, y: 0.7, z: 0.7, r: 0.3, color: "#e2e8f0", label: "H" },
          { x: 0.7, y: -0.7, z: -0.7, r: 0.3, color: "#e2e8f0", label: "H" },
          { x: -0.7, y: 0.7, z: -0.7, r: 0.3, color: "#e2e8f0", label: "H" },
          { x: -0.7, y: -0.7, z: 0.7, r: 0.3, color: "#e2e8f0", label: "H" }
        ],
        bonds: [[0, 1], [0, 2], [0, 3], [0, 4]]
      },
      caption: "Ruota il metano: i quattro idrogeni occupano i vertici di un tetraedro e gli angoli H-C-H misurano 109,5°. Non è una molecola \"piatta\" come nei disegni sul foglio."
    },
    {
      type: "text",
      title: "Gli alcani: gli idrocarburi saturi",
      html: `<p>Gli <b>alcani</b> contengono solo legami semplici C-C e C-H (sono <b>saturi</b>, cioè con il massimo numero di idrogeni possibile). La formula generale è <b>CₙH₂ₙ₊₂</b>. Il nome si forma con un prefisso che indica il numero di carboni e il suffisso <b>-ano</b>:</p>
<table>
<tr><th>C</th><th>Nome</th><th>Formula</th><th>C</th><th>Nome</th><th>Formula</th></tr>
<tr><td>1</td><td>metano</td><td>CH₄</td><td>6</td><td>esano</td><td>C₆H₁₄</td></tr>
<tr><td>2</td><td>etano</td><td>C₂H₆</td><td>7</td><td>eptano</td><td>C₇H₁₆</td></tr>
<tr><td>3</td><td>propano</td><td>C₃H₈</td><td>8</td><td>ottano</td><td>C₈H₁₈</td></tr>
<tr><td>4</td><td>butano</td><td>C₄H₁₀</td><td>9</td><td>nonano</td><td>C₉H₂₀</td></tr>
<tr><td>5</td><td>pentano</td><td>C₅H₁₂</td><td>10</td><td>decano</td><td>C₁₀H₂₂</td></tr>
</table>
<p>I primi quattro nomi (met-, et-, prop-, but-) sono storici; dal quinto si usano i prefissi numerali greci. Gli alcani sono <b>apolari</b>: non si sciolgono in acqua (olio e acqua non si mescolano), sono meno densi dell'acqua e il punto di ebollizione sale con la lunghezza della catena, perché aumentano le forze di London tra le molecole: metano −162 °C, propano −42 °C, pentano 36 °C. Per questo metano, propano e butano sono gas (il GPL è una miscela di propano e butano liquefatta sotto pressione), mentre benzina e gasolio sono liquidi e le paraffine delle candele sono solidi.</p>
<p>Sono poco reattivi (da cui il vecchio nome <i>paraffine</i>, \"poca affinità\"). Le reazioni principali sono:</p>
<ul>
<li><b>combustione</b>: CH₄ + 2 O₂ → CO₂ + 2 H₂O, molto esotermica (se l'ossigeno è scarso si forma anche CO, velenoso e inodore);</li>
<li><b>sostituzione radicalica</b> con alogeni alla luce: CH₄ + Cl₂ → CH₃Cl + HCl, in cui un H viene sostituito da un Cl.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Come si disegna una molecola: formule diverse, stessa sostanza",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="17" font-weight="bold" fill="#111827" text-anchor="middle">Il butano C₄H₁₀ in tre rappresentazioni</text>
<text x="100" y="62" font-size="15" font-weight="bold" fill="#7c3aed" text-anchor="middle">Formula molecolare</text>
<text x="100" y="110" font-size="22" font-weight="bold" fill="#111827" text-anchor="middle">C₄H₁₀</text>
<text x="100" y="140" font-size="14" fill="#475569" text-anchor="middle">solo il numero</text>
<text x="100" y="158" font-size="14" fill="#475569" text-anchor="middle">degli atomi</text>
<text x="300" y="62" font-size="15" font-weight="bold" fill="#0369a1" text-anchor="middle">Formula condensata</text>
<text x="300" y="110" font-size="22" font-weight="bold" fill="#111827" text-anchor="middle">CH₃-CH₂-CH₂-CH₃</text>
<text x="300" y="140" font-size="14" fill="#475569" text-anchor="middle">mostra come sono</text>
<text x="300" y="158" font-size="14" fill="#475569" text-anchor="middle">legati i carboni</text>
<text x="500" y="62" font-size="15" font-weight="bold" fill="#b45309" text-anchor="middle">Formula a scheletro</text>
<polyline points="430,130 460,100 490,130 520,100 550,130" fill="none" stroke="#b45309" stroke-width="4" stroke-linejoin="round"/>
<text x="500" y="165" font-size="14" fill="#475569" text-anchor="middle">ogni vertice è un C,</text>
<text x="500" y="183" font-size="14" fill="#475569" text-anchor="middle">gli H sono sottintesi</text>
<rect x="40" y="205" width="520" height="70" rx="10" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
<text x="300" y="232" font-size="16" fill="#111827" text-anchor="middle">Nello scheletro ogni vertice o estremità è un atomo di carbonio.</text>
<text x="300" y="256" font-size="16" fill="#111827" text-anchor="middle">Ogni C ha quattro legami: quelli che mancano sono con H.</text>
</svg>`,
      caption: "Imparare a leggere le formule a scheletro è la competenza più utile in chimica organica: tutte le molecole complesse (farmaci, vitamine) si disegnano così."
    },
    {
      type: "text",
      title: "La nomenclatura IUPAC degli alcani",
      html: `<p>Per dare un nome univoco a una molecola ramificata la <b>IUPAC</b> (Unione Internazionale di Chimica Pura e Applicata) usa questi passi:</p>
<ol>
<li>Trova la <b>catena principale</b>: la più lunga di atomi di carbonio. Il suo nome è la base.</li>
<li>Numera i carboni della catena partendo dall'estremità che dà i <b>numeri più bassi</b> alle ramificazioni.</li>
<li>Le ramificazioni sono <b>gruppi alchilici</b>: si nominano cambiando -ano in <b>-ile</b> (CH₃- metile, C₂H₅- etile, C₃H₇- propile).</li>
<li>Scrivi i sostituenti in <b>ordine alfabetico</b>, ciascuno preceduto dal numero del carbonio a cui è attaccato. Se ce ne sono più uguali, usa di-, tri-, tetra- (e il numero si ripete: 2,2-dimetil).</li>
</ol>
<p><b>Esempio.</b> La molecola CH₃-CH(CH₃)-CH₂-CH₃ ha una catena principale di 4 C (butano) con un metile sul carbonio 2: si chiama <b>2-metilbutano</b>. La molecola C(CH₃)₄ ha catena di 3 C (propano) con due metili sul carbonio 2: <b>2,2-dimetilpropano</b>.</p>
<p>Se si toglie un idrogeno a un alcano si ha il gruppo alchilico; per i <b>cicloalcani</b> (anelli chiusi, formula CₙH₂ₙ) si aggiunge il prefisso <b>ciclo-</b>: ciclopentano, cicloesano. Nei cicli piccoli (ciclopropano, 60° tra i legami invece di 109,5°) c'è una forte tensione d'anello e quindi grande reattività; il cicloesano invece si dispone nella conformazione a \"sedia\", pressoché priva di tensione.</p>`
    },
    {
      type: "example",
      title: "Il gas della cucina e la bombola del campeggio",
      html: `<p>Il gas di città è soprattutto <b>metano</b> (bolle a −162 °C): resta gassoso a temperatura ambiente e si distribuisce con i tubi. La bombola da campeggio contiene invece <b>butano</b> e/o propano: bollono a −0,5 °C e −42 °C, ma sotto pressione di qualche atmosfera diventano <b>liquidi</b> e occupano pochissimo spazio. Quando apri la valvola la pressione scende e il liquido evapora. Ecco perché d'inverno, in montagna, le bombole di solo butano \"non partono\": a temperature vicine allo zero il butano bolle appena e la pressione è troppo bassa.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: alcani e nomenclatura",
      questions: [
        { type: "mc", q: "Qual è la formula molecolare di un alcano con 8 atomi di carbonio?", options: ["C₈H₁₄", "C₈H₁₆", "C₈H₁₈", "C₈H₂₀"], answer: 2, explain: "Gli alcani seguono CₙH₂ₙ₊₂: con n = 8 si ha C₈H₁₈ (ottano)." },
        { type: "text", q: "Come si chiama l'alcano con 5 atomi di carbonio?", answer: ["pentano", "il pentano"], explain: "Il prefisso pent- indica cinque carboni e il suffisso -ano gli alcani: pentano, C₅H₁₂." },
        { type: "tf", q: "Il metano è solubile in acqua perché è una molecola piccola.", answer: false, explain: "Il metano è apolare e l'acqua è polare: le due sostanze non si mescolano. Anche le molecole piccole di alcani sono pochissimo solubili in acqua." },
        { type: "mc", q: "Che ibridazione ha il carbonio nel metano?", options: ["sp", "sp²", "sp³", "nessuna"], answer: 2, explain: "Quattro legami σ con geometria tetraedrica a 109,5°: ibridazione sp³." }
      ]
    },
    {
      type: "text",
      title: "Alcheni e alchini: gli insaturi",
      html: `<p>Gli <b>alcheni</b> hanno almeno un <b>doppio legame C=C</b> (formula CₙH₂ₙ, suffisso <b>-ene</b>); gli <b>alchini</b> hanno un <b>triplo legame</b> (CₙH₂ₙ₋₂, suffisso <b>-ino</b>). Sono <b>insaturi</b>: hanno meno idrogeni del massimo possibile. Nel nome si indica con un numero la <b>posizione</b> del legame multiplo, numerando la catena dall'estremità più vicina ad esso: <b>1-butene</b> (CH₂=CH-CH₂-CH₃) e <b>2-butene</b> (CH₃-CH=CH-CH₃) sono sostanze diverse.</p>
<p>Esempi importanti: l'<b>etene</b> (etilene), CH₂=CH₂, è l'ormone vegetale che fa maturare la frutta ed è la materia prima del polietilene; il <b>propene</b> dà il polipropilene; l'<b>etino</b> (acetilene), HC≡CH, bruciato con ossigeno nel cannello ossiacetilenico raggiunge temperature di circa 3000 °C e serve a saldare.</p>
<p>Il doppio legame è una zona ricca di elettroni π, accessibile a chi cerca elettroni: per questo le reazioni tipiche sono di <b>addizione</b>, in cui il legame π si rompe e due nuovi atomi si attaccano:</p>
<ul>
<li><b>idrogenazione</b> (con H₂ e un catalizzatore di Ni, Pd o Pt): alchene → alcano. È il principio con cui si trasformano gli oli vegetali insaturi in grassi più solidi (margarina);</li>
<li><b>alogenazione</b> (Br₂): CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br. L'acqua di bromo, arancione, si decolora: è un test per riconoscere gli insaturi;</li>
<li><b>addizione di HX o di H₂O</b>: CH₂=CH₂ + H₂O → CH₃CH₂OH (etanolo), con catalisi acida.</li>
</ul>
<p>Con alcheni asimmetrici vale la <b>regola di Markovnikov</b> (formulata da Vladimir Markovnikov nel 1869): nell'addizione di HX a un doppio legame, l'idrogeno si attacca al carbonio che ha già più idrogeni (\"a chi ha, sarà dato\") e X all'altro. Così propene + HBr dà soprattutto 2-bromopropano. Il motivo è che si forma più facilmente il carbocatione intermedio più stabile, quello sul carbonio più sostituito.</p>`
    },
    {
      type: "text",
      title: "Gli idrocarburi aromatici e il benzene",
      html: `<p>Il <b>benzene</b>, C₆H₆, isolato da Michael Faraday nel 1825, è un anello esagonale di sei carboni sp² con sei idrogeni. Il chimico <b>August Kekulé</b> nel <b>1865</b> propose la struttura ad anello con tre doppi legami alternati (si racconta che l'idea gli venne sognando un serpente che si morde la coda). Ma c'è un problema: il benzene non dà le reazioni di addizione tipiche degli alcheni e tutti i legami C-C hanno la <b>stessa lunghezza</b> (139 pm, intermedia tra semplice e doppio).</p>
<p>La spiegazione è la <b>delocalizzazione</b> (risonanza): i sei elettroni π non appartengono a tre doppi legami fissi, ma formano una nube sopra e sotto l'anello, condivisa da tutti i sei carboni. Questa struttura è molto <b>stabile</b>: il benzene preferisce la <b>sostituzione elettrofila aromatica</b> (un H viene sostituito da NO₂, Br, un gruppo alchilico...) che conserva l'aromaticità, a differenza delle addizioni che la distruggerebbero. Per rappresentarlo si disegna un esagono con un cerchio all'interno oppure con due strutture di Kekulé in risonanza.</p>
<p>Un composto è <b>aromatico</b> se è ciclico, planare, con tutti gli atomi sp² e con un numero di elettroni π pari a 4n + 2 (regola di Hückel: 6 per il benzene). Derivati comuni: il <b>toluene</b> (metilbenzene), il <b>fenolo</b> (idrossibenzene), l'<b>anilina</b>, il <b>naftalene</b> (due anelli fusi, nella naftalina contro le tarme). Molti aromatici, come il benzene stesso, sono <b>cancerogeni</b>: per questo non si usa più come solvente comune.</p>`
    },
    {
      type: "svg",
      title: "Le tre ibridazioni a confronto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g>
<text x="100" y="30" font-size="17" font-weight="bold" fill="#1d4ed8" text-anchor="middle">sp³ - metano</text>
<circle cx="100" cy="130" r="16" fill="#334155"/>
<line x1="100" y1="130" x2="100" y2="70" stroke="#334155" stroke-width="5"/>
<line x1="100" y1="130" x2="50" y2="165" stroke="#334155" stroke-width="5"/>
<line x1="100" y1="130" x2="150" y2="165" stroke="#334155" stroke-width="5"/>
<line x1="100" y1="130" x2="125" y2="100" stroke="#94a3b8" stroke-width="5" stroke-dasharray="6 5"/>
<text x="100" y="205" font-size="16" font-weight="bold" fill="#111827" text-anchor="middle">109,5°</text>
<text x="100" y="228" font-size="14" fill="#475569" text-anchor="middle">tetraedrica</text>
<text x="100" y="248" font-size="14" fill="#475569" text-anchor="middle">legami semplici</text>
</g>
<g>
<text x="300" y="30" font-size="17" font-weight="bold" fill="#047857" text-anchor="middle">sp² - etene</text>
<circle cx="300" cy="130" r="16" fill="#334155"/>
<line x1="300" y1="130" x2="300" y2="70" stroke="#334155" stroke-width="5"/>
<line x1="300" y1="130" x2="248" y2="160" stroke="#334155" stroke-width="5"/>
<line x1="300" y1="130" x2="352" y2="160" stroke="#334155" stroke-width="5"/>
<ellipse cx="300" cy="130" rx="14" ry="48" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="5 4" transform="rotate(90 300 130)"/>
<text x="300" y="205" font-size="16" font-weight="bold" fill="#111827" text-anchor="middle">120°</text>
<text x="300" y="228" font-size="14" fill="#475569" text-anchor="middle">trigonale planare</text>
<text x="300" y="248" font-size="14" fill="#475569" text-anchor="middle">doppio legame</text>
</g>
<g>
<text x="500" y="30" font-size="17" font-weight="bold" fill="#b91c1c" text-anchor="middle">sp - etino</text>
<circle cx="500" cy="130" r="16" fill="#334155"/>
<line x1="430" y1="130" x2="570" y2="130" stroke="#334155" stroke-width="5"/>
<text x="500" y="205" font-size="16" font-weight="bold" fill="#111827" text-anchor="middle">180°</text>
<text x="500" y="228" font-size="14" fill="#475569" text-anchor="middle">lineare</text>
<text x="500" y="248" font-size="14" fill="#475569" text-anchor="middle">triplo legame</text>
</g>
</svg>`,
      caption: "Più legami multipli, meno direzioni di legame: da 4 (sp³) a 3 (sp²) a 2 (sp). Schema semplificato: nel disegno il carbonio centrale rappresenta un atomo, i bastoncini le direzioni dei legami σ."
    },
    {
      type: "text",
      title: "L'isomeria: stessa formula, molecole diverse",
      html: `<p>Due composti sono <b>isomeri</b> se hanno la <b>stessa formula molecolare</b> ma struttura diversa, e quindi proprietà diverse. Il fenomeno spiega la ricchezza della chimica organica: C₄H₁₀ ha 2 isomeri, C₅H₁₂ ne ha 3, C₆H₁₄ ne ha 5, C₇H₁₆ ne ha 9 e C₂₀H₄₂ oltre 360 000. Si distinguono due grandi famiglie.</p>
<p><b>1. Isomeria strutturale (o di costituzione)</b>: cambia l'ordine in cui gli atomi sono legati.</p>
<ul>
<li><b>di catena</b>: scheletro diverso. Butano e 2-metilpropano (isobutano) sono entrambi C₄H₁₀;</li>
<li><b>di posizione</b>: stesso scheletro, ma il gruppo funzionale o il doppio legame è in un'altra posizione (1-butene e 2-butene; 1-propanolo e 2-propanolo);</li>
<li><b>di gruppo funzionale</b>: gruppi diversi. C₂H₆O può essere l'etanolo CH₃CH₂OH (un alcol, liquido) o l'etere dimetilico CH₃-O-CH₃ (un gas).</li>
</ul>
<p><b>2. Stereoisomeria</b>: gli atomi sono legati nello stesso ordine ma disposti diversamente nello spazio.</p>
<ul>
<li><b>geometrica (cis-trans)</b>: dovuta alla rigidità del doppio legame. Nel 2-butene i due metili possono stare dallo stesso lato (<b>cis</b>) o da lati opposti (<b>trans</b>) del doppio legame. Hanno punti di ebollizione e di fusione diversi. Esempio biologico: gli acidi grassi insaturi \"trans\" hanno catene dritte e si impacchettano come i grassi saturi; quelli \"cis\" sono piegati;</li>
<li><b>ottica (enantiomeria)</b>: dovuta alla <b>chiralità</b>. Un carbonio legato a quattro gruppi tutti diversi è un <b>centro stereogenico</b> (carbonio asimmetrico) e la molecola esiste in due forme che sono l'una l'immagine speculare dell'altra e non sono sovrapponibili, come la mano destra e la sinistra: gli <b>enantiomeri</b>.</li>
</ul>
<p>Gli enantiomeri hanno le stesse proprietà fisiche, ma <b>ruotano in senso opposto il piano della luce polarizzata</b> (uno è destrogiro (+), l'altro levogiro (−)) e, soprattutto, reagiscono in modo diverso con le molecole chirali, come quelle degli esseri viventi. Quasi tutti gli amminoacidi naturali sono della forma L e gli zuccheri naturali della forma D. Una miscela 50:50 dei due enantiomeri si chiama <b>racemo</b>.</p>`
    },
    {
      type: "curiosity",
      title: "La talidomide: quando la chiralità può essere tragica",
      html: `<p>La <b>talidomide</b> fu messa in commercio alla fine degli anni Cinquanta come sedativo e contro la nausea in gravidanza, come miscela dei due enantiomeri. Si è poi visto che una forma aveva l'effetto sedativo, mentre l'altra era associata a gravi <b>malformazioni</b> dei feti: migliaia di bambini nacquero con gravi difetti agli arti e il farmaco fu ritirato nel 1961-62. La vicenda mostra che due molecole l'una immagine speculare dell'altra possono comportarsi in modo molto diverso nel corpo. Da allora l'industria farmaceutica studia con grande attenzione ogni enantiomero. (Il problema è complicato dal fatto che nell'organismo i due enantiomeri della talidomide possono anche trasformarsi l'uno nell'altro.)</p>`
    },
    {
      type: "widget",
      title: "Abbina il nome alla formula",
      widget: "match",
      options: {
        pairs: [
          ["metano", "CH₄"],
          ["propano", "C₃H₈"],
          ["etene", "CH₂=CH₂"],
          ["etino", "HC≡CH"],
          ["cicloesano", "C₆H₁₂"],
          ["benzene", "C₆H₆"]
        ]
      },
      caption: "Ricorda le formule generali: alcani CₙH₂ₙ₊₂, alcheni e cicloalcani CₙH₂ₙ, alchini CₙH₂ₙ₋₂."
    },
    {
      type: "example",
      title: "Perché il GPL scoppietta e la benzina ha un \"numero di ottano\"",
      html: `<p>Nel motore a scoppio la miscela aria-benzina viene compressa e poi accesa dalla candela. Se si accende da sola prima, per l'alta pressione e temperatura, si ha il \"battito in testa\", dannoso per il motore. Gli alcani <b>ramificati</b> resistono meglio alla detonazione di quelli a catena lineare. Per questo è stata creata la scala del <b>numero di ottano</b>: all'eptano (catena lineare, detona facilmente) si assegna 0 e all'isottano, cioè il 2,2,4-trimetilpentano (molto ramificato), si assegna 100. La benzina \"95 ottani\" si comporta come una miscela del 95% di isottano e 5% di eptano. Stessa formula (C₈H₁₈ per ottano e isottano!), struttura diversa, comportamento diverso: l'isomeria applicata ai carburanti.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: insaturi, aromatici e isomeria",
      questions: [
        { type: "mc", q: "Quale reazione è tipica degli alcheni?", options: ["Addizione al doppio legame", "Sostituzione radicalica", "Idrolisi", "Fusione nucleare"], answer: 0, explain: "Il legame π, più debole e ricco di elettroni, si rompe facilmente e permette l'addizione di H₂, X₂, HX, H₂O." },
        { type: "tf", q: "Butano e 2-metilpropano sono isomeri.", answer: true, explain: "Hanno entrambi formula C₄H₁₀ ma scheletro diverso (lineare e ramificato): isomeri di catena." },
        { type: "mc", q: "Perché nel benzene tutti i legami C-C hanno la stessa lunghezza?", options: ["Gli elettroni π sono delocalizzati su tutto l'anello", "Ci sono sei doppi legami", "Ci sono solo legami semplici", "L'anello non è planare"], answer: 0, explain: "La delocalizzazione dei sei elettroni π dà a ogni legame un carattere intermedio tra semplice e doppio." },
        { type: "num", q: "Quanti atomi di idrogeno ha un alchino con 5 atomi di carbonio (CₙH₂ₙ₋₂)?", answer: 8, tol: 0, explain: "Con n = 5: 2·5 − 2 = 8, cioè C₅H₈ (pentino)." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il carbonio",
      intro: "Le molecole sono invisibili: ecco tre analogie per \"vederle\".",
      tabs: [
        { label: "🧱 I mattoncini LEGO", html: "<p>Il carbonio è un mattoncino con <b>quattro</b> incastri. Con pochi mattoncini (C, H, O, N) e tanti modi di incastrarli puoi costruire catene, ramificazioni, anelli. Gli <b>isomeri</b> sono costruzioni fatte con gli stessi identici mattoncini ma montati in modo diverso: stessi pezzi, oggetti diversi. Con 20 mattoncini di carbonio le costruzioni possibili sono oltre 360 000!</p>" },
        { label: "🧤 Le mani e i guanti", html: "<p>La <b>chiralità</b> è come le mani: la destra e la sinistra hanno la stessa forma e le stesse dita, ma non puoi sovrapporle perfettamente. Un guanto destro (la molecola) entra perfettamente nella mano destra (il recettore del corpo) ma non nella sinistra. Per questo gli enantiomeri di una stessa molecola possono avere odore, sapore o effetto diversi: il limonene, per esempio, in una forma ha odore di arancia e nell'altra di limone/trementina.</p>" },
        { label: "🔬 Il metano in 3D", html: "<p>Ruota il modello: il carbonio è al centro di un <b>tetraedro</b> e i quattro idrogeni sono ai vertici. È la forma che tiene i quattro legami il più lontano possibile uno dall'altro (109,5°). Se disegni il metano come una croce sul foglio, la geometria vera è un'altra!</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#334155", label: "C" }, { x: 0.7, y: 0.7, z: 0.7, r: 0.3, color: "#e2e8f0", label: "H" }, { x: 0.7, y: -0.7, z: -0.7, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.7, y: 0.7, z: -0.7, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.7, y: -0.7, z: 0.7, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]] } }
      ]
    },
    {
      type: "curiosity",
      title: "Diamante, grafite, grafene, fullereni",
      html: `<p>Il carbonio puro esiste in forme diverse (<b>allotropi</b>) che sono dei veri \"isomeri\" dell'elemento. Nel <b>diamante</b> ogni C è sp³, legato a quattro vicini: reticolo rigido tridimensionale, durissimo, isolante. Nella <b>grafite</b> i C sono sp², in strati esagonali che scivolano l'uno sull'altro (la mina della matita) con elettroni delocalizzati che conducono la corrente. Un singolo strato di grafite è il <b>grafene</b> (Geim e Novoselov, Nobel per la fisica 2010). I <b>fullereni</b> (C₆₀, scoperto nel 1985) sono gabbie a forma di pallone da calcio; i nanotubi sono fogli di grafene arrotolati. Stesso elemento, struttura diversa, proprietà opposte.</p>`
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li>Il carbonio fa <b>4 legami</b>: sp³ (109,5°), sp² (120°), sp (180°).</li>
<li>Alcani CₙH₂ₙ₊₂ (saturi, poco reattivi); alcheni CₙH₂ₙ e alchini CₙH₂ₙ₋₂ (insaturi, reazioni di <b>addizione</b>, Markovnikov); benzene (delocalizzato, <b>sostituzione</b>).</li>
<li>Nomenclatura: catena principale più lunga, numeri più bassi ai sostituenti, ordine alfabetico.</li>
<li><b>Isomeri</b>: strutturali (catena, posizione, gruppo funzionale) e stereoisomeri (cis-trans, enantiomeri con centro chirale).</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa della chimica organica",
      nodes: [
        { id: "c", label: "Atomo di carbonio", x: 50, y: 8, color: "#334155", html: "4 elettroni di valenza, 4 legami, legami semplici, doppi, tripli.", why: "Il carbonio sta a metà del secondo periodo: non cede né acquista facilmente elettroni (elettronegatività media), perciò forma legami covalenti forti e stabili con se stesso e con H, O, N. È questa proprietà, la catenazione, che manca quasi del tutto agli altri elementi." },
        { id: "ib", label: "Ibridazione", x: 20, y: 35, color: "#7c3aed", html: "sp³, sp², sp: geometrie tetraedrica, planare, lineare.", why: "Linus Pauling introdusse l'ibridazione nel 1931 per spiegare perché il metano ha quattro legami identici a 109,5° (dato sperimentale) pur partendo da orbitali s e p diversi." },
        { id: "idro", label: "Idrocarburi", x: 50, y: 40, color: "#0ea5e9", html: "Alcani, alcheni, alchini, cicloalcani, aromatici.", why: "Sono i composti più semplici (solo C e H) e derivano da resti fossili di organismi del passato: petrolio e gas sono energia solare antica, accumulata sotto forma di legami C-C e C-H." },
        { id: "reaz", label: "Reattività", x: 80, y: 35, color: "#ef4444", html: "Combustione, sostituzione, addizione.", why: "Dove ci sono elettroni π (doppi e tripli legami, anelli aromatici) la molecola è più reattiva; gli alcani, con soli legami σ forti e poco polari, reagiscono solo in condizioni drastiche (luce, calore, fiamma)." },
        { id: "iso", label: "Isomeria", x: 35, y: 75, color: "#10b981", html: "Strutturale e stereoisomeria (cis-trans, ottica).", why: "Fu scoperta da Berzelius (1830) osservando che sostanze diverse potevano avere la stessa composizione. Si spiega con la geometria dei legami: la rotazione impedita attorno al C=C dà cis-trans, il carbonio con quattro sostituenti diversi dà enantiomeri (van 't Hoff e Le Bel, 1874)." },
        { id: "bio", label: "Proprietà e vita", x: 70, y: 78, color: "#f59e0b", html: "Proprietà fisiche, farmaci, polimeri, molecole biologiche.", why: "Forma e chiralità decidono come una molecola si incastra con enzimi e recettori: per questo la stessa formula può essere un farmaco o un veleno e per questo la chimica organica è il linguaggio della biologia." }
      ],
      edges: [["c", "ib", "si descrive con"], ["c", "idro", "forma gli"], ["ib", "reaz", "determina la"], ["idro", "reaz", "ha una"], ["c", "iso", "genera"], ["iso", "bio", "conta per la"]]
    }
  ],
  glossary: [
    { t: "Idrocarburo", d: "Composto formato solo da carbonio e idrogeno." },
    { t: "Ibridazione", d: "Combinazione di orbitali atomici (s e p) che dà orbitali equivalenti con geometria definita: sp³, sp², sp." },
    { t: "Legame σ e π", d: "σ: sovrapposizione frontale degli orbitali, permette la rotazione; π: sovrapposizione laterale, più debole e rigido." },
    { t: "Alcano", d: "Idrocarburo saturo con soli legami semplici, formula CₙH₂ₙ₊₂." },
    { t: "Alchene / Alchino", d: "Idrocarburi insaturi con un doppio / triplo legame carbonio-carbonio." },
    { t: "Aromatico", d: "Composto ciclico planare con elettroni π delocalizzati (4n+2), come il benzene." },
    { t: "Addizione", d: "Reazione in cui un legame multiplo si rompe e si legano due nuovi atomi o gruppi." },
    { t: "Regola di Markovnikov", d: "Nell'addizione di HX a un alchene asimmetrico l'H va sul carbonio con più H già legati." },
    { t: "Isomeri", d: "Composti con la stessa formula molecolare ma struttura o disposizione spaziale diversa." },
    { t: "Chiralità", d: "Proprietà di una molecola di non essere sovrapponibile alla propria immagine speculare." },
    { t: "Enantiomeri", d: "Coppia di stereoisomeri speculari non sovrapponibili, con attività ottica opposta." },
    { t: "Gruppo alchilico", d: "Frammento ottenuto togliendo un idrogeno a un alcano (metile, etile, propile...)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale ibridazione ha il carbonio in un doppio legame C=C?", options: ["sp", "sp²", "sp³", "sp³d"], answer: 1, explain: "Tre orbitali ibridi (angoli di 120°) più un orbitale p che forma il legame π: ibridazione sp²." },
      { type: "num", q: "Quanti atomi di idrogeno ha l'alcano con 12 atomi di carbonio?", answer: 26, tol: 0, explain: "CₙH₂ₙ₊₂ con n = 12 dà C₁₂H₂₆: 2·12 + 2 = 26." },
      { type: "mc", q: "Qual è il nome IUPAC di CH₃-CH(CH₃)-CH₂-CH₂-CH₃?", options: ["2-metilpentano", "3-metilpentano", "2-etilbutano", "esano"], answer: 0, explain: "La catena principale più lunga ha 5 C (pentano) e il metile sta sul secondo carbonio: 2-metilpentano." },
      { type: "tf", q: "Il propene e il ciclopropano hanno la stessa formula molecolare C₃H₆.", answer: true, explain: "Alcheni e cicloalcani seguono entrambi CₙH₂ₙ: sono isomeri di gruppo/struttura." },
      { type: "mc", q: "Secondo Markovnikov, propene + HBr dà soprattutto...", options: ["2-bromopropano", "1-bromopropano", "bromopropene", "propano"], answer: 0, explain: "L'idrogeno si lega al carbonio con più H (CH₂), il bromo al carbonio centrale: CH₃-CHBr-CH₃." },
      { type: "mc", q: "Perché gli alcani non si sciolgono in acqua?", options: ["Sono apolari e l'acqua è polare", "Sono troppo pesanti", "Reagiscono violentemente con l'acqua", "Hanno legami ionici"], answer: 0, explain: "\"Il simile scioglie il simile\": le molecole apolari non interagiscono con quelle polari dell'acqua, che si legano tra loro con legami a idrogeno." },
      { type: "tf", q: "Il benzene dà facilmente reazioni di addizione come gli alcheni.", answer: false, explain: "L'addizione distruggerebbe la stabile struttura aromatica; il benzene reagisce di preferenza per sostituzione." },
      { type: "mc", q: "Una molecola con un carbonio legato a quattro gruppi diversi è...", options: ["chirale", "aromatica", "satura per definizione", "un alchino"], answer: 0, explain: "Il carbonio asimmetrico (centro stereogenico) rende la molecola non sovrapponibile alla sua immagine speculare." },
      { type: "text", q: "Come si chiama l'isomeria dovuta alla diversa disposizione dei gruppi attorno a un doppio legame (cis e trans)?", answer: ["geometrica", "isomeria geometrica", "cis-trans", "isomeria cis-trans"], explain: "La rotazione intorno al doppio legame è impedita, perciò le due disposizioni cis e trans sono molecole distinte: isomeria geometrica (cis-trans)." },
      { type: "order", q: "Ordina gli alcani dal punto di ebollizione più basso al più alto.", items: ["metano", "propano", "pentano", "decano"], explain: "Più la catena è lunga, più sono intense le forze di London e più alta è la temperatura di ebollizione: −162 °C, −42 °C, 36 °C, circa 174 °C." }
    ]
  }
});

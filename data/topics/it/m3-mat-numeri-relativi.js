TOPIC('it', {
  id: "m3-mat-numeri-relativi",
  title: "I numeri relativi",
  intro: "La temperatura in inverno scende sotto lo zero, il Mar Morto è sotto il livello del mare, il conto in banca può andare \"in rosso\". Per descrivere queste situazioni servono i <b>numeri relativi</b>: numeri con il <b>segno</b> + o −. Impariamo a confrontarli e a fare con loro tutte e quattro le operazioni.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Che cosa sono i numeri relativi",
      html: `<p>I <b>numeri relativi</b> sono numeri preceduti da un <b>segno</b>:</p>
<ul>
<li><b>positivi</b> (+): maggiori di zero → +1, +5, +3,7, +2/3;</li>
<li><b>negativi</b> (−): minori di zero → −1, −8, −0,5, −3/4;</li>
<li>lo <b>zero</b> non è né positivo né negativo.</li>
</ul>
<p>Si dicono "relativi" perché il loro valore è riferito (<i>relativo</i>) a un punto di partenza, lo zero: 0 °C, il livello del mare, il pianterreno di un palazzo.</p>
<p>Gli <b>interi relativi</b> formano l'insieme <b>ℤ</b> = {…, −3, −2, −1, 0, +1, +2, +3, …}. La lettera Z viene dal tedesco <i>Zahlen</i>, "numeri". Se includiamo anche frazioni e decimali con segno, otteniamo i <b>razionali relativi ℚ</b>.</p>`
    },
    {
      type: "text",
      title: "Valore assoluto, numeri opposti e concordi",
      html: `<ul>
<li>Il <b>valore assoluto</b> (o modulo) è il numero senza segno: è la <b>distanza dallo zero</b>. Si scrive tra sbarrette: |−7| = 7, |+7| = 7.</li>
<li>Due numeri sono <b>opposti</b> se hanno lo stesso valore assoluto e segno diverso: +5 e −5. La loro somma è 0.</li>
<li>Due numeri sono <b>concordi</b> se hanno lo <b>stesso segno</b> (+3 e +8; −2 e −9), <b>discordi</b> se hanno segni diversi (+4 e −6).</li>
</ul>`
    },
    {
      type: "svg",
      title: "La retta orientata",
      svg: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="230" fill="#f8fafc"/>
<line x1="20" y1="120" x2="620" y2="120" stroke="#1f2937" stroke-width="4"/>
<polygon points="620,120 604,111 604,129" fill="#1f2937"/>
<g stroke="#1f2937" stroke-width="3">
<line x1="70" y1="110" x2="70" y2="130"/><line x1="120" y1="110" x2="120" y2="130"/><line x1="170" y1="110" x2="170" y2="130"/><line x1="220" y1="110" x2="220" y2="130"/><line x1="270" y1="110" x2="270" y2="130"/>
<line x1="320" y1="102" x2="320" y2="138"/>
<line x1="370" y1="110" x2="370" y2="130"/><line x1="420" y1="110" x2="420" y2="130"/><line x1="470" y1="110" x2="470" y2="130"/><line x1="520" y1="110" x2="520" y2="130"/><line x1="570" y1="110" x2="570" y2="130"/>
</g>
<g font-size="17" text-anchor="middle">
<text x="70" y="158" fill="#dc2626">−5</text><text x="120" y="158" fill="#dc2626">−4</text><text x="170" y="158" fill="#dc2626">−3</text><text x="220" y="158" fill="#dc2626">−2</text><text x="270" y="158" fill="#dc2626">−1</text>
<text x="320" y="160" fill="#1f2937" font-weight="bold">0</text>
<text x="370" y="158" fill="#2563eb">+1</text><text x="420" y="158" fill="#2563eb">+2</text><text x="470" y="158" fill="#2563eb">+3</text><text x="520" y="158" fill="#2563eb">+4</text><text x="570" y="158" fill="#2563eb">+5</text>
</g>
<text x="170" y="200" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">← NEGATIVI</text>
<text x="470" y="200" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">POSITIVI →</text>
<circle cx="170" cy="120" r="8" fill="#a855f7"/><circle cx="470" cy="120" r="8" fill="#a855f7"/>
<path d="M170 100 Q245 40 320 100" fill="none" stroke="#a855f7" stroke-width="3"/>
<path d="M320 100 Q395 40 470 100" fill="none" stroke="#a855f7" stroke-width="3"/>
<text x="245" y="55" font-size="15" text-anchor="middle" fill="#7e22ce">distanza 3</text>
<text x="395" y="55" font-size="15" text-anchor="middle" fill="#7e22ce">distanza 3</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#7e22ce">−3 e +3 sono opposti: |−3| = |+3| = 3</text>
</svg>`,
      caption: "Più un numero sta a destra, più è grande. Gli opposti sono simmetrici rispetto allo zero."
    },
    {
      type: "text",
      title: "Confrontare i numeri relativi",
      html: `<p>Sulla retta orientata <b>è maggiore il numero che sta più a destra</b>. Da qui le regole:</p>
<ul>
<li>ogni numero <b>positivo</b> è maggiore di zero e di ogni negativo: +1 &gt; −100;</li>
<li>tra due <b>positivi</b> è maggiore quello con valore assoluto maggiore: +8 &gt; +3;</li>
<li>tra due <b>negativi</b> è maggiore quello con valore assoluto <b>minore</b>: −3 &gt; −8 (fa "meno freddo" a −3 °C che a −8 °C!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Salta sulla retta dei numeri",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 3, start: 2, marks: [-5, 0, 5] },
      caption: "Parti da +2 e fai salti indietro di 3: −1, −4, −7… Ogni salto a sinistra è come sommare −3."
    },
    {
      type: "text",
      title: "Addizione e sottrazione",
      html: `<p><b>Addizione</b> (somma algebrica):</p>
<ul>
<li><b>numeri concordi</b>: si sommano i valori assoluti e si mette il <b>segno comune</b>. (+3) + (+5) = +8; (−3) + (−5) = −8.</li>
<li><b>numeri discordi</b>: si sottrae il valore assoluto minore dal maggiore e si mette il <b>segno del numero con valore assoluto maggiore</b>. (+7) + (−4) = +3; (−9) + (+2) = −7.</li>
</ul>
<p><b>Sottrazione</b>: sottrarre un numero equivale ad <b>aggiungere il suo opposto</b>.</p>
<ul>
<li>(+5) − (+8) = (+5) + (−8) = −3</li>
<li>(−4) − (−6) = (−4) + (+6) = +2</li>
</ul>
<p>Grazie ai relativi la sottrazione è <b>sempre possibile</b>: 3 − 7 non è più "impossibile", fa −4!</p>
<p><b>Regola delle parentesi</b>: un <b>+</b> davanti alla parentesi la toglie lasciando i segni; un <b>−</b> davanti la toglie <b>cambiando</b> tutti i segni: −(+3 − 5) = −3 + 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: confronto e somma",
      questions: [
        { type: "mc", q: "Qual è il numero maggiore?", options: ["−12", "−2", "−7"], answer: 1, explain: "Tra negativi è maggiore quello più vicino allo zero: −2." },
        { type: "num", q: "(−6) + (+10) = ?", answer: 4, explain: "Discordi: 10 − 6 = 4, segno del più grande in valore assoluto (+): +4." },
        { type: "num", q: "(−3) − (+5) = ?", answer: -8, explain: "(−3) + (−5) = −8." }
      ]
    },
    {
      type: "text",
      title: "Moltiplicazione, divisione e potenze",
      html: `<p>Si moltiplicano (o dividono) i valori assoluti e si applica la <b>regola dei segni</b>:</p>
<table>
<tr><th>×  :</th><th>+</th><th>−</th></tr>
<tr><th>+</th><td>+</td><td>−</td></tr>
<tr><th>−</th><td>−</td><td>+</td></tr>
</table>
<p>In breve: <b>segni uguali → +</b>, <b>segni diversi → −</b>.</p>
<ul>
<li>(−4) × (−3) = +12 &nbsp; (+4) × (−3) = −12 &nbsp; (−20) : (+5) = −4 &nbsp; (−20) : (−5) = +4</li>
</ul>
<p><b>Potenze</b>: se la base è positiva il risultato è sempre positivo. Se la base è <b>negativa</b>:</p>
<ul>
<li>esponente <b>pari</b> → risultato <b>positivo</b>: (−2)<sup>4</sup> = +16;</li>
<li>esponente <b>dispari</b> → risultato <b>negativo</b>: (−2)<sup>3</sup> = −8.</li>
</ul>
<p>⚠️ Attenzione: (−3)<sup>2</sup> = +9, ma −3<sup>2</sup> = −9, perché senza parentesi l'esponente riguarda solo il 3!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il termometro",
      html: `<p>Alle 6 del mattino a Cortina ci sono <b>−7 °C</b>. A mezzogiorno la temperatura è salita di <b>12 °C</b>. Di notte scende di <b>9 °C</b> rispetto a mezzogiorno.</p>
<ul>
<li>Mezzogiorno: (−7) + (+12) = <b>+5 °C</b></li>
<li>Notte: (+5) + (−9) = <b>−4 °C</b></li>
<li>Escursione termica tra la massima e la minima: (+5) − (−7) = 5 + 7 = <b>12 °C</b></li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'ascensore e il conto in banca",
      html: `<p><b>Ascensore</b>: il pianterreno è 0, i garage sono ai piani −1 e −2. Marta sale dal piano −2 al piano +5: quanti piani ha fatto? (+5) − (−2) = <b>7 piani</b>.</p>
<p><b>Conto in banca</b>: Luca ha 40 €. Paga 3 abbonamenti da 18 € ciascuno: 40 + 3 × (−18) = 40 − 54 = <b>−14 €</b>. Il conto è "in rosso" di 14 €: è un <b>debito</b>.</p>
<p><b>Espressione</b>: −2 × (−3 + 5) − (−4)² : 8 = −2 × (+2) − 16 : 8 = −4 − 2 = <b>−6</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Bastoncini rossi e neri",
      html: `<p>Più di 2000 anni fa, nel libro cinese <i>I nove capitoli sull'arte matematica</i>, i calcoli si facevano con <b>bastoncini</b>: quelli <b>rossi</b> per i numeri positivi e quelli <b>neri</b> per i negativi. In India il matematico <b>Brahmagupta</b>, nel 628 d.C., scrisse le regole dei segni parlando di <b>"fortune"</b> (positivi) e <b>"debiti"</b> (negativi): <i>"un debito per un debito è una fortuna"</i>. In Europa i negativi furono accettati molto più tardi: ancora nel Cinquecento alcuni li chiamavano "numeri assurdi".</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Record di temperatura e altitudine",
      html: `<ul>
<li>La temperatura più bassa misurata sulla Terra è <b>−89,2 °C</b>, alla stazione Vostok in Antartide, il 21 luglio 1983.</li>
<li>La riva del <b>Mar Morto</b> è il punto di terraferma più basso del pianeta: circa <b>−430 m</b> sotto il livello del mare (e continua ad abbassarsi).</li>
<li>La <b>Fossa delle Marianne</b> arriva a circa <b>−10 900 m</b>, mentre l'Everest è a <b>+8849 m</b>: tra i due ci sono quasi 20 km!</li>
<li>Lo zero della scala <b>Kelvin</b> (zero assoluto) corrisponde a <b>−273,15 °C</b>: non esiste niente di più freddo.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Valore assoluto = distanza dallo zero. Opposti: stesso valore assoluto, segno diverso.</li>
<li>Somma: <b>concordi</b> → sommo e tengo il segno; <b>discordi</b> → sottraggo e prendo il segno del "più forte".</li>
<li>Sottrarre = sommare l'opposto.</li>
<li>Prodotto e quoziente: <b>segni uguali +</b>, <b>segni diversi −</b>.</li>
<li>Base negativa: esponente pari → +, dispari → −.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i numeri relativi",
      intro: "La regola dei segni non ti convince? Ecco altri modi per \"vederla\": i bastoncini cinesi, le coppie che si annullano, il film al contrario, la retta da percorrere.",
      tabs: [
        {
          label: "🇨🇳 Bastoncini rossi e neri",
          html: `<p>Come nell'antica Cina, usa due colori: <b style="color:#dc2626">rosso = +1</b> e <b>nero = −1</b>. Un rosso e un nero insieme si <b>annullano</b> (fanno 0): è una "coppia zero".</p>
<p>(+5) + (−3): metti 5 rossi e 3 neri. Elimina 3 coppie rosso-nero. Restano <b>2 rossi → +2</b>.</p>
<p>(+2) − (+5): devo togliere 5 rossi ma ne ho solo 2! Aggiungo 3 coppie zero (3 rossi + 3 neri: il valore non cambia), ora tolgo 5 rossi. Restano <b>3 neri → −3</b>. Ecco perché sottrarre = sommare l'opposto!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fefce8"/>
<text x="20" y="35" font-size="20" fill="#1f2937" font-weight="bold">(+5) + (−3) = +2</text>
<g stroke-width="10" stroke-linecap="round">
<line x1="40" y1="60" x2="40" y2="140" stroke="#dc2626"/><line x1="70" y1="60" x2="70" y2="140" stroke="#dc2626"/><line x1="100" y1="60" x2="100" y2="140" stroke="#dc2626"/><line x1="130" y1="60" x2="130" y2="140" stroke="#dc2626"/><line x1="160" y1="60" x2="160" y2="140" stroke="#dc2626"/>
<line x1="100" y1="160" x2="100" y2="220" stroke="#111827"/><line x1="130" y1="160" x2="130" y2="220" stroke="#111827"/><line x1="160" y1="160" x2="160" y2="220" stroke="#111827"/>
</g>
<rect x="85" y="50" width="90" height="180" rx="12" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 5"/>
<text x="190" y="140" font-size="16" fill="#7c3aed">3 coppie rosso+nero = 0</text>
<text x="20" y="235" font-size="15" fill="#dc2626">restano 2 rossi</text>
<text x="390" y="80" font-size="20" fill="#dc2626" font-weight="bold">rosso = +1</text>
<text x="390" y="120" font-size="20" fill="#111827" font-weight="bold">nero = −1</text>
<text x="390" y="160" font-size="20" fill="#7c3aed" font-weight="bold">rosso + nero = 0</text>
</svg>`
        },
        {
          label: "🎬 Il film al contrario",
          html: `<p>Perché "meno per meno fa più"? Immagina un video di un'auto:</p>
<ul>
<li>velocità <b>+</b> (avanti) × tempo <b>+</b> (video normale) → l'auto va avanti: <b>+</b></li>
<li>velocità <b>−</b> (retromarcia) × tempo <b>+</b> → l'auto va indietro: <b>−</b></li>
<li>velocità <b>+</b> × tempo <b>−</b> (video al contrario) → sembra che vada indietro: <b>−</b></li>
<li>velocità <b>−</b> (retromarcia) × tempo <b>−</b> (video al contrario) → sembra che vada <b>avanti</b>: <b>+</b>!</li>
</ul>
<p>Due "inversioni" si annullano, come in italiano "non è vero che non piove" vuol dire "piove".</p>`
        },
        {
          label: "🐸 La rana sulla retta",
          html: `<p>Usa la retta: la rana parte dal primo numero. <b>Sommare un positivo</b> = saltare a destra; <b>sommare un negativo</b> = saltare a sinistra. <b>Sottrarre</b> = girarsi dall'altra parte prima di saltare.</p>
<p>Prova: parti da −4, salta di +3 due volte: dove arrivi? (−4) + 2 × (+3) = <b>+2</b>.</p>`,
          widget: "numberLine",
          options: { min: -12, max: 12, step: 3, start: -4 }
        },
        {
          label: "🇺🇸 Le algebra tiles",
          html: `<p>Nelle scuole americane si usano tessere colorate chiamate <b>algebra tiles</b>: quadratini gialli (+1) e rossi (−1). Il metodo è lo stesso dei bastoncini cinesi: le <b>zero pairs</b> (coppie zero) si eliminano.</p>
<p>Per la moltiplicazione: (−2) × (+3) = "prendi 3 volte 2 tessere rosse" = 6 rosse = −6. E (−2) × (−3)? "<b>Togli</b> 3 volte 2 tessere rosse": parti da zero (tante coppie zero), togli 6 rosse… restano 6 gialle = <b>+6</b>!</p>
<p>Qui sotto puoi costruire un rettangolo di cubetti: righe × colonne è il valore assoluto del prodotto; il segno lo dà la regola.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei numeri relativi",
      nodes: [
        { id: "naturali", label: "Numeri naturali ℕ", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3, … i numeri per contare.", why: "Sono i più antichi: nascono per contare oggetti. Ma con essi la sottrazione non è sempre possibile (3 − 7 = ?)." },
        { id: "relativi", label: "Interi relativi ℤ", x: 50, y: 28, color: "#2563eb", html: "…, −2, −1, 0, +1, +2, … numeri con segno.", why: "Nascono per rendere la sottrazione sempre possibile e per rappresentare grandezze con due versi (debiti/crediti, sopra/sotto). Usati in Cina (I nove capitoli) e in India (Brahmagupta, 628); in Europa accettati pienamente solo dal XVII secolo." },
        { id: "retta", label: "Retta orientata", x: 15, y: 48, color: "#16a34a", html: "Una retta con un'origine (0), un verso e un'unità di misura.", why: "L'idea di rappresentare i numeri come punti su una retta, con i negativi a sinistra, si diffonde nel Seicento con la geometria analitica di Cartesio e con matematici come John Wallis (1685)." },
        { id: "assoluto", label: "Valore assoluto", x: 85, y: 48, color: "#a855f7", html: "La distanza dallo zero: |−5| = 5.", why: "Una distanza non può essere negativa: per questo il valore assoluto è sempre ≥ 0. Il simbolo |x| fu introdotto da Karl Weierstrass nel 1841." },
        { id: "somma", label: "Somma algebrica", x: 25, y: 72, color: "#f59e0b", html: "Concordi: somma e segno comune. Discordi: differenza e segno del maggiore in valore assoluto.", why: "Pensa ai movimenti sulla retta: andare a destra e a sinistra si compensano. Rossi e neri che si annullano a coppie." },
        { id: "sottrazione", label: "Sottrazione", x: 50, y: 60, color: "#ef4444", html: "a − b = a + (−b): si somma l'opposto.", why: "Trasformare la sottrazione in somma permette di usare un'unica regola; è sempre possibile perché in ℤ ogni numero ha il suo opposto." },
        { id: "segni", label: "Regola dei segni", x: 75, y: 72, color: "#0ea5e9", html: "Segni uguali → +; segni diversi → −.", why: "Non è una regola arbitraria: è l'unica che mantiene valida la proprietà distributiva. Infatti (−1)·(1 + (−1)) = (−1)·0 = 0, quindi (−1)·1 + (−1)·(−1) = 0 → (−1)·(−1) deve valere +1." },
        { id: "potenze", label: "Potenze", x: 75, y: 92, color: "#7c3aed", html: "Base negativa: esponente pari → +, dispari → −.", why: "È la regola dei segni applicata più volte: ogni coppia di fattori negativi dà un positivo; se resta un fattore 'spaiato' il risultato è negativo." },
        { id: "realta", label: "Nella realtà", x: 25, y: 92, color: "#14b8a6", html: "Temperature, altitudini, piani, saldi bancari, fusi orari, anni a.C.", why: "Ovunque serva un punto di riferimento (zero) e due direzioni opposte. Curiosità: negli anni non esiste l'anno 0: dall'1 a.C. si passa all'1 d.C." }
      ],
      edges: [
        ["naturali", "relativi", "si estendono in"],
        ["relativi", "retta", "si rappresentano sulla"],
        ["relativi", "assoluto", "hanno"],
        ["relativi", "sottrazione", "rendono possibile"],
        ["sottrazione", "somma", "diventa"],
        ["relativi", "segni", "si moltiplicano con"],
        ["segni", "potenze", "ripetuta dà"],
        ["retta", "realta", "modella"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: prodotti e potenze",
      questions: [
        { type: "num", q: "(−7) × (−6) = ?", answer: 42, explain: "Segni uguali → +; 7 × 6 = 42." },
        { type: "num", q: "(−2)⁵ = ?", answer: -32, explain: "Base negativa, esponente dispari → −; 2⁵ = 32." },
        { type: "mc", q: "Quanto vale −4² (senza parentesi)?", options: ["+16", "−16", "−8"], answer: 1, explain: "L'esponente riguarda solo il 4: −(4²) = −16." }
      ]
    }
  ],
  glossary: [
    { t: "Numero relativo", d: "Numero preceduto da un segno + o −." },
    { t: "ℤ", d: "L'insieme dei numeri interi relativi." },
    { t: "Valore assoluto", d: "Il numero senza segno, cioè la sua distanza dallo zero." },
    { t: "Numeri opposti", d: "Stesso valore assoluto e segno diverso; la loro somma è 0." },
    { t: "Concordi / discordi", d: "Numeri con lo stesso segno / con segni diversi." },
    { t: "Somma algebrica", d: "Addizione tra numeri relativi (comprende anche le sottrazioni)." },
    { t: "Regola dei segni", d: "Nel prodotto e nel quoziente: segni uguali danno +, segni diversi danno −." },
    { t: "Retta orientata", d: "Retta con origine, verso e unità di misura su cui si rappresentano i numeri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "|−15| = ?", answer: 15, explain: "Il valore assoluto è la distanza dallo zero: 15." },
      { type: "mc", q: "Qual è l'opposto di −9?", options: ["+9", "−9", "1/9"], answer: 0, explain: "Stesso valore assoluto, segno opposto: +9." },
      { type: "order", q: "Ordina dal più piccolo al più grande.", items: ["−8", "−3", "0", "+2", "+5"], explain: "Sulla retta, da sinistra a destra." },
      { type: "num", q: "(+4) + (−11) = ?", answer: -7, explain: "Discordi: 11 − 4 = 7, segno del −11 → −7." },
      { type: "num", q: "(−5) − (−12) = ?", answer: 7, explain: "(−5) + (+12) = +7." },
      { type: "num", q: "(−36) : (+9) = ?", answer: -4, explain: "Segni diversi → −; 36 : 9 = 4." },
      { type: "tf", q: "Il prodotto di tre numeri negativi è positivo.", answer: false, explain: "(−)·(−) = +, poi (+)·(−) = −: il prodotto è negativo." },
      { type: "num", q: "(−3)⁴ = ?", answer: 81, explain: "Esponente pari → +; 3⁴ = 81." },
      { type: "num", q: "Di notte ci sono −6 °C, di giorno +9 °C. Di quanti gradi è salita la temperatura?", answer: 15, unit: "°C", explain: "(+9) − (−6) = 15." },
      { type: "num", q: "Calcola: −3 + 2 × (−4) − (−5)", answer: -6, explain: "−3 − 8 + 5 = −6 (prima la moltiplicazione)." },
      { type: "mc", q: "Se a è negativo, −a è…", options: ["sempre negativo", "sempre positivo", "zero"], answer: 1, explain: "−a è l'opposto di a: se a = −4, −a = +4." }
    ],
    gen: [["intAdd", 2], ["intMul", 2]]
  }
});

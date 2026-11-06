TOPIC('it', {
  id: "p5-mat-numeri-relativi-intro",
  title: "I numeri relativi",
  intro: "D'inverno il termometro segna <b>−3 °C</b>, l'ascensore scende al piano <b>−1</b>, il Mar Morto è a <b>430 metri sotto</b> il livello del mare. Per tutte queste cose servono i numeri che stanno \"sotto lo zero\": i <b>numeri negativi</b>. Insieme ai positivi e allo zero formano i <b>numeri relativi</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Positivi, negativi e zero",
      html: `<p>Fino ad ora hai usato i <b>numeri naturali</b>: 0, 1, 2, 3… Ma a volte serve indicare quantità <b>sotto lo zero</b>, o <b>in direzione opposta</b>.</p>
<ul>
<li>I <b>numeri positivi</b> sono maggiori di zero: si scrivono con il segno <b>+</b> (o senza segno): <b>+1, +2, +15</b>.</li>
<li>I <b>numeri negativi</b> sono minori di zero: si scrivono <b>sempre</b> con il segno <b>−</b>: <b>−1, −2, −15</b>. Si legge \"meno uno\", \"meno due\"…</li>
<li>Lo <b>zero</b> non è né positivo né negativo: è il <b>punto di partenza</b> (l'origine).</li>
</ul>
<p>Insieme formano i <b>numeri relativi</b> (o <b>interi relativi</b>). Si chiamano \"relativi\" perché il loro valore è <b>relativo</b> a un punto di riferimento: lo zero.</p>`
    },
    {
      type: "svg",
      title: "La retta dei numeri relativi",
      svg: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="220" fill="#f8fafc"/>
<line x1="20" y1="110" x2="620" y2="110" stroke="#1f2937" stroke-width="4"/>
<polygon points="620,100 638,110 620,120" fill="#1f2937"/>
<rect x="20" y="102" width="300" height="16" fill="#bfdbfe" opacity="0.6"/>
<rect x="320" y="102" width="300" height="16" fill="#fecaca" opacity="0.6"/>
<g stroke="#1f2937" stroke-width="3">
<line x1="70" y1="98" x2="70" y2="122"/><line x1="120" y1="98" x2="120" y2="122"/><line x1="170" y1="98" x2="170" y2="122"/><line x1="220" y1="98" x2="220" y2="122"/><line x1="270" y1="98" x2="270" y2="122"/>
<line x1="320" y1="90" x2="320" y2="130"/>
<line x1="370" y1="98" x2="370" y2="122"/><line x1="420" y1="98" x2="420" y2="122"/><line x1="470" y1="98" x2="470" y2="122"/><line x1="520" y1="98" x2="520" y2="122"/><line x1="570" y1="98" x2="570" y2="122"/>
</g>
<g font-size="18" text-anchor="middle" font-weight="bold">
<text x="70" y="152" fill="#1d4ed8">−5</text><text x="120" y="152" fill="#1d4ed8">−4</text><text x="170" y="152" fill="#1d4ed8">−3</text><text x="220" y="152" fill="#1d4ed8">−2</text><text x="270" y="152" fill="#1d4ed8">−1</text>
<text x="320" y="152" fill="#1f2937">0</text>
<text x="370" y="152" fill="#b91c1c">+1</text><text x="420" y="152" fill="#b91c1c">+2</text><text x="470" y="152" fill="#b91c1c">+3</text><text x="520" y="152" fill="#b91c1c">+4</text><text x="570" y="152" fill="#b91c1c">+5</text>
</g>
<text x="170" y="60" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">← NEGATIVI</text>
<text x="470" y="60" font-size="18" text-anchor="middle" fill="#b91c1c" font-weight="bold">POSITIVI →</text>
<text x="320" y="60" font-size="16" text-anchor="middle" fill="#1f2937">origine</text>
<path d="M270,90 Q320,40 370,90" fill="none" stroke="#16a34a" stroke-width="3" stroke-dasharray="6 4"/>
<text x="320" y="196" font-size="15" text-anchor="middle" fill="#15803d">−1 e +1 sono opposti: stessa distanza da 0, dalla parte opposta</text>
</svg>`,
      caption: "A destra dello zero i positivi, a sinistra i negativi. Più vai a destra, più il numero è grande."
    },
    {
      type: "text",
      title: "Confrontare i numeri relativi",
      html: `<p>Sulla retta, <b>un numero è maggiore di tutti quelli che stanno alla sua sinistra</b>.</p>
<ul>
<li>Ogni positivo è maggiore di zero e di ogni negativo: <b>+1 &gt; −100</b>.</li>
<li>Tra due negativi è <b>maggiore quello più vicino allo zero</b>: <b>−2 &gt; −7</b>. (Pensa alla temperatura: −2 °C è meno freddo di −7 °C!)</li>
</ul>
<p>Il <b>valore assoluto</b> di un numero è la sua <b>distanza dallo zero</b>, senza segno. Si scrive tra due sbarrette: |−7| = 7, |+7| = 7.</p>
<p>Due numeri con lo stesso valore assoluto e segno diverso sono <b>opposti</b>: +4 e −4. La loro somma fa <b>zero</b>.</p>`
    },
    {
      type: "widget",
      title: "Esplora la retta",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-6, 4] },
      caption: "Fai i salti sulla retta: verso destra aggiungi, verso sinistra togli. Da −6 a +4 quanti salti servono? (10)"
    },
    {
      type: "example",
      title: "Esempio pratico: il termometro",
      html: `<p>Alle 7 del mattino, a Cortina, il termometro segna <b>−4 °C</b>. A mezzogiorno la temperatura è <b>salita di 9 gradi</b>. Quanti gradi ci sono?</p>
<p>Parto da −4 e salgo di 9: −4 + 9 = <b>+5 °C</b>.</p>
<p>Sulla retta: da −4 faccio 4 salti per arrivare a 0, poi altri 5 salti fino a +5. In tutto 4 + 5 = 9 salti. ✅</p>
<p>Di notte scende di 7 gradi: +5 − 7 = <b>−2 °C</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'ascensore del grattacielo",
      html: `<p>In un palazzo il piano terra è lo <b>0</b>, i garage sono ai piani <b>−1</b> e <b>−2</b>.</p>
<ul>
<li>Luca è al piano +3 e scende al garage −2: quanti piani fa? Da +3 a 0 sono 3 piani, da 0 a −2 altri 2: in tutto <b>5 piani</b>.</li>
<li>In Italia, in Europa, il piano terra è lo 0 e il \"primo piano\" è quello sopra. Negli <b>Stati Uniti</b> invece il piano terra si chiama spesso <b>1st floor</b>! Ecco perché è importante sapere dov'è lo zero: i numeri sono <b>relativi</b> al punto di riferimento.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: leggere e confrontare",
      questions: [
        { type: "mc", q: "Quale numero è maggiore?", options: ["−8", "−3", "−5"], answer: 1, explain: "Tra i negativi è maggiore quello più vicino a zero: −3." },
        { type: "tf", q: "Lo zero è un numero positivo.", answer: false, explain: "Lo zero non è né positivo né negativo." },
        { type: "num", q: "Qual è l'opposto di +6?", answer: -6, explain: "Stessa distanza da zero, segno opposto: −6." },
        { type: "num", q: "Quanto vale |−12| (valore assoluto)?", answer: 12, explain: "Il valore assoluto è la distanza da zero: 12." }
      ]
    },
    {
      type: "text",
      title: "Primi calcoli: salire e scendere",
      html: `<p>Possiamo già fare semplici addizioni e sottrazioni pensando alla <b>retta</b> (o al termometro):</p>
<ul>
<li><b>Aggiungere</b> un numero positivo = <b>salire</b> / andare a destra: −3 + 5 = +2.</li>
<li><b>Togliere</b> un numero positivo = <b>scendere</b> / andare a sinistra: 2 − 6 = −4.</li>
<li><b>Sommare due negativi</b>: è come avere due debiti, il debito cresce! (−3) + (−4) = −7.</li>
<li>Sommare due <b>opposti</b> dà sempre zero: (+5) + (−5) = 0.</li>
</ul>
<p><b>Regola per sommare</b> due numeri relativi:</p>
<ol>
<li>se hanno lo <b>stesso segno</b>: sommi i valori assoluti e tieni il segno. (+3)+(+4)=+7; (−3)+(−4)=−7.</li>
<li>se hanno <b>segno diverso</b>: fai la differenza dei valori assoluti e prendi il segno del numero \"più lontano da zero\". (−9)+(+4) = −5; (+9)+(−4) = +5.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il freddo dei record",
      html: `<p>La temperatura più bassa mai misurata con strumenti sulla Terra è <b>−89,2 °C</b>, alla stazione russa <b>Vostok</b> in Antartide, il 21 luglio 1983. In Italia si sono registrati valori intorno ai <b>−50 °C</b> in conche delle Dolomiti come la Busa Fradusta (Pale di San Martino). E nello spazio? La temperatura più bassa possibile, lo <b>zero assoluto</b>, è <b>−273,15 °C</b>: niente può essere più freddo!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Sotto il livello del mare",
      html: `<p>Anche le <b>altitudini</b> sono numeri relativi, misurati rispetto al <b>livello del mare</b> (lo zero). L'Everest è a <b>+8.849 m</b>; la riva del <b>Mar Morto</b> è il punto più basso sulla terraferma, a circa <b>−430 m</b> (e scende ogni anno). La <b>Fossa delle Marianne</b>, nell'Oceano Pacifico, arriva a quasi <b>−11.000 m</b>! In Italia, alcune zone vicino a Ferrara e Venezia sono qualche metro <b>sotto</b> il livello del mare.</p>`
    },
    {
      type: "svg",
      title: "Dall'Everest alla Fossa delle Marianne",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="160" fill="#e0f2fe"/>
<rect y="160" width="640" height="160" fill="#1e3a8a"/>
<polygon points="40,160 160,40 280,160" fill="#78716c"/>
<polygon points="140,60 160,40 180,60" fill="#ffffff"/>
<polygon points="380,160 470,300 560,160" fill="#0f172a"/>
<line x1="0" y1="160" x2="640" y2="160" stroke="#0284c7" stroke-width="4"/>
<text x="600" y="152" font-size="16" text-anchor="end" fill="#0369a1" font-weight="bold">0 m livello del mare</text>
<text x="160" y="30" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Everest +8849 m</text>
<text x="330" y="150" font-size="15" text-anchor="middle" fill="#1f2937">Mar Morto −430 m</text>
<circle cx="330" cy="164" r="6" fill="#facc15"/>
<text x="470" y="200" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Fossa delle Marianne</text>
<text x="470" y="222" font-size="15" text-anchor="middle" fill="#ffffff">circa −11 000 m</text>
<text x="110" y="250" font-size="16" fill="#bfdbfe">sotto zero → negativi</text>
<text x="110" y="100" font-size="16" fill="#1f2937">sopra zero → positivi</text>
</svg>`,
      caption: "Le altezze sopra il livello del mare sono positive, le profondità sotto sono negative (disegno non in scala)."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Numeri <b>relativi</b> = positivi (+), negativi (−) e zero.</li>
<li>Sulla retta, più a <b>destra</b> = più <b>grande</b>. Tra negativi vince quello più vicino a 0.</li>
<li><b>Valore assoluto</b> = distanza da 0. <b>Opposti</b>: stessa distanza, segno diverso; sommati danno 0.</li>
<li>Stesso segno: sommo e tengo il segno. Segno diverso: sottraggo e prendo il segno del \"più forte\".</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i numeri negativi",
      intro: "I numeri negativi sono stati difficili anche per i grandi matematici! Prova a capirli con i soldi, i gettoni colorati, i bastoncini cinesi o l'ascensore 3D.",
      tabs: [
        {
          label: "💰 Soldi e debiti",
          html: `<p>Pensa ai numeri positivi come ai <b>soldi che hai</b> e ai negativi come ai <b>debiti</b> (soldi che devi restituire).</p>
<ul>
<li>Hai 10 € e ne devi 4 a tua sorella: 10 + (−4) = <b>6 €</b> davvero tuoi.</li>
<li>Hai 3 € ma devi 8 €: 3 + (−8) = <b>−5</b>: sei ancora in debito di 5 €.</li>
<li>Due debiti si sommano: (−5) + (−2) = <b>−7</b>: devi 7 €.</li>
</ul>
<p>Fu proprio così che il matematico indiano <b>Brahmagupta</b>, nel <b>628 d.C.</b>, spiegò le regole dei numeri negativi: \"beni\" e \"debiti\"!</p>`
        },
        {
          label: "🔴🔵 I gettoni",
          html: `<p>Usa <b>gettoni rossi</b> (+1) e <b>gettoni blu</b> (−1). Un rosso e un blu insieme si <b>annullano</b>: fanno zero (si chiama \"coppia zero\").</p>
<p>Esempio: (+5) + (−3). Metti 5 rossi e 3 blu, togli le coppie zero: restano <b>2 rossi</b> → <b>+2</b>.</p>
<p>Questo metodo si usa molto nelle scuole di Singapore e dei Paesi anglosassoni (\"zero pairs\").</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fafafa"/>
<g stroke="#1f2937" stroke-width="2">
<circle cx="60" cy="70" r="24" fill="#ef4444"/><circle cx="120" cy="70" r="24" fill="#ef4444"/><circle cx="180" cy="70" r="24" fill="#ef4444"/><circle cx="240" cy="70" r="24" fill="#ef4444"/><circle cx="300" cy="70" r="24" fill="#ef4444"/>
<circle cx="60" cy="140" r="24" fill="#3b82f6"/><circle cx="120" cy="140" r="24" fill="#3b82f6"/><circle cx="180" cy="140" r="24" fill="#3b82f6"/>
</g>
<g font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">
<text x="60" y="78">+</text><text x="120" y="78">+</text><text x="180" y="78">+</text><text x="240" y="78">+</text><text x="300" y="78">+</text>
<text x="60" y="148">−</text><text x="120" y="148">−</text><text x="180" y="148">−</text>
</g>
<rect x="30" y="40" width="180" height="130" rx="14" fill="none" stroke="#16a34a" stroke-width="4" stroke-dasharray="8 6"/>
<text x="120" y="200" font-size="16" text-anchor="middle" fill="#15803d">3 coppie zero = 0</text>
<text x="450" y="90" font-size="22" text-anchor="middle" fill="#1f2937">(+5) + (−3)</text>
<text x="450" y="140" font-size="30" text-anchor="middle" fill="#dc2626" font-weight="bold">= +2</text>
</svg>`
        },
        {
          label: "🇨🇳 I bastoncini cinesi",
          html: `<p>Più di 2000 anni fa, nel libro cinese <b>«I nove capitoli sull'arte matematica»</b>, i calcolatori usavano dei <b>bastoncini</b>: quelli <b>rossi</b> per i numeri positivi e quelli <b>neri</b> per i negativi. Avevano già regole per sommarli e sottrarli!</p>
<p>Curioso: oggi in contabilità si dice ancora \"essere <b>in rosso</b>\" per dire \"avere un debito\". In Cina però i colori erano al contrario: il rosso era positivo!</p>
<p>In Europa, invece, molti matematici considerarono i numeri negativi \"assurdi\" o \"falsi\" fino al <b>Cinquecento–Seicento</b>.</p>`
        },
        {
          label: "🧊 Il grattacielo 3D",
          html: `<p>Immagina questo modello di cubetti come un <b>grattacielo</b> visto di lato: ogni cubetto è un piano. Il livello della strada è lo <b>0</b>. I piani sopra la strada sono positivi, quelli scavati sotto (garage, cantine) negativi.</p>
<p>Se il palazzo ha 4 piani sopra e 2 sotto, dal garage più basso (−2) all'ultimo piano (+4) ci sono 4 − (−2) = <b>6 piani</b> di differenza. Usa i cursori per costruire torri diverse e conta i piani!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 6, b: 1 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei numeri relativi",
      nodes: [
        { id: "naturali", label: "Numeri naturali", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3… i numeri per contare.", why: "Sono i primi numeri inventati dall'uomo, per contare oggetti. Ma con loro non sempre si può sottrarre: 3 − 5 non ha risultato tra i naturali!" },
        { id: "relativi", label: "Numeri relativi", x: 50, y: 28, color: "#2563eb", html: "Positivi, negativi e zero: …, −2, −1, 0, +1, +2, …", why: "Sono stati \"inventati\" per poter sempre fare la sottrazione e per misurare grandezze che hanno due versi (sopra/sotto, guadagno/perdita, caldo/freddo)." },
        { id: "zero", label: "Lo zero", x: 18, y: 28, color: "#1f2937", html: "Il punto di riferimento: né positivo né negativo.", why: "Lo zero come numero vero e proprio fu definito in India: <b>Brahmagupta</b> (628 d.C.) scrisse le regole per calcolare con zero e negativi. Arrivò in Europa con i numeri indo-arabi, grazie anche a Fibonacci (1202)." },
        { id: "positivi", label: "Positivi", x: 82, y: 50, color: "#dc2626", html: "Maggiori di zero: +1, +2, …", why: "Corrispondono ai numeri naturali (tranne lo 0): per questo il segno + si può anche omettere." },
        { id: "negativi", label: "Negativi", x: 18, y: 50, color: "#3b82f6", html: "Minori di zero: −1, −2, …", why: "Usati in Cina oltre 2000 anni fa (bastoncini neri) e in India come \"debiti\". In Europa furono accettati pienamente solo tra Cinquecento e Seicento." },
        { id: "retta", label: "Retta dei numeri", x: 50, y: 56, color: "#16a34a", html: "Linea su cui ogni numero ha il suo posto: a destra i positivi, a sinistra i negativi.", why: "Mettere i numeri su una linea, con lo zero al centro, si diffuse con la geometria analitica di <b>Cartesio</b> (1637): così i negativi diventano semplici \"punti dall'altra parte\"." },
        { id: "assoluto", label: "Valore assoluto", x: 25, y: 80, color: "#a855f7", html: "La distanza di un numero da zero: |−5| = 5.", why: "Una distanza non può essere negativa: per questo il valore assoluto non ha segno. Il simbolo |x| fu introdotto dal matematico tedesco <b>Karl Weierstrass</b> nel 1841." },
        { id: "opposti", label: "Numeri opposti", x: 55, y: 80, color: "#f97316", html: "Stesso valore assoluto, segno diverso: +3 e −3. Sommati danno 0.", why: "Sono simmetrici rispetto allo zero sulla retta, come un oggetto e la sua immagine allo specchio." },
        { id: "usi", label: "Usi nella vita", x: 85, y: 80, color: "#14b8a6", html: "Temperature, altitudini, piani, conti in banca, anni a.C./d.C., punteggi.", why: "Ogni volta che una grandezza ha un punto di riferimento e due direzioni possibili, i numeri relativi sono lo strumento perfetto." }
      ],
      edges: [
        ["naturali", "relativi", "si estendono in"],
        ["relativi", "zero", "riferimento"],
        ["relativi", "positivi", "comprende"],
        ["relativi", "negativi", "comprende"],
        ["relativi", "retta", "si rappresentano sulla"],
        ["retta", "assoluto", "distanza da 0"],
        ["retta", "opposti", "simmetrici"],
        ["positivi", "usi", "servono per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: sommare i relativi",
      questions: [
        { type: "num", q: "(−6) + (+10) = ?", answer: 4, explain: "Segni diversi: 10 − 6 = 4, prevale il positivo: +4." },
        { type: "num", q: "(−4) + (−5) = ?", answer: -9, explain: "Stesso segno: 4 + 5 = 9, segno meno: −9." },
        { type: "num", q: "La temperatura è −2 °C e scende di 3 gradi. Quanti gradi segna il termometro?", answer: -5, unit: "°C", explain: "−2 − 3 = −5 °C." }
      ]
    }
  ],
  glossary: [
    { t: "Numeri relativi", d: "Insieme dei numeri positivi, dei numeri negativi e dello zero." },
    { t: "Numero positivo", d: "Numero maggiore di zero, con segno + (es. +7)." },
    { t: "Numero negativo", d: "Numero minore di zero, sempre con segno − (es. −7)." },
    { t: "Origine", d: "Il punto della retta che corrisponde allo zero." },
    { t: "Valore assoluto", d: "Distanza di un numero dallo zero, senza segno: |−7| = 7." },
    { t: "Numeri opposti", d: "Numeri con lo stesso valore assoluto e segno diverso (+4 e −4)." },
    { t: "Livello del mare", d: "Lo zero da cui si misurano altitudini (+) e profondità (−)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale numero è minore?", options: ["−1", "0", "−10"], answer: 2, explain: "−10 è il più lontano da zero verso sinistra: è il minore." },
      { type: "tf", q: "−5 è maggiore di −2.", answer: false, explain: "−2 è più vicino a zero: −2 > −5." },
      { type: "order", q: "Ordina dal più piccolo al più grande.", items: ["−7", "−3", "0", "+2", "+5"], explain: "Sulla retta da sinistra a destra: −7, −3, 0, +2, +5." },
      { type: "num", q: "Il termometro segna +3 °C, poi la temperatura scende di 8 gradi. Che temperatura c'è?", answer: -5, unit: "°C", explain: "3 − 8 = −5 °C." },
      { type: "num", q: "Sei al piano −2 e sali di 5 piani. A che piano arrivi?", answer: 3, explain: "−2 + 5 = +3." },
      { type: "num", q: "Quanto vale |−15|?", answer: 15, explain: "Il valore assoluto è la distanza da zero: 15." },
      { type: "mc", q: "Qual è l'opposto di −9?", options: ["+9", "−9", "0"], answer: 0, explain: "L'opposto ha lo stesso valore assoluto e segno contrario: +9." },
      { type: "num", q: "(+7) + (−7) = ?", answer: 0, explain: "La somma di due opposti è zero." },
      { type: "mc", q: "Quale matematico indiano scrisse nel 628 d.C. le regole per lo zero e i negativi?", options: ["Pitagora", "Brahmagupta", "Archimede"], answer: 1, explain: "Brahmagupta, nel Brahmasphutasiddhanta." },
      { type: "tf", q: "Lo zero è un numero negativo.", answer: false, explain: "Lo zero non è né positivo né negativo." },
      { type: "num", q: "Di giorno ci sono +6 °C, di notte −4 °C. Di quanti gradi è scesa la temperatura?", answer: 10, unit: "°C", explain: "Da +6 a 0 sono 6 gradi, da 0 a −4 altri 4: 10 gradi." }
    ],
    gen: [["intAdd", 3]]
  }
});

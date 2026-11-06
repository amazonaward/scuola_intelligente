TOPIC('it', {
  id: "p2-mat-divisione-intro",
  title: "La divisione: distribuire",
  intro: "Hai delle caramelle 🍬 e degli amici: come fai a darne <b>lo stesso numero</b> a tutti? Con la <b>divisione</b>! Dividere vuol dire fare <b>parti uguali</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Dividere = fare parti uguali",
      html: `<p>Hai <b>12 caramelle</b> 🍬 e <b>3 amici</b> 👧👦🧒.</p>
<p>Le dai <b>una a testa</b>, giro dopo giro, finché finiscono:</p>
<ol>
<li>1° giro: 1 caramella a ciascuno.</li>
<li>2° giro: un'altra a ciascuno.</li>
<li>… continui così …</li>
<li>Alla fine ogni amico ha <b>4 caramelle</b>. Nessuno è più fortunato!</li>
</ol>
<p>Si scrive: <b>12 : 3 = 4</b>. Il segno <b>:</b> si legge «<b>diviso</b>».</p>`
    },
    {
      type: "svg",
      title: "12 caramelle in 3 piatti",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<text x="300" y="38" font-size="26" text-anchor="middle" font-weight="bold" fill="#86198f">12 : 3 = 4</text>
<ellipse cx="110" cy="190" rx="85" ry="38" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<ellipse cx="300" cy="190" rx="85" ry="38" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<ellipse cx="490" cy="190" rx="85" ry="38" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<g fill="#f43f5e" stroke="#9f1239" stroke-width="2">
<circle cx="75" cy="180" r="14"/><circle cx="100" cy="195" r="14"/><circle cx="125" cy="180" r="14"/><circle cx="150" cy="195" r="14"/>
<circle cx="265" cy="180" r="14"/><circle cx="290" cy="195" r="14"/><circle cx="315" cy="180" r="14"/><circle cx="340" cy="195" r="14"/>
<circle cx="455" cy="180" r="14"/><circle cx="480" cy="195" r="14"/><circle cx="505" cy="180" r="14"/><circle cx="530" cy="195" r="14"/>
</g>
<text x="110" y="110" font-size="40" text-anchor="middle">👧</text>
<text x="300" y="110" font-size="40" text-anchor="middle">👦</text>
<text x="490" y="110" font-size="40" text-anchor="middle">🧒</text>
<text x="110" y="270" font-size="20" text-anchor="middle" fill="#be185d" font-weight="bold">4</text>
<text x="300" y="270" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">4</text>
<text x="490" y="270" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">4</text>
</svg>`,
      caption: "Tre piatti, quattro caramelle in ogni piatto: le parti sono tutte uguali."
    },
    {
      type: "remember",
      title: "I nomi della divisione",
      html: `<p><b>12 : 3 = 4</b></p>
<ul>
<li><b>12</b> è il <b>dividendo</b>: quello che dividi (le caramelle).</li>
<li><b>3</b> è il <b>divisore</b>: in quante parti dividi (gli amici).</li>
<li><b>4</b> è il <b>quoziente</b>: il risultato (quante caramelle a testa).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Prova tu: metti e togli le caramelle",
      widget: "counter",
      options: { emoji: "🍬", max: 20 },
      caption: "Metti 12 caramelle. Ora prova a dividerle in 2, in 3, in 4 gruppi uguali. Funziona sempre? Con 5 gruppi no: ne avanzano 2!"
    },
    {
      type: "example",
      title: "Esempio: le figurine ⚽",
      html: `<p>Luca ha <b>10 figurine</b> doppie e vuole regalarle a <b>2 amici</b> in parti uguali.</p>
<p>10 : 2 = <b>5</b>. Ogni amico riceve 5 figurine.</p>
<p>Controllo: 5 + 5 = 10 ✅</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: distribuire",
      questions: [
        { type: "num", q: "8 biscotti 🍪 per 2 bambini. Quanti biscotti a testa?", answer: 4, explain: "8 : 2 = 4, perché 4 + 4 = 8." },
        { type: "mc", q: "Come si chiama il risultato della divisione?", options: ["Prodotto", "Quoziente", "Somma"], answer: 1, explain: "Il risultato della divisione è il quoziente." },
        { type: "tf", q: "Dividere vuol dire fare parti uguali.", answer: true, explain: "Sì: ogni parte deve avere lo stesso numero di oggetti." }
      ]
    },
    {
      type: "text",
      title: "Due modi di dividere",
      html: `<p>La divisione serve per <b>due tipi</b> di domande:</p>
<ul>
<li>🍬 <b>Distribuire</b> (ripartizione): «Ho 12 caramelle e 3 amici. <b>Quante a testa?</b>» → 12 : 3 = 4.</li>
<li>📦 <b>Raggruppare</b> (contenenza): «Ho 12 uova e le metto in scatole da 6. <b>Quante scatole?</b>» → 12 : 6 = 2.</li>
</ul>
<p>In tutti e due i casi l'operazione è la stessa: la <b>divisione</b>!</p>`
    },
    {
      type: "example",
      title: "Esempio: le uova nelle scatole 🥚",
      html: `<p>La nonna ha raccolto <b>18 uova</b>. Ogni scatola ne contiene <b>6</b>.</p>
<p>Riempie una scatola (restano 12), poi un'altra (restano 6), poi un'altra (restano 0).</p>
<p>18 : 6 = <b>3 scatole</b> 📦📦📦.</p>`
    },
    {
      type: "text",
      title: "La divisione e le tabelline",
      html: `<p>La divisione è l'operazione <b>contraria</b> (inversa) della moltiplicazione.</p>
<p>Se sai che <b>3 × 4 = 12</b>, allora sai anche che:</p>
<ul>
<li><b>12 : 3 = 4</b></li>
<li><b>12 : 4 = 3</b></li>
</ul>
<p>Per dividere, chiediti: «<b>quale numero</b>, moltiplicato per il divisore, mi dà il dividendo?»</p>
<p>Esempio: 20 : 5 = ? → 5 × <b>4</b> = 20 → quindi 20 : 5 = <b>4</b>.</p>`
    },
    {
      type: "3d",
      title: "Lo schieramento in 3D",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "12 cubetti in 3 righe da 4. Se li guardi per righe: 12 : 3 = 4. Se li guardi per colonne: 12 : 4 = 3. Cambia i numeri con i cursori!"
    },
    {
      type: "widget",
      title: "Abbina la divisione alla moltiplicazione",
      widget: "match",
      options: {
        pairs: [
          ["10 : 2 = 5", "2 × 5 = 10"],
          ["15 : 3 = 5", "3 × 5 = 15"],
          ["16 : 4 = 4", "4 × 4 = 16"],
          ["14 : 7 = 2", "7 × 2 = 14"],
          ["30 : 10 = 3", "10 × 3 = 30"]
        ]
      },
      caption: "Ogni divisione ha la sua moltiplicazione «gemella»."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Avanza qualcosa!",
      html: `<p>Non sempre si riesce a fare parti uguali. 7 caramelle per 2 bambini: 3 a testa e ne <b>avanza 1</b>! 🍬</p>
<p>Quello che avanza si chiama <b>resto</b>. Lo studierai bene in terza. Per ora ricorda: se avanza qualcosa, la divisione «non è esatta».</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Mai dividere per zero!",
      html: `<p>Prova a dividere 6 caramelle tra <b>0 amici</b>… non c'è nessuno a cui darle! 🤷</p>
<p>Per questo in matematica <b>non si può dividere per 0</b>. Anche la calcolatrice, se ci provi, ti dà «Errore»!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la divisione",
      intro: "Se distribuire le caramelle non ti basta, prova queste altre strade.",
      tabs: [
        {
          label: "🐸 Salti all'indietro",
          html: `<p>Una ranocchia parte da <b>12</b> e fa salti indietro da <b>3</b>: 12 → 9 → 6 → 3 → 0.</p>
<p>Quanti salti ha fatto per arrivare a 0? <b>4 salti</b>! Quindi 12 : 3 = 4.</p>
<p>Dividere vuol dire anche <b>togliere sempre lo stesso numero</b> finché si arriva a zero (sottrazione ripetuta).</p>`,
          widget: "numberLine",
          options: { min: 0, max: 12, step: 3, marks: [0, 3, 6, 9, 12] }
        },
        {
          label: "🇬🇧 Il segno ÷",
          html: `<p>In Italia scriviamo <b>12 : 3</b>. In Inghilterra e negli Stati Uniti a scuola scrivono <b>12 ÷ 3</b> (il segno si chiama «obelus»). Al computer e sulle calcolatrici si usa spesso la barra <b>12 / 3</b>.</p>
<p>Sono tutti modi diversi di scrivere la <b>stessa</b> cosa: 4!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#eff6ff"/>
<text x="110" y="90" font-size="44" text-anchor="middle" font-weight="bold" fill="#16a34a">12 : 3</text>
<text x="300" y="90" font-size="44" text-anchor="middle" font-weight="bold" fill="#dc2626">12 ÷ 3</text>
<text x="490" y="90" font-size="44" text-anchor="middle" font-weight="bold" fill="#2563eb">12 / 3</text>
<text x="110" y="140" font-size="18" text-anchor="middle" fill="#334155">🇮🇹 Italia</text>
<text x="300" y="140" font-size="18" text-anchor="middle" fill="#334155">🇬🇧 🇺🇸 inglese</text>
<text x="490" y="140" font-size="18" text-anchor="middle" fill="#334155">💻 computer</text>
<text x="300" y="185" font-size="22" text-anchor="middle" fill="#0f172a">tutti fanno 4</text>
</svg>`
        },
        {
          label: "🍕 La pizza",
          html: `<p>Pensa a una pizza tagliata in <b>8 fette</b> 🍕 per <b>4 persone</b>.</p>
<p>Si passa il piatto: una fetta a te, una a mamma, una a papà, una al fratellino… e poi un altro giro. Ognuno ha <b>2 fette</b>: 8 : 4 = 2.</p>
<p>Se arriva un ospite in più (5 persone) la pizza non si divide bene: è per questo che il numero di fette conta!</p>`
        },
        {
          label: "🧊 Cubetti da dividere",
          html: `<p>Costruisci con i cubetti un rettangolo da <b>2 righe</b> e <b>5 colonne</b>: sono 10 cubetti.</p>
<p>Quante righe? 2. Quanti cubetti in ogni riga? 5. Quindi <b>10 : 2 = 5</b>. Gira il modello e cambia i numeri.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 5 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della divisione: tocca i nodi e scopri il perché",
      nodes: [
        { id: "parti", label: "Parti uguali", x: 50, y: 8, color: "#a855f7", html: "Dividere è distribuire in modo che ognuno abbia lo stesso numero.", why: "È un'idea antichissima: pastori, contadini e mercanti dovevano dividere raccolti, animali e pani in modo giusto. Nel <b>papiro di Rhind</b>, scritto in Egitto circa 3500 anni fa, c'è già un problema che chiede di dividere 10 pani tra 10 persone." },
        { id: "ripartizione", label: "Distribuire", x: 20, y: 32, color: "#ec4899", html: "So in quante parti dividere: trovo quanto c'è in ogni parte.", why: "È la situazione più naturale: si dà «uno a te, uno a me» finché le cose finiscono. Anche i bambini piccolissimi lo fanno quando giocano a carte!" },
        { id: "contenenza", label: "Raggruppare", x: 80, y: 32, color: "#f97316", html: "So quanto ci va in ogni gruppo: trovo quanti gruppi.", why: "Serve per riempire scatole, formare squadre, fare mazzi di fiori. È la stessa operazione vista dall'altra parte." },
        { id: "sottrazione", label: "Sottrazione ripetuta", x: 15, y: 62, color: "#0ea5e9", html: "Togli sempre lo stesso numero finché arrivi a 0.", why: "Così come la moltiplicazione è un'addizione ripetuta, la divisione è una sottrazione ripetuta: conti quante volte riesci a togliere il divisore." },
        { id: "moltiplicazione", label: "Moltiplicazione", x: 50, y: 50, color: "#16a34a", html: "La divisione è l'operazione inversa della moltiplicazione.", why: "Se 3 × 4 = 12, allora 12 : 3 = 4. Per questo chi sa bene le <b>tabelline</b> fa le divisioni in un attimo." },
        { id: "nomi", label: "Dividendo, divisore, quoziente", x: 85, y: 62, color: "#64748b", html: "I nomi dei numeri della divisione.", why: "Vengono dal latino: <i>dividendum</i> = «ciò che va diviso»; <i>quotiens</i> = «quante volte». Il segno «:» lo rese famoso il matematico tedesco <b>Leibniz</b> nel 1684; il segno «÷» lo usò per primo lo svizzero <b>Johann Rahn</b> nel 1659." },
        { id: "resto", label: "Il resto", x: 30, y: 90, color: "#eab308", html: "Quello che avanza quando non si riesce a fare parti uguali.", why: "Non tutti i numeri si dividono bene: 7 caramelle per 2 bambini ne lascia 1. Il resto è sempre più piccolo del divisore (se no potresti fare un altro giro!)." },
        { id: "zero", label: "Niente divisione per 0", x: 70, y: 90, color: "#ef4444", html: "Non si può dividere per zero.", why: "Nessun numero moltiplicato per 0 dà 6: quindi 6 : 0 non ha risposta. Anche il calcolatore più potente del mondo risponde «errore»." }
      ],
      edges: [
        ["parti", "ripartizione", "quante a testa?"],
        ["parti", "contenenza", "quanti gruppi?"],
        ["ripartizione", "moltiplicazione", "si controlla con"],
        ["contenenza", "moltiplicazione", "si controlla con"],
        ["sottrazione", "moltiplicazione", "come l'addizione ripetuta"],
        ["ripartizione", "sottrazione", "un giro alla volta"],
        ["moltiplicazione", "nomi", "ha i suoi"],
        ["sottrazione", "resto", "a volte avanza il"],
        ["nomi", "zero", "il divisore non è mai"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: divisioni e tabelline",
      questions: [
        { type: "num", q: "20 : 5 = ?", answer: 4, explain: "5 × 4 = 20, quindi 20 : 5 = 4." },
        { type: "num", q: "Ho 15 palline e faccio gruppi da 3. Quanti gruppi?", answer: 5, explain: "15 : 3 = 5, perché 3 × 5 = 15." },
        { type: "mc", q: "Quale moltiplicazione aiuta a fare 18 : 2?", options: ["2 × 9 = 18", "2 × 8 = 16", "3 × 6 = 18"], answer: 0, explain: "Il divisore è 2: 2 × 9 = 18, quindi 18 : 2 = 9." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Dividere</b> = fare <b>parti uguali</b>.</li>
<li>Si scrive con il segno <b>:</b> e si legge «diviso».</li>
<li>dividendo : divisore = <b>quoziente</b>.</li>
<li>Per controllare: quoziente × divisore = dividendo.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Divisione", d: "Operazione che serve a fare parti uguali." },
    { t: "Dividendo", d: "Il numero che viene diviso (il primo)." },
    { t: "Divisore", d: "Il numero per cui si divide: in quante parti, o quanto in ogni gruppo." },
    { t: "Quoziente", d: "Il risultato della divisione." },
    { t: "Resto", d: "Quello che avanza quando non si riescono a fare parti uguali." },
    { t: "Ripartizione", d: "Distribuire tra un certo numero di persone: quanto a testa?" },
    { t: "Contenenza", d: "Fare gruppi di una certa grandezza: quanti gruppi?" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "6 mele 🍎 per 3 bambini. Quante mele a testa?", answer: 2, explain: "6 : 3 = 2, perché 3 × 2 = 6." },
      { type: "num", q: "10 : 2 = ?", answer: 5, explain: "2 × 5 = 10." },
      { type: "num", q: "24 : 4 = ?", answer: 6, explain: "4 × 6 = 24." },
      { type: "mc", q: "Il segno «:» si legge…", options: ["per", "diviso", "meno"], answer: 1, explain: "«:» si legge «diviso»." },
      { type: "mc", q: "In 12 : 3 = 4, qual è il dividendo?", options: ["12", "3", "4"], answer: 0, explain: "Il dividendo è il numero che viene diviso: 12." },
      { type: "tf", q: "Per controllare 15 : 5 = 3 posso fare 3 × 5.", answer: true, explain: "3 × 5 = 15: la divisione è giusta." },
      { type: "tf", q: "Si può dividere un numero per 0.", answer: false, explain: "Non si può dividere per zero: non ci sarebbe nessuno a cui dare le cose!" },
      { type: "num", q: "Ho 16 calzini 🧦 e li metto in coppie. Quante coppie?", answer: 8, explain: "Una coppia = 2 calzini: 16 : 2 = 8." },
      { type: "text", q: "Come si chiama il risultato della divisione?", answer: ["quoziente", "il quoziente"], explain: "Il risultato della divisione è il quoziente." },
      { type: "order", q: "Metti in ordine i salti all'indietro per fare 12 : 4.", items: ["12", "8", "4", "0"], explain: "Da 12 tolgo 4 tre volte: 12, 8, 4, 0. Sono 3 salti, quindi 12 : 4 = 3." },
      { type: "mc", q: "7 caramelle per 2 bambini: quante ne avanzano?", options: ["0", "1", "2"], answer: 1, explain: "3 a testa fanno 6: ne avanza 1 (il resto)." }
    ],
    gen: [["divExact", 3]]
  }
});

TOPIC('it', {
  id: "p1-mat-addizioni-20",
  title: "Le addizioni entro il 20",
  intro: "Hai 3 palloncini 🎈 e la nonna te ne regala altri 2: quanti ne hai? Per scoprirlo facciamo un'<b>addizione</b> ➕. Impariamo ad <b>aggiungere</b>, <b>mettere insieme</b> e <b>contare avanti</b> fino al 20.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Aggiungere e mettere insieme",
      html: `<p>Fare un'<b>addizione</b> vuol dire:</p>
<ul>
<li><b>aggiungere</b>: ho 3 palloncini, ne arrivano 2 → 🎈🎈🎈 + 🎈🎈</li>
<li><b>mettere insieme</b>: 4 mele rosse e 3 mele verdi nello stesso cesto → 🍎🍎🍎🍎 + 🍏🍏🍏</li>
</ul>
<p>Alla fine contiamo <b>tutto</b>: 3 + 2 = <b>5</b> palloncini, 4 + 3 = <b>7</b> mele.</p>
<p>Il segno dell'addizione è <b>+</b> e si legge "<b>più</b>". Il segno <b>=</b> si legge "<b>uguale</b>".</p>`
    },
    {
      type: "svg",
      title: "Le parti dell'addizione",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fff7ed"/>
<g font-size="40" text-anchor="middle">
<text x="80" y="90">🎈</text><text x="130" y="90">🎈</text><text x="180" y="90">🎈</text>
<text x="300" y="90">🎈</text><text x="350" y="90">🎈</text>
</g>
<text x="240" y="85" font-size="40" font-weight="bold" fill="#1f2937" text-anchor="middle">+</text>
<text x="130" y="175" font-size="72" font-weight="bold" fill="#dc2626" text-anchor="middle">3</text>
<text x="240" y="175" font-size="72" font-weight="bold" fill="#1f2937" text-anchor="middle">+</text>
<text x="325" y="175" font-size="72" font-weight="bold" fill="#2563eb" text-anchor="middle">2</text>
<text x="415" y="175" font-size="72" font-weight="bold" fill="#1f2937" text-anchor="middle">=</text>
<text x="510" y="175" font-size="72" font-weight="bold" fill="#16a34a" text-anchor="middle">5</text>
<text x="130" y="225" font-size="22" fill="#dc2626" text-anchor="middle">addendo</text>
<text x="325" y="225" font-size="22" fill="#2563eb" text-anchor="middle">addendo</text>
<text x="510" y="225" font-size="22" fill="#16a34a" text-anchor="middle">somma</text>
<text x="300" y="265" font-size="18" fill="#1f2937" text-anchor="middle">I numeri che aggiungo sono gli addendi, il risultato è la somma.</text>
</svg>`,
      caption: "3 + 2 = 5: tre più due uguale cinque."
    },
    {
      type: "text",
      title: "Contare avanti",
      html: `<p>Un modo veloce per fare le addizioni: <b>parti dal numero più grande</b> e <b>conta avanti</b> tante volte quanto dice l'altro numero.</p>
<p><b>8 + 3</b> → parto da 8 e conto avanti 3: <b>9, 10, 11</b>. Risultato: <b>11</b>! ☝️☝️☝️</p>
<p>Puoi aiutarti con le dita o con la <b>retta dei numeri</b>: ogni salto in avanti vale 1.</p>`
    },
    {
      type: "widget",
      title: "Salti sulla retta: 8 + 3",
      widget: "numberLine",
      options: { min: 0, max: 20, step: 1, marks: [8, 11] },
      caption: "Parti dall'8 e fai 3 salti in avanti: arrivi all'11."
    },
    {
      type: "quiz",
      title: "Mini-quiz: prime addizioni",
      questions: [
        { type: "num", q: "🍪🍪 + 🍪🍪🍪 = ?", answer: 5, explain: "2 + 3 = 5 biscotti." },
        { type: "num", q: "Quanto fa 6 + 2?", answer: 8, explain: "Parto da 6 e conto avanti 2: 7, 8." },
        { type: "mc", q: "Come si chiama il risultato dell'addizione?", options: ["Somma", "Addendo", "Differenza"], answer: 0, explain: "Il risultato si chiama somma (o totale)." }
      ]
    },
    {
      type: "text",
      title: "Trucchi da campioni",
      html: `<p><b>1. Si può cambiare l'ordine</b> 🔄: 2 + 7 = 7 + 2 = 9. Conviene partire dal più grande! (È la <b>proprietà commutativa</b>.)</p>
<p><b>2. Gli amici del 10</b> 🤝: coppie che fanno 10: 1+9, 2+8, 3+7, 4+6, 5+5. Impararle a memoria aiuta tantissimo!</p>
<p><b>3. Passare dal 10</b> 🌉: 8 + 5 → all'8 mancano 2 per fare 10, quindi spezzo il 5 in <b>2 + 3</b>: 8 + 2 = 10, poi 10 + 3 = <b>13</b>.</p>
<p><b>4. I doppi</b> 👯: 5+5 = 10, 6+6 = 12, 7+7 = 14, 8+8 = 16, 9+9 = 18, 10+10 = 20. E 7 + 8? È il doppio di 7 più 1: 14 + 1 = <b>15</b>.</p>
<p><b>5. Lo zero</b> 0️⃣: aggiungere 0 non cambia niente: 9 + 0 = 9.</p>`
    },
    {
      type: "svg",
      title: "Passare dal 10: 8 + 5",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#eff6ff"/>
<text x="300" y="38" font-size="26" font-weight="bold" fill="#1e3a8a" text-anchor="middle">8 + 5 = 8 + 2 + 3 = 10 + 3 = 13</text>
<g stroke="#1e3a8a" stroke-width="3" fill="#ffffff">
<rect x="40" y="70" width="50" height="50"/><rect x="90" y="70" width="50" height="50"/><rect x="140" y="70" width="50" height="50"/><rect x="190" y="70" width="50" height="50"/><rect x="240" y="70" width="50" height="50"/>
<rect x="40" y="120" width="50" height="50"/><rect x="90" y="120" width="50" height="50"/><rect x="140" y="120" width="50" height="50"/><rect x="190" y="120" width="50" height="50"/><rect x="240" y="120" width="50" height="50"/>
</g>
<g fill="#ef4444"><circle cx="65" cy="95" r="18"/><circle cx="115" cy="95" r="18"/><circle cx="165" cy="95" r="18"/><circle cx="215" cy="95" r="18"/><circle cx="265" cy="95" r="18"/><circle cx="65" cy="145" r="18"/><circle cx="115" cy="145" r="18"/><circle cx="165" cy="145" r="18"/></g>
<g fill="#3b82f6"><circle cx="215" cy="145" r="18"/><circle cx="265" cy="145" r="18"/></g>
<g fill="#3b82f6"><circle cx="370" cy="120" r="18"/><circle cx="420" cy="120" r="18"/><circle cx="470" cy="120" r="18"/></g>
<text x="165" y="205" font-size="22" fill="#1e3a8a" text-anchor="middle">la scatola da 10 è piena!</text>
<text x="420" y="175" font-size="22" fill="#1e3a8a" text-anchor="middle">avanzano 3</text>
<text x="300" y="255" font-size="20" fill="#1f2937" text-anchor="middle">rosse = 8 · blu = 5 (2 riempiono la scatola, 3 restano fuori)</text>
</svg>`,
      caption: "Prima riempi la scatola da 10, poi aggiungi quello che avanza."
    },
    {
      type: "widget",
      title: "Gli amici del 10",
      widget: "match",
      options: { pairs: [["1 +", "9"], ["2 +", "8"], ["3 +", "7"], ["4 +", "6"], ["5 +", "5"]] },
      caption: "Abbina i numeri che insieme fanno 10."
    },
    {
      type: "example",
      title: "Esempio: la festa in classe",
      html: `<p>Per la festa 🎉 la maestra porta <b>9</b> succhi di frutta e il papà di Ali ne porta <b>6</b>. Quanti succhi ci sono?</p>
<ol>
<li>Addizione: <b>9 + 6</b></li>
<li>Al 9 manca 1 per fare 10: spezzo il 6 in <b>1 + 5</b>.</li>
<li>9 + 1 = 10, poi 10 + 5 = <b>15</b>.</li>
</ol>
<p>Ci sono <b>15 succhi</b> 🧃.</p>`
    },
    {
      type: "example",
      title: "Esempio: il punteggio del gioco",
      html: `<p>Al gioco dei barattoli 🥫 Sofia fa <b>7</b> punti al primo tiro e <b>7</b> al secondo.</p>
<p>7 + 7 è un <b>doppio</b>: fa <b>14</b>!</p>
<p>Al terzo tiro fa <b>0</b> punti: 14 + 0 = <b>14</b>. Il punteggio non cambia.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il segno <b>+</b> viene dalla parola latina <b>"et"</b>, che vuol dire "e" (come in "3 e 2"). Scrivendo in fretta, i copisti hanno trasformato "et" in una piccola croce! Il + compare stampato per la prima volta in un libro tedesco del <b>1489</b>, scritto da <b>Johannes Widmann</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>Giappone</b> 🇯🇵 i bambini imparano le addizioni con l'<b>abaco</b> (si chiama <i>soroban</i>). I più bravi diventano così veloci che fanno i calcoli <b>immaginando l'abaco nella testa</b>, senza toccarlo!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Addizione = <b>aggiungere</b> o <b>mettere insieme</b>. Segno <b>+</b>.</li>
<li>I numeri si chiamano <b>addendi</b>, il risultato <b>somma</b>.</li>
<li>Cambiando l'ordine degli addendi la somma <b>non cambia</b>.</li>
<li>Usa gli <b>amici del 10</b>, i <b>doppi</b> e il <b>passaggio dal 10</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per fare le addizioni",
      intro: "Ogni bambino ha il suo modo preferito. Prova i cubetti 3D, l'abaco, il metodo di Singapore o la conta con gli oggetti!",
      tabs: [
        {
          label: "🇸🇬 Il metodo di Singapore",
          html: `<p>A <b>Singapore</b> i bambini disegnano le addizioni con i <b>legami tra numeri</b>: un cerchio grande (il tutto) collegato a due cerchi piccoli (le parti).</p>
<p>Se conosci le due parti, le metti insieme e trovi il tutto: <b>6 + 7 = 13</b>.</p>
<p>E poi disegnano anche la <b>barra</b>: due strisce una dopo l'altra, lunghe come i due numeri.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<line x1="150" y1="80" x2="90" y2="170" stroke="#166534" stroke-width="4"/>
<line x1="150" y1="80" x2="210" y2="170" stroke="#166534" stroke-width="4"/>
<circle cx="150" cy="70" r="42" fill="#86efac" stroke="#166534" stroke-width="4"/>
<circle cx="90" cy="185" r="34" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<circle cx="210" cy="185" r="34" fill="#93c5fd" stroke="#1e40af" stroke-width="4"/>
<text x="150" y="84" font-size="36" font-weight="bold" fill="#14532d" text-anchor="middle">13</text>
<text x="90" y="198" font-size="32" font-weight="bold" fill="#7f1d1d" text-anchor="middle">6</text>
<text x="210" y="198" font-size="32" font-weight="bold" fill="#1e3a8a" text-anchor="middle">7</text>
<rect x="300" y="110" width="120" height="50" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<rect x="420" y="110" width="140" height="50" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<text x="360" y="144" font-size="26" font-weight="bold" fill="#7f1d1d" text-anchor="middle">6</text>
<text x="490" y="144" font-size="26" font-weight="bold" fill="#1e3a8a" text-anchor="middle">7</text>
<path d="M300,180 Q430,220 560,180" fill="none" stroke="#166534" stroke-width="3"/>
<text x="430" y="235" font-size="24" font-weight="bold" fill="#14532d" text-anchor="middle">13</text>
<text x="430" y="90" font-size="20" fill="#14532d" text-anchor="middle">modello a barre</text>
</svg>`
        },
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Costruisci la somma con i cubetti: quando arrivi a <b>10 cubetti</b> li puoi incollare in una <b>barretta</b>.</p>
<p>Qui vedi <b>13</b>: una barretta da 10 e 3 cubetti. È il risultato di 8 + 5, di 9 + 4, di 6 + 7… Cambia il valore con il cursore e prova altre somme!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 13 }
        },
        {
          label: "🧮 L'abaco",
          html: `<p>Sull'abaco ogni pallina dell'asta <b>u</b> vale 1. Quando arrivi a 10 palline, le togli e metti <b>1 pallina</b> sull'asta <b>da</b> (le decine).</p>
<p>Prova 7 + 5: metti 7 palline, poi aggiungine 5. Alla decima pallina fai il cambio: 1 decina e 2 unità = <b>12</b>.</p>`,
          widget: "abacus",
          options: { columns: ["da", "u"], value: 7 }
        },
        {
          label: "🍓 Conta gli oggetti",
          html: `<p>Il modo più semplice di tutti: <b>metti gli oggetti</b> e contali!</p>
<p>Prova 4 + 5: aggiungi 4 fragole, poi altre 5, e conta tutto. Quante sono?</p>`,
          widget: "counter",
          options: { emoji: "🍓", max: 20 }
        },
        {
          label: "✋ Le dita e oltre",
          html: `<p>Con le dita arrivi fino a 10. E oltre?</p>
<ul>
<li>Tieni il numero più grande <b>nella testa</b> (per esempio 9) 🧠.</li>
<li>Alza le dita per il numero più piccolo (per esempio 4) e conta avanti: <b>10, 11, 12, 13</b>.</li>
</ul>
<p>In <b>Cina</b> 🇨🇳 c'è un modo per contare fino a 10 con <b>una mano sola</b>, usando forme diverse delle dita: così l'altra mano resta libera!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'addizione: tocca un nodo e scopri il perché",
      nodes: [
        { id: "contare", label: "Contare", x: 50, y: 8, color: "#64748b", html: "Dire i numeri in ordine, uno per oggetto.", why: "L'addizione è nata dal contare: se conto due gruppi uno dopo l'altro, sto già facendo un'addizione." },
        { id: "addizione", label: "Addizione", x: 50, y: 32, color: "#16a34a", html: "Aggiungere o mettere insieme due quantità.", why: "Il nome viene dal latino <i>addere</i>, 'aggiungere'. È l'operazione più antica: si sommavano pecore, sacchi di grano, giorni." },
        { id: "addendi", label: "Addendi", x: 15, y: 55, color: "#dc2626", html: "I numeri che si aggiungono.", why: "'Addendo' vuol dire 'ciò che deve essere aggiunto'." },
        { id: "somma", label: "Somma", x: 85, y: 55, color: "#2563eb", html: "Il risultato dell'addizione.", why: "Dal latino <i>summa</i>, 'la cosa più alta': gli antichi Romani scrivevano il totale in cima alla colonna dei numeri." },
        { id: "commutativa", label: "Cambio l'ordine", x: 15, y: 82, color: "#a855f7", html: "3 + 5 = 5 + 3: la somma non cambia.", why: "Mettere insieme due mucchi dà sempre lo stesso mucchio, qualunque si prenda per primo. Si chiama proprietà commutativa ('commutare' = scambiare)." },
        { id: "dieci", label: "Amici del 10", x: 40, y: 72, color: "#f59e0b", html: "Coppie che fanno 10: 1+9, 2+8, 3+7, 4+6, 5+5.", why: "Il nostro modo di scrivere i numeri è basato sul 10 (abbiamo 10 dita!): arrivare a 10 rende i calcoli facilissimi." },
        { id: "passaggio", label: "Passaggio dal 10", x: 62, y: 90, color: "#0ea5e9", html: "8 + 5 = 8 + 2 + 3 = 13.", why: "Si spezza un addendo per completare il 10: è il metodo che usano i bambini in Giappone, Cina e Singapore." },
        { id: "zero", label: "Lo zero", x: 85, y: 82, color: "#94a3b8", html: "Aggiungere 0 non cambia il numero.", why: "Lo zero vuol dire 'niente': aggiungere niente lascia tutto com'è. Lo zero come numero è arrivato in Europa dall'India, passando per gli Arabi." }
      ],
      edges: [
        ["contare", "addizione", "da cui nasce"],
        ["addizione", "addendi", "si fa con gli"],
        ["addizione", "somma", "dà come risultato"],
        ["addendi", "commutativa", "si possono scambiare"],
        ["addizione", "dieci", "trucco"],
        ["dieci", "passaggio", "permette il"],
        ["somma", "zero", "+ 0 non cambia"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: superare il 10",
      questions: [
        { type: "num", q: "Quanto fa 9 + 5?", answer: 14, explain: "9 + 1 = 10, poi 10 + 4 = 14." },
        { type: "num", q: "Quanto fa 8 + 8?", answer: 16, explain: "È un doppio: 8 + 8 = 16." },
        { type: "tf", q: "4 + 7 dà lo stesso risultato di 7 + 4.", answer: true, explain: "Cambiando l'ordine degli addendi la somma non cambia: 11." }
      ]
    }
  ],
  glossary: [
    { t: "Addizione", d: "Operazione che aggiunge o mette insieme due quantità. Segno +." },
    { t: "Addendi", d: "I numeri che si sommano." },
    { t: "Somma", d: "Il risultato dell'addizione (si dice anche totale)." },
    { t: "Contare avanti", d: "Partire da un numero e dire i numeri successivi." },
    { t: "Amici del 10", d: "Coppie di numeri che insieme fanno 10." },
    { t: "Doppio", d: "Un numero sommato a se stesso: il doppio di 6 è 6 + 6 = 12." },
    { t: "Proprietà commutativa", d: "Cambiando l'ordine degli addendi la somma non cambia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto fa 5 + 4?", answer: 9, explain: "Parto da 5 e conto avanti 4: 6, 7, 8, 9." },
      { type: "num", q: "Quanto fa 3 + 7?", answer: 10, explain: "3 e 7 sono amici del 10." },
      { type: "num", q: "Quanto fa 9 + 6?", answer: 15, explain: "9 + 1 = 10; 10 + 5 = 15." },
      { type: "num", q: "Quanto fa 12 + 5?", answer: 17, explain: "Parto da 12 e conto avanti 5: 17." },
      { type: "mc", q: "Quale coppia fa 10?", options: ["4 + 5", "6 + 4", "3 + 8"], answer: 1, explain: "6 + 4 = 10." },
      { type: "tf", q: "11 + 0 = 11", answer: true, explain: "Aggiungere zero non cambia il numero." },
      { type: "mc", q: "In 6 + 3 = 9, come si chiama il 9?", options: ["Addendo", "Somma", "Segno"], answer: 1, explain: "Il risultato è la somma." },
      { type: "num", q: "Hai 10 figurine e ne vinci 7. Quante ne hai ora?", answer: 17, explain: "10 + 7 = 17: 1 decina e 7 unità." },
      { type: "num", q: "In un prato ci sono 6 margherite 🌼 e 6 tulipani 🌷. Quanti fiori ci sono?", answer: 12, explain: "Doppio di 6: 12." },
      { type: "order", q: "Metti in ordine i passaggi per fare 8 + 4.", items: ["Spezzo 4 in 2 + 2", "8 + 2 = 10", "10 + 2 = 12"], explain: "Prima completo il 10, poi aggiungo il resto." },
      { type: "text", q: "Come si chiama il segno + ?", answer: ["più", "piu", "piu'"], explain: "Il segno + si legge 'più'." }
    ],
    gen: [["add20", 3]]
  }
});

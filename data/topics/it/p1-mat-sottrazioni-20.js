TOPIC('it', {
  id: "p1-mat-sottrazioni-20",
  title: "Le sottrazioni entro il 20",
  intro: "Avevi 7 caramelle 🍬 e ne hai mangiate 3: quante ne restano? Per scoprirlo facciamo una <b>sottrazione</b> ➖. Impariamo a <b>togliere</b>, a <b>contare indietro</b> e a trovare la <b>differenza</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Togliere: quanto resta?",
      html: `<p>Fare una <b>sottrazione</b> vuol dire <b>togliere</b> una parte e vedere <b>quanto resta</b>.</p>
<p style="font-size:1.3em">🍬🍬🍬🍬🍬🍬🍬 → ne mangio 3 → 🍬🍬🍬🍬</p>
<p>7 − 3 = <b>4</b>. Restano 4 caramelle.</p>
<p>Il segno della sottrazione è <b>−</b> e si legge "<b>meno</b>".</p>`
    },
    {
      type: "svg",
      title: "Le parti della sottrazione",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fdf2f8"/>
<g font-size="38" text-anchor="middle">
<text x="70" y="80">🍬</text><text x="120" y="80">🍬</text><text x="170" y="80">🍬</text><text x="220" y="80">🍬</text>
<text x="300" y="80">🍬</text><text x="350" y="80">🍬</text><text x="400" y="80">🍬</text>
</g>
<g stroke="#dc2626" stroke-width="5">
<line x1="280" y1="45" x2="320" y2="85"/><line x1="330" y1="45" x2="370" y2="85"/><line x1="380" y1="45" x2="420" y2="85"/>
</g>
<text x="500" y="75" font-size="22" fill="#dc2626" text-anchor="middle">mangiate!</text>
<text x="100" y="175" font-size="72" font-weight="bold" fill="#7c3aed" text-anchor="middle">7</text>
<text x="200" y="175" font-size="72" font-weight="bold" fill="#1f2937" text-anchor="middle">−</text>
<text x="300" y="175" font-size="72" font-weight="bold" fill="#dc2626" text-anchor="middle">3</text>
<text x="400" y="175" font-size="72" font-weight="bold" fill="#1f2937" text-anchor="middle">=</text>
<text x="500" y="175" font-size="72" font-weight="bold" fill="#16a34a" text-anchor="middle">4</text>
<text x="100" y="225" font-size="22" fill="#7c3aed" text-anchor="middle">minuendo</text>
<text x="300" y="225" font-size="22" fill="#dc2626" text-anchor="middle">sottraendo</text>
<text x="500" y="225" font-size="22" fill="#16a34a" text-anchor="middle">differenza</text>
<text x="300" y="265" font-size="18" fill="#1f2937" text-anchor="middle">Da 7 tolgo 3: resta 4.</text>
</svg>`,
      caption: "Il minuendo è quanto avevo, il sottraendo quanto tolgo, la differenza quanto resta."
    },
    {
      type: "text",
      title: "Contare indietro",
      html: `<p>Per fare una sottrazione puoi <b>partire dal numero grande</b> e <b>contare indietro</b> tante volte quanto dice il numero da togliere.</p>
<p><b>12 − 3</b> → parto da 12 e conto indietro 3: <b>11, 10, 9</b>. Risultato: <b>9</b>.</p>
<p>Sulla retta dei numeri ogni salto <b>all'indietro</b> (verso sinistra ⬅️) toglie 1.</p>`
    },
    {
      type: "widget",
      title: "Salti all'indietro: 12 − 3",
      widget: "numberLine",
      options: { min: 0, max: 20, step: 1, marks: [12, 9] },
      caption: "Parti dal 12 e fai 3 salti verso sinistra: arrivi al 9."
    },
    {
      type: "quiz",
      title: "Mini-quiz: togliere",
      questions: [
        { type: "num", q: "🎈🎈🎈🎈🎈 Ne scoppiano 2. Quanti palloncini restano?", answer: 3, explain: "5 − 2 = 3." },
        { type: "num", q: "Quanto fa 9 − 4?", answer: 5, explain: "Da 9 conto indietro 4: 8, 7, 6, 5." },
        { type: "mc", q: "Come si chiama il risultato della sottrazione?", options: ["Somma", "Differenza", "Minuendo"], answer: 1, explain: "Il risultato della sottrazione è la differenza." }
      ]
    },
    {
      type: "text",
      title: "La differenza: quanto manca? quanto di più?",
      html: `<p>La sottrazione non serve solo a togliere! Serve anche a <b>confrontare</b>:</p>
<ul>
<li><b>Quanto manca?</b> Ho 6 € e la palla costa 10 €. Quanto mi manca? 10 − 6 = <b>4 €</b> ⚽.</li>
<li><b>Quanti di più?</b> Marta ha 13 anni, suo fratello 8. Quanti anni di più ha Marta? 13 − 8 = <b>5</b>.</li>
</ul>
<p>Per questo il risultato si chiama <b>differenza</b>: dice quanto sono <b>diversi</b> due numeri.</p>`
    },
    {
      type: "text",
      title: "Trucchi da campioni",
      html: `<p><b>1. L'ordine NON si può cambiare</b> ⚠️: 7 − 3 = 4, ma 3 − 7 con i numeri che conosciamo non si può fare! Il numero più grande va <b>prima</b>.</p>
<p><b>2. Passare dal 10</b> 🌉: 13 − 5 → prima tolgo 3 e arrivo a 10, poi tolgo i 2 che mancano: 10 − 2 = <b>8</b>.</p>
<p><b>3. Pensa all'addizione</b> 🔁: 15 − 7 = ? Chiediti: "7 più quanto fa 15?" → 7 + 8 = 15, quindi 15 − 7 = <b>8</b>.</p>
<p><b>4. Togliere zero e togliere tutto</b>: 9 − 0 = 9 (non tolgo niente); 9 − 9 = 0 (tolgo tutto!).</p>
<p><b>5. La prova</b> ✅: per controllare una sottrazione fai l'addizione: 12 − 5 = 7 → <b>7 + 5 = 12</b>. Giusto!</p>`
    },
    {
      type: "svg",
      title: "Passare dal 10: 13 − 5",
      svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0f9ff"/>
<line x1="40" y1="140" x2="570" y2="140" stroke="#1f2937" stroke-width="4"/>
<g stroke="#1f2937" stroke-width="3">
<line x1="60" y1="130" x2="60" y2="150"/><line x1="120" y1="130" x2="120" y2="150"/><line x1="180" y1="130" x2="180" y2="150"/><line x1="240" y1="130" x2="240" y2="150"/><line x1="300" y1="125" x2="300" y2="155"/><line x1="360" y1="130" x2="360" y2="150"/><line x1="420" y1="130" x2="420" y2="150"/><line x1="480" y1="130" x2="480" y2="150"/>
</g>
<g font-size="20" text-anchor="middle" fill="#1f2937">
<text x="60" y="180">6</text><text x="120" y="180">7</text><text x="180" y="180">8</text><text x="240" y="180">9</text><text x="300" y="180" font-weight="bold">10</text><text x="360" y="180">11</text><text x="420" y="180">12</text><text x="480" y="180" font-weight="bold">13</text>
</g>
<path d="M480,125 Q390,40 300,125" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M300,125 Q240,70 180,125" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="390" y="60" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">− 3</text>
<text x="240" y="75" font-size="22" font-weight="bold" fill="#2563eb" text-anchor="middle">− 2</text>
<text x="300" y="225" font-size="22" font-weight="bold" fill="#1f2937" text-anchor="middle">13 − 5 = 13 − 3 − 2 = 10 − 2 = 8</text>
<text x="300" y="30" font-size="18" fill="#475569" text-anchor="middle">prima fino al 10, poi il resto</text>
</svg>`,
      caption: "Il 5 si spezza in 3 + 2: con il 3 arrivo al 10, con il 2 arrivo all'8."
    },
    {
      type: "example",
      title: "Esempio: il pulmino della gita",
      html: `<p>Sul pulmino 🚌 ci sono <b>16</b> bambini. Alla prima fermata ne scendono <b>4</b>.</p>
<ol>
<li>Sottrazione: <b>16 − 4</b></li>
<li>Conto indietro 4 da 16: 15, 14, 13, <b>12</b>.</li>
<li>Prova: 12 + 4 = 16 ✅</li>
</ol>
<p>Sul pulmino restano <b>12 bambini</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio: al negozio",
      html: `<p>Pietro ha <b>20 €</b> e compra un libro da <b>14 €</b> 📘. Quanto gli danno di resto?</p>
<p>20 − 14 = ? Il negoziante conta <b>avanti</b>: "14… e 6 fa 20". Quindi il resto è <b>6 €</b>.</p>
<p>Prova: 14 + 6 = 20 ✅</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il segno <b>−</b> è comparso stampato per la prima volta nel <b>1489</b>, nello stesso libro tedesco di <b>Johannes Widmann</b> dove compare il +. All'inizio i mercanti lo usavano per segnare quanto <b>mancava</b> nel peso di una cassa di merce!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>3 − 7 si può fare… con i <b>numeri negativi</b>! Li vedi sul <b>termometro</b> 🌡️ d'inverno: se ci sono 3 gradi e la temperatura scende di 7, arriva a <b>4 gradi sotto zero</b>, cioè −4 °C ❄️. Li studierai alle medie!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Sottrazione = <b>togliere</b>, trovare <b>quanto manca</b> o <b>quanto di più</b>. Segno <b>−</b>.</li>
<li><b>Minuendo − sottraendo = differenza</b>.</li>
<li>Il numero più grande va <b>prima</b>: l'ordine non si cambia.</li>
<li>La <b>prova</b>: differenza + sottraendo = minuendo.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per fare le sottrazioni",
      intro: "Se contare indietro ti confonde, prova il metodo del negoziante, i cubetti, il metodo di Singapore o gli oggetti da togliere!",
      tabs: [
        {
          label: "🏪 Il metodo del negoziante",
          html: `<p>In tanti Paesi (per esempio negli <b>Stati Uniti</b> e in <b>Gran Bretagna</b>) i negozianti, per dare il resto, <b>contano in avanti</b> invece di togliere.</p>
<p><b>15 − 9</b>: parto dal <b>9</b> e conto quanto serve per arrivare a 15: 10, 11, 12, 13, 14, 15 → <b>6 salti</b>. Quindi 15 − 9 = <b>6</b>.</p>
<p>È comodissimo quando i due numeri sono <b>vicini</b>: 17 − 15? Da 15 a 17 ci sono solo <b>2</b> salti!</p>`
        },
        {
          label: "🇸🇬 Il metodo di Singapore",
          html: `<p>A <b>Singapore</b> si disegna il <b>legame tra numeri</b>: il tutto sopra, le due parti sotto. Se conosco il tutto e una parte, trovo l'altra parte togliendo.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0fdf4"/>
<line x1="300" y1="70" x2="220" y2="160" stroke="#166534" stroke-width="4"/>
<line x1="300" y1="70" x2="380" y2="160" stroke="#166534" stroke-width="4"/>
<circle cx="300" cy="60" r="42" fill="#86efac" stroke="#166534" stroke-width="4"/>
<circle cx="220" cy="175" r="36" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<circle cx="380" cy="175" r="36" fill="#fde68a" stroke="#a16207" stroke-width="4" stroke-dasharray="8 6"/>
<text x="300" y="74" font-size="36" font-weight="bold" fill="#14532d" text-anchor="middle">14</text>
<text x="220" y="188" font-size="34" font-weight="bold" fill="#7f1d1d" text-anchor="middle">6</text>
<text x="380" y="188" font-size="34" font-weight="bold" fill="#713f12" text-anchor="middle">?</text>
<text x="500" y="110" font-size="22" fill="#14532d" text-anchor="middle">14 − 6 = 8</text>
<text x="500" y="145" font-size="22" fill="#14532d" text-anchor="middle">perché</text>
<text x="500" y="180" font-size="22" fill="#14532d" text-anchor="middle">6 + 8 = 14</text>
</svg>`
        },
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Ecco <b>15</b> cubetti: una barretta da 10 e 5 sciolti. Per togliere 7, prima togli i 5 sciolti, poi <b>rompi la barretta</b> e togli altri 2: restano <b>8</b> cubetti.</p>
<p>Usa il cursore per cambiare il numero e prova a togliere tu!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 15 }
        },
        {
          label: "🐟 Togli gli oggetti",
          html: `<p>Metti nel contatore <b>11 pesciolini</b>. Poi togline <b>4</b> uno alla volta. Quanti ne restano nell'acquario?</p>`,
          widget: "counter",
          options: { emoji: "🐟", max: 20 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della sottrazione: tocca un nodo e scopri il perché",
      nodes: [
        { id: "sottrazione", label: "Sottrazione", x: 50, y: 10, color: "#dc2626", html: "Operazione che toglie una quantità da un'altra.", why: "Dal latino <i>subtrahere</i>, 'tirare via da sotto'. Serviva da sempre: quanto grano resta dopo aver sfamato il villaggio?" },
        { id: "togliere", label: "Togliere", x: 15, y: 35, color: "#f97316", html: "Avevo 7, ne tolgo 3: quanto resta?", why: "È il significato più semplice: una parte se ne va, contiamo quella che rimane." },
        { id: "differenza", label: "Differenza", x: 50, y: 38, color: "#16a34a", html: "Il risultato: quanto resta o di quanto due numeri sono diversi.", why: "Si chiama così perché misura la 'differenza' tra due numeri: 13 − 8 = 5 dice che 13 ha 5 in più di 8." },
        { id: "mancare", label: "Quanto manca?", x: 85, y: 35, color: "#2563eb", html: "Ho 6, mi serve 10: mi mancano 4.", why: "Anche completare è una sottrazione: per questo il negoziante conta avanti per dare il resto." },
        { id: "termini", label: "Minuendo e sottraendo", x: 20, y: 65, color: "#7c3aed", html: "Minuendo: il numero da cui tolgo. Sottraendo: il numero che tolgo.", why: "Dal latino: <i>minuendo</i> = 'che deve essere diminuito'; <i>sottraendo</i> = 'che deve essere sottratto'." },
        { id: "inversa", label: "Contraria dell'addizione", x: 55, y: 66, color: "#0ea5e9", html: "Se 8 + 5 = 13, allora 13 − 5 = 8.", why: "Togliere annulla l'aggiungere: per questo si può controllare una sottrazione con un'addizione (la prova)." },
        { id: "ordine", label: "L'ordine conta", x: 85, y: 65, color: "#ca8a04", html: "7 − 3 non è uguale a 3 − 7.", why: "Togliere 3 da 7 si può; togliere 7 da 3 no, se non usiamo i numeri negativi." },
        { id: "negativi", label: "Numeri negativi", x: 75, y: 92, color: "#64748b", html: "Numeri sotto lo zero, come −4 °C.", why: "Matematici indiani come Brahmagupta li usavano già nel 600 d.C. per indicare i debiti. In Europa sono stati accettati molto più tardi." },
        { id: "prova", label: "La prova", x: 30, y: 92, color: "#14b8a6", html: "Differenza + sottraendo = minuendo.", why: "Visto che la sottrazione è il contrario dell'addizione, rimettendo a posto ciò che ho tolto devo ritrovare il numero di partenza." }
      ],
      edges: [
        ["sottrazione", "togliere", "significa"],
        ["sottrazione", "mancare", "significa anche"],
        ["sottrazione", "differenza", "risultato"],
        ["sottrazione", "termini", "si fa con"],
        ["differenza", "inversa", "è legata all'addizione"],
        ["inversa", "prova", "permette la"],
        ["ordine", "negativi", "se il sottraendo è più grande"],
        ["mancare", "ordine", "attenzione"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: oltre il 10",
      questions: [
        { type: "num", q: "Quanto fa 14 − 6?", answer: 8, explain: "14 − 4 = 10; 10 − 2 = 8." },
        { type: "num", q: "Quanto fa 18 − 18?", answer: 0, explain: "Togliendo tutto resta zero." },
        { type: "tf", q: "Per fare la prova di 11 − 4 = 7 posso calcolare 7 + 4.", answer: true, explain: "7 + 4 = 11: la sottrazione è giusta." }
      ]
    }
  ],
  glossary: [
    { t: "Sottrazione", d: "Operazione che toglie una quantità da un'altra. Segno −." },
    { t: "Minuendo", d: "Il numero da cui si toglie (il primo)." },
    { t: "Sottraendo", d: "Il numero che si toglie (il secondo)." },
    { t: "Differenza", d: "Il risultato della sottrazione." },
    { t: "Contare indietro", d: "Partire da un numero e dire i numeri precedenti." },
    { t: "Prova", d: "Controllo del risultato: differenza + sottraendo deve dare il minuendo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto fa 8 − 3?", answer: 5, explain: "Da 8 conto indietro 3: 7, 6, 5." },
      { type: "num", q: "Quanto fa 10 − 6?", answer: 4, explain: "6 e 4 sono amici del 10." },
      { type: "num", q: "Quanto fa 17 − 5?", answer: 12, explain: "Tolgo 5 unità da 7: restano 1 decina e 2 unità = 12." },
      { type: "num", q: "Quanto fa 15 − 8?", answer: 7, explain: "15 − 5 = 10; 10 − 3 = 7. Prova: 7 + 8 = 15." },
      { type: "mc", q: "In 12 − 5 = 7, come si chiama il 12?", options: ["Minuendo", "Sottraendo", "Differenza"], answer: 0, explain: "Il numero da cui si toglie è il minuendo." },
      { type: "tf", q: "9 − 0 = 0", answer: false, explain: "Se non tolgo niente resta tutto: 9 − 0 = 9." },
      { type: "mc", q: "Quale addizione è la prova di 13 − 4 = 9?", options: ["9 + 4 = 13", "13 + 4 = 17", "9 + 13 = 22"], answer: 0, explain: "Differenza + sottraendo = minuendo." },
      { type: "num", q: "In un albero ci sono 11 uccellini 🐦. Ne volano via 5. Quanti ne restano?", answer: 6, explain: "11 − 5 = 6." },
      { type: "num", q: "Hai 7 €. Il gioco costa 12 €. Quanti euro ti mancano?", answer: 5, explain: "12 − 7 = 5: da 7 conto avanti fino a 12." },
      { type: "num", q: "Nina ha 16 anni, Teo ne ha 9. Quanti anni di più ha Nina?", answer: 7, explain: "16 − 9 = 7." },
      { type: "order", q: "Metti in ordine i passaggi per fare 12 − 4.", items: ["Spezzo 4 in 2 + 2", "12 − 2 = 10", "10 − 2 = 8"], explain: "Prima arrivo al 10, poi tolgo il resto." },
      { type: "text", q: "Come si chiama il risultato della sottrazione?", answer: ["differenza", "la differenza", "resto"], explain: "Si chiama differenza (a volte si dice anche resto)." }
    ],
    gen: [["sub20", 3]]
  }
});

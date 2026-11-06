TOPIC('it', {
  id: "p2-mat-addizioni-colonna",
  title: "Addizioni in colonna",
  intro: "Per sommare numeri grandi c'è un trucco da campioni: metterli <b>in colonna</b>, uno sotto l'altro! ✏️ Impariamo le addizioni <b>senza cambio</b> e <b>con il cambio</b> (il famoso <b>riporto</b>).",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è l'addizione",
      html: `<p><b>Addizionare</b> vuol dire <b>mettere insieme</b>, aggiungere. 🍎 + 🍎🍎 = 🍎🍎🍎</p>
<p>I numeri che sommiamo si chiamano <b>addendi</b>. Il risultato si chiama <b>somma</b> (o totale).</p>
<p style="font-size:1.2em; text-align:center"><b>23</b> + <b>45</b> = <b>68</b><br><span style="font-size:0.8em">addendo + addendo = somma</span></p>`
    },
    {
      type: "text",
      title: "Addizione in colonna senza cambio",
      html: `<p>Calcoliamo <b>23 + 45</b> in colonna:</p>
<ol>
<li>Scrivi i numeri uno sotto l'altro: <b>unità sotto unità</b>, <b>decine sotto decine</b>. Aiutati con le lettere <b>da</b> e <b>u</b>.</li>
<li>Comincia sempre dalle <b>unità</b>, a destra ➡️: 3 + 5 = <b>8</b>. Scrivi 8 sotto le unità.</li>
<li>Poi passa alle <b>decine</b>: 2 + 4 = <b>6</b>. Scrivi 6 sotto le decine.</li>
<li>Leggi il risultato: <b>68</b>! 🎉</li>
</ol>`
    },
    {
      type: "svg",
      title: "23 + 45 in colonna",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="150" y="20" width="90" height="260" fill="#fee2e2"/>
<rect x="240" y="20" width="90" height="260" fill="#dbeafe"/>
<text x="195" y="55" font-size="26" text-anchor="middle" fill="#b91c1c" font-weight="bold">da</text>
<text x="285" y="55" font-size="26" text-anchor="middle" fill="#1d4ed8" font-weight="bold">u</text>
<g font-size="52" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="195" y="120">2</text><text x="285" y="120">3</text>
<text x="195" y="185">4</text><text x="285" y="185">5</text>
</g>
<text x="110" y="185" font-size="52" font-weight="bold" text-anchor="middle" fill="#16a34a">+</text>
<line x1="90" y1="205" x2="330" y2="205" stroke="#1f2937" stroke-width="5"/>
<g font-size="52" font-weight="bold" text-anchor="middle">
<text x="195" y="265" fill="#b91c1c">6</text><text x="285" y="265" fill="#1d4ed8">8</text>
</g>
<text x="360" y="110" font-size="20" fill="#1d4ed8">① unità: 3 + 5 = 8</text>
<text x="360" y="150" font-size="20" fill="#b91c1c">② decine: 2 + 4 = 6</text>
<path d="M330 240 L350 240" stroke="#1f2937" stroke-width="3"/>
<text x="360" y="250" font-size="22" fill="#1f2937" font-weight="bold">③ somma = 68</text>
</svg>`,
      caption: "Ogni cifra nella sua colonna: si parte dalle unità (a destra) e poi si passa alle decine."
    },
    {
      type: "quiz",
      title: "Mini-quiz: senza cambio",
      questions: [
        { type: "num", q: "Quanto fa 32 + 16?", answer: 48, explain: "Unità: 2 + 6 = 8. Decine: 3 + 1 = 4. Somma: 48." },
        { type: "mc", q: "Da quale colonna si comincia?", options: ["dalle decine", "dalle unità", "è uguale"], answer: 1, explain: "Si comincia sempre dalle unità, a destra." },
        { type: "num", q: "Quanto fa 51 + 27?", answer: 78, explain: "1 + 7 = 8; 5 + 2 = 7: 78." }
      ]
    },
    {
      type: "text",
      title: "Addizione con il cambio (riporto)",
      html: `<p>Calcoliamo <b>37 + 48</b>:</p>
<ol>
<li><b>Unità</b>: 7 + 8 = <b>15</b>. Ma in una colonna ci sta <b>una sola cifra</b>! 😮</li>
<li>15 unità = <b>1 decina e 5 unità</b>. Scrivi <b>5</b> sotto le unità e <b>porta 1</b> in cima alla colonna delle decine: è il <b>riporto</b> (o cambio).</li>
<li><b>Decine</b>: 1 (il riporto) + 3 + 4 = <b>8</b>.</li>
<li>Risultato: <b>85</b>! ✅</li>
</ol>
<p>Il riporto non è una magia: abbiamo solo <b>cambiato 10 unità con 1 decina</b>, come quando cambi 10 monetine da 1 cent con una moneta da 10 cent.</p>`
    },
    {
      type: "svg",
      title: "37 + 48 con il riporto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<rect x="150" y="20" width="90" height="260" fill="#fee2e2"/>
<rect x="240" y="20" width="90" height="260" fill="#dbeafe"/>
<text x="195" y="45" font-size="22" text-anchor="middle" fill="#b91c1c" font-weight="bold">da</text>
<text x="285" y="45" font-size="22" text-anchor="middle" fill="#1d4ed8" font-weight="bold">u</text>
<circle cx="195" cy="72" r="17" fill="#fde047" stroke="#ca8a04" stroke-width="3"/>
<text x="195" y="80" font-size="24" text-anchor="middle" fill="#a16207" font-weight="bold">1</text>
<g font-size="52" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="195" y="140">3</text><text x="285" y="140">7</text>
<text x="195" y="200">4</text><text x="285" y="200">8</text>
</g>
<text x="110" y="200" font-size="52" font-weight="bold" text-anchor="middle" fill="#16a34a">+</text>
<line x1="90" y1="218" x2="330" y2="218" stroke="#1f2937" stroke-width="5"/>
<g font-size="52" font-weight="bold" text-anchor="middle">
<text x="195" y="272" fill="#b91c1c">8</text><text x="285" y="272" fill="#1d4ed8">5</text>
</g>
<path d="M285 95 Q250 40 215 65" fill="none" stroke="#ca8a04" stroke-width="3"/>
<polygon points="213,58 222,70 208,72" fill="#ca8a04"/>
<text x="350" y="100" font-size="19" fill="#1d4ed8">① 7 + 8 = 15</text>
<text x="350" y="128" font-size="19" fill="#1d4ed8">scrivo 5, riporto 1</text>
<text x="350" y="175" font-size="19" fill="#b91c1c">② 1 + 3 + 4 = 8</text>
<text x="350" y="262" font-size="22" fill="#1f2937" font-weight="bold">③ somma = 85</text>
</svg>`,
      caption: "Le 15 unità diventano 1 decina (il riporto giallo) e 5 unità."
    },
    {
      type: "3d",
      title: "Il cambio con i cubetti 3D",
      scene: "blocks",
      options: { mode: "base10", value: 85 },
      caption: "Ecco 85: 8 stecche e 5 cubetti. Le 7 + 8 = 15 unità sono diventate 1 stecca nuova e 5 cubetti. Cambia il numero e guarda quando nasce una nuova stecca!"
    },
    {
      type: "example",
      title: "Esempio: la raccolta di tappi ♻️",
      html: `<p>La classe 2ª A ha raccolto <b>46 tappi</b>, la 2ª B ne ha raccolti <b>38</b>. Quanti in tutto?</p>
<ul>
<li>Unità: 6 + 8 = 14 → scrivo <b>4</b>, riporto <b>1</b>.</li>
<li>Decine: 1 + 4 + 3 = <b>8</b>.</li>
</ul>
<p>In tutto <b>84 tappi</b>! 🎉</p>`
    },
    {
      type: "example",
      title: "Esempio: la merenda al bar 🥐",
      html: `<p>Un cornetto costa <b>65 centesimi</b> e un succo <b>30 centesimi</b>. Quanto spendo?</p>
<ul>
<li>Unità: 5 + 0 = 5.</li>
<li>Decine: 6 + 3 = 9.</li>
</ul>
<p>Spendo <b>95 centesimi</b>. Con 1 euro (100 centesimi) mi bastano! 💶</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Unità sotto unità, decine sotto decine.</li>
<li>Si comincia sempre dalle <b>unità</b> (da destra).</li>
<li>Se le unità fanno 10 o più: scrivi l'unità e <b>riporta 1</b> alle decine.</li>
<li>Puoi scambiare gli addendi: 37 + 48 = 48 + 37 (proprietà <b>commutativa</b>). Usalo per fare la <b>prova</b>!</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il segno <b>+</b> viene dalla parola latina <i>et</i>, che vuol dire «e». Scrivendola in fretta, i mercanti la trasformarono in una crocetta! ✝️➕</p>
<p>Fu stampato per la prima volta in un libro di aritmetica del tedesco <b>Johannes Widmann</b>, nel <b>1489</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il grande matematico <b>Carl Friedrich Gauss</b>, da bambino, sommò in pochi secondi tutti i numeri da 1 a 100! 🤯</p>
<p>Il suo trucco: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… Ci sono 50 coppie che fanno 101: 50 × 101 = <b>5050</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per fare le addizioni",
      intro: "La colonna è comoda, ma non è l'unico modo! In giro per il mondo i bambini usano tanti metodi diversi. Prova quello che ti piace di più.",
      tabs: [
        {
          label: "🇺🇸 Somme parziali",
          html: `<p>In molte scuole americane e inglesi si usa il metodo delle <b>somme parziali</b>: si sommano prima le decine, poi le unità, e alla fine si mette tutto insieme.</p>
<p><b>37 + 48</b>:</p>
<ul>
<li>decine: 30 + 40 = <b>70</b></li>
<li>unità: 7 + 8 = <b>15</b></li>
<li>totale: 70 + 15 = <b>85</b></li>
</ul>
<p>Niente riporto da ricordare: si vede tutto!</p>`
        },
        {
          label: "🦘 Salti sulla retta",
          html: `<p>Parti dal primo numero e fai dei <b>salti</b>: prima le decine, poi le unità.</p>
<p><b>37 + 48</b>: parti da 37 → salta 4 decine: 47, 57, 67, 77 → poi 8 unità: <b>85</b>.</p>
<p>Oppure salta 3 per arrivare alla decina tonda (40) e poi 45: 37 → 40 → <b>85</b>.</p>`,
          widget: "numberLine",
          options: { min: 30, max: 90, step: 1, marks: [37, 47, 57, 67, 77, 85] }
        },
        {
          label: "🎯 Arrotonda e aggiusta",
          html: `<p>Il metodo del <b>numero tondo</b> (si chiama <b>compensazione</b>):</p>
<p><b>37 + 48</b>: 48 è quasi 50! Allora faccio 37 + 50 = 87, ma ho aggiunto 2 di troppo, quindi tolgo 2: 87 − 2 = <b>85</b>.</p>
<p>È il metodo preferito di chi fa i conti a mente, per esempio al mercato.</p>`
        },
        {
          label: "🧮 Soroban giapponese",
          html: `<p>In <b>Giappone</b> molti bambini imparano a calcolare con il <b>soroban</b>, un abaco speciale. Ogni colonna è una posizione: unità, decine… Quando una colonna arriva a 10, si toglie tutto e si aggiunge una pallina alla colonna a sinistra: è proprio il <b>riporto</b>!</p>
<p>Prova con questo abaco: metti 37, poi aggiungi 8 unità e 4 decine.</p>`,
          widget: "abacus",
          options: { columns: ["da", "u"], value: 37 }
        },
        {
          label: "💶 Con le monete",
          html: `<p>Hai <b>3 monete da 10 cent e 7 da 1 cent</b> (37 cent). La nonna ti dà <b>4 da 10 e 8 da 1</b> (48 cent).</p>
<p>Ora hai 7 monete da 10 e 15 da 1. Ma 10 monete da 1 cent si possono <b>cambiare</b> in banca con una da 10! 🏦</p>
<p>Dopo il cambio: <b>8 monete da 10</b> e <b>5 da 1</b> = <b>85 cent</b>. Ecco perché si chiama «cambio»!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'addizione in colonna",
      nodes: [
        { id: "addizione", label: "Addizione", x: 50, y: 8, color: "#16a34a", html: "Operazione che mette insieme due o più quantità.", why: "È l'operazione più antica: contare il bestiame, unire due raccolti. La parola viene dal latino <i>addere</i>, «aggiungere»." },
        { id: "addendi", label: "Addendi e somma", x: 18, y: 28, color: "#2563eb", html: "Addendi: i numeri da sommare. Somma: il risultato.", why: "«Addendo» in latino vuol dire «ciò che deve essere aggiunto». «Somma» viene da <i>summa</i>, «la parte più alta»: si racconta che gli antichi Romani scrivessero il totale in cima alla colonna dei numeri!" },
        { id: "posizione", label: "Valore di posizione", x: 50, y: 35, color: "#f59e0b", html: "Unità sotto unità, decine sotto decine.", why: "Le cifre valgono in base al posto che occupano. Se le metti nella colonna sbagliata sommi decine con unità: come sommare euro e centesimi!" },
        { id: "unita", label: "Si parte dalle unità", x: 82, y: 28, color: "#0ea5e9", html: "Si comincia sempre dalla colonna di destra.", why: "Perché le unità possono «riempirsi» e generare una decina da aggiungere alla colonna dopo. Se partissimo dalle decine dovremmo tornare indietro a correggere." },
        { id: "cambio", label: "Cambio (riporto)", x: 82, y: 58, color: "#dc2626", html: "10 unità diventano 1 decina, che va nella colonna a sinistra.", why: "Viene direttamente dal nostro sistema in <b>base 10</b>: in ogni posizione ci stanno solo le cifre da 0 a 9. Il metodo in colonna con il riporto si diffuse in Europa dal 1200 grazie al <i>Liber Abaci</i> di <b>Fibonacci</b>." },
        { id: "commutativa", label: "Proprietà commutativa", x: 18, y: 58, color: "#a855f7", html: "Cambiando l'ordine degli addendi la somma non cambia.", why: "Mettere 3 mele in un cesto con 5 o 5 mele con 3 dà sempre 8 mele: le quantità non dipendono dall'ordine." },
        { id: "prova", label: "La prova", x: 32, y: 85, color: "#14b8a6", html: "Si rifà l'addizione scambiando gli addendi.", why: "Grazie alla proprietà commutativa, il risultato deve essere identico: se è diverso c'è un errore." },
        { id: "segno", label: "Il segno +", x: 68, y: 85, color: "#64748b", html: "Il simbolo dell'addizione.", why: "Deriva dal latino <i>et</i> («e»). Apparve stampato nel 1489 nel libro di <b>Johannes Widmann</b>, insieme al segno −." }
      ],
      edges: [
        ["addizione", "addendi", "ha"],
        ["addizione", "posizione", "in colonna usa"],
        ["posizione", "unita", "regola"],
        ["unita", "cambio", "se ≥ 10"],
        ["addizione", "commutativa", "ha la"],
        ["commutativa", "prova", "permette"],
        ["addizione", "segno", "si scrive con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: con il cambio",
      questions: [
        { type: "num", q: "Quanto fa 28 + 35?", answer: 63, explain: "8 + 5 = 13: scrivo 3, riporto 1. 1 + 2 + 3 = 6. Somma: 63." },
        { type: "num", q: "Quanto fa 19 + 19?", answer: 38, explain: "9 + 9 = 18: scrivo 8, riporto 1. 1 + 1 + 1 = 3: 38." },
        { type: "tf", q: "In 46 + 23 serve il cambio.", answer: false, explain: "6 + 3 = 9, meno di 10: niente cambio." }
      ]
    }
  ],
  glossary: [
    { t: "Addizione", d: "Operazione che aggiunge, mette insieme." },
    { t: "Addendi", d: "I numeri che si sommano." },
    { t: "Somma", d: "Il risultato dell'addizione." },
    { t: "Cambio (riporto)", d: "Quando 10 unità diventano 1 decina da aggiungere alla colonna delle decine." },
    { t: "Proprietà commutativa", d: "Scambiando gli addendi la somma non cambia." },
    { t: "Prova", d: "Controllo del risultato rifacendo il calcolo in un altro modo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto fa 34 + 25?", answer: 59, explain: "4 + 5 = 9; 3 + 2 = 5: 59." },
      { type: "num", q: "Quanto fa 47 + 36?", answer: 83, explain: "7 + 6 = 13: scrivo 3, riporto 1. 1 + 4 + 3 = 8: 83." },
      { type: "num", q: "Quanto fa 58 + 27?", answer: 85, explain: "8 + 7 = 15: scrivo 5, riporto 1. 1 + 5 + 2 = 8: 85." },
      { type: "mc", q: "Come si chiama il risultato dell'addizione?", options: ["differenza", "somma", "prodotto"], answer: 1, explain: "Il risultato dell'addizione è la somma." },
      { type: "tf", q: "In colonna si comincia dalle decine.", answer: false, explain: "Si comincia sempre dalle unità." },
      { type: "tf", q: "29 + 45 dà lo stesso risultato di 45 + 29.", answer: true, explain: "Proprietà commutativa: 74 in tutti e due i casi." },
      { type: "mc", q: "In 36 + 48, quanto fanno le unità?", options: ["14", "4", "12"], answer: 0, explain: "6 + 8 = 14: scrivo 4 e riporto 1." },
      { type: "text", q: "Come si chiamano i numeri che si sommano?", answer: ["addendi", "gli addendi"], explain: "Si chiamano addendi." },
      { type: "num", q: "Marta ha 38 perline rosse e 44 blu. Quante perline ha?", answer: 82, explain: "8 + 4 = 12: scrivo 2, riporto 1. 1 + 3 + 4 = 8: 82." },
      { type: "num", q: "Un libro ha 56 pagine, un altro 39. Quante pagine in tutto?", answer: 95, explain: "6 + 9 = 15: scrivo 5, riporto 1. 1 + 5 + 3 = 9: 95." },
      { type: "order", q: "Metti in ordine i passi dell'addizione in colonna con il cambio.", items: ["Incolonno unità sotto unità e decine sotto decine", "Sommo le unità", "Scrivo l'unità e riporto la decina", "Sommo le decine con il riporto"], explain: "È l'ordine giusto: si parte sempre dalle unità." }
    ],
    gen: [["add100", 3]]
  }
});

TOPIC('it', {
  id: "p2-mat-numeri-100",
  title: "I numeri fino a 100",
  intro: "Dopo il 20 i numeri continuano… fino a <b>100</b>! 💯 Impariamo a contarli con le <b>decine</b> e le <b>unità</b>, a fare i <b>salti</b> e a capire quale numero è più grande.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Decine e unità",
      html: `<p>Quando abbiamo <b>10 unità</b>, le mettiamo insieme in un pacchetto: è una <b>decina</b>! 📦</p>
<p><b>10 unità = 1 decina</b></p>
<p>Ogni numero a due cifre è fatto di <b>decine</b> e <b>unità</b>:</p>
<ul>
<li><b>47</b> = <span style="color:#dc2626"><b>4</b> decine</span> e <span style="color:#2563eb"><b>7</b> unità</span> = 40 + 7</li>
<li><b>30</b> = 3 decine e 0 unità</li>
<li><b>85</b> = 8 decine e 5 unità = 80 + 5</li>
</ul>
<p>La cifra a <b>sinistra</b> conta le decine (da), quella a <b>destra</b> le unità (u). La <b>posizione</b> è importantissima: 47 e 74 sono numeri diversissimi!</p>`
    },
    {
      type: "svg",
      title: "47 con le stecche e i cubetti",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g fill="#f87171" stroke="#991b1b" stroke-width="2">
<rect x="40" y="40" width="28" height="200" rx="4"/><rect x="80" y="40" width="28" height="200" rx="4"/>
<rect x="120" y="40" width="28" height="200" rx="4"/><rect x="160" y="40" width="28" height="200" rx="4"/>
</g>
<g stroke="#991b1b" stroke-width="1.5">
<line x1="40" y1="60" x2="188" y2="60"/><line x1="40" y1="80" x2="188" y2="80"/><line x1="40" y1="100" x2="188" y2="100"/><line x1="40" y1="120" x2="188" y2="120"/>
<line x1="40" y1="140" x2="188" y2="140"/><line x1="40" y1="160" x2="188" y2="160"/><line x1="40" y1="180" x2="188" y2="180"/><line x1="40" y1="200" x2="188" y2="200"/><line x1="40" y1="220" x2="188" y2="220"/>
</g>
<g fill="#60a5fa" stroke="#1e3a8a" stroke-width="2">
<rect x="230" y="200" width="28" height="28" rx="3"/><rect x="265" y="200" width="28" height="28" rx="3"/><rect x="300" y="200" width="28" height="28" rx="3"/><rect x="335" y="200" width="28" height="28" rx="3"/>
<rect x="230" y="165" width="28" height="28" rx="3"/><rect x="265" y="165" width="28" height="28" rx="3"/><rect x="300" y="165" width="28" height="28" rx="3"/>
</g>
<text x="114" y="275" font-size="22" text-anchor="middle" fill="#991b1b" font-weight="bold">4 decine = 40</text>
<text x="296" y="275" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">7 unità = 7</text>
<rect x="400" y="70" width="170" height="150" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="450" y="105" font-size="22" text-anchor="middle" fill="#991b1b" font-weight="bold">da</text>
<text x="520" y="105" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">u</text>
<text x="450" y="180" font-size="64" text-anchor="middle" fill="#dc2626" font-weight="bold">4</text>
<text x="520" y="180" font-size="64" text-anchor="middle" fill="#2563eb" font-weight="bold">7</text>
</svg>`,
      caption: "Ogni stecca rossa ha 10 cubetti: è una decina. I cubetti blu sciolti sono le unità."
    },
    {
      type: "3d",
      title: "Costruisci i numeri con i cubetti 3D",
      scene: "blocks",
      options: { mode: "base10", value: 47 },
      caption: "Gira il modello e cambia il numero con il cursore: guarda come crescono le stecche delle decine."
    },
    {
      type: "widget",
      title: "L'abaco",
      widget: "abacus",
      options: { columns: ["da", "u"], value: 47 },
      caption: "Aggiungi e togli le palline. Quando le unità arrivano a 10, diventano 1 pallina delle decine!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: decine e unità",
      questions: [
        { type: "num", q: "Quante decine ci sono in 63?", answer: 6, explain: "63 = 6 decine e 3 unità." },
        { type: "num", q: "Che numero è 5 decine e 2 unità?", answer: 52, explain: "50 + 2 = 52." },
        { type: "tf", q: "In 38 la cifra 8 indica le decine.", answer: false, explain: "L'8 è a destra: indica le unità. Le decine sono 3." }
      ]
    },
    {
      type: "text",
      title: "Contare a salti",
      html: `<p>Contare uno alla volta fino a 100 è lungo! Possiamo fare dei <b>salti</b> 🦘:</p>
<ul>
<li>salti da <b>10</b>: 10, 20, 30, 40, 50, 60, 70, 80, 90, <b>100</b></li>
<li>salti da <b>5</b>: 5, 10, 15, 20, 25, 30…</li>
<li>salti da <b>2</b>: 2, 4, 6, 8, 10, 12… sono i numeri <b>pari</b>!</li>
</ul>
<p>I numeri che non si trovano saltando di 2 da 0 (1, 3, 5, 7…) sono i numeri <b>dispari</b>. Trucco: guarda l'unità! Se è 0, 2, 4, 6, 8 il numero è pari.</p>`
    },
    {
      type: "widget",
      title: "Salti da 10 sulla retta",
      widget: "numberLine",
      options: { min: 0, max: 100, step: 10, marks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
      caption: "Ogni salto aggiunge una decina. Con 10 salti arrivi a 100!"
    },
    {
      type: "text",
      title: "Prima, dopo e confronto",
      html: `<ul>
<li>Il <b>precedente</b> di un numero è quello che viene <b>subito prima</b> (−1): il precedente di 40 è <b>39</b>.</li>
<li>Il <b>successivo</b> è quello che viene <b>subito dopo</b> (+1): il successivo di 59 è <b>60</b>.</li>
</ul>
<p>Per <b>confrontare</b> due numeri:</p>
<ol>
<li>guarda prima le <b>decine</b>: vince chi ne ha di più → 72 &gt; 58;</li>
<li>se le decine sono uguali, guarda le <b>unità</b> → 46 &gt; 43.</li>
</ol>
<p>Il segno <b>&gt;</b> vuol dire «maggiore», <b>&lt;</b> vuol dire «minore», <b>=</b> «uguale». La bocca del coccodrillo 🐊 si apre sempre verso il numero più grande!</p>`
    },
    {
      type: "example",
      title: "Esempio: le figurine di Tommaso ⚽",
      html: `<p>Tommaso ha <b>6 bustine</b> da 10 figurine e <b>8 figurine sciolte</b>.</p>
<p>Quante figurine ha? 6 decine e 8 unità = 60 + 8 = <b>68</b> figurine.</p>
<p>Il suo amico Elia ne ha <b>71</b>. Chi ne ha di più? Elia ha 7 decine, Tommaso 6: <b>71 &gt; 68</b>. Vince Elia!</p>`
    },
    {
      type: "example",
      title: "Esempio: le uova al mercato 🥚",
      html: `<p>Il contadino mette le uova in contenitori da <b>10</b>. Ha riempito <b>9</b> contenitori e gli restano <b>4</b> uova.</p>
<p>Uova in tutto: 9 decine e 4 unità = <b>94</b>.</p>
<p>Quante ne mancano per arrivare a 100? Il successivo di 94 è 95, poi 96, 97, 98, 99, 100: ne mancano <b>6</b>!</p>`
    },
    {
      type: "text",
      title: "Leggere e scrivere i numeri in parole",
      html: `<p>Le decine si chiamano: dieci, venti, trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta, <b>cento</b>.</p>
<p>Poi si aggiunge l'unità: venti + tre = <b>ventitré</b>, quaranta + cinque = <b>quarantacinque</b>.</p>
<p>⚠️ Attenzione con <b>uno</b> e <b>otto</b>, che cominciano per vocale: la vocale finale della decina cade! venti + uno = <b>ventuno</b>, trenta + otto = <b>trentotto</b>.</p>
<p>E i numeri che finiscono con 3 vogliono l'accento: ventitré, trentatré. 😉</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>francese</b> il numero 80 si dice <i>quatre-vingts</i>, cioè «<b>quattro volte venti</b>»! 🇫🇷 E 90 si dice «quattro-venti-dieci».</p>
<p>È un ricordo di un antico modo di contare a gruppi di 20, forse usando dita delle mani <b>e</b> dei piedi. Anche i <b>Maya</b> in America contavano a gruppi di 20.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Perché contiamo proprio a gruppi di <b>10</b>? Molto probabilmente perché abbiamo <b>10 dita</b>! 🖐️🖐️</p>
<p>Le cifre che usiamo (0, 1, 2… 9) sono nate in <b>India</b>, sono passate agli <b>Arabi</b> e sono arrivate in Italia grazie a <b>Leonardo Fibonacci</b> di Pisa, che le spiegò nel suo libro <i>Liber Abaci</i> nel <b>1202</b>. Prima si usavano i numeri romani: 47 si scriveva XLVII!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>10 unità = 1 decina</b>; <b>10 decine = 1 centinaio = 100</b>.</li>
<li>Nei numeri a due cifre: a sinistra le <b>decine</b>, a destra le <b>unità</b>.</li>
<li>Per confrontare: prima le decine, poi le unità.</li>
<li>Precedente = −1, successivo = +1.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i numeri fino a 100",
      intro: "I numeri si possono vedere, toccare, ascoltare… Scegli il modo che fa per te.",
      tabs: [
        {
          label: "💶 Con i soldi",
          html: `<p>Hai monete da <b>10 centesimi</b> e da <b>1 centesimo</b>.</p>
<ul>
<li>Le monete da 10 cent sono le <b>decine</b> 🪙.</li>
<li>Le monete da 1 cent sono le <b>unità</b>.</li>
</ul>
<p>Per pagare <b>35 centesimi</b> usi 3 monete da 10 e 5 monete da 1. Con <b>10 monete da 10 cent</b> arrivi a <b>100 centesimi = 1 euro</b>!</p>`
        },
        {
          label: "🧮 La tabella del 100",
          html: `<p>Metti i numeri da 1 a 100 in una tabella di 10 righe e 10 colonne.</p>
<ul>
<li>Scendendo di una riga aggiungi <b>10</b> (12 → 22 → 32).</li>
<li>Spostandoti a destra aggiungi <b>1</b>.</li>
<li>Tutti i numeri di una colonna finiscono con la stessa unità!</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<g font-size="15" text-anchor="middle" fill="#1f2937">
<rect x="50" y="20" width="500" height="25" fill="#fee2e2"/>
<text x="75" y="38">1</text><text x="125" y="38">2</text><text x="175" y="38">3</text><text x="225" y="38">4</text><text x="275" y="38">5</text><text x="325" y="38">6</text><text x="375" y="38">7</text><text x="425" y="38">8</text><text x="475" y="38">9</text><text x="525" y="38">10</text>
<text x="75" y="68">11</text><text x="125" y="68">12</text><text x="175" y="68">13</text><text x="225" y="68">14</text><text x="275" y="68">15</text><text x="325" y="68">16</text><text x="375" y="68">17</text><text x="425" y="68">18</text><text x="475" y="68">19</text><text x="525" y="68">20</text>
<text x="75" y="98">21</text><text x="125" y="98">22</text><text x="175" y="98">23</text><text x="225" y="98">24</text><text x="275" y="98">25</text><text x="325" y="98">26</text><text x="375" y="98">27</text><text x="425" y="98">28</text><text x="475" y="98">29</text><text x="525" y="98">30</text>
<text x="75" y="128">31</text><text x="125" y="128">32</text><text x="175" y="128">33</text><text x="225" y="128">34</text><text x="275" y="128">35</text><text x="325" y="128">36</text><text x="375" y="128">37</text><text x="425" y="128">38</text><text x="475" y="128">39</text><text x="525" y="128">40</text>
<text x="300" y="165" font-size="22">⋮</text>
<text x="75" y="218">81</text><text x="125" y="218">82</text><text x="175" y="218">83</text><text x="225" y="218">84</text><text x="275" y="218">85</text><text x="325" y="218">86</text><text x="375" y="218">87</text><text x="425" y="218">88</text><text x="475" y="218">89</text><text x="525" y="218">90</text>
<text x="75" y="248">91</text><text x="125" y="248">92</text><text x="175" y="248">93</text><text x="225" y="248">94</text><text x="275" y="248">95</text><text x="325" y="248">96</text><text x="375" y="248">97</text><text x="425" y="248">98</text><text x="475" y="248">99</text><text x="525" y="248" font-weight="bold" fill="#dc2626">100</text>
</g>
<rect x="105" y="50" width="40" height="205" rx="8" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="300" y="285" font-size="16" text-anchor="middle" fill="#2563eb">colonna blu: 2, 12, 22, 32… +10 ogni riga</text>
</svg>`
        },
        {
          label: "🇨🇳 Contare come in Cina",
          html: `<p>In <b>cinese</b> (e anche in giapponese e coreano) i numeri si dicono in modo logicissimo:</p>
<ul>
<li>11 = «<b>dieci-uno</b>» (shí-yī)</li>
<li>20 = «<b>due-dieci</b>» (èr-shí)</li>
<li>47 = «<b>quattro-dieci-sette</b>» (sì-shí-qī)</li>
</ul>
<p>Il nome stesso dice quante decine e quante unità! Prova a dire così i numeri in italiano: 65 = «sei-dieci-cinque». Ti aiuta a vedere le decine?</p>`
        },
        {
          label: "🧊 Cubetti 3D",
          html: `<p>Prova a costruire <b>100</b>: quante stecche da 10 servono? Gira il modello e guarda: 10 stecche formano un <b>quadrato</b>, la «piastra» del centinaio!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 100 }
        },
        {
          label: "🦘 Salti da 5",
          html: `<p>Conta a salti da 5, come le dita di una mano: 5, 10, 15, 20… Quanti salti servono per arrivare a 50?</p>`,
          widget: "numberLine",
          options: { min: 0, max: 50, step: 5, marks: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei numeri fino a 100",
      nodes: [
        { id: "unita", label: "Unità", x: 15, y: 10, color: "#2563eb", html: "Ogni singolo oggetto contato: 1.", why: "È il punto di partenza di ogni conteggio: un dito, un sassolino, una tacca su un bastone. Gli esseri umani contano così da decine di migliaia di anni." },
        { id: "decina", label: "Decina", x: 50, y: 10, color: "#dc2626", html: "Un gruppo di 10 unità.", why: "Raggruppiamo a 10 perché abbiamo 10 dita: quasi tutti i popoli del mondo hanno scelto il 10 come base." },
        { id: "cento", label: "Cento", x: 85, y: 10, color: "#a855f7", html: "10 decine = 100.", why: "La parola viene dal latino <i>centum</i>. Da qui vengono anche centimetro (la centesima parte del metro) e centesimo (la centesima parte dell'euro)." },
        { id: "posizione", label: "Valore di posizione", x: 50, y: 40, color: "#f59e0b", html: "La stessa cifra vale di più se è più a sinistra: in 44 il primo 4 vale 40.", why: "È l'idea geniale dei matematici dell'<b>India</b> (circa 1500 anni fa): con sole 10 cifre si scrivono tutti i numeri. I Romani invece usavano simboli diversi per ogni valore (X, L, C)." },
        { id: "zero", label: "Lo zero", x: 18, y: 65, color: "#64748b", html: "Il segno che dice «qui non c'è niente»: 30 = 3 decine e 0 unità.", why: "Senza lo zero non distingueremmo 3 da 30! Fu il matematico indiano <b>Brahmagupta</b> (anno 628) a scrivere le prime regole per calcolare con lo zero." },
        { id: "salti", label: "Contare a salti", x: 82, y: 40, color: "#16a34a", html: "Contare di 2, di 5, di 10.", why: "Saltare è più veloce che contare uno a uno ed è la base delle tabelline: i salti da 5 sono la tabellina del 5!" },
        { id: "confronto", label: "Confronto > <", x: 50, y: 68, color: "#0ea5e9", html: "Prima si guardano le decine, poi le unità.", why: "Le decine valgono di più: anche 9 unità non bastano a fare una decina, quindi 60 > 59. I segni > e < furono inventati dal matematico inglese <b>Thomas Harriot</b> (pubblicati nel 1631)." },
        { id: "pari", label: "Pari e dispari", x: 82, y: 72, color: "#14b8a6", html: "Pari: unità 0, 2, 4, 6, 8. Dispari: 1, 3, 5, 7, 9.", why: "Un numero è pari se si può dividere in due gruppi uguali, senza avanzi. Basta guardare le unità perché ogni decina si divide sempre in due parti da 5." },
        { id: "fibonacci", label: "Cifre indo-arabe", x: 30, y: 90, color: "#ef4444", html: "Le cifre 0–9 che usiamo oggi.", why: "Nate in India, portate dagli Arabi e diffuse in Europa da <b>Leonardo Fibonacci</b> con il <i>Liber Abaci</i> (1202)." }
      ],
      edges: [
        ["unita", "decina", "10 formano"],
        ["decina", "cento", "10 formano"],
        ["decina", "posizione", "si scrive con"],
        ["posizione", "zero", "ha bisogno di"],
        ["decina", "salti", "si conta con"],
        ["posizione", "confronto", "serve per"],
        ["unita", "pari", "decide"],
        ["fibonacci", "posizione", "usa"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: confronti e salti",
      questions: [
        { type: "mc", q: "Quale numero è maggiore?", options: ["69", "71", "17"], answer: 1, explain: "71 ha 7 decine: più di 69 (6 decine)." },
        { type: "num", q: "Qual è il successivo di 79?", answer: 80, explain: "79 + 1 = 80: 9 unità + 1 fanno una nuova decina." },
        { type: "mc", q: "Contando a salti da 10: 30, 40, 50, …", options: ["51", "60", "55"], answer: 1, explain: "50 + 10 = 60." }
      ]
    }
  ],
  glossary: [
    { t: "Unità", d: "Un singolo elemento. Si scrive a destra nei numeri a due cifre." },
    { t: "Decina", d: "Gruppo di 10 unità." },
    { t: "Centinaio", d: "Gruppo di 10 decine, cioè 100." },
    { t: "Precedente", d: "Il numero che viene subito prima (−1)." },
    { t: "Successivo", d: "Il numero che viene subito dopo (+1)." },
    { t: "Numero pari", d: "Numero che finisce con 0, 2, 4, 6, 8." },
    { t: "Numero dispari", d: "Numero che finisce con 1, 3, 5, 7, 9." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Che numero è 7 decine e 4 unità?", answer: 74, explain: "70 + 4 = 74." },
      { type: "num", q: "Quante unità ci sono in 58 (oltre alle decine)?", answer: 8, explain: "58 = 5 decine e 8 unità." },
      { type: "mc", q: "Quante decine ci sono in 100?", options: ["1", "10", "100"], answer: 1, explain: "10 decine = 100." },
      { type: "num", q: "Qual è il precedente di 60?", answer: 59, explain: "60 − 1 = 59." },
      { type: "mc", q: "Quale confronto è giusto?", options: ["45 > 54", "45 < 54", "45 = 54"], answer: 1, explain: "45 ha 4 decine, 54 ne ha 5." },
      { type: "tf", q: "36 è un numero pari.", answer: true, explain: "Finisce con 6: è pari." },
      { type: "tf", q: "Si scrive «ventiuno».", answer: false, explain: "Si scrive «ventuno»: la I di venti cade davanti a «uno»." },
      { type: "mc", q: "Contando a salti da 5: 15, 20, 25, …", options: ["26", "30", "35"], answer: 1, explain: "25 + 5 = 30." },
      { type: "text", q: "Scrivi in lettere il numero 38.", answer: ["trentotto"], explain: "Trenta + otto = trentotto: la A cade." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["19", "41", "47", "74", "91"], explain: "Prima si guardano le decine, poi le unità." },
      { type: "num", q: "Luca ha 3 scatole da 10 matite e 9 matite sciolte. Quante matite ha?", answer: 39, explain: "3 decine e 9 unità = 39." }
    ],
    gen: [["tensUnits", 2], ["compare100", 2]]
  }
});

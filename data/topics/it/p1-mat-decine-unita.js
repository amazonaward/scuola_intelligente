TOPIC('it', {
  id: "p1-mat-decine-unita",
  title: "Decine e unità",
  intro: "Contare 37 caramelle una per una è lungo e ci si sbaglia! 🍬 Ma se le mettiamo in <b>sacchetti da 10</b>, diventa facilissimo. Scopriamo le <b>decine</b> e le <b>unità</b> e perché la <b>posizione</b> di una cifra cambia il suo valore.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Raggruppare per 10",
      html: `<p>Abbiamo un mucchio di matite ✏️. Invece di contarle una per una, facciamo dei <b>mazzetti da 10</b> legati con un elastico.</p>
<ul>
<li>Ogni mazzetto da 10 si chiama <b>decina</b> (si scrive <b>da</b>).</li>
<li>Le matite che restano sciolte si chiamano <b>unità</b> (si scrive <b>u</b>).</li>
</ul>
<p>Se ho <b>2 mazzetti</b> e <b>3 matite sciolte</b>, ho <b>2 decine e 3 unità</b>: 10 + 10 + 3 = <b>23</b> matite!</p>
<p><b>10 unità = 1 decina.</b> È la regola d'oro 🥇.</p>`
    },
    {
      type: "svg",
      title: "23 = 2 decine e 3 unità",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<text x="300" y="40" font-size="28" font-weight="bold" fill="#1f2937" text-anchor="middle">23 = 2 da + 3 u</text>
<g fill="#facc15" stroke="#a16207" stroke-width="2">
<rect x="50" y="70" width="12" height="150"/><rect x="64" y="70" width="12" height="150"/><rect x="78" y="70" width="12" height="150"/><rect x="92" y="70" width="12" height="150"/><rect x="106" y="70" width="12" height="150"/><rect x="120" y="70" width="12" height="150"/><rect x="134" y="70" width="12" height="150"/><rect x="148" y="70" width="12" height="150"/><rect x="162" y="70" width="12" height="150"/><rect x="176" y="70" width="12" height="150"/>
<rect x="230" y="70" width="12" height="150"/><rect x="244" y="70" width="12" height="150"/><rect x="258" y="70" width="12" height="150"/><rect x="272" y="70" width="12" height="150"/><rect x="286" y="70" width="12" height="150"/><rect x="300" y="70" width="12" height="150"/><rect x="314" y="70" width="12" height="150"/><rect x="328" y="70" width="12" height="150"/><rect x="342" y="70" width="12" height="150"/><rect x="356" y="70" width="12" height="150"/>
<rect x="430" y="70" width="12" height="150"/><rect x="470" y="70" width="12" height="150"/><rect x="510" y="70" width="12" height="150"/>
</g>
<rect x="44" y="135" width="150" height="16" fill="#dc2626"/>
<rect x="224" y="135" width="150" height="16" fill="#dc2626"/>
<text x="119" y="255" font-size="22" fill="#b91c1c" text-anchor="middle">1 decina</text>
<text x="299" y="255" font-size="22" fill="#b91c1c" text-anchor="middle">1 decina</text>
<text x="476" y="255" font-size="22" fill="#1d4ed8" text-anchor="middle">3 unità</text>
<text x="300" y="290" font-size="18" fill="#1f2937" text-anchor="middle">Ogni mazzetto legato con l'elastico rosso ha 10 matite.</text>
</svg>`,
      caption: "Due mazzetti da 10 e tre matite sciolte: 23 matite."
    },
    {
      type: "text",
      title: "La posizione delle cifre",
      html: `<p>Nei numeri con due cifre, ogni cifra ha il suo <b>posto</b>:</p>
<table><tr><th>da (decine)</th><th>u (unità)</th><th>numero</th></tr>
<tr><td style="color:#dc2626"><b>2</b></td><td style="color:#2563eb"><b>3</b></td><td><b>23</b></td></tr>
<tr><td style="color:#dc2626"><b>4</b></td><td style="color:#2563eb"><b>0</b></td><td><b>40</b></td></tr>
<tr><td style="color:#dc2626"><b>1</b></td><td style="color:#2563eb"><b>7</b></td><td><b>17</b></td></tr></table>
<ul>
<li>La cifra a <b>destra</b> dice le <b>unità</b>.</li>
<li>La cifra a <b>sinistra</b> dice le <b>decine</b>.</li>
</ul>
<p>Attenzione: <b>23</b> e <b>32</b> hanno le stesse cifre ma sono numeri diversi! In 23 il 2 vale <b>20</b>, in 32 il 2 vale solo <b>2</b>. La <b>posizione</b> cambia il <b>valore</b>.</p>
<p>E lo <b>zero</b>? In <b>40</b> lo 0 dice "nessuna unità sciolta": è un segnaposto importantissimo! Senza lo zero, 40 diventerebbe 4.</p>`
    },
    {
      type: "3d",
      title: "Costruisci i numeri con i cubetti",
      scene: "blocks",
      options: { mode: "base10", value: 23 },
      caption: "Ogni barretta lunga è una decina (10 cubetti), ogni cubetto sciolto è un'unità. Cambia il numero con il cursore."
    },
    {
      type: "quiz",
      title: "Mini-quiz: decine e unità",
      questions: [
        { type: "num", q: "Quante unità ci sono in 1 decina?", answer: 10, explain: "1 decina = 10 unità." },
        { type: "num", q: "3 decine e 5 unità: che numero è?", answer: 35, explain: "30 + 5 = 35." },
        { type: "mc", q: "In 48, la cifra 4 indica…", options: ["4 unità", "4 decine", "48 decine"], answer: 1, explain: "Il 4 è al posto delle decine: vale 40." }
      ]
    },
    {
      type: "widget",
      title: "L'abaco: decine e unità",
      widget: "abacus",
      options: { columns: ["da", "u"], value: 23 },
      caption: "Ogni pallina sull'asta da vale 10, ogni pallina sull'asta u vale 1. Quando sull'asta u arrivi a 10, fai il cambio: togli le 10 palline e aggiungi 1 pallina sull'asta da."
    },
    {
      type: "text",
      title: "Il cambio: 10 unità diventano 1 decina",
      html: `<p>Che cosa succede quando le unità arrivano a <b>10</b>? Si fa il <b>cambio</b> 🔄!</p>
<p>Ho 1 decina e 9 unità (19). Aggiungo 1 unità: ora ho 10 unità sciolte… le lego insieme e diventano <b>1 decina nuova</b>. Ora ho <b>2 decine e 0 unità</b>: 20!</p>
<p>Lo stesso succede quando arrivo a 10 decine: diventano <b>1 centinaio</b> (100). Lo vedrai in seconda!</p>`
    },
    {
      type: "example",
      title: "Esempio: le uova in cartone",
      html: `<p>Al mercato le uova 🥚 sono in <b>cartoni da 10</b>.</p>
<p>La signora Lina compra <b>4 cartoni</b> e <b>6 uova sfuse</b>.</p>
<ul>
<li>4 cartoni = <b>4 decine</b> = 40 uova</li>
<li>6 uova sfuse = <b>6 unità</b></li>
<li>In tutto: 40 + 6 = <b>46 uova</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio: i soldi",
      html: `<p>Con le monete da <b>1 €</b> e le banconote da <b>10 €</b> si fanno le decine e le unità!</p>
<p>💶💶💶 + 🪙🪙🪙🪙🪙 = 3 banconote da 10 € e 5 monete da 1 € = <b>35 €</b>.</p>
<p>Se ho 12 monete da 1 €, posso andare in banca a cambiarne 10 con <b>una banconota da 10 €</b>: mi restano 1 banconota e 2 monete = <b>12 €</b>. È proprio il <b>cambio</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Contiamo a gruppi di 10 perché abbiamo <b>10 dita</b> ✋✋! Ma non tutti hanno fatto così: i <b>Maya</b>, in America centrale, contavano a gruppi di <b>20</b>, usando anche le dita dei piedi 🦶. E gli antichi <b>Babilonesi</b> contavano a gruppi di <b>60</b>: per questo un'ora ha 60 minuti ⏰!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>I nostri numeri (0, 1, 2… 9) si chiamano <b>numeri arabi</b>, ma sono nati in <b>India</b>. Gli Arabi li hanno portati in Europa, e un matematico di Pisa, <b>Leonardo Fibonacci</b>, li ha fatti conoscere in Italia con un libro del <b>1202</b>.</p>
<p>Prima si usavano i <b>numeri romani</b>: X = 10, XX = 20, XXIII = 23. Senza lo zero e senza le posizioni, fare i conti era molto più difficile!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>10 unità = 1 decina</b>.</li>
<li>Nei numeri a due cifre: a <b>destra</b> le <b>unità</b>, a <b>sinistra</b> le <b>decine</b>.</li>
<li>La <b>posizione</b> cambia il valore: 23 ≠ 32.</li>
<li>Lo <b>zero</b> tiene il posto quando non ci sono unità: 40.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire decine e unità",
      intro: "Se le decine ti sembrano difficili, prova come in Cina, con le mani, con i soldi, con la retta o con i bastoncini!",
      tabs: [
        {
          label: "🇨🇳 Come si dicono in Cina",
          html: `<p>In cinese i numeri si dicono proprio come sono fatti!</p>
<ul>
<li>10 = <b>十</b> (shí) = "dieci"</li>
<li>13 = <b>十三</b> (shí sān) = "<b>dieci-tre</b>"</li>
<li>20 = <b>二十</b> (èr shí) = "<b>due-dieci</b>"</li>
<li>47 = <b>四十七</b> (sì shí qī) = "<b>quattro-dieci-sette</b>"</li>
</ul>
<p>Prova anche tu a dire i numeri "alla cinese": 35 = "tre-dieci-cinque", cioè 3 decine e 5 unità. Così è chiarissimo! In italiano invece "undici", "dodici", "quindici" nascondono le decine.</p>`
        },
        {
          label: "✋ Con le mani",
          html: `<p>Ogni bambino ha <b>10 dita</b>: un bambino = <b>una decina</b>!</p>
<p>Quante dita ci sono in classe se ci sono 3 bambini con le mani alzate e un amico che mostra 4 dita? 3 decine + 4 unità = <b>34</b> dita 🙌.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf4ff"/>
<g font-size="44" text-anchor="middle">
<text x="70" y="100">🙌</text><text x="180" y="100">🙌</text><text x="290" y="100">🙌</text><text x="450" y="100">✌️✌️</text>
</g>
<text x="70" y="150" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">10</text>
<text x="180" y="150" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">10</text>
<text x="290" y="150" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">10</text>
<text x="450" y="150" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">4</text>
<text x="300" y="200" font-size="26" font-weight="bold" fill="#1f2937" text-anchor="middle">3 da + 4 u = 34</text>
</svg>`
        },
        {
          label: "📏 Sulla retta, a salti di 10",
          html: `<p>Sulla retta dei numeri puoi fare <b>salti lunghi da 10</b> (le decine) e poi <b>passetti da 1</b> (le unità).</p>
<p>Per arrivare a <b>34</b>: 3 salti da 10 (10, 20, 30) e poi 4 passetti (31, 32, 33, 34).</p>`,
          widget: "numberLine",
          options: { min: 0, max: 40, step: 1, marks: [30, 34] }
        },
        {
          label: "🥢 I bastoncini dei Romani",
          html: `<p>Gli antichi Romani scrivevano <b>X</b> per 10 e <b>I</b> per 1. Contavano le decine mettendo tante X e le unità con tante I:</p>
<ul>
<li>XX = 2 decine = 20</li>
<li>XXIII = 2 decine + 3 unità = 23</li>
<li>XXXI = 31</li>
</ul>
<p>(Per 4 e 9 usavano IV e IX, ma è un'altra storia!) Anche loro raggruppavano per 10, ma senza il <b>valore di posizione</b>: ogni simbolo vale sempre lo stesso, ovunque sia.</p>`
        },
        {
          label: "🧩 Abbina numero e decine",
          html: `<p>Abbina ogni numero alla sua scomposizione in decine e unità.</p>`,
          widget: "match",
          options: { pairs: [["16", "1 da + 6 u"], ["61", "6 da + 1 u"], ["40", "4 da + 0 u"], ["25", "2 da + 5 u"], ["52", "5 da + 2 u"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di decine e unità: tocca un nodo e scopri il perché",
      nodes: [
        { id: "dita", label: "10 dita", x: 50, y: 8, color: "#f97316", html: "Le nostre mani hanno 10 dita.", why: "I primi uomini contavano con le dita: arrivati a 10 dovevano ricominciare e ricordarsi di aver fatto 'una mano doppia'. Così nacque il gruppo da 10." },
        { id: "unita", label: "Unità (u)", x: 20, y: 30, color: "#2563eb", html: "Ogni singolo oggetto: vale 1.", why: "'Unità' viene dal latino <i>unus</i>, uno." },
        { id: "decina", label: "Decina (da)", x: 80, y: 30, color: "#dc2626", html: "Un gruppo di 10 unità.", why: "Dal latino <i>decem</i>, dieci. Raggruppare per 10 permette di contare tanti oggetti senza perdersi." },
        { id: "cambio", label: "Il cambio", x: 50, y: 48, color: "#16a34a", html: "10 unità diventano 1 decina; 10 decine diventano 1 centinaio.", why: "È la regola della base 10: ogni volta che un gruppo si riempie, si passa al gruppo più grande. Gli abachi funzionano proprio così." },
        { id: "posizione", label: "Valore di posizione", x: 25, y: 70, color: "#a855f7", html: "La stessa cifra vale di più se sta più a sinistra: in 23 il 2 vale 20.", why: "È un'invenzione dei matematici dell'India, circa 1500 anni fa. Con solo 10 cifre si possono scrivere tutti i numeri del mondo!" },
        { id: "zero", label: "Lo zero segnaposto", x: 75, y: 70, color: "#64748b", html: "In 40 lo 0 dice 'nessuna unità' e tiene il posto.", why: "Anche lo zero viene dall'India (il matematico Brahmagupta ne scrisse le regole nel 628). Senza zero, 40 e 4 si confonderebbero." },
        { id: "fibonacci", label: "Fibonacci", x: 50, y: 92, color: "#0e7490", html: "Matematico di Pisa che fece conoscere in Europa i numeri indo-arabi.", why: "Nel suo libro <i>Liber Abaci</i> (1202) mostrò ai mercanti quanto era più facile fare i conti con le cifre e le posizioni invece che con i numeri romani." },
        { id: "altre", label: "Altre basi", x: 90, y: 92, color: "#ca8a04", html: "Maya: gruppi da 20. Babilonesi: gruppi da 60.", why: "Il 10 non è obbligatorio: è una scelta legata alle dita. I minuti e i secondi da 60 sono un'eredità dei Babilonesi." }
      ],
      edges: [
        ["dita", "decina", "suggeriscono la"],
        ["unita", "cambio", "10 diventano"],
        ["cambio", "decina", "forma una"],
        ["decina", "posizione", "si scrive a sinistra"],
        ["unita", "posizione", "si scrive a destra"],
        ["posizione", "zero", "ha bisogno dello"],
        ["posizione", "fibonacci", "portato in Europa da"],
        ["dita", "altre", "altri popoli usarono"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la posizione conta",
      questions: [
        { type: "tf", q: "In 52 e in 25 la cifra 5 vale la stessa cosa.", answer: false, explain: "In 52 il 5 vale 50 (decine); in 25 vale 5 (unità)." },
        { type: "num", q: "1 decina e 9 unità + 1 unità = ?", answer: 20, explain: "19 + 1 = 20: le 10 unità diventano una decina nuova." },
        { type: "mc", q: "Quale numero ha 7 decine e 0 unità?", options: ["7", "70", "17"], answer: 1, explain: "7 decine = 70; lo zero tiene il posto delle unità." }
      ]
    }
  ],
  glossary: [
    { t: "Unità (u)", d: "Ogni singolo oggetto; vale 1." },
    { t: "Decina (da)", d: "Un gruppo di 10 unità." },
    { t: "Cifra", d: "Uno dei 10 segni con cui scriviamo i numeri: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9." },
    { t: "Valore di posizione", d: "Il valore di una cifra dipende dal posto in cui si trova." },
    { t: "Cambio", d: "Trasformare 10 unità in 1 decina (o 10 decine in 1 centinaio)." },
    { t: "Abaco", d: "Strumento con aste e palline per rappresentare unità, decine, centinaia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante unità formano 1 decina?", answer: 10, explain: "10 unità = 1 decina." },
      { type: "num", q: "2 decine e 6 unità: che numero è?", answer: 26, explain: "20 + 6 = 26." },
      { type: "num", q: "Quante decine ci sono in 50?", answer: 5, explain: "50 = 5 decine e 0 unità." },
      { type: "num", q: "Quante unità ci sono in 38 (oltre alle decine)?", answer: 8, explain: "38 = 3 decine e 8 unità." },
      { type: "mc", q: "In 64 la cifra delle decine è…", options: ["6", "4", "64"], answer: 0, explain: "Il 6 è a sinistra: decine." },
      { type: "mc", q: "Quale scomposizione è giusta per 17?", options: ["7 da + 1 u", "1 da + 7 u", "17 da"], answer: 1, explain: "17 = 1 decina e 7 unità." },
      { type: "tf", q: "In 30 lo zero non serve a niente.", answer: false, explain: "Lo zero tiene il posto delle unità: senza zero leggeremmo 3." },
      { type: "tf", q: "45 e 54 sono lo stesso numero.", answer: false, explain: "Hanno le stesse cifre in posizioni diverse: 45 = 4 da + 5 u; 54 = 5 da + 4 u." },
      { type: "num", q: "Hai 3 cartoni da 10 uova e 4 uova sfuse. Quante uova hai?", answer: 34, explain: "3 decine + 4 unità = 34." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["19", "23", "32", "41"], explain: "Si confrontano prima le decine: 1, 2, 3, 4." },
      { type: "text", q: "Come si chiama un gruppo di 10 unità?", answer: ["decina", "la decina", "una decina"], explain: "È la decina." },
      { type: "num", q: "Hai 1 decina e 12 unità sciolte. Fai il cambio: quante decine hai ora?", answer: 2, explain: "10 delle 12 unità diventano 1 decina: 2 decine e 2 unità = 22." }
    ],
    gen: [["tensUnits", 3]]
  }
});

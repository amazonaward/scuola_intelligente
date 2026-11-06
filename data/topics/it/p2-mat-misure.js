TOPIC('it', {
  id: "p2-mat-misure",
  title: "Misurare",
  intro: "Quanto è lungo il banco? Pesa di più lo zaino o l'astuccio? Quanta acqua sta nella bottiglia? 📏⚖️🧴 Per rispondere bisogna <b>misurare</b>: confrontare una cosa con un'altra che usiamo come <b>unità di misura</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Confrontare: più lungo, più corto",
      html: `<p>Prima di misurare con i numeri, possiamo <b>confrontare</b>:</p>
<ul>
<li>📏 <b>Lunghezza</b>: la matita è <b>più lunga</b> della gomma; la gomma è <b>più corta</b> della matita.</li>
<li>🏠 <b>Altezza</b>: la giraffa è <b>più alta</b> del cane; il cane è <b>più basso</b>.</li>
<li>⚖️ <b>Peso</b>: lo zaino è <b>più pesante</b> del quaderno; il quaderno è <b>più leggero</b>.</li>
<li>🧴 <b>Capacità</b>: la bottiglia <b>contiene più</b> acqua del bicchiere.</li>
</ul>
<p>Per confrontare due lunghezze bisogna metterle <b>una accanto all'altra</b>, partendo dallo <b>stesso punto</b>!</p>`
    },
    {
      type: "svg",
      title: "Lungo e corto, pesante e leggero",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="40" x2="30" y2="140" stroke="#94a3b8" stroke-width="3" stroke-dasharray="6 4"/>
<rect x="30" y="55" width="240" height="24" rx="6" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<polygon points="270,55 300,67 270,79" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<rect x="30" y="100" width="90" height="24" rx="6" fill="#f472b6" stroke="#9d174d" stroke-width="2"/>
<text x="320" y="73" font-size="18" fill="#713f12" font-weight="bold">matita: più lunga</text>
<text x="140" y="118" font-size="18" fill="#831843" font-weight="bold">gomma: più corta</text>
<line x1="300" y1="270" x2="300" y2="185" stroke="#475569" stroke-width="6"/>
<polygon points="270,280 330,280 300,265" fill="#475569"/>
<line x1="170" y1="205" x2="430" y2="175" stroke="#475569" stroke-width="6"/>
<line x1="185" y1="205" x2="185" y2="235" stroke="#475569" stroke-width="2"/>
<line x1="415" y1="177" x2="415" y2="200" stroke="#475569" stroke-width="2"/>
<path d="M140 235 L230 235 L215 255 L155 255 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/>
<path d="M370 200 L460 200 L445 220 L385 220 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/>
<text x="185" y="230" font-size="30" text-anchor="middle">🎒</text>
<text x="415" y="196" font-size="24" text-anchor="middle">✏️</text>
<text x="120" y="290" font-size="17" fill="#1e3a8a" font-weight="bold">più pesante: scende</text>
<text x="400" y="250" font-size="17" fill="#1e3a8a" font-weight="bold">più leggero: sale</text>
</svg>`,
      caption: "Sopra: si confrontano le lunghezze partendo dalla stessa linea. Sotto: sulla bilancia a due piatti scende il lato più pesante."
    },
    {
      type: "text",
      title: "Misurare con il corpo: spanne, piedi, passi",
      html: `<p>Per sapere <b>quanto</b> è lungo il banco posso contare quante <b>spanne</b> ✋ ci stanno: per esempio 4 spanne.</p>
<p>Ma se lo misura la maestra, che ha la mano più grande, trova solo 3 spanne! 🤔</p>
<p>Le spanne, i piedi e i passi sono <b>misure arbitrarie</b>: cambiano da persona a persona. Vanno bene per giocare, ma non per fare un vestito o costruire una casa.</p>`
    },
    {
      type: "example",
      title: "Esempio: quanto è lunga l'aula?",
      html: `<p>Marta misura l'aula con i suoi passi 👣: <b>12 passi</b>.</p>
<p>Il papà di Marta, che ha le gambe lunghe, la misura: <b>7 passi</b>.</p>
<p>L'aula non si è accorciata! Sono i passi del papà a essere <b>più lunghi</b>. Più grande è l'unità di misura, <b>meno volte</b> ci sta.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: confrontare",
      questions: [
        { type: "mc", q: "Che cosa usi per sapere se l'anguria pesa più del melone?", options: ["Il righello", "La bilancia", "L'orologio"], answer: 1, explain: "Il peso si misura con la bilancia." },
        { type: "tf", q: "Le spanne di tutti sono lunghe uguali.", answer: false, explain: "Le mani sono diverse: per questo la spanna è una misura arbitraria." },
        { type: "mc", q: "Misuro un tappeto con le spanne. Chi trova un numero più grande?", options: ["Chi ha la mano piccola", "Chi ha la mano grande", "Trovano lo stesso numero"], answer: 0, explain: "Con una mano piccola servono più spanne per coprire la stessa lunghezza." }
      ]
    },
    {
      type: "text",
      title: "Il metro: una misura uguale per tutti",
      html: `<p>Per mettersi d'accordo, gli scienziati hanno inventato un'unità di misura <b>uguale in tutto il mondo</b>: il <b>metro</b> (si scrive <b>m</b>).</p>
<ul>
<li>📏 1 metro è più o meno il passo lungo di un adulto, o l'altezza di un bambino di 4-5 anni.</li>
<li>Il metro si divide in <b>100 centimetri</b> (<b>cm</b>). 1 cm è più o meno la larghezza della punta del tuo dito mignolo.</li>
<li>Il tuo <b>righello</b> di solito è lungo 20 o 30 cm.</li>
</ul>
<p>⚠️ Quando misuri con il righello, parti dallo <b>0</b>, non dal bordo!</p>`
    },
    {
      type: "widget",
      title: "Il righello: misura i salti",
      widget: "numberLine",
      options: { min: 0, max: 30, step: 1, marks: [0, 10, 20, 30] },
      caption: "Questa retta è come un righello da 30 cm: ogni tacca è 1 centimetro. Una gomma lunga 5 cm va da 0 a 5. Prova a fare salti!"
    },
    {
      type: "remember",
      title: "Che cosa misuro e con che cosa?",
      html: `<table>
<tr><th>Che cosa</th><th>Unità</th><th>Strumento</th></tr>
<tr><td>📏 Lunghezza</td><td><b>metro</b> (m), centimetro (cm)</td><td>righello, metro da sarta, metro a nastro</td></tr>
<tr><td>⚖️ Peso (massa)</td><td><b>chilogrammo</b> (kg), grammo (g)</td><td>bilancia</td></tr>
<tr><td>🧴 Capacità</td><td><b>litro</b> (l)</td><td>caraffa graduata, misurino</td></tr>
</table>
<p>1 kg = 1000 g. Un pacco di pasta pesa di solito 500 g, cioè mezzo chilo. Una bottiglia grande d'acqua contiene 1 litro e mezzo.</p>`
    },
    {
      type: "3d",
      title: "Misura una scatola in 3D",
      scene: "solid",
      options: { shape: "box", w: 3, h: 1, d: 2, color: "#f59e0b", labels: true },
      caption: "Una scatola ha tre misure: lunghezza, larghezza e altezza. Ruotala: quale lato è il più lungo? Quale il più corto?"
    },
    {
      type: "widget",
      title: "Che cosa si misura? Metti in ordine",
      widget: "classify",
      options: {
        groups: ["📏 Metri / centimetri", "⚖️ Chili / grammi", "🧴 Litri"],
        items: [
          ["La lunghezza del corridoio", 0],
          ["Quanto pesa un'anguria", 1],
          ["L'acqua nella vasca", 2],
          ["L'altezza di un albero", 0],
          ["Quanto pesi tu", 1],
          ["Il latte nel cartone", 2],
          ["La larghezza della lavagna", 0],
          ["La farina per la torta", 1]
        ]
      },
      caption: "Ogni grandezza ha la sua unità di misura."
    },
    {
      type: "example",
      title: "Esempio: in cucina con la nonna 🎂",
      html: `<p>Per la torta servono <b>200 g</b> di farina, <b>100 g</b> di zucchero e <b>1/4 di litro</b> di latte.</p>
<p>La nonna pesa la farina sulla bilancia e versa il latte nel misurino. Se misurasse «a occhio», la torta potrebbe venire troppo dura o troppo molle!</p>
<p>In tutto, farina e zucchero pesano 200 + 100 = <b>300 g</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il metro è nato dalla Terra",
      html: `<p>Nel <b>1791</b>, durante la Rivoluzione francese, gli scienziati di Parigi decisero che il metro sarebbe stato <b>una parte su 10 milioni</b> della distanza dal Polo Nord all'Equatore. Due astronomi, Delambre e Méchain, passarono <b>7 anni</b> a misurare la Francia da Dunkerque a Barcellona!</p>
<p>Nel 1799 fu costruito un metro «campione» di <b>platino</b>. In Italia il metro diventò obbligatorio nel <b>1861</b>, con l'Unità d'Italia: prima ogni città aveva le sue misure (il «braccio» di Firenze era diverso da quello di Milano!).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Pollici e piedi",
      html: `<p>Negli <b>Stati Uniti</b> si usano ancora i <b>pollici</b> (inch, circa 2,5 cm) e i <b>piedi</b> (foot, circa 30 cm). Anche gli schermi dei televisori si misurano in pollici: un TV da 50 pollici ha la diagonale di circa 127 cm!</p>
<p>Nel 1999 una sonda spaziale della NASA, il <b>Mars Climate Orbiter</b>, andò perduta su Marte perché una squadra aveva fatto i calcoli in misure americane e un'altra nel sistema metrico. Ecco perché serve una misura <b>uguale per tutti</b>! 🚀</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le misure",
      intro: "Le misure si capiscono meglio usandole: prova queste strade.",
      tabs: [
        {
          label: "🧱 Con i mattoncini",
          html: `<p>Usa un mattoncino come unità di misura: quanti mattoncini in fila ci vogliono per fare la lunghezza del tuo astuccio?</p>
<p>Se tutti usano <b>lo stesso mattoncino</b>, tutti trovano lo stesso numero. È proprio questa l'idea del metro: un «mattoncino» uguale per tutto il mondo! Qui ogni cubetto è come 1 centimetro.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 1, b: 10 }
        },
        {
          label: "🦒 Il mio corpo-righello",
          html: `<p>Impara a memoria qualche misura del tuo corpo e diventerai un righello vivente:</p>
<ul>
<li>la larghezza del dito mignolo ≈ <b>1 cm</b>;</li>
<li>la tua spanna ≈ <b>15 cm</b>;</li>
<li>le braccia aperte ≈ la tua <b>altezza</b> (provalo! L'aveva notato anche <b>Leonardo da Vinci</b> nell'Uomo vitruviano).</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ecfeff"/>
<circle cx="300" cy="60" r="26" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<line x1="300" y1="86" x2="300" y2="170" stroke="#0e7490" stroke-width="8"/>
<line x1="180" y1="110" x2="420" y2="110" stroke="#0e7490" stroke-width="8"/>
<line x1="300" y1="170" x2="260" y2="240" stroke="#0e7490" stroke-width="8"/>
<line x1="300" y1="170" x2="340" y2="240" stroke="#0e7490" stroke-width="8"/>
<line x1="180" y1="135" x2="420" y2="135" stroke="#dc2626" stroke-width="3"/>
<text x="300" y="155" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">braccia aperte</text>
<line x1="470" y1="34" x2="470" y2="240" stroke="#16a34a" stroke-width="3"/>
<text x="480" y="140" font-size="17" fill="#15803d" font-weight="bold">altezza</text>
<text x="300" y="20" font-size="18" text-anchor="middle" fill="#0f172a">sono quasi uguali!</text>
</svg>`
        },
        {
          label: "⚖️ La bilancia del parco giochi",
          html: `<p>L'altalena a bilico del parco funziona come una <b>bilancia a due piatti</b>: il bambino più pesante scende, quello più leggero sale. Se pesano uguale, l'altalena resta dritta in <b>equilibrio</b>.</p>
<p>La bilancia della frutta fa la stessa cosa: confronta la frutta con dei pesi di cui conosciamo già il valore (1 kg, 500 g…).</p>`
        },
        {
          label: "🇺🇸 Le misure americane",
          html: `<p>Negli Stati Uniti si misura in modo diverso. Abbina:</p>`,
          widget: "match",
          options: {
            pairs: [
              ["1 inch (pollice)", "circa 2,5 cm"],
              ["1 foot (piede)", "circa 30 cm"],
              ["1 yard (iarda)", "circa 91 cm"],
              ["1 pound (libbra)", "circa 450 g"],
              ["1 gallon (gallone)", "circa 3,8 litri"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle misure: tocca i nodi e scopri il perché",
      nodes: [
        { id: "confronto", label: "Confrontare", x: 50, y: 8, color: "#a855f7", html: "Dire che cosa è più lungo, più pesante, più capiente.", why: "È il primo modo di misurare, che fanno anche i bambini piccoli. Per confrontare le lunghezze bisogna partire dallo stesso punto, se no ci si inganna." },
        { id: "unita", label: "Unità di misura", x: 50, y: 30, color: "#0ea5e9", html: "Una grandezza che scegliamo come «mattoncino» per misurare.", why: "Misurare vuol dire contare <b>quante volte</b> l'unità ci sta nella cosa da misurare. Gli antichi Egizi usavano il <b>cubito</b>, la lunghezza dal gomito alla punta delle dita (circa 52 cm)." },
        { id: "arbitrarie", label: "Misure arbitrarie", x: 15, y: 50, color: "#f97316", html: "Spanna, piede, passo, pollice: misure prese dal corpo.", why: "Il corpo è sempre con noi, quindi per migliaia di anni si misurò così. Ma i corpi sono diversi: ogni città aveva il suo «piede» e il suo «braccio», e nei mercati nascevano litigi e imbrogli." },
        { id: "metro", label: "Il metro", x: 50, y: 55, color: "#16a34a", html: "L'unità di lunghezza uguale in tutto il mondo: 1 m = 100 cm.", why: "Nato in Francia nel <b>1791</b> come una parte su 10 milioni della distanza Polo Nord-Equatore. Dal 1983 è definito con la <b>velocità della luce</b>: è la strada che la luce fa in una piccolissima frazione di secondo, così è uguale ovunque." },
        { id: "kg", label: "Il chilogrammo", x: 85, y: 50, color: "#64748b", html: "L'unità di peso (massa): 1 kg = 1000 g.", why: "All'inizio era il peso di 1 litro d'acqua. Poi per 130 anni fu un cilindretto di metallo conservato vicino a Parigi. Dal 2019 gli scienziati lo definiscono con una costante della fisica, così non può cambiare." },
        { id: "litro", label: "Il litro", x: 85, y: 78, color: "#3b82f6", html: "L'unità di capacità: quanto liquido sta in un contenitore.", why: "Un litro è quanto sta in un cubo con il lato di 10 cm. Così le misure di lunghezza, capacità e peso sono tutte collegate." },
        { id: "strumenti", label: "Strumenti", x: 15, y: 82, color: "#eab308", html: "Righello, metro a nastro, bilancia, caraffa graduata.", why: "Gli strumenti hanno l'unità di misura già disegnata sopra (le tacche), così non dobbiamo contare a mano." },
        { id: "sistema", label: "Sistema metrico", x: 50, y: 92, color: "#ef4444", html: "Tutte le unità si dividono per 10, 100, 1000.", why: "Contiamo a gruppi di 10 (abbiamo 10 dita!), quindi è comodo che anche le misure vadano a gruppi di 10. L'Italia lo adottò per legge nel <b>1861</b>; oggi lo usa quasi tutto il mondo." }
      ],
      edges: [
        ["confronto", "unita", "per dire «quanto» serve una"],
        ["unita", "arbitrarie", "dal corpo:"],
        ["unita", "metro", "uguale per tutti:"],
        ["arbitrarie", "metro", "litigi → nasce il"],
        ["metro", "litro", "cubo di 10 cm"],
        ["litro", "kg", "1 litro d'acqua ≈ 1 kg"],
        ["metro", "sistema", "fa parte del"],
        ["strumenti", "metro", "riportano il"],
        ["kg", "sistema", "fa parte del"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: il metro",
      questions: [
        { type: "num", q: "Quanti centimetri ci sono in 1 metro?", answer: 100, unit: "cm", explain: "1 m = 100 cm." },
        { type: "mc", q: "Con il righello si parte dal…", options: ["bordo del righello", "numero 0", "numero 1"], answer: 1, explain: "Si parte sempre dallo 0." },
        { type: "num", q: "Un nastro è lungo 12 cm, un altro 8 cm. Quanto sono lunghi in tutto?", answer: 20, unit: "cm", explain: "12 + 8 = 20 cm." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Misurare = contare quante volte l'<b>unità di misura</b> sta nella cosa.</li>
<li>Spanne e passi sono misure <b>arbitrarie</b>: cambiano da persona a persona.</li>
<li>Il <b>metro</b> (m) è uguale per tutti: <b>1 m = 100 cm</b>.</li>
<li>Peso → <b>chilogrammo</b> (bilancia). Capacità → <b>litro</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Misurare", d: "Contare quante volte un'unità di misura sta in una cosa." },
    { t: "Unità di misura", d: "La grandezza scelta per misurare (metro, chilo, litro…)." },
    { t: "Misura arbitraria", d: "Misura presa dal corpo o da un oggetto qualsiasi: cambia da persona a persona." },
    { t: "Metro (m)", d: "Unità di lunghezza uguale in tutto il mondo; 1 m = 100 cm." },
    { t: "Centimetro (cm)", d: "La centesima parte del metro." },
    { t: "Chilogrammo (kg)", d: "Unità di peso (massa); 1 kg = 1000 g." },
    { t: "Litro (l)", d: "Unità di capacità, per i liquidi." },
    { t: "Bilancia", d: "Strumento per misurare il peso." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Con quale strumento misuri la lunghezza del quaderno?", options: ["Bilancia", "Righello", "Termometro"], answer: 1, explain: "Le lunghezze si misurano con il righello." },
      { type: "mc", q: "In quale unità si misura il latte nella bottiglia?", options: ["Litri", "Metri", "Chilogrammi"], answer: 0, explain: "I liquidi si misurano in litri." },
      { type: "num", q: "1 metro = quanti centimetri?", answer: 100, unit: "cm", explain: "1 m = 100 cm." },
      { type: "tf", q: "Il passo è una misura arbitraria.", answer: true, explain: "Ogni persona ha un passo diverso." },
      { type: "tf", q: "Sulla bilancia a due piatti, il piatto più pesante sale.", answer: false, explain: "Il piatto più pesante scende." },
      { type: "mc", q: "Che cosa pesa circa 1 chilogrammo?", options: ["Una piuma", "Una bottiglia da 1 litro d'acqua", "Un'automobile"], answer: 1, explain: "1 litro d'acqua pesa circa 1 kg." },
      { type: "order", q: "Metti in ordine dal più corto al più lungo.", items: ["formica 🐜", "matita ✏️", "bicicletta 🚲", "autobus 🚌"], explain: "La formica è lunga pochi millimetri, l'autobus più di 10 metri." },
      { type: "num", q: "Un tavolo è lungo 6 spanne di Sara. Il suo letto è lungo 4 spanne in più. Quante spanne è lungo il letto?", answer: 10, explain: "6 + 4 = 10 spanne." },
      { type: "text", q: "Come si chiama l'unità di lunghezza uguale in tutto il mondo?", answer: ["metro", "il metro", "m"], explain: "Il metro." },
      { type: "num", q: "Un nastro è lungo 30 cm. Ne taglio 10 cm. Quanto è lungo il pezzo rimasto?", answer: 20, unit: "cm", explain: "30 − 10 = 20 cm." },
      { type: "mc", q: "Perché si è inventato il metro?", options: ["Perché le spanne sono troppo corte", "Per avere una misura uguale per tutti", "Per misurare i pesi"], answer: 1, explain: "Le misure del corpo cambiano da persona a persona: il metro è uguale per tutti." }
    ],
    gen: [["add100", 2]]
  }
});

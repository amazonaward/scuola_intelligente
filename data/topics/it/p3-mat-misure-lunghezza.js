TOPIC('it', {
  id: "p3-mat-misure-lunghezza",
  title: "Le misure di lunghezza",
  intro: "Quanto è lungo il tuo banco? E quanto sei alto tu? 📏 Per rispondere usiamo il <b>metro</b> e i suoi \"figli\" più piccoli: <b>decimetro, centimetro e millimetro</b>. Impariamo a misurare e a passare da un'unità all'altra.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Perché serve un'unità di misura uguale per tutti",
      html: `<p><b>Misurare</b> vuol dire scoprire <b>quante volte</b> un'unità di misura sta dentro una lunghezza.</p>
<p>Prova a misurare il banco con le <b>spanne</b> ✋: tu trovi 6 spanne, la maestra 4! Chi ha ragione? Tutti e due… ma le vostre mani sono diverse.</p>
<p>Per questo serve un'unità <b>uguale per tutti</b>, in tutto il mondo: il <b>metro</b> (simbolo <b>m</b>). Si scrive senza punto: 3 m, non 3 m. o 3 mt!</p>`
    },
    {
      type: "text",
      title: "Il metro e i suoi sottomultipli",
      html: `<p>Il metro è un po' troppo lungo per misurare una matita. Allora lo dividiamo in parti più piccole, i <b>sottomultipli</b>:</p>
<ul>
<li>dividendo il metro in <b>10</b> parti uguali → <b>decimetro</b> (<b>dm</b>), largo più o meno come la tua mano;</li>
<li>dividendo il decimetro in <b>10</b> parti → <b>centimetro</b> (<b>cm</b>), largo circa come la punta del tuo mignolo;</li>
<li>dividendo il centimetro in <b>10</b> parti → <b>millimetro</b> (<b>mm</b>), spesso come una monetina da 1 centesimo (che misura circa 1,7 mm).</li>
</ul>
<p>Quindi: <b>1 m = 10 dm = 100 cm = 1000 mm</b>.</p>
<p>I nomi vengono dal latino: <i>deci</i> = 10, <i>centi</i> = 100, <i>milli</i> = 1000. Un decimetro è <b>la decima parte</b> del metro, un centimetro <b>la centesima</b>, un millimetro <b>la millesima</b>.</p>`
    },
    {
      type: "svg",
      title: "Dentro un metro",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="40" y="40" width="500" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<text x="290" y="75" font-size="26" fill="#78350f" text-anchor="middle" font-weight="bold">1 metro (m)</text>
<g stroke="#1e3a8a" stroke-width="3">
<rect x="40" y="120" width="50" height="40" fill="#93c5fd"/><rect x="90" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="140" y="120" width="50" height="40" fill="#93c5fd"/><rect x="190" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="240" y="120" width="50" height="40" fill="#93c5fd"/>
<rect x="290" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="340" y="120" width="50" height="40" fill="#93c5fd"/><rect x="390" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="440" y="120" width="50" height="40" fill="#93c5fd"/><rect x="490" y="120" width="50" height="40" fill="#bfdbfe"/>
</g>
<text x="565" y="148" font-size="20" fill="#1e3a8a" font-weight="bold">10 dm</text>
<line x1="40" y1="160" x2="60" y2="215" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="90" y1="160" x2="540" y2="215" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 4"/>
<g stroke="#166534" stroke-width="2" fill="#bbf7d0">
<rect x="60" y="215" width="48" height="40"/><rect x="108" y="215" width="48" height="40"/><rect x="156" y="215" width="48" height="40"/><rect x="204" y="215" width="48" height="40"/><rect x="252" y="215" width="48" height="40"/>
<rect x="300" y="215" width="48" height="40"/><rect x="348" y="215" width="48" height="40"/><rect x="396" y="215" width="48" height="40"/><rect x="444" y="215" width="48" height="40"/><rect x="492" y="215" width="48" height="40"/>
</g>
<text x="300" y="285" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">1 dm = 10 cm (ingrandito)</text>
</svg>`,
      caption: "Ogni passaggio divide in 10 parti uguali: metro → decimetri → centimetri → millimetri."
    },
    {
      type: "text",
      title: "La tabella e la regola del 10",
      html: `<table>
<tr><th>m</th><th>dm</th><th>cm</th><th>mm</th></tr>
<tr><td>metro</td><td>decimetro</td><td>centimetro</td><td>millimetro</td></tr>
<tr><td>1</td><td>10</td><td>100</td><td>1000</td></tr>
</table>
<p>Ogni unità è <b>10 volte</b> più grande di quella alla sua destra. Quindi:</p>
<ul>
<li>da un'unità <b>più grande</b> a una <b>più piccola</b> (verso destra) → <b>× 10</b> per ogni passo: 3 m = 30 dm = 300 cm.</li>
<li>da un'unità <b>più piccola</b> a una <b>più grande</b> (verso sinistra) → <b>: 10</b> per ogni passo: 500 cm = 50 dm = 5 m.</li>
</ul>
<p>💡 Ragiona così: <b>unità più piccole → servono più pezzi → il numero diventa più grande</b>.</p>`
    },
    {
      type: "remember",
      title: "E le distanze lunghe? I multipli",
      html: `<p>Per misurare strade e viaggi il metro è troppo piccolo. Si usano i <b>multipli</b>:</p>
<ul>
<li><b>decametro</b> (dam) = 10 m</li>
<li><b>ettometro</b> (hm) = 100 m</li>
<li><b>chilometro</b> (km) = <b>1000 m</b> 🚗</li>
</ul>
<p>Il più usato è il <b>chilometro</b>: da Torino a Milano ci sono circa 140 km di autostrada. In 3ª ci concentriamo su <b>m, dm, cm, mm</b>.</p>`
    },
    {
      type: "widget",
      title: "Abbina le misure uguali",
      widget: "match",
      options: {
        pairs: [
          ["1 m", "100 cm"],
          ["1 dm", "10 cm"],
          ["1 cm", "10 mm"],
          ["5 dm", "50 cm"],
          ["2 m", "20 dm"],
          ["30 mm", "3 cm"]
        ]
      },
      caption: "Collega ogni misura alla sua uguale scritta in un'altra unità."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le unità",
      questions: [
        { type: "num", q: "1 metro quanti centimetri sono?", answer: 100, unit: "cm", explain: "1 m = 10 dm = 100 cm." },
        { type: "mc", q: "Quale unità usi per misurare la lunghezza di una formica?", options: ["metri", "millimetri", "chilometri"], answer: 1, explain: "Una formica è lunga pochi millimetri." },
        { type: "num", q: "40 mm quanti cm sono?", answer: 4, unit: "cm", explain: "Da mm a cm si fa : 10 → 40 : 10 = 4 cm." }
      ]
    },
    {
      type: "text",
      title: "Misure con più unità: la tabella delle posizioni",
      html: `<p>A volte una misura si scrive con più unità: <b>1 m 3 dm 5 cm</b>. È come il valore posizionale dei numeri!</p>
<table>
<tr><th>m</th><th>dm</th><th>cm</th></tr>
<tr><td>1</td><td>3</td><td>5</td></tr>
</table>
<p>Leggendo tutta la riga fino ai centimetri: <b>135 cm</b>. Proprio come 1 centinaio, 3 decine e 5 unità fanno 135!</p>
<p>Al contrario: <b>247 cm</b> = 2 m 4 dm 7 cm.</p>`
    },
    {
      type: "3d",
      title: "Centimetri come cubetti",
      scene: "blocks",
      options: { mode: "base10", value: 135 },
      caption: "Se ogni cubetto è 1 cm: una barretta da 10 è 1 dm e una piastra da 100 è 1 m (messo in fila). 135 cm = 1 m 3 dm 5 cm."
    },
    {
      type: "example",
      title: "Esempio pratico: quanto sei alto?",
      html: `<p>Luca si misura contro la porta: è alto <b>1 m e 32 cm</b>.</p>
<ul>
<li>In centimetri: 100 + 32 = <b>132 cm</b>.</li>
<li>Sua sorella Emma è alta <b>118 cm</b>. Chi è più alto? Luca, di 132 − 118 = <b>14 cm</b>.</li>
<li>Il papà è alto <b>178 cm</b> = 1 m 7 dm 8 cm. 👨</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: il nastro per il regalo",
      html: `<p>La mamma ha un nastro lungo <b>2 m</b>. Ne usa <b>65 cm</b> per un pacchetto 🎁. Quanto nastro resta?</p>
<ol>
<li>Prima trasformo tutto nella stessa unità: 2 m = <b>200 cm</b>.</li>
<li>200 − 65 = <b>135 cm</b> = 1 m 3 dm 5 cm.</li>
</ol>
<p>⚠️ Per fare calcoli con le misure bisogna sempre usare <b>la stessa unità</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il metro è nato in <b>Francia</b> nel <b>1791</b>, durante la Rivoluzione francese. Gli scienziati decisero che doveva essere <b>una parte su 10 milioni</b> della distanza tra il Polo Nord e l'Equatore! Due astronomi, Delambre e Méchain, impiegarono circa 7 anni per misurare il meridiano da Dunkerque a Barcellona. Oggi il metro è definito con la <b>velocità della luce</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Prima del metro, ogni città aveva le sue misure! A Torino si usava il <b>trabucco</b> (circa 3 metri), a Milano il <b>braccio</b>, a Venezia il <b>passo</b>. Sui muri di alcuni palazzi comunali medievali sono ancora scolpite o murate le misure ufficiali per evitare imbrogli al mercato. 🏛️</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le misure",
      intro: "Passare da un'unità all'altra ti confonde? Prova uno di questi metodi!",
      tabs: [
        {
          label: "🪜 La scaletta",
          html: `<p>Immagina le unità come <b>gradini di una scala</b>: m in alto, poi dm, cm e mm in basso.</p>
<ul>
<li>Se <b>scendi</b> di un gradino → <b>× 10</b> (aggiungi uno zero).</li>
<li>Se <b>sali</b> di un gradino → <b>: 10</b> (togli uno zero).</li>
</ul>
<p>Esempio: 4 m → cm. Scendo 2 gradini: × 10 × 10 → <b>400 cm</b>.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#1f2937" stroke-width="3">
<rect x="40" y="30" width="130" height="50" fill="#fbbf24"/>
<rect x="160" y="90" width="130" height="50" fill="#60a5fa"/>
<rect x="280" y="150" width="130" height="50" fill="#4ade80"/>
<rect x="400" y="210" width="130" height="50" fill="#f472b6"/>
</g>
<text x="105" y="64" font-size="26" text-anchor="middle" font-weight="bold">m</text>
<text x="225" y="124" font-size="26" text-anchor="middle" font-weight="bold">dm</text>
<text x="345" y="184" font-size="26" text-anchor="middle" font-weight="bold">cm</text>
<text x="465" y="244" font-size="26" text-anchor="middle" font-weight="bold">mm</text>
<text x="200" y="60" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="320" y="120" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="440" y="180" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="40" y="170" font-size="20" fill="#1d4ed8" font-weight="bold">salgo ↖ : 10</text>
</svg>`
        },
        {
          label: "💶 Come gli euro",
          html: `<p>Le misure funzionano come i soldi!</p>
<ul>
<li>1 € = 100 centesimi ↔ 1 m = 100 <b>centi</b>metri. Stessa parola: \"cento\"!</li>
<li>10 centesimi ↔ 10 cm = 1 dm.</li>
</ul>
<p>Se sai che 2 € sono 200 centesimi, sai già che 2 m sono 200 cm. 🪙</p>`
        },
        {
          label: "🇺🇸 Pollici e piedi",
          html: `<p>Negli <b>Stati Uniti</b> si usano ancora unità antiche: il <b>pollice</b> (inch) e il <b>piede</b> (foot).</p>
<ul>
<li>1 pollice = <b>2,54 cm</b> (circa la larghezza del tuo pollice da grande 👍)</li>
<li>1 piede = 12 pollici = circa <b>30 cm</b></li>
</ul>
<p>Le misure americane non vanno di 10 in 10: 12 pollici fanno un piede, 3 piedi fanno una iarda… È molto più difficile! Per questo quasi tutto il mondo usa il <b>sistema metrico decimale</b>. Anche gli schermi delle TV si misurano in pollici: una TV da 50 pollici ha la diagonale di circa 127 cm. 📺</p>`
        },
        {
          label: "✋ Il corpo come righello",
          html: `<p>Conosci il tuo \"righello personale\" e potrai stimare le misure senza strumenti!</p>
<ul>
<li>Il tuo <b>mignolo</b> è largo circa <b>1 cm</b>.</li>
<li>La tua <b>mano</b> chiusa (4 dita) è larga circa <b>6–7 cm</b>; da grande sarà circa <b>1 dm</b>.</li>
<li>Un <b>passo</b> lungo da adulto è circa <b>1 m</b>.</li>
</ul>
<p>Gli antichi Egizi misuravano con il <b>cubito</b>: la lunghezza dal gomito alla punta del dito medio, circa 52 cm per il cubito reale.</p>`
        },
        {
          label: "📏 Sul righello",
          html: `<p>Guarda il tuo righello: i <b>numeri</b> indicano i centimetri, le <b>tacche piccole</b> tra un numero e l'altro sono i <b>millimetri</b> (sono 10!).</p>
<p>Sulla retta qui sotto ogni salto è 1 cm: prova a contare da 0 a 10 cm, cioè <b>1 dm</b>. Ricorda: si misura sempre partendo dallo <b>0</b>, non dal bordo del righello!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 15, step: 1, marks: [10] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle misure di lunghezza: tocca un nodo e scopri il perché",
      nodes: [
        { id: "misurare", label: "Misurare", x: 50, y: 6, color: "#64748b", html: "Confrontare una lunghezza con un'unità e contare quante volte ci sta.", why: "Le persone misurano da migliaia di anni per costruire case, dividere campi e commerciare. All'inizio usavano parti del corpo: piede, spanna, cubito." },
        { id: "unita", label: "Unità uguale per tutti", x: 50, y: 24, color: "#f59e0b", html: "Una misura che vale lo stesso ovunque.", why: "Con le spanne o i piedi ognuno trovava numeri diversi, e al mercato nascevano liti e imbrogli. Serviva un campione unico." },
        { id: "metro", label: "Metro (m)", x: 50, y: 44, color: "#2563eb", html: "L'unità fondamentale di lunghezza.", why: "Nato in Francia nel 1791 come 1/10 000 000 della distanza Polo Nord–Equatore. Il nome viene dal greco <i>metron</i> = misura. In Italia è legge dal 1861. Dal 1983 è definito con la velocità della luce." },
        { id: "sotto", label: "Sottomultipli", x: 22, y: 64, color: "#16a34a", html: "dm, cm, mm: parti del metro.", why: "Dal latino: <i>deci</i> = decima parte, <i>centi</i> = centesima, <i>milli</i> = millesima." },
        { id: "multi", label: "Multipli", x: 78, y: 64, color: "#dc2626", html: "dam, hm, km: più grandi del metro.", why: "Dal greco: <i>deca</i> = 10, <i>etto</i> = 100, <i>chilo</i> = 1000. Così: latino per le parti piccole, greco per quelle grandi!" },
        { id: "dieci", label: "Regola del 10", x: 50, y: 78, color: "#a855f7", html: "Ogni unità è 10 volte quella alla sua destra.", why: "Il sistema metrico è decimale come i nostri numeri: per questo convertire è come spostare cifre tra centinaia, decine e unità." },
        { id: "conv", label: "Equivalenze", x: 22, y: 92, color: "#14b8a6", html: "Scrivere la stessa misura con un'altra unità: 3 m = 300 cm.", why: "Servono per confrontare e fare calcoli: si può sommare o sottrarre solo misure nella stessa unità." },
        { id: "strumenti", label: "Strumenti", x: 78, y: 92, color: "#ec4899", html: "Righello, metro da sarta, metro a nastro, rotella metrica.", why: "Ogni strumento è adatto a lunghezze diverse: il righello per il quaderno, il metro a nastro per la stanza." }
      ],
      edges: [
        ["misurare", "unita", "ha bisogno di"],
        ["unita", "metro", "è il"],
        ["metro", "sotto", "si divide in"],
        ["metro", "multi", "si moltiplica in"],
        ["sotto", "dieci", "seguono la"],
        ["multi", "dieci", "seguono la"],
        ["dieci", "conv", "permette le"],
        ["dieci", "strumenti", "si legge sugli"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: equivalenze",
      questions: [
        { type: "num", q: "3 m = … dm", answer: 30, unit: "dm", explain: "Da m a dm si scende di un gradino: 3 × 10 = 30 dm." },
        { type: "num", q: "1 m 4 dm 6 cm = … cm", answer: 146, unit: "cm", explain: "100 + 40 + 6 = 146 cm." },
        { type: "mc", q: "Quale misura è la più lunga?", options: ["90 cm", "1 m", "9 dm"], answer: 1, explain: "1 m = 100 cm; 9 dm = 90 cm. La più lunga è 1 m." }
      ]
    }
  ],
  glossary: [
    { t: "Misurare", d: "Scoprire quante volte un'unità di misura sta in una grandezza." },
    { t: "Metro (m)", d: "Unità fondamentale di misura della lunghezza." },
    { t: "Decimetro (dm)", d: "La decima parte del metro: 1 m = 10 dm." },
    { t: "Centimetro (cm)", d: "La centesima parte del metro: 1 m = 100 cm." },
    { t: "Millimetro (mm)", d: "La millesima parte del metro: 1 m = 1000 mm; 1 cm = 10 mm." },
    { t: "Chilometro (km)", d: "Multiplo del metro: 1 km = 1000 m." },
    { t: "Sottomultipli", d: "Unità più piccole dell'unità fondamentale." },
    { t: "Multipli", d: "Unità più grandi dell'unità fondamentale." },
    { t: "Equivalenza", d: "La stessa misura scritta con un'unità diversa (es. 2 m = 200 cm)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "text", q: "Qual è l'unità fondamentale di misura della lunghezza?", answer: ["metro", "il metro", "m"], explain: "Il metro (m)." },
      { type: "num", q: "1 dm = … cm", answer: 10, unit: "cm", explain: "Il decimetro contiene 10 centimetri." },
      { type: "num", q: "5 cm = … mm", answer: 50, unit: "mm", explain: "Da cm a mm: × 10 → 50 mm." },
      { type: "num", q: "700 cm = … m", answer: 7, unit: "m", explain: "Da cm a m si sale di due gradini: 700 : 100 = 7 m." },
      { type: "mc", q: "Per misurare la lunghezza della classe usi…", options: ["i millimetri", "i metri", "i chilometri"], answer: 1, explain: "Una classe è lunga alcuni metri." },
      { type: "tf", q: "1 m = 1000 mm.", answer: true, explain: "1 m = 10 dm = 100 cm = 1000 mm." },
      { type: "mc", q: "Il prefisso \"centi\" vuol dire…", options: ["dieci volte più grande", "la centesima parte", "mille"], answer: 1, explain: "Centi = la centesima parte: 1 cm = 1/100 di metro." },
      { type: "num", q: "2 m 5 dm = … dm", answer: 25, unit: "dm", explain: "2 m = 20 dm; 20 + 5 = 25 dm." },
      { type: "order", q: "Ordina dalla misura più corta alla più lunga.", items: ["8 mm", "3 cm", "5 dm", "90 cm", "2 m"], explain: "In mm: 8, 30, 500, 900, 2000." },
      { type: "num", q: "Un nastro è lungo 1 m. Ne tagli 35 cm. Quanti cm restano?", answer: 65, unit: "cm", explain: "1 m = 100 cm; 100 − 35 = 65 cm." },
      { type: "tf", q: "Per sommare 1 m e 20 cm basta fare 1 + 20 = 21.", answer: false, explain: "Bisogna usare la stessa unità: 100 cm + 20 cm = 120 cm." },
      { type: "mc", q: "In che anno e in quale Paese è nato il metro?", options: ["1791, in Francia", "1492, in Spagna", "1861, in Italia"], answer: 0, explain: "Fu definito in Francia nel 1791; l'Italia lo adottò per legge nel 1861." }
    ],
    gen: [["lengthConv", 3]]
  }
});

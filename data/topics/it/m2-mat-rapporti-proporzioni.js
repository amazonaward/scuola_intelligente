TOPIC('it', {
  id: "m2-mat-rapporti-proporzioni",
  title: "Rapporti e proporzioni",
  intro: "La scala di una cartina, la ricetta per 4 persone da adattare a 10, la velocità di un treno, lo schermo 16:9 del telefono: dietro tutte queste cose ci sono i <b>rapporti</b> e le <b>proporzioni</b>. Impariamo che cosa sono, le loro <b>proprietà</b> e come trovare il <b>termine incognito</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Il rapporto tra due numeri",
      html: `<p>Il <b>rapporto</b> tra due numeri <i>a</i> e <i>b</i> (con b ≠ 0) è il <b>quoziente</b> della divisione a : b. Si scrive <b>a : b</b> oppure <b>a/b</b>.</p>
<ul>
<li><i>a</i> si chiama <b>antecedente</b>, <i>b</i> si chiama <b>conseguente</b>.</li>
<li>Esempio: il rapporto tra 12 e 4 è 12 : 4 = <b>3</b>; il rapporto tra 4 e 12 è 4/12 = <b>1/3</b> (rapporto <b>inverso</b>).</li>
</ul>
<p>Proprietà: se moltiplichi o dividi antecedente e conseguente per lo <b>stesso numero</b> (diverso da 0) il rapporto <b>non cambia</b>: 12 : 4 = 24 : 8 = 6 : 2 = 3. (È la stessa proprietà delle frazioni equivalenti!)</p>`
    },
    {
      type: "text",
      title: "Rapporti tra grandezze",
      html: `<p><b>Grandezze omogenee</b> (dello stesso tipo, stessa unità di misura): il rapporto è un <b>numero puro</b>, senza unità.</p>
<ul>
<li><b>Scala</b> di una carta: distanza sulla carta / distanza reale. Scala <b>1 : 100 000</b> significa che 1 cm sulla carta = 100 000 cm = <b>1 km</b> nella realtà.</li>
<li><b>Percentuale</b>: un rapporto con conseguente 100 (15% = 15/100).</li>
<li><b>Formato</b> degli schermi: 16 : 9 (larghezza : altezza).</li>
</ul>
<p><b>Grandezze non omogenee</b> (di tipo diverso): il rapporto è una <b>nuova grandezza</b> con una sua unità.</p>
<ul>
<li><b>Velocità</b> = spazio / tempo → 150 km in 2 h = <b>75 km/h</b>;</li>
<li><b>Densità</b> = massa / volume → acqua: 1 g/cm³;</li>
<li><b>Prezzo unitario</b> = prezzo / quantità → 3 € per 2 kg = <b>1,50 €/kg</b>;</li>
<li><b>Densità di popolazione</b> = abitanti / superficie (Italia: circa 195 ab/km²).</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere la carta",
      html: `<p>Su una carta in scala <b>1 : 25 000</b> (quella dei sentieri di montagna) due rifugi distano <b>8 cm</b>. Quanto distano davvero?</p>
<ol>
<li>8 cm × 25 000 = 200 000 cm</li>
<li>200 000 cm = 2000 m = <b>2 km</b> (in linea d'aria).</li>
</ol>
<p>E al contrario: un lago lungo 3 km, quanti centimetri sarà sulla carta? 3 km = 300 000 cm → 300 000 : 25 000 = <b>12 cm</b>.</p>`
    },
    {
      type: "text",
      title: "La proporzione",
      html: `<p>Una <b>proporzione</b> è un'<b>uguaglianza tra due rapporti</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>a : b = c : d</b></p>
<p>Si legge «<i>a sta a b come c sta a d</i>». Esempio: <b>3 : 6 = 5 : 10</b> (entrambi i rapporti valgono 0,5).</p>
<ul>
<li><b>a</b> e <b>d</b> (i termini esterni) sono gli <b>estremi</b>;</li>
<li><b>b</b> e <b>c</b> (i termini interni) sono i <b>medi</b>;</li>
<li>a e c sono gli <b>antecedenti</b>; b e d i <b>conseguenti</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Estremi e medi",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#faf5ff"/>
<text x="110" y="135" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">3</text>
<text x="185" y="135" font-size="56" fill="#1f2937" text-anchor="middle">:</text>
<text x="250" y="135" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">6</text>
<text x="315" y="135" font-size="56" fill="#1f2937" text-anchor="middle">=</text>
<text x="380" y="135" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">5</text>
<text x="440" y="135" font-size="56" fill="#1f2937" text-anchor="middle">:</text>
<text x="510" y="135" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">10</text>
<path d="M110 70 Q310 0 510 70" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="310" y="30" font-size="18" fill="#dc2626" text-anchor="middle" font-weight="bold">ESTREMI: 3 × 10 = 30</text>
<path d="M250 155 Q315 210 380 155" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="315" y="235" font-size="18" fill="#2563eb" text-anchor="middle" font-weight="bold">MEDI: 6 × 5 = 30</text>
</svg>`,
      caption: "Il prodotto degli estremi è uguale al prodotto dei medi: è la proprietà fondamentale."
    },
    {
      type: "remember",
      title: "Proprietà fondamentale",
      html: `<p>In ogni proporzione <b>il prodotto dei medi è uguale al prodotto degli estremi</b>:</p>
<p style="text-align:center;font-size:1.2em">a : b = c : d &nbsp;⟺&nbsp; <b>a × d = b × c</b></p>
<p>Serve per <b>verificare</b> se quattro numeri formano una proporzione: 4 : 5 = 12 : 15? 4 × 15 = 60 e 5 × 12 = 60 → <b>sì</b>.</p>`
    },
    {
      type: "text",
      title: "Le altre proprietà",
      html: `<p>Partendo da <b>3 : 6 = 5 : 10</b>:</p>
<ul>
<li><b>Invertire</b>: si scambia ogni antecedente con il suo conseguente → 6 : 3 = 10 : 5.</li>
<li><b>Permutare</b>: si scambiano tra loro i medi (o gli estremi) → 3 : 5 = 6 : 10 (oppure 10 : 6 = 5 : 3).</li>
<li><b>Comporre</b>: (a + b) : a = (c + d) : c, oppure (a + b) : b = (c + d) : d → (3 + 6) : 3 = (5 + 10) : 5 → 9 : 3 = 15 : 5 ✓</li>
<li><b>Scomporre</b>: (a − b) : a = (c − d) : c (con a &gt; b, c &gt; d) → da 6 : 3 = 10 : 5 → (6 − 3) : 6 = (10 − 5) : 10 → 3 : 6 = 5 : 10 ✓</li>
</ul>
<p>Comporre e scomporre sono utilissime nei problemi in cui si conosce la <b>somma</b> o la <b>differenza</b> di due numeri e il loro rapporto.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: rapporti e proporzioni",
      questions: [
        { type: "mc", q: "In 2 : 7 = 6 : 21, quali sono i medi?", options: ["2 e 21", "7 e 6", "2 e 6"], answer: 1, explain: "I medi sono i termini interni: 7 e 6." },
        { type: "tf", q: "4 : 6 = 10 : 15 è una proporzione.", answer: true, explain: "4 × 15 = 60 e 6 × 10 = 60." },
        { type: "num", q: "Un'auto percorre 240 km in 3 ore. Qual è la velocità media in km/h?", answer: 80, unit: "km/h", explain: "240 : 3 = 80 km/h." }
      ]
    },
    {
      type: "text",
      title: "Calcolare il termine incognito",
      html: `<p>Dalla proprietà fondamentale ricaviamo due regole:</p>
<ul>
<li><b>Estremo incognito</b> = prodotto dei medi : estremo noto.<br>
<i>x : 4 = 15 : 12</i> → x = (4 × 15) : 12 = 60 : 12 = <b>5</b>.</li>
<li><b>Medio incognito</b> = prodotto degli estremi : medio noto.<br>
<i>8 : x = 6 : 9</i> → x = (8 × 9) : 6 = 72 : 6 = <b>12</b>.</li>
</ul>
<p><b>Proporzione continua</b>: i due medi sono uguali, a : x = x : d. Il termine x si chiama <b>medio proporzionale</b> e vale <b>x = √(a × d)</b>.<br>
<i>4 : x = x : 9</i> → x² = 36 → x = <b>6</b>.</p>
<p><b>Con comporre</b> (somma nota): due numeri hanno somma 40 e stanno tra loro come 3 : 5. Chi sono?<br>
(a + b) : a = (3 + 5) : 3 → 40 : a = 8 : 3 → a = 40 × 3 : 8 = <b>15</b>; b = 40 − 15 = <b>25</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la ricetta del tiramisù",
      html: `<p>Una ricetta per <b>4 persone</b> usa <b>250 g</b> di mascarpone. Quanto ne serve per <b>10 persone</b>?</p>
<p>4 : 250 = 10 : x → x = (250 × 10) : 4 = 2500 : 4 = <b>625 g</b>.</p>
<p>Con lo stesso metodo: se servono <b>3 uova</b> per 4 persone, per 10 persone: 4 : 3 = 10 : x → x = 30 : 4 = 7,5 → in cucina arrotonderai a <b>7 o 8 uova</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il rapporto aureo",
      html: `<p>Un segmento è diviso secondo la <b>sezione aurea</b> quando l'intero sta alla parte maggiore come la parte maggiore sta alla minore. Il loro rapporto è il <b>numero aureo φ ≈ 1,618</b>. Euclide lo descrisse negli <i>Elementi</i> (III secolo a.C.); Luca Pacioli lo chiamò «divina proporzione» (1509), con illustrazioni di <b>Leonardo da Vinci</b>. Il rapporto tra due numeri consecutivi della successione di Fibonacci (1, 1, 2, 3, 5, 8, 13, 21…) si avvicina sempre più a φ: 21 : 13 ≈ 1,615.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Eratostene misura la Terra",
      html: `<p>Verso il <b>240 a.C.</b> <b>Eratostene</b> misurò la circonferenza terrestre con una proporzione! A mezzogiorno del solstizio, a Siene il Sole era allo zenit, mentre ad Alessandria i raggi formavano un angolo di circa <b>7,2°</b>, cioè 1/50 di 360°. Siccome le due città distavano circa 5000 stadi: 7,2 : 360 = 5000 : x → x = <b>250 000 stadi</b>, circa 40 000 km. Il valore vero è 40 075 km all'equatore!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le proporzioni",
      intro: "Se «estremi» e «medi» ti confondono, prova questi metodi usati in altri Paesi.",
      tabs: [
        {
          label: "✖️ Prodotto in croce (Francia, USA)",
          html: `<p>Scrivi la proporzione come <b>uguaglianza di frazioni</b>:</p>
<p style="text-align:center;font-size:1.2em">a/b = c/d &nbsp;→&nbsp; a × d = b × c</p>
<p>Si moltiplicano i numeri «in diagonale» (a forma di <b>X</b>): in Francia si chiama <i>produit en croix</i>, negli USA <i>cross multiplication</i>. È la stessa proprietà fondamentale, ma si vede meglio!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ecfeff"/>
<text x="200" y="90" font-size="48" font-weight="bold" fill="#0e7490" text-anchor="middle">4</text>
<line x1="165" y1="110" x2="235" y2="110" stroke="#1f2937" stroke-width="5"/>
<text x="200" y="165" font-size="48" font-weight="bold" fill="#0e7490" text-anchor="middle">250</text>
<text x="300" y="125" font-size="48" fill="#1f2937" text-anchor="middle">=</text>
<text x="400" y="90" font-size="48" font-weight="bold" fill="#be185d" text-anchor="middle">10</text>
<line x1="365" y1="110" x2="435" y2="110" stroke="#1f2937" stroke-width="5"/>
<text x="400" y="165" font-size="48" font-weight="bold" fill="#be185d" text-anchor="middle">x</text>
<line x1="230" y1="70" x2="375" y2="150" stroke="#f59e0b" stroke-width="5"/>
<line x1="240" y1="150" x2="370" y2="70" stroke="#f59e0b" stroke-width="5"/>
<text x="300" y="215" font-size="20" fill="#1f2937" text-anchor="middle" font-weight="bold">4 · x = 250 · 10 → x = 625</text>
</svg>`
        },
        {
          label: "📋 Tabella e riduzione all'unità",
          html: `<p>In Germania e in Inghilterra si usa spesso la <b>riduzione all'unità</b> (<i>Dreisatz</i>, «regola del tre»): prima si calcola quanto vale <b>1</b>, poi si moltiplica.</p>
<table>
<tr><th>Persone</th><th>Mascarpone</th></tr>
<tr><td>4</td><td>250 g</td></tr>
<tr><td>1</td><td>250 : 4 = 62,5 g</td></tr>
<tr><td>10</td><td>62,5 × 10 = <b>625 g</b></td></tr>
</table>
<p>Nessuna formula da ricordare: solo una divisione e una moltiplicazione!</p>`
        },
        {
          label: "🗺️ Lo zoom delle mappe",
          html: `<p>Pensa a una proporzione come a uno <b>zoom</b>: quando ingrandisci una foto sul telefono, tutte le lunghezze si moltiplicano per lo stesso numero, quindi i <b>rapporti restano uguali</b>. Un rettangolo 3 × 6 ingrandito diventa 5 × 10: la forma è la stessa perché 3 : 6 = 5 : 10. Se i rapporti non fossero uguali la foto si «deformerebbe»!</p>`
        },
        {
          label: "🧊 Cubetti in scala",
          html: `<p>Ecco un rettangolo di <b>2 × 3</b> cubetti. Prova a costruirne uno «in proporzione» più grande con i cursori: 4 × 6, 6 × 9… Funziona solo se 2 : 3 = nuovo lato corto : nuovo lato lungo. Prova 4 × 7: la forma cambia!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di rapporti e proporzioni",
      nodes: [
        { id: "rapp", label: "Rapporto a : b", x: 50, y: 6, color: "#2563eb", html: "Quoziente tra due numeri.", why: "In latino <i>ratio</i>, in greco <i>lógos</i>: per i Greci il rapporto era il modo di confrontare due grandezze. Da <i>ratio</i> viene anche «razionale»." },
        { id: "omog", label: "Grandezze omogenee", x: 18, y: 28, color: "#16a34a", html: "Stessa unità: scala, percentuale (numero puro).", why: "Dividendo cm per cm l'unità «si semplifica»: resta un numero puro che dice «quante volte» una grandezza sta nell'altra." },
        { id: "nonomog", label: "Grandezze non omogenee", x: 82, y: 28, color: "#ea580c", html: "Unità diverse: velocità, densità, prezzo al kg.", why: "Il rapporto crea una <b>grandezza derivata</b>: km/h, g/cm³, €/kg. Galileo usò questi rapporti per studiare il moto nel Seicento." },
        { id: "prop", label: "Proporzione", x: 50, y: 46, color: "#7c3aed", html: "Uguaglianza tra due rapporti: a : b = c : d.", why: "La teoria delle proporzioni fu sviluppata da <b>Eudosso di Cnido</b> (IV secolo a.C.) ed è esposta nel <b>libro V degli Elementi di Euclide</b>. Funzionava anche con grandezze come √2 che non sono frazioni." },
        { id: "fond", label: "Proprietà fondamentale", x: 22, y: 66, color: "#dc2626", html: "Prodotto dei medi = prodotto degli estremi.", why: "Se a/b = c/d, moltiplicando entrambi i membri per b × d si ottiene a × d = c × b: è una conseguenza delle frazioni equivalenti." },
        { id: "altre", label: "Invertire, permutare, comporre, scomporre", x: 78, y: 66, color: "#ca8a04", html: "Trasformazioni che mantengono la proporzione.", why: "Tutte si dimostrano dalla proprietà fondamentale. Erano già nel libro V di Euclide con nomi greci; nel Medioevo le insegnavano le «scuole d'abaco» ai figli dei mercanti." },
        { id: "incog", label: "Termine incognito", x: 22, y: 88, color: "#0d9488", html: "Estremo = medi : estremo; medio = estremi : medio.", why: "È la «regola del tre», insegnata nei trattati d'abaco come il <i>Liber Abaci</i> di <b>Fibonacci</b> (1202) per risolvere problemi di cambi, merci e prezzi." },
        { id: "continua", label: "Proporzione continua", x: 78, y: 88, color: "#db2777", html: "a : x = x : d → x = √(a·d).", why: "Il medio proporzionale è la <b>media geometrica</b>. Compare nel secondo teorema di Euclide sui triangoli rettangoli e nella sezione aurea." }
      ],
      edges: [
        ["rapp", "omog", "tra"],
        ["rapp", "nonomog", "tra"],
        ["rapp", "prop", "due rapporti uguali"],
        ["prop", "fond", "ha"],
        ["prop", "altre", "si trasforma con"],
        ["fond", "incog", "permette di trovare"],
        ["altre", "continua", "caso speciale"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: il termine incognito",
      questions: [
        { type: "num", q: "x : 6 = 10 : 15. Quanto vale x?", answer: 4, explain: "x = 6 × 10 : 15 = 60 : 15 = 4." },
        { type: "num", q: "9 : x = x : 4. Quanto vale x (positivo)?", answer: 6, explain: "x = √(9 × 4) = √36 = 6." },
        { type: "num", q: "Su una carta 1 : 50 000 due paesi distano 6 cm. Quanti km sono nella realtà?", answer: 3, unit: "km", explain: "6 × 50 000 = 300 000 cm = 3 km." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Rapporto = quoziente; omogenee → numero puro; non omogenee → nuova grandezza.</li>
<li>Proporzione a : b = c : d; <b>estremi</b> a, d; <b>medi</b> b, c.</li>
<li><b>Medi × medi = estremi × estremi</b>.</li>
<li>x estremo = medi moltiplicati : estremo noto; x medio = estremi moltiplicati : medio noto.</li>
<li>Medio proporzionale: x = √(a·d).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Rapporto", d: "Quoziente tra due numeri o grandezze." },
    { t: "Antecedente", d: "Il primo termine di un rapporto." },
    { t: "Conseguente", d: "Il secondo termine di un rapporto." },
    { t: "Scala", d: "Rapporto tra una distanza sulla carta e la corrispondente distanza reale." },
    { t: "Proporzione", d: "Uguaglianza tra due rapporti." },
    { t: "Estremi", d: "Il primo e il quarto termine di una proporzione." },
    { t: "Medi", d: "Il secondo e il terzo termine di una proporzione." },
    { t: "Proporzione continua", d: "Proporzione con i medi uguali." },
    { t: "Medio proporzionale", d: "Il termine ripetuto in una proporzione continua: √(a·d)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Qual è il rapporto tra 45 e 9?", answer: 5, explain: "45 : 9 = 5." },
      { type: "mc", q: "In 5 : 8 = 15 : 24, gli estremi sono…", options: ["5 e 24", "8 e 15", "5 e 15"], answer: 0, explain: "Il primo e l'ultimo termine." },
      { type: "tf", q: "3 : 4 = 9 : 16 è una proporzione.", answer: false, explain: "3 × 16 = 48, ma 4 × 9 = 36: diversi." },
      { type: "num", q: "x : 12 = 5 : 3. Trova x.", answer: 20, explain: "x = 12 × 5 : 3 = 20." },
      { type: "num", q: "7 : x = 21 : 9. Trova x.", answer: 3, explain: "x = 7 × 9 : 21 = 3." },
      { type: "mc", q: "Permutando i medi di 2 : 3 = 8 : 12 si ottiene…", options: ["3 : 2 = 12 : 8", "2 : 8 = 3 : 12", "12 : 3 = 8 : 2"], answer: 1, explain: "Si scambiano 3 e 8." },
      { type: "mc", q: "Il rapporto tra 300 km e 4 h è…", options: ["75 (numero puro)", "75 km/h", "1200 km·h"], answer: 1, explain: "Grandezze non omogenee: si ottiene una velocità, 75 km/h." },
      { type: "num", q: "Due numeri hanno somma 56 e stanno come 3 : 4. Qual è il più piccolo?", answer: 24, explain: "Comporre: 56 : a = 7 : 3 → a = 56 × 3 : 7 = 24 (l'altro è 32)." },
      { type: "num", q: "Trova il medio proporzionale tra 2 e 18.", answer: 6, explain: "√(2 × 18) = √36 = 6." },
      { type: "num", q: "In scala 1 : 200 una stanza è lunga 3 cm sul disegno. Quanti metri è lunga davvero?", answer: 6, unit: "m", explain: "3 × 200 = 600 cm = 6 m." },
      { type: "order", q: "Metti in ordine i passi per trovare un estremo incognito.", items: ["Individuo i medi", "Moltiplico i medi", "Divido per l'estremo noto", "Verifico con la proprietà fondamentale"], explain: "Medi × medi : estremo noto, poi si verifica." }
    ],
    gen: [["proportion", 3]]
  }
});

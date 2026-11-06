TOPIC('it', {
  id: "m2-mat-radici",
  title: "La radice quadrata",
  intro: "Se conosci l'area di un quadrato, quanto è lungo il suo lato? Per rispondere serve l'operazione inversa dell'elevamento al quadrato: la <b>radice quadrata</b>. Scopriremo i <b>quadrati perfetti</b>, come calcolare le radici con la <b>scomposizione in fattori primi</b>, come <b>approssimarle</b> e perché √2 ha sconvolto i matematici antichi.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Che cos'è la radice quadrata",
      html: `<p>La <b>radice quadrata</b> di un numero <i>a</i> è il numero che, <b>moltiplicato per se stesso</b> (cioè elevato al quadrato), dà <i>a</i>.</p>
<p style="font-size:1.2em;text-align:center"><b>√a = b</b> &nbsp;perché&nbsp; <b>b² = a</b></p>
<ul>
<li>√25 = 5 perché 5² = 25;</li>
<li>√81 = 9 perché 9² = 81;</li>
<li>√0 = 0, √1 = 1.</li>
</ul>
<p>Il simbolo <b>√</b> si chiama <b>radice</b> (o radicale) e il numero sotto il simbolo si chiama <b>radicando</b>. L'estrazione di radice è l'<b>operazione inversa</b> dell'elevamento al quadrato, come la sottrazione lo è dell'addizione.</p>
<p>Nell'insieme dei numeri che conosci, <b>non esiste</b> la radice quadrata di un numero negativo: nessun numero moltiplicato per se stesso dà un risultato negativo (anche (−3)² = +9).</p>`
    },
    {
      type: "svg",
      title: "Area e lato del quadrato",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<g stroke="#0c4a6e" stroke-width="2" fill="#38bdf8">
<rect x="40" y="40" width="44" height="44"/><rect x="84" y="40" width="44" height="44"/><rect x="128" y="40" width="44" height="44"/><rect x="172" y="40" width="44" height="44"/><rect x="216" y="40" width="44" height="44"/>
<rect x="40" y="84" width="44" height="44"/><rect x="84" y="84" width="44" height="44"/><rect x="128" y="84" width="44" height="44"/><rect x="172" y="84" width="44" height="44"/><rect x="216" y="84" width="44" height="44"/>
<rect x="40" y="128" width="44" height="44"/><rect x="84" y="128" width="44" height="44"/><rect x="128" y="128" width="44" height="44"/><rect x="172" y="128" width="44" height="44"/><rect x="216" y="128" width="44" height="44"/>
<rect x="40" y="172" width="44" height="44"/><rect x="84" y="172" width="44" height="44"/><rect x="128" y="172" width="44" height="44"/><rect x="172" y="172" width="44" height="44"/><rect x="216" y="172" width="44" height="44"/>
<rect x="40" y="216" width="44" height="44"/><rect x="84" y="216" width="44" height="44"/><rect x="128" y="216" width="44" height="44"/><rect x="172" y="216" width="44" height="44"/><rect x="216" y="216" width="44" height="44"/>
</g>
<text x="150" y="285" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">lato = 5</text>
<text x="300" y="80" font-size="22" fill="#0c4a6e" font-weight="bold">Area = 25 quadretti</text>
<text x="300" y="130" font-size="22" fill="#0369a1">5² = 25</text>
<text x="300" y="170" font-size="22" fill="#dc2626" font-weight="bold">√25 = 5</text>
<text x="300" y="215" font-size="16" fill="#334155">elevare al quadrato: dal lato all'area</text>
<text x="300" y="240" font-size="16" fill="#334155">radice quadrata: dall'area al lato</text>
</svg>`,
      caption: "La parola «quadrato» non è un caso: 5² è proprio l'area di un quadrato di lato 5."
    },
    {
      type: "text",
      title: "I quadrati perfetti",
      html: `<p>Un numero si chiama <b>quadrato perfetto</b> se è il quadrato di un numero naturale: la sua radice è un numero intero.</p>
<table>
<tr><td>1²=1</td><td>2²=4</td><td>3²=9</td><td>4²=16</td><td>5²=25</td><td>6²=36</td><td>7²=49</td><td>8²=64</td></tr>
<tr><td>9²=81</td><td>10²=100</td><td>11²=121</td><td>12²=144</td><td>13²=169</td><td>14²=196</td><td>15²=225</td><td>20²=400</td></tr>
</table>
<p><b>Come riconoscerli</b>: scomponi il numero in fattori primi. È un quadrato perfetto se <b>tutti gli esponenti sono pari</b>.</p>
<ul>
<li>144 = 2⁴ × 3² → esponenti 4 e 2, pari → <b>sì</b>;</li>
<li>72 = 2³ × 3² → l'esponente 3 è dispari → <b>no</b>.</li>
</ul>
<p>Trucco veloce: un quadrato perfetto <b>non finisce mai</b> con le cifre 2, 3, 7 o 8.</p>`
    },
    {
      type: "widget",
      title: "Costruisci un quadrato",
      widget: "areaGrid",
      options: { w: 6, h: 6, max: 12 },
      caption: "Metti base e altezza uguali: l'area è un quadrato perfetto e il lato è la sua radice. Prova 7 × 7, 9 × 9, 12 × 12."
    },
    {
      type: "text",
      title: "Calcolare la radice con la scomposizione",
      html: `<p>Per calcolare la radice quadrata di un quadrato perfetto:</p>
<ol>
<li><b>scomponi</b> il numero in fattori primi;</li>
<li><b>dimezza</b> tutti gli esponenti;</li>
<li><b>moltiplica</b> i fattori ottenuti.</li>
</ol>
<p>Esempio: √576 → 576 = 2⁶ × 3² → √576 = 2³ × 3¹ = 8 × 3 = <b>24</b>. Verifica: 24 × 24 = 576 ✓</p>
<p>Esempio: √1225 → 1225 = 5² × 7² → √1225 = 5 × 7 = <b>35</b>.</p>
<p>Perché si dimezzano gli esponenti? Perché elevando al quadrato gli esponenti <b>raddoppiano</b>: (2³ × 3)² = 2⁶ × 3². La radice fa il contrario.</p>`
    },
    {
      type: "text",
      title: "Proprietà delle radici",
      html: `<ul>
<li><b>Prodotto</b>: √(a × b) = √a × √b → √(4 × 9) = 2 × 3 = 6 (infatti √36 = 6).</li>
<li><b>Quoziente</b>: √(a : b) = √a : √b → √(100/25) = 10/5 = 2.</li>
<li><b>Frazioni</b>: √(9/16) = 3/4.</li>
<li><b>Attenzione!</b> La radice <b>non</b> si distribuisce su somme e differenze: √(9 + 16) = √25 = 5, ma √9 + √16 = 3 + 4 = 7. <b>Sono diversi!</b></li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: quadrati perfetti e radici esatte",
      questions: [
        { type: "num", q: "√144 = ?", answer: 12, explain: "12 × 12 = 144." },
        { type: "mc", q: "Quale numero è un quadrato perfetto?", options: ["48", "196", "250"], answer: 1, explain: "196 = 14² (= 2² × 7²)." },
        { type: "tf", q: "√(16 + 9) = 4 + 3.", answer: false, explain: "√25 = 5, mentre 4 + 3 = 7: la radice non si distribuisce sulla somma." }
      ]
    },
    {
      type: "text",
      title: "Radici non esatte: l'approssimazione",
      html: `<p>La maggior parte dei numeri <b>non</b> è un quadrato perfetto: √2, √10, √50… In questi casi la radice è un numero <b>decimale illimitato non periodico</b> (un numero <b>irrazionale</b>) e possiamo solo <b>approssimarla</b>.</p>
<p><b>Metodo per tentativi</b> (√50):</p>
<ol>
<li>Trova i quadrati perfetti vicini: 49 = 7² e 64 = 8² → 7 &lt; √50 &lt; 8.</li>
<li>Prova con i decimi: 7,0² = 49; 7,1² = 50,41 → troppo! Quindi √50 ≈ <b>7,0</b> per difetto, 7,1 per eccesso.</li>
<li>Prova con i centesimi: 7,07² = 49,98…; 7,08² = 50,12… → √50 ≈ <b>7,07</b> a meno di un centesimo.</li>
</ol>
<p>Oggi si usano anche le <b>tavole numeriche</b> (nei libri di scuola) e la <b>calcolatrice</b> (tasto √): √50 = 7,0710678…</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la piastrella quadrata",
      html: `<p>Un pavimento quadrato ha un'area di <b>20,25 m²</b>. Quanto misura il lato?</p>
<ol>
<li>Lato = √20,25.</li>
<li>Trasformo in frazione: 20,25 = 2025/100.</li>
<li>√2025 = 45 (perché 2025 = 3⁴ × 5² → 3² × 5 = 45) e √100 = 10.</li>
<li>Lato = 45/10 = <b>4,5 m</b>. Verifica: 4,5 × 4,5 = 20,25 ✓</li>
</ol>
<p>Il perimetro del pavimento è 4 × 4,5 = <b>18 m</b>: ti serve per comprare il battiscopa!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: lo schermo della TV",
      html: `<p>Un televisore «da 50 pollici» ha la <b>diagonale</b> di 50″. Con il teorema di Pitagora la diagonale si calcola con una radice: per uno schermo largo <b>40″</b> e alto <b>30″</b>:</p>
<p>diagonale = √(40² + 30²) = √(1600 + 900) = √2500 = <b>50″</b>.</p>
<p>Le radici quadrate servono ogni volta che si conosce un'<b>area</b> e si vuole una <b>lunghezza</b>: progettare stanze, campi sportivi, schermi, mappe.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Lo scandalo di √2",
      html: `<p>I <b>Pitagorici</b> (VI–V secolo a.C.) pensavano che tutto si potesse esprimere con rapporti di numeri interi. Poi scoprirono che la <b>diagonale di un quadrato di lato 1</b>, che misura √2, <b>non è una frazione</b>! Secondo una leggenda, il pitagorico <b>Ippaso di Metaponto</b>, che rivelò il segreto, morì in un naufragio come «punizione degli dei». Oggi sappiamo che √2 = 1,41421356… continua all'infinito senza mai ripetersi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il simbolo √",
      html: `<p>Il simbolo <b>√</b> deriva probabilmente da una <b>«r» stilizzata</b>, iniziale del latino <i>radix</i> («radice»). Apparve in stampa nel <b>1525</b> nel libro del tedesco <b>Christoph Rudolff</b>; la lineetta sopra il radicando fu aggiunta da <b>Cartesio</b> nel 1637. E la tavoletta babilonese <b>YBC 7289</b> (circa 1800–1600 a.C.) mostra un quadrato con la diagonale e il valore di √2 con un errore di meno di un milionesimo!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la radice quadrata",
      intro: "La radice quadrata si può vedere, costruire e perfino «indovinare» come facevano i Babilonesi.",
      tabs: [
        {
          label: "🧊 Quadrato di cubetti 3D",
          html: `<p>Ecco <b>49 cubetti</b> disposti in un quadrato 7 × 7. Il lato del quadrato è la radice: √49 = 7. Muovi i cursori: riesci a fare un quadrato con 50 cubetti? No! 50 non è un quadrato perfetto: avanza sempre qualcosa o manca qualcosa.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 7, b: 7 }
        },
        {
          label: "🏺 Metodo babilonese",
          html: `<p>I Babilonesi (e poi <b>Erone di Alessandria</b>, I secolo d.C.) calcolavano le radici con un metodo geniale: «<b>indovina e fai la media</b>».</p>
<p>Per √10: parto da un tentativo, 3.</p>
<ol>
<li>10 : 3 = 3,33. La radice sta tra 3 e 3,33 → media: (3 + 3,33) : 2 = <b>3,17</b>.</li>
<li>10 : 3,17 = 3,155. Media: (3,17 + 3,155) : 2 = <b>3,1625</b>.</li>
</ol>
<p>Già al secondo passo: 3,1625² = 10,0014. Il vero valore è 3,16227…! Ogni passo raddoppia circa le cifre esatte. Le calcolatrici usano metodi simili.</p>`
        },
        {
          label: "🔢 Somma dei dispari",
          html: `<p>Guarda che magia: ogni quadrato perfetto è la <b>somma dei primi numeri dispari</b>!</p>
<ul>
<li>1 = 1 = 1²</li><li>1 + 3 = 4 = 2²</li><li>1 + 3 + 5 = 9 = 3²</li><li>1 + 3 + 5 + 7 = 16 = 4²</li>
</ul>
<p>Quindi per trovare √n puoi <b>sottrarre</b> da n i numeri dispari 1, 3, 5, 7… e contare quante sottrazioni servono per arrivare a 0. √25: 25−1−3−5−7−9 = 0 → <b>5</b> sottrazioni → √25 = 5. Il perché si vede nel disegno: ogni dispari è una «L» che allarga il quadrato.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="40" y="170" width="40" height="40" fill="#ef4444" stroke="#fff" stroke-width="2"/>
<rect x="80" y="170" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/><rect x="80" y="130" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/><rect x="40" y="130" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/>
<rect x="120" y="170" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="120" y="130" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="120" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="80" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="40" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/>
<rect x="160" y="170" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="130" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="90" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="120" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="80" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="40" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<text x="260" y="80" font-size="20" fill="#ef4444" font-weight="bold">1</text>
<text x="290" y="80" font-size="20" fill="#f97316" font-weight="bold">+ 3</text>
<text x="345" y="80" font-size="20" fill="#16a34a" font-weight="bold">+ 5</text>
<text x="400" y="80" font-size="20" fill="#2563eb" font-weight="bold">+ 7</text>
<text x="455" y="80" font-size="20" fill="#1f2937" font-weight="bold">= 16</text>
<text x="260" y="130" font-size="20" fill="#1f2937">4 «strati» a L</text>
<text x="260" y="170" font-size="22" fill="#1f2937" font-weight="bold">√16 = 4</text>
</svg>`
        },
        {
          label: "📐 Il triangolo di Pitagora",
          html: `<p>Le radici quadrate compaiono ogni volta che usi il <b>teorema di Pitagora</b>: l'ipotenusa è la radice della somma dei quadrati dei cateti. Muovi i cursori e osserva: l'area del quadrato grande è un numero, il lato è la sua radice.</p>`,
          widget: "pythagoras",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della radice quadrata",
      nodes: [
        { id: "quad", label: "Elevamento al quadrato", x: 50, y: 6, color: "#2563eb", html: "b² = b × b.", why: "Si chiama «quadrato» perché b² è l'<b>area di un quadrato</b> di lato b: i Greci pensavano i numeri come figure geometriche (numeri «quadrati», «triangolari»…)." },
        { id: "radice", label: "Radice quadrata", x: 50, y: 28, color: "#dc2626", html: "√a = b se b² = a.", why: "È l'operazione <b>inversa</b> del quadrato. Il nome «radice» viene dalla traduzione latina dell'arabo <i>jidhr</i> («radice di una pianta»), usato da <b>al-Khwarizmi</b> nel IX secolo: il numero da cui «cresce» il quadrato." },
        { id: "perfetti", label: "Quadrati perfetti", x: 18, y: 50, color: "#16a34a", html: "1, 4, 9, 16, 25… radice intera.", why: "Sono quadrati perfetti se nella scomposizione tutti gli esponenti sono pari, perché elevare al quadrato raddoppia ogni esponente (proprietà delle potenze)." },
        { id: "scomp", label: "Scomposizione", x: 18, y: 76, color: "#0d9488", html: "Fattori primi, esponenti dimezzati.", why: "Si basa sul <b>teorema fondamentale dell'aritmetica</b> (già in Euclide, Elementi, IX libro): ogni numero si scompone in un solo modo in fattori primi." },
        { id: "approx", label: "Approssimazione", x: 50, y: 56, color: "#ea580c", html: "Per tentativi, tavole, calcolatrice.", why: "Quando la radice non è intera si cerca tra due quadrati perfetti consecutivi e si restringe l'intervallo cifra per cifra. Il metodo di <b>Erone</b> (I secolo d.C.) lo fa molto più rapidamente." },
        { id: "irraz", label: "Numeri irrazionali", x: 82, y: 50, color: "#7c3aed", html: "√2, √3, √5…: decimali infiniti non periodici.", why: "La prova che √2 non è una frazione è attribuita ai <b>Pitagorici</b> e si trova in Aristotele: se √2 = p/q ridotta, allora p e q dovrebbero essere entrambi pari, il che è impossibile." },
        { id: "propr", label: "Proprietà", x: 82, y: 76, color: "#ca8a04", html: "√(a·b) = √a·√b; √(a/b) = √a/√b; NON sulla somma.", why: "Derivano dalle proprietà delle potenze: (√a·√b)² = a·b. Per la somma non funziona perché (√a + √b)² = a + b + 2√a√b, c'è un pezzo in più." },
        { id: "pitagora", label: "Teorema di Pitagora", x: 50, y: 88, color: "#64748b", html: "Ipotenusa = √(c₁² + c₂²).", why: "Il teorema lega aree di quadrati costruiti sui lati: per tornare dalle aree alle lunghezze serve la radice. È lì che i Greci incontrarono per la prima volta √2." }
      ],
      edges: [
        ["quad", "radice", "inversa"],
        ["radice", "perfetti", "esatta se"],
        ["perfetti", "scomp", "si calcola con"],
        ["radice", "approx", "altrimenti"],
        ["approx", "irraz", "perché sono"],
        ["radice", "propr", "ha"],
        ["approx", "pitagora", "serve in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: approssimare",
      questions: [
        { type: "mc", q: "Tra quali numeri interi si trova √30?", options: ["4 e 5", "5 e 6", "6 e 7"], answer: 1, explain: "25 < 30 < 36, quindi 5 < √30 < 6." },
        { type: "mc", q: "√2 è…", options: ["un numero intero", "una frazione", "un numero irrazionale"], answer: 2, explain: "√2 = 1,41421… è illimitato e non periodico." },
        { type: "num", q: "√(9/25) = 3/? (scrivi il denominatore)", answer: 5, explain: "√9/√25 = 3/5." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>√a = b significa b² = a. La radice è l'operazione inversa del quadrato.</li>
<li><b>Quadrato perfetto</b>: tutti gli esponenti dei fattori primi sono pari.</li>
<li>Radice con la scomposizione: <b>dimezza gli esponenti</b>.</li>
<li>Radici non esatte: si <b>approssimano</b> (per difetto/eccesso) e sono numeri irrazionali.</li>
<li>√(a·b) = √a·√b, ma √(a + b) ≠ √a + √b.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Radice quadrata", d: "Numero che, elevato al quadrato, dà il radicando." },
    { t: "Radicando", d: "Il numero che sta sotto il segno di radice." },
    { t: "Quadrato perfetto", d: "Numero naturale che è il quadrato di un altro numero naturale." },
    { t: "Approssimazione per difetto", d: "Valore un po' più piccolo di quello vero." },
    { t: "Approssimazione per eccesso", d: "Valore un po' più grande di quello vero." },
    { t: "Numero irrazionale", d: "Decimale illimitato non periodico, che non si può scrivere come frazione." },
    { t: "Operazione inversa", d: "Operazione che annulla l'effetto di un'altra (radice ↔ quadrato)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "√225 = ?", answer: 15, explain: "15 × 15 = 225." },
      { type: "mc", q: "Quale di questi numeri NON è un quadrato perfetto?", options: ["121", "169", "180"], answer: 2, explain: "180 = 2² × 3² × 5: l'esponente di 5 è dispari." },
      { type: "num", q: "Usando la scomposizione 2⁴ × 3² × 5², calcola la radice quadrata di questo numero.", answer: 60, explain: "Dimezzo gli esponenti: 2² × 3 × 5 = 60." },
      { type: "tf", q: "√36 + √64 = √100.", answer: false, explain: "6 + 8 = 14, mentre √100 = 10." },
      { type: "mc", q: "√70 è compreso tra…", options: ["7 e 8", "8 e 9", "9 e 10"], answer: 1, explain: "64 < 70 < 81." },
      { type: "num", q: "Un quadrato ha area 81 cm². Quanto misura il lato?", answer: 9, unit: "cm", explain: "√81 = 9 cm." },
      { type: "num", q: "√(4 × 49) = ?", answer: 14, explain: "√4 × √49 = 2 × 7 = 14." },
      { type: "mc", q: "Un quadrato perfetto può finire con la cifra…", options: ["7", "6", "8"], answer: 1, explain: "I quadrati finiscono con 0, 1, 4, 5, 6, 9 (es. 16, 36)." },
      { type: "num", q: "Approssima √20 a meno di un decimo, per difetto.", answer: 4.4, tol: 0.001, explain: "4,4² = 19,36 e 4,5² = 20,25: √20 ≈ 4,4." },
      { type: "tf", q: "Non esiste (tra i numeri che conosci) la radice quadrata di −9.", answer: true, explain: "Nessun numero al quadrato dà un risultato negativo." },
      { type: "order", q: "Ordina dal più piccolo al più grande.", items: ["√10", "√16", "4,5", "√25"], explain: "3,16… < 4 < 4,5 < 5." }
    ],
    gen: [["sqrt", 3]]
  }
});

TOPIC('it', {
  id: "m1-mat-potenze",
  title: "Le potenze",
  intro: "La <b>potenza</b> è un modo veloce per scrivere una moltiplicazione di fattori tutti uguali: 2 × 2 × 2 × 2 × 2 = <b>2⁵</b>. Scopriamo i termini, i casi particolari, le <b>proprietà</b> che semplificano i calcoli e la <b>notazione scientifica</b>, che permette di scrivere numeri giganteschi (come la distanza delle stelle) o minuscoli (come la grandezza di un batterio).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Che cos'è una potenza",
      html: `<p>La <b>potenza</b> di un numero è il prodotto di più fattori <b>uguali</b> a quel numero.</p>
<p style="font-size:1.3em;text-align:center"><b>3⁴ = 3 × 3 × 3 × 3 = 81</b></p>
<ul>
<li>la <b>base</b> (3) è il fattore che si ripete;</li>
<li>l'<b>esponente</b> (4), scritto piccolo in alto a destra, dice <b>quante volte</b> la base è moltiplicata per sé stessa;</li>
<li>il risultato (81) si chiama anch'esso <b>potenza</b>.</li>
</ul>
<p>Si legge «tre alla quarta». Con esponente 2 si dice anche «al <b>quadrato</b>» (5² = 25), con esponente 3 «al <b>cubo</b>» (2³ = 8).</p>
<p><b>Attenzione all'errore più comune</b>: 3⁴ <b>non</b> è 3 × 4 = 12! È 3 × 3 × 3 × 3 = 81.</p>
<p>L'operazione si chiama <b>elevamento a potenza</b>: è la quinta operazione, dopo le quattro che conosci. Come la moltiplicazione è un'addizione ripetuta, la potenza è una <b>moltiplicazione ripetuta</b>.</p>`
    },
    {
      type: "svg",
      title: "Quadrati e cubi: perché si chiamano così",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<g stroke="#1e3a8a" stroke-width="2" fill="#93c5fd">
<rect x="40" y="70" width="45" height="45"/><rect x="85" y="70" width="45" height="45"/><rect x="130" y="70" width="45" height="45"/>
<rect x="40" y="115" width="45" height="45"/><rect x="85" y="115" width="45" height="45"/><rect x="130" y="115" width="45" height="45"/>
<rect x="40" y="160" width="45" height="45"/><rect x="85" y="160" width="45" height="45"/><rect x="130" y="160" width="45" height="45"/>
</g>
<text x="107" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#1e3a8a">3² = 9</text>
<text x="107" y="240" font-size="16" text-anchor="middle" fill="#334155">un quadrato di lato 3</text>
<g stroke="#9a3412" stroke-width="2">
<polygon points="330,120 450,120 450,240 330,240" fill="#fdba74"/>
<polygon points="330,120 380,80 500,80 450,120" fill="#fed7aa"/>
<polygon points="450,120 500,80 500,200 450,240" fill="#fb923c"/>
<line x1="370" y1="120" x2="370" y2="240"/><line x1="410" y1="120" x2="410" y2="240"/>
<line x1="330" y1="160" x2="450" y2="160"/><line x1="330" y1="200" x2="450" y2="200"/>
<line x1="347" y1="107" x2="467" y2="107"/><line x1="363" y1="93" x2="483" y2="93"/>
<line x1="370" y1="120" x2="420" y2="80"/><line x1="410" y1="120" x2="460" y2="80"/>
<line x1="467" y1="107" x2="467" y2="227"/><line x1="483" y1="93" x2="483" y2="213"/>
<line x1="450" y1="160" x2="500" y2="120"/><line x1="450" y1="200" x2="500" y2="160"/>
</g>
<text x="415" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#9a3412">3³ = 27</text>
<text x="415" y="275" font-size="16" text-anchor="middle" fill="#334155">un cubo di spigolo 3</text>
</svg>`,
      caption: "I Greci pensavano ai numeri come figure: 3² sono i quadretti di un quadrato di lato 3, 3³ i cubetti di un cubo di spigolo 3."
    },
    {
      type: "3d",
      title: "Il cubo di un numero in 3D",
      scene: "blocks",
      options: { mode: "volume", a: 3, b: 3, c: 3 },
      caption: "3 × 3 × 3 = 3³ = 27 cubetti. Imposta tutti i lati a 4: ottieni 4³ = 64. Prova poi a 5: quanti sono?"
    },
    {
      type: "remember",
      title: "I casi particolari",
      html: `<ul>
<li><b>Esponente 1</b>: a¹ = a (un solo fattore). 7¹ = 7</li>
<li><b>Esponente 0</b>: a⁰ = <b>1</b> (con a ≠ 0). 5⁰ = 1, 1000⁰ = 1 (vedremo il perché tra poco!)</li>
<li><b>Base 1</b>: 1ⁿ = 1. 1¹⁰⁰ = 1</li>
<li><b>Base 0</b>: 0ⁿ = 0 (con n ≠ 0). 0⁵ = 0</li>
<li><b>0⁰</b> non ha significato in aritmetica: è una forma <b>indeterminata</b>.</li>
<li><b>Base 10</b>: 10ⁿ = 1 seguito da <b>n zeri</b>. 10⁶ = 1.000.000 (un milione)</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: calcolare le potenze",
      questions: [
        { type: "num", q: "Quanto fa 2⁵?", answer: 32, tol: 0, explain: "2 × 2 × 2 × 2 × 2 = 32." },
        { type: "mc", q: "Quanto vale 4³?", options: ["12", "64", "43", "7"], answer: 1, explain: "4 × 4 × 4 = 64. Non 4 × 3!" },
        { type: "num", q: "Quanto fa 9⁰?", answer: 1, tol: 0, explain: "Ogni numero diverso da 0 elevato a 0 dà 1." },
        { type: "tf", q: "10⁴ = 10.000", answer: true, explain: "1 seguito da 4 zeri." }
      ]
    },
    {
      type: "text",
      title: "Le proprietà delle potenze",
      html: `<p>Le proprietà permettono di calcolare con le potenze <b>senza svolgerle</b>. Valgono solo nei casi indicati!</p>
<table>
<tr><th>Proprietà</th><th>Regola</th><th>Esempio</th></tr>
<tr><td><b>1. Prodotto</b> di potenze con la <b>stessa base</b></td><td>aᵐ × aⁿ = aᵐ⁺ⁿ<br>(si sommano gli esponenti)</td><td>2³ × 2⁴ = 2⁷ = 128</td></tr>
<tr><td><b>2. Quoziente</b> di potenze con la <b>stessa base</b></td><td>aᵐ : aⁿ = aᵐ⁻ⁿ<br>(si sottraggono gli esponenti, m ≥ n)</td><td>5⁶ : 5⁴ = 5² = 25</td></tr>
<tr><td><b>3. Potenza di potenza</b></td><td>(aᵐ)ⁿ = aᵐ×ⁿ<br>(si moltiplicano gli esponenti)</td><td>(3²)³ = 3⁶ = 729</td></tr>
<tr><td><b>4. Prodotto</b> di potenze con lo <b>stesso esponente</b></td><td>aⁿ × bⁿ = (a × b)ⁿ</td><td>2³ × 5³ = 10³ = 1000</td></tr>
<tr><td><b>5. Quoziente</b> di potenze con lo <b>stesso esponente</b></td><td>aⁿ : bⁿ = (a : b)ⁿ</td><td>12² : 4² = 3² = 9</td></tr>
</table>
<p><b>Perché funzionano?</b> Basta scrivere i fattori: 2³ × 2⁴ = (2×2×2) × (2×2×2×2) = sette 2 = 2⁷.</p>
<p><b>Ecco perché a⁰ = 1</b>: 5³ : 5³ = 5³⁻³ = 5⁰; ma ogni numero diviso per sé stesso fa 1. Quindi 5⁰ = 1!</p>
<p><b>Attenzione</b>: non esiste una regola per la <b>somma</b>! 2³ + 2⁴ = 8 + 16 = 24, che <b>non</b> è 2⁷ = 128.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: un'espressione con le potenze",
      html: `<p>Nelle espressioni le potenze hanno la <b>precedenza</b> su moltiplicazioni e divisioni. Ordine: parentesi → <b>potenze</b> → × e : → + e −.</p>
<p>Risolvi: <b>[ (2⁴ × 2³) : 2⁵ + 3² ] × 2 − 5⁰</b></p>
<ol>
<li>tonde con le proprietà: 2⁴ × 2³ = 2⁷; 2⁷ : 2⁵ = 2² = 4</li>
<li>3² = 9 → [ 4 + 9 ] = 13</li>
<li>5⁰ = 1</li>
<li>13 × 2 − 1 = 26 − 1 = <b>25</b></li>
</ol>
<p>Un altro trucco: <b>25² × 4²</b> = (25 × 4)² = 100² = <b>10.000</b>. Senza proprietà avresti dovuto calcolare 625 × 16!</p>`
    },
    {
      type: "widget",
      title: "Quale proprietà?",
      widget: "match",
      options: { pairs: [["7² × 7⁵ = 7⁷", "prodotto stessa base"], ["9⁸ : 9³ = 9⁵", "quoziente stessa base"], ["(4³)² = 4⁶", "potenza di potenza"], ["2⁵ × 5⁵ = 10⁵", "prodotto stesso esponente"], ["15⁴ : 3⁴ = 5⁴", "quoziente stesso esponente"], ["8⁰ = 1", "esponente zero"]] },
      caption: "Collega ogni uguaglianza alla proprietà che la giustifica."
    },
    {
      type: "text",
      title: "Le potenze di 10 e la notazione scientifica",
      html: `<p>Le <b>potenze di 10</b> sono il cuore del nostro sistema decimale:</p>
<p>10¹ = 10 (decina), 10² = 100 (centinaio), 10³ = 1.000 (migliaio), 10⁶ = un milione, 10⁹ = un miliardo.</p>
<p>Ogni numero si può scrivere in <b>forma polinomiale</b> con le potenze di 10:<br>4.705 = 4 × 10³ + 7 × 10² + 0 × 10¹ + 5 × 10⁰.</p>
<p>La <b>notazione scientifica</b> scrive un numero come <b>a × 10ⁿ</b>, dove <b>a</b> è un numero compreso tra 1 (incluso) e 10 (escluso). Gli scienziati la usano per numeri molto grandi:</p>
<ul>
<li>distanza Terra–Sole ≈ 150.000.000 km = <b>1,5 × 10⁸ km</b></li>
<li>velocità della luce ≈ 300.000 km/s = <b>3 × 10⁵ km/s</b></li>
<li>abitanti della Terra ≈ 8.000.000.000 = <b>8 × 10⁹</b></li>
</ul>
<p><b>Come si fa</b>: sposta la virgola finché davanti resta una sola cifra diversa da 0; l'esponente è il numero di posti di cui l'hai spostata. 47.000 → 4,7 (la virgola si sposta di 4 posti) → <b>4,7 × 10⁴</b>.</p>
<p>L'<b>ordine di grandezza</b> è la potenza di 10 più vicina al numero: serve a fare stime veloci. Per esempio, 8 × 10⁹ ha ordine di grandezza 10¹⁰ (perché 8 è più vicino a 10 che a 1).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il rischio del passaparola",
      html: `<p>Un messaggio falso viene inoltrato: il primo giorno lo riceve <b>1</b> persona, che lo manda a <b>3</b> amici. Il giorno dopo ognuno dei 3 lo manda ad altri 3, e così via.</p>
<table>
<tr><th>Giorno</th><th>Nuove persone</th><th>Potenza</th></tr>
<tr><td>1</td><td>3</td><td>3¹</td></tr>
<tr><td>2</td><td>9</td><td>3²</td></tr>
<tr><td>3</td><td>27</td><td>3³</td></tr>
<tr><td>5</td><td>243</td><td>3⁵</td></tr>
<tr><td>10</td><td>59.049</td><td>3¹⁰</td></tr>
<tr><td>20</td><td>3.486.784.401</td><td>3²⁰ ≈ 3,5 × 10⁹</td></tr>
</table>
<p>In 20 giorni (in teoria) quasi metà dell'umanità! Questa crescita si chiama <b>esponenziale</b>: per questo le notizie false si diffondono così in fretta. Prima di inoltrare, verifica!</p>`
    },
    {
      type: "curiosity",
      title: "La leggenda della scacchiera",
      html: `<p>Una leggenda indiana racconta che l'inventore degli scacchi chiese al re come premio: <b>1 chicco di riso</b> sulla prima casella, <b>2</b> sulla seconda, <b>4</b> sulla terza, e così via raddoppiando fino alla 64ª casella. Il re rise per la richiesta così modesta…</p>
<p>Ma sull'ultima casella ci sarebbero stati <b>2⁶³</b> chicchi, e in tutto <b>2⁶⁴ − 1 = 18.446.744.073.709.551.615</b> chicchi: circa 18 miliardi di miliardi, circa <b>600 volte</b> la produzione mondiale di riso di un anno!</p>`
    },
    {
      type: "curiosity",
      title: "Il googol e il foglio piegato fino alla Luna",
      html: `<p>Il numero <b>10¹⁰⁰</b> (1 seguito da 100 zeri) si chiama <b>googol</b>: il nome lo inventò nel 1920 il nipotino di 9 anni del matematico americano Edward Kasner, Milton Sirotta. I fondatori di <b>Google</b> scelsero il nome dell'azienda ispirandosi proprio a questo numero!</p>
<p>E un esperimento mentale: un foglio di carta spesso <b>0,1 mm</b>, se lo pieghi a metà raddoppia lo spessore. Dopo <b>42 pieghe</b> lo spessore sarebbe 0,1 × 2⁴² mm ≈ <b>440.000 km</b>: più della distanza Terra–Luna (circa 384.000 km)! In pratica nessuno è riuscito a piegare un foglio più di 12 volte.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Le potenze crescono in modo sorprendente. Ecco altri modi per «sentirle».",
      tabs: [
        {
          label: "🌳 L'albero dei raddoppi",
          html: "<p>Immagina un albero genealogico: tu hai 2 genitori, 4 nonni, 8 bisnonni… Ogni generazione indietro è una potenza di 2. Dieci generazioni fa (circa 300 anni) avevi 2¹⁰ = <b>1.024</b> antenati!</p>",
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f0fdf4"/><g stroke="#166534" stroke-width="2"><line x1="300" y1="225" x2="160" y2="165"/><line x1="300" y1="225" x2="440" y2="165"/><line x1="160" y1="165" x2="90" y2="105"/><line x1="160" y1="165" x2="230" y2="105"/><line x1="440" y1="165" x2="370" y2="105"/><line x1="440" y1="165" x2="510" y2="105"/></g><g fill="#22c55e"><circle cx="300" cy="225" r="18"/><circle cx="160" cy="165" r="16"/><circle cx="440" cy="165" r="16"/><circle cx="90" cy="105" r="14"/><circle cx="230" cy="105" r="14"/><circle cx="370" cy="105" r="14"/><circle cx="510" cy="105" r="14"/></g><g fill="#86efac">
<circle cx="55" cy="50" r="11"/><circle cx="125" cy="50" r="11"/><circle cx="195" cy="50" r="11"/><circle cx="265" cy="50" r="11"/><circle cx="335" cy="50" r="11"/><circle cx="405" cy="50" r="11"/><circle cx="475" cy="50" r="11"/><circle cx="545" cy="50" r="11"/></g><g font-size="16" font-weight="bold" fill="#14532d"><text x="320" y="250">tu: 2⁰ = 1</text><text x="470" y="190">genitori: 2¹ = 2</text><text x="10" y="135">nonni: 2² = 4</text><text x="200" y="25">bisnonni: 2³ = 8</text></g></svg>`
        },
        {
          label: "💻 Le potenze nei computer",
          html: `<p>I computer contano in <b>base 2</b> (sistema binario): usano solo 0 e 1. Per questo le memorie hanno numeri «strani»:</p><ul><li>1 byte = 8 bit = 2³ bit, e può avere 2⁸ = <b>256</b> valori diversi;</li><li>1 kibibyte = 2¹⁰ = <b>1.024</b> byte (circa mille);</li><li>una chiavetta da 64 GB: 64 = 2⁶.</li></ul><p>Nel sistema binario anche i numeri si scrivono con le potenze di 2: 13 = 8 + 4 + 1 = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = <b>1101</b>. È lo stesso principio della forma polinomiale in base 10!</p>`
        },
        {
          label: "🧊 Quadrati in 3D",
          html: "<p>Un quadrato di cubetti 5 × 5 contiene 5² = 25 cubetti. Aumenta il lato di 1: il quadrato diventa 6² = 36. Non sono stati aggiunti solo 6 cubetti, ma 11 (una riga, una colonna e l'angolo)! Prova con i cursori e scopri la regola dei quadrati.</p>",
          scene: "blocks",
          options: { mode: "array", a: 5, b: 5 }
        },
        {
          label: "🇨🇳 Un sistema senza esponenti",
          html: `<p>In <b>cinese</b> e in <b>giapponese</b> i grandi numeri si raggruppano a 4 cifre, non a 3: esiste una parola per <b>10⁴</b> (万, <i>wàn</i> / <i>man</i>) e una per <b>10⁸</b> (亿, <i>yì</i> / 億 <i>oku</i>). Quindi «un milione» si dice «cento wàn» (100 × 10⁴).</p><p>In India si usano il <b>lakh</b> (10⁵) e il <b>crore</b> (10⁷), e si scrive 1,00,00,000 invece di 10.000.000! Lo stesso numero, raggruppamenti diversi: le potenze di 10 sono il linguaggio comune che mette tutti d'accordo.</p>`
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: proprietà e notazione scientifica",
      questions: [
        { type: "mc", q: "3⁵ × 3² = ?", options: ["3¹⁰", "3⁷", "9⁷", "3³"], answer: 1, explain: "Stessa base: si sommano gli esponenti, 5 + 2 = 7." },
        { type: "mc", q: "(2³)⁴ = ?", options: ["2⁷", "2¹²", "2⁸¹", "8⁷"], answer: 1, explain: "Potenza di potenza: si moltiplicano gli esponenti, 3 × 4 = 12." },
        { type: "mc", q: "Come si scrive 6.200.000 in notazione scientifica?", options: ["62 × 10⁵", "6,2 × 10⁶", "0,62 × 10⁷", "6,2 × 10⁵"], answer: 1, explain: "La virgola si sposta di 6 posti; davanti resta una sola cifra, 6,2." },
        { type: "tf", q: "2³ + 2² = 2⁵", answer: false, explain: "8 + 4 = 12, mentre 2⁵ = 32. Per la somma non esistono proprietà!" }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché le potenze funzionano così",
      nodes: [
        { id: "moltiplicazione", label: "Moltiplicazione ripetuta", x: 50, y: 5, color: "#64748b", html: "Fattori tutti uguali: 2 × 2 × 2.", why: "Come la moltiplicazione abbrevia l'addizione ripetuta, la potenza abbrevia la moltiplicazione ripetuta." },
        { id: "potenza", label: "Potenza aⁿ", x: 50, y: 20, color: "#2563eb", html: "Base a, esponente n.", why: "La notazione con l'esponente in alto fu introdotta da René Descartes (Cartesio) nella «Géométrie» del 1637. Prima si scriveva per esteso o con parole (quadrato, cubo)." },
        { id: "figure", label: "Quadrati e cubi", x: 15, y: 32, color: "#ea580c", html: "a² = area di un quadrato, a³ = volume di un cubo.", why: "I Pitagorici (VI sec. a.C.) rappresentavano i numeri con sassolini disposti in figure: da qui i nomi «quadrato» e «cubo»." },
        { id: "casi", label: "Casi particolari", x: 85, y: 32, color: "#0ea5e9", html: "a¹ = a, a⁰ = 1, 1ⁿ = 1, 0ⁿ = 0.", why: "a⁰ = 1 non è una regola inventata a caso: è l'unico valore che rende vera la proprietà del quoziente (aⁿ : aⁿ = a⁰ = 1)." },
        { id: "proprieta", label: "Proprietà", x: 50, y: 44, color: "#9333ea", html: "Stessa base: + o − gli esponenti; potenza di potenza: × gli esponenti; stesso esponente: × o : le basi.", why: "Derivano tutte dal contare i fattori: aᵐ × aⁿ ha m fattori più n fattori. Le proprietà commutativa e associativa della moltiplicazione permettono di raggrupparli." },
        { id: "espressioni", label: "Potenze nelle espressioni", x: 20, y: 64, color: "#f59e0b", html: "Parentesi → potenze → × e : → + e −.", why: "La potenza «lega» ancora di più della moltiplicazione, perché ne è una forma abbreviata." },
        { id: "dieci", label: "Potenze di 10", x: 50, y: 66, color: "#16a34a", html: "10ⁿ = 1 seguito da n zeri.", why: "Sono la base del sistema decimale posizionale: ogni posizione vale 10 volte quella a destra. Archimede (III sec. a.C.) nell'«Arenario» usò un sistema simile per contare i granelli di sabbia dell'universo." },
        { id: "scientifica", label: "Notazione scientifica", x: 80, y: 64, color: "#dc2626", html: "a × 10ⁿ con 1 ≤ a < 10.", why: "Gli scienziati ne hanno bisogno per confrontare grandezze lontanissime: dalle galassie ai virus. Rende i calcoli più semplici e mostra subito l'ordine di grandezza." },
        { id: "esponenziale", label: "Crescita esponenziale", x: 35, y: 88, color: "#db2777", html: "Raddoppiare o triplicare a ogni passo: si cresce velocissimo.", why: "Batteri, contagi, interessi in banca, notizie virali crescono così. La leggenda della scacchiera mostra quanto la nostra intuizione sottovaluti le potenze." },
        { id: "binario", label: "Base 2 e computer", x: 70, y: 88, color: "#0f766e", html: "I computer usano le potenze di 2.", why: "Gottfried Leibniz descrisse il sistema binario nel 1703; nel Novecento Claude Shannon mostrò che i circuiti elettrici acceso/spento possono calcolare con 0 e 1." }
      ],
      edges: [["moltiplicazione", "potenza", "si abbrevia in"], ["potenza", "figure", "esponenti 2 e 3"], ["potenza", "casi", "esponenti 0 e 1"], ["potenza", "proprieta", "gode di"], ["proprieta", "casi", "spiega a⁰ = 1"], ["proprieta", "espressioni", "semplifica"], ["potenza", "dieci", "base 10"], ["dieci", "scientifica", "permette"], ["potenza", "esponenziale", "descrive"], ["esponenziale", "binario", "base 2"]]
    }
  ],
  glossary: [
    { t: "Potenza", d: "Prodotto di più fattori uguali: aⁿ." },
    { t: "Base", d: "Il fattore che si ripete in una potenza." },
    { t: "Esponente", d: "Il numero che indica quante volte la base si moltiplica per sé stessa." },
    { t: "Quadrato", d: "Potenza con esponente 2." },
    { t: "Cubo", d: "Potenza con esponente 3." },
    { t: "Potenza di 10", d: "10ⁿ: 1 seguito da n zeri." },
    { t: "Notazione scientifica", d: "Scrittura di un numero come a × 10ⁿ, con a compreso tra 1 e 10 (escluso)." },
    { t: "Ordine di grandezza", d: "La potenza di 10 più vicina a un numero." },
    { t: "Crescita esponenziale", d: "Crescita in cui a ogni passo la quantità viene moltiplicata per lo stesso numero." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto fa 5³?", answer: 125, tol: 0, explain: "5 × 5 × 5 = 125." },
      { type: "mc", q: "In 7⁴, il numero 4 si chiama…", options: ["base", "esponente", "fattore", "potenza"], answer: 1, explain: "L'esponente indica quante volte la base 7 si moltiplica per sé stessa." },
      { type: "tf", q: "1²⁰ = 20", answer: false, explain: "1 moltiplicato per sé stesso quante volte vuoi dà sempre 1." },
      { type: "mc", q: "2⁶ : 2² = ?", options: ["2³", "2⁴", "2⁸", "1³"], answer: 1, explain: "Stessa base: si sottraggono gli esponenti, 6 − 2 = 4." },
      { type: "num", q: "Calcola con la proprietà: 4³ × 25³ = ? (scrivi il numero)", answer: 1000000, tol: 0, explain: "(4 × 25)³ = 100³ = 1.000.000." },
      { type: "mc", q: "Quale numero è scritto correttamente in notazione scientifica?", options: ["35 × 10⁴", "0,7 × 10³", "3,5 × 10⁵", "10 × 10²"], answer: 2, explain: "Il numero davanti deve essere tra 1 (incluso) e 10 (escluso)." },
      { type: "num", q: "Risolvi: 2³ + 3² × 2 − 4⁰", answer: 25, tol: 0, explain: "8 + 9 × 2 − 1 = 8 + 18 − 1 = 25." },
      { type: "num", q: "Risolvi: (5² − 4²)² : 3⁴", answer: 1, tol: 0, explain: "25 − 16 = 9; 9² = 81; 3⁴ = 81; 81 : 81 = 1." },
      { type: "mc", q: "Quanto vale 10⁹?", options: ["Un milione", "Un miliardo", "Mille", "Cento milioni"], answer: 1, explain: "1 seguito da 9 zeri: 1.000.000.000." },
      { type: "text", q: "Come si legge «6²»? (sei al …)", answer: ["quadrato", "al quadrato", "sei al quadrato"], explain: "Sei al quadrato = 36." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande", items: ["2³", "3²", "2⁴", "5²", "3³"], explain: "8 < 9 < 16 < 25 < 27." },
      { type: "mc", q: "Perché 7⁰ = 1?", options: ["È una convenzione senza motivo", "Perché 7³ : 7³ = 7⁰ e ogni numero diviso per sé stesso dà 1", "Perché 7 × 0 = 0", "Perché lo 0 non conta"], answer: 1, explain: "La proprietà del quoziente obbliga a⁰ a valere 1." }
    ],
    gen: [["power", 3]]
  }
});

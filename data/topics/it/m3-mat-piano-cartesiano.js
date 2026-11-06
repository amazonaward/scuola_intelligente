TOPIC('it', {
  id: "m3-mat-piano-cartesiano",
  title: "Il piano cartesiano",
  intro: "Battaglia navale, mappe, GPS, schermi dei videogiochi: per indicare un punto basta una <b>coppia di numeri</b>. È l'idea geniale del <b>piano cartesiano</b>, che unisce geometria e algebra. Impariamo a usare le coordinate, a calcolare distanze e a disegnare <b>funzioni</b> e <b>rette</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Assi, origine, coordinate",
      html: `<p>Il <b>piano cartesiano</b> è formato da due rette numeriche <b>perpendicolari</b>:</p>
<ul>
<li>l'<b>asse x</b> (asse delle <b>ascisse</b>), orizzontale;</li>
<li>l'<b>asse y</b> (asse delle <b>ordinate</b>), verticale;</li>
<li>si incontrano nell'<b>origine O(0; 0)</b>.</li>
</ul>
<p>Ogni punto P si individua con una <b>coppia ordinata</b> di numeri, le sue <b>coordinate</b>: <b>P(x; y)</b>. Prima si legge l'<b>ascissa</b> (spostamento orizzontale), poi l'<b>ordinata</b> (spostamento verticale). L'ordine conta: A(2; 5) e B(5; 2) sono punti diversi!</p>
<p>Gli assi dividono il piano in <b>quattro quadranti</b>, numerati in senso antiorario:</p>
<ul>
<li>I quadrante: x &gt; 0, y &gt; 0 &nbsp;(+; +)</li>
<li>II quadrante: x &lt; 0, y &gt; 0 &nbsp;(−; +)</li>
<li>III quadrante: x &lt; 0, y &lt; 0 &nbsp;(−; −)</li>
<li>IV quadrante: x &gt; 0, y &lt; 0 &nbsp;(+; −)</li>
</ul>
<p>I punti sull'asse x hanno y = 0; quelli sull'asse y hanno x = 0.</p>`
    },
    {
      type: "svg",
      title: "Il piano cartesiano e i quattro quadranti",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#ffffff"/>
<g stroke="#e2e8f0" stroke-width="1">
<line x1="140" y1="20" x2="140" y2="320"/><line x1="180" y1="20" x2="180" y2="320"/><line x1="220" y1="20" x2="220" y2="320"/><line x1="260" y1="20" x2="260" y2="320"/><line x1="300" y1="20" x2="300" y2="320"/><line x1="340" y1="20" x2="340" y2="320"/><line x1="380" y1="20" x2="380" y2="320"/><line x1="420" y1="20" x2="420" y2="320"/><line x1="460" y1="20" x2="460" y2="320"/><line x1="500" y1="20" x2="500" y2="320"/>
<line x1="100" y1="50" x2="540" y2="50"/><line x1="100" y1="90" x2="540" y2="90"/><line x1="100" y1="130" x2="540" y2="130"/><line x1="100" y1="210" x2="540" y2="210"/><line x1="100" y1="250" x2="540" y2="250"/><line x1="100" y1="290" x2="540" y2="290"/>
</g>
<line x1="100" y1="170" x2="545" y2="170" stroke="#1f2937" stroke-width="3"/>
<polygon points="550,170 538,164 538,176" fill="#1f2937"/>
<line x1="320" y1="325" x2="320" y2="15" stroke="#1f2937" stroke-width="3"/>
<polygon points="320,10 314,22 326,22" fill="#1f2937"/>
<text x="555" y="190" font-size="20" fill="#1f2937" font-weight="bold">x</text>
<text x="330" y="22" font-size="20" fill="#1f2937" font-weight="bold">y</text>
<text x="305" y="190" font-size="16" fill="#1f2937">O</text>
<text x="470" y="40" font-size="18" fill="#2563eb" font-weight="bold">I (+;+)</text>
<text x="120" y="40" font-size="18" fill="#16a34a" font-weight="bold">II (−;+)</text>
<text x="120" y="315" font-size="18" fill="#dc2626" font-weight="bold">III (−;−)</text>
<text x="460" y="315" font-size="18" fill="#a855f7" font-weight="bold">IV (+;−)</text>
<line x1="440" y1="170" x2="440" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="320" y1="50" x2="440" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="440" cy="50" r="7" fill="#2563eb"/>
<text x="450" y="75" font-size="17" fill="#2563eb" font-weight="bold">A(3; 3)</text>
<circle cx="200" cy="90" r="7" fill="#16a34a"/>
<text x="150" y="80" font-size="17" fill="#16a34a" font-weight="bold">B(−3; 2)</text>
<circle cx="240" cy="250" r="7" fill="#dc2626"/>
<text x="180" y="275" font-size="17" fill="#dc2626" font-weight="bold">C(−2; −2)</text>
<circle cx="480" cy="210" r="7" fill="#a855f7"/>
<text x="490" y="235" font-size="17" fill="#a855f7" font-weight="bold">D(4; −1)</text>
<g font-size="13" fill="#475569" text-anchor="middle"><text x="360" y="188">1</text><text x="400" y="188">2</text><text x="440" y="188">3</text><text x="480" y="188">4</text><text x="280" y="188">−1</text><text x="240" y="188">−2</text><text x="200" y="188">−3</text></g>
</svg>`,
      caption: "Ogni quadrato della griglia è un'unità. Per trovare A(3; 3): 3 passi a destra, poi 3 in alto."
    },
    {
      type: "text",
      title: "Distanza tra due punti e punto medio",
      html: `<ul>
<li><b>Segmento orizzontale</b> (stessa y): distanza = differenza delle ascisse in valore assoluto. A(1; 4), B(7; 4) → AB = |7 − 1| = <b>6</b>.</li>
<li><b>Segmento verticale</b> (stessa x): differenza delle ordinate. C(2; −3), D(2; 5) → CD = |5 − (−3)| = <b>8</b>.</li>
<li><b>Segmento obliquo</b>: è l'ipotenusa di un triangolo rettangolo! Si usa il <b>teorema di Pitagora</b>:<br><b>AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>.<br>A(1; 2), B(4; 6) → AB = √(3² + 4²) = √25 = <b>5</b>.</li>
<li><b>Punto medio</b> M di AB: la media delle coordinate: <b>M((x₁ + x₂)/2; (y₁ + y₂)/2)</b>. A(2; 1), B(8; 5) → M(5; 3).</li>
</ul>
<p>Con le coordinate si possono calcolare <b>perimetri e aree</b> di poligoni disegnati nel piano.</p>`
    },
    {
      type: "widget",
      title: "Pitagora nel piano",
      widget: "pythagoras",
      options: {},
      caption: "I cateti sono gli spostamenti orizzontale (Δx) e verticale (Δy) tra i due punti; l'ipotenusa è la loro distanza."
    },
    {
      type: "quiz",
      title: "Mini-quiz: coordinate e distanze",
      questions: [
        { type: "mc", q: "In quale quadrante si trova P(−4; 7)?", options: ["I", "II", "III", "IV"], answer: 1, explain: "x negativa e y positiva: II quadrante." },
        { type: "num", q: "Distanza tra A(−2; 3) e B(6; 3)?", answer: 8, explain: "Stessa ordinata: |6 − (−2)| = 8." },
        { type: "num", q: "Distanza tra O(0; 0) e P(6; 8)?", answer: 10, explain: "√(36 + 64) = √100 = 10." }
      ]
    },
    {
      type: "text",
      title: "Le funzioni e i loro grafici",
      html: `<p>Una <b>funzione</b> è una relazione che a ogni valore di <b>x</b> associa <b>uno e un solo</b> valore di <b>y</b>. Si scrive <b>y = f(x)</b>. Per disegnarla: costruisci una <b>tabella</b> di valori (x; y), riporta i punti nel piano e uniscili.</p>
<ul>
<li><b>Proporzionalità diretta</b> <b>y = kx</b>: se x raddoppia, y raddoppia. Il grafico è una <b>retta passante per l'origine</b>. Esempio: costo = 2 € × numero di quaderni.</li>
<li><b>Proporzionalità inversa</b> <b>y = k/x</b>: se x raddoppia, y si dimezza (xy = k costante). Il grafico è un <b>ramo di iperbole</b>. Esempio: tempo per un viaggio di 120 km = 120 / velocità.</li>
<li><b>Funzione lineare</b> <b>y = mx + q</b>: il grafico è una <b>retta</b>. Esempio: taxi con 3 € di partenza e 1,50 € al km → y = 1,5x + 3.</li>
<li><b>Funzione quadratica</b> <b>y = ax²</b>: il grafico è una <b>parabola</b> con vertice nell'origine. Esempio: area del quadrato in funzione del lato.</li>
</ul>`
    },
    {
      type: "text",
      title: "La retta: y = mx + q",
      html: `<ul>
<li><b>m</b> è il <b>coefficiente angolare</b> (pendenza): di quanto sale y quando x aumenta di 1. Se m &gt; 0 la retta <b>sale</b>, se m &lt; 0 <b>scende</b>, se m = 0 è <b>orizzontale</b>. Si calcola con due punti: <b>m = (y₂ − y₁) / (x₂ − x₁)</b>.</li>
<li><b>q</b> è l'<b>ordinata all'origine</b> (intercetta): il punto in cui la retta taglia l'asse y, cioè (0; q).</li>
<li>Casi particolari: <b>y = k</b> è una retta orizzontale; <b>x = k</b> è una retta verticale (non è una funzione!); l'asse x ha equazione y = 0, l'asse y x = 0; <b>y = x</b> è la bisettrice del I e III quadrante.</li>
<li>Rette <b>parallele</b>: stesso m (y = 2x + 1 e y = 2x − 5).</li>
<li>Rette <b>perpendicolari</b>: m · m′ = −1 (y = 2x e y = −½x + 3).</li>
<li>Un punto <b>appartiene</b> a una retta se le sue coordinate ne soddisfano l'equazione: P(2; 7) sta su y = 3x + 1? 3·2 + 1 = 7 ✔️</li>
</ul>`
    },
    {
      type: "svg",
      title: "Rette a confronto",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<line x1="60" y1="190" x2="440" y2="190" stroke="#1f2937" stroke-width="2"/>
<line x1="250" y1="330" x2="250" y2="10" stroke="#1f2937" stroke-width="2"/>
<text x="445" y="195" font-size="16">x</text><text x="256" y="20" font-size="16">y</text>
<line x1="170" y1="350" x2="350" y2="-10" stroke="#2563eb" stroke-width="4"/>
<line x1="130" y1="350" x2="290" y2="30" stroke="#60a5fa" stroke-width="4" stroke-dasharray="10 6"/>
<line x1="60" y1="95" x2="440" y2="285" stroke="#dc2626" stroke-width="4"/>
<line x1="60" y1="110" x2="440" y2="110" stroke="#16a34a" stroke-width="4"/>
<circle cx="250" cy="190" r="6" fill="#1f2937"/>
<circle cx="250" cy="110" r="6" fill="#16a34a"/>
<text x="460" y="60" font-size="18" fill="#2563eb" font-weight="bold">y = 2x  (sale, passa per O)</text>
<text x="460" y="95" font-size="18" fill="#60a5fa" font-weight="bold">y = 2x + 2  (parallela)</text>
<text x="460" y="130" font-size="18" fill="#dc2626" font-weight="bold">y = −½x  (scende,</text>
<text x="478" y="152" font-size="18" fill="#dc2626" font-weight="bold">perpendicolare a y = 2x)</text>
<text x="460" y="190" font-size="18" fill="#16a34a" font-weight="bold">y = 2  (orizzontale, m = 0)</text>
<text x="460" y="240" font-size="15" fill="#475569">1 quadretto = 40 px</text>
</svg>`,
      caption: "Le due rette blu hanno la stessa pendenza m = 2: sono parallele. La rossa ha m = −½: 2 · (−½) = −1, quindi è perpendicolare alla blu."
    },
    {
      type: "example",
      title: "Esempio pratico: due abbonamenti a confronto",
      html: `<p>Palestra A: <b>30 € di iscrizione + 20 € al mese</b>. Palestra B: <b>nessuna iscrizione, 26 € al mese</b>.</p>
<ul>
<li>A: y = 20x + 30 &nbsp;&nbsp; B: y = 26x</li>
<li>Quando costano uguale? 20x + 30 = 26x → 6x = 30 → <b>x = 5 mesi</b> (costo 130 €).</li>
<li>Nel grafico è il punto in cui le due rette si <b>incrociano</b>: (5; 130). Prima dei 5 mesi conviene B, dopo conviene A.</li>
</ul>
<table><tr><th>mesi</th><th>1</th><th>3</th><th>5</th><th>8</th><th>12</th></tr><tr><td>A</td><td>50</td><td>90</td><td>130</td><td>190</td><td>270</td></tr><tr><td>B</td><td>26</td><td>78</td><td>130</td><td>208</td><td>312</td></tr></table>`
    },
    {
      type: "example",
      title: "Esempio pratico: un poligono nel piano",
      html: `<p>Disegna i punti A(1; 1), B(7; 1), C(7; 5), D(1; 5).</p>
<ul>
<li>È un <b>rettangolo</b>: AB = 7 − 1 = 6, BC = 5 − 1 = 4.</li>
<li>Perimetro = 2·(6 + 4) = <b>20</b> unità; Area = 6 · 4 = <b>24</b> unità².</li>
<li>Diagonale AC = √(6² + 4²) = √52 ≈ <b>7,21</b>.</li>
<li>Centro (punto medio di AC) = ((1 + 7)/2; (1 + 5)/2) = <b>(4; 3)</b>.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Cartesio e la mosca",
      html: `<p>Il piano porta il nome del filosofo e matematico francese <b>René Descartes</b> (in latino <i>Cartesius</i>, 1596–1650), che lo descrisse nella <i>Geometria</i>, un'appendice del <i>Discorso sul metodo</i> (1637). Una leggenda racconta che ebbe l'idea a letto, osservando una <b>mosca</b> sul soffitto e chiedendosi come descriverne la posizione con due numeri: le distanze da due pareti! Negli stessi anni ci arrivò, in modo indipendente, un altro francese: <b>Pierre de Fermat</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Coordinate ovunque",
      html: `<ul>
<li>Lo <b>schermo</b> su cui leggi è una griglia di pixel con coordinate: ma nei computer l'origine è in <b>alto a sinistra</b> e la y cresce verso il basso!</li>
<li>Il <b>GPS</b> usa latitudine e longitudine: coordinate su una sfera. Roma è circa a (41,9° N; 12,5° E).</li>
<li>Gli <b>scacchi</b> usano le coordinate: "Cavallo in f3" = colonna f, riga 3.</li>
<li>Molte città sono costruite a griglia, come <b>Manhattan</b> (piano del 1811) o il centro di <b>Torino</b>, che conserva la pianta ortogonale del castrum romano di <i>Augusta Taurinorum</i>.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>P(x; y): prima l'ascissa (orizzontale), poi l'ordinata (verticale).</li>
<li>Distanza: AB = √[(Δx)² + (Δy)²]; punto medio = media delle coordinate.</li>
<li>y = kx → retta per l'origine (proporzionalità diretta); y = k/x → iperbole (proporzionalità inversa).</li>
<li>y = mx + q: m = pendenza, q = intercetta. Parallele: stesso m. Perpendicolari: m·m′ = −1.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il piano cartesiano",
      intro: "Se gli assi e le formule ti sembrano astratti, prova con un gioco, con il globo terrestre o con una scala.",
      tabs: [
        {
          label: "🚢 Battaglia navale",
          html: `<p>Nella <b>battaglia navale</b> dici "B5": una <b>colonna</b> (lettera) e una <b>riga</b> (numero). È proprio una coppia di coordinate!</p>
<p>Nel piano cartesiano è uguale, ma: le colonne sono numeri (anche negativi), l'origine è al centro, e si dice prima <b>x</b> (colonna) e poi <b>y</b> (riga). Trucco per ricordare l'ordine: "<b>prima cammini, poi sali le scale</b>" (prima orizzontale, poi verticale), oppure "x viene prima di y nell'alfabeto".</p>
<p>Gioca con un amico: disegnate una griglia da −5 a 5 e nascondete 3 navi. "Sparate" con coppie come (−2; 3)!</p>`
        },
        {
          label: "🌍 Le coordinate della Terra",
          html: `<p>La Terra usa un "piano cartesiano" avvolto su una sfera: la <b>longitudine</b> (est-ovest, come la x) e la <b>latitudine</b> (nord-sud, come la y). L'"origine" è l'incrocio tra l'<b>equatore</b> e il <b>meridiano di Greenwich</b>, in mezzo all'oceano Atlantico, nel golfo di Guinea.</p>
<p>I quattro "quadranti" sono: Nord-Est (Italia), Nord-Ovest (USA), Sud-Ovest (Brasile), Sud-Est (Australia). Ruota il globo e trova i punti.</p>`,
          scene: "globe",
          options: { points: [
            { lat: 0, lon: 0, label: "Origine (0°; 0°)", color: "#1f2937" },
            { lat: 41.9, lon: 12.5, label: "Roma (N; E)", color: "#2563eb" },
            { lat: 40.7, lon: -74, label: "New York (N; O)", color: "#16a34a" },
            { lat: -22.9, lon: -43.2, label: "Rio de Janeiro (S; O)", color: "#dc2626" },
            { lat: -33.9, lon: 151.2, label: "Sydney (S; E)", color: "#a855f7" }
          ] }
        },
        {
          label: "🪜 La pendenza come una scala",
          html: `<p>Il coefficiente angolare <b>m</b> è come la <b>pendenza di una scala o di una strada</b>: "quanto sali per ogni passo in avanti".</p>
<ul>
<li>m = 1: per ogni passo avanti sali di 1 (pendenza del 100%, 45°).</li>
<li>m = 0,1: per ogni 10 m avanti sali di 1 m: è la pendenza del <b>10%</b> dei cartelli stradali!</li>
<li>m negativo: la strada è in discesa.</li>
</ul>
<p>Negli Stati Uniti si insegna con la formula "<b>rise over run</b>": salita diviso corsa, m = Δy / Δx.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0fdf4"/>
<path d="M60 210 L140 210 L140 170 L220 170 L220 130 L300 130 L300 90 L380 90 L380 50" fill="none" stroke="#166534" stroke-width="5"/>
<line x1="60" y1="210" x2="380" y2="50" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 6"/>
<text x="100" y="232" font-size="16" text-anchor="middle" fill="#b45309">run = 2</text>
<text x="165" y="195" font-size="16" fill="#dc2626">rise = 1</text>
<text x="430" y="110" font-size="22" fill="#1f2937" font-weight="bold">m = rise / run</text>
<text x="430" y="145" font-size="22" fill="#2563eb" font-weight="bold">= 1/2</text>
</svg>`
        },
        {
          label: "🔗 Abbina equazione e grafico",
          html: `<p>Collega ogni equazione alla descrizione del suo grafico.</p>`,
          widget: "match",
          options: { pairs: [
            ["y = 3x", "retta per l'origine che sale"],
            ["y = −2x + 4", "retta che scende e taglia l'asse y in 4"],
            ["y = 5", "retta orizzontale"],
            ["x = −1", "retta verticale"],
            ["y = 12/x", "iperbole (proporzionalità inversa)"],
            ["y = x²", "parabola con vertice in O"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del piano cartesiano",
      nodes: [
        { id: "retta", label: "Retta numerica", x: 50, y: 6, color: "#64748b", html: "Una retta con origine, verso e unità: ogni punto è un numero.", why: "Viene dai numeri relativi: una sola retta basta per una dimensione. Per il piano ne servono due." },
        { id: "piano", label: "Piano cartesiano", x: 50, y: 26, color: "#2563eb", html: "Due rette numeriche perpendicolari che si incontrano nell'origine.", why: "Descritto da Cartesio nella <i>Géométrie</i> (1637) e, in modo indipendente, da Fermat. Già gli antichi usavano qualcosa di simile: Tolomeo (II secolo) dava latitudine e longitudine delle città." },
        { id: "coordinate", label: "Coordinate P(x; y)", x: 18, y: 46, color: "#16a34a", html: "Ascissa e ordinata: la 'carta d'identità' di un punto.", why: "'Ascissa' viene dal latino <i>abscissa</i>, 'tagliata' (un segmento tagliato sull'asse); 'coordinate' fu usato da Leibniz nel 1692." },
        { id: "quadranti", label: "Quadranti", x: 10, y: 70, color: "#22c55e", html: "Le 4 regioni del piano, con segni (+;+), (−;+), (−;−), (+;−).", why: "Sono una conseguenza dei numeri relativi sugli assi; si numerano in senso antiorario, lo stesso verso in cui si misurano gli angoli in matematica." },
        { id: "distanza", label: "Distanza e punto medio", x: 36, y: 72, color: "#f59e0b", html: "AB = √[(Δx)² + (Δy)²]; M = media delle coordinate.", why: "La formula della distanza è il teorema di Pitagora (VI secolo a.C.) applicato al triangolo rettangolo formato dagli spostamenti orizzontale e verticale." },
        { id: "funzioni", label: "Funzioni y = f(x)", x: 72, y: 46, color: "#a855f7", html: "A ogni x corrisponde un solo y; il grafico è l'insieme dei punti (x; f(x)).", why: "Il termine 'funzione' fu introdotto da Leibniz (1673) e la notazione f(x) da Eulero (1734). Il piano cartesiano permette di 'vedere' una legge numerica." },
        { id: "rette", label: "Rette y = mx + q", x: 64, y: 72, color: "#ef4444", html: "m = pendenza, q = intercetta. Parallele: stesso m; perpendicolari: m·m′ = −1.", why: "Ogni equazione di primo grado in x e y ha come grafico una retta: è la grande scoperta di Cartesio, che trasforma problemi geometrici in equazioni." },
        { id: "proporzionalita", label: "Proporzionalità", x: 88, y: 70, color: "#0ea5e9", html: "Diretta y = kx (retta per O); inversa y = k/x (iperbole).", why: "Collega il piano alle proporzioni studiate in seconda: la costante k è il rapporto (diretta) o il prodotto (inversa) tra x e y." },
        { id: "applicazioni", label: "Applicazioni", x: 50, y: 92, color: "#14b8a6", html: "GPS, schermi, grafici scientifici ed economici, videogiochi, robotica.", why: "Ogni volta che una posizione o una relazione tra due grandezze va descritta con numeri, si usano coordinate: dai pixel alle mappe digitali." }
      ],
      edges: [
        ["retta", "piano", "due perpendicolari"],
        ["piano", "coordinate", "ogni punto ha"],
        ["coordinate", "quadranti", "il segno indica"],
        ["coordinate", "distanza", "permettono di calcolare"],
        ["piano", "funzioni", "rappresenta"],
        ["funzioni", "rette", "lineari"],
        ["funzioni", "proporzionalita", "casi"],
        ["rette", "applicazioni", "modellano"],
        ["distanza", "applicazioni", "usata in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: rette e funzioni",
      questions: [
        { type: "mc", q: "La retta y = −3x + 2 taglia l'asse y nel punto…", options: ["(0; 2)", "(2; 0)", "(0; −3)"], answer: 0, explain: "L'ordinata all'origine q = 2: punto (0; 2)." },
        { type: "mc", q: "Quale retta è parallela a y = 4x − 1?", options: ["y = −4x + 1", "y = 4x + 7", "y = ¼x"], answer: 1, explain: "Le parallele hanno lo stesso coefficiente angolare m = 4." },
        { type: "tf", q: "Il punto P(3; 10) appartiene alla retta y = 3x + 1.", answer: true, explain: "3·3 + 1 = 10 ✔️" }
      ]
    }
  ],
  glossary: [
    { t: "Piano cartesiano", d: "Piano con due assi numerici perpendicolari che si incontrano nell'origine." },
    { t: "Ascissa", d: "La prima coordinata (x): spostamento orizzontale." },
    { t: "Ordinata", d: "La seconda coordinata (y): spostamento verticale." },
    { t: "Origine", d: "Il punto O(0; 0), incrocio degli assi." },
    { t: "Quadrante", d: "Ciascuna delle quattro parti in cui gli assi dividono il piano." },
    { t: "Funzione", d: "Relazione che a ogni x associa uno e un solo y." },
    { t: "Coefficiente angolare", d: "Il numero m in y = mx + q: indica la pendenza della retta." },
    { t: "Ordinata all'origine", d: "Il numero q in y = mx + q: dove la retta taglia l'asse y." },
    { t: "Iperbole", d: "Il grafico della proporzionalità inversa y = k/x." },
    { t: "Parabola", d: "Il grafico di y = ax²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il punto (0; −5) si trova…", options: ["sull'asse x", "sull'asse y", "nel IV quadrante"], answer: 1, explain: "x = 0: il punto è sull'asse y." },
      { type: "mc", q: "In quale quadrante i punti hanno x > 0 e y < 0?", options: ["I", "II", "III", "IV"], answer: 3, explain: "(+; −): IV quadrante." },
      { type: "num", q: "Distanza tra A(1; 1) e B(4; 5)?", answer: 5, explain: "√(3² + 4²) = √25 = 5." },
      { type: "mc", q: "Punto medio di A(−2; 4) e B(6; 0)?", options: ["(2; 2)", "(4; 4)", "(2; 4)"], answer: 0, explain: "((−2 + 6)/2; (4 + 0)/2) = (2; 2)." },
      { type: "num", q: "Coefficiente angolare della retta per A(1; 3) e B(3; 11)?", answer: 4, explain: "m = (11 − 3)/(3 − 1) = 8/2 = 4." },
      { type: "tf", q: "Il grafico di y = 5x passa per l'origine.", answer: true, explain: "Per x = 0, y = 0: proporzionalità diretta." },
      { type: "mc", q: "y = 24/x rappresenta…", options: ["una proporzionalità diretta", "una proporzionalità inversa", "una parabola"], answer: 1, explain: "xy = 24 costante: proporzionalità inversa (iperbole)." },
      { type: "mc", q: "Quale retta è perpendicolare a y = 3x?", options: ["y = 3x + 1", "y = −⅓x", "y = −3x"], answer: 1, explain: "3 · (−⅓) = −1." },
      { type: "num", q: "Per quale valore di x la retta y = 2x − 8 incontra l'asse x?", answer: 4, explain: "y = 0 → 2x = 8 → x = 4." },
      { type: "num", q: "Area del triangolo con vertici O(0; 0), A(6; 0), B(0; 4)?", answer: 12, explain: "Triangolo rettangolo con cateti 6 e 4: 6·4/2 = 12." },
      { type: "text", q: "Come si chiama la prima coordinata di un punto?", answer: ["ascissa", "l'ascissa"], explain: "Ascissa (x); la seconda è l'ordinata (y)." }
    ],
    gen: [["pythagoras", 2]]
  }
});

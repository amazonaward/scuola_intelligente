TOPIC('it', {
  id: "p5-mat-cerchio",
  title: "Il cerchio",
  intro: "Ruote, pizze, orologi, monete: il <b>cerchio</b> è dappertutto! Impariamo la differenza tra <b>cerchio</b> e <b>circonferenza</b>, che cosa sono <b>raggio</b> e <b>diametro</b> e scopriamo il numero più famoso della matematica: <b>π (pi greco)</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Circonferenza e cerchio: non sono la stessa cosa!",
      html: `<p>Prendi un compasso, punta l'ago su un foglio e fai un giro completo con la mina.</p>
<ul>
<li>La <b>linea curva chiusa</b> che hai disegnato è la <b>circonferenza</b>: tutti i suoi punti sono alla <b>stessa distanza</b> dal punto dove hai messo l'ago.</li>
<li>Quel punto si chiama <b>centro</b>.</li>
<li>La <b>superficie</b> dentro la circonferenza (che puoi colorare) è il <b>cerchio</b>.</li>
</ul>
<p>In breve: la circonferenza è il <b>contorno</b> (come il bordo della pizza), il cerchio è <b>tutta la pizza</b>. La circonferenza ha una <b>lunghezza</b>; il cerchio ha un'<b>area</b>.</p>`
    },
    {
      type: "svg",
      title: "Le parti del cerchio",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<circle cx="200" cy="160" r="130" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="6"/>
<circle cx="200" cy="160" r="6" fill="#111827"/>
<line x1="200" y1="160" x2="292" y2="68" stroke="#dc2626" stroke-width="5"/>
<line x1="70" y1="160" x2="330" y2="160" stroke="#16a34a" stroke-width="5"/>
<line x1="110" y1="254" x2="310" y2="240" stroke="#9333ea" stroke-width="4"/>
<path d="M90 90 A130 130 0 0 1 150 40" fill="none" stroke="#f97316" stroke-width="9"/>
<text x="188" y="185" font-size="16" fill="#111827">centro</text>
<text x="252" y="108" font-size="18" fill="#dc2626" font-weight="bold">r</text>
<text x="128" y="152" font-size="18" fill="#16a34a" font-weight="bold">d</text>
<text x="360" y="60" font-size="20" fill="#dc2626">— raggio (r)</text>
<text x="360" y="95" font-size="20" fill="#16a34a">— diametro (d = 2 × r)</text>
<text x="360" y="130" font-size="20" fill="#1d4ed8">— circonferenza (il bordo)</text>
<text x="360" y="165" font-size="20" fill="#3b82f6">▇ cerchio (la superficie)</text>
<text x="360" y="200" font-size="20" fill="#f97316">— arco (pezzo di bordo)</text>
<text x="360" y="235" font-size="20" fill="#9333ea">— corda (unisce 2 punti)</text>
</svg>`,
      caption: "Il diametro è la corda più lunga: passa per il centro ed è lungo due raggi."
    },
    {
      type: "text",
      title: "Raggio, diametro, corda e arco",
      html: `<ul>
<li>Il <b>raggio</b> (r) è il segmento che va dal <b>centro</b> a un punto della circonferenza. Tutti i raggi di un cerchio sono <b>uguali</b>.</li>
<li>Il <b>diametro</b> (d) è il segmento che unisce due punti della circonferenza <b>passando per il centro</b>. È lungo il <b>doppio</b> del raggio:
<br><b>d = r × 2</b> e <b>r = d : 2</b>.</li>
<li>La <b>corda</b> è un segmento che unisce due punti qualsiasi della circonferenza. Il diametro è la corda più lunga.</li>
<li>L'<b>arco</b> è un pezzo di circonferenza.</li>
<li>Il <b>settore circolare</b> è una "fetta" di cerchio, delimitata da due raggi e un arco (proprio come una fetta di pizza!).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parti del cerchio",
      questions: [
        { type: "mc", q: "La linea che fa da contorno al cerchio si chiama…", options: ["diametro", "circonferenza", "raggio"], answer: 1, explain: "La circonferenza è la linea curva chiusa; il cerchio è la superficie dentro." },
        { type: "num", q: "Un cerchio ha il raggio di 6 cm. Quanto misura il diametro?", answer: 12, unit: "cm", explain: "d = r × 2 = 6 × 2 = 12 cm." },
        { type: "num", q: "Un piatto ha il diametro di 26 cm. Quanto misura il raggio?", answer: 13, unit: "cm", explain: "r = d : 2 = 26 : 2 = 13 cm." },
        { type: "tf", q: "In un cerchio tutti i raggi hanno la stessa lunghezza.", answer: true, explain: "Sì: è proprio la definizione di circonferenza (punti alla stessa distanza dal centro)." }
      ]
    },
    {
      type: "text",
      title: "Il numero magico π (pi greco)",
      html: `<p>Fai un esperimento: prendi un barattolo, avvolgi uno spago intorno al bordo e misuralo. Poi misura il diametro e fai la divisione <b>circonferenza : diametro</b>.</p>
<p>Con qualsiasi oggetto rotondo (moneta, piatto, ruota della bici) otterrai <b>sempre circa 3,14</b>!</p>
<p>Questo numero si chiama <b>π</b> (si legge "pi greco", dalla lettera greca <i>pi</i>). Le sue cifre dopo la virgola non finiscono mai e non si ripetono: π = 3,14159265358979… Per i calcoli a scuola usiamo <b>π ≈ 3,14</b>.</p>
<p>Quindi la circonferenza è <b>circa 3 volte e un po'</b> il diametro.</p>`
    },
    {
      type: "remember",
      title: "Le formule della circonferenza",
      html: `<ul>
<li><b>C = d × 3,14</b> (diametro per pi greco)</li>
<li><b>C = r × 2 × 3,14</b> (raggio per due per pi greco)</li>
<li>Formula inversa: <b>d = C : 3,14</b> e poi <b>r = d : 2</b></li>
</ul>`
    },
    {
      type: "svg",
      title: "Srotolare la ruota",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<circle cx="80" cy="120" r="50" fill="#fde68a" stroke="#b45309" stroke-width="6"/>
<line x1="30" y1="120" x2="130" y2="120" stroke="#16a34a" stroke-width="5"/>
<text x="80" y="110" font-size="16" fill="#16a34a" text-anchor="middle">d</text>
<line x1="30" y1="200" x2="344" y2="200" stroke="#b45309" stroke-width="8"/>
<g stroke="#16a34a" stroke-width="5">
<line x1="30" y1="225" x2="130" y2="225"/><line x1="134" y1="225" x2="234" y2="225"/><line x1="238" y1="225" x2="338" y2="225"/>
</g>
<line x1="338" y1="225" x2="344" y2="225" stroke="#dc2626" stroke-width="5"/>
<text x="80" y="250" font-size="16" fill="#16a34a" text-anchor="middle">1 d</text>
<text x="184" y="250" font-size="16" fill="#16a34a" text-anchor="middle">2 d</text>
<text x="288" y="250" font-size="16" fill="#16a34a" text-anchor="middle">3 d</text>
<text x="370" y="232" font-size="16" fill="#dc2626">+ 0,14 d</text>
<path d="M80 172 Q80 195 40 198" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="5 4"/>
<text x="360" y="120" font-size="22" fill="#78350f">La ruota fa un giro:</text>
<text x="360" y="150" font-size="22" fill="#78350f">il bordo srotolato è</text>
<text x="360" y="180" font-size="22" fill="#b45309" font-weight="bold">≈ 3,14 diametri</text>
</svg>`,
      caption: "Se fai rotolare una ruota per un giro completo, percorre una strada lunga circa 3,14 volte il suo diametro."
    },
    {
      type: "example",
      title: "Esempio pratico: la ruota della bicicletta",
      html: `<p>La ruota della bici di Anna ha un diametro di <b>60 cm</b>. Quanta strada fa la bici a ogni giro di ruota?</p>
<p>C = d × 3,14 = 60 × 3,14 = <b>188,4 cm</b>, cioè quasi <b>1,9 metri</b>.</p>
<p>Dopo <b>100 giri</b> di ruota Anna ha percorso 188,4 × 100 = 18 840 cm = <b>188,4 metri</b>. È così che funziona il contachilometri della bici: conta i giri della ruota!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il nastro per la torta",
      html: `<p>La mamma vuole mettere un nastro intorno a una torta rotonda con il <b>raggio di 12 cm</b>. Quanto nastro le serve?</p>
<ol>
<li>Diametro: 12 × 2 = 24 cm</li>
<li>Circonferenza: 24 × 3,14 = <b>75,36 cm</b></li>
</ol>
<p>Le conviene comprare <b>almeno 80 cm</b> di nastro, così avanza anche un pezzetto per fare il fiocco 🎀.</p>`
    },
    {
      type: "text",
      title: "Per i più curiosi: l'area del cerchio",
      html: `<p>Anche l'area del cerchio si calcola con π:</p>
<p><b>A = r × r × 3,14</b> (raggio per raggio per pi greco)</p>
<p>Esempio: una pizza con raggio 15 cm ha un'area di 15 × 15 × 3,14 = 225 × 3,14 = <b>706,5 cm²</b>.</p>
<p>Perché? Taglia il cerchio in tanti spicchi sottili e mettili a zig-zag, uno in su e uno in giù: ottieni quasi un <b>rettangolo</b> con base metà circonferenza (r × 3,14) e altezza r. La sua area è r × 3,14 × r!</p>`
    },
    {
      type: "3d",
      title: "Il cerchio nei solidi",
      scene: "solid",
      options: { shape: "cylinder", r: 1, h: 1.6, color: "#38bdf8", labels: true, shapes: ["cylinder", "cone", "sphere"] },
      caption: "Il cilindro ha due basi a forma di cerchio; il cono ne ha una. Se tagli una sfera con un piano ottieni sempre un cerchio!"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il giorno di π",
      html: `<p>Il <b>14 marzo</b> si festeggia in tutto il mondo il <b>Pi Day</b>, la giornata del pi greco, perché negli Stati Uniti la data si scrive <b>3/14</b>. Dal 2020 l'UNESCO lo ha proclamato <b>Giornata Internazionale della Matematica</b>.</p>
<p>Coincidenza: il 14 marzo 1879 nacque <b>Albert Einstein</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Cifre senza fine",
      html: `<p>Con i supercomputer sono state calcolate più di <b>100 000 miliardi di cifre</b> di π, ma non finisce mai. Per mandare le sonde nello spazio la NASA ne usa appena <b>15</b>!</p>
<p>C'è chi si allena a ricordarne il più possibile: il record mondiale riconosciuto supera le <b>70 000 cifre</b> recitate a memoria.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il cerchio",
      intro: "Il cerchio si capisce meglio toccandolo, misurandolo e scoprendo come lo hanno studiato altri popoli. Scegli la strada che preferisci!",
      tabs: [
        {
          label: "🧵 Lo spago e il barattolo",
          html: `<p>Fai tu l'esperimento che fece l'umanità migliaia di anni fa:</p>
<ol>
<li>prendi 3 oggetti rotondi (un barattolo, un rotolo di scotch, una moneta grande);</li>
<li>avvolgi uno spago intorno a ognuno, segna e misura con il righello: è la <b>circonferenza</b>;</li>
<li>misura il <b>diametro</b> passando per il centro;</li>
<li>dividi circonferenza : diametro.</li>
</ol>
<table><tr><th>Oggetto</th><th>C</th><th>d</th><th>C : d</th></tr>
<tr><td>Barattolo</td><td>25,1 cm</td><td>8 cm</td><td>≈ 3,14</td></tr>
<tr><td>Scotch</td><td>31,4 cm</td><td>10 cm</td><td>≈ 3,14</td></tr></table>
<p>Ogni volta viene circa <b>3,14</b>: hai scoperto π da solo!</p>`
        },
        {
          label: "🍕 Spicchi a zig-zag",
          html: `<p>Come si trova l'area? Taglia una pizza in tanti spicchi e mettili in fila, uno con la punta in su e uno con la punta in giù. Si forma quasi un <b>rettangolo</b>:</p>
<ul><li>la base è <b>metà circonferenza</b> = r × 3,14;</li><li>l'altezza è il <b>raggio</b> r.</li></ul>
<p>Area del rettangolo = base × altezza = <b>r × 3,14 × r</b>. Più spicchi fai, più il rettangolo è perfetto!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<g stroke="#9a3412" stroke-width="2">
<path d="M40 180 L65 80 L90 180 Z" fill="#fbbf24"/><path d="M65 80 L90 180 L115 80 Z" fill="#f97316"/>
<path d="M90 180 L115 80 L140 180 Z" fill="#fbbf24"/><path d="M115 80 L140 180 L165 80 Z" fill="#f97316"/>
<path d="M140 180 L165 80 L190 180 Z" fill="#fbbf24"/><path d="M165 80 L190 180 L215 80 Z" fill="#f97316"/>
<path d="M190 180 L215 80 L240 180 Z" fill="#fbbf24"/><path d="M215 80 L240 180 L265 80 Z" fill="#f97316"/>
<path d="M240 180 L265 80 L290 180 Z" fill="#fbbf24"/><path d="M265 80 L290 180 L315 80 Z" fill="#f97316"/>
<path d="M290 180 L315 80 L340 180 Z" fill="#fbbf24"/><path d="M315 80 L340 180 L365 80 Z" fill="#f97316"/>
</g>
<line x1="40" y1="205" x2="340" y2="205" stroke="#1d4ed8" stroke-width="4"/>
<text x="190" y="230" font-size="18" fill="#1d4ed8" text-anchor="middle">metà circonferenza = r × 3,14</text>
<line x1="380" y1="80" x2="380" y2="180" stroke="#dc2626" stroke-width="4"/>
<text x="392" y="136" font-size="20" fill="#dc2626">r</text>
<text x="430" y="110" font-size="20" fill="#78350f">≈ rettangolo</text>
<text x="430" y="145" font-size="20" fill="#78350f" font-weight="bold">A = r × r × 3,14</text>
</svg>`
        },
        {
          label: "🏛️ Archimede e i poligoni",
          html: `<p>Il grande matematico siciliano <b>Archimede di Siracusa</b> (circa 287–212 a.C.) non aveva calcolatrici. Come fece a calcolare π?</p>
<p>Disegnò un <b>esagono</b> dentro il cerchio e uno fuori. Il perimetro del cerchio doveva stare <b>tra i due</b>. Poi raddoppiò i lati: 12, 24, 48, fino a <b>96 lati</b>! Più lati ha il poligono, più assomiglia al cerchio.</p>
<p>Trovò che π sta tra <b>3 10/71</b> e <b>3 1/7</b>, cioè tra 3,1408 e 3,1428. Un risultato straordinario per 2200 anni fa!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f5f3ff"/>
<circle cx="150" cy="130" r="100" fill="#ddd6fe" stroke="#6d28d9" stroke-width="4"/>
<polygon points="250,130 200,216.6 100,216.6 50,130 100,43.4 200,43.4" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="265.5,130 207.7,230 92.3,230 34.5,130 92.3,30 207.7,30" fill="none" stroke="#16a34a" stroke-width="4"/>
<text x="320" y="80" font-size="20" fill="#dc2626">esagono interno: perimetro = 6 r</text>
<text x="320" y="115" font-size="20" fill="#16a34a">esagono esterno: perimetro ≈ 6,93 r</text>
<text x="320" y="150" font-size="20" fill="#6d28d9">circonferenza: in mezzo!</text>
<text x="320" y="200" font-size="18" fill="#1f2937">Con 96 lati: π ≈ 3,14</text>
</svg>`
        },
        {
          label: "🌍 π nel mondo antico",
          html: `<p>Molti popoli hanno cercato il numero del cerchio:</p>
<ul>
<li>🇪🇬 gli <b>Egizi</b> (papiro di Rhind, circa 1650 a.C.) usavano un valore di circa <b>3,16</b>;</li>
<li>🏺 i <b>Babilonesi</b> usavano <b>3</b> o <b>3 + 1/8 = 3,125</b>;</li>
<li>🇬🇷 <b>Archimede</b> lo chiuse tra 3,1408 e 3,1428;</li>
<li>🇨🇳 il cinese <b>Zu Chongzhi</b> (V secolo d.C.) trovò la frazione <b>355/113 = 3,1415929…</b>, giusta per 6 decimali: nessuno fece meglio per quasi 1000 anni!</li>
<li>🇬🇧 Il simbolo <b>π</b> lo usò per primo il gallese William Jones nel 1706, e lo rese famoso lo svizzero Leonhard Euler.</li>
</ul>`
        },
        {
          label: "🧭 Il compasso e la corda",
          html: `<p>Non hai il compasso? Fai come i giardinieri: pianta un paletto nel terreno, lega una corda e all'altra estremità un bastoncino. Tieni la corda tesa e gira tutto intorno: disegni una <b>circonferenza perfetta</b>!</p>
<ul><li>Il paletto è il <b>centro</b>.</li><li>La corda tesa è il <b>raggio</b>.</li><li>Il segno sul terreno è la <b>circonferenza</b>.</li></ul>
<p>Così si tracciano le aiuole rotonde e il cerchio di centrocampo nei campi da calcio (raggio 9,15 m).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del cerchio: tocca un nodo e scopri il perché",
      nodes: [
        { id: "centro", label: "Centro", x: 50, y: 6, color: "#111827", html: "Il punto fisso da cui partono tutti i raggi.", why: "Senza centro non c'è cerchio: è il punto dove punti l'ago del compasso. <b>Euclide</b>, nei suoi <i>Elementi</i> (circa 300 a.C.), definisce il cerchio proprio a partire dal centro." },
        { id: "circonf", label: "Circonferenza", x: 25, y: 30, color: "#1d4ed8", html: "La linea curva chiusa formata da tutti i punti alla stessa distanza dal centro.", why: "È la definizione di Euclide. Il nome viene dal latino <i>circum ferre</i>, \"portare intorno\": è la linea che gira tutto intorno al centro." },
        { id: "cerchio", label: "Cerchio", x: 75, y: 30, color: "#3b82f6", html: "La parte di piano racchiusa dalla circonferenza.", why: "Dal latino <i>circulus</i>, \"piccolo giro\". È tra le prime forme che l'uomo ha usato: la <b>ruota</b> nacque in Mesopotamia circa 5500 anni fa." },
        { id: "raggio", label: "Raggio", x: 15, y: 55, color: "#dc2626", html: "Segmento dal centro alla circonferenza.", why: "Tutti i raggi sono uguali perché la circonferenza è fatta proprio dei punti a quella distanza dal centro. Il nome ricorda i raggi della ruota e del Sole." },
        { id: "diametro", label: "Diametro", x: 45, y: 55, color: "#16a34a", html: "Corda che passa per il centro: d = 2 × r.", why: "Dal greco <i>diá</i> (attraverso) + <i>métron</i> (misura): \"misura che attraversa\". È fatto di due raggi messi in fila, uno da una parte e uno dall'altra del centro." },
        { id: "pi", label: "π ≈ 3,14", x: 75, y: 55, color: "#a855f7", html: "Il rapporto tra circonferenza e diametro, uguale per tutti i cerchi.", why: "Tutti i cerchi sono \"ingrandimenti\" l'uno dell'altro, quindi il rapporto C : d non cambia. Archimede lo calcolò con poligoni di 96 lati; nel 1761 lo svizzero <b>Lambert</b> dimostrò che le sue cifre non finiscono mai e non si ripetono." },
        { id: "formulaC", label: "C = d × 3,14", x: 30, y: 82, color: "#f59e0b", html: "Formula per la lunghezza della circonferenza.", why: "Viene direttamente da π: se C : d = π, allora C = d × π. Siccome d = 2 × r, si può scrivere anche C = 2 × r × π." },
        { id: "area", label: "A = r × r × 3,14", x: 72, y: 82, color: "#14b8a6", html: "Formula per l'area del cerchio.", why: "Archimede dimostrò che il cerchio ha la stessa area di un triangolo con base la circonferenza e altezza il raggio. È lo stesso trucco degli spicchi a zig-zag che formano un rettangolo." }
      ],
      edges: [
        ["centro", "circonf", "punti alla stessa distanza"],
        ["circonf", "cerchio", "racchiude il"],
        ["centro", "raggio", "da qui parte il"],
        ["raggio", "diametro", "× 2"],
        ["diametro", "pi", "C : d ="],
        ["pi", "formulaC", "dà la"],
        ["pi", "area", "dà l'"],
        ["raggio", "area", "si usa nell'"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: calcolare la circonferenza",
      questions: [
        { type: "num", q: "Un cerchio ha il diametro di 10 cm. Quanto misura la circonferenza? (π = 3,14)", answer: 31.4, tol: 0.01, unit: "cm", explain: "C = 10 × 3,14 = 31,4 cm." },
        { type: "num", q: "Un cerchio ha il raggio di 5 cm. Quanto misura la circonferenza? (π = 3,14)", answer: 31.4, tol: 0.01, unit: "cm", explain: "d = 10 cm; C = 10 × 3,14 = 31,4 cm." },
        { type: "mc", q: "Circa quante volte la circonferenza è più lunga del diametro?", options: ["2 volte", "un po' più di 3 volte", "10 volte"], answer: 1, explain: "C : d = π ≈ 3,14." }
      ]
    }
  ],
  glossary: [
    { t: "Circonferenza", d: "Linea curva chiusa i cui punti sono tutti alla stessa distanza dal centro." },
    { t: "Cerchio", d: "Parte di piano racchiusa dalla circonferenza." },
    { t: "Centro", d: "Punto equidistante da tutti i punti della circonferenza." },
    { t: "Raggio", d: "Segmento che unisce il centro a un punto della circonferenza." },
    { t: "Diametro", d: "Corda che passa per il centro; è lungo il doppio del raggio." },
    { t: "Corda", d: "Segmento che unisce due punti della circonferenza." },
    { t: "Arco", d: "Parte di circonferenza compresa tra due punti." },
    { t: "Settore circolare", d: "Parte di cerchio delimitata da due raggi e un arco (una “fetta”)." },
    { t: "π (pi greco)", d: "Rapporto fisso tra circonferenza e diametro: circa 3,14." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è la differenza tra cerchio e circonferenza?", options: ["Sono la stessa cosa", "La circonferenza è il bordo, il cerchio è la superficie", "Il cerchio è il bordo, la circonferenza è la superficie"], answer: 1, explain: "La circonferenza è la linea; il cerchio è la parte di piano che racchiude." },
      { type: "num", q: "Il raggio è 9 cm. Quanto misura il diametro?", answer: 18, unit: "cm", explain: "9 × 2 = 18 cm." },
      { type: "num", q: "Il diametro è 50 cm. Quanto misura il raggio?", answer: 25, unit: "cm", explain: "50 : 2 = 25 cm." },
      { type: "tf", q: "Il diametro è la corda più lunga di una circonferenza.", answer: true, explain: "Passa per il centro: nessuna corda può essere più lunga." },
      { type: "text", q: "Come si chiama il numero che si ottiene dividendo la circonferenza per il diametro?", answer: ["pi greco", "pi", "π", "pigreco", "pi greca"], explain: "È π (pi greco), circa 3,14." },
      { type: "num", q: "Una moneta ha il diametro di 2 cm. Quanto misura la sua circonferenza? (π = 3,14)", answer: 6.28, tol: 0.01, unit: "cm", explain: "2 × 3,14 = 6,28 cm." },
      { type: "num", q: "Una vasca rotonda ha il raggio di 3 m. Quanto misura il suo bordo? (π = 3,14)", answer: 18.84, tol: 0.01, unit: "m", explain: "d = 6 m; C = 6 × 3,14 = 18,84 m." },
      { type: "mc", q: "Una fetta di pizza a forma di spicchio è…", options: ["un settore circolare", "una corda", "un diametro"], answer: 0, explain: "È delimitata da due raggi e un arco: settore circolare." },
      { type: "num", q: "Una circonferenza misura 31,4 cm. Quanto misura il diametro? (π = 3,14)", answer: 10, tol: 0.01, unit: "cm", explain: "d = C : 3,14 = 31,4 : 3,14 = 10 cm." },
      { type: "order", q: "Ordina i passaggi per trovare la circonferenza partendo dal raggio.", items: ["Leggo il raggio", "Moltiplico il raggio per 2 e trovo il diametro", "Moltiplico il diametro per 3,14", "Scrivo il risultato con l'unità di misura"], explain: "r → d = r × 2 → C = d × 3,14." },
      { type: "mc", q: "Chi calcolò π usando poligoni con 96 lati?", options: ["Pitagora", "Archimede", "Galileo"], answer: 1, explain: "Archimede di Siracusa, nel III secolo a.C." }
    ],
    gen: [["circle", 3]]
  }
});

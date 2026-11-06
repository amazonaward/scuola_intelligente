TOPIC('it', {
  id: "m3-mat-cerchio",
  title: "Circonferenza e cerchio",
  intro: "Ruote, pizze, orologi, monete, la pista di atletica: il cerchio è ovunque. Impariamo le sue parti, scopriamo il misterioso numero <b>π</b> (pi greco) e calcoliamo la <b>lunghezza della circonferenza</b>, l'<b>area del cerchio</b>, di <b>archi</b>, <b>settori</b> e <b>corone circolari</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Circonferenza e cerchio: non sono la stessa cosa",
      html: `<p>La <b>circonferenza</b> è la <b>linea</b> chiusa formata da tutti i punti del piano che hanno la <b>stessa distanza</b> da un punto fisso, il <b>centro</b>. Il <b>cerchio</b> è la <b>parte di piano</b> racchiusa dalla circonferenza (circonferenza compresa).</p>
<p>Pensa a un anello 💍 (circonferenza: ha solo una lunghezza) e a una moneta 🪙 (cerchio: ha un'area).</p>
<ul>
<li><b>Raggio</b> (r): segmento dal centro a un punto della circonferenza.</li>
<li><b>Diametro</b> (d): segmento che passa per il centro e unisce due punti della circonferenza: <b>d = 2r</b>. È la corda più lunga.</li>
<li><b>Corda</b>: segmento che unisce due punti qualsiasi della circonferenza.</li>
<li><b>Arco</b>: parte di circonferenza compresa tra due punti.</li>
<li><b>Angolo al centro</b>: angolo con il vertice nel centro.</li>
<li><b>Settore circolare</b>: parte di cerchio tra due raggi (una "fetta di pizza").</li>
<li><b>Segmento circolare</b>: parte di cerchio tra una corda e un arco.</li>
<li><b>Corona circolare</b>: parte di piano tra due circonferenze con lo stesso centro (<b>concentriche</b>), come un CD o una ciambella.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Le parti del cerchio",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fffbeb"/>
<circle cx="200" cy="160" r="130" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<path d="M200 160 L330 160 A130 130 0 0 0 292 68 Z" fill="#f97316" opacity="0.85"/>
<path d="M95 236 A130 130 0 0 0 200 290 L95 236 Z" fill="#60a5fa" opacity="0.9"/>
<line x1="95" y1="236" x2="200" y2="290" stroke="#1d4ed8" stroke-width="3"/>
<line x1="70" y1="160" x2="200" y2="160" stroke="#16a34a" stroke-width="4"/>
<line x1="108" y1="68" x2="292" y2="252" stroke="#7c3aed" stroke-width="4" stroke-dasharray="10 5"/>
<circle cx="200" cy="160" r="6" fill="#1f2937"/>
<text x="185" y="185" font-size="16" fill="#1f2937" font-weight="bold">O</text>
<text x="400" y="50" font-size="18" fill="#b45309" font-weight="bold">— circonferenza (la linea)</text>
<text x="400" y="85" font-size="18" fill="#92400e" font-weight="bold">▇ cerchio (la superficie)</text>
<text x="400" y="120" font-size="18" fill="#16a34a" font-weight="bold">— raggio r</text>
<text x="400" y="155" font-size="18" fill="#7c3aed" font-weight="bold">- - diametro d = 2r</text>
<text x="400" y="190" font-size="18" fill="#ea580c" font-weight="bold">▇ settore circolare</text>
<text x="400" y="225" font-size="18" fill="#1d4ed8" font-weight="bold">— corda e ▇ segmento circolare</text>
<text x="400" y="260" font-size="18" fill="#c2410c">∠ angolo al centro del settore</text>
</svg>`,
      caption: "Il settore arancione è delimitato da due raggi e da un arco; il segmento blu da una corda e da un arco."
    },
    {
      type: "text",
      title: "Rette e circonferenza, angoli alla circonferenza",
      html: `<p>Una retta rispetto a una circonferenza può essere (d = distanza della retta dal centro):</p>
<ul>
<li><b>esterna</b>: nessun punto in comune (d &gt; r);</li>
<li><b>tangente</b>: un solo punto in comune (d = r); la tangente è <b>perpendicolare al raggio</b> nel punto di contatto;</li>
<li><b>secante</b>: due punti in comune (d &lt; r).</li>
</ul>
<p>Un <b>angolo alla circonferenza</b> ha il vertice sulla circonferenza e i lati che la tagliano. Proprietà importante: <b>un angolo alla circonferenza è la metà dell'angolo al centro</b> che insiste sullo stesso arco. Conseguenza: ogni angolo alla circonferenza che insiste su una <b>semicirconferenza</b> è <b>retto</b> (90°): ogni triangolo inscritto con un lato sul diametro è rettangolo (teorema attribuito a <b>Talete</b>).</p>`
    },
    {
      type: "text",
      title: "Il numero π e la lunghezza della circonferenza",
      html: `<p>Prendi un oggetto rotondo qualsiasi, misura con uno spago la circonferenza C e il diametro d, e calcola C : d. Con una lattina, un piatto o una ruota otterrai sempre circa <b>3,14</b>! Questo numero si chiama <b>π</b> (pi greco):</p>
<p style="text-align:center;font-size:1.2em"><b>π = C : d ≈ 3,14159265…</b></p>
<p>π è un numero <b>irrazionale</b>: ha infinite cifre decimali che non si ripetono mai con regolarità. Nei calcoli si usa di solito <b>3,14</b>.</p>
<p>Formule:</p>
<ul>
<li><b>C = π · d = 2 · π · r</b></li>
<li>Formule inverse: <b>d = C : π</b>, <b>r = C : (2π)</b></li>
<li><b>Lunghezza di un arco</b> con angolo al centro α: <b>l = C · α / 360°</b>. L'arco è proporzionale al suo angolo: metà angolo, metà arco.</li>
</ul>
<p>Esempio: r = 5 cm → C = 2 · 3,14 · 5 = <b>31,4 cm</b>. Un arco di 72° è 72/360 = 1/5 → 31,4 : 5 = <b>6,28 cm</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: parti e circonferenza",
      questions: [
        { type: "mc", q: "La corda più lunga di una circonferenza è…", options: ["il raggio", "il diametro", "l'arco"], answer: 1, explain: "Il diametro passa per il centro ed è la corda massima." },
        { type: "num", q: "Lunghezza della circonferenza con raggio 10 cm (π = 3,14)?", answer: 62.8, tol: 0.01, unit: "cm", explain: "2 · 3,14 · 10 = 62,8 cm." },
        { type: "tf", q: "Una retta tangente ha due punti in comune con la circonferenza.", answer: false, explain: "La tangente ha un solo punto in comune; la secante ne ha due." }
      ]
    },
    {
      type: "text",
      title: "L'area del cerchio, del settore e della corona",
      html: `<ul>
<li><b>Area del cerchio</b>: <b>A = π · r²</b>. Formula inversa: <b>r = √(A : π)</b>.</li>
<li><b>Area del settore circolare</b> con angolo α: <b>A<sub>s</sub> = π r² · α / 360°</b>. Un quarto di cerchio (90°) ha area πr²/4.</li>
<li>Formula alternativa del settore: <b>A<sub>s</sub> = l · r / 2</b> (come un "triangolo" con base l'arco e altezza il raggio).</li>
<li><b>Area della corona circolare</b>: <b>A = π (R² − r²)</b>, dove R è il raggio esterno e r quello interno.</li>
</ul>
<p>⚠️ Attenzione: se il raggio <b>raddoppia</b>, la circonferenza raddoppia ma l'area diventa <b>4 volte</b> più grande (perché r è al quadrato)!</p>
<p>Esempio: r = 6 cm → A = 3,14 · 36 = <b>113,04 cm²</b>. Settore di 60° → 113,04 · 60/360 = 113,04 : 6 = <b>18,84 cm²</b>.</p>`
    },
    {
      type: "widget",
      title: "Settori come frazioni di cerchio",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "Un settore è una frazione del cerchio: 1/6 del cerchio corrisponde a un angolo di 360° : 6 = 60°. Cambia i cursori e calcola l'angolo di ogni settore."
    },
    {
      type: "example",
      title: "Esempio pratico: la ruota della bicicletta",
      html: `<p>Una ruota di bicicletta ha un diametro di <b>66 cm</b> (ruota da 26 pollici).</p>
<ul>
<li>In un giro percorre C = 3,14 · 66 = <b>207,24 cm ≈ 2,07 m</b>.</li>
<li>Per percorrere <b>1 km</b> (100 000 cm) quanti giri fa? 100 000 : 207,24 ≈ <b>483 giri</b>.</li>
<li>È proprio così che funziona il <b>contachilometri</b> della bici: un magnete sulla ruota conta i giri e li moltiplica per la circonferenza!</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: una pizza grande o due medie?",
      html: `<p>In pizzeria: una pizza <b>grande</b> ha diametro <b>40 cm</b>, una <b>media</b> ha diametro <b>28 cm</b>. Conviene una grande o due medie?</p>
<ul>
<li>Grande: r = 20 → A = 3,14 · 400 = <b>1256 cm²</b>.</li>
<li>Due medie: r = 14 → A = 3,14 · 196 = 615,44 → × 2 = <b>1230,88 cm²</b>.</li>
</ul>
<p>Sorpresa: <b>una sola pizza grande</b> ha più pizza di due medie! Perché l'area cresce con il <b>quadrato</b> del raggio.</p>
<p><b>Bonus – la corona</b>: il cornicione largo 2 cm della pizza grande è una corona circolare con R = 20 e r = 18: A = 3,14 · (400 − 324) = 3,14 · 76 ≈ <b>238,6 cm²</b>, quasi un quinto della pizza!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La caccia a π",
      html: `<ul>
<li>Nel <b>papiro di Rhind</b> (Egitto, circa 1650 a.C.) l'area del cerchio si calcolava come se π valesse circa <b>3,16</b>.</li>
<li><b>Archimede</b> di Siracusa (III secolo a.C.) inscrisse e circoscrisse al cerchio poligoni fino a <b>96 lati</b> e dimostrò che π è tra <b>3 + 10/71</b> e <b>3 + 1/7</b> (cioè tra 3,1408 e 3,1429).</li>
<li>In Cina, <b>Zu Chongzhi</b> (V secolo) trovò la frazione <b>355/113</b>, esatta fino alla sesta cifra decimale.</li>
<li>Il simbolo π fu usato da William Jones nel 1706 e reso famoso da Eulero; viene dall'iniziale della parola greca <i>perímetros</i>.</li>
<li>Oggi i computer hanno calcolato oltre <b>100 000 miliardi</b> di cifre di π. Il <b>14 marzo</b> (3/14 all'americana) si festeggia il <b>Pi Day</b>, che dal 2019 l'UNESCO ha proclamato Giornata internazionale della matematica.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Perché le ruote e i tombini sono rotondi",
      html: `<p>Una ruota rotonda tiene l'asse <b>sempre alla stessa altezza</b>, perché tutti i punti della circonferenza sono alla stessa distanza dal centro: per questo il viaggio è liscio. E i <b>tombini</b> sono spesso rotondi perché un coperchio circolare <b>non può cadere nel buco</b>: la sua larghezza è la stessa in ogni direzione. Un coperchio quadrato, invece, girato di traverso può infilarsi lungo la diagonale!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<table>
<tr><th>Grandezza</th><th>Formula</th></tr>
<tr><td>Diametro</td><td>d = 2r</td></tr>
<tr><td>Circonferenza</td><td>C = 2πr = πd</td></tr>
<tr><td>Arco</td><td>l = C · α / 360°</td></tr>
<tr><td>Area del cerchio</td><td>A = πr²</td></tr>
<tr><td>Area del settore</td><td>A<sub>s</sub> = πr² · α / 360° = l · r / 2</td></tr>
<tr><td>Corona circolare</td><td>A = π(R² − r²)</td></tr>
</table>
<p>π ≈ 3,14. Angolo alla circonferenza = metà dell'angolo al centro corrispondente.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire π e l'area del cerchio",
      intro: "Perché proprio πr²? Ecco quattro modi per \"vedere\" le formule invece di impararle a memoria.",
      tabs: [
        {
          label: "🍕 La pizza a spicchi",
          html: `<p>Taglia il cerchio in tanti spicchi sottili e mettili <b>uno sì e uno no capovolti</b>, uno accanto all'altro. Ottieni una figura che somiglia sempre di più a un <b>rettangolo</b>:</p>
<ul>
<li>la <b>base</b> è metà della circonferenza: <b>πr</b>;</li>
<li>l'<b>altezza</b> è il raggio: <b>r</b>.</li>
</ul>
<p>Area = base × altezza = πr × r = <b>πr²</b>! Più spicchi fai, più la figura diventa un rettangolo perfetto. Questa idea si trova negli scritti di Leonardo da Vinci e di Keplero.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<g stroke="#92400e" stroke-width="2">
<path d="M40 180 L65 80 L90 180 Z" fill="#fbbf24"/><path d="M65 80 L90 180 L115 80 Z" fill="#f97316"/>
<path d="M90 180 L115 80 L140 180 Z" fill="#fbbf24"/><path d="M115 80 L140 180 L165 80 Z" fill="#f97316"/>
<path d="M140 180 L165 80 L190 180 Z" fill="#fbbf24"/><path d="M165 80 L190 180 L215 80 Z" fill="#f97316"/>
<path d="M190 180 L215 80 L240 180 Z" fill="#fbbf24"/><path d="M215 80 L240 180 L265 80 Z" fill="#f97316"/>
<path d="M240 180 L265 80 L290 180 Z" fill="#fbbf24"/><path d="M265 80 L290 180 L315 80 Z" fill="#f97316"/>
<path d="M290 180 L315 80 L340 180 Z" fill="#fbbf24"/><path d="M315 80 L340 180 L365 80 Z" fill="#f97316"/>
</g>
<line x1="40" y1="205" x2="365" y2="205" stroke="#1d4ed8" stroke-width="3"/>
<text x="200" y="232" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">base ≈ metà circonferenza = πr</text>
<line x1="385" y1="80" x2="385" y2="180" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="135" font-size="20" fill="#16a34a" font-weight="bold">altezza = r</text>
<text x="300" y="45" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">A = πr · r = πr²</text>
</svg>`
        },
        {
          label: "🏛️ Il metodo di Archimede",
          html: `<p>Archimede non sapeva "misurare" una curva, così la intrappolò tra due <b>poligoni</b>: uno <b>dentro</b> (inscritto) e uno <b>fuori</b> (circoscritto). La circonferenza è più lunga del perimetro di quello interno e più corta di quello esterno.</p>
<ul>
<li>Con un <b>esagono</b> inscritto (lati = r) il perimetro è 6r = 3d → π &gt; 3.</li>
<li>Raddoppiando i lati (12, 24, 48, <b>96</b>) i poligoni si avvicinano sempre di più al cerchio.</li>
</ul>
<p>Con 96 lati ottenne 3,1408 &lt; π &lt; 3,1429. Senza calcolatrice, più di 2200 anni fa!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<circle cx="150" cy="130" r="100" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<polygon points="250,130 200,217 100,217 50,130 100,43 200,43" fill="#86efac" fill-opacity="0.5" stroke="#16a34a" stroke-width="3"/>
<polygon points="265,130 208,230 92,230 35,130 92,30 208,30" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="330" y="80" font-size="18" fill="#16a34a" font-weight="bold">esagono inscritto: perimetro 6r</text>
<text x="330" y="120" font-size="18" fill="#1d4ed8" font-weight="bold">circonferenza 2πr</text>
<text x="330" y="160" font-size="18" fill="#dc2626" font-weight="bold">esagono circoscritto: ≈ 6,93r</text>
<text x="330" y="210" font-size="20" fill="#1f2937" font-weight="bold">→ 3 &lt; π &lt; 3,47</text>
</svg>`
        },
        {
          label: "🥫 La lattina che rotola (3D)",
          html: `<p>Prendi un <b>cilindro</b>, come una lattina: la sua base è un cerchio. Fallo <b>rotolare</b> di un giro completo su un foglio: la distanza percorsa è la sua <b>circonferenza</b>. Se misuri con il righello vedrai che è circa <b>3,14 volte</b> il diametro.</p>
<p>Ruota il modello: la superficie laterale del cilindro, srotolata, è un rettangolo con base proprio <b>2πr</b>. Ecco perché la formula della superficie laterale è 2πr · h!</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 1, h: 1.6, color: "#f59e0b", labels: true, shapes: ["cylinder", "cone", "sphere"] }
        },
        {
          label: "🇯🇵 Contare i quadretti",
          html: `<p>In Giappone e in molti altri Paesi si inizia stimando l'area <b>contando i quadretti</b>. Disegna un cerchio di raggio 10 quadretti su carta a quadretti: dentro ci sono circa <b>314 quadretti</b>, cioè 3,14 × 10².</p>
<p>Il quadrato che contiene il cerchio ha area (2r)² = 4r² = 400 quadretti: il cerchio ne occupa circa i <b>¾</b> (precisamente π/4 ≈ 0,785). Prova con il widget: costruisci un quadrato 10 × 10 e immagina un cerchio di raggio 5 dentro: occupa circa 78 quadretti su 100.</p>`,
          widget: "areaGrid",
          options: { w: 10, h: 10, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di circonferenza e cerchio",
      nodes: [
        { id: "def", label: "Circonferenza", x: 50, y: 6, color: "#b45309", html: "Luogo dei punti equidistanti da un centro.", why: "È il 15° termine definito negli <i>Elementi</i> di Euclide (circa 300 a.C.); il terzo postulato afferma che si può sempre tracciare un cerchio con centro e raggio dati: è il compasso!" },
        { id: "cerchio", label: "Cerchio", x: 20, y: 26, color: "#f59e0b", html: "La parte di piano racchiusa dalla circonferenza.", why: "La circonferenza è un 'confine' (una linea, ha lunghezza), il cerchio è una 'regione' (ha area). La distinzione è importante per le formule." },
        { id: "parti", label: "Raggio, diametro, corda, arco", x: 80, y: 26, color: "#16a34a", html: "Gli elementi della circonferenza; d = 2r.", why: "Seguono dalla definizione: tutti i raggi sono uguali, e il diametro è formato da due raggi allineati." },
        { id: "pi", label: "π ≈ 3,14", x: 50, y: 42, color: "#7c3aed", html: "Rapporto costante tra circonferenza e diametro.", why: "È costante perché tutti i cerchi sono simili (ingrandimenti uno dell'altro). Archimede lo stimò con i poligoni; nel 1761 Johann Lambert dimostrò che è irrazionale e nel 1882 Ferdinand von Lindemann che è trascendente (da qui l'impossibilità della 'quadratura del cerchio' con riga e compasso)." },
        { id: "lunghezza", label: "C = 2πr", x: 25, y: 64, color: "#2563eb", html: "Lunghezza della circonferenza.", why: "Viene direttamente dalla definizione di π: se C/d = π, allora C = πd = 2πr." },
        { id: "area", label: "A = πr²", x: 75, y: 64, color: "#dc2626", html: "Area del cerchio.", why: "Archimede la dimostrò nella <i>Misura del cerchio</i>: il cerchio equivale a un triangolo con base la circonferenza e altezza il raggio, cioè 2πr · r / 2 = πr²." },
        { id: "arco", label: "Archi", x: 10, y: 86, color: "#0ea5e9", html: "l = C · α/360°.", why: "Archi e angoli al centro sono direttamente proporzionali. La divisione del giro in 360° viene dai Babilonesi, che usavano la base 60 e un anno di circa 360 giorni." },
        { id: "settore", label: "Settori", x: 40, y: 86, color: "#f97316", html: "A = πr² · α/360°.", why: "Anche l'area del settore è proporzionale all'angolo: un settore di 90° è 1/4 del cerchio." },
        { id: "corona", label: "Corona circolare", x: 70, y: 86, color: "#14b8a6", html: "A = π(R² − r²).", why: "È la differenza tra due cerchi concentrici: area grande meno area piccola, raccogliendo π." },
        { id: "angoli", label: "Angoli alla circonferenza", x: 92, y: 86, color: "#a855f7", html: "Metà dell'angolo al centro corrispondente.", why: "Dimostrato da Euclide (libro III, proposizione 20). Caso speciale: l'angolo inscritto in una semicirconferenza è retto, teorema attribuito a Talete (VI secolo a.C.)." }
      ],
      edges: [
        ["def", "cerchio", "racchiude"],
        ["def", "parti", "ha"],
        ["parti", "pi", "C : d ="],
        ["pi", "lunghezza", "dà"],
        ["pi", "area", "dà"],
        ["lunghezza", "arco", "frazione"],
        ["area", "settore", "frazione"],
        ["area", "corona", "differenza"],
        ["parti", "angoli", "proprietà"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: aree",
      questions: [
        { type: "num", q: "Area di un cerchio di raggio 4 cm (π = 3,14)?", answer: 50.24, tol: 0.01, unit: "cm²", explain: "3,14 · 16 = 50,24 cm²." },
        { type: "mc", q: "Se il raggio triplica, l'area diventa…", options: ["3 volte più grande", "6 volte più grande", "9 volte più grande"], answer: 2, explain: "L'area dipende da r²: 3² = 9." },
        { type: "num", q: "Un settore di 90° in un cerchio di area 200 cm² ha area…", answer: 50, unit: "cm²", explain: "90° è 1/4 di 360°: 200 : 4 = 50 cm²." }
      ]
    }
  ],
  glossary: [
    { t: "Circonferenza", d: "Linea chiusa formata dai punti equidistanti dal centro." },
    { t: "Cerchio", d: "Parte di piano delimitata da una circonferenza." },
    { t: "Raggio", d: "Segmento che unisce il centro a un punto della circonferenza." },
    { t: "Diametro", d: "Corda passante per il centro; è il doppio del raggio." },
    { t: "Corda", d: "Segmento che unisce due punti della circonferenza." },
    { t: "Arco", d: "Parte di circonferenza tra due punti." },
    { t: "Settore circolare", d: "Parte di cerchio compresa tra due raggi e un arco." },
    { t: "Corona circolare", d: "Parte di piano tra due circonferenze concentriche." },
    { t: "π (pi greco)", d: "Rapporto tra circonferenza e diametro, circa 3,14; numero irrazionale." },
    { t: "Tangente", d: "Retta con un solo punto in comune con la circonferenza, perpendicolare al raggio in quel punto." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "La circonferenza è una linea, il cerchio è una superficie.", answer: true, explain: "La circonferenza ha una lunghezza, il cerchio un'area." },
      { type: "num", q: "Il diametro è 18 cm. Quanto misura il raggio?", answer: 9, unit: "cm", explain: "r = d : 2 = 9 cm." },
      { type: "num", q: "Lunghezza della circonferenza di diametro 50 cm (π = 3,14)?", answer: 157, tol: 0.01, unit: "cm", explain: "3,14 · 50 = 157 cm." },
      { type: "num", q: "Una circonferenza è lunga 94,2 cm. Quanto misura il raggio? (π = 3,14)", answer: 15, tol: 0.01, unit: "cm", explain: "r = 94,2 : (2 · 3,14) = 94,2 : 6,28 = 15 cm." },
      { type: "num", q: "Area del cerchio di raggio 10 cm (π = 3,14)?", answer: 314, tol: 0.01, unit: "cm²", explain: "3,14 · 100 = 314 cm²." },
      { type: "num", q: "Lunghezza di un arco di 60° in una circonferenza lunga 36 cm?", answer: 6, unit: "cm", explain: "60/360 = 1/6 → 36 : 6 = 6 cm." },
      { type: "num", q: "Area della corona circolare con R = 5 cm e r = 3 cm (π = 3,14)?", answer: 50.24, tol: 0.01, unit: "cm²", explain: "3,14 · (25 − 9) = 3,14 · 16 = 50,24 cm²." },
      { type: "mc", q: "Una retta che dista dal centro meno del raggio è…", options: ["esterna", "tangente", "secante"], answer: 2, explain: "Se d < r la retta taglia la circonferenza in due punti." },
      { type: "mc", q: "Un angolo al centro misura 80°. Quanto misura l'angolo alla circonferenza che insiste sullo stesso arco?", options: ["160°", "40°", "80°"], answer: 1, explain: "È la metà: 40°." },
      { type: "mc", q: "Chi stimò π con poligoni di 96 lati?", options: ["Pitagora", "Archimede", "Cartesio"], answer: 1, explain: "Archimede di Siracusa, III secolo a.C." },
      { type: "order", q: "Ordina queste approssimazioni di π dalla meno precisa alla più precisa.", items: ["3", "3,14", "22/7 (≈ 3,1429)", "355/113 (≈ 3,1415929)"], explain: "π = 3,14159265…: 355/113 sbaglia solo alla settima cifra decimale; 22/7 è più precisa di 3,14 (errore circa 0,0013 contro 0,0016)." },
      { type: "tf", q: "Se il raggio raddoppia, anche l'area raddoppia.", answer: false, explain: "L'area diventa 4 volte più grande, perché dipende da r²." }
    ],
    gen: [["circle", 3]]
  }
});

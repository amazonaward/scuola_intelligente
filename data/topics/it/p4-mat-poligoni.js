TOPIC('it', {
  id: "p4-mat-poligoni",
  title: "I poligoni",
  intro: "Guardati intorno: il quaderno è un rettangolo, il cartello di STOP è un ottagono, le celle delle api sono esagoni. Sono tutti <b>poligoni</b>! Impariamo a riconoscerli, a dar loro un nome e a scoprire i segreti di <b>triangoli</b> e <b>quadrilateri</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Che cos'è un poligono",
      html: `<p>Prendi una matita e disegna una linea che parte da un punto e, fatta di <b>tanti pezzi dritti</b>, torna proprio al punto di partenza senza incrociarsi mai. Hai disegnato una <b>linea spezzata chiusa</b>.</p>
<p>Il <b>poligono</b> è la parte di piano racchiusa da una linea spezzata chiusa, <b>insieme</b> alla linea stessa (il suo contorno).</p>
<p>Ogni poligono ha:</p>
<ul>
<li><b>lati</b>: i segmenti dritti del contorno;</li>
<li><b>vertici</b>: i punti dove due lati si incontrano;</li>
<li><b>angoli</b>: le "aperture" fra due lati vicini, in ogni vertice;</li>
<li><b>diagonali</b>: i segmenti che uniscono due vertici <b>non vicini</b>.</li>
</ul>
<p>In ogni poligono il numero dei lati, dei vertici e degli angoli è <b>sempre lo stesso</b>: un poligono con 5 lati ha anche 5 vertici e 5 angoli.</p>
<p><b>Non sono poligoni</b>: il cerchio (il contorno è curvo), una figura aperta, una figura con lati che si incrociano.</p>`
    },
    {
      type: "svg",
      title: "Le parti di un poligono",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<polygon points="120,230 90,120 200,50 310,110 280,230" fill="#bae6fd" stroke="#1e40af" stroke-width="5"/>
<line x1="90" y1="120" x2="310" y2="110" stroke="#dc2626" stroke-width="3" stroke-dasharray="10 6"/>
<line x1="200" y1="50" x2="120" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="10 6"/>
<circle cx="200" cy="50" r="9" fill="#f59e0b" stroke="#78350f" stroke-width="2"/>
<path d="M 105 210 A 25 25 0 0 1 140 228" fill="none" stroke="#16a34a" stroke-width="5"/>
<text x="350" y="60" font-size="20" fill="#f59e0b" font-weight="bold">● vertice</text>
<text x="350" y="110" font-size="20" fill="#1e40af" font-weight="bold">━ lato</text>
<text x="350" y="160" font-size="20" fill="#16a34a" font-weight="bold">◜ angolo</text>
<text x="350" y="210" font-size="20" fill="#dc2626" font-weight="bold">┅ diagonale</text>
<text x="200" y="280" font-size="18" fill="#1f2937" text-anchor="middle">Pentagono: 5 lati, 5 vertici, 5 angoli</text>
</svg>`,
      caption: "Il pentagono ha 5 lati, 5 vertici, 5 angoli e 5 diagonali (qui ne vedi 2)."
    },
    {
      type: "text",
      title: "Il nome dipende dal numero dei lati",
      html: `<p>La parola <b>poligono</b> viene dal greco: <i>polýs</i> = "molti" e <i>gonía</i> = "angolo". Quindi "poligono" vuol dire "figura con molti angoli".</p>
<table>
<tr><th>Lati</th><th>Nome</th><th>Dove lo vedi</th></tr>
<tr><td>3</td><td><b>Triangolo</b></td><td>cartello di pericolo ⚠️</td></tr>
<tr><td>4</td><td><b>Quadrilatero</b></td><td>finestra, foglio, schermo</td></tr>
<tr><td>5</td><td><b>Pentagono</b></td><td>le toppe nere del pallone ⚽</td></tr>
<tr><td>6</td><td><b>Esagono</b></td><td>celle delle api 🐝, dado del bullone</td></tr>
<tr><td>7</td><td><b>Ettagono</b></td><td>alcune monete inglesi</td></tr>
<tr><td>8</td><td><b>Ottagono</b></td><td>cartello di STOP 🛑</td></tr>
<tr><td>9</td><td><b>Ennagono</b></td><td></td></tr>
<tr><td>10</td><td><b>Decagono</b></td><td></td></tr>
</table>
<p>Il poligono con il <b>minor numero di lati</b> è il triangolo: con 2 soli segmenti non si riesce a chiudere una figura!</p>`
    },
    {
      type: "text",
      title: "Convessi, concavi e regolari",
      html: `<ul>
<li>Un poligono è <b>convesso</b> se nessun lato, prolungato, entra dentro la figura. Tutti i suoi angoli sono minori di un angolo piatto (180°).</li>
<li>Un poligono è <b>concavo</b> se ha una "rientranza", come una stella o una freccia: almeno un lato prolungato entra nella figura e almeno un angolo è maggiore di 180°.</li>
<li>Un poligono è <b>regolare</b> se ha <b>tutti i lati uguali</b> e <b>tutti gli angoli uguali</b>: il triangolo equilatero, il quadrato, l'esagono delle api…</li>
</ul>
<p>Attenzione: il <b>rombo</b> ha 4 lati uguali ma gli angoli no, quindi <b>non</b> è regolare. Il <b>rettangolo</b> ha 4 angoli uguali ma i lati no, quindi anche lui <b>non</b> è regolare. Solo il <b>quadrato</b> ha entrambe le cose!</p>`
    },
    {
      type: "svg",
      title: "Convesso, concavo, regolare",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<polygon points="40,200 70,80 170,60 190,190" fill="#86efac" stroke="#166534" stroke-width="4"/>
<text x="115" y="245" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">convesso</text>
<polygon points="300,50 325,120 395,125 340,165 360,235 300,195 240,235 260,165 205,125 275,120" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<text x="300" y="270" font-size="20" fill="#991b1b" text-anchor="middle" font-weight="bold">concavo (stella)</text>
<polygon points="490,60 550,95 550,165 490,200 430,165 430,95" fill="#93c5fd" stroke="#1e3a8a" stroke-width="4"/>
<text x="490" y="245" font-size="20" fill="#1e3a8a" text-anchor="middle" font-weight="bold">regolare (esagono)</text>
</svg>`,
      caption: "La stella ha delle \"rientranze\": è concava. L'esagono ha lati e angoli tutti uguali: è regolare."
    },
    {
      type: "widget",
      title: "Trova le parti del poligono",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="150,250 100,110 300,40 500,110 450,250" fill="#fde68a" stroke="#92400e" stroke-width="5"/>
<line x1="100" y1="110" x2="500" y2="110" stroke="#dc2626" stroke-width="3" stroke-dasharray="10 6"/>
<path d="M 420 250 A 30 30 0 0 1 462 226" fill="none" stroke="#16a34a" stroke-width="5"/>
<circle cx="300" cy="40" r="9" fill="#1d4ed8"/>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Vertice" },
          { x: 300, y: 250, label: "Lato" },
          { x: 300, y: 110, label: "Diagonale" },
          { x: 440, y: 235, label: "Angolo" },
          { x: 300, y: 180, label: "Regione interna" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome giusto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: riconoscere i poligoni",
      questions: [
        { type: "mc", q: "Quale di queste figure NON è un poligono?", options: ["Il quadrato", "Il cerchio", "Il triangolo"], answer: 1, explain: "Il cerchio ha il contorno curvo: un poligono ha solo lati dritti." },
        { type: "num", q: "Quanti vertici ha un ottagono?", answer: 8, explain: "Lati, vertici e angoli sono sempre lo stesso numero: 8." },
        { type: "tf", q: "Il rombo è un poligono regolare.", answer: false, explain: "Ha i lati uguali ma gli angoli no: per essere regolare servono entrambe le cose." }
      ]
    },
    {
      type: "text",
      title: "I triangoli",
      html: `<p>Il triangolo ha 3 lati, 3 vertici, 3 angoli e <b>nessuna diagonale</b>. È il poligono più "robusto": se costruisci un triangolo con tre stecchini, non si deforma!</p>
<p><b>Classificazione secondo i lati</b>:</p>
<ul>
<li><b>equilatero</b>: 3 lati uguali (e 3 angoli uguali di 60°);</li>
<li><b>isoscele</b>: 2 lati uguali (e 2 angoli uguali alla base);</li>
<li><b>scaleno</b>: 3 lati diversi.</li>
</ul>
<p><b>Classificazione secondo gli angoli</b>:</p>
<ul>
<li><b>rettangolo</b>: ha un angolo <b>retto</b> (90°), come l'angolo di un foglio;</li>
<li><b>acutangolo</b>: 3 angoli <b>acuti</b> (minori di 90°);</li>
<li><b>ottusangolo</b>: un angolo <b>ottuso</b> (maggiore di 90°).</li>
</ul>
<p>⭐ La regola d'oro: <b>la somma degli angoli interni di un triangolo è sempre 180°</b>, cioè un angolo piatto.</p>
<p>Un'altra regola: in un triangolo <b>ogni lato è più corto della somma degli altri due</b>. Con stecchini da 2, 3 e 10 cm il triangolo non si chiude!</p>`
    },
    {
      type: "svg",
      title: "La famiglia dei triangoli",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<text x="300" y="26" font-size="18" fill="#6b21a8" text-anchor="middle" font-weight="bold">Secondo i lati</text>
<polygon points="40,125 140,125 90,40" fill="#f0abfc" stroke="#86198f" stroke-width="4"/>
<text x="90" y="148" font-size="16" text-anchor="middle" fill="#1f2937">equilatero</text>
<polygon points="250,125 350,125 300,35" fill="#c4b5fd" stroke="#5b21b6" stroke-width="4"/>
<text x="300" y="148" font-size="16" text-anchor="middle" fill="#1f2937">isoscele</text>
<polygon points="440,125 570,125 470,55" fill="#a5b4fc" stroke="#3730a3" stroke-width="4"/>
<text x="505" y="148" font-size="16" text-anchor="middle" fill="#1f2937">scaleno</text>
<text x="300" y="176" font-size="18" fill="#9a3412" text-anchor="middle" font-weight="bold">Secondo gli angoli</text>
<polygon points="40,280 150,280 40,195" fill="#fdba74" stroke="#9a3412" stroke-width="4"/>
<rect x="40" y="262" width="18" height="18" fill="none" stroke="#9a3412" stroke-width="3"/>
<text x="140" y="215" font-size="16" fill="#1f2937">rettangolo</text>
<polygon points="250,280 360,280 290,190" fill="#fcd34d" stroke="#92400e" stroke-width="4"/>
<text x="350" y="215" font-size="16" fill="#1f2937">acutangolo</text>
<polygon points="420,280 580,280 450,240" fill="#bef264" stroke="#3f6212" stroke-width="4"/>
<text x="500" y="225" font-size="16" fill="#1f2937">ottusangolo</text>
</svg>`,
      caption: "Ogni triangolo ha due \"cognomi\": uno per i lati e uno per gli angoli. Es.: triangolo rettangolo isoscele."
    },
    {
      type: "widget",
      title: "Classifica i triangoli secondo i lati",
      widget: "classify",
      options: {
        groups: ["Equilatero", "Isoscele", "Scaleno"],
        items: [
          ["lati 5, 5, 5 cm", 0],
          ["lati 4, 4, 6 cm", 1],
          ["lati 3, 4, 5 cm", 2],
          ["lati 7, 7, 7 cm", 0],
          ["lati 10, 6, 10 cm", 1],
          ["lati 6, 8, 9 cm", 2],
          ["⚠️ cartello di pericolo", 0],
          ["🏠 tetto con due falde uguali", 1]
        ]
      },
      caption: "Conta quanti lati sono uguali: 3 → equilatero, 2 → isoscele, nessuno → scaleno."
    },
    {
      type: "text",
      title: "I quadrilateri",
      html: `<p>I quadrilateri hanno 4 lati, 4 vertici, 4 angoli e <b>2 diagonali</b>. La <b>somma dei loro angoli interni è 360°</b>: infatti una diagonale divide il quadrilatero in <b>2 triangoli</b>, e 180° + 180° = 360°.</p>
<p>Si classificano guardando i <b>lati paralleli</b> (che non si incontrano mai, come i binari del treno):</p>
<ul>
<li><b>Trapezio</b>: ha <b>una sola coppia</b> di lati paralleli (le due basi). Può essere <i>rettangolo</i>, <i>isoscele</i> o <i>scaleno</i>.</li>
<li><b>Parallelogramma</b>: ha <b>due coppie</b> di lati paralleli; i lati opposti sono uguali e gli angoli opposti sono uguali.</li>
<li><b>Rombo</b>: parallelogramma con <b>4 lati uguali</b>; le diagonali sono perpendicolari.</li>
<li><b>Rettangolo</b>: parallelogramma con <b>4 angoli retti</b>; le diagonali sono uguali.</li>
<li><b>Quadrato</b>: ha 4 lati uguali <b>e</b> 4 angoli retti. È contemporaneamente un rombo e un rettangolo!</li>
</ul>
<p>Un quadrilatero senza lati paralleli si chiama <b>trapezoide</b>, come un aquilone 🪁.</p>`
    },
    {
      type: "svg",
      title: "L'albero di famiglia dei quadrilateri",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ecfeff"/>
<rect x="215" y="10" width="170" height="36" rx="10" fill="#0e7490"/>
<text x="300" y="34" font-size="17" fill="#ffffff" text-anchor="middle" font-weight="bold">Quadrilateri</text>
<line x1="300" y1="46" x2="140" y2="80" stroke="#0e7490" stroke-width="3"/>
<line x1="300" y1="46" x2="460" y2="80" stroke="#0e7490" stroke-width="3"/>
<polygon points="80,140 200,140 170,90 110,90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<text x="140" y="165" font-size="16" text-anchor="middle" fill="#1f2937">Trapezio (1 coppia ∥)</text>
<polygon points="390,140 510,140 540,90 420,90" fill="#a7f3d0" stroke="#065f46" stroke-width="3"/>
<text x="465" y="165" font-size="16" text-anchor="middle" fill="#1f2937">Parallelogramma (2 coppie ∥)</text>
<line x1="465" y1="172" x2="370" y2="200" stroke="#065f46" stroke-width="3"/>
<line x1="465" y1="172" x2="540" y2="200" stroke="#065f46" stroke-width="3"/>
<polygon points="370,205 405,240 370,275 335,240" fill="#fbcfe8" stroke="#9d174d" stroke-width="3"/>
<text x="370" y="298" font-size="16" text-anchor="middle" fill="#1f2937">Rombo</text>
<rect x="495" y="215" width="90" height="50" fill="#c7d2fe" stroke="#3730a3" stroke-width="3"/>
<text x="540" y="298" font-size="16" text-anchor="middle" fill="#1f2937">Rettangolo</text>
<rect x="430" y="245" width="42" height="42" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<text x="451" y="314" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">Quadrato</text>
<line x1="395" y1="262" x2="430" y2="266" stroke="#991b1b" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="495" y1="250" x2="472" y2="262" stroke="#991b1b" stroke-width="2" stroke-dasharray="5 4"/>
<polygon points="120,210 160,240 120,300 80,240" fill="#ddd6fe" stroke="#5b21b6" stroke-width="3"/>
<text x="210" y="260" font-size="16" fill="#1f2937">Trapezoide</text>
<text x="210" y="280" font-size="14" fill="#5b21b6">(aquilone, nessun ∥)</text>
</svg>`,
      caption: "Il quadrato è figlio di due \"genitori\": è sia un rombo (lati uguali) sia un rettangolo (angoli retti)."
    },
    {
      type: "3d",
      title: "I poligoni nei solidi",
      scene: "solid",
      options: { shape: "prism", n: 6, r: 1, h: 1.2, color: "#f59e0b", labels: true, shapes: ["cube", "prism", "pyramid"] },
      caption: "Le facce dei solidi sono poligoni: il prisma esagonale ha 2 esagoni e 6 rettangoli, la piramide ha triangoli. Cambia solido con i pulsanti e conta le facce."
    },
    {
      type: "example",
      title: "Esempio pratico: la piastrellista",
      html: `<p>La signora Anna deve piastrellare il pavimento del bagno <b>senza lasciare buchi</b>. Quali piastrelle regolari può usare?</p>
<ul>
<li><b>Quadrati</b>: attorno a un punto ne stanno 4, perché 4 × 90° = 360° ✅</li>
<li><b>Triangoli equilateri</b>: ne stanno 6, perché 6 × 60° = 360° ✅</li>
<li><b>Esagoni regolari</b>: ne stanno 3, perché 3 × 120° = 360° ✅</li>
<li><b>Pentagoni regolari</b>: ogni angolo è 108°; 3 × 108° = 324°, rimane un buco ❌</li>
</ul>
<p>Solo questi tre poligoni regolari riescono a coprire un pavimento da soli: si chiamano <b>tassellazioni regolari</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'angolo che manca",
      html: `<p>Luca ha disegnato un triangolo. Con il goniometro misura due angoli: <b>50°</b> e <b>70°</b>. Quanto misura il terzo, senza misurarlo?</p>
<ol>
<li>Sommo gli angoli che conosco: 50° + 70° = 120°</li>
<li>Tolgo da 180°: 180° − 120° = <b>60°</b></li>
</ol>
<p>Tutti e tre gli angoli sono minori di 90°: è un triangolo <b>acutangolo</b>.</p>
<p>Con un quadrilatero si fa uguale, ma partendo da <b>360°</b>: se tre angoli misurano 90°, 90° e 120°, il quarto è 360° − 300° = <b>60°</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le api matematiche",
      html: `<p>Le api costruiscono i favi con celle a forma di <b>esagono</b>. Fra le figure che coprono il piano senza buchi, l'esagono è quella che racchiude più spazio usando meno cera per le pareti. Nel 1999 il matematico Thomas Hales ha dimostrato che è davvero la soluzione migliore (la "congettura del favo", proposta già nell'antichità)!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il pallone da calcio",
      html: `<p>Il classico pallone da calcio è fatto di <b>12 pentagoni</b> neri e <b>20 esagoni</b> bianchi cuciti insieme. Lo stesso disegno si trova in una molecola di carbonio chiamata <b>fullerene</b> (C₆₀), scoperta nel 1985.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Perché le gru sono fatte di triangoli",
      html: `<p>Guarda una gru, un traliccio della luce o la Torre Eiffel: sono piene di <b>triangoli</b>. Un quadrato di stecche si "schiaccia" e diventa un rombo, ma un triangolo no: se i tre lati sono fissi, la forma è fissa. Per questo gli ingegneri usano i triangoli per rendere rigide le strutture.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Poligono = parte di piano chiusa da una linea spezzata chiusa. Lati = vertici = angoli.</li>
<li>Triangoli: per i lati <b>equilatero, isoscele, scaleno</b>; per gli angoli <b>rettangolo, acutangolo, ottusangolo</b>. Somma angoli = <b>180°</b>.</li>
<li>Quadrilateri: trapezio (1 coppia di lati paralleli), parallelogramma, rombo, rettangolo, quadrato (2 coppie). Somma angoli = <b>360°</b>.</li>
<li>Regolare = lati uguali <b>e</b> angoli uguali.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i poligoni",
      intro: "Se le definizioni ti sembrano difficili, prova a toccare, piegare, camminare o costruire. Scegli la strada che preferisci!",
      tabs: [
        {
          label: "🐢 Cammina come una tartaruga",
          html: `<p>Negli anni '60, al MIT (USA), Seymour Papert inventò il linguaggio <b>Logo</b>: i bambini disegnano comandando una tartaruga che cammina e gira. Prova in cortile o in palestra!</p>
<ul>
<li><b>Quadrato</b>: ripeti 4 volte "avanti 5 passi, gira di 90°".</li>
<li><b>Triangolo equilatero</b>: ripeti 3 volte "avanti 5 passi, gira di 120°".</li>
<li><b>Esagono</b>: ripeti 6 volte "avanti 5 passi, gira di 60°".</li>
</ul>
<p>Hai notato? Alla fine hai sempre fatto <b>un giro completo: 360°</b>! 4 × 90 = 3 × 120 = 6 × 60 = 360. Per fare un poligono regolare di <b>n</b> lati devi girare ogni volta di 360° : n.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<rect x="60" y="50" width="160" height="160" fill="none" stroke="#16a34a" stroke-width="5" stroke-dasharray="14 8"/>
<text x="60" y="40" font-size="30">🐢</text>
<text x="140" y="240" font-size="18" text-anchor="middle" fill="#14532d">4 × (avanti, gira 90°)</text>
<polygon points="420,40 510,200 330,200" fill="none" stroke="#2563eb" stroke-width="5" stroke-dasharray="14 8"/>
<text x="405" y="30" font-size="30">🐢</text>
<text x="420" y="240" font-size="18" text-anchor="middle" fill="#1e3a8a">3 × (avanti, gira 120°)</text>
</svg>`
        },
        {
          label: "🪢 Con gli elastici (geopiano)",
          html: `<p>Il <b>geopiano</b> è una tavoletta con chiodini in fila, inventata dal matematico egiziano-britannico <b>Caleb Gattegno</b> negli anni '50. Si tendono elastici colorati da un chiodino all'altro.</p>
<p>Puoi costruirlo con un tagliere di sughero e delle puntine: prova a fare</p>
<ul>
<li>un quadrato, poi sposta un solo angolo dell'elastico: diventa un trapezio o un quadrilatero qualsiasi;</li>
<li>un triangolo con un angolo retto (segui le righe dei chiodi);</li>
<li>una figura con una rientranza: un poligono <b>concavo</b>.</li>
</ul>
<p>Con le mani si capisce subito che il numero di "punte" (vertici) è uguale al numero di tratti di elastico (lati).</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect x="150" y="10" width="300" height="240" rx="14" fill="#d6a76b" stroke="#78350f" stroke-width="4"/>
<g fill="#374151">
<circle cx="190" cy="50" r="6"/><circle cx="245" cy="50" r="6"/><circle cx="300" cy="50" r="6"/><circle cx="355" cy="50" r="6"/><circle cx="410" cy="50" r="6"/>
<circle cx="190" cy="105" r="6"/><circle cx="245" cy="105" r="6"/><circle cx="300" cy="105" r="6"/><circle cx="355" cy="105" r="6"/><circle cx="410" cy="105" r="6"/>
<circle cx="190" cy="160" r="6"/><circle cx="245" cy="160" r="6"/><circle cx="300" cy="160" r="6"/><circle cx="355" cy="160" r="6"/><circle cx="410" cy="160" r="6"/>
<circle cx="190" cy="215" r="6"/><circle cx="245" cy="215" r="6"/><circle cx="300" cy="215" r="6"/><circle cx="355" cy="215" r="6"/><circle cx="410" cy="215" r="6"/>
</g>
<polygon points="190,50 300,50 245,160" fill="none" stroke="#ef4444" stroke-width="5"/>
<polygon points="300,105 410,105 410,215 355,160 300,215" fill="none" stroke="#2563eb" stroke-width="5"/>
</svg>`
        },
        {
          label: "📄 Piegando un foglio (origami)",
          html: `<p>In <b>Giappone</b> la geometria si impara anche con l'<b>origami</b>, l'arte di piegare la carta.</p>
<ol>
<li>Prendi un foglio rettangolare (A4). Piega un angolo fino a toccare il lato opposto e taglia la striscia che avanza: ottieni un <b>quadrato</b>!</li>
<li>Piega il quadrato lungo la diagonale: ottieni 2 <b>triangoli rettangoli isosceli</b> uguali.</li>
<li>Strappa i 3 angoli di un triangolo di carta qualsiasi e mettili uno accanto all'altro: formano sempre una <b>linea dritta</b>, cioè un angolo piatto di <b>180°</b>!</li>
</ol>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<polygon points="40,200 240,200 110,50" fill="#fdba74" stroke="#9a3412" stroke-width="4"/>
<path d="M 70 200 A 30 30 0 0 0 52 172" fill="#ef4444"/>
<path d="M 210 200 A 30 30 0 0 1 222 179" fill="#3b82f6"/>
<text x="110" y="85" font-size="22" fill="#16a34a">●</text>
<text x="270" y="130" font-size="34" fill="#1f2937">➜</text>
<line x1="330" y1="180" x2="580" y2="180" stroke="#1f2937" stroke-width="4"/>
<path d="M 455 180 L 395 180 A 60 60 0 0 1 420 131 Z" fill="#ef4444"/>
<path d="M 455 180 L 420 131 A 60 60 0 0 1 480 125 Z" fill="#16a34a"/>
<path d="M 455 180 L 480 125 A 60 60 0 0 1 515 180 Z" fill="#3b82f6"/>
<text x="455" y="220" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">= 180°</text>
</svg>`
        },
        {
          label: "🧊 Poligoni nei solidi 3D",
          html: `<p>I poligoni sono "piatti", ma li trovi come <b>facce</b> dei solidi. Gira la piramide: la base è un poligono, le facce laterali sono <b>triangoli</b>. Cambia solido e conta le facce di ogni tipo.</p>`,
          scene: "solid",
          options: { shape: "pyramid", n: 5, r: 1.1, h: 1.3, color: "#a855f7", labels: true, shapes: ["pyramid", "prism", "cube"] }
        },
        {
          label: "🔺 Cannucce e scovolini",
          html: `<p>In molte scuole del <b>Nord Europa</b> si costruisce prima di disegnare. Prendi cannucce e scovolini (o stuzzicadenti e plastilina):</p>
<ul>
<li>fai un quadrato e spingilo da un angolo: si deforma e diventa un <b>rombo</b>. Gli angoli cambiano, i lati no!</li>
<li>fai un triangolo e spingilo: <b>non si muove</b>. Il triangolo è rigido.</li>
<li>aggiungi una diagonale al quadrato: ora sono 2 triangoli e non si deforma più. È il trucco dei cancelli e delle gru!</li>
</ul>`
        },
        {
          "label": "🇬🇷 Archimede: il poligono che diventa cerchio",
          "html": "<p><b>Archimede</b> era un grande matematico <b>greco</b> che viveva a <b>Siracusa</b>, in Sicilia, nel III secolo a.C. Voleva sapere quante volte la circonferenza contiene il diametro (il numero che oggi chiamiamo <b>π</b>). La sua idea: disegnare <b>poligoni regolari</b> dentro il cerchio, con sempre <b>più lati</b>: 6, 12, 24, 48, 96. Più lati ha il poligono, più assomiglia al cerchio!</p><p>Con il poligono di 96 lati scoprì che π è un po' più di 3 e 10/71 e un po' meno di 3 e 1/7, cioè circa <b>3,14</b>.</p><p>🎯 <b>Costruisci l'esagono di Archimede</b>:</p><ol><li>Disegna un cerchio con il compasso. <b>Non cambiare l'apertura!</b></li><li>Punta il compasso in un punto del cerchio e fai una tacca sul cerchio. Punta sulla tacca e fai un'altra tacca. Continua: le tacche sono esattamente <b>6</b>.</li><li>Unisci le tacche con il righello: ecco un <b>esagono regolare</b>.</li></ol><p>Il lato dell'esagono è lungo come il <b>raggio</b>! Quindi il perimetro è 6 raggi = 3 diametri. Il cerchio è un po' più lungo dell'esagono: per questo π è un po' più di 3.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"160\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"160,30 263.9,90 263.9,210 160,270 56.1,210 56.1,90\" fill=\"#fde68a\" fill-opacity=\"0.8\" stroke=\"#b45309\" stroke-width=\"3\"/><line x1=\"160\" y1=\"150\" x2=\"160\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"3\"/><text x=\"166\" y=\"95\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">r</text><text x=\"222\" y=\"56\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">r</text><circle cx=\"440\" cy=\"150\" r=\"120\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"3\"/><polygon points=\"440,30 500,46.1 543.9,90 560,150 543.9,210 500,253.9 440,270 380,253.9 336.1,210 320,150 336.1,90 380,46.1\" fill=\"#bbf7d0\" fill-opacity=\"0.8\" stroke=\"#15803d\" stroke-width=\"3\"/><text x=\"160\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6 lati</text><text x=\"440\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">12 lati: quasi un cerchio!</text></svg>"
        },
        {
          "label": "🕌 Le stelle geometriche dell'arte araba",
          "html": "<p>Nelle moschee, nei palazzi e nei libri del mondo <b>arabo</b> e islamico ci sono decorazioni fatte solo di <b>poligoni regolari</b>: stelle, esagoni, ottagoni che si incastrano. Gli artigiani le disegnavano con <b>riga e compasso</b>, partendo sempre da un cerchio. Una delle stelle più famose è la <b>stella a 8 punte</b>.</p><ol><li>Disegna un cerchio e un <b>quadrato</b> con i vertici sul cerchio.</li><li>Disegna un <b>secondo quadrato uguale</b>, con lo stesso centro, ma <b>ruotato di 45°</b> (i suoi vertici stanno a metà tra quelli del primo).</li><li>I due quadrati insieme formano una <b>stella a 8 punte</b>.</li></ol><p>Ora cerca i poligoni nascosti: al centro c'è un <b>ottagono</b> (8 lati, contorno rosso); sulle punte ci sono <b>8 triangoli</b> isosceli. Quanti lati ha il contorno della stella? <b>16</b>! È un poligono <b>concavo</b>: alcuni suoi angoli sono più grandi di un angolo piatto.</p><p>🎯 Prova con <b>due triangoli equilateri</b>: uno con la punta in su e uno con la punta in giù. Che stella ottieni? E che poligono c'è al centro?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><circle cx=\"300\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/><polygon points=\"300,25 425,150 300,275 175,150\" fill=\"#2563eb\" fill-opacity=\"0.55\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><polygon points=\"388.4,61.6 388.4,238.4 211.6,238.4 211.6,61.6\" fill=\"#f59e0b\" fill-opacity=\"0.55\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"336.6,61.6 388.4,113.4 388.4,186.6 336.6,238.4 263.4,238.4 211.6,186.6 211.6,113.4 263.4,61.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"40\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e3a8a\" font-weight=\"bold\">quadrato 1</text><text x=\"40\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" font-weight=\"bold\">+ quadrato 2</text><text x=\"40\" y=\"104\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\">ruotato di 45°</text><text x=\"450\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">al centro:</text><text x=\"450\" y=\"82\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">un ottagono</text><text x=\"450\" y=\"220\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">sulle punte:</text><text x=\"450\" y=\"242\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">8 triangoli</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei poligoni: tocca un nodo e scopri il perché",
      nodes: [
        { id: "piano", label: "Punti, rette e piano", x: 50, y: 6, color: "#64748b", html: "Gli \"ingredienti\" di base della geometria: il punto, la linea retta e il piano.", why: "Non si definiscono: si accettano come idee di partenza. Il matematico greco <b>Euclide</b>, ad Alessandria d'Egitto verso il 300 a.C., scrisse gli <i>Elementi</i>, partendo da pochi <b>postulati</b> (verità di partenza) come \"per due punti passa una sola retta\". Tutto il resto si dimostra da lì." },
        { id: "spezzata", label: "Spezzata chiusa", x: 50, y: 24, color: "#0ea5e9", html: "Una linea fatta di segmenti consecutivi che torna al punto di partenza senza incrociarsi.", why: "Serve per \"recintare\" una parte di piano. Se la linea fosse curva avremmo figure come il cerchio; se fosse aperta, non racchiuderebbe niente." },
        { id: "poligono", label: "Poligono", x: 50, y: 42, color: "#16a34a", html: "La parte di piano racchiusa da una spezzata chiusa, compreso il contorno.", why: "Dal greco <i>polýs</i> (molti) + <i>gonía</i> (angolo). Gli antichi Egizi e Babilonesi misuravano già campi a forma di triangoli e trapezi; i Greci diedero i nomi e le dimostrazioni." },
        { id: "elementi", label: "Lati, vertici, angoli, diagonali", x: 15, y: 42, color: "#f59e0b", html: "Le parti di ogni poligono. Lati, vertici e angoli sono sempre lo stesso numero.", why: "Ogni lato finisce in un vertice dove comincia il lato successivo: girando intorno alla figura incontri alternativamente un lato e un vertice, quindi sono in numero uguale." },
        { id: "regolare", label: "Poligono regolare", x: 85, y: 42, color: "#a855f7", html: "Ha tutti i lati e tutti gli angoli uguali.", why: "Si può sempre disegnare dentro un cerchio con i vertici sulla circonferenza. Euclide insegnava a costruire triangolo equilatero, quadrato, pentagono ed esagono regolari solo con riga e compasso. Nel 1796 il giovane <b>Gauss</b> scoprì che si può costruire anche il poligono regolare di 17 lati!" },
        { id: "triangolo", label: "Triangolo", x: 25, y: 70, color: "#ef4444", html: "Poligono di 3 lati. Si classifica per i lati e per gli angoli.", why: "È il poligono più semplice e rigido: tre lati fissano la forma. Ogni altro poligono si può dividere in triangoli tracciando le diagonali da un vertice." },
        { id: "somma180", label: "Somma angoli = 180°", x: 25, y: 92, color: "#dc2626", html: "Gli angoli interni di qualsiasi triangolo sommano sempre 180°.", why: "Si dimostra con il <b>quinto postulato di Euclide</b> (delle parallele): traccia dal vertice una parallela alla base, e i tre angoli si ritrovano uno accanto all'altro sulla retta, cioè formano un angolo piatto. Su una sfera (come la Terra) il postulato non vale e la somma supera 180°!" },
        { id: "quadrilatero", label: "Quadrilateri", x: 75, y: 70, color: "#2563eb", html: "Poligoni di 4 lati: trapezi, parallelogrammi, rombi, rettangoli, quadrati.", why: "Si classificano dalle <b>coppie di lati paralleli</b>: 0 (trapezoide), 1 (trapezio), 2 (parallelogramma e i suoi \"figli\" rombo, rettangolo e quadrato)." },
        { id: "somma360", label: "Somma angoli = 360°", x: 75, y: 92, color: "#1d4ed8", html: "Gli angoli interni di ogni quadrilatero sommano 360°.", why: "Una diagonale lo divide in 2 triangoli: 2 × 180° = 360°. In generale un poligono di n lati si divide in (n − 2) triangoli, quindi la somma è (n − 2) × 180°: per il pentagono 540°, per l'esagono 720°." }
      ],
      edges: [
        ["piano", "spezzata", "con i segmenti si forma"],
        ["spezzata", "poligono", "racchiude"],
        ["poligono", "elementi", "ha"],
        ["poligono", "regolare", "può essere"],
        ["poligono", "triangolo", "3 lati"],
        ["poligono", "quadrilatero", "4 lati"],
        ["triangolo", "somma180", "proprietà"],
        ["quadrilatero", "somma360", "= 2 triangoli"],
        ["somma180", "somma360", "× 2"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: triangoli e quadrilateri",
      questions: [
        { type: "num", q: "In un triangolo due angoli misurano 90° e 35°. Quanto misura il terzo?", answer: 55, unit: "°", explain: "180 − 90 − 35 = 55°." },
        { type: "mc", q: "Un quadrilatero con una sola coppia di lati paralleli è un…", options: ["rombo", "trapezio", "rettangolo"], answer: 1, explain: "Il trapezio ha una sola coppia di lati paralleli, le basi." },
        { type: "tf", q: "Il quadrato è anche un rettangolo.", answer: true, explain: "Ha 4 angoli retti: quindi è un rettangolo speciale (con i lati tutti uguali)." }
      ]
    }
  ],
  glossary: [
    { t: "Poligono", d: "Parte di piano limitata da una linea spezzata chiusa, contorno compreso." },
    { t: "Lato", d: "Ciascuno dei segmenti che formano il contorno del poligono." },
    { t: "Vertice", d: "Punto in cui si incontrano due lati consecutivi." },
    { t: "Diagonale", d: "Segmento che unisce due vertici non consecutivi." },
    { t: "Poligono regolare", d: "Poligono con tutti i lati e tutti gli angoli uguali." },
    { t: "Poligono concavo", d: "Poligono con una rientranza: almeno un angolo supera 180°." },
    { t: "Triangolo isoscele", d: "Triangolo con due lati uguali." },
    { t: "Triangolo scaleno", d: "Triangolo con tre lati diversi." },
    { t: "Angolo retto", d: "Angolo di 90°, come l'angolo di un foglio." },
    { t: "Lati paralleli", d: "Lati che stanno su rette che non si incontrano mai." },
    { t: "Trapezio", d: "Quadrilatero con una sola coppia di lati paralleli." },
    { t: "Parallelogramma", d: "Quadrilatero con due coppie di lati paralleli." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si chiama il poligono con 6 lati?", options: ["Pentagono", "Esagono", "Ottagono"], answer: 1, explain: "6 lati: esagono, come le celle delle api." },
      { type: "num", q: "Quanti lati ha un decagono?", answer: 10, explain: "Deca = dieci." },
      { type: "tf", q: "Un triangolo può avere due angoli retti.", answer: false, explain: "90° + 90° = 180°: per il terzo angolo non resterebbe niente." },
      { type: "num", q: "In un triangolo due angoli misurano 60° e 80°. Quanto misura il terzo?", answer: 40, unit: "°", explain: "180 − 60 − 80 = 40°." },
      { type: "mc", q: "Un triangolo con i lati di 6 cm, 6 cm e 4 cm è…", options: ["equilatero", "isoscele", "scaleno"], answer: 1, explain: "Ha due lati uguali: isoscele." },
      { type: "mc", q: "Quale quadrilatero ha 4 lati uguali ma angoli NON retti?", options: ["Rombo", "Rettangolo", "Trapezio"], answer: 0, explain: "Il rombo ha i lati uguali e gli angoli opposti uguali, ma non retti." },
      { type: "num", q: "Tre angoli di un quadrilatero misurano 90°, 90° e 100°. Quanto misura il quarto?", answer: 80, unit: "°", explain: "360 − 90 − 90 − 100 = 80°." },
      { type: "text", q: "Come si chiama il segmento che unisce due vertici non vicini?", answer: ["diagonale", "la diagonale"], explain: "È la diagonale." },
      { type: "tf", q: "Il triangolo non ha diagonali.", answer: true, explain: "Nel triangolo ogni vertice è vicino agli altri due: non ci sono vertici non consecutivi." },
      { type: "order", q: "Metti in ordine dal poligono con meno lati a quello con più lati.", items: ["Triangolo", "Quadrilatero", "Pentagono", "Esagono", "Ottagono"], explain: "3, 4, 5, 6, 8 lati." },
      { type: "mc", q: "Un poligono regolare deve avere…", options: ["solo i lati uguali", "solo gli angoli uguali", "lati e angoli tutti uguali"], answer: 2, explain: "Servono entrambe le cose." }
    ],
    gen: [["triAngle", 2]]
  }
});

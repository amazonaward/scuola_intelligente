TOPIC('it', {
  id: "l1-mat-parallelismo",
  title: "Rette parallele e quadrilateri",
  intro: "Due binari ferroviari corrono affiancati e non si incontrano mai. Sembra ovvio, ma è una delle idee più sottili della matematica: dimostrare che le parallele esistono è facile, capire quante ce ne sono ha richiesto <b>duemila anni</b> e ha portato a scoprire geometrie completamente nuove. In questa lezione vediamo gli <b>angoli tra parallele</b>, la <b>somma degli angoli</b> di un triangolo e le proprietà dei <b>quadrilateri</b> (parallelogrammi e trapezi).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Rette parallele e trasversale",
      html: `<p>Due rette del piano sono <b>parallele</b> se non hanno alcun punto in comune (oppure coincidono). Si scrive <b>r ∥ s</b>. Due rette non parallele, nel piano, si incontrano in un punto.</p>
<p>Quando una terza retta, la <b>trasversale</b>, taglia due rette, forma otto angoli. Le coppie importanti sono:</p>
<ul>
<li><b>alterni interni</b>: stanno tra le due rette, da parti opposte della trasversale;</li>
<li><b>alterni esterni</b>: fuori dalle due rette, da parti opposte della trasversale;</li>
<li><b>corrispondenti</b>: nella stessa posizione rispetto alle due rette e alla trasversale;</li>
<li><b>coniugati interni</b> (o esterni): dalla stessa parte della trasversale, entrambi tra le rette (o entrambi fuori).</li>
</ul>
<p><b>Teorema.</b> Due rette tagliate da una trasversale sono parallele se e solo se vale una di queste condizioni:</p>
<ul>
<li>gli angoli <b>alterni interni</b> (o esterni) sono <b>congruenti</b>;</li>
<li>gli angoli <b>corrispondenti</b> sono <b>congruenti</b>;</li>
<li>gli angoli <b>coniugati</b> sono <b>supplementari</b> (somma 180°).</li>
</ul>
<p>"Se e solo se" significa che vale in entrambi i sensi. La parte "se gli alterni interni sono congruenti, allora le rette sono parallele" si dimostra con i soli primi quattro postulati; il verso opposto, "se sono parallele, allora gli alterni interni sono congruenti", <b>richiede il quinto postulato</b>.</p>`
    },
    {
      type: "svg",
      title: "Gli angoli tra due parallele",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="100" x2="560" y2="100" stroke="#1f2937" stroke-width="3"/>
<line x1="40" y1="200" x2="560" y2="200" stroke="#1f2937" stroke-width="3"/>
<line x1="200" y1="40" x2="400" y2="260" stroke="#6366f1" stroke-width="3"/>
<text x="500" y="90" font-size="16" fill="#1f2937">r</text>
<text x="500" y="190" font-size="16" fill="#1f2937">s</text>
<text x="420" y="268" font-size="16" fill="#4338ca">trasversale</text>
<circle cx="255" cy="100" r="5" fill="#1f2937"/><circle cx="345" cy="200" r="5" fill="#1f2937"/>
<text x="272" y="132" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="300" y="186" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="368" y="226" font-size="22" fill="#ea580c" font-weight="bold">α</text>
<text x="212" y="132" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="340" y="170" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="40" y="30" font-size="16" fill="#16a34a" font-weight="bold">verde: alterni interni (uguali)</text>
<text x="40" y="52" font-size="16" fill="#ea580c" font-weight="bold">arancio: corrispondenti (uguali)</text>
<text x="330" y="30" font-size="16" fill="#dc2626" font-weight="bold">β = 180° − α (coniugati)</text>
</svg>`,
      caption: "Se r ∥ s: gli angoli verdi (alterni interni) e l'arancio (corrispondente) sono uguali ad α; l'angolo rosso β è il supplementare."
    },
    {
      type: "example",
      title: "Esempio: calcolare gli angoli",
      html: `<p>Due rette parallele sono tagliate da una trasversale; uno degli otto angoli misura <b>65°</b>. Quanto misurano gli altri?</p>
<ul>
<li>Ogni angolo è o <b>65°</b> o il suo supplementare <b>180° − 65° = 115°</b>.</li>
<li>Quattro angoli (i due alterni interni, i corrispondenti, i verticali) valgono 65°; gli altri quattro valgono 115°.</li>
<li>In ognuno dei due punti d'incrocio, due angoli adiacenti formano un angolo piatto (180°); gli angoli opposti al vertice sono uguali.</li>
</ul>`
    },
    {
      type: "text",
      title: "La somma degli angoli di un triangolo",
      html: `<p>Il primo grande risultato che discende dal quinto postulato:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>In ogni triangolo la somma degli angoli interni è 180°.</b></p>
<p><b>Dimostrazione.</b> Sia ABC un triangolo. Per il vertice C traccio la parallela r al lato AB. Gli angoli che r forma con i lati CA e CB sono alterni interni con gli angoli A e B del triangolo (rispetto alle trasversali CA e CB): quindi sono congruenti ad A e a B. Insieme all'angolo C, tali angoli formano un <b>angolo piatto</b>: A + B + C = 180°. ∎</p>
<p>Conseguenze:</p>
<ul>
<li><b>Angolo esterno</b>: in un triangolo, un angolo esterno è uguale alla <b>somma dei due angoli interni non adiacenti</b> (perché 180° − C = A + B).</li>
<li><b>Poligono con n lati</b>: si divide in (n − 2) triangoli, quindi la somma degli angoli interni è <b>(n − 2) · 180°</b>. Quadrilatero: 360°; pentagono: 540°; esagono: 720°.</li>
<li>La somma degli <b>angoli esterni</b> di un poligono convesso (uno per vertice) è sempre <b>360°</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Parallelogrammi",
      html: `<p>Un <b>parallelogramma</b> è un quadrilatero con i <b>lati opposti paralleli</b>. Da questa sola definizione, con i teoremi sugli angoli tra parallele e la congruenza dei triangoli, si dimostrano le sue proprietà:</p>
<ul>
<li>i lati opposti sono <b>congruenti</b>;</li>
<li>gli angoli opposti sono <b>congruenti</b>, quelli adiacenti a un lato sono <b>supplementari</b>;</li>
<li>le <b>diagonali</b> si tagliano scambievolmente a metà (nel loro punto medio).</li>
</ul>
<p>Vale anche il viceversa: un quadrilatero è un parallelogramma se ha i lati opposti congruenti, oppure due lati opposti paralleli e congruenti, oppure le diagonali che si dimezzano.</p>
<p><b>Parallelogrammi particolari</b>:</p>
<ul>
<li><b>Rettangolo</b>: quattro angoli retti; le diagonali sono <b>congruenti</b>.</li>
<li><b>Rombo</b>: quattro lati congruenti; le diagonali sono <b>perpendicolari</b> e sono bisettrici degli angoli.</li>
<li><b>Quadrato</b>: rettangolo e rombo insieme (quattro lati e quattro angoli congruenti).</li>
</ul>
<p><b>Trapezio</b>: quadrilatero con <b>una sola coppia di lati paralleli</b> (le basi). Se i lati obliqui sono congruenti è <b>isoscele</b> (angoli alla base congruenti, diagonali congruenti); se un lato obliquo è perpendicolare alle basi è <b>rettangolo</b>. In ogni trapezio, gli angoli adiacenti a un lato obliquo sono supplementari (coniugati interni).</p>`
    },
    {
      type: "widget",
      title: "Abbina la proprietà al quadrilatero",
      widget: "match",
      options: { pairs: [
        ["Lati opposti paralleli e congruenti", "Parallelogramma"],
        ["Diagonali congruenti che si dimezzano", "Rettangolo"],
        ["Diagonali perpendicolari e quattro lati uguali", "Rombo"],
        ["Quattro lati e quattro angoli congruenti", "Quadrato"],
        ["Una sola coppia di lati paralleli", "Trapezio"]
      ] },
      caption: "Ogni quadrilatero ha le sue proprietà caratteristiche."
    },
    {
      type: "svg",
      title: "La famiglia dei quadrilateri",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="210" y="14" width="180" height="40" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="300" y="40" fill="#312e81">Quadrilatero</text>
<rect x="60" y="110" width="150" height="40" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><text x="135" y="136" fill="#78350f">Trapezio</text>
<rect x="390" y="110" width="170" height="40" rx="8" fill="#dcfce7" stroke="#166534" stroke-width="2"/><text x="475" y="136" fill="#14532d">Parallelogramma</text>
<rect x="290" y="210" width="110" height="40" rx="8" fill="#fce7f3" stroke="#9d174d" stroke-width="2"/><text x="345" y="236" fill="#831843">Rombo</text>
<rect x="450" y="210" width="130" height="40" rx="8" fill="#cffafe" stroke="#0e7490" stroke-width="2"/><text x="515" y="236" fill="#164e63">Rettangolo</text>
<rect x="360" y="266" width="120" height="30" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="420" y="287" fill="#78350f">Quadrato</text>
</g>
<g stroke="#334155" stroke-width="2" fill="none">
<line x1="270" y1="54" x2="150" y2="110"/><line x1="330" y1="54" x2="450" y2="110"/>
<line x1="440" y1="150" x2="365" y2="210"/><line x1="500" y1="150" x2="515" y2="210"/>
<line x1="365" y1="250" x2="400" y2="266"/><line x1="515" y1="250" x2="460" y2="266"/>
</g>
<text x="20" y="215" font-size="14" fill="#475569">ogni figura in basso ha tutte</text>
<text x="20" y="235" font-size="14" fill="#475569">le proprietà di quella sopra</text>
</svg>`,
      caption: "Il quadrato è un rombo e un rettangolo e un parallelogramma, ma non il contrario."
    },
    {
      type: "example",
      title: "Esempio pratico: il pantografo e il lampadario a bracci",
      html: `<p>Il <b>pantografo</b> è uno strumento fatto di aste articolate che formano un parallelogramma: si usava per copiare disegni ingranditi o rimpiccioliti. Funziona perché, quando il parallelogramma si deforma, i lati opposti restano <b>paralleli e di uguale lunghezza</b>. Gli stessi parallelogrammi articolati li vedi nelle lampade da scrivania a bracci, nei ponti sollevatori per auto e nei pantografi dei treni elettrici: la parte superiore resta parallela alla base mentre sale e scende.</p>
<p>Qui la <b>non rigidità</b> del parallelogramma (a differenza del triangolo) è un vantaggio: serve proprio che la forma possa cambiare.</p>`
    },
    {
      type: "example",
      title: "Esempio: angoli in un parallelogramma",
      html: `<p>In un parallelogramma ABCD l'angolo A misura <b>70°</b>. Quanto misurano gli altri angoli e, se AB = 12 cm e BC = 8 cm, il perimetro?</p>
<ul>
<li>L'angolo opposto C è congruente ad A: <b>70°</b>.</li>
<li>L'angolo B è supplementare ad A: 180° − 70° = <b>110°</b>; anche D = 110°.</li>
<li>Controllo: 70 + 110 + 70 + 110 = 360° ✔️</li>
<li>Perimetro: 2(12 + 8) = <b>40 cm</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: angoli e parallele",
      questions: [
        { type: "num", q: "Due rette parallele sono tagliate da una trasversale. Un angolo misura 65°: quanto misura il suo alterno interno?", answer: 65, unit: "°", explain: "Gli alterni interni tra parallele sono congruenti." },
        { type: "mc", q: "Due angoli coniugati interni tra parallele sono…", options: ["congruenti", "supplementari", "complementari"], answer: 1, explain: "La loro somma è 180° (angolo piatto)." },
        { type: "tf", q: "Se due rette tagliate da una trasversale formano angoli corrispondenti congruenti, allora sono parallele.", answer: true, explain: "È una delle condizioni del teorema sul parallelismo." }
      ]
    },
    {
      type: "decision",
      title: "Il postulato che nessuno riusciva a dimostrare",
      html: `<p>Sei un matematico a inizio Ottocento. Il quinto postulato di Euclide ("per un punto passa una sola parallela a una retta data") ti sembra troppo complicato per essere un postulato: da duemila anni migliaia di studiosi, da Proclo a Saccheri, hanno provato a <b>dimostrarlo</b> dagli altri quattro, ma ogni "dimostrazione" nasconde un errore.</p>`,
      question: "Tu cosa avresti provato?",
      options: [
        { label: "Continuare a cercare una dimostrazione", outcome: "È la strada percorsa per due millenni, senza successo: ogni tentativo supponeva (di nascosto) qualcosa di equivalente al postulato stesso." },
        { label: "Supporre che sia FALSO e vedere se si arriva a una contraddizione", outcome: "È l'idea della dimostrazione per assurdo: se negarlo porta a un assurdo, il postulato è dimostrato. Ma cosa succede se l'assurdo non arriva mai?" },
        { label: "Accettarlo come postulato e andare avanti", outcome: "È ciò che fece Euclide, giustamente. Ma resta il dubbio: è davvero l'unica geometria possibile?" }
      ],
      answer: 1,
      explain: "Saccheri (1733) provò proprio con l'assurdo, ma credette di aver trovato una contraddizione che non c'era. Poi Gauss (in privato), Lobachevskij (1829) e Bolyai (1832) capirono che negando il postulato non nasce alcuna contraddizione: nascono geometrie non euclidee, coerenti quanto quella di Euclide. Nell'Ottocento Riemann ne ampliò il quadro, e nel Novecento Einstein usò una geometria non euclidea per descrivere la gravità nella relatività generale."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Triangoli con tre angoli retti",
      html: `<p>Sulla superficie della Terra puoi costruire un triangolo con <b>tre angoli retti</b>: parti dal Polo Nord, scendi lungo un meridiano fino all'equatore, percorri un quarto di equatore, poi risali lungo un altro meridiano fino al Polo. La somma degli angoli è 270°! Non è un errore: sulla sfera non valgono i postulati di Euclide, perché lì <b>non esistono rette parallele</b> (due "rette" cioè cerchi massimi si incontrano sempre). Ecco perché i piloti d'aereo volano lungo traiettorie che sulla carta sembrano curve.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La tartaruga di Logo",
      html: `<p>La somma degli <b>angoli esterni</b> di qualunque poligono convesso è <b>360°</b>: lo si capisce camminando lungo il bordo. A ogni vertice giri di un certo angolo, e quando torni al punto di partenza hai fatto un giro completo. È l'idea alla base del linguaggio di programmazione <i>Logo</i> (la "tartaruga" di Seymour Papert, anni Sessanta): per disegnare un quadrato la tartaruga avanza e gira 4 volte di 90°.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire parallelismo e quadrilateri",
      intro: "Se i nomi degli angoli ti confondono, prova ad ancorarli a immagini e movimenti.",
      tabs: [
        {
          label: "🚂 Binari e strisce pedonali",
          html: `<p>Le <b>strisce pedonali</b> sono parallele; la <b>strada</b> che le taglia è la trasversale. Camminando da un lato all'altro ruoti sempre dello stesso angolo rispetto alle strisce. Per questo gli angoli corrispondenti sono uguali: "stessa posizione = stessa inclinazione". Gli alterni interni sono uguali per lo stesso motivo (basta una rotazione di mezzo giro intorno al punto medio del tratto di trasversale). I coniugati stanno insieme a formare un angolo piatto, 180°, come i due lati di una porta aperta.</p>`
        },
        {
          label: "🐢 La tartaruga che cammina",
          html: `<p>Immagina di camminare lungo il bordo di un poligono e a ogni vertice di girare di un angolo (<b>l'angolo esterno</b>). Quando torni al punto di partenza, rivolto nella direzione iniziale, hai ruotato di <b>360°</b> in tutto. Quindi la somma degli angoli esterni è 360° <b>qualunque sia il numero dei lati</b>.</p>
<p>Un poligono regolare di n lati ha n angoli esterni uguali: ciascuno vale 360°/n. L'angolo interno è 180° − 360°/n. Per l'esagono: 180° − 60° = 120°; per l'ottagono: 180° − 45° = 135°. Confronta con la formula (n − 2) · 180°/n: si ottiene lo stesso risultato.</p>`
        },
        {
          label: "🌍 Sulla sfera (3D)",
          html: `<p>Gira il globo: il triangolo che parte dal Polo Nord, scende all'equatore a 0° di longitudine, percorre l'equatore fino a 90° est e risale al Polo ha <b>tre angoli retti</b>. Su una superficie curva la somma degli angoli di un triangolo è più di 180°: la geometria di Euclide vale per il piano, non per la sfera.</p>`,
          scene: "globe",
          options: { points: [ { lat: 90, lon: 0, label: "Polo Nord", color: "#ef4444" }, { lat: 0, lon: 0, label: "Equatore 0°", color: "#2563eb" }, { lat: 0, lon: 90, label: "Equatore 90° E", color: "#16a34a" } ], routes: [ { points: [0, 1, 2, 0], color: "#f97316" } ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del parallelismo",
      nodes: [
        { id: "v", label: "Quinto postulato", x: 50, y: 6, color: "#ef4444", html: "Per un punto fuori da una retta passa una sola parallela.", why: "Euclide lo formulò in modo lungo e poco 'evidente'; per due millenni si tentò di dedurlo dagli altri. Playfair (1795) ne diede la forma moderna." },
        { id: "par", label: "Rette parallele", x: 20, y: 28, color: "#6366f1", html: "Rette complanari senza punti in comune.", why: "L'esistenza si dimostra senza il V postulato (angoli alterni congruenti); l'unicità invece lo richiede." },
        { id: "ang", label: "Angoli con trasversale", x: 50, y: 40, color: "#16a34a", html: "Alterni, corrispondenti, coniugati.", why: "Sono la 'traduzione' del parallelismo in misure di angoli: permettono di dimostrare che due rette sono parallele misurando angoli." },
        { id: "tri", label: "Somma angoli = 180°", x: 80, y: 28, color: "#f59e0b", html: "In ogni triangolo A + B + C = 180°.", why: "Si dimostra tracciando per un vertice la parallela al lato opposto: dipende dal V postulato (sulla sfera la somma è maggiore di 180°)." },
        { id: "pol", label: "Angoli dei poligoni", x: 80, y: 55, color: "#a855f7", html: "Somma interna (n − 2)·180°, esterna 360°.", why: "Un poligono si scompone in n − 2 triangoli; la somma esterna è un giro completo." },
        { id: "parall", label: "Parallelogrammi", x: 20, y: 62, color: "#0ea5e9", html: "Lati opposti paralleli: proprietà su lati, angoli, diagonali.", why: "Tutte le proprietà derivano dagli angoli alterni tra parallele e dalla congruenza dei triangoli formati da una diagonale." },
        { id: "part", label: "Rettangolo, rombo, quadrato", x: 20, y: 88, color: "#22c55e", html: "Parallelogrammi con proprietà in più.", why: "Aggiungendo una proprietà (angoli retti, lati uguali) la famiglia si restringe: è la logica delle classificazioni." },
        { id: "trap", label: "Trapezio", x: 55, y: 80, color: "#14b8a6", html: "Una sola coppia di lati paralleli.", why: "Gli angoli adiacenti al lato obliquo sono coniugati interni tra le basi parallele e quindi supplementari." },
        { id: "non", label: "Geometrie non euclidee", x: 85, y: 88, color: "#ec4899", html: "Geometrie in cui il V postulato è falso.", why: "Lobachevskij (1829), Bolyai (1832) e Riemann (1854): negato il V, nascono geometrie coerenti. Einstein le usa per la gravità." }
      ],
      edges: [
        ["v", "par", "regola"],
        ["par", "ang", "si traduce in"],
        ["ang", "tri", "dimostra"],
        ["tri", "pol", "generalizza a"],
        ["par", "parall", "definisce"],
        ["parall", "part", "si specializza in"],
        ["par", "trap", "definisce"],
        ["v", "non", "negato da"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: poligoni",
      questions: [
        { type: "num", q: "Quanto vale la somma degli angoli interni di un esagono?", answer: 720, unit: "°", explain: "(6 − 2) · 180° = 720°." },
        { type: "num", q: "In un parallelogramma un angolo misura 70°. Quanto misura un angolo adiacente?", answer: 110, unit: "°", explain: "Gli angoli adiacenti a un lato sono supplementari: 180° − 70° = 110°." },
        { type: "mc", q: "Le diagonali di un rombo sono…", options: ["perpendicolari", "sempre congruenti", "parallele"], answer: 0, explain: "Nel rombo le diagonali sono perpendicolari e bisettrici degli angoli." }
      ]
    }
  ],
  glossary: [
    { t: "Rette parallele", d: "Rette complanari che non hanno punti in comune." },
    { t: "Trasversale", d: "Retta che taglia due o più rette." },
    { t: "Angoli alterni interni", d: "Angoli tra le due rette, da parti opposte della trasversale." },
    { t: "Angoli corrispondenti", d: "Angoli nella stessa posizione rispetto alle due rette e alla trasversale." },
    { t: "Angoli coniugati", d: "Angoli dalla stessa parte della trasversale, entrambi interni o entrambi esterni." },
    { t: "Angolo esterno", d: "Angolo formato da un lato di un poligono e dal prolungamento del lato adiacente." },
    { t: "Parallelogramma", d: "Quadrilatero con i lati opposti paralleli." },
    { t: "Trapezio", d: "Quadrilatero con una sola coppia di lati paralleli (le basi)." },
    { t: "Geometria non euclidea", d: "Geometria in cui non vale il quinto postulato di Euclide." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Due rette parallele sono tagliate da una trasversale. Due angoli coniugati interni sono…", options: ["supplementari", "congruenti", "complementari"], answer: 0, explain: "Sono dalla stessa parte della trasversale e la loro somma è 180°." },
      { type: "num", q: "In un triangolo due angoli interni misurano 50° e 60°. Quanto misura l'angolo esterno adiacente al terzo angolo?", answer: 110, unit: "°", explain: "L'esterno è la somma dei due interni non adiacenti: 50° + 60° = 110°." },
      { type: "num", q: "Qual è la somma degli angoli interni di un pentagono?", answer: 540, unit: "°", explain: "(5 − 2) · 180° = 540°." },
      { type: "num", q: "Quanto misura ciascun angolo interno di un esagono regolare?", answer: 120, unit: "°", explain: "720°/6 = 120°, oppure 180° − 360°/6." },
      { type: "mc", q: "Quale quadrilatero ha le diagonali congruenti che si dimezzano a vicenda?", options: ["Rettangolo", "Rombo (non quadrato)", "Trapezio scaleno"], answer: 0, explain: "È una proprietà del rettangolo." },
      { type: "tf", q: "In ogni parallelogramma le diagonali sono congruenti.", answer: false, explain: "Sono congruenti solo nel rettangolo (e quindi nel quadrato). In generale si dimezzano ma hanno lunghezze diverse." },
      { type: "mc", q: "Il quadrilatero con una sola coppia di lati paralleli si chiama…", options: ["trapezio", "parallelogramma", "rombo"], answer: 0, explain: "Le basi del trapezio sono i lati paralleli." },
      { type: "num", q: "Un parallelogramma ha perimetro 50 cm e un lato di 15 cm. Quanto misura il lato adiacente?", answer: 10, unit: "cm", explain: "Semiperimetro 25 cm: 25 − 15 = 10 cm." },
      { type: "order", q: "Metti in ordine i passi della dimostrazione che la somma degli angoli di un triangolo è 180°.", items: ["Per un vertice traccio la parallela al lato opposto", "Individuo gli angoli alterni interni, congruenti agli angoli del triangolo", "I tre angoli in quel vertice formano un angolo piatto", "Concludo: la somma è 180°"], explain: "L'idea chiave è la parallela per un vertice." },
      { type: "mc", q: "Su una sfera, la somma degli angoli di un triangolo è…", options: ["maggiore di 180°", "esattamente 180°", "minore di 180°"], answer: 0, explain: "Nella geometria sferica (ellittica) la somma supera 180°: ad esempio 270° per un triangolo con tre angoli retti." }
    ]
  }
});

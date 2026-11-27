TOPIC('it', {
  id: "l4-mat-geometria-spazio",
  title: "Geometria nello spazio",
  intro: "Il mondo in cui viviamo ha tre dimensioni: una stanza, una lattina, un pallone, la piramide di Cheope, un cono gelato. Dopo aver studiato la geometria sul foglio (il piano), ora ci spostiamo <b>nello spazio</b>. Impareremo a descrivere le posizioni di <b>rette e piani</b> (incidenti, paralleli, perpendicolari, <b>sghembi</b>), a classificare i <b>poliedri</b> (con la sorprendente formula di Eulero) e a calcolare <b>aree e volumi</b> di prismi, piramidi, cilindri, coni e sfere, compresi i <b>solidi di rotazione</b>. Potrai ruotare i solidi con il dito per vederli da ogni lato.",
  minutes: 75,
  sections: [
    {
      type: "text",
      title: "Punti, rette e piani nello spazio",
      html: `<p>Nello spazio gli enti fondamentali sono <b>punto, retta e piano</b>. Alcuni fatti, accettati come postulati, descrivono come si "determinano":</p>
<ul>
<li>per due punti distinti passa <b>una sola retta</b>;</li>
<li>per <b>tre punti non allineati</b> passa <b>un solo piano</b>;</li>
<li>se una retta ha due punti in un piano, è <b>contenuta</b> nel piano.</li>
</ul>
<p>Ne segue che un piano è determinato da: tre punti non allineati; una retta e un punto esterno; due rette incidenti; due rette parallele. (Ecco perché un tavolino a tre gambe non traballa mai, mentre uno a quattro sì: i tre punti d'appoggio determinano sempre un piano.)</p>
<p><b>Posizione di due rette.</b> Due rette nello spazio possono essere:</p>
<ul>
<li><b>incidenti</b> (un punto in comune, stesso piano);</li>
<li><b>parallele</b> (nessun punto in comune, stesso piano, o coincidenti);</li>
<li><b>sghembe</b>: <b>non</b> stanno in uno stesso piano e non si incontrano: non sono né incidenti né parallele. È un caso che non esiste nel piano. Esempio: lo spigolo del soffitto e uno spigolo verticale di una parete opposta.</li>
</ul>
<p><b>Retta e piano:</b> la retta può essere <b>contenuta</b> nel piano, <b>incidente</b> (un solo punto in comune) o <b>parallela</b> (nessun punto in comune). <b>Due piani:</b> sono <b>paralleli</b> (nessun punto in comune, o coincidenti) oppure <b>incidenti</b> in una retta.</p>
<p><b>Perpendicolarità.</b> Una retta è <b>perpendicolare a un piano</b> se è perpendicolare a <b>tutte</b> le rette del piano passanti per il suo punto d'incontro; basta che lo sia a <b>due rette incidenti</b> del piano. Per un punto passa un'unica retta perpendicolare a un piano, e un unico piano perpendicolare a una retta. La <b>distanza di un punto da un piano</b> è la lunghezza del segmento perpendicolare dal punto al piano. Per il <b>teorema delle tre perpendicolari</b>, se dal piede H della perpendicolare PH a un piano α si traccia la perpendicolare HK a una retta r del piano, allora anche PK è perpendicolare a r.</p>
<p><b>Angoli.</b> Il <b>diedro</b> è la parte di spazio compresa tra due semipiani con la stessa retta origine (spigolo); la sua ampiezza si misura con la sezione normale (l'angolo formato dalle rette perpendicolari allo spigolo nei due semipiani). Due piani sono <b>perpendicolari</b> se formano diedri retti.</p>`
    },
    {
      type: "svg",
      title: "Rette sghembe in un cubo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#475569" stroke-width="2.5" fill="none">
<polygon points="100,220 220,220 220,100 100,100"/>
<polyline points="170,170 290,170 290,50 170,50 170,170"/>
<line x1="100" y1="220" x2="170" y2="170"/>
<line x1="220" y1="220" x2="290" y2="170"/>
<line x1="220" y1="100" x2="290" y2="50"/>
<line x1="100" y1="100" x2="170" y2="50"/>
</g>
<line x1="100" y1="220" x2="220" y2="220" stroke="#dc2626" stroke-width="5"/>
<line x1="290" y1="170" x2="290" y2="50" stroke="#2563eb" stroke-width="5"/>
<text x="92" y="240" font-size="16" fill="#0f172a" font-weight="bold">A</text>
<text x="224" y="240" font-size="16" fill="#0f172a" font-weight="bold">B</text>
<text x="296" y="172" font-size="16" fill="#0f172a" font-weight="bold">F</text>
<text x="296" y="54" font-size="16" fill="#0f172a" font-weight="bold">G</text>
<text x="120" y="262" font-size="16" fill="#991b1b" font-weight="bold">AB</text>
<text x="304" y="116" font-size="16" fill="#1d4ed8" font-weight="bold">FG</text>
<text x="360" y="90" font-size="15" fill="#334155" font-weight="bold">AB e FG sono sghembe:</text>
<text x="360" y="114" font-size="15" fill="#334155">non si incontrano (anche</text>
<text x="360" y="136" font-size="15" fill="#334155">prolungate) e non sono</text>
<text x="360" y="158" font-size="15" fill="#334155">parallele: non esiste un</text>
<text x="360" y="180" font-size="15" fill="#334155">piano che le contenga</text>
<text x="360" y="220" font-size="15" fill="#334155">entrambe.</text>
</svg>`,
      caption: "Nel cubo, lo spigolo AB della faccia anteriore e lo spigolo verticale FG della faccia posteriore sono ortogonali (le loro direzioni formano un angolo retto), ma non si intersecano mai e non sono parallele: sono sghembi."
    },
    {
      type: "text",
      title: "I poliedri e la formula di Eulero",
      html: `<p>Un <b>poliedro</b> è un solido limitato da un numero finito di poligoni (le <b>facce</b>), con i lati in comune detti <b>spigoli</b> e i punti d'incontro detti <b>vertici</b>. Un poliedro è <b>convesso</b> se il segmento che unisce due suoi punti qualsiasi sta dentro il poliedro.</p>
<p><b>Formula di Eulero</b> (per poliedri convessi, e più in generale senza "buchi"): indicati con V i vertici, E gli spigoli e F le facce,</p>
<p style="text-align:center"><b>V − E + F = 2</b></p>
<p>Verifica sul cubo: 8 − 12 + 6 = 2 ✓. Sulla piramide a base quadrata: 5 vertici, 8 spigoli, 5 facce: 5 − 8 + 5 = 2 ✓. Sul prisma a base triangolare: 6 − 9 + 5 = 2 ✓.</p>
<p><b>Poliedri regolari (solidi platonici).</b> Un poliedro è <b>regolare</b> se ha tutte le facce poligoni regolari uguali e in ogni vertice si incontrano lo stesso numero di facce. Ne esistono <b>soltanto cinque</b>:</p>
<table>
<tr><th>Solido</th><th>Facce</th><th>Vertici</th><th>Spigoli</th></tr>
<tr><td>Tetraedro (triangoli)</td><td>4</td><td>4</td><td>6</td></tr>
<tr><td>Cubo o esaedro (quadrati)</td><td>6</td><td>8</td><td>12</td></tr>
<tr><td>Ottaedro (triangoli)</td><td>8</td><td>6</td><td>12</td></tr>
<tr><td>Dodecaedro (pentagoni)</td><td>12</td><td>20</td><td>30</td></tr>
<tr><td>Icosaedro (triangoli)</td><td>20</td><td>12</td><td>30</td></tr>
</table>
<p>Perché solo cinque? In un vertice devono incontrarsi almeno 3 facce e la somma degli angoli delle facce in quel vertice deve essere <b>minore di 360°</b> (altrimenti il vertice è "piatto" o non si chiude). Con triangoli equilateri (60°) si possono incontrare 3, 4 o 5 facce (180°, 240°, 300°): tetraedro, ottaedro, icosaedro; 6 triangoli darebbero 360° (piano). Con quadrati (90°) solo 3 (270°): cubo. Con pentagoni regolari (108°) solo 3 (324°): dodecaedro. Con esagoni (120°) già 3 facce fanno 360°: impossibile.</p>
<p><b>Prismi e piramidi.</b> Un <b>prisma</b> ha due basi poligonali uguali e parallele e facce laterali parallelogrammi (rettangoli se retto). Una <b>piramide</b> ha una base poligonale e facce laterali triangolari con un vertice comune; è <b>retta</b> se la proiezione del vertice cade nel centro della base (circocentro).</p>`
    },
    {
      type: "3d",
      title: "Ruota i solidi",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "box", "prism", "pyramid", "cylinder", "cone", "sphere"], color: "#6366f1", labels: true },
      caption: "Trascina per ruotare. Cambia solido con i pulsanti: conta facce, vertici e spigoli del cubo, del prisma e della piramide e verifica V − E + F = 2."
    },
    {
      type: "text",
      title: "Aree e volumi dei solidi",
      html: `<p>Si distingue la <b>superficie laterale</b> S<sub>l</sub>, l'area di tutte le facce meno le basi, dalla <b>superficie totale</b> S<sub>t</sub> = S<sub>l</sub> + aree delle basi. Il <b>volume</b> misura la porzione di spazio occupata (in cm³, m³...; 1 dm³ = 1 litro).</p>
<ul>
<li><b>Parallelepipedo rettangolo</b> (spigoli a, b, c): V = abc; S<sub>t</sub> = 2(ab + bc + ac); <b>diagonale d = √(a² + b² + c²)</b> (due volte Pitagora). <b>Cubo</b> di spigolo l: V = l³; S<sub>t</sub> = 6l²; d = l√3.</li>
<li><b>Prisma retto</b> con base di area A<sub>b</sub>, perimetro 2p, altezza h: <b>V = A<sub>b</sub> · h</b>; S<sub>l</sub> = 2p · h.</li>
<li><b>Piramide</b>: <b>V = ⅓ A<sub>b</sub> · h</b>; per la piramide retta S<sub>l</sub> = ½ · 2p · a (a = apotema, altezza di una faccia laterale).</li>
<li><b>Tronco di piramide</b> a basi parallele (aree A₁ e A₂): V = (h/3)(A₁ + A₂ + √(A₁A₂)).</li>
</ul>
<p>Il fattore ⅓ della piramide non è casuale: tre piramidi uguali, con base quadrata e vertice in un vertice del cubo, riempiono esattamente un cubo, quindi ciascuna ha volume ⅓ di quello del cubo (stessa base e stessa altezza).</p>
<p><b>Principio di Cavalieri</b> (1635): due solidi che hanno la stessa altezza e le cui sezioni a ogni quota hanno la <b>stessa area</b> hanno lo <b>stesso volume</b>. È il principio che permette di dedurre i volumi (un mazzo di carte spostato di lato ha lo stesso volume del mazzo ordinato: ogni carta ha la stessa area).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la piramide di Cheope e la stanza",
      html: `<p><b>La piramide.</b> La piramide di Cheope a Giza ha base quadrata di lato circa 230 m e altezza originale di circa 146,6 m. Il volume è V = ⅓ · 230² · 146,6 ≈ ⅓ · 52 900 · 146,6 ≈ <b>2,6 milioni di m³</b>: ecco perché ci vollero milioni di blocchi. L'apotema è a = √(146,6² + 115²) ≈ 186 m.</p>
<p><b>La stanza.</b> Una stanza è 5 m × 4 m × 3 m. La lunghezza della <b>diagonale</b> (dalla scarpa in un angolo del pavimento al soffitto nell'angolo opposto) è d = √(25 + 16 + 9) = √50 ≈ 7,07 m. Il volume d'aria è 5 · 4 · 3 = 60 m³ = 60 000 litri. Una stecca lunga 7 m starebbe in diagonale nella stanza, anche se nessun lato è più lungo di 5 m!</p>`
    },
    {
      type: "text",
      title: "Solidi di rotazione: cilindro, cono, sfera",
      html: `<p>Un <b>solido di rotazione</b> si ottiene ruotando una figura piana di un giro completo attorno a una retta (l'<b>asse</b>) del suo piano.</p>
<ul>
<li><b>Cilindro</b>: rotazione di un <b>rettangolo</b> attorno a un lato. Con raggio r e altezza h: <b>V = πr²h</b>; S<sub>l</sub> = 2πrh (il rettangolo "srotolato" ha lati 2πr e h); <b>S<sub>t</sub> = 2πr(r + h)</b>.</li>
<li><b>Cono</b>: rotazione di un <b>triangolo rettangolo</b> attorno a un cateto. Con raggio r (l'altro cateto), altezza h e apotema a = √(r² + h²) (l'ipotenusa): <b>V = ⅓ πr²h</b>; S<sub>l</sub> = πra; <b>S<sub>t</sub> = πr(r + a)</b>.</li>
<li><b>Sfera</b>: rotazione di un <b>semicerchio</b> attorno al suo diametro. Con raggio r: <b>V = 4/3 πr³</b>; <b>S = 4πr²</b>.</li>
</ul>
<p><b>Esempio: cono.</b> r = 3, h = 4: apotema a = √(9 + 16) = 5; V = ⅓ · π · 9 · 4 = 12π ≈ 37,7; S<sub>l</sub> = π · 3 · 5 = 15π; S<sub>t</sub> = 15π + 9π = 24π ≈ 75,4.</p>
<p><b>Esempio: sfera.</b> Una palla da basket di raggio 12 cm: V = 4/3 π · 12³ = 2304π ≈ 7238 cm³ (circa 7,2 litri); S = 4π · 144 = 576π ≈ 1810 cm².</p>
<p><b>Il teorema di Archimede.</b> Archimede dimostrò che una sfera inscritta in un cilindro (altezza = diametro = 2r) ha il volume pari ai <b>2/3</b> di quello del cilindro: 4/3 πr³ contro πr² · 2r = 2πr³. Anche la superficie sferica (4πr²) è i 2/3 della superficie totale del cilindro (6πr²). Archimede ne fu così fiero che volle una sfera inscritta in un cilindro sulla sua tomba, come racconta Cicerone, che la ritrovò a Siracusa.</p>
<p><b>Solidi equivalenti</b> sono solidi con lo stesso volume; un cono e un cilindro con stessa base e altezza stanno in rapporto 1 : 3, e una semisfera, un cono e un cilindro (tutti di raggio r e altezza r) hanno volumi in rapporto <b>2 : 1 : 3</b> (2/3 πr³, 1/3 πr³, πr³).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: aree e volumi",
      questions: [
        { type: "num", q: "Quanto vale la diagonale di un parallelepipedo rettangolo di spigoli 2, 3 e 6?", answer: 7, explain: "d = √(4 + 9 + 36) = √49 = 7." },
        { type: "mc", q: "Un cilindro ha raggio 2 e altezza 5. Il suo volume è…", options: ["20π", "10π", "40π"], answer: 0, explain: "V = πr²h = π · 4 · 5 = 20π." },
        { type: "mc", q: "Una piramide ha lo stesso volume di un prisma con stessa base e altezza se…", options: ["non succede mai: il volume è ⅓", "ha altezza tripla", "ha base doppia"], answer: 0, explain: "Con stessa base e stessa altezza la piramide ha ⅓ del volume del prisma." },
        { type: "tf", q: "Due rette sghembe possono essere contenute nello stesso piano.", answer: false, explain: "Per definizione le rette sghembe non stanno in uno stesso piano." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: la lattina e il cono gelato",
      html: `<p><b>La lattina.</b> Una lattina da 33 cl ha raggio di circa 3,3 cm e altezza di circa 11,5 cm: V = π · 3,3² · 11,5 ≈ 393 cm³, cioè circa 39 cl di capienza: i 33 cl di bibita non arrivano fino all'orlo. Per risparmiare alluminio, il costruttore cerca il cilindro di volume fisso con la minima superficie totale: si trova (con l'analisi) h = 2r, cioè altezza uguale al diametro! Le lattine reali sono un po' più alte per ragioni di maneggevolezza e di estetica.</p>
<p><b>Il cono gelato.</b> Un cono di wafer ha raggio di 2,5 cm e altezza di 10 cm: contiene V = ⅓ π · 6,25 · 10 ≈ 65 cm³. Se sopra poggi una palla di gelato di raggio 2,5 cm (V = 4/3 π · 15,6 ≈ 65 cm³) ottieni lo stesso volume sopra e sotto: se il gelato si scioglie, il cono lo contiene... appena!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Platone e i cinque solidi",
      html: `<p>I cinque poliedri regolari sono detti <b>solidi platonici</b> perché <b>Platone</b>, nel <i>Timeo</i> (IV secolo a.C.), associò quattro di essi agli elementi: tetraedro al fuoco, cubo alla terra, ottaedro all'aria, icosaedro all'acqua; il dodecaedro rappresentava il cosmo. La loro classificazione completa è nel libro XIII degli <i>Elementi</i> di <b>Euclide</b>. Nel 1596 <b>Keplero</b> propose un modello del Sistema Solare in cui i cinque solidi, inscritti l'uno nell'altro, spiegavano le distanze dei sei pianeti allora noti: un'idea poi abbandonata, ma che lo condusse alle sue leggi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il pallone da calcio",
      html: `<p>Il classico pallone a "spicchi" bianchi e neri è un <b>icosaedro troncato</b>: 12 pentagoni neri e 20 esagoni bianchi, 60 vertici e 90 spigoli. La formula di Eulero è rispettata: 60 − 90 + 32 = 2. Nella stessa forma si dispongono i 60 atomi di carbonio del <b>fullerene C₆₀</b>, scoperto nel 1985. Anche i "buchi" contano: per un solido con g buchi (come una ciambella, g = 1) vale V − E + F = 2 − 2g.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la geometria dello spazio",
      intro: "Vedere in 3D è difficile sul foglio: proviamo con altri strumenti.",
      tabs: [
        {
          label: "🧊 Con i cubetti",
          html: `<p>Il volume del parallelepipedo si capisce meglio <b>costruendolo</b> con cubetti: a × b × c è il numero di cubetti di uno strato (a × b) moltiplicato per il numero di strati (c). Cambia i valori con i cursori e osserva come cresce il volume.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 2 }
        },
        {
          label: "✂️ Sezioni e sviluppi",
          html: `<p>Per capire la <b>superficie</b> si può <b>sviluppare</b> il solido sul piano: il cilindro diventa un rettangolo (2πr × h) più due cerchi; il cono un settore circolare (di raggio a e lunghezza d'arco 2πr) più un cerchio; il cubo una "croce" di 6 quadrati. Per il <b>volume</b> si può pensare a sezioni: tagliando un solido con piani paralleli, il volume è la somma delle fette sottili (idea di Cavalieri, poi sviluppata nel calcolo integrale).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><g stroke="#1e3a8a" stroke-width="2.5" fill="#dbeafe"><rect x="40" y="110" width="200" height="100"/><circle cx="140" cy="60" r="30"/><circle cx="140" cy="260" r="30"/></g><text x="60" y="165" font-size="16" fill="#1e3a8a" font-weight="bold">2πr × h</text><text x="40" y="100" font-size="14" fill="#334155">cilindro sviluppato</text><g stroke="#9a3412" stroke-width="2.5" fill="#ffedd5"><path d="M 400 220 L 340 120 A 116 116 0 0 1 460 120 Z"/><circle cx="400" cy="262" r="26"/></g><text x="360" y="100" font-size="14" fill="#334155">cono sviluppato</text><text x="378" y="170" font-size="14" fill="#9a3412" font-weight="bold">settore</text></svg>`
        },
        {
          label: "🏷️ Classifica i solidi",
          html: `<p>Quale solido è un <b>poliedro</b> (solo facce piane) e quale è un <b>solido di rotazione</b> (con superfici curve)?</p>`,
          widget: "classify",
          options: { groups: ["Poliedro", "Solido di rotazione"], items: [["Cubo", 0], ["Cilindro", 1], ["Piramide", 0], ["Cono", 1], ["Sfera", 1], ["Prisma", 0], ["Ottaedro", 0]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della geometria nello spazio",
      nodes: [
        { id: "post", label: "Punti, rette, piani", x: 50, y: 6, color: "#6366f1", html: "Postulati dello spazio; posizioni reciproche; sghembe.", why: "Estendono la geometria di Euclide (Elementi, libri XI-XIII) ai tre assi: tre punti non allineati determinano un piano." },
        { id: "perp", label: "Parallelismo e perpendicolarità", x: 15, y: 38, color: "#16a34a", html: "Retta ⊥ piano, diedri, tre perpendicolari, distanza punto-piano.", why: "La perpendicolarità a un piano si riduce alla perpendicolarità a due rette incidenti: dalla geometria piana si arriva a quella spaziale." },
        { id: "poli", label: "Poliedri", x: 85, y: 38, color: "#f59e0b", html: "Prismi, piramidi, solidi platonici; V − E + F = 2.", why: "La formula di Eulero (1750 circa) è un invariante topologico: vale per qualunque poliedro 'senza buchi'. I solidi regolari sono solo 5 per un vincolo sugli angoli." },
        { id: "rot", label: "Solidi di rotazione", x: 15, y: 72, color: "#ef4444", html: "Cilindro, cono, sfera: ottenuti ruotando rettangolo, triangolo, semicerchio.", why: "Archimede (III sec. a.C.) calcolò volume e superficie della sfera confrontandola con cilindro e cono." },
        { id: "vol", label: "Aree e volumi", x: 85, y: 72, color: "#0ea5e9", html: "V = A_b h (prisma), ⅓ A_b h (piramide), 4/3 πr³ (sfera).", why: "Il principio di Cavalieri confronta volumi tramite le aree delle sezioni: è l'antenato del calcolo integrale." },
        { id: "app", label: "Applicazioni", x: 50, y: 92, color: "#a855f7", html: "Architettura, imballaggi, grafica 3D, cristalli, molecole.", why: "Ogni oggetto reale è composto o approssimato da solidi elementari; la geometria permette di dimensionare materiali e capienze." }
      ],
      edges: [
        ["post", "perp", "porta a"],
        ["post", "poli", "descrive"],
        ["poli", "vol", "si misurano"],
        ["rot", "vol", "si misurano"],
        ["perp", "vol", "altezze"],
        ["vol", "app", "serve a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: poliedri e rotazioni",
      questions: [
        { type: "num", q: "Un poliedro convesso ha 8 vertici e 6 facce. Quanti spigoli ha?", answer: 12, explain: "V − E + F = 2 → 8 − E + 6 = 2 → E = 12 (è un cubo o un solido equivalente)." },
        { type: "mc", q: "Quale solido si ottiene facendo ruotare un triangolo rettangolo attorno a un cateto?", options: ["Cono", "Cilindro", "Sfera"], answer: 0, explain: "Il cateto è l'asse; l'altro cateto descrive la base; l'ipotenusa la superficie laterale." },
        { type: "tf", q: "Esistono sei poliedri regolari convessi.", answer: false, explain: "Ne esistono solo cinque: tetraedro, cubo, ottaedro, dodecaedro, icosaedro." }
      ]
    }
  ],
  glossary: [
    { t: "Rette sghembe", d: "Rette dello spazio che non si incontrano e non stanno in uno stesso piano." },
    { t: "Diedro", d: "Parte di spazio compresa tra due semipiani con lo stesso spigolo." },
    { t: "Poliedro", d: "Solido limitato da un numero finito di poligoni." },
    { t: "Formula di Eulero", d: "Per un poliedro convesso V − E + F = 2." },
    { t: "Solido platonico", d: "Poliedro regolare convesso: ne esistono cinque." },
    { t: "Apotema", d: "Altezza di una faccia laterale di una piramide retta (o segmento sul cono)." },
    { t: "Solido di rotazione", d: "Solido generato dalla rotazione di una figura piana attorno a un asse." },
    { t: "Principio di Cavalieri", d: "Solidi con sezioni equivalenti a ogni quota hanno volumi uguali." },
    { t: "Superficie laterale", d: "Area di tutte le facce di un solido escluse le basi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è la diagonale di un cubo di spigolo 5?", options: ["5√3", "5√2", "10"], answer: 0, explain: "d = l√3 (Pitagora due volte)." },
      { type: "num", q: "Qual è il volume di un prisma retto con base quadrata di lato 4 e altezza 10?", answer: 160, explain: "V = 4² · 10 = 160." },
      { type: "mc", q: "Quanto vale il volume di una piramide con base di area 30 e altezza 9?", options: ["90", "270", "30"], answer: 0, explain: "V = ⅓ · 30 · 9 = 90." },
      { type: "tf", q: "Due piani incidenti hanno in comune una retta.", answer: true, explain: "L'intersezione di due piani non paralleli è una retta." },
      { type: "mc", q: "Il cono con raggio 6 e altezza 8 ha apotema…", options: ["10", "14", "2√7"], answer: 0, explain: "a = √(36 + 64) = 10." },
      { type: "num", q: "Quanti spigoli ha un poliedro convesso con 12 vertici e 8 facce?", answer: 18, explain: "12 − E + 8 = 2 → E = 18." },
      { type: "mc", q: "Il volume di una sfera di raggio 3 è…", options: ["36π", "12π", "108π"], answer: 0, explain: "V = 4/3 π · 27 = 36π." },
      { type: "tf", q: "Il volume del cono è il doppio di quello del cilindro con stessa base e altezza.", answer: false, explain: "Il cono ha ⅓ del volume del cilindro." },
      { type: "text", q: "Come si chiama il poliedro regolare con 20 facce triangolari?", answer: ["icosaedro", "l'icosaedro"], explain: "L'icosaedro ha 20 facce, 12 vertici e 30 spigoli." },
      { type: "order", q: "Metti in ordine questi solidi in base al volume (dal minore al maggiore), con raggio e altezza r.", items: ["Cono", "Semisfera", "Cilindro"], explain: "I volumi sono ⅓πr³ (cono), ⅔πr³ (semisfera) e πr³ (cilindro): rapporto 1 : 2 : 3." }
    ]
  }
});

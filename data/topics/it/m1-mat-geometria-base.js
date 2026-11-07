TOPIC('it', {
  id: "m1-mat-geometria-base",
  title: "Enti geometrici fondamentali",
  intro: "Tutta la geometria nasce da tre idee semplicissime: il <b>punto</b>, la <b>retta</b> e il <b>piano</b>. Da queste si costruiscono semirette, segmenti e <b>angoli</b>, i mattoncini di ogni figura. Impariamo a riconoscerli, a misurarli e a confrontarli.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Gli enti primitivi: punto, retta, piano",
      html: `<p>In geometria alcune idee <b>non si definiscono</b>: sono così semplici che le capiamo con l'intuizione. Si chiamano <b>enti primitivi</b>.</p>
<ul>
<li><b>Punto</b>: indica una posizione. Non ha dimensioni (né lunghezza, né larghezza, né spessore). Si indica con una lettera <b>maiuscola</b>: A, B, P.</li>
<li><b>Retta</b>: una linea dritta <b>illimitata</b> nei due versi. Ha una sola dimensione, la lunghezza. Si indica con una lettera <b>minuscola</b>: r, s, t.</li>
<li><b>Piano</b>: una superficie piatta <b>illimitata</b> in tutte le direzioni, senza spessore. Si indica con una lettera greca: α (alfa), β (beta), π (pi greco).</li>
</ul>
<p>Lo <b>spazio</b> è l'insieme di tutti i punti: è il "contenitore" di tutte le figure.</p>
<p>Le proprietà degli enti primitivi sono date dai <b>postulati</b> (o assiomi): affermazioni che si accettano come vere senza dimostrazione. Ecco i più importanti:</p>
<ol>
<li>Per <b>un punto</b> passano <b>infinite rette</b> (si chiamano <i>fascio di rette</i>).</li>
<li>Per <b>due punti distinti</b> passa <b>una e una sola retta</b>.</li>
<li>Una retta contiene infiniti punti; tra due punti qualsiasi di una retta ce ne sono sempre infiniti altri.</li>
<li>Per <b>tre punti non allineati</b> passa <b>uno e un solo piano</b>.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Punto, retta, semiretta, segmento",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<circle cx="70" cy="50" r="6" fill="#dc2626"/>
<text x="84" y="44" font-size="18" fill="#dc2626" font-weight="bold">A</text>
<text x="200" y="56" font-size="17" fill="#334155">punto: solo una posizione</text>
<line x1="20" y1="110" x2="580" y2="110" stroke="#2563eb" stroke-width="4"/>
<polygon points="580,110 566,102 566,118" fill="#2563eb"/>
<polygon points="20,110 34,102 34,118" fill="#2563eb"/>
<text x="40" y="100" font-size="18" fill="#2563eb" font-weight="bold">r</text>
<text x="200" y="140" font-size="17" fill="#334155">retta: infinita da entrambe le parti</text>
<line x1="120" y1="190" x2="580" y2="190" stroke="#16a34a" stroke-width="4"/>
<polygon points="580,190 566,182 566,198" fill="#16a34a"/>
<circle cx="120" cy="190" r="6" fill="#16a34a"/>
<text x="104" y="182" font-size="18" fill="#16a34a" font-weight="bold">O</text>
<text x="200" y="220" font-size="17" fill="#334155">semiretta: ha un'origine O e non finisce</text>
<line x1="150" y1="270" x2="420" y2="270" stroke="#9333ea" stroke-width="4"/>
<circle cx="150" cy="270" r="6" fill="#9333ea"/>
<circle cx="420" cy="270" r="6" fill="#9333ea"/>
<text x="136" y="262" font-size="18" fill="#9333ea" font-weight="bold">A</text>
<text x="426" y="262" font-size="18" fill="#9333ea" font-weight="bold">B</text>
<text x="200" y="305" font-size="17" fill="#334155">segmento AB: ha due estremi e si può misurare</text>
</svg>`,
      caption: "La retta e la semiretta non si possono misurare (sono infinite); il segmento sì."
    },
    {
      type: "text",
      title: "2. Semirette e segmenti",
      html: `<p>Un punto O su una retta la divide in due parti: ognuna, insieme a O, è una <b>semiretta</b> di <b>origine</b> O.</p>
<p>Due punti A e B su una retta individuano il <b>segmento AB</b>: è la parte di retta compresa tra A e B, che sono gli <b>estremi</b>. A differenza di rette e semirette, il segmento ha una <b>lunghezza</b> che possiamo misurare con il righello.</p>
<table>
<tr><th>Tipo di segmenti</th><th>Che cosa significa</th></tr>
<tr><td><b>Consecutivi</b></td><td>hanno in comune solo un estremo (come i lati di una spezzata)</td></tr>
<tr><td><b>Adiacenti</b></td><td>sono consecutivi <b>e</b> stanno sulla stessa retta</td></tr>
<tr><td><b>Congruenti</b> (≅)</td><td>si possono sovrapporre esattamente: hanno la stessa lunghezza</td></tr>
<tr><td><b>Incidenti</b></td><td>si incrociano in un punto interno</td></tr>
</table>
<p>Il <b>punto medio</b> M di un segmento AB è il punto che lo divide in due segmenti congruenti: AM ≅ MB.</p>
<p>Più segmenti consecutivi formano una <b>spezzata</b> (o poligonale); se l'ultimo estremo coincide con il primo la spezzata è <b>chiusa</b> e racchiude un <b>poligono</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: sommare e confrontare segmenti",
      html: `<p>Su una retta ci sono, in ordine, i punti A, B, C. Sappiamo che <b>AB = 7 cm</b> e <b>BC = 5 cm</b>.</p>
<ul>
<li>I segmenti AB e BC sono <b>adiacenti</b> (consecutivi e sulla stessa retta), quindi AC = AB + BC = 7 + 5 = <b>12 cm</b>.</li>
<li>Il punto medio M di AC dista da A: 12 : 2 = <b>6 cm</b>.</li>
<li>Quanto dista M da B? AB − AM = 7 − 6 = <b>1 cm</b>.</li>
</ul>
<p>Problema "al contrario": se AC = 20 cm e AB supera BC di 4 cm, allora BC = (20 − 4) : 2 = <b>8 cm</b> e AB = 8 + 4 = <b>12 cm</b>. È il metodo della <b>somma e differenza</b>, utilissimo nei problemi!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: punti, rette e segmenti",
      questions: [
        { type: "mc", q: "Quante rette passano per due punti distinti?", options: ["Nessuna", "Una sola", "Due", "Infinite"], answer: 1, explain: "È un postulato di Euclide: per due punti distinti passa una e una sola retta." },
        { type: "tf", q: "Una semiretta si può misurare con il righello.", answer: false, explain: "La semiretta è illimitata da una parte: non ha una lunghezza finita. Solo il segmento si misura." },
        { type: "num", q: "A, B, C sono allineati in quest'ordine. AB = 9 cm e BC = 6 cm. Quanto misura AC?", answer: 15, unit: "cm", explain: "AB e BC sono adiacenti: AC = 9 + 6 = 15 cm." }
      ]
    },
    {
      type: "text",
      title: "3. Rette nel piano e nello spazio",
      html: `<p>Due rette di uno stesso piano possono essere:</p>
<ul>
<li><b>incidenti</b>: hanno <b>un solo punto</b> in comune;</li>
<li><b>perpendicolari</b> (⊥): sono incidenti e formano <b>4 angoli retti</b> (90°);</li>
<li><b>parallele</b> (∥): <b>non hanno punti in comune</b>, per quanto le prolunghiamo. Mantengono sempre la stessa distanza.</li>
</ul>
<p>La <b>distanza di un punto da una retta</b> è la lunghezza del segmento <b>perpendicolare</b> che va dal punto alla retta: è il percorso più breve.</p>
<p>Nello <b>spazio</b> esiste un caso in più: due rette che non si incontrano ma <b>non sono parallele</b>, perché non stanno sullo stesso piano. Si chiamano <b>rette sghembe</b>. Pensa a una strada e a un cavalcavia che la scavalca di traverso!</p>`
    },
    {
      type: "svg",
      title: "Le posizioni di due rette nel piano",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<line x1="20" y1="40" x2="180" y2="190" stroke="#2563eb" stroke-width="4"/>
<line x1="20" y1="190" x2="180" y2="40" stroke="#dc2626" stroke-width="4"/>
<circle cx="100" cy="115" r="6" fill="#111827"/>
<text x="100" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">incidenti</text>
<line x1="300" y1="30" x2="300" y2="200" stroke="#2563eb" stroke-width="4"/>
<line x1="220" y1="115" x2="380" y2="115" stroke="#dc2626" stroke-width="4"/>
<rect x="300" y="95" width="20" height="20" fill="none" stroke="#111827" stroke-width="2"/>
<text x="300" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">perpendicolari</text>
<line x1="420" y1="70" x2="590" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="420" y1="170" x2="590" y2="140" stroke="#dc2626" stroke-width="4"/>
<line x1="490" y1="58" x2="508" y2="155" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 4"/>
<text x="525" y="112" font-size="15" fill="#16a34a">distanza</text>
<text x="505" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">parallele</text>
</svg>`,
      caption: "Le rette parallele restano sempre alla stessa distanza; le perpendicolari formano quattro angoli retti."
    },
    {
      type: "3d",
      title: "Rette e piani in 3D: trova le rette sghembe",
      scene: "solid",
      options: { shape: "box", w: 2, h: 1.2, d: 1.4, color: "#38bdf8", labels: true },
      caption: "Ogni faccia del parallelepipedo sta su un piano, ogni spigolo su una retta. Ruotalo: trova due spigoli paralleli, due perpendicolari e due sghembi (non si toccano e non sono paralleli)."
    },
    {
      type: "text",
      title: "4. L'angolo",
      html: `<p>Due semirette con la stessa origine dividono il piano in due parti. Ciascuna parte, insieme alle semirette, è un <b>angolo</b>.</p>
<ul>
<li>Le semirette sono i <b>lati</b> dell'angolo; l'origine comune è il <b>vertice</b>.</li>
<li>Un angolo si indica con il vertice e un punto per lato, così: <b>AÔB</b>, oppure con una lettera greca: α, β, γ.</li>
<li>Un angolo è <b>convesso</b> se non contiene i prolungamenti dei suoi lati, <b>concavo</b> se li contiene.</li>
</ul>
<p>Gli angoli si misurano in <b>gradi</b> (°) con il <b>goniometro</b>. Un giro completo vale <b>360°</b>. Ogni grado si divide in <b>60 primi</b> (′) e ogni primo in <b>60 secondi</b> (″): è il <b>sistema sessagesimale</b>, ereditato dai Babilonesi.</p>
<table>
<tr><th>Angolo</th><th>Ampiezza</th></tr>
<tr><td><b>Nullo</b></td><td>0° (i lati coincidono)</td></tr>
<tr><td><b>Acuto</b></td><td>tra 0° e 90°</td></tr>
<tr><td><b>Retto</b></td><td>90° (un quarto di giro)</td></tr>
<tr><td><b>Ottuso</b></td><td>tra 90° e 180°</td></tr>
<tr><td><b>Piatto</b></td><td>180° (i lati formano una retta)</td></tr>
<tr><td><b>Giro</b></td><td>360°</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "I tipi di angolo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<line x1="30" y1="120" x2="150" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="30" y1="120" x2="130" y2="50" stroke="#111827" stroke-width="4"/>
<path d="M75 120 A45 45 0 0 0 67 94" stroke="#dc2626" stroke-width="4" fill="none"/>
<text x="90" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#dc2626">acuto</text>
<line x1="230" y1="120" x2="350" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="230" y1="120" x2="230" y2="30" stroke="#111827" stroke-width="4"/>
<rect x="230" y="96" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="290" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#2563eb">retto 90°</text>
<line x1="450" y1="120" x2="570" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="450" y1="120" x2="390" y2="40" stroke="#111827" stroke-width="4"/>
<path d="M490 120 A40 40 0 0 0 426 88" stroke="#9333ea" stroke-width="4" fill="none"/>
<text x="490" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#9333ea">ottuso</text>
<line x1="40" y1="240" x2="260" y2="240" stroke="#111827" stroke-width="4"/>
<circle cx="150" cy="240" r="5" fill="#111827"/>
<path d="M190 240 A40 40 0 0 0 110 240" stroke="#ea580c" stroke-width="4" fill="none"/>
<text x="150" y="285" font-size="17" text-anchor="middle" font-weight="bold" fill="#ea580c">piatto 180°</text>
<line x1="420" y1="240" x2="540" y2="240" stroke="#111827" stroke-width="4"/>
<circle cx="420" cy="240" r="5" fill="#111827"/>
<circle cx="420" cy="240" r="34" stroke="#16a34a" stroke-width="4" fill="none"/>
<text x="470" y="285" font-size="17" text-anchor="middle" font-weight="bold" fill="#16a34a">giro 360°</text>
</svg>`,
      caption: "L'arco colorato indica quale parte del piano stiamo misurando."
    },
    {
      type: "widget",
      title: "Classifica gli angoli",
      widget: "classify",
      options: {
        groups: ["Acuto", "Retto", "Ottuso", "Piatto o più"],
        items: [
          ["35°", 0], ["90°", 1], ["120°", 2], ["180°", 3], ["89°", 0], ["91°", 2], ["270°", 3],
          ["🕒 lancette alle 3:00", 1], ["🕐 lancette alle 1:00", 0], ["🕔 lancette alle 5:00", 2], ["🕕 lancette alle 6:00", 3], ["📐 angolo della squadra", 1]
        ]
      },
      caption: "Ricorda: ogni ora sul quadrante dell'orologio corrisponde a 360° : 12 = 30°."
    },
    {
      type: "text",
      title: "5. Coppie di angoli",
      html: `<ul>
<li><b>Consecutivi</b>: hanno il vertice e un lato in comune.</li>
<li><b>Adiacenti</b>: consecutivi e con gli altri due lati sulla stessa retta: insieme formano un angolo <b>piatto</b> (180°).</li>
<li><b>Complementari</b>: la loro somma è <b>90°</b>. Il complementare di 30° è 60°.</li>
<li><b>Supplementari</b>: la loro somma è <b>180°</b>. Il supplementare di 130° è 50°.</li>
<li><b>Esplementari</b>: la loro somma è <b>360°</b>. L'esplementare di 100° è 260°.</li>
<li><b>Opposti al vertice</b>: quando due rette si incrociano, gli angoli "uno di fronte all'altro" sono sempre <b>congruenti</b>.</li>
</ul>
<p>Perché gli opposti al vertice sono uguali? Chiamiamo α e β i due angoli opposti e γ quello in mezzo. α + γ = 180° e anche β + γ = 180°, perché sono adiacenti. Allora α = 180° − γ = β. È una vera <b>dimostrazione</b>: il primo teorema che si incontra in geometria!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: calcolare con gradi e primi",
      html: `<p><b>Somma.</b> 35°40′ + 20°30′ = 55°70′. Ma 70′ = 1° 10′, quindi il risultato è <b>56°10′</b>.</p>
<p><b>Complementare.</b> Il complementare di 52°25′ è 90° − 52°25′. Scriviamo 90° come 89°60′: 89°60′ − 52°25′ = <b>37°35′</b>.</p>
<p><b>Orologio.</b> Alle 2:00 le lancette formano 2 × 30° = <b>60°</b>; alle 4:00 formano 4 × 30° = <b>120°</b> (ottuso). Alle 9:00 formano 90°: un angolo retto!</p>
<p><b>Navigazione.</b> I piloti e i marinai indicano la direzione con un angolo misurato dal Nord in senso orario: Est = 90°, Sud = 180°, Ovest = 270°.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… 360 viene da Babilonia?",
      html: `<p>Il giro diviso in <b>360 gradi</b> e i <b>primi</b> e <b>secondi</b> da 60 vengono dagli antichi <b>Babilonesi</b>, che contavano in base 60. Il 60 si divide per 2, 3, 4, 5, 6, 10, 12, 15, 20, 30: comodissimo per fare calcoli senza virgole!</p>
<p>E i nomi? In latino medievale si parlava di <i>pars minuta prima</i> ("prima parte piccola") e <i>pars minuta secunda</i> ("seconda parte piccola"): da qui <b>primo</b> e <b>secondo</b>, gli stessi nomi che usiamo per l'ora (minuti e secondi, in inglese <i>minute</i> e <i>second</i>).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il libro di geometria più famoso ha 2300 anni?",
      html: `<p>Intorno al <b>300 a.C.</b>, ad Alessandria d'Egitto, il matematico greco <b>Euclide</b> scrisse gli <b>Elementi</b>, 13 libri che partono da poche definizioni e da 5 <b>postulati</b> e da lì dimostrano centinaia di teoremi. Per oltre 2000 anni è stato il testo su cui si studiava geometria: dopo la Bibbia, è forse il libro con più edizioni della storia.</p>
<p>Il suo quinto postulato, quello delle <b>parallele</b>, fece discutere i matematici per secoli. Nell'Ottocento Lobačevskij, Bolyai e Riemann scoprirono che, cambiandolo, si ottengono <b>geometrie non euclidee</b>: proprio quelle che Einstein userà per descrivere lo spazio curvo dell'universo!</p>`
    },
    {
      type: "widget",
      title: "Abbina il termine alla definizione",
      widget: "match",
      options: {
        pairs: [
          ["Complementari", "somma 90°"],
          ["Supplementari", "somma 180°"],
          ["Esplementari", "somma 360°"],
          ["Parallele", "nessun punto in comune, stesso piano"],
          ["Sghembe", "non si incontrano, piani diversi"],
          ["Punto medio", "divide il segmento in due parti uguali"]
        ]
      }
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli enti geometrici",
      intro: "Le definizioni astratte non ti convincono? Prova a vederle con oggetti, con il corpo o con il 3D.",
      tabs: [
        {
          label: "🧵 Con lo spago e il corpo",
          html: `<p>Tendi uno <b>spago</b> tra due chiodi: è un <b>segmento</b>. Se potessi allungarlo all'infinito da entrambe le parti, sarebbe una <b>retta</b>. Una <b>torcia</b> accesa nel buio è un'ottima semiretta: parte da un punto e va lontanissimo.</p>
<p>Ora usa le <b>braccia</b>: tienile unite davanti a te (angolo nullo), poi aprine una verso l'alto fino a formare una "L" (angolo retto), poi allargale in linea (angolo piatto). Gira su te stesso: hai fatto un <b>angolo giro</b>!</p>
<p>Il pavimento della classe è un pezzo di <b>piano</b>; le linee delle piastrelle sono rette parallele e perpendicolari.</p>`
        },
        {
          label: "🕐 Gli angoli dell'orologio",
          html: `<p>Il quadrante dell'orologio è un goniometro nascosto! Il giro (360°) è diviso in 12 ore, quindi ogni ora vale <b>30°</b>. Guarda le lancette: alle 3 formano un angolo retto, alle 6 un angolo piatto, alle 1 un angolo acuto di 30°.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#eff6ff"/>
<circle cx="150" cy="140" r="110" fill="#ffffff" stroke="#1e3a8a" stroke-width="6"/>
<text x="150" y="55" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">12</text>
<text x="242" y="147" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">3</text>
<text x="150" y="240" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">6</text>
<text x="58" y="147" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">9</text>
<line x1="150" y1="140" x2="150" y2="62" stroke="#dc2626" stroke-width="6"/>
<line x1="150" y1="140" x2="215" y2="140" stroke="#111827" stroke-width="8"/>
<rect x="150" y="118" width="22" height="22" fill="none" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="80" font-size="20" fill="#1e3a8a" font-weight="bold">Ore 3:00 = 90°</text>
<text x="400" y="120" font-size="18" fill="#334155">1 ora = 30°</text>
<text x="400" y="155" font-size="18" fill="#334155">ore 1:00 = 30°</text>
<text x="400" y="190" font-size="18" fill="#334155">ore 4:00 = 120°</text>
<text x="400" y="225" font-size="18" fill="#334155">ore 6:00 = 180°</text>
</svg>`
        },
        {
          label: "🧊 Il cubo in 3D",
          html: `<p>Su un cubo trovi tutto: i <b>vertici</b> sono punti, gli <b>spigoli</b> stanno su rette, le <b>facce</b> su piani. Ruotalo e cerca:</p>
<ul><li>spigoli <b>paralleli</b> (stessa direzione);</li><li>spigoli <b>perpendicolari</b> (si incontrano a 90°);</li><li>spigoli <b>sghembi</b> (non si toccano e non sono paralleli: esistono solo nello spazio!).</li></ul>`,
          scene: "solid",
          options: { shape: "cube", color: "#a78bfa", labels: true }
        },
        {
          label: "🌍 Gradi in altri Paesi e mestieri",
          html: `<p>Non tutti misurano gli angoli allo stesso modo:</p>
<ul>
<li>i <b>matematici</b> e i fisici usano spesso i <b>radianti</b>: un giro vale 2π ≈ 6,28 radianti;</li>
<li>in <b>Francia</b>, dopo la Rivoluzione, si provò a introdurre i <b>gradi centesimali</b> (o gon): un angolo retto = 100 gon, un giro = 400. Li usano ancora i topografi, e li trovi sulle calcolatrici con il tasto "GRAD";</li>
<li>gli eserciti usano i <b>millesimi</b> (mil): un giro = 6400 mil;</li>
<li>nei Paesi anglosassoni la retta per A e B si scrive con una freccia doppia sopra: <b>AB</b> con ↔.</li>
</ul>
<p>Il sistema sessagesimale (360°) resta il più diffuso al mondo, perché 360 si divide in tantissimi modi.</p>`
        },
        {
          "label": "🇬🇷 Riga e compasso, come i Greci",
          "html": "<p>Gli antichi <b>Greci</b> (per esempio <b>Euclide</b>, ad Alessandria verso il 300 a.C.) costruivano le figure usando solo <b>due strumenti</b>: una <b>riga senza tacche</b> (per tracciare rette) e il <b>compasso</b> (per tracciare cerchi). Niente righello con i centimetri, niente goniometro! Ecco come trovano il <b>punto medio</b> di un segmento e la sua <b>perpendicolare</b> (si chiama <b>asse del segmento</b>):</p><ol><li>Disegna il segmento <b>AB</b>.</li><li>Punta il compasso in <b>A</b> con un'apertura <b>più grande della metà</b> di AB e traccia un arco sopra e uno sotto il segmento.</li><li><b>Senza cambiare apertura</b>, punta in <b>B</b> e traccia altri due archi: tagliano i primi nei punti <b>C</b> e <b>D</b>.</li><li>Unisci C e D con la riga: la retta CD è <b>perpendicolare</b> ad AB e lo taglia esattamente nel <b>punto medio M</b>.</li></ol><p><b>Perché funziona?</b> C è alla stessa distanza da A e da B (l'apertura del compasso era la stessa), e anche D. Tutti i punti che sono <b>alla stessa distanza da A e da B</b> stanno su una sola retta: l'asse del segmento. È la proposizione 10 del primo libro degli <i>Elementi</i>.</p><p>🎯 <b>Prova anche tu</b> a costruire la <b>bisettrice</b> di un angolo: punta nel vertice e traccia un arco che taglia i due lati; da quei due punti traccia due archi uguali che si incrociano; unisci il vertice con l'incrocio. Hai diviso l'angolo in due parti uguali senza misurarlo!</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"150\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><circle cx=\"450\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><line x1=\"150\" y1=\"150\" x2=\"450\" y2=\"150\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><line x1=\"300\" y1=\"8\" x2=\"300\" y2=\"292\" stroke=\"#dc2626\" stroke-width=\"3\"/><circle cx=\"150\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"450\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"17.7\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"282.3\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"150\" r=\"6\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"128\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"458\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"310\" y=\"30\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">C</text><text x=\"310\" y=\"290\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">D</text><text x=\"308\" y=\"172\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">M</text><rect x=\"8\" y=\"8\" width=\"150\" height=\"50\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><text x=\"16\" y=\"30\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">Solo riga</text><text x=\"16\" y=\"50\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">e compasso!</text></svg>"
        },
        {
          "label": "🇨🇳 Squadra e compasso in Cina",
          "html": "<p>In <b>Cina</b>, in antiche pitture e sculture di circa 2000 anni fa (dinastia Han), i due antenati leggendari <b>Fuxi</b> e <b>Nüwa</b> sono rappresentati con in mano una <b>squadra</b> (矩, <i>ju</i>) e un <b>compasso</b> (规, <i>gui</i>). Insieme le due parole formano <b>规矩</b> (<i>guīju</i>), che in cinese vuol dire… <b>«regole»</b>! Per gli antichi Cinesi, chi sa usare squadra e compasso sa mettere ordine nel mondo.</p><p>Con questi due strumenti puoi fare tutto quello che studi in questo capitolo:</p><ul><li><b>Perpendicolari</b>: appoggia un cateto della squadra su una retta e traccia lungo l'altro cateto. Le due rette formano un <b>angolo retto</b> (90°).</li><li><b>Parallele</b> (il metodo della «squadra che scivola»): appoggia la riga sul foglio e tienila ferma; fai <b>scivolare</b> la squadra lungo la riga e traccia una retta, poi un'altra più in là. Tutte le rette hanno la <b>stessa direzione</b>: sono parallele, perché formano tutte lo stesso angolo con la riga.</li><li><b>Distanza punto–retta</b>: dal punto P traccia con la squadra la perpendicolare alla retta: il segmento perpendicolare è la <b>distanza</b> più corta.</li><li><b>Circonferenza</b>: con il compasso, tutti i punti alla stessa distanza dal centro.</li></ul><p>🎯 Prova: disegna una retta e un punto fuori da essa. Con la squadra che scivola traccia la <b>parallela</b> passante per il punto. Quante ne puoi tracciare? Una sola (è proprio il quinto postulato di Euclide!).</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa degli enti geometrici: tocca e scopri il perché",
      nodes: [
        { id: "postulati", label: "Postulati", x: 50, y: 6, color: "#a855f7", html: "Affermazioni accettate come vere senza dimostrazione, che descrivono come si comportano punti, rette e piani.", why: "Non si può dimostrare tutto: ogni ragionamento deve partire da qualcosa. Euclide, intorno al 300 a.C., scelse pochi postulati evidenti e da lì costruì tutta la geometria con dimostrazioni rigorose. Nel 1899 David Hilbert li riscrisse in modo ancora più preciso." },
        { id: "punto", label: "Punto", x: 18, y: 26, color: "#dc2626", html: "Indica una posizione; non ha dimensioni.", why: "Euclide lo definì \"ciò che non ha parti\". È un'idea astratta: il puntino che disegni con la matita è solo un modello, perché ha sempre un po' di spessore." },
        { id: "retta", label: "Retta", x: 50, y: 30, color: "#2563eb", html: "Linea dritta illimitata, con una sola dimensione.", why: "Per due punti ne passa una sola: per questo il filo teso tra due punti è sempre dritto e la retta è il percorso più breve sul piano." },
        { id: "piano", label: "Piano", x: 82, y: 26, color: "#0ea5e9", html: "Superficie piatta illimitata, a due dimensioni.", why: "Tre punti non allineati individuano un solo piano: è il motivo per cui uno sgabello a 3 gambe non traballa mai, mentre una sedia a 4 gambe a volte sì!" },
        { id: "semiretta", label: "Semiretta e segmento", x: 30, y: 54, color: "#16a34a", html: "Parti di retta: la semiretta ha un'origine, il segmento due estremi.", why: "Nascono \"tagliando\" la retta con uno o due punti. Il segmento è finito e quindi si può confrontare e misurare: da qui nascono le misure di lunghezza." },
        { id: "parallele", label: "Parallele e perpendicolari", x: 72, y: 54, color: "#f59e0b", html: "Posizioni reciproche di due rette.", why: "Il quinto postulato di Euclide dice in sostanza che per un punto esterno a una retta passa una sola parallela. Cambiandolo, nell'Ottocento nacquero le geometrie non euclidee." },
        { id: "angolo", label: "Angolo", x: 30, y: 80, color: "#ef4444", html: "Parte di piano tra due semirette con la stessa origine.", why: "Due semirette uscenti dallo stesso punto dividono il piano in due parti: ognuna è un angolo. Misura quanto una direzione è \"girata\" rispetto a un'altra." },
        { id: "gradi", label: "Gradi sessagesimali", x: 70, y: 82, color: "#14b8a6", html: "Unità di misura degli angoli: il giro vale 360°, 1° = 60′, 1′ = 60″.", why: "Viene dai Babilonesi, che contavano in base 60 e osservavano che il Sole impiega circa 360 giorni per fare il giro del cielo. Il 360 ha moltissimi divisori." },
        { id: "teorema", label: "Opposti al vertice", x: 50, y: 96, color: "#6366f1", html: "Gli angoli opposti al vertice sono congruenti.", why: "Si dimostra: ciascuno è supplementare dello stesso angolo, quindi sono uguali. Secondo la tradizione fu Talete di Mileto (VI secolo a.C.) a dimostrarlo per primo." }
      ],
      edges: [
        ["postulati", "punto", "descrivono"],
        ["postulati", "retta", "descrivono"],
        ["postulati", "piano", "descrivono"],
        ["retta", "semiretta", "si divide in"],
        ["retta", "parallele", "due rette possono essere"],
        ["semiretta", "angolo", "due semirette formano"],
        ["angolo", "gradi", "si misura in"],
        ["angolo", "teorema", "dimostriamo"],
        ["piano", "parallele", "nello stesso"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: gli angoli",
      questions: [
        { type: "num", q: "Qual è il supplementare di un angolo di 125°?", answer: 55, unit: "°", explain: "180° − 125° = 55°." },
        { type: "mc", q: "Due angoli opposti al vertice misurano uno 40°. L'altro?", options: ["140°", "40°", "50°", "320°"], answer: 1, explain: "Gli angoli opposti al vertice sono sempre congruenti." },
        { type: "mc", q: "Un angolo di 100° è…", options: ["acuto", "retto", "ottuso", "piatto"], answer: 2, explain: "È maggiore di 90° e minore di 180°: ottuso." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Punto, retta, piano</b> sono enti primitivi: non si definiscono, si descrivono con i <b>postulati</b>.</li>
<li>Per due punti passa <b>una sola retta</b>; per tre punti non allineati <b>un solo piano</b>.</li>
<li>Il <b>segmento</b> ha due estremi e si misura; retta e semiretta no.</li>
<li>Rette nel piano: <b>incidenti, perpendicolari, parallele</b>; nello spazio anche <b>sghembe</b>.</li>
<li>Angoli: acuto (&lt;90°), retto (90°), ottuso, piatto (180°), giro (360°).</li>
<li>Complementari 90°, supplementari 180°, esplementari 360°; opposti al vertice = congruenti.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Ente primitivo", d: "Concetto di base che non si definisce (punto, retta, piano)." },
    { t: "Postulato", d: "Affermazione accettata come vera senza dimostrazione." },
    { t: "Semiretta", d: "Ciascuna delle due parti in cui un punto divide una retta." },
    { t: "Segmento", d: "Parte di retta compresa tra due punti, detti estremi." },
    { t: "Punto medio", d: "Punto che divide un segmento in due parti congruenti." },
    { t: "Congruenti", d: "Figure sovrapponibili punto per punto (stessa forma e misura)." },
    { t: "Rette sghembe", d: "Rette dello spazio che non si incontrano e non sono parallele." },
    { t: "Angolo", d: "Parte di piano compresa tra due semirette con la stessa origine." },
    { t: "Goniometro", d: "Strumento per misurare gli angoli in gradi." },
    { t: "Sistema sessagesimale", d: "Sistema in base 60: 1° = 60 primi, 1 primo = 60 secondi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di questi enti si indica con una lettera minuscola?", options: ["Il punto", "La retta", "Il piano"], answer: 1, explain: "Le rette si indicano con lettere minuscole (r, s), i punti con maiuscole, i piani con lettere greche." },
      { type: "tf", q: "Per tre punti non allineati passa uno e un solo piano.", answer: true, explain: "È un postulato: per questo uno sgabello a 3 gambe non traballa." },
      { type: "mc", q: "Due segmenti consecutivi che stanno sulla stessa retta si dicono…", options: ["congruenti", "adiacenti", "incidenti", "paralleli"], answer: 1, explain: "Sono adiacenti: consecutivi e allineati." },
      { type: "num", q: "Il segmento AB misura 18 cm. Quanto misura AM, se M è il punto medio?", answer: 9, unit: "cm", explain: "Il punto medio divide il segmento a metà: 18 : 2 = 9 cm." },
      { type: "num", q: "AB + BC = 30 cm e AB supera BC di 6 cm. Quanto misura BC?", answer: 12, unit: "cm", explain: "BC = (30 − 6) : 2 = 12 cm; AB = 18 cm." },
      { type: "text", q: "Come si chiamano due rette dello spazio che non si incontrano e non sono parallele?", answer: ["sghembe", "rette sghembe"], explain: "Sono le rette sghembe: non stanno sullo stesso piano." },
      { type: "num", q: "Qual è il complementare di un angolo di 37°?", answer: 53, unit: "°", explain: "90° − 37° = 53°." },
      { type: "num", q: "Qual è l'esplementare di un angolo di 210°?", answer: 150, unit: "°", explain: "360° − 210° = 150°." },
      { type: "mc", q: "Quanto vale 25°50′ + 14°20′?", options: ["39°70′", "40°10′", "39°10′", "40°70′"], answer: 1, explain: "25°50′ + 14°20′ = 39°70′ = 40°10′, perché 60′ = 1°." },
      { type: "num", q: "Quanti gradi formano le lancette di un orologio alle 4:00?", answer: 120, unit: "°", explain: "Ogni ora vale 30°: 4 × 30° = 120°." },
      { type: "tf", q: "Due rette perpendicolari formano quattro angoli acuti.", answer: false, explain: "Formano quattro angoli retti (90°)." },
      { type: "order", q: "Metti gli angoli dal più piccolo al più grande.", items: ["acuto", "retto", "ottuso", "piatto", "giro"], explain: "Acuto (<90°), retto (90°), ottuso (90°–180°), piatto (180°), giro (360°)." }
    ]
  }
});

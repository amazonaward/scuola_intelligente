TOPIC('it', {
  id: "p5-mat-perimetro-area",
  title: "Perimetro e area",
  intro: "Quanto nastro serve per decorare il bordo di un quadro? Quante piastrelle servono per coprire il pavimento? Per rispondere servono due misure diverse: il <b>perimetro</b> e l'<b>area</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Perimetro e area: che differenza c'è?",
      html: `<p>Ogni figura piana ha due misure importanti:</p>
<ul>
<li>il <b>perimetro</b> è la <b>lunghezza del contorno</b> della figura. Si misura in unità di lunghezza: <b>cm, m, km…</b> Si indica con <b>P</b>.</li>
<li>l'<b>area</b> è la <b>misura della superficie</b>, cioè di quanto spazio occupa la figura \"dentro\" il contorno. Si misura in unità quadrate: <b>cm², m², km²…</b> Si indica con <b>A</b>.</li>
</ul>
<p>Immagina un campo da calcio: il <b>perimetro</b> è la lunghezza della linea bianca che lo circonda; l'<b>area</b> è tutta l'erba da tagliare.</p>
<p><b>1 cm²</b> (centimetro quadrato) è l'area di un quadratino con il lato di 1 cm. Calcolare un'area significa contare quanti di questi quadratini \"stanno dentro\" la figura.</p>`
    },
    {
      type: "svg",
      title: "Contorno e superficie",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<text x="150" y="30" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">PERIMETRO = contorno</text>
<rect x="50" y="60" width="200" height="120" fill="#fff7ed" stroke="#dc2626" stroke-width="6"/>
<text x="150" y="55" font-size="15" text-anchor="middle" fill="#dc2626">5 cm</text>
<text x="150" y="200" font-size="15" text-anchor="middle" fill="#dc2626">5 cm</text>
<text x="40" y="125" font-size="15" text-anchor="end" fill="#dc2626">3 cm</text>
<text x="260" y="125" font-size="15" fill="#dc2626">3 cm</text>
<text x="150" y="235" font-size="16" text-anchor="middle" fill="#111">P = 5+3+5+3 = 16 cm</text>
<text x="450" y="30" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">AREA = superficie</text>
<g fill="#bfdbfe" stroke="#2563eb" stroke-width="2">
<rect x="350" y="60" width="40" height="40"/><rect x="390" y="60" width="40" height="40"/><rect x="430" y="60" width="40" height="40"/><rect x="470" y="60" width="40" height="40"/><rect x="510" y="60" width="40" height="40"/>
<rect x="350" y="100" width="40" height="40"/><rect x="390" y="100" width="40" height="40"/><rect x="430" y="100" width="40" height="40"/><rect x="470" y="100" width="40" height="40"/><rect x="510" y="100" width="40" height="40"/>
<rect x="350" y="140" width="40" height="40"/><rect x="390" y="140" width="40" height="40"/><rect x="430" y="140" width="40" height="40"/><rect x="470" y="140" width="40" height="40"/><rect x="510" y="140" width="40" height="40"/>
</g>
<text x="450" y="235" font-size="16" text-anchor="middle" fill="#111">A = 5 × 3 = 15 cm²</text>
</svg>`,
      caption: "Lo stesso rettangolo: a sinistra misuriamo il bordo (perimetro), a destra contiamo i quadretti da 1 cm² (area)."
    },
    {
      type: "text",
      title: "Come si calcola il perimetro",
      html: `<p>Per calcolare il perimetro di un <b>poligono</b> basta <b>sommare le lunghezze di tutti i lati</b>.</p>
<p>Per alcune figure ci sono delle scorciatoie:</p>
<table>
<tr><th>Figura</th><th>Perimetro</th></tr>
<tr><td>Quadrato (4 lati uguali)</td><td>P = lato × 4</td></tr>
<tr><td>Rettangolo</td><td>P = (base + altezza) × 2</td></tr>
<tr><td>Triangolo equilatero (3 lati uguali)</td><td>P = lato × 3</td></tr>
<tr><td>Rombo (4 lati uguali)</td><td>P = lato × 4</td></tr>
<tr><td>Poligono regolare con n lati</td><td>P = lato × n</td></tr>
</table>
<p><b>Attenzione:</b> prima di sommare, tutte le misure devono avere la <b>stessa unità</b> (per esempio tutte in cm).</p>`
    },
    {
      type: "svg",
      title: "Le formule delle aree",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#ffffff"/>
<g font-size="15" fill="#111">
<rect x="20" y="30" width="80" height="80" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="60" y="130" text-anchor="middle" font-weight="bold">Quadrato</text>
<text x="60" y="150" text-anchor="middle">A = l × l</text>
<rect x="140" y="45" width="130" height="65" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="205" y="130" text-anchor="middle" font-weight="bold">Rettangolo</text>
<text x="205" y="150" text-anchor="middle">A = b × h</text>
<polygon points="320,110 350,40 450,40 420,110" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<line x1="350" y1="40" x2="350" y2="110" stroke="#1d4ed8" stroke-dasharray="5 4" stroke-width="2"/>
<text x="356" y="85" font-size="13">h</text>
<text x="385" y="130" text-anchor="middle" font-weight="bold">Parallelogramma</text>
<text x="385" y="150" text-anchor="middle">A = b × h</text>
<polygon points="500,110 560,30 620,110" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<line x1="560" y1="30" x2="560" y2="110" stroke="#be185d" stroke-dasharray="5 4" stroke-width="2"/>
<text x="566" y="80" font-size="13">h</text>
<text x="560" y="130" text-anchor="middle" font-weight="bold">Triangolo</text>
<text x="560" y="150" text-anchor="middle">A = b × h : 2</text>
<polygon points="110,180 160,230 110,280 60,230" fill="#ddd6fe" stroke="#6d28d9" stroke-width="3"/>
<line x1="60" y1="230" x2="160" y2="230" stroke="#6d28d9" stroke-dasharray="5 4" stroke-width="2"/>
<line x1="110" y1="180" x2="110" y2="280" stroke="#6d28d9" stroke-dasharray="5 4" stroke-width="2"/>
<text x="250" y="220" font-weight="bold">Rombo</text>
<text x="250" y="240">A = D × d : 2</text>
<text x="250" y="260" font-size="13">(D e d = diagonali)</text>
<polygon points="420,280 450,190 540,190 600,280" fill="#fed7aa" stroke="#c2410c" stroke-width="3"/>
<line x1="450" y1="190" x2="450" y2="280" stroke="#c2410c" stroke-dasharray="5 4" stroke-width="2"/>
<text x="510" y="235" text-anchor="middle" font-weight="bold">Trapezio</text>
<text x="510" y="255" text-anchor="middle">A = (B + b) × h : 2</text>
</g>
</svg>`,
      caption: "b = base, h = altezza, l = lato. L'altezza (tratteggiata) è sempre perpendicolare alla base."
    },
    {
      type: "text",
      title: "Perché le formule funzionano?",
      html: `<p>Le formule non sono magiche: si capiscono con un po' di forbici!</p>
<ul>
<li><b>Rettangolo</b>: se la base è 5 cm e l'altezza 3 cm, ci sono 3 file da 5 quadretti: 5 × 3 = 15 cm².</li>
<li><b>Parallelogramma</b>: taglia il triangolo a sinistra e spostalo a destra: diventa un rettangolo con la stessa base e la stessa altezza. Quindi A = b × h.</li>
<li><b>Triangolo</b>: due triangoli uguali, messi insieme, formano un parallelogramma. Quindi l'area del triangolo è la <b>metà</b>: A = b × h : 2.</li>
<li><b>Rombo</b>: è la metà del rettangolo che ha per lati le due diagonali: A = D × d : 2.</li>
<li><b>Trapezio</b>: due trapezi uguali, uno capovolto, formano un parallelogramma con base B + b: A = (B + b) × h : 2.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Laboratorio: cambia il rettangolo",
      widget: "areaGrid",
      options: { w: 5, h: 3, max: 12 },
      caption: "Muovi i cursori e osserva come cambiano perimetro e area. Riesci a trovare due rettangoli con la stessa area ma perimetro diverso?"
    },
    {
      type: "alternatives",
      title: "Altri modi per capire perimetro e area",
      intro: "Le formule non ti entrano in testa? Nessun problema: ecco altre strade per capire davvero che cosa stai calcolando.",
      tabs: [
        {
          label: "🐜 La formica e il pittore",
          html: "<p>Immagina una figura disegnata sul pavimento.</p><ul><li>Una <b>formica</b> cammina lungo il bordo fino a tornare al punto di partenza: la strada che percorre è il <b>perimetro</b>. Si misura in cm, m… (una lunghezza).</li><li>Un <b>pittore</b> deve colorare tutto l'interno: la quantità di pavimento da dipingere è l'<b>area</b>. Si misura in cm², m²… (quadratini).</li></ul><p>Per questo perimetro e area non si possono confrontare: una è una strada, l'altra è una superficie!</p>"
        },
        {
          label: "🟦 Contare i quadretti",
          html: "<p>Usa i cursori: ogni quadretto è 1 cm². Conta i quadretti di una riga, poi quante righe ci sono. Righe × quadretti per riga = area. Ti accorgi che è proprio <b>base × altezza</b>! Poi fai il giro del bordo contando i lati dei quadretti: è il perimetro.</p>",
          widget: "areaGrid",
          options: { w: 6, h: 4, max: 12 }
        },
        {
          label: "🧊 Con i cubetti 3D",
          html: "<p>Metti i cubetti in file ordinate: 5 cubetti per fila, 3 file. Quanti sono? 5 × 3 = 15. Guardali dall'alto: la loro «impronta» è un rettangolo di area 15 quadretti. Cambia i numeri con i cursori e osserva come cresce il rettangolo.</p>",
          scene: "blocks",
          options: { mode: "array", a: 5, b: 3 }
        },
        {
          label: "✂️ Ritaglia e ricomponi",
          html: "<p>Il trucco dei matematici: <b>trasformare una figura in un'altra che sappiamo già misurare</b>, senza perdere né aggiungere carta.</p><ul><li><b>Parallelogramma</b>: taglia il triangolo a sinistra e spostalo a destra: diventa un rettangolo con la stessa base e la stessa altezza. Area = b × h.</li><li><b>Triangolo</b>: due triangoli uguali messi insieme formano un parallelogramma. Quindi il triangolo è la metà: Area = b × h : 2.</li><li><b>Trapezio</b>: due trapezi uguali, uno capovolto, formano un parallelogramma con base (B + b). Area = (B + b) × h : 2.</li></ul><p>Provalo davvero con un foglio e le forbici!</p>",
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><polygon points="40,200 100,80 260,80 200,200" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/><line x1="100" y1="80" x2="100" y2="200" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 4"/><polygon points="40,200 100,80 100,200" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><text x="150" y="235" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">parallelogramma</text><text x="300" y="150" font-size="40" text-anchor="middle" fill="#334155">→</text><rect x="360" y="80" width="160" height="120" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/><polygon points="460,200 520,80 520,200" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><text x="440" y="235" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">rettangolo: b × h</text><text x="130" y="40" font-size="16" text-anchor="middle" fill="#b91c1c">taglio qui il triangolo rosso…</text><text x="470" y="40" font-size="16" text-anchor="middle" fill="#b91c1c">…e lo sposto qui</text></svg>`
        },
        {
          label: "🏺 Gli agrimensori egizi",
          html: "<p>Ogni anno il <b>Nilo</b> straripava e cancellava i confini dei campi. Gli «tenditori di corde» egizi (agrimensori) dovevano rimisurare i terreni per sapere quante tasse doveva pagare ogni contadino.</p><p>Usavano una <b>corda con 12 nodi</b> alla stessa distanza: tendendola a forma di triangolo con lati di 3, 4 e 5 spazi ottenevano un <b>angolo retto</b> perfetto, e da lì tracciavano rettangoli. Dividevano poi i campi irregolari in rettangoli e triangoli, proprio come facciamo noi!</p><p>La parola <b>geometria</b> viene dal greco e vuol dire proprio «misura della terra».</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#fef3c7"/><polygon points="180,210 315,210 315,30" fill="none" stroke="#92400e" stroke-width="5"/><g fill="#78350f"><circle cx="180" cy="210" r="7"/><circle cx="225" cy="210" r="7"/><circle cx="270" cy="210" r="7"/><circle cx="315" cy="210" r="7"/><circle cx="315" cy="165" r="7"/><circle cx="315" cy="120" r="7"/><circle cx="315" cy="75" r="7"/><circle cx="315" cy="30" r="7"/><circle cx="288" cy="66" r="7"/><circle cx="261" cy="102" r="7"/><circle cx="234" cy="138" r="7"/><circle cx="207" cy="174" r="7"/></g><rect x="297" y="192" width="18" height="18" fill="none" stroke="#dc2626" stroke-width="3"/><text x="248" y="234" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">3 spazi</text><text x="330" y="125" font-size="18" fill="#78350f" font-weight="bold">4 spazi</text><text x="225" y="95" font-size="18" text-anchor="end" fill="#78350f" font-weight="bold">5 spazi</text><text x="470" y="205" font-size="16" text-anchor="middle" fill="#dc2626">angolo retto!</text><text x="470" y="60" font-size="16" text-anchor="middle" fill="#78350f">12 nodi in tutto</text></svg>`
        },
        {
          label: "📐 La formula di Erone",
          html: "<p>E se di un triangolo conosci solo i <b>tre lati</b> e non l'altezza? Erone di Alessandria (I secolo d.C.) trovò una formula speciale:</p><ol><li>calcola il semiperimetro: s = (a + b + c) : 2</li><li>Area = √( s × (s − a) × (s − b) × (s − c) )</li></ol><p><b>Esempio</b>: lati 3, 4 e 5 cm → s = 6; Area = √(6 × 3 × 2 × 1) = √36 = <b>6 cm²</b>. Controlla con la formula solita: il triangolo è rettangolo, base 3 e altezza 4 → 3 × 4 : 2 = 6 cm². Stesso risultato per due strade diverse!</p>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Stessa area, perimetro diverso!",
      html: `<p>Un rettangolo 6 × 2 e un quadrato 4 × 4 hanno perimetri <b>uguali</b> (16 cm), ma aree diverse: 12 cm² e 16 cm²!</p>
<p>E al contrario: un rettangolo 12 × 1 e uno 4 × 3 hanno la <b>stessa area</b> (12 cm²), ma perimetri di 26 cm e 14 cm.</p>
<p>A parità di perimetro, il rettangolo con l'area più grande è sempre il <b>quadrato</b>. Per questo molte api costruiscono celle esagonali e i contadini, un tempo, cercavano campi il più possibile \"quadrati\": meno recinto per più terreno!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: perimetro",
      questions: [
        { type: "num", q: "Un quadrato ha il lato di 7 cm. Quanto misura il perimetro?", answer: 28, tol: 0, unit: "cm", explain: "P = 7 × 4 = 28 cm." },
        { type: "num", q: "Un rettangolo ha base 9 cm e altezza 4 cm. Quanto misura il perimetro?", answer: 26, tol: 0, unit: "cm", explain: "P = (9 + 4) × 2 = 26 cm." },
        { type: "mc", q: "In quale unità si misura il perimetro?", options: ["cm²", "cm", "kg", "litri"], answer: 1, explain: "Il perimetro è una lunghezza: si misura in cm, m, km…" }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: la recinzione dell'orto",
      html: `<p>Il nonno ha un orto rettangolare lungo <b>12 m</b> e largo <b>8 m</b>. Vuole recintarlo con una rete che costa <b>3 € al metro</b>.</p>
<ol>
<li>Quanta rete serve? È il <b>perimetro</b>: P = (12 + 8) × 2 = <b>40 m</b>.</li>
<li>Quanto spende? 40 × 3 = <b>120 €</b>.</li>
<li>Vuole anche seminare tutto il terreno: quanta superficie è? È l'<b>area</b>: A = 12 × 8 = <b>96 m²</b>.</li>
<li>Una bustina di semi basta per 8 m²: servono 96 : 8 = <b>12 bustine</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio pratico: le piastrelle della cameretta",
      html: `<p>Il pavimento della cameretta è un rettangolo di <b>4 m × 3 m</b>. Vogliamo coprirlo con piastrelle quadrate di <b>50 cm</b> di lato.</p>
<ol>
<li>Area del pavimento: 4 × 3 = <b>12 m²</b>.</li>
<li>Una piastrella: 0,5 m × 0,5 m = <b>0,25 m²</b>.</li>
<li>Piastrelle necessarie: 12 : 0,25 = <b>48 piastrelle</b>.</li>
</ol>
<p>Controllo con un altro metodo: in 4 m ci stanno 8 piastrelle, in 3 m ce ne stanno 6. 8 × 6 = 48. ✔️</p>`
    },
    {
      type: "remember",
      title: "Le unità di misura delle superfici",
      html: `<p>Le misure di superficie \"saltano\" di <b>100 in 100</b>, perché un quadrato grande contiene 10 file da 10 quadrati piccoli:</p>
<p><b>1 m² = 100 dm² = 10.000 cm²</b></p>
<p><b>1 dm² = 100 cm²</b> &nbsp;&nbsp; <b>1 cm² = 100 mm²</b></p>
<p>Per i terreni si usano anche l'<b>ettaro</b> (1 ha = 10.000 m², circa un campo e mezzo da calcio) e il <b>km²</b> (1 km² = 1.000.000 m²).</p>`
    },
    {
      type: "curiosity",
      title: "Quanto è grande l'Italia?",
      html: `<p>L'Italia ha una superficie di circa <b>302.000 km²</b>. La regione più grande è la <b>Sicilia</b> (circa 25.800 km²), la più piccola è la <b>Valle d'Aosta</b> (circa 3.260 km²).</p>
<p>Lo Stato più piccolo del mondo, la <b>Città del Vaticano</b>, misura solo 0,44 km²: meno di 62 campi da calcio!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: area",
      questions: [
        { type: "num", q: "Area di un rettangolo con base 8 cm e altezza 5 cm?", answer: 40, tol: 0, unit: "cm²", explain: "A = 8 × 5 = 40 cm²." },
        { type: "num", q: "Area di un triangolo con base 10 cm e altezza 6 cm?", answer: 30, tol: 0, unit: "cm²", explain: "A = 10 × 6 : 2 = 30 cm²." },
        { type: "tf", q: "Due figure con lo stesso perimetro hanno sempre la stessa area.", answer: false, explain: "No: un rettangolo 6 × 2 e un quadrato 4 × 4 hanno lo stesso perimetro (16) ma aree diverse (12 e 16)." },
        { type: "num", q: "Quanti cm² ci sono in 1 dm²?", answer: 100, tol: 0, unit: "cm²", explain: "1 dm² = 10 cm × 10 cm = 100 cm²." }
      ]
    },
    {
      type: "3d",
      title: "Dall'area al volume: aggiungiamo i piani",
      scene: "blocks",
      options: { mode: "volume", a: 4, b: 3, c: 2 },
      caption: "Un rettangolo di 4 × 3 = 12 quadretti è la base. Se impili 2 piani di cubetti ottieni 12 × 2 = 24 cubetti: è il volume, che studierai alle medie. L'area conta i quadretti, il volume conta i cubetti."
    },
    {
      type: "conceptMap",
      title: "Mappa: dalle unità di misura alle formule",
      nodes: [
        { id: "unita", label: "Unità di misura", x: 50, y: 6, color: "#64748b", html: "Per misurare serve un campione uguale per tutti: il metro (m) e i suoi multipli e sottomultipli.", why: "Prima ogni città aveva le sue misure (piedi, braccia, palmi…) e nascevano liti nei commerci. Durante la Rivoluzione francese (1791-1799) fu inventato il metro, legato alla misura della Terra, e da allora il sistema metrico si è diffuso in quasi tutto il mondo." },
        { id: "lunghezza", label: "Lunghezza (cm, m)", x: 22, y: 26, color: "#3b82f6", html: "Misura di una linea: un lato, un contorno, una strada.", why: "Contiamo quante volte l'unità (per esempio 1 cm) sta lungo la linea." },
        { id: "quadratino", label: "Quadrato unitario (cm²)", x: 78, y: 26, color: "#f59e0b", html: "Un quadrato con il lato di 1 cm: la sua area è 1 cm².", why: "Per misurare una superficie ci serve un pezzetto di superficie come campione. Si sceglie il quadrato perché si incastra con altri quadrati senza lasciare buchi e copre tutto il piano." },
        { id: "perimetro", label: "Perimetro", x: 22, y: 48, color: "#2563eb", html: "Somma delle lunghezze di tutti i lati.", why: "È la lunghezza del contorno: basta sommare i pezzi. Nei poligoni regolari i lati sono uguali, quindi lato × numero dei lati." },
        { id: "rettangolo", label: "Area del rettangolo: b × h", x: 78, y: 48, color: "#ea580c", html: "Base per altezza.", why: "Nel rettangolo i quadratini si dispongono in righe e colonne: ci sono h righe di b quadratini, quindi b × h quadratini in tutto. È la moltiplicazione come schieramento!" },
        { id: "parall", label: "Parallelogramma: b × h", x: 55, y: 68, color: "#16a34a", html: "Stessa formula del rettangolo.", why: "Tagliando un triangolo e spostandolo si ottiene un rettangolo con la stessa base e la stessa altezza: l'area non cambia perché non si toglie né si aggiunge nulla (principio di equiscomponibilità)." },
        { id: "triangolo", label: "Triangolo: b × h : 2", x: 85, y: 76, color: "#dc2626", html: "Base per altezza diviso 2.", why: "Due triangoli uguali formano un parallelogramma: il triangolo ne è la metà." },
        { id: "trapezio", label: "Trapezio: (B + b) × h : 2", x: 30, y: 82, color: "#9333ea", html: "Somma delle basi per altezza diviso 2.", why: "Due trapezi uguali, uno capovolto, formano un parallelogramma con base B + b: il trapezio è la metà." },
        { id: "rombo", label: "Rombo: D × d : 2", x: 60, y: 94, color: "#0891b2", html: "Diagonale maggiore per diagonale minore diviso 2.", why: "Il rombo sta dentro un rettangolo con i lati uguali alle diagonali, e ne occupa esattamente la metà (i 4 triangolini fuori sono uguali ai 4 dentro)." }
      ],
      edges: [ ["unita", "lunghezza", "per le linee"], ["unita", "quadratino", "per le superfici"], ["lunghezza", "perimetro", "si sommano"], ["quadratino", "rettangolo", "si contano a righe"], ["rettangolo", "parall", "ritaglio"], ["parall", "triangolo", "metà"], ["parall", "trapezio", "metà di due trapezi"], ["rettangolo", "rombo", "metà"] ]
    }
  ],
  glossary: [
    { t: "Perimetro", d: "Lunghezza del contorno di una figura piana." },
    { t: "Area", d: "Misura della superficie racchiusa da una figura." },
    { t: "Poligono", d: "Figura piana chiusa delimitata da segmenti (lati)." },
    { t: "Base", d: "Il lato su cui \"appoggia\" la figura." },
    { t: "Altezza", d: "Segmento perpendicolare alla base che arriva al lato o vertice opposto." },
    { t: "Diagonale", d: "Segmento che unisce due vertici non consecutivi di un poligono." },
    { t: "Metro quadrato (m²)", d: "Area di un quadrato con il lato di 1 metro." },
    { t: "Equiestese", d: "Figure che hanno la stessa area, anche se hanno forma diversa." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il perimetro è…", options: ["la superficie della figura", "la lunghezza del contorno", "il numero dei lati", "l'altezza della figura"], answer: 1, explain: "Il perimetro è la lunghezza del contorno." },
      { type: "mc", q: "Qual è la formula dell'area del triangolo?", options: ["b × h", "b + h", "b × h : 2", "l × 3"], answer: 2, explain: "Il triangolo è metà di un parallelogramma: A = b × h : 2." },
      { type: "num", q: "Perimetro di un triangolo equilatero con lato 9 cm?", answer: 27, tol: 0, unit: "cm", explain: "P = 9 × 3 = 27 cm." },
      { type: "num", q: "Area di un quadrato con lato 6 m?", answer: 36, tol: 0, unit: "m²", explain: "A = 6 × 6 = 36 m²." },
      { type: "num", q: "Area di un rombo con diagonali di 10 cm e 6 cm?", answer: 30, tol: 0, unit: "cm²", explain: "A = D × d : 2 = 10 × 6 : 2 = 30 cm²." },
      { type: "num", q: "Area di un trapezio con basi 8 cm e 4 cm e altezza 5 cm?", answer: 30, tol: 0, unit: "cm²", explain: "A = (8 + 4) × 5 : 2 = 30 cm²." },
      { type: "tf", q: "L'area si misura in unità quadrate, come cm² o m².", answer: true, explain: "L'area misura una superficie: si usano unità quadrate." },
      { type: "num", q: "Un rettangolo ha area 24 cm² e base 6 cm. Quanto misura l'altezza?", answer: 4, tol: 0, unit: "cm", explain: "Formula inversa: h = A : b = 24 : 6 = 4 cm." },
      { type: "num", q: "Un quadrato ha perimetro 36 cm. Quanto misura il lato?", answer: 9, tol: 0, unit: "cm", explain: "Formula inversa: l = P : 4 = 36 : 4 = 9 cm." },
      { type: "mc", q: "Quale rettangolo ha l'area maggiore?", options: ["10 × 1", "5 × 2", "4 × 3", "6 × 1"], answer: 2, explain: "Aree: 10, 10, 12, 6. Il 4 × 3 vince con 12." },
      { type: "num", q: "Quanti m² ci sono in un ettaro?", answer: 10000, tol: 0, unit: "m²", explain: "1 ettaro = 10.000 m² (un quadrato di 100 m × 100 m)." }
    ],
    gen: [["perimRect", 1], ["areaRect", 1], ["areaTri", 1]]
  }
});

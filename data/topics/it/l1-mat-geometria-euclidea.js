TOPIC('it', {
  id: "l1-mat-geometria-euclidea",
  title: "Geometria euclidea: assiomi e triangoli",
  intro: "Quasi duemilatrecento anni fa, ad Alessandria d'Egitto, Euclide ebbe un'idea rivoluzionaria: partire da pochissime affermazioni accettate senza prova e <b>dedurre</b> tutto il resto con ragionamenti rigorosi. Nacque così il metodo ipotetico-deduttivo, base di tutta la matematica. In questa lezione vedi come funziona: gli <b>enti primitivi</b>, gli <b>assiomi e i postulati</b>, e il primo grande risultato, i <b>criteri di congruenza dei triangoli</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Euclide e il metodo deduttivo",
      html: `<p><b>Euclide</b> visse ad Alessandria d'Egitto intorno al 300 a.C. e scrisse gli <b>Elementi</b>, in 13 libri: un trattato che raccoglie e ordina la geometria greca (e un po' di teoria dei numeri) in modo sistematico. Per oltre duemila anni è stato il libro di testo di geometria per eccellenza, secondo per diffusione solo alla Bibbia.</p>
<p>Il metodo è questo:</p>
<ul>
<li><b>Enti primitivi</b>: concetti che non si definiscono, perché ogni definizione richiederebbe altre parole, a loro volta da definire, all'infinito. In geometria: <b>punto, retta, piano</b> (e "stare tra"). Li descriviamo con le loro proprietà, non con una definizione.</li>
<li><b>Definizioni</b>: dei nuovi concetti si spiega il significato usando concetti già noti (segmento, angolo, triangolo, bisettrice…).</li>
<li><b>Assiomi e postulati</b>: affermazioni che si accettano come vere senza dimostrarle. Euclide chiamava <i>nozioni comuni</i> quelle valide ovunque ("cose uguali alla stessa cosa sono uguali tra loro") e <i>postulati</i> quelle specifiche della geometria.</li>
<li><b>Teoremi</b>: affermazioni che si <b>dimostrano</b>, cioè si deducono con la logica da assiomi, postulati e teoremi già dimostrati.</li>
</ul>
<p>Un teorema si enuncia con una <b>ipotesi</b> (ciò che si suppone vero) e una <b>tesi</b> (ciò che si vuole provare). Se H è l'ipotesi e T la tesi, il teorema dice: "se H, allora T".</p>`
    },
    {
      type: "text",
      title: "I cinque postulati di Euclide",
      html: `<ol>
<li>Per due punti distinti passa una (e una sola) retta, ossia si può tracciare un segmento tra due punti.</li>
<li>Un segmento si può prolungare indefinitamente in linea retta.</li>
<li>Dati un centro e un raggio, si può descrivere una circonferenza.</li>
<li>Tutti gli angoli retti sono uguali tra loro.</li>
<li><b>Il quinto postulato</b>: se una retta che taglia altre due forma, da una stessa parte, angoli interni la cui somma è minore di due retti, le due rette, prolungate, si incontrano da quella parte. (Equivale, in forma moderna, a: "per un punto fuori da una retta passa <b>una sola</b> parallela a essa".)</li>
</ol>
<p>I primi quattro sembrano evidenti. Il quinto è lungo e complicato: per secoli i matematici hanno cercato di dimostrarlo a partire dagli altri, senza riuscirci. Ne parliamo nella lezione sulle rette parallele.</p>`
    },
    {
      type: "svg",
      title: "Perché il triangolo è speciale",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="34" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">Triangolo: rigido</text>
<polygon points="50,240 250,240 150,80" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<circle cx="50" cy="240" r="8" fill="#166534"/><circle cx="250" cy="240" r="8" fill="#166534"/><circle cx="150" cy="80" r="8" fill="#166534"/>
<text x="150" y="272" font-size="16" text-anchor="middle" fill="#14532d">tre lati fissati → forma fissata (LLL)</text>
<text x="430" y="34" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Quadrilatero: si deforma</text>
<polygon points="340,240 520,240 520,100 340,100" fill="#fed7aa" stroke="#9a3412" stroke-width="4"/>
<polygon points="340,240 520,240 560,100 380,100" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="340" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="100" r="8" fill="#9a3412"/><circle cx="340" cy="100" r="8" fill="#9a3412"/>
<text x="430" y="272" font-size="16" text-anchor="middle" fill="#7c2d12">quattro lati fissati, forma variabile</text>
</svg>`,
      caption: "Per questo i tralicci, i ponti e le gru sono fatti di triangoli: i triangoli non si deformano."
    },
    {
      type: "text",
      title: "Il triangolo e i suoi elementi",
      html: `<p>Un <b>triangolo</b> è la parte di piano delimitata da tre segmenti (<b>lati</b>) che uniscono tre punti non allineati (<b>vertici</b>). Ha tre <b>angoli interni</b>.</p>
<ul>
<li><b>Per i lati</b>: <b>scaleno</b> (tre lati diversi), <b>isoscele</b> (due lati uguali), <b>equilatero</b> (tre lati uguali).</li>
<li><b>Per gli angoli</b>: <b>acutangolo</b>, <b>rettangolo</b> (un angolo retto), <b>ottusangolo</b>.</li>
<li><b>Segmenti notevoli</b>: la <b>mediana</b> unisce un vertice col punto medio del lato opposto; la <b>bisettrice</b> divide a metà l'angolo; l'<b>altezza</b> è il segmento perpendicolare dal vertice alla retta del lato opposto. Le tre mediane si incontrano nel <b>baricentro</b>, le tre bisettrici nell'<b>incentro</b>, le tre altezze nell'<b>ortocentro</b>.</li>
</ul>
<p>Due figure sono <b>congruenti</b> se si possono sovrapporre con un movimento rigido (traslazione, rotazione, ribaltamento): stessa forma e stesse dimensioni. In un triangolo la congruenza richiede 6 uguaglianze (3 lati e 3 angoli), ma i <b>criteri</b> ci dicono che ne bastano <b>tre</b>, scelte bene.</p>
<p><b>Disuguaglianza triangolare</b>: in ogni triangolo ciascun lato è <b>minore della somma</b> degli altri due (e maggiore della loro differenza). Con tre bastoncini da 2, 3 e 7 cm non costruisci nessun triangolo: 2 + 3 &lt; 7!</p>`
    },
    {
      type: "remember",
      title: "I tre criteri di congruenza",
      html: `<p>Due triangoli sono congruenti se hanno ordinatamente congruenti:</p>
<ol>
<li><b>1° criterio (LAL)</b>: due lati e l'<b>angolo compreso</b> tra essi.</li>
<li><b>2° criterio (ALA)</b>: un lato e i <b>due angoli adiacenti</b> a esso.</li>
<li><b>3° criterio (LLL)</b>: i <b>tre lati</b>.</li>
</ol>
<p>⚠️ <b>Non sono criteri</b>: tre angoli uguali (triangoli simili ma di dimensioni diverse), due lati e un angolo <b>non compreso</b> (LLA: può esserci più di un triangolo possibile).</p>`
    },
    {
      type: "widget",
      title: "Quale criterio?",
      widget: "classify",
      options: { groups: ["1° criterio (LAL)", "2° criterio (ALA)", "3° criterio (LLL)", "Non basta"], items: [
        ["due lati e l'angolo compreso", 0],
        ["un lato e i due angoli adiacenti", 1],
        ["i tre lati", 2],
        ["tre angoli uguali", 3],
        ["due lati e un angolo non compreso", 3],
        ["AB = DE, BC = EF e angolo B = angolo E", 0],
        ["AB = DE, angolo A = D e angolo B = E", 1]
      ] },
      caption: "L'angolo deve essere compreso tra i due lati; il lato deve essere adiacente ai due angoli."
    },
    {
      type: "example",
      title: "Una dimostrazione: gli angoli alla base dell'isoscele",
      html: `<p><b>Teorema</b>: in un triangolo isoscele gli angoli alla base sono congruenti.</p>
<p><b>Ipotesi</b>: ABC con AC = BC. <b>Tesi</b>: angolo A = angolo B.</p>
<p><b>Dimostrazione</b>: traccio la bisettrice dell'angolo C, che incontra AB in D. Considero i triangoli ACD e BCD:</p>
<ul>
<li>AC = BC per ipotesi;</li>
<li>l'angolo ACD = angolo BCD perché CD è bisettrice;</li>
<li>CD è un lato in comune.</li>
</ul>
<p>Hanno due lati e l'angolo compreso congruenti: per il <b>1° criterio</b> ACD ≅ BCD. Quindi gli angoli corrispondenti, in A e in B, sono congruenti. <b>c.v.d.</b> (come volevasi dimostrare)</p>
<p>Questo teorema (Elementi, I.5) fu chiamato dai medievali <i>pons asinorum</i>, "ponte degli asini", perché era il primo scoglio dove si fermavano gli studenti meno bravi.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: assiomi e criteri",
      questions: [
        { type: "mc", q: "Quali sono gli enti primitivi della geometria?", options: ["Punto, retta e piano", "Triangolo, quadrato e cerchio", "Angolo, segmento e area"], answer: 0, explain: "Punto, retta e piano non si definiscono: si descrivono con gli assiomi." },
        { type: "tf", q: "Un postulato deve essere dimostrato prima di poter essere usato.", answer: false, explain: "Un postulato è un'affermazione accettata senza dimostrazione." },
        { type: "num", q: "Quanti sono i postulati di Euclide?", answer: 5, explain: "Cinque; il quinto è il celebre postulato delle parallele." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: misurare un fiume senza attraversarlo",
      html: `<p>Come misurare la larghezza AT di un fiume? Dalla riva dove ti trovi, in A, di fronte a un albero T sull'altra sponda:</p>
<ol>
<li>cammina lungo la riva in direzione perpendicolare a AT fino a un punto B e pianta un paletto;</li>
<li>prosegui per la stessa lunghezza fino a C (cioè AB = BC);</li>
<li>da C allontanati perpendicolarmente alla riva finché, guardando indietro, l'albero T e il paletto B risultano allineati con te: sei in D.</li>
</ol>
<p>I triangoli ABT e CBD hanno AB = CB, gli angoli in A e in C retti e gli angoli in B uguali perché opposti al vertice: per il <b>2° criterio</b> sono congruenti. Quindi CD = AT: la distanza che hai misurato a terra è la larghezza del fiume. Il disegno è nella scheda "Il fiume" tra le spiegazioni alternative.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il ponte degli asini e Talete",
      html: `<p>Il primo a dimostrare teoremi di geometria, secondo la tradizione, fu <b>Talete di Mileto</b> (VII–VI secolo a.C.). Si racconta che usasse proprio la congruenza dei triangoli per calcolare la distanza di una nave dalla costa, un'applicazione molto simile al problema del fiume. Euclide, tre secoli dopo, ordinò tutto in un sistema.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Hilbert e il rigore moderno",
      html: `<p>Gli <i>Elementi</i> di Euclide, pur geniali, hanno qualche buco logico: Euclide usa a volte cose "evidenti" dal disegno che non sono nei postulati. Nel 1899 il matematico tedesco <b>David Hilbert</b> pubblicò i <i>Grundlagen der Geometrie</i> ("Fondamenti della geometria") con un sistema di assiomi completo e senza lacune. Hilbert diceva che, al posto di punti, rette e piani, si potrebbero dire "tavoli, sedie e boccali di birra": ciò che conta sono le relazioni tra gli enti, non il loro nome.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la geometria euclidea",
      intro: "La geometria si capisce meglio con le mani e con il disegno. Prova queste strade.",
      tabs: [
        {
          label: "📏 Riga e compasso",
          html: `<p>Nel primo teorema degli <i>Elementi</i> (I.1) Euclide costruisce un <b>triangolo equilatero</b> su un segmento AB usando solo i primi tre postulati. Con il compasso (postulato 3) disegni la circonferenza di centro A e raggio AB, poi quella di centro B e raggio AB. Si incontrano in C, e AC = AB (raggi della prima), BC = AB (raggi della seconda): i tre lati sono uguali. Nessuna misura, solo logica!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="225" cy="190" r="90" fill="none" stroke="#6366f1" stroke-width="3"/>
<circle cx="315" cy="190" r="90" fill="none" stroke="#f97316" stroke-width="3"/>
<polygon points="225,190 315,190 270,112" fill="#fde68a" stroke="#1f2937" stroke-width="4"/>
<circle cx="225" cy="190" r="6" fill="#1f2937"/><circle cx="315" cy="190" r="6" fill="#1f2937"/><circle cx="270" cy="112" r="6" fill="#1f2937"/>
<text x="212" y="212" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="322" y="212" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="262" y="100" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="470" y="140" font-size="16" fill="#4338ca">AC = raggio del cerchio A</text>
<text x="470" y="170" font-size="16" fill="#c2410c">BC = raggio del cerchio B</text>
<text x="470" y="200" font-size="16" fill="#1f2937">AB = raggio di entrambi</text>
<text x="470" y="232" font-size="16" fill="#166534" font-weight="bold">→ ABC equilatero</text>
</svg>`
        },
        {
          label: "🌊 Il fiume (con il disegno)",
          html: `<p>Ecco lo schema del problema del fiume: i triangoli ABT e CBD sono "uno il rovescio dell'altro", ruotati di mezzo giro attorno a B. Se due triangoli si sovrappongono con una rotazione, sono congruenti.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="70" width="600" height="110" fill="#bae6fd"/>
<text x="500" y="125" font-size="18" fill="#0369a1" font-weight="bold">fiume</text>
<circle cx="150" cy="70" r="9" fill="#16a34a"/><text x="130" y="60" font-size="18" fill="#166534" font-weight="bold">T (albero)</text>
<line x1="150" y1="70" x2="150" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="180" x2="450" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="450" y1="180" x2="450" y2="280" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="70" x2="450" y2="280" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="150" cy="180" r="6" fill="#1f2937"/><circle cx="300" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="280" r="6" fill="#1f2937"/>
<text x="128" y="206" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="293" y="206" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="458" y="206" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="458" y="285" font-size="18" fill="#1f2937" font-weight="bold">D</text>
<text x="225" y="228" font-size="16" text-anchor="middle" fill="#1f2937">AB = BC</text>
<text x="105" y="130" font-size="16" fill="#1f2937">AT</text>
<text x="470" y="240" font-size="16" fill="#1f2937">CD = AT</text>
</svg>`
        },
        {
          label: "🥢 Con gli stecchini",
          html: `<p>Prendi stecchini o cannucce di lunghezza 3, 4 e 5 cm e uniscili alle estremità con un po' di pongo: otterrai <b>un solo triangolo possibile</b> (a parte il ribaltamento). Qualsiasi altro triangolo costruito con le stesse tre lunghezze si sovrappone al tuo: è il 3° criterio. Ora unisci quattro stecchini: il quadrilatero si schiaccia e cambia forma. Per questo basta una diagonale (un altro stecchino) per irrigidirlo, e per questo nei tralicci e nei ponti si vedono triangoli ovunque.</p>
<p>Prova anche a costruire con 2, 3 e 7 cm: non riesci, perché 2 + 3 &lt; 7 (disuguaglianza triangolare).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della geometria euclidea",
      nodes: [
        { id: "prim", label: "Enti primitivi", x: 50, y: 6, color: "#6366f1", html: "Punto, retta, piano: non si definiscono.", why: "Una definizione usa altre parole che a loro volta vanno definite: per non andare avanti all'infinito si parte da alcuni concetti presi come noti. Hilbert (1899) li lasciò volutamente 'senza nome'." },
        { id: "ass", label: "Assiomi e postulati", x: 20, y: 28, color: "#f59e0b", html: "Verità accettate senza dimostrazione.", why: "Servono perché ogni dimostrazione parte da qualcosa di già ammesso. Euclide ne scelse pochi e semplici: i cinque postulati e le nozioni comuni." },
        { id: "def", label: "Definizioni", x: 80, y: 28, color: "#16a34a", html: "Si spiegano nuovi concetti con quelli già noti.", why: "Danno nomi precisi (triangolo, bisettrice…) usando solo ciò che è già stato introdotto." },
        { id: "teo", label: "Teoremi e dimostrazioni", x: 50, y: 52, color: "#a855f7", html: "Ipotesi → tesi, con deduzioni logiche.", why: "Il metodo ipotetico-deduttivo, già in Talete e Pitagora e portato a sistema da Euclide, garantisce che una verità sia certa quanto i postulati da cui deriva." },
        { id: "cong", label: "Congruenza", x: 20, y: 76, color: "#0ea5e9", html: "Stessa forma e stesse dimensioni: figure sovrapponibili.", why: "Euclide la introduce con la 'sovrapposizione' (un movimento rigido); Hilbert la prende come relazione primitiva con assiomi propri." },
        { id: "crit", label: "Criteri sui triangoli", x: 50, y: 92, color: "#ef4444", html: "LAL, ALA, LLL.", why: "Derivano dai postulati: dati tre elementi opportuni, il triangolo è univocamente determinato. È il fondamento della triangolazione usata da topografi e navigatori." },
        { id: "isos", label: "Triangolo isoscele", x: 85, y: 76, color: "#22c55e", html: "Angoli alla base congruenti (e viceversa).", why: "È il primo teorema 'vero' del libro I (pons asinorum): si dimostra con il 1° criterio." },
        { id: "v", label: "Quinto postulato", x: 85, y: 52, color: "#14b8a6", html: "Condizione per cui due rette si incontrano; equivale all'unicità della parallela.", why: "Negarlo porta alle geometrie non euclidee (Lobachevskij, Bolyai, Riemann nell'Ottocento): un'altra geometria, altrettanto coerente." }
      ],
      edges: [
        ["prim", "ass", "descritti da"],
        ["prim", "def", "base di"],
        ["ass", "teo", "premesse di"],
        ["def", "teo", "linguaggio di"],
        ["teo", "cong", "studia"],
        ["cong", "crit", "si verifica con"],
        ["crit", "isos", "dimostra"],
        ["ass", "v", "include"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: triangoli",
      questions: [
        { type: "mc", q: "Due triangoli hanno i tre lati rispettivamente congruenti. Sono congruenti per…", options: ["il 1° criterio", "il 2° criterio", "il 3° criterio"], answer: 2, explain: "Tre lati congruenti: criterio LLL, il terzo." },
        { type: "tf", q: "Due triangoli con i tre angoli rispettivamente uguali sono sempre congruenti.", answer: false, explain: "Possono avere la stessa forma ma dimensioni diverse (sono simili, non congruenti)." },
        { type: "num", q: "Un triangolo isoscele ha l'angolo al vertice di 40°. Quanto misura ciascun angolo alla base? (La somma degli angoli interni è 180°.)", answer: 70, unit: "°", explain: "(180 − 40)/2 = 70° ciascuno." }
      ]
    }
  ],
  glossary: [
    { t: "Ente primitivo", d: "Concetto che non si definisce (punto, retta, piano)." },
    { t: "Assioma / postulato", d: "Affermazione accettata senza dimostrazione." },
    { t: "Teorema", d: "Affermazione dimostrata a partire da assiomi e teoremi già noti." },
    { t: "Ipotesi e tesi", d: "L'ipotesi è ciò che si suppone vero; la tesi è ciò che si vuole dimostrare." },
    { t: "Congruenza", d: "Relazione tra figure sovrapponibili con un movimento rigido." },
    { t: "Criteri di congruenza", d: "Condizioni minime (LAL, ALA, LLL) che garantiscono la congruenza di due triangoli." },
    { t: "Triangolo isoscele", d: "Triangolo con almeno due lati congruenti." },
    { t: "Mediana, bisettrice, altezza", d: "Segmenti notevoli di un triangolo: verso il punto medio del lato opposto, che dimezza l'angolo, perpendicolare al lato opposto." },
    { t: "Disuguaglianza triangolare", d: "Ogni lato di un triangolo è minore della somma degli altri due." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché punto, retta e piano sono enti primitivi?", options: ["Perché non si definiscono: ogni definizione richiederebbe altri termini da definire", "Perché sono i più semplici da disegnare", "Perché sono stati dimostrati per primi"], answer: 0, explain: "Sono i concetti di partenza della teoria, descritti dagli assiomi." },
      { type: "tf", q: "Un postulato è un'affermazione accettata senza dimostrazione.", answer: true, explain: "Assiomi e postulati sono il punto di partenza delle dimostrazioni." },
      { type: "text", q: "Chi scrisse gli Elementi intorno al 300 a.C.?", answer: ["euclide"], explain: "Euclide, ad Alessandria d'Egitto." },
      { type: "mc", q: "Il 1° criterio di congruenza dei triangoli richiede…", options: ["due lati e l'angolo compreso", "due lati e un angolo qualsiasi", "tre angoli"], answer: 0, explain: "LAL: due lati e l'angolo tra essi compreso." },
      { type: "mc", q: "Il 2° criterio richiede…", options: ["un lato e i due angoli adiacenti", "tre lati", "due angoli e due lati"], answer: 0, explain: "ALA: un lato e i due angoli ad esso adiacenti." },
      { type: "num", q: "Un triangolo isoscele ha perimetro 40 cm e base 12 cm. Quanto misura ciascun lato obliquo?", answer: 14, unit: "cm", explain: "(40 − 12)/2 = 14 cm." },
      { type: "order", q: "Metti in ordine i passi di una dimostrazione.", items: ["Scrivere l'ipotesi", "Scrivere la tesi", "Fare il disegno e individuare i triangoli da confrontare", "Applicare un criterio di congruenza", "Concludere"], explain: "Si parte da ipotesi e tesi, poi si costruisce la catena di deduzioni." },
      { type: "mc", q: "Perché nei tralicci si usano triangoli?", options: ["Perché con tre lati fissati la forma non si può deformare (3° criterio)", "Perché sono più economici dei quadrati", "Perché hanno gli angoli più grandi"], answer: 0, explain: "Il triangolo è l'unico poligono rigido." },
      { type: "tf", q: "In un triangolo isoscele gli angoli alla base sono congruenti.", answer: true, explain: "Si dimostra con il 1° criterio tracciando la bisettrice dell'angolo al vertice." },
      { type: "num", q: "Un triangolo ha due lati di 3 cm e 5 cm; il terzo è un numero intero di cm. Qual è il massimo valore possibile?", answer: 7, unit: "cm", explain: "Il terzo lato deve essere minore di 3 + 5 = 8 e maggiore di 5 − 3 = 2: il massimo intero è 7." }
    ]
  }
});

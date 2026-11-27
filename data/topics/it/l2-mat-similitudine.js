TOPIC('it', {
  id: "l2-mat-similitudine",
  title: "Similitudine e teorema di Talete",
  intro: "Come si misura l'altezza di una piramide o di un grattacielo senza salirci sopra? Come fa una mappa a stare in un foglio senza che la città cambi forma? La risposta è la <b>similitudine</b>: due figure sono simili quando hanno la <b>stessa forma</b> ma non necessariamente la stessa grandezza. In questa lezione incontri il <b>teorema di Talete</b>, i <b>criteri di similitudine dei triangoli</b> e le loro applicazioni, dall'ombra dell'asta alla scala delle carte geografiche.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Proporzioni tra segmenti",
      html: `<p>Due segmenti AB e CD hanno un <b>rapporto</b> AB / CD (un numero senza unità di misura, se i due segmenti sono misurati con la stessa unità). Quattro segmenti formano una <b>proporzione</b> se AB : CD = EF : GH, cioè se i due rapporti sono uguali. La proprietà fondamentale: <b>il prodotto dei medi è uguale al prodotto degli estremi</b>, AB · GH = CD · EF.</p>
<p>Altre proprietà utili delle proporzioni, per a : b = c : d:</p>
<ul>
<li><b>Permutare</b>: a : c = b : d (scambio dei medi).</li>
<li><b>Invertire</b>: b : a = d : c.</li>
<li><b>Comporre</b>: (a + b) : a = (c + d) : c, e <b>scomporre</b>: (a − b) : a = (c − d) : c.</li>
</ul>
<p>Due grandezze sono <b>direttamente proporzionali</b> se il loro rapporto è costante: raddoppiando una, raddoppia l'altra. Nella similitudine, tutte le lunghezze corrispondenti sono proporzionali con lo stesso rapporto.</p>`
    },
    {
      type: "text",
      title: "Il teorema di Talete",
      html: `<p><b>Un fascio di rette parallele</b> tagliate da due trasversali determina su di esse segmenti corrispondenti <b>proporzionali</b>.</p>
<p>In simboli, se le parallele a, b, c tagliano la trasversale r in A, B, C e la trasversale s in A', B', C', allora:</p>
<p style="text-align:center"><b>AB : BC = A'B' : B'C'</b></p>
<p>Equivalente: AB : A'B' = BC : B'C' = AC : A'C'. In particolare, se le parallele determinano segmenti congruenti su una trasversale, determinano segmenti congruenti anche sull'altra (per esempio il punto medio di un lato e la parallela alla base nei triangoli).</p>
<p><b>Conseguenza nei triangoli</b>: una retta parallela a un lato di un triangolo divide gli altri due lati in parti proporzionali. Con una retta parallela alla base BC che taglia AB in D e AC in E: AD : DB = AE : EC e AD : AB = AE : AC.</p>
<p><b>Il teorema vale anche al contrario</b>: se una retta divide due lati di un triangolo in parti proporzionali, essa è parallela al terzo lato.</p>
<p>Il teorema porta il nome di <b>Talete di Mileto</b> (VII–VI secolo a.C.), ma nelle sue forme più generali si trova negli <i>Elementi</i> di Euclide (libro VI, proposizione 2).</p>`
    },
    {
      type: "svg",
      title: "Parallele e trasversali",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="30" y1="60" x2="560" y2="60" stroke="#4338ca" stroke-width="3"/>
<line x1="30" y1="150" x2="560" y2="150" stroke="#4338ca" stroke-width="3"/>
<line x1="30" y1="250" x2="560" y2="250" stroke="#4338ca" stroke-width="3"/>
<text x="540" y="50" font-size="16" fill="#4338ca" font-weight="bold">a</text>
<text x="540" y="140" font-size="16" fill="#4338ca" font-weight="bold">b</text>
<text x="540" y="240" font-size="16" fill="#4338ca" font-weight="bold">c</text>
<line x1="100" y1="60" x2="184" y2="250" stroke="#dc2626" stroke-width="4"/>
<line x1="330" y1="60" x2="457" y2="250" stroke="#166534" stroke-width="4"/>
<circle cx="100" cy="60" r="6" fill="#dc2626"/><circle cx="140" cy="150" r="6" fill="#dc2626"/><circle cx="184" cy="250" r="6" fill="#dc2626"/>
<circle cx="330" cy="60" r="6" fill="#166534"/><circle cx="390" cy="150" r="6" fill="#166534"/><circle cx="457" cy="250" r="6" fill="#166534"/>
<text x="74" y="52" font-size="16" fill="#b91c1c" font-weight="bold">A</text>
<text x="114" y="142" font-size="16" fill="#b91c1c" font-weight="bold">B</text>
<text x="158" y="272" font-size="16" fill="#b91c1c" font-weight="bold">C</text>
<text x="338" y="52" font-size="16" fill="#166534" font-weight="bold">A'</text>
<text x="398" y="142" font-size="16" fill="#166534" font-weight="bold">B'</text>
<text x="465" y="272" font-size="16" fill="#166534" font-weight="bold">C'</text>
<text x="215" y="104" font-size="16" fill="#1f2937" font-weight="bold">AB : BC = A'B' : B'C'</text>
</svg>`,
      caption: "Le tre parallele a, b, c dividono le due trasversali (rossa e verde) in segmenti proporzionali."
    },
    {
      type: "example",
      title: "Esempi con Talete",
      html: `<p><b>1.</b> Tre rette parallele tagliano due trasversali. Su una, i segmenti misurano AB = 6 cm e BC = 9 cm; sull'altra, A'B' = 8 cm. Quanto vale B'C'? Dalla proporzione 6 : 9 = 8 : x si ha x = 9 · 8 / 6 = <b>12 cm</b>.</p>
<p><b>2.</b> In un triangolo ABC, una retta parallela a BC incontra AB in D e AC in E. Sappiamo AD = 4, DB = 6 e AE = 5. Per Talete AD : DB = AE : EC, cioè 4 : 6 = 5 : EC; quindi EC = 6 · 5 / 4 = <b>7,5</b>.</p>
<p><b>3. Dividere un segmento in parti uguali</b>. Per dividere un segmento AB in 5 parti congruenti con riga e compasso, traccia da A una semiretta qualsiasi, riporta su di essa 5 segmenti uguali, unisci l'ultimo punto con B e traccia le <b>parallele</b> a questa retta dai punti intermedi. Per Talete dividono anche AB in 5 parti uguali.</p>`
    },
    {
      type: "text",
      title: "Figure simili e rapporto di similitudine",
      html: `<p>Due poligoni sono <b>simili</b> se hanno gli <b>angoli ordinatamente congruenti</b> e i <b>lati corrispondenti in proporzione</b>. Il rapporto costante tra i lati corrispondenti si chiama <b>rapporto di similitudine</b> k. Se k = 1 le figure sono congruenti. Due circonferenze sono sempre simili (k = rapporto dei raggi); due quadrati sono sempre simili; due rettangoli no, in generale.</p>
<p>Che cosa cambia quando si ingrandisce di k?</p>
<ul>
<li>Le <b>lunghezze</b> (lati, perimetri, altezze, diagonali, raggi) si moltiplicano per <b>k</b>.</li>
<li>Gli <b>angoli</b> non cambiano.</li>
<li>Le <b>aree</b> si moltiplicano per <b>k²</b>.</li>
<li>I <b>volumi</b> (solidi simili) si moltiplicano per <b>k³</b>.</li>
</ul>
<p>Perché k²? Se ingrandisci un quadrato di lato l con k = 3, il lato diventa 3l e l'area passa da l² a 9l²: stanno 9 copie del quadratino originario. Un ingrandimento 2× di una foto non raddoppia la carta, la quadruplica.</p>`
    },
    {
      type: "remember",
      title: "I tre criteri di similitudine dei triangoli",
      html: `<p>Due triangoli sono simili se hanno:</p>
<ol>
<li><b>1° criterio (AA)</b>: <b>due angoli</b> ordinatamente congruenti (il terzo lo è di conseguenza, perché la somma è 180°).</li>
<li><b>2° criterio (LAL)</b>: <b>due lati proporzionali</b> e l'<b>angolo compreso</b> congruente.</li>
<li><b>3° criterio (LLL)</b>: i <b>tre lati</b> in proporzione.</li>
</ol>
<p>I criteri di similitudine sono la "versione proporzionale" dei criteri di congruenza. Il primo (AA) è il più usato: per riconoscere due triangoli simili spesso basta trovare due angoli uguali, per esempio perché i lati sono paralleli o per angoli opposti al vertice.</p>
<p>⚠️ <b>Attenzione</b>: nei triangoli simili la proporzione tra i lati deve usare i lati <b>corrispondenti</b>, cioè quelli opposti ad angoli uguali.</p>`
    },
    {
      type: "widget",
      title: "Simili o no?",
      widget: "classify",
      options: { groups: ["Sicuramente simili", "Non necessariamente simili"], items: [
        ["Due triangoli con due angoli uguali (50° e 60°)", 0],
        ["Due triangoli equilateri qualsiasi", 0],
        ["Due rettangoli qualsiasi", 1],
        ["Due quadrati qualsiasi", 0],
        ["Due rombi con un lato uguale", 1],
        ["Due circonferenze qualsiasi", 0],
        ["Due triangoli isosceli", 1],
        ["Due triangoli rettangoli con un angolo acuto di 30°", 0]
      ] },
      caption: "Nei triangoli bastano i criteri (per esempio due angoli uguali); nei poligoni con più di 3 lati servono insieme angoli congruenti e lati proporzionali."
    },
    {
      type: "svg",
      title: "Due triangoli simili",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="40,250 200,250 80,150" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<polygon points="260,250 580,250 340,50" fill="#fed7aa" stroke="#c2410c" stroke-width="4"/>
<path d="M 64,250 A 24,24 0 0 0 54,226" fill="none" stroke="#166534" stroke-width="3"/>
<path d="M 300,250 A 40,40 0 0 0 282,220" fill="none" stroke="#c2410c" stroke-width="3"/>
<path d="M 184,250 A 16,16 0 0 1 188,238" fill="none" stroke="#166534" stroke-width="3"/>
<path d="M 540,250 A 40,40 0 0 1 553,223" fill="none" stroke="#c2410c" stroke-width="3"/>
<text x="120" y="276" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">lato 160 px</text>
<text x="420" y="276" font-size="16" text-anchor="middle" fill="#c2410c" font-weight="bold">lato 320 px</text>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">k = 320 / 160 = 2</text>
<text x="210" y="120" font-size="16" fill="#1f2937">stessi angoli, lati ×2</text>
<text x="210" y="145" font-size="16" fill="#1f2937">area ×4, perimetro ×2</text>
</svg>`,
      caption: "Il triangolo arancione è l'ingrandimento 2:1 di quello verde: gli angoli non cambiano, le lunghezze raddoppiano, le aree quadruplicano."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Talete e similitudine",
      questions: [
        { type: "num", q: "Due triangoli simili hanno rapporto di similitudine 3. Il perimetro del più piccolo è 14 cm. Quanto misura il perimetro del più grande?", answer: 42, unit: "cm", explain: "I perimetri sono nello stesso rapporto dei lati: 14 · 3 = 42 cm." },
        { type: "num", q: "Il rapporto di similitudine tra due poligoni è 4. L'area del più piccolo è 5 cm². Quanto vale l'area del più grande?", answer: 80, unit: "cm²", explain: "Le aree stanno nel rapporto k² = 16: 5 · 16 = 80 cm²." },
        { type: "tf", q: "Due triangoli che hanno due angoli congruenti sono sicuramente simili.", answer: true, explain: "È il primo criterio di similitudine (AA): il terzo angolo è automaticamente congruente." },
        { type: "mc", q: "Nel triangolo ABC una retta parallela a BC incontra AB in D e AC in E. Quale proporzione è corretta?", options: ["AD : DB = AE : EC", "AD : DB = EC : AE", "AD : AB = EC : AC"], answer: 0, explain: "Per il teorema di Talete: AD : DB = AE : EC, oppure AD : AB = AE : AC." }
      ]
    },
    {
      type: "text",
      title: "Applicazioni: la similitudine nel mondo reale",
      html: `<ul>
<li><b>Misurare altezze inaccessibili</b>. Se una persona alta 1,5 m proietta un'ombra di 2 m, e nello stesso momento un albero proietta un'ombra di 6 m, i raggi del Sole sono paralleli e i due triangoli (oggetto-ombra) hanno gli stessi angoli (AA): sono simili. Quindi h : 6 = 1,5 : 2 e h = 6 · 1,5 / 2 = <b>4,5 m</b>.</li>
<li><b>Carte geografiche e plastici</b>: una mappa in scala 1 : 25 000 è simile al territorio con k = 1/25 000. 4 cm sulla carta sono 4 · 25 000 = 100 000 cm = 1 km. Le <b>aree</b> in scala si dividono per k²: 1 cm² sulla carta rappresenta 625 000 000 cm² = 62 500 m².</li>
<li><b>Il metodo dello specchio</b>: metti uno specchio piano a terra, allontanati finché vedi in esso la cima dell'edificio. Il raggio che arriva e quello che riparte formano angoli uguali con il piano (legge della riflessione): i triangoli oggetto-specchio e occhio-specchio sono simili.</li>
<li><b>Fotocopie e proiettori</b>: un ingrandimento 141 % (√2) trasforma un foglio A4 in un A3. L'area raddoppia perché k² = 2: per questo i formati della serie A hanno lo stesso rapporto tra i lati, pari a √2.</li>
</ul>`
    },
    {
      type: "text",
      title: "Teorema della bisettrice e legame con Euclide",
      html: `<p><b>Teorema della bisettrice (interna)</b>: la bisettrice di un angolo di un triangolo divide il lato opposto in due segmenti <b>proporzionali agli altri due lati</b>. Se AD è bisettrice dell'angolo in A del triangolo ABC (D su BC): <b>BD : DC = AB : AC</b>.</p>
<p><b>Il collegamento con Euclide</b>: in un triangolo rettangolo ABC (retto in A), l'altezza AH relativa all'ipotenusa lo divide in due triangoli ABH e ACH. Hanno un angolo retto in H e condividono un angolo acuto con ABC: quindi sono <b>simili a ABC</b> (AA) e simili tra loro. Dalle proporzioni dei lati corrispondenti si ottengono i teoremi di Euclide:</p>
<ul>
<li>ABC ~ HBA: BC : AB = AB : BH, cioè <b>c : a = a : p</b>, da cui a² = c · p (1° teorema).</li>
<li>HBA ~ HAC: BH : AH = AH : HC, cioè <b>p : h = h : q</b>, da cui h² = p · q (2° teorema).</li>
</ul>
<p>Così la similitudine dimostra in poche righe quello che Euclide ottiene con l'equivalenza, e di qui si ricava anche il teorema di Pitagora.</p>`
    },
    {
      type: "example",
      title: "Esempio: la bisettrice",
      html: `<p>In un triangolo ABC si ha AB = 6 cm, AC = 9 cm e BC = 10 cm. La bisettrice dell'angolo in A incontra BC in D. Calcola BD e DC.</p>
<p>Per il teorema: BD : DC = 6 : 9 = 2 : 3, e BD + DC = 10. Dividendo 10 in parti 2 e 3: BD = 10 · 2 / 5 = <b>4 cm</b> e DC = 10 · 3 / 5 = <b>6 cm</b>.</p>
<p><b>Verifica pratica</b>: la bisettrice divide il lato in parti più corte dalla parte del lato più corto (AB è il minore: BD è la parte minore).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Talete e la piramide",
      html: `<p>Secondo la tradizione, raccontata tra gli altri da <b>Diogene Laerzio</b> e <b>Plutarco</b>, Talete di Mileto misurò l'altezza della piramide di Cheope in Egitto: aspettò il momento della giornata in cui la sua ombra era uguale alla sua statura, e in quell'istante misurò l'ombra della piramide (aggiungendo metà del lato di base, perché l'ombra parte dal centro). Se l'ombra è lunga quanto l'altezza, il triangolo ombra-oggetto è un triangolo rettangolo isoscele: i due triangoli sono simili e l'altezza della piramide è uguale alla sua ombra. Un caso speciale di proporzione molto elegante!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le leggi di scala degli animali",
      html: `<p>Perché non esistono insetti grandi come elefanti o formiche giganti come nei film? Per la <b>legge dei quadrati e dei cubi</b>. Se un animale venisse ingrandito di k, la sua massa crescerebbe come k³ (il volume), ma la sezione delle sue ossa e muscoli, che ne determina la resistenza, solo come k². Il rapporto peso/resistenza peggiorerebbe di k: le zampe cederebbero. Lo notò già <b>Galileo</b> nei <i>Discorsi e dimostrazioni matematiche intorno a due nuove scienze</i> (1638): per sostenere un corpo più grande occorre un'ossatura sproporzionatamente più grossa. Per questo gli elefanti hanno zampe tozze e le formiche sottili.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la similitudine",
      intro: "Se le proporzioni ti sembrano astratte, prova a vederle con l'occhio o con le mani.",
      tabs: [
        {
          label: "📷 Lo zoom",
          html: `<p>Pensa a una foto che ingrandisci con lo zoom del telefono: tutto si allarga allo stesso modo, nessun angolo cambia, il viso rimane quello. Questa è la similitudine: un ingrandimento (o rimpicciolimento) con un <b>rapporto di scala</b> uguale in tutte le direzioni. Se invece stiracchi l'immagine solo in orizzontale, la faccia si deforma: non c'è più similitudine, perché i rapporti non sono uguali ovunque.</p>
<p>Vale anche per le lunghezze reali: se sulla mappa vedi 3 cm tra due città e la scala è 1 : 500 000, la distanza vera è 3 · 500 000 = 1 500 000 cm = 15 km.</p>`
        },
        {
          label: "🌞 L'ombra",
          html: `<p>Disegna un'asta e la sua ombra, poi un albero e la sua ombra: i raggi solari sono paralleli, quindi gli angoli sono gli stessi e i due triangoli sono simili. L'asta di 1,5 m ha l'ombra di 2 m; l'albero ha l'ombra di 6 m; l'altezza dell'albero segue dalla proporzione h : 1,5 = 6 : 2.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="240" width="600" height="60" fill="#d9f99d"/>
<circle cx="560" cy="40" r="22" fill="#facc15"/>
<line x1="80" y1="180" x2="160" y2="240" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"/>
<line x1="250" y1="60" x2="490" y2="240" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"/>
<line x1="80" y1="240" x2="80" y2="180" stroke="#92400e" stroke-width="7"/>
<line x1="80" y1="240" x2="160" y2="240" stroke="#475569" stroke-width="6"/>
<line x1="250" y1="240" x2="250" y2="60" stroke="#166534" stroke-width="10"/>
<circle cx="250" cy="60" r="26" fill="#22c55e"/>
<line x1="250" y1="240" x2="490" y2="240" stroke="#475569" stroke-width="6"/>
<text x="40" y="168" font-size="16" fill="#92400e" font-weight="bold">1,5 m</text>
<text x="96" y="266" font-size="16" fill="#1f2937" font-weight="bold">2 m</text>
<text x="262" y="150" font-size="16" fill="#166534" font-weight="bold">h = ?</text>
<text x="360" y="266" font-size="16" fill="#1f2937" font-weight="bold">6 m</text>
<text x="320" y="110" font-size="16" fill="#1f2937">h : 1,5 = 6 : 2 → h = 4,5 m</text>
</svg>`
        },
        {
          label: "🧊 Con i solidi 3D",
          html: `<p>Cubi, sfere e cilindri di dimensioni diverse sono simili quando le proporzioni sono le stesse. Prova a cambiare solido con i pulsanti e immagina di raddoppiarne tutte le misure: la superficie quadruplica (k² = 4) e il volume diventa 8 volte più grande (k³ = 8). Per questo una pizza grande il doppio ha un'area quattro volte maggiore: se paghi la pizza grande solo il doppio, ci guadagni!</p>`,
          scene: "solid",
          options: { shape: "cube", color: "#6366f1", labels: true, shapes: ["cube", "cylinder", "cone", "sphere", "pyramid"] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: la similitudine",
      nodes: [
        { id: "prop", label: "Proporzioni", x: 50, y: 6, color: "#6366f1", html: "Uguaglianza tra due rapporti: a : b = c : d.", why: "Per i Greci i rapporti tra grandezze erano la base della geometria: la teoria delle proporzioni di Eudosso (IV secolo a.C.) permette di trattare anche rapporti incommensurabili. Euclide la espone nel libro V." },
        { id: "tal", label: "Teorema di Talete", x: 20, y: 30, color: "#f59e0b", html: "Parallele tagliano trasversali in segmenti proporzionali.", why: "È la proprietà che 'trasferisce' un rapporto lungo il fascio: nasce dall'osservazione che parallele equidistanti individuano parti uguali. Su di esso si fonda la teoria della similitudine." },
        { id: "sim", label: "Figure simili", x: 80, y: 30, color: "#16a34a", html: "Stessi angoli e lati in proporzione con rapporto k.", why: "Formalizza l'idea di 'stessa forma': ingrandimenti e riduzioni. Permette di studiare un oggetto grande con un modello piccolo (mappe, plastici, modelli in galleria del vento)." },
        { id: "crit", label: "Criteri per i triangoli", x: 50, y: 54, color: "#a855f7", html: "AA, LAL, LLL.", why: "Sono la controparte dei criteri di congruenza, con 'uguale' sostituito da 'proporzionale'. Basta il solo AA perché la somma degli angoli è 180°." },
        { id: "k", label: "Rapporti: k, k², k³", x: 80, y: 76, color: "#ef4444", html: "Lunghezze ×k, aree ×k², volumi ×k³.", why: "Le aree dipendono da due dimensioni, i volumi da tre. È la legge di scala di Galileo: spiega la forma degli animali e dei ponti." },
        { id: "euc", label: "Teoremi di Euclide", x: 20, y: 76, color: "#0ea5e9", html: "Si ricavano dalla similitudine dei triangoli ABC, HBA, HAC.", why: "L'altezza sull'ipotenusa genera due triangoli simili al primo: dai rapporti dei lati nascono a² = c·p e h² = p·q, e da questi Pitagora." },
        { id: "app", label: "Applicazioni", x: 50, y: 92, color: "#14b8a6", html: "Ombre, mappe, specchi, rilievi.", why: "La topografia (misura del territorio) usa la triangolazione: dalla base misurata a terra si calcolano distanze inaccessibili con triangoli simili." }
      ],
      edges: [
        ["prop", "tal", "è alla base di"],
        ["prop", "sim", "definisce"],
        ["tal", "crit", "dimostra"],
        ["sim", "crit", "si verifica con"],
        ["crit", "euc", "dimostra"],
        ["sim", "k", "implica"],
        ["crit", "app", "usati per"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: applicazioni",
      questions: [
        { type: "num", q: "Un palo alto 2 m proietta un'ombra di 3 m. Nello stesso istante un edificio proietta un'ombra di 24 m. Quanto è alto l'edificio?", answer: 16, unit: "m", explain: "h : 2 = 24 : 3, quindi h = 2 · 24 / 3 = 16 m." },
        { type: "num", q: "In scala 1 : 50 000, quanti chilometri reali sono rappresentati da 6 cm sulla carta?", answer: 3, unit: "km", explain: "6 · 50 000 = 300 000 cm = 3 000 m = 3 km." },
        { type: "num", q: "Nel triangolo ABC, la bisettrice AD divide BC in BD e DC con AB = 8 e AC = 12. Se BC = 15, quanto misura BD?", answer: 6, unit: "", explain: "BD : DC = AB : AC = 8 : 12 = 2 : 3; BD = 15 · 2/5 = 6." }
      ]
    }
  ],
  glossary: [
    { t: "Proporzione", d: "Uguaglianza tra due rapporti: a : b = c : d." },
    { t: "Teorema di Talete", d: "Un fascio di parallele determina su due trasversali segmenti corrispondenti proporzionali." },
    { t: "Figure simili", d: "Figure con angoli corrispondenti congruenti e lati corrispondenti proporzionali." },
    { t: "Rapporto di similitudine", d: "Il rapporto k costante tra i lati corrispondenti di due figure simili." },
    { t: "Criteri di similitudine", d: "AA (due angoli), LAL (due lati proporzionali e angolo compreso), LLL (tre lati proporzionali)." },
    { t: "Teorema della bisettrice", d: "La bisettrice divide il lato opposto in parti proporzionali agli altri due lati." },
    { t: "Scala", d: "Rapporto tra una lunghezza sul disegno e la lunghezza reale (per esempio 1 : 25 000)." },
    { t: "Lati corrispondenti", d: "In due triangoli simili sono i lati opposti ad angoli congruenti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il teorema di Talete afferma che un fascio di rette parallele…", options: ["divide le trasversali in segmenti proporzionali", "è sempre perpendicolare alle trasversali", "forma triangoli congruenti"], answer: 0, explain: "I segmenti corrispondenti sulle due trasversali sono in proporzione." },
      { type: "num", q: "Tre parallele determinano su una trasversale AB = 4 e BC = 10; sull'altra A'B' = 6. Quanto vale B'C'?", answer: 15, unit: "", explain: "4 : 10 = 6 : x, quindi x = 10 · 6 / 4 = 15." },
      { type: "tf", q: "Due triangoli equilateri sono sempre simili.", answer: true, explain: "Hanno tutti gli angoli di 60°: per il criterio AA sono simili." },
      { type: "num", q: "Due poligoni simili hanno rapporto di similitudine 5. L'area del più piccolo è 4 cm². Quanto vale l'area del più grande?", answer: 100, unit: "cm²", explain: "Le aree stanno nel rapporto k² = 25: 4 · 25 = 100 cm²." },
      { type: "num", q: "I lati di un triangolo misurano 3, 4 e 5 cm. Un triangolo simile ha il lato maggiore di 15 cm. Quanto misura il suo perimetro?", answer: 36, unit: "cm", explain: "k = 15 / 5 = 3; il perimetro originale è 12 cm: 12 · 3 = 36 cm." },
      { type: "mc", q: "Un'asta alta 1 m proietta un'ombra di 0,8 m. Un albero ha ombra di 12 m. Quanto è alto?", options: ["9,6 m", "15 m", "12,8 m"], answer: 1, explain: "h : 1 = 12 : 0,8, quindi h = 15 m." },
      { type: "tf", q: "Nel triangolo ABC una retta parallela a BC che incontra AB in D e AC in E dà AD : AB = AE : AC.", answer: true, explain: "È una forma del teorema di Talete (e anche conseguenza della similitudine ADE ~ ABC)." },
      { type: "num", q: "In scala 1 : 200 000, quanti centimetri sulla carta corrispondono a 8 km reali?", answer: 4, unit: "cm", explain: "8 km = 800 000 cm; diviso 200 000 = 4 cm." },
      { type: "text", q: "Quale criterio di similitudine dei triangoli richiede solo due angoli congruenti? (scrivi la sigla)", answer: ["aa", "ang-ang", "primo", "1", "1°", "primo criterio"], explain: "Il primo criterio (AA): due angoli congruenti; il terzo lo è automaticamente." },
      { type: "order", q: "Metti in ordine i passi per misurare l'altezza di un albero con l'ombra.", items: ["Misura la lunghezza dell'ombra dell'albero", "Misura nello stesso istante altezza e ombra di un'asta", "Osserva che i triangoli hanno gli stessi angoli (simili)", "Imposta la proporzione tra altezze e ombre", "Risolvi la proporzione per l'altezza dell'albero"], explain: "Le misure vanno prese nello stesso istante, poi si riconosce la similitudine e si imposta la proporzione." }
    ]
  }
});

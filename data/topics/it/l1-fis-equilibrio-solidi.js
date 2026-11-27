TOPIC('it', {
  id: "l1-fis-equilibrio-solidi",
  title: "L'equilibrio dei solidi",
  intro: "Perché una cassa resta ferma su una rampa? Perché un bambino leggero può far salire un adulto su un'altalena? Perché la Torre di Pisa pende ma non cade? Dietro tutte queste domande ci sono due idee semplici e potentissime: la <b>somma delle forze</b> e la <b>somma dei momenti</b>. In questa lezione impariamo a riconoscere quando un corpo è in <b>equilibrio</b> e a usare piano inclinato e leve, le \"macchine semplici\" con cui l'umanità solleva pesi da millenni.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Che cosa vuol dire \"essere in equilibrio\"",
      html: `<p>Un corpo è in <b>equilibrio statico</b> quando <b>resta fermo</b> pur essendo sottoposto a forze. Una forza è una grandezza <b>vettoriale</b>: ha un valore (in <b>newton</b>, N), una direzione e un verso. Per questo non basta sommare i numeri: bisogna sommare i <b>vettori</b>.</p>
<p>Per un <b>punto materiale</b> (un corpo così piccolo, o così compatto, da poter essere trattato come un punto) la condizione di equilibrio è una sola:</p>
<p style="text-align:center"><b>la risultante delle forze applicate è nulla: ΣF = 0</b></p>
<p>Le forze che incontriamo più spesso sono:</p>
<ul>
<li>la <b>forza peso</b> P = m·g, diretta verso il centro della Terra, con g ≈ 9,8 m/s² (spesso si arrotonda a 10 per i conti a mente). Una massa di 50 kg ha peso P = 50 × 9,8 = 490 N. Attenzione: la <b>massa</b> si misura in kg ed è la stessa ovunque, il <b>peso</b> si misura in N e sulla Luna è circa sei volte minore;</li>
<li>la <b>reazione vincolare</b>: la forza con cui un appoggio, un filo o una parete impediscono un movimento. Un tavolo non \"vuole\" farti cadere: si deforma di un'inezia e spinge verso l'alto con una forza uguale al peso dell'oggetto;</li>
<li>la <b>forza di attrito statico</b>, che si oppone allo scivolamento. Ha un valore massimo F<sub>s</sub> = μ<sub>s</sub>·N, dove N è la forza premente perpendicolare alla superficie e μ<sub>s</sub> il coefficiente di attrito statico (dipende dalle due superfici).</li>
</ul>
<p>Esempio: un libro sul tavolo. Il peso P è rivolto verso il basso, la reazione N verso l'alto: P = N, la risultante è zero e il libro sta fermo. Se invece vai a sbattere contro un muro mentre spingi un carrello, il muro ti risponde con una forza uguale e contraria (terzo principio della dinamica), ma agisce su un corpo diverso: non va confusa con la coppia peso/reazione dell'appoggio.</p>`
    },
    {
      type: "example",
      title: "Esempio: una lampada appesa a due fili",
      html: `<p>Una lampada di massa 4 kg è sospesa al soffitto con un solo filo verticale. Quanto vale la tensione T del filo?</p>
<ol>
<li>Il peso è P = 4 × 9,8 = 39,2 N verso il basso.</li>
<li>Il punto materiale (la lampada) è fermo: ΣF = 0, quindi la tensione deve bilanciare il peso: T = 39,2 N verso l'alto.</li>
</ol>
<p>Se la stessa lampada è tenuta da <b>due fili uguali</b> inclinati, ciascun filo deve fornire una componente verticale di 19,6 N, ma la forza totale lungo il filo è <b>maggiore</b> di 19,6 N, perché una parte della tensione \"tira di lato\". Più i fili sono vicini all'orizzontale, più la tensione cresce: è per questo che una fune tesa in orizzontale, con un peso al centro, non riesce mai a diventare perfettamente dritta senza spezzarsi.</p>`
    },
    {
      type: "svg",
      title: "Il piano inclinato e la scomposizione del peso",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,260 540,260 540,60" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<text x="548" y="170" font-size="18" fill="#334155" font-weight="bold">h</text>
<text x="280" y="285" font-size="16" fill="#334155">base b</text>
<text x="190" y="190" font-size="16" fill="#334155" transform="rotate(-22 190 190)">lunghezza l</text>
<path d="M130 260 A70 70 0 0 0 126 238" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="140" y="250" font-size="18" fill="#dc2626" font-weight="bold">α</text>
<g transform="translate(300 160) rotate(-22.6)">
<rect x="-30" y="-40" width="60" height="40" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
</g>
<circle cx="292" cy="141" r="4" fill="#111827"/>
<line x1="292" y1="141" x2="292" y2="228" stroke="#16a34a" stroke-width="4"/>
<polygon points="292,236 285,222 299,222" fill="#16a34a"/>
<text x="262" y="250" font-size="18" fill="#16a34a" font-weight="bold">P</text>
<line x1="292" y1="141" x2="262" y2="154" stroke="#2563eb" stroke-width="4"/>
<polygon points="256,157 267,147 270,161" fill="#2563eb"/>
<text x="100" y="140" font-size="16" fill="#2563eb" font-weight="bold">P∥ = P sin α</text>
<line x1="292" y1="141" x2="322" y2="215" stroke="#9333ea" stroke-width="4"/>
<polygon points="324,221 314,208 328,203" fill="#9333ea"/>
<text x="345" y="225" font-size="16" fill="#9333ea" font-weight="bold">P⊥ = P cos α</text>
<text x="20" y="30" font-size="17" fill="#1f2937">Il peso si scompone in una parte lungo il piano e una perpendicolare.</text>
</svg>`,
      caption: "La componente parallela P∥ tende a far scivolare il corpo; la componente perpendicolare P⊥ è bilanciata dalla reazione del piano. L'angolo α è quello del piano con l'orizzontale."
    },
    {
      type: "text",
      title: "Il piano inclinato",
      html: `<p>Il <b>piano inclinato</b> è una superficie piana che forma un angolo α con l'orizzontale. Sul corpo appoggiato agisce il peso P, verticale. Conviene scomporlo con due assi: uno <b>parallelo</b> al piano e uno <b>perpendicolare</b>.</p>
<ul>
<li>P<sub>⊥</sub> = P·cos α: schiaccia il corpo sul piano ed è bilanciata dalla reazione vincolare N = P cos α;</li>
<li>P<sub>∥</sub> = P·sin α: tira il corpo lungo la discesa.</li>
</ul>
<p>Se il piano è <b>liscio</b> (senza attrito) per tenere fermo il corpo serve una forza F, parallela al piano, che bilanci P<sub>∥</sub>:</p>
<p style="text-align:center"><b>F = P·sin α = P·h/l</b></p>
<p>dove h è l'altezza del piano e l la sua lunghezza (sin α = h/l nel triangolo rettangolo). Poiché h &lt; l, la forza necessaria è <b>minore del peso</b>: il piano inclinato \"fa risparmiare forza\", ma bisogna percorrere un tratto più lungo. Il lavoro (forza × spostamento) per arrivare alla stessa quota resta lo stesso, se l'attrito è trascurabile.</p>
<p>Con l'attrito, il corpo resta fermo finché P sin α ≤ μ<sub>s</sub>·P cos α, cioè finché <b>tan α ≤ μ<sub>s</sub></b>. Oltre l'angolo critico il corpo comincia a scivolare, e la massa non conta: la condizione non dipende dal peso!</p>`
    },
    {
      type: "example",
      title: "Esempio: la rampa per il furgone",
      html: `<p>Devi caricare su un furgone un frigorifero di 80 kg. Il pianale è alto 1 m dal suolo e usi una rampa di 4 m (trascura l'attrito).</p>
<ol>
<li>Peso: P = 80 × 9,8 = 784 N.</li>
<li>Forza parallela necessaria per tenerlo fermo (o salire a velocità costante): F = P·h/l = 784 × 1/4 = <b>196 N</b>, cioè come sollevare circa 20 kg.</li>
<li>Con una rampa di 8 m la forza scende a 98 N, ma devi spingere per il doppio della strada.</li>
</ol>
<p>È lo stesso principio di sentieri a tornanti in montagna, delle scale a pendenza dolce e dei passi alpini: aumentare la lunghezza per diminuire lo sforzo.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: forze e piano inclinato",
      questions: [
        { type: "mc", q: "Un punto materiale è in equilibrio quando…", options: ["la somma dei moduli delle forze è nulla", "la risultante vettoriale delle forze è nulla", "agisce una sola forza"], answer: 1, explain: "Le forze sono vettori: ΣF = 0 significa che la loro somma vettoriale è nulla, anche se i singoli moduli non lo sono." },
        { type: "num", q: "Un corpo di 10 kg è su un piano inclinato liscio di 30°. Quanto vale (in N, con g = 9,8 m/s²) la forza parallela al piano che lo tiene fermo?", answer: 49, tol: 0.5, unit: "N", explain: "P = 98 N; F = P sin 30° = 98 × 0,5 = 49 N." },
        { type: "tf", q: "Su un piano con attrito, l'angolo massimo al quale un corpo resta fermo dipende dalla sua massa.", answer: false, explain: "Resta fermo finché tan α ≤ μs: la massa si semplifica e non conta." }
      ]
    },
    {
      type: "text",
      title: "Il momento di una forza",
      html: `<p>Spingere una porta vicino ai cardini è faticosissimo; vicino alla maniglia è facile. La forza è la stessa, ma l'effetto <b>di rotazione</b> cambia. Per descriverlo si introduce il <b>momento di una forza</b> rispetto a un punto O (il polo o fulcro):</p>
<p style="text-align:center"><b>M = F · b</b></p>
<p>dove <b>b</b> è il <b>braccio</b>: la distanza <b>perpendicolare</b> tra il punto O e la <b>retta d'azione</b> della forza. Si misura in <b>newton per metro</b> (N·m).</p>
<ul>
<li>Se la forza è perpendicolare all'asta, il braccio coincide con la distanza dal fulcro;</li>
<li>se la forza passa per il fulcro, il braccio è zero e il momento è nullo: spingere la porta lungo il piano della porta non la fa ruotare;</li>
<li>il momento ha un <b>verso</b>: per convenzione positivo se fa ruotare in senso antiorario, negativo se in senso orario.</li>
</ul>
<p>Una <b>coppia di forze</b> è formata da due forze uguali, parallele e opposte, con rette d'azione distinte: la risultante è nulla, ma il momento no (vale F·d, con d distanza tra le rette). È ciò che usi per girare un volante con due mani o per svitare un tappo.</p>
<p>Un <b>corpo rigido</b> (che non si deforma) è in equilibrio se valgono <b>due</b> condizioni insieme:</p>
<p style="text-align:center"><b>ΣF = 0 (non si sposta) &nbsp;e&nbsp; ΣM = 0 (non ruota)</b></p>`
    },
    {
      type: "svg",
      title: "La leva: forza motrice, resistenza e fulcro",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<polygon points="300,215 270,260 330,260" fill="#475569"/>
<g transform="rotate(0 300 210)"><rect x="60" y="200" width="480" height="14" rx="4" fill="#92400e"/></g>
<rect x="95" y="140" width="70" height="60" rx="6" fill="#ef4444"/>
<text x="130" y="178" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">carico</text>
<line x1="130" y1="95" x2="130" y2="135" stroke="#ef4444" stroke-width="4"/>
<polygon points="130,139 122,124 138,124" fill="#ef4444"/>
<text x="130" y="85" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">resistenza Fr</text>
<line x1="470" y1="120" x2="470" y2="196" stroke="#16a34a" stroke-width="4"/>
<polygon points="470,200 462,185 478,185" fill="#16a34a"/>
<text x="470" y="108" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">forza motrice Fm</text>
<text x="300" y="285" font-size="17" text-anchor="middle" fill="#334155" font-weight="bold">fulcro</text>
<line x1="130" y1="232" x2="300" y2="232" stroke="#2563eb" stroke-width="3"/>
<line x1="300" y1="232" x2="470" y2="232" stroke="#9333ea" stroke-width="3"/>
<text x="215" y="250" font-size="16" text-anchor="middle" fill="#2563eb" font-weight="bold">br</text>
<text x="385" y="250" font-size="16" text-anchor="middle" fill="#9333ea" font-weight="bold">bm</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">Equilibrio: Fm · bm = Fr · br</text>
</svg>`,
      caption: "Una leva di primo genere: il fulcro sta in mezzo. Il braccio bm è il doppio di br, quindi basta una forza motrice la metà del carico."
    },
    {
      type: "text",
      title: "Le leve",
      html: `<p>La <b>leva</b> è un'asta rigida libera di ruotare attorno a un punto fisso, il <b>fulcro</b>. Agiscono su di essa una <b>forza motrice</b> F<sub>m</sub> (quella che applichiamo) e una <b>forza resistente</b> F<sub>r</sub> (il carico da sollevare o vincere). La leva è in equilibrio quando i momenti si bilanciano:</p>
<p style="text-align:center"><b>F<sub>m</sub> · b<sub>m</sub> = F<sub>r</sub> · b<sub>r</sub></b></p>
<p>Da qui il <b>guadagno</b> della leva: F<sub>m</sub>/F<sub>r</sub> = b<sub>r</sub>/b<sub>m</sub>. Se il braccio della forza motrice è maggiore di quello della resistenza, la leva è <b>vantaggiosa</b> (si risparmia forza); se è minore, è <b>svantaggiosa</b> (si perde forza ma si guadagna in velocità e ampiezza di movimento).</p>
<table>
<tr><th>Genere</th><th>Posizione</th><th>Esempi</th><th>Vantaggio</th></tr>
<tr><td><b>1°</b></td><td>fulcro tra forza e resistenza</td><td>altalena, forbici, tenaglia, piede di porco</td><td>può essere vantaggiosa, svantaggiosa o indifferente</td></tr>
<tr><td><b>2°</b></td><td>resistenza tra fulcro e forza</td><td>carriola, schiaccianoci, apribottiglie, taglia-unghie</td><td>sempre vantaggiosa</td></tr>
<tr><td><b>3°</b></td><td>forza tra fulcro e resistenza</td><td>pinzette, pinza per il ghiaccio, canna da pesca, avambraccio</td><td>sempre svantaggiosa</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Esempio: l'altalena in equilibrio",
      html: `<p>Un adulto di 60 kg siede a 1 m dal centro di un'altalena a bilico. A che distanza deve sedersi un bambino di 20 kg per bilanciarlo?</p>
<ol>
<li>I pesi: 588 N (adulto) e 196 N (bambino): ma basta usare le masse, perché g si semplifica.</li>
<li>Equilibrio dei momenti: 60 · 1 = 20 · x</li>
<li>x = 60/20 = <b>3 m</b>.</li>
</ol>
<p>Il bambino pesa un terzo e sta a una distanza tripla: il prodotto \"peso × distanza\" è lo stesso. Se l'altalena è lunga solo 4 m in tutto (2 m per lato), il bambino non riuscirebbe a bilanciare l'adulto da lì: dovrebbe avvicinarsi l'adulto al fulcro (0,67 m).</p>`
    },
    {
      type: "widget",
      title: "Di che genere è la leva?",
      widget: "classify",
      options: { groups: ["1° genere (fulcro in mezzo)", "2° genere (resistenza in mezzo)", "3° genere (forza in mezzo)"], items: [
        ["altalena a bilico", 0],
        ["forbici", 0],
        ["tenaglia", 0],
        ["carriola", 1],
        ["schiaccianoci", 1],
        ["apribottiglie a leva", 1],
        ["pinzette", 2],
        ["pinza per il ghiaccio", 2],
        ["canna da pesca", 2]
      ] },
      caption: "Trova i tre punti (fulcro, forza, resistenza) e guarda quale sta in mezzo."
    },
    {
      type: "curiosity",
      title: "\"Datemi un punto d'appoggio e solleverò il mondo\"",
      html: `<p>La frase è attribuita ad <b>Archimede di Siracusa</b> (III secolo a.C.), che nel trattato <i>Sull'equilibrio dei piani</i> dimostrò per primo con rigore matematico la legge della leva: due pesi sono in equilibrio quando sono inversamente proporzionali alle distanze dal fulcro. La citazione ci è giunta da fonti più tarde (Pappo di Alessandria), ma racchiude bene l'idea: con un braccio abbastanza lungo, una forza piccola ne bilancia una enorme. Per sollevare la Terra, però, Archimede avrebbe dovuto muovere la sua leva per distanze astronomiche: il guadagno di forza si paga sempre con uno spostamento maggiore.</p>`
    },
    {
      type: "curiosity",
      title: "Il tuo corpo è pieno di leve",
      html: `<p>Il gomito è il fulcro, il bicipite si attacca a pochi centimetri dal gomito, mentre la mano che sostiene un peso è a circa 30 cm: è una leva di <b>3° genere</b>, svantaggiosa nella forza. Per tenere in mano un peso di 5 kg (49 N) a braccio piegato, il bicipite deve esercitare una forza di parecchie volte maggiore. Ma in cambio si ottiene una grande velocità e ampiezza di movimento: un piccolo accorciamento del muscolo sposta la mano di molto. Il piede che si solleva sulle punte è invece una leva di 2° genere, vantaggiosa. Anche masticare con la mandibola e annuire con la testa sfruttano leve!</p>`
    },
    {
      type: "text",
      title: "Baricentro e tipi di equilibrio",
      html: `<p>Il <b>baricentro</b> (o centro di gravità) è il punto in cui si può pensare applicata tutta la forza peso di un corpo. In un corpo omogeneo e simmetrico coincide con il centro geometrico (nel centro di un disco, di un cubo, di una sfera). Un corpo appeso a un filo resta fermo quando il baricentro si trova sulla verticale del punto di sospensione; un corpo appoggiato non cade finché la <b>verticale passante per il baricentro cade dentro la base di appoggio</b>.</p>
<p>Per un corpo che può muoversi o ruotare, dopo un piccolo spostamento dall'equilibrio si distinguono tre casi:</p>
<ul>
<li><b>equilibrio stabile</b>: il corpo tende a tornare nella posizione iniziale (una pallina in fondo a una ciotola; il baricentro sale se lo si sposta);</li>
<li><b>equilibrio instabile</b>: il corpo si allontana ancora di più (una pallina sulla cima di una collina; il baricentro scende);</li>
<li><b>equilibrio indifferente</b>: il corpo resta nella nuova posizione (una sfera su un tavolo piano; il baricentro non cambia quota).</li>
</ul>
<p>Più il baricentro è <b>basso</b> e la base <b>larga</b>, più l'equilibrio è stabile: per questo le auto da corsa sono basse e larghe, un camion carico in alto si ribalta più facilmente in curva, e si sta più saldi sul tram a gambe divaricate.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il momento",
      intro: "Il concetto di momento è spesso il più ostico della lezione. Ecco quattro strade diverse per afferrarlo.",
      tabs: [
        {
          label: "🚪 La porta",
          html: `<p>Prova a chiudere una porta spingendo a 5 cm dai cardini: ci vuole una forza enorme. Spingi alla maniglia, a 80 cm, e basta un dito. Il <b>momento</b> M = F·b è la misura di questa differenza: se il braccio b diventa 16 volte più grande, la stessa rotazione si ottiene con una forza 16 volte più piccola. È il motivo per cui le maniglie stanno dalla parte opposta ai cardini e le chiavi inglesi hanno il manico lungo.</p>`
        },
        {
          label: "⚖️ Peso × distanza",
          html: `<p>Immagina un'asta con dei sacchetti appesi a distanze diverse dal centro. Non conta solo <b>quanto pesa</b> un sacchetto, ma anche <b>dove</b> è appeso: si moltiplica il peso per la distanza. Se a sinistra hai 3 kg a 4 cm (3 × 4 = 12) e a destra 2 kg a 6 cm (2 × 6 = 12), i \"punteggi\" sono uguali e l'asta sta in equilibrio. Se a destra metti 2 kg a 5 cm, il punteggio è 10 e vince la sinistra.</p>`,
          widget: "match",
          options: { pairs: [["3 kg a 4 cm", "momento 12"], ["5 kg a 2 cm", "momento 10"], ["1 kg a 9 cm", "momento 9"], ["4 kg a 5 cm", "momento 20"]] }
        },
        {
          label: "🏗️ Il braccio perpendicolare",
          html: `<p>Il braccio è la distanza <b>perpendicolare</b> tra il fulcro e la retta della forza, non la distanza qualsiasi. Se spingi una chiave inglese in modo obliquo, solo la componente perpendicolare al manico fa girare il bullone. Spingere lungo il manico, verso il bullone, non lo gira affatto (braccio zero). Per questo il momento si può anche scrivere M = F·d·sin θ, dove θ è l'angolo tra la forza e il segmento che va dal fulcro al punto di applicazione.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<circle cx="90" cy="130" r="16" fill="#475569"/>
<text x="90" y="170" font-size="16" text-anchor="middle" fill="#1f2937">bullone</text>
<rect x="90" y="124" width="320" height="12" rx="5" fill="#92400e"/>
<line x1="410" y1="130" x2="470" y2="50" stroke="#16a34a" stroke-width="4"/>
<polygon points="474,45 456,53 468,63" fill="#16a34a"/>
<text x="480" y="48" font-size="17" fill="#15803d" font-weight="bold">F</text>
<line x1="410" y1="130" x2="410" y2="62" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 3"/>
<text x="360" y="72" font-size="16" fill="#2563eb" font-weight="bold">F sin θ</text>
<text x="300" y="200" font-size="17" text-anchor="middle" fill="#1f2937">Solo la componente perpendicolare al manico fa ruotare.</text>
</svg>`
        },
        {
          label: "🔁 Il momento come \"quanto gira\"",
          html: `<p>Un'analogia utile con il moto lineare: la forza fa <b>variare la velocità</b> di un corpo, il momento fa <b>variare la rotazione</b>. Una forza nulla significa niente accelerazione; un momento nullo significa niente accelerazione angolare. Un corpo in equilibrio è come un corpo che non si muove né accelera e non gira: ecco perché servono sia ΣF = 0 sia ΣM = 0.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'equilibrio dei solidi",
      nodes: [
        { id: "equilibrio", label: "Equilibrio statico", x: 50, y: 6, color: "#64748b", html: "Un corpo è fermo e resta fermo: non trasla e non ruota.", why: "È la statica, il primo ramo della fisica ad essere trattato con rigore matematico, già da Archimede (III sec. a.C.) e poi da Stevino e Galileo. Se un corpo fermo accelerasse, lo vedremmo muoversi: l'equilibrio è la condizione in cui gli effetti delle forze si annullano a vicenda." },
        { id: "forze", label: "Somma delle forze nulla", x: 20, y: 28, color: "#2563eb", html: "ΣF = 0: il corpo non trasla.", why: "Discende dal secondo principio della dinamica di Newton (1687): F = ma. Se la risultante è zero, l'accelerazione è zero. E se parte da fermo, resta fermo (primo principio, già intuito da Galileo)." },
        { id: "momenti", label: "Somma dei momenti nulla", x: 80, y: 28, color: "#9333ea", html: "ΣM = 0: il corpo non ruota.", why: "Per un corpo esteso non basta sommare le forze: contano anche i punti di applicazione. Il momento M = F·b misura la capacità di una forza di far ruotare. Il concetto nasce dalla legge della leva di Archimede." },
        { id: "peso", label: "Forza peso e reazioni", x: 8, y: 52, color: "#16a34a", html: "P = mg, N, tensioni, attrito.", why: "Il peso è l'attrazione gravitazionale della Terra (Newton, 1687); le reazioni vincolari seguono dal terzo principio: ogni azione ha una reazione uguale e contraria." },
        { id: "inclinato", label: "Piano inclinato", x: 32, y: 66, color: "#22c55e", html: "Scomposizione del peso: P sin α lungo il piano, P cos α perpendicolare.", why: "La scomposizione dei vettori in componenti è un'applicazione della trigonometria e della regola del parallelogramma. Galileo studiò il piano inclinato per \"rallentare\" la caduta dei corpi e misurarla." },
        { id: "leve", label: "Leve", x: 80, y: 56, color: "#f59e0b", html: "Fm·bm = Fr·br; tre generi.", why: "Archimede dimostrò la legge della leva nel trattato Sull'equilibrio dei piani (III sec. a.C.), partendo da postulati di simmetria. È un caso particolare della condizione ΣM = 0." },
        { id: "baricentro", label: "Baricentro", x: 56, y: 80, color: "#ef4444", html: "Il punto di applicazione del peso totale.", why: "Archimede lo studiò per figure piane (parabola, triangolo). Un corpo è stabile se la verticale per il baricentro cade nella base." },
        { id: "stabilita", label: "Stabile / instabile / indifferente", x: 20, y: 92, color: "#0ea5e9", html: "Cosa succede dopo una piccola perturbazione.", why: "Dipende dall'energia potenziale gravitazionale: l'equilibrio è stabile dove l'energia potenziale è minima (il baricentro è nel punto più basso possibile)." }
      ],
      edges: [["equilibrio", "forze", "condizione 1"], ["equilibrio", "momenti", "condizione 2"], ["forze", "peso", "forze in gioco"], ["peso", "inclinato", "si scompone"], ["momenti", "leve", "applicazione"], ["peso", "baricentro", "applicato nel"], ["baricentro", "stabilita", "determina"]]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Punto materiale: <b>ΣF = 0</b>. Corpo rigido: <b>ΣF = 0 e ΣM = 0</b>.</li>
<li>Peso: <b>P = m g</b>. Componenti sul piano inclinato: <b>P∥ = P sin α</b>, <b>P⊥ = P cos α</b>.</li>
<li>Momento: <b>M = F · b</b> (b = braccio, distanza perpendicolare dalla retta d'azione).</li>
<li>Leva: <b>Fm · bm = Fr · br</b>. 1° genere: fulcro in mezzo; 2°: resistenza in mezzo; 3°: forza in mezzo.</li>
<li>Una macchina semplice <b>non fa risparmiare lavoro</b>: cambia solo il rapporto forza / spostamento.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: momenti, leve ed equilibrio",
      questions: [
        { type: "num", q: "Una forza di 20 N agisce perpendicolarmente a 0,5 m dal fulcro. Quanto vale il momento (in N·m)?", answer: 10, unit: "N·m", explain: "M = F·b = 20 × 0,5 = 10 N·m." },
        { type: "mc", q: "La carriola è una leva di…", options: ["1° genere", "2° genere", "3° genere"], answer: 1, explain: "Il fulcro è la ruota, il carico sta nel mezzo, la forza è applicata alle manopole: resistenza tra fulcro e forza, quindi 2° genere, sempre vantaggiosa." },
        { type: "mc", q: "Una sfera appoggiata su un tavolo orizzontale si trova in equilibrio…", options: ["stabile", "instabile", "indifferente"], answer: 2, explain: "Se la sposti, resta dove l'hai messa: il baricentro non cambia altezza." },
        { type: "tf", q: "Una forza che passa per il fulcro ha momento nullo.", answer: true, explain: "Il braccio è zero: il momento M = F·0 = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Equilibrio statico", d: "Condizione di un corpo fermo, sul quale la risultante delle forze e dei momenti è nulla." },
    { t: "Risultante", d: "Somma vettoriale di tutte le forze che agiscono su un corpo." },
    { t: "Forza peso", d: "Forza con cui la Terra attrae un corpo: P = m·g, in newton." },
    { t: "Reazione vincolare", d: "Forza esercitata da un appoggio, un filo o una parete che impedisce un movimento." },
    { t: "Attrito statico", d: "Forza che si oppone all'inizio dello scivolamento; massimo valore μs·N." },
    { t: "Piano inclinato", d: "Superficie piana inclinata di un angolo α rispetto all'orizzontale." },
    { t: "Momento di una forza", d: "M = F·b: misura la capacità della forza di far ruotare un corpo attorno a un punto." },
    { t: "Braccio", d: "Distanza perpendicolare tra il polo e la retta d'azione della forza." },
    { t: "Coppia di forze", d: "Due forze uguali, parallele e opposte, con rette d'azione diverse: risultante nulla, momento diverso da zero." },
    { t: "Leva", d: "Asta rigida che ruota attorno a un fulcro, soggetta a una forza motrice e a una resistente." },
    { t: "Baricentro", d: "Punto in cui si considera applicato il peso complessivo di un corpo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è la condizione di equilibrio di un punto materiale?", options: ["La risultante delle forze è nulla", "Il momento delle forze è nullo", "Il peso è uguale alla massa"], answer: 0, explain: "Per il punto materiale non c'è rotazione da considerare: basta ΣF = 0." },
      { type: "num", q: "Qual è il peso (in N, con g = 9,8 m/s²) di un oggetto di 5 kg?", answer: 49, tol: 0.1, unit: "N", explain: "P = m·g = 5 × 9,8 = 49 N." },
      { type: "num", q: "Un piano inclinato liscio è alto 2 m e lungo 5 m. Quale forza parallela (in N) tiene fermo un carico di peso 300 N?", answer: 120, unit: "N", explain: "F = P·h/l = 300 × 2/5 = 120 N." },
      { type: "tf", q: "Con attrito, l'angolo massimo di un piano su cui un corpo resta fermo dipende dalla massa del corpo.", answer: false, explain: "La condizione è tan α ≤ μs: la massa si semplifica." },
      { type: "num", q: "Una forza di 50 N è applicata perpendicolarmente a 0,4 m dall'asse di rotazione. Calcola il momento (N·m).", answer: 20, unit: "N·m", explain: "M = F·b = 50 × 0,4 = 20 N·m." },
      { type: "num", q: "Una leva è in equilibrio con una resistenza di 90 N a 20 cm dal fulcro. Quale forza motrice (in N) serve a 60 cm dal fulcro, dalla parte opposta?", answer: 30, unit: "N", explain: "Fm·60 = 90·20, quindi Fm = 1800/60 = 30 N." },
      { type: "mc", q: "Quale di questi strumenti è una leva di 3° genere?", options: ["Forbici", "Pinzette", "Schiaccianoci"], answer: 1, explain: "Nelle pinzette la forza è applicata tra il fulcro (la cerniera) e la punta, dove sta la resistenza." },
      { type: "tf", q: "Una leva di 2° genere è sempre vantaggiosa.", answer: true, explain: "La resistenza è più vicina al fulcro della forza motrice: br < bm, quindi Fm < Fr." },
      { type: "order", q: "Metti in ordine i passi per risolvere un problema di equilibrio su un piano inclinato.", items: ["Disegnare tutte le forze sul corpo", "Scegliere gli assi parallelo e perpendicolare al piano", "Scomporre il peso nelle due componenti", "Imporre ΣF = 0 lungo ciascun asse", "Ricavare la forza incognita"], explain: "Il metodo standard: disegno, assi adatti, scomposizione, equilibrio per ogni asse, soluzione." },
      { type: "mc", q: "Quando un corpo appoggiato non si ribalta?", options: ["Quando il baricentro è nel punto più alto", "Quando la verticale per il baricentro cade dentro la base di appoggio", "Quando la massa è piccola"], answer: 1, explain: "Se la verticale per il baricentro esce dalla base, il peso crea un momento che fa ruotare il corpo fino al ribaltamento." },
      { type: "text", q: "Come si chiama il punto fisso attorno a cui ruota una leva?", answer: ["fulcro", "il fulcro"], explain: "Il fulcro è il punto di appoggio della leva." }
    ]
  }
});

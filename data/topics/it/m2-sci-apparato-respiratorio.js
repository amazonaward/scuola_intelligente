TOPIC('it', {
  id: "m2-sci-apparato-respiratorio",
  title: "L'apparato respiratorio",
  intro: "Puoi stare settimane senza cibo e qualche giorno senza acqua, ma solo pochi minuti senza <b>ossigeno</b>. L'<b>apparato respiratorio</b> porta l'aria fino ai polmoni, dove avviene lo <b>scambio dei gas</b>: entra ossigeno, esce anidride carbonica. Ogni giorno respiri circa <b>20 000 volte</b>!",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Respirare: due significati",
      html: `<p>La parola "respirazione" indica due cose collegate:</p>
<ul>
<li><b>respirazione polmonare</b> (o ventilazione): il movimento dell'aria dentro e fuori dai polmoni e lo scambio di gas fra aria e sangue;</li>
<li><b>respirazione cellulare</b>: la reazione chimica che avviene nei <b>mitocondri</b> di ogni cellula, dove il glucosio "brucia" con l'ossigeno e libera l'energia che ci tiene in vita:</li>
</ul>
<p style="text-align:center;font-size:1.15em"><b>glucosio + ossigeno → anidride carbonica + acqua + energia</b><br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + energia</p>
<p>I polmoni esistono proprio per questo: prendere l'O<sub>2</sub> che serve ai mitocondri ed eliminare la CO<sub>2</sub> che essi producono. Il sangue fa da corriere fra i due.</p>`
    },
    {
      type: "text",
      title: "2. Le vie respiratorie",
      html: `<p>L'aria percorre questo cammino:</p>
<ol>
<li><b>Naso e cavità nasali</b>: i peli e il <b>muco</b> trattengono la polvere; i vasi sanguigni scaldano l'aria e la mucosa la inumidisce. Per questo è meglio respirare con il naso che con la bocca.</li>
<li><b>Faringe</b>: incrocio comune con l'apparato digerente.</li>
<li><b>Laringe</b>: contiene le <b>corde vocali</b>, che vibrano al passaggio dell'aria e producono la voce. L'<b>epiglottide</b> la chiude quando deglutiamo. Il "pomo d'Adamo" è una sua cartilagine.</li>
<li><b>Trachea</b>: tubo di circa 12 cm tenuto aperto da <b>anelli di cartilagine</b> a forma di C. È rivestita da cellule con <b>ciglia</b> che, come tante scope, spingono il muco sporco verso la gola.</li>
<li><b>Bronchi</b>: la trachea si divide in due bronchi, uno per polmone, che si ramificano in tubi sempre più piccoli, i <b>bronchioli</b>. L'insieme somiglia a un albero rovesciato: l'<b>albero bronchiale</b>.</li>
<li><b>Alveoli polmonari</b>: alla fine dei bronchioli ci sono grappoli di sacchettini di 0,2 mm di diametro. Nei due polmoni ce ne sono circa <b>300–500 milioni</b>!</li>
</ol>`
    },
    {
      type: "widget",
      title: "Dai un nome alle parti",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="400" fill="#eff6ff"/>
<path d="M270 30 Q300 10 330 30 L330 60 L270 60 Z" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<rect x="288" y="60" width="24" height="30" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
<rect x="290" y="90" width="20" height="90" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<g stroke="#94a3b8" stroke-width="3"><line x1="290" y1="105" x2="310" y2="105"/><line x1="290" y1="120" x2="310" y2="120"/><line x1="290" y1="135" x2="310" y2="135"/><line x1="290" y1="150" x2="310" y2="150"/><line x1="290" y1="165" x2="310" y2="165"/></g>
<path d="M180 120 C120 150 110 280 140 340 C180 360 260 350 270 320 L275 200 C260 150 220 120 180 120 Z" fill="#fbcfe8" stroke="#be185d" stroke-width="4"/>
<path d="M420 120 C480 150 490 280 460 340 C420 360 340 350 330 320 L325 200 C340 150 380 120 420 120 Z" fill="#fbcfe8" stroke="#be185d" stroke-width="4"/>
<path d="M300 180 L240 220 L200 270 M240 220 L230 290 M300 180 L360 220 L400 270 M360 220 L370 290" fill="none" stroke="#7c3aed" stroke-width="7"/>
<circle cx="200" cy="275" r="10" fill="#f472b6"/><circle cx="215" cy="285" r="8" fill="#f472b6"/>
<path d="M120 365 Q300 300 480 365" fill="none" stroke="#ea580c" stroke-width="10"/>
</svg>`,
        spots: [
          { x: 300, y: 35, label: "Naso e cavità nasali" },
          { x: 300, y: 75, label: "Laringe" },
          { x: 300, y: 135, label: "Trachea" },
          { x: 355, y: 215, label: "Bronco" },
          { x: 205, y: 280, label: "Alveoli" },
          { x: 440, y: 230, label: "Polmone" },
          { x: 300, y: 335, label: "Diaframma" }
        ]
      },
      caption: "Il polmone destro ha 3 lobi, il sinistro solo 2, perché lascia spazio al cuore."
    },
    {
      type: "text",
      title: "3. I polmoni e il diaframma",
      html: `<p>I <b>polmoni</b> sono due organi spugnosi ed elastici contenuti nella <b>gabbia toracica</b> (costole, sterno, colonna vertebrale). Sono avvolti dalla <b>pleura</b>, una doppia membrana con un velo di liquido che li fa scivolare senza attrito.</p>
<p>I polmoni non hanno muscoli: si gonfiano e si sgonfiano grazie al <b>diaframma</b> (un muscolo a cupola sotto i polmoni) e ai <b>muscoli intercostali</b>.</p>
<ul>
<li><b>Inspirazione</b> (attiva): il diaframma si <b>contrae</b> e si abbassa, le costole si sollevano. Il volume del torace aumenta, la pressione all'interno dei polmoni diminuisce e l'aria <b>entra</b>.</li>
<li><b>Espirazione</b> (a riposo è passiva): il diaframma si <b>rilassa</b> e risale, le costole si abbassano. Il volume diminuisce, la pressione aumenta e l'aria <b>esce</b>.</li>
</ul>
<p>A riposo un ragazzo respira circa <b>12–20 volte al minuto</b> e a ogni respiro scambia circa <b>0,5 litri</b> d'aria. La quantità massima che si può espirare dopo un'inspirazione profonda si chiama <b>capacità vitale</b>: circa 3–5 litri in un adulto.</p>
<p>Il ritmo è controllato automaticamente dal <b>bulbo</b> (nel tronco encefalico), che misura soprattutto la quantità di <b>CO<sub>2</sub></b> nel sangue: quando la CO<sub>2</sub> aumenta, respiriamo più in fretta.</p>`
    },
    {
      type: "svg",
      title: "Inspirazione ed espirazione",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="150" y="30" font-size="19" text-anchor="middle" fill="#0369a1" font-weight="bold">Inspirazione</text>
<text x="450" y="30" font-size="19" text-anchor="middle" fill="#9a3412" font-weight="bold">Espirazione</text>
<path d="M80 70 C60 120 60 200 85 235 L215 235 C240 200 240 120 220 70 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<path d="M75 240 Q150 255 225 240" fill="none" stroke="#ea580c" stroke-width="9"/>
<text x="150" y="285" font-size="15" text-anchor="middle" fill="#c2410c">diaframma si abbassa (contratto)</text>
<line x1="150" y1="40" x2="150" y2="100" stroke="#0284c7" stroke-width="6"/>
<polygon points="140,95 150,115 160,95" fill="#0284c7"/>
<text x="150" y="170" font-size="17" text-anchor="middle" fill="#0c4a6e">volume ↑</text>
<text x="150" y="195" font-size="17" text-anchor="middle" fill="#0c4a6e">pressione ↓</text>
<path d="M390 90 C375 130 375 180 395 205 L505 205 C525 180 525 130 510 90 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="4"/>
<path d="M380 210 Q450 160 520 210" fill="none" stroke="#ea580c" stroke-width="9"/>
<text x="450" y="285" font-size="15" text-anchor="middle" fill="#c2410c">diaframma risale (rilassato)</text>
<line x1="450" y1="105" x2="450" y2="50" stroke="#9a3412" stroke-width="6"/>
<polygon points="440,55 450,35 460,55" fill="#9a3412"/>
<text x="450" y="140" font-size="17" text-anchor="middle" fill="#7c2d12">volume ↓</text>
<text x="450" y="165" font-size="17" text-anchor="middle" fill="#7c2d12">pressione ↑</text>
</svg>`,
      caption: "L'aria si muove sempre da dove la pressione è più alta a dove è più bassa."
    },
    {
      type: "quiz",
      title: "Mini-quiz: vie respiratorie e ventilazione",
      questions: [
        { type: "mc", q: "Dove si trovano le corde vocali?", options: ["Nella trachea", "Nella laringe", "Nei bronchi"], answer: 1, explain: "Le corde vocali sono nella laringe." },
        { type: "mc", q: "Durante l'inspirazione il diaframma…", options: ["si rilassa e sale", "si contrae e si abbassa", "resta fermo"], answer: 1, explain: "Contraendosi si abbassa e aumenta il volume del torace." },
        { type: "tf", q: "I polmoni hanno muscoli propri che li fanno gonfiare.", answer: false, explain: "Si muovono grazie al diaframma e ai muscoli intercostali." },
        { type: "text", q: "Come si chiamano i sacchettini in cui avviene lo scambio dei gas?", answer: ["alveoli", "alveoli polmonari", "gli alveoli"], explain: "Gli alveoli polmonari." }
      ]
    },
    {
      type: "text",
      title: "4. Lo scambio dei gas negli alveoli",
      html: `<p>Ogni alveolo è avvolto da una fitta rete di <b>capillari</b>. La parete dell'alveolo e quella del capillare insieme sono spesse meno di <b>un millesimo di millimetro</b>.</p>
<p>I gas attraversano questa barriera per <b>diffusione</b>: ogni gas si sposta spontaneamente da dove è più concentrato a dove lo è meno.</p>
<ul>
<li>Nell'alveolo c'è <b>molto O<sub>2</sub></b>, nel sangue che arriva dal cuore destro ce n'è poco → l'O<sub>2</sub> passa <b>nel sangue</b> e si lega all'emoglobina.</li>
<li>Nel sangue c'è <b>molta CO<sub>2</sub></b>, nell'alveolo poca → la CO<sub>2</sub> passa <b>nell'alveolo</b> e viene espirata.</li>
</ul>
<p>Tutti insieme gli alveoli hanno una superficie di circa <b>70 m²</b>: più o meno come un'aula scolastica o un appartamento, ripiegati dentro il tuo torace!</p>
<table>
<tr><th>Gas</th><th>Aria inspirata</th><th>Aria espirata</th></tr>
<tr><td>Azoto N<sub>2</sub></td><td>78%</td><td>78%</td></tr>
<tr><td>Ossigeno O<sub>2</sub></td><td>21%</td><td>circa 16%</td></tr>
<tr><td>Anidride carbonica CO<sub>2</sub></td><td>0,04%</td><td>circa 4%</td></tr>
<tr><td>Vapore acqueo</td><td>variabile</td><td>saturo</td></tr>
</table>
<p>Nota: espiriamo ancora molto ossigeno (16%). Per questo la <b>respirazione bocca a bocca</b> funziona!</p>`
    },
    {
      type: "svg",
      title: "Un alveolo e il suo capillare",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<circle cx="240" cy="150" r="110" fill="#fbcfe8" stroke="#be185d" stroke-width="5"/>
<text x="240" y="100" font-size="18" text-anchor="middle" fill="#831843" font-weight="bold">alveolo (aria)</text>
<path d="M360 20 C340 60 335 110 337 150" fill="none" stroke="#2563eb" stroke-width="34"/>
<path d="M337 150 C335 190 340 240 360 280" fill="none" stroke="#dc2626" stroke-width="34"/>
<text x="420" y="45" font-size="16" fill="#1d4ed8">sangue povero di O₂ ↓</text>
<text x="420" y="270" font-size="16" fill="#b91c1c">sangue ricco di O₂ ↓</text>
<line x1="270" y1="140" x2="320" y2="140" stroke="#16a34a" stroke-width="6"/>
<polygon points="318,130 338,140 318,150" fill="#16a34a"/>
<text x="190" y="146" font-size="19" fill="#15803d" font-weight="bold">O₂ →</text>
<line x1="330" y1="190" x2="280" y2="190" stroke="#64748b" stroke-width="6"/>
<polygon points="282,180 262,190 282,200" fill="#64748b"/>
<text x="180" y="196" font-size="19" fill="#334155" font-weight="bold">← CO₂</text>
<text x="420" y="160" font-size="16" fill="#334155">capillare</text>
</svg>`,
      caption: "L'ossigeno entra nel sangue, l'anidride carbonica esce: tutto per diffusione, senza consumare energia."
    },
    {
      type: "3d",
      title: "Le molecole dei gas respiratori",
      scene: "molecule",
      options: {
        atoms: [
          { x: -3.2, y: 0.8, z: 0, r: 0.55, color: "#ef4444", label: "O" },
          { x: -2.0, y: 0.8, z: 0, r: 0.55, color: "#ef4444", label: "O" },
          { x: 0.4, y: 0.8, z: 0, r: 0.55, color: "#ef4444", label: "O" },
          { x: 1.6, y: 0.8, z: 0, r: 0.5, color: "#334155", label: "C" },
          { x: 2.8, y: 0.8, z: 0, r: 0.55, color: "#ef4444", label: "O" },
          { x: -0.6, y: -1.4, z: 0, r: 0.55, color: "#3b82f6", label: "N" },
          { x: 0.6, y: -1.4, z: 0, r: 0.55, color: "#3b82f6", label: "N" }
        ],
        bonds: [[0, 1], [2, 3], [3, 4], [5, 6]]
      },
      caption: "In alto a sinistra l'ossigeno O₂, in alto a destra l'anidride carbonica CO₂ (lineare), in basso l'azoto N₂, il gas più abbondante dell'aria: lo respiriamo e lo espiriamo senza usarlo."
    },
    {
      type: "example",
      title: "Esempio pratico: costruisci un modello di polmone",
      html: `<p>Ti servono: una bottiglia di plastica tagliata a metà, un palloncino, una cannuccia, un guanto di lattice o un altro palloncino tagliato, nastro adesivo.</p>
<ol>
<li>Infila il palloncino nel collo della bottiglia, fissato alla cannuccia (il palloncino = polmone, la cannuccia = trachea).</li>
<li>Chiudi il fondo tagliato con il guanto teso, fissato con il nastro (il guanto = diaframma).</li>
<li><b>Tira giù</b> il guanto: il volume nella bottiglia aumenta, la pressione cala e il palloncino <b>si gonfia</b> (inspirazione).</li>
<li><b>Lascialo</b>: il palloncino si sgonfia (espirazione).</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio pratico: calcola quanta aria respiri",
      html: `<p>A riposo fai circa <b>15 respiri al minuto</b> da <b>0,5 litri</b> ciascuno.</p>
<p>In un minuto: 15 × 0,5 = <b>7,5 litri</b>.<br>In un'ora: 7,5 × 60 = <b>450 litri</b>.<br>In un giorno: 450 × 24 = <b>10 800 litri</b>, cioè circa 11 000 litri d'aria!</p>
<p>Durante una corsa si possono superare i 100 litri al minuto. Ecco perché la <b>qualità dell'aria</b> che respiriamo (smog, polveri sottili PM10 e PM2,5, fumo) è così importante per la salute.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la respirazione",
      intro: "Se pressione e diffusione ti sembrano astratte, prova con queste strade.",
      tabs: [
        {
          label: "🌳 L'albero rovesciato",
          html: `<p>Capovolgi un albero: il <b>tronco</b> è la trachea, i <b>rami grossi</b> sono i bronchi, i <b>rametti</b> i bronchioli e le <b>foglie</b> gli alveoli. Come le foglie di un albero offrono tantissima superficie alla luce, gli alveoli offrono tantissima superficie all'aria.</p>
<p>E c'è un legame vero fra alberi e polmoni: gli alberi, con la <b>fotosintesi</b>, fanno il contrario di noi: assorbono CO<sub>2</sub> e liberano O<sub>2</sub>.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<rect x="290" y="10" width="20" height="90" fill="#92400e"/>
<path d="M300 100 L200 160 L150 210 M200 160 L210 230 M300 100 L400 160 L450 210 M400 160 L390 230 M300 100 L300 200" fill="none" stroke="#92400e" stroke-width="10"/>
<g fill="#22c55e"><circle cx="145" cy="218" r="18"/><circle cx="212" cy="236" r="16"/><circle cx="455" cy="218" r="18"/><circle cx="388" cy="236" r="16"/><circle cx="300" cy="212" r="18"/></g>
<text x="320" y="55" font-size="17" fill="#78350f">tronco = trachea</text>
<text x="40" y="150" font-size="17" fill="#78350f">rami = bronchi</text>
<text x="460" y="150" font-size="17" fill="#15803d">foglie = alveoli</text>
</svg>`
        },
        {
          label: "🎈 Il palloncino e la siringa",
          html: `<p>Prendi una <b>siringa senza ago</b> e tappa il foro con il dito. Se tiri lo stantuffo, senti che "risucchia": hai aumentato il volume e la pressione dentro è calata. Appena togli il dito, l'aria entra. È esattamente quello che fa il diaframma!</p>
<p>Questo legame fra volume e pressione (a temperatura costante, se il volume raddoppia la pressione si dimezza) è la <b>legge di Boyle</b>, scoperta dall'irlandese <b>Robert Boyle</b> nel <b>1662</b>.</p>`
        },
        {
          label: "🔥 La candela che respira",
          html: `<p>Nel 1774–1777 il chimico francese <b>Antoine Lavoisier</b> capì che la respirazione è una <b>combustione lenta</b>, simile a una candela che brucia: entrambe consumano <b>ossigeno</b> e producono <b>CO<sub>2</sub></b>, acqua e calore. Lavoisier misurò il calore prodotto da un porcellino d'India e dimostrò che era simile a quello della combustione del carbonio.</p>
<p>Differenza importante: nella candela l'energia si libera tutta insieme come fiamma; nelle cellule, grazie agli enzimi, si libera a piccoli passi e viene immagazzinata in una molecola chiamata <b>ATP</b>.</p>`
        },
        {
          label: "🐟 Branchie, trachee e polmoni",
          html: `<p>Non tutti respirano come noi:</p>
<ul>
<li><b>Pesci</b>: <b>branchie</b>, lamelle sottilissime che estraggono l'O<sub>2</sub> sciolto nell'acqua (che ne contiene circa 30 volte meno dell'aria);</li>
<li><b>Insetti</b>: <b>trachee</b>, tubicini che portano l'aria direttamente alle cellule attraverso fori sul corpo (gli stigmi);</li>
<li><b>Anfibi</b>: polmoni semplici, ma anche respirazione attraverso la <b>pelle</b> umida;</li>
<li><b>Uccelli</b>: polmoni con <b>sacchi aerei</b>, in cui l'aria scorre in un solo senso: sono i respiratori più efficienti, capaci di volare oltre gli 8000 m.</li>
</ul>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il fumo e le ciglia",
      html: `<p>Il fumo di sigaretta contiene oltre <b>7000 sostanze chimiche</b>, almeno 70 delle quali cancerogene. Paralizza le <b>ciglia</b> della trachea: il muco sporco non viene più spinto fuori e si accumula (ecco la "tosse del fumatore"). Il <b>monossido di carbonio</b> (CO) del fumo si lega all'emoglobina circa <b>200 volte</b> più fortemente dell'ossigeno e le "ruba il posto". La buona notizia: dopo aver smesso, il rischio diminuisce di anno in anno. Il modo migliore è non cominciare mai.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il singhiozzo e lo sbadiglio",
      html: `<p>Il <b>singhiozzo</b> è una contrazione improvvisa e involontaria del diaframma, seguita dalla chiusura rapida delle corde vocali: è quello il "hic!". Lo <b>starnuto</b> può espellere aria a velocità di decine di km/h. E in apnea gli apneisti professionisti, dopo un lungo allenamento, riescono a trattenere il respiro per oltre <b>10 minuti</b> respirando prima ossigeno puro, mentre una persona normale resiste circa 1 minuto.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della respirazione: tocca i nodi e scopri il perché",
      nodes: [
        { id: "mito", label: "Respirazione cellulare", x: 50, y: 6, color: "#f59e0b", html: "Nei mitocondri il glucosio reagisce con O₂ e libera energia, CO₂ e acqua.", why: "È il motivo profondo per cui respiriamo. Lavoisier (1777) intuì che respirare è come bruciare lentamente; il ciclo di reazioni che avviene nei mitocondri fu scoperto da Hans Krebs nel 1937." },
        { id: "vie", label: "Vie respiratorie", x: 18, y: 26, color: "#0ea5e9", html: "Naso, faringe, laringe, trachea, bronchi, bronchioli.", why: "Prima di arrivare agli alveoli delicati l'aria va pulita, scaldata e umidificata: per questo le vie sono rivestite di muco e ciglia." },
        { id: "polmoni", label: "Polmoni", x: 50, y: 30, color: "#ec4899", html: "Organi spugnosi con milioni di alveoli.", why: "Per scambiare molti gas serve una superficie enorme in poco spazio: ripiegare la superficie in milioni di sacchettini è la soluzione, come nei villi dell'intestino." },
        { id: "diaframma", label: "Diaframma", x: 82, y: 26, color: "#ea580c", html: "Muscolo a cupola che con la sua contrazione fa entrare l'aria.", why: "I polmoni non hanno muscoli: si gonfiano perché il torace si allarga e la pressione interna diminuisce, come spiega la legge di Boyle (1662)." },
        { id: "alveoli", label: "Alveoli", x: 50, y: 55, color: "#be185d", html: "Sacchettini con pareti sottilissime circondati da capillari.", why: "Furono osservati per la prima volta al microscopio da Marcello Malpighi nel 1661, che descrisse i polmoni come fatti di \"vescichette\" e non di carne compatta." },
        { id: "diff", label: "Diffusione", x: 18, y: 60, color: "#16a34a", html: "I gas passano da dove sono più concentrati a dove lo sono meno.", why: "È un fenomeno fisico dovuto al movimento casuale delle molecole, descritto matematicamente da Adolf Fick nel 1855. Non richiede energia: per questo le pareti devono essere sottilissime." },
        { id: "sangue", label: "Sangue ed emoglobina", x: 82, y: 58, color: "#dc2626", html: "Il sangue porta l'O₂ alle cellule e riporta la CO₂.", why: "Qui respiratorio e circolatorio lavorano in squadra: la piccola circolazione porta il sangue dal cuore destro ai polmoni e lo riporta ossigenato al cuore sinistro." },
        { id: "bulbo", label: "Controllo nervoso", x: 30, y: 85, color: "#7c3aed", html: "Il bulbo regola automaticamente il ritmo del respiro.", why: "Sensori nei vasi e nel cervello misurano soprattutto la CO₂: quando aumenta (ad esempio correndo) il respiro accelera. Per questo non riesci a trattenere il fiato all'infinito." },
        { id: "salute", label: "Salute dei polmoni", x: 70, y: 88, color: "#64748b", html: "Niente fumo, aria pulita, attività fisica.", why: "Fumo e smog danneggiano ciglia e alveoli; malattie come l'asma restringono i bronchi. Lo sport aumenta l'efficienza dei muscoli respiratori." }
      ],
      edges: [
        ["mito", "polmoni", "richiede O₂ dai"],
        ["vie", "polmoni", "portano l'aria ai"],
        ["diaframma", "polmoni", "fa entrare aria nei"],
        ["polmoni", "alveoli", "sono fatti di"],
        ["alveoli", "diff", "scambiano per"],
        ["alveoli", "sangue", "cedono O₂ al"],
        ["sangue", "mito", "porta O₂ ai"],
        ["bulbo", "diaframma", "comanda il"],
        ["salute", "vie", "protegge le"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Vie respiratorie: <b>naso → faringe → laringe → trachea → bronchi → bronchioli → alveoli</b>.</li>
<li><b>Inspirazione</b>: diaframma si contrae e scende, volume ↑, pressione ↓, l'aria entra. <b>Espirazione</b>: il contrario.</li>
<li>Negli <b>alveoli</b> avviene lo <b>scambio dei gas</b> per <b>diffusione</b>: O<sub>2</sub> nel sangue, CO<sub>2</sub> fuori.</li>
<li>Lo scopo è la <b>respirazione cellulare</b> nei mitocondri, che produce energia.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: scambio dei gas",
      questions: [
        { type: "mc", q: "Come passa l'ossigeno dall'alveolo al sangue?", options: ["Per diffusione", "Pompato dal cuore", "Con l'aiuto degli enzimi digestivi"], answer: 0, explain: "Per diffusione, da dove è più concentrato a dove lo è meno." },
        { type: "num", q: "Circa quale percentuale di CO₂ c'è nell'aria espirata?", answer: 4, tol: 1, unit: "%", explain: "Circa 4%, contro lo 0,04% dell'aria inspirata: cento volte di più." },
        { type: "tf", q: "Nell'aria espirata non c'è più ossigeno.", answer: false, explain: "Ce n'è ancora circa il 16%." }
      ]
    }
  ],
  glossary: [
    { t: "Ventilazione polmonare", d: "Movimento dell'aria dentro e fuori dai polmoni." },
    { t: "Respirazione cellulare", d: "Reazione con cui le cellule ricavano energia dal glucosio usando ossigeno." },
    { t: "Laringe", d: "Organo delle vie respiratorie che contiene le corde vocali." },
    { t: "Trachea", d: "Tubo rinforzato da anelli di cartilagine che porta l'aria ai bronchi." },
    { t: "Bronchi", d: "Le due diramazioni della trachea che entrano nei polmoni." },
    { t: "Alveoli", d: "Minuscoli sacchettini dei polmoni dove avviene lo scambio dei gas." },
    { t: "Diaframma", d: "Muscolo a cupola che separa torace e addome; il principale muscolo della respirazione." },
    { t: "Pleura", d: "Doppia membrana che avvolge i polmoni." },
    { t: "Diffusione", d: "Spostamento spontaneo di una sostanza da dove è più concentrata a dove lo è meno." },
    { t: "Capacità vitale", d: "Massimo volume d'aria espirabile dopo un'inspirazione profonda." },
    { t: "Mitocondrio", d: "Organulo della cellula in cui avviene la respirazione cellulare." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine il percorso dell'aria inspirata.", items: ["Naso", "Faringe", "Laringe", "Trachea", "Bronchi", "Alveoli"], explain: "Naso, faringe, laringe, trachea, bronchi (e bronchioli), alveoli." },
      { type: "mc", q: "Qual è la funzione degli anelli di cartilagine della trachea?", options: ["Produrre la voce", "Tenere la trachea sempre aperta", "Scaldare l'aria"], answer: 1, explain: "Impediscono alla trachea di schiacciarsi." },
      { type: "mc", q: "Dove avviene lo scambio fra ossigeno e anidride carbonica?", options: ["Nella trachea", "Negli alveoli", "Nella laringe", "Nel diaframma"], answer: 1, explain: "Negli alveoli, circondati da capillari." },
      { type: "tf", q: "Durante l'inspirazione la pressione dentro i polmoni diminuisce.", answer: true, explain: "Il volume aumenta, la pressione cala e l'aria entra." },
      { type: "num", q: "Fai 16 respiri al minuto da 0,5 litri. Quanti litri d'aria respiri in un minuto?", answer: 8, unit: "litri", explain: "16 × 0,5 = 8 litri." },
      { type: "mc", q: "Quale gas è il più abbondante nell'aria che respiriamo?", options: ["Ossigeno", "Azoto", "Anidride carbonica"], answer: 1, explain: "L'azoto è circa il 78%." },
      { type: "text", q: "Come si chiama il muscolo a cupola sotto i polmoni?", answer: ["diaframma", "il diaframma"], explain: "Il diaframma." },
      { type: "mc", q: "Perché è meglio respirare con il naso?", options: ["Perché entra più ossigeno", "Perché l'aria viene filtrata, scaldata e umidificata", "Perché la bocca non comunica con i polmoni"], answer: 1, explain: "Peli, muco e vasi del naso preparano l'aria." },
      { type: "mc", q: "Nella respirazione cellulare il glucosio reagisce con l'ossigeno e produce…", options: ["azoto e sale", "anidride carbonica, acqua ed energia", "solo ossigeno"], answer: 1, explain: "Glucosio + O₂ → CO₂ + H₂O + energia." },
      { type: "tf", q: "Il ritmo del respiro è regolato soprattutto dalla quantità di CO₂ nel sangue.", answer: true, explain: "Il bulbo misura la CO₂: se aumenta, il respiro accelera." },
      { type: "mc", q: "Il fumo danneggia le vie respiratorie perché…", options: ["paralizza le ciglia e il CO occupa l'emoglobina", "rinforza gli alveoli", "aumenta la capacità vitale"], answer: 0, explain: "Le ciglia non puliscono più e il monossido di carbonio riduce il trasporto di O₂." }
    ]
  }
});

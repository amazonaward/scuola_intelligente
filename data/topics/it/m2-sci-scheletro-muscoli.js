TOPIC('it', {
  id: "m2-sci-scheletro-muscoli",
  title: "Scheletro e muscoli",
  intro: "Correre, scrivere, sorridere, stare in piedi: tutto è possibile grazie al <b>sistema locomotore</b>, formato dallo <b>scheletro</b> (circa <b>206 ossa</b> in un adulto), dalle <b>articolazioni</b> e da più di <b>600 muscoli</b>. Ossa e muscoli lavorano insieme come un sistema di <b>leve</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. A che cosa serve lo scheletro",
      html: `<p>Lo <b>scheletro</b> (o apparato scheletrico) ha cinque funzioni principali:</p>
<ol>
<li><b>Sostegno</b>: è l'impalcatura che dà forma al corpo e lo tiene in piedi.</li>
<li><b>Protezione</b>: il cranio protegge l'encefalo, la gabbia toracica cuore e polmoni, la colonna vertebrale il midollo spinale.</li>
<li><b>Movimento</b>: le ossa sono leve mosse dai muscoli.</li>
<li><b>Produzione del sangue</b>: nel <b>midollo osseo rosso</b> nascono globuli rossi, globuli bianchi e piastrine.</li>
<li><b>Riserva di minerali</b>: le ossa contengono circa il <b>99% del calcio</b> del corpo e molto fosforo, che cedono al sangue quando serve.</li>
</ol>
<p>Un neonato ha circa <b>300</b> elementi ossei; crescendo molti si saldano tra loro (per esempio le ossa del cranio e quelle dell'osso sacro) e nell'adulto diventano circa <b>206</b>.</p>`
    },
    {
      type: "text",
      title: "2. Le parti dello scheletro",
      html: `<p>Lo scheletro si divide in due parti:</p>
<p><b>Scheletro assile</b> (l'asse centrale, circa 80 ossa):</p>
<ul>
<li><b>cranio</b>: ossa piatte saldate che formano la scatola cranica, più le ossa della faccia (l'unico osso mobile è la <b>mandibola</b>);</li>
<li><b>colonna vertebrale</b>: 33–34 vertebre (7 cervicali, 12 dorsali o toraciche, 5 lombari, 5 sacrali saldate nell'osso sacro, 4–5 coccigee). Ha 4 <b>curve</b> naturali che funzionano da ammortizzatore. Tra una vertebra e l'altra ci sono i <b>dischi intervertebrali</b>, cuscinetti di cartilagine;</li>
<li><b>gabbia toracica</b>: <b>12 paia di costole</b> e lo <b>sterno</b>.</li>
</ul>
<p><b>Scheletro appendicolare</b> (gli arti, 126 ossa):</p>
<ul>
<li><b>cingolo scapolare</b> (clavicole e scapole) e <b>arti superiori</b>: omero, radio e ulna, ossa della mano (27 per mano!);</li>
<li><b>cingolo pelvico</b> (bacino) e <b>arti inferiori</b>: <b>femore</b> (l'osso più lungo, circa 1/4 dell'altezza), rotula, tibia e perone, ossa del piede (26 per piede).</li>
</ul>
<p>L'osso più piccolo è la <b>staffa</b>, nell'orecchio medio: misura circa <b>3 mm</b>.</p>`
    },
    {
      type: "widget",
      title: "Trova le ossa principali",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 440" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="440" fill="#f8fafc"/>
<g fill="#fef9c3" stroke="#78716c" stroke-width="3">
<ellipse cx="300" cy="45" rx="35" ry="38"/>
<rect x="293" y="83" width="14" height="150" rx="5"/>
<ellipse cx="300" cy="150" rx="55" ry="60" fill="none"/>
<line x1="250" y1="95" x2="350" y2="95"/>
<line x1="245" y1="100" x2="200" y2="200"/><line x1="355" y1="100" x2="400" y2="200"/>
<line x1="200" y1="205" x2="180" y2="290"/><line x1="208" y1="205" x2="190" y2="292"/>
<line x1="400" y1="205" x2="420" y2="290"/><line x1="392" y1="205" x2="410" y2="292"/>
<path d="M255 235 Q300 210 345 235 L335 270 L265 270 Z"/>
<line x1="280" y1="270" x2="265" y2="360"/><line x1="320" y1="270" x2="335" y2="360"/>
<circle cx="265" cy="365" r="7"/><circle cx="335" cy="365" r="7"/>
<line x1="263" y1="372" x2="260" y2="425"/><line x1="271" y1="372" x2="270" y2="425"/>
<line x1="337" y1="372" x2="340" y2="425"/><line x1="329" y1="372" x2="330" y2="425"/>
</g>
<g stroke="#a8a29e" stroke-width="2" fill="none">
<path d="M255 125 Q300 140 345 125"/><path d="M252 145 Q300 160 348 145"/><path d="M255 165 Q300 180 345 165"/>
</g>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Cranio" },
          { x: 300, y: 215, label: "Colonna vertebrale" },
          { x: 335, y: 150, label: "Costole" },
          { x: 225, y: 150, label: "Omero" },
          { x: 300, y: 245, label: "Bacino" },
          { x: 272, y: 315, label: "Femore" },
          { x: 265, y: 365, label: "Rotula" },
          { x: 340, y: 400, label: "Tibia" }
        ]
      },
      caption: "Schema semplificato dello scheletro umano visto di fronte."
    },
    {
      type: "text",
      title: "3. Com'è fatto un osso",
      html: `<p>Le ossa non sono "sassi morti": sono <b>organi vivi</b>, con vasi sanguigni e nervi, che crescono, si riparano e si rinnovano continuamente (lo scheletro si rinnova quasi del tutto in circa <b>10 anni</b>).</p>
<p>Il <b>tessuto osseo</b> è fatto di:</p>
<ul>
<li><b>sali minerali</b> (soprattutto fosfato di calcio, circa 2/3 del peso): danno <b>durezza</b>;</li>
<li><b>collagene</b>, una proteina fibrosa (circa 1/3): dà <b>elasticità</b>, così l'osso non si spezza come il vetro;</li>
<li><b>cellule</b>: gli <b>osteoblasti</b> costruiscono osso nuovo, gli <b>osteoclasti</b> lo demoliscono, gli <b>osteociti</b> lo mantengono.</li>
</ul>
<p>In base alla forma le ossa sono <b>lunghe</b> (femore, omero), <b>corte</b> (vertebre, ossa del polso) e <b>piatte</b> (cranio, scapola, sterno).</p>
<p>Un osso lungo ha:</p>
<ul>
<li>il <b>periostio</b>, una membrana esterna che nutre l'osso e lo ripara dopo le fratture;</li>
<li>l'<b>osso compatto</b>, duro e pieno, all'esterno;</li>
<li>l'<b>osso spugnoso</b>, con tante cavità come una spugna, nelle estremità (le <b>epifisi</b>), dove si trova il midollo rosso;</li>
<li>il <b>canale midollare</b> nella parte centrale (la <b>diafisi</b>), con il <b>midollo giallo</b>, ricco di grasso.</li>
</ul>
<p>Le ossa crescono in lunghezza grazie alle <b>cartilagini di accrescimento</b>, vicino alle epifisi: si chiudono verso i 18–21 anni e da allora non si cresce più in altezza.</p>`
    },
    {
      type: "3d",
      title: "Sezione 3D di un osso lungo",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fca5a5", label: "Periostio" },
          { r: 0.95, color: "#f5f5f4", label: "Osso compatto" },
          { r: 0.7, color: "#fde68a", label: "Osso spugnoso" },
          { r: 0.45, color: "#facc15", label: "Canale midollare (midollo)" }
        ]
      },
      caption: "Ruota la sezione: l'osso è un tubo con le pareti dure e l'interno più leggero. Così è resistente ma non troppo pesante."
    },
    {
      type: "text",
      title: "4. Le articolazioni",
      html: `<p>Il punto in cui due o più ossa si incontrano si chiama <b>articolazione</b>. Ce ne sono tre tipi:</p>
<table>
<tr><th>Tipo</th><th>Movimento</th><th>Esempi</th></tr>
<tr><td><b>Immobili</b> (sinartrosi)</td><td>nessuno</td><td>ossa del cranio (unite da suture)</td></tr>
<tr><td><b>Semimobili</b> (anfiartrosi)</td><td>limitato</td><td>vertebre, unione delle costole con lo sterno</td></tr>
<tr><td><b>Mobili</b> (diartrosi)</td><td>ampio</td><td>spalla, gomito, ginocchio, anca, dita</td></tr>
</table>
<p>Nelle articolazioni mobili le estremità delle ossa sono rivestite di <b>cartilagine</b> liscia e chiuse in una <b>capsula articolare</b> piena di <b>liquido sinoviale</b>, un "olio" che riduce l'attrito. I <b>legamenti</b>, cordoni robusti, tengono unite le ossa.</p>
<p>Le articolazioni mobili hanno forme diverse:</p>
<ul>
<li><b>a cerniera</b> (gomito, ginocchio): si piegano in un solo piano, come una porta;</li>
<li><b>a sfera</b> (spalla, anca): ruotano in tutte le direzioni;</li>
<li><b>a perno</b> (fra le prime due vertebre del collo): permettono la rotazione, come quando dici "no" con la testa;</li>
<li><b>a sella</b> (alla base del pollice): ci permette di opporre il pollice alle altre dita.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: ossa e articolazioni",
      questions: [
        { type: "num", q: "Quante ossa ha circa lo scheletro di un adulto?", answer: 206, explain: "Circa 206 ossa." },
        { type: "mc", q: "Qual è l'osso più lungo del corpo?", options: ["Omero", "Tibia", "Femore", "Colonna vertebrale"], answer: 2, explain: "Il femore, nella coscia." },
        { type: "mc", q: "Dove si trova il midollo osseo rosso?", options: ["Nell'osso spugnoso", "Nel periostio", "Nella cartilagine"], answer: 0, explain: "Nelle cavità dell'osso spugnoso, soprattutto nelle ossa piatte e nelle epifisi." },
        { type: "mc", q: "L'articolazione della spalla è…", options: ["a cerniera", "a sfera", "immobile"], answer: 1, explain: "È a sfera: permette movimenti in tutte le direzioni." }
      ]
    },
    {
      type: "text",
      title: "5. I muscoli",
      html: `<p>I <b>muscoli</b> sono organi capaci di <b>contrarsi</b>, cioè di accorciarsi, trasformando l'energia chimica in movimento. Rappresentano circa il <b>40%</b> del peso corporeo. Esistono tre tipi di tessuto muscolare:</p>
<table>
<tr><th>Tipo</th><th>Aspetto</th><th>Controllo</th><th>Dove</th></tr>
<tr><td><b>Striato scheletrico</b></td><td>fibre lunghe con strisce</td><td><b>volontario</b></td><td>muscoli attaccati alle ossa</td></tr>
<tr><td><b>Liscio</b></td><td>cellule a fuso, senza strisce</td><td><b>involontario</b></td><td>pareti di stomaco, intestino, vasi</td></tr>
<tr><td><b>Cardiaco</b></td><td>striato e ramificato</td><td><b>involontario</b></td><td>solo nel cuore (miocardio)</td></tr>
</table>
<p>Un muscolo scheletrico è un fascio di <b>fibre muscolari</b> (cellule lunghe anche diversi centimetri), a loro volta piene di <b>miofibrille</b> fatte di due proteine, <b>actina</b> e <b>miosina</b>, che scorrono l'una sull'altra quando il muscolo si contrae.</p>
<p>I muscoli si attaccano alle ossa tramite i <b>tendini</b>, cordoni resistentissimi di collagene. Il più grosso è il <b>tendine d'Achille</b>, nel tallone.</p>
<p>Il muscolo più grande è il <b>grande gluteo</b>, il più piccolo lo <b>stapedio</b> nell'orecchio (circa 1 mm); il più forte in rapporto alla sua dimensione è il <b>massetere</b>, che chiude la mandibola.</p>`
    },
    {
      type: "text",
      title: "6. Muscoli antagonisti e leve del corpo",
      html: `<p>Un muscolo sa solo <b>tirare</b>, mai spingere. Per questo i muscoli lavorano <b>in coppia</b>: i <b>muscoli antagonisti</b>.</p>
<ul>
<li>Per <b>piegare</b> il braccio si contrae il <b>bicipite</b> e si rilassa il <b>tricipite</b> (muscolo <b>flessore</b>).</li>
<li>Per <b>distendere</b> il braccio si contrae il <b>tricipite</b> e si rilassa il bicipite (muscolo <b>estensore</b>).</li>
</ul>
<p>Le ossa funzionano come <b>leve</b>: l'articolazione è il <b>fulcro</b>, il muscolo applica la <b>potenza</b>, il peso da sollevare è la <b>resistenza</b>.</p>
<ul>
<li><b>Avambraccio</b> che solleva un peso: leva di <b>3° genere</b> (la potenza, il bicipite, si attacca fra il gomito e la mano). È <b>svantaggiosa</b>: il bicipite deve fare una forza molte volte maggiore del peso, ma in cambio la mano si muove veloce e ampia.</li>
<li>Stare <b>in punta di piedi</b>: leva di <b>2° genere</b> (fulcro sulle dita, resistenza = peso del corpo sulla caviglia, potenza = polpaccio sul tallone).</li>
<li>Annuire con la <b>testa</b>: leva di <b>1° genere</b> (fulcro fra cranio e prima vertebra).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Bicipite e tricipite: una coppia antagonista",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<text x="150" y="28" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Flessione</text>
<text x="450" y="28" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Estensione</text>
<rect x="50" y="60" width="18" height="150" rx="8" fill="#f5f5f4" stroke="#78716c" stroke-width="3"/>
<line x1="59" y1="210" x2="200" y2="120" stroke="#78716c" stroke-width="16" stroke-linecap="round"/>
<line x1="59" y1="210" x2="200" y2="120" stroke="#f5f5f4" stroke-width="10" stroke-linecap="round"/>
<ellipse cx="88" cy="140" rx="22" ry="55" fill="#ef4444"/>
<ellipse cx="38" cy="140" rx="12" ry="50" fill="#fca5a5"/>
<text x="115" y="110" font-size="15" fill="#b91c1c" font-weight="bold">bicipite</text>
<text x="115" y="128" font-size="14" fill="#b91c1c">contratto</text>
<text x="0" y="250" font-size="14" fill="#be123c">tricipite rilassato</text>
<circle cx="59" cy="210" r="9" fill="#475569"/>
<text x="75" y="230" font-size="14" fill="#334155">gomito = fulcro</text>
<rect x="350" y="60" width="18" height="150" rx="8" fill="#f5f5f4" stroke="#78716c" stroke-width="3"/>
<line x1="359" y1="210" x2="560" y2="230" stroke="#78716c" stroke-width="16" stroke-linecap="round"/>
<line x1="359" y1="210" x2="560" y2="230" stroke="#f5f5f4" stroke-width="10" stroke-linecap="round"/>
<ellipse cx="388" cy="135" rx="10" ry="60" fill="#fca5a5"/>
<ellipse cx="335" cy="140" rx="20" ry="55" fill="#ef4444"/>
<text x="410" y="110" font-size="15" fill="#be123c">bicipite rilassato</text>
<text x="230" y="80" font-size="15" fill="#b91c1c" font-weight="bold">tricipite</text>
<text x="230" y="98" font-size="14" fill="#b91c1c">contratto</text>
<circle cx="359" cy="210" r="9" fill="#475569"/>
</svg>`,
      caption: "Il muscolo contratto è rosso acceso, quello rilassato è rosa: quando uno tira, l'altro si allunga."
    },
    {
      type: "widget",
      title: "Che tipo di muscolo è?",
      widget: "classify",
      options: {
        groups: ["Striato scheletrico (volontario)", "Liscio (involontario)", "Cardiaco"],
        items: [
          ["💪 Bicipite", 0],
          ["🦵 Quadricipite della coscia", 0],
          ["😃 Muscoli del sorriso", 0],
          ["🍽️ Parete dello stomaco", 1],
          ["🩸 Parete delle arterie", 1],
          ["🌀 Parete dell'intestino", 1],
          ["❤️ Miocardio", 2]
        ]
      },
      caption: "Ricorda: il cuore è striato ma involontario, un tipo a sé."
    },
    {
      type: "example",
      title: "Esempio pratico: la forza del bicipite",
      html: `<p>Tieni in mano una bottiglia da <b>20 N</b> (circa 2 kg) con l'avambraccio orizzontale. La mano è a <b>35 cm</b> dal gomito; il bicipite si attacca al radio a circa <b>5 cm</b> dal gomito.</p>
<p>Legge della leva: P · b<sub>P</sub> = R · b<sub>R</sub> → P · 5 = 20 · 35 → P = 700 / 5 = <b>140 N</b>.</p>
<p>Il bicipite deve tirare con una forza <b>7 volte</b> più grande del peso! In cambio, quando si accorcia di 1 cm, la mano si sposta di 7 cm: la leva svantaggiosa fa guadagnare velocità e ampiezza.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: lo zaino e la postura",
      html: `<p>Il Ministero della Salute raccomanda che lo zaino non superi circa il <b>10–15% del peso corporeo</b>. Se pesi 45 kg, lo zaino non dovrebbe superare 45 × 0,15 ≈ <b>6,7 kg</b>.</p>
<p>Consigli: usa <b>entrambe le spalline</b>, regolale in modo che lo zaino stia aderente alla schiena, metti i libri più pesanti vicino alla schiena. Per sollevare un peso da terra <b>piega le ginocchia</b> e tieni la schiena dritta: così lavorano i muscoli forti delle gambe e non si caricano i dischi lombari.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire scheletro e muscoli",
      intro: "Se i nomi latini delle ossa ti spaventano, prova a guardarle con occhi diversi.",
      tabs: [
        {
          label: "🏗️ Il corpo come una gru",
          html: `<p>Pensa a una <b>gru da cantiere</b>: la struttura metallica (lo scheletro) non si muove da sola; servono i <b>cavi</b> (i muscoli e i tendini) che tirano e i <b>perni</b> (le articolazioni) intorno a cui ruotano i bracci. I cavi possono solo tirare: per muovere il braccio nei due versi ne servono due, uno per lato (i muscoli antagonisti).</p>
<p>Anche gli ingegneri copiano la natura: le gru, i bracci robotici e le protesi moderne sono costruiti con lo stesso principio.</p>`
        },
        {
          label: "🧪 L'esperimento dell'osso di pollo",
          html: `<p>Prova a casa con un adulto:</p>
<ol>
<li>Prendi due ossa di coscia di pollo pulite.</li>
<li>Metti la prima in un barattolo di <b>aceto</b> per 3–4 giorni: l'acido scioglie i <b>sali di calcio</b>. L'osso diventa così flessibile che puoi piegarlo quasi a nodo! Resta solo il <b>collagene</b>.</li>
<li>Metti la seconda in <b>forno</b> caldo per circa un'ora (con l'aiuto di un adulto): il calore distrugge il collagene. L'osso diventa <b>fragile</b> e si sbriciola.</li>
</ol>
<p>Conclusione: i minerali danno <b>durezza</b>, il collagene dà <b>elasticità</b>. Servono entrambi.</p>`
        },
        {
          label: "🦴 Perché le ossa sono tubi",
          html: `<p>Un <b>tubo</b> resiste alla flessione quasi come un cilindro pieno, ma pesa molto meno: per questo le biciclette e le impalcature sono fatte di tubi, e il femore ha un canale nel mezzo. Il femore umano sopporta in verticale carichi di diverse tonnellate prima di rompersi. Ruota il cilindro: immagina che la parte centrale sia vuota.</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 0.6, h: 2.2, color: "#f5f5f4", labels: true }
        },
        {
          label: "🌍 Scheletri di altri animali",
          html: `<p>Confrontare aiuta a capire che cosa è davvero importante:</p>
<ul>
<li>la <b>giraffa</b> ha <b>7 vertebre cervicali</b>, proprio come noi (e come quasi tutti i mammiferi): sono solo molto più lunghe, fino a 25 cm l'una;</li>
<li>gli <b>uccelli</b> hanno ossa cave con sottili "travi" interne: leggere e robuste per volare;</li>
<li>gli <b>insetti</b> e i granchi hanno uno <b>scheletro esterno</b> (esoscheletro) di chitina: per crescere devono cambiarlo (muta);</li>
<li>gli squali hanno uno scheletro di <b>cartilagine</b>, più leggero e flessibile.</li>
</ul>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Vesalio e l'anatomia moderna",
      html: `<p>Nel <b>1543</b> il medico fiammingo <b>Andrea Vesalio</b>, professore all'Università di <b>Padova</b>, pubblicò il <i>De humani corporis fabrica</i>, il primo grande atlante di anatomia basato sulla dissezione di corpi umani. Mostrò che molte descrizioni di Galeno, accettate da 1300 anni, erano sbagliate perché basate su animali come scimmie e maiali. Per esempio, la mandibola umana è un osso unico, non due come nel cane. Le sue tavole sono così belle che si studiano ancora oggi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Più alti nello spazio",
      html: `<p>In assenza di gravità i dischi intervertebrali si "gonfiano" e gli astronauti diventano fino a <b>5 cm più alti</b>! Ma senza il carico della gravità le ossa perdono calcio (circa l'1–2% al mese) e i muscoli si indeboliscono. Per questo sulla Stazione Spaziale Internazionale gli astronauti si allenano circa <b>2 ore al giorno</b>. Anche sulla Terra vale la stessa regola: ossa e muscoli si rafforzano solo se vengono usati.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa del sistema locomotore: tocca i nodi e scopri il perché",
      nodes: [
        { id: "loco", label: "Sistema locomotore", x: 50, y: 6, color: "#0ea5e9", html: "Ossa + articolazioni + muscoli: permette sostegno e movimento.", why: "Nei vertebrati lo scheletro interno è cresciuto insieme al corpo, senza mute. Andrea Vesalio (1543) ne diede la prima descrizione moderna basata sull'osservazione diretta." },
        { id: "ossa", label: "Ossa", x: 20, y: 28, color: "#a8a29e", html: "Circa 206 organi vivi, lunghi, corti o piatti.", why: "Sono fatte di minerali di calcio (durezza) e collagene (elasticità). L'equilibrio fra osteoblasti e osteoclasti le rimodella in base agli sforzi: è la legge di Wolff (1892)." },
        { id: "midollo", label: "Midollo osseo", x: 8, y: 55, color: "#ef4444", html: "Il midollo rosso produce le cellule del sangue.", why: "Qui l'apparato scheletrico si collega al circolatorio. Le cellule staminali del midollo furono scoperte negli anni '60 da Till e McCulloch; i trapianti di midollo salvano persone con leucemia." },
        { id: "calcio", label: "Calcio e vitamina D", x: 30, y: 52, color: "#f5f5f4", html: "Minerale principale delle ossa; la vitamina D aiuta ad assorbirlo.", why: "La vitamina D si forma nella pelle esposta al Sole. La sua mancanza nei bambini causa il rachitismo, molto diffuso nelle città industriali dell'Ottocento piene di fumo." },
        { id: "artic", label: "Articolazioni", x: 50, y: 32, color: "#f59e0b", html: "Punti di contatto fra le ossa: immobili, semimobili, mobili.", why: "La forma delle superfici decide il movimento: una sfera in una cavità ruota in ogni direzione, una cerniera si piega in un solo piano. Cartilagine e liquido sinoviale riducono l'attrito più del ghiaccio su ghiaccio." },
        { id: "muscoli", label: "Muscoli", x: 80, y: 28, color: "#dc2626", html: "Organi che si contraggono: striati, lisci, cardiaco.", why: "Actina e miosina scorrono l'una sull'altra usando l'energia dell'ATP: è la teoria dei filamenti scorrevoli, proposta nel 1954 da Hugh Huxley e Andrew Huxley (due scienziati con lo stesso cognome ma non parenti)." },
        { id: "tendini", label: "Tendini e legamenti", x: 82, y: 58, color: "#a16207", html: "I tendini uniscono muscoli e ossa; i legamenti uniscono ossa e ossa.", why: "Sono fatti di collagene, la proteina più abbondante del corpo, organizzata in fibre parallele molto resistenti alla trazione." },
        { id: "antag", label: "Muscoli antagonisti", x: 62, y: 62, color: "#be123c", html: "Coppie di muscoli con azioni opposte (bicipite/tricipite).", why: "Un muscolo può solo accorciarsi e tirare: per tornare indietro serve un altro muscolo che tiri in senso opposto." },
        { id: "leve", label: "Leve del corpo", x: 45, y: 88, color: "#7c3aed", html: "Ossa = leve, articolazioni = fulcri, muscoli = potenze.", why: "Giovanni Alfonso Borelli, nel De motu animalium (1680), applicò per primo la legge delle leve di Archimede ai muscoli, fondando la biomeccanica." }
      ],
      edges: [
        ["loco", "ossa", ""],
        ["loco", "artic", ""],
        ["loco", "muscoli", ""],
        ["ossa", "midollo", "contengono il"],
        ["ossa", "calcio", "riserva di"],
        ["muscoli", "tendini", "si attaccano con i"],
        ["muscoli", "antag", "lavorano come"],
        ["artic", "leve", "fanno da fulcro alle"],
        ["antag", "leve", "muovono le"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare – e prenditi cura del tuo corpo",
      html: `<ul>
<li>Lo scheletro (circa <b>206 ossa</b>) sostiene, protegge, permette il movimento, produce il sangue e conserva il calcio.</li>
<li>Osso = <b>minerali</b> (durezza) + <b>collagene</b> (elasticità); periostio, osso compatto, spugnoso, midollo.</li>
<li>Articolazioni <b>immobili, semimobili, mobili</b>; legamenti, cartilagine, liquido sinoviale.</li>
<li>Muscoli <b>striati</b> (volontari), <b>lisci</b> (involontari), <b>cardiaco</b>; si attaccano con i <b>tendini</b>; lavorano in coppie <b>antagoniste</b>.</li>
<li>Per la salute: <b>movimento</b> ogni giorno (l'OMS consiglia almeno 60 minuti per i ragazzi), latte, latticini, verdure a foglia, sole, buona postura.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: muscoli",
      questions: [
        { type: "mc", q: "Che cosa collega un muscolo a un osso?", options: ["Il legamento", "Il tendine", "La cartilagine"], answer: 1, explain: "Il tendine; il legamento collega osso a osso." },
        { type: "tf", q: "I muscoli possono sia tirare sia spingere.", answer: false, explain: "Possono solo tirare (contrarsi): per questo lavorano in coppie antagoniste." },
        { type: "mc", q: "Il muscolo dell'intestino è…", options: ["striato volontario", "liscio involontario", "cardiaco"], answer: 1, explain: "Le pareti degli organi interni hanno muscolatura liscia." }
      ]
    }
  ],
  glossary: [
    { t: "Scheletro assile", d: "Parte centrale dello scheletro: cranio, colonna vertebrale, gabbia toracica." },
    { t: "Scheletro appendicolare", d: "Ossa degli arti e dei cingoli (spalle e bacino)." },
    { t: "Periostio", d: "Membrana che riveste l'osso e lo nutre." },
    { t: "Osso spugnoso", d: "Tessuto osseo con cavità, che contiene il midollo rosso." },
    { t: "Midollo osseo", d: "Tessuto dentro le ossa; quello rosso produce le cellule del sangue." },
    { t: "Collagene", d: "Proteina fibrosa che dà elasticità a ossa, tendini e pelle." },
    { t: "Articolazione", d: "Punto di contatto fra due o più ossa." },
    { t: "Legamento", d: "Cordone fibroso che unisce due ossa in un'articolazione." },
    { t: "Tendine", d: "Cordone fibroso che attacca un muscolo a un osso." },
    { t: "Muscoli antagonisti", d: "Coppie di muscoli che compiono movimenti opposti." },
    { t: "Actina e miosina", d: "Proteine delle fibre muscolari che scorrendo producono la contrazione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste NON è una funzione dello scheletro?", options: ["Proteggere gli organi", "Produrre le cellule del sangue", "Digerire il calcio", "Sostenere il corpo"], answer: 2, explain: "Lo scheletro conserva il calcio, ma non lo digerisce." },
      { type: "mc", q: "Che cosa protegge la gabbia toracica?", options: ["Encefalo", "Cuore e polmoni", "Stomaco e intestino"], answer: 1, explain: "Costole e sterno proteggono cuore e polmoni." },
      { type: "num", q: "Quante sono le vertebre cervicali (del collo)?", answer: 7, explain: "Sette, come in quasi tutti i mammiferi, giraffa compresa." },
      { type: "tf", q: "Le ossa sono organi vivi, con vasi sanguigni e nervi.", answer: true, explain: "Crescono, si riparano e si rinnovano continuamente." },
      { type: "mc", q: "Che cosa dà durezza alle ossa?", options: ["Il collagene", "I sali di calcio", "Il midollo giallo"], answer: 1, explain: "I sali minerali (fosfato di calcio) danno durezza; il collagene dà elasticità." },
      { type: "mc", q: "Il ginocchio è un'articolazione…", options: ["a sfera", "a cerniera", "immobile", "a perno"], answer: 1, explain: "Si piega soprattutto in un solo piano, come una cerniera." },
      { type: "text", q: "Come si chiama il muscolo che si contrae per piegare il braccio?", answer: ["bicipite", "il bicipite", "bicipite brachiale"], explain: "Il bicipite; il tricipite è il suo antagonista." },
      { type: "mc", q: "Quale tipo di muscolo è volontario?", options: ["Liscio", "Cardiaco", "Striato scheletrico"], answer: 2, explain: "Solo i muscoli striati scheletrici si muovono per nostra volontà." },
      { type: "order", q: "Metti in ordine gli strati di un osso lungo, dall'esterno all'interno.", items: ["Periostio", "Osso compatto", "Osso spugnoso", "Canale midollare"], explain: "Periostio, osso compatto, osso spugnoso, canale con il midollo." },
      { type: "num", q: "La mano è a 30 cm dal gomito e il bicipite si attacca a 5 cm. Che forza deve fare il bicipite per reggere un peso di 10 N?", answer: 60, unit: "N", explain: "P · 5 = 10 · 30 → P = 300 / 5 = 60 N." },
      { type: "mc", q: "L'avambraccio che solleva un oggetto è una leva di…", options: ["1° genere", "2° genere", "3° genere"], answer: 2, explain: "La potenza (bicipite) sta tra il fulcro (gomito) e la resistenza (mano)." },
      { type: "text", q: "Come si chiama il tendine più grosso del corpo, nel tallone?", answer: ["tendine d'achille", "achille", "d'achille", "tendine di achille"], explain: "Il tendine d'Achille, che unisce il polpaccio al calcagno." }
    ],
    gen: [["proportion", 1]]
  }
});

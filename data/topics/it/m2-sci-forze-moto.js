TOPIC('it', {
  id: "m2-sci-forze-moto",
  title: "Forze e moto",
  intro: "Perché una bicicletta accelera, frena o curva? Perché con un piede di porco si solleva un masso? In questa lezione impari a descrivere il <b>moto</b> (velocità e accelerazione), a capire che cosa sono le <b>forze</b> e come le <b>leve</b> ci aiutano a moltiplicarle.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Il moto è relativo",
      html: `<p>Un corpo è <b>in moto</b> quando la sua posizione cambia nel tempo rispetto a un <b>sistema di riferimento</b>, cioè rispetto a qualcosa che consideriamo fermo.</p>
<p>Seduto in treno, sei <b>fermo</b> rispetto al tuo sedile ma <b>in moto</b> rispetto alla stazione. E la Terra stessa gira intorno al Sole a circa 30 km al secondo! Per questo si dice che il moto è <b>relativo</b>.</p>
<p>Per descrivere un moto servono:</p>
<ul>
<li>la <b>traiettoria</b>: la linea percorsa (rettilinea, circolare, curva…);</li>
<li>lo <b>spazio percorso</b> <i>s</i>, in metri (m);</li>
<li>il <b>tempo</b> impiegato <i>t</i>, in secondi (s).</li>
</ul>`
    },
    {
      type: "text",
      title: "2. La velocità",
      html: `<p>La <b>velocità</b> dice quanto spazio si percorre nell'unità di tempo:</p>
<p style="font-size:1.3em;text-align:center"><b>v = s / t</b></p>
<p>Nel Sistema Internazionale si misura in <b>metri al secondo (m/s)</b>; nella vita quotidiana usiamo i <b>chilometri all'ora (km/h)</b>.</p>
<ul>
<li>da km/h a m/s: <b>dividi per 3,6</b> (72 km/h = 20 m/s);</li>
<li>da m/s a km/h: <b>moltiplica per 3,6</b> (10 m/s = 36 km/h).</li>
</ul>
<p>Perché 3,6? Perché 1 km = 1000 m e 1 h = 3600 s: 1000/3600 = 1/3,6.</p>
<p>Formule inverse: <b>s = v · t</b> e <b>t = s / v</b>.</p>
<p>Il <b>moto rettilineo uniforme</b> è quello in cui un corpo va in linea retta con velocità <b>costante</b>: percorre spazi uguali in tempi uguali. Il suo grafico spazio-tempo è una <b>retta</b> che parte dall'origine; più è ripida, maggiore è la velocità.</p>
<p>Quasi sempre però la velocità cambia: allora calcoliamo la <b>velocità media</b> (spazio totale / tempo totale).</p>`
    },
    {
      type: "svg",
      title: "Il grafico spazio-tempo",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<line x1="70" y1="270" x2="560" y2="270" stroke="#0f172a" stroke-width="3"/>
<line x1="70" y1="270" x2="70" y2="30" stroke="#0f172a" stroke-width="3"/>
<polygon points="560,264 575,270 560,276" fill="#0f172a"/>
<polygon points="64,30 70,15 76,30" fill="#0f172a"/>
<text x="560" y="300" font-size="17" fill="#0f172a">t (s)</text>
<text x="20" y="40" font-size="17" fill="#0f172a">s (m)</text>
<g stroke="#e2e8f0" stroke-width="1">
<line x1="170" y1="270" x2="170" y2="40"/><line x1="270" y1="270" x2="270" y2="40"/><line x1="370" y1="270" x2="370" y2="40"/><line x1="470" y1="270" x2="470" y2="40"/>
<line x1="70" y1="210" x2="560" y2="210"/><line x1="70" y1="150" x2="560" y2="150"/><line x1="70" y1="90" x2="560" y2="90"/>
</g>
<line x1="70" y1="270" x2="320" y2="40" stroke="#dc2626" stroke-width="5"/>
<line x1="70" y1="270" x2="560" y2="150" stroke="#2563eb" stroke-width="5"/>
<path d="M70 270 Q300 265 470 60" fill="none" stroke="#16a34a" stroke-width="5"/>
<text x="250" y="70" font-size="17" fill="#dc2626" font-weight="bold">veloce 🚗</text>
<text x="440" y="185" font-size="17" fill="#2563eb" font-weight="bold">lento 🚲</text>
<text x="420" y="110" font-size="17" fill="#16a34a" font-weight="bold">accelera 🏃</text>
</svg>`,
      caption: "Rette = velocità costante (moto uniforme): la più ripida è la più veloce. La curva verde diventa sempre più ripida: il corpo sta accelerando."
    },
    {
      type: "text",
      title: "3. L'accelerazione",
      html: `<p>Quando la velocità cambia, c'è un'<b>accelerazione</b>. Si calcola come variazione di velocità divisa per il tempo:</p>
<p style="font-size:1.3em;text-align:center"><b>a = (v<sub>finale</sub> − v<sub>iniziale</sub>) / t</b></p>
<p>Si misura in <b>m/s²</b> ("metri al secondo quadrato"): dice di quanti m/s aumenta la velocità ogni secondo.</p>
<ul>
<li>accelerazione <b>positiva</b>: la velocità aumenta;</li>
<li>accelerazione <b>negativa</b> (decelerazione): la velocità diminuisce, come quando si frena.</li>
</ul>
<p>Esempio: un'auto passa da 0 a 27 m/s (circa 100 km/h) in 9 s. a = 27 / 9 = <b>3 m/s²</b>.</p>
<p>Un caso famosissimo è la <b>caduta libera</b>: vicino alla superficie terrestre, senza aria, tutti i corpi cadono con la stessa accelerazione <b>g ≈ 9,8 m/s²</b>. Lo capì <b>Galileo Galilei</b> studiando palline che rotolavano su piani inclinati (pubblicato nel 1638).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: velocità e accelerazione",
      questions: [
        { type: "num", q: "Un ciclista percorre 600 m in 120 s. Qual è la sua velocità media in m/s?", answer: 5, unit: "m/s", explain: "v = s / t = 600 / 120 = 5 m/s (cioè 18 km/h)." },
        { type: "num", q: "Quanti km/h sono 25 m/s?", answer: 90, unit: "km/h", explain: "25 × 3,6 = 90 km/h." },
        { type: "num", q: "Uno scooter passa da 2 m/s a 12 m/s in 5 s. Qual è la sua accelerazione?", answer: 2, unit: "m/s²", explain: "a = (12 − 2) / 5 = 10 / 5 = 2 m/s²." },
        { type: "tf", q: "Nel moto rettilineo uniforme l'accelerazione è zero.", answer: true, explain: "La velocità non cambia, quindi non c'è accelerazione." }
      ]
    },
    {
      type: "text",
      title: "4. Le forze",
      html: `<p>Una <b>forza</b> è un'azione capace di <b>cambiare lo stato di moto</b> di un corpo (farlo partire, fermare, accelerare, curvare) oppure di <b>deformarlo</b>.</p>
<p>La forza è una grandezza <b>vettoriale</b>: per descriverla servono <b>intensità</b> (quanto è forte), <b>direzione</b>, <b>verso</b> e <b>punto di applicazione</b>. Si rappresenta con una freccia.</p>
<p>Si misura in <b>newton (N)</b> con il <b>dinamometro</b>, una molla tarata. 1 N è circa il peso di una mela piccola (100 g).</p>
<p>Forze di tutti i giorni:</p>
<ul>
<li><b>forza peso</b>: P = m · g. Un ragazzo di 50 kg pesa circa 50 × 9,8 = <b>490 N</b>. Attenzione: la <b>massa</b> (kg) è la quantità di materia e non cambia; il <b>peso</b> (N) è una forza e sulla Luna è circa 6 volte più piccolo;</li>
<li><b>attrito</b>: si oppone al movimento fra due superfici (freni, suole delle scarpe);</li>
<li><b>forza elastica</b>: di molle ed elastici;</li>
<li><b>forze a distanza</b>: gravità, forza magnetica, forza elettrica.</li>
</ul>
<p>Se più forze agiscono sullo stesso corpo si sommano come vettori: la loro somma è la <b>risultante</b>. Se la risultante è zero il corpo è in <b>equilibrio</b>.</p>`
    },
    {
      type: "text",
      title: "5. I tre principi della dinamica di Newton",
      html: `<p>Nel <b>1687</b> <b>Isaac Newton</b> pubblicò i <i>Principia</i>, in cui riassunse il legame fra forze e moto in tre principi.</p>
<ol>
<li><b>Principio di inerzia</b>: se la risultante delle forze è zero, un corpo resta fermo oppure continua a muoversi in linea retta a velocità costante. (Per questo in auto si mette la cintura: in una frenata il corpo tende a continuare in avanti.)</li>
<li><b>Principio fondamentale</b>: <b>F = m · a</b>. La forza produce un'accelerazione proporzionale a sé stessa e inversamente proporzionale alla massa. Spingere un carrello vuoto è più facile che spingerne uno pieno.</li>
<li><b>Principio di azione e reazione</b>: se un corpo A esercita una forza su B, allora B esercita su A una forza uguale e contraria. Il razzo spinge i gas indietro e i gas spingono il razzo in avanti; quando cammini, spingi il pavimento indietro e lui spinge te in avanti.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Le forze su un'auto che viaggia",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<rect x="0" y="230" width="600" height="70" fill="#64748b"/>
<line x1="0" y1="265" x2="600" y2="265" stroke="#f8fafc" stroke-width="4" stroke-dasharray="30,20"/>
<rect x="210" y="150" width="190" height="60" rx="14" fill="#ef4444"/>
<path d="M240 150 L265 110 L345 110 L370 150 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="3"/>
<circle cx="250" cy="215" r="20" fill="#1f2937"/><circle cx="360" cy="215" r="20" fill="#1f2937"/>
<line x1="400" y1="180" x2="520" y2="180" stroke="#16a34a" stroke-width="7"/>
<polygon points="520,168 545,180 520,192" fill="#16a34a"/>
<text x="430" y="165" font-size="16" fill="#166534" font-weight="bold">spinta motore</text>
<line x1="210" y1="180" x2="110" y2="180" stroke="#f97316" stroke-width="7"/>
<polygon points="110,168 85,180 110,192" fill="#f97316"/>
<text x="60" y="160" font-size="16" fill="#c2410c" font-weight="bold">attrito + aria</text>
<line x1="305" y1="180" x2="305" y2="280" stroke="#7c3aed" stroke-width="6"/>
<polygon points="293,270 305,295 317,270" fill="#7c3aed"/>
<text x="315" y="290" font-size="16" fill="#6d28d9" font-weight="bold">peso P</text>
<line x1="305" y1="150" x2="305" y2="60" stroke="#0284c7" stroke-width="6"/>
<polygon points="293,65 305,40 317,65" fill="#0284c7"/>
<text x="315" y="60" font-size="16" fill="#0369a1" font-weight="bold">reazione della strada</text>
</svg>`,
      caption: "Se la spinta del motore è uguale agli attriti, la risultante è zero: l'auto va a velocità costante (1° principio). Se la spinta è maggiore, l'auto accelera (2° principio)."
    },
    {
      type: "text",
      title: "6. Le leve: moltiplicare la forza",
      html: `<p>Una <b>leva</b> è una macchina semplice: un'asta rigida che può ruotare intorno a un punto fisso, il <b>fulcro</b>. Su di essa agiscono:</p>
<ul>
<li>la <b>potenza P</b>: la forza che applichiamo noi;</li>
<li>la <b>resistenza R</b>: la forza da vincere (un peso, un chiodo…).</li>
</ul>
<p>Le distanze dal fulcro si chiamano <b>braccio della potenza b<sub>P</sub></b> e <b>braccio della resistenza b<sub>R</sub></b>. La leva è in equilibrio quando:</p>
<p style="font-size:1.3em;text-align:center"><b>P · b<sub>P</sub> = R · b<sub>R</sub></b></p>
<p>Più lungo è il braccio della potenza, minore è la forza necessaria. Se b<sub>P</sub> &gt; b<sub>R</sub> la leva è <b>vantaggiosa</b>; se b<sub>P</sub> &lt; b<sub>R</sub> è <b>svantaggiosa</b> (ma fa guadagnare velocità e ampiezza di movimento); se sono uguali è <b>indifferente</b>.</p>
<p>Le leve si classificano in tre <b>generi</b>:</p>
<table>
<tr><th>Genere</th><th>Posizione</th><th>Esempi</th></tr>
<tr><td>1° genere</td><td>Fulcro <b>in mezzo</b> fra P e R</td><td>altalena, forbici, piede di porco, bilancia a bracci</td></tr>
<tr><td>2° genere</td><td>Resistenza in mezzo (sempre vantaggiosa)</td><td>carriola, schiaccianoci, apribottiglie</td></tr>
<tr><td>3° genere</td><td>Potenza in mezzo (sempre svantaggiosa)</td><td>pinzette, canna da pesca, avambraccio</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "I tre generi di leve",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#fefce8"/>
<text x="20" y="30" font-size="17" font-weight="bold" fill="#0f172a">1° genere: F in mezzo</text>
<rect x="60" y="62" width="320" height="10" fill="#92400e"/>
<polygon points="220,72 205,100 235,100" fill="#475569"/>
<text x="245" y="98" font-size="15" fill="#475569">fulcro</text>
<rect x="60" y="30" width="34" height="32" fill="#64748b"/><text x="66" y="52" font-size="15" fill="#fff">R</text>
<line x1="370" y1="20" x2="370" y2="58" stroke="#16a34a" stroke-width="5"/><polygon points="362,52 370,64 378,52" fill="#16a34a"/>
<text x="384" y="40" font-size="15" fill="#166534">P</text>
<text x="420" y="70" font-size="15" fill="#0f172a">✂️ forbici, altalena</text>
<text x="20" y="135" font-size="17" font-weight="bold" fill="#0f172a">2° genere: R in mezzo</text>
<rect x="60" y="167" width="320" height="10" fill="#92400e"/>
<polygon points="60,177 45,205 75,205" fill="#475569"/>
<rect x="160" y="135" width="34" height="32" fill="#64748b"/><text x="166" y="157" font-size="15" fill="#fff">R</text>
<line x1="370" y1="200" x2="370" y2="182" stroke="#16a34a" stroke-width="5"/><polygon points="362,186 370,174 378,186" fill="#16a34a"/>
<text x="384" y="200" font-size="15" fill="#166534">P</text>
<text x="420" y="175" font-size="15" fill="#0f172a">🛒 carriola, schiaccianoci</text>
<text x="20" y="240" font-size="17" font-weight="bold" fill="#0f172a">3° genere: P in mezzo</text>
<rect x="60" y="272" width="320" height="10" fill="#92400e"/>
<polygon points="60,282 45,310 75,310" fill="#475569"/>
<rect x="346" y="240" width="34" height="32" fill="#64748b"/><text x="352" y="262" font-size="15" fill="#fff">R</text>
<line x1="150" y1="315" x2="150" y2="287" stroke="#16a34a" stroke-width="5"/><polygon points="142,291 150,279 158,291" fill="#16a34a"/>
<text x="164" y="315" font-size="15" fill="#166534">P</text>
<text x="420" y="280" font-size="15" fill="#0f172a">💪 avambraccio, pinzette</text>
</svg>`,
      caption: "Per riconoscere il genere guarda che cosa sta in mezzo: fulcro (1°), resistenza (2°) o potenza (3°)."
    },
    {
      type: "example",
      title: "Esempio pratico: l'altalena a bilico",
      html: `<p>Marco pesa <b>400 N</b> e si siede a <b>1,5 m</b> dal fulcro. La sorellina pesa <b>200 N</b>. A che distanza deve sedersi per stare in equilibrio?</p>
<p>P · b<sub>P</sub> = R · b<sub>R</sub> → 200 · x = 400 · 1,5 → 200 · x = 600 → <b>x = 3 m</b>.</p>
<p>Chi pesa la metà deve stare al doppio della distanza: forza e braccio sono <b>inversamente proporzionali</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: lo spazio di frenata",
      html: `<p>Un'auto viaggia a <b>90 km/h</b> = 90 : 3,6 = <b>25 m/s</b>. Il guidatore vede un ostacolo e impiega circa <b>1 secondo</b> per reagire (tempo di reazione): in quel secondo l'auto percorre ancora 25 m senza frenare!</p>
<p>Se il guidatore guarda il telefono per 3 secondi, percorre 25 × 3 = <b>75 m "alla cieca"</b>: quasi un campo da calcio. Poi, con freni che danno una decelerazione di circa 7 m/s², servono altri circa 45 m per fermarsi. Ecco perché la distanza di sicurezza e l'attenzione salvano la vita.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire forze e moto",
      intro: "Le formule non bastano? Prova con un'analogia, un esperimento casalingo o il 3D.",
      tabs: [
        {
          label: "🛒 L'analogia del carrello",
          html: `<p>Pensa al <b>carrello della spesa</b>:</p>
<ul>
<li>Vuoto, con una piccola spinta parte subito: <b>poca massa → grande accelerazione</b>.</li>
<li>Pieno di bottiglie, devi spingere molto di più per farlo partire con la stessa rapidità: <b>più massa → serve più forza</b>. Questo è F = m · a.</li>
<li>Una volta lanciato, se lo lasci continua da solo per un po' (<b>inerzia</b>) finché l'attrito delle ruote non lo ferma.</li>
<li>Per curvare devi spingerlo di lato: anche cambiare direzione richiede una forza.</li>
</ul>`
        },
        {
          label: "🧪 Esperimento di Galileo a casa",
          html: `<p>Galileo voleva capire come cadono i corpi, ma la caduta è troppo veloce da misurare. Allora la "rallentò" con un <b>piano inclinato</b>.</p>
<ol>
<li>Appoggia un'asse o un libro grande inclinato su una pila di libri.</li>
<li>Fai rotolare una biglia e segna con lo scotch dove si trova dopo 1, 2, 3 "tic" di un metronomo (o battendo le mani a ritmo).</li>
<li>Scoprirai che gli spazi percorsi crescono come <b>1, 4, 9…</b>, cioè come i quadrati dei tempi: la biglia <b>accelera</b> in modo costante.</li>
</ol>
<p>Galileo usò come orologio un secchio d'acqua che sgocciolava: pesava l'acqua uscita per misurare il tempo!</p>`
        },
        {
          label: "🇯🇵 Il triangolo magico (metodo usato in Asia)",
          html: `<p>In molte scuole asiatiche e anglosassoni si usa un <b>triangolo</b> per ricordare le formule inverse: copri con il dito la grandezza che cerchi e leggi le altre due.</p>
<ul>
<li>copri <b>s</b> → resta v · t (sono affiancate: si moltiplicano);</li>
<li>copri <b>v</b> → resta s / t (una sopra l'altra: si divide);</li>
<li>copri <b>t</b> → resta s / v.</li>
</ul>
<p>Funziona anche per F = m · a: F in alto, m e a in basso.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<polygon points="150,20 40,230 260,230" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/>
<line x1="85" y1="140" x2="215" y2="140" stroke="#15803d" stroke-width="4"/>
<line x1="150" y1="140" x2="150" y2="230" stroke="#15803d" stroke-width="4"/>
<text x="150" y="115" font-size="38" text-anchor="middle" fill="#14532d" font-weight="bold">s</text>
<text x="108" y="200" font-size="34" text-anchor="middle" fill="#14532d" font-weight="bold">v</text>
<text x="192" y="200" font-size="34" text-anchor="middle" fill="#14532d" font-weight="bold">t</text>
<polygon points="450,20 340,230 560,230" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<line x1="385" y1="140" x2="515" y2="140" stroke="#b45309" stroke-width="4"/>
<line x1="450" y1="140" x2="450" y2="230" stroke="#b45309" stroke-width="4"/>
<text x="450" y="115" font-size="38" text-anchor="middle" fill="#78350f" font-weight="bold">F</text>
<text x="408" y="200" font-size="34" text-anchor="middle" fill="#78350f" font-weight="bold">m</text>
<text x="492" y="200" font-size="34" text-anchor="middle" fill="#78350f" font-weight="bold">a</text>
</svg>`
        },
        {
          label: "🪐 La gravità in 3D",
          html: `<p>Newton capì che la forza che fa cadere una mela è la <b>stessa</b> che tiene la Luna intorno alla Terra e i pianeti intorno al Sole: la <b>gravitazione universale</b>. I pianeti "cadono" continuamente verso il Sole, ma hanno anche una velocità laterale: così invece di precipitare girano in orbita. Più un pianeta è vicino al Sole, più la forza è intensa e più veloce è la sua orbita. Osservalo nel modello.</p>`,
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "widget",
      title: "Riconosci il genere della leva",
      widget: "classify",
      options: {
        groups: ["1° genere (fulcro in mezzo)", "2° genere (resistenza in mezzo)", "3° genere (potenza in mezzo)"],
        items: [
          ["✂️ Forbici", 0],
          ["🎢 Altalena a bilico", 0],
          ["🔧 Piede di porco", 0],
          ["🛒 Carriola", 1],
          ["🌰 Schiaccianoci", 1],
          ["🍾 Apribottiglie", 1],
          ["🪡 Pinzette", 2],
          ["🎣 Canna da pesca", 2],
          ["💪 Avambraccio che solleva un peso", 2]
        ]
      },
      caption: "Trova il fulcro, il punto dove spingi (potenza) e la cosa da vincere (resistenza)."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? \"Datemi un punto d'appoggio…\"",
      html: `<p>Lo scienziato greco <b>Archimede</b> di Siracusa (circa 287–212 a.C.) studiò per primo in modo matematico la legge delle leve. Secondo la tradizione disse: <i>"Datemi un punto d'appoggio e solleverò il mondo"</i>. In teoria aveva ragione: con un braccio abbastanza lungo qualsiasi forza basta… ma per sollevare la Terra di 1 cm avrebbe dovuto spostare l'estremità della leva per una distanza enorme, molto più grande dell'Universo visibile!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il martello e la piuma sulla Luna",
      html: `<p>Nel <b>1971</b>, durante la missione <b>Apollo 15</b>, l'astronauta <b>David Scott</b> lasciò cadere sulla Luna, nello stesso momento, un martello e una piuma di falco. Senza aria a frenarla, la piuma toccò il suolo <b>insieme</b> al martello: proprio come aveva previsto Galileo più di 300 anni prima. Sulla Luna g vale circa 1,6 m/s², circa 1/6 di quella terrestre.</p>`
    },
    {
      type: "widget",
      title: "Linea del tempo: chi ha capito il moto",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: -340, label: "Aristotele: \"i corpi pesanti cadono più veloci\" (sbagliato!)", icon: "🏛️" },
          { year: -250, label: "Archimede: la legge della leva", icon: "⚖️" },
          { year: 1638, label: "Galileo: caduta dei gravi e inerzia", icon: "🔭" },
          { year: 1687, label: "Newton: i tre principi e la gravitazione", icon: "🍎" },
          { year: 1905, label: "Einstein: relatività ristretta", icon: "⚡" },
          { year: 1971, label: "Martello e piuma sulla Luna", icon: "🌕" }
        ]
      },
      caption: "Per quasi 2000 anni si credette ad Aristotele: furono gli esperimenti a correggere l'errore."
    },
    {
      type: "conceptMap",
      title: "Mappa di forze e moto: tocca i nodi e scopri il perché",
      nodes: [
        { id: "rif", label: "Sistema di riferimento", x: 15, y: 8, color: "#64748b", html: "Ciò rispetto a cui misuriamo il moto.", why: "Galileo, nel Dialogo (1632), immaginò una nave che naviga liscia: chi sta sotto coperta non riesce a capire con nessun esperimento se la nave si muove. Da qui l'idea che il moto è relativo, base della relatività di Einstein." },
        { id: "vel", label: "Velocità v = s/t", x: 40, y: 22, color: "#2563eb", html: "Spazio percorso nell'unità di tempo (m/s, km/h).", why: "Serve un modo per confrontare moti diversi: dividendo lo spazio per il tempo otteniamo quanto si percorre in 1 secondo. Con orologi precisi (il pendolo, studiato da Galileo e costruito da Huygens nel 1656) la velocità si poté misurare bene." },
        { id: "acc", label: "Accelerazione", x: 65, y: 22, color: "#7c3aed", html: "Variazione della velocità nel tempo (m/s²).", why: "Galileo scoprì che nella caduta la velocità aumenta sempre della stessa quantità ogni secondo: un'accelerazione costante. Per misurarla usò piani inclinati e orologi ad acqua." },
        { id: "forza", label: "Forza (newton)", x: 50, y: 48, color: "#dc2626", html: "Azione che cambia il moto o deforma un corpo; si misura in N.", why: "L'unità porta il nome di Isaac Newton. 1 N è la forza che dà a 1 kg un'accelerazione di 1 m/s². Prima di Newton si pensava (con Aristotele) che servisse una forza anche solo per mantenere un corpo in movimento." },
        { id: "n1", label: "1° principio: inerzia", x: 18, y: 50, color: "#0891b2", html: "Senza forze un corpo sta fermo o si muove di moto rettilineo uniforme.", why: "Galileo notò che una pallina su un piano liscio rallenta sempre meno quanto meno attrito c'è: immaginò che senza attrito andrebbe avanti per sempre. Newton trasformò questa intuizione nel primo principio (1687)." },
        { id: "n2", label: "2° principio: F = m·a", x: 82, y: 50, color: "#ea580c", html: "La forza è uguale alla massa per l'accelerazione.", why: "Lega le cause (forze) agli effetti (accelerazioni). La massa misura l'inerzia: quanto un corpo \"si oppone\" a cambiare velocità." },
        { id: "n3", label: "3° principio: azione e reazione", x: 82, y: 78, color: "#16a34a", html: "Le forze vengono sempre in coppia, uguali e contrarie.", why: "Newton lo dedusse osservando urti fra corpi: nessuno può spingere senza essere spinto. È il principio su cui funzionano razzi, nuotatori e perfino il nostro camminare." },
        { id: "peso", label: "Peso e gravità", x: 50, y: 78, color: "#a16207", html: "P = m · g, con g ≈ 9,8 m/s² sulla Terra.", why: "Newton capì che la forza che fa cadere i corpi è la stessa che tiene la Luna in orbita: la gravitazione universale. Il peso dipende dal pianeta, la massa no." },
        { id: "leva", label: "Leve", x: 18, y: 85, color: "#92400e", html: "Macchine semplici: P · bP = R · bR.", why: "Archimede (III sec. a.C.) dimostrò la legge partendo dalla simmetria: pesi uguali a distanze uguali stanno in equilibrio. Una leva non crea energia: si risparmia forza ma si deve spostare la potenza per un tratto più lungo." }
      ],
      edges: [
        ["rif", "vel", "si misura rispetto a"],
        ["vel", "acc", "se cambia c'è"],
        ["forza", "acc", "produce"],
        ["n1", "forza", "senza"],
        ["forza", "n2", ""],
        ["forza", "n3", ""],
        ["forza", "peso", "esempio:"],
        ["forza", "leva", "moltiplicata dalle"],
        ["n2", "acc", "calcola"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>v = s / t</b> (m/s); km/h ÷ 3,6 = m/s.</li>
<li><b>a = Δv / t</b> (m/s²); in caduta libera g ≈ 9,8 m/s².</li>
<li><b>Forza</b>: vettore, si misura in newton con il dinamometro. Peso P = m · g.</li>
<li>Newton: <b>inerzia</b>, <b>F = m · a</b>, <b>azione e reazione</b>.</li>
<li><b>Leve</b>: P · b<sub>P</sub> = R · b<sub>R</sub>; 1° genere fulcro in mezzo, 2° resistenza in mezzo, 3° potenza in mezzo.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: forze e leve",
      questions: [
        { type: "num", q: "Quale forza serve per dare a un carrello di 20 kg un'accelerazione di 1,5 m/s²?", answer: 30, unit: "N", explain: "F = m · a = 20 × 1,5 = 30 N." },
        { type: "mc", q: "La carriola è una leva di…", options: ["1° genere", "2° genere", "3° genere"], answer: 1, explain: "Il fulcro è la ruota, la resistenza (il carico) sta in mezzo, la potenza alle maniglie." },
        { type: "num", q: "Una leva ha bP = 2 m e bR = 0,5 m. Con quale potenza sollevo R = 800 N?", answer: 200, unit: "N", explain: "P · 2 = 800 · 0,5 = 400 → P = 200 N." }
      ]
    }
  ],
  glossary: [
    { t: "Sistema di riferimento", d: "Corpo o punto considerato fermo rispetto al quale si descrive un moto." },
    { t: "Traiettoria", d: "Linea percorsa da un corpo in movimento." },
    { t: "Velocità", d: "Rapporto fra spazio percorso e tempo impiegato (m/s)." },
    { t: "Accelerazione", d: "Rapporto fra variazione di velocità e tempo (m/s²)." },
    { t: "Forza", d: "Azione che modifica il moto o la forma di un corpo; si misura in newton (N)." },
    { t: "Dinamometro", d: "Strumento a molla per misurare le forze." },
    { t: "Massa", d: "Quantità di materia di un corpo (kg); misura la sua inerzia." },
    { t: "Peso", d: "Forza con cui un pianeta attira un corpo: P = m · g." },
    { t: "Inerzia", d: "Tendenza di un corpo a mantenere il proprio stato di quiete o di moto uniforme." },
    { t: "Attrito", d: "Forza che si oppone allo scivolamento fra due superfici." },
    { t: "Fulcro", d: "Punto fisso intorno a cui ruota una leva." },
    { t: "Braccio", d: "Distanza fra il fulcro e il punto in cui agisce una forza." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Un treno percorre 360 km in 2 ore. Qual è la sua velocità media in km/h?", answer: 180, unit: "km/h", explain: "v = 360 / 2 = 180 km/h." },
      { type: "num", q: "Converti 72 km/h in m/s.", answer: 20, unit: "m/s", explain: "72 : 3,6 = 20 m/s." },
      { type: "num", q: "Un corridore parte da fermo e in 4 s raggiunge 8 m/s. Qual è la sua accelerazione media?", answer: 2, unit: "m/s²", explain: "a = (8 − 0) / 4 = 2 m/s²." },
      { type: "mc", q: "Che cosa misura il dinamometro?", options: ["La massa", "La velocità", "Le forze", "Il tempo"], answer: 2, explain: "Il dinamometro misura le forze in newton." },
      { type: "tf", q: "Sulla Luna la massa di un astronauta è 6 volte più piccola che sulla Terra.", answer: false, explain: "La massa non cambia; è il peso a essere circa 6 volte più piccolo." },
      { type: "mc", q: "Quando un autobus frena bruscamente i passeggeri vengono spinti in avanti. Quale principio lo spiega?", options: ["Principio di inerzia", "Azione e reazione", "Legge delle leve"], answer: 0, explain: "Il corpo tende a mantenere la velocità che aveva: è l'inerzia (1° principio)." },
      { type: "mc", q: "Un razzo sale perché…", options: ["l'aria lo spinge verso l'alto", "spinge i gas verso il basso e i gas spingono lui verso l'alto", "è più leggero dell'aria"], answer: 1, explain: "È il terzo principio: azione e reazione. Funziona anche nel vuoto." },
      { type: "num", q: "Qual è il peso sulla Terra (g = 10 m/s², arrotondato) di uno zaino da 6 kg?", answer: 60, unit: "N", explain: "P = m · g = 6 × 10 = 60 N." },
      { type: "mc", q: "In quale leva la potenza sta fra il fulcro e la resistenza?", options: ["1° genere", "2° genere", "3° genere"], answer: 2, explain: "Nella leva di 3° genere (pinzette, avambraccio) la potenza sta in mezzo: è sempre svantaggiosa." },
      { type: "num", q: "Su un'altalena a bilico un bambino da 300 N siede a 2 m dal fulcro. A quanti metri deve sedersi un adulto da 600 N per l'equilibrio?", answer: 1, unit: "m", explain: "600 · x = 300 · 2 = 600 → x = 1 m." },
      { type: "text", q: "Quale scienziato pubblicò nel 1687 i tre principi della dinamica?", answer: ["newton", "isaac newton"], explain: "Isaac Newton, nei Principia." },
      { type: "order", q: "Metti in ordine cronologico questi scienziati.", items: ["Aristotele", "Archimede", "Galileo Galilei", "Isaac Newton", "Albert Einstein"], explain: "IV sec. a.C., III sec. a.C., 1564–1642, 1643–1727, 1879–1955." }
    ],
    gen: [["proportion", 2]]
  }
});

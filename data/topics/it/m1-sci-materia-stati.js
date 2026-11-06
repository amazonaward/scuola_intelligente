TOPIC('it', {
  id: "m1-sci-materia-stati",
  title: "La materia e i suoi stati",
  intro: "Il ghiaccio si scioglie, l'acqua bolle, i vetri si appannano, la naftalina \"sparisce\" nell'armadio. Tutto questo si spiega con un'unica idea: la <b>materia</b> è fatta di <b>particelle</b> piccolissime, sempre in movimento. Scopriamo gli <b>stati di aggregazione</b>, i <b>passaggi di stato</b> e la differenza tra <b>calore</b> e <b>temperatura</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è la materia",
      html: `<p>La <b>materia</b> è tutto ciò che ha una <b>massa</b> e occupa uno <b>spazio</b> (un <b>volume</b>). Sono materia l'acqua, l'aria, una pietra, il tuo corpo. Non sono materia la luce, il suono, un pensiero.</p>
<p>Una porzione definita di materia si chiama <b>corpo</b> (una moneta, una goccia); il tipo di materia di cui è fatto si chiama <b>sostanza</b> o <b>materiale</b> (rame, acqua).</p>
<p>Secondo il <b>modello particellare</b>, la materia è formata da particelle piccolissime (atomi e molecole) che:</p>
<ol>
<li>sono separate da <b>spazi vuoti</b>;</li>
<li>sono sempre in <b>movimento</b> (più la temperatura è alta, più si muovono velocemente);</li>
<li>si <b>attraggono</b> tra loro con forze di coesione, più o meno intense.</li>
</ol>
<p>L'idea che la materia sia fatta di particelle è antichissima: il filosofo greco <b>Democrito</b> (V secolo a.C.) le chiamò <i>átomos</i>, "indivisibile". Ma solo nell'Ottocento, con il chimico inglese <b>John Dalton</b> (1808), divenne una vera teoria scientifica.</p>`
    },
    {
      type: "text",
      title: "2. I tre stati di aggregazione",
      html: `<table>
<tr><th></th><th>🧊 Solido</th><th>💧 Liquido</th><th>💨 Aeriforme (gas)</th></tr>
<tr><td><b>Forma</b></td><td>propria</td><td>del recipiente</td><td>del recipiente</td></tr>
<tr><td><b>Volume</b></td><td>proprio</td><td>proprio</td><td>occupa tutto lo spazio disponibile</td></tr>
<tr><td><b>Particelle</b></td><td>vicinissime, ordinate, vibrano sul posto</td><td>vicine ma libere di scorrere</td><td>lontane, velocissime, disordinate</td></tr>
<tr><td><b>Forze di coesione</b></td><td>fortissime</td><td>medie</td><td>quasi nulle</td></tr>
<tr><td><b>Si comprime?</b></td><td>no</td><td>quasi per niente</td><td>sì, molto</td></tr>
</table>
<p>Molti solidi hanno le particelle disposte in un reticolo ordinato: sono i <b>cristalli</b> (sale, ghiaccio, quarzo). Quelli senza ordine si dicono <b>amorfi</b> (vetro, plastica).</p>
<p>Esiste anche un <b>quarto stato</b>: il <b>plasma</b>, un gas così caldo che gli atomi perdono elettroni. È lo stato della materia nelle stelle, nei fulmini e nelle insegne al neon. È lo stato più diffuso nell'universo!</p>`
    },
    {
      type: "svg",
      title: "Le particelle nei tre stati",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="40" width="170" height="190" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<g fill="#2563eb">
<circle cx="45" cy="205" r="13"/><circle cx="75" cy="205" r="13"/><circle cx="105" cy="205" r="13"/><circle cx="135" cy="205" r="13"/><circle cx="165" cy="205" r="13"/>
<circle cx="45" cy="175" r="13"/><circle cx="75" cy="175" r="13"/><circle cx="105" cy="175" r="13"/><circle cx="135" cy="175" r="13"/><circle cx="165" cy="175" r="13"/>
<circle cx="45" cy="145" r="13"/><circle cx="75" cy="145" r="13"/><circle cx="105" cy="145" r="13"/><circle cx="135" cy="145" r="13"/><circle cx="165" cy="145" r="13"/>
<circle cx="45" cy="115" r="13"/><circle cx="75" cy="115" r="13"/><circle cx="105" cy="115" r="13"/><circle cx="135" cy="115" r="13"/><circle cx="165" cy="115" r="13"/>
</g>
<text x="105" y="270" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">SOLIDO</text>
<text x="105" y="292" font-size="15" text-anchor="middle" fill="#334155">ordinate, vibrano</text>
<rect x="215" y="40" width="170" height="190" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<rect x="219" y="130" width="162" height="96" fill="#bae6fd"/>
<g fill="#0ea5e9">
<circle cx="240" cy="210" r="13"/><circle cx="270" cy="200" r="13"/><circle cx="305" cy="212" r="13"/><circle cx="338" cy="203" r="13"/><circle cx="365" cy="212" r="13"/>
<circle cx="250" cy="175" r="13"/><circle cx="285" cy="170" r="13"/><circle cx="318" cy="178" r="13"/><circle cx="352" cy="172" r="13"/>
<circle cx="238" cy="145" r="13"/><circle cx="300" cy="145" r="13"/><circle cx="335" cy="146" r="13"/>
</g>
<text x="300" y="270" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">LIQUIDO</text>
<text x="300" y="292" font-size="15" text-anchor="middle" fill="#334155">vicine, scorrono</text>
<rect x="410" y="40" width="170" height="190" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<g fill="#94a3b8">
<circle cx="440" cy="70" r="13"/><circle cx="530" cy="90" r="13"/><circle cx="475" cy="140" r="13"/><circle cx="555" cy="175" r="13"/><circle cx="440" cy="200" r="13"/><circle cx="510" cy="210" r="13"/>
</g>
<g stroke="#64748b" stroke-width="3">
<line x1="453" y1="70" x2="480" y2="70"/><line x1="543" y1="90" x2="565" y2="70"/><line x1="488" y1="140" x2="512" y2="125"/><line x1="440" y1="187" x2="440" y2="165"/>
</g>
<text x="495" y="270" font-size="20" text-anchor="middle" font-weight="bold" fill="#0369a1">GAS</text>
<text x="495" y="292" font-size="15" text-anchor="middle" fill="#334155">lontane, velocissime</text>
<text x="300" y="26" font-size="17" text-anchor="middle" fill="#0f172a">più energia (calore) = particelle più libere →</text>
</svg>`,
      caption: "Il gas riempie tutto il contenitore; il liquido prende la forma del fondo; il solido mantiene la sua forma."
    },
    {
      type: "3d",
      title: "Un cristallo in 3D",
      scene: "molecule",
      options: {
        atoms: [
          { x: -0.8, y: -0.8, z: -0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0.8, y: -0.8, z: -0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: -0.8, y: 0.8, z: -0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0.8, y: 0.8, z: -0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: -0.8, y: -0.8, z: 0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0.8, y: -0.8, z: 0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: -0.8, y: 0.8, z: 0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0.8, y: 0.8, z: 0.8, r: 0.3, color: "#2563eb", label: "" },
          { x: 0, y: 0, z: 0, r: 0.3, color: "#f59e0b", label: "" }
        ],
        bonds: [[0, 1], [0, 2], [1, 3], [2, 3], [4, 5], [4, 6], [5, 7], [6, 7], [0, 4], [1, 5], [2, 6], [3, 7], [8, 0], [8, 7]]
      },
      caption: "Nei solidi cristallini le particelle stanno ai vertici di un reticolo ordinato, tenute insieme da forze intense (i bastoncini). Possono solo vibrare intorno alla loro posizione."
    },
    {
      type: "widget",
      title: "Solido, liquido o gas?",
      widget: "classify",
      options: {
        groups: ["Solido", "Liquido", "Aeriforme"],
        items: [["🪨 sasso", 0], ["🧂 sale", 0], ["🥛 latte", 1], ["🫒 olio", 1], ["🎈 elio nel palloncino", 2], ["💨 vapore acqueo", 2], ["🧈 burro in frigo", 0], ["🍯 miele", 1], ["🫧 anidride carbonica delle bibite", 2], ["🪟 vetro", 0]]
      },
      caption: "Il vetro è un solido amorfo: è solido anche se le sue particelle non sono ordinate."
    },
    {
      type: "quiz",
      title: "Mini-quiz: materia e particelle",
      questions: [
        { type: "mc", q: "Quale stato ha volume proprio ma forma del recipiente?", options: ["Solido", "Liquido", "Gas"], answer: 1, explain: "Il liquido ha volume proprio ma prende la forma del recipiente." },
        { type: "tf", q: "I gas si possono comprimere facilmente perché tra le particelle c'è molto spazio vuoto.", answer: true, explain: "Per questo nelle bombole si può mettere tantissimo gas." },
        { type: "mc", q: "Quale filosofo greco parlò per primo di atomi?", options: ["Platone", "Democrito", "Archimede"], answer: 1, explain: "Democrito, nel V secolo a.C., immaginò particelle indivisibili, gli átomos." }
      ]
    },
    {
      type: "text",
      title: "3. Calore e temperatura: non sono la stessa cosa!",
      html: `<ul>
<li>La <b>temperatura</b> indica quanto velocemente si muovono, in media, le particelle di un corpo. Si misura con il <b>termometro</b>.</li>
<li>Il <b>calore</b> è <b>energia</b> che passa da un corpo più caldo a uno più freddo, finché raggiungono la stessa temperatura (<b>equilibrio termico</b>). Si misura in <b>joule</b> (J) o in calorie.</li>
</ul>
<p>Una vasca di acqua tiepida contiene molto più calore di una tazzina di caffè bollente, anche se ha una temperatura più bassa: ha molte più particelle!</p>
<p><b>Le scale termometriche</b>:</p>
<ul>
<li><b>Celsius</b> (°C), dello svedese Anders Celsius (1742): 0 °C il ghiaccio fonde, 100 °C l'acqua bolle (al livello del mare).</li>
<li><b>Kelvin</b> (K), di Lord Kelvin (1848): parte dallo <b>zero assoluto</b>, 0 K = −273,15 °C, la temperatura più bassa possibile, in cui le particelle sono quasi ferme. K = °C + 273,15.</li>
<li><b>Fahrenheit</b> (°F), usata negli USA: il ghiaccio fonde a 32 °F e l'acqua bolle a 212 °F.</li>
</ul>
<p>Il calore fa anche <b>dilatare</b> i corpi: scaldandosi, le particelle si muovono di più e si allontanano. Per questo i binari dei treni e i ponti hanno dei <b>giunti di dilatazione</b>, e il liquido del termometro sale.</p>`
    },
    {
      type: "text",
      title: "4. I passaggi di stato",
      html: `<p>Dando o togliendo calore, una sostanza può cambiare stato. Le particelle restano <b>le stesse</b>: cambia solo come sono disposte e quanto si muovono. Sono <b>trasformazioni fisiche</b>, reversibili.</p>
<table>
<tr><th>Passaggio</th><th>Da → a</th><th>Calore</th><th>Esempio</th></tr>
<tr><td><b>Fusione</b></td><td>solido → liquido</td><td>assorbe</td><td>il gelato si scioglie</td></tr>
<tr><td><b>Solidificazione</b></td><td>liquido → solido</td><td>cede</td><td>l'acqua diventa ghiaccio in freezer</td></tr>
<tr><td><b>Vaporizzazione</b></td><td>liquido → gas</td><td>assorbe</td><td>i panni stesi si asciugano (evaporazione); l'acqua bolle (ebollizione)</td></tr>
<tr><td><b>Condensazione</b></td><td>gas → liquido</td><td>cede</td><td>gli specchi si appannano dopo la doccia</td></tr>
<tr><td><b>Sublimazione</b></td><td>solido → gas</td><td>assorbe</td><td>la naftalina, il ghiaccio secco</td></tr>
<tr><td><b>Brinamento</b></td><td>gas → solido</td><td>cede</td><td>la brina sull'erba d'inverno</td></tr>
</table>
<p><b>Evaporazione ed ebollizione</b>: l'evaporazione avviene a qualsiasi temperatura, solo in superficie; l'ebollizione avviene a una temperatura precisa (la <b>temperatura di ebollizione</b>) e in tutto il liquido, con le bolle.</p>
<p><b>Il fatto sorprendente</b>: durante un passaggio di stato la temperatura <b>resta costante</b>! Il calore fornito non scalda, ma serve a "staccare" le particelle una dall'altra. Si chiama <b>calore latente</b> ("nascosto"). Il ghiaccio che fonde resta a 0 °C finché non è tutto acqua.</p>`
    },
    {
      type: "svg",
      title: "La curva di riscaldamento dell'acqua",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fffbeb"/>
<line x1="70" y1="280" x2="580" y2="280" stroke="#111827" stroke-width="3"/>
<line x1="70" y1="280" x2="70" y2="20" stroke="#111827" stroke-width="3"/>
<text x="560" y="305" font-size="16" text-anchor="end">tempo (calore fornito) →</text>
<text x="20" y="30" font-size="16">°C</text>
<line x1="65" y1="230" x2="580" y2="230" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="65" y1="90" x2="580" y2="90" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<text x="60" y="235" font-size="16" text-anchor="end">0</text>
<text x="60" y="95" font-size="16" text-anchor="end">100</text>
<polyline points="80,265 140,230 250,230 330,90 500,90 570,40" fill="none" stroke="#dc2626" stroke-width="6"/>
<text x="100" y="215" font-size="15" fill="#2563eb" font-weight="bold">ghiaccio</text>
<text x="195" y="255" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">fusione</text>
<text x="195" y="273" font-size="14" text-anchor="middle" fill="#7c3aed">T costante</text>
<text x="300" y="170" font-size="15" fill="#0284c7" font-weight="bold">acqua</text>
<text x="415" y="115" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">ebollizione</text>
<text x="415" y="133" font-size="14" text-anchor="middle" fill="#7c3aed">T costante</text>
<text x="520" y="35" font-size="15" fill="#64748b" font-weight="bold">vapore</text>
</svg>`,
      caption: "I tratti orizzontali sono i passaggi di stato: si fornisce calore ma la temperatura non sale."
    },
    {
      type: "widget",
      title: "Abbina il passaggio di stato all'esempio",
      widget: "match",
      options: {
        pairs: [
          ["Fusione", "🍦 il gelato al sole"],
          ["Solidificazione", "🧊 i cubetti nel freezer"],
          ["Evaporazione", "👕 i panni stesi che si asciugano"],
          ["Condensazione", "🪞 lo specchio appannato"],
          ["Sublimazione", "🌫️ il ghiaccio secco che fuma"],
          ["Brinamento", "❄️ la brina sui vetri dell'auto"]
        ]
      }
    },
    {
      type: "example",
      title: "Esempio pratico: perché la pasta cuoce prima in pentola a pressione?",
      html: `<p>La temperatura di ebollizione dipende dalla <b>pressione</b> dell'aria sopra il liquido.</p>
<ul>
<li>Al livello del mare l'acqua bolle a <b>100 °C</b>.</li>
<li>In montagna la pressione è più bassa: a 3000 m l'acqua bolle a circa <b>90 °C</b>, sulla vetta dell'Everest (8849 m) a circa <b>70 °C</b>. La pasta cuoce peggio perché l'acqua non diventa abbastanza calda!</li>
<li>Nella <b>pentola a pressione</b> il vapore resta chiuso e la pressione aumenta: l'acqua bolle a circa <b>120 °C</b> e i cibi cuociono in metà tempo.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: perché si mette il sale sulle strade ghiacciate?",
      html: `<p>L'acqua pura gela a 0 °C. Se ci sciogli del <b>sale</b>, le particelle di sale "disturbano" quelle dell'acqua e rendono più difficile formare il cristallo di ghiaccio: l'acqua salata gela a temperature più basse (fino a circa −21 °C con molto sale).</p>
<p>Per lo stesso motivo il <b>mare</b> gela più difficilmente dei laghi, e nel radiatore delle auto si mette l'<b>antigelo</b>.</p>
<p><b>Esperimento in cucina</b>: metti due cubetti di ghiaccio su due piattini e cospargi di sale solo uno. Quale si scioglie prima?</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il ghiaccio galleggia, ed è una fortuna?",
      html: `<p>Quasi tutte le sostanze, solidificando, diventano più dense e il solido va a fondo. L'<b>acqua</b> fa il contrario: quando gela, le molecole si dispongono in un cristallo esagonale pieno di spazi vuoti, così il ghiaccio occupa circa il <b>9% in più</b> ed è meno denso (circa 0,92 g/cm³). Per questo il ghiaccio <b>galleggia</b> e le bottiglie piene d'acqua scoppiano nel freezer.</p>
<p>Questo salva la vita a pesci e piante dei laghi: d'inverno il ghiaccio si forma in superficie e fa da "coperta", mentre sul fondo l'acqua resta liquida a circa <b>4 °C</b>, la temperatura in cui l'acqua è più densa.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il ghiaccio secco non bagna?",
      html: `<p>Il <b>ghiaccio secco</b> è anidride carbonica (CO₂) solida. A pressione normale non diventa mai liquida: a <b>−78,5 °C</b> passa direttamente da solido a gas (sublimazione), formando quella nebbiolina bianca usata nei concerti e nei film. Non va mai toccato a mani nude: è così freddo da provocare ustioni!</p>
<p>E i fiocchi di neve? Ognuno è un cristallo di ghiaccio con <b>6 punte</b>, nato per brinamento del vapore acqueo nelle nuvole.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli stati della materia",
      intro: "Le particelle non si vedono: prova a immaginarle in modi diversi.",
      tabs: [
        {
          label: "💃 Analogia: la classe in festa",
          html: `<ul>
<li><b>Solido</b>: gli alunni sono seduti ai banchi, in file ordinate. Si agitano un po' sulla sedia (vibrano), ma restano al loro posto.</li>
<li><b>Liquido</b>: è l'intervallo. Gli alunni si alzano e girano per la classe, sempre vicini, scivolando gli uni accanto agli altri. La classe (il volume) è sempre la stessa.</li>
<li><b>Gas</b>: suona la campanella dell'uscita! Tutti corrono in ogni direzione, lontani gli uni dagli altri, e occupano tutto il cortile.</li>
</ul>
<p>Il <b>calore</b> è come la musica: più è forte e ritmata, più i ragazzi si muovono e si separano.</p>`
        },
        {
          label: "💧 La molecola d'acqua in 3D",
          html: `<p>L'acqua è formata da molecole H₂O: un atomo di <b>ossigeno</b> (rosso) e due di <b>idrogeno</b> (grigi), disposti a "V" con un angolo di circa <b>104,5°</b>. Questa forma piegata spiega perché il ghiaccio forma cristalli esagonali e perché l'acqua scioglie tante sostanze. Nei tre stati la molecola è sempre questa: cambia solo quanto le molecole sono vicine e quanto si muovono.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0.2, z: 0, r: 0.55, color: "#ef4444", label: "O" },
              { x: 0.76, y: -0.39, z: 0, r: 0.35, color: "#94a3b8", label: "H" },
              { x: -0.76, y: -0.39, z: 0, r: 0.35, color: "#94a3b8", label: "H" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        },
        {
          label: "🔄 Il ciclo dei passaggi",
          html: `<p>Disegna un triangolo con ai vertici <b>solido</b>, <b>liquido</b> e <b>gas</b>. Le frecce che salgono verso il gas <b>assorbono calore</b> (rosse), quelle che scendono verso il solido <b>cedono calore</b> (blu).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="300" cy="55" r="45" fill="#cbd5e1"/>
<circle cx="110" cy="240" r="45" fill="#93c5fd"/>
<circle cx="490" cy="240" r="45" fill="#38bdf8"/>
<text x="300" y="62" font-size="20" text-anchor="middle" font-weight="bold">GAS</text>
<text x="110" y="247" font-size="18" text-anchor="middle" font-weight="bold">SOLIDO</text>
<text x="490" y="247" font-size="18" text-anchor="middle" font-weight="bold">LIQUIDO</text>
<line x1="160" y1="230" x2="440" y2="230" stroke="#dc2626" stroke-width="4"/>
<line x1="440" y1="255" x2="160" y2="255" stroke="#2563eb" stroke-width="4"/>
<text x="300" y="222" font-size="16" text-anchor="middle" fill="#dc2626">fusione</text>
<text x="300" y="277" font-size="16" text-anchor="middle" fill="#2563eb">solidificazione</text>
<line x1="470" y1="195" x2="340" y2="85" stroke="#dc2626" stroke-width="4"/>
<line x1="320" y1="100" x2="445" y2="208" stroke="#2563eb" stroke-width="4"/>
<text x="455" y="130" font-size="16" fill="#dc2626">vaporizzazione</text>
<text x="330" y="160" font-size="16" fill="#2563eb">condensazione</text>
<line x1="130" y1="195" x2="260" y2="85" stroke="#dc2626" stroke-width="4"/>
<line x1="280" y1="100" x2="155" y2="208" stroke="#2563eb" stroke-width="4"/>
<text x="40" y="130" font-size="16" fill="#dc2626">sublimazione</text>
<text x="150" y="160" font-size="16" fill="#2563eb">brinamento</text>
</svg>`
        },
        {
          label: "🌡️ Le scale nel mondo",
          html: `<p>In Italia e quasi ovunque si usa il Celsius; negli <b>USA</b> il Fahrenheit; gli scienziati usano il <b>kelvin</b>.</p>
<table>
<tr><th>Fenomeno</th><th>°C</th><th>K</th><th>°F</th></tr>
<tr><td>Zero assoluto</td><td>−273,15</td><td>0</td><td>−459,67</td></tr>
<tr><td>Fusione del ghiaccio</td><td>0</td><td>273,15</td><td>32</td></tr>
<tr><td>Corpo umano</td><td>37</td><td>310,15</td><td>98,6</td></tr>
<tr><td>Ebollizione dell'acqua</td><td>100</td><td>373,15</td><td>212</td></tr>
</table>
<p>Formula: °F = °C × 1,8 + 32. Se un amico americano ti dice che fuori ci sono 77 °F, sono (77 − 32) : 1,8 = 25 °C: una bella giornata!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della materia: tocca e scopri il perché",
      nodes: [
        { id: "materia", label: "Materia", x: 50, y: 6, color: "#6366f1", html: "Tutto ciò che ha massa e volume.", why: "Lo possiamo verificare: anche l'aria ha una massa (un pallone gonfio pesa più di uno sgonfio) e occupa spazio (un bicchiere capovolto nell'acqua non si riempie)." },
        { id: "particelle", label: "Modello particellare", x: 50, y: 26, color: "#2563eb", html: "La materia è fatta di particelle in movimento, separate da spazi vuoti.", why: "Lo immaginò Democrito nel V secolo a.C.; lo trasformò in teoria scientifica John Dalton nel 1808. Nel 1905 Einstein spiegò con le particelle il moto browniano dei granelli di polline nell'acqua: la prova che gli atomi esistono davvero." },
        { id: "solido", label: "Solido", x: 15, y: 46, color: "#0369a1", html: "Forma e volume propri.", why: "Le forze tra le particelle sono così forti che le tengono in posizioni fisse: possono solo vibrare." },
        { id: "liquido", label: "Liquido", x: 50, y: 50, color: "#0ea5e9", html: "Volume proprio, forma del recipiente.", why: "Le particelle sono ancora vicine (per questo il volume non cambia), ma hanno abbastanza energia per scorrere le une sulle altre." },
        { id: "gas", label: "Aeriforme", x: 85, y: 46, color: "#94a3b8", html: "Né forma né volume propri.", why: "Le particelle hanno tanta energia da vincere quasi del tutto le forze di attrazione: volano in ogni direzione e riempiono lo spazio." },
        { id: "temperatura", label: "Temperatura", x: 22, y: 74, color: "#f59e0b", html: "Indica l'agitazione media delle particelle; si misura con il termometro.", why: "Più le particelle si muovono velocemente, più il corpo è caldo. Allo zero assoluto (−273,15 °C) il movimento è il minimo possibile: per questo non si può andare più giù." },
        { id: "calore", label: "Calore", x: 78, y: 74, color: "#ef4444", html: "Energia che passa dal corpo più caldo al più freddo.", why: "Le particelle più veloci urtano quelle più lente e cedono energia, finché le temperature si uguagliano. Lo dimostrò James Joule nell'Ottocento, scaldando l'acqua con delle palette mosse da un peso che cadeva." },
        { id: "passaggi", label: "Passaggi di stato", x: 50, y: 94, color: "#a855f7", html: "Fusione, solidificazione, vaporizzazione, condensazione, sublimazione, brinamento.", why: "Dando calore, le particelle acquistano energia sufficiente a rompere i legami con le vicine; togliendolo, si riavvicinano. Durante il passaggio la temperatura resta costante perché l'energia serve a rompere i legami (calore latente)." }
      ],
      edges: [
        ["materia", "particelle", "spiegata dal"],
        ["particelle", "solido", "legate forte"],
        ["particelle", "liquido", "scorrono"],
        ["particelle", "gas", "libere"],
        ["particelle", "temperatura", "velocità media ="],
        ["calore", "temperatura", "fa variare la"],
        ["calore", "passaggi", "provoca i"],
        ["passaggi", "solido", "collegano"],
        ["passaggi", "gas", "collegano"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: passaggi di stato",
      questions: [
        { type: "mc", q: "Come si chiama il passaggio da gas a liquido?", options: ["Evaporazione", "Condensazione", "Sublimazione", "Fusione"], answer: 1, explain: "Gas → liquido è la condensazione, come quando si appanna uno specchio." },
        { type: "tf", q: "Mentre il ghiaccio fonde, la sua temperatura continua a salire.", answer: false, explain: "Durante la fusione la temperatura resta costante a 0 °C: il calore serve a rompere i legami." },
        { type: "num", q: "Quanti kelvin sono 27 °C? (usa 273)", answer: 300, unit: "K", explain: "K = °C + 273 = 27 + 273 = 300 K." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La materia ha <b>massa</b> e <b>volume</b> ed è fatta di <b>particelle</b> in movimento.</li>
<li><b>Solido</b>: forma e volume propri. <b>Liquido</b>: volume proprio. <b>Gas</b>: niente di proprio.</li>
<li><b>Temperatura</b> = agitazione delle particelle; <b>calore</b> = energia che passa dal caldo al freddo.</li>
<li>Passaggi che <b>assorbono</b> calore: fusione, vaporizzazione, sublimazione. Che lo <b>cedono</b>: solidificazione, condensazione, brinamento.</li>
<li>Durante un passaggio di stato la <b>temperatura resta costante</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Materia", d: "Tutto ciò che ha massa e occupa spazio." },
    { t: "Stato di aggregazione", d: "Modo in cui si presenta la materia: solido, liquido, aeriforme (e plasma)." },
    { t: "Coesione", d: "Forza di attrazione tra le particelle di una sostanza." },
    { t: "Temperatura", d: "Grandezza legata alla velocità media delle particelle." },
    { t: "Calore", d: "Energia che passa da un corpo più caldo a uno più freddo." },
    { t: "Zero assoluto", d: "La temperatura più bassa possibile: 0 K = −273,15 °C." },
    { t: "Calore latente", d: "Calore assorbito o ceduto durante un passaggio di stato, senza cambiare la temperatura." },
    { t: "Sublimazione", d: "Passaggio diretto da solido a gas." },
    { t: "Brinamento", d: "Passaggio diretto da gas a solido." },
    { t: "Dilatazione termica", d: "Aumento di volume di un corpo quando si riscalda." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste cose NON è materia?", options: ["L'aria", "La luce", "L'acqua", "Il legno"], answer: 1, explain: "La luce è energia: non ha massa e non occupa un volume." },
      { type: "mc", q: "In quale stato le particelle sono ordinate e vibrano sul posto?", options: ["Solido", "Liquido", "Aeriforme"], answer: 0, explain: "Nel solido le forze di coesione tengono le particelle in posizioni fisse." },
      { type: "tf", q: "Calore e temperatura sono la stessa cosa.", answer: false, explain: "Il calore è energia in transito; la temperatura misura l'agitazione delle particelle." },
      { type: "text", q: "Come si chiama il passaggio diretto da solido a gas?", answer: ["sublimazione", "la sublimazione"], explain: "È la sublimazione, come per la naftalina o il ghiaccio secco." },
      { type: "mc", q: "Quale passaggio di stato cede calore all'ambiente?", options: ["Fusione", "Evaporazione", "Condensazione", "Sublimazione"], answer: 2, explain: "Condensazione, solidificazione e brinamento cedono calore." },
      { type: "num", q: "A quanti kelvin corrisponde la temperatura di fusione del ghiaccio, 0 °C? (arrotonda all'unità)", answer: 273, tol: 0.5, unit: "K", explain: "K = °C + 273,15, quindi 0 °C = 273,15 K ≈ 273 K. Lo zero assoluto, 0 K, è −273,15 °C." },
      { type: "num", q: "A che temperatura (in °C) bolle l'acqua al livello del mare?", answer: 100, unit: "°C", explain: "Al livello del mare l'acqua pura bolle a 100 °C." },
      { type: "mc", q: "Perché in alta montagna l'acqua bolle sotto i 100 °C?", options: ["Perché fa freddo", "Perché la pressione dell'aria è più bassa", "Perché l'acqua è più pura"], answer: 1, explain: "Con meno pressione le molecole sfuggono più facilmente dal liquido." },
      { type: "tf", q: "Il ghiaccio galleggia perché è meno denso dell'acqua liquida.", answer: true, explain: "Il ghiaccio ha densità circa 0,92 g/cm³, minore di quella dell'acqua." },
      { type: "order", q: "Metti in ordine cosa succede scaldando un cubetto di ghiaccio a −10 °C.", items: ["Il ghiaccio si scalda fino a 0 °C", "Il ghiaccio fonde a temperatura costante", "L'acqua si scalda fino a 100 °C", "L'acqua bolle a temperatura costante", "Il vapore si scalda oltre 100 °C"], explain: "È la curva di riscaldamento: tratti in salita e tratti piatti durante i passaggi di stato." },
      { type: "mc", q: "La brina sull'erba è un esempio di…", options: ["solidificazione", "brinamento", "condensazione", "fusione"], answer: 1, explain: "Il vapore acqueo passa direttamente allo stato solido: brinamento." },
      { type: "mc", q: "Perché i binari hanno dei piccoli spazi tra un pezzo e l'altro?", options: ["Per risparmiare ferro", "Per la dilatazione termica d'estate", "Per far passare l'acqua"], answer: 1, explain: "Con il caldo il metallo si dilata: senza spazi i binari si deformerebbero." }
    ]
  }
});

TOPIC('it', {
  id: "p4-sci-materia",
  title: "La materia",
  intro: "Il banco, l'acqua che bevi, l'aria che respiri e perfino tu: tutto è fatto di <b>materia</b>. Ma di che cosa è fatta la materia? Di pezzettini piccolissimi, invisibili, chiamati <b>atomi</b>. Scopriamo come si comportano nei <b>solidi</b>, nei <b>liquidi</b> e nei <b>gas</b>, e come la materia può <b>cambiare stato</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Che cos'è la materia",
      html: `<p>La <b>materia</b> è tutto ciò che <b>occupa uno spazio</b> e ha una <b>massa</b> (cioè "pesa"). Sono materia il legno, l'acqua, il ferro, l'aria, il nostro corpo.</p>
<p><b>Non</b> sono materia la luce, il suono, il calore, i pensieri o le emozioni: non occupano spazio e non hanno massa.</p>
<p>Ogni oggetto ha:</p>
<ul>
<li>una <b>massa</b>: la quantità di materia (si misura in grammi, chilogrammi…);</li>
<li>un <b>volume</b>: lo spazio che occupa (si misura in litri, cm³, m³…).</li>
</ul>
<p>Anche l'aria ha massa e occupa spazio: prova a schiacciare una bottiglia vuota chiusa con il tappo… non ci riesci, perché è piena d'aria!</p>`
    },
    {
      type: "text",
      title: "Atomi e molecole: i mattoncini della materia",
      html: `<p>Se potessi tagliare un pezzo di ferro a metà, poi ancora a metà, e ancora e ancora… alla fine arriveresti a una particella piccolissima che non si può più dividere senza che smetta di essere ferro: l'<b>atomo</b>.</p>
<ul>
<li>Gli <b>atomi</b> sono piccolissimi: in un solo granello di sale ce ne sono circa un miliardo di miliardi!</li>
<li>Esistono circa <b>118 tipi</b> di atomi, chiamati <b>elementi</b>: idrogeno (H), ossigeno (O), carbonio (C), ferro (Fe), oro (Au)…</li>
<li>Gli atomi si uniscono fra loro e formano le <b>molecole</b>. Per esempio <b>2 atomi di idrogeno + 1 di ossigeno</b> formano una molecola di <b>acqua</b>: <b>H₂O</b>.</li>
</ul>
<p>Con pochi tipi di atomi la natura costruisce milioni di sostanze diverse, come con le 21 lettere dell'alfabeto italiano scriviamo tutte le parole!</p>
<p>Le particelle della materia sono <b>sempre in movimento</b> e si <b>attraggono</b> fra loro. Quanto si muovono e quanto stanno vicine decide lo <b>stato</b> della materia.</p>`
    },
    {
      type: "3d",
      title: "La molecola d'acqua in 3D",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0.3, z: 0, r: 0.6, color: "#ef4444", label: "O" },
          { x: -0.78, y: -0.3, z: 0, r: 0.38, color: "#f8fafc", label: "H" },
          { x: 0.78, y: -0.3, z: 0, r: 0.38, color: "#f8fafc", label: "H" }
        ],
        bonds: [[0, 1], [0, 2]]
      },
      caption: "Una molecola d'acqua: un atomo di ossigeno (rosso) legato a due atomi di idrogeno (bianchi). Ha la forma di una \"V\" un po' aperta, con un angolo di circa 104,5°."
    },
    {
      type: "text",
      title: "I tre stati della materia",
      html: `<table>
<tr><th></th><th>🧊 Solido</th><th>💧 Liquido</th><th>💨 Aeriforme (gas)</th></tr>
<tr><td><b>Forma</b></td><td>propria</td><td>prende quella del recipiente</td><td>prende quella del recipiente</td></tr>
<tr><td><b>Volume</b></td><td>proprio</td><td>proprio</td><td>occupa tutto lo spazio disponibile</td></tr>
<tr><td><b>Particelle</b></td><td>vicinissime, ordinate, vibrano sul posto</td><td>vicine ma scorrono una sull'altra</td><td>lontane, si muovono velocissime in tutte le direzioni</td></tr>
<tr><td><b>Si può comprimere?</b></td><td>no</td><td>quasi no</td><td>sì, molto</td></tr>
<tr><td><b>Esempi</b></td><td>sasso, ghiaccio, legno</td><td>acqua, olio, latte</td><td>aria, vapore, elio dei palloncini</td></tr>
</table>
<p>Attenzione: <b>sabbia</b>, <b>farina</b> e <b>sale</b> sembrano liquidi perché si possono versare, ma sono <b>solidi</b>: ogni granello ha la sua forma!</p>`
    },
    {
      type: "svg",
      title: "Le particelle nei tre stati",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="20" y="40" width="180" height="180" fill="#e0e7ff" stroke="#3730a3" stroke-width="4"/>
<g fill="#6366f1"><circle cx="50" cy="70" r="14"/><circle cx="82" cy="70" r="14"/><circle cx="114" cy="70" r="14"/><circle cx="146" cy="70" r="14"/><circle cx="178" cy="70" r="14"/>
<circle cx="50" cy="102" r="14"/><circle cx="82" cy="102" r="14"/><circle cx="114" cy="102" r="14"/><circle cx="146" cy="102" r="14"/><circle cx="178" cy="102" r="14"/>
<circle cx="50" cy="134" r="14"/><circle cx="82" cy="134" r="14"/><circle cx="114" cy="134" r="14"/><circle cx="146" cy="134" r="14"/><circle cx="178" cy="134" r="14"/>
<circle cx="50" cy="166" r="14"/><circle cx="82" cy="166" r="14"/><circle cx="114" cy="166" r="14"/><circle cx="146" cy="166" r="14"/><circle cx="178" cy="166" r="14"/>
<circle cx="50" cy="198" r="14"/><circle cx="82" cy="198" r="14"/><circle cx="114" cy="198" r="14"/><circle cx="146" cy="198" r="14"/><circle cx="178" cy="198" r="14"/></g>
<text x="110" y="28" font-size="20" text-anchor="middle" fill="#3730a3" font-weight="bold">SOLIDO</text>
<text x="110" y="250" font-size="15" text-anchor="middle" fill="#1f2937">ordinate, vibrano</text>
<path d="M230 40 L230 220 L410 220 L410 40" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<g fill="#0ea5e9"><circle cx="255" cy="205" r="14"/><circle cx="285" cy="200" r="14"/><circle cx="318" cy="206" r="14"/><circle cx="350" cy="198" r="14"/><circle cx="385" cy="205" r="14"/>
<circle cx="262" cy="174" r="14"/><circle cx="298" cy="170" r="14"/><circle cx="335" cy="173" r="14"/><circle cx="372" cy="170" r="14"/>
<circle cx="250" cy="143" r="14"/><circle cx="285" cy="140" r="14"/><circle cx="320" cy="142" r="14"/><circle cx="356" cy="140" r="14"/><circle cx="392" cy="145" r="14"/></g>
<text x="320" y="28" font-size="20" text-anchor="middle" fill="#0369a1" font-weight="bold">LIQUIDO</text>
<text x="320" y="250" font-size="15" text-anchor="middle" fill="#1f2937">vicine, scorrono</text>
<rect x="440" y="40" width="180" height="180" fill="#fef3c7" stroke="#b45309" stroke-width="4"/>
<g fill="#f59e0b"><circle cx="470" cy="70" r="14"/><circle cx="580" cy="80" r="14"/><circle cx="530" cy="130" r="14"/><circle cx="465" cy="180" r="14"/><circle cx="595" cy="195" r="14"/></g>
<g stroke="#b45309" stroke-width="3"><line x1="485" y1="62" x2="510" y2="50"/><line x1="565" y1="90" x2="545" y2="105"/><line x1="545" y1="140" x2="570" y2="160"/><line x1="480" y1="188" x2="500" y2="205"/><line x1="580" y1="185" x2="560" y2="170"/></g>
<text x="530" y="28" font-size="20" text-anchor="middle" fill="#b45309" font-weight="bold">GAS</text>
<text x="530" y="250" font-size="15" text-anchor="middle" fill="#1f2937">lontane, velocissime</text>
<text x="320" y="285" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">più calore ➜ più movimento ➜ particelle più libere</text>
</svg>`,
      caption: "Stesse particelle, comportamento diverso: nel solido stanno ferme al loro posto, nel liquido scivolano, nel gas volano dappertutto."
    },
    {
      type: "widget",
      title: "Solido, liquido o gas?",
      widget: "classify",
      options: {
        groups: ["Solido", "Liquido", "Aeriforme"],
        items: [
          ["🪨 sasso", 0],
          ["🧂 sale", 0],
          ["🧊 cubetto di ghiaccio", 0],
          ["🥛 latte", 1],
          ["🫒 olio", 1],
          ["🍯 miele", 1],
          ["🎈 elio del palloncino", 2],
          ["♨️ vapore della pentola", 2],
          ["🌬️ aria", 2],
          ["⏳ sabbia", 0]
        ]
      },
      caption: "Trabocchetti: sale e sabbia si versano ma sono solidi; il miele è lento ma è un liquido."
    },
    {
      type: "quiz",
      title: "Mini-quiz: stati della materia",
      questions: [
        { type: "mc", q: "Quale stato della materia ha forma e volume propri?", options: ["Solido", "Liquido", "Gas"], answer: 0, explain: "Il solido mantiene forma e volume." },
        { type: "tf", q: "La luce è materia.", answer: false, explain: "La luce non ha massa e non occupa spazio: è energia." },
        { type: "mc", q: "Una molecola d'acqua è formata da…", options: ["1 atomo di idrogeno e 2 di ossigeno", "2 atomi di idrogeno e 1 di ossigeno", "solo ossigeno"], answer: 1, explain: "H₂O: due H e una O." }
      ]
    },
    {
      type: "text",
      title: "I passaggi di stato",
      html: `<p>Se si <b>dà calore</b> o si <b>toglie calore</b>, la materia può cambiare stato. Le particelle restano le stesse: cambia solo come si muovono!</p>
<p><b>Dando calore</b> (le particelle si muovono di più):</p>
<ul>
<li><b>Fusione</b>: da solido a liquido (il ghiaccio fonde a <b>0 °C</b>; il cioccolato si scioglie in mano).</li>
<li><b>Evaporazione</b>: da liquido a gas, lentamente e solo in superficie (i panni stesi si asciugano). Se avviene in tutto il liquido, con le bolle, si chiama <b>ebollizione</b> (l'acqua bolle a <b>100 °C</b> al livello del mare).</li>
<li><b>Sublimazione</b>: da solido direttamente a gas (la naftalina negli armadi, il "ghiaccio secco" che fa il fumo nei concerti).</li>
</ul>
<p><b>Togliendo calore</b> (le particelle rallentano):</p>
<ul>
<li><b>Solidificazione</b>: da liquido a solido (l'acqua nel freezer diventa ghiaccio).</li>
<li><b>Condensazione</b>: da gas a liquido (le goccioline sullo specchio dopo la doccia, la rugiada).</li>
<li><b>Brinamento</b>: da gas direttamente a solido (la brina sull'erba e sui vetri nelle notti gelide).</li>
</ul>
<p>Mentre una sostanza pura cambia stato, la sua <b>temperatura resta ferma</b>: tutto il calore serve per "staccare" le particelle. Un bicchiere d'acqua e ghiaccio resta a 0 °C finché c'è ancora ghiaccio!</p>`
    },
    {
      type: "svg",
      title: "Il ciclo dei passaggi di stato",
      svg: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="330" fill="#fff7ed"/>
<circle cx="110" cy="250" r="62" fill="#c7d2fe" stroke="#3730a3" stroke-width="4"/>
<text x="110" y="248" font-size="34" text-anchor="middle">🧊</text>
<text x="110" y="280" font-size="18" text-anchor="middle" font-weight="bold" fill="#3730a3">SOLIDO</text>
<circle cx="530" cy="250" r="62" fill="#bae6fd" stroke="#0369a1" stroke-width="4"/>
<text x="530" y="248" font-size="34" text-anchor="middle">💧</text>
<text x="530" y="280" font-size="18" text-anchor="middle" font-weight="bold" fill="#0369a1">LIQUIDO</text>
<circle cx="320" cy="75" r="62" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<text x="320" y="73" font-size="34" text-anchor="middle">💨</text>
<text x="320" y="105" font-size="18" text-anchor="middle" font-weight="bold" fill="#b45309">GAS</text>
<g stroke="#dc2626" stroke-width="4" fill="none"><path d="M175 235 L465 235"/><path d="M490 195 L375 110"/><path d="M150 195 L262 110"/></g>
<g fill="#dc2626"><polygon points="465,227 480,235 465,243"/><polygon points="381,103 366,104 372,117"/><polygon points="255,104 270,103 266,117"/></g>
<g stroke="#2563eb" stroke-width="4" fill="none"><path d="M465 275 L175 275"/><path d="M360 135 L470 215"/><path d="M280 135 L170 215"/></g>
<g fill="#2563eb"><polygon points="175,267 160,275 175,283"/><polygon points="464,222 478,224 473,210"/><polygon points="176,222 162,224 167,210"/></g>
<g font-size="16" font-weight="bold"><text x="320" y="228" text-anchor="middle" fill="#dc2626">fusione ➜</text><text x="320" y="300" text-anchor="middle" fill="#2563eb">⬅ solidificazione</text>
<text x="445" y="135" fill="#dc2626">evaporazione</text><text x="430" y="200" fill="#2563eb">condensazione</text>
<text x="85" y="135" fill="#dc2626">sublimazione</text><text x="110" y="200" fill="#2563eb">brinamento</text></g>
<text x="20" y="320" font-size="15" fill="#dc2626">rosso = si dà calore</text>
<text x="460" y="320" font-size="15" fill="#2563eb">blu = si toglie calore</text>
</svg>`,
      caption: "Sei passaggi di stato, a coppie opposte: fusione ↔ solidificazione, evaporazione ↔ condensazione, sublimazione ↔ brinamento."
    },
    {
      type: "widget",
      title: "Abbina il passaggio all'esempio",
      widget: "match",
      options: {
        pairs: [
          ["Fusione", "Il gelato si scioglie al sole"],
          ["Solidificazione", "L'acqua nel freezer diventa ghiaccio"],
          ["Evaporazione", "La pozzanghera sparisce"],
          ["Condensazione", "Lo specchio si appanna dopo la doccia"],
          ["Sublimazione", "La naftalina diventa piccola nell'armadio"],
          ["Brinamento", "Si forma la brina sul vetro dell'auto"]
        ]
      },
      caption: "Ogni passaggio di stato si vede ogni giorno, a casa e in natura."
    },
    {
      type: "example",
      title: "Esempio pratico: l'acqua in cucina",
      html: `<p>Mamma prepara la pasta. Osserva quanti cambiamenti:</p>
<ol>
<li>Prende i cubetti di ghiaccio dal freezer per l'acqua da bere: nel bicchiere <b>fondono</b> (solido → liquido).</li>
<li>Mette la pentola sul fuoco: a 100 °C l'acqua <b>bolle</b> (ebollizione: liquido → gas). Il vapore è invisibile!</li>
<li>La "nuvoletta" bianca che vedi sopra la pentola in realtà sono goccioline: il vapore, toccando l'aria più fresca, <b>condensa</b> (gas → liquido).</li>
<li>Sul coperchio si formano tante gocce che ricadono: altra <b>condensazione</b>.</li>
</ol>
<p>In tutto questo l'acqua è sempre acqua (H₂O): cambia lo stato, non la sostanza. È una <b>trasformazione fisica</b>, reversibile.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la bottiglia e il palloncino",
      html: `<p>Un esperimento per dimostrare che i gas occupano spazio e si espandono con il calore:</p>
<ol>
<li>Infila un palloncino sgonfio sul collo di una bottiglia di plastica vuota.</li>
<li>Metti la bottiglia in una bacinella di <b>acqua calda</b> (non bollente!): il palloncino si <b>gonfia</b> un po'. L'aria dentro, scaldandosi, si espande.</li>
<li>Poi mettila in acqua con il <b>ghiaccio</b>: il palloncino si <b>sgonfia</b>. L'aria fredda occupa meno spazio.</li>
</ol>
<p>Le particelle d'aria, più calde, si muovono più veloci e "spingono" di più.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il ghiaccio galleggia",
      html: `<p>Quasi tutte le sostanze, quando diventano solide, si stringono e occupano meno spazio. L'acqua no! Il ghiaccio occupa circa il <b>9% in più</b> dell'acqua liquida: per questo galleggia, e per questo una bottiglia piena d'acqua dimenticata nel freezer si spacca. È una fortuna per i pesci: d'inverno il ghiaccio resta in superficie e fa da "coperta", mentre sotto l'acqua resta liquida.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Esiste un quarto stato",
      html: `<p>Oltre a solido, liquido e gas, esiste il <b>plasma</b>: un gas così caldo che gli atomi perdono pezzetti (gli elettroni). Il Sole e le stelle sono fatti di plasma, e anche i fulmini e le aurore boreali. In realtà è lo stato più diffuso nell'universo!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Siamo fatti di polvere di stelle",
      html: `<p>Gli atomi di carbonio, ossigeno e ferro del tuo corpo sono stati \"fabbricati\" miliardi di anni fa dentro stelle antichissime, che poi sono esplose e hanno sparso i loro atomi nello spazio. Da quella polvere si sono formati il Sole, la Terra… e anche noi!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Materia = tutto ciò che ha <b>massa</b> e <b>volume</b>. È fatta di <b>atomi</b>, che si uniscono in <b>molecole</b>.</li>
<li><b>Solido</b>: forma e volume propri. <b>Liquido</b>: volume proprio, forma del recipiente. <b>Gas</b>: né forma né volume propri.</li>
<li>Con il calore: <b>fusione</b>, <b>evaporazione/ebollizione</b>, <b>sublimazione</b>.</li>
<li>Togliendo calore: <b>solidificazione</b>, <b>condensazione</b>, <b>brinamento</b>.</li>
<li>Acqua: fonde/solidifica a <b>0 °C</b>, bolle a <b>100 °C</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la materia",
      intro: "Gli atomi non si vedono, ma si possono immaginare, interpretare con il corpo, costruire. Scegli il modo che fa per te!",
      tabs: [
        {
          label: "🏃 Diventa una particella",
          html: `<p>Un gioco da fare in palestra o in cortile: ogni bambino è una <b>particella</b>.</p>
<ul>
<li><b>Solido</b>: state stretti, in file ordinate, tenendovi per le braccia. Potete solo dondolare sul posto (vibrare).</li>
<li><b>Liquido</b>: lasciate le braccia ma restate vicini; potete scivolare l'uno accanto all'altro e "riempire" una zona disegnata col gesso.</li>
<li><b>Gas</b>: correte (piano!) in tutte le direzioni, usando tutta la palestra.</li>
</ul>
<p>L'insegnante fa da "fornello": quando dice "più calore!" vi muovete più veloci e cambiate stato; quando dice "freddo!" rallentate e vi riavvicinate.</p>`
        },
        {
          label: "🧱 Come i mattoncini",
          html: `<p>Immagina gli <b>atomi</b> come i <b>mattoncini</b> delle costruzioni: ci sono pochi colori e forme (gli elementi), ma con loro puoi costruire di tutto.</p>
<ul>
<li>2 mattoncini bianchi (H) + 1 rosso (O) = una molecola d'acqua 💧</li>
<li>1 nero (C) + 2 rossi (O) = anidride carbonica</li>
<li>2 rossi insieme = ossigeno che respiriamo</li>
</ul>
<p>Se smonti la costruzione e rimonti i mattoncini in un altro modo, ottieni una sostanza diversa: è una <b>reazione chimica</b>! Nei passaggi di stato, invece, le costruzioni restano intere: cambia solo quanto sono vicine e quanto si muovono.</p>`
        },
        {
          label: "⚛️ L'atomo in 3D",
          html: `<p>Ecco come gli scienziati immaginano un atomo (modello del danese <b>Niels Bohr</b>, 1913): al centro un <b>nucleo</b> piccolissimo, intorno gli <b>elettroni</b> che girano velocissimi. Scegli l'elemento: idrogeno (1 elettrone), elio (2), carbonio (6), ossigeno (8), sodio (11).</p>
<p>Se l'atomo fosse grande come uno stadio di calcio, il nucleo sarebbe grande come una formica al centro del campo: l'atomo è quasi tutto vuoto!</p>`,
          scene: "atom",
          options: { elements: ["H", "He", "C", "O", "Na"] }
        },
        {
          label: "🏛️ L'idea di Democrito",
          html: `<p>Circa <b>2400 anni fa</b>, in Grecia, il filosofo <b>Democrito</b> (con il suo maestro Leucippo) si chiese: "Se taglio una mela a metà, e poi ancora a metà, posso andare avanti per sempre?". Rispose di no: prima o poi si arriva a un pezzettino che <b>non si può più tagliare</b>. Lo chiamò <b>átomos</b>, che in greco vuol dire proprio "indivisibile".</p>
<p>Era solo un'idea, senza esperimenti. Ci vollero più di 2000 anni perché l'inglese <b>John Dalton</b> (1808) la trasformasse in una vera teoria scientifica. E poi si scoprì che anche l'atomo, in realtà, è fatto di particelle ancora più piccole!</p>`
        },
        {
          label: "🔬 La tavola degli elementi",
          html: `<p>Tutti gli elementi conosciuti sono messi in ordine nella <b>tavola periodica</b>, inventata dal russo <b>Dmitrij Mendeleev</b> nel 1869. Tocca un elemento per scoprirlo. Trovi quelli che conosci? Ossigeno (O), ferro (Fe), oro (Au), carbonio (C)…</p>`,
          widget: "periodicTable",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della materia: tocca un nodo e scopri il perché",
      nodes: [
        { id: "materia", label: "Materia", x: 50, y: 6, color: "#7c3aed", html: "Tutto ciò che ha massa e occupa spazio.", why: "È una definizione che si può verificare con la bilancia (massa) e con un recipiente graduato (volume). Già Aristotele parlava di materia, ma pensava che fosse fatta di 4 \"elementi\": terra, acqua, aria e fuoco." },
        { id: "atomi", label: "Atomi", x: 22, y: 28, color: "#2563eb", html: "Le particelle piccolissime di cui è fatta la materia.", why: "Ipotizzati da Democrito (V secolo a.C.); dimostrati con gli esperimenti da John Dalton (1808), che notò che le sostanze si combinano sempre in proporzioni fisse. Nel 1905 Albert Einstein spiegò il movimento disordinato dei granelli di polline nell'acqua (moto browniano) come effetto degli urti delle molecole: era la prova che esistono davvero." },
        { id: "elementi", label: "Elementi", x: 8, y: 52, color: "#0ea5e9", html: "Sostanze fatte da un solo tipo di atomo: circa 118.", why: "Mendeleev nel 1869 li ordinò nella tavola periodica e lasciò dei buchi per elementi non ancora scoperti, prevedendone le proprietà. Quando furono trovati (gallio 1875, scandio 1879, germanio 1886) tutti capirono che aveva ragione." },
        { id: "molecole", label: "Molecole", x: 36, y: 52, color: "#06b6d4", html: "Gruppi di atomi legati fra loro, come H₂O.", why: "Il nome fu reso famoso dall'italiano <b>Amedeo Avogadro</b> (1811), che capì per primo la differenza fra atomi e molecole: per esempio che il gas ossigeno è fatto di coppie di atomi (O₂)." },
        { id: "particelle", label: "Particelle in movimento", x: 78, y: 28, color: "#dc2626", html: "Le particelle si muovono sempre e si attraggono.", why: "Più calore = più movimento. Questa \"teoria cinetica\" fu sviluppata nell'Ottocento da Maxwell e Boltzmann e spiega perché la materia cambia stato." },
        { id: "solido", label: "Solido", x: 60, y: 60, color: "#4f46e5", html: "Forma e volume propri.", why: "Le particelle sono così legate che possono solo vibrare al loro posto, spesso in disposizioni ordinate chiamate cristalli (come nel sale o nella neve)." },
        { id: "liquido", label: "Liquido", x: 78, y: 70, color: "#0284c7", html: "Volume proprio, forma del recipiente.", why: "Le particelle restano vicine (quindi il volume non cambia) ma scivolano l'una sull'altra (quindi la forma cambia)." },
        { id: "gas", label: "Gas (aeriforme)", x: 94, y: 56, color: "#d97706", html: "Né forma né volume propri.", why: "Le particelle sono così veloci da vincere l'attrazione reciproca: si allontanano e riempiono tutto lo spazio. Per questo i gas si comprimono: fra le particelle c'è tanto vuoto." },
        { id: "passaggi", label: "Passaggi di stato", x: 50, y: 92, color: "#16a34a", html: "Fusione, solidificazione, evaporazione, condensazione, sublimazione, brinamento.", why: "Dare calore fa muovere di più le particelle, toglierlo le fa rallentare. Lo scienziato scozzese <b>Joseph Black</b> (verso il 1760) scoprì il \"calore latente\": durante il passaggio di stato si assorbe calore senza che la temperatura salga." }
      ],
      edges: [
        ["materia", "atomi", "è fatta di"],
        ["atomi", "elementi", "tipi diversi"],
        ["atomi", "molecole", "si uniscono in"],
        ["materia", "particelle", "le particelle"],
        ["particelle", "solido", "ferme e vicine"],
        ["particelle", "liquido", "vicine e scorrevoli"],
        ["particelle", "gas", "libere e veloci"],
        ["solido", "passaggi", "con il calore"],
        ["liquido", "passaggi", "cambia stato"],
        ["gas", "passaggi", "togliendo calore"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i passaggi di stato",
      questions: [
        { type: "mc", q: "Come si chiama il passaggio da gas a liquido?", options: ["Evaporazione", "Condensazione", "Fusione"], answer: 1, explain: "Condensazione, come le gocce sullo specchio." },
        { type: "num", q: "A quanti gradi Celsius bolle l'acqua al livello del mare?", answer: 100, unit: "°C", explain: "100 °C (in alta montagna bolle a temperature un po' più basse)." },
        { type: "tf", q: "Nella sublimazione un solido diventa gas senza diventare liquido.", answer: true, explain: "Come la naftalina o il ghiaccio secco." }
      ]
    }
  ],
  glossary: [
    { t: "Materia", d: "Tutto ciò che ha una massa e occupa uno spazio." },
    { t: "Massa", d: "Quantità di materia di un corpo." },
    { t: "Volume", d: "Spazio occupato da un corpo." },
    { t: "Atomo", d: "Particella piccolissima che forma la materia." },
    { t: "Elemento", d: "Sostanza fatta di un solo tipo di atomo (es. ossigeno, ferro)." },
    { t: "Molecola", d: "Gruppo di atomi uniti fra loro (es. H₂O)." },
    { t: "Aeriforme", d: "Stato della materia dei gas e dei vapori." },
    { t: "Fusione", d: "Passaggio da solido a liquido." },
    { t: "Evaporazione", d: "Passaggio lento da liquido a gas, in superficie." },
    { t: "Ebollizione", d: "Evaporazione in tutto il liquido, con formazione di bolle." },
    { t: "Condensazione", d: "Passaggio da gas a liquido." },
    { t: "Sublimazione", d: "Passaggio diretto da solido a gas." },
    { t: "Brinamento", d: "Passaggio diretto da gas a solido." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste NON è materia?", options: ["L'aria", "Il suono", "L'acqua"], answer: 1, explain: "Il suono è un'onda di energia, non ha massa propria." },
      { type: "mc", q: "Un liquido ha…", options: ["forma e volume propri", "volume proprio ma la forma del recipiente", "né forma né volume propri"], answer: 1, explain: "Il volume resta, la forma cambia." },
      { type: "tf", q: "Il sale da cucina è un solido, anche se si può versare.", answer: true, explain: "Ogni granello ha forma e volume propri." },
      { type: "text", q: "Come si chiama il passaggio da solido a liquido?", answer: ["fusione", "la fusione"], explain: "La fusione." },
      { type: "mc", q: "La brina sui vetri si forma per…", options: ["fusione", "brinamento", "evaporazione"], answer: 1, explain: "Il vapore acqueo diventa direttamente ghiaccio." },
      { type: "num", q: "A quanti gradi Celsius l'acqua diventa ghiaccio?", answer: 0, unit: "°C", explain: "A 0 °C." },
      { type: "mc", q: "In quale stato le particelle sono più lontane fra loro?", options: ["Solido", "Liquido", "Gas"], answer: 2, explain: "Nel gas le particelle si muovono libere e lontane." },
      { type: "order", q: "Metti in ordine ciò che succede a un cubetto di ghiaccio dimenticato su un fornello acceso.", items: ["Ghiaccio solido", "Fusione", "Acqua liquida", "Ebollizione", "Vapore"], explain: "Il solido fonde, diventa liquido, poi bolle e diventa vapore." },
      { type: "tf", q: "Durante un passaggio di stato cambia la sostanza: l'acqua diventa un'altra cosa.", answer: false, explain: "Cambia lo stato, non la sostanza: ghiaccio, acqua e vapore sono tutti H₂O." },
      { type: "mc", q: "Come si chiamano i \"mattoncini\" della materia?", options: ["Atomi", "Cellule", "Granelli"], answer: 0, explain: "Gli atomi, che si uniscono in molecole." },
      { type: "mc", q: "Perché una bottiglia d'acqua nel freezer può rompersi?", options: ["Perché il ghiaccio occupa più spazio dell'acqua", "Perché il freddo rompe la plastica", "Perché l'acqua evapora"], answer: 0, explain: "L'acqua solidificando aumenta di volume di circa il 9%." }
    ]
  }
});

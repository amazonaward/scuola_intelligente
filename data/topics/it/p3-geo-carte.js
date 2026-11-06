TOPIC('it', {
  id: "p3-geo-carte",
  title: "Le carte geografiche",
  intro: "Una carta geografica è come una <b>fotografia dall'alto</b>, rimpicciolita e disegnata con colori e simboli. Oggi scopriamo come si fa a far stare una città, una regione o il mondo intero su un foglio: la <b>scala</b>, la <b>legenda</b> e i diversi <b>tipi di carte</b>. 🗺️",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Passo 1: guardare dall'alto",
      html: `<p>Prova a guardare il tuo astuccio da tre punti diversi:</p>
<ul>
<li><b>Di fronte</b> (visione frontale): vedi il davanti.</li>
<li><b>Di sbieco</b> (visione obliqua): vedi il davanti e un po' di sopra.</li>
<li><b>Dall'alto</b> (visione <b>zenitale</b>, o "a volo d'uccello"): vedi solo la parte di sopra. 🦅</li>
</ul>
<p>I cartografi, cioè chi disegna le carte, usano <b>sempre la visione dall'alto</b>. Così ogni cosa ha la sua forma vera e si possono misurare le distanze.</p>`
    },
    {
      type: "text", title: "Passo 2: rimpicciolire (la riduzione in scala)",
      html: `<p>Un parco o una città sono troppo grandi per un foglio. Allora il cartografo li <b>rimpicciolisce</b>: tutte le misure vengono divise per lo stesso numero. Questo si chiama <b>riduzione in scala</b>.</p>
<p>La <b>scala</b> si scrive così: <b>1 : 100</b> (si legge "uno a cento"). Vuol dire:</p>
<p style="font-size:1.15em">📏 <b>1 cm</b> sul disegno = <b>100 cm</b> (cioè 1 metro) nella realtà.</p>
<ul>
<li><b>1 : 100</b> → 1 cm = 1 m. Va bene per la pianta della tua aula.</li>
<li><b>1 : 100.000</b> → 1 cm = 1 km. Va bene per una provincia.</li>
<li><b>1 : 10.000.000</b> → 1 cm = 100 km. Va bene per tutta l'Italia.</li>
</ul>
<p>Più il secondo numero è <b>grande</b>, più la realtà è stata rimpicciolita e <b>meno particolari</b> si vedono.</p>`
    },
    {
      type: "svg", title: "Dalla realtà alla pianta",
      caption: "La stessa aula vista di sbieco e poi dall'alto, rimpicciolita e disegnata con i simboli della legenda.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<text x="140" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">VISTA DI SBIECO</text>
<polygon points="40,240 240,240 270,110 70,110" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="70,110 270,110 270,60 70,60" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<rect x="110" y="70" width="70" height="30" fill="#166534" stroke="#14532d" stroke-width="2"/>
<polygon points="80,215 120,215 128,185 88,185" fill="#a16207"/>
<polygon points="150,215 190,215 198,185 158,185" fill="#a16207"/>
<polygon points="105,170 140,170 146,145 111,145" fill="#a16207"/>
<polygon points="175,170 210,170 216,145 181,145" fill="#a16207"/>
<text x="300" y="165" font-size="34" text-anchor="middle" fill="#2563eb">➜</text>
<text x="300" y="195" font-size="13" text-anchor="middle" fill="#1e3a8a">dall'alto</text>
<text x="465" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">PIANTA 1 : 100</text>
<rect x="350" y="50" width="230" height="190" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
<rect x="420" y="54" width="90" height="12" fill="#166534"/>
<rect x="375" y="100" width="40" height="25" fill="#a16207"/>
<rect x="445" y="100" width="40" height="25" fill="#a16207"/>
<rect x="515" y="100" width="40" height="25" fill="#a16207"/>
<rect x="375" y="160" width="40" height="25" fill="#a16207"/>
<rect x="445" y="160" width="40" height="25" fill="#a16207"/>
<rect x="515" y="160" width="40" height="25" fill="#a16207"/>
<rect x="545" y="236" width="30" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<rect x="355" y="258" width="16" height="12" fill="#a16207"/>
<text x="377" y="269" font-size="14" fill="#0f172a">banco</text>
<rect x="425" y="258" width="16" height="12" fill="#166534"/>
<text x="447" y="269" font-size="14" fill="#0f172a">lavagna</text>
<rect x="510" y="258" width="16" height="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<text x="532" y="269" font-size="14" fill="#0f172a">porta</text>
<text x="465" y="292" font-size="14" text-anchor="middle" fill="#475569">LEGENDA</text>
</svg>`
    },
    {
      type: "example", title: "Esempio pratico: misurare sulla pianta",
      html: `<p>Sulla pianta della tua aula in scala <b>1 : 100</b> la parete lunga misura <b>7 cm</b>.</p>
<p>Quanto è lunga davvero? Ogni centimetro vale 100 cm, quindi:</p>
<p><b>7 × 100 = 700 cm = 7 metri</b> ✅</p>
<p>E al contrario: se il corridoio è lungo 12 m, sulla pianta lo disegno lungo <b>12 cm</b>.</p>`
    },
    {
      type: "remember", title: "La legenda e i colori",
      html: `<p>Ogni carta ha una <b>legenda</b>: un riquadro che spiega che cosa vogliono dire i <b>simboli</b> e i <b>colori</b>. Nelle carte fisiche i colori sono quasi sempre questi:</p>
<ul>
<li>🟦 <b>azzurro / blu</b>: mari, laghi, fiumi (più è scuro, più l'acqua è profonda);</li>
<li>🟩 <b>verde</b>: pianure;</li>
<li>🟨 <b>giallo / marrone chiaro</b>: colline;</li>
<li>🟫 <b>marrone scuro</b>: montagne (più è scuro, più sono alte);</li>
<li>⬜ <b>bianco</b>: ghiacciai e nevi perenni.</li>
</ul>
<p>E non dimenticare il <b>Nord</b>: di solito è <b>in alto</b>, indicato da una freccia o dalla <b>rosa dei venti</b>.</p>`
    },
    {
      type: "3d", title: "Il paesaggio vero e i suoi colori sulla carta",
      scene: "terrain",
      caption: "Ruota il paesaggio e tocca le parti: per ognuna scopri con quale colore o simbolo la disegna il cartografo.",
      options: {
        features: {
          sea: { label: "Mare", html: "Sulla carta fisica è <b>azzurro</b>: più il blu è scuro, più il mare è profondo." },
          coast: { label: "Costa", html: "È disegnata con una <b>linea</b> che separa l'azzurro del mare dal colore della terra." },
          plain: { label: "Pianura", html: "Terra piatta e bassa (meno di 200 m): sulla carta fisica è <b>verde</b>." },
          hill: { label: "Collina", html: "Rilievo fino a circa 600 m: sulla carta è <b>giallo</b> o marrone chiaro." },
          mountain: { label: "Montagna", html: "Rilievo oltre i 600 m: sulla carta è <b>marrone</b>, sempre più scuro salendo." },
          peak: { label: "Vetta", html: "La cima della montagna: si segna con un <b>triangolino ▲</b> e la sua altezza in metri, per esempio ▲ 4.808 (Monte Bianco)." },
          glacier: { label: "Ghiacciaio", html: "Ghiaccio che non si scioglie mai: sulla carta è <b>bianco</b>." },
          river: { label: "Fiume", html: "Una <b>linea blu</b> che si allarga verso la foce." },
          lake: { label: "Lago", html: "Una <b>macchia azzurra</b> circondata dalla terra." }
        }
      }
    },
    {
      type: "quiz", title: "Mini-quiz: scala e legenda",
      questions: [
        { type: "mc", q: "La carta disegnata guardando dall'alto usa la visione…", options: ["frontale", "zenitale", "laterale"], answer: 1, explain: "Zenitale = dall'alto, come un uccello in volo." },
        { type: "num", q: "Scala 1 : 100. Una parete sulla pianta misura 5 cm. Quanti metri è lunga davvero?", answer: 5, tol: 0, unit: "m", explain: "5 cm × 100 = 500 cm = 5 m." },
        { type: "mc", q: "Su una carta fisica le pianure sono di colore…", options: ["marrone", "verde", "bianco"], answer: 1, explain: "Verde per le pianure, marrone per le montagne." }
      ]
    },
    {
      type: "text", title: "Passo 3: i tipi di carte",
      html: `<p>Le carte si dividono in due modi: <b>per quanto rimpiccioliscono</b> (la scala) e <b>per che cosa mostrano</b> (il contenuto).</p>
<table>
<tr><th>Per la scala</th><th>Che cosa mostra</th><th>Scala tipica</th></tr>
<tr><td><b>Pianta</b></td><td>una stanza, una casa, una scuola</td><td>1 : 50 – 1 : 500</td></tr>
<tr><td><b>Mappa</b> (pianta di città)</td><td>un quartiere, una città con le vie</td><td>fino a 1 : 10.000</td></tr>
<tr><td><b>Carta topografica</b></td><td>un piccolo territorio: sentieri, case, boschi</td><td>1 : 25.000 – 1 : 100.000</td></tr>
<tr><td><b>Carta corografica</b></td><td>una regione</td><td>1 : 200.000 – 1 : 1.000.000</td></tr>
<tr><td><b>Carta geografica</b></td><td>uno Stato, un continente</td><td>oltre 1 : 1.000.000</td></tr>
<tr><td><b>Planisfero</b></td><td>tutta la Terra su un foglio</td><td>circa 1 : 100.000.000</td></tr>
</table>
<p>Per il <b>contenuto</b>:</p>
<ul>
<li><b>Carta fisica</b>: monti, pianure, fiumi, laghi, mari (gli elementi della natura).</li>
<li><b>Carta politica</b>: Stati, regioni, confini, città (gli elementi decisi dall'uomo). Ogni Stato ha un colore diverso.</li>
<li><b>Carta tematica</b>: un solo argomento, per esempio il clima, le strade, i prodotti agricoli o dove vivono più persone.</li>
</ul>`
    },
    {
      type: "svg", title: "Fisica, politica o tematica?",
      caption: "La stessa isola inventata disegnata in tre modi diversi.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ffffff"/>
<rect x="10" y="40" width="185" height="200" fill="#7dd3fc"/>
<ellipse cx="102" cy="140" rx="75" ry="80" fill="#4ade80"/>
<ellipse cx="110" cy="125" rx="45" ry="45" fill="#facc15"/>
<ellipse cx="115" cy="115" rx="22" ry="22" fill="#92400e"/>
<polygon points="115,100 108,112 122,112" fill="#ffffff"/>
<path d="M115,130 Q90,170 70,215" stroke="#1d4ed8" stroke-width="4" fill="none"/>
<text x="102" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#166534">FISICA</text>
<text x="102" y="265" font-size="14" text-anchor="middle" fill="#0f172a">monti, colline,</text>
<text x="102" y="283" font-size="14" text-anchor="middle" fill="#0f172a">pianure, fiumi</text>
<rect x="208" y="40" width="185" height="200" fill="#e0f2fe"/>
<path d="M300,60 A75,80 0 0 0 225,140 L300,140 Z" fill="#fca5a5" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M300,60 A75,80 0 0 1 375,140 L300,140 Z" fill="#c4b5fd" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M225,140 A75,80 0 0 0 375,140 Z" fill="#fde68a" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<circle cx="270" cy="115" r="5" fill="#0f172a"/>
<circle cx="335" cy="110" r="5" fill="#0f172a"/>
<rect x="294" y="174" width="12" height="12" fill="#dc2626"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#b91c1c">POLITICA</text>
<text x="300" y="265" font-size="14" text-anchor="middle" fill="#0f172a">confini, regioni,</text>
<text x="300" y="283" font-size="14" text-anchor="middle" fill="#0f172a">città, capitale ■</text>
<rect x="406" y="40" width="185" height="200" fill="#e0f2fe"/>
<ellipse cx="498" cy="140" rx="75" ry="80" fill="#e5e7eb"/>
<text x="470" y="115" font-size="26" text-anchor="middle">🍇</text>
<text x="530" y="125" font-size="26" text-anchor="middle">🐄</text>
<text x="490" y="180" font-size="26" text-anchor="middle">🌾</text>
<text x="498" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c3aed">TEMATICA</text>
<text x="498" y="265" font-size="14" text-anchor="middle" fill="#0f172a">un solo tema:</text>
<text x="498" y="283" font-size="14" text-anchor="middle" fill="#0f172a">i prodotti agricoli</text>
</svg>`
    },
    {
      type: "widget", title: "Gioco: carta fisica o carta politica?",
      widget: "classify",
      caption: "Su quale carta cerchi queste cose? Gli elementi naturali stanno sulla fisica, quelli decisi dall'uomo sulla politica.",
      options: {
        groups: ["🏔️ Carta fisica", "🏛️ Carta politica"],
        items: [
          ["il fiume Po", 0], ["le Alpi", 0], ["il lago di Garda", 0], ["la Pianura Padana", 0], ["l'altezza del Monte Bianco", 0],
          ["il confine con la Francia", 1], ["Roma capitale", 1], ["le 20 regioni", 1], ["i capoluoghi di provincia", 1], ["il nome degli Stati", 1]
        ]
      }
    },
    {
      type: "example", title: "Esempio pratico: quale carta mi serve?",
      html: `<ul>
<li>🥾 Vai in gita in montagna e vuoi seguire il sentiero → <b>carta topografica</b> 1 : 25.000 (si vedono anche le baite e le fontane).</li>
<li>🏙️ Devi trovare via Garibaldi in una città nuova → <b>mappa</b> (pianta della città).</li>
<li>🚗 Andate in vacanza da Torino a Bari → <b>carta stradale</b> d'Italia (una carta tematica: le strade).</li>
<li>☀️ Vuoi sapere dove piove di più in Italia → <b>carta tematica del clima</b>.</li>
<li>🌍 Vuoi vedere tutti i continenti insieme → <b>planisfero</b> o <b>mappamondo</b>.</li>
</ul>`
    },
    {
      type: "3d", title: "Il mappamondo: la Terra senza deformazioni",
      scene: "globe",
      caption: "Ruota il globo. Il mappamondo è l'unica \"carta\" che mostra la Terra con la forma giusta: tutte le carte piatte la deformano un po'.",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 72, lon: -40, label: "Groenlandia" },
          { lat: 2, lon: 21, label: "Africa (centro)" },
          { lat: 51.48, lon: 0, label: "Greenwich (meridiano 0°)" },
          { lat: 0, lon: -50, label: "Equatore" },
          { lat: 90, lon: 0, label: "Polo Nord" }
        ]
      }
    },
    {
      type: "curiosity", title: "Lo sapevi che… la Groenlandia sembra grande come l'Africa?",
      html: `<p>Su molti planisferi (quelli disegnati con il metodo di <b>Gerardo Mercatore</b>, nel 1569) la <b>Groenlandia</b> sembra grande quasi come l'<b>Africa</b>. In realtà l'Africa è circa <b>14 volte più grande</b>! 😮</p>
<p>Il motivo: la Terra è una palla e, per "spianarla" su un foglio, bisogna stirarla. Le terre vicine ai poli vengono stirate moltissimo. Per questo il <b>mappamondo</b> è più fedele di qualsiasi carta piatta.</p>`
    },
    {
      type: "curiosity", title: "Lo sapevi che… esiste una carta lunga quasi 7 metri?",
      html: `<p>La <b>Tabula Peutingeriana</b> è una copia medievale di una carta stradale dell'<b>antica Roma</b>. È un rotolo lungo circa <b>6 metri e 75 centimetri</b> e alto solo 34 cm! Mostra le strade dell'Impero romano, le città e le distanze tra una tappa e l'altra, come un vecchio "navigatore" per i viaggiatori. Oggi si trova a Vienna.</p>`
    },
    {
      type: "alternatives", title: "Altri modi per capirlo",
      intro: "Se la scala o i simboli ti sembrano difficili, prova una di queste strade.",
      tabs: [
        {
          label: "🧸 Il mondo dei giocattoli",
          html: `<p>Una <b>macchinina</b> giocattolo è una macchina vera rimpicciolita. Spesso sotto c'è scritto <b>1 : 43</b>: vuol dire che la macchina vera è <b>43 volte</b> più lunga.</p>
<p>Una carta fa la stessa cosa con un territorio: la scala ti dice <b>quante volte</b> è stata rimpicciolita la realtà. Una casa delle bambole, un plastico del trenino, un modellino di aereo: sono tutti oggetti "in scala"!</p>`
        },
        {
          label: "🏃 Le carte dell'orienteering (Svezia e Norvegia)",
          html: `<p>Nei Paesi nordici i bambini imparano le carte giocando all'<b>orienteering</b>: una corsa nel bosco con la carta e la bussola, cercando dei punti segnati. Le loro carte usano colori speciali, uguali in tutto il mondo:</p>
<ul>
<li>⬜ <b>bianco</b> = bosco dove si corre bene;</li>
<li>🟩 <b>verde</b> = bosco fitto, difficile da attraversare;</li>
<li>🟨 <b>giallo</b> = prato aperto;</li>
<li>🟦 <b>blu</b> = acqua;</li>
<li>🟫 <b>marrone</b> = forme del terreno (curve di livello);</li>
<li>⬛ <b>nero</b> = sentieri, rocce, case.</li>
</ul>
<p>Hai notato? Qui il bianco non è il ghiaccio! Per questo bisogna <b>sempre leggere la legenda</b>.</p>`
        },
        {
          label: "✏️ Disegna la tua camera",
          html: `<p>Il modo migliore per capire una pianta è <b>farne una</b>:</p>
<ol>
<li>Misura la tua camera con il metro (per esempio 4 m × 3 m).</li>
<li>Scegli la scala 1 : 100: 1 m diventa 1 cm. Disegna un rettangolo di <b>4 cm × 3 cm</b>.</li>
<li>Disegna dall'alto letto, armadio, scrivania, sempre rimpiccioliti.</li>
<li>Inventa un simbolo per ogni mobile e scrivilo nella <b>legenda</b>.</li>
<li>Disegna la freccia del <b>Nord</b>.</li>
</ol>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#f1f5f9"/>
<rect x="40" y="20" width="320" height="200" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
<rect x="50" y="30" width="90" height="140" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<rect x="55" y="35" width="80" height="30" fill="#ffffff" stroke="#1e3a8a"/>
<rect x="250" y="30" width="100" height="40" fill="#a16207"/>
<rect x="270" y="160" width="80" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<rect x="150" y="214" width="60" height="10" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="200" y="130" font-size="15" text-anchor="middle" fill="#475569">4 cm × 3 cm</text>
<text x="390" y="40" font-size="17" font-weight="bold" fill="#0f172a">LEGENDA</text>
<rect x="390" y="55" width="22" height="16" fill="#93c5fd" stroke="#1e3a8a"/>
<text x="420" y="69" font-size="15" fill="#0f172a">letto</text>
<rect x="390" y="85" width="22" height="16" fill="#a16207"/>
<text x="420" y="99" font-size="15" fill="#0f172a">armadio</text>
<rect x="390" y="115" width="22" height="16" fill="#fbbf24" stroke="#92400e"/>
<text x="420" y="129" font-size="15" fill="#0f172a">scrivania</text>
<rect x="390" y="145" width="22" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="420" y="155" font-size="15" fill="#0f172a">porta</text>
<text x="420" y="190" font-size="15" fill="#0f172a">scala 1 : 100</text>
<polygon points="545,30 535,60 555,60" fill="#dc2626"/>
<text x="545" y="80" font-size="18" font-weight="bold" text-anchor="middle" fill="#dc2626">N</text>
</svg>`
        },
        {
          label: "🌍 Globo 3D contro foglio",
          html: `<p>Prova a "sbucciare" un'arancia e a schiacciare la buccia sul tavolo: si strappa o si allarga! È lo stesso problema dei cartografi con la Terra. Gira il globo e osserva dove sono la Groenlandia e l'Africa: sul globo vedi le loro <b>vere</b> grandezze.</p>`,
          scene: "globe",
          options: { points: [ { lat: 72, lon: -40, label: "Groenlandia: 2,2 milioni di km²" }, { lat: 2, lon: 21, label: "Africa: 30 milioni di km²" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Mappa: come nasce una carta geografica",
      nodes: [
        { id: "realta", label: "Il territorio reale", x: 50, y: 6, color: "#16a34a", html: "Montagne, fiumi, città e strade, grandi e tridimensionali.", why: "Il territorio è troppo grande per vederlo tutto insieme: per questo da sempre gli uomini hanno cercato di disegnarlo, prima su argilla e pelle, poi su carta, oggi sullo schermo." },
        { id: "zenit", label: "Visione dall'alto", x: 18, y: 30, color: "#0ea5e9", html: "Si guarda il territorio dall'alto (visione zenitale).", why: "Solo guardando dall'alto ogni cosa mantiene la sua forma e le distanze si possono misurare. Un tempo si misurava a terra con strumenti ottici; dal 1800 si sono usate le fotografie dai palloni e dagli aerei, oggi le immagini dei satelliti." },
        { id: "scala", label: "Riduzione in scala", x: 50, y: 30, color: "#f97316", html: "Tutte le misure sono divise per lo stesso numero.", why: "Se si rimpicciolisce tutto nello stesso modo, le forme restano uguali (sono \"simili\", come dice la geometria). Così con un righello si può calcolare la distanza vera: misura sulla carta × il numero della scala." },
        { id: "simboli", label: "Simboli e legenda", x: 82, y: 30, color: "#a855f7", html: "Colori e segni al posto delle cose vere.", why: "Una casa vera su una carta d'Italia sarebbe più piccola di un puntino: allora si usano simboli. Molti colori sono convenzioni accettate in tutto il mondo (azzurro per l'acqua, verde per la pianura), ma ogni carta li spiega nella legenda." },
        { id: "nord", label: "Orientamento (Nord)", x: 82, y: 58, color: "#dc2626", html: "Il Nord è di solito in alto.", why: "È un'abitudine diffusa in Europa con le carte stampate dal 1500 in poi, legata anche all'uso della bussola, il cui ago indica il Nord. Nel Medioevo molte carte europee avevano invece l'Est in alto, verso Gerusalemme: da qui la parola \"orientarsi\" (cercare l'Oriente)." },
        { id: "proiezione", label: "Dalla sfera al foglio", x: 18, y: 58, color: "#0284c7", html: "La Terra è sferica, il foglio è piatto: ogni carta piatta deforma un po'.", why: "Già Eratostene, intorno al 240 a.C., calcolò la circonferenza della Terra. Tolomeo (II secolo d.C.) insegnò a disegnare la Terra con paralleli e meridiani. Nel 1569 Mercatore inventò una carta molto utile ai marinai, ma che ingrandisce le terre vicine ai poli." },
        { id: "fisica", label: "Carta fisica", x: 18, y: 88, color: "#65a30d", html: "Mostra gli elementi naturali.", why: "Serve per capire com'è fatto il territorio: dove si può coltivare (pianure), dove scorrono i fiumi, quanto sono alte le montagne. Per i rilievi si usano le fasce di colore o le curve di livello." },
        { id: "politica", label: "Carta politica", x: 50, y: 88, color: "#e11d48", html: "Mostra Stati, regioni, confini e città.", why: "I confini non si vedono sul terreno: sono decisi dagli uomini con leggi e trattati, e possono cambiare nel tempo. Per questo le carte politiche vanno aggiornate più spesso delle carte fisiche." },
        { id: "tematica", label: "Carta tematica", x: 82, y: 88, color: "#7c3aed", html: "Mostra un solo argomento (clima, strade, popolazione…).", why: "Mettendo un solo tema su una carta si vedono subito le differenze tra un luogo e l'altro. Una delle più famose fu disegnata dal medico John Snow nel 1854 a Londra: segnando i malati di colera capì che la malattia veniva da una fontana." }
      ],
      edges: [
        ["realta", "zenit", "si guarda"], ["realta", "scala", "si rimpicciolisce"], ["realta", "simboli", "si semplifica"],
        ["zenit", "proiezione", "se è tutta la Terra"], ["simboli", "nord", "con"], ["scala", "fisica", "contenuto"], ["scala", "politica", "contenuto"], ["scala", "tematica", "contenuto"],
        ["simboli", "tematica", "un solo tema"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz: i tipi di carte",
      questions: [
        { type: "mc", q: "Su quale carta trovi i confini tra gli Stati?", options: ["fisica", "politica", "topografica dei sentieri"], answer: 1, explain: "La carta politica mostra Stati, regioni e confini." },
        { type: "mc", q: "La carta che mostra tutta la Terra su un foglio è…", options: ["il planisfero", "la pianta", "la mappa"], answer: 0, explain: "Il planisfero (o, se è una palla, il mappamondo)." },
        { type: "tf", q: "Su una carta in scala 1 : 1.000.000 si vedono più particolari che su una carta 1 : 25.000.", answer: false, explain: "È il contrario: più grande è il secondo numero, più la realtà è rimpicciolita e meno particolari si vedono." }
      ]
    }
  ],
  glossary: [
    { t: "Cartografo", d: "Chi disegna le carte geografiche." },
    { t: "Visione zenitale", d: "Il modo di guardare un luogo dall'alto, perpendicolarmente." },
    { t: "Riduzione in scala", d: "Rimpicciolire la realtà dividendo tutte le misure per lo stesso numero." },
    { t: "Scala", d: "Il rapporto tra le misure sulla carta e quelle reali. 1 : 100 vuol dire 1 cm = 100 cm." },
    { t: "Legenda", d: "Il riquadro che spiega il significato di simboli e colori della carta." },
    { t: "Pianta", d: "Disegno dall'alto, in scala molto grande, di un ambiente piccolo (stanza, casa, scuola)." },
    { t: "Carta fisica", d: "Carta che mostra gli elementi naturali: monti, pianure, fiumi, laghi, mari." },
    { t: "Carta politica", d: "Carta che mostra Stati, regioni, confini e città." },
    { t: "Carta tematica", d: "Carta dedicata a un solo argomento, come clima, strade o popolazione." },
    { t: "Planisfero", d: "Carta che rappresenta tutta la superficie della Terra su un foglio." },
    { t: "Mappamondo", d: "Globo che rappresenta la Terra con la sua forma sferica, senza deformazioni." },
    { t: "Rosa dei venti", d: "Disegno che indica i punti cardinali: Nord, Sud, Est, Ovest." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le carte geografiche rappresentano il territorio visto…", options: ["di fronte", "dall'alto", "di lato"], answer: 1, explain: "Si usa la visione zenitale, dall'alto." },
      { type: "mc", q: "Che cosa significa la scala 1 : 100?", options: ["1 cm sulla carta = 100 cm nella realtà", "1 m sulla carta = 100 km nella realtà", "la carta ha 100 simboli"], answer: 0, explain: "Ogni centimetro disegnato corrisponde a 100 cm, cioè 1 metro." },
      { type: "num", q: "Pianta in scala 1 : 100. Il letto sul disegno è lungo 2 cm. Quanti metri è lungo il letto vero?", answer: 2, tol: 0, unit: "m", explain: "2 × 100 = 200 cm = 2 m." },
      { type: "num", q: "Scala 1 : 100. La palestra è lunga 20 m. Quanti centimetri sarà lunga sulla pianta?", answer: 20, tol: 0, unit: "cm", explain: "Con la scala 1 : 100 ogni metro diventa 1 cm: 20 m → 20 cm." },
      { type: "text", q: "Come si chiama il riquadro che spiega i simboli di una carta?", answer: ["legenda", "la legenda"], explain: "La legenda." },
      { type: "mc", q: "Su una carta fisica le montagne sono…", options: ["verdi", "marroni", "azzurre"], answer: 1, explain: "Marrone, sempre più scuro dove le montagne sono più alte." },
      { type: "mc", q: "Vuoi sapere dove passa il confine tra Italia e Svizzera. Usi una carta…", options: ["fisica", "politica", "del clima"], answer: 1, explain: "I confini sono sulla carta politica." },
      { type: "mc", q: "Una carta che mostra solo le piogge in Italia è una carta…", options: ["tematica", "topografica", "politica"], answer: 0, explain: "Tratta un solo tema: è tematica." },
      { type: "order", q: "Metti in ordine dalla carta che rappresenta il luogo più piccolo a quella che rappresenta il più grande.", items: ["pianta della classe", "mappa della città", "carta della regione", "carta d'Italia", "planisfero"], explain: "Più grande è il territorio, più bisogna rimpicciolire." },
      { type: "tf", q: "Il mappamondo mostra la forma della Terra meglio di un planisfero.", answer: true, explain: "La Terra è sferica come il globo; ogni carta piatta la deforma un po'." },
      { type: "tf", q: "Sui planisferi di Mercatore la Groenlandia appare più piccola di quanto sia in realtà.", answer: false, explain: "Appare molto più grande: le terre vicine ai poli vengono stirate." },
      { type: "mc", q: "Di solito, sulle carte, il Nord si trova…", options: ["in basso", "in alto", "a destra"], answer: 1, explain: "Per convenzione il Nord è in alto, indicato da una freccia o dalla rosa dei venti." }
    ]
  }
});

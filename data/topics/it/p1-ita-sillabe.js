TOPIC('it', {
  id: "p1-ita-sillabe",
  title: "Le sillabe",
  intro: "Le parole si possono tagliare in <b>pezzetti</b> 🧩 che diciamo con un solo colpo di voce: sono le <b>sillabe</b>. Per trovarle basta <b>battere le mani</b> 👏 mentre parliamo!",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Che cos'è una sillaba",
      html: `<p>Di' piano la parola <b>CASA</b>: CA… SA.</p>
<p>La bocca fa <b>due colpi di voce</b>. Ogni colpo è una <b>sillaba</b>.</p>
<p>Facciamo la prova delle mani 👏:</p>
<ul>
<li><b>SOLE</b> → SO 👏 LE 👏 → 2 sillabe</li>
<li><b>PATATA</b> → PA 👏 TA 👏 TA 👏 → 3 sillabe</li>
<li><b>RE</b> → RE 👏 → 1 sillaba</li>
</ul>
<p>Quanti battiti di mani, tante sillabe!</p>`
    },
    {
      type: "svg",
      title: "Battiamo le mani: PA-TA-TA",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<text x="300" y="45" font-size="30" font-weight="bold" fill="#14532d" text-anchor="middle">PATATA = 3 battiti</text>
<rect x="40" y="80" width="150" height="100" rx="20" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<rect x="225" y="80" width="150" height="100" rx="20" fill="#fde68a" stroke="#a16207" stroke-width="4"/>
<rect x="410" y="80" width="150" height="100" rx="20" fill="#93c5fd" stroke="#1e40af" stroke-width="4"/>
<text x="115" y="150" font-size="52" font-weight="bold" fill="#7f1d1d" text-anchor="middle">PA</text>
<text x="300" y="150" font-size="52" font-weight="bold" fill="#713f12" text-anchor="middle">TA</text>
<text x="485" y="150" font-size="52" font-weight="bold" fill="#1e3a8a" text-anchor="middle">TA</text>
<text x="115" y="235" font-size="44" text-anchor="middle">👏</text>
<text x="300" y="235" font-size="44" text-anchor="middle">👏</text>
<text x="485" y="235" font-size="44" text-anchor="middle">👏</text>
<text x="300" y="270" font-size="18" fill="#14532d" text-anchor="middle">1 sillaba = 1 colpo di voce = 1 battito</text>
</svg>`,
      caption: "Ogni vagone colorato è una sillaba."
    },
    {
      type: "text",
      title: "Il segreto: in ogni sillaba c'è una vocale",
      html: `<p>Guarda bene le sillabe: <b>PA</b>, <b>TA</b>, <b>SO</b>, <b>LE</b>…</p>
<p>In ogni sillaba c'è <b>sempre almeno una vocale</b> (A, E, I, O, U) 🎵. La vocale è il <b>cuore</b> della sillaba ❤️.</p>
<p>Una sillaba può essere:</p>
<ul>
<li>solo una vocale: <b>A</b>-PE 🐝, <b>U</b>-VA 🍇</li>
<li>consonante + vocale: <b>MA</b>, <b>PE</b>, <b>LU</b></li>
<li>più lettere: <b>TRE</b>-NO 🚂, <b>SCUO</b>-LA 🏫, <b>POR</b>-TA 🚪</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: battiamo le mani",
      questions: [
        { type: "num", q: "Quante sillabe ha LUNA 🌙?", answer: 2, explain: "LU-NA: 2 battiti di mani." },
        { type: "num", q: "Quante sillabe ha BANANA 🍌?", answer: 3, explain: "BA-NA-NA: 3 sillabe." },
        { type: "tf", q: "In ogni sillaba c'è almeno una vocale.", answer: true, explain: "La vocale è il cuore della sillaba." }
      ]
    },
    {
      type: "text",
      title: "Parole corte e parole lunghe",
      html: `<p>Le parole hanno un numero diverso di sillabe:</p>
<table><tr><th>Sillabe</th><th>Nome</th><th>Esempi</th></tr>
<tr><td>1 👏</td><td><b>monosillaba</b></td><td>RE 👑, TRE, SU, BLU</td></tr>
<tr><td>2 👏👏</td><td><b>bisillaba</b></td><td>CA-NE 🐶, MA-RE 🌊</td></tr>
<tr><td>3 👏👏👏</td><td><b>trisillaba</b></td><td>BA-NA-NA 🍌, GE-LA-TO 🍦</td></tr>
<tr><td>4 o più</td><td><b>polisillaba</b></td><td>FAR-FAL-LI-NA 🦋, PO-MO-DO-RO 🍅, COC-CO-DRIL-LO 🐊</td></tr></table>`
    },
    {
      type: "text",
      title: "Le doppie si dividono",
      html: `<p>Quando ci sono <b>due consonanti uguali</b> (le <b>doppie</b>), una va con la sillaba prima e una con la sillaba dopo:</p>
<ul>
<li>GAT-TO 🐱</li>
<li>PAL-LA ⚽</li>
<li>MAM-MA 👩</li>
<li>SAS-SO 🪨</li>
</ul>
<p>Invece i gruppi che fanno <b>un solo suono</b> non si dividono mai: <b>GN</b> (BA-<b>GN</b>O), <b>GL</b> (FI-<b>GL</b>IO), <b>CH</b> (OC-<b>CH</b>I 👀), <b>SC</b> (PE-<b>SC</b>E 🐟).</p>`
    },
    {
      type: "widget",
      title: "Gioco: quante sillabe?",
      widget: "classify",
      options: {
        groups: ["1 sillaba 👏", "2 sillabe 👏👏", "3 sillabe 👏👏👏", "4 sillabe 👏👏👏👏"],
        items: [["👑 RE", 0], ["3️⃣ TRE", 0], ["🐶 CANE", 1], ["🌊 MARE", 1], ["🐱 GATTO", 1], ["🍌 BANANA", 2], ["🎈 PALLONE", 2], ["🏫 SCUOLA", 1], ["🦋 FARFALLA", 2], ["🍅 POMODORO", 3], ["🐊 COCCODRILLO", 3], ["🍝 SPAGHETTI", 2]]
      },
      caption: "Batti le mani mentre dici la parola, poi scegli il gruppo giusto."
    },
    {
      type: "example",
      title: "Esempio: andare a capo",
      html: `<p>Sul quaderno la riga è finita ma la parola no! 📓</p>
<p>Si va <b>a capo</b> dividendo la parola <b>tra una sillaba e l'altra</b>, con un trattino:</p>
<p style="font-family:cursive;font-size:1.2em">Oggi ho mangiato una buonissima ma-<br>rmellata… ❌</p>
<p style="font-family:cursive;font-size:1.2em">Oggi ho mangiato una buonissima mar-<br>mellata… ✅</p>
<p>Non si può mai spezzare una sillaba a metà!</p>`
    },
    {
      type: "example",
      title: "Esempio: il gioco della catena",
      html: `<p>Si gioca in due. Il primo dice una parola, il secondo deve dirne una che <b>comincia con l'ultima sillaba</b>:</p>
<p>PA-<b>NE</b> 🍞 → <b>NE</b>-VE ❄️ → <b>VE</b>-LA ⛵ → <b>LA</b>-TO → <b>TO</b>-PO 🐭 → <b>PO</b>-STA 📮…</p>
<p>Chi non trova una parola perde!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Una delle parole più lunghe dell'italiano è <b>PRECIPITEVOLISSIMEVOLMENTE</b> (vuol dire "molto in fretta"). Ha ben <b>11 sillabe</b>:</p>
<p>PRE-CI-PI-TE-VO-LIS-SI-ME-VOL-MEN-TE 👏×11!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>Giappone</b> 🇯🇵 i bambini imparano a scrivere con le sillabe! Ogni segno dell'<b>hiragana</b> è una sillaba intera: か si legge <b>KA</b>, さ si legge <b>SA</b>, ね si legge <b>NE</b>. Per scrivere "neko" (gatto 🐱) bastano due segni: ね + こ.</p>
<p>E i poeti italiani contano le sillabe per fare i versi: Dante ha scritto la <i>Divina Commedia</i> con versi di <b>11 sillabe</b>, gli <b>endecasillabi</b>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La <b>sillaba</b> è un pezzetto di parola detto con <b>un solo colpo di voce</b>.</li>
<li>In ogni sillaba c'è <b>almeno una vocale</b>.</li>
<li>Le <b>doppie</b> si dividono: GAT-TO. GN, GL, CH, SC <b>non</b> si dividono.</li>
<li>Per andare a capo si divide la parola <b>tra due sillabe</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per trovare le sillabe",
      intro: "Le mani non bastano? Prova con il mento, con i salti, con il robot o con le carte!",
      tabs: [
        {
          label: "🙂 La mano sotto il mento",
          html: `<p>Metti la mano <b>sotto il mento</b> e di' la parola piano.</p>
<p>Ogni volta che il mento <b>scende</b> e tocca la mano, è una sillaba: il mento scende quando dici una <b>vocale</b>, perché la bocca si apre!</p>
<p>Prova: CA-RA-MEL-LA 🍬 → il mento scende <b>4 volte</b>.</p>`
        },
        {
          label: "🦘 Salti sulla linea",
          html: `<p>Disegna dei cerchi per terra (o immagina dei sassi in un fiume). Fai <b>un salto per ogni sillaba</b>!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#e0f2fe"/>
<path d="M0,170 Q150,150 300,175 T600,165 L600,240 L0,240 Z" fill="#38bdf8"/>
<ellipse cx="90" cy="180" rx="60" ry="22" fill="#a8a29e" stroke="#57534e" stroke-width="3"/>
<ellipse cx="230" cy="180" rx="60" ry="22" fill="#a8a29e" stroke="#57534e" stroke-width="3"/>
<ellipse cx="370" cy="180" rx="60" ry="22" fill="#a8a29e" stroke="#57534e" stroke-width="3"/>
<ellipse cx="510" cy="180" rx="60" ry="22" fill="#a8a29e" stroke="#57534e" stroke-width="3"/>
<text x="90" y="190" font-size="28" font-weight="bold" fill="#1c1917" text-anchor="middle">FAR</text>
<text x="230" y="190" font-size="28" font-weight="bold" fill="#1c1917" text-anchor="middle">FAL</text>
<text x="370" y="190" font-size="28" font-weight="bold" fill="#1c1917" text-anchor="middle">LI</text>
<text x="510" y="190" font-size="28" font-weight="bold" fill="#1c1917" text-anchor="middle">NA</text>
<g fill="none" stroke="#f97316" stroke-width="4" stroke-dasharray="8 6">
<path d="M90,150 Q160,60 230,150"/><path d="M230,150 Q300,60 370,150"/><path d="M370,150 Q440,60 510,150"/>
</g>
<text x="300" y="40" font-size="26" font-weight="bold" fill="#0c4a6e" text-anchor="middle">FARFALLINA = 4 sassi 🦋</text>
</svg>`
        },
        {
          label: "🤖 Parla come un robot",
          html: `<p>I robot parlano a scatti, staccando ogni pezzetto: "IO-SO-NO-UN-RO-BOT" 🤖.</p>
<p>Prova a parlare come un robot: ogni <b>scatto</b> è una sillaba!</p>
<ul>
<li>"BUON-GIOR-NO" → 3 scatti</li>
<li>"CIA-O" → 2 scatti (la I e la O si staccano!)</li>
<li>"GE-LA-TO" → 3 scatti 🍦</li>
</ul>`
        },
        {
          label: "🧩 Unisci le sillabe",
          html: `<p>Ogni parola è stata tagliata in due. Abbina il primo pezzo al secondo pezzo giusto!</p>`,
          widget: "match",
          options: { pairs: [["PA-", "-NE 🍞"], ["LU-", "-NA 🌙"], ["GAT-", "-TO 🐱"], ["FIO-", "-RE 🌸"], ["MO-", "-TO 🏍️"]] }
        },
        {
          label: "🇯🇵 Come in Giappone",
          html: `<p>In giapponese un segno = una sillaba. Prova a pensare così: ogni <b>cartellino</b> è un segno.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "か", back: "KA" },
            { front: "さ", back: "SA" },
            { front: "ね", back: "NE" },
            { front: "こ", back: "KO" },
            { front: "ね + こ", back: "NEKO = gatto 🐱 (2 sillabe)" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle sillabe: tocca un nodo e scopri il perché",
      nodes: [
        { id: "parola", label: "Parola", x: 50, y: 8, color: "#16a34a", html: "Gruppo di suoni che ha un significato: CASA, SOLE, GATTO.", why: "Quando parliamo non diciamo le lettere una per una: le uniamo in pezzetti che la bocca riesce a dire in un colpo." },
        { id: "sillaba", label: "Sillaba", x: 50, y: 35, color: "#f97316", html: "Pezzetto di parola detto con un solo colpo di voce.", why: "Il nome viene dal greco <i>syllabé</i>, che vuol dire 'mettere insieme': una sillaba mette insieme più suoni." },
        { id: "vocale", label: "Vocale = cuore", x: 15, y: 58, color: "#dc2626", html: "In ogni sillaba c'è almeno una vocale.", why: "Per fare un colpo di voce la bocca deve aprirsi e lasciar uscire l'aria: è proprio quello che succede con le vocali." },
        { id: "battito", label: "Battito di mani", x: 85, y: 35, color: "#a855f7", html: "Un battito per ogni sillaba: il trucco per contarle.", why: "Il nostro modo di parlare ha un ritmo, come la musica: ogni sillaba è come una nota." },
        { id: "tipi", label: "Mono, bi, tri, polisillabe", x: 85, y: 62, color: "#2563eb", html: "Parole di 1, 2, 3 o tante sillabe.", why: "Sono parole che vengono dal greco: <i>mono</i> = uno, <i>bi</i> = due, <i>tri</i> = tre, <i>poli</i> = tanti." },
        { id: "doppie", label: "Le doppie si dividono", x: 50, y: 66, color: "#0e7490", html: "GAT-TO, PAL-LA: una consonante per parte.", why: "Quando diciamo una doppia, la bocca si ferma un attimo sulla consonante: la prima chiude una sillaba, la seconda apre la successiva." },
        { id: "capo", label: "Andare a capo", x: 30, y: 90, color: "#64748b", html: "Si spezza la parola tra due sillabe, con il trattino.", why: "Così chi legge riconosce subito i pezzi della parola e non si confonde." },
        { id: "poesia", label: "Poesia e versi", x: 75, y: 90, color: "#ca8a04", html: "I poeti contano le sillabe dei versi.", why: "Contare le sillabe dà ritmo alla poesia, come una canzone. Dante, circa 700 anni fa, usò versi di 11 sillabe (endecasillabi) per la Divina Commedia." }
      ],
      edges: [
        ["parola", "sillaba", "si divide in"],
        ["sillaba", "vocale", "ha sempre una"],
        ["sillaba", "battito", "si conta con"],
        ["battito", "tipi", "conto e classifico"],
        ["sillaba", "doppie", "regola"],
        ["doppie", "capo", "serve per"],
        ["sillaba", "poesia", "dà ritmo alla"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: dividere in sillabe",
      questions: [
        { type: "mc", q: "Come si divide GATTO?", options: ["GA-TTO", "GAT-TO", "G-ATTO"], answer: 1, explain: "Le doppie si dividono: GAT-TO." },
        { type: "mc", q: "Quale parola è una monosillaba?", options: ["RE", "MARE", "PALLA"], answer: 0, explain: "RE ha una sola sillaba." },
        { type: "num", q: "Quante sillabe ha POMODORO 🍅?", answer: 4, explain: "PO-MO-DO-RO: 4 sillabe." }
      ]
    }
  ],
  glossary: [
    { t: "Sillaba", d: "Pezzetto di parola che si pronuncia con un solo colpo di voce." },
    { t: "Monosillaba", d: "Parola di una sola sillaba: RE, TRE, BLU." },
    { t: "Bisillaba", d: "Parola di due sillabe: CA-NE." },
    { t: "Trisillaba", d: "Parola di tre sillabe: BA-NA-NA." },
    { t: "Polisillaba", d: "Parola di quattro o più sillabe: FAR-FAL-LI-NA." },
    { t: "Doppia", d: "Due consonanti uguali vicine: TT, LL, MM. Nella divisione in sillabe si separano." },
    { t: "Andare a capo", d: "Continuare una parola nella riga sotto, spezzandola tra due sillabe con un trattino." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante sillabe ha SOLE ☀️?", answer: 2, explain: "SO-LE: 2 sillabe." },
      { type: "num", q: "Quante sillabe ha FARFALLA 🦋?", answer: 3, explain: "FAR-FAL-LA: 3 sillabe." },
      { type: "mc", q: "Come si divide PALLA?", options: ["PA-LLA", "PAL-LA", "PALL-A"], answer: 1, explain: "La doppia LL si divide: PAL-LA." },
      { type: "mc", q: "Come si divide BAGNO?", options: ["BAG-NO", "BA-GNO", "B-AGNO"], answer: 1, explain: "GN fa un solo suono e non si divide: BA-GNO." },
      { type: "tf", q: "In ogni sillaba c'è almeno una vocale.", answer: true, explain: "La vocale è il cuore della sillaba." },
      { type: "mc", q: "Quale parola ha 3 sillabe?", options: ["CANE", "TAVOLO", "RE"], answer: 1, explain: "TA-VO-LO: 3 sillabe." },
      { type: "order", q: "Metti in ordine le sillabe per formare CARAMELLA 🍬.", items: ["CA", "RA", "MEL", "LA"], explain: "CA-RA-MEL-LA." },
      { type: "order", q: "Ordina le parole dalla più corta alla più lunga (per numero di sillabe).", items: ["TRE", "MELA", "BANANA", "POMODORO"], explain: "1, 2, 3 e 4 sillabe." },
      { type: "text", q: "Completa con la sillaba che manca: LU _ 🌙", answer: ["na"], explain: "LU-NA." },
      { type: "tf", q: "Per andare a capo posso spezzare una parola dove voglio.", answer: false, explain: "No: si va a capo solo tra una sillaba e l'altra." },
      { type: "mc", q: "Come si chiama una parola di una sola sillaba?", options: ["Monosillaba", "Bisillaba", "Polisillaba"], answer: 0, explain: "Mono = uno." },
      { type: "num", q: "Quante sillabe ha COCCODRILLO 🐊?", answer: 4, explain: "COC-CO-DRIL-LO: 4 sillabe." }
    ]
  }
});

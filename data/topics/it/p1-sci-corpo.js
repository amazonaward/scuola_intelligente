TOPIC('it', {
  id: "p1-sci-corpo",
  title: "Il mio corpo",
  intro: "Il nostro corpo è una macchina meravigliosa 🤸: corre, salta, abbraccia, pensa e cresce! Impariamo i nomi delle sue <b>parti</b> e scopriamo come <b>prendercene cura</b> ogni giorno.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le parti del corpo",
      html: `<p>Il corpo ha tre grandi parti:</p>
<ul>
<li>🙂 la <b>testa</b>, attaccata al corpo con il <b>collo</b>;</li>
<li>👕 il <b>tronco</b>: petto, pancia, schiena e spalle;</li>
<li>💪🦵 gli <b>arti</b>: due <b>braccia</b> (gli arti superiori) e due <b>gambe</b> (gli arti inferiori).</li>
</ul>
<p>Le braccia finiscono con le <b>mani</b> ✋, le gambe con i <b>piedi</b> 🦶. Ogni mano ha <b>5 dita</b> e ogni piede ha <b>5 dita</b>.</p>
<p>Le braccia e le gambe si piegano grazie alle <b>articolazioni</b>: il <b>gomito</b>, il <b>polso</b>, il <b>ginocchio</b>, la <b>caviglia</b>.</p>`
    },
    {
      type: "widget",
      title: "Trova le parti del corpo",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#ecfeff"/>
<circle cx="300" cy="55" r="38" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<path d="M265 45 Q300 0 335 45" fill="#7c2d12"/>
<circle cx="287" cy="55" r="4" fill="#1e3a8a"/><circle cx="313" cy="55" r="4" fill="#1e3a8a"/>
<path d="M288 72 Q300 80 312 72" stroke="#9a3412" stroke-width="3" fill="none"/>
<rect x="290" y="92" width="20" height="16" fill="#fcd9b6"/>
<rect x="250" y="106" width="100" height="120" rx="20" fill="#38bdf8" stroke="#0369a1" stroke-width="3"/>
<rect x="205" y="112" width="40" height="110" rx="18" fill="#38bdf8" stroke="#0369a1" stroke-width="3" transform="rotate(12 225 112)"/>
<rect x="355" y="112" width="40" height="110" rx="18" fill="#38bdf8" stroke="#0369a1" stroke-width="3" transform="rotate(-12 375 112)"/>
<circle cx="200" cy="230" r="17" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<circle cx="400" cy="230" r="17" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<rect x="258" y="222" width="38" height="90" rx="14" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="3"/>
<rect x="304" y="222" width="38" height="90" rx="14" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="270" cy="318" rx="30" ry="12" fill="#ef4444"/>
<ellipse cx="330" cy="318" rx="30" ry="12" fill="#ef4444"/>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Testa" },
          { x: 300, y: 100, label: "Collo" },
          { x: 300, y: 165, label: "Tronco" },
          { x: 222, y: 165, label: "Braccio" },
          { x: 400, y: 230, label: "Mano" },
          { x: 277, y: 265, label: "Gamba" },
          { x: 330, y: 318, label: "Piede" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome giusto."
    },
    {
      type: "svg",
      title: "La faccia",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<ellipse cx="300" cy="155" rx="110" ry="125" fill="#fcd9b6" stroke="#9a3412" stroke-width="4"/>
<path d="M190 120 Q300 -10 410 120 Q380 60 300 55 Q220 60 190 120" fill="#7c2d12"/>
<path d="M240 110 Q262 98 284 110" stroke="#7c2d12" stroke-width="5" fill="none"/>
<path d="M316 110 Q338 98 360 110" stroke="#7c2d12" stroke-width="5" fill="none"/>
<ellipse cx="262" cy="135" rx="18" ry="12" fill="#ffffff" stroke="#374151" stroke-width="2"/><circle cx="262" cy="135" r="7" fill="#15803d"/>
<ellipse cx="338" cy="135" rx="18" ry="12" fill="#ffffff" stroke="#374151" stroke-width="2"/><circle cx="338" cy="135" r="7" fill="#15803d"/>
<path d="M300 145 L288 190 L310 192" stroke="#9a3412" stroke-width="4" fill="none"/>
<path d="M255 220 Q300 255 345 220 Q300 232 255 220" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
<ellipse cx="190" cy="160" rx="14" ry="26" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<ellipse cx="410" cy="160" rx="14" ry="26" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<g font-size="18" font-weight="bold">
<line x1="270" y1="100" x2="120" y2="55" stroke="#7c2d12" stroke-width="2"/><text x="20" y="55" fill="#7c2d12">sopracciglia</text>
<line x1="350" y1="135" x2="470" y2="90" stroke="#15803d" stroke-width="2"/><text x="475" y="95" fill="#15803d">occhi</text>
<line x1="300" y1="175" x2="470" y2="170" stroke="#9a3412" stroke-width="2"/><text x="475" y="175" fill="#9a3412">naso</text>
<line x1="330" y1="235" x2="470" y2="250" stroke="#b91c1c" stroke-width="2"/><text x="475" y="255" fill="#b91c1c">bocca</text>
<line x1="178" y1="160" x2="110" y2="160" stroke="#9a3412" stroke-width="2"/><text x="20" y="165" fill="#9a3412">orecchie</text>
<line x1="230" y1="250" x2="120" y2="270" stroke="#9a3412" stroke-width="2"/><text x="20" y="275" fill="#9a3412">mento</text>
</g>
</svg>`,
      caption: "Sulla faccia ci sono quasi tutti gli organi di senso: occhi, naso, bocca (con la lingua) e orecchie."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parti del corpo",
      questions: [
        { type: "num", q: "Quante dita ci sono in una mano?", answer: 5, explain: "Ogni mano ha 5 dita: pollice, indice, medio, anulare e mignolo." },
        { type: "mc", q: "Che cosa unisce la testa al tronco?", options: ["Il gomito", "Il collo", "Il ginocchio"], answer: 1, explain: "Il collo collega la testa al tronco." },
        { type: "mc", q: "Quale articolazione si trova a metà della gamba?", options: ["Il ginocchio", "Il polso", "Il gomito"], answer: 0, explain: "Il ginocchio piega la gamba; il gomito piega il braccio." }
      ]
    },
    {
      type: "text",
      title: "Dentro il corpo",
      html: `<p>Sotto la <b>pelle</b> ci sono tante parti che lavorano senza fermarsi mai:</p>
<ul>
<li>🦴 le <b>ossa</b>: tutte insieme formano lo <b>scheletro</b>, che ci tiene dritti e protegge le parti delicate;</li>
<li>💪 i <b>muscoli</b>: tirano le ossa e ci fanno muovere;</li>
<li>❤️ il <b>cuore</b>: una pompa che spinge il <b>sangue</b> in tutto il corpo;</li>
<li>🫁 i <b>polmoni</b>: respirano l'aria;</li>
<li>🍝 lo <b>stomaco</b> e la pancia: digeriscono il cibo;</li>
<li>🧠 il <b>cervello</b>: è il capo, pensa e comanda tutto il resto.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Dentro un braccio in 3D 💪",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#fcd9b6", label: "Pelle (ci protegge e sente il tatto)" },
        { r: 0.92, color: "#fde68a", label: "Grasso (tiene caldo)" },
        { r: 0.84, color: "#ef4444", label: "Muscoli (ci fanno muovere)" },
        { r: 0.38, color: "#f8fafc", label: "Osso (ci sostiene)" },
        { r: 0.18, color: "#f472b6", label: "Midollo (dentro l'osso fa il sangue)" }
      ] },
      caption: "Se potessimo tagliare un braccio come una torta vedremmo degli strati: la pelle fuori, poi i muscoli, e al centro l'osso. Gira il modello!"
    },
    {
      type: "example",
      title: "Esempio: senti il tuo cuore ❤️",
      html: `<ol>
<li>Appoggia la mano sul petto, un po' a <b>sinistra</b>. Stai fermo e zitto: senti «tum-tum»?</li>
<li>Ora fai <b>20 saltelli</b> sul posto 🦘.</li>
<li>Rimetti la mano sul petto: il cuore batte <b>più forte e più veloce</b>!</li>
</ol>
<p>Quando ti muovi, i muscoli hanno bisogno di più ossigeno, e il cuore lavora di più per portarglielo con il sangue.</p>`
    },
    {
      type: "text",
      title: "Come mi prendo cura del mio corpo",
      html: `<p>Il corpo è nostro e dobbiamo trattarlo bene! Ecco le regole d'oro:</p>
<ul>
<li>🧼 <b>Lavo le mani</b> con acqua e sapone prima di mangiare, dopo il bagno e quando torno a casa. Strofino per almeno <b>20 secondi</b> (il tempo di cantare «Tanti auguri» due volte!).</li>
<li>🪥 <b>Lavo i denti</b> almeno <b>2 volte al giorno</b>, per <b>2 minuti</b>, soprattutto prima di dormire.</li>
<li>🥦 <b>Mangio vario</b>: frutta e verdura ogni giorno, e bevo tanta <b>acqua</b>.</li>
<li>⚽ <b>Mi muovo</b>: i bambini dovrebbero giocare e muoversi almeno <b>un'ora al giorno</b>.</li>
<li>😴 <b>Dormo</b>: alla mia età servono circa <b>10 ore</b> di sonno per notte.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Abitudine buona o da cambiare?",
      widget: "classify",
      options: {
        groups: ["👍 Fa bene al corpo", "👎 Da cambiare"],
        items: [
          ["🧼 lavare le mani prima di pranzo", 0],
          ["🍎 mangiare la frutta a merenda", 0],
          ["🚲 giocare all'aperto", 0],
          ["🪥 lavare i denti prima di dormire", 0],
          ["💧 bere acqua quando ho sete", 0],
          ["📺 stare al tablet fino a tardi", 1],
          ["🍬 mangiare solo caramelle", 1],
          ["🛏️ andare a letto senza lavare i denti", 1]
        ]
      },
      caption: "Metti ogni abitudine nel gruppo giusto."
    },
    {
      type: "example",
      title: "Esempio: la giornata di un corpo in forma 🌞",
      html: `<ul>
<li>7:30 — Sveglia dopo una bella dormita, colazione con latte e frutta, poi denti 🪥.</li>
<li>10:30 — A scuola: merenda con un frutto e un sorso d'acqua 💧.</li>
<li>12:30 — Mani lavate 🧼 e pranzo con verdura.</li>
<li>16:30 — Un'ora di gioco al parco ⚽.</li>
<li>20:30 — Bagnetto, denti e a letto presto 😴.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🦴",
      html: `<p>Un adulto ha <b>206 ossa</b>, ma un neonato ne ha circa <b>300</b>! Crescendo, alcune ossa si <b>saldano</b> insieme. L'osso più piccolo di tutti si chiama <b>staffa</b>: è dentro l'orecchio ed è più piccolo di un chicco di riso.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 👆",
      html: `<p>Guarda la punta delle tue dita con una lente: ci sono tante righine curve. Sono le <b>impronte digitali</b>, e nessuno al mondo ha le tue stesse impronte, nemmeno un gemello! Per questo la polizia le usa per riconoscere le persone, e alcuni telefoni si sbloccano con il dito.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il corpo ha <b>testa</b>, <b>tronco</b> e <b>arti</b> (braccia e gambe).</li>
<li>Dentro ci sono <b>ossa</b>, <b>muscoli</b>, <b>cuore</b>, <b>polmoni</b>, <b>stomaco</b> e <b>cervello</b>.</li>
<li>Per stare bene: mani pulite, denti lavati, cibo vario, acqua, movimento e sonno.</li>
<li>Il mio corpo è <b>mio</b>: se qualcosa mi fa male o mi mette a disagio, lo dico a un adulto di fiducia.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per conoscere il corpo 🌈",
      intro: "<p>Scegli un modo diverso per scoprire il tuo corpo.</p>",
      tabs: [
        {
          label: "🎵 Testa, spalle, ginocchia e piè",
          html: `<p>Canta e tocca! «<b>Testa</b>, <b>spalle</b>, <b>ginocchia</b> e <b>piè</b>, ginocchia e piè… <b>occhi</b>, <b>orecchie</b>, <b>bocca</b> e <b>naso</b>…»</p>
<p>Questa canzone si canta in tantissime lingue (in inglese: «Head, shoulders, knees and toes»). Tocca ogni parte mentre la nomini: il corpo impara insieme alla testa!</p>`
        },
        {
          label: "📏 Leonardo e le misure",
          html: `<p>Più di 500 anni fa <b>Leonardo da Vinci</b> disegnò l'<b>Uomo vitruviano</b>, studiando le misure del corpo. Scoprì, per esempio, che <b>a braccia aperte</b> una persona è larga più o meno <b>quanto è alta</b>.</p>
<p>Prova con un amico e uno spago: misura la tua altezza e la tua «apertura di braccia». Sono quasi uguali?</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fef3c7"/>
<rect x="190" y="20" width="220" height="220" fill="none" stroke="#92400e" stroke-width="3"/>
<circle cx="300" cy="55" r="22" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>
<line x1="300" y1="77" x2="300" y2="170" stroke="#92400e" stroke-width="8"/>
<line x1="192" y1="100" x2="408" y2="100" stroke="#92400e" stroke-width="8"/>
<line x1="300" y1="170" x2="265" y2="238" stroke="#92400e" stroke-width="8"/>
<line x1="300" y1="170" x2="335" y2="238" stroke="#92400e" stroke-width="8"/>
<text x="500" y="110" font-size="17" text-anchor="middle" fill="#78350f">braccia aperte</text>
<text x="500" y="135" font-size="17" text-anchor="middle" fill="#78350f">= altezza</text>
<text x="95" y="130" font-size="17" text-anchor="middle" fill="#78350f">il corpo sta</text>
<text x="95" y="155" font-size="17" text-anchor="middle" fill="#78350f">in un quadrato!</text>
</svg>`
        },
        {
          label: "🇯🇵 La ginnastica alla radio",
          html: `<p>In <b>Giappone</b>, dal 1928, ogni mattina la radio trasmette il <b>Rajio Taisō</b>: 3 minuti di ginnastica con la musica. La fanno milioni di persone: bambini a scuola, operai, nonni nei parchi!</p>
<p>Prova anche tu ogni mattina: allunga le braccia in alto, piegati, ruota le spalle, saltella. Muoversi un po' sveglia il corpo e il cervello.</p>`
        },
        {
          label: "🏰 Il corpo è una città",
          html: `<p>Immagina il corpo come una <b>città</b>:</p>
<ul>
<li>🧠 il <b>cervello</b> è il <b>municipio</b>: decide tutto;</li>
<li>🦴 lo <b>scheletro</b> sono le <b>travi</b> dei palazzi;</li>
<li>❤️ il <b>cuore</b> è la <b>centrale dell'acqua</b> che spinge il sangue nei tubi (le vene e le arterie);</li>
<li>🫁 i <b>polmoni</b> sono le <b>finestre</b> che fanno entrare l'aria;</li>
<li>🍝 lo <b>stomaco</b> è la <b>cucina</b>;</li>
<li>🧑‍⚕️ la <b>pelle</b> sono le <b>mura</b> che proteggono la città.</li>
</ul>`,
          widget: "match",
          options: { pairs: [["🧠 Cervello", "municipio: comanda"], ["❤️ Cuore", "pompa dell'acqua"], ["🦴 Scheletro", "travi dei palazzi"], ["🧑 Pelle", "mura della città"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa del corpo 🗺️",
      nodes: [
        { id: "corpo", label: "Il mio corpo", x: 50, y: 6, color: "#f59e0b", html: "<p>Testa, tronco e arti: tutto quello che siamo e che si muove.</p>", why: "<p>Il corpo è fatto di miliardi di piccolissime <b>cellule</b>, scoperte dopo l'invenzione del microscopio, nel 1600.</p>" },
        { id: "esterno", label: "Fuori: le parti", x: 20, y: 28, color: "#3b82f6", html: "<p>Testa, collo, tronco, braccia, mani, gambe, piedi.</p>", why: "<p>Abbiamo due braccia e due gambe, a destra e a sinistra: il corpo è quasi <b>simmetrico</b>, come una farfalla.</p>" },
        { id: "pelle", label: "La pelle", x: 50, y: 28, color: "#f97316", html: "<p>Copre e protegge tutto il corpo.</p>", why: "<p>È l'organo più grande del corpo! Ci difende dai microbi e ci fa sentire caldo, freddo e il tocco.</p>" },
        { id: "ossa", label: "Ossa e muscoli", x: 15, y: 55, color: "#64748b", html: "<p>Lo scheletro sostiene, i muscoli tirano e muovono.</p>", why: "<p>Il medico <b>Andrea Vesalio</b>, che insegnava a Padova, nel 1543 pubblicò un grande libro con disegni precisissimi dello scheletro e dei muscoli.</p>" },
        { id: "cuore", label: "Cuore e sangue", x: 40, y: 55, color: "#ef4444", html: "<p>Il cuore pompa il sangue in tutto il corpo.</p>", why: "<p>Il medico inglese <b>William Harvey</b>, che aveva studiato a Padova, nel 1628 dimostrò che il sangue <b>gira</b> sempre: si chiama <b>circolazione</b>.</p>" },
        { id: "respiro", label: "Polmoni e respiro", x: 63, y: 55, color: "#0ea5e9", html: "<p>Respirando prendiamo l'ossigeno dall'aria.</p>", why: "<p>L'ossigeno serve alle cellule per «bruciare» il cibo e avere energia: per questo quando corriamo respiriamo più in fretta.</p>" },
        { id: "cervello", label: "Il cervello", x: 85, y: 55, color: "#a855f7", html: "<p>Il capo: pensa, ricorda e comanda i movimenti.</p>", why: "<p>Riceve i messaggi dei sensi attraverso i <b>nervi</b> e manda gli ordini ai muscoli.</p>" },
        { id: "cura", label: "Prendersi cura", x: 50, y: 88, color: "#22c55e", html: "<p>Igiene, cibo vario, acqua, movimento, sonno.</p>", why: "<p>Lavarsi le mani toglie i <b>microbi</b>: il medico ungherese <b>Ignác Semmelweis</b> nel 1847 scoprì che, se i medici si lavavano le mani, molte meno mamme si ammalavano.</p>" }
      ],
      edges: [
        ["corpo", "esterno", "fuori"],
        ["corpo", "pelle", "coperto dalla"],
        ["pelle", "ossa", "sotto ci sono"],
        ["ossa", "cuore", ""],
        ["cuore", "respiro", "porta l'ossigeno"],
        ["cervello", "ossa", "comanda i muscoli"],
        ["cura", "corpo", "lo mantiene sano"],
        ["cura", "pelle", "mani pulite"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: dentro il corpo e la salute",
      questions: [
        { type: "mc", q: "Quale organo pompa il sangue?", options: ["Lo stomaco", "Il cuore", "I polmoni"], answer: 1, explain: "Il cuore è la pompa del sangue." },
        { type: "num", q: "Quante volte al giorno, almeno, devi lavare i denti?", answer: 2, explain: "Almeno 2 volte al giorno, per 2 minuti." },
        { type: "tf", q: "Le ossa ci tengono dritti e proteggono le parti delicate.", answer: true, explain: "Sì: per esempio il cranio protegge il cervello e le costole proteggono cuore e polmoni." }
      ]
    }
  ],
  glossary: [
    { t: "Tronco", d: "La parte centrale del corpo: petto, pancia, schiena." },
    { t: "Arti", d: "Le braccia (arti superiori) e le gambe (arti inferiori)." },
    { t: "Articolazione", d: "Il punto dove due ossa si uniscono e il corpo si piega: gomito, ginocchio, polso." },
    { t: "Scheletro", d: "L'insieme di tutte le ossa." },
    { t: "Muscolo", d: "Parte del corpo che si accorcia e tira le ossa per farci muovere." },
    { t: "Cuore", d: "La pompa che spinge il sangue in tutto il corpo." },
    { t: "Igiene", d: "Le regole per tenere pulito e sano il corpo." },
    { t: "Microbi", d: "Esseri viventi piccolissimi, alcuni dei quali possono farci ammalare." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Le tre grandi parti del corpo sono…", options: ["testa, tronco e arti", "mani, piedi e naso", "occhi, bocca e orecchie"], answer: 0, explain: "Testa, tronco e arti (braccia e gambe)." },
      { type: "num", q: "Quante gambe abbiamo?", answer: 2, explain: "Abbiamo 2 gambe e 2 braccia." },
      { type: "mc", q: "Il gomito si trova…", options: ["nella gamba", "nel braccio", "nella testa"], answer: 1, explain: "Il gomito piega il braccio." },
      { type: "text", q: "Come si chiama l'insieme di tutte le ossa?", answer: ["scheletro", "lo scheletro"], explain: "È lo scheletro." },
      { type: "mc", q: "Con quale organo respiriamo?", options: ["I polmoni", "Il cuore", "Lo stomaco"], answer: 0, explain: "I polmoni prendono l'aria." },
      { type: "tf", q: "Dopo una corsa il cuore batte più piano.", answer: false, explain: "Batte più veloce, per portare più ossigeno ai muscoli." },
      { type: "tf", q: "Bisogna lavare le mani prima di mangiare.", answer: true, explain: "Così togliamo i microbi prima di toccare il cibo." },
      { type: "mc", q: "Quante ore deve dormire, più o meno, un bambino di 6 anni?", options: ["4 ore", "10 ore", "18 ore"], answer: 1, explain: "Alla tua età servono circa 10 ore di sonno (tra 9 e 12)." },
      { type: "order", q: "Metti in ordine dall'alto in basso.", items: ["Testa", "Collo", "Tronco", "Gambe", "Piedi"], explain: "Testa, collo, tronco, gambe, piedi." },
      { type: "mc", q: "Chi comanda tutti i movimenti del corpo?", options: ["Il cervello", "La pelle", "Il naso"], answer: 0, explain: "Il cervello manda gli ordini ai muscoli attraverso i nervi." },
      { type: "num", q: "Quante ossa ha un adulto?", answer: 206, explain: "Un adulto ha 206 ossa; un neonato circa 300." }
    ]
  }
});

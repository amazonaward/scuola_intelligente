TOPIC('it', {
  id: "p1-ita-alfabeto",
  title: "L'alfabeto",
  intro: "L'<b>alfabeto</b> è la squadra di tutte le lettere 🔤, messe in fila in un ordine preciso. In italiano le lettere sono <b>21</b>. Impariamo a dirle in ordine e a scriverle in <b>stampato maiuscolo</b>, <b>stampato minuscolo</b> e <b>corsivo</b> ✍️.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Le 21 lettere in fila",
      html: `<p>L'alfabeto italiano ha <b>21 lettere</b>. Eccole in ordine:</p>
<p style="font-size:1.4em;letter-spacing:4px"><b>A B C D E F G H I L M N O P Q R S T U V Z</b></p>
<p>L'ordine è sempre lo stesso: la <b>A</b> è la prima, la <b>Z</b> è l'ultima.</p>
<p>Ogni lettera ha un <b>nome</b>: A (a), B (bi), C (ci), D (di), E (e), F (effe), G (gi), H (acca), I (i), L (elle), M (emme), N (enne), O (o), P (pi), Q (cu), R (erre), S (esse), T (ti), U (u), V (vu), Z (zeta).</p>`
    },
    {
      type: "svg",
      title: "Il trenino dell'alfabeto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<g font-size="26" font-weight="bold" text-anchor="middle" stroke="#0f172a" stroke-width="2">
<rect x="10" y="30" width="48" height="48" rx="8" fill="#fca5a5"/><rect x="64" y="30" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="118" y="30" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="172" y="30" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="226" y="30" width="48" height="48" rx="8" fill="#fca5a5"/><rect x="280" y="30" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="334" y="30" width="48" height="48" rx="8" fill="#93c5fd"/>
<rect x="10" y="120" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="64" y="120" width="48" height="48" rx="8" fill="#fca5a5"/><rect x="118" y="120" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="172" y="120" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="226" y="120" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="280" y="120" width="48" height="48" rx="8" fill="#fca5a5"/><rect x="334" y="120" width="48" height="48" rx="8" fill="#93c5fd"/>
<rect x="10" y="210" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="64" y="210" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="118" y="210" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="172" y="210" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="226" y="210" width="48" height="48" rx="8" fill="#fca5a5"/><rect x="280" y="210" width="48" height="48" rx="8" fill="#93c5fd"/><rect x="334" y="210" width="48" height="48" rx="8" fill="#93c5fd"/>
</g>
<g font-size="30" font-weight="bold" text-anchor="middle" fill="#0f172a">
<text x="34" y="65">A</text><text x="88" y="65">B</text><text x="142" y="65">C</text><text x="196" y="65">D</text><text x="250" y="65">E</text><text x="304" y="65">F</text><text x="358" y="65">G</text>
<text x="34" y="155">H</text><text x="88" y="155">I</text><text x="142" y="155">L</text><text x="196" y="155">M</text><text x="250" y="155">N</text><text x="304" y="155">O</text><text x="358" y="155">P</text>
<text x="34" y="245">Q</text><text x="88" y="245">R</text><text x="142" y="245">S</text><text x="196" y="245">T</text><text x="250" y="245">U</text><text x="304" y="245">V</text><text x="358" y="245">Z</text>
</g>
<rect x="410" y="60" width="170" height="60" rx="10" fill="#fca5a5" stroke="#0f172a" stroke-width="2"/>
<text x="495" y="98" font-size="20" text-anchor="middle" fill="#0f172a">rosso = vocale</text>
<rect x="410" y="150" width="170" height="60" rx="10" fill="#93c5fd" stroke="#0f172a" stroke-width="2"/>
<text x="495" y="188" font-size="18" text-anchor="middle" fill="#0f172a">blu = consonante</text>
<text x="495" y="260" font-size="22" font-weight="bold" text-anchor="middle" fill="#0e7490">21 vagoni!</text>
</svg>`,
      caption: "Leggi le lettere riga per riga, da sinistra a destra: 7 + 7 + 7 = 21."
    },
    {
      type: "text",
      title: "Quattro modi di scrivere la stessa lettera",
      html: `<p>Ogni lettera si può scrivere in modi diversi, ma <b>il suono è lo stesso</b>:</p>
<table><tr><th>Stampato maiuscolo</th><th>Stampato minuscolo</th><th>Corsivo</th></tr>
<tr><td><b>A</b></td><td><b>a</b></td><td><i style="font-family:cursive">a</i></td></tr>
<tr><td><b>B</b></td><td><b>b</b></td><td><i style="font-family:cursive">b</i></td></tr>
<tr><td><b>G</b></td><td><b>g</b></td><td><i style="font-family:cursive">g</i></td></tr>
<tr><td><b>R</b></td><td><b>r</b></td><td><i style="font-family:cursive">r</i></td></tr></table>
<ul>
<li>Lo <b>stampato maiuscolo</b> è il primo che impariamo: lettere grandi, dritte, staccate.</li>
<li>Lo <b>stampato minuscolo</b> è quello dei libri 📖.</li>
<li>Il <b>corsivo</b> si scrive a mano: le lettere si tengono per mano e la penna non si stacca quasi mai dal foglio. ✍️</li>
</ul>`
    },
    {
      type: "svg",
      title: "La lettera A in tre vestiti",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fdf4ff"/>
<g stroke="#a21caf" stroke-width="2" opacity="0.4">
<line x1="20" y1="80" x2="580" y2="80"/><line x1="20" y1="180" x2="580" y2="180"/>
</g>
<text x="110" y="180" font-size="120" font-weight="bold" font-family="Arial, sans-serif" fill="#be185d" text-anchor="middle">A</text>
<text x="300" y="180" font-size="120" font-weight="bold" font-family="Arial, sans-serif" fill="#7c3aed" text-anchor="middle">a</text>
<text x="490" y="180" font-size="120" font-style="italic" font-family="cursive, 'Comic Sans MS'" fill="#0e7490" text-anchor="middle">a</text>
<text x="110" y="235" font-size="20" fill="#1f2937" text-anchor="middle">stampato maiuscolo</text>
<text x="300" y="235" font-size="20" fill="#1f2937" text-anchor="middle">stampato minuscolo</text>
<text x="490" y="235" font-size="20" fill="#1f2937" text-anchor="middle">corsivo</text>
<text x="300" y="40" font-size="24" font-weight="bold" fill="#1f2937" text-anchor="middle">Stessa lettera, stesso suono: "a"!</text>
</svg>`,
      caption: "La lettera cambia vestito, ma è sempre lei."
    },
    {
      type: "widget",
      title: "Abbina maiuscola e minuscola",
      widget: "match",
      options: { pairs: [["A", "a"], ["B", "b"], ["D", "d"], ["G", "g"], ["L", "l"], ["Q", "q"], ["R", "r"], ["E", "e"]] },
      caption: "Attenzione a b e d, a p e q: si somigliano ma guardano da parti diverse!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'ordine delle lettere",
      questions: [
        { type: "mc", q: "Qual è la prima lettera dell'alfabeto?", options: ["Z", "A", "B"], answer: 1, explain: "L'alfabeto comincia con la A." },
        { type: "mc", q: "Che lettera viene dopo la M?", options: ["L", "N", "O"], answer: 1, explain: "…L, M, N, O…: dopo la M c'è la N." },
        { type: "num", q: "Quante lettere ha l'alfabeto italiano?", answer: 21, explain: "Sono 21: 5 vocali e 16 consonanti." }
      ]
    },
    {
      type: "text",
      title: "Le 5 lettere straniere: J K W X Y",
      html: `<p>Ci sono altre 5 lettere che usiamo per parole che vengono da <b>altre lingue</b> 🌍:</p>
<ul>
<li><b>J</b> (i lunga) → jeans 👖, judo</li>
<li><b>K</b> (cappa) → koala 🐨, karate, kiwi 🥝</li>
<li><b>W</b> (doppia vu) → würstel 🌭, web</li>
<li><b>X</b> (ics) → xilofono 🎶, taxi 🚕</li>
<li><b>Y</b> (ipsilon) → yogurt, yo-yo 🪀</li>
</ul>
<p>Con queste, le lettere diventano <b>26</b>: come l'alfabeto inglese!</p>
<p>Dove si mettono? <b>J</b> dopo la I, <b>K</b> dopo la J; <b>W X Y</b> tra la V e la Z.</p>`
    },
    {
      type: "example",
      title: "Esempio: il dizionario e l'appello",
      html: `<p>La maestra fa l'<b>appello</b> 📋: chiama i bambini in <b>ordine alfabetico</b>, guardando la prima lettera del cognome.</p>
<p><b>B</b>ianchi → <b>C</b>olombo → <b>F</b>errari → <b>R</b>ossi → <b>V</b>erdi</p>
<p>Anche nel <b>dizionario</b> 📕 le parole sono in ordine alfabetico: per trovare "gatto" vai alle pagine della <b>G</b>!</p>`
    },
    {
      type: "example",
      title: "Esempio: l'alfabetiere degli animali",
      html: `<p>Un modo divertente per ricordare le lettere: un animale per ogni lettera!</p>
<p>A 🐝 ape · B 🐋 balena · C 🐴 cavallo · D 🐬 delfino · E 🐘 elefante · F 🦩 fenicottero · G 🐱 gatto · H 🤫 (nessun animale: la H è muta!) · I 🦔 istrice · L 🦁 leone · M 🐄 mucca · N 🐦 nibbio · O 🐻 orso · P 🐧 pinguino · Q 🦆 quaglia · R 🐸 rana · S 🐍 serpente · T 🐢 tartaruga · U 🦉 upupa · V 🦊 volpe · Z 🦓 zebra</p>
<p>Inventa il tuo alfabetiere con i cibi o con i nomi dei tuoi amici!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>La parola <b>alfabeto</b> viene dalle prime due lettere dell'alfabeto <b>greco</b>: <b>alfa</b> (α) e <b>beta</b> (β). Un po' come se noi dicessimo "l'abiccì"!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>La nostra <b>A</b> all'inizio era il disegno di una <b>testa di bue</b> 🐂 con le corna! I <b>Fenici</b>, circa 3000 anni fa, la chiamavano <i>aleph</i>, che vuol dire "bue". Poi i Greci la girarono… e capovolta diventò la nostra A con le corna in giù.</p>
<p>Non tutte le lingue hanno 21 lettere: l'<b>inglese</b> ne ha 26, il <b>russo</b> 33, il <b>romeno</b> 31.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'alfabeto italiano ha <b>21 lettere</b>, dalla <b>A</b> alla <b>Z</b>, sempre nello stesso ordine.</li>
<li>Ci sono anche 5 lettere straniere: <b>J K W X Y</b>.</li>
<li>Ogni lettera si scrive in <b>stampato maiuscolo</b>, <b>stampato minuscolo</b> e <b>corsivo</b>: il suono non cambia.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare l'alfabeto",
      intro: "C'è chi impara cantando, chi con le carte, chi guardando come sono nate le lettere. Prova il modo che preferisci!",
      tabs: [
        {
          label: "🎵 La canzone a pezzetti",
          html: `<p>Dividi l'alfabeto in <b>3 pezzi da 7</b> e cantali su una musica che conosci (per esempio "Fra Martino"):</p>
<ol>
<li>🎶 <b>A B C D E F G</b></li>
<li>🎶 <b>H I L M N O P</b></li>
<li>🎶 <b>Q R S T U V Z</b></li>
</ol>
<p>Quando sai il primo pezzo, aggiungi il secondo, poi il terzo. È più facile ricordare 3 pezzetti che 21 lettere tutte insieme!</p>`
        },
        {
          label: "🃏 Carte lettera-parola",
          html: `<p>Gira la carta: davanti c'è la lettera, dietro una parola che inizia con quella lettera.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "B b", back: "🍌 BANANA" },
            { front: "D d", back: "🦖 DINOSAURO" },
            { front: "F f", back: "🌸 FIORE" },
            { front: "L l", back: "🌙 LUNA" },
            { front: "N n", back: "☁️ NUVOLA" },
            { front: "Q q", back: "📓 QUADERNO" },
            { front: "T t", back: "🎂 TORTA" },
            { front: "Z z", back: "🦓 ZEBRA" }
          ] }
        },
        {
          label: "🏺 Come sono nate le lettere",
          html: `<p>Le lettere non sono sempre esistite! Tanto tempo fa si scriveva con <b>disegnini</b>.</p>
<p>I <b>Fenici</b> ebbero l'idea geniale: un segno per ogni suono. Poi i <b>Greci</b>, gli <b>Etruschi</b> e i <b>Romani</b> cambiarono un po' i segni. Le nostre lettere sono quelle dei Romani!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fef3c7"/>
<g fill="none" stroke="#92400e" stroke-width="6" stroke-linecap="round">
<path d="M60,140 L100,100 L140,140 M75,125 L125,125"/>
<path d="M60,100 Q40,70 55,55 M140,100 Q160,70 145,55"/>
<path d="M250,90 L290,140 M250,140 L290,90 M260,115 L280,115"/>
<path d="M430,150 L460,80 L490,150 M442,125 L478,125"/>
</g>
<text x="100" y="190" font-size="20" fill="#78350f" text-anchor="middle">Fenici: testa di bue</text>
<text x="270" y="190" font-size="20" fill="#78350f" text-anchor="middle">si gira…</text>
<text x="460" y="190" font-size="20" fill="#78350f" text-anchor="middle">Romani: A</text>
<text x="190" y="120" font-size="36" fill="#b45309">→</text>
<text x="360" y="120" font-size="36" fill="#b45309">→</text>
<text x="300" y="35" font-size="22" font-weight="bold" fill="#78350f" text-anchor="middle">Il viaggio della lettera A</text>
</svg>`
        },
        {
          label: "🌍 In altre lingue",
          html: `<p>Ogni lingua ha il suo alfabeto:</p>
<ul>
<li>🇬🇧 <b>Inglese</b>: 26 lettere (le nostre 21 + J K W X Y).</li>
<li>🇷🇴 <b>Romeno</b>: 31 lettere, con lettere speciali come <b>ă</b>, <b>â</b>, <b>î</b>, <b>ș</b>, <b>ț</b>.</li>
<li>🇷🇺 <b>Russo</b>: 33 lettere dell'alfabeto <b>cirillico</b>: А Б В Г Д…</li>
<li>🇬🇷 <b>Greco</b>: 24 lettere: α alfa, β beta, γ gamma…</li>
<li>🇨🇳 <b>Cinese</b>: non ha un alfabeto! Usa migliaia di <b>caratteri</b>, ognuno è una parola o un pezzo di parola.</li>
</ul>
<p>Se a casa parli un'altra lingua, prova a confrontare i due alfabeti: quali lettere sono uguali?</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'alfabeto: tocca un nodo e scopri il perché",
      nodes: [
        { id: "disegni", label: "Disegni (pittogrammi)", x: 15, y: 10, color: "#92400e", html: "Le prime scritture usavano disegnini: un sole per dire 'sole', un bue per dire 'bue'.", why: "Più di 5000 anni fa i Sumeri e gli Egizi scrivevano così. Servivano centinaia di disegni diversi: era difficilissimo!" },
        { id: "fenici", label: "Fenici", x: 50, y: 10, color: "#b45309", html: "Popolo di navigatori e mercanti del Mediterraneo.", why: "Circa 3000 anni fa inventarono un sistema con poco più di 20 segni, uno per ogni suono: bastava imparare pochi segni per scrivere tutto. Era comodo per i commerci!" },
        { id: "greci", label: "Greci", x: 85, y: 10, color: "#2563eb", html: "Presero l'alfabeto fenicio e aggiunsero le vocali.", why: "I Fenici non scrivevano le vocali; i Greci ne avevano bisogno per la loro lingua. Le prime due lettere, alfa e beta, danno il nome all'alfabeto." },
        { id: "romani", label: "Romani (latino)", x: 85, y: 45, color: "#dc2626", html: "Usavano le lettere che usiamo ancora oggi.", why: "I Romani impararono la scrittura dagli Etruschi, che l'avevano presa dai Greci. Il loro alfabeto latino è il più usato al mondo." },
        { id: "alfabeto", label: "Alfabeto italiano (21)", x: 50, y: 45, color: "#16a34a", html: "A B C D E F G H I L M N O P Q R S T U V Z.", why: "L'italiano viene dal latino. Le lettere J K W X Y non servono per le parole italiane, perché i loro suoni si scrivono già con altre lettere (per esempio X = cs)." },
        { id: "straniere", label: "Lettere straniere", x: 15, y: 45, color: "#64748b", html: "J K W X Y: le usiamo per parole di altre lingue (jeans, koala, web, taxi, yogurt).", why: "Sono entrate in italiano insieme alle parole straniere. Con loro le lettere diventano 26, come in inglese." },
        { id: "ordine", label: "Ordine alfabetico", x: 30, y: 78, color: "#a855f7", html: "Le lettere hanno un posto fisso: serve per dizionari, elenchi, rubriche.", why: "L'ordine è antichissimo: è quasi lo stesso dei Fenici (aleph, beth, gimel… → A, B, C)! L'abbiamo ereditato insieme alle lettere." },
        { id: "forme", label: "Maiuscolo, minuscolo, corsivo", x: 70, y: 78, color: "#0e7490", html: "Tre modi di scrivere la stessa lettera.", why: "I Romani scrivevano solo in maiuscolo. Il minuscolo nacque nel Medioevo (al tempo di Carlo Magno) per scrivere più in fretta e risparmiare pergamena. Il corsivo lega le lettere per non staccare la penna." }
      ],
      edges: [
        ["disegni", "fenici", "semplificati da"],
        ["fenici", "greci", "copiato dai"],
        ["greci", "romani", "tramite gli Etruschi"],
        ["romani", "alfabeto", "diventa"],
        ["straniere", "alfabeto", "si aggiungono a"],
        ["alfabeto", "ordine", "ha un"],
        ["alfabeto", "forme", "si scrive in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: lettere e scritture",
      questions: [
        { type: "mc", q: "Quale di queste NON è una lettera dell'alfabeto italiano di 21 lettere?", options: ["K", "L", "V"], answer: 0, explain: "La K è una lettera straniera, come J, W, X, Y." },
        { type: "tf", q: "In corsivo le lettere si tengono per mano.", answer: true, explain: "Nel corsivo le lettere sono legate tra loro." },
        { type: "mc", q: "Che lettera viene prima della Z?", options: ["U", "V", "T"], answer: 1, explain: "…T, U, V, Z: prima della Z c'è la V." }
      ]
    }
  ],
  glossary: [
    { t: "Alfabeto", d: "L'insieme delle lettere in un ordine fisso. In italiano sono 21." },
    { t: "Ordine alfabetico", d: "Mettere parole o nomi seguendo l'ordine delle lettere, dalla A alla Z." },
    { t: "Stampato maiuscolo", d: "Lettere grandi e staccate: A, B, C." },
    { t: "Stampato minuscolo", d: "Lettere piccole dei libri: a, b, c." },
    { t: "Corsivo", d: "Scrittura a mano in cui le lettere sono legate tra loro." },
    { t: "Lettere straniere", d: "J, K, W, X, Y: si usano per parole che vengono da altre lingue." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante lettere ha l'alfabeto italiano?", answer: 21, explain: "21 lettere: 5 vocali e 16 consonanti." },
      { type: "mc", q: "Qual è l'ultima lettera dell'alfabeto italiano?", options: ["V", "Z", "Y"], answer: 1, explain: "L'alfabeto finisce con la Z." },
      { type: "mc", q: "Che lettera viene dopo la C?", options: ["B", "D", "E"], answer: 1, explain: "A, B, C, D: dopo la C c'è la D." },
      { type: "mc", q: "Che lettera viene tra la R e la T?", options: ["S", "Q", "U"], answer: 0, explain: "R, S, T." },
      { type: "order", q: "Metti queste lettere in ordine alfabetico.", items: ["B", "F", "M", "R", "V"], explain: "B viene prima, poi F, M, R e infine V." },
      { type: "order", q: "Metti questi nomi in ordine alfabetico.", items: ["Anna", "Carlo", "Luca", "Sara"], explain: "Si guarda la prima lettera: A, C, L, S." },
      { type: "tf", q: "La lettera X fa parte delle lettere straniere.", answer: true, explain: "J, K, W, X, Y sono le lettere straniere." },
      { type: "mc", q: "Qual è la lettera minuscola di G?", options: ["q", "g", "j"], answer: 1, explain: "G maiuscola → g minuscola." },
      { type: "text", q: "Come si chiama la scrittura a mano con le lettere legate tra loro?", answer: ["corsivo", "il corsivo"], explain: "È il corsivo." },
      { type: "tf", q: "Se scrivo una lettera in corsivo, il suono cambia.", answer: false, explain: "No: il suono è sempre lo stesso, cambia solo il modo di scrivere." },
      { type: "mc", q: "Da dove viene la parola 'alfabeto'?", options: ["Da alfa e beta, lettere greche", "Dal nome di un re", "Da un animale"], answer: 0, explain: "Alfa e beta sono le prime due lettere greche." },
      { type: "text", q: "Scrivi la lettera che manca: H I _ M N", answer: ["l"], explain: "H, I, L, M, N: manca la L." }
    ]
  }
});

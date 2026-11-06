TOPIC('it', {
  id: "p1-sci-materiali",
  title: "Gli oggetti e i materiali",
  intro: "Il tavolo è di <b>legno</b> 🪵, la bottiglia è di <b>plastica</b> 🧴, il cucchiaio è di <b>metallo</b> 🥄, il bicchiere è di <b>vetro</b> 🥛. Ogni oggetto è fatto di un <b>materiale</b>. Scopriamo come riconoscerli e perché usiamo proprio quelli!",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Che cos'è un materiale?",
      html: `<p>Un <b>materiale</b> è <b>ciò di cui è fatto</b> un oggetto. Ecco i più comuni:</p>
<ul>
<li>🪵 <b>Legno</b> — viene dagli <b>alberi</b>. Sedie, matite, porte.</li>
<li>📄 <b>Carta</b> — si fa anche lei con il legno degli alberi. Quaderni, libri, scatole.</li>
<li>🔩 <b>Metallo</b> — si estrae dalle <b>rocce</b>. Chiavi, pentole, monete, forbici.</li>
<li>🥛 <b>Vetro</b> — si fa fondendo la <b>sabbia</b> nel fuoco. Bicchieri, finestre, barattoli.</li>
<li>🧴 <b>Plastica</b> — si fa soprattutto con il <b>petrolio</b>. Bottiglie, giocattoli, secchielli.</li>
<li>🧶 <b>Stoffa</b> — si fa con fili di cotone, lana o altri fili. Magliette, tende, cuscini.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Da dove vengono i materiali",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<g font-size="38" text-anchor="middle">
<text x="70" y="70">🌳</text><text x="70" y="150">🌳</text><text x="70" y="230">⛰️</text><text x="70" y="300">🏖️</text>
<text x="300" y="70">🪵</text><text x="300" y="150">📄</text><text x="300" y="230">🔩</text><text x="300" y="300">🥛</text>
</g>
<g stroke="#16a34a" stroke-width="4" fill="none">
<path d="M120 58 L250 58"/><path d="M240 50 L252 58 L240 66"/>
<path d="M120 138 L250 138"/><path d="M240 130 L252 138 L240 146"/>
<path d="M120 218 L250 218"/><path d="M240 210 L252 218 L240 226"/>
<path d="M120 288 L250 288"/><path d="M240 280 L252 288 L240 296"/>
</g>
<g font-size="17" fill="#14532d">
<text x="185" y="48" text-anchor="middle">si taglia</text>
<text x="185" y="128" text-anchor="middle">si sminuzza</text>
<text x="185" y="208" text-anchor="middle">si fonde</text>
<text x="185" y="278" text-anchor="middle">si fonde</text>
</g>
<g font-size="19" font-weight="bold">
<text x="345" y="65" fill="#92400e">LEGNO (dall'albero)</text>
<text x="345" y="145" fill="#1d4ed8">CARTA (dal legno)</text>
<text x="345" y="225" fill="#475569">METALLO (dalle rocce)</text>
<text x="345" y="295" fill="#0e7490">VETRO (dalla sabbia)</text>
</g>
</svg>`,
      caption: "Alcuni materiali si trovano in natura (legno), altri sono fatti dall'uomo trasformando quelli naturali (carta, vetro, plastica)."
    },
    {
      type: "text",
      title: "Come riconosco un materiale? Uso i sensi!",
      html: `<p>Per capire di che materiale è fatto un oggetto, faccio come uno scienziato 🔬:</p>
<ol>
<li>👀 <b>Guardo</b>: è <b>trasparente</b> (ci vedo attraverso) come il vetro? È <b>lucido</b> come il metallo?</li>
<li>✋ <b>Tocco</b>: è <b>freddo</b> come il metallo? È <b>morbido</b> come la stoffa? È <b>ruvido</b> come il legno grezzo?</li>
<li>👂 <b>Batto piano</b> con la matita: il metallo fa «din», il legno fa «toc», il vetro fa «tin».</li>
<li>💪 <b>Provo a piegare</b> (con delicatezza!): la carta e la stoffa si piegano, il vetro no, si rompe!</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio: lo zaino di scuola 🎒",
      html: `<p>Nello zaino ci sono tanti materiali diversi:</p>
<ul>
<li>📘 il quaderno → <b>carta</b></li>
<li>✏️ la matita → <b>legno</b> (e dentro la grafite)</li>
<li>✂️ le forbici → <b>metallo</b> per le lame, <b>plastica</b> per il manico</li>
<li>🎒 lo zaino stesso → <b>stoffa</b></li>
<li>🧃 la borraccia → <b>metallo</b> o <b>plastica</b></li>
</ul>
<p>Hai visto? Le forbici sono fatte di <b>due materiali</b>: il metallo taglia bene, la plastica è comoda da impugnare.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: di che cosa è fatto?",
      questions: [
        { type: "mc", q: "Di che materiale è fatta la finestra trasparente? 🪟", options: ["Legno", "Vetro", "Stoffa"], answer: 1, explain: "Il vetro è trasparente: ci vediamo attraverso." },
        { type: "mc", q: "Da dove viene il legno?", options: ["Dagli alberi", "Dalla sabbia", "Dal petrolio"], answer: 0, explain: "Il legno viene dal tronco degli alberi." },
        { type: "tf", q: "La carta si fa con il legno.", answer: true, explain: "Sì: il legno viene sminuzzato e mescolato con acqua, poi steso in fogli." }
      ]
    },
    {
      type: "widget",
      title: "Metti ogni oggetto nel suo materiale",
      widget: "classify",
      options: {
        groups: ["🪵 Legno", "🔩 Metallo", "🥛 Vetro", "🧴 Plastica", "🧶 Stoffa", "📄 Carta"],
        items: [
          ["🪑 sedia di legno", 0],
          ["🥢 bastoncini", 0],
          ["🔑 chiave", 1],
          ["🥄 cucchiaio", 1],
          ["🫙 barattolo della marmellata", 2],
          ["🪞 specchio", 2],
          ["🪣 secchiello del mare", 3],
          ["🦖 dinosauro giocattolo", 3],
          ["🧦 calzino", 4],
          ["👕 maglietta", 4],
          ["📰 giornale", 5],
          ["📦 scatola di cartone", 5]
        ]
      },
      caption: "Tocca ogni oggetto e scegli il suo materiale."
    },
    {
      type: "text",
      title: "Perché usiamo proprio quel materiale?",
      html: `<p>Ogni materiale ha le sue <b>caratteristiche</b> (si chiamano <b>proprietà</b>). Scegliamo il materiale giusto per ogni lavoro:</p>
<ul>
<li>🥛 Il <b>vetro</b> è trasparente: perfetto per le finestre. Ma è <b>fragile</b>, si rompe facilmente.</li>
<li>🔩 Il <b>metallo</b> è <b>duro</b> e <b>resistente</b>: perfetto per le chiavi e le pentole. Il calore lo attraversa facilmente.</li>
<li>🧴 La <b>plastica</b> è <b>leggera</b> e <b>impermeabile</b> (non fa passare l'acqua).</li>
<li>🧶 La <b>stoffa</b> è <b>morbida</b> e <b>flessibile</b>: si piega e tiene caldo.</li>
<li>🪵 Il <b>legno</b> è resistente e <b>galleggia</b> sull'acqua.</li>
</ul>
<p>Una pentola di carta? Brucerebbe! Un ombrello di carta? Si bagnerebbe! ☔</p>`
    },
    {
      type: "example",
      title: "Esperimento: galleggia o affonda? 🛁",
      html: `<p>Riempi una bacinella d'acqua e prova (con un adulto):</p>
<ul>
<li>🪵 un tappo di sughero o un pezzo di legno → <b>galleggia</b></li>
<li>🔩 un chiodo o una moneta → <b>affonda</b></li>
<li>🧴 un tappo di plastica → di solito <b>galleggia</b></li>
<li>🪨 un sassolino → <b>affonda</b></li>
<li>📄 un foglio di carta → prima galleggia, poi si <b>inzuppa</b> d'acqua e affonda!</li>
</ul>
<p>Prima di mettere ogni oggetto in acqua, prova a <b>indovinare</b>: questo si chiama fare un'<b>ipotesi</b>, come i veri scienziati.</p>`
    },
    {
      type: "3d",
      title: "Dentro un tronco d'albero 🌳",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#78350f", label: "Corteccia (la «pelle» dell'albero)" },
        { r: 0.9, color: "#fcd34d", label: "Legno giovane, chiaro (porta l'acqua)" },
        { r: 0.55, color: "#b45309", label: "Legno vecchio, scuro e duro" },
        { r: 0.08, color: "#451a03", label: "Midollo (il centro)" }
      ] },
      caption: "Il legno che usiamo per mobili e matite viene dal tronco. Gira il modello: vedi gli strati, come gli anelli di un albero tagliato."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 📜",
      html: `<p>La <b>carta</b> è stata inventata in <b>Cina</b> quasi 2000 anni fa. Si racconta che un funzionario, <b>Cai Lun</b>, nel 105 d.C. la fece con corteccia d'albero, stracci e reti da pesca sminuzzati. Prima si scriveva su seta, su bambù, o sul papiro come gli Egizi!</p>
<p>In Italia, a <b>Fabriano</b>, si fa la carta da più di 700 anni.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐢",
      html: `<p>Una bottiglia di <b>plastica</b> gettata in mare può restare lì per <b>centinaia di anni</b> prima di sparire, e gli animali marini possono scambiarla per cibo. Per questo è importante fare la <b>raccolta differenziata</b> e usare borracce che durano tanto!</p>
<p>Il <b>vetro</b>, invece, si può riciclare <b>all'infinito</b>: una bottiglia vecchia diventa una bottiglia nuova.</p>`
    },
    {
      type: "widget",
      title: "Abbina il materiale alla sua proprietà",
      widget: "match",
      options: {
        pairs: [
          ["🥛 Vetro", "trasparente e fragile"],
          ["🔩 Metallo", "duro e lucido"],
          ["🧶 Stoffa", "morbida e flessibile"],
          ["🧴 Plastica", "leggera e impermeabile"],
          ["🪵 Legno", "galleggia sull'acqua"]
        ]
      },
      caption: "Collega ogni materiale alla frase giusta."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Ogni oggetto è fatto di uno o più <b>materiali</b>.</li>
<li>Alcuni materiali sono <b>naturali</b> (legno, lana, cotone), altri sono <b>fatti dall'uomo</b> (plastica, vetro, carta).</li>
<li>Ogni materiale ha le sue <b>proprietà</b>: trasparente, duro, morbido, leggero, fragile…</li>
<li>Scegliamo il materiale giusto per ogni oggetto. E poi lo <b>ricicliamo</b> ♻️!</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i materiali 🌈",
      intro: "<p>Scegli il modo che ti piace di più.</p>",
      tabs: [
        {
          label: "🐷 I tre porcellini",
          html: `<p>Ti ricordi la fiaba dei <b>tre porcellini</b>? È una lezione sui materiali!</p>
<ul>
<li>🌾 Il primo costruisce la casa di <b>paglia</b>: leggera e veloce, ma il lupo la butta giù con un soffio.</li>
<li>🪵 Il secondo usa il <b>legno</b>: più resistente, ma non abbastanza.</li>
<li>🧱 Il terzo usa i <b>mattoni</b>: ci mette tanto, ma la casa resiste!</li>
</ul>
<p>Morale da scienziato: <b>il materiale giusto dipende da cosa deve fare l'oggetto</b>.</p>`
        },
        {
          label: "♻️ I bidoni dei colori",
          html: `<p>In Italia la raccolta differenziata divide i rifiuti per materiale. I colori cambiano da città a città, ma spesso sono così:</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<rect x="30" y="60" width="110" height="130" rx="10" fill="#2563eb"/>
<rect x="170" y="60" width="110" height="130" rx="10" fill="#facc15"/>
<rect x="310" y="60" width="110" height="130" rx="10" fill="#16a34a"/>
<rect x="450" y="60" width="110" height="130" rx="10" fill="#92400e"/>
<g font-size="40" text-anchor="middle"><text x="85" y="130">📄</text><text x="225" y="130">🧴</text><text x="365" y="130">🍾</text><text x="505" y="130">🍌</text></g>
<g font-size="17" text-anchor="middle" font-weight="bold" fill="#111827">
<text x="85" y="215">CARTA</text><text x="225" y="215">PLASTICA</text><text x="365" y="215">VETRO</text><text x="505" y="215">UMIDO</text>
</g>
<text x="300" y="35" font-size="17" text-anchor="middle" fill="#334155">Ogni materiale nel suo bidone: così si può riciclare</text>
</svg>`
        },
        {
          label: "🇯🇵 Il Giappone e la carta",
          html: `<p>In <b>Giappone</b> la carta (si chiama <i>washi</i>) è così resistente che un tempo si usava anche per le <b>porte</b> e le <b>finestre</b> delle case (gli <i>shōji</i>), al posto del vetro: fa passare una luce morbida.</p>
<p>E con un solo foglio, senza colla né forbici, si fanno gru, rane e barchette: è l'<b>origami</b>. Prova a piegare una barchetta di carta e mettila in acqua: per un po' galleggia!</p>`
        },
        {
          label: "🔬 Piccolissimi mattoncini 3D",
          html: `<p>Ogni materiale è fatto di <b>pezzettini piccolissimi</b>, invisibili anche con la lente, chiamati <b>molecole</b>. Il vetro, per esempio, nasce dalla sabbia, fatta soprattutto di <b>silicio</b> (grigio) legato all'<b>ossigeno</b> (rosso). Gira il modellino!</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.5, color: "#94a3b8", label: "Silicio" },
              { x: -1.1, y: 0, z: 0, r: 0.38, color: "#ef4444", label: "Ossigeno" },
              { x: 1.1, y: 0, z: 0, r: 0.38, color: "#ef4444", label: "Ossigeno" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa dei materiali 🗺️",
      nodes: [
        { id: "oggetto", label: "Gli oggetti", x: 50, y: 6, color: "#f59e0b", html: "<p>Tutte le cose che possiamo toccare e usare.</p>", why: "<p>Le persone costruiscono oggetti da sempre: i primi erano di pietra, legno e osso, centinaia di migliaia di anni fa.</p>" },
        { id: "materiale", label: "Il materiale", x: 50, y: 26, color: "#8b5cf6", html: "<p>Ciò di cui è fatto un oggetto.</p>", why: "<p>Gli storici chiamano alcune epoche con il nome del materiale più usato: <b>età della pietra</b>, <b>età del bronzo</b>, <b>età del ferro</b>!</p>" },
        { id: "naturali", label: "Materiali naturali", x: 20, y: 48, color: "#16a34a", html: "<p>Si trovano già in natura: legno, pietra, lana, cotone.</p>", why: "<p>Vengono dalle piante (legno, cotone), dagli animali (lana, seta) o dalla terra (pietra, argilla).</p>" },
        { id: "uomo", label: "Materiali fatti dall'uomo", x: 80, y: 48, color: "#0ea5e9", html: "<p>Si ottengono trasformando quelli naturali: carta, vetro, metalli, plastica.</p>", why: "<p>Il <b>vetro</b> si fa da circa 4500 anni in Mesopotamia; la <b>carta</b> fu inventata in Cina; la prima vera <b>plastica</b> sintetica, la bachelite, fu inventata nel 1907 da Leo Baekeland.</p>" },
        { id: "proprieta", label: "Le proprietà", x: 50, y: 66, color: "#ec4899", html: "<p>Trasparente, duro, morbido, leggero, fragile, impermeabile…</p>", why: "<p>Le proprietà dipendono da come sono fatti e legati tra loro i pezzettini piccolissimi del materiale.</p>" },
        { id: "sensi", label: "I sensi", x: 15, y: 82, color: "#f97316", html: "<p>Vista, tatto e udito ci aiutano a riconoscere i materiali.</p>", why: "<p>Il metallo sembra freddo al tatto perché porta via in fretta il calore della mano; il legno no.</p>" },
        { id: "scelta", label: "La scelta giusta", x: 50, y: 92, color: "#a16207", html: "<p>Usiamo il materiale adatto a ogni lavoro.</p>", why: "<p>Le forbici hanno lame di metallo (duro e affilato) e manico di plastica (leggero e comodo): due materiali, due lavori diversi.</p>" },
        { id: "riciclo", label: "Il riciclo", x: 85, y: 82, color: "#22c55e", html: "<p>Rifiuti divisi per materiale diventano oggetti nuovi.</p>", why: "<p>Riciclare fa risparmiare alberi, sabbia, petrolio ed energia, e tiene pulito il mare.</p>" }
      ],
      edges: [
        ["oggetto", "materiale", "è fatto di"],
        ["materiale", "naturali", ""],
        ["materiale", "uomo", ""],
        ["naturali", "uomo", "si trasformano in"],
        ["materiale", "proprieta", "ha le sue"],
        ["sensi", "proprieta", "scoprono le"],
        ["proprieta", "scelta", "decidono la"],
        ["uomo", "riciclo", "si possono riciclare"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: le proprietà",
      questions: [
        { type: "mc", q: "Quale materiale è fragile e si rompe facilmente?", options: ["La stoffa", "Il vetro", "La lana"], answer: 1, explain: "Il vetro è fragile: se cade si rompe." },
        { type: "tf", q: "Un chiodo di metallo galleggia nell'acqua.", answer: false, explain: "Il chiodo di metallo affonda." },
        { type: "mc", q: "Per fare un ombrello che non fa passare la pioggia è meglio…", options: ["la carta", "un materiale impermeabile", "il vetro"], answer: 1, explain: "Serve un materiale impermeabile, come la plastica o una stoffa speciale." }
      ]
    }
  ],
  glossary: [
    { t: "Materiale", d: "Ciò di cui è fatto un oggetto." },
    { t: "Proprietà", d: "Una caratteristica di un materiale: duro, morbido, trasparente…" },
    { t: "Trasparente", d: "Che lascia vedere attraverso, come il vetro." },
    { t: "Fragile", d: "Che si rompe facilmente." },
    { t: "Impermeabile", d: "Che non lascia passare l'acqua." },
    { t: "Flessibile", d: "Che si piega senza rompersi." },
    { t: "Riciclo", d: "Usare i materiali di oggetti vecchi per farne di nuovi." },
    { t: "Ipotesi", d: "Un'idea su cosa succederà, da controllare con un esperimento." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Di che materiale è fatta di solito una chiave? 🔑", options: ["Metallo", "Carta", "Stoffa"], answer: 0, explain: "La chiave è di metallo: dura e resistente." },
      { type: "mc", q: "Di che materiale è fatto un calzino? 🧦", options: ["Vetro", "Stoffa", "Legno"], answer: 1, explain: "I calzini sono di stoffa, morbida e calda." },
      { type: "mc", q: "Il vetro si fa con…", options: ["la sabbia", "la lana", "il latte"], answer: 0, explain: "Il vetro si ottiene fondendo la sabbia a temperature altissime." },
      { type: "tf", q: "La plastica si fa soprattutto con il petrolio.", answer: true, explain: "Sì, la maggior parte della plastica viene dal petrolio." },
      { type: "tf", q: "Il legno è un materiale naturale.", answer: true, explain: "Il legno viene dagli alberi: è naturale." },
      { type: "text", q: "Come si chiama il materiale dei quaderni e dei libri?", answer: ["carta", "la carta"], explain: "Quaderni e libri sono di carta." },
      { type: "mc", q: "Quale oggetto galleggia nell'acqua?", options: ["Una moneta", "Un tappo di sughero", "Un sasso"], answer: 1, explain: "Il sughero è leggero e galleggia." },
      { type: "mc", q: "Perché le pentole sono di metallo?", options: ["Perché è morbido", "Perché resiste al fuoco e fa passare il calore", "Perché è trasparente"], answer: 1, explain: "Il metallo resiste al fuoco e scalda bene il cibo." },
      { type: "order", q: "Metti in ordine come nasce un quaderno.", items: ["Si taglia un albero", "Si sminuzza il legno con l'acqua", "Si stende la pasta in fogli e si asciuga", "Si rilegano i fogli: ecco il quaderno"], explain: "Dall'albero al legno, dal legno alla carta, dalla carta al quaderno." },
      { type: "tf", q: "Il vetro si può riciclare tante volte.", answer: true, explain: "Il vetro si può riciclare praticamente all'infinito." },
      { type: "mc", q: "Le forbici hanno lame di metallo e manico di…", options: ["plastica", "vetro", "carta"], answer: 0, explain: "Il manico è di plastica: leggero e comodo." }
    ]
  }
});

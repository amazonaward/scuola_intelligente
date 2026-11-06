TOPIC('it', {
  id: "p2-ita-racconto",
  title: "Il racconto",
  intro: "«C'era una volta…» 📖 Ogni storia ha un <b>inizio</b>, uno <b>svolgimento</b> e una <b>conclusione</b>. Scopriamo come sono fatti i racconti, per capirli meglio e per inventarne di nostri!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è un racconto",
      html: `<p>Il <b>racconto</b> è una <b>storia</b> che narra dei fatti, uno dopo l'altro.</p>
<p>Nel racconto ci sono sempre:</p>
<ul>
<li>👧 i <b>personaggi</b>: chi vive la storia;</li>
<li>🏡 il <b>luogo</b>: dove succede;</li>
<li>⏰ il <b>tempo</b>: quando succede;</li>
<li>🎬 i <b>fatti</b>: che cosa succede.</li>
</ul>
<p>I fatti sono messi in <b>ordine</b>: prima, dopo, alla fine. Se mescoli l'ordine, la storia non si capisce più!</p>`
    },
    {
      type: "text",
      title: "Le tre parti del racconto",
      html: `<ol>
<li><b>Inizio</b> 🌅: presenta <b>chi</b>, <b>dove</b> e <b>quando</b>. «C'era una volta una gallina che viveva in una fattoria…»</li>
<li><b>Svolgimento</b> ⚡: succede qualcosa! Spesso c'è un <b>problema</b> e i personaggi cercano di risolverlo. «Un giorno, all'improvviso, la volpe…»</li>
<li><b>Conclusione</b> 🌈: come va a finire. Il problema si risolve (o no!). «Alla fine la gallina tornò a casa sana e salva.»</li>
</ol>`
    },
    {
      type: "svg",
      title: "La montagna della storia",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<polygon points="20,260 300,50 580,260" fill="#86efac" stroke="#15803d" stroke-width="4"/>
<polygon points="250,88 300,50 350,88 325,80 300,95 275,80" fill="#ffffff"/>
<rect x="20" y="260" width="560" height="25" fill="#65a30d"/>
<circle cx="70" cy="230" r="22" fill="#fde047" stroke="#a16207" stroke-width="3"/>
<text x="70" y="237" font-size="20" text-anchor="middle" font-weight="bold" fill="#713f12">1</text>
<circle cx="300" cy="80" r="22" fill="#f87171" stroke="#991b1b" stroke-width="3"/>
<text x="300" y="87" font-size="20" text-anchor="middle" font-weight="bold" fill="#ffffff">2</text>
<circle cx="530" cy="230" r="22" fill="#60a5fa" stroke="#1d4ed8" stroke-width="3"/>
<text x="530" y="237" font-size="20" text-anchor="middle" font-weight="bold" fill="#ffffff">3</text>
<text x="40" y="180" font-size="22" font-weight="bold" fill="#a16207">INIZIO</text>
<text x="40" y="202" font-size="15" fill="#334155">chi? dove? quando?</text>
<text x="300" y="30" font-size="22" text-anchor="middle" font-weight="bold" fill="#b91c1c">SVOLGIMENTO</text>
<text x="420" y="130" font-size="15" fill="#334155">il problema, l'avventura</text>
<text x="450" y="180" font-size="22" font-weight="bold" fill="#1d4ed8">CONCLUSIONE</text>
<text x="450" y="202" font-size="15" fill="#334155">come finisce</text>
<path d="M95 225 Q180 150 275 92" fill="none" stroke="#1f2937" stroke-width="3" stroke-dasharray="8 6"/>
<path d="M325 92 Q420 150 505 225" fill="none" stroke="#1f2937" stroke-width="3" stroke-dasharray="8 6"/>
</svg>`,
      caption: "La storia sale piano piano fino al momento più emozionante (la cima), poi scende verso la fine."
    },
    {
      type: "example",
      title: "Esempio: leggiamo una storia 🐢",
      html: `<p><b>La tartaruga e il palloncino</b></p>
<p><i>(Inizio)</i> C'era una volta una tartaruga di nome Tina, che viveva in un giardino pieno di fiori. Ogni mattina passeggiava lenta lenta tra le margherite.</p>
<p><i>(Svolgimento)</i> Un giorno vide un palloncino rosso incastrato su un ramo. «Lo voglio prendere!» pensò. Provò ad allungare il collo, ma era troppo in alto. Allora chiamò il suo amico Pino, il passerotto. Pino volò sul ramo e con il becco liberò il filo.</p>
<p><i>(Conclusione)</i> Il palloncino scese dolcemente e Tina lo legò al suo guscio. Da quel giorno, tutti nel giardino la riconoscevano da lontano!</p>
<ul>
<li>Personaggi: Tina (la <b>protagonista</b>) e Pino (l'<b>aiutante</b>)</li>
<li>Luogo: un giardino. Tempo: una mattina, «un giorno».</li>
<li>Problema: il palloncino è troppo in alto. Soluzione: l'aiuto di un amico.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Gioco: in quale parte va?",
      widget: "classify",
      options: { groups: ["🌅 Inizio", "⚡ Svolgimento", "🌈 Conclusione"], items: [
        ["C'era una volta un drago…", 0],
        ["In un paese lontano viveva un re…", 0],
        ["Una mattina d'inverno, in un bosco…", 0],
        ["All'improvviso scoppiò un temporale!", 1],
        ["Il lupo bussò alla porta.", 1],
        ["Allora il bambino decise di scappare…", 1],
        ["E vissero felici e contenti.", 2],
        ["Da quel giorno furono amici per sempre.", 2],
        ["Finalmente tornò a casa.", 2]
      ] },
      caption: "Le frasi tipiche ci aiutano a capire in quale parte della storia siamo."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parti del racconto",
      questions: [
        { type: "mc", q: "In quale parte si presentano i personaggi e il luogo?", options: ["Inizio", "Svolgimento", "Conclusione"], answer: 0, explain: "L'inizio dice chi, dove e quando." },
        { type: "mc", q: "«E vissero felici e contenti» si trova…", options: ["all'inizio", "nello svolgimento", "nella conclusione"], answer: 2, explain: "È la frase finale tipica delle fiabe." },
        { type: "tf", q: "Nello svolgimento spesso c'è un problema da risolvere.", answer: true, explain: "Il problema rende la storia interessante!" }
      ]
    },
    {
      type: "text",
      title: "I personaggi",
      html: `<ul>
<li>⭐ Il <b>protagonista</b>: il personaggio principale, quello di cui si parla di più (Cappuccetto Rosso).</li>
<li>😈 L'<b>antagonista</b>: chi si mette contro il protagonista e crea problemi (il lupo).</li>
<li>🤝 Gli <b>aiutanti</b>: chi aiuta il protagonista (il cacciatore).</li>
</ul>
<p>Non sempre c'è un «cattivo»: a volte il problema è una tempesta, un oggetto perso o una paura da superare.</p>`
    },
    {
      type: "text",
      title: "Le parole del tempo",
      html: `<p>Per mettere i fatti in ordine usiamo delle paroline speciali, come i gradini di una scala 🪜:</p>
<ul>
<li><b>Per iniziare</b>: c'era una volta, un tempo, una mattina…</li>
<li><b>Per andare avanti</b>: poi, dopo, allora, a un certo punto, all'improvviso…</li>
<li><b>Per finire</b>: alla fine, infine, finalmente, da quel giorno…</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio: inventiamo un racconto insieme ✏️",
      html: `<p>Scegliamo: chi? <b>un gatto astronauta</b> 🐱🚀. Dove? <b>sulla Luna</b>. Quando? <b>una notte d'estate</b>.</p>
<p><b>Inizio</b>: Una notte d'estate, il gatto Neve atterrò sulla Luna con il suo razzo.</p>
<p><b>Svolgimento</b>: A un certo punto si accorse che il razzo non partiva più! Allora cercò aiuto e incontrò un piccolo alieno verde che sapeva aggiustare tutto.</p>
<p><b>Conclusione</b>: Alla fine il razzo ripartì e Neve tornò sulla Terra con un nuovo amico… e un sasso lunare per ricordo.</p>
<p>Prova tu: cambia il personaggio, il luogo e il problema!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Lo scrittore italiano <b>Gianni Rodari</b> (1920–1980) inventò il «<b>binomio fantastico</b>»: si prendono due parole che non c'entrano niente, come «cane» e «armadio», e si inventa una storia che le unisce! 🐕🚪</p>
<p>Lo spiegò nel libro <i>Grammatica della fantasia</i> (1973). Rodari è l'unico scrittore italiano ad aver vinto il premio <b>Hans Christian Andersen</b>, il «Nobel» dei libri per ragazzi (1970).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Prima dei libri, le storie si raccontavano <b>a voce</b>, intorno al fuoco 🔥, e passavano dai nonni ai nipoti.</p>
<p>Più di 200 anni fa, in Germania, i <b>fratelli Grimm</b> girarono a raccogliere queste storie e le scrissero: nel <b>1812</b> pubblicarono la prima raccolta, con fiabe come <i>Cappuccetto Rosso</i> e <i>Hänsel e Gretel</i>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Un racconto ha <b>personaggi</b>, <b>luogo</b>, <b>tempo</b> e <b>fatti</b>.</li>
<li>Tre parti: <b>inizio</b> (chi, dove, quando), <b>svolgimento</b> (il problema), <b>conclusione</b> (come finisce).</li>
<li>Le <b>parole del tempo</b> (poi, allora, alla fine) mettono i fatti in ordine.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il racconto",
      intro: "Ci sono tanti modi di pensare a una storia. Trova quello che ti aiuta di più!",
      tabs: [
        {
          label: "🥪 Il panino",
          html: `<p>Un racconto è come un <b>panino</b>:</p>
<ul>
<li>🍞 il <b>pane sopra</b> è l'inizio: tiene insieme tutto e ci dice che panino è;</li>
<li>🥗 il <b>ripieno</b> è lo svolgimento: è la parte più gustosa, con tutte le avventure!</li>
<li>🍞 il <b>pane sotto</b> è la conclusione: chiude il panino, se no cade tutto.</li>
</ul>
<p>Un panino senza ripieno è noioso; un panino senza pane sotto… è un disastro! 😄</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fffbeb"/>
<path d="M120 80 Q300 0 480 80 Z" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>
<rect x="110" y="85" width="380" height="18" rx="8" fill="#22c55e"/>
<rect x="115" y="105" width="370" height="22" rx="6" fill="#ef4444"/>
<rect x="110" y="129" width="380" height="16" rx="6" fill="#facc15"/>
<rect x="120" y="148" width="360" height="40" rx="14" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>
<text x="520" y="70" font-size="20" font-weight="bold" fill="#92400e">inizio</text>
<text x="500" y="125" font-size="20" font-weight="bold" fill="#b91c1c">svolgimento</text>
<text x="500" y="175" font-size="20" font-weight="bold" fill="#92400e">conclusione</text>
</svg>`
        },
        {
          label: "🇯🇵 Le 4 parti giapponesi",
          html: `<p>In Giappone e in Cina molte storie seguono uno schema in <b>quattro</b> parti, chiamato <b>kishōtenketsu</b>:</p>
<ol>
<li><b>Ki</b>: si presenta la situazione.</li>
<li><b>Shō</b>: la situazione si sviluppa.</li>
<li><b>Ten</b>: arriva una <b>sorpresa</b>, un colpo di scena!</li>
<li><b>Ketsu</b>: si mette tutto insieme e si conclude.</li>
</ol>
<p>Qui non serve per forza un «cattivo» o una lotta: basta una sorpresa. Prova a pensare la storia di Tina la tartaruga in quattro parti!</p>`
        },
        {
          label: "🎬 Il fumetto in 3 vignette",
          html: `<p>Disegna la storia in <b>tre vignette</b>, come un fumetto:</p>
<ol>
<li>Prima vignetta: i personaggi nel loro posto (inizio).</li>
<li>Seconda vignetta: il problema o l'avventura (svolgimento).</li>
<li>Terza vignetta: come finisce (conclusione).</li>
</ol>
<p>Se riesci a raccontare la storia in tre disegni, hai capito la sua struttura!</p>`
        },
        {
          label: "🃏 Le parole del tempo",
          html: `<p>Gira le carte: dove useresti queste parole in una storia?</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "C'era una volta…", back: "🌅 Inizio" },
            { front: "Un giorno…", back: "🌅 Inizio (o inizio dello svolgimento)" },
            { front: "All'improvviso…", back: "⚡ Svolgimento: arriva il problema!" },
            { front: "Allora…", back: "⚡ Svolgimento: il personaggio reagisce" },
            { front: "Alla fine…", back: "🌈 Conclusione" },
            { front: "E vissero felici e contenti.", back: "🌈 Conclusione (delle fiabe)" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del racconto",
      nodes: [
        { id: "racconto", label: "Racconto", x: 50, y: 8, color: "#2563eb", html: "Una storia che narra dei fatti in ordine.", why: "Raccontare è una delle cose più antiche che fanno gli esseri umani: serviva per ricordare, insegnare e divertirsi, molto prima che esistesse la scrittura." },
        { id: "personaggi", label: "Personaggi", x: 15, y: 30, color: "#16a34a", html: "Protagonista, antagonista, aiutanti.", why: "Lo studioso russo <b>Vladimir Propp</b> nel 1928 analizzò 100 fiabe russe e scoprì che i personaggi hanno sempre gli stessi «ruoli»: l'eroe, il cattivo, l'aiutante, il donatore di un oggetto magico…" },
        { id: "luogotempo", label: "Luogo e tempo", x: 85, y: 30, color: "#f59e0b", html: "Dove e quando succede la storia.", why: "Il luogo e il tempo creano l'atmosfera: un bosco di notte fa paura, un prato di primavera mette allegria." },
        { id: "inizio", label: "Inizio", x: 18, y: 58, color: "#eab308", html: "Presenta chi, dove e quando.", why: "Chi ascolta deve prima «entrare» nella storia: senza sapere chi sono i personaggi, non ci importa di ciò che succede loro." },
        { id: "svolgimento", label: "Svolgimento", x: 50, y: 58, color: "#dc2626", html: "Succede qualcosa: un problema, un'avventura.", why: "Senza un cambiamento non c'è storia! Già il filosofo greco <b>Aristotele</b>, più di 2300 anni fa, scrisse che una storia deve avere «principio, mezzo e fine»." },
        { id: "conclusione", label: "Conclusione", x: 82, y: 58, color: "#0ea5e9", html: "Come va a finire.", why: "La conclusione risponde alla domanda che ci siamo fatti durante la storia: «ce la farà?». Per questo ci dà soddisfazione." },
        { id: "connettivi", label: "Parole del tempo", x: 35, y: 86, color: "#a855f7", html: "C'era una volta, poi, allora, alla fine.", why: "Si chiamano anche <b>connettivi</b>: collegano i fatti come gli anelli di una catena e ci dicono in che ordine sono successi." },
        { id: "fiaba", label: "Fiabe e favole", x: 68, y: 86, color: "#64748b", html: "Racconti fantastici tramandati a voce.", why: "Le favole di <b>Esopo</b> (Grecia, VI secolo a.C.) hanno animali e una morale; le fiabe raccolte dai <b>fratelli Grimm</b> (1812) hanno magie, re e streghe." }
      ],
      edges: [
        ["racconto", "personaggi", "ha"],
        ["racconto", "luogotempo", "ha"],
        ["racconto", "svolgimento", "è diviso in"],
        ["inizio", "svolgimento", "poi"],
        ["svolgimento", "conclusione", "infine"],
        ["svolgimento", "connettivi", "legati da"],
        ["racconto", "fiaba", "tipi"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: personaggi e parole del tempo",
      questions: [
        { type: "mc", q: "In «Cappuccetto Rosso» il lupo è…", options: ["il protagonista", "l'antagonista", "l'aiutante"], answer: 1, explain: "Il lupo si mette contro la protagonista: è l'antagonista." },
        { type: "mc", q: "Quale parola si usa di solito alla fine?", options: ["C'era una volta", "All'improvviso", "Finalmente"], answer: 2, explain: "«Finalmente» annuncia la conclusione." },
        { type: "tf", q: "In ogni racconto deve esserci per forza un cattivo.", answer: false, explain: "Il problema può essere anche una tempesta, una paura o un oggetto perso." }
      ]
    }
  ],
  glossary: [
    { t: "Racconto", d: "Storia che narra dei fatti in ordine." },
    { t: "Protagonista", d: "Il personaggio principale." },
    { t: "Antagonista", d: "Il personaggio che si oppone al protagonista." },
    { t: "Aiutante", d: "Il personaggio che aiuta il protagonista." },
    { t: "Inizio, svolgimento, conclusione", d: "Le tre parti del racconto." },
    { t: "Connettivi", d: "Parole che collegano i fatti: poi, allora, alla fine." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quante sono le parti principali di un racconto?", options: ["2", "3", "5"], answer: 1, explain: "Inizio, svolgimento, conclusione." },
      { type: "mc", q: "«All'improvviso arrivò un temporale» fa parte…", options: ["dell'inizio", "dello svolgimento", "della conclusione"], answer: 1, explain: "Succede qualcosa di nuovo: svolgimento." },
      { type: "mc", q: "Il personaggio principale si chiama…", options: ["protagonista", "antagonista", "narratore"], answer: 0, explain: "Il protagonista è al centro della storia." },
      { type: "tf", q: "Nell'inizio si dice chi, dove e quando.", answer: true, explain: "L'inizio presenta personaggi, luogo e tempo." },
      { type: "tf", q: "L'ordine dei fatti in un racconto non è importante.", answer: false, explain: "Se mescoli i fatti, la storia non si capisce." },
      { type: "text", q: "Completa l'inizio tipico delle fiabe: «C'era una …»", answer: ["volta"], explain: "«C'era una volta…»" },
      { type: "mc", q: "Chi aiuta il protagonista è…", options: ["l'antagonista", "l'aiutante", "il luogo"], answer: 1, explain: "L'aiutante." },
      { type: "mc", q: "Quale scrittore italiano inventò il «binomio fantastico»?", options: ["Gianni Rodari", "Carlo Collodi", "Dante Alighieri"], answer: 0, explain: "Gianni Rodari, nella «Grammatica della fantasia»." },
      { type: "order", q: "Metti in ordine la storia.", items: ["C'era una volta un bambino che amava gli aquiloni.", "Un giorno il vento portò via il suo aquilone.", "Allora lo inseguì fino in cima alla collina.", "Alla fine lo ritrovò impigliato in un albero e lo riportò a casa."], explain: "Inizio, problema, reazione, conclusione." },
      { type: "order", q: "Metti in ordine le parole del tempo.", items: ["C'era una volta", "Un giorno", "Poi", "Alla fine"], explain: "Dall'inizio alla conclusione." },
      { type: "mc", q: "In «Cenerentola» la matrigna è…", options: ["l'aiutante", "l'antagonista", "la protagonista"], answer: 1, explain: "La matrigna ostacola Cenerentola: antagonista." }
    ]
  }
});

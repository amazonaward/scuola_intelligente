TOPIC('it', {
  id: "p1-ita-maiuscola-punto",
  title: "Maiuscola e punto",
  intro: "Quando scriviamo, la <b>lettera maiuscola</b> e il <b>punto</b> sono come un <b>semaforo</b> 🚦: la maiuscola dice \"<b>parti!</b>\" 🟢, il punto dice \"<b>fermati!</b>\" 🔴. Scopriamo dove si mettono.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Lettere grandi e lettere piccole",
      html: `<p>Ogni lettera ha due misure:</p>
<ul>
<li>la <b>maiuscola</b>, grande: <b>A B C M R</b></li>
<li>la <b>minuscola</b>, piccola: <b>a b c m r</b></li>
</ul>
<p>Di solito scriviamo in minuscolo. La maiuscola si usa solo in <b>posti speciali</b>. Vediamo quali!</p>`
    },
    {
      type: "text",
      title: "Dove va la maiuscola",
      html: `<p>La lettera maiuscola si mette:</p>
<ol>
<li>🟢 all'<b>inizio di una frase</b>: <b>O</b>ggi piove.</li>
<li>🔴 <b>dopo il punto</b> (perché comincia una frase nuova): Piove. <b>P</b>rendo l'ombrello.</li>
<li>👧 nei <b>nomi di persona</b>: <b>S</b>ofia, <b>M</b>atteo, <b>A</b>hmed.</li>
<li>🐶 nei <b>nomi degli animali</b>: il mio cane si chiama <b>F</b>ido.</li>
<li>🏙️ nei <b>nomi di città, Paesi, fiumi, monti</b>: <b>R</b>oma, <b>I</b>talia, <b>P</b>o, <b>M</b>onte <b>B</b>ianco.</li>
</ol>
<p>Questi nomi speciali, che indicano <b>proprio quella</b> persona o quel posto, si chiamano <b>nomi propri</b>. Gli altri (cane, città, bambina) sono <b>nomi comuni</b> e vanno in minuscolo.</p>`
    },
    {
      type: "svg",
      title: "Il semaforo della frase",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f1f5f9"/>
<rect x="30" y="40" width="70" height="170" rx="16" fill="#1f2937"/>
<circle cx="65" cy="80" r="22" fill="#4b5563"/>
<circle cx="65" cy="125" r="22" fill="#4b5563"/>
<circle cx="65" cy="170" r="22" fill="#22c55e"/>
<rect x="55" y="210" width="20" height="60" fill="#374151"/>
<rect x="500" y="40" width="70" height="170" rx="16" fill="#1f2937"/>
<circle cx="535" cy="80" r="22" fill="#ef4444"/>
<circle cx="535" cy="125" r="22" fill="#4b5563"/>
<circle cx="535" cy="170" r="22" fill="#4b5563"/>
<rect x="525" y="210" width="20" height="60" fill="#374151"/>
<rect x="120" y="100" width="360" height="80" rx="14" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/>
<text x="140" y="155" font-size="40" font-weight="bold" fill="#16a34a">L</text>
<text x="168" y="155" font-size="36" fill="#1f2937">uca mangia</text>
<circle cx="420" cy="150" r="8" fill="#dc2626"/>
<text x="65" y="290" font-size="18" fill="#15803d" text-anchor="middle">PARTI!</text>
<text x="535" y="290" font-size="18" fill="#b91c1c" text-anchor="middle">STOP!</text>
<text x="300" y="70" font-size="20" fill="#1f2937" text-anchor="middle">maiuscola all'inizio · punto alla fine</text>
<text x="300" y="225" font-size="18" fill="#475569" text-anchor="middle">e Luca è un nome proprio: maiuscola anche per questo!</text>
</svg>`,
      caption: "La maiuscola fa partire la frase, il punto la ferma."
    },
    {
      type: "text",
      title: "Il punto: la frase è finita",
      html: `<p>Il <b>punto</b> ( <b>.</b> ) si mette alla <b>fine di una frase</b>, quando il pensiero è finito.</p>
<p>Leggendo, al punto la voce <b>si abbassa</b> e facciamo una <b>piccola pausa</b> per prendere fiato 😮‍💨.</p>
<p>Dopo il punto si ricomincia con la <b>maiuscola</b>:</p>
<p style="font-size:1.2em">Il sole tramonta<b style="color:#dc2626">.</b> <b style="color:#16a34a">G</b>li uccelli tornano al nido<b style="color:#dc2626">.</b> 🌅🐦</p>
<p>Ci sono anche altri segni che chiudono la frase:</p>
<ul><li><b>?</b> il <b>punto interrogativo</b>, per fare una domanda: Come ti chiami?</li>
<li><b>!</b> il <b>punto esclamativo</b>, per la meraviglia o un'emozione forte: Che bello!</li></ul>
<p>Anche dopo <b>?</b> e <b>!</b> si ricomincia con la maiuscola.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: maiuscola sì o no?",
      questions: [
        { type: "mc", q: "Quale parola va scritta con la maiuscola?", options: ["gatto", "giulia", "scuola"], answer: 1, explain: "Giulia è un nome di persona: nome proprio, quindi maiuscola." },
        { type: "tf", q: "Dopo il punto si comincia con la lettera maiuscola.", answer: true, explain: "Dopo il punto inizia una frase nuova: maiuscola!" },
        { type: "mc", q: "Dove si mette il punto?", options: ["All'inizio della frase", "Alla fine della frase", "Dopo ogni parola"], answer: 1, explain: "Il punto chiude la frase." }
      ]
    },
    {
      type: "widget",
      title: "Gioco: maiuscola o minuscola?",
      widget: "classify",
      options: {
        groups: ["🔠 Maiuscola (nome proprio)", "🔡 Minuscola (nome comune)"],
        items: [["roma", 0], ["città", 1], ["marco", 0], ["bambino", 1], ["italia", 0], ["fiume", 1], ["tevere", 0], ["cane", 1], ["fufi (la mia gatta)", 0], ["gatta", 1]]
      },
      caption: "I nomi propri vogliono la maiuscola, i nomi comuni no."
    },
    {
      type: "example",
      title: "Esempio: correggiamo il biglietto",
      html: `<p>Tommaso ha scritto un biglietto ma ha dimenticato maiuscole e punti:</p>
<p style="font-family:cursive">❌ ciao nonna domani vengo a trovarti con mamma e con il mio cane rex</p>
<p>Correggiamo:</p>
<p style="font-family:cursive">✅ <b>C</b>iao <b>n</b>onna<b>.</b> <b>D</b>omani vengo a trovarti con la mamma e con il mio cane <b>R</b>ex<b>.</b></p>
<ul><li><b>C</b>iao → inizio della frase</li><li><b>D</b>omani → dopo il punto</li><li><b>R</b>ex → nome dell'animale</li></ul>`
    },
    {
      type: "example",
      title: "Esempio: comune o proprio?",
      html: `<table><tr><th>Nome comune (minuscola)</th><th>Nome proprio (Maiuscola)</th></tr>
<tr><td>bambina 👧</td><td>Alice</td></tr>
<tr><td>città 🏙️</td><td>Torino</td></tr>
<tr><td>fiume 🌊</td><td>Arno</td></tr>
<tr><td>cane 🐕</td><td>Bobi</td></tr>
<tr><td>mare 🏖️</td><td>Adriatico</td></tr></table>
<p>Il nome comune va bene per tutti i cani; il nome proprio è solo di <b>quel</b> cane!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Gli antichi <b>Romani</b> scrivevano <b>tutto in maiuscolo</b>, spesso <b>senza spazi</b> tra le parole e senza punti: ILCANECORRENELPRATO 😵.</p>
<p>Le lettere minuscole si diffusero molto più tardi, intorno all'anno <b>800</b>, al tempo di <b>Carlo Magno</b>: i monaci le usavano per scrivere più in fretta e in modo più chiaro.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In <b>tedesco</b> 🇩🇪 si scrivono con la maiuscola <b>tutti i nomi</b>, anche quelli comuni: <i>der <b>H</b>und</i> (il cane), <i>das <b>H</b>aus</i> (la casa).</p>
<p>In <b>inglese</b> 🇬🇧 la parola <b>I</b> (io) si scrive sempre maiuscola, e anche i giorni della settimana: <i>Monday</i> (lunedì). In italiano invece i giorni e i mesi vanno in minuscolo: lunedì, gennaio.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La <b>maiuscola</b> va: all'<b>inizio della frase</b>, <b>dopo il punto</b> (anche dopo ? e !) e nei <b>nomi propri</b> (persone, animali, città, Paesi, fiumi, monti).</li>
<li>Il <b>punto</b> va alla <b>fine della frase</b>.</li>
<li>I giorni della settimana e i mesi in italiano vanno in <b>minuscolo</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire maiuscola e punto",
      intro: "Prova a pensarci come al semaforo, alla voce, alle carte o alle altre lingue!",
      tabs: [
        {
          label: "🗣️ Ascolta la voce",
          html: `<p>Leggi ad alta voce: <i>"Il gatto dorme sul letto"</i>.</p>
<p>Alla fine la tua voce <b>scende</b> ⬇️ e ti fermi un attimo. Lì ci va il <b>punto</b>!</p>
<p>Se invece la voce <b>sale</b> ⬆️ come in <i>"Vieni anche tu?"</i>, ci va il <b>punto interrogativo</b>.</p>
<p>Se la voce è <b>forte e allegra</b> 🎉, come in <i>"Evviva!"</i>, ci va il <b>punto esclamativo</b>.</p>
<p>Il trucco: <b>dove respiri, c'è un segno</b>.</p>`
        },
        {
          label: "👑 La corona del nome",
          html: `<p>Immagina che la lettera maiuscola sia una <b>corona</b> 👑.</p>
<p>La mettiamo in testa alle parole <b>importanti e uniche</b>: il tuo nome, il nome del tuo cane, della tua città. Sono "re e regine": ce n'è <b>solo uno</b> così!</p>
<p>E anche la <b>prima parola</b> della frase si mette la corona, perché è lei che apre la fila.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fef9c3"/>
<polygon points="70,90 85,50 105,80 125,40 145,80 165,50 180,90" fill="#facc15" stroke="#a16207" stroke-width="4"/>
<text x="125" y="160" font-size="64" font-weight="bold" fill="#b45309" text-anchor="middle">Sara</text>
<polygon points="320,90 335,50 355,80 375,40 395,80 415,50 430,90" fill="#facc15" stroke="#a16207" stroke-width="4"/>
<text x="375" y="160" font-size="64" font-weight="bold" fill="#b45309" text-anchor="middle">Roma</text>
<text x="520" y="160" font-size="40" fill="#475569" text-anchor="middle">città</text>
<text x="520" y="200" font-size="18" fill="#475569" text-anchor="middle">niente corona</text>
</svg>`
        },
        {
          label: "🃏 Carte dei segni",
          html: `<p>Gira la carta: quale segno va alla fine?</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "Oggi è una bella giornata", back: "." },
            { front: "Come ti chiami", back: "?" },
            { front: "Che bello, nevica", back: "!" },
            { front: "Dove abiti", back: "?" },
            { front: "Il treno è in ritardo", back: "." },
            { front: "Evviva, abbiamo vinto", back: "!" }
          ] }
        },
        {
          label: "🌍 Le regole degli altri",
          html: `<ul>
<li>🇩🇪 <b>Tedesco</b>: maiuscola per <b>tutti</b> i nomi (der Hund, die Katze).</li>
<li>🇬🇧 <b>Inglese</b>: maiuscola per <b>I</b> (io), i giorni (Monday) e i mesi (January).</li>
<li>🇪🇸 <b>Spagnolo</b>: le domande e le esclamazioni hanno un segno <b>anche all'inizio</b>, capovolto: <b>¿</b>Cómo estás? <b>¡</b>Hola!</li>
<li>🇯🇵 <b>Giapponese</b>: non ci sono maiuscole! E il punto è un cerchietto: <b>。</b></li>
</ul>
<p>In italiano la regola è semplice: maiuscola a inizio frase e nei nomi propri.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di maiuscola e punto: tocca un nodo e scopri il perché",
      nodes: [
        { id: "frase", label: "Frase", x: 50, y: 8, color: "#2563eb", html: "Un gruppo di parole con senso compiuto.", why: "Chi legge deve capire dove comincia e dove finisce ogni pensiero: per questo servono dei segnali." },
        { id: "maiuscola", label: "Maiuscola", x: 20, y: 32, color: "#16a34a", html: "Lettera grande che segna un inizio o un nome speciale.", why: "Viene dal latino <i>maiusculus</i>, 'un po' più grande'. All'inizio i Romani scrivevano solo in maiuscolo." },
        { id: "punto", label: "Punto", x: 80, y: 32, color: "#dc2626", html: "Il segno che chiude la frase.", why: "Gli antichi Greci usavano dei puntini a diverse altezze per indicare le pause di chi leggeva ad alta voce. Il punto moderno è arrivato con i libri stampati, circa 500 anni fa." },
        { id: "inizio", label: "Inizio frase", x: 10, y: 60, color: "#22c55e", html: "La prima parola della frase ha la maiuscola.", why: "Così l'occhio vede subito dove parte un pensiero nuovo, anche in mezzo a una pagina piena di parole." },
        { id: "propri", label: "Nomi propri", x: 32, y: 62, color: "#ca8a04", html: "Persone, animali, città, Paesi, fiumi, monti: Sofia, Fido, Roma, Po.", why: "Sono nomi che indicano una cosa unica: la maiuscola li distingue dai nomi comuni (Rosa la bambina, rosa il fiore)." },
        { id: "minuscola", label: "Minuscola", x: 25, y: 90, color: "#64748b", html: "Le lettere piccole, che usiamo quasi sempre.", why: "Furono diffuse intorno all'anno 800, al tempo di Carlo Magno: scrivere in minuscolo era più veloce e occupava meno spazio sulla costosa pergamena." },
        { id: "altri", label: "? e !", x: 80, y: 62, color: "#a855f7", html: "Punto interrogativo (domande) e esclamativo (emozioni).", why: "Anche loro chiudono la frase: dopo ci vuole la maiuscola. In spagnolo si mettono anche all'inizio, capovolti." },
        { id: "pausa", label: "Pausa nella lettura", x: 70, y: 90, color: "#0e7490", html: "Al punto la voce scende e ci si ferma un attimo.", why: "I segni di punteggiatura sono nati proprio per aiutare chi leggeva ad alta voce a respirare nei posti giusti." }
      ],
      edges: [
        ["frase", "maiuscola", "comincia con"],
        ["frase", "punto", "finisce con"],
        ["maiuscola", "inizio", "va all'"],
        ["maiuscola", "propri", "va nei"],
        ["maiuscola", "minuscola", "il contrario"],
        ["punto", "altri", "fratelli del punto"],
        ["punto", "pausa", "nella lettura è una"],
        ["punto", "inizio", "dopo, si ricomincia con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: il segno giusto",
      questions: [
        { type: "mc", q: "Quale segno va alla fine di: \"Quanti anni hai\"", options: [".", "?", "!"], answer: 1, explain: "È una domanda: punto interrogativo." },
        { type: "mc", q: "Quale frase è scritta bene?", options: ["andiamo a milano.", "Andiamo a Milano.", "Andiamo a milano"], answer: 1, explain: "Maiuscola all'inizio, maiuscola in Milano (città) e punto alla fine." },
        { type: "tf", q: "In italiano \"lunedì\" si scrive con la maiuscola.", answer: false, explain: "In italiano giorni e mesi vanno in minuscolo." }
      ]
    }
  ],
  glossary: [
    { t: "Lettera maiuscola", d: "Lettera grande: si usa a inizio frase, dopo il punto e nei nomi propri." },
    { t: "Lettera minuscola", d: "Lettera piccola, quella che usiamo di solito." },
    { t: "Punto", d: "Segno ( . ) che chiude una frase." },
    { t: "Punto interrogativo", d: "Segno ( ? ) che chiude una domanda." },
    { t: "Punto esclamativo", d: "Segno ( ! ) che chiude una frase piena di emozione." },
    { t: "Nome proprio", d: "Nome di una persona, un animale, un luogo preciso: si scrive con la maiuscola." },
    { t: "Nome comune", d: "Nome che va bene per tutte le cose dello stesso tipo: cane, città. Si scrive in minuscolo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale nome va scritto con la maiuscola?", options: ["fiume", "tevere", "acqua"], answer: 1, explain: "Tevere è il nome di un fiume preciso: nome proprio." },
      { type: "mc", q: "Quale frase è scritta correttamente?", options: ["il sole splende.", "Il sole splende.", "Il sole splende"], answer: 1, explain: "Maiuscola all'inizio e punto alla fine." },
      { type: "tf", q: "I nomi delle città si scrivono con la maiuscola.", answer: true, explain: "Roma, Napoli, Torino: sono nomi propri." },
      { type: "tf", q: "Dopo il punto si continua con la minuscola.", answer: false, explain: "Dopo il punto comincia una frase nuova: maiuscola." },
      { type: "mc", q: "Che segno metti alla fine di \"Dove sei\"?", options: [".", "?", "!"], answer: 1, explain: "È una domanda." },
      { type: "mc", q: "Che segno metti alla fine di \"Che bel regalo\"?", options: ["!", "?", ","], answer: 0, explain: "Esprime meraviglia: punto esclamativo." },
      { type: "text", q: "Come si chiama il segno che chiude una frase normale, quando il pensiero è finito?", answer: ["punto", "il punto", "punto fermo"], explain: "È il punto ( . )." },
      { type: "num", q: "Quante maiuscole servono in: \"oggi luca va a roma.\"", answer: 3, explain: "Oggi (inizio frase), Luca (persona), Roma (città): 3." },
      { type: "mc", q: "Perché \"Fido\" ha la maiuscola?", options: ["Perché è il nome di un animale", "Perché è una parola lunga", "Perché è un verbo"], answer: 0, explain: "È il nome proprio di un cane." },
      { type: "tf", q: "In italiano i mesi (gennaio, febbraio…) si scrivono in minuscolo.", answer: true, explain: "In italiano giorni e mesi sono in minuscolo; in inglese invece no." },
      { type: "order", q: "Metti in ordine per scrivere bene la frase.", items: ["Marta", "gioca", "con", "Bobi."], explain: "Marta gioca con Bobi. Maiuscola a inizio frase e nei nomi propri, punto alla fine." }
    ]
  }
});

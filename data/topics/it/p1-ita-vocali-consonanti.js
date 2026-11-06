TOPIC('it', {
  id: "p1-ita-vocali-consonanti",
  title: "Le vocali e le consonanti",
  intro: "Le parole sono fatte di <b>lettere</b> 🔤. Alcune lettere si possono cantare da sole: sono le <b>vocali</b> 🎵. Le altre hanno bisogno di un'amica vocale per farsi sentire: sono le <b>consonanti</b>. Scopriamole insieme!",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le lettere fanno dei suoni",
      html: `<p>Quando parliamo, la nostra bocca fa tanti <b>suoni</b> 👄.</p>
<p>Per scrivere i suoni usiamo dei segni speciali: le <b>lettere</b>.</p>
<p>Le lettere sono di <b>due famiglie</b>:</p>
<ul>
<li>🎵 le <b>vocali</b>: sono 5;</li>
<li>🧱 le <b>consonanti</b>: sono 16.</li>
</ul>
<p>Insieme fanno <b>21 lettere</b>: è l'alfabeto italiano!</p>`
    },
    {
      type: "text",
      title: "Le 5 vocali: A E I O U",
      html: `<p>Le vocali sono <b>A, E, I, O, U</b>.</p>
<p>Si dicono con la <b>bocca aperta</b> e l'aria esce libera. Puoi <b>cantarle</b> a lungo: Aaaaa! Eeeee! Iiiii! Ooooo! Uuuuu! 🎤</p>
<table><tr><th>Vocale</th><th>Parola</th></tr>
<tr><td><b>A</b> a</td><td>🐝 ape</td></tr>
<tr><td><b>E</b> e</td><td>🌿 erba</td></tr>
<tr><td><b>I</b> i</td><td>🏝️ isola</td></tr>
<tr><td><b>O</b> o</td><td>🐻 orso</td></tr>
<tr><td><b>U</b> u</td><td>🍇 uva</td></tr></table>`
    },
    {
      type: "svg",
      title: "La bocca canta le vocali",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef9c3"/>
<text x="300" y="40" font-size="26" font-weight="bold" fill="#1f2937" text-anchor="middle">Guarda la forma della bocca!</text>
<g stroke="#7f1d1d" stroke-width="4">
<ellipse cx="70" cy="140" rx="40" ry="45" fill="#ef4444"/>
<ellipse cx="185" cy="140" rx="45" ry="25" fill="#f97316"/>
<ellipse cx="300" cy="140" rx="50" ry="12" fill="#eab308"/>
<ellipse cx="415" cy="140" rx="30" ry="32" fill="#22c55e"/>
<ellipse cx="530" cy="140" rx="16" ry="18" fill="#3b82f6"/>
</g>
<text x="70" y="240" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">A</text>
<text x="185" y="240" font-size="56" font-weight="bold" fill="#ea580c" text-anchor="middle">E</text>
<text x="300" y="240" font-size="56" font-weight="bold" fill="#ca8a04" text-anchor="middle">I</text>
<text x="415" y="240" font-size="56" font-weight="bold" fill="#16a34a" text-anchor="middle">O</text>
<text x="530" y="240" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">U</text>
<text x="70" y="280" font-size="18" fill="#1f2937" text-anchor="middle">grande</text>
<text x="185" y="280" font-size="18" fill="#1f2937" text-anchor="middle">larga</text>
<text x="300" y="280" font-size="18" fill="#1f2937" text-anchor="middle">sorriso</text>
<text x="415" y="280" font-size="18" fill="#1f2937" text-anchor="middle">tonda</text>
<text x="530" y="280" font-size="18" fill="#1f2937" text-anchor="middle">bacio</text>
</svg>`,
      caption: "Prova davanti allo specchio: per ogni vocale la bocca cambia forma."
    },
    {
      type: "text",
      title: "Le 16 consonanti",
      html: `<p>Le consonanti sono:</p>
<p style="font-size:1.3em"><b>B C D F G H L M N P Q R S T V Z</b></p>
<p>Prova a dire solo "<b>M</b>" senza vocale: senti solo "mmm" 🐮. Per sentire bene una consonante ci vuole una vocale vicino: <b>M + A = MA</b>.</p>
<p>Per questo si chiamano <b>con-sonanti</b>: "suonano <b>con</b>" le vocali!</p>`
    },
    {
      type: "svg",
      title: "Consonante + vocale = un pezzo di parola",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<rect x="40" y="60" width="120" height="120" rx="20" fill="#93c5fd" stroke="#1d4ed8" stroke-width="4"/>
<text x="100" y="145" font-size="72" font-weight="bold" fill="#1e3a8a" text-anchor="middle">M</text>
<text x="200" y="140" font-size="56" font-weight="bold" fill="#1f2937" text-anchor="middle">+</text>
<rect x="240" y="60" width="120" height="120" rx="20" fill="#fca5a5" stroke="#b91c1c" stroke-width="4"/>
<text x="300" y="145" font-size="72" font-weight="bold" fill="#7f1d1d" text-anchor="middle">A</text>
<text x="400" y="140" font-size="56" font-weight="bold" fill="#1f2937" text-anchor="middle">=</text>
<rect x="440" y="60" width="130" height="120" rx="20" fill="#fde68a" stroke="#a16207" stroke-width="4"/>
<text x="505" y="145" font-size="64" font-weight="bold" fill="#713f12" text-anchor="middle">MA</text>
<text x="100" y="220" font-size="20" fill="#1d4ed8" text-anchor="middle">consonante</text>
<text x="300" y="220" font-size="20" fill="#b91c1c" text-anchor="middle">vocale</text>
<text x="505" y="220" font-size="20" fill="#a16207" text-anchor="middle">MA… MAMMA!</text>
</svg>`,
      caption: "Le consonanti in blu, le vocali in rosso: insieme formano le sillabe."
    },
    {
      type: "quiz",
      title: "Mini-quiz: vocale o consonante?",
      questions: [
        { type: "mc", q: "Quale di queste lettere è una vocale?", options: ["M", "O", "T"], answer: 1, explain: "O è una vocale: si può cantare da sola, Ooooo!" },
        { type: "tf", q: "Le vocali sono 5.", answer: true, explain: "Giusto: A, E, I, O, U." },
        { type: "mc", q: "Con quale vocale inizia 🍇 UVA?", options: ["A", "U", "I"], answer: 1, explain: "U-va: inizia con la U." }
      ]
    },
    {
      type: "widget",
      title: "Gioco: metti ogni lettera nella sua famiglia",
      widget: "classify",
      options: {
        groups: ["🎵 Vocali", "🧱 Consonanti"],
        items: [["A", 0], ["B", 1], ["E", 0], ["L", 1], ["I", 0], ["R", 1], ["O", 0], ["S", 1], ["U", 0], ["T", 1], ["P", 1], ["N", 1]]
      },
      caption: "Tocca una lettera e scegli la sua famiglia."
    },
    {
      type: "example",
      title: "Esempio: il nome di Marco",
      html: `<p>Scriviamo il nome <b>MARCO</b> e coloriamo le lettere:</p>
<p style="font-size:1.6em"><b><span style="color:#1d4ed8">M</span><span style="color:#dc2626">A</span><span style="color:#1d4ed8">R</span><span style="color:#1d4ed8">C</span><span style="color:#dc2626">O</span></b></p>
<ul><li>Vocali (rosse): <b>A, O</b> → 2 vocali</li><li>Consonanti (blu): <b>M, R, C</b> → 3 consonanti</li></ul>
<p>Prova anche tu con il <b>tuo nome</b>! ✏️</p>`
    },
    {
      type: "example",
      title: "Esempio: cambia la vocale, cambia la parola!",
      html: `<p>Guarda che magia: cambiando <b>solo una vocale</b> la parola diventa un'altra!</p>
<ul>
<li>🐱 G<b>A</b>TTO → G<b>E</b>TTO 💦 (il getto d'acqua)</li>
<li>🏠 C<b>A</b>SA → C<b>O</b>SA ❓</li>
<li>🐻 <b>O</b>RSO → <b>A</b>RSO 🔥 (bruciato)</li>
<li>📦 P<b>A</b>CCO → P<b>I</b>CCO ⛰️</li>
</ul>
<p>Le vocali sono piccole, ma importantissime!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>La parola <b>AIUOLE</b> (i giardinetti con i fiori 🌷) contiene <b>tutte e 5 le vocali</b>: A, I, U, O, E… e una sola consonante, la L!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>La lettera <b>H</b> in italiano è <b>muta</b> 🤫: da sola non fa nessun suono! La scriviamo in "ho", "hai", "ha", "hanno" e serve a far cambiare suono alla C e alla G (come in CHI e GHE).</p>
<p>Invece la lingua <b>hawaiana</b> 🌺 ha pochissime lettere: 5 vocali e solo 8 consonanti!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Le <b>vocali</b> sono 5: <b>A E I O U</b>. Si possono cantare da sole.</li>
<li>Le <b>consonanti</b> sono 16. Per farsi sentire bene hanno bisogno di una vocale.</li>
<li>Ogni parola italiana ha <b>almeno una vocale</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire vocali e consonanti",
      intro: "Se non ti è ancora chiaro, prova uno di questi modi: con il corpo, con le carte, in inglese o con un gioco di coppie.",
      tabs: [
        {
          label: "✋ La mano che vibra",
          html: `<p>Metti la mano davanti alla bocca e una sulla gola.</p>
<ul>
<li>Di' "<b>Aaaa</b>": l'aria esce <b>libera</b>, niente la ferma. È una <b>vocale</b>.</li>
<li>Di' "<b>Pa</b>": le labbra si chiudono e poi si aprono di colpo, l'aria fa "pff" sulla mano. La <b>P</b> è una <b>consonante</b>: qualcosa (labbra, lingua, denti) <b>ferma</b> o stringe l'aria.</li>
<li>Di' "<b>Ssss</b>": la lingua e i denti fanno passare l'aria stretta come un serpente 🐍.</li>
</ul>
<p>Regola del corpo: <b>aria libera = vocale</b>, <b>aria fermata = consonante</b>.</p>`
        },
        {
          label: "🃏 Carte delle vocali",
          html: `<p>Gira le carte: davanti c'è un disegno, dietro la vocale con cui inizia la parola.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "🐝", back: "A come APE" },
            { front: "🐘", back: "E come ELEFANTE" },
            { front: "🦔", back: "I come ISTRICE" },
            { front: "🐻", back: "O come ORSO" },
            { front: "🥚", back: "U come UOVO" },
            { front: "🍊", back: "A come ARANCIA" },
            { front: "🌿", back: "E come ERBA" },
            { front: "🏝️", back: "I come ISOLA" }
          ] }
        },
        {
          label: "🇬🇧 In inglese",
          html: `<p>Anche in inglese le vocali (<i>vowels</i>) si scrivono <b>A E I O U</b>… ma si leggono in modo diverso!</p>
<ul>
<li>la lettera <b>A</b> si chiama "<b>ei</b>"</li>
<li>la lettera <b>E</b> si chiama "<b>i</b>"</li>
<li>la lettera <b>I</b> si chiama "<b>ai</b>"</li>
<li>la lettera <b>U</b> si chiama "<b>iu</b>"</li>
</ul>
<p>E la lettera <b>Y</b> a volte fa la vocale, come in <i>my</i> (mio). In italiano invece ogni vocale si legge sempre come si scrive: per questo leggere in italiano è più facile! 😊</p>`
        },
        {
          label: "🧩 Consonante + vocale",
          html: `<p>Abbina ogni coppia di lettere al pezzetto di parola che formano. Leggi ad alta voce!</p>`,
          widget: "match",
          options: { pairs: [["M + A", "MA"], ["P + E", "PE"], ["L + U", "LU"], ["S + O", "SO"], ["T + I", "TI"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle lettere: tocca un nodo e scopri il perché",
      nodes: [
        { id: "suoni", label: "Suoni della voce", x: 50, y: 8, color: "#f97316", html: "Quando parliamo facciamo tanti suoni con bocca, lingua, denti e labbra.", why: "Gli uomini hanno parlato per moltissimo tempo prima di saper scrivere: la voce viene prima della scrittura." },
        { id: "lettere", label: "Lettere", x: 50, y: 32, color: "#2563eb", html: "Segni che scriviamo per 'disegnare' i suoni.", why: "Circa 3000 anni fa i Fenici, un popolo di navigatori, ebbero l'idea di usare un segno per ogni suono. I Greci e poi i Romani copiarono e cambiarono quei segni: le nostre lettere vengono dai Romani." },
        { id: "vocali", label: "Vocali (5)", x: 20, y: 56, color: "#dc2626", html: "A, E, I, O, U: si dicono con la bocca aperta e l'aria libera.", why: "Il nome viene dal latino <i>vox</i>, che vuol dire 'voce': sono i suoni fatti solo con la voce. Furono i Greci ad aggiungere i segni per le vocali, che i Fenici non scrivevano." },
        { id: "consonanti", label: "Consonanti (16)", x: 80, y: 56, color: "#1d4ed8", html: "B C D F G H L M N P Q R S T V Z: l'aria viene fermata o stretta da labbra, lingua o denti.", why: "'Con-sonante' vuol dire 'che suona insieme': da sola si sente poco, ha bisogno di una vocale." },
        { id: "h", label: "La H muta", x: 92, y: 80, color: "#64748b", html: "Una consonante che da sola non si pronuncia.", why: "In latino la H si sentiva un po', come un soffio. In italiano il soffio è sparito, ma la lettera è rimasta per distinguere 'ho' (verbo avere) da 'o' e per i suoni CHI, CHE, GHI, GHE." },
        { id: "sillaba", label: "Sillaba", x: 50, y: 80, color: "#ca8a04", html: "Consonante + vocale insieme formano un pezzetto di parola: MA, PE, LU.", why: "La bocca non riesce a dire tante consonanti di fila senza vocali: le vocali sono il 'cuore' di ogni sillaba." },
        { id: "parola", label: "Parola", x: 20, y: 92, color: "#16a34a", html: "Le sillabe insieme formano le parole: MA + MMA = MAMMA.", why: "In italiano ogni parola ha almeno una vocale. Per questo l'italiano è una lingua 'cantabile', amata dai cantanti d'opera di tutto il mondo." },
        { id: "alfabeto", label: "Alfabeto (21)", x: 85, y: 30, color: "#a855f7", html: "Tutte le lettere in ordine: 5 vocali + 16 consonanti = 21.", why: "La parola 'alfabeto' viene dalle prime due lettere greche: alfa e beta." }
      ],
      edges: [
        ["suoni", "lettere", "si scrivono con"],
        ["lettere", "alfabeto", "in ordine formano"],
        ["lettere", "vocali", "famiglia 1"],
        ["lettere", "consonanti", "famiglia 2"],
        ["consonanti", "h", "una è muta"],
        ["vocali", "sillaba", "cuore della"],
        ["consonanti", "sillaba", "si appoggia alla vocale"],
        ["sillaba", "parola", "formano la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: conta le vocali",
      questions: [
        { type: "num", q: "Quante vocali ci sono nella parola MELA? 🍎", answer: 2, explain: "M-E-L-A: le vocali sono E e A, quindi 2." },
        { type: "mc", q: "Quale lettera è muta in italiano?", options: ["H", "M", "A"], answer: 0, explain: "La H da sola non fa nessun suono." },
        { type: "tf", q: "Le consonanti si possono cantare a lungo da sole, come le vocali.", answer: false, explain: "No: per sentirle bene le consonanti hanno bisogno di una vocale vicino." }
      ]
    }
  ],
  glossary: [
    { t: "Lettera", d: "Un segno che usiamo per scrivere un suono." },
    { t: "Vocale", d: "Lettera che si pronuncia con la bocca aperta e l'aria libera: A, E, I, O, U." },
    { t: "Consonante", d: "Lettera che si pronuncia fermando o stringendo l'aria; ha bisogno di una vocale. In italiano sono 16." },
    { t: "H muta", d: "Consonante che da sola non si pronuncia." },
    { t: "Sillaba", d: "Pezzetto di parola che si dice con una sola emissione di voce, come MA o PE." },
    { t: "Alfabeto", d: "L'insieme di tutte le lettere in ordine: in italiano sono 21." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quante sono le vocali in italiano?", answer: 5, explain: "A, E, I, O, U: sono 5." },
      { type: "num", q: "Quante sono le consonanti dell'alfabeto italiano?", answer: 16, explain: "21 lettere − 5 vocali = 16 consonanti." },
      { type: "mc", q: "Quale gruppo contiene solo vocali?", options: ["A, E, I", "A, B, C", "M, O, U"], answer: 0, explain: "A, E, I sono tutte vocali." },
      { type: "mc", q: "Quale gruppo contiene solo consonanti?", options: ["P, A, L", "R, S, T", "O, N, E"], answer: 1, explain: "R, S, T sono tutte consonanti." },
      { type: "tf", q: "La parola AIUOLE contiene tutte e 5 le vocali.", answer: true, explain: "A-I-U-O-L-E: ci sono A, I, U, O, E." },
      { type: "mc", q: "Con quale vocale inizia 🐻 ORSO?", options: ["A", "O", "U"], answer: 1, explain: "O-rso: inizia con la O." },
      { type: "num", q: "Quante consonanti ci sono in GATTO? 🐱", answer: 3, explain: "G, T, T sono consonanti: 3. Le vocali sono A e O." },
      { type: "text", q: "Scrivi la vocale che manca: P_NE 🍞", answer: ["a"], explain: "PANE: manca la A." },
      { type: "order", q: "Metti le vocali in ordine, come si dicono di solito.", items: ["A", "E", "I", "O", "U"], explain: "L'ordine è A, E, I, O, U." },
      { type: "tf", q: "In italiano ci sono parole senza nessuna vocale.", answer: false, explain: "No: ogni parola italiana ha almeno una vocale." },
      { type: "mc", q: "Che cosa succede se in CASA cambi la A iniziale con la O?", options: ["Diventa COSA", "Diventa CASO", "Non cambia niente"], answer: 0, explain: "C-A-SA → C-O-SA: cambia una vocale e cambia la parola." },
      { type: "tf", q: "La H, da sola, in italiano non si pronuncia.", answer: true, explain: "È la lettera muta." }
    ]
  }
});

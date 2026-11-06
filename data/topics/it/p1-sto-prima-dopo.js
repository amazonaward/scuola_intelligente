TOPIC('it', {
  id: "p1-sto-prima-dopo",
  title: "Prima, adesso, dopo",
  intro: "Prima ti svegli ⏰, adesso fai colazione 🥛, dopo vai a scuola 🎒. Tutto quello che succede ha un <b>ordine nel tempo</b>. Imparare a dire che cosa viene <b>prima</b> e che cosa viene <b>dopo</b> è il primo passo per diventare… piccoli storici! 🕵️",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Le parole del tempo",
      html: `<p>Per raccontare le cose nell'ordine giusto usiamo delle parole speciali:</p>
<ul>
<li>⏪ <b>Prima</b> — quello che è già successo.</li>
<li>⏺️ <b>Adesso</b> (o <b>ora</b>) — quello che succede in questo momento.</li>
<li>⏩ <b>Dopo</b> (o <b>poi</b>) — quello che succederà.</li>
<li>🏁 <b>Infine</b> — l'ultima cosa.</li>
</ul>
<p>Esempio: <b>prima</b> metto i calzini, <b>poi</b> le scarpe, <b>infine</b> allaccio i lacci. Se scambio l'ordine… le scarpe sotto i calzini? Che pasticcio! 😄</p>`
    },
    {
      type: "svg",
      title: "La storia di un seme",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<rect x="10" y="20" width="180" height="200" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="4"/>
<rect x="210" y="20" width="180" height="200" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="4"/>
<rect x="410" y="20" width="180" height="200" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="4"/>
<rect x="10" y="160" width="180" height="60" fill="#a16207"/>
<rect x="210" y="160" width="180" height="60" fill="#a16207"/>
<rect x="410" y="160" width="180" height="60" fill="#a16207"/>
<ellipse cx="100" cy="180" rx="12" ry="8" fill="#fde68a" stroke="#78350f" stroke-width="2"/>
<path d="M300 160 L300 110" stroke="#16a34a" stroke-width="6"/>
<ellipse cx="285" cy="110" rx="16" ry="8" fill="#22c55e"/>
<ellipse cx="315" cy="105" rx="16" ry="8" fill="#22c55e"/>
<path d="M500 160 L500 80" stroke="#16a34a" stroke-width="6"/>
<ellipse cx="480" cy="125" rx="18" ry="9" fill="#22c55e"/>
<ellipse cx="520" cy="120" rx="18" ry="9" fill="#22c55e"/>
<circle cx="500" cy="65" r="22" fill="#fde047"/>
<g fill="#f472b6"><circle cx="500" cy="38" r="12"/><circle cx="527" cy="65" r="12"/><circle cx="473" cy="65" r="12"/><circle cx="500" cy="92" r="12"/></g>
<circle cx="500" cy="65" r="10" fill="#f59e0b"/>
<g font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">
<text x="100" y="212">1. PRIMA</text>
<text x="300" y="212">2. POI</text>
<text x="500" y="212">3. INFINE</text>
</g>
<text x="100" y="250" font-size="16" text-anchor="middle" fill="#14532d">il seme nella terra</text>
<text x="300" y="250" font-size="16" text-anchor="middle" fill="#14532d">spunta la piantina</text>
<text x="500" y="250" font-size="16" text-anchor="middle" fill="#14532d">ecco il fiore!</text>
</svg>`,
      caption: "Si legge da sinistra a destra: prima il seme, poi la piantina, infine il fiore. Non può succedere al contrario!"
    },
    {
      type: "text",
      title: "Come metto in ordine i fatti? Passo per passo",
      html: `<ol>
<li>🔎 <b>Guardo</b> tutti i fatti (o le figure).</li>
<li>🥇 Mi chiedo: <b>qual è la prima cosa</b> che è successa? Quella che deve succedere per forza prima delle altre.</li>
<li>➡️ Poi cerco quella che viene <b>subito dopo</b>.</li>
<li>🏁 Continuo fino all'<b>ultima</b>.</li>
<li>🗣️ Racconto la storia usando le parole <b>prima, poi, dopo, infine</b>: se suona bene, l'ordine è giusto!</li>
</ol>
<p>Un trucco: spesso una cosa viene prima perché <b>fa succedere</b> l'altra. Prima piove 🌧️, <b>per questo</b> dopo ci sono le pozzanghere.</p>`
    },
    {
      type: "example",
      title: "Esempio: la merenda 🥪",
      html: `<p>Mettiamo in ordine come si prepara un panino:</p>
<ol>
<li><b>Prima</b> mi lavo le mani 🧼.</li>
<li><b>Poi</b> taglio il pane 🍞 (con l'aiuto di un adulto).</li>
<li><b>Dopo</b> metto dentro il formaggio 🧀.</li>
<li><b>Infine</b> lo mangio! 😋</li>
</ol>
<p>Se lo mangio prima di prepararlo… non c'è niente da mangiare!</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: prima o dopo?",
      questions: [
        { type: "mc", q: "Che cosa viene prima?", options: ["Il pulcino 🐥", "L'uovo 🥚 che si schiude", "La gallina che fa coccodè"], answer: 1, explain: "Prima l'uovo si schiude, poi esce il pulcino, che crescendo diventa una gallina." },
        { type: "order", q: "Metti in ordine.", items: ["Mi sveglio", "Faccio colazione", "Vado a scuola"], explain: "Prima mi sveglio, poi faccio colazione, infine vado a scuola." },
        { type: "tf", q: "Prima mi metto le scarpe e dopo i calzini.", answer: false, explain: "Prima i calzini, poi le scarpe!" }
      ]
    },
    {
      type: "widget",
      title: "Abbina il prima al dopo",
      widget: "match",
      options: {
        pairs: [
          ["🥚 uovo", "🐥 pulcino"],
          ["🐛 bruco", "🦋 farfalla"],
          ["🌱 seme", "🌻 girasole"],
          ["🌧️ pioggia", "🌈 arcobaleno"],
          ["👶 neonato", "🧒 bambino"],
          ["🍞 impasto", "🥖 pane cotto"]
        ]
      },
      caption: "A sinistra quello che viene prima, a destra quello che viene dopo."
    },
    {
      type: "example",
      title: "Esempio: prima, adesso, dopo nella mia vita 🧒",
      html: `<ul>
<li>⏪ <b>Prima</b>: ero un neonato, bevevo il latte e non sapevo camminare.</li>
<li>⏺️ <b>Adesso</b>: vado in prima elementare e sto imparando a leggere e scrivere.</li>
<li>⏩ <b>Dopo</b>: andrò in seconda, poi alle medie… e da grande?</li>
</ul>
<p>Le cose di <b>prima</b> le possiamo ricordare o scoprire; quelle di <b>dopo</b> le possiamo solo immaginare!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🌋",
      html: `<p>Anche gli <b>storici</b> mettono in ordine i fatti, proprio come te! Per esempio: a <b>Pompei</b>, vicino a Napoli, il vulcano <b>Vesuvio</b> eruttò nel <b>79 d.C.</b> e coprì la città di cenere. Solo <b>dopo</b>, nel <b>80 d.C.</b>, a Roma fu inaugurato il <b>Colosseo</b>. Un anno di differenza!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 📚",
      html: `<p>In italiano leggiamo le storie a fumetti da <b>sinistra a destra</b>. Ma in <b>Giappone</b> i fumetti (i <b>manga</b>) si leggono da <b>destra a sinistra</b>! Il «prima» sta dall'altra parte. E i libri in <b>arabo</b> si sfogliano… dall'ultima pagina, secondo noi!</p>`
    },
    {
      type: "3d",
      title: "Prima e dopo nella storia d'Italia: la mappa 3D 🗺️",
      scene: "spacetime",
      caption: "La mappa è l'Italia. Più un fatto sta in alto, più è successo DOPO. Premi ▶ e guarda i fatti comparire uno dopo l'altro. Tocca un fatto per leggere la sua storia.",
      options: {
        lat: [37, 46.5],
        lon: [7, 18.5],
        years: [-800, 2000],
        places: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 40.85, lon: 14.27, label: "Napoli" },
          { lat: 43.72, lon: 10.4, label: "Pisa" },
          { lat: 45.07, lon: 7.69, label: "Torino" }
        ],
        events: [
          { id: "roma", lat: 41.89, lon: 12.49, year: -753, label: "Nasce Roma", html: "<p>Secondo la <b>leggenda</b>, Romolo fonda la città di <b>Roma</b>. È la cosa che viene <b>prima</b> di tutte le altre di questa mappa!</p>" },
          { id: "pompei", lat: 40.75, lon: 14.49, year: 79, label: "Il Vesuvio copre Pompei", html: "<p>Il vulcano <b>Vesuvio</b> erutta e copre la città di <b>Pompei</b> con la cenere. Sotto la cenere sono rimaste case, strade, forni e perfino pagnotte di pane!</p>" },
          { id: "colosseo", lat: 41.89, lon: 12.492, year: 80, label: "Il Colosseo", html: "<p>A Roma viene inaugurato il <b>Colosseo</b>, il più grande anfiteatro romano. Succede <b>un anno dopo</b> l'eruzione di Pompei.</p>", causes: ["roma"] },
          { id: "pisa", lat: 43.723, lon: 10.396, year: 1173, label: "Torre di Pisa", html: "<p>A Pisa si comincia a costruire il campanile. <b>Dopo</b> pochi anni il terreno morbido cede e la torre comincia a <b>pendere</b>: per questo oggi è famosa in tutto il mondo!</p>" },
          { id: "italia", lat: 45.07, lon: 7.69, year: 1861, label: "Nasce l'Italia unita", html: "<p>A <b>Torino</b> viene proclamato il <b>Regno d'Italia</b>: tante regioni diverse diventano un solo Paese. Dieci anni dopo la capitale sarà Roma.</p>", causes: ["roma"] },
          { id: "pizza", lat: 40.85, lon: 14.25, year: 1889, label: "La pizza Margherita", html: "<p>Si racconta che a Napoli un pizzaiolo prepari una pizza con pomodoro, mozzarella e basilico, i colori della bandiera, per la <b>regina Margherita</b>. Da allora si chiama <b>pizza Margherita</b>! 🍕</p>", causes: ["italia"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Sei un fornaio di Pompei, quasi 2000 anni fa 🍞",
      html: `<p>Nel tuo forno ci sono: i <b>chicchi di grano</b>, una grossa <b>macina di pietra</b>, l'<b>acqua</b> e il <b>forno</b> a legna. I clienti vogliono il pane per pranzo!</p>`,
      question: "Che cosa fai PRIMA di tutto?",
      options: [
        { label: "Metto i chicchi di grano nel forno a cuocere.", outcome: "Ottieni chicchi abbrustoliti… ma non il pane! Il pane si fa con la farina." },
        { label: "Macino il grano per fare la farina.", outcome: "Giusto! Poi impasti la farina con l'acqua, lasci lievitare e infine cuoci nel forno." },
        { label: "Vendo subito il pane ai clienti.", outcome: "Ma il pane non c'è ancora! Prima bisogna prepararlo." }
      ],
      answer: 1,
      explain: "A Pompei gli archeologi hanno trovato dei forni con le macine di pietra a forma di clessidra, che venivano girate da asini o da persone. L'ordine era sempre lo stesso: <b>prima</b> macinare il grano, <b>poi</b> impastare, <b>dopo</b> lasciar crescere l'impasto, <b>infine</b> cuocere. In un forno è stata trovata perfino una pagnotta rimasta lì dal 79 d.C., diventata nera come il carbone!"
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>I fatti succedono uno dopo l'altro: questo si chiama <b>successione</b>.</li>
<li>Parole del tempo: <b>prima</b>, <b>adesso</b>, <b>poi</b>, <b>dopo</b>, <b>infine</b>.</li>
<li>Spesso quello che succede prima <b>è la causa</b> di quello che succede dopo.</li>
<li>Gli storici mettono in ordine i fatti del passato, proprio come noi.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire prima e dopo 🌈",
      intro: "<p>Scegli il modo che ti aiuta di più.</p>",
      tabs: [
        {
          label: "🔢 Come la fila",
          html: `<p>Pensa alla <b>fila per lo scivolo</b> 🛝: chi arriva <b>prima</b> scivola prima, chi arriva <b>dopo</b> aspetta. Il tempo è come una fila di momenti!</p>
<p>Sulla retta dei numeri, il «prima» sta a <b>sinistra</b> e il «dopo» a <b>destra</b>: l'1 viene prima del 2, il 2 prima del 3…</p>`,
          widget: "numberLine",
          options: { min: 0, max: 10, step: 1, marks: [1, 2, 3] }
        },
        {
          label: "🇯🇵 Il fumetto giapponese",
          html: `<p>Nei <b>manga</b> giapponesi le vignette si leggono da <b>destra a sinistra</b>. Quindi lo stesso fumetto ha un significato diverso se lo leggi nel verso sbagliato!</p>
<p>Guarda: da destra a sinistra il gelato si scioglie; letto all'italiana, sembrerebbe che si «ricomponga»!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fff7ed"/>
<rect x="15" y="20" width="180" height="150" rx="10" fill="#ffffff" stroke="#111827" stroke-width="3"/>
<rect x="210" y="20" width="180" height="150" rx="10" fill="#ffffff" stroke="#111827" stroke-width="3"/>
<rect x="405" y="20" width="180" height="150" rx="10" fill="#ffffff" stroke="#111827" stroke-width="3"/>
<polygon points="475,110 515,110 495,160" fill="#d97706"/>
<circle cx="495" cy="95" r="26" fill="#f9a8d4"/>
<polygon points="280,110 320,110 300,160" fill="#d97706"/>
<ellipse cx="300" cy="105" rx="28" ry="14" fill="#f9a8d4"/>
<path d="M285 115 Q288 135 292 118" fill="#f9a8d4"/>
<polygon points="85,110 125,110 105,160" fill="#d97706"/>
<ellipse cx="105" cy="162" rx="40" ry="8" fill="#f9a8d4"/>
<text x="495" y="200" font-size="18" text-anchor="middle" font-weight="bold" fill="#b91c1c">1 (inizio)</text>
<text x="300" y="200" font-size="18" text-anchor="middle" font-weight="bold" fill="#b91c1c">2</text>
<text x="105" y="200" font-size="18" text-anchor="middle" font-weight="bold" fill="#b91c1c">3 (fine)</text>
<path d="M560 210 L40 210" stroke="#b91c1c" stroke-width="2"/>
<path d="M52 203 L40 210 L52 217" stroke="#b91c1c" stroke-width="2" fill="none"/>
</svg>`
        },
        {
          label: "📏 La linea del tempo",
          html: `<p>Gli storici mettono i fatti su una <b>linea</b>: a sinistra quelli più antichi, a destra quelli più recenti. Tocca i fatti per vedere l'anno.</p>`,
          widget: "timeline",
          options: {
            events: [
              { year: -753, label: "Nasce Roma", icon: "🐺" },
              { year: 80, label: "Colosseo", icon: "🏟️" },
              { year: 1173, label: "Torre di Pisa", icon: "🗼" },
              { year: 1861, label: "Italia unita", icon: "🇮🇹" },
              { year: 1969, label: "Uomo sulla Luna", icon: "🌕" }
            ]
          }
        },
        {
          label: "🎭 Recita la storia",
          html: `<p>Scegli una storia semplice (per esempio <i>Cappuccetto Rosso</i>) e dividetevi in gruppo: ognuno disegna una scena su un foglio.</p>
<p>Poi mescolate i fogli e provate a rimetterli in fila, dicendo ad alta voce: «<b>Prima</b>… <b>poi</b>… <b>dopo</b>… <b>infine</b>…». Se la storia non ha senso, l'ordine è sbagliato!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa del tempo che passa 🗺️",
      nodes: [
        { id: "tempo", label: "Il tempo", x: 50, y: 6, color: "#f59e0b", html: "<p>Le cose cambiano e succedono una dopo l'altra: questo è il tempo che passa.</p>", why: "<p>Non possiamo vedere né toccare il tempo, ma ce ne accorgiamo perché le cose <b>cambiano</b>: cresciamo, le piante fioriscono, il giorno diventa notte.</p>" },
        { id: "prima", label: "Prima (passato)", x: 15, y: 30, color: "#3b82f6", html: "<p>Quello che è già successo.</p>", why: "<p>Il passato lo conosciamo grazie ai <b>ricordi</b>, ai racconti e alle <b>tracce</b> che ha lasciato (foto, oggetti, rovine).</p>" },
        { id: "adesso", label: "Adesso (presente)", x: 50, y: 30, color: "#22c55e", html: "<p>Quello che succede in questo momento.</p>", why: "<p>Il presente dura pochissimo: appena hai finito di leggere questa frase… è già diventato passato!</p>" },
        { id: "dopo", label: "Dopo (futuro)", x: 85, y: 30, color: "#a855f7", html: "<p>Quello che deve ancora succedere.</p>", why: "<p>Il futuro non lo conosciamo ancora: possiamo solo prevederlo o immaginarlo.</p>" },
        { id: "successione", label: "La successione", x: 30, y: 58, color: "#ef4444", html: "<p>L'ordine in cui succedono i fatti: primo, secondo, terzo…</p>", why: "<p>Una cosa non può succedere prima di quello che la fa nascere: il pulcino non c'è prima dell'uovo che si schiude.</p>" },
        { id: "causa", label: "Causa ed effetto", x: 70, y: 58, color: "#ec4899", html: "<p>Quello che succede prima a volte <b>fa succedere</b> quello dopo.</p>", why: "<p>Piove (causa) → ci sono le pozzanghere (effetto). Gli storici cercano sempre le cause dei fatti.</p>" },
        { id: "parole", label: "Le parole del tempo", x: 20, y: 88, color: "#0ea5e9", html: "<p>Prima, poi, dopo, infine, intanto, mentre…</p>", why: "<p>Ogni lingua ha queste parole perché tutte le persone hanno bisogno di raccontare in ordine quello che succede.</p>" },
        { id: "linea", label: "La linea del tempo", x: 55, y: 88, color: "#14b8a6", html: "<p>Una riga su cui mettiamo i fatti in ordine: a sinistra i più antichi.</p>", why: "<p>È lo strumento principale degli storici: aiuta a vedere a colpo d'occhio che cosa viene prima e che cosa dopo.</p>" },
        { id: "storia", label: "La storia", x: 88, y: 88, color: "#a16207", html: "<p>Il racconto in ordine dei fatti del passato.</p>", why: "<p>Il primo grande storico greco, <b>Erodoto</b>, quasi 2500 anni fa, volle raccontare in ordine i fatti «perché non si perdesse il ricordo» delle imprese degli uomini.</p>" }
      ],
      edges: [
        ["tempo", "prima", ""],
        ["tempo", "adesso", ""],
        ["tempo", "dopo", ""],
        ["prima", "successione", "in fila"],
        ["successione", "causa", "a volte"],
        ["successione", "parole", "si racconta con"],
        ["successione", "linea", "si disegna sulla"],
        ["linea", "storia", "aiuta la"],
        ["causa", "storia", "spiega la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parole del tempo",
      questions: [
        { type: "mc", q: "Quale parola usi per l'ultima cosa?", options: ["Prima", "Infine", "Adesso"], answer: 1, explain: "«Infine» indica l'ultima cosa." },
        { type: "order", q: "Metti in ordine la vita della farfalla.", items: ["Uovo", "Bruco", "Bozzolo", "Farfalla"], explain: "Uovo, bruco, bozzolo (crisalide), farfalla." },
        { type: "mc", q: "Che cosa è successo prima?", options: ["L'eruzione del Vesuvio a Pompei (79 d.C.)", "L'inaugurazione del Colosseo (80 d.C.)"], answer: 0, explain: "79 viene prima di 80: l'eruzione è successa un anno prima." }
      ]
    }
  ],
  glossary: [
    { t: "Prima", d: "In un momento che è già passato." },
    { t: "Adesso", d: "In questo momento." },
    { t: "Dopo", d: "In un momento che verrà." },
    { t: "Successione", d: "L'ordine in cui i fatti succedono, uno dopo l'altro." },
    { t: "Causa", d: "Ciò che fa succedere qualcosa." },
    { t: "Effetto", d: "Ciò che succede a causa di qualcos'altro." },
    { t: "Linea del tempo", d: "Una riga su cui si mettono i fatti in ordine." },
    { t: "Storico", d: "Chi studia e racconta i fatti del passato." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine la mattina.", items: ["Suona la sveglia", "Mi lavo la faccia", "Faccio colazione", "Esco di casa"], explain: "Sveglia, faccia, colazione, uscita." },
      { type: "order", q: "Metti in ordine la crescita della pianta.", items: ["Seme", "Germoglio", "Piantina", "Fiore"], explain: "Seme, germoglio, piantina, fiore." },
      { type: "mc", q: "«Adesso» vuol dire…", options: ["ieri", "in questo momento", "domani"], answer: 1, explain: "Adesso = ora, in questo momento." },
      { type: "mc", q: "Quale viene prima?", options: ["Bere la spremuta", "Spremere l'arancia"], answer: 1, explain: "Prima si spreme l'arancia, poi si beve la spremuta." },
      { type: "tf", q: "Il bruco diventa farfalla: il bruco viene prima.", answer: true, explain: "Sì, prima c'è il bruco, poi la farfalla." },
      { type: "tf", q: "Prima mangio il gelato, poi lo compro.", answer: false, explain: "Prima si compra, poi si mangia!" },
      { type: "text", q: "Completa: prima, poi, dopo, …", answer: ["infine", "alla fine", "per ultimo"], explain: "Infine: l'ultima cosa." },
      { type: "mc", q: "Piove tanto. Che cosa succede dopo?", options: ["Ci sono le pozzanghere", "Il sole si spegne", "Nevica d'estate"], answer: 0, explain: "La pioggia (causa) fa le pozzanghere (effetto)." },
      { type: "mc", q: "Nel fornaio di Pompei, che cosa si faceva per ultimo?", options: ["Macinare il grano", "Impastare", "Cuocere nel forno"], answer: 2, explain: "Macinare, impastare, far lievitare e infine cuocere." },
      { type: "mc", q: "Sulla linea del tempo, i fatti più antichi stanno…", options: ["a sinistra", "a destra", "in mezzo"], answer: 0, explain: "I fatti più antichi stanno a sinistra." },
      { type: "order", q: "Metti in ordine questi fatti della storia d'Italia.", items: ["Nasce Roma", "Il Vesuvio copre Pompei", "Si costruisce la Torre di Pisa", "Nasce l'Italia unita"], explain: "753 a.C., 79 d.C., 1173, 1861." }
    ]
  }
});

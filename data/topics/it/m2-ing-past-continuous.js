TOPIC('it', {
  id: "m2-ing-past-continuous",
  title: "Past continuous",
  intro: "«Cosa stavi facendo ieri alle 8?» Per raccontare un'azione <b>in corso</b> in un momento del passato, l'inglese usa il <b>past continuous</b>: <i>I was having breakfast</i>. È il tempo perfetto per descrivere lo <b>sfondo</b> di una storia, mentre il past simple racconta i <b>fatti</b> che accadono.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Come si forma",
      html: `<p>Il past continuous si forma con il <b>passato di to be</b> (<b>was / were</b>) + il verbo in <b>-ing</b>.</p>
<table>
<tr><th>Affermativa</th><th>Negativa</th><th>Interrogativa</th></tr>
<tr><td>I / He / She / It <b>was</b> playing</td><td>I <b>wasn't</b> (was not) playing</td><td><b>Was</b> she playing?</td></tr>
<tr><td>You / We / They <b>were</b> playing</td><td>They <b>weren't</b> (were not) playing</td><td><b>Were</b> they playing?</td></tr>
</table>
<p>Risposte brevi: <i>Yes, I was. / No, I wasn't. Yes, they were. / No, they weren't.</i></p>
<p>È come il <b>present continuous</b> (<i>I am playing</i>), ma con am/is/are «spostati nel passato»: <b>am/is → was</b>, <b>are → were</b>.</p>`
    },
    {
      type: "text",
      title: "Le regole dell'-ing (ripasso)",
      html: `<ul>
<li>Di solito si aggiunge <b>-ing</b>: play → playing, read → reading.</li>
<li>Verbi che finiscono in <b>-e</b> muta: si toglie la e → write → writ<b>ing</b>, dance → danc<b>ing</b>.</li>
<li>Verbi brevi con <b>consonante-vocale-consonante</b> e accento sull'ultima sillaba: si raddoppia la consonante → run → ru<b>nn</b>ing, swim → swi<b>mm</b>ing, stop → sto<b>pp</b>ing.</li>
<li>Verbi in <b>-ie</b>: ie → <b>y</b> → lie → l<b>y</b>ing, die → d<b>y</b>ing.</li>
</ul>`
    },
    {
      type: "text",
      title: "Quando si usa",
      html: `<ol>
<li><b>Azione in corso in un momento preciso del passato</b>: <i>At 9 o'clock last night I <b>was watching</b> TV.</i> (Alle 9 ero nel mezzo della visione.)</li>
<li><b>Azione lunga interrotta da una breve</b> (past continuous + <b>when</b> + past simple): <i>I <b>was taking</b> a shower <b>when</b> the phone <b>rang</b>.</i></li>
<li><b>Due azioni lunghe contemporanee</b> (con <b>while</b>): <i><b>While</b> Mum <b>was cooking</b>, Dad <b>was reading</b>.</i></li>
<li><b>Descrivere lo sfondo</b> di un racconto: <i>It <b>was raining</b> and the wind <b>was blowing</b>…</i></li>
</ol>
<p>Parole spia: <b>while</b> (mentre) di solito con l'azione lunga; <b>when</b> (quando) di solito con l'azione breve.</p>`
    },
    {
      type: "svg",
      title: "L'azione lunga e il fulmine",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<line x1="30" y1="200" x2="560" y2="200" stroke="#334155" stroke-width="4"/>
<polygon points="560,190 585,200 560,210" fill="#334155"/>
<text x="500" y="235" font-size="16" fill="#334155">NOW</text>
<text x="60" y="235" font-size="16" fill="#334155">past</text>
<path d="M90 160 Q 115 130 140 160 T 190 160 T 240 160 T 290 160 T 340 160 T 390 160" fill="none" stroke="#2563eb" stroke-width="6"/>
<text x="240" y="110" font-size="20" font-weight="bold" fill="#1d4ed8" text-anchor="middle">I was taking a shower…</text>
<text x="240" y="135" font-size="15" fill="#1d4ed8" text-anchor="middle">past continuous = azione lunga</text>
<polygon points="300,40 270,120 295,120 280,190 330,100 302,100 320,40" fill="#facc15" stroke="#a16207" stroke-width="3"/>
<text x="420" y="60" font-size="20" font-weight="bold" fill="#b45309">…when the phone rang!</text>
<text x="420" y="85" font-size="15" fill="#b45309">past simple = azione breve</text>
<circle cx="300" cy="200" r="9" fill="#dc2626"/>
<text x="300" y="270" font-size="17" fill="#111827" text-anchor="middle">l'azione breve interrompe quella lunga</text>
</svg>`,
      caption: "L'onda blu è l'azione in corso (past continuous); il fulmine giallo è l'evento improvviso (past simple)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: was o were?",
      questions: [
        { type: "mc", q: "They ___ playing football at 5 p.m.", options: ["was", "were", "are"], answer: 1, explain: "Con they si usa were." },
        { type: "mc", q: "Qual è l'-ing corretto di «swim»?", options: ["swiming", "swimming", "swimeing"], answer: 1, explain: "Consonante-vocale-consonante: si raddoppia la m → swimming." },
        { type: "tf", q: "«She wasn't sleeping» è la forma negativa del past continuous.", answer: true, explain: "Was not → wasn't + -ing." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: l'alibi del detective",
      html: `<p>Qualcuno ha mangiato la torta! L'ispettore interroga la famiglia: <i>What were you doing at 4 p.m.?</i></p>
<ul>
<li>Grandma: <i>I <b>was sleeping</b> on the sofa.</i></li>
<li>Tom: <i>I <b>was doing</b> my homework in my room.</i></li>
<li>The twins: <i>We <b>were playing</b> in the garden.</i></li>
<li>The dog: <i>Woof!</i> (e aveva la panna sul naso 🐶🍰)</li>
</ul>
<p>Ogni risposta descrive un'azione <b>in corso</b> in un momento preciso del passato (le 4 del pomeriggio).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'inizio di una storia",
      html: `<p><i>It <b>was</b> a cold winter night. The snow <b>was falling</b> softly and the wind <b>was blowing</b> through the trees. Anna <b>was reading</b> by the fire <b>while</b> her cat <b>was sleeping</b> on the carpet. Suddenly, someone <b>knocked</b> at the door…</i></p>
<p>Le prime frasi al past continuous creano l'<b>atmosfera</b> (lo sfondo). Poi il past simple <b>knocked</b> fa partire l'<b>azione</b>: succede qualcosa!</p>`
    },
    {
      type: "widget",
      title: "Past simple o past continuous?",
      widget: "classify",
      options: {
        groups: ["Azione lunga / sfondo (past continuous)", "Evento breve (past simple)"],
        items: [
          ["🌧️ It was raining", 0],
          ["🔔 the bell rang", 1],
          ["🚲 I was riding my bike", 0],
          ["💥 I fell off", 1],
          ["🎹 she was playing the piano", 0],
          ["🔌 the lights went out", 1],
          ["😴 we were sleeping", 0],
          ["📩 a message arrived", 1]
        ]
      },
      caption: "Separa le azioni che «durano» da quelle che «scattano» all'improvviso."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? «What were you doing when…?»",
      html: `<p>In inglese esiste una domanda famosissima: <i>What were you doing when…?</i> («Cosa stavi facendo quando…?»). Si usa per gli eventi che tutti ricordano.</p>
<p>Il <b>20 luglio 1969</b>, quando Neil Armstrong mise piede sulla Luna, circa <b>600 milioni</b> di persone in tutto il mondo stavano guardando la diretta TV. Chi c'era racconta ancora: <i>I <b>was watching</b> TV with my family when he <b>stepped</b> on the Moon!</i></p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Alcuni verbi non vogliono l'-ing",
      html: `<p>I <b>verbi di stato</b> (stative verbs) descrivono pensieri, sentimenti, possesso: <i>know, like, love, hate, want, believe, understand, own</i>. Di solito <b>non</b> si usano nella forma continuous.</p>
<p>✅ <i>I <b>knew</b> the answer.</i> ❌ <i>I was knowing the answer.</i></p>
<p>Il motivo? Non sono «azioni in corso», ma <b>stati</b>: sapere qualcosa non è un'attività che si fa per un po' e poi si interrompe.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>was / were + verbo-ing</b>: I/he/she/it <b>was</b>; you/we/they <b>were</b>.</li>
<li>Usi: azione in corso a un'ora precisa, azione lunga interrotta (<b>when</b>), azioni contemporanee (<b>while</b>), sfondo di un racconto.</li>
<li>Azione lunga = past continuous; azione breve che interrompe = past simple.</li>
<li>Niente continuous con i verbi di stato (know, like, want…).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il past continuous",
      intro: "Il past continuous diventa facilissimo se lo colleghi all'italiano, a un film o a un'altra lingua.",
      tabs: [
        {
          label: "🇮🇹 Stavo facendo",
          html: `<p>Il past continuous corrisponde quasi sempre all'italiano <b>stavo + gerundio</b> o all'<b>imperfetto</b>:</p>
<table>
<tr><th>Inglese</th><th>Italiano</th></tr>
<tr><td>I <b>was reading</b>.</td><td>Stavo leggendo / Leggevo.</td></tr>
<tr><td>They <b>were running</b>.</td><td>Stavano correndo / Correvano.</td></tr>
<tr><td>I was reading <b>when</b> she <b>called</b>.</td><td>Leggevo quando lei ha chiamato.</td></tr>
</table>
<p>Trucco: se in italiano puoi dire «<b>stavo …-ndo</b>», in inglese ci sta il past continuous. Attenzione però: l'imperfetto italiano si usa anche per le <b>abitudini</b> («da piccolo giocavo a calcio»): in quel caso l'inglese usa il past simple o <i>used to</i>, non il past continuous!</p>`
        },
        {
          label: "🎬 Il film",
          html: `<p>Pensa a un film:</p>
<ul>
<li>il <b>past continuous</b> è la <b>scenografia</b> e la musica di sottofondo: la pioggia che cade, la gente che cammina, il bambino che gioca;</li>
<li>il <b>past simple</b> sono le <b>azioni dei protagonisti</b> che fanno andare avanti la trama: qualcuno entra, urla, scappa.</li>
</ul>
<p>Prima il regista mostra lo sfondo (<i>People were walking in the park…</i>), poi arriva l'azione (<i>…when a dragon appeared!</i>).</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#111827"/>
<rect x="40" y="30" width="520" height="190" fill="#bfdbfe"/>
<rect x="40" y="170" width="520" height="50" fill="#86efac"/>
<line x1="80" y1="40" x2="70" y2="70" stroke="#2563eb" stroke-width="3"/>
<line x1="160" y1="40" x2="150" y2="70" stroke="#2563eb" stroke-width="3"/>
<line x1="240" y1="40" x2="230" y2="70" stroke="#2563eb" stroke-width="3"/>
<circle cx="120" cy="150" r="14" fill="#f59e0b"/>
<line x1="120" y1="164" x2="120" y2="195" stroke="#111827" stroke-width="5"/>
<circle cx="430" cy="120" r="40" fill="#16a34a"/>
<text x="430" y="135" font-size="40" text-anchor="middle">🐉</text>
<text x="200" y="120" font-size="17" fill="#1e3a8a" text-anchor="middle">people were walking</text>
<text x="430" y="200" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">a dragon appeared!</text>
<text x="300" y="248" font-size="16" fill="#f9fafb" text-anchor="middle">sfondo = past continuous · azione = past simple</text>
</svg>`
        },
        {
          label: "🇪🇸🇫🇷 Altre lingue",
          html: `<p>Molte lingue europee hanno un «passato in corso»:</p>
<ul>
<li>🇪🇸 Spagnolo: <i>Yo <b>estaba comiendo</b> cuando sonó el teléfono.</i> (estar + gerundio, come l'italiano!)</li>
<li>🇫🇷 Francese: <i>J'<b>étais en train de</b> manger quand le téléphone a sonné.</i> (oppure l'imparfait <i>je mangeais</i>)</li>
<li>🇬🇧 Inglese: <i>I <b>was eating</b> when the phone rang.</i></li>
</ul>
<p>La struttura è sempre: <b>verbo «essere/stare» al passato + forma in -ndo/-ing</b>.</p>`
        },
        {
          label: "🎮 Abbina le metà",
          html: `<p>Collega l'inizio di ogni frase (azione lunga) alla sua interruzione (azione breve).</p>`,
          widget: "match",
          options: { pairs: [
            ["I was walking home", "when it started to rain."],
            ["We were having dinner", "when the lights went out."],
            ["She was sleeping", "when the alarm rang."],
            ["They were swimming", "when they saw a dolphin."],
            ["He was cooking", "when he burnt his finger."]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del past continuous",
      nodes: [
        { id: "pc", label: "Past continuous", x: 50, y: 8, color: "#2563eb", html: "Tempo che indica un'azione in corso in un momento del passato.", why: "Unisce due idee: il passato (was/were) e l'azione «in svolgimento» (-ing). In grammatica si dice che ha aspetto <b>progressivo</b>: guarda l'azione dall'interno, mentre accade." },
        { id: "wasw", label: "was / were", x: 20, y: 30, color: "#f97316", html: "Passato di to be: was con I/he/she/it, were con you/we/they.", why: "To be è il verbo più irregolare dell'inglese: was e were vengono da un antico verbo germanico <i>wesan</i> (essere), parente del tedesco <i>war/waren</i>." },
        { id: "ing", label: "verbo + -ing", x: 80, y: 30, color: "#a855f7", html: "Il participio presente: playing, writing, running.", why: "La desinenza -ing deriva dall'inglese antico -ende/-ung. Nel medioevo le due forme si fusero; la costruzione «be + -ing» si diffuse soprattutto dal 1600 in poi." },
        { id: "momento", label: "Ora precisa", x: 10, y: 58, color: "#14b8a6", html: "At 8 o'clock I was having breakfast.", why: "Se indichi un istante preciso, l'azione era già cominciata e non ancora finita: per questo serve la forma «in corso»." },
        { id: "interrotta", label: "Azione interrotta (when)", x: 37, y: 62, color: "#ef4444", html: "I was reading when the phone rang.", why: "Un'azione lunga fa da cornice; una breve (past simple) entra nella cornice e la interrompe." },
        { id: "while", label: "Azioni parallele (while)", x: 63, y: 62, color: "#22c55e", html: "While I was studying, my sister was singing.", why: "While significa «durante il tempo in cui»: collega due azioni che durano nello stesso periodo." },
        { id: "sfondo", label: "Sfondo del racconto", x: 90, y: 58, color: "#0ea5e9", html: "It was raining and people were running…", why: "Gli scrittori usano il past continuous per creare l'atmosfera prima che inizi l'azione: è lo stesso ruolo dell'imperfetto descrittivo in italiano." },
        { id: "ps", label: "Past simple", x: 37, y: 88, color: "#eab308", html: "Azione breve e conclusa: the phone rang.", why: "Il past simple guarda l'azione «da fuori», come un punto completo: per questo è perfetto per i fatti che fanno avanzare la storia." },
        { id: "stative", label: "Verbi di stato", x: 75, y: 88, color: "#64748b", html: "know, like, want, believe: di solito senza -ing.", why: "Indicano stati, non attività: non c'è un «mentre lo stavo sapendo». Per questo non hanno la forma progressiva." }
      ],
      edges: [
        ["pc", "wasw", "si forma con"],
        ["pc", "ing", "+"],
        ["pc", "momento", "uso"],
        ["pc", "interrotta", "uso"],
        ["pc", "while", "uso"],
        ["pc", "sfondo", "uso"],
        ["interrotta", "ps", "interrotta da"],
        ["ing", "stative", "eccezione"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: when o while?",
      questions: [
        { type: "mc", q: "I was cooking ___ the doorbell rang.", options: ["while", "when", "during"], answer: 1, explain: "When introduce l'azione breve che interrompe (the doorbell rang)." },
        { type: "mc", q: "___ I was studying, my brother was playing video games.", options: ["While", "When", "Then"], answer: 0, explain: "Due azioni lunghe contemporanee → While." },
        { type: "tf", q: "«I was knowing the answer» è corretto.", answer: false, explain: "Know è un verbo di stato: si dice I knew the answer." }
      ]
    }
  ],
  glossary: [
    { t: "Past continuous", d: "Tempo verbale per azioni in corso nel passato: was/were + -ing." },
    { t: "was / were", d: "Passato di to be: was per I/he/she/it, were per you/we/they." },
    { t: "-ing form", d: "Forma del verbo con -ing (playing): serve per i tempi continuous." },
    { t: "when", d: "Quando: spesso introduce l'azione breve al past simple." },
    { t: "while", d: "Mentre: spesso introduce un'azione lunga al past continuous." },
    { t: "Past simple", d: "Passato semplice: azioni brevi e concluse (I played, I went)." },
    { t: "Stative verbs", d: "Verbi di stato (know, like, want): di solito non vanno al continuous." },
    { t: "Aspetto progressivo", d: "Modo di guardare un'azione mentre si svolge, dall'interno." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "At 7 p.m. yesterday I ___ dinner.", options: ["was having", "were having", "am having"], answer: 0, explain: "Con I si usa was: I was having dinner." },
      { type: "mc", q: "We ___ watching a film when the power went off.", options: ["was", "were", "are"], answer: 1, explain: "Con we si usa were." },
      { type: "text", q: "Scrivi la forma in -ing di «write».", answer: ["writing"], explain: "Si toglie la e muta: writing." },
      { type: "mc", q: "Qual è la domanda corretta?", options: ["Were you sleeping?", "Did you sleeping?", "You were sleeping?"], answer: 0, explain: "Nella domanda was/were va prima del soggetto: Were you sleeping?" },
      { type: "tf", q: "Nella frase «She was reading when I arrived», l'azione interrotta è «arrived».", answer: false, explain: "L'azione interrotta (lunga) è «was reading»; «arrived» è l'azione breve che interrompe." },
      { type: "mc", q: "It ___ heavily when we left the house.", options: ["rained", "was raining", "were raining"], answer: 1, explain: "La pioggia è lo sfondo in corso quando siamo usciti: was raining." },
      { type: "mc", q: "Forma negativa di «They were dancing»:", options: ["They didn't dancing.", "They weren't dancing.", "They wasn't dancing."], answer: 1, explain: "Were not → weren't + -ing." },
      { type: "text", q: "Completa con when o while: «___ Dad was driving, we were singing.»", answer: ["while"], explain: "Due azioni lunghe contemporanee: while." },
      { type: "order", q: "Metti in ordine le parole.", items: ["What", "were", "you", "doing", "at", "nine", "o'clock?"], explain: "Wh-word + were + soggetto + -ing + tempo." },
      { type: "mc", q: "Scegli la frase corretta.", options: ["I was wanting an ice cream.", "I wanted an ice cream.", "I were wanting an ice cream."], answer: 1, explain: "Want è un verbo di stato: si usa il past simple." },
      { type: "text", q: "Scrivi la forma in -ing di «run».", answer: ["running"], explain: "Consonante-vocale-consonante: si raddoppia la n → running." },
      { type: "tf", q: "Il past continuous si traduce spesso con «stavo + gerundio».", answer: true, explain: "I was reading = stavo leggendo." }
    ]
  }
});

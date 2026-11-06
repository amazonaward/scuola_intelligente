TOPIC('it', {
  id: "p4-ing-present-continuous",
  title: "What are you doing?",
  intro: "Squilla il telefono: <i>«Hi Tom! What are you doing?»</i> 📱 – <i>«I'm playing football!»</i> ⚽ Per raccontare quello che sta succedendo <b>proprio adesso</b> l'inglese usa un tempo speciale: il <b>present continuous</b>. È facile, perché funziona quasi come il nostro <b>\"sto giocando\"</b>!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. A che cosa serve",
      html: `<p>Il <b>present continuous</b> serve per dire che cosa <b>sta succedendo adesso</b>, mentre parliamo.</p>
<p>👧 <b>I'm reading a book.</b> = Sto leggendo un libro (adesso).<br>
🐶 <b>The dog is sleeping.</b> = Il cane sta dormendo.<br>
🌧️ <b>It's raining!</b> = Sta piovendo!</p>
<p>Parole "spia" che spesso lo accompagnano: <b>now</b> (adesso), <b>right now</b> (proprio adesso), <b>at the moment</b> (in questo momento), <b>Look!</b> (Guarda!), <b>Listen!</b> (Ascolta!).</p>`
    },
    {
      type: "text",
      title: "2. Come si costruisce: am / is / are + -ing",
      html: `<p>Servono due pezzi, proprio come in italiano "<b>sto</b> + <b>giocando</b>":</p>
<ol>
<li>il verbo <b>to be</b> (essere) al presente: <b>am, is, are</b>;</li>
<li>il verbo dell'azione con la desinenza <b>-ing</b>: play → <b>playing</b>.</li>
</ol>
<table>
<tr><th>Forma lunga</th><th>Forma breve</th><th>Italiano</th></tr>
<tr><td>I <b>am</b> play<b>ing</b></td><td>I'm playing</td><td>io sto giocando</td></tr>
<tr><td>You <b>are</b> play<b>ing</b></td><td>you're playing</td><td>tu stai giocando</td></tr>
<tr><td>He / She / It <b>is</b> play<b>ing</b></td><td>he's / she's / it's playing</td><td>lui / lei sta giocando</td></tr>
<tr><td>We <b>are</b> play<b>ing</b></td><td>we're playing</td><td>noi stiamo giocando</td></tr>
<tr><td>They <b>are</b> play<b>ing</b></td><td>they're playing</td><td>loro stanno giocando</td></tr>
</table>
<p>Nelle conversazioni si usa quasi sempre la <b>forma breve</b> con l'apostrofo.</p>`
    },
    {
      type: "svg",
      title: "La formula del present continuous",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f5f3ff"/>
<rect x="20" y="40" width="140" height="80" rx="14" fill="#93c5fd" stroke="#1d4ed8" stroke-width="3"/>
<text x="90" y="90" font-size="28" font-weight="bold" fill="#1e3a8a" text-anchor="middle">She</text>
<text x="180" y="92" font-size="34" font-weight="bold" fill="#1e293b">+</text>
<rect x="210" y="40" width="160" height="80" rx="14" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="290" y="90" font-size="28" font-weight="bold" fill="#92400e" text-anchor="middle">is</text>
<text x="390" y="92" font-size="34" font-weight="bold" fill="#1e293b">+</text>
<rect x="420" y="40" width="160" height="80" rx="14" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="500" y="90" font-size="26" font-weight="bold" fill="#14532d" text-anchor="middle">dancing</text>
<text x="90" y="150" font-size="16" fill="#1e3a8a" text-anchor="middle">chi?</text>
<text x="290" y="150" font-size="16" fill="#92400e" text-anchor="middle">am / is / are</text>
<text x="500" y="150" font-size="16" fill="#14532d" text-anchor="middle">verbo + ing</text>
<text x="300" y="200" font-size="22" fill="#1e293b" text-anchor="middle">Lei <tspan font-weight="bold" fill="#b45309">sta</tspan> <tspan font-weight="bold" fill="#15803d">ballando</tspan> 💃</text>
<text x="300" y="240" font-size="18" fill="#6d28d9" text-anchor="middle">come in italiano: stare + gerundio</text>
</svg>`,
      caption: "Chi + am/is/are + verbo con -ing. In italiano: chi + sto/stai/sta + verbo in -ando/-endo."
    },
    {
      type: "text",
      title: "3. Le regole dell'-ing (spelling)",
      html: `<p>Quasi sempre basta aggiungere <b>-ing</b>: read → <b>reading</b>, eat → <b>eating</b>, play → <b>playing</b>. Ma ci sono tre regolette:</p>
<ul>
<li>✂️ Il verbo finisce in <b>-e muta</b>? <b>Togli la e</b>: write → <b>writing</b>, dance → <b>dancing</b>, make → <b>making</b>, ride → <b>riding</b>.</li>
<li>✌️ Il verbo è corto e finisce con <b>vocale + consonante</b>? <b>Raddoppia</b> la consonante: swim → <b>swimming</b>, run → <b>running</b>, sit → <b>sitting</b>, get → <b>getting</b>, stop → <b>stopping</b>.</li>
<li>🔄 Il verbo finisce in <b>-ie</b>? Diventa <b>-ying</b>: lie → <b>lying</b> (stare sdraiato), die → <b>dying</b>.</li>
</ul>
<p>Attenzione: <b>non</b> si raddoppia con w, x, y finali: play → playing, snow → snowing, fix → fixing.</p>`
    },
    {
      type: "widget",
      title: "Che regola segue?",
      widget: "classify",
      options: {
        groups: ["➕ aggiungo -ing", "✂️ tolgo la -e", "✌️ raddoppio la consonante"],
        items: [
          ["read → reading", 0],
          ["play → playing", 0],
          ["eat → eating", 0],
          ["sing → singing", 0],
          ["write → writing", 1],
          ["dance → dancing", 1],
          ["make → making", 1],
          ["ride → riding", 1],
          ["swim → swimming", 2],
          ["run → running", 2],
          ["sit → sitting", 2],
          ["stop → stopping", 2]
        ]
      },
      caption: "Tocca un verbo e poi la regola giusta."
    },
    {
      type: "quiz",
      title: "Mini-quiz: costruire la frase",
      questions: [
        { type: "mc", q: "Completa: «They ___ watching TV.»", options: ["am", "is", "are"], answer: 2, explain: "Con they si usa are: they are watching." },
        { type: "mc", q: "Qual è la forma giusta di «swim» + ing?", options: ["swiming", "swimming", "swimeing"], answer: 1, explain: "Verbo corto con vocale + consonante finale: si raddoppia la m → swimming." },
        { type: "text", q: "Scrivi il verbo «write» con -ing.", answer: ["writing"], explain: "Si toglie la -e muta: writing." },
        { type: "tf", q: "«I'm» è la forma breve di «I am».", answer: true, explain: "L'apostrofo sostituisce la a: I am → I'm." }
      ]
    },
    {
      type: "text",
      title: "4. Negazione, domande e risposte brevi",
      html: `<p><b>Negativa</b>: aggiungi <b>not</b> dopo am/is/are.</p>
<p>❌ I'm <b>not</b> sleeping. · She <b>isn't</b> (is not) eating. · We <b>aren't</b> (are not) playing.</p>
<p><b>Domanda</b>: scambia di posto il soggetto e am/is/are.</p>
<p>❓ <b>Are you</b> reading? · <b>Is he</b> running? · <b>What are you doing?</b> (Che cosa stai facendo?) · <b>Where is she going?</b> (Dove sta andando?)</p>
<p><b>Risposte brevi</b>: si ripete solo am/is/are, senza il verbo in -ing.</p>
<p>✅ Are you reading? – <b>Yes, I am.</b> / <b>No, I'm not.</b><br>
✅ Is it raining? – <b>Yes, it is.</b> / <b>No, it isn't.</b></p>`
    },
    {
      type: "widget",
      title: "Al parco: che cosa stanno facendo?",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bae6fd"/>
<rect y="200" width="600" height="120" fill="#86efac"/>
<circle cx="540" cy="50" r="30" fill="#facc15"/>
<rect x="40" y="110" width="20" height="100" fill="#92400e"/>
<circle cx="50" cy="90" r="50" fill="#16a34a"/>
<ellipse cx="300" cy="270" rx="90" ry="28" fill="#38bdf8" stroke="#0369a1" stroke-width="3"/>
<circle cx="300" cy="262" r="10" fill="#fcd34d"/>
<path d="M270 268 Q300 250 330 268" stroke="#0369a1" stroke-width="3" fill="none"/>
<circle cx="140" cy="175" r="14" fill="#fcd34d"/>
<line x1="140" y1="189" x2="140" y2="230" stroke="#1e293b" stroke-width="5"/>
<line x1="140" y1="230" x2="120" y2="262" stroke="#1e293b" stroke-width="5"/>
<line x1="140" y1="230" x2="165" y2="255" stroke="#1e293b" stroke-width="5"/>
<line x1="140" y1="205" x2="115" y2="190" stroke="#1e293b" stroke-width="5"/>
<line x1="140" y1="205" x2="165" y2="220" stroke="#1e293b" stroke-width="5"/>
<circle cx="185" cy="262" r="12" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>
<rect x="430" y="210" width="110" height="14" fill="#a16207"/>
<rect x="435" y="224" width="8" height="26" fill="#a16207"/>
<rect x="527" y="224" width="8" height="26" fill="#a16207"/>
<circle cx="485" cy="178" r="14" fill="#fcd34d"/>
<line x1="485" y1="192" x2="485" y2="212" stroke="#be185d" stroke-width="6"/>
<rect x="470" y="196" width="34" height="22" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
<line x1="487" y1="196" x2="487" y2="218" stroke="#1e293b" stroke-width="2"/>
<path d="M230 90 Q250 70 270 90 Q290 70 310 90" stroke="#1e293b" stroke-width="4" fill="none"/>
<circle cx="390" cy="160" r="14" fill="#fcd34d"/>
<line x1="390" y1="174" x2="390" y2="210" stroke="#7c3aed" stroke-width="5"/>
<line x1="390" y1="210" x2="375" y2="240" stroke="#7c3aed" stroke-width="5"/>
<line x1="390" y1="210" x2="405" y2="240" stroke="#7c3aed" stroke-width="5"/>
<line x1="390" y1="185" x2="410" y2="168" stroke="#7c3aed" stroke-width="5"/>
<rect x="408" y="150" width="22" height="16" fill="#f97316"/>
<text x="425" y="130" font-size="22">🎵</text>
<text x="60" y="300" font-size="24">🐕💤</text>
</svg>`,
        spots: [
          { x: 140, y: 160, label: "He's playing football" },
          { x: 300, y: 240, label: "She's swimming" },
          { x: 485, y: 160, label: "She's reading" },
          { x: 270, y: 70, label: "A bird is flying" },
          { x: 390, y: 140, label: "He's singing" },
          { x: 75, y: 280, label: "The dog is sleeping" }
        ]
      },
      caption: "Tocca un numero e scegli la frase giusta. Tutte usano il present continuous!"
    },
    {
      type: "example",
      title: "Esempio pratico: la telefonata",
      html: `<p><b>Grandma:</b> Hello, Mia! What are you doing?<br>
<b>Mia:</b> Hi Grandma! I'm doing my homework. 📚<br>
<b>Grandma:</b> Is your brother doing his homework too?<br>
<b>Mia:</b> No, he isn't. He's playing video games! 🎮<br>
<b>Grandma:</b> And Mum and Dad?<br>
<b>Mia:</b> Mum is cooking dinner 🍝 and Dad is washing the car. 🚗<br>
<b>Grandma:</b> Is it raining there?<br>
<b>Mia:</b> No, it isn't. The sun is shining! ☀️</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la telecronaca",
      html: `<p>Il present continuous è il tempo dei <b>telecronisti</b>: raccontano quello che succede mentre succede!</p>
<p>🎙️ <i>«Rossi <b>is running</b> with the ball… he<b>'s passing</b> it to Bianchi… Bianchi <b>is shooting</b>… GOAL! The fans <b>are singing</b> and the players <b>are dancing</b>!»</i> ⚽🎉</p>
<p>Prova anche tu: guarda fuori dalla finestra e fai la "telecronaca" di quello che vedi: <i>A man is walking his dog. A car is stopping…</i></p>`
    },
    {
      type: "text",
      title: "5. Present simple o present continuous?",
      html: `<table>
<tr><th>Present simple</th><th>Present continuous</th></tr>
<tr><td>Cose che fai <b>sempre, di solito</b></td><td>Cose che stai facendo <b>adesso</b></td></tr>
<tr><td>I <b>play</b> football <b>every Saturday</b>.</td><td>I'<b>m playing</b> football <b>now</b>.</td></tr>
<tr><td>She <b>reads</b> every evening.</td><td>She'<b>s reading</b> at the moment.</td></tr>
<tr><td>Parole spia: always, usually, every day, on Mondays</td><td>Parole spia: now, right now, at the moment, Look!</td></tr>
</table>
<p>Alcuni verbi che parlano di <b>gusti, pensieri e possesso</b> (like, love, want, know, have = possedere) di solito <b>non</b> si usano con -ing: si dice <i>I <b>like</b> pizza</i>, non "I'm liking pizza".</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? «I'm lovin' it»",
      html: `<p>Hai appena imparato che <i>love</i> di solito non vuole l'-ing… eppure lo slogan di una famosa catena di fast food, nato nel 2003, è <b>«I'm lovin' it»</b>! I pubblicitari hanno <b>rotto la regola apposta</b>: suona strano, e proprio per questo si ricorda. Nella lingua parlata, infatti, "I'm loving it" significa "mi sta piacendo tantissimo, proprio adesso". 😄</p>
<p>E l'apostrofo al posto della g (<i>lovin'</i>)? Imita la pronuncia veloce di tutti i giorni, in cui la -g finale quasi non si sente.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Non tutte le lingue ce l'hanno",
      html: `<p>L'italiano (<i>sto mangiando</i>) e lo spagnolo (<i>estoy comiendo</i>) hanno una forma molto simile al present continuous. Il <b>tedesco</b> invece non ce l'ha: per dire "sto mangiando" dice <i>ich esse gerade</i>, cioè "mangio proprio ora".</p>
<p>In inglese il present continuous è usatissimo: un inglese direbbe <i>"Shh! The baby is sleeping"</i> anche dove un italiano direbbe semplicemente "Shh! Il bimbo dorme".</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Present continuous = azione che succede <b>adesso</b>.</li>
<li>Formula: <b>soggetto + am / is / are + verbo-ing</b>.</li>
<li>Spelling: write → writ<b>ing</b> (via la e), swim → swim<b>ming</b> (doppia), lie → l<b>ying</b>.</li>
<li>Negativa: <b>not</b> (isn't, aren't, I'm not). Domanda: <b>Are you…? Is she…?</b></li>
<li>Risposte brevi: Yes, I am. / No, she isn't.</li>
<li>Abitudini → present simple; adesso → present continuous.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il present continuous",
      intro: "Ecco la stessa regola vista con altri occhi: come una foto e un video, come la versione italiana, come i mattoncini da costruire e come un gioco.",
      tabs: [
        {
          label: "🇮🇹 È come «stare + -ando»",
          html: `<p>Ottima notizia: in italiano abbiamo già lo stesso "attrezzo"!</p>
<table>
<tr><th>Italiano</th><th>Inglese</th></tr>
<tr><td>io <b>sto</b> mangi<b>ando</b></td><td>I <b>am</b> eat<b>ing</b></td></tr>
<tr><td>lei <b>sta</b> legg<b>endo</b></td><td>she <b>is</b> read<b>ing</b></td></tr>
<tr><td>loro <b>stanno</b> dorm<b>endo</b></td><td>they <b>are</b> sleep<b>ing</b></td></tr>
</table>
<p>Basta ricordare: <b>sto/sta/stanno</b> diventano <b>am/is/are</b> e <b>-ando/-endo</b> diventa <b>-ing</b>. L'unica differenza: gli inglesi lo usano molto più spesso di noi.</p>`
        },
        {
          label: "📸 Foto o video?",
          html: `<p>Immagina due modi di guardare la stessa persona:</p>
<ul>
<li>📅 <b>L'album delle abitudini</b> (present simple): tante foto di tutti i sabati → "Tom <i>plays</i> football every Saturday".</li>
<li>🎥 <b>Il video in diretta</b> (present continuous): accendi la telecamera <b>adesso</b> e vedi l'azione in movimento → "Tom <i>is playing</i> football now".</li>
</ul>
<p>Se puoi dire "in diretta!" 🔴, usa il present continuous.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ffffff"/>
<g stroke="#1e293b" stroke-width="3">
<rect x="20" y="30" width="80" height="70" fill="#fef3c7"/><rect x="110" y="30" width="80" height="70" fill="#fef3c7"/><rect x="200" y="30" width="80" height="70" fill="#fef3c7"/>
<rect x="330" y="30" width="250" height="140" rx="12" fill="#1e293b"/>
</g>
<g font-size="30" text-anchor="middle"><text x="60" y="78">⚽</text><text x="150" y="78">⚽</text><text x="240" y="78">⚽</text><text x="455" y="115">🏃⚽</text></g>
<circle cx="360" cy="55" r="9" fill="#ef4444"/>
<text x="378" y="62" font-size="18" fill="#ffffff" font-weight="bold">LIVE</text>
<text x="150" y="135" font-size="20" fill="#92400e" text-anchor="middle" font-weight="bold">every Saturday</text>
<text x="150" y="165" font-size="18" fill="#1e293b" text-anchor="middle">He plays football.</text>
<text x="455" y="205" font-size="20" fill="#b91c1c" text-anchor="middle" font-weight="bold">now</text>
<text x="455" y="230" font-size="18" fill="#1e293b" text-anchor="middle">He is playing football.</text>
</svg>`
        },
        {
          label: "🧱 I mattoncini",
          html: `<p>Pensa alla frase come a una costruzione LEGO con <b>3 mattoncini</b> sempre nello stesso ordine:</p>
<p>🟦 <b>CHI</b> &nbsp;+&nbsp; 🟨 <b>AM / IS / ARE</b> &nbsp;+&nbsp; 🟩 <b>VERBO-ING</b></p>
<ul>
<li>Il mattoncino giallo "si incastra" solo con il suo blu: I → am; he, she, it → is; you, we, they → are.</li>
<li>Per la <b>negativa</b> aggiungi un mattoncino rosso 🟥 <b>NOT</b> dopo il giallo.</li>
<li>Per la <b>domanda</b> sposta il giallo davanti: 🟨 <b>Are</b> 🟦 <b>you</b> 🟩 <b>reading</b>?</li>
</ul>`
        },
        {
          label: "🎮 Abbina soggetto e verbo",
          html: `<p>Abbina ogni soggetto al pezzo che manca. Ricorda il "mattoncino giallo": I → am; he/she/it → is; you/we/they → are.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["I", "am dancing"],
              ["She", "is reading"],
              ["The cat", "is sleeping"],
              ["We", "are swimming"],
              ["You", "are singing"],
              ["Tom and Ben", "are running"]
            ]
          }
        },
        {
          label: "🎭 Gioco del mimo",
          html: `<p>Un gioco da fare in classe o in famiglia (si chiama <b>charades</b> in inglese):</p>
<ol>
<li>Uno mima un'azione senza parlare (nuotare, mangiare un gelato, dormire…).</li>
<li>Gli altri indovinano con una domanda: <b>Are you swimming?</b></li>
<li>Il mimo risponde solo <b>Yes, I am!</b> o <b>No, I'm not!</b></li>
<li>Chi indovina dice la frase intera: <b>«You're swimming!»</b> e diventa il prossimo mimo.</li>
</ol>
<p>Così ripeti domanda, risposta breve e affermativa senza accorgertene!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del present continuous: tocca un nodo",
      nodes: [
        { id: "pc", label: "Present continuous", x: 50, y: 8, color: "#2563eb", html: "Il tempo inglese per le azioni in corso adesso.", why: "<i>Continuous</i> vuol dire \"continuo\": l'azione è ancora in svolgimento, non è finita. Si chiama anche <i>present progressive</i>." },
        { id: "be", label: "am / is / are", x: 18, y: 32, color: "#f59e0b", html: "Il verbo to be (essere) al presente, che cambia con il soggetto.", why: "Secondo molti studiosi, nell'inglese di molti secoli fa si diceva \"he is <b>on</b> hunting\" (lui è a caccia, \"in caccia\"): con il tempo <i>on</i> si è indebolito in <i>a-</i> (\"he is a-hunting\") e poi è sparito, lasciando <i>be + -ing</i>." },
        { id: "ing", label: "verbo + -ing", x: 50, y: 32, color: "#16a34a", html: "La forma del verbo che indica l'azione in svolgimento: playing, reading.", why: "La desinenza <i>-ing</i> deriva dall'inglese antico <i>-ung/-ing</i>, che serviva a trasformare i verbi in nomi d'azione (come il nostro \"la lettura\" da \"leggere\"). Ancora oggi <i>swimming</i> può essere un nome: \"Swimming is fun\"." },
        { id: "spelling", label: "Regole di spelling", x: 82, y: 32, color: "#ef4444", html: "write → writing; swim → swimming; lie → lying.", why: "Si raddoppia la consonante per non cambiare il suono della vocale: <i>hoping</i> (sperando, con la o \"lunga\") è diverso da <i>hopping</i> (saltellando, con la o \"breve\"). La -e muta si toglie perché la -i di -ing ne fa già le veci." },
        { id: "neg", label: "Negativa: not", x: 18, y: 62, color: "#64748b", html: "I'm not, he isn't, they aren't + -ing.", why: "In inglese il <i>not</i> si attacca sempre a un verbo \"aiutante\" (ausiliare). Qui l'aiutante c'è già, è am/is/are, quindi basta aggiungere not dopo." },
        { id: "domanda", label: "Domanda e short answer", x: 50, y: 62, color: "#a855f7", html: "Are you reading? – Yes, I am. / No, I'm not.", why: "Le domande inglesi si fanno <b>invertendo</b> soggetto e ausiliare, una regola antica delle lingue germaniche (anche il tedesco fa così). Nella risposta breve si ripete solo l'ausiliare, per non ridire tutta la frase." },
        { id: "spia", label: "Parole spia", x: 82, y: 62, color: "#0ea5e9", html: "now, right now, at the moment, Look!, Listen!", why: "Sono indizi che indicano \"in questo momento\": se le trovi in una frase, quasi sicuramente il verbo va al present continuous." },
        { id: "simple", label: "≠ Present simple", x: 50, y: 88, color: "#db2777", html: "Abitudini (I play every day) contro azioni di adesso (I'm playing now).", why: "L'inglese ha bisogno di due presenti perché il present simple, da solo, indica cose abituali o sempre vere: \"I play football\" vuol dire \"gioco a calcio (è un mio sport)\", non \"sto giocando adesso\"." }
      ],
      edges: [
        ["pc", "be", "si forma con"],
        ["pc", "ing", "+"],
        ["ing", "spelling", "segue le"],
        ["be", "neg", "+ not"],
        ["be", "domanda", "va davanti"],
        ["pc", "spia", "si riconosce dalle"],
        ["pc", "simple", "non confonderlo con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: domande, negazioni e confronto",
      questions: [
        { type: "mc", q: "Completa: «___ she sleeping?» – «No, she isn't.»", options: ["Are", "Is", "Does"], answer: 1, explain: "Con she si usa is, messo all'inizio per fare la domanda." },
        { type: "mc", q: "Quale frase è corretta?", options: ["He not is running.", "He isn't running.", "He doesn't running."], answer: 1, explain: "La negativa è is + not = isn't, seguito dal verbo in -ing." },
        { type: "mc", q: "«Look! The baby ___.»", options: ["cries", "is crying", "cry"], answer: 1, explain: "«Look!» è una parola spia: succede adesso → is crying." },
        { type: "mc", q: "«I ___ to school every day.»", options: ["go", "am going", "going"], answer: 0, explain: "«Every day» indica un'abitudine: present simple → I go." }
      ]
    }
  ],
  glossary: [
    { t: "Present continuous", d: "Tempo verbale inglese per le azioni in corso adesso (am/is/are + -ing)." },
    { t: "-ing", d: "Desinenza che si aggiunge al verbo: play → playing (come -ando/-endo)." },
    { t: "Am / is / are", d: "Il verbo «to be» (essere) al presente: I am, he/she/it is, you/we/they are." },
    { t: "Forma breve", d: "La forma con l'apostrofo: I'm, she's, they're, isn't, aren't." },
    { t: "Short answer", d: "Risposta breve: Yes, I am. / No, he isn't." },
    { t: "Now / at the moment", d: "Adesso / in questo momento: parole spia del present continuous." },
    { t: "What are you doing?", d: "Che cosa stai facendo?" },
    { t: "Present simple", d: "Il presente per le abitudini: I play every day." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Completa: «I ___ eating an apple.»", options: ["am", "is", "are"], answer: 0, explain: "Con I si usa am." },
      { type: "mc", q: "Completa: «The children ___ playing in the garden.»", options: ["is", "are", "am"], answer: 1, explain: "The children (i bambini) = they → are." },
      { type: "mc", q: "Qual è la forma -ing di «run»?", options: ["runing", "running", "runeing"], answer: 1, explain: "Verbo corto vocale + consonante: si raddoppia la n." },
      { type: "text", q: "Scrivi la forma -ing di «dance».", answer: ["dancing"], explain: "Si toglie la -e: dancing." },
      { type: "text", q: "Scrivi la forma -ing di «play».", answer: ["playing"], explain: "Con la -y finale si aggiunge solo -ing: playing." },
      { type: "tf", q: "«She is swimming» significa «Lei nuota sempre».", answer: false, explain: "Significa «Lei sta nuotando» (adesso)." },
      { type: "tf", q: "«Are you listening?» – «Yes, I am.» è una risposta breve corretta.", answer: true, explain: "Nella risposta breve si ripete solo l'ausiliare: Yes, I am." },
      { type: "mc", q: "Come si dice «Non stiamo guardando la TV»?", options: ["We aren't watching TV.", "We don't watching TV.", "We not watch TV."], answer: 0, explain: "are + not = aren't, poi il verbo in -ing." },
      { type: "mc", q: "Quale frase descrive un'abitudine?", options: ["She's reading now.", "She reads every night.", "She's reading at the moment."], answer: 1, explain: "«Every night» = abitudine → present simple." },
      { type: "order", q: "Metti in ordine le parole della domanda.", items: ["What", "are", "you", "doing", "?"], explain: "What are you doing? = Che cosa stai facendo?" },
      { type: "mc", q: "Traduci: «Il gatto sta dormendo sul divano.»", options: ["The cat sleeps on the sofa.", "The cat is sleeping on the sofa.", "The cat are sleeping on the sofa."], answer: 1, explain: "Azione in corso, soggetto «the cat» = it → is sleeping." },
      { type: "text", q: "Completa con il verbo «sit»: «Tom is ___ on a chair.»", answer: ["sitting"], explain: "sit → sitting (si raddoppia la t)." }
    ]
  }
});

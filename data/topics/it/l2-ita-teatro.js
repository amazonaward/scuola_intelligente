TOPIC('it', {
  id: "l2-ita-teatro",
  title: "Il testo teatrale",
  intro: "Un testo teatrale non nasce per essere letto in silenzio, ma per essere <b>recitato davanti a un pubblico</b>. È fatto quasi solo di dialoghi e di indicazioni per gli attori: la storia si capisce da ciò che i personaggi dicono e fanno. In questa lezione scopri come è fatto un testo teatrale, che differenza c'è tra tragedia e commedia, e fai un viaggio che parte dagli antichi Greci e arriva a Pirandello, Eduardo De Filippo e Dario Fo.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Come è fatto un testo teatrale",
      html: `<p>Il testo teatrale (detto anche <b>copione</b> o <b>dramma</b>, dal greco <i>drâma</i>, «azione») ha caratteristiche che lo distinguono da un romanzo:</p>
<ul>
<li><b>Dialogo</b>: i personaggi parlano tra loro. Ogni intervento è una <b>battuta</b>, preceduta dal nome di chi parla.</li>
<li><b>Monologo</b>: un personaggio parla da solo in scena, esprimendo pensieri e dubbi (come Amleto: «Essere o non essere»). Quando un personaggio dice qualcosa al pubblico senza che gli altri sentano si parla di <b>a parte</b>.</li>
<li><b>Didascalie</b>: indicazioni dell'autore su luoghi, gesti, tono, entrate e uscite. Non vengono pronunciate, ma aiutano regista e attori.</li>
<li><b>Atti e scene</b>: l'opera si divide in <b>atti</b> (grandi blocchi), a loro volta divisi in <b>scene</b> (un cambio di personaggi in scena). Tra un atto e l'altro cala il sipario o c'è un intervallo.</li>
<li><b>Assenza del narratore</b>: nessuno racconta la storia; è il pubblico a ricostruirla da ciò che vede e sente. Per questo il teatro usa spesso <b>prologhi</b> o <b>personaggi che spiegano</b> l'antefatto.</li>
</ul>
<p>Chi mette in scena il testo è il <b>regista</b>, che dirige attori, scenografia e luci. Lo stesso copione può diventare spettacoli molto diversi.</p>`
    },
    {
      type: "svg",
      title: "Il teatro greco",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<g font-family="sans-serif">
<path d="M80 260 Q300 -20 520 260 Z" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="300" y="40" font-size="16" text-anchor="middle" fill="#713f12" font-weight="bold">Theatron (gradinate per gli spettatori)</text>
<circle cx="300" cy="190" r="48" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="300" y="196" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Orchestra</text>
<text x="300" y="215" font-size="14" text-anchor="middle" fill="#14532d">(coro)</text>
<rect x="215" y="258" width="170" height="30" fill="#c7d2fe" stroke="#4338ca" stroke-width="3"/>
<text x="300" y="278" font-size="16" text-anchor="middle" fill="#312e81" font-weight="bold">Skené (scena)</text>
<text x="525" y="260" font-size="14" text-anchor="end" fill="#475569">Proskenion: il palco degli attori</text>
</g>
</svg>`,
      caption: "Schema semplificato del teatro greco: gli spettatori in gradinata (theatron), il coro nell'orchestra, gli attori davanti alla skené."
    },
    {
      type: "text",
      title: "Le origini: il teatro greco",
      html: `<p>Il teatro occidentale nasce ad <b>Atene</b> nel VI-V secolo a.C. all'interno delle feste in onore di <b>Dioniso</b>, il dio del vino e della trasformazione, le <b>Grandi Dionisie</b>. Il pubblico (migliaia di cittadini) assisteva a gare tra poeti. Gli attori erano uomini e indossavano <b>maschere</b>; accanto agli attori c'era il <b>coro</b>, un gruppo che commentava e cantava.</p>
<p>I tre grandi tragediografi del V secolo a.C.:</p>
<ul>
<li><b>Eschilo</b> (525/524-456 a.C.): <i>Orestea</i>, <i>I Persiani</i>.</li>
<li><b>Sofocle</b> (496-406 a.C.): <i>Edipo re</i>, <i>Antigone</i>.</li>
<li><b>Euripide</b> (480 circa-406 a.C.): <i>Medea</i>, <i>Le Baccanti</i>.</li>
</ul>
<p>La commedia greca ha il suo massimo autore in <b>Aristofane</b> (445 circa-385 a.C. circa): <i>Le nuvole</i>, <i>Le rane</i>, <i>Lisistrata</i>. Prende in giro politici, filosofi (anche Socrate) e usi del tempo.</p>`
    },
    {
      type: "remember",
      title: "Tragedia e commedia a confronto",
      html: `<table>
<tr><th></th><th>Tragedia</th><th>Commedia</th></tr>
<tr><td>Personaggi</td><td>Eroi, re, dèi: persone di alto rango</td><td>Gente comune, spesso caricature</td></tr>
<tr><td>Tono</td><td>Serio, solenne</td><td>Comico, satirico</td></tr>
<tr><td>Finale</td><td>Di solito doloroso (morte, caduta)</td><td>Lieto (nozze, riconciliazione)</td></tr>
<tr><td>Obiettivo</td><td>Suscitare paura e pietà, <b>catarsi</b></td><td>Far ridere e criticare vizi e difetti</td></tr>
<tr><td>Conflitto</td><td>Destino, dovere, colpa</td><td>Equivoci, inganni, conflitti sociali</td></tr>
</table>
<p>Il <b>dramma</b> borghese dell'Ottocento unisce i due toni e racconta problemi contemporanei: famiglia, denaro, ruoli sociali.</p>`
    },
    {
      type: "text",
      title: "Aristotele e la catarsi",
      html: `<p>Nella <i>Poetica</i> (IV secolo a.C.) <b>Aristotele</b> studia la tragedia e la definisce come imitazione (<i>mimesis</i>) di un'azione seria che suscita <b>paura e pietà</b> e produce <b>catarsi</b>, cioè una «purificazione» delle emozioni dello spettatore. Vedendo il dolore di Edipo o di Antigone, impariamo a riconoscere le nostre paure e ne usciamo più consapevoli.</p>
<p>Aristotele descrive anche alcuni meccanismi del racconto drammatico, che ritroviamo ancora oggi in film e serie TV:</p>
<ul>
<li><b>Peripezia</b>: il rovesciamento improvviso della situazione.</li>
<li><b>Anagnorisi</b> (riconoscimento): il passaggio dall'ignoranza alla conoscenza (Edipo scopre chi è e che cosa ha fatto).</li>
<li><b>Hybris</b>: la tracotanza dell'eroe che sfida i limiti umani o la volontà degli dèi.</li>
</ul>
<p>Nel Cinquecento i teorici ricavarono dalla <i>Poetica</i> la regola delle <b>tre unità</b>: azione (una sola vicenda), tempo (circa un giorno) e luogo (uno solo). Aristotele parlava chiaramente soltanto dell'unità d'azione: le altre due furono codificate più tardi.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: dal teatro greco alla struttura",
      questions: [
        { type: "mc", q: "Come si chiama la battuta pronunciata da un personaggio solo in scena?", options: ["Monologo", "Didascalia", "Prologo", "Coro"], answer: 0, explain: "Il monologo mostra pensieri e dubbi del personaggio." },
        { type: "tf", q: "Il teatro greco nasce nell'ambito di feste in onore di Dioniso.", answer: true, explain: "Le Grandi Dionisie ad Atene ospitavano gare tragiche e comiche." },
        { type: "text", q: "Come si chiama la «purificazione» delle emozioni di cui parla Aristotele?", answer: ["catarsi"], explain: "La tragedia suscita paura e pietà e porta alla catarsi." }
      ]
    },
    {
      type: "text",
      title: "Roma e il Medioevo",
      html: `<p>A Roma il teatro si sviluppa nel III-II secolo a.C. con i commediografi <b>Plauto</b> (circa 250-184 a.C.: <i>Aulularia</i>, <i>Miles gloriosus</i>, <i>Menaechmi</i>) e <b>Terenzio</b> (circa 185-159 a.C.: <i>Heautontimorumenos</i>, <i>Adelphoe</i>). Le loro commedie sono ispirate a modelli greci, con intrecci di scambi di persona e servi astuti. In età imperiale le tragedie di <b>Seneca</b> furono pensate per la lettura più che per la scena e influenzarono profondamente il teatro rinascimentale.</p>
<p>Dopo la crisi del mondo antico il teatro quasi scompare; nel Medioevo rinasce dalla liturgia con le <b>sacre rappresentazioni</b> e i <b>misteri</b>, spettacoli religiosi messi in scena nelle chiese e nelle piazze, e con le <b>laude drammatiche</b>.</p>`
    },
    {
      type: "text",
      title: "Rinascimento e Seicento: Commedia dell'arte e Shakespeare",
      html: `<p>Nel Cinquecento nasce in Italia la <b>commedia dell'arte</b>: compagnie di attori professionisti recitano <b>a soggetto</b>, cioè improvvisano su un <b>canovaccio</b> (una traccia della trama) e usano <b>maschere</b> fisse: <b>Arlecchino</b> (servo furbo e affamato di Bergamo), <b>Pantalone</b> (vecchio mercante veneziano avaro), <b>Colombina</b> (la serva sveglia), <b>il Dottore</b> (bolognese pedante), <b>Pulcinella</b> (napoletano). Il suo stile influenzerà il teatro europeo, da Molière a Goldoni.</p>
<p>In Inghilterra <b>William Shakespeare</b> (1564-1616) scrive circa 37 drammi per il Globe Theatre di Londra (aperto nel 1599): tragedie come <i>Romeo e Giulietta</i>, <i>Amleto</i>, <i>Otello</i>, <i>Macbeth</i>; commedie come <i>Sogno di una notte di mezza estate</i>; drammi storici. I suoi personaggi hanno profondità psicologica mai vista prima.</p>
<p>In Francia <b>Molière</b> (1622-1673) fa ridere e riflettere con commedie sui vizi sociali (<i>Tartufo</i>, <i>L'avaro</i>, <i>Il malato immaginario</i>).</p>`
    },
    {
      type: "decision",
      title: "Amleto: agire o aspettare?",
      html: `<p>Il principe Amleto di Danimarca scopre che lo zio ha ucciso suo padre per prendergli il trono. Il fantasma del re gli chiede vendetta. Ma Amleto non è sicuro che il fantasma dica il vero e riflette a lungo: «Essere o non essere, questo è il problema».</p>`,
      question: "Che cosa avresti fatto al suo posto?",
      options: [
        { label: "Uccidere subito lo zio", outcome: "Sarebbe una scelta rapida, ma rischierebbe di punire un innocente se il fantasma mentisse. Amleto invece cerca prove." },
        { label: "Organizzare una prova (la recita a corte)", outcome: "È ciò che Amleto fa: fa rappresentare una scena che imita l'omicidio per osservare la reazione dello zio. Il teatro dentro il teatro diventa uno strumento di verità." },
        { label: "Scappare e lasciar perdere", outcome: "Sarebbe una fuga dalle responsabilità: ma Amleto non può ignorare la richiesta del padre e il peso morale di quanto sa." }
      ],
      answer: 1,
      explain: "Amleto mette in scena la recita «La trappola per topi» davanti allo zio per verificare la sua colpa. Poi esita ancora: il suo dilemma tra pensiero e azione è il cuore della tragedia."
    },
    {
      type: "text",
      title: "Il teatro italiano: Goldoni, Alfieri, Manzoni",
      html: `<p><b>Carlo Goldoni</b> (Venezia 1707 – Parigi 1793) compie la <b>riforma del teatro</b>: abbandona le maschere e l'improvvisazione e scrive commedie con un testo completo e <b>caratteri</b> realistici, ispirati alla vita borghese di Venezia. Opere celebri: <i>Il servitore di due padroni</i> (1745), <i>La locandiera</i> (1753), <i>I rusteghi</i> (1760). La sua protagonista Mirandolina, locandiera intelligente e indipendente, è una delle donne più vivaci del teatro italiano.</p>
<p><b>Vittorio Alfieri</b> (Asti 1749 – Firenze 1803) scrive tragedie di libertà contro il tiranno: <i>Saul</i>, <i>Antigone</i>, <i>Mirra</i>. <b>Alessandro Manzoni</b> compone <i>Il conte di Carmagnola</i> (1820) e <i>Adelchi</i> (1822), in cui il coro è una pagina di alta poesia.</p>`
    },
    {
      type: "text",
      title: "Il Novecento: Pirandello, Brecht, De Filippo, Fo",
      html: `<ul>
<li><b>Luigi Pirandello</b> (Agrigento 1867 – Roma 1936, Premio Nobel nel 1934): il teatro dell'identità e della maschera. <i>Sei personaggi in cerca d'autore</i> (1921) mette in scena personaggi incompleti che chiedono a una compagnia di dar loro una storia; <i>Enrico IV</i> (1922) racconta un uomo che finge o vive la follia.</li>
<li><b>Bertolt Brecht</b> (1898-1956): teatro epico, con l'<b>effetto di straniamento</b>: l'attore non si immedesima, spinge il pubblico a pensare criticamente (<i>Madre Coraggio e i suoi figli</i>, 1939; <i>Vita di Galileo</i>).</li>
<li><b>Samuel Beckett</b> (1906-1989): teatro dell'assurdo, <i>Aspettando Godot</i> (1953): due vagabondi aspettano qualcuno che non arriva mai.</li>
<li><b>Eduardo De Filippo</b> (Napoli 1900-1984): dramma e commedia della famiglia napoletana, <i>Napoli milionaria!</i> (1945), <i>Filumena Marturano</i> (1946), <i>Natale in casa Cupiello</i>.</li>
<li><b>Dario Fo</b> (1926-2016): giullare moderno, autore di <i>Mistero buffo</i> (1969), Premio Nobel per la letteratura nel 1997.</li>
</ul>`
    },
    {
      type: "example",
      title: "Leggere una scena: come si analizza",
      html: `<p>Per analizzare una scena teatrale chiediti:</p>
<ol>
<li><b>Chi</b> sono i personaggi in scena e che cosa vuole ognuno?</li>
<li><b>Che cosa</b> succede (azione) e che cosa cambia tra l'inizio e la fine della scena?</li>
<li><b>Come parlano</b>: registro alto o basso, frasi lunghe o brevi? Le battute sono scambi rapidi o lunghi monologhi?</li>
<li><b>Che cosa dicono le didascalie</b> su luoghi, gesti, silenzi?</li>
<li><b>Che cosa non dicono</b> (sottotesto): spesso nel teatro l'emozione sta in ciò che si tace.</li>
</ol>
<p>Prova con una scena breve: due fratelli aspettano la lettura di un testamento. Uno guarda l'orologio, l'altro parla troppo. Anche senza parole esplicite, il pubblico percepisce tensione, avidità, paura. È il linguaggio del teatro.</p>`
    },
    {
      type: "example",
      title: "Una battuta, tre significati",
      html: `<p>Prendi la battuta «Fai pure». Detta con voce calma e un sorriso è un permesso; detta a denti stretti, con le braccia incrociate, è una minaccia; detta a voce bassa da chi sta per piangere è una richiesta d'aiuto. Nel teatro il <b>sottotesto</b> (ciò che non si dice) conta quanto il testo. Per questo le didascalie e il lavoro del regista sono così importanti: <i>Aspettando Godot</i> è fatto quasi solo di pause, silenzi e battute che sembrano banali, eppure racconta l'attesa e la solitudine.</p>`
    },
    {
      type: "curiosity",
      title: "Tutto il mondo è un palcoscenico",
      html: `<p>Il Globe Theatre di Shakespeare aveva un'iscrizione latina, <i>Totus mundus agit histrionem</i> («tutto il mondo recita la parte dell'attore»). In <i>Come vi piace</i> Shakespeare scrive: «Tutto il mondo è un palcoscenico, e tutti gli uomini e le donne sono soltanto attori». Pirandello userà la stessa idea per dire che nella vita tutti indossiamo una maschera.</p>`
    },
    {
      type: "curiosity",
      title: "Attrici e attori: chi recitava davvero?",
      html: `<p>Nell'antica Grecia e al tempo di Shakespeare le donne non potevano recitare: i ruoli femminili erano interpretati da <b>uomini o ragazzi</b>. Le prime attrici professioniste compaiono in Italia nel Cinquecento, nelle compagnie della commedia dell'arte (la più celebre fu <b>Isabella Andreini</b>, 1562-1604). Oggi il teatro è uno spazio in cui si discutono anche questioni di identità e di genere.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per entrare nel teatro",
      intro: "Il teatro è un'arte viva: prova a viverlo, non solo a leggerlo.",
      tabs: [
        {
          label: "🎬 Come una sceneggiatura",
          html: "<p>Un copione assomiglia a una <b>sceneggiatura cinematografica</b>: ci sono dialoghi, indicazioni di scena e tagli di luogo. La differenza è che a teatro tutto avviene <b>in diretta</b> e davanti a uno spazio unico: non ci sono primi piani né montaggio, e la voce e il corpo dell'attore sono tutto.</p>"
        },
        {
          label: "🗣️ Leggere ad alta voce",
          html: "<p>Un testo teatrale va <b>detto</b>. Leggi una scena a voce alta con un compagno: cambia tono, velocità, pause. Scoprirai che la stessa battuta può diventare ironica, minacciosa o tenera a seconda di come la dici. È questo il lavoro dell'attore e del regista.</p>"
        },
        {
          label: "🏛️ Pianta di un teatro",
          html: "<p>Il teatro all'italiana (dal Seicento) ha <b>platea</b>, <b>palchi</b>, <b>galleria</b> e un <b>palcoscenico</b> con il sipario. È una struttura pensata per mostrare il potere sociale degli spettatori: i palchi erano riservati alle famiglie nobili. Il Teatro alla Scala di Milano (1778) è l'esempio più famoso.</p>",
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#fef2f2"/><g font-family="sans-serif"><rect x="200" y="20" width="200" height="60" rx="8" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/><text x="300" y="56" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Palcoscenico</text><path d="M80 260 Q300 80 520 260 Z" fill="#fde68a" stroke="#a16207" stroke-width="3"/><text x="300" y="215" font-size="16" text-anchor="middle" fill="#713f12" font-weight="bold">Platea</text><text x="90" y="150" font-size="15" fill="#334155">Palchi</text><text x="480" y="150" font-size="15" fill="#334155">Palchi</text><text x="300" y="285" font-size="14" text-anchor="middle" fill="#475569">Schema semplificato del teatro all'italiana</text></g></svg>`
        },
        {
          label: "🕰️ Linea del tempo",
          html: "<p>Alcuni momenti chiave della storia del teatro.</p>",
          widget: "timeline",
          options: { events: [
            { year: -472, label: "I Persiani di Eschilo", icon: "🎭" },
            { year: -429, label: "Edipo re (c.)", icon: "👁️" },
            { year: -190, label: "Plauto (c.)", icon: "🃏" },
            { year: 1599, label: "Globe di Shakespeare", icon: "🏟️" },
            { year: 1753, label: "La locandiera", icon: "🍷" },
            { year: 1921, label: "Sei personaggi", icon: "🎭" },
            { year: 1969, label: "Mistero buffo", icon: "🤹" }
          ], unit: "anni" }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del teatro",
      nodes: [
        { id: "teatro", label: "Testo teatrale", x: 50, y: 8, color: "#ef4444", html: "Testo scritto per essere recitato: dialoghi, monologhi, didascalie, atti e scene.", why: "È nato come rito collettivo (le feste di Dioniso): per questo ha sempre un rapporto diretto con il pubblico." },
        { id: "tragedia", label: "Tragedia", x: 14, y: 42, color: "#0ea5e9", html: "Azione seria con finale doloroso; suscita paura e pietà.", why: "Aristotele la definisce come imitazione di un'azione seria che porta alla catarsi: pensa a Edipo, Antigone, Amleto." },
        { id: "commedia", label: "Commedia", x: 50, y: 42, color: "#22c55e", html: "Azione comica, personaggi comuni, lieto fine.", why: "Dall'Antica Grecia (Aristofane) a Plauto, Goldoni, Molière: ridere dei difetti è un modo per correggere i costumi." },
        { id: "dramma", label: "Dramma moderno", x: 86, y: 42, color: "#8b5cf6", html: "Racconta conflitti reali di persone comuni, con toni misti.", why: "Nasce con la società borghese dell'Ottocento (Ibsen, Cechov) e porta in scena la vita quotidiana." },
        { id: "regole", label: "Unità e struttura", x: 28, y: 78, color: "#f59e0b", html: "Tre unità: azione, tempo, luogo. Atti, scene, didascalie.", why: "Le regole dipendono dalle condizioni dello spettacolo (un solo palco, un pubblico seduto). Nel Novecento molti autori le rompono." },
        { id: "novecento", label: "Teatro del Novecento", x: 72, y: 78, color: "#64748b", html: "Pirandello, Brecht, Beckett, De Filippo, Fo.", why: "Dopo la crisi delle certezze, il teatro indaga identità, potere e linguaggio, e sperimenta forme nuove." }
      ],
      edges: [["teatro", "tragedia", "ha come forma"], ["teatro", "commedia", "ha come forma"], ["teatro", "dramma", "si evolve in"], ["tragedia", "regole", "rispetta le"], ["dramma", "novecento", "porta al"], ["commedia", "novecento", "influenza il"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz finale",
      questions: [
        { type: "order", q: "Ordina cronologicamente.", items: ["Sofocle", "Plauto", "Shakespeare", "Pirandello"], explain: "V sec. a.C., III-II sec. a.C., 1564-1616, 1867-1936." },
        { type: "mc", q: "Chi riformò il teatro italiano abolendo le maschere?", options: ["Carlo Goldoni", "Pirandello", "Dario Fo", "Alfieri"], answer: 0, explain: "Goldoni scrisse commedie di caratteri con testo completo." }
      ]
    }
  ],
  glossary: [
    { t: "Copione", d: "Testo teatrale completo, con battute e didascalie." },
    { t: "Didascalia", d: "Indicazione dell'autore su gesti, luoghi e toni, non pronunciata." },
    { t: "Monologo", d: "Lunga battuta di un personaggio che parla da solo in scena." },
    { t: "Atto", d: "Grande parte dell'opera teatrale, divisa in scene." },
    { t: "Catarsi", d: "Purificazione delle emozioni dello spettatore secondo Aristotele." },
    { t: "Coro", d: "Gruppo che nel teatro greco canta e commenta l'azione." },
    { t: "Commedia dell'arte", d: "Teatro all'improvvisa su canovaccio, con maschere fisse." },
    { t: "Canovaccio", d: "Traccia della trama su cui gli attori improvvisano." },
    { t: "Straniamento", d: "Tecnica brechtiana che impedisce l'immedesimazione, per far riflettere." },
    { t: "Hybris", d: "Tracotanza dell'eroe tragico che sfida i propri limiti." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dove nasce il teatro occidentale?", options: ["Ad Atene", "A Roma", "A Londra", "A Venezia"], answer: 0, explain: "Il teatro nasce nelle feste ateniesi in onore di Dioniso." },
      { type: "tf", q: "Nella commedia dell'arte gli attori seguivano un testo scritto parola per parola.", answer: false, explain: "Recitavano a soggetto, improvvisando su un canovaccio." },
      { type: "mc", q: "Qual è la differenza principale tra tragedia e commedia?", options: ["Serietà e finale doloroso contro comicità e lieto fine", "La lunghezza dell'opera", "Il numero di attori", "La lingua usata"], answer: 0, explain: "La tragedia ha toni solenni e conclusione dolorosa; la commedia fa ridere e di solito finisce bene." },
      { type: "text", q: "Come si chiama l'autore di «Sei personaggi in cerca d'autore»?", answer: ["pirandello", "luigi pirandello"], explain: "Luigi Pirandello scrisse l'opera nel 1921." },
      { type: "mc", q: "Che cosa sono le didascalie?", options: ["Indicazioni dell'autore non pronunciate dagli attori", "Le battute dei personaggi", "I titoli degli atti", "Le recensioni"], answer: 0, explain: "Descrivono luoghi, gesti e toni per regista e attori." },
      { type: "mc", q: "Chi scrisse «La locandiera»?", options: ["Goldoni", "Molière", "Plauto", "Alfieri"], answer: 0, explain: "Goldoni la scrisse nel 1753 con protagonista Mirandolina." },
      { type: "tf", q: "Aristotele parla chiaramente delle tre unità di azione, tempo e luogo come regola fissa.", answer: false, explain: "Aristotele insiste sull'unità d'azione; le altre due furono codificate in età rinascimentale." },
      { type: "mc", q: "Che cosa produce, secondo Aristotele, la tragedia sullo spettatore?", options: ["La catarsi", "Il riso", "L'oblio", "L'indifferenza"], answer: 0, explain: "Suscitando paura e pietà, purifica le emozioni." },
      { type: "order", q: "Ordina le parti del testo teatrale dalla più grande alla più piccola.", items: ["Opera", "Atto", "Scena", "Battuta"], explain: "Un'opera si divide in atti, gli atti in scene, le scene in battute." },
      { type: "text", q: "Quale drammaturgo napoletano scrisse «Filumena Marturano»?", answer: ["eduardo de filippo", "de filippo", "eduardo"], explain: "Eduardo De Filippo la scrisse nel 1946." }
    ]
  }
});

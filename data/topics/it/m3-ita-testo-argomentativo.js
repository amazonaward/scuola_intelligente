TOPIC('it', {
  id: "m3-ita-testo-argomentativo",
  title: "Il testo argomentativo",
  intro: "Convincere qualcuno con le <b>ragioni</b> e non con la forza: è questo lo scopo del <b>testo argomentativo</b>. Lo usi quando chiedi ai genitori di uscire, quando scrivi un tema d'esame, quando leggi un articolo d'opinione. Impariamo la sua struttura, i tipi di argomenti e le trappole da evitare.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Che cos'è un testo argomentativo",
      html: `<p>Il <b>testo argomentativo</b> sostiene un'opinione su una questione discutibile (un <b>problema</b> su cui si possono avere idee diverse) e cerca di <b>convincere</b> il lettore con <b>argomenti</b>, cioè ragioni e prove.</p>
<p>Lo trovi negli <b>articoli di fondo</b> e negli editoriali dei giornali, nelle <b>lettere ai giornali</b>, nei <b>saggi</b>, nelle <b>arringhe</b> degli avvocati, nei <b>dibattiti</b>, nelle recensioni e… nel tema dell'esame di terza media.</p>
<p>Differenza importante: il testo <b>espositivo</b> informa in modo neutrale (<i>"I social network sono usati da…"</i>), il testo <b>argomentativo</b> prende posizione (<i>"I social network dovrebbero essere vietati sotto i 14 anni perché…"</i>).</p>`
    },
    {
      type: "text",
      title: "La struttura: problema, tesi, argomenti, antitesi, conclusione",
      html: `<ol>
<li><b>Problema (questione)</b>: l'argomento di discussione, spesso presentato come domanda. <i>"È giusto dare i compiti per le vacanze?"</i></li>
<li><b>Tesi</b>: l'opinione che l'autore sostiene. <i>"I compiti per le vacanze dovrebbero essere pochi e creativi."</i></li>
<li><b>Argomenti a favore</b>: le ragioni e le prove che sostengono la tesi.</li>
<li><b>Antitesi</b>: l'opinione contraria, che l'autore presenta lealmente…</li>
<li><b>Confutazione</b>: …e poi smonta, mostrando perché è debole.</li>
<li><b>Conclusione</b>: si ribadisce la tesi, magari con una proposta o un invito.</li>
</ol>
<p>Prevedere e confutare l'antitesi rende il testo <b>più forte</b>: mostra che hai considerato anche l'altro punto di vista.</p>`
    },
    {
      type: "svg",
      title: "Lo schema del testo argomentativo",
      svg: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="330" fill="#fffbeb"/>
<rect x="220" y="15" width="200" height="45" rx="10" fill="#64748b"/>
<text x="320" y="44" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">❓ PROBLEMA</text>
<line x1="320" y1="60" x2="320" y2="85" stroke="#334155" stroke-width="3"/>
<rect x="200" y="85" width="240" height="50" rx="10" fill="#2563eb"/>
<text x="320" y="117" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">🎯 TESI</text>
<line x1="270" y1="135" x2="140" y2="170" stroke="#16a34a" stroke-width="3"/>
<line x1="370" y1="135" x2="500" y2="170" stroke="#dc2626" stroke-width="3"/>
<rect x="30" y="170" width="220" height="80" rx="10" fill="#16a34a"/>
<text x="140" y="198" font-size="17" text-anchor="middle" fill="#fff" font-weight="bold">✅ ARGOMENTI</text>
<text x="140" y="220" font-size="15" text-anchor="middle" fill="#fff">dati, esempi, esperti,</text>
<text x="140" y="240" font-size="15" text-anchor="middle" fill="#fff">ragionamenti</text>
<rect x="390" y="170" width="220" height="80" rx="10" fill="#dc2626"/>
<text x="500" y="198" font-size="17" text-anchor="middle" fill="#fff" font-weight="bold">⚔️ ANTITESI</text>
<text x="500" y="220" font-size="15" text-anchor="middle" fill="#fff">+ CONFUTAZIONE</text>
<text x="500" y="240" font-size="15" text-anchor="middle" fill="#fff">"qualcuno dirà… ma…"</text>
<line x1="140" y1="250" x2="300" y2="280" stroke="#334155" stroke-width="3"/>
<line x1="500" y1="250" x2="340" y2="280" stroke="#334155" stroke-width="3"/>
<rect x="200" y="275" width="240" height="45" rx="10" fill="#a855f7"/>
<text x="320" y="304" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">🏁 CONCLUSIONE</text>
</svg>`,
      caption: "La tesi è sostenuta dagli argomenti e 'difesa' dalla confutazione dell'antitesi."
    },
    {
      type: "text",
      title: "I tipi di argomenti",
      html: `<table>
<tr><th>Tipo</th><th>Che cosa usa</th><th>Esempio</th></tr>
<tr><td><b>Pragmatico / dati</b></td><td>fatti, numeri, statistiche</td><td><i>"Secondo l'ISTAT, gran parte degli adolescenti usa lo smartphone ogni giorno…"</i></td></tr>
<tr><td><b>Di autorità</b></td><td>parere di esperti o istituzioni</td><td><i>"L'Organizzazione Mondiale della Sanità raccomanda almeno 60 minuti di attività fisica al giorno per i ragazzi."</i></td></tr>
<tr><td><b>Per esempio / esperienza</b></td><td>casi concreti, esperienze personali</td><td><i>"Nella mia classe, chi legge di più scrive anche meglio."</i></td></tr>
<tr><td><b>Logico</b></td><td>ragionamenti causa-effetto</td><td><i>"Se tutti prendessero l'auto, il traffico aumenterebbe e quindi anche lo smog."</i></td></tr>
<tr><td><b>Per analogia</b></td><td>confronto con una situazione simile</td><td><i>"Come un muscolo si rafforza con l'allenamento, così la memoria."</i></td></tr>
<tr><td><b>Morale / valoriale</b></td><td>principi condivisi (giustizia, rispetto)</td><td><i>"Ogni persona merita rispetto, quindi il bullismo va fermato."</i></td></tr>
</table>`
    },
    {
      type: "text",
      title: "I connettivi: le cerniere del ragionamento",
      html: `<ul>
<li><b>Per introdurre la tesi</b>: secondo me, a mio parere, ritengo che, sono convinto che.</li>
<li><b>Per aggiungere argomenti</b>: inoltre, in secondo luogo, non solo… ma anche, per di più.</li>
<li><b>Per portare prove</b>: infatti, per esempio, come dimostra, secondo i dati.</li>
<li><b>Per l'antitesi</b>: qualcuno potrebbe obiettare che, è vero che, certo.</li>
<li><b>Per confutare</b>: tuttavia, ma, eppure, al contrario, ciononostante.</li>
<li><b>Per concludere</b>: in conclusione, quindi, perciò, per tutti questi motivi.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: la struttura",
      questions: [
        { type: "mc", q: "Che cos'è la tesi?", options: ["L'opinione contraria", "L'opinione sostenuta dall'autore", "Il riassunto finale"], answer: 1, explain: "La tesi è la posizione che l'autore difende." },
        { type: "mc", q: "\"Il 90% degli incidenti in bici avviene senza casco\" è un argomento…", options: ["di autorità", "pragmatico (basato su dati)", "per analogia"], answer: 1, explain: "Usa un dato numerico: argomento pragmatico/statistico (verifica sempre la fonte dei dati!)." },
        { type: "tf", q: "Presentare l'antitesi indebolisce sempre il testo.", answer: false, explain: "Se la confuti bene, l'antitesi rende il testo più convincente." }
      ]
    },
    {
      type: "example",
      title: "Esempio: un testo argomentativo breve",
      html: `<p><b>Problema</b>: <i>Lo smartphone dovrebbe essere vietato a scuola?</i></p>
<p><span style="color:#2563eb"><b>[Tesi]</b></span> Secondo me lo smartphone dovrebbe restare spento durante le lezioni, ma non essere vietato del tutto. <span style="color:#16a34a"><b>[Argomento 1 – dati]</b></span> Infatti, diversi studi internazionali, come il rapporto UNESCO del 2023, segnalano che le notifiche distraggono gli studenti. <span style="color:#16a34a"><b>[Argomento 2 – esperienza]</b></span> Inoltre, nella mia classe, quando i telefoni sono nell'armadietto l'attenzione è maggiore. <span style="color:#dc2626"><b>[Antitesi]</b></span> Qualcuno potrebbe obiettare che il telefono serve per fare ricerche. <span style="color:#dc2626"><b>[Confutazione]</b></span> È vero, tuttavia può essere usato solo quando l'insegnante lo richiede, come uno strumento di lavoro. <span style="color:#a855f7"><b>[Conclusione]</b></span> Per questi motivi, propongo una regola chiara: telefono spento, ma acceso per le attività didattiche.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: argomentare in famiglia",
      html: `<p>Vuoi convincere i tuoi genitori ad adottare un cane. Confronta:</p>
<ul>
<li>❌ <i>"Voglio un cane! Tutti i miei amici ce l'hanno!"</i> → solo un desiderio + un argomento debole (\"lo fanno tutti\").</li>
<li>✅ <i>"Vorrei un cane (<b>tesi</b>). Mi aiuterebbe a essere più responsabile: lo porterei fuori ogni mattina prima di scuola (<b>argomento</b>). So che temete che poi non me ne occupi (<b>antitesi</b>), ma possiamo fare una prova di un mese con il cane della zia (<b>confutazione con proposta</b>). Così vedrete che sono pronto (<b>conclusione</b>)."</i></li>
</ul>
<p>La seconda versione ha molte più probabilità di funzionare!</p>`
    },
    {
      type: "widget",
      title: "Riconosci le parti",
      widget: "classify",
      options: {
        groups: ["Tesi", "Argomento", "Antitesi", "Conclusione"],
        items: [
          ["Secondo me la mensa dovrebbe offrire più verdura", 0],
          ["Infatti i nutrizionisti consigliano 5 porzioni al giorno di frutta e verdura", 1],
          ["Qualcuno dirà che ai ragazzi la verdura non piace", 2],
          ["Per questi motivi propongo un menù con verdura ogni giorno", 3],
          ["Ritengo che lo sport debba essere obbligatorio ogni giorno", 0],
          ["Inoltre chi fa sport dorme meglio", 1],
          ["Certo, c'è chi sostiene che manchi il tempo", 2],
          ["In conclusione, un'ora di movimento è un investimento", 3]
        ]
      },
      caption: "I connettivi (secondo me, infatti, qualcuno dirà, in conclusione) sono indizi preziosi."
    },
    {
      type: "text",
      title: "Le trappole: argomenti fallaci",
      html: `<p>Alcuni ragionamenti <b>sembrano</b> convincenti ma sono scorretti. Si chiamano <b>fallacie</b>. Imparare a riconoscerle ti protegge da pubblicità, propaganda e fake news.</p>
<ul>
<li><b>Attacco alla persona</b> (<i>ad hominem</i>): <i>"Non ascoltarlo, è solo un ragazzino."</i> → si attacca chi parla, non le sue idee.</li>
<li><b>Lo fanno tutti</b> (<i>ad populum</i>): <i>"Milioni di persone lo comprano, quindi è il migliore."</i></li>
<li><b>Falsa alternativa</b>: <i>"O sei con me o sei contro di me."</i> → esistono altre possibilità.</li>
<li><b>Generalizzazione</b>: <i>"Un mio amico si è annoiato in montagna, quindi la montagna è noiosa."</i></li>
<li><b>Uomo di paglia</b>: si deforma l'idea dell'avversario per smontarla più facilmente.</li>
<li><b>Pendio scivoloso</b>: <i>"Se ti do un biscotto, poi vorrai tutta la scatola, poi diventerai…"</i></li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La retorica nell'antica Grecia",
      html: `<p>L'arte di convincere si chiama <b>retorica</b>. Nel IV secolo a.C. il filosofo <b>Aristotele</b> scrisse un trattato intitolato proprio <i>Retorica</i>, in cui distingueva tre "leve" per persuadere: il <b>logos</b> (la ragione, gli argomenti), l'<b>ethos</b> (la credibilità di chi parla) e il <b>pathos</b> (le emozioni del pubblico). Ancora oggi pubblicitari e politici le usano tutte e tre!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il dibattito come sport",
      html: `<p>Esistono gare di <b>dibattito</b> (in inglese <i>debate</i>): due squadre ricevono un tema e devono sostenere una tesi a favore o contro, spesso <b>estratta a sorte</b>! In Italia il Ministero dell'Istruzione promuove le <b>Olimpiadi di Debate</b> nelle scuole superiori. Allenarsi a difendere anche l'opinione che non condividi aiuta a capire meglio gli altri.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare: come scrivere un buon testo argomentativo",
      html: `<ol>
<li>Leggi bene la traccia e individua il <b>problema</b>.</li>
<li>Decidi la tua <b>tesi</b> e scrivila in una frase chiara.</li>
<li>Trova almeno <b>tre argomenti</b> di tipo diverso (dati, esempi, esperti…).</li>
<li>Prevedi l'<b>antitesi</b> più forte e preparane la <b>confutazione</b>.</li>
<li>Usa <b>connettivi</b> per legare le parti e chiudi con una <b>conclusione</b> che ribadisce la tesi.</li>
<li>Rileggi: niente fallacie, niente insulti, fonti citate.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'argomentazione",
      intro: "Se lo schema \"tesi-argomenti-antitesi\" ti sembra astratto, prova questi metodi usati in altri Paesi o queste analogie.",
      tabs: [
        {
          label: "🍔 Il metodo hamburger (USA)",
          html: `<p>Nelle scuole americane si insegna il <b>"hamburger paragraph"</b>:</p>
<ul>
<li>🍞 <b>Panino sopra</b> = introduzione con la tesi (<i>topic sentence</i>);</li>
<li>🥬 🍅 🥩 <b>Ripieno</b> = tre argomenti, ognuno con una prova;</li>
<li>🍞 <b>Panino sotto</b> = conclusione che ripete la tesi con parole nuove.</li>
</ul>
<p>Se manca un pezzo, l'hamburger cade a pezzi! Molti studenti americani imparano anche il modello del <b>"five-paragraph essay"</b>: introduzione, tre paragrafi di argomenti, conclusione.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<path d="M150 70 Q300 -10 450 70 Z" fill="#d97706"/>
<text x="300" y="60" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">TESI</text>
<rect x="145" y="80" width="310" height="25" rx="10" fill="#16a34a"/>
<text x="300" y="98" font-size="15" text-anchor="middle" fill="#fff">Argomento 1</text>
<rect x="150" y="110" width="300" height="25" rx="5" fill="#dc2626"/>
<text x="300" y="128" font-size="15" text-anchor="middle" fill="#fff">Argomento 2</text>
<rect x="145" y="140" width="310" height="30" rx="10" fill="#7c2d12"/>
<text x="300" y="161" font-size="15" text-anchor="middle" fill="#fff">Argomento 3</text>
<path d="M150 180 L450 180 Q450 225 300 225 Q150 225 150 180 Z" fill="#d97706"/>
<text x="300" y="208" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">CONCLUSIONE</text>
</svg>`
        },
        {
          label: "⚖️ Il tribunale",
          html: `<p>Pensa a un <b>processo</b>:</p>
<ul>
<li>il <b>problema</b> è il caso da giudicare;</li>
<li>la <b>tesi</b> è ciò che l'avvocato vuole dimostrare (<i>"Il mio cliente è innocente"</i>);</li>
<li>gli <b>argomenti</b> sono le prove: testimoni (autorità), documenti (dati), alibi (fatti logici);</li>
<li>l'<b>antitesi</b> è la tesi dell'accusa; la <b>confutazione</b> è il controinterrogatorio;</li>
<li>la <b>conclusione</b> è l'arringa finale davanti alla giuria.</li>
</ul>
<p>Il lettore del tuo testo è il <b>giudice</b>: deve poter decidere solo sulla base delle ragioni che porti.</p>`
        },
        {
          label: "🇬🇧 Il modello di Toulmin",
          html: `<p>Il filosofo inglese <b>Stephen Toulmin</b> nel 1958 propose un modello usato in molte università:</p>
<ul>
<li><b>Claim</b> (affermazione) = la tesi;</li>
<li><b>Data</b> (dati) = i fatti che la sostengono;</li>
<li><b>Warrant</b> (garanzia) = il "ponte" che spiega <i>perché</i> quei dati sostengono la tesi;</li>
<li><b>Rebuttal</b> (eccezione) = i casi in cui la tesi non vale.</li>
</ul>
<p>Esempio: <i>Claim</i>: "Domani conviene portare l'ombrello". <i>Data</i>: "Il meteo dà 80% di pioggia". <i>Warrant</i>: "Le previsioni a un giorno sono di solito affidabili". <i>Rebuttal</i>: "a meno che il fronte non cambi direzione".</p>
<p>Il pezzo che spesso dimentichiamo è il <b>warrant</b>: spiega sempre il collegamento tra prova e tesi!</p>`
        },
        {
          label: "🃏 Flashcard dei connettivi",
          html: `<p>Gira le carte e ripassa a che cosa serve ogni connettivo.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "Secondo me / Ritengo che", back: "Introduce la TESI" },
            { front: "Infatti", back: "Introduce una PROVA o una spiegazione" },
            { front: "Inoltre / In secondo luogo", back: "Aggiunge un ARGOMENTO" },
            { front: "Qualcuno potrebbe obiettare che", back: "Introduce l'ANTITESI" },
            { front: "Tuttavia / Eppure", back: "Introduce la CONFUTAZIONE" },
            { front: "In conclusione / Per questi motivi", back: "Introduce la CONCLUSIONE" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del testo argomentativo",
      nodes: [
        { id: "problema", label: "Problema", x: 50, y: 6, color: "#64748b", html: "La questione su cui si discute, su cui sono possibili opinioni diverse.", why: "Si argomenta solo su ciò che è discutibile: nessuno argomenta che 2 + 2 = 4. Aristotele distingueva le dimostrazioni (certe) dai ragionamenti sul probabile, terreno della retorica." },
        { id: "tesi", label: "Tesi", x: 50, y: 26, color: "#2563eb", html: "L'opinione che l'autore sostiene.", why: "Dal greco <i>thésis</i>, \"posizione\": ciò che si 'pone' come vero e si deve dimostrare." },
        { id: "argomenti", label: "Argomenti", x: 20, y: 48, color: "#16a34a", html: "Ragioni e prove a sostegno della tesi: dati, esempi, autorità, logica, analogia.", why: "Dal latino <i>arguere</i>, \"mostrare chiaramente\". Già Aristotele li divideva in prove tecniche (costruite col ragionamento) e non tecniche (testimonianze, documenti)." },
        { id: "antitesi", label: "Antitesi", x: 80, y: 48, color: "#dc2626", html: "L'opinione opposta alla tesi.", why: "Dal greco <i>anti</i> + <i>thésis</i>, \"posizione contraria\". Nella tradizione del dibattito si deve sempre ascoltare la parte avversa (latino: <i>audiatur et altera pars</i>)." },
        { id: "confutazione", label: "Confutazione", x: 80, y: 70, color: "#f97316", html: "La parte in cui si dimostra che l'antitesi è debole o sbagliata.", why: "Dal latino <i>confutare</i>, \"respingere\". Nella retorica di Cicerone e Quintiliano (I secolo d.C.) era una parte fissa dell'orazione: la <i>refutatio</i>." },
        { id: "conclusione", label: "Conclusione", x: 50, y: 90, color: "#a855f7", html: "Ribadisce la tesi e può fare una proposta.", why: "Corrisponde alla <i>peroratio</i> dei Romani: l'ultima parte del discorso, che deve restare in mente al pubblico." },
        { id: "connettivi", label: "Connettivi", x: 20, y: 72, color: "#0ea5e9", html: "Parole che collegano le parti: infatti, inoltre, tuttavia, quindi…", why: "Rendono visibile la logica del testo: senza di essi il lettore non capisce se stai portando una prova o un'obiezione." },
        { id: "retorica", label: "Retorica", x: 50, y: 60, color: "#eab308", html: "L'arte di persuadere con le parole: logos, ethos, pathos.", why: "Nacque in Sicilia nel V secolo a.C. (Corace e Tisia), per aiutare i cittadini a difendersi nei processi, e fu sistemata da Aristotele." },
        { id: "fallacie", label: "Fallacie", x: 20, y: 90, color: "#475569", html: "Ragionamenti scorretti che sembrano validi.", why: "Aristotele le studiò nelle <i>Confutazioni sofistiche</i>, contro i sofisti che usavano trucchi verbali per vincere le discussioni." }
      ],
      edges: [
        ["problema", "tesi", "si risponde con"],
        ["tesi", "argomenti", "è sostenuta da"],
        ["tesi", "antitesi", "si oppone a"],
        ["antitesi", "confutazione", "viene respinta con"],
        ["argomenti", "connettivi", "legati da"],
        ["confutazione", "conclusione", "porta a"],
        ["retorica", "tesi", "studia come sostenere"],
        ["argomenti", "fallacie", "da non confondere con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: argomenti e fallacie",
      questions: [
        { type: "mc", q: "\"Non puoi parlare di ambiente perché vai in auto!\" è…", options: ["un argomento di autorità", "un attacco alla persona", "un'analogia"], answer: 1, explain: "Si attacca chi parla invece di discutere l'idea: fallacia ad hominem." },
        { type: "mc", q: "Quale connettivo introduce una confutazione?", options: ["infatti", "tuttavia", "inoltre"], answer: 1, explain: "\"Tuttavia\" introduce un'opposizione, tipica della confutazione." },
        { type: "tf", q: "Un argomento di autorità è più forte se l'esperto citato è competente proprio in quel campo.", answer: true, explain: "Un premio Nobel per la fisica non è un'autorità in nutrizione: conta la competenza specifica." }
      ]
    }
  ],
  glossary: [
    { t: "Testo argomentativo", d: "Testo che sostiene una tesi con argomenti per convincere il lettore." },
    { t: "Problema", d: "La questione discutibile da cui parte il testo." },
    { t: "Tesi", d: "L'opinione sostenuta dall'autore." },
    { t: "Antitesi", d: "L'opinione contraria alla tesi." },
    { t: "Argomento", d: "Ragione o prova a sostegno di una tesi." },
    { t: "Confutazione", d: "Dimostrazione della debolezza dell'antitesi." },
    { t: "Connettivo", d: "Parola o espressione che collega le parti del testo." },
    { t: "Fallacia", d: "Ragionamento scorretto che sembra valido." },
    { t: "Retorica", d: "L'arte di persuadere con le parole." },
    { t: "Logos, ethos, pathos", d: "Le tre leve della persuasione secondo Aristotele: ragione, credibilità, emozione." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Lo scopo principale del testo argomentativo è…", options: ["raccontare una storia", "convincere con ragioni", "descrivere un luogo"], answer: 1, explain: "Argomentare significa sostenere un'opinione per convincere." },
      { type: "mc", q: "\"Secondo l'Istituto Superiore di Sanità…\" introduce un argomento…", options: ["di autorità", "per analogia", "morale"], answer: 0, explain: "Si cita un'istituzione esperta: argomento di autorità." },
      { type: "tf", q: "Il testo espositivo e quello argomentativo hanno lo stesso scopo.", answer: false, explain: "L'espositivo informa in modo neutrale, l'argomentativo prende posizione." },
      { type: "order", q: "Metti in ordine le parti di un testo argomentativo completo.", items: ["Problema", "Tesi", "Argomenti", "Antitesi", "Confutazione", "Conclusione"], explain: "È l'ordine classico; a volte la tesi può essere anticipata o ripresa nella conclusione." },
      { type: "text", q: "Come si chiama l'opinione contraria alla tesi?", answer: ["antitesi", "l'antitesi"], explain: "Antitesi." },
      { type: "mc", q: "\"Tutti i miei compagni hanno quel videogioco, quindi è il migliore\" è una fallacia…", options: ["ad populum (lo fanno tutti)", "falsa alternativa", "pendio scivoloso"], answer: 0, explain: "Che sia diffuso non prova che sia il migliore." },
      { type: "mc", q: "\"Come una pianta ha bisogno di acqua, così un bambino ha bisogno di affetto\" è un argomento…", options: ["pragmatico", "per analogia", "di autorità"], answer: 1, explain: "Confronta due situazioni simili: analogia." },
      { type: "tf", q: "Nella confutazione si dimostra che l'antitesi è debole.", answer: true, explain: "Confutare significa respingere l'opinione contraria con ragioni." },
      { type: "mc", q: "Quale connettivo introduce la conclusione?", options: ["Per esempio", "Per tutti questi motivi", "Qualcuno sostiene che"], answer: 1, explain: "\"Per tutti questi motivi\" riassume e chiude." },
      { type: "text", q: "Quale filosofo greco scrisse la \"Retorica\"?", answer: ["aristotele"], explain: "Aristotele, IV secolo a.C." },
      { type: "mc", q: "\"O vieni al mare con noi, o resti solo tutta l'estate\" è…", options: ["una falsa alternativa", "un argomento logico corretto", "un dato statistico"], answer: 0, explain: "Presenta solo due possibilità quando ce ne sono altre." }
    ]
  }
});

TOPIC('it', {
  id: "p5-ita-analisi-grammaticale",
  title: "L'analisi grammaticale",
  intro: "Ogni parola di una frase ha un \"mestiere\": c'è chi dà il nome alle cose, chi descrive, chi indica un'azione, chi collega… Fare l'<b>analisi grammaticale</b> vuol dire riconoscere il mestiere di ogni parola. In italiano i mestieri sono <b>nove</b>: le <b>nove parti del discorso</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Che cos'è l'analisi grammaticale",
      html: `<p>Fare l'<b>analisi grammaticale</b> significa prendere una frase, guardare le parole <b>una per una</b> e dire per ciascuna:</p>
<ol>
<li><b>che parte del discorso è</b> (nome, verbo, aggettivo…);</li>
<li>le sue <b>caratteristiche</b>: genere (maschile/femminile), numero (singolare/plurale), e per il verbo coniugazione, modo, tempo, persona.</li>
</ol>
<p>Attenzione: l'analisi grammaticale guarda la <b>singola parola</b>. L'analisi <b>logica</b>, invece, guarda il <b>ruolo</b> che le parole hanno nella frase (soggetto, predicato…). Sono due cose diverse!</p>`
    },
    {
      type: "text",
      title: "Le nove parti del discorso",
      html: `<p>Le parti del discorso si dividono in due grandi famiglie.</p>
<p><b>Parti VARIABILI</b> (cambiano forma: maschile/femminile, singolare/plurale, tempi…):</p>
<ul>
<li><b>Articolo</b>: sta davanti al nome e ne indica genere e numero. Determinativo (<i>il, lo, la, i, gli, le, l'</i>), indeterminativo (<i>un, uno, una, un'</i>), partitivo (<i>del, dello, della, dei, degli, delle</i> = "un po' di", "alcuni").</li>
<li><b>Nome</b>: indica persone, animali, cose, idee. Comune o proprio, concreto o astratto, individuale o collettivo.</li>
<li><b>Aggettivo</b>: si unisce al nome per descriverlo (qualificativo: <i>alto, rosso</i>) o per precisarlo (possessivo <i>mio</i>, dimostrativo <i>questo</i>, numerale <i>tre</i>, indefinito <i>alcuni</i>, interrogativo <i>quale?</i>).</li>
<li><b>Pronome</b>: sta <b>al posto</b> del nome (pro-nome) per non ripeterlo: <i>io, lui, lo, gli, questo, che, chi…</i></li>
<li><b>Verbo</b>: indica un'azione, uno stato o un modo di essere: <i>corro, sono, piove</i>.</li>
</ul>
<p><b>Parti INVARIABILI</b> (non cambiano mai forma):</p>
<ul>
<li><b>Avverbio</b>: modifica il significato di un verbo, di un aggettivo o di un altro avverbio: <i>bene, oggi, qui, molto, non</i>.</li>
<li><b>Preposizione</b>: collega le parole. Semplici: <i>di, a, da, in, con, su, per, tra, fra</i>. Articolate = preposizione + articolo: <i>del, alla, nei, sugli…</i></li>
<li><b>Congiunzione</b>: unisce parole o frasi: <i>e, o, ma, perché, quando, se, però</i>.</li>
<li><b>Interiezione</b> (o esclamazione): esprime un'emozione: <i>oh!, ahi!, evviva!, uffa!</i></li>
</ul>`
    },
    {
      type: "svg",
      title: "Una frase, tanti colori",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="320" y="36" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">Oh! Il mio gatto dorme tranquillo sul divano e io lo guardo.</text>
<g font-size="15" text-anchor="middle">
<rect x="10" y="70" width="60" height="44" rx="8" fill="#facc15"/><text x="40" y="97" fill="#1f2937" font-weight="bold">Oh!</text>
<rect x="76" y="70" width="44" height="44" rx="8" fill="#7dd3fc"/><text x="98" y="97" fill="#1f2937" font-weight="bold">Il</text>
<rect x="126" y="70" width="58" height="44" rx="8" fill="#3b82f6"/><text x="155" y="97" fill="#ffffff" font-weight="bold">mio</text>
<rect x="190" y="70" width="70" height="44" rx="8" fill="#1f2937"/><text x="225" y="97" fill="#ffffff" font-weight="bold">gatto</text>
<rect x="266" y="70" width="74" height="44" rx="8" fill="#dc2626"/><text x="303" y="97" fill="#ffffff" font-weight="bold">dorme</text>
<rect x="346" y="70" width="92" height="44" rx="8" fill="#3b82f6"/><text x="392" y="97" fill="#ffffff" font-weight="bold">tranquillo</text>
<rect x="444" y="70" width="48" height="44" rx="8" fill="#16a34a"/><text x="468" y="97" fill="#ffffff" font-weight="bold">sul</text>
<rect x="498" y="70" width="70" height="44" rx="8" fill="#1f2937"/><text x="533" y="97" fill="#ffffff" font-weight="bold">divano</text>
<rect x="574" y="70" width="56" height="44" rx="8" fill="#ec4899"/><text x="602" y="97" fill="#ffffff" font-weight="bold">e</text>
</g>
<g font-size="15" text-anchor="middle">
<rect x="220" y="130" width="50" height="44" rx="8" fill="#7c3aed"/><text x="245" y="157" fill="#ffffff" font-weight="bold">io</text>
<rect x="276" y="130" width="50" height="44" rx="8" fill="#7c3aed"/><text x="301" y="157" fill="#ffffff" font-weight="bold">lo</text>
<rect x="332" y="130" width="90" height="44" rx="8" fill="#dc2626"/><text x="377" y="157" fill="#ffffff" font-weight="bold">guardo</text>
</g>
<g font-size="15" fill="#1f2937">
<rect x="20" y="200" width="18" height="18" fill="#1f2937"/><text x="44" y="215">nome</text>
<rect x="120" y="200" width="18" height="18" fill="#7dd3fc"/><text x="144" y="215">articolo</text>
<rect x="230" y="200" width="18" height="18" fill="#3b82f6"/><text x="254" y="215">aggettivo</text>
<rect x="350" y="200" width="18" height="18" fill="#dc2626"/><text x="374" y="215">verbo</text>
<rect x="450" y="200" width="18" height="18" fill="#7c3aed"/><text x="474" y="215">pronome</text>
<rect x="20" y="240" width="18" height="18" fill="#16a34a"/><text x="44" y="255">preposizione</text>
<rect x="170" y="240" width="18" height="18" fill="#ec4899"/><text x="194" y="255">congiunzione</text>
<rect x="320" y="240" width="18" height="18" fill="#facc15"/><text x="344" y="255">interiezione</text>
<rect x="470" y="240" width="18" height="18" fill="#f97316"/><text x="494" y="255">avverbio</text>
</g>
<text x="320" y="290" font-size="14" text-anchor="middle" fill="#475569">Attenzione: qui "tranquillo" è un aggettivo (si accorda con gatto: gatta tranquilla).</text>
</svg>`,
      caption: "Ogni colore è una parte del discorso. Nella frase ci sono 8 delle 9 parti: manca solo l'avverbio (arancione)."
    },
    {
      type: "text",
      title: "Come si fa, passo dopo passo",
      html: `<ol>
<li><b>Trova il verbo</b> (o i verbi): è il cuore della frase. Chiediti: "c'è un'azione o uno stato?"</li>
<li><b>Trova i nomi</b> e, subito davanti, gli <b>articoli</b>.</li>
<li><b>Cerca gli aggettivi</b>: sono le parole che si accordano con un nome (cambiano se il nome diventa femminile o plurale).</li>
<li><b>Cerca i pronomi</b>: parole che sostituiscono un nome (prova a rimetterci il nome: "lo guardo" = "guardo il gatto").</li>
<li>Rimangono le <b>parole invariabili</b>: collegano parole (preposizione), uniscono frasi (congiunzione), modificano un verbo o un aggettivo (avverbio), esprimono emozioni (interiezione).</li>
<li>Per ogni parola variabile scrivi <b>genere e numero</b>; per il verbo: <b>coniugazione, modo, tempo, persona</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio svolto: «La nonna prepara spesso una torta buonissima.»",
      html: `<table>
<tr><th>Parola</th><th>Analisi</th></tr>
<tr><td><b>La</b></td><td>articolo determinativo, femminile singolare</td></tr>
<tr><td><b>nonna</b></td><td>nome comune di persona, concreto, femminile singolare</td></tr>
<tr><td><b>prepara</b></td><td>verbo <i>preparare</i>, 1ª coniugazione, modo indicativo, tempo presente, 3ª persona singolare</td></tr>
<tr><td><b>spesso</b></td><td>avverbio di tempo (frequenza)</td></tr>
<tr><td><b>una</b></td><td>articolo indeterminativo, femminile singolare</td></tr>
<tr><td><b>torta</b></td><td>nome comune di cosa, concreto, femminile singolare</td></tr>
<tr><td><b>buonissima</b></td><td>aggettivo qualificativo, grado superlativo assoluto, femminile singolare</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: riconosci le parti",
      questions: [
        { type: "mc", q: "Nella frase «Noi giochiamo in cortile», «noi» è…", options: ["un nome", "un pronome", "un articolo"], answer: 1, explain: "«Noi» sta al posto dei nomi delle persone che parlano: è un pronome personale soggetto." },
        { type: "mc", q: "Quale di queste parole è una preposizione articolata?", options: ["con", "nella", "ma"], answer: 1, explain: "«Nella» = in + la: preposizione semplice + articolo." },
        { type: "tf", q: "L'avverbio è una parte variabile del discorso.", answer: false, explain: "L'avverbio non cambia mai forma: è invariabile (velocemente, ieri, qui)." },
        { type: "mc", q: "Quante sono le parti del discorso in italiano?", options: ["7", "9", "12"], answer: 1, explain: "Sono nove: 5 variabili e 4 invariabili." }
      ]
    },
    {
      type: "widget",
      title: "Gioco: variabile o invariabile?",
      widget: "classify",
      options: {
        groups: ["Parte variabile", "Parte invariabile"],
        items: [["🐱 gatto (nome)", 0], ["🔵 bello (aggettivo)", 0], ["🏃 corrono (verbo)", 0], ["👉 la (articolo)", 0], ["🙋 noi (pronome)", 0], ["⚡ velocemente (avverbio)", 1], ["🔗 con (preposizione)", 1], ["➕ perché (congiunzione)", 1], ["😮 oh! (interiezione)", 1], ["📅 ieri (avverbio)", 1]]
      },
      caption: "Trascina ogni parola nel gruppo giusto. Le parti variabili cambiano forma (gatto → gatti), le invariabili mai."
    },
    {
      type: "text",
      title: "Attenzione alle parole \"camaleonte\"",
      html: `<p>Alcune parole cambiano parte del discorso a seconda di <b>come</b> sono usate nella frase. Per questo bisogna sempre guardare la frase intera!</p>
<ul>
<li><b>«La»</b>: in «<u>la</u> mela» è un <b>articolo</b>; in «<u>la</u> mangio» è un <b>pronome</b> (sta per "la mela").</li>
<li><b>«Forte»</b>: in «un vento <u>forte</u>» è un <b>aggettivo</b>; in «parla <u>forte</u>» è un <b>avverbio</b>.</li>
<li><b>«Questo»</b>: in «<u>questo</u> libro» è un <b>aggettivo</b> dimostrativo; in «prendo <u>questo</u>» è un <b>pronome</b>.</li>
<li><b>«Che»</b>: in «il libro <u>che</u> leggo» è un <b>pronome</b> relativo (= il quale); in «so <u>che</u> verrai» è una <b>congiunzione</b>.</li>
<li><b>«Bello»</b>: in «un <u>bello</u> spettacolo» è aggettivo; in «il <u>bello</u> della vita» è un nome (aggettivo sostantivato).</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio svolto con un verbo composto",
      html: `<p>«<b>Ieri</b> Luca <b>è andato</b> al mare <b>con</b> i suoi cugini.»</p>
<ul>
<li><b>Ieri</b>: avverbio di tempo.</li>
<li><b>Luca</b>: nome proprio di persona, maschile singolare.</li>
<li><b>è andato</b>: verbo <i>andare</i>, 1ª coniugazione, modo indicativo, tempo <b>passato prossimo</b>, 3ª persona singolare (le due parole formano <b>un solo verbo</b>: ausiliare + participio).</li>
<li><b>al</b>: preposizione articolata (a + il).</li>
<li><b>mare</b>: nome comune di cosa, maschile singolare.</li>
<li><b>con</b>: preposizione semplice.</li>
<li><b>i</b>: articolo determinativo, maschile plurale.</li>
<li><b>suoi</b>: aggettivo possessivo, maschile plurale.</li>
<li><b>cugini</b>: nome comune di persona, maschile plurale.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Una lista vecchia di 2000 anni",
      html: `<p>La prima lista delle parti del discorso arrivata fino a noi è nella <b>Tecnica grammaticale</b> attribuita al greco <b>Dionisio Trace</b> (II secolo a.C.). Ne contava <b>otto</b>! Poi i grammatici latini, come <b>Elio Donato</b> (IV secolo d.C.), ne fecero una lista simile. Il latino <b>non aveva l'articolo</b>: è nato più tardi, nell'italiano e nelle altre lingue romanze, dal dimostrativo latino <i>ille</i> ("quello") → <i>il, la, lo</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Grammatica = lettere",
      html: `<p>La parola <b>grammatica</b> viene dal greco <i>grámma</i>, che vuol dire "lettera" (dell'alfabeto). La prima grammatica a stampa della lingua italiana, le <b>Regole grammaticali della volgar lingua</b> di Giovanni Francesco Fortunio, uscì nel <b>1516</b>; pochi anni dopo, nel 1525, Pietro Bembo pubblicò le famose <i>Prose della volgar lingua</i>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Le parti del discorso sono <b>9</b>: articolo, nome, aggettivo, pronome, verbo (<b>variabili</b>); avverbio, preposizione, congiunzione, interiezione (<b>invariabili</b>).</li>
<li>Una stessa parola può essere parti diverse: <b>guarda sempre la frase</b>.</li>
<li>Il verbo composto (es. <i>ho mangiato</i>) si analizza come <b>una sola</b> parola.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le parti del discorso",
      intro: "Se le definizioni ti confondono, prova uno di questi metodi: i simboli di Maria Montessori, la squadra di calcio, i test \"magici\" e il confronto con l'inglese.",
      tabs: [
        {
          label: "🔺 I simboli Montessori",
          html: `<p>La pedagogista italiana <b>Maria Montessori</b> inventò un simbolo per ogni parte del discorso, così i bambini \"vedono\" la grammatica. Si disegnano sopra ogni parola:</p>
<ul>
<li>⚫ <b>Nome</b>: grande triangolo nero (solido e stabile come una piramide: le cose esistono).</li>
<li>🔹 <b>Articolo</b>: piccolo triangolo azzurro; <b>aggettivo</b>: triangolo blu medio (sono \"parenti\" del nome).</li>
<li>🔴 <b>Verbo</b>: grande cerchio rosso (una palla che rotola: energia, azione); <b>avverbio</b>: piccolo cerchio arancione.</li>
<li>🟣 <b>Pronome</b>: triangolo viola alto e stretto.</li>
<li>🟢 <b>Preposizione</b>: mezzaluna verde (un \"ponte\"); 🩷 <b>congiunzione</b>: rettangolino rosa (un \"trattino\" che unisce); 🔑 <b>interiezione</b>: buco della serratura dorato.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<polygon points="70,40 30,110 110,110" fill="#111827"/><text x="70" y="140" font-size="16" text-anchor="middle">nome</text>
<polygon points="170,80 150,110 190,110" fill="#7dd3fc"/><text x="170" y="140" font-size="16" text-anchor="middle">articolo</text>
<polygon points="260,60 230,110 290,110" fill="#2563eb"/><text x="260" y="140" font-size="16" text-anchor="middle">aggettivo</text>
<polygon points="350,30 330,110 370,110" fill="#7c3aed"/><text x="350" y="140" font-size="16" text-anchor="middle">pronome</text>
<circle cx="450" cy="75" r="38" fill="#dc2626"/><text x="450" y="140" font-size="16" text-anchor="middle">verbo</text>
<circle cx="545" cy="90" r="20" fill="#f97316"/><text x="545" y="140" font-size="16" text-anchor="middle">avverbio</text>
<path d="M80,230 A50,50 0 0,1 180,230 A40,32 0 0,0 80,230 Z" fill="#16a34a"/><text x="130" y="252" font-size="16" text-anchor="middle">preposizione</text>
<rect x="250" y="200" width="100" height="22" fill="#f472b6"/><text x="300" y="252" font-size="16" text-anchor="middle">congiunzione</text>
<circle cx="460" cy="195" r="16" fill="#eab308"/><polygon points="452,205 468,205 474,235 446,235" fill="#eab308"/><text x="460" y="252" font-size="16" text-anchor="middle">interiezione</text>
</svg>`
        },
        {
          label: "⚽ La squadra di calcio",
          html: `<p>Immagina la frase come una <b>squadra</b>:</p>
<ul>
<li>il <b>verbo</b> è il <b>centravanti</b>: fa l'azione, senza di lui niente gol (niente frase!);</li>
<li>il <b>nome</b> è il <b>giocatore</b> in campo; l'<b>articolo</b> è il <b>numero sulla maglia</b> che gli sta sempre attaccato; l'<b>aggettivo</b> è il <b>colore della maglia</b> che lo descrive;</li>
<li>il <b>pronome</b> è la <b>riserva</b> che entra <b>al posto</b> del giocatore;</li>
<li>l'<b>avverbio</b> è l'<b>allenatore</b> che dice al centravanti <i>come</i>, <i>quando</i>, <i>dove</i> giocare;</li>
<li><b>preposizioni</b> e <b>congiunzioni</b> sono i <b>passaggi</b> che collegano i giocatori;</li>
<li>l'<b>interiezione</b> è il <b>tifo</b> dagli spalti: «Oh! Evviva!»</li>
</ul>`
        },
        {
          label: "🧪 I test magici",
          html: `<p>Non sai che parte è? Fai una <b>prova</b>:</p>
<ul>
<li><b>Test del plurale</b>: se metto la frase al plurale, la parola cambia? Se <b>sì</b> → è variabile (nome, articolo, aggettivo, pronome, verbo). Se <b>no</b> → è invariabile. «Il bambino corre <u>veloce</u>» → «I bambini corrono <u>veloce</u>»: <i>veloce</i> non cambia, qui è avverbio!</li>
<li><b>Test dell'articolo</b>: posso metterci davanti <i>il/la/un</i>? Allora è probabilmente un <b>nome</b>.</li>
<li><b>Test del \"molto\"</b>: posso dire <i>molto ___</i> o <i>___issimo</i>? Allora è un <b>aggettivo</b> (o un avverbio).</li>
<li><b>Test delle persone</b>: posso dire <i>io ___, tu ___, lui ___</i>? Allora è un <b>verbo</b>.</li>
<li><b>Test della sostituzione</b>: posso rimetterci un nome al suo posto? Allora è un <b>pronome</b>.</li>
</ul>`
        },
        {
          label: "🇬🇧 Come in inglese",
          html: `<p>Anche gli inglesi fanno l'analisi grammaticale: la chiamano <b>parts of speech</b>. Di solito ne contano <b>8</b> (noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection) e mettono l'articolo (<i>the, a</i>) tra gli aggettivi o tra i \"determiners\".</p>
<table>
<tr><th>Italiano</th><th>Inglese</th><th>Esempio</th></tr>
<tr><td>nome</td><td>noun</td><td>cat / gatto</td></tr>
<tr><td>verbo</td><td>verb</td><td>run / correre</td></tr>
<tr><td>aggettivo</td><td>adjective</td><td>big / grande</td></tr>
<tr><td>avverbio</td><td>adverb</td><td>quickly / velocemente</td></tr>
</table>
<p>Trucco: come in italiano molti avverbi finiscono in <b>-mente</b>, in inglese molti finiscono in <b>-ly</b>!</p>`,
          widget: "match",
          options: { pairs: [["noun", "nome"], ["verb", "verbo"], ["adjective", "aggettivo"], ["adverb", "avverbio"], ["pronoun", "pronome"], ["conjunction", "congiunzione"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle parti del discorso",
      nodes: [
        { id: "frase", label: "Frase", x: 50, y: 6, color: "#0f172a", html: "Un insieme di parole che ha un senso compiuto.", why: "L'analisi grammaticale smonta la frase nei suoi \"mattoncini\" per capire come è costruita la lingua." },
        { id: "parti", label: "9 parti del discorso", x: 50, y: 26, color: "#2563eb", html: "Le categorie in cui si dividono tutte le parole: 5 variabili e 4 invariabili.", why: "Il nome viene dal latino <i>partes orationis</i>. La prima classificazione nota è greca (Dionisio Trace, II sec. a.C., con 8 parti); i grammatici latini la adattarono e quella italiana aggiunse l'articolo, che il latino non aveva." },
        { id: "variabili", label: "Parti variabili", x: 22, y: 48, color: "#16a34a", html: "Articolo, nome, aggettivo, pronome, verbo: cambiano forma.", why: "L'italiano \"segna\" genere, numero e persona con le desinenze (la parte finale della parola): <i>gatt-o, gatt-a, gatt-i</i>. È un'eredità del latino, che aveva ancora più desinenze." },
        { id: "invariabili", label: "Parti invariabili", x: 78, y: 48, color: "#f97316", html: "Avverbio, preposizione, congiunzione, interiezione: non cambiano mai.", why: "Servono a collegare o a precisare, non a indicare chi o quanti: per questo non hanno bisogno di desinenze." },
        { id: "nome", label: "Nome", x: 8, y: 72, color: "#111827", html: "Indica persone, animali, cose, idee. Comune/proprio, concreto/astratto, collettivo.", why: "È la parte più antica e importante: in tutte le lingue del mondo esistono nomi e verbi. Gli altri elementi si \"appoggiano\" al nome." },
        { id: "articolo", label: "Articolo e aggettivo", x: 30, y: 72, color: "#3b82f6", html: "Accompagnano il nome e si accordano con lui in genere e numero.", why: "L'articolo italiano nasce dal dimostrativo latino <i>ille, illa</i> (\"quello, quella\"): a forza di usarlo davanti ai nomi si è accorciato in <i>il, lo, la</i>." },
        { id: "pronome", label: "Pronome", x: 50, y: 72, color: "#7c3aed", html: "Sta al posto di un nome per non ripeterlo.", why: "Dal latino <i>pro nomine</i> = \"al posto del nome\". Rende la lingua più veloce: invece di ripetere \"Marco\" dici \"lui\"." },
        { id: "verbo", label: "Verbo", x: 30, y: 92, color: "#dc2626", html: "Indica azioni, stati, modi di essere; ha modi, tempi e persone.", why: "Dal latino <i>verbum</i> = \"parola\": per i Romani era \"la parola\" per eccellenza, perché senza verbo non c'è frase." },
        { id: "collegano", label: "Preposizioni e congiunzioni", x: 72, y: 72, color: "#ec4899", html: "Collegano parole (preposizioni) e frasi (congiunzioni).", why: "Il latino usava i \"casi\" (desinenze) per indicare i rapporti tra parole; quando l'italiano li ha persi, le preposizioni hanno preso il loro posto: <i>rosa-e</i> → <i>della rosa</i>." },
        { id: "avverbio", label: "Avverbio e interiezione", x: 92, y: 90, color: "#eab308", html: "L'avverbio modifica verbo, aggettivo o altro avverbio; l'interiezione esprime emozioni.", why: "<i>Ad-verbium</i> = \"vicino al verbo\". Gli avverbi in <i>-mente</i> vengono dal latino <i>mens</i> (mente): <i>lenta mente</i> = \"con mente lenta\" → <i>lentamente</i>." }
      ],
      edges: [
        ["frase", "parti", "si scompone in"],
        ["parti", "variabili", "5"],
        ["parti", "invariabili", "4"],
        ["variabili", "nome", ""],
        ["variabili", "articolo", ""],
        ["variabili", "pronome", ""],
        ["variabili", "verbo", ""],
        ["invariabili", "collegano", ""],
        ["invariabili", "avverbio", ""],
        ["pronome", "nome", "sostituisce"],
        ["articolo", "nome", "accompagna"],
        ["avverbio", "verbo", "modifica"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: parole camaleonte",
      questions: [
        { type: "mc", q: "In «Quel libro? Lo leggo stasera», «lo» è…", options: ["articolo", "pronome", "preposizione"], answer: 1, explain: "Sta al posto di «il libro»: è un pronome personale complemento." },
        { type: "mc", q: "In «Marta corre forte», «forte» è…", options: ["aggettivo", "avverbio", "nome"], answer: 1, explain: "Modifica il verbo «corre» (corre come? forte) e non cambia al plurale: avverbio." },
        { type: "tf", q: "In «ho mangiato» ci sono due verbi diversi da analizzare separatamente.", answer: false, explain: "È un solo verbo al passato prossimo: ausiliare + participio si analizzano insieme." }
      ]
    }
  ],
  glossary: [
    { t: "Analisi grammaticale", d: "Riconoscere la parte del discorso di ogni parola e le sue caratteristiche." },
    { t: "Parte del discorso", d: "Categoria grammaticale di una parola (nome, verbo, aggettivo…)." },
    { t: "Parte variabile", d: "Parola che cambia forma: articolo, nome, aggettivo, pronome, verbo." },
    { t: "Parte invariabile", d: "Parola che non cambia mai forma: avverbio, preposizione, congiunzione, interiezione." },
    { t: "Preposizione articolata", d: "Preposizione semplice unita a un articolo: del, nella, sugli…" },
    { t: "Desinenza", d: "Parte finale della parola che cambia per indicare genere, numero, persona, tempo." },
    { t: "Accordo", d: "Articolo e aggettivo prendono lo stesso genere e numero del nome." },
    { t: "Verbo composto", d: "Tempo formato da ausiliare (essere/avere) + participio passato: ho visto, sono andato." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale gruppo contiene solo parti invariabili?", options: ["nome, verbo, avverbio", "avverbio, preposizione, congiunzione", "articolo, pronome, interiezione"], answer: 1, explain: "Le invariabili sono avverbio, preposizione, congiunzione e interiezione." },
      { type: "num", q: "Quante sono le parti VARIABILI del discorso?", answer: 5, explain: "Articolo, nome, aggettivo, pronome, verbo." },
      { type: "mc", q: "In «Gli alunni studiano», «gli» è…", options: ["pronome", "articolo determinativo", "preposizione"], answer: 1, explain: "Sta davanti al nome «alunni»: articolo determinativo maschile plurale." },
      { type: "mc", q: "«Dalle» (in «dalle otto») è…", options: ["una preposizione articolata", "un verbo", "una congiunzione"], answer: 0, explain: "Da + le = preposizione articolata." },
      { type: "tf", q: "«Felicità» è un nome astratto.", answer: true, explain: "Indica un sentimento che non si può toccare: nome astratto." },
      { type: "tf", q: "In «Oggi piove», «oggi» è un nome.", answer: false, explain: "Indica quando avviene l'azione e non cambia forma: è un avverbio di tempo." },
      { type: "text", q: "Come si chiama la parte del discorso che sta AL POSTO del nome?", answer: ["pronome", "il pronome"], explain: "Pro-nome: al posto del nome." },
      { type: "mc", q: "In «Ahi! Mi sono punto», «Ahi!» è…", options: ["interiezione", "avverbio", "verbo"], answer: 0, explain: "Esprime un'emozione (dolore): interiezione." },
      { type: "mc", q: "In «Vado a scuola ma non ho voglia», «ma» è…", options: ["preposizione", "congiunzione", "avverbio"], answer: 1, explain: "Unisce due frasi esprimendo un contrasto: congiunzione avversativa." },
      { type: "mc", q: "«Cantavamo» è: verbo cantare, 1ª coniugazione, indicativo…", options: ["presente, 1ª persona plurale", "imperfetto, 1ª persona plurale", "passato remoto, 3ª persona plurale"], answer: 1, explain: "-avamo è la desinenza dell'imperfetto, 1ª persona plurale (noi)." },
      { type: "order", q: "Metti in ordine le parole dell'analisi di «Il cane abbaia forte»: articolo, nome, verbo, avverbio.", items: ["Il = articolo", "cane = nome", "abbaia = verbo", "forte = avverbio"], explain: "Il (articolo) cane (nome) abbaia (verbo) forte (avverbio: modifica il verbo)." },
      { type: "mc", q: "In «Questa è mia», «questa» è…", options: ["aggettivo dimostrativo", "pronome dimostrativo", "articolo"], answer: 1, explain: "Non accompagna un nome, lo sostituisce: pronome dimostrativo." }
    ]
  }
});

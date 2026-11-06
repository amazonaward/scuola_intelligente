TOPIC('it', {
  id: "p5-ita-analisi-logica",
  title: "L'analisi logica",
  intro: "Nell'analisi grammaticale guardavamo che <b>tipo</b> di parola è. Nell'<b>analisi logica</b> guardiamo che <b>ruolo</b> ha nella frase: chi fa l'azione? che cosa succede? a chi, dove, quando, con chi? Scopriamo <b>soggetto</b>, <b>predicato</b> e <b>complementi</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Che cos'è l'analisi logica",
      html: `<p>Una <b>frase semplice</b> (o <b>proposizione</b>) è un gruppo di parole con <b>un solo verbo</b> che ha senso compiuto.</p>
<p>Fare l'<b>analisi logica</b> significa dividere la frase in <b>gruppi di parole</b> (sintagmi) e dire che <b>funzione</b> ha ciascun gruppo:</p>
<ul>
<li>il <b>predicato</b>: dice che cosa si afferma (l'azione o lo stato);</li>
<li>il <b>soggetto</b>: di chi o di che cosa si parla;</li>
<li>i <b>complementi</b>: completano il significato (che cosa? a chi? dove? quando? con chi?…).</li>
</ul>
<p>Esempio: «<b>Il gatto</b> | <b>mangia</b> | <b>il pesce</b> | <b>in cucina</b>.» → soggetto | predicato | complemento oggetto | complemento di luogo.</p>`
    },
    {
      type: "text",
      title: "Il predicato: il motore della frase",
      html: `<p>Si parte <b>sempre dal verbo</b>. Il predicato può essere di due tipi:</p>
<ul>
<li><b>Predicato verbale</b>: un verbo che ha significato da solo. «Luca <u>corre</u>», «La mamma <u>ha cucinato</u>».</li>
<li><b>Predicato nominale</b>: il verbo <b>essere</b> (che qui si chiama <b>copula</b>, cioè "legame") + un nome o un aggettivo (<b>parte nominale</b>). «Luca <u>è stanco</u>», «Il delfino <u>è un mammifero</u>».</li>
</ul>
<p>Attenzione: se <i>essere</i> significa "trovarsi", "esistere", allora è predicato verbale: «Il libro <u>è</u> sul tavolo» (= si trova).</p>`
    },
    {
      type: "text",
      title: "Il soggetto: chi fa (o chi è)",
      html: `<p>Il <b>soggetto</b> è la persona, l'animale o la cosa di cui si parla. Lo trovi chiedendo al verbo: <b>«Chi? Che cosa?»</b> + il verbo.</p>
<p>«Domani <u>i nonni</u> arrivano» → chi arriva? <b>i nonni</b>.</p>
<ul>
<li>Il soggetto <b>non è sempre all'inizio</b>: «Arriva <u>il treno</u>».</li>
<li>Può essere <b>sottinteso</b>: «Mangiamo la pizza» → soggetto sottinteso <b>noi</b> (lo capiamo dalla desinenza <i>-iamo</i>).</li>
<li>Il soggetto <b>non ha mai preposizione</b> davanti.</li>
<li>Il verbo si <b>accorda</b> con il soggetto: <i>il bambino gioca / i bambini giocano</i>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "La frase come un sistema solare (modello valenziale)",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f0f9ff"/>
<ellipse cx="320" cy="160" rx="210" ry="120" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="8 6"/>
<ellipse cx="320" cy="160" rx="120" ry="66" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
<circle cx="320" cy="160" r="40" fill="#dc2626"/>
<text x="320" y="166" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">regala</text>
<rect x="190" y="140" width="80" height="34" rx="8" fill="#2563eb"/><text x="230" y="163" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">la nonna</text>
<rect x="352" y="104" width="86" height="34" rx="8" fill="#16a34a"/><text x="395" y="127" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">un libro</text>
<rect x="360" y="182" width="86" height="34" rx="8" fill="#9333ea"/><text x="403" y="205" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">a Sara</text>
<rect x="70" y="40" width="130" height="34" rx="8" fill="#64748b"/><text x="135" y="63" font-size="15" text-anchor="middle" fill="#ffffff">per Natale</text>
<rect x="450" y="250" width="150" height="34" rx="8" fill="#64748b"/><text x="525" y="273" font-size="15" text-anchor="middle" fill="#ffffff">con un sorriso</text>
<text x="320" y="24" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">La nonna regala un libro a Sara per Natale con un sorriso.</text>
<text x="20" y="300" font-size="14" fill="#b91c1c">● verbo (predicato)</text>
<text x="170" y="300" font-size="14" fill="#b45309">giallo = nucleo: verbo + argomenti</text>
<text x="430" y="300" font-size="14" fill="#475569">grigio = espansioni</text>
</svg>`,
      caption: "«Regalare» ha bisogno di 3 elementi (chi regala, che cosa, a chi): è un verbo trivalente. «Per Natale» e «con un sorriso» si possono togliere: sono espansioni."
    },
    {
      type: "text",
      title: "I complementi: le domande giuste",
      html: `<p>I <b>complementi</b> \"completano\" il senso della frase. Ognuno risponde a una <b>domanda</b>.</p>
<table>
<tr><th>Complemento</th><th>Domanda</th><th>Esempio</th></tr>
<tr><td><b>Oggetto</b> (diretto)</td><td>chi? che cosa? (senza preposizione)</td><td>Leggo <u>un fumetto</u>.</td></tr>
<tr><td><b>Specificazione</b></td><td>di chi? di che cosa?</td><td>Il cane <u>di Marco</u>.</td></tr>
<tr><td><b>Termine</b></td><td>a chi? a che cosa?</td><td>Scrivo <u>alla zia</u>.</td></tr>
<tr><td><b>Luogo</b></td><td>dove? verso dove? da dove? per dove?</td><td>Vado <u>a Roma</u>. Esco <u>da casa</u>.</td></tr>
<tr><td><b>Tempo</b></td><td>quando? per quanto tempo?</td><td>Parto <u>a luglio</u>. Ho dormito <u>per due ore</u>.</td></tr>
<tr><td><b>Mezzo</b></td><td>per mezzo di chi/che cosa?</td><td>Viaggio <u>in treno</u>.</td></tr>
<tr><td><b>Compagnia / unione</b></td><td>con chi? con che cosa?</td><td>Gioco <u>con Anna</u>.</td></tr>
<tr><td><b>Modo</b></td><td>come? in che modo?</td><td>Parla <u>a bassa voce</u>.</td></tr>
<tr><td><b>Causa</b></td><td>perché? per quale causa?</td><td>Trema <u>per il freddo</u>.</td></tr>
<tr><td><b>Fine</b></td><td>per quale scopo?</td><td>Studio <u>per l'esame</u>.</td></tr>
<tr><td><b>Agente</b></td><td>da chi? (con verbo passivo)</td><td>Il gol è segnato <u>dal capitano</u>.</td></tr>
</table>
<p>Il <b>complemento oggetto</b> è l'unico complemento <b>diretto</b>: non ha preposizione. Tutti gli altri si chiamano <b>indiretti</b> perché di solito sono introdotti da una preposizione.</p>`
    },
    {
      type: "text",
      title: "Attributo e apposizione",
      html: `<ul>
<li><b>Attributo</b>: un <b>aggettivo</b> che si riferisce a un nome della frase e lo descrive. «Il cane <u>nero</u> abbaia» → <i>nero</i> è attributo del soggetto.</li>
<li><b>Apposizione</b>: un <b>nome</b> che si mette accanto a un altro nome per spiegarlo meglio. «<u>Il dottor</u> Rossi», «Roma, <u>la capitale d'Italia</u>, …».</li>
</ul>
<p>Attributo e apposizione non sono complementi a sé: \"seguono\" il nome a cui si riferiscono.</p>`
    },
    {
      type: "example",
      title: "Esempio svolto passo per passo",
      html: `<p>«<b>Ieri la maestra ha letto una fiaba ai bambini con voce allegra.</b>»</p>
<ol>
<li><b>Trovo il verbo</b>: <i>ha letto</i> → <b>predicato verbale</b>.</li>
<li><b>Chi ha letto?</b> <i>la maestra</i> → <b>soggetto</b>.</li>
<li><b>Che cosa ha letto?</b> <i>una fiaba</i> → <b>complemento oggetto</b>.</li>
<li><b>A chi?</b> <i>ai bambini</i> → <b>complemento di termine</b>.</li>
<li><b>Come?</b> <i>con voce</i> → <b>complemento di modo</b>; <i>allegra</i> → <b>attributo</b> di "voce".</li>
<li><b>Quando?</b> <i>ieri</i> → <b>complemento di tempo</b> (determinato).</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: soggetto e predicato",
      questions: [
        { type: "mc", q: "In «Sul ramo canta un merlo», il soggetto è…", options: ["sul ramo", "canta", "un merlo"], answer: 2, explain: "Chi canta? Un merlo. Il soggetto può stare anche dopo il verbo." },
        { type: "mc", q: "«Il mare è calmo» ha un predicato…", options: ["verbale", "nominale", "non ha predicato"], answer: 1, explain: "Essere + aggettivo (calmo): predicato nominale." },
        { type: "tf", q: "In «Andiamo al parco» il soggetto è sottinteso.", answer: true, explain: "Il soggetto «noi» non è scritto ma si capisce dalla desinenza -iamo." }
      ]
    },
    {
      type: "widget",
      title: "Gioco: abbina la domanda al complemento",
      widget: "match",
      options: { pairs: [["chi? che cosa? (senza preposizione)", "complemento oggetto"], ["di chi? di che cosa?", "complemento di specificazione"], ["a chi? a che cosa?", "complemento di termine"], ["dove?", "complemento di luogo"], ["quando?", "complemento di tempo"], ["con chi?", "complemento di compagnia"], ["perché? per quale causa?", "complemento di causa"]] },
      caption: "Ogni complemento risponde a una domanda: abbinali tutti."
    },
    {
      type: "example",
      title: "Esempio: la stessa preposizione, complementi diversi",
      html: `<p>La preposizione da sola non basta: bisogna capire il <b>significato</b>!</p>
<ul>
<li>«Il quaderno <u>di Paolo</u>» → di chi? <b>specificazione</b>.</li>
<li>«Esco <u>di casa</u>» → da dove? <b>moto da luogo</b>.</li>
<li>«Muoio <u>di fame</u>» → per quale causa? <b>causa</b>.</li>
<li>«Un anello <u>d'oro</u>» → di che materia? <b>materia</b>.</li>
<li>«Vado <u>con Paolo</u>» → <b>compagnia</b>; «Taglio <u>con le forbici</u>» → <b>mezzo</b>; «Ascolta <u>con attenzione</u>» → <b>modo</b>.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il latino aveva i \"casi\"",
      html: `<p>In latino non c'era bisogno di tante preposizioni: il ruolo della parola si capiva dalla sua <b>desinenza</b>, chiamata <b>caso</b>. <i>Rosa</i> (soggetto, nominativo), <i>rosae</i> (della rosa, genitivo), <i>rosae</i> (alla rosa, dativo), <i>rosam</i> (la rosa, complemento oggetto, accusativo)… Per questo in latino l'ordine delle parole era molto libero! L'analisi logica che studi a scuola deriva proprio dallo studio del latino.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Verbi come atomi",
      html: `<p>Il linguista francese <b>Lucien Tesnière</b> (libro uscito nel 1959) ebbe un'idea presa dalla chimica: come un atomo si lega ad altri atomi, un verbo ha una <b>valenza</b>, cioè un numero di \"posti\" da riempire. <i>Piovere</i> ha valenza 0 (piove e basta!), <i>dormire</i> 1 (chi?), <i>mangiare</i> 2 (chi? che cosa?), <i>regalare</i> 3 (chi? che cosa? a chi?). In Italia questo modello è stato diffuso nelle scuole soprattutto dal linguista <b>Francesco Sabatini</b>.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Parti <b>sempre dal verbo</b>: trova il predicato (verbale o nominale).</li>
<li>Poi il <b>soggetto</b>: «chi/che cosa + verbo?». Non ha mai preposizione e può essere sottinteso.</li>
<li>Poi i <b>complementi</b>, facendo la <b>domanda</b> giusta. Il complemento oggetto non ha preposizione.</li>
<li>Gli aggettivi sono <b>attributi</b>, i nomi che spiegano altri nomi sono <b>apposizioni</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'analisi logica",
      intro: "L'analisi logica si può vedere come un treno, come un interrogatorio da detective, come il latino, o con i colori delle lingue straniere. Scegli il tuo!",
      tabs: [
        {
          label: "🚂 Il treno della frase",
          html: `<p>La frase è un <b>treno</b>: il <b>predicato</b> è la <b>locomotiva</b> (senza, il treno non parte). Il <b>soggetto</b> è il <b>macchinista</b>. I <b>complementi</b> sono i <b>vagoni</b>: alcuni sono indispensabili (il complemento oggetto di <i>mangiare</i>: \"mangio…\" che cosa?), altri si possono staccare (dove, quando, con chi) e il treno viaggia lo stesso.</p>`,
          svg: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="220" fill="#ecfeff"/>
<line x1="10" y1="170" x2="630" y2="170" stroke="#475569" stroke-width="4"/>
<rect x="20" y="80" width="140" height="80" rx="10" fill="#dc2626"/><rect x="120" y="50" width="40" height="40" fill="#991b1b"/>
<text x="80" y="128" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">mangia</text>
<rect x="170" y="90" width="130" height="70" rx="8" fill="#2563eb"/><text x="235" y="130" font-size="16" fill="#ffffff" text-anchor="middle">il gatto</text>
<rect x="310" y="90" width="130" height="70" rx="8" fill="#16a34a"/><text x="375" y="130" font-size="16" fill="#ffffff" text-anchor="middle">il pesce</text>
<rect x="470" y="90" width="150" height="70" rx="8" fill="#94a3b8"/><text x="545" y="130" font-size="16" fill="#ffffff" text-anchor="middle">in cucina</text>
<g fill="#1f2937"><circle cx="50" cy="168" r="12"/><circle cx="130" cy="168" r="12"/><circle cx="200" cy="168" r="10"/><circle cx="270" cy="168" r="10"/><circle cx="340" cy="168" r="10"/><circle cx="410" cy="168" r="10"/><circle cx="500" cy="168" r="10"/><circle cx="590" cy="168" r="10"/></g>
<text x="80" y="205" font-size="14" text-anchor="middle">predicato</text>
<text x="235" y="205" font-size="14" text-anchor="middle">soggetto</text>
<text x="375" y="205" font-size="14" text-anchor="middle">c. oggetto</text>
<text x="545" y="205" font-size="14" text-anchor="middle">vagone staccabile</text>
<text x="455" y="122" font-size="22" text-anchor="middle" fill="#64748b">✂</text>
</svg>`
        },
        {
          label: "🕵️ Il detective",
          html: `<p>Fai l'<b>interrogatorio</b> al verbo, come un investigatore!</p>
<ol>
<li>«Che cosa è successo?» → trovi il <b>predicato</b>.</li>
<li>«Chi è stato?» → il <b>soggetto</b>.</li>
<li>«Che cosa ha preso / fatto?» → il <b>complemento oggetto</b>.</li>
<li>«Dove? Quando? Con chi? Come? Perché?» → i <b>complementi indiretti</b>.</li>
</ol>
<p>«Il ladro ha rubato la collana nel museo di notte con un complice.» Chi? <i>il ladro</i>. Che cosa? <i>la collana</i>. Dove? <i>nel museo</i>. Quando? <i>di notte</i>. Con chi? <i>con un complice</i>. Caso risolto! 🔍</p>`
        },
        {
          label: "🏛️ Come in latino",
          html: `<p>Ecco come si diceva in latino «la rosa» nei vari ruoli. Vedi che ogni ruolo ha la sua <b>desinenza</b>, al posto della nostra preposizione:</p>
<table>
<tr><th>Caso</th><th>Ruolo in analisi logica</th><th>Latino</th><th>Italiano</th></tr>
<tr><td>Nominativo</td><td>soggetto</td><td>ros<b>a</b></td><td>la rosa</td></tr>
<tr><td>Genitivo</td><td>specificazione</td><td>ros<b>ae</b></td><td>della rosa</td></tr>
<tr><td>Dativo</td><td>termine</td><td>ros<b>ae</b></td><td>alla rosa</td></tr>
<tr><td>Accusativo</td><td>complemento oggetto</td><td>ros<b>am</b></td><td>la rosa</td></tr>
<tr><td>Ablativo</td><td>mezzo, causa, luogo…</td><td>ros<b>a</b> (lunga)</td><td>con la rosa…</td></tr>
</table>
<p>Anche il <b>tedesco</b>, il <b>russo</b> e il <b>rumeno</b> hanno ancora i casi!</p>`
        },
        {
          label: "🇬🇧 L'ordine delle parole",
          html: `<p>In inglese il ruolo si capisce dalla <b>posizione</b>: quasi sempre <b>S + V + O</b> (Soggetto, Verbo, Oggetto).</p>
<p><i>The dog bites the man</i> (il cane morde l'uomo) ≠ <i>The man bites the dog</i> (l'uomo morde il cane)! Basta spostare le parole e cambia tutto.</p>
<p>In italiano possiamo dire anche «Il pesce, il gatto lo mangia» e si capisce lo stesso, ma la regola di base è la stessa: <b>soggetto → verbo → complementi</b>. Prova a riordinare la frase in quest'ordine: l'analisi diventa più facile!</p>`,
          widget: "classify",
          options: { groups: ["Soggetto", "Predicato", "Complemento"], items: [["the dog / il cane", 0], ["bites / morde", 1], ["the man / l'uomo", 2], ["Anna", 0], ["plays / gioca", 1], ["in the park / nel parco", 2]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'analisi logica",
      nodes: [
        { id: "frase", label: "Frase semplice", x: 50, y: 6, color: "#0f172a", html: "Gruppo di parole con un solo predicato e senso compiuto.", why: "La parola <i>logica</i> viene dal greco <i>lógos</i> (discorso, ragionamento): l'analisi logica studia come la frase \"ragiona\", cioè chi fa che cosa." },
        { id: "predicato", label: "Predicato", x: 50, y: 28, color: "#dc2626", html: "Il verbo: ciò che si dice del soggetto. Verbale o nominale.", why: "<i>Praedicare</i> in latino vuol dire \"dichiarare, affermare\": il predicato è ciò che si afferma. Si parte da lui perché, secondo il modello valenziale, è il verbo che decide quanti altri elementi servono." },
        { id: "soggetto", label: "Soggetto", x: 18, y: 28, color: "#2563eb", html: "Chi compie l'azione o di chi si parla. Mai con preposizione; può essere sottinteso.", why: "<i>Subiectum</i> = \"ciò che sta sotto\": è ciò che \"sta alla base\" del discorso. Può essere sottinteso perché in italiano la desinenza del verbo indica già la persona (in inglese invece il soggetto va sempre scritto)." },
        { id: "nominale", label: "Predicato nominale", x: 82, y: 28, color: "#f97316", html: "Essere (copula) + nome o aggettivo: «è stanco».", why: "<i>Copula</i> in latino vuol dire \"legame\": il verbo essere qui non dice un'azione, ma lega il soggetto a una sua qualità." },
        { id: "valenza", label: "Valenza del verbo", x: 50, y: 50, color: "#a855f7", html: "Il numero di elementi necessari al verbo: piovere 0, dormire 1, mangiare 2, regalare 3.", why: "Idea di Lucien Tesnière (1959), presa in prestito dalla chimica (valenza degli atomi). In Italia l'ha portata nelle scuole Francesco Sabatini; le Indicazioni nazionali la raccomandano." },
        { id: "oggetto", label: "Complemento oggetto", x: 22, y: 72, color: "#16a34a", html: "Risponde a chi? che cosa? senza preposizione.", why: "Si chiama \"diretto\" perché l'azione passa direttamente dal verbo all'oggetto, senza preposizioni. In latino era il caso accusativo." },
        { id: "indiretti", label: "Complementi indiretti", x: 60, y: 72, color: "#64748b", html: "Specificazione, termine, luogo, tempo, mezzo, modo, causa, compagnia, fine, agente…", why: "Nel passaggio dal latino all'italiano si sono persi i casi: i rapporti tra parole sono stati affidati alle preposizioni (di, a, da, in, con, su, per, tra, fra)." },
        { id: "domande", label: "Le domande", x: 60, y: 92, color: "#0ea5e9", html: "Ogni complemento risponde a una domanda: dove? quando? con chi?…", why: "La stessa preposizione può introdurre complementi diversi (di Paolo, di casa, di fame): per questo conta il significato, scoperto con la domanda giusta." },
        { id: "attributo", label: "Attributo e apposizione", x: 88, y: 72, color: "#eab308", html: "Aggettivo (attributo) o nome (apposizione) che si appoggia a un altro nome.", why: "Non sono complementi a sé: \"seguono\" il nome a cui si riferiscono e ne prendono la funzione (attributo del soggetto, dell'oggetto…)." }
      ],
      edges: [
        ["frase", "predicato", "ha sempre"],
        ["frase", "soggetto", "ha (anche sottinteso)"],
        ["predicato", "nominale", "può essere"],
        ["predicato", "valenza", "ha una"],
        ["valenza", "oggetto", "richiede"],
        ["valenza", "indiretti", "richiede o ammette"],
        ["indiretti", "domande", "si trovano con"],
        ["indiretti", "attributo", "possono avere"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i complementi",
      questions: [
        { type: "mc", q: "In «Telefono alla nonna», «alla nonna» è complemento…", options: ["di specificazione", "di termine", "oggetto"], answer: 1, explain: "A chi telefono? Alla nonna: complemento di termine." },
        { type: "mc", q: "In «Vado a scuola in bicicletta», «in bicicletta» è complemento…", options: ["di luogo", "di mezzo", "di modo"], answer: 1, explain: "Per mezzo di che cosa vado? In bicicletta: complemento di mezzo." },
        { type: "tf", q: "Il complemento oggetto è introdotto dalla preposizione «di».", answer: false, explain: "Il complemento oggetto è diretto: non ha preposizione." }
      ]
    }
  ],
  glossary: [
    { t: "Analisi logica", d: "Riconoscere la funzione di ogni gruppo di parole nella frase." },
    { t: "Predicato verbale", d: "Verbo con significato proprio: corre, legge, ha mangiato." },
    { t: "Predicato nominale", d: "Verbo essere (copula) + nome o aggettivo: è felice, è un medico." },
    { t: "Soggetto", d: "Chi compie l'azione o di chi/che cosa si parla." },
    { t: "Soggetto sottinteso", d: "Soggetto non scritto ma riconoscibile dalla desinenza del verbo." },
    { t: "Complemento oggetto", d: "Complemento diretto, senza preposizione: risponde a chi? che cosa?" },
    { t: "Complementi indiretti", d: "Complementi introdotti di solito da una preposizione (di, a, da, in, con…)." },
    { t: "Attributo", d: "Aggettivo che si riferisce a un nome della frase." },
    { t: "Apposizione", d: "Nome che accompagna un altro nome per precisarlo." },
    { t: "Valenza", d: "Numero di elementi di cui un verbo ha bisogno per formare una frase completa." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Da che cosa si parte per fare l'analisi logica?", options: ["dal soggetto", "dal predicato (verbo)", "dal primo complemento"], answer: 1, explain: "Il verbo è il centro della frase: si parte sempre dal predicato." },
      { type: "mc", q: "In «Domani partirà Giulia», il soggetto è…", options: ["domani", "partirà", "Giulia"], answer: 2, explain: "Chi partirà? Giulia." },
      { type: "mc", q: "«Le fragole sono dolci»: il predicato è…", options: ["verbale", "nominale", "non c'è"], answer: 1, explain: "Sono (copula) + dolci (parte nominale)." },
      { type: "tf", q: "In «Il gatto è in giardino», «è» forma un predicato verbale.", answer: true, explain: "Qui essere significa «si trova»: predicato verbale." },
      { type: "mc", q: "In «Ho comprato un regalo per Luca», «un regalo» è…", options: ["soggetto", "complemento oggetto", "complemento di termine"], answer: 1, explain: "Che cosa ho comprato? Un regalo: complemento oggetto." },
      { type: "mc", q: "In «La bici di mio fratello è rossa», «di mio fratello» è complemento…", options: ["di specificazione", "di moto da luogo", "di causa"], answer: 0, explain: "Di chi è la bici? Di mio fratello: specificazione." },
      { type: "mc", q: "In «Tremava per la paura», «per la paura» è complemento…", options: ["di fine", "di causa", "di mezzo"], answer: 1, explain: "Per quale causa tremava? Per la paura." },
      { type: "text", q: "Come si chiama il nome che si affianca a un altro nome per spiegarlo (es. «il fiume Po»)?", answer: ["apposizione", "un'apposizione", "l'apposizione"], explain: "«Fiume» precisa «Po»: è un'apposizione." },
      { type: "tf", q: "Il soggetto può essere sottinteso.", answer: true, explain: "Es. «Giochiamo» → soggetto sottinteso noi." },
      { type: "num", q: "Quanti argomenti (valenza) ha il verbo «regalare»? (chi regala, che cosa, a chi)", answer: 3, explain: "Regalare è trivalente: soggetto, oggetto, termine." },
      { type: "order", q: "Metti in ordine i passi dell'analisi logica.", items: ["Trovo il predicato", "Trovo il soggetto", "Trovo il complemento oggetto", "Trovo i complementi indiretti"], explain: "Prima il verbo, poi il soggetto, poi i complementi (prima il diretto, poi gli indiretti)." },
      { type: "mc", q: "In «Il pane è tagliato dal fornaio», «dal fornaio» è complemento…", options: ["di agente", "di moto da luogo", "di termine"], answer: 0, explain: "Con il verbo passivo, chi compie l'azione è il complemento d'agente (da chi?)." }
    ]
  }
});

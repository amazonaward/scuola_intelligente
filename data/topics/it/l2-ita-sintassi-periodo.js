TOPIC('it', {
  id: "l2-ita-sintassi-periodo",
  title: "Sintassi del periodo",
  intro: "«Ho studiato molto perché volevo prendere un bel voto, anche se ero stanco.» Una sola frase, tre verbi, tre «pezzi» legati da parole diverse. Questa è la <b>sintassi del periodo</b>: lo studio di come più proposizioni si collegano per formare un pensiero articolato. Imparare a riconoscere <b>coordinate</b> e <b>subordinate</b> serve a capire testi complessi (Manzoni, Leopardi, i giornali) e a scrivere periodi chiari e ben costruiti.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Frase, proposizione, periodo",
      html: `<p>Ripassiamo i termini fondamentali:</p>
<ul>
<li><b>Frase semplice (o proposizione)</b>: ruota attorno a <b>un solo verbo</b> di modo finito o non finito. «Marco legge.»</li>
<li><b>Periodo</b>: insieme di proposizioni collegate, di solito chiuso da un punto. Ha <b>tanti verbi quante proposizioni</b>. «Marco legge un libro mentre aspetta il treno che è in ritardo.» (3 proposizioni)</li>
<li><b>Proposizione principale</b>: ha senso compiuto da sola, non dipende da altre («Marco legge un libro»).</li>
<li><b>Proposizione coordinata</b>: è legata a un'altra con pari importanza (sullo stesso piano).</li>
<li><b>Proposizione subordinata</b> (o dipendente): dipende da un'altra e completa il suo significato.</li>
</ul>
<p>La struttura di un periodo si chiama <b>sintassi</b>; quando prevale la coordinazione si parla di <b>paratassi</b>, quando prevale la subordinazione di <b>ipotassi</b>. Il linguaggio parlato e certi testi scritti (cronache, SMS) preferiscono la paratassi; la prosa argomentativa e letteraria (Boccaccio, Manzoni) l'ipotassi.</p>`
    },
    {
      type: "remember",
      title: "Come analizzare un periodo",
      html: `<ol>
<li><b>Cerca i verbi</b> (ogni verbo di modo finito, o infinito/participio/gerundio con valore verbale, è una proposizione).</li>
<li><b>Separa le proposizioni</b> con una barra.</li>
<li><b>Individua la principale</b>: quella che non dipende da nessun'altra.</li>
<li><b>Riconosci i collegamenti</b>: congiunzioni coordinanti (<i>e, ma, quindi</i>) o subordinanti (<i>perché, quando, che, se</i>).</li>
<li><b>Dai il nome</b> a ogni subordinata e indica da quale proposizione dipende e di che «grado» è (1°, 2°, 3°).</li>
</ol>
<p>Esempio: «Ti scrivo (principale) / perché vorrei sapere (causale di 1° grado) / se verrai alla festa (interrogativa indiretta di 2° grado).»</p>`
    },
    {
      type: "text",
      title: "La coordinazione",
      html: `<p>Le proposizioni coordinate sono sullo <b>stesso livello</b> e si collegano con congiunzioni coordinanti. Si distinguono per il valore:</p>
<table>
<tr><th>Tipo</th><th>Congiunzioni</th><th>Esempio</th></tr>
<tr><td><b>Copulativa</b> (aggiunge)</td><td>e, anche, né, pure</td><td>Studio e ascolto musica.</td></tr>
<tr><td><b>Avversativa</b> (contrasta)</td><td>ma, però, tuttavia, invece, eppure</td><td>Vorrei uscire, ma devo studiare.</td></tr>
<tr><td><b>Disgiuntiva</b> (alternativa)</td><td>o, oppure, ovvero</td><td>Vieni con noi o resti a casa?</td></tr>
<tr><td><b>Conclusiva</b> (conseguenza)</td><td>quindi, dunque, perciò, pertanto</td><td>Ho sete, quindi bevo.</td></tr>
<tr><td><b>Esplicativa</b> (spiega)</td><td>cioè, infatti, ossia, vale a dire</td><td>Non esco, infatti piove.</td></tr>
<tr><td><b>Correlativa</b></td><td>sia... sia, né... né, non solo... ma anche</td><td>Non solo studia, ma lavora.</td></tr>
</table>
<p>Si può avere anche <b>coordinazione per asindeto</b> (senza congiunzioni, con virgola o due punti): «Arrivai, vidi, mi fermai».</p>`
    },
    {
      type: "text",
      title: "La subordinazione: forma esplicita e implicita",
      html: `<p>Una subordinata si dice <b>esplicita</b> se il verbo è di modo <b>finito</b> (indicativo, congiuntivo, condizionale), <b>implicita</b> se è al modo <b>infinito, participio o gerundio</b>.</p>
<ul>
<li>«Penso <b>che tu abbia ragione</b>» (esplicita, congiuntivo). / «Penso <b>di avere ragione</b>» (implicita, infinito).</li>
<li>«Quando sono arrivato a casa, ho cenato» (esplicita) / «<b>Arrivato a casa</b>, ho cenato» (implicita, participio).</li>
<li>«Poiché studia ogni giorno, migliora» (esplicita) / «<b>Studiando ogni giorno</b>, migliora» (implicita, gerundio).</li>
</ul>
<p>La proposizione implicita è più compatta e tipica della lingua scritta; quella esplicita è più chiara ed è preferita nel parlato. È importante conoscere entrambe e saper passare dall'una all'altra.</p>`
    },
    {
      type: "svg",
      title: "L'albero di un periodo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif" font-size="15" text-anchor="middle">
<rect x="190" y="20" width="220" height="46" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<text x="300" y="40" fill="#7f1d1d" font-weight="bold">Ti scrivo</text>
<text x="300" y="58" fill="#7f1d1d" font-size="14">PRINCIPALE</text>
<path d="M300 66 L300 108" stroke="#334155" stroke-width="3"/>
<rect x="150" y="108" width="300" height="46" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="128" fill="#1e3a8a" font-weight="bold">perché vorrei sapere</text>
<text x="300" y="146" fill="#1e3a8a" font-size="14">causale di 1° grado</text>
<path d="M300 154 L300 196" stroke="#334155" stroke-width="3"/>
<rect x="150" y="196" width="300" height="46" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="300" y="216" fill="#14532d" font-weight="bold">se verrai alla festa</text>
<text x="300" y="234" fill="#14532d" font-size="14">interrogativa indiretta di 2° grado</text>
<text x="300" y="274" fill="#475569">Ogni livello dipende da quello sopra di sé.</text>
</g>
</svg>`,
      caption: "La principale è la radice; le subordinate si agganciano a essa in gradi successivi."
    },
    {
      type: "text",
      title: "Le subordinate completive e relative",
      html: `<ul>
<li><b>Soggettiva</b>: fa da soggetto alla reggente. «<i>Bisogna che tu studi</i>» (che cosa bisogna?).</li>
<li><b>Oggettiva</b>: fa da complemento oggetto. «Credo <i>che arriverà presto</i>» / «Spero <i>di vincere</i>».</li>
<li><b>Dichiarativa</b>: spiega o dichiara un nome o un pronome. «Ho una speranza: <i>che tutto vada bene</i>».</li>
<li><b>Interrogativa indiretta</b>: una domanda inserita in una frase affermativa. «Mi chiedo <i>che cosa farai</i>» (diretta: «Che cosa farai?»).</li>
<li><b>Relativa</b>: introdotta da un pronome relativo (<i>che, cui, il quale, chi</i>). «Il libro <i>che ho letto</i> è bellissimo».</li>
</ul>
<p>Attenzione: <b>che</b> ha molte funzioni. Può essere pronome relativo (<i>il libro che leggo</i>), congiunzione (<i>penso che sia tardi</i>), aggettivo o pronome interrogativo/esclamativo (<i>che fai? che bello!</i>) e anche parte di una congiunzione composta (<i>perché, affinché</i>).</p>`
    },
    {
      type: "text",
      title: "Le subordinate circostanziali",
      html: `<p>Danno informazioni sulle <b>circostanze</b> dell'azione principale.</p>
<table>
<tr><th>Tipo</th><th>Che cosa indica</th><th>Esempio</th></tr>
<tr><td>Causale</td><td>causa</td><td>Resto a casa <i>perché piove</i>.</td></tr>
<tr><td>Finale</td><td>scopo</td><td>Studio <i>per superare l'esame</i> / <i>affinché tu capisca</i>.</td></tr>
<tr><td>Temporale</td><td>tempo</td><td><i>Quando suonò la campanella</i>, uscimmo.</td></tr>
<tr><td>Consecutiva</td><td>conseguenza</td><td>Era <i>così stanco che si addormentò</i> subito.</td></tr>
<tr><td>Concessiva</td><td>ostacolo non sufficiente</td><td><i>Benché fosse stanco</i>, continuò.</td></tr>
<tr><td>Condizionale</td><td>condizione</td><td><i>Se studi</i>, passerai.</td></tr>
<tr><td>Modale</td><td>modo</td><td>Parla <i>gesticolando</i>.</td></tr>
<tr><td>Comparativa</td><td>confronto</td><td>È <i>più alto di quanto pensassi</i>.</td></tr>
<tr><td>Limitativa</td><td>limite</td><td><i>Per quanto ne so</i>, è già partito.</td></tr>
<tr><td>Strumentale</td><td>mezzo</td><td>Si guadagna da vivere <i>facendo traduzioni</i>.</td></tr>
</table>
<p>Ricorda i modi verbali: la <b>concessiva</b> con «benché, sebbene, nonostante» vuole il <b>congiuntivo</b>; con «anche se» l'<b>indicativo</b>. La <b>finale</b> con «affinché» vuole il <b>congiuntivo</b>; con «per» l'<b>infinito</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: tipi di subordinata",
      questions: [
        { type: "mc", q: "«Resto a casa perché piove»: la subordinata è:", options: ["Causale", "Finale", "Consecutiva", "Relativa"], answer: 0, explain: "«Perché piove» indica la causa." },
        { type: "mc", q: "«Studio per superare l'esame»: la subordinata è:", options: ["Finale implicita", "Causale esplicita", "Temporale", "Concessiva"], answer: 0, explain: "Indica lo scopo ed è all'infinito: implicita." },
        { type: "tf", q: "«Benché fosse stanco, continuò» contiene una subordinata concessiva.", answer: true, explain: "Benché + congiuntivo introduce una concessiva." }
      ]
    },
    {
      type: "text",
      title: "Il periodo ipotetico",
      html: `<p>È formato da una <b>protasi</b> (la condizione: «se...») e da un'<b>apodosi</b> (la conseguenza). Si distinguono tre tipi:</p>
<ul>
<li><b>Della realtà</b>: la condizione è possibile e reale. <i>Se piove (indicativo), resto a casa (indicativo).</i></li>
<li><b>Della possibilità</b>: la condizione è probabile ma incerta. <i>Se piovesse (congiuntivo imperfetto), resterei a casa (condizionale presente).</i></li>
<li><b>Dell'irrealtà</b>: la condizione è impossibile (riferita al passato, non si è avverata). <i>Se avessi studiato (congiuntivo trapassato), avrei superato l'esame (condizionale passato).</i></li>
</ul>
<p>Nella lingua parlata si sente spesso «Se lo sapevo, venivo» (imperfetto in entrambe le parti), ma nella lingua scritta formale è preferibile la forma con congiuntivo e condizionale.</p>`
    },
    {
      type: "example",
      title: "Analisi del periodo di una frase reale",
      html: `<p>Prendiamo una frase tratta dal mondo di tutti i giorni: <i>«Siccome domani non ho scuola, vorrei uscire con gli amici, se i miei genitori me lo permettono.»</i></p>
<ol>
<li>Verbi: <i>ho</i>, <i>vorrei uscire</i> (<i>vorrei</i> è finito, <i>uscire</i> è infinito dipendente da <i>vorrei</i> come perifrasi: conta come una sola proposizione), <i>permettono</i>.</li>
<li><b>Principale</b>: «vorrei uscire con gli amici».</li>
<li><b>Causale</b> di 1° grado, esplicita: «Siccome domani non ho scuola» (<i>siccome</i> introduce la causa).</li>
<li><b>Condizionale</b> di 1° grado, esplicita: «se i miei genitori me lo permettono».</li>
</ol>
<p>Come si vede, due subordinate dipendono direttamente dalla stessa principale: sono entrambe di <b>1° grado</b>. Il «grado» dipende dal numero di passaggi dalla principale, non dall'ordine in cui compaiono nel testo.</p>`
    },
    {
      type: "example",
      title: "Riscrivere un periodo con subordinate implicite",
      html: `<p>Un testo ricco di «che» e di «perché» può risultare pesante. Confronta:</p>
<p><i>Poiché non ho capito la domanda, ho chiesto al professore che mi spiegasse meglio, in modo che potessi rispondere correttamente.</i></p>
<p><i>Non avendo capito la domanda, ho chiesto al professore di spiegarmela meglio, per poter rispondere correttamente.</i></p>
<p>La seconda versione trasforma tre subordinate esplicite in <b>implicite</b> (gerundio, infinito) senza cambiare il senso, rendendo il testo più scorrevole. Riuscire a «condensare» le frasi è un segno di buona padronanza dell'italiano scritto.</p>`
    },
    {
      type: "curiosity",
      title: "Boccaccio e Manzoni: periodi lunghi",
      html: `<p>Nel Trecento <b>Giovanni Boccaccio</b> scrisse un periodare complesso e latineggiante, con lunghe frasi piene di subordinate (<i>Decameron</i>), perché voleva dare dignità letteraria alla prosa in volgare. Nell'Ottocento <b>Manzoni</b> scelse invece frasi più semplici e vicine al parlato. Oggi molti giornalisti e scrittori preferiscono periodi brevi, anche per i lettori digitali: la scelta tra paratassi e ipotassi è sempre una scelta di stile.</p>`
    },
    {
      type: "curiosity",
      title: "Quando il congiuntivo scompare?",
      html: `<p>Nel parlato l'indicativo sostituisce sempre più spesso il congiuntivo («Penso che hai ragione»). Per la grammatica normativa, però, il congiuntivo resta obbligatorio con verbi come <i>credere, pensare, sperare</i> e con le congiunzioni <i>benché, sebbene, affinché, prima che</i>. Nello scritto formale (temi, relazioni, lettere) è bene usarlo correttamente: è uno dei segni distintivi del registro alto.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il periodo",
      intro: "Se la grammatica ti sembra un labirinto, prova a vederla come uno schema.",
      tabs: [
        {
          label: "🌳 Albero genealogico",
          html: "<p>Immagina il periodo come un <b>albero genealogico</b>: la principale è il capostipite; le subordinate di 1° grado sono i suoi «figli», quelle di 2° i «nipoti». Ogni proposizione ha un solo «genitore», ma più «figli» sono tra loro «fratelli» (coordinate).</p>"
        },
        {
          label: "🧩 Costruire con i mattoncini",
          html: "<p>Le proposizioni sono <b>mattoncini</b> e le congiunzioni sono i <b>connettori</b>: <i>e, ma, quindi</i> uniscono mattoncini dello stesso livello; <i>perché, quando, se</i> li incastrano in un livello inferiore. Prova a costruire un periodo di 4 mattoncini e a smontarlo.</p>"
        },
        {
          label: "🔗 Abbina connettivo e valore",
          html: "<p>Metti alla prova la tua intuizione: abbina ogni congiunzione al valore che esprime.</p>",
          widget: "match",
          options: { pairs: [
            ["perché", "causa"],
            ["affinché", "scopo"],
            ["sebbene", "concessione"],
            ["quando", "tempo"],
            ["se", "condizione"],
            ["così... che", "conseguenza"]
          ] }
        },
        {
          label: "🗂️ Coordinate o subordinate?",
          html: "<p>Classifica i connettivi.</p>",
          widget: "classify",
          options: {
            groups: ["Coordinante", "Subordinante"],
            items: [
              ["e", 0], ["ma", 0], ["quindi", 0], ["oppure", 0],
              ["perché", 1], ["benché", 1], ["quando", 1], ["affinché", 1]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della sintassi del periodo",
      nodes: [
        { id: "periodo", label: "Periodo", x: 50, y: 8, color: "#ef4444", html: "Insieme di proposizioni collegate: una principale e le sue coordinate e subordinate.", why: "Pensiero e linguaggio sono complessi: una sola frase spesso non basta. Il periodo permette di esprimere causa, tempo, condizione e confronto." },
        { id: "principale", label: "Principale", x: 14, y: 42, color: "#0ea5e9", html: "Frase autonoma di senso compiuto.", why: "È il nucleo del periodo: tutte le altre proposizioni si possono ricondurre a essa direttamente o indirettamente." },
        { id: "coord", label: "Coordinate", x: 50, y: 42, color: "#22c55e", html: "Proposizioni sullo stesso livello: copulativa, avversativa, disgiuntiva, conclusiva, esplicativa.", why: "Servono ad aggiungere, opporre, alternare: sono i collegamenti più semplici, tipici del parlato e della narrazione veloce." },
        { id: "sub", label: "Subordinate", x: 86, y: 42, color: "#8b5cf6", html: "Dipendono da un'altra: completive, relative, circostanziali.", why: "Permettono di costruire pensieri complessi e di gerarchizzare le informazioni (che cosa è centrale e che cosa è di contorno)." },
        { id: "ipot", label: "Periodo ipotetico", x: 28, y: 78, color: "#f59e0b", html: "Protasi (se...) e apodosi: tre tipi, reale, possibile, irreale.", why: "Esprime ragionamenti e condizioni: è fondamentale nei testi argomentativi, nella scienza e nel diritto." },
        { id: "impl", label: "Forma implicita", x: 72, y: 78, color: "#64748b", html: "Subordinate con verbo all'infinito, al participio, al gerundio.", why: "Rende il testo più compatto ed elegante: è tipica della prosa scritta." }
      ],
      edges: [["periodo", "principale", "ha una"], ["periodo", "coord", "può avere"], ["periodo", "sub", "può avere"], ["sub", "ipot", "comprende il"], ["sub", "impl", "ha forma"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz finale",
      questions: [
        { type: "mc", q: "Come si chiama il periodo ipotetico dell'irrealtà? «Se avessi studiato, avrei superato l'esame»", options: ["Terzo tipo (irrealtà)", "Primo tipo (realtà)", "Secondo tipo (possibilità)", "Non è ipotetico"], answer: 0, explain: "Congiuntivo trapassato + condizionale passato: la condizione non si è realizzata." },
        { type: "order", q: "Metti in ordine dal grado più alto al più basso: principale, subordinata di 1° grado, subordinata di 2° grado.", items: ["Principale", "Subordinata di 1° grado", "Subordinata di 2° grado"], explain: "La principale è la radice, poi vengono i gradi crescenti di dipendenza." }
      ]
    }
  ],
  glossary: [
    { t: "Periodo", d: "Insieme di proposizioni collegate, in genere chiuso da un punto fermo." },
    { t: "Principale", d: "Proposizione che ha senso compiuto da sola e non dipende da altre." },
    { t: "Coordinata", d: "Proposizione collegata a un'altra sullo stesso piano." },
    { t: "Subordinata", d: "Proposizione che dipende da un'altra e ne completa il significato." },
    { t: "Paratassi", d: "Costruzione in cui prevale la coordinazione." },
    { t: "Ipotassi", d: "Costruzione in cui prevale la subordinazione." },
    { t: "Protasi", d: "Parte del periodo ipotetico che esprime la condizione (se...)." },
    { t: "Apodosi", d: "Parte del periodo ipotetico che esprime la conseguenza." },
    { t: "Forma implicita", d: "Subordinata con verbo all'infinito, participio o gerundio." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quante proposizioni ha «Penso che tu abbia ragione perché hai studiato»?", options: ["3", "2", "4", "1"], answer: 0, explain: "I verbi sono penso, abbia, hai studiato: tre proposizioni." },
      { type: "mc", q: "«Vorrei uscire, ma devo studiare»: la coordinata è:", options: ["Avversativa", "Copulativa", "Conclusiva", "Disgiuntiva"], answer: 0, explain: "«Ma» introduce una contrapposizione." },
      { type: "tf", q: "Una subordinata con il verbo al gerundio è implicita.", answer: true, explain: "Infinito, participio e gerundio sono modi indefiniti: la proposizione è implicita." },
      { type: "text", q: "Come si chiama la parte del periodo ipotetico che esprime la condizione?", answer: ["protasi"], explain: "L'apodosi esprime la conseguenza." },
      { type: "mc", q: "«Benché piovesse, uscimmo»: la subordinata è:", options: ["Concessiva", "Causale", "Finale", "Condizionale"], answer: 0, explain: "Benché + congiuntivo esprime un ostacolo che non basta a impedire l'azione." },
      { type: "mc", q: "Quale modo verbale richiede la finale introdotta da «affinché»?", options: ["Congiuntivo", "Indicativo", "Gerundio", "Participio"], answer: 0, explain: "«Affinché tu capisca» vuole il congiuntivo." },
      { type: "tf", q: "«Mi chiedo che cosa farai» contiene un'interrogativa indiretta.", answer: true, explain: "La domanda «Che cosa farai?» è inserita in una frase enunciativa." },
      { type: "mc", q: "Qual è il tipo di periodo ipotetico: «Se piovesse, resterei a casa»?", options: ["Della possibilità", "Della realtà", "Dell'irrealtà", "Non è ipotetico"], answer: 0, explain: "Congiuntivo imperfetto + condizionale presente: la condizione è possibile." },
      { type: "order", q: "Ordina i livelli di dipendenza.", items: ["Principale", "Subordinata di 1° grado", "Subordinata di 2° grado"], explain: "La principale è l'origine." },
      { type: "text", q: "Come si chiama la costruzione in cui prevale la subordinazione?", answer: ["ipotassi"], explain: "La paratassi è invece la prevalenza della coordinazione." }
    ]
  }
});

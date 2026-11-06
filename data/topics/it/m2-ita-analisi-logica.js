TOPIC('it', {
  id: "m2-ita-analisi-logica",
  title: "L'analisi logica",
  intro: "Con l'<b>analisi grammaticale</b> hai imparato che cosa <i>è</i> ogni parola (nome, verbo, aggettivo…). Con l'<b>analisi logica</b> scopri che <b>funzione</b> svolge ogni gruppo di parole dentro la frase: chi fa l'azione, che cosa succede, a chi, dove, quando, perché. È come smontare una macchina per capire a che cosa serve ogni pezzo.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Che cos'è l'analisi logica",
      html: `<p>La <b>frase semplice</b> (o <b>proposizione</b>) è un gruppo di parole con un solo <b>predicato</b>, cioè un solo verbo di modo finito: <i>Il treno parte alle otto.</i></p>
<p>Fare l'analisi logica significa dividere la frase in <b>sintagmi</b> (gruppi di parole legati tra loro) e riconoscere la <b>funzione logica</b> di ciascuno:</p>
<ul>
<li>il <b>predicato</b>: che cosa si dice (l'azione, lo stato);</li>
<li>il <b>soggetto</b>: di chi o di che cosa si parla;</li>
<li>i <b>complementi</b>: tutte le informazioni in più che "completano" il senso (oggetto, luogo, tempo, causa, mezzo…);</li>
<li>l'<b>attributo</b> e l'<b>apposizione</b>: aggiungono informazioni a un nome.</li>
</ul>
<p><b>Metodo in 4 passi</b> (sempre in quest'ordine!):</p>
<ol>
<li>trova il <b>predicato</b> (il verbo coniugato);</li>
<li>chiedi al predicato <b>«chi? / che cosa?»</b> per trovare il <b>soggetto</b>;</li>
<li>chiedi <b>«chi? / che cosa?»</b> dopo il verbo per trovare il <b>complemento oggetto</b>;</li>
<li>per ogni altro gruppo, fai la <b>domanda giusta</b> (dove? quando? con chi? perché?…) e dai un nome al complemento.</li>
</ol>`
    },
    {
      type: "text",
      title: "Il predicato: verbale e nominale",
      html: `<p>Il <b>predicato</b> è il nucleo della frase. Ce ne sono due tipi:</p>
<ul>
<li><b>Predicato verbale</b>: un verbo che ha significato completo da solo. <i>Luca <b>corre</b>. I ragazzi <b>hanno mangiato</b> la pizza.</i> Anche il verbo <i>essere</i> può essere predicato verbale quando significa "trovarsi, esistere, appartenere": <i>Il gatto <b>è</b> in giardino.</i></li>
<li><b>Predicato nominale</b>: il verbo <b>essere</b> (detto <b>copula</b>, cioè "legame") + un <b>nome</b> o un <b>aggettivo</b> (detto <b>parte nominale</b>). <i>Marta <b>è brava</b>. Mio padre <b>è medico</b>.</i></li>
</ul>
<p>Con verbi come <i>sembrare, diventare, restare, essere eletto, essere chiamato</i> si ha il <b>predicato verbale + complemento predicativo del soggetto</b>: <i>Anna <b>è diventata</b> <u>capitano</u>.</i></p>`
    },
    {
      type: "text",
      title: "Il soggetto, l'attributo e l'apposizione",
      html: `<p>Il <b>soggetto</b> è l'elemento di cui si parla; si trova chiedendo al verbo <b>«chi?»</b> o <b>«che cosa?»</b>. Può essere un nome, un pronome, un verbo all'infinito (<i><b>Leggere</b> fa bene</i>).</p>
<ul>
<li><b>Sottinteso</b>: non è scritto ma si capisce dalla desinenza: <i>(Noi) Andiamo al mare.</i></li>
<li><b>Posposto</b>: viene dopo il verbo: <i>È arrivata <b>la primavera</b>.</i></li>
<li>Il soggetto <b>non</b> è mai preceduto da una preposizione!</li>
</ul>
<p>L'<b>attributo</b> è un <b>aggettivo</b> che si riferisce a un nome qualsiasi della frase: <i>Il cane <b>nero</b> abbaia.</i></p>
<p>L'<b>apposizione</b> è un <b>nome</b> che accompagna un altro nome per specificarlo: <i>Il <b>poeta</b> Dante nacque a Firenze. La <b>città</b> di Roma.</i></p>`
    },
    {
      type: "svg",
      title: "La frase come un sistema solare",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#0f172a"/>
<circle cx="300" cy="170" r="125" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="6 6"/>
<circle cx="300" cy="170" r="70" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="6 6"/>
<circle cx="300" cy="170" r="44" fill="#facc15"/>
<text x="300" y="166" font-size="16" font-weight="bold" text-anchor="middle" fill="#1f2937">PREDICATO</text>
<text x="300" y="186" font-size="15" text-anchor="middle" fill="#1f2937">regala</text>
<circle cx="230" cy="150" r="30" fill="#ef4444"/>
<text x="230" y="146" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">SOGG.</text>
<text x="230" y="163" font-size="13" text-anchor="middle" fill="#fff">Sara</text>
<circle cx="370" cy="150" r="30" fill="#3b82f6"/>
<text x="370" y="146" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">OGG.</text>
<text x="370" y="163" font-size="13" text-anchor="middle" fill="#fff">un libro</text>
<circle cx="170" cy="70" r="30" fill="#22c55e"/>
<text x="170" y="66" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">TERM.</text>
<text x="170" y="83" font-size="12" text-anchor="middle" fill="#fff">a Luca</text>
<circle cx="440" cy="80" r="30" fill="#a855f7"/>
<text x="440" y="76" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">TEMPO</text>
<text x="440" y="93" font-size="12" text-anchor="middle" fill="#fff">oggi</text>
<circle cx="300" cy="295" r="30" fill="#f97316"/>
<text x="300" y="291" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">CAUSA</text>
<text x="300" y="306" font-size="11" text-anchor="middle" fill="#fff">per affetto</text>
<text x="20" y="30" font-size="16" fill="#e2e8f0" font-weight="bold">Oggi Sara regala un libro a Luca per affetto.</text>
<text x="20" y="325" font-size="14" fill="#94a3b8">Vicino al sole: elementi essenziali. In orbita: i complementi.</text>
</svg>`,
      caption: "Il predicato è il «sole» della frase: soggetto e oggetto gli stanno vicini, gli altri complementi girano intorno."
    },
    {
      type: "quiz",
      title: "Mini-quiz: predicato e soggetto",
      questions: [
        { type: "mc", q: "In «Il mare è calmo» il predicato è…", options: ["verbale: è", "nominale: è calmo", "verbale: è calmo"], answer: 1, explain: "Essere + aggettivo (calmo) = predicato nominale. «È» è la copula, «calmo» la parte nominale." },
        { type: "mc", q: "In «Domani partiremo presto» il soggetto è…", options: ["domani", "sottinteso (noi)", "presto"], answer: 1, explain: "La desinenza -emo indica la 1ª persona plurale: soggetto sottinteso «noi»." },
        { type: "tf", q: "In «Il libro è sul tavolo» il verbo essere forma un predicato nominale.", answer: false, explain: "Qui «è» significa «si trova»: è predicato verbale, e «sul tavolo» è complemento di stato in luogo." }
      ]
    },
    {
      type: "text",
      title: "I complementi più importanti",
      html: `<table>
<tr><th>Complemento</th><th>Domanda</th><th>Esempio</th></tr>
<tr><td><b>Oggetto</b> (diretto)</td><td>chi? che cosa? (senza preposizione)</td><td>Leggo <b>un fumetto</b>.</td></tr>
<tr><td><b>Specificazione</b></td><td>di chi? di che cosa?</td><td>Lo zaino <b>di Marco</b>.</td></tr>
<tr><td><b>Termine</b></td><td>a chi? a che cosa?</td><td>Scrivo <b>alla nonna</b>.</td></tr>
<tr><td><b>Agente / causa efficiente</b></td><td>da chi? da che cosa? (frase passiva)</td><td>Il gol fu segnato <b>da Ale</b>. / Il tetto fu rotto <b>dalla grandine</b>.</td></tr>
<tr><td><b>Stato in luogo</b></td><td>dove? (fermo)</td><td>Abito <b>a Torino</b>.</td></tr>
<tr><td><b>Moto a luogo</b></td><td>verso dove?</td><td>Vado <b>in palestra</b>.</td></tr>
<tr><td><b>Moto da luogo</b></td><td>da dove?</td><td>Torno <b>da scuola</b>.</td></tr>
<tr><td><b>Moto per luogo</b></td><td>attraverso dove?</td><td>Passo <b>per il parco</b>.</td></tr>
<tr><td><b>Tempo determinato</b></td><td>quando?</td><td>Arrivo <b>alle cinque</b>.</td></tr>
<tr><td><b>Tempo continuato</b></td><td>per quanto tempo?</td><td>Ho studiato <b>per due ore</b>.</td></tr>
<tr><td><b>Mezzo</b></td><td>con che cosa? per mezzo di che cosa?</td><td>Scrivo <b>con la penna</b>.</td></tr>
<tr><td><b>Modo</b></td><td>come? in che modo?</td><td>Parla <b>con calma</b>.</td></tr>
<tr><td><b>Compagnia / unione</b></td><td>con chi? / con che cosa?</td><td>Esco <b>con Giulia</b>. / Il caffè <b>con il latte</b>.</td></tr>
<tr><td><b>Causa</b></td><td>perché? per quale motivo?</td><td>Tremava <b>per il freddo</b>.</td></tr>
<tr><td><b>Fine o scopo</b></td><td>per quale fine?</td><td>Studio <b>per l'esame</b>.</td></tr>
<tr><td><b>Materia</b></td><td>di che materia?</td><td>Un anello <b>d'oro</b>.</td></tr>
<tr><td><b>Argomento</b></td><td>di che cosa? su che cosa? (si parla)</td><td>Un libro <b>sui dinosauri</b>.</td></tr>
<tr><td><b>Vocazione</b></td><td>(chiamata)</td><td><b>Ragazzi</b>, silenzio!</td></tr>
</table>
<p>Tutti i complementi tranne l'oggetto sono <b>indiretti</b>: sono introdotti da una <b>preposizione</b> (di, a, da, in, con, su, per, tra, fra) o da una locuzione.</p>`
    },
    {
      type: "remember",
      title: "Attenzione alle trappole",
      html: `<ul>
<li>La stessa preposizione può introdurre complementi diversi: <i>vado <b>a</b> Roma</i> (moto a luogo), <i>scrivo <b>a</b> Sara</i> (termine), <i>arrivo <b>a</b> mezzogiorno</i> (tempo). Conta la <b>domanda</b>, non la preposizione!</li>
<li>«Con» può essere mezzo (<i>con la bici</i>), modo (<i>con gioia</i>) o compagnia (<i>con Luca</i>): cose → mezzo, sentimenti/maniere → modo, persone/animali → compagnia.</li>
<li>Il complemento oggetto <b>non ha mai la preposizione</b> e c'è solo con i verbi <b>transitivi</b> in forma attiva.</li>
<li>Prima il predicato, poi il soggetto: se parti dai complementi rischi di confonderti.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: analizziamo una frase passo per passo",
      html: `<p><i>Ieri mattina mio fratello Paolo ha portato il cane nero al parco con il guinzaglio nuovo.</i></p>
<ol>
<li><b>Predicato</b>: <i>ha portato</i> → predicato verbale (verbo transitivo, passato prossimo).</li>
<li><b>Soggetto</b>: chi ha portato? → <i>Paolo</i>. Il nome comune <i>fratello</i>, che specifica il nome proprio, è l'<b>apposizione</b>; <i>mio</i> è un <b>attributo</b> dell'apposizione.</li>
<li><b>Complemento oggetto</b>: ha portato che cosa? → <i>il cane</i>; <i>nero</i> = attributo.</li>
<li><i>al parco</i> → verso dove? <b>moto a luogo</b>.</li>
<li><i>con il guinzaglio</i> → con che cosa? <b>mezzo</b>; <i>nuovo</i> = attributo.</li>
<li><i>ieri mattina</i> → quando? <b>tempo determinato</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio pratico: una frase passiva",
      html: `<p><i>La Divina Commedia fu scritta da Dante nel Trecento.</i></p>
<ul>
<li><b>fu scritta</b> → predicato verbale in forma <b>passiva</b>;</li>
<li><b>La Divina Commedia</b> → soggetto (chi "subisce" l'azione); <i>Divina</i> è attributo;</li>
<li><b>da Dante</b> → da chi? <b>complemento d'agente</b> (persona che compie l'azione);</li>
<li><b>nel Trecento</b> → quando? <b>tempo determinato</b>.</li>
</ul>
<p>Se la volgi all'attivo: <i>Dante scrisse la Divina Commedia</i> → l'agente diventa soggetto e il soggetto diventa complemento oggetto!</p>`
    },
    {
      type: "widget",
      title: "Gioco: che complemento è?",
      widget: "classify",
      options: {
        groups: ["📍 Luogo", "⏰ Tempo", "🛠️ Mezzo o modo", "❓ Causa o fine"],
        items: [
          ["Vivo <b>in campagna</b>", 0], ["Corro <b>verso casa</b>", 0], ["Esco <b>dal cinema</b>", 0],
          ["Parto <b>a giugno</b>", 1], ["Ho dormito <b>per dieci ore</b>", 1], ["<b>Di notte</b> fa freddo", 1],
          ["Viaggio <b>in treno</b>", 2], ["Rispondo <b>con gentilezza</b>", 2], ["Taglio <b>con le forbici</b>", 2],
          ["Piange <b>per la paura</b>", 3], ["Si allena <b>per la gara</b>", 3], ["Fu premiato <b>per il coraggio</b>", 3]
        ]
      },
      caption: "Trascina ogni frase nel gruppo giusto: fai la domanda al verbo!"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il latino aveva i casi",
      html: `<p>In <b>latino</b> la funzione logica di una parola non la indicava la preposizione ma la <b>desinenza</b>: <i>rosa</i> (soggetto, nominativo), <i>rosae</i> (della rosa, genitivo), <i>rosae</i> (alla rosa, dativo), <i>rosam</i> (complemento oggetto, accusativo)… Per questo in latino l'ordine delle parole era libero! L'analisi logica italiana nasce proprio dallo studio dei <b>casi latini</b>. Anche il tedesco, il russo e il rumeno hanno ancora i casi.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Più di 40 complementi",
      html: `<p>Le grammatiche italiane elencano <b>più di quaranta</b> complementi: oltre a quelli classici ci sono il complemento di <b>età</b> (<i>un bimbo di tre anni</i>), di <b>peso</b>, di <b>prezzo</b> (<i>costa dieci euro</i>), di <b>abbondanza</b> e <b>privazione</b>, di <b>esclusione</b> (<i>tutti tranne te</i>), <b>partitivo</b> (<i>uno di voi</i>), <b>distributivo</b> (<i>due volte al giorno</i>)… Non serve impararli tutti a memoria: basta saper fare la <b>domanda giusta</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'analisi logica",
      intro: "Se la tabella dei complementi ti sembra un muro, prova una di queste strade.",
      tabs: [
        {
          label: "🎬 La frase come un film",
          html: `<p>Immagina la frase come la scena di un film:</p>
<ul>
<li>il <b>predicato</b> è l'<b>azione</b> (ciak, si gira!);</li>
<li>il <b>soggetto</b> è il <b>protagonista</b>;</li>
<li>il <b>complemento oggetto</b> è l'oggetto di scena su cui agisce;</li>
<li>i complementi di <b>luogo e tempo</b> sono la <b>scenografia</b> e l'orario delle riprese;</li>
<li>mezzo, modo, causa sono le <b>indicazioni del regista</b>: con che cosa, come, perché.</li>
</ul>
<p>Prima di tutto chiediti: <i>qual è l'azione?</i> Poi: <i>chi la fa?</i></p>`
        },
        {
          label: "🇬🇧 Il metodo inglese: SVO",
          html: `<p>Nelle scuole inglesi si parte dallo schema <b>S-V-O</b>: <b>Subject – Verb – Object</b>. <i>Tom (S) eats (V) an apple (O).</i> Tutto il resto sono <b>adverbials</b> (dove, quando, come, perché).</p>
<p>In inglese l'ordine è rigido, quindi la posizione ti dice la funzione. In italiano l'ordine è più libero (<i>La mela la mangia Tom</i>), perciò dobbiamo usare le <b>domande</b>. Ma lo schema S-V-O resta un buon punto di partenza: trova S, V e O, poi classifica il resto.</p>`
        },
        {
          label: "🌳 Il metodo valenziale (a raggiera)",
          html: `<p>Le Indicazioni nazionali suggeriscono anche la <b>grammatica valenziale</b> (dal linguista francese <b>Lucien Tesnière</b>). Ogni verbo, come un atomo, ha delle <b>valenze</b>: i "posti" che devono essere occupati perché la frase abbia senso.</p>
<ul>
<li><b>zerovalenti</b>: <i>piove</i> (nessun argomento);</li>
<li><b>monovalenti</b>: <i>Luca dorme</i> (chi?);</li>
<li><b>bivalenti</b>: <i>Luca mangia una mela</i> (chi? che cosa?);</li>
<li><b>trivalenti</b>: <i>Luca regala un fiore a Sara</i> (chi? che cosa? a chi?).</li>
</ul>
<p>Gli <b>argomenti</b> sono indispensabili; tutto il resto sono <b>circostanziali</b> ed <b>espansioni</b>, che si possono togliere.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<line x1="300" y1="140" x2="120" y2="60" stroke="#16a34a" stroke-width="4"/>
<line x1="300" y1="140" x2="480" y2="60" stroke="#16a34a" stroke-width="4"/>
<line x1="300" y1="140" x2="300" y2="245" stroke="#16a34a" stroke-width="4"/>
<line x1="300" y1="140" x2="110" y2="225" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 6"/>
<line x1="300" y1="140" x2="490" y2="225" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 6"/>
<ellipse cx="300" cy="140" rx="70" ry="34" fill="#16a34a"/>
<text x="300" y="147" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">regala</text>
<rect x="60" y="38" width="120" height="40" rx="10" fill="#ef4444"/>
<text x="120" y="64" font-size="17" fill="#fff" text-anchor="middle">Luca (chi?)</text>
<rect x="400" y="38" width="160" height="40" rx="10" fill="#3b82f6"/>
<text x="480" y="64" font-size="17" fill="#fff" text-anchor="middle">un fiore (che cosa?)</text>
<rect x="225" y="228" width="150" height="40" rx="10" fill="#22c55e"/>
<text x="300" y="254" font-size="17" fill="#fff" text-anchor="middle">a Sara (a chi?)</text>
<rect x="20" y="210" width="180" height="34" rx="10" fill="#e2e8f0"/>
<text x="110" y="233" font-size="15" fill="#334155" text-anchor="middle">ieri (circostanziale)</text>
<rect x="410" y="210" width="170" height="34" rx="10" fill="#e2e8f0"/>
<text x="495" y="233" font-size="15" fill="#334155" text-anchor="middle">rosso (espansione)</text>
</svg>`
        },
        {
          label: "🃏 Flashcard delle domande",
          html: `<p>Allenati: sul fronte c'è il complemento, sul retro la domanda da fare al verbo.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Complemento oggetto", back: "chi? che cosa? (senza preposizione)" },
              { front: "Specificazione", back: "di chi? di che cosa?" },
              { front: "Termine", back: "a chi? a che cosa?" },
              { front: "Agente", back: "da chi? (frase passiva, persona)" },
              { front: "Stato in luogo", back: "dove? (fermo)" },
              { front: "Moto a luogo", back: "verso dove?" },
              { front: "Tempo continuato", back: "per quanto tempo?" },
              { front: "Causa", back: "perché? per quale motivo?" },
              { front: "Fine", back: "per quale scopo?" },
              { front: "Compagnia", back: "con chi?" }
            ]
          }
        }
      ]
    },
    {
      type: "widget",
      title: "Abbina la frase al complemento evidenziato",
      widget: "match",
      options: {
        pairs: [
          ["La bici di Anna", "specificazione"],
          ["Telefono a mia zia", "termine"],
          ["Fu morso da un cane", "agente"],
          ["Un vaso di vetro", "materia"],
          ["Parliamo di calcio", "argomento"],
          ["Passeggio con il cane", "compagnia"]
        ]
      },
      caption: "Collega ogni esempio al nome del complemento."
    },
    {
      type: "conceptMap",
      title: "Mappa dell'analisi logica",
      nodes: [
        { id: "frase", label: "Frase semplice", x: 50, y: 6, color: "#0f172a", html: "Un'unità di senso compiuto con un solo predicato.", why: "La parola «proposizione» viene dal latino <i>propositio</i>, «ciò che si mette davanti», cioè ciò che si afferma. I logici antichi, a partire da <b>Aristotele</b> (IV secolo a.C.), studiavano le proposizioni come affermazioni vere o false: da qui il nome «analisi <i>logica</i>»." },
        { id: "predicato", label: "Predicato", x: 50, y: 28, color: "#ca8a04", html: "Ciò che si dice del soggetto: verbale o nominale.", why: "«Predicare» in latino significa «dichiarare». Per Aristotele ogni giudizio è fatto di un soggetto e di un predicato («Socrate è mortale»). Per questo la grammatica tradizionale distingue il predicato nominale, con la copula «essere»." },
        { id: "soggetto", label: "Soggetto", x: 18, y: 42, color: "#dc2626", html: "Chi compie o subisce l'azione, o di cui si parla.", why: "Dal latino <i>subiectum</i>, «ciò che sta sotto»: è la base su cui poggia ciò che si afferma. In italiano concorda con il verbo in persona e numero: per questo può restare sottinteso." },
        { id: "oggetto", label: "Complemento oggetto", x: 82, y: 42, color: "#2563eb", html: "Riceve direttamente l'azione di un verbo transitivo.", why: "Corrisponde all'<b>accusativo</b> latino. Si chiama «diretto» perché è legato al verbo senza preposizione: l'azione «passa» (<i>transire</i>) direttamente su di lui, da cui il nome di verbo <b>transitivo</b>." },
        { id: "indiretti", label: "Complementi indiretti", x: 50, y: 58, color: "#16a34a", html: "Introdotti da preposizioni: specificazione, termine, luogo, tempo, mezzo, causa…", why: "Quando il latino parlato perse le desinenze dei casi (tra il V e l'VIII secolo), le lingue romanze usarono le <b>preposizioni</b> per indicare le funzioni: <i>rosae</i> diventò «della rosa» e «alla rosa»." },
        { id: "attributo", label: "Attributo", x: 18, y: 76, color: "#9333ea", html: "Aggettivo che si riferisce a un nome.", why: "Da <i>attribuere</i>, «assegnare»: assegna una qualità a un nome. Concorda in genere e numero con il nome a cui si riferisce, ovunque esso sia nella frase." },
        { id: "apposizione", label: "Apposizione", x: 50, y: 82, color: "#db2777", html: "Nome che ne specifica un altro: il <b>fiume</b> Po.", why: "Da <i>apponere</i>, «mettere accanto». È un nome che si mette vicino a un altro per definirlo meglio; prende la stessa funzione logica del nome a cui si riferisce." },
        { id: "valenza", label: "Valenza del verbo", x: 82, y: 76, color: "#0d9488", html: "Il numero di argomenti necessari al verbo.", why: "Proposta dal linguista francese <b>Lucien Tesnière</b> negli <i>Éléments de syntaxe structurale</i> (1959), che prese il termine dalla chimica: come un atomo si lega a un certo numero di altri atomi, un verbo «chiama» un certo numero di argomenti." }
      ],
      edges: [
        ["frase", "predicato", "ha un nucleo"],
        ["predicato", "soggetto", "concorda con"],
        ["predicato", "oggetto", "se transitivo"],
        ["predicato", "indiretti", "si espande con"],
        ["soggetto", "attributo", "può avere"],
        ["soggetto", "apposizione", "può avere"],
        ["predicato", "valenza", "ha una"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i complementi",
      questions: [
        { type: "mc", q: "«Andiamo a Napoli in aereo». «In aereo» è complemento di…", options: ["stato in luogo", "mezzo", "modo"], answer: 1, explain: "Con che cosa andiamo? Con l'aereo: complemento di mezzo." },
        { type: "mc", q: "«La casa fu costruita dai nonni». «Dai nonni» è complemento…", options: ["d'agente", "di moto da luogo", "di causa"], answer: 0, explain: "Frase passiva, persona che compie l'azione: complemento d'agente." },
        { type: "text", q: "«Ho aspettato per un'ora». Che complemento è «per un'ora»? (due parole)", answer: ["tempo continuato", "di tempo continuato", "complemento di tempo continuato"], explain: "Per quanto tempo? Tempo continuato." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Ordine: <b>predicato → soggetto → oggetto → altri complementi</b>.</li>
<li>Predicato <b>nominale</b> = essere + nome/aggettivo; tutti gli altri sono <b>verbali</b>.</li>
<li>Il <b>soggetto</b> e il <b>complemento oggetto</b> non hanno preposizione.</li>
<li>Per i complementi indiretti conta la <b>domanda</b>, non la preposizione.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Analisi logica", d: "Studio della funzione che ogni parola o gruppo di parole svolge nella frase." },
    { t: "Predicato verbale", d: "Verbo di significato compiuto che dice che cosa fa o che cosa accade al soggetto." },
    { t: "Predicato nominale", d: "Verbo essere (copula) + nome o aggettivo (parte nominale)." },
    { t: "Copula", d: "Il verbo «essere» quando lega il soggetto a un nome o aggettivo." },
    { t: "Soggetto", d: "Chi compie o subisce l'azione o di cui si parla; si trova chiedendo chi? che cosa?" },
    { t: "Complemento oggetto", d: "Riceve direttamente l'azione di un verbo transitivo; non ha preposizione." },
    { t: "Complemento indiretto", d: "Complemento introdotto da una preposizione." },
    { t: "Attributo", d: "Aggettivo riferito a un nome della frase." },
    { t: "Apposizione", d: "Nome che accompagna e specifica un altro nome." },
    { t: "Valenza", d: "Numero di argomenti di cui un verbo ha bisogno per avere senso compiuto." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In «I bambini giocano in cortile» il soggetto è…", options: ["in cortile", "i bambini", "giocano"], answer: 1, explain: "Chi gioca? I bambini." },
      { type: "mc", q: "«Tua sorella sembra stanca»: «stanca» è…", options: ["attributo", "parte nominale", "complemento predicativo del soggetto"], answer: 2, explain: "Con «sembrare» si ha predicato verbale + complemento predicativo del soggetto." },
      { type: "tf", q: "Il complemento oggetto è sempre introdotto dalla preposizione «a».", answer: false, explain: "Il complemento oggetto non ha mai preposizione." },
      { type: "mc", q: "«Torno da Milano stasera»: «da Milano» è…", options: ["moto da luogo", "agente", "specificazione"], answer: 0, explain: "Da dove torno? Moto da luogo." },
      { type: "mc", q: "«Una statua di marmo»: «di marmo» è complemento di…", options: ["specificazione", "materia", "argomento"], answer: 1, explain: "Di che materia è fatta? Materia." },
      { type: "tf", q: "In «Giulia è a scuola» il predicato è verbale.", answer: true, explain: "«È» significa «si trova»; «a scuola» è stato in luogo." },
      { type: "text", q: "«Il poeta Leopardi nacque a Recanati». Che funzione ha «poeta»?", answer: ["apposizione", "un'apposizione"], explain: "È un nome che specifica il nome proprio Leopardi: apposizione." },
      { type: "mc", q: "«Marco studia con impegno»: «con impegno» è complemento di…", options: ["mezzo", "compagnia", "modo"], answer: 2, explain: "Come studia? In che modo? Modo." },
      { type: "num", q: "Quanti argomenti (valenze) ha il verbo «regalare» in «Paolo regala un libro a Sara»?", answer: 3, explain: "Chi regala, che cosa, a chi: verbo trivalente." },
      { type: "order", q: "Metti in ordine i passi dell'analisi logica.", items: ["Trovo il predicato", "Trovo il soggetto", "Trovo il complemento oggetto", "Classifico gli altri complementi"], explain: "Si parte sempre dal predicato, poi soggetto, oggetto e complementi indiretti." },
      { type: "mc", q: "«Il ladro fu fermato dalla polizia». La frase è…", options: ["attiva", "passiva", "riflessiva"], answer: 1, explain: "«Fu fermato» è passivo; «dalla polizia» è complemento d'agente." },
      { type: "text", q: "«Per la pioggia la gita è stata rinviata»: che complemento è «per la pioggia»?", answer: ["causa", "di causa", "complemento di causa"], explain: "Perché è stata rinviata? Per la pioggia: causa." }
    ]
  }
});

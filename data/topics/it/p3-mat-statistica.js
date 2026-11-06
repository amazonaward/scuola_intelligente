TOPIC('it', {
  id: "p3-mat-statistica",
  title: "Indagini e grafici",
  intro: "Qual è il gusto di gelato preferito della tua classe? 🍦 Per scoprirlo bisogna fare un'<b>indagine</b>: fare una domanda, raccogliere le risposte (i <b>dati</b>), contarle e disegnarle in un <b>grafico</b>. Diventiamo piccoli statistici!",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Le tappe di un'indagine",
      html: `<p>Un'<b>indagine statistica</b> è una ricerca per scoprire qualcosa su un gruppo di persone, animali o cose. Si fa in <b>5 tappe</b>:</p>
<ol>
<li>❓ <b>La domanda</b>: decido che cosa voglio sapere. Es. <i>"Qual è il tuo animale preferito?"</i></li>
<li>👥 <b>Il gruppo</b>: decido a chi chiedere (es. i 20 bambini della 3ªB).</li>
<li>📝 <b>La raccolta dei dati</b>: chiedo a ognuno e segno le risposte.</li>
<li>🔢 <b>Il conteggio</b>: metto i dati in una <b>tabella</b>.</li>
<li>📊 <b>Il grafico</b>: disegno i dati per vederli \"a colpo d'occhio\" e trarre le <b>conclusioni</b>.</li>
</ol>
<p>Le risposte che raccogliamo si chiamano <b>dati</b>. Possono essere <b>parole</b> (colore, gusto, sport) oppure <b>numeri</b> (età, numero di fratelli, altezza).</p>`
    },
    {
      type: "text",
      title: "Raccogliere i dati: le tacche",
      html: `<p>Per contare in fretta si usano le <b>tacche</b>: una stanghetta | per ogni risposta. Ogni 5 risposte si fa un <b>mazzetto</b>: quattro stanghette e una barra di traverso. Così si contano i dati a gruppi di 5!</p>
<p>Poi si scrive il totale nella colonna della <b>frequenza</b>, cioè <b>quante volte</b> è comparsa ogni risposta.</p>
<table>
<tr><th>Animale</th><th>Tacche</th><th>Frequenza</th></tr>
<tr><td>🐶 Cane</td><td>卌 |||</td><td>8</td></tr>
<tr><td>🐱 Gatto</td><td>卌</td><td>5</td></tr>
<tr><td>🐰 Coniglio</td><td>|||</td><td>3</td></tr>
<tr><td>🐟 Pesce</td><td>||||</td><td>4</td></tr>
<tr><td><b>Totale</b></td><td></td><td><b>20</b></td></tr>
</table>
<p>✅ Controllo: il totale delle frequenze deve essere uguale al numero di persone intervistate (20).</p>`
    },
    {
      type: "svg",
      title: "L'istogramma degli animali preferiti",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<text x="320" y="28" font-size="20" fill="#1f2937" text-anchor="middle" font-weight="bold">Animali preferiti della 3ªB</text>
<g stroke="#e2e8f0" stroke-width="2">
<line x1="80" y1="250" x2="560" y2="250"/><line x1="80" y1="225" x2="560" y2="225"/><line x1="80" y1="200" x2="560" y2="200"/><line x1="80" y1="175" x2="560" y2="175"/>
<line x1="80" y1="150" x2="560" y2="150"/><line x1="80" y1="125" x2="560" y2="125"/><line x1="80" y1="100" x2="560" y2="100"/><line x1="80" y1="75" x2="560" y2="75"/><line x1="80" y1="50" x2="560" y2="50"/>
</g>
<line x1="80" y1="275" x2="560" y2="275" stroke="#1f2937" stroke-width="3"/>
<line x1="80" y1="40" x2="80" y2="275" stroke="#1f2937" stroke-width="3"/>
<g font-size="16" fill="#1f2937" text-anchor="end">
<text x="72" y="280">0</text><text x="72" y="230">2</text><text x="72" y="180">4</text><text x="72" y="130">6</text><text x="72" y="80">8</text>
</g>
<rect x="110" y="75" width="80" height="200" fill="#f97316"/>
<rect x="230" y="150" width="80" height="125" fill="#3b82f6"/>
<rect x="350" y="200" width="80" height="75" fill="#22c55e"/>
<rect x="470" y="175" width="80" height="100" fill="#a855f7"/>
<g font-size="20" text-anchor="middle" font-weight="bold">
<text x="150" y="68" fill="#c2410c">8</text><text x="270" y="143" fill="#1d4ed8">5</text><text x="390" y="193" fill="#15803d">3</text><text x="510" y="168" fill="#7e22ce">4</text>
</g>
<g font-size="18" text-anchor="middle" fill="#1f2937">
<text x="150" y="300">🐶 cane</text><text x="270" y="300">🐱 gatto</text><text x="390" y="300">🐰 coniglio</text><text x="510" y="300">🐟 pesce</text>
</g>
<text x="30" y="160" font-size="16" fill="#475569" transform="rotate(-90 30 160)" text-anchor="middle">numero di bambini</text>
</svg>`,
      caption: "Ogni colonna è alta quanto la frequenza: si vede subito che il cane è l'animale più votato."
    },
    {
      type: "text",
      title: "I tipi di grafico",
      html: `<ul>
<li>📊 <b>Istogramma</b> (grafico a barre o a colonne): ogni risposta ha una colonna alta quanto la sua frequenza. Sull'asse orizzontale ci sono le risposte, su quello verticale i numeri. Le colonne devono avere <b>tutte la stessa larghezza</b>.</li>
<li>🖼️ <b>Ideogramma</b> (pittogramma): si usano dei <b>disegnini</b> (simboli). Attenzione alla <b>legenda</b>: un disegnino può valere 1, ma anche 2, 5 o 10!</li>
<li>🟦 <b>Diagramma a quadretti</b>: come l'istogramma, ma si colora un quadretto per ogni dato.</li>
<li>🥧 <b>Aerogramma</b> (grafico a torta): il cerchio intero è il totale e ogni fetta è una parte. Lo userai di più negli anni prossimi.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Un ideogramma con legenda",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fff7ed"/>
<text x="300" y="30" font-size="20" text-anchor="middle" font-weight="bold" fill="#1f2937">Gelati venduti in una settimana</text>
<text x="20" y="85" font-size="20" fill="#1f2937">🍫 cioccolato</text>
<text x="20" y="145" font-size="20" fill="#1f2937">🍓 fragola</text>
<text x="20" y="205" font-size="20" fill="#1f2937">🍋 limone</text>
<g fill="#f472b6" stroke="#9d174d" stroke-width="2">
<circle cx="210" cy="78" r="18"/><circle cx="260" cy="78" r="18"/><circle cx="310" cy="78" r="18"/><circle cx="360" cy="78" r="18"/><circle cx="410" cy="78" r="18"/><circle cx="460" cy="78" r="18"/>
<circle cx="210" cy="138" r="18"/><circle cx="260" cy="138" r="18"/><circle cx="310" cy="138" r="18"/><circle cx="360" cy="138" r="18"/>
<circle cx="210" cy="198" r="18"/><circle cx="260" cy="198" r="18"/>
</g>
<path d="M260 216 L260 180 A18 18 0 0 1 260 216 Z" fill="#fff7ed"/>
<text x="520" y="85" font-size="20" fill="#9d174d" font-weight="bold">60</text>
<text x="520" y="145" font-size="20" fill="#9d174d" font-weight="bold">40</text>
<text x="520" y="205" font-size="20" fill="#9d174d" font-weight="bold">15</text>
<rect x="150" y="235" width="300" height="34" rx="8" fill="#ffffff" stroke="#9d174d" stroke-width="2"/>
<circle cx="180" cy="252" r="12" fill="#f472b6" stroke="#9d174d" stroke-width="2"/>
<text x="200" y="259" font-size="18" fill="#1f2937">Legenda: 1 pallina = 10 gelati</text>
</svg>`,
      caption: "Con la legenda \"1 pallina = 10\" mezza pallina vale 5: il limone ha 10 + 5 = 15 gelati."
    },
    {
      type: "quiz",
      title: "Mini-quiz: leggere i dati",
      questions: [
        { type: "num", q: "Nell'istogramma degli animali, quanti bambini hanno scelto il gatto?", answer: 5, explain: "La colonna del gatto arriva a 5." },
        { type: "mc", q: "Nell'ideogramma dei gelati ogni pallina vale…", options: ["1 gelato", "10 gelati", "5 gelati"], answer: 1, explain: "Lo dice la legenda: 1 pallina = 10 gelati." },
        { type: "num", q: "Quanti gelati alla fragola sono stati venduti?", answer: 40, explain: "4 palline × 10 = 40 gelati." }
      ]
    },
    {
      type: "text",
      title: "Leggere un grafico: la moda e il confronto",
      html: `<p>Un grafico serve per rispondere a domande. Guardando l'istogramma degli animali:</p>
<ul>
<li>Qual è la risposta <b>più frequente</b>? Il <b>cane</b> (8). Si chiama <b>moda</b>: è la risposta che compare <b>più volte</b>. 👑</li>
<li>Qual è la meno scelta? Il coniglio (3).</li>
<li>Quanti bambini in più preferiscono il cane rispetto al gatto? 8 − 5 = <b>3</b>.</li>
<li>Quanti bambini hanno risposto in tutto? 8 + 5 + 3 + 4 = <b>20</b>.</li>
</ul>
<p>Attenzione: la moda <b>non</b> è un numero della tabella, è la <b>risposta</b> (\"cane\")!</p>`
    },
    {
      type: "widget",
      title: "Dati con parole o dati con numeri?",
      widget: "classify",
      options: {
        groups: ["Risposta con parole", "Risposta con numeri"],
        items: [
          ["🎨 Colore preferito", 0],
          ["🎂 Quanti anni hai?", 1],
          ["⚽ Sport preferito", 0],
          ["👨‍👩‍👧 Quanti fratelli hai?", 1],
          ["🍝 Piatto preferito", 0],
          ["👟 Numero di scarpe", 1],
          ["🚌 Come vieni a scuola?", 0],
          ["📚 Quanti libri hai letto quest'anno?", 1]
        ]
      },
      caption: "Ogni domanda di un'indagine dà dati di tipo diverso: dividile nei due gruppi."
    },
    {
      type: "example",
      title: "Esempio pratico: come venite a scuola?",
      html: `<p>La 3ªA (24 alunni) fa un'indagine: <i>"Come vieni a scuola?"</i></p>
<table>
<tr><th>Mezzo</th><th>Frequenza</th></tr>
<tr><td>🚶 a piedi</td><td>9</td></tr>
<tr><td>🚗 in auto</td><td>7</td></tr>
<tr><td>🚌 scuolabus</td><td>5</td></tr>
<tr><td>🚲 in bici</td><td>3</td></tr>
</table>
<p>Controllo: 9 + 7 + 5 + 3 = <b>24</b> ✔. La moda è <b>a piedi</b>. Conclusione: più di un terzo della classe viene a piedi… e la classe propone al Comune un <b>pedibus</b>! 🚸</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il meteo di una settimana",
      html: `<p>Ogni mattina Marta guarda il cielo e segna il tempo per 2 settimane (14 giorni):</p>
<ul>
<li>☀️ sole: |||| | → <b>6</b></li>
<li>☁️ nuvoloso: |||| → <b>4</b></li>
<li>🌧️ pioggia: ||| → <b>3</b></li>
<li>❄️ neve: | → <b>1</b></li>
</ul>
<p>Totale 6 + 4 + 3 + 1 = 14 ✔. Il tempo più frequente (la moda) è il <b>sole</b>. Ha piovuto la metà dei giorni di sole (3 è la metà di 6).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>In Italia l'<b>ISTAT</b> fa una gigantesca indagine su tutta la popolazione: il <b>censimento</b>. Oggi si fa ogni anno con dei campioni di famiglie. Già gli antichi <b>Romani</b> facevano il censimento ogni 5 anni per contare i cittadini: il magistrato che se ne occupava si chiamava <b>censore</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il grafico a barre e il grafico a torta furono inventati da uno scozzese, <b>William Playfair</b>, tra il 1786 e il 1801. Prima di lui i dati si scrivevano solo in lunghe tabelle di numeri! E l'infermiera <b>Florence Nightingale</b> usò grafici colorati nel 1858 per convincere il governo inglese a migliorare l'igiene negli ospedali, salvando moltissime vite. 🏥</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Indagine: domanda → raccolta dati → tabella → grafico → conclusioni.</li>
<li><b>Frequenza</b> = quante volte compare una risposta.</li>
<li><b>Moda</b> = la risposta più frequente.</li>
<li>Nell'ideogramma leggi sempre la <b>legenda</b>!</li>
<li>Il totale delle frequenze = numero delle persone intervistate.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i grafici",
      intro: "I grafici ti sembrano disegni misteriosi? Ecco altri modi per vederli e costruirli.",
      tabs: [
        {
          label: "🧱 Torri di mattoncini",
          html: `<p>Costruisci un istogramma con i <b>mattoncini</b> o i cubetti! Per ogni bambino che vota \"cane\" metti un cubetto sulla torre del cane, e così via.</p>
<p>Alla fine metti le torri in fila: la più alta è la <b>moda</b>! Qui sotto i cubetti formano una torre: cambia i numeri e prova a immaginare le torri per ogni risposta.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 8, b: 1 }
        },
        {
          label: "🙋 Grafico umano",
          html: `<p>Si può fare un grafico… con le persone! In palestra o in cortile:</p>
<ol>
<li>disegnate a terra con il gesso le categorie (cane, gatto, coniglio, pesce);</li>
<li>ogni bambino si mette <b>in fila</b> dietro la sua risposta;</li>
<li>guardate dall'alto (o fate una foto dalla finestra): le file sono le <b>colonne</b> dell'istogramma! 📸</li>
</ol>
<p>Così si capisce che ogni quadretto del grafico è <b>una persona vera</b>.</p>`
        },
        {
          label: "🔢 Conta con le tacche",
          html: `<p>Prova a contare come gli statistici: aggiungi una 🖊️ per ogni risposta e fermati quando hai finito. Ogni 5 fai un mazzetto!</p>
<p>In molti Paesi le tacche si fanno in modo diverso: in <b>Cina e in Giappone</b> si scrive il carattere <b>正</b> (che ha 5 tratti), un tratto per ogni voto; in <b>America Latina</b> si disegna un quadrato con una diagonale (4 lati + 1 = 5).</p>`,
          widget: "counter",
          options: { emoji: "🖊️", max: 30 }
        },
        {
          label: "🥧 Il grafico a torta",
          html: `<p>Se la classe è una <b>torta intera</b>, ogni risposta si prende una <b>fetta</b>. Con 20 bambini: il cane (8 voti) si prende quasi metà torta, il coniglio (3) una fettina piccola.</p>
<p>È un modo che si usa tantissimo nei giornali e alla TV, e ti servirà quando studierai le frazioni e le percentuali!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<path d="M150 130 L150 30 A100 100 0 0 1 209 211 Z" fill="#f97316"/>
<path d="M150 130 L209 211 A100 100 0 0 1 69 189 Z" fill="#3b82f6"/>
<path d="M150 130 L69 189 A100 100 0 0 1 55 99 Z" fill="#22c55e"/>
<path d="M150 130 L55 99 A100 100 0 0 1 150 30 Z" fill="#a855f7"/>
<circle cx="150" cy="130" r="100" fill="none" stroke="#1f2937" stroke-width="3"/>
<g font-size="20" fill="#1f2937">
<rect x="300" y="50" width="22" height="22" fill="#f97316"/><text x="332" y="68">cane 8</text>
<rect x="300" y="90" width="22" height="22" fill="#3b82f6"/><text x="332" y="108">gatto 5</text>
<rect x="300" y="130" width="22" height="22" fill="#22c55e"/><text x="332" y="148">coniglio 3</text>
<rect x="300" y="170" width="22" height="22" fill="#a855f7"/><text x="332" y="188">pesce 4</text>
</g>
<text x="300" y="230" font-size="18" fill="#475569">torta intera = 20 bambini</text>
</svg>`
        },
        {
          label: "🕵️ Il detective dei dati",
          html: `<p>Pensa all'indagine come al lavoro di un <b>detective</b> 🔍:</p>
<ul>
<li>il <b>mistero</b> è la domanda;</li>
<li>gli <b>indizi</b> sono i dati che raccogli;</li>
<li>il <b>taccuino</b> è la tabella;</li>
<li>la <b>bacheca</b> con le foto collegate è il grafico;</li>
<li>la <b>soluzione</b> del caso è la conclusione!</li>
</ul>
<p>Un buon detective non salta nessun indizio e non ne inventa: anche lo statistico deve contare <b>tutti</b> i dati, onestamente.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'indagine: tocca un nodo e scopri il perché",
      nodes: [
        { id: "domanda", label: "Domanda", x: 50, y: 6, color: "#f59e0b", html: "Ciò che vogliamo scoprire su un gruppo.", why: "Ogni indagine nasce da una curiosità o da un bisogno: sapere quante persone ci sono, cosa preferiscono, di cosa hanno bisogno." },
        { id: "gruppo", label: "Gruppo (popolazione)", x: 18, y: 24, color: "#64748b", html: "Le persone, gli animali o le cose a cui chiediamo.", why: "In statistica il gruppo si chiama \"popolazione\" anche se sono… alberi o automobili! Quando il gruppo è enorme si sceglie solo una parte, il \"campione\"." },
        { id: "dati", label: "Dati", x: 50, y: 30, color: "#16a34a", html: "Le risposte raccolte: parole o numeri.", why: "\"Dato\" vuol dire \"ciò che è dato\", cioè la risposta che ci viene data. Senza dati veri, le conclusioni sono solo opinioni." },
        { id: "tacche", label: "Tacche", x: 82, y: 24, color: "#0ea5e9", html: "Stanghette per contare, a mazzetti da 5.", why: "Sono uno dei modi di contare più antichi: l'osso di Ishango, trovato in Africa centrale e antico di circa 20 000 anni, ha intagliate file di tacche." },
        { id: "tabella", label: "Tabella e frequenza", x: 50, y: 52, color: "#2563eb", html: "Per ogni risposta si scrive quante volte compare.", why: "Mettere in ordine i dati in righe e colonne li rende facili da contare e da controllare: il totale deve tornare." },
        { id: "grafici", label: "Grafici", x: 25, y: 74, color: "#a855f7", html: "Istogramma, ideogramma, a quadretti, a torta.", why: "Il cervello capisce più in fretta un disegno che una lista di numeri. William Playfair inventò il grafico a barre nel 1786 e quello a torta nel 1801." },
        { id: "moda", label: "Moda", x: 75, y: 74, color: "#ec4899", html: "La risposta più frequente.", why: "Si chiama così perché indica ciò che \"va di moda\", cioè la scelta più diffusa nel gruppo." },
        { id: "conclusioni", label: "Conclusioni", x: 50, y: 93, color: "#14b8a6", html: "Che cosa abbiamo scoperto e cosa possiamo fare.", why: "Le indagini servono a prendere decisioni: i Comuni decidono dove fare scuole e strade, i medici quali cure funzionano meglio." }
      ],
      edges: [
        ["domanda", "gruppo", "a chi chiedo?"],
        ["domanda", "dati", "le risposte sono"],
        ["dati", "tacche", "si contano con"],
        ["dati", "tabella", "si ordinano in"],
        ["tabella", "grafici", "si disegnano"],
        ["tabella", "moda", "si trova la"],
        ["grafici", "conclusioni", "aiutano a trarre"],
        ["moda", "conclusioni", "porta alle"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la moda e i grafici",
      questions: [
        { type: "mc", q: "Nell'esempio \"Come vieni a scuola?\", qual è la moda?", options: ["in auto", "a piedi", "in bici"], answer: 1, explain: "\"A piedi\" ha la frequenza più alta: 9." },
        { type: "tf", q: "In un istogramma le colonne devono avere larghezze diverse.", answer: false, explain: "Tutte le colonne hanno la stessa larghezza: cambia solo l'altezza." },
        { type: "num", q: "Con la legenda \"1 🍎 = 2 bambini\", quanti bambini indicano 4 mele?", answer: 8, explain: "4 × 2 = 8 bambini." }
      ]
    }
  ],
  glossary: [
    { t: "Indagine statistica", d: "Ricerca per scoprire informazioni su un gruppo raccogliendo dati." },
    { t: "Dati", d: "Le risposte raccolte durante l'indagine." },
    { t: "Frequenza", d: "Quante volte compare una risposta." },
    { t: "Tabella", d: "Schema in righe e colonne dove si ordinano i dati." },
    { t: "Istogramma", d: "Grafico a colonne: ogni colonna è alta quanto la frequenza." },
    { t: "Ideogramma", d: "Grafico fatto di simboli; ogni simbolo vale quanto dice la legenda." },
    { t: "Legenda", d: "Spiegazione di quanto vale ogni simbolo o colore di un grafico." },
    { t: "Moda", d: "La risposta con la frequenza più alta." },
    { t: "Censimento", d: "Indagine che conta tutta la popolazione di un Paese." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine le tappe di un'indagine.", items: ["Scegliere la domanda", "Raccogliere i dati", "Ordinare i dati in tabella", "Disegnare il grafico", "Trarre le conclusioni"], explain: "Prima si decide cosa chiedere, poi si raccolgono, contano, disegnano e interpretano i dati." },
      { type: "text", q: "Come si chiama la risposta che compare più volte?", answer: ["moda", "la moda"], explain: "La risposta più frequente è la moda." },
      { type: "mc", q: "Un grafico fatto di disegnini si chiama…", options: ["istogramma", "ideogramma", "tabella"], answer: 1, explain: "L'ideogramma usa simboli." },
      { type: "num", q: "Quanti voti indica questo mazzetto di tacche: 卌 卌 || ?", answer: 12, explain: "Due mazzetti da 5 = 10, più 2 stanghette = 12." },
      { type: "tf", q: "Il totale delle frequenze deve essere uguale al numero delle persone intervistate.", answer: true, explain: "Ogni persona dà una risposta: sommandole si ritrovano tutte." },
      { type: "num", q: "Legenda: 1 ⭐ = 5 bambini. Quanti bambini indicano 3 stelle?", answer: 15, explain: "3 × 5 = 15." },
      { type: "mc", q: "Quale domanda dà una risposta con un numero?", options: ["Qual è il tuo colore preferito?", "Quanti animali hai a casa?", "Qual è il tuo sport preferito?"], answer: 1, explain: "\"Quanti\" chiede un numero." },
      { type: "num", q: "Pizza 7, pasta 6, risotto 2: quanti bambini hanno risposto in tutto?", answer: 15, explain: "7 + 6 + 2 = 15." },
      { type: "num", q: "Pizza 7, pasta 6, risotto 2: quanti bambini in più preferiscono la pizza al risotto?", answer: 5, explain: "7 − 2 = 5." },
      { type: "tf", q: "Nell'ideogramma ogni simbolo vale sempre 1.", answer: false, explain: "Dipende dalla legenda: può valere 1, 2, 5, 10…" },
      { type: "mc", q: "Chi inventò il grafico a barre?", options: ["William Playfair", "Leonardo da Vinci", "Galileo Galilei"], answer: 0, explain: "Lo scozzese William Playfair, nel 1786." }
    ]
  }
});

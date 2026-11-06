TOPIC('it', {
  id: "p3-sto-linea-tempo",
  title: "La linea del tempo",
  intro: `Gli storici mettono i fatti in ordine su una <b>linea del tempo</b>, come perle su un filo. Impariamo che cosa vogliono dire <b>a.C.</b> e <b>d.C.</b>, come si contano i <b>decenni</b>, i <b>secoli</b> e i <b>millenni</b> e come si scrivono con i <b>numeri romani</b>.`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è la linea del tempo?",
      html: `<p>La <b>linea del tempo</b> è una linea dritta su cui mettiamo i fatti nell'ordine in cui sono successi. Si legge <b>da sinistra a destra</b>: a sinistra ci sono i fatti più <b>antichi</b>, a destra quelli più <b>recenti</b>.</p>
<p>Puoi fare la linea del tempo della tua vita: nascita, primi passi, primo giorno di scuola, oggi… Ogni pezzetto di linea vale lo stesso tempo (per esempio <b>1 quadretto = 1 anno</b>): questa è la <b>scala</b>.</p>
<p>Gli storici fanno lo stesso con tutta la storia dell'umanità, ma i quadretti valgono 100 o 1000 anni!</p>`
    },
    {
      type: "svg",
      title: "La linea del tempo di Giulia",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="lt" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1e293b"/></marker></defs>
<rect width="600" height="260" fill="#fff7ed"/>
<line x1="40" y1="150" x2="570" y2="150" stroke="#1e293b" stroke-width="5" marker-end="url(#lt)"/>
<g font-size="14" fill="#1e293b" text-anchor="middle">
<line x1="60" y1="140" x2="60" y2="160" stroke="#1e293b" stroke-width="3"/><text x="60" y="180">2017</text>
<line x1="125" y1="140" x2="125" y2="160" stroke="#1e293b" stroke-width="3"/><text x="125" y="180">2018</text>
<line x1="190" y1="140" x2="190" y2="160" stroke="#1e293b" stroke-width="3"/><text x="190" y="180">2019</text>
<line x1="255" y1="140" x2="255" y2="160" stroke="#1e293b" stroke-width="3"/><text x="255" y="180">2020</text>
<line x1="320" y1="140" x2="320" y2="160" stroke="#1e293b" stroke-width="3"/><text x="320" y="180">2021</text>
<line x1="385" y1="140" x2="385" y2="160" stroke="#1e293b" stroke-width="3"/><text x="385" y="180">2022</text>
<line x1="450" y1="140" x2="450" y2="160" stroke="#1e293b" stroke-width="3"/><text x="450" y="180">2023</text>
<line x1="515" y1="140" x2="515" y2="160" stroke="#1e293b" stroke-width="3"/><text x="515" y="180">2024</text>
</g>
<circle cx="60" cy="150" r="9" fill="#ec4899"/><text x="60" y="110" font-size="15" text-anchor="middle" fill="#be185d">👶 nasce</text>
<circle cx="125" cy="150" r="9" fill="#f97316"/><text x="125" y="80" font-size="15" text-anchor="middle" fill="#c2410c">🚶 primi passi</text>
<circle cx="320" cy="150" r="9" fill="#22c55e"/><text x="320" y="110" font-size="15" text-anchor="middle" fill="#15803d">🎒 scuola infanzia</text>
<circle cx="450" cy="150" r="9" fill="#3b82f6"/><text x="450" y="80" font-size="15" text-anchor="middle" fill="#1d4ed8">✏️ 1ª elementare</text>
<text x="60" y="230" font-size="15" fill="#475569">◀ passato (più antico)</text>
<text x="560" y="230" font-size="15" fill="#475569" text-anchor="end">più recente ▶</text>
</svg>`,
      caption: "Ogni tacca è un anno: la distanza tra le tacche è sempre uguale. Questa è la scala della linea."
    },
    {
      type: "text",
      title: "Passo 1: l'anno 1 e la nascita di Cristo",
      html: `<p>Per contare gli anni serve un <b>punto di partenza</b>. In Italia e in gran parte del mondo si parte dalla <b>nascita di Gesù Cristo</b>.</p>
<ul>
<li>Gli anni <b>dopo</b> la nascita di Cristo si scrivono con <b>d.C.</b> ("dopo Cristo"). Si contano in avanti: 1, 2, 3… fino a oggi. Di solito <b>d.C. non si scrive</b>: "2025" vuol dire "2025 d.C.".</li>
<li>Gli anni <b>prima</b> si scrivono con <b>a.C.</b> ("avanti Cristo"). Si contano <b>all'indietro</b>: più il numero è grande, più l'anno è <b>antico</b>!</li>
</ul>
<p>Quindi il <b>3000 a.C.</b> è più antico del <b>500 a.C.</b>, mentre il 1500 d.C. è più recente del 500 d.C.</p>
<p>Attenzione: <b>l'anno zero non esiste</b>! Dopo l'1 a.C. viene subito l'1 d.C.</p>`
    },
    {
      type: "svg",
      title: "a.C. e d.C.: lo specchio",
      svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0f9ff"/>
<rect x="20" y="105" width="280" height="30" fill="#fca5a5"/>
<rect x="300" y="105" width="280" height="30" fill="#86efac"/>
<line x1="300" y1="70" x2="300" y2="170" stroke="#7c3aed" stroke-width="6"/>
<text x="300" y="60" font-size="16" text-anchor="middle" fill="#6d28d9" font-weight="bold">✝ nascita di Cristo</text>
<g font-size="15" text-anchor="middle" fill="#1e293b">
<text x="60" y="160">3000</text><text x="125" y="160">2000</text><text x="190" y="160">1000</text><text x="255" y="160">1</text>
<text x="345" y="160">1</text><text x="410" y="160">1000</text><text x="475" y="160">2000</text>
</g>
<text x="160" y="95" font-size="18" text-anchor="middle" fill="#991b1b" font-weight="bold">◀ a.C. (si conta all'indietro)</text>
<text x="440" y="95" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">d.C. (si conta in avanti) ▶</text>
<text x="300" y="210" font-size="15" text-anchor="middle" fill="#334155">Più ti allontani dalla linea viola, più il numero cresce</text>
</svg>`,
      caption: "Gli anni a.C. sono come uno specchio degli anni d.C.: crescono andando verso sinistra."
    },
    {
      type: "widget",
      title: "Prova sulla linea dei numeri",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-5, 3] },
      caption: "Immagina che i numeri a sinistra dello zero siano gli anni a.C. e quelli a destra gli anni d.C. (ma ricorda: nel calendario lo zero non c'è!). Dal 5 a.C. al 3 d.C. passano 7 anni, non 8, proprio perché manca l'anno zero."
    },
    {
      type: "quiz",
      title: "Mini-quiz: prima o dopo?",
      questions: [
        { type: "mc", q: "Quale anno è più antico?", options: ["800 a.C.", "200 a.C.", "100 d.C."], answer: 0, explain: "Negli anni a.C. il numero più grande è il più lontano nel tempo." },
        { type: "tf", q: "L'anno 2010 è un anno d.C.", answer: true, explain: "Quando non c'è scritto niente, si intende d.C." },
        { type: "tf", q: "Dopo l'anno 1 a.C. viene l'anno 0.", answer: false, explain: "L'anno zero non esiste: dopo l'1 a.C. viene l'1 d.C." }
      ]
    },
    {
      type: "text",
      title: "Passo 2: decenni, secoli e millenni",
      html: `<p>Per parlare di tanti anni insieme usiamo delle "misure" del tempo:</p>
<table>
<tr><td>📅 <b>Anno</b></td><td>12 mesi, 365 giorni (366 se bisestile)</td></tr>
<tr><td>🔟 <b>Decennio</b></td><td>10 anni</td></tr>
<tr><td>💯 <b>Secolo</b></td><td>100 anni</td></tr>
<tr><td>🏛️ <b>Millennio</b></td><td>1000 anni</td></tr>
<tr><td>🌍 <b>Era</b></td><td>un periodo lunghissimo (per esempio l'era dei dinosauri)</td></tr>
</table>
<p>Un millennio = 10 secoli = 100 decenni = 1000 anni.</p>`
    },
    {
      type: "text",
      title: "Passo 3: in che secolo siamo?",
      html: `<p>Il <b>primo secolo</b> va dall'anno <b>1</b> all'anno <b>100</b>. Il secondo dall'anno 101 al 200, e così via. Per questo l'anno 1492 sta nel <b>XV secolo</b> (quindicesimo), non nel quattordicesimo!</p>
<p><b>Il trucco:</b> togli le ultime due cifre e aggiungi 1.</p>
<ul>
<li>1492 → 14 + 1 = <b>15° secolo</b> (XV)</li>
<li>2025 → 20 + 1 = <b>21° secolo</b> (XXI)</li>
<li>476 → 4 + 1 = <b>5° secolo</b> (V)</li>
</ul>
<p><b>Attenzione:</b> se l'anno finisce con <b>00</b>, non aggiungere niente: il 1900 è l'ultimo anno del <b>19° secolo</b> (XIX).</p>
<p>In italiano i secoli dal 1200 in poi hanno anche un soprannome: il XV secolo è il <b>Quattrocento</b> (gli anni 14..), il XX secolo è il <b>Novecento</b> (gli anni 19..).</p>`
    },
    {
      type: "text",
      title: "I secoli si scrivono con i numeri romani",
      html: `<p>Per i secoli si usano i <b>numeri romani</b>, inventati dagli antichi Romani:</p>
<table>
<tr><td><b>I</b> = 1</td><td><b>V</b> = 5</td><td><b>X</b> = 10</td><td><b>L</b> = 50</td><td><b>C</b> = 100</td><td><b>D</b> = 500</td><td><b>M</b> = 1000</td></tr>
</table>
<ul>
<li>Un simbolo <b>dopo</b> uno più grande si <b>aggiunge</b>: VI = 5 + 1 = 6; XV = 10 + 5 = 15.</li>
<li>Un simbolo <b>prima</b> di uno più grande si <b>toglie</b>: IV = 5 − 1 = 4; IX = 10 − 1 = 9; XIX = 10 + 9 = 19.</li>
<li>Uno stesso simbolo si ripete al massimo <b>3 volte</b>: III = 3, XXX = 30.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Abbina il secolo al numero romano",
      widget: "match",
      options: {
        pairs: [
          ["5° secolo", "V"],
          ["4° secolo", "IV"],
          ["9° secolo", "IX"],
          ["15° secolo", "XV"],
          ["19° secolo", "XIX"],
          ["21° secolo", "XXI"]
        ]
      },
      caption: "Ricorda: un simbolo piccolo prima di uno grande si toglie."
    },
    {
      type: "widget",
      title: "La grande linea del tempo della storia",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: -3200, label: "Nasce la scrittura (fine della Preistoria)", icon: "✍️" },
          { year: -2560, label: "Piramide di Cheope", icon: "🔺" },
          { year: -776, label: "Prime Olimpiadi in Grecia", icon: "🏅" },
          { year: -753, label: "Fondazione di Roma (secondo la leggenda)", icon: "🐺" },
          { year: 1, label: "Inizio dell'era cristiana (anno 1 d.C.)", icon: "✝️" },
          { year: 476, label: "Fine dell'Impero romano d'Occidente", icon: "🏛️" },
          { year: 1492, label: "Colombo arriva in America", icon: "⛵" },
          { year: 1861, label: "Nasce il Regno d'Italia", icon: "🇮🇹" },
          { year: 1969, label: "Primo uomo sulla Luna", icon: "🌕" }
        ]
      },
      caption: "Scorri la linea: la Preistoria finisce quando nasce la scrittura, circa 5200 anni fa."
    },
    {
      type: "example",
      title: "Esempio pratico: quanti anni sono passati?",
      html: `<p><b>Tra due anni d.C.:</b> fai la <b>sottrazione</b>. Colombo arrivò in America nel 1492. Fino al 2025 sono passati 2025 − 1492 = <b>533 anni</b>.</p>
<p><b>Tra due anni a.C.:</b> fai ancora la <b>sottrazione</b> (il più grande meno il più piccolo). Dalla piramide di Cheope (2560 a.C.) alla fondazione di Roma (753 a.C.): 2560 − 753 = <b>1807 anni</b>.</p>
<p><b>Tra un anno a.C. e uno d.C.:</b> fai l'<b>addizione</b> e togli 1 (perché manca l'anno zero). Dalla fondazione di Roma (753 a.C.) alla fine dell'Impero d'Occidente (476 d.C.): 753 + 476 − 1 = <b>1228 anni</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le date della tua famiglia",
      html: `<p>Chiedi ai tuoi nonni in che anno sono nati. Se il nonno è nato nel <b>1955</b>:</p>
<ul>
<li>è nato nel <b>XX secolo</b> (19 + 1 = 20), cioè nel <b>Novecento</b>;</li>
<li>negli <b>anni Cinquanta</b> (il decennio 1950–1959);</li>
<li>nel <b>II millennio</b> d.C. (gli anni dal 1001 al 2000).</li>
</ul>
<p>Tu invece sei nato nel <b>XXI secolo</b> e nel <b>III millennio</b>! Prova a mettere tutta la famiglia sulla stessa linea del tempo.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… chi ha inventato \"a.C.\" e \"d.C.\" sbagliò i conti?",
      html: `<p>Il modo di contare gli anni dalla nascita di Cristo fu proposto nel <b>525</b> da un monaco, <b>Dionigi il Piccolo</b>. Però fece un piccolo errore di calcolo: oggi gli storici pensano che Gesù sia nato qualche anno prima, tra il <b>7 e il 4 a.C.</b>! Ormai però il sistema era usato da tutti e nessuno l'ha più cambiato.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il nuovo millennio è iniziato nel 2001?",
      html: `<p>Il 31 dicembre 1999 tutto il mondo festeggiò l'arrivo del 2000 come inizio del nuovo millennio. Ma i matematici protestarono: siccome non c'è l'anno zero, il primo millennio va dall'1 al 1000, il secondo dal 1001 al 2000… e il <b>terzo millennio</b> comincia il <b>1° gennaio 2001</b>!</p>`
    },
    {
      type: "3d",
      title: "La mappa 3D spazio-tempo: la storia nel mondo",
      scene: "spacetime",
      caption: "La base è la mappa, l'altezza è il tempo: più un evento è in alto, più è recente. Usa il cursore del tempo per vedere la storia che \"cresce\". Tocca un evento: le frecce collegano le cause agli effetti.",
      options: {
        lat: [-10, 62],
        lon: [-90, 125],
        years: [-3500, 2000],
        places: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 30.0, lon: 31.2, label: "Egitto" },
          { lat: 32.5, lon: 44.4, label: "Mesopotamia" },
          { lat: 37.9, lon: 23.7, label: "Grecia" },
          { lat: 35.0, lon: 110.0, label: "Cina" },
          { lat: 25.0, lon: -77.0, label: "Americhe" }
        ],
        events: [
          { id: "scrittura", lat: 31.3, lon: 45.6, year: -3200, label: "Nasce la scrittura", html: "In <b>Mesopotamia</b>, nella città di Uruk, si cominciano a incidere segni su tavolette di argilla per contare il grano e il bestiame. Con la scrittura finisce la <b>Preistoria</b> e comincia la <b>Storia</b>." },
          { id: "piramidi", lat: 29.98, lon: 31.13, year: -2560, label: "Piramide di Cheope", html: "In Egitto viene costruita la Grande Piramide. Gli Egizi avevano già un calendario di <b>365 giorni</b> per prevedere le piene del Nilo.", causes: ["scrittura"] },
          { id: "olimpiadi", lat: 37.64, lon: 21.63, year: -776, label: "Prime Olimpiadi", html: "In Grecia, a Olimpia, si svolgono i primi giochi olimpici registrati. I Greci contavano gli anni a gruppi di 4, le <b>Olimpiadi</b>: dire \"il 2° anno della 10ª Olimpiade\" era come dire una data.", causes: ["scrittura"] },
          { id: "roma", lat: 41.89, lon: 12.49, year: -753, label: "Fondazione di Roma", html: "Secondo la leggenda Romolo fonda Roma il <b>21 aprile 753 a.C.</b>. I Romani contavano gli anni \"<b>ab Urbe condita</b>\", cioè dalla fondazione della città.", causes: ["olimpiadi"] },
          { id: "giuliano", lat: 41.9, lon: 12.48, year: -46, label: "Calendario di Giulio Cesare", html: "<b>Giulio Cesare</b> riforma il calendario romano: anno di 365 giorni con un giorno in più ogni 4 anni (l'anno <b>bisestile</b>). Si chiama <b>calendario giuliano</b>.", causes: ["roma", "piramidi"] },
          { id: "dionigi", lat: 41.91, lon: 12.46, year: 525, label: "Dionigi conta da Cristo", html: "A Roma il monaco <b>Dionigi il Piccolo</b> propone di contare gli anni dalla nascita di Gesù (<i>Anno Domini</i>). Il sistema si diffonderà lentamente in Europa nei secoli successivi.", causes: ["giuliano"] },
          { id: "egira", lat: 24.47, lon: 39.61, year: 622, label: "L'Egira", html: "Il profeta <b>Maometto</b> si trasferisce dalla Mecca a Medina: è l'<b>Egira</b>. Da questo anno i musulmani contano gli anni del calendario islamico, che segue la Luna." },
          { id: "colombo", lat: 24.0, lon: -74.5, year: 1492, label: "Colombo in America", html: "Cristoforo Colombo arriva in America: per molti storici qui finisce il <b>Medioevo</b> e inizia l'<b>Età moderna</b>." },
          { id: "gregoriano", lat: 41.9, lon: 12.45, year: 1582, label: "Calendario gregoriano", html: "Il calendario giuliano era un po' troppo lungo e si era \"spostato\" di 10 giorni. Papa <b>Gregorio XIII</b> lo corregge: dopo il 4 ottobre 1582 viene subito il <b>15 ottobre</b>! È il calendario che usiamo oggi in quasi tutto il mondo.", causes: ["giuliano", "dionigi"] },
          { id: "luna", lat: 28.6, lon: -80.6, year: 1969, label: "Primo uomo sulla Luna", html: "Il 20 luglio 1969 la missione <b>Apollo 11</b>, partita dalla Florida, porta Neil Armstrong e Buzz Aldrin sulla Luna. Una data che tutti nel mondo scrivono allo stesso modo grazie al calendario gregoriano.", causes: ["gregoriano"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Anno 525: da dove cominciamo a contare?",
      html: `<p>Sei un monaco esperto di calcoli e lavori a <b>Roma</b>. Il papa ti chiede di preparare le tabelle con le date della Pasqua per i prossimi anni.</p>
<p>Ma c'è un problema: ognuno conta gli anni a modo suo. Le tabelle che ricevi contano dal regno dell'imperatore <b>Diocleziano</b>, che aveva perseguitato i cristiani. Altri contano dalla <b>fondazione di Roma</b>, i Greci dalle <b>Olimpiadi</b>…</p>`,
      question: "Quale punto di partenza scegli?",
      options: [
        { label: "Continuo a contare dal regno di Diocleziano: lo usano già tutti in queste tabelle.", outcome: "Sarebbe la scelta più comoda, ma per i cristiani era brutto ricordare ogni anno un persecutore." },
        { label: "Conto dalla fondazione di Roma (ab Urbe condita).", outcome: "Era una data famosa, ma legata solo a una città e a una leggenda; e l'Impero romano d'Occidente non esisteva più dal 476." },
        { label: "Conto dalla nascita di Gesù Cristo.", outcome: "Un punto di partenza importante per tutti i cristiani d'Europa, senza ricordare un persecutore. Ma bisognava calcolare quando fosse nato Gesù, e non era facile." }
      ],
      answer: 2,
      explain: "<b>Dionigi il Piccolo</b> scelse di contare gli anni \"<i>ab incarnatione Domini</i>\", dalla nascita di Cristo. Il suo sistema si diffuse piano piano: lo usò il monaco inglese <b>Beda</b> nel 731 nella sua storia dell'Inghilterra e poi l'impero di Carlo Magno. Gli anni \"avanti Cristo\" invece furono usati molto più tardi. Dionigi però sbagliò di qualche anno, e in Europa lo <b>zero</b> non si conosceva ancora (arrivò dall'India attraverso gli Arabi e fu diffuso da Fibonacci nel 1202): per questo l'anno zero non esiste."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la linea del tempo",
      intro: "Il tempo non si vede e non si tocca: ecco altri modi per \"vederlo\".",
      tabs: [
        {
          label: "🌏 Calendari di altri Paesi",
          html: `<p>Non tutto il mondo ha contato gli anni come noi! Ecco alcuni esempi:</p>
<ul>
<li>🕌 <b>Calendario islamico</b>: conta dall'<b>Egira</b> (622 d.C.) e segue la Luna, quindi l'anno è più corto (354 o 355 giorni).</li>
<li>✡️ <b>Calendario ebraico</b>: conta dalla creazione del mondo secondo la tradizione, fissata al <b>3761 a.C.</b>: per questo il suo anno ha un numero molto più alto del nostro.</li>
<li>🇯🇵 <b>Giappone</b>: oltre al nostro calendario usa le <b>ere</b> degli imperatori. Dal 2019 è l'era <b>Reiwa</b>: il 2025 è \"Reiwa 7\".</li>
<li>🇹🇭 <b>Thailandia</b>: conta dalla morte del Buddha e aggiunge <b>543</b> ai nostri anni: il 2025 è il 2568.</li>
<li>🇨🇳 <b>Cina</b>: il Capodanno cinese cambia data ogni anno e a ogni anno è legato un animale (topo, bue, tigre…).</li>
</ul>`
        },
        {
          label: "📏 Il metro del tempo",
          html: `<p>Prendi un metro da sarta lungo <b>150 cm</b> e fai finta che ogni centimetro valga <b>100 anni</b> (un secolo):</p>
<ul>
<li>tutto il metro = 15.000 anni, cioè dal Paleolitico a oggi;</li>
<li>la scrittura nasce a circa <b>52 cm</b> dalla fine;</li>
<li>Roma è fondata a circa <b>28 cm</b> dalla fine;</li>
<li>Colombo è a circa <b>5 cm</b> dalla fine;</li>
<li>tutta la tua vita (8 anni) sta in <b>meno di un millimetro</b>!</li>
</ul>
<p>Per toccare con mano quanto è lunga la storia, si può fare la stessa cosa con un <b>rotolo di carta igienica</b>, uno strappo per ogni secolo.</p>`
        },
        {
          label: "🧊 Secoli come cubetti",
          html: `<p>Costruisci gli anni con i cubetti: una <b>lastra</b> da 100 cubetti è un <b>secolo</b>, una <b>bacchetta</b> da 10 è un <b>decennio</b>, un <b>cubetto</b> è un anno. Muovi il cursore e prova con 476 o 1492: quante lastre (secoli completi) ci sono? Il secolo in cui cade l'anno è quello <b>dopo</b>: con 14 lastre e qualcosa in più, sei nel 15° secolo!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 476 }
        },
        {
          label: "🎵 La filastrocca",
          html: `<p>Una filastrocca per ricordare le regole:</p>
<p style="font-size:1.15em"><i>Avanti Cristo conto all'indietro,<br>più il numero è grande, più è lontano il metro.<br>Dopo Cristo conto in avanti,<br>e tutti gli anni crescono tanti.<br>Per il secolo il trucco è da re:<br>togli due cifre e aggiungi uno, olè!</i></p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché misuriamo il tempo così?",
      nodes: [
        { id: "cielo", label: "☀️🌙 Il cielo", x: 50, y: 6, color: "#f59e0b", html: "Giorno, mese e anno vengono dal movimento della Terra, della Luna e del Sole.", why: "Il giorno è una rotazione della Terra; il mese viene dalle fasi della Luna (circa 29 giorni e mezzo); l'anno è un giro completo della Terra intorno al Sole: circa <b>365 giorni e 6 ore</b>." },
        { id: "anno", label: "📅 L'anno", x: 20, y: 25, color: "#ef4444", html: "365 giorni, 366 negli anni bisestili.", why: "Quelle 6 ore in più ogni anno, dopo 4 anni, fanno un giorno intero: ecco perché ogni 4 anni c'è il 29 febbraio. L'idea fu messa in pratica da Giulio Cesare nel 46 a.C. con l'aiuto dell'astronomo Sosigene di Alessandria." },
        { id: "decimale", label: "🔟 Contare a 10", x: 80, y: 25, color: "#3b82f6", html: "Decenni, secoli e millenni sono gruppi di 10, 100 e 1000 anni.", why: "Contiamo a gruppi di dieci perché abbiamo 10 dita! Il nostro sistema di numeri, con le cifre da 0 a 9, è nato in India ed è arrivato in Europa grazie agli Arabi." },
        { id: "zero", label: "Partenza: anno 1", x: 50, y: 42, color: "#7c3aed", html: "Gli anni si contano dalla nascita di Cristo: a.C. e d.C.", why: "Lo propose Dionigi il Piccolo nel 525. Scelse l'anno 1, perché in Europa lo zero non si usava ancora: per questo dal 1 a.C. si passa al 1 d.C." },
        { id: "ac", label: "a.C.", x: 20, y: 62, color: "#dc2626", html: "Anni prima di Cristo, contati all'indietro.", why: "Più ci si allontana dall'anno 1, più il numero cresce, come le temperature sotto zero sul termometro: −10 °C è più freddo di −2 °C." },
        { id: "dc", label: "d.C.", x: 80, y: 62, color: "#16a34a", html: "Anni dopo Cristo, contati in avanti.", why: "Sono gli anni che usiamo ogni giorno; per questo \"d.C.\" di solito non si scrive." },
        { id: "secolo", label: "Secoli in numeri romani", x: 50, y: 78, color: "#0ea5e9", html: "Il 1° secolo va dall'1 al 100; il XXI dal 2001 al 2100.", why: "Si parte dall'anno 1 e non da 0, quindi ogni secolo finisce con l'anno \"tondo\" (100, 200… 2000). I numeri romani si usano per tradizione, perché il latino è stato la lingua della cultura in Europa per secoli." },
        { id: "periodi", label: "Preistoria e Storia", x: 50, y: 95, color: "#92400e", html: "I grandi periodi: Preistoria, Età antica, Medioevo, Età moderna, Età contemporanea.", why: "Gli storici hanno scelto alcune date importanti come \"confini\": la scrittura (circa 3200 a.C.), la fine dell'Impero romano d'Occidente (476), la scoperta dell'America (1492), la Rivoluzione francese (1789)." }
      ],
      edges: [
        ["cielo", "anno", "dà la misura dell'"],
        ["cielo", "decimale", "misurato a gruppi"],
        ["anno", "zero", "contati da un punto di"],
        ["decimale", "secolo", "gruppi di 100"],
        ["zero", "ac", "prima"],
        ["zero", "dc", "dopo"],
        ["dc", "secolo", "si raggruppano in"],
        ["secolo", "periodi", "formano i grandi"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>La <b>linea del tempo</b> si legge da sinistra (più antico) a destra (più recente).</li>
<li><b>a.C.</b> = avanti Cristo, si conta all'indietro; <b>d.C.</b> = dopo Cristo, si conta in avanti. L'anno zero non esiste.</li>
<li><b>Decennio</b> = 10 anni; <b>secolo</b> = 100 anni; <b>millennio</b> = 1000 anni.</li>
<li>Per trovare il secolo: togli le ultime due cifre e aggiungi 1 (se l'anno non finisce con 00).</li>
<li>I secoli si scrivono in <b>numeri romani</b>: XV, XX, XXI…</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: secoli e numeri romani",
      questions: [
        { type: "mc", q: "In che secolo è l'anno 1861?", options: ["XVIII", "XIX", "XX"], answer: 1, explain: "18 + 1 = 19, cioè XIX secolo." },
        { type: "num", q: "Quanti anni ci sono in 3 secoli?", answer: 300, tol: 0, unit: "anni", explain: "1 secolo = 100 anni, quindi 3 secoli = 300 anni." },
        { type: "text", q: "Scrivi in numeri romani il numero 9.", answer: ["ix"], explain: "IX = 10 − 1 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Linea del tempo", d: "Linea su cui si mettono i fatti in ordine, dal più antico al più recente." },
    { t: "a.C.", d: "Avanti Cristo: anni prima della nascita di Cristo, contati all'indietro." },
    { t: "d.C.", d: "Dopo Cristo: anni dopo la nascita di Cristo, contati in avanti." },
    { t: "Decennio", d: "Periodo di 10 anni." },
    { t: "Secolo", d: "Periodo di 100 anni." },
    { t: "Millennio", d: "Periodo di 1000 anni." },
    { t: "Anno bisestile", d: "Anno di 366 giorni, con il 29 febbraio; arriva ogni 4 anni (con qualche eccezione)." },
    { t: "Numeri romani", d: "Sistema di numerazione degli antichi Romani con le lettere I, V, X, L, C, D, M." },
    { t: "Preistoria", d: "Il periodo della vita umana prima dell'invenzione della scrittura." },
    { t: "Calendario", d: "Sistema per dividere e contare il tempo in giorni, mesi e anni." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Come si legge la linea del tempo?", options: ["Da destra a sinistra", "Da sinistra (più antico) a destra (più recente)", "Dall'alto in basso"], answer: 1, explain: "A sinistra ci sono i fatti più antichi, a destra quelli più recenti." },
      { type: "mc", q: "Quale anno è più antico?", options: ["1500 a.C.", "300 a.C.", "1500 d.C."], answer: 0, explain: "Negli anni a.C. il numero più grande è il più antico." },
      { type: "num", q: "Quanti anni ci sono in un millennio?", answer: 1000, tol: 0, unit: "anni", explain: "Un millennio = 1000 anni = 10 secoli." },
      { type: "mc", q: "In che secolo è avvenuta la scoperta dell'America (1492)?", options: ["XIV secolo", "XV secolo", "XVI secolo"], answer: 1, explain: "14 + 1 = 15: XV secolo." },
      { type: "tf", q: "Il 1900 appartiene al XIX secolo.", answer: true, explain: "Gli anni che finiscono con 00 sono l'ultimo anno del secolo: il XIX va dal 1801 al 1900." },
      { type: "text", q: "Scrivi in numeri romani il secolo in cui viviamo (21°).", answer: ["xxi"], explain: "XXI = 10 + 10 + 1 = 21." },
      { type: "num", q: "Colombo arrivò in America nel 1492. Quanti anni dopo, nel 1969, l'uomo arrivò sulla Luna?", answer: 477, tol: 0, unit: "anni", explain: "1969 − 1492 = 477 anni." },
      { type: "tf", q: "L'anno zero esiste.", answer: false, explain: "Dopo l'1 a.C. viene subito l'1 d.C." },
      { type: "order", q: "Metti in ordine dal più antico al più recente.", items: ["Nascita della scrittura (3200 a.C.)", "Fondazione di Roma (753 a.C.)", "Fine dell'Impero romano d'Occidente (476)", "Arrivo di Colombo in America (1492)"], explain: "Prima gli anni a.C. (dal più grande al più piccolo), poi gli anni d.C. (dal più piccolo al più grande)." },
      { type: "mc", q: "Quanti decenni ci sono in un secolo?", options: ["10", "100", "1000"], answer: 0, explain: "100 anni : 10 anni = 10 decenni." },
      { type: "mc", q: "Che cosa vuol dire \"d.C.\"?", options: ["Data del Calendario", "Dopo Cristo", "Decennio Corto"], answer: 1, explain: "d.C. significa \"dopo Cristo\"." },
      { type: "mc", q: "Quale numero romano vale 4?", options: ["IIII", "VI", "IV"], answer: 2, explain: "IV = 5 − 1 = 4 (la I prima della V si toglie)." }
    ]
  }
});

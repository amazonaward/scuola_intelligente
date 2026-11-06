TOPIC('it', {
  id: "p5-ita-testo-argomentativo",
  title: "Il testo argomentativo",
  intro: "Vuoi convincere i tuoi genitori ad adottare un cane? O la classe a scegliere una gita? Allora ti serve un <b>testo argomentativo</b>: un testo che sostiene un'opinione (la <b>tesi</b>) con <b>argomenti</b> e <b>prove</b>, risponde alle obiezioni e arriva a una <b>conclusione</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "A che cosa serve",
      html: `<p>Il <b>testo argomentativo</b> serve a <b>esprimere un'opinione</b> su un tema discusso e a <b>convincere</b> chi legge che è giusta, usando <b>ragionamenti</b> e <b>prove</b>, non urla o capricci!</p>
<p>Lo trovi in: articoli di opinione sui giornali, lettere al sindaco, discorsi in assemblea, recensioni, pubblicità (che però spesso usa più le emozioni che le prove), dibattiti in classe.</p>
<p>Parte sempre da un <b>problema</b> su cui le persone la pensano in modo diverso: «È giusto dare i compiti per le vacanze?», «Meglio vivere in città o in campagna?».</p>`
    },
    {
      type: "text",
      title: "La struttura: 5 mattoni",
      html: `<ol>
<li><b>Introduzione / problema</b>: presenti l'argomento e la domanda. «Da anni si discute se…»</li>
<li><b>Tesi</b>: la <b>tua opinione</b>, detta in modo chiaro. «Secondo me…», «Sono convinto che…»</li>
<li><b>Argomenti a favore</b>: le <b>ragioni</b> della tesi, ognuna sostenuta da <b>prove</b> (dati, esempi, esperienze, parole di esperti).</li>
<li><b>Antitesi e confutazione</b>: presenti l'opinione <b>contraria</b> («Qualcuno pensa che…») e spieghi perché non è convincente («Tuttavia…»). Così dimostri di aver pensato a tutto!</li>
<li><b>Conclusione</b>: ribadisci la tesi in breve, magari con una proposta. «Per questi motivi…», «In conclusione…»</li>
</ol>`
    },
    {
      type: "svg",
      title: "Il ponte della tesi",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#eff6ff"/>
<rect x="60" y="40" width="520" height="56" rx="10" fill="#2563eb"/>
<text x="320" y="65" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">TESI</text>
<text x="320" y="87" font-size="15" text-anchor="middle" fill="#ffffff">«La scuola dovrebbe avere un orto»</text>
<rect x="80" y="96" width="110" height="140" fill="#16a34a"/>
<rect x="265" y="96" width="110" height="140" fill="#16a34a"/>
<rect x="450" y="96" width="110" height="140" fill="#16a34a"/>
<text x="135" y="130" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Argomento 1</text>
<text x="135" y="160" font-size="14" text-anchor="middle" fill="#ffffff">si imparano</text>
<text x="135" y="178" font-size="14" text-anchor="middle" fill="#ffffff">le scienze</text>
<text x="320" y="130" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Argomento 2</text>
<text x="320" y="160" font-size="14" text-anchor="middle" fill="#ffffff">si mangia</text>
<text x="320" y="178" font-size="14" text-anchor="middle" fill="#ffffff">più verdura</text>
<text x="505" y="130" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Argomento 3</text>
<text x="505" y="160" font-size="14" text-anchor="middle" fill="#ffffff">si lavora</text>
<text x="505" y="178" font-size="14" text-anchor="middle" fill="#ffffff">in squadra</text>
<rect x="40" y="236" width="560" height="20" fill="#92400e"/>
<text x="320" y="282" font-size="15" text-anchor="middle" fill="#1f2937">le PROVE (dati, esempi, esperti) sono le fondamenta</text>
<polygon points="600,180 620,200 600,220" fill="#dc2626"/>
<text x="610" y="170" font-size="13" text-anchor="end" fill="#b91c1c">antitesi ⚡</text>
</svg>`,
      caption: "La tesi sta in piedi solo se ha argomenti robusti (pilastri) appoggiati su prove (fondamenta). L'antitesi è il vento che prova a buttarla giù: la confutazione la ferma."
    },
    {
      type: "text",
      title: "Fatti e opinioni",
      html: `<p>Per argomentare bene bisogna distinguere:</p>
<ul>
<li><b>Fatto</b>: qualcosa di <b>vero e verificabile</b> da tutti. «L'Italia ha 20 regioni.» «L'acqua bolle a 100 °C al livello del mare.»</li>
<li><b>Opinione</b>: ciò che <b>una persona pensa</b>; si può essere d'accordo o no. «La pizza è il cibo più buono del mondo.»</li>
</ul>
<p>La <b>tesi</b> è un'opinione; gli <b>argomenti più forti</b> sono quelli che si appoggiano su <b>fatti</b>.</p>
<p><b>Tipi di prova</b>: dati e numeri (statistiche), esempi concreti, esperienza personale, citazione di un esperto (argomento d'autorità), confronto con altri casi.</p>`
    },
    {
      type: "widget",
      title: "Gioco: fatto o opinione?",
      widget: "classify",
      options: {
        groups: ["Fatto", "Opinione"],
        items: [["Roma è la capitale d'Italia", 0], ["Il calcio è lo sport più bello", 1], ["Un anno ha 12 mesi", 0], ["L'estate è la stagione migliore", 1], ["Le api producono il miele", 0], ["I compiti sono noiosi", 1], ["Il Po è il fiume più lungo d'Italia", 0], ["I gatti sono più simpatici dei cani", 1]]
      },
      caption: "Un fatto si può verificare; un'opinione dipende da chi parla."
    },
    {
      type: "text",
      title: "I connettivi: la colla del ragionamento",
      html: `<table>
<tr><th>Per…</th><th>Connettivi</th></tr>
<tr><td>esprimere la tesi</td><td>secondo me, a mio parere, sono convinto che, penso che</td></tr>
<tr><td>aggiungere argomenti</td><td>innanzitutto, inoltre, in secondo luogo, infine</td></tr>
<tr><td>dare una prova</td><td>infatti, per esempio, come dimostra, secondo i dati</td></tr>
<tr><td>presentare l'antitesi</td><td>qualcuno sostiene che, si potrebbe obiettare che</td></tr>
<tr><td>confutare</td><td>tuttavia, però, eppure, al contrario</td></tr>
<tr><td>concludere</td><td>quindi, perciò, in conclusione, per questi motivi</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Esempio: «Ci vuole più verde nel cortile della scuola»",
      html: `<p><i>(Problema)</i> Il nostro cortile è quasi tutto di cemento e d'estate diventa caldissimo.</p>
<p><i>(Tesi)</i> <b>Secondo me</b> bisognerebbe piantare alberi e creare un'aiuola.</p>
<p><i>(Argomento 1)</i> <b>Innanzitutto</b> gli alberi fanno ombra: <b>infatti</b> sotto una chioma la temperatura percepita è molto più bassa che al sole, come abbiamo misurato con il termometro della classe.</p>
<p><i>(Argomento 2)</i> <b>Inoltre</b> potremmo osservare insetti e piante durante le lezioni di scienze.</p>
<p><i>(Antitesi)</i> <b>Qualcuno potrebbe obiettare che</b> costa troppo. <i>(Confutazione)</i> <b>Tuttavia</b> molti vivai e associazioni regalano piantine alle scuole, e i genitori potrebbero aiutare a piantarle.</p>
<p><i>(Conclusione)</i> <b>Per questi motivi</b> propongo di scrivere al Dirigente scolastico e al Comune.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parti del testo",
      questions: [
        { type: "mc", q: "La tesi è…", options: ["l'opinione che si vuole dimostrare", "l'opinione contraria", "la frase finale con i saluti"], answer: 0, explain: "La tesi è l'idea principale che l'autore sostiene." },
        { type: "mc", q: "«Tuttavia» si usa soprattutto per…", options: ["aggiungere un esempio", "confutare un'obiezione", "concludere"], answer: 1, explain: "Tuttavia introduce un'idea contraria a quella appena detta: serve a confutare." },
        { type: "tf", q: "«L'Italia ha 20 regioni» è un'opinione.", answer: false, explain: "È un fatto verificabile." }
      ]
    },
    {
      type: "example",
      title: "Esempio: la lettera al sindaco",
      html: `<p>Gentile Sindaco,</p>
<p>siamo gli alunni della classe 5ª B e <b>vorremmo chiederle</b> di realizzare una pista ciclabile tra il quartiere e la scuola.</p>
<p><b>In primo luogo</b>, molti di noi abitano a meno di 2 km: in bici impiegheremmo pochi minuti. <b>In secondo luogo</b>, ci sarebbero meno auto davanti alla scuola all'ingresso, e quindi meno traffico e smog. <b>Infine</b>, andare in bici è un'attività fisica che fa bene alla salute.</p>
<p>Sappiamo che <b>alcuni temono</b> per la sicurezza. <b>Proprio per questo</b> chiediamo una pista separata dalla strada.</p>
<p><b>Per questi motivi</b> speriamo che accoglierà la nostra proposta. Cordiali saluti.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Aristotele e i tre ingredienti",
      html: `<p>Il filosofo greco <b>Aristotele</b> (IV secolo a.C.), nel libro <i>Retorica</i>, spiegò che per convincere servono tre ingredienti: <b>ethos</b> (essere credibili, persone serie e oneste), <b>pathos</b> (toccare le emozioni di chi ascolta) e <b>logos</b> (dare ragionamenti e prove). Dopo più di 2300 anni, gli avvocati, i politici e i pubblicitari usano ancora questa ricetta!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il debate a scuola",
      html: `<p>Nei Paesi anglosassoni il <b>debate</b> (dibattito regolato) è un'attività scolastica da oltre un secolo: due squadre discutono una tesi, una <b>a favore</b> e una <b>contro</b>, con tempi precisi e una giuria. Spesso la squadra a cui tocca difendere una posizione viene <b>sorteggiata</b>: così si impara a capire anche le ragioni degli altri! Oggi il debate si pratica anche in molte scuole italiane.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Struttura: <b>problema → tesi → argomenti con prove → antitesi e confutazione → conclusione</b>.</li>
<li>Distingui sempre <b>fatti</b> e <b>opinioni</b>: gli argomenti migliori si basano su fatti.</li>
<li>Usa i <b>connettivi</b> (innanzitutto, inoltre, infatti, tuttavia, quindi).</li>
<li>Rispetta chi la pensa diversamente: si attaccano le <b>idee</b>, mai le <b>persone</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per costruire un'argomentazione",
      intro: "Se lo schema classico ti sembra difficile, prova con l'hamburger americano, con il processo in tribunale, con la bilancia o con lo schema \"PEE\" inglese.",
      tabs: [
        {
          label: "🍔 Il metodo OREO (USA)",
          html: `<p>Nelle scuole americane si insegna il metodo <b>OREO</b>, come i biscotti:</p>
<ul>
<li><b>O</b> – <b>Opinion</b>: dico la mia opinione (tesi).</li>
<li><b>R</b> – <b>Reason</b>: do una ragione (argomento).</li>
<li><b>E</b> – <b>Example</b>: porto un esempio o una prova.</li>
<li><b>O</b> – <b>Opinion</b>: ripeto l'opinione (conclusione).</li>
</ul>
<p>Le due \"O\" sono i biscotti, ragione ed esempio sono la crema in mezzo!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f5f5f4"/>
<ellipse cx="200" cy="50" rx="150" ry="30" fill="#292524"/><text x="200" y="57" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">O – Opinione</text>
<rect x="60" y="85" width="280" height="35" rx="12" fill="#ffffff" stroke="#d6d3d1" stroke-width="2"/><text x="200" y="109" font-size="17" text-anchor="middle">R – Ragione</text>
<rect x="60" y="125" width="280" height="35" rx="12" fill="#ffffff" stroke="#d6d3d1" stroke-width="2"/><text x="200" y="149" font-size="17" text-anchor="middle">E – Esempio / prova</text>
<ellipse cx="200" cy="195" rx="150" ry="30" fill="#292524"/><text x="200" y="202" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">O – Opinione</text>
<text x="380" y="60" font-size="15" fill="#1f2937">= tesi</text>
<text x="380" y="110" font-size="15" fill="#1f2937">= argomento</text>
<text x="380" y="150" font-size="15" fill="#1f2937">= prova</text>
<text x="380" y="200" font-size="15" fill="#1f2937">= conclusione</text>
</svg>`
        },
        {
          label: "⚖️ In tribunale",
          html: `<p>Pensa a un <b>processo</b>:</p>
<ul>
<li>l'<b>avvocato</b> sei tu: sostieni una <b>tesi</b> («il mio cliente è innocente»);</li>
<li>gli <b>argomenti</b> sono le ragioni; le <b>prove</b> sono i testimoni, le foto, le impronte;</li>
<li>l'<b>avvocato avversario</b> presenta l'<b>antitesi</b>; tu rispondi punto per punto (<b>confutazione</b>);</li>
<li>il <b>giudice</b> è il lettore: decide chi ha ragionato meglio;</li>
<li>l'<b>arringa finale</b> è la <b>conclusione</b>.</li>
</ul>
<p>Un buon avvocato non urla: <b>dimostra</b>.</p>`
        },
        {
          label: "🗳️ La bilancia dei pro e contro",
          html: `<p>Prima di scrivere, fai una <b>tabella a due colonne</b>: da una parte i <b>PRO</b>, dall'altra i <b>CONTRO</b>. Poi \"pesa\" gli argomenti: quali sono più forti? La parte più pesante diventa la tua <b>tesi</b>, l'argomento più forte dell'altra parte diventa l'<b>antitesi</b> da confutare.</p>
<p>Esempio: «Cellulare a scuola?» PRO: ricerche veloci, emergenze. CONTRO: distrazione, meno gioco insieme. Abbina ogni argomento alla sua colonna!</p>`,
          widget: "classify",
          options: { groups: ["PRO cellulare a scuola", "CONTRO cellulare a scuola"], items: [["Si possono fare ricerche veloci", 0], ["Utile per avvisare in un'emergenza", 0], ["Si usano app per imparare", 0], ["Distrae durante le lezioni", 1], ["Si gioca meno con i compagni", 1], ["Si può rompere o perdere", 1]] }
        },
        {
          label: "🇬🇧 Lo schema PEE",
          html: `<p>Nel Regno Unito per ogni paragrafo si usa lo schema <b>PEE</b>:</p>
<ul>
<li><b>P</b>oint – il punto (argomento): «Gli alberi rinfrescano il cortile.»</li>
<li><b>E</b>vidence – la prova: «Abbiamo misurato 5 gradi in meno all'ombra.»</li>
<li><b>E</b>xplain – la spiegazione: «Quindi giocheremmo meglio anche a giugno.»</li>
</ul>
<p>Ogni argomento diventa un paragrafo PEE: il testo cresce ordinato, mattone dopo mattone.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del testo argomentativo",
      nodes: [
        { id: "problema", label: "Problema", x: 50, y: 6, color: "#64748b", html: "Una questione su cui le persone hanno opinioni diverse.", why: "Si argomenta solo se c'è un dubbio: su un fatto certo (2 + 2 = 4) non serve convincere nessuno." },
        { id: "tesi", label: "Tesi", x: 50, y: 26, color: "#2563eb", html: "L'opinione che l'autore sostiene.", why: "Dal greco <i>thésis</i> = \"posizione\": è il punto in cui ti metti. Va detta chiaramente, altrimenti il lettore non sa che cosa vuoi dimostrare." },
        { id: "argomenti", label: "Argomenti", x: 25, y: 48, color: "#16a34a", html: "Le ragioni a sostegno della tesi.", why: "Dal latino <i>arguere</i> = \"mostrare, chiarire\". Già i retori greci e romani (Aristotele, Cicerone, Quintiliano) studiavano come trovare e ordinare gli argomenti." },
        { id: "prove", label: "Prove", x: 25, y: 74, color: "#0ea5e9", html: "Dati, esempi, esperienze, citazioni di esperti.", why: "Un argomento senza prove è solo un'altra opinione. Le prove basate su fatti verificabili sono le più forti, come insegna il metodo scientifico." },
        { id: "antitesi", label: "Antitesi", x: 75, y: 48, color: "#dc2626", html: "L'opinione contraria alla tesi.", why: "<i>Anti</i> = contro. Presentarla mostra che hai considerato anche le idee degli altri e rende il testo più onesto e convincente." },
        { id: "confutazione", label: "Confutazione", x: 75, y: 74, color: "#f97316", html: "La risposta che mostra i punti deboli dell'antitesi.", why: "Dal latino <i>confutare</i> = \"respingere\". Se non rispondi alle obiezioni, il lettore che la pensa diversamente non cambierà idea." },
        { id: "connettivi", label: "Connettivi", x: 50, y: 60, color: "#a855f7", html: "Parole che legano il ragionamento: infatti, inoltre, tuttavia, quindi.", why: "Mostrano al lettore il rapporto logico tra le frasi (aggiunta, causa, contrasto, conseguenza), come i cartelli stradali di un percorso." },
        { id: "conclusione", label: "Conclusione", x: 50, y: 92, color: "#eab308", html: "Ribadisce la tesi ed eventualmente fa una proposta.", why: "Le persone ricordano soprattutto l'inizio e la fine di un discorso: per questo la tesi va ripetuta alla fine." }
      ],
      edges: [
        ["problema", "tesi", "genera"],
        ["tesi", "argomenti", "è sostenuta da"],
        ["argomenti", "prove", "si basano su"],
        ["tesi", "antitesi", "si oppone a"],
        ["antitesi", "confutazione", "è respinta dalla"],
        ["argomenti", "connettivi", "legati da"],
        ["confutazione", "conclusione", "porta alla"],
        ["prove", "conclusione", "portano alla"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: argomenti e prove",
      questions: [
        { type: "mc", q: "Quale è una prova basata su dati?", options: ["«Tutti sanno che è così»", "«Secondo l'ISTAT, 3 bambini su 10 non fanno sport»", "«A me piace di più»"], answer: 1, explain: "Un dato di un istituto di statistica è verificabile." },
        { type: "tf", q: "In un testo argomentativo è utile presentare anche l'opinione contraria.", answer: true, explain: "Presentare e confutare l'antitesi rende il testo più convincente." },
        { type: "mc", q: "Quale connettivo introduce la conclusione?", options: ["Inoltre", "Per esempio", "In conclusione"], answer: 2, explain: "«In conclusione» chiude il ragionamento." }
      ]
    }
  ],
  glossary: [
    { t: "Testo argomentativo", d: "Testo che sostiene un'opinione con argomenti e prove per convincere il lettore." },
    { t: "Tesi", d: "L'opinione che l'autore vuole dimostrare." },
    { t: "Argomento", d: "Ragione a sostegno della tesi." },
    { t: "Prova", d: "Dato, esempio, esperienza o citazione che rende forte un argomento." },
    { t: "Antitesi", d: "Opinione contraria alla tesi." },
    { t: "Confutazione", d: "Risposta che dimostra la debolezza dell'antitesi." },
    { t: "Fatto", d: "Informazione vera e verificabile da tutti." },
    { t: "Opinione", d: "Idea personale, su cui si può essere d'accordo o no." },
    { t: "Connettivo", d: "Parola o espressione che collega le frasi e mostra il ragionamento (infatti, tuttavia, quindi)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è lo scopo principale del testo argomentativo?", options: ["raccontare una storia", "convincere il lettore di un'opinione", "spiegare come si fa una torta"], answer: 1, explain: "Argomentare = sostenere un'opinione con ragioni per convincere." },
      { type: "order", q: "Metti in ordine le parti del testo argomentativo.", items: ["Problema", "Tesi", "Argomenti con prove", "Antitesi e confutazione", "Conclusione"], explain: "È lo schema classico: si parte dal problema e si chiude ribadendo la tesi." },
      { type: "mc", q: "Quale frase esprime una tesi?", options: ["Oggi è martedì.", "Secondo me la ricreazione dovrebbe durare di più.", "La ricreazione inizia alle 10:30."], answer: 1, explain: "È un'opinione da dimostrare; le altre sono fatti." },
      { type: "tf", q: "Un'opinione è sempre vera per tutti.", answer: false, explain: "L'opinione dipende da chi parla; è il fatto a essere verificabile." },
      { type: "mc", q: "«Qualcuno potrebbe obiettare che le gite costano troppo.» Questa frase introduce…", options: ["la tesi", "l'antitesi", "la conclusione"], answer: 1, explain: "Presenta un'opinione contraria: l'antitesi." },
      { type: "text", q: "Come si chiama la parte in cui si respinge l'opinione contraria?", answer: ["confutazione", "la confutazione"], explain: "Confutare = dimostrare che un'obiezione non regge." },
      { type: "mc", q: "Quale connettivo serve a dare una prova?", options: ["infatti", "tuttavia", "infine"], answer: 0, explain: "«Infatti» introduce la spiegazione o la prova di quanto detto." },
      { type: "mc", q: "Quale argomento è più forte per sostenere «Bisogna fare la raccolta differenziata»?", options: ["«Lo dicono tutti»", "«Riciclare la carta fa risparmiare alberi e acqua»", "«Mi piacciono i bidoni colorati»"], answer: 1, explain: "Si basa su un fatto verificabile e collegato alla tesi." },
      { type: "tf", q: "In una discussione corretta si criticano le idee, non le persone.", answer: true, explain: "Attaccare la persona invece dell'idea è scorretto e non dimostra nulla." },
      { type: "mc", q: "Nel metodo OREO, la «E» sta per…", options: ["Emozione", "Esempio (prova)", "Errore"], answer: 1, explain: "Opinion, Reason, Example, Opinion." },
      { type: "mc", q: "Chi scrisse la «Retorica», con ethos, pathos e logos?", options: ["Aristotele", "Dante", "Galileo"], answer: 0, explain: "Il filosofo greco Aristotele, nel IV secolo a.C." }
    ]
  }
});

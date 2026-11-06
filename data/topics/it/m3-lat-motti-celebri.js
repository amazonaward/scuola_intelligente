TOPIC('it', {
  id: `m3-lat-motti-celebri`,
  title: `Motti e frasi celebri latine`,
  intro: `<i>Veni, vidi, vici. Carpe diem. Alea iacta est.</i> Sono frasi di oltre duemila anni fa, ma le sentiamo ancora nei film, sui tatuaggi, negli stemmi delle città e delle squadre di calcio. Scopriamo <b>chi</b> le ha dette o scritte, <b>quando</b>, che cosa <b>significano davvero</b> e come <b>analizzarle</b> con la grammatica latina che conosci. 🏛️💬`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Perché le frasi latine sono così famose?`,
      html: `<p>Il latino è stato per secoli la lingua di Roma, poi della <b>Chiesa</b>, delle <b>università</b>, della <b>scienza</b> e del <b>diritto</b> in tutta Europa: fino al Settecento libri di scienza e filosofia si scrivevano spesso in latino. Per questo molte frasi sono diventate patrimonio comune.</p>
<p>Le frasi latine "funzionano" bene come motti perché il latino è:</p>
<ul>
<li><b>breve</b>: senza articoli e spesso senza pronomi, bastano poche parole (<i>Veni, vidi, vici</i> = 3 parole, in italiano 6: "Sono venuto, ho visto, ho vinto");</li>
<li><b>musicale</b>: ama le allitterazioni (stessi suoni all'inizio: <b>v</b>eni, <b>v</b>idi, <b>v</b>ici) e i ritmi;</li>
<li><b>solenne</b>: dà alla frase un'aria antica e autorevole.</li>
</ul>
<p>Queste frasi si dividono in <b>citazioni</b> (frasi dette o scritte da un autore preciso), <b>proverbi</b> (saggezza popolare, spesso senza autore) e <b>motti</b> (frasi scelte come "programma" da una persona, una famiglia, una città, una scuola).</p>`
    },
    {
      type: `text`, title: `2. Le frasi di Giulio Cesare`,
      html: `<ul>
<li><b>Alea iacta est</b> = "Il dado è tratto". Secondo lo storico Svetonio, Cesare la pronunciò il <b>10 gennaio 49 a.C.</b> attraversando con le sue truppe il fiume <b>Rubicone</b>, confine che un generale non poteva superare in armi. Era l'inizio della guerra civile. Lo storico greco Plutarco racconta che la disse in greco, citando il commediografo Menandro. Oggi si dice quando si prende una decisione da cui non si torna indietro (come "passare il Rubicone").</li>
<li><b>Veni, vidi, vici</b> = "Venni, vidi, vinsi". Cesare la scrisse nel <b>47 a.C.</b> per annunciare a Roma la rapidissima vittoria di <b>Zela</b> (oggi in Turchia) contro il re Farnace del Ponto. Svetonio racconta che era scritta su un cartello portato durante il suo trionfo.</li>
<li><b>Tu quoque, Brute, fili mi!</b> = "Anche tu, Bruto, figlio mio!". Secondo la tradizione, le ultime parole di Cesare, ucciso il <b>15 marzo 44 a.C.</b> (le Idi di marzo). In realtà Svetonio riporta una frase in <b>greco</b> (<i>kai sy, teknon</i> = anche tu, figliolo) e aggiunge che altri dicono che Cesare morì <b>senza dire nulla</b>. La versione latina più famosa è quella di Shakespeare: <i>Et tu, Brute?</i></li>
</ul>`
    },
    {
      type: `3d`, title: `Le frasi celebri nello spazio e nel tempo`,
      scene: `spacetime`,
      options: {
        lat: [35, 55], lon: [-5, 40], years: [-250, 1700],
        places: [
          { lat: 41.9, lon: 12.5, label: `Roma` },
          { lat: 44.1, lon: 12.4, label: `Rubicone` },
          { lat: 40.3, lon: 35.9, label: `Zela` },
          { lat: 41.49, lon: 13.81, label: `Montecassino` },
          { lat: 52.16, lon: 4.49, label: `Leida` }
        ],
        events: [
          { id: `plauto`, lat: 41.9, lon: 12.5, year: -211, label: `Plauto: "lupus est homo homini"`, html: `Nella commedia <i>Asinaria</i> (circa 211 a.C.) Plauto scrive che l'uomo è un lupo per l'uomo quando non lo conosce. Nel 1600 il filosofo inglese Thomas Hobbes renderà famosa la forma <i>homo homini lupus</i>.` },
          { id: `rubi`, lat: 44.1, lon: 12.4, year: -49, label: `Alea iacta est`, html: `10 gennaio 49 a.C.: Cesare attraversa il Rubicone con una legione, sfidando il Senato. Comincia la guerra civile contro Pompeo.` },
          { id: `zela`, lat: 40.3, lon: 35.9, year: -47, label: `Veni, vidi, vici`, html: `Agosto 47 a.C.: in una battaglia di poche ore Cesare sconfigge Farnace II del Ponto e lo annuncia con tre sole parole.`, causes: [`rubi`] },
          { id: `idi`, lat: 41.9, lon: 12.5, year: -44, label: `Tu quoque, Brute`, html: `15 marzo 44 a.C.: Cesare, ormai dittatore a vita, viene ucciso in Senato da un gruppo di congiurati, tra cui Bruto.`, causes: [`rubi`, `zela`] },
          { id: `orazio`, lat: 41.9, lon: 12.5, year: -23, label: `Orazio: carpe diem`, html: `Il poeta Orazio pubblica i primi tre libri delle <i>Odi</i>. Nell'ode 1,11 invita Leuconoe a "cogliere l'attimo". È l'età di Augusto, dopo anni di guerre civili.`, causes: [`idi`] },
          { id: `giov`, lat: 41.9, lon: 12.5, year: 120, label: `Giovenale: mens sana in corpore sano`, html: `Nella <i>Satira X</i> (inizio II secolo d.C.) Giovenale dice che bisognerebbe chiedere agli dèi solo una mente sana in un corpo sano. Nella stessa epoca deride il popolo che vuole solo <i>panem et circenses</i>.` },
          { id: `bene`, lat: 41.49, lon: 13.81, year: 529, label: `Benedetto: ora et labora`, html: `Verso il 529 san Benedetto fonda il monastero di Montecassino. La sua Regola organizza la giornata tra preghiera e lavoro: da qui il motto benedettino <i>ora et labora</i> (che però come formula si diffuse più tardi).` },
          { id: `gali`, lat: 41.9, lon: 12.5, year: 1633, label: `Galileo: "Eppur si muove"`, html: `Galileo Galilei è processato a Roma e costretto ad abiurare la teoria di Copernico. La frase "Eppur si muove" (in italiano) è probabilmente una leggenda nata dopo la sua morte.` },
          { id: `cart`, lat: 52.16, lon: 4.49, year: 1637, label: `Cartesio: cogito, ergo sum`, html: `A Leida esce il <i>Discorso sul metodo</i> di Cartesio: "Je pense, donc je suis". La versione latina <i>cogito, ergo sum</i> compare nei <i>Principia philosophiae</i> (1644). Dopo la condanna di Galileo, Cartesio aveva rinunciato a pubblicare il suo trattato <i>Il mondo</i>.`, causes: [`gali`] }
        ]
      },
      caption: `La base è la mappa, l'altezza è il tempo. Tocca un evento per leggere la storia della frase; le frecce collegano cause ed effetti.`
    },
    {
      type: `decision`, title: `49 a.C.: Cesare davanti al Rubicone`,
      html: `<p>Sei <b>Giulio Cesare</b>. Hai conquistato la Gallia in otto anni di guerra e sei amatissimo dai tuoi soldati. A Roma però il Senato, guidato dai tuoi avversari e da Pompeo, ti ordina di <b>sciogliere l'esercito</b> e tornare come privato cittadino: senza la protezione della carica, rischi un processo e la fine della carriera politica.</p>
<p>Sei sulla riva del <b>Rubicone</b>, il fiumiciattolo che segna il confine dell'Italia: la legge vieta a un generale di attraversarlo con le truppe.</p>`,
      question: `Tu cosa avresti fatto?`,
      options: [
        { label: `Obbedire: sciogliere l'esercito e tornare a Roma da solo`, outcome: `Avresti rispettato la legge ed evitato la guerra civile, ma probabilmente i tuoi nemici ti avrebbero processato ed escluso dalla politica, forse esiliato.` },
        { label: `Attraversare il fiume con la legione`, outcome: `Diventi un ribelle contro lo Stato: si apre una guerra civile in tutto il Mediterraneo. Se vinci, avrai un potere enorme; se perdi, la morte.` },
        { label: `Restare al confine e trattare ancora con il Senato`, outcome: `Cesare in effetti aveva proposto compromessi (per esempio che anche Pompeo lasciasse il suo esercito), ma il Senato li aveva respinti. Aspettare avrebbe dato tempo ai nemici di organizzarsi.` }
      ],
      answer: 1,
      explain: `Cesare attraversò il Rubicone il 10 gennaio 49 a.C., pronunciando (secondo Svetonio) "alea iacta est". Pompeo e molti senatori fuggirono da Roma; Cesare vinse la guerra civile (battaglia di Farsàlo, 48 a.C.) e divenne dittatore. Il suo potere personale preoccupò però molti senatori, che lo uccisero nel 44 a.C. La sua scelta segnò la fine della Repubblica romana: pochi anni dopo suo figlio adottivo Ottaviano divenne il primo imperatore, Augusto.`
    },
    {
      type: `quiz`, title: `Mini-quiz: le frasi di Cesare`,
      questions: [
        { type: `mc`, q: `"Alea iacta est" si riferisce a…`, options: [`la vittoria di Zela`, `l'attraversamento del Rubicone`, `la morte di Cesare`], answer: 1, explain: `49 a.C., inizio della guerra civile.` },
        { type: `mc`, q: `Che cosa significa "Veni, vidi, vici"?`, options: [`Venni, vidi, vinsi`, `Vieni, vedi, vinci`, `Vedo, vengo, vivo`], answer: 0, explain: `Tre perfetti di 1ª persona singolare.` },
        { type: `num`, q: `In che anno a.C. fu ucciso Giulio Cesare? (scrivi solo il numero)`, answer: 44, tol: 0, explain: `Alle Idi di marzo (15 marzo) del 44 a.C.` }
      ]
    },
    {
      type: `text`, title: `3. Poeti e scrittori: saggezza per la vita`,
      html: `<table>
<tr><th>Frase</th><th>Significato</th><th>Autore e opera</th></tr>
<tr><td><b>Carpe diem</b> (quam minimum credula postero)</td><td>Cogli il giorno (fidandoti il meno possibile del domani)</td><td>Orazio, <i>Odi</i> 1,11 (23 a.C.)</td></tr>
<tr><td><b>Mens sana in corpore sano</b></td><td>Mente sana in corpo sano</td><td>Giovenale, <i>Satire</i> X</td></tr>
<tr><td><b>Panem et circenses</b></td><td>Pane e giochi del circo: ciò che il popolo chiede per stare tranquillo</td><td>Giovenale, <i>Satire</i> X</td></tr>
<tr><td><b>Audentes fortuna iuvat</b></td><td>La fortuna aiuta gli audaci</td><td>Virgilio, <i>Eneide</i> X, 284</td></tr>
<tr><td><b>Omnia vincit amor</b></td><td>L'amore vince tutto</td><td>Virgilio, <i>Bucoliche</i> X, 69</td></tr>
<tr><td><b>Homo sum, humani nihil a me alienum puto</b></td><td>Sono un uomo: niente di ciò che è umano mi è estraneo</td><td>Terenzio, <i>Heautontimorumenos</i> (163 a.C.)</td></tr>
<tr><td><b>Festina lente</b></td><td>Affrettati lentamente</td><td>motto di Augusto (riferito da Svetonio, in greco)</td></tr>
<tr><td><b>Si vis pacem, para bellum</b></td><td>Se vuoi la pace, prepara la guerra</td><td>adattamento da Vegezio (IV-V sec. d.C.)</td></tr>
</table>
<p>⚠️ Attenzione al significato vero: <i>Mens sana in corpore sano</i> per Giovenale <b>non</b> era un invito a fare sport, ma un consiglio su che cosa chiedere agli dèi nelle preghiere (invece di ricchezze e potere). <i>Carpe diem</i> non vuol dire "fai tutto quello che vuoi", ma "vivi bene il presente, perché il futuro è incerto".</p>`
    },
    {
      type: `text`, title: `4. Proverbi, diritto, scienza: le frasi di tutti i giorni`,
      html: `<ul>
<li><b>Verba volant, scripta manent</b> = le parole volano, gli scritti restano (proverbio medievale).</li>
<li><b>Errare humanum est, perseverare autem diabolicum</b> = sbagliare è umano, perseverare (nell'errore) è diabolico (medievale, ispirato a Seneca e sant'Agostino).</li>
<li><b>Repetita iuvant</b> = le cose ripetute giovano (motto perfetto per chi studia!).</li>
<li><b>Dura lex, sed lex</b> = la legge è dura, ma è la legge.</li>
<li><b>Per aspera ad astra</b> = attraverso le difficoltà fino alle stelle.</li>
<li><b>Ora et labora</b> = prega e lavora (motto dei monaci benedettini).</li>
<li><b>Cogito, ergo sum</b> = penso, dunque sono (Cartesio).</li>
<li><b>Memento mori</b> = ricordati che devi morire (invito all'umiltà).</li>
</ul>
<p>E nella vita quotidiana: <i>ad hoc</i> (apposta), <i>alter ego</i> (un altro me stesso), <i>lapsus</i> (scivolone), <i>ultimatum</i>, <i>gratis</i> (da <i>gratiis</i> = per grazia, senza pagare), <i>bis</i> (due volte), <i>post scriptum</i> (P.S.), <i>et cetera</i> (ecc.).</p>`
    },
    {
      type: `widget`, title: `Abbina la frase al significato`,
      widget: `match`,
      options: { pairs: [
        [`Carpe diem`, `Cogli l'attimo`],
        [`Alea iacta est`, `Il dado è tratto`],
        [`Verba volant, scripta manent`, `Le parole volano, gli scritti restano`],
        [`Mens sana in corpore sano`, `Mente sana in corpo sano`],
        [`Audentes fortuna iuvat`, `La fortuna aiuta gli audaci`],
        [`Festina lente`, `Affrettati lentamente`],
        [`Repetita iuvant`, `Ripetere aiuta`]
      ] },
      caption: `Prova senza guardare le tabelle!`
    },
    {
      type: `text`, title: `5. Analizziamo le frasi con la grammatica`,
      html: `<p>Ora che conosci casi e verbi, puoi "smontare" i motti:</p>
<ul>
<li><b>Carpe diem</b>: <i>carpe</i> = imperativo di <i>carpo, carpis, carpĕre</i> (3ª coniug.: cogliere); <i>diem</i> = accusativo singolare di <i>dies</i> (5ª declinazione) ➜ complemento oggetto: "cogli il giorno".</li>
<li><b>Veni, vidi, vici</b>: tre <b>perfetti</b> (1ª pers. sing.) di <i>venio</i> (4ª), <i>video</i> (2ª), <i>vinco</i> (3ª). Nessun pronome, nessuna congiunzione (si chiama <b>asindeto</b>): l'effetto è velocità, proprio come la battaglia!</li>
<li><b>Verba volant, scripta manent</b>: <i>verba</i> (le parole) e <i>scripta</i> (gli scritti) sono nominativi plurali neutri ➜ soggetti; <i>volant</i> (1ª coniug.) e <i>manent</i> (2ª coniug.) presenti di 3ª plurale.</li>
<li><b>Audentes fortuna iuvat</b>: <i>fortuna</i> = nominativo (soggetto, 1ª decl.); <i>audentes</i> = accusativo plurale (gli audaci, oggetto); <i>iuvat</i> = aiuta (1ª coniug.). Il soggetto sta in mezzo: in latino l'ordine è libero!</li>
<li><b>Cogito, ergo sum</b>: <i>cogito</i> = penso (1ª coniug.), <i>ergo</i> = dunque, <i>sum</i> = sono (il verbo che hai già studiato!).</li>
</ul>`
    },
    {
      type: `svg`, title: `Smontare "Audentes fortuna iuvat"`,
      caption: `La desinenza dice la funzione: il soggetto "fortuna" sta in mezzo, ma resta il soggetto.`,
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fffbeb"/>
<rect x="30" y="40" width="200" height="70" rx="12" fill="#3b82f6"/>
<rect x="250" y="40" width="160" height="70" rx="12" fill="#ef4444"/>
<rect x="430" y="40" width="140" height="70" rx="12" fill="#334155"/>
<text x="130" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">audent<tspan fill="#fde047">es</tspan></text>
<text x="330" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">fortun<tspan fill="#fde047">a</tspan></text>
<text x="500" y="85" font-size="28" fill="#fff" text-anchor="middle" font-weight="bold">iuva<tspan fill="#fde047">t</tspan></text>
<text x="130" y="140" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">ACCUSATIVO PLURALE</text>
<text x="330" y="140" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">NOMINATIVO</text>
<text x="500" y="140" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">3ª SING. PRESENTE</text>
<text x="130" y="165" font-size="15" fill="#334155" text-anchor="middle">complemento oggetto</text>
<text x="330" y="165" font-size="15" fill="#334155" text-anchor="middle">soggetto</text>
<text x="500" y="165" font-size="15" fill="#334155" text-anchor="middle">predicato</text>
<path d="M130 180 C 130 230, 470 210, 470 235" stroke="#3b82f6" stroke-width="3" fill="none"/>
<path d="M330 180 C 330 210, 130 210, 130 235" stroke="#ef4444" stroke-width="3" fill="none"/>
<path d="M500 180 C 500 210, 300 215, 300 235" stroke="#334155" stroke-width="3" fill="none"/>
<text x="300" y="265" font-size="20" fill="#0f172a" text-anchor="middle" font-weight="bold">La fortuna   aiuta   gli audaci</text>
</svg>`
    },
    {
      type: `example`, title: `Esempio pratico: i motti intorno a noi`,
      html: `<ul>
<li>Lo stemma della città di <b>Parigi</b>: <i>Fluctuat nec mergitur</i> = è sbattuta dalle onde ma non affonda.</li>
<li>Le <b>Olimpiadi</b>: <i>Citius, altius, fortius</i> = più veloce, più in alto, più forte (proposto da Pierre de Coubertin nel 1894; dal 2021 si aggiunge <i>communiter</i>, "insieme").</li>
<li>Gli <b>Stati Uniti</b>: <i>E pluribus unum</i> = da molti, uno solo (gli Stati che formano un'unica nazione), scritto sulle monete.</li>
<li>L'<b>Unione Europea</b>: <i>In varietate concordia</i> = uniti nella diversità.</li>
<li>Il marchio sportivo <b>ASICS</b> è l'acronimo di <i>Anima sana in corpore sano</i>!</li>
</ul>`
    },
    {
      type: `example`, title: `Esempio pratico: usare un motto in un tema`,
      html: `<p>Una citazione latina, usata bene, rende più efficace un testo argomentativo. Per esempio, in un tema sull'importanza dello studio:</p>
<p><i>"Come dicevano i Romani, <b>repetita iuvant</b>: ripassare ogni giorno un po' è più utile che studiare tutto la sera prima della verifica."</i></p>
<p>Regole d'oro: scrivi la frase in <b>corsivo</b> (o tra virgolette), <b>traducila</b> o spiegala subito dopo, e assicurati di conoscerne il <b>significato vero</b> (e l'autore, se c'è).</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… molte frasi "di Cesare" non sono proprio sue?`,
      html: `<p><i>Alea iacta est</i> era un proverbio greco che Cesare (secondo Plutarco) citò dal commediografo Menandro. <i>Tu quoque, Brute</i> è un'invenzione posteriore: le fonti antiche parlano di una frase in greco o del silenzio. E l'ordine di Svetonio è in realtà <i>iacta alea est</i>! Anche "<i>Eppur si muove</i>" di Galileo compare per la prima volta in un dipinto e in un libro scritti più di cento anni dopo il processo. Morale: verificare sempre le fonti, anche per le citazioni famose!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… i giuramenti dei medici e il calcio parlano latino?`,
      html: `<p>Il principio dei medici <i>Primum non nocere</i> (prima di tutto, non fare danno) si ispira al giuramento di Ippocrate. Molte squadre di calcio inglesi hanno motti latini: il <b>Tottenham</b> ha <i>Audere est facere</i> (osare è fare) e l'<b>Everton</b> <i>Nil satis nisi optimum</i> (solo il meglio è abbastanza). E il motto dello Stato del Kansas (USA) è proprio <i>Ad astra per aspera</i>!</p>`
    },
    {
      type: `remember`, title: `Da ricordare`,
      html: `<ul>
<li>Cesare: <b>Alea iacta est</b> (Rubicone, 49 a.C.), <b>Veni, vidi, vici</b> (Zela, 47 a.C.); <b>Tu quoque, Brute</b> è tradizione (44 a.C.).</li>
<li>Orazio: <b>Carpe diem</b>. Giovenale: <b>Mens sana in corpore sano</b>, <b>Panem et circenses</b>. Virgilio: <b>Audentes fortuna iuvat</b>.</li>
<li>Prima di usare una citazione: <b>significato vero</b>, <b>autore</b>, <b>contesto</b>.</li>
<li>Le frasi si analizzano come qualunque frase latina: verbo, soggetto (nominativo), oggetto (accusativo)…</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Altri modi per impararle`,
      intro: `Le frasi latine si ricordano meglio se le colleghi a immagini, storie e lingue che conosci.`,
      tabs: [
        {
          label: `🃏 Flashcards`,
          html: `<p>Leggi il motto latino, prova a tradurlo e poi gira la carta.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `Veni, vidi, vici`, back: `Venni, vidi, vinsi (Cesare, 47 a.C.)` },
            { front: `Carpe diem`, back: `Cogli il giorno (Orazio)` },
            { front: `Panem et circenses`, back: `Pane e giochi del circo (Giovenale)` },
            { front: `Per aspera ad astra`, back: `Attraverso le difficoltà fino alle stelle` },
            { front: `Cogito, ergo sum`, back: `Penso, dunque sono (Cartesio)` },
            { front: `Dura lex, sed lex`, back: `La legge è dura, ma è la legge` },
            { front: `Memento mori`, back: `Ricordati che devi morire` },
            { front: `E pluribus unum`, back: `Da molti, uno (motto degli USA)` }
          ] }
        },
        {
          label: `🖼️ Il fumetto mentale`,
          html: `<p>Associa a ogni frase un'immagine buffa e precisa: la memoria ricorda meglio le immagini delle parole.</p>
<ul>
<li>🎲 <b>Alea iacta est</b>: Cesare che lancia un dado gigante dentro un fiume.</li>
<li>🍞🎪 <b>Panem et circenses</b>: un panino enorme seduto sugli spalti del Circo Massimo.</li>
<li>🐢🏃 <b>Festina lente</b>: una tartaruga con le scarpe da corsa.</li>
<li>🧠💪 <b>Mens sana in corpore sano</b>: un cervello che fa i pesi.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#e0f2fe"/>
<path d="M0 150 Q 150 120 300 150 T 600 150 L600 220 L0 220 Z" fill="#38bdf8"/>
<rect x="250" y="70" width="80" height="80" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="4" transform="rotate(-15 290 110)"/>
<circle cx="270" cy="95" r="7" fill="#0f172a"/><circle cx="305" cy="115" r="7" fill="#0f172a"/><circle cx="285" cy="130" r="7" fill="#0f172a"/>
<text x="110" y="120" font-size="64" text-anchor="middle">🤴</text>
<text x="300" y="40" font-size="22" fill="#0f172a" text-anchor="middle" font-weight="bold">ALEA IACTA EST!</text>
<text x="470" y="140" font-size="18" fill="#075985" font-weight="bold">Rubicone</text>
<text x="300" y="205" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">49 a.C. – il dado è tratto: non si torna indietro</text>
</svg>`
        },
        {
          label: `🌍 Frasi sorelle in altre lingue`,
          html: `<p>Molte lingue hanno proverbi con lo stesso significato dei motti latini:</p>
<ul>
<li><i>Festina lente</i> ➜ 🇮🇹 "Chi va piano va sano e va lontano"; 🇬🇧 <i>More haste, less speed</i>; 🇯🇵 <i>Isogaba maware</i> (se hai fretta, fai il giro lungo).</li>
<li><i>Repetita iuvant</i> ➜ 🇬🇧 <i>Practice makes perfect</i>; 🇷🇺 <i>Повторение — мать учения</i> (la ripetizione è la madre dello studio).</li>
<li><i>Audentes fortuna iuvat</i> ➜ 🇬🇧 <i>Fortune favours the bold</i>; 🇫🇷 <i>La fortune sourit aux audacieux</i>.</li>
<li><i>Verba volant…</i> ➜ 🇮🇹 "Carta canta".</li>
</ul>`
        },
        {
          label: `⏳ Linea del tempo`,
          html: `<p>Metti le frasi in ordine cronologico: in quale epoca è nata ognuna?</p>`,
          widget: `timeline`,
          options: { events: [
            { year: -211, label: `Plauto: lupus est homo homini`, icon: `🐺` },
            { year: -49, label: `Alea iacta est`, icon: `🎲` },
            { year: -47, label: `Veni, vidi, vici`, icon: `⚔️` },
            { year: -23, label: `Orazio: Carpe diem`, icon: `🌹` },
            { year: 120, label: `Giovenale: Mens sana…`, icon: `🧠` },
            { year: 1644, label: `Cartesio: Cogito, ergo sum`, icon: `💭` },
            { year: 1894, label: `Citius, altius, fortius`, icon: `🏅` }
          ], unit: `anni` }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: da dove vengono le frasi latine`,
      nodes: [
        { id: `lat`, label: `Latino`, x: 50, y: 6, color: `#64748b`, html: `Lingua di Roma, poi lingua comune della cultura europea.`, why: `Dopo la fine dell'Impero d'Occidente (476 d.C.) il latino rimase la lingua della Chiesa, delle scuole e delle università (Bologna, 1088) e della scienza fino al Settecento: Newton scrisse in latino i <i>Principia</i> (1687).` },
        { id: `stor`, label: `Storici`, x: 15, y: 30, color: `#ef4444`, html: `Svetonio, Plutarco: tramandano le frasi dei potenti.`, why: `Svetonio scrisse le <i>Vite dei Cesari</i> verso il 121 d.C., più di 150 anni dopo Cesare, usando archivi e racconti: per questo alcune frasi sono incerte.` },
        { id: `cesare`, label: `Giulio Cesare`, x: 15, y: 58, color: `#dc2626`, html: `Alea iacta est, Veni vidi vici.`, why: `Cesare era anche un grande scrittore (<i>De bello Gallico</i>) famoso per lo stile asciutto e chiaro: frasi brevi e potenti erano la sua "firma".` },
        { id: `poeti`, label: `Poeti`, x: 50, y: 30, color: `#a855f7`, html: `Orazio, Virgilio, Giovenale, Terenzio.`, why: `La poesia latina usa il ritmo delle sillabe lunghe e brevi (metrica): i versi brevi e ritmati si ricordano facilmente, e molte frasi sono pezzi di verso.` },
        { id: `orazio`, label: `Carpe diem`, x: 40, y: 58, color: `#c084fc`, html: `Orazio, Odi 1,11.`, why: `Orazio seguiva la filosofia di <b>Epicuro</b>: per essere felici bisogna godere con misura del presente, senza ansia per un futuro che non possiamo controllare.` },
        { id: `giov`, label: `Mens sana…`, x: 62, y: 58, color: `#9333ea`, html: `Giovenale, Satira X.`, why: `Giovenale scriveva <b>satire</b>, critiche pungenti della società romana: la frase era un invito a desiderare cose semplici, non ricchezza e potere.` },
        { id: `med`, label: `Medioevo e Chiesa`, x: 85, y: 30, color: `#0ea5e9`, html: `Ora et labora, Errare humanum est, Verba volant…`, why: `Nei monasteri e nelle università il latino era la lingua di tutti i giorni: nacquero proverbi nuovi, brevi e in rima, facili da memorizzare.` },
        { id: `oggi`, label: `Motti di oggi`, x: 50, y: 88, color: `#22c55e`, html: `Olimpiadi, stati, città, squadre, scuole.`, why: `Il latino non appartiene più a una nazione sola: per questo è "neutrale" e solenne, perfetto per motti di istituzioni internazionali, come l'UE o le Olimpiadi.` }
      ],
      edges: [
        [`lat`, `stor`, `fonti`], [`lat`, `poeti`, `fonti`], [`lat`, `med`, `continua`], [`stor`, `cesare`, `raccontano`],
        [`poeti`, `orazio`, `Orazio`], [`poeti`, `giov`, `Giovenale`], [`med`, `oggi`, `eredità`], [`cesare`, `oggi`, `ancora citato`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: autori e significati`,
      questions: [
        { type: `mc`, q: `Chi scrisse "Carpe diem"?`, options: [`Virgilio`, `Orazio`, `Cesare`], answer: 1, explain: `Orazio, Odi 1,11.` },
        { type: `tf`, q: `Per Giovenale "Mens sana in corpore sano" era un invito a fare sport.`, answer: false, explain: `Era un consiglio su che cosa chiedere agli dèi: salute del corpo e della mente invece di ricchezza e potere.` },
        { type: `text`, q: `Completa: "Verba volant, scripta ___".`, answer: [`manent`], explain: `Le parole volano, gli scritti restano.` }
      ]
    }
  ],
  glossary: [
    { t: `Motto`, d: `Frase breve che esprime un ideale o un programma (di una persona, città, istituzione).` },
    { t: `Citazione`, d: `Frase ripresa da un autore o da un'opera precisa.` },
    { t: `Proverbio`, d: `Frase di saggezza popolare, di solito senza autore.` },
    { t: `Asindeto`, d: `Elenco di parole senza congiunzioni: veni, vidi, vici.` },
    { t: `Allitterazione`, d: `Ripetizione degli stessi suoni all'inizio di parole vicine.` },
    { t: `Rubicone`, d: `Fiume romagnolo, confine dell'Italia romana attraversato da Cesare nel 49 a.C.` },
    { t: `Idi di marzo`, d: `Il 15 marzo nel calendario romano: giorno dell'uccisione di Cesare (44 a.C.).` },
    { t: `Satira`, d: `Genere letterario che critica con ironia i difetti della società.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"Veni, vidi, vici" annunciava la vittoria di Cesare a…`, options: [`Farsàlo`, `Zela`, `Alesia`], answer: 1, explain: `Zela, 47 a.C., contro Farnace del Ponto.` },
      { type: `mc`, q: `"Alea iacta est" significa…`, options: [`Il dado è tratto`, `La sorte è contraria`, `Il fiume è largo`], answer: 0, explain: `Alea = dado, iacta est = è stato lanciato.` },
      { type: `num`, q: `In che anno a.C. Cesare attraversò il Rubicone?`, answer: 49, tol: 0, explain: `Il 10 gennaio 49 a.C.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Alea iacta est (Rubicone)`, `Veni, vidi, vici (Zela)`, `Morte di Cesare alle Idi di marzo`, `Orazio pubblica le Odi (Carpe diem)`, `Cartesio: Cogito, ergo sum`], explain: `49 a.C., 47 a.C., 44 a.C., 23 a.C., 1637/1644 d.C.` },
      { type: `mc`, q: `"Panem et circenses" critica…`, options: [`un popolo che si accontenta di cibo e spettacoli`, `i fornai romani`, `le corse dei cavalli`], answer: 0, explain: `Giovenale accusa il popolo di non interessarsi più alla politica.` },
      { type: `text`, q: `Traduci "Carpe diem".`, answer: [`cogli il giorno`, `cogli l'attimo`, `cogli l attimo`, `cogli l'attimo`], explain: `carpe = cogli (imperativo), diem = il giorno (accusativo).` },
      { type: `mc`, q: `In "Carpe diem", "diem" è…`, options: [`nominativo, soggetto`, `accusativo, complemento oggetto`, `ablativo, tempo`], answer: 1, explain: `Accusativo singolare di dies (5ª declinazione).` },
      { type: `tf`, q: `"Tu quoque, Brute, fili mi" è con certezza la frase pronunciata da Cesare.`, answer: false, explain: `Svetonio riporta una frase in greco oppure il silenzio; la versione latina è tradizionale.` },
      { type: `mc`, q: `"Cogito, ergo sum" è di…`, options: [`Cicerone`, `Cartesio`, `Galileo`], answer: 1, explain: `Il filosofo francese René Descartes (Cartesio), XVII secolo.` },
      { type: `mc`, q: `Quale motto appartiene alle Olimpiadi?`, options: [`E pluribus unum`, `Citius, altius, fortius`, `Fluctuat nec mergitur`], answer: 1, explain: `Più veloce, più in alto, più forte (dal 2021 + communiter).` },
      { type: `text`, q: `Completa il motto di Virgilio: "Audentes fortuna ___" (aiuta).`, answer: [`iuvat`, `juvat`], explain: `iuvat = aiuta (3ª pers. sing., 1ª coniugazione).` },
      { type: `mc`, q: `"Festina lente" significa…`, options: [`Fai festa lentamente`, `Affrettati lentamente`, `Il lento vince la festa`], answer: 1, explain: `Agisci con rapidità ma senza fretta sconsiderata: motto di Augusto.` }
    ]
  }
});

TOPIC('it', {
  id: `l5-grc-nuovo-testamento`,
  title: `Il Nuovo Testamento e i Padri`,
  intro: `Tutti i libri del <b>Nuovo Testamento</b> sono stati scritti in <b>greco</b>. Non nel greco di Platone o di Tucidide, ma nella lingua che si parlava nei mercati, nelle città e nelle strade del Mediterraneo orientale: la <b>koinè</b> ("la lingua comune"), nata dopo Alessandro Magno. Per un lettore che ha studiato l'attico, la koinè è un incontro sorprendente: riconosci le forme, ma vedi la lingua semplificarsi e cambiare. In questa lezione leggi alcuni versetti famosi in originale (<i>Marco, Matteo, Luca, Giovanni, Paolo</i>), scopri come si è formato il testo, perché tante parole del linguaggio religioso (<i>chiesa, vescovo, battesimo, angelo</i>) sono parole greche, e incontri i <b>Padri della Chiesa</b> che scrissero in greco. ✝️📜`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. La koinè e la Bibbia greca`,
      html: `<p>Dopo le conquiste di Alessandro (334-323 a.C.), il greco si diffonde dall'Egitto all'Asia centrale. Nasce una lingua comune, la <b>koinè</b> (<i>ἡ κοινὴ διάλεκτος</i>), basata soprattutto sull'attico semplificato con apporti ionici. È la lingua dell'amministrazione, del commercio, delle scuole e, presto, della cultura ebraica della diaspora: ad <b>Alessandria</b>, nel III-II secolo a.C., la Bibbia ebraica fu tradotta in greco. È la <b>Septuaginta</b> o <b>Settanta</b> (<i>LXX</i>), dal numero leggendario dei traduttori (secondo la <i>Lettera di Aristea</i> furono 72, sei per ognuna delle dodici tribù). Il linguaggio biblico greco, pieno di ebraismi, fu il modello lessicale del Nuovo Testamento.</p>
<p>Gesù parlava probabilmente <b>aramaico</b>, ma i suoi discepoli e le prime comunità cristiane, diffuse in città di lingua greca, scrissero in greco. Anche a Roma, fino al III secolo, la liturgia e gli scritti cristiani erano spesso in greco: lo stesso imperatore filosofo <b>Marco Aurelio</b> scrisse i suoi <i>Pensieri</i> in greco.</p>`
    },
    {
      type: `widget`, title: `Cronologia: dalla koinè ai Padri`,
      widget: `timeline`,
      options: { unit: `anni`, events: [
        { year: -323, label: `Morte di Alessandro: diffusione della koinè`, icon: `👑` },
        { year: -250, label: `Traduzione greca della Torah ad Alessandria (III sec.)`, icon: `📜` },
        { year: 50, label: `Prime lettere di Paolo (1 Tessalonicesi, c. 50-51)`, icon: `✉️` },
        { year: 70, label: `Vangelo di Marco (c. 65-70)`, icon: `📖` },
        { year: 100, label: `Vangelo di Giovanni (fine I sec.)`, icon: `✝️` },
        { year: 325, label: `Concilio di Nicea`, icon: `⛪` }
      ] },
      caption: `Dall'espansione del greco con Alessandro ai primi concili cristiani.`
    },
    {
      type: `text`, title: `2. I libri del Nuovo Testamento`,
      html: `<p>Il Nuovo Testamento contiene <b>27 libri</b>, scritti fra circa il 50 e il 120 d.C.:</p>
<ul>
<li>le <b>lettere di Paolo</b> (Romani, Corinzi, Galati, Filippesi, Tessalonicesi...): le più antiche, a partire da <i>1 Tessalonicesi</i> (c. 50-51). Paolo scrive un greco vivace, appassionato, con frasi lunghe e rotture di costruzione;</li>
<li>i quattro <b>Vangeli</b> (<i>εὐαγγέλιον</i>, "buona notizia"): <b>Marco</b> (il più antico, c. 65-70), con un greco semplice e rapido; <b>Matteo</b> (c. 80-90); <b>Luca</b> (c. 80-90), il più elegante, con un prologo in periodo ampio; <b>Giovanni</b> (fine I secolo), con una lingua semplice ma profonda;</li>
<li>gli <b>Atti degli Apostoli</b> (di Luca): racconto delle origini della Chiesa e dei viaggi di Paolo;</li>
<li>altre lettere (Giacomo, Pietro, Giovanni, Giuda, agli Ebrei) e l'<b>Apocalisse</b> di Giovanni, in un greco volutamente ruvido, ricco di semitismi.</li>
</ul>
<p>I testi originali non ci sono giunti: abbiamo migliaia di <b>manoscritti</b> posteriori. Il frammento più antico di Giovanni, il <b>P52</b> (conservato a Manchester), si fa risalire al II secolo (c. 125-150); i grandi codici onciali del IV secolo, il <b>Vaticano</b> e il <b>Sinaitico</b>, contengono quasi tutto. Nel 1516 <b>Erasmo da Rotterdam</b> pubblicò la prima edizione greca a stampa del Nuovo Testamento (<i>Novum Instrumentum</i>), alla base delle traduzioni della Riforma.</p>`
    },
    {
      type: `svg`, title: `Dal greco classico alla koinè`,
      caption: `Dal dialetto attico del V secolo a.C. alla lingua comune, fino al greco bizantino.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="28" font-size="18" font-weight="bold" fill="#1e3a8a" text-anchor="middle">LE FASI DEL GRECO</text>
<line x1="30" y1="150" x2="570" y2="150" stroke="#1e3a8a" stroke-width="4"/>
<circle cx="70" cy="150" r="10" fill="#3b82f6"/>
<text x="70" y="124" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Omero</text>
<text x="70" y="188" font-size="14" fill="#1e293b" text-anchor="middle">VIII sec. a.C.</text>
<circle cx="190" cy="150" r="10" fill="#16a34a"/>
<text x="190" y="124" font-size="15" font-weight="bold" fill="#14532d" text-anchor="middle">Attico classico</text>
<text x="190" y="188" font-size="14" fill="#1e293b" text-anchor="middle">V-IV sec. a.C.</text>
<circle cx="315" cy="150" r="10" fill="#f59e0b"/>
<text x="315" y="124" font-size="15" font-weight="bold" fill="#78350f" text-anchor="middle">Koinè</text>
<text x="315" y="188" font-size="14" fill="#1e293b" text-anchor="middle">III a.C. - III d.C.</text>
<circle cx="440" cy="150" r="10" fill="#ef4444"/>
<text x="440" y="124" font-size="15" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Nuovo Testamento</text>
<text x="440" y="188" font-size="14" fill="#1e293b" text-anchor="middle">I-II sec. d.C.</text>
<circle cx="545" cy="150" r="10" fill="#a855f7"/>
<text x="545" y="124" font-size="15" font-weight="bold" fill="#581c87" text-anchor="middle">Bizantino</text>
<text x="545" y="188" font-size="14" fill="#1e293b" text-anchor="middle">dal IV sec.</text>
<text x="300" y="250" font-size="15" fill="#334155" text-anchor="middle">La lingua cambia: duale e ottativo spariscono, nascono nuove forme.</text>
</svg>`
    },
    {
      type: `quiz`, title: `Mini-quiz: la koinè e i libri`,
      questions: [
        { type: `mc`, q: `Che cosa è la Septuaginta?`, options: [`la traduzione greca della Bibbia ebraica`, `una raccolta di lettere di Paolo`, `un vangelo apocrifo`], answer: 0, explain: `Tradotta ad Alessandria; detta "dei Settanta".` },
        { type: `tf`, q: `Il Nuovo Testamento è stato scritto in latino.`, answer: false, explain: `Fu scritto in greco koinè.` },
        { type: `mc`, q: `Quale Vangelo è considerato il più antico?`, options: [`Marco`, `Giovanni`, `Luca`], answer: 0, explain: `Marco, c. 65-70.` },
        { type: `mc`, q: `Che cosa significa εὐαγγέλιον?`, options: [`buona notizia`, `legge`, `preghiera`], answer: 0, explain: `Da eu- (bene) e angelos (messaggero).` }
      ]
    },
    {
      type: `text`, title: `3. Leggere il greco del Nuovo Testamento`,
      html: `<p>Se conosci l'attico, la koinè è facilmente leggibile. Le <b>differenze principali</b>:</p>
<table>
<tr><th>Attico</th><th>Koinè del N.T.</th></tr>
<tr><td>ottativo molto usato</td><td>quasi scomparso (resta in formule: <i>μὴ γένοιτο</i>, "non sia mai")</td></tr>
<tr><td>infinito dopo molti verbi</td><td>spesso <i>ἵνα</i> + congiuntivo</td></tr>
<tr><td>duale</td><td>scomparso</td></tr>
<tr><td>aoristo forte e sigmatico distinti</td><td>desinenze mescolate: <i>εἶπαν</i>, <i>ἦλθαν</i></td></tr>
<tr><td>verbi in -μι</td><td>tendono a passare ai verbi in -ω</td></tr>
<tr><td>costruzioni articolate</td><td>più paratassi (<i>καὶ ... καὶ ...</i>), sintassi più semplice</td></tr>
<tr><td>uso del participio ricchissimo</td><td>ancora presente, ma meno raffinato</td></tr>
</table>
<p>Si aggiungono <b>semitismi</b>: espressioni che calcano l'ebraico o l'aramaico (per esempio <i>καὶ ἐγένετο</i>, "e avvenne"; <i>ἀμήν</i>, "in verità") e <b>latinismi</b> (<i>κεντυρίων</i>, centurione; <i>δηνάριον</i>, denaro).</p>`
    },
    {
      type: `example`, title: `Leggiamo: il prologo di Giovanni`,
      html: `<p><i>Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.</i> (Gv 1,1)</p>
<ul>
<li><i>Ἐν ἀρχῇ</i>: "in principio": richiama il primo versetto della Genesi greca (<i>Ἐν ἀρχῇ ἐποίησεν ὁ θεός...</i>);</li>
<li><i>ἦν</i>: imperfetto di <i>εἰμί</i>, "era" (esisteva già);</li>
<li><i>ὁ λόγος</i>: "la Parola" ma anche "la ragione": termine caro ai filosofi greci (Eraclito, gli Stoici);</li>
<li><i>πρὸς τὸν θεόν</i>: "presso Dio" (<i>πρός</i> + accusativo indica relazione);</li>
<li><i>θεὸς ἦν ὁ λόγος</i>: il predicato <i>θεός</i> è <b>senza articolo</b> e sta prima del soggetto <i>ὁ λόγος</i>, che invece ha l'articolo: la regola dell'articolo ti permette di distinguere soggetto e predicato.</li>
</ul>
<p>Al v. 14: <i>καὶ ὁ λόγος σὰρξ ἐγένετο</i>, "e la Parola divenne carne".</p>`
    },
    {
      type: `example`, title: `Leggiamo: una frase di Giovanni 3,16`,
      html: `<p><i>Οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον...</i> "Così infatti Dio ha amato il mondo...".</p>
<ul>
<li><i>ἠγάπησεν</i> è l'aoristo di <i>ἀγαπάω</i>, un <b>verbo contratto in -άω</b> (come <i>τιμάω</i>, che hai studiato al primo anno): il tema <i>ἀγαπα-</i> allunga la vocale in <i>ἀγαπη-</i>, e aggiunge <i>-σ-</i> e la desinenza <i>-εν</i>. Ricorda anche l'aumento: <i>ἠ-</i>, da <i>ἀ-</i> con vocale lunga;</li>
<li><i>οὕτως</i>: avverbio, "così";</li>
<li><i>τὸν κόσμον</i>: accusativo oggetto di seconda declinazione, "il mondo" (ordine, bellezza, universo).</li>
</ul>
<p>La parola <b>ἀγάπη</b> in greco classico è rara; nel Nuovo Testamento diventa la parola principale per l'amore, accanto a <i>φιλία</i> (amicizia) ed <i>ἔρως</i> (desiderio). In 1 Corinzi 13,13: <i>νυνὶ δὲ μένει πίστις, ἐλπίς, ἀγάπη, τὰ τρία ταῦτα· μείζων δὲ τούτων ἡ ἀγάπη</i>, "ora dunque rimangono fede, speranza, amore, queste tre cose; ma la più grande di esse è l'amore".</p>`
    },
    {
      type: `decision`, title: `Anni 50 d.C.: in che lingua scrive Paolo ai cristiani di Roma?`,
      html: `<p>Sei <b>Paolo di Tarso</b>, ebreo della diaspora, cittadino romano, formato al greco e alla Scrittura. Vuoi scrivere una lettera importante alla comunità cristiana di <b>Roma</b>, che non conosci di persona. Devi scegliere una lingua per farti capire dal maggior numero possibile di fratelli e per far circolare la lettera.</p>`,
      question: `Quale lingua scegli?`,
      options: [
        { label: `L'ebraico, lingua della Scrittura.`, outcome: `Sarebbe comprensibile a pochi: nelle comunità della diaspora e nelle città dell'impero la maggioranza non sapeva leggerlo.` },
        { label: `Il latino, lingua dell'impero.`, outcome: `A Roma lo parlavano tutti, ma nelle comunità cristiane la lingua comune, di commercio e di cultura, era il greco; la comunità romana era in gran parte di origine orientale e greco-parlante.` },
        { label: `Il greco koinè.`, outcome: `È ciò che fece Paolo (Lettera ai Romani, c. 56-58): il greco era la lingua franca del Mediterraneo orientale e parlata anche da molti a Roma.` }
      ],
      answer: 2,
      explain: `Il greco koinè era la lingua comune di mercanti, schiavi, funzionari e viaggiatori. La Lettera ai Romani, in greco, mostra che la comunità cristiana di Roma era in gran parte grecofona. Il greco rimase la lingua del cristianesimo a Roma fino al III secolo, quando il latino prese il sopravvento.`
    },
    {
      type: `text`, title: `4. Parole greche nel nostro lessico`,
      html: `<p>Molte parole religiose e culturali arrivano dal greco del Nuovo Testamento:</p>
<table>
<tr><th>Greco</th><th>Significato originale</th><th>Italiano</th></tr>
<tr><td>ἐκκλησία</td><td>assemblea (dei cittadini)</td><td>chiesa</td></tr>
<tr><td>ἐπίσκοπος</td><td>sorvegliante</td><td>vescovo</td></tr>
<tr><td>πρεσβύτερος</td><td>più anziano</td><td>prete</td></tr>
<tr><td>διάκονος</td><td>servitore</td><td>diacono</td></tr>
<tr><td>ἀπόστολος</td><td>inviato</td><td>apostolo</td></tr>
<tr><td>βάπτισμα</td><td>immersione</td><td>battesimo</td></tr>
<tr><td>Χριστός</td><td>unto (traduzione dell'ebraico Messia)</td><td>Cristo</td></tr>
<tr><td>εὐχαριστία</td><td>ringraziamento</td><td>eucaristia</td></tr>
<tr><td>μετάνοια</td><td>cambiamento di mente</td><td>conversione, pentimento</td></tr>
<tr><td>ἄγγελος</td><td>messaggero</td><td>angelo</td></tr>
</table>
<p>Un esempio di verbo da leggere: <i>μετανοεῖτε καὶ πιστεύετε ἐν τῷ εὐαγγελίῳ</i> (Mc 1,15), "convertitevi e credete al Vangelo". Il verbo <i>μετανοέω</i> è un verbo contratto in -έω, come <i>φιλέω</i>.</p>`
    },
    {
      type: `text`, title: `5. I Padri della Chiesa di lingua greca`,
      html: `<p>Con "<b>Padri della Chiesa</b>" si indicano gli scrittori cristiani dei primi secoli, riconosciuti come maestri della fede. Quelli di lingua greca, o "Padri greci", sono molti:</p>
<ul>
<li><b>Padri apostolici</b> (I-II secolo): <i>Clemente Romano</i> (lettera ai Corinzi, c. 96), <i>Ignazio di Antiochia</i> (lettere scritte in viaggio verso il martirio), <i>Policarpo di Smirne</i>; la <i>Didaché</i> ("Insegnamento dei dodici apostoli") è uno dei primi manuali di vita cristiana;</li>
<li><b>Apologisti</b> (II secolo): <i>Giustino</i>, filosofo e martire a Roma (c. 165), difende il cristianesimo con strumenti platonici e stoici;</li>
<li><b>Scuola di Alessandria</b>: <i>Clemente</i> e soprattutto <b>Origene</b> (c. 185-253), che compilò gli <i>Esapla</i>, edizione a sei colonne della Bibbia ebraica e greca;</li>
<li><b>Eusebio di Cesarea</b> (c. 260-340), autore della <i>Storia ecclesiastica</i>, la prima grande storia del cristianesimo;</li>
<li><b>Atanasio di Alessandria</b> (c. 296-373), avversario dell'arianesimo: il <b>Concilio di Nicea</b> (325) definì il Figlio <i>ὁμοούσιος</i>, "della stessa sostanza" del Padre;</li>
<li><b>I Cappadoci</b>: <i>Basilio il Grande</i> (c. 330-379), <i>Gregorio di Nazianzo</i> e <i>Gregorio di Nissa</i>, che unirono teologia e cultura classica;</li>
<li><b>Giovanni Crisostomo</b> (c. 349-407), vescovo di Costantinopoli, eccezionale predicatore. Il soprannome <i>Crisostomo</i>, "bocca d'oro", è lo stesso già dato al sofista Dione di Prusa.</li>
</ul>
<p>Questi autori scrivono con tecniche retoriche del tutto "classiche": molti di loro studiarono retorica e filosofia ad Atene, e la cultura greca diventa il linguaggio per esprimere il pensiero cristiano.</p>`
    },
    {
      type: `curiosity`, title: `Le parole di Menandro in Paolo`,
      html: `<p>Nel Nuovo Testamento ci sono citazioni di autori classici. In 1 Corinzi 15,33 Paolo scrive: <i>φθείρουσιν ἤθη χρηστὰ ὁμιλίαι κακαί</i>, "le cattive compagnie corrompono i buoni costumi", un verso che la tradizione attribuisce a <b>Menandro</b>, il commediografo della lezione precedente. Negli Atti (17,28) Paolo, parlando agli Ateniesi sull'Areopago, cita un verso di poeti greci: "poiché di lui siamo stirpe" (da Arato, <i>Fenomeni</i>). Il cristianesimo nascente, quindi, dialoga con la cultura greca.</p>`
    },
    {
      type: `curiosity`, title: `La lingua cambia: itacismo e pronuncia`,
      html: `<p>Nei manoscritti del Nuovo Testamento sono frequenti gli errori di ortografia: <i>η, ι, ει, οι, υ</i> si pronunciavano ormai tutte più o meno [i], fenomeno detto <b>itacismo</b>. Per questo gli amanuensi confondevano <i>ἡμεῖς</i> ("noi") e <i>ὑμεῖς</i> ("voi") e certi passi hanno varianti testuali. Il "criticismo testuale" è proprio il lavoro di confrontare i manoscritti per ricostruire il testo originale.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per accostarsi al testo`,
      intro: `Tre percorsi per leggere il greco del Nuovo Testamento.`,
      tabs: [
        {
          label: `🗂️ Le parole del Vangelo`,
          html: `<p>Alcune parole che ricorrono spesso nei testi.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `λόγος`, back: `parola, discorso, ragione` },
            { front: `ἀγάπη`, back: `amore, carità` },
            { front: `πίστις`, back: `fede, fiducia` },
            { front: `ἐλπίς`, back: `speranza` },
            { front: `βασιλεία`, back: `regno` },
            { front: `ζωή`, back: `vita` },
            { front: `φῶς`, back: `luce` },
            { front: `ἀλήθεια`, back: `verità` }
          ] }
        },
        {
          label: `🔗 Classico e koinè a confronto`,
          html: `<table>
<tr><th>Frase</th><th>Attico classico</th><th>Koinè</th></tr>
<tr><td>"Voglio che tu venga"</td><td>θέλω σε ἐλθεῖν</td><td>θέλω ἵνα ἔλθῃς</td></tr>
<tr><td>"dissero"</td><td>εἶπον</td><td>εἶπαν</td></tr>
<tr><td>"che non sia mai"</td><td>(ottativo di augurio)</td><td>μὴ γένοιτο (formula rimasta)</td></tr>
</table>`
        },
        {
          label: `📖 Confronta due traduzioni`,
          html: `<p>Prendi Giovanni 1,1 in due traduzioni italiane: troverai "il Verbo", "la Parola", "il Logos". Chiediti perché ogni traduttore sceglie parole diverse: <i>λόγος</i> significa insieme parola, discorso, ragione, ordine. Il lavoro del traduttore è la scelta tra significati che il greco tiene uniti.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: Nuovo Testamento e Padri`,
      nodes: [
        { id: `ko`, label: `Koinè`, x: 50, y: 6, color: `#a855f7`, html: `Lingua comune dal IV sec. a.C.`, why: `Nata con le conquiste di Alessandro, permette a popoli diversi di comunicare.` },
        { id: `lx`, label: `Settanta`, x: 20, y: 38, color: `#3b82f6`, html: `Bibbia ebraica in greco.`, why: `Offre al Nuovo Testamento il vocabolario religioso e le citazioni.` },
        { id: `nt`, label: `Nuovo Testamento`, x: 50, y: 38, color: `#ef4444`, html: `27 libri: Vangeli, Atti, lettere, Apocalisse.`, why: `Le comunità cristiane delle città greche scrivono nella lingua che tutti capiscono.` },
        { id: `pa`, label: `Padri greci`, x: 82, y: 38, color: `#16a34a`, html: `Origene, Atanasio, Cappadoci, Crisostomo.`, why: `Usano la filosofia e la retorica greca per spiegare e difendere la fede.` },
        { id: `ma`, label: `Manoscritti e critica del testo`, x: 30, y: 72, color: `#f59e0b`, html: `P52, Vaticano, Sinaitico.`, why: `Servono a ricostruire il testo originale e a capire le varianti.` },
        { id: `lx2`, label: `Lessico moderno`, x: 72, y: 72, color: `#0891b2`, html: `Chiesa, vescovo, battesimo, angelo.`, why: `Il vocabolario del cristianesimo in Europa è greco, spesso passato attraverso il latino.` }
      ],
      edges: [[`ko`, `lx`, `rende possibile la`], [`ko`, `nt`, `lingua del`], [`nt`, `pa`, `è commentato dai`], [`nt`, `ma`, `è trasmesso nei`], [`pa`, `lx2`, `forma il`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: Padri e lingua`,
      questions: [
        { type: `mc`, q: `Che cosa è la Didaché?`, options: [`un antico manuale di vita cristiana`, `un vangelo`, `un'opera di Platone`], answer: 0, explain: `"Insegnamento dei dodici apostoli", I-II secolo.` },
        { type: `tf`, q: `Il Concilio di Nicea si tenne nel 325.`, answer: true, explain: `Contro l'arianesimo.` },
        { type: `mc`, q: `Da che cosa deriva la parola "vescovo"?`, options: [`ἐπίσκοπος, sorvegliante`, `βάπτισμα`, `ἀπόστολος`], answer: 0, explain: `Episkopos, "colui che sorveglia".` },
        { type: `mc`, q: `Quale autore compilò gli Esapla?`, options: [`Origene`, `Eusebio`, `Giustino`], answer: 0, explain: `Edizione a sei colonne della Bibbia.` }
      ]
    }
  ],
  glossary: [
    { t: `Koinè`, d: `La lingua greca comune dell'età ellenistica e romana.` },
    { t: `Septuaginta (LXX)`, d: `La traduzione greca della Bibbia ebraica, nata ad Alessandria.` },
    { t: `Vangelo (εὐαγγέλιον)`, d: `Letteralmente "buona notizia"; anche genere letterario dei racconti su Gesù.` },
    { t: `Semitismo`, d: `Espressione greca modellata sull'ebraico o sull'aramaico.` },
    { t: `Itacismo`, d: `Confusione di vocali e dittonghi pronunciati [i], fonte di errori nei manoscritti.` },
    { t: `Critica testuale`, d: `Disciplina che confronta i manoscritti per ricostruire il testo originale.` },
    { t: `Codice onciale`, d: `Manoscritto in lettere maiuscole arrotondate (come il Sinaitico e il Vaticano).` },
    { t: `Padri della Chiesa`, d: `Scrittori cristiani dei primi secoli, maestri della fede e della teologia.` },
    { t: `Apologisti`, d: `Autori del II secolo che difendevano il cristianesimo dalle accuse dei pagani.` },
    { t: `Homoousios (ὁμοούσιος)`, d: `"Della stessa sostanza": formula del Concilio di Nicea sul rapporto tra Padre e Figlio.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `In quale lingua fu scritto il Nuovo Testamento?`, options: [`greco koinè`, `latino`, `ebraico`], answer: 0, explain: `Il greco comune dell'età imperiale.` },
      { type: `mc`, q: `Quale libro fu scritto per primo, secondo gli studiosi?`, options: [`le lettere di Paolo (1 Tessalonicesi)`, `l'Apocalisse`, `il Vangelo di Giovanni`], answer: 0, explain: `Intorno al 50-51 d.C.` },
      { type: `tf`, q: `Giovanni 1,1 inizia con le parole Ἐν ἀρχῇ ἦν ὁ λόγος.`, answer: true, explain: `"In principio era il Verbo".` },
      { type: `mc`, q: `Quale struttura sostituisce spesso l'infinito nella koinè?`, options: [`ἵνα + congiuntivo`, `l'ottativo`, `il duale`], answer: 0, explain: `Esempio: θέλω ἵνα ἔλθῃς.` },
      { type: `mc`, q: `Da che cosa deriva la parola "chiesa"?`, options: [`ἐκκλησία, "assemblea"`, `ἐλπίς, "speranza"`, `ἀγάπη, "amore"`], answer: 0, explain: `Ekklesia indicava l'assemblea dei cittadini.` },
      { type: `mc`, q: `Che cosa è ἠγάπησεν?`, options: [`aoristo di ἀγαπάω, 3ª singolare`, `presente di ἀγαπάω`, `futuro di ἀγάπη`], answer: 0, explain: `Con aumento e allungamento: ἠγάπη-σ-εν.` },
      { type: `tf`, q: `P52 è un frammento molto antico del Vangelo di Giovanni.`, answer: true, explain: `Risale al II secolo.` },
      { type: `text`, q: `Come si chiama la traduzione greca della Bibbia ebraica, "dei Settanta"?`, answer: [`septuaginta`, `settanta`, `lxx`, `la septuaginta`], explain: `La Septuaginta (LXX), nata ad Alessandria.` },
      { type: `mc`, q: `Quale Padre è detto "bocca d'oro"?`, options: [`Giovanni Crisostomo`, `Origene`, `Atanasio`], answer: 0, explain: `Chrysostomos, vescovo di Costantinopoli.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Morte di Alessandro`, `Lettere di Paolo`, `Vangelo di Marco`, `Concilio di Nicea`], explain: `323 a.C., c. 50, c. 65-70, 325 d.C.` }
    ]
  }
});

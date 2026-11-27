TOPIC('it', {
  id: "l3-ing-shakespeare",
  title: "William Shakespeare",
  intro: "\"To be, or not to be: that is the question.\" Anche chi non ha mai letto una sua opera conosce questa frase. <b>William Shakespeare</b> (1564–1616) è il più grande autore teatrale della lingua inglese e uno dei massimi della letteratura mondiale: a più di quattrocento anni dalla morte i suoi drammi si recitano ogni sera in tutto il mondo, diventano film, balletti, opere liriche, fumetti. In questa lezione di letteratura (con spiegazioni in italiano e brani in inglese) incontriamo l'<b>uomo</b>, il <b>teatro elisabettiano</b> in cui lavorava, e tre capolavori: <i>Romeo and Juliet</i>, <i>Hamlet</i> e <i>Macbeth</i>. Impareremo anche a leggere i suoi versi, la <b>blank verse</b>, e a riconoscere perché le sue parole funzionano ancora.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "1. L'uomo e il suo tempo",
      html: `<p><b>William Shakespeare</b> nacque a <b>Stratford-upon-Avon</b>, nel Warwickshire, nell'aprile del 1564 (fu battezzato il 26 aprile; il 23 aprile è la data tradizionale della nascita). Era figlio di John, artigiano e commerciante di guanti, e di Mary Arden. Nel 1582 sposò Anne Hathaway, da cui ebbe tre figli: Susanna e i gemelli Hamnet e Judith. Non sappiamo con certezza come si formò: frequentò probabilmente la scuola di grammatica del paese, dove si studiavano soprattutto il latino e i classici.</p>
<p>Verso la fine degli anni Ottanta del Cinquecento si trasferì a <b>Londra</b>, dove lavorò come <b>attore</b>, <b>autore</b> e <b>socio</b> di una compagnia teatrale. Fu la compagnia dei <b>Lord Chamberlain's Men</b>, che nel 1603, con l'avvento di Giacomo I, divenne i <b>King's Men</b>, sotto la protezione diretta del re. Shakespeare guadagnò bene, comprò una grande casa a Stratford (New Place) e vi tornò a vivere negli ultimi anni. Morì il <b>23 aprile 1616</b>, nello stesso anno di Cervantes.</p>
<p>Scrisse circa <b>37–39 drammi</b> (il numero dipende da come si contano le opere scritte in collaborazione), <b>154 sonetti</b> e alcuni poemi narrativi. Nel <b>1623</b>, sette anni dopo la sua morte, due compagni attori, John Heminges e Henry Condell, pubblicarono il <b>First Folio</b>: 36 drammi in un grande volume. Senza di esso metà delle sue opere, tra cui <i>Macbeth</i> e <i>La tempesta</i>, non sarebbero arrivate fino a noi.</p>
<p>Il periodo in cui visse è detto <b>età elisabettiana</b> (dalla regina Elisabetta I, 1558–1603) e poi <b>giacobiana</b> (da Giacomo I, 1603–1625): l'Inghilterra, dopo la sconfitta dell'Invincibile Armata spagnola (1588), era una potenza in crescita, con una cultura vivacissima, e il Rinascimento italiano ispirava molti autori (non per caso gran parte dei drammi è ambientata in Italia: Verona, Venezia, Padova, Roma).</p>`
    },
    {
      type: "widget",
      title: "Cronologia essenziale",
      widget: "timeline",
      options: {
        events: [
          { year: 1564, label: "Nasce a Stratford-upon-Avon", icon: "👶" },
          { year: 1582, label: "Sposa Anne Hathaway", icon: "💍" },
          { year: 1595, label: "Romeo and Juliet (circa)", icon: "🌹" },
          { year: 1599, label: "Si apre il Globe Theatre", icon: "🎭" },
          { year: 1600, label: "Hamlet (circa)", icon: "💀" },
          { year: 1606, label: "Macbeth (circa)", icon: "🗡️" },
          { year: 1613, label: "Il Globe brucia durante Henry VIII", icon: "🔥" },
          { year: 1616, label: "Muore a Stratford", icon: "🕯️" },
          { year: 1623, label: "Esce il First Folio", icon: "📚" }
        ],
        unit: "anni"
      },
      caption: "Le date di composizione dei drammi sono approssimative: Shakespeare non li datava, gli studiosi le ricavano da fonti, prime edizioni e riferimenti storici."
    },
    {
      type: "text",
      title: "2. Il teatro elisabettiano e il Globe",
      html: `<p>Nel Cinquecento a Londra il teatro era lo spettacolo popolare per eccellenza, ma era visto con sospetto dalle autorità cittadine, che lo consideravano fonte di disordini e di contagio (la peste chiudeva spesso i teatri). Per questo i primi teatri stabili furono costruiti <b>fuori dalle mura</b>, sulla riva sud del Tamigi (Southwark).</p>
<p>Il <b>Globe Theatre</b> fu costruito nel <b>1599</b> dalla compagnia di Shakespeare. Era un edificio a pianta circolare o poligonale, <b>scoperto</b> al centro, con tre ordini di gallerie coperte. Davanti al palco sporgente, nel cortile aperto (<b>the pit</b> o <b>yard</b>), stavano in piedi gli spettatori più poveri, detti <b>groundlings</b>, che pagavano un solo penny; nelle gallerie, sedute, la gente più agiata pagava di più. Gli spettacoli si facevano di pomeriggio, alla luce naturale, e potevano accogliere circa 3000 persone.</p>
<ul>
<li><b>Scenografia quasi assente</b>: pochi oggetti di scena, costumi sontuosi. Era il <b>linguaggio</b> a creare il luogo e il momento: se un personaggio dice \"Look, the morn in russet mantle clad / Walks o'er the dew\" (Hamlet, atto 1), gli spettatori vedono l'alba, anche se sono le tre del pomeriggio.</li>
<li><b>Tutti gli attori erano uomini</b>: i ruoli femminili (Giulietta, Lady Macbeth, Ofelia) erano recitati da ragazzi. Le donne salirono sul palcoscenico professionale solo dopo la Restaurazione, nel 1660.</li>
<li><b>Il pubblico</b> era rumoroso: mangiava, commentava, rideva, fischiava. Per questo i drammi mescolano scene alte e comiche, duelli e battute.</li>
</ul>
<p>Il Globe <b>bruciò</b> nel 1613, durante una rappresentazione di <i>Henry VIII</i>: un colpo di cannone di scena incendiò il tetto di paglia. Fu ricostruito nel 1614 e i teatri furono chiusi nel 1642 dal Parlamento, a maggioranza puritana. Una <b>ricostruzione moderna</b>, lo <i>Shakespeare's Globe</i>, è stata inaugurata a Londra nel 1997, vicino al luogo originale, e ancora oggi vi si rappresentano i suoi drammi.</p>`
    },
    {
      type: "svg",
      title: "Il Globe visto dall'alto e di lato",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="150" width="300" height="110" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="120" width="300" height="30" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="90" width="300" height="30" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<polygon points="40,90 380,90 340,55 80,55" fill="#b45309" stroke="#78350f" stroke-width="3"/>
<rect x="140" y="170" width="140" height="60" fill="#a16207" stroke="#78350f" stroke-width="3"/>
<text x="210" y="205" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">STAGE</text>
<rect x="130" y="130" width="160" height="22" fill="#b45309" opacity="0.5"/>
<text x="210" y="248" font-size="14" fill="#78350f" text-anchor="middle">the yard (groundlings)</text>
<text x="210" y="80" font-size="14" fill="#ffffff" text-anchor="middle">tetto di paglia</text>
<text x="70" y="140" font-size="14" fill="#78350f">gallerie coperte</text>
<text x="400" y="80" font-size="16" fill="#334155" font-weight="bold">Globe Theatre, 1599</text>
<text x="400" y="110" font-size="16" fill="#334155">circa 3000 spettatori</text>
<text x="400" y="140" font-size="16" fill="#334155">palco sporgente</text>
<text x="400" y="170" font-size="16" fill="#334155">luce naturale, nessuna</text>
<text x="400" y="190" font-size="16" fill="#334155">scenografia</text>
<text x="400" y="230" font-size="16" fill="#334155">attori solo maschi</text>
</svg>`,
      caption: "Schema semplificato: il palco entra nel cortile aperto, circondato da gallerie coperte."
    },
    {
      type: "text",
      title: "3. Il linguaggio di Shakespeare: blank verse e sonetti",
      html: `<p>Shakespeare scrive i drammi soprattutto in <b>versi</b>, in una forma detta <b>blank verse</b> (verso sciolto): <b>pentametro giambico non rimato</b>. Ogni verso ha <b>10 sillabe</b> divise in 5 coppie (<i>iambs</i>) formate da una sillaba debole seguita da una forte: <b>da-DUM, da-DUM, da-DUM, da-DUM, da-DUM</b>, un ritmo vicino a quello del battito del cuore e del parlato inglese. Esempio (Romeo and Juliet, atto 2, scena 2):</p>
<p style="text-align:center"><i>But SOFT, what LIGHT through YON-der WIN-dow BREAKS?</i></p>
<p>Sono 10 sillabe, con l'accento sulla seconda di ogni coppia. I personaggi nobili parlano in versi, quelli popolari e comici spesso in <b>prosa</b>: cambiare registro significa cambiare livello sociale o umore.</p>
<p>I <b>sonetti</b> sono invece poesie di 14 versi in pentametro giambico, con rime nel <b>modello inglese</b>: tre quartine (ABAB CDCD EFEF) e un distico finale (GG). Il <b>Sonnet 18</b> è il più celebre:</p>
<p style="text-align:center"><i>Shall I compare thee to a summer's day?<br>Thou art more lovely and more temperate.</i></p>
<p>Il poeta paragona la persona amata a un giorno d'estate e conclude che, a differenza dell'estate, la sua bellezza vivrà per sempre nei versi.</p>
<p><b>Lingua.</b> L'inglese di Shakespeare è l'<b>Early Modern English</b>: ha ancora <i>thou/thee/thy</i> (tu), le forme verbali in <i>-est/-eth</i> (<i>thou art</i>, <i>he doth</i>) e usa <i>wherefore</i> per \"perché\" (Juliet's \"wherefore art thou Romeo?\" significa \"<i>perché</i> sei Romeo?\", non \"dove sei?\"). Ma quasi tutto è comprensibile: l'inglese era già quello moderno. A Shakespeare si attribuisce la <b>prima attestazione scritta</b> di moltissime parole ed espressioni (per esempio <i>eyeball</i>, <i>lonely</i>, <i>swagger</i>, <i>break the ice</i>), anche se è difficile sapere quante inventò davvero e quante già circolavano nel parlato. Di certo ha arricchito la lingua più di ogni altro autore.</p>`
    },
    {
      type: "remember",
      title: "Parole chiave del teatro",
      html: `<ul>
<li><b>Act / Scene</b>: atto / scena (i drammi sono in 5 atti). \"Act 3, Scene 1\".</li>
<li><b>Soliloquy</b>: monologo in cui il personaggio parla da solo, rivelando i suoi pensieri (il più famoso: \"To be, or not to be\").</li>
<li><b>Aside</b>: battuta detta al pubblico che gli altri personaggi non sentono.</li>
<li><b>Tragedy, comedy, history</b>: la divisione del First Folio. Le tragedie finiscono con la morte del protagonista, le commedie con matrimoni e riconciliazioni.</li>
<li><b>Tragic hero</b>: eroe con una qualità grande e un difetto fatale (<i>tragic flaw</i>) che lo porta alla rovina.</li>
<li><b>Blank verse</b>: pentametro giambico non rimato.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'autore e il teatro",
      questions: [
        { type: "mc", q: "Dove nacque Shakespeare?", options: ["Londra", "Stratford-upon-Avon", "Oxford"], answer: 1, explain: "Nacque a Stratford-upon-Avon nel 1564; a Londra lavorò come attore e autore." },
        { type: "mc", q: "Chi erano i \"groundlings\" del Globe?", options: ["gli spettatori in piedi nel cortile, che pagavano un penny", "gli attori protagonisti", "i musicisti nella galleria"], answer: 0, explain: "I groundlings stavano in piedi davanti al palco, nel cortile scoperto: il pubblico popolare." },
        { type: "tf", q: "Ai tempi di Shakespeare le parti femminili erano recitate da ragazzi.", answer: true, explain: "Le donne non potevano recitare nei teatri pubblici; furono ammesse solo dopo il 1660." }
      ]
    },
    {
      type: "text",
      title: "4. Romeo and Juliet (circa 1595)",
      html: `<p><b>Romeo and Juliet</b> è una tragedia d'amore ambientata a <b>Verona</b>, dove due famiglie nobili, i <b>Montagues</b> e i <b>Capulets</b>, sono nemiche da generazioni. Il <b>Prologue</b> annuncia fin dall'inizio il finale (un coro in forma di sonetto): <i>\"A pair of star-cross'd lovers take their life.\"</i> Il pubblico sa che andrà a finire male: la tragedia sta nel <i>come</i>.</p>
<p><b>Trama.</b> Romeo Montague, innamorato di Rosaline, entra in incognito a un ballo dei Capulet e incontra <b>Juliet</b>, la figlia quasi quattordicenne dei padroni di casa: è amore a prima vista. Scoprono troppo tardi di appartenere alle due famiglie nemiche. Nella celebre <b>scena del balcone</b> (atto 2, scena 2) si giurano amore; Juliet dice:</p>
<p style="text-align:center"><i>\"What's in a name? That which we call a rose<br>By any other name would smell as sweet.\"</i></p>
<p>Frate Lorenzo (<b>Friar Laurence</b>) li sposa in segreto, sperando che il matrimonio riconcili le famiglie. Ma il cugino di Juliet, Tybalt, uccide Mercutio (<b>Mercutio</b>), amico di Romeo; Romeo vendica l'amico uccidendo Tybalt e viene <b>bandito</b> da Verona. Per evitare di sposare il conte Paris, Juliet beve una pozione che la fa sembrare morta; il messaggio di Frate Lorenzo non arriva a Romeo, che, credendola morta, si avvelena accanto a lei. Juliet si sveglia, vede Romeo morto e si uccide con il suo pugnale. Solo davanti ai due corpi i padri si riconciliano.</p>
<p><b>Temi.</b> L'<b>amore</b> contro l'<b>odio</b> (lo scontro tra famiglie); il ruolo del <b>destino</b> (il Prologo parla di <i>star-cross'd</i>, \"contrariati dalle stelle\") e del <b>caso</b>; la <b>fretta</b> (tutto accade in pochi giorni); i contrasti tra luce e buio, giovinezza e morte. La fonte è un poema inglese di <b>Arthur Brooke</b> (1562), a sua volta derivato da novelle italiane (Luigi da Porto, Matteo Bandello): Shakespeare trasformò una storia già nota in un capolavoro.</p>`
    },
    {
      type: "text",
      title: "5. Hamlet (circa 1600)",
      html: `<p><b>Hamlet</b> è la tragedia più lunga e più studiata. Ambientata nel castello di <b>Elsinore</b> in Danimarca, racconta di Amleto, principe di Danimarca, studente a Wittenberg, che torna a casa per il funerale del padre e trova la madre, la regina <b>Gertrude</b>, già sposata con lo zio <b>Claudius</b>, ora re.</p>
<p><b>Trama.</b> Il <b>fantasma</b> del padre appare al principe e gli rivela di essere stato avvelenato da Claudius: gli chiede vendetta. Amleto è diviso: è davvero un fantasma o un inganno del diavolo? Per avere la prova organizza una messinscena teatrale davanti al re, <i>The Mousetrap</i>, che riproduce l'omicidio: <i>\"The play's the thing / Wherein I'll catch the conscience of the king.\"</i> Claudius si tradisce. Amleto finge follia, respinge <b>Ophelia</b>, che impazzisce e muore annegata; uccide per errore il padre di lei, Polonius. Alla fine, in un duello truccato con la spada avvelenata, muoiono Gertrude, Claudius, Laertes (fratello di Ophelia) e lo stesso Hamlet; il principe norvegese Fortinbras prende il potere.</p>
<p>Il <b>soliloquio</b> più celebre (atto 3, scena 1) comincia così:</p>
<p style="text-align:center"><i>\"To be, or not to be: that is the question:<br>Whether 'tis nobler in the mind to suffer<br>The slings and arrows of outrageous fortune…\"</i></p>
<p>Amleto riflette se sia meglio vivere soffrendo o morire, e ciò che teme è l'ignoto dopo la morte: <i>\"the undiscover'd country\"</i>. Un'altra battuta famosa (atto 1) è di una sentinella, Marcellus: <i>\"Something is rotten in the state of Denmark.\"</i></p>
<p><b>Temi.</b> L'<b>esitazione</b> e la difficoltà di agire; la <b>vendetta</b> e la giustizia; la <b>follia</b> reale o finta; la <b>corruzione</b> del potere; il <b>teatro nel teatro</b>, per cui realtà e finzione si specchiano.</p>`
    },
    {
      type: "decision",
      title: "Amleto: vendicare subito o cercare una prova?",
      html: "<p>Sei Amleto. Un fantasma che dice di essere tuo padre ti rivela che lo zio Claudius, ora re e marito di tua madre, lo ha avvelenato. Ti chiede di vendicarlo. Ma i fantasmi, secondo molti, possono essere inganni del diavolo, e uccidere un re senza prove ti farebbe passare per assassino e usurpatore.</p>",
      question: "Che cosa fai?",
      options: [
        { label: "Uccido subito Claudius", outcome: "Senza prove l'omicidio apparirebbe un regicidio: Hamlet sarebbe condannato e il trono resterebbe a un erede di Claudius. Ma risolverebbe il dubbio morale con la rapidità, e la tragedia finirebbe al primo atto." },
        { label: "Cerco una prova prima di agire", outcome: "È la scelta che compie Hamlet: mette in scena <i>The Mousetrap</i> per osservare la reazione del re. Ottiene la prova, ma guadagna tempo che permetterà a Claudius di reagire." },
        { label: "Parlo con Gertrude e il consiglio", outcome: "Sarebbe una via legale e civile, ma senza testimoni è la parola di un figlio 'forse pazzo' contro quella del re: probabilmente verrebbe zittito." }
      ],
      answer: 1,
      explain: "Hamlet sceglie di cercare una prova, e questa esitazione è il cuore del dramma: il suo pensiero è lucido ma lo rallenta, e la sua indecisione costa la vita a molte persone, compresa la sua. Per molti critici è proprio qui che nasce il fascino del personaggio, un eroe che pensa troppo per agire."
    },
    {
      type: "text",
      title: "6. Macbeth (circa 1606)",
      html: `<p><b>Macbeth</b> è la più breve e cupa delle grandi tragedie, scritta poco dopo l'ascesa al trono inglese di Giacomo I, che discendeva (secondo la tradizione) da Banquo ed era interessato alla stregoneria. La vicenda è liberamente ispirata alle <i>Chronicles</i> di Raphael Holinshed. È ambientata nella <b>Scozia</b> medievale.</p>
<p><b>Trama.</b> Macbeth, nobile e valoroso generale del re Duncan, vince una battaglia e, tornando, incontra tre <b>streghe</b> (<i>the Weird Sisters</i>) che lo salutano come \"Thane of Glamis, Thane of Cawdor, king hereafter\" e promettono a Banquo che i suoi discendenti saranno re. Subito dopo Macbeth viene nominato Thane of Cawdor: la prima profezia si avvera. Spinto dalla moglie, la ambiziosa <b>Lady Macbeth</b>, uccide Duncan nel sonno e prende la corona. Per timore delle profezie su Banquo, lo fa assassinare, ma al banchetto gli appare il suo <b>fantasma</b>. Il tiranno regna con il terrore; torna dalle streghe, che gli dicono che nessun \"uomo nato da donna\" potrà fargli del male e che sarà al sicuro finché la foresta di Birnam non si muoverà verso il castello di Dunsinane. Ma i soldati di Malcolm, figlio di Duncan, si camuffano con rami della foresta; <b>Macduff</b>, che era stato \"strappato\" dal grembo della madre (nato con parto cesareo), uccide Macbeth. Lady Macbeth, tormentata dai rimorsi, sonnambula, cerca di lavarsi via le macchie di sangue immaginarie (<i>\"Out, damned spot!\"</i>) e muore.</p>
<p><b>Temi.</b> L'<b>ambizione</b> senza limiti; il <b>senso di colpa</b>; il rapporto tra <b>destino e libero arbitrio</b> (le streghe predicono, ma è Macbeth a scegliere di uccidere); il <b>male</b> che si autoalimenta; l'<b>ambiguità</b>, riassunta nella frase delle streghe: <i>\"Fair is foul, and foul is fair.\"</i> Dopo aver capito che la sua vita non ha più senso, Macbeth pronuncia il famoso soliloquio: <i>\"Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day.\"</i></p>
<p>Nel mondo del teatro esiste una <b>superstizione</b>: chi dice il nome \"Macbeth\" dentro un teatro porta sfortuna; si usa dire <i>the Scottish play</i> (\"il dramma scozzese\").</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere un brano da vicino",
      html: `<p>Prendiamo questi versi di Macbeth (atto 4, scena 1), la formula delle streghe attorno al calderone:</p>
<p style="text-align:center"><i>\"Double, double toil and trouble;<br>Fire burn and cauldron bubble.\"</i></p>
<ul>
<li><b>Ritmo</b>: sono versi brevi di 7 sillabe, in <b>trochei</b> (DOU-ble, DOU-ble TOIL and TROU-ble), non in pentametro giambico: un ritmo da <b>incantesimo</b>, diverso dal parlato dei nobili. Cambiare ritmo serve a segnalare che i personaggi sono soprannaturali.</li>
<li><b>Suono</b>: ripetizione di <i>double, double</i>, <b>allitterazione</b> (<i>toil and trouble</i>), <b>rima</b> baciata (<i>trouble / bubble</i>).</li>
<li><b>Senso</b>: \"toil and trouble\" significa fatica e guai; l'incantesimo promette sventura a chi ascolta.</li>
</ul>
<p>Metodo per qualsiasi brano: 1) chi parla, a chi, in che situazione; 2) parole e immagini ricorrenti; 3) ritmo e suono; 4) che cosa cambia nel dramma dopo queste parole.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: Shakespeare nella vita di tutti i giorni",
      html: `<p>Molte espressioni inglesi comuni vengono da Shakespeare:</p>
<ul>
<li><b>\"All that glisters is not gold\"</b> (<i>The Merchant of Venice</i>; oggi si dice \"glitters\"): non è tutto oro quel che luccica.</li>
<li><b>\"Break the ice\"</b> (<i>The Taming of the Shrew</i>): rompere il ghiaccio.</li>
<li><b>\"Wild-goose chase\"</b> (<i>Romeo and Juliet</i>): inseguimento inutile.</li>
<li><b>\"Green-eyed monster\"</b> (<i>Othello</i>): la gelosia.</li>
<li><b>\"Wear my heart upon my sleeve\"</b> (<i>Othello</i>): mostrare apertamente i propri sentimenti.</li>
</ul>
<p>Ci sono anche titoli di libri e film che citano i suoi versi (<i>Brave New World</i> di Huxley viene da <i>The Tempest</i>), e adattamenti moderni: <i>West Side Story</i> (1957 a Broadway) è <i>Romeo and Juliet</i> nella New York dei gruppi giovanili rivali; <i>The Lion King</i> (1994) ricorda <i>Hamlet</i>; il film <i>Romeo + Juliet</i> di Baz Luhrmann (1996) trasporta il dramma in una città contemporanea mantenendo il testo originale.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Chi ha scritto Shakespeare?",
      html: `<p>Da oltre un secolo qualcuno mette in dubbio che l'uomo di Stratford, figlio di un guantaio e senza studi universitari, abbia scritto opere tanto colte. Sono state proposte candidature alternative (Francis Bacon, Christopher Marlowe, il conte di Oxford Edward de Vere). Gli <b>studiosi</b> concordano però che le prove storiche (il nome sul frontespizio delle edizioni a stampa, le testimonianze dei contemporanei come Ben Jonson, le registrazioni della compagnia teatrale) indicano William Shakespeare di Stratford. La \"questione shakespeariana\" è soprattutto un esempio di come il genio e l'origine sociale non si corrispondano in modo semplice.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il quasi italiano",
      html: `<p>Su 37–39 drammi, almeno una decina sono ambientati in Italia: <i>Romeo and Juliet</i> (Verona), <i>The Merchant of Venice</i> e <i>Othello</i> (Venezia), <i>The Taming of the Shrew</i> (Padova), <i>The Two Gentlemen of Verona</i>, <i>Much Ado About Nothing</i> (Messina), <i>Julius Caesar</i> (Roma). Non sappiamo se Shakespeare sia mai stato in Italia: probabilmente conosceva le storie da traduzioni, racconti e novelle, e dai molti italiani che vivevano a Londra. Nel Rinascimento l'Italia era per gli inglesi la patria della cultura, dell'eleganza e degli intrighi di corte.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per avvicinarsi a Shakespeare",
      intro: "Il Cinquecento è lontano e la lingua è difficile: ecco tre porte d'ingresso diverse.",
      tabs: [
        {
          label: "🎬 Dal film al testo",
          html: `<p>Vedi prima una trasposizione cinematografica (per esempio <i>Romeo + Juliet</i> di Baz Luhrmann, 1996, con il testo originale, oppure <i>Hamlet</i> di Kenneth Branagh, 1996, o <i>Macbeth</i> di Justin Kurzel, 2015) e poi leggi una scena breve cercando le parole che hai già sentito. Così hai il contesto visivo e riesci a seguire la lingua senza perderti. Se non capisci un verso, parafrasalo in inglese moderno, parola per parola: spesso scopri che bastano pochi cambiamenti (<i>thou</i> → <i>you</i>, <i>'tis</i> → <i>it is</i>, <i>wherefore</i> → <i>why</i>).</p>`
        },
        {
          label: "🔁 Modernizza una frase",
          html: `<p>Prova a tradurre Shakespeare in inglese moderno: è un ottimo esercizio di lingua.</p>
<table>
<tr><th>Shakespeare</th><th>Inglese moderno</th></tr>
<tr><td>Wherefore art thou Romeo?</td><td>Why are you Romeo?</td></tr>
<tr><td>Thou art more lovely and more temperate.</td><td>You are lovelier and gentler.</td></tr>
<tr><td>What say you?</td><td>What do you say?</td></tr>
<tr><td>I know not why I am so sad.</td><td>I don't know why I am so sad.</td></tr>
<tr><td>'Tis nobler in the mind to suffer…</td><td>It is nobler to put up with…</td></tr>
</table>
<p>Nota che l'inglese antico non usa <i>do</i> per negare (<i>I know not</i>) e che <i>thou</i> è il \"tu\" familiare, mentre <i>you</i> era il \"voi\" di rispetto. Gli attori, nelle commedie, giocano con i passaggi da <i>thou</i> a <i>you</i> per mostrare confidenza o ostilità.</p>`
        },
        {
          label: "🃏 Flashcard: personaggi e parole",
          html: `<p>Allenati a ricordare chi è chi e che cosa significano alcune parole di Shakespeare.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Juliet", back: "Capulet, quasi quattordicenne, ama Romeo Montague" },
              { front: "Friar Laurence", back: "Frate che sposa in segreto i due innamorati" },
              { front: "Claudius", back: "Zio di Hamlet, ha ucciso il fratello e preso il trono" },
              { front: "Ophelia", back: "Amata da Hamlet, impazzisce e muore annegata" },
              { front: "Lady Macbeth", back: "Spinge il marito a uccidere Duncan, poi sonnambula" },
              { front: "Banquo", back: "Amico di Macbeth, ucciso: il suo fantasma appare al banchetto" },
              { front: "thou / thee", back: "tu (soggetto / complemento)" },
              { front: "wherefore", back: "perché (non \"dove\")" },
              { front: "hath / doth", back: "ha / fa (forme antiche in -th)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di Shakespeare: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "uomo", label: "Shakespeare (1564–1616)", x: 50, y: 6, color: "#6366f1", html: "Attore, autore e socio dei Lord Chamberlain's / King's Men.", why: "Era anche azionista della compagnia e del Globe: scriveva sapendo chi avrebbe recitato e per quale pubblico, e questo spiega la concretezza teatrale dei suoi testi." },
        { id: "teatro", label: "Il Globe", x: 18, y: 30, color: "#16a34a", html: "Teatro scoperto del 1599, per circa 3000 spettatori.", why: "Senza scenografia, il testo doveva creare il luogo con le parole: da qui le descrizioni poetiche (l'alba, la notte, la foresta). Il pubblico misto spiega l'unione di tragico e comico." },
        { id: "lingua", label: "Blank verse", x: 82, y: 30, color: "#f59e0b", html: "Pentametro giambico non rimato.", why: "Il ritmo giambico è vicino al parlato inglese; Marlowe lo aveva già portato in scena e Shakespeare lo rese flessibile, variando accenti, pause e passaggi tra verso e prosa." },
        { id: "rj", label: "Romeo and Juliet", x: 18, y: 62, color: "#ef4444", html: "Amore contro odio tra famiglie, a Verona.", why: "Deriva da novelle italiane e dal poema di Brooke (1562); il Prologo annuncia il finale: la tragedia nasce dall'incontro tra fretta e caso, non dalla sorpresa." },
        { id: "ham", label: "Hamlet", x: 50, y: 50, color: "#a855f7", html: "Il principe indeciso che cerca la verità.", why: "Il tema della vendetta era di moda (la tragedia della vendetta, con il precedente di Thomas Kyd). Shakespeare lo trasforma in un dramma interiore: il vero ostacolo è nella mente di Amleto." },
        { id: "mac", label: "Macbeth", x: 82, y: 62, color: "#0ea5e9", html: "L'ambizione che porta al delitto e alla rovina.", why: "Scritto sotto Giacomo I, che aveva scritto un trattato sulla stregoneria (Daemonologie, 1597): il male è mostrato come scelta di Macbeth, non come semplice destino." },
        { id: "eredita", label: "Eredità", x: 50, y: 92, color: "#14b8a6", html: "Parole, espressioni, adattamenti ancora vivi.", why: "Il First Folio (1623) ha salvato metà dei drammi; da allora attori, registi e traduttori li reinterpretano in ogni epoca e Paese." }
      ],
      edges: [
        ["uomo", "teatro", "scrive per"],
        ["teatro", "lingua", "richiede"],
        ["lingua", "rj", "in"],
        ["lingua", "ham", "in"],
        ["lingua", "mac", "in"],
        ["rj", "eredita", "genera"],
        ["ham", "eredita", "genera"],
        ["mac", "eredita", "genera"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i tre drammi",
      questions: [
        { type: "mc", q: "In quale città è ambientato Romeo and Juliet?", options: ["Verona", "Venezia", "Roma"], answer: 0, explain: "La tragedia è ambientata a Verona, con le famiglie Montague e Capulet; a Mantova va Romeo durante l'esilio." },
        { type: "tf", q: "In Hamlet il padre del protagonista è stato avvelenato dallo zio Claudius.", answer: true, explain: "Lo rivela il fantasma; Claudius poi sposa la regina Gertrude e prende la corona." },
        { type: "mc", q: "Che cosa predicono le streghe a Macbeth?", options: ["che diventerà re di Scozia", "che morirà in mare", "che sposerà una regina"], answer: 0, explain: "Lo salutano come Thane of Glamis, Thane of Cawdor e \"king hereafter\" (futuro re)." }
      ]
    }
  ],
  glossary: [
    { t: "Blank verse", d: "Verso sciolto: pentametro giambico non rimato, forma dei drammi di Shakespeare." },
    { t: "Iambic pentameter", d: "Verso di 10 sillabe divise in 5 piedi giambici (debole-forte): da-DUM ×5." },
    { t: "Sonnet", d: "Poesia di 14 versi; il sonetto shakespeariano ha schema ABAB CDCD EFEF GG." },
    { t: "Soliloquy", d: "Monologo in cui un personaggio, da solo in scena, esprime i suoi pensieri." },
    { t: "Aside", d: "Battuta rivolta al pubblico che gli altri personaggi non sentono." },
    { t: "Groundlings", d: "Spettatori popolari del Globe, in piedi nel cortile davanti al palco." },
    { t: "First Folio", d: "La prima edizione collettiva dei drammi di Shakespeare, pubblicata nel 1623." },
    { t: "Tragic flaw", d: "Difetto fatale dell'eroe tragico che causa la sua rovina (per Macbeth l'ambizione)." },
    { t: "Early Modern English", d: "L'inglese del Cinquecento-Seicento, con forme come thou, thee, hath, doth." },
    { t: "Elizabethan", d: "Dell'età di Elisabetta I (1558–1603): il periodo d'oro del teatro inglese." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quando fu pubblicato il First Folio?", options: ["1599", "1623", "1642"], answer: 1, explain: "Nel 1623, sette anni dopo la morte di Shakespeare, raccolse 36 drammi." },
      { type: "mc", q: "Qual è il verso tipico dei drammi di Shakespeare?", options: ["endecasillabo con rima baciata", "pentametro giambico non rimato (blank verse)", "esametro dattilico"], answer: 1, explain: "Il blank verse ha 10 sillabe per verso con ritmo giambico e senza rime." },
      { type: "tf", q: "Nel teatro di Shakespeare le parti femminili erano recitate da attrici.", answer: false, explain: "Erano recitate da ragazzi: le donne salirono sul palcoscenico professionale solo dopo il 1660." },
      { type: "mc", q: "Che cosa significa \"wherefore\" in \"Wherefore art thou Romeo?\"", options: ["dove", "perché", "come"], answer: 1, explain: "Wherefore significa 'perché': Giulietta si chiede perché lui sia proprio un Montague, non dove si trovi." },
      { type: "mc", q: "Chi appare ad Hamlet all'inizio del dramma?", options: ["il fantasma di suo padre", "tre streghe", "Frate Laurence"], answer: 0, explain: "Il fantasma del re defunto rivela che Claudius lo ha avvelenato." },
      { type: "text", q: "Come si chiama la moglie di Macbeth che lo spinge a uccidere il re Duncan? (due parole)", answer: ["lady macbeth", "lady mac beth"], explain: "Lady Macbeth, che più tardi, tormentata dai rimorsi, cammina nel sonno." },
      { type: "mc", q: "Chi uccide Macbeth alla fine del dramma?", options: ["Macduff", "Banquo", "Malcolm"], answer: 0, explain: "Macduff, nato con parto cesareo (non \"born of woman\" nel senso della profezia), uccide il tiranno." },
      { type: "tf", q: "Il Globe Theatre fu distrutto da un incendio nel 1613 durante una rappresentazione di Henry VIII.", answer: true, explain: "Un colpo di cannone di scena incendiò il tetto di paglia; il teatro fu ricostruito nel 1614." },
      { type: "text", q: "Come si chiama il monologo in cui un personaggio parla da solo in scena? (una parola inglese)", answer: ["soliloquy", "il soliloquy"], explain: "Soliloquy: il più celebre è \"To be, or not to be\" di Hamlet." },
      { type: "order", q: "Metti in ordine gli eventi di Romeo and Juliet.", items: ["Romeo e Juliet si incontrano al ballo dei Capulet", "Si sposano in segreto con Frate Laurence", "Romeo uccide Tybalt ed è bandito", "Juliet beve la pozione e sembra morta", "Romeo si avvelena e Juliet si uccide"], explain: "Incontro, matrimonio segreto, duello e bando, finta morte, doppio suicidio finale." }
    ]
  }
});

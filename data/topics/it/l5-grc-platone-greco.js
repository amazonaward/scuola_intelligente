TOPIC('it', {
  id: `l5-grc-platone-greco`,
  title: `Platone in lingua originale`,
  intro: `Dopo Omero, i lirici, Erodoto, i tragici e gli oratori, arrivi a quello che molti considerano il vertice della prosa greca: <b>Platone</b> (c. 428/427 - 348/347 a.C.). Nei suoi <b>dialoghi</b> la filosofia non è un trattato: è una conversazione viva, con personaggi, ironia, scenografie e perfino un po' di suspense. Leggerlo in greco significa accorgersi di quanto la lingua e il pensiero siano inseparabili: parole come <i>ἰδέα</i>, <i>ψυχή</i>, <i>ἀλήθεια</i> o <i>ἔρως</i> non hanno un equivalente italiano perfetto. In questa lezione incontri tre capolavori, l'<b>Apologia di Socrate</b>, il <b>Simposio</b> e la <b>Repubblica</b>, e impari a muoverti nella lingua del dialogo platonico. 🏛️💬`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. Chi è Platone e che cos'è un dialogo`,
      html: `<p><b>Platone</b> nacque ad Atene da famiglia aristocratica (c. 428/427 a.C.) negli anni della guerra del Peloponneso. Giovane, frequentò <b>Socrate</b>; la condanna a morte del maestro (399 a.C.) lo segnò profondamente e lo spinse verso la filosofia piuttosto che verso la politica. Viaggiò (Megara, Cirene, l'Italia meridionale, la Sicilia dove conobbe la corte di Siracusa) e intorno al 387 a.C. fondò ad Atene l'<b>Accademia</b>, una scuola che durerà secoli. Morì intorno al 348/347 a.C.</p>
<p>Di Platone ci sono giunti tutti i dialoghi (circa trenta, più lettere di autenticità discussa). Socrate non scrisse nulla: conosciamo il suo pensiero soprattutto attraverso Platone, Senofonte e le caricature di Aristofane (<i>Nuvole</i>), perciò distinguere il Socrate storico dal Socrate "platonico" è un problema aperto.</p>
<p>La forma <b>dialogica</b> non è un ornamento. Platone diffidava dello scritto, che "non sa rispondere" alle domande di chi lo legge (<i>Fedro</i>): il dialogo imita il confronto vivo e obbliga il lettore a pensare insieme ai personaggi. Gli studiosi li dividono, con qualche cautela, in dialoghi <b>giovanili</b> (<i>Apologia, Critone, Eutifrone, Lachete, Carmide</i>), <b>della maturità</b> (<i>Fedone, Simposio, Repubblica, Fedro</i>) e <b>tardi</b> (<i>Teeteto, Sofista, Politico, Timeo, Leggi</i>).</p>`
    },
    {
      type: `widget`, title: `Cronologia di Platone e del suo mondo`,
      widget: `timeline`,
      options: { unit: `anni`, events: [
        { year: -431, label: `Inizio della guerra del Peloponneso`, icon: `⚔️` },
        { year: -428, label: `Nascita di Platone (c. 428/427)`, icon: `👶` },
        { year: -404, label: `Fine della guerra, regime dei Trenta`, icon: `🏴` },
        { year: -399, label: `Processo e morte di Socrate`, icon: `⚖️` },
        { year: -387, label: `Fondazione dell'Accademia (c.)`, icon: `🏫` },
        { year: -347, label: `Morte di Platone (c. 348/347)`, icon: `🕯️` }
      ] },
      caption: `Platone cresce durante la guerra, vive il trauma della morte di Socrate e fonda la prima grande scuola filosofica.`
    },
    {
      type: `text`, title: `2. Apologia di Socrate: un discorso in tribunale`,
      html: `<p>L'<b>Apologia</b> ("difesa") ricostruisce i tre discorsi pronunciati da Socrate nel <b>399 a.C.</b> davanti a una giuria popolare di ateniesi (la tradizione dice 501 giudici). Gli accusatori, <b>Meleto, Anito e Licone</b>, lo accusavano di <b>non riconoscere gli dèi della città</b>, di <b>introdurre nuove divinità</b> (il suo <i>δαιμόνιον</i>, una voce interiore che lo frenava dal fare certe azioni) e di <b>corrompere i giovani</b>.</p>
<p>Socrate racconta di aver interrogato politici, poeti e artigiani dopo che l'oracolo di Delfi aveva dichiarato nessuno più sapiente di lui. Concluse di essere "sapiente" solo in un senso: non crede di sapere ciò che non sa. In greco (Ap. 21d) il senso è: <i>ὥσπερ οὖν οὐκ οἶδα, οὐδὲ οἴομαι</i>, "come non so, così neppure credo di sapere". Non è il celebre "so di non sapere", che è una formula successiva, ma la sostanza è la stessa.</p>
<p>Dopo la condanna Socrate dichiara che <i>ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ</i> (Ap. 38a): "una vita senza ricerca non è degna di essere vissuta da un uomo". È una delle frasi più citate di tutta la filosofia antica.</p>
<p>Dal punto di vista linguistico l'<i>Apologia</i> è ricca di <b>interrogative retoriche</b>, <b>particelle</b> (<i>γάρ, δή, μέντοι, που</i>) e <b>ironia</b>. Socrate dice di non essere un abile oratore, ma sta parlando con grande abilità!</p>`
    },
    {
      type: `decision`, title: `399 a.C.: dopo la condanna, che cosa avresti fatto?`,
      html: `<p>Sei <b>Socrate</b>, hai circa settant'anni. La giuria ti ha dichiarato colpevole di poco (la maggioranza non è schiacciante). Secondo la procedura ateniese devi proporre una pena alternativa a quella chiesta dall'accusa, che è la <b>morte</b>. Gli amici ti pregano di scegliere l'esilio o una multa.</p>`,
      question: `Che cosa proponi?`,
      options: [
        { label: `L'esilio: lascio Atene e vivo altrove.`, outcome: `È la via più sicura e tanti accusati l'avrebbero scelta. Ma Socrate pensa che interrogare gli uomini sia la sua missione: in qualunque città gli farebbero la stessa cosa e lui non saprebbe tacere.` },
        { label: `Una multa pagata dagli amici.`, outcome: `È ciò che Socrate finì per proporre, ma solo dopo aver detto (con ironia) che la pena giusta per lui sarebbe il mantenimento nel Pritaneo, come per i benefattori della città. Platone e altri amici si offrirono come garanti per 30 mine.` },
        { label: `Chiedo di essere mantenuto a spese dello Stato nel Pritaneo, come un benemerito.`, outcome: `È la provocazione che Socrate pronuncia davvero prima di cedere alla multa. Irritò molti giudici: dopo questo discorso il numero dei voti a favore della morte crebbe.` }
      ],
      answer: 1,
      explain: `Nell'Apologia Socrate prima propone ironicamente il Pritaneo, poi una multa di 30 mine garantita da Platone, Critone, Critobulo e Apollodoro. La giuria scelse comunque la morte (con più voti rispetto al verdetto di colpevolezza). Nel Critone, in prigione, rifiuta anche l'evasione offerta da amici: per lui infrangere le leggi sarebbe peggio che morire.`
    },
    {
      type: `text`, title: `3. Simposio: che cos'è l'amore?`,
      html: `<p>Il <b>Simposio</b> ("banchetto") è ambientato nella casa del poeta tragico <b>Agatone</b> per festeggiare la sua vittoria (Lenee del 416 a.C.). Tra una coppa e l'altra, i convitati decidono di fare un elogio di <b>Eros</b>. Parlano, nell'ordine: <b>Fedro</b> (Eros dà coraggio), <b>Pausania</b> (due Afroditi, volgare e celeste), il medico <b>Erissimaco</b> (l'amore come armonia cosmica), il commediografo <b>Aristofane</b>, <b>Agatone</b> e infine <b>Socrate</b>.</p>
<p><b>Aristofane</b> racconta un mito: all'origine gli esseri umani erano sferici, con quattro braccia, quattro gambe e due volti; Zeus li tagliò in due per punirne la tracotanza e da allora ognuno cerca "la propria metà". L'amore è dunque <i>ἐπιθυμία τοῦ ὅλου</i>, desiderio dell'intero.</p>
<p><b>Socrate</b> riferisce ciò che gli insegnò la sacerdotessa <b>Diotima</b> di Mantinea: Eros non è un dio bellissimo e perfetto, ma un <i>δαίμων</i> intermedio, figlio di <i>Πόρος</i> (Risorsa) e <i>Πενία</i> (Povertà). Ama ciò che gli manca: la bellezza e la sapienza. Perciò il filosofo è un <i>φιλόσοφος</i>, "amante della sapienza", non un sapiente.</p>
<p>Diotima descrive una "scala dell'amore": dall'attrazione per un bel corpo, alla bellezza di tutti i corpi, alla bellezza delle anime, delle leggi, delle scienze, fino alla contemplazione del <b>Bello in sé</b>, eterno e immutabile. Alla fine irrompe <b>Alcibiade</b>, ubriaco, e rende a Socrate un elogio sorprendente: lo paragona ai sileni, brutti fuori e pieni di divino dentro.</p>`
    },
    {
      type: `svg`, title: `La scala dell'amore di Diotima`,
      caption: `Dal corpo bello all'Idea del Bello: ogni gradino è più astratto e più stabile del precedente (Simposio 210a-212a).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf2f8"/>
<text x="300" y="28" font-size="18" font-weight="bold" fill="#831843" text-anchor="middle">LA SCALA DELL'AMORE (Simposio)</text>
<rect x="40" y="236" width="500" height="40" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/>
<text x="290" y="262" font-size="16" fill="#500724" text-anchor="middle" font-weight="bold">1. un bel corpo</text>
<rect x="90" y="196" width="450" height="40" fill="#f9a8d4" stroke="#9d174d" stroke-width="2"/>
<text x="315" y="222" font-size="16" fill="#500724" text-anchor="middle" font-weight="bold">2. la bellezza di tutti i corpi</text>
<rect x="140" y="156" width="400" height="40" fill="#f472b6" stroke="#9d174d" stroke-width="2"/>
<text x="340" y="182" font-size="16" fill="#500724" text-anchor="middle" font-weight="bold">3. la bellezza delle anime</text>
<rect x="190" y="116" width="350" height="40" fill="#ec4899" stroke="#9d174d" stroke-width="2"/>
<text x="365" y="142" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">4. leggi e istituzioni</text>
<rect x="240" y="76" width="300" height="40" fill="#db2777" stroke="#9d174d" stroke-width="2"/>
<text x="390" y="102" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">5. le scienze</text>
<rect x="290" y="44" width="250" height="32" fill="#9d174d" stroke="#500724" stroke-width="2"/>
<text x="415" y="66" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">6. il Bello in sé</text>
<text x="20" y="125" font-size="15" fill="#500724" font-weight="bold">salita ➜</text>
</svg>`
    },
    {
      type: `quiz`, title: `Mini-quiz: Apologia e Simposio`,
      questions: [
        { type: `mc`, q: `Di quale accusa NON fu accusato Socrate?`, options: [`di tradimento verso Atene in guerra`, `di corrompere i giovani`, `di non credere negli dèi della città`], answer: 0, explain: `Le accuse furono empietà (non riconoscere gli dèi della città, introdurre nuovi demoni) e corruzione dei giovani.` },
        { type: `tf`, q: `Nel Simposio Socrate riferisce un discorso della sacerdotessa Diotima.`, answer: true, explain: `È Diotima di Mantinea a insegnargli la natura di Eros.` },
        { type: `mc`, q: `Chi, nel Simposio, racconta il mito degli esseri sferici tagliati in due?`, options: [`Aristofane`, `Fedro`, `Agatone`], answer: 0, explain: `Il commediografo Aristofane racconta il mito degli androgini.` },
        { type: `text`, q: `Come si chiama il poeta tragico che ospita il banchetto del Simposio?`, answer: [`agatone`], explain: `Agatone aveva vinto un concorso tragico (416 a.C.).` }
      ]
    },
    {
      type: `text`, title: `4. Repubblica: la città giusta e l'anima giusta`,
      html: `<p>La <b>Repubblica</b> (in greco <i>Πολιτεία</i>, "costituzione, ordinamento della città") è un dialogo in dieci libri. Parte da una domanda: <b>che cos'è la giustizia</b> e conviene davvero essere giusti? Nel libro II Glaucone racconta la storia dell'<b>anello di Gige</b>: se un uomo possedesse un anello che lo rende invisibile, resterebbe giusto? Socrate risponde costruendo, "in grande", una città ideale: la <b>giustizia</b> è che ciascuna parte faccia il proprio compito.</p>
<p>Nella città ci sono tre classi: i <b>governanti</b> (filosofi), i <b>guardiani</b> (guerrieri) e i <b>produttori</b> (artigiani, contadini). Corrispondono alle tre parti dell'<b>anima</b>: la <i>λογιστικόν</i> (ragione), il <i>θυμοειδές</i> (impulso, coraggio) e l'<i>ἐπιθυμητικόν</i> (desideri). Quando la ragione guida con l'aiuto del coraggio e tiene a freno i desideri, l'anima è giusta.</p>
<p>La tesi più radicale (libro V) è che le città non avranno pace finché i <b>filosofi non governeranno</b> o i governanti non diventeranno filosofi. Platone non propone una "dittatura": vuole che il potere sia nelle mani di chi conosce il <b>Bene</b>, non di chi desidera il potere.</p>
<p>Nei libri VI e VII compaiono tre immagini famose: il <b>Sole</b> (il Bene illumina le Idee come il sole le cose visibili), la <b>linea</b> (i gradi della conoscenza) e la <b>caverna</b>.</p>`
    },
    {
      type: `example`, title: `Il mito della caverna oggi`,
      html: `<p>Nel libro VII uomini incatenati fin dalla nascita in una caverna (<i>σπήλαιον</i>) vedono solo le <b>ombre</b> (<i>σκιαί</i>) proiettate sulla parete da oggetti portati davanti a un fuoco. Credono che le ombre siano la realtà. Se uno fosse liberato e uscisse alla luce, soffrirebbe, ma poi vedrebbe il sole, cioè il Bene. Se tornasse a raccontarlo, gli altri lo deriderebbero, e magari lo ucciderebbero (un'allusione a Socrate).</p>
<p>Oggi lo schermo del telefono può essere una "caverna": vediamo immagini selezionate da qualcun altro e rischiamo di credere che siano <i>tutto</i> il mondo. Uscire dalla caverna significa verificare le fonti, cercare le cause, confrontare punti di vista, e sapere che la conoscenza richiede fatica e che la verità a volte dà fastidio.</p>`
    },
    {
      type: `svg`, title: `La caverna di Platone`,
      caption: `Fuoco, oggetti, ombre sulla parete, uscita verso il sole del Bene.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="30" width="440" height="240" rx="30" fill="#334155" stroke="#0f172a" stroke-width="3"/>
<text x="240" y="56" font-size="16" fill="#e2e8f0" text-anchor="middle" font-weight="bold">LA CAVERNA</text>
<rect x="40" y="130" width="40" height="70" fill="#64748b"/>
<circle cx="60" cy="110" r="14" fill="#cbd5e1"/>
<text x="60" y="222" font-size="14" fill="#f1f5f9" text-anchor="middle">prigionieri</text>
<rect x="90" y="160" width="12" height="8" fill="#fbbf24"/>
<rect x="150" y="60" width="140" height="150" fill="#1e293b" stroke="#94a3b8"/>
<ellipse cx="200" cy="105" rx="22" ry="12" fill="#0f172a"/>
<ellipse cx="250" cy="135" rx="22" ry="12" fill="#0f172a"/>
<text x="220" y="196" font-size="14" fill="#f1f5f9" text-anchor="middle">ombre (σκιαί)</text>
<line x1="330" y1="90" x2="330" y2="210" stroke="#a16207" stroke-width="5"/>
<rect x="310" y="110" width="40" height="30" fill="#a16207"/>
<text x="330" y="236" font-size="14" fill="#f1f5f9" text-anchor="middle">oggetti</text>
<circle cx="400" cy="160" r="16" fill="#f97316"/>
<text x="400" y="200" font-size="14" fill="#fed7aa" text-anchor="middle">fuoco</text>
<path d="M460 150 L560 150" stroke="#16a34a" stroke-width="5" stroke-dasharray="8 6"/>
<circle cx="560" cy="70" r="34" fill="#fde047" stroke="#ca8a04" stroke-width="3"/>
<text x="540" y="130" font-size="15" fill="#14532d" font-weight="bold" text-anchor="middle">il sole (il Bene)</text>
</svg>`
    },
    {
      type: `text`, title: `5. La lingua del dialogo platonico`,
      html: `<p>La lingua di Platone è l'<b>attico</b> del IV secolo, più morbido e vario di quello tucidideo. I dialoghi imitano il parlato colto, perciò abbondano di <b>particelle</b> e formule di assenso. Ecco le più frequenti nel botta e risposta socratico:</p>
<table>
<tr><th>Greco</th><th>Significato</th></tr>
<tr><td>ἀληθῆ λέγεις</td><td>dici il vero</td></tr>
<tr><td>πάνυ γε / πάνυ μὲν οὖν</td><td>certamente, assolutamente</td></tr>
<tr><td>τί δ' οὔ;</td><td>e perché no? (certo)</td></tr>
<tr><td>ἔοικε(ν)</td><td>sembra</td></tr>
<tr><td>οὕτως ἔχει</td><td>è così</td></tr>
<tr><td>οὐκοῦν / οὔκουν</td><td>dunque (domanda che si aspetta un sì) / dunque non</td></tr>
<tr><td>ἀνάγκη</td><td>è necessario</td></tr>
</table>
<p>Altri tratti: periodi spesso lunghi ma ben scanditi, <b>ottativo obliquo</b> nelle subordinate al passato, <b>participi</b> e <b>genitivi assoluti</b>, <b>infinitive</b> dopo verbi di dire e pensare (<i>οἶμαι</i>, "credo"; <i>φημί</i>, "dico"). Nei dialoghi narrati (Simposio, Repubblica) il racconto è affidato a un personaggio, che riferisce "ciò che fu detto" con infinitive e subordinate.</p>
<p>Le parole-chiave: <i>ἰδέα / εἶδος</i> (forma, idea), <i>ψυχή</i> (anima), <i>ἀλήθεια</i> (verità), <i>ἀρετή</i> (virtù, eccellenza), <i>δικαιοσύνη</i> (giustizia), <i>ἐπιστήμη</i> (scienza) contrapposta a <i>δόξα</i> (opinione), <i>ἀνάμνησις</i> (reminiscenza).</p>`
    },
    {
      type: `remember`, title: `Metodo socratico e tesi platoniche`,
      html: `<ul>
<li><b>Ironia</b>: Socrate finge di non sapere, per far emergere le contraddizioni dell'interlocutore.</li>
<li><b>Elenchos</b> (<i>ἔλεγχος</i>): confutazione, la domanda che mette alla prova una definizione.</li>
<li><b>Maieutica</b> (Teeteto): l'arte della levatrice, che aiuta a "partorire" idee.</li>
<li><b>Idee</b> (<i>ἰδέαι</i>): realtà intelligibili, eterne e immutabili, di cui le cose sensibili sono copie imperfette (<i>μέθεξις</i>, "partecipazione").</li>
<li><b>Anamnesi</b>: conoscere è ricordare ciò che l'anima ha visto prima della nascita (<i>Menone, Fedone</i>).</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Il nome "Platone" e l'Accademia`,
      html: `<p>"Platone" potrebbe essere un soprannome (da <i>πλατύς</i>, "largo", per le spalle o per la fronte), mentre il nome di nascita sarebbe Aristocle. L'Accademia prese il nome da un giardino consacrato all'eroe <i>Ἀκάδημος</i>, fuori dalle mura di Atene: da qui la parola "accademia". La scuola rimase in attività, con alterne vicende, fino al I secolo a.C. e poi con il platonismo medio e il neoplatonismo (Plotino, III secolo d.C.). Nel 529 d.C. Giustiniano chiuse le scuole filosofiche di Atene.</p>`
    },
    {
      type: `curiosity`, title: `Scrivere il greco: il punto interrogativo`,
      html: `<p>Nei testi greci il punto interrogativo è un <b>punto e virgola</b> (<i>;</i>), mentre il nostro punto e virgola è un punto in alto (<i>·</i>). Platone ha usato i primi segni di divisione solo nel testo che noi leggiamo: l'originale era scritto <i>scriptio continua</i>, senza spazi né accenti. Spiriti, accenti e punteggiatura furono aggiunti dai grammatici di Alessandria.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per entrare in Platone`,
      intro: `Tre percorsi diversi per capire il suo pensiero.`,
      tabs: [
        {
          label: `🗂️ Le parole da imparare`,
          html: `<p>Memorizza le parole chiave che ritroverai in tutti i dialoghi.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `ἰδέα`, back: `idea, forma intelligibile` },
            { front: `ψυχή`, back: `anima` },
            { front: `ἀλήθεια`, back: `verità (a-lētheia: ciò che non è nascosto)` },
            { front: `δικαιοσύνη`, back: `giustizia` },
            { front: `φιλοσοφία`, back: `amore della sapienza` },
            { front: `ἔρως`, back: `desiderio amoroso` },
            { front: `δόξα`, back: `opinione` },
            { front: `ἐπιστήμη`, back: `conoscenza scientifica` }
          ] }
        },
        {
          label: `🔗 Tre dialoghi, tre domande`,
          html: `<table>
<tr><th>Dialogo</th><th>Domanda</th><th>Risposta di Socrate</th></tr>
<tr><td>Apologia</td><td>Come vivere?</td><td>Con ricerca e coerenza morale.</td></tr>
<tr><td>Simposio</td><td>Che cos'è Eros?</td><td>Desiderio del bello e del bene in eterno.</td></tr>
<tr><td>Repubblica</td><td>Che cos'è la giustizia?</td><td>L'armonia dell'anima e della città.</td></tr>
</table>`
        },
        {
          label: `🎭 Dialoga anche tu`,
          html: `<p>Scegli una parola difficile (giustizia, amicizia, coraggio) e prova a fare il gioco di Socrate con un compagno: uno propone una definizione, l'altro cerca un controesempio. Quanto tempo ci mette la definizione a "rompersi"? Questo è l'<i>elenchos</i>: spesso il dialogo finisce in <b>aporia</b> (<i>ἀπορία</i>, "mancanza di via d'uscita"), ma il lettore ne esce più consapevole.</p>`
        }
      ]
    },
    {
      type: `example`, title: `Un mini-dialogo alla maniera di Socrate`,
      html: `<p><b>Socrate:</b> Il coraggio è non fuggire mai in battaglia?<br><b>Interlocutore:</b> <i>πάνυ μὲν οὖν.</i><br><b>Socrate:</b> E i soldati che ripiegano per attirare il nemico in una trappola, non sono forse coraggiosi?<br><b>Interlocutore:</b> <i>ἔοικε.</i> Sì, sembra di sì.<br><b>Socrate:</b> Allora la tua definizione era troppo stretta.</p>
<p>Così funziona l'<i>elenchos</i>: una definizione viene messa alla prova con casi concreti finché non resta in piedi, oppure finché non si riconosce di non saperne abbastanza.</p>`
    },
    {
      type: `conceptMap`, title: `Mappa: Platone`,
      nodes: [
        { id: `pl`, label: `Platone`, x: 50, y: 6, color: `#a855f7`, html: `Atene, c. 428/427 - 348/347 a.C.; fondatore dell'Accademia.`, why: `Dopo la condanna di Socrate sceglie la filosofia e cerca una politica fondata sulla conoscenza del Bene.` },
        { id: `di`, label: `Dialogo`, x: 18, y: 38, color: `#3b82f6`, html: `Forma letteraria: conversazione, mito, ironia.`, why: `Per Platone lo scritto non può rispondere: il dialogo imita la ricerca viva e costringe il lettore a partecipare.` },
        { id: `id`, label: `Idee`, x: 50, y: 38, color: `#ef4444`, html: `Realtà intelligibili: Bello, Giusto, Bene.`, why: `Servono a spiegare come sia possibile una conoscenza stabile in un mondo di cose che cambiano.` },
        { id: `an`, label: `Anima`, x: 82, y: 38, color: `#16a34a`, html: `Ragione, impulso, desiderio.`, why: `La giustizia nell'anima è armonia delle parti, modello per la giustizia nella città.` },
        { id: `er`, label: `Eros`, x: 30, y: 72, color: `#f59e0b`, html: `Simposio: la scala dell'amore.`, why: `Eros è la forza che porta l'anima dal bello sensibile al Bello in sé.` },
        { id: `po`, label: `Città ideale`, x: 72, y: 72, color: `#0891b2`, html: `Repubblica: governo dei filosofi.`, why: `Nasce dalla crisi di Atene dopo la guerra e dal ricordo di Socrate condannato da una democrazia.` }
      ],
      edges: [[`pl`, `di`, `scrive in forma di`], [`pl`, `id`, `elabora le`], [`pl`, `an`, `descrive l'`], [`id`, `er`, `si raggiungono con`], [`an`, `po`, `è il modello della`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: Repubblica e lingua`,
      questions: [
        { type: `mc`, q: `Che cosa rappresenta il sole nel mito della caverna?`, options: [`l'idea del Bene`, `il potere politico`, `la vista fisica`], answer: 0, explain: `Il sole rappresenta il Bene, che illumina le altre Idee come la luce rende visibili le cose.` },
        { type: `tf`, q: `Nella Repubblica Platone vuole che comandino i più ricchi.`, answer: false, explain: `Vuole che comandino i filosofi, cioè chi conosce il Bene.` },
        { type: `mc`, q: `Che cosa significa ἀληθῆ λέγεις?`, options: [`dici il vero`, `parli troppo`, `non capisco`], answer: 0, explain: `È una formula frequentissima di assenso nei dialoghi.` },
        { type: `order`, q: `Metti in ordine cronologico.`, items: [`Morte di Socrate`, `Fondazione dell'Accademia`, `Morte di Platone`], explain: `399, c. 387, c. 348/347 a.C.` }
      ]
    }
  ],
  glossary: [
    { t: `Dialogo`, d: `Forma letteraria scelta da Platone: conversazione tra personaggi, tra cui Socrate.` },
    { t: `Elenchos (ἔλεγχος)`, d: `Confutazione: la domanda che mette alla prova le tesi dell'interlocutore.` },
    { t: `Maieutica`, d: `Arte della levatrice: far nascere le idee che già sono nell'anima.` },
    { t: `Idea (ἰδέα)`, d: `Forma intelligibile, eterna e immutabile, modello delle cose sensibili.` },
    { t: `Anamnesi`, d: `Dottrina per cui conoscere è ricordare ciò che l'anima ha visto prima di nascere.` },
    { t: `Accademia`, d: `La scuola fondata da Platone vicino ad Atene (c. 387 a.C.).` },
    { t: `Aporia (ἀπορία)`, d: `Impasse: dialogo che termina senza una conclusione, ma con maggiore consapevolezza.` },
    { t: `Daimonion (δαιμόνιον)`, d: `La voce interiore che secondo Socrate lo frenava dall'agire male.` },
    { t: `Eros`, d: `Nel Simposio: desiderio del bello e del bene, intermedio fra mortale e immortale.` },
    { t: `Politeia (Πολιτεία)`, d: `Il titolo greco della Repubblica: "costituzione, ordinamento della città".` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `In che anno fu condannato Socrate?`, options: [`399 a.C.`, `431 a.C.`, `338 a.C.`], answer: 0, explain: `Il processo si tenne nel 399 a.C.` },
      { type: `mc`, q: `Quali furono le accuse principali contro Socrate?`, options: [`empietà e corruzione dei giovani`, `furto e tradimento`, `diserzione e frode`], answer: 0, explain: `Non riconoscere gli dèi della città, introdurre nuove divinità, corrompere i giovani.` },
      { type: `tf`, q: `Socrate lasciò molti scritti.`, answer: false, explain: `Socrate non scrisse nulla: il suo pensiero ci arriva soprattutto da Platone e Senofonte.` },
      { type: `mc`, q: `Chi, nel Simposio, parla della scala dell'amore?`, options: [`Socrate, riferendo l'insegnamento di Diotima`, `Fedro`, `Pausania`], answer: 0, explain: `È il discorso di Socrate (da Diotima).` },
      { type: `mc`, q: `Che cosa dice il mito di Aristofane nel Simposio?`, options: [`gli uomini erano esseri doppi, divisi da Zeus: l'amore è ricerca dell'altra metà`, `Eros è il più antico dio`, `l'amore è solo istinto`], answer: 0, explain: `Il mito degli esseri sferici tagliati in due.` },
      { type: `mc`, q: `Quali sono le tre parti dell'anima nella Repubblica?`, options: [`razionale, irascibile, concupiscibile`, `corpo, mente, spirito`, `memoria, volontà, intelletto`], answer: 0, explain: `Logistikon, thymoeides, epithymetikon.` },
      { type: `tf`, q: `Il mito della caverna si trova nel libro VII della Repubblica.`, answer: true, explain: `Nel libro VII, 514a ss.` },
      { type: `text`, q: `Come si chiama la scuola fondata da Platone ad Atene?`, answer: [`accademia`, `l'accademia`], explain: `Dal giardino dell'eroe Academo.` },
      { type: `mc`, q: `Che cosa significa πάνυ μὲν οὖν nelle risposte dei dialoghi?`, options: [`assolutamente sì`, `non lo so`, `per niente`], answer: 0, explain: `È una forte formula di assenso.` },
      { type: `order`, q: `Metti in ordine i gradini della scala dell'amore (dal più basso).`, items: [`un bel corpo`, `tutti i corpi belli`, `le anime belle`, `le scienze`, `il Bello in sé`], explain: `Dal sensibile all'intelligibile, secondo Diotima.` }
    ]
  }
});

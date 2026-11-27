TOPIC('it', {
  id: `l4-grc-teatro-eschilo`,
  title: `La tragedia ed Eschilo`,
  intro: `Dopo l'epica e la lirica arriva il genere che più di ogni altro ha lasciato un'impronta sul teatro occidentale: la <b>tragedia attica</b>. Nata ad Atene nel VI secolo a.C. nel culto di <b>Dioniso</b>, in un secolo diventa il luogo in cui la città si guarda allo specchio e discute di giustizia, di colpa, di guerra e di rapporto con gli dèi. <b>Eschilo</b> ne è il primo grande poeta: in lui vedrai nascere il dramma vero e proprio, con un mondo di dèi potenti, famiglie maledette e una giustizia che, attraverso la sofferenza, cerca di diventare umana. Ti accompagno dalle origini fino all'<b>Orestea</b>, l'unica trilogia che ci sia arrivata intera. 🎭`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. Come nasce la tragedia`,
      html: `<p>La parola <b>τραγῳδία</b> significa probabilmente "canto del capro" (<i>τράγος</i> "capro" + <i>ᾠδή</i> "canto"): forse perché il premio era un capro, o perché i coreuti si travestivano da satiri-capri. Sull'origine gli antichi non erano d'accordo. Il testo più autorevole è la <b>Poetica di Aristotele</b> (IV sec. a.C.), secondo cui la tragedia nacque "da coloro che guidavano il <b>ditirambo</b>", il canto corale in onore di Dioniso. Il capo del coro cominciò a dialogare con i coreuti, e da quel dialogo nacque l'<b>attore</b>.</p>
<p>La tradizione ricorda i passaggi chiave:</p>
<ul>
<li><b>Tespi</b> di Icaria, al tempo del tiranno <b>Pisistrato</b>: la tradizione fissa intorno al <b>534 a.C.</b> la prima gara tragica alle Dionisie cittadine e gli attribuisce il <b>primo attore</b> (<i>ὑποκριτής</i>, letteralmente "colui che risponde", poi "attore");</li>
<li><b>Eschilo</b> introduce il <b>secondo attore</b>, riducendo la parte del coro e rendendo possibile un vero dialogo e un vero conflitto;</li>
<li><b>Sofocle</b> introduce il <b>terzo attore</b> e la scenografia dipinta; la tecnica resterà questa per tutto il V secolo.</li>
</ul>
<p>Con tre attori (che si dividono tutte le parti, maschere comprese; le donne non recitavano) e un coro, si può portare in scena una trama complessa.</p>`
    },
    {
      type: `text`, title: `2. Il festival e il teatro di Dioniso`,
      html: `<p>La tragedia non era un "intrattenimento" privato: era un evento <b>civico e religioso</b>. Le <b>Grandi Dionisie</b> (o Dionisie cittadine) si tenevano ogni anno ad Atene in primavera (marzo-aprile), per più giorni. Il magistrato che governava la città (l'<b>arconte eponimo</b>) concedeva a tre poeti il "coro", cioè il finanziamento e i coreuti; la spesa era a carico di un cittadino ricco, il <b>corego</b>, come forma di <b>liturgia</b> (una tassa-servizio per la comunità). Una giuria sorteggiata assegnava i premi.</p>
<p>Ogni poeta presentava una <b>tetralogia</b>: <b>tre tragedie</b> (legate o no dallo stesso mito: se legate, una <i>trilogia</i>) seguite da un <b>dramma satiresco</b>, rappresentazione più leggera con un coro di satiri.</p>
<p>Il <b>teatro di Dioniso</b>, sulle pendici sud-orientali dell'Acropoli, aveva queste parti:</p>
<ul>
<li>l'<b>orchestra</b> (<i>ὀρχήστρα</i>, "luogo della danza"): lo spazio circolare in cui cantava e danzava il coro;</li>
<li>il <b>théatron</b> (<i>θέατρον</i>, "luogo da cui si guarda"): le gradinate per il pubblico, migliaia di persone;</li>
<li>la <b>skené</b> (<i>σκηνή</i>, "tenda"): la baracca di legno alle spalle degli attori, usata come spogliatoio e poi come fondale (da qui la nostra parola <i>scena</i>);</li>
<li>la <b>parodo</b> (ingresso laterale) e la <b>mechané</b> (macchina per sollevare gli dèi) e l'<b>ekkyklema</b> (piattaforma per mostrare scene avvenute all'interno).</li>
</ul>`
    },
    {
      type: `svg`, title: `Il teatro di Dioniso (pianta schematica)`,
      caption: `Pianta molto semplificata: il pubblico siede su una gradinata a semicerchio, il coro danza nell'orchestra, gli attori recitano davanti alla skené.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<path d="M60 250 A240 220 0 0 1 540 250 L480 250 A180 160 0 0 0 120 250 Z" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<text x="300" y="75" font-size="18" font-weight="bold" fill="#78350f" text-anchor="middle">THÉATRON (gradinate)</text>
<circle cx="300" cy="220" r="85" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="300" y="196" font-size="17" font-weight="bold" fill="#78350f" text-anchor="middle">ORCHESTRA</text>
<text x="300" y="222" font-size="15" fill="#78350f" text-anchor="middle">il coro canta e danza</text>
<circle cx="300" cy="248" r="10" fill="#b91c1c"/>
<text x="300" y="274" font-size="14" fill="#7f1d1d" text-anchor="middle">altare di Dioniso (thymele)</text>
<rect x="190" y="282" width="220" height="16" fill="#92400e"/>
<text x="300" y="295" font-size="14" font-weight="bold" fill="#fff7ed" text-anchor="middle">SKENÉ</text>
<text x="30" y="150" font-size="15" fill="#1e3a8a">PARODO</text>
<text x="570" y="150" font-size="15" fill="#1e3a8a" text-anchor="end">PARODO</text>
</svg>`
    },
    {
      type: `text`, title: `3. La struttura di una tragedia`,
      html: `<p>Una tragedia attica alterna <b>parti recitate</b> (dialogo in versi giambici) e <b>parti cantate</b> (cori in metri vari, spesso in dialetto dorico letterario, anche se la lingua del dialogo è l'attico). Le parti fisse sono:</p>
<ol>
<li><b>Prologo</b>: tutto ciò che precede l'ingresso del coro; presenta situazione e personaggi.</li>
<li><b>Parodo</b>: il canto d'ingresso del coro.</li>
<li><b>Episodi</b> (<i>ἐπεισόδια</i>): scene recitate tra gli attori (e il corifeo).</li>
<li><b>Stasimi</b> (<i>στάσιμα</i>): canti del coro eseguiti fra un episodio e l'altro, in genere divisi in <b>strofe</b> e <b>antistrofe</b> (con eventuale epodo). Commentano l'azione e allargano lo sguardo a temi generali.</li>
<li><b>Esodo</b>: la scena finale che segue l'ultimo stasimo.</li>
</ol>
<p>Il verso del dialogo è il <b>trimetro giambico</b>, il metro più vicino al parlato (Aristotele lo giudicava tale): tre "metri" di tipo × — ⏑ — .  Il <b>coro</b> è composto da un gruppo di cittadini (12 con Eschilo, poi 15) che rappresentano gli anziani, le donne, i marinai, le Erinni… Non è un "narratore esterno": partecipa, teme, consiglia, e dà voce al punto di vista della comunità.</p>
<p>Secondo Aristotele, la tragedia è l'imitazione (<i>μίμησις</i>) di un'azione seria e compiuta che, suscitando <b>pietà</b> e <b>paura</b>, produce la <b>catarsi</b> (<i>κάθαρσις</i>) di tali emozioni, cioè una sorta di purificazione o scioglimento. È una definizione che ancora oggi si discute: che cosa significhi esattamente "catarsi" è uno dei grandi dibattiti della critica.</p>`
    },
    {
      type: `remember`, title: `Tre parole chiave del tragico`,
      html: `<ul>
<li><b>ὕβρις</b> (hýbris): la sfida arrogante ai limiti umani e divini;</li>
<li><b>ἁμαρτία</b> (hamartía): errore, "mancare il bersaglio" (spesso tradotto "colpa tragica", ma non è per forza una colpa morale);</li>
<li><b>ἀναγνώρισις</b> (anagnórisis) e <b>περιπέτεια</b> (peripéteia): riconoscimento e rovesciamento della sorte, i due momenti-chiave della trama secondo Aristotele.</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-quiz: origini e struttura`,
      questions: [
        { type: `mc`, q: `Secondo Aristotele, da che cosa nacque la tragedia?`, options: [`dai canti di mietitura`, `da coloro che guidavano il ditirambo`, `dai giochi funebri per gli eroi`], answer: 1, explain: `Nella Poetica la tragedia deriva dagli "esarconti del ditirambo", i capi del coro in onore di Dioniso.` },
        { type: `mc`, q: `Chi introdusse il secondo attore?`, options: [`Tespi`, `Eschilo`, `Sofocle`], answer: 1, explain: `Tespi il primo attore, Eschilo il secondo, Sofocle il terzo.` },
        { type: `tf`, q: `Il canto del coro tra un episodio e l'altro si chiama stasimo.`, answer: true, explain: `Lo stasimo è il canto corale eseguito a coro fermo nell'orchestra, fra due episodi.` },
        { type: `text`, q: `Come si chiama lo spazio circolare del teatro in cui danzava il coro?`, answer: [`orchestra`, `l'orchestra`], explain: `Orchestra significa "luogo della danza".` }
      ]
    },
    {
      type: `text`, title: `4. Eschilo: l'uomo e l'opera`,
      html: `<p><b>Eschilo</b> nacque a <b>Eleusi</b> intorno al <b>525/524 a.C.</b> da una famiglia aristocratica e morì a <b>Gela</b>, in Sicilia, intorno al <b>456/455</b>. Visse il momento più esaltante di Atene: combatté contro i Persiani a <b>Maratona</b> (490) e, forse, a Salamina (480). Quando morì volle sull'epitaffio, secondo la tradizione, non il vanto di poeta ma il ricordo di Maratona: "del suo valore potrebbe parlare il bosco di Maratona e il Medo dai lunghi capelli, che lo ha conosciuto".</p>
<p>Vinse la prima gara tragica nel <b>484</b> e ottenne una dozzina di vittorie; scrisse circa <b>ottanta drammi</b>, di cui ne restano <b>sette</b> tragedie complete:</p>
<ul>
<li><b>Persiani</b> (472): l'unica tragedia storica conservata; racconta la sconfitta di Serse a Salamina dal punto di vista della corte persiana, con rispetto per il nemico;</li>
<li><b>Sette contro Tebe</b> (467): l'assedio di Tebe e il duello fratricida fra Eteocle e Polinice, figli di Edipo;</li>
<li><b>Supplici</b>: le Danaidi, cinquanta figlie di Danao, chiedono asilo ad Argo per sfuggire alle nozze imposte; la città vota di proteggerle (data tradizionale 463 a.C.);</li>
<li><b>Prometeo incatenato</b>: il titano punito da Zeus per aver donato agli uomini il fuoco; la sua attribuzione a Eschilo è oggi discussa;</li>
<li><b>Orestea</b> (458): la trilogia <i>Agamennone</i>, <i>Coefore</i>, <i>Eumenidi</i>.</li>
</ul>
<p>Lo <b>stile</b> eschileo è solenne, ricco di immagini, di parole composte e metafore audaci (il fuoco che passa di monte in monte, il mare in tempesta, la rete di Clitemnestra). Aristofane, nelle <i>Rane</i>, lo farà gareggiare con Euripide e lo premierà proprio per la grandezza e per il valore civile della sua poesia.</p>`
    },
    {
      type: `curiosity`, title: `Il primo "film di guerra"?`,
      html: `<p>I <b>Persiani</b> andarono in scena otto anni dopo Salamina, quando molti spettatori avevano combattuto davvero. Eschilo non festeggia: mostra la regina Atossa, l'ombra di Dario, la corte di Susa che apprende il disastro. La vittoria greca è presentata come punizione della <b>hýbris</b> di Serse, che aveva "incatenato" l'Ellesponto con un ponte di navi. A un pubblico che esultava, il poeta ricordava che la fortuna può rovesciarsi per chiunque.</p>`
    },
    {
      type: `text`, title: `5. L'Orestea: la trama in tre tappe`,
      html: `<p>L'<b>Orestea</b>, rappresentata alle Grandi Dionisie del <b>458 a.C.</b> (il quarto dramma, il satiresco <i>Proteo</i>, è perduto), riprende il ciclo dei Pelopidi, la famiglia maledetta di Argo. Il tema: come si esce da una catena di vendette?</p>
<p><b>1. Agamennone.</b> Dopo dieci anni di guerra il re di Argo torna da Troia. Una catena di fuochi-segnale ha annunciato la caduta di Troia. Ma ad aspettarlo c'è la moglie <b>Clitemnestra</b>, che odia il marito perché ha sacrificato la loro figlia <b>Ifigenia</b> per ottenere venti favorevoli alla flotta, e che ha come amante <b>Egisto</b>, cugino di Agamennone (la cui famiglia ha una vecchia ragione di vendetta). Clitemnestra fa camminare Agamennone su <b>tappeti di porpora</b>, un onore degno di un dio: lui esita, poi cede (gesto di hýbris). Dentro la reggia lo uccide nel bagno, avvolgendolo in una veste-rete. Anche la profetessa troiana <b>Cassandra</b>, che Agamennone ha portato come bottino, viene uccisa: prima di morire vede in visione tutta la storia sanguinosa della casa.</p>
<p><b>2. Coefore</b> ("le portatrici di libagioni"). Anni dopo, <b>Oreste</b>, il figlio esiliato, torna ad Argo con l'amico <b>Pilade</b>. L'oracolo di <b>Apollo</b> gli ha imposto di vendicare il padre. Sulla tomba di Agamennone incontra la sorella <b>Elettra</b> (la scena del riconoscimento passa attraverso una ciocca di capelli). Uccide Egisto e poi, tra mille esitazioni, la madre. Subito dopo vede le <b>Erinni</b>, dee della vendetta materna, e fugge impazzito.</p>
<p><b>3. Eumenidi</b>. Perseguitato dalle Erinni, Oreste arriva a Delfi e poi ad <b>Atene</b>. Qui <b>Atena</b> istituisce un tribunale: l'<b>Areopago</b>, giuria di cittadini. Apollo difende Oreste; le Erinni accusano. I voti si dividono in parità. Atena aggiunge il proprio voto a favore dell'assoluzione (la "pietra di Atena"). Oreste è libero. Le Erinni, furiose, vengono persuase da Atena a diventare <b>Eumenidi</b> ("le benevole"), protettrici della città.</p>`
    },
    {
      type: `svg`, title: `La catena di sangue dei Pelopidi`,
      caption: `Dalla colpa di Atreo alla pace dell'Areopago: l'Orestea mostra come interrompere una vendetta ereditaria.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f1f5f9"/>
<g font-size="15" font-weight="bold" text-anchor="middle">
<rect x="20" y="30" width="150" height="50" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="95" y="52" fill="#7f1d1d">Atreo uccide i figli</text><text x="95" y="70" fill="#7f1d1d">di Tieste (maledizione)</text>
<rect x="225" y="30" width="150" height="50" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="300" y="52" fill="#7f1d1d">Agamennone sacrifica</text><text x="300" y="70" fill="#7f1d1d">Ifigenia</text>
<rect x="430" y="30" width="150" height="50" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="505" y="52" fill="#7f1d1d">Clitemnestra uccide</text><text x="505" y="70" fill="#7f1d1d">Agamennone</text>
<rect x="430" y="130" width="150" height="50" rx="10" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="505" y="152" fill="#7c2d12">Oreste uccide</text><text x="505" y="170" fill="#7c2d12">la madre</text>
<rect x="225" y="130" width="150" height="50" rx="10" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="300" y="152" fill="#7c2d12">Le Erinni</text><text x="300" y="170" fill="#7c2d12">lo perseguitano</text>
<rect x="20" y="220" width="560" height="60" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<text x="300" y="246" fill="#14532d" font-size="17">Atene, Areopago: giudizio dei cittadini, assoluzione</text>
<text x="300" y="268" fill="#14532d" font-size="16">Le Erinni diventano Eumenidi: la giustizia sostituisce la vendetta</text>
</g>
<g stroke="#334155" stroke-width="3" fill="#334155">
<line x1="170" y1="55" x2="225" y2="55"/><polygon points="225,55 215,49 215,61"/>
<line x1="375" y1="55" x2="430" y2="55"/><polygon points="430,55 420,49 420,61"/>
<line x1="505" y1="80" x2="505" y2="130"/><polygon points="505,130 499,120 511,120"/>
<line x1="430" y1="155" x2="375" y2="155"/><polygon points="375,155 385,149 385,161"/>
<line x1="300" y1="180" x2="300" y2="220"/><polygon points="300,220 294,210 306,210"/>
</g>
</svg>`
    },
    {
      type: `text`, title: `6. Giustizia, colpa e destino`,
      html: `<p>Leggere l'<i>Orestea</i> come un semplice giallo di famiglia sarebbe un errore. Il filo è un'idea religiosa e politica: la <b>Δίκη</b> (Giustizia) è legata a <b>Zeus</b>, e Zeus ha stabilito che l'uomo "<b>impara attraverso la sofferenza</b>": <i>πάθει μάθος</i> (<i>Agamennone</i>, nell'inno a Zeus). La sofferenza non è solo punizione, è conoscenza.</p>
<p>I protagonisti sono presi nella <b>doppia necessità</b>: Agamennone deve scegliere tra salvare la spedizione e uccidere la figlia; Oreste tra obbedire ad Apollo vendicando il padre e non macchiarsi con il sangue materno. Nessuna scelta è pulita. La soluzione non viene dagli individui ma dalla <b>comunità</b>: il tribunale dei cittadini, ispirato da Atena, sostituisce la vendetta privata (la <i>vendetta di sangue</i>, o <i>faida</i>). Le Erinni non vengono cancellate, ma integrate: Atena propone loro un culto onorato e una sede nella città. Eschilo suggerisce che anche le forze oscure della giustizia più antica devono trovare posto accanto alla ragione e alla persuasione (<i>Πειθώ</i>).</p>
<p>Il tema ha anche un riflesso politico: pochi anni prima (462/461) il riformatore democratico <b>Efialte</b> aveva ridotto i poteri dell'Areopago, trasformandolo in un tribunale per i delitti di sangue. L'<i>Orestea</i> è un modo per riflettere sull'identità di quell'istituzione e sulla nuova Atene.</p>`
    },
    {
      type: `example`, title: `Dalla faida al processo, oggi`,
      html: `<p>Pensa a ciò che accade ogni volta che un conflitto tra famiglie, clan o Paesi viene deferito a un <b>tribunale</b> invece di essere regolato con la violenza: è esattamente il passaggio che l'<i>Orestea</i> mette in scena. Le vendette ereditarie esistono ancora (alcune regioni del Mediterraneo conoscono faide secolari); i tribunali internazionali o i processi di "giustizia riparativa" sono, in un senso molto lontano, i nipoti dell'Areopago di Atena: la comunità si prende carico del conflitto, ascolta le parti e decide.</p>`
    },
    {
      type: `decision`, title: `Argo: Oreste, che cosa fai?`,
      html: `<p>Sei <b>Oreste</b>. Apollo ti ha ordinato di vendicare tuo padre. L'assassina è tua madre e tu sai che il matricidio è, per gli dèi più antichi, il peggiore dei delitti. Se ti rifiuti, le Erinni del padre ti tormenteranno; se obbedisci, ti perseguiteranno le Erinni della madre.</p>`,
      question: `Che cosa scegli?`,
      options: [
        { label: `Obbedisco ad Apollo e uccido la madre.`, outcome: `È la scelta di Oreste. Rispetta l'ordine divino e il dovere verso il padre, ma lo condanna alla persecuzione delle Erinni.` },
        { label: `Rinuncio alla vendetta e vivo in esilio.`, outcome: `Ti salvi dal matricidio, ma tradisci tuo padre e lasci impunito un assassinio: la tua famiglia resta senza giustizia e Apollo ti minaccia di punizioni terribili.` },
        { label: `Chiedo che la causa venga giudicata da altri.`, outcome: `È ciò che accadrà alla fine, ma non prima: nelle <i>Coefore</i> nessuno ha ancora inventato un tribunale e Oreste non può permettersi di aspettare.` }
      ],
      answer: 0,
      explain: `Nelle <i>Coefore</i> Oreste uccide Egisto e Clitemnestra, e solo nelle <i>Eumenidi</i> trova una soluzione: l'Areopago di Atene lo assolve (con il voto di Atena, a parità di voti). Il dramma mostra che i dilemmi tragici non hanno una risposta giusta immediata: servono nuove istituzioni.`
    },
    {
      type: `widget`, title: `Gioco: i personaggi dell'Orestea`,
      widget: `match`,
      options: {
        pairs: [
          [`Agamennone`, `re di Argo, ucciso nel bagno`],
          [`Clitemnestra`, `uccide il marito e muore per mano del figlio`],
          [`Oreste`, `il figlio vendicatore`],
          [`Elettra`, `sorella di Oreste, lo riconosce alla tomba`],
          [`Apollo`, `dio che ordina la vendetta`],
          [`Atena`, `istituisce il tribunale dell'Areopago`]
        ]
      },
      caption: `Abbina ogni personaggio al suo ruolo.`
    },
    {
      type: `curiosity`, title: `Una parola che viene dal teatro`,
      html: `<p>Il greco <i>ὑποκριτής</i> ("colui che risponde") ha dato "ipocrita" in italiano: l'attore che porta la maschera è, in senso figurato, chi finge. E "<b>scena</b>", "<b>orchestra</b>", "<b>teatro</b>", "<b>coro</b>", "<b>catarsi</b>", "<b>dramma</b>" (da <i>δρᾶμα</i>, "azione") sono tutte parole greche ancora vive: ogni volta che parli di un "colpo di scena" o di una "scena madre" usi il lessico del teatro di Dioniso.</p>`
    },
    {
      type: `example`, title: `Come Agamennone sul tappeto rosso`,
      html: `<p>Oggi "tappeto rosso" indica un onore riservato a pochi. Agamennone esita a calpestare i tappeti di porpora perché quell'onore spetta agli dèi: dice di temere "l'invidia degli dèi". Cedere significa affermare un potere eccessivo e prepara la sua rovina. Quando ti capita di vedere qualcuno che, dopo un grande successo, si comporta come se tutto gli fosse permesso, stai guardando una piccola scena di <i>hýbris</i>.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capire la tragedia`,
      intro: `Un testo teatrale va "visto", non solo letto: ecco altre strade.`,
      tabs: [
        {
          label: `🎭 Immagina la messa in scena`,
          html: `<p>Siediti nel théatron, all'alba, davanti a 15.000 persone. Gli attori sono tre, tutti uomini, con <b>maschere</b> che ingrandiscono l'espressione e amplificano la voce, calzari rialzati, vesti ampie. Il coro canta e danza con passi codificati. Non ci sono luci né sipari: tutto è affidato alla <b>parola</b>, alla musica (l'aulo) e ai gesti. Per questo la tragedia greca è così "poetica": ogni emozione deve passare attraverso il verso.</p>`
        },
        {
          label: `🧭 Una trama in sei domande`,
          html: `<p>Per orientarti in una tragedia chiediti: <b>1.</b> Chi è il protagonista? <b>2.</b> Che cosa vuole? <b>3.</b> Quale legge o dovere gli si oppone? <b>4.</b> Che cosa sa il pubblico che il protagonista ignora? <b>5.</b> Quale momento ribalta la situazione (peripezia)? <b>6.</b> Che cosa dice il coro alla fine? Applicale ad Agamennone, a Oreste, ai Persiani: vedrai che ogni dramma risponde diversamente alle stesse domande.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `τραγῳδία`, back: `canto del capro; tragedia` },
            { front: `ὑποκριτής`, back: `attore ("colui che risponde")` },
            { front: `χορός`, back: `coro` },
            { front: `στάσιμον`, back: `canto corale fra due episodi` },
            { front: `κάθαρσις`, back: `purificazione, scioglimento delle emozioni (Aristotele)` },
            { front: `ὕβρις`, back: `tracotanza, eccesso` }
          ] }
        },
        {
          label: `⚖️ Il processo in tre parole`,
          html: `<p>Se devi riassumere le <i>Eumenidi</i> in tre parole: <b>vendetta → giudizio → persuasione</b>. Prima si uccide per vendicare; poi si discute davanti a giudici; infine si convince la parte sconfitta a restare nella città. È il processo di civiltà che Eschilo vede nell'Atene del suo tempo.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: la tragedia e Eschilo`,
      nodes: [
        { id: `tr`, label: `Tragedia attica`, x: 50, y: 6, color: `#a855f7`, html: `Genere teatrale nato ad Atene nel VI secolo a.C. nel culto di Dioniso.`, why: `Dal ditirambo (canto corale) è nato il dialogo tra capo-coro e coro; con Tespi appare il primo attore. La polis finanzia e controlla le rappresentazioni: per questo il teatro è anche un luogo di discussione politica.` },
        { id: `fe`, label: `Dionisie e teatro`, x: 18, y: 35, color: `#f59e0b`, html: `Festa civica e religiosa, con gara fra tre poeti.`, why: `Spiega perché la tragedia parla della comunità: il pubblico è l'intera città e la gara premia chi riesce a farla riflettere.` },
        { id: `es`, label: `Eschilo`, x: 50, y: 35, color: `#ef4444`, html: `Eleusi 525/524 - Gela 456/455 a.C.; secondo attore; 7 tragedie conservate.`, why: `Combattente di Maratona, vive l'ascesa democratica di Atene: i suoi drammi mescolano fede in Zeus e fiducia nella polis.` },
        { id: `st`, label: `Struttura`, x: 82, y: 35, color: `#3b82f6`, html: `Prologo, parodo, episodi, stasimi, esodo.`, why: `L'alternanza di parti recitate e cantate nasce dalla storia del genere: il coro è il nucleo originario, gli attori sono innesti successivi.` },
        { id: `or`, label: `Orestea`, x: 35, y: 68, color: `#16a34a`, html: `Trilogia: Agamennone, Coefore, Eumenidi (458 a.C.).`, why: `Mostra come una catena di vendette si chiude con un tribunale. Il tema è giustizia divina e umana insieme.` },
        { id: `gi`, label: `Giustizia (Δίκη)`, x: 68, y: 68, color: `#0891b2`, html: `Ordine giusto voluto da Zeus.`, why: `Per Eschilo la Dike non è solo punizione ma anche conoscenza: "pathei mathos". Cambia nel tempo da vendetta a decisione civica.` }
      ],
      edges: [[`tr`, `fe`, `si svolge nelle`], [`tr`, `es`, `primo grande poeta`], [`tr`, `st`, `ha una`], [`es`, `or`, `capolavoro`], [`or`, `gi`, `tema centrale`], [`fe`, `gi`, `discusse in pubblico`]]
    },
    {
      type: `quiz`, title: `Mini-quiz: Eschilo e l'Orestea`,
      questions: [
        { type: `mc`, q: `Come si chiama il tribunale istituito da Atena nelle Eumenidi?`, options: [`Pnice`, `Areopago`, `Eliea`], answer: 1, explain: `L'Areopago, che giudica i delitti di sangue.` },
        { type: `tf`, q: `I Persiani è l'unica tragedia a soggetto storico che possediamo.`, answer: true, explain: `Racconta la sconfitta di Serse a Salamina, otto anni dopo i fatti (472 a.C.).` },
        { type: `mc`, q: `Chi uccide Agamennone?`, options: [`Oreste`, `Clitemnestra (con Egisto)`, `Cassandra`], answer: 1, explain: `Clitemnestra lo uccide al ritorno da Troia, per vendicare Ifigenia.` },
        { type: `order`, q: `Metti in ordine le tre tragedie dell'Orestea.`, items: [`Agamennone`, `Coefore`, `Eumenidi`], explain: `Prima l'assassinio del re, poi la vendetta di Oreste, poi il giudizio.` }
      ]
    }
  ],
  glossary: [
    { t: `Tragedia`, d: `Genere teatrale attico nato nel culto di Dioniso, che rappresenta un'azione seria con attori e coro.` },
    { t: `Ditirambo`, d: `Canto corale in onore di Dioniso, da cui secondo Aristotele nacque la tragedia.` },
    { t: `Orchestra`, d: `Area circolare del teatro dove danzava il coro.` },
    { t: `Skené`, d: `Edificio di fondo del teatro, da cui il nostro "scena".` },
    { t: `Parodo / stasimo / esodo`, d: `Ingresso del coro; canto corale fra gli episodi; scena finale.` },
    { t: `Trimetro giambico`, d: `Verso del dialogo tragico, vicino al parlato.` },
    { t: `Catarsi`, d: `Purificazione o scioglimento delle emozioni di pietà e paura (Aristotele).` },
    { t: `Hýbris`, d: `Tracotanza che sfida i limiti umani e divini.` },
    { t: `Areopago`, d: `Antico consiglio ateniese; nell'Orestea, tribunale istituito da Atena.` },
    { t: `Erinni / Eumenidi`, d: `Dee della vendetta, poi "benevole" protettrici della città.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale festa ateniese ospitava le gare tragiche principali?`, options: [`Le Grandi Dionisie`, `Le Panatenee`, `Le Olimpiadi`], answer: 0, explain: `Si svolgevano in primavera, in onore di Dioniso.` },
      { type: `mc`, q: `Che cosa comprendeva la produzione di un poeta tragico a ogni gara?`, options: [`una sola tragedia`, `tre tragedie e un dramma satiresco`, `cinque commedie`], answer: 1, explain: `La tetralogia: tre tragedie più un dramma satiresco.` },
      { type: `tf`, q: `Eschilo ha introdotto il terzo attore.`, answer: false, explain: `Eschilo introdusse il secondo; il terzo è attribuito a Sofocle.` },
      { type: `mc`, q: `Chi accusa Oreste nelle Eumenidi?`, options: [`Le Erinni`, `Apollo`, `Egisto`], answer: 0, explain: `Le Erinni, dee della vendetta materna.` },
      { type: `mc`, q: `Che cosa significa il motto πάθει μάθος?`, options: [`la conoscenza viene attraverso la sofferenza`, `la gloria viene dalla guerra`, `chi tace acconsente`], answer: 0, explain: `È l'idea di fondo dell'inno a Zeus nell'Agamennone.` },
      { type: `mc`, q: `Quale impresa storica è al centro dei Persiani?`, options: [`la battaglia di Maratona`, `la battaglia di Salamina`, `la guerra del Peloponneso`], answer: 1, explain: `La sconfitta navale di Serse a Salamina (480 a.C.).` },
      { type: `text`, q: `Come si chiama il canto d'ingresso del coro?`, answer: [`parodo`, `la parodo`], explain: `La parodo segue il prologo.` },
      { type: `tf`, q: `Nelle Eumenidi i voti dei giudici sono pari e Atena sceglie per l'assoluzione.`, answer: true, explain: `È il celebre "voto di Atena" a favore di Oreste.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Tespi, primo attore (VI sec.)`, `Maratona (490)`, `Persiani (472)`, `Orestea (458)`], explain: `Dall'origine del genere all'Orestea.` },
      { type: `mc`, q: `Perché alla fine delle Eumenidi le Erinni diventano benevole?`, options: [`perché Atena le persuade offrendo loro un culto nella città`, `perché Zeus le uccide`, `perché Oreste le sconfigge in battaglia`], answer: 0, explain: `L'integrazione delle forze antiche con la nuova giustizia civica è il cuore del finale.` }
    ]
  }
});

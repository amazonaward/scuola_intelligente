TOPIC('it', {
  id: `l3-grc-lirica-corale`,
  title: `La lirica corale`,
  intro: `Mentre Saffo e Alceo cantavano da soli per un gruppo ristretto, in tutta la Grecia, nelle grandi feste religiose e nelle celebrazioni delle vittorie, si esibivano <b>cori</b> di decine di danzatori-cantori che eseguivano componimenti composti da un poeta professionista. È la <b>lirica corale</b>: una poesia pubblica, musicale, <b>cantata e danzata</b>, con un dialetto particolare (il dorico letterario) e una struttura metrica ardita, la <b>triade</b>. In questa lezione conosci i suoi quattro grandi nomi: <b>Alcmane</b> (Sparta, con le fanciulle dei partenei), <b>Simonide</b> (il poeta dei Termopili), <b>Pindaro</b> (il maestro dell'epinicio e dell'aristocrazia degli atleti) e <b>Bacchilide</b> (rivale e nipote di Simonide, riscoperto nel 1896). 🏆`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. Che cosa è la lirica corale`,
      html: `<p>La <b>lirica corale</b> è eseguita da un <b>coro</b> (<i>χορός</i>) che canta e <b>danza</b>, guidato da un corifeo (<i>χορηγός</i>) e accompagnato da <b>aulo</b> o <b>cetra</b>. Il poeta compone versi e musica ("poeta-musicista") su commissione di una polis, di un santuario o di una famiglia aristocratica.</p>
<table>
<tr><th>Genere</th><th>Occasione</th></tr>
<tr><td><b>Inno</b></td><td>lode a un dio, in processione</td></tr>
<tr><td><b>Peana</b></td><td>canto ad Apollo (o Asclepio): richiesta di salvezza, ringraziamento</td></tr>
<tr><td><b>Ditirambo</b></td><td>canto a Dioniso, eseguito da un coro "circolare" di cinquanta</td></tr>
<tr><td><b>Partenio</b></td><td>canto di un coro di fanciulle (<i>παρθένοι</i>) in onore di una dea</td></tr>
<tr><td><b>Iporchema</b></td><td>canto accompagnato da danza mimica, vivace</td></tr>
<tr><td><b>Threnos</b></td><td>lamento funebre</td></tr>
<tr><td><b>Encomio</b></td><td>elogio di un personaggio importante</td></tr>
<tr><td><b>Epinicio</b></td><td>celebrazione di una vittoria atletica (Pindaro, Bacchilide)</td></tr>
</table>
<p><b>Lingua</b>: dorico letterario con elementi epici ed eolici, anche se il poeta non è dorico (Pindaro è beotico, Simonide di Ceo). Si riconosce dall'<b>α lungo al posto di η</b> (<i>ἁμέρα</i> invece di <i>ἡμέρα</i>, <i>Μοῖσα</i> invece di <i>Μοῦσα</i>) e da forme come <i>ἄμμες</i> "noi". <b>Metro</b>: strofe di versi complessi (dattilo-epitriti, eolici), organizzate in <b>triadi</b>.</p>`
    },
    {
      type: `text`, title: `2. La triade: strofe, antistrofe, epodo`,
      html: `<p>Stesicoro di Imera (VII-VI sec. a.C.) introdusse la <b>composizione triadica</b>, che poi fu adottata da quasi tutti i lirici corali:</p>
<ul>
<li><b>strofe</b> (<i>στροφή</i>, "giro"): il coro si muove in un senso (da destra a sinistra);</li>
<li><b>antistrofe</b> (<i>ἀντιστροφή</i>, "giro contrario"): torna indietro, ripetendo lo <b>stesso schema metrico</b>;</li>
<li><b>epodo</b> (<i>ἐπῳδός</i>): il coro sta fermo e canta con uno schema diverso.</li>
</ul>
<p>La triade si ripete più volte, con ogni volta nuove parole ma gli stessi schemi metrici. Alcuni componimenti (di Alcmane, per esempio) sono invece "monostrofici": un solo schema ripetuto. Nei cori della tragedia attica ritroverai questa stessa struttura (parodo, stasimi con strofe e antistrofe).</p>`
    },
    {
      type: `svg`, title: `La triade del coro`,
      caption: `Il coro si muove in una direzione durante la strofe, nell'altra durante l'antistrofe, poi si ferma per l'epodo.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="28" font-size="18" font-weight="bold" fill="#1e3a8a" text-anchor="middle">LA TRIADE CORALE</text>
<rect x="30" y="60" width="160" height="120" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="110" y="86" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">STROFE</text>
<line x1="150" y1="140" x2="70" y2="140" stroke="#1d4ed8" stroke-width="4"/>
<polygon points="64,140 80,130 80,150" fill="#1d4ed8"/>
<text x="110" y="168" font-size="14" fill="#1e3a8a" text-anchor="middle">⟵ verso sinistra</text>
<rect x="220" y="60" width="160" height="120" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="300" y="86" font-size="16" font-weight="bold" fill="#14532d" text-anchor="middle">ANTISTROFE</text>
<line x1="250" y1="140" x2="340" y2="140" stroke="#15803d" stroke-width="4"/>
<polygon points="346,140 330,130 330,150" fill="#15803d"/>
<text x="300" y="168" font-size="14" fill="#14532d" text-anchor="middle">verso destra ⟶</text>
<rect x="410" y="60" width="160" height="120" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="490" y="86" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">EPODO</text>
<circle cx="490" cy="136" r="14" fill="#b45309"/>
<text x="490" y="168" font-size="14" fill="#78350f" text-anchor="middle">il coro si ferma</text>
<text x="300" y="215" font-size="15" fill="#1e293b" text-anchor="middle">Strofe e antistrofe hanno lo stesso schema metrico; l'epodo uno diverso.</text>
<text x="300" y="245" font-size="15" fill="#1e293b" text-anchor="middle">La triade si ripete più volte nello stesso componimento.</text>
</svg>`
    },
    {
      type: `text`, title: `3. Alcmane e Stesicoro: i primi lirici corali`,
      html: `<p><b>Alcmane</b> operò a <b>Sparta</b> verso la fine del VII secolo a.C. (la tradizione antica lo diceva nato a Sardi in Lidia). Scrisse inni, peani e soprattutto <b>partenei</b>, canti per cori di fanciulle spartane. Il <b>Partenio del Louvre</b> (circa cento versi) fu scoperto nel 1855 in un papiro a <b>Saqqara</b>, in Egitto, da <b>Auguste Mariette</b>. Descrive un coro di fanciulle, in cui spiccano <b>Agesicora</b> e <b>Agido</b>, che cantano in onore di una divinità dell'alba (<b>Orthria</b>) e gareggiano con un altro coro. Ci mostra sentimenti, bellezza, desiderio: la comunità femminile e l'educazione di Sparta prima della sua militarizzazione.</p>
<p>Il frammento più celebre è la natura che dorme: <i>εὕδουσι δ᾽ ὀρέων κορυφαί τε καὶ φάραγγες</i> "dormono le cime dei monti e le gole…". Alcmane è il primo poeta occidentale di cui rimanga una vera <b>poesia della natura</b>.</p>
<p><b>Stesicoro</b> di Imera (Sicilia, VII-VI secolo a.C.) ampliò la lirica corale con <b>narrazioni lunghe</b>, quasi epiche, in triadi: la <i>Gerioneide</i> (Eracle e il mostro Gerione), l'<i>Orestea</i>, la <i>Presa di Troia</i>. Il suo nome significa "ordinatore del coro". Per la sua <b>Palinodia</b> (ritrattazione) su Elena la leggenda diceva che avesse perso la vista: dopo aver criticato Elena, per ritrovare la vista scrisse una "ritrattazione": <i>οὐκ ἔστ᾽ ἔτυμος λόγος οὗτος, οὐδ᾽ ἔβας ἐν νηυσὶν εὐσέλμοις οὐδ᾽ ἵκεο Πέργαμα Τροίας</i> "Non è vero questo racconto: non salisti sulle navi dai bei banchi né giungesti alla rocca di Troia". Il passo è citato da Platone (<i>Fedro</i>, 243a-b) e prepara la versione di Elena rimasta in Egitto, adottata poi da Erodoto ed Euripide.</p>`
    },
    {
      type: `text`, title: `4. Simonide di Ceo`,
      html: `<p><b>Simonide</b> nacque a <b>Iulide</b>, nell'isola di <b>Ceo</b>, intorno al 556 a.C. e morì a Siracusa nel 468. Fu il primo grande poeta "internazionale": visse ad Atene presso Ipparco, in Tessaglia, in Sicilia alla corte di Ierone. Secondo gli antichi fu anche il primo a farsi pagare per la sua poesia (e per questo venne accusato di avarizia). Celebre per la <b>brevità e la finezza</b>, scrisse inni, peani, ditirambi, <b>encomi</b>, <b>epinici</b>, <b>threnoi</b> ed <b>epigrammi</b>.</p>
<ul>
<li><b>L'epigramma dei caduti alle Termopili</b> (480 a.C.), riportato da Erodoto (VII, 228): <i>ὦ ξεῖν᾽, ἀγγέλλειν Λακεδαιμονίοις ὅτι τῇδε κείμεθα τοῖς κείνων ῥήμασι πειθόμενοι</i> "Straniero, va' a dire agli Spartani che qui giacciamo, obbedendo alle loro leggi".</li>
<li><b>Il threnos di Danae</b>: Danae chiusa in una cassa con il figlio Perseo in mezzo al mare, notte e tempesta: una scena di tenerezza materna.</li>
<li><b>Poesia e pittura</b>: Plutarco gli attribuisce la formula "la pittura è poesia muta e la poesia è pittura che parla" (da cui il <i>ut pictura poesis</i> di Orazio).</li>
<li><b>Il tema della fragilità umana</b>: la vita come breve e incerta, e la virtù (<i>ἀρετή</i>) come un'impresa difficilissima.</li>
</ul>
<p>Il suo stile è sobrio, chiaro, attento alla psicologia. Fu anche poeta della memoria storica: scrisse elegie su Salamina e Platea per celebrare le vittorie sui Persiani.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: i primi lirici`,
      questions: [
        { type: `mc`, q: `Che cos'è un partenio?`, options: [`un canto di fanciulle in onore di una dea`, `un canto funebre`, `un inno a Dioniso`], answer: 0, explain: `Dal greco παρθένος "fanciulla".` },
        { type: `mc`, q: `Dove fu scoperto il Partenio del Louvre di Alcmane?`, options: [`in Egitto, a Saqqara (1855)`, `a Sparta nel 1900`, `a Roma`], answer: 0, explain: `Papiro trovato da Auguste Mariette.` },
        { type: `mc`, q: `Chi introdusse la triade?`, options: [`Pindaro`, `Stesicoro`, `Bacchilide`], answer: 1, explain: `Stesicoro di Imera.` },
        { type: `tf`, q: `L'epigramma "ὦ ξεῖν᾽, ἀγγέλλειν Λακεδαιμονίοις…" è attribuito a Simonide.`, answer: true, explain: `Epitaffio dei caduti alle Termopili.` }
      ]
    },
    {
      type: `text`, title: `5. Pindaro e l'epinicio`,
      html: `<p><b>Pindaro</b> nacque a <b>Cinocefale</b>, presso <b>Tebe</b> (Beozia), intorno al 518 a.C., da famiglia aristocratica, e morì dopo il 446. Lavorò per tutta la Grecia: nobili di Egina, tiranni di Sicilia (<b>Ierone di Siracusa</b>, Terone di Agrigento), città come Cirene. Gli antichi ne raccolsero l'opera in 17 libri; ci restano solo gli <b>Epinici</b>, 45 odi in 4 libri, legati ai quattro giochi panellenici:</p>
<table>
<tr><th>Libro</th><th>Giochi</th><th>Luogo</th><th>Numero</th></tr>
<tr><td><b>Olimpiche</b></td><td>Olimpia</td><td>Elide, ogni 4 anni</td><td>14</td></tr>
<tr><td><b>Pitiche</b></td><td>Delfi</td><td>Apollo</td><td>12</td></tr>
<tr><td><b>Nemee</b></td><td>Nemea</td><td>Zeus nemeo</td><td>11</td></tr>
<tr><td><b>Istmiche</b></td><td>Istmo di Corinto</td><td>Poseidone</td><td>8</td></tr>
</table>
<p>L'<b>epinicio</b> (<i>ἐπινίκιον</i>, "canto per la vittoria") era commissionato dalla famiglia del vincitore ed eseguito da un coro nella sua città. La struttura tipica:</p>
<ol>
<li><b>Elogio</b> del vincitore, della famiglia, della patria, della gara;</li>
<li><b>Mito</b>: il racconto di un eroe o di un dio in rapporto con la patria o con la vittoria, al centro dell'ode;</li>
<li><b>Gnome</b> (massime morali): la sapienza aristocratica su fortuna, virtù, limite umano;</li>
<li><b>Preghiera e chiusura</b>: richiesta di prosperità, augurio di nuove vittorie.</li>
</ol>
<p>Lo stile è <b>alto, ardito, ricco di metafore e di salti</b>: il pensiero procede per "voli" e immagini, non per ragionamento lineare.</p>`
    },
    {
      type: `text`, title: `6. Pindaro: tre odi e tre idee`,
      html: `<ul>
<li><b>Olimpica 1</b> (476 a.C.) per <b>Ierone di Siracusa</b>, vincitore con il cavallo <b>Ferenico</b>. L'inizio è tra i più celebri: <i>ἄριστον μὲν ὕδωρ, ὁ δὲ χρυσὸς αἰθόμενον πῦρ ἅτε διαπρέπει νυκτὶ μεγάνορος ἔξοχα πλούτου</i> "Ottima è l'acqua, e l'oro come fuoco ardente splende nella notte più di ogni ricchezza". Come l'acqua è il più prezioso degli elementi, Olimpia è la più grande delle gare. Il mito racconta <b>Pelope</b> e <b>Tantalo</b>: Pindaro rifiuta la versione in cui gli dei mangiano Pelope fatto a pezzi, "mi è impossibile dire che un dio sia ghiotto".</li>
<li><b>Pitica 2</b>, a Ierone: <i>γένοι᾽ οἷος ἐσσὶ μαθών</i> "diventa quello che sei, avendolo imparato" (v. 72). La massima, usata da Nietzsche e in tutta la filosofia moderna, indica che la natura ricevuta deve essere realizzata con lo sforzo.</li>
<li><b>Pitica 8</b> (446 a.C.), per un lottatore di Egina: <i>ἐπάμεροι· τί δέ τις; τί δ᾽ οὔ τις; σκιᾶς ὄναρ ἄνθρωπος</i> "Esseri di un giorno! Che cos'è uno? che cosa non lo è? L'uomo è il sogno di un'ombra". Ma una luce divina (<i>αἴγλα διόσδοτος</i>) può dare allo splendore una vita breve e dolce.</li>
</ul>
<p>Per Pindaro la <b>vittoria</b> è dono degli dei e della <b>natura (φυά)</b> ereditata; l'uomo deve contraccambiare con la <b>virtù</b> e con la misura (<i>μέτρον</i>). Il poeta, a sua volta, dà gloria eterna al vincitore: senza canto, il suo nome sarebbe dimenticato.</p>
<p>Nella tradizione antica si raccontava che nel <b>335 a.C.</b>, quando Alessandro Magno distrusse Tebe, risparmiò la sola casa di Pindaro.</p>`
    },
    {
      type: `text`, title: `7. Bacchilide`,
      html: `<p><b>Bacchilide</b> (Ceo, circa 518-450 a.C.), <b>nipote di Simonide</b> (figlio di una sorella), lavorò per le stesse corti di Pindaro, compresa quella di Ierone a Siracusa. Gli antichi lo conoscevano e lo apprezzavano per la grazia e la chiarezza, ma di lui rimanevano solo frammenti fino al <b>1896</b>, quando il British Museum acquistò da Egitto un papiro: l'edizione di Frederic Kenyon (1897) restituì circa <b>venti componimenti</b> (14 epinici e 6 ditirambi).</p>
<ul>
<li><b>Ode 3</b>, per una vittoria di Ierone a Olimpia (468 a.C.): racconta <b>Creso sul rogo</b>, salvato da Apollo, in un'emozionante meditazione sul destino dei ricchi.</li>
<li><b>Ode 17</b>, un ditirambo ("I giovani" o "Teseo"): <b>Teseo</b> si getta in mare per provare a Minosse di essere figlio di Poseidone; discende fra le Nereidi e ne torna con una veste di porpora. Nell'Ode 18, sullo stesso eroe, Bacchilide mette in scena un dialogo fra il coro e il re Egeo che anticipa il teatro.</li>
</ul>
<p>Rispetto a Pindaro, Bacchilide è <b>più chiaro, più narrativo, più sereno</b>. Nell'Olimpica 2 Pindaro oppone chi è sapiente "per natura" (l'aquila di Zeus) ai poeti che hanno solo imparato e "gracchiano come corvi": gli antichi vi lessero un'allusione ai rivali Simonide e Bacchilide. Il giudizio moderno è più equo.</p>`
    },
    {
      type: `widget`, title: `Gioco: genere e occasione`,
      widget: `match`,
      options: {
        pairs: [
          [`Peana`, `canto ad Apollo`],
          [`Ditirambo`, `canto a Dioniso`],
          [`Partenio`, `coro di fanciulle`],
          [`Threnos`, `lamento funebre`],
          [`Epinicio`, `vittoria atletica`],
          [`Iporchema`, `canto con danza mimica`]
        ]
      },
      caption: `Collega ciascun genere corale alla sua occasione.`
    },
    {
      type: `example`, title: `Lettura guidata: l'attacco dell'Olimpica 1`,
      html: `<p><i>ἄριστον μὲν ὕδωρ, ὁ δὲ χρυσὸς αἰθόμενον πῦρ<br>ἅτε διαπρέπει νυκτὶ μεγάνορος ἔξοχα πλούτου·</i></p>
<ol>
<li><b>ἄριστον μὲν ὕδωρ</b>: <i>μέν…</i> introduce una serie di superlativi; <i>ἄριστον</i> "la migliore" (cosa), <i>ὕδωρ</i> "l'acqua" (Talete: l'acqua come principio).</li>
<li><b>ὁ δὲ χρυσός</b>: "e l'oro"; <b>αἰθόμενον πῦρ</b> "fuoco che arde", paragone; <b>ἅτε</b> "come".</li>
<li><b>διαπρέπει νυκτί</b>: "risplende nella notte" (dativo di tempo); <b>ἔξοχα</b> "in modo eccezionale"; <b>μεγάνορος πλούτου</b>: "della ricchezza che inorgoglisce, che gonfia".</li>
</ol>
<p>Dopo acqua e oro, Pindaro cita il sole ("il più caldo astro del giorno"), poi i giochi di Olimpia: "nessuna gara è più grande". L'ode si apre quindi con una <b>climax</b> di cose supreme, preparando il lettore a un vertice: la vittoria di Ierone.</p>`
    },
    {
      type: `example`, title: `Analisi di una massima pindarica`,
      html: `<p><b>γένοι᾽ οἷος ἐσσὶ μαθών</b> (Pitica 2, 72)</p>
<ul>
<li><i>γένοι᾽</i> = <i>γένοιο</i>: ottativo aoristo medio di <i>γίγνομαι</i> usato come <b>imperativo desiderativo</b> ("divieni"), con elisione.</li>
<li><i>οἷος ἐσσί</i>: "quale sei"; <i>ἐσσί</i> è la forma dorica-epica di <i>εἶ</i> (2ª sing. di <i>εἰμί</i>).</li>
<li><i>μαθών</i>: participio aoristo di <i>μανθάνω</i> "avendo imparato, avendo riconosciuto".</li>
</ul>
<p>Traduzione: "Diventa ciò che sei, avendolo imparato." Nel contesto: Ierone deve essere il re giusto che la sua natura e il suo destino richiedono; si tratta anche di una <b>lode velata e un consiglio</b>, tipico dell'epinicio.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Simonide inventò l'arte della memoria?`,
      html: `<p>Cicerone (<i>De oratore</i> II, 351-354) racconta che Simonide fu invitato a un banchetto dal nobile tessalo <b>Scopa</b>. Chiamato fuori da due giovani messaggeri (i Dioscuri), uscì un attimo prima che il soffitto crollasse, uccidendo tutti i convitati. I corpi erano irriconoscibili, ma Simonide ricordò <b>dove ciascuno sedeva</b> e permise l'identificazione. Da questo episodio avrebbe tratto il metodo dei <b>"luoghi"</b> (la tecnica del <i>palazzo della memoria</i>) usata ancora oggi: associare ogni cosa da ricordare a un luogo preciso.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… l'Olimpica 1 non è un'ode sulla corsa?`,
      html: `<p>Pindaro compose le odi per vittorie con carri e cavalli, non per i corridori: i vincitori erano <b>i proprietari</b> dei cavalli (come Ierone), quindi aristocratici e tiranni. L'epinicio non loda solo la forza fisica, ma la <b>ricchezza</b>, la <b>stirpe</b> e la <b>fortuna</b> che rendono possibile la vittoria. Il premio era un ramoscello (olivo selvatico a Olimpia, alloro a Delfi, sedano a Nemea, pino all'Istmo): la gloria vale più dell'oro, e Pindaro lo ricorda spesso.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capire la lirica corale`,
      intro: `Un testo nato per essere danzato si capisce meglio con le immagini e i confronti.`,
      tabs: [
        {
          label: `🏟️ Il confronto con un concerto`,
          html: `<p>Immagina la <b>cerimonia di premiazione</b> di un grande evento: musica, coro, danze, discorsi di lode. L'epinicio è un po' questo: <b>la famiglia del vincitore</b> paga un poeta famoso, il coro si presenta nella piazza della città o davanti al tempio, canta e danza l'ode. Dopo qualche anno la ode viene riascoltata e <b>conservata</b>, ed è per questo che ci restano gli epinici.</p>`
        },
        {
          label: `🎭 Pindaro e Bacchilide`,
          html: `<table><tr><th></th><th>Pindaro</th><th>Bacchilide</th></tr><tr><td>Stile</td><td>alto, oscuro, ricco di salti</td><td>chiaro, fluido, narrativo</td></tr><tr><td>Mito</td><td>cuore morale dell'ode</td><td>racconto vivace e drammatico</td></tr><tr><td>Tono</td><td>aristocratico, quasi religioso</td><td>sereno, cortese</td></tr><tr><td>Dialetto</td><td>dorico letterario ricco</td><td>dorico più leggero</td></tr></table>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `Pindaro`, back: `Cinocefale/Tebe, 45 epinici, Ol. 1, Pit. 8, stile alto` },
            { front: `Bacchilide`, back: `Ceo, papiro del 1896, Ode 3 (Creso) e Ode 17 (Teseo)` },
            { front: `Simonide`, back: `Ceo, epigramma delle Termopili, threnos di Danae` },
            { front: `Alcmane`, back: `Sparta, Partenio del Louvre, fr. dei monti che dormono` },
            { front: `Stesicoro`, back: `Imera, triade, Gerioneide, Palinodia di Elena` }
          ] }
        },
        {
          label: `🗺️ Una mappa dei luoghi`,
          html: `<p>Ogni poeta è legato a una geografia: <b>Alcmane</b> ➜ Sparta; <b>Stesicoro</b> ➜ Imera (Sicilia); <b>Simonide e Bacchilide</b> ➜ Ceo, Atene, Siracusa; <b>Pindaro</b> ➜ Tebe, con viaggi a Egina, Siracusa, Agrigento, Cirene. La lirica corale è la letteratura <b>panellenica</b> dei grandi santuari e delle corti.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: la lirica corale`,
      nodes: [
        { id: `co`, label: `Lirica corale`, x: 50, y: 8, color: `#a855f7`, html: `Poesia cantata e danzata da un coro per occasioni pubbliche.`, why: `Nasce dalle feste religiose e civili della polis: il coro è la comunità che si rappresenta. Per questo i suoi temi sono il mito, la lode, l'ordine cosmico e sociale.` },
        { id: `al`, label: `Alcmane`, x: 15, y: 38, color: `#ef4444`, html: `Partenei spartani, Partenio del Louvre.`, why: `Mostra il coro femminile come istituzione educativa: la bellezza e la voce delle fanciulle sono parte della vita civile.` },
        { id: `st`, label: `Stesicoro e triade`, x: 50, y: 38, color: `#16a34a`, html: `Strofe, antistrofe, epodo; miti lunghi.`, why: `La triade permette di articolare nel canto una narrazione lunga: ogni ripetizione dello schema è un "capitolo" del racconto.` },
        { id: `si`, label: `Simonide`, x: 82, y: 38, color: `#f59e0b`, html: `Epigrammi, threnoi, encomi, epinici.`, why: `Simonide fa della poesia una professione: poeta pagato, conteso fra le corti. Il suo stile sobrio prepara l'epinicio di Pindaro e di Bacchilide.` },
        { id: `pi`, label: `Pindaro`, x: 30, y: 74, color: `#3b82f6`, html: `Epinici: Olimpiche, Pitiche, Nemee, Istmiche.`, why: `L'aristocrazia vincitrice trova nel poeta il custode della propria gloria: il mito consacra la vittoria in una storia più grande.` },
        { id: `ba`, label: `Bacchilide`, x: 70, y: 74, color: `#0ea5e9`, html: `Papiro del 1896; Odi 3 e 17.`, why: `La sua riscoperta ha permesso di vedere un contrappunto a Pindaro: più narrativo, più "teatrale", fino a ricordare il ditirambo drammatico.` }
      ],
      edges: [
        [`co`, `al`, `origine`], [`co`, `st`, `forma`], [`co`, `si`, `professione`], [`si`, `pi`, `rivale`], [`si`, `ba`, `zio di`], [`pi`, `ba`, `rivali`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: Pindaro e Bacchilide`,
      questions: [
        { type: `mc`, q: `Per quale vittoria Pindaro compose l'Olimpica 1?`, options: [`quella del cavallo Ferenico di Ierone, 476 a.C.`, `quella di un lottatore di Egina`, `quella di un corridore ateniese`], answer: 0, explain: `Ierone di Siracusa.` },
        { type: `mc`, q: `Che cosa significa "σκιᾶς ὄναρ ἄνθρωπος"?`, options: [`l'uomo è il sogno di un'ombra`, `l'uomo è padrone dell'ombra`, `l'ombra è un sogno`], answer: 0, explain: `Pitica 8, 95.` },
        { type: `mc`, q: `Quando fu riscoperto Bacchilide?`, options: [`nel 1896 con un papiro del British Museum`, `nel 1700`, `nel 1950`], answer: 0, explain: `Edizione di Kenyon, 1897.` },
        { type: `tf`, q: `Strofe e antistrofe hanno lo stesso schema metrico.`, answer: true, explain: `L'epodo è invece diverso.` }
      ]
    }
  ],
  glossary: [
    { t: `Lirica corale`, d: `Poesia cantata e danzata da un coro in occasioni pubbliche.` },
    { t: `Triade`, d: `Struttura strofe-antistrofe-epodo, introdotta da Stesicoro.` },
    { t: `Epinicio`, d: `Ode corale per la vittoria in una gara panellenica (Pindaro, Bacchilide).` },
    { t: `Partenio`, d: `Canto per un coro di fanciulle, genere di Alcmane.` },
    { t: `Threnos`, d: `Lamento funebre.` },
    { t: `Ditirambo`, d: `Canto corale a Dioniso.` },
    { t: `Gnome`, d: `Massima morale inserita nel canto.` },
    { t: `Dorico letterario`, d: `Lingua poetica della lirica corale: α lungo al posto di η, con elementi epici ed eolici.` },
    { t: `Palinodia`, d: `Canto di ritrattazione: la Palinodia di Stesicoro su Elena.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Chi è l'autore del Partenio del Louvre?`, options: [`Alcmane`, `Simonide`, `Pindaro`], answer: 0, explain: `Poeta di Sparta, papiro di Saqqara (1855).` },
      { type: `mc`, q: `Quali sono le tre parti della triade?`, options: [`proemio, mito, epilogo`, `strofe, antistrofe, epodo`, `inno, peana, ditirambo`], answer: 1, explain: `Il coro si muove, torna indietro, si ferma.` },
      { type: `mc`, q: `A quale gara è collegato il libro delle "Pitiche"?`, options: [`Olimpia`, `Delfi`, `Nemea`], answer: 1, explain: `Giochi pitici, in onore di Apollo.` },
      { type: `tf`, q: `Simonide scrisse l'epitaffio per i caduti alle Termopili.`, answer: true, explain: `Riportato da Erodoto VII, 228.` },
      { type: `mc`, q: `Che cosa significa "γένοι᾽ οἷος ἐσσὶ μαθών"?`, options: [`diventa ciò che sei, avendolo imparato`, `impara ciò che diventi`, `non diventare ciò che sei`], answer: 0, explain: `Pitica 2, 72.` },
      { type: `mc`, q: `Quale parte dell'epinicio ha di solito funzione di racconto centrale?`, options: [`il mito`, `la gnome`, `la preghiera`], answer: 0, explain: `Il mito dà alla vittoria una dimensione eroica e divina.` },
      { type: `text`, q: `Come si chiama il cavallo di Ierone nell'Olimpica 1?`, answer: [`ferenico`, `φερένικος`], explain: `Ferenico, "portatore di vittoria".` },
      { type: `mc`, q: `Qual è la caratteristica del dialetto della lirica corale?`, options: [`α lungo al posto di η`, `assenza di articolo`, `aumento facoltativo`], answer: 0, explain: `Dorico letterario.` },
      { type: `mc`, q: `Chi era Bacchilide rispetto a Simonide?`, options: [`il nipote`, `il maestro`, `il fratello`], answer: 0, explain: `Figlio di una sorella di Simonide.` },
      { type: `order`, q: `Metti in ordine le parti di un epinicio pindarico.`, items: [`elogio del vincitore`, `mito`, `gnome`, `preghiera finale`], explain: `Schema tipico, con variazioni.` }
    ]
  }
});

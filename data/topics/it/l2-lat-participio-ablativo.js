TOPIC('it', {
  id: `l2-lat-participio-ablativo`,
  title: `Participio e ablativo assoluto`,
  intro: `Il participio è la forma verbale più "elegante" e frequente nei testi latini: condensa in una sola parola un'intera proposizione ("<i>i soldati, vinto il nemico, tornarono</i>"). Il latino ha <b>tre participi</b> (presente, perfetto, futuro), mentre l'italiano ne ha due; per questo lo traduci spesso con una <b>subordinata esplicita</b> (temporale, causale, concessiva, ipotetica). In questa lezione impari a <b>formare</b> i tre participi, a riconoscere il <b>participio congiunto</b> e, soprattutto, il celebre <b>ablativo assoluto</b>: una costruzione che compare in ogni pagina di Cesare, Livio, Cicerone. Con questa lezione puoi leggere periodi complessi senza perderti. 📖⚔️`,
  minutes: 55,
  sections: [
    {
      type: `text`, title: `1. I tre participi: formazione`,
      html: `<p>Il participio è un aggettivo verbale: ha il <b>tempo</b> (presente, perfetto, futuro) e la <b>diatesi</b> (attiva o passiva), ma si declina come un aggettivo e concorda con un nome. In latino:</p>
<table>
<tr><th>Participio</th><th>Formazione</th><th>Esempio (amo, moneo, rego, capio, audio)</th><th>Valore</th></tr>
<tr><td><b>presente</b> attivo</td><td>tema del presente + <b>-ns, -ntis</b> (1ª: -ans; 2ª: -ens; 3ª: -ens; 3ª in -io e 4ª: -iens)</td><td>amans, monens, regens, capiens, audiens</td><td>contemporaneità; "che ama, amando"</td></tr>
<tr><td><b>perfetto</b> passivo</td><td>4ª forma guida: <b>-tus, -ta, -tum</b> (o -sus)</td><td>amatus, monitus, rectus, captus, auditus</td><td>anteriorità; "amato, essendo stato amato"</td></tr>
<tr><td><b>futuro</b> attivo</td><td>tema del supino + <b>-urus, -ura, -urum</b></td><td>amaturus, moniturus, recturus, capturus, auditurus</td><td>posteriorità; "che sta per amare, per amare"</td></tr>
</table>
<p>Mancano due participi che l'italiano ha o crea: il <b>participio presente passivo</b> (si usa il perfetto o una costruzione con <i>dum</i>) e il <b>participio perfetto attivo</b>, che esiste solo nei <b>verbi deponenti</b>: <i>hortor, hortatus sum</i> ➜ <i>hortatus</i> "avendo esortato" (valore attivo!); <i>sequor, secutus</i> "avendo seguito"; <i>proficiscor, profectus</i> "essendo partito"; <i>loquor, locutus</i> "avendo parlato". Nel perfetto di questi verbi il participio si traduce <b>attivamente</b>.</p>
<p><b>Declinazione</b>:</p>
<ul>
<li>Il participio <b>presente</b> segue gli aggettivi della seconda classe a una uscita (come <i>ingens</i>): <i>amans, amantis; amanti; amantem; amante / amanti; plur. amantes, amantia; amantium</i>. Nota: l'<b>ablativo singolare</b> è in <b>-e</b> quando il participio è usato come verbo (<i>Caesare vivente</i>), in <b>-i</b> quando è un aggettivo (<i>a puero amanti</i>).</li>
<li>Il participio <b>perfetto</b> e <b>futuro</b> seguono gli aggettivi di prima classe: <i>amatus, -a, -um</i>; <i>amaturus, -a, -um</i>.</li>
</ul>`
    },
    {
      type: `svg`, title: `I tre participi sulla linea del tempo`,
      caption: `Il participio non indica il tempo assoluto, ma il rapporto con il verbo della frase.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef2f2"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#7f1d1d" text-anchor="middle">I TRE PARTICIPI</text>
<line x1="40" y1="155" x2="560" y2="155" stroke="#475569" stroke-width="4"/>
<polygon points="560,155 545,147 545,163" fill="#475569"/>
<rect x="250" y="118" width="100" height="74" rx="10" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="300" y="145" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">VERBO</text>
<text x="300" y="168" font-size="15" fill="#334155" text-anchor="middle">della frase</text>
<text x="300" y="187" font-size="15" fill="#334155" text-anchor="middle">(reggente)</text>
<text x="110" y="95" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">PERFETTO</text>
<text x="110" y="118" font-size="15" fill="#334155" text-anchor="middle">amatus</text>
<text x="110" y="214" font-size="14" fill="#334155" text-anchor="middle">PRIMA (anteriore)</text>
<text x="300" y="95" font-size="17" font-weight="bold" fill="#065f46" text-anchor="middle">PRESENTE</text>
<text x="300" y="214" font-size="14" fill="#334155" text-anchor="middle">INSIEME (contemporaneo)</text>
<text x="300" y="64" font-size="15" fill="#334155" text-anchor="middle">amans</text>
<text x="490" y="95" font-size="17" font-weight="bold" fill="#1e3a8a" text-anchor="middle">FUTURO</text>
<text x="490" y="118" font-size="15" fill="#334155" text-anchor="middle">amaturus</text>
<text x="490" y="214" font-size="14" fill="#334155" text-anchor="middle">DOPO (posteriore)</text>
<text x="300" y="255" font-size="15" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Il participio dice quando avviene la sua azione rispetto al verbo reggente</text>
<text x="300" y="278" font-size="14" fill="#334155" text-anchor="middle">non rispetto a oggi</text>
</svg>`
    },
    {
      type: `text`, title: `2. Il participio congiunto`,
      html: `<p>Si chiama <b>participio congiunto</b> un participio che concorda con un nome (o pronome) della frase e <b>si "congiunge"</b> sintatticamente a esso. È una subordinata <b>implicita</b>. Concorda in genere, numero e caso. Tra i valori più comuni, si traduce secondo il contesto:</p>
<ul>
<li><b>attributivo / appositivo</b>: <i>Vidi pueros ludentes</i> "Vidi i ragazzi che giocavano"; <i>Hostes fugientes persecuti sumus</i> "inseguimmo i nemici in fuga";</li>
<li><b>temporale</b>: <i>Caesar, Rubiconem transgressus, Ariminum venit</i> "Cesare, passato il Rubicone (dopo avere attraversato il Rubicone), giunse a Rimini";</li>
<li><b>causale</b>: <i>Milites, ducem amantes, fortiter pugnaverunt</i> "I soldati, poiché amavano il comandante, combatterono con coraggio";</li>
<li><b>concessivo</b> (con <i>quamquam</i>, <i>etsi</i>): <i>Hostes, victi, non cesserunt</i> "I nemici, benché vinti, non si arresero";</li>
<li><b>ipotetico</b>: <i>Hoc faciens, laetus eris</i> "Facendo questo (se farai questo), sarai felice";</li>
<li><b>modale / strumentale</b>: <i>Puer ridens venit</i> "Il ragazzo viene ridendo";</li>
<li><b>finale</b> (participio futuro): <i>Legati venerunt pacem petituri</i> "Gli ambasciatori vennero per chiedere la pace".</li>
</ul>
<p>Il participio congiunto concorda col <b>soggetto</b> o con un <b>complemento</b> della reggente: <i>Cives, hostes timentes, portas clauserunt</i> (soggetto); <i>Hostes, a militibus victos, vidimus</i> (complemento oggetto).</p>
<p><b>Esempio di struttura</b>: <i>Hannibal, Alpes transgressus, in Italiam venit</i> ➜ "Annibale, dopo avere attraversato le Alpi, giunse in Italia": <i>transgressus</i> (participio perfetto del deponente <i>transgredior</i>, quindi attivo) concorda con <i>Hannibal</i> e regge l'accusativo <i>Alpes</i>.</p>`
    },
    {
      type: `text`, title: `3. L'ablativo assoluto`,
      html: `<p>Si chiama "<b>assoluto</b>" (da <i>absolutus</i>, "sciolto") perché <b>non ha legami sintattici</b> con la reggente: né il soggetto, né l'oggetto, né altro. È formato da un <b>sostantivo (o pronome) all'ablativo + un participio all'ablativo concordato</b>, spesso al centro della frase tra due virgole.</p>
<p>Si usa quando l'<b>agente dell'azione participiale è diverso dal soggetto</b> della reggente (altrimenti si userebbe il participio congiunto):</p>
<ul>
<li><i>Hostibus victis, Romani domum redierunt.</i> ➜ "Dopo che i nemici furono vinti (vinti i nemici), i Romani tornarono a casa."</li>
<li><i>Caesare duce, milites vicerunt.</i> ➜ "Sotto la guida di Cesare (essendo Cesare il comandante), i soldati vinsero."</li>
<li><i>Cicerone consule, coniuratio Catilinae oppressa est.</i> ➜ "Sotto il consolato di Cicerone (essendo console Cicerone) la congiura di Catilina fu soffocata." (63 a.C.)</li>
<li><i>Sole oriente, discessimus.</i> ➜ "Al sorgere del sole (mentre il sole sorgeva) partimmo."</li>
</ul>
<p><b>Struttura</b>: <i>[nome in abl.] + [participio in abl.]</i>. Il participio può essere:</p>
<table>
<tr><th>Participio</th><th>Rapporto temporale</th><th>Esempio</th><th>Traduzione</th></tr>
<tr><td><b>perfetto</b> passivo</td><td>anteriorità</td><td><i>urbe capta</i></td><td>presa la città, dopo che la città fu presa</td></tr>
<tr><td><b>presente</b> attivo</td><td>contemporaneità</td><td><i>Caesare vivente</i></td><td>mentre Cesare viveva, vivo Cesare</td></tr>
<tr><td><b>futuro</b></td><td>raro: non si usa nel latino classico</td><td>—</td><td>—</td></tr>
<tr><td><b>nome + nome</b></td><td>(manca il participio di sum)</td><td><i>Caesare duce</i></td><td>sotto la guida di Cesare</td></tr>
</table>
<p>Poiché <i>sum</i> non ha il participio presente, l'ablativo assoluto <b>nominale</b> sostituisce <i>"essendo"</i> con due ablativi: <i>Cicerone consule</i> (essendo Cicerone console), <i>Tarquinio Superbo rege</i>, <i>me invito</i> "contro la mia volontà" (<i>invitus</i> = "contro voglia"), <i>me duce</i> "sotto la mia guida".</p>`
    },
    {
      type: `remember`, title: `Come tradurre un ablativo assoluto`,
      html: `<p>L'italiano non ha un equivalente identico. Scegli la traduzione che rende meglio il rapporto con la reggente:</p>
<ul>
<li><b>temporale</b>: "dopo che… / quando… / mentre…": <i>Urbe capta</i> "dopo che la città fu presa";</li>
<li><b>causale</b>: "poiché… / siccome…": <i>Duce mortuo, milites fugerunt</i> "poiché il comandante era morto, i soldati fuggirono";</li>
<li><b>concessivo</b>: "benché…": <i>Pace petita, bellum gesserunt</i> "benché la pace fosse stata chiesta…";</li>
<li><b>condizionale</b>: "se… / qualora…": <i>Deo volente</i> "se Dio vuole";</li>
<li><b>modale / strumentale</b>: "con… / in…": <i>Consilio adhibito</i> "con l'aiuto del consiglio"; "sotto la guida di".</li>
</ul>
<p><b>Passi per riconoscerlo</b>: 1) due parole all'ablativo vicine; 2) una è un participio; 3) il nome è <b>diverso</b> dal soggetto della reggente; 4) è staccato da virgole. Se tutte e quattro valgono, è un ablativo assoluto.</p>`
    },
    {
      type: `example`, title: `Ablativi assoluti in frase`,
      html: `<ol>
<li><i>Pace facta, milites in castra reverterunt.</i> ➜ "Fatta la pace, i soldati tornarono all'accampamento."</li>
<li><i>Multis civibus ad portam currentibus, consul in urbem intravit.</i> ➜ "Mentre molti cittadini correvano verso la porta, il console entrò in città."</li>
<li><i>Hostibus fugientibus, Romani eos persecuti sunt.</i> ➜ "Poiché i nemici fuggivano, i Romani li inseguirono." (<i>persecuti sunt</i>: perfetto di un deponente)</li>
<li><i>Hannibale duce, Poeni Alpes superaverunt.</i> ➜ "Sotto la guida di Annibale, i Cartaginesi superarono le Alpi."</li>
<li><i>Senatu consentiente, consules legem tulerunt.</i> ➜ "Con il consenso del senato, i consoli fecero approvare la legge."</li>
</ol>`
    },
    {
      type: `quiz`, title: `Mini-quiz: participi e ablativo assoluto`,
      questions: [
        { type: `text`, q: `Scrivi il participio presente (nominativo) di "audio".`, answer: [`audiens`], explain: `Audiens, audientis: 4ª coniugazione -iens.` },
        { type: `mc`, q: `Quale costruzione è l'ablativo assoluto?`, options: [`Urbe capta, Romani discesserunt`, `Romani urbem captam viderunt`, `Romani urbem capere voluerunt`], answer: 0, explain: `Nome e participio all'ablativo, staccati dal resto della frase.` },
        { type: `mc`, q: `Come si traduce "Caesare duce"?`, options: [`sotto la guida di Cesare`, `Cesare è un comandante`, `a Cesare comandante`], answer: 0, explain: `Ablativo assoluto nominale: essendo Cesare comandante.` },
        { type: `tf`, q: `Il participio perfetto dei deponenti ha valore attivo.`, answer: true, explain: `Hortatus = avendo esortato; profectus = essendo partito.` }
      ]
    },
    {
      type: `example`, title: `Participi congiunti in frase`,
      html: `<ol>
<li><i>Milites, ducem secuti, in urbem intraverunt.</i> ➜ "I soldati, seguito il comandante, entrarono in città." (<i>secuti</i>: deponente, attivo)</li>
<li><i>Puer, librum legens, in horto sedebat.</i> ➜ "Il ragazzo, leggendo un libro, sedeva nel giardino."</li>
<li><i>Hostes victi pacem petiverunt.</i> ➜ "I nemici, vinti, chiesero la pace."</li>
<li><i>Legati venerunt auxilium petituri.</i> ➜ "I legati vennero per chiedere aiuto."</li>
</ol>`
    },
    {
      type: `text`, title: `4. Il participio futuro e la perifrastica attiva`,
      html: `<p>Il <b>participio futuro attivo</b> (<i>amaturus, -a, -um</i>) esprime un'azione <b>posteriore</b> al verbo reggente. I suoi usi principali:</p>
<ul>
<li><b>perifrastica attiva</b> (participio futuro + <i>sum</i>): "sto per…, ho intenzione di…": <i>Venturus sum</i> "sto per venire"; <i>Caesar profecturus erat</i> "Cesare stava per partire";</li>
<li><b>valore finale</b> (con verbi di movimento): <i>Legati venerunt pacem petituri</i> "I legati vennero per chiedere la pace";</li>
<li><b>infinito futuro attivo</b>: <i>amaturum esse</i> (vedi lezione sull'accusativo con infinito);</li>
<li><b>sostantivato</b>: <i>morituri</i> "coloro che stanno per morire": <i>Ave, imperator, morituri te salutant</i> è il saluto dei gladiatori a Claudio secondo Svetonio (<i>Claudio</i> 21; il testo ha <i>have</i>, ossia "salve").</li>
</ul>
<p>Mancano però il participio futuro passivo e il participio presente passivo, sostituiti da altre costruzioni. Il <b>participio futuro passivo</b> latino è in realtà il <b>gerundivo</b> (<i>amandus</i>), che esprime obbligo ("da amare") e che trovi nella perifrastica passiva (<i>Carthago delenda est</i>).</p>`
    },
    {
      type: `text`, title: `5. Participio e relative: attenzione alle trappole`,
      html: `<p>Capire un participio non è sempre immediato. Alcune <b>trappole</b> comuni:</p>
<ul>
<li><b>Participio perfetto con "sum"</b>: <i>amatus est</i> è il perfetto passivo, non "è amato". Il participio è parte della forma verbale.</li>
<li><b>Participio con valore aggettivale</b>: <i>doctus</i> "dotto", <i>acutus</i> "acuto", <i>amans</i> "amante": hanno perso il valore verbale e hanno spesso l'ablativo in -i.</li>
<li><b>Participio sostantivato</b>: <i>amans</i> "l'amante", <i>sapiens</i> "il saggio", <i>factum</i> "il fatto", <i>dictum</i> "il detto", <i>praeteritum</i>, <i>nati</i> "i figli (i nati)".</li>
<li><b>Verbi intransitivi</b>: il participio perfetto di verbi intransitivi (<i>mortuus, profectus</i>) ha valore attivo: <i>Hannibale mortuo</i> "morto Annibale".</li>
</ul>
<p>Il trucco: guarda <b>concordanza</b> (genere, numero, caso) e <b>funzione</b>. Se il participio concorda con un nome della frase, è congiunto; se è in ablativo con un nome staccato, è assoluto.</p>`
    },
    {
      type: `widget`, title: `Gioco: che costruzione è?`,
      widget: `classify`,
      options: {
        groups: [`Participio congiunto`, `Ablativo assoluto`],
        items: [
          [`Caesar, urbem captam videns, gaudebat`, 0], [`Milites, ducem secuti, abierunt`, 0], [`Hostes fugientes vidimus`, 0], [`Legati pacem petituri venerunt`, 0],
          [`Urbe capta, hostes fugerunt`, 1], [`Caesare duce, vicimus`, 1], [`Sole oriente, profecti sumus`, 1], [`Pace facta, domum rediimus`, 1]
        ]
      },
      caption: `Participio congiunto = concorda con un nome della frase; ablativo assoluto = soggetto proprio, staccato.`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "Ab Urbe condita" è un ablativo assoluto sostantivato?`,
      html: `<p>Il titolo dell'opera di Livio, <b>Ab Urbe condita libri</b> ("libri dalla fondazione di Roma"), contiene un participio perfetto (<i>condita</i>, da <i>condo, condere</i>) concordato con <i>Urbe</i> ma <b>senza</b> reggente: significa "dalla città fondata" cioè "dalla fondazione di Roma". Lo stesso schema c'è in <i>post Christum natum</i> "dopo la nascita di Cristo" e in <i>pace terra marique parta</i> "conquistata la pace in terra e per mare". Il participio perfetto + nome in latino ha spesso il valore del <b>sostantivo astratto</b>: "la fondazione", "la nascita". Per tradurre questi costrutti in italiano, devi trasformare il participio in un sostantivo.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… esiste un famoso verso sull'ablativo assoluto?`,
      html: `<p>Orazio, nelle <i>Odi</i> (I, 7), scrive: <b>"Nil desperandum Teucro duce et auspice Teucro"</b> ("Non bisogna disperare, sotto la guida e gli auspici di Teucro"). È un ablativo assoluto nominale (<i>Teucro duce et auspice Teucro</i>) che rassicura i compagni: finché c'è Teucro (l'eroe greco che, dopo Troia, andò a fondare Salamina di Cipro), non c'è motivo di perdere la speranza. L'ablativo assoluto in Orazio ha un tono solenne, come in molte espressioni giuridiche: <i>"Deo volente"</i>, <i>"Domino adiuvante"</i>.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per riconoscere e tradurre`,
      intro: `Il participio può spaventare: ecco tre metodi pratici.`,
      tabs: [
        {
          label: `🔎 Cercare i due ablativi`,
          html: `<p>Scorri la frase e cerca <b>due parole consecutive all'ablativo</b> separate da virgole. Una è un nome, l'altra un participio concordato: <i>urbe capta</i>, <i>hostibus victis</i>, <i>multis civibus currentibus</i>. Poi chiediti: "chi compie l'azione del participio è lo stesso soggetto della frase?". Se no, è un ablativo assoluto.</p>`
        },
        {
          label: `🇮🇹 Trasformare in frase italiana`,
          html: `<p>Prova a convertire l'ablativo assoluto in una <b>subordinata completa</b> in italiano: <i>Urbe capta</i> ➜ "poiché / dopo che la città era stata presa". Poi sceglie il valore (temporale, causale…). Se la frase italiana scorre, hai scelto bene. Se suona forzata, prova un altro valore. È il metodo più usato nelle versioni.</p>`
        },
        {
          label: `📐 Tabella con tre colonne`,
          html: `<p>Disegna tre colonne: <b>chi?</b> (nome in ablativo), <b>che cosa è successo?</b> (participio), <b>che cosa succede dopo?</b> (verbo della reggente). Riempi le tre caselle per ogni frase e vedrai la sequenza logica: <i>urbe</i> (la città) + <i>capta</i> (è stata presa) ➜ <i>hostes fugerunt</i> (i nemici fuggirono). La struttura temporale diventa evidente.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa del participio`,
      nodes: [
        { id: `part`, label: `Participio`, x: 50, y: 8, color: `#a855f7`, html: `Aggettivo verbale con tempo e diatesi.`, why: `Il latino non ha il gerundio come l'italiano, né un participio perfetto attivo (se non nei deponenti): usa i participi per esprimere in modo sintetico ciò che noi diciamo con un'intera subordinata.` },
        { id: `pres`, label: `Presente`, x: 15, y: 38, color: `#f59e0b`, html: `amans, -antis: contemporaneità.`, why: `Si forma con -ns e si declina come aggettivo di 2ª classe: abl. in -e (verbale) o -i (aggettivale). Dà all'italiano parole come "amante", "dirigente", "studente".` },
        { id: `perf`, label: `Perfetto`, x: 50, y: 38, color: `#16a34a`, html: `amatus: anteriorità, valore passivo.`, why: `È la quarta forma guida del verbo e dà il passivo dei tempi del perfetto. È anche alla base dell'ablativo assoluto più frequente.` },
        { id: `fut`, label: `Futuro`, x: 85, y: 38, color: `#3b82f6`, html: `amaturus: posteriorità, perifrastica.`, why: `Nasce dal supino con -urus. Esprime intenzione o imminenza: è l'ultimo tempo verbale ad avere un participio proprio.` },
        { id: `cong`, label: `P. congiunto`, x: 28, y: 76, color: `#ef4444`, html: `Concorda con un nome della frase.`, why: `È la "subordinata implicita" per eccellenza: il latino sostituisce frasi con un participio quando il soggetto è lo stesso, per rendere lo stile più compatto.` },
        { id: `abl`, label: `Abl. assoluto`, x: 72, y: 76, color: `#06b6d4`, html: `Nome + participio in abl., staccati.`, why: `L'ablativo ha la funzione strumentale/circostanziale: "con quella cosa fatta". Il costrutto nasce da questo valore circostanziale, che col tempo si è reso indipendente dalla frase.` }
      ],
      edges: [
        [`part`, `pres`, `3 tempi`], [`part`, `perf`, ``], [`part`, `fut`, ``], [`perf`, `cong`, `usa`], [`perf`, `abl`, `usa`], [`pres`, `abl`, `usa`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: traduzioni`,
      questions: [
        { type: `mc`, q: `Come si traduce "Hostibus victis, Romani discesserunt"?`, options: [`Vinti i nemici, i Romani partirono`, `I Romani vinsero i nemici e partirono`, `I nemici vincono i Romani`], answer: 0, explain: `Ablativo assoluto: nome + participio perfetto passivo.` },
        { type: `text`, q: `Scrivi il participio futuro di "amo" (nominativo maschile).`, answer: [`amaturus`], explain: `Supino amat- + -urus.` },
        { type: `mc`, q: `"Legati pacem petituri venerunt": petituri ha valore…`, options: [`finale`, `causale`, `concessivo`], answer: 0, explain: `Il participio futuro con verbi di movimento ha valore finale.` },
        { type: `tf`, q: `Il participio futuro si usa spesso nell'ablativo assoluto classico.`, answer: false, explain: `Nel latino classico si usa solo il presente e il perfetto.` }
      ]
    }
  ],
  glossary: [
    { t: `Participio`, d: `Aggettivo verbale: presente (amans), perfetto (amatus), futuro (amaturus).` },
    { t: `Participio congiunto`, d: `Participio concordato con un nome della frase: subordinata implicita.` },
    { t: `Ablativo assoluto`, d: `Nome e participio all'ablativo, sintatticamente staccati dal resto della frase.` },
    { t: `Ablativo assoluto nominale`, d: `Costruzione con due nomi all'ablativo (Caesare duce).` },
    { t: `Perifrastica attiva`, d: `Participio futuro + sum: "sto per…".` },
    { t: `Deponente`, d: `Verbo con forma passiva e significato attivo: hortor, hortatus sum.` },
    { t: `Anteriorità`, d: `Azione precedente a quella del verbo reggente.` },
    { t: `Contemporaneità`, d: `Azione contemporanea a quella del verbo reggente.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `text`, q: `Scrivi il participio perfetto di "capio" (nominativo maschile singolare).`, answer: [`captus`], explain: `Capio, capere, cepi, captum ➜ captus.` },
      { type: `mc`, q: `Quale participio ha valore di posteriorità?`, options: [`amans`, `amatus`, `amaturus`], answer: 2, explain: `Il participio futuro indica un'azione posteriore.` },
      { type: `mc`, q: `Qual è l'ablativo assoluto in "Caesar, urbe capta, gaudebat"?`, options: [`urbe capta`, `Caesar`, `gaudebat`], answer: 0, explain: `Nome e participio all'ablativo.` },
      { type: `mc`, q: `Come si traduce "Cicerone consule"?`, options: [`sotto il consolato di Cicerone`, `Cicerone è console`, `per Cicerone console`], answer: 0, explain: `Ablativo assoluto nominale.` },
      { type: `text`, q: `Scrivi l'ablativo singolare del participio presente "amans" quando è usato come verbo.`, answer: [`amante`], explain: `Come verbo: abl. in -e (Caesare vivente).` },
      { type: `mc`, q: `"Hortatus" in "Dux milites hortatus est" è…`, options: [`participio con valore attivo, parte del perfetto del deponente`, `participio passivo`, `supino`], answer: 0, explain: `Hortatus est è il perfetto del deponente hortor.` },
      { type: `mc`, q: `Traduci "Hostibus fugientibus".`, options: [`mentre i nemici fuggivano`, `dopo che i nemici fuggirono`, `se i nemici fuggissero`], answer: 0, explain: `Participio presente: contemporaneità.` },
      { type: `tf`, q: `L'ablativo assoluto si usa quando il soggetto del participio è lo stesso della reggente.`, answer: false, explain: `In quel caso si usa il participio congiunto.` },
      { type: `mc`, q: `Che cosa significa "morituri te salutant"?`, options: [`coloro che stanno per morire ti salutano`, `i morti ti salutano`, `chi muore saluta`], answer: 0, explain: `Moriturus = che sta per morire (participio futuro).` },
      { type: `order`, q: `Metti in ordine i passi per riconoscere un ablativo assoluto.`, items: [`Cercare due parole all'ablativo`, `Verificare che una sia un participio concordato`, `Controllare che il nome non sia soggetto della reggente`, `Scegliere il valore (temporale, causale…)`], explain: `Prima individuare, poi controllare l'autonomia sintattica, infine tradurre.` }
    ]
  }
});

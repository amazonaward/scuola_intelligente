TOPIC('it', {
  id: `l3-lat-cicerone`,
  title: `Cicerone`,
  intro: `Marco Tullio Cicerone è <b>il</b> prosatore latino: per secoli "scrivere bene in latino" ha voluto dire "scrivere come Cicerone". Avvocato, console, filosofo, epistolografo, è l'unico autore antico di cui conosciamo anche centinaia di <b>lettere private</b>, scritte senza pensare alla posterità: ci mostrano un uomo ambizioso, vanitoso, a volte pauroso, ma anche tenero con la figlia e fedele all'amico Attico. Visse nell'ultimo secolo della Repubblica, tra Mario e Silla, Pompeo e Cesare, Antonio e Ottaviano, e pagò con la vita il suo ideale politico. In questa lezione ripercorriamo la sua carriera attraverso le sue <b>orazioni</b>, le opere <b>filosofiche</b> e le <b>lettere</b>, e scopriamo perché fu chiamato "padre della patria" e poi condannato dai suoi stessi alleati. 🗣️`,
  minutes: 60,
  sections: [
    {
      type: `text`, title: `1. Una vita nel cuore della crisi`,
      html: `<p><b>Marco Tullio Cicerone</b> nacque il <b>3 gennaio del 106 a.C.</b> ad <b>Arpino</b>, nel Lazio meridionale, da una ricca famiglia equestre. Era un <b><i>homo novus</i></b>: nessuno dei suoi antenati era stato console. Studiò a Roma (retorica, diritto, filosofia) e poi in <b>Grecia e a Rodi</b> (79-77 a.C.), dove seguì il retore Molone.</p>
<ul>
<li><b>81-80 a.C.</b>: prime orazioni (<i>Pro Quinctio</i>, <i>Pro Roscio Amerino</i>);</li>
<li><b>75 a.C.</b>: questore in Sicilia; <b>70 a.C.</b>: processo a Verre (<i>Verrine</i>);</li>
<li><b>66 a.C.</b>: pretore; <b>63 a.C.</b>: <b>console</b>, sventa la congiura di Catilina;</li>
<li><b>58-57 a.C.</b>: <b>esilio</b>, per la legge del tribuno Clodio sull'uccisione dei cittadini senza processo; ritorna trionfalmente a Roma;</li>
<li><b>49-46 a.C.</b>: guerra civile; sceglie Pompeo ma viene perdonato da Cesare;</li>
<li><b>46-44 a.C.</b>: lontano dalla politica scrive gran parte delle opere filosofiche; muore (45) l'amata figlia <b>Tullia</b>;</li>
<li><b>44-43 a.C.</b>: dopo l'assassinio di Cesare, attacca Marco Antonio nelle <b>Filippiche</b>;</li>
<li><b>7 dicembre 43 a.C.</b>: iscritto nelle <b>liste di proscrizione</b> del secondo triumvirato (Antonio, Ottaviano, Lepido), è ucciso a <b>Formia</b>. La testa e le mani furono esposte sui Rostri, nel Foro.</li>
</ul>
<p>La sua vita è un riassunto della crisi repubblicana: tentò di difendere la <i>concordia ordinum</i> (alleanza tra senatori e cavalieri) e il governo del senato, ma fu schiacciato dalle forze di chi aveva eserciti.</p>`
    },
    {
      type: `widget`, title: `Cronologia di Cicerone`,
      widget: `timeline`,
      options: {
        events: [
          { year: -106, label: `Nascita ad Arpino`, icon: `👶` },
          { year: -70, label: `Verrine`, icon: `⚖️` },
          { year: -63, label: `Console: Catilina`, icon: `🏛️` },
          { year: -58, label: `Esilio`, icon: `🚶` },
          { year: -44, label: `Cesare ucciso, Filippiche`, icon: `🗣️` },
          { year: -43, label: `Morte a Formia`, icon: `🕊️` }
        ],
        unit: `anni`
      },
      caption: `Una carriera tra tribunali, senato e filosofia.`
    },
    {
      type: `text`, title: `2. Le orazioni`,
      html: `<p>Cicerone fu soprattutto un <b>oratore</b>. Delle sue orazioni ne restano <b>58</b> (alcune incomplete). Quelle fondamentali:</p>
<table>
<tr><th>Orazione</th><th>Anno</th><th>Contenuto</th></tr>
<tr><td><b>Pro Roscio Amerino</b></td><td>80 a.C.</td><td>difesa di un giovane accusato di parricidio da amici di Silla; prima orazione di rilievo politico</td></tr>
<tr><td><b>In Verrem</b> (Verrine)</td><td>70 a.C.</td><td>accusa a Gaio Verre, governatore della Sicilia, per estorsioni (<i>de repetundis</i>); vittoria su Ortensio, il miglior avvocato del tempo</td></tr>
<tr><td><b>De imperio Cn. Pompei</b></td><td>66 a.C.</td><td>sostiene il comando di Pompeo contro Mitridate</td></tr>
<tr><td><b>In Catilinam</b> (4 Catilinarie)</td><td>63 a.C.</td><td>contro Catilina e i congiurati</td></tr>
<tr><td><b>Pro Archia</b></td><td>62 a.C.</td><td>difesa del poeta greco Archia, con un elogio della letteratura</td></tr>
<tr><td><b>Pro Caelio</b></td><td>56 a.C.</td><td>difesa di Celio Rufo, con attacco a Clodia (la "Lesbia" di Catullo)</td></tr>
<tr><td><b>Pro Milone</b></td><td>52 a.C.</td><td>difesa di Milone, che aveva ucciso Clodio (rimase muto per il tumulto; la versione scritta è un capolavoro)</td></tr>
<tr><td><b>Philippicae</b> (14)</td><td>44-43 a.C.</td><td>contro Marco Antonio; il nome richiama Demostene contro Filippo di Macedonia</td></tr>
</table>
<p>L'attacco della <b>Prima Catilinaria</b> è un modello di retorica: <b>"Quo usque tandem abutere, Catilina, patientia nostra?"</b> ("Fino a quando, Catilina, abuserai della nostra pazienza?"), seguito subito da <b>"O tempora, o mores!"</b> ("Che tempi, che costumi!"). Il discorso, pronunciato in senato l'8 novembre del 63, ha una struttura da manuale: domande incalzanti, anafore, ripetizioni, apostrofi al nemico.</p>`
    },
    {
      type: `svg`, title: `La struttura di un'orazione`,
      caption: `Le parti del discorso secondo la retorica antica: ogni orazione di Cicerone le segue.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#14532d" text-anchor="middle">LE PARTI DI UN'ORAZIONE</text>
<rect x="20" y="55" width="100" height="100" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="3"/>
<text x="70" y="85" font-size="16" font-weight="bold" fill="#166534" text-anchor="middle">1</text>
<text x="70" y="108" font-size="15" font-weight="bold" fill="#334155" text-anchor="middle">Exordium</text>
<text x="70" y="130" font-size="14" fill="#334155" text-anchor="middle">cattivare</text>
<text x="70" y="148" font-size="14" fill="#334155" text-anchor="middle">il pubblico</text>
<rect x="130" y="55" width="100" height="100" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="3"/>
<text x="180" y="85" font-size="16" font-weight="bold" fill="#155e75" text-anchor="middle">2</text>
<text x="180" y="108" font-size="15" font-weight="bold" fill="#334155" text-anchor="middle">Narratio</text>
<text x="180" y="130" font-size="14" fill="#334155" text-anchor="middle">esposizione</text>
<text x="180" y="148" font-size="14" fill="#334155" text-anchor="middle">dei fatti</text>
<rect x="240" y="55" width="100" height="100" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/>
<text x="290" y="85" font-size="16" font-weight="bold" fill="#5b21b6" text-anchor="middle">3</text>
<text x="290" y="108" font-size="15" font-weight="bold" fill="#334155" text-anchor="middle">Argumentatio</text>
<text x="290" y="130" font-size="14" fill="#334155" text-anchor="middle">prove e</text>
<text x="290" y="148" font-size="14" fill="#334155" text-anchor="middle">confutazione</text>
<rect x="350" y="55" width="100" height="100" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="3"/>
<text x="400" y="85" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">4</text>
<text x="400" y="108" font-size="15" font-weight="bold" fill="#334155" text-anchor="middle">Peroratio</text>
<text x="400" y="130" font-size="14" fill="#334155" text-anchor="middle">appello</text>
<text x="400" y="148" font-size="14" fill="#334155" text-anchor="middle">ai sentimenti</text>
<rect x="460" y="55" width="120" height="100" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
<text x="520" y="85" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">Tre scopi</text>
<text x="520" y="110" font-size="14" fill="#334155" text-anchor="middle">docere</text>
<text x="520" y="128" font-size="14" fill="#334155" text-anchor="middle">delectare</text>
<text x="520" y="146" font-size="14" fill="#334155" text-anchor="middle">movere</text>
<text x="300" y="205" font-size="16" font-weight="bold" fill="#14532d" text-anchor="middle">Insegnare (docere), piacere (delectare), commuovere (movere)</text>
<text x="300" y="235" font-size="15" fill="#334155" text-anchor="middle">Per Cicerone l'oratore perfetto fa tutte e tre le cose</text>
<text x="300" y="262" font-size="14" fill="#334155" text-anchor="middle">e le tre "qualità di stile": semplice, medio, grandioso</text>
</svg>`
    },
    {
      type: `remember`, title: `Lo stile ciceroniano`,
      html: `<ul>
<li><b>Periodo</b>: frasi lunghe e architettate, con subordinate che "si aprono" e "si chiudono" come un arco; il verbo spesso alla fine.</li>
<li><b>Concinnitas</b>: simmetria, parallelismo, equilibrio fra i membri; è l'opposto dell'inconcinnitas di Sallustio.</li>
<li><b>Clausole ritmiche</b>: le ultime sillabe della frase seguono schemi fissi (<i>esse videatur</i>) per dare un finale sonoro.</li>
<li><b>Figure retoriche</b>: anafora, climax, domanda retorica, apostrofe, ironia.</li>
<li><b>Lessico</b>: usa parole latine per tradurre i termini greci della filosofia (<i>qualitas</i>, <i>moralis</i>, <i>humanitas</i>), creando la lingua filosofica dell'Occidente.</li>
</ul>
<p>Lo stile di Cicerone fu considerato modello di purezza (<i>Ciceronianus sermo</i>) da Quintiliano e poi nell'Umanesimo.</p>`
    },
    {
      type: `example`, title: `Le Verrine: la giustizia contro la corruzione`,
      html: `<p>Nel 73-71 a.C. <b>Gaio Verre</b> governò la Sicilia come propretore e la saccheggiò: sottrasse opere d'arte, tasse indebite, condanne vendute a pagamento. I siciliani chiesero a Cicerone, che era stato loro questore, di accusarlo a Roma. Il difensore era <b>Quinto Ortensio Ortalo</b>, il più celebre avvocato del tempo. Cicerone trasformò il processo in una dimostrazione di efficienza: in soli <b>cinquanta giorni</b> girò la Sicilia raccogliendo prove, e al processo (70 a.C.) dopo la prima azione (<i>actio prima</i>) con la testimonianza dei testimoni, la pubblicità fu tale che Verre fuggì in esilio volontario a Marsiglia prima della seconda. Cicerone pubblicò comunque la seconda azione (<i>actio secunda</i>, 5 libri), come libello contro il malgoverno. Da qui la sua fama: l'ascesa di un <i>homo novus</i> capace di sconfiggere l'aristocrazia nei tribunali.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: le orazioni`,
      questions: [
        { type: `mc`, q: `Contro chi sono dirette le Verrine?`, options: [`Gaio Verre`, `Catilina`, `Marco Antonio`], answer: 0, explain: `Governatore di Sicilia.` },
        { type: `mc`, q: `In quale anno Cicerone fu console?`, options: [`63 a.C.`, `70 a.C.`, `44 a.C.`], answer: 0, explain: `Anno della congiura di Catilina.` },
        { type: `tf`, q: `Le Filippiche sono rivolte contro Cesare.`, answer: false, explain: `Sono rivolte contro Marco Antonio.` },
        { type: `text`, q: `Completa: "O tempora, o ..." (una parola)`, answer: [`mores`], explain: `Prima Catilinaria.` }
      ]
    },
    {
      type: `text`, title: `3. Retorica e politica`,
      html: `<p>Oltre alle orazioni Cicerone scrisse opere teoriche sull'arte oratoria e sulla politica:</p>
<ul>
<li><b>De inventione</b> (opera giovanile, sull'elaborazione degli argomenti);</li>
<li><b>De oratore</b> (55 a.C.): dialogo in tre libri su come si forma l'oratore ideale: deve avere cultura generale, filosofia, diritto, storia. È qui che dichiara che la storia è <i>magistra vitae</i> ("maestra di vita", II, 36);</li>
<li><b>Brutus</b> e <b>Orator</b> (46 a.C.): storia dell'eloquenza romana e ritratto dell'oratore perfetto;</li>
<li><b>De re publica</b> (54-51 a.C.): dialogo sulla migliore forma di stato, ambientato nel 129 a.C. nel circolo di Scipione Emiliano; per Cicerone è la <b>costituzione mista</b> (monarchia, aristocrazia, democrazia), come a Roma. Contiene il celebre <b>Somnium Scipionis</b>, un sogno in cui Scipione contempla l'universo e apprende che chi serve la patria ha un posto in cielo;</li>
<li><b>De legibus</b>: sulle leggi ideali, fondate sul diritto naturale.</li>
</ul>
<p>Il suo ideale: un cittadino che <b>unisce cultura e azione</b>, il <i>rector rei publicae</i>, guida morale dello stato, che si ritira solo per un <b>otium cum dignitate</b> (riposo dignitoso, <i>Pro Sestio</i> 98). È un ideale che affonda nei valori della repubblica aristocratica e che il tempo, con Cesare e Augusto, rese sempre più anacronistico.</p>`
    },
    {
      type: `text`, title: `4. La filosofia: dare al latino il pensiero greco`,
      html: `<p>Nel periodo di inattività forzata (46-44 a.C.), dopo la morte della figlia e la dittatura di Cesare, Cicerone si dedica alla <b>filosofia</b>, scrivendo in pochi anni un'intera biblioteca. Non è un filosofo originale: il suo merito è di <b>tradurre, adattare e divulgare</b> in latino il pensiero greco (platonico, stoico, epicureo, scettico). Dichiara di appartenere alla <b>Nuova Accademia</b>, che sceglie sempre l'opinione "più probabile" (<i>probabile</i>) senza pretendere certezze assolute.</p>
<table>
<tr><th>Opera</th><th>Tema</th></tr>
<tr><td><b>Academica</b></td><td>teoria della conoscenza (scetticismo moderato)</td></tr>
<tr><td><b>De finibus bonorum et malorum</b></td><td>il sommo bene: epicurei, stoici, accademici</td></tr>
<tr><td><b>Tusculanae disputationes</b></td><td>cinque libri su morte, dolore, passioni, virtù e felicità</td></tr>
<tr><td><b>De natura deorum</b>, <b>De divinatione</b>, <b>De fato</b></td><td>teologia, arte divinatoria, destino</td></tr>
<tr><td><b>Cato maior de senectute</b>, <b>Laelius de amicitia</b></td><td>la vecchiaia e l'amicizia (dialoghi)</td></tr>
<tr><td><b>De officiis</b> (44 a.C.)</td><td>i doveri: dedicato al figlio Marco; ispirato a Panezio. Contiene la formula "<i>summum ius, summa iniuria</i>" (I, 33): "il massimo del diritto è il massimo dell'ingiustizia"</td></tr>
</table>
<p>Cicerone <b>inventa il lessico filosofico latino</b>: <i>qualitas</i> (qualità), <i>moralis</i> (morale), <i>humanitas</i> (umanità), <i>natura</i>, <i>notio</i>, <i>visum</i> (rappresentazione) e molti altri; parole che l'italiano e le lingue europee hanno ereditato.</p>`
    },
    {
      type: `example`, title: `Humanitas: il valore di una parola`,
      html: `<p>La parola <b><i>humanitas</i></b> in Cicerone indica un ideale: <b>l'umanità colta</b>, cioè la formazione completa dell'uomo con le lettere, la filosofia, l'educazione e la gentilezza. Nel <i>Pro Archia</i> (62 a.C.) difende il poeta greco accusato di non avere la cittadinanza e coglie l'occasione per elogiare gli studi: le lettere "nutrono la giovinezza, rallegrano la vecchiaia, abbelliscono la buona sorte, danno rifugio e conforto nelle avversità". Gli umanisti del XIV e XV secolo (Petrarca, Poggio Bracciolini) riscoprirono Cicerone proprio per questo ideale. Quando oggi diciamo <i>studi umanistici</i>, usiamo ancora quella parola.</p>`
    },
    {
      type: `text`, title: `5. Le lettere: Cicerone in pantofole`,
      html: `<p>Ci restano circa <b>900 lettere</b> di Cicerone, raccolte dopo la morte da <b>Tirone</b>, il suo segretario (liberto, a cui si attribuisce l'invenzione delle note tironiane, un sistema di stenografia):</p>
<ul>
<li><b>Epistulae ad Atticum</b> (16 libri): lettere al fidato amico Tito Pomponio Attico, il più intimo; confidenze, paure, commenti sugli avvenimenti;</li>
<li><b>Epistulae ad familiares</b> (16 libri): a diversi amici e colleghi (anche Cesare e Cassio);</li>
<li><b>Ad Quintum fratrem</b> (3 libri) e <b>Ad Brutum</b>.</li>
</ul>
<p>Sono un documento unico: ci mostrano la <b>politica dall'interno</b> (la caduta della Repubblica), ma anche la sua quotidianità: l'esilio, la delusione per Pompeo, il dolore per Tullia, gli acquisti di libri. In una lettera all'amico Varrone scrive: <b>"Si hortum in bibliotheca habes, nihil deerit"</b> ("Se hai un giardino nella biblioteca, non ti mancherà nulla", <i>Ad familiares</i> IX, 4): un'immagine della vita ideale tra libri e piante. Il latino qui è più colloquiale ma altrettanto elegante: modello dello stile epistolare per Petrarca e per gli umanisti.</p>`
    },
    {
      type: `decision`, title: `43 a.C.: attaccare Antonio o ritirarsi?`,
      html: `<p>Cesare è morto (44 a.C.). Marco Antonio, suo luogotenente e console, vuole ereditarne il potere. Ottaviano, diciannovenne erede di Cesare, è sulla scena. Tu sei <b>Cicerone</b>: sessantadue anni, ex console, gloria del senato. Ti sei ritirato nella campagna, ma ti dicono che il senato ti ascolterebbe ancora.</p>`,
      question: `Che cosa fai?`,
      options: [
        { label: `Restare in campagna a scrivere filosofia`, outcome: `Avresti salvato la vita ancora per un po', ma lasciato campo libero ad Antonio. Cicerone non riuscì a farlo: sentiva il dovere di difendere la repubblica.` },
        { label: `Attaccare Antonio in senato e appoggiare Ottaviano`, outcome: `È ciò che Cicerone fece: le <i>Filippiche</i> ottennero che il senato dichiarasse Antonio nemico pubblico. Ma Ottaviano, poi, si accordò con Antonio e Lepido (secondo triumvirato) e li lasciò inserire Cicerone nelle liste di proscrizione.` },
        { label: `Fuggire in Grecia e unirsi a Bruto`, outcome: `Avrebbe potuto sopravvivere, come altri senatori. Cicerone ci provò, ma tornò indietro, poi tentò di imbarcarsi: fu raggiunto a Formia dai sicari di Antonio.` }
      ],
      answer: 1,
      explain: `Cicerone scelse la lotta: pronunciò 14 Filippiche (settembre 44 – aprile 43). Una lettera di Decimo Bruto (<i>Ad familiares</i> XI, 20) riferisce una battuta di Cicerone su Ottaviano: il giovane era "da lodare, da onorare, da elevare" (laudandum adulescentem, ornandum, tollendum); ma "tollendum" può significare anche "da eliminare", e il gioco di parole, riferito a Ottaviano, fu visto come un segno del doppio gioco di Cicerone. Dopo la Lex Titia (novembre 43) fu proscritto e ucciso il 7 dicembre. Antonio fece esporre sui Rostri la testa e le mani che avevano scritto le Filippiche.`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Cicerone aveva un soprannome sul naso?`,
      html: `<p>Il cognome <b>Cicero</b> deriva da <i>cicer</i>, "cece": secondo Plutarco, un antenato aveva una escrescenza sul naso a forma di cece. Quando entrò in politica gli amici gli consigliarono di cambiarlo, ma lui rispose che avrebbe reso il nome più famoso di Scauro e Catulo. E ci riuscì: ancora oggi <b>cicerone</b> significa "guida turistica" in italiano, perché parla tanto e con eloquenza. Nel Rinascimento, Erasmo scrisse perfino un dialogo, il <i>Ciceronianus</i> (1528), contro chi voleva scrivere solo con parole presenti in Cicerone.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Cicerone ha cambiato la vita di Sant'Agostino?`,
      html: `<p>Una delle opere perdute di Cicerone, l'<b>Hortensius</b>, un invito alla filosofia (45 a.C.), cambiò la vita del giovane <b>Agostino</b> di Ippona (354-430). Nelle <i>Confessioni</i> (III, 4) racconta che leggerlo gli accese "un incredibile ardore per la sapienza immortale" e gli cambiò le preghiere. È l'inizio del cammino che lo portò a convertirsi al cristianesimo. Un libro di un pagano contribuì così a formare uno dei Padri della Chiesa.</p>`
    },
    {
      type: `widget`, title: `Allenamento: opera e genere`,
      widget: `classify`,
      options: {
        groups: [`Orazioni`, `Opere filosofiche`, `Retorica e politica`, `Epistolario`],
        items: [
          [`In Verrem`, 0], [`Pro Archia`, 0], [`Philippicae`, 0],
          [`De officiis`, 1], [`Tusculanae disputationes`, 1], [`De finibus`, 1],
          [`De oratore`, 2], [`De re publica`, 2], [`Brutus`, 2],
          [`Ad Atticum`, 3], [`Ad familiares`, 3]
        ]
      },
      caption: `Classifica le opere di Cicerone per genere.`
    },
    {
      type: `alternatives`, title: `Altri modi per avvicinarsi a Cicerone`,
      intro: `Cicerone è tanto: scegli da dove cominciare.`,
      tabs: [
        {
          label: `⚖️ Come un avvocato`,
          html: `<p>Leggi un'orazione come un caso giudiziario: chi è l'imputato? Che cosa è accaduto (<i>narratio</i>)? Quali prove porta Cicerone? A quali sentimenti fa appello (<i>pathos</i>)? Prova poi a riassumere la strategia in tre righe: capirai che molte "regole" della retorica sono ancora quelle dei discorsi moderni.</p>`
        },
        {
          label: `✉️ Come un diario`,
          html: `<p>Inizia dalle <b>lettere</b>: sono brevi e umane. Cerca quelle in cui Cicerone parla dell'esilio (<i>Ad Atticum</i>), della morte della figlia o della guerra civile. Così conoscerai l'uomo prima dello stile, e le orazioni ti sembreranno meno "da libro".</p>`
        },
        {
          label: `🧠 Come un dizionario del pensiero`,
          html: `<p>Prendi una parola chiave (<i>humanitas, virtus, officium, res publica, natura</i>) e segui come Cicerone la definisce nei vari libri. In pochi passaggi vedrai come il lessico filosofico europeo si sia formato partendo dalla traduzione del greco.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa di Cicerone`,
      nodes: [
        { id: `cic`, label: `Cicerone`, x: 50, y: 8, color: `#a855f7`, html: `Arpino 106 – Formia 43 a.C.: oratore, politico, filosofo.`, why: `Homo novus che ha costruito la sua carriera con la parola. La sua morte coincide con la fine del sistema repubblicano che ha difeso.` },
        { id: `ora`, label: `Orazioni`, x: 18, y: 42, color: `#f59e0b`, html: `Verrine, Catilinarie, Pro Archia, Filippiche.`, why: `L'eloquenza è per Cicerone lo strumento politico per eccellenza: persuade senato, tribunali e popolo; senza armi, solo con la parola.` },
        { id: `ret`, label: `Retorica e politica`, x: 50, y: 42, color: `#16a34a`, html: `De oratore, De re publica, De legibus.`, why: `Cicerone ricerca l'oratore ideale e lo stato ideale: un cittadino colto e un governo misto. È il suo programma politico in forma teorica.` },
        { id: `fil`, label: `Filosofia`, x: 82, y: 42, color: `#3b82f6`, html: `De finibus, Tusculanae, De officiis.`, why: `Nata nell'inattività forzata, rende la filosofia greca accessibile ai Romani: crea il lessico filosofico occidentale.` },
        { id: `epi`, label: `Epistolario`, x: 30, y: 78, color: `#ef4444`, html: `Ad Atticum, Ad familiares.`, why: `Pubblicate dopo la morte da Tirone, mostrano la politica dall'interno e la persona dietro l'oratore.` },
        { id: `hum`, label: `Humanitas`, x: 72, y: 78, color: `#06b6d4`, html: `Ideale di cultura e civiltà.`, why: `È l'eredità più duratura: l'idea che lo studio forma l'uomo, base dell'Umanesimo e del liceo classico.` }
      ],
      edges: [
        [`cic`, `ora`, ``], [`cic`, `ret`, ``], [`cic`, `fil`, ``], [`cic`, `epi`, ``], [`ret`, `hum`, ``], [`fil`, `hum`, ``]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: filosofia e lettere`,
      questions: [
        { type: `mc`, q: `Chi raccolse e pubblicò le lettere di Cicerone?`, options: [`Tirone`, `Attico`, `Cesare`], answer: 0, explain: `Il segretario liberto.` },
        { type: `mc`, q: `Quale opera di Cicerone è dedicata al figlio Marco?`, options: [`De officiis`, `De oratore`, `Pro Archia`], answer: 0, explain: `Sui doveri.` },
        { type: `tf`, q: `Cicerone fu ucciso su ordine di Marco Antonio nel 43 a.C.`, answer: true, explain: `Nelle proscrizioni del secondo triumvirato.` },
        { type: `text`, q: `Qual è il nome latino dell'ideale di cultura e umanità caro a Cicerone? (una parola)`, answer: [`humanitas`], explain: `Humanitas.` }
      ]
    }
  ],
  glossary: [
    { t: `Homo novus`, d: `Chi arriva al consolato senza antenati consolari.` },
    { t: `Concordia ordinum`, d: `Accordo fra senatori e cavalieri: ideale politico di Cicerone.` },
    { t: `Periodo`, d: `Frase lunga e architettata, tipica della prosa ciceroniana.` },
    { t: `Concinnitas`, d: `Armonia e simmetria dello stile.` },
    { t: `Humanitas`, d: `Ideale di cultura, educazione e gentilezza.` },
    { t: `Otium cum dignitate`, d: `Riposo dignitoso dopo una vita di servizio.` },
    { t: `Proscrizione`, d: `Lista di nemici politici da uccidere.` },
    { t: `Nuova Accademia`, d: `Scuola filosofica scettica a cui Cicerone si dichiara vicino.` },
    { t: `Peroratio`, d: `Parte finale dell'orazione che muove i sentimenti.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Dove nacque Cicerone?`, options: [`Arpino`, `Verona`, `Amiternum`], answer: 0, explain: `Nel 106 a.C.` },
      { type: `mc`, q: `Qual è l'attacco della Prima Catilinaria?`, options: [`Quo usque tandem abutere, Catilina, patientia nostra?`, `Arma virumque cano`, `Gallia est omnis divisa`], answer: 0, explain: `8 novembre 63 a.C.` },
      { type: `tf`, q: `Cicerone fu console nel 63 a.C.`, answer: true, explain: `Era un homo novus.` },
      { type: `mc`, q: `Le Filippiche sono dirette contro…`, options: [`Marco Antonio`, `Verre`, `Catilina`], answer: 0, explain: `14 orazioni nel 44-43 a.C.` },
      { type: `mc`, q: `Che cos'è il De re publica?`, options: [`un dialogo sul migliore stato, con il Somnium Scipionis`, `una raccolta di lettere`, `un poema epico`], answer: 0, explain: `54-51 a.C.` },
      { type: `text`, q: `Come si chiama il sogno in cui Scipione contempla l'universo (due parole latine)?`, answer: [`somnium scipionis`], explain: `Dal sesto libro del De re publica.` },
      { type: `mc`, q: `Quale carattere ha lo stile ciceroniano?`, options: [`periodo ampio e armonico`, `frasi brevissime e spezzate`, `solo arcaismi`], answer: 0, explain: `Opposto allo stile di Sallustio.` },
      { type: `tf`, q: `Cicerone scrisse le opere filosofiche soprattutto negli anni 46-44 a.C.`, answer: true, explain: `Durante la dittatura di Cesare.` },
      { type: `mc`, q: `A chi è indirizzata la raccolta di lettere di 16 libri a un amico intimo?`, options: [`Attico`, `Bruto`, `Pompeo`], answer: 0, explain: `Epistulae ad Atticum.` },
      { type: `order`, q: `Metti in ordine cronologico.`, items: [`Verrine`, `Consolato e Catilinarie`, `Esilio`, `Filippiche e morte`], explain: `70, 63, 58-57, 44-43 a.C.` }
    ]
  }
});

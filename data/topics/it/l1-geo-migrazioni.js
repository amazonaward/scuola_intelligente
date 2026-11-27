TOPIC('it', {
  id: "l1-geo-migrazioni",
  title: "Le migrazioni",
  intro: "Da sempre gli esseri umani si spostano: i primi <i>Homo sapiens</i> hanno lasciato l'Africa decine di millenni fa, e oggi nel mondo circa <b>280-300 milioni</b> di persone vivono in un Paese diverso da quello in cui sono nate. Perché si parte? Dove si va? Che cosa cambia per chi parte, per chi arriva e per chi resta? Impariamo a distinguere termini, cause, rotte e conseguenze, con dati e non con slogan.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Le parole giuste: chi è un migrante?",
      html: `<p>Nel linguaggio quotidiano si usano come sinonimi parole che invece hanno significati diversi, anche giuridici. Distinguerle è il primo passo per ragionare bene.</p>
<ul>
<li><b>Migrante</b> (o emigrante/immigrante): chi si trasferisce in un altro luogo per un periodo significativo. <b>Emigrante</b> se lo guardiamo dal Paese di partenza, <b>immigrato</b> dal Paese di arrivo. Le migrazioni sono <b>interne</b> (all'interno dello stesso Stato, come dal Sud al Nord Italia negli anni '50-'60) oppure <b>internazionali</b> (da uno Stato a un altro).</li>
<li><b>Migrante economico</b>: chi parte per trovare lavoro o migliorare le proprie condizioni di vita.</li>
<li><b>Rifugiato</b>: secondo la <b>Convenzione di Ginevra del 1951</b>, chi si trova fuori dal proprio Paese e non può o non vuole tornarvi per il fondato timore di essere perseguitato per motivi di razza, religione, nazionalità, appartenenza a un gruppo sociale o opinioni politiche. Ha diritto alla <b>protezione internazionale</b> e al principio di <b>non respingimento</b> (<i>non-refoulement</i>): non può essere rimandato dove rischia la vita.</li>
<li><b>Richiedente asilo</b>: chi ha chiesto protezione e attende la risposta dello Stato. Non tutti i richiedenti asilo sono riconosciuti rifugiati.</li>
<li><b>Sfollato interno</b> (<i>internally displaced person</i>): chi è costretto a lasciare casa ma resta nel suo Paese (spesso è la maggior parte delle vittime di guerre e alluvioni).</li>
<li><b>Migrante irregolare</b>: chi entra o resta in un Paese senza i documenti richiesti. La regolarità è una condizione giuridica, non una qualità della persona.</li>
</ul>
<p>La Costituzione italiana prevede il diritto d'asilo all'<b>articolo 10</b>: lo straniero al quale sia impedito, nel suo Paese, l'effettivo esercizio delle libertà democratiche garantite dalla Costituzione italiana ha diritto d'asilo.</p>`
    },
    {
      type: "text",
      title: "2. Perché si migra: fattori di spinta e di attrazione",
      html: `<p>Nel 1966 il geografo Everett Lee propose un modello ancora usato: la scelta di migrare nasce dal confronto tra i <b>fattori di spinta</b> (<i>push</i>, che fanno lasciare il luogo di origine) e i <b>fattori di attrazione</b> (<i>pull</i>, che attirano verso quello di destinazione), in presenza di <b>ostacoli</b> (distanza, costi, leggi, lingua).</p>
<ul>
<li><b>Spinta</b>: povertà e disoccupazione, guerre e persecuzioni, regimi autoritari, disastri naturali e <b>cambiamento climatico</b> (siccità, desertificazione, innalzamento dei mari), mancanza di servizi (scuole, sanità).</li>
<li><b>Attrazione</b>: lavoro e salari più alti, sicurezza, libertà, studio, ricongiungimento con la famiglia, servizi e qualità della vita.</li>
<li><b>Reti sociali</b>: spesso si parte verso dove ci sono già parenti o compaesani, che aiutano a trovare casa e lavoro (<b>migrazione a catena</b>). È per questo che gli italiani si concentravano in certi quartieri di New York o in certe città argentine, e che oggi le comunità marocchine o cinesi si insediano in aree precise.</li>
</ul>
<p><b>Un'idea sbagliata ma diffusa</b>: la gran parte dei migranti <b>non</b> è composta dai più poveri tra i poveri. Emigrare costa (viaggio, documenti, a volte migliaia di euro), quindi parte chi ha qualche risorsa in più. Inoltre, <b>la maggior parte dei migranti africani si sposta restando in Africa</b>, e la maggior parte dei rifugiati del mondo è ospitata in Paesi a basso e medio reddito vicini al proprio (Turchia, Iran, Colombia, Uganda, Pakistan), non in Europa.</p>`
    },
    {
      type: "widget",
      title: "Attività: spinta o attrazione?",
      widget: "classify",
      options: {
        groups: ["Fattore di spinta", "Fattore di attrazione"],
        items: [
          ["💥 Guerra nel Paese d'origine", 0],
          ["💼 Offerta di lavoro all'estero", 1],
          ["🌵 Siccità e raccolti persi", 0],
          ["🎓 Università prestigiosa", 1],
          ["👪 Parenti già emigrati", 1],
          ["🚫 Persecuzioni politiche", 0],
          ["🏥 Sanità efficiente", 1],
          ["📉 Disoccupazione giovanile molto alta", 0]
        ]
      },
      caption: "In realtà ogni scelta migratoria è quasi sempre una combinazione di più fattori."
    },
    {
      type: "svg",
      title: "Chi migra: i grandi numeri",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Su 100 persone nel mondo (circa)</text>
<g>
<rect x="40" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="75" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="110" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="145" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="180" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="215" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="250" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="285" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="320" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="355" y="50" width="30" height="30" fill="#f97316" stroke="#9a3412"/>
</g>
<text x="40" y="110" font-size="15" fill="#111827">Quasi 96-97 persone su 100 vivono nel Paese in cui sono nate.</text>
<text x="40" y="136" font-size="15" fill="#9a3412" font-weight="bold">Circa 3-4 su 100 sono migranti internazionali.</text>
<rect x="40" y="170" width="520" height="22" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="40" y="170" width="94" height="22" fill="#ef4444" stroke="#7f1d1d"/>
<text x="40" y="215" font-size="15" fill="#111827">Tra loro (circa 1 su 3 o 4): persone in fuga da guerre e persecuzioni.</text>
<text x="40" y="240" font-size="15" fill="#111827">Gli sfollati forzati nel mondo (inclusi gli interni): oltre 120 milioni.</text>
<text x="40" y="270" font-size="14" fill="#6b7280">Stime ONU / UNHCR (dati arrotondati, aggiornati ogni anno).</text>
</svg>`,
      caption: "Il numero di migranti (circa il 3,6-3,7% della popolazione mondiale) è alto in valori assoluti ma contenuto in percentuale: la grande maggioranza delle persone non lascia il Paese in cui è nata."
    },
    {
      type: "quiz",
      title: "Mini-quiz: termini e cause",
      questions: [
        { type: "mc", q: "Chi è un rifugiato secondo la Convenzione di Ginevra?", options: ["Chi emigra per trovare un lavoro migliore", "Chi è fuori dal suo Paese per fondato timore di persecuzione", "Chi cambia città nel proprio Paese"], answer: 1, explain: "Il rifugiato fugge da persecuzioni per razza, religione, nazionalità, gruppo sociale o opinioni politiche." },
        { type: "mc", q: "Quale di questi è un fattore di spinta?", options: ["Un lavoro ben pagato all'estero", "Una guerra nel Paese d'origine", "Un'università prestigiosa"], answer: 1, explain: "Le guerre spingono le persone a lasciare il luogo d'origine; gli altri sono fattori di attrazione." },
        { type: "tf", q: "La maggior parte dei rifugiati del mondo è ospitata in Europa.", answer: false, explain: "La maggior parte è ospitata in Paesi a basso e medio reddito vicini a quelli di origine." }
      ]
    },
    {
      type: "text",
      title: "3. Una storia di spostamenti",
      html: `<p>Le migrazioni non sono un fenomeno recente:</p>
<ul>
<li><b>Preistoria</b>: <i>Homo sapiens</i> si diffonde dall'Africa (circa 70-60.000 anni fa le migrazioni che hanno popolato il resto del mondo) e raggiunge tutti i continenti, esclusa l'Antartide.</li>
<li><b>Antichità e Medioevo</b>: colonizzazione greca e fenicia del Mediterraneo, migrazioni dei popoli germanici dopo il IV secolo, espansione araba e mongola.</li>
<li><b>Dal XVI secolo</b>: conquista delle Americhe e <b>tratta atlantica degli schiavi</b>: circa <b>12,5 milioni</b> di africani furono imbarcati con la forza tra Cinquecento e Ottocento, di cui circa 10,7 milioni sopravvissuti alla traversata. Fu una migrazione <b>forzata</b>.</li>
<li><b>1850-1914</b>: la <b>grande emigrazione europea</b> transoceanica: tra 50 e 60 milioni di europei (irlandesi, tedeschi, italiani, polacchi, scandinavi, ebrei dell'Est) verso Nord America, Argentina, Brasile, Australia. A Ellis Island, a New York, tra il 1892 e il 1954 passarono circa 12 milioni di persone.</li>
<li><b>Novecento</b>: spostamenti di massa per le guerre (scambi di popolazioni, profughi della Seconda guerra mondiale), decolonizzazione, migrazione di lavoratori in Europa occidentale dopo il 1945 (<b>Gastarbeiter</b> in Germania), Great Migration degli afroamericani dal Sud al Nord USA (1916-1970, circa 6 milioni di persone).</li>
<li><b>Oggi</b>: migrazioni verso i Paesi del Golfo, gli USA, l'Europa; forte migrazione intra-asiatica e intra-africana; migrazioni climatiche e di profughi (Siria, Afghanistan, Ucraina, Sudan, Venezuela).</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: gli italiani che partirono",
      html: `<p>Tra il <b>1876</b> e il <b>1976</b> circa <b>27 milioni di italiani</b> lasciarono il Paese (alcuni poi tornarono). Le mete furono le Americhe (Argentina, Brasile, Stati Uniti), i Paesi europei (Francia, Svizzera, Germania, Belgio) e l'Australia. Partivano prima i veneti, i friulani, i piemontesi, poi sempre più i meridionali (Sicilia, Campania, Calabria, Puglia).</p>
<p>Nel 1900 un contadino del Mezzogiorno poteva guadagnare in pochi mesi a New York più che in un anno in patria: la spinta era la <b>fame di terra e di lavoro</b>, l'attrazione i salari americani. Nel 1946 l'Italia siglò un accordo con il Belgio: l'uomo andava a lavorare in miniera in cambio di carbone. L'8 agosto 1956 nella miniera di <b>Marcinelle</b> morirono 262 minatori, 136 dei quali italiani. Anche gli italiani subirono pregiudizi e discriminazioni, e furono vittime di episodi di violenza, come il linciaggio di undici italiani a New Orleans nel 1891.</p>
<p>Oggi vivono all'estero oltre <b>6 milioni di cittadini italiani</b> (iscritti all'AIRE), e circa <b>80 milioni di persone nel mondo</b> hanno origini italiane (soprattutto in Brasile e Argentina). Dagli anni 2010 molti giovani laureati partono ancora: è la cosiddetta <b>\"fuga di cervelli\"</b>.</p>`
    },
    {
      type: "3d",
      title: "Sul globo: alcune grandi rotte migratorie",
      scene: "globe",
      options: {
        points: [
          { lat: 38.1, lon: 13.4, label: "Italia (partenza dei migranti ottocenteschi)", color: "#16a34a" },
          { lat: 40.7, lon: -74.0, label: "New York (Ellis Island)", color: "#7c3aed" },
          { lat: -34.6, lon: -58.4, label: "Buenos Aires", color: "#0ea5e9" },
          { lat: 14.7, lon: -17.4, label: "Dakar (Africa occidentale)", color: "#f59e0b" },
          { lat: 33.9, lon: 10.1, label: "Tunisia (rotta Mediterraneo centrale)", color: "#dc2626" },
          { lat: 36.0, lon: 14.5, label: "Lampedusa", color: "#dc2626" },
          { lat: 25.3, lon: 55.3, label: "Emirati (lavoratori dall'Asia)", color: "#a16207" },
          { lat: 28.6, lon: 77.2, label: "Delhi (India)", color: "#ec4899" },
          { lat: 19.4, lon: -99.1, label: "Città del Messico", color: "#2563eb" },
          { lat: 33.7, lon: -118.2, label: "Los Angeles", color: "#2563eb" }
        ],
        routes: [
          { points: [0, 1], color: "#16a34a" },
          { points: [0, 2], color: "#16a34a" },
          { points: [4, 5, 0], color: "#dc2626" },
          { points: [7, 6], color: "#ec4899" },
          { points: [8, 9], color: "#2563eb" }
        ]
      },
      caption: "Verde: l'emigrazione italiana storica. Rosso: la rotta del Mediterraneo centrale. Rosa: i lavoratori asiatici verso i Paesi del Golfo. Blu: Messico-USA."
    },
    {
      type: "text",
      title: "4. Oggi: da dove, verso dove",
      html: `<p>Secondo le stime ONU, nel 2020 c'erano circa <b>281 milioni</b> di migranti internazionali (3,6% della popolazione mondiale); nel 2024 sono saliti a circa <b>304 milioni</b> (3,7%).</p>
<ul>
<li><b>Paesi di destinazione</b>: gli <b>Stati Uniti</b> (circa 50 milioni di nati all'estero) sono il primo; seguono la <b>Germania</b>, l'<b>Arabia Saudita</b>, la <b>Russia</b>, il <b>Regno Unito</b>. Nei Paesi del Golfo (Emirati, Qatar, Kuwait) gli stranieri sono la <b>maggioranza</b> degli abitanti (ad esempio circa l'88% in Qatar), soprattutto lavoratori edili e domestici da India, Pakistan, Bangladesh, Nepal, Filippine.</li>
<li><b>Paesi d'origine</b>: <b>India</b> (circa 18 milioni di emigrati, la più grande diaspora), <b>Messico</b>, <b>Russia</b>, <b>Cina</b>, <b>Siria</b>, <b>Bangladesh</b>, <b>Pakistan</b>, <b>Ucraina</b>.</li>
<li><b>Principali corridoi</b>: Messico → Stati Uniti; Asia meridionale → Paesi del Golfo; Siria → Turchia, Libano, Germania; Ucraina → Polonia e UE (dal 2022); Venezuela → Colombia e Sud America; Africa sub-sahariana → altri Paesi africani e, in misura minore, Europa.</li>
<li><b>Rifugiati e sfollati</b> (UNHCR): oltre <b>120 milioni</b> di persone costrette a fuggire (compresi gli sfollati interni). Tra i Paesi che ospitano più rifugiati: Iran, Turchia, Colombia, Germania, Uganda, Pakistan.</li>
</ul>
<p>La <b>rotta del Mediterraneo centrale</b> (Libia e Tunisia verso Lampedusa e Sicilia) è tra le più pericolose: dal 2014 sono stati contati oltre 25.000 morti e dispersi nel Mediterraneo. L'Unione europea ha il <b>Regolamento di Dublino</b>, che stabilisce (in generale) che la domanda d'asilo è esaminata dal primo Paese UE di ingresso, e un recente <b>Patto su migrazione e asilo</b> (2024).</p>
<p>In <b>Italia</b> risiedono oltre <b>5 milioni</b> di stranieri (circa il 9% della popolazione), dalla Romania, dal Marocco, dall'Albania, dalla Cina, dall'Ucraina. La <b>cittadinanza</b> si acquisisce di norma per <b>ius sanguinis</b> (discendenza da cittadini italiani) o, per gli stranieri, dopo 10 anni di residenza (4 per i cittadini UE, 5 per apolidi e rifugiati) o per matrimonio.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… le rimesse valgono più degli aiuti?",
      html: `<p>I migranti mandano a casa parte dei guadagni: sono le <b>rimesse</b>. Secondo la Banca Mondiale, nel 2023 hanno raggiunto circa <b>650 miliardi di dollari</b> verso i Paesi a basso e medio reddito, più degli investimenti diretti e molto più degli aiuti allo sviluppo. In alcuni Paesi (Tonga, Libano, Tagikistan, Nepal) valgono oltre un quarto del PIL. Un lavoratore filippino a Dubai che manda a casa 300 dollari al mese può pagare l'istruzione di due nipoti.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere un dato migratorio",
      html: `<p>Un Paese ha <b>10 milioni</b> di abitanti, di cui <b>1,2 milioni</b> nati all'estero; in un anno arrivano 80.000 persone e ne partono 30.000.</p>
<ul>
<li>Quota di nati all'estero = 1.200.000 ÷ 10.000.000 = <b>12%</b>.</li>
<li><b>Saldo migratorio</b> = 80.000 − 30.000 = <b>+50.000</b> (circa +5 per mille).</li>
<li>Se in quell'anno i nati superano i morti di sole 10.000 unità, il saldo totale è +60.000: <b>5/6 della crescita viene dalle migrazioni</b>.</li>
</ul>
<p>Questo è il caso di molti Paesi europei: la popolazione cresce (o non cala) grazie al saldo migratorio, non a quello naturale.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il Brasile ha più \"italiani\" dell'Italia?",
      html: `<p>Le stime indicano che in <b>Brasile</b> vivono circa <b>30 milioni</b> di persone con origini italiane (oltre il 10% della popolazione), più di quelli che vivono in qualunque regione italiana, e che a <b>São Paulo</b> ci sono più oriundi italiani che a Roma. Anche in Argentina circa la metà della popolazione ha almeno un antenato italiano. Le migrazioni lasciano tracce nei cognomi, nei cibi, nei dialetti (il <i>talian</i>, derivato dal veneto, è lingua riconosciuta in alcuni comuni del Rio Grande do Sul).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… anche le migrazioni interne cambiano il volto di un Paese?",
      html: `<p>Tra gli anni '50 e '70 milioni di italiani si spostarono dal Sud al Nord. <b>Torino</b> arrivò a essere definita \"la terza città meridionale d'Italia\" (dopo Napoli e Palermo), perché per molti anni ci arrivavano migliaia di persone ogni mese a lavorare alla Fiat. Nel 1861 l'Italia era unita ma divisa da lingue e abitudini: furono le migrazioni interne, insieme alla scuola e alla televisione, a rendere l'italiano una lingua parlata da tutti.</p>`
    },
    {
      type: "text",
      title: "5. Conseguenze: per chi parte, per chi arriva, per chi resta",
      html: `<p>Le migrazioni producono effetti complessi, che gli studi misurano con dati e non con impressioni.</p>
<ul>
<li><b>Nei Paesi di arrivo</b>: i migranti coprono lavori che mancano (agricoltura, cura degli anziani, edilizia, ristorazione, sanità) e <b>compensano l'invecchiamento</b>: in Italia i cittadini stranieri versano ogni anno contributi per più di quanto ricevano in prestazioni (stime di fondazioni e INPS ne mostrano un saldo positivo), contribuiscono a circa il <b>9%</b> del PIL (stime di fondazioni di ricerca). Allo stesso tempo ci sono sfide: <b>integrazione</b> scolastica e linguistica, concorrenza in alcuni settori a bassa qualifica, tensioni se l'arrivo è molto rapido e concentrato, rischio di sfruttamento (caporalato in agricoltura).</li>
<li><b>Nei Paesi d'origine</b>: arrivano <b>rimesse</b> e competenze acquisite all'estero (<i>brain circulation</i>), ma può esserci <b>fuga di cervelli</b> (<i>brain drain</i>): medici, ingegneri, infermieri che partono, lasciando il Paese senza professionisti.</li>
<li><b>Per i migranti</b>: maggiori guadagni, ma anche rischi (viaggio, sfruttamento, discriminazione) e lontananza dalla famiglia.</li>
<li><b>Culturali</b>: lingue, cibi, musica, religioni si mescolano. Pensa a quanto della cucina \"italiana\" (pomodoro, patata, mais) arrivi dalle Americhe, o alla pizza negli USA e in Brasile.</li>
</ul>
<p>Le società seguono modelli diversi di inclusione: <b>assimilazione</b> (il migrante adotta la cultura dominante e perde la propria), <b>multiculturalismo</b> (culture diverse coesistono con pari dignità), <b>integrazione</b> (il migrante partecipa pienamente alla società, e ciascuno rispetta le regole comuni mantenendo la propria identità). La Costituzione italiana protegge i diritti inviolabili di ogni persona, cittadina o no (art. 2).</p>`
    },
    {
      type: "decision",
      title: "1905: partire o restare?",
      html: `<p>È il 1905. Sei un giovane contadino di un paese della Calabria. La terra è poca, il raccolto del grano è scarso, hai moglie e un figlio piccolo. Da un cugino arriva una lettera: a Buenos Aires (o a New York) si cercano braccianti, edili e muratori, e il salario è almeno quattro volte maggiore. Il viaggio in nave in terza classe costa quanto il guadagno di quasi un anno. I giornali parlano di truffe di \"agenti di emigrazione\" e di condizioni di vita dure.</p>`,
      question: "Tu cosa avresti fatto?",
      options: [
        { label: "Restare e sperare in un'annata migliore", outcome: "Resti vicino alla famiglia, ma i dati mostrano che molte famiglie contadine del Sud peggioravano il loro tenore di vita; chi restava spesso finiva per emigrare dopo qualche anno." },
        { label: "Partire da solo e mandare i soldi a casa", outcome: "Era la scelta più comune: il padre partiva, lavorava anni e mandava le rimesse. Molti tornavano (circa metà degli emigranti italiani nel Novecento tornò in patria)." },
        { label: "Partire con tutta la famiglia", outcome: "Meno frequente, ma comportava costi molto alti: si rischiava il distacco totale dalle origini, anche se i figli avrebbero avuto possibilità migliori." }
      ],
      answer: 1,
      explain: "La storia mostra che molti emigranti partirono da soli (\"migrazione pendolare\" o temporanea) e mandarono le rimesse; il 'ritorno' era parte del progetto, e le rimesse degli emigrati furono per decenni una voce importante dell'economia italiana. Nessuna scelta era priva di rischi."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le migrazioni",
      intro: "Le migrazioni sono spesso raccontate con numeri e slogan: ecco prospettive diverse.",
      tabs: [
        {
          label: "🌊 Il fiume e la diga",
          html: `<p>Immagina le migrazioni come l'acqua di un fiume: scorre dai luoghi \"alti\" (con poche opportunità) verso i luoghi \"bassi\" (con più opportunità), e trova sempre la strada. Costruire una <b>diga</b> (barriere, frontiere chiuse) può deviare il flusso o cambiarne il percorso (rotte più lunghe e pericolose), ma raramente lo ferma del tutto: spesso lo trasforma da legale a irregolare. Le politiche migratorie efficaci cercano di <b>governare</b> il flusso con canali regolari (visti di lavoro, corridoi umanitari, ricongiungimento), come se si costruissero <b>canali</b> e non solo dighe.</p>`
        },
        {
          label: "🧳 La storia di una famiglia",
          html: `<p>Chiedi ai tuoi nonni e bisnonni: da dove viene la tua famiglia? Moltissime famiglie italiane hanno un parente che ha vissuto in un altro Paese o in un'altra regione. Puoi disegnare un <b>albero delle migrazioni</b>: una mappa con le frecce da paese di nascita a paese di residenza, per tre generazioni. Scoprirai che le migrazioni, vicine o lontane, fanno parte della storia di quasi tutti. Anche l'Italia contemporanea è nata da <b>migrazioni interne</b>: nel dopoguerra milioni di meridionali e veneti andarono a lavorare a Torino, Milano, Genova.</p>`
        },
        {
          label: "📊 Un'altra scala",
          html: `<p>Un modo per misurare: i circa <b>181.000</b> sbarchi del 2016 in Italia (il massimo storico) erano circa lo <b>0,3%</b> della popolazione italiana; il Libano ha accolto più di un milione di siriani su circa 6 milioni di abitanti (oltre il 15%). Cambiando la <b>scala</b> del confronto (Paese, continente, mondo) la percezione cambia. Un'altra scala utile: nel mondo circa 3,7 persone ogni 100 vivono fuori dal loro Paese di nascita; <b>96,3 su 100 no</b>.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fefce8"/><rect x="40" y="60" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="60" width="16" height="30" fill="#f97316" stroke="#9a3412"/><text x="40" y="45" font-size="15" fill="#111827" font-weight="bold">Migranti internazionali nel mondo: 3,7%</text><rect x="40" y="130" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="130" width="38" height="30" fill="#ef4444" stroke="#7f1d1d"/><text x="40" y="115" font-size="15" fill="#111827" font-weight="bold">Stranieri residenti in Italia: circa 9%</text><text x="40" y="185" font-size="14" fill="#6b7280">barre in scala (grigio = il resto della popolazione)</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché e come ci si sposta",
      nodes: [
        { id: "spinta", label: "Fattori di spinta", x: 20, y: 8, color: "#dc2626", html: "Povertà, guerre, persecuzioni, disastri, clima.", why: "Sono i motivi per cui è difficile restare: la povertà estrema o le guerre riducono le possibilità di scelta. Le ricerche mostrano però che la sola povertà non spiega le partenze: servono anche risorse e aspirazioni." },
        { id: "attrazione", label: "Fattori di attrazione", x: 80, y: 8, color: "#16a34a", html: "Lavoro, sicurezza, studio, libertà.", why: "I salari in Europa o negli USA possono essere 5-10 volte superiori a quelli di molti Paesi di origine, e la richiesta di manodopera nasce anche dall'invecchiamento dei Paesi ricchi: la demografia lega Nord e Sud." },
        { id: "reti", label: "Reti e ostacoli", x: 50, y: 30, color: "#a855f7", html: "Parenti all'estero, leggi, costi, distanza.", why: "Le reti sociali spiegano perché le migrazioni si concentrano su pochi corridoi (il sociologo Douglas Massey le ha studiate per il Messico-USA); le leggi e i costi decidono se il viaggio è regolare o irregolare." },
        { id: "rotte", label: "Rotte e flussi", x: 20, y: 56, color: "#2563eb", html: "Mediterraneo, Messico-USA, Asia-Golfo.", why: "Le rotte seguono le geografie e le politiche: se si chiude un varco (Balcani 2016), il flusso si sposta su un'altra rotta (Mediterraneo centrale), spesso più rischiosa." },
        { id: "diritto", label: "Diritto internazionale", x: 80, y: 56, color: "#f59e0b", html: "Convenzione di Ginevra 1951, non-refoulement, asilo.", why: "Dopo la Seconda guerra mondiale e l'esperienza dei milioni di profughi e di quanti furono respinti verso i regimi che li perseguitavano, i Paesi decisero di stabilire un diritto internazionale alla protezione." },
        { id: "effetti", label: "Conseguenze", x: 50, y: 78, color: "#ec4899", html: "Demografiche, economiche, culturali.", why: "Gli effetti dipendono dalla velocità, dalla qualifica dei migranti e dalle politiche d'integrazione: la stessa migrazione può essere una risorsa o un problema a seconda di come è governata." },
        { id: "gestione", label: "Governare le migrazioni", x: 50, y: 95, color: "#14b8a6", html: "Canali regolari, accordi, cooperazione, integrazione.", why: "Il Patto globale per una migrazione sicura, ordinata e regolare (ONU, 2018) è il primo accordo internazionale su questo tema: non vincolante, ma riconosce che nessun Paese può gestirlo da solo." }
      ],
      edges: [
        ["spinta", "reti", "più"],
        ["attrazione", "reti", "più"],
        ["reti", "rotte", "scelgono le"],
        ["diritto", "rotte", "regola le"],
        ["rotte", "effetti", "producono"],
        ["diritto", "effetti", "tutela"],
        ["effetti", "gestione", "richiedono"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Circa <b>280-300 milioni</b> di migranti internazionali, cioè circa il <b>3,6-3,7%</b> dell'umanità.</li>
<li><b>Migrante</b> ≠ <b>rifugiato</b> ≠ <b>richiedente asilo</b> ≠ <b>sfollato interno</b>. Convenzione di Ginevra: 1951.</li>
<li><b>Push</b> (spinta) e <b>pull</b> (attrazione); reti sociali e ostacoli.</li>
<li>Grande emigrazione europea 1850-1914; italiani all'estero: circa 27 milioni tra 1876 e 1976.</li>
<li>Rimesse: circa 650 miliardi di dollari l'anno verso Paesi a basso e medio reddito.</li>
<li>Gli effetti dipendono molto da come le migrazioni sono <b>governate</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: storia e conseguenze",
      questions: [
        { type: "mc", q: "Quale evento storico ha causato la migrazione forzata di circa 12,5 milioni di africani?", options: ["La tratta atlantica degli schiavi", "La Rivoluzione industriale", "La Prima guerra mondiale"], answer: 0, explain: "Tra il XVI e il XIX secolo circa 12,5 milioni di africani furono imbarcati con la forza verso le Americhe." },
        { type: "text", q: "Come si chiama il denaro che i migranti mandano ai familiari nel Paese d'origine?", answer: ["rimesse", "le rimesse", "rimessa"], explain: "Le rimesse sono una risorsa essenziale per molti Paesi poveri." },
        { type: "tf", q: "La \"fuga di cervelli\" è la partenza di persone molto qualificate dal Paese d'origine.", answer: true, explain: "Sì: medici, ingegneri, ricercatori che emigrano. Si dice brain drain." }
      ]
    }
  ],
  glossary: [
    { t: "Migrante", d: "Persona che si trasferisce in un altro luogo, all'interno del proprio Paese o all'estero, per un periodo significativo." },
    { t: "Rifugiato", d: "Persona che ha lasciato il proprio Paese per fondato timore di persecuzione e ha diritto alla protezione internazionale (Convenzione di Ginevra, 1951)." },
    { t: "Richiedente asilo", d: "Persona che ha chiesto protezione internazionale e attende la decisione dello Stato." },
    { t: "Sfollato interno", d: "Persona costretta a lasciare la propria casa ma che resta nei confini del proprio Paese." },
    { t: "Fattori di spinta (push)", d: "Condizioni del luogo d'origine che spingono a partire: povertà, guerre, persecuzioni, disastri." },
    { t: "Fattori di attrazione (pull)", d: "Condizioni del luogo di destinazione che attirano: lavoro, sicurezza, studio, libertà." },
    { t: "Rimesse", d: "Somme di denaro che i migranti inviano alle famiglie rimaste nel Paese d'origine." },
    { t: "Fuga di cervelli", d: "Emigrazione di persone altamente qualificate (brain drain)." },
    { t: "Non respingimento", d: "Principio del diritto internazionale: nessuno può essere rimandato in un luogo dove rischia persecuzioni o la vita." },
    { t: "Integrazione", d: "Processo per cui i migranti partecipano pienamente alla vita sociale, economica e culturale del Paese d'arrivo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Circa quale percentuale della popolazione mondiale è composta da migranti internazionali?", options: ["Circa il 3,7%", "Circa il 20%", "Circa il 50%"], answer: 0, explain: "Circa 280-300 milioni su 8 miliardi: meno del 4%." },
      { type: "mc", q: "Qual è la differenza tra un rifugiato e un migrante economico?", options: ["Il rifugiato fugge da persecuzioni e ha diritto alla protezione internazionale", "Non c'è differenza", "Il migrante economico viaggia solo in aereo"], answer: 0, explain: "Il rifugiato è tutelato dalla Convenzione di Ginevra del 1951; il migrante economico parte per lavoro o per migliorare le sue condizioni." },
      { type: "tf", q: "La maggioranza dei rifugiati del mondo è ospitata da Paesi ricchi europei.", answer: false, explain: "La maggior parte è ospitata da Paesi a basso e medio reddito, spesso confinanti con il Paese d'origine." },
      { type: "num", q: "Quanti italiani (in milioni, circa) emigrarono tra il 1876 e il 1976?", answer: 27, tol: 2, unit: "milioni", explain: "Circa 27 milioni: una delle più grandi emigrazioni della storia moderna." },
      { type: "mc", q: "Che cos'è la migrazione a catena?", options: ["La partenza di persone che seguono parenti e amici già emigrati", "Un viaggio in nave in condizioni di schiavitù", "Un tipo di rotta marittima"], answer: 0, explain: "Le reti sociali facilitano la scelta di destinazione: spesso si parte dove si conosce già qualcuno." },
      { type: "text", q: "Come si chiama l'isola della baia di New York dove passarono circa 12 milioni di immigrati tra il 1892 e il 1954?", answer: ["ellis island", "ellis"], explain: "Ellis Island, nella baia di New York." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Tratta atlantica degli schiavi (dal Cinquecento)", "Grande emigrazione europea (1850-1914)", "Gastarbeiter in Germania (dopo il 1945)", "Crisi dei profughi siriani (dal 2011)"], explain: "Dalla tratta atlantica alla grande emigrazione, poi ai lavoratori ospiti e ai profughi dei conflitti recenti." },
      { type: "mc", q: "Quale effetto può avere la partenza di medici e ingegneri dal Paese d'origine?", options: ["Fuga di cervelli", "Dividendo demografico", "Aumento del saldo naturale"], answer: 0, explain: "È il brain drain: il Paese perde competenze costose da formare." },
      { type: "tf", q: "Nel diritto internazionale, il principio di non respingimento vieta di rimandare una persona dove rischia la vita o la persecuzione.", answer: true, explain: "È uno dei principi cardine della Convenzione di Ginevra." },
      { type: "mc", q: "Perché le migrazioni dai Paesi poveri non partono dalle persone più povere in assoluto?", options: ["Perché emigrare ha costi elevati e serve qualche risorsa", "Perché i più poveri non vogliono spostarsi", "Perché è vietato per legge"], answer: 0, explain: "Il viaggio e i documenti costano: chi parte spesso ha un minimo di risorse, studio o rete di aiuti." }
    ]
  }
});

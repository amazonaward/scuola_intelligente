TOPIC('it', {
  id: `m2-geo-europa-orientale`,
  title: `L'Europa orientale`,
  intro: `Ad est l'Europa si allarga in una pianura immensa che arriva fino ai <b>Monti Urali</b>. Qui si trovano la <b>Romania</b> e la <b>Moldavia</b>, dove si parla una lingua neolatina come l'italiano, l'<b>Ucraina</b>, il "granaio d'Europa", e la parte europea della <b>Russia</b>, lo Stato più grande del mondo. È una regione di grandi fiumi, inverni gelidi, terre fertilissime e una storia segnata da imperi, regimi e guerre, anche recenti.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Una pianura sconfinata e un clima "estremo"`,
      html: `<p>La gran parte dell'Europa orientale è occupata dalla <b>pianura sarmatica</b> (o russa), la più grande pianura d'Europa: per migliaia di km il terreno è quasi piatto, con colline basse. I rilievi principali sono ai margini:</p>
<ul>
<li>i <b>Carpazi</b>, un grande arco montuoso in Romania e Ucraina occidentale;</li>
<li>gli <b>Urali</b>, montagne antiche e basse (circa 1.900 m al massimo) che segnano il confine con l'Asia;</li>
<li>il <b>Caucaso</b>, tra Mar Nero e Mar Caspio, con l'<b>Elbrus</b> (5.642 m).</li>
</ul>
<p>Lontano dall'oceano, il clima è <b>continentale</b>: inverni lunghi e molto freddi, estati calde, grande differenza di temperatura tra le stagioni. A <b>Mosca</b> la media di gennaio è di circa -6 °C, ma si scende spesso sotto -20 °C; a luglio la media è di circa +19 °C.</p>
<p>Da nord a sud cambia la vegetazione: <b>tundra</b> (vicino al Mar Glaciale Artico), <b>taiga</b> (immense foreste di conifere), <b>foresta mista</b>, <b>steppa</b> (praterie senza alberi, con terre fertilissime).</p>`
    },
    {
      type: `svg`,
      title: `Le fasce di vegetazione da nord a sud`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="55" fill="#e0f2fe"/>
<text x="20" y="34" font-size="16" font-weight="bold" fill="#0c4a6e">NORD · Mar Glaciale Artico</text>
<rect x="0" y="55" width="600" height="55" fill="#cbd5e1"/>
<text x="20" y="88" font-size="16" font-weight="bold" fill="#1e293b">TUNDRA: muschi, licheni, terreno ghiacciato</text>
<rect x="0" y="110" width="600" height="65" fill="#166534"/>
<text x="20" y="148" font-size="16" font-weight="bold" fill="#ffffff">TAIGA: foreste di abeti, pini, larici</text>
<polygon points="470,170 485,120 500,170" fill="#14532d"/>
<polygon points="510,170 525,125 540,170" fill="#14532d"/>
<polygon points="550,170 565,118 580,170" fill="#14532d"/>
<rect x="0" y="175" width="600" height="55" fill="#4ade80"/>
<text x="20" y="208" font-size="16" font-weight="bold" fill="#14532d">FORESTA MISTA: querce, betulle, aceri</text>
<rect x="0" y="230" width="600" height="60" fill="#fde047"/>
<text x="20" y="265" font-size="16" font-weight="bold" fill="#713f12">STEPPA: praterie e campi di grano su "terra nera"</text>
<rect x="0" y="290" width="600" height="30" fill="#60a5fa"/>
<text x="20" y="311" font-size="15" font-weight="bold" fill="#ffffff">SUD · Mar Nero e Mar Caspio</text>
</svg>`,
      caption: `Andando verso sud fa più caldo e la stagione buona dura di più: la tundra lascia il posto alla foresta e poi alla steppa.`
    },
    {
      type: `3d`,
      title: `I paesaggi dell'Europa orientale in 3D`,
      scene: `terrain`,
      caption: `Ruota il paesaggio e tocca ogni elemento.`,
      options: {
        features: {
          plain: { label: `Pianura`, html: `La <b>pianura sarmatica</b> si estende dalla Polonia agli Urali: la più vasta d'Europa.` },
          river: { label: `Fiume`, html: `Il <b>Volga</b> (circa 3.530 km) è il fiume più lungo d'Europa; il <b>Dnepr</b> (circa 2.200 km) attraversa l'Ucraina e la città di Kiev.` },
          delta: { label: `Delta`, html: `Il <b>delta del Danubio</b>, in Romania e Ucraina: canali, canneti e oltre 300 specie di uccelli, tra cui i pellicani. È riserva della biosfera UNESCO.` },
          mountain: { label: `Catena montuosa`, html: `I <b>Carpazi</b> formano un arco di circa 1.500 km; in Romania il Moldoveanu arriva a 2.544 m. Ci vivono orsi, lupi e linci.` },
          peak: { label: `Vetta`, html: `L'<b>Elbrus</b> (5.642 m), un vulcano spento nel Caucaso russo: se il Caucaso si considera europeo, è la montagna più alta d'Europa.` },
          glacier: { label: `Ghiacciaio`, html: `Le cime del <b>Caucaso</b> sono coperte da grandi ghiacciai.` },
          lake: { label: `Lago`, html: `Il <b>Ladoga</b>, vicino a San Pietroburgo, è il lago più grande d'Europa (circa 17.700 km²). Il Mar Caspio, al confine con l'Asia, è il lago più grande del mondo.` },
          sea: { label: `Mare`, html: `Il <b>Mar Nero</b> bagna Romania, Ucraina e Russia; è collegato al Mediterraneo dagli stretti del Bosforo e dei Dardanelli.` },
          peninsula: { label: `Penisola`, html: `La <b>Crimea</b>, nel Mar Nero, è una penisola collegata alla terraferma da un sottile istmo.` },
          hill: { label: `Colline`, html: `La <b>Moldavia</b> è un paese di dolci colline coperte di vigneti e frutteti: il punto più alto supera di poco i 400 m.` },
          lagoon: { label: `Laguna`, html: `Lungo la costa del Mar Nero si trovano molte lagune (i <i>limani</i>), alle foci dei fiumi.` }
        }
      }
    },
    {
      type: `text`,
      title: `2. La Romania`,
      html: `<p><b>Capitale</b>: Bucarest · <b>Abitanti</b>: circa 19 milioni · <b>Superficie</b>: circa 238.000 km² · <b>Forma di governo</b>: repubblica semipresidenziale · <b>Moneta</b>: leu romeno.</p>
<ul>
<li>Il territorio ha una forma "a cerchi": al centro l'altopiano della <b>Transilvania</b>, intorno l'arco dei <b>Carpazi</b>, poi colline e pianure, a sud il <b>Danubio</b> e a est il <b>Mar Nero</b> (porto di Costanza).</li>
<li>Il nome e la lingua ricordano <b>Roma</b>: nel 106 d.C. l'imperatore <b>Traiano</b> conquistò la Dacia e la regione fu romanizzata. Il <b>romeno</b> è una lingua neolatina, sorella dell'italiano.</li>
<li>Fa parte dell'<b>UE dal 2007</b> e dal 2025 è pienamente nell'area Schengen.</li>
<li>Economia: industria automobilistica (la Dacia), informatica, agricoltura (mais, grano, girasole), petrolio e gas, turismo.</li>
<li>In Italia vive la comunità romena più numerosa tra quelle straniere: circa un milione di persone.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. La Moldavia (Repubblica di Moldova)`,
      html: `<p><b>Capitale</b>: Chișinău · <b>Abitanti</b>: circa 2,4 milioni · <b>Superficie</b>: circa 33.800 km² (circa un nono dell'Italia) · <b>Forma di governo</b>: repubblica parlamentare · <b>Moneta</b>: leu moldavo.</p>
<ul>
<li>È stretta tra due fiumi: il <b>Prut</b> a ovest (confine con la Romania) e il <b>Nistro</b> a est. Non ha sbocchi sul mare.</li>
<li>La lingua ufficiale è il <b>romeno</b>. Molte persone parlano anche russo; ci sono minoranze ucraine, gagauze e bulgare.</li>
<li>Ha un territorio collinare, con terreni fertili: si coltivano viti, frutta, girasole, cereali. Il <b>vino</b> è una tradizione importantissima: la cantina di <b>Mileștii Mici</b> ha circa 200 km di gallerie sotterranee ed è entrata nel Guinness dei primati per la collezione di vini più grande del mondo (circa 2 milioni di bottiglie).</li>
<li>La regione della <b>Transnistria</b>, a est del Nistro, si è separata di fatto all'inizio degli anni '90 e non è riconosciuta da nessuno Stato dell'ONU.</li>
<li>Dal <b>2022</b> la Moldavia è <b>Paese candidato</b> a entrare nell'Unione Europea.</li>
</ul>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: Romania e Moldavia`,
      questions: [
        { type: `mc`, q: `Che tipo di lingua è il romeno?`, options: [`Slava`, `Neolatina`, `Germanica`], answer: 1, explain: `Deriva dal latino, come l'italiano: la Dacia fu una provincia romana.` },
        { type: `text`, q: `Qual è la capitale della Moldavia?`, answer: [`chisinau`, `chișinău`, `chisinău`, `kishinev`], explain: `Chișinău.` },
        { type: `tf`, q: `La Moldavia ha uno sbocco sul Mar Nero.`, answer: false, explain: `È uno Stato senza sbocco sul mare, tra Romania e Ucraina.` }
      ]
    },
    {
      type: `text`,
      title: `4. L'Ucraina`,
      html: `<p><b>Capitale</b>: Kiev (in ucraino Kyiv) · <b>Superficie</b>: circa 603.500 km², lo Stato più grande che si trovi interamente in Europa · <b>Abitanti</b>: circa 41 milioni prima del 2022; oggi il numero è incerto a causa della guerra · <b>Moneta</b>: grivnia.</p>
<ul>
<li>È quasi tutta pianeggiante, attraversata dal <b>Dnepr</b>. A ovest ci sono i Carpazi (Hoverla, 2.061 m), a sud il Mar Nero e il Mar d'Azov.</li>
<li>Gran parte del suolo è <b>černozëm</b>, la "terra nera", uno dei terreni più fertili del mondo, ricchissimo di humus. Per questo l'Ucraina è chiamata il <b>"granaio d'Europa"</b>: è tra i maggiori esportatori mondiali di grano, mais e <b>olio di girasole</b>.</li>
<li>La lingua è l'<b>ucraino</b>, una lingua slava scritta in alfabeto cirillico.</li>
<li>Storia recente: indipendente dall'URSS dal <b>24 agosto 1991</b>. Nel 1986 vi avvenne il disastro nucleare di <b>Černobyl'</b>. Nel 2014 la Russia ha occupato e annesso la Crimea, annessione che l'Assemblea generale dell'ONU non ha riconosciuto. Dal <b>24 febbraio 2022</b> la Russia ha avviato un'<b>invasione su larga scala</b> dell'Ucraina, condannata dall'Assemblea generale dell'ONU: la guerra ha causato moltissime vittime, distruzioni e milioni di profughi, molti accolti anche in Italia.</li>
</ul>
<p><i>Nota: quando una guerra è in corso, confini controllati e dati sulla popolazione cambiano: per i numeri aggiornati consulta fonti recenti e affidabili.</i></p>`
    },
    {
      type: `text`,
      title: `5. La Russia europea`,
      html: `<p>La <b>Russia</b> è lo Stato più grande del mondo: circa <b>17,1 milioni di km²</b> (oltre 56 volte l'Italia), con 11 fusi orari e circa 146 milioni di abitanti. È una <b>federazione</b>; la capitale è <b>Mosca</b>.</p>
<p>Gli Urali la dividono in due: la parte <b>asiatica</b> (la Siberia) è enorme ma poco abitata; la parte <b>europea</b> è circa un quarto del territorio ma ospita circa <b>tre quarti</b> della popolazione, le città principali (Mosca, <b>San Pietroburgo</b>, Nižnij Novgorod, Kazan') e la maggior parte delle industrie.</p>
<ul>
<li><b>Il Volga</b>, il fiume più lungo d'Europa, nasce vicino a Mosca e sfocia nel <b>Mar Caspio</b>; con canali e dighe è collegato a cinque mari.</li>
<li>A nord, il porto di <b>Murmansk</b>, oltre il Circolo polare artico, resta libero dai ghiacci tutto l'anno grazie alle acque calde della corrente del Nord Atlantico.</li>
<li><b>Economia</b>: petrolio e gas naturale (tra i primi produttori del mondo), metalli, grano, armi; molte risorse vengono dalla Siberia.</li>
<li>Tra i vicini c'è la <b>Bielorussia</b> (capitale Minsk); a nord-ovest i tre <b>Paesi baltici</b> (Estonia, Lettonia, Lituania), indipendenti dal 1991 e nell'UE dal 2004.</li>
</ul>`
    },
    {
      type: `widget`,
      title: `Di quale Paese si parla?`,
      widget: `classify`,
      options: {
        groups: [`Romania`, `Moldavia`, `Ucraina`, `Russia`],
        items: [
          [`🏰 Transilvania`, 0],
          [`🚗 Auto Dacia`, 0],
          [`⚓ Porto di Costanza`, 0],
          [`🍇 Cantine di Mileștii Mici`, 1],
          [`🌊 Tra il Prut e il Nistro`, 1],
          [`🌻 Granaio d'Europa, terra nera`, 2],
          [`🏙️ Kyiv sul Dnepr`, 2],
          [`☢️ Černobyl'`, 2],
          [`🚂 Transiberiana`, 3],
          [`🏛️ San Pietroburgo`, 3],
          [`🌊 Volga che sfocia nel Caspio`, 3]
        ]
      },
      caption: `Alcuni elementi (Danubio, Mar Nero, Carpazi) sono condivisi da più Paesi: qui abbiamo scelto quelli che appartengono a uno solo.`
    },
    {
      type: `widget`,
      title: `Abbina Paese e capitale`,
      widget: `match`,
      options: {
        pairs: [
          [`🇷🇴 Romania`, `Bucarest`],
          [`🇲🇩 Moldavia`, `Chișinău`],
          [`🇺🇦 Ucraina`, `Kiev (Kyiv)`],
          [`🇷🇺 Russia`, `Mosca`],
          [`🇧🇾 Bielorussia`, `Minsk`],
          [`🇧🇬 Bulgaria`, `Sofia`]
        ]
      },
      caption: `La Bulgaria, sul Mar Nero, è spesso studiata con i Balcani.`
    },
    {
      type: `example`,
      title: `Esempio pratico: il viaggio più lungo in treno`,
      html: `<p>La <b>Transiberiana</b> collega Mosca a Vladivostok, sull'Oceano Pacifico: <b>9.289 km</b>, la ferrovia più lunga del mondo. Il viaggio dura circa <b>7 giorni</b> e attraversa 8 fusi orari: a ogni fuso bisogna spostare l'orologio di un'ora.</p>
<p>Calcola: se partissi da Mosca alle 12:00 e il treno andasse sempre verso est, quante ore dovresti aggiungere arrivando a Vladivostok? (+7 ore: tra Mosca e Vladivostok ci sono 7 ore di differenza.) Proprio il primo tratto, da Mosca agli Urali, attraversa tutta la Russia europea: pianure, boschi di betulle, il Volga.</p>`
    },
    {
      type: `example`,
      title: `Esempio pratico: l'Europa orientale a tavola`,
      html: `<p>Molti prodotti che usi ogni giorno arrivano da qui:</p>
<ul>
<li>l'<b>olio di semi di girasole</b> nelle merendine e nelle patatine: l'Ucraina è stata a lungo il primo esportatore mondiale;</li>
<li>il <b>grano</b> per pane e pasta: Russia e Ucraina sono tra i maggiori esportatori del mondo;</li>
<li>il <b>mais</b> per i mangimi degli animali;</li>
<li>il <b>vino</b> moldavo e romeno, tra i più antichi d'Europa.</li>
</ul>
<p>Nel 2022, quando la guerra bloccò per mesi i porti ucraini sul Mar Nero, i prezzi del grano e dell'olio di girasole salirono in tutto il mondo. È un esempio di come la geografia di una regione lontana possa toccare la nostra vita quotidiana.</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… il Mar Caspio è un lago?`,
      html: `<p>Il <b>Mar Caspio</b>, al confine tra Europa e Asia, è il <b>lago più grande del mondo</b>: circa 371.000 km², più grande dell'Italia! Si chiama "mare" perché la sua acqua è leggermente salata. La sua superficie si trova a circa <b>28 metri sotto il livello del mare</b>. Ci vivono gli storioni, dalle cui uova si ricava il caviale.</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… a Černobyl' oggi vivono lupi e cavalli selvatici?`,
      html: `<p>Dopo l'esplosione del reattore nel 1986, intorno alla centrale fu creata una <b>zona di esclusione</b> di circa 30 km di raggio e oltre 100.000 persone furono evacuate. Senza esseri umani, la natura si è ripresa gli spazi: oggi ci vivono lupi, alci, linci e perfino i cavalli di Przewalski, liberati lì negli anni '90. Ma i livelli di radioattività in alcune zone restano pericolosi per l'uomo.</p>`
    },
    {
      type: `decision`,
      title: `1703: sei lo zar Pietro il Grande`,
      html: `<p>La Russia è immensa ma quasi chiusa: il Mar Nero è controllato dall'Impero ottomano, i porti dell'Artico gelano per molti mesi e la capitale, Mosca, è lontanissima dal mare. Vuoi modernizzare il Paese e farlo commerciare con l'Europa occidentale. Hai appena conquistato agli Svedesi un tratto di costa paludosa alla foce del fiume Neva, sul Mar Baltico.</p>`,
      question: `Che cosa fai?`,
      options: [
        { label: `Resto a Mosca: è il cuore storico e religioso della Russia.`, outcome: `Mosca è sicura, ma a centinaia di km dal mare: i commerci con l'Europa restano lenti e difficili.` },
        { label: `Costruisco una nuova città e un porto sulla Neva e ne faccio la capitale.`, outcome: `Le paludi rendono i lavori durissimi, il clima è freddo e umido e gli Svedesi potrebbero tornare. Ma la Russia avrebbe una "finestra sull'Europa".` },
        { label: `Punto tutto sull'Artico, sul Mar Bianco.`, outcome: `Il porto di Arcangelo esisteva già, ma gela per circa sei mesi all'anno ed è lontanissimo dall'Europa centrale.` }
      ],
      answer: 1,
      explain: `Nel 1703 Pietro il Grande fondò <b>San Pietroburgo</b> e nel 1712 ne fece la capitale. Decine di migliaia di lavoratori, spesso costretti, prosciugarono le paludi e costruirono la città su isole e canali; moltissimi morirono. La città divenne la "finestra sull'Europa" della Russia e restò capitale fino al 1918, quando i bolscevichi riportarono la capitale a Mosca. Oggi è la seconda città russa, con oltre 5 milioni di abitanti, ed è famosa per l'Ermitage e le notti bianche d'estate.`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capire l'Europa orientale`,
      intro: `Lingue, climi e distanze diversi: prova queste chiavi di lettura.`,
      tabs: [
        {
          label: `🔤 Il cirillico in 5 minuti`,
          html: `<p>Ucraino, russo, bielorusso e bulgaro si scrivono con l'<b>alfabeto cirillico</b>, nato nel IX secolo dai missionari Cirillo e Metodio (e dai loro allievi) partendo soprattutto dall'alfabeto greco. Alcune lettere sono "amiche", altre "ingannevoli":</p>
<table>
<tr><th>Lettera</th><th>Suono</th><th>Attenzione!</th></tr>
<tr><td>А, К, М, О, Т</td><td>a, k, m, o, t</td><td>come in italiano</td></tr>
<tr><td>В</td><td>v</td><td>sembra una B ma è una V</td></tr>
<tr><td>Н</td><td>n</td><td>sembra una H ma è una N</td></tr>
<tr><td>Р</td><td>r</td><td>sembra una P ma è una R</td></tr>
<tr><td>С</td><td>s</td><td>sembra una C ma è una S</td></tr>
<tr><td>Д, Л, П</td><td>d, l, p</td><td>derivano da Δ, Λ, Π greci</td></tr>
</table>
<p>Prova a leggere: <b>МОСКВА</b> (M-O-S-K-V-A = Moskva, Mosca) e <b>КИЇВ</b> (Kyiv).</p>`
        },
        {
          label: `🌡️ Perché fa così freddo?`,
          html: `<p>Il mare funziona come un <b>termosifone</b> che si scalda lentamente in estate e restituisce calore lentamente in inverno. La terraferma, invece, è come una <b>padella</b>: si scalda e si raffredda in fretta.</p>
<p>L'Europa occidentale riceve i venti umidi e tiepidi dell'Atlantico. Più si va a est, più quei venti si "consumano" e prevale la padella: estati calde, inverni gelidi. Ecco le medie di gennaio alla stessa latitudine circa (52-55° N):</p>
<table>
<tr><th>Città</th><th>Distanza dall'Atlantico</th><th>Media di gennaio</th></tr>
<tr><td>Dublino</td><td>sull'oceano</td><td>circa +5 °C</td></tr>
<tr><td>Berlino</td><td>media</td><td>circa +1 °C</td></tr>
<tr><td>Mosca</td><td>lontanissima</td><td>circa -6 °C</td></tr>
</table>`
        },
        {
          label: `🗣️ Romeno e italiano`,
          html: `<p>Il romeno è parente stretto dell'italiano: molte parole si capiscono al volo!</p>
<table>
<tr><th>Italiano</th><th>Romeno</th></tr>
<tr><td>casa</td><td>casă</td></tr>
<tr><td>lupo</td><td>lup</td></tr>
<tr><td>latte</td><td>lapte</td></tr>
<tr><td>notte</td><td>noapte</td></tr>
<tr><td>scuola</td><td>școală</td></tr>
<tr><td>grazie</td><td>mulțumesc</td></tr>
</table>
<p>Attenzione alle sorprese: "grazie" (mulțumesc) viene da un'altra radice, e l'articolo determinativo si mette <b>dopo</b> il nome: <i>lupul</i> = il lupo, <i>casa</i> = la casa. Se in classe hai compagni romeni o moldavi, chiedi a loro di leggerti queste parole!</p>`
        },
        {
          label: `🌍 Sul globo`,
          html: `<p>Gira il globo: trova le capitali e segui la Transiberiana da Mosca fino al Pacifico. Nota quanto è piccola l'Europa rispetto alla Russia asiatica!</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 44.43, lon: 26.1, label: `Bucarest`, color: `#2563eb` },
              { lat: 47.01, lon: 28.86, label: `Chișinău`, color: `#eab308` },
              { lat: 50.45, lon: 30.52, label: `Kiev (Kyiv)`, color: `#0ea5e9` },
              { lat: 55.76, lon: 37.62, label: `Mosca`, color: `#ef4444` },
              { lat: 56.84, lon: 60.6, label: `Ekaterinburg (Urali)`, color: `#f97316` },
              { lat: 55.03, lon: 82.92, label: `Novosibirsk`, color: `#f97316` },
              { lat: 52.29, lon: 104.3, label: `Irkutsk (lago Bajkal)`, color: `#f97316` },
              { lat: 43.12, lon: 131.89, label: `Vladivostok`, color: `#ef4444` }
            ],
            routes: [{ points: [3, 4, 5, 6, 7], color: `#dc2626` }]
          }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa dell'Europa orientale`,
      nodes: [
        { id: `pianura`, label: `Pianura sarmatica`, x: 50, y: 6, color: `#65a30d`, html: `La più vasta pianura d'Europa, dalla Polonia agli Urali.`, why: `È un antico zoccolo di rocce molto stabili (la "piattaforma russa"), coperto da sedimenti; i ghiacciai delle glaciazioni l'hanno ulteriormente spianata.` },
        { id: `clima`, label: `Clima continentale`, x: 18, y: 25, color: `#0ea5e9`, html: `Inverni gelidi, estati calde, forte escursione termica.`, why: `La distanza dall'Atlantico toglie l'effetto mitigatore del mare; e in pianura, senza montagne a fare da barriera, l'aria fredda artica scende liberamente verso sud.` },
        { id: `fasce`, label: `Tundra, taiga, steppa`, x: 18, y: 55, color: `#166534`, html: `Fasce di vegetazione da nord a sud.`, why: `La vegetazione dipende soprattutto da temperatura e piogge: con la latitudine cambia la quantità di luce e calore che arriva dal Sole.` },
        { id: `terranera`, label: `Terra nera (černozëm)`, x: 50, y: 40, color: `#3f3f46`, html: `Suolo fertilissimo delle steppe di Ucraina e Russia meridionale.`, why: `Per migliaia di anni le erbe della steppa sono cresciute e morte, accumulando humus; gli inverni freddi ne rallentano la decomposizione, quindi il suolo si è arricchito di sostanza organica.` },
        { id: `granaio`, label: `Granaio d'Europa`, x: 50, y: 70, color: `#eab308`, html: `Grano, mais, girasole esportati in tutto il mondo.`, why: `Terra nera + grandi pianure facili da coltivare con le macchine + porti sul Mar Nero = enormi produzioni agricole da esportare.` },
        { id: `fiumi`, label: `Grandi fiumi`, x: 82, y: 25, color: `#2563eb`, html: `Volga, Dnepr, Danubio, Don.`, why: `In una pianura enorme e poco inclinata i fiumi diventano lunghissimi e lenti: perfetti per la navigazione, tanto che furono le prime "strade" della Russia medievale.` },
        { id: `lingue`, label: `Lingue slave e romanze`, x: 82, y: 55, color: `#a855f7`, html: `Russo, ucraino, bielorusso (slave, in cirillico); romeno (neolatino).`, why: `I popoli slavi si diffusero nella regione nel primo Medioevo; la Dacia invece era stata provincia romana (106-271 d.C.) e conservò una lingua latina, circondata da lingue slave e dall'ungherese.` },
        { id: `storia`, label: `Imperi e indipendenze`, x: 82, y: 85, color: `#7f1d1d`, html: `Impero russo, URSS, poi indipendenza di Ucraina, Moldavia, Paesi baltici (1991); guerra in Ucraina dal 2014 e su larga scala dal 2022.`, why: `Una pianura senza confini naturali è facile da attraversare per gli eserciti: per secoli imperi diversi si sono contesi queste terre. Il crollo dell'URSS nel 1991 creò nuovi Stati, con questioni di confini e minoranze ancora aperte.` },
        { id: `risorse`, label: `Petrolio e gas`, x: 18, y: 85, color: `#f97316`, html: `La Russia è tra i primi produttori mondiali.`, why: `Nel sottosuolo di Siberia, Urali e regione del Volga si sono accumulati, in milioni di anni, resti di organismi trasformati in idrocarburi. Gasdotti e oleodotti li portano in Europa e in Asia.` }
      ],
      edges: [
        [`pianura`, `clima`, `lascia passare l'aria artica`],
        [`clima`, `fasce`, `determina le`],
        [`fasce`, `terranera`, `nella steppa nasce la`],
        [`terranera`, `granaio`, `rende l'Ucraina il`],
        [`pianura`, `fiumi`, `ospita`],
        [`fiumi`, `granaio`, `trasportano il grano`],
        [`pianura`, `storia`, `facile da invadere`],
        [`lingue`, `storia`, `raccontano la`],
        [`risorse`, `storia`, `interessi economici`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz: Ucraina e Russia`,
      questions: [
        { type: `mc`, q: `Perché l'Ucraina è chiamata "granaio d'Europa"?`, options: [`Per i suoi grandi magazzini`, `Per la terra nera fertilissima e le grandi coltivazioni di cereali`, `Perché importa molto grano`], answer: 1, explain: `Il černozëm e le vaste pianure permettono enormi raccolti.` },
        { type: `mc`, q: `Dove sfocia il Volga?`, options: [`Nel Mar Nero`, `Nel Mar Baltico`, `Nel Mar Caspio`], answer: 2, explain: `Nel Mar Caspio, il lago più grande del mondo.` },
        { type: `tf`, q: `La maggior parte degli abitanti della Russia vive nella parte europea.`, answer: true, explain: `Circa tre quarti, anche se la parte europea è solo un quarto del territorio.` }
      ]
    }
  ],
  glossary: [
    { t: `Pianura sarmatica`, d: `La grande pianura dell'Europa orientale, detta anche pianura russa.` },
    { t: `Clima continentale`, d: `Clima con inverni molto freddi ed estati calde, tipico delle zone lontane dal mare.` },
    { t: `Escursione termica`, d: `Differenza tra la temperatura più alta e quella più bassa in un periodo (giorno o anno).` },
    { t: `Tundra`, d: `Ambiente freddo senza alberi, con muschi e licheni, vicino al Circolo polare artico.` },
    { t: `Taiga`, d: `Immensa foresta di conifere delle regioni fredde dell'emisfero nord.` },
    { t: `Steppa`, d: `Vasta prateria senza alberi, con estati calde e secche.` },
    { t: `Černozëm (terra nera)`, d: `Suolo scuro e fertilissimo, ricco di humus, tipico delle steppe.` },
    { t: `Alfabeto cirillico`, d: `Alfabeto usato per russo, ucraino, bielorusso, bulgaro, serbo e altre lingue.` },
    { t: `Lingua neolatina`, d: `Lingua derivata dal latino, come italiano, romeno, francese, spagnolo.` },
    { t: `Paese candidato`, d: `Stato ufficialmente in attesa di entrare nell'Unione Europea, come Moldavia e Ucraina.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quali monti segnano il confine tra Europa e Asia?`, options: [`Carpazi`, `Urali`, `Alpi`], answer: 1, explain: `Gli Urali, in Russia.` },
      { type: `text`, q: `Qual è la capitale della Romania?`, answer: [`bucarest`, `bucuresti`, `bucurești`], explain: `Bucarest.` },
      { type: `mc`, q: `Perché in Romania si parla una lingua neolatina?`, options: [`Per i commerci con la Spagna`, `Perché la Dacia fu conquistata e romanizzata dai Romani`, `Per una legge moderna`], answer: 1, explain: `Traiano conquistò la Dacia nel 106 d.C.` },
      { type: `mc`, q: `Tra quali fiumi si trova la Moldavia?`, options: [`Prut e Nistro`, `Volga e Don`, `Reno e Danubio`], answer: 0, explain: `Il Prut a ovest, il Nistro a est.` },
      { type: `tf`, q: `L'Ucraina è lo Stato più grande che si trovi interamente in Europa.`, answer: true, explain: `Circa 603.500 km²; la Russia è più grande ma in gran parte in Asia.` },
      { type: `order`, q: `Metti in ordine le fasce di vegetazione da NORD a SUD.`, items: [`Tundra`, `Taiga`, `Foresta mista`, `Steppa`], explain: `Dal freddo dell'Artico alle praterie calde vicino al Mar Nero.` },
      { type: `mc`, q: `Che cos'è il černozëm?`, options: [`Un vento freddo`, `Un suolo nero e fertilissimo`, `Una montagna`], answer: 1, explain: `La "terra nera" ricca di humus delle steppe.` },
      { type: `num`, q: `Quanti chilometri è lunga circa la Transiberiana?`, answer: 9289, tol: 300, unit: `km`, explain: `9.289 km da Mosca a Vladivostok.` },
      { type: `mc`, q: `Quale lago è il più grande d'Europa?`, options: [`Ladoga`, `Balaton`, `Lago di Garda`], answer: 0, explain: `Il Ladoga, in Russia, circa 17.700 km².` },
      { type: `mc`, q: `Quale alfabeto si usa per scrivere l'ucraino e il russo?`, options: [`Latino`, `Greco`, `Cirillico`], answer: 2, explain: `L'alfabeto cirillico.` },
      { type: `text`, q: `Quale città fondò Pietro il Grande nel 1703 sul Mar Baltico? (San …)`, answer: [`san pietroburgo`, `pietroburgo`, `sankt peterburg`], explain: `San Pietroburgo, capitale della Russia dal 1712 al 1918.` },
      { type: `tf`, q: `La Romania fa parte dell'Unione Europea dal 2007.`, answer: true, explain: `Insieme alla Bulgaria, nel 2007.` }
    ]
  }
});

TOPIC('it', {
  id: "m3-sci-evoluzione",
  title: "L'evoluzione",
  intro: "Sulla Terra vivono milioni di specie diverse, e nel passato ne sono esistite molte di più, come i dinosauri. Da dove vengono? Le specie cambiano nel tempo? Nel 1859 <b>Charles Darwin</b> diede una risposta che rivoluzionò la biologia: le specie <b>evolvono</b> per <b>selezione naturale</b>. Oggi fossili, anatomia e DNA confermano la sua idea.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Prima di Darwin: le specie cambiano?",
      html: `<p>Per molti secoli in Europa prevalse il <b>fissismo</b>: l'idea che le specie fossero state create così come sono e non cambiassero mai. Il naturalista svedese <b>Carl von Linné (Linneo)</b>, che nel 1735 inventò il sistema di classificazione con due nomi (es. <i>Homo sapiens</i>), all'inizio era fissista.</p>
<p>Ma i <b>fossili</b> ponevano domande: perché nelle rocce si trovano animali che oggi non esistono più? Il francese <b>Georges Cuvier</b> dimostrò che molte specie si erano <b>estinte</b>. Il geologo <b>Charles Lyell</b> mostrò che la Terra è antichissima e cambia lentamente.</p>
<p>Nel <b>1809</b> il francese <b>Jean-Baptiste Lamarck</b> propose la prima vera teoria dell'evoluzione:</p>
<ul>
<li>gli organi che si usano si sviluppano, quelli che non si usano si atrofizzano (<b>uso e non uso</b>);</li>
<li>i caratteri acquisiti durante la vita si trasmettono ai figli (<b>ereditarietà dei caratteri acquisiti</b>).</li>
</ul>
<p>Secondo Lamarck le giraffe avevano il collo lungo perché, a forza di allungarsi per raggiungere le foglie alte, lo avevano allungato un po' e lo avevano trasmesso ai figli. Oggi sappiamo che <b>i caratteri acquisiti non si ereditano</b>: se un atleta sviluppa i muscoli, i suoi figli non nascono muscolosi. Ma Lamarck ebbe il merito di affermare che le specie <b>cambiano</b>.</p>`
    },
    {
      type: "text",
      title: "2. Il viaggio di Darwin",
      html: `<p><b>Charles Darwin</b> (1809–1882) era un giovane inglese appassionato di scienze naturali. A 22 anni partì come naturalista sulla nave <b>HMS Beagle</b>, che doveva disegnare le carte delle coste del Sud America. Il viaggio durò quasi <b>5 anni</b> (dicembre 1831 – ottobre 1836) e fece il giro del mondo.</p>
<p>Darwin raccolse fossili di animali giganti estinti (come il <i>Megatherium</i>, un bradipo grande come un elefante), osservò terremoti e vulcani e studiò animali e piante di ogni luogo. Nel 1835 visitò le isole <b>Galápagos</b>, nell'oceano Pacifico, a circa 1.000 km dall'Ecuador. Lì notò che:</p>
<ul>
<li>i <b>tordi beffeggiatori</b> erano diversi da un'isola all'altra;</li>
<li>le <b>tartarughe giganti</b> avevano carapaci di forma diversa a seconda dell'isola;</li>
<li>i <b>fringuelli</b> (che classificò meglio al ritorno, con l'aiuto dell'ornitologo John Gould) avevano becchi di forma diversa, adatti a cibi diversi: grossi per rompere semi duri, sottili per catturare insetti.</li>
</ul>
<p>Perché tante specie simili ma diverse, su isole vicine? Forse discendevano da antenati comuni arrivati dal continente e poi si erano <b>modificate</b> in modo diverso su ogni isola.</p>`
    },
    {
      type: "3d",
      title: "Il viaggio del Beagle sul globo",
      scene: "globe",
      options: {
        points: [
          { lat: 50.37, lon: -4.14, label: "Plymouth (partenza 1831)", color: "#ef4444" },
          { lat: 14.92, lon: -23.51, label: "Capo Verde", color: "#f97316" },
          { lat: -12.97, lon: -38.5, label: "Bahia", color: "#f97316" },
          { lat: -22.9, lon: -43.2, label: "Rio de Janeiro", color: "#f97316" },
          { lat: -34.9, lon: -56.2, label: "Montevideo", color: "#f97316" },
          { lat: -54.8, lon: -68.3, label: "Terra del Fuoco", color: "#f97316" },
          { lat: -33.05, lon: -71.6, label: "Valparaíso", color: "#f97316" },
          { lat: -0.7, lon: -90.3, label: "Galápagos (1835)", color: "#16a34a" },
          { lat: -17.65, lon: -149.4, label: "Tahiti", color: "#f97316" },
          { lat: -35.2, lon: 174.1, label: "Nuova Zelanda", color: "#f97316" },
          { lat: -33.87, lon: 151.2, label: "Sydney", color: "#f97316" },
          { lat: -33.9, lon: 18.4, label: "Città del Capo", color: "#f97316" },
          { lat: 50.37, lon: -4.14, label: "Ritorno (1836)", color: "#ef4444" }
        ],
        routes: [{ points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], color: "#2563eb" }]
      },
      caption: "Gira il globo e segui la rotta del Beagle (1831–1836). Il punto verde sono le Galápagos."
    },
    {
      type: "text",
      title: "3. La selezione naturale",
      html: `<p>Tornato in Inghilterra, Darwin rifletté per oltre 20 anni. Lo aiutarono due idee: gli <b>allevatori</b> ottengono razze diverse di cani, piccioni o mucche scegliendo come riproduttori gli animali con i caratteri desiderati (<b>selezione artificiale</b>); e l'economista <b>Thomas Malthus</b> (1798) aveva scritto che le popolazioni crescono più in fretta delle risorse disponibili.</p>
<p>Nel <b>1859</b> Darwin pubblicò <i>L'origine delle specie</i>. La sua teoria si basa su pochi fatti osservabili:</p>
<ol>
<li><b>Variabilità</b>: gli individui di una stessa specie sono tutti un po' diversi tra loro.</li>
<li><b>Ereditarietà</b>: molte di queste differenze si trasmettono ai figli.</li>
<li><b>Sovrapproduzione</b>: nascono più individui di quanti l'ambiente possa nutrirne (un merluzzo depone milioni di uova!).</li>
<li><b>Lotta per l'esistenza</b>: gli individui competono per cibo, spazio, partner e devono sfuggire a predatori e malattie.</li>
<li><b>Sopravvivenza e riproduzione dei più adatti</b>: chi ha caratteri più vantaggiosi in quell'ambiente vive più a lungo e ha più figli, a cui trasmette quei caratteri.</li>
</ol>
<p>Generazione dopo generazione i caratteri vantaggiosi diventano più frequenti: la popolazione <b>cambia</b>. In tempi lunghissimi, popolazioni separate possono diventare <b>specie diverse</b> (<b>speciazione</b>).</p>
<p>⚠️ \"Più adatto\" non significa \"più forte\": significa <b>più adatto a quell'ambiente</b>. Se l'ambiente cambia, cambia anche chi è più adatto. E l'evoluzione non ha uno scopo: le variazioni nascono <b>a caso</b> (oggi sappiamo che sono <b>mutazioni</b> del DNA), è l'ambiente che le \"seleziona\".</p>`
    },
    {
      type: "svg",
      title: "Lamarck e Darwin a confronto: le giraffe",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fefce8"/>
<line x1="320" y1="10" x2="320" y2="310" stroke="#a16207" stroke-width="3" stroke-dasharray="8"/>
<text x="160" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">LAMARCK ❌</text>
<text x="480" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#14532d">DARWIN ✅</text>
<rect x="40" y="200" width="40" height="30" rx="8" fill="#f59e0b"/><rect x="58" y="140" width="10" height="62" fill="#f59e0b"/><circle cx="66" cy="136" r="9" fill="#f59e0b"/>
<text x="60" y="255" font-size="13" text-anchor="middle" fill="#7c2d12">collo corto</text>
<text x="105" y="190" font-size="26" fill="#7c2d12">→</text>
<rect x="140" y="200" width="40" height="30" rx="8" fill="#f59e0b"/><rect x="158" y="115" width="10" height="87" fill="#f59e0b"/><circle cx="166" cy="110" r="9" fill="#f59e0b"/>
<text x="160" y="255" font-size="13" text-anchor="middle" fill="#7c2d12">si allunga</text>
<text x="205" y="190" font-size="26" fill="#7c2d12">→</text>
<rect x="240" y="200" width="40" height="30" rx="8" fill="#f59e0b"/><rect x="258" y="85" width="10" height="117" fill="#f59e0b"/><circle cx="266" cy="80" r="9" fill="#f59e0b"/>
<text x="260" y="255" font-size="13" text-anchor="middle" fill="#7c2d12">figlio</text>
<text x="160" y="290" font-size="14" text-anchor="middle" fill="#7c2d12">lo sforzo si eredita (falso)</text>
<rect x="350" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="366" y="140" width="9" height="62" fill="#f59e0b"/><circle cx="371" cy="136" r="8" fill="#f59e0b"/>
<rect x="400" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="416" y="100" width="9" height="102" fill="#f59e0b"/><circle cx="421" cy="96" r="8" fill="#f59e0b"/>
<rect x="450" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="466" y="125" width="9" height="77" fill="#f59e0b"/><circle cx="471" cy="121" r="8" fill="#f59e0b"/>
<line x1="345" y1="128" x2="380" y2="150" stroke="#dc2626" stroke-width="4"/><line x1="380" y1="128" x2="345" y2="150" stroke="#dc2626" stroke-width="4"/>
<text x="418" y="255" font-size="13" text-anchor="middle" fill="#14532d">variabilità: colli diversi</text>
<text x="505" y="190" font-size="26" fill="#14532d">→</text>
<rect x="545" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="561" y="95" width="9" height="107" fill="#f59e0b"/><circle cx="566" cy="91" r="8" fill="#f59e0b"/>
<rect x="590" y="200" width="36" height="28" rx="8" fill="#f59e0b"/><rect x="606" y="100" width="9" height="102" fill="#f59e0b"/><circle cx="611" cy="96" r="8" fill="#f59e0b"/>
<text x="585" y="255" font-size="13" text-anchor="middle" fill="#14532d">sopravvivono e</text>
<text x="585" y="272" font-size="13" text-anchor="middle" fill="#14532d">si riproducono</text>
<text x="480" y="300" font-size="14" text-anchor="middle" fill="#14532d">l'ambiente seleziona chi è già adatto</text>
<ellipse cx="420" cy="70" rx="60" ry="20" fill="#22c55e"/>
<text x="420" y="75" font-size="13" text-anchor="middle" fill="#14532d">foglie alte</text>
</svg>`,
      caption: "Per Lamarck l'individuo cambia e trasmette il cambiamento; per Darwin le differenze esistono già e l'ambiente premia quelle vantaggiose. (Oggi si pensa che il collo lungo delle giraffe sia stato utile anche nelle lotte tra maschi.)"
    },
    {
      type: "decision",
      title: "1858: sei Darwin e ricevi una lettera inattesa",
      html: `<p>Da vent'anni raccogli prove sulla selezione naturale, ma non hai ancora pubblicato nulla: vuoi essere sicuro e temi le reazioni. Un giorno arriva una lettera da <b>Alfred Russel Wallace</b>, un giovane naturalista che lavora nelle isole dell'Indonesia: ti descrive, quasi con le tue parole, la stessa teoria!</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Pubblico di corsa da solo, senza dire niente della lettera.", outcome: "Avresti la priorità, ma sarebbe scorretto verso Wallace: se si scoprisse, la tua reputazione di scienziato onesto sarebbe rovinata." },
        { label: "Lascio che Wallace pubblichi per primo: è arrivato prima lui a scriverla.", outcome: "Generoso, ma vent'anni di prove raccolte resterebbero nel cassetto, e Wallace aveva solo un saggio breve, senza le montagne di dati che avevi tu." },
        { label: "Chiedo consiglio ad amici scienziati e presentiamo insieme le due ricerche.", outcome: "Si riconosce il merito di entrambi e si mostrano alla comunità scientifica sia l'idea sia le prove." }
      ],
      answer: 2,
      explain: "I geologi e botanici amici di Darwin, <b>Charles Lyell</b> e <b>Joseph Hooker</b>, organizzarono il <b>1° luglio 1858</b> una presentazione congiunta alla Linnean Society di Londra con gli scritti di Darwin e di Wallace. Poi Darwin completò in fretta il suo libro, <i>L'origine delle specie</i>, uscito il <b>24 novembre 1859</b>. Wallace rimase sempre un ammiratore di Darwin e intitolò un suo libro proprio <i>Darwinism</i>. È un esempio di come nella scienza due persone possano arrivare alla stessa scoperta in modo indipendente."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Lamarck e Darwin",
      questions: [
        { type: "mc", q: "Quale idea di Lamarck si è rivelata sbagliata?", options: ["Che le specie cambiano nel tempo", "Che i caratteri acquisiti in vita si ereditano", "Che esistono i fossili"], answer: 1, explain: "I caratteri acquisiti (es. muscoli allenati) non passano ai figli." },
        { type: "text", q: "Come si chiamano le isole del Pacifico che colpirono Darwin per i loro fringuelli e tartarughe?", answer: ["galapagos", "galápagos", "isole galapagos", "le galapagos"], explain: "Le isole Galápagos, visitate nel 1835." },
        { type: "order", q: "Metti in ordine il ragionamento della selezione naturale.", items: ["Gli individui sono diversi tra loro", "Nascono più individui di quanti l'ambiente ne nutra", "I più adatti sopravvivono e si riproducono di più", "I loro caratteri diventano più frequenti nella popolazione"], explain: "Variabilità → sovrapproduzione e lotta → sopravvivenza dei più adatti → cambiamento della popolazione." }
      ]
    },
    {
      type: "example",
      title: "Esempio pratico: la falena delle betulle",
      html: `<p>In Inghilterra vive la falena <i>Biston betularia</i>, che di giorno si riposa sui tronchi. Prima dell'Ottocento quasi tutte erano <b>chiare</b>, mimetizzate sui tronchi coperti di licheni chiari; le rare falene <b>scure</b> venivano viste e mangiate dagli uccelli.</p>
<p>Con la <b>Rivoluzione industriale</b> il fumo del carbone uccise i licheni e annerì i tronchi intorno alle città. Ora erano le falene chiare a essere visibili! La prima falena scura fu segnalata a Manchester nel 1848; verso il 1895 vicino a Manchester circa il <b>98%</b> delle falene era scuro.</p>
<p>Dopo le leggi contro l'inquinamento dell'aria (dal 1956) i tronchi tornarono chiari… e tornarono a prevalere le falene chiare. Un esempio di selezione naturale osservata in diretta in pochi decenni.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i batteri resistenti agli antibiotici",
      html: `<p>Quando si prende un <b>antibiotico</b> (il primo, la penicillina, fu scoperto da Alexander Fleming nel 1928), muoiono quasi tutti i batteri. Ma se per caso uno di loro ha una mutazione che lo rende resistente, sopravvive e si moltiplica: in poche ore può avere milioni di discendenti, tutti resistenti.</p>
<p>Per questo i medici raccomandano di prendere gli antibiotici <b>solo quando servono</b> e <b>per tutto il tempo prescritto</b>: usarli male \"seleziona\" i batteri resistenti. È l'evoluzione che lavora sotto i nostri occhi, ed è oggi uno dei grandi problemi della medicina.</p>`
    },
    {
      type: "text",
      title: "4. Le prove dell'evoluzione",
      html: `<ul>
<li><b>Fossili</b>: negli strati di roccia più antichi si trovano organismi più semplici, in quelli più recenti organismi più complessi. Esistono <b>forme di transizione</b>, come l'<i>Archaeopteryx</i> (scoperto nel 1861), metà dinosauro e metà uccello: aveva denti e coda ossea ma anche penne e ali.</li>
<li><b>Organi omologhi</b>: il braccio dell'uomo, l'ala del pipistrello, la pinna della balena e la zampa del gatto hanno funzioni diverse ma <b>le stesse ossa</b> nella stessa disposizione: derivano da un antenato comune.</li>
<li><b>Organi analoghi</b>: l'ala di un uccello e quella di una farfalla hanno la stessa funzione ma struttura diversa: si sono evolute separatamente per lo stesso scopo.</li>
<li><b>Organi vestigiali</b>: resti di organi che non servono più, come il <b>coccige</b> (resto della coda) nell'uomo o le piccole ossa del bacino nelle balene (resto delle zampe posteriori).</li>
<li><b>Embriologia</b>: gli embrioni dei vertebrati, nelle prime fasi, si assomigliano moltissimo (hanno tutti una coda e delle fessure nel collo).</li>
<li><b>DNA</b>: più due specie sono parenti, più il loro DNA è simile. Uomo e scimpanzé condividono circa il <b>98–99%</b> del DNA; uomo e topo circa l'85% dei geni che codificano proteine.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Omologhi o analoghi?",
      widget: "classify",
      options: {
        groups: ["🦴 Omologhi (stesse ossa, antenato comune)", "🪽 Analoghi (stessa funzione, origine diversa)"],
        items: [
          ["Braccio umano e ala di pipistrello", 0],
          ["Ala di uccello e ala di farfalla", 1],
          ["Pinna di balena e zampa di cane", 0],
          ["Pinna di squalo e pinna di delfino", 1],
          ["Zampa di cavallo e braccio umano", 0],
          ["Occhio di polpo e occhio umano", 1]
        ]
      },
      caption: "Squali (pesci) e delfini (mammiferi) hanno forme simili perché vivono nello stesso ambiente: è l'evoluzione convergente."
    },
    {
      type: "svg",
      title: "Organi omologhi: le stesse ossa in animali diversi",
      svg: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="280" fill="#f8fafc"/>
<g transform="translate(20,30)">
<rect x="40" y="10" width="20" height="80" rx="8" fill="#ef4444"/>
<rect x="30" y="92" width="14" height="60" rx="6" fill="#3b82f6"/><rect x="56" y="92" width="14" height="60" rx="6" fill="#22c55e"/>
<rect x="28" y="155" width="44" height="18" rx="6" fill="#f59e0b"/>
<rect x="28" y="175" width="7" height="30" fill="#a855f7"/><rect x="39" y="175" width="7" height="34" fill="#a855f7"/><rect x="50" y="175" width="7" height="36" fill="#a855f7"/><rect x="61" y="175" width="7" height="32" fill="#a855f7"/>
<text x="50" y="235" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Uomo</text></g>
<g transform="translate(170,30)">
<rect x="40" y="10" width="20" height="50" rx="8" fill="#ef4444"/>
<rect x="30" y="62" width="14" height="60" rx="6" fill="#3b82f6"/><rect x="56" y="62" width="14" height="60" rx="6" fill="#22c55e"/>
<rect x="28" y="125" width="44" height="12" rx="6" fill="#f59e0b"/>
<path d="M35 137 L0 205 M45 137 L30 215 M55 137 L60 215 M65 137 L95 205" stroke="#a855f7" stroke-width="6"/>
<path d="M0 205 L30 215 L60 215 L95 205 L65 137 L35 137 Z" fill="#c4b5fd" opacity="0.5"/>
<text x="50" y="235" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Pipistrello</text></g>
<g transform="translate(330,30)">
<rect x="35" y="10" width="30" height="35" rx="10" fill="#ef4444"/>
<rect x="30" y="47" width="18" height="40" rx="6" fill="#3b82f6"/><rect x="52" y="47" width="18" height="40" rx="6" fill="#22c55e"/>
<rect x="25" y="90" width="50" height="18" rx="6" fill="#f59e0b"/>
<path d="M20 110 Q 50 220 80 110 Z" fill="#c4b5fd" opacity="0.6"/>
<rect x="34" y="110" width="7" height="60" fill="#a855f7"/><rect x="46" y="110" width="7" height="75" fill="#a855f7"/><rect x="58" y="110" width="7" height="60" fill="#a855f7"/>
<text x="50" y="235" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Balena</text></g>
<g transform="translate(480,30)">
<rect x="40" y="10" width="20" height="65" rx="8" fill="#ef4444"/>
<rect x="34" y="77" width="12" height="70" rx="6" fill="#3b82f6"/><rect x="54" y="77" width="12" height="70" rx="6" fill="#22c55e"/>
<rect x="32" y="150" width="36" height="15" rx="6" fill="#f59e0b"/>
<rect x="34" y="167" width="7" height="22" fill="#a855f7"/><rect x="44" y="167" width="7" height="25" fill="#a855f7"/><rect x="54" y="167" width="7" height="22" fill="#a855f7"/>
<text x="50" y="235" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Gatto</text></g>
<text x="320" y="272" font-size="14" text-anchor="middle" fill="#334155">rosso = omero · blu e verde = radio e ulna · arancio = polso · viola = dita</text>
</svg>`,
      caption: "Arti diversi, stesso \"progetto\": è la traccia di un antenato comune."
    },
    {
      type: "text",
      title: "5. L'evoluzione umana",
      html: `<p>L'uomo <b>non discende dallo scimpanzé</b>: uomini e scimpanzé hanno un <b>antenato comune</b> vissuto in Africa circa <b>6–7 milioni di anni fa</b>, da cui le due linee si sono separate. Le tappe principali (semplificate) sono:</p>
<ul>
<li><b>Australopiteci</b> (circa 4–2 milioni di anni fa): camminavano già su due gambe ma avevano un cervello piccolo. Il fossile più famoso è <b>Lucy</b>, un <i>Australopithecus afarensis</i> di circa 3,2 milioni di anni fa trovato in Etiopia nel 1974.</li>
<li><b>Homo habilis</b> (circa 2,4 milioni di anni fa): costruiva i primi strumenti di pietra.</li>
<li><b>Homo erectus</b> (da circa 1,9 milioni di anni fa): usava il fuoco e fu il primo a uscire dall'Africa, arrivando fino in Asia.</li>
<li><b>Homo neanderthalensis</b> (circa 400.000 – 40.000 anni fa): viveva in Europa e Asia, seppelliva i morti, era intelligente e robusto.</li>
<li><b>Homo sapiens</b>: compare in Africa circa <b>300.000 anni fa</b> (fossili di Jebel Irhoud, in Marocco); da circa 60.000–70.000 anni fa si diffonde in tutto il mondo.</li>
</ul>
<p>Non è una fila ordinata ma un <b>cespuglio</b>: per un certo tempo sono esistite insieme più specie umane. Il genetista svedese <b>Svante Pääbo</b> (Nobel 2022) ha letto il DNA dei Neanderthal e ha scoperto che molte persone di oggi, fuori dall'Africa, ne portano circa l'1–2%: Sapiens e Neanderthal si sono incontrati e hanno avuto figli insieme.</p>`
    },
    {
      type: "widget",
      title: "La lunga storia della vita (scala logaritmica)",
      widget: "timeline",
      options: {
        scale: "log",
        events: [
          { year: -3800000000, label: "Prime cellule", icon: "🦠" },
          { year: -2400000000, label: "Ossigeno nell'aria", icon: "🫧" },
          { year: -541000000, label: "Esplosione cambriana", icon: "🦐" },
          { year: -375000000, label: "Pesci verso terra", icon: "🐟" },
          { year: -230000000, label: "Primi dinosauri", icon: "🦕" },
          { year: -66000000, label: "Estinzione dinosauri", icon: "☄️" },
          { year: -3200000, label: "Lucy", icon: "🦴" },
          { year: -300000, label: "Homo sapiens", icon: "🧑" },
          { year: 1859, label: "Origine delle specie", icon: "📗" }
        ]
      },
      caption: "Per quasi 3 miliardi di anni sulla Terra ci furono solo organismi unicellulari. La scala logaritmica \"allarga\" gli ultimi milioni di anni."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? I fringuelli evolvono davanti ai nostri occhi",
      html: `<p>Dal 1973 i biologi <b>Peter e Rosemary Grant</b> misurano ogni anno i becchi dei fringuelli dell'isola Daphne Major, alle Galápagos. Dopo la grande siccità del <b>1977</b> rimasero quasi solo semi grossi e duri: sopravvissero soprattutto i fringuelli con il becco più robusto, e la generazione successiva aveva becchi in media più grandi di circa il 4–5%. Darwin pensava che l'evoluzione fosse troppo lenta per essere vista: i Grant l'hanno misurata in un solo anno!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le balene avevano le zampe",
      html: `<p>Circa 50 milioni di anni fa in Pakistan viveva il <i>Pakicetus</i>, un mammifero grande come un lupo che camminava a terra e cacciava vicino all'acqua. I fossili mostrano una serie di forme di transizione verso animali sempre più acquatici, fino alle balene di oggi, che conservano ancora piccole ossa del bacino. Le balene sono parenti stretti… degli ippopotami!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'evoluzione",
      intro: "La selezione naturale è un'idea semplice ma difficile da \"vedere\", perché agisce in tempi lunghissimi. Prova così.",
      tabs: [
        {
          label: "🦋 Simulazione delle falene",
          html: `<p>Immagina 10 falene, 5 chiare e 5 scure, su un tronco annerito dal fumo. Un uccello ne mangia 4 chiare (le vede subito) e 1 scura. Le 5 sopravvissute (1 chiara e 4 scure) fanno 2 figli ciascuna, uguali a sé. Nella nuova generazione: 2 chiare e 8 scure. Ripeti: in poche generazioni le scure sono quasi tutte! Puoi fare questo gioco in classe con coriandoli bianchi e neri su un foglio bianco o di giornale.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#e7e5e4"/>
<rect x="20" y="20" width="160" height="190" fill="#44403c"/>
<rect x="220" y="20" width="160" height="190" fill="#44403c"/>
<rect x="420" y="20" width="160" height="190" fill="#44403c"/>
<text x="100" y="232" font-size="14" text-anchor="middle" fill="#1c1917">1ª gen: 50% scure</text>
<text x="300" y="232" font-size="14" text-anchor="middle" fill="#1c1917">2ª gen: 80% scure</text>
<text x="500" y="232" font-size="14" text-anchor="middle" fill="#1c1917">3ª gen: ~95% scure</text>
<g fill="#fafaf9"><ellipse cx="50" cy="50" rx="14" ry="8"/><ellipse cx="130" cy="70" rx="14" ry="8"/><ellipse cx="70" cy="130" rx="14" ry="8"/><ellipse cx="150" cy="160" rx="14" ry="8"/><ellipse cx="60" cy="190" rx="14" ry="8"/></g>
<g fill="#292524" stroke="#57534e"><ellipse cx="100" cy="40" rx="14" ry="8"/><ellipse cx="45" cy="95" rx="14" ry="8"/><ellipse cx="120" cy="115" rx="14" ry="8"/><ellipse cx="100" cy="170" rx="14" ry="8"/><ellipse cx="150" cy="200" rx="14" ry="8"/></g>
<g fill="#fafaf9"><ellipse cx="260" cy="60" rx="14" ry="8"/><ellipse cx="340" cy="170" rx="14" ry="8"/></g>
<g fill="#292524" stroke="#57534e"><ellipse cx="300" cy="40" rx="14" ry="8"/><ellipse cx="350" cy="80" rx="14" ry="8"/><ellipse cx="250" cy="110" rx="14" ry="8"/><ellipse cx="310" cy="120" rx="14" ry="8"/><ellipse cx="260" cy="170" rx="14" ry="8"/><ellipse cx="300" cy="200" rx="14" ry="8"/><ellipse cx="350" cy="130" rx="14" ry="8"/><ellipse cx="240" cy="200" rx="14" ry="8"/></g>
<g fill="#fafaf9"><ellipse cx="540" cy="190" rx="14" ry="8"/></g>
<g fill="#292524" stroke="#57534e"><ellipse cx="450" cy="40" rx="14" ry="8"/><ellipse cx="510" cy="50" rx="14" ry="8"/><ellipse cx="560" cy="80" rx="14" ry="8"/><ellipse cx="460" cy="100" rx="14" ry="8"/><ellipse cx="520" cy="120" rx="14" ry="8"/><ellipse cx="450" cy="160" rx="14" ry="8"/><ellipse cx="500" cy="180" rx="14" ry="8"/><ellipse cx="560" cy="150" rx="14" ry="8"/><ellipse cx="480" cy="200" rx="14" ry="8"/></g>
</svg>`
        },
        {
          label: "🌳 Un albero, non una scala",
          html: `<p>Molti immaginano l'evoluzione come una <b>scala</b> che sale dalla scimmia all'uomo. È sbagliato! Darwin disegnò nel suo taccuino (1837) un <b>albero ramificato</b> con scritto sopra <i>\"I think\"</i> (\"io penso\"). Ogni ramo è una specie; i rami si dividono quando le popolazioni si separano; le punte sono le specie di oggi, tutte \"evolute\" allo stesso modo; i rami interrotti sono le specie estinte. Uomo e scimpanzé sono due rametti vicini, con un nodo comune in basso.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<path d="M300 250 L300 200 L170 140 L110 60 M170 140 L210 70 M300 200 L430 130 L380 60 M430 130 L490 90 L460 30 M490 90 L540 35 M300 200 L300 150" stroke="#166534" stroke-width="6" fill="none" stroke-linecap="round"/>
<circle cx="300" cy="150" r="7" fill="#dc2626"/>
<text x="300" y="138" font-size="13" text-anchor="middle" fill="#991b1b">estinto</text>
<text x="110" y="50" font-size="15" text-anchor="middle" fill="#14532d">🐟 pesci</text>
<text x="210" y="60" font-size="15" text-anchor="middle" fill="#14532d">🐸 anfibi</text>
<text x="380" y="50" font-size="15" text-anchor="middle" fill="#14532d">🐦 uccelli</text>
<text x="460" y="22" font-size="15" text-anchor="middle" fill="#14532d">🐒 scimpanzé</text>
<text x="550" y="25" font-size="15" text-anchor="middle" fill="#14532d">🧑 uomo</text>
<circle cx="490" cy="90" r="7" fill="#f59e0b"/>
<text x="560" y="105" font-size="13" text-anchor="middle" fill="#92400e">antenato comune</text>
<text x="300" y="258" font-size="13" text-anchor="middle" fill="#14532d">passato</text>
</svg>`
        },
        {
          label: "🌍 Il viaggio di Homo sapiens",
          html: `<p>Tutti gli esseri umani di oggi discendono da popolazioni africane. Gira il globo e segui (in modo semplificato) le tappe della diffusione di <i>Homo sapiens</i>: dall'Africa al Medio Oriente, poi in Asia, in Australia (circa 50.000–65.000 anni fa), in Europa (circa 45.000 anni fa) e infine, attraverso lo stretto di Bering, nelle Americhe (almeno 15.000–20.000 anni fa).</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.85, lon: -8.87, label: "Jebel Irhoud (~300.000 anni fa)", color: "#ef4444" },
              { lat: 9.0, lon: 38.7, label: "Africa orientale", color: "#ef4444" },
              { lat: 32.0, lon: 35.0, label: "Medio Oriente", color: "#f97316" },
              { lat: 45.0, lon: 10.0, label: "Europa (~45.000)", color: "#f97316" },
              { lat: 20.0, lon: 78.0, label: "India", color: "#f97316" },
              { lat: -25.0, lon: 134.0, label: "Australia (~50.000–65.000)", color: "#f97316" },
              { lat: 65.0, lon: -168.0, label: "Stretto di Bering", color: "#f97316" },
              { lat: -10.0, lon: -60.0, label: "America del Sud (~15.000)", color: "#f97316" }
            ],
            routes: [
              { points: [0, 1, 2, 3], color: "#2563eb" },
              { points: [2, 4, 5], color: "#16a34a" },
              { points: [4, 6, 7], color: "#a855f7" }
            ]
          }
        },
        {
          label: "📞 Il telefono senza fili",
          html: `<p>Ricordi il gioco del <b>telefono senza fili</b>? Una frase passa di bocca in bocca e ogni volta cambia un pochino. Dopo 20 passaggi è irriconoscibile. Il DNA si copia da genitore a figlio quasi perfettamente, ma ogni tanto c'è un piccolo \"errore\" (una <b>mutazione</b>). Differenza fondamentale: nel gioco gli errori si accumulano a caso, nell'evoluzione l'ambiente fa da \"arbitro\" e conserva le versioni che funzionano meglio. Con milioni di generazioni, due rami della stessa famiglia possono diventare specie diverse.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'evoluzione: tocca i nodi e scopri il perché",
      nodes: [
        { id: "fissismo", label: "Fissismo", x: 12, y: 8, color: "#94a3b8", html: "L'idea che le specie non cambino.", why: "Era l'interpretazione tradizionale, sostenuta anche da Linneo; mancavano prove dell'età della Terra e i fossili erano poco studiati." },
        { id: "fossili", label: "Fossili ed estinzioni", x: 45, y: 8, color: "#92400e", html: "Resti di organismi del passato, molti estinti.", why: "<b>Cuvier</b> (inizio Ottocento) dimostrò confrontando le ossa che mammut e altri animali erano specie scomparse; <b>Lyell</b> (1830) mostrò che la Terra ha milioni di anni: c'era il tempo per i cambiamenti." },
        { id: "lamarck", label: "Lamarck", x: 80, y: 8, color: "#f97316", html: "Prima teoria evolutiva (1809): uso e non uso, caratteri acquisiti.", why: "Lamarck studiava gli invertebrati e notò serie di forme graduali. La sua spiegazione del meccanismo era sbagliata, ma l'idea che le specie si trasformino era giusta." },
        { id: "variabilita", label: "Variabilità", x: 20, y: 40, color: "#a855f7", html: "Gli individui di una specie sono tutti diversi.", why: "Darwin non sapeva da dove venisse. Oggi lo sappiamo: dalle <b>mutazioni</b> del DNA e dal rimescolamento dei geni nella riproduzione sessuata (meiosi e fecondazione)." },
        { id: "selezione", label: "Selezione naturale", x: 50, y: 40, color: "#16a34a", html: "Sopravvivono e si riproducono di più gli individui più adatti all'ambiente.", why: "<b>Darwin</b> (e indipendentemente <b>Wallace</b>) la ricavò dalle osservazioni del viaggio sul Beagle, dalla selezione artificiale degli allevatori e dalle idee di Malthus sulla crescita delle popolazioni." },
        { id: "ambiente", label: "Ambiente", x: 82, y: 40, color: "#0ea5e9", html: "Clima, cibo, predatori, malattie: decidono chi è \"adatto\".", why: "L'adattamento è sempre relativo: la falena scura è avvantaggiata su un tronco annerito, svantaggiata su uno chiaro." },
        { id: "speciazione", label: "Speciazione", x: 30, y: 72, color: "#db2777", html: "La nascita di nuove specie da popolazioni separate.", why: "Se due popolazioni restano separate (un'isola, una montagna) accumulano differenze finché non possono più riprodursi tra loro: è ciò che suggerivano le specie diverse di ogni isola delle Galápagos." },
        { id: "prove", label: "Prove moderne", x: 70, y: 72, color: "#2563eb", html: "Organi omologhi, vestigiali, embriologia, DNA.", why: "La <b>sintesi moderna</b> (anni '30–'40 del Novecento) unì Darwin e la genetica di Mendel; dal 1953, con il DNA, si possono misurare le parentele tra specie confrontandone le sequenze." },
        { id: "uomo", label: "Evoluzione umana", x: 50, y: 94, color: "#f59e0b", html: "Dagli australopiteci a Homo sapiens, comparso in Africa 300.000 anni fa.", why: "Ricostruita grazie ai fossili (Lucy, 1974; Jebel Irhoud, 2017) e al DNA antico (Pääbo, Nobel 2022). Darwin lo aveva intuito nel 1871 nel libro <i>L'origine dell'uomo</i>." }
      ],
      edges: [
        ["fossili", "fissismo", "mettono in crisi il"],
        ["fossili", "lamarck", "ispirano"],
        ["variabilita", "selezione", "è la materia prima della"],
        ["ambiente", "selezione", "guida la"],
        ["selezione", "speciazione", "porta alla"],
        ["prove", "selezione", "confermano la"],
        ["speciazione", "uomo", "spiega anche l'"],
        ["prove", "uomo", "ricostruiscono l'"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: prove ed evoluzione umana",
      questions: [
        { type: "mc", q: "Il braccio umano e l'ala del pipistrello sono organi…", options: ["analoghi", "omologhi", "vestigiali"], answer: 1, explain: "Hanno le stesse ossa: derivano da un antenato comune." },
        { type: "tf", q: "L'uomo discende direttamente dallo scimpanzé.", answer: false, explain: "Uomo e scimpanzé hanno un antenato comune vissuto 6–7 milioni di anni fa." },
        { type: "mc", q: "In quale continente è comparso Homo sapiens?", options: ["Europa", "Asia", "Africa"], answer: 2, explain: "In Africa, circa 300.000 anni fa." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Lamarck</b> (1809): uso e non uso, ereditarietà dei caratteri acquisiti (sbagliata).</li>
<li><b>Darwin</b> (1859, <i>L'origine delle specie</i>): <b>variabilità</b>, ereditarietà, sovrapproduzione, lotta per l'esistenza, <b>selezione naturale</b> dei più adatti.</li>
<li>Le variazioni nascono a caso (mutazioni); l'<b>ambiente</b> seleziona.</li>
<li>Prove: fossili, organi omologhi e vestigiali, embriologia, DNA.</li>
<li>Homo sapiens è nato in Africa circa 300.000 anni fa; uomo e scimpanzé hanno un antenato comune.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Evoluzione", d: "Il cambiamento delle specie viventi nel corso delle generazioni." },
    { t: "Fissismo", d: "Teoria secondo cui le specie non cambiano nel tempo." },
    { t: "Selezione naturale", d: "Processo per cui gli individui più adatti all'ambiente sopravvivono e si riproducono di più." },
    { t: "Adattamento", d: "Carattere che aumenta la probabilità di sopravvivere e riprodursi in un ambiente." },
    { t: "Specie", d: "Gruppo di individui che possono riprodursi tra loro e avere figli fertili." },
    { t: "Speciazione", d: "Formazione di una nuova specie." },
    { t: "Fossile", d: "Resto o traccia di un organismo del passato conservato nelle rocce." },
    { t: "Organi omologhi", d: "Organi con la stessa struttura e origine, ma funzioni diverse." },
    { t: "Organi analoghi", d: "Organi con la stessa funzione ma origine e struttura diverse." },
    { t: "Organo vestigiale", d: "Resto di un organo che negli antenati aveva una funzione." },
    { t: "Mutazione", d: "Cambiamento casuale del DNA, fonte di nuova variabilità." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In che anno fu pubblicato \"L'origine delle specie\"?", options: ["1809", "1859", "1900", "1953"], answer: 1, explain: "Il 24 novembre 1859." },
      { type: "text", q: "Come si chiamava la nave su cui viaggiò Darwin?", answer: ["beagle", "hms beagle", "il beagle"], explain: "L'HMS Beagle (1831–1836)." },
      { type: "mc", q: "Secondo Darwin, chi sopravvive e si riproduce di più?", options: ["Sempre il più forte", "Chi è più adatto a quell'ambiente", "Chi si sforza di più"], answer: 1, explain: "L'adattamento dipende dall'ambiente." },
      { type: "tf", q: "Secondo Lamarck i caratteri acquisiti durante la vita si trasmettono ai figli.", answer: true, explain: "Era la sua teoria, poi smentita." },
      { type: "mc", q: "Perché nell'Inghilterra industriale aumentarono le falene scure?", options: ["Il fumo le colorava", "Sui tronchi anneriti erano meno visibili agli uccelli", "Mangiavano carbone"], answer: 1, explain: "Le scure erano mimetizzate e sopravvivevano di più." },
      { type: "mc", q: "Il coccige umano è un esempio di organo…", options: ["omologo", "analogo", "vestigiale"], answer: 2, explain: "È il resto della coda dei nostri antenati." },
      { type: "mc", q: "Ala di uccello e ala di farfalla sono organi…", options: ["analoghi", "omologhi", "vestigiali"], answer: 0, explain: "Stessa funzione, origine diversa." },
      { type: "text", q: "Quale naturalista arrivò alla selezione naturale indipendentemente da Darwin?", answer: ["wallace", "alfred russel wallace", "alfred wallace"], explain: "Alfred Russel Wallace; presentazione congiunta nel 1858." },
      { type: "order", q: "Metti in ordine di comparsa.", items: ["Australopiteci (Lucy)", "Homo habilis", "Homo erectus", "Homo sapiens"], explain: "Circa 3,2 milioni, 2,4 milioni, 1,9 milioni e 300.000 anni fa." },
      { type: "tf", q: "Gli antibiotici usati male favoriscono i batteri resistenti.", answer: true, explain: "Sopravvivono e si moltiplicano solo i batteri resistenti: selezione naturale." },
      { type: "mc", q: "Da dove viene, secondo la genetica moderna, la variabilità tra individui?", options: ["Dallo sforzo fatto in vita", "Dalle mutazioni del DNA e dalla riproduzione sessuata", "Dal clima"], answer: 1, explain: "Mutazioni casuali e rimescolamento dei geni." },
      { type: "num", q: "Lucy visse circa 3,2 milioni di anni fa. Homo sapiens comparve circa 300.000 anni fa. Quante centinaia di migliaia di anni separano le due date?", answer: 29, explain: "3.200.000 − 300.000 = 2.900.000 anni = 29 centinaia di migliaia." }
    ]
  }
});

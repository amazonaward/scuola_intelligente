TOPIC('it', {
  id: "m2-tec-reti",
  title: "Le reti e Internet",
  intro: "Quando invii un messaggio a un amico in Australia, impiega meno di un secondo ad arrivare, attraversando cavi sotto l'oceano, router e antenne. Come fa? In questa lezione scopriamo che cos'è una <b>rete</b>, come funziona <b>Internet</b> e come viaggiano i <b>dati</b>, spezzati in tanti piccoli <b>pacchetti</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Che cos'è una rete",
      html: `<p>Una <b>rete informatica</b> è un insieme di dispositivi (computer, smartphone, stampanti, console…) <b>collegati</b> tra loro per scambiarsi dati e condividere risorse.</p>
<p>Le reti si classificano per <b>estensione</b>:</p>
<ul>
<li><b>PAN</b> (Personal Area Network): pochi metri, per esempio cuffie Bluetooth e telefono.</li>
<li><b>LAN</b> (Local Area Network): una casa, una scuola, un ufficio. Il Wi-Fi di casa è una LAN senza fili (WLAN).</li>
<li><b>MAN</b> (Metropolitan Area Network): una città.</li>
<li><b>WAN</b> (Wide Area Network): regioni, Paesi, continenti.</li>
</ul>
<p><b>Internet</b> è la più grande WAN del mondo: è una <b>rete di reti</b>, cioè milioni di reti diverse collegate tra loro con regole comuni.</p>`
    },
    {
      type: "text",
      title: "Chi c'è in una rete",
      html: `<ul>
<li><b>Client</b>: il dispositivo che <b>chiede</b> un servizio (il tuo telefono che apre un video).</li>
<li><b>Server</b>: il computer che <b>fornisce</b> il servizio (il computer che conserva il video e lo invia). Molti server sono raccolti in grandi <b>data center</b>.</li>
<li><b>Router</b>: lo «smistatore» che decide la strada dei dati tra una rete e l'altra. Quello di casa collega la tua LAN a Internet.</li>
<li><b>Switch</b>: collega tra loro i dispositivi di una stessa LAN con i cavi.</li>
<li><b>Access point</b>: l'antenna del Wi-Fi.</li>
</ul>
<p>I <b>mezzi di trasmissione</b> possono essere: cavi di <b>rame</b> (segnali elettrici), <b>fibra ottica</b> (impulsi di <b>luce</b> in un filo di vetro sottile come un capello) e <b>onde radio</b> (Wi-Fi, rete mobile 4G/5G, satelliti).</p>`
    },
    {
      type: "svg",
      title: "Dalla tua casa al server",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<rect x="15" y="40" width="190" height="220" rx="16" fill="#e0f2fe" stroke="#0369a1" stroke-width="3" stroke-dasharray="8 5"/>
<text x="110" y="65" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">LAN di casa</text>
<rect x="35" y="90" width="50" height="80" rx="8" fill="#1e293b"/>
<rect x="41" y="98" width="38" height="58" fill="#38bdf8"/>
<text x="60" y="190" font-size="14" fill="#0f172a" text-anchor="middle">client</text>
<rect x="35" y="205" width="70" height="40" rx="4" fill="#475569"/>
<rect x="42" y="211" width="56" height="26" fill="#a5f3fc"/>
<rect x="125" y="140" width="65" height="35" rx="8" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<text x="157" y="163" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">router</text>
<path d="M85 130 Q 110 130 125 150" fill="none" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="5 4"/>
<line x1="105" y1="225" x2="125" y2="170" stroke="#0ea5e9" stroke-width="3"/>
<ellipse cx="330" cy="150" rx="105" ry="70" fill="#c7d2fe" stroke="#4338ca" stroke-width="3"/>
<text x="330" y="140" font-size="22" font-weight="bold" fill="#3730a3" text-anchor="middle">INTERNET</text>
<text x="330" y="165" font-size="14" fill="#3730a3" text-anchor="middle">rete di reti</text>
<circle cx="270" cy="110" r="8" fill="#f97316"/>
<circle cx="390" cy="115" r="8" fill="#f97316"/>
<circle cx="300" cy="195" r="8" fill="#f97316"/>
<circle cx="380" cy="190" r="8" fill="#f97316"/>
<line x1="190" y1="157" x2="228" y2="155" stroke="#dc2626" stroke-width="4"/>
<line x1="433" y1="150" x2="470" y2="150" stroke="#dc2626" stroke-width="4"/>
<rect x="470" y="80" width="110" height="160" rx="10" fill="#334155"/>
<rect x="482" y="95" width="86" height="25" rx="4" fill="#22c55e"/>
<rect x="482" y="130" width="86" height="25" rx="4" fill="#22c55e"/>
<rect x="482" y="165" width="86" height="25" rx="4" fill="#22c55e"/>
<text x="525" y="222" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">server</text>
<text x="300" y="275" font-size="15" fill="#1f2937" text-anchor="middle">i pallini arancioni sono i router che smistano i pacchetti</text>
</svg>`,
      caption: "Il client chiede, i router smistano, il server risponde. Tra casa tua e il server ci possono essere anche 15–20 router."
    },
    {
      type: "text",
      title: "Indirizzi IP e DNS: come si trova la strada",
      html: `<p>Per spedire una lettera serve un indirizzo. In Internet ogni dispositivo collegato ha un <b>indirizzo IP</b> (Internet Protocol).</p>
<ul>
<li><b>IPv4</b>: 4 numeri da <b>0 a 255</b> separati da punti, per esempio <code>192.168.1.10</code>. Sono 32 bit in tutto, circa <b>4,3 miliardi</b> di indirizzi: troppo pochi per tutti i dispositivi del mondo!</li>
<li><b>IPv6</b>: 128 bit, scritti in esadecimale (<code>2001:db8::1</code>). Gli indirizzi possibili sono un numero con 39 cifre: praticamente infiniti.</li>
</ul>
<p>Ma noi non scriviamo numeri, scriviamo nomi come <code>www.wikipedia.org</code>. Il <b>DNS</b> (Domain Name System) è la «rubrica» di Internet: traduce il nome nell'indirizzo IP del server. Funziona come la rubrica del telefono: cerchi «Nonna» e il telefono compone il numero.</p>`
    },
    {
      type: "text",
      title: "I pacchetti e il protocollo TCP/IP",
      html: `<p>I dati non viaggiano in un pezzo unico: vengono divisi in <b>pacchetti</b> (di solito al massimo circa 1500 byte ciascuno). Ogni pacchetto contiene:</p>
<ul>
<li>l'<b>indirizzo IP del mittente</b> e quello del <b>destinatario</b>;</li>
<li>un <b>numero d'ordine</b> (per rimettere insieme i pezzi);</li>
<li>un pezzetto dei <b>dati</b> veri e propri.</li>
</ul>
<p>I router mandano ogni pacchetto sulla strada <b>più libera in quel momento</b>: pacchetti dello stesso messaggio possono fare percorsi diversi e arrivare in disordine. Questo metodo si chiama <b>commutazione di pacchetto</b>.</p>
<p>Le regole che tutti rispettano si chiamano <b>protocolli</b>. I più importanti sono <b>IP</b> (porta ogni pacchetto all'indirizzo giusto) e <b>TCP</b> (controlla che arrivino tutti, li rimette in ordine e fa rispedire quelli persi). Insieme formano il <b>TCP/IP</b>, inventato da <b>Vinton Cerf</b> e <b>Robert Kahn</b> nel 1974.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: reti e indirizzi",
      questions: [
        { type: "mc", q: "La rete Wi-Fi di casa tua è una…", options: ["WAN", "LAN", "MAN"], answer: 1, explain: "Copre un'area piccola (la casa): è una rete locale, LAN (senza fili: WLAN)." },
        { type: "tf", q: "Il DNS traduce i nomi dei siti in indirizzi IP.", answer: true, explain: "È la «rubrica telefonica» di Internet." },
        { type: "mc", q: "Quale di questi è un indirizzo IPv4 valido?", options: ["192.168.1.300", "10.0.0.25", "256.1.1.1"], answer: 1, explain: "Ogni numero di un IPv4 va da 0 a 255: 300 e 256 sono troppo grandi." }
      ]
    },
    {
      type: "3d",
      title: "Le autostrade sotto il mare",
      scene: "globe",
      options: {
        points: [
          { lat: 45.46, lon: 9.19, label: "Milano", color: "#ef4444" },
          { lat: 43.3, lon: 5.37, label: "Marsiglia", color: "#f97316" },
          { lat: 31.2, lon: 29.92, label: "Alessandria d'Egitto", color: "#f97316" },
          { lat: 19.07, lon: 72.88, label: "Mumbai", color: "#f97316" },
          { lat: 1.35, lon: 103.82, label: "Singapore", color: "#f97316" },
          { lat: 51.5, lon: -0.13, label: "Londra", color: "#2563eb" },
          { lat: 40.71, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: -33.87, lon: 151.21, label: "Sydney", color: "#16a34a" }
        ],
        routes: [
          { points: [0, 1, 2, 3, 4, 7], color: "#f97316" },
          { points: [0, 5, 6], color: "#2563eb" }
        ]
      },
      caption: "Oltre il 95% dei dati tra i continenti viaggia nei cavi sottomarini in fibra ottica, non nei satelliti. Ruota il globo e segui due percorsi possibili dei tuoi pacchetti."
    },
    {
      type: "example",
      title: "Esempio pratico: che cosa succede quando apri un sito",
      html: `<ol>
<li>Scrivi <code>www.esempio.it</code> nel browser.</li>
<li>Il computer chiede al <b>DNS</b>: «Qual è l'IP di www.esempio.it?» e riceve, per esempio, <code>93.184.216.34</code>.</li>
<li>Il browser invia al server una <b>richiesta</b> (protocollo <b>HTTP</b>, o <b>HTTPS</b> se cifrato: il lucchetto 🔒).</li>
<li>La richiesta, divisa in pacchetti, passa dal tuo <b>router</b>, poi dai router del tuo fornitore di Internet e di altre reti.</li>
<li>Il <b>server</b> risponde inviando la pagina, anch'essa in pacchetti.</li>
<li><b>TCP</b> rimette in ordine i pacchetti; il browser <b>disegna</b> la pagina. Tutto in qualche decimo di secondo!</li>
</ol>`
    },
    {
      type: "example",
      title: "Esempio pratico: quanto tempo per scaricare?",
      html: `<p>La velocità di una connessione si misura in <b>bit al secondo</b> (Mbit/s = milioni di bit al secondo). Le dimensioni dei file invece si misurano in <b>byte</b>. Attenzione: <b>1 byte = 8 bit</b>!</p>
<p>Vuoi scaricare un gioco da <b>500 MB</b> (megabyte) con una connessione da <b>100 Mbit/s</b>:</p>
<ol>
<li>Trasformo in bit: 500 × 8 = <b>4000 Mbit</b>.</li>
<li>Divido per la velocità: 4000 ÷ 100 = <b>40 secondi</b> (in condizioni ideali).</li>
</ol>
<p>Con una vecchia linea ADSL da 8 Mbit/s servirebbero 4000 ÷ 8 = 500 secondi, più di 8 minuti. Con la fibra da 1 Gbit/s (1000 Mbit/s) bastano 4 secondi!</p>`
    },
    {
      type: "widget",
      title: "Abbina i termini",
      widget: "match",
      options: { pairs: [
        ["Router", "Smista i pacchetti tra le reti"],
        ["Server", "Fornisce servizi e contenuti"],
        ["DNS", "Traduce i nomi in indirizzi IP"],
        ["Pacchetto", "Pezzetto di dati con mittente e destinatario"],
        ["Fibra ottica", "Trasmette dati con impulsi di luce"],
        ["TCP", "Controlla che tutti i pacchetti arrivino in ordine"]
      ] },
      caption: "Collega ogni parola alla sua definizione."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il primo messaggio fu «LO»",
      html: `<p>Il <b>29 ottobre 1969</b> due computer della rete <b>ARPANET</b>, l'antenata di Internet, uno all'università UCLA di Los Angeles e uno allo Stanford Research Institute, provarono a scambiarsi il primo messaggio: la parola <b>LOGIN</b>. Dopo le prime due lettere, «L» e «O», il sistema si bloccò!</p>
<p>Così il primo messaggio della storia di Internet fu «<b>LO</b>», che in inglese arcaico significa… «ecco!». Un'ora dopo il collegamento funzionò per intero.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Internet e il Web non sono la stessa cosa",
      html: `<p><b>Internet</b> è la rete fisica (cavi, router, protocolli). Il <b>World Wide Web</b> è solo <b>uno</b> dei servizi che viaggiano su Internet, come la posta elettronica o le videochiamate.</p>
<p>Il Web fu inventato al <b>CERN</b> di Ginevra dall'inglese <b>Tim Berners-Lee</b>: lo propose nel <b>1989</b> e il primo sito andò online nel 1991. Il 30 aprile 1993 il CERN lo rese libero e gratuito per tutti.</p>
<p>E l'Italia? Il <b>30 aprile 1986</b> il centro CNUCE di <b>Pisa</b> fu il primo in Italia a collegarsi a Internet, via satellite, con gli Stati Uniti.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Rete = dispositivi collegati. Per estensione: PAN, LAN, MAN, WAN. Internet = rete di reti.</li>
<li><b>Client</b> chiede, <b>server</b> risponde, <b>router</b> smista.</li>
<li>Ogni dispositivo ha un <b>indirizzo IP</b>; il <b>DNS</b> traduce i nomi in IP.</li>
<li>I dati viaggiano in <b>pacchetti</b> che possono seguire strade diverse; <b>TCP/IP</b> li guida e li riordina.</li>
<li>Velocità in bit/s, file in byte: <b>1 byte = 8 bit</b>.</li>
<li>Internet ≠ Web: il Web è un servizio di Internet.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire Internet",
      intro: "Internet è invisibile, ma si può immaginare in tanti modi. Scegli quello che ti aiuta di più.",
      tabs: [
        {
          label: "✉️ Le cartoline numerate",
          html: `<p>Devi spedire a un amico un libro intero, ma la posta accetta solo <b>cartoline</b>. Allora:</p>
<ol>
<li>copi il libro su 300 cartoline e le <b>numeri</b> (1/300, 2/300…);</li>
<li>su ognuna scrivi <b>mittente</b> e <b>destinatario</b>;</li>
<li>le imbuchi: alcune passano da Bologna, altre da Firenze, a seconda dei camion liberi (i <b>router</b>);</li>
<li>il tuo amico le riceve in disordine, le <b>riordina</b> con i numeri e, se ne manca una, ti chiede di rispedirla (è il lavoro di <b>TCP</b>).</li>
</ol>
<p>Questa è proprio la <b>commutazione di pacchetto</b>!</p>`
        },
        {
          label: "🛣️ La rete stradale",
          html: `<p>Pensa a Internet come alla rete stradale:</p>
<ul>
<li>i <b>cavi</b> sono le strade (la fibra è l'autostrada, il vecchio doppino di rame una stradina);</li>
<li>i <b>router</b> sono le rotonde con i cartelli;</li>
<li>gli <b>indirizzi IP</b> sono gli indirizzi delle case;</li>
<li>il <b>DNS</b> è il navigatore che trasforma «casa della nonna» in via e numero civico;</li>
<li>i <b>pacchetti</b> sono le automobili: se c'è traffico su una strada, il navigatore ne sceglie un'altra.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#dcfce7"/>
<path d="M40 130 L200 60 L400 60 L560 130" fill="none" stroke="#475569" stroke-width="22"/>
<path d="M40 130 L200 200 L400 200 L560 130" fill="none" stroke="#475569" stroke-width="22"/>
<path d="M200 60 L400 200" fill="none" stroke="#64748b" stroke-width="14"/>
<circle cx="200" cy="60" r="22" fill="#f97316"/>
<circle cx="400" cy="60" r="22" fill="#f97316"/>
<circle cx="200" cy="200" r="22" fill="#f97316"/>
<circle cx="400" cy="200" r="22" fill="#f97316"/>
<rect x="10" y="105" width="50" height="50" fill="#2563eb"/>
<text x="35" y="137" font-size="20" text-anchor="middle">🏠</text>
<rect x="540" y="105" width="50" height="50" fill="#334155"/>
<text x="565" y="137" font-size="20" text-anchor="middle">🖥️</text>
<text x="280" y="55" font-size="22" text-anchor="middle">🚗</text>
<text x="300" y="215" font-size="22" text-anchor="middle">🚙</text>
<text x="300" y="140" font-size="22" text-anchor="middle">🚕</text>
<text x="300" y="250" font-size="15" fill="#14532d" text-anchor="middle">rotonde arancioni = router · auto = pacchetti che scelgono strade diverse</text>
</svg>`
        },
        {
          label: "🔦 La fibra ottica",
          html: `<p>Prova questo esperimento (con un adulto): in una stanza buia fai uscire un getto d'acqua da una bottiglia bucata e illumina il buco dall'altra parte con una torcia. La luce <b>segue la curva</b> dell'acqua invece di uscire dritta!</p>
<p>È la <b>riflessione totale</b>: la luce rimbalza sulle pareti interne e resta «intrappolata». Nella fibra ottica succede lo stesso dentro un filo di vetro purissimo: gli impulsi di luce (acceso = 1, spento = 0) viaggiano per decine di chilometri. L'esperimento fu mostrato già nel 1842 dal fisico svizzero <b>Daniel Colladon</b>.</p>`
        },
        {
          label: "⏳ Linea del tempo",
          html: `<p>Da una rete di pochi computer a miliardi di dispositivi.</p>`,
          widget: "timeline",
          options: { unit: "anni", events: [
            { year: 1969, label: "ARPANET: primo messaggio «LO»", icon: "📡" },
            { year: 1971, label: "Prima e-mail (Ray Tomlinson, simbolo @)", icon: "📧" },
            { year: 1974, label: "Cerf e Kahn descrivono il TCP/IP", icon: "📜" },
            { year: 1986, label: "Pisa: l'Italia si collega a Internet", icon: "🇮🇹" },
            { year: 1991, label: "Tim Berners-Lee mette online il primo sito web", icon: "🌐" },
            { year: 1997, label: "Nasce lo standard Wi-Fi (IEEE 802.11)", icon: "📶" },
            { year: 2007, label: "Smartphone con schermo touch: Internet in tasca", icon: "📱" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di Internet",
      nodes: [
        { id: "rete", label: "Rete informatica", x: 50, y: 7, color: "#7c3aed", html: "Dispositivi collegati per scambiare dati e risorse.", why: "Le prime reti nacquero negli anni '60 per condividere i costosissimi computer delle università. L'idea di una rete senza un centro, che continua a funzionare anche se un nodo si guasta, fu studiata da Paul Baran (USA) e Donald Davies (Regno Unito)." },
        { id: "internet", label: "Internet", x: 50, y: 27, color: "#2563eb", html: "La rete mondiale formata da milioni di reti collegate.", why: "Deriva da ARPANET (1969), progetto finanziato dal Dipartimento della Difesa americano. Nel 1983 ARPANET adottò il TCP/IP: è considerata la data di nascita dell'Internet moderna." },
        { id: "clientserver", label: "Client e server", x: 15, y: 45, color: "#0ea5e9", html: "Il client chiede, il server risponde.", why: "Dividere i compiti permette di tenere i dati in un solo posto (il server) e di usarli da milioni di dispositivi diversi." },
        { id: "ip", label: "Indirizzo IP", x: 40, y: 50, color: "#f59e0b", html: "Numero che identifica ogni dispositivo collegato.", why: "IPv4 (1981) usa 32 bit: 2³² ≈ 4,3 miliardi di indirizzi. Con l'esplosione di smartphone e oggetti connessi non bastavano più: nacque IPv6, con 128 bit." },
        { id: "dns", label: "DNS", x: 40, y: 72, color: "#eab308", html: "Traduce i nomi dei siti in indirizzi IP.", why: "Inventato da Paul Mockapetris nel 1983: prima esisteva un unico file con tutti i nomi, aggiornato a mano, che non poteva più bastare." },
        { id: "pacchetti", label: "Pacchetti", x: 65, y: 50, color: "#ef4444", html: "Pezzetti di dati con mittente, destinatario e numero d'ordine.", why: "Dividere i dati in pacchetti permette di condividere le linee tra molti utenti e di aggirare i guasti: se una strada è interrotta, i pacchetti ne prendono un'altra." },
        { id: "tcpip", label: "TCP/IP", x: 65, y: 72, color: "#16a34a", html: "Le regole (protocolli) comuni a tutta Internet.", why: "Scritto da Vinton Cerf e Robert Kahn nel 1974 per far parlare tra loro reti diverse. Per questo sono chiamati «i padri di Internet»." },
        { id: "mezzi", label: "Mezzi fisici", x: 88, y: 45, color: "#64748b", html: "Rame, fibra ottica, onde radio, satelliti.", why: "La fibra ottica sfrutta la riflessione totale della luce; il primo cavo telegrafico transatlantico fu posato già nel 1858. Oggi oltre 500 cavi sottomarini collegano i continenti." },
        { id: "web", label: "World Wide Web", x: 50, y: 92, color: "#a855f7", html: "Il servizio delle pagine collegate da link, sopra Internet.", why: "Inventato da Tim Berners-Lee al CERN (1989–1991) per far condividere documenti agli scienziati. Usa il protocollo HTTP e il linguaggio HTML." }
      ],
      edges: [
        ["rete", "internet", "la più grande è"],
        ["internet", "clientserver", "modello"],
        ["internet", "ip", "identifica con"],
        ["ip", "dns", "trovato tramite"],
        ["internet", "pacchetti", "trasporta"],
        ["pacchetti", "tcpip", "regolati da"],
        ["internet", "mezzi", "viaggia su"],
        ["tcpip", "web", "sopra funziona"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: pacchetti e velocità",
      questions: [
        { type: "num", q: "Quanti bit ci sono in 1 byte?", answer: 8, explain: "1 byte = 8 bit." },
        { type: "tf", q: "I pacchetti di uno stesso messaggio seguono sempre la stessa strada.", answer: false, explain: "Ogni pacchetto può prendere la strada più libera; TCP li rimette in ordine all'arrivo." },
        { type: "num", q: "Un file da 50 MB con una connessione da 100 Mbit/s: quanti secondi servono (in condizioni ideali)?", answer: 4, unit: "s", explain: "50 × 8 = 400 Mbit; 400 ÷ 100 = 4 s." }
      ]
    }
  ],
  glossary: [
    { t: "Rete", d: "Insieme di dispositivi collegati per scambiare dati." },
    { t: "LAN / WAN", d: "Rete locale (casa, scuola) / rete geografica (Paesi, continenti)." },
    { t: "Client", d: "Dispositivo che richiede un servizio." },
    { t: "Server", d: "Computer che fornisce servizi e contenuti ad altri dispositivi." },
    { t: "Router", d: "Dispositivo che indirizza i pacchetti tra reti diverse." },
    { t: "Indirizzo IP", d: "Numero che identifica un dispositivo in rete (IPv4 o IPv6)." },
    { t: "DNS", d: "Sistema che traduce i nomi dei siti in indirizzi IP." },
    { t: "Pacchetto", d: "Piccola porzione di dati con indirizzi e numero d'ordine." },
    { t: "Protocollo", d: "Insieme di regole per comunicare in rete (TCP, IP, HTTP…)." },
    { t: "Fibra ottica", d: "Filo di vetro che trasmette dati con impulsi di luce." },
    { t: "Bit / byte", d: "Unità di informazione: 1 byte = 8 bit." },
    { t: "World Wide Web", d: "Servizio di pagine collegate da link che funziona su Internet." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cos'è Internet?", options: ["Un unico grande computer", "Una rete di reti collegate in tutto il mondo", "Un programma per navigare"], answer: 1, explain: "Internet collega milioni di reti diverse con regole comuni." },
      { type: "mc", q: "Quale dispositivo smista i pacchetti tra reti diverse?", options: ["Router", "Stampante", "Monitor"], answer: 0, explain: "Il router decide la strada dei pacchetti." },
      { type: "tf", q: "Internet e World Wide Web sono la stessa cosa.", answer: false, explain: "Il Web è uno dei servizi che funzionano su Internet, come l'e-mail." },
      { type: "num", q: "Qual è il numero più grande che può comparire in ciascuna delle 4 parti di un indirizzo IPv4?", answer: 255, explain: "Ogni parte è di 8 bit: da 0 a 255." },
      { type: "text", q: "Come si chiama il sistema che traduce www.nomesito.it in un indirizzo IP? (sigla)", answer: ["dns"], explain: "DNS = Domain Name System." },
      { type: "order", q: "Metti in ordine cosa succede quando apri un sito.", items: ["Scrivi l'indirizzo nel browser", "Il DNS trova l'indirizzo IP", "Il browser invia la richiesta al server", "Il server risponde con i pacchetti", "Il browser mostra la pagina"], explain: "Nome → IP → richiesta → risposta → visualizzazione." },
      { type: "mc", q: "Che cosa viaggia dentro una fibra ottica?", options: ["Corrente elettrica", "Impulsi di luce", "Onde sonore"], answer: 1, explain: "La fibra trasmette i bit come lampi di luce." },
      { type: "num", q: "Un file da 200 MB con una connessione da 400 Mbit/s: quanti secondi servono (in condizioni ideali)?", answer: 4, unit: "s", explain: "200 × 8 = 1600 Mbit; 1600 ÷ 400 = 4 s." },
      { type: "mc", q: "Qual è il compito del protocollo TCP?", options: ["Dare un nome ai siti", "Controllare che tutti i pacchetti arrivino e rimetterli in ordine", "Accendere il Wi-Fi"], answer: 1, explain: "TCP garantisce che i dati arrivino completi e ordinati." },
      { type: "text", q: "In quale centro di ricerca di Ginevra è nato il World Wide Web? (sigla)", answer: ["cern", "il cern"], explain: "Al CERN, grazie a Tim Berners-Lee." },
      { type: "mc", q: "In che anno ARPANET inviò il primo messaggio?", options: ["1959", "1969", "1991"], answer: 1, explain: "Il 29 ottobre 1969, tra UCLA e Stanford Research Institute." },
      { type: "tf", q: "La maggior parte dei dati tra i continenti viaggia nei cavi sottomarini.", answer: true, explain: "Oltre il 95% del traffico intercontinentale passa nei cavi in fibra ottica sul fondo degli oceani." }
    ]
  }
});

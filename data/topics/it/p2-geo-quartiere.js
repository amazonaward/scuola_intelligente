TOPIC('it', {
  id: "p2-geo-quartiere",
  title: "Il quartiere e la città",
  intro: "Intorno a casa tua ci sono <b>strade</b> 🛣️, <b>piazze</b>, <b>negozi</b> 🏪, forse un <b>parco</b> 🌳 e una <b>scuola</b> 🏫. Tutto questo è il tuo <b>quartiere</b>. Tanti quartieri insieme formano una <b>città</b> 🏙️. Oggi andiamo a esplorarli!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Che cos'è un quartiere? 🏘️",
      html: `<p>Il <b>quartiere</b> è una <b>parte</b> della città. È la zona intorno a casa tua che conosci bene.</p>
<p>In un quartiere ci sono:</p>
<ul>
<li>🏠 <b>abitazioni</b>: case, villette, condomìni (palazzi con tanti appartamenti);</li>
<li>🛣️ <b>strade</b> e <b>piazze</b> per muoversi e incontrarsi;</li>
<li>🏪 <b>negozi</b> e mercati per fare la spesa;</li>
<li>🏫 <b>servizi</b>: scuola, farmacia, ambulatorio, biblioteca…;</li>
<li>🌳 <b>spazi verdi</b>: parchi, giardini, aiuole.</li>
</ul>
<p>Un <b>paese</b> piccolo può essere grande come un solo quartiere. Una <b>città</b> grande ne ha tanti: Roma, per esempio, è divisa in 15 <b>municipi</b>, ognuno con tanti quartieri!</p>`
    },
    {
      type: "text",
      title: "Strade e piazze 🛣️",
      html: `<p>Le strade hanno <b>nomi diversi</b> a seconda di come sono:</p>
<table>
<tr><th>Nome</th><th>Com'è</th></tr>
<tr><td>🛣️ <b>Via</b></td><td>una strada normale</td></tr>
<tr><td>🌳 <b>Viale</b></td><td>una strada larga, spesso con alberi ai lati</td></tr>
<tr><td>🏛️ <b>Corso</b></td><td>una strada importante, spesso in centro, con tanti negozi</td></tr>
<tr><td>🚶 <b>Vicolo</b></td><td>una strada stretta e corta</td></tr>
<tr><td>⛲ <b>Piazza</b></td><td>uno spazio aperto dove le strade si incontrano</td></tr>
</table>
<p>Ogni strada è divisa in parti:</p>
<ul>
<li>🚗 la <b>carreggiata</b>, dove passano le auto;</li>
<li>🚶 il <b>marciapiede</b>, dove camminano i pedoni;</li>
<li>🦓 le <b>strisce pedonali</b>, per attraversare;</li>
<li>🚦 il <b>semaforo</b>: rosso = fermo, giallo = attenzione, verde = via;</li>
<li>🚲 a volte la <b>pista ciclabile</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Un incrocio del quartiere",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bbf7d0"/>
<rect x="0" y="120" width="600" height="80" fill="#6b7280"/>
<rect x="250" y="0" width="100" height="320" fill="#6b7280"/>
<rect x="0" y="105" width="250" height="15" fill="#d6d3d1"/>
<rect x="350" y="105" width="250" height="15" fill="#d6d3d1"/>
<rect x="0" y="200" width="250" height="15" fill="#d6d3d1"/>
<rect x="350" y="200" width="250" height="15" fill="#d6d3d1"/>
<rect x="235" y="0" width="15" height="120" fill="#d6d3d1"/>
<rect x="350" y="0" width="15" height="120" fill="#d6d3d1"/>
<rect x="235" y="200" width="15" height="120" fill="#d6d3d1"/>
<rect x="350" y="200" width="15" height="120" fill="#d6d3d1"/>
<rect x="200" y="128" width="12" height="64" fill="#ffffff"/>
<rect x="218" y="128" width="12" height="64" fill="#ffffff"/>
<rect x="182" y="128" width="12" height="64" fill="#ffffff"/>
<rect x="370" y="20" width="14" height="40" rx="3" fill="#111827"/>
<circle cx="377" cy="28" r="5" fill="#ef4444"/>
<circle cx="377" cy="40" r="5" fill="#facc15"/>
<circle cx="377" cy="52" r="5" fill="#22c55e"/>
<rect x="40" y="20" width="150" height="75" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<text x="115" y="63" font-size="17" text-anchor="middle" fill="#7f1d1d" font-weight="bold">SCUOLA</text>
<rect x="400" y="230" width="160" height="75" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<text x="480" y="273" font-size="17" text-anchor="middle" fill="#92400e" font-weight="bold">NEGOZI</text>
<circle cx="80" cy="260" r="25" fill="#15803d"/>
<circle cx="150" cy="270" r="25" fill="#15803d"/>
<text x="115" y="312" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">parco</text>
<text x="470" y="160" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">carreggiata</text>
<text x="470" y="98" font-size="14" text-anchor="middle" fill="#0f172a">marciapiede</text>
<text x="205" y="225" font-size="14" text-anchor="middle" fill="#0f172a">strisce</text>
<text x="440" y="45" font-size="14" text-anchor="middle" fill="#0f172a">semaforo</text>
</svg>`,
      caption: "Un incrocio visto dall'alto: le strade, i marciapiedi, le strisce pedonali e il semaforo."
    },
    {
      type: "text",
      title: "I servizi: aiutano tutti 🤝",
      html: `<p>I <b>servizi</b> sono i luoghi e le persone che rispondono ai <b>bisogni</b> dei cittadini.</p>
<ul>
<li>🏥 per la <b>salute</b>: ospedale, ambulatorio del medico, farmacia;</li>
<li>📚 per <b>imparare</b>: scuola, biblioteca;</li>
<li>🚒 per la <b>sicurezza</b>: vigili del fuoco, polizia locale, carabinieri;</li>
<li>🚌 per <b>muoversi</b>: autobus, tram, metropolitana, stazione;</li>
<li>🏛️ per <b>organizzare la città</b>: il <b>municipio</b> (Comune), dove lavora il <b>sindaco</b>;</li>
<li>📮 per <b>comunicare</b>: l'ufficio postale.</li>
</ul>
<p>Alcuni servizi sono <b>pubblici</b>: sono di tutti e si pagano con le <b>tasse</b> dei cittadini (la scuola statale, il parco, la biblioteca comunale). Altri sono <b>privati</b>: appartengono a qualcuno e si paga quando si usano (il negozio di giocattoli, la pizzeria, il cinema).</p>`
    },
    {
      type: "widget",
      title: "Pubblico o privato?",
      widget: "classify",
      options: {
        groups: ["🏛️ Servizio pubblico", "🏪 Attività privata"],
        items: [
          ["🏫 scuola statale", 0],
          ["🍕 pizzeria", 1],
          ["📚 biblioteca comunale", 0],
          ["🧸 negozio di giocattoli", 1],
          ["🌳 parco pubblico", 0],
          ["🎬 cinema", 1],
          ["🚒 vigili del fuoco", 0],
          ["💇 parrucchiere", 1]
        ]
      },
      caption: "I servizi pubblici sono di tutti; le attività private sono di una persona o di un'azienda."
    },
    {
      type: "quiz",
      title: "Mini-quiz: strade e servizi",
      questions: [
        { type: "mc", q: "Dove devono camminare i pedoni?", options: ["Sulla carreggiata", "Sul marciapiede", "Sulla pista ciclabile"], answer: 1, explain: "Il marciapiede è per i pedoni." },
        { type: "mc", q: "Dove lavora il sindaco?", options: ["In farmacia", "Al municipio", "Alla stazione"], answer: 1, explain: "Il sindaco lavora al municipio, la sede del Comune." },
        { type: "tf", q: "Il semaforo verde vuol dire «fermati».", answer: false, explain: "Rosso = fermo, verde = via (guardando sempre prima!)." }
      ]
    },
    {
      type: "text",
      title: "Il centro e la periferia 🎯",
      html: `<p>Una città è un po' come un <b>bersaglio</b> 🎯:</p>
<ul>
<li>🏛️ Nel <b>centro storico</b> ci sono le case più antiche, le chiese, il municipio, la piazza principale. Le strade spesso sono strette.</li>
<li>🏢 Più fuori ci sono i quartieri più nuovi, con palazzi e strade larghe.</li>
<li>🏭 In <b>periferia</b> ci sono anche fabbriche, centri commerciali, grandi parcheggi e, più lontano, la campagna 🌾.</li>
</ul>
<p>Le città crescono <b>dal centro verso l'esterno</b>, come gli anelli di un albero 🌳.</p>`
    },
    {
      type: "3d",
      title: "Dove nascono le città? 🏞️",
      scene: "terrain",
      caption: "Ruota il paesaggio e tocca le parti: scopri perché le città nascono in certi posti e non in altri.",
      options: {
        features: {
          plain: { label: "Pianura", html: "Il terreno è piatto: è facile costruire case e strade e coltivare i campi. Molte grandi città sono in pianura, come <b>Milano</b>." },
          river: { label: "Fiume", html: "Dà acqua da bere e per i campi, e permette di viaggiare in barca. <b>Roma</b> è nata sul Tevere, <b>Torino</b> sul Po, <b>Firenze</b> sull'Arno." },
          coast: { label: "Costa", html: "Vicino al mare nascono le città con il <b>porto</b>, dove arrivano le navi: <b>Genova</b>, <b>Napoli</b>, <b>Palermo</b>." },
          bay: { label: "Baia", html: "Un'insenatura riparata dal vento: un ottimo posto per un porto sicuro." },
          hill: { label: "Collina", html: "Una volta le città si costruivano anche sulle colline per difendersi meglio dai nemici: tanti paesi medievali sono in cima a una collina." },
          mountain: { label: "Montagna", html: "In montagna è più difficile costruire: ci sono soprattutto <b>paesi</b> piccoli, nelle valli." }
        }
      }
    },
    {
      type: "example",
      title: "Esempio pratico: il mio indirizzo 📮",
      html: `<p>L'<b>indirizzo</b> serve per trovare una casa precisa. Quello di Anna è:</p>
<p style="font-size:1.1em">✉️ <b>Anna Rossi<br>Via dei Tigli, 12<br>10100 Torino (TO)</b></p>
<ul>
<li><b>Via dei Tigli</b> = il nome della strada;</li>
<li><b>12</b> = il <b>numero civico</b> del portone;</li>
<li><b>10100</b> = il <b>CAP</b> (codice di avviamento postale), che aiuta il postino;</li>
<li><b>Torino (TO)</b> = la città e la sigla della provincia.</li>
</ul>
<p>Di solito i numeri <b>dispari</b> (1, 3, 5…) sono da una parte della strada e i <b>pari</b> (2, 4, 6…) dall'altra. Impara a memoria il tuo indirizzo: è importante! 🧠</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: un percorso sicuro 🚸",
      html: `<p>Leo va a scuola a piedi con il papà. Ecco le regole che segue:</p>
<ol>
<li>🚶 Cammina sul <b>marciapiede</b>, lontano dal bordo.</li>
<li>🦓 Attraversa solo sulle <b>strisce pedonali</b>.</li>
<li>🚦 Aspetta il <b>verde</b> del semaforo per i pedoni (l'omino verde).</li>
<li>👀 Prima di attraversare guarda <b>a sinistra</b>, poi <b>a destra</b>, poi di nuovo a sinistra.</li>
<li>🦺 Davanti alla scuola c'è il <b>vigile</b> o il «nonno vigile» che aiuta i bambini.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🔴⚫",
      html: `<p>A <b>Firenze</b> e a <b>Genova</b> ci sono due tipi di numeri civici: quelli <b>rossi</b> per i negozi e le botteghe, e quelli <b>neri</b> (o blu) per le abitazioni. Così nella stessa via possono esserci due «numeri 10»! A <b>Venezia</b> invece i numeri non seguono la via ma il <b>sestiere</b> (il quartiere): possono superare il numero <b>6000</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🚦",
      html: `<p>Il <b>primo semaforo</b> della storia fu messo a <b>Londra</b> nel <b>1868</b>, davanti al Parlamento. Funzionava a gas e lo girava a mano un poliziotto! Poco dopo però esplose… I semafori elettrici arrivarono molti anni dopo, negli Stati Uniti, all'inizio del Novecento.</p>`
    },
    {
      type: "widget",
      title: "Trova i servizi nella mappa del quartiere",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e7e5e4"/>
<rect x="0" y="130" width="600" height="40" fill="#9ca3af"/>
<rect x="200" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="420" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="30" y="20" width="140" height="90" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<rect x="260" y="20" width="140" height="90" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/>
<rect x="480" y="20" width="100" height="90" fill="#86efac" stroke="#14532d" stroke-width="3"/>
<rect x="30" y="190" width="140" height="90" fill="#bbf7d0" stroke="#14532d" stroke-width="3"/>
<circle cx="70" cy="235" r="18" fill="#15803d"/>
<circle cx="130" cy="235" r="18" fill="#15803d"/>
<rect x="260" y="190" width="140" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="480" y="190" width="100" height="90" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 100, y: 65, label: "Scuola" },
          { x: 330, y: 65, label: "Municipio" },
          { x: 530, y: 65, label: "Farmacia" },
          { x: 100, y: 235, label: "Parco" },
          { x: 330, y: 235, label: "Supermercato" },
          { x: 530, y: 235, label: "Biblioteca" }
        ]
      },
      caption: "Clicca su ogni edificio e scegli il nome. Indizio: la farmacia è verde come la sua croce."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la città",
      intro: "Nel mondo le città sono organizzate in tanti modi. E si possono capire anche giocando!",
      tabs: [
        {
          label: "🇯🇵 In Giappone le vie non hanno nome",
          html: `<p>In <b>Giappone</b> quasi tutte le strade <b>non hanno un nome</b>! Per trovare una casa si usano i <b>quartieri</b> e gli <b>isolati</b> (i blocchi di case tra quattro strade), che hanno un numero.</p>
<p>Un indirizzo giapponese è come una scatola dentro l'altra: <b>città → quartiere → isolato → numero della casa</b>. Per questo i giapponesi disegnano spesso piccole <b>mappe</b> per spiegare dove abitano.</p>`
        },
        {
          label: "🇺🇸 New York a scacchiera",
          html: `<p>A <b>Manhattan</b>, a New York, nel 1811 decisero di costruire le strade come una <b>griglia</b>, come i quadretti del quaderno 📐. Le strade che vanno in un senso si chiamano <b>Avenue</b>, quelle dall'altro <b>Street</b>, e hanno quasi tutte un <b>numero</b>: 1st Street, 2nd Street…</p>
<p>Anche gli antichi <b>Romani</b> costruivano le città nuove a scacchiera, con due strade principali che si incrociavano: il <b>cardo</b> e il <b>decumano</b>. A Torino si vede ancora!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#e2e8f0"/>
<rect x="0" y="50" width="600" height="14" fill="#64748b"/>
<rect x="0" y="113" width="600" height="14" fill="#64748b"/>
<rect x="0" y="176" width="600" height="14" fill="#64748b"/>
<rect x="100" y="0" width="14" height="240" fill="#334155"/>
<rect x="250" y="0" width="14" height="240" fill="#334155"/>
<rect x="400" y="0" width="14" height="240" fill="#334155"/>
<text x="520" y="45" font-size="15" fill="#0f172a" font-weight="bold">1st Street</text>
<text x="520" y="108" font-size="15" fill="#0f172a" font-weight="bold">2nd Street</text>
<text x="520" y="171" font-size="15" fill="#0f172a" font-weight="bold">3rd Street</text>
<text x="120" y="230" font-size="15" fill="#0f172a" font-weight="bold">Avenue</text>
<text x="270" y="230" font-size="15" fill="#0f172a" font-weight="bold">Avenue</text>
</svg>`
        },
        {
          label: "🏰 Il quartiere come un corpo",
          html: `<p>Una città è come un <b>corpo</b> che vive:</p>
<ul>
<li>🛣️ le <b>strade</b> sono le vene dove scorrono auto e persone;</li>
<li>🏛️ il <b>municipio</b> è la testa che organizza;</li>
<li>🌳 i <b>parchi</b> sono i polmoni che danno aria pulita;</li>
<li>🚰 tubi dell'acqua, fogne e cavi elettrici sono nascosti sotto terra, come i nervi sotto la pelle.</li>
</ul>
<p>Se una parte non funziona (una strada chiusa, un guasto all'acqua), tutta la città ne soffre.</p>`
        },
        {
          label: "🧊 Un condominio a cubetti",
          html: `<p>Un <b>condominio</b> è un palazzo con tanti appartamenti. Muovi i cursori: se ci sono 4 appartamenti per piano, 3 file e 5 piani, quanti appartamenti ci sono in tutto? Ogni cubetto è un appartamento!</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 5 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: com'è fatta una città",
      nodes: [
        { id: "citta", label: "La città", x: 50, y: 6, color: "#6366f1", html: "<p>Un grande insieme di case, strade e servizi dove vivono tante persone.</p>", why: "<p>Le prime città nacquero circa <b>6.000 anni fa</b> in Mesopotamia, quando l'agricoltura dava cibo in più e non tutti dovevano coltivare: qualcuno poteva fare l'artigiano, il mercante, lo scriba.</p>" },
        { id: "quartiere", label: "Il quartiere", x: 50, y: 28, color: "#f97316", html: "<p>Una parte della città.</p>", why: "<p>Una città grande è troppo vasta per conoscerla tutta: per organizzarla la si divide in parti. A Roma antica c'erano i <b>rioni</b>, a Venezia i <b>sestieri</b>, a Siena le <b>contrade</b> del Palio.</p>" },
        { id: "strade", label: "Strade e piazze", x: 15, y: 50, color: "#64748b", html: "<p>Via, viale, corso, vicolo, piazza.</p>", why: "<p>Servono per <b>muoversi</b> e per <b>incontrarsi</b>. La piazza è nata come luogo del mercato e delle feste: nell'antica Roma si chiamava <b>foro</b>.</p>" },
        { id: "abitazioni", label: "Abitazioni", x: 38, y: 55, color: "#ef4444", html: "<p>Case, villette, condomìni.</p>", why: "<p>Quando tante persone vogliono abitare in poco spazio si costruisce <b>in altezza</b>: per questo in città ci sono i palazzi con tanti piani.</p>" },
        { id: "servizi", label: "Servizi pubblici", x: 62, y: 55, color: "#0ea5e9", html: "<p>Scuola, ospedale, biblioteca, trasporti, vigili del fuoco.</p>", why: "<p>Rispondono ai bisogni di <b>tutti</b>: salute, istruzione, sicurezza. Si pagano con le <b>tasse</b>, cioè con i soldi che ogni cittadino dà allo Stato e al Comune secondo le sue possibilità.</p>" },
        { id: "negozi", label: "Negozi e attività", x: 85, y: 50, color: "#eab308", html: "<p>Supermercati, botteghe, ristoranti, cinema.</p>", why: "<p>Sono <b>privati</b>: chi li apre vende cose o servizi e guadagna. Tanti negozi nascono dove passano tante persone.</p>" },
        { id: "comune", label: "Comune e sindaco", x: 62, y: 82, color: "#a855f7", html: "<p>Il Comune organizza la città; il sindaco lo guida.</p>", why: "<p>Il sindaco è <b>eletto</b> dai cittadini con il voto. Insieme al consiglio comunale decide dove fare una scuola, un parco, una pista ciclabile.</p>" },
        { id: "regole", label: "Regole della strada", x: 25, y: 85, color: "#16a34a", html: "<p>Marciapiede, strisce, semaforo.</p>", why: "<p>Quando tante persone, bici e auto usano gli stessi spazi servono <b>regole</b> uguali per tutti, per non farsi male. In Italia sono scritte nel <b>Codice della strada</b>.</p>" }
      ],
      edges: [
        ["citta", "quartiere", "divisa in"],
        ["quartiere", "strade", "ha"],
        ["quartiere", "abitazioni", "ha"],
        ["quartiere", "servizi", "ha"],
        ["quartiere", "negozi", "ha"],
        ["servizi", "comune", "organizzati dal"],
        ["strade", "regole", "con le"],
        ["comune", "regole", "fa rispettare"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la città",
      questions: [
        { type: "mc", q: "Dove si trovano di solito le case più antiche?", options: ["In periferia", "Nel centro storico", "In autostrada"], answer: 1, explain: "Le città sono cresciute dal centro verso l'esterno." },
        { type: "tf", q: "La biblioteca comunale è un servizio pubblico.", answer: true, explain: "È del Comune, cioè di tutti i cittadini." },
        { type: "text", q: "Come si chiama il numero del portone in un indirizzo?", answer: ["numero civico", "civico", "il numero civico"], explain: "È il numero civico." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare 📌",
      html: `<ul>
<li>Il <b>quartiere</b> è una parte della città.</li>
<li>Ci sono <b>abitazioni</b>, <b>strade e piazze</b>, <b>negozi</b>, <b>servizi</b> e <b>spazi verdi</b>.</li>
<li>I <b>servizi pubblici</b> sono di tutti; le <b>attività private</b> appartengono a qualcuno.</li>
<li>Il <b>Comune</b>, guidato dal <b>sindaco</b>, organizza la città.</li>
<li>Per la strada: <b>marciapiede</b>, <b>strisce pedonali</b>, <b>semaforo</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Quartiere", d: "Una parte di una città." },
    { t: "Servizio pubblico", d: "Un servizio per tutti i cittadini, pagato con le tasse (scuola, ospedale, biblioteca…)." },
    { t: "Municipio", d: "L'edificio del Comune, dove lavora il sindaco." },
    { t: "Sindaco", d: "La persona eletta dai cittadini per guidare il Comune." },
    { t: "Marciapiede", d: "La parte della strada riservata ai pedoni." },
    { t: "Carreggiata", d: "La parte della strada dove passano i veicoli." },
    { t: "Numero civico", d: "Il numero di un portone lungo una strada." },
    { t: "Periferia", d: "La parte più esterna della città, lontana dal centro." },
    { t: "Centro storico", d: "La parte più antica di una città." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Una strada larga con gli alberi ai lati si chiama…", options: ["vicolo", "viale", "piazza"], answer: 1, explain: "Il viale è largo e alberato." },
      { type: "mc", q: "Dove si attraversa la strada?", options: ["Sulle strisce pedonali", "In mezzo alle auto", "Dove capita"], answer: 0, explain: "Sulle strisce, guardando bene prima." },
      { type: "tf", q: "Il cinema è un servizio pubblico pagato con le tasse.", answer: false, explain: "Il cinema di solito è un'attività privata: si paga il biglietto." },
      { type: "mc", q: "Chi guida il Comune?", options: ["Il preside", "Il sindaco", "Il farmacista"], answer: 1, explain: "Il sindaco, eletto dai cittadini." },
      { type: "order", q: "Metti in ordine dal più piccolo al più grande.", items: ["casa", "quartiere", "città"], explain: "Tante case formano un quartiere; tanti quartieri una città." },
      { type: "text", q: "Come si chiama la parte della strada dove camminano i pedoni?", answer: ["marciapiede", "il marciapiede"], explain: "Il marciapiede." },
      { type: "mc", q: "Il semaforo è rosso. Che cosa fai?", options: ["Attraverso di corsa", "Mi fermo e aspetto", "Chiudo gli occhi"], answer: 1, explain: "Rosso = fermo." },
      { type: "mc", q: "Dove trovi le medicine?", options: ["In farmacia", "In biblioteca", "Alla posta"], answer: 0, explain: "La farmacia vende le medicine." },
      { type: "order", q: "Prima di attraversare guardo…", items: ["a sinistra", "a destra", "di nuovo a sinistra"], explain: "In Italia si guida a destra: le auto più vicine arrivano da sinistra." },
      { type: "tf", q: "Molte città sono nate vicino a un fiume o al mare.", answer: true, explain: "L'acqua serviva per bere, coltivare e viaggiare." },
      { type: "num", q: "Un condominio ha 5 piani e 2 appartamenti per piano. Quanti appartamenti ci sono?", answer: 10, tol: 0, unit: "appartamenti", explain: "5 × 2 = 10." }
    ]
  }
});

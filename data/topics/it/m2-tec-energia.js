TOPIC('it', {
  id: "m2-tec-energia",
  title: "L'energia e le centrali",
  intro: "Premi un interruttore e la luce si accende: dietro quel gesto c'è un viaggio lunghissimo. L'elettricità nasce in una <b>centrale</b>, dove una fonte di energia (acqua, vento, sole, gas, calore della Terra…) viene <b>trasformata</b>, poi corre per centinaia di chilometri sui cavi fino alla presa di casa. Scopriamo come funziona.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Energia: niente si crea, tutto si trasforma",
      html: `<p>L'<b>energia</b> è la capacità di compiere un lavoro: muovere, scaldare, illuminare. Si misura in <b>joule</b> (J); per l'elettricità si usa il <b>kilowattora</b> (kWh).</p>
<p>Esistono molte <b>forme</b> di energia: <b>meccanica</b> (movimento e posizione), <b>termica</b> (calore), <b>chimica</b> (nei combustibili e nel cibo), <b>elettrica</b>, <b>luminosa</b> (radiante), <b>nucleare</b>.</p>
<p>Regola d'oro (principio di conservazione dell'energia): l'energia <b>non si crea e non si distrugge</b>, si <b>trasforma</b> da una forma all'altra. Le centrali elettriche non «producono» energia dal nulla: la trasformano in energia elettrica.</p>
<p>In ogni trasformazione una parte dell'energia si disperde, quasi sempre come calore. Il <b>rendimento</b> dice quanta energia utile otteniamo:</p>
<p style="text-align:center"><b>rendimento = energia utile ÷ energia spesa × 100</b></p>`
    },
    {
      type: "text",
      title: "Le fonti di energia",
      html: `<table>
<tr><th>Fonti <b>non rinnovabili</b></th><th>Fonti <b>rinnovabili</b></th></tr>
<tr><td>Si sono formate in milioni di anni e si esauriscono: <b>petrolio</b>, <b>carbone</b>, <b>gas naturale</b> (combustibili fossili), <b>uranio</b> (nucleare).</td><td>Si rigenerano di continuo grazie al Sole o alla Terra: <b>solare</b>, <b>eolica</b> (vento), <b>idroelettrica</b> (acqua), <b>geotermica</b> (calore interno), <b>biomasse</b> (legna, scarti vegetali), energia del <b>mare</b>.</td></tr>
<tr><td>Bruciando i fossili si libera <b>anidride carbonica</b> (CO₂), il principale gas responsabile del riscaldamento globale, e sostanze inquinanti.</td><td>Durante il funzionamento emettono pochissima CO₂, ma alcune dipendono dal meteo (sole, vento) e servono sistemi di <b>accumulo</b>.</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Il cuore di quasi ogni centrale: turbina + alternatore",
      html: `<p>Nel <b>1831</b> l'inglese <b>Michael Faraday</b> scoprì l'<b>induzione elettromagnetica</b>: se un magnete si muove vicino a una bobina di filo di rame, nel filo nasce corrente elettrica. È il principio della dinamo della bicicletta e di quasi tutte le centrali.</p>
<ol>
<li>La fonte di energia mette in movimento una <b>turbina</b> (una grande ruota a pale): la spinge l'acqua, il vento o il vapore.</li>
<li>La turbina fa girare l'<b>alternatore</b>: magneti che ruotano dentro bobine di rame → si produce <b>corrente alternata</b>.</li>
<li>Il <b>trasformatore</b> alza la tensione (fino a 380 000 volt in Italia) per trasportare l'energia con meno perdite.</li>
<li>Gli <b>elettrodotti</b> (i tralicci) portano l'energia lontano; le <b>cabine</b> abbassano la tensione fino ai <b>230 volt</b> delle prese di casa, a <b>50 hertz</b>.</li>
</ol>
<p>Fa eccezione il <b>fotovoltaico</b>: i pannelli trasformano la luce <b>direttamente</b> in elettricità, senza turbine. La corrente prodotta è continua e un <b>inverter</b> la trasforma in alternata.</p>`
    },
    {
      type: "svg",
      title: "Dalla centrale alla presa di casa",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<rect x="0" y="240" width="600" height="60" fill="#bbf7d0"/>
<rect x="20" y="130" width="90" height="110" fill="#94a3b8" stroke="#334155" stroke-width="3"/>
<rect x="40" y="80" width="22" height="50" fill="#64748b"/>
<circle cx="51" cy="65" r="12" fill="#e2e8f0"/>
<circle cx="62" cy="48" r="15" fill="#f1f5f9"/>
<circle cx="65" cy="185" r="26" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<line x1="65" y1="159" x2="65" y2="211" stroke="#92400e" stroke-width="3"/>
<line x1="39" y1="185" x2="91" y2="185" stroke="#92400e" stroke-width="3"/>
<text x="65" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">1 centrale</text>
<rect x="140" y="180" width="60" height="60" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<text x="170" y="218" font-size="22" fill="#ffffff" text-anchor="middle">⚡</text>
<text x="170" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">2 trasform.</text>
<text x="170" y="286" font-size="13" fill="#7c2d12" text-anchor="middle">alza a 380 kV</text>
<polygon points="260,240 280,90 300,240" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="255" y1="110" x2="305" y2="110" stroke="#334155" stroke-width="4"/>
<polygon points="380,240 400,90 420,240" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="375" y1="110" x2="425" y2="110" stroke="#334155" stroke-width="4"/>
<path d="M200 195 Q 230 120 258 110 Q 340 140 378 110 Q 430 140 460 190" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="340" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">3 elettrodotto</text>
<rect x="450" y="190" width="40" height="50" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="470" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">4 cabina</text>
<polygon points="510,180 550,145 590,180" fill="#ef4444"/>
<rect x="515" y="180" width="70" height="60" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<circle cx="550" cy="205" r="10" fill="#fde047"/>
<line x1="490" y1="210" x2="515" y2="210" stroke="#dc2626" stroke-width="3"/>
<text x="550" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">5 casa</text>
<text x="550" y="286" font-size="13" fill="#92400e" text-anchor="middle">230 V</text>
<text x="300" y="30" font-size="18" font-weight="bold" fill="#0e7490" text-anchor="middle">Il viaggio dell'elettricità</text>
</svg>`,
      caption: "La tensione viene alzata per il trasporto (meno perdite sui cavi) e abbassata prima di entrare nelle case."
    },
    {
      type: "text",
      title: "I principali tipi di centrale",
      html: `<ul>
<li><b>Termoelettrica</b>: brucia gas, carbone o petrolio in una caldaia; il calore trasforma l'acqua in <b>vapore</b> ad alta pressione che fa girare la turbina. Catena: chimica → termica → meccanica → elettrica.</li>
<li><b>Idroelettrica</b>: l'acqua di un bacino (spesso creato da una <b>diga</b>) scende nelle <b>condotte forzate</b> e colpisce la turbina. Catena: potenziale → cinetica → elettrica.</li>
<li><b>Eolica</b>: il vento fa girare le pale di un <b>aerogeneratore</b>, collegato all'alternatore nella navicella in cima alla torre.</li>
<li><b>Fotovoltaica</b>: celle di <b>silicio</b> trasformano la luce in corrente (effetto fotovoltaico, scoperto da Edmond Becquerel nel 1839).</li>
<li><b>Geotermica</b>: usa il vapore caldo che sale dal sottosuolo nelle zone vulcaniche.</li>
<li><b>Nucleare</b>: la <b>fissione</b> (rottura) dei nuclei di uranio libera moltissimo calore, che produce vapore come in una termoelettrica. Non emette CO₂, ma produce <b>scorie radioattive</b> da custodire per tempi lunghissimi. In Italia, dopo il referendum del 1987, le centrali nucleari sono state chiuse.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Esplora una centrale idroelettrica",
      scene: "terrain",
      options: { features: {
        glacier: { label: "Ghiacciaio", html: "I ghiacciai e la neve sono le «riserve» d'acqua: sciogliendosi in primavera ed estate alimentano fiumi e laghi alpini." },
        mountain: { label: "Montagna", html: "Le centrali idroelettriche si costruiscono in montagna perché serve un grande <b>dislivello</b>: più l'acqua cade dall'alto, più energia ha." },
        lake: { label: "Bacino (lago artificiale)", html: "La <b>diga</b> sbarra una valle e crea un lago: l'acqua ferma in alto possiede <b>energia potenziale</b>. Il bacino è anche una «batteria»: si può svuotare quando serve energia." },
        valley: { label: "Valle con la centrale", html: "In fondo alla valle si trova la <b>centrale</b>: l'acqua arriva nelle condotte forzate, colpisce la turbina e fa girare l'alternatore." },
        river: { label: "Fiume", html: "Dopo la turbina l'acqua torna nel fiume: non viene consumata né inquinata. Le centrali «ad acqua fluente» sfruttano direttamente la corrente del fiume, senza grandi dighe." },
        plain: { label: "Pianura", html: "Gli elettrodotti portano l'energia verso le città e le fabbriche della pianura, dove si consuma di più." }
      } },
      caption: "Tocca le parti del paesaggio per seguire il percorso dell'acqua dalla montagna alla corrente elettrica."
    },
    {
      type: "quiz",
      title: "Mini-quiz: fonti e trasformazioni",
      questions: [
        { type: "mc", q: "Quale fonte è rinnovabile?", options: ["Carbone", "Vento", "Gas naturale"], answer: 1, explain: "Il vento si rigenera continuamente: è una fonte rinnovabile." },
        { type: "mc", q: "Quale macchina trasforma il movimento in energia elettrica?", options: ["Trasformatore", "Alternatore", "Caldaia"], answer: 1, explain: "L'alternatore sfrutta l'induzione elettromagnetica scoperta da Faraday." },
        { type: "tf", q: "I pannelli fotovoltaici hanno bisogno di una turbina.", answer: false, explain: "Il fotovoltaico trasforma la luce direttamente in elettricità, senza parti in movimento." }
      ]
    },
    {
      type: "widget",
      title: "Rinnovabile o no?",
      widget: "classify",
      options: {
        groups: ["Rinnovabile", "Non rinnovabile"],
        items: [
          ["☀️ Sole", 0], ["🌬️ Vento", 0], ["💧 Acqua dei fiumi", 0], ["🌋 Calore della Terra", 0],
          ["🪵 Biomasse", 0], ["🛢️ Petrolio", 1], ["⚫ Carbone", 1], ["🔥 Gas naturale", 1], ["☢️ Uranio", 1]
        ]
      },
      caption: "Le fonti fossili e l'uranio sono limitate: un giorno finiranno."
    },
    {
      type: "example",
      title: "Esempio pratico: leggere la bolletta",
      html: `<p>La <b>potenza</b> di un apparecchio (in watt, W, o kilowatt, kW) dice quanta energia consuma <b>ogni ora</b>. L'energia consumata è:</p>
<p style="text-align:center"><b>energia (kWh) = potenza (kW) × tempo (h)</b></p>
<ul>
<li>Un forno da <b>2 kW</b> acceso per <b>1,5 ore</b> consuma 2 × 1,5 = <b>3 kWh</b>.</li>
<li>Una lampadina LED da <b>10 W</b> (= 0,01 kW) accesa per <b>5 ore</b> al giorno per 30 giorni: 0,01 × 5 × 30 = <b>1,5 kWh</b> al mese.</li>
<li>Una vecchia lampadina a incandescenza da <b>60 W</b> che fa la stessa luce: 0,06 × 5 × 30 = <b>9 kWh</b>, sei volte di più!</li>
</ul>
<p>Se un kWh costa circa 0,30 €, il LED costa 0,45 € al mese e la vecchia lampadina 2,70 €. Risparmiare energia conviene all'ambiente e al portafoglio.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il rendimento",
      html: `<p>Una centrale termoelettrica riceve dal combustibile <b>100</b> unità di energia e ne trasforma in elettricità <b>40</b>: il suo rendimento è 40 ÷ 100 × 100 = <b>40%</b>. Il resto si disperde come calore (per questo hanno le grandi torri di raffreddamento).</p>
<p>Le moderne centrali <b>a ciclo combinato</b> recuperano il calore dei fumi per produrre altro vapore e arrivano a circa il <b>60%</b>. Una centrale idroelettrica può superare il <b>85–90%</b>, mentre un pannello fotovoltaico comune trasforma in elettricità circa il <b>20%</b> della luce che riceve.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'Italia ha acceso la prima lampadina geotermica",
      html: `<p>Nel <b>1904</b>, a <b>Larderello</b> in Toscana, il principe <b>Piero Ginori Conti</b> usò il vapore naturale che usciva dal terreno per far girare una piccola dinamo e accese <b>5 lampadine</b>: era la prima volta al mondo che si produceva elettricità dal calore della Terra.</p>
<p>Nel 1913 a Larderello entrò in funzione la prima centrale geotermica commerciale del mondo. Ancora oggi la Toscana produce elettricità geotermica.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le «batterie d'acqua»",
      html: `<p>Il sole e il vento non producono sempre quando serve. Una soluzione intelligente sono le centrali <b>a pompaggio</b>: hanno due laghi, uno in alto e uno in basso. Quando c'è energia in avanzo (per esempio a mezzogiorno con tanto sole), si usa per <b>pompare</b> l'acqua nel lago alto; la sera, quando tutti accendono le luci, l'acqua scende e produce elettricità.</p>
<p>È come ricaricare una gigantesca batteria… fatta di acqua e montagne!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'energia non si crea né si distrugge: si <b>trasforma</b>. Il rendimento misura quanta energia è utile.</li>
<li>Fonti <b>non rinnovabili</b>: fossili e uranio. Fonti <b>rinnovabili</b>: sole, vento, acqua, geotermia, biomasse.</li>
<li>Quasi tutte le centrali: fonte → <b>turbina</b> → <b>alternatore</b> → <b>trasformatore</b> → rete. Il fotovoltaico non usa turbine.</li>
<li>Energia (kWh) = potenza (kW) × tempo (h).</li>
<li>In casa: 230 V, 50 Hz, corrente alternata.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le centrali",
      intro: "Se le trasformazioni di energia ti confondono, prova con un'analogia, con la storia o con una linea del tempo interattiva.",
      tabs: [
        {
          label: "🚲 La dinamo della bici",
          html: `<p>Una vecchia bicicletta con la <b>dinamo</b> è una centrale elettrica in miniatura!</p>
<ul>
<li>Tu sei la <b>fonte di energia</b> (energia chimica del cibo → muscoli).</li>
<li>La ruota che gira è la <b>turbina</b>.</li>
<li>La dinamo, con un magnete che ruota dentro una bobina, è l'<b>alternatore</b>.</li>
<li>Il fanale che si accende è la <b>casa</b> che consuma.</li>
</ul>
<p>Se pedali più forte la luce è più intensa; se ti fermi si spegne: senza movimento niente corrente. In una centrale termoelettrica, al posto delle tue gambe c'è il vapore; in una idroelettrica, l'acqua che cade.</p>`
        },
        {
          label: "🔗 La catena delle trasformazioni",
          html: `<p>Ogni centrale è una <b>catena</b> di trasformazioni. Seguila come una staffetta in cui l'energia passa di mano in mano:</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fff7ed"/>
<text x="300" y="30" font-size="18" font-weight="bold" fill="#9a3412" text-anchor="middle">Centrale termoelettrica</text>
<rect x="15" y="45" width="125" height="60" rx="12" fill="#a16207"/>
<text x="77" y="82" font-size="16" fill="#ffffff" text-anchor="middle">chimica 🔥</text>
<rect x="160" y="45" width="125" height="60" rx="12" fill="#dc2626"/>
<text x="222" y="82" font-size="16" fill="#ffffff" text-anchor="middle">termica ♨️</text>
<rect x="305" y="45" width="125" height="60" rx="12" fill="#2563eb"/>
<text x="367" y="82" font-size="16" fill="#ffffff" text-anchor="middle">meccanica ⚙️</text>
<rect x="450" y="45" width="135" height="60" rx="12" fill="#16a34a"/>
<text x="517" y="82" font-size="16" fill="#ffffff" text-anchor="middle">elettrica ⚡</text>
<text x="150" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="295" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="440" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="300" y="150" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">Centrale idroelettrica</text>
<rect x="60" y="165" width="140" height="60" rx="12" fill="#0ea5e9"/>
<text x="130" y="202" font-size="16" fill="#ffffff" text-anchor="middle">potenziale 🏔️</text>
<rect x="230" y="165" width="140" height="60" rx="12" fill="#2563eb"/>
<text x="300" y="202" font-size="16" fill="#ffffff" text-anchor="middle">cinetica 💧</text>
<rect x="400" y="165" width="140" height="60" rx="12" fill="#16a34a"/>
<text x="470" y="202" font-size="16" fill="#ffffff" text-anchor="middle">elettrica ⚡</text>
<text x="215" y="202" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="385" y="202" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="300" y="262" font-size="15" fill="#7c2d12" text-anchor="middle">a ogni passaggio un po' di energia si disperde come calore</text>
</svg>`
        },
        {
          label: "🌍 Come fanno gli altri Paesi",
          html: `<p>Ogni Paese produce elettricità con le risorse che ha:</p>
<ul>
<li>🇳🇴 <b>Norvegia</b>: piena di montagne e fiumi, produce circa il <b>90%</b> dell'elettricità con l'<b>idroelettrico</b>.</li>
<li>🇫🇷 <b>Francia</b>: circa due terzi dell'elettricità vengono dal <b>nucleare</b>.</li>
<li>🇮🇸 <b>Islanda</b>: isola vulcanica, usa <b>idroelettrico e geotermia</b> quasi al 100%.</li>
<li>🇩🇰 <b>Danimarca</b>: terra piatta e ventosa, oltre metà dell'elettricità viene dal <b>vento</b>.</li>
<li>🇮🇹 <b>Italia</b>: usa soprattutto <b>gas naturale</b>, ma le rinnovabili (idroelettrico, solare, eolico, geotermico, biomasse) coprono ormai circa due quinti dei consumi elettrici, e il solare cresce ogni anno.</li>
</ul>
<p>Geografia ed energia sono strettamente collegate!</p>`
        },
        {
          label: "⏳ Linea del tempo",
          html: `<p>Scorri la linea del tempo: dall'induzione di Faraday ai pannelli solari sui tetti.</p>`,
          widget: "timeline",
          options: { unit: "anni", events: [
            { year: 1831, label: "Faraday scopre l'induzione elettromagnetica", icon: "🧲" },
            { year: 1839, label: "Becquerel scopre l'effetto fotovoltaico", icon: "☀️" },
            { year: 1879, label: "Lampadina a incandescenza di Edison", icon: "💡" },
            { year: 1882, label: "Prime centrali elettriche a Londra e New York", icon: "🏭" },
            { year: 1883, label: "A Milano la centrale di via Santa Radegonda", icon: "🇮🇹" },
            { year: 1904, label: "Larderello: prima elettricità geotermica", icon: "🌋" },
            { year: 1954, label: "Primi pannelli solari al silicio (Bell Labs)", icon: "🔋" },
            { year: 1987, label: "Referendum: l'Italia abbandona il nucleare", icon: "🗳️" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'energia elettrica",
      nodes: [
        { id: "energia", label: "Energia", x: 50, y: 7, color: "#7c3aed", html: "Capacità di compiere un lavoro. Si misura in joule (J) o kWh.", why: "Il principio di conservazione dell'energia fu formulato a metà del 1800 da scienziati come Julius Robert Mayer, James Prescott Joule e Hermann von Helmholtz: l'energia si trasforma ma il totale resta costante." },
        { id: "fonti", label: "Fonti", x: 50, y: 27, color: "#2563eb", html: "Da dove prendiamo l'energia: rinnovabili e non rinnovabili.", why: "Quasi tutte vengono dal Sole: i fossili sono resti di piante e animali che hanno immagazzinato energia solare milioni di anni fa; vento e pioggia nascono dal Sole che scalda l'aria e il mare. Fanno eccezione geotermia e nucleare." },
        { id: "rinn", label: "Rinnovabili", x: 20, y: 45, color: "#16a34a", html: "Sole, vento, acqua, geotermia, biomasse.", why: "Si rigenerano in tempi umani: il Sole brillerà ancora per miliardi di anni e il ciclo dell'acqua riporta sempre la pioggia sulle montagne." },
        { id: "nonrinn", label: "Non rinnovabili", x: 80, y: 45, color: "#64748b", html: "Petrolio, carbone, gas, uranio.", why: "I combustibili fossili si sono formati in milioni di anni: noi li consumiamo in pochi secoli. Bruciandoli liberiamo CO₂, che trattiene calore nell'atmosfera." },
        { id: "turbina", label: "Turbina", x: 35, y: 65, color: "#0ea5e9", html: "Ruota a pale mossa da acqua, vapore o vento.", why: "Discende dai mulini ad acqua e a vento usati da secoli. La turbina a vapore moderna fu inventata da Charles Parsons nel 1884." },
        { id: "alternatore", label: "Alternatore", x: 65, y: 65, color: "#f59e0b", html: "Trasforma il movimento in corrente alternata.", why: "Si basa sull'induzione elettromagnetica scoperta da Michael Faraday nel 1831: un magnete in movimento vicino a una bobina genera corrente." },
        { id: "fv", label: "Fotovoltaico", x: 10, y: 82, color: "#eab308", html: "Celle di silicio che trasformano la luce in elettricità.", why: "L'effetto fotovoltaico fu osservato da Edmond Becquerel nel 1839; Albert Einstein ne spiegò il fenomeno collegato (effetto fotoelettrico) nel 1905 e per questo ricevette il Nobel." },
        { id: "rete", label: "Rete elettrica", x: 65, y: 85, color: "#ef4444", html: "Trasformatori, elettrodotti, cabine: portano l'energia nelle case.", why: "Si usa la corrente alternata perché con i trasformatori si può alzare e abbassare facilmente la tensione: alta tensione = meno perdite sui cavi. Fu la «guerra delle correnti» tra Edison (continua) e Tesla/Westinghouse (alternata) a fine 1800." },
        { id: "kwh", label: "kWh", x: 90, y: 92, color: "#a855f7", html: "Unità dell'energia elettrica: potenza (kW) × tempo (h).", why: "Il watt prende il nome da James Watt, l'ingegnere scozzese che perfezionò la macchina a vapore. 1 kWh = 3 600 000 joule." }
      ],
      edges: [
        ["energia", "fonti", "proviene da"],
        ["fonti", "rinn", "tipo"],
        ["fonti", "nonrinn", "tipo"],
        ["rinn", "turbina", "acqua, vento muovono"],
        ["nonrinn", "turbina", "il vapore muove"],
        ["turbina", "alternatore", "fa girare"],
        ["rinn", "fv", "il Sole alimenta"],
        ["alternatore", "rete", "immette in"],
        ["fv", "rete", "con inverter"],
        ["rete", "kwh", "si misura in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: calcoli con l'energia",
      questions: [
        { type: "num", q: "Un phon da 2 kW resta acceso 0,5 ore. Quanti kWh consuma?", answer: 1, unit: "kWh", explain: "2 × 0,5 = 1 kWh." },
        { type: "num", q: "Una centrale riceve 200 unità di energia e ne trasforma 70 in elettricità. Qual è il rendimento in %?", answer: 35, unit: "%", explain: "70 ÷ 200 × 100 = 35%." },
        { type: "mc", q: "Perché l'elettricità si trasporta ad altissima tensione?", options: ["Per farla arrivare più in fretta", "Per ridurre le perdite sui cavi", "Per renderla più sicura in casa"], answer: 1, explain: "Ad alta tensione serve meno corrente per trasportare la stessa potenza, quindi i cavi si scaldano meno e si spreca meno energia." }
      ]
    }
  ],
  glossary: [
    { t: "Energia", d: "Capacità di compiere un lavoro; si misura in joule (J) o kilowattora (kWh)." },
    { t: "Fonte rinnovabile", d: "Fonte che si rigenera in tempi brevi: sole, vento, acqua, geotermia, biomasse." },
    { t: "Combustibile fossile", d: "Petrolio, carbone o gas, formati in milioni di anni da resti di organismi." },
    { t: "Turbina", d: "Ruota a pale messa in rotazione da acqua, vapore o vento." },
    { t: "Alternatore", d: "Macchina che trasforma il movimento in corrente elettrica alternata." },
    { t: "Trasformatore", d: "Dispositivo che alza o abbassa la tensione elettrica." },
    { t: "Elettrodotto", d: "Linea di cavi e tralicci che trasporta l'energia ad alta tensione." },
    { t: "Effetto fotovoltaico", d: "Trasformazione diretta della luce in elettricità nelle celle di silicio." },
    { t: "Fissione nucleare", d: "Rottura di nuclei pesanti (uranio) che libera grandi quantità di calore." },
    { t: "Rendimento", d: "Rapporto tra energia utile ottenuta ed energia spesa, in percentuale." },
    { t: "Kilowattora (kWh)", d: "Energia consumata da un apparecchio di 1 kW acceso per un'ora." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "Secondo il principio di conservazione, l'energia si trasforma ma non si crea dal nulla.", answer: true, explain: "L'energia non si crea né si distrugge, si trasforma." },
      { type: "mc", q: "Quale tra queste è una fonte non rinnovabile?", options: ["Geotermia", "Uranio", "Biomasse"], answer: 1, explain: "L'uranio è un minerale presente in quantità limitata." },
      { type: "mc", q: "Chi scoprì l'induzione elettromagnetica nel 1831?", options: ["Thomas Edison", "Michael Faraday", "Alessandro Volta"], answer: 1, explain: "Michael Faraday, scienziato inglese." },
      { type: "order", q: "Metti in ordine il funzionamento di una centrale termoelettrica.", items: ["Il combustibile brucia nella caldaia", "L'acqua diventa vapore", "Il vapore fa girare la turbina", "L'alternatore produce corrente", "Il trasformatore alza la tensione"], explain: "Chimica → termica → meccanica → elettrica, poi la rete." },
      { type: "num", q: "Un televisore da 0,1 kW resta acceso 4 ore. Quanti kWh consuma?", answer: 0.4, tol: 0.001, unit: "kWh", explain: "0,1 × 4 = 0,4 kWh." },
      { type: "mc", q: "In quale centrale non c'è una turbina?", options: ["Eolica", "Fotovoltaica", "Idroelettrica"], answer: 1, explain: "Il fotovoltaico trasforma direttamente la luce in elettricità." },
      { type: "text", q: "Come si chiama la località toscana dove nel 1904 si produsse per la prima volta elettricità geotermica?", answer: ["larderello"], explain: "Larderello, in provincia di Pisa." },
      { type: "num", q: "Qual è la tensione (in volt) delle prese di casa in Italia?", answer: 230, unit: "V", explain: "In Italia (e in Europa) la rete domestica è a 230 V, 50 Hz." },
      { type: "tf", q: "Le centrali idroelettriche consumano l'acqua, che non torna più nel fiume.", answer: false, explain: "L'acqua passa nella turbina e torna nel fiume: viene usata, non consumata." },
      { type: "mc", q: "Qual è il principale svantaggio dei combustibili fossili per il clima?", options: ["Fanno troppo rumore", "Liberano CO₂ che contribuisce al riscaldamento globale", "Funzionano solo di giorno"], answer: 1, explain: "La combustione libera anidride carbonica, un gas serra." },
      { type: "num", q: "Un pannello riceve 1000 W di luce e produce 200 W di elettricità. Qual è il rendimento in %?", answer: 20, unit: "%", explain: "200 ÷ 1000 × 100 = 20%." },
      { type: "mc", q: "A cosa serve una centrale a pompaggio?", options: ["A conservare energia pompando acqua in alto quando ce n'è in avanzo", "A pompare petrolio dal sottosuolo", "A raffreddare le centrali nucleari"], answer: 0, explain: "Funziona come una grande batteria: accumula energia sotto forma di acqua in quota." }
    ],
    gen: [["percent", 2]]
  }
});

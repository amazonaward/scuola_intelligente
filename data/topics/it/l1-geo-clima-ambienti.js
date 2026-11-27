TOPIC('it', {
  id: "l1-geo-clima-ambienti",
  title: "Climi e ambienti della Terra",
  intro: "Perché a Quito, sull'Equatore, si possono vedere ghiacciai? Perché Oslo è più mite di Anchorage pur alla stessa latitudine? Il <b>clima</b> dipende da pochi fattori che si combinano in modi sempre diversi e, a sua volta, plasma gli <b>ambienti naturali</b> (i <b>biomi</b>) in cui vivono piante, animali e popoli. In più, oggi il clima sta <b>cambiando</b>: capiamo come e perché.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Tempo atmosferico e clima",
      html: `<p>Il <b>tempo atmosferico</b> è lo stato dell'atmosfera in un certo luogo e in un certo momento (oggi piove, ci sono 12 °C). Il <b>clima</b> è invece l'<b>insieme delle condizioni medie</b> di un luogo, calcolato su un lungo periodo: l'Organizzazione Meteorologica Mondiale (OMM) usa convenzionalmente periodi di <b>almeno trent'anni</b> (il trentennio di riferimento attuale è 1991-2020). Il clima si descrive con le medie di <b>temperatura</b>, <b>precipitazioni</b>, <b>umidità</b>, <b>pressione</b> e <b>venti</b>.</p>
<p>Una frase aiuta: <i>\"il clima è quello che ti aspetti, il tempo è quello che trovi\"</i>. Una giornata fredda non smentisce il riscaldamento globale, così come un colpo di tosse non smentisce la salute di una persona.</p>
<p>Il clima si studia con i dati delle stazioni meteorologiche e si rappresenta con un <b>climogramma</b> (o diagramma termopluviometrico): le <b>temperature medie mensili</b> sono una linea, le <b>precipitazioni mensili</b> sono istogrammi (barre). Da un climogramma si leggono subito l'<b>escursione termica annua</b> (differenza fra il mese più caldo e il più freddo), le piogge totali e la presenza di una stagione secca.</p>`
    },
    {
      type: "text",
      title: "2. I fattori che determinano il clima",
      html: `<p>Il clima di un luogo dipende da <b>fattori astronomici</b> e <b>fattori geografici</b>:</p>
<ul>
<li><b>Latitudine</b> ☀️: i raggi del Sole arrivano quasi perpendicolari vicino all'Equatore (molto calore concentrato) e molto inclinati ai poli (calore sparso su un'area più grande, e più atmosfera da attraversare). Per questo la temperatura media scende dall'Equatore ai poli.</li>
<li><b>Altitudine</b> ⛰️: in troposfera la temperatura diminuisce di circa <b>6,5 °C ogni 1.000 m</b> (gradiente termico verticale). A 3.000 m fa circa 20 °C in meno che al livello del mare.</li>
<li><b>Distanza dal mare</b> 🌊: l'acqua si scalda e si raffredda più lentamente della terraferma (alto calore specifico). Vicino al mare le temperature sono mitigate (clima <b>marittimo</b>, bassa escursione termica); all'interno dei continenti si ha un clima <b>continentale</b> (estati calde, inverni freddi).</li>
<li><b>Correnti marine</b> 🌀: trasportano calore. La <b>Corrente del Golfo</b> porta acqua tiepida dai Caraibi verso l'Europa nord-occidentale: grazie a essa Bergen (Norvegia, 60° N) ha inverni molto più miti della Labrador, a pari latitudine. Le correnti fredde (come quella di Humboldt, lungo il Cile e il Perù) raffreddano le coste e favoriscono deserti come l'<b>Atacama</b>.</li>
<li><b>Venti e masse d'aria</b> 💨: i venti dominanti portano aria umida o secca, calda o fredda. Gli <b>alisei</b> soffiano da est verso l'Equatore, i <b>venti occidentali</b> alle medie latitudini; i <b>monsoni</b> invertono direzione fra estate e inverno e portano piogge torrenziali in India e Sud-Est asiatico.</li>
<li><b>Rilievi e esposizione</b> 🏔️: una catena montuosa blocca le nuvole sul versante esposto al vento (<b>piogge orografiche</b>) e lascia l'altro versante all'\"ombra pluviometrica\", secco. Il <b>Cherrapunji</b>, sulle pendici dell'Himalaya indiana, è tra i luoghi più piovosi del mondo (oltre 11.000 mm l'anno).</li>
<li><b>Copertura del suolo (albedo)</b>: neve e ghiaccio riflettono fino al 80-90% della luce solare, il mare scuro ne riflette meno del 10%.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: quanto fa freddo in cima?",
      html: `<p>A Courmayeur, a circa <b>1.200 m</b>, a mezzogiorno ci sono 14 °C. Alla stessa ora, che temperatura ti aspetti sulla punta Helbronner, a circa <b>3.460 m</b>?</p>
<p>Differenza di quota: 3.460 − 1.200 = 2.260 m. Calo: 2,26 × 6,5 ≈ <b>14,7 °C</b>. Temperatura prevista: 14 − 14,7 ≈ <b>−0,7 °C</b>, circa zero gradi. Il calcolo è una stima media (l'aria reale può variare con umidità e stabilità), ma spiega perché sulle vette d'estate si indossa la giacca anche se in valle si suda, e perché ghiacciai e neve perenne si trovano sulle montagne anche vicino all'Equatore (il Kilimangiaro, a 3° S, ha un ghiacciaio in cima).</p>`
    },
    {
      type: "svg",
      title: "Il climogramma di un clima mediterraneo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="70" y1="240" x2="560" y2="240" stroke="#111827" stroke-width="2"/>
<line x1="70" y1="40" x2="70" y2="240" stroke="#111827" stroke-width="2"/>
<g fill="#60a5fa" stroke="#1e3a8a" stroke-width="1">
<rect x="82" y="165" width="26" height="75"/>
<rect x="123" y="170" width="26" height="70"/>
<rect x="164" y="175" width="26" height="65"/>
<rect x="205" y="180" width="26" height="60"/>
<rect x="246" y="205" width="26" height="35"/>
<rect x="287" y="222" width="26" height="18"/>
<rect x="328" y="230" width="26" height="10"/>
<rect x="369" y="226" width="26" height="14"/>
<rect x="410" y="198" width="26" height="42"/>
<rect x="451" y="150" width="26" height="90"/>
<rect x="492" y="142" width="26" height="98"/>
<rect x="533" y="165" width="26" height="75"/>
</g>
<polyline points="95,178 136,172 177,160 218,148 259,128 300,105 341,92 382,95 423,112 464,138 505,160 546,172" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="300" y="25" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Clima mediterraneo (tipo Roma): estate calda e secca, inverno mite e piovoso</text>
<text x="95" y="262" font-size="14" text-anchor="middle" fill="#111827">G</text><text x="259" y="262" font-size="14" text-anchor="middle" fill="#111827">M</text><text x="341" y="262" font-size="14" text-anchor="middle" fill="#111827">L</text><text x="546" y="262" font-size="14" text-anchor="middle" fill="#111827">D</text>
<text x="76" y="285" font-size="14" fill="#dc2626" font-weight="bold">linea rossa = temperatura (max in estate)</text>
<text x="340" y="285" font-size="14" fill="#1e3a8a" font-weight="bold">barre blu = piogge (min in estate)</text>
</svg>`,
      caption: "Il picco delle temperature coincide con il minimo delle piogge: è la firma del clima mediterraneo (stagione secca d'estate). Valori disegnati a scopo illustrativo."
    },
    {
      type: "quiz",
      title: "Mini-quiz: fattori del clima",
      questions: [
        { type: "mc", q: "Di quanto diminuisce in media la temperatura salendo di 1.000 m in troposfera?", options: ["Circa 0,65 °C", "Circa 6,5 °C", "Circa 65 °C"], answer: 1, explain: "Il gradiente termico verticale è di circa 6,5 °C ogni 1.000 m (0,65 °C ogni 100 m)." },
        { type: "tf", q: "Un inverno particolarmente freddo dimostra che il clima non si sta riscaldando.", answer: false, explain: "Il clima è la media su decenni; un singolo inverno è tempo meteorologico e può essere freddo anche in un clima che si scalda." },
        { type: "mc", q: "Quale corrente rende l'Europa nord-occidentale più mite di quanto la latitudine farebbe pensare?", options: ["Corrente di Humboldt", "Corrente del Golfo", "Corrente del Labrador"], answer: 1, explain: "La Corrente del Golfo porta acque tiepide dai Caraibi verso l'Atlantico del Nord." }
      ]
    },
    {
      type: "text",
      title: "3. La classificazione dei climi di Köppen",
      html: `<p>I climi della Terra sono moltissimi: per studiarli li classifichiamo. La classificazione più usata, proposta dal climatologo russo-tedesco <b>Wladimir Köppen</b> (1884, poi rivista con Rudolf Geiger fino agli anni '30), si basa su temperatura e precipitazioni e usa cinque gruppi indicati da una lettera:</p>
<ul>
<li><b>A – Climi tropicali (caldi e umidi)</b>: tutti i mesi sopra i 18 °C. Comprende il tropicale umido (foresta pluviale, piogge tutto l'anno) e il tropicale con stagione secca (savana, monsonico).</li>
<li><b>B – Climi aridi</b>: l'evaporazione supera le precipitazioni. <b>Desertico</b> (BW) e <b>steppico</b> (BS). Non dipendono solo dalla temperatura: ci sono deserti freddi, come il Gobi.</li>
<li><b>C – Climi temperati</b>: il mese più freddo tra −3 e 18 °C. Include il <b>mediterraneo</b> (estate secca), il <b>subtropicale umido</b> e l'<b>oceanico</b> (piogge distribuite, inverni miti: Irlanda, Bretagna, Pacifico nord-ovest degli USA).</li>
<li><b>D – Climi continentali (freddi)</b>: inverni lunghi e rigidi (mese più freddo sotto −3 °C), estati calde o fresche. Sono diffusi nell'emisfero nord (Russia, Canada).</li>
<li><b>E – Climi polari</b>: nessun mese sopra 10 °C; tundra e calotte glaciali.</li>
</ul>
<p>In Italia il clima è <b>mediterraneo</b> lungo le coste e al Sud e nelle isole, <b>temperato subcontinentale</b> nella Pianura Padana (inverni freddi e nebbiosi, estati calde e afose), <b>alpino</b> sulle montagne, con temperatura che scende con la quota.</p>`
    },
    {
      type: "svg",
      title: "Le fasce climatiche della Terra",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<rect x="40" y="30" width="520" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
<rect x="40" y="60" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="90" width="520" height="30" fill="#fde68a" stroke="#b45309" stroke-width="1"/>
<rect x="40" y="120" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="150" width="520" height="30" fill="#86efac" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="180" width="520" height="30" fill="#fde68a" stroke="#b45309" stroke-width="1"/>
<rect x="40" y="210" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="240" width="520" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="50" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polare (90°-66°N): tundra, ghiacci</text>
<text x="300" y="80" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subpolare (66°-50°N): taiga</text>
<text x="300" y="110" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Temperato (50°-35°N): foreste, mediterraneo</text>
<text x="300" y="140" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subtropicale/desertico (35°-23°N)</text>
<text x="300" y="170" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Equatoriale: foresta pluviale</text>
<text x="300" y="200" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subtropicale/desertico (23°-35°S)</text>
<text x="300" y="230" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Temperato australe</text>
<text x="300" y="260" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polare australe: Antartide</text>
<text x="30" y="150" font-size="14" text-anchor="end" fill="#111827">N</text>
<text x="30" y="215" font-size="14" text-anchor="end" fill="#111827">S</text>
</svg>`,
      caption: "Schema semplificato dei grandi gruppi di climi per fasce di latitudine: tra Equatore e poli la sequenza è, grosso modo, quella delle fasce. Le deviazioni (mari, rilievi, correnti) rendono la carta reale molto più complessa."
    },
    {
      type: "text",
      title: "4. I biomi: gli ambienti naturali",
      html: `<p>Un <b>bioma</b> è un grande insieme di ecosistemi con vegetazione e fauna simili, determinato soprattutto da <b>temperatura e precipitazioni</b>. I principali:</p>
<ul>
<li>🌴 <b>Foresta pluviale equatoriale</b> (Amazzonia, Congo, Indonesia): sempre calda e piovosa, la <b>più grande biodiversità</b> del pianeta; suoli poveri nonostante la vegetazione rigogliosa, perché i nutrienti sono nella biomassa e non nel terreno.</li>
<li>🦁 <b>Savana</b> (Africa orientale, Brasile centrale, Australia settentrionale): erba alta e alberi sparsi, stagione secca e stagione delle piogge; grandi mandrie di erbivori.</li>
<li>🏜️ <b>Deserto</b> (Sahara, Arabia, Atacama, Gobi, Australia): meno di 250 mm di pioggia l'anno, forti escursioni termiche tra giorno e notte; piante succulente, animali notturni.</li>
<li>🌾 <b>Steppa e prateria</b> (Eurasia centrale, Grandi Pianure, pampa argentina): erba, poco albero, suoli molto fertili (i <i>cernozem</i> ucraini e russi), oggi in gran parte coltivati a cereali.</li>
<li>🌿 <b>Macchia mediterranea</b> (coste del Mediterraneo, California, Cile centrale, Sudafrica, Australia sud-occidentale): arbusti sempreverdi a foglie coriacee (leccio, mirto, lentisco) adattati alla siccità estiva e agli incendi.</li>
<li>🍂 <b>Foresta temperata</b> (Europa, Nord America orientale, Asia orientale): alberi a foglie caduche (querce, faggi), con le quattro stagioni.</li>
<li>🌲 <b>Taiga</b> (Canada, Scandinavia, Siberia): foresta di conifere, la più estesa del mondo; inverni lunghi e freddissimi.</li>
<li>❄️ <b>Tundra</b>: muschi e licheni; <b>permafrost</b> (suolo ghiacciato in profondità) che impedisce la crescita di alberi.</li>
<li>🏔️ <b>Ambienti d'alta quota</b>: la vegetazione cambia con l'altitudine in <b>fasce altitudinali</b> (latifoglie, conifere, pascoli, rocce e ghiacci), come cambierebbe viaggiando verso il polo.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Attività: a ogni ambiente il suo clima",
      widget: "classify",
      options: {
        groups: ["Caldo e umido tutto l'anno", "Arido", "Freddo"],
        items: [
          ["🌴 Foresta pluviale", 0],
          ["🏜️ Sahara", 1],
          ["❄️ Tundra", 2],
          ["🌲 Taiga", 2],
          ["🐪 Gobi", 1],
          ["🌊 Bacino del Congo", 0],
          ["🧊 Antartide", 2],
          ["🏜️ Atacama", 1]
        ]
      },
      caption: "Trascina o seleziona ogni ambiente nella categoria climatica giusta."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… esiste un deserto freddo e un deserto di ghiaccio?",
      html: `<p>L'<b>Antartide</b> è il deserto più grande del mondo: ci cadono meno di 200 mm di precipitazione l'anno (in media, molto meno all'interno). Un deserto non è definito dal caldo ma dalla <b>scarsità di pioggia</b>. L'Antartide è anche il continente più freddo: nel 1983 alla stazione russa di Vostok si misurò <b>−89,2 °C</b>, il minimo ufficiale sulla Terra. Il caldo record (54,4 °C) è stato registrato nella Death Valley, in California (nel 2020 e nel 2021).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… nell'Atacama può non piovere per anni?",
      html: `<p>Il <b>deserto di Atacama</b> (Cile) è il luogo non polare più arido del mondo: in alcune zone interne le piogge sono quasi assenti per anni. Il motivo è doppio: la <b>Cordigliera delle Ande</b> blocca le nuvole che arrivano dall'Amazzonia, e la <b>fredda corrente di Humboldt</b> raffredda l'aria sopra il Pacifico impedendo la formazione di piogge. La NASA usa l'Atacama per provare gli strumenti destinati a Marte.</p>`
    },
    {
      type: "text",
      title: "5. Il cambiamento climatico",
      html: `<p>Il <b>clima è sempre cambiato</b>: ere glaciali e interglaciali si sono alternate per cause naturali (variazioni dell'orbita terrestre, i cosiddetti <b>cicli di Milanković</b>, attività solare, eruzioni vulcaniche). Ma da circa due secoli il cambiamento è <b>troppo rapido</b> per essere spiegato solo da cause naturali: la comunità scientifica, raccolta nell'<b>IPCC</b> (Gruppo intergovernativo sul cambiamento climatico, creato nel 1988 dall'ONU e dall'OMM), conclude che la responsabilità è delle <b>attività umane</b>.</p>
<p>Il meccanismo è l'<b>effetto serra</b>: alcuni gas dell'atmosfera (<b>vapore acqueo</b>, <b>anidride carbonica CO₂</b>, <b>metano CH₄</b>, protossido di azoto N₂O) lasciano passare la luce del Sole ma trattengono parte del calore che la Terra emette sotto forma di infrarossi. L'effetto serra <b>naturale</b> è indispensabile: senza di esso la temperatura media della Terra sarebbe circa <b>−18 °C</b> invece di circa +15 °C. Il problema è l'effetto serra <b>aumentato</b> dalle emissioni umane.</p>
<ul>
<li>Bruciare <b>carbone, petrolio e gas</b> (combustibili fossili) libera CO₂ accumulata in milioni di anni.</li>
<li>La <b>deforestazione</b> riduce gli alberi che assorbono CO₂.</li>
<li>Gli <b>allevamenti</b> e le risaie producono metano, un gas serra molto più potente della CO₂ (ma più breve nell'atmosfera).</li>
</ul>
<p><b>I dati</b>: la concentrazione di CO₂ è passata da circa <b>280 ppm</b> (parti per milione) prima della Rivoluzione industriale a oltre <b>420 ppm</b> oggi, il livello più alto da almeno 800.000 anni (lo si sa dai gas intrappolati nelle bolle d'aria dei ghiacci antartici, le <i>carote di ghiaccio</i>). La temperatura media globale è salita di circa <b>1,1-1,2 °C</b> rispetto al periodo 1850-1900; gli ultimi anni sono i più caldi mai misurati. Il livello medio dei mari è aumentato di circa <b>20 cm</b> dal 1900 (per dilatazione termica dell'acqua e fusione dei ghiacci).</p>`
    },
    {
      type: "svg",
      title: "Come funziona l'effetto serra",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="0" y="40" width="600" height="60" fill="#bfdbfe" opacity="0.7"/>
<text x="300" y="75" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Gas serra (CO₂, CH₄, vapore acqueo)</text>
<circle cx="70" cy="40" r="26" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
<line x1="90" y1="55" x2="200" y2="260" stroke="#f59e0b" stroke-width="5"/>
<polygon points="200,260 188,238 210,243" fill="#f59e0b"/>
<rect x="0" y="260" width="600" height="40" fill="#86efac"/>
<line x1="260" y1="255" x2="260" y2="120" stroke="#dc2626" stroke-width="4"/>
<polygon points="260,110 250,130 270,130" fill="#dc2626"/>
<path d="M260 118 C285 95 330 95 345 118" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="345,125 337,106 355,108" fill="#dc2626"/>
<line x1="420" y1="255" x2="420" y2="10" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<polygon points="420,4 410,24 430,24" fill="#dc2626"/>
<text x="215" y="170" font-size="14" fill="#92400e" font-weight="bold">luce solare</text>
<text x="430" y="150" font-size="14" fill="#991b1b" font-weight="bold">calore (infrarosso)</text>
<text x="430" y="170" font-size="14" fill="#991b1b" font-weight="bold">che esce nello spazio</text>
<text x="275" y="205" font-size="14" fill="#991b1b" font-weight="bold">calore trattenuto</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Superficie terrestre</text>
</svg>`,
      caption: "Una parte del calore emesso dalla Terra scappa nello spazio, una parte è assorbita dai gas serra e rimandata verso il basso. Più gas serra ci sono, più calore resta."
    },
    {
      type: "example",
      title: "Esempio pratico: le conseguenze nel Mediterraneo e in Italia",
      html: `<p>Il bacino del Mediterraneo è considerato un <b>\"hot spot\"</b> climatico: si scalda più della media mondiale. In Italia si osservano già:</p>
<ul>
<li><b>ondate di calore</b> più frequenti e più lunghe (l'estate 2003 e quella 2022 sono tra le più calde);</li>
<li><b>siccità</b> e riduzione dei ghiacciai alpini: la Marmolada ha perso gran parte del suo ghiacciaio, e nel luglio 2022 un distacco ha causato una tragedia;</li>
<li><b>piogge intense</b> concentrate in poco tempo, con alluvioni (Emilia-Romagna, maggio 2023);</li>
<li><b>innalzamento del mare</b> e rischio per le coste basse, come la laguna di Venezia e il delta del Po;</li>
<li>cambiamenti per l'agricoltura (vendemmie anticipate, nuove malattie delle piante) e la salute.</li>
</ul>
<p>Non bisogna confondere l'<b>adattamento</b> (prepararsi: dighe, nuove colture, piani anticalore) con la <b>mitigazione</b> (ridurre le emissioni per rallentare il fenomeno): servono entrambi.</p>`
    },
    {
      type: "decision",
      title: "Che cosa fare? Una scelta per una città costiera",
      html: `<p>Sei il sindaco di una città costiera a rischio di mareggiate sempre più forti. Hai un budget limitato e due priorità: <b>proteggere la costa</b> e <b>ridurre le emissioni</b> della città.</p>`,
      question: "Quale strategia ti sembra più efficace nel lungo periodo?",
      options: [
        { label: "Solo dighe e barriere", outcome: "Protegge nel breve periodo, ma non ferma le cause e può costare moltissimo; le barriere rigide a volte danneggiano le spiagge vicine." },
        { label: "Solo ridurre le emissioni locali", outcome: "Utile, ma da sola una città non può fermare il cambiamento: il livello del mare è comunque già in aumento per le emissioni passate." },
        { label: "Entrambe: adattarsi e mitigare", outcome: "È l'approccio indicato dall'IPCC: adattarsi ai cambiamenti inevitabili e allo stesso tempo ridurre le emissioni per evitare i peggiori scenari." }
      ],
      answer: 2,
      explain: "L'Accordo di Parigi (2015) prevede di mantenere l'aumento di temperatura \"ben al di sotto\" di 2 °C rispetto all'epoca preindustriale e di proseguire gli sforzi per limitarlo a 1,5 °C: mitigazione e adattamento procedono insieme."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire clima e cambiamento climatico",
      intro: "Il clima è un sistema complesso: ecco tre analogie per afferrarne i meccanismi.",
      tabs: [
        {
          label: "🚗 L'auto al sole",
          html: `<p>Lascia un'automobile al sole con i finestrini chiusi: dentro fa molto più caldo che fuori. La luce entra attraverso il vetro, scalda gli interni; questi emettono infrarossi, che il vetro <b>trattiene</b>. I gas serra fanno la stessa cosa all'atmosfera: sono il vetro dell'auto (anche se l'atmosfera non è una serra con le pareti chiuse, e il meccanismo fisico è un po' diverso, l'analogia rende l'idea). Aggiungere CO₂ è come mettere un vetro più spesso.</p>`
        },
        {
          label: "🛁 La vasca da bagno",
          html: `<p>Il carbonio è come l'acqua di una vasca: i rubinetti sono le emissioni, lo scarico è l'assorbimento di foreste e oceani. Oggi i rubinetti versano più di quanto lo scarico riesca a smaltire, quindi <b>il livello sale</b>. Se riduci le emissioni a metà, la vasca continua a riempirsi, solo più lentamente: per fermarla servono emissioni nette zero (come in Europa, che mira alla neutralità climatica entro il <b>2050</b>).</p>`
        },
        {
          label: "🧊 Le carote di ghiaccio",
          html: `<p>Gli scienziati perforano i ghiacci dell'Antartide e della Groenlandia ed estraggono cilindri di ghiaccio profondo anche più di 3 km. Il ghiaccio si forma strato su strato come gli anelli di un albero e intrappola bollicine d'aria antica: misurando CO₂ e gli isotopi dell'ossigeno si ricostruiscono <b>temperatura e atmosfera di centinaia di migliaia di anni fa</b>. La carota di Vostok e quella del progetto EPICA (Dome C) mostrano che CO₂ e temperatura sono sempre andate di pari passo.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#f0f9ff"/><rect x="40" y="20" width="60" height="160" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/><line x1="40" y1="60" x2="100" y2="60" stroke="#0369a1" stroke-width="2"/><line x1="40" y1="100" x2="100" y2="100" stroke="#0369a1" stroke-width="2"/><line x1="40" y1="140" x2="100" y2="140" stroke="#0369a1" stroke-width="2"/><text x="120" y="45" font-size="15" fill="#111827">strati recenti (alta CO₂)</text><text x="120" y="125" font-size="15" fill="#111827">strati antichi (CO₂ più bassa)</text><text x="120" y="175" font-size="15" fill="#111827">fino a 800.000 anni fa</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché il clima cambia da luogo a luogo e nel tempo",
      nodes: [
        { id: "sole", label: "Energia del Sole", x: 50, y: 6, color: "#f59e0b", html: "Motore del clima: riscalda la Terra in modo disuguale.", why: "La Terra è sferica e inclinata di circa 23,4° sull'asse: i raggi arrivano più o meno inclinati e le stagioni derivano dall'inclinazione, non dalla distanza dal Sole (in gennaio la Terra è più vicina al Sole, ma nell'emisfero nord è inverno)." },
        { id: "lat", label: "Latitudine e altitudine", x: 18, y: 32, color: "#2563eb", html: "Più lontano dall'Equatore e più in alto = più freddo.", why: "Ai poli i raggi sono obliqui e attraversano più atmosfera; in quota l'aria è più rarefatta e trattiene meno calore. Il gradiente di 6,5 °C/km si ricava da misure con palloni sonda." },
        { id: "mare", label: "Mari e correnti", x: 82, y: 32, color: "#0ea5e9", html: "Mitigano le temperature e trasportano calore.", why: "L'acqua ha un calore specifico circa quattro volte quello dell'aria secca: ci vuole molta energia per scaldarla o raffreddarla. Le correnti nascono da venti, rotazione terrestre e differenze di temperatura e salinità (circolazione termoalina)." },
        { id: "clima", label: "Clima e Köppen", x: 50, y: 52, color: "#16a34a", html: "Cinque gruppi: A, B, C, D, E.", why: "Köppen osservò che la vegetazione riflette il clima e usò i confini fra biomi come guida per definire i confini fra climi: la classificazione parte dalle piante." },
        { id: "bioma", label: "Biomi", x: 18, y: 76, color: "#84cc16", html: "Foreste, savane, deserti, steppe, tundra…", why: "Ogni vegetale ha un intervallo di temperatura e acqua in cui sopravvive; il bioma è la risposta evolutiva di vegetazione e animali alle condizioni climatiche di quella zona." },
        { id: "serra", label: "Effetto serra", x: 82, y: 76, color: "#ef4444", html: "I gas serra trattengono parte del calore.", why: "Fu intuito da Joseph Fourier (1824), dimostrato in laboratorio da John Tyndall (1859) e calcolato da Svante Arrhenius (1896), che stimò l'effetto di un raddoppio della CO₂ sulla temperatura." },
        { id: "cc", label: "Cambiamento climatico", x: 50, y: 94, color: "#dc2626", html: "Riscaldamento rapido dovuto alle emissioni umane.", why: "Le misure di CO₂ sul vulcano Mauna Loa (Hawaii) iniziate da Charles Keeling nel 1958 mostrano la crescita continua della CO₂ (la \"curva di Keeling\"); l'IPCC dal 1990 riassume le prove nei suoi rapporti." }
      ],
      edges: [
        ["sole", "lat", "dipende da"],
        ["sole", "mare", "riscalda"],
        ["lat", "clima", "determinano il"],
        ["mare", "clima", "determinano il"],
        ["clima", "bioma", "plasma i"],
        ["sole", "serra", "intrappolato da"],
        ["serra", "cc", "amplificato → "],
        ["cc", "clima", "modifica il"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Tempo</b> = stato momentaneo dell'atmosfera; <b>clima</b> = medie su molti anni.</li>
<li>Fattori: latitudine, altitudine (−6,5 °C/1.000 m), distanza dal mare, correnti, venti, rilievi.</li>
<li>Köppen: A tropicale, B arido, C temperato, D continentale, E polare.</li>
<li>Biomi: foresta pluviale, savana, deserto, steppa, macchia mediterranea, foresta temperata, taiga, tundra.</li>
<li><b>Effetto serra</b> naturale (+15 °C invece di −18 °C) e <b>effetto serra aumentato</b> dalle emissioni umane (CO₂ da ~280 a oltre 420 ppm; +1,1-1,2 °C).</li>
<li>Risposte: <b>mitigazione</b> e <b>adattamento</b>; Accordo di Parigi 2015.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: biomi e cambiamento climatico",
      questions: [
        { type: "mc", q: "Quale bioma ha il suolo ghiacciato in profondità (permafrost)?", options: ["Savana", "Tundra", "Macchia mediterranea"], answer: 1, explain: "La tundra ha il permafrost, che impedisce agli alberi di mettere radici profonde." },
        { type: "tf", q: "Senza effetto serra naturale la Terra sarebbe più calda.", answer: false, explain: "Senza i gas serra naturali la temperatura media sarebbe intorno a −18 °C: l'effetto serra naturale è essenziale per la vita." },
        { type: "mc", q: "Ridurre le emissioni di gas serra per rallentare il riscaldamento si chiama…", options: ["Adattamento", "Mitigazione", "Compensazione"], answer: 1, explain: "Mitigazione = ridurre le cause; adattamento = ridurre i danni degli effetti già in corso." }
      ]
    }
  ],
  glossary: [
    { t: "Clima", d: "Insieme delle condizioni atmosferiche medie di un luogo, valutate su un lungo periodo (almeno 30 anni)." },
    { t: "Tempo atmosferico", d: "Stato dell'atmosfera in un luogo e in un momento preciso." },
    { t: "Climogramma", d: "Grafico che riporta le temperature medie mensili (linea) e le precipitazioni (barre) di un luogo." },
    { t: "Escursione termica", d: "Differenza fra temperatura massima e minima (giornaliera o annua)." },
    { t: "Bioma", d: "Grande insieme di ecosistemi con vegetazione e fauna simili, dovuto a un certo clima." },
    { t: "Permafrost", d: "Terreno che rimane ghiacciato per tutto l'anno, tipico di tundra e taiga settentrionale." },
    { t: "Effetto serra", d: "Fenomeno per cui alcuni gas atmosferici trattengono parte del calore emesso dalla Terra." },
    { t: "IPCC", d: "Gruppo intergovernativo sul cambiamento climatico: raccoglie e sintetizza le ricerche scientifiche sul clima." },
    { t: "Mitigazione", d: "Insieme di azioni per ridurre le emissioni di gas serra e rallentare il cambiamento climatico." },
    { t: "Adattamento", d: "Insieme di azioni per ridurre i danni degli effetti del cambiamento climatico già in corso." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è la differenza fra tempo e clima?", options: ["Nessuna, sono sinonimi", "Il tempo è lo stato momentaneo, il clima è la media su molti anni", "Il clima cambia ogni giorno, il tempo ogni anno"], answer: 1, explain: "Il clima descrive le condizioni medie di un luogo su un lungo periodo; il tempo è ciò che accade in un momento preciso." },
      { type: "num", q: "In una località a livello del mare ci sono 24 °C. Quanti °C ti aspetti a 2.000 m di quota (con gradiente di 6,5 °C/km)?", answer: 11, tol: 0.5, unit: "°C", explain: "Calo: 2 × 6,5 = 13 °C. Temperatura: 24 − 13 = 11 °C." },
      { type: "mc", q: "Perché Bergen (Norvegia) ha inverni più miti dei luoghi canadesi alla stessa latitudine?", options: ["Per la Corrente del Golfo", "Per la maggiore altitudine", "Per i monsoni"], answer: 0, explain: "La Corrente del Golfo trasporta acque calde nell'Atlantico del Nord, mitigando il clima norvegese." },
      { type: "mc", q: "Il clima mediterraneo si distingue per…", options: ["estate secca e inverno mite e piovoso", "piogge tutto l'anno ed estati fresche", "inverni rigidissimi"], answer: 0, explain: "Estati calde e asciutte, inverni miti e umidi: è il clima delle coste del Mediterraneo." },
      { type: "text", q: "Come si chiama il grande bioma di foresta di conifere dell'emisfero nord (Canada, Scandinavia, Siberia)?", answer: ["taiga", "la taiga"], explain: "La taiga è la più grande foresta del mondo, di conifere." },
      { type: "tf", q: "Gli effetti del cambiamento climatico riguardano solo le regioni polari.", answer: false, explain: "Ci sono effetti ovunque: ondate di calore, siccità, alluvioni, innalzamento dei mari, ghiacciai alpini in ritiro." },
      { type: "order", q: "Metti in ordine dalla più bassa alla più alta concentrazione di CO₂ nell'atmosfera.", items: ["Epoca preindustriale (~280 ppm)", "Anni '50 (~315 ppm)", "Anni 2000 (~370 ppm)", "Oggi (oltre 420 ppm)"], explain: "La CO₂ è cresciuta in modo continuo dalla Rivoluzione industriale; la curva di Keeling lo mostra dal 1958." },
      { type: "mc", q: "Quale gruppo di Köppen comprende i climi senza nessun mese sopra i 10 °C?", options: ["A", "C", "E"], answer: 2, explain: "Il gruppo E è quello dei climi polari: tundra e ghiacci." },
      { type: "num", q: "Qual era la temperatura media della Terra senza effetto serra naturale (in °C)?", answer: -18, tol: 1, unit: "°C", explain: "Circa −18 °C, contro i +15 °C attuali: l'effetto serra naturale vale circa 33 °C." },
      { type: "mc", q: "Quale di queste azioni è di adattamento (e non di mitigazione)?", options: ["Costruire barriere contro le mareggiate", "Passare all'energia solare", "Piantare foreste per assorbire CO₂"], answer: 0, explain: "Le barriere riducono i danni di un effetto già in corso; le altre due azioni riducono la CO₂ e quindi mitigano." }
    ]
  }
});

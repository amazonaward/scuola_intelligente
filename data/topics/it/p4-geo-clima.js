TOPIC('it', {
  id: `p4-geo-clima`,
  title: `Il clima`,
  intro: `"Oggi piove" e "a Palermo gli inverni sono miti" non sono la stessa cosa! La prima frase parla del <b>tempo atmosferico</b>, la seconda del <b>clima</b>. In questa lezione scopriamo la differenza, gli strumenti per misurare il tempo, perché sulla Terra ci sono zone calde e zone fredde (le <b>fasce climatiche</b>) e quali climi ci sono in Italia.`,
  minutes: 30,
  sections: [
    {
      type: `text`,
      title: `1. Tempo atmosferico e clima: non sono la stessa cosa`,
      html: `<p>Il <b>tempo atmosferico</b> è la situazione dell'aria in un luogo e in un <b>momento preciso</b>: oggi, stamattina, adesso. Può cambiare in poche ore: c'è il sole, poi arriva un temporale.</p>
<p>Il <b>clima</b> invece è il tempo atmosferico "medio" di una regione osservato per <b>tanti anni</b> (gli scienziati usano almeno <b>30 anni</b> di misure). Dice come sono di solito le stagioni in quel luogo.</p>
<table>
<tr><th>Tempo atmosferico</th><th>Clima</th></tr>
<tr><td>"Oggi a Milano c'è nebbia."</td><td>"In Pianura Padana d'inverno c'è spesso nebbia."</td></tr>
<tr><td>"Domani a Roma farà 30 °C."</td><td>"A Roma le estati sono calde e secche."</td></tr>
<tr><td>Cambia di ora in ora</td><td>Cambia molto lentamente (decenni, secoli)</td></tr>
</table>
<p>Un modo facile per ricordarlo: <b>il tempo è il tuo umore di oggi, il clima è il tuo carattere</b>.</p>`
    },
    {
      type: `text`,
      title: `2. Gli elementi del clima e gli strumenti per misurarli`,
      html: `<p>Per descrivere il tempo e il clima i meteorologi misurano alcuni <b>elementi</b>:</p>
<ul>
<li><b>temperatura</b> dell'aria (quanto fa caldo o freddo) → si misura con il <b>termometro</b>, in gradi Celsius (°C);</li>
<li><b>precipitazioni</b> (pioggia, neve, grandine) → si misurano con il <b>pluviometro</b>, in millimetri (mm): 1 mm = 1 litro d'acqua su 1 metro quadrato;</li>
<li><b>umidità</b> (quanto vapore acqueo c'è nell'aria) → si misura con l'<b>igrometro</b>;</li>
<li><b>pressione atmosferica</b> (il "peso" dell'aria sopra di noi) → si misura con il <b>barometro</b>, inventato da <b>Evangelista Torricelli</b> nel 1643. Alta pressione = di solito bel tempo; bassa pressione = di solito nuvole e pioggia;</li>
<li><b>venti</b> (aria che si sposta da zone di alta pressione a zone di bassa pressione) → la <b>banderuola</b> (o manica a vento) indica la direzione, l'<b>anemometro</b> la velocità.</li>
</ul>
<p>Tutti questi strumenti si trovano insieme nelle <b>stazioni meteorologiche</b>. Oggi ci aiutano anche i <b>satelliti</b>, che fotografano le nuvole dallo spazio.</p>`
    },
    {
      type: `widget`,
      title: `Abbina lo strumento a ciò che misura`,
      widget: `match`,
      options: {
        pairs: [
          [`🌡️ Termometro`, `Temperatura`],
          [`🧪 Pluviometro`, `Pioggia caduta (mm)`],
          [`💧 Igrometro`, `Umidità dell'aria`],
          [`⏲️ Barometro`, `Pressione atmosferica`],
          [`🌀 Anemometro`, `Velocità del vento`],
          [`🚩 Banderuola`, `Direzione del vento`]
        ]
      },
      caption: `Gli strumenti di una stazione meteorologica.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: tempo o clima?`,
      questions: [
        { type: `mc`, q: `"Ieri a Napoli è grandinato." Questa frase parla di…`, options: [`tempo atmosferico`, `clima`], answer: 0, explain: `Parla di un momento preciso: è tempo atmosferico.` },
        { type: `mc`, q: `"In Sicilia piove poco d'estate." Questa frase parla di…`, options: [`tempo atmosferico`, `clima`], answer: 1, explain: `Descrive una situazione che si ripete ogni anno: è clima.` },
        { type: `mc`, q: `Con quale strumento si misura la pressione atmosferica?`, options: [`Termometro`, `Barometro`, `Pluviometro`], answer: 1, explain: `Il barometro, inventato da Torricelli.` }
      ]
    },
    {
      type: `text`,
      title: `3. I fattori del clima: perché fa più caldo qui che lì?`,
      html: `<p>Il clima di un luogo dipende da alcuni <b>fattori</b>:</p>
<ol>
<li><b>La latitudine</b> (la distanza dall'Equatore). Vicino all'Equatore i raggi del Sole arrivano quasi <b>perpendicolari</b> e scaldano molto; vicino ai Poli arrivano <b>inclinati</b>, la stessa luce si sparpaglia su una superficie più grande e scalda poco.</li>
<li><b>L'altitudine</b> (l'altezza sul livello del mare). Più si sale, più fa freddo: circa <b>6 °C in meno ogni 1000 m</b> (cioè circa 0,6 °C ogni 100 m). Per questo sulle montagne c'è la neve anche d'estate.</li>
<li><b>La vicinanza del mare</b>. Il mare si scalda e si raffredda lentamente: d'estate rinfresca e d'inverno intiepidisce. Sulle coste le temperature sono più <b>miti</b>; nell'interno, lontano dal mare, gli inverni sono più freddi e le estati più calde (clima <b>continentale</b>).</li>
<li><b>I venti e le correnti marine</b>. La <b>Corrente del Golfo</b> porta acqua calda dai Caraibi verso l'Europa del Nord: per questo Londra ha inverni più miti di città canadesi alla stessa latitudine.</li>
<li><b>Le catene montuose</b>, che possono bloccare venti freddi o nuvole di pioggia. Le <b>Alpi</b>, per esempio, riparano l'Italia dai venti freddi del Nord.</li>
</ol>`
    },
    {
      type: `svg`,
      title: `Perché all'Equatore fa più caldo?`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#0f172a"/>
<circle cx="380" cy="160" r="140" fill="#3b82f6"/>
<path d="M260 90 C300 70 330 95 350 80 C380 60 420 80 440 70 L470 95 C430 110 400 100 370 115 C330 130 290 110 260 120 Z" fill="#22c55e"/>
<path d="M300 190 C330 170 370 200 400 180 C430 170 460 200 490 190 L480 240 C440 250 400 230 360 245 C330 250 310 230 300 230 Z" fill="#22c55e"/>
<line x1="240" y1="160" x2="520" y2="160" stroke="#fde047" stroke-width="2" stroke-dasharray="6 4"/>
<text x="525" y="165" font-size="14" fill="#fde047">Equatore</text>
<circle cx="40" cy="160" r="30" fill="#facc15"/>
<text x="40" y="215" font-size="15" fill="#fde047" text-anchor="middle">Sole</text>
<line x1="80" y1="140" x2="240" y2="140" stroke="#facc15" stroke-width="5"/>
<line x1="80" y1="180" x2="240" y2="180" stroke="#facc15" stroke-width="5"/>
<rect x="238" y="140" width="10" height="40" fill="#ef4444"/>
<text x="150" y="130" font-size="15" fill="#fecaca">raggi dritti:</text>
<text x="150" y="200" font-size="15" fill="#fecaca">luce concentrata = CALDO</text>
<line x1="80" y1="40" x2="300" y2="40" stroke="#facc15" stroke-width="5"/>
<line x1="80" y1="70" x2="270" y2="70" stroke="#facc15" stroke-width="5"/>
<path d="M300 40 Q285 52 270 70" fill="none" stroke="#38bdf8" stroke-width="10"/>
<text x="20" y="98" font-size="15" fill="#bae6fd">raggi inclinati:</text>
<text x="20" y="116" font-size="15" fill="#bae6fd">luce sparpagliata = FREDDO</text>
<circle cx="380" cy="22" r="12" fill="#f8fafc"/>
<text x="400" y="28" font-size="14" fill="#f8fafc">Polo Nord</text>
</svg>`,
      caption: `La stessa quantità di raggi (due linee gialle) scalda un pezzetto piccolo all'Equatore (rosso) e un pezzo molto più grande vicino al Polo (azzurro). Prova con una torcia: puntala dritta sul tavolo, poi inclinata!`
    },
    {
      type: `text`,
      title: `4. Le fasce climatiche della Terra`,
      html: `<p>Poiché la Terra è una sfera, il Sole la scalda in modo diverso a seconda della latitudine. Così si formano delle <b>fasce climatiche</b>, come strisce orizzontali sul globo, separate da alcuni <b>paralleli</b> speciali:</p>
<ul>
<li>la <b>fascia torrida</b> (o tropicale), tra il <b>Tropico del Cancro</b> e il <b>Tropico del Capricorno</b> (circa 23° nord e sud): fa caldo tutto l'anno. Qui ci sono il clima <b>equatoriale</b> (caldo e piovoso, con foreste pluviali come l'Amazzonia), il clima <b>tropicale</b> (con una stagione secca e una delle piogge: la savana) e il clima <b>desertico</b> (quasi senza piogge: il Sahara);</li>
<li>le due <b>fasce temperate</b>, tra i Tropici e i <b>Circoli polari</b> (circa 66° nord e sud): ci sono <b>quattro stagioni</b> ben distinte. Qui si trovano il clima <b>mediterraneo</b>, quello <b>oceanico</b> e quello <b>continentale</b>. L'Italia è nella fascia temperata nord;</li>
<li>le due <b>fasce polari</b> (o glaciali), oltre i Circoli polari: freddissimo tutto l'anno, ghiacci e tundra. In inverno c'è la <b>notte polare</b>, in estate il <b>giorno polare</b> (il Sole non tramonta mai!).</li>
</ul>
<p>Le fasce sono cinque in tutto: <b>1 torrida, 2 temperate, 2 polari</b>.</p>`
    },
    {
      type: `svg`,
      title: `Le cinque fasce climatiche`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<defs><clipPath id="clipTerraClima"><circle cx="200" cy="160" r="140"/></clipPath></defs>
<g clip-path="url(#clipTerraClima)">
<rect x="60" y="20" width="280" height="45" fill="#bae6fd"/>
<rect x="60" y="65" width="280" height="62" fill="#86efac"/>
<rect x="60" y="127" width="280" height="66" fill="#fca5a5"/>
<rect x="60" y="193" width="280" height="62" fill="#86efac"/>
<rect x="60" y="255" width="280" height="45" fill="#bae6fd"/>
</g>
<circle cx="200" cy="160" r="140" fill="none" stroke="#1e293b" stroke-width="3"/>
<line x1="60" y1="160" x2="340" y2="160" stroke="#dc2626" stroke-width="2"/>
<line x1="70" y1="127" x2="330" y2="127" stroke="#1e293b" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="70" y1="193" x2="330" y2="193" stroke="#1e293b" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="110" y1="65" x2="290" y2="65" stroke="#1e293b" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="110" y1="255" x2="290" y2="255" stroke="#1e293b" stroke-width="1" stroke-dasharray="5 4"/>
<text x="360" y="47" font-size="15" fill="#0369a1" font-weight="bold">fascia polare artica</text>
<text x="360" y="70" font-size="14" fill="#334155">— Circolo polare artico (66°N)</text>
<text x="360" y="100" font-size="15" fill="#15803d" font-weight="bold">fascia temperata nord (Italia)</text>
<text x="360" y="130" font-size="14" fill="#334155">— Tropico del Cancro (23°N)</text>
<text x="360" y="165" font-size="15" fill="#b91c1c" font-weight="bold">fascia torrida — Equatore</text>
<text x="360" y="198" font-size="14" fill="#334155">— Tropico del Capricorno (23°S)</text>
<text x="360" y="228" font-size="15" fill="#15803d" font-weight="bold">fascia temperata sud</text>
<text x="360" y="258" font-size="14" fill="#334155">— Circolo polare antartico (66°S)</text>
<text x="360" y="285" font-size="15" fill="#0369a1" font-weight="bold">fascia polare antartica</text>
<circle cx="245" cy="100" r="6" fill="#111827"/>
<text x="190" y="96" font-size="14" fill="#111827">Italia</text>
</svg>`,
      caption: `Le fasce climatiche sono come cinture intorno alla Terra: più ci si allontana dall'Equatore, più fa freddo.`
    },
    {
      type: `3d`,
      title: `I climi sul globo`,
      scene: `globe`,
      caption: `Ruota il globo: ogni punto è un esempio di clima. Guarda a quale latitudine si trova rispetto all'Equatore.`,
      options: {
        points: [
          { lat: -3.1, lon: -60.0, label: `Manaus: equatoriale (foresta pluviale)`, color: `#16a34a` },
          { lat: 1.3, lon: 103.8, label: `Singapore: equatoriale`, color: `#16a34a` },
          { lat: -2.3, lon: 34.8, label: `Serengeti: tropicale (savana)`, color: `#eab308` },
          { lat: 23.4, lon: 25.7, label: `Sahara: desertico`, color: `#f97316` },
          { lat: 41.9, lon: 12.5, label: `Roma: mediterraneo`, color: `#ef4444` },
          { lat: 51.5, lon: -0.13, label: `Londra: oceanico`, color: `#3b82f6` },
          { lat: 55.75, lon: 37.62, label: `Mosca: continentale`, color: `#8b5cf6` },
          { lat: 62.0, lon: 129.7, label: `Jakutsk: freddo (taiga)`, color: `#0ea5e9` },
          { lat: 72.0, lon: -40.0, label: `Groenlandia: polare`, color: `#e0f2fe` },
          { lat: -78.5, lon: 106.8, label: `Vostok (Antartide): polare`, color: `#e0f2fe` }
        ]
      }
    },
    {
      type: `quiz`,
      title: `Mini-quiz: fattori e fasce`,
      questions: [
        { type: `num`, q: `Quante sono in tutto le fasce climatiche della Terra?`, answer: 5, explain: `1 torrida, 2 temperate, 2 polari.` },
        { type: `mc`, q: `In quale fascia climatica si trova l'Italia?`, options: [`Torrida`, `Temperata nord`, `Polare`], answer: 1, explain: `L'Italia è nella fascia temperata dell'emisfero nord.` },
        { type: `num`, q: `Al mare ci sono 20 °C. Quanti gradi ci saranno, più o meno, su una montagna alta 2000 m? (circa 6 °C in meno ogni 1000 m)`, answer: 8, tol: 1, unit: `°C`, explain: `2000 m = 2 × 6 °C = 12 °C in meno: 20 − 12 = 8 °C.` }
      ]
    },
    {
      type: `text`,
      title: `5. I climi dell'Italia`,
      html: `<p>L'Italia ha un clima generalmente <b>temperato</b>, grazie alla sua posizione e al Mediterraneo. Ma è lunga e montuosa, quindi ci sono climi diversi:</p>
<ul>
<li><b>clima alpino</b> (sulle Alpi e sulle cime più alte degli Appennini): inverni lunghi e freddi con molta neve, estati fresche e brevi, temporali frequenti;</li>
<li><b>clima continentale</b> (o padano, nella Pianura Padana): inverni freddi e umidi con molta <b>nebbia</b>, estati calde e <b>afose</b> (molto umide); il mare è lontano e le Alpi e gli Appennini chiudono la pianura;</li>
<li><b>clima appenninico</b> (sulle zone interne degli Appennini): inverni freddi e nevosi, estati abbastanza calde;</li>
<li><b>clima mediterraneo</b> (lungo le coste, al Centro-Sud e sulle isole): inverni <b>miti</b> e piovosi, estati <b>calde e secche</b>. Qui crescono ulivi, agrumi, viti e la <b>macchia mediterranea</b>.</li>
</ul>
<p>Il clima influenza tutto: le piante che crescono, le coltivazioni, la forma delle case (tetti spioventi in montagna per far scivolare la neve, case bianche al Sud per riflettere il Sole), i cibi e perfino le feste.</p>`
    },
    {
      type: `widget`,
      title: `Gioco: che clima è?`,
      widget: `classify`,
      options: {
        groups: [`Alpino`, `Continentale (padano)`, `Mediterraneo`],
        items: [
          [`❄️ Neve per molti mesi`, 0],
          [`🏔️ Estati fresche e brevi`, 0],
          [`🌲 Boschi di abeti e larici`, 0],
          [`🌫️ Nebbia d'inverno`, 1],
          [`🥵 Estate afosa e umida`, 1],
          [`🌾 Risaie e campi di mais`, 1],
          [`🫒 Ulivi e agrumi`, 2],
          [`☀️ Estate calda e secca`, 2],
          [`🌸 Inverno mite`, 2]
        ]
      },
      caption: `Ogni clima ha le sue caratteristiche, le sue piante e le sue coltivazioni.`
    },
    {
      type: `example`,
      title: `Esempio pratico: leggere un climatogramma`,
      html: `<p>Un <b>climatogramma</b> (o diagramma climatico) mostra in un solo grafico le <b>temperature medie</b> (linea) e le <b>piogge</b> (colonne) di ogni mese in un luogo. Guarda quelli semplificati di Palermo e Milano qui sotto e confronta:</p>
<ul>
<li>a <b>Palermo</b> (clima mediterraneo) la temperatura non scende mai molto (circa 12 °C a gennaio) e d'estate quasi non piove;</li>
<li>a <b>Milano</b> (clima continentale) a gennaio la media è vicina a 3–4 °C, e piove abbastanza in tutte le stagioni, con più pioggia in primavera e autunno.</li>
</ul>
<p>Con un climatogramma puoi capire il clima di un posto anche senza esserci mai stato!</p>`
    },
    {
      type: `svg`,
      title: `Climatogrammi semplificati: Palermo e Milano`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="150" y="22" font-size="17" fill="#b91c1c" text-anchor="middle" font-weight="bold">Palermo (mediterraneo)</text>
<text x="450" y="22" font-size="17" fill="#6d28d9" text-anchor="middle" font-weight="bold">Milano (continentale)</text>
<line x1="30" y1="250" x2="280" y2="250" stroke="#334155" stroke-width="2"/>
<line x1="330" y1="250" x2="580" y2="250" stroke="#334155" stroke-width="2"/>
<g fill="#60a5fa">
<rect x="35" y="180" width="14" height="70"/><rect x="55" y="190" width="14" height="60"/><rect x="75" y="200" width="14" height="50"/><rect x="95" y="215" width="14" height="35"/>
<rect x="115" y="232" width="14" height="18"/><rect x="135" y="242" width="14" height="8"/><rect x="155" y="246" width="14" height="4"/><rect x="175" y="242" width="14" height="8"/>
<rect x="195" y="220" width="14" height="30"/><rect x="215" y="200" width="14" height="50"/><rect x="235" y="185" width="14" height="65"/><rect x="255" y="175" width="14" height="75"/>
<rect x="335" y="200" width="14" height="50"/><rect x="355" y="205" width="14" height="45"/><rect x="375" y="190" width="14" height="60"/><rect x="395" y="170" width="14" height="80"/>
<rect x="415" y="160" width="14" height="90"/><rect x="435" y="180" width="14" height="70"/><rect x="455" y="190" width="14" height="60"/><rect x="475" y="180" width="14" height="70"/>
<rect x="495" y="170" width="14" height="80"/><rect x="515" y="150" width="14" height="100"/><rect x="535" y="160" width="14" height="90"/><rect x="555" y="190" width="14" height="60"/>
</g>
<polyline points="42,154 62,154 82,146 102,136 122,118 142,98 162,84 182,82 202,96 222,112 242,130 262,146" fill="none" stroke="#dc2626" stroke-width="4"/>
<polyline points="342,218 362,206 382,182 402,162 422,138 442,118 462,104 482,108 502,132 522,158 542,186 562,212" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="42" y="270" font-size="14" fill="#334155">G</text>
<text x="255" y="270" font-size="14" fill="#334155">D</text>
<text x="342" y="270" font-size="14" fill="#334155">G</text>
<text x="555" y="270" font-size="14" fill="#334155">D</text>
<text x="150" y="292" font-size="14" fill="#334155" text-anchor="middle">colonne blu = pioggia</text>
<text x="450" y="292" font-size="14" fill="#334155" text-anchor="middle">linea rossa = temperatura</text>
</svg>`,
      caption: `Andamento indicativo (non in scala esatta). A Palermo d'estate le colonne della pioggia quasi spariscono; a Milano la linea della temperatura parte molto più in basso d'inverno.`
    },
    {
      type: `example`,
      title: `Esempio pratico: perché al mare d'inverno fa meno freddo?`,
      html: `<p>Fai un esperimento: metti al sole un secchio d'acqua e un secchio di sabbia. Dopo un'ora tocca: la <b>sabbia</b> scotta, l'<b>acqua</b> è appena tiepida. La sera, invece, la sabbia è già fredda e l'acqua è ancora tiepida.</p>
<p>Il mare fa lo stesso, ma in grande: d'estate "assorbe" il calore piano piano, d'inverno lo "restituisce" piano piano. Per questo <b>Genova</b> (sul mare) ha in gennaio una media di circa 8 °C, mentre <b>Milano</b>, a soli 120 km ma nella pianura chiusa, ha circa 3–4 °C.</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… il record di caldo europeo è in Italia?`,
      html: `<p>L'<b>11 agosto 2021</b>, vicino a <b>Siracusa</b>, in Sicilia, una stazione meteorologica ha registrato <b>48,8 °C</b>: è la temperatura più alta mai misurata in Europa, riconosciuta dall'Organizzazione Meteorologica Mondiale.</p>
<p>Il record di freddo della Terra, invece, è di <b>−89,2 °C</b>, misurato nel 1983 alla stazione russa di <b>Vostok</b>, in Antartide.</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… il clima sta cambiando?`,
      html: `<p>Da quando l'uomo brucia grandi quantità di carbone, petrolio e gas (dall'Ottocento), nell'aria è aumentata l'<b>anidride carbonica</b>, un gas che trattiene il calore come la coperta di una serra (<b>effetto serra</b>). La temperatura media della Terra è salita di circa <b>1,2 °C</b> rispetto alla fine dell'Ottocento.</p>
<p>Sembra poco, ma ha già effetti: i <b>ghiacciai alpini</b> si ritirano (alcuni sono già scomparsi), le ondate di calore sono più frequenti e il livello del mare sale. Per questo quasi tutti i Paesi del mondo hanno firmato nel 2015 l'<b>Accordo di Parigi</b> per ridurre queste emissioni.</p>`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capire il clima`,
      intro: `Se le fasce e i fattori ti sembrano complicati, prova questi altri punti di vista.`,
      tabs: [
        {
          label: `🔦 L'esperimento della torcia`,
          html: `<p>Ti servono una torcia e un foglio a quadretti, in una stanza buia.</p>
<ol>
<li>Punta la torcia <b>dritta</b> sul foglio, da 30 cm: la luce forma un cerchio piccolo e molto luminoso. Conta i quadretti illuminati.</li>
<li>Ora <b>inclina</b> la torcia, sempre a 30 cm: la luce forma un'ovale più grande e più debole. Conta di nuovo i quadretti: sono molti di più!</li>
</ol>
<p>La quantità di luce è la stessa, ma divisa su più quadretti: ogni quadretto riceve meno luce, quindi meno calore. È esattamente quello che succede ai Poli rispetto all'Equatore. Ed è anche il motivo delle <b>stagioni</b>: d'estate il Sole è più alto nel cielo e i raggi sono più dritti.</p>`
        },
        {
          label: `🏔️ Il clima in 3D`,
          html: `<p>Ruota il paesaggio e tocca le parti: vedrai come montagne, pianure, mare e laghi cambiano il clima di un luogo anche a pochi chilometri di distanza.</p>`,
          scene: `terrain`,
          options: {
            features: {
              peak: { label: `Vetta`, html: `In alto fa freddo: circa 6 °C in meno ogni 1000 m. Sulle vette alpine la temperatura media dell'anno è sotto zero.` },
              glacier: { label: `Ghiacciaio`, html: `Si forma dove la neve d'inverno è più di quella che si scioglie d'estate. Se il clima si scalda, il ghiacciaio si ritira.` },
              mountain: { label: `Montagna`, html: `Le montagne fermano le nuvole: un versante riceve molta pioggia, l'altro resta più secco. Le Alpi bloccano i venti freddi del Nord.` },
              valley: { label: `Valle`, html: `Nelle valli d'inverno l'aria fredda, più pesante, scende e ristagna: a volte in fondo valle fa più freddo che a metà montagna!` },
              plain: { label: `Pianura chiusa`, html: `Una pianura chiusa da montagne, come la Padana, ha poco vento: d'inverno si forma la nebbia, d'estate c'è afa.` },
              lake: { label: `Lago`, html: `I grandi laghi, come il Garda, mitigano il clima intorno: sulle loro rive crescono ulivi e limoni anche al Nord!` },
              sea: { label: `Mare`, html: `Il mare si scalda e si raffredda lentamente: rende il clima delle coste più mite d'inverno e più fresco d'estate.` },
              coast: { label: `Costa`, html: `Sulle coste soffiano le brezze: di giorno dal mare verso terra, di notte da terra verso il mare.` }
            }
          }
        },
        {
          label: `🌍 Strati dell'atmosfera`,
          html: `<p>Il tempo atmosferico "succede" quasi tutto nello strato più basso dell'aria, la <b>troposfera</b>, spesso solo circa 8–17 km (più sottile ai Poli, più spesso all'Equatore). Sopra ci sono la <b>stratosfera</b> (con lo strato di <b>ozono</b> che ci protegge dai raggi ultravioletti), la <b>mesosfera</b> e la <b>termosfera</b>. Ruota la sfera tagliata (gli strati non sono in scala!).</p>`,
          scene: `layers`,
          options: {
            layers: [
              { r: 1, color: `#c4b5fd`, label: `Termosfera (fino a 600 km circa)` },
              { r: 0.9, color: `#a5b4fc`, label: `Mesosfera (50–85 km)` },
              { r: 0.8, color: `#93c5fd`, label: `Stratosfera con l'ozono (12–50 km)` },
              { r: 0.7, color: `#bae6fd`, label: `Troposfera: nuvole e pioggia (0–12 km)` },
              { r: 0.6, color: `#22c55e`, label: `Superficie della Terra` }
            ]
          }
        },
        {
          label: `🧥 Il clima e i vestiti`,
          html: `<p>Un'analogia di tutti i giorni: il <b>tempo</b> decide che cosa ti metti <b>oggi</b>; il <b>clima</b> decide che cosa c'è <b>nel tuo armadio</b>.</p>
<ul>
<li>Un bambino di <b>Bolzano</b> ha nell'armadio un piumino pesante, guanti, scarponi da neve (clima alpino/continentale).</li>
<li>Un bambino di <b>Lampedusa</b> forse non ha mai avuto bisogno di guanti da neve (clima mediterraneo).</li>
<li>Un bambino di <b>Singapore</b> usa vestiti leggeri tutto l'anno e l'ombrello quasi ogni giorno (clima equatoriale).</li>
</ul>
<p>Anche se a Bolzano un giorno di aprile fa caldo (tempo), il piumino resta nell'armadio perché tornerà l'inverno (clima)!</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa del clima`,
      nodes: [
        { id: `sole`, label: `Energia del Sole`, x: 50, y: 6, color: `#f59e0b`, html: `Il Sole scalda la Terra e mette in moto aria e acqua.`, why: `Quasi tutta l'energia che muove l'atmosfera arriva dal Sole. Poiché la Terra è sferica, la scalda in modo diverso alle varie latitudini: è la causa prima dei climi.` },
        { id: `latitudine`, label: `Latitudine`, x: 18, y: 28, color: `#dc2626`, html: `Distanza dall'Equatore.`, why: `Lo avevano già capito i Greci: la parola "clima" viene dal greco <i>klima</i>, "inclinazione", cioè l'inclinazione dei raggi del Sole. Il geografo Parmenide (V secolo a.C.) divise per primo la Terra in cinque zone.` },
        { id: `fasce`, label: `Fasce climatiche`, x: 18, y: 54, color: `#16a34a`, html: `Torrida, temperate, polari.`, why: `I Tropici (circa 23°) segnano dove il Sole può arrivare a picco sopra la testa; i Circoli polari (circa 66°) dove può esserci un giorno intero di luce o di buio. Dipende dall'inclinazione dell'asse terrestre (circa 23,4°).` },
        { id: `altitudine`, label: `Altitudine`, x: 50, y: 30, color: `#78716c`, html: `Più si sale, più fa freddo.`, why: `L'aria in alto è più rarefatta (c'è meno "peso" d'aria sopra) e si scalda meno: l'aria si scalda soprattutto dal basso, dal terreno, non direttamente dal Sole.` },
        { id: `mare`, label: `Mare e correnti`, x: 82, y: 28, color: `#0284c7`, html: `Mitigano le temperature delle coste.`, why: `L'acqua ha bisogno di molta più energia della terra per scaldarsi (ha un'alta "capacità termica"): così accumula calore d'estate e lo cede d'inverno.` },
        { id: `elementi`, label: `Elementi: temperatura, piogge, pressione, umidità, venti`, x: 50, y: 56, color: `#6366f1`, html: `Ciò che si misura nelle stazioni meteo.`, why: `Galileo costruì un termoscopio verso il 1593, Torricelli il barometro nel 1643; a Firenze, nel 1654, il granduca Ferdinando II creò la prima rete di stazioni meteo con strumenti tutti uguali.` },
        { id: `tempo`, label: `Tempo atmosferico`, x: 30, y: 80, color: `#0ea5e9`, html: `La situazione di oggi, in un luogo.`, why: `Cambia in fretta perché le masse d'aria calde e fredde si muovono continuamente, spinte dalle differenze di pressione.` },
        { id: `clima`, label: `Clima`, x: 70, y: 80, color: `#15803d`, html: `La media del tempo in almeno 30 anni.`, why: `L'Organizzazione Meteorologica Mondiale ha scelto 30 anni come periodo standard, abbastanza lungo da "cancellare" gli anni eccezionali.` },
        { id: `italia`, label: `Climi d'Italia`, x: 70, y: 98, color: `#b91c1c`, html: `Alpino, continentale, appenninico, mediterraneo.`, why: `L'Italia si allunga per circa 10° di latitudine, ha montagne altissime ed è circondata dal mare: per questo in pochi chilometri il clima può cambiare molto.` }
      ],
      edges: [
        [`sole`, `latitudine`, `arriva inclinato secondo la`],
        [`latitudine`, `fasce`, `crea le`],
        [`sole`, `altitudine`, `scalda meno in`],
        [`sole`, `mare`, `scalda lentamente il`],
        [`altitudine`, `elementi`, `cambia gli`],
        [`mare`, `elementi`, `cambia gli`],
        [`elementi`, `tempo`, `descrivono il`],
        [`tempo`, `clima`, `media di 30 anni =`],
        [`clima`, `italia`, `es.`],
        [`fasce`, `clima`, `grandi tipi di`]
      ]
    },
    {
      type: `remember`,
      title: `Da ricordare`,
      html: `<ul>
<li><b>Tempo atmosferico</b> = situazione di un momento; <b>clima</b> = media di almeno 30 anni.</li>
<li>Elementi: <b>temperatura</b> (termometro), <b>precipitazioni</b> (pluviometro), <b>umidità</b> (igrometro), <b>pressione</b> (barometro), <b>venti</b> (anemometro, banderuola).</li>
<li>Fattori: <b>latitudine</b>, <b>altitudine</b> (circa −6 °C ogni 1000 m), <b>mare</b>, venti e correnti, montagne.</li>
<li><b>5 fasce climatiche</b>: 1 torrida, 2 temperate, 2 polari.</li>
<li>In Italia: clima <b>alpino</b>, <b>continentale/padano</b>, <b>appenninico</b>, <b>mediterraneo</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Tempo atmosferico`, d: `Le condizioni dell'aria in un luogo e in un momento precisi.` },
    { t: `Clima`, d: `L'insieme delle condizioni del tempo tipiche di una regione, calcolate su almeno 30 anni.` },
    { t: `Precipitazioni`, d: `Acqua che cade dal cielo: pioggia, neve, grandine.` },
    { t: `Pressione atmosferica`, d: `Il peso dell'aria che sta sopra di noi.` },
    { t: `Umidità`, d: `Quantità di vapore acqueo presente nell'aria.` },
    { t: `Latitudine`, d: `Distanza di un luogo dall'Equatore, misurata in gradi verso nord o verso sud.` },
    { t: `Altitudine`, d: `Altezza di un luogo sopra il livello del mare.` },
    { t: `Tropici`, d: `Paralleli a circa 23° nord (Cancro) e 23° sud (Capricorno) che delimitano la fascia torrida.` },
    { t: `Circoli polari`, d: `Paralleli a circa 66° nord e sud, oltre i quali iniziano le fasce polari.` },
    { t: `Climatogramma`, d: `Grafico che mostra temperature e piogge medie di ogni mese in un luogo.` },
    { t: `Afa`, d: `Caldo umido e senza vento, tipico dell'estate in Pianura Padana.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Qual è la differenza tra tempo e clima?`, options: [`Sono la stessa cosa`, `Il tempo è di un momento, il clima è la media di molti anni`, `Il clima cambia ogni giorno`], answer: 1, explain: `Il clima si calcola su almeno 30 anni.` },
      { type: `tf`, q: `Una frase come "Oggi a Torino nevica" descrive il clima.`, answer: false, explain: `Descrive il tempo atmosferico di oggi.` },
      { type: `mc`, q: `Quale strumento misura la quantità di pioggia?`, options: [`Pluviometro`, `Anemometro`, `Barometro`], answer: 0, explain: `Il pluviometro, in millimetri.` },
      { type: `text`, q: `Chi inventò il barometro nel 1643? (cognome)`, answer: [`torricelli`, `evangelista torricelli`], explain: `Evangelista Torricelli.` },
      { type: `mc`, q: `Perché all'Equatore fa più caldo che ai Poli?`, options: [`Perché è più vicino al Sole`, `Perché i raggi del Sole arrivano più dritti`, `Perché c'è più mare`], answer: 1, explain: `I raggi dritti concentrano il calore su una superficie piccola.` },
      { type: `num`, q: `Se al mare ci sono 25 °C, quanti gradi ci saranno circa a 1000 m di altitudine? (circa −6 °C ogni 1000 m)`, answer: 19, tol: 1, unit: `°C`, explain: `25 − 6 = 19 °C.` },
      { type: `order`, q: `Metti in ordine le fasce, dal Polo Nord all'Equatore.`, items: [`Fascia polare artica`, `Fascia temperata nord`, `Fascia torrida`], explain: `Dal Polo: polare, temperata, torrida.` },
      { type: `mc`, q: `Quale paese ha il clima della foresta pluviale (equatoriale)?`, options: [`Brasile (Amazzonia)`, `Norvegia`, `Italia`], answer: 0, explain: `L'Amazzonia è vicino all'Equatore.` },
      { type: `mc`, q: `Nella Pianura Padana il clima è…`, options: [`mediterraneo`, `continentale, con nebbia d'inverno e afa d'estate`, `polare`], answer: 1, explain: `È lontana dal mare e chiusa dalle montagne.` },
      { type: `mc`, q: `Quale caratteristica ha il clima mediterraneo?`, options: [`Estati calde e secche, inverni miti`, `Neve tutto l'anno`, `Piogge ogni giorno`], answer: 0, explain: `Tipico delle coste e delle isole italiane.` },
      { type: `tf`, q: `Il mare rende il clima delle coste più mite.`, answer: true, explain: `Si scalda e si raffredda lentamente.` },
      { type: `num`, q: `Quanti anni di misure servono, almeno, per descrivere il clima di un luogo?`, answer: 30, explain: `Almeno 30 anni, secondo l'Organizzazione Meteorologica Mondiale.` }
    ]
  }
});

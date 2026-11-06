TOPIC('it', {
  id: `m2-geo-europa-nordica`,
  title: `L'Europa del Nord`,
  intro: `Fiordi scavati dai ghiacciai, migliaia di laghi, vulcani sotto il ghiaccio, il sole di mezzanotte e l'aurora boreale: l'<b>Europa del Nord</b> comprende i <b>Paesi nordici</b> (Norvegia, Svezia, Finlandia, Danimarca, Islanda) e le <b>isole britanniche</b> (Regno Unito e Irlanda). Sono Paesi poco popolati ma tra i più ricchi, istruiti e innovativi del mondo. Scopriamo come la latitudine, il ghiaccio e il mare hanno modellato i loro paesaggi e la loro vita.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Una regione modellata dal ghiaccio`,
      html: `<p>Durante le <b>glaciazioni</b> (l'ultima è finita circa 11.700 anni fa) un'enorme calotta di ghiaccio, spessa fino a 3 km, copriva la Scandinavia e gran parte delle isole britanniche. Il ghiaccio ha lasciato tracce ovunque:</p>
<ul>
<li>i <b>fiordi</b> della Norvegia: valli scavate dai ghiacciai e poi invase dal mare;</li>
<li>le decine di migliaia di <b>laghi</b> della Finlandia e della Svezia, nelle conche scavate dal ghiaccio;</li>
<li>rocce levigate, colline di detriti (morene) e terreni sottili, poco adatti all'agricoltura.</li>
</ul>
<p>Le <b>Alpi Scandinave</b> corrono lungo la penisola scandinava: alte a ovest (Norvegia), scendono dolcemente verso est (Svezia) fino al Mar Baltico. Le terre britanniche hanno montagne antiche e basse a nord e a ovest (Scozia, Galles) e pianure a sud-est (Inghilterra).</p>
<p>Curiosità geologica: liberata dal peso del ghiaccio, la Scandinavia <b>si sta ancora sollevando</b>, in alcuni punti di quasi 1 cm all'anno!</p>`
    },
    {
      type: `svg`,
      title: `Come nasce un fiordo`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="100" y="28" font-size="16" text-anchor="middle" font-weight="bold">1. Valle a V</text>
<polygon points="20,60 90,200 110,200 180,60 180,240 20,240" fill="#a8a29e"/>
<path d="M95 195 L105 195" stroke="#2563eb" stroke-width="6"/>
<text x="100" y="268" font-size="14" text-anchor="middle">scavata da un fiume</text>
<text x="300" y="28" font-size="16" text-anchor="middle" font-weight="bold">2. Arriva il ghiacciaio</text>
<polygon points="220,60 245,215 355,215 380,60 380,240 220,240" fill="#a8a29e"/>
<polygon points="222,62 247,213 353,213 378,62" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="3"/>
<text x="300" y="140" font-size="15" text-anchor="middle" fill="#0369a1" font-weight="bold">ghiaccio</text>
<text x="300" y="268" font-size="14" text-anchor="middle">scava e allarga: valle a U</text>
<text x="500" y="28" font-size="16" text-anchor="middle" font-weight="bold">3. Il mare entra</text>
<polygon points="420,60 445,215 555,215 580,60 580,240 420,240" fill="#a8a29e"/>
<polygon points="434,130 445,213 555,213 566,130" fill="#2563eb"/>
<line x1="420" y1="130" x2="580" y2="130" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="6 4"/>
<text x="500" y="180" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">FIORDO</text>
<text x="500" y="268" font-size="14" text-anchor="middle">il ghiaccio si scioglie,</text>
<text x="500" y="288" font-size="14" text-anchor="middle">il livello del mare sale</text>
</svg>`,
      caption: `Il Sognefjord, in Norvegia, si inoltra per circa 204 km nell'interno e in alcuni punti è profondo più di 1.300 metri.`
    },
    {
      type: `3d`,
      title: `I paesaggi del Nord in 3D`,
      scene: `terrain`,
      caption: `Ruota il paesaggio e tocca ogni elemento: scopri un esempio nordico per ciascuno.`,
      options: {
        features: {
          bay: { label: `Fiordo`, html: `Lunga e stretta insenatura tra pareti ripide: è una valle glaciale invasa dal mare. Le coste norvegesi ne sono piene; il <b>Geirangerfjord</b> è patrimonio UNESCO.` },
          glacier: { label: `Ghiacciaio`, html: `Il <b>Vatnajökull</b> in Islanda è il ghiacciaio più grande d'Europa per volume; sotto di lui si nascondono vulcani attivi.` },
          volcano: { label: `Vulcano`, html: `L'Islanda ha circa 30 sistemi vulcanici attivi. Nel 2010 l'eruzione dell'<b>Eyjafjallajökull</b> bloccò per giorni i voli di mezza Europa.` },
          mountain: { label: `Catena montuosa`, html: `Le <b>Alpi Scandinave</b> (in Norvegia il Galdhøpiggen, 2.469 m) e le <b>Highlands</b> scozzesi, con il Ben Nevis (1.345 m), la vetta più alta delle isole britanniche.` },
          lake: { label: `Lago`, html: `La Finlandia ha circa <b>188.000 laghi</b>; in Svezia il <b>Vänern</b> (circa 5.650 km²) è il lago più grande dell'Unione Europea.` },
          island: { label: `Isola`, html: `La <b>Gran Bretagna</b> è l'isola più grande d'Europa. La <b>Groenlandia</b> (Danimarca) è l'isola più grande del mondo.` },
          archipelago: { label: `Arcipelago`, html: `Le isole <b>Lofoten</b> in Norvegia, le <b>Fær Øer</b> (Danimarca) e le <b>Ebridi</b> in Scozia. Anche Stoccolma sorge su 14 isole.` },
          peninsula: { label: `Penisola`, html: `La <b>penisola scandinava</b> (Norvegia e Svezia) è la più grande d'Europa; la Danimarca occupa la penisola dello <b>Jutland</b>.` },
          strait: { label: `Stretto`, html: `Il <b>Passo di Calais</b> (33 km) separa Inghilterra e Francia; sotto passa l'Eurotunnel. L'<b>Øresund</b> separa Danimarca e Svezia ed è attraversato da un ponte-tunnel.` },
          cape: { label: `Capo`, html: `<b>Capo Nord</b>, in Norvegia, con la sua scogliera alta oltre 300 m, è considerato il punto più settentrionale d'Europa raggiungibile in auto.` },
          coast: { label: `Costa`, html: `Le <b>bianche scogliere di Dover</b>, di gesso, sono il simbolo della costa inglese sulla Manica.` },
          river: { label: `Fiume`, html: `Il <b>Tamigi</b> (circa 346 km) attraversa Londra; lo <b>Shannon</b> (circa 360 km) è il fiume più lungo d'Irlanda e delle isole britanniche.` },
          plain: { label: `Pianura`, html: `La <b>Danimarca</b> è quasi tutta pianeggiante: il punto più alto supera di poco i 170 m!` }
        }
      }
    },
    {
      type: `text`,
      title: `2. Clima, luce e buio`,
      html: `<p>Il Nord Europa si trova alla stessa latitudine di Alaska e Siberia, eppure è abitabile: merito della <b>corrente nord-atlantica</b> (la prosecuzione della corrente del Golfo), che porta acque calde lungo le coste. Per questo:</p>
<ul>
<li>le isole britanniche, l'Irlanda, la Danimarca e la costa norvegese hanno un <b>clima oceanico</b>: inverni miti, estati fresche, piogge frequenti; i porti norvegesi non gelano nemmeno oltre il Circolo polare;</li>
<li>l'interno di Svezia e Finlandia ha un clima <b>freddo continentale</b> (subartico), con inverni lunghi e nevosi;</li>
<li>l'estremo nord e le montagne hanno un clima <b>polare</b>, con la tundra.</li>
</ul>
<p>Oltre il <b>Circolo polare artico</b> (66°34' N) succede qualcosa di speciale: in estate c'è almeno un giorno in cui il Sole non tramonta mai (<b>sole di mezzanotte</b>) e in inverno almeno un giorno in cui non sorge mai (<b>notte polare</b>). Nelle notti invernali si può vedere l'<b>aurora boreale</b>, luce prodotta dalle particelle del vento solare che colpiscono l'atmosfera.</p>`
    },
    {
      type: `svg`,
      title: `Ore di luce: Roma, Oslo e Tromsø`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="24" font-size="17" text-anchor="middle" font-weight="bold">Ore di luce al giorno (circa)</text>
<line x1="60" y1="250" x2="580" y2="250" stroke="#334155" stroke-width="2"/>
<rect x="90" y="100" width="50" height="150" fill="#facc15"/>
<rect x="145" y="160" width="50" height="90" fill="#1e3a8a"/>
<text x="117" y="92" font-size="14" text-anchor="middle">15 h</text>
<text x="170" y="152" font-size="14" text-anchor="middle">9 h</text>
<text x="142" y="275" font-size="16" text-anchor="middle" font-weight="bold">Roma (42° N)</text>
<rect x="265" y="62" width="50" height="188" fill="#facc15"/>
<rect x="320" y="190" width="50" height="60" fill="#1e3a8a"/>
<text x="290" y="54" font-size="14" text-anchor="middle">19 h</text>
<text x="345" y="182" font-size="14" text-anchor="middle">6 h</text>
<text x="317" y="275" font-size="16" text-anchor="middle" font-weight="bold">Oslo (60° N)</text>
<rect x="440" y="10" width="50" height="240" fill="#facc15"/>
<rect x="495" y="248" width="50" height="2" fill="#1e3a8a"/>
<text x="465" y="45" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">24 h</text>
<text x="520" y="240" font-size="14" text-anchor="middle">0 h</text>
<text x="492" y="275" font-size="16" text-anchor="middle" font-weight="bold">Tromsø (70° N)</text>
<rect x="70" y="285" width="14" height="12" fill="#facc15"/>
<text x="90" y="296" font-size="13">21 giugno</text>
<rect x="180" y="285" width="14" height="12" fill="#1e3a8a"/>
<text x="200" y="296" font-size="13">21 dicembre</text>
</svg>`,
      caption: `Più si sale di latitudine, più la differenza tra estate e inverno è estrema. A Tromsø, oltre il Circolo polare, il Sole non tramonta da circa il 20 maggio al 22 luglio.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: ghiaccio e luce`,
      questions: [
        { type: `mc`, q: `Che cos'è un fiordo?`, options: [`Un vulcano spento`, `Una valle scavata da un ghiacciaio e invasa dal mare`, `Un lago salato`], answer: 1, explain: `Prima fiume, poi ghiacciaio, poi il mare entra nella valle a U.` },
        { type: `tf`, q: `Oltre il Circolo polare artico, in estate, il Sole può restare sopra l'orizzonte per 24 ore.`, answer: true, explain: `È il sole di mezzanotte.` },
        { type: `mc`, q: `Perché le coste della Norvegia non gelano d'inverno?`, options: [`Per i vulcani`, `Per la corrente nord-atlantica, che porta acque calde`, `Perché l'acqua è molto salata`], answer: 1, explain: `È la prosecuzione della corrente del Golfo.` }
      ]
    },
    {
      type: `text`,
      title: `3. I Paesi nordici`,
      html: `<table>
<tr><th>Paese</th><th>Capitale</th><th>Abitanti (circa)</th><th>Superficie (circa)</th><th>UE / moneta</th></tr>
<tr><td><b>Norvegia</b></td><td>Oslo</td><td>5,6 milioni</td><td>385.000 km²</td><td>non UE · corona norvegese</td></tr>
<tr><td><b>Svezia</b></td><td>Stoccolma</td><td>10,5 milioni</td><td>450.000 km²</td><td>UE dal 1995 · corona svedese</td></tr>
<tr><td><b>Finlandia</b></td><td>Helsinki</td><td>5,6 milioni</td><td>338.000 km²</td><td>UE dal 1995 · euro</td></tr>
<tr><td><b>Danimarca</b></td><td>Copenaghen</td><td>6 milioni</td><td>43.000 km²</td><td>UE dal 1973 · corona danese</td></tr>
<tr><td><b>Islanda</b></td><td>Reykjavík</td><td>390.000</td><td>103.000 km²</td><td>non UE · corona islandese</td></tr>
</table>
<ul>
<li><b>Norvegia</b>: coste lunghissime e frastagliate, fiordi, pesca (salmone, merluzzo), energia idroelettrica (quasi tutta l'elettricità) e soprattutto <b>petrolio e gas</b> del Mare del Nord. Ha scelto due volte con un referendum (1972 e 1994) di non entrare nell'UE.</li>
<li><b>Svezia</b>: il Paese più grande e popoloso della regione; foreste (circa due terzi del territorio), legno e carta, miniere di ferro, industria (auto, telecomunicazioni, mobili). A Stoccolma si consegnano ogni 10 dicembre i <b>Premi Nobel</b> (quello per la pace a Oslo).</li>
<li><b>Finlandia</b>: "terra dei mille laghi" (in realtà quasi 188.000!), foreste, tecnologia. La lingua finlandese non è indoeuropea: è <b>ugro-finnica</b>, come l'ungherese e l'estone. La sua scuola è tra le più studiate al mondo.</li>
<li><b>Danimarca</b>: pianeggiante, con la penisola dello Jutland e circa 400 isole; agricoltura e allevamento moderni, <b>energia eolica</b> (oltre metà dell'elettricità), il <b>Lego</b> (nato nel 1932). Fanno parte del Regno di Danimarca, con ampia autonomia, anche le Fær Øer e la <b>Groenlandia</b>.</li>
<li><b>Islanda</b>: un'isola sulla dorsale medio-atlantica, dove le placche nordamericana ed euroasiatica si allontanano: vulcani, geyser, sorgenti calde. Quasi tutta l'elettricità viene da fonti <b>rinnovabili</b> (idroelettrico e geotermico).</li>
</ul>
<p>I Paesi nordici sono famosi per lo <b>stato sociale</b> (scuola, sanità e servizi pubblici di alto livello, finanziati da tasse elevate) e compaiono sempre ai primi posti nelle classifiche di qualità della vita.</p>`
    },
    {
      type: `text`,
      title: `4. Le isole britanniche: Regno Unito e Irlanda`,
      html: `<p><b>Regno Unito</b> – Capitale: <b>Londra</b> · circa 69 milioni di abitanti · circa 244.000 km² · monarchia parlamentare · moneta: <b>sterlina</b>.</p>
<ul>
<li>È formato da <b>quattro nazioni</b>: <b>Inghilterra</b> (Londra), <b>Scozia</b> (Edimburgo), <b>Galles</b> (Cardiff) e <b>Irlanda del Nord</b> (Belfast). Il nome completo è "Regno Unito di Gran Bretagna e Irlanda del Nord".</li>
<li>Qui iniziò, nel Settecento, la <b>prima rivoluzione industriale</b>; nell'Ottocento l'Impero britannico era il più grande del mondo. Oggi l'economia si basa su finanza (la City di Londra), servizi, ricerca, industria aerospaziale e farmaceutica.</li>
<li>A <b>Greenwich</b>, a Londra, passa il <b>meridiano zero</b>, da cui si misurano le longitudini e i fusi orari.</li>
<li>Ha lasciato l'Unione Europea il <b>31 gennaio 2020</b> (Brexit). Dal 1994 è collegato alla Francia dall'<b>Eurotunnel</b> sotto la Manica (circa 50 km).</li>
</ul>
<p><b>Irlanda</b> – Capitale: <b>Dublino</b> · circa 5,3 milioni di abitanti · circa 70.000 km² · repubblica · euro.</p>
<ul>
<li>Occupa la maggior parte dell'isola d'Irlanda (il nord-est è l'Irlanda del Nord, britannica). È detta l'<b>"isola di smeraldo"</b> per i suoi prati sempre verdi, grazie al clima mite e piovoso.</li>
<li>Lingue ufficiali: <b>irlandese</b> (gaelico) e inglese. Nell'UE dal 1973.</li>
<li>Durante la <b>Grande carestia</b> (1845-1849), causata da una malattia delle patate, circa un milione di persone morì e un altro milione emigrò, soprattutto negli Stati Uniti. Oggi è un Paese ricco, sede europea di molte grandi aziende tecnologiche e farmaceutiche.</li>
</ul>`
    },
    {
      type: `widget`,
      title: `Abbina Paese e capitale`,
      widget: `match`,
      options: {
        pairs: [
          [`🇳🇴 Norvegia`, `Oslo`],
          [`🇸🇪 Svezia`, `Stoccolma`],
          [`🇫🇮 Finlandia`, `Helsinki`],
          [`🇩🇰 Danimarca`, `Copenaghen`],
          [`🇮🇸 Islanda`, `Reykjavík`],
          [`🇬🇧 Regno Unito`, `Londra`],
          [`🇮🇪 Irlanda`, `Dublino`]
        ]
      },
      caption: `Reykjavík (64° N) è la capitale di uno Stato sovrano più a nord del mondo.`
    },
    {
      type: `widget`,
      title: `Dentro o fuori dall'Unione Europea?`,
      widget: `classify`,
      options: {
        groups: [`Membro dell'UE`, `Non membro`],
        items: [
          [`🇸🇪 Svezia`, 0],
          [`🇫🇮 Finlandia`, 0],
          [`🇩🇰 Danimarca`, 0],
          [`🇮🇪 Irlanda`, 0],
          [`🇳🇴 Norvegia`, 1],
          [`🇮🇸 Islanda`, 1],
          [`🇬🇧 Regno Unito`, 1]
        ]
      },
      caption: `Norvegia e Islanda non sono nell'UE ma fanno parte dello Spazio economico europeo e di Schengen. Il Regno Unito è uscito nel 2020.`
    },
    {
      type: `example`,
      title: `Esempio pratico: perché in Norvegia quasi tutti comprano auto elettriche?`,
      html: `<p>Nel 2024 circa <b>9 auto nuove su 10</b> vendute in Norvegia erano completamente elettriche: un record mondiale. Come mai, in un Paese che vende petrolio?</p>
<ol>
<li>L'elettricità norvegese è quasi tutta <b>idroelettrica</b> (montagne + tanta pioggia e neve = tanti fiumi e cascate) ed è pulita ed economica.</li>
<li>Lo Stato ha tolto per anni molte tasse alle auto elettriche e ne ha aumentate su quelle a benzina e diesel.</li>
<li>Ha costruito una rete fitta di colonnine di ricarica.</li>
</ol>
<p>È un esempio di come la <b>geografia</b> (rilievi e piogge) e le <b>scelte politiche</b> si combinino. Prova a pensare: in Italia, dove l'elettricità viene da fonti più varie, gli effetti sarebbero gli stessi?</p>`
    },
    {
      type: `example`,
      title: `Esempio pratico: da Londra a Edimburgo, attraverso il Regno Unito`,
      html: `<p>In treno da Londra a Edimburgo servono circa <b>4 ore e mezza</b> per circa 630 km. Il paesaggio cambia: prima le pianure e le colline verdi dell'Inghilterra meridionale, poi le vecchie città industriali del Nord (York, Newcastle), infine la costa scozzese.</p>
<p>A Edimburgo noterai i cartelli in inglese, ma in alcune zone della Scozia anche in <b>gaelico scozzese</b>; in Galles i cartelli sono sempre bilingui, inglese e <b>gallese</b>. E ricordati: nel Regno Unito e in Irlanda si guida a <b>sinistra</b>!</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… in Islanda il riscaldamento viene dalla Terra?`,
      html: `<p>In Islanda circa <b>9 case su 10</b> sono riscaldate con l'acqua calda che sale dal sottosuolo, scaldata dal calore dei vulcani (<b>energia geotermica</b>). A Reykjavík sotto alcuni marciapiedi passano tubi di acqua calda che sciolgono la neve. E la parola <b>geyser</b>, usata in tutto il mondo, viene dal nome di una sorgente islandese, il <i>Geysir</i>, che significa "zampillante".</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… l'inglese ha parole dei Vichinghi?`,
      html: `<p>Tra l'VIII e l'XI secolo i <b>Vichinghi</b> partiti da Norvegia, Danimarca e Svezia navigarono fino all'Inghilterra, all'Irlanda, all'Islanda, alla Groenlandia e perfino al Nord America (verso l'anno 1000). Si stabilirono anche in Inghilterra e lasciarono molte parole: <i>sky</i> (cielo), <i>egg</i> (uovo), <i>knife</i> (coltello), <i>window</i> (da "occhio del vento") e <i>Thursday</i>, il giorno di <b>Thor</b>! L'Althing islandese, nato nel 930, è uno dei parlamenti più antichi del mondo.</p>`
    },
    {
      type: `decision`,
      title: `Norvegia, anni '70: avete trovato il petrolio. Che cosa fate?`,
      html: `<p>Nel 1969 sotto il Mare del Nord viene scoperto il giacimento di Ekofisk: la Norvegia, un Paese di pescatori e contadini, diventa improvvisamente ricca di petrolio e gas. Ma il petrolio prima o poi finirà, e il suo prezzo sale e scende in modo imprevedibile.</p>`,
      question: `Che cosa fai con i soldi del petrolio?`,
      options: [
        { label: `Spendiamo tutto subito: tasse più basse e stipendi più alti per tutti.`, outcome: `Benessere immediato… ma quando il prezzo del petrolio crolla o i giacimenti si esauriscono, l'economia crolla con lui. È successo a diversi Paesi produttori.` },
        { label: `Mettiamo gran parte dei guadagni in un fondo investito all'estero, per le generazioni future.`, outcome: `Bisogna resistere alla tentazione di spendere oggi, ma il Paese si protegge dalle crisi e conserva la ricchezza quando il petrolio finirà.` },
        { label: `Lasciamo che le compagnie straniere estraggano e tengano i profitti, in cambio di un piccolo affitto.`, outcome: `Nessun rischio per lo Stato, ma la ricchezza finirebbe quasi tutta all'estero.` }
      ],
      answer: 1,
      explain: `La Norvegia creò una compagnia petrolifera statale (oggi Equinor) e, dal 1990, un <b>fondo sovrano</b> (il "fondo petrolifero"), in cui versa i guadagni del petrolio investendoli in aziende di tutto il mondo. Il governo può usare solo una piccola parte dei rendimenti ogni anno. Oggi è il fondo sovrano più grande del mondo, con un valore di oltre 1.500 miliardi di dollari: circa 300.000 dollari per ogni norvegese. È un esempio di gestione di una <b>risorsa non rinnovabile</b> pensando al futuro.`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capire l'Europa del Nord`,
      intro: `Se tanti nomi e numeri ti confondono, prova questi punti di vista.`,
      tabs: [
        {
          label: `🖐️ Il ghiacciaio come un dito nella sabbia`,
          html: `<p>Prendi una vaschetta di sabbia bagnata e fai scorrere lentamente un dito premendo: lascerai un solco a forma di <b>U</b>, con il fondo largo e le pareti ripide. Ora versa un po' d'acqua: ecco un fiordo in miniatura!</p>
<p>Un fiume invece scava solo il fondo, come la punta di una matita: lascia un solco a <b>V</b>. Guardando la forma di una valle, i geografi capiscono se è stata scavata da un fiume o da un ghiacciaio.</p>`
        },
        {
          label: `🌍 Sul globo`,
          html: `<p>Gira il globo: trova le capitali, Capo Nord e la Groenlandia. Nota quanto è vicina l'Islanda al Circolo polare artico.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 59.91, lon: 10.75, label: `Oslo`, color: `#ef4444` },
              { lat: 59.33, lon: 18.07, label: `Stoccolma`, color: `#2563eb` },
              { lat: 60.17, lon: 24.94, label: `Helsinki`, color: `#0ea5e9` },
              { lat: 55.68, lon: 12.57, label: `Copenaghen`, color: `#dc2626` },
              { lat: 64.15, lon: -21.94, label: `Reykjavík`, color: `#7c3aed` },
              { lat: 51.51, lon: -0.13, label: `Londra`, color: `#1d4ed8` },
              { lat: 53.35, lon: -6.26, label: `Dublino`, color: `#16a34a` },
              { lat: 71.17, lon: 25.78, label: `Capo Nord`, color: `#f97316` },
              { lat: 72.0, lon: -40.0, label: `Groenlandia`, color: `#94a3b8` },
              { lat: 69.65, lon: 18.96, label: `Tromsø`, color: `#eab308` }
            ]
          }
        },
        {
          label: `🗣️ Lingue sorelle e lingue "straniere"`,
          html: `<p>Norvegese, svedese e danese sono così simili che i loro parlanti si capiscono a vicenda (con un po' di sforzo). Sono lingue <b>germaniche</b> come l'inglese e il tedesco. L'islandese è la più conservativa: gli islandesi riescono a leggere le saghe medievali!</p>
<table>
<tr><th>Italiano</th><th>Svedese</th><th>Norvegese</th><th>Danese</th><th>Finlandese</th></tr>
<tr><td>grazie</td><td>tack</td><td>takk</td><td>tak</td><td>kiitos</td></tr>
<tr><td>casa</td><td>hus</td><td>hus</td><td>hus</td><td>talo</td></tr>
<tr><td>acqua</td><td>vatten</td><td>vann</td><td>vand</td><td>vesi</td></tr>
</table>
<p>Il <b>finlandese</b> è di un'altra famiglia (ugro-finnica): per questo le sue parole sono così diverse. Nel Regno Unito e in Irlanda, oltre all'inglese, sopravvivono lingue <b>celtiche</b>: gallese, gaelico scozzese, irlandese.</p>`
        },
        {
          label: `☀️ Perché d'estate non fa buio?`,
          html: `<p>L'asse della Terra è <b>inclinato</b> di circa 23,4°. A giugno il Polo Nord è "piegato" verso il Sole: girando su sé stessa, la zona vicino al polo resta sempre nella parte illuminata, come una persona seduta vicino al centro di una giostra accanto a una lampada. A dicembre succede il contrario: quella zona resta sempre al buio.</p>
<p>Il Circolo polare artico (66°34' N) è proprio il limite oltre il quale questo succede almeno un giorno all'anno: 90° − 23,4° ≈ 66,6°.</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa dell'Europa del Nord`,
      nodes: [
        { id: `latitudine`, label: `Alta latitudine`, x: 50, y: 6, color: `#1e3a8a`, html: `La regione va da circa 50° a oltre 71° di latitudine nord.`, why: `Più ci si avvicina al polo, più i raggi del Sole arrivano inclinati e scaldano meno; e per l'inclinazione dell'asse terrestre le ore di luce variano moltissimo tra estate e inverno.` },
        { id: `luce`, label: `Sole di mezzanotte e notte polare`, x: 18, y: 22, color: `#eab308`, html: `Oltre il Circolo polare il Sole non tramonta d'estate e non sorge d'inverno per almeno un giorno.`, why: `L'asse terrestre è inclinato di circa 23,4°: 90° − 23,4° dà la latitudine del Circolo polare (66°34').` },
        { id: `corrente`, label: `Corrente nord-atlantica`, x: 82, y: 22, color: `#0ea5e9`, html: `Acque calde che rendono il clima più mite del previsto.`, why: `È la prosecuzione della corrente del Golfo, che nasce nei Caraibi; venti occidentali spingono aria tiepida e umida sulle coste.` },
        { id: `ghiaccio`, label: `Glaciazioni`, x: 50, y: 35, color: `#7dd3fc`, html: `Una calotta di ghiaccio copriva la regione fino a circa 11.700 anni fa.`, why: `Variazioni cicliche dell'orbita terrestre (cicli di Milanković) hanno alternato periodi freddi e caldi negli ultimi 2,6 milioni di anni.` },
        { id: `fiordi`, label: `Fiordi e laghi`, x: 18, y: 55, color: `#2563eb`, html: `Fiordi in Norvegia, laghi in Finlandia e Svezia.`, why: `Il ghiaccio ha scavato valli a U e conche nella roccia; quando si è sciolto, il mare ha invaso le valli costiere e l'acqua dolce ha riempito le conche interne.` },
        { id: `vulcani`, label: `Vulcani d'Islanda`, x: 82, y: 50, color: `#dc2626`, html: `Vulcani, geyser e sorgenti calde.`, why: `L'Islanda sorge sulla dorsale medio-atlantica, dove due placche si allontanano di circa 2 cm all'anno e il magma risale; sotto c'è anche un "punto caldo" del mantello.` },
        { id: `energia`, label: `Energia e risorse`, x: 50, y: 70, color: `#16a34a`, html: `Petrolio e gas (Mare del Nord), idroelettrico, eolico, geotermico, foreste, pesca.`, why: `Montagne piovose danno energia idroelettrica; i venti dell'Atlantico l'eolico; i vulcani il geotermico; i sedimenti sotto il Mare del Nord hanno formato petrolio e gas.` },
        { id: `vichinghi`, label: `Vichinghi e navigatori`, x: 18, y: 88, color: `#a16207`, html: `Popoli di navigatori dal Medioevo all'Impero britannico.`, why: `Terre povere e coste lunghissime spingevano verso il mare: i Vichinghi raggiunsero l'America verso il 1000; l'Inghilterra, isola, costruì la flotta più potente del mondo.` },
        { id: `welfare`, label: `Benessere e stato sociale`, x: 82, y: 85, color: `#a855f7`, html: `Redditi alti, servizi pubblici forti, alta qualità della vita.`, why: `Popolazioni piccole e istruite, risorse naturali gestite dallo Stato e un forte accordo sociale tra lavoratori e imprese hanno permesso di finanziare scuola, sanità e pensioni con tasse elevate.` }
      ],
      edges: [
        [`latitudine`, `luce`, `causa`],
        [`latitudine`, `ghiaccio`, `favorisce`],
        [`corrente`, `latitudine`, `mitiga il freddo della`],
        [`ghiaccio`, `fiordi`, `scava`],
        [`vulcani`, `energia`, `geotermia`],
        [`fiordi`, `energia`, `idroelettrico`],
        [`energia`, `welfare`, `finanzia`],
        [`corrente`, `vichinghi`, `mari navigabili`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz: i Paesi del Nord`,
      questions: [
        { type: `text`, q: `Qual è la capitale della Svezia?`, answer: [`stoccolma`, `stockholm`], explain: `Stoccolma, costruita su 14 isole.` },
        { type: `mc`, q: `Quali sono le quattro nazioni del Regno Unito?`, options: [`Inghilterra, Scozia, Galles, Irlanda del Nord`, `Inghilterra, Irlanda, Islanda, Galles`, `Londra, Edimburgo, Cardiff, Dublino`], answer: 0, explain: `L'Irlanda (con capitale Dublino) è uno Stato indipendente.` },
        { type: `tf`, q: `La Finlandia usa l'euro.`, answer: true, explain: `È l'unico Paese nordico ad averlo adottato.` }
      ]
    }
  ],
  glossary: [
    { t: `Fiordo`, d: `Insenatura lunga, stretta e profonda: una valle glaciale invasa dal mare.` },
    { t: `Glaciazione`, d: `Periodo freddo in cui i ghiacciai si espandono e coprono vaste regioni.` },
    { t: `Circolo polare artico`, d: `Parallelo a 66°34' N oltre il quale si verificano il sole di mezzanotte e la notte polare.` },
    { t: `Sole di mezzanotte`, d: `Fenomeno per cui, d'estate, alle alte latitudini il Sole resta sopra l'orizzonte per 24 ore.` },
    { t: `Aurora boreale`, d: `Luci colorate nel cielo notturno polare, prodotte dalle particelle del vento solare.` },
    { t: `Energia geotermica`, d: `Energia ricavata dal calore interno della Terra.` },
    { t: `Fondo sovrano`, d: `Fondo d'investimento di proprietà di uno Stato, come quello norvegese alimentato dal petrolio.` },
    { t: `Stato sociale (welfare)`, d: `Sistema in cui lo Stato garantisce ai cittadini servizi come sanità, scuola, pensioni e sussidi.` },
    { t: `Paesi nordici`, d: `Norvegia, Svezia, Finlandia, Danimarca e Islanda.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quali Paesi formano la penisola scandinava?`, options: [`Norvegia e Svezia`, `Danimarca e Islanda`, `Finlandia e Irlanda`], answer: 0, explain: `La Danimarca occupa lo Jutland; l'Islanda è un'isola.` },
      { type: `order`, q: `Metti in ordine le tappe della formazione di un fiordo.`, items: [`Un fiume scava una valle a V`, `Un ghiacciaio occupa la valle e la allarga a U`, `Il ghiaccio si scioglie`, `Il mare invade la valle`], explain: `Fiume, ghiacciaio, scioglimento, mare.` },
      { type: `mc`, q: `Quale Paese è chiamato "terra dei mille laghi"?`, options: [`Norvegia`, `Finlandia`, `Danimarca`], answer: 1, explain: `In realtà la Finlandia ha circa 188.000 laghi.` },
      { type: `text`, q: `Qual è la capitale dell'Islanda?`, answer: [`reykjavik`, `reykjavík`], explain: `Reykjavík, la capitale più settentrionale di uno Stato sovrano.` },
      { type: `tf`, q: `La Norvegia fa parte dell'Unione Europea.`, answer: false, explain: `Con due referendum (1972 e 1994) i norvegesi hanno detto no.` },
      { type: `mc`, q: `Da dove viene gran parte dell'elettricità della Norvegia?`, options: [`Dal carbone`, `Dalle centrali idroelettriche`, `Dal nucleare`], answer: 1, explain: `Montagne e tante precipitazioni: fiumi e cascate ovunque.` },
      { type: `num`, q: `A quale latitudine (in gradi, circa) si trova il Circolo polare artico?`, answer: 66.6, tol: 0.5, unit: `° N`, explain: `66°34' N, cioè circa 66,6°: 90° meno l'inclinazione dell'asse (23,4°).` },
      { type: `mc`, q: `Perché l'Islanda ha tanti vulcani?`, options: [`Perché è vicina al polo`, `Perché si trova sulla dorsale medio-atlantica, dove due placche si allontanano`, `Perché è piccola`], answer: 1, explain: `Il magma risale dove le placche si separano.` },
      { type: `mc`, q: `Quale lingua NON è germanica?`, options: [`Svedese`, `Danese`, `Finlandese`], answer: 2, explain: `Il finlandese è una lingua ugro-finnica.` },
      { type: `text`, q: `Come si chiama il meridiano zero che passa per Londra?`, answer: [`greenwich`, `meridiano di greenwich`], explain: `Il meridiano di Greenwich.` },
      { type: `num`, q: `In che anno il Regno Unito è uscito dall'Unione Europea?`, answer: 2020, explain: `Il 31 gennaio 2020 (Brexit).` },
      { type: `mc`, q: `Che cosa causò la Grande carestia irlandese (1845-1849)?`, options: [`Una guerra`, `Una malattia delle patate`, `Un'eruzione vulcanica`], answer: 1, explain: `La peronospora distrusse i raccolti di patate, alimento base dei contadini.` }
    ]
  }
});

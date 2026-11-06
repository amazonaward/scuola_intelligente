TOPIC('it', {
  id: "m3-geo-america",
  title: "Le Americhe",
  intro: "Il continente americano si allunga per circa <b>14.000 km</b> dall'Artico canadese fino alla Terra del Fuoco, vicino all'Antartide: attraversa tutti i climi della Terra. Si divide in <b>America del Nord</b>, <b>America Centrale</b> (con i Caraibi) e <b>America del Sud</b>. È anche il continente dove sono emigrati milioni di italiani.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Un continente lunghissimo",
      html: `<ul>
<li><b>Superficie</b>: circa 42,5 milioni di km² (Nord e Centro circa 24,7; Sud circa 17,8).</li>
<li><b>Abitanti</b>: circa 1,05 miliardi.</li>
<li><b>Oceani</b>: Atlantico a est, Pacifico a ovest, Artico a nord.</li>
<li>L'America del Nord e quella del Sud sono unite dall'<b>istmo di Panama</b>, largo in un punto meno di 80 km e tagliato dal <b>Canale di Panama</b> (aperto nel 1914).</li>
</ul>
<p>Due modi di dividere il continente:</p>
<table>
<tr><th>Criterio</th><th>Divisione</th></tr>
<tr><td><b>Geografico</b></td><td>America del Nord (Canada, USA, Messico, Groenlandia), America Centrale e Caraibi, America del Sud</td></tr>
<tr><td><b>Culturale e linguistico</b></td><td><b>America anglosassone</b> (USA e Canada, lingua inglese) e <b>America Latina</b> (dal Messico in giù, lingue spagnola e portoghese, nate dal latino)</td></tr>
</table>`
    },
    {
      type: "text",
      title: "2. Il territorio: la \"spina dorsale\" a ovest",
      html: `<p>Lungo tutta la costa del Pacifico corre una catena di montagne giovani, come una spina dorsale:</p>
<ul>
<li>a nord le <b>Montagne Rocciose</b> (Canada e USA);</li>
<li>a sud le <b>Ande</b>, la catena più lunga del mondo (circa <b>7000 km</b>), con l'<b>Aconcagua</b> (6961 m, Argentina), la vetta più alta delle Americhe e di tutto il mondo fuori dall'Asia.</li>
</ul>
<p>A est ci sono montagne più antiche e basse (gli <b>Appalachi</b> negli USA, gli altopiani della Guyana e del Brasile).</p>
<p>In mezzo, enormi <b>pianure</b>: le <b>Grandi Pianure</b> e la prateria del Nord America, la <b>Pampa</b> argentina, il bacino dell'<b>Amazzonia</b>.</p>
<p><b>Fiumi e laghi</b>: il <b>Rio delle Amazzoni</b> (circa 6400–7000 km, il fiume con più acqua del mondo: da solo porta al mare circa un quinto di tutta l'acqua dolce dei fiumi); il <b>Mississippi-Missouri</b> (il più lungo del Nord America); il <b>Paraná</b>. Tra Canada e USA ci sono i <b>Grandi Laghi</b> (Superiore, Michigan, Huron, Erie, Ontario), con le cascate del <b>Niagara</b>.</p>`
    },
    {
      type: "3d",
      title: "I paesaggi delle Americhe in 3D",
      scene: "terrain",
      options: {
        features: {
          mountain: { label: "Ande e Montagne Rocciose", html: "La grande catena del Pacifico, nata dallo scontro tra placche oceaniche e continentali. Le Ande sono lunghe circa 7000 km." },
          peak: { label: "Aconcagua", html: "6961 m, in Argentina: la vetta più alta del mondo fuori dall'Asia." },
          volcano: { label: "Vulcani delle Ande", html: "Le Americhe fanno parte della Cintura di fuoco del Pacifico. Il Cotopaxi (Ecuador) è uno dei vulcani attivi più alti del mondo." },
          river: { label: "Rio delle Amazzoni", html: "Il fiume più ricco d'acqua del mondo. Alla foce è largo decine di chilometri e l'acqua dolce si spinge per decine di chilometri nell'oceano." },
          plain: { label: "Grandi Pianure e Pampa", html: "Pianure immense, tra le più coltivate del mondo: grano e mais negli USA e in Canada, allevamento e soia nella Pampa argentina." },
          lake: { label: "Grandi Laghi", html: "Cinque laghi tra Canada e USA che contengono circa il 20% dell'acqua dolce superficiale del pianeta. Il lago Superiore è il più grande lago d'acqua dolce del mondo per superficie." },
          isthmus: { label: "Istmo di Panama", html: "La striscia di terra che unisce le due Americhe, formatasi circa 3 milioni di anni fa. Il Canale di Panama (82 km) permette alle navi di non circumnavigare il Sud America." },
          archipelago: { label: "Caraibi", html: "Le Antille: isole come Cuba, Hispaniola (Haiti e Repubblica Dominicana), Giamaica, Porto Rico. Qui sbarcò Cristoforo Colombo nel 1492." },
          glacier: { label: "Patagonia e Alaska", html: "Grandi ghiacciai a sud (Perito Moreno, in Argentina) e a nord (Alaska, Groenlandia)." },
          strait: { label: "Stretto di Magellano", html: "Il passaggio tra l'Atlantico e il Pacifico all'estremo sud, scoperto da Ferdinando Magellano nel 1520." }
        }
      },
      caption: "Tocca le parti: dall'Alaska alla Patagonia ci sono tutti i paesaggi della Terra."
    },
    {
      type: "text",
      title: "3. Climi e ambienti",
      html: `<p>Poiché si estende da circa 83° N a 56° S, l'America ha <b>tutti i climi</b>:</p>
<ul>
<li>🧊 <b>polare</b> e tundra: nord del Canada, Alaska, Groenlandia;</li>
<li>🌲 <b>freddo</b> con taiga: Canada;</li>
<li>🌳 <b>temperato</b>: gran parte degli USA, Sud del Brasile, Argentina, Cile centrale (che ha un clima mediterraneo come l'Italia);</li>
<li>🏜️ <b>arido</b>: deserti del Sud-Ovest USA e del Messico; il deserto di <b>Atacama</b> in Cile, il più arido del mondo (in alcune stazioni non è mai stata registrata pioggia);</li>
<li>🌴 <b>tropicale ed equatoriale</b>: America Centrale, Caraibi, Amazzonia.</li>
</ul>
<p>L'<b>Amazzonia</b> è la foresta pluviale più grande del mondo (circa 5,5 milioni di km², per il 60% in Brasile): ospita circa il 10% delle specie viventi conosciute. Ma è minacciata dalla <b>deforestazione</b> per fare spazio ad allevamenti, coltivazioni di soia e miniere.</p>
<p>Nel Golfo del Messico e nei Caraibi, tra giugno e novembre, si formano gli <b>uragani</b>, cicloni tropicali con venti che possono superare i 250 km/h.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: territorio e climi",
      questions: [
        { type: "mc", q: "Qual è la catena montuosa più lunga del mondo?", options: ["Montagne Rocciose", "Ande", "Appalachi"], answer: 1, explain: "Le Ande, circa 7000 km." },
        { type: "text", q: "Come si chiama il fiume con più acqua del mondo?", answer: ["rio delle amazzoni", "amazzoni", "amazon", "il rio delle amazzoni"], explain: "Il Rio delle Amazzoni." },
        { type: "tf", q: "Il deserto di Atacama, in Cile, è uno dei luoghi più aridi del mondo.", answer: true, explain: "È considerato il deserto non polare più arido della Terra." }
      ]
    },
    {
      type: "text",
      title: "4. Storia e popolazione",
      html: `<p>Prima dell'arrivo degli europei le Americhe erano abitate da popoli nativi arrivati dall'Asia, attraverso lo <b>stretto di Bering</b>, almeno 15.000–20.000 anni fa. Svilupparono grandi civiltà: <b>Maya</b> (America Centrale), <b>Aztechi</b> (Messico) e <b>Inca</b> (Ande).</p>
<p>Dopo il <b>1492</b> (Cristoforo Colombo) arrivarono i colonizzatori: <b>spagnoli</b> e <b>portoghesi</b> al Centro e al Sud, <b>inglesi</b> e <b>francesi</b> al Nord. Le malattie portate dall'Europa (vaiolo, morbillo) e le guerre causarono il crollo delle popolazioni native. Milioni di africani furono deportati come schiavi.</p>
<p>Per questo oggi la popolazione è molto <b>mescolata</b>: discendenti dei nativi (\"amerindi\"), di europei, di africani, di asiatici, e <b>meticci</b> (con origini miste).</p>
<p>Tra il 1876 e il 1976 milioni di <b>italiani</b> emigrarono soprattutto in USA, <b>Argentina</b> e <b>Brasile</b>. Oggi in Argentina circa la metà degli abitanti ha almeno un antenato italiano; in Brasile i discendenti di italiani sono decine di milioni, concentrati soprattutto nello Stato di San Paolo.</p>`
    },
    {
      type: "text",
      title: "5. America del Nord: USA e Canada",
      html: `<p><b>Stati Uniti d'America</b> 🇺🇸: capitale <b>Washington</b>; circa 335 milioni di abitanti; 50 Stati federati. È la <b>prima economia del mondo</b>: grandi aziende tecnologiche (Silicon Valley in California), finanza (Wall Street a New York), agricoltura meccanizzata, industria, ricerca scientifica e Hollywood. Città principali: New York, Los Angeles, Chicago, Houston.</p>
<p><b>Canada</b> 🇨🇦: capitale <b>Ottawa</b>; il secondo Paese più grande del mondo (circa 10 milioni di km²) ma con solo circa 40 milioni di abitanti, quasi tutti vicino al confine con gli USA. Due lingue ufficiali: <b>inglese</b> e <b>francese</b> (nel Québec). Ricchissimo di risorse: foreste, petrolio, acqua, minerali.</p>
<p><b>Messico</b> 🇲🇽: capitale Città del Messico (una delle metropoli più grandi del mondo); circa 130 milioni di abitanti; lingua spagnola. È geograficamente in America del Nord, ma culturalmente fa parte dell'America Latina.</p>`
    },
    {
      type: "text",
      title: "6. America Centrale e del Sud",
      html: `<p><b>Brasile</b> 🇧🇷: capitale <b>Brasília</b> (costruita apposta, inaugurata nel 1960); circa 210 milioni di abitanti; lingua <b>portoghese</b>. Il Paese più grande e popoloso del Sud America, grande esportatore di soia, caffè, carne, ferro. Grandi città: San Paolo, Rio de Janeiro.</p>
<p><b>Argentina</b> 🇦🇷: capitale Buenos Aires; circa 46 milioni di abitanti; dalla Pampa (carne, grano, soia) alla Patagonia.</p>
<p>Altri Paesi: <b>Colombia</b>, <b>Perù</b> (Machu Picchu, la città inca), <b>Cile</b> (lunghissimo e stretto: circa 4300 km per una larghezza media di 180 km), <b>Venezuela</b>, <b>Ecuador</b>, <b>Bolivia</b>, <b>Cuba</b>…</p>
<p><b>Problemi</b> dell'America Latina: forti <b>disuguaglianze</b> (accanto a quartieri ricchissimi ci sono le baraccopoli, in Brasile chiamate <b>favelas</b>), criminalità legata al traffico di droga in alcune zone, instabilità politica, deforestazione. Molte persone dall'America Centrale e dal Messico emigrano verso gli USA.</p>`
    },
    {
      type: "svg",
      title: "Le Americhe: le grandi regioni",
      svg: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="360" fill="#bae6fd"/>
<path d="M90 30 L330 20 L360 60 L320 100 L300 140 L250 160 L230 175 L200 170 L160 140 L120 100 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="230" y="70" font-size="16" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Canada</text>
<text x="230" y="125" font-size="16" text-anchor="middle" font-weight="bold" fill="#1e3a8a">USA</text>
<path d="M200 170 L230 175 L250 160 L245 185 L265 210 L275 225 L255 220 L225 195 Z" fill="#fcd34d" stroke="#92400e" stroke-width="2"/>
<text x="210" y="200" font-size="14" text-anchor="end" font-weight="bold" fill="#78350f">Messico e Centro</text>
<ellipse cx="320" cy="195" rx="28" ry="7" fill="#fcd34d" stroke="#92400e"/>
<text x="360" y="200" font-size="13" fill="#78350f">Caraibi</text>
<path d="M275 225 L330 230 L390 260 L370 300 L320 340 L300 350 L285 300 L270 250 Z" fill="#86efac" stroke="#166534" stroke-width="2"/>
<text x="330" y="275" font-size="16" text-anchor="middle" font-weight="bold" fill="#14532d">Sud America</text>
<path d="M120 100 L160 140 L200 170" stroke="#78350f" stroke-width="6" fill="none"/>
<path d="M275 225 L270 250 L285 300 L300 350" stroke="#78350f" stroke-width="6" fill="none"/>
<text x="95" y="150" font-size="13" fill="#78350f" font-weight="bold">Rocciose</text>
<text x="230" y="320" font-size="13" fill="#78350f" font-weight="bold">Ande</text>
<rect x="430" y="40" width="160" height="110" rx="8" fill="#ffffff" stroke="#334155"/>
<rect x="442" y="56" width="16" height="16" fill="#93c5fd"/><text x="466" y="70" font-size="13" fill="#111827">America anglosassone</text>
<rect x="442" y="86" width="16" height="16" fill="#fcd34d"/><text x="466" y="100" font-size="13" fill="#111827">America Latina (Centro)</text>
<rect x="442" y="116" width="16" height="16" fill="#86efac"/><text x="466" y="130" font-size="13" fill="#111827">America Latina (Sud)</text>
</svg>`,
      caption: "Schema non in scala. La linea marrone a ovest rappresenta la \"spina dorsale\" delle montagne lungo il Pacifico."
    },
    {
      type: "widget",
      title: "Gioco: Nord, Centro o Sud?",
      widget: "classify",
      options: {
        groups: ["America del Nord", "America Centrale e Caraibi", "America del Sud"],
        items: [["Canada", 0], ["Stati Uniti", 0], ["Grandi Laghi", 0], ["Cuba", 1], ["Panama", 1], ["Guatemala (Maya)", 1], ["Brasile", 2], ["Argentina", 2], ["Machu Picchu (Perù)", 2], ["Aconcagua", 2]]
      },
      caption: "Per semplicità il Messico è spesso studiato con l'America Centrale, ma geograficamente fa parte del Nord."
    },
    {
      type: "example",
      title: "Esempio pratico: quanto si risparmia con il Canale di Panama",
      html: `<p>Una nave va da <b>New York</b> a <b>San Francisco</b>.</p>
<ul>
<li>Girando intorno al Sud America (Capo Horn): circa <b>22.500 km</b>.</li>
<li>Passando dal Canale di Panama: circa <b>9.500 km</b>.</li>
</ul>
<p>Si risparmiano circa <b>13.000 km</b>, cioè più della metà del viaggio (circa il 58%)! Il canale usa un sistema di <b>chiuse</b> che sollevano le navi di circa 26 metri fino al lago Gatún e poi le riabbassano. Ogni passaggio consuma moltissima acqua dolce: nel 2023 una siccità ha costretto a ridurre il numero di navi.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: \"italiani\" in Argentina",
      html: `<p>A <b>Buenos Aires</b> si dice \"<i>chau</i>\" per salutare (da \"ciao\"), si mangia la \"<i>milanesa</i>\" (la cotoletta) e il \"<i>fainá</i>\" (la farinata ligure), e il <b>29</b> di ogni mese, per tradizione, si mangiano gli <b>ñoquis</b> (gnocchi)!</p>
<p>Lo spagnolo di Buenos Aires ha perfino una cadenza simile all'italiano del Sud: molti studiosi lo spiegano con i milioni di immigrati italiani arrivati tra fine Ottocento e inizio Novecento. Anche papa <b>Francesco</b> (Jorge Mario Bergoglio, 1936–2025) era figlio di un emigrato piemontese.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… l'America prende il nome da un italiano?",
      html: `<p>Il nome \"America\" viene dal navigatore fiorentino <b>Amerigo Vespucci</b>, che nei primi anni del Cinquecento capì che le terre raggiunte da Colombo non erano l'Asia ma un <b>\"Mondo Nuovo\"</b>. Nel <b>1507</b> il cartografo tedesco Martin Waldseemüller scrisse \"America\" su una sua carta, e il nome si diffuse.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Alaska e Russia distano meno di 4 km?",
      html: `<p>Nello <b>Stretto di Bering</b> ci sono due isolette: la Grande Diomede (Russia) e la Piccola Diomede (USA). Distano circa <b>3,8 km</b>. Ma tra le due passa la <b>Linea internazionale del cambio di data</b>: sulla grande isola è già \"domani\", mentre sulla piccola è ancora \"oggi\"! Per questo sono chiamate l'isola di domani e l'isola di ieri.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per conoscere le Americhe",
      intro: "Le Americhe si possono esplorare anche viaggiando, giocando o confrontando.",
      tabs: [
        {
          label: "🌍 Viaggio sul globo",
          html: `<p>Fai il viaggio della <b>Panamericana</b>, la rete di strade che va dall'Alaska alla Terra del Fuoco (circa 30.000 km, interrotta solo dalla foresta del Darién tra Panama e Colombia).</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 70.2, lon: -148.5, label: "Prudhoe Bay (Alaska)", color: "#0ea5e9" },
              { lat: 49.3, lon: -123.1, label: "Vancouver", color: "#2563eb" },
              { lat: 34.05, lon: -118.24, label: "Los Angeles", color: "#2563eb" },
              { lat: 19.43, lon: -99.13, label: "Città del Messico", color: "#f59e0b" },
              { lat: 8.98, lon: -79.52, label: "Panama", color: "#f59e0b" },
              { lat: -0.18, lon: -78.47, label: "Quito (equatore)", color: "#16a34a" },
              { lat: -12.05, lon: -77.04, label: "Lima", color: "#16a34a" },
              { lat: -33.45, lon: -70.67, label: "Santiago del Cile", color: "#16a34a" },
              { lat: -54.8, lon: -68.3, label: "Ushuaia", color: "#7c3aed" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6, 7, 8], color: "#dc2626" }]
          }
        },
        {
          label: "🔤 Trucco: le lingue",
          html: `<p>Per capire l'America Latina ricorda: <b>\"tutti parlano spagnolo… tranne il Brasile\"</b>, dove si parla <b>portoghese</b>. Perché?</p>
<p>Nel <b>1494</b>, con il <b>Trattato di Tordesillas</b>, Spagna e Portogallo si divisero le terre nuove con una linea immaginaria nell'Atlantico: a ovest la Spagna, a est il Portogallo. La punta orientale del Sud America, il futuro Brasile, cadeva nella parte portoghese!</p>
<p>Altre eccezioni: in Canada si parla anche francese; in Haiti francese e creolo; in Suriname olandese; in Guyana e Giamaica inglese.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#bae6fd"/>
<path d="M200 40 L280 50 L340 90 L320 150 L270 220 L240 230 L225 170 L200 110 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<path d="M280 50 L340 90 L320 150 L290 170 L285 60 Z" fill="#86efac" stroke="#166534" stroke-width="2"/>
<line x1="285" y1="10" x2="285" y2="235" stroke="#dc2626" stroke-width="4" stroke-dasharray="10 6"/>
<text x="285" y="28" font-size="14" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Linea di Tordesillas (1494)</text>
<text x="140" y="130" font-size="18" text-anchor="middle" fill="#92400e" font-weight="bold">Spagna</text>
<text x="430" y="130" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">Portogallo</text>
<text x="310" y="120" font-size="14" text-anchor="middle" fill="#14532d" font-weight="bold">Brasile</text>
</svg>`
        },
        {
          label: "🧩 Abbina capitale e Paese",
          html: `<p>Molte capitali americane non sono la città più grande del Paese! Abbinale.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Washington", "Stati Uniti"],
              ["Ottawa", "Canada"],
              ["Brasília", "Brasile"],
              ["Buenos Aires", "Argentina"],
              ["Città del Messico", "Messico"],
              ["Lima", "Perù"],
              ["L'Avana", "Cuba"]
            ]
          }
        },
        {
          label: "📊 Due Americhe a confronto",
          html: `<p>Confronta con i dati i due \"mondi\" americani:</p>
<table>
<tr><th></th><th>🇺🇸 USA</th><th>🇨🇦 Canada</th><th>🇧🇷 Brasile</th><th>🇭🇹 Haiti</th></tr>
<tr><td>Speranza di vita</td><td>circa 78 anni</td><td>circa 82 anni</td><td>circa 76 anni</td><td>circa 64 anni</td></tr>
<tr><td>ISU</td><td>0,93</td><td>0,94</td><td>0,76</td><td>0,55</td></tr>
</table>
<p>Il continente ha sia alcuni dei Paesi più ricchi del mondo sia uno dei più poveri, <b>Haiti</b>, che pure nel 1804 fu la prima repubblica fondata da ex schiavi liberati.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle Americhe: tocca i nodi e scopri il perché",
      nodes: [
        { id: "placche", label: "Placche del Pacifico", x: 20, y: 8, color: "#b45309", html: "Le placche oceaniche scivolano sotto il continente.", why: "La placca di Nazca si infila sotto quella sudamericana (subduzione): il bordo del continente si piega e si solleva, formando le Ande e i loro vulcani. Così è nata anche la Cintura di fuoco." },
        { id: "montagne", label: "Rocciose e Ande", x: 20, y: 32, color: "#78716c", html: "Montagne giovani lungo tutta la costa ovest.", why: "Sono giovani (decine di milioni di anni) e quindi alte e appuntite; gli Appalachi a est sono antichissimi (oltre 300 milioni di anni) e consumati dall'erosione." },
        { id: "estensione", label: "Da 83° N a 56° S", x: 55, y: 8, color: "#ef4444", html: "Il continente più lungo da nord a sud.", why: "Attraversa tutte le latitudini tranne quelle polari più estreme del sud: per questo contiene tutti i climi, dalla tundra all'equatore." },
        { id: "climi", label: "Tutti i climi", x: 55, y: 32, color: "#16a34a", html: "Polare, freddo, temperato, arido, tropicale, equatoriale.", why: "Oltre alla latitudine contano le Ande, che bloccano i venti umidi (per questo l'Atacama è così secco), e le correnti fredde come quella di Humboldt lungo il Cile e il Perù." },
        { id: "amazzonia", label: "Amazzonia", x: 85, y: 32, color: "#15803d", html: "La foresta pluviale più grande del mondo.", why: "Caldo costante e piogge abbondanti all'equatore; le piogge sono in parte \"riciclate\" dalla foresta stessa, che traspira acqua. Se si taglia troppo, gli scienziati temono che una parte si trasformi in savana." },
        { id: "nativi", label: "Popoli nativi", x: 85, y: 55, color: "#a855f7", html: "Maya, Aztechi, Inca e centinaia di altri popoli.", why: "Arrivarono dall'Asia attraverso la Beringia, un ponte di terra emerso durante l'ultima era glaciale, quando il livello del mare era più basso." },
        { id: "colonizzazione", label: "Colonizzazione europea", x: 55, y: 58, color: "#64748b", html: "Dal 1492: Spagna, Portogallo, Inghilterra, Francia.", why: "Colombo cercava una via per l'Asia verso ovest; dopo di lui gli europei cercarono oro, argento e terre per le piantagioni. Il Trattato di Tordesillas (1494) divise le terre tra Spagna e Portogallo." },
        { id: "angloLatina", label: "Anglosassone e Latina", x: 25, y: 62, color: "#2563eb", html: "Due grandi aree culturali e linguistiche.", why: "Dipendono da chi colonizzò ogni territorio: inglesi a nord, spagnoli e portoghesi a sud. L'espressione \"America Latina\" si diffuse dalla Francia a metà Ottocento." },
        { id: "migrazioni", label: "Migrazioni", x: 40, y: 85, color: "#ec4899", html: "Europei, africani deportati, asiatici; oggi migrazioni verso gli USA.", why: "Le Americhe sono state per secoli una \"terra di immigrazione\"; tra il 1880 e il 1920 arrivarono oltre 20 milioni di europei solo negli USA, molti dei quali italiani." },
        { id: "sviluppo", label: "Ricchezza e disuguaglianze", x: 75, y: 85, color: "#f59e0b", html: "USA e Canada ricchi; America Latina con forti disuguaglianze.", why: "Hanno pesato il tipo di colonizzazione (grandi latifondi e miniere al sud, piccole fattorie e industria al nord), le dittature del Novecento e la dipendenza dall'esportazione di materie prime." }
      ],
      edges: [
        ["placche", "montagne", "sollevano le"],
        ["estensione", "climi", "spiega"],
        ["montagne", "climi", "influenzano i"],
        ["climi", "amazzonia", "fanno crescere l'"],
        ["nativi", "colonizzazione", "subiscono la"],
        ["colonizzazione", "angloLatina", "crea le aree"],
        ["colonizzazione", "migrazioni", "avvia le"],
        ["angloLatina", "sviluppo", "aiuta a capire"],
        ["migrazioni", "sviluppo", "legate allo"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Americhe</b>: 42,5 milioni km², circa 1 miliardo di abitanti; <b>Nord</b>, <b>Centro e Caraibi</b>, <b>Sud</b>; unite dall'<b>istmo di Panama</b>.</li>
<li>A ovest le montagne giovani: <b>Rocciose</b> e <b>Ande</b> (Aconcagua 6961 m); al centro grandi pianure; fiumi: <b>Rio delle Amazzoni</b>, <b>Mississippi</b>; <b>Grandi Laghi</b>.</li>
<li>Tutti i climi: dalla tundra all'<b>Amazzonia</b> (foresta pluviale più grande).</li>
<li><b>America anglosassone</b> (USA, Canada) e <b>America Latina</b> (spagnolo; in Brasile portoghese).</li>
<li>USA prima economia mondiale; Brasile gigante del Sud; forti disuguaglianze in America Latina.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Paesi e popoli",
      questions: [
        { type: "mc", q: "Quale lingua si parla in Brasile?", options: ["Spagnolo", "Portoghese", "Inglese"], answer: 1, explain: "Il portoghese, per via del Trattato di Tordesillas." },
        { type: "text", q: "Qual è la capitale del Canada?", answer: ["ottawa"], explain: "Ottawa, non Toronto (la città più grande)." },
        { type: "mc", q: "Da chi prende il nome l'America?", options: ["Cristoforo Colombo", "Amerigo Vespucci", "Ferdinando Magellano"], answer: 1, explain: "Dal navigatore fiorentino Amerigo Vespucci." }
      ]
    }
  ],
  glossary: [
    { t: "America Latina", d: "Insieme dei Paesi americani in cui si parlano lingue derivate dal latino (spagnolo, portoghese, francese)." },
    { t: "America anglosassone", d: "USA e Canada, colonizzati soprattutto da inglesi." },
    { t: "Istmo", d: "Striscia di terra che unisce due terre e separa due mari, come quello di Panama." },
    { t: "Subduzione", d: "Processo in cui una placca tettonica scivola sotto un'altra." },
    { t: "Pampa", d: "Grande pianura erbosa dell'Argentina, usata per allevamento e agricoltura." },
    { t: "Deforestazione", d: "Taglio delle foreste per fare spazio a coltivazioni, allevamenti, miniere o città." },
    { t: "Uragano", d: "Ciclone tropicale dell'Atlantico con venti fortissimi." },
    { t: "Meticcio", d: "Persona con antenati di origini diverse, per esempio europee e native americane." },
    { t: "Favela", d: "Quartiere povero e spesso abusivo delle grandi città brasiliane." },
    { t: "Stato federale", d: "Stato formato da più Stati membri con una certa autonomia, come gli USA (50 Stati)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa unisce l'America del Nord e l'America del Sud?", options: ["Lo Stretto di Magellano", "L'istmo di Panama", "Lo Stretto di Bering"], answer: 1, explain: "L'istmo di Panama, tagliato dal Canale (1914)." },
      { type: "text", q: "Qual è la vetta più alta delle Americhe?", answer: ["aconcagua", "l'aconcagua"], explain: "L'Aconcagua, 6961 m, in Argentina." },
      { type: "tf", q: "Le Montagne Rocciose si trovano sulla costa atlantica.", answer: false, explain: "Sono a ovest, lungo il Pacifico; a est ci sono gli Appalachi." },
      { type: "mc", q: "Dove si trovano i Grandi Laghi?", options: ["Tra Canada e Stati Uniti", "In Brasile", "In Messico"], answer: 0, explain: "Superiore, Michigan, Huron, Erie e Ontario, al confine tra Canada e USA." },
      { type: "mc", q: "Perché in Brasile si parla portoghese?", options: ["Per il Trattato di Tordesillas del 1494", "Perché lo scelsero i Maya", "Perché lo impose l'ONU"], answer: 0, explain: "La linea di Tordesillas assegnava al Portogallo la parte orientale del Sud America." },
      { type: "num", q: "Una nave risparmia circa 13.000 km su 22.500 passando da Panama. Quanti km percorre?", answer: 9500, tol: 0, unit: "km", explain: "22.500 − 13.000 = 9.500 km." },
      { type: "mc", q: "Qual è la foresta pluviale più grande del mondo?", options: ["Foresta del Congo", "Amazzonia", "Taiga canadese"], answer: 1, explain: "L'Amazzonia, circa 5,5 milioni di km²." },
      { type: "tf", q: "Il Canada ha due lingue ufficiali: inglese e francese.", answer: true, explain: "Il francese è parlato soprattutto nel Québec." },
      { type: "order", q: "Ordina dal più a nord al più a sud.", items: ["Canada", "Stati Uniti", "Messico", "Panama", "Perù", "Argentina"], explain: "Scendendo lungo il continente da nord verso sud." },
      { type: "text", q: "Qual è la capitale del Brasile?", answer: ["brasilia", "brasília"], explain: "Brasília, inaugurata nel 1960." },
      { type: "mc", q: "Quale di questi popoli viveva sulle Ande?", options: ["Inca", "Aztechi", "Maya"], answer: 0, explain: "Gli Inca, con capitale Cusco; gli Aztechi erano in Messico e i Maya in America Centrale." },
      { type: "mc", q: "Qual è un problema tipico di molte grandi città dell'America Latina?", options: ["La mancanza di abitanti", "Le forti disuguaglianze, con baraccopoli accanto a quartieri ricchi", "Il ghiaccio tutto l'anno"], answer: 1, explain: "Le favelas brasiliane ne sono un esempio." }
    ]
  }
});

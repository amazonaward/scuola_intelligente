TOPIC('it', {
  id: "l1-geo-popolazione",
  title: "La popolazione mondiale",
  intro: "Nel novembre 2022 gli esseri umani hanno superato gli <b>8 miliardi</b>. Come si è arrivati fin qui? Perché in alcuni Paesi nascono molti bambini e in altri pochissimi? E perché metà dell'umanità vive in poche aree densissime? La <b>demografia</b> studia numeri, età e distribuzione delle persone: ti aiuta a capire economia, scuola, sanità e futuro.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Quanti siamo e come siamo cresciuti",
      html: `<p>La popolazione mondiale ha impiegato quasi tutta la storia umana per raggiungere il <b>primo miliardo</b> (intorno al <b>1804</b>) e poi ha accelerato in modo vertiginoso:</p>
<ul>
<li>1 miliardo: circa <b>1804</b></li>
<li>2 miliardi: <b>1927</b> (123 anni dopo)</li>
<li>4 miliardi: <b>1974</b></li>
<li>6 miliardi: <b>1999</b></li>
<li>8 miliardi: <b>novembre 2022</b> (stima ONU)</li>
</ul>
<p>L'ultimo miliardo è arrivato in soli <b>circa 11-12 anni</b>. La causa non è che si facciano più figli per donna (anzi, la <b>fecondità</b> mondiale è diminuita), ma che si <b>muore molto meno</b>: igiene, vaccini, antibiotici, acqua potabile, più cibo hanno abbassato la mortalità, soprattutto infantile. La <b>speranza di vita</b> mondiale alla nascita è passata da circa 30-35 anni nel 1800 a oltre <b>70 anni</b> oggi.</p>
<p>Il primo a ragionare sulla crescita demografica fu l'economista inglese <b>Thomas Malthus</b>, che nel <b>1798</b> sostenne che la popolazione crescesse in progressione geometrica (1, 2, 4, 8…) e le risorse alimentari solo in progressione aritmetica (1, 2, 3, 4…), e che quindi fame e guerre fossero inevitabili. Non aveva previsto il progresso tecnico (concimi, macchine, nuove sementi) che ha moltiplicato i raccolti. Il problema, oggi, è più spesso la <b>distribuzione</b> del cibo che la sua quantità, e la <b>sostenibilità</b> ambientale.</p>`
    },
    {
      type: "widget",
      title: "La linea del tempo: i miliardi",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: 1804, label: "1 miliardo", icon: "👶" },
          { year: 1927, label: "2 miliardi", icon: "👨‍👩‍👧" },
          { year: 1960, label: "3 miliardi", icon: "🏙️" },
          { year: 1974, label: "4 miliardi", icon: "🌍" },
          { year: 1987, label: "5 miliardi", icon: "📈" },
          { year: 1999, label: "6 miliardi", icon: "🌐" },
          { year: 2011, label: "7 miliardi", icon: "📱" },
          { year: 2022, label: "8 miliardi", icon: "🚀" }
        ]
      },
      caption: "Più ci si avvicina al presente, più i miliardi arrivano in fretta: un'accelerazione senza precedenti nella storia umana."
    },
    {
      type: "text",
      title: "2. Gli indicatori demografici",
      html: `<p>Per descrivere una popolazione si usano alcuni indici fondamentali:</p>
<ul>
<li><b>Tasso di natalità</b>: nati per 1.000 abitanti in un anno (es. Italia circa 6-7 ‰; Niger circa 45 ‰).</li>
<li><b>Tasso di mortalità</b>: morti per 1.000 abitanti in un anno (Italia circa 11-12 ‰).</li>
<li><b>Saldo naturale</b> = natalità − mortalità. In Italia è <b>negativo</b>: muoiono più persone di quante ne nascono (dal 2015 circa; nel 2023 i nati sono stati intorno ai 380.000, un minimo storico).</li>
<li><b>Tasso di fecondità</b> (o numero medio di figli per donna). Per mantenere stabile la popolazione servono circa <b>2,1 figli per donna</b> (\"soglia di sostituzione\"). Media mondiale: circa 2,3. Italia: circa <b>1,2</b>; Corea del Sud: sotto <b>0,8</b>, il minimo mondiale; Niger: oltre <b>6</b>.</li>
<li><b>Mortalità infantile</b>: morti nel primo anno di vita per 1.000 nati vivi (Italia circa 2-3 ‰; Africa subsahariana oltre 50 ‰ in media).</li>
<li><b>Speranza di vita alla nascita</b>: Giappone e Italia sopra 83-84 anni; Ciad, Nigeria e Repubblica Centrafricana intorno ai 53-55.</li>
<li><b>Indice di vecchiaia</b>: anziani (over 65) ogni 100 giovani (0-14 anni). In Italia è oltre 190: gli anziani sono quasi il doppio dei giovani.</li>
</ul>
<p>La crescita complessiva dipende dal <b>saldo naturale</b> e dal <b>saldo migratorio</b> (immigrati − emigrati).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: calcolare un tasso",
      html: `<p>Un Paese ha <b>60 milioni</b> di abitanti. In un anno nascono <b>420.000</b> bambini e muoiono <b>700.000</b> persone. Calcola natalità, mortalità e saldo naturale.</p>
<ul>
<li>Natalità = 420.000 ÷ 60.000.000 × 1.000 = <b>7 ‰</b></li>
<li>Mortalità = 700.000 ÷ 60.000.000 × 1.000 ≈ <b>11,7 ‰</b></li>
<li>Saldo naturale = 420.000 − 700.000 = <b>−280.000</b> persone, cioè circa −4,7 ‰</li>
</ul>
<p>La popolazione cala di 280.000 persone l'anno per cause naturali (come una città di 280.000 abitanti che sparisce ogni anno). Per mantenerla stabile servirebbe un saldo migratorio positivo di pari entità, oppure un aumento delle nascite.</p>`
    },
    {
      type: "text",
      title: "3. La transizione demografica",
      html: `<p>Studiando i Paesi europei, i demografi (Warren Thompson nel 1929, Frank Notestein nel 1945) hanno descritto un modello a <b>quattro fasi</b>, la <b>transizione demografica</b>, in cui un Paese passa da \"tanti nati e tanti morti\" a \"pochi nati e pochi morti\":</p>
<ol>
<li><b>Fase preindustriale</b>: natalità <b>alta</b>, mortalità <b>alta</b>. La popolazione cresce poco (Europa fino al Settecento, alcune aree isolate oggi).</li>
<li><b>Fase di espansione</b>: la mortalità <b>scende</b> (medicina, igiene), la natalità resta alta: <b>esplosione demografica</b> (Europa nell'Ottocento; oggi Africa subsahariana).</li>
<li><b>Fase di rallentamento</b>: anche la natalità <b>scende</b> (urbanizzazione, istruzione delle donne, contraccezione, costo dei figli): la crescita rallenta (America Latina, India, gran parte dell'Asia).</li>
<li><b>Fase matura</b>: natalità <b>bassa</b>, mortalità <b>bassa</b>. Crescita quasi nulla o negativa; invecchiamento (Europa, Giappone, Corea).</li>
</ol>
<p>Alcuni studiosi ne propongono una quinta, nella quale la natalità scende <b>sotto</b> la mortalità e la popolazione <b>diminuisce</b> (Italia, Giappone, Cina dal 2022).</p>`
    },
    {
      type: "svg",
      title: "Il modello della transizione demografica",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="50" y1="30" x2="50" y2="250" stroke="#111827" stroke-width="2"/>
<path d="M50 60 L170 60 C220 60 250 100 300 150 C360 200 420 225 570 225" fill="none" stroke="#2563eb" stroke-width="5"/>
<path d="M50 65 L130 65 C180 65 200 150 250 200 C300 235 400 240 570 240" fill="none" stroke="#dc2626" stroke-width="5"/>
<path d="M170 60 C220 60 250 100 300 150 C360 200 420 225 570 225 L570 240 C400 240 300 235 250 200 C200 150 180 65 130 65 Z" fill="#fde68a" opacity="0.6"/>
<line x1="170" y1="250" x2="170" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="300" y1="250" x2="300" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="420" y1="250" x2="420" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="110" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Fase 1</text>
<text x="235" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Fase 2</text>
<text x="360" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Fase 3</text>
<text x="495" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Fase 4</text>
<text x="60" y="48" font-size="15" fill="#2563eb" font-weight="bold">natalità</text>
<text x="100" y="95" font-size="15" fill="#dc2626" font-weight="bold">mortalità</text>
<text x="240" y="150" font-size="14" fill="#92400e" font-weight="bold">crescita</text>
<text x="420" y="20" font-size="14" text-anchor="middle" fill="#111827">tempo e sviluppo →</text>
</svg>`,
      caption: "La zona gialla tra le due curve è la crescita naturale: massima nella fase 2, quando la mortalità è già scesa ma la natalità è ancora alta."
    },
    {
      type: "quiz",
      title: "Mini-quiz: indicatori e transizione",
      questions: [
        { type: "mc", q: "Quanti figli per donna servono (circa) per mantenere stabile una popolazione?", options: ["1,0", "2,1", "4,0"], answer: 1, explain: "La soglia di sostituzione è circa 2,1: un po' più di 2 perché non tutti i nati arrivano all'età adulta." },
        { type: "mc", q: "In quale fase della transizione la crescita è massima?", options: ["Fase 1", "Fase 2", "Fase 4"], answer: 1, explain: "Nella fase 2 la mortalità è già scesa ma la natalità è ancora alta." },
        { type: "num", q: "In un Paese di 10 milioni di abitanti nascono 150.000 bambini in un anno. Qual è il tasso di natalità (in ‰)?", answer: 15, tol: 0, unit: "‰", explain: "150.000 ÷ 10.000.000 × 1.000 = 15 per mille." }
      ]
    },
    {
      type: "text",
      title: "4. La piramide delle età",
      html: `<p>La <b>piramide delle età</b> è un grafico a barre orizzontali: ogni barra rappresenta una fascia d'età (di solito a gruppi di 5 anni), con i maschi a sinistra e le femmine a destra. Dalla forma si capisce lo stato demografico di un Paese:</p>
<ul>
<li><b>Piramide espansiva</b> (base larga, punta stretta): molti giovani, natalità alta, mortalità alta in età adulta (Niger, Mali, Somalia, Afghanistan). Popolazione molto giovane (età mediana intorno ai 15-16 anni).</li>
<li><b>Piramide stazionaria</b> (forma quasi rettangolare): natalità e mortalità basse e simili.</li>
<li><b>Piramide regressiva</b> (base stretta, bulbo nelle età centrali-alte): pochi giovani e tanti anziani (Italia, Giappone, Germania, Corea). L'età mediana degli italiani è circa <b>48 anni</b>, tra le più alte al mondo.</li>
</ul>
<p>Le conseguenze si vedono nella vita reale: in un Paese giovane servono scuole, lavoro per milioni di ragazzi (e può nascere un <b>dividendo demografico</b>, se i giovani trovano occupazione); in un Paese vecchio crescono <b>pensioni e sanità</b>, mancano lavoratori, chiudono scuole e paesi.</p>`
    },
    {
      type: "svg",
      title: "Tre piramidi delle età a confronto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="100" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Espansiva</text>
<text x="300" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Stazionaria</text>
<text x="500" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Regressiva</text>
<g fill="#38bdf8" stroke="#075985">
<rect x="30" y="230" width="140" height="20"/>
<rect x="45" y="205" width="110" height="20"/>
<rect x="58" y="180" width="84" height="20"/>
<rect x="70" y="155" width="60" height="20"/>
<rect x="78" y="130" width="44" height="20"/>
<rect x="86" y="105" width="28" height="20"/>
<rect x="92" y="80" width="16" height="20"/>
<rect x="96" y="55" width="8" height="20"/>
</g>
<g fill="#38bdf8" stroke="#075985">
<rect x="235" y="230" width="130" height="20"/>
<rect x="232" y="205" width="136" height="20"/>
<rect x="230" y="180" width="140" height="20"/>
<rect x="232" y="155" width="136" height="20"/>
<rect x="236" y="130" width="128" height="20"/>
<rect x="244" y="105" width="112" height="20"/>
<rect x="256" y="80" width="88" height="20"/>
<rect x="276" y="55" width="48" height="20"/>
</g>
<g fill="#38bdf8" stroke="#075985">
<rect x="460" y="230" width="80" height="20"/>
<rect x="450" y="205" width="100" height="20"/>
<rect x="440" y="180" width="120" height="20"/>
<rect x="430" y="155" width="140" height="20"/>
<rect x="435" y="130" width="130" height="20"/>
<rect x="445" y="105" width="110" height="20"/>
<rect x="455" y="80" width="90" height="20"/>
<rect x="470" y="55" width="60" height="20"/>
</g>
<text x="100" y="275" font-size="14" text-anchor="middle" fill="#111827">Niger, Mali</text>
<text x="300" y="275" font-size="14" text-anchor="middle" fill="#111827">Stati Uniti (circa)</text>
<text x="500" y="275" font-size="14" text-anchor="middle" fill="#111827">Italia, Giappone</text>
<text x="20" y="245" font-size="14" fill="#111827">0</text>
<text x="20" y="70" font-size="14" fill="#111827">80+</text>
</svg>`,
      caption: "Sull'asse verticale c'è l'età (in basso i bambini, in alto gli anziani), la larghezza delle barre indica la quantità di persone. Disegni schematici (non in scala)."
    },
    {
      type: "text",
      title: "5. Dove vive l'umanità: distribuzione e densità",
      html: `<p>Gli esseri umani non sono distribuiti in modo uniforme. La <b>densità di popolazione</b> si calcola dividendo gli abitanti per la superficie (abitanti/km²):</p>
<ul>
<li>media mondiale: circa <b>60 ab./km²</b> (calcolata sulle terre emerse);</li>
<li><b>Bangladesh</b>: oltre 1.100 ab./km², fra i Paesi grandi più densi del mondo;</li>
<li><b>Italia</b>: circa <b>195</b> ab./km² (con valori molto diversi tra Lombardia e Sardegna o Valle d'Aosta);</li>
<li><b>Mongolia</b>: circa <b>2</b> ab./km²; <b>Groenlandia</b>: circa 0,03; <b>Monaco</b>: quasi 20.000.</li>
</ul>
<p>Più di <b>metà</b> dell'umanità vive in Asia (circa il 59%), l'Africa ne ospita circa il 18%, l'Europa meno del 10%. I Paesi più popolosi sono <b>India</b> (che nel 2023 ha superato la Cina, circa 1,43 miliardi), <b>Cina</b>, Stati Uniti, Indonesia, Pakistan, Nigeria, Brasile.</p>
<p>Le aree più <b>popolate</b> si trovano dove ci sono <b>pianure fertili</b>, <b>fiumi</b> e <b>climi miti</b>: valli del Gange, del Fiume Giallo e dello Yangtze, Giava, Pianura Padana, Nilo (in Egitto il <b>95%</b> degli abitanti vive lungo il fiume e nel delta). Le aree <b>spopolate</b> sono deserti, foreste fredde, alta montagna, regioni polari. Oggi più della metà della popolazione (circa il <b>57%</b>) vive nelle <b>città</b> e la quota aumenta.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: densità e spazio a persona",
      html: `<p>L'<b>Italia</b> ha circa 59 milioni di abitanti su circa 302.000 km². Densità = 59.000.000 ÷ 302.000 ≈ <b>195 ab./km²</b>. In media ogni abitante ha a disposizione circa 5.100 m² (cioè quasi mezzo ettaro).</p>
<p>La <b>Lombardia</b> ha circa 10 milioni di abitanti su circa 23.900 km²: densità ≈ <b>420 ab./km²</b>, più del doppio della media nazionale. La <b>Valle d'Aosta</b> ha circa 123.000 abitanti su 3.260 km²: densità ≈ <b>38 ab./km²</b>.</p>
<p>Attenzione: la densità è una <b>media</b> e può ingannare. L'Egitto ha circa 100 milioni di abitanti su 1 milione di km² (densità ≈ 100), ma vive quasi tutto su meno del 5% del territorio: la densità \"fisiologica\" (sulla sola terra abitata o coltivata) è molto più alta.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la Cina ha avuto la politica del figlio unico?",
      html: `<p>Dal <b>1979</b> al <b>2015</b> la Cina impose a quasi tutte le famiglie di avere <b>un solo figlio</b>, per frenare la crescita demografica. Il risultato è stato un forte calo della natalità ma anche un invecchiamento molto rapido: oggi la popolazione cinese ha iniziato a <b>diminuire</b> (dal 2022) e molti giovani si trovano a dover sostenere due genitori e quattro nonni. Dal 2016 sono ammessi due figli, dal 2021 tre.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il Giappone ha il 29% di over 65?",
      html: `<p>Il <b>Giappone</b> è il Paese più \"vecchio\" tra i grandi: circa il <b>29%</b> degli abitanti ha più di 65 anni (in Italia circa 24%, in Niger meno del 3%). In Giappone si vendono più pannolini per adulti che per bambini, e molti villaggi stanno restando vuoti. La risposta è la <b>robotica</b> per l'assistenza, l'allungamento della vita lavorativa e (con prudenza) una maggiore apertura all'immigrazione.</p>`
    },
    {
      type: "text",
      title: "6. Il futuro: quanti saremo?",
      html: `<p>Le proiezioni dell'ONU (<i>World Population Prospects 2024</i>) indicano che la popolazione mondiale potrebbe raggiungere un <b>picco di circa 10,3 miliardi</b> intorno alla metà degli <b>anni Ottanta</b> di questo secolo e poi cominciare a diminuire lentamente. Il motivo: la fecondità sta calando quasi ovunque, anche nei Paesi più poveri, più in fretta di quanto si pensasse.</p>
<p>La crescita futura sarà concentrata nell'<b>Africa subsahariana</b>, che nel 2100 potrebbe avere quasi la metà dei giovani del mondo, e nell'Asia meridionale; in molti Paesi (Europa, Asia orientale) la popolazione <b>calerà</b>. Le sfide: creare lavoro per centinaia di milioni di giovani africani, garantire pensioni e assistenza per gli anziani del Nord del mondo, usare le risorse in modo sostenibile.</p>
<p>Attenzione: sono <b>proiezioni</b>, non previsioni certe. I demografi calcolano scenari diversi (alto, medio, basso) a seconda dell'andamento della fecondità.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la popolazione mondiale",
      intro: "I numeri della demografia sono giganteschi. Ecco come renderli concreti.",
      tabs: [
        {
          label: "🏘️ Il villaggio di 100 persone",
          html: `<p>Se il mondo fosse un villaggio di <b>100 persone</b>, con le proporzioni attuali: circa <b>59 vivrebbero in Asia</b> (di cui circa 17 in India e 17 in Cina), <b>18 in Africa</b>, <b>9 in Europa</b>, <b>8 in America Latina</b>, <b>5 in Nord America</b>, <b>meno di 1</b> in Oceania. Circa <b>57 vivrebbero in città</b>. Circa <b>26 avrebbero meno di 15 anni</b> e <b>10 più di 65</b>. Così i miliardi diventano un racconto che ti puoi immaginare.</p>`
        },
        {
          label: "🛁 La vasca e i rubinetti",
          html: `<p>Pensa alla popolazione come a una vasca. Le <b>nascite</b> sono il rubinetto, le <b>morti</b> lo scarico. Nella fase 1 il rubinetto è aperto molto e lo scarico anche: il livello sale poco. Nella fase 2 si <b>stringe lo scarico</b> (medicina) ma il rubinetto resta aperto: la vasca si riempie in fretta. Nella fase 3 si chiude anche il rubinetto: livello più stabile. Nella fase 5 il rubinetto è chiuso più dello scarico: il livello scende. I migranti sono il secondo rubinetto, quello che entra da fuori.</p>`
        },
        {
          label: "📊 Quanto pesano i giovani?",
          html: `<p>Confronta le <b>età mediane</b> (l'età che divide la popolazione in due metà uguali): Niger circa <b>15 anni</b> (la metà della popolazione ha meno di 15 anni!), India circa 28, Stati Uniti circa 38, Italia circa 48, Giappone circa 49. Immagina una classe di 20 persone scelte a caso: in Niger 10 di loro avrebbero meno di 15 anni; in Giappone circa 2 su 20 avrebbero meno di 15 anni e quasi 6 più di 65. È un indicatore semplice che riassume la piramide.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: la dinamica della popolazione",
      nodes: [
        { id: "natalita", label: "Natalità e fecondità", x: 20, y: 8, color: "#2563eb", html: "Nati per 1.000 abitanti; figli per donna.", why: "La fecondità cala con l'istruzione delle donne, l'urbanizzazione, la contraccezione, il costo dei figli e la diminuzione della mortalità infantile (si fanno meno figli quando si è sicuri che sopravvivano)." },
        { id: "mortalita", label: "Mortalità e speranza di vita", x: 80, y: 8, color: "#dc2626", html: "Morti per 1.000 abitanti; anni di vita media.", why: "Il calo della mortalità è nato da igiene pubblica, vaccini (il primo, contro il vaiolo, fu messo a punto da Edward Jenner nel 1796), antibiotici (penicillina scoperta da Fleming nel 1928) e migliore alimentazione." },
        { id: "transizione", label: "Transizione demografica", x: 50, y: 32, color: "#a855f7", html: "Dal modello 'molti nati, molti morti' a 'pochi nati, pochi morti'.", why: "Si fonda sull'osservazione dell'Europa tra Ottocento e Novecento; non è una legge ma un modello: l'ordine delle fasi si ripete in molti Paesi, ma i tempi cambiano (la Corea del Sud l'ha percorsa in 40 anni, la Francia in 150)." },
        { id: "piramide", label: "Piramide delle età", x: 20, y: 58, color: "#f59e0b", html: "Distribuzione per età e sesso.", why: "La forma è il 'ricordo' della storia demografica: il baby boom del dopoguerra (1946-1964) o il calo della natalità degli anni '90 restano visibili per decenni come rigonfiamenti o tacche nella piramide." },
        { id: "densita", label: "Distribuzione e densità", x: 80, y: 58, color: "#16a34a", html: "Dove vivono le persone: pianure, fiumi, coste, città.", why: "Le prime civiltà nacquero lungo i grandi fiumi (Nilo, Tigri-Eufrate, Indo, Fiume Giallo) perché l'agricoltura irrigua sostiene molte persone per km²: la geografia della popolazione conserva quella eredità." },
        { id: "migrazioni", label: "Migrazioni", x: 50, y: 78, color: "#ec4899", html: "Spostamenti che cambiano la popolazione di un luogo.", why: "Dove la popolazione cresce in fretta e mancano lavoro e risorse, o dove invecchia e servono lavoratori, nascono i flussi migratori: la demografia è una delle cause principali delle migrazioni." },
        { id: "futuro", label: "Sostenibilità e futuro", x: 50, y: 95, color: "#14b8a6", html: "Picco intorno a 10,3 miliardi, poi calo.", why: "Il Rapporto Brundtland (1987) e l'Agenda 2030 (2015) legano la demografia all'uso delle risorse: non conta solo quanti siamo, ma quanto consumiamo (un cittadino USA consuma molte più risorse di uno del Niger)." }
      ],
      edges: [
        ["natalita", "transizione", "calo delle nascite →"],
        ["mortalita", "transizione", "calo delle morti →"],
        ["transizione", "piramide", "cambia la"],
        ["transizione", "densita", "con l'urbanizzazione"],
        ["piramide", "migrazioni", "squilibri generano"],
        ["densita", "migrazioni", "squilibri generano"],
        ["migrazioni", "futuro", "influenzano il"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>8 miliardi di persone (novembre 2022); crescita rapidissima dal 1800 per il calo della mortalità.</li>
<li><b>Natalità</b> e <b>mortalità</b> (per mille); <b>saldo naturale</b> e <b>saldo migratorio</b>; <b>fecondità</b> (sostituzione = 2,1).</li>
<li><b>Transizione demografica</b>: 4 fasi; Italia e Giappone in fase matura/regressiva, Africa subsahariana in fase di espansione.</li>
<li><b>Piramide</b>: espansiva (Niger), stazionaria, regressiva (Italia, Giappone).</li>
<li><b>Densità</b> = abitanti ÷ km²; l'umanità vive soprattutto in pianure fertili, vicino ai fiumi e alle coste.</li>
<li>Picco stimato intorno a <b>10,3 miliardi</b> negli anni 2080, poi calo.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: densità e piramidi",
      questions: [
        { type: "num", q: "Un Paese ha 2 milioni di abitanti su 40.000 km². Qual è la densità?", answer: 50, tol: 0, unit: "ab./km²", explain: "2.000.000 ÷ 40.000 = 50 abitanti per km²." },
        { type: "mc", q: "Che forma ha la piramide delle età di un Paese con pochi giovani e molti anziani?", options: ["Espansiva", "Regressiva", "A triangolo equilatero"], answer: 1, explain: "La piramide regressiva ha la base stretta: pochi nati, molti anziani." },
        { type: "tf", q: "L'Italia ha un saldo naturale positivo.", answer: false, explain: "In Italia i morti superano i nati da anni: il saldo naturale è negativo." }
      ]
    }
  ],
  glossary: [
    { t: "Demografia", d: "Disciplina che studia la dimensione, la struttura e l'evoluzione delle popolazioni umane." },
    { t: "Tasso di natalità", d: "Numero di nati per 1.000 abitanti in un anno." },
    { t: "Tasso di mortalità", d: "Numero di morti per 1.000 abitanti in un anno." },
    { t: "Saldo naturale", d: "Differenza tra nati e morti in un periodo." },
    { t: "Saldo migratorio", d: "Differenza tra immigrati ed emigrati in un periodo." },
    { t: "Tasso di fecondità", d: "Numero medio di figli per donna in età fertile; la soglia di sostituzione è circa 2,1." },
    { t: "Speranza di vita", d: "Numero medio di anni che un neonato può aspettarsi di vivere, alle condizioni di mortalità attuali." },
    { t: "Transizione demografica", d: "Passaggio da alta natalità e alta mortalità a bassa natalità e bassa mortalità." },
    { t: "Piramide delle età", d: "Grafico che rappresenta la popolazione per fasce d'età e sesso." },
    { t: "Densità di popolazione", d: "Rapporto tra numero di abitanti e superficie, in abitanti per km²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale causa principale spiega l'esplosione demografica dell'ultimo secolo?", options: ["Aumento della fecondità per donna", "Forte calo della mortalità", "Aumento delle migrazioni"], answer: 1, explain: "Medicina, igiene, vaccini e cibo hanno ridotto soprattutto la mortalità infantile; la fecondità, anzi, è diminuita." },
      { type: "num", q: "Un Paese ha 50 milioni di abitanti; in un anno nascono 500.000 bambini. Qual è il tasso di natalità (‰)?", answer: 10, tol: 0, unit: "‰", explain: "500.000 ÷ 50.000.000 × 1.000 = 10 per mille." },
      { type: "mc", q: "Quale fase della transizione demografica è caratterizzata da natalità alta e mortalità in forte calo?", options: ["Fase 1", "Fase 2", "Fase 4"], answer: 1, explain: "È la fase di espansione, con la maggiore crescita naturale." },
      { type: "tf", q: "Thomas Malthus ipotizzò che la popolazione crescesse più in fretta delle risorse alimentari.", answer: true, explain: "Nel 1798 sostenne che la popolazione cresce in progressione geometrica e il cibo in progressione aritmetica. Non previde il progresso tecnico in agricoltura." },
      { type: "mc", q: "Quale di questi Paesi ha una piramide delle età espansiva?", options: ["Giappone", "Germania", "Niger"], answer: 2, explain: "Il Niger ha una fecondità superiore a 6 figli per donna e una popolazione giovanissima." },
      { type: "text", q: "Come si chiama il rapporto tra numero di abitanti e superficie?", answer: ["densità", "densità di popolazione", "la densità"], explain: "Densità di popolazione, in abitanti per km²." },
      { type: "order", q: "Metti in ordine cronologico il raggiungimento di questi traguardi.", items: ["1 miliardo", "2 miliardi", "4 miliardi", "8 miliardi"], explain: "1804, 1927, 1974, 2022." },
      { type: "mc", q: "Quale area del mondo avrà la maggiore crescita demografica nei prossimi decenni?", options: ["Africa subsahariana", "Europa", "Giappone"], answer: 0, explain: "La fecondità in Africa subsahariana è ancora alta e la popolazione continuerà a crescere." },
      { type: "tf", q: "La densità di popolazione di un Paese descrive sempre bene come sono distribuiti gli abitanti nel territorio.", answer: false, explain: "È una media: l'Egitto ha densità modesta, ma vive quasi tutto sul Nilo e nel delta." },
      { type: "mc", q: "Perché la politica del figlio unico cinese (1979-2015) ha creato problemi?", options: ["Ha accelerato l'invecchiamento della popolazione", "Ha fatto crescere troppo la natalità", "Ha impedito l'urbanizzazione"], answer: 0, explain: "Ha ridotto rapidamente le nascite; oggi pochi lavoratori giovani sostengono molti anziani." }
    ]
  }
});

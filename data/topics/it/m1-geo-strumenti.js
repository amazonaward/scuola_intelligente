TOPIC('it', {
  id: `m1-geo-strumenti`,
  title: `Gli strumenti della geografia`,
  intro: `Il geografo studia la Terra e il rapporto tra l'uomo e il territorio. Per farlo usa <b>strumenti</b>: carte di tanti tipi, la <b>scala</b> per misurare le distanze, l'orientamento, le coordinate, le fotografie dal satellite, il GPS, e poi <b>tabelle e grafici</b> per leggere i dati. In questa lezione impari a usarli tutti.`,
  minutes: 35,
  sections: [
    {
      type: `text`,
      title: `1. Che cos'è una carta geografica`,
      html: `<p>Una <b>carta geografica</b> è una rappresentazione <b>ridotta</b>, <b>approssimata</b> e <b>simbolica</b> di una parte della superficie terrestre, vista dall'alto:</p><ul><li><b>ridotta</b>: tutto è rimpicciolito secondo una <b>scala</b>;</li><li><b>approssimata</b>: la Terra è (quasi) una sfera e non si può «spianare» su un foglio senza deformarla;</li><li><b>simbolica</b>: usa colori, linee e simboli spiegati nella <b>legenda</b>.</li></ul><p>Ogni carta ben fatta ha: <b>titolo</b>, <b>legenda</b>, <b>scala</b> (numerica o grafica) e l'indicazione del <b>Nord</b> (rosa dei venti o freccia).</p>`
    },
    {
      type: `widget`,
      title: `Gli elementi di una carta`,
      widget: `labelDiagram`,
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="340" fill="#f8fafc"/><rect x="20" y="20" width="560" height="300" fill="#bfdbfe" stroke="#334155" stroke-width="3"/><text x="300" y="50" font-size="20" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Isola di Sole – carta fisica</text><path d="M120 110 Q200 70 300 100 Q400 80 430 150 Q460 240 330 270 Q200 290 150 230 Q90 180 120 110 Z" fill="#86efac" stroke="#166534" stroke-width="2"/><path d="M230 140 Q290 120 330 160 Q320 210 260 210 Q210 190 230 140 Z" fill="#fde047"/><path d="M265 160 Q290 150 305 175 Q290 195 268 188 Z" fill="#a16207"/><polygon points="285,155 278,172 292,172" fill="#ffffff"/><path d="M300 190 Q330 230 380 255" fill="none" stroke="#2563eb" stroke-width="3"/><circle cx="380" cy="255" r="7" fill="#dc2626"/><text x="392" y="260" font-size="14" font-family="sans-serif" fill="#7f1d1d">Portosole</text><rect x="455" y="200" width="115" height="110" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="465" y="218" font-size="13" font-family="sans-serif" font-weight="bold" fill="#0f172a">Legenda</text><rect x="465" y="226" width="14" height="10" fill="#86efac"/><text x="485" y="235" font-size="12" font-family="sans-serif" fill="#0f172a">pianura</text><rect x="465" y="244" width="14" height="10" fill="#fde047"/><text x="485" y="253" font-size="12" font-family="sans-serif" fill="#0f172a">collina</text><rect x="465" y="262" width="14" height="10" fill="#a16207"/><text x="485" y="271" font-size="12" font-family="sans-serif" fill="#0f172a">montagna</text><circle cx="472" cy="290" r="5" fill="#dc2626"/><text x="485" y="294" font-size="12" font-family="sans-serif" fill="#0f172a">città</text><line x1="40" y1="300" x2="140" y2="300" stroke="#0f172a" stroke-width="4"/><line x1="90" y1="294" x2="90" y2="306" stroke="#0f172a" stroke-width="2"/><text x="40" y="290" font-size="12" font-family="sans-serif" fill="#0f172a">0</text><text x="120" y="290" font-size="12" font-family="sans-serif" fill="#0f172a">10 km</text><polygon points="520,70 510,110 520,100 530,110" fill="#dc2626"/><text x="520" y="64" font-size="16" font-family="sans-serif" text-anchor="middle" font-weight="bold" fill="#dc2626">N</text></svg>`,
        spots: [
          { x: 300, y: 45, label: `Titolo` },
          { x: 510, y: 250, label: `Legenda` },
          { x: 90, y: 300, label: `Scala grafica` },
          { x: 520, y: 92, label: `Indicazione del Nord` },
          { x: 285, y: 170, label: `Montagna` },
          { x: 345, y: 225, label: `Fiume` },
          { x: 380, y: 255, label: `Città` }
        ]
      },
      caption: `Tocca un punto e scegli l'etichetta giusta.`
    },
    {
      type: `text`,
      title: `2. La scala: quanto è stato rimpicciolito?`,
      html: `<p>La <b>scala numerica</b> si scrive come <b>1 : 100.000</b> e si legge «uno a centomila»: <b>1 cm sulla carta</b> corrisponde a <b>100.000 cm nella realtà</b>, cioè 1.000 m = <b>1 km</b>.</p><p>Per trovare una distanza reale: <b>distanza sulla carta × denominatore della scala</b>, poi si trasforma in km.</p><ul><li><b>Scala grande</b> (denominatore piccolo, fino a 1 : 10.000): pianta di una città, mappa del quartiere, molti dettagli.</li><li><b>Scala media</b> (da 1 : 10.000 a 1 : 1.000.000): carte topografiche e regionali.</li><li><b>Scala piccola</b> (oltre 1 : 1.000.000): carte di Stati, continenti, planisfero. Pochi dettagli, grande territorio.</li></ul><p>Attenzione al trucco: <b>più grande è il numero dopo i due punti, più piccola è la scala!</b></p><p>La <b>scala grafica</b> è un segmento diviso in parti con l'indicazione dei km: comoda perché resta giusta anche se la carta viene ingrandita o rimpicciolita (per esempio con la fotocopiatrice o sullo schermo).</p>`
    },
    {
      type: `example`,
      title: `Esempio pratico: da casa a scuola`,
      html: `<p>Su una carta in scala <b>1 : 25.000</b> la distanza tra casa tua e la scuola misura <b>6 cm</b>.</p><ol><li>6 × 25.000 = 150.000 cm</li><li>150.000 cm = 1.500 m (dividi per 100)</li><li>1.500 m = <b>1,5 km</b> (dividi per 1.000)</li></ol><p>E al contrario: due città distano 80 km. Su una carta 1 : 1.000.000 (dove 1 cm = 10 km), quanti cm le separano? 80 : 10 = <b>8 cm</b>.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 1`,
      questions: [
        { type: `num`, q: `Su una carta 1 : 100.000 due paesi distano 7 cm. Quanti km li separano nella realtà?`, answer: 7, tol: 0, unit: `km`, explain: `7 × 100.000 = 700.000 cm = 7.000 m = 7 km.` },
        { type: `mc`, q: `Quale scala è la più grande (mostra più dettagli)?`, options: [`1 : 5.000`, `1 : 250.000`, `1 : 10.000.000`], answer: 0, explain: `Il denominatore più piccolo indica la scala più grande.` },
        { type: `tf`, q: `La scala grafica resta corretta anche se la carta viene ingrandita.`, answer: true, explain: `Il segmento si ingrandisce insieme alla carta, quindi le proporzioni restano giuste.` }
      ]
    },
    {
      type: `text`,
      title: `3. Tanti tipi di carte`,
      html: `<ul><li><b>Pianta</b> (fino a 1 : 10.000): città, edifici, quartieri.</li><li><b>Carta topografica</b> (1 : 10.000–1 : 150.000): territorio dettagliato, sentieri, curve di livello. In Italia le prepara l'<b>Istituto Geografico Militare</b> di Firenze.</li><li><b>Carta corografica</b> (1 : 150.000–1 : 1.000.000): regioni.</li><li><b>Carta geografica</b> (oltre 1 : 1.000.000): Stati, continenti, planisfero.</li></ul><p>In base al <b>contenuto</b>:</p><ul><li><b>fisica</b>: rilievi, pianure, fiumi, laghi, mari, con colori diversi per l'altitudine (verde, giallo, marrone, bianco) e per la profondità (azzurro più scuro);</li><li><b>politica</b>: confini, Stati, regioni, città, ognuno di un colore;</li><li><b>tematica</b>: un solo argomento (clima, popolazione, lingue, turismo, rischio sismico…).</li></ul>`
    },
    {
      type: `svg`,
      title: `Le curve di livello`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#f8fafc"/><text x="150" y="28" font-size="17" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Vista di lato</text><text x="450" y="28" font-size="17" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Vista dall'alto (carta)</text><path d="M20 280 Q90 270 120 200 Q150 90 175 90 Q200 100 230 200 Q250 260 280 280 Z" fill="#a3a3a3"/><g stroke="#b45309" stroke-width="2" stroke-dasharray="5 4"><line x1="20" y1="240" x2="280" y2="240"/><line x1="20" y1="190" x2="280" y2="190"/><line x1="20" y1="140" x2="280" y2="140"/></g><g font-family="sans-serif" font-size="13" fill="#7c2d12"><text x="22" y="236">200 m</text><text x="22" y="186">400 m</text><text x="22" y="136">600 m</text></g><line x1="300" y1="40" x2="300" y2="300" stroke="#cbd5e1" stroke-width="2"/><ellipse cx="450" cy="175" rx="125" ry="110" fill="#bbf7d0" stroke="#b45309" stroke-width="2.5"/><ellipse cx="458" cy="170" rx="85" ry="72" fill="#fde68a" stroke="#b45309" stroke-width="2.5"/><ellipse cx="468" cy="162" rx="42" ry="34" fill="#fdba74" stroke="#b45309" stroke-width="2.5"/><polygon points="472,150 464,166 480,166" fill="#7c2d12"/><g font-family="sans-serif" font-size="13" fill="#7c2d12"><text x="330" y="180">200</text><text x="378" y="175">400</text><text x="430" y="200">600</text></g><text x="450" y="306" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#0f172a">curve vicine = pendio ripido</text></svg>`,
      caption: `Le curve di livello (isoipse) uniscono i punti alla stessa altitudine. Dove sono fitte il pendio è ripido, dove sono distanti è dolce.`
    },
    {
      type: `text`,
      title: `4. Orientarsi`,
      html: `<p>Orientarsi significa trovare i <b>punti cardinali</b>: <b>Nord</b> (o settentrione), <b>Sud</b> (meridione o mezzogiorno), <b>Est</b> (oriente o levante), <b>Ovest</b> (occidente o ponente).</p><ul><li><b>Con il Sole</b>: sorge a Est, tramonta a Ovest; a mezzogiorno, in Italia, è a Sud.</li><li><b>Con la Stella Polare</b>: di notte indica il Nord (si trova prolungando di circa cinque volte il lato posteriore del Grande Carro).</li><li><b>Con la bussola</b>: l'ago magnetico punta verso il <b>Nord magnetico</b>, vicino (ma non coincidente) al Polo Nord geografico.</li><li><b>Con il GPS</b>: lo smartphone riceve i segnali di almeno 4 satelliti e calcola la propria posizione con precisione di pochi metri.</li></ul><p>Per individuare un punto esatto sulla Terra si usano le <b>coordinate geografiche</b>: <b>latitudine</b> e <b>longitudine</b> (le studierai nella lezione dedicata).</p>`
    },
    {
      type: `text`,
      title: `5. Le proiezioni: spianare un'arancia`,
      html: `<p>Prova a sbucciare un'arancia e a stendere la buccia sul tavolo: si strappa o si deforma. Succede lo stesso quando si disegna la Terra su un foglio. I cartografi usano le <b>proiezioni</b>, metodi matematici che scelgono che cosa conservare:</p><ul><li><b>Proiezione di Mercatore</b> (1569): conserva gli <b>angoli</b> e le direzioni, utilissima per navigare; ma <b>ingrandisce</b> enormemente le terre vicine ai poli. La Groenlandia sembra grande come l'Africa, mentre in realtà l'Africa è circa <b>14 volte</b> più grande!</li><li><b>Proiezione di Peters</b> (Gall-Peters): conserva le <b>aree</b> (le superfici sono in proporzione corretta), ma deforma le forme.</li><li>Molti atlanti usano proiezioni di compromesso (come quella di Robinson o di Winkel).</li></ul><p>L'unica rappresentazione senza deformazioni è il <b>globo</b>.</p>`
    },
    {
      type: `3d`,
      title: `Il globo: l'unica carta senza deformazioni`,
      scene: `globe`,
      options: { points: [ { lat: 72, lon: -40, label: `Groenlandia (2,2 milioni di km²)`, color: `#0ea5e9` }, { lat: 5, lon: 20, label: `Africa (30 milioni di km²)`, color: `#f97316` }, { lat: 42, lon: 12.5, label: `Italia`, color: `#16a34a` }, { lat: 90, lon: 0, label: `Polo Nord`, color: `#7c3aed` }, { lat: 0, lon: 0, label: `Incrocio Equatore – Greenwich`, color: `#dc2626` } ] },
      caption: `Ruota il globo e confronta la Groenlandia con l'Africa: sul globo le proporzioni sono vere. Su molte carte piatte (Mercatore) la Groenlandia sembra grande quanto l'Africa.`
    },
    {
      type: `curiosity`,
      title: `Mercatore e la parola «Atlante»`,
      html: `<p><b>Gerardo Mercatore</b> (Gerhard Kremer, 1512–1594), fiammingo, fu anche il primo a usare la parola <b>«Atlante»</b> per una raccolta di carte, in onore del mitico re Atlante. La sua proiezione è ancora usata oggi da molte mappe online (come quelle di navigazione stradale) per una versione modificata detta «Web Mercator».</p>`
    },
    {
      type: `text`,
      title: `6. Strumenti moderni: dall'alto e al computer`,
      html: `<ul><li><b>Fotografie aeree</b> (da aerei e droni) e <b>immagini satellitari</b>: il <b>telerilevamento</b> osserva la Terra da lontano e misura temperatura, vegetazione, ghiacci, inquinamento. Il programma europeo <b>Copernicus</b> (satelliti Sentinel) fornisce immagini gratuite di tutto il pianeta.</li><li><b>GPS</b> (sistema statunitense) e <b>Galileo</b> (sistema europeo): satelliti che permettono di localizzare un punto ovunque.</li><li><b>GIS</b> (Sistemi Informativi Geografici): programmi che sovrappongono su una carta digitale tanti «strati» di dati (strade, fiumi, popolazione, edifici, rischio di frane…). Li usano Comuni, Protezione civile, aziende.</li></ul>`
    },
    {
      type: `text`,
      title: `7. Leggere i dati: tabelle e grafici`,
      html: `<p>Il geografo raccoglie dati (abitanti, temperature, produzioni…) e li organizza in <b>tabelle</b>. Poi li trasforma in <b>grafici</b>, più facili da leggere a colpo d'occhio:</p><ul><li><b>Istogramma</b> (a colonne o barre): confronta quantità (abitanti delle regioni).</li><li><b>Diagramma cartesiano</b> (a linee): mostra come un dato cambia nel tempo (popolazione italiana dal 1861 a oggi).</li><li><b>Areogramma</b> (a torta): mostra le parti di un tutto in percentuale (come si usa il suolo).</li><li><b>Ideogramma</b>: usa simboli o disegni (ogni omino = 1 milione di persone).</li><li><b>Cartogramma</b>: una carta in cui le aree sono colorate secondo un dato (densità di popolazione).</li><li><b>Climogramma</b>: unisce temperature (linea) e piogge (colonne) di una località.</li></ul>`
    },
    {
      type: `svg`,
      title: `Tre grafici, tre usi`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="15" text-anchor="middle" font-weight="bold" fill="#0f172a"><text x="100" y="28">Istogramma</text><text x="300" y="28">Cartesiano</text><text x="500" y="28">Areogramma</text></g><line x1="30" y1="240" x2="180" y2="240" stroke="#334155" stroke-width="2"/><rect x="40" y="110" width="30" height="130" fill="#3b82f6"/><rect x="85" y="160" width="30" height="80" fill="#3b82f6"/><rect x="130" y="80" width="30" height="160" fill="#3b82f6"/><g font-family="sans-serif" font-size="13" text-anchor="middle" fill="#334155"><text x="55" y="258">A</text><text x="100" y="258">B</text><text x="145" y="258">C</text></g><line x1="220" y1="240" x2="380" y2="240" stroke="#334155" stroke-width="2"/><line x1="220" y1="60" x2="220" y2="240" stroke="#334155" stroke-width="2"/><polyline points="230,220 265,190 300,170 335,120 370,90" fill="none" stroke="#dc2626" stroke-width="4"/><g fill="#dc2626"><circle cx="230" cy="220" r="5"/><circle cx="265" cy="190" r="5"/><circle cx="300" cy="170" r="5"/><circle cx="335" cy="120" r="5"/><circle cx="370" cy="90" r="5"/></g><text x="300" y="258" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">tempo →</text><circle cx="500" cy="145" r="85" fill="#22c55e"/><path d="M500 145 L500 60 A85 85 0 0 1 581 171 Z" fill="#facc15"/><path d="M500 145 L581 171 A85 85 0 0 1 452 215 Z" fill="#a8a29e"/><g font-family="sans-serif" font-size="13" fill="#0f172a"><text x="525" y="115">campi</text><text x="510" y="195">città</text><text x="440" y="140">boschi</text></g><g font-family="sans-serif" font-size="14" text-anchor="middle" fill="#475569"><text x="100" y="285">confronta quantità</text><text x="300" y="285">mostra un cambiamento</text><text x="500" y="285">mostra le parti di un tutto</text></g></svg>`,
      caption: `Prima di scegliere un grafico chiediti: voglio confrontare, mostrare un'evoluzione o dividere un intero in parti?`
    },
    {
      type: `example`,
      title: `Esempio pratico: la densità di popolazione`,
      html: `<p>La <b>densità</b> indica quante persone vivono, in media, in 1 km²: si calcola <b>abitanti : superficie</b>.</p><p>L'Italia ha circa <b>59 milioni</b> di abitanti su circa <b>302.000 km²</b>: 59.000.000 : 302.000 ≈ <b>195 abitanti per km²</b>. La Lombardia supera i 400 ab./km², la Valle d'Aosta ne ha meno di 40. Su un <b>cartogramma</b> le regioni più dense si colorano di scuro, quelle meno dense di chiaro.</p>`
    },
    {
      type: `curiosity`,
      title: `La carta più antica d'Italia?`,
      html: `<p>In Val Camonica (Lombardia), a <b>Bedolina</b>, c'è un'incisione rupestre dell'età del Ferro (circa 2.500 anni fa) che rappresenta campi, sentieri e case visti dall'alto: secondo molti studiosi è una delle più antiche «mappe» d'Europa. Già allora gli uomini sentivano il bisogno di disegnare il proprio territorio.</p>`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capirlo`,
      intro: `La scala e le carte non ti sono chiare? Prova queste strade.`,
      tabs: [
        { label: `🏠 La scala in camera tua`, html: `<p>Misura la tua cameretta: per esempio 4 m × 3 m. Disegnala su un quaderno a quadretti in modo che <b>1 quadretto (0,5 cm) = 50 cm</b>: la stanza diventa 8 × 6 quadretti. Hai fatto una pianta in scala <b>1 : 100</b> (0,5 cm sulla carta = 50 cm nella realtà, cioè 100 volte di più)! Ora aggiungi il letto e la scrivania.</p>`, widget: `areaGrid`, options: { w: 8, h: 6, max: 12 } },
        { label: `🗺️ Mappe di altri popoli`, html: `<p>Non tutti hanno disegnato il mondo con il Nord in alto. Nelle carte medievali europee (<i>mappamundi</i>) in alto c'era l'<b>Est</b>, l'Oriente (da qui «orientarsi»), con Gerusalemme al centro. Il geografo arabo <b>al-Idrisi</b>, alla corte di Ruggero II a Palermo (1154), mise il <b>Sud</b> in alto. Gli abitanti delle Isole Marshall nel Pacifico costruivano carte con <b>bastoncini e conchiglie</b> per rappresentare le onde e le isole.</p>` },
        { label: `🧭 Esercizio in 3D`, html: `<p>Una carta fisica traduce in colori un paesaggio vero. Ruota il paesaggio 3D e tocca le parti: poi pensa a quale colore avrebbero su una carta fisica (verde = pianura, giallo = collina, marrone = montagna, bianco = ghiacciai, azzurro = acque).</p>`, scene: `terrain`, options: { features: { plain: { label: `Pianura`, html: `Su una carta fisica: <b>verde</b> (sotto i 200 m).` }, hill: { label: `Collina`, html: `Su una carta fisica: <b>giallo / arancio chiaro</b> (200–600 m circa).` }, mountain: { label: `Montagna`, html: `Su una carta fisica: <b>marrone</b>, sempre più scuro salendo.` }, glacier: { label: `Ghiacciaio`, html: `Su una carta fisica: <b>bianco</b>.` }, river: { label: `Fiume`, html: `Su una carta fisica: linea <b>blu</b> che si ingrossa verso la foce.` }, lake: { label: `Lago`, html: `Su una carta fisica: macchia <b>azzurra</b>.` }, sea: { label: `Mare`, html: `Su una carta fisica: <b>azzurro</b>, più scuro dove è più profondo.` } } } },
        { label: `📱 Come uno zoom`, html: `<p>Pensa a una mappa sullo smartphone. Quando fai <b>zoom avanti</b> vedi le singole strade e i negozi: è come passare a una <b>scala grande</b>. Quando fai <b>zoom indietro</b> vedi tutta l'Italia o il mondo, ma spariscono i dettagli: è una <b>scala piccola</b>. Il segmento in basso che cambia mentre fai zoom è proprio una <b>scala grafica</b>!</p>` }
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz 2`,
      questions: [
        { type: `mc`, q: `Quale carta useresti per vedere la densità di popolazione delle regioni italiane?`, options: [`Carta fisica`, `Carta tematica (cartogramma)`, `Pianta`, `Carta nautica`], answer: 1, explain: `Una carta tematica rappresenta un solo argomento.` },
        { type: `mc`, q: `Quale grafico è più adatto a mostrare come è cambiata la popolazione nel tempo?`, options: [`Areogramma`, `Diagramma cartesiano`, `Ideogramma`, `Legenda`], answer: 1, explain: `La linea mostra bene l'andamento nel tempo.` },
        { type: `tf`, q: `Nella proiezione di Mercatore la Groenlandia appare più piccola di quanto è.`, answer: false, explain: `Appare molto più grande: le terre vicine ai poli vengono ingrandite.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa concettuale: gli strumenti del geografo`,
      nodes: [
        { id: `terra`, label: `La Terra è (quasi) sferica`, x: 50, y: 8, color: `#0ea5e9`, html: `<p>Un geoide, leggermente schiacciato ai poli.</p>`, why: `<p>Lo dimostrarono già i Greci: Aristotele osservando l'ombra circolare della Terra sulla Luna durante le eclissi; Eratostene (circa 240 a.C.) ne misurò la circonferenza confrontando le ombre a Siene e ad Alessandria.</p>` },
        { id: `globo`, label: `Globo`, x: 18, y: 30, color: `#16a34a`, html: `<p>Modello sferico senza deformazioni.</p>`, why: `<p>Il globo più antico arrivato fino a noi è l'«Erdapfel» di Martin Behaim (Norimberga, 1492): non c'è ancora l'America!</p>` },
        { id: `proiezioni`, label: `Proiezioni`, x: 50, y: 32, color: `#7c3aed`, html: `<p>Mercatore, Peters, Robinson…</p>`, why: `<p>Il matematico Gauss dimostrò nel 1827 (Theorema egregium) che è impossibile rappresentare una sfera su un piano senza deformare qualcosa: ogni proiezione è un compromesso.</p>` },
        { id: `scala`, label: `Scala`, x: 82, y: 30, color: `#ca8a04`, html: `<p>Rapporto tra misura sulla carta e misura reale.</p>`, why: `<p>È una <b>proporzione</b>: lo stesso ragionamento delle frazioni e dei rapporti in matematica. Senza scala non si potrebbero misurare le distanze.</p>` },
        { id: `carte`, label: `Tipi di carte`, x: 62, y: 58, color: `#dc2626`, html: `<p>Piante, topografiche, corografiche, geografiche; fisiche, politiche, tematiche.</p>`, why: `<p>Ogni carta nasce da una domanda diversa: «dove sono le montagne?», «dove sono i confini?», «dove vive più gente?». Le curve di livello si diffusero nel Settecento-Ottocento grazie ai rilievi topografici militari.</p>` },
        { id: `orientamento`, label: `Orientamento e coordinate`, x: 18, y: 62, color: `#2563eb`, html: `<p>Punti cardinali, bussola, latitudine e longitudine.</p>`, why: `<p>La bussola arrivò in Europa dalla Cina (XII secolo). Il reticolato di paralleli e meridiani fu usato già da Tolomeo (II secolo d.C.).</p>` },
        { id: `satelliti`, label: `Satelliti, GPS, GIS`, x: 25, y: 90, color: `#475569`, html: `<p>Telerilevamento, localizzazione, carte digitali a strati.</p>`, why: `<p>Il GPS, nato per scopi militari negli USA, è aperto ai civili dagli anni '80–'90; il primo GIS fu creato in Canada negli anni '60 da Roger Tomlinson per censire le foreste.</p>` },
        { id: `grafici`, label: `Tabelle e grafici`, x: 72, y: 88, color: `#ea580c`, html: `<p>Istogrammi, cartesiani, areogrammi, cartogrammi.</p>`, why: `<p>I grafici moderni (a barre, a linee, a torta) furono inventati dallo scozzese William Playfair tra il 1786 e il 1801 per rendere i dati economici comprensibili a tutti.</p>` }
      ],
      edges: [ [`terra`, `globo`, `si rappresenta con`], [`terra`, `proiezioni`, `si spiana con`], [`proiezioni`, `carte`, `producono`], [`scala`, `carte`, `riduce`], [`orientamento`, `carte`, `posiziona`], [`satelliti`, `orientamento`, `misurano`], [`grafici`, `carte`, `cartogramma`], [`satelliti`, `grafici`, `forniscono dati`] ]
    }
  ],
  glossary: [
    { t: `Carta geografica`, d: `Rappresentazione ridotta, approssimata e simbolica della superficie terrestre.` },
    { t: `Scala`, d: `Rapporto tra una distanza sulla carta e la distanza reale corrispondente.` },
    { t: `Legenda`, d: `Spiegazione dei simboli e dei colori usati in una carta.` },
    { t: `Curva di livello (isoipsa)`, d: `Linea che unisce punti alla stessa altitudine.` },
    { t: `Proiezione`, d: `Metodo matematico per rappresentare la superficie sferica della Terra su un piano.` },
    { t: `Telerilevamento`, d: `Osservazione della Terra a distanza, con aerei, droni o satelliti.` },
    { t: `GPS`, d: `Sistema di localizzazione satellitare.` },
    { t: `GIS`, d: `Sistema informativo geografico: carte digitali a strati di dati.` },
    { t: `Cartogramma`, d: `Carta tematica in cui le aree sono colorate in base a un dato statistico.` },
    { t: `Densità di popolazione`, d: `Numero medio di abitanti per km².` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Che cosa significa la scala 1 : 50.000?`, options: [`1 cm sulla carta = 50.000 cm nella realtà`, `1 km sulla carta = 50.000 km`, `La carta è 50.000 volte più grande della realtà`, `1 m = 50 km`], answer: 0, explain: `1 cm = 50.000 cm = 500 m.` },
      { type: `num`, q: `Su una carta 1 : 200.000 due città distano 5 cm. Quanti km le separano?`, answer: 10, tol: 0, unit: `km`, explain: `5 × 200.000 = 1.000.000 cm = 10 km.` },
      { type: `num`, q: `Su una carta 1 : 1.000.000 una strada lunga 45 km misura quanti cm?`, answer: 4.5, tol: 0, unit: `cm`, explain: `1 cm = 10 km, quindi 45 : 10 = 4,5 cm.` },
      { type: `order`, q: `Ordina dalla scala più grande alla più piccola`, items: [`1 : 2.000 (pianta)`, `1 : 25.000 (topografica)`, `1 : 500.000 (corografica)`, `1 : 20.000.000 (planisfero)`], explain: `Più piccolo è il denominatore, più grande è la scala.` },
      { type: `mc`, q: `In una carta fisica, di che colore è di solito la pianura?`, options: [`Marrone`, `Verde`, `Bianco`, `Viola`], answer: 1, explain: `Verde per le pianure, giallo per le colline, marrone per le montagne.` },
      { type: `tf`, q: `Se le curve di livello sono molto vicine, il pendio è ripido.`, answer: true, explain: `In poco spazio orizzontale si sale molto.` },
      { type: `text`, q: `Come si chiama l'elenco che spiega simboli e colori di una carta?`, answer: [`legenda`, `la legenda`], explain: `La legenda.` },
      { type: `mc`, q: `Quale proiezione conserva gli angoli ed è utile per la navigazione, ma ingrandisce le zone polari?`, options: [`Peters`, `Mercatore`, `Robinson`, `Nessuna`], answer: 1, explain: `La proiezione di Mercatore (1569).` },
      { type: `mc`, q: `Quale grafico usi per mostrare le percentuali di uso del suolo?`, options: [`Areogramma`, `Diagramma cartesiano`, `Curva di livello`, `Scala grafica`], answer: 0, explain: `L'areogramma (a torta) mostra le parti di un intero.` },
      { type: `text`, q: `Come si chiama il sistema europeo di navigazione satellitare?`, answer: [`galileo`], explain: `Galileo, il «GPS europeo».` },
      { type: `mc`, q: `Dove sorge il Sole?`, options: [`A Nord`, `A Sud`, `A Est`, `A Ovest`], answer: 2, explain: `Sorge a Est (levante) e tramonta a Ovest (ponente).` }
    ],
    gen: [ [`lengthConv`, 2], [`proportion`, 1] ]
  }
});

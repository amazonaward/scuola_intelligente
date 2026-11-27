TOPIC('it', {
  id: "l5-sci-tettonica",
  title: "La tettonica delle placche",
  intro: "Perché l'Italia ha vulcani e terremoti, mentre la Sardegna quasi no? Perché sulle cime dell'Himalaya si trovano fossili di animali marini? Perché la costa orientale del Sud America sembra incastrarsi in quella occidentale dell'Africa? La risposta a tutte queste domande è una delle più grandi teorie delle scienze della Terra del Novecento: la <b>tettonica delle placche</b>. La superficie del pianeta non è un guscio d'un pezzo, ma un mosaico di grandi lastre rigide che si muovono, lentamente (di qualche centimetro all'anno, circa come crescono le unghie), spinte dal calore dell'interno. In questa lezione scopriamo com'è fatta la Terra dentro, come Alfred Wegener ebbe l'idea della deriva dei continenti, quali prove l'hanno confermata e che cosa succede dove le placche si allontanano, si scontrano o scorrono l'una accanto all'altra.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Come facciamo a conoscere l'interno della Terra",
      html: `<p>Il pozzo più profondo mai scavato, in Russia (Kola), supera i 12 km: meno dello 0,2% del raggio terrestre (6371 km). Eppure sappiamo con precisione come è fatto l'interno del pianeta grazie alle <b>onde sismiche</b>, prodotte dai terremoti, che attraversano la Terra e arrivano ai sismografi lontani. La loro velocità e il loro percorso dipendono dal materiale attraversato, quindi, misurando i tempi di arrivo, si può ricostruire una \"ecografia\" del pianeta. Esistono due tipi di onde che si propagano all'interno (<b>onde di volume</b>):</p>
<ul>
<li><b>onde P</b> (primarie): onde di compressione, come il suono; sono le più veloci e attraversano <b>solidi, liquidi e gas</b>;</li>
<li><b>onde S</b> (secondarie): onde di taglio, che muovono il materiale perpendicolarmente alla propagazione; sono più lente e <b>non attraversano i liquidi</b>.</li>
</ul>
<p>Ogni volta che le onde incontrano un brusco cambio di materiale, cambiano velocità e direzione (si riflettono e rifrangono), e questi cambi mostrano i confini tra gli strati. Nel 1906 Richard Oldham notò che le onde S non attraversano la parte più interna del pianeta: lì c'è un liquido.</p>`
    },
    {
      type: "text",
      title: "La struttura a strati: crosta, mantello, nucleo",
      html: `<p>Il pianeta è formato da strati concentrici con composizione e proprietà diverse:</p>
<ul>
<li><b>Crosta</b>: lo strato più esterno, sottile e solido. La <b>crosta continentale</b> è spessa in media 30-40 km (fino a circa 70 sotto le grandi catene montuose), meno densa (circa 2,7 g/cm³), composta di rocce di tipo granitico, ed è anche molto antica (fino a oltre 4 miliardi di anni). La <b>crosta oceanica</b> è spessa solo 5-10 km, più densa (circa 3 g/cm³), basaltica e giovane (al massimo circa 180 milioni di anni).</li>
<li><b>Mantello</b>: arriva a circa <b>2900 km</b> di profondità, ed è il 84% circa del volume della Terra. È fatto di rocce ricche di silicati di ferro e magnesio (peridotite). È <b>solido</b> (le onde S lo attraversano), ma sotto pressioni e temperature alte scorre <b>molto lentamente</b>, come un materiale plastico, in un arco di milioni di anni.</li>
<li><b>Nucleo esterno</b>: da 2900 a circa 5100 km, <b>liquido</b> (lega di ferro e nichel, con elementi leggeri): le onde S non lo attraversano. I suoi movimenti generano il <b>campo magnetico terrestre</b> (geodinamo).</li>
<li><b>Nucleo interno</b>: da 5100 km al centro (6371 km), <b>solido</b>, nonostante la temperatura attorno ai 5000-6000 °C, per l'enorme pressione. La scoperta è dovuta a Inge Lehmann (1936).</li>
</ul>
<p>I confini chiave sono la <b>discontinuità di Mohorovičić (Moho)</b>, tra crosta e mantello, scoperta dal sismologo croato Andrija Mohorovičić nel 1909; la discontinuità di Gutenberg, tra mantello e nucleo (2900 km); e quella di Lehmann, tra nucleo esterno e interno.</p>
<p>Per capire le placche, però, serve un'altra distinzione, basata sul comportamento meccanico e non sulla composizione: la <b>litosfera</b> (dal greco <i>lithos</i>, pietra) è lo strato esterno rigido, formato dalla crosta e dalla parte superiore del mantello, spesso circa 100 km. Sotto di essa c'è l'<b>astenosfera</b>, la parte del mantello più calda e plastica, su cui la litosfera \"galleggia\" e scivola. La litosfera è spezzata in <b>placche</b>.</p>`
    },
    {
      type: "3d",
      title: "L'interno della Terra in 3D",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#92400e", label: "Crosta (5-70 km)" },
        { r: 0.93, color: "#ea580c", label: "Mantello (fino a 2900 km)" },
        { r: 0.55, color: "#f59e0b", label: "Nucleo esterno liquido (2900-5100 km)" },
        { r: 0.19, color: "#fef08a", label: "Nucleo interno solido (fino a 6371 km)" }
      ] },
      caption: "Ruota la sfera tagliata. Nel modello la crosta appare più spessa del vero: in scala reale sarebbe sottile come la buccia di una mela rispetto al frutto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: dentro la Terra",
      questions: [
        { type: "mc", q: "Perché si deduce che il nucleo esterno è liquido?", options: ["Le onde S non lo attraversano", "Le onde P non lo attraversano", "Sotto i vulcani esce lava", "È troppo profondo per essere solido"], answer: 0, explain: "Le onde S non si propagano nei liquidi: la loro scomparsa oltre i 2900 km indica uno strato liquido." },
        { type: "mc", q: "Come si chiama il confine tra crosta e mantello?", options: ["Discontinuità di Mohorovičić (Moho)", "Discontinuità di Gutenberg", "Astenosfera", "Dorsale"], answer: 0, explain: "È la discontinuità scoperta da Mohorovičić nel 1909." },
        { type: "tf", q: "La crosta oceanica è più spessa e più antica di quella continentale.", answer: false, explain: "La crosta oceanica è sottile (5-10 km) e giovane (< 180 milioni di anni); quella continentale è più spessa e può avere oltre 4 miliardi di anni." },
        { type: "mc", q: "La litosfera è formata da...", options: ["Crosta e parte superiore del mantello, rigide", "Solo crosta", "Nucleo e mantello", "Mantello plastico"], answer: 0, explain: "Litosfera = strato rigido (circa 100 km) che comprende la crosta e la parte più alta del mantello." }
      ]
    },
    {
      type: "text",
      title: "Wegener e la deriva dei continenti",
      html: `<p>Chi guarda una carta del mondo nota facilmente che le coste di Sud America e Africa combaciano come i pezzi di un puzzle. Già nel Seicento Francis Bacon lo aveva notato. Ma fu il meteorologo e geofisico tedesco <b>Alfred Wegener</b> a trasformare l'intuizione in una teoria: nel <b>1912</b> la presentò in una conferenza, e nel <b>1915</b> la pubblicò nel libro <i>L'origine dei continenti e degli oceani</i> (<i>Die Entstehung der Kontinente und Ozeane</i>). Secondo Wegener, circa 250-300 milioni di anni fa tutte le terre emerse erano unite in un unico supercontinente, la <b>Pangea</b> (\"tutta la terra\"), circondato da un unico oceano (Panthalassa). Poi la Pangea si spezzò e i continenti andarono alla \"deriva\", fino alle posizioni attuali.</p>
<p><b>Le prove di Wegener.</b></p>
<ul>
<li><b>Prove geografiche</b>: il combaciamento delle coste (meglio se si considera il bordo della piattaforma continentale, a circa 200 m di profondità, invece della linea di costa).</li>
<li><b>Prove paleontologiche</b>: fossili identici su continenti oggi separati da migliaia di chilometri di oceano: il rettile d'acqua dolce <i>Mesosaurus</i> (Sud America e Africa), la pianta <i>Glossopteris</i> (Sud America, Africa, India, Antartide, Australia), il rettile terrestre <i>Lystrosaurus</i>. Non potevano aver attraversato l'oceano.</li>
<li><b>Prove geologiche</b>: catene montuose con le stesse rocce e la stessa età che continuano da una sponda all'altra dell'Atlantico (gli Appalachi e le montagne di Scozia e Scandinavia).</li>
<li><b>Prove paleoclimatiche</b>: tracce di antiche glaciazioni (depositi glaciali di circa 300 milioni di anni fa) in India, Africa meridionale, Sud America e Australia, oggi in zone tropicali, mentre in Antartide e in Europa si trovano giacimenti di carbone che testimoniano antiche foreste tropicali: possono spiegarsi solo se i continenti si sono spostati.</li>
</ul>
<p><b>Il rifiuto.</b> La teoria fu respinta dalla maggior parte dei geologi dell'epoca perché Wegener non sapeva spiegare <b>quale forza</b> potesse spostare continenti interi: la sua ipotesi (le maree e la rotazione terrestre) era sbagliata e troppo debole. Per quasi cinquant'anni si preferirono altre spiegazioni, come ponti di terra poi sprofondati. Wegener morì nel 1930 durante una spedizione in Groenlandia, senza vedere il successo della sua idea. Un caso esemplare di come una buona intuizione possa essere respinta se manca il <b>meccanismo</b>.</p>`
    },
    {
      type: "decision",
      title: "Siamo negli anni Venti: la deriva dei continenti ha senso?",
      html: "<p>Sei un geologo nel 1925. Wegener dice che i continenti si spostano come zattere sul fondo del mare. Le prove (fossili, coste, rocce, ghiacciai) sembrano forti. Ma non c'è nessun meccanismo credibile, nessun modo di misurare lo spostamento, e i fisici dicono che le rocce del fondo oceanico sono troppo rigide per essere attraversate da un continente. L'alternativa consiste in antichi ponti di terra, poi inabissati, che avrebbero permesso agli animali di spostarsi.</p>",
      question: "Che cosa avresti pensato?",
      options: [
        { label: "Respingere del tutto la teoria: senza una causa fisica non è scienza", outcome: "Vero che manca il meccanismo, ma le prove sono molte e indipendenti. I ponti di terra non spiegherebbero i ghiacciai né la continuità delle montagne: scartare tutto significa ignorare i dati." },
        { label: "Considerarla un'ipotesi promettente, in attesa di prove nuove (meccanismo e misure)", outcome: "È l'atteggiamento scientifico: i dati sono convincenti, ma servono nuove evidenze. Quelle sono arrivate dopo gli anni Cinquanta." },
        { label: "Accettarla subito come vera e definitiva", outcome: "Troppo presto: senza un meccanismo e senza misure dirette non si poteva escludere che altre spiegazioni funzionassero. La scienza ha bisogno di verifiche." }
      ],
      answer: 1,
      explain: "Negli anni Cinquanta-Sessanta lo studio dei fondali oceanici diede le prove mancanti: le dorsali, il paleomagnetismo, i terremoti lungo le fosse. Nel 1960-62 Harry Hess propose l'espansione dei fondali oceanici (<i>sea-floor spreading</i>) e nel 1963 Vine e Matthews trovarono le \"strisce\" magnetiche simmetriche ai lati delle dorsali. Verso il 1967-68 queste idee furono unificate nella tettonica delle placche. Wegener aveva ragione sui fatti, anche se sbagliava sulla causa."
    },
    {
      type: "text",
      title: "Le prove decisive: i fondali oceanici",
      html: `<p>Dopo la Seconda guerra mondiale, per scopi militari e di posa dei cavi, si esplorarono i fondali con ecoscandagli e magnetometri. Emersero risultati inattesi.</p>
<ul>
<li><b>Le dorsali oceaniche</b>: una catena montuosa sottomarina lunga circa 60 000 km, che attraversa tutti gli oceani. La <b>dorsale medio-atlantica</b> corre da nord a sud al centro dell'Atlantico, con al centro una profonda vallata (la <b>rift valley</b>). Qui sale magma dal mantello e solidifica formando nuova crosta oceanica.</li>
<li><b>Le fosse oceaniche</b>: profondissime depressioni lunghe e strette, come la fossa delle Marianne (circa 11 000 m, il punto più profondo degli oceani). Lì la crosta oceanica \"sprofonda\".</li>
<li><b>L'età dei fondali</b>: le rocce sono giovanissime vicino alla dorsale e <b>sempre più antiche</b> allontanandosi simmetricamente da essa; la più antica è di circa 180 milioni di anni, mentre le rocce continentali arrivano a 4 miliardi. Il fondo si rinnova di continuo.</li>
<li><b>Il paleomagnetismo</b>: le rocce basaltiche, solidificando, \"registrano\" la direzione del campo magnetico terrestre di quel momento. Il campo si inverte ogni tanto (l'ultima inversione stabile circa 780 000 anni fa). I fondali presentano <b>strisce magnetiche alternate di polarità normale e inversa, simmetriche ai due lati della dorsale</b> (Vine e Matthews, 1963): la dimostrazione che la crosta si forma alla dorsale e si allontana come un nastro trasportatore.</li>
</ul>
<p>Con l'<b>espansione dei fondali oceanici</b> (Hess, 1960-62) l'Oceano Atlantico si allarga di circa 2-4 cm all'anno (pochi centimetri, circa come crescono le unghie). Ma allora la Terra si dovrebbe ingrandire? No: dove si forma nuova litosfera ne deve essere distrutta altrettanta, e questo avviene nelle <b>zone di subduzione</b>.</p>`
    },
    {
      type: "text",
      title: "La teoria della tettonica delle placche",
      html: `<p>Verso la fine degli anni Sessanta (con i lavori di Wilson, McKenzie, Parker, Morgan, Le Pichon) le idee furono riunite nella <b>teoria della tettonica delle placche</b>: la litosfera è divisa in una dozzina di placche rigide che si muovono sull'astenosfera plastica. Le placche principali sono: <b>Pacifica, Nordamericana, Sudamericana, Eurasiatica, Africana, Indo-Australiana, Antartica</b>, più placche minori come quella di Nazca, delle Filippine, di Cocos, Araba e dei Caraibi. Una placca può contenere sia crosta oceanica sia continentale (la placca africana, ad esempio, comprende l'Africa e parte dell'Atlantico), perciò <b>non coincide con i continenti</b>.</p>
<p><b>Che cosa le muove?</b> L'ipotesi accettata è che il calore interno (residuo della formazione della Terra e prodotto dal decadimento di elementi radioattivi) generi correnti lentissime di <b>convezione</b> nel mantello (materiale caldo sale, materiale freddo scende). Ma il fattore più importante sembra essere la <b>trazione della placca in subduzione</b> (<i>slab pull</i>): la crosta oceanica vecchia è fredda e densa e, sprofondando nel mantello, \"tira\" con sé il resto della placca. A questo si aggiunge la <b>spinta della dorsale</b> (<i>ridge push</i>): la dorsale è più alta e fa scivolare la litosfera.</p>
<p>Le velocità sono dell'ordine di 1-10 cm all'anno (la più rapida è la placca del Pacifico, la più lenta l'Euroasiatica): oggi si misurano direttamente con il <b>GPS</b>. Per esempio, Hawaii si avvicina al Giappone di circa 7-8 cm all'anno, mentre l'Italia e l'Africa si muovono verso l'Europa di circa 1 cm all'anno.</p>`
    },
    {
      type: "text",
      title: "I margini delle placche",
      html: `<p>L'attività geologica (terremoti, vulcani, montagne) si concentra ai <b>margini</b> delle placche, dove interagiscono. Ci sono tre tipi di margine:</p>
<p><b>1. Margini divergenti (costruttivi)</b>: le placche si <b>allontanano</b> e dal mantello risale magma che forma nuova crosta.</p>
<ul>
<li>Nell'oceano: le <b>dorsali oceaniche</b> (Atlantica, Pacifica orientale). Attività vulcanica sottomarina (basalti) e terremoti poco profondi e deboli.</li>
<li>Nei continenti: una <b>rift continentale</b>, come la Rift Valley dell'Africa orientale, dove il continente si sta lentamente spezzando (con laghi, vulcani come il Kilimangiaro e il Nyiragongo): milioni di anni fa potrebbe formarsi un nuovo oceano, come accadde con l'Atlantico.</li>
</ul>
<p><b>2. Margini convergenti (distruttivi)</b>: le placche si <b>avvicinano</b> e si scontrano. Dipende dal tipo di litosfera:</p>
<ul>
<li><b>oceano-continente</b>: la placca oceanica, più densa, <b>subduce</b> (scende) sotto quella continentale. Si forma una <b>fossa</b> oceanica, i terremoti sono a profondità crescente (fino a circa 700 km, nel <b>piano di Benioff</b>) e il magma risale producendo una catena di vulcani sul continente. Esempio: le <b>Ande</b> (placca di Nazca sotto il Sud America).</li>
<li><b>oceano-oceano</b>: una placca subduce sotto l'altra e si forma un <b>arco insulare</b> vulcanico. Esempio: il Giappone, le Filippine, le Marianne con la fossa più profonda.</li>
<li><b>continente-continente</b>: nessuna delle due affonda, perché la crosta continentale è leggera; si ha <b>collisione</b> e la crosta si piega e ispessisce, formando le grandi catene montuose (<b>orogenesi</b>). Esempi: l'<b>Himalaya</b> (India contro Eurasia, da circa 50 milioni di anni fa; l'Everest si alza ancora di pochi millimetri all'anno), le <b>Alpi</b> (Africa/Adria contro Europa) e gli Appennini.</li>
</ul>
<p><b>3. Margini trasformi (conservativi)</b>: le placche <b>scorrono lateralmente</b> una rispetto all'altra, senza che si crei o si distrugga litosfera. L'attrito è grande: le rocce si bloccano, accumulano energia e poi la liberano di colpo in <b>terremoti</b> anche molto forti. Esempio: la <b>faglia di Sant'Andrea</b> in California (placca Pacifica e Nordamericana). Anche le dorsali sono spezzettate da faglie trasformi.</p>`
    },
    {
      type: "svg",
      title: "I tre tipi di margine",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ah" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#111827"/></marker></defs>
<text x="100" y="22" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Divergente</text>
<rect x="10" y="80" width="75" height="45" fill="#d97706" stroke="#7c2d12" stroke-width="2"/>
<rect x="115" y="80" width="75" height="45" fill="#d97706" stroke="#7c2d12" stroke-width="2"/>
<rect x="10" y="125" width="180" height="50" fill="#ea580c"/>
<polygon points="85,125 115,125 115,80 100,60 85,80" fill="#ef4444"/>
<line x1="75" y1="52" x2="25" y2="52" stroke="#111827" stroke-width="3" marker-end="url(#ah)"/>
<line x1="125" y1="52" x2="175" y2="52" stroke="#111827" stroke-width="3" marker-end="url(#ah)"/>
<text x="100" y="200" font-size="14" fill="#111827" text-anchor="middle">le placche si allontanano</text>
<text x="100" y="220" font-size="14" fill="#111827" text-anchor="middle">nasce nuova crosta</text>
<text x="100" y="240" font-size="14" font-weight="bold" fill="#111827" text-anchor="middle">dorsali, rift</text>
<text x="300" y="22" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">Convergente (subduzione)</text>
<rect x="215" y="70" width="95" height="35" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/>
<polygon points="310,70 390,70 390,105 330,105" fill="#d97706" stroke="#7c2d12" stroke-width="2"/>
<polygon points="310,105 330,105 380,175 350,175" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/>
<rect x="215" y="105" width="175" height="70" fill="#ea580c" opacity="0.35"/>
<polygon points="365,70 375,40 385,70" fill="#ef4444"/>
<line x1="235" y1="52" x2="285" y2="52" stroke="#111827" stroke-width="3" marker-end="url(#ah)"/>
<text x="300" y="200" font-size="14" fill="#111827" text-anchor="middle">una placca scende sotto l'altra</text>
<text x="300" y="220" font-size="14" fill="#111827" text-anchor="middle">fosse, vulcani, terremoti</text>
<text x="300" y="240" font-size="14" font-weight="bold" fill="#111827" text-anchor="middle">Ande, Giappone, Himalaya</text>
<text x="500" y="22" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">Trasforme</text>
<rect x="415" y="80" width="80" height="80" fill="#d97706" stroke="#7c2d12" stroke-width="2"/>
<rect x="505" y="80" width="80" height="80" fill="#a16207" stroke="#7c2d12" stroke-width="2"/>
<line x1="450" y1="150" x2="450" y2="95" stroke="#111827" stroke-width="3" marker-end="url(#ah)"/>
<line x1="550" y1="95" x2="550" y2="150" stroke="#111827" stroke-width="3" marker-end="url(#ah)"/>
<text x="500" y="200" font-size="14" fill="#111827" text-anchor="middle">scorrono di lato</text>
<text x="500" y="220" font-size="14" fill="#111827" text-anchor="middle">forti terremoti</text>
<text x="500" y="240" font-size="14" font-weight="bold" fill="#111827" text-anchor="middle">faglia di Sant'Andrea</text>
</svg>`,
      caption: "Schema semplificato visto in sezione (le trasforme sono viste dall'alto). Le frecce indicano il movimento delle placche."
    },
    {
      type: "widget",
      title: "Abbina il margine al fenomeno",
      widget: "classify",
      options: {
        groups: ["Divergente", "Convergente", "Trasforme"],
        items: [
          ["Dorsale medio-atlantica", 0],
          ["Rift Valley africana", 0],
          ["Ande", 1],
          ["Himalaya", 1],
          ["Fossa delle Marianne", 1],
          ["Faglia di Sant'Andrea", 2]
        ]
      },
      caption: "Pensa al movimento: si allontanano, si avvicinano o scorrono di lato?"
    },
    {
      type: "text",
      title: "I punti caldi e la storia della Terra",
      html: `<p>Non tutti i vulcani sono ai margini delle placche. Le <b>Hawaii</b> sono in mezzo alla placca del Pacifico. Qui un <b>pennacchio di mantello</b> (<i>mantle plume</i>), una colonna di roccia calda che sale da grande profondità, fonde la litosfera dal basso formando un <b>punto caldo</b> (<i>hot spot</i>) fisso. Mentre la placca scorre sopra al punto caldo, si forma una catena di isole vulcaniche in sequenza: la più giovane (Hawaii, con i vulcani attivi Kīlauea e Mauna Loa) è sopra al punto caldo, le altre sono più vecchie e più lontane, erose e spente. La direzione e l'età della catena registrano il movimento della placca. Altro esempio: Yellowstone, negli Stati Uniti.</p>
<p><b>Il ciclo di Wilson.</b> I continenti si uniscono e si separano in cicli di centinaia di milioni di anni: rift continentale → apertura di un oceano → oceano maturo (come l'Atlantico) → subduzione e chiusura → collisione e catena montuosa (come l'Himalaya) → nuova unione. La Pangea non fu il primo supercontinente: ne sono esistiti altri, come Rodinia (circa 1 miliardo di anni fa). Tra 200 milioni di anni circa potrebbe formarsene uno nuovo.</p>
<p><b>Le conseguenze sulla vita.</b> I movimenti delle placche cambiano correnti oceaniche, clima e barriere geografiche, e quindi guidano l'<b>evoluzione</b> (per esempio, i marsupiali in Australia, rimasta isolata) e le <b>estinzioni di massa</b> (la fine del Permiano, circa 252 milioni di anni fa, coincise con enormi eruzioni vulcaniche in Siberia, mentre la Pangea era già unita).</p>`
    },
    {
      type: "widget",
      title: "Quando è successo?",
      widget: "timeline",
      options: {
        unit: "anni",
        events: [
          { year: -1000000000, label: "Rodinia (circa)", icon: "🌍" },
          { year: -300000000, label: "Si forma la Pangea", icon: "🧩" },
          { year: -200000000, label: "La Pangea inizia a spezzarsi", icon: "💥" },
          { year: -66000000, label: "Fine dei dinosauri non aviari", icon: "☄️" },
          { year: -50000000, label: "India contro Eurasia: nascita dell'Himalaya", icon: "🏔️" },
          { year: -5000000, label: "Si forma l'Appennino attuale (in evoluzione)", icon: "⛰️" },
          { year: 0, label: "Oggi: l'Atlantico si allarga di circa 2-4 cm/anno", icon: "🛰️" }
        ]
      },
      caption: "Per la Terra pochi centimetri all'anno, accumulati per centinaia di milioni di anni, spostano oceani e continenti."
    },
    {
      type: "example",
      title: "Quanto si muovono i continenti? Un calcolo",
      html: `<p>Una placca che si muove di 5 cm all'anno percorre 5 m in un secolo e <b>50 km in un milione di anni</b>, cioè 5 cm × 1 000 000 = 5 000 000 cm = 50 km. In 100 milioni di anni sono <b>5000 km</b>: più o meno la larghezza dell'Atlantico meridionale, dove oggi Sud America e Africa distano circa 3000-6000 km a seconda della latitudine. L'Atlantico meridionale si è aperto circa 130 milioni di anni fa e si allarga di qualche centimetro l'anno, quindi i conti tornano: la tettonica delle placche è lenta ma, su tempi geologici, abbastanza veloce da cambiare completamente la geografia della Terra.</p>`
    },
    {
      type: "example",
      title: "E l'Italia? Un puzzle tra Africa ed Europa",
      html: `<p>L'Italia sta nel punto in cui la <b>placca africana</b> si avvicina a quella <b>euroasiatica</b> (circa 1 cm all'anno), con in mezzo una piccola placca (microplacca) detta <b>Adria</b>. Lo scontro ha formato le <b>Alpi</b> (collisione, da circa 100 milioni di anni fa, con il sollevamento più forte negli ultimi 35 milioni) e gli <b>Appennini</b>. Nel Tirreno meridionale la litosfera ionica subduce sotto la Calabria: per questo ci sono i vulcani delle Eolie (Stromboli, Vulcano), l'Etna e i terremoti profondi nel Tirreno. L'Appennino è anche in distensione, e i suoi terremoti, anche molto forti, sono legati a faglie attive. Le placche spiegano così la distribuzione di terremoti e vulcani della penisola: ne parleremo nella prossima lezione.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: placche e margini",
      questions: [
        { type: "mc", q: "In quale tipo di margine nasce nuova litosfera oceanica?", options: ["Divergente (dorsale)", "Convergente", "Trasforme", "In nessuno"], answer: 0, explain: "Alle dorsali il magma risale e solidifica formando nuova crosta oceanica." },
        { type: "tf", q: "La catena dell'Himalaya si è formata per collisione tra due placche continentali.", answer: true, explain: "L'India, spostandosi verso nord, ha urtato l'Eurasia circa 50 milioni di anni fa." },
        { type: "mc", q: "Quale prova si basa sulle \"strisce\" simmetriche di polarità magnetica ai lati delle dorsali?", options: ["L'espansione dei fondali oceanici", "L'esistenza della Pangea", "La struttura a strati della Terra", "I fossili di Mesosaurus"], answer: 0, explain: "Vine e Matthews (1963) mostrarono che la nuova crosta registra le inversioni del campo magnetico mentre si allontana dalla dorsale." },
        { type: "mc", q: "Perché Wegener non fu creduto?", options: ["Non seppe indicare un meccanismo valido", "Non aveva prove fossili", "Le coste non combaciano", "Non esistevano i supercontinenti"], answer: 0, explain: "Le prove erano molte, ma la causa proposta (maree e rotazione) era troppo debole." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la tettonica",
      intro: "Il movimento è lentissimo: servono analogie per \"vederlo\".",
      tabs: [
        { label: "🥣 La zuppa che bolle", html: "<p>Scalda a fuoco lento una zuppa densa coperta da una crosta (la pellicola che si forma sopra): la zuppa calda sale, si raffredda in superficie e scende; la crosta si spezza in lastre che si muovono insieme alle correnti. Il mantello è un po' così: roccia calda che sale e scende in <b>convezione</b>, ma lentissima. Le placche sono le lastre di crosta sopra il flusso.</p>" },
        { label: "🛍️ Il nastro trasportatore", html: "<p>Una dorsale oceanica è come un nastro trasportatore che parte da una linea centrale: sul nastro nasce nuova crosta che si allontana a destra e a sinistra, \"stampando\" la polarità magnetica del momento. Vicino alla fossa il nastro si infila sotto un'altra placca e scompare nel mantello. Per questo i fondali oceanici sono giovani: sono continuamente riciclati.</p>" },
        { label: "🪑 La tovaglia sul tavolo", html: "<p>Metti le mani su una tovaglia e spingi le due mani l'una verso l'altra: la stoffa si increspa e forma una montagna. È una collisione continentale: la crosta si piega e si accorcia. Se le mani vanno in direzioni opposte, la tovaglia si tende e si strappa: una rift. Se le fai scorrere di lato, la stoffa si impunta e poi scatta: un terremoto lungo una faglia trasforme.</p>" },
        { label: "🌐 La Terra a strati in 3D", html: "<p>Ruota il globo tagliato: la litosfera rigida (crosta e mantello superiore) galleggia sull'astenosfera calda e plastica, che a sua volta è il mantello sopra a un nucleo esterno liquido. Le placche sono lastre di litosfera: la sottile \"buccia\" del modello è proprio quella che si spezza e si muove.</p>", scene: "layers", options: { layers: [ { r: 1, color: "#92400e", label: "Litosfera (crosta + mantello rigido)" }, { r: 0.93, color: "#ea580c", label: "Mantello" }, { r: 0.55, color: "#f59e0b", label: "Nucleo esterno" }, { r: 0.19, color: "#fef08a", label: "Nucleo interno" } ] } }
      ]
    },
    {
      type: "curiosity",
      title: "La più grande catena montuosa è sott'acqua",
      html: `<p>La più lunga catena montuosa della Terra non è l'Himalaya, ma la <b>dorsale oceanica globale</b>: oltre 60 000 km di montagne sottomarine, in gran parte mai viste dall'uomo. L'Islanda, lungo la dorsale medio-atlantica, è uno dei pochi luoghi in cui la dorsale emerge: a Þingvellir, il sito dell'antico parlamento islandese, si cammina letteralmente nella spaccatura tra la placca nordamericana e quella eurasiatica, che si allontanano di circa 2 cm all'anno. Si può anche fare snorkeling nella faglia di Silfra, con un'acqua così limpida da vedere i bordi delle due placche.</p>`
    },
    {
      type: "curiosity",
      title: "Il mare sul tetto del mondo",
      html: `<p>Le cime dell'Himalaya e delle Alpi sono fatte, in parte, di rocce sedimentarie marine con fossili di conchiglie, ammoniti e pesci: sono sedimenti del fondo dell'antico oceano della <b>Tetide</b> che separava l'Africa/India dall'Eurasia. Quando l'oceano si è chiuso, i sedimenti sono stati compressi, piegati e sollevati a migliaia di metri. Anche il Cervino, per esempio, poggia in parte su roccia di origine africana, perché la sua parte alta è un lembo della placca africana sopra la crosta europea. Per chi sa leggere le rocce, una montagna è la storia di un oceano scomparso.</p>`
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li>La Terra ha <b>crosta, mantello, nucleo esterno (liquido), nucleo interno (solido)</b>; lo si è scoperto con le onde sismiche (P attraversano tutto, S non i liquidi).</li>
<li><b>Litosfera</b> rigida (crosta + mantello superiore, circa 100 km) suddivisa in <b>placche</b> che si muovono sull'<b>astenosfera</b> plastica, a pochi cm all'anno, spinte dalla convezione del mantello e dalla trazione della placca che subduce.</li>
<li><b>Margini</b>: divergenti (dorsali, rift), convergenti (subduzione, collisione), trasformi (faglie con terremoti).</li>
<li><b>Prove</b>: coste, fossili, rocce, paleoclima (Wegener, 1912-1915); dorsali, età dei fondali, strisce magnetiche (Hess, Vine e Matthews, anni Sessanta); GPS.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa della tettonica delle placche",
      nodes: [
        { id: "int", label: "Interno della Terra", x: 50, y: 8, color: "#7c3aed", html: "Crosta, mantello, nucleo; litosfera e astenosfera.", why: "Non possiamo scavare così a fondo, ma le onde sismiche ci hanno fatto la 'ecografia': Oldham (1906), Mohorovičić (1909), Gutenberg (1914) e Lehmann (1936) hanno scoperto i confini tra gli strati." },
        { id: "conv", label: "Convezione e calore", x: 15, y: 35, color: "#ef4444", html: "Il calore interno muove il mantello.", why: "Il calore deriva dalla formazione della Terra e dal decadimento radioattivo di uranio, torio e potassio. Il calore passa verso l'esterno con moti lentissimi che sono la causa ultima del movimento delle placche." },
        { id: "weg", label: "Deriva dei continenti", x: 50, y: 38, color: "#0ea5e9", html: "Wegener: la Pangea e le prove.", why: "Wegener (1912-1915) riunì coste, fossili, rocce e tracce di climi antichi, ma mancava la causa: per questo la sua teoria fu accolta solo dopo gli anni Sessanta." },
        { id: "spr", label: "Espansione dei fondali", x: 85, y: 35, color: "#16a34a", html: "La crosta oceanica nasce alle dorsali.", why: "Hess (1960-62) interpretò dorsali e fosse come l'inizio e la fine di un nastro trasportatore. Vine e Matthews (1963) lo confermarono con le strisce magnetiche simmetriche." },
        { id: "pl", label: "Placche e margini", x: 30, y: 72, color: "#f59e0b", html: "Margini divergenti, convergenti, trasformi.", why: "I terremoti e i vulcani non sono distribuiti a caso, ma seguono sottili fasce che disegnano i confini delle placche: la mappa dei terremoti è la mappa delle placche." },
        { id: "eff", label: "Terremoti, vulcani, montagne", x: 75, y: 78, color: "#0f766e", html: "Fenomeni che avvengono ai margini.", why: "Le placche si bloccano per attrito e poi scattano (terremoti); la subduzione e i punti caldi fondono il mantello (vulcani); le collisioni sollevano le catene montuose (orogenesi)." }
      ],
      edges: [["int", "conv", "ha un"], ["conv", "weg", "è la causa che mancava a"], ["conv", "spr", "genera"], ["weg", "pl", "diventa la teoria delle"], ["spr", "pl", "conferma le"], ["pl", "eff", "producono"]]
    }
  ],
  glossary: [
    { t: "Onde sismiche P e S", d: "Onde di volume dei terremoti: le P (di compressione) attraversano anche i liquidi, le S (di taglio) no." },
    { t: "Crosta", d: "Strato più esterno della Terra: continentale (30-70 km) od oceanica (5-10 km)." },
    { t: "Mantello", d: "Strato tra la crosta e il nucleo, fino a 2900 km: solido ma plastico sui tempi geologici." },
    { t: "Litosfera", d: "Strato rigido esterno (crosta e mantello superiore) diviso in placche." },
    { t: "Astenosfera", d: "Parte del mantello superiore plastica, su cui scivola la litosfera." },
    { t: "Pangea", d: "Supercontinente che riuniva tutte le terre emerse circa 250-300 milioni di anni fa." },
    { t: "Dorsale oceanica", d: "Catena sottomarina dove nasce nuova crosta oceanica (margine divergente)." },
    { t: "Subduzione", d: "Processo per cui una placca oceanica scende sotto un'altra nel mantello." },
    { t: "Orogenesi", d: "Formazione di catene montuose per collisione e deformazione della crosta." },
    { t: "Faglia trasforme", d: "Margine lungo cui due placche scorrono lateralmente (es. Sant'Andrea)." },
    { t: "Punto caldo (hot spot)", d: "Zona di risalita di magma fissa nel mantello che forma catene di vulcani (es. Hawaii)." },
    { t: "Paleomagnetismo", d: "Studio della magnetizzazione delle rocce che registra il campo magnetico del passato." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale strato della Terra è liquido?", options: ["Il nucleo esterno", "Il mantello", "Il nucleo interno", "La crosta oceanica"], answer: 0, explain: "Il nucleo esterno (2900-5100 km) è liquido, perché non è attraversato dalle onde S." },
      { type: "mc", q: "Qual è la differenza tra litosfera e astenosfera?", options: ["La litosfera è rigida, l'astenosfera è plastica", "La litosfera è liquida", "L'astenosfera è la crosta", "Non c'è differenza"], answer: 0, explain: "La litosfera (circa 100 km) è rigida e si spezza in placche; l'astenosfera, più calda, si deforma lentamente." },
      { type: "tf", q: "Wegener propose la Pangea e fu subito accettato da tutti i geologi.", answer: false, explain: "La teoria fu in gran parte respinta fino agli anni Sessanta perché non indicava un meccanismo plausibile." },
      { type: "mc", q: "Che cosa dimostrano le strisce magnetiche simmetriche ai lati delle dorsali?", options: ["Che il fondo oceanico si forma alla dorsale e si allontana", "Che la Terra si ingrandisce", "Che i continenti sono fissi", "Che il nucleo è solido"], answer: 0, explain: "La nuova crosta registra la polarità del campo magnetico; la simmetria mostra l'espansione dei fondali." },
      { type: "mc", q: "Che cosa succede in un margine convergente oceano-continente?", options: ["La placca oceanica subduce sotto quella continentale", "Le placche si allontanano", "Nasce una dorsale", "Le placche non si muovono"], answer: 0, explain: "La crosta oceanica, più densa, scende nel mantello formando una fossa e un arco di vulcani sul continente." },
      { type: "mc", q: "Dove si trova la faglia di Sant'Andrea?", options: ["California (margine trasforme)", "Giappone (margine convergente)", "Islanda (dorsale)", "Alpi (collisione)"], answer: 0, explain: "È un margine trasforme tra la placca Pacifica e quella Nordamericana." },
      { type: "num", q: "Quanti chilometri percorre una placca che si muove di 4 cm all'anno in 10 milioni di anni?", answer: 400, tol: 0, explain: "4 cm × 10 000 000 = 40 000 000 cm = 400 km." },
      { type: "tf", q: "Le Hawaii si trovano su un margine di placca.", answer: false, explain: "Sono nel mezzo della placca del Pacifico, formate da un punto caldo (pennacchio di mantello)." },
      { type: "text", q: "Come si chiama il supercontinente descritto da Wegener?", answer: ["pangea", "la pangea"], explain: "Pangea, 'tutta la terra', esistente circa 250-300 milioni di anni fa." },
      { type: "order", q: "Ordina gli strati della Terra dalla superficie al centro.", items: ["Crosta", "Mantello", "Nucleo esterno", "Nucleo interno"], explain: "Crosta (fino a 5-70 km), mantello (fino a 2900 km), nucleo esterno liquido (fino a 5100 km), nucleo interno solido (fino a 6371 km)." }
    ]
  }
});

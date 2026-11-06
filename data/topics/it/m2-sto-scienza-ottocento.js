TOPIC('it', {
  id: `m2-sto-scienza-ottocento`,
  title: `Le scoperte scientifiche dell'Ottocento`,
  intro: `L'Ottocento è il secolo in cui la scienza cambia la vita di tutti: dalla <b>pila di Volta</b> nasce l'era dell'<b>elettricità</b>; <b>Darwin</b> spiega come si evolvono gli esseri viventi; <b>Pasteur</b> e <b>Koch</b> scoprono i microbi che causano le malattie; Mendeleev mette ordine negli elementi chimici. Molte cose che oggi diamo per scontate, come lavarsi le mani o accendere la luce, vengono da qui.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Perché proprio l'Ottocento?`,
      html: `<p>Nell'Ottocento la scienza diventa una <b>professione</b>: nascono laboratori nelle università, riviste scientifiche, congressi internazionali. Il <b>metodo sperimentale</b> di Galileo (osservare, fare un'ipotesi, verificarla con esperimenti, trarre conclusioni) viene applicato a campi nuovi: elettricità, chimica, biologia, medicina.</p>
<p>Gli strumenti migliorano (microscopi più potenti, termometri, bilance precise) e l'industria chiede invenzioni utili. Scienza, tecnica e industria si spingono a vicenda: è una delle radici della <b>seconda rivoluzione industriale</b>.</p>`
    },
    {
      type: `text`,
      title: `2. L'elettricità: da una rana a una lampadina`,
      html: `<ol>
<li><b>Galvani</b> (Bologna, anni 1780-90) nota che le zampe di rana si contraggono toccate da due metalli diversi: pensa a un'"elettricità animale".</li>
<li><b>Alessandro Volta</b> (Pavia) capisce che l'elettricità nasce dal contatto tra i <b>due metalli</b> separati da un liquido. Nel <b>1800</b> annuncia la <b>pila</b>: dischi di zinco e rame alternati, separati da panno imbevuto di acqua salata. È il primo generatore di <b>corrente continua</b>. Da lui prende nome l'unità di misura <b>volt</b>.</li>
<li>Nel <b>1820</b> il danese <b>Ørsted</b> scopre che una corrente elettrica fa muovere l'ago di una bussola: elettricità e magnetismo sono collegati.</li>
<li>Nel <b>1831</b> l'inglese <b>Michael Faraday</b> scopre l'<b>induzione elettromagnetica</b>: muovendo un magnete dentro una bobina di filo si produce corrente. È il principio della <b>dinamo</b> e dei generatori delle centrali elettriche di oggi.</li>
<li>Nel <b>1865</b> lo scozzese <b>James Clerk Maxwell</b> riassume tutto in quattro equazioni e prevede le <b>onde elettromagnetiche</b>: la luce è una di esse! <b>Hertz</b> le produce in laboratorio nel 1887; Marconi le userà per la radio.</li>
</ol>
<p>Applicazioni: il <b>telegrafo</b> di Morse (1844), il telefono (1876), la lampadina (1879), il motore elettrico.</p>`
    },
    {
      type: `widget`,
      title: `Com'è fatta la pila di Volta`,
      widget: `labelDiagram`,
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<rect x="230" y="40" width="140" height="18" fill="#b45309"/>
<rect x="230" y="58" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="66" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="84" width="140" height="18" fill="#b45309"/>
<rect x="230" y="102" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="110" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="128" width="140" height="18" fill="#b45309"/>
<rect x="230" y="146" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="154" width="140" height="18" fill="#9ca3af"/>
<rect x="230" y="172" width="140" height="18" fill="#b45309"/>
<rect x="230" y="190" width="140" height="8" fill="#93c5fd"/>
<rect x="230" y="198" width="140" height="18" fill="#9ca3af"/>
<rect x="210" y="216" width="180" height="20" fill="#78350f"/>
<path d="M370 49 C470 49 470 120 500 120" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M370 207 C470 207 470 160 500 160" stroke="#1d4ed8" stroke-width="5" fill="none"/>
<circle cx="510" cy="140" r="24" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="300" y="280" font-size="16" text-anchor="middle">rame, panno con acqua salata, zinco… ripetuti</text>
</svg>`,
        spots: [
          { x: 300, y: 49, label: `Disco di rame` },
          { x: 300, y: 62, label: `Panno imbevuto di acqua salata` },
          { x: 300, y: 75, label: `Disco di zinco` },
          { x: 300, y: 226, label: `Base di legno` },
          { x: 450, y: 70, label: `Filo conduttore` },
          { x: 510, y: 140, label: `Lampadina (oggi)` }
        ]
      },
      caption: `Ogni "coppia" rame-panno-zinco dà una piccola tensione; impilandone tante si sommano. Ai tempi di Volta la lampadina non esisteva ancora: si sentiva la scossa o si vedevano scintille.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: elettricità`,
      questions: [
        { type: `mc`, q: `Che cosa annunciò Alessandro Volta nel 1800?`, options: [`La lampadina`, `La pila`, `Il telegrafo`], answer: 1, explain: `La pila, primo generatore di corrente continua.` },
        { type: `text`, q: `Quale scienziato inglese scoprì l'induzione elettromagnetica nel 1831?`, answer: [`faraday`, `michael faraday`], explain: `Michael Faraday: un magnete in movimento dentro una bobina produce corrente.` },
        { type: `tf`, q: `Secondo Maxwell la luce è un'onda elettromagnetica.`, answer: true, explain: `Le sue equazioni (1865) mostrano che luce, onde radio e raggi X sono della stessa natura.` }
      ]
    },
    {
      type: `text`,
      title: `3. Darwin e l'evoluzione`,
      html: `<p>Nel <b>1831</b> il giovane naturalista inglese <b>Charles Darwin</b> parte sulla nave <b>Beagle</b> per un viaggio intorno al mondo che dura cinque anni. Nel <b>1835</b>, alle isole <b>Galápagos</b> (Oceano Pacifico), osserva che i fringuelli di isole diverse hanno becchi diversi, adatti al cibo di ciascuna isola.</p>
<p>Dopo oltre vent'anni di studi pubblica <b>L'origine delle specie</b> (<b>1859</b>). La sua teoria, l'<b>evoluzione per selezione naturale</b>, si può riassumere in quattro passi:</p>
<ol>
<li><b>Variabilità</b>: gli individui di una specie sono tutti un po' diversi tra loro.</li>
<li><b>Ereditarietà</b>: molte caratteristiche passano dai genitori ai figli.</li>
<li><b>Lotta per la sopravvivenza</b>: nascono più individui di quanti possano sopravvivere.</li>
<li><b>Selezione</b>: chi ha caratteristiche più adatte all'ambiente sopravvive e si riproduce di più. In tantissime generazioni la specie cambia.</li>
</ol>
<p>Anche <b>Alfred Russel Wallace</b> arrivò alla stessa idea, indipendentemente: i due presentarono insieme le loro teorie nel 1858. La teoria fece scandalo, perché includeva anche l'essere umano: Darwin sosteneva che uomo e scimmie antropomorfe hanno <b>antenati comuni</b> (non che l'uomo "discende dalla scimmia").</p>
<p>Darwin non sapeva <i>come</i> si ereditano i caratteri. Lo aveva scoperto, senza che lui lo sapesse, il monaco <b>Gregor Mendel</b>: incrociando migliaia di piante di piselli a Brno, nel <b>1865</b> trovò le leggi dell'ereditarietà, base della <b>genetica</b>. Il suo lavoro fu riscoperto solo nel 1900.</p>`
    },
    {
      type: `svg`,
      title: `I fringuelli delle Galápagos`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfdf5"/>
<text x="300" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#065f46">Becchi diversi per cibi diversi</text>
<ellipse cx="110" cy="140" rx="55" ry="40" fill="#a16207"/>
<circle cx="150" cy="110" r="25" fill="#a16207"/>
<circle cx="157" cy="104" r="4" fill="#111827"/>
<polygon points="172,100 205,110 172,122" fill="#1f2937"/>
<text x="110" y="215" font-size="15" text-anchor="middle" font-weight="bold">becco grosso</text>
<text x="110" y="237" font-size="14" text-anchor="middle">rompe semi duri</text>
<ellipse cx="300" cy="140" rx="55" ry="40" fill="#78716c"/>
<circle cx="340" cy="110" r="25" fill="#78716c"/>
<circle cx="347" cy="104" r="4" fill="#111827"/>
<polygon points="362,106 410,112 362,116" fill="#1f2937"/>
<text x="300" y="215" font-size="15" text-anchor="middle" font-weight="bold">becco sottile</text>
<text x="300" y="237" font-size="14" text-anchor="middle">cattura insetti</text>
<ellipse cx="490" cy="140" rx="55" ry="40" fill="#57534e"/>
<circle cx="530" cy="110" r="25" fill="#57534e"/>
<circle cx="537" cy="104" r="4" fill="#111827"/>
<polygon points="552,104 590,118 552,118" fill="#1f2937"/>
<text x="490" y="215" font-size="15" text-anchor="middle" font-weight="bold">becco lungo</text>
<text x="490" y="237" font-size="14" text-anchor="middle">fiori di cactus</text>
<text x="300" y="280" font-size="15" text-anchor="middle" fill="#065f46">Un antenato comune, adattamenti diversi su isole diverse</text>
</svg>`,
      caption: `Disegno semplificato: sulle Galápagos vivono più di una dozzina di specie di fringuelli, discendenti da un antenato arrivato dal continente.`
    },
    {
      type: `text`,
      title: `4. La rivoluzione della medicina`,
      html: `<p>All'inizio dell'Ottocento i medici non sapevano che molte malattie sono causate da <b>microrganismi</b>. Si pensava ai "miasmi", l'aria cattiva. Le operazioni si facevano senza anestesia e senza lavarsi le mani. Ecco come cambiò tutto:</p>
<ul>
<li><b>1796</b> – <b>Edward Jenner</b> crea il primo <b>vaccino</b> contro il vaiolo, usando il vaiolo delle mucche (da qui la parola "vaccino", da <i>vacca</i>).</li>
<li><b>1846</b> – A Boston si opera per la prima volta in pubblico un paziente addormentato con l'<b>etere</b>: nasce l'<b>anestesia</b>.</li>
<li><b>1847</b> – A Vienna <b>Ignaz Semmelweis</b> impone ai medici di lavarsi le mani con una soluzione di cloro: le morti di febbre nelle partorienti crollano.</li>
<li><b>1854</b> – A Londra <b>John Snow</b> dimostra con una mappa che il colera si diffonde con l'acqua di una fontana inquinata. Nello stesso anno a Firenze <b>Filippo Pacini</b> osserva al microscopio il batterio del colera.</li>
<li><b>Anni 1860</b> – <b>Louis Pasteur</b> dimostra che i microbi non nascono "dal nulla" e che causano fermentazioni e malattie (<b>teoria dei germi</b>). Inventa la <b>pastorizzazione</b>: scaldare un liquido per uccidere i microbi. Nel <b>1885</b> salva un bambino morso da un cane rabbioso con il suo vaccino.</li>
<li><b>1867</b> – <b>Joseph Lister</b> usa l'acido fenico per disinfettare ferite e strumenti: nasce l'<b>antisepsi</b>.</li>
<li><b>1882</b> – <b>Robert Koch</b> scopre il batterio della <b>tubercolosi</b>; il 24 marzo è ancora oggi la Giornata mondiale contro la TBC.</li>
<li><b>1895</b> – <b>Wilhelm Röntgen</b> scopre i <b>raggi X</b>: per la prima volta si vede dentro il corpo senza tagliarlo.</li>
</ul>`
    },
    {
      type: `text`,
      title: `5. La chimica e l'atomo`,
      html: `<p>Nel <b>1808</b> John <b>Dalton</b> propone che la materia sia fatta di <b>atomi</b>, diversi per ogni elemento. Nel <b>1869</b> il russo <b>Dmitrij Mendeleev</b> ordina i 63 elementi allora conosciuti secondo la massa e le proprietà: nasce la <b>tavola periodica</b>. Mendeleev lascia <b>caselle vuote</b> e prevede le proprietà degli elementi mancanti: gallio (scoperto nel 1875), scandio (1879) e germanio (1886) confermano le sue previsioni!</p>
<p>A fine secolo si scopre che l'atomo non è indivisibile: <b>Becquerel</b> scopre la <b>radioattività</b> (1896), <b>Marie e Pierre Curie</b> scoprono polonio e radio (1898), <b>J. J. Thomson</b> scopre l'<b>elettrone</b> (1897). Marie Curie sarà la prima persona a vincere due Premi Nobel (fisica 1903, chimica 1911).</p>`
    },
    {
      type: `widget`,
      title: `La tavola periodica di Mendeleev, oggi`,
      widget: `periodicTable`,
      options: {},
      caption: `Tocca gli elementi: nota come quelli nella stessa colonna hanno proprietà simili. È proprio questa "periodicità" che Mendeleev notò nel 1869.`
    },
    {
      type: `3d`,
      title: `Dentro l'atomo`,
      scene: `atom`,
      options: { elements: [`H`, `He`, `Li`, `C`, `O`, `Na`] },
      caption: `Il modello a orbite (di Bohr) è del 1913, ma nasce dalle scoperte di fine Ottocento: elettrone (1897) e radioattività (1896).`
    },
    {
      type: `widget`,
      title: `Chi ha scoperto che cosa?`,
      widget: `match`,
      options: {
        pairs: [
          [`Alessandro Volta`, `La pila elettrica`],
          [`Michael Faraday`, `Induzione elettromagnetica`],
          [`Charles Darwin`, `Evoluzione per selezione naturale`],
          [`Gregor Mendel`, `Leggi dell'ereditarietà`],
          [`Louis Pasteur`, `Pastorizzazione e vaccino antirabbico`],
          [`Robert Koch`, `Batterio della tubercolosi`],
          [`Dmitrij Mendeleev`, `Tavola periodica`],
          [`Wilhelm Röntgen`, `Raggi X`]
        ]
      },
      caption: `Otto scienziati, otto scoperte che usiamo ancora ogni giorno.`
    },
    {
      type: `example`,
      title: `Esempio pratico: la scienza dell'Ottocento nel tuo frigorifero`,
      html: `<p>Prendi una bottiglia di latte: c'è scritto <b>"pastorizzato"</b>. Significa che è stato scaldato (circa 72 °C per 15 secondi) per uccidere i batteri pericolosi, senza farlo bollire. È il metodo che <b>Pasteur</b> inventò nel 1864 per il vino e la birra, che andavano a male.</p>
<p>Ora guarda una presa di corrente: la tensione è di <b>230 volt</b> (unità che porta il nome di Volta) ed è prodotta da generatori che funzionano con l'induzione di <b>Faraday</b>. La luce del frigo che si accende? Viene da un'idea di <b>Edison</b>, oggi trasformata in LED.</p>`
    },
    {
      type: `example`,
      title: `Esempio pratico: fai come John Snow`,
      html: `<p>Nel 1854 a Londra, in pochi giorni, morirono centinaia di persone di colera nel quartiere di Soho. John Snow segnò su una mappa ogni casa con un morto: i punti si concentravano intorno alla <b>fontana di Broad Street</b>. Fece togliere la maniglia della pompa e l'epidemia, già in calo, si spense.</p>
<p>Prova anche tu: se in classe molti hanno mal di pancia, che cosa annoteresti? Chi ha mangiato cosa, dove, quando… È il metodo dell'<b>epidemiologia</b>: raccogliere dati, metterli su una mappa o in una tabella, cercare il fattore comune.</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… la prima radiografia è di una mano con l'anello?`,
      html: `<p>Il 22 dicembre 1895 Röntgen fotografò con i raggi X la mano della moglie Anna Bertha: si vedevano le ossa e la fede nuziale. Lei, vedendo il proprio scheletro, avrebbe detto: <i>"Ho visto la mia morte!"</i>. Röntgen chiamò i raggi "X" perché non sapeva che cosa fossero: in matematica X è l'incognita. Vinse il primo Nobel per la fisica (1901) e rifiutò di brevettare la scoperta, perché fosse di tutti.</p>`
    },
    {
      type: `curiosity`,
      title: `Lo sapevi che… Semmelweis non fu creduto?`,
      html: `<p>Nonostante i risultati, molti medici si offesero all'idea di essere loro a portare la malattia con le proprie mani. Semmelweis perse il posto a Vienna e morì nel 1865, prima che le scoperte di Pasteur e Lister gli dessero ragione. Oggi l'OMS celebra ogni anno il 5 maggio la Giornata mondiale dell'igiene delle mani.</p>`
    },
    {
      type: `widget`,
      title: `Un secolo di scoperte`,
      widget: `timeline`,
      options: {
        unit: `anni`,
        events: [
          { year: 1796, label: `Jenner: vaccino contro il vaiolo`, icon: `💉` },
          { year: 1800, label: `Volta: la pila`, icon: `🔋` },
          { year: 1831, label: `Faraday: induzione; Darwin parte sul Beagle`, icon: `🧲` },
          { year: 1846, label: `Prima anestesia con etere`, icon: `😴` },
          { year: 1847, label: `Semmelweis: lavarsi le mani`, icon: `🧼` },
          { year: 1859, label: `Darwin: L'origine delle specie`, icon: `🐢` },
          { year: 1865, label: `Mendel, Maxwell`, icon: `🌱` },
          { year: 1869, label: `Mendeleev: tavola periodica`, icon: `🧪` },
          { year: 1882, label: `Koch: bacillo della tubercolosi`, icon: `🔬` },
          { year: 1885, label: `Pasteur: vaccino antirabbico`, icon: `🐕` },
          { year: 1895, label: `Röntgen: raggi X`, icon: `🩻` },
          { year: 1898, label: `Curie: polonio e radio`, icon: `☢️` }
        ]
      },
      caption: `Nel 1800 un'operazione era un incubo; nel 1900 c'erano anestesia, disinfezione e radiografie.`
    },
    {
      type: `3d`,
      title: `Mappa 3D spazio-tempo delle scoperte`,
      scene: `spacetime`,
      caption: `Le scoperte si concentrano in Europa, ma la scienza viaggia: dalle Galápagos a Boston. Tocca un evento: le frecce mostrano quali scoperte hanno reso possibili le altre.`,
      options: {
        lat: [-5, 60],
        lon: [-95, 35],
        years: [1790, 1900],
        places: [
          { lat: 51.5, lon: -0.12, label: `Londra` },
          { lat: 48.86, lon: 2.35, label: `Parigi` },
          { lat: 52.52, lon: 13.4, label: `Berlino` },
          { lat: 48.21, lon: 16.37, label: `Vienna` },
          { lat: 45.19, lon: 9.16, label: `Pavia` },
          { lat: -0.7, lon: -90.5, label: `Galápagos` }
        ],
        events: [
          { id: `jenner`, lat: 51.69, lon: -2.46, year: 1796, label: `Primo vaccino`, html: `A Berkeley, in Inghilterra, Edward Jenner inocula a un bambino il vaiolo bovino, poi dimostra che non si ammala di vaiolo umano. Nel 1980 il vaiolo è stato dichiarato eradicato.` },
          { id: `volta`, lat: 45.19, lon: 9.16, year: 1800, label: `La pila di Volta`, html: `Alessandro Volta, professore a Pavia, annuncia la pila: per la prima volta si ha una corrente elettrica continua da studiare.` },
          { id: `faraday`, lat: 51.51, lon: -0.14, year: 1831, label: `Induzione elettromagnetica`, html: `Alla Royal Institution di Londra Faraday produce corrente muovendo un magnete in una bobina. Senza la pila non avrebbe potuto studiare le correnti.`, causes: [`volta`] },
          { id: `galapagos`, lat: -0.7, lon: -90.5, year: 1835, label: `Darwin alle Galápagos`, html: `Darwin raccoglie fringuelli, tartarughe e iguane, notando che variano da isola a isola. Il dubbio che le specie non siano immutabili comincia qui.` },
          { id: `etere`, lat: 42.36, lon: -71.06, year: 1846, label: `Anestesia`, html: `Al Massachusetts General Hospital di Boston il dentista William Morton addormenta un paziente con l'etere durante un'operazione al collo. In pochi mesi l'anestesia si diffonde nel mondo.` },
          { id: `semmelweis`, lat: 48.22, lon: 16.35, year: 1847, label: `Lavarsi le mani`, html: `Semmelweis nota che le partorienti visitate da medici che venivano dalla sala autopsie morivano molto più spesso. Con il lavaggio delle mani le morti crollano.` },
          { id: `snow`, lat: 51.51, lon: -0.14, year: 1854, label: `La mappa del colera`, html: `John Snow collega i morti di colera a una fontana inquinata: nasce l'epidemiologia moderna. Nello stesso anno Pacini osserva il batterio a Firenze.` },
          { id: `origine`, lat: 51.5, lon: -0.12, year: 1859, label: `L'origine delle specie`, html: `Darwin pubblica il suo libro a Londra: la prima tiratura va esaurita in pochi giorni. La biologia non sarà più la stessa.`, causes: [`galapagos`] },
          { id: `pasteur`, lat: 48.86, lon: 2.35, year: 1864, label: `Teoria dei germi`, html: `Pasteur dimostra con i suoi palloni a "collo di cigno" che i microbi vengono dall'aria e non nascono dal nulla. Inventa la pastorizzazione.` },
          { id: `mendel`, lat: 49.2, lon: 16.61, year: 1865, label: `Leggi di Mendel`, html: `Nel monastero di Brno Mendel presenta i risultati su circa 28.000 piante di piselli: i caratteri si ereditano come "unità" separate. Nessuno lo capisce fino al 1900.` },
          { id: `maxwell`, lat: 52.2, lon: 0.12, year: 1865, label: `Equazioni di Maxwell`, html: `Maxwell unifica elettricità, magnetismo e luce. Prevede le onde elettromagnetiche, scoperte da Hertz nel 1887.`, causes: [`faraday`] },
          { id: `lister`, lat: 55.86, lon: -4.25, year: 1867, label: `Antisepsi`, html: `A Glasgow il chirurgo Joseph Lister, leggendo Pasteur, disinfetta ferite e strumenti con acido fenico: le infezioni dopo le operazioni diminuiscono drasticamente.`, causes: [`pasteur`, `semmelweis`] },
          { id: `mendeleev`, lat: 59.94, lon: 30.31, year: 1869, label: `Tavola periodica`, html: `A San Pietroburgo Mendeleev ordina gli elementi in una tabella e predice quelli mancanti.` },
          { id: `koch`, lat: 52.52, lon: 13.4, year: 1882, label: `Bacillo della TBC`, html: `A Berlino Robert Koch identifica il batterio della tubercolosi, allora una delle prime cause di morte in Europa.`, causes: [`pasteur`] },
          { id: `rabbia`, lat: 48.85, lon: 2.34, year: 1885, label: `Vaccino antirabbico`, html: `Pasteur vaccina Joseph Meister, 9 anni, morso da un cane rabbioso: il bambino sopravvive.`, causes: [`pasteur`, `jenner`] },
          { id: `raggix`, lat: 49.79, lon: 9.95, year: 1895, label: `Raggi X`, html: `A Würzburg Röntgen scopre raggi invisibili che attraversano la carne ma non le ossa.`, causes: [`maxwell`] },
          { id: `curie`, lat: 48.84, lon: 2.34, year: 1898, label: `Radioattività`, html: `A Parigi Marie e Pierre Curie, studiando i raggi scoperti da Becquerel, isolano due nuovi elementi: polonio e radio.`, causes: [`raggix`, `mendeleev`] }
        ]
      }
    },
    {
      type: `decision`,
      title: `Vienna, 1847: sei il dottor Semmelweis`,
      html: `<p>Nel tuo ospedale ci sono due reparti maternità. Nel primo, dove lavorano i medici e gli studenti, muoiono di "febbre puerperale" molte più donne (anche 1 su 10) che nel secondo, dove lavorano solo le ostetriche. I medici, prima di visitare le partorienti, fanno autopsie sui cadaveri. Un tuo collega muore di una febbre simile dopo essersi tagliato durante un'autopsia.</p>`,
      question: `Che cosa pensi e che cosa fai?`,
      options: [
        { label: `È colpa dell'aria cattiva del reparto: apro le finestre.`, outcome: `È la teoria dei "miasmi", accettata da quasi tutti. Ma i due reparti hanno la stessa aria: non spiega la differenza.` },
        { label: `Le mani dei medici portano dai cadaveri qualcosa che fa ammalare: impongo di lavarle con una soluzione di cloro.`, outcome: `Non sai ancora che cosa sia questo "qualcosa" (i microbi saranno dimostrati anni dopo), ma puoi verificare con i numeri se funziona.` },
        { label: `È il destino: alcune donne sono più deboli di altre.`, outcome: `Non spiega perché nel reparto delle ostetriche si muoia molto meno.` }
      ],
      answer: 1,
      explain: `Semmelweis introdusse il lavaggio delle mani con cloruro di calce nel maggio 1847: in pochi mesi la mortalità nel reparto dei medici scese a circa 1-2%. È un esempio perfetto di <b>metodo scientifico</b>: osservazione, ipotesi, esperimento, verifica con i numeri. Ma molti colleghi rifiutarono l'idea. Solo con Pasteur e Lister, vent'anni dopo, si capì perché aveva ragione.`
    },
    {
      type: `decision`,
      title: `Parigi, luglio 1885: sei Louis Pasteur`,
      html: `<p>Ti portano Joseph Meister, 9 anni, morso da un cane rabbioso due giorni prima. Senza cure, la rabbia è mortale quasi nel 100% dei casi. Hai un vaccino che ha funzionato sui cani, ma non l'hai mai provato su un essere umano. Inoltre non sei un medico: sei un chimico.</p>`,
      question: `Che cosa fai?`,
      options: [
        { label: `Non lo curo: il vaccino non è ancora stato provato sugli esseri umani.`, outcome: `Eviti un rischio sconosciuto, ma il bambino quasi certamente morirà.` },
        { label: `Lo curo, con l'aiuto di medici che somministrano le iniezioni, e seguo attentamente come reagisce.`, outcome: `È un grande rischio etico e scientifico: se fallisci, potresti essere accusato di aver ucciso il bambino. Ma è l'unica speranza di salvarlo.` },
        { label: `Aspetto qualche settimana per fare altre prove sui cani.`, outcome: `La rabbia non aspetta: dopo la comparsa dei sintomi non c'è più nulla da fare.` }
      ],
      answer: 1,
      explain: `Pasteur, d'accordo con due medici, somministrò a Joseph 13 iniezioni in 10 giorni. Il bambino sopravvisse e da adulto lavorò come custode all'Istituto Pasteur. Il successo rese famoso il vaccino in tutto il mondo. Oggi le regole sono molto più severe: un farmaco nuovo deve superare test lunghi e controllati prima di essere usato sulle persone, proprio per proteggere i pazienti.`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capirlo`,
      intro: `Alcune idee dell'Ottocento sono difficili da immaginare: ecco qualche aiuto.`,
      tabs: [
        {
          label: `💧 L'elettricità come l'acqua`,
          html: `<p>Pensa a un circuito come a un impianto idraulico:</p>
<ul>
<li>la <b>pila</b> è una <b>pompa</b> che spinge l'acqua;</li>
<li>la <b>tensione</b> (volt) è quanto forte spinge la pompa;</li>
<li>la <b>corrente</b> (ampere) è quanta acqua passa ogni secondo;</li>
<li>la <b>lampadina</b> è una ruota da mulino: l'acqua la fa girare e produce lavoro;</li>
<li>se il tubo si interrompe (<b>circuito aperto</b>) l'acqua si ferma.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#eff6ff"/>
<rect x="60" y="50" width="480" height="120" rx="20" fill="none" stroke="#2563eb" stroke-width="12"/>
<rect x="30" y="80" width="60" height="60" rx="8" fill="#f97316"/>
<text x="60" y="117" font-size="14" text-anchor="middle" font-weight="bold" fill="#ffffff">pompa</text>
<circle cx="540" cy="110" r="32" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<text x="540" y="115" font-size="13" text-anchor="middle">mulino</text>
<text x="300" y="40" font-size="15" text-anchor="middle" fill="#1e3a8a">acqua che scorre = corrente →</text>
<text x="60" y="190" font-size="14" text-anchor="middle">= pila</text>
<text x="540" y="190" font-size="14" text-anchor="middle">= lampadina</text>
<text x="300" y="115" font-size="15" text-anchor="middle" fill="#334155">tubo = filo elettrico</text>
</svg>`
        },
        {
          label: `🐞 La selezione come un gioco`,
          html: `<p>Immagina 100 coccinelle: 50 rosse e 50 verdi, su un prato verde. Gli uccelli vedono meglio quelle rosse e ne mangiano di più. Alla generazione successiva le verdi sono 60, poi 70, poi 85… Nessuna coccinella ha "deciso" di diventare verde: semplicemente le verdi sopravvivono e fanno più figli.</p>
<p>Se il prato diventa marrone (siccità), il vantaggio cambia! Questo è successo davvero con la <b>falena delle betulle</b> in Inghilterra: durante la rivoluzione industriale, quando i tronchi si annerirono di fuliggine, le falene scure diventarono le più comuni.</p>`
        },
        {
          label: `⚛️ L'atomo in 3D`,
          html: `<p>A fine Ottocento si scopre che l'atomo ha "pezzi" interni: gli <b>elettroni</b> (Thomson, 1897). Qui vedi il modello di Bohr: un nucleo con intorno gli elettroni su orbite. Confronta l'idrogeno (1 elettrone) con il sodio (11).</p>`,
          scene: `atom`,
          options: { elements: [`H`, `He`, `C`, `Na`] }
        },
        {
          label: `🔎 Il metodo in 5 passi`,
          html: `<p>Quasi tutte le scoperte di questa lezione seguono lo stesso schema. Prova a riconoscerlo con Semmelweis:</p>
<ol>
<li><b>Osservo</b>: nel reparto dei medici si muore di più.</li>
<li><b>Mi chiedo</b>: perché? Che cosa c'è di diverso?</li>
<li><b>Ipotizzo</b>: i medici portano qualcosa dai cadaveri.</li>
<li><b>Sperimento</b>: lavaggio delle mani obbligatorio.</li>
<li><b>Verifico con i dati</b>: la mortalità crolla. Ipotesi confermata!</li>
</ol>
<p>Prova a rifarlo con Snow (colera) o con Pasteur (latte che va a male).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa delle scoperte dell'Ottocento`,
      nodes: [
        { id: `metodo`, label: `Metodo sperimentale`, x: 50, y: 6, color: `#a855f7`, html: `Osservare, fare ipotesi, sperimentare, verificare.`, why: `Lo formulò Galileo Galilei nel Seicento. Nell'Ottocento diventa il modo di lavorare in tutti i laboratori, dalle università alle industrie.` },
        { id: `pila`, label: `Pila di Volta`, x: 15, y: 28, color: `#eab308`, html: `1800: il primo generatore di corrente continua.`, why: `Volta voleva dimostrare che Galvani sbagliava: la contrazione delle rane non dipendeva da un'elettricità animale, ma dal contatto tra due metalli diversi in un liquido.` },
        { id: `elettromagnetismo`, label: `Elettromagnetismo`, x: 15, y: 55, color: `#f97316`, html: `Ørsted, Faraday, Maxwell: elettricità, magnetismo e luce sono un solo fenomeno.`, why: `Con la pila si potevano finalmente studiare correnti costanti; gli esperimenti di Faraday e la matematica di Maxwell portarono alla scoperta delle onde elettromagnetiche.` },
        { id: `tecnologia`, label: `Telegrafo, lampadina, radio`, x: 15, y: 85, color: `#0ea5e9`, html: `Le applicazioni che cambiano la vita quotidiana.`, why: `Ogni invenzione applica una scoperta: il telegrafo usa gli elettromagneti, la dinamo l'induzione, la radio le onde di Maxwell e Hertz.` },
        { id: `darwin`, label: `Evoluzione (Darwin)`, x: 50, y: 40, color: `#16a34a`, html: `1859: le specie cambiano nel tempo per selezione naturale.`, why: `Darwin unì le osservazioni del viaggio sul Beagle, i fossili, le idee del geologo Lyell sui tempi lunghissimi della Terra e quelle dell'economista Malthus sulla lotta per le risorse.` },
        { id: `mendel`, label: `Genetica (Mendel)`, x: 50, y: 75, color: `#65a30d`, html: `1865: le leggi dell'ereditarietà, studiate sui piselli.`, why: `Mendel usò la matematica (statistica) per contare migliaia di piante: era un metodo nuovo per la biologia, per questo non fu capito subito.` },
        { id: `germi`, label: `Teoria dei germi`, x: 85, y: 28, color: `#ef4444`, html: `Molte malattie sono causate da microrganismi.`, why: `Microscopi migliori e gli esperimenti di Pasteur e Koch dimostrarono che ogni malattia infettiva ha il suo microbo. Semmelweis e Snow ci erano arrivati per altre strade, con i dati.` },
        { id: `medicina`, label: `Vaccini, antisepsi, anestesia`, x: 85, y: 60, color: `#dc2626`, html: `Operazioni sicure e prevenzione delle malattie.`, why: `Se i microbi causano le infezioni, basta ucciderli (disinfezione, pastorizzazione) o allenare il corpo a riconoscerli (vaccini). L'anestesia permise interventi lunghi e precisi.` },
        { id: `atomo`, label: `Atomo e tavola periodica`, x: 85, y: 88, color: `#7c3aed`, html: `Dalton, Mendeleev, Thomson, Curie: com'è fatta la materia.`, why: `Misure precise delle masse degli elementi permisero a Mendeleev di trovare una regolarità; a fine secolo radioattività ed elettrone mostrarono che l'atomo ha una struttura interna.` }
      ],
      edges: [
        [`metodo`, `pila`, `guida`],
        [`metodo`, `darwin`, `guida`],
        [`metodo`, `germi`, `guida`],
        [`pila`, `elettromagnetismo`, `permette di studiare`],
        [`elettromagnetismo`, `tecnologia`, `applicato in`],
        [`darwin`, `mendel`, `spiegata poi da`],
        [`germi`, `medicina`, `porta a`],
        [`elettromagnetismo`, `atomo`, `raggi X e elettrone`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz: Darwin e la medicina`,
      questions: [
        { type: `mc`, q: `Dove Darwin osservò i famosi fringuelli?`, options: [`Alle Galápagos`, `In Australia`, `In Islanda`], answer: 0, explain: `Alle isole Galápagos, nel 1835, durante il viaggio del Beagle.` },
        { type: `mc`, q: `Che cosa fa la pastorizzazione?`, options: [`Aggiunge vitamine`, `Scalda un liquido per uccidere i microbi`, `Congela il cibo`], answer: 1, explain: `Si scalda (ad esempio il latte a circa 72 °C) senza bollire, per eliminare i batteri pericolosi.` },
        { type: `tf`, q: `Darwin sosteneva che l'uomo discende dalle scimmie di oggi.`, answer: false, explain: `Diceva che uomo e scimmie antropomorfe hanno antenati comuni.` }
      ]
    }
  ],
  glossary: [
    { t: `Pila`, d: `Generatore di corrente continua inventato da Volta (1800), con dischi di metalli diversi separati da un liquido.` },
    { t: `Induzione elettromagnetica`, d: `Produzione di corrente elettrica muovendo un magnete vicino a un filo (Faraday, 1831).` },
    { t: `Evoluzione`, d: `Trasformazione delle specie viventi nel corso di moltissime generazioni.` },
    { t: `Selezione naturale`, d: `Meccanismo per cui gli individui più adatti all'ambiente sopravvivono e si riproducono di più.` },
    { t: `Genetica`, d: `Scienza che studia come si trasmettono i caratteri dai genitori ai figli.` },
    { t: `Vaccino`, d: `Preparato che insegna al sistema immunitario a riconoscere un microbo, senza far ammalare.` },
    { t: `Antisepsi`, d: `Uso di disinfettanti per uccidere i microbi su ferite e strumenti.` },
    { t: `Anestesia`, d: `Eliminazione del dolore (e spesso della coscienza) durante un intervento.` },
    { t: `Pastorizzazione`, d: `Riscaldamento controllato di un alimento per eliminare i microrganismi dannosi.` },
    { t: `Radioattività`, d: `Emissione spontanea di radiazioni da parte di alcuni atomi instabili (Becquerel, Curie).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Da chi prende nome l'unità di misura "volt"?`, options: [`Da Galvani`, `Da Volta`, `Da Faraday`], answer: 1, explain: `Da Alessandro Volta, inventore della pila.` },
      { type: `tf`, q: `Faraday scoprì che muovendo un magnete in una bobina si produce corrente.`, answer: true, explain: `È l'induzione elettromagnetica (1831), il principio della dinamo.` },
      { type: `num`, q: `In che anno Darwin pubblicò "L'origine delle specie"?`, answer: 1859, explain: `Nel 1859, a Londra.` },
      { type: `order`, q: `Metti in ordine i quattro passi della selezione naturale.`, items: [`Gli individui sono diversi tra loro`, `Molte caratteristiche si ereditano`, `Nascono più individui di quanti possano sopravvivere`, `I più adatti sopravvivono e si riproducono di più`], explain: `Variabilità, ereditarietà, lotta per la sopravvivenza, selezione.` },
      { type: `text`, q: `Quale monaco scoprì le leggi dell'ereditarietà studiando i piselli?`, answer: [`mendel`, `gregor mendel`], explain: `Gregor Mendel, a Brno, nel 1865.` },
      { type: `mc`, q: `Che cosa dimostrò Semmelweis?`, options: [`Che lavarsi le mani riduce le infezioni`, `Che l'etere addormenta`, `Che la luce è un'onda`], answer: 0, explain: `Nel 1847 a Vienna: con il lavaggio delle mani le morti di febbre puerperale crollarono.` },
      { type: `mc`, q: `Quale batterio scoprì Robert Koch nel 1882?`, options: [`Quello del colera`, `Quello della tubercolosi`, `Quello della rabbia`], answer: 1, explain: `Il bacillo della tubercolosi (la rabbia è causata da un virus).` },
      { type: `mc`, q: `Perché la tavola di Mendeleev fu considerata geniale?`, options: [`Perché era colorata`, `Perché lasciava caselle vuote prevedendo elementi poi scoperti`, `Perché conteneva tutti gli elementi di oggi`], answer: 1, explain: `Previde gallio, scandio e germanio, scoperti tra il 1875 e il 1886.` },
      { type: `text`, q: `Come si chiamano i raggi scoperti da Röntgen nel 1895? (raggi …)`, answer: [`x`, `raggi x`], explain: `Raggi X: X come incognita, perché non si sapeva che cosa fossero.` },
      { type: `tf`, q: `Marie Curie vinse due Premi Nobel in due materie diverse.`, answer: true, explain: `Fisica (1903) e chimica (1911).` },
      { type: `mc`, q: `Quale di queste NON è una scoperta dell'Ottocento?`, options: [`La tavola periodica`, `Il metodo sperimentale di Galileo`, `L'anestesia con l'etere`], answer: 1, explain: `Galileo visse tra Cinquecento e Seicento; il suo metodo fu però alla base delle scoperte dell'Ottocento.` },
      { type: `mc`, q: `Che cosa collegò John Snow nel 1854?`, options: [`Il colera a una fontana d'acqua inquinata`, `La febbre all'aria cattiva`, `La tubercolosi al freddo`], answer: 0, explain: `Con una mappa dei morti dimostrò che il colera si diffondeva con l'acqua.` }
    ]
  }
});

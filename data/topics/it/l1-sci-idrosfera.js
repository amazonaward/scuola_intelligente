TOPIC('it', {
  id: "l1-sci-idrosfera",
  title: "L'idrosfera",
  intro: "Visto dallo spazio il nostro pianeta è azzurro: circa il <b>71%</b> della superficie è coperto d'acqua. L'<b>idrosfera</b> è l'insieme di tutta l'acqua della Terra, allo stato liquido, solido e di vapore: oceani, mari, laghi, fiumi, falde sotterranee, ghiacciai e vapore nell'aria. È l'ambiente in cui la vita è nata, e regola il clima. In questa lezione seguiamo le gocce lungo il <b>ciclo dell'acqua</b> e studiamo oceani, correnti, fiumi, laghi e ghiacciai.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Quanta acqua c'è, e dov'è",
      html: `<p>Il volume totale d'acqua sulla Terra è circa <b>1,4 miliardi di km³</b>. Ma quasi tutta è inutilizzabile per bere:</p>
<table>
<tr><th>Dove</th><th>Percentuale dell'acqua totale</th></tr>
<tr><td>Oceani e mari (salata)</td><td>circa <b>97,5%</b></td></tr>
<tr><td>Acqua dolce</td><td>circa <b>2,5%</b></td></tr>
</table>
<p>E dell'acqua dolce:</p>
<ul>
<li>circa il <b>69%</b> è bloccata nei <b>ghiacciai e nelle calotte polari</b>;</li>
<li>circa il <b>30%</b> è <b>acqua sotterranea</b> (falde);</li>
<li>meno dell'<b>1%</b> è in laghi, fiumi, suolo e atmosfera: cioè lo 0,01% circa dell'acqua totale è facilmente accessibile.</li>
</ul>
<p>Se tutta l'acqua della Terra fosse raccolta in una sfera, avrebbe un diametro di circa 1400 km: la dimensione di una luna come Europa.</p>
<p>Le <b>acque salate</b> contengono sali (soprattutto cloruro di sodio, circa l'85%) in media <b>35 g per kg</b>, cioè il 35‰ di <b>salinità</b>. La salinità cambia: più bassa dove arrivano molti fiumi o piove molto (Mar Baltico: 5-10‰), più alta dove l'evaporazione è forte (Mar Rosso: 40‰; Mar Morto: circa 300‰, un lago salato).</p>`
    },
    {
      type: "widget",
      title: "Acqua dolce o salata?",
      widget: "classify",
      options: { groups: ["Acqua salata", "Acqua dolce"], items: [
        ["Oceano Pacifico", 0],
        ["Mar Mediterraneo", 0],
        ["Lago di Garda", 1],
        ["Fiume Po", 1],
        ["Ghiacciaio dell'Aletsch", 1],
        ["Mar Rosso", 0],
        ["Falda acquifera", 1],
        ["Mar Morto", 0],
        ["Banchisa antartica", 1],
        ["Lago di Bolsena", 1]
      ] },
      caption: "Il Mar Morto e il Mar Caspio sono nomi \"di mare\" ma in realtà sono laghi (il Caspio è salmastro). Nota come il ghiaccio, sulla terraferma, è acqua dolce."
    },
    {
      type: "text",
      title: "Il ciclo dell'acqua",
      html: `<p>L'acqua non è mai ferma: il <b>ciclo idrologico</b> la fa circolare tra oceani, atmosfera e terre emerse, spinto dall'energia del Sole e dalla gravità. Le tappe:</p>
<ol>
<li><b>Evaporazione</b>: il Sole scalda l'acqua di mari, laghi e suolo; circa l'86% dell'evaporazione viene dagli oceani.</li>
<li><b>Traspirazione</b> delle piante (che insieme all'evaporazione forma l'<b>evapotraspirazione</b>).</li>
<li><b>Condensazione</b>: salendo, il vapore si raffredda e condensa in goccioline: nuvole.</li>
<li><b>Precipitazioni</b>: pioggia, neve, grandine.</li>
<li><b>Ruscellamento</b> (acqua che scorre in superficie verso fiumi e mari), <b>infiltrazione</b> (acqua che penetra nel suolo e alimenta le falde) e <b>scioglimento</b> di neve e ghiaccio.</li>
</ol>
<p>Un'idea importante: l'acqua che c'è sul pianeta è pressoché sempre la stessa. L'acqua che bevi oggi può essere stata in un oceano, in una nuvola, in un ghiacciaio, nel corpo di un dinosauro. Le molecole sono "riciclate" da miliardi di anni. Il <b>tempo di residenza</b> varia moltissimo: nell'atmosfera solo circa 9 giorni, nei fiumi alcune settimane, negli oceani circa 3000 anni, nei ghiacciai antartici decine di migliaia di anni.</p>`
    },
    {
      type: "svg",
      title: "Il ciclo dell'acqua",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#e0f2fe"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<path d="M0 230 L120 190 L200 215 L300 140 L400 205 L640 205 L640 320 L0 320 Z" fill="#a3a38a"/>
<path d="M300 140 L275 168 L300 160 L325 170 Z" fill="#fff"/>
<rect x="0" y="260" width="640" height="60" fill="#38bdf8"/>
<ellipse cx="190" cy="70" rx="60" ry="26" fill="#f1f5f9" stroke="#94a3b8"/><ellipse cx="230" cy="64" rx="45" ry="22" fill="#f1f5f9" stroke="#94a3b8"/>
<g stroke="#1d4ed8" stroke-width="3"><line x1="180" y1="100" x2="170" y2="130"/><line x1="200" y1="100" x2="190" y2="130"/><line x1="220" y1="100" x2="210" y2="130"/></g>
<g stroke="#dc2626" stroke-width="3" fill="none"><path d="M480 255 C480 200 480 150 440 100"/><path d="M520 255 C530 210 530 160 500 110"/></g>
<text x="500" y="285" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">evaporazione</text>
<text x="135" y="160" font-size="14" fill="#1e3a8a" text-anchor="middle" font-weight="bold">precipitazioni</text>
<text x="230" y="30" font-size="14" fill="#334155" text-anchor="middle" font-weight="bold">condensazione (nuvole)</text>
<text x="350" y="125" font-size="14" fill="#334155" font-weight="bold">neve e ghiacciai</text>
<path d="M240 218 C210 232 170 250 150 262" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<text x="190" y="248" font-size="14" fill="#1e3a8a" font-weight="bold">fiume</text>
<g stroke="#334155" stroke-width="2" stroke-dasharray="4 4"><line x1="90" y1="215" x2="90" y2="250"/><line x1="70" y1="215" x2="70" y2="250"/></g>
<text x="75" y="305" font-size="14" fill="#fff" font-weight="bold">infiltrazione e falda</text>
<text x="440" y="305" font-size="16" fill="#fff" font-weight="bold">OCEANO</text>
</svg>`,
      caption: "Il ciclo è alimentato dal Sole (che fa evaporare) e dalla gravità (che fa ricadere e scorrere l'acqua)."
    },
    {
      type: "example",
      title: "Quanta acqua cade? Il bilancio idrico",
      html: `<p>Una pioggia di <b>1 mm</b> equivale a <b>1 litro di acqua per ogni m²</b>. Se in una giornata temporalesca cadono 50 mm su un bacino di <b>20 km²</b>, quanta acqua arriva?</p>
<ol>
<li>20 km² = 20 000 000 m².</li>
<li>50 mm = 50 L/m² → 50 × 20 000 000 = <b>1 000 000 000 L</b> = 10⁹ L = <b>1 milione di m³</b>.</li>
</ol>
<p>Una piscina olimpica contiene 2500 m³: sono circa <b>400 piscine olimpiche</b>. Un bilancio idrico confronta precipitazioni (P), evapotraspirazione (E) e deflusso (D): in un bacino stabile, P ≈ E + D. Se i prelievi superano la ricarica, le falde si abbassano.</p>`
    },
    {
      type: "example",
      title: "Quanto sale c'è in una vasca di mare?",
      html: `<p>L'acqua marina ha densità media circa <b>1,025 kg/L</b> e salinità <b>35‰</b>. Quanto sale si ottiene facendo evaporare <b>200 L</b> di acqua di mare?</p>
<ol>
<li>Massa dell'acqua: 200 L × 1,025 kg/L = 205 kg.</li>
<li>Massa dei sali: 205 × 0,035 = <b>circa 7,2 kg</b>.</li>
</ol>
<p>Non tutti i sali sono cloruro di sodio: nella pratica delle saline si ricava prima il gesso e poi il sale da cucina (NaCl), lasciando le "acque madri" ricche di magnesio e potassio.</p>`
    },
    {
      type: "text",
      title: "Oceani e mari",
      html: `<p>I tre grandi oceani sono il <b>Pacifico</b> (circa 165 milioni di km², quasi metà della superficie oceanica e più di tutte le terre emerse insieme), l'<b>Atlantico</b> (circa 106 milioni di km²) e l'<b>Indiano</b> (circa 70 milioni di km²); gli oceani <b>Artico</b> e <b>Australe</b> (Antartico) sono più piccoli. Sono in realtà un unico oceano mondiale. La profondità media è circa <b>3700 m</b>; la massima è la <b>Fossa delle Marianne</b> (Challenger Deep), circa <b>10 900 m</b>: l'Everest (8849 m) ci starebbe dentro con oltre 2 km d'acqua sopra la cima.</p>
<p>I <b>fondali</b> hanno una morfologia varia: <b>piattaforma continentale</b> (fino a circa 200 m, ricca di vita e pesca), <b>scarpata</b>, <b>piana abissale</b>, le <b>dorsali oceaniche</b> (catene montuose sottomarine dove nasce nuova crosta) e le <b>fosse</b> (dove la crosta si immerge nel mantello): argomenti legati alla tettonica delle placche.</p>
<p>Un <b>mare</b> è una porzione di oceano più piccola e delimitata dalla terraferma (mare chiuso come il Mediterraneo, comunicante con l'oceano solo attraverso lo Stretto di Gibilterra; mare aperto come il Mare dei Caraibi).</p>
<p>La temperatura diminuisce con la profondità: lo strato superficiale (circa 100-200 m), rimescolato da onde e vento, è caldo; sotto il <b>termoclino</b> la temperatura scende rapidamente; a oltre 1000 m è quasi costante, attorno a 2-4 °C.</p>`
    },
    {
      type: "text",
      title: "I movimenti del mare: onde, maree e correnti",
      html: `<ul>
<li><b>Onde</b>: causate dal vento. L'acqua non avanza: le particelle descrivono cerchi e l'<b>energia</b> si propaga. Le onde crescono con velocità del vento, durata e <b>fetch</b> (lunghezza di mare su cui il vento soffia). Gli <b>tsunami</b> sono onde lunghissime (anche 100-200 km tra due creste) provocate da terremoti sottomarini o frane: in mare aperto viaggiano a circa 800 km/h con altezza di meno di un metro, poi rallentano e si alzano avvicinandosi alla costa.</li>
<li><b>Maree</b>: due alte e due basse ogni circa 24 h 50 min, per l'attrazione gravitazionale di Luna e Sole.</li>
<li><b>Correnti</b>: grandi fiumi dentro il mare.
<ul>
<li><b>Correnti superficiali</b>: causate dai <b>venti dominanti</b> e deviate dalla <b>forza di Coriolis</b>; formano grandi vortici (<b>gyre</b>) che girano in senso orario nell'emisfero nord e antiorario nel sud. Esempio: la <b>Corrente del Golfo</b>, che porta acqua calda dal Golfo del Messico verso l'Europa del nord e rende il clima delle isole britanniche più mite di quello del Labrador alla stessa latitudine.</li>
<li><b>Correnti profonde</b> (<b>circolazione termoalina</b>): dovute alle differenze di <b>temperatura</b> e <b>salinità</b>, cioè di densità. L'acqua fredda e salata vicino ai poli affonda e scorre lungo il fondo verso l'equatore: un "nastro trasportatore" globale che impiega circa 1000 anni per completare il giro.</li>
</ul></li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Le papere di plastica che raccontano le correnti",
      html: `<p>Nel 1992 un cargo perse nel Pacifico un container con 28 800 giocattoli per il bagnetto in plastica (papere, tartarughe, castori, rane). Gli oceanografi, seguendo dove i giocattoli arrivavano sulle spiagge dell'Alaska, del Giappone e, anni dopo, di altre coste del Nord Atlantico, hanno ricostruito le correnti di superficie e i vortici dei gyre. Ancora oggi le grandi chiazze di rifiuti di plastica, come la "Great Pacific Garbage Patch", si formano proprio dove le correnti dei gyre convergono e fanno ristagnare l'acqua.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: acqua e oceani",
      questions: [
        { type: "mc", q: "Quale percentuale dell'acqua terrestre è dolce?", options: ["circa il 2,5%", "circa il 25%", "circa il 50%"], answer: 0, explain: "Il 97,5% è salata, e della piccola parte dolce quasi tutto è nei ghiacci." },
        { type: "tf", q: "La Corrente del Golfo contribuisce a rendere più mite il clima dell'Europa nord-occidentale.", answer: true, explain: "Trasporta acqua calda dai tropici verso nord." },
        { type: "num", q: "Una pioggia di 25 mm quanti litri di acqua porta su un campo di 100 m²?", answer: 2500, unit: "L", explain: "1 mm = 1 L/m²: 25 × 100 = 2500 L." }
      ]
    },
    {
      type: "text",
      title: "Fiumi e bacini idrografici",
      html: `<p>Un <b>fiume</b> è un corso d'acqua che scorre in un alveo dalla <b>sorgente</b> alla <b>foce</b>. Il territorio che raccoglie tutte le acque che alimentano un fiume è il suo <b>bacino idrografico</b>, separato dai bacini vicini dallo <b>spartiacque</b>. Il fiume principale riceve gli <b>affluenti</b>; sul mare finisce a <b>delta</b> (con rami e terreno depositato: il Po, il Nilo, il Mississippi) o a <b>estuario</b> (imbuto aperto sul mare, dove le maree sono forti: Tamigi, Senna).</p>
<p>Il percorso del fiume si divide in tre tratti:</p>
<ul>
<li><b>corso superiore</b> (montano): forte pendenza, acqua veloce che <b>erode</b> e scava valli a V;</li>
<li><b>corso medio</b>: pendenza minore, trasporto di detriti;</li>
<li><b>corso inferiore</b> (pianura): lenti, forma <b>meandri</b> e <b>deposita</b> i sedimenti (alluvioni), fino alla foce.</li>
</ul>
<p>La <b>portata</b> è il volume di acqua che passa in una sezione in un secondo (m³/s). Il <b>regime</b> è l'andamento della portata nell'anno: <b>pluviale</b> (dipende dalle piogge: Appennino), <b>nivale</b> o <b>glaciale</b> (massimo in primavera-estate per lo scioglimento di neve e ghiaccio: Alpi), <b>misto</b>.</p>
<p>Alcuni numeri: il <b>Po</b> è il fiume più lungo d'Italia (652 km) e quello con più acqua (portata media alla foce intorno a 1500 m³/s); il <b>Nilo</b> (circa 6650 km) e il <b>Rio delle Amazzoni</b> (circa 6400 km) si contendono il primato di lunghezza; il Rio delle Amazzoni è il primo per portata (circa 200 000 m³/s, circa un quinto di tutta l'acqua dolce versata dai fiumi negli oceani).</p>`
    },
    {
      type: "3d",
      title: "Il paesaggio dell'acqua",
      scene: "terrain",
      options: { features: {
        glacier: { label: "Ghiacciaio", html: "<p>Una massa di ghiaccio che scende lentamente a valle sotto il proprio peso. Quando si scioglie alimenta i fiumi e produce laghi glaciali.</p>" },
        source: { label: "Sorgente", html: "<p>Il punto dove l'acqua sotterranea o di fusione esce in superficie e comincia il fiume.</p>" },
        river: { label: "Fiume", html: "<p>Un corso d'acqua che scorre verso il mare o in un lago. Erode in montagna, deposita in pianura.</p>" },
        valley: { label: "Valle", html: "<p>Scavata dal fiume (a V) o da un ghiacciaio (a U).</p>" },
        lake: { label: "Lago", html: "<p>Un bacino di acqua dolce o salata circondato dalla terra. Può essere glaciale, vulcanico, tettonico, di sbarramento.</p>" },
        delta: { label: "Delta", html: "<p>Zona alla foce dove il fiume deposita i sedimenti e si divide in più rami.</p>" },
        sea: { label: "Mare", html: "<p>Dove tutto il ciclo finisce... e ricomincia con l'evaporazione.</p>" },
        plain: { label: "Pianura", html: "<p>Formata dai sedimenti del fiume (pianura alluvionale): la Pianura Padana è la più grande d'Italia.</p>" }
      } },
      caption: "Tocca le parti del paesaggio: dalla sorgente al delta, segui il percorso dell'acqua."
    },
    {
      type: "text",
      title: "Laghi, acque sotterranee e ghiacciai",
      html: `<p><b>Laghi</b>: masse d'acqua raccolte in una depressione. Per origine:</p>
<ul>
<li><b>glaciali</b>: scavati o sbarrati dai ghiacciai (i grandi laghi prealpini: Maggiore, Como, Garda; i Grandi Laghi americani);</li>
<li><b>tettonici</b>: in avvallamenti dovuti a movimenti della crosta (Baikal, il più profondo, 1642 m, e con circa il 20% dell'acqua dolce superficiale);</li>
<li><b>vulcanici</b>: nei crateri (Bolsena, Albano, Bracciano: crateri e caldere di antichi vulcani);</li>
<li><b>di sbarramento</b> (frane, dighe), <b>costieri</b> (lagune), <b>carsici</b>.</li>
</ul>
<p>Il lago più esteso d'Italia è il <b>Garda</b> (368 km²); il più profondo è il Como (circa 410 m).</p>
<p><b>Acque sotterranee</b>: l'acqua che si infiltra riempie i pori di rocce <b>permeabili</b> (sabbie, ghiaie, calcari fessurati) fino a incontrare uno strato <b>impermeabile</b> (argilla): forma una <b>falda</b>. Se la falda affiora si ha una <b>sorgente</b> (nella pianura padana si chiamano <b>risorgive</b> o fontanili). I <b>pozzi</b> la raggiungono. Nelle regioni calcaree l'acqua scioglie la roccia e crea il <b>carsismo</b>: grotte, doline, fiumi sotterranei.</p>
<p><b>Ghiacciai</b>: grandi masse di ghiaccio formate dalla neve che si compatta in anni o secoli. Le <b>calotte glaciali</b> (Antartide e Groenlandia) contengono circa il 99% del ghiaccio terrestre: se si sciogliesse tutta l'Antartide il livello del mare salirebbe di circa 58 m; con la Groenlandia di circa 7 m. I <b>ghiacciai alpini</b> (di valle) scorrono a pochi metri all'anno e sono considerati sentinelle del clima: in 150 anni quelli alpini hanno perso più della metà del loro volume.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'idrosfera",
      intro: "Se i numeri dell'acqua ti sembrano troppo astratti, prova queste rappresentazioni.",
      tabs: [
        {
          label: "🥤 Una bottiglia d'acqua",
          html: `<p>Immagina tutta l'acqua della Terra in una grande tanica da <b>100 litri</b>. Gli oceani occupano 97,5 L. Solo 2,5 L sono dolci. Di questi, quasi 1,7 L sono nei ghiacci e circa 0,75 L sono sotto terra. Rimangono circa <b>0,03 L: un cucchiaio da tavola</b> per tutti i fiumi, i laghi, il suolo e l'umidità dell'aria. Tutta la vita d'acqua dolce superficiale dipende da quel cucchiaio, che il ciclo dell'acqua continuamente rinnova.</p>`
        },
        {
          label: "🧂 Perché il mare è salato?",
          html: `<p>I fiumi sciolgono lentamente le rocce e portano in mare piccole quantità di sali minerali; i vulcani sottomarini e le sorgenti idrotermali ne aggiungono altri. L'acqua evapora lasciando i sali: questi si accumulano per milioni di anni. Per questo il mare è salato e i fiumi no. La salinità dell'oceano è però rimasta circa costante per centinaia di milioni di anni, perché i sali vengono anche rimossi: depositati sul fondo come rocce (evaporiti) o incorporati dagli organismi.</p>`
        },
        {
          label: "🧊 Perché il ghiaccio galleggia?",
          html: `<p>L'acqua è quasi unica: da liquida, quando si raffredda, si contrae fino a <b>4 °C</b> (densità massima, 1,000 g/cm³), poi sotto i 4 °C si espande e, congelando, diventa circa il 9% meno densa (ghiaccio 0,92 g/cm³). Colpa dei <b>legami a idrogeno</b>: nel ghiaccio le molecole formano una struttura esagonale con molto spazio vuoto. Per questo il ghiaccio galleggia, i laghi gelano dalla superficie e sotto la crosta di ghiaccio resta acqua liquida a circa 4 °C dove pesci e piante sopravvivono all'inverno. Se il ghiaccio affondasse, i laghi gelerebbero dal fondo e la vita sarebbe molto diversa.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Il Lago d'Aral: l'acqua che sparì",
      html: `<p>Il lago d'Aral, in Asia centrale, era nel 1960 il quarto lago più grande del mondo (circa 68 000 km²). Negli anni Sessanta l'URSS deviò i fiumi Amu Darya e Syr Darya per irrigare i campi di cotone: il lago ha perso oltre il 90% della sua superficie e la parte meridionale è oggi un deserto salato (Aralkum). Navi arrugginite giacciono nella sabbia. È uno degli esempi più noti di quanto l'attività umana possa alterare il bilancio idrico di un'intera regione, con ricadute su clima, salute e pesca.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa dell'idrosfera: tocca i nodi e scopri il perché",
      nodes: [
        { id: "ciclo", label: "Ciclo dell'acqua", x: 50, y: 6, color: "#3b82f6", html: "Evaporazione, condensazione, precipitazione, deflusso.", why: "Il ciclo fu intuito già dai Greci, ma per secoli si pensò che le sorgenti fossero alimentate dal mare attraverso canali sotterranei. Nel Seicento <b>Pierre Perrault</b> ed <b>Edme Mariotte</b> misurarono pioggia e portata della Senna e dimostrarono che le precipitazioni bastavano ad alimentare i fiumi." },
        { id: "oceani", label: "Oceani", x: 20, y: 30, color: "#0ea5e9", html: "97,5% dell'acqua, salinità media 35‰.", why: "Hanno circa 3700 m di profondità media: la spedizione della nave britannica <b>Challenger</b> (1872-76) fu la prima campagna oceanografica sistematica e scoprì la Fossa delle Marianne." },
        { id: "correnti", label: "Correnti", x: 20, y: 56, color: "#22c55e", html: "Superficiali (vento) e profonde (termoaline).", why: "Le correnti superficiali dipendono dai venti e dall'effetto di Coriolis, descritto da <b>Coriolis</b> nel 1835; la circolazione termoalina fu intuita da <b>Benjamin Thompson (conte Rumford)</b> nel 1797 e descritta da <b>Wallace Broecker</b>, che negli anni Ottanta del Novecento coniò l'espressione \"nastro trasportatore\"." },
        { id: "fiumi", label: "Fiumi e bacini", x: 80, y: 30, color: "#f59e0b", html: "Portano l'acqua dai monti al mare.", why: "Il concetto di bacino idrografico spiega perché le alluvioni dipendono da ciò che accade a monte: l'acqua di una vasta area si concentra in una sola sezione del fiume." },
        { id: "laghi", label: "Laghi", x: 80, y: 56, color: "#a855f7", html: "Bacini di acqua soprattutto dolce.", why: "La loro origine geologica (glaciale, tettonica, vulcanica) li lega alla storia della Terra: i laghi prealpini sono eredità delle glaciazioni quaternarie." },
        { id: "ghiacci", label: "Ghiacciai", x: 50, y: 70, color: "#06b6d4", html: "Il 69% dell'acqua dolce.", why: "Luis Agassiz (1837) per primo propose che grandi ere glaciali avessero coperto l'Europa, spiegando i massi erratici lontani dalle loro rocce d'origine. Oggi i ghiacciai sono un archivio: le bolle d'aria nei carotaggi dell'Antartide raccontano il clima degli ultimi 800 000 anni." },
        { id: "falde", label: "Falde", x: 20, y: 86, color: "#ef4444", html: "Acqua sotterranea (30% dell'acqua dolce).", why: "La legge di <b>Darcy</b> (1856), ricavata studiando le fontane di Digione, descrive come l'acqua si muove in un mezzo poroso: velocità proporzionale alla pendenza e alla permeabilità." },
        { id: "uomo", label: "Uso umano", x: 80, y: 86, color: "#14b8a6", html: "Agricoltura (circa il 70% dei prelievi), industria, usi domestici.", why: "Solo una piccola parte dell'acqua è accessibile: la gestione sostenibile della risorsa è una delle grandi sfide del secolo; esempio negativo è il lago d'Aral." }
      ],
      edges: [
        ["ciclo", "oceani", "dall'oceano"],
        ["ciclo", "fiumi", "alimenta"],
        ["oceani", "correnti", "ospitano"],
        ["fiumi", "laghi", "alimentano"],
        ["ghiacci", "fiumi", "alimentano"],
        ["ciclo", "falde", "ricarica"],
        ["falde", "uomo", "usate da"],
        ["fiumi", "uomo", "usati da"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: fiumi, laghi, ghiacciai",
      questions: [
        { type: "mc", q: "Qual è il fiume più lungo d'Italia?", options: ["Tevere", "Po", "Adige"], answer: 1, explain: "Il Po misura 652 km e ha anche la maggior portata." },
        { type: "tf", q: "Il ghiaccio galleggia perché è meno denso dell'acqua liquida.", answer: true, explain: "Ghiaccio 0,92 g/cm³ contro 1,00 g/cm³ dell'acqua." },
        { type: "mc", q: "Come si chiama il territorio che raccoglie le acque di un fiume?", options: ["Bacino idrografico", "Delta", "Falda"], answer: 0, explain: "È separato dai bacini vicini dallo spartiacque." }
      ]
    }
  ],
  glossary: [
    { t: "Idrosfera", d: "Insieme di tutta l'acqua della Terra nei suoi vari stati." },
    { t: "Ciclo idrologico", d: "Circolazione continua dell'acqua tra oceani, atmosfera e terre emerse." },
    { t: "Salinità", d: "Quantità di sali disciolti per kg di acqua (in media 35‰ negli oceani)." },
    { t: "Corrente marina", d: "Movimento di grandi masse d'acqua oceaniche." },
    { t: "Circolazione termoalina", d: "Circolazione profonda dovuta alle differenze di temperatura e salinità." },
    { t: "Bacino idrografico", d: "Territorio da cui un fiume raccoglie le acque." },
    { t: "Portata", d: "Volume d'acqua che attraversa una sezione di un fiume in un secondo." },
    { t: "Regime", d: "Andamento della portata di un fiume nell'anno." },
    { t: "Delta", d: "Foce di un fiume a più rami con depositi di sedimenti." },
    { t: "Falda acquifera", d: "Acqua che riempie i pori di uno strato permeabile del sottosuolo." },
    { t: "Ghiacciaio", d: "Massa di ghiaccio perenne che si muove lentamente per gravità." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale frazione dell'acqua dolce è nei ghiacciai?", options: ["Circa il 69%", "Circa il 10%", "Circa lo 0,3%"], answer: 0, explain: "Quasi 70% dell'acqua dolce è ghiaccio, soprattutto in Antartide e Groenlandia." },
      { type: "tf", q: "La maggior parte dell'evaporazione terrestre avviene dagli oceani.", answer: true, explain: "Circa l'86% dell'evaporazione totale." },
      { type: "mc", q: "Come si chiama l'acqua che penetra nel suolo?", options: ["Ruscellamento", "Infiltrazione", "Condensazione"], answer: 1, explain: "L'infiltrazione alimenta le falde." },
      { type: "num", q: "Quanti litri porta una pioggia di 10 mm su un tetto di 60 m²?", answer: 600, unit: "L", explain: "10 L/m² × 60 m² = 600 L." },
      { type: "mc", q: "Qual è la salinità media degli oceani?", options: ["3,5‰", "35‰", "350‰"], answer: 1, explain: "35 g di sali per kg, cioè 35‰ (3,5%)." },
      { type: "mc", q: "Le correnti superficiali dei gyre nell'emisfero nord ruotano in senso…", options: ["orario", "antiorario", "casuale"], answer: 0, explain: "Per la forza di Coriolis, che devia verso destra." },
      { type: "tf", q: "Il Garda è il lago più esteso d'Italia.", answer: true, explain: "Circa 368 km²." },
      { type: "order", q: "Ordina le tappe del ciclo dell'acqua.", items: ["Evaporazione", "Condensazione", "Precipitazione", "Ruscellamento o infiltrazione"], explain: "L'acqua sale, forma le nuvole, ricade e poi scorre o si infiltra." },
      { type: "text", q: "Come si chiama la foce a più rami tipica del Po e del Nilo?", answer: ["delta", "il delta"], explain: "Il delta si forma dove il fiume deposita i sedimenti." },
      { type: "mc", q: "Perché le onde di uno tsunami in mare aperto sono quasi inavvertibili?", options: ["Hanno altezza di meno di un metro ma lunghezza enorme", "Sono molto lente", "Sono onde sonore"], answer: 0, explain: "Si alzano solo avvicinandosi alla costa, dove il fondale rallenta la parte anteriore." }
    ]
  }
});

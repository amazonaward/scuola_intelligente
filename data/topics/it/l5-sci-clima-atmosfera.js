TOPIC('it', {
  id: "l5-sci-clima-atmosfera",
  title: "Atmosfera, clima e cambiamenti climatici",
  intro: "Se la Terra non avesse l'atmosfera, la temperatura media della superficie sarebbe di circa −18 °C e gli oceani sarebbero ghiacciati. Invece è di circa +15 °C: merito di un sottile strato di gas che trattiene parte del calore, il cosiddetto <b>effetto serra</b>. Il problema nasce quando questo effetto aumenta perché immettiamo nell'aria sempre più gas serra: la temperatura media mondiale è salita di circa 1,1 °C rispetto all'Ottocento e le conseguenze (ghiacciai in ritiro, mari che salgono, ondate di caldo, eventi estremi) sono già visibili. In questa lezione vediamo com'è fatta l'<b>atmosfera</b>, che differenza c'è tra <b>tempo e clima</b>, come funziona l'<b>effetto serra</b> (anche con un calcolo), che prove abbiamo del <b>riscaldamento globale</b> e della sua origine umana, come lavorano i <b>modelli climatici</b> e che cosa possiamo fare per un futuro <b>sostenibile</b>.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "Com'è fatta l'atmosfera",
      html: `<p>L'<b>atmosfera</b> è l'involucro di gas che circonda la Terra, tenuto vicino dalla gravità. Ha uno spessore enorme se confrontato con quello della crosta (oltre 100 km), ma la quasi totalità della massa (circa il 99%) è nei primi 30 km: in proporzione, è sottile come la buccia di una mela. La sua composizione attuale (aria secca, in volume) è:</p>
<table>
<tr><th>Gas</th><th>Percentuale</th><th>Note</th></tr>
<tr><td>Azoto (N₂)</td><td>78,08%</td><td>poco reattivo; fissato da batteri e fulmini</td></tr>
<tr><td>Ossigeno (O₂)</td><td>20,95%</td><td>prodotto dalla fotosintesi</td></tr>
<tr><td>Argon (Ar)</td><td>0,93%</td><td>gas nobile, inerte</td></tr>
<tr><td>Anidride carbonica (CO₂)</td><td>circa 0,042% (circa 420 ppm)</td><td>gas serra principale; in aumento</td></tr>
<tr><td>Altri (Ne, He, CH₄, N₂O, O₃...)</td><td>tracce</td><td>alcuni sono potenti gas serra</td></tr>
</table>
<p>A questi si aggiunge il <b>vapore acqueo</b> (da 0 a circa 4% in volume, molto variabile), fondamentale per il tempo e per l'effetto serra. L'atmosfera primitiva era molto diversa (vulcanica, senza ossigeno libero): l'ossigeno è comparso circa 2,4 miliardi di anni fa grazie ai cianobatteri fotosintetici.</p>
<p><b>Gli strati.</b> Si distinguono in base all'andamento della temperatura con la quota:</p>
<ul>
<li><b>Troposfera</b> (0 - circa 12 km; 8 km ai poli e 18 km all'equatore): contiene circa l'80% dell'aria e quasi tutto il vapore acqueo, ci sono le nuvole e i fenomeni meteorologici. La temperatura <b>diminuisce</b> con la quota (circa 6,5 °C ogni km) fino a circa −55 °C alla sommità (<b>tropopausa</b>).</li>
<li><b>Stratosfera</b> (fino a circa 50 km): la temperatura <b>aumenta</b> con la quota perché lo strato di <b>ozono</b> (O₃) assorbe i raggi ultravioletti del Sole. Qui volano gli aerei di linea più alti e non ci sono moti verticali importanti.</li>
<li><b>Mesosfera</b> (fino a circa 85 km): la temperatura torna a scendere (fino a circa −90 °C); qui bruciano le meteore (stelle cadenti).</li>
<li><b>Termosfera</b> (fino a circa 600 km): temperature elevatissime (oltre 1000 °C) ma aria rarefattissima; ci sono le aurore e orbita la Stazione Spaziale Internazionale (circa 400 km). Include la <b>ionosfera</b>, che riflette le onde radio.</li>
<li><b>Esosfera</b>: l'ultimo strato, sfuma gradualmente nello spazio.</li>
</ul>
<p>La <b>pressione</b> diminuisce con la quota (a livello del mare circa 1013 hPa, cioè 1 atm, e a 5500 m circa la metà): per questo in alta montagna manca il fiato. Il <b>buco dell'ozono</b>: negli anni Settanta-Ottanta si scoprì che i <b>clorofluorocarburi (CFC)</b> dei frigoriferi e delle bombolette spray distruggevano l'ozono stratosferico, soprattutto sull'Antartide. Con il <b>Protocollo di Montréal</b> (1987) quasi tutti i Paesi hanno eliminato i CFC e lo strato di ozono sta lentamente recuperando: l'esempio migliore di cooperazione internazionale riuscita sull'ambiente.</p>`
    },
    {
      type: "svg",
      title: "Gli strati dell'atmosfera",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<rect x="40" y="235" width="300" height="50" fill="#16a34a"/>
<rect x="40" y="170" width="300" height="65" fill="#38bdf8"/>
<rect x="40" y="115" width="300" height="55" fill="#2563eb"/>
<rect x="40" y="65" width="300" height="50" fill="#4f46e5"/>
<rect x="40" y="20" width="300" height="45" fill="#7c3aed"/>
<text x="190" y="263" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">Terra</text>
<text x="190" y="208" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Troposfera (0-12 km)</text>
<text x="190" y="148" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">Stratosfera (-50 km)</text>
<text x="190" y="95" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">Mesosfera (-85 km)</text>
<text x="190" y="47" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">Termosfera (-600 km)</text>
<line x1="345" y1="205" x2="372" y2="205" stroke="#f8fafc" stroke-width="2"/>
<text x="378" y="200" font-size="14" fill="#f8fafc">nuvole, meteo,</text>
<text x="378" y="218" font-size="14" fill="#f8fafc">vapore acqueo</text>
<line x1="345" y1="143" x2="372" y2="143" stroke="#f8fafc" stroke-width="2"/>
<text x="378" y="138" font-size="14" fill="#fde047">strato di ozono:</text>
<text x="378" y="156" font-size="14" fill="#fde047">assorbe gli UV</text>
<line x1="345" y1="92" x2="372" y2="92" stroke="#f8fafc" stroke-width="2"/>
<text x="378" y="97" font-size="14" fill="#f8fafc">stelle cadenti</text>
<line x1="345" y1="42" x2="372" y2="42" stroke="#f8fafc" stroke-width="2"/>
<text x="378" y="38" font-size="14" fill="#f8fafc">aurore, ISS,</text>
<text x="378" y="56" font-size="14" fill="#f8fafc">ionosfera</text>
</svg>`,
      caption: "Schema non in scala: la troposfera, in cui viviamo e si formano le nuvole, è solo il primo e il più sottile degli strati."
    },
    {
      type: "text",
      title: "Tempo e clima: due cose diverse",
      html: `<p>Il <b>tempo meteorologico</b> è lo stato dell'atmosfera in un luogo e in un momento preciso (oggi piove, c'è vento, 24 °C). Cambia da un'ora all'altra. Il <b>clima</b> è invece l'insieme delle condizioni medie e della variabilità del tempo in un luogo, su un lungo periodo (di solito <b>30 anni</b>, secondo la convenzione dell'Organizzazione Meteorologica Mondiale). Come dice una frase famosa: <i>il clima è ciò che ti aspetti, il tempo è ciò che trovi</i>. Perciò un giorno di freddo non smentisce il riscaldamento globale, così come un giorno di caldo non lo dimostra: contano le medie su molti anni e su tutto il pianeta.</p>
<p><b>I fattori che determinano il clima di un luogo.</b></p>
<ul>
<li><b>Latitudine</b>: ai poli i raggi solari arrivano inclinati e il calore si distribuisce su una superficie maggiore: più freddo; all'equatore cadono quasi perpendicolari: più caldo (zone tropicale, temperata, polare).</li>
<li><b>Altitudine</b>: in media −6,5 °C ogni 1000 m (gradiente termico verticale).</li>
<li><b>Distanza dal mare</b>: l'acqua si scalda e si raffredda lentamente (alto calore specifico), perciò le zone costiere hanno clima <b>mite</b> (escursione termica ridotta) e quelle interne <b>continentale</b> (estati calde, inverni freddi).</li>
<li><b>Correnti marine</b>: la Corrente del Golfo porta acqua calda dal Golfo del Messico verso l'Europa nord-occidentale, rendendo le coste norvegesi molto più miti di quelle canadesi alla stessa latitudine.</li>
<li><b>Venti e circolazione atmosferica</b> (anticicloni e cicloni), <b>rilievi</b> (le montagne bloccano le nuvole: versante di sopravvento umido, sottovento asciutto), <b>vegetazione</b> e <b>albedo</b> (la riflettività della superficie).</li>
</ul>
<p>La classificazione più usata è quella di <b>Köppen</b> (1900-1936) che divide il mondo in cinque gruppi: A tropicale, B arido, C temperato, D continentale, E polare. L'Italia ha in gran parte un <b>clima mediterraneo</b> (estati calde e asciutte, inverni miti e piovosi), che diventa alpino sui rilievi e più continentale in Pianura Padana.</p>
<p><b>La circolazione generale.</b> L'equatore riceve più calore dei poli: l'aria calda sale all'equatore (zone di bassa pressione e piogge abbondanti: la fascia tropicale umida), scende verso i 30° di latitudine (alta pressione: i grandi deserti come il Sahara) e questo \"mulinello\" è la <b>cella di Hadley</b>; ne esistono altre due per emisfero (cella di Ferrel e polare). Per la rotazione terrestre (<b>forza di Coriolis</b>) i venti sono deviati verso destra nell'emisfero nord: nascono gli alisei e le correnti a getto (<i>jet stream</i>).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: atmosfera e clima",
      questions: [
        { type: "mc", q: "In quale strato dell'atmosfera si trova lo strato di ozono?", options: ["Stratosfera", "Troposfera", "Mesosfera", "Termosfera"], answer: 0, explain: "L'ozono stratosferico assorbe gli ultravioletti e per questo la stratosfera si scalda con la quota." },
        { type: "tf", q: "Un'ondata di freddo in inverno dimostra che il riscaldamento globale non esiste.", answer: false, explain: "Tempo (breve periodo, locale) e clima (medie su 30 anni, scala planetaria) sono cose diverse: un singolo evento non smentisce una tendenza." },
        { type: "mc", q: "Perché le zone costiere hanno in genere escursioni termiche minori di quelle interne?", options: ["L'acqua ha alto calore specifico e si scalda/raffredda lentamente", "Il mare è più salato", "C'è più vento ovunque", "Sono più basse"], answer: 0, explain: "L'acqua accumula e cede calore lentamente e attenua le variazioni di temperatura." },
        { type: "mc", q: "Qual è il gas più abbondante nell'atmosfera?", options: ["Azoto", "Ossigeno", "Anidride carbonica", "Argon"], answer: 0, explain: "L'azoto è circa il 78% dell'aria secca." }
      ]
    },
    {
      type: "text",
      title: "L'effetto serra: un fenomeno naturale",
      html: `<p>La Terra riceve energia dal Sole (soprattutto luce visibile) e per restare in equilibrio termico deve restituirne altrettanta allo spazio sotto forma di <b>radiazione infrarossa</b> (calore). Il bilancio:</p>
<ol>
<li>Circa il 30% della radiazione solare incidente è <b>riflessa</b> subito dallo spazio (nuvole, ghiaccio, superficie chiara): è l'<b>albedo</b> terrestre, circa 0,3.</li>
<li>Il restante 70% è assorbito dall'atmosfera e dalla superficie, che si scalda.</li>
<li>La superficie, come ogni corpo caldo, emette radiazione <b>infrarossa</b>.</li>
<li>Alcuni gas dell'atmosfera (<b>gas serra</b>: vapore acqueo, CO₂, metano CH₄, protossido d'azoto N₂O, ozono troposferico, CFC) <b>assorbono</b> parte di questa radiazione e la <b>riemettono in tutte le direzioni</b>, anche verso il basso: la superficie riceve quindi un'energia aggiuntiva e si scalda di più.</li>
</ol>
<p>Le molecole di N₂ e O₂, simmetriche e biatomiche, non assorbono l'infrarosso; invece molecole come CO₂ e H₂O, che vibrano e ruotano in modi che cambiano il loro momento di dipolo, sì. Una serra di vetro funziona in modo simile ma non uguale (il vetro blocca soprattutto la convezione dell'aria calda): per questo si parla di \"effetto serra\" per analogia.</p>
<p><b>Il calcolo.</b> La costante solare (energia del Sole che arriva sopra l'atmosfera) è circa 1361 W/m² su una superficie perpendicolare ai raggi. La Terra intercetta come un disco (area πR²) ma emette da tutta la sfera (area 4πR²): in media, sul pianeta arrivano 1361/4 ≈ 340 W/m². Si assorbe il 70%: 340 × 0,7 ≈ <b>238 W/m²</b>. Per la legge di Stefan-Boltzmann un corpo nero emette σT⁴ (σ = 5,67·10⁻⁸ W/m²K⁴): per bilanciare 238 W/m², T = (238 / 5,67·10⁻⁸)^¼ ≈ <b>255 K = −18 °C</b>. La temperatura reale media è circa 288 K = +15 °C: la differenza, circa <b>33 °C</b>, è l'effetto serra naturale. Senza di esso la vita come la conosciamo non esisterebbe.</p>
<p>Il problema è l'<b>effetto serra potenziato</b> dalle attività umane: aggiungendo gas serra, l'atmosfera trattiene più calore e il pianeta si deve scaldare per ristabilire l'equilibrio.</p>`
    },
    {
      type: "svg",
      title: "Il bilancio energetico della Terra",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="ay" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#f59e0b"/></marker>
<marker id="ar2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#dc2626"/></marker>
<marker id="ab" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#2563eb"/></marker>
</defs>
<rect x="0" y="250" width="600" height="50" fill="#16a34a"/>
<text x="300" y="282" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">Superficie terrestre</text>
<rect x="0" y="100" width="600" height="55" fill="#bae6fd" opacity="0.6"/>
<text x="470" y="132" font-size="15" font-weight="bold" fill="#0c4a6e">Gas serra (CO₂, H₂O, CH₄)</text>
<circle cx="70" cy="40" r="26" fill="#fde047" stroke="#f59e0b" stroke-width="3"/>
<text x="70" y="90" font-size="14" font-weight="bold" fill="#111827" text-anchor="middle">Sole</text>
<line x1="100" y1="50" x2="170" y2="240" stroke="#f59e0b" stroke-width="4" marker-end="url(#ay)"/>
<text x="188" y="205" font-size="14" font-weight="bold" fill="#92400e">luce solare</text>
<text x="188" y="222" font-size="14" font-weight="bold" fill="#92400e">assorbita (70%)</text>
<line x1="120" y1="45" x2="260" y2="12" stroke="#2563eb" stroke-width="3" marker-end="url(#ab)"/>
<text x="268" y="22" font-size="14" font-weight="bold" fill="#1d4ed8">riflessa (30%)</text>
<line x1="320" y1="245" x2="320" y2="165" stroke="#dc2626" stroke-width="4" marker-end="url(#ar2)"/>
<text x="330" y="205" font-size="14" font-weight="bold" fill="#b91c1c">infrarosso</text>
<line x1="320" y1="95" x2="320" y2="20" stroke="#dc2626" stroke-width="4" marker-end="url(#ar2)"/>
<text x="330" y="55" font-size="14" font-weight="bold" fill="#b91c1c">parte esce nello spazio</text>
<path d="M420 160 L420 235" stroke="#dc2626" stroke-width="4" marker-end="url(#ar2)"/>
<text x="432" y="185" font-size="14" font-weight="bold" fill="#b91c1c">parte rimandata</text>
<text x="432" y="202" font-size="14" font-weight="bold" fill="#b91c1c">verso il basso</text>
</svg>`,
      caption: "I gas serra non \"fanno da tappo\": assorbono l'infrarosso e lo riemettono in tutte le direzioni, anche verso la superficie."
    },
    {
      type: "text",
      title: "Il riscaldamento globale: che cosa dicono i dati",
      html: `<p>L'idea che l'atmosfera possa scaldare il pianeta nasce nell'Ottocento: <b>Joseph Fourier</b> (1824) capì che l'atmosfera si comporta un po' come il vetro di una serra; <b>John Tyndall</b> (1859) misurò in laboratorio che CO₂ e vapore acqueo assorbono l'infrarosso; <b>Svante Arrhenius</b> (1896) calcolò che raddoppiando la CO₂ la temperatura sarebbe salita di alcuni gradi. Le sue stime erano sorprendentemente vicine a quelle moderne.</p>
<p><b>Le osservazioni.</b></p>
<ul>
<li><b>CO₂ in aumento</b>: dal 1958 <b>Charles David Keeling</b> la misura sul vulcano Mauna Loa (Hawaii). La \"<b>curva di Keeling</b>\" mostra la salita da circa 315 ppm (1958) a oltre 420 ppm oggi, con le oscillazioni stagionali dovute alla fotosintesi (si abbassa in estate nell'emisfero nord, dove c'è più vegetazione). Prima dell'epoca industriale era circa 280 ppm.</li>
<li><b>Temperatura</b>: la temperatura media globale è salita di circa <b>1,1 °C</b> tra il 1850-1900 e il decennio 2011-2020 (IPCC); gli ultimi anni sono i più caldi mai registrati; il 2023 è stato di circa 1,4 °C sopra la media preindustriale, e il 2024 è stato il primo anno a superare 1,5 °C in singolo anno.</li>
<li><b>Ghiacci</b>: i ghiacciai alpini e di tutto il mondo si ritirano; il ghiaccio marino artico in estate si è ridotto di oltre il 40% rispetto alla fine degli anni Settanta; le calotte della Groenlandia e dell'Antartide perdono massa.</li>
<li><b>Livello del mare</b>: è salito di circa 20 cm dal 1900, per dilatazione termica dell'acqua che si scalda e per fusione dei ghiacci continentali. Oggi sale di circa 3-4 mm all'anno e la velocità cresce.</li>
<li><b>Oceani</b>: assorbono circa il 90% del calore in eccesso e circa un quarto della CO₂ emessa: l'anidride carbonica reagisce con l'acqua formando acido carbonico, quindi il pH superficiale è sceso da circa 8,2 a 8,1 (<b>acidificazione degli oceani</b>), con danni a coralli e molluschi.</li>
<li><b>Eventi estremi</b>: ondate di calore, siccità e piogge intense sono più frequenti e intensi (l'estate 2003 in Europa, con decine di migliaia di morti).</li>
</ul>
<p><b>Perché sappiamo che la causa è umana?</b> (1) L'aumento di CO₂ coincide con la combustione di <b>carbone, petrolio e gas</b>: circa 37 miliardi di tonnellate di CO₂ all'anno. (2) La CO₂ fossile ha una firma isotopica: contiene meno ¹³C e niente ¹⁴C, e la sua frazione cresce nell'aria. (3) La fisica dell'effetto serra è nota da oltre un secolo e si può calcolare. (4) Le cause naturali (attività solare, vulcani, orbita della Terra) non spiegano il riscaldamento: l'attività solare dalla metà del Novecento è rimasta stabile o diminuita, mentre la temperatura è salita; la stratosfera si è raffreddata mentre la troposfera si scalda, cosa che indica gas serra e non un Sole più forte. Il rapporto IPCC del 2021 afferma che è \"inequivocabile\" che l'influenza umana ha riscaldato atmosfera, oceani e terre.</p>
<p>Il clima è sempre cambiato in passato per cause naturali (glaciazioni, variazioni orbitali di <b>Milanković</b> ogni 20 000-100 000 anni, vulcani, Sole). Le <b>carote di ghiaccio</b> dell'Antartide (Vostok, EPICA) contengono bolle di aria antica e mostrano che negli ultimi 800 000 anni la CO₂ è oscillata tra circa 180 ppm (periodi glaciali) e 300 ppm (periodi caldi): oggi è 420. Il punto non è che il clima cambi, ma la <b>velocità</b> senza precedenti con cui lo sta facendo.</p>`
    },
    {
      type: "widget",
      title: "Abbina il gas serra alla sua fonte",
      widget: "match",
      options: {
        pairs: [
          ["Anidride carbonica (CO₂)", "Combustibili fossili, deforestazione"],
          ["Metano (CH₄)", "Allevamenti, risaie, perdite di gas, discariche"],
          ["Protossido d'azoto (N₂O)", "Fertilizzanti azotati"],
          ["CFC e gas fluorurati", "Refrigeranti e solventi industriali"],
          ["Vapore acqueo", "Evaporazione: amplifica il riscaldamento"]
        ]
      },
      caption: "Il metano riscalda molto di più della CO₂ a parità di massa (circa 28 volte su 100 anni) ma resta in atmosfera molti meno anni."
    },
    {
      type: "text",
      title: "Retroazioni e modelli climatici",
      html: `<p>Il clima è un sistema complesso, con <b>retroazioni</b> (<i>feedback</i>) che amplificano (positive) o attenuano (negative) una perturbazione iniziale.</p>
<ul>
<li><b>Albedo del ghiaccio</b> (positiva): più caldo → meno ghiaccio → superficie più scura (mare o terra) che assorbe più calore → ancora più caldo.</li>
<li><b>Vapore acqueo</b> (positiva): più caldo → più evaporazione → più vapore, che è un gas serra → più caldo. Il vapore acqueo però non è la causa iniziale: dipende dalla temperatura e resta in atmosfera pochi giorni.</li>
<li><b>Permafrost</b> (positiva): lo scioglimento del suolo ghiacciato libera CO₂ e metano.</li>
<li><b>Nuvole</b>: effetto doppio (riflettono la luce ma trattengono il calore) e ancora fonte di incertezza.</li>
<li><b>Aumento dell'emissione infrarossa</b> (negativa): un pianeta più caldo emette più radiazione, che tende a raffreddarlo: è ciò che stabilizza il sistema.</li>
</ul>
<p><b>I modelli climatici</b> (GCM, <i>General Circulation Models</i>) sono programmi che dividono atmosfera, oceani, ghiacci e suolo in milioni di celle e risolvono le equazioni della fisica (conservazione di energia, massa e quantità di moto, termodinamica, radiazione) passo dopo passo nel tempo. Syukuro Manabe, Klaus Hasselmann e Giorgio Parisi hanno ricevuto il <b>Nobel per la fisica 2021</b> per i modelli fisici del clima e per lo studio dei sistemi complessi (Parisi, italiano, per i sistemi disordinati). La validità dei modelli si verifica facendoli \"rigirare\" sul passato (<i>hindcast</i>) e vedendo se riproducono le temperature osservate: i modelli degli anni Settanta-Ottanta hanno previsto con buona accuratezza il riscaldamento effettivamente avvenuto. Il tempo atmosferico è <b>caotico</b> (impossibile da prevedere oltre 1-2 settimane), ma il clima, essendo una statistica delle medie, è più prevedibile, come non si può dire se pioverà l'1 luglio 2050, ma si può dire che in media l'estate sarà più calda.</p>
<p>Poiché il futuro dipende dalle scelte della società, l'IPCC (Gruppo intergovernativo sul cambiamento climatico, istituito nel 1988 da ONU e OMM) usa <b>scenari</b> (SSP) con diverse quantità di emissioni: con emissioni molto alte si prevedono entro fine secolo aumenti di circa 3-5 °C; con forti riduzioni si può restare intorno a 1,5-2 °C. Un grado in più non è \"un grado in più\": la differenza tra 1,5 °C e 2 °C significa molte più ondate di calore estreme, la quasi totale scomparsa dei coralli (70-90% contro 99% a 2 °C) e una differenza di decine di centimetri di innalzamento del mare nei secoli.</p>`
    },
    {
      type: "example",
      title: "Che cosa succede alle Alpi e all'Italia",
      html: `<p>Il bacino del Mediterraneo è un \"punto caldo\" del cambiamento climatico: si scalda più velocemente della media globale. In Italia la temperatura media è aumentata di oltre 1,5 °C dalla fine dell'Ottocento. I ghiacciai alpini hanno perso circa la metà del loro volume dal 1850 e quasi un terzo da inizio Duemila; il ghiacciaio della Marmolada, nel luglio 2022, ha subìto un crollo di un seracco dovuto al caldo estremo in quota. Il livello del mare minaccia la laguna di Venezia, il delta del Po e le pianure costiere. Le piogge sono sempre più concentrate in eventi intensi (alluvioni) alternati a lunghe siccità, come nel 2022 con il Po in secca. Per l'agricoltura (vite, olivo, grano) significa spostare le colture e gestire meglio l'acqua.</p>`
    },
    {
      type: "text",
      title: "Che cosa possiamo fare: mitigazione, adattamento, sostenibilità",
      html: `<p>La risposta ha due facce. La <b>mitigazione</b> riduce le cause (le emissioni di gas serra); l'<b>adattamento</b> riduce i danni di ciò che non si può evitare (difese costiere, piani contro il caldo, colture resistenti alla siccità, riforestazione urbana).</p>
<p><b>Come ridurre le emissioni.</b></p>
<ul>
<li><b>Energia</b>: sostituire carbone, petrolio e gas con fonti rinnovabili (solare, eolica, idroelettrica, geotermica, biomasse sostenibili); il fotovoltaico oggi è tra le fonti più economiche. Accumuli (batterie, idrogeno) per gestire l'intermittenza. Alcuni includono il nucleare tra le fonti a basse emissioni.</li>
<li><b>Efficienza</b>: edifici isolati, elettrodomestici efficienti, trasporto pubblico, auto elettriche, riduzione degli sprechi.</li>
<li><b>Agricoltura e consumi</b>: ridurre lo spreco di cibo (circa un terzo del cibo prodotto va sprecato), diete a minore impatto, gestione dei suoli.</li>
<li><b>Foreste e suoli</b>: fermare la deforestazione e riforestare, perché gli alberi assorbono CO₂.</li>
<li><b>Economia circolare</b>: riciclare, riparare, riusare.</li>
<li><b>Cattura e stoccaggio della CO₂</b> (CCS), tecnologia in sviluppo.</li>
</ul>
<p><b>Gli accordi internazionali.</b> La <b>Convenzione quadro ONU sui cambiamenti climatici</b> (Rio 1992); il <b>Protocollo di Kyoto</b> (1997, in vigore dal 2005), che impegnava i Paesi industrializzati a ridurre le emissioni; l'<b>Accordo di Parigi</b> (COP21, dicembre 2015, in vigore dal 2016), con cui quasi tutti i Paesi si sono impegnati a contenere l'aumento della temperatura \"ben al di sotto dei 2 °C\" rispetto all'epoca preindustriale, proseguendo gli sforzi per limitarlo a <b>1,5 °C</b>, con piani nazionali di riduzione che si rinnovano ogni 5 anni. L'Unione Europea punta alla <b>neutralità climatica entro il 2050</b> (<i>European Green Deal</i>): emissioni nette zero, cioè le emissioni residue compensate dagli assorbimenti.</p>
<p><b>Sviluppo sostenibile.</b> La definizione, dal Rapporto Brundtland (1987), è quello \"che soddisfa i bisogni del presente senza compromettere la possibilità delle generazioni future di soddisfare i propri\". Nel 2015 l'ONU ha adottato l'<b>Agenda 2030</b> con 17 <b>Obiettivi di sviluppo sostenibile</b> (SDGs), tra cui energia pulita e accessibile (7), città sostenibili (11), consumo e produzione responsabili (12), azione per il clima (13), vita sott'acqua (14) e sulla terra (15). Il clima non è un tema solo ambientale: coinvolge giustizia (chi emette di più non è chi subisce di più), economia e sicurezza.</p>
<p><b>E tu?</b> Le scelte individuali contano (alimentazione, mobilità, consumo di energia, acquisti) ma le grandi riduzioni richiedono anche decisioni collettive e politiche; informarsi, discutere e votare in modo consapevole fa parte della cittadinanza. Un'impronta di carbonio media in Italia è di circa 6-7 tonnellate di CO₂ per persona all'anno (sui consumi interni), contro circa 15 negli Stati Uniti e meno di 2 in India.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il cambiamento climatico",
      intro: "Il clima globale è astratto: queste immagini aiutano.",
      tabs: [
        { label: "🛏️ La coperta", html: "<p>I gas serra sono una <b>coperta</b>: la Terra emette calore come una persona che dorme. Senza coperta avresti freddo (−18 °C); con la coperta giusta stai bene (+15 °C). Aggiungere gas serra equivale a mettere una coperta sempre più spessa: la temperatura sale finché il corpo non riesce più a smaltire il calore. Non importa se la coperta è di lana o di piuma (CO₂ o CH₄): conta quanto trattiene.</p>" },
        { label: "🛁 La vasca da bagno", html: "<p>La CO₂ nell'atmosfera è l'acqua in una vasca. Le emissioni sono il rubinetto; gli assorbimenti di oceani, foreste e suoli sono lo scarico, che porta via circa la metà di ciò che immettiamo. Il livello sale perché il rubinetto versa più di quanto lo scarico possa togliere. Per fermare la crescita non basta chiudere un po' il rubinetto: bisogna portarlo vicino allo zero (emissioni nette zero). E la CO₂ resta in atmosfera per secoli, quindi lo scarico è lento.</p>" },
        { label: "💰 Il conto in banca", html: "<p>Il <b>bilancio di carbonio</b> è come un conto: per restare sotto 1,5 °C, c'è un \"budget\" di CO₂ ancora emettibile (poche centinaia di miliardi di tonnellate, cioè circa dieci anni alle emissioni attuali). Ogni anno che passa senza ridurre le emissioni lo riduce. Aspettare ha un costo crescente: prima si tagliano le emissioni, più tempo e più budget restano per adattarsi.</p>" },
        { label: "🧪 Perché la CO₂ assorbe? Il modello 3D", html: "<p>La molecola CO₂ è lineare (O=C=O) e quando vibra, lo spostamento dei suoi atomi cambia la distribuzione di carica: è proprio questo che le permette di assorbire e riemettere fotoni infrarossi. Un'altra molecola come N₂ è simmetrica e non cambia dipolo: non assorbe. Ruota il modello.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.45, color: "#334155", label: "C" }, { x: 1.2, y: 0, z: 0, r: 0.42, color: "#ef4444", label: "O" }, { x: -1.2, y: 0, z: 0, r: 0.42, color: "#ef4444", label: "O" } ], bonds: [[0, 1], [0, 2]] } }
      ]
    },
    {
      type: "example",
      title: "Quanta CO₂ produce un viaggio in auto?",
      html: `<p>Un'auto a benzina che consuma 6 litri ogni 100 km emette circa 140 g di CO₂ per km. Infatti, bruciando 1 litro di benzina (circa 0,74 kg, quasi tutto carbonio e idrogeno) si ottengono circa 2,3 kg di CO₂: per l'ottano, C₈H₁₈ + 12,5 O₂ → 8 CO₂ + 9 H₂O, da 114 g di ottano si ottengono 8 × 44 = 352 g di CO₂, cioè circa 3 volte la massa del combustibile. Per un viaggio di 500 km: 5 × 6 = 30 L di benzina, circa 70 kg di CO₂, cioè più o meno la massa di una persona adulta, ma sotto forma di gas (circa 35 000 litri a condizioni normali). Con lo stesso viaggio in treno (circa 30-40 g per passeggero-km) l'emissione per passeggero è un quarto o meno. I numeri aiutano a scegliere con consapevolezza.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: effetto serra e riscaldamento",
      questions: [
        { type: "mc", q: "Perché la CO₂ è un gas serra e l'N₂ no?", options: ["La CO₂ assorbe la radiazione infrarossa, l'N₂ biatomico simmetrico no", "La CO₂ è più pesante", "L'N₂ è un liquido", "La CO₂ riflette la luce"], answer: 0, explain: "L'assorbimento infrarosso richiede vibrazioni che cambiano il momento di dipolo: la CO₂ ce l'ha, N₂ e O₂ no." },
        { type: "num", q: "Qual è l'effetto serra naturale, cioè la differenza tra la temperatura media reale (+15 °C) e quella senza atmosfera (−18 °C)?", answer: 33, tol: 0, unit: "°C", explain: "15 − (−18) = 33 °C." },
        { type: "tf", q: "L'aumento di CO₂ è stato misurato in modo continuo dal 1958 al Mauna Loa (curva di Keeling).", answer: true, explain: "Charles Keeling avviò le misure nel 1958: la curva mostra una crescita continua da circa 315 a oltre 420 ppm." },
        { type: "mc", q: "Che cosa ha stabilito l'Accordo di Parigi (2015)?", options: ["Contenere il riscaldamento ben sotto i 2 °C, puntando a 1,5 °C", "Vietare l'uso del petrolio", "Eliminare il buco dell'ozono", "Ridurre il livello del mare"], answer: 0, explain: "È l'obiettivo di temperatura globale concordato da quasi tutti i Paesi, con impegni nazionali rivisti ogni 5 anni." }
      ]
    },
    {
      type: "curiosity",
      title: "Le bolle che raccontano 800 000 anni",
      html: `<p>Quando la neve cade sull'Antartide e si compatta in ghiaccio, intrappola piccole bolle d'aria. Perforando il ghiaccio fino a 3,2 km (progetto EPICA a Dome C), i glaciologi hanno estratto una colonna che contiene aria di 800 000 anni fa. Analizzando i gas e il rapporto tra gli isotopi dell'ossigeno nel ghiaccio (che dipende dalla temperatura al momento della nevicata) hanno ricostruito insieme la CO₂ e la temperatura del passato: le due curve salgono e scendono insieme per le otto ere glaciali e interglaciali, e la CO₂ non ha mai superato circa 300 ppm. Oggi siamo a oltre 420 ppm: un valore che la Terra non vedeva da milioni di anni (Pliocene). Il ghiaccio è un archivio di storia del clima.</p>`
    },
    {
      type: "curiosity",
      title: "La storia del buco dell'ozono: una buona notizia",
      html: `<p>Nel 1974 Mario Molina e Sherwood Rowland capirono che i CFC, inerti in basso, arrivati in stratosfera si rompono per i raggi UV e liberano atomi di cloro, che distruggono migliaia di molecole di ozono ciascuno. Nel 1985 gli scienziati britannici Farman, Gardiner e Shanklin scoprirono il \"buco\" sull'Antartide. Nel 1995 Molina, Rowland e Paul Crutzen ricevettero il Nobel per la chimica. Con il <b>Protocollo di Montréal</b> (1987), sottoscritto da tutti i Paesi del mondo, si eliminarono i CFC; secondo le valutazioni dell'ONU, lo strato di ozono dovrebbe tornare ai livelli del 1980 circa a metà secolo (verso il 2066 sull'Antartide). È la prova che i problemi globali si possono risolvere se scienza, politica e industria agiscono insieme: un modello per il clima, anche se la sfida è molto più grande (le emissioni di CO₂ sono diffuse in tutta l'economia).</p>`
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li>Atmosfera: N₂ 78%, O₂ 21%, Ar 0,9%, CO₂ circa 0,042%; strati: troposfera (meteo), stratosfera (ozono), mesosfera, termosfera, esosfera.</li>
<li><b>Tempo</b> = stato dell'aria ora; <b>clima</b> = medie su 30 anni.</li>
<li><b>Effetto serra</b>: i gas serra assorbono l'infrarosso e lo riemettono: senza di loro −18 °C, con loro +15 °C. Il problema è quello <b>potenziato</b> dalle emissioni umane.</li>
<li>CO₂ da 280 ppm a oltre 420 ppm; +1,1 °C; ghiacci in ritiro, mari in aumento; causa: combustibili fossili.</li>
<li>Modelli climatici: fisica + calcolo, verificati sul passato; scenari IPCC. Risposta: <b>mitigazione</b> + <b>adattamento</b>, Accordo di Parigi, Agenda 2030.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa del clima e dei suoi cambiamenti",
      nodes: [
        { id: "sole", label: "Energia del Sole", x: 50, y: 6, color: "#f59e0b", html: "Circa 1361 W/m² sopra l'atmosfera; il 30% viene riflesso.", why: "È il motore di tutto il sistema climatico. Milanković (anni Venti-Trenta) mostrò che piccoli cambiamenti dell'orbita terrestre variano la radiazione e spiegano le glaciazioni." },
        { id: "atm", label: "Atmosfera e circolazione", x: 18, y: 38, color: "#0ea5e9", html: "Strati, venti, celle di Hadley.", why: "Lo squilibrio tra il calore all'equatore e ai poli e la rotazione terrestre (Coriolis) generano la circolazione generale e i climi del mondo." },
        { id: "serra", label: "Effetto serra", x: 50, y: 42, color: "#ef4444", html: "I gas serra assorbono e riemettono l'infrarosso.", why: "Fourier (1824), Tyndall (1859) e Arrhenius (1896) ne spiegarono la fisica. Senza di esso la Terra sarebbe a circa −18 °C (calcolo con Stefan-Boltzmann)." },
        { id: "um", label: "Emissioni umane", x: 82, y: 38, color: "#7c3aed", html: "Combustibili fossili, deforestazione, agricoltura.", why: "Dalla rivoluzione industriale (circa 1750-1850) bruciamo il carbonio accumulato in milioni di anni: la CO₂ è salita del 50% in circa 170 anni." },
        { id: "mod", label: "Dati e modelli", x: 25, y: 75, color: "#16a34a", html: "Keeling, carote di ghiaccio, satelliti, GCM.", why: "Osservazioni indipendenti convergono: la CO₂, la temperatura, i ghiacci e il livello del mare si muovono nella direzione prevista dalla fisica. I modelli riproducono il passato e proiettano scenari futuri." },
        { id: "imp", label: "Impatti", x: 60, y: 78, color: "#dc2626", html: "Caldo, siccità, alluvioni, mari più alti, acidificazione.", why: "Le retroazioni (ghiaccio, vapore acqueo, permafrost) amplificano il riscaldamento; gli impatti ricadono in modo diseguale su Paesi, ecosistemi e generazioni." },
        { id: "sost", label: "Sostenibilità", x: 88, y: 88, color: "#0f766e", html: "Mitigazione, adattamento, Accordo di Parigi, Agenda 2030.", why: "Poiché la causa è umana, anche la soluzione lo è: transizione energetica, efficienza, economia circolare e cooperazione internazionale (il Protocollo di Montréal ne è il precedente di successo)." }
      ],
      edges: [["sole", "serra", "scaldato dall'"], ["atm", "serra", "contiene i gas dell'"], ["um", "serra", "intensificano l'"], ["serra", "imp", "causa gli"], ["mod", "imp", "li quantificano"], ["imp", "sost", "richiedono la"], ["um", "sost", "si riducono con la"]]
    }
  ],
  glossary: [
    { t: "Troposfera", d: "Strato più basso dell'atmosfera (0-12 km circa), dove si formano le nuvole e i fenomeni meteo." },
    { t: "Ozono (O₃)", d: "Gas della stratosfera che assorbe i raggi ultravioletti dannosi." },
    { t: "Tempo meteorologico", d: "Stato dell'atmosfera in un luogo e in un momento precisi." },
    { t: "Clima", d: "Condizioni medie del tempo in un luogo, calcolate su un lungo periodo (30 anni)." },
    { t: "Albedo", d: "Frazione di radiazione solare riflessa da una superficie." },
    { t: "Effetto serra", d: "Riscaldamento dovuto ai gas che assorbono la radiazione infrarossa e la riemettono verso la superficie." },
    { t: "Gas serra", d: "Gas come CO₂, CH₄, N₂O e vapore acqueo che trattengono il calore nell'atmosfera." },
    { t: "Retroazione (feedback)", d: "Processo che amplifica (positiva) o attenua (negativa) un cambiamento iniziale." },
    { t: "Modello climatico", d: "Simulazione al computer dell'atmosfera, degli oceani e dei ghiacci basata sulle leggi della fisica." },
    { t: "IPCC", d: "Gruppo intergovernativo sul cambiamento climatico: valuta la letteratura scientifica per i governi." },
    { t: "Mitigazione / Adattamento", d: "Ridurre le cause del cambiamento climatico / ridurne i danni." },
    { t: "Sviluppo sostenibile", d: "Sviluppo che soddisfa i bisogni attuali senza compromettere quelli delle generazioni future." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In quale strato dell'atmosfera avvengono i fenomeni meteorologici?", options: ["Troposfera", "Stratosfera", "Mesosfera", "Esosfera"], answer: 0, explain: "La troposfera contiene quasi tutto il vapore acqueo e le nuvole." },
      { type: "tf", q: "Il clima è la media delle condizioni del tempo su un periodo di circa 30 anni.", answer: true, explain: "È la convenzione dell'Organizzazione Meteorologica Mondiale." },
      { type: "mc", q: "Che cosa sarebbe la temperatura media della Terra senza effetto serra, secondo il calcolo di bilancio energetico?", options: ["Circa −18 °C", "Circa +15 °C", "Circa +30 °C", "Circa 0 K"], answer: 0, explain: "Con albedo 0,3 e costante solare 1361 W/m², l'equilibrio dà circa 255 K." },
      { type: "mc", q: "Quale di questi gas non è un gas serra significativo?", options: ["Azoto (N₂)", "Metano (CH₄)", "Anidride carbonica (CO₂)", "Protossido d'azoto (N₂O)"], answer: 0, explain: "L'azoto molecolare è simmetrico e non assorbe l'infrarosso." },
      { type: "mc", q: "Che cosa mostra la curva di Keeling?", options: ["L'aumento della CO₂ atmosferica dal 1958", "La temperatura degli oceani", "Lo spessore dell'ozono", "Il livello del mare"], answer: 0, explain: "Misure di CO₂ al Mauna Loa: da circa 315 a oltre 420 ppm." },
      { type: "tf", q: "Il riscaldamento globale può essere spiegato dalle sole variazioni dell'attività solare.", answer: false, explain: "L'attività solare è rimasta stabile o diminuita dagli anni Cinquanta mentre la temperatura saliva; la firma dei gas serra (stratosfera fredda, troposfera calda, CO₂ fossile) indica l'origine umana." },
      { type: "mc", q: "Quale retroazione positiva amplifica il riscaldamento nelle regioni polari?", options: ["Meno ghiaccio, meno albedo, più assorbimento di calore", "Più ghiaccio, più riflessione", "Più nuvole alte soltanto", "Meno vapore acqueo"], answer: 0, explain: "Il ghiaccio riflette la luce; quando si scioglie, la superficie scura assorbe più energia." },
      { type: "mc", q: "Qual è l'obiettivo di temperatura dell'Accordo di Parigi?", options: ["Ben sotto i 2 °C, puntando a 1,5 °C", "Ridurre di 10 °C", "Restare sotto 5 °C", "Tornare a −18 °C"], answer: 0, explain: "Rispetto al livello preindustriale." },
      { type: "text", q: "Come si chiama il protocollo del 1987 che ha eliminato i CFC per proteggere l'ozono?", answer: ["protocollo di montreal", "montreal", "montréal", "protocollo di montréal"], explain: "Il Protocollo di Montréal è considerato il più riuscito accordo ambientale internazionale." },
      { type: "order", q: "Metti in ordine gli scienziati in ordine cronologico rispetto alle loro scoperte sull'effetto serra.", items: ["Fourier (1824)", "Tyndall (1859)", "Arrhenius (1896)", "Keeling (dal 1958)"], explain: "Fourier intuì l'effetto, Tyndall misurò l'assorbimento, Arrhenius calcolò l'effetto della CO₂, Keeling misurò l'aumento della CO₂." }
    ]
  }
});

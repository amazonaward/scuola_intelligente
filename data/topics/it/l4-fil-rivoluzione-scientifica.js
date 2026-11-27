TOPIC('it', {
  id: "l4-fil-rivoluzione-scientifica",
  title: "La rivoluzione scientifica",
  intro: "Nel 1543 un canonico polacco pubblica un libro che sposta la Terra dal centro dell'universo; nel 1610 un professore di Padova punta un cannocchiale verso Giove e vede quattro piccoli astri girargli attorno; nel 1687 un inglese riassume tutto in poche leggi matematiche. In circa un secolo e mezzo cambia il <b>modo di conoscere la natura</b>: non più autorità dei testi antichi, ma <b>osservazione, esperimento e matematica</b>. In questa lezione seguiamo <b>Copernico, Bacone, Galileo</b> e i loro compagni di strada, e ci chiediamo che cosa significhi davvero fare scienza.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Il mondo prima della rivoluzione",
      html: `<p>Fino al Cinquecento l'immagine dominante del cosmo era quella di <b>Aristotele</b> e del matematico-astronomo <b>Tolomeo</b> (II secolo d.C.), che la tradizione medievale, con <b>Tommaso</b>, aveva armonizzato con la fede cristiana. In questa visione:</p>
<ul>
<li>la <b>Terra</b> è immobile al centro dell'universo (<b>geocentrismo</b>);</li>
<li>attorno a essa ruotano su sfere cristalline la Luna, il Sole, i pianeti e infine le stelle fisse;</li>
<li>il cosmo è diviso in due: il mondo <b>sublunare</b> (corruttibile, fatto di terra, acqua, aria, fuoco) e il mondo <b>celeste</b> (incorruttibile, fatto di etere, con moti circolari perfetti);</li>
<li>per spiegare i moti irregolari dei pianeti Tolomeo aveva introdotto <b>epicicli e deferenti</b>, cerchi su cerchi, per far tornare i conti con le osservazioni.</li>
</ul>
<p>Era un sistema coerente con l'esperienza quotidiana (non sentiamo la Terra muoversi) e con la fisica aristotelica (ogni corpo pesante tende al suo «luogo naturale», il centro). Il metodo di studio era fondato sul <b>principio di autorità</b>: per sapere come stanno le cose si consultavano i testi dei grandi antichi. La rivoluzione scientifica mette in discussione proprio questo.</p>`
    },
    {
      type: "svg",
      title: "Geocentrismo contro eliocentrismo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="28" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e293b">Tolomeo: Terra al centro</text>
<text x="450" y="28" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e293b">Copernico: Sole al centro</text>
<circle cx="150" cy="160" r="105" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="150" cy="160" r="75" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="150" cy="160" r="45" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="150" cy="160" r="14" fill="#2563eb"/>
<text x="150" y="190" font-size="14" text-anchor="middle" fill="#1e3a8a">Terra</text>
<circle cx="195" cy="160" r="6" fill="#64748b"/>
<circle cx="150" cy="85" r="9" fill="#f59e0b"/>
<text x="168" y="82" font-size="14" fill="#92400e">Sole</text>
<circle cx="150" cy="55" r="5" fill="#7c3aed"/>
<text x="162" y="58" font-size="14" fill="#5b21b6">Giove</text>
<circle cx="450" cy="160" r="105" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="450" cy="160" r="75" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="450" cy="160" r="45" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="450" cy="160" r="16" fill="#f59e0b"/>
<text x="450" y="192" font-size="14" text-anchor="middle" fill="#92400e">Sole</text>
<circle cx="525" cy="160" r="9" fill="#2563eb"/>
<text x="525" y="185" font-size="14" text-anchor="middle" fill="#1e3a8a">Terra</text>
<circle cx="538" cy="160" r="3" fill="#64748b"/>
<circle cx="450" cy="55" r="5" fill="#7c3aed"/>
<text x="462" y="58" font-size="14" fill="#5b21b6">Giove</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#475569">Schema semplificato, non in scala</text>
</svg>`,
      caption: "Nel sistema copernicano la Terra diventa un pianeta come gli altri e la Luna l'unico corpo che gira davvero attorno a lei."
    },
    {
      type: "text",
      title: "2. Copernico e i suoi eredi",
      html: `<p><b>Niccolò Copernico</b> (1473-1543), canonico di Frombork, in Polonia, studia astronomia, diritto e medicina anche in Italia. Nel <i>De revolutionibus orbium coelestium</i> (1543, pubblicato l'anno della sua morte) propone di mettere il <b>Sole al centro</b>: la Terra ruota su se stessa in 24 ore e gira attorno al Sole in un anno, come gli altri pianeti. Così molti fenomeni (le stazioni e le retrogradazioni dei pianeti) diventano apparenze dovute al moto della Terra, e l'ordine dei pianeti si semplifica. Ma Copernico mantiene ancora orbite circolari ed epicicli: la sua è più una riorganizzazione che una rottura totale. Nella prefazione, non scritta da lui ma dal teologo Osiander, l'opera era presentata come «semplice ipotesi matematica».</p>
<p>Gli astronomi seguenti completano il quadro:</p>
<ul>
<li><b>Tycho Brahe</b> (1546-1601) compie osservazioni di precisione eccezionale a occhio nudo; osserva la supernova del 1572, che mostra che i cieli non sono immutabili. Propone un sistema «misto» (i pianeti girano attorno al Sole, che gira attorno alla Terra).</li>
<li><b>Giovanni Keplero</b> (1571-1630), assistente di Brahe, usa i suoi dati e scopre le <b>tre leggi</b> del moto planetario: 1) le orbite sono <b>ellissi</b> con il Sole in un fuoco (<i>Astronomia nova</i>, 1609); 2) il raggio Sole-pianeta spazza <b>aree uguali in tempi uguali</b>; 3) il quadrato del periodo di rivoluzione è proporzionale al cubo del semiasse maggiore dell'orbita (<i>Harmonices mundi</i>, 1619). Il cerchio «perfetto» viene abbandonato.</li>
<li><b>Giordano Bruno</b> (1548-1600) radicalizza Copernico: l'universo è infinito, con infiniti mondi. Condannato per eresia dall'Inquisizione, è bruciato a Roma il 17 febbraio 1600; sul peso reale dell'astronomia nella sua condanna gli storici discutono (pesarono soprattutto questioni teologiche).</li>
</ul>`
    },
    {
      type: "3d",
      title: "Il sistema solare in movimento",
      scene: "solar",
      options: { labels: true },
      caption: "Ruota il modello: i pianeti girano attorno al Sole con periodi diversi, come nelle leggi di Keplero (più lontani, più lenti)."
    },
    {
      type: "text",
      title: "3. Galileo: guardare il cielo e misurare il moto",
      html: `<p><b>Galileo Galilei</b> (Pisa 1564 - Arcetri 1642) insegna a Padova e poi lavora a Firenze alla corte dei Medici. Nel 1609-1610 perfeziona il <b>cannocchiale</b> (inventato in Olanda) e lo punta verso il cielo. Nel <i>Sidereus nuncius</i> (1610) annuncia:</p>
<ul>
<li>sulla <b>Luna</b> ci sono montagne e crateri: non è una sfera perfetta;</li>
<li><b>Giove</b> ha quattro satelliti (che chiama «medicei»): dunque non tutto ruota attorno alla Terra;</li>
<li>la Via Lattea è composta da innumerevoli stelle; più tardi osserva le <b>fasi di Venere</b> (incompatibili con il modello tolemaico puro) e le <b>macchie solari</b>.</li>
</ul>
<p>Ma Galileo è anche il fondatore della <b>fisica moderna</b>. Studia la <b>caduta dei corpi</b> e il piano inclinato, e giunge a questi risultati: in assenza di resistenza dell'aria corpi di peso diverso cadono con la stessa accelerazione; il moto è <b>uniformemente accelerato</b> (spazio proporzionale al quadrato del tempo); un corpo non soggetto a forze mantiene il suo moto (<b>principio d'inerzia</b>, formulato in forma incompleta); le leggi della fisica sono le stesse in tutti i sistemi che si muovono di moto rettilineo uniforme (<b>relatività galileiana</b>). Questo risponde all'obiezione principale contro Copernico: se la Terra si muove, perché non ce ne accorgiamo? Come in una nave che procede regolare, dove una pietra lasciata cadere dall'albero cade ai piedi dell'albero, come se la nave fosse ferma.</p>`
    },
    {
      type: "example",
      title: "Un esempio: la nave di Galileo",
      html: `<p>Sei in treno che viaggia a velocità costante, senza scossoni. Fai cadere una moneta: cade dritta ai tuoi piedi, esattamente come se il treno fosse fermo. Se chiudessi gli occhi, nessun esperimento meccanico ti direbbe se il treno si muove o è fermo. Galileo usa l'esempio della <b>nave</b> nel <i>Dialogo</i> (1632) per mostrare che «non sentire» il moto della Terra non prova che essa sia ferma. Un argomento di <b>logica</b>, più che un'osservazione: il fatto che un'idea contraddica il «senso comune» non basta per rifiutarla.</p>`
    },
    {
      type: "text",
      title: "4. Il metodo: sensate esperienze e necessarie dimostrazioni",
      html: `<p>Il nuovo modo di fare scienza si riassume in due formule di Galileo: <b>«sensate esperienze»</b> (osservazioni e esperimenti ripetibili) e <b>«necessarie dimostrazioni»</b> (ragionamento matematico). Nel <i>Saggiatore</i> (1623) scrive che la natura «è scritta in lingua matematica» e i suoi caratteri sono «triangoli, cerchi e altre figure geometriche». Le tappe tipiche del suo metodo:</p>
<ol>
<li><b>osservare</b> un fenomeno e isolare gli aspetti misurabili (le qualità «primarie»: forma, grandezza, moto; non colori e sapori, considerati soggettivi);</li>
<li>formulare un'<b>ipotesi</b> matematica (per esempio: la velocità di caduta cresce in modo proporzionale al tempo);</li>
<li>ricavare <b>conseguenze</b> verificabili con un <b>esperimento</b> (piano inclinato, misure di tempo);</li>
<li>confermare o correggere l'ipotesi. Spesso si usa l'<b>esperimento mentale</b>, come quello dei due corpi legati insieme.</li>
</ol>
<p>Questo metodo è detto <b>ipotetico-deduttivo</b>. Non nasce dal nulla: unisce la tradizione matematica platonico-archimedea e quella degli artigiani e ingegneri rinascimentali (arsenali, cantieri, strumenti di misura).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: da Copernico a Galileo",
      questions: [
        { type: "mc", q: "Qual è la forma delle orbite planetarie secondo Keplero?", options: ["Cerchi perfetti", "Ellissi con il Sole in un fuoco", "Spirali"], answer: 1, explain: "È la prima legge di Keplero, nell'Astronomia nova (1609)." },
        { type: "tf", q: "Copernico pubblicò il De revolutionibus nel 1543, l'anno della sua morte.", answer: true, explain: "Secondo la tradizione ne vide una copia poco prima di morire." },
        { type: "mc", q: "Quale scoperta del 1610 mostrò che non tutto ruota attorno alla Terra?", options: ["Le macchie solari", "I quattro satelliti di Giove", "Gli anelli di Saturno"], answer: 1, explain: "I satelliti medicei di Giove, nel Sidereus nuncius." }
      ]
    },
    {
      type: "text",
      title: "5. Bacone: l'induzione e la critica agli idoli",
      html: `<p><b>Francis Bacon</b> (Bacone, 1561-1626), filosofo e uomo di Stato inglese (Lord cancelliere sotto Giacomo I), non è uno scienziato, ma il grande <b>teorico</b> del metodo sperimentale. Nel <i>Novum organum</i> (1620) oppone il «nuovo strumento» induttivo all'<i>Organon</i> aristotelico (la logica deduttiva e sillogistica, giudicata sterile). Il suo motto: <b>«sapere è potere»</b> (<i>scientia potentia est</i>): conoscere le leggi della natura serve a dominarla a vantaggio dell'umanità, e «alla natura si comanda solo obbedendole».</p>
<p>Prima del metodo, Bacone propone la <b>pars destruens</b>: la critica degli <b>idola</b>, i pregiudizi che deformano la mente:</p>
<ul>
<li><b>idola tribus</b> (della tribù): errori comuni a tutta l'umanità, come attribuire alla natura uno scopo o un ordine che non ha;</li>
<li><b>idola specus</b> (della caverna): limiti dell'individuo, dovuti a carattere, educazione, letture;</li>
<li><b>idola fori</b> (del foro): inganni del linguaggio e delle parole imprecise;</li>
<li><b>idola theatri</b> (del teatro): le dottrine filosofiche tradizionali, accolte come «spettacoli» senza esame.</li>
</ul>
<p>Poi la <b>pars construens</b>: l'<b>induzione</b> passa dai dati particolari a leggi generali, ma con ordine. Si raccolgono le osservazioni in <b>tavole</b>: di <i>presenza</i> (casi in cui il fenomeno c'è, per esempio il calore), di <i>assenza</i> (casi simili in cui manca) e di <i>gradi</i> (casi in cui varia). Si escludono (<i>exclusio</i>) le cause che non coincidono e si arriva alla «forma» del fenomeno. Il suo celebre paragone: gli empirici sono come le <b>formiche</b> (accumulano), i dogmatici come i <b>ragni</b> (tessono dal proprio interno), mentre lo scienziato deve essere come l'<b>ape</b>, che raccoglie e trasforma.</p>
<p>Limiti di Bacone: sottovaluta l'ipotesi e la matematica, e non apprezza fino in fondo Copernico e Keplero. Ma la sua visione della scienza come impresa <b>collettiva e organizzata</b> (nella <i>Nuova Atlantide</i> immagina la «Casa di Salomone», un istituto di ricerca) ispirerà la fondazione della <b>Royal Society</b> di Londra (1660).</p>`
    },
    {
      type: "svg",
      title: "Due vie al metodo scientifico",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="20" width="260" height="260" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="150" y="48" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Bacone: induzione</text>
<rect x="50" y="68" width="200" height="40" rx="8" fill="#ffffff" stroke="#1d4ed8"/>
<text x="150" y="93" font-size="15" text-anchor="middle" fill="#0f172a">1. Molti casi osservati</text>
<rect x="50" y="128" width="200" height="40" rx="8" fill="#ffffff" stroke="#1d4ed8"/>
<text x="150" y="153" font-size="15" text-anchor="middle" fill="#0f172a">2. Tavole ed esclusioni</text>
<rect x="50" y="188" width="200" height="40" rx="8" fill="#ffffff" stroke="#1d4ed8"/>
<text x="150" y="213" font-size="15" text-anchor="middle" fill="#0f172a">3. Legge generale</text>
<path d="M150 108 V128 M150 168 V188" stroke="#1d4ed8" stroke-width="3"/>
<rect x="320" y="20" width="260" height="260" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="450" y="48" font-size="18" font-weight="bold" text-anchor="middle" fill="#14532d">Galileo: ipotetico-deduttivo</text>
<rect x="350" y="68" width="200" height="34" rx="8" fill="#ffffff" stroke="#15803d"/>
<text x="450" y="91" font-size="15" text-anchor="middle" fill="#0f172a">1. Osservazione</text>
<rect x="350" y="116" width="200" height="34" rx="8" fill="#ffffff" stroke="#15803d"/>
<text x="450" y="139" font-size="15" text-anchor="middle" fill="#0f172a">2. Ipotesi matematica</text>
<rect x="350" y="164" width="200" height="34" rx="8" fill="#ffffff" stroke="#15803d"/>
<text x="450" y="187" font-size="15" text-anchor="middle" fill="#0f172a">3. Deduzione</text>
<rect x="350" y="212" width="200" height="34" rx="8" fill="#ffffff" stroke="#15803d"/>
<text x="450" y="235" font-size="15" text-anchor="middle" fill="#0f172a">4. Esperimento</text>
<path d="M450 102 V116 M450 150 V164 M450 198 V212" stroke="#15803d" stroke-width="3"/>
<path d="M550 229 H570 V85 H550" fill="none" stroke="#15803d" stroke-width="2"/>
</svg>`,
      caption: "La scienza reale combina le due strade: dati raccolti con ordine e ipotesi controllate dall'esperimento."
    },
    {
      type: "text",
      title: "6. Il processo a Galileo",
      html: `<p>Il copernicanesimo di Galileo urtò la <b>Chiesa</b>, in un momento di tensione dopo la Riforma protestante e in piena Controriforma. Il problema era la <b>Bibbia</b>: passi come quello di Giosuè, che ferma il Sole, sembravano contraddire il moto della Terra. Nella <i>Lettera a Cristina di Lorena</i> (1615) Galileo sostenne che la Scrittura insegna «come si vada al cielo, non come vada il cielo», e che le «sensate esperienze» non possono essere smentite da interpretazioni letterali.</p>
<ul>
<li><b>1616</b>: il Sant'Uffizio dichiara il copernicanesimo «contrario alla Scrittura» e lo proibisce come verità; a Galileo viene ingiunto di non sostenerlo (si discute sul tenore preciso dell'ingiunzione).</li>
<li><b>1632</b>: Galileo pubblica il <i>Dialogo sopra i due massimi sistemi del mondo</i>, con tre interlocutori (Salviati, Sagredo, Simplicio), che appare chiaramente favorevole a Copernico.</li>
<li><b>1633</b>: processo a Roma; Galileo, ormai settantenne, <b>abiura</b> il sistema copernicano. Condannato al carcere (commutato in residenza vigilata), vive ad Arcetri, presso Firenze. La frase «<i>eppur si muove</i>» è con ogni probabilità una leggenda successiva.</li>
<li><b>1638</b>: pubblica in Olanda i <i>Discorsi e dimostrazioni matematiche intorno a due nuove scienze</i>, sintesi del suo lavoro di fisico. Muore nel 1642.</li>
</ul>
<p>Nel 1992 Giovanni Paolo II riconobbe ufficialmente gli errori commessi dai teologi nel caso Galileo.</p>`
    },
    {
      type: "decision",
      title: "Giugno 1633: abiurare o no?",
      html: `<p>Sei Galileo, hai quasi settant'anni, sei malato. Davanti al tribunale del Sant'Uffizio ti si chiede di rinnegare la tesi che la Terra si muova. Sai che Giordano Bruno nel 1600 è finito sul rogo, anche se per accuse diverse. I tuoi studi sul moto sono quasi pronti, ma non ancora pubblicati.</p>`,
      question: "Che cosa avresti fatto?",
      options: [
        { label: "Rifiuto: la verità vale più della vita.", outcome: "Saresti un martire della scienza, ma perderesti l'occasione di terminare e pubblicare le tue ricerche sul moto." },
        { label: "Abiuro per salvarmi e continuare a lavorare.", outcome: "Rinneghi pubblicamente ciò che sai vero, ma resti in vita e puoi concludere la tua opera." },
        { label: "Cerco un compromesso: dico che è solo un'ipotesi matematica.", outcome: "È la strada che gli era stata già suggerita nel 1616, ma Galileo con il Dialogo aveva già passato il segno." }
      ],
      answer: 1,
      explain: "Galileo abiurò il 22 giugno 1633. Nei mesi seguenti, agli arresti domiciliari, completò i Discorsi su due nuove scienze (1638), che fondano la meccanica moderna. Il caso mostra il conflitto tra autorità e ricerca, ma anche quanto lo scontro fosse complesso: tra gli stessi uomini di Chiesa c'erano molti studiosi di scienza."
    },
    {
      type: "conceptMap",
      title: "Mappa: la nascita della scienza moderna",
      nodes: [
        { id: "aristo", label: "Cosmo aristotelico-tolemaico", x: 50, y: 5, color: "#64748b", html: "Terra immobile al centro, cieli perfetti, principio di autorità.", why: "Era coerente con l'esperienza quotidiana e con la fede; per secoli sembrò il solo sistema in grado di spiegare i fenomeni." },
        { id: "copernico", label: "Copernico", x: 15, y: 32, color: "#2563eb", html: "Il Sole al centro, la Terra pianeta mobile.", why: "Nasce dal bisogno di semplificare l'astronomia tolemaica e dall'idea neoplatonica del Sole come principio del cosmo." },
        { id: "keplero", label: "Brahe e Keplero", x: 50, y: 38, color: "#7c3aed", html: "Dati precisi e leggi matematiche del moto planetario.", why: "Le osservazioni di Brahe obbligano Keplero ad abbandonare il cerchio: i dati hanno la precedenza sulle idee preconcette." },
        { id: "galileo", label: "Galileo", x: 85, y: 32, color: "#16a34a", html: "Cannocchiale, inerzia, caduta dei gravi, metodo ipotetico-deduttivo.", why: "Unisce osservazione e matematica: la natura è un libro scritto in lingua matematica." },
        { id: "bacone", label: "Bacone", x: 20, y: 70, color: "#f59e0b", html: "Induzione, idola, «sapere è potere».", why: "Cerca un metodo per liberare la mente dai pregiudizi e trasformare la conoscenza in dominio sulla natura." },
        { id: "newton", label: "Newton", x: 80, y: 72, color: "#ef4444", html: "Principia (1687): gravitazione universale.", why: "Una sola legge spiega la caduta della mela e il moto dei pianeti: cade la divisione tra mondo sublunare e celeste." }
      ],
      edges: [
        ["aristo", "copernico", "è criticato da"],
        ["copernico", "keplero", "precisato da"],
        ["keplero", "galileo", "conferma"],
        ["galileo", "newton", "prosegue in"],
        ["bacone", "galileo", "metodo parallelo"],
        ["keplero", "newton", "fornisce le leggi a"]
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il metodo scientifico",
      intro: "Se «ipotetico-deduttivo» suona astratto, prova una di queste tre strade.",
      tabs: [
        {
          label: "🕵️ Il detective",
          html: `<p>Un detective raccoglie indizi (induzione alla Bacone), poi formula un'ipotesi («è stato il maggiordomo»), ne ricava conseguenze («allora dovrebbe avere il fango sulle scarpe») e le controlla (metodo galileiano). Se la conseguenza è falsa, l'ipotesi va abbandonata o corretta. Il lavoro dello scienziato è molto simile, con la differenza che ogni indagine può essere ripetuta da altri.</p>`
        },
        {
          label: "📱 Una prova pratica",
          html: `<p>Lascia cadere dall'alto di un tavolo un foglio appallottolato e un libro: arrivano insieme (quasi). Poi lascia cadere il foglio aperto: ritarda. Galileo ragiona così: la differenza non è nel <i>peso</i>, ma nell'<i>aria</i>. Se togliessimo l'aria, cadrebbero insieme. Nel 1971, sulla Luna, l'astronauta David Scott lasciò cadere un martello e una piuma: toccarono il suolo nello stesso istante.</p>`
        },
        {
          label: "⏱️ Cronologia",
          html: `<p>Le date da ricordare, in ordine:</p>`,
          widget: "timeline",
          options: { events: [ { year: 1543, label: "Copernico, De revolutionibus", icon: "🌞" }, { year: 1609, label: "Keplero: Astronomia nova", icon: "🪐" }, { year: 1610, label: "Galileo: Sidereus nuncius", icon: "🔭" }, { year: 1620, label: "Bacone: Novum organum", icon: "📖" }, { year: 1632, label: "Dialogo sopra i due massimi sistemi", icon: "💬" }, { year: 1633, label: "Processo e abiura", icon: "⚖️" }, { year: 1687, label: "Newton: Principia", icon: "🍎" } ], unit: "anni" }
        }
      ]
    },
    {
      type: "example",
      title: "Un esempio: i vaccini e le «sensate esperienze»",
      html: `<p>Quando un farmaco o un vaccino viene testato, si usa un <b>gruppo di controllo</b> (a una parte dei volontari viene dato un placebo) e si confrontano i risultati. È un'eredità diretta di Galileo e Bacone: non ci si fida dell'impressione di un singolo medico (<i>idola specus</i>), né di una teoria autorevole (<i>idola theatri</i>), ma di dati ripetibili. La scienza moderna sa di poter sbagliare e proprio per questo si corregge.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che...?",
      html: `<p>Il cannocchiale di Galileo ingrandiva circa 20-30 volte e aveva un campo visivo minuscolo: guardare la Luna era come guardare da un buco. Il poeta e matematico Thomas Harriot, in Inghilterra, aveva disegnato la Luna col cannocchiale pochi mesi prima di lui, ma Galileo fu il primo a trarre da quelle osservazioni conclusioni astronomiche e a pubblicarle.</p>`
    },
    {
      type: "curiosity",
      title: "Anche la scienza ha i suoi errori",
      html: `<p>Galileo rifiutò le orbite ellittiche di Keplero (restò legato ai cerchi) e attribuì le maree al moto della Terra invece che all'attrazione della Luna. Bacone non accettò il copernicanesimo. La rivoluzione scientifica non fu opera di «geni infallibili», ma di un lavoro comune, in cui gli errori dell'uno venivano corretti dagli altri.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Copernico</b> (1543): eliocentrismo. <b>Keplero</b>: orbite ellittiche e tre leggi. <b>Bruno</b>: universo infinito, rogo nel 1600.</li>
<li><b>Galileo</b>: cannocchiale (1610), principio d'inerzia, metodo con «sensate esperienze e necessarie dimostrazioni», natura scritta in lingua matematica.</li>
<li><b>Bacone</b>: <i>Novum organum</i> (1620), induzione, critica degli <i>idola</i>, «sapere è potere».</li>
<li>Processo e abiura di Galileo: <b>1633</b>.</li>
<li>La scienza moderna unisce <b>osservazione, esperimento e matematica</b> e rifiuta il principio di autorità.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Bacone e il metodo",
      questions: [
        { type: "mc", q: "Che cosa sono gli idola di Bacone?", options: ["Statue pagane", "Pregiudizi che ostacolano la conoscenza", "Strumenti di misura"], answer: 1, explain: "Sono gli errori e i pregiudizi della mente: tribù, caverna, foro, teatro." },
        { type: "tf", q: "Per Galileo il libro della natura è scritto in lingua matematica.", answer: true, explain: "Lo afferma nel Saggiatore (1623)." },
        { type: "order", q: "Metti in ordine cronologico.", items: ["De revolutionibus", "Sidereus nuncius", "Novum organum", "Abiura di Galileo"], explain: "1543, 1610, 1620, 1633." }
      ]
    }
  ],
  glossary: [
    { t: "Geocentrismo", d: "Modello che pone la Terra immobile al centro dell'universo (Aristotele, Tolomeo)." },
    { t: "Eliocentrismo", d: "Modello che pone il Sole al centro e la Terra tra i pianeti in movimento (Copernico)." },
    { t: "Epiciclo", d: "Piccolo cerchio il cui centro si muove su un cerchio maggiore, usato da Tolomeo per spiegare i moti dei pianeti." },
    { t: "Induzione", d: "Ragionamento che dai casi particolari osservati ricava una legge generale." },
    { t: "Metodo ipotetico-deduttivo", d: "Si formula un'ipotesi, se ne deducono conseguenze e le si verifica con l'esperimento." },
    { t: "Idola", d: "Per Bacone, i quattro generi di pregiudizi che deformano la mente: tribù, caverna, foro, teatro." },
    { t: "Principio d'inerzia", d: "Un corpo non soggetto a forze mantiene il proprio stato di quiete o di moto rettilineo uniforme." },
    { t: "Sensate esperienze", d: "Per Galileo, le osservazioni e gli esperimenti che mostrano come funziona la natura." },
    { t: "Abiura", d: "Dichiarazione solenne con cui si rinnega una dottrina; quella di Galileo è del 1633." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa sostiene Copernico nel De revolutionibus?", options: ["Il Sole è al centro e la Terra gli gira attorno", "La Terra è immobile al centro", "L'universo è infinito"], answer: 0, explain: "È l'eliocentrismo, pubblicato nel 1543." },
      { type: "mc", q: "Quale legge di Keplero stabilisce che le orbite sono ellissi?", options: ["La prima", "La seconda", "La terza"], answer: 0, explain: "La prima legge: orbite ellittiche con il Sole in un fuoco." },
      { type: "tf", q: "Il cannocchiale di Galileo mostrò che Giove ha dei satelliti.", answer: true, explain: "Quattro satelliti, detti medicei (1610)." },
      { type: "mc", q: "Perché la nave di Galileo è un esempio importante?", options: ["Mostra che in moto rettilineo uniforme non percepiamo il moto: la Terra potrebbe muoversi senza che ce ne accorgiamo", "Mostra che le navi sono più veloci della luce", "Dimostra che il vuoto non esiste"], answer: 0, explain: "È l'argomento della relatività galileiana contro l'obiezione al moto della Terra." },
      { type: "mc", q: "Qual è il titolo dell'opera di Bacone che propone il nuovo metodo?", options: ["Novum organum", "Il Saggiatore", "Dialogo sopra i due massimi sistemi"], answer: 0, explain: "Novum organum, 1620." },
      { type: "text", q: "Come si chiamano, in Bacone, i pregiudizi che ostacolano la conoscenza (parola latina)?", answer: ["idola", "gli idola", "idoli"], explain: "Idola: della tribù, della caverna, del foro e del teatro." },
      { type: "tf", q: "Galileo morì sul rogo come Giordano Bruno.", answer: false, explain: "Galileo abiurò nel 1633 e visse agli arresti domiciliari fino al 1642; Bruno fu bruciato nel 1600." },
      { type: "mc", q: "Che cosa intende Galileo con «necessarie dimostrazioni»?", options: ["I ragionamenti matematici che completano le osservazioni", "Le prove di autorità", "Le citazioni dei testi antichi"], answer: 0, explain: "Accanto alle sensate esperienze servono dimostrazioni matematiche." },
      { type: "order", q: "Metti in ordine i passi del metodo galileiano.", items: ["Osservare il fenomeno", "Formulare un'ipotesi matematica", "Dedurre conseguenze verificabili", "Controllare con l'esperimento"], explain: "È il metodo ipotetico-deduttivo." },
      { type: "mc", q: "Che cosa vuol dire «sapere è potere» per Bacone?", options: ["Conoscere le leggi della natura permette di dominarla a vantaggio dell'uomo", "Chi sa comanda sugli ignoranti", "La conoscenza è inutile senza la fede"], answer: 0, explain: "La scienza ha un fine pratico: migliorare la vita umana." }
    ]
  }
});

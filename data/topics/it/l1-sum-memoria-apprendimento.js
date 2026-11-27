TOPIC('it', {
  id: "l1-sum-memoria-apprendimento",
  title: "Memoria e apprendimento",
  intro: "Perché ricordiamo un numero di telefono per pochi secondi ma l'odore della cucina della nonna per una vita? Perché i cani di Pavlov salivavano al suono di un campanello? In questa lezione studierai come funziona la <b>memoria</b> (sensoriale, a breve e a lungo termine, la curva dell'oblio di Ebbinghaus, i ricordi che si ricostruiscono) e le principali teorie dell'<b>apprendimento</b>: condizionamento classico (Pavlov), operante (Thorndike, Skinner), apprendimento per insight (Köhler) e osservativo (Bandura). Alla fine capirai anche <b>come usare questi studi per imparare meglio</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è la memoria",
      html: `<p>La <b>memoria</b> è la capacità di <b>codificare, conservare e recuperare</b> informazioni. Sono tre fasi distinte, e un ricordo può «fallire» in ciascuna:</p>
<ul>
<li><b>Codifica</b>: trasformare l'informazione in una forma che il cervello può immagazzinare (se non fai attenzione, non si codifica).</li>
<li><b>Immagazzinamento</b> (ritenzione): conservarla nel tempo.</li>
<li><b>Recupero</b>: richiamarla quando serve (a volte «ce l'ho sulla punta della lingua»).</li>
</ul>
<p>Il modello classico più noto è quello <b>multi-store</b> (a «magazzini multipli») proposto da <b>Richard Atkinson e Richard Shiffrin nel 1968</b>: l'informazione passa attraverso tre sistemi.</p>
<ol>
<li><b>Memoria sensoriale</b>: trattiene per <b>frazioni di secondo</b> (circa 1/4-1 s per le immagini, qualche secondo per i suoni) ciò che i sensi registrano. George Sperling (1960) mostrò con un esperimento sulle matrici di lettere che la «traccia iconica» contiene molto più di quanto riusciamo poi a riferire, ma svanisce rapidissima.</li>
<li><b>Memoria a breve termine</b> (MBT): conserva poche informazioni per pochi secondi. George <b>Miller</b> nel <b>1956</b> (articolo «Il magico numero sette, più o meno due») stimò la sua capacità in <b>7 ± 2 elementi</b> (<i>chunk</i>). Senza ripetizione dura circa 15-30 secondi (Peterson e Peterson, 1959).</li>
<li><b>Memoria a lungo termine</b> (MLT): capacità praticamente illimitata e durata anche di una vita.</li>
</ol>
<p>Per passare dalla MBT alla MLT servono <b>ripetizione</b> e, più ancora, <b>elaborazione del significato</b> (collegare le nuove informazioni a quelle già note).</p>`
    },
    {
      type: "svg",
      title: "Il modello di Atkinson e Shiffrin (1968)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="100" width="105" height="80" rx="12" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="62" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">STIMOLI</text>
<text x="62" y="150" font-size="14" text-anchor="middle" fill="#0f172a">dall'ambiente</text>
<rect x="150" y="100" width="130" height="80" rx="12" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="215" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">MEMORIA</text>
<text x="215" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">SENSORIALE</text>
<text x="215" y="166" font-size="14" text-anchor="middle" fill="#0f172a">~1 secondo</text>
<rect x="315" y="100" width="120" height="80" rx="12" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="375" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">BREVE</text>
<text x="375" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">TERMINE</text>
<text x="375" y="166" font-size="14" text-anchor="middle" fill="#0f172a">7 ± 2 chunk</text>
<rect x="470" y="100" width="120" height="80" rx="12" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="530" y="128" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">LUNGO</text>
<text x="530" y="146" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">TERMINE</text>
<text x="530" y="166" font-size="14" text-anchor="middle" fill="#0f172a">illimitata</text>
<line x1="115" y1="140" x2="148" y2="140" stroke="#0f172a" stroke-width="3"/><polygon points="148,140 138,133 138,147" fill="#0f172a"/>
<line x1="280" y1="130" x2="313" y2="130" stroke="#0f172a" stroke-width="3"/><polygon points="313,130 303,123 303,137" fill="#0f172a"/>
<text x="297" y="122" font-size="14" text-anchor="middle" fill="#0f172a">attenzione</text>
<line x1="435" y1="130" x2="468" y2="130" stroke="#0f172a" stroke-width="3"/><polygon points="468,130 458,123 458,137" fill="#0f172a"/>
<text x="452" y="122" font-size="14" text-anchor="middle" fill="#0f172a">ripetiz.</text>
<path d="M 530 182 Q 530 250 375 250 Q 375 220 375 182" fill="none" stroke="#6b21a8" stroke-width="3"/>
<polygon points="375,184 368,196 382,196" fill="#6b21a8"/>
<text x="450" y="272" font-size="14" text-anchor="middle" fill="#0f172a">recupero</text>
<text x="215" y="215" font-size="14" text-anchor="middle" fill="#991b1b">oblio</text>
<line x1="215" y1="182" x2="215" y2="200" stroke="#991b1b" stroke-width="2"/>
</svg>`,
      caption: "L'informazione passa per tre magazzini; solo una parte arriva alla memoria a lungo termine."
    },
    {
      type: "example",
      title: "Il trucco dei chunk",
      html: `<p>Prova a ricordare per qualche secondo: <b>1 4 9 2 1 7 7 6 1 8 6 1</b>. Sono dodici cifre, troppe per la MBT. Ora raggruppale in date che conosci: <b>1492</b> (la scoperta dell'America), <b>1776</b> (la dichiarazione d'indipendenza americana), <b>1861</b> (l'unità d'Italia). I «pezzi» da ricordare scendono da dodici a tre. Un <b>chunk</b> è un'unità significativa: una persona esperta di scacchi riconosce intere configurazioni di pezzi come un solo chunk, mentre un principiante vede i singoli pezzi. È il principio dei numeri di telefono scritti a gruppi.</p>`
    },
    {
      type: "text",
      title: "2. La memoria a lungo termine e la memoria di lavoro",
      html: `<p>La memoria a lungo termine non è un blocco unico. Si distinguono:</p>
<ul>
<li><b>Memoria dichiarativa</b> (esplicita): ricordi che possiamo «dichiarare» a parole. Si divide in <b>episodica</b> (episodi della nostra vita: la gita di ieri) e <b>semantica</b> (conoscenze generali: la capitale della Francia). La distinzione è di <b>Endel Tulving</b> (1972).</li>
<li><b>Memoria procedurale</b> (implicita): «saper fare» (andare in bicicletta, allacciarsi le scarpe, suonare uno strumento). Si esprime nell'azione, non nelle parole, ed è molto resistente.</li>
</ul>
<p>Nel <b>1974</b> <b>Alan Baddeley e Graham Hitch</b> criticarono l'idea di una semplice MBT e proposero il concetto di <b>memoria di lavoro</b>: un sistema attivo che <b>mantiene e manipola</b> informazioni mentre svolgiamo compiti (fare un calcolo a mente, seguire una frase). Comprende un «esecutivo centrale» che coordina e due sottosistemi: un <b>ciclo fonologico</b> (per i suoni e le parole) e un <b>taccuino visuo-spaziale</b> (per immagini e posizioni).</p>
<p>Un caso celebre: il paziente <b>H.M.</b> (Henry Molaison), operato nel 1953 per curare gravi crisi epilettiche, perse parte dell'ippocampo e non riuscì più a formare <b>nuovi ricordi dichiarativi</b>, pur conservando quelli antichi e la capacità di imparare nuove abilità motorie. Mostrò che l'<b>ippocampo</b> è essenziale per il consolidamento e che memoria dichiarativa e procedurale sono sistemi distinti.</p>`
    },
    {
      type: "widget",
      title: "Che tipo di memoria è?",
      widget: "classify",
      options: { groups: ["Episodica", "Semantica", "Procedurale"], items: [
        ["Ricordare la tua festa di compleanno dell'anno scorso", 0],
        ["Sapere che Roma è la capitale d'Italia", 1],
        ["Andare in bicicletta senza pensarci", 2],
        ["Ricordare dove eri durante l'ultima gita", 0],
        ["Conoscere il significato della parola «democrazia»", 1],
        ["Digitare sulla tastiera senza guardare i tasti", 2]
      ] },
      caption: "Sistema ogni ricordo nel suo «cassetto»."
    },
    {
      type: "text",
      title: "3. Dimenticare e ricostruire: Ebbinghaus, Bartlett, Loftus",
      html: `<p><b>Hermann Ebbinghaus</b> (1850-1909) fu il primo a studiare la memoria con esperimenti: nel <b>1885</b> imparò a memoria liste di <b>sillabe senza senso</b> (come «DAX», «BOK», per eliminare l'influenza del significato) e misurò quanto ne ricordava dopo intervalli diversi. Ottenne la <b>curva dell'oblio</b>: la perdita è <b>rapidissima nelle prime ore</b> e poi rallenta. Senza ripasso, in pochi giorni dimentichiamo gran parte del materiale; ripassare a intervalli crescenti rende il ricordo molto più duraturo (<b>effetto della ripetizione dilazionata</b>).</p>
<p>Effetti utili da conoscere: in una lista, ricordiamo meglio i primi elementi (<b>effetto primacy</b>, passati alla MLT grazie a più ripetizione) e gli ultimi (<b>effetto recency</b>, ancora nella MBT), peggio quelli centrali (curva di posizione seriale).</p>
<p>Ma il ricordo non è una videoregistrazione. Nel <b>1932</b> <b>Frederic Bartlett</b> fece leggere a studenti inglesi un racconto indigeno nordamericano, «La guerra dei fantasmi», e chiese di riscriverlo a distanza di tempo. Le versioni diventavano più brevi e <b>modificate secondo schemi culturali</b> inglesi (dettagli strani eliminati o «normalizzati»). La memoria è <b>ricostruttiva</b>: usa <b>schemi</b> e conoscenze per riempire i vuoti.</p>
<p>Nel <b>1974</b> <b>Elizabeth Loftus e John Palmer</b> mostrarono filmati di incidenti e chiesero a quale velocità andavano le auto quando «si sono <i>scontrate</i>» (<i>smashed</i>) o «si sono <i>toccate</i>» (<i>hit</i>). Con il verbo «scontrate» le stime erano più alte; una settimana dopo molti dicevano di aver visto vetri rotti, che non c'erano. Le <b>domande suggestive</b> possono alterare i ricordi: ecco perché le testimonianze oculari vanno trattate con cautela.</p>`
    },
    {
      type: "svg",
      title: "La curva dell'oblio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<line x1="70" y1="250" x2="570" y2="250" stroke="#0f172a" stroke-width="2"/>
<line x1="70" y1="30" x2="70" y2="250" stroke="#0f172a" stroke-width="2"/>
<text x="30" y="40" font-size="14" fill="#0f172a">100%</text>
<text x="40" y="255" font-size="14" fill="#0f172a">0%</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#0f172a">tempo trascorso dall'apprendimento</text>
<path d="M 70 40 C 110 140 150 175 230 195 C 340 215 450 225 560 230" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M 70 40 C 90 90 110 110 150 118 L 150 60 C 175 100 200 125 260 135 L 260 62 C 300 100 350 120 420 128 L 420 70 C 460 100 500 110 560 116" fill="none" stroke="#166534" stroke-width="4"/>
<text x="330" y="205" font-size="14" fill="#991b1b">senza ripasso</text>
<text x="400" y="60" font-size="14" fill="#166534">con ripassi dilazionati</text>
<text x="150" y="268" font-size="14" text-anchor="middle" fill="#0f172a">20 min</text>
<text x="260" y="268" font-size="14" text-anchor="middle" fill="#0f172a">1 giorno</text>
<text x="420" y="268" font-size="14" text-anchor="middle" fill="#0f172a">1 settimana</text>
</svg>`,
      caption: "Schema semplificato: senza ripasso l'oblio è rapido all'inizio; ogni ripasso «rialza» la curva e la rende più piatta (le etichette sono indicative)."
    },
    {
      type: "curiosity",
      title: "«Parola sulla punta della lingua»",
      html: `<p>Il fenomeno della «punta della lingua» (<i>tip of the tongue</i>) mostra che il ricordo può essere presente ma <b>non recuperabile</b> in quel momento: ne ricordiamo l'iniziale o il numero di sillabe. L'oblio, perciò, non è sempre perdita dell'informazione: spesso è <b>difficoltà di recupero</b>, che migliora con gli <b>indizi</b> (per questo i test a risposta multipla sono più facili di quelli a risposta aperta).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: la memoria",
      questions: [
        { type: "mc", q: "Quanti elementi può mantenere la memoria a breve termine secondo Miller (1956)?", options: ["2 ± 1", "7 ± 2", "20 ± 5", "illimitati"], answer: 1, explain: "Il «magico numero sette, più o meno due»." },
        { type: "mc", q: "Il lavoro di Bartlett («La guerra dei fantasmi», 1932) mostra che la memoria è...", options: ["una registrazione fedele", "ricostruttiva", "solo procedurale", "fissa dalla nascita"], answer: 1, explain: "Il ricordo viene ricostruito sulla base di schemi culturali e conoscenze." },
        { type: "tf", q: "La curva dell'oblio di Ebbinghaus mostra che si dimentica molto nelle prime ore e poi sempre più lentamente.", answer: true, explain: "La perdita è maggiore all'inizio, poi rallenta." }
      ]
    },
    {
      type: "text",
      title: "4. Imparare: il condizionamento classico (Pavlov)",
      html: `<p>L'<b>apprendimento</b> è un <b>cambiamento relativamente stabile del comportamento</b> dovuto all'esperienza. Le prime teorie scientifiche nascono con il comportamentismo.</p>
<p><b>Ivan Pavlov</b> (1849-1936), fisiologo russo (Nobel per la medicina nel 1904 per gli studi sulla digestione), notò che i cani di laboratorio salivavano non solo vedendo il cibo, ma già all'arrivo dell'inserviente. Condusse allora esperimenti sistematici (dal 1900 circa):</p>
<ol>
<li>Il cibo (<b>stimolo incondizionato</b>, SI) provoca la salivazione (<b>risposta incondizionata</b>, RI): riflesso innato.</li>
<li>Un suono di campanello (<b>stimolo neutro</b>) non provoca salivazione.</li>
<li>Si presenta ripetutamente il campanello <b>subito prima</b> del cibo (<b>appaiamento</b>).</li>
<li>Alla fine il solo campanello (<b>stimolo condizionato</b>, SC) provoca la salivazione (<b>risposta condizionata</b>, RC).</li>
</ol>
<p>Altri fenomeni: l'<b>estinzione</b> (se il campanello suona molte volte senza cibo, la risposta si spegne), la <b>generalizzazione</b> (suoni simili provocano la risposta), la <b>discriminazione</b> (il cane impara a distinguere suoni diversi).</p>
<p>Il condizionamento spiega le <b>reazioni emotive</b>: le fobie, il disgusto per un cibo che ci ha fatto stare male, l'ansia legata a un luogo. Nel 1920 <b>Watson e Rayner</b> condizionarono il «piccolo Albert» ad avere paura di un topo bianco accoppiandolo a un rumore forte (esperimento oggi inaccettabile sul piano etico).</p>`
    },
    {
      type: "svg",
      title: "Il condizionamento classico in tre fasi",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="100" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">1. Prima</text>
<rect x="15" y="45" width="170" height="40" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="100" y="71" font-size="14" text-anchor="middle" fill="#0f172a">Cibo (SI) → saliva (RI)</text>
<rect x="15" y="100" width="170" height="40" rx="8" fill="#e5e7eb" stroke="#4b5563" stroke-width="2"/>
<text x="100" y="126" font-size="14" text-anchor="middle" fill="#0f172a">Campanello → nulla</text>
<text x="300" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2. Durante</text>
<rect x="215" y="45" width="170" height="95" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Campanello + cibo</text>
<text x="300" y="98" font-size="14" text-anchor="middle" fill="#0f172a">ripetuti più volte</text>
<text x="300" y="121" font-size="14" text-anchor="middle" fill="#0f172a">→ saliva</text>
<text x="500" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">3. Dopo</text>
<rect x="415" y="45" width="170" height="95" rx="8" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<text x="500" y="75" font-size="14" text-anchor="middle" fill="#0f172a">Solo campanello (SC)</text>
<text x="500" y="98" font-size="14" text-anchor="middle" fill="#0f172a">→ saliva (RC)</text>
<text x="500" y="121" font-size="14" text-anchor="middle" fill="#0f172a">risposta appresa</text>
<line x1="188" y1="92" x2="212" y2="92" stroke="#0f172a" stroke-width="3"/><polygon points="212,92 202,86 202,98" fill="#0f172a"/>
<line x1="388" y1="92" x2="412" y2="92" stroke="#0f172a" stroke-width="3"/><polygon points="412,92 402,86 402,98" fill="#0f172a"/>
<rect x="60" y="175" width="480" height="95" rx="12" fill="#ffffff" stroke="#6b21a8" stroke-width="2"/>
<text x="300" y="205" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Esempio quotidiano</text>
<text x="300" y="230" font-size="14" text-anchor="middle" fill="#0f172a">Il rumore del trapano del dentista (stimolo neutro) viene</text>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#0f172a">associato al dolore: poi il solo rumore fa venire ansia.</text>
</svg>`,
      caption: "Per condizionare, lo stimolo neutro deve precedere in modo ravvicinato lo stimolo incondizionato."
    },
    {
      type: "text",
      title: "5. Il condizionamento operante: Thorndike e Skinner",
      html: `<p>Nel condizionamento classico l'organismo <i>subisce</i> un'associazione tra stimoli. Nel <b>condizionamento operante</b> (o strumentale) impara che le <b>conseguenze</b> di un'azione la rendono più o meno probabile.</p>
<p><b>Edward Thorndike</b> (1898) chiuse gatti affamati in «gabbie a puzzle» da cui si usciva premendo una leva. I gatti procedevano per <b>tentativi ed errori</b>; col tempo i tempi di fuga diminuivano. Formulò la <b>legge dell'effetto</b>: un comportamento seguito da conseguenze piacevoli tende a ripetersi, uno seguito da conseguenze spiacevoli tende a scomparire.</p>
<p><b>Burrhus F. Skinner</b> (1904-1990) perfezionò il metodo con la <b>«Skinner box»</b>: una gabbia in cui un ratto, premendo una leva, riceve cibo. Distinse:</p>
<ul>
<li><b>Rinforzo positivo</b>: si <b>aggiunge</b> qualcosa di gradevole dopo il comportamento (lode, premio) → il comportamento aumenta.</li>
<li><b>Rinforzo negativo</b>: si <b>toglie</b> qualcosa di sgradevole → il comportamento aumenta (allacciare la cintura per far smettere il «bip»). Non è una punizione!</li>
<li><b>Punizione</b>: una conseguenza sgradevole (o il ritiro di qualcosa di gradevole) → il comportamento diminuisce.</li>
</ul>
<p>Skinner studiò anche i <b>programmi di rinforzo</b>: un rinforzo dato <i>a volte</i> (intermittente, come le slot machine) rende il comportamento molto più resistente all'estinzione di uno dato sempre. Applicò queste idee all'<b>istruzione programmata</b> (macchine per insegnare, dagli anni Cinquanta).</p>`
    },
    {
      type: "widget",
      title: "Rinforzo o punizione?",
      widget: "classify",
      options: { groups: ["Rinforzo positivo", "Rinforzo negativo", "Punizione"], items: [
        ["Il prof. loda uno studente che ha risposto bene, e lui alza la mano più spesso", 0],
        ["Allacci la cintura per far smettere il «bip» fastidioso", 1],
        ["Ritiro il telefono a chi fa rumore in classe, per ridurre il rumore", 2],
        ["Un bambino riceve un adesivo ogni volta che riordina i giochi", 0],
        ["Prendi un antidolorifico e il mal di testa passa: lo riprenderai la prossima volta", 1],
        ["Una multa a chi parcheggia in doppia fila", 2]
      ] },
      caption: "Aggiungere o togliere? Il comportamento aumenta o diminuisce?"
    },
    {
      type: "example",
      title: "Condizionamento a scuola",
      html: `<p>Un ragazzo viene preso in giro una volta mentre legge ad alta voce. Ripetuta l'esperienza, già l'idea di leggere in classe gli provoca ansia (<b>condizionamento classico</b>: la lettura è stata associata all'umiliazione). Per evitare l'ansia comincia a «dimenticare» il libro a casa: il comportamento di evitamento è <b>rinforzato negativamente</b> perché fa cessare lo stato spiacevole (<b>condizionamento operante</b>). Un insegnante attento lavorerà per <b>estinguere</b> l'associazione, creando esperienze di lettura positive e graduali.</p>`
    },
    {
      type: "text",
      title: "6. Insight e apprendimento sociale",
      html: `<p>Non tutto l'apprendimento è per tentativi. Nel 1917 il gestaltista <b>Wolfgang Köhler</b>, osservando scimpanzé a Tenerife, vide lo scimpanzé <b>Sultan</b> che, non riuscendo a raggiungere una banana con un solo bastone, dopo una pausa <b>riflessiva</b> incastrò due canne e la raggiunse. Parlò di <b>insight</b> («intuizione», «ristrutturazione improvvisa» del problema): si capisce la soluzione tutta insieme, non per prove casuali.</p>
<p><b>Edward Tolman</b> mostrò che i ratti formano <b>mappe cognitive</b> dei labirinti, anche senza rinforzi (<b>apprendimento latente</b>): imparano senza che ciò si veda subito nel comportamento.</p>
<p><b>Albert Bandura</b> (esperimento della bambola Bobo, 1961) dimostrò l'<b>apprendimento per osservazione</b> (<i>modeling</i>): si impara guardando gli altri e le conseguenze delle loro azioni, senza provare direttamente. Perché ciò avvenga servono quattro processi: attenzione, memorizzazione, riproduzione, motivazione. Bandura introdusse poi (1977) il concetto di <b>autoefficacia</b>: la fiducia nella propria capacità di riuscire in un compito.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'apprendimento",
      intro: "Le teorie dell'apprendimento sono molte: ecco alcune analogie per orientarsi.",
      tabs: [
        { label: "🐕 Tre modi di imparare", html: `<p><b>Associare</b> (Pavlov): «quando senti il suono, arriva il cibo». <b>Provare e ricevere conseguenze</b> (Thorndike, Skinner): «se premo la leva, ricevo cibo». <b>Guardare e capire</b> (Bandura, Köhler): «ho visto cosa ha fatto lui» o «ho capito come funziona».</p>` },
        { label: "🧭 Il navigatore", html: `<p>Il comportamentista dice che per arrivare in un posto imparo una sequenza di svolte rinforzate (stimolo → risposta). Tolman direbbe che invece imparo una <b>mappa</b> della città: se una strada è chiusa trovo un'altra via. Entrambe le cose accadono, a seconda del compito.</p>` },
        { label: "🎮 Videogioco", html: `<p>Un videogioco usa tutti i principi: <b>rinforzo</b> (punti, livelli, premi intermittenti), <b>tentativi ed errori</b> (si muore, si riprova), <b>modeling</b> (si guardano i tutorial) e <b>insight</b> (si capisce il trucco del boss). Capire i meccanismi aiuta anche a progettare buone attività didattiche.</p>` }
      ]
    },
    {
      type: "text",
      title: "7. Imparare a imparare: che cosa funziona davvero",
      html: `<p>La ricerca su memoria e apprendimento ha prodotto indicazioni pratiche. Lo studio più citato (Dunlosky e collaboratori, 2013) ha confrontato dieci tecniche di studio:</p>
<ul>
<li><b>Molto efficaci</b>: la <b>pratica del richiamo</b> (<i>retrieval practice</i>: provare a ricordare senza guardare, interrogarsi, farsi interrogare) e la <b>ripetizione distribuita</b> (ripassare a intervalli crescenti, invece di studiare tutto in una notte).</li>
<li><b>Poco efficaci</b>: <b>rileggere</b> e <b>sottolineare</b> passivamente, che danno l'illusione di sapere (il testo ci sembra familiare) senza vero apprendimento.</li>
</ul>
<p>Nel 2006 Roediger e Karpicke mostrarono che studenti che leggevano un testo una volta e poi lo «richiamavano» a memoria ricordavano di più dopo una settimana di chi lo aveva riletto più volte: è l'<b>effetto del test</b> (<i>testing effect</i>). Altre indicazioni: <b>elaborare</b> il significato (Craik e Lockhart, 1972, «livelli di elaborazione»: pensare al significato fissa meglio del ripetere i suoni), <b>collegare</b> le nuove informazioni a ciò che già si sa, usare <b>immagini e mappe</b>, e <b>dormire</b>, perché il sonno favorisce il consolidamento dei ricordi.</p>`
    },
    {
      type: "decision",
      title: "Interrogazione fra tre giorni: che piano scegli?",
      html: `<p>Tra tre giorni hai una verifica di storia. Hai due ore al giorno disponibili. Puoi scegliere come usarle.</p>`,
      question: "Quale strategia rende di più, secondo le ricerche sulla memoria?",
      options: [
        { label: "Rileggere e sottolineare il capitolo tutto d'un fiato la sera prima.", outcome: "Dà un senso di familiarità, ma l'oblio rapido di Ebbinghaus cancella gran parte del materiale; il ricordo resta fragile." },
        { label: "Studiare ogni giorno, spezzando in blocchi, e interrogarti da solo senza guardare il libro.", outcome: "Unisce ripetizione distribuita e pratica del richiamo: sono le due strategie più efficaci. Fatica di più, ma il ricordo dura molto di più." },
        { label: "Copiare il capitolo parola per parola su un quaderno.", outcome: "È un lavoro lungo, ma poco elaborativo: si ripete senza capire e senza verificare cosa si ricorda." }
      ],
      answer: 1,
      explain: "I risultati di Ebbinghaus (curva dell'oblio), Roediger e Karpicke (effetto del test) e Dunlosky indicano la stessa strada: <b>distribuire lo studio nel tempo e interrogarsi attivamente</b>. Una difficoltà «desiderabile» (richiamare con fatica) rafforza la memoria."
    },
    {
      type: "conceptMap",
      title: "Mappa: memoria e apprendimento",
      nodes: [
        { id: "mem", label: "Memoria", x: 25, y: 8, color: "#3b82f6", html: "Codifica, immagazzinamento, recupero.", why: "Per ricordare serve che l'informazione sia entrata (attenzione), si sia conservata (consolidamento) e possa essere ritrovata (indizi). Un fallimento in ciascuna fase dà un tipo diverso di oblio." },
        { id: "mod", label: "Modelli", x: 8, y: 45, color: "#10b981", html: "Atkinson-Shiffrin (1968): sensoriale, MBT, MLT. Baddeley-Hitch (1974): memoria di lavoro.", why: "Nascono dall'idea cognitivista della mente come sistema che elabora informazioni; i casi clinici come H.M. e gli esperimenti sulla MBT mostrano che i sistemi sono separabili." },
        { id: "obl", label: "Oblio e ricostruzione", x: 40, y: 45, color: "#ef4444", html: "Curva di Ebbinghaus, schemi di Bartlett, suggestione di Loftus.", why: "Ebbinghaus (1885) misurò la perdita nel tempo; Bartlett (1932) e Loftus (1974) mostrarono che il ricordo si rimodella. Perciò testimonianze e ricordi vanno verificati." },
        { id: "app", label: "Apprendimento", x: 75, y: 8, color: "#f59e0b", html: "Cambiamento stabile del comportamento dovuto all'esperienza.", why: "Il comportamentismo lo studia con esperimenti sugli animali per ottenere dati osservabili. Poi il cognitivismo ricorda che dentro la mente avvengono processi (insight, mappe)." },
        { id: "cond", label: "Condizionamenti", x: 62, y: 45, color: "#8b5cf6", html: "Classico (Pavlov) e operante (Thorndike, Skinner).", why: "Il primo spiega le associazioni tra stimoli (emozioni, fobie), il secondo il ruolo delle conseguenze (premi, punizioni). Sono alla base della modifica del comportamento e di molte pratiche educative." },
        { id: "soc", label: "Insight e modeling", x: 90, y: 45, color: "#ec4899", html: "Köhler, Tolman, Bandura.", why: "Mostrano che si impara anche capendo (ristrutturazione) o osservando gli altri: le persone non sono solo «macchine stimolo-risposta»." },
        { id: "str", label: "Strategie di studio", x: 50, y: 82, color: "#0ea5e9", html: "Richiamo attivo, ripetizione distribuita, elaborazione, sonno.", why: "Applicano i risultati della ricerca: ciò che si ricorda meglio è ciò che si recupera attivamente e si rivede a intervalli, collegandolo a ciò che già si sa." }
      ],
      edges: [["mem", "mod", "descritta da"], ["mem", "obl", "include"], ["app", "cond", "si spiega con"], ["app", "soc", "si spiega con"], ["obl", "str", "orienta"], ["cond", "str", "orienta"]]
    },
    {
      type: "curiosity",
      title: "Il cane che non era solo un cane",
      html: `<p>Pavlov scoprì il condizionamento mentre studiava tutt'altro: la <b>digestione</b>. Il suo Nobel (1904) non riguarda i riflessi condizionati, scoperti poi durante gli studi sulla salivazione. Anche molte scoperte in psicologia sono nate da osservazioni «a margine» di un'altra ricerca. Un'altra curiosità: nei suoi esperimenti Pavlov non usava solo campanelli, ma anche metronomi, luci e persino stimoli tattili.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'apprendimento",
      questions: [
        { type: "mc", q: "Nel condizionamento classico di Pavlov il campanello diventa...", options: ["stimolo incondizionato", "stimolo condizionato", "rinforzo negativo", "punizione"], answer: 1, explain: "Dopo l'appaiamento con il cibo, il campanello è stimolo condizionato." },
        { type: "mc", q: "Il rinforzo negativo...", options: ["fa diminuire il comportamento", "toglie qualcosa di sgradevole e fa aumentare il comportamento", "equivale alla punizione", "aggiunge un premio"], answer: 1, explain: "Non va confuso con la punizione: il comportamento aumenta perché evita o fa cessare qualcosa di spiacevole." },
        { type: "tf", q: "Con l'insight (Köhler) il problema si risolve per tentativi ed errori casuali.", answer: false, explain: "L'insight è una ristrutturazione improvvisa del problema, non una serie di prove casuali." }
      ]
    }
  ],
  glossary: [
    { t: "Memoria", d: "Capacità di codificare, conservare e recuperare informazioni." },
    { t: "Chunk", d: "Unità significativa di informazione, che permette di ampliare la capacità della memoria a breve termine." },
    { t: "Memoria di lavoro", d: "Sistema che mantiene e manipola informazioni mentre si svolgono compiti (Baddeley e Hitch, 1974)." },
    { t: "Memoria episodica / semantica", d: "Ricordi di episodi personali / conoscenze generali (Tulving)." },
    { t: "Memoria procedurale", d: "Ricordo di abilità e di «saper fare»." },
    { t: "Curva dell'oblio", d: "Andamento della dimenticanza nel tempo, descritto da Ebbinghaus (1885)." },
    { t: "Schema", d: "Struttura di conoscenze che guida l'interpretazione e la ricostruzione dei ricordi." },
    { t: "Condizionamento classico", d: "Apprendimento per associazione tra stimoli (Pavlov)." },
    { t: "Condizionamento operante", d: "Apprendimento basato sulle conseguenze del comportamento (Thorndike, Skinner)." },
    { t: "Rinforzo / punizione", d: "Conseguenze che rendono più probabile / meno probabile un comportamento." },
    { t: "Insight", d: "Comprensione improvvisa della soluzione di un problema (Köhler)." },
    { t: "Modeling", d: "Apprendimento per osservazione di un modello (Bandura)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quali sono le tre fasi della memoria?", options: ["Codifica, immagazzinamento, recupero", "Ascolto, lettura, scrittura", "Percezione, attenzione, oblio", "Sensazione, condizionamento, rinforzo"], answer: 0, explain: "Un ricordo può fallire in ciascuna di queste fasi." },
      { type: "mc", q: "Chi propose il modello a magazzini multipli della memoria nel 1968?", options: ["Atkinson e Shiffrin", "Baddeley e Hitch", "Bartlett", "Pavlov"], answer: 0, explain: "Atkinson e Shiffrin: sensoriale, breve termine, lungo termine." },
      { type: "tf", q: "Ebbinghaus usò come materiale sillabe senza senso per eliminare l'influenza del significato.", answer: true, explain: "Nel 1885 usò sillabe come «DAX» per studiare la memoria in modo controllato." },
      { type: "mc", q: "Sapere andare in bicicletta è un esempio di memoria...", options: ["episodica", "semantica", "procedurale", "sensoriale"], answer: 2, explain: "È un «saper fare», memoria procedurale (implicita)." },
      { type: "mc", q: "Nell'esperimento di Loftus e Palmer (1974) il verbo «scontrate» faceva stimare...", options: ["velocità più alte", "velocità più basse", "la stessa velocità", "nessuna velocità"], answer: 0, explain: "Le domande suggestive modificano il ricordo." },
      { type: "text", q: "Come si chiama il fisiologo russo che studiò i riflessi condizionati nei cani?", answer: ["pavlov", "ivan pavlov", "ivan petrovic pavlov"], explain: "Ivan Pavlov." },
      { type: "mc", q: "Premere la cintura per far smettere un «bip» è un esempio di...", options: ["rinforzo negativo", "punizione", "condizionamento classico", "estinzione"], answer: 0, explain: "Si toglie uno stimolo sgradevole e il comportamento aumenta." },
      { type: "order", q: "Metti in ordine le fasi del condizionamento classico.", items: ["Il campanello non provoca salivazione", "Campanello e cibo vengono presentati insieme più volte", "Il solo campanello provoca salivazione"], explain: "Prima stimolo neutro, poi appaiamento, poi risposta condizionata." },
      { type: "mc", q: "Quale coppia di strategie è più efficace secondo le ricerche?", options: ["Richiamo attivo e ripetizione distribuita", "Rilettura e sottolineatura", "Copiatura e studio notturno", "Ascolto di musica e rilettura"], answer: 0, explain: "Sono le tecniche con maggior evidenza di efficacia." },
      { type: "tf", q: "Bandura mostrò che si può imparare anche solo osservando un modello.", answer: true, explain: "È l'apprendimento osservativo (esperimento della bambola Bobo, 1961)." }
    ]
  }
});

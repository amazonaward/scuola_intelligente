TOPIC('it', {
  id: "l1-sci-leggi-ponderali",
  title: "Le leggi ponderali e la teoria atomica",
  intro: "Alla fine del Settecento la chimica diventa una scienza grazie a un'idea semplice: <b>pesare</b>. Misurando con precisione le masse di ciò che reagisce, Lavoisier, Proust e Dalton scoprirono regole numeriche così precise da far nascere una domanda: perché la natura è così ordinata? La risposta fu una delle idee più potenti della storia: la materia è fatta di <b>atomi</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Prima di Lavoisier: il mistero del fuoco",
      html: `<p>Nel Settecento si pensava che un corpo bruciando perdesse una sostanza misteriosa, il <b>flogisto</b>. Ma c'era un problema: il ferro che arrugginisce o il metallo che si "calcina" in aria <b>aumenta</b> di peso. Come può un corpo che perde qualcosa diventare più pesante?</p>
<p>Antoine-Laurent de <b>Lavoisier</b> (1743–1794) trasformò la chimica in una scienza quantitativa: pesava sempre tutto, <b>prima e dopo</b>, e lavorava in recipienti chiusi, in modo che nessun gas potesse sfuggire. Capì che la combustione è una reazione con l'<b>ossigeno</b> dell'aria (gas isolato da Priestley nel 1774 e battezzato "ossigeno" da Lavoisier), e che il metallo pesa di più dopo perché ha <b>assorbito</b> ossigeno.</p>`
    },
    {
      type: "text",
      title: "La legge di conservazione della massa (Lavoisier, 1789)",
      html: `<p>Nel suo <i>Traité élémentaire de chimie</i> (1789) Lavoisier enunciò il principio che tradotto suona così:</p>
<p><b>"Nulla si crea, nulla si distrugge, tutto si trasforma."</b></p>
<p>In una reazione chimica in un <b>sistema chiuso</b>, la massa totale dei reagenti è uguale alla massa totale dei prodotti:</p>
<p><b>m(reagenti) = m(prodotti)</b></p>
<p>Perché a volte sembra di no? Se bruci un pezzo di carta, la cenere pesa meno della carta di partenza: ma il resto della massa è finito nei gas (CO₂ e vapore acqueo) che si sono dispersi nell'aria. Se invece bruci della lana di ferro, il peso <b>aumenta</b>, perché si lega all'ossigeno dell'aria.</p>
<p>Oggi sappiamo che la conservazione è verificata con grande precisione nelle reazioni chimiche; le variazioni di massa associate alla variazione di energia (E = mc²) sono troppo piccole per essere misurate. Solo nelle reazioni nucleari diventano rilevanti.</p>`
    },
    {
      type: "example",
      title: "Pesare una combustione",
      html: `<p>Bruciamo <b>12 g di carbonio</b> in un recipiente chiuso con ossigeno. Si formano <b>44 g di anidride carbonica</b>. Quanto ossigeno ha reagito?</p>
<ol>
<li>m(reagenti) = m(prodotti): m(C) + m(O₂) = m(CO₂).</li>
<li>12 g + m(O₂) = 44 g → m(O₂) = <b>32 g</b>.</li>
</ol>
<p>Un altro caso: 5,6 g di ferro reagiscono con zolfo producendo 8,8 g di solfuro di ferro. Lo zolfo consumato è 8,8 − 5,6 = <b>3,2 g</b>.</p>`
    },
    {
      type: "text",
      title: "La legge delle proporzioni definite (Proust, 1799)",
      html: `<p>Il chimico francese Joseph-Louis <b>Proust</b> (1754–1826) analizzò per anni campioni di composti di origine diversa e trovò un fatto sorprendente:</p>
<p><b>In un composto puro, gli elementi sono sempre combinati secondo lo stesso rapporto di massa, qualunque sia la provenienza del composto.</b></p>
<p>L'acqua è sempre formata da <b>1 parte di idrogeno e 8 parti di ossigeno</b> in massa (1 : 8): 9 g d'acqua contengono 1 g di H e 8 g di O; 90 g contengono 10 g di H e 80 g di O. Se metti 2 g di idrogeno con 8 g di ossigeno, reagisce solo 1 g di idrogeno: 1 g di H avanza, perché il rapporto va rispettato.</p>
<p>La legge fu accolta con molte discussioni: il chimico <b>Berthollet</b> sosteneva che le proporzioni potessero variare con le condizioni. Il dibattito durò quasi un decennio, ma i dati di Proust, sempre più precisi, prevalsero. Alcuni composti solidi, detti <b>non stechiometrici</b>, possono avere piccole variazioni (per esempio certi ossidi di ferro): non sono eccezioni alla legge, ma casi in cui la struttura cristallina ha dei "vuoti".</p>`
    },
    {
      type: "example",
      title: "Applicare la legge di Proust",
      html: `<p>L'ossido di calcio si forma da calcio e ossigeno in rapporto di massa <b>5 : 2</b> (cioè 5 g di Ca per 2 g di O). Quanto ossigeno serve per 35 g di calcio?</p>
<ol>
<li>Proporzione: 5 : 2 = 35 : x</li>
<li>x = 2 × 35 / 5 = <b>14 g di ossigeno</b>.</li>
<li>Si formano 35 + 14 = 49 g di ossido di calcio (conservazione della massa).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Il rapporto 1 : 8 nell'acqua",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="320" y="26" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Acqua da fonti diverse: sempre 1 parte di H ogni 8 di O</text>
<line x1="30" y1="240" x2="610" y2="240" stroke="#475569" stroke-width="2"/>
<rect x="60" y="232" width="34" height="8" fill="#9ca3af" stroke="#475569"/><rect x="94" y="176" width="34" height="64" fill="#ef4444" stroke="#475569"/>
<text x="94" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Fiume</text><text x="94" y="282" font-size="14" text-anchor="middle" fill="#1f2937">1 g H + 8 g O</text>
<rect x="240" y="224" width="34" height="16" fill="#9ca3af" stroke="#475569"/><rect x="274" y="112" width="34" height="128" fill="#ef4444" stroke="#475569"/>
<text x="274" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Pioggia</text><text x="274" y="282" font-size="14" text-anchor="middle" fill="#1f2937">2 g H + 16 g O</text>
<rect x="420" y="216" width="34" height="24" fill="#9ca3af" stroke="#475569"/><rect x="454" y="48" width="34" height="192" fill="#ef4444" stroke="#475569"/>
<text x="454" y="262" font-size="15" text-anchor="middle" fill="#1f2937" font-weight="bold">Mare</text><text x="454" y="282" font-size="14" text-anchor="middle" fill="#1f2937">3 g H + 24 g O</text>
<rect x="530" y="60" width="16" height="16" fill="#9ca3af" stroke="#475569"/><text x="552" y="74" font-size="14" fill="#1f2937">idrogeno</text>
<rect x="530" y="86" width="16" height="16" fill="#ef4444" stroke="#475569"/><text x="552" y="100" font-size="14" fill="#1f2937">ossigeno</text>
</svg>`,
      caption: "La barra rossa (ossigeno) è sempre 8 volte più alta di quella grigia (idrogeno), per ogni campione d'acqua."
    },
    {
      type: "text",
      title: "La legge delle proporzioni multiple (Dalton, 1803)",
      html: `<p>L'inglese John <b>Dalton</b> (1766–1844), insegnante e meteorologo, si chiese cosa succede quando <b>due elementi formano più composti diversi</b>. Esempio: carbonio e ossigeno formano il monossido (CO) e il biossido (CO₂).</p>
<table>
<tr><th>Composto</th><th>g di O per 12 g di C</th></tr>
<tr><td>CO (monossido di carbonio)</td><td>16 g</td></tr>
<tr><td>CO₂ (anidride carbonica)</td><td>32 g</td></tr>
</table>
<p>Il rapporto tra le masse di ossigeno che si combinano con la <b>stessa massa</b> di carbonio è 16 : 32 = <b>1 : 2</b>, un rapporto di <b>numeri interi piccoli</b>. Questa è la legge:</p>
<p><b>Quando due elementi si combinano in più modi per dare composti diversi, le masse di uno che si combinano con una massa fissa dell'altro stanno tra loro in rapporti esprimibili con numeri interi piccoli.</b></p>
<p>Altro esempio: azoto e ossigeno formano N₂O, NO, N₂O₃, NO₂, N₂O₅. Le masse di ossigeno per 28 g di azoto sono 16, 32, 48, 64 e 80 g: rapporto 1 : 2 : 3 : 4 : 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: le tre leggi",
      questions: [
        { type: "mc", q: "Quale legge afferma che in una reazione in un sistema chiuso la massa si conserva?", options: ["Proust", "Lavoisier", "Dalton"], answer: 1, explain: "È la legge di conservazione della massa di Lavoisier (1789)." },
        { type: "num", q: "L'acqua contiene H e O in rapporto di massa 1 : 8. Quanti grammi di ossigeno si combinano con 5 g di idrogeno?", answer: 40, unit: "g", explain: "5 × 8 = 40 g." },
        { type: "tf", q: "Secondo Dalton, se due elementi formano composti diversi, i rapporti tra le masse di un elemento che si combina con una quantità fissa dell'altro sono numeri interi piccoli.", answer: true, explain: "È l'enunciato della legge delle proporzioni multiple." }
      ]
    },
    {
      type: "text",
      title: "La teoria atomica di Dalton (1808)",
      html: `<p>Le tre leggi sono regole sperimentali: <b>descrivono</b> ma non <b>spiegano</b>. Dalton propose nel 1808 (<i>A New System of Chemical Philosophy</i>) un modello capace di spiegarle tutte. L'idea dell'atomo era antica (<b>Democrito</b> e Leucippo, V sec. a.C.), ma era una speculazione filosofica; Dalton la trasformò in una teoria che prediceva numeri. I suoi postulati:</p>
<ol>
<li>La materia è formata da <b>atomi</b> piccolissimi e indivisibili.</li>
<li>Gli atomi di uno stesso elemento sono <b>tutti uguali</b> (stessa massa, stesse proprietà); atomi di elementi diversi sono diversi.</li>
<li>Gli atomi <b>non si creano né si distruggono</b> nelle reazioni: si riorganizzano.</li>
<li>I composti si formano per unione di atomi di elementi diversi in <b>rapporti semplici e fissi</b> (un atomo di A con uno, due, tre atomi di B).</li>
</ol>
<p>Come spiegano le leggi:</p>
<ul>
<li><b>Lavoisier</b>: se gli atomi non si creano né distruggono, la massa totale non può cambiare.</li>
<li><b>Proust</b>: se ogni molecola d'acqua ha sempre la stessa struttura (2 H + 1 O), il rapporto di massa tra H e O è sempre lo stesso.</li>
<li><b>Dalton (multiple)</b>: CO e CO₂ differiscono per 1 atomo di O contro 2 atomi di O ogni atomo di C: da cui 1 : 2.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Un atomo in 3D",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Na"] },
      caption: "Il modello di Dalton vedeva gli atomi come sfere piene e indivisibili. Oggi sappiamo che hanno un nucleo e gli elettroni intorno: ma la sostanza della sua idea resta valida per la chimica."
    },
    {
      type: "text",
      title: "Che cosa è stato corretto dopo Dalton",
      html: `<p>La teoria di Dalton era una grande idea con qualche errore, che la scienza successiva ha corretto:</p>
<ul>
<li><b>Atomi indivisibili?</b> No: nel 1897 <b>J.J. Thomson</b> scoprì l'elettrone; nel 1911 <b>Rutherford</b> scoprì il nucleo; il neutrone fu scoperto da <b>Chadwick</b> nel 1932.</li>
<li><b>Atomi tutti uguali?</b> Non esattamente: gli <b>isotopi</b> dello stesso elemento hanno masse diverse (carbonio-12 e carbonio-14).</li>
<li><b>Formule dei composti</b>: Dalton pensava che l'acqua fosse HO. Nel 1811 <b>Avogadro</b> propose che i gas contengano lo stesso numero di molecole a parità di volume, temperatura e pressione e che gli elementi gassosi siano molecole biatomiche (H₂, O₂); ma fu ignorato per 50 anni, finché <b>Cannizzaro</b>, al congresso di Karlsruhe nel 1860, ne mostrò la forza. Da Gay-Lussac (1808) si sapeva che 2 volumi di idrogeno e 1 di ossigeno danno 2 di vapore: la formula H₂O spiega questo rapporto.</li>
</ul>
<p>Non tutti accettarono l'atomo: ancora nel 1900 illustri scienziati (come <b>Ostwald</b> e <b>Mach</b>) lo ritenevano solo uno strumento di calcolo. Il moto browniano, spiegato da Einstein nel 1905 e confermato da <b>Perrin</b> nel 1908, convinse anche gli scettici.</p>`
    },
    {
      type: "text",
      title: "Atomi, elementi, molecole e composti",
      html: `<p>Un <b>elemento</b> è formato da atomi con lo stesso <b>numero atomico</b> Z (numero di protoni). Gli elementi noti sono 118, e sono ordinati nella <b>tavola periodica</b> di <b>Mendeleev</b> (1869), che lasciò caselle vuote per elementi ancora da scoprire e ne predisse le proprietà: il gallio (1875) e il germanio (1886) le confermarono.</p>
<p>Una <b>molecola</b> è un gruppo di atomi legati: O₂, H₂O, CO₂. Un <b>composto</b> contiene atomi di elementi diversi.</p>
<p>La <b>massa atomica</b> si misura in <b>unità di massa atomica</b> (u): 1 u è la dodicesima parte della massa di un atomo di carbonio-12, circa 1,66 × 10⁻²⁷ kg. L'idrogeno pesa circa 1 u, il carbonio 12 u, l'ossigeno 16 u. La <b>massa molecolare</b> della molecola d'acqua è 2 × 1 + 16 = 18 u: ritrovi il rapporto 2 : 16 = 1 : 8 di Proust!</p>`
    },
    {
      type: "widget",
      title: "La tavola periodica",
      widget: "periodicTable",
      options: {},
      caption: "Tocca gli elementi: simbolo, numero atomico, massa e famiglia. Trova H, C, N, O, Na, Cl."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le leggi ponderali",
      intro: "Se i rapporti di massa ti confondono, prova a ragionare per atomi o per analogie.",
      tabs: [
        {
          label: "🧱 Con i mattoncini",
          html: `<p>Immagina atomi di H come mattoncini bianchi da 1 g e atomi di O come rossi da 16 g. Una molecola d'acqua è 2 bianchi + 1 rosso: 2 g + 16 g = 18 g, in rapporto 1 : 8. Qualunque sia il numero di molecole, ogni "costruzione" ha lo stesso rapporto: ecco la legge di Proust. E se costruisci "doppie" costruzioni (H₂O₂, acqua ossigenata: 2 bianchi + 2 rossi), il rapporto di O per la stessa massa di H raddoppia: legge delle multiple (H₂O: 16 g di O per 2 g di H; H₂O₂: 32 g di O per 2 g di H, quindi 1 : 2).</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" }, { x: -0.85, y: 0.6, z: 0, r: 0.3, color: "#e5e7eb", label: "H" } ], bonds: [[0,1],[0,2]] }
        },
        {
          label: "🥪 Il panino",
          html: `<p>Un panino richiede sempre 2 fette di pane e 1 di prosciutto: se hai 10 fette di pane e 10 di prosciutto, fai 5 panini e ti avanzano 5 fette di prosciutto. Allo stesso modo, 2 g di idrogeno e 8 g di ossigeno non reagiscono completamente: reagisce 1 g di H con 8 g di O e 1 g di H avanza. I rapporti fissi non sono una regola umana, ma la conseguenza del fatto che le molecole sono "panini" di atomi.</p>`
        },
        {
          label: "🗂️ Un po' di storia",
          html: `<p>Tre idee in dieci anni: <b>1789</b> (Lavoisier: la massa si conserva), <b>1799</b> (Proust: i rapporti sono fissi), <b>1803–1808</b> (Dalton: gli atomi spiegano tutto). Ognuna richiese strumenti più precisi: la bilancia di Lavoisier, costruita con grande precisione per l'epoca, permetteva di apprezzare differenze di pochi milligrammi. Così, passo dopo passo, la chimica passò dall'alchimia alla scienza esatta.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lavoisier e la fine di un genio",
      html: `<p>Lavoisier non fu solo un chimico: era anche un funzionario della <b>Ferme Générale</b>, l'ente privato che riscuoteva le tasse per la monarchia francese. Durante la Rivoluzione fu arrestato e ghigliottinato l'8 maggio 1794. Si dice che il matematico Lagrange abbia commentato: "Ci è voluto un attimo per tagliare quella testa, e forse non basteranno cento anni per produrne una uguale". Sua moglie, <b>Marie-Anne Paulze</b>, fu la sua collaboratrice: disegnava gli strumenti, traduceva testi inglesi e curò la pubblicazione delle sue opere.</p>`
    },
    {
      type: "curiosity",
      title: "Quanti atomi ci sono in una goccia d'acqua?",
      html: `<p>Una goccia d'acqua da circa 0,05 g contiene circa <b>1,7 × 10²¹ molecole</b>, cioè più di mille miliardi di miliardi. Un atomo ha un diametro dell'ordine di 10⁻¹⁰ m (un decimo di nanometro): in un capello (circa 70 µm) ce ne stanno in fila circa 700 000. Ecco perché per contare gli atomi i chimici usano la <b>mole</b>: 1 mole contiene 6,022 × 10²³ particelle (numero di Avogadro) ed ha una massa in grammi pari alla massa molecolare: 18 g di acqua sono una mole di molecole.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della teoria atomica: tocca i nodi e scopri il perché",
      nodes: [
        { id: "lav", label: "Conservazione della massa", x: 15, y: 8, color: "#3b82f6", html: "In un sistema chiuso la massa non cambia.", why: "<b>Lavoisier</b> (1789) la ottenne pesando con precisione reagenti e prodotti in recipienti chiusi, e così distrusse la teoria del flogisto: la combustione aggiunge ossigeno, non toglie flogisto." },
        { id: "prou", label: "Proporzioni definite", x: 50, y: 8, color: "#22c55e", html: "Un composto ha sempre la stessa composizione in massa.", why: "<b>Proust</b> (1799) lo dimostrò con analisi ripetute su carbonato di rame e altri composti naturali e artificiali, rispondendo alle obiezioni di Berthollet." },
        { id: "mult", label: "Proporzioni multiple", x: 85, y: 8, color: "#f59e0b", html: "Rapporti di numeri interi piccoli.", why: "<b>Dalton</b> (1803) la ricavò dai dati sui composti di carbonio e ossigeno e su quelli di azoto e ossigeno: proprio l'esistenza di numeri interi fu l'indizio che la materia fosse \"granulare\"." },
        { id: "dalton", label: "Teoria atomica di Dalton", x: 50, y: 38, color: "#a855f7", html: "Atomi indivisibili, identici per ogni elemento, che si riorganizzano.", why: "Dalton riprese l'idea dell'atomo di Democrito e Leucippo e la trasformò in teoria quantitativa nel 1808, associando a ciascun elemento una massa relativa (l'idrogeno = 1)." },
        { id: "avog", label: "Avogadro e Cannizzaro", x: 20, y: 62, color: "#06b6d4", html: "Molecole e volumi dei gas.", why: "Dalton non distingueva tra atomi e molecole, e dava formule sbagliate (acqua = HO). <b>Avogadro</b> (1811) risolse il problema, ma fu ascoltato solo dopo Cannizzaro (Karlsruhe, 1860)." },
        { id: "elettrone", label: "Elettrone, nucleo, neutrone", x: 50, y: 70, color: "#ef4444", html: "L'atomo ha una struttura interna.", why: "Thomson (1897), Rutherford (1911), Chadwick (1932): esperimenti sui raggi catodici e sulla diffusione di particelle alfa mostrarono che l'atomo non è indivisibile." },
        { id: "tavola", label: "Tavola periodica", x: 82, y: 62, color: "#14b8a6", html: "Gli elementi ordinati per numero atomico.", why: "<b>Mendeleev</b> (1869) ordinò gli elementi per massa atomica e proprietà, lasciando caselle vuote; <b>Moseley</b> (1913) mostrò che l'ordine vero è quello del numero atomico." },
        { id: "mole", label: "Mole", x: 50, y: 92, color: "#eab308", html: "Unità di quantità di sostanza.", why: "Permette di passare dalla scala dei singoli atomi (u) a quella dei grammi, perché 1 mole contiene lo stesso numero di particelle (6,022 × 10²³) per qualsiasi sostanza." }
      ],
      edges: [
        ["lav", "dalton", "spiegata da"],
        ["prou", "dalton", "spiegata da"],
        ["mult", "dalton", "spiegata da"],
        ["dalton", "avog", "corretta da"],
        ["dalton", "elettrone", "superata da"],
        ["avog", "tavola", "porta a"],
        ["elettrone", "tavola", "spiega"],
        ["avog", "mole", "porta a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: atomi",
      questions: [
        { type: "mc", q: "Quale postulato di Dalton è stato corretto dalle scoperte successive?", options: ["Gli atomi sono indivisibili", "La materia è fatta di atomi", "Gli atomi si riorganizzano nelle reazioni"], answer: 0, explain: "L'atomo ha una struttura interna: nucleo (protoni e neutroni) ed elettroni." },
        { type: "num", q: "Qual è la massa molecolare dell'acqua in u? (H = 1, O = 16)", answer: 18, unit: "u", explain: "2 × 1 + 16 = 18 u." },
        { type: "tf", q: "Dalton riteneva che la formula dell'acqua fosse H₂O.", answer: false, explain: "Pensava HO, perché non conosceva la natura biatomica dell'idrogeno e dell'ossigeno gassosi (Avogadro, 1811)." }
      ]
    }
  ],
  glossary: [
    { t: "Legge di Lavoisier", d: "In una reazione chimica in un sistema chiuso la massa dei reagenti è uguale a quella dei prodotti." },
    { t: "Legge di Proust", d: "In un composto gli elementi sono sempre combinati nello stesso rapporto di massa." },
    { t: "Legge di Dalton", d: "Le masse di un elemento che si combinano con una massa fissa di un altro sono in rapporto di numeri interi piccoli." },
    { t: "Atomo", d: "La più piccola particella di un elemento che ne conserva le proprietà chimiche." },
    { t: "Molecola", d: "Aggregato di due o più atomi legati." },
    { t: "Elemento", d: "Sostanza pura formata da atomi tutti con lo stesso numero atomico." },
    { t: "Composto", d: "Sostanza pura formata da atomi di elementi diversi in rapporto fisso." },
    { t: "Numero atomico (Z)", d: "Numero di protoni nel nucleo: identifica l'elemento." },
    { t: "Unità di massa atomica (u)", d: "Un dodicesimo della massa di un atomo di carbonio-12." },
    { t: "Isotopi", d: "Atomi dello stesso elemento con diverso numero di neutroni." },
    { t: "Mole", d: "Quantità di sostanza che contiene 6,022 × 10²³ particelle." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi enunciò la legge di conservazione della massa?", options: ["Dalton", "Lavoisier", "Proust"], answer: 1, explain: "Lavoisier, nel Traité élémentaire de chimie (1789)." },
      { type: "num", q: "10 g di magnesio bruciano formando 16,6 g di ossido di magnesio. Quanti grammi di ossigeno hanno reagito?", answer: 6.6, tol: 0.05, unit: "g", explain: "16,6 − 10 = 6,6 g, per la conservazione della massa." },
      { type: "num", q: "Il rapporto di massa H : O nell'acqua è 1 : 8. Quanto idrogeno c'è in 45 g di acqua?", answer: 5, unit: "g", explain: "1 parte su 9 è idrogeno: 45/9 = 5 g." },
      { type: "mc", q: "Quale legge spiega che CO e CO₂ contengono ossigeno in rapporto 1 : 2 per la stessa massa di carbonio?", options: ["Conservazione della massa", "Proporzioni definite", "Proporzioni multiple"], answer: 2, explain: "È la legge delle proporzioni multiple di Dalton." },
      { type: "tf", q: "Secondo Dalton gli atomi di un elemento sono tutti identici tra loro.", answer: true, explain: "Era un suo postulato; gli isotopi lo hanno poi reso più sfumato." },
      { type: "mc", q: "Chi scoprì l'elettrone nel 1897?", options: ["J.J. Thomson", "Rutherford", "Mendeleev"], answer: 0, explain: "Joseph John Thomson, studiando i raggi catodici." },
      { type: "text", q: "Come si chiama l'unità che contiene 6,022 × 10²³ particelle?", answer: ["mole", "la mole"], explain: "Una mole contiene il numero di Avogadro di particelle." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Conservazione della massa (Lavoisier)", "Proporzioni definite (Proust)", "Teoria atomica (Dalton)", "Congresso di Karlsruhe (Cannizzaro)"], explain: "1789, 1799, 1808, 1860." },
      { type: "mc", q: "Cos'ha dimostrato Rutherford nel 1911?", options: ["Che l'atomo ha un nucleo piccolo e denso", "Che gli atomi non esistono", "Che gli elettroni sono onde"], answer: 0, explain: "Con l'esperimento di diffusione delle particelle alfa su una lamina d'oro." },
      { type: "num", q: "Si mettono a reagire 4 g di idrogeno con 24 g di ossigeno (rapporto 1 : 8). Quanti grammi di idrogeno avanzano?", answer: 1, unit: "g", explain: "24 g di O reagiscono con 3 g di H: ne avanza 4 − 3 = 1 g." }
    ]
  }
});

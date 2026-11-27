TOPIC('it', {
  id: "l4-sci-redox",
  title: "Ossidoriduzioni ed elettrochimica",
  intro: "Il ferro arrugginisce, una mela tagliata diventa scura, il tuo telefono funziona grazie a una batteria e l'alluminio delle lattine si ottiene con una corrente elettrica enorme. Dietro tutto questo c'è un'unica idea: in certe reazioni gli <b>elettroni passano da una specie a un'altra</b>. Sono le reazioni di <b>ossidoriduzione (redox)</b>. Se si riesce a separare il punto in cui gli elettroni vengono ceduti da quello in cui vengono acquistati, e si fa passare la corrente attraverso un filo, nasce una <b>pila</b>; se invece si spinge una corrente esterna per forzare la reazione contraria si ha l'<b>elettrolisi</b>. In questa lezione impariamo a riconoscere le redox con il numero di ossidazione, a bilanciarle, a costruire e calcolare una pila e a usare le leggi di Faraday per l'elettrolisi.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Il numero di ossidazione",
      html: `<p>Per seguire gli elettroni serve una \"contabilità\". Il <b>numero di ossidazione</b> (n.o.) è la carica che avrebbe un atomo se gli elettroni di ogni legame fossero assegnati interamente all'atomo più elettronegativo. È un formalismo, non sempre una carica reale, ma funziona benissimo. Regole in ordine di priorità:</p>
<ol>
<li>Un elemento allo stato libero (Na, O₂, Cl₂, S₈, Fe…) ha n.o. = <b>0</b>.</li>
<li>Per uno ione monoatomico il n.o. è la sua carica (Na⁺ = +1, Cl⁻ = −1, Fe³⁺ = +3).</li>
<li>La somma dei n.o. in una molecola neutra è 0, in uno ione poliatomico è uguale alla carica dello ione.</li>
<li>Il <b>fluoro</b> è sempre −1. I metalli alcalini sono +1, gli alcalino-terrosi +2, l'alluminio +3.</li>
<li>L'<b>idrogeno</b> è +1 (−1 negli idruri metallici come NaH).</li>
<li>L'<b>ossigeno</b> è −2 (−1 nei perossidi come H₂O₂; +2 in OF₂).</li>
</ol>
<p><b>Esempi.</b> In H₂SO₄: 2(+1) + x + 4(−2) = 0 → x = <b>+6</b> per lo zolfo. In KMnO₄: (+1) + x + 4(−2) = 0 → Mn = <b>+7</b>. In Cr₂O₇²⁻: 2x + 7(−2) = −2 → x = <b>+6</b>. In NH₃: x + 3(+1) = 0 → N = <b>−3</b>. In CO₂: C = +4, in CH₄: C = −4: il carbonio attraversa tutti i numeri da −4 a +4 in composti diversi, ed è questa varietà a rendere possibile la chimica organica e il metabolismo.</p>`
    },
    {
      type: "text",
      title: "Ossidazione, riduzione, agente ossidante e riducente",
      html: `<p>Una reazione è una <b>redox</b> se in essa cambia il numero di ossidazione di almeno due elementi:</p>
<ul>
<li><b>Ossidazione</b>: una specie <b>perde</b> elettroni, il suo n.o. <b>aumenta</b>.</li>
<li><b>Riduzione</b>: una specie <b>acquista</b> elettroni, il suo n.o. <b>diminuisce</b>.</li>
</ul>
<p>Mnemonico: <b>OIL RIG</b> (Oxidation Is Loss, Reduction Is Gain), o in italiano \"<b>OSSIDAZIONE = perdita</b>\". Le due metà avvengono sempre insieme: gli elettroni persi da uno devono essere presi da un altro.</p>
<p>Chi si ossida è l'<b>agente riducente</b> (fa ridurre l'altro cedendogli elettroni); chi si riduce è l'<b>agente ossidante</b>. Esempio: <b>Zn + Cu²⁺ → Zn²⁺ + Cu</b>. Lo zinco passa da 0 a +2: si ossida, è il riducente. Il rame va da +2 a 0: si riduce, è l'ossidante. Si scrivono le due <b>semireazioni</b>:</p>
<p style="text-align:center">Zn → Zn²⁺ + 2 e⁻  (ossidazione)<br>Cu²⁺ + 2 e⁻ → Cu  (riduzione)</p>
<p>Mettendo una lamina di zinco in una soluzione blu di solfato di rame, la lamina si ricopre di rame rossastro e la soluzione si schiarisce: è una redox spontanea che si vede a occhio nudo. Tutte le <b>combustioni</b> sono redox (il combustibile si ossida, l'ossigeno si riduce) e così la <b>respirazione cellulare</b>: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O, in cui il glucosio perde elettroni e l'ossigeno li guadagna.</p>
<p>Esistono anche le <b>disproporzioni</b>, in cui la stessa specie si ossida e si riduce insieme: nell'acqua ossigenata, 2 H₂O₂ → 2 H₂O + O₂, l'ossigeno passa da −1 a −2 (riduzione) e a 0 (ossidazione).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: numeri di ossidazione",
      questions: [
        { type: "num", q: "Qual è il numero di ossidazione dello zolfo in SO₃?", answer: 6, tol: 0, explain: "x + 3(−2) = 0 → x = +6." },
        { type: "num", q: "Qual è il numero di ossidazione del cromo in K₂Cr₂O₇?", answer: 6, tol: 0, explain: "2(+1) + 2x + 7(−2) = 0 → 2x = 12 → x = +6." },
        { type: "mc", q: "Nella reazione 2 Mg + O₂ → 2 MgO, quale specie è l'agente riducente?", options: ["Mg", "O₂", "MgO", "Nessuna"], answer: 0, explain: "Il magnesio passa da 0 a +2: perde elettroni, si ossida, quindi riduce l'ossigeno." },
        { type: "tf", q: "In una reazione redox il numero totale di elettroni persi è uguale a quello acquistati.", answer: true, explain: "Gli elettroni non si creano né si distruggono: quelli ceduti dal riducente sono presi dall'ossidante." }
      ]
    },
    {
      type: "text",
      title: "Bilanciare una redox: il metodo delle semireazioni",
      html: `<p>Le redox spesso hanno coefficienti difficili da trovare per tentativi. Il <b>metodo ione-elettrone</b> procede così (in ambiente acido):</p>
<ol>
<li>Scrivi le due semireazioni, una di ossidazione e una di riduzione.</li>
<li>Bilancia gli atomi diversi da O e H.</li>
<li>Bilancia gli <b>O</b> aggiungendo <b>H₂O</b> dalla parte che ne ha bisogno.</li>
<li>Bilancia gli <b>H</b> aggiungendo <b>H⁺</b>.</li>
<li>Bilancia le <b>cariche</b> aggiungendo elettroni.</li>
<li>Moltiplica le semireazioni per rendere uguale il numero di elettroni e <b>somma</b>, semplificando.</li>
</ol>
<p>In ambiente basico, dopo aver bilanciato come in acido, si aggiunge a entrambi i lati tanti OH⁻ quanti sono gli H⁺ e li si combina in H₂O.</p>`
    },
    {
      type: "example",
      title: "Il permanganato che ossida il ferro(II)",
      html: `<p>In soluzione acida: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺. Il permanganato è viola intenso, l'Mn²⁺ è quasi incolore: il cambio di colore permette di fare <b>titolazioni redox</b> senza indicatore.</p>
<ol>
<li><b>Riduzione</b> (Mn da +7 a +2): MnO₄⁻ → Mn²⁺. Si aggiungono 4 H₂O a destra per gli ossigeni: MnO₄⁻ → Mn²⁺ + 4 H₂O. Si aggiungono 8 H⁺ a sinistra per gli idrogeni. Cariche: sinistra −1 + 8 = +7; destra +2: servono 5 e⁻ a sinistra. → <b>MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O</b>.</li>
<li><b>Ossidazione</b> (Fe da +2 a +3): <b>Fe²⁺ → Fe³⁺ + e⁻</b>.</li>
<li>Per pareggiare gli elettroni, la seconda va moltiplicata per 5 e si somma.</li>
<li><b>MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺</b>. Verifica delle cariche: a sinistra −1 + 8 + 10 = +17; a destra +2 + 15 = +17. ✓</li>
</ol>`
    },
    {
      type: "text",
      title: "La pila: da una reazione spontanea alla corrente",
      html: `<p>Quando Zn e Cu²⁺ si toccano, gli elettroni passano direttamente e l'energia si disperde come calore. Se invece si <b>separano</b> le due semireazioni in due recipienti collegati da un filo, gli elettroni sono costretti a passare per il circuito esterno: <b>questa corrente si può usare</b>. Una <b>pila</b> (o cella galvanica) è un dispositivo che trasforma l'energia chimica di una redox spontanea in energia elettrica.</p>
<p>La <b>pila Daniell</b> (John Frederic Daniell, 1836) è la più classica: una lamina di zinco in ZnSO₄ e una lamina di rame in CuSO₄, collegate da un filo e da un <b>ponte salino</b> (un tubo con una soluzione salina, p.es. KNO₃) che lascia passare gli ioni e chiude il circuito.</p>
<ul>
<li><b>Anodo</b> (polo −): dove avviene l'<b>ossidazione</b>. Zn → Zn²⁺ + 2 e⁻. La lamina si consuma.</li>
<li><b>Catodo</b> (polo +): dove avviene la <b>riduzione</b>. Cu²⁺ + 2 e⁻ → Cu. La lamina si ingrossa.</li>
<li>Gli elettroni vanno dall'anodo al catodo nel filo; nel ponte salino gli anioni migrano verso l'anodo e i cationi verso il catodo, mantenendo la neutralità.</li>
</ul>
<p>Per ricordarlo: <b>anodo = ossidazione</b> (iniziano con vocale); <b>catodo = riduzione</b> (iniziano con consonante).</p>
<p>Si descrive con la <b>notazione di cella</b>: <b>Zn | Zn²⁺ ∥ Cu²⁺ | Cu</b> (la doppia barra è il ponte salino; a sinistra l'anodo).</p>`
    },
    {
      type: "svg",
      title: "La pila Daniell",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="70" y="140" width="150" height="110" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<rect x="380" y="140" width="150" height="110" fill="#bfdbfe" stroke="#334155" stroke-width="3"/>
<rect x="130" y="80" width="26" height="150" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<rect x="440" y="80" width="26" height="150" fill="#d97706" stroke="#334155" stroke-width="2"/>
<path d="M143 80 L143 40 L453 40 L453 80" fill="none" stroke="#111827" stroke-width="3"/>
<circle cx="298" cy="40" r="18" fill="#fef9c3" stroke="#111827" stroke-width="2"/>
<text x="298" y="46" font-size="16" font-weight="bold" fill="#111827" text-anchor="middle">V</text>
<path d="M190 140 L190 110 L410 110 L410 140" fill="none" stroke="#7c3aed" stroke-width="10" stroke-linejoin="round"/>
<text x="300" y="104" font-size="14" font-weight="bold" fill="#7c3aed" text-anchor="middle">ponte salino</text>
<text x="145" y="272" font-size="15" font-weight="bold" fill="#1f2937" text-anchor="middle">Zn / Zn²⁺</text>
<text x="455" y="272" font-size="15" font-weight="bold" fill="#1f2937" text-anchor="middle">Cu / Cu²⁺</text>
<text x="100" y="125" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="middle">ANODO (−)</text>
<text x="100" y="140" font-size="14" fill="#b91c1c" text-anchor="middle">ossidazione</text>
<text x="500" y="125" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">CATODO (+)</text>
<text x="500" y="140" font-size="14" fill="#047857" text-anchor="middle">riduzione</text>
<text x="230" y="28" font-size="14" fill="#111827" text-anchor="middle">e⁻ →</text>
<text x="300" y="295" font-size="14" fill="#475569" text-anchor="middle">E° = +1,10 V: gli elettroni passano nel filo dall'anodo al catodo</text>
</svg>`,
      caption: "Zinco ceduto, rame depositato: la reazione spontanea Zn + Cu²⁺ → Zn²⁺ + Cu genera 1,10 V in condizioni standard."
    },
    {
      type: "text",
      title: "I potenziali standard e la forza elettromotrice",
      html: `<p>Ogni semireazione ha una tendenza a <b>ridursi</b>, misurata dal <b>potenziale standard di riduzione E°</b>, in volt. Il valore assoluto non è misurabile: si fissa per convenzione a zero quello dell'<b>elettrodo standard a idrogeno</b>: 2 H⁺ + 2 e⁻ → H₂ (1 M, 1 atm, 25 °C). Alcuni valori:</p>
<table>
<tr><th>Semireazione (riduzione)</th><th>E° (V)</th></tr>
<tr><td>F₂ + 2 e⁻ → 2 F⁻</td><td>+2,87</td></tr>
<tr><td>MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O</td><td>+1,51</td></tr>
<tr><td>Cl₂ + 2 e⁻ → 2 Cl⁻</td><td>+1,36</td></tr>
<tr><td>Ag⁺ + e⁻ → Ag</td><td>+0,80</td></tr>
<tr><td>Cu²⁺ + 2 e⁻ → Cu</td><td>+0,34</td></tr>
<tr><td><b>2 H⁺ + 2 e⁻ → H₂</b></td><td><b>0,00</b></td></tr>
<tr><td>Fe²⁺ + 2 e⁻ → Fe</td><td>−0,44</td></tr>
<tr><td>Zn²⁺ + 2 e⁻ → Zn</td><td>−0,76</td></tr>
<tr><td>Al³⁺ + 3 e⁻ → Al</td><td>−1,66</td></tr>
<tr><td>Na⁺ + e⁻ → Na</td><td>−2,71</td></tr>
<tr><td>Li⁺ + e⁻ → Li</td><td>−3,04</td></tr>
</table>
<p>Più E° è <b>alto</b>, più la specie ossidata è un <b>forte ossidante</b> (fluoro, permanganato). Più E° è <b>basso</b>, più la specie ridotta è un <b>forte riducente</b> (litio, sodio). Questa tabella è la <b>serie elettrochimica</b>.</p>
<p>La <b>forza elettromotrice</b> (f.e.m.) di una pila è:</p>
<p style="text-align:center"><b>E°<sub>pila</sub> = E°<sub>catodo</sub> − E°<sub>anodo</sub></b></p>
<p>Per Daniell: E° = +0,34 − (−0,76) = <b>+1,10 V</b>. Una reazione redox è <b>spontanea</b> se E° &gt; 0. Questo spiega la serie di reattività dei metalli: un metallo con E° più basso <b>sposta</b> dalle soluzioni uno con E° più alto (lo zinco sposta il rame, il rame non sposta lo zinco). I metalli con E° &lt; 0 si sciolgono negli acidi liberando idrogeno (zinco, ferro, alluminio); quelli con E° &gt; 0 (rame, argento, oro) no: per questo l'oro resiste agli acidi singoli e si scioglie solo nell'acqua regia.</p>`
    },
    {
      type: "text",
      title: "Quando le condizioni non sono standard: Nernst, e l'energia libera",
      html: `<p>Una pila con concentrazioni diverse da 1 M ha una f.e.m. diversa. Walther Nernst (1889) ricavò l'equazione che a 25 °C si scrive:</p>
<p style="text-align:center"><b>E = E° − (0,0592 / n) · log Q</b></p>
<p>dove n è il numero di elettroni scambiati e Q il quoziente di reazione. Per Daniell, con [Zn²⁺] = 1,0 M e [Cu²⁺] = 0,010 M: Q = [Zn²⁺]/[Cu²⁺] = 100; E = 1,10 − (0,0592/2) · 2 = 1,10 − 0,059 ≈ <b>1,04 V</b>. Man mano che la pila lavora, [Zn²⁺] cresce e [Cu²⁺] cala, Q aumenta e E scende: la pila <b>si scarica</b>. Quando E = 0 (Q = K) la pila è \"morta\": è l'equilibrio chimico. Ecco il legame con la lezione precedente.</p>
<p>Il lavoro elettrico che una pila può compiere è legato all'energia libera di Gibbs: <b>ΔG° = − n · F · E°</b>, con F = 96 485 C/mol (la <b>costante di Faraday</b>, carica di una mole di elettroni). Per Daniell: ΔG° = −2 · 96 485 · 1,10 ≈ <b>−212 kJ/mol</b>: ecco l'energia utilizzabile per ogni mole di zinco consumato. E poiché ΔG° = −RT ln K, si può ricavare anche la costante di equilibrio della reazione.</p>`
    },
    {
      type: "text",
      title: "Le pile e le batterie che usiamo",
      html: `<ul>
<li><b>Pila di Volta</b> (1800): dischi di zinco e di rame alternati con panni imbevuti di salamoia. La prima sorgente continua di corrente della storia; Alessandro Volta la costruì per dimostrare, contro Galvani, che l'elettricità non proveniva dagli animali ma dal contatto tra metalli diversi.</li>
<li><b>Pila a secco zinco-carbone / alcalina</b>: zinco (anodo) e biossido di manganese (catodo): ≈ 1,5 V.</li>
<li><b>Batteria al piombo</b> delle auto: Pb e PbO₂ in acido solforico; ogni cella dà circa 2 V, e le 6 celle in serie danno <b>12 V</b>. È <b>ricaricabile</b>: applicando una corrente esterna la reazione viene invertita.</li>
<li><b>Batteria litio-ione</b> di telefoni e auto elettriche: gli ioni Li⁺ vanno avanti e indietro tra grafite e ossido metallico (sviluppo di Whittingham, Goodenough e Yoshino, Nobel per la chimica 2019). Il litio ha l'E° più basso (−3,04 V) e la massa molare più bassa tra i metalli: tanta energia per poco peso.</li>
<li><b>Celle a combustibile</b>: l'idrogeno è ossidato all'anodo e l'ossigeno ridotto al catodo (2 H₂ + O₂ → 2 H₂O), producendo energia elettrica con solo acqua come scarto.</li>
</ul>`
    },
    {
      type: "text",
      title: "L'elettrolisi: costringere la reazione",
      html: `<p>Se una reazione redox <b>non è spontanea</b> (E° &lt; 0) si può forzare applicando una tensione esterna maggiore di |E°|. È l'<b>elettrolisi</b>: l'energia elettrica produce un cambiamento chimico. L'apparecchio è la <b>cella elettrolitica</b>. Attenzione ai segni, <b>opposti</b> a quelli della pila: nell'elettrolisi il <b>catodo è negativo</b> (si riduce) e l'<b>anodo è positivo</b> (si ossida). In entrambi i casi: <b>catodo = riduzione, anodo = ossidazione</b>.</p>
<ul>
<li><b>Sodio e cloro</b>: dall'elettrolisi di NaCl fuso si ottengono Na (al catodo: Na⁺ + e⁻ → Na) e Cl₂ (all'anodo: 2 Cl⁻ → Cl₂ + 2 e⁻). Humphry Davy isolò così sodio e potassio nel 1807, dai loro idrossidi fusi.</li>
<li><b>Acqua</b>: 2 H₂O → 2 H₂ + O₂ (H₂ al catodo, O₂ all'anodo, in volume 2 : 1). È la strada per produrre l'<b>idrogeno verde</b> se la corrente è rinnovabile.</li>
<li><b>Alluminio</b>: processo Hall-Héroult (1886): Al₂O₃ sciolto nella criolite fusa (Na₃AlF₆) a circa 950 °C. Richiede enormi quantità di elettricità: circa 13-15 kWh per kg di alluminio. Riciclare una lattina costa il 5% dell'energia di produzione primaria.</li>
<li><b>Galvanostegia</b>: ricoprire un oggetto con un metallo (cromatura, argentatura, zincatura).</li>
<li><b>Raffinazione del rame</b>: il rame grezzo (anodo) si scioglie e il rame puro si deposita al catodo.</li>
</ul>
<p>Michael Faraday (1833-34) scoprì le leggi quantitative: la massa di sostanza che si deposita o si libera a un elettrodo è <b>proporzionale alla carica elettrica</b> che passa nella cella (Q = I · t) e alla massa equivalente:</p>
<p style="text-align:center"><b>m = (M · I · t) / (n · F)</b></p>
<p>dove n è il numero di elettroni per atomo (o molecola) e F = 96 485 C/mol.</p>`
    },
    {
      type: "example",
      title: "Quanto rame si deposita?",
      html: `<p>Una corrente di 2,0 A passa per 30 minuti in una soluzione di CuSO₄. Quanto rame si deposita al catodo? (M(Cu) = 63,5 g/mol)</p>
<ol>
<li>Carica: Q = I · t = 2,0 · (30 · 60) = 3600 C.</li>
<li>Moli di elettroni: 3600 / 96 485 ≈ 0,0373 mol.</li>
<li>Cu²⁺ + 2 e⁻ → Cu: per ogni mol di Cu servono 2 mol di e⁻ → n(Cu) = 0,0373 / 2 ≈ 0,0187 mol.</li>
<li>m = 0,0187 · 63,5 ≈ <b>1,2 g</b>.</li>
</ol>
<p>Come vedi, ritroviamo il \"ponte delle moli\" della stechiometria, con in più un passaggio: dalla carica alle moli di elettroni.</p>`
    },
    {
      type: "widget",
      title: "Numeri di ossidazione: abbina",
      widget: "match",
      options: {
        pairs: [
          ["Mn in KMnO₄", "+7"],
          ["S in H₂SO₄", "+6"],
          ["N in NH₃", "−3"],
          ["O in H₂O₂", "−1"],
          ["C in CO₂", "+4"],
          ["Fe in Fe₂O₃", "+3"]
        ]
      },
      caption: "Applica le regole: la somma dei numeri di ossidazione deve dare la carica totale."
    },
    {
      type: "quiz",
      title: "Mini-quiz: pile ed elettrolisi",
      questions: [
        { type: "num", q: "Qual è la f.e.m. standard di una pila Zn | Zn²⁺ ∥ Ag⁺ | Ag? (E°: Zn²⁺/Zn = −0,76 V; Ag⁺/Ag = +0,80 V)", answer: 1.56, tol: 0.01, unit: "V", explain: "E° = E°catodo − E°anodo = 0,80 − (−0,76) = 1,56 V." },
        { type: "mc", q: "In una pila, all'anodo avviene...", options: ["l'ossidazione", "la riduzione", "la neutralizzazione", "la precipitazione"], answer: 0, explain: "Anodo = ossidazione, in ogni cella: pila o cella elettrolitica." },
        { type: "tf", q: "Il rame (E° = +0,34 V) si scioglie in acido cloridrico sviluppando idrogeno.", answer: false, explain: "Il rame ha E° maggiore di quello dell'idrogeno (0,00 V): non riduce H⁺, quindi non si scioglie negli acidi non ossidanti." }
      ]
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li><b>Ossidazione</b> = perdita di e⁻ (n.o. ↑), <b>riduzione</b> = acquisto di e⁻ (n.o. ↓). Ossidante si riduce, riducente si ossida.</li>
<li><b>Anodo = ossidazione, catodo = riduzione</b> (sempre). Nella pila anodo −, nell'elettrolisi anodo +.</li>
<li><b>E°<sub>pila</sub> = E°<sub>catodo</sub> − E°<sub>anodo</sub></b>; E° &gt; 0 → reazione spontanea; <b>ΔG° = −nFE°</b>.</li>
<li><b>Nernst</b>: E = E° − (0,0592/n) log Q (25 °C).</li>
<li><b>Faraday</b>: m = M·I·t / (n·F), con F = 96 485 C/mol.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le redox",
      intro: "Gli elettroni non si vedono: aiutati con queste analogie.",
      tabs: [
        { label: "💰 Il giro di denaro", html: "<p>Gli elettroni sono monete. Chi si ossida (riducente) <b>regala</b> monete, chi si riduce (ossidante) le <b>riceve</b>. Il bilancio deve tornare: tutte le monete regalate da qualcuno vengono incassate da qualcun altro. Il numero di ossidazione è il \"saldo\" nel conto di ogni atomo: se sale, ha perso monete; se scende, ne ha guadagnate.</p>" },
        { label: "💧 La cascata e il mulino", html: "<p>La reazione spontanea Zn + Cu²⁺ è una cascata: gli elettroni \"scendono\" dallo zinco (potenziale basso) al rame (potenziale alto). Se lasci l'acqua cadere liberamente (le due specie a contatto) l'energia si disperde in schiuma e calore. Se la fai passare per un mulino (il filo con una lampadina) fai lavoro utile: è la pila. La f.e.m. in volt è la \"altezza\" della cascata.</p>" },
        { label: "🔄 L'elettrolisi = pompare in salita", html: "<p>Nell'elettrolisi sei tu a spingere l'acqua <b>in salita</b>: con un generatore forzi gli elettroni verso un luogo in cui non andrebbero spontaneamente. Hai bisogno di una tensione maggiore di quella \"di discesa\" (|E°|). L'energia che spendi resta immagazzinata nei prodotti (Na, Cl₂, Al, H₂), pronta a essere restituita in una pila o in una combustione.</p>" },
        { label: "⚛️ L'atomo di sodio in 3D", html: "<p>Ruota il modello: il sodio ha un solo elettrone nel livello più esterno, ceduto con grande facilità (Na → Na⁺ + e⁻, n.o. da 0 a +1). Per questo i metalli alcalini sono ottimi riducenti e il sodio ha un E° molto basso (−2,71 V).</p>", scene: "atom", options: { elements: ["Na"] } }
      ]
    },
    {
      type: "curiosity",
      title: "Perché il ferro arrugginisce (e come evitarlo)",
      html: `<p>La ruggine è una redox elettrochimica: nelle zone dove il ferro è a contatto con acqua e ossigeno, il metallo funziona da anodo (Fe → Fe²⁺ + 2 e⁻) mentre l'ossigeno si riduce altrove (O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻); gli ioni formano infine ossidi e idrossidi di ferro(III) idrati, rossastri e friabili. Il sale accelera il processo, facendo da \"ponte salino\": ecco perché le auto arrugginiscono di più d'inverno e vicino al mare. Si previene verniciando, <b>zincando</b> (lo zinco ha E° più basso del ferro: si ossida al suo posto, anche se il rivestimento è graffiato) o collegando al metallo da proteggere un <b>anodo sacrificale</b> di zinco o magnesio, come si fa sugli scafi delle navi e sulle condotte interrate. Si stima che la corrosione costi alle economie moderne il 3-4% del PIL.</p>`
    },
    {
      type: "curiosity",
      title: "Perché le rane danzavano: Galvani e Volta",
      html: `<p>Nel 1780 Luigi Galvani, a Bologna, osservò che le zampe di una rana morta si contraevano se toccate con due metalli diversi, e attribuì il fenomeno a una \"elettricità animale\". Alessandro Volta, a Pavia, non fu d'accordo: secondo lui la corrente nasceva dal <b>contatto tra i metalli</b>, e le rane erano solo un rivelatore sensibile. Per dimostrarlo costruì nel 1799-1800 la <b>pila</b> (dischi di rame e zinco separati da panni umidi), e ne scrisse a Joseph Banks, presidente della Royal Society. In effetti aveva ragione sul meccanismo della pila, ma Galvani aveva intuito qualcosa di profondo: i nervi e i muscoli funzionano davvero con segnali elettrici, come vedrai nell'ultima lezione di questo percorso, quella sul sistema nervoso.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: ossidoriduzioni ed elettrochimica",
      nodes: [
        { id: "no", label: "Numero di ossidazione", x: 15, y: 12, color: "#2563eb", html: "Contabilità degli elettroni per atomo.", why: "Il concetto discende dalla teoria della valenza di Frankland (1852) e dalla regola dell'ottetto di Lewis (1916); il termine \"ossidazione\" nasce con Lavoisier, che identificò l'ossigeno come reagente nelle combustioni (1777)." },
        { id: "rx", label: "Ossidazione e riduzione", x: 50, y: 12, color: "#16a34a", html: "Perdita e acquisto di elettroni, sempre accoppiati.", why: "Dopo la scoperta dell'elettrone (J. J. Thomson, 1897) si capì che i fenomeni di ossidazione e riduzione sono trasferimenti di elettroni, non di ossigeno o idrogeno come si pensava prima." },
        { id: "pila", label: "Pila", x: 85, y: 12, color: "#f59e0b", html: "Redox spontanea separata nello spazio: produce corrente.", why: "Volta (1800) e poi Daniell (1836), che risolse il problema della polarizzazione con due semicelle separate e un setto poroso, poi sostituito dal ponte salino." },
        { id: "pot", label: "Potenziali standard", x: 30, y: 52, color: "#a855f7", html: "E° misura la tendenza a ridursi, rispetto all'idrogeno.", why: "Nernst (1889) e, dopo di lui, Latimer (1938) compilarono le tabelle dei potenziali; l'elettrodo a idrogeno fissa lo zero per convenzione." },
        { id: "gibbs", label: "ΔG = −nFE", x: 70, y: 52, color: "#ef4444", html: "Collega energia elettrica ed energia libera.", why: "Gibbs (1870s) definì l'energia libera; Nernst e Faraday completarono il collegamento: il lavoro elettrico massimo è nFE, e Faraday (1834) fissò la quantità di carica per mole." },
        { id: "el", label: "Elettrolisi", x: 50, y: 88, color: "#0ea5e9", html: "Elettricità → reazione non spontanea (Na, Cl₂, Al, H₂).", why: "Dopo la pila, Nicholson e Carlisle (1800) scomposero l'acqua; Davy (1807) isolò sodio e potassio. Faraday (1833-34) formulò le leggi quantitative ed è l'inventore dei termini anodo, catodo, ione ed elettrodo." }
      ],
      edges: [["no", "rx", "descrive"], ["rx", "pila", "se separata dà una"], ["pila", "pot", "si calcola con i"], ["pot", "gibbs", "è legato a"], ["gibbs", "el", "dice che serve energia per"], ["rx", "el", "se forzata è"]]
    }
  ],
  glossary: [
    { t: "Numero di ossidazione", d: "Carica formale che avrebbe un atomo se gli elettroni di legame fossero assegnati all'atomo più elettronegativo." },
    { t: "Ossidazione", d: "Perdita di elettroni, con aumento del numero di ossidazione." },
    { t: "Riduzione", d: "Acquisto di elettroni, con diminuzione del numero di ossidazione." },
    { t: "Agente ossidante", d: "Specie che si riduce e fa ossidare un'altra specie." },
    { t: "Agente riducente", d: "Specie che si ossida e fa ridurre un'altra specie." },
    { t: "Pila (cella galvanica)", d: "Dispositivo che produce corrente da una reazione redox spontanea." },
    { t: "Anodo e catodo", d: "Anodo: elettrodo in cui avviene l'ossidazione; catodo: quello in cui avviene la riduzione." },
    { t: "Ponte salino", d: "Collegamento ionico tra le due semicelle che mantiene la neutralità elettrica." },
    { t: "Potenziale standard (E°)", d: "Tendenza di una semireazione a ridursi in condizioni standard, rispetto all'idrogeno (0,00 V)." },
    { t: "Forza elettromotrice (f.e.m.)", d: "Differenza di potenziale massima di una pila: E°catodo − E°anodo." },
    { t: "Elettrolisi", d: "Processo in cui una corrente elettrica esterna forza una reazione redox non spontanea." },
    { t: "Costante di Faraday", d: "Carica di una mole di elettroni: 96 485 C/mol." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Qual è il numero di ossidazione del manganese in MnO₂?", answer: 4, tol: 0, explain: "x + 2(−2) = 0 → x = +4." },
      { type: "num", q: "Qual è il numero di ossidazione dell'azoto in HNO₃?", answer: 5, tol: 0, explain: "(+1) + x + 3(−2) = 0 → x = +5." },
      { type: "mc", q: "Nella reazione Fe + CuSO₄ → FeSO₄ + Cu, quale specie si riduce?", options: ["Cu²⁺", "Fe", "SO₄²⁻", "Nessuna"], answer: 0, explain: "Il rame passa da +2 a 0 acquistando elettroni: si riduce." },
      { type: "mc", q: "Nella semireazione MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O quanti elettroni servono per ridurre 1 ione MnO₄⁻?", options: ["5", "1", "7", "8"], answer: 0, explain: "Mn passa da +7 a +2: acquista 5 elettroni." },
      { type: "num", q: "Qual è la f.e.m. di una pila con catodo Cu²⁺/Cu (+0,34 V) e anodo Fe²⁺/Fe (−0,44 V)?", answer: 0.78, tol: 0.01, unit: "V", explain: "E° = 0,34 − (−0,44) = +0,78 V." },
      { type: "tf", q: "Nella pila Daniell la lamina di zinco si consuma e quella di rame aumenta di massa.", answer: true, explain: "Lo zinco all'anodo si ossida e passa in soluzione; sul rame al catodo si deposita Cu metallico." },
      { type: "mc", q: "In una cella elettrolitica, il catodo è il polo...", options: ["negativo, dove avviene la riduzione", "positivo, dove avviene l'ossidazione", "negativo, dove avviene l'ossidazione", "positivo, dove avviene la riduzione"], answer: 0, explain: "Nell'elettrolisi il catodo è negativo e vi avviene la riduzione (nella pila è positivo); l'anodo è sempre il polo dell'ossidazione." },
      { type: "num", q: "Quanti coulomb passano in una cella con 5,0 A per 10 minuti?", answer: 3000, tol: 0, unit: "C", explain: "Q = I · t = 5,0 · 600 = 3000 C." },
      { type: "num", q: "Quanti grammi di Ag (M = 108) si depositano con una carica di 9650 C da una soluzione di Ag⁺ (1 e⁻ per atomo)? (F = 96500 C/mol)", answer: 10.8, tol: 0.2, unit: "g", explain: "n(e⁻) = 9650 / 96 500 = 0,100 mol = n(Ag); m = 0,100 · 108 = 10,8 g." },
      { type: "order", q: "Ordina dal riducente più forte al più debole (E° crescenti per la semireazione di riduzione).", items: ["Li (−3,04 V)", "Na (−2,71 V)", "Zn (−0,76 V)", "Cu (+0,34 V)"], explain: "Più E° è basso, più la specie ridotta cede facilmente elettroni: litio > sodio > zinco > rame." }
    ]
  }
});

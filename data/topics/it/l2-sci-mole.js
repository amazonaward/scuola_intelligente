TOPIC('it', {
  id: "l2-sci-mole",
  title: "La mole e le formule chimiche",
  intro: "Un chimico non può contare gli atomi uno per uno: sono troppo piccoli e troppo numerosi (in un cucchiaino d'acqua ce ne sono più che granelli di sabbia su tutte le spiagge del mondo). Come si fa allora a dire «prendo esattamente due atomi di idrogeno per ogni atomo di ossigeno» se si può solo <b>pesare</b> la materia? La risposta è una grandezza ingegnosa, la <b>mole</b>, che fa da ponte tra il mondo invisibile degli atomi e quello visibile della bilancia. Con essa potrai calcolare quanto reagente serve, quanto prodotto si ottiene e come ricavare la formula di un composto sconosciuto.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "La massa degli atomi: l'unità di massa atomica",
      html: `<p>Nel primo anno hai visto le leggi ponderali di Lavoisier (conservazione della massa), Proust (proporzioni definite) e Dalton (proporzioni multiple), che portarono a immaginare la materia fatta di atomi. Ma quanto pesa un atomo? Un atomo di idrogeno ha una massa di circa 1,67 · 10⁻²⁷ kg: usare i chilogrammi sarebbe scomodo. Si è scelta allora un'unità adatta alla scala atomica, l'<b>unità di massa atomica</b> (simbolo <b>u</b>, o Da, dalton):</p>
<p style="text-align:center"><b>1 u = 1/12 della massa di un atomo di carbonio-12 ≈ 1,6605 · 10⁻²⁷ kg</b></p>
<p>Il carbonio-12 (6 protoni e 6 neutroni) è l'isotopo scelto come riferimento fin dal 1961. In questa scala un protone o un neutrone pesano circa 1 u, e quindi la <b>massa atomica</b> di un atomo è circa il suo numero di massa A.</p>
<p>I valori della tavola periodica, però, non sono interi: la <b>massa atomica relativa</b> di un elemento è la <b>media pesata</b> delle masse dei suoi isotopi naturali. Il cloro, per esempio, ha due isotopi principali: ³⁵Cl (circa 75,8%) e ³⁷Cl (circa 24,2%). La media è 0,758 · 34,97 + 0,242 · 36,97 ≈ <b>35,45 u</b>, il valore riportato in tavola.</p>
<p>Per un composto si parla di <b>massa molecolare</b> (o massa formula, per i composti ionici): è la somma delle masse atomiche di tutti gli atomi nella formula. Esempio: H₂O = 2 · 1,008 + 16,00 ≈ <b>18,02 u</b>; CO₂ = 12,01 + 2 · 16,00 = <b>44,01 u</b>; NaCl = 22,99 + 35,45 = <b>58,44 u</b>.</p>`
    },
    {
      type: "widget",
      title: "La tavola periodica: trova le masse atomiche",
      widget: "periodicTable",
      options: {},
      caption: "Tocca un elemento per vedere numero atomico e massa atomica: sono i dati che ti servono per tutti i calcoli di questa lezione."
    },
    {
      type: "text",
      title: "La mole e il numero di Avogadro",
      html: `<p>Un atomo di carbonio ha massa 12 u, una molecola d'acqua 18 u. Se prendessi 12 g di carbonio e 18 g d'acqua, avresti lo stesso numero di particelle in entrambi i casi? Sì! Perché il rapporto tra le masse è 12 : 18, lo stesso dei singoli atomi/molecole. Questa idea, nata dall'ipotesi di <b>Amedeo Avogadro</b> (1811) sui volumi dei gas, porta a definire la <b>mole</b>:</p>
<p style="text-align:center"><b>1 mole (mol) = quantità di sostanza che contiene N<sub>A</sub> = 6,022 · 10²³ entità elementari</b></p>
<p>Dal 2019 il Sistema Internazionale definisce la mole fissando il valore esatto <b>N<sub>A</sub> = 6,02214076 · 10²³ mol⁻¹</b>. Le «entità» possono essere atomi, molecole, ioni, elettroni: bisogna sempre specificare quali (1 mol di O₂ contiene 6,022 · 10²³ molecole, cioè il doppio di atomi).</p>
<p>Il nome «numero di Avogadro» fu dato in seguito, dopo le misure di <b>Jean Perrin</b> (primi del Novecento), che determinò N<sub>A</sub> con vari metodi indipendenti e ricevette il Nobel per la fisica nel 1926.</p>
<p>La mole è come una «dozzina» chimica: una dozzina sono sempre 12 oggetti, qualsiasi oggetto; una mole sono sempre 6,022 · 10²³ oggetti. La differenza è che una mole di atomi è davvero pesabile: <b>1 mol di atomi di carbonio-12 pesa esattamente 12 g</b> (definizione storica, ancora valida con ottima precisione).</p>`
    },
    {
      type: "svg",
      title: "La mole come ponte",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="mA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#334155"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="20" y="105" width="170" height="90" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="105" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Massa m</text>
<text x="105" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(grammi)</text>
<rect x="235" y="105" width="170" height="90" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<text x="320" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Moli n</text>
<text x="320" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(mol)</text>
<rect x="450" y="105" width="170" height="90" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="535" y="140" font-size="16" fill="#0f172a" text-anchor="middle" font-weight="bold">Particelle N</text>
<text x="535" y="165" font-size="15" fill="#0f172a" text-anchor="middle">(atomi, molecole)</text>
<line x1="190" y1="130" x2="235" y2="130" stroke="#334155" stroke-width="3" marker-end="url(#mA)"/>
<line x1="235" y1="175" x2="190" y2="175" stroke="#334155" stroke-width="3" marker-end="url(#mA)"/>
<line x1="405" y1="130" x2="450" y2="130" stroke="#334155" stroke-width="3" marker-end="url(#mA)"/>
<line x1="450" y1="175" x2="405" y2="175" stroke="#334155" stroke-width="3" marker-end="url(#mA)"/>
<text x="212" y="92" font-size="15" fill="#0f172a" text-anchor="middle">÷ M</text>
<text x="212" y="212" font-size="15" fill="#0f172a" text-anchor="middle">× M</text>
<text x="428" y="92" font-size="15" fill="#0f172a" text-anchor="middle">× N_A</text>
<text x="428" y="212" font-size="15" fill="#0f172a" text-anchor="middle">÷ N_A</text>
<text x="320" y="260" font-size="16" fill="#0f172a" text-anchor="middle">n = m / M &nbsp;&nbsp;&nbsp; N = n · N_A</text>
</g>
</svg>`,
      caption: "Dalla bilancia (grammi) alle moli, dalle moli alle particelle: la mole è il passaggio obbligato."
    },
    {
      type: "text",
      title: "Massa molare e conversioni",
      html: `<p>La <b>massa molare M</b> è la massa di <b>una mole</b> di sostanza, in <b>g/mol</b>. Il suo valore numerico coincide con la massa atomica o molecolare in u. Quindi:</p>
<ul>
<li>M(C) = 12,01 g/mol; M(H₂O) = 18,02 g/mol; M(CO₂) = 44,01 g/mol; M(NaCl) = 58,44 g/mol; M(glucosio C₆H₁₂O₆) = 6·12,01 + 12·1,008 + 6·16,00 ≈ 180,16 g/mol.</li>
</ul>
<p>Formule fondamentali (con n in mol, m in g, M in g/mol):</p>
<p style="text-align:center"><b>n = m / M</b> &nbsp;&nbsp;&nbsp; <b>m = n · M</b> &nbsp;&nbsp;&nbsp; <b>N = n · N<sub>A</sub></b></p>
<p><b>Volume molare dei gas.</b> Per un gas ideale in condizioni normali (0 °C, 1 atm) una mole occupa circa <b>22,4 L</b>, qualunque sia il gas (conseguenza dell'ipotesi di Avogadro: volumi uguali di gas diversi, nelle stesse condizioni di T e p, contengono lo stesso numero di molecole). Quindi n = V / 22,4 L/mol in condizioni normali.</p>
<p><b>Metodo per i problemi:</b> 1) scrivi la formula e calcola M; 2) converti il dato in moli; 3) usa il rapporto richiesto (particelle, volume, altra massa); 4) controlla unità e cifre significative.</p>`
    },
    {
      type: "example",
      title: "Pesare per contare",
      html: `<p><b>Acqua.</b> In 36 g di acqua ci sono n = 36/18 = <b>2 mol</b> di molecole, cioè N = 2 · 6,022·10²³ ≈ <b>1,2·10²⁴ molecole</b>; gli atomi totali sono tre volte tanti (2 H + 1 O per molecola): circa 3,6·10²⁴. Una sola molecola d'acqua ha massa 18/(6,022·10²³) ≈ 3,0·10⁻²³ g.</p>
<p><b>Zucchero.</b> Un cucchiaino di saccarosio (C₁₂H₂₂O₁₁, M = 342 g/mol) pesa circa 6,8 g: n = 6,8/342 ≈ 0,020 mol.</p>
<p><b>Gas.</b> 5,6 L di ossigeno O₂ in condizioni normali: n = 5,6/22,4 = 0,25 mol; m = 0,25 · 32 = <b>8 g</b>.</p>
<p><b>Soda caustica.</b> 10 g di NaOH (M = 23 + 16 + 1 = 40 g/mol): n = 10/40 = <b>0,25 mol</b>, cioè 1,5·10²³ unità formula.</p>`
    },
    {
      type: "curiosity",
      title: "Quanto è grande 6,022·10²³?",
      html: `<p>Se avessi una mole di granelli di sabbia, coprirebbero un'area grande come uno Stato per uno spessore di molti metri. Se ogni abitante della Terra (8 miliardi di persone) contasse un'unità al secondo, ci vorrebbero circa 2,4 milioni di anni per contare una mole. Eppure 18 g d'acqua, un sorso, contengono una mole di molecole. Le dimensioni dei numeri chimici ci ricordano quanto sia minuscolo l'atomo. Il primo ad avere l'intuizione che i gas fossero fatti di «molecole» in numero uguale a parità di volume fu Avogadro (1811), ma l'idea fu accettata solo dopo il Congresso di Karlsruhe del 1860, grazie a Stanislao Cannizzaro, che mostrò come distinguere pesi atomici e pesi molecolari.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: mole e massa molare",
      questions: [
        { type: "num", q: "Qual è la massa molare del biossido di carbonio CO₂ (C = 12, O = 16)?", answer: 44, tol: 0.1, unit: "g/mol", explain: "M = 12 + 2·16 = 44 g/mol." },
        { type: "num", q: "Quante moli sono contenute in 90 g di acqua (M = 18 g/mol)?", answer: 5, tol: 0.05, unit: "mol", explain: "n = m/M = 90/18 = 5 mol." },
        { type: "tf", q: "Una mole di O₂ e una mole di CO₂ contengono lo stesso numero di molecole.", answer: true, explain: "Una mole contiene sempre N_A = 6,022·10²³ entità, qualunque sia la sostanza." }
      ]
    },
    {
      type: "text",
      title: "Composizione percentuale e formule",
      html: `<p>La <b>composizione percentuale</b> dice quanti grammi di ciascun elemento ci sono in 100 g di composto:</p>
<p style="text-align:center"><b>% elemento = (n · massa atomica dell'elemento / massa molare del composto) · 100</b></p>
<p>dove n è il numero di atomi di quell'elemento nella formula. Esempio: per H₂O (M = 18,02): % H = 2,016/18,02 · 100 ≈ <b>11,19%</b>; % O = 16,00/18,02 · 100 ≈ <b>88,81%</b>. La somma è sempre 100%. Per Fe₂O₃ (M ≈ 159,7): % Fe = 2·55,85/159,7 ≈ 69,9%; % O ≈ 30,1%. Per NH₄NO₃ (nitrato d'ammonio, M = 80): % N = 28/80 = 35%, motivo per cui è un fertilizzante azotato.</p>
<p><b>Dalla composizione alla formula.</b> Se conosci la composizione percentuale di un composto sconosciuto, trovi la sua <b>formula minima</b> (il rapporto più semplice, in numeri interi, fra gli atomi):</p>
<ol>
<li>supponi di avere 100 g: le percentuali diventano grammi;</li>
<li>dividi ogni massa per la massa atomica ottenendo le moli;</li>
<li>dividi tutte le moli per la più piccola;</li>
<li>se i rapporti non sono interi, moltiplica per un fattore comune (2, 3...).</li>
</ol>
<p>La <b>formula molecolare</b> è un multiplo intero della minima: si trova dividendo la massa molare reale per la massa della formula minima. Esempio: un composto con 40,0% C, 6,7% H, 53,3% O ha moli C = 40/12 = 3,33; H = 6,7/1,008 = 6,65; O = 53,3/16 = 3,33. Dividendo per 3,33: C : H : O = 1 : 2 : 1, formula minima <b>CH₂O</b> (massa 30). Se la massa molare è 180 g/mol, il fattore è 180/30 = 6 e la formula molecolare è <b>C₆H₁₂O₆</b>: il glucosio. Se invece è 60 g/mol, è l'acido acetico C₂H₄O₂.</p>`
    },
    {
      type: "example",
      title: "Trovare la formula dell'ossido di ferro",
      html: `<p>Un minerale di ossido di ferro contiene 70,0% di ferro e 30,0% di ossigeno. In 100 g: Fe = 70,0/55,85 = 1,253 mol; O = 30,0/16,00 = 1,875 mol. Dividiamo per la più piccola (1,253): Fe = 1; O = 1,50. Il rapporto non è intero: moltiplichiamo per 2 → Fe : O = 2 : 3. La formula minima (e qui anche molecolare/formula) è <b>Fe₂O₃</b>, l'ematite, il principale minerale del ferro.</p>`
    },
    {
      type: "remember",
      title: "Le formule chiave",
      html: `<p><b>n = m/M</b> · <b>N = n·N<sub>A</sub></b> · <b>V = n · 22,4 L</b> (gas, condizioni normali) · <b>% = (n_atomi · M_atomo / M_composto) · 100</b>.</p>
<p>Errore tipico: dimenticare i pedici (in 1 mol di H₂O ci sono 2 mol di atomi di H) oppure confondere atomi e molecole (O contro O₂). Controlla sempre: se la massa è maggiore della massa molare, hai più di una mole.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Se la mole ti sembra astratta, guardala con queste immagini.",
      tabs: [
        { label: "🥚 Come una dozzina", html: "<p>Una dozzina di uova pesa circa 600 g, una dozzina di mattoni circa 30 kg: stesso numero, masse diverse. Una mole funziona allo stesso modo: una mole di acqua pesa 18 g, una mole di ferro 55,85 g, una mole di piombo 207 g. Il numero di particelle è identico, la massa cambia perché cambia la massa di ogni singola particella. Così se pesi 18 g di acqua e 55,85 g di ferro sai di avere esattamente lo stesso numero di molecole d'acqua e di atomi di ferro.</p>" },
        { label: "🧪 Laboratorio virtuale", html: "<p>Prova a «pesare» dei reagenti nel laboratorio interattivo: scegli le sostanze, osserva la bilancia, le moli e il reagente limitante, e verifica che la massa dei prodotti sia uguale a quella dei reagenti (conservazione della massa di Lavoisier).</p>", widget: "chemLab", options: {} },
        { label: "💧 La molecola in 3D", html: "<p>Ecco una molecola d'acqua. In 1 mol di H₂O ci sono 6,022·10²³ molecole come questa: ognuna ha 1 atomo di ossigeno e 2 di idrogeno. Contando gli atomi: 1 mol di H₂O contiene 2 mol di atomi di H e 1 mol di atomi di O. Moltiplicando per le masse molari: 2 · 1,008 + 16,00 = 18,02 g.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.55, color: "#ef4444", label: "O" }, { x: 0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" }, { x: -0.95, y: 0.6, z: 0, r: 0.32, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2]] } }
      ]
    },
    {
      type: "quiz",
      title: "Controlla: composizione e formule",
      questions: [
        { type: "num", q: "Qual è la percentuale in massa di idrogeno in CH₄ (C = 12, H = 1)?", answer: 25, tol: 0.2, unit: "%", explain: "M = 16; H = 4/16 = 25%." },
        { type: "mc", q: "Un composto contiene C e H in rapporto molare 1 : 2. Quale può essere la formula minima?", options: ["CH", "CH₂", "C₂H", "C₂H₂"], answer: 1, explain: "Rapporto 1 : 2 significa un C ogni due H: CH₂." },
        { type: "tf", q: "La formula minima e quella molecolare coincidono sempre.", answer: false, explain: "Coincidono solo se il composto non è un multiplo (es. CH₂O è la minima del glucosio C₆H₁₂O₆)." }
      ]
    },
    {
      type: "curiosity",
      title: "Che cosa si pesa quando si pesa un grammo?",
      html: `<p>Nel 2019 il Sistema Internazionale è stato ridefinito: il chilogrammo non è più legato a un cilindro di platino-iridio conservato a Sèvres, ma al valore fissato della costante di Planck, e la mole al valore esatto del numero di Avogadro. Per misurare N_A con grande precisione si usarono sfere di silicio-28 quasi perfette: contando gli atomi nel reticolo cristallino e misurando massa e volume della sfera, si ottenne il numero di atomi con incertezze di poche parti su cento milioni.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della mole",
      nodes: [
        { id: "uma", label: "Unità di massa atomica", x: 15, y: 12, color: "#2563eb", html: "1 u = 1/12 della massa del carbonio-12.", why: "Dalton propose i pesi atomici relativi all'idrogeno (1803); con il Novecento e gli spettrometri di massa si passò al carbonio-12 (1961) perché è più preciso e comodo, e rende M numericamente uguale in g/mol." },
        { id: "massa", label: "Massa atomica relativa", x: 50, y: 12, color: "#16a34a", html: "Media pesata degli isotopi naturali.", why: "Non è un numero intero perché gli elementi naturali sono miscele di isotopi; la scoperta degli isotopi (Soddy, Aston, primi del Novecento) spiegò i valori frazionari che avevano confuso i chimici." },
        { id: "avog", label: "Ipotesi di Avogadro", x: 85, y: 12, color: "#f59e0b", html: "Volumi uguali di gas, stesse condizioni: stesso numero di molecole.", why: "Gay-Lussac aveva trovato rapporti semplici tra i volumi dei gas che reagiscono; Avogadro (1811) li spiegò ipotizzando molecole biatomiche per gli elementi gassosi (H₂, O₂). Fu ignorata per 50 anni, finché Cannizzaro (1860) la rilanciò." },
        { id: "mole", label: "Mole e N_A", x: 50, y: 50, color: "#ef4444", html: "1 mol = 6,022·10²³ entità.", why: "Serve a contare per pesata: un gruppo di particelle abbastanza grande da avere massa misurabile. Perrin (1908-1913) dimostrò la realtà degli atomi misurando N_A con vari metodi indipendenti." },
        { id: "molare", label: "Massa molare", x: 15, y: 88, color: "#a855f7", html: "M in g/mol: n = m/M.", why: "È il fattore di conversione tra il mondo microscopico (u) e il macroscopico (g): per questo la mole fu definita in modo che 12 g di ¹²C siano una mole." },
        { id: "comp", label: "Composizione e formule", x: 85, y: 88, color: "#0ea5e9", html: "Percentuali in massa e formule minima e molecolare.", why: "È la legge delle proporzioni definite di Proust (1799) tradotta in moli: dalla composizione si risale al rapporto numerico tra gli atomi, come fece Dalton per dedurre le formule dei composti." }
      ],
      edges: [["uma", "massa", "misura la"], ["massa", "molare", "dà la"], ["avog", "mole", "porta a"], ["mole", "molare", "collega m a n con"], ["molare", "comp", "permette di calcolare la"], ["mole", "comp", "dà il rapporto atomico della"]]
    }
  ],
  glossary: [
    { t: "Unità di massa atomica (u)", d: "1/12 della massa di un atomo di carbonio-12, circa 1,66·10⁻²⁷ kg." },
    { t: "Massa atomica relativa", d: "Massa media di un atomo di un elemento, tenendo conto degli isotopi, in u." },
    { t: "Massa molecolare", d: "Somma delle masse atomiche degli atomi di una molecola." },
    { t: "Mole", d: "Quantità di sostanza che contiene 6,022·10²³ entità elementari." },
    { t: "Numero di Avogadro", d: "N_A = 6,02214076·10²³ mol⁻¹, numero di entità in una mole." },
    { t: "Massa molare", d: "Massa di una mole di sostanza, in g/mol." },
    { t: "Composizione percentuale", d: "Percentuale in massa di ogni elemento in un composto." },
    { t: "Formula minima", d: "Rapporto più semplice, in numeri interi, tra gli atomi di un composto." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Rispetto a quale riferimento è definita l'unità di massa atomica?", options: ["1/12 della massa del ¹²C", "La massa dell'idrogeno", "La massa dell'ossigeno-16", "La massa dell'elettrone"], answer: 0, explain: "1 u = 1/12 della massa di un atomo di carbonio-12." },
      { type: "num", q: "Calcola la massa molare dell'acido solforico H₂SO₄ (H = 1, S = 32, O = 16).", answer: 98, tol: 0.1, unit: "g/mol", explain: "2·1 + 32 + 4·16 = 98 g/mol." },
      { type: "num", q: "Quante moli sono contenute in 49 g di H₂SO₄ (M = 98 g/mol)?", answer: 0.5, tol: 0.01, unit: "mol", explain: "n = 49/98 = 0,5 mol." },
      { type: "num", q: "Quante molecole ci sono in 0,5 mol di sostanza? Esprimi in unità di 10²³ (N_A = 6,02·10²³).", answer: 3.01, tol: 0.05, unit: "×10²³", explain: "N = 0,5 · 6,02·10²³ = 3,01·10²³." },
      { type: "tf", q: "Il numero di atomi di idrogeno in 1 mol di H₂O è 6,022·10²³.", answer: false, explain: "Ogni molecola ha 2 atomi di H: in 1 mol di H₂O ci sono 2 mol di atomi di H, cioè 1,2·10²⁴ atomi." },
      { type: "num", q: "Qual è la massa di 3 mol di NaOH (M = 40 g/mol)?", answer: 120, tol: 0.5, unit: "g", explain: "m = n·M = 3 · 40 = 120 g." },
      { type: "num", q: "Quale volume occupano 2 mol di un gas in condizioni normali (22,4 L/mol)?", answer: 44.8, tol: 0.1, unit: "L", explain: "V = 2 · 22,4 = 44,8 L." },
      { type: "num", q: "Qual è la percentuale in massa di ossigeno in CO₂ (C = 12, O = 16)? Arrotonda all'unità.", answer: 73, tol: 0.5, unit: "%", explain: "O = 32/44 = 72,7% ≈ 73%." },
      { type: "mc", q: "Un composto è 40% C, 6,7% H e 53,3% O. Quale è la formula minima?", options: ["CHO", "CH₂O", "C₂H₄O", "CH₄O"], answer: 1, explain: "Moli: C 3,33, H 6,65, O 3,33 → rapporto 1 : 2 : 1 → CH₂O." },
      { type: "order", q: "Ordina per massa molare crescente.", items: ["H₂", "H₂O", "CO₂", "NaCl"], explain: "H₂ ≈ 2 < H₂O ≈ 18 < CO₂ ≈ 44 < NaCl ≈ 58,4 g/mol." }
    ]
  }
});

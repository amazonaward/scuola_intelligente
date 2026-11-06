TOPIC('it', {
  id: 'm2-sci-chimica',
  title: `Elementi, composti, reazioni`,
  intro: `Che cosa succede quando mescoli l'aceto con il bicarbonato? Perché il ferro arrugginisce? Dove "va a finire" la legna che brucia? In questa lezione entriamo nel mondo degli <b>atomi</b> e delle <b>molecole</b>, impariamo a scrivere e <b>bilanciare</b> le reazioni e a calcolare quanto prodotto si ottiene: sono i <b>rapporti stechiometrici</b>. E poi… si va in <b>laboratorio</b>!`,
  minutes: 50,
  sections: [
    {
      type: 'text', title: `1. La materia è fatta di atomi`,
      html: `<p>Tutto ciò che ci circonda è fatto di particelle piccolissime chiamate <b>atomi</b>. Un atomo è così piccolo che in un granello di sale ce ne sono circa un miliardo di miliardi.</p>
<p>Ogni atomo ha:</p>
<ul>
<li>un <b>nucleo</b> al centro, con <b>protoni</b> (carica +) e <b>neutroni</b> (senza carica);</li>
<li>intorno, gli <b>elettroni</b> (carica −), molto più leggeri, disposti su livelli di energia ("gusci").</li>
</ul>
<p>Il <b>numero atomico Z</b> è il numero di protoni: è la "carta d'identità" dell'elemento. Tutti gli atomi con 6 protoni sono carbonio, tutti quelli con 8 protoni sono ossigeno.</p>
<p>Un atomo è <b>neutro</b>: ha tanti elettroni quanti protoni.</p>`
    },
    {
      type: '3d', title: `L'atomo in 3D (modello di Bohr)`,
      scene: 'atom',
      caption: `Scegli un elemento: guarda come sono disposti gli elettroni nei gusci. Il primo guscio contiene al massimo 2 elettroni, il secondo 8.`,
      options: { elements: ['H', 'He', 'C', 'N', 'O', 'Na', 'Mg', 'Cl'] }
    },
    {
      type: 'text', title: `2. Elementi e composti`,
      html: `<p>Un <b>elemento</b> è una sostanza fatta da un solo tipo di atomo: ferro (Fe), ossigeno (O₂), oro (Au). Oggi conosciamo <b>118 elementi</b>, ordinati nella <b>tavola periodica</b>.</p>
<p>Un <b>composto</b> è una sostanza fatta da atomi di elementi diversi legati tra loro <b>in proporzioni fisse</b>: l'acqua (H₂O) ha sempre 2 atomi di idrogeno per ogni atomo di ossigeno.</p>
<p>Attenzione: un composto ha proprietà <b>completamente diverse</b> dagli elementi che lo formano. Il sodio (Na) è un metallo che esplode a contatto con l'acqua, il cloro (Cl₂) è un gas velenoso… ma insieme formano il <b>sale da cucina</b> (NaCl)!</p>
<p>Un <b>miscuglio</b> invece è solo un mescolamento (acqua e sabbia, aria): i componenti restano sé stessi e si possono separare con metodi fisici.</p>`
    },
    {
      type: 'widget', title: `La tavola periodica interattiva`,
      widget: 'periodicTable',
      caption: `Tocca un elemento per vedere numero atomico, massa e curiosità. Gli elementi della stessa colonna (gruppo) hanno comportamenti simili.`,
      options: {}
    },
    {
      type: 'text', title: `3. Le molecole`,
      html: `<p>Una <b>molecola</b> è un gruppo di atomi legati. La <b>formula chimica</b> dice quali atomi ci sono e quanti:</p>
<ul>
<li><b>H₂O</b> (acqua): 2 idrogeno + 1 ossigeno.</li>
<li><b>CO₂</b> (anidride carbonica): 1 carbonio + 2 ossigeno.</li>
<li><b>CH₄</b> (metano, il gas dei fornelli): 1 carbonio + 4 idrogeno.</li>
</ul>
<p>Il sale <b>NaCl</b> non forma molecole singole ma un <b>reticolo cristallino</b>: ioni Na⁺ e Cl⁻ alternati come in una scacchiera tridimensionale. Ecco perché i cristalli di sale sono cubetti!</p>`
    },
    {
      type: 'alternatives', title: `Le molecole in 3D`,
      intro: `Ruota le molecole: la forma conta! L'acqua è "piegata", l'anidride carbonica è dritta.`,
      tabs: [
        { label: `💧 H₂O acqua`, html: `<p>L'ossigeno (rosso) sta al centro, i due idrogeni formano un angolo di circa <b>104,5°</b>. Questa forma piegata rende l'acqua capace di sciogliere tantissime sostanze.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0.2, z: 0, r: 0.55, color: '#ef4444', label: 'O' }, { x: 0.76, y: -0.39, z: 0, r: 0.35, color: '#94a3b8', label: 'H' }, { x: -0.76, y: -0.39, z: 0, r: 0.35, color: '#94a3b8', label: 'H' }], bonds: [[0, 1], [0, 2]] } },
        { label: `🫧 CO₂`, html: `<p>Una molecola <b>lineare</b>: O=C=O. È il gas delle bollicine e quello che espiriamo. Le piante lo usano per la fotosintesi.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0, z: 0, r: 0.5, color: '#374151', label: 'C' }, { x: 1.16, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }, { x: -1.16, y: 0, z: 0, r: 0.5, color: '#ef4444', label: 'O' }], bonds: [[0, 1], [0, 2]] } },
        { label: `🔥 CH₄ metano`, html: `<p>Il carbonio al centro e 4 idrogeni ai vertici di un <b>tetraedro</b> (angoli di 109,5°): gli atomi si mettono il più lontano possibile tra loro.</p>`, scene: 'molecule', options: { atoms: [{ x: 0, y: 0, z: 0, r: 0.5, color: '#374151', label: 'C' }, { x: 0.63, y: 0.63, z: 0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: -0.63, y: -0.63, z: 0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: -0.63, y: 0.63, z: -0.63, r: 0.32, color: '#94a3b8', label: 'H' }, { x: 0.63, y: -0.63, z: -0.63, r: 0.32, color: '#94a3b8', label: 'H' }], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]] } },
        { label: `🧂 NaCl sale`, html: `<p>Un pezzetto del <b>reticolo cristallino</b>: Na⁺ (viola, piccoli) e Cl⁻ (verdi, grandi) si alternano lungo tutti gli spigoli del cubo.</p>`, scene: 'molecule', options: { atoms: [
          { x: -0.8, y: -0.8, z: -0.8, r: 0.3, color: '#8b5cf6', label: 'Na' }, { x: 0.8, y: -0.8, z: -0.8, r: 0.45, color: '#22c55e', label: 'Cl' },
          { x: -0.8, y: 0.8, z: -0.8, r: 0.45, color: '#22c55e', label: 'Cl' }, { x: 0.8, y: 0.8, z: -0.8, r: 0.3, color: '#8b5cf6', label: 'Na' },
          { x: -0.8, y: -0.8, z: 0.8, r: 0.45, color: '#22c55e', label: 'Cl' }, { x: 0.8, y: -0.8, z: 0.8, r: 0.3, color: '#8b5cf6', label: 'Na' },
          { x: -0.8, y: 0.8, z: 0.8, r: 0.3, color: '#8b5cf6', label: 'Na' }, { x: 0.8, y: 0.8, z: 0.8, r: 0.45, color: '#22c55e', label: 'Cl' }],
          bonds: [[0, 1], [0, 2], [1, 3], [2, 3], [4, 5], [4, 6], [5, 7], [6, 7], [0, 4], [1, 5], [2, 6], [3, 7]] } }
      ]
    },
    {
      type: 'quiz', title: `Mini-quiz: atomi e molecole`,
      questions: [
        { type: 'mc', q: `Il numero atomico Z indica il numero di…`, options: [`neutroni`, `protoni`, `molecole`], answer: 1, explain: `Z = numero di protoni nel nucleo: identifica l'elemento.` },
        { type: 'mc', q: `Quale di queste sostanze è un composto?`, options: [`O₂`, `Fe`, `H₂O`], answer: 2, explain: `H₂O contiene atomi di due elementi diversi (H e O).` },
        { type: 'tf', q: `Il sale da cucina ha le stesse proprietà del sodio e del cloro.`, answer: false, explain: `Un composto ha proprietà nuove: il sodio è esplosivo e il cloro velenoso, il sale no.` }
      ]
    },
    {
      type: 'text', title: `4. Le reazioni chimiche`,
      html: `<p>In una <b>reazione chimica</b> i legami tra gli atomi si rompono e se ne formano di nuovi: le sostanze di partenza (<b>reagenti</b>) si trasformano in sostanze nuove (<b>prodotti</b>).</p>
<p>Come capisci che è avvenuta una reazione? Cerca questi <b>indizi</b>:</p>
<ul>
<li>🫧 si formano <b>bolle</b> di gas;</li>
<li>🎨 cambia il <b>colore</b>;</li>
<li>🌫️ compare un solido che "intorbida" il liquido (<b>precipitato</b>);</li>
<li>🔥 si produce o si assorbe <b>calore</b>, luce o una fiamma.</li>
</ul>
<p>Una reazione si scrive con un'<b>equazione chimica</b>: reagenti a sinistra, freccia, prodotti a destra.</p>
<p style="text-align:center;font-size:1.2em"><b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b></p>
<p>I numeri davanti alle formule si chiamano <b>coefficienti</b>: dicono quante molecole partecipano.</p>`
    },
    {
      type: 'text', title: `5. Le due grandi leggi`,
      html: `<p><b>Legge di Lavoisier (conservazione della massa, 1789)</b>: "Nulla si crea, nulla si distrugge, tutto si trasforma". In una reazione in un recipiente chiuso la <b>massa dei reagenti è uguale alla massa dei prodotti</b>. Gli atomi non spariscono: si riorganizzano.</p>
<p><b>Legge di Proust (proporzioni definite, 1799)</b>: in un composto gli elementi sono combinati sempre nello <b>stesso rapporto di massa</b>. Nel solfuro di ferro (FeS) ci sono sempre <b>7 g di ferro ogni 4 g di zolfo</b>. Se metti più ferro, quello in più <b>avanza</b>.</p>
<p>Per questo un'equazione va <b>bilanciata</b>: a sinistra e a destra deve esserci lo stesso numero di atomi di ogni elemento.</p>`
    },
    {
      type: 'svg', title: `La bilancia di Lavoisier`,
      caption: `Prima e dopo la reazione la bilancia segna lo stesso valore, se il recipiente è chiuso.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="295" y="80" width="10" height="170" fill="#475569"/>
<rect x="220" y="250" width="160" height="16" rx="4" fill="#334155"/>
<rect x="90" y="76" width="420" height="8" rx="4" fill="#64748b"/>
<polygon points="300,60 290,80 310,80" fill="#334155"/>
<line x1="120" y1="84" x2="120" y2="150" stroke="#64748b" stroke-width="2"/>
<line x1="480" y1="84" x2="480" y2="150" stroke="#64748b" stroke-width="2"/>
<rect x="60" y="150" width="120" height="10" rx="3" fill="#94a3b8"/>
<rect x="420" y="150" width="120" height="10" rx="3" fill="#94a3b8"/>
<rect x="85" y="100" width="70" height="50" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<rect x="445" y="100" width="70" height="50" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<text x="120" y="130" font-size="14" text-anchor="middle" fill="#1e3a8a">4 g H₂</text>
<text x="120" y="146" font-size="14" text-anchor="middle" fill="#1e3a8a">32 g O₂</text>
<text x="480" y="132" font-size="14" text-anchor="middle" fill="#14532d">36 g H₂O</text>
<text x="120" y="190" font-size="17" text-anchor="middle" fill="#0f172a" font-weight="bold">PRIMA: 36 g</text>
<text x="480" y="190" font-size="17" text-anchor="middle" fill="#0f172a" font-weight="bold">DOPO: 36 g</text>
<text x="300" y="30" font-size="18" text-anchor="middle" fill="#7c3aed" font-weight="bold">2 H₂ + O₂ → 2 H₂O</text>
</svg>`
    },
    {
      type: 'example', title: `Esempio guidato 1: bilanciare un'equazione`,
      html: `<p>Bilanciamo la reazione dell'idrogeno con l'ossigeno: <b>H₂ + O₂ → H₂O</b></p>
<ol>
<li>Conto gli atomi: a sinistra H = 2, O = 2; a destra H = 2, O = 1. L'ossigeno non torna.</li>
<li>Metto un <b>2</b> davanti a H₂O: <b>H₂ + O₂ → 2 H₂O</b>. Ora a destra H = 4, O = 2.</li>
<li>L'idrogeno non torna più: metto un <b>2</b> davanti a H₂: <b>2 H₂ + O₂ → 2 H₂O</b>.</li>
<li>Verifico: sinistra H = 4, O = 2; destra H = 4, O = 2. ✅ Bilanciata!</li>
</ol>
<p>⚠️ Si cambiano solo i <b>coefficienti</b>, mai i numeretti piccoli delle formule: H₂O₂ non è acqua, è acqua ossigenata!</p>`
    },
    {
      type: 'text', title: `6. La mole e i rapporti stechiometrici`,
      html: `<p>Gli atomi sono troppo piccoli per contarli uno a uno. I chimici li contano "a pacchi", come le uova si contano a dozzine. Il pacco dei chimici si chiama <b>mole</b> e contiene <b>6,022 × 10²³</b> particelle (numero di Avogadro).</p>
<p>La <b>massa molare</b> è la massa di una mole, in grammi. Si calcola sommando le masse atomiche (dalla tavola periodica): H = 1, C = 12, O = 16, Na = 23, S = 32, Cl = 35,5, Fe = 56.</p>
<ul>
<li>H₂ → 2 × 1 = <b>2 g/mol</b></li>
<li>O₂ → 2 × 16 = <b>32 g/mol</b></li>
<li>H₂O → 2 × 1 + 16 = <b>18 g/mol</b></li>
<li>CO₂ → 12 + 2 × 16 = <b>44 g/mol</b></li>
</ul>
<p>I <b>coefficienti</b> di un'equazione bilanciata indicano i <b>rapporti in moli</b>: in 2 H₂ + O₂ → 2 H₂O, <b>2 moli</b> di idrogeno reagiscono con <b>1 mole</b> di ossigeno e danno <b>2 moli</b> di acqua. Questi sono i <b>rapporti stechiometrici</b> (dal greco <i>stoicheion</i> = elemento e <i>metron</i> = misura).</p>`
    },
    {
      type: 'example', title: `Esempio guidato 2: quanta acqua ottengo?`,
      html: `<p>Reazione: <b>2 H₂ + O₂ → 2 H₂O</b>. Ho <b>4 g di H₂</b> e <b>32 g di O₂</b>.</p>
<ol>
<li>Trasformo i grammi in moli: H₂ → 4 g ÷ 2 g/mol = <b>2 mol</b>; O₂ → 32 g ÷ 32 g/mol = <b>1 mol</b>.</li>
<li>Il rapporto richiesto è 2 : 1 ed è proprio quello che ho. Reagiscono tutti e due completamente.</li>
<li>Si formano 2 mol di H₂O → 2 × 18 g = <b>36 g</b>.</li>
<li>Controllo con Lavoisier: 4 g + 32 g = 36 g ✅</li>
</ol>`
    },
    {
      type: 'example', title: `Esempio guidato 3: il reagente limitante`,
      html: `<p>Ora ho <b>10 g di H₂</b> e sempre <b>32 g di O₂</b>.</p>
<ol>
<li>Moli: H₂ = 10 ÷ 2 = <b>5 mol</b>; O₂ = 32 ÷ 32 = <b>1 mol</b>.</li>
<li>1 mol di O₂ ha bisogno di 2 mol di H₂. Ne ho 5: l'idrogeno è in eccesso.</li>
<li>L'ossigeno finisce per primo: è il <b>reagente limitante</b>. Decide quanto prodotto si forma: 2 mol di H₂O = <b>36 g</b>.</li>
<li>Avanzano 5 − 2 = 3 mol di H₂ = <b>6 g</b> di idrogeno che non ha reagito.</li>
<li>Controllo: 10 + 32 = 42 g prima; 36 + 6 = 42 g dopo ✅</li>
</ol>
<p>Stesso ragionamento per il ferro e lo zolfo (Fe + S → FeS): con <b>14 g di Fe</b> e <b>10 g di S</b> reagiscono 14 g di Fe con 8 g di S (rapporto 7 : 4), si formano <b>22 g di FeS</b> e avanzano <b>2 g di zolfo</b>.</p>`
    },
    {
      type: 'widget', title: `🧪 Laboratorio online`,
      widget: 'chemLab',
      caption: `Prendi i reagenti dallo scaffale, scegli quanti grammi metterne e versali nel becher. Il laboratorio ti dice se avviene una reazione, mostra l'equazione bilanciata, le moli, il reagente limitante, i prodotti e verifica la conservazione della massa.`,
      options: {}
    },
    {
      type: 'remember', title: `Esperimenti da provare nel laboratorio`,
      html: `<ul>
<li>🫧 <b>Bicarbonato + aceto</b>: NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂ (bolle di anidride carbonica). Se il becher è aperto il gas scappa e la bilancia segna meno: perché?</li>
<li>🔩 <b>Ferro + zolfo</b>: Fe + S → FeS. Prova 56 g + 32 g, poi 56 g + 50 g: che cosa avanza?</li>
<li>⚖️ <b>Idrossido di sodio + acido cloridrico</b>: NaOH + HCl → NaCl + H₂O (neutralizzazione: si forma sale e acqua e si scalda).</li>
<li>🌫️ <b>Nitrato d'argento + cloruro di sodio</b>: AgNO₃ + NaCl → AgCl↓ + NaNO₃ (precipitato bianco).</li>
<li>🔥 <b>Combustione del metano</b>: CH₄ + 2 O₂ → CO₂ + 2 H₂O.</li>
<li>✨ <b>Magnesio + ossigeno</b>: 2 Mg + O₂ → 2 MgO (luce bianchissima).</li>
<li>🎈 <b>Zinco + acido cloridrico</b>: Zn + 2 HCl → ZnCl₂ + H₂ (si libera idrogeno).</li>
</ul>
<p>⚠️ Sono esperimenti <b>virtuali</b>: molti di questi reagenti sono pericolosi e si usano solo in un vero laboratorio, con un insegnante e le protezioni.</p>`
    },
    {
      type: 'curiosity', title: `Lo sapevi che… quando bruci la legna non "sparisce" niente?`,
      html: `<p>Un ciocco di legna da 1 kg lascia solo pochi grammi di cenere. Sembra che la massa sia sparita, ma non è così: il carbonio e l'idrogeno del legno si sono uniti all'<b>ossigeno dell'aria</b> e sono diventati <b>CO₂ e vapore acqueo</b>, che sono volati via. Se pesassi anche tutti i gas, la massa dei prodotti sarebbe addirittura <b>maggiore</b> di quella della legna, perché comprende l'ossigeno preso dall'aria!</p>`
    },
    {
      type: 'curiosity', title: `Lo sapevi che… Mendeleev lasciò dei buchi nella tavola?`,
      html: `<p>Nel 1869 Dmitrij Mendeleev ordinò i 63 elementi conosciuti e si accorse che le proprietà si ripetevano a intervalli regolari. Dove i conti non tornavano lasciò delle <b>caselle vuote</b> e predisse le proprietà di elementi ancora sconosciuti. Pochi anni dopo furono scoperti il <b>gallio</b> (1875) e il <b>germanio</b> (1886), con le proprietà quasi identiche a quelle che lui aveva previsto!</p>`
    },
    {
      type: 'alternatives', title: `Altri modi per capire la stechiometria`,
      intro: `Se moli e coefficienti ti confondono, prova a pensarli così.`,
      tabs: [
        {
          label: `🥞 Una ricetta di cucina`,
          html: `<p>Ricetta delle crêpes: <b>2 uova + 1 tazza di latte → 4 crêpes</b>. È un'equazione bilanciata!</p>
<ul>
<li>Con 6 uova e 3 tazze di latte → 12 crêpes (tutto triplicato).</li>
<li>Con 6 uova e <b>1 sola tazza</b> di latte → solo 4 crêpes: il latte è il <b>reagente limitante</b>, e avanzano 4 uova.</li>
</ul>
<p>Le moli sono come le "dozzine" della ricetta: contano gli ingredienti a gruppi.</p>`
        },
        {
          label: `🧱 Mattoncini da costruzione`,
          html: `<p>Immagina atomi come mattoncini: <b>bianchi</b> = H, <b>rossi</b> = O. Una molecola d'acqua = 1 rosso + 2 bianchi.</p>
<p>Se hai 10 bianchi e 3 rossi, quante "acque" costruisci? Ogni acqua usa 2 bianchi: con 10 bianchi ne faresti 5, ma con 3 rossi solo 3. Ne costruisci <b>3</b> e avanzano 4 bianchi. I mattoncini non spariscono mai: a fine gioco li conti tutti (Lavoisier!).</p>`,
          scene: 'blocks', options: { mode: 'array', a: 3, b: 3 }
        },
        {
          label: `⚖️ La bilancia a due piatti`,
          html: `<p>Bilanciare un'equazione è come mettere in equilibrio una bilancia: su ogni piatto deve esserci lo stesso numero di atomi di ogni tipo. Puoi aggiungere <b>molecole intere</b> (i coefficienti), ma non puoi "tagliare" una molecola a metà né trasformare un atomo in un altro.</p>
<p>Prova con il metano: CH₄ + O₂ → CO₂ + H₂O. A destra servono 2 H₂O per avere 4 H; allora a destra ci sono 4 O e a sinistra servono 2 O₂. Risultato: <b>CH₄ + 2 O₂ → CO₂ + 2 H₂O</b>.</p>`
        }
      ]
    },
    {
      type: 'conceptMap', title: `Mappa: come abbiamo scoperto gli atomi`,
      nodes: [
        { id: 'democrito', label: `Democrito (V sec. a.C.)`, x: 12, y: 12, color: '#a855f7', html: `Il filosofo greco immaginò che la materia fosse fatta di particelle indivisibili: "átomos" = che non si può tagliare.`, why: `Era solo un ragionamento, senza esperimenti: se tagli un oggetto in pezzi sempre più piccoli, prima o poi dovrai arrivare a un pezzo che non si può più dividere. Per 2000 anni l'idea rimase una filosofia.` },
        { id: 'lavoisier', label: `Lavoisier (1789)`, x: 38, y: 30, color: '#ef4444', html: `Conservazione della massa: nelle reazioni la massa totale non cambia.`, why: `Lavoisier usò la bilancia in modo rigorosissimo e fece le reazioni in recipienti chiusi. Scoprì che i metalli scaldati aumentano di peso perché si combinano con un gas dell'aria, che chiamò ossigeno. Così la chimica divenne una scienza di misure.` },
        { id: 'proust', label: `Proust (1799)`, x: 62, y: 30, color: '#f97316', html: `Proporzioni definite: un composto ha sempre la stessa composizione in massa.`, why: `Analizzando campioni di carbonato di rame preparati in modi diversi, Proust trovò sempre le stesse percentuali. Era un indizio che gli elementi si uniscono "a pezzi interi".` },
        { id: 'dalton', label: `Dalton (1808)`, x: 50, y: 52, color: '#3b82f6', html: `Teoria atomica: ogni elemento è fatto di atomi tutti uguali; i composti sono combinazioni di atomi in numeri interi.`, why: `Dalton capì che le leggi di Lavoisier e Proust si spiegano facilmente se esistono gli atomi: la massa si conserva perché gli atomi non si creano né si distruggono; le proporzioni sono fisse perché si combinano sempre in rapporti di numeri interi.` },
        { id: 'mendeleev', label: `Mendeleev (1869)`, x: 22, y: 76, color: '#22c55e', html: `La tavola periodica: gli elementi ordinati per massa mostrano proprietà che si ripetono.`, why: `Mendeleev notò la periodicità e osò lasciare caselle vuote per elementi sconosciuti. Quando furono scoperti con le proprietà previste, tutti capirono che la tavola rifletteva una struttura nascosta degli atomi.` },
        { id: 'bohr', label: `Bohr (1913)`, x: 78, y: 76, color: '#0ea5e9', html: `Modello atomico: elettroni su orbite (livelli) di energia intorno al nucleo.`, why: `Dopo che Rutherford (1911) scoprì il nucleo, Bohr spiegò perché gli atomi emettono luce solo di certi colori: gli elettroni saltano tra livelli di energia fissi. I livelli spiegano anche perché la tavola si ripete.` },
        { id: 'stechiometria', label: `Stechiometria`, x: 50, y: 95, color: '#eab308', html: `Calcolare le quantità di reagenti e prodotti con moli e coefficienti.`, why: `Se gli atomi si combinano in numeri interi (Dalton) e la massa si conserva (Lavoisier), allora possiamo prevedere con precisione quanti grammi di prodotto otterremo: è la base dell'industria chimica e farmaceutica.` }
      ],
      edges: [
        ['democrito', 'dalton', 'l\'idea torna'], ['lavoisier', 'dalton', 'spiegata da'], ['proust', 'dalton', 'spiegata da'],
        ['dalton', 'mendeleev', 'masse atomiche'], ['mendeleev', 'bohr', 'struttura nascosta'], ['dalton', 'stechiometria', 'numeri interi'], ['lavoisier', 'stechiometria', 'massa costante']
      ]
    },
    {
      type: 'decision', title: `1770: che cosa succede quando un metallo brucia?`,
      html: `<p>Nel Settecento quasi tutti i chimici credevano nella <b>teoria del flogisto</b>: ogni sostanza che brucia conterrebbe un "principio del fuoco", il flogisto, che durante la combustione esce. Però c'era un problema: quando si scalda lo stagno o il piombo all'aria, la polvere che si ottiene (la "calce") <b>pesa di più</b> del metallo di partenza.</p>`,
      question: `Tu, al posto di Lavoisier, quale spiegazione avresti scelto?`,
      options: [
        { label: `Il flogisto ha un peso negativo: quando esce, il metallo diventa più pesante.`, outcome: `Fu davvero proposta da alcuni chimici per salvare la teoria. Ma è un'ipotesi inventata "su misura", che non si può verificare e che contraddice tutte le altre esperienze con i pesi.` },
        { label: `Il metallo prende qualcosa dall'aria: per questo pesa di più.`, outcome: `È l'ipotesi di Lavoisier. Si può verificare: se scaldo il metallo in un recipiente chiuso, l'aria dentro deve diminuire e il peso totale restare uguale.` },
        { label: `La bilancia sbaglia: è solo un errore di misura.`, outcome: `L'aumento di peso si ripeteva sempre, con metalli e bilance diverse: non poteva essere un errore casuale.` }
      ],
      answer: 1,
      explain: `Lavoisier scaldò metalli in recipienti sigillati: il peso totale non cambiava, ma quando apriva il recipiente entrava aria. Il metallo aveva "preso" un gas, che chiamò <b>ossigeno</b> (1777). La scienza scelse la sua spiegazione non perché fosse più famosa, ma perché <b>faceva previsioni misurabili che risultavano vere</b>, mentre il flogisto aveva bisogno di eccezioni inventate. Fu la nascita della chimica moderna.`
    },
    {
      type: 'quiz', title: `Mini-quiz: reazioni e calcoli`,
      questions: [
        { type: 'num', q: `Massa molare di CO₂ (C = 12, O = 16)?`, answer: 44, unit: 'g/mol', explain: `12 + 2 × 16 = 44 g/mol.` },
        { type: 'mc', q: `In 2 H₂ + O₂ → 2 H₂O, quante moli di O₂ servono per 4 moli di H₂?`, options: [`1`, `2`, `4`], answer: 1, explain: `Il rapporto è 2 : 1, quindi 4 mol di H₂ richiedono 2 mol di O₂.` },
        { type: 'tf', q: `Il reagente limitante è quello che finisce per primo.`, answer: true, explain: `È lui che decide quanto prodotto si può formare.` }
      ]
    }
  ],
  glossary: [
    { t: `Atomo`, d: `La più piccola particella di un elemento: nucleo (protoni e neutroni) ed elettroni.` },
    { t: `Numero atomico (Z)`, d: `Numero di protoni nel nucleo; identifica l'elemento.` },
    { t: `Elemento`, d: `Sostanza formata da un solo tipo di atomo.` },
    { t: `Composto`, d: `Sostanza formata da atomi di elementi diversi in proporzioni fisse.` },
    { t: `Molecola`, d: `Gruppo di atomi legati tra loro.` },
    { t: `Reazione chimica`, d: `Trasformazione in cui i reagenti diventano prodotti nuovi.` },
    { t: `Coefficiente`, d: `Numero davanti a una formula in un'equazione: indica quante molecole o moli.` },
    { t: `Mole`, d: `Quantità che contiene 6,022 × 10²³ particelle.` },
    { t: `Massa molare`, d: `Massa in grammi di una mole di sostanza (g/mol).` },
    { t: `Rapporto stechiometrico`, d: `Rapporto in moli tra reagenti e prodotti dato dai coefficienti.` },
    { t: `Reagente limitante`, d: `Il reagente che si consuma per primo e limita la quantità di prodotto.` },
    { t: `Precipitato`, d: `Solido che si forma in una soluzione durante una reazione.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: 'mc', q: `Che cosa dice la legge di Lavoisier?`, options: [`La massa dei prodotti è uguale a quella dei reagenti`, `I gas pesano sempre meno dei solidi`, `Gli elementi si possono trasformare in altri elementi`], answer: 0, explain: `Nulla si crea, nulla si distrugge, tutto si trasforma.` },
      { type: 'num', q: `Massa molare dell'acqua H₂O (H = 1, O = 16)?`, answer: 18, unit: 'g/mol', explain: `2 × 1 + 16 = 18 g/mol.` },
      { type: 'num', q: `Bilancia: CH₄ + ? O₂ → CO₂ + 2 H₂O. Quale coefficiente va davanti a O₂?`, answer: 2, explain: `A destra ci sono 2 + 2 = 4 atomi di O, quindi servono 2 O₂.` },
      { type: 'num', q: `Quanti grammi di O₂ reagiscono completamente con 8 g di H₂? (2 H₂ + O₂ → 2 H₂O)`, answer: 64, unit: 'g', explain: `8 g H₂ = 4 mol; servono 2 mol O₂ = 2 × 32 = 64 g.` },
      { type: 'num', q: `Quante moli di acqua si formano da 3 moli di O₂ (con idrogeno in eccesso)?`, answer: 6, unit: 'mol', explain: `Il rapporto O₂ : H₂O è 1 : 2, quindi 3 × 2 = 6 mol.` },
      { type: 'num', q: `14 g di ferro reagiscono esattamente con 8 g di zolfo. Quanti grammi di FeS si formano?`, answer: 22, unit: 'g', explain: `Per Lavoisier: 14 + 8 = 22 g.` },
      { type: 'mc', q: `Con 10 g di H₂ e 32 g di O₂, qual è il reagente limitante?`, options: [`H₂`, `O₂`, `Nessuno`], answer: 1, explain: `5 mol di H₂ e 1 mol di O₂: l'ossigeno finisce per primo e avanzano 6 g di H₂.` },
      { type: 'num', q: `Quante moli sono 88 g di CO₂?`, answer: 2, unit: 'mol', explain: `88 ÷ 44 = 2 mol.` },
      { type: 'mc', q: `Mescolando nitrato d'argento e cloruro di sodio si forma un precipitato…`, options: [`blu`, `bianco`, `rosso`], answer: 1, explain: `Il cloruro d'argento (AgCl) è un solido bianco.` },
      { type: 'mc', q: `Quale di questi è un miscuglio e non un composto?`, options: [`acqua distillata`, `sale da cucina`, `aria`], answer: 2, explain: `L'aria è un miscuglio di gas (azoto, ossigeno, argon…).` },
      { type: 'order', q: `Metti in ordine cronologico.`, items: [`Democrito`, `Lavoisier`, `Dalton`, `Mendeleev`, `Bohr`], explain: `V sec. a.C., 1789, 1808, 1869, 1913.` },
      { type: 'tf', q: `In un'equazione si possono cambiare i numeretti delle formule per bilanciarla.`, answer: false, explain: `Si cambiano solo i coefficienti: cambiare le formule significherebbe cambiare sostanza.` }
    ]
  }
});

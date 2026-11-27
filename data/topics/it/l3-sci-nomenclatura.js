TOPIC('it', {
  id: "l3-sci-nomenclatura",
  title: "La nomenclatura chimica",
  intro: "H₂O, NaCl, Ca(OH)₂, H₂SO₄, CaCO₃: ogni composto ha un nome che, letto con attenzione, dice <b>da che cosa è fatto</b>. Imparare la nomenclatura non significa memorizzare centinaia di nomi, ma capire poche famiglie (<b>ossidi, idrossidi, acidi, sali</b>) e il loro albero genealogico. Partiremo dal <b>numero di ossidazione</b>, il numero che permette di scrivere formule e nomi, e useremo sia la nomenclatura <b>tradizionale</b> (ancora molto usata) sia quella <b>IUPAC e Stock</b> (sistematica e internazionale).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Perché serve un linguaggio comune",
      html: `<p>Fino al Settecento le sostanze avevano nomi di fantasia: "olio di vetriolo" (acido solforico), "spirito di sale" (acido cloridrico), "calce viva" (ossido di calcio). Nel 1787 <b>Lavoisier</b>, con de Morveau, Berthollet e Fourcroy, pubblicò il <i>Méthode de nomenclature chimique</i>: i nomi dovevano descrivere la composizione, come "ossido" e "solfato". Dal 1919 l'<b>IUPAC</b> (Unione Internazionale di Chimica Pura e Applicata) fissa le regole valide in tutto il mondo.</p>
<p>Oggi convivono tre sistemi:</p>
<ul>
<li><b>tradizionale</b>: usa suffissi e prefissi legati al numero di ossidazione (<i>-oso</i>, <i>-ico</i>, <i>ipo-</i>, <i>per-</i>): ossido ferrico, acido solforico;</li>
<li><b>IUPAC</b>: usa prefissi che dicono <b>quanti atomi</b> ci sono (mono-, di-, tri-, tetra-, penta-, esa-, epta-): triossido di zolfo;</li>
<li><b>Stock</b>: indica con un numero romano tra parentesi il <b>numero di ossidazione</b> del metallo: ossido di ferro(III).</li>
</ul>
<p>Molti composti, tuttavia, mantengono un nome comune: acqua (H₂O), ammoniaca (NH₃), metano (CH₄).</p>`
    },
    {
      type: "text",
      title: "Il numero di ossidazione",
      html: `<p>Il <b>numero di ossidazione (n.o.)</b> è la carica che un atomo avrebbe se gli elettroni di ogni legame fossero assegnati all'atomo più elettronegativo. Per i composti ionici coincide con la carica dello ione (Na⁺: +1; O²⁻: −2); per quelli covalenti è una convenzione contabile. Regole principali, in ordine di priorità:</p>
<ol>
<li>In un elemento allo stato libero (Na, O₂, Fe, P₄) il n.o. è <b>0</b>.</li>
<li>In uno ione semplice il n.o. è uguale alla carica (Mg²⁺: +2).</li>
<li>La somma dei n.o. di tutti gli atomi è <b>0</b> in una molecola neutra, uguale alla carica in uno ione poliatomico.</li>
<li><b>Fluoro: −1</b> sempre. <b>Ossigeno: −2</b> (eccezione: −1 nei perossidi, come H₂O₂). <b>Idrogeno: +1</b> (eccezione: −1 negli idruri metallici, come NaH).</li>
<li>Metalli alcalini <b>+1</b>, alcalino-terrosi <b>+2</b>, alluminio <b>+3</b>; gli altri alogeni <b>−1</b> nei composti binari con i metalli e con l'idrogeno.</li>
</ol>
<p><b>Esempio.</b> Qual è il n.o. dello zolfo in H₂SO₄? 2·(+1) + x + 4·(−2) = 0, quindi x = +6. E dell'azoto in HNO₃? (+1) + x + 3·(−2) = 0, quindi x = +5. Del manganese in KMnO₄? (+1) + x + 4·(−2) = 0, x = +7.</p>
<p>Un elemento può avere più n.o.: lo zolfo −2, +4, +6; il cloro −1, +1, +3, +5, +7; il ferro +2 e +3. Il n.o. massimo di un elemento dei gruppi principali coincide di solito con il numero del gruppo (per i gruppi 1-2 e 13-17 con 10 in meno): S (gruppo 16) arriva a +6, Cl (17) a +7.</p>`
    },
    {
      type: "svg",
      title: "L'albero di famiglia dei composti",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs><marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#475569"/></marker></defs>
<g font-size="15" font-weight="bold" text-anchor="middle">
<rect x="20" y="30" width="120" height="40" rx="8" fill="#bfdbfe"/><text x="80" y="55" fill="#1e3a8a">Metallo</text>
<rect x="20" y="210" width="120" height="40" rx="8" fill="#fecaca"/><text x="80" y="235" fill="#7f1d1d">Non metallo</text>
<rect x="200" y="30" width="130" height="40" rx="8" fill="#93c5fd"/><text x="265" y="55" fill="#1e3a8a">Ossido basico</text>
<rect x="200" y="210" width="130" height="40" rx="8" fill="#fca5a5"/><text x="265" y="235" fill="#7f1d1d">Ossido acido</text>
<rect x="400" y="30" width="130" height="40" rx="8" fill="#60a5fa"/><text x="465" y="55" fill="#1e3a8a">Idrossido</text>
<rect x="400" y="210" width="130" height="40" rx="8" fill="#f87171"/><text x="465" y="235" fill="#7f1d1d">Ossoacido</text>
<rect x="400" y="120" width="130" height="40" rx="8" fill="#fde68a"/><text x="465" y="145" fill="#78350f">Sale + H₂O</text>
</g>
<g stroke="#475569" stroke-width="3" fill="none" marker-end="url(#ar)">
<line x1="140" y1="50" x2="198" y2="50"/><line x1="330" y1="50" x2="398" y2="50"/>
<line x1="140" y1="230" x2="198" y2="230"/><line x1="330" y1="230" x2="398" y2="230"/>
<line x1="465" y1="72" x2="465" y2="118"/><line x1="465" y1="208" x2="465" y2="162"/>
</g>
<g font-size="14" fill="#334155" text-anchor="middle">
<text x="170" y="40">+ O₂</text><text x="365" y="40">+ H₂O</text>
<text x="170" y="220">+ O₂</text><text x="365" y="220">+ H₂O</text>
<text x="300" y="150">neutralizzazione</text>
</g>
<text x="300" y="285" font-size="15" fill="#0369a1" text-anchor="middle">Il non metallo con l'ossigeno dà un'anidride (ossido acido)</text>
</svg>`,
      caption: "Dalla combinazione con ossigeno e acqua nascono le famiglie; da idrossido + acido si ottiene un sale."
    },
    {
      type: "text",
      title: "Ossidi: metalli e non metalli con l'ossigeno",
      html: `<p>Un <b>ossido</b> è un composto binario dell'ossigeno (n.o. −2) con un altro elemento. Si scrive prima l'elemento meno elettronegativo, e i pedici si trovano <b>scambiando</b> i n.o. (semplificando se possibile).</p>
<ul>
<li><b>Ossidi basici</b> (metallo + O): reagiscono con l'acqua dando idrossidi. Na₂O: IUPAC <i>ossido di disodio</i>, Stock/tradizionale <i>ossido di sodio</i>. CaO: ossido di calcio (la calce viva). Con metalli a due n.o.: FeO è <i>ossido di ferro(II)</i> (trad. <i>ossido ferroso</i>), Fe₂O₃ è <i>ossido di ferro(III)</i> (<i>ossido ferrico</i>, IUPAC <i>triossido di diferro</i>): è la ruggine.</li>
<li><b>Ossidi acidi o anidridi</b> (non metallo + O): reagiscono con l'acqua dando ossoacidi. CO₂: <i>diossido di carbonio</i> (trad. <i>anidride carbonica</i>). SO₂: <i>diossido di zolfo</i> (<i>anidride solforosa</i>), SO₃: <i>triossido di zolfo</i> (<i>anidride solforica</i>). N₂O₅: <i>pentaossido di diazoto</i> (<i>anidride nitrica</i>). P₂O₅: <i>pentaossido di difosforo</i> (<i>anidride fosforica</i>). Cl₂O₇: <i>eptaossido di dicloro</i> (<i>anidride perclorica</i>).</li>
</ul>
<p>Nel sistema tradizionale con due n.o. si usa <b>-oso</b> per il minore e <b>-ico</b> per il maggiore (SO₂ solforosa, SO₃ solforica). Con quattro n.o., come il cloro, si aggiungono <b>ipo-…-osa</b> (+1), <b>-osa</b> (+3), <b>-ica</b> (+5), <b>per-…-ica</b> (+7).</p>`
    },
    {
      type: "example",
      title: "Dal nome alla formula e viceversa",
      html: `<ul>
<li><b>Ossido di alluminio</b>: Al ha n.o. +3, O −2; si scambiano le cifre: Al₂O₃.</li>
<li><b>Pentaossido di difosforo</b>: P₂O₅. P ha n.o. +5: lo stesso composto si chiama <i>anidride fosforica</i> o <i>ossido di fosforo(V)</i>.</li>
<li><b>Fe₂O₃</b>: due Fe e tre O: 2x + 3·(−2) = 0 → x = +3. Nome: ossido di ferro(III).</li>
<li><b>Cl₂O₃</b>: 2x − 6 = 0, x = +3, <i>anidride clorosa</i> o <i>triossido di dicloro</i>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Idrossidi",
      html: `<p>Gli <b>idrossidi</b> contengono lo ione <b>idrossido OH⁻</b> legato a un metallo: Me(OH)ₙ, con n uguale al n.o. del metallo. Si ottengono da un ossido basico + acqua: Na₂O + H₂O → 2 NaOH.</p>
<ul>
<li>NaOH: idrossido di sodio (la soda caustica). KOH: idrossido di potassio.</li>
<li>Ca(OH)₂: idrossido di calcio (la calce spenta). Mg(OH)₂: idrossido di magnesio (nei farmaci antiacidi).</li>
<li>Fe(OH)₂: idrossido di ferro(II) (<i>ferroso</i>); Fe(OH)₃: idrossido di ferro(III) (<i>ferrico</i>); IUPAC: <i>triidrossido di ferro</i>.</li>
<li>Al(OH)₃: idrossido di alluminio.</li>
</ul>
<p>In acqua gli idrossidi solubili liberano ioni OH⁻ e danno soluzioni <b>basiche</b>. L'ammoniaca NH₃, pur non avendo OH, è una base perché in acqua forma NH₄⁺ e OH⁻. Notare che quando il gruppo OH si ripete si usano le parentesi: Ca(OH)₂ e non CaOH₂.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: ossidi e idrossidi",
      questions: [
        { type: "mc", q: "Come si chiama Fe₂O₃ nella nomenclatura Stock?", options: ["Ossido di ferro(III)", "Ossido di ferro(II)", "Ossido di diferro(III)", "Triossido di ferro"], answer: 0, explain: "Il ferro ha n.o. +3: 2·3 = 6 = 3·2." },
        { type: "mc", q: "Quale formula ha l'idrossido di alluminio?", options: ["Al(OH)₃", "AlOH₃", "Al₃OH", "Al(OH)₂"], answer: 0, explain: "Al ha n.o. +3, quindi servono tre gruppi OH⁻; le parentesi indicano il gruppo ripetuto." },
        { type: "num", q: "Qual è il numero di ossidazione dello zolfo in SO₃?", answer: 6, explain: "x + 3·(−2) = 0 → x = +6." }
      ]
    },
    {
      type: "text",
      title: "Acidi: idracidi e ossoacidi",
      html: `<p><b>Idracidi</b>: composti binari dell'idrogeno con gli alogeni o lo zolfo, in soluzione acquosa. Il nome è <b>acido + radice + -idrico</b>: HF acido fluoridrico, HCl acido cloridrico, HBr acido bromidrico, HI acido iodidrico, H₂S acido solfidrico.</p>
<p><b>Ossoacidi</b> (o acidi ossigenati): H + non metallo + O. Si ottengono sommando <b>anidride + acqua</b>:</p>
<ul>
<li>CO₂ + H₂O → H₂CO₃ (acido carbonico)</li>
<li>SO₂ + H₂O → H₂SO₃ (acido solforoso); SO₃ + H₂O → H₂SO₄ (acido solforico)</li>
<li>N₂O₃ + H₂O → 2 HNO₂ (acido nitroso); N₂O₅ + H₂O → 2 HNO₃ (acido nitrico)</li>
<li>P₂O₅ + 3 H₂O → 2 H₃PO₄ (acido fosforico)</li>
<li>Cl₂O + H₂O → 2 HClO (acido ipocloroso); Cl₂O₃ → HClO₂ (cloroso); Cl₂O₅ → HClO₃ (clorico); Cl₂O₇ → HClO₄ (perclorico)</li>
</ul>
<p>Il nome tradizionale ha lo stesso suffisso dell'anidride: <i>-osa</i> diventa <i>acido -oso</i>, <i>-ica</i> diventa <i>acido -ico</i>. Il nome IUPAC sistematico, poco usato nella pratica, descrive gli ossigeni e il n.o. dell'atomo centrale: H₂SO₄ è l'<i>acido tetraossosolforico(VI)</i> e HNO₃ l'<i>acido triossonitrico(V)</i>. Nel laboratorio si usano ancora quasi sempre i nomi tradizionali.</p>
<p>Gli acidi in acqua liberano ioni <b>H⁺</b> (in realtà H₃O⁺): la soluzione è <b>acida</b>. Il numero di H che l'acido può cedere si chiama <b>basicità</b>: HCl è monoprotico, H₂SO₄ diprotico, H₃PO₄ triprotico.</p>`
    },
    {
      type: "text",
      title: "Sali: il prodotto della neutralizzazione",
      html: `<p>Un <b>sale</b> contiene un catione (di solito un metallo) e un anione che deriva da un acido per perdita di H⁺. Il nome si compone con <b>nome dell'anione + di + nome del catione</b>. Il suffisso dell'anione dipende dall'acido di origine:</p>
<table>
<tr><th>Acido</th><th>Anione</th><th>Esempio di sale</th></tr>
<tr><td>-idrico (HCl, H₂S)</td><td>-uro (Cl⁻ cloruro, S²⁻ solfuro)</td><td>NaCl cloruro di sodio; FeS solfuro di ferro(II)</td></tr>
<tr><td>-oso (H₂SO₃, HNO₂, HClO)</td><td>-ito (SO₃²⁻ solfito, NO₂⁻ nitrito, ClO⁻ ipoclorito)</td><td>Na₂SO₃ solfito di sodio; NaClO ipoclorito di sodio</td></tr>
<tr><td>-ico (H₂SO₄, HNO₃, H₂CO₃, H₃PO₄, HClO₃)</td><td>-ato (SO₄²⁻ solfato, NO₃⁻ nitrato, CO₃²⁻ carbonato, PO₄³⁻ fosfato, ClO₃⁻ clorato)</td><td>CaCO₃ carbonato di calcio; KNO₃ nitrato di potassio; Ca₃(PO₄)₂ fosfato di calcio</td></tr>
</table>
<p>Per scrivere la formula si bilanciano le cariche: calcio (Ca²⁺) con fosfato (PO₄³⁻): 3 Ca²⁺ (+6) e 2 PO₄³⁻ (−6): <b>Ca₃(PO₄)₂</b>. Lo ione poliatomico, se serve più di una volta, va tra parentesi. Con metalli a più n.o. si indica quello usato: FeCl₂ cloruro di ferro(II) (<i>cloruro ferroso</i>); FeCl₃ cloruro di ferro(III) (<i>cloruro ferrico</i>).</p>
<p><b>Sali acidi</b>: derivano da acidi poliprotici che hanno perso solo una parte degli H⁺: NaHCO₃ è l'<i>idrogenocarbonato di sodio</i> (nome tradizionale: <i>carbonato acido di sodio</i>, il bicarbonato); NaHSO₄ è l'<i>idrogenosolfato di sodio</i>.</p>
<p>La <b>neutralizzazione</b> è la reazione acido + idrossido → sale + acqua: <b>HCl + NaOH → NaCl + H₂O</b>; <b>H₂SO₄ + Ca(OH)₂ → CaSO₄ + 2 H₂O</b>.</p>`
    },
    {
      type: "example",
      title: "Dal metallo al sale, passo dopo passo",
      html: `<p>Seguiamo il <b>calcio</b> in tutta la sua famiglia:</p>
<ol>
<li>2 Ca + O₂ → 2 CaO (ossido di calcio, la calce viva).</li>
<li>CaO + H₂O → Ca(OH)₂ (idrossido di calcio, la calce spenta).</li>
<li>C + O₂ → CO₂; CO₂ + H₂O → H₂CO₃ (acido carbonico).</li>
<li>Ca(OH)₂ + H₂CO₃ → CaCO₃ + 2 H₂O (carbonato di calcio, il calcare). È proprio ciò che accade quando la calce spenta, usata nelle malte, "indurisce" assorbendo CO₂ dall'aria.</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: acidi e sali",
      questions: [
        { type: "mc", q: "Come si chiama KNO₂?", options: ["Nitrito di potassio", "Nitrato di potassio", "Nitruro di potassio", "Ipo-nitrito di potassio"], answer: 0, explain: "Deriva dall'acido nitroso HNO₂ (-oso → -ito)." },
        { type: "num", q: "Quanti atomi di ossigeno contiene l'acido fosforico H₃PO₄?", answer: 4, explain: "La formula H₃PO₄ contiene 4 atomi di ossigeno." },
        { type: "tf", q: "Il bicarbonato di sodio ha formula NaHCO₃.", answer: true, explain: "È l'idrogenocarbonato di sodio, un sale acido." }
      ]
    },
    {
      type: "widget",
      title: "Classifica i composti",
      widget: "classify",
      options: { groups: ["Ossido basico", "Ossido acido (anidride)", "Idrossido", "Acido", "Sale"], items: [["CaO", 0], ["Na₂O", 0], ["CO₂", 1], ["SO₃", 1], ["NaOH", 2], ["Al(OH)₃", 2], ["HCl", 3], ["H₂SO₄", 3], ["HNO₃", 3], ["NaCl", 4], ["CaCO₃", 4], ["KNO₃", 4]] },
      caption: "Trascina o tocca per assegnare ogni formula alla sua famiglia."
    },
    {
      type: "widget",
      title: "Abbina formula e nome",
      widget: "match",
      options: { pairs: [["H₂SO₄", "acido solforico"], ["Na₂SO₃", "solfito di sodio"], ["Ca(OH)₂", "idrossido di calcio"], ["NaClO", "ipoclorito di sodio"], ["Fe₂O₃", "ossido di ferro(III)"], ["KNO₃", "nitrato di potassio"], ["CO₂", "diossido di carbonio"]] },
      caption: "Se il suffisso ti confonde, risali all'acido da cui il sale deriva."
    },
    {
      type: "remember",
      title: "Il metodo in cinque mosse",
      html: `<ol>
<li>Riconosci la <b>famiglia</b> (ossido, idrossido, acido, sale) dalla formula.</li>
<li>Calcola il <b>numero di ossidazione</b> dell'elemento incognito (O −2, H +1, somma zero).</li>
<li>Scegli il <b>nome</b>: tradizionale (suffissi -oso/-ico), IUPAC (prefissi) o Stock (numero romano).</li>
<li>Per la formula inversa: scrivi i due ioni con le cariche, <b>bilancia</b> fino alla neutralità e, se serve, metti le parentesi.</li>
<li>Per i sali: <b>acido -ico → -ato</b>, <b>acido -oso → -ito</b>, <b>acido -idrico → -uro</b>.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Altri modi per padroneggiare i nomi",
      intro: "La nomenclatura è un linguaggio: ci sono molti modi di impararlo.",
      tabs: [
        { label: "🧱 I prefissi come mattoncini", html: "<p>Nel sistema IUPAC il prefisso conta gli atomi: <b>mono</b> 1, <b>di</b> 2, <b>tri</b> 3, <b>tetra</b> 4, <b>penta</b> 5, <b>esa</b> 6, <b>epta</b> 7. Si legge la formula come una frase: N₂O₅ ha 2 N e 5 O, perciò <i>pentaossido di diazoto</i>. Il prefisso mono- iniziale si omette (CO è <i>monossido di carbonio</i>, ma si dice anche solo <i>ossido di carbonio</i>). Il metodo è meccanico e non richiede di conoscere il n.o.: perfetto quando non sai a quale famiglia appartenga la sostanza.</p>" },
        { label: "🪜 La scala del cloro", html: "<p>Il cloro ha quattro ossoacidi, e la scala dei suffissi si impara con una sola immagine: una scala da salire un gradino alla volta. <b>HClO</b> (+1) <i>ipocloroso</i>, <b>HClO₂</b> (+3) <i>cloroso</i>, <b>HClO₃</b> (+5) <i>clorico</i>, <b>HClO₄</b> (+7) <i>perclorico</i>. Ogni gradino aggiunge un ossigeno. Sali: ipoclorito, clorito, clorato, perclorato. Lo stesso schema vale per bromo e iodio. Se un elemento ha solo due n.o. si usano solo i gradini centrali (-oso e -ico).</p>" },
        { label: "👨‍👩‍👧 La famiglia dello zolfo", html: "<p>Lo zolfo ha un 'albero' completo: S (0) → SO₂ (+4, anidride solforosa) → H₂SO₃ (acido solforoso) → Na₂SO₃ (solfito di sodio); S → SO₃ (+6, anidride solforica) → H₂SO₄ (acido solforico) → Na₂SO₄ (solfato di sodio). Disegna l'albero per un elemento a caso (azoto, fosforo, carbonio) e avrai tutta la nomenclatura di quell'elemento. Prova con il laboratorio virtuale.</p>", widget: "chemLab", options: {} },
        { label: "🔬 Una molecola in 3D", html: "<p>Il nome di una molecola descrive anche la forma: il <b>diossido di carbonio</b> (O=C=O) è lineare, mentre il <b>diossido di zolfo</b> (S con due O) è angolato perché lo zolfo ha anche una coppia solitaria. Stessa formula 'XO₂', forme e proprietà diverse: il nome è solo un punto di partenza.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#facc15", label: "S" }, { x: 1.0, y: -0.55, z: 0, r: 0.4, color: "#ef4444", label: "O" }, { x: -1.0, y: -0.55, z: 0, r: 0.4, color: "#ef4444", label: "O" } ], bonds: [[0, 1], [0, 2]] } }
      ]
    },
    {
      type: "curiosity",
      title: "La candeggina, la soda e il bicarbonato",
      html: `<p>Molti prodotti di casa hanno una formula precisa: la <b>candeggina</b> è una soluzione di <b>ipoclorito di sodio</b> NaClO; la <b>soda caustica</b> (per sturare i tubi) è <b>idrossido di sodio</b> NaOH; il <b>bicarbonato</b> è <b>idrogenocarbonato di sodio</b> NaHCO₃ (si scompone sotto il calore dando CO₂, ed è per questo che fa lievitare i dolci); l'<b>acido muriatico</b> è <b>acido cloridrico</b> HCl; il <b>gesso</b> è <b>solfato di calcio</b>; il <b>marmo</b> e il <b>calcare</b> sono <b>carbonato di calcio</b> CaCO₃. Non mescolare mai candeggina e acido: si libera cloro gassoso, tossico.</p>`
    },
    {
      type: "curiosity",
      title: "Perché la ruggine si chiama ossido",
      html: `<p>La ruggine è soprattutto <b>ossido di ferro(III) idrato</b>, Fe₂O₃·nH₂O. Il ferro (n.o. 0) viene ossidato dall'ossigeno e dall'acqua: il suo n.o. sale a +3, perciò si parla di <b>ossidazione</b> e il numero che abbiamo imparato a calcolare si chiama "di ossidazione". Questo concetto tornerà nelle reazioni di <b>ossido-riduzione</b>: quando un elemento sale di n.o. si ossida, quando scende si riduce. Il nome della famiglia, "ossidi", deriva da <i>oxys</i>, "acido" in greco: Lavoisier credeva che l'ossigeno fosse il principio di tutti gli acidi, il che si rivelò sbagliato (HCl non contiene ossigeno), ma il nome è rimasto.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: la logica della nomenclatura",
      nodes: [
        { id: "no", label: "Numero di ossidazione", x: 50, y: 10, color: "#2563eb", html: "Carica formale di un atomo in un composto.", why: "È un bilancio contabile: l'atomo più elettronegativo si prende gli elettroni di legame. Permette di prevedere formule e di seguire gli scambi di elettroni nelle reazioni, ma non è sempre una carica reale." },
        { id: "ossidi", label: "Ossidi", x: 15, y: 40, color: "#dc2626", html: "Elemento + O (−2): basici (metalli) o acidi (non metalli).", why: "Il carattere acido-base di un ossido dipende dall'elettronegatività dell'elemento: i metalli, poco elettronegativi, formano legami ionici e danno OH⁻ con l'acqua; i non metalli formano legami covalenti e danno H⁺." },
        { id: "idrossidi", label: "Idrossidi", x: 50, y: 40, color: "#a855f7", html: "Ossido basico + H₂O: Me(OH)ₙ.", why: "Contengono lo ione OH⁻: Arrhenius (1884-1887) definì basi le sostanze che liberano OH⁻ in acqua." },
        { id: "acidi", label: "Acidi", x: 85, y: 40, color: "#f59e0b", html: "Idracidi e ossoacidi: liberano H⁺ in acqua.", why: "Per Lavoisier tutti gli acidi contenevano ossigeno; Davy (1810) mostrò che l'acido cloridrico non lo contiene e che il principio acido è l'idrogeno." },
        { id: "sali", label: "Sali", x: 50, y: 70, color: "#16a34a", html: "Catione di una base + anione di un acido.", why: "Nascono dalla neutralizzazione: gli ioni H⁺ e OH⁻ formano acqua, gli altri ioni restano in soluzione e cristallizzano quando l'acqua evapora." },
        { id: "suff", label: "Suffissi -uro, -ito, -ato", x: 15, y: 90, color: "#0ea5e9", html: "Dal nome dell'acido a quello del sale.", why: "Il suffisso conserva la memoria dell'acido d'origine: -idrico → -uro, -oso → -ito, -ico → -ato; è una regola mnemonica introdotta da Lavoisier e confermata da IUPAC." },
        { id: "iupac", label: "Sistemi IUPAC e Stock", x: 85, y: 90, color: "#ef4444", html: "Prefissi numerici e numeri romani.", why: "Con centinaia di migliaia di composti i nomi tradizionali non bastavano: Stock (1919) propose i numeri romani, IUPAC i prefissi, per avere nomi univoci a partire dalla formula." }
      ],
      edges: [["no", "ossidi", "prevede la formula degli"], ["ossidi", "idrossidi", "+ acqua danno"], ["ossidi", "acidi", "(acidi) + acqua danno"], ["idrossidi", "sali", "+ acido danno"], ["acidi", "sali", "+ base danno"], ["acidi", "suff", "determinano i"], ["suff", "iupac", "affiancati da"]]
    }
  ],
  glossary: [
    { t: "Numero di ossidazione", d: "Carica formale di un atomo in un composto, assegnando gli elettroni di legame all'atomo più elettronegativo." },
    { t: "Ossido", d: "Composto binario dell'ossigeno (n.o. −2) con un altro elemento." },
    { t: "Anidride", d: "Nome tradizionale di un ossido acido (non metallo + ossigeno)." },
    { t: "Idrossido", d: "Composto formato da un metallo e dal gruppo OH⁻: Me(OH)ₙ." },
    { t: "Idracido", d: "Acido binario di un non metallo con l'idrogeno (HCl, H₂S...) con nome in -idrico." },
    { t: "Ossoacido", d: "Acido contenente idrogeno, un non metallo e ossigeno (H₂SO₄, HNO₃...)." },
    { t: "Sale", d: "Composto formato dal catione di una base e dall'anione di un acido." },
    { t: "Neutralizzazione", d: "Reazione tra un acido e una base che dà un sale e acqua." },
    { t: "Nomenclatura Stock", d: "Sistema che indica il n.o. del metallo con un numero romano: ossido di ferro(III)." },
    { t: "Nomenclatura IUPAC", d: "Sistema sistematico con prefissi numerici (mono-, di-, tri-, tetra-...) per il numero di atomi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Qual è il numero di ossidazione del carbonio in CO₂?", answer: 4, explain: "x + 2·(−2) = 0 → x = +4." },
      { type: "mc", q: "Quale formula corrisponde al triossido di zolfo?", options: ["SO₃", "SO₂", "S₂O₃", "S₃O"], answer: 0, explain: "Tri- indica 3 atomi di ossigeno e il mono- iniziale si omette: SO₃, in cui lo zolfo ha n.o. +6." },
      { type: "mc", q: "Come si chiama NaOH?", options: ["Idrossido di sodio", "Ossido di sodio", "Idruro di sodio", "Perossido di sodio"], answer: 0, explain: "Contiene l'ione OH⁻: è l'idrossido di sodio (soda caustica)." },
      { type: "mc", q: "Qual è la formula dell'acido solforico?", options: ["H₂SO₄", "H₂SO₃", "HSO₄", "H₂S"], answer: 0, explain: "H₂SO₄ ha S con n.o. +6 (-ico); H₂SO₃ è l'acido solforoso (+4); H₂S è l'acido solfidrico." },
      { type: "mc", q: "Come si chiama CaCO₃?", options: ["Carbonato di calcio", "Carburo di calcio", "Ossido di calcio e carbonio", "Bicarbonato di calcio"], answer: 0, explain: "CO₃²⁻ è lo ione carbonato (da H₂CO₃, acido -ico): è il calcare, il marmo." },
      { type: "tf", q: "Un sale derivato da un acido -oso ha il nome terminante in -ito.", answer: true, explain: "Acido -oso → anione -ito (acido solforoso → solfito); acido -ico → -ato." },
      { type: "mc", q: "Qual è la formula del fosfato di calcio?", options: ["Ca₃(PO₄)₂", "CaPO₄", "Ca₂(PO₄)₃", "Ca₃PO₄"], answer: 0, explain: "3 Ca²⁺ (+6) e 2 PO₄³⁻ (−6): Ca₃(PO₄)₂." },
      { type: "mc", q: "Quale reazione descrive la neutralizzazione di HCl con NaOH?", options: ["HCl + NaOH → NaCl + H₂O", "HCl + NaOH → NaClO + H₂", "HCl + NaOH → NaH + HClO", "HCl + NaOH → Na + Cl + H₂O"], answer: 0, explain: "Acido + base → sale (cloruro di sodio) + acqua." },
      { type: "num", q: "Qual è il numero di ossidazione dell'azoto in HNO₃?", answer: 5, explain: "+1 + x − 6 = 0 → x = +5." },
      { type: "order", q: "Ordina gli ossoacidi del cloro per numero di ossidazione crescente del cloro.", items: ["HClO", "HClO₂", "HClO₃", "HClO₄"], explain: "+1 (ipocloroso), +3 (cloroso), +5 (clorico), +7 (perclorico)." }
    ]
  }
});

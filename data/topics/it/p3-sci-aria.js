TOPIC('it', {
  id: "p3-sci-aria",
  title: "L'aria",
  intro: "Non la vediamo, non ha odore, eppure è dappertutto: è l'<b>aria</b>! 🌬️ Scopriamo che cos'è, di che cosa è fatta, perché senza di lei non potremmo vivere e come proteggerla.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "L'aria è materia",
      html: `<p>L'aria è <b>invisibile</b>, <b>inodore</b> (senza odore) e <b>insapore</b> (senza sapore). Ma attenzione: <b>non è \"niente\"</b>! L'aria è <b>materia</b>, come l'acqua e i sassi, solo che è allo stato <b>gassoso</b>.</p>
<p>Come facciamo a saperlo? Con gli esperimenti! L'aria:</p>
<ul>
<li>📦 <b>occupa spazio</b>: un bicchiere \"vuoto\" in realtà è pieno d'aria;</li>
<li>⚖️ <b>ha un peso</b>: un pallone gonfio pesa un pochino più di uno sgonfio;</li>
<li>🎈 <b>si può comprimere</b>: tappando una siringa senza ago puoi spingere lo stantuffo, perché l'aria si \"stringe\";</li>
<li>💨 <b>si espande</b> e preme in tutte le direzioni: per questo gonfia palloncini e gomme della bici.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esperimento: il fazzoletto che non si bagna",
      html: `<p>Ti servono: un bicchiere, un fazzoletto di carta, una bacinella d'acqua.</p>
<ol>
<li>Appallottola il fazzoletto e incastralo bene sul <b>fondo</b> del bicchiere.</li>
<li>Capovolgi il bicchiere e immergilo <b>dritto</b> nella bacinella, fino in fondo.</li>
<li>Tiralo fuori sempre dritto e tocca il fazzoletto…</li>
</ol>
<p>È <b>asciutto</b>! 😲 L'aria dentro il bicchiere occupa lo spazio e non lascia entrare l'acqua. Prova poi a inclinare il bicchiere sott'acqua: escono delle <b>bolle</b> (l'aria scappa) e l'acqua entra.</p>`
    },
    {
      type: "text",
      title: "Di che cosa è fatta l'aria",
      html: `<p>L'aria non è un gas solo: è un <b>miscuglio di gas</b>. Su 100 parti d'aria secca ci sono circa:</p>
<ul>
<li>🔵 <b>78 parti di azoto</b>: il gas più abbondante; serve alle piante (che lo prendono dal terreno grazie a dei batteri);</li>
<li>🔴 <b>21 parti di ossigeno</b>: quello che respiriamo e che fa bruciare il fuoco;</li>
<li>⚪ <b>1 parte di altri gas</b>: soprattutto <b>argon</b>, poi un pochino di <b>anidride carbonica</b> (CO₂), che serve alle piante per la fotosintesi.</li>
</ul>
<p>Nell'aria ci sono anche <b>vapore acqueo</b> (l'acqua sotto forma di gas, che forma nuvole e pioggia) e <b>pulviscolo</b>: polvere, polline, granelli piccolissimi che vedi \"ballare\" in un raggio di sole che entra dalla finestra. ☀️</p>`
    },
    {
      type: "svg",
      title: "La composizione dell'aria",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="300" y="30" font-size="22" font-weight="bold" fill="#1f2937" text-anchor="middle">100 \"palline\" d'aria</text>
<g>
<rect x="30" y="55" width="390" height="40" fill="#3b82f6"/>
<rect x="420" y="55" width="105" height="40" fill="#ef4444"/>
<rect x="525" y="55" width="5" height="40" fill="#a3a3a3"/>
</g>
<rect x="30" y="55" width="500" height="40" fill="none" stroke="#1f2937" stroke-width="3"/>
<text x="225" y="83" font-size="20" fill="#ffffff" text-anchor="middle" font-weight="bold">AZOTO 78</text>
<text x="472" y="83" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">O₂ 21</text>
<g font-size="20" fill="#1f2937">
<rect x="40" y="130" width="30" height="30" fill="#3b82f6"/><text x="85" y="152">Azoto (N₂): 78 su 100</text>
<rect x="40" y="175" width="30" height="30" fill="#ef4444"/><text x="85" y="197">Ossigeno (O₂): 21 su 100</text>
<rect x="40" y="220" width="30" height="30" fill="#a3a3a3"/><text x="85" y="242">Argon, anidride carbonica e altri: circa 1</text>
</g>
<text x="300" y="285" font-size="16" fill="#475569" text-anchor="middle">+ vapore acqueo e pulviscolo, che cambiano da posto a posto</text>
</svg>`,
      caption: "Se l'aria fosse fatta di 100 palline, 78 sarebbero di azoto, 21 di ossigeno e solo 1 di altri gas."
    },
    {
      type: "3d",
      title: "Le molecole dell'aria",
      scene: "molecule",
      options: {
        atoms: [
          { x: -2.4, y: 0.6, z: 0, r: 0.5, color: "#3b82f6", label: "N (azoto)" },
          { x: -1.5, y: 0.6, z: 0, r: 0.5, color: "#3b82f6", label: "N (azoto)" },
          { x: 0.5, y: 0.6, z: 0, r: 0.5, color: "#ef4444", label: "O (ossigeno)" },
          { x: 1.4, y: 0.6, z: 0, r: 0.5, color: "#ef4444", label: "O (ossigeno)" },
          { x: 0, y: -1.2, z: 0, r: 0.5, color: "#374151", label: "C (carbonio)" },
          { x: -1.0, y: -1.2, z: 0, r: 0.45, color: "#ef4444", label: "O" },
          { x: 1.0, y: -1.2, z: 0, r: 0.45, color: "#ef4444", label: "O" }
        ],
        bonds: [[0, 1], [2, 3], [4, 5], [4, 6]]
      },
      caption: "In alto: una molecola di azoto (N₂) e una di ossigeno (O₂). In basso: anidride carbonica (CO₂). Ruotale con il dito!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: che cos'è l'aria",
      questions: [
        { type: "tf", q: "Un bicchiere \"vuoto\" in realtà è pieno d'aria.", answer: true, explain: "L'aria occupa spazio: lo dimostra l'esperimento del fazzoletto asciutto." },
        { type: "mc", q: "Qual è il gas più abbondante nell'aria?", options: ["Ossigeno", "Azoto", "Anidride carbonica"], answer: 1, explain: "L'azoto: circa 78 parti su 100." },
        { type: "num", q: "Su 100 parti d'aria, circa quante sono di ossigeno?", answer: 21, explain: "Circa 21 su 100." }
      ]
    },
    {
      type: "text",
      title: "Perché l'aria è importante",
      html: `<ul>
<li>🫁 <b>Respirazione</b>: uomini, animali e anche le piante prendono <b>ossigeno</b> e buttano fuori <b>anidride carbonica</b>. Senza aria una persona resiste solo pochi minuti.</li>
<li>🌿 <b>Fotosintesi</b>: di giorno le piante verdi prendono <b>anidride carbonica</b>, con la luce del Sole producono il loro nutrimento e liberano <b>ossigeno</b>. Piante e animali si aiutano a vicenda!</li>
<li>🔥 <b>Combustione</b>: il fuoco ha bisogno di ossigeno per bruciare.</li>
<li>🛡️ <b>Atmosfera</b>: lo strato d'aria che avvolge la Terra ci protegge dai raggi più pericolosi del Sole (grazie all'<b>ozono</b>), trattiene il calore di notte e fa bruciare quasi tutte le meteore prima che arrivino a terra (le \"stelle cadenti\" 🌠).</li>
<li>🌬️ <b>Vento e tempo</b>: l'aria che si muove forma il vento, porta le nuvole e la pioggia, fa girare le pale eoliche e gonfia le vele.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Gli strati dell'atmosfera",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#1e1b4b", label: "Esosfera: l'aria quasi non c'è più, qui volano molti satelliti" },
          { r: 0.9, color: "#4338ca", label: "Termosfera: aurore polari e Stazione Spaziale (circa 400 km)" },
          { r: 0.8, color: "#6366f1", label: "Mesosfera: qui bruciano le stelle cadenti" },
          { r: 0.7, color: "#38bdf8", label: "Stratosfera: lo strato di ozono che ci protegge" },
          { r: 0.6, color: "#bae6fd", label: "Troposfera: fino a circa 12 km, qui ci sono nuvole, pioggia e vento" },
          { r: 0.5, color: "#16a34a", label: "Terra" }
        ]
      },
      caption: "L'atmosfera è divisa in strati (gli spessori qui non sono in scala). Noi viviamo nella troposfera, la più vicina alla Terra."
    },
    {
      type: "text",
      title: "L'aria calda sale, l'aria fredda scende",
      html: `<p>Quando l'aria si <b>scalda</b>, si allarga (si dilata) e diventa più <b>leggera</b>: per questo <b>sale</b> verso l'alto. L'aria <b>fredda</b> è più pesante e <b>scende</b>.</p>
<ul>
<li>🎈 Le <b>mongolfiere</b> volano perché un bruciatore scalda l'aria dentro il pallone.</li>
<li>🏠 In una stanza il calduccio si sente di più vicino al soffitto.</li>
<li>🌬️ Il <b>vento</b> nasce così: l'aria calda sale e al suo posto arriva aria più fresca da un'altra parte.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: il palloncino sulla bottiglia",
      html: `<p>Con un adulto: infila un palloncino sgonfio sul collo di una bottiglia vuota di plastica.</p>
<ul>
<li>Metti la bottiglia in una ciotola di <b>acqua calda</b> 🔥: il palloncino si <b>gonfia</b> un po'! L'aria dentro si è scaldata e dilatata.</li>
<li>Poi mettila in <b>acqua fredda</b> 🧊: il palloncino si <b>sgonfia</b> di nuovo.</li>
</ul>
<p>Hai appena dimostrato che l'aria calda occupa più spazio dell'aria fredda!</p>`
    },
    {
      type: "text",
      title: "L'inquinamento dell'aria",
      html: `<p>L'aria si <b>inquina</b> quando riceve fumi e sostanze nocive:</p>
<ul>
<li>🚗 gas di scarico di auto, camion e motorini;</li>
<li>🏭 fumi di fabbriche e centrali elettriche;</li>
<li>🏠 riscaldamento delle case (soprattutto a legna, gasolio o carbone);</li>
<li>🔥 incendi e rifiuti bruciati.</li>
</ul>
<p>Le <b>polveri sottili</b> fanno male ai polmoni e l'eccesso di <b>anidride carbonica</b> trattiene troppo calore e fa scaldare il pianeta (<b>cambiamento climatico</b>).</p>
<p>Cosa possiamo fare? 🚶 andare a piedi o in bici, 🚌 usare i mezzi pubblici, 🌳 piantare alberi, 💡 spegnere luci e riscaldamento quando non servono.</p>`
    },
    {
      type: "widget",
      title: "Fa bene o fa male all'aria?",
      widget: "classify",
      options: {
        groups: ["Aiuta l'aria pulita 🌳", "Inquina l'aria 🏭"],
        items: [
          ["🚲 andare a scuola in bici", 0],
          ["🔥 bruciare la plastica in giardino", 1],
          ["🌳 piantare alberi", 0],
          ["🚗 lasciare l'auto accesa da ferma", 1],
          ["🚌 usare l'autobus", 0],
          ["🏭 fumi delle fabbriche senza filtri", 1],
          ["🌡️ abbassare un po' il riscaldamento", 0],
          ["🚶 fare il pedibus", 0]
        ]
      },
      caption: "Trascina ogni azione nel gruppo giusto."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Ogni giorno respiri <b>più di 20 000 volte</b>! Un bambino a riposo fa circa 20 respiri al minuto: in 24 ore sono quasi 29 000. E l'aria che c'è sopra di noi preme su ogni centimetro quadrato del nostro corpo con un peso di circa <b>1 chilo</b>: non la sentiamo perché il nostro corpo spinge in fuori con la stessa forza. Questa spinta si chiama <b>pressione atmosferica</b> e la scoprì l'italiano <b>Evangelista Torricelli</b> nel <b>1643</b>, inventando il <b>barometro</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Più si sale in montagna, più l'aria è <b>rarefatta</b> (ce n'è meno). In cima all'<b>Everest</b> (8849 m) ogni respiro porta ai polmoni solo circa <b>un terzo</b> dell'ossigeno che si respira al mare. Per questo quasi tutti gli alpinisti usano le bombole d'ossigeno. 🏔️ E gli aerei volano a circa 10 000 metri con la cabina \"pressurizzata\".</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'aria è materia: occupa spazio, ha peso, si comprime.</li>
<li>È un miscuglio: azoto 78%, ossigeno 21%, altri gas 1% (argon, CO₂…), più vapore acqueo e pulviscolo.</li>
<li>Serve per respirare, per la fotosintesi e per la combustione.</li>
<li>L'aria calda sale, l'aria fredda scende: così nasce il vento.</li>
<li>L'atmosfera ci protegge; l'inquinamento la danneggia.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'aria",
      intro: "L'aria non si vede: per questo è difficile da immaginare. Ecco alcuni modi per \"vederla\".",
      tabs: [
        {
          label: "🐠 Siamo pesci nell'aria",
          html: `<p>Pensa ai <b>pesci</b>: vivono immersi nell'acqua e forse non si accorgono nemmeno che c'è. Noi siamo uguali: viviamo sul <b>fondo di un \"oceano\" d'aria</b> alto centinaia di chilometri!</p>
<p>Quando corri in bici senti l'aria che ti spinge in faccia, proprio come senti l'acqua quando nuoti. E come l'acqua, anche l'aria \"pesa\" su di noi dall'alto: è la pressione atmosferica.</p>`
        },
        {
          label: "🎨 Le palline colorate",
          html: `<p>Immagina un sacchetto con <b>100 palline</b>: 78 <b>blu</b> (azoto), 21 <b>rosse</b> (ossigeno) e 1 <b>grigia</b> (argon, anidride carbonica e altri gas).</p>
<p>Ogni volta che respiri, prendi un \"sacchetto\" così. Il corpo usa una parte delle palline rosse e restituisce un po' di palline di anidride carbonica. Le palline blu entrano ed escono senza essere usate!</p>
<p>Prova a contare 78 palline blu con il contatore: sono tante!</p>`,
          widget: "counter",
          options: { emoji: "🔵", max: 100 }
        },
        {
          label: "🌍 L'atmosfera come la buccia",
          html: `<p>Se la Terra fosse una <b>mela</b>, l'atmosfera dove ci sono nuvole e pioggia sarebbe sottile <b>come la buccia</b>! 🍎</p>
<p>La troposfera è alta solo 10–12 km (fino a circa 18 km all'Equatore), mentre il raggio della Terra è di circa 6371 km. Per questo dobbiamo trattarla con cura: è uno strato sottile e prezioso.</p>`,
          scene: "globe",
          options: { points: [{ lat: 41.9, lon: 12.5, label: "Roma", color: "#ef4444" }, { lat: 27.99, lon: 86.93, label: "Everest: aria rarefatta", color: "#3b82f6" }] }
        },
        {
          label: "🔄 Piante e animali: lo scambio",
          html: `<p>Gli animali (e noi) prendono <b>ossigeno</b> e danno <b>anidride carbonica</b>. Le piante, di giorno, fanno il contrario con la fotosintesi: prendono anidride carbonica e danno ossigeno. È come uno <b>scambio di regali</b> tra amici!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<circle cx="520" cy="45" r="28" fill="#facc15"/>
<rect x="100" y="150" width="20" height="80" fill="#92400e"/>
<circle cx="110" cy="120" r="60" fill="#22c55e"/>
<text x="110" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#166534">pianta</text>
<text x="470" y="170" font-size="70" text-anchor="middle">🧒</text>
<text x="470" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">bambino</text>
<defs><marker id="a1" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#dc2626"/></marker><marker id="a2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<path d="M190 100 Q300 50 410 100" stroke="#dc2626" stroke-width="5" fill="none" marker-end="url(#a1)"/>
<path d="M410 175 Q300 220 190 175" stroke="#475569" stroke-width="5" fill="none" marker-end="url(#a2)"/>
<text x="300" y="60" font-size="22" text-anchor="middle" fill="#dc2626" font-weight="bold">ossigeno O₂</text>
<text x="300" y="235" font-size="22" text-anchor="middle" fill="#475569" font-weight="bold">anidride carbonica CO₂</text>
</svg>`
        },
        {
          label: "🎈 Esperimenti con le mani",
          html: `<p>Tre prove velocissime per \"sentire\" l'aria:</p>
<ul>
<li>✋ Soffia sul palmo della mano: senti l'aria che si muove.</li>
<li>📄 Lascia cadere un foglio aperto e uno appallottolato: il foglio aperto scende piano perché l'aria lo <b>frena</b>.</li>
<li>🥤 Metti una cannuccia nell'acqua, tappa il buco in alto col dito e sollevala: l'acqua resta dentro! È la <b>pressione dell'aria</b> che la tiene su.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'aria: tocca un nodo e scopri il perché",
      nodes: [
        { id: "aria", label: "Aria", x: 50, y: 8, color: "#0ea5e9", html: "Miscuglio di gas invisibile che avvolge la Terra.", why: "Gli antichi Greci, come Empedocle (V secolo a.C.), pensavano che l'aria fosse uno dei quattro \"elementi\" insieme a terra, acqua e fuoco. Solo nel Settecento si scoprì che è fatta di gas diversi." },
        { id: "materia", label: "È materia", x: 15, y: 28, color: "#64748b", html: "Occupa spazio, ha un peso, si comprime e si espande.", why: "Lo dimostrano gli esperimenti: il bicchiere rovesciato, il pallone gonfio che pesa di più, la siringa tappata. Torricelli nel 1643 misurò per primo il peso dell'aria con il barometro a mercurio." },
        { id: "azoto", label: "Azoto 78%", x: 38, y: 40, color: "#3b82f6", html: "Il gas più abbondante dell'aria.", why: "Fu scoperto nel 1772 da Daniel Rutherford. Il nome francese <i>azote</i>, scelto da Lavoisier, vuol dire \"senza vita\", perché in un recipiente pieno solo di azoto un animale non riesce a respirare." },
        { id: "ossigeno", label: "Ossigeno 21%", x: 62, y: 40, color: "#ef4444", html: "Il gas che respiriamo e che fa bruciare il fuoco.", why: "Scoperto negli anni 1770 da Carl Scheele e Joseph Priestley; Antoine Lavoisier capì il suo ruolo nella respirazione e nella combustione e gli diede il nome." },
        { id: "co2", label: "Anidride carbonica", x: 85, y: 28, color: "#475569", html: "Gas presente in piccola quantità (circa 0,04%).", why: "Serve alle piante per la fotosintesi. Bruciando carbone, petrolio e gas l'uomo ne ha aumentato la quantità, e questo fa scaldare il pianeta." },
        { id: "resp", label: "Respirazione e fotosintesi", x: 50, y: 62, color: "#16a34a", html: "Gli esseri viventi scambiano gas con l'aria.", why: "L'ossigeno nell'aria c'è grazie alle piante e alle alghe: miliardi di anni fa i primi organismi che facevano la fotosintesi lo hanno \"riempito\" di ossigeno." },
        { id: "atmo", label: "Atmosfera", x: 18, y: 78, color: "#6366f1", html: "Lo strato d'aria intorno alla Terra, diviso in troposfera, stratosfera, mesosfera, termosfera, esosfera.", why: "Resta attaccata alla Terra grazie alla forza di gravità. Lo strato di ozono nella stratosfera filtra i raggi ultravioletti del Sole." },
        { id: "vento", label: "Vento", x: 50, y: 92, color: "#f59e0b", html: "Aria che si sposta.", why: "Il Sole scalda in modo diverso terra e mare: l'aria calda sale, quella fredda arriva a prendere il suo posto." },
        { id: "inq", label: "Inquinamento", x: 82, y: 78, color: "#dc2626", html: "Fumi e polveri che rendono l'aria dannosa.", why: "Nascono soprattutto da traffico, riscaldamento e industrie. Per questo esistono leggi e centraline che misurano ogni giorno la qualità dell'aria." }
      ],
      edges: [
        ["aria", "materia", "è"],
        ["aria", "azoto", "contiene"],
        ["aria", "ossigeno", "contiene"],
        ["aria", "co2", "contiene un po' di"],
        ["ossigeno", "resp", "serve alla"],
        ["co2", "resp", "serve alla"],
        ["aria", "atmo", "forma l'"],
        ["atmo", "vento", "si muove come"],
        ["co2", "inq", "aumenta con l'"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'aria e la vita",
      questions: [
        { type: "mc", q: "Di giorno, le piante con la fotosintesi liberano…", options: ["ossigeno", "azoto", "fumo"], answer: 0, explain: "Prendono anidride carbonica e liberano ossigeno." },
        { type: "tf", q: "L'aria calda tende a scendere verso il basso.", answer: false, explain: "L'aria calda è più leggera e sale; quella fredda scende." },
        { type: "mc", q: "In quale strato dell'atmosfera ci sono nuvole e pioggia?", options: ["Troposfera", "Esosfera", "Mesosfera"], answer: 0, explain: "La troposfera è lo strato più basso, dove avvengono i fenomeni del tempo." }
      ]
    }
  ],
  glossary: [
    { t: "Aria", d: "Miscuglio di gas (soprattutto azoto e ossigeno) che avvolge la Terra." },
    { t: "Gas", d: "Stato della materia senza forma e volume propri: occupa tutto lo spazio che trova." },
    { t: "Azoto", d: "Il gas più abbondante dell'aria (circa 78%)." },
    { t: "Ossigeno", d: "Gas dell'aria (circa 21%) necessario per respirare e per bruciare." },
    { t: "Anidride carbonica", d: "Gas (CO₂) prodotto dalla respirazione e usato dalle piante nella fotosintesi." },
    { t: "Atmosfera", d: "Involucro d'aria che circonda la Terra." },
    { t: "Pressione atmosferica", d: "La spinta che l'aria esercita su tutto ciò che c'è sotto di lei." },
    { t: "Pulviscolo", d: "Minuscole particelle di polvere, polline e fumo sospese nell'aria." },
    { t: "Inquinamento", d: "Presenza nell'aria di sostanze dannose per la salute e l'ambiente." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "L'aria non ha peso.", answer: false, explain: "L'aria è materia e ha un peso: un pallone gonfio pesa più di uno sgonfio." },
      { type: "mc", q: "Nell'esperimento del bicchiere capovolto il fazzoletto resta asciutto perché…", options: ["il bicchiere è magico", "l'aria occupa lo spazio e non fa entrare l'acqua", "l'acqua è troppo fredda"], answer: 1, explain: "L'aria dentro il bicchiere occupa spazio." },
      { type: "num", q: "Su 100 parti d'aria, circa quante sono di azoto?", answer: 78, explain: "Circa 78 su 100." },
      { type: "text", q: "Quale gas dell'aria respiriamo e ci serve per vivere?", answer: ["ossigeno", "l'ossigeno", "o2"], explain: "L'ossigeno." },
      { type: "mc", q: "Le piante, con la fotosintesi, assorbono…", options: ["ossigeno", "anidride carbonica", "argon"], answer: 1, explain: "Assorbono anidride carbonica e liberano ossigeno." },
      { type: "tf", q: "Il fuoco ha bisogno di ossigeno per bruciare.", answer: true, explain: "Senza ossigeno la fiamma si spegne, come nell'esperimento della candela sotto il bicchiere." },
      { type: "mc", q: "Perché la mongolfiera vola?", options: ["Perché l'aria calda dentro il pallone è più leggera", "Perché ha un motore a elica", "Perché è piena d'acqua"], answer: 0, explain: "L'aria scaldata dal bruciatore si dilata e diventa più leggera dell'aria intorno." },
      { type: "mc", q: "Chi inventò il barometro nel 1643?", options: ["Galileo Galilei", "Evangelista Torricelli", "Alessandro Volta"], answer: 1, explain: "Evangelista Torricelli, allievo di Galileo." },
      { type: "order", q: "Ordina gli strati dell'atmosfera dal più basso al più alto.", items: ["Troposfera", "Stratosfera", "Mesosfera", "Termosfera", "Esosfera"], explain: "Partendo dalla Terra: troposfera, stratosfera, mesosfera, termosfera, esosfera." },
      { type: "mc", q: "Quale di queste azioni aiuta a tenere pulita l'aria?", options: ["Bruciare i rifiuti", "Andare a scuola a piedi", "Lasciare il motore acceso"], answer: 1, explain: "Andare a piedi non produce gas di scarico." },
      { type: "tf", q: "In alta montagna l'aria è più rarefatta e c'è meno ossigeno a ogni respiro.", answer: true, explain: "Salendo, l'aria è sempre meno: sull'Everest ogni respiro porta circa un terzo dell'ossigeno che c'è al livello del mare." },
      { type: "text", q: "Come si chiama lo strato di gas che nella stratosfera ci protegge dai raggi ultravioletti?", answer: ["ozono", "l'ozono", "strato di ozono", "lo strato di ozono"], explain: "È lo strato di ozono." }
    ]
  }
});

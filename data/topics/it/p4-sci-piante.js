TOPIC('it', {
  id: "p4-sci-piante",
  title: "Le piante e la fotosintesi",
  intro: "Le piante non vanno a fare la spesa e non mangiano: allora come fanno a crescere? Hanno un segreto incredibile, la <b>fotosintesi</b>: con la luce del Sole, l'acqua e l'aria si <b>fabbricano il cibo da sole</b>. E intanto producono l'ossigeno che respiriamo!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Le parti della pianta",
      html: `<p>Le piante sono <b>esseri viventi</b>: nascono, crescono, si nutrono, respirano, si riproducono e muoiono. Una pianta con i fiori ha di solito queste parti:</p>
<ul>
<li><b>Radice</b> 🟫: la tiene ben ferma nel terreno e <b>assorbe acqua e sali minerali</b> grazie a tantissimi <b>peli radicali</b> sottili.</li>
<li><b>Fusto</b> (o tronco, o stelo): sostiene la pianta e contiene dei <b>"tubicini"</b> (i <b>vasi</b>) che trasportano le sostanze. Può essere <i>erbaceo</i> (verde e morbido) o <i>legnoso</i> (duro, come negli alberi).</li>
<li><b>Foglie</b> 🍃: sono la "cucina" della pianta: qui avviene la <b>fotosintesi</b>. Sotto la foglia ci sono minuscole aperture, gli <b>stomi</b>, da cui entra e esce l'aria.</li>
<li><b>Fiore</b> 🌸: serve alla <b>riproduzione</b>.</li>
<li><b>Frutto</b> 🍎 e <b>seme</b> 🌰: il frutto protegge i semi; dal seme nasce una nuova pianta.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Dai il nome alle parti della pianta",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="210" fill="#e0f2fe"/>
<rect y="210" width="600" height="130" fill="#a16207"/>
<circle cx="520" cy="50" r="30" fill="#facc15"/>
<path d="M300 210 C298 160 302 120 300 70" stroke="#15803d" stroke-width="10" fill="none"/>
<path d="M300 150 C250 120 220 135 200 150 C240 165 270 160 300 150 Z" fill="#22c55e" stroke="#166534" stroke-width="3"/>
<path d="M300 120 C350 90 380 105 400 120 C360 135 330 130 300 120 Z" fill="#22c55e" stroke="#166534" stroke-width="3"/>
<circle cx="300" cy="55" r="14" fill="#fde047"/>
<ellipse cx="300" cy="32" rx="12" ry="18" fill="#f472b6"/>
<ellipse cx="322" cy="55" rx="18" ry="12" fill="#f472b6"/>
<ellipse cx="278" cy="55" rx="18" ry="12" fill="#f472b6"/>
<ellipse cx="300" cy="78" rx="12" ry="14" fill="#f472b6"/>
<circle cx="300" cy="55" r="10" fill="#facc15"/>
<path d="M300 210 C290 240 270 260 250 300 M300 210 C305 250 300 280 305 320 M300 210 C320 240 340 260 360 295" stroke="#fef3c7" stroke-width="5" fill="none"/>
</svg>`,
        spots: [
          { x: 300, y: 55, label: "Fiore" },
          { x: 360, y: 115, label: "Foglia" },
          { x: 300, y: 185, label: "Fusto" },
          { x: 300, y: 290, label: "Radice" },
          { x: 520, y: 50, label: "Sole (energia)" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome giusto."
    },
    {
      type: "text",
      title: "La fotosintesi, passo dopo passo",
      html: `<p><b>Fotosintesi</b> vuol dire "costruire con la luce" (dal greco <i>phôs</i> = luce, <i>sýnthesis</i> = mettere insieme).</p>
<ol>
<li>Le <b>radici</b> assorbono dal terreno <b>acqua e sali minerali</b>: insieme formano la <b>linfa grezza</b>.</li>
<li>La linfa grezza <b>sale</b> lungo il fusto, dentro i vasi, fino alle foglie.</li>
<li>Dagli <b>stomi</b> delle foglie entra un gas dell'aria: l'<b>anidride carbonica</b> (CO₂).</li>
<li>Nelle foglie c'è una sostanza verde, la <b>clorofilla</b>, che "cattura" l'energia della <b>luce del Sole</b>.</li>
<li>Con questa energia la pianta unisce acqua e anidride carbonica e produce <b>zucchero</b> (glucosio): è il suo cibo! Lo zucchero sciolto nell'acqua forma la <b>linfa elaborata</b>, che scende e nutre tutta la pianta.</li>
<li>Come "avanzo" la pianta libera nell'aria <b>ossigeno</b> (O₂), proprio quello che noi respiriamo! 🌬️</li>
</ol>
<p>In breve:</p>
<p style="font-size:1.15em"><b>acqua + anidride carbonica + luce → zucchero + ossigeno</b></p>
<p>Per questo le piante si chiamano <b>autotrofe</b> ("che si nutrono da sole"). Gli animali, che devono mangiare altri esseri viventi, sono <b>eterotrofi</b>.</p>`
    },
    {
      type: "svg",
      title: "La fabbrica verde",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="250" fill="#e0f2fe"/>
<rect y="250" width="640" height="90" fill="#92400e"/>
<circle cx="70" cy="60" r="40" fill="#facc15"/>
<g stroke="#facc15" stroke-width="5"><line x1="110" y1="80" x2="230" y2="130"/><line x1="105" y1="95" x2="220" y2="150"/></g>
<text x="120" y="60" font-size="18" fill="#a16207" font-weight="bold">luce</text>
<path d="M320 250 L320 110" stroke="#166534" stroke-width="12"/>
<path d="M320 140 C250 90 220 110 200 140 C250 175 290 165 320 140 Z" fill="#22c55e" stroke="#14532d" stroke-width="4"/>
<path d="M320 120 C390 70 430 90 450 120 C400 155 360 145 320 120 Z" fill="#22c55e" stroke="#14532d" stroke-width="4"/>
<path d="M320 250 C300 280 280 300 260 330 M320 250 C330 290 325 310 330 335 M320 250 C340 280 365 300 390 325" stroke="#fef3c7" stroke-width="5" fill="none"/>
<text x="480" y="60" font-size="20" fill="#1d4ed8" font-weight="bold">CO₂ entra ⬇</text>
<text x="480" y="90" font-size="16" fill="#1d4ed8">(dagli stomi)</text>
<text x="480" y="150" font-size="20" fill="#15803d" font-weight="bold">O₂ esce ⬆</text>
<text x="400" y="300" font-size="20" fill="#ffffff" font-weight="bold">acqua + sali ⬆</text>
<text x="400" y="325" font-size="16" fill="#fef3c7">linfa grezza (sale)</text>
<text x="130" y="230" font-size="16" fill="#7c2d12" font-weight="bold">linfa elaborata</text>
<text x="130" y="248" font-size="16" fill="#7c2d12" font-weight="bold">(zucchero) scende ⬇</text>
<text x="215" y="200" font-size="15" fill="#14532d">clorofilla</text>
</svg>`,
      caption: "Ingredienti: luce, acqua e anidride carbonica. Prodotti: zucchero (il cibo della pianta) e ossigeno."
    },
    {
      type: "3d",
      title: "Le molecole della fotosintesi",
      scene: "molecule",
      options: {
        atoms: [
          { x: -1.6, y: 0.6, z: 0, r: 0.42, color: "#374151", label: "C" },
          { x: -2.4, y: 0.6, z: 0, r: 0.36, color: "#ef4444", label: "O" },
          { x: -0.8, y: 0.6, z: 0, r: 0.36, color: "#ef4444", label: "O" },
          { x: 0.9, y: 0.4, z: 0, r: 0.36, color: "#ef4444", label: "O" },
          { x: 0.45, y: -0.1, z: 0, r: 0.22, color: "#f8fafc", label: "H" },
          { x: 1.35, y: -0.1, z: 0, r: 0.22, color: "#f8fafc", label: "H" },
          { x: 2.1, y: -0.9, z: 0.3, r: 0.36, color: "#ef4444", label: "O" },
          { x: 2.8, y: -0.9, z: 0.3, r: 0.36, color: "#ef4444", label: "O" }
        ],
        bonds: [[0, 1], [0, 2], [3, 4], [3, 5], [6, 7]]
      },
      caption: "A sinistra l'anidride carbonica (CO₂: 1 carbonio nero + 2 ossigeni rossi), al centro l'acqua (H₂O), a destra l'ossigeno (O₂) che la pianta libera. La pianta smonta CO₂ e H₂O e con gli stessi atomi costruisce lo zucchero."
    },
    {
      type: "quiz",
      title: "Mini-quiz: la fotosintesi",
      questions: [
        { type: "mc", q: "Dove avviene soprattutto la fotosintesi?", options: ["Nelle radici", "Nelle foglie", "Nei fiori"], answer: 1, explain: "Le foglie contengono molta clorofilla e ricevono la luce." },
        { type: "mc", q: "Quale gas la pianta prende dall'aria per la fotosintesi?", options: ["Ossigeno", "Anidride carbonica", "Azoto"], answer: 1, explain: "Entra dagli stomi l'anidride carbonica (CO₂)." },
        { type: "tf", q: "La clorofilla è la sostanza verde che cattura l'energia della luce.", answer: true, explain: "È lei che dà il colore verde alle foglie." }
      ]
    },
    {
      type: "text",
      title: "Le piante respirano e traspirano",
      html: `<p>Attenzione a non confondere!</p>
<ul>
<li><b>Fotosintesi</b>: avviene <b>solo con la luce</b>. Prende anidride carbonica e libera ossigeno.</li>
<li><b>Respirazione</b>: avviene <b>sempre, giorno e notte</b>, come in noi. La pianta usa un po' di ossigeno per "bruciare" lo zucchero e avere energia, e libera anidride carbonica.</li>
</ul>
<p>Di giorno la fotosintesi è molto più forte della respirazione, quindi alla fine la pianta <b>produce molto più ossigeno di quanto ne consuma</b>.</p>
<p>La <b>traspirazione</b>: dagli stomi esce anche vapore acqueo. Un grande albero in un giorno d'estate può far evaporare centinaia di litri d'acqua! Questa "evaporazione" tira su la linfa dalle radici, come quando succhi con una cannuccia.</p>`
    },
    {
      type: "text",
      title: "Come si riproducono le piante con i fiori",
      html: `<ol>
<li><b>Il fiore</b>: al centro c'è il <b>pistillo</b> (parte femminile, con l'<b>ovario</b>); intorno gli <b>stami</b> (parte maschile) con il <b>polline</b>. I <b>petali</b> colorati attirano gli insetti; i <b>sepali</b> verdi proteggono il bocciolo.</li>
<li><b>Impollinazione</b>: il polline viene portato da un fiore all'altro dal <b>vento</b> o dagli <b>animali</b> (api, farfalle, colibrì…), che cercano il <b>nettare</b> zuccherino.</li>
<li><b>Fecondazione</b>: il polline raggiunge l'ovario; lì si formano i <b>semi</b>.</li>
<li>L'ovario si ingrossa e diventa il <b>frutto</b>, che protegge i semi.</li>
<li><b>Disseminazione</b>: i semi vengono sparsi dal vento (il soffione 🌬️), dall'acqua (la noce di cocco 🥥) o dagli animali che mangiano i frutti.</li>
<li><b>Germinazione</b>: con acqua, aria e il giusto calore il seme si apre: esce prima la radichetta, poi il fusticino con le prime foglioline.</li>
</ol>
<p>Ci sono anche piante <b>senza fiori</b>: i <b>muschi</b> e le <b>felci</b> si riproducono con le <b>spore</b>; i <b>pini</b> e gli <b>abeti</b> (conifere) hanno i semi nelle <b>pigne</b>, non dentro un frutto.</p>`
    },
    {
      type: "widget",
      title: "Le fasi della vita di una pianta",
      widget: "match",
      options: {
        pairs: [
          ["🌰 Germinazione", "Dal seme esce la radichetta"],
          ["🍃 Crescita", "Spuntano fusto e foglie: inizia la fotosintesi"],
          ["🌸 Fioritura", "Si aprono i fiori con stami e pistillo"],
          ["🐝 Impollinazione", "Il polline va da un fiore all'altro"],
          ["🍎 Fruttificazione", "L'ovario diventa frutto con i semi"],
          ["🌬️ Disseminazione", "Vento, acqua e animali spargono i semi"]
        ]
      },
      caption: "Abbina ogni fase del ciclo vitale alla sua descrizione. Per un fagiolo, dalla semina ai baccelli maturi passano circa 2 mesi."
    },
    {
      type: "example",
      title: "Esempio pratico: il fagiolo nel barattolo",
      html: `<p>Un esperimento che si fa in tutte le scuole:</p>
<ol>
<li>Metti del cotone bagnato in un barattolo di vetro e appoggia 2–3 fagioli fra il cotone e il vetro.</li>
<li>Tieni il cotone sempre umido, ma non allagato.</li>
<li>Dopo 2–4 giorni vedrai uscire la <b>radichetta</b> che va <b>sempre verso il basso</b>, anche se giri il fagiolo!</li>
<li>Poi il fusticino va <b>verso l'alto e verso la luce</b>.</li>
</ol>
<p>Prova: metti un barattolo al buio e uno vicino alla finestra. Quello al buio crescerà lungo, sottile e giallino: senza luce non può fare la fotosintesi e consuma le riserve del seme.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: il sedano colorato",
      html: `<p>Metti un gambo di <b>sedano</b> (con le foglie) in un bicchiere d'acqua con qualche goccia di <b>colorante alimentare</b> rosso o blu.</p>
<p>Dopo qualche ora vedrai le foglie colorarsi! Taglia il gambo: vedrai dei puntini colorati, sono i <b>vasi</b> in cui sale la linfa grezza. È la prova che l'acqua sale dalle radici alle foglie.</p>
<p>Con un fiore bianco (un garofano o una margherita) i petali diventano colorati: un vero fiore "magico"!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Metà del nostro ossigeno viene dal mare",
      html: `<p>Non solo gli alberi: più o meno <b>la metà dell'ossigeno</b> della Terra è prodotta da minuscoli esseri verdi che vivono negli oceani, il <b>fitoplancton</b> (alghe microscopiche e cianobatteri). Furono proprio i cianobatteri, più di 2 miliardi e mezzo di anni fa, a riempire per la prima volta l'aria di ossigeno.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Perché in autunno le foglie cambiano colore",
      html: `<p>Le foglie contengono anche pigmenti gialli e arancioni (i <b>carotenoidi</b>, gli stessi delle carote), ma d'estate la tanta clorofilla verde li nasconde. In autunno, con meno luce e più freddo, l'albero smette di produrre clorofilla: il verde sparisce e compaiono il giallo e l'arancio. Il rosso invece viene da nuovi pigmenti, gli <b>antociani</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Gli alberi giganti",
      html: `<p>L'albero più alto conosciuto è una sequoia della California soprannominata <b>Hyperion</b>: è alta circa <b>116 metri</b>, più del Big Ben! E alcuni pini <i>Pinus longaeva</i>, sempre negli Stati Uniti, hanno più di <b>4800 anni</b>: erano già germogliati quando gli Egizi costruivano le piramidi.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Parti della pianta: <b>radice</b> (assorbe), <b>fusto</b> (sostiene e trasporta), <b>foglie</b> (fotosintesi), <b>fiore</b>, <b>frutto</b> e <b>seme</b> (riproduzione).</li>
<li>Fotosintesi: <b>acqua + anidride carbonica + luce → zucchero + ossigeno</b>, grazie alla <b>clorofilla</b>.</li>
<li>Linfa <b>grezza</b> (acqua e sali) sale; linfa <b>elaborata</b> (zuccheri) scende.</li>
<li>Le piante sono <b>autotrofe</b>; respirano giorno e notte.</li>
<li>Riproduzione: impollinazione → fecondazione → seme e frutto → disseminazione → germinazione.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la fotosintesi",
      intro: "La fotosintesi è invisibile ai nostri occhi. Ecco altri modi per \"vederla\": un'analogia, un esperimento storico, un modello 3D e un gioco.",
      tabs: [
        {
          label: "🍳 La pianta-cuoca",
          html: `<p>Immagina la foglia come una <b>cucina</b>:</p>
<ul>
<li>gli <b>ingredienti</b> sono l'acqua (arriva dalle radici con il "montacarichi" del fusto) e l'anidride carbonica (entra dalle "finestre", gli stomi);</li>
<li>il <b>fornello</b> è la clorofilla, che si accende solo con la luce del Sole ☀️;</li>
<li>la <b>torta</b> è lo zucchero, che viene spedito in tutta la pianta;</li>
<li>il <b>fumo</b> che esce dalla finestra è l'ossigeno… solo che questo "fumo" è utilissimo per noi!</li>
</ul>
<p>Di notte il fornello è spento: la pianta mangia le torte avanzate (respirazione).</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0fdf4"/>
<rect x="200" y="70" width="200" height="130" rx="16" fill="#86efac" stroke="#166534" stroke-width="4"/>
<text x="300" y="120" font-size="24" text-anchor="middle" fill="#14532d" font-weight="bold">🍃 cucina</text>
<text x="300" y="160" font-size="18" text-anchor="middle" fill="#14532d">fornello = clorofilla</text>
<text x="40" y="90" font-size="18" fill="#1d4ed8">💧 acqua ➜</text>
<text x="40" y="150" font-size="18" fill="#1d4ed8">CO₂ ➜</text>
<text x="300" y="45" font-size="20" text-anchor="middle" fill="#a16207">☀️ luce ⬇</text>
<text x="420" y="110" font-size="18" fill="#b45309">➜ 🍰 zucchero</text>
<text x="420" y="160" font-size="18" fill="#15803d">➜ 🌬️ ossigeno</text>
</svg>`
        },
        {
          label: "🧪 L'esperimento del salice",
          html: `<p>Verso il <b>1640</b> il medico fiammingo <b>Jan Baptist van Helmont</b> fece un esperimento famoso. Pesò la terra di un grande vaso (circa 90 kg) e ci piantò un salice di 2,3 kg. Per <b>5 anni</b> diede solo acqua piovana.</p>
<p>Alla fine il salice pesava circa <b>77 kg</b>… ma la terra era diminuita di appena <b>57 grammi</b>! Van Helmont concluse che la pianta era cresciuta "con l'acqua". Aveva ragione solo in parte: oggi sappiamo che gran parte del legno è fatta di <b>carbonio preso dall'aria</b> (dall'anidride carbonica)!</p>
<p>Un albero è quindi fatto soprattutto… di aria e acqua, cucinate con la luce del Sole.</p>`
        },
        {
          label: "🌳 Il tronco in 3D",
          html: `<p>Taglia (virtualmente!) un tronco e guarda dentro. Dall'esterno: la <b>corteccia</b> protegge; il <b>libro</b> (o floema) porta giù la linfa elaborata; il <b>cambio</b> è lo strato che fa crescere il tronco in larghezza; l'<b>alburno</b> (xilema giovane) porta su la linfa grezza; il <b>durame</b>, scuro e duro, sostiene l'albero; al centro il <b>midollo</b>.</p>
<p>Ogni anno il cambio aggiunge un nuovo strato di legno: sono gli <b>anelli</b>. Contandoli si scopre l'età dell'albero!</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#78350f", label: "Corteccia" },
              { r: 0.9, color: "#a16207", label: "Libro (linfa elaborata ⬇)" },
              { r: 0.84, color: "#65a30d", label: "Cambio" },
              { r: 0.8, color: "#fde68a", label: "Alburno (linfa grezza ⬆)" },
              { r: 0.55, color: "#b45309", label: "Durame" },
              { r: 0.1, color: "#451a03", label: "Midollo" }
            ]
          }
        },
        {
          label: "🗂️ Gioco: entra o esce?",
          html: `<p>Durante la fotosintesi, che cosa <b>entra</b> nella pianta e che cosa <b>esce</b> (o viene prodotto)? Sposta ogni carta nel gruppo giusto.</p>`,
          widget: "classify",
          options: {
            groups: ["Entra / serve", "Esce / viene prodotto"],
            items: [
              ["💧 acqua", 0],
              ["☀️ luce", 0],
              ["🌫️ anidride carbonica", 0],
              ["🧂 sali minerali", 0],
              ["🌬️ ossigeno", 1],
              ["🍬 zucchero (glucosio)", 1],
              ["💨 vapore acqueo (traspirazione)", 1]
            ]
          }
        },
        {
          label: "🕯️ La candela di Priestley",
          html: `<p>Nel <b>1771</b> l'inglese <b>Joseph Priestley</b> mise una candela accesa sotto una campana di vetro: dopo poco si spegneva, perché "rovinava" l'aria. Poi mise sotto la campana un rametto di <b>menta</b>. Dopo alcuni giorni la candela poteva di nuovo bruciare!</p>
<p>La pianta aveva "aggiustato" l'aria. Pochi anni dopo (1779) l'olandese <b>Jan Ingenhousz</b> scoprì che le piante lo fanno <b>solo alla luce</b> e solo con le parti verdi. Era la scoperta della fotosintesi.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della fotosintesi: tocca un nodo e scopri il perché",
      nodes: [
        { id: "sole", label: "Luce del Sole", x: 50, y: 6, color: "#eab308", html: "La fonte di energia della fotosintesi.", why: "Il Sole produce energia unendo atomi di idrogeno (fusione nucleare). Questa energia viaggia nello spazio come luce e arriva sulla Terra in circa 8 minuti. Ingenhousz (1779) dimostrò che senza luce le piante non producono ossigeno." },
        { id: "clorofilla", label: "Clorofilla", x: 50, y: 28, color: "#16a34a", html: "Il pigmento verde delle foglie che cattura la luce.", why: "Assorbe soprattutto la luce rossa e blu e \"scarta\" quella verde, che viene riflessa: per questo vediamo le foglie verdi. Fu isolata e chiamata così nel 1817 dai francesi Pelletier e Caventou (dal greco <i>chlorós</i> = verde chiaro e <i>phýllon</i> = foglia)." },
        { id: "acqua", label: "Acqua (H₂O)", x: 12, y: 28, color: "#0ea5e9", html: "Arriva dalle radici con la linfa grezza.", why: "Nel 1804 lo svizzero Nicolas-Théodore de Saussure dimostrò, pesando con cura piante e aria, che l'acqua entra a far parte della pianta durante la fotosintesi." },
        { id: "co2", label: "Anidride carbonica (CO₂)", x: 88, y: 28, color: "#64748b", html: "Gas presente nell'aria, entra dagli stomi.", why: "Il ginevrino Jean Senebier dimostrò nel 1782 che le piante assorbono \"aria fissa\" (anidride carbonica). È da lì che viene il carbonio di cui è fatto il legno: lo aveva intuito, senza saperlo, l'esperimento del salice di van Helmont." },
        { id: "stomi", label: "Stomi", x: 88, y: 52, color: "#0f766e", html: "Piccolissime aperture sulla foglia che si aprono e si chiudono.", why: "Sono come porte: fanno entrare la CO₂ ma lasciano uscire vapore acqueo. Quando fa molto caldo e secco si chiudono per non far seccare la pianta." },
        { id: "zucchero", label: "Zucchero (glucosio)", x: 30, y: 62, color: "#f97316", html: "Il cibo prodotto dalla pianta, trasportato con la linfa elaborata.", why: "Contiene \"impacchettata\" l'energia della luce. La pianta lo usa per crescere, lo trasforma in amido (riserva, come nelle patate) e in cellulosa (il legno). Il percorso chimico esatto fu scoperto da Melvin Calvin negli anni '50 (Premio Nobel 1961)." },
        { id: "ossigeno", label: "Ossigeno (O₂)", x: 70, y: 72, color: "#22c55e", html: "Gas liberato dalla pianta, che noi respiriamo.", why: "Viene dalle molecole d'acqua che la clorofilla \"spezza\" con l'energia della luce. Priestley (1771) vide che una pianta rendeva di nuovo \"respirabile\" l'aria." },
        { id: "catena", label: "Catena alimentare", x: 50, y: 94, color: "#a855f7", html: "Le piante sono i produttori: tutti gli altri esseri viventi dipendono da loro.", why: "Gli erbivori mangiano le piante, i carnivori mangiano gli erbivori: quasi tutta l'energia degli esseri viventi è nata come luce catturata dalla fotosintesi." }
      ],
      edges: [
        ["sole", "clorofilla", "viene catturata da"],
        ["acqua", "clorofilla", "ingrediente"],
        ["co2", "clorofilla", "ingrediente"],
        ["stomi", "co2", "fanno entrare"],
        ["clorofilla", "zucchero", "produce"],
        ["clorofilla", "ossigeno", "libera"],
        ["zucchero", "catena", "nutre"],
        ["ossigeno", "catena", "fa respirare"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: linfa e riproduzione",
      questions: [
        { type: "mc", q: "La linfa grezza è fatta di…", options: ["acqua e sali minerali", "zucchero e acqua", "ossigeno"], answer: 0, explain: "La linfa grezza sale dalle radici: acqua e sali minerali." },
        { type: "order", q: "Metti in ordine le fasi.", items: ["Impollinazione", "Fecondazione", "Formazione di seme e frutto", "Disseminazione", "Germinazione"], explain: "Il polline arriva al fiore, feconda l'ovario, si formano semi e frutto, i semi vengono sparsi e poi germinano." },
        { type: "tf", q: "Le piante respirano solo di notte.", answer: false, explain: "Respirano sempre, giorno e notte; di giorno però la fotosintesi è molto più forte." }
      ]
    }
  ],
  glossary: [
    { t: "Fotosintesi", d: "Processo con cui le piante producono zucchero da acqua e anidride carbonica usando l'energia della luce, liberando ossigeno." },
    { t: "Clorofilla", d: "Sostanza verde che cattura l'energia della luce." },
    { t: "Stomi", d: "Piccole aperture sulle foglie da cui passano i gas e il vapore acqueo." },
    { t: "Linfa grezza", d: "Acqua e sali minerali che salgono dalle radici alle foglie." },
    { t: "Linfa elaborata", d: "Acqua e zuccheri prodotti dalle foglie, che nutrono tutta la pianta." },
    { t: "Autotrofo", d: "Essere vivente che produce da sé il proprio cibo." },
    { t: "Traspirazione", d: "Uscita di vapore acqueo dalle foglie." },
    { t: "Impollinazione", d: "Trasporto del polline dagli stami al pistillo." },
    { t: "Germinazione", d: "Nascita di una nuova piantina dal seme." },
    { t: "Spore", d: "Piccolissime cellule con cui si riproducono muschi e felci." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale parte della pianta assorbe acqua e sali minerali?", options: ["La foglia", "La radice", "Il fiore"], answer: 1, explain: "La radice, con i peli radicali." },
      { type: "mc", q: "Che cosa produce la pianta con la fotosintesi?", options: ["Zucchero e ossigeno", "Acqua e sali", "Anidride carbonica e polline"], answer: 0, explain: "Zucchero (cibo) e ossigeno." },
      { type: "tf", q: "Senza luce la pianta non può fare la fotosintesi.", answer: true, explain: "La luce è la fonte di energia necessaria." },
      { type: "text", q: "Come si chiama la sostanza verde delle foglie?", answer: ["clorofilla", "la clorofilla"], explain: "La clorofilla." },
      { type: "mc", q: "Le piante sono organismi…", options: ["eterotrofi", "autotrofi", "carnivori"], answer: 1, explain: "Producono il cibo da sole: autotrofi." },
      { type: "tf", q: "La linfa elaborata sale dalle radici alle foglie.", answer: false, explain: "Sale la linfa grezza; quella elaborata parte dalle foglie e porta lo zucchero in tutta la pianta." },
      { type: "mc", q: "Da dove entra l'anidride carbonica nella foglia?", options: ["Dai peli radicali", "Dagli stomi", "Dai petali"], answer: 1, explain: "Dagli stomi, minuscole aperture della foglia." },
      { type: "order", q: "Metti in ordine il viaggio dell'acqua.", items: ["Terreno", "Radice", "Fusto", "Foglia", "Esce come vapore dagli stomi"], explain: "Assorbita dalle radici, sale nel fusto, arriva alle foglie ed esce in parte con la traspirazione." },
      { type: "mc", q: "Quale di queste piante si riproduce con le spore?", options: ["Il melo", "La felce", "Il girasole"], answer: 1, explain: "Felci e muschi non hanno fiori: usano le spore." },
      { type: "mc", q: "Il frutto si forma da…", options: ["l'ovario del fiore", "la radice", "le foglie"], answer: 0, explain: "Dopo la fecondazione l'ovario si ingrossa e diventa il frutto." },
      { type: "tf", q: "In autunno le foglie ingialliscono perché la clorofilla si smonta e si vedono altri pigmenti.", answer: true, explain: "I carotenoidi gialli e arancioni c'erano già, nascosti dal verde." }
    ]
  }
});

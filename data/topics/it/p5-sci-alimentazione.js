TOPIC('it', {
  id: "p5-sci-alimentazione",
  title: "L'alimentazione",
  intro: "Il cibo non serve solo a togliere la fame: è il <b>carburante</b> e il <b>materiale da costruzione</b> del tuo corpo. Scopriamo quali sono i <b>nutrienti</b>, a che cosa servono, come leggere la <b>piramide alimentare</b> e perché la <b>dieta mediterranea</b> è considerata una delle più sane del mondo.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Perché mangiamo?",
      html: `<p>Il nostro corpo ha bisogno del cibo per tre motivi:</p>
<ul>
<li>⚡ <b>energia</b>: per muoversi, respirare, pensare, mantenere il corpo caldo a circa 37 °C (anche quando dormi!);</li>
<li>🧱 <b>costruzione</b>: per crescere e riparare i tessuti (ossa, muscoli, pelle, capelli);</li>
<li>🛡️ <b>protezione e regolazione</b>: per far funzionare bene tutti gli organi e difendersi dalle malattie.</li>
</ul>
<p>Le sostanze utili contenute negli alimenti si chiamano <b>nutrienti</b> (o principi nutritivi). Nessun alimento li contiene tutti nella giusta quantità: per questo bisogna mangiare <b>in modo vario</b>.</p>`
    },
    {
      type: "text",
      title: "I nutrienti e il loro lavoro",
      html: `<table>
<tr><th>Nutriente</th><th>A che cosa serve</th><th>Dove si trova</th></tr>
<tr><td>🍝 <b>Carboidrati</b> (zuccheri e amidi)</td><td>danno <b>energia</b> pronta</td><td>pasta, pane, riso, patate, frutta, miele</td></tr>
<tr><td>🥩 <b>Proteine</b></td><td><b>costruiscono</b> e riparano muscoli e tessuti</td><td>carne, pesce, uova, legumi, latte e formaggi</td></tr>
<tr><td>🫒 <b>Grassi</b> (lipidi)</td><td>energia di <b>riserva</b>, isolano dal freddo, servono alle cellule</td><td>olio, burro, frutta secca, pesce azzurro</td></tr>
<tr><td>🍊 <b>Vitamine</b></td><td><b>proteggono</b> e regolano il corpo</td><td>frutta e verdura soprattutto</td></tr>
<tr><td>🥛 <b>Sali minerali</b></td><td>costruiscono ossa e denti (calcio), il sangue (ferro)…</td><td>latte, verdure, legumi, acqua</td></tr>
<tr><td>💧 <b>Acqua</b></td><td>trasporta, raffredda, è il 60% del corpo</td><td>da bere, ma anche in frutta e verdura</td></tr>
</table>
<p>Ci sono anche le <b>fibre</b> (in verdura, frutta, cereali integrali e legumi): non nutrono, ma aiutano l'intestino a funzionare bene.</p>`
    },
    {
      type: "widget",
      title: "Che nutriente prevale?",
      widget: "classify",
      options: {
        groups: ["⚡ Carboidrati", "🧱 Proteine", "🫒 Grassi", "🍊 Vitamine e fibre"],
        items: [
          ["🍝 Pasta", 0],
          ["🍞 Pane", 0],
          ["🥔 Patate", 0],
          ["🐟 Pesce", 1],
          ["🥚 Uova", 1],
          ["🫘 Lenticchie", 1],
          ["🧈 Burro", 2],
          ["🫒 Olio d'oliva", 2],
          ["🥕 Carote", 3],
          ["🥦 Broccoli", 3],
          ["🍊 Arancia", 3]
        ]
      },
      caption: "Ogni alimento contiene più nutrienti: mettilo nel gruppo di quello che prevale."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i nutrienti",
      questions: [
        { type: "mc", q: "Quali nutrienti servono soprattutto a costruire i muscoli?", options: ["Carboidrati", "Proteine", "Grassi"], answer: 1, explain: "Le proteine sono il \"materiale da costruzione\" del corpo." },
        { type: "mc", q: "La pasta contiene soprattutto…", options: ["carboidrati", "proteine", "vitamine"], answer: 0, explain: "La pasta è ricca di amido, un carboidrato." },
        { type: "tf", q: "Esiste un alimento che contiene tutti i nutrienti nella giusta quantità.", answer: false, explain: "Nessun alimento è completo: per questo bisogna variare." }
      ]
    },
    {
      type: "text",
      title: "La piramide alimentare",
      html: `<p>La <b>piramide alimentare</b> è un disegno che mostra <b>quanto spesso</b> mangiare ogni gruppo di alimenti:</p>
<ul>
<li><b>alla base</b> (tutti i giorni, in abbondanza): <b>acqua</b>, <b>frutta e verdura</b> (almeno 5 porzioni al giorno) e <b>cereali</b> (pane, pasta, riso, meglio se integrali);</li>
<li><b>al centro</b> (tutti i giorni, con moderazione): <b>latte e yogurt</b>, <b>olio extravergine d'oliva</b>, frutta secca, erbe e spezie;</li>
<li><b>più in alto</b> (alcune volte a settimana): <b>legumi</b>, <b>pesce</b>, <b>uova</b>, carni bianche, formaggi;</li>
<li><b>in cima</b> (raramente, in piccole quantità): <b>carni rosse</b> e salumi, <b>dolci</b>, bibite zuccherate.</li>
</ul>
<p>Alla base della piramide c'è anche l'<b>attività fisica</b> ogni giorno: per un bambino almeno <b>60 minuti</b> di movimento!</p>`
    },
    {
      type: "svg",
      title: "La piramide della dieta mediterranea",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#fffbeb"/>
<polygon points="300,20 345,80 255,80" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<polygon points="255,80 345,80 390,140 210,140" fill="#fb923c" stroke="#7c2d12" stroke-width="2"/>
<polygon points="210,140 390,140 435,200 165,200" fill="#facc15" stroke="#713f12" stroke-width="2"/>
<polygon points="165,200 435,200 480,260 120,260" fill="#a3e635" stroke="#365314" stroke-width="2"/>
<polygon points="120,260 480,260 525,320 75,320" fill="#38bdf8" stroke="#0c4a6e" stroke-width="2"/>
<text x="300" y="70" font-size="22" text-anchor="middle">🍰🥓</text>
<text x="300" y="120" font-size="16" text-anchor="middle" font-weight="bold">pesce, uova, legumi, carne bianca</text>
<text x="300" y="180" font-size="16" text-anchor="middle" font-weight="bold">latte, yogurt, olio d'oliva, frutta secca</text>
<text x="300" y="238" font-size="16" text-anchor="middle" font-weight="bold">frutta, verdura, pane, pasta, riso</text>
<text x="300" y="298" font-size="16" text-anchor="middle" font-weight="bold">💧 acqua e 🏃 movimento ogni giorno</text>
<text x="490" y="55" font-size="15" fill="#7f1d1d">raramente</text>
<text x="410" y="115" font-size="15" fill="#7c2d12">a settimana</text>
<text x="450" y="175" font-size="15" fill="#713f12">ogni giorno, poco</text>
<text x="40" y="235" font-size="15" fill="#365314">a ogni pasto</text>
</svg>`,
      caption: "Più un gruppo è in basso e largo, più spesso va mangiato. Più è in alto e stretto, più va mangiato raramente."
    },
    {
      type: "text",
      title: "La giornata alimentare e il piatto sano",
      html: `<p>È meglio dividere il cibo in <b>5 pasti</b>:</p>
<ul>
<li>🥣 <b>colazione</b> (circa il 15–20% dell'energia della giornata): non saltarla, ti serve energia per la scuola!</li>
<li>🍎 <b>spuntino</b> di metà mattina (frutta, yogurt);</li>
<li>🍝 <b>pranzo</b> (circa il 35–40%);</li>
<li>🥪 <b>merenda</b> del pomeriggio;</li>
<li>🍲 <b>cena</b> (circa il 30%).</li>
</ul>
<p>Un trucco per comporre il piatto: <b>metà verdura e frutta</b>, <b>un quarto cereali</b> (meglio integrali), <b>un quarto proteine</b> (legumi, pesce, uova, carne), un filo di olio d'oliva e un bicchiere d'<b>acqua</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere l'etichetta",
      html: `<p>Sulla confezione dei biscotti trovi la <b>tabella nutrizionale</b>. Per 100 g:</p>
<table>
<tr><td>Energia</td><td>480 kcal</td></tr>
<tr><td>Grassi</td><td>20 g</td></tr>
<tr><td>Carboidrati</td><td>68 g</td></tr>
<tr><td>— di cui zuccheri</td><td><b>25 g</b></td></tr>
<tr><td>Proteine</td><td>7 g</td></tr>
</table>
<p>Su 100 g di biscotti, ben <b>25 g sono zuccheri</b>: un quarto! Se ne mangi 50 g (circa 6–7 biscotti) assumi 12,5 g di zucchero, cioè circa <b>3 cucchiaini</b>. L'Organizzazione Mondiale della Sanità consiglia di non superare circa <b>25 g</b> di zuccheri aggiunti al giorno.</p>
<p>Anche gli <b>ingredienti</b> sono utili: sono scritti in ordine dal più abbondante al meno abbondante.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: una merenda furba",
      html: `<p>Confrontiamo due merende:</p>
<ul>
<li>🥤 una lattina di bibita gassata (330 ml) contiene circa <b>35 g di zucchero</b> (7 cucchiaini!) e nient'altro di utile;</li>
<li>🍎 una mela con una manciata di noci dà zuccheri della frutta, <b>fibre</b>, <b>vitamine</b>, <b>grassi buoni</b> e un po' di proteine, e ti sazia di più.</li>
</ul>
<p>A parità di fame, la seconda merenda nutre molto meglio. Le bibite zuccherate stanno in cima alla piramide: ogni tanto sì, tutti i giorni no.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Lo scorbuto dei marinai",
      html: `<p>Un tempo, durante i lunghi viaggi in nave, molti marinai si ammalavano di <b>scorbuto</b>: sanguinavano le gengive e cadevano i denti. Nel <b>1747</b> il medico scozzese <b>James Lind</b> fece uno dei primi esperimenti scientifici della medicina: diede ad alcuni marinai malati arance e limoni, e guarirono in pochi giorni.</p>
<p>Oggi sappiamo che mancava la <b>vitamina C</b>. I marinai inglesi furono poi soprannominati "limeys", perché portavano a bordo succo di lime!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Patrimonio dell'umanità",
      html: `<p>Nel <b>2010</b> l'UNESCO ha riconosciuto la <b>dieta mediterranea</b> come <b>Patrimonio culturale immateriale dell'umanità</b>, insieme a Spagna, Grecia e Marocco (poi anche Cipro, Croazia e Portogallo).</p>
<p>Il nome lo rese famoso il medico americano <b>Ancel Keys</b>, che negli anni '50 studiò gli abitanti del Cilento, in Campania: mangiavano pane, pasta, verdure, legumi, pesce e olio d'oliva, e vivevano più a lungo e con meno malattie di cuore degli americani. Keys stesso visse per molti anni a Pioppi, nel Cilento, adottando quella dieta, e morì a 100 anni!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>I <b>nutrienti</b>: carboidrati (energia), proteine (costruzione), grassi (riserva), vitamine e sali minerali (protezione), acqua.</li>
<li>Mangia <b>vario</b>: nessun cibo è completo.</li>
<li>Piramide: <b>base</b> = tutti i giorni (frutta, verdura, cereali, acqua); <b>cima</b> = raramente (dolci, carni rosse, bibite).</li>
<li><b>5 pasti</b> al giorno, colazione compresa, e almeno <b>1 ora di movimento</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'alimentazione",
      intro: "Il cibo si capisce meglio con le mani, con un'analogia o guardando come mangiano in altre parti del mondo.",
      tabs: [
        {
          label: "🚗 Il corpo come un'auto",
          html: `<p>Pensa al corpo come a un'automobile:</p>
<ul>
<li>i <b>carboidrati</b> sono la <b>benzina</b> che usi subito;</li>
<li>i <b>grassi</b> sono la <b>tanica di riserva</b> nel bagagliaio;</li>
<li>le <b>proteine</b> sono i <b>pezzi di ricambio</b> e la carrozzeria;</li>
<li><b>vitamine e sali minerali</b> sono l'<b>olio</b> del motore e le piccole viti: ne serve poco, ma senza tutto si inceppa;</li>
<li>l'<b>acqua</b> è il <b>liquido di raffreddamento</b>.</li>
</ul>
<p>Solo benzina e niente olio? Il motore si rompe. Solo pezzi di ricambio e niente benzina? L'auto non parte!</p>`
        },
        {
          label: "🍽️ Il piatto unico nel mondo",
          html: `<p>Invece della piramide, in molti Paesi si usa l'immagine di un <b>piatto</b>:</p>
<ul>
<li>🇺🇸 <b>MyPlate</b> (Stati Uniti, dal 2011): un piatto diviso in 4 spicchi (frutta, verdura, cereali, proteine) più un bicchiere di latte;</li>
<li>🇬🇧 <b>Eatwell Guide</b> (Regno Unito): un piatto con fette di dimensioni diverse;</li>
<li>🇯🇵 in Giappone si usa una <b>trottola</b>: se manca una parte o non ti muovi, la trottola cade!</li>
<li>🇮🇹 in Italia, oltre alla piramide, il "<b>piatto del mangiar sano</b>" usato nelle scuole.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<circle cx="200" cy="130" r="115" fill="#ffffff" stroke="#94a3b8" stroke-width="6"/>
<path d="M200 130 L200 15 A115 115 0 0 0 85 130 Z" fill="#4ade80"/>
<path d="M200 130 L85 130 A115 115 0 0 0 200 245 Z" fill="#f87171"/>
<path d="M200 130 L200 245 A115 115 0 0 0 315 130 Z" fill="#fbbf24"/>
<path d="M200 130 L315 130 A115 115 0 0 0 200 15 Z" fill="#c084fc"/>
<text x="150" y="85" font-size="16" text-anchor="middle" font-weight="bold">verdura</text>
<text x="145" y="185" font-size="16" text-anchor="middle" font-weight="bold">frutta</text>
<text x="255" y="185" font-size="16" text-anchor="middle" font-weight="bold">cereali</text>
<text x="255" y="85" font-size="16" text-anchor="middle" font-weight="bold">proteine</text>
<rect x="370" y="90" width="50" height="80" rx="6" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/>
<text x="395" y="200" font-size="16" text-anchor="middle">acqua</text>
<text x="470" y="120" font-size="16" fill="#334155">metà piatto</text>
<text x="470" y="142" font-size="16" fill="#334155">frutta e verdura!</text>
</svg>`
        },
        {
          label: "🧪 L'esperimento dell'amido",
          html: `<p>Come si scopre se un cibo contiene <b>amido</b> (un carboidrato)? Con la <b>tintura di iodio</b> (chiedi a un adulto, si trova in farmacia):</p>
<ol>
<li>metti su un piattino una fetta di pane, una di patata, un pezzetto di mela, un po' di zucchero e di formaggio;</li>
<li>versa una goccia di iodio su ciascuno;</li>
<li>dove c'è amido il colore diventa <b>blu-nero</b>!</li>
</ol>
<p>Pane e patata diventano blu scuro; zucchero e formaggio no. E per i <b>grassi</b>? Strofina il cibo su un foglio di carta: se resta una macchia trasparente, contiene grassi!</p>`
        },
        {
          label: "⚛️ Lo zucchero in 3D",
          html: `<p>Il <b>glucosio</b> è lo zucchero che le cellule usano come carburante. Gli amidi della pasta e del pane sono lunghe catene di glucosio che la digestione "smonta" pezzo per pezzo.</p>
<p>Qui vedi un modello semplificato del suo "anello": 5 atomi di <b>carbonio</b> (neri) e 1 di <b>ossigeno</b> (rosso). Il glucosio completo ha 6 carboni, 12 idrogeni e 6 ossigeni: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 1, z: 0, r: 0.35, color: "#ef4444", label: "O" },
              { x: 0.87, y: 0.5, z: 0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: 0.87, y: -0.5, z: -0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: 0, y: -1, z: 0, r: 0.38, color: "#1f2937", label: "C" },
              { x: -0.87, y: -0.5, z: 0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: -0.87, y: 0.5, z: -0.2, r: 0.38, color: "#1f2937", label: "C" },
              { x: -1.6, y: 1.1, z: 0, r: 0.38, color: "#1f2937", label: "C" }
            ],
            bonds: [ [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [5, 6] ]
          }
        },
        {
          label: "🃏 Carte dei nutrienti",
          html: `<p>Gira le carte e ripassa: a che cosa serve ogni nutriente?</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🍝 Carboidrati", back: "Energia pronta: pasta, pane, riso, patate, frutta" },
              { front: "🥚 Proteine", back: "Costruiscono e riparano: carne, pesce, uova, legumi, latte" },
              { front: "🫒 Grassi", back: "Energia di riserva e protezione dal freddo: olio, burro, noci" },
              { front: "🍊 Vitamine", back: "Proteggono e regolano: frutta e verdura" },
              { front: "🦴 Calcio", back: "Sale minerale per ossa e denti: latte, formaggi, verdure verdi" },
              { front: "🩸 Ferro", back: "Sale minerale per il sangue: legumi, carne, verdure a foglia" },
              { front: "💧 Acqua", back: "Trasporta e raffredda: circa il 60% del corpo" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'alimentazione: tocca un nodo",
      nodes: [
        { id: "cibo", label: "Alimenti", x: 50, y: 6, color: "#2563eb", html: "Tutto ciò che mangiamo e beviamo.", why: "Gli animali, uomo compreso, non sanno fabbricarsi il cibo da soli come le piante con la fotosintesi: devono prenderlo da altri esseri viventi (sono <b>eterotrofi</b>)." },
        { id: "nutrienti", label: "Nutrienti", x: 50, y: 28, color: "#16a34a", html: "Le sostanze utili contenute negli alimenti.", why: "Il chimico tedesco <b>Justus von Liebig</b> (metà dell'Ottocento) e altri scienziati scoprirono che i cibi sono fatti di pochi tipi di sostanze: zuccheri, grassi e proteine." },
        { id: "energia", label: "Carboidrati e grassi", x: 15, y: 50, color: "#f59e0b", html: "Nutrienti che danno energia.", why: "Nelle cellule, zuccheri e grassi \"bruciano\" lentamente con l'ossigeno (respirazione cellulare) e liberano energia. Lo scoprì in parte <b>Antoine Lavoisier</b> nel Settecento, misurando il calore prodotto da una cavia." },
        { id: "proteine", label: "Proteine", x: 40, y: 54, color: "#ef4444", html: "Nutrienti per costruire e riparare.", why: "Muscoli, pelle, capelli, enzimi e anticorpi sono fatti di proteine. Il nome, dal greco <i>prôtos</i> (\"primo, il più importante\"), lo propose il chimico <b>Berzelius</b> nel 1838." },
        { id: "vitamine", label: "Vitamine e sali", x: 65, y: 54, color: "#a855f7", html: "Sostanze protettive, servono in piccole quantità.", why: "Furono scoperte studiando malattie da carenza come lo scorbuto e il beriberi. Il nome <i>vitamine</i> (\"ammine della vita\") lo inventò il biochimico polacco <b>Casimir Funk</b> nel 1912." },
        { id: "acqua", label: "Acqua", x: 88, y: 50, color: "#0ea5e9", html: "Circa il 60% del nostro corpo.", why: "Tutte le reazioni delle cellule avvengono in acqua; il sangue è soprattutto acqua. Ne perdiamo ogni giorno con sudore, respiro e urina, quindi va reintegrata bevendo (circa 1,5 litri al giorno per un bambino)." },
        { id: "piramide", label: "Piramide alimentare", x: 30, y: 80, color: "#84cc16", html: "Disegno che indica quanto spesso mangiare ogni gruppo di cibi.", why: "La prima piramide alimentare fu creata in <b>Svezia</b> nel <b>1974</b> per aiutare le famiglie a mangiare sano spendendo poco. Poi l'idea si diffuse in tutto il mondo." },
        { id: "mediterranea", label: "Dieta mediterranea", x: 70, y: 80, color: "#14b8a6", html: "Il modo tradizionale di mangiare dei Paesi del Mediterraneo.", why: "Studiata da <b>Ancel Keys</b> dagli anni '50, anche nel Cilento. Molti vegetali, cereali, legumi, pesce e olio d'oliva proteggono cuore e vasi sanguigni. UNESCO: patrimonio dell'umanità dal 2010." },
        { id: "movimento", label: "Movimento", x: 50, y: 96, color: "#64748b", html: "Almeno 60 minuti al giorno per i bambini.", why: "Il corpo usa l'energia del cibo per muoversi: se ne entra più di quanta se ne consuma, si accumula come grasso. L'Organizzazione Mondiale della Sanità raccomanda 1 ora di attività fisica al giorno tra i 5 e i 17 anni." }
      ],
      edges: [
        ["cibo", "nutrienti", "contengono"],
        ["nutrienti", "energia", "per l'energia"],
        ["nutrienti", "proteine", "per costruire"],
        ["nutrienti", "vitamine", "per proteggere"],
        ["nutrienti", "acqua", "e poi l'"],
        ["energia", "piramide", "base della"],
        ["piramide", "mediterranea", "modello italiano"],
        ["piramide", "movimento", "alla base c'è il"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la piramide",
      questions: [
        { type: "mc", q: "Che cosa si trova alla base della piramide alimentare?", options: ["Dolci e bibite", "Frutta, verdura, cereali e acqua", "Carne rossa"], answer: 1, explain: "Alla base ci sono i cibi da mangiare tutti i giorni." },
        { type: "num", q: "Quante porzioni di frutta e verdura si consiglia di mangiare ogni giorno (almeno)?", answer: 5, explain: "Almeno 5 porzioni al giorno." },
        { type: "tf", q: "Saltare la colazione aiuta ad avere più energia a scuola.", answer: false, explain: "La colazione fornisce l'energia per la mattina: non va saltata." }
      ]
    }
  ],
  glossary: [
    { t: "Nutrienti", d: "Sostanze contenute negli alimenti utili al corpo." },
    { t: "Carboidrati", d: "Zuccheri e amidi: danno energia pronta." },
    { t: "Proteine", d: "Nutrienti che costruiscono e riparano i tessuti." },
    { t: "Grassi (lipidi)", d: "Nutrienti che forniscono energia di riserva." },
    { t: "Vitamine", d: "Sostanze protettive necessarie in piccole quantità." },
    { t: "Sali minerali", d: "Sostanze come calcio e ferro, utili per ossa, sangue e molte funzioni." },
    { t: "Fibre", d: "Parti dei vegetali non digeribili che aiutano l'intestino." },
    { t: "Piramide alimentare", d: "Schema che indica la frequenza con cui consumare i gruppi di alimenti." },
    { t: "Dieta mediterranea", d: "Alimentazione tradizionale dei Paesi mediterranei, ricca di vegetali, cereali, legumi, pesce e olio d'oliva." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale nutriente dà soprattutto energia pronta?", options: ["Carboidrati", "Sali minerali", "Vitamine"], answer: 0, explain: "I carboidrati sono il carburante più rapido." },
      { type: "mc", q: "Quale alimento è ricco di proteine?", options: ["Lenticchie", "Zucchero", "Olio"], answer: 0, explain: "I legumi sono ricchi di proteine vegetali." },
      { type: "tf", q: "Le vitamine si trovano soprattutto in frutta e verdura.", answer: true, explain: "Frutta e verdura sono le principali fonti di vitamine." },
      { type: "text", q: "Quale vitamina manca a chi si ammala di scorbuto?", answer: ["c", "vitamina c", "la vitamina c"], explain: "La vitamina C, presente negli agrumi." },
      { type: "mc", q: "Quali alimenti stanno in cima alla piramide (da mangiare raramente)?", options: ["Pane e pasta", "Dolci e carni rosse", "Verdure"], answer: 1, explain: "Dolci, carni rosse e bibite zuccherate vanno consumati raramente." },
      { type: "num", q: "Quanti pasti al giorno sono consigliati?", answer: 5, explain: "Colazione, spuntino, pranzo, merenda e cena." },
      { type: "mc", q: "Circa quanta parte del nostro corpo è acqua?", options: ["10%", "60%", "95%"], answer: 1, explain: "Circa il 60% del peso di un adulto." },
      { type: "tf", q: "Le fibre aiutano l'intestino a funzionare bene.", answer: true, explain: "Le fibre favoriscono il transito intestinale." },
      { type: "order", q: "Metti in ordine i gruppi dalla base alla cima della piramide.", items: ["Acqua, frutta e verdura", "Cereali (pane, pasta, riso)", "Legumi, pesce e uova", "Dolci"], explain: "Più si sale, meno spesso si mangia." },
      { type: "mc", q: "In quale anno l'UNESCO ha riconosciuto la dieta mediterranea patrimonio dell'umanità?", options: ["1950", "2010", "2023"], answer: 1, explain: "Nel 2010." },
      { type: "num", q: "Una bibita ha 35 g di zucchero. Un cucchiaino ne contiene circa 5 g. Quanti cucchiaini contiene la bibita?", answer: 7, explain: "35 : 5 = 7 cucchiaini." }
    ]
  }
});

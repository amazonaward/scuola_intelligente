TOPIC('it', {
  id: "l4-mat-trigonometria",
  title: "La trigonometria",
  intro: "Come si misura l'altezza di una montagna senza salirci? Come fa il GPS a trovare la tua posizione? Come si calcola la distanza tra due sponde di un lago senza attraversarlo? La risposta è la <b>trigonometria</b> (dal greco <i>trigōnon</i>, triangolo, e <i>metron</i>, misura): lo studio delle relazioni tra <b>lati e angoli</b> di un triangolo. In questa lezione risolviamo i <b>triangoli rettangoli</b> con seno, coseno e tangente, poi passiamo ai triangoli qualunque con il <b>teorema dei seni</b> e il <b>teorema del coseno</b> (o di Carnot), e li usiamo per calcolare aree, distanze, altezze e forze.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "Triangoli rettangoli",
      html: `<p>In un triangolo rettangolo con ipotenusa <b>c</b>, cateti <b>a</b> e <b>b</b> e angoli acuti α (opposto ad a) e β (opposto a b), seno, coseno e tangente di α sono i rapporti:</p>
<ul>
<li><b>sen α = cateto opposto / ipotenusa = a/c</b></li>
<li><b>cos α = cateto adiacente / ipotenusa = b/c</b></li>
<li><b>tan α = cateto opposto / cateto adiacente = a/b</b></li>
</ul>
<p>Questi rapporti dipendono solo dall'angolo (i triangoli rettangoli con lo stesso angolo acuto sono simili) e coincidono con le definizioni sulla circonferenza goniometrica. Ne derivano i <b>due teoremi sui triangoli rettangoli</b>:</p>
<ol>
<li>un <b>cateto</b> è uguale all'<b>ipotenusa</b> per il <b>seno dell'angolo opposto</b> o per il <b>coseno dell'angolo adiacente</b>: a = c sen α = c cos β; b = c cos α = c sen β;</li>
<li>un <b>cateto</b> è uguale all'<b>altro cateto</b> per la <b>tangente dell'angolo opposto</b> al primo: a = b tan α; b = a tan β.</li>
</ol>
<p><b>Risolvere un triangolo</b> significa determinarne tutti i lati e gli angoli, a partire da alcuni elementi noti. Nel triangolo rettangolo basta conoscere, oltre all'angolo retto, <b>due elementi</b> (di cui almeno un lato): si usano i teoremi precedenti, il teorema di Pitagora (c² = a² + b²) e la somma degli angoli acuti α + β = 90°.</p>
<p><b>Esempio.</b> In un triangolo rettangolo l'ipotenusa è 10 e α = 30°. Allora a = 10 sen 30° = 5, b = 10 cos 30° = 5√3 ≈ 8,66 e β = 60°. Verifica: 5² + (5√3)² = 25 + 75 = 100 ✓.</p>`
    },
    {
      type: "svg",
      title: "Lati e angoli del triangolo rettangolo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,250 340,250 340,60" fill="#dbeafe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="320" y="230" width="20" height="20" fill="none" stroke="#1e3a8a" stroke-width="2"/>
<path d="M 100 250 A 40 40 0 0 0 96 233" fill="none" stroke="#0f172a" stroke-width="2"/>
<text x="108" y="242" font-size="16" fill="#0f172a">α</text>
<text x="350" y="160" font-size="16" fill="#1d4ed8" font-weight="bold">a (opposto ad α)</text>
<text x="150" y="275" font-size="16" fill="#166534" font-weight="bold">b (adiacente ad α)</text>
<text x="130" y="140" font-size="16" fill="#9a3412" font-weight="bold">c (ipotenusa)</text>
<text x="400" y="60" font-size="16" fill="#334155">sen α = a/c</text>
<text x="400" y="85" font-size="16" fill="#334155">cos α = b/c</text>
<text x="400" y="110" font-size="16" fill="#334155">tan α = a/b</text>
<text x="400" y="220" font-size="15" fill="#334155">a = c sen α = b tan α</text>
<text x="400" y="244" font-size="15" fill="#334155">b = c cos α</text>
</svg>`,
      caption: "I nomi opposto e adiacente dipendono dall'angolo considerato: per β si scambiano i ruoli dei due cateti."
    },
    {
      type: "example",
      title: "Esempio pratico: l'altezza di un albero",
      html: `<p>Ti metti a 20 m dal piede di un albero e con un goniometro (o con l'app clinometro del telefono) misuri l'angolo con cui vedi la cima: 35°. Il tuo occhio è a 1,60 m da terra. L'altezza della parte di albero sopra il tuo occhio è il cateto opposto ad α: h = 20 · tan 35° ≈ 20 · 0,700 = 14,0 m; l'albero è alto circa 14,0 + 1,6 = <b>15,6 m</b>. Lo stesso metodo funziona per campanili, edifici, montagne: basta misurare una distanza e un angolo. Un angolo di elevazione è sempre misurato rispetto all'orizzontale.</p>`
    },
    {
      type: "text",
      title: "L'area di un triangolo e il raggio della circonferenza circoscritta",
      html: `<p>Per un triangolo qualsiasi di lati a, b, c e angoli α, β, γ (opposti ai lati con lo stesso nome), l'altezza relativa al lato b è h = c sen α (proiezione di c sulla perpendicolare). L'area è quindi:</p>
<p style="text-align:center"><b>S = ½ · b · c · sen α = ½ · a · c · sen β = ½ · a · b · sen γ</b></p>
<p>L'area è "metà del prodotto di due lati per il seno dell'angolo compreso". Per α = 90° si ritrova S = ½ bc. <b>Esempio:</b> due lati di 8 cm e 5 cm formano un angolo di 60°: S = ½ · 8 · 5 · (√3/2) = 10√3 ≈ 17,3 cm².</p>
<p>Il <b>raggio R della circonferenza circoscritta</b> compare nel teorema dei seni (vedi sotto): a / sen α = 2R.</p>`
    },
    {
      type: "text",
      title: "Il teorema dei seni",
      html: `<p><b>Teorema dei seni.</b> In ogni triangolo i lati sono proporzionali ai seni degli angoli opposti, e il rapporto è il diametro della circonferenza circoscritta:</p>
<p style="text-align:center"><b>a / sen α = b / sen β = c / sen γ = 2R</b></p>
<p><b>Perché.</b> Si inscrive il triangolo in una circonferenza di raggio R. L'angolo alla circonferenza α insiste sulla corda a: costruendo il triangolo rettangolo che ha come ipotenusa il diametro 2R e lo stesso angolo (angoli alla circonferenza sullo stesso arco sono uguali), si ottiene a = 2R sen α. Lo stesso vale per b e c.</p>
<p><b>Quando si usa.</b> Quando si conosce una <b>coppia lato-angolo opposto</b> e un altro elemento: casi <b>ALA</b> (due angoli e il lato compreso), <b>AAL</b> (due angoli e un lato non compreso) e <b>LLA</b> (due lati e un angolo non compreso).</p>
<p><b>Esempio (ALA).</b> Si vuole conoscere la distanza AC attraverso un lago. Da due punti A e B della riva, con AB = 120 m, si misurano gli angoli in A (75°) e in B (50°). L'angolo in C è 180° − 75° − 50° = 55°. Allora AC / sen 50° = AB / sen 55° → AC = 120 · sen 50° / sen 55° ≈ 120 · 0,766 / 0,819 ≈ <b>112 m</b>.</p>
<p><b>Il caso ambiguo (LLA).</b> Se si conoscono due lati b, c e l'angolo β opposto a b, con il teorema dei seni si trova sen γ = c sen β / b, e γ può essere sia l'angolo acuto sia il suo supplementare! Esempio: β = 30°, b = 5, c = 8 → sen γ = 8 · 0,5/5 = 0,8 → γ ≈ 53,1° oppure γ ≈ 126,9°. In entrambi i casi β + γ &lt; 180°, quindi esistono <b>due triangoli</b> diversi che soddisfano i dati. Se invece il lato opposto all'angolo noto è maggiore o uguale all'altro lato, il triangolo è unico. Un altro risultato notevole: in un triangolo, a lato maggiore si oppone angolo maggiore.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: seni e triangoli",
      questions: [
        { type: "num", q: "In un triangolo rettangolo l'ipotenusa è 20 e un angolo acuto è 30°. Quanto misura il cateto opposto a quell'angolo?", answer: 10, explain: "a = c · sen 30° = 20 · 1/2 = 10." },
        { type: "num", q: "In un triangolo rettangolo il cateto adiacente all'angolo α = 45° è 7. Quanto misura il cateto opposto?", answer: 7, explain: "a = b tan 45° = 7 · 1 = 7 (il triangolo è isoscele)." },
        { type: "mc", q: "In un triangolo ABC, a = 6, α = 30°, β = 90°. Quanto misura b (ipotenusa)?", options: ["12", "6", "6√3"], answer: 0, explain: "b / sen 90° = a / sen 30° → b = 6/(1/2) = 12." }
      ]
    },
    {
      type: "text",
      title: "Il teorema del coseno (di Carnot)",
      html: `<p><b>Teorema del coseno.</b> In ogni triangolo il quadrato di un lato è uguale alla somma dei quadrati degli altri due, meno il doppio prodotto di questi per il coseno dell'angolo compreso:</p>
<p style="text-align:center"><b>a² = b² + c² − 2bc cos α</b></p>
<p>(e analogamente b² = a² + c² − 2ac cos β, c² = a² + b² − 2ab cos γ).</p>
<p>È una <b>generalizzazione del teorema di Pitagora</b>: se α = 90°, cos α = 0 e si ritrova a² = b² + c². Se α &lt; 90° il termine −2bc cos α è negativo e a² &lt; b² + c² (triangolo acutangolo in α); se α &gt; 90° è positivo e a² &gt; b² + c².</p>
<p><b>Dimostrazione.</b> Si pone il vertice A nell'origine, il lato AB lungo l'asse x (B = (c, 0)) e C = (b cos α, b sen α). La distanza BC è a² = (b cos α − c)² + (b sen α)² = b² cos²α − 2bc cos α + c² + b² sen²α = b² + c² − 2bc cos α.</p>
<p><b>Quando si usa.</b> Con due lati e l'angolo compreso (<b>LAL</b>) per trovare il terzo lato; con tre lati (<b>LLL</b>) per trovare gli angoli: <b>cos α = (b² + c² − a²) / (2bc)</b>.</p>
<p><b>Esempio completo.</b> Triangolo con b = 5, c = 8, α = 60°. Lato a: a² = 25 + 64 − 2 · 5 · 8 · (1/2) = 89 − 40 = 49 → <b>a = 7</b>. Angolo γ (opposto al lato maggiore): cos γ = (a² + b² − c²)/(2ab) = (49 + 25 − 64)/70 = 1/7 ≈ 0,1429 → γ ≈ 81,8°. Infine β = 180° − 60° − 81,8° = 38,2°. Controllo con i seni: sen β = 5 · sen 60° / 7 ≈ 0,619 → β ≈ 38,2° ✓.</p>
<p><b>Consiglio.</b> Per trovare un angolo, il coseno è più comodo del seno perché <b>distingue</b> gli angoli acuti da quelli ottusi (coseno positivo o negativo), mentre il seno dà lo stesso valore a un angolo e al suo supplementare.</p>`
    },
    {
      type: "remember",
      title: "Quale teorema scegliere?",
      html: `<p><b>Triangolo rettangolo</b>: seno, coseno, tangente e Pitagora. <b>Qualsiasi triangolo</b>: tre dati e uno schema: <b>LAL</b> o <b>LLL</b> → teorema del coseno; <b>ALA</b>, <b>AAL</b> o <b>LLA</b> → teorema dei seni (nel LLA attenzione al caso ambiguo). Prima di fare i conti, verifica che i dati permettano un triangolo (somma degli angoli 180°, disuguaglianza triangolare: ogni lato minore della somma degli altri due).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la risultante di due forze",
      html: `<p>Due persone tirano una slitta con due corde: una con forza di 30 N, l'altra di 40 N, formando un angolo di 60° tra loro. La forza risultante è la diagonale del parallelogramma, e per il teorema del coseno (nel triangolo formato dalle due forze, in cui l'angolo compreso è 180° − 60° = 120°) vale R² = 30² + 40² − 2 · 30 · 40 · cos 120° = 900 + 1600 + 1200 = 3700 → R ≈ <b>60,8 N</b>. Dunque due forze di 30 N e 40 N non fanno 70 N ma meno, perché non sono allineate: con angolo 0° farebbero 70 N, con angolo 90° farebbero √(900 + 1600) = 50 N.</p>`
    },
    {
      type: "svg",
      title: "Triangolo qualunque: lati, angoli, altezza",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="70,250 330,250 220,70" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<line x1="220" y1="70" x2="220" y2="250" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4"/>
<text x="56" y="270" font-size="16" fill="#0f172a" font-weight="bold">A</text>
<text x="334" y="270" font-size="16" fill="#0f172a" font-weight="bold">B</text>
<text x="216" y="60" font-size="16" fill="#0f172a" font-weight="bold">C</text>
<text x="84" y="236" font-size="15" fill="#0f172a">α</text>
<text x="290" y="238" font-size="15" fill="#0f172a">β</text>
<text x="210" y="106" font-size="15" fill="#0f172a">γ</text>
<text x="256" y="148" font-size="16" fill="#1d4ed8" font-weight="bold">a</text>
<text x="128" y="148" font-size="16" fill="#166534" font-weight="bold">b</text>
<text x="190" y="272" font-size="16" fill="#9a3412" font-weight="bold">c</text>
<text x="222" y="172" font-size="14" fill="#475569">h</text>
<text x="380" y="70" font-size="15" fill="#334155" font-weight="bold">Teorema dei seni</text>
<text x="380" y="92" font-size="15" fill="#334155">a/sen α = b/sen β = c/sen γ</text>
<text x="380" y="130" font-size="15" fill="#334155" font-weight="bold">Teorema del coseno</text>
<text x="380" y="152" font-size="15" fill="#334155">a² = b² + c² − 2bc cos α</text>
<text x="380" y="190" font-size="15" fill="#334155" font-weight="bold">Area</text>
<text x="380" y="212" font-size="15" fill="#334155">S = ½ b c sen α</text>
</svg>`,
      caption: "Convenzione: il lato a è opposto all'angolo α, il lato b a β, il lato c a γ nell'ordine A, B, C." 
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Eratostene e la Terra",
      html: `<p>Intorno al 240 a.C. <b>Eratostene di Cirene</b> misurò la circonferenza della Terra con un'idea trigonometrica: a Siene (oggi Assuan) a mezzogiorno del solstizio il Sole era allo zenit; ad Alessandria, nello stesso istante, le ombre indicavano un angolo di circa 7,2°, un cinquantesimo di angolo giro. Con la distanza tra le due città (circa 5000 stadi) ottenne una circonferenza di circa 250 000 stadi, un valore sorprendentemente vicino a quello reale (la conversione dello stadio in metri è incerta e quindi non si può dire con esattezza di quanto si sbagliasse). Tutto con un bastone, un'ombra e una proporzione.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il GPS e la triangolazione",
      html: `<p>Il <b>GPS</b> calcola la tua posizione misurando il tempo che un segnale impiega a raggiungerti da almeno quattro satelliti; le distanze sono raggi di sfere, e la posizione è la loro intersezione. Il metodo è un parente stretto della <b>triangolazione</b>, usata per i rilievi topografici: nel XIX secolo il <i>Great Trigonometrical Survey</i> dell'India misurò con catene di triangoli la posizione e le quote dell'Himalaya, e nel corso di queste misure si accertò che l'Everest era la montagna più alta. In Francia il teorema del coseno è noto come <b>teorema di Al-Kashi</b>, dal matematico e astronomo persiano del XV secolo che lo usò nelle sue tavole.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la trigonometria",
      intro: "Se i teoremi ti sembrano formule da imparare a memoria, prova questi punti di vista.",
      tabs: [
        {
          label: "🌳 Similitudine e ombra",
          html: `<p>Due triangoli rettangoli con gli stessi angoli sono <b>simili</b>: i rapporti tra i lati sono uguali. Se un bastone di 1 m proietta un'ombra di 1,5 m, l'albero accanto che proietta un'ombra di 12 m è alto 12 · (1/1,5) = 8 m. Il rapporto altezza/ombra è proprio la <b>tangente</b> dell'angolo dei raggi del Sole: tan α = 1/1,5 ≈ 0,667, cioè α ≈ 33,7°. Seno, coseno e tangente sono la "tabella dei rapporti" delle forme del triangolo, calcolata una volta per tutte.</p>`
        },
        {
          label: "📐 Carnot è Pitagora corretto",
          html: `<p>Il teorema di Pitagora funziona solo per l'angolo retto. Il teorema del coseno aggiunge il "termine di correzione" −2bc cos α, che misura <b>quanto l'angolo si scosta da 90°</b>: se l'angolo si chiude (acuto), il lato opposto diventa più corto di quanto direbbe Pitagora; se si apre (ottuso), diventa più lungo.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><polygon points="40,240 200,240 120,100" fill="#dcfce7" stroke="#166534" stroke-width="3"/><polygon points="250,240 410,240 330,170" fill="#fee2e2" stroke="#991b1b" stroke-width="3"/><polygon points="450,240 570,240 450,100" fill="#dbeafe" stroke="#1e3a8a" stroke-width="3"/><text x="40" y="275" font-size="15" fill="#166534" font-weight="bold">α acuto: a² &lt; b² + c²</text><text x="240" y="275" font-size="15" fill="#991b1b" font-weight="bold">α ottuso: a² &gt; b² + c²</text><text x="440" y="275" font-size="15" fill="#1e3a8a" font-weight="bold">retto: Pitagora</text><text x="40" y="40" font-size="16" fill="#334155">Il segno di cos α dice la forma del triangolo</text></svg>`
        },
        {
          label: "🔺 Prova con il triangolo rettangolo",
          html: `<p>Muovi i cateti per vedere come cambiano l'ipotenusa e gli angoli. Con un angolo fisso, il rapporto tra i lati non cambia mai: è proprio questo che rende possibile la trigonometria.</p>`,
          widget: "pythagoras"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della trigonometria",
      nodes: [
        { id: "rett", label: "Triangolo rettangolo", x: 15, y: 12, color: "#6366f1", html: "Seno, coseno e tangente come rapporti tra i lati; teoremi sui cateti.", why: "Nasce dalla similitudine: due triangoli con gli stessi angoli hanno gli stessi rapporti tra i lati. Le prime tabelle (Ipparco) servivano all'astronomia." },
        { id: "seni", label: "Teorema dei seni", x: 85, y: 12, color: "#16a34a", html: "a/sen α = b/sen β = c/sen γ = 2R.", why: "Segue dall'uguaglianza degli angoli alla circonferenza che insistono sulla stessa corda; collega i lati al raggio della circonferenza circoscritta." },
        { id: "cos", label: "Teorema del coseno", x: 50, y: 42, color: "#f59e0b", html: "a² = b² + c² − 2bc cos α.", why: "Si dimostra con le coordinate (distanza tra due punti) e generalizza Pitagora; è equivalente a conoscere lo 'scarto' dall'angolo retto." },
        { id: "area", label: "Area e circonferenza circoscritta", x: 15, y: 72, color: "#ef4444", html: "S = ½ bc sen α; R = a/(2 sen α).", why: "L'altezza di un triangolo è un cateto di un triangolo rettangolo: h = c sen α." },
        { id: "riso", label: "Risoluzione dei triangoli", x: 85, y: 72, color: "#0ea5e9", html: "LAL, LLL → coseno; ALA, AAL, LLA → seni (caso ambiguo).", why: "Un triangolo è determinato da tre elementi (di cui almeno un lato): sono i criteri di congruenza di Euclide, tradotti in formule." },
        { id: "app", label: "Applicazioni", x: 50, y: 90, color: "#a855f7", html: "Topografia, astronomia, navigazione, fisica (forze, vettori).", why: "La distanza e l'altezza inaccessibili si calcolano per triangolazione: una base misurata e due angoli bastano." }
      ],
      edges: [
        ["rett", "seni", "si estende a"],
        ["rett", "cos", "generalizza Pitagora"],
        ["rett", "area", "altezza"],
        ["seni", "riso", "usato in"],
        ["cos", "riso", "usato in"],
        ["riso", "app", "serve a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Carnot e aree",
      questions: [
        { type: "num", q: "In un triangolo b = 6, c = 8 e α = 90°. Quanto vale a?", answer: 10, explain: "Con α = 90° il teorema del coseno diventa Pitagora: a = √(36 + 64) = 10." },
        { type: "num", q: "Un triangolo ha due lati di 10 cm e 12 cm che formano un angolo di 30°. Quanti cm² misura l'area?", answer: 30, unit: "cm²", explain: "S = ½ · 10 · 12 · sen 30° = ½ · 120 · ½ = 30." },
        { type: "tf", q: "In un triangolo con a² &gt; b² + c² l'angolo α è ottuso.", answer: true, explain: "Dal teorema del coseno, a² − b² − c² = −2bc cos α &gt; 0 implica cos α &lt; 0." }
      ]
    }
  ],
  glossary: [
    { t: "Triangolo rettangolo", d: "Triangolo con un angolo di 90°; il lato opposto all'angolo retto è l'ipotenusa." },
    { t: "Teorema dei seni", d: "In un triangolo a/sen α = b/sen β = c/sen γ = 2R." },
    { t: "Teorema del coseno (di Carnot)", d: "a² = b² + c² − 2bc cos α: generalizza il teorema di Pitagora." },
    { t: "Risolvere un triangolo", d: "Calcolare tutti i lati e gli angoli a partire da alcuni dati." },
    { t: "Caso ambiguo", d: "Situazione LLA in cui i dati sono compatibili con due triangoli diversi." },
    { t: "Triangolazione", d: "Metodo per calcolare distanze inaccessibili con una base misurata e angoli." },
    { t: "Angolo di elevazione", d: "Angolo tra la visuale verso un punto in alto e il piano orizzontale." },
    { t: "Raggio circoscritto", d: "Raggio R della circonferenza passante per i tre vertici: 2R = a/sen α." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "In un triangolo rettangolo con ipotenusa 26 e un cateto 10, quanto misura l'altro cateto?", answer: 24, explain: "√(26² − 10²) = √(676 − 100) = √576 = 24." },
      { type: "mc", q: "In un triangolo rettangolo l'ipotenusa è 12 e un angolo acuto è 60°. Il cateto adiacente a quell'angolo misura…", options: ["6", "6√3", "12√3"], answer: 0, explain: "b = c cos 60° = 12 · 1/2 = 6." },
      { type: "tf", q: "Il teorema del coseno si può applicare anche ai triangoli rettangoli.", answer: true, explain: "Per α = 90° si riduce al teorema di Pitagora." },
      { type: "num", q: "In un triangolo b = 7, c = 8, α = 60°. Quanto vale a²?", answer: 57, explain: "a² = 49 + 64 − 2 · 7 · 8 · 1/2 = 113 − 56 = 57." },
      { type: "mc", q: "In un triangolo α = 45°, β = 60° e a = 10. Quanto vale b?", options: ["5√6", "10√3", "20/√3"], answer: 0, explain: "b = a sen β / sen α = 10 · (√3/2) / (√2/2) = 10√3/√2 = 5√6." },
      { type: "num", q: "Un triangolo ha lati a = 3, b = 4, c = 5. Quanto vale cos γ (angolo opposto a c)?", answer: 0, explain: "cos γ = (9 + 16 − 25)/24 = 0: il triangolo è rettangolo in C." },
      { type: "mc", q: "Dati β = 30°, b = 5, c = 8, quanti triangoli esistono?", options: ["Due", "Uno", "Nessuno"], answer: 0, explain: "sen γ = 0,8: γ ≈ 53,1° oppure ≈ 126,9°, entrambi compatibili con β + γ &lt; 180°." },
      { type: "tf", q: "Se tutti e tre gli angoli di un triangolo sono noti, il triangolo è univocamente determinato.", answer: false, explain: "Si determina solo la forma (triangoli simili): serve almeno un lato." },
      { type: "text", q: "Come si chiama il teorema a² = b² + c² − 2bc cos α? (nome breve)", answer: ["teorema del coseno", "del coseno", "coseno", "carnot", "teorema di carnot", "al-kashi"], explain: "È il teorema del coseno (o di Carnot), che generalizza Pitagora." },
      { type: "order", q: "Metti in ordine i passi per risolvere un triangolo con tre lati noti.", items: ["Controllare la disuguaglianza triangolare", "Calcolare cos α con il teorema del coseno", "Ricavare α con l'arcocoseno", "Calcolare un secondo angolo (coseno o seni)", "Ottenere il terzo angolo per differenza da 180°"], explain: "Si verifica che il triangolo esista, si usa Carnot per gli angoli e l'ultimo si trova per differenza." }
    ]
  }
});

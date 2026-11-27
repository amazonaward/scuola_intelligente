TOPIC('it', {
  id: "l3-mat-circonferenza",
  title: "La circonferenza nel piano cartesiano",
  intro: "Un faro illumina il mare fino a 20 km di distanza: quali navi vede? Il GPS del telefono sa di essere a una certa distanza da tre satelliti: come ricava dove si trova? La risposta è sempre una <b>circonferenza</b>, cioè l'insieme dei punti a distanza fissata da un centro. Nel biennio l'hai studiata con la geometria euclidea; ora la traduciamo in <b>algebra</b>: scopriremo che una circonferenza è un'<b>equazione di secondo grado</b> in x e y, e che le posizioni di una retta rispetto a essa (secante, tangente, esterna) si decidono con un <b>discriminante</b>, proprio come nelle equazioni di secondo grado.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "La circonferenza come luogo geometrico",
      html: `<p>Una <b>circonferenza</b> di centro C e raggio r &gt; 0 è il <b>luogo geometrico</b> dei punti P del piano tali che <b>PC = r</b>. Nella lezione sul piano cartesiano (secondo anno) hai visto che la distanza tra due punti si calcola con il teorema di Pitagora: ora basta usarla.</p>
<p>Se il centro è C(a, b) e P(x, y) è un punto generico, la condizione PC = r diventa √[(x − a)² + (y − b)²] = r. Elevando al quadrato (entrambi i membri sono positivi) si ottiene l'<b>equazione canonica</b>:</p>
<p style="text-align:center"><b>(x − a)² + (y − b)² = r²</b></p>
<p>Un punto sta sulla circonferenza se le sue coordinate verificano l'equazione; sta <b>all'interno</b> se (x − a)² + (y − b)² &lt; r², <b>all'esterno</b> se &gt; r². Se il centro è l'origine, l'equazione si semplifica in <b>x² + y² = r²</b>.</p>
<p><b>Esempio.</b> Circonferenza di centro C(2, −1) e raggio 3: (x − 2)² + (y + 1)² = 9. Il punto (5, −1) sta su di essa (9 + 0 = 9); il punto (2, 1) è interno (0 + 4 &lt; 9); il punto (6, 1) è esterno (16 + 4 &gt; 9).</p>`
    },
    {
      type: "svg",
      title: "Dalla distanza all'equazione",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="330" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="150" y1="10" x2="150" y2="290" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="190" cy="120" r="90" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="4"/>
<line x1="190" y1="120" x2="254" y2="56" stroke="#ea580c" stroke-width="3"/>
<line x1="190" y1="120" x2="254" y2="120" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="254" y1="120" x2="254" y2="56" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="190" cy="120" r="6" fill="#dc2626"/>
<circle cx="254" cy="56" r="6" fill="#16a34a"/>
<text x="168" y="145" font-size="16" fill="#991b1b" font-weight="bold">C(a, b)</text>
<text x="262" y="52" font-size="16" fill="#166534" font-weight="bold">P(x, y)</text>
<text x="205" y="85" font-size="16" fill="#9a3412" font-weight="bold">r</text>
<text x="205" y="140" font-size="14" fill="#166534">x − a</text>
<text x="258" y="95" font-size="14" fill="#166534">y − b</text>
<text x="350" y="70" font-size="16" fill="#334155">Pitagora:</text>
<text x="350" y="100" font-size="16" fill="#334155">(x − a)² + (y − b)² = r²</text>
<text x="350" y="150" font-size="16" fill="#1d4ed8" font-weight="bold">Centro C(2, −1), r = 3:</text>
<text x="350" y="180" font-size="16" fill="#1d4ed8">(x − 2)² + (y + 1)² = 9</text>
</svg>`,
      caption: "Il triangolo rettangolo di cateti x − a e y − b ha ipotenusa r: l'equazione della circonferenza è il teorema di Pitagora scritto per un punto generico."
    },
    {
      type: "text",
      title: "Forma generale: ricavare centro e raggio",
      html: `<p>Sviluppando i quadrati dell'equazione canonica si ottiene la <b>forma generale</b>:</p>
<p style="text-align:center"><b>x² + y² + αx + βy + γ = 0</b></p>
<p>con α = −2a, β = −2b, γ = a² + b² − r². Da qui si leggono centro e raggio:</p>
<ul>
<li><b>centro</b> C(−α/2 ; −β/2)</li>
<li><b>raggio</b> r = √(α²/4 + β²/4 − γ) = ½·√(α² + β² − 4γ)</li>
</ul>
<p>Non ogni equazione di questo tipo è una circonferenza: serve che il radicando sia positivo, cioè <b>α² + β² − 4γ &gt; 0</b>. Se vale 0 l'equazione ha come unica soluzione il centro (una circonferenza "degenerata" di raggio 0, cioè un punto); se è negativo non ha soluzioni reali.</p>
<p>Riconoscere una circonferenza: i coefficienti di x² e y² sono <b>uguali</b> (si divide per portarli a 1) e <b>manca il termine xy</b>.</p>
<p><b>Esempio 1.</b> x² + y² − 4x + 6y − 12 = 0: α = −4, β = 6, γ = −12. Centro (2, −3); r² = 4 + 9 + 12 = 25, r = <b>5</b>. In alternativa si <b>completa il quadrato</b>: (x² − 4x + 4) + (y² + 6y + 9) = 12 + 4 + 9 → (x − 2)² + (y + 3)² = 25.</p>
<p><b>Esempio 2.</b> x² + y² + 2x + 4y + 10 = 0: α² + β² − 4γ = 4 + 16 − 40 = −20 &lt; 0: <b>nessun punto</b> del piano la verifica.</p>
<p><b>Esempio 3.</b> 2x² + 2y² − 8x + 4y − 2 = 0: si divide per 2 → x² + y² − 4x + 2y − 1 = 0; centro (2, −1); r² = 4 + 1 + 1 = 6, r = √6.</p>`
    },
    {
      type: "remember",
      title: "Riassunto: casi particolari",
      html: `<ul>
<li>Centro nell'origine: <b>x² + y² = r²</b> (γ ≠ 0, α = β = 0).</li>
<li>Passa per l'origine: <b>γ = 0</b>.</li>
<li>Centro sull'asse x (b = 0): <b>β = 0</b>. Centro sull'asse y (a = 0): <b>α = 0</b>.</li>
<li>Tangente all'asse x: |b| = r. Tangente all'asse y: |a| = r.</li>
<li>Per trovare una circonferenza servono <b>tre condizioni</b>, perché i parametri sono tre (α, β, γ), oppure (a, b, r).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: equazione e forma generale",
      questions: [
        { type: "mc", q: "Qual è il centro della circonferenza (x + 3)² + (y − 4)² = 16?", options: ["(3, −4)", "(−3, 4)", "(−3, −4)"], answer: 1, explain: "(x + 3) = (x − (−3)): a = −3; (y − 4): b = 4. Il centro è (−3, 4) e r = 4." },
        { type: "num", q: "Calcola il raggio della circonferenza x² + y² − 6x + 8y = 0.", answer: 5, explain: "α = −6, β = 8, γ = 0: r = ½√(36 + 64) = ½·10 = 5. Il centro è (3, −4) e infatti la circonferenza passa per l'origine." },
        { type: "tf", q: "L'equazione x² + 2y² − 4 = 0 rappresenta una circonferenza.", answer: false, explain: "I coefficienti di x² e y² sono diversi: non è una circonferenza (è un'ellisse, vedi la lezione successiva)." }
      ]
    },
    {
      type: "text",
      title: "Retta e circonferenza: tre posizioni possibili",
      html: `<p>Una retta s e una circonferenza possono avere <b>due punti</b> in comune (retta <b>secante</b>), <b>uno</b> (retta <b>tangente</b>) o <b>nessuno</b> (retta <b>esterna</b>). Ci sono due metodi, equivalenti.</p>
<p><b>Metodo 1: il sistema e il discriminante.</b> Si mettono a sistema le due equazioni e si sostituisce y (o x) dalla retta nella circonferenza: si ottiene un'equazione di secondo grado. Il segno di Δ decide:</p>
<ul>
<li><b>Δ &gt; 0</b>: due soluzioni distinte → secante;</li>
<li><b>Δ = 0</b>: due soluzioni coincidenti → <b>tangente</b>;</li>
<li><b>Δ &lt; 0</b>: nessuna soluzione reale → esterna.</li>
</ul>
<p><b>Metodo 2: la distanza dal centro.</b> Si calcola la distanza d del centro dalla retta (formula del punto–retta della lezione sul piano cartesiano: d = |ax₀ + by₀ + c|/√(a² + b²)) e si confronta con r: <b>d &lt; r</b> secante, <b>d = r</b> tangente, <b>d &gt; r</b> esterna.</p>
<p><b>Esempio.</b> Circonferenza x² + y² = 25 e retta y = x + 1. Sostituendo: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0 → Δ = 49 &gt; 0, x = 3 o x = −4. I punti d'intersezione sono (3, 4) e (−4, −3): la retta è secante. Controllo con il metodo 2: d = |1|/√2 ≈ 0,71 &lt; 5 ✔️.</p>
<p><b>Parametro k.</b> Per quali k la retta y = x + k è tangente a x² + y² = 8? Con la distanza: la retta è x − y + k = 0, d = |k|/√2 = 2√2 → |k| = 4 → k = ±4. Le tangenti parallele alla bisettrice y = x sono y = x + 4 e y = x − 4.</p>`
    },
    {
      type: "svg",
      title: "Le tre posizioni di una retta",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="300" cy="150" r="90" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="4"/>
<circle cx="300" cy="150" r="5" fill="#dc2626"/>
<text x="308" y="172" font-size="16" fill="#991b1b" font-weight="bold">C</text>
<line x1="150" y1="110" x2="460" y2="110" stroke="#16a34a" stroke-width="4"/>
<line x1="390" y1="30" x2="390" y2="280" stroke="#ea580c" stroke-width="4"/>
<line x1="130" y1="270" x2="470" y2="270" stroke="#7c3aed" stroke-width="4"/>
<line x1="300" y1="150" x2="300" y2="110" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="300" y1="150" x2="390" y2="150" stroke="#ea580c" stroke-width="2" stroke-dasharray="4 3"/>
<circle cx="390" cy="150" r="6" fill="#ea580c"/>
<text x="20" y="100" font-size="16" fill="#166534" font-weight="bold">secante: d &lt; r</text>
<text x="20" y="122" font-size="16" fill="#166534">Δ &gt; 0, due punti</text>
<text x="400" y="50" font-size="16" fill="#9a3412" font-weight="bold">tangente: d = r</text>
<text x="400" y="72" font-size="16" fill="#9a3412">Δ = 0, un punto</text>
<text x="20" y="262" font-size="16" fill="#6d28d9" font-weight="bold">esterna: d &gt; r</text>
<text x="20" y="284" font-size="16" fill="#6d28d9">Δ &lt; 0, nessun punto</text>
<text x="398" y="166" font-size="14" fill="#9a3412">T</text>
</svg>`,
      caption: "La retta tangente tocca la circonferenza in un solo punto T ed è perpendicolare al raggio CT."
    },
    {
      type: "text",
      title: "Le rette tangenti",
      html: `<p>Una proprietà della geometria euclidea fa da chiave: la <b>tangente in un punto T è perpendicolare al raggio CT</b>. Da qui due casi.</p>
<p><b>1. Tangente in un punto T(x₀, y₀) della circonferenza.</b> Si calcola il coefficiente angolare del raggio CT, quello della tangente è l'<b>antireciproco</b> (m·m′ = −1); poi si scrive la retta per T. Per la circonferenza x² + y² = r² c'è una scorciatoia: la tangente in T è <b>x₀x + y₀y = r²</b>. Esempio: in T(3, 4) alla circonferenza x² + y² = 25 la tangente è 3x + 4y = 25. Controllo: la distanza dell'origine da 3x + 4y − 25 = 0 è 25/5 = 5 = r ✔️.</p>
<p><b>2. Tangenti da un punto esterno P.</b> Sono due. Si scrive il <b>fascio di rette</b> per P, y − y₀ = m(x − x₀), e si impone che la distanza del centro dalla retta sia uguale a r (oppure Δ = 0 nel sistema): si ottiene un'equazione in m con due soluzioni. Se una tangente è verticale, il fascio con m non la trova: va controllata a parte (x = x₀).</p>
<p><b>Esempio.</b> Tangenti da P(5, 0) a x² + y² = 9. Il fascio è y = m(x − 5), cioè mx − y − 5m = 0. Distanza dal centro O: 5|m|/√(m² + 1) = 3 → 25m² = 9m² + 9 → 16m² = 9 → <b>m = ±3/4</b>. Le tangenti sono y = ±(3/4)(x − 5). I punti di tangenza sono (9/5, ±12/5); si verifica che 9/5·5 = 9 ✔️. La retta verticale x = 5 non è tangente (la distanza da O è 5 &gt; 3).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: dove sono? (triangolazione)",
      html: `<p>Un soccorritore riceve il segnale di una persona da una torre radio in T₁(0, 0) e capisce che è a <b>5 km</b>; da una seconda torre T₂(6, 0) la distanza stimata è <b>5 km</b>. Dove può trovarsi? Sulle due circonferenze: x² + y² = 25 e (x − 6)² + y² = 25. Sottraendo membro a membro: x² − (x − 6)² = 0 → 12x − 36 = 0 → x = 3; poi y² = 25 − 9 = 16 → y = ±4. Le due possibili posizioni sono (3, 4) e (3, −4): servirebbe una <b>terza torre</b> per scegliere, ed è esattamente il motivo per cui il GPS usa almeno tre satelliti (nello spazio le "circonferenze" diventano sfere).</p>
<p>Si noti il trucco: sottraendo le equazioni di due circonferenze sparisce il termine di secondo grado e rimane una <b>retta</b>, detta <b>asse radicale</b>, su cui stanno le intersezioni.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: circonferenza per tre punti",
      html: `<p>Per tre punti non allineati passa una sola circonferenza. Cerchiamo quella per A(0, 0), B(4, 0), C(0, 2) usando la forma generale x² + y² + αx + βy + γ = 0 e imponendo il passaggio:</p>
<ul>
<li>A: γ = 0;</li>
<li>B: 16 + 4α + γ = 0 → α = −4;</li>
<li>C: 4 + 2β + γ = 0 → β = −2.</li>
</ul>
<p>Equazione: <b>x² + y² − 4x − 2y = 0</b>, centro (2, 1), r² = 4 + 1 − 0 = 5, r = √5. Verifica geometrica: il triangolo ABC è rettangolo in A (A è l'origine, B sull'asse x, C sull'asse y), quindi l'ipotenusa BC è un diametro e il centro è il suo punto medio, ((4 + 0)/2 ; (0 + 2)/2) = (2, 1) ✔️.</p>
<p>Altro tipo di richiesta: la circonferenza di centro (2, −1) <b>tangente alla retta</b> 3x + 4y + 13 = 0. Il raggio è la distanza del centro dalla retta: |6 − 4 + 13|/5 = 15/5 = 3. Equazione: (x − 2)² + (y + 1)² = 9.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il GPS e le sfere",
      html: `<p>Il sistema GPS (Global Positioning System) usa una costellazione di almeno 24 satelliti. Il ricevitore misura il tempo che il segnale impiega ad arrivare e, moltiplicandolo per la velocità della luce, ricava la distanza da ciascun satellite: ogni misura individua una <b>sfera</b> (in 2D, una circonferenza) su cui ci si trova. Tre sfere si incontrano in due punti, di cui uno è assurdo (lontano dalla Terra), ma l'orologio del ricevitore è molto meno preciso di quelli atomici dei satelliti, quindi si usa un <b>quarto satellite</b> per correggere l'errore di tempo. È geometria analitica applicata ogni volta che apri una mappa.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il numero π",
      html: `<p>Il rapporto tra circonferenza e diametro è lo stesso per tutte le circonferenze: è il numero <b>π</b> ≈ 3,14159…, che è <b>irrazionale</b> (lo dimostrò Johann Heinrich Lambert nel 1761) e addirittura <b>trascendente</b> (Ferdinand von Lindemann, 1882): non è soluzione di nessuna equazione algebrica a coefficienti interi. Ne discende l'impossibilità della <b>quadratura del cerchio</b>, il problema greco di costruire con riga e compasso un quadrato di area uguale a quella di un cerchio dato.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la circonferenza",
      intro: "Se l'equazione ti sembra solo una formula da imparare a memoria, prova uno di questi modi di vederla.",
      tabs: [
        {
          label: "📏 Il compasso e il cordino",
          html: `<p>Pianta un chiodo nel terreno (il centro), lega una corda lunga r e tienila tesa girando: il punto della corda traccia una circonferenza. La corda tesa è il segmento PC e la sua lunghezza non cambia mai: <b>PC = r</b>. L'equazione dice la stessa cosa in coordinate: "la distanza di P dal centro vale r". Un punto interno è quello in cui la corda è "lenta" (distanza minore di r), uno esterno è oltre la lunghezza della corda.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><circle cx="220" cy="150" r="110" fill="none" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 6"/><circle cx="220" cy="150" r="7" fill="#dc2626"/><line x1="220" y1="150" x2="300" y2="76" stroke="#ea580c" stroke-width="4"/><circle cx="300" cy="76" r="7" fill="#16a34a"/><text x="232" y="172" font-size="16" fill="#991b1b" font-weight="bold">chiodo C</text><text x="312" y="72" font-size="16" fill="#166534" font-weight="bold">P (matita)</text><text x="238" y="106" font-size="16" fill="#9a3412" font-weight="bold">corda = r</text><text x="400" y="160" font-size="16" fill="#334155">PC = r per ogni P</text></svg>`
        },
        {
          label: "🧩 Completare il quadrato",
          html: `<p>La forma generale x² + y² + αx + βy + γ = 0 è un "travestimento" di quella canonica. Per smascherarla si <b>completa il quadrato</b> due volte (una per x, una per y), come nelle equazioni di secondo grado. Esempio: x² + y² + 6x − 2y + 6 = 0 → (x² + 6x + 9) + (y² − 2y + 1) = −6 + 9 + 1 → (x + 3)² + (y − 1)² = 4: centro (−3, 1), r = 2. Se a destra uscisse un numero negativo, nessun punto soddisferebbe l'equazione. Questo metodo si ricorda meglio delle formule α/2, β/2 perché riusa un'abilità che già possiedi.</p>`,
          widget: "numberLine",
          options: { min: -6, max: 2, step: 1, marks: [-3, -1, -5] }
        },
        {
          label: "🔺 Il triangolo rettangolo e le terne",
          html: `<p>Disegna la circonferenza x² + y² = 25: tutti i punti a coordinate intere sono legati alle <b>terne pitagoriche</b> 3-4-5. I punti (±3, ±4), (±4, ±3), (±5, 0), (0, ±5) sono ben 12 e stanno sulla circonferenza perché 9 + 16 = 25. Muovi i cursori e osserva che il triangolo rettangolo con ipotenusa 5 ha cateti 3 e 4: l'equazione della circonferenza è proprio la relazione di Pitagora, con l'ipotenusa fissata.</p>`,
          widget: "pythagoras",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della circonferenza: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "luogo", label: "Luogo geometrico", x: 50, y: 6, color: "#6366f1", html: "I punti a distanza r da un centro C.", why: "È la definizione data da Euclide negli Elementi (libro I, definizione 15): una figura piana racchiusa da una linea, tale che tutte le rette che cadono su di essa da un punto interno sono uguali." },
        { id: "pitagora", label: "Pitagora e distanza", x: 18, y: 30, color: "#16a34a", html: "d(P, C)² = (x − a)² + (y − b)².", why: "Il teorema di Pitagora sul triangolo rettangolo con cateti x − a e y − b: la geometria analitica di Descartes e Fermat (Seicento) rende algebrica la distanza." },
        { id: "eq", label: "Equazione", x: 82, y: 30, color: "#f59e0b", html: "(x − a)² + (y − b)² = r², oppure x² + y² + αx + βy + γ = 0.", why: "Elevare al quadrato la condizione PC = r elimina la radice; la forma generale deriva dallo sviluppo dei quadrati." },
        { id: "tre", label: "Tre condizioni", x: 50, y: 50, color: "#a855f7", html: "Servono tre parametri: centro (due coordinate) e raggio.", why: "Per tre punti non allineati passa una e una sola circonferenza: il centro è l'intersezione degli assi dei segmenti (punti equidistanti dagli estremi)." },
        { id: "retta", label: "Retta e Δ", x: 18, y: 75, color: "#ef4444", html: "Sostituendo la retta nella circonferenza si ha un'equazione di secondo grado: Δ &gt; 0, = 0, &lt; 0.", why: "L'intersezione tra due curve è la soluzione di un sistema: il grado dell'equazione risultante dice il numero massimo di punti comuni (qui al più 2)." },
        { id: "dist", label: "Distanza centro–retta", x: 82, y: 75, color: "#0ea5e9", html: "d &lt; r secante, d = r tangente, d &gt; r esterna.", why: "Il punto della retta più vicino al centro è il piede della perpendicolare: se la sua distanza è r, la retta tocca la circonferenza solo lì." },
        { id: "tang", label: "Tangente ⟂ raggio", x: 50, y: 92, color: "#14b8a6", html: "La tangente in T è perpendicolare a CT.", why: "Se non lo fosse, la retta entrerebbe nel cerchio e taglierebbe la circonferenza in un secondo punto (teorema della geometria euclidea del biennio)." }
      ],
      edges: [
        ["luogo", "pitagora", "si misura con"],
        ["pitagora", "eq", "dà"],
        ["luogo", "tre", "ha"],
        ["eq", "retta", "si interseca con"],
        ["retta", "dist", "equivale a"],
        ["dist", "tang", "caso limite"],
        ["tre", "retta", "dopo la forma generale"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: rette e tangenti",
      questions: [
        { type: "mc", q: "La retta y = 5 rispetto alla circonferenza x² + y² = 16 è…", options: ["secante", "tangente", "esterna"], answer: 2, explain: "La distanza di O da y = 5 è 5 &gt; 4 = r: la retta è esterna." },
        { type: "mc", q: "La tangente a x² + y² = 25 nel punto (0, 5) è…", options: ["y = 5", "x = 5", "y = −5"], answer: 0, explain: "Con la scorciatoia x₀x + y₀y = r²: 0·x + 5y = 25 → y = 5, retta orizzontale perpendicolare al raggio verticale." },
        { type: "num", q: "Per quale valore positivo di k la retta y = k è tangente a x² + (y − 1)² = 9?", answer: 4, explain: "Il centro è (0, 1), r = 3: le tangenti orizzontali sono y = 1 ± 3, cioè y = 4 e y = −2. Quella con k positivo è y = 4." }
      ]
    }
  ],
  glossary: [
    { t: "Circonferenza", d: "Luogo dei punti del piano a distanza fissa r (raggio) da un punto C (centro)." },
    { t: "Equazione canonica", d: "(x − a)² + (y − b)² = r²: mostra subito centro C(a, b) e raggio r." },
    { t: "Forma generale", d: "x² + y² + αx + βy + γ = 0, con α² + β² − 4γ &gt; 0." },
    { t: "Completare il quadrato", d: "Procedimento per riscrivere un trinomio come quadrato di binomio più una costante." },
    { t: "Secante", d: "Retta che interseca la circonferenza in due punti." },
    { t: "Tangente", d: "Retta che ha con la circonferenza un solo punto in comune ed è perpendicolare al raggio in quel punto." },
    { t: "Retta esterna", d: "Retta che non ha punti in comune con la circonferenza." },
    { t: "Discriminante Δ", d: "Il numero b² − 4ac: il suo segno dice quante soluzioni reali ha un'equazione di secondo grado." },
    { t: "Fascio di rette", d: "Insieme delle rette passanti per uno stesso punto, descritte da un parametro m." },
    { t: "Asse radicale", d: "Retta che si ottiene sottraendo le equazioni di due circonferenze: contiene i loro punti comuni." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è l'equazione della circonferenza di centro (1, −2) e raggio 4?", options: ["(x − 1)² + (y + 2)² = 16", "(x + 1)² + (y − 2)² = 16", "(x − 1)² + (y + 2)² = 4"], answer: 0, explain: "Con C(a, b): (x − a)² + (y − b)² = r², quindi (x − 1)² + (y + 2)² = 16." },
      { type: "num", q: "Qual è il raggio di x² + y² − 2x + 4y − 4 = 0?", answer: 3, explain: "Centro (1, −2); r² = 1 + 4 + 4 = 9, r = 3." },
      { type: "mc", q: "Quale equazione NON rappresenta una circonferenza?", options: ["x² + y² − 4 = 0", "x² + y² + 2x + 2y + 5 = 0", "x² + y² − 6x = 0"], answer: 1, explain: "α² + β² − 4γ = 4 + 4 − 20 = −12 &lt; 0: nessun punto reale. Le altre due hanno raggio 2 e 3." },
      { type: "tf", q: "La circonferenza x² + y² − 10x = 0 passa per l'origine.", answer: true, explain: "Sostituendo x = y = 0 si ottiene 0 = 0. Infatti γ = 0 (centro (5, 0), r = 5)." },
      { type: "mc", q: "La retta y = x + 1 interseca x² + y² = 25 in quanti punti?", options: ["0", "1", "2"], answer: 2, explain: "Sostituendo: x² + x − 12 = 0, Δ = 49 &gt; 0: due punti, (3, 4) e (−4, −3)." },
      { type: "num", q: "Calcola la distanza del centro O dalla retta 3x + 4y − 15 = 0 (circonferenza x² + y² = 4): è maggiore, uguale o minore di r? Scrivi la distanza.", answer: 3, explain: "d = 15/√(9 + 16) = 15/5 = 3 &gt; 2 = r: la retta è esterna." },
      { type: "mc", q: "Una retta è tangente a una circonferenza quando…", options: ["Δ &gt; 0", "d(C, retta) = r", "d(C, retta) &gt; r"], answer: 1, explain: "Tangente: un solo punto comune, cioè Δ = 0 e distanza del centro dalla retta uguale al raggio." },
      { type: "mc", q: "La tangente a x² + y² = 25 in (3, 4) è…", options: ["3x + 4y = 25", "4x + 3y = 25", "3x − 4y = 25"], answer: 0, explain: "x₀x + y₀y = r² con x₀ = 3, y₀ = 4. Il raggio ha pendenza 4/3 e la tangente −3/4." },
      { type: "text", q: "Come si chiama la retta che ha due punti in comune con una circonferenza?", answer: ["secante", "retta secante", "la secante"], explain: "Due punti in comune: secante; uno solo: tangente; nessuno: esterna." },
      { type: "order", q: "Metti in ordine i passi per trovare le tangenti da un punto esterno P.", items: ["Scrivere il fascio di rette per P: y − y₀ = m(x − x₀)", "Imporre d(centro, retta) = r", "Risolvere l'equazione in m", "Scrivere le due tangenti e controllare la retta verticale"], explain: "Si parte dal fascio, si impone la tangenza, si risolve in m e si verifica a parte il caso verticale che il fascio non contiene." }
    ]
  }
});

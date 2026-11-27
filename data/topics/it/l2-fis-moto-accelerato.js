TOPIC('it', {
  id: "l2-fis-moto-accelerato",
  title: "Il moto uniformemente accelerato",
  intro: "Un semaforo diventa verde e l'auto parte: la sua velocità non è costante, <b>cresce</b>. Una pietra lasciata cadere dal ponte aumenta la sua velocità a ogni istante. Quando la velocità cambia, nasce una nuova grandezza: l'<b>accelerazione</b>. Il caso più semplice e più importante è il <b>moto uniformemente accelerato</b>, in cui la velocità varia in modo costante nel tempo. È il moto della <b>caduta libera</b>, che Galileo studiò con il piano inclinato e che cambiò per sempre il modo di fare fisica.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "L'accelerazione: quando la velocità cambia",
      html: `<p>Nella lezione precedente la velocità era costante. Ora la lasciamo variare. L'<b>accelerazione media</b> è il rapporto tra la variazione di velocità e l'intervallo di tempo:</p>
<p style="text-align:center"><b>a<sub>m</sub> = Δv / Δt = (v₂ − v₁) / (t₂ − t₁)</b></p>
<p>L'unità di misura è il <b>metro al secondo quadrato (m/s²)</b>: "m/s ogni secondo". Un'accelerazione di 3 m/s² significa che ogni secondo la velocità aumenta di 3 m/s.</p>
<p>L'accelerazione ha un <b>segno</b> (nel moto rettilineo) e va interpretata insieme alla velocità:</p>
<ul>
<li><b>a e v con lo stesso segno</b>: il corpo <b>accelera</b> (il modulo della velocità aumenta).</li>
<li><b>a e v con segni opposti</b>: il corpo <b>rallenta</b>, decelera (si frena).</li>
<li>a = 0: velocità costante (moto uniforme).</li>
</ul>
<p>Attenzione: <b>"frenare" non è "avere accelerazione negativa" in senso assoluto</b>: se un'auto va in retromarcia (v &lt; 0) e accelera, anche a è negativa, ma il modulo della velocità cresce. Quello che conta è il rapporto tra i segni.</p>
<p>Si parla di moto <b>uniformemente accelerato</b> quando l'accelerazione è <b>costante</b>. È un modello, ma buono per molte situazioni: la caduta libera, una frenata con freni costanti, il lancio di un razzo in un breve tratto.</p>`
    },
    {
      type: "example",
      title: "Esempi: ordini di grandezza dell'accelerazione",
      html: `<p><b>Un'auto sportiva</b> passa da 0 a 100 km/h in 8 s. 100 km/h ≈ 27,8 m/s: a = 27,8 / 8 ≈ <b>3,5 m/s²</b>. Una piccola utilitaria, in 14 s, ha a ≈ 2 m/s²; un'auto elettrica molto potente, in 2,5 s, ha a ≈ 11 m/s² (più della gravità).</p>
<p><b>Una frenata</b>: un'auto a 72 km/h (20 m/s) si ferma in 4 s: a = (0 − 20) / 4 = <b>−5 m/s²</b> (negativa, perché la velocità è positiva e diminuisce).</p>
<p><b>Un oggetto in caduta</b>: la velocità aumenta di circa 9,8 m/s ogni secondo. Dopo 1 s sta andando a 9,8 m/s (35 km/h), dopo 2 s a 19,6 m/s (70 km/h), dopo 3 s a 29,4 m/s (106 km/h): in assenza di aria.</p>
<p><b>Accelerazioni da record</b>: un'auto di Formula 1 passa da 0 a 100 km/h in circa 2,5 s. I piloti nelle curve strette e nelle frenate subiscono accelerazioni di oltre 4–5 volte la gravità.</p>`
    },
    {
      type: "remember",
      title: "Le leggi del moto uniformemente accelerato",
      html: `<p>Se l'accelerazione <b>a</b> è costante, con velocità iniziale <b>v₀</b> e posizione iniziale <b>s₀</b> al tempo t = 0:</p>
<ul>
<li><b>Legge della velocità</b>: <b>v = v₀ + a · t</b></li>
<li><b>Legge oraria</b>: <b>s = s₀ + v₀ · t + ½ · a · t²</b></li>
<li><b>Senza il tempo</b>: <b>v² = v₀² + 2 · a · (s − s₀)</b></li>
</ul>
<p>Se parte da fermo (v₀ = 0) e dall'origine (s₀ = 0): v = a t, s = ½ a t², v² = 2 a s. Si ricava anche la relazione <b>s = (v₀ + v)/2 · t</b>: lo spazio è la velocità <i>media</i> (la media aritmetica di v₀ e v) per il tempo. Nota: nel tempo la posizione cresce come <b>t²</b>: non più una retta, ma una <b>parabola</b>.</p>`
    },
    {
      type: "svg",
      title: "Il grafico velocità-tempo: una retta inclinata",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,250 460,250 460,50" fill="#bbf7d0" stroke="none"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">v (m/s)</text>
<line x1="60" y1="250" x2="460" y2="50" stroke="#166534" stroke-width="5"/>
<line x1="460" y1="250" x2="460" y2="50" stroke="#6b7280" stroke-width="2" stroke-dasharray="6 5"/>
<text x="456" y="274" font-size="16" fill="#1f2937" font-weight="bold">5</text>
<text x="26" y="56" font-size="16" fill="#1f2937" font-weight="bold">20</text>
<text x="120" y="228" font-size="16" fill="#14532d" font-weight="bold">Area = ½ · 5 · 20 = 50 m</text>
<text x="290" y="130" font-size="16" fill="#166534" font-weight="bold">pendenza = a = 4 m/s²</text>
<text x="290" y="154" font-size="16" fill="#1f2937">(parte da fermo)</text>
</svg>`,
      caption: "La pendenza della retta v-t è l'accelerazione; l'area sotto la retta è lo spazio percorso. Qui: da fermo, a = 4 m/s² per 5 s ⇒ v finale 20 m/s e spazio 50 m."
    },
    {
      type: "svg",
      title: "Il grafico spazio-tempo: una parabola",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#1f2937" stroke-width="3"/>
<line x1="60" y1="250" x2="60" y2="24" stroke="#1f2937" stroke-width="3"/>
<polygon points="570,250 558,244 558,256" fill="#1f2937"/><polygon points="60,24 54,36 66,36" fill="#1f2937"/>
<text x="540" y="276" font-size="16" fill="#1f2937" font-weight="bold">t (s)</text>
<text x="70" y="32" font-size="16" fill="#1f2937" font-weight="bold">s (m)</text>
<polyline points="60,250 100,248 140,242 180,232 220,218 260,200 300,178 340,152 380,122 420,88 460,50" fill="none" stroke="#7c3aed" stroke-width="5"/>
<circle cx="140" cy="242" r="5" fill="#7c3aed"/><circle cx="220" cy="218" r="5" fill="#7c3aed"/><circle cx="300" cy="178" r="5" fill="#7c3aed"/><circle cx="380" cy="122" r="5" fill="#7c3aed"/><circle cx="460" cy="50" r="5" fill="#7c3aed"/>
<text x="340" y="212" font-size="16" fill="#6d28d9" font-weight="bold">s = ½ a t² = 2 t²</text>
<text x="340" y="236" font-size="16" fill="#1f2937">(a = 4 m/s², da fermo)</text>
<text x="76" y="140" font-size="16" fill="#1f2937">La curva diventa</text>
<text x="76" y="162" font-size="16" fill="#1f2937">sempre più ripida:</text>
<text x="76" y="184" font-size="16" fill="#1f2937">la velocità cresce</text>
</svg>`,
      caption: "Nel moto uniformemente accelerato da fermo, lo spazio cresce come t²: 2 m in 1 s, 8 m in 2 s, 18 m in 3 s, 32 m in 4 s, 50 m in 5 s."
    },
    {
      type: "quiz",
      title: "Mini-quiz: velocità e accelerazione",
      questions: [
        { type: "num", q: "Un motorino parte da fermo e dopo 5 s ha velocità 10 m/s. Qual è l'accelerazione media?", answer: 2, unit: "m/s²", explain: "a = Δv / Δt = 10 / 5 = 2 m/s²." },
        { type: "num", q: "Un corpo con a = 3 m/s² parte da fermo. Che velocità ha dopo 6 s?", answer: 18, unit: "m/s", explain: "v = a t = 3 · 6 = 18 m/s." },
        { type: "num", q: "Un'auto parte da ferma con a = 2 m/s². Quanti metri percorre in 10 s?", answer: 100, unit: "m", explain: "s = ½ a t² = ½ · 2 · 100 = 100 m." },
        { type: "tf", q: "Nel grafico velocità-tempo, l'area sotto il grafico rappresenta lo spazio percorso.", answer: true, explain: "L'area è la somma dei v·Δt: lo spostamento totale." }
      ]
    },
    {
      type: "text",
      title: "La frenata e lo spazio di arresto",
      html: `<p>Un'applicazione fondamentale della terza formula. Un'auto ha velocità iniziale v₀ e frena con decelerazione costante di modulo <b>a</b> (accelerazione −a) fino a fermarsi (v = 0):</p>
<ul>
<li><b>Tempo di arresto</b>: 0 = v₀ − a t, quindi <b>t = v₀ / a</b>.</li>
<li><b>Spazio di frenata</b>: 0 = v₀² − 2 a s, quindi <b>s = v₀² / (2 a)</b>.</li>
</ul>
<p><b>Lo spazio di frenata cresce come il quadrato della velocità</b>! Se la velocità raddoppia, lo spazio <b>quadruplica</b>; se triplica, diventa 9 volte. Con a = 5 m/s²:</p>
<table>
<tr><th>Velocità</th><th>v₀ (m/s)</th><th>Spazio di frenata</th></tr>
<tr><td>30 km/h</td><td>8,3</td><td>≈ 7 m</td></tr>
<tr><td>50 km/h</td><td>13,9</td><td>≈ 19 m</td></tr>
<tr><td>90 km/h</td><td>25</td><td>= 62,5 m</td></tr>
<tr><td>130 km/h</td><td>36,1</td><td>≈ 130 m</td></tr>
</table>
<p>A questo si aggiunge lo spazio percorso durante il <b>tempo di reazione</b> (circa 1 s, a velocità costante): a 130 km/h sono altri 36 m. In totale, <b>distanza di arresto ≈ 166 m</b>. Per questo i limiti di velocità sono più severi dove ci sono pedoni: investito a 30 km/h il pedone ha una buona probabilità di sopravvivere; a 50 km/h molto meno.</p>`
    },
    {
      type: "example",
      title: "Esempio: un problema completo",
      html: `<p><b>Problema</b>: un treno viaggia a 54 km/h e frena con decelerazione costante di 0,5 m/s². Dopo quanto tempo si ferma e quanto spazio percorre?</p>
<ol>
<li>Conversione: 54 km/h = 54 / 3,6 = 15 m/s.</li>
<li>Tempo: t = v₀ / a = 15 / 0,5 = <b>30 s</b>.</li>
<li>Spazio: s = v₀² / (2 a) = 225 / 1 = <b>225 m</b> (oppure s = v₀ t / 2 = 15 · 30 / 2 = 225 m: velocità media 7,5 m/s per 30 s).</li>
</ol>
<p><b>Un altro</b>: un'auto parte da ferma e accelera a 3 m/s² fino a 30 m/s (108 km/h). Quanta strada serve? s = v² / (2a) = 900 / 6 = <b>150 m</b>, in t = v / a = 10 s.</p>`
    },
    {
      type: "text",
      title: "La caduta libera",
      html: `<p>Nel <b>vuoto</b>, ogni corpo lasciato cadere si muove con la <b>stessa accelerazione</b>, indipendente da massa, forma e materiale: l'<b>accelerazione di gravità</b> <b>g ≈ 9,8 m/s²</b> (valore standard 9,80665; sulla Terra varia leggermente da ≈ 9,78 all'equatore a ≈ 9,83 ai poli). Spesso nei problemi si usa 9,8 o 10 m/s² per semplicità.</p>
<p>La <b>caduta libera</b> è un moto uniformemente accelerato con a = g. Partendo da fermi a quota h:</p>
<ul>
<li>Velocità dopo t: <b>v = g t</b></li>
<li>Spazio percorso: <b>s = ½ g t²</b></li>
<li>Tempo di caduta da un'altezza h: <b>t = √(2h / g)</b></li>
<li>Velocità all'impatto: <b>v = √(2 g h)</b></li>
</ul>
<p><b>Esempio</b>: un tuffatore salta da 10 m. t = √(2 · 10 / 9,8) ≈ 1,43 s e v = 9,8 · 1,43 ≈ 14 m/s = <b>50 km/h</b> quando tocca l'acqua.</p>
<p><b>Lancio verso l'alto</b>: lanci una palla verso l'alto con velocità 19,6 m/s. Il moto è uniformemente accelerato con a = −g (la gravità frena la salita): la velocità decresce di 9,8 m/s ogni secondo, si annulla dopo <b>2 s</b> (punto più alto, h = v₀² / 2g = 19,6 m) e poi la palla ricade, ripassando dalla tua mano dopo 4 s con la velocità opposta (−19,6 m/s). Salita e discesa sono simmetriche.</p>
<p>Nella realtà l'<b>aria</b> frena la caduta con una resistenza che cresce con la velocità: un paracadutista in caduta con le braccia aperte smette di accelerare a circa 55 m/s (200 km/h): ha raggiunto la <b>velocità limite</b>. Una piuma cade lentamente per lo stesso motivo.</p>`
    },
    {
      type: "svg",
      title: "La regola dei numeri dispari di Galileo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="560" y2="150" stroke="#9ca3af" stroke-width="3"/>
<circle cx="60" cy="150" r="9" fill="#dc2626"/>
<circle cx="85" cy="150" r="9" fill="#ea580c"/>
<circle cx="160" cy="150" r="9" fill="#ca8a04"/>
<circle cx="285" cy="150" r="9" fill="#16a34a"/>
<circle cx="460" cy="150" r="9" fill="#2563eb"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="60" y="124">t = 0</text><text x="85" y="104">1 s</text><text x="160" y="124">2 s</text><text x="285" y="124">3 s</text><text x="460" y="124">4 s</text>
</g>
<g font-size="16" text-anchor="middle" fill="#1f2937">
<text x="85" y="186">1</text><text x="160" y="186">4</text><text x="285" y="186">9</text><text x="460" y="186">16</text>
<text x="122" y="226" fill="#b45309" font-weight="bold">3</text><text x="222" y="226" fill="#b45309" font-weight="bold">5</text><text x="372" y="226" fill="#b45309" font-weight="bold">7</text>
<text x="72" y="226" fill="#b45309" font-weight="bold">1</text>
</g>
<text x="40" y="262" font-size="16" fill="#1f2937">Spazi totali: 1, 4, 9, 16 (quadrati). Spazi in ogni secondo: 1, 3, 5, 7 (dispari).</text>
<text x="40" y="30" font-size="16" fill="#1f2937">Una sfera lascia l'origine, ferma, e accelera: ogni secondo percorre più strada.</text>
</svg>`,
      caption: "Galileo scoprì che, in tempi uguali, gli spazi percorsi stanno come i numeri dispari 1 : 3 : 5 : 7…, e quindi gli spazi totali come i quadrati dei tempi."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Galileo contro Aristotele",
      html: `<p>Per quasi 2000 anni si credette ad <b>Aristotele</b>: i corpi pesanti cadono più in fretta di quelli leggeri. <b>Galileo Galilei</b> capì che non era così: nel vuoto cadono insieme. Poiché la caduta libera era troppo veloce per essere misurata con gli strumenti del Seicento, usò un <b>piano inclinato</b> per "rallentare" la caduta (poco inclinato, la sfera scende lentamente) e misurò i tempi con un orologio ad acqua. Trovò che gli spazi crescono come il quadrato dei tempi. Pubblicò i risultati nei <i>Discorsi e dimostrazioni matematiche intorno a due nuove scienze</i> (1638). La leggenda dell'esperimento dalla Torre di Pisa è attribuita al suo allievo Vincenzo Viviani: non esistono prove che Galileo l'abbia fatto davvero.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il martello e la piuma sulla Luna",
      html: `<p>Il 2 agosto 1971, durante la missione <b>Apollo 15</b>, l'astronauta <b>David Scott</b> lasciò cadere sulla Luna un martello e una piuma di falco, davanti alle telecamere. Sulla Luna non c'è aria, e l'accelerazione di gravità vale circa 1,62 m/s² (un sesto di quella terrestre): i due oggetti toccarono il suolo insieme. Scott disse: "Il signor Galileo aveva ragione". Prova: se la tua statura è 1,7 m, un oggetto che cade dalle tue mani impiega 0,59 s sulla Terra ma ben 1,45 s sulla Luna.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il moto accelerato",
      intro: "Accelerare è una sensazione quotidiana: la senti nello stomaco quando l'auto parte. Ecco altri modi per vederla.",
      tabs: [
        {
          label: "🎢 La sensazione del corpo",
          html: `<p>L'accelerazione si <b>sente</b>: quando l'auto parte, ti senti spinto contro il sedile; quando frena, in avanti; in ascensore che sale ti senti più pesante all'avvio, più leggero all'arresto. Non senti la velocità (in aereo a 900 km/h sei tranquillo), ma <b>senti</b> i suoi cambiamenti. Per questo l'accelerazione si misura anche in "g": un'accelerazione di 1 g è 9,8 m/s², cioè quella che senti quando sei fermo sulla Terra. Gli astronauti al decollo subiscono circa 3 g; un caccia fino a 9 g.</p>`
        },
        {
          label: "📋 Tabella di una caduta",
          html: `<p>Con g ≈ 9,8 m/s² (arrotondiamo a 10 per leggere meglio i numeri), partendo da fermo:</p>
<table><tr><th>t (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>v (m/s)</th><td>0</td><td>9,8</td><td>19,6</td><td>29,4</td><td>39,2</td></tr><tr><th>s (m)</th><td>0</td><td>4,9</td><td>19,6</td><td>44,1</td><td>78,4</td></tr></table>
<p>Osserva: la velocità aumenta di 9,8 ogni secondo (linea retta nel grafico v-t); lo spazio cresce molto più in fretta: 4,9 → 19,6 → 44,1 → 78,4, cioè 1 : 4 : 9 : 16.</p>`
        },
        {
          label: "🧮 L'area del triangolo",
          html: `<p>Un modo geometrico per ricordare s = ½ a t²: nel grafico v-t, partendo da fermo, la velocità forma una retta. Lo spazio percorso è l'<b>area del triangolo</b> sotto la retta: base t, altezza v = a t, quindi area = ½ · t · a t = <b>½ a t²</b>. Se parti con velocità iniziale v₀, all'area del triangolo si aggiunge quella del rettangolo v₀ · t sotto di esso: s = v₀ t + ½ a t². Nessun calcolo da imparare a memoria: basta saper calcolare un'area!</p>`
        }
      ]
    },
    {
      type: "widget",
      title: "Accelera, frena o va a velocità costante?",
      widget: "classify",
      options: { groups: ["Accelera (aumenta |v|)", "Rallenta (diminuisce |v|)", "Velocità costante"], items: [
        ["v = +10 m/s e a = +2 m/s²", 0],
        ["v = +10 m/s e a = −2 m/s²", 1],
        ["v = −10 m/s e a = −2 m/s²", 0],
        ["v = −10 m/s e a = +2 m/s²", 1],
        ["v = +30 m/s e a = 0", 2],
        ["Una sasso in caduta libera (senza aria)", 0],
        ["Un'auto che frena a un semaforo rosso", 1]
      ] },
      caption: "Regola: se v e a hanno lo stesso segno il corpo accelera; se hanno segni opposti rallenta."
    },
    {
      type: "conceptMap",
      title: "Mappa: il moto uniformemente accelerato",
      nodes: [
        { id: "acc", label: "Accelerazione", x: 50, y: 6, color: "#6366f1", html: "a = Δv / Δt, in m/s².", why: "Misura quanto in fretta cambia la velocità. Introdotta nel Seicento da Galileo, che per primo distinse la velocità dal suo cambiamento: un'idea che sfugge all'intuizione dei Greci." },
        { id: "mua", label: "Moto uniformemente accelerato", x: 50, y: 32, color: "#a855f7", html: "Accelerazione costante: v lineare in t, s quadratica in t.", why: "È il moto più semplice dopo l'uniforme: la 'variazione costante della velocità'. Newton mostrerà che una forza costante dà esattamente un'accelerazione costante." },
        { id: "vt", label: "Grafico v-t", x: 18, y: 56, color: "#16a34a", html: "Retta inclinata: pendenza = a, area = spazio.", why: "Lo spazio è l'area perché ogni piccolo intervallo contribuisce v·Δt: sommare le aree dei rettangoli è l'idea dell'integrale." },
        { id: "st", label: "Grafico s-t", x: 82, y: 56, color: "#ef4444", html: "Parabola: s = s₀ + v₀t + ½at².", why: "La velocità aumenta, quindi la pendenza della curva cresce: una curva sempre più ripida, una parabola. Galileo trovò 1 : 3 : 5 : 7." },
        { id: "cad", label: "Caduta libera", x: 82, y: 82, color: "#0ea5e9", html: "a = g ≈ 9,8 m/s², indipendente dalla massa.", why: "Nel vuoto tutti i corpi cadono insieme (Galileo): un corpo più pesante è attratto di più, ma ha anche più inerzia, e i due effetti si compensano. Lo spiegherà Newton con F = ma e la gravitazione." },
        { id: "fre", label: "Frenata e spazio d'arresto", x: 18, y: 82, color: "#f59e0b", html: "s = v₀² / (2a): cresce con il quadrato di v₀.", why: "Deriva da v² = v₀² + 2as. È la ragione scientifica dei limiti di velocità e della distanza di sicurezza." },
        { id: "uni", label: "Dal moto uniforme", x: 50, y: 94, color: "#14b8a6", html: "Con a = 0 le formule tornano s = s₀ + v t.", why: "Il moto uniforme è il caso particolare a = 0: ogni formula del moto accelerato lo contiene." }
      ],
      edges: [
        ["acc", "mua", "costante dà"],
        ["mua", "vt", "si legge in"],
        ["mua", "st", "si legge in"],
        ["mua", "cad", "caso g"],
        ["mua", "fre", "caso a < 0"],
        ["mua", "uni", "generalizza"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: caduta e frenata",
      questions: [
        { type: "num", q: "Un sasso cade da fermo per 3 s (g = 10 m/s², senza aria). Quanti metri ha percorso?", answer: 45, unit: "m", explain: "s = ½ g t² = 5 · 9 = 45 m." },
        { type: "num", q: "Un'auto a 20 m/s frena con decelerazione 5 m/s². Quanti metri percorre prima di fermarsi?", answer: 40, unit: "m", explain: "s = v₀² / (2a) = 400 / 10 = 40 m." },
        { type: "mc", q: "Se la velocità iniziale di una frenata raddoppia, lo spazio di arresto…", options: ["Raddoppia", "Quadruplica", "Rimane uguale"], answer: 1, explain: "s = v₀² / (2a): il quadrato della velocità fa quadruplicare lo spazio." },
        { type: "tf", q: "Nel vuoto una piuma e un martello lasciati cadere insieme arrivano al suolo nello stesso istante.", answer: true, explain: "Senza aria l'accelerazione di caduta è la stessa per tutti i corpi." }
      ]
    }
  ],
  glossary: [
    { t: "Accelerazione", d: "Variazione della velocità nell'unità di tempo: a = Δv/Δt, in m/s²." },
    { t: "Moto uniformemente accelerato", d: "Moto rettilineo con accelerazione costante." },
    { t: "Decelerazione", d: "Accelerazione che riduce il modulo della velocità (segno opposto a v)." },
    { t: "Caduta libera", d: "Moto di un corpo soggetto solo alla gravità: a = g ≈ 9,8 m/s²." },
    { t: "Accelerazione di gravità", d: "Accelerazione g di un corpo in caduta libera; sulla Terra ≈ 9,8 m/s²." },
    { t: "Spazio di frenata", d: "Spazio percorso da un corpo che frena fino a fermarsi: s = v₀²/(2a)." },
    { t: "Velocità limite", d: "Velocità costante raggiunta quando la resistenza dell'aria equilibra la forza di gravità." },
    { t: "Parabola", d: "Curva del grafico s-t del moto uniformemente accelerato: s cresce come t²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "L'unità di misura dell'accelerazione nel Sistema Internazionale è…", options: ["m/s", "m/s²", "m²/s"], answer: 1, explain: "m/s², cioè metri al secondo per ogni secondo." },
      { type: "num", q: "Una moto passa da 0 a 27 m/s in 9 s. Qual è l'accelerazione media?", answer: 3, unit: "m/s²", explain: "27 / 9 = 3 m/s²." },
      { type: "num", q: "Un corpo parte con v₀ = 4 m/s e a = 2 m/s². Che velocità ha dopo 5 s?", answer: 14, unit: "m/s", explain: "v = 4 + 2 · 5 = 14 m/s." },
      { type: "num", q: "Un'auto parte da ferma con a = 4 m/s². Quanti metri percorre in 5 s?", answer: 50, unit: "m", explain: "s = ½ · 4 · 25 = 50 m." },
      { type: "tf", q: "Il grafico spazio-tempo del moto uniformemente accelerato è una retta.", answer: false, explain: "È una parabola: s dipende dal quadrato del tempo." },
      { type: "num", q: "Da quale altezza deve cadere un oggetto per toccare terra dopo 2 s? (g = 9,8 m/s²)", answer: 19.6, tol: 0.1, unit: "m", explain: "h = ½ · 9,8 · 4 = 19,6 m." },
      { type: "num", q: "Un treno a 30 m/s frena con a = −1,5 m/s². Dopo quanti secondi si ferma?", answer: 20, unit: "s", explain: "t = v₀ / a = 30 / 1,5 = 20 s." },
      { type: "mc", q: "Una palla è lanciata verso l'alto. Nel punto più alto…", options: ["Velocità nulla, accelerazione −g", "Velocità e accelerazione nulle", "Accelerazione nulla e velocità massima"], answer: 0, explain: "La velocità si annulla un istante, ma la gravità continua ad agire: a = −g." },
      { type: "text", q: "Come si chiama lo scienziato che studiò la caduta dei gravi con il piano inclinato nel Seicento?", answer: ["galileo", "galileo galilei", "galilei"], explain: "Galileo Galilei, nei Discorsi (1638)." },
      { type: "order", q: "Metti in ordine i passi per calcolare lo spazio di frenata.", items: ["Converti la velocità in m/s", "Individua v₀ e la decelerazione a", "Applica s = v₀² / (2a)", "Controlla l'unità: metri"], explain: "Prima si lavora in unità SI, poi si applica la formula e si controlla il risultato." }
    ]
  }
});

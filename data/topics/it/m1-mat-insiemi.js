TOPIC('it', {
  id: "m1-mat-insiemi",
  title: "Gli insiemi",
  intro: "Un <b>insieme</b> è una raccolta di oggetti scelti con un criterio preciso. Con gli insiemi possiamo ordinare le idee, classificare, risolvere problemi e capire il linguaggio che usa tutta la matematica. Impariamo a <b>rappresentarli</b> e a fare le <b>operazioni</b>: intersezione, unione, differenza, complementare e prodotto cartesiano.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Che cos'è un insieme",
      html: `<p>In matematica un <b>insieme</b> è un raggruppamento di oggetti (detti <b>elementi</b>) per cui è possibile stabilire <b>senza ambiguità</b> se un oggetto ne fa parte oppure no.</p>
<ul>
<li>«I mesi dell'anno che iniziano con la lettera M» → <b>è un insieme</b>: marzo, maggio. Nessun dubbio.</li>
<li>«I numeri pari minori di 10» → <b>è un insieme</b>: 0, 2, 4, 6, 8.</li>
<li>«I film più belli» → <b>non è un insieme</b>: «bello» dipende dai gusti!</li>
</ul>
<p><b>Simboli</b>:</p>
<ul>
<li>gli insiemi si indicano con lettere <b>maiuscole</b>: A, B, C…; gli elementi con lettere minuscole o numeri;</li>
<li><b>∈</b> significa «<b>appartiene</b>»: 4 ∈ P (4 appartiene all'insieme dei pari);</li>
<li><b>∉</b> significa «<b>non appartiene</b>»: 7 ∉ P;</li>
<li>un insieme senza elementi è l'<b>insieme vuoto</b>: ∅ oppure { } (es. «i mesi con 32 giorni»);</li>
<li>il numero di elementi si chiama <b>cardinalità</b>: |A| oppure n(A). Un insieme può essere <b>finito</b> (le lettere dell'alfabeto) o <b>infinito</b> (i numeri naturali).</li>
</ul>`
    },
    {
      type: "text",
      title: "Tre modi per rappresentare un insieme",
      html: `<p>Lo stesso insieme si può scrivere in tre modi. Prendiamo A = le vocali dell'alfabeto.</p>
<ol>
<li><b>Rappresentazione per elencazione</b> (o tabulare): si scrivono tutti gli elementi tra parentesi graffe, separati da virgole, <b>senza ripetizioni</b> e in qualsiasi ordine:<br><b>A = { a, e, i, o, u }</b></li>
<li><b>Rappresentazione per caratteristica</b>: si scrive la proprietà che li accomuna:<br><b>A = { x | x è una vocale dell'alfabeto italiano }</b><br>(si legge: «A è l'insieme degli x tali che x è una vocale»). È utilissima per gli insiemi infiniti: P = { x | x è un numero naturale pari }.</li>
<li><b>Rappresentazione grafica</b> (diagramma di <b>Eulero-Venn</b>): si disegna una linea chiusa e dentro si mettono gli elementi con un puntino. Ciò che è fuori non appartiene.</li>
</ol>
<p>Attenzione: { 1, 2, 3 } e { 3, 1, 2 } sono lo <b>stesso</b> insieme (l'ordine non conta), e { 1, 1, 2 } si scrive semplicemente { 1, 2 }.</p>`
    },
    {
      type: "svg",
      title: "Il diagramma di Eulero-Venn",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<ellipse cx="180" cy="150" rx="140" ry="105" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="4"/>
<text x="60" y="55" font-size="28" font-weight="bold" fill="#1d4ed8">A</text>
<g font-size="22" font-weight="bold" fill="#1e3a8a">
<circle cx="120" cy="110" r="5"/><text x="132" y="117">a</text>
<circle cx="210" cy="100" r="5"/><text x="222" y="107">e</text>
<circle cx="140" cy="180" r="5"/><text x="152" y="187">i</text>
<circle cx="230" cy="170" r="5"/><text x="242" y="177">o</text>
<circle cx="185" cy="225" r="5"/><text x="197" y="232">u</text>
</g>
<g font-size="22" fill="#64748b">
<circle cx="380" cy="80" r="5"/><text x="392" y="87">b</text>
<circle cx="430" cy="160" r="5"/><text x="442" y="167">m</text>
<circle cx="370" cy="230" r="5"/><text x="382" y="237">z</text>
</g>
<text x="480" y="60" font-size="18" fill="#0f172a">a ∈ A</text>
<text x="480" y="95" font-size="18" fill="#0f172a">m ∉ A</text>
<text x="480" y="130" font-size="18" fill="#0f172a">|A| = 5</text>
<text x="330" y="285" font-size="15" fill="#475569">fuori dalla linea: non appartengono</text>
</svg>`,
      caption: "Si chiama così in onore di Leonhard Euler (Eulero, 1707–1783) e John Venn (1834–1923), che usarono questi disegni per ragionare in logica."
    },
    {
      type: "text",
      title: "Sottoinsiemi e uguaglianza",
      html: `<p>Un insieme B è <b>sottoinsieme</b> di A se <b>ogni</b> elemento di B è anche elemento di A. Si scrive <b>B ⊆ A</b> (B è <b>incluso</b> in A).</p>
<p>Esempio: A = { 1, 2, 3, 4, 5, 6 }, B = { 2, 4, 6 } → B ⊆ A. Nel diagramma B è disegnato <b>dentro</b> A.</p>
<ul>
<li>Se B ⊆ A e A ha almeno un elemento in più, B è un sottoinsieme <b>proprio</b>: <b>B ⊂ A</b>.</li>
<li>Ogni insieme è sottoinsieme di sé stesso, e l'insieme vuoto è sottoinsieme di <b>qualsiasi</b> insieme: si chiamano sottoinsiemi <b>impropri</b>.</li>
<li>Due insiemi sono <b>uguali</b> se hanno esattamente gli stessi elementi: A ⊆ B e B ⊆ A.</li>
</ul>
<p>L'insieme di <b>tutti</b> i sottoinsiemi di A si chiama <b>insieme delle parti</b> P(A). Se A ha n elementi, i sottoinsiemi sono <b>2ⁿ</b>. Per A = { x, y }: ∅, {x}, {y}, {x, y} → 4 = 2².</p>
<p>Attenzione ai simboli: <b>∈</b> collega un <b>elemento</b> a un insieme (2 ∈ A); <b>⊆</b> collega un <b>insieme</b> a un insieme ({2} ⊆ A).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: rappresentare gli insiemi",
      questions: [
        { type: "tf", q: "«Gli alunni simpatici della classe» è un insieme in senso matematico.", answer: false, explain: "«Simpatico» è un giudizio personale: non si può stabilire senza ambiguità chi ne fa parte." },
        { type: "mc", q: "Come si scrive per elencazione l'insieme delle lettere della parola «MAMMA»?", options: ["{ M, A, M, M, A }", "{ M, A }", "{ MAMMA }", "{ M, M, M }"], answer: 1, explain: "Gli elementi non si ripetono: le lettere diverse sono solo M e A." },
        { type: "mc", q: "Se A = { 3, 5, 7 }, quale scrittura è corretta?", options: ["5 ⊆ A", "{5} ∈ A", "5 ∈ A", "4 ∈ A"], answer: 2, explain: "5 è un elemento: si usa ∈. {5} è un insieme: si scriverebbe {5} ⊆ A." },
        { type: "num", q: "Quanti sottoinsiemi ha un insieme di 3 elementi?", answer: 8, tol: 0, explain: "2³ = 8, contando anche l'insieme vuoto e l'insieme stesso." }
      ]
    },
    {
      type: "text",
      title: "Le operazioni con gli insiemi",
      html: `<p>Prendiamo A = { 1, 2, 3, 4, 5, 6 } (numeri del dado) e B = { 2, 4, 6, 8 } (pari minori di 10, senza lo 0).</p>
<table>
<tr><th>Operazione</th><th>Simbolo</th><th>Significato</th><th>Risultato</th></tr>
<tr><td><b>Intersezione</b></td><td>A ∩ B</td><td>elementi che stanno <b>in A e in B</b> (comuni)</td><td>{ 2, 4, 6 }</td></tr>
<tr><td><b>Unione</b></td><td>A ∪ B</td><td>elementi che stanno <b>in A o in B</b> (almeno in uno), presi una sola volta</td><td>{ 1, 2, 3, 4, 5, 6, 8 }</td></tr>
<tr><td><b>Differenza</b></td><td>A − B (o A \\ B)</td><td>elementi di A che <b>non</b> stanno in B</td><td>{ 1, 3, 5 }</td></tr>
<tr><td><b>Differenza</b></td><td>B − A</td><td>elementi di B che non stanno in A</td><td>{ 8 }</td></tr>
</table>
<ul>
<li>Se A ∩ B = ∅ gli insiemi si dicono <b>disgiunti</b> (es. pari e dispari).</li>
<li>L'unione e l'intersezione godono della proprietà <b>commutativa</b>: A ∪ B = B ∪ A. La differenza <b>no</b>!</li>
<li>Se B ⊆ U (U = insieme <b>universo</b>, che contiene tutto), la differenza U − B si chiama <b>complementare</b> di B rispetto a U: B̄ o C<sub>U</sub>B.</li>
<li><b>Regola per contare</b>: |A ∪ B| = |A| + |B| − |A ∩ B|. Gli elementi comuni si sottraggono perché altrimenti li conteremmo due volte. Qui: 6 + 4 − 3 = 7 ✔️</li>
</ul>`
    },
    {
      type: "svg",
      title: "Le operazioni disegnate",
      svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<defs>
<clipPath id="ia"><circle cx="80" cy="95" r="55"/></clipPath>

</defs>
<circle cx="80" cy="95" r="55" fill="#ffffff" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="#a855f7" clip-path="url(#ia)"/>
<circle cx="80" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="130" cy="95" r="55" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="105" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A ∩ B</text>
<circle cx="280" cy="95" r="55" fill="#a855f7" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="330" cy="95" r="55" fill="#a855f7" stroke="#dc2626" stroke-width="3"/>
<circle cx="280" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="305" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A ∪ B</text>
<circle cx="470" cy="95" r="55" fill="#a855f7" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="520" cy="95" r="55" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="470" cy="95" r="55" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="495" y="185" font-size="22" font-weight="bold" text-anchor="middle" fill="#581c87">A − B</text>
<g font-size="18" font-weight="bold"><text x="45" y="40" fill="#1d4ed8">A</text><text x="160" y="40" fill="#dc2626">B</text><text x="245" y="40" fill="#1d4ed8">A</text><text x="360" y="40" fill="#dc2626">B</text><text x="435" y="40" fill="#1d4ed8">A</text><text x="550" y="40" fill="#dc2626">B</text></g>
<text x="300" y="212" font-size="15" text-anchor="middle" fill="#475569">in viola: il risultato dell'operazione</text>
</svg>`,
      caption: "Intersezione = la parte in comune (la «e»); unione = tutto (la «o»); differenza = A tolta la parte di B."
    },
    {
      type: "example",
      title: "Esempio pratico: lo sport in classe",
      html: `<p>In una classe di <b>24</b> alunni, <b>14</b> giocano a calcio, <b>9</b> fanno nuoto e <b>5</b> fanno entrambi gli sport. Quanti non fanno nessuno dei due?</p>
<ol>
<li>Disegna due cerchi intersecati: C (calcio) e N (nuoto), dentro il rettangolo U (la classe).</li>
<li>Nell'intersezione scrivi <b>5</b>.</li>
<li>Solo calcio: 14 − 5 = <b>9</b>. Solo nuoto: 9 − 5 = <b>4</b>.</li>
<li>Almeno uno sport: |C ∪ N| = 14 + 9 − 5 = <b>18</b> (oppure 9 + 5 + 4).</li>
<li>Nessuno sport (complementare): 24 − 18 = <b>6</b> alunni.</li>
</ol>
<p>Errore tipico: sommare 14 + 9 = 23 e concludere che solo 1 non fa sport. Ma così i 5 che fanno entrambi sono contati <b>due volte</b>!</p>`
    },
    {
      type: "text",
      title: "Il prodotto cartesiano",
      html: `<p>Il <b>prodotto cartesiano</b> A × B è l'insieme di tutte le <b>coppie ordinate</b> (a; b) con il primo elemento preso da A e il secondo da B.</p>
<p>A = { pasta, riso }, B = { pomodoro, pesto, burro } →<br>A × B = { (pasta; pomodoro), (pasta; pesto), (pasta; burro), (riso; pomodoro), (riso; pesto), (riso; burro) }</p>
<ul>
<li>Il numero di coppie è <b>|A| × |B|</b> = 2 × 3 = 6. Ecco perché si chiama «prodotto»!</li>
<li>Le coppie sono <b>ordinate</b>: (pasta; pesto) ≠ (pesto; pasta), quindi in generale A × B ≠ B × A.</li>
<li>Si rappresenta con una <b>tabella a doppia entrata</b>, con un <b>diagramma a frecce</b> o con un <b>piano cartesiano</b> (un reticolo di punti).</li>
</ul>
<p>Si chiama così in onore di <b>René Descartes</b> (Cartesio, 1596–1650), il filosofo francese che inventò il piano cartesiano con le coordinate (x; y).</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: quanti abbinamenti?",
      html: `<p>Hai <b>3 magliette</b> (rossa, blu, verde) e <b>2 pantaloni</b> (jeans, tuta). Quanti abbinamenti diversi puoi fare?</p>
<table>
<tr><th>×</th><th>jeans</th><th>tuta</th></tr>
<tr><td><b>rossa</b></td><td>(rossa; jeans)</td><td>(rossa; tuta)</td></tr>
<tr><td><b>blu</b></td><td>(blu; jeans)</td><td>(blu; tuta)</td></tr>
<tr><td><b>verde</b></td><td>(verde; jeans)</td><td>(verde; tuta)</td></tr>
</table>
<p>3 × 2 = <b>6 abbinamenti</b>. Se aggiungi 4 paia di scarpe: 6 × 4 = 24 combinazioni! È lo stesso ragionamento usato per contare le targhe delle auto o le password possibili.</p>`
    },
    {
      type: "widget",
      title: "Dove va ogni numero?",
      widget: "classify",
      options: {
        groups: ["Solo multipli di 2", "Multipli di 2 e di 3 (intersezione)", "Solo multipli di 3", "Né l'uno né l'altro"],
        items: [["4", 0], ["6", 1], ["9", 2], ["12", 1], ["5", 3], ["8", 0], ["15", 2], ["18", 1], ["7", 3], ["10", 0], ["21", 2], ["1", 3]]
      },
      caption: "Con U = {1…21}, A = multipli di 2, B = multipli di 3: l'intersezione A ∩ B sono i multipli di 6!"
    },
    {
      type: "curiosity",
      title: "Cantor e gli infiniti di grandezza diversa",
      html: `<p>La teoria degli insiemi fu creata dal matematico tedesco <b>Georg Cantor</b> tra il <b>1874</b> e il 1897. Scoprì una cosa che lasciò senza parole i matematici del suo tempo: <b>esistono infiniti più grandi di altri</b>!</p>
<p>I numeri naturali (0, 1, 2, 3…) e i numeri pari sono «tanti uguali»: puoi accoppiarli 0↔0, 1↔2, 2↔4, 3↔6… senza che ne avanzi nessuno. Invece i punti di una retta sono «di più» dei numeri naturali: non si possono contare uno a uno nemmeno in un tempo infinito. Il matematico David Hilbert disse: «Nessuno potrà cacciarci dal paradiso che Cantor ha creato per noi».</p>`
    },
    {
      type: "curiosity",
      title: "Il paradosso del barbiere",
      html: `<p>Nel <b>1901</b> il filosofo inglese <b>Bertrand Russell</b> scoprì un problema nella teoria degli insiemi, che spiegò così: in un villaggio il barbiere rade <b>tutti e soli</b> gli uomini che <b>non</b> si radono da soli. Chi rade il barbiere?</p>
<ul>
<li>Se si rade da solo, allora non dovrebbe radersi (rade solo chi non si rade da solo).</li>
<li>Se non si rade da solo, allora dovrebbe radersi!</li>
</ul>
<p>È un <b>paradosso</b>: non esiste un barbiere così. Per evitare problemi simili i matematici hanno dovuto stabilire regole più rigorose su che cosa può essere un insieme. Ecco perché la definizione dice «senza ambiguità»!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Gli insiemi sono ovunque intorno a te: prova a vederli in questi modi.",
      tabs: [
        {
          label: "🧺 Con i cerchi di corda (hula-hoop)",
          html: `<p>Nelle scuole di molti Paesi (e nel metodo Montessori) gli insiemi si fanno in palestra: due cerchi di corda sul pavimento che si sovrappongono un po'. Ognuno entra dove deve: nel cerchio rosso chi ha un fratello, in quello blu chi ha un animale. Chi ha entrambi sta nella parte comune (<b>intersezione</b>); chi non ha nessuno dei due resta <b>fuori</b> (complementare).</p><p>Prova a casa con due lacci da scarpe e i tuoi giocattoli: macchinine rosse e giochi con le ruote… dove va la macchinina rossa?</p>`
        },
        {
          label: "🔍 Come un motore di ricerca",
          html: `<p>Quando cerchi in internet o filtri i prodotti di un negozio online, usi le operazioni tra insiemi!</p><ul><li>«scarpe <b>E</b> rosse» → <b>intersezione</b>: solo le scarpe che sono anche rosse;</li><li>«gatti <b>O</b> cani» → <b>unione</b>: tutte le pagine che parlano di almeno uno dei due;</li><li>«pizza <b>NON</b> ananas» → <b>differenza</b>: le pagine sulla pizza, tolte quelle con l'ananas.</li></ul><p>Questi operatori si chiamano <b>AND, OR, NOT</b> e vengono dall'<b>algebra di Boole</b> (George Boole, 1854). Sono la base del funzionamento dei computer!</p>`
        },
        {
          label: "📊 Il diagramma di Carroll",
          html: `<p>Lo scrittore di <i>Alice nel Paese delle Meraviglie</i>, <b>Lewis Carroll</b>, era anche un matematico! Inventò un altro modo di disegnare gli insiemi: una tabella. È molto usato nelle scuole inglesi.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#ffffff"/><rect x="150" y="50" width="420" height="190" fill="#f8fafc" stroke="#0f172a" stroke-width="3"/><line x1="360" y1="50" x2="360" y2="240" stroke="#0f172a" stroke-width="3"/><line x1="150" y1="145" x2="570" y2="145" stroke="#0f172a" stroke-width="3"/><g font-size="18" font-weight="bold" text-anchor="middle"><text x="255" y="38" fill="#1d4ed8">pari</text><text x="465" y="38" fill="#1d4ed8">NON pari</text><text x="75" y="102" fill="#dc2626">multipli</text><text x="75" y="122" fill="#dc2626">di 3</text><text x="75" y="192" fill="#dc2626">NON multipli</text><text x="75" y="212" fill="#dc2626">di 3</text></g><g font-size="24" text-anchor="middle" fill="#0f172a"><text x="255" y="105">6, 12, 18</text><text x="465" y="105">3, 9, 15</text><text x="255" y="200">2, 4, 8, 10</text><text x="465" y="200">1, 5, 7, 11</text></g><rect x="150" y="50" width="210" height="95" fill="#a855f7" fill-opacity="0.25"/></svg>`
        },
        {
          label: "🧊 Il prodotto cartesiano in 3D",
          html: `<p>Il prodotto cartesiano A × B si può «vedere» come un <b>rettangolo di cubetti</b>: ogni riga è un elemento di A, ogni colonna un elemento di B, e ogni cubetto è una coppia. Con 3 magliette e 4 pantaloni ottieni 3 × 4 = 12 cubetti = 12 abbinamenti. Cambia i numeri con i cursori!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "🧩 Abbina simbolo e significato",
          html: "<p>Collega ogni simbolo al suo significato.</p>",
          widget: "match",
          options: { pairs: [["∈", "appartiene"], ["∉", "non appartiene"], ["∅", "insieme vuoto"], ["⊆", "è sottoinsieme di"], ["∩", "intersezione"], ["∪", "unione"], ["×", "prodotto cartesiano"]] }
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: operazioni",
      questions: [
        { type: "mc", q: "A = { 1, 3, 5, 7 }, B = { 3, 4, 5 }. Quanto vale A ∩ B?", options: ["{ 1, 3, 4, 5, 7 }", "{ 3, 5 }", "{ 1, 7 }", "{ 4 }"], answer: 1, explain: "Gli elementi comuni sono 3 e 5." },
        { type: "mc", q: "Con gli stessi insiemi, quanto vale A − B?", options: ["{ 1, 7 }", "{ 4 }", "{ 3, 5 }", "∅"], answer: 0, explain: "Si tolgono da A gli elementi che stanno anche in B: restano 1 e 7." },
        { type: "num", q: "|A| = 10, |B| = 7, |A ∩ B| = 3. Quanto vale |A ∪ B|?", answer: 14, tol: 0, explain: "10 + 7 − 3 = 14: gli elementi comuni si contano una volta sola." },
        { type: "tf", q: "A × B e B × A sono sempre lo stesso insieme.", answer: false, explain: "Le coppie sono ordinate: (1; a) è diversa da (a; 1). Hanno però lo stesso numero di elementi." }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché gli insiemi sono il linguaggio della matematica",
      nodes: [
        { id: "classificare", label: "Classificare", x: 50, y: 6, color: "#64748b", html: "Raggruppare oggetti secondo una caratteristica.", why: "È una delle prime attività del pensiero: già Aristotele (IV sec. a.C.) classificava animali e concetti in generi e specie." },
        { id: "insieme", label: "Insieme", x: 50, y: 22, color: "#2563eb", html: "Raccolta di elementi ben definita.", why: "Georg Cantor (1874) ne fece un concetto matematico rigoroso: «un insieme è una collezione di oggetti distinti, pensati come un tutto»." },
        { id: "appartenenza", label: "Appartenenza ∈", x: 15, y: 36, color: "#0ea5e9", html: "Un elemento appartiene o non appartiene: nessuna via di mezzo.", why: "È il principio logico del «terzo escluso» (Aristotele): una cosa o è o non è. Il simbolo ∈ viene dalla lettera greca epsilon, iniziale di «è», scelto da Giuseppe Peano nel 1889." },
        { id: "rappresentazioni", label: "Rappresentazioni", x: 85, y: 36, color: "#16a34a", html: "Elencazione, caratteristica, diagramma di Eulero-Venn.", why: "Eulero usò i cerchi nelle «Lettere a una principessa tedesca» (1768); John Venn li perfezionò nel 1880 per la logica." },
        { id: "sottoinsiemi", label: "Sottoinsiemi", x: 25, y: 56, color: "#9333ea", html: "B ⊆ A se ogni elemento di B sta in A.", why: "I sottoinsiemi di un insieme di n elementi sono 2ⁿ: per ogni elemento si decide «dentro» o «fuori», 2 scelte ripetute n volte." },
        { id: "operazioni", label: "Operazioni ∩ ∪ −", x: 50, y: 56, color: "#ea580c", html: "Intersezione, unione, differenza, complementare.", why: "Corrispondono alle parole «e», «o», «non» della logica. George Boole (1854) creò un'algebra della logica che oggi fa funzionare i circuiti dei computer." },
        { id: "cartesiano", label: "Prodotto cartesiano", x: 78, y: 56, color: "#dc2626", html: "Tutte le coppie ordinate (a; b).", why: "Nasce dall'idea di Cartesio (1637) di descrivere ogni punto del piano con una coppia di numeri: le coordinate." },
        { id: "contare", label: "Contare: |A ∪ B|", x: 35, y: 80, color: "#f59e0b", html: "|A ∪ B| = |A| + |B| − |A ∩ B|.", why: "È il «principio di inclusione-esclusione»: si sottrae l'intersezione perché è stata contata due volte." },
        { id: "fondamenti", label: "Fondamenti della matematica", x: 72, y: 82, color: "#0f766e", html: "Numeri, funzioni, geometria si definiscono con gli insiemi.", why: "Dopo il paradosso di Russell (1901), Zermelo (1908) e Fraenkel stabilirono gli assiomi della teoria degli insiemi (ZF), base di quasi tutta la matematica moderna." }
      ],
      edges: [["classificare", "insieme", "si formalizza in"], ["insieme", "appartenenza", "si basa su"], ["insieme", "rappresentazioni", "si scrive con"], ["insieme", "sottoinsiemi", "contiene"], ["insieme", "operazioni", "si combina con"], ["insieme", "cartesiano", "si moltiplica"], ["operazioni", "contare", "permette di"], ["sottoinsiemi", "fondamenti", "struttura"], ["operazioni", "fondamenti", "logica"], ["cartesiano", "fondamenti", "coordinate"]]
    }
  ],
  glossary: [
    { t: "Insieme", d: "Raggruppamento di oggetti per cui si può dire senza ambiguità se un oggetto ne fa parte." },
    { t: "Elemento", d: "Ciascuno degli oggetti che formano un insieme." },
    { t: "Insieme vuoto", d: "Insieme privo di elementi: ∅." },
    { t: "Cardinalità", d: "Numero degli elementi di un insieme." },
    { t: "Sottoinsieme", d: "Insieme i cui elementi appartengono tutti a un altro insieme." },
    { t: "Intersezione", d: "Insieme degli elementi comuni a due insiemi: A ∩ B." },
    { t: "Unione", d: "Insieme degli elementi che appartengono ad almeno uno dei due insiemi: A ∪ B." },
    { t: "Differenza", d: "Elementi del primo insieme che non appartengono al secondo: A − B." },
    { t: "Complementare", d: "Elementi dell'universo che non appartengono a un insieme." },
    { t: "Prodotto cartesiano", d: "Insieme di tutte le coppie ordinate (a; b) con a ∈ A e b ∈ B." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di questi è un insieme in senso matematico?", options: ["I libri interessanti", "I numeri dispari minori di 10", "Le canzoni più belle", "I ragazzi alti"], answer: 1, explain: "{ 1, 3, 5, 7, 9 }: si stabilisce senza dubbi chi ne fa parte." },
      { type: "num", q: "Quanti elementi ha l'insieme delle lettere della parola «MATEMATICA»?", answer: 6, tol: 0, explain: "{ M, A, T, E, I, C }: 6 lettere diverse." },
      { type: "mc", q: "L'insieme dei mesi con 32 giorni è…", options: ["infinito", "vuoto", "formato da un elemento", "non è un insieme"], answer: 1, explain: "Nessun mese ha 32 giorni: è l'insieme vuoto ∅." },
      { type: "mc", q: "A = { a, b, c, d }, B = { c, d, e }. A ∪ B = ?", options: ["{ c, d }", "{ a, b }", "{ a, b, c, d, e }", "{ a, b, c, d, c, d, e }"], answer: 2, explain: "Tutti gli elementi, ciascuno una sola volta." },
      { type: "tf", q: "L'insieme vuoto è sottoinsieme di ogni insieme.", answer: true, explain: "Non ha elementi che possano «stare fuori»: è un sottoinsieme improprio di qualsiasi insieme." },
      { type: "mc", q: "Due insiemi si dicono disgiunti quando…", options: ["sono uguali", "la loro intersezione è vuota", "uno è sottoinsieme dell'altro", "hanno lo stesso numero di elementi"], answer: 1, explain: "Non hanno elementi in comune: A ∩ B = ∅." },
      { type: "num", q: "In una classe di 25 alunni, 15 studiano inglese extra, 12 francese extra e 7 entrambe. Quanti non studiano nessuna lingua extra?", answer: 5, tol: 0, explain: "Almeno una: 15 + 12 − 7 = 20. Nessuna: 25 − 20 = 5." },
      { type: "num", q: "A ha 4 elementi e B ne ha 5. Quante coppie ha A × B?", answer: 20, tol: 0, explain: "|A × B| = 4 × 5 = 20." },
      { type: "text", q: "Come si chiama il diagramma con le linee chiuse usato per rappresentare gli insiemi? (cognomi dei due matematici)", answer: ["eulero-venn", "eulero venn", "venn", "eulero", "di eulero-venn"], explain: "Diagramma di Eulero-Venn." },
      { type: "mc", q: "U = { 1, 2, 3, 4, 5, 6 }, B = { 2, 3 }. Il complementare di B rispetto a U è…", options: ["{ 2, 3 }", "{ 1, 4, 5, 6 }", "∅", "{ 1, 2, 3, 4, 5, 6 }"], answer: 1, explain: "Gli elementi di U che non stanno in B." },
      { type: "order", q: "Metti in ordine i passi per risolvere un problema con il diagramma di Venn", items: ["Disegna l'universo e gli insiemi intersecati", "Scrivi il numero degli elementi comuni", "Calcola le parti «solo A» e «solo B»", "Calcola ciò che resta fuori"], explain: "Si parte sempre dall'intersezione, poi le parti esclusive, infine il complementare." },
      { type: "mc", q: "Chi fondò la teoria degli insiemi?", options: ["Euclide", "Georg Cantor", "Pitagora", "Isaac Newton"], answer: 1, explain: "Georg Cantor, a partire dal 1874." }
    ]
  }
});

TOPIC('it', {
  id: "l1-mat-insiemi-logica",
  title: "Insiemi e logica",
  intro: "\"Tutti i gatti sono mammiferi; Micio è un gatto; quindi Micio è un mammifero.\" Ragionare in modo corretto non è un'arte misteriosa: ha regole precise. In questa lezione impariamo il linguaggio con cui la matematica ordina il mondo, gli <b>insiemi</b>, e quello con cui lo argomenta, la <b>logica</b>: proposizioni, connettivi, implicazioni e quantificatori. Sono gli strumenti che userai in tutta la matematica del liceo, e anche nel diritto, nell'informatica e nella vita di tutti i giorni (per esempio per smontare un ragionamento scorretto).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Che cos'è un insieme",
      html: `<p>Un <b>insieme</b> è una collezione di oggetti, detti <b>elementi</b>, ben definita: dato un oggetto, deve essere possibile decidere senza ambiguità se appartiene o no all'insieme. \"I numeri pari minori di 10\" è un insieme; \"i film belli\" no, perché \"bello\" è soggettivo.</p>
<p>Notazione: si indicano gli insiemi con lettere maiuscole (A, B, C…), gli elementi con minuscole. Si scrive:</p>
<ul>
<li><b>a ∈ A</b>: a <b>appartiene</b> ad A; <b>a ∉ A</b>: non appartiene.</li>
<li><b>∅</b>: l'<b>insieme vuoto</b>, privo di elementi (per esempio le soluzioni reali di x² = −1).</li>
<li>Gli insiemi numerici: ℕ (naturali), ℤ (interi), ℚ (razionali), ℝ (reali).</li>
</ul>
<p>Ci sono tre modi per <b>assegnare</b> un insieme:</p>
<ol>
<li><b>Elencazione</b>: A = {2, 4, 6, 8}. L'ordine non conta e gli elementi non si ripetono: {1, 2, 3} = {3, 2, 1} = {1, 1, 2, 3}.</li>
<li><b>Proprietà caratteristica</b>: A = {x ∈ ℕ | x è pari e x &lt; 10}. Si legge \"x tale che\".</li>
<li><b>Diagramma di Eulero-Venn</b>: una linea chiusa che racchiude i suoi elementi. Fu usato da Leonhard Euler (1768) e reso sistematico da John Venn (1880).</li>
</ol>
<p>Un insieme è <b>finito</b> se ha un numero finito di elementi (la sua <b>cardinalità</b> |A| è quel numero), <b>infinito</b> altrimenti (ℕ, ℤ, ℝ…). Georg Cantor (1845-1918) fondò la teoria degli insiemi e mostrò che anche gli infiniti possono avere \"grandezze\" diverse: ℕ e ℝ sono entrambi infiniti, ma non ne hanno la stessa.</p>`
    },
    {
      type: "text",
      title: "Sottoinsiemi",
      html: `<p>B è un <b>sottoinsieme</b> di A (B ⊆ A) se <b>ogni</b> elemento di B appartiene anche ad A. Se inoltre B ≠ A, B è un sottoinsieme <b>proprio</b> (B ⊂ A).</p>
<p>Esempio: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Anche {2, 4} ⊂ {1, 2, 3, 4}.</p>
<ul>
<li>L'insieme vuoto è sottoinsieme di <b>ogni</b> insieme (∅ ⊆ A: non ci sono elementi che violino la condizione).</li>
<li>Ogni insieme è sottoinsieme di se stesso (A ⊆ A).</li>
<li>Due insiemi sono <b>uguali</b> se A ⊆ B e B ⊆ A, cioè se hanno gli stessi elementi.</li>
</ul>
<p>L'insieme di <b>tutti i sottoinsiemi</b> di A si chiama <b>insieme delle parti</b> 𝒫(A). Se A ha n elementi, 𝒫(A) ne ha <b>2<sup>n</sup></b>: per ogni elemento scegliamo \"c'è\" o \"non c'è\". Per A = {a, b, c} i sottoinsiemi sono 2³ = 8: ∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}.</p>
<p>Attenzione a non confondere ∈ e ⊂: 2 ∈ {1, 2, 3} (2 è un <i>elemento</i>), {2} ⊂ {1, 2, 3} (l'insieme {2} è un <i>sottoinsieme</i>).</p>`
    },
    {
      type: "svg",
      title: "Operazioni tra insiemi con i diagrammi di Venn",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="20" width="570" height="270" fill="none" stroke="#475569" stroke-width="2"/>
<text x="22" y="46" font-size="16" fill="#475569" font-weight="bold">U (insieme universo)</text>
<circle cx="230" cy="165" r="95" fill="#3b82f6" fill-opacity="0.35" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="350" cy="165" r="95" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="165" y="170" font-size="22" fill="#1e3a8a" font-weight="bold">A \\ B</text>
<text x="290" y="170" font-size="20" fill="#1f2937" font-weight="bold">A ∩ B</text>
<text x="370" y="170" font-size="22" fill="#78350f" font-weight="bold">B \\ A</text>
<text x="190" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">A</text>
<text x="380" y="80" font-size="22" fill="#b45309" font-weight="bold">B</text>
<text x="480" y="130" font-size="16" fill="#1f2937">A ∪ B: tutta la parte colorata</text>
<text x="480" y="160" font-size="16" fill="#1f2937">A ∩ B: parte comune</text>
<text x="480" y="190" font-size="16" fill="#1f2937">A \\ B: solo in A</text>
<text x="480" y="220" font-size="16" fill="#1f2937">complementare: fuori da A</text>
</svg>`,
      caption: "Unione (tutto ciò che sta in A o in B), intersezione (ciò che sta in entrambi), differenza (in A ma non in B) e complementare (nell'universo ma non in A)."
    },
    {
      type: "text",
      title: "Le operazioni tra insiemi",
      html: `<p>Siano A e B due insiemi contenuti in un insieme <b>universo</b> U.</p>
<ul>
<li><b>Unione</b> A ∪ B = {x | x ∈ A <b>oppure</b> x ∈ B} (l'\"o\" è <i>inclusivo</i>: va bene anche se è in entrambi).</li>
<li><b>Intersezione</b> A ∩ B = {x | x ∈ A <b>e</b> x ∈ B}. Se A ∩ B = ∅ i due insiemi sono <b>disgiunti</b>.</li>
<li><b>Differenza</b> A \\ B = {x | x ∈ A e x ∉ B}.</li>
<li><b>Complementare</b> di A rispetto a U: Ā = U \\ A = {x ∈ U | x ∉ A}.</li>
<li><b>Prodotto cartesiano</b> A × B = {(a, b) | a ∈ A, b ∈ B}: l'insieme delle coppie <i>ordinate</i>. Se |A| = m e |B| = n, allora |A × B| = m·n. Prende il nome da René Descartes (Cartesio), che con il piano cartesiano associò a ogni punto una coppia di numeri (ℝ × ℝ).</li>
</ul>
<p>Proprietà utili:</p>
<ul>
<li>commutativa e associativa per ∪ e ∩; distributiva: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C);</li>
<li><b>Leggi di De Morgan</b>: il complementare di A ∪ B è Ā ∩ B̄; il complementare di A ∩ B è Ā ∪ B̄ (Augustus De Morgan, 1806-1871);</li>
<li><b>Formula di inclusione-esclusione</b> per insiemi finiti: |A ∪ B| = |A| + |B| − |A ∩ B| (si toglie l'intersezione, altrimenti sarebbe contata due volte).</li>
</ul>
<p>Una <b>partizione</b> di A è una famiglia di sottoinsiemi non vuoti, a due a due disgiunti, la cui unione è A: per esempio ℤ è partizionato in pari e dispari.</p>`
    },
    {
      type: "example",
      title: "Esempio: il sondaggio sulle attività",
      html: `<p>In una classe di 28 studenti, 15 praticano uno sport (S), 12 suonano uno strumento (M) e 6 fanno entrambe le cose. Quanti non fanno né l'una né l'altra?</p>
<ol>
<li>|S ∪ M| = |S| + |M| − |S ∩ M| = 15 + 12 − 6 = <b>21</b>.</li>
<li>Non fanno né l'una né l'altra: 28 − 21 = <b>7</b> studenti.</li>
<li>Solo sport: 15 − 6 = 9; solo musica: 12 − 6 = 6.</li>
</ol>
<p>Controllo: 9 + 6 + 6 + 7 = 28 ✔. Se avessimo semplicemente sommato 15 + 12 = 27, avremmo contato due volte i 6 che fanno entrambe: è l'errore classico nei sondaggi.</p>`
    },
    {
      type: "widget",
      title: "Quale zona del diagramma?",
      widget: "classify",
      options: { groups: ["Solo A (multipli di 2)", "Solo B (multipli di 3)", "Sia in A sia in B", "Né in A né in B"], items: [
        ["1", 3], ["2", 0], ["3", 1], ["4", 0], ["5", 3], ["6", 2],
        ["8", 0], ["9", 1], ["10", 0], ["11", 3], ["12", 2], ["7", 3]
      ] },
      caption: "Con A = multipli di 2 e B = multipli di 3 tra 1 e 12: l'intersezione contiene i multipli di 6."
    },
    {
      type: "quiz",
      title: "Mini-quiz: insiemi",
      questions: [
        { type: "num", q: "A = {1, 2, 3, 4} e B = {3, 4, 5}. Quanti elementi ha A ∪ B?", answer: 5, explain: "A ∪ B = {1, 2, 3, 4, 5}: 5 elementi (4 + 3 − 2 = 5)." },
        { type: "num", q: "Quanti sottoinsiemi ha un insieme di 4 elementi?", answer: 16, explain: "2⁴ = 16, compresi ∅ e l'insieme stesso." },
        { type: "mc", q: "Quale affermazione è corretta?", options: ["2 ⊂ {1, 2, 3}", "{2} ⊂ {1, 2, 3}", "{2} ∈ {1, 2, 3}"], answer: 1, explain: "{2} è un insieme contenuto in {1, 2, 3}, quindi un sottoinsieme; 2 è un elemento." }
      ]
    },
    {
      type: "text",
      title: "Proposizioni e connettivi logici",
      html: `<p>Una <b>proposizione</b> è un'affermazione di cui si può dire senza ambiguità che è <b>vera</b> (V) o <b>falsa</b> (F). \"7 è un numero primo\" (V) e \"8 è dispari\" (F) lo sono. \"Che ora è?\" e \"x + 1 = 5\" (finché non sappiamo chi è x) non lo sono. Quest'ultima è un <b>predicato</b>: diventa una proposizione quando si sostituisce un valore alla x o si usa un quantificatore.</p>
<p>Con i <b>connettivi</b> si costruiscono proposizioni composte, il cui valore di verità dipende solo da quelli delle componenti:</p>
<table>
<tr><th>Nome</th><th>Simbolo</th><th>Si legge</th><th>Vera quando…</th></tr>
<tr><td>Negazione</td><td>¬p</td><td>non p</td><td>p è falsa</td></tr>
<tr><td>Congiunzione</td><td>p ∧ q</td><td>p e q</td><td>sono vere <b>entrambe</b></td></tr>
<tr><td>Disgiunzione</td><td>p ∨ q</td><td>p o q (inclusivo)</td><td>almeno una è vera</td></tr>
<tr><td>Implicazione</td><td>p ⇒ q</td><td>se p allora q</td><td>è falsa solo se p è V e q è F</td></tr>
<tr><td>Doppia implicazione</td><td>p ⇔ q</td><td>p se e solo se q</td><td>p e q hanno lo stesso valore</td></tr>
</table>
<p><b>Tabella di verità</b> per p ⇒ q:</p>
<table>
<tr><th>p</th><th>q</th><th>p ⇒ q</th></tr>
<tr><td>V</td><td>V</td><td>V</td></tr>
<tr><td>V</td><td>F</td><td><b>F</b></td></tr>
<tr><td>F</td><td>V</td><td>V</td></tr>
<tr><td>F</td><td>F</td><td>V</td></tr>
</table>
<p>L'implicazione sorprende: se p è falsa, \"p ⇒ q\" è vera <i>qualunque</i> sia q. Pensa a una promessa: \"se domani piove, ti porto l'ombrello\". Se non piove, non ho tradito la promessa in nessun caso. L'unico modo di smentirmi è che piova e che io non te lo porti.</p>`
    },
    {
      type: "example",
      title: "Esempio: i contrari, le inverse e le contrapposte",
      html: `<p>Partiamo da: <b>p ⇒ q</b> = \"se un numero è multiplo di 6, allora è pari\" (vera).</p>
<ul>
<li><b>Inversa</b>: q ⇒ p = \"se è pari, allora è multiplo di 6\" → <b>falsa</b> (4 è pari ma non multiplo di 6).</li>
<li><b>Contrapposta</b>: ¬q ⇒ ¬p = \"se un numero non è pari (dispari), allora non è multiplo di 6\" → <b>vera</b>. La contrapposta è <b>sempre equivalente</b> all'implicazione di partenza.</li>
<li><b>Negazione</b> dell'implicazione: p ∧ ¬q = \"è multiplo di 6 e non è pari\" → falsa, come deve essere.</li>
</ul>
<p>Questo spiega due modi di dire diversi:</p>
<ul>
<li>p è condizione <b>sufficiente</b> per q (p ⇒ q): essere multiplo di 6 basta per essere pari;</li>
<li>q è condizione <b>necessaria</b> per p: se non è pari, non può essere multiplo di 6.</li>
</ul>
<p>Se valgono entrambe le implicazioni (p ⇔ q), p è condizione necessaria e sufficiente per q. Esempio: un numero è divisibile per 6 se e solo se è divisibile per 2 e per 3.</p>`
    },
    {
      type: "text",
      title: "Tautologie, contraddizioni e il ragionamento",
      html: `<p>Una proposizione composta è una <b>tautologia</b> se è vera per ogni valore di verità delle componenti (p ∨ ¬p: \"o piove o non piove\"), una <b>contraddizione</b> se è sempre falsa (p ∧ ¬p). Due proposizioni sono <b>logicamente equivalenti</b> se hanno la stessa tabella di verità. Equivalenze importanti:</p>
<ul>
<li>p ⇒ q ≡ ¬q ⇒ ¬p (contrapposizione);</li>
<li>p ⇒ q ≡ ¬p ∨ q;</li>
<li><b>De Morgan</b>: ¬(p ∧ q) ≡ ¬p ∨ ¬q e ¬(p ∨ q) ≡ ¬p ∧ ¬q. Esempio: la negazione di \"è alto e biondo\" è \"non è alto <i>o</i> non è biondo\".</li>
</ul>
<p>Sulla contrapposizione si basa la <b>dimostrazione per assurdo</b>: per dimostrare p si assume ¬p e si arriva a una contraddizione. Così gli antichi greci dimostrarono che √2 non è razionale e che i numeri primi sono infiniti.</p>
<p>I <b>sillogismi</b> di Aristotele (IV sec. a.C.) sono il primo sistema di logica formale: \"Tutti gli uomini sono mortali; Socrate è un uomo; quindi Socrate è mortale\". In termini di insiemi: se U ⊆ M e s ∈ U, allora s ∈ M. Logica e insiemi sono due facce della stessa medaglia: ∧ corrisponde a ∩, ∨ a ∪, ¬ al complementare, ⇒ al ⊆.</p>`
    },
    {
      type: "text",
      title: "Predicati e quantificatori",
      html: `<p>Un <b>predicato</b> P(x) è una frase con una variabile che diventa vera o falsa quando si fissa x. I <b>quantificatori</b> trasformano un predicato in una proposizione:</p>
<ul>
<li><b>∀x P(x)</b>: \"per ogni x vale P(x)\" (quantificatore universale);</li>
<li><b>∃x P(x)</b>: \"esiste almeno un x per cui vale P(x)\" (quantificatore esistenziale);</li>
<li><b>∃!x P(x)</b>: \"esiste uno e un solo x\".</li>
</ul>
<p>Esempi su ℝ: ∀x, x² ≥ 0 (vera); ∃x, x² = 4 (vera: x = 2 o −2); ∃x, x² = −1 (falsa su ℝ); ∀x, x &gt; 3 (falsa: basta il controesempio x = 0).</p>
<p><b>Come si negano</b> (importantissimo):</p>
<ul>
<li>¬(∀x P(x)) ≡ ∃x ¬P(x): per negare \"tutti\" basta <b>un controesempio</b>. La negazione di \"tutti i cigni sono bianchi\" è \"esiste almeno un cigno non bianco\" (non \"tutti i cigni sono neri\"!). I cigni neri furono davvero scoperti in Australia, dagli europei, alla fine del Seicento.</li>
<li>¬(∃x P(x)) ≡ ∀x ¬P(x): per negare \"esiste\" occorre dimostrare che <b>nessun</b> elemento soddisfa la proprietà.</li>
</ul>
<p>Una singola verifica numerica non dimostra mai un'affermazione universale (\"vale per 1, 2, 3, 4… quindi per tutti\" non è una dimostrazione), mentre un controesempio basta per smentirla.</p>`
    },
    {
      type: "curiosity",
      title: "Il paradosso di Russell",
      html: `<p>Nel 1901 il filosofo e matematico Bertrand Russell scoprì un guaio nella teoria degli insiemi \"ingenua\". Considera \"l'insieme R di tutti gli insiemi che <b>non</b> contengono se stessi\". R contiene se stesso? Se sì, per definizione non dovrebbe contenersi; se no, dovrebbe contenersi. Contraddizione! Una versione divertente: \"In un paese il barbiere rade tutti e soli gli uomini che non si radono da soli. Chi rade il barbiere?\". Il paradosso costrinse i matematici a rifondare la teoria con regole più rigorose (assiomi di Zermelo-Fraenkel). Dimostra che anche la matematica ha bisogno di attenzione quando si parla di \"insiemi di tutti gli insiemi\".</p>`
    },
    {
      type: "curiosity",
      title: "Boole, la logica e il tuo smartphone",
      html: `<p>Nel 1854 il matematico inglese George Boole pubblicò <i>Le leggi del pensiero</i>, in cui mostrava che la logica si poteva trattare con un'algebra: oggi chiamata <b>algebra di Boole</b>, usa solo due valori (1 = vero, 0 = falso) e le operazioni AND, OR, NOT. Nel 1937 Claude Shannon capì che gli interruttori elettrici si comportano esattamente come i connettivi logici: due interruttori <b>in serie</b> sono un AND (la corrente passa solo se entrambi sono chiusi), due <b>in parallelo</b> un OR. Su questa idea si fondano tutti i circuiti digitali, dalle calcolatrici ai processori dei computer.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la logica",
      intro: "Le tabelle di verità sono precise ma astratte: ecco altre immagini per riconoscere i connettivi.",
      tabs: [
        {
          label: "💡 Interruttori",
          html: `<p>Pensa a una lampadina e a due interruttori p e q (chiusi = vero).</p>
<ul>
<li><b>p ∧ q</b>: interruttori <b>in serie</b>. La lampadina si accende solo se sono chiusi entrambi.</li>
<li><b>p ∨ q</b>: interruttori <b>in parallelo</b>. Basta che uno sia chiuso.</li>
<li><b>¬p</b>: un interruttore \"invertito\", acceso quando p è spento.</li>
</ul>
<p>In pratica, ogni formula logica è un circuito, e viceversa. Provalo disegnando i circuiti di ¬(p ∧ q) e di ¬p ∨ ¬q: hanno lo stesso comportamento (De Morgan!).</p>`
        },
        {
          label: "🧮 Con gli insiemi",
          html: `<p>A ogni predicato P(x) associamo l'insieme dei suoi elementi che lo soddisfano, A = {x | P(x)}. Allora: \"P e Q\" corrisponde all'intersezione A ∩ B; \"P o Q\" all'unione A ∪ B; \"non P\" al complementare Ā; \"P ⇒ Q\" al fatto che A ⊆ B. Per esempio \"tutti i quadrati sono rombi\" significa che l'insieme dei quadrati è contenuto in quello dei rombi: lo vedi disegnando un cerchio dentro un altro.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<ellipse cx="300" cy="130" rx="230" ry="105" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="140" rx="130" ry="65" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Rombi</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Quadrati</text>
<text x="300" y="235" font-size="16" text-anchor="middle" fill="#1f2937">Quadrato ⇒ rombo, ma rombo ⇒ quadrato è falso</text>
</svg>`
        },
        {
          label: "⚖️ La promessa",
          html: `<p>Per capire perché \"p ⇒ q\" è vera quando p è falsa, pensa a una promessa: \"se prendo 10 all'esame, ti regalo un videogioco\". Quando <b>rompo</b> la promessa? Solo se prendo 10 e il regalo non arriva. Se prendo 8, la promessa resta vera, qualunque cosa io faccia: non è stata smentita. La logica considera falsa un'implicazione solo se si trova il caso \"premessa vera, conclusione falsa\".</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di insiemi e logica",
      nodes: [
        { id: "insieme", label: "Insieme", x: 25, y: 6, color: "#2563eb", html: "Collezione ben definita di elementi.", why: "Cantor (1870-1890) introdusse gli insiemi per studiare l'infinito. Oggi sono il linguaggio comune di tutta la matematica: numeri, funzioni e figure sono insiemi con una struttura." },
        { id: "operazioni", label: "Unione, intersezione, differenza", x: 12, y: 32, color: "#16a34a", html: "Costruiscono nuovi insiemi da quelli noti.", why: "Seguono le leggi dell'algebra di Boole: commutativa, associativa, distributiva e De Morgan. Boole (1854) le scoprì studiando la logica." },
        { id: "cartesiano", label: "Prodotto cartesiano", x: 12, y: 60, color: "#f59e0b", html: "Coppie ordinate (a, b).", why: "Descartes (1637) associò a ogni punto del piano una coppia di numeri. Funzioni e relazioni sono sottoinsiemi di un prodotto cartesiano." },
        { id: "proposizione", label: "Proposizione", x: 72, y: 6, color: "#9333ea", html: "Frase vera o falsa, non entrambe.", why: "Principio di non contraddizione e del terzo escluso, già in Aristotele (IV sec. a.C.): per la logica classica ogni proposizione è V o F." },
        { id: "connettivi", label: "Connettivi", x: 62, y: 32, color: "#ef4444", html: "¬, ∧, ∨, ⇒, ⇔ e tabelle di verità.", why: "Il valore di una proposizione composta dipende solo dai valori delle parti (vero-funzionalità). Frege e Peano (fine '800) fissarono i simboli moderni." },
        { id: "implicazione", label: "Implicazione e contrapposta", x: 85, y: 55, color: "#0ea5e9", html: "p ⇒ q ≡ ¬q ⇒ ¬p.", why: "Fonda la dimostrazione per assurdo. Se p ⇒ q, p è sufficiente e q è necessaria: non vale in generale il viceversa." },
        { id: "quantificatori", label: "Quantificatori ∀, ∃", x: 55, y: 62, color: "#22c55e", html: "Trasformano un predicato in proposizione.", why: "Introdotti da Frege (1879) e Peano. Negare un ∀ richiede un controesempio: la scienza progredisce così (i cigni neri smentirono \"tutti i cigni sono bianchi\")." },
        { id: "dimostrazione", label: "Dimostrazione", x: 50, y: 88, color: "#64748b", html: "Catena di deduzioni da assiomi a teoremi.", why: "Gli Elementi di Euclide (circa 300 a.C.) sono il primo trattato che parte da assiomi e deduce teoremi con le regole della logica." }
      ],
      edges: [["insieme", "operazioni", "ha"], ["insieme", "cartesiano", "ha"], ["proposizione", "connettivi", "si combinano con"], ["connettivi", "implicazione", "include"], ["proposizione", "quantificatori", "generalizzano"], ["operazioni", "connettivi", "corrispondono a"], ["implicazione", "dimostrazione", "usata in"], ["quantificatori", "dimostrazione", "usati in"]]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>∪ = \"o\" (inclusivo), ∩ = \"e\", \\ = \"ma non\". |A ∪ B| = |A| + |B| − |A ∩ B|. Un insieme di n elementi ha 2<sup>n</sup> sottoinsiemi.</li>
<li><b>p ⇒ q</b> è falsa <b>solo</b> se p vera e q falsa. È equivalente alla contrapposta ¬q ⇒ ¬p, <b>non</b> all'inversa q ⇒ p.</li>
<li><b>De Morgan</b>: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q.</li>
<li>Negazioni: ¬(∀x P) ≡ ∃x ¬P; ¬(∃x P) ≡ ∀x ¬P.</li>
<li>Un controesempio smentisce un'affermazione universale; mille esempi non la dimostrano.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: logica",
      questions: [
        { type: "mc", q: "Qual è la negazione di \"tutti gli studenti hanno superato il test\"?", options: ["Nessuno studente ha superato il test", "Almeno uno studente non ha superato il test", "Tutti gli studenti non hanno superato il test"], answer: 1, explain: "La negazione di ∀ è ∃ con predicato negato: basta uno studente che non ha superato il test." },
        { type: "tf", q: "Se p ⇒ q è vera, allora anche q ⇒ p è vera.", answer: false, explain: "L'inversa non è equivalente: \"se piove, la strada è bagnata\" non implica \"se la strada è bagnata, piove\"." },
        { type: "mc", q: "La proposizione p ∧ q è vera quando…", options: ["almeno una tra p e q è vera", "p e q sono entrambe vere", "p e q sono entrambe false"], answer: 1, explain: "La congiunzione (\"e\") richiede che entrambe siano vere." },
        { type: "mc", q: "La negazione di \"x > 3 e x < 8\" è…", options: ["x ≤ 3 e x ≥ 8", "x ≤ 3 oppure x ≥ 8", "x < 3 oppure x > 8"], answer: 1, explain: "De Morgan: la negazione di un \"e\" è un \"o\" delle negazioni. Negare x > 3 dà x ≤ 3, negare x < 8 dà x ≥ 8." }
      ]
    }
  ],
  glossary: [
    { t: "Insieme", d: "Collezione ben definita di oggetti, detti elementi." },
    { t: "Sottoinsieme", d: "B ⊆ A se ogni elemento di B appartiene ad A." },
    { t: "Insieme vuoto", d: "L'insieme ∅ privo di elementi; è sottoinsieme di ogni insieme." },
    { t: "Unione", d: "A ∪ B: gli elementi che stanno in A o in B (o in entrambi)." },
    { t: "Intersezione", d: "A ∩ B: gli elementi comuni ad A e B." },
    { t: "Prodotto cartesiano", d: "A × B: l'insieme delle coppie ordinate (a, b) con a in A e b in B." },
    { t: "Proposizione", d: "Affermazione di cui si può dire che è vera o falsa." },
    { t: "Connettivo", d: "Operazione logica (non, e, o, se… allora, se e solo se) che compone proposizioni." },
    { t: "Tautologia", d: "Proposizione composta sempre vera." },
    { t: "Contrapposta", d: "La proposizione ¬q ⇒ ¬p, equivalente a p ⇒ q." },
    { t: "Quantificatore", d: "Simbolo ∀ (per ogni) o ∃ (esiste) che specifica la portata di un predicato." },
    { t: "Controesempio", d: "Un caso che smentisce un'affermazione universale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale delle seguenti è un insieme ben definito?", options: ["I numeri primi minori di 20", "Le canzoni più belle", "Gli studenti simpatici"], answer: 0, explain: "Solo il primo ha un criterio oggettivo di appartenenza." },
      { type: "num", q: "A = {1, 2, 3, 4, 5, 6} e B = {4, 5, 6, 7, 8}. Quanti elementi ha A ∩ B?", answer: 3, explain: "A ∩ B = {4, 5, 6}: 3 elementi." },
      { type: "num", q: "In una scuola, 40 studenti studiano francese, 35 spagnolo e 15 entrambe. Quanti studenti studiano almeno una delle due lingue?", answer: 60, explain: "|F ∪ S| = 40 + 35 − 15 = 60." },
      { type: "num", q: "Quanti sottoinsiemi ha l'insieme {a, b, c, d, e}?", answer: 32, explain: "2⁵ = 32." },
      { type: "num", q: "A ha 5 elementi e B ne ha 4. Quanti elementi ha il prodotto cartesiano A × B?", answer: 20, explain: "|A × B| = 5 × 4 = 20." },
      { type: "mc", q: "L'implicazione p ⇒ q è falsa quando…", options: ["p è falsa e q è vera", "p è vera e q è falsa", "p e q sono entrambe false"], answer: 1, explain: "È l'unico caso in cui la promessa viene tradita." },
      { type: "tf", q: "La contrapposta di \"se piove, prendo l'ombrello\" è \"se non prendo l'ombrello, non piove\".", answer: true, explain: "Contrapposta: ¬q ⇒ ¬p. È equivalente all'implicazione di partenza." },
      { type: "mc", q: "Qual è la negazione di \"esiste un numero primo pari maggiore di 2\"?", options: ["Ogni numero primo pari è minore o uguale a 2", "Esiste un numero primo dispari", "Ogni numero primo è pari"], answer: 0, explain: "¬(∃x P(x)) ≡ ∀x ¬P(x): tutti i numeri primi pari sono ≤ 2 (in realtà l'unico è 2)." },
      { type: "tf", q: "Verificare che un'affermazione vale per i primi 100 numeri naturali ne dimostra la validità per tutti i numeri naturali.", answer: false, explain: "Una verifica su casi particolari non è una dimostrazione. Un controesempio, invece, basta per smentirla." },
      { type: "order", q: "Metti in ordine i passi per negare \"tutti i numeri x soddisfano P(x)\".", items: ["Scrivere l'affermazione con ∀x P(x)", "Cambiare il quantificatore ∀ in ∃", "Negare il predicato: ¬P(x)", "Leggere: esiste almeno un x per cui P non vale"], explain: "¬(∀x P(x)) ≡ ∃x ¬P(x)." },
      { type: "text", q: "Come si chiama il matematico che fondò la teoria degli insiemi nell'Ottocento (iniziale C)?", answer: ["cantor", "georg cantor"], explain: "Georg Cantor (1845-1918) fondò la teoria degli insiemi." }
    ]
  }
});

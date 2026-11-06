TOPIC('it', {
  id: "p4-mat-frazioni",
  title: "Le frazioni",
  intro: "Quando dividi una pizza con gli amici stai già usando le <b>frazioni</b>! Impariamo a leggerle, scriverle, confrontarle e a calcolare la frazione di un numero.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Che cos'è una frazione",
      html: `<p>Una <b>frazione</b> indica una o più <b>parti uguali</b> di un intero.</p>
<p>Per <b>frazionare</b> un intero bisogna dividerlo in parti <b>tutte uguali</b>. Ogni parte si chiama <b>unità frazionaria</b>: per esempio ¼ (un quarto) o ⅓ (un terzo).</p>
<p>Una frazione si scrive con due numeri e una linea:</p>
<ul>
<li>il <b>denominatore</b> (sotto) dice in quante parti uguali è stato diviso l'intero;</li>
<li>il <b>numeratore</b> (sopra) dice quante parti prendiamo;</li>
<li>la <b>linea di frazione</b> sta in mezzo.</li>
</ul>
<p>Esempio: <b>3/4</b> si legge "tre quarti": l'intero è diviso in 4 parti uguali e ne prendiamo 3.</p>`
    },
    {
      type: "svg",
      title: "Le parti di una frazione",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="150" cy="150" r="100" fill="#fde68a" stroke="#92400e" stroke-width="4"/>
<path d="M150 150 L150 50 A100 100 0 0 1 250 150 Z" fill="#f97316"/>
<path d="M150 150 L250 150 A100 100 0 0 1 150 250 Z" fill="#f97316"/>
<path d="M150 150 L150 250 A100 100 0 0 1 50 150 Z" fill="#f97316"/>
<path d="M150 50 L150 250 M50 150 L250 150" stroke="#92400e" stroke-width="4"/>
<text x="380" y="110" font-size="64" font-weight="bold" fill="#c2410c" text-anchor="middle">3</text>
<line x1="340" y1="130" x2="420" y2="130" stroke="#1f2937" stroke-width="6"/>
<text x="380" y="190" font-size="64" font-weight="bold" fill="#1d4ed8" text-anchor="middle">4</text>
<text x="440" y="100" font-size="18" fill="#c2410c">numeratore: parti prese</text>
<text x="440" y="136" font-size="18" fill="#1f2937">linea di frazione</text>
<text x="440" y="180" font-size="18" fill="#1d4ed8">denominatore:</text>
<text x="440" y="202" font-size="18" fill="#1d4ed8">parti uguali totali</text>
<text x="150" y="285" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">3/4 della pizza</text>
</svg>`,
      caption: "La pizza è divisa in 4 parti uguali: le 3 colorate sono i 3/4."
    },
    {
      type: "widget",
      title: "Costruisci le frazioni",
      widget: "fractionPie",
      options: { n: 3, d: 4 },
      caption: "Muovi i cursori: cambia il numeratore e il denominatore e osserva la figura."
    },
    {
      type: "quiz",
      title: "Mini-quiz: leggere le frazioni",
      questions: [
        { type: "mc", q: "In 2/5 il denominatore è…", options: ["2", "5", "7"], answer: 1, explain: "Il denominatore è il numero sotto la linea: 5." },
        { type: "mc", q: "Come si legge 5/8?", options: ["Cinque ottavi", "Otto quinti", "Cinque e otto"], answer: 0, explain: "Si legge prima il numeratore (cinque) e poi il denominatore come ordinale (ottavi)." },
        { type: "tf", q: "Per fare una frazione l'intero va diviso in parti uguali.", answer: true, explain: "Le parti devono essere tutte uguali, altrimenti non è una frazione." }
      ]
    },
    {
      type: "text",
      title: "Frazioni proprie, improprie, apparenti",
      html: `<ul>
<li><b>Propria</b>: numeratore <b>minore</b> del denominatore → è <b>meno di un intero</b>. Es. 3/4, 2/5.</li>
<li><b>Impropria</b>: numeratore <b>maggiore</b> del denominatore → è <b>più di un intero</b>. Es. 5/4 (un intero e un quarto).</li>
<li><b>Apparente</b>: il numeratore è <b>multiplo</b> del denominatore → è uguale a <b>uno o più interi</b>. Es. 4/4 = 1, 6/3 = 2.</li>
</ul>`
    },
    {
      type: "text",
      title: "Frazioni equivalenti e confronto",
      html: `<p>Due frazioni sono <b>equivalenti</b> quando indicano la <b>stessa quantità</b>, anche se sono scritte con numeri diversi.</p>
<p>Esempio: <b>1/2 = 2/4 = 4/8</b>. Mezza pizza è uguale a due quarti di pizza!</p>
<p>Per trovare una frazione equivalente si <b>moltiplicano</b> (o si <b>dividono</b>) numeratore e denominatore per lo <b>stesso numero</b>: 1/2 → (×3) → 3/6.</p>
<p><b>Confrontare</b>:</p>
<ul>
<li>stesso denominatore: è maggiore quella con il numeratore più grande (3/5 &gt; 2/5);</li>
<li>stesso numeratore: è maggiore quella con il denominatore più piccolo (1/3 &gt; 1/6), perché le parti sono più grandi!</li>
</ul>`
    },
    {
      type: "svg",
      title: "1/2 = 2/4 = 4/8",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<g stroke="#1e3a8a" stroke-width="3">
<rect x="120" y="30" width="200" height="50" fill="#60a5fa"/>
<rect x="320" y="30" width="200" height="50" fill="#ffffff"/>
<rect x="120" y="105" width="100" height="50" fill="#34d399"/>
<rect x="220" y="105" width="100" height="50" fill="#34d399"/>
<rect x="320" y="105" width="100" height="50" fill="#ffffff"/>
<rect x="420" y="105" width="100" height="50" fill="#ffffff"/>
<rect x="120" y="180" width="50" height="50" fill="#f472b6"/>
<rect x="170" y="180" width="50" height="50" fill="#f472b6"/>
<rect x="220" y="180" width="50" height="50" fill="#f472b6"/>
<rect x="270" y="180" width="50" height="50" fill="#f472b6"/>
<rect x="320" y="180" width="50" height="50" fill="#ffffff"/>
<rect x="370" y="180" width="50" height="50" fill="#ffffff"/>
<rect x="420" y="180" width="50" height="50" fill="#ffffff"/>
<rect x="470" y="180" width="50" height="50" fill="#ffffff"/>
</g>
<text x="60" y="64" font-size="26" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1/2</text>
<text x="60" y="139" font-size="26" font-weight="bold" fill="#047857" text-anchor="middle">2/4</text>
<text x="60" y="214" font-size="26" font-weight="bold" fill="#be185d" text-anchor="middle">4/8</text>
<line x1="320" y1="20" x2="320" y2="240" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6"/>
</svg>`,
      caption: "Le parti colorate sono lunghe uguali: le tre frazioni sono equivalenti."
    },
    {
      type: "text",
      title: "La frazione di un numero",
      html: `<p>Per calcolare la frazione di un numero:</p>
<ol>
<li><b>dividi</b> il numero per il <b>denominatore</b> (trovi quanto vale una parte);</li>
<li><b>moltiplica</b> il risultato per il <b>numeratore</b>.</li>
</ol>
<p>Esempio: 3/4 di 20 → 20 : 4 = 5 → 5 × 3 = <b>15</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la torta di compleanno",
      html: `<p>La torta di Giulia è divisa in <b>8 fette uguali</b>. Gli amici ne mangiano <b>5</b>.</p>
<ul>
<li>Hanno mangiato <b>5/8</b> della torta.</li>
<li>Sono rimaste 8 − 5 = 3 fette, cioè <b>3/8</b>.</li>
<li>5/8 + 3/8 = 8/8 = <b>1 torta intera</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: le figurine",
      html: `<p>Marco ha <b>24 figurine</b> e ne regala <b>2/3</b> al suo amico Luca. Quante figurine regala?</p>
<ol>
<li>24 : 3 = 8 (un terzo delle figurine)</li>
<li>8 × 2 = <b>16</b> figurine regalate</li>
</ol>
<p>A Marco ne restano 24 − 16 = <b>8</b>, cioè 1/3.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Gli antichi <b>Egizi</b> usavano quasi solo frazioni con numeratore 1, come 1/2, 1/3, 1/4… Per scrivere 3/4 dicevano "1/2 + 1/4"!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Anche la musica usa le frazioni: le note si chiamano <b>semibreve, minima (1/2), semiminima (1/4), croma (1/8)</b>… perché durano una frazione del tempo della nota più lunga!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Denominatore = in quante parti uguali divido; numeratore = quante parti prendo.</li>
<li>Propria &lt; 1, impropria &gt; 1, apparente = interi.</li>
<li>Frazione di un numero: <b>diviso il denominatore, per il numeratore</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le frazioni",
      intro: "Non tutti capiscono le frazioni allo stesso modo. Qui trovi la stessa idea spiegata con la pizza, il cioccolato, la retta dei numeri, i soldi, i cubetti 3D e… come facevano gli antichi Egizi. Scegli quella che fa per te!",
      tabs: [
        {
          label: "🍕 La pizza",
          html: `<p>Una pizza intera è l'<b>intero</b>. Se la tagli in <b>8 fette uguali</b>, ogni fetta è <b>1/8</b> della pizza.</p>
<p>Se ne mangi 3 fette hai mangiato <b>3/8</b>: il <b>denominatore</b> (8) dice in quante fette hai tagliato, il <b>numeratore</b> (3) dice quante fette prendi.</p>
<p>Attenzione: le fette devono essere <b>tutte uguali</b>, altrimenti non è una frazione giusta… e qualcuno si arrabbia!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<circle cx="170" cy="140" r="115" fill="#fde68a" stroke="#b45309" stroke-width="8"/>
<g stroke="#b45309" stroke-width="4">
<line x1="170" y1="140" x2="170" y2="25"/><line x1="170" y1="140" x2="251" y2="59"/><line x1="170" y1="140" x2="285" y2="140"/><line x1="170" y1="140" x2="251" y2="221"/>
<line x1="170" y1="140" x2="170" y2="255"/><line x1="170" y1="140" x2="89" y2="221"/><line x1="170" y1="140" x2="55" y2="140"/><line x1="170" y1="140" x2="89" y2="59"/>
</g>
<path d="M170,140 L170,25 A115,115 0 0,1 251,59 Z" fill="#ef4444" opacity="0.75"/>
<path d="M170,140 L251,59 A115,115 0 0,1 285,140 Z" fill="#ef4444" opacity="0.75"/>
<path d="M170,140 L285,140 A115,115 0 0,1 251,221 Z" fill="#ef4444" opacity="0.75"/>
<text x="330" y="110" font-size="30" fill="#b91c1c" font-weight="bold">3 fette mangiate</text>
<line x1="330" y1="135" x2="560" y2="135" stroke="#1f2937" stroke-width="4"/>
<text x="330" y="180" font-size="30" fill="#1f2937" font-weight="bold">8 fette in tutto</text>
<text x="330" y="240" font-size="34" fill="#1d4ed8" font-weight="bold">= 3/8</text>
</svg>`
        },
        {
          label: "🍫 La barretta di cioccolato",
          html: `<p>Una tavoletta di cioccolato è già divisa in quadretti uguali: è perfetta per le frazioni!</p>
<p>Questa tavoletta ha <b>12 quadretti</b>. Se ne regali <b>4</b>, hai regalato <b>4/12</b> della tavoletta. Ma guarda bene: 4 quadretti sono anche <b>una riga su tre</b>, cioè <b>1/3</b>. Quindi <b>4/12 = 1/3</b>: sono <b>frazioni equivalenti</b>, cioè la stessa quantità di cioccolato scritta in modi diversi.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect x="40" y="30" width="320" height="180" rx="10" fill="#78350f"/>
<g fill="#92400e" stroke="#451a03" stroke-width="3">
<rect x="50" y="40" width="70" height="50"/><rect x="128" y="40" width="70" height="50"/><rect x="206" y="40" width="70" height="50"/><rect x="284" y="40" width="70" height="50"/>
<rect x="50" y="98" width="70" height="50"/><rect x="128" y="98" width="70" height="50"/><rect x="206" y="98" width="70" height="50"/><rect x="284" y="98" width="70" height="50"/>
</g>
<g fill="#fbbf24" stroke="#451a03" stroke-width="3">
<rect x="50" y="156" width="70" height="50"/><rect x="128" y="156" width="70" height="50"/><rect x="206" y="156" width="70" height="50"/><rect x="284" y="156" width="70" height="50"/>
</g>
<text x="390" y="100" font-size="28" fill="#1f2937">4/12 regalati</text>
<text x="390" y="150" font-size="28" fill="#1f2937">= 1 riga su 3</text>
<text x="390" y="200" font-size="32" fill="#b45309" font-weight="bold">= 1/3</text>
</svg>`
        },
        {
          label: "📏 La retta dei numeri",
          html: `<p>Le frazioni sono <b>numeri</b> e hanno il loro posto sulla retta, proprio come 0, 1, 2…</p>
<p>Dividi il tratto tra 0 e 1 in <b>4 parti uguali</b>: ogni salto vale <b>1/4</b>. Con 3 salti arrivi a <b>3/4</b>, con 4 salti arrivi a <b>4/4 = 1</b>, e se continui con 5 salti superi l'1: <b>5/4</b> è una frazione <b>impropria</b>, più grande dell'intero.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="110" x2="580" y2="110" stroke="#1f2937" stroke-width="4"/>
<g stroke="#1f2937" stroke-width="4">
<line x1="50" y1="95" x2="50" y2="125"/><line x1="160" y1="100" x2="160" y2="120"/><line x1="270" y1="100" x2="270" y2="120"/><line x1="380" y1="100" x2="380" y2="120"/>
<line x1="490" y1="95" x2="490" y2="125"/>
</g>
<g fill="none" stroke="#2563eb" stroke-width="3">
<path d="M50,95 Q105,40 160,95"/><path d="M160,95 Q215,40 270,95"/><path d="M270,95 Q325,40 380,95"/>
</g>
<text x="50" y="155" font-size="22" text-anchor="middle">0</text>
<text x="160" y="155" font-size="22" text-anchor="middle">1/4</text>
<text x="270" y="155" font-size="22" text-anchor="middle">2/4</text>
<text x="380" y="155" font-size="22" text-anchor="middle" fill="#2563eb" font-weight="bold">3/4</text>
<text x="490" y="155" font-size="22" text-anchor="middle">1 = 4/4</text>
<text x="215" y="45" font-size="18" fill="#2563eb">3 salti da 1/4</text>
</svg>`
        },
        {
          label: "💶 I soldi",
          html: `<p>Con gli euro le frazioni le usi già senza accorgertene! Un euro vale <b>100 centesimi</b>.</p>
<ul>
<li><b>1/2</b> di euro = 100 : 2 = <b>50 centesimi</b> 🪙</li>
<li><b>1/4</b> di euro = 100 : 4 = <b>25 centesimi</b></li>
<li><b>3/4</b> di euro = 25 × 3 = <b>75 centesimi</b></li>
<li><b>1/10</b> di euro = <b>10 centesimi</b></li>
<li><b>1/100</b> di euro = <b>1 centesimo</b>: infatti \"centesimo\" vuol dire proprio \"una delle cento parti\"!</li>
</ul>
<p>Prova: se hai 20 € e spendi 1/4 dei tuoi soldi, quanto spendi? 20 : 4 = <b>5 €</b>.</p>`
        },
        {
          label: "🧊 Con i cubetti 3D",
          html: `<p>Ecco <b>12 cubetti</b> messi in 3 file da 4. Gira il modello e prova a vedere le frazioni:</p>
<ul>
<li>una fila da 4 cubetti è <b>1/3</b> di tutti i cubetti (4 su 12);</li>
<li>una colonna da 3 cubetti è <b>1/4</b> (3 su 12);</li>
<li>6 cubetti sono <b>la metà</b>: 6/12 = 1/2.</li>
</ul>
<p>Cambia i numeri con i cursori e cerca altre frazioni!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "𓂀 Come gli antichi Egizi",
          html: `<p>Gli antichi Egizi usavano quasi solo frazioni con il numeratore 1 (come 1/2, 1/3, 1/4…), che oggi chiamiamo <b>unità frazionarie</b>. Le altre le scrivevano come somma di frazioni diverse:</p>
<ul>
<li>3/4 lo scrivevano <b>1/2 + 1/4</b></li>
<li>2/5 lo scrivevano <b>1/3 + 1/15</b></li>
</ul>
<p>Sembra strano, ma è comodissimo per dividere davvero le cose! Esempio: dividere <b>3 pagnotte fra 4 persone</b>. Taglio 2 pagnotte a metà (4 mezze) e 1 pagnotta in quarti (4 quarti): ognuno riceve <b>1/2 + 1/4</b> di pagnotta. Tutti hanno pezzi uguali!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle frazioni: tocca un nodo e scopri il perché",
      nodes: [
        { id: "intero", label: "Intero", x: 50, y: 6, color: "#2563eb", html: "La cosa tutta intera che vogliamo dividere: una pizza, un gruppo di oggetti, un numero, un euro…", why: "Una frazione ha senso solo se sappiamo qual è l'intero: 1/2 di una pizza piccola non è uguale a 1/2 di una pizza gigante!" },
        { id: "frazione", label: "Frazione", x: 50, y: 30, color: "#16a34a", html: "Un numero che indica una o più parti uguali di un intero, scritto con due numeri e una linea.", why: "La parola viene dal latino <i>frangere</i>, che vuol dire \"rompere\": una frazione è un intero \"rotto\" in parti uguali. Le frazioni sono nate per un bisogno pratico: dividere raccolti, terreni, pane e birra in parti giuste." },
        { id: "denominatore", label: "Denominatore", x: 18, y: 50, color: "#f59e0b", html: "Il numero sotto la linea: in quante parti uguali è diviso l'intero.", why: "Si chiama così perché \"dà il nome\" alle parti: denominatore 4 → quarti, 10 → decimi, 100 → centesimi. Più grande è il denominatore, più piccole sono le parti." },
        { id: "numeratore", label: "Numeratore", x: 82, y: 50, color: "#ef4444", html: "Il numero sopra la linea: quante parti prendiamo.", why: "Viene da \"numerare\", cioè contare: conta le parti che prendiamo." },
        { id: "unita", label: "Unità frazionaria", x: 18, y: 76, color: "#a855f7", html: "Frazione con numeratore 1, come 1/2, 1/5, 1/10.", why: "Sono le frazioni più antiche: gli Egizi, quasi 4000 anni fa, usavano soprattutto queste. Il papiro di Rhind (circa 1650 a.C.), un libro di esercizi di uno scriba chiamato Ahmes, contiene tabelle per trasformare le altre frazioni in somme di unità frazionarie." },
        { id: "tipi", label: "Proprie, improprie, apparenti", x: 50, y: 62, color: "#0ea5e9", html: "Propria: minore dell'intero (3/4). Impropria: maggiore (5/4). Apparente: è un numero intero (8/4 = 2).", why: "Basta confrontare numeratore e denominatore: se prendi meno parti di quelle in cui hai diviso l'intero, non arrivi all'intero; se ne prendi di più, ti serve un secondo intero." },
        { id: "equivalenti", label: "Frazioni equivalenti", x: 82, y: 76, color: "#14b8a6", html: "Frazioni diverse che indicano la stessa quantità: 1/2 = 2/4 = 4/8.", why: "Se tagli ogni parte in due, raddoppiano le parti in tutto e anche quelle che prendi: la quantità non cambia. Per questo si può moltiplicare (o dividere) numeratore e denominatore per lo stesso numero." },
        { id: "storia", label: "La linea di frazione", x: 50, y: 92, color: "#64748b", html: "Il modo di scrivere le frazioni con un numero sopra e uno sotto separati da una linea.", why: "I Babilonesi scrivevano le parti in base 60 (come facciamo ancora con minuti e secondi). La linea di frazione fu usata dai matematici arabi nel Medioevo e arrivò in Europa grazie a <b>Leonardo Fibonacci</b> da Pisa, che la usò nel suo <i>Liber Abaci</i> del 1202." }
      ],
      edges: [
        ["intero", "frazione", "si divide in parti uguali →"],
        ["frazione", "denominatore", "sotto la linea"],
        ["frazione", "numeratore", "sopra la linea"],
        ["frazione", "tipi", "può essere"],
        ["denominatore", "unita", "con numeratore 1"],
        ["numeratore", "equivalenti", "× stesso numero"],
        ["denominatore", "equivalenti", "× stesso numero"],
        ["frazione", "storia", "si scrive con"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: tipi di frazione e calcoli",
      questions: [
        { type: "mc", q: "7/4 è una frazione…", options: ["propria", "impropria", "apparente"], answer: 1, explain: "Il numeratore (7) è maggiore del denominatore (4) ma non è un suo multiplo: impropria." },
        { type: "num", q: "Quanto è 1/5 di 35?", answer: 7, explain: "35 : 5 = 7." },
        { type: "mc", q: "Quale frazione è equivalente a 2/3?", options: ["4/6", "3/2", "2/6"], answer: 0, explain: "Moltiplicando per 2 numeratore e denominatore: 4/6." }
      ]
    }
  ],
  glossary: [
    { t: "Frazione", d: "Una o più parti uguali di un intero." },
    { t: "Numeratore", d: "Il numero sopra la linea: quante parti si prendono." },
    { t: "Denominatore", d: "Il numero sotto la linea: in quante parti uguali si divide l'intero." },
    { t: "Unità frazionaria", d: "Una sola parte dell'intero, con numeratore 1 (es. 1/4)." },
    { t: "Frazione propria", d: "Minore di un intero: numeratore minore del denominatore." },
    { t: "Frazione impropria", d: "Maggiore di un intero: numeratore maggiore del denominatore." },
    { t: "Frazione apparente", d: "Uguale a uno o più interi: numeratore multiplo del denominatore." },
    { t: "Frazioni equivalenti", d: "Frazioni diverse che indicano la stessa quantità." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Una pizza è divisa in 6 parti uguali e ne mangi 1. Che frazione hai mangiato?", options: ["6/1", "1/6", "5/6"], answer: 1, explain: "1 parte su 6: 1/6." },
      { type: "mc", q: "Quale frazione è apparente?", options: ["3/4", "9/3", "5/3"], answer: 1, explain: "9/3 = 3 interi." },
      { type: "tf", q: "1/3 è maggiore di 1/6.", answer: true, explain: "Stesso numeratore: le parti di un terzo sono più grandi di quelle di un sesto." },
      { type: "num", q: "Quanto è 3/4 di 40?", answer: 30, explain: "40 : 4 = 10; 10 × 3 = 30." },
      { type: "mc", q: "Quale frazione è maggiore?", options: ["2/7", "5/7", "3/7"], answer: 1, explain: "Stesso denominatore: vince il numeratore più grande." },
      { type: "text", q: "Come si chiama il numero che sta sotto la linea di frazione?", answer: ["denominatore", "il denominatore"], explain: "Il denominatore." },
      { type: "tf", q: "4/8 e 1/2 sono frazioni equivalenti.", answer: true, explain: "Dividendo 4/8 per 4 si ottiene 1/2." },
      { type: "num", q: "Quanti quinti formano un intero?", answer: 5, explain: "5/5 = 1." },
      { type: "order", q: "Ordina dalla più piccola alla più grande.", items: ["1/8", "1/4", "1/2", "3/2"], explain: "Più il denominatore è grande, più le parti sono piccole; 3/2 è più di un intero." },
      { type: "num", q: "Sara ha 18 caramelle e ne mangia 2/9. Quante ne mangia?", answer: 4, explain: "18 : 9 = 2; 2 × 2 = 4." }
    ],
    gen: [["fracOf", 2], ["fracEquiv", 2]]
  }
});

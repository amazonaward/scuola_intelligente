TOPIC('it', {
  id: "l5-mat-integrali",
  title: "Gli integrali",
  intro: "Se la derivata risponde a «quanto velocemente cambia?», l'<b>integrale</b> risponde alle domande opposte: «dato come cambia, quanto vale in totale?» e «quanto è grande l'area sotto una curva?». Conoscendo la velocità di un'auto in ogni istante, l'integrale dà lo spazio percorso. La scoperta più bella dell'analisi è che le due operazioni, derivare e integrare, sono <b>una l'inversa dell'altra</b>: è il <b>teorema fondamentale del calcolo</b>. In questa lezione impari le <b>primitive</b>, i principali metodi di integrazione, l'<b>integrale definito</b> secondo Riemann e le applicazioni al calcolo di <b>aree e volumi</b>.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "Primitive e integrale indefinito",
      html: `<p>Una funzione F è una <b>primitiva</b> di f in un intervallo se <b>F′(x) = f(x)</b>. Per esempio x³/3 è una primitiva di x², ma anche x³/3 + 5 o x³/3 − 100. Per il teorema di Lagrange, due primitive della stessa funzione in un intervallo differiscono per una <b>costante</b>. L'insieme di tutte le primitive si chiama <b>integrale indefinito</b>:</p>
<p style="text-align:center"><b>∫ f(x) dx = F(x) + c</b></p>
<p>Il simbolo ∫ (una «S» allungata, da «summa») è di Leibniz; dx indica la variabile di integrazione. Integrare è dunque <b>«derivare al contrario»</b>.</p>
<table>
<tr><th>f(x)</th><th>∫ f(x) dx</th></tr>
<tr><td>xⁿ (n ≠ −1)</td><td>xⁿ⁺¹/(n + 1) + c</td></tr>
<tr><td>1/x</td><td>ln|x| + c</td></tr>
<tr><td>eˣ</td><td>eˣ + c</td></tr>
<tr><td>aˣ</td><td>aˣ/ln a + c</td></tr>
<tr><td>sen x</td><td>− cos x + c</td></tr>
<tr><td>cos x</td><td>sen x + c</td></tr>
<tr><td>1/cos²x</td><td>tg x + c</td></tr>
<tr><td>1/(1 + x²)</td><td>arctg x + c</td></tr>
<tr><td>1/√(1 − x²)</td><td>arcsen x + c</td></tr>
</table>
<p>Per la <b>linearità</b>: ∫ (a f + b g) dx = a ∫ f dx + b ∫ g dx. Esempio: ∫ (3x² − 4 sen x) dx = x³ + 4 cos x + c. Controllo: derivando si ritrova 3x² − 4 sen x.</p>`
    },
    {
      type: "text",
      title: "I metodi di integrazione",
      html: `<p><b>1) Sostituzione</b> (inverso della regola della catena): se compare una funzione g(x) e la sua derivata, si pone t = g(x), dt = g′(x) dx.</p>
<p>Esempio: ∫ 2x cos(x²) dx. Posto t = x², dt = 2x dx ⇒ ∫ cos t dt = sen t + c = <b>sen(x²) + c</b>.</p>
<p>Caso utile: ∫ f′(x)/f(x) dx = ln|f(x)| + c. Esempio: ∫ x/(x² + 1) dx = (1/2) ln(x² + 1) + c.</p>
<p><b>2) Per parti</b> (inverso della regola del prodotto): <b>∫ f′ g dx = f g − ∫ f g′ dx</b>.</p>
<p>Esempio: ∫ x eˣ dx. Scelgo g = x, f′ = eˣ (f = eˣ): = x eˣ − ∫ eˣ dx = <b>eˣ(x − 1) + c</b>.</p>
<p>Esempio: ∫ ln x dx = ∫ 1·ln x dx = x ln x − ∫ x · (1/x) dx = <b>x ln x − x + c</b>.</p>
<p><b>3) Funzioni razionali fratte</b>: si divide, e si scompone in fratti semplici: 1/((x − 1)(x + 1)) = (1/2)[1/(x − 1) − 1/(x + 1)] ⇒ integrale (1/2) ln|(x − 1)/(x + 1)| + c.</p>
<p>Attenzione: non tutte le funzioni hanno una primitiva «elementare» (esprimibile con le funzioni note): ad esempio e^(−x²) e sen x/x. Eppure le loro primitive esistono (se f è continua, ha sempre primitive) e hanno nomi propri.</p>`
    },
    {
      type: "widget",
      title: "Abbina la funzione alla sua primitiva",
      widget: "match",
      options: { pairs: [
        ["3x²", "x³ + c"],
        ["cos x", "sen x + c"],
        ["1/x", "ln|x| + c"],
        ["eˣ", "eˣ + c"],
        ["1/(1 + x²)", "arctg x + c"],
        ["sen x", "− cos x + c"]
      ] },
      caption: "Derivando il risultato si ritrova la funzione: è il modo più sicuro di controllare un integrale."
    },
    {
      type: "quiz",
      title: "Mini-quiz: integrali indefiniti",
      questions: [
        { type: "mc", q: "∫ (4x³ + 2) dx =", options: ["x⁴ + 2x + c", "12x² + c", "x⁴ + 2 + c"], answer: 0, explain: "Si integra termine a termine: 4x⁴/4 = x⁴ e ∫ 2 dx = 2x." },
        { type: "mc", q: "∫ 2x/(x² + 1) dx =", options: ["ln(x² + 1) + c", "arctg x + c", "x²/(x² + 1) + c"], answer: 0, explain: "Numeratore = derivata del denominatore: ln|denominatore|." },
        { type: "mc", q: "∫ x cos x dx (per parti) =", options: ["x sen x + cos x + c", "x sen x − cos x + c", "sen x − x cos x + c"], answer: 0, explain: "= x sen x − ∫ sen x dx = x sen x + cos x + c." }
      ]
    },
    {
      type: "text",
      title: "L'integrale definito: la somma di Riemann",
      html: `<p>Come si calcola l'area sotto il grafico di una funzione positiva f in [a, b]? Si divide [a, b] in n parti uguali di ampiezza Δx = (b − a)/n e si sostituisce la regione con n rettangolini di base Δx e altezza f(xᵢ). La somma delle aree è:</p>
<p style="text-align:center">Sₙ = f(x₁)Δx + f(x₂)Δx + … + f(xₙ)Δx.</p>
<p>All'aumentare di n i rettangoli diventano sottilissimi e Sₙ si avvicina all'area. L'<b>integrale definito</b> è il limite (Riemann, 1854):</p>
<p style="text-align:center"><b>∫<sub>a</sub><sup>b</sup> f(x) dx = lim<sub>n→∞</sub> Σ f(xᵢ) Δx</b></p>
<p>Se f è continua il limite esiste ed è indipendente dalla scelta dei punti xᵢ. Dove f &lt; 0 i rettangoli hanno «altezza negativa», quindi l'integrale è un'<b>area con segno</b>: positiva sopra l'asse x, negativa sotto.</p>
<p><b>Proprietà</b>: ∫<sub>a</sub><sup>a</sup> f = 0; ∫<sub>b</sub><sup>a</sup> f = −∫<sub>a</sub><sup>b</sup> f; additività ∫<sub>a</sub><sup>b</sup> = ∫<sub>a</sub><sup>c</sup> + ∫<sub>c</sub><sup>b</sup>; linearità; monotonia: se f ≤ g allora ∫f ≤ ∫g.</p>`
    },
    {
      type: "svg",
      title: "Rettangoli di Riemann",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="260" x2="570" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="260" x2="40" y2="20" stroke="#475569" stroke-width="2"/>
<g fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5">
<rect x="100" y="205" width="40" height="55"/><rect x="140" y="170" width="40" height="90"/><rect x="180" y="140" width="40" height="120"/>
<rect x="220" y="115" width="40" height="145"/><rect x="260" y="95" width="40" height="165"/><rect x="300" y="85" width="40" height="175"/>
<rect x="340" y="85" width="40" height="175"/><rect x="380" y="95" width="40" height="165"/><rect x="420" y="110" width="40" height="150"/>
<rect x="460" y="135" width="40" height="125"/>
</g>
<path d="M 80 230 C 150 110 220 70 320 70 C 400 70 460 100 520 160" fill="none" stroke="#dc2626" stroke-width="4"/>
<g font-size="16" font-weight="bold" fill="#1f2937">
<text x="95" y="285">a</text><text x="495" y="285">b</text>
<text x="330" y="45" fill="#dc2626">y = f(x)</text>
<text x="190" y="190" fill="#1e3a8a">Δx · f(xᵢ)</text>
</g>
</svg>`,
      caption: "L'area sotto la curva è approssimata dalla somma dei rettangoli; con rettangoli sempre più sottili la somma tende all'integrale definito."
    },
    {
      type: "text",
      title: "Teorema della media e funzione integrale",
      html: `<p><b>Teorema della media integrale.</b> Se f è continua in [a, b], esiste c ∈ [a, b] tale che</p>
<p style="text-align:center"><b>f(c) = (1/(b − a)) ∫<sub>a</sub><sup>b</sup> f(x) dx</b></p>
<p>Il valore medio di f è l'altezza di un rettangolo di base b − a con la stessa area. (Per esempio il valore medio di sen x su [0, π] è 2/π ≈ 0,64.)</p>
<p>Data f continua in [a, b], la <b>funzione integrale</b> è F(x) = ∫<sub>a</sub><sup>x</sup> f(t) dt: assegna a ogni x l'area (con segno) tra a e x.</p>`
    },
    {
      type: "text",
      title: "Il teorema fondamentale del calcolo integrale",
      html: `<p style="text-align:center"><b>Teorema di Torricelli-Barrow.</b> Se f è continua in [a, b], la funzione integrale F(x) = ∫<sub>a</sub><sup>x</sup> f(t) dt è derivabile e <b>F′(x) = f(x)</b>.</p>
<p>In altre parole la funzione integrale è una primitiva di f: <b>derivare e integrare sono operazioni inverse</b>. Intuizione: se aggiungi alla striscia d'area una fettina sottile di base h, la sua area è circa f(x)·h, quindi (F(x + h) − F(x))/h ≈ f(x).</p>
<p>Ne discende la <b>formula fondamentale</b> (di Newton-Leibniz) per calcolare gli integrali definiti:</p>
<p style="text-align:center"><b>∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a) =: [F(x)]<sub>a</sub><sup>b</sup></b></p>
<p>dove F è una qualsiasi primitiva di f. Non serve più il limite delle somme: basta trovare una primitiva!</p>
<p><b>Esempi.</b> ∫<sub>0</sub><sup>1</sup> x² dx = [x³/3]<sub>0</sub><sup>1</sup> = 1/3. ∫<sub>0</sub><sup>π</sup> sen x dx = [−cos x]<sub>0</sub><sup>π</sup> = 1 + 1 = <b>2</b>. ∫<sub>1</sub><sup>e</sup> (1/x) dx = ln e − ln 1 = 1.</p>`
    },
    {
      type: "example",
      title: "Dalla velocità allo spazio",
      html: `<p>Un treno parte da fermo con velocità v(t) = 0,5·t (m/s) per t da 0 a 60 s. Quanta strada percorre?</p>
<p>Lo spazio è l'integrale della velocità: s = ∫<sub>0</sub><sup>60</sup> 0,5·t dt = [0,25·t²]<sub>0</sub><sup>60</sup> = 0,25 · 3600 = <b>900 m</b>.</p>
<p>Verifica geometrica: il grafico di v è un triangolo con base 60 s e altezza 30 m/s; area = 60 · 30/2 = 900. Lo stesso integrale di Riemann funziona anche quando la velocità non è lineare: per esempio un satellite, o un ciclista in salita.</p>`
    },
    {
      type: "text",
      title: "Aree e volumi",
      html: `<p><b>Area tra due curve.</b> Se f(x) ≥ g(x) in [a, b], l'area compresa è <b>A = ∫<sub>a</sub><sup>b</sup> (f(x) − g(x)) dx</b>. Esempio: tra y = x e y = x² in [0, 1]: A = ∫ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = <b>1/6</b>. Se la funzione cambia segno, si spezza l'integrale per ottenere l'area vera (somma dei valori assoluti).</p>
<p><b>Volumi di rotazione.</b> Facendo ruotare di 360° attorno all'asse x il grafico di f ≥ 0 in [a, b] si ottiene un solido il cui volume è la somma di «dischetti» di raggio f(x) e spessore dx:</p>
<p style="text-align:center"><b>V = π ∫<sub>a</sub><sup>b</sup> [f(x)]² dx</b></p>
<p><b>Cono</b> di raggio r e altezza h: ruotando y = (r/h)x in [0, h] si ottiene V = π ∫ (r²/h²) x² dx = π r² h/3. <b>Sfera</b> di raggio r: ruotando y = √(r² − x²) in [−r, r]: V = π ∫ (r² − x²) dx = π (2r³ − 2r³/3) = <b>4πr³/3</b>: si ritrova la formula nota!</p>
<p><b>Volume per sezioni</b> (principio di Cavalieri): se le sezioni hanno area A(x), V = ∫ A(x) dx.</p>`
    },
    {
      type: "3d",
      title: "Solidi di rotazione",
      scene: "solid",
      options: { shapes: ["cone", "cylinder", "sphere"], color: "#2563eb", labels: true },
      caption: "Cono, cilindro e sfera si ottengono ruotando una retta inclinata, una orizzontale e una semicirconferenza: i loro volumi sono integrali."
    },
    {
      type: "example",
      title: "Un integrale definito con sostituzione",
      html: `<p>Calcola ∫<sub>0</sub><sup>1</sup> 2x·e<sup>x²</sup> dx. Pongo t = x², dt = 2x dx; gli estremi diventano t = 0 e t = 1: ∫<sub>0</sub><sup>1</sup> eᵗ dt = e − 1 ≈ <b>1,718</b>. In alternativa si trova la primitiva e<sup>x²</sup> e si calcola [e<sup>x²</sup>]₀¹ = e − 1. Cambiando variabile <i>negli integrali definiti</i> bisogna ricordarsi di cambiare anche gli estremi.</p>`
    },
    {
      type: "text",
      title: "Integrali impropri (cenni)",
      html: `<p>Che cosa succede se l'intervallo è illimitato o la funzione non è limitata? Si definisce con un limite: ∫<sub>1</sub><sup>+∞</sup> (1/x²) dx = lim<sub>M→∞</sub> [−1/x]₁ᴹ = 1 − 0 = <b>1</b>: l'area sotto 1/x² è <i>finita</i>, anche se la regione è infinitamente lunga. Invece ∫<sub>1</sub><sup>+∞</sup> (1/x) dx = lim ln M = +∞: l'area è infinita.</p>
<p>La differenza tra 1/x e 1/x² è sottile: la prima decresce troppo lentamente per avere area finita. Integrali di questo tipo servono in probabilità (la curva di Gauss) e in fisica (energia potenziale gravitazionale).</p>`
    },
    {
      type: "curiosity",
      title: "Archimede, il precursore",
      html: `<p>Più di 2000 anni fa Archimede calcolò l'area di un segmento di parabola con il <b>metodo di esaustione</b>: lo riempì di triangoli sempre più piccoli e dimostrò che l'area è <b>4/3</b> dell'area del triangolo inscritto. È un integrale ante litteram. Il suo trattato «Il Metodo» fu riscoperto solo nel 1906 in un palinsesto a Costantinopoli.</p>`
    },
    {
      type: "curiosity",
      title: "Chi ha scoperto il teorema fondamentale?",
      html: `<p>L'idea che l'area sia legata alla tangente fu intuita da <b>Isaac Barrow</b> (maestro di Newton) e dall'italiano <b>Evangelista Torricelli</b>, allievo di Galileo, nel Seicento; Newton e Leibniz la trasformarono in un metodo di calcolo. Da qui il nome «teorema di Torricelli-Barrow». Il segno ∫ lo introdusse Leibniz nel 1675.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'integrale",
      intro: "L'area sotto una curva è solo uno dei modi di vedere l'integrale.",
      tabs: [
        {
          label: "🏊 Riempire una piscina",
          html: `<p>Una piscina si riempie con una portata variabile r(t) (litri al minuto). In ogni piccolo istante dt entrano r(t)·dt litri; il volume totale è la <b>somma di tutti i contributi</b>: V = ∫ r(t) dt. Se la portata è costante 50 l/min per 30 min: 50 · 30 = 1500 litri (l'area di un rettangolo). Se varia nel tempo, si somma «a fettine». Lo stesso vale per i kilowattora (potenza integrata nel tempo) o per il lavoro di una forza.</p>`
        },
        {
          label: "📊 Il valore medio",
          html: `<p>Il valore medio di f su [a, b] è (1/(b − a))∫f: è l'altezza del rettangolo che ha la stessa area. È la versione «continua» della media aritmetica: invece di sommare n numeri e dividere per n, si somma «un'infinità» di valori e si divide per la lunghezza dell'intervallo. La temperatura media di una giornata, la tensione efficace della corrente alternata e la velocità media in un viaggio sono valori medi integrali.</p>`
        },
        {
          label: "↔️ Derivare e integrare sono inversi",
          html: `<p>Pensa a una scala mobile: l'altezza raggiunta (integrale) dipende da quanto sei salito a ogni istante (velocità = derivata). Se conosci la <b>velocità</b>, ricavi la <b>posizione</b> integrando (più la posizione iniziale: è la costante c). Se conosci la <b>posizione</b>, ricavi la velocità derivando. Il teorema fondamentale dice che le due operazioni si annullano a vicenda, come addizione e sottrazione: ∫<sub>a</sub><sup>x</sup> f′(t) dt = f(x) − f(a).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'integrale",
      nodes: [
        { id: "arc", label: "Area e metodo di esaustione", x: 50, y: 6, color: "#6366f1", html: "Approssimare un'area con figure sempre più piccole.", why: "Eudosso e Archimede (III sec. a.C.) calcolarono aree e volumi (parabola, sfera) con questo metodo; senza il linguaggio dei limiti ma con la stessa idea." },
        { id: "riem", label: "Integrale di Riemann", x: 22, y: 28, color: "#16a34a", html: "Limite delle somme di rettangoli: ∫ f(x) dx.", why: "Riemann (1854) rese rigoroso il «somma infinita di infinitesimi» di Leibniz." },
        { id: "prim", label: "Primitive", x: 78, y: 28, color: "#f59e0b", html: "F′ = f; integrale indefinito F + c.", why: "Per Lagrange due primitive differiscono per una costante: perciò c'è la «+ c»." },
        { id: "tf", label: "Teorema fondamentale", x: 50, y: 52, color: "#ef4444", html: "F(x) = ∫ f ⇒ F′ = f; ∫ᵃᵇ f = F(b) − F(a).", why: "Collega somme (aree) e rapporti (pendenze): è il ponte che trasformò il calcolo di aree da impresa titanica a esercizio di derivazione al contrario." },
        { id: "met", label: "Metodi", x: 15, y: 70, color: "#0ea5e9", html: "Sostituzione, per parti, fratti semplici.", why: "Sono la «regola della catena» e la «regola del prodotto» lette al contrario." },
        { id: "app", label: "Aree e volumi", x: 50, y: 82, color: "#a855f7", html: "Aree tra curve, volumi di rotazione V = π∫f².", why: "Riprende il principio di Cavalieri: si somma l'area delle sezioni." },
        { id: "fis", label: "Fisica e probabilità", x: 85, y: 70, color: "#14b8a6", html: "Spazio dalla velocità, lavoro, densità di probabilità.", why: "Ogni grandezza che si «accumula» nel tempo o nello spazio è un integrale." }
      ],
      edges: [
        ["arc", "riem", "si formalizza in"],
        ["riem", "tf", "collegato da"],
        ["prim", "tf", "collegato da"],
        ["tf", "met", "permette"],
        ["tf", "app", "permette"],
        ["tf", "fis", "usato in"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Primitiva: F′ = f. Integrale indefinito: ∫f dx = F + c.</li>
<li>Per sostituzione e per parti: ∫f′g = fg − ∫fg′.</li>
<li>Integrale definito = limite delle somme di Riemann = area con segno.</li>
<li><b>Teorema fondamentale</b>: F′ = f, e ∫<sub>a</sub><sup>b</sup> f = F(b) − F(a).</li>
<li>Area tra curve: ∫(f − g). Volume di rotazione attorno all'asse x: π∫f².</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: integrali definiti",
      questions: [
        { type: "num", q: "Calcola ∫ da 0 a 2 di (3x² + 1) dx.", answer: 10, explain: "[x³ + x]₀² = 8 + 2 = 10." },
        { type: "num", q: "Calcola l'area tra y = x² e l'asse x in [0, 3].", answer: 9, explain: "[x³/3]₀³ = 27/3 = 9." },
        { type: "tf", q: "∫ da −1 a 1 di x³ dx = 0.", answer: true, explain: "x³ è dispari: le aree con segno si annullano." }
      ]
    }
  ],
  glossary: [
    { t: "Primitiva", d: "Funzione F tale che F′ = f." },
    { t: "Integrale indefinito", d: "Insieme di tutte le primitive: F(x) + c." },
    { t: "Integrale definito", d: "Limite delle somme di Riemann: area con segno sotto il grafico." },
    { t: "Integrazione per parti", d: "∫ f′g dx = fg − ∫ fg′ dx." },
    { t: "Funzione integrale", d: "F(x) = ∫ₐˣ f(t) dt." },
    { t: "Teorema fondamentale del calcolo", d: "La funzione integrale è una primitiva e ∫ₐᵇ f = F(b) − F(a)." },
    { t: "Valore medio", d: "(1/(b − a)) ∫ₐᵇ f(x) dx." },
    { t: "Integrale improprio", d: "Integrale su intervallo illimitato o funzione non limitata, definito con un limite." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "∫ cos x dx =", options: ["sen x + c", "− sen x + c", "cos x + c"], answer: 0, explain: "(sen x)′ = cos x." },
      { type: "mc", q: "∫ (6x² − 4x + 1) dx =", options: ["2x³ − 2x² + x + c", "12x − 4 + c", "2x³ − 4x² + x + c"], answer: 0, explain: "6x³/3 = 2x³, 4x²/2 = 2x²." },
      { type: "num", q: "Calcola ∫ da 1 a e di 1/x dx.", answer: 1, explain: "[ln x]₁ᵉ = 1 − 0." },
      { type: "num", q: "Calcola ∫ da 0 a π di sen x dx.", answer: 2, explain: "[−cos x]₀^π = 1 + 1 = 2." },
      { type: "num", q: "Area tra y = x e y = x² in [0, 1] (risposta in decimali, 1/6).", answer: 0.1667, tol: 0.001, explain: "∫(x − x²) = 1/2 − 1/3 = 1/6." },
      { type: "mc", q: "∫ x eˣ dx =", options: ["eˣ(x − 1) + c", "eˣ(x + 1) + c", "x²eˣ/2 + c"], answer: 0, explain: "Per parti: x eˣ − eˣ." },
      { type: "tf", q: "Il teorema fondamentale afferma che la funzione integrale di una continua è una sua primitiva.", answer: true, explain: "F(x) = ∫ₐˣ f ⇒ F′ = f." },
      { type: "num", q: "Qual è il valore medio di f(x) = x su [0, 4]?", answer: 2, explain: "(1/4) ∫₀⁴ x dx = (1/4)(8) = 2." },
      { type: "mc", q: "Il volume del solido ottenuto ruotando y = x su [0, 3] attorno all'asse x è…", options: ["9π", "3π", "27π"], answer: 0, explain: "π∫x² dx = π [x³/3]₀³ = 9π (cono di raggio 3 e altezza 3)." },
      { type: "order", q: "Ordina i passi per calcolare un integrale definito con il teorema fondamentale.", items: ["Trovare una primitiva F di f", "Calcolare F(b)", "Calcolare F(a)", "Sottrarre F(b) − F(a)"], explain: "La costante c si cancella nella sottrazione." }
    ]
  }
});

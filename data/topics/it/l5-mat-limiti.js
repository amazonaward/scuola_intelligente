TOPIC('it', {
  id: "l5-mat-limiti",
  title: "I limiti",
  intro: "Come si descrive ciò che una funzione fa <i>vicino</i> a un punto, anche dove nel punto stesso non è definita? Come si dà un senso preciso a «tende a», «cresce senza limite», «si avvicina sempre più a»? La risposta è il <b>limite</b>, il concetto su cui si regge tutta l'analisi matematica: derivate, integrali e serie ne sono figli. In questa lezione impari la definizione rigorosa (con ε e δ), le regole di calcolo, le <b>forme indeterminate</b> e i <b>limiti notevoli</b>.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "L'idea intuitiva: avvicinarsi senza toccare",
      html: `<p>Considera la funzione <b>f(x) = (x² − 1)/(x − 1)</b>. In x = 1 non è definita: viene 0/0. Ma cosa fa <i>vicino</i> a 1? Proviamo qualche valore:</p>
<table>
<tr><th>x</th><td>0,9</td><td>0,99</td><td>0,999</td><td>1,001</td><td>1,01</td><td>1,1</td></tr>
<tr><th>f(x)</th><td>1,9</td><td>1,99</td><td>1,999</td><td>2,001</td><td>2,01</td><td>2,1</td></tr>
</table>
<p>I valori si avvicinano a <b>2</b> sia da sinistra sia da destra. Scriviamo <b>lim<sub>x→1</sub> f(x) = 2</b>. Il limite non dipende da ciò che accade <i>in</i> x = 1 (dove f non esiste), ma solo da ciò che accade <i>intorno</i>. Infatti per x ≠ 1 si ha f(x) = (x − 1)(x + 1)/(x − 1) = x + 1, e x + 1 vale 2 per x → 1.</p>
<p>Questa idea ha un'origine antica: già Zenone di Elea (V sec. a.C.) rifletteva su somme infinite di distanze sempre più piccole, e Archimede approssimava il cerchio con poligoni. Ma una definizione rigorosa arrivò solo nell'Ottocento, con Cauchy e Weierstrass.</p>`
    },
    {
      type: "text",
      title: "Intorni e punti di accumulazione",
      html: `<p>Per parlare con precisione di «vicino» serve la nozione di <b>intorno</b>. Un <b>intorno</b> del punto x₀ di raggio δ &gt; 0 è l'intervallo aperto <b>(x₀ − δ, x₀ + δ)</b>, cioè l'insieme dei punti x con |x − x₀| &lt; δ.</p>
<ul>
<li>Un <b>intorno di +∞</b> è una semiretta (M, +∞); un intorno di −∞ è (−∞, −M).</li>
<li>Un <b>intorno bucato</b> di x₀ esclude il punto stesso: serve perché il limite non guarda il valore in x₀.</li>
<li>x₀ è un <b>punto di accumulazione</b> del dominio se ogni suo intorno contiene punti del dominio diversi da x₀. Il limite ha senso solo nei punti di accumulazione.</li>
</ul>`
    },
    {
      type: "text",
      title: "La definizione rigorosa: ε e δ",
      html: `<p>Diciamo che <b>lim<sub>x→x₀</sub> f(x) = L</b> (con x₀ e L numeri reali) se:</p>
<p style="text-align:center"><b>per ogni ε &gt; 0 esiste δ &gt; 0 tale che, se 0 &lt; |x − x₀| &lt; δ, allora |f(x) − L| &lt; ε.</b></p>
<p>Si legge come una <i>sfida</i>: tu fissi una tolleranza ε quanto piccola vuoi (la «fascia» attorno a L); io devo trovare una distanza δ (la «fascia» attorno a x₀) tale che tutti i punti x in essa, escluso x₀, abbiano immagini dentro la fascia. Se so vincere la sfida per ogni ε, il limite è L.</p>
<p>Esistono altre versioni della stessa idea:</p>
<ul>
<li><b>lim<sub>x→x₀</sub> f(x) = +∞</b>: per ogni M &gt; 0 esiste δ &gt; 0 tale che 0 &lt; |x − x₀| &lt; δ implica f(x) &gt; M.</li>
<li><b>lim<sub>x→+∞</sub> f(x) = L</b>: per ogni ε &gt; 0 esiste N tale che x &gt; N implica |f(x) − L| &lt; ε.</li>
<li><b>Limite destro e sinistro</b>: x → x₀⁺ (solo x &gt; x₀) e x → x₀⁻ (solo x &lt; x₀). Il limite esiste se e solo se i due limiti esistono e coincidono.</li>
</ul>`
    },
    {
      type: "svg",
      title: "La sfida ε-δ",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="50" y="110" width="500" height="60" fill="#fde68a" opacity="0.6"/>
<rect x="240" y="20" width="100" height="250" fill="#bfdbfe" opacity="0.6"/>
<line x1="40" y1="270" x2="570" y2="270" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="270" x2="40" y2="15" stroke="#475569" stroke-width="2"/>
<path d="M 60 245 Q 200 200 290 140 T 540 40" fill="none" stroke="#dc2626" stroke-width="4"/>
<line x1="40" y1="140" x2="290" y2="140" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="290" y1="140" x2="290" y2="270" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 5"/>
<circle cx="290" cy="140" r="6" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<g font-size="16" fill="#1f2937" font-weight="bold">
<text x="8" y="146">L</text>
<text x="8" y="115">L+ε</text>
<text x="8" y="175">L−ε</text>
<text x="280" y="290">x₀</text>
<text x="222" y="290">x₀−δ</text>
<text x="330" y="290">x₀+δ</text>
</g>
<text x="350" y="100" font-size="16" fill="#92400e">fascia di tolleranza ε</text>
<text x="350" y="255" font-size="16" fill="#1e3a8a">intorno di raggio δ</text>
</svg>`,
      caption: "Se x sta nella fascia azzurra (esclusa al più x₀), il grafico sta dentro la fascia gialla: è questo che significa «f(x) tende a L»."
    },
    {
      type: "example",
      title: "Verificare un limite con la definizione",
      html: `<p>Verifica che <b>lim<sub>x→2</sub> (3x − 1) = 5</b>.</p>
<p>Fissato ε &gt; 0 vogliamo |f(x) − 5| &lt; ε. Calcoliamo: |3x − 1 − 5| = |3x − 6| = 3|x − 2|. La disequazione 3|x − 2| &lt; ε equivale a |x − 2| &lt; ε/3. Basta quindi scegliere <b>δ = ε/3</b>: per ogni ε la sfida è vinta, dunque il limite vale 5.</p>
<p>Nota come δ dipenda da ε: più la tolleranza è stretta, più devo restringere l'intorno di x₀.</p>`
    },
    {
      type: "text",
      title: "Teoremi sui limiti",
      html: `<p>Alcuni teoremi permettono di non tornare ogni volta alla definizione:</p>
<ul>
<li><b>Unicità del limite</b>: se esiste, il limite è unico.</li>
<li><b>Permanenza del segno</b>: se lim f(x) = L &gt; 0, allora f(x) &gt; 0 in un intorno (bucato) di x₀.</li>
<li><b>Confronto (dei due carabinieri)</b>: se g(x) ≤ f(x) ≤ h(x) vicino a x₀ e lim g = lim h = L, allora anche lim f = L.</li>
<li><b>Operazioni</b>: se lim f = a e lim g = b (finiti), allora lim (f ± g) = a ± b; lim (f·g) = a·b; lim (f/g) = a/b se b ≠ 0; lim f<sup>n</sup> = a<sup>n</sup>.</li>
</ul>
<p>Per le funzioni elementari <i>continue</i> (polinomi, esponenziali, seno, coseno, radici…) il limite in un punto del dominio si calcola semplicemente <b>sostituendo</b>: lim<sub>x→3</sub> (x² + 1) = 10.</p>`
    },
    {
      type: "widget",
      title: "Abbina funzione e limite",
      widget: "match",
      options: { pairs: [
        ["lim x→+∞ 1/x", "0"],
        ["lim x→0⁺ 1/x", "+∞"],
        ["lim x→0⁻ 1/x", "−∞"],
        ["lim x→+∞ eˣ", "+∞"],
        ["lim x→−∞ eˣ", "0"],
        ["lim x→+∞ (2x+1)/(x−3)", "2"]
      ] },
      caption: "Il segno dei limiti destro e sinistro di 1/x in 0 è diverso: perciò lim x→0 (1/x) non esiste."
    },
    {
      type: "text",
      title: "Forme indeterminate e come risolverle",
      html: `<p>Le operazioni sui limiti con ∞ funzionano in molti casi (∞ + ∞ = ∞, 5/∞ = 0…), ma in sette casi il risultato <b>non è determinato</b> dalla sola forma, e occorre lavorare sulla funzione:</p>
<p style="text-align:center"><b>+∞ − ∞ &nbsp;·&nbsp; 0 · ∞ &nbsp;·&nbsp; ∞/∞ &nbsp;·&nbsp; 0/0 &nbsp;·&nbsp; 1<sup>∞</sup> &nbsp;·&nbsp; 0⁰ &nbsp;·&nbsp; ∞⁰</b></p>
<p>Perché «indeterminate»? Perché ad esempio x/x² , x²/x e x/x sono tutte del tipo ∞/∞ per x → ∞ ma tendono rispettivamente a 0, +∞ e 1.</p>
<p><b>Strategie:</b></p>
<ul>
<li><b>Polinomi per x → ±∞</b> (forma ∞/∞ o ∞ − ∞): conta solo il termine di grado massimo. Per un rapporto di polinomi: grado numeratore &lt; grado denominatore → 0; uguale → rapporto dei coefficienti direttivi; maggiore → ±∞.</li>
<li><b>Forma 0/0 con polinomi</b>: scomporre e semplificare (il fattore (x − x₀) si annulla in entrambi).</li>
<li><b>Radici</b>: razionalizzare, moltiplicando e dividendo per il coniugato.</li>
<li><b>Raccogliere</b> la potenza dominante.</li>
</ul>`
    },
    {
      type: "example",
      title: "Tre limiti, tre tecniche",
      html: `<p><b>1) Rapporto di polinomi a ∞.</b> lim<sub>x→+∞</sub> (3x² − x + 2)/(5x² + 4) è del tipo ∞/∞. Si raccoglie x²: (x²(3 − 1/x + 2/x²))/(x²(5 + 4/x²)) → 3/5.</p>
<p><b>2) Forma 0/0.</b> lim<sub>x→2</sub> (x² − 4)/(x² − 5x + 6) = lim (x − 2)(x + 2)/((x − 2)(x − 3)) = lim (x + 2)/(x − 3) = 4/(−1) = <b>−4</b>.</p>
<p><b>3) Razionalizzazione.</b> lim<sub>x→0</sub> (√(x + 1) − 1)/x: moltiplico e divido per (√(x + 1) + 1): numeratore (x + 1) − 1 = x, quindi il limite è lim 1/(√(x + 1) + 1) = <b>1/2</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: calcolo dei limiti",
      questions: [
        { type: "num", q: "Calcola lim x→+∞ (4x³ + x)/(2x³ − 7).", answer: 2, explain: "Stesso grado: rapporto dei coefficienti direttivi, 4/2 = 2." },
        { type: "num", q: "Calcola lim x→3 (x² − 9)/(x − 3).", answer: 6, explain: "(x − 3)(x + 3)/(x − 3) = x + 3 → 6." },
        { type: "mc", q: "Quale di queste NON è una forma indeterminata?", options: ["0/0", "∞/∞", "5/∞"], answer: 2, explain: "5/∞ vale 0: il risultato è determinato." }
      ]
    },
    {
      type: "text",
      title: "Gli asintoti",
      html: `<p>I limiti descrivono il comportamento «agli estremi» del grafico e individuano gli <b>asintoti</b>:</p>
<ul>
<li><b>Verticale</b> x = x₀: se lim<sub>x→x₀</sub> f(x) = ±∞ (anche solo da un lato).</li>
<li><b>Orizzontale</b> y = L: se lim<sub>x→±∞</sub> f(x) = L.</li>
<li><b>Obliquo</b> y = mx + q: se lim<sub>x→∞</sub> f(x)/x = m ≠ 0 (finito) e lim (f(x) − mx) = q finito.</li>
</ul>
<p>Esempio: f(x) = (x² + 1)/x = x + 1/x ha asintoto verticale x = 0 e asintoto obliquo y = x, perché f(x) − x = 1/x → 0.</p>`
    },
    {
      type: "text",
      title: "I limiti notevoli",
      html: `<p>Alcuni limiti, dimostrabili con costruzioni geometriche o con il teorema del confronto, sono «mattoni» per calcolarne molti altri:</p>
<ul>
<li><b>lim<sub>x→0</sub> sen x / x = 1</b></li>
<li><b>lim<sub>x→0</sub> (1 − cos x)/x² = 1/2</b></li>
<li><b>lim<sub>x→±∞</sub> (1 + 1/x)<sup>x</sup> = e</b> (numero di Nepero, e ≈ 2,71828)</li>
<li><b>lim<sub>x→0</sub> ln(1 + x)/x = 1</b></li>
<li><b>lim<sub>x→0</sub> (eˣ − 1)/x = 1</b></li>
<li><b>lim<sub>x→0</sub> ((1 + x)<sup>α</sup> − 1)/x = α</b></li>
</ul>
<p>Il primo si dimostra confrontando, nel cerchio goniometrico, le aree del triangolo, del settore e del triangolo maggiore: sen x &lt; x &lt; tg x, da cui cos x &lt; sen x / x &lt; 1 e, con il confronto, il limite 1.</p>`
    },
    {
      type: "example",
      title: "Usare i limiti notevoli",
      html: `<p><b>a)</b> lim<sub>x→0</sub> sen(5x)/(2x) = lim (sen 5x/(5x)) · (5/2) = 1 · 5/2 = <b>5/2</b>.</p>
<p><b>b)</b> lim<sub>x→0</sub> (1 − cos x)/x = lim [(1 − cos x)/x²] · x = (1/2) · 0 = <b>0</b>.</p>
<p><b>c)</b> lim<sub>x→+∞</sub> (1 + 2/x)<sup>x</sup>: pongo t = x/2, quindi (1 + 1/t)<sup>2t</sup> = [(1 + 1/t)<sup>t</sup>]² → <b>e²</b>.</p>
<p><b>Applicazione reale</b>: se depositi 1 € al tasso annuo del 100 % con capitalizzazione n volte l'anno, dopo un anno hai (1 + 1/n)ⁿ euro. Con n = 1 sono 2 €, con n = 12 circa 2,613 €, con n = 365 circa 2,7146 €: anche capitalizzando «in ogni istante» non superi e ≈ 2,718 €. Fu Jakob Bernoulli (1683) a incontrare questo limite studiando proprio l'interesse composto.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…?",
      html: `<p>Il simbolo <b>lim</b> e la definizione con ε e δ sono relativamente recenti: Newton e Leibniz (fine del '600) calcolavano con «quantità infinitesime» senza una base rigorosa, e il vescovo Berkeley le derise come «fantasmi di quantità svanite». Il rigore arrivò con <b>Augustin-Louis Cauchy</b> (Cours d'analyse, 1821) e fu perfezionato da <b>Karl Weierstrass</b> intorno al 1860. In compenso, negli anni '60 del Novecento Abraham Robinson ha mostrato che anche gli infinitesimi possono essere resi rigorosi (analisi non standard).</p>`
    },
    {
      type: "curiosity",
      title: "Il paradosso di Achille e la tartaruga",
      html: `<p>Zenone sosteneva che Achille non raggiungerà mai la tartaruga: quando arriva dove lei era, lei è avanzata un po'; e così via all'infinito. Oggi sappiamo che una somma di infiniti tempi sempre più piccoli può essere <b>finita</b>: 1 + 1/2 + 1/4 + 1/8 + … = 2. È un limite: la somma dei primi n termini tende a 2 per n → ∞.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il limite",
      intro: "Se la definizione con ε e δ ti sembra astratta, prova a guardare il limite da altre angolazioni.",
      tabs: [
        {
          label: "🎮 Il gioco della sfida",
          html: `<p>Pensa a un gioco a due giocatori. Tu dici: «voglio che f(x) disti da L meno di <b>ε = 0,001</b>». Io rispondo: «allora scegli x a meno di <b>δ</b> da x₀». Per f(x) = 3x − 1 e x₀ = 2: se vuoi precisione 0,001 ti dico δ = 0,001/3 ≈ 0,00033. Se per ogni ε che mi proponi ho una risposta δ, ho <b>una strategia vincente</b>: il limite esiste ed è L. Se esiste anche un solo ε per cui non so rispondere, il limite non è L.</p>`
        },
        {
          label: "🔬 Zoom con la calcolatrice",
          html: `<p>Ingrandisci sempre di più il grafico di f(x) = sen x / x attorno a x = 0. Il punto x = 0 è «buco» (0/0), ma vicino al buco la curva si avvicina sempre di più all'altezza <b>1</b>. Provando numericamente: x = 0,1 → 0,99833; x = 0,01 → 0,999983; x = 0,001 → 0,99999983. Lo zoom è un modo sperimentale (non una dimostrazione!) di «vedere» un limite.</p>`
        },
        {
          label: "🧭 Limite destro e sinistro",
          html: `<p>Immagina di camminare lungo il grafico verso x₀ da sinistra e di un amico che arriva da destra. Se vi incontrate alla <b>stessa altezza</b> L, il limite esiste. Se arrivate a quote diverse (come per la funzione <i>parte intera</i> in un intero, o per |x|/x in 0, dove si arriva a −1 e +1) il limite non esiste: c'è un «salto». Se entrambi salite senza fine, il limite è infinito.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="150" x2="570" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="300" y1="20" x2="300" y2="280" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="210" x2="300" y2="210" stroke="#dc2626" stroke-width="5"/>
<line x1="300" y1="90" x2="540" y2="90" stroke="#2563eb" stroke-width="5"/>
<circle cx="300" cy="210" r="7" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<circle cx="300" cy="90" r="7" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
<text x="90" y="240" font-size="16" fill="#dc2626" font-weight="bold">da sinistra → −1</text>
<text x="360" y="75" font-size="16" fill="#2563eb" font-weight="bold">da destra → +1</text>
<text x="310" y="30" font-size="16" fill="#1f2937">f(x) = |x|/x: in 0 il limite non esiste</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del limite",
      nodes: [
        { id: "intorno", label: "Intorni", x: 50, y: 6, color: "#6366f1", html: "Intervalli aperti attorno a un punto (o a ±∞) che rendono precisa l'idea di «vicino».", why: "Servono perché in R non si può dire «il punto successivo»: tra due numeri ce ne sono infiniti. «Vicino» si misura con raggi δ arbitrariamente piccoli." },
        { id: "def", label: "Definizione ε-δ", x: 22, y: 28, color: "#16a34a", html: "Per ogni ε esiste δ: 0 < |x − x₀| < δ ⇒ |f(x) − L| < ε.", why: "Cauchy (1821) e Weierstrass (~1860) eliminarono gli infinitesimi «misteriosi» di Newton e Leibniz trasformando il limite in una proposizione su disuguaglianze tra numeri reali." },
        { id: "lat", label: "Limiti laterali", x: 78, y: 28, color: "#f59e0b", html: "Limite destro e sinistro; esiste il limite se coincidono.", why: "Funzioni come |x|/x o la parte intera hanno salti: guardare un lato per volta rivela il comportamento." },
        { id: "teo", label: "Teoremi", x: 15, y: 55, color: "#0ea5e9", html: "Unicità, permanenza del segno, confronto, algebra dei limiti.", why: "Derivano dalla definizione e dalle proprietà dei reali (completezza): permettono di calcolare senza ogni volta ε e δ." },
        { id: "ind", label: "Forme indeterminate", x: 50, y: 55, color: "#ef4444", html: "0/0, ∞/∞, ∞−∞, 0·∞, 1^∞, 0⁰, ∞⁰: servono tecniche specifiche.", why: "Il risultato dipende da <i>quanto velocemente</i> ogni termine tende al suo limite: la forma da sola non basta, da qui il lavoro algebrico." },
        { id: "not", label: "Limiti notevoli", x: 85, y: 55, color: "#a855f7", html: "sen x/x → 1, (1+1/x)^x → e, (eˣ−1)/x → 1…", why: "Collegano geometria (cerchio goniometrico), crescita composta (Bernoulli) ed esponenziali: sono la base per derivare seno, esponenziale e logaritmo." },
        { id: "asi", label: "Asintoti", x: 30, y: 82, color: "#14b8a6", html: "Rette a cui il grafico si avvicina all'infinito.", why: "Sono la traduzione grafica dei limiti infiniti o all'infinito: servono per tracciare il grafico di una funzione." },
        { id: "cont", label: "Verso la continuità e la derivata", x: 72, y: 85, color: "#ec4899", html: "Continuità: lim f = f(x₀). Derivata: limite del rapporto incrementale.", why: "Tutta l'analisi (derivate, integrali) si costruisce sul limite: Newton e Leibniz la usarono prima di averlo definito." }
      ],
      edges: [
        ["intorno", "def", "formalizza"],
        ["def", "lat", "si specializza in"],
        ["def", "teo", "produce"],
        ["teo", "ind", "non basta se"],
        ["ind", "not", "si risolve con"],
        ["def", "asi", "descrive"],
        ["not", "cont", "prepara"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il limite descrive il comportamento <b>vicino</b> a x₀, non il valore in x₀.</li>
<li>Esiste lim f(x) se e solo se limite destro e sinistro esistono e sono uguali.</li>
<li>Forme indeterminate: <b>0/0, ∞/∞, ∞ − ∞, 0·∞, 1^∞, 0⁰, ∞⁰</b>: si risolvono con scomposizione, raccoglimento, razionalizzazione, limiti notevoli.</li>
<li>Per x → ±∞ in un rapporto di polinomi decide il grado.</li>
<li>Limiti notevoli: sen x/x → 1, (1 + 1/x)^x → e, (eˣ − 1)/x → 1, ln(1 + x)/x → 1, (1 − cos x)/x² → 1/2.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: asintoti e limiti notevoli",
      questions: [
        { type: "mc", q: "La funzione f(x) = 1/(x − 2) ha…", options: ["asintoto verticale x = 2 e orizzontale y = 0", "solo asintoto verticale", "asintoto obliquo"], answer: 0, explain: "In x = 2 il limite è ±∞; per x → ±∞ la funzione tende a 0." },
        { type: "num", q: "Calcola lim x→0 sen(3x)/x.", answer: 3, explain: "sen 3x/x = 3 · sen(3x)/(3x) → 3." },
        { type: "tf", q: "Se lim x→x₀⁺ f(x) = 2 e lim x→x₀⁻ f(x) = 3, allora lim x→x₀ f(x) esiste.", answer: false, explain: "I limiti laterali sono diversi: il limite non esiste." }
      ]
    }
  ],
  glossary: [
    { t: "Intorno", d: "Intervallo aperto (x₀ − δ, x₀ + δ) che contiene x₀; per ±∞ una semiretta." },
    { t: "Limite", d: "Valore L a cui f(x) si avvicina quando x si avvicina a x₀: per ogni ε esiste δ tale che 0 < |x − x₀| < δ implica |f(x) − L| < ε." },
    { t: "Limite destro / sinistro", d: "Limite calcolato avvicinandosi a x₀ solo da valori maggiori / minori." },
    { t: "Forma indeterminata", d: "Espressione come 0/0 o ∞ − ∞ il cui valore non è fissato dalla sola forma." },
    { t: "Teorema del confronto", d: "Se g ≤ f ≤ h e g, h hanno lo stesso limite L, anche f tende a L." },
    { t: "Asintoto", d: "Retta a cui il grafico si avvicina indefinitamente." },
    { t: "Numero di Nepero", d: "e ≈ 2,71828, limite di (1 + 1/n)ⁿ." },
    { t: "Limite notevole", d: "Limite standard (come sen x/x → 1) usato per risolverne altri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Calcola lim x→1 (x² − 1)/(x − 1).", answer: 2, explain: "(x − 1)(x + 1)/(x − 1) = x + 1 → 2." },
      { type: "num", q: "Calcola lim x→+∞ (3x² − x + 2)/(5x² + 4) e dai la risposta in decimali.", answer: 0.6, tol: 0.001, explain: "Stesso grado: 3/5 = 0,6." },
      { type: "mc", q: "Quale delle seguenti è una forma indeterminata?", options: ["∞ − ∞", "∞ + ∞", "3/0⁺"], answer: 0, explain: "∞ + ∞ = +∞ e 3/0⁺ = +∞ sono determinate; ∞ − ∞ no." },
      { type: "tf", q: "Il limite di f(x) per x → x₀ dipende dal valore f(x₀).", answer: false, explain: "Il limite riguarda solo i punti vicini a x₀, esclusa x₀ stessa." },
      { type: "num", q: "Calcola lim x→0 (1 − cos x)/x².", answer: 0.5, tol: 0.001, explain: "È il limite notevole: vale 1/2." },
      { type: "mc", q: "lim x→+∞ (1 + 1/x)^x vale…", options: ["1", "e", "+∞"], answer: 1, explain: "Forma 1^∞ la cui soluzione è il numero di Nepero e." },
      { type: "num", q: "Calcola lim x→0 (eˣ − 1)/(2x).", answer: 0.5, tol: 0.001, explain: "(eˣ − 1)/x → 1, quindi il limite è 1/2." },
      { type: "mc", q: "Qual è l'asintoto obliquo di f(x) = (x² + 1)/x?", options: ["y = x", "y = 1", "y = 0"], answer: 0, explain: "f(x) = x + 1/x: la differenza f(x) − x = 1/x tende a 0." },
      { type: "text", q: "Come si chiama il teorema che dice: se g ≤ f ≤ h e g e h tendono entrambi a L, allora f tende a L? (due parole, il nome popolare)", answer: ["carabinieri", "dei carabinieri", "due carabinieri", "dei due carabinieri", "confronto"], explain: "Si chiama teorema del confronto, o «dei due carabinieri»." },
      { type: "order", q: "Metti in ordine i passi per risolvere lim x→2 (x² − 4)/(x² − 5x + 6).", items: ["Riconoscere la forma 0/0", "Scomporre numeratore e denominatore", "Semplificare il fattore (x − 2)", "Sostituire x = 2 nell'espressione semplificata"], explain: "Si ottiene (x + 2)/(x − 3) e quindi −4." }
    ]
  }
});

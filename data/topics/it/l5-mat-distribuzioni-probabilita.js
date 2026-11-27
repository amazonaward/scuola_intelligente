TOPIC('it', {
  id: "l5-mat-distribuzioni-probabilita",
  title: "Distribuzioni di probabilità",
  intro: "Quanti pazienti arriveranno stanotte al pronto soccorso? Quanti sbagli in un test a risposta multipla tirando a caso? Quanto sarà alto il prossimo studente che entra in classe? Sono tutte <b>variabili casuali</b>: grandezze il cui valore dipende dal caso. La loro «carta d'identità» è la <b>distribuzione di probabilità</b>, che dice con quale probabilità ogni valore si presenta. In questa lezione unisci il calcolo combinatorio, la probabilità e l'analisi: impari valore atteso e varianza, la distribuzione <b>binomiale</b>, quella di <b>Poisson</b> e la celebre curva a campana, la <b>normale</b> di Gauss.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "Variabili casuali discrete",
      html: `<p>Una <b>variabile casuale</b> X è una regola che associa un numero a ogni esito di un esperimento aleatorio. Per esempio: lanciando un dado, X = numero uscito; lanciando 3 monete, X = numero di teste. Se X assume un insieme finito (o numerabile) di valori x₁, x₂, … è <b>discreta</b>.</p>
<p>La sua <b>distribuzione di probabilità</b> è la tabella dei valori con le rispettive probabilità pᵢ = P(X = xᵢ), con <b>pᵢ ≥ 0</b> e <b>Σ pᵢ = 1</b>.</p>
<p><b>Esempio</b>: X = numero di teste in 3 lanci di moneta equa.</p>
<table>
<tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td></tr>
<tr><th>P(X = x)</th><td>1/8</td><td>3/8</td><td>3/8</td><td>1/8</td></tr>
</table>
<p>La <b>funzione di ripartizione</b> F(x) = P(X ≤ x) somma le probabilità fino a x: F(1) = 1/8 + 3/8 = 1/2.</p>`
    },
    {
      type: "text",
      title: "Valore atteso, varianza, deviazione standard",
      html: `<p>Il <b>valore atteso</b> (o media) è la media dei valori pesata con le probabilità:</p>
<p style="text-align:center"><b>E(X) = μ = Σ xᵢ · pᵢ</b></p>
<p>È il valore «medio» che ci aspettiamo ripetendo l'esperimento molte volte (legge dei grandi numeri). La <b>varianza</b> misura la dispersione:</p>
<p style="text-align:center"><b>Var(X) = σ² = Σ (xᵢ − μ)² pᵢ = E(X²) − μ²</b>, &nbsp;&nbsp; <b>σ = √Var(X)</b> (deviazione standard)</p>
<p><b>Dado</b>: E = (1+2+…+6)/6 = <b>3,5</b>; E(X²) = 91/6; Var = 91/6 − 3,5² = 35/12 ≈ 2,92; σ ≈ <b>1,71</b>.</p>
<p><b>Proprietà</b>: E(aX + b) = aE(X) + b; Var(aX + b) = a²Var(X); E(X + Y) = E(X) + E(Y) sempre; Var(X + Y) = Var(X) + Var(Y) se X e Y sono indipendenti.</p>`
    },
    {
      type: "example",
      title: "Conviene giocare? Un gioco equo",
      html: `<p>Un banco propone: paghi 2 € per estrarre un biglietto; con probabilità 1/1000 vinci 1 000 €, altrimenti nulla. Il guadagno netto G vale +998 € con p = 1/1000 e −2 € con p = 999/1000.</p>
<p>E(G) = 998 · 0,001 + (−2) · 0,999 = 0,998 − 1,998 = <b>−1 €</b>. Giocando molte volte, in media perdi 1 € a partita (la «tassa sulla fortuna»). Un gioco è <b>equo</b> se E(G) = 0. Il casinò, le lotterie e le assicurazioni si basano proprio sul valore atteso: le prime due guadagnano perché E è negativo per il giocatore; le assicurazioni guadagnano perché il premio che incassi supera il costo atteso dei sinistri.</p>`
    },
    {
      type: "text",
      title: "La distribuzione binomiale",
      html: `<p>Si ripete n volte in modo indipendente una prova con due esiti, «successo» (probabilità p) e «insuccesso» (q = 1 − p): schema di <b>Bernoulli</b>. La variabile X = <i>numero di successi</i> ha distribuzione <b>binomiale B(n, p)</b>:</p>
<p style="text-align:center"><b>P(X = k) = C(n, k) · p<sup>k</sup> · q<sup>n−k</sup></b>, &nbsp; k = 0, 1, …, n, &nbsp; con C(n, k) = n!/(k!(n − k)!).</p>
<p>Il binomiale C(n, k) conta i modi di scegliere <i>quali</i> k prove siano successi; ognuno ha probabilità p<sup>k</sup>q<sup>n−k</sup>. Valore atteso e varianza:</p>
<p style="text-align:center"><b>E(X) = n·p</b>, &nbsp; <b>Var(X) = n·p·q</b>.</p>
<p><b>Esempio</b>: lanci una moneta 10 volte. P(esattamente 6 teste) = C(10, 6)/2¹⁰ = 210/1024 ≈ <b>0,205</b>. E(X) = 5; σ = √(10 · 0,5 · 0,5) ≈ 1,58.</p>
<p><b>Esempio</b>: test di 10 domande a 4 risposte (1 giusta), rispondendo a caso: p = 1/4. P(almeno 6 giuste) è minuscola (≈ 0,0197): chi studia non rischia. E(X) = 2,5 risposte giuste.</p>`
    },
    {
      type: "svg",
      title: "Binomiale B(5; 0,5)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="560" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#475569" stroke-width="2"/>
<g fill="#93c5fd" stroke="#1d4ed8" stroke-width="2">
<rect x="85" y="230" width="60" height="20"/><rect x="165" y="150" width="60" height="100"/><rect x="245" y="50" width="60" height="200"/>
<rect x="325" y="50" width="60" height="200"/><rect x="405" y="150" width="60" height="100"/><rect x="485" y="230" width="60" height="20"/>
</g>
<g font-size="16" font-weight="bold" fill="#1f2937" text-anchor="middle">
<text x="115" y="275">0</text><text x="195" y="275">1</text><text x="275" y="275">2</text><text x="355" y="275">3</text><text x="435" y="275">4</text><text x="515" y="275">5</text>
</g>
<g font-size="15" fill="#1e3a8a" text-anchor="middle">
<text x="115" y="222">1/32</text><text x="195" y="142">5/32</text><text x="275" y="42">10/32</text><text x="355" y="42">10/32</text><text x="435" y="142">5/32</text><text x="515" y="222">1/32</text>
</g>
<text x="300" y="296" font-size="14" fill="#475569" text-anchor="middle">numero di teste su 5 lanci</text>
</svg>`,
      caption: "I numeri sono C(5, k)/32: 1, 5, 10, 10, 5, 1, cioè la riga del triangolo di Tartaglia. Con p = 0,5 la distribuzione è simmetrica."
    },
    {
      type: "widget",
      title: "Quale distribuzione è?",
      widget: "classify",
      options: { groups: ["Binomiale", "Poisson", "Normale"], items: [
        ["Numero di teste in 20 lanci", 0],
        ["Risposte esatte tirando a caso in un test", 0],
        ["Telefonate al minuto a un centralino", 1],
        ["Raggi cosmici rilevati in un secondo", 1],
        ["Altezza degli adulti di una popolazione", 2],
        ["Errori di misura ripetuti", 2],
        ["Meteoriti che cadono in un'area in un anno", 1]
      ] },
      caption: "Conteggio con numero di prove fisso → binomiale; eventi rari in un intervallo → Poisson; grandezza continua dovuta a tanti piccoli effetti → normale."
    },
    {
      type: "quiz",
      title: "Mini-quiz: media e binomiale",
      questions: [
        { type: "num", q: "Qual è il valore atteso di X = punteggio di un dado equo a 6 facce?", answer: 3.5, tol: 0.001, explain: "(1 + 2 + … + 6)/6 = 21/6 = 3,5." },
        { type: "num", q: "Si lancia un dado 12 volte. Qual è il numero atteso di «6»?", answer: 2, explain: "E = n·p = 12 · (1/6) = 2." },
        { type: "num", q: "Lanci una moneta 4 volte: P(esattamente 2 teste)? (risposta decimale)", answer: 0.375, tol: 0.001, explain: "C(4, 2)/16 = 6/16 = 0,375." }
      ]
    },
    {
      type: "text",
      title: "La distribuzione di Poisson",
      html: `<p>Molti fenomeni sono <b>conteggi di eventi rari</b> in un intervallo di tempo o di spazio: telefonate in un minuto, mutazioni in un tratto di DNA, auto che passano a un casello, errori di stampa per pagina. Se in media si verificano λ eventi nell'intervallo, e gli eventi sono indipendenti, X ha distribuzione di <b>Poisson</b>:</p>
<p style="text-align:center"><b>P(X = k) = e<sup>−λ</sup> · λ<sup>k</sup> / k!</b>, &nbsp; k = 0, 1, 2, …</p>
<p>Si ha <b>E(X) = Var(X) = λ</b>. Deriva dalla binomiale quando n è grande e p è piccolo, con λ = np costante: C(n, k)p<sup>k</sup>(1 − p)<sup>n−k</sup> → e<sup>−λ</sup>λ<sup>k</sup>/k! (qui compare il limite notevole (1 − λ/n)ⁿ → e<sup>−λ</sup>).</p>
<p><b>Esempio</b>: un centralino riceve in media λ = 3 chiamate al minuto. P(nessuna chiamata) = e<sup>−3</sup> ≈ <b>0,0498</b>; P(2 chiamate) = e<sup>−3</sup> · 9/2 ≈ <b>0,224</b>; P(almeno una) = 1 − e<sup>−3</sup> ≈ 0,950.</p>
<p>La distribuzione prende il nome da <b>Siméon Denis Poisson</b>, che la introdusse nel 1837; resta famosa l'applicazione del 1898 di Ladislaus Bortkiewicz ai soldati prussiani uccisi da un calcio di cavallo, che mostrò che anche eventi rari «seguono» una legge.</p>`
    },
    {
      type: "text",
      title: "Variabili casuali continue e densità",
      html: `<p>Se X può assumere <i>qualsiasi</i> valore di un intervallo (altezza, tempo di attesa, errore di misura), P(X = x) = 0 per ogni x (come la probabilità di colpire esattamente un punto di un bersaglio). Si descrive X con una <b>funzione densità f(x) ≥ 0</b> tale che</p>
<p style="text-align:center"><b>P(a ≤ X ≤ b) = ∫<sub>a</sub><sup>b</sup> f(x) dx</b>, &nbsp; con &nbsp; ∫<sub>−∞</sub><sup>+∞</sup> f(x) dx = 1.</p>
<p>La probabilità è un'<b>area</b> sotto la curva. Valore atteso e varianza: <b>μ = ∫ x f(x) dx</b>, <b>σ² = ∫ (x − μ)² f(x) dx</b>. Qui l'integrale prende il posto della somma.</p>
<p><b>Esempio (uniforme)</b>: tempo di attesa dell'autobus, uniforme su [0, 10] minuti: f = 1/10; P(attesa ≤ 3 min) = ∫₀³ 0,1 dx = 0,3; μ = 5 minuti.</p>`
    },
    {
      type: "text",
      title: "La distribuzione normale (gaussiana)",
      html: `<p>La distribuzione <b>normale</b> N(μ, σ) ha densità a campana:</p>
<p style="text-align:center"><b>f(x) = (1/(σ√(2π))) · e<sup>−(x − μ)²/(2σ²)</sup></b></p>
<p>È simmetrica rispetto a μ (media, mediana e moda coincidono), con flessi in μ ± σ; σ controlla la larghezza (più σ è grande, più la campana è larga e bassa). Il nome «gaussiana» ricorda Carl Friedrich Gauss, che la usò nel 1809 per la teoria degli errori delle misure astronomiche.</p>
<p><b>Regola 68-95-99,7</b>: in una normale</p>
<ul>
<li>circa il <b>68,3 %</b> dei valori sta entro μ ± σ;</li>
<li>circa il <b>95,4 %</b> entro μ ± 2σ;</li>
<li>circa il <b>99,7 %</b> entro μ ± 3σ.</li>
</ul>
<p><b>Standardizzazione</b>: Z = (X − μ)/σ ha distribuzione N(0, 1) (normale <i>standard</i>). Così basta una sola tabella: P(Z ≤ 1) ≈ 0,841; P(Z ≤ 2) ≈ 0,977; P(Z ≤ 1,645) ≈ 0,95; P(Z ≤ 1,96) ≈ 0,975.</p>`
    },
    {
      type: "svg",
      title: "La campana di Gauss",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="120" y="60" width="360" height="190" fill="#e0f2fe" opacity="0.8"/>
<rect x="180" y="60" width="240" height="190" fill="#bae6fd" opacity="0.8"/>
<rect x="240" y="60" width="120" height="190" fill="#7dd3fc" opacity="0.8"/>
<line x1="40" y1="250" x2="560" y2="250" stroke="#475569" stroke-width="2"/>
<path d="M 60 250 L 70 250 L 80 250 L 90 250 L 100 249 L 110 249 L 120 248 L 130 247 L 140 245 L 150 242 L 160 238 L 170 233 L 180 226 L 190 216 L 200 205 L 210 192 L 220 176 L 230 159 L 240 141 L 250 123 L 260 106 L 270 91 L 280 80 L 290 72 L 300 70 L 310 72 L 320 80 L 330 91 L 340 106 L 350 123 L 360 141 L 370 159 L 380 176 L 390 192 L 400 205 L 410 216 L 420 226 L 430 233 L 440 238 L 450 242 L 460 245 L 470 247 L 480 248 L 490 249 L 500 249 L 510 250 L 520 250 L 530 250 L 540 250" fill="none" stroke="#dc2626" stroke-width="4"/>
<line x1="300" y1="60" x2="300" y2="250" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 5"/>
<g font-size="16" font-weight="bold" fill="#1f2937" text-anchor="middle">
<text x="300" y="275">μ</text><text x="240" y="275">μ−σ</text><text x="360" y="275">μ+σ</text>
<text x="180" y="275">μ−2σ</text><text x="420" y="275">μ+2σ</text><text x="120" y="275">μ−3σ</text><text x="480" y="275">μ+3σ</text>
</g>
<g font-size="15" font-weight="bold" fill="#0c4a6e" text-anchor="middle">
<text x="300" y="150">68,3 %</text><text x="300" y="100" fill="#075985">95,4 % entro 2σ</text>
<text x="300" y="40" fill="#0c4a6e">99,7 % entro 3σ</text>
</g>
</svg>`,
      caption: "La regola 68-95-99,7: le fasce a ±1σ, ±2σ, ±3σ contengono rispettivamente circa il 68 %, il 95 % e il 99,7 % dei valori."
    },
    {
      type: "example",
      title: "Altezze e quoziente intellettivo",
      html: `<p><b>Altezze.</b> In una popolazione di adulti l'altezza ha μ = 170 cm e σ = 10 cm. La percentuale di persone tra 160 e 180 cm è circa il <b>68 %</b> (μ ± σ). Quelle più alte di 190 cm: z = (190 − 170)/10 = 2 ⇒ P(Z &gt; 2) = 1 − 0,977 ≈ <b>0,0228</b>, circa il 2,3 %.</p>
<p><b>Quoziente intellettivo.</b> I test sono tarati per avere μ = 100 e σ = 15. Un punteggio di 130 vale z = 2: solo il 2,3 % della popolazione sta sopra. Il 95 % delle persone ha un punteggio tra 70 e 130.</p>
<p><b>Controllo di qualità</b>: un'industria produce viti con diametro N(5 mm; 0,02 mm). Se si scartano le viti fuori da ±3σ, ne vengono scartate circa 3 su 1000.</p>`
    },
    {
      type: "text",
      title: "Perché la normale è ovunque: il teorema centrale del limite",
      html: `<p>Il <b>teorema centrale del limite</b> (Laplace, 1810, poi generalizzato da Lyapunov e altri) afferma, in modo semplificato, che la <b>somma (o media) di molte variabili casuali indipendenti</b> e simili ha distribuzione approssimativamente normale, qualunque sia la distribuzione di partenza.</p>
<p>Ecco perché la campana compare per l'altezza (somma di molti effetti genetici e ambientali), per gli errori di misura (molte piccole cause) e come limite della binomiale: <b>per n grande</b> B(n, p) si approssima con N(np, √(npq)) (teorema di De Moivre-Laplace, 1733). Con 100 lanci di moneta, X ha μ = 50, σ = 5: P(40 ≤ X ≤ 60) ≈ P(−2 ≤ Z ≤ 2) ≈ <b>95 %</b>. È la base dei sondaggi e delle stime statistiche con margine d'errore.</p>`
    },
    {
      type: "curiosity",
      title: "Galton e la macchina della campana",
      html: `<p>Il naturalista Francis Galton (1822–1911) costruì una tavola con file di chiodi (il «quincunx»): le palline cadono rimbalzando casualmente a destra o a sinistra a ogni chiodo, e si accumulano in colonne formando la <b>campana</b>: è la binomiale che tende alla normale. Lo stesso Galton, studiando l'altezza di padri e figli, scoprì la «regressione verso la media».</p>`
    },
    {
      type: "curiosity",
      title: "La banconota con Gauss",
      html: `<p>Il matematico tedesco Carl Friedrich Gauss (1777–1855) appariva, con la sua curva a campana, sulla banconota da 10 marchi tedeschi (serie del 1993) accanto alla formula della densità normale: un raro caso in cui una formula finisce nel portafoglio. La curva fu usata da Gauss per prevedere la posizione dell'asteroide Cerere dopo che gli astronomi l'avevano perso di vista nel 1801.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le distribuzioni",
      intro: "Con esperimenti e immagini la probabilità diventa tangibile.",
      tabs: [
        {
          label: "🎲 L'esperimento: il quincunx",
          html: `<p>Immagina una tavola con file di chiodi: una pallina, a ogni chiodo, va a sinistra o a destra con probabilità 1/2. Dopo 4 file la pallina può finire in 5 posizioni, con probabilità 1/16, 4/16, 6/16, 4/16, 1/16 (le righe del triangolo di Tartaglia). Con 100 palline vedi quasi la forma binomiale; con migliaia, e con molte file, vedi una campana. Il caso, sommato tante volte, produce una forma <b>regolare</b>: l'ordine nasce dal disordine.</p>`
        },
        {
          label: "📏 Misurare con le unità σ",
          html: `<p>Lo z-score dice a quante deviazioni standard sei dalla media, ed è un modo per confrontare cose diverse. Luca ha 28/30 in un test con μ = 24, σ = 2: z = 2. Giulia ha 85/100 in un test con μ = 70, σ = 10: z = 1,5. Anche se 85/100 sembra «più lontano» dal massimo, Luca è andato <b>meglio rispetto ai compagni</b>. La standardizzazione toglie le unità di misura.</p>`
        },
        {
          label: "📞 Poisson come «binomiale con tanti tentativi»",
          html: `<p>Dividi un minuto in 60 000 millisecondi; in ognuno c'è una piccolissima probabilità p = 3/60 000 che arrivi una telefonata. Il numero di chiamate in un minuto è binomiale B(60 000; 0,00005) con np = 3. Aumentando il numero di «sottointervalli» la binomiale si trasforma in Poisson con λ = 3. È come spezzettare il tempo in istanti: la distribuzione dipende solo dal numero medio di eventi, non da come hai spezzettato.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle distribuzioni",
      nodes: [
        { id: "vc", label: "Variabile casuale", x: 50, y: 6, color: "#6366f1", html: "Numero legato all'esito di un esperimento aleatorio.", why: "Permette di usare l'algebra e l'analisi sul caso: Pascal e Fermat (1654) iniziarono con problemi di gioco, Kolmogorov (1933) diede le basi assiomatiche." },
        { id: "disc", label: "Discrete", x: 22, y: 28, color: "#16a34a", html: "Tabella di probabilità pᵢ con Σpᵢ = 1.", why: "Dalla combinatoria: contare i casi favorevoli e i casi possibili." },
        { id: "cont", label: "Continue e densità", x: 78, y: 28, color: "#f59e0b", html: "P(a ≤ X ≤ b) = ∫ f.", why: "Dall'analisi: probabilità come area, ∫ f = 1." },
        { id: "mv", label: "Valore atteso e varianza", x: 50, y: 48, color: "#0ea5e9", html: "μ = Σxp, σ² = Σ(x−μ)²p.", why: "Riassumono centro e dispersione; la media pesata nasce nei giochi d'azzardo (Huygens, 1657)." },
        { id: "bin", label: "Binomiale", x: 18, y: 70, color: "#a855f7", html: "C(n,k)p^k q^(n−k); E = np, Var = npq.", why: "Dal triangolo di Tartaglia e dallo schema di Bernoulli (Ars Conjectandi, 1713)." },
        { id: "poi", label: "Poisson", x: 50, y: 80, color: "#ef4444", html: "e^(−λ) λ^k/k!; E = Var = λ.", why: "Limite della binomiale per n grande e p piccolo: serve per eventi rari." },
        { id: "nor", label: "Normale", x: 84, y: 70, color: "#14b8a6", html: "Campana di Gauss, regola 68-95-99,7.", why: "Teorema centrale del limite: somma di molti piccoli effetti indipendenti è quasi normale." },
        { id: "stat", label: "Statistica e sondaggi", x: 50, y: 94, color: "#ec4899", html: "Margine d'errore, stime, test.", why: "La normale permette di calcolare l'incertezza di un campione: fondamento della statistica inferenziale." }
      ],
      edges: [
        ["vc", "disc", "tipo"],
        ["vc", "cont", "tipo"],
        ["disc", "mv", "si riassume con"],
        ["cont", "mv", "si riassume con"],
        ["disc", "bin", "esempio"],
        ["bin", "poi", "n grande, p piccolo"],
        ["bin", "nor", "n grande"],
        ["cont", "nor", "esempio"],
        ["nor", "stat", "fonda"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Distribuzione discreta: pᵢ ≥ 0, Σpᵢ = 1. <b>E(X) = Σxp</b>, <b>Var = E(X²) − μ²</b>.</li>
<li><b>Binomiale</b> B(n, p): P(k) = C(n, k)p^k q^(n−k); E = np; Var = npq.</li>
<li><b>Poisson</b> (λ): P(k) = e^(−λ)λ^k/k!; E = Var = λ.</li>
<li><b>Normale</b> N(μ, σ): campana simmetrica; Z = (X − μ)/σ; regola 68-95-99,7.</li>
<li>Variabili continue: probabilità = area sotto la densità; P(X = x) = 0.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Poisson e normale",
      questions: [
        { type: "mc", q: "In una distribuzione di Poisson di parametro λ, la varianza vale…", options: ["λ", "λ²", "√λ"], answer: 0, explain: "Poisson ha E = Var = λ." },
        { type: "num", q: "X ~ N(50; 4). Quanto vale z per x = 58?", answer: 2, explain: "(58 − 50)/4 = 2." },
        { type: "num", q: "In una normale, circa che percentuale dei dati sta entro 2σ dalla media? (intero)", answer: 95, unit: "%", explain: "Circa il 95,4 %." }
      ]
    }
  ],
  glossary: [
    { t: "Variabile casuale", d: "Numero associato all'esito di un esperimento aleatorio." },
    { t: "Distribuzione di probabilità", d: "Tabella o funzione che assegna una probabilità ai valori possibili." },
    { t: "Valore atteso", d: "Media dei valori pesata con le probabilità: E(X) = Σ xp." },
    { t: "Varianza e deviazione standard", d: "σ² = E[(X − μ)²]; σ è la sua radice quadrata." },
    { t: "Distribuzione binomiale", d: "Numero di successi in n prove indipendenti con probabilità p: C(n,k)p^k q^(n−k)." },
    { t: "Distribuzione di Poisson", d: "Conteggio di eventi rari con media λ: e^(−λ)λ^k/k!." },
    { t: "Densità di probabilità", d: "Funzione f ≥ 0 con ∫ f = 1: le probabilità sono aree." },
    { t: "Distribuzione normale", d: "Curva a campana di Gauss N(μ, σ)." },
    { t: "Standardizzazione", d: "Z = (X − μ)/σ: porta ogni normale alla normale standard N(0, 1)." },
    { t: "Teorema centrale del limite", d: "La somma di molte variabili indipendenti è approssimativamente normale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "X assume i valori 1, 2, 3 con probabilità 0,2; 0,5; 0,3. Qual è E(X)?", answer: 2.1, tol: 0.001, explain: "1·0,2 + 2·0,5 + 3·0,3 = 0,2 + 1 + 0,9 = 2,1." },
      { type: "num", q: "Per X ~ B(20; 0,3), qual è il valore atteso?", answer: 6, explain: "np = 20 · 0,3 = 6." },
      { type: "num", q: "Per X ~ B(20; 0,3), qual è la varianza?", answer: 4.2, tol: 0.001, explain: "npq = 20 · 0,3 · 0,7 = 4,2." },
      { type: "num", q: "Lanci una moneta 5 volte: P(esattamente 3 teste)? (decimali)", answer: 0.3125, tol: 0.001, explain: "C(5, 3)/32 = 10/32." },
      { type: "mc", q: "Per una Poisson con λ = 2, P(X = 0) vale…", options: ["e^(−2)", "e^2", "2e^(−2)"], answer: 0, explain: "e^(−λ)λ⁰/0! = e^(−2)." },
      { type: "num", q: "X ~ N(100; 15). Qual è lo z-score di x = 130?", answer: 2, explain: "(130 − 100)/15 = 2." },
      { type: "tf", q: "In una distribuzione normale media, mediana e moda coincidono.", answer: true, explain: "È simmetrica e unimodale." },
      { type: "mc", q: "Per una variabile continua, P(X = a) vale…", options: ["0", "f(a)", "1"], answer: 0, explain: "L'area di un singolo punto è nulla." },
      { type: "mc", q: "Una binomiale con n grande e p piccolo è ben approssimata da…", options: ["una Poisson con λ = np", "una uniforme", "una geometrica"], answer: 0, explain: "È il limite poissoniano della binomiale." },
      { type: "order", q: "Ordina i passi per calcolare P(X > 190) con X ~ N(170; 10).", items: ["Calcolare z = (190 − 170)/10 = 2", "Cercare P(Z ≤ 2) nella tabella", "Calcolare il complemento 1 − P(Z ≤ 2)", "Interpretare il risultato ≈ 2,3 %"], explain: "La normale non ha formula esplicita per l'integrale: si usano le tabelle." }
    ]
  }
});

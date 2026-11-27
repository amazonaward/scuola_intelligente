TOPIC('it', {
  id: "l5-mat-equazioni-differenziali",
  title: "Equazioni differenziali",
  intro: "Le leggi della natura raramente dicono «quanto vale» una grandezza: dicono <b>come varia</b>. La velocità di raffreddamento di un caffè dipende dalla differenza di temperatura con la stanza; la crescita di una popolazione dipende da quanti individui ci sono; la seconda legge di Newton lega l'accelerazione (derivata seconda della posizione) alla forza. Queste relazioni sono <b>equazioni differenziali</b>: equazioni la cui incognita è una <i>funzione</i> e in cui compaiono le sue derivate. In questa lezione impari a risolvere le equazioni del <b>primo ordine</b> (a variabili separabili e lineari) e le applichi a fenomeni fisici, chimici e biologici.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Che cos'è un'equazione differenziale",
      html: `<p>Un'<b>equazione differenziale</b> è un'equazione in cui l'incognita è una funzione y(x) (o y(t)) e compare almeno una sua derivata. Per esempio:</p>
<ul>
<li><b>y′ = 3y</b>: la derivata è proporzionale alla funzione (crescita esponenziale).</li>
<li><b>y′ = x²</b>: si risolve integrando: y = x³/3 + c.</li>
<li><b>y″ = −g</b>: la caduta libera: la derivata seconda della quota è −g.</li>
</ul>
<p>L'<b>ordine</b> è quello della derivata più alta che compare. La <b>soluzione generale</b> contiene tante costanti arbitrarie quanto l'ordine (nel primo ordine una costante c): è una <i>famiglia</i> di curve. Una <b>soluzione particolare</b> si ottiene assegnando una <b>condizione iniziale</b>, per esempio y(0) = 2: l'insieme equazione + condizione iniziale è un <b>problema di Cauchy</b>, e (sotto buone ipotesi) ha una e una sola soluzione.</p>
<p><b>Verificare una soluzione</b>: basta sostituire. y = 5e^(3x) risolve y′ = 3y? y′ = 15e^(3x) = 3·(5e^(3x)) ✓.</p>`
    },
    {
      type: "text",
      title: "La più semplice: y′ = f(x)",
      html: `<p>Se il secondo membro dipende solo da x, si risolve per integrazione: y = ∫ f(x) dx + c. Problema di Cauchy: y′ = 2x, y(1) = 4. Si trova y = x² + c; da y(1) = 1 + c = 4 si ottiene c = 3, quindi <b>y = x² + 3</b>.</p>
<p>Questa è la situazione della cinematica: nota la velocità v(t) si trova la posizione s(t) = ∫v dt + s₀; nota l'accelerazione (costante a) v(t) = at + v₀ e s(t) = ½at² + v₀t + s₀. Le costanti sono determinate dalle condizioni iniziali (posizione e velocità iniziali).</p>`
    },
    {
      type: "text",
      title: "Equazioni a variabili separabili",
      html: `<p>Sono del tipo <b>y′ = g(x)·h(y)</b>. Il metodo (di Leibniz e Bernoulli): scrivere y′ = dy/dx, <b>separare</b> le variabili e integrare:</p>
<p style="text-align:center">dy/h(y) = g(x) dx &nbsp;⇒&nbsp; ∫ dy/h(y) = ∫ g(x) dx + c</p>
<p>Attenzione alle soluzioni costanti y = k con h(k) = 0, che si perdono nella divisione.</p>
<p><b>Esempio 1.</b> y′ = 2xy. Separando: dy/y = 2x dx ⇒ ln|y| = x² + c ⇒ <b>y = C·e^(x²)</b> (C ∈ ℝ, anche C = 0).</p>
<p><b>Esempio 2.</b> y′ = −y/x (x &gt; 0), y(1) = 3: dy/y = −dx/x ⇒ ln|y| = −ln x + c ⇒ y = C/x; da y(1) = 3: <b>y = 3/x</b>.</p>
<p><b>Esempio 3: la crescita esponenziale.</b> y′ = ky ⇒ y = y₀ e^(kt). Se k &gt; 0 cresce (popolazioni, interessi composti); se k &lt; 0 decresce (decadimento).</p>`
    },
    {
      type: "svg",
      title: "Crescita e decadimento",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="260" x2="570" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="40" y1="260" x2="40" y2="15" stroke="#475569" stroke-width="2"/>
<path d="M 40 220 C 200 215 320 170 400 90 C 440 55 470 35 490 20" fill="none" stroke="#16a34a" stroke-width="4"/>
<path d="M 40 40 C 120 120 200 180 300 215 C 400 240 480 248 560 250" fill="none" stroke="#dc2626" stroke-width="4"/>
<line x1="40" y1="250" x2="570" y2="250" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 5"/>
<g font-size="16" font-weight="bold">
<text x="320" y="55" fill="#16a34a">y′ = ky, k &gt; 0: crescita</text>
<text x="270" y="195" fill="#dc2626">k &lt; 0: decadimento</text>
<text x="450" y="242" fill="#2563eb">asintoto</text>
<text x="545" y="285" fill="#475569">t</text>
</g>
</svg>`,
      caption: "Le soluzioni di y′ = ky sono esponenziali: la velocità di variazione è proporzionale al valore presente. Per k < 0 la curva tende all'asse."
    },
    {
      type: "text",
      title: "Equazioni lineari del primo ordine",
      html: `<p>Sono del tipo <b>y′ + a(x)·y = b(x)</b> con a, b continue. Se b = 0 (omogenea) è a variabili separabili. In generale la soluzione è:</p>
<p style="text-align:center"><b>y(x) = e<sup>−A(x)</sup> ( ∫ b(x) e<sup>A(x)</sup> dx + c )</b>, con A(x) una primitiva di a(x).</p>
<p>Il fattore e<sup>A</sup> si chiama <b>fattore integrante</b>: moltiplicando l'equazione per e<sup>A</sup> il primo membro diventa la derivata di (y·e<sup>A</sup>): (y e<sup>A</sup>)′ = b e<sup>A</sup>. Integrando si ottiene la formula.</p>
<p><b>Esempio.</b> y′ + y = x. Qui a = 1 ⇒ A = x. y = e<sup>−x</sup>(∫ x eˣ dx + c) = e<sup>−x</sup>(x eˣ − eˣ + c) = <b>x − 1 + c·e<sup>−x</sup></b>. Verifica: y′ = 1 − ce<sup>−x</sup>, y′ + y = 1 − ce<sup>−x</sup> + x − 1 + ce<sup>−x</sup> = x ✓.</p>
<p>La struttura della soluzione è: <b>soluzione dell'omogenea</b> (c e<sup>−x</sup>) <b>+ una soluzione particolare</b> (x − 1). La parte con e<sup>−x</sup> è un «transitorio» che svanisce; resta il «regime» x − 1.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: risolvere equazioni",
      questions: [
        { type: "mc", q: "La soluzione generale di y′ = 3y è…", options: ["y = C e^(3x)", "y = 3x + C", "y = e^x + 3"], answer: 0, explain: "Separando: dy/y = 3dx ⇒ ln|y| = 3x + c." },
        { type: "num", q: "Risolvi y′ = 2x con y(0) = 1: quanto vale y(3)?", answer: 10, explain: "y = x² + c, con y(0) = 1 ⇒ c = 1; y(3) = 9 + 1 = 10." },
        { type: "mc", q: "L'equazione y′ + 2y = 0 ha soluzione…", options: ["y = C e^(−2x)", "y = C e^(2x)", "y = −2x + C"], answer: 0, explain: "y′ = −2y ⇒ y = Ce^(−2x)." }
      ]
    },
    {
      type: "example",
      title: "Il caffè che si raffredda (legge di Newton)",
      html: `<p>Secondo la <b>legge del raffreddamento di Newton</b> la velocità con cui la temperatura T(t) di un corpo cambia è proporzionale alla differenza con l'ambiente (T<sub>a</sub>): <b>T′ = −k(T − T<sub>a</sub>)</b>, con k &gt; 0.</p>
<p>Posto u = T − T<sub>a</sub>, si ha u′ = −ku ⇒ u = u₀ e<sup>−kt</sup>, quindi <b>T(t) = T<sub>a</sub> + (T₀ − T<sub>a</sub>) e<sup>−kt</sup></b>.</p>
<p>Un caffè a 90 °C in una stanza a 20 °C scende a 60 °C dopo 10 minuti. Allora 40 = 70e<sup>−10k</sup>, e<sup>−10k</sup> = 4/7, k = ln(7/4)/10 ≈ 0,056 min⁻¹. Dopo altri 10 minuti (t = 20): T = 20 + 70·(4/7)² = 20 + 70·16/49 ≈ <b>42,9 °C</b>. La temperatura tende a 20 °C ma non lo raggiunge mai (formalmente). La stessa legge descrive il raffreddamento di un cadavere (usato in medicina legale per stimare l'ora del decesso).</p>`
    },
    {
      type: "example",
      title: "Decadimento radioattivo e datazione al carbonio-14",
      html: `<p>Il numero N di nuclei radioattivi decresce con velocità proporzionale a N: <b>N′ = −λN</b> ⇒ N(t) = N₀ e<sup>−λt</sup>. Il <b>tempo di dimezzamento</b> T½ è quello in cui N si dimezza: e<sup>−λT½</sup> = 1/2 ⇒ <b>T½ = ln 2/λ</b>.</p>
<p>Il carbonio-14 ha T½ ≈ 5 730 anni. Un reperto che contiene il 25 % del ¹⁴C di un organismo vivo ha subìto due dimezzamenti: età ≈ 2 · 5 730 = <b>11 460 anni</b>. Con la formula t = (T½/ln 2)·ln(N₀/N): per N/N₀ = 1/4, t = 5730 · ln 4/ln 2 = 11 460 ✓. La datazione al radiocarbonio, sviluppata da Willard Libby intorno al 1949 (Nobel per la chimica 1960), è usata per reperti fino a circa 50 000 anni.</p>`
    },
    {
      type: "text",
      title: "La caduta con attrito e la velocità limite",
      html: `<p>Un oggetto di massa m cade nell'aria con una resistenza proporzionale alla velocità: F = −kv. Per la seconda legge di Newton m v′ = mg − kv, cioè <b>v′ + (k/m) v = g</b>: equazione lineare. Con v(0) = 0 la soluzione è</p>
<p style="text-align:center"><b>v(t) = (mg/k)(1 − e<sup>−kt/m</sup>)</b></p>
<p>Per t → ∞, v → <b>mg/k</b>: la <b>velocità limite</b>, a cui la forza peso e l'attrito si equilibrano e l'accelerazione si annulla. Spiega perché un paracadutista non accelera all'infinito: cade a circa 50–60 m/s a corpo disteso, e a 5–6 m/s con il paracadute aperto (che aumenta enormemente k).</p>`
    },
    {
      type: "widget",
      title: "Associa fenomeno ed equazione",
      widget: "match",
      options: { pairs: [
        ["Crescita di una popolazione", "y′ = ky"],
        ["Decadimento radioattivo", "N′ = −λN"],
        ["Raffreddamento di Newton", "T′ = −k(T − Tₐ)"],
        ["Caduta libera", "y″ = −g"],
        ["Moto armonico (molla)", "x″ = −ω²x"],
        ["Caduta con attrito", "v′ = g − (k/m)v"]
      ] },
      caption: "Fenomeni molto diversi, stessa struttura matematica: la derivata dipende dal valore della grandezza."
    },
    {
      type: "text",
      title: "Cenni: equazioni del secondo ordine e moto armonico",
      html: `<p>La seconda legge di Newton F = ma, con a = x″, è un'equazione di <b>secondo ordine</b>. Per una massa m attaccata a una molla (forza F = −Kx) si ottiene <b>x″ = −ω²x</b> con ω = √(K/m). Le funzioni sen ωt e cos ωt la risolvono (derivandole due volte si ottiene −ω² per se stesse), quindi la soluzione generale è</p>
<p style="text-align:center"><b>x(t) = A cos(ωt) + B sen(ωt)</b></p>
<p>con due costanti, determinate da posizione e velocità iniziali. È il <b>moto armonico</b>: periodo T = 2π/ω. Se si aggiunge un attrito si ha un'oscillazione smorzata; con una forza esterna periodica nascono i fenomeni di <b>risonanza</b>.</p>
<p>Un altro modello celebre è quello <b>logistico</b>: P′ = rP(1 − P/M): la popolazione cresce quasi esponenzialmente ma si stabilizza al valore massimo sostenibile M. Fu proposto da Pierre-François Verhulst (1838) per correggere il modello di Malthus.</p>`
    },
    {
      type: "curiosity",
      title: "Malthus e il limite della crescita",
      html: `<p>Nel 1798 l'economista Thomas Malthus osservò che una popolazione cresce in modo esponenziale (y′ = ky) mentre le risorse crescono linearmente. L'equazione y′ = ky è però irrealistica per tempi lunghi: dopo 20 raddoppi il numero di individui è moltiplicato per più di un milione. Per questo i modelli reali (logistico di Verhulst) includono un fattore di saturazione. Lo stesso accade per le epidemie: all'inizio la diffusione è esponenziale, poi i suscettibili diminuiscono e la curva si appiattisce.</p>`
    },
    {
      type: "curiosity",
      title: "Il pianeta scoperto con le equazioni",
      html: `<p>Nel 1846 Urbain Le Verrier e John Couch Adams, studiando le anomalie del moto di Urano con le equazioni differenziali della meccanica newtoniana, previdero l'esistenza e la posizione di un nuovo pianeta. Johann Galle lo osservò al telescopio la sera stessa in cui ricevette la lettera di Le Verrier: era <b>Nettuno</b>. Fu uno dei grandi trionfi della fisica matematica.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le equazioni differenziali",
      intro: "Se i simboli sembrano astratti, guarda le equazioni differenziali come regole del moto o come mappe di pendenze.",
      tabs: [
        {
          label: "🧭 Il campo delle direzioni",
          html: `<p>Un'equazione y′ = f(x, y) assegna a <b>ogni punto</b> del piano una pendenza: è come una mappa piena di piccole freccette che dicono «da qui, vai in questa direzione». Una soluzione è una curva che <b>segue le frecce</b> come una barchetta che segue la corrente. Per y′ = y le frecce sono più ripide dove y è più grande: le curve-soluzione sono esponenziali y = Ce^x. La condizione iniziale dice da dove parte la barchetta; per il teorema di Cauchy due barchette che partono da punti diversi non si incontrano mai.</p>`
        },
        {
          label: "🔢 Il metodo di Eulero",
          html: `<p>Se non sai risolvere l'equazione, puoi seguire le frecce a piccoli passi: dato (xₙ, yₙ), il punto successivo è (xₙ + h, yₙ + h·f(xₙ, yₙ)). Per y′ = y, y(0) = 1, con h = 0,1 si ottiene y₁ = 1,1; y₂ = 1,21; y₃ = 1,331; … e y₁₀ ≈ 2,594, contro il valore esatto e ≈ 2,718. Riducendo h l'errore diminuisce. Questo metodo (Eulero, 1768) è la base dei programmi di simulazione numerica per meteo, aerei e circuiti.</p>`
        },
        {
          label: "🏦 Il conto in banca",
          html: `<p>Un conto con tasso annuo k a capitalizzazione continua soddisfa C′ = kC: gli interessi che maturano in ogni istante sono proporzionali al capitale. Con k = 5 %, C(t) = C₀e^(0,05t). Dopo 14 anni C ≈ 2,01·C₀: il capitale raddoppia circa ogni ln2/0,05 ≈ 13,9 anni (la «regola del 70»: tempo di raddoppio ≈ 70/tasso%). Se aggiungi versamenti costanti S ogni anno hai C′ = kC + S: lineare, risolvibile con la formula vista.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle equazioni differenziali",
      nodes: [
        { id: "mod", label: "Modelli del mondo", x: 50, y: 6, color: "#6366f1", html: "Leggi che legano una grandezza alla sua velocità di variazione.", why: "Newton (1687) formulò la meccanica come equazioni differenziali: dalla posizione iniziale e dalle forze si prevede il moto." },
        { id: "def", label: "Equazione, ordine, soluzione", x: 20, y: 28, color: "#16a34a", html: "Incognita = funzione; ordine = derivata più alta; soluzione = funzione che verifica l'equazione.", why: "A differenza delle equazioni algebriche, le soluzioni sono funzioni, e una famiglia infinita (una costante per ordine)." },
        { id: "cau", label: "Problema di Cauchy", x: 80, y: 28, color: "#f59e0b", html: "Equazione + condizioni iniziali ⇒ soluzione unica.", why: "Se conosci lo stato iniziale la legge fisica determina il futuro: è il determinismo di Laplace." },
        { id: "sep", label: "Variabili separabili", x: 15, y: 55, color: "#0ea5e9", html: "y′ = g(x)h(y): si separa e si integra.", why: "Si riduce al calcolo di due integrali: è il metodo dei fratelli Bernoulli e di Leibniz." },
        { id: "lin", label: "Lineari del 1° ordine", x: 50, y: 55, color: "#a855f7", html: "y′ + a(x)y = b(x): fattore integrante.", why: "Il fattore integrante e^A fa diventare il primo membro una derivata esatta: si «integra direttamente»." },
        { id: "sec", label: "2° ordine e moto armonico", x: 85, y: 55, color: "#ef4444", html: "x″ = −ω²x ⇒ sen e cos.", why: "Descrive molle, pendoli, circuiti LC, onde." },
        { id: "app", label: "Applicazioni", x: 50, y: 88, color: "#14b8a6", html: "Raffreddamento, radioattività, popolazioni, caduta con attrito.", why: "Stessa matematica per fenomeni diversi: esponenziale e saturazione ricorrono ovunque." }
      ],
      edges: [
        ["mod", "def", "si scrivono come"],
        ["def", "cau", "si completa con"],
        ["def", "sep", "caso"],
        ["def", "lin", "caso"],
        ["def", "sec", "generalizza a"],
        ["sep", "app", "applicazioni"],
        ["lin", "app", "applicazioni"],
        ["sec", "app", "applicazioni"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>y′ = ky</b> ⇒ y = y₀e^(kt) (crescita/decadimento esponenziale). Tempo di dimezzamento T½ = ln 2/λ.</li>
<li><b>Separabili</b> y′ = g(x)h(y): dy/h(y) = g(x)dx, poi si integra.</li>
<li><b>Lineari</b> y′ + a y = b: y = e<sup>−A</sup>(∫ b e<sup>A</sup> dx + c).</li>
<li>Raffreddamento: T = Tₐ + (T₀ − Tₐ)e^(−kt). Caduta con attrito: v → mg/k.</li>
<li>Problema di Cauchy: equazione + condizione iniziale ⇒ soluzione particolare.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: applicazioni",
      questions: [
        { type: "num", q: "Una popolazione di batteri raddoppia ogni 3 ore. Partendo da 100, quanti sono dopo 9 ore?", answer: 800, explain: "9 ore = 3 raddoppi: 100 · 2³ = 800." },
        { type: "num", q: "Il carbonio-14 ha T½ = 5 730 anni. Quanta frazione ne resta dopo 11 460 anni? (in percentuale)", answer: 25, unit: "%", explain: "Due dimezzamenti: 1/4 = 25 %." },
        { type: "mc", q: "In un raffreddamento di Newton la temperatura finale tende…", options: ["alla temperatura ambiente", "a 0 °C", "all'infinito"], answer: 0, explain: "T = Tₐ + (T₀ − Tₐ)e^(−kt) → Tₐ." }
      ]
    }
  ],
  glossary: [
    { t: "Equazione differenziale", d: "Equazione la cui incognita è una funzione e che contiene le sue derivate." },
    { t: "Ordine", d: "Ordine della derivata più alta presente nell'equazione." },
    { t: "Problema di Cauchy", d: "Equazione differenziale con condizioni iniziali: ha (di norma) una sola soluzione." },
    { t: "Variabili separabili", d: "Equazione y′ = g(x)h(y): si risolve separando le variabili." },
    { t: "Fattore integrante", d: "Funzione e^A che permette di risolvere un'equazione lineare." },
    { t: "Tempo di dimezzamento", d: "Tempo necessario affinché una quantità radioattiva si riduca della metà." },
    { t: "Velocità limite", d: "Velocità a cui forza peso e attrito si equilibrano: mg/k." },
    { t: "Moto armonico", d: "Soluzione di x″ = −ω²x: oscillazione sinusoidale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "La soluzione generale di y′ = 2x è…", options: ["y = x² + c", "y = 2 + c", "y = e^(2x) + c"], answer: 0, explain: "Si integra: ∫ 2x dx." },
      { type: "mc", q: "La soluzione generale di y′ = −4y è…", options: ["y = Ce^(−4x)", "y = −4x + C", "y = Ce^(4x)"], answer: 0, explain: "Equazione y′ = ky con k = −4." },
      { type: "num", q: "Risolvi y′ = 2y, y(0) = 5: quanto vale y(0) (verifica del problema di Cauchy)?", answer: 5, explain: "y = 5e^(2x), dunque y(0) = 5." },
      { type: "mc", q: "La soluzione di y′ = 2xy, con y(0) = 1, è…", options: ["y = e^(x²)", "y = x²", "y = e^(2x)"], answer: 0, explain: "dy/y = 2x dx ⇒ ln y = x² + c; y(0) = 1 ⇒ c = 0." },
      { type: "mc", q: "La soluzione generale di y′ + y = x è…", options: ["y = x − 1 + Ce^(−x)", "y = x + Ce^(−x)", "y = x − 1 + Ce^x"], answer: 0, explain: "Verifica per sostituzione." },
      { type: "num", q: "Un oggetto cade con attrito: m = 2 kg, k = 4 kg/s, g = 10 m/s². Qual è la velocità limite in m/s?", answer: 5, unit: "m/s", explain: "v_lim = mg/k = 2 · 10/4 = 5 m/s." },
      { type: "tf", q: "Il decadimento radioattivo ha velocità costante nel tempo (cioè N′ è costante).", answer: false, explain: "N′ = −λN: la velocità di decadimento è proporzionale ai nuclei rimasti." },
      { type: "num", q: "Il tempo di dimezzamento di una sostanza è 8 giorni. Dopo 24 giorni ne resta una frazione 1/n del totale: quanto vale n?", answer: 8, explain: "24 giorni = 3 dimezzamenti: (1/2)³ = 1/8." },
      { type: "mc", q: "L'equazione x″ = −ω²x descrive…", options: ["un moto armonico", "un decadimento", "una crescita esponenziale"], answer: 0, explain: "Le soluzioni sono sen ωt e cos ωt." },
      { type: "order", q: "Ordina i passi per risolvere y′ = g(x)h(y).", items: ["Scrivere y′ = dy/dx", "Separare: dy/h(y) = g(x) dx", "Integrare entrambi i membri", "Ricavare y e usare la condizione iniziale"], explain: "Attenzione alle soluzioni costanti con h(y) = 0." }
    ]
  }
});

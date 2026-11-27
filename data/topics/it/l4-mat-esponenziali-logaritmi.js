TOPIC('it', {
  id: "l4-mat-esponenziali-logaritmi",
  title: "Esponenziali e logaritmi",
  intro: "Un virus che si diffonde, i soldi in un conto con interessi composti, un materiale radioattivo che si dimezza, un video che diventa virale: in tutti questi casi la grandezza <b>non cresce di una quantità fissa</b>, ma <b>di una percentuale fissa</b>. È la crescita <b>esponenziale</b>, che parte lenta e poi esplode. Il suo \"inverso\", il <b>logaritmo</b>, risponde invece alla domanda: <i>«quanto tempo (o quale esponente) ci vuole per arrivare a questo valore?»</i>. Studiamo le due funzioni, le loro proprietà, i grafici e le equazioni e disequazioni che le contengono: ti serviranno in fisica, chimica (pH), informatica e in tutta l'analisi.",
  minutes: 70,
  sections: [
    {
      type: "text",
      title: "La funzione esponenziale",
      html: `<p>Fissato un numero reale <b>a &gt; 0, a ≠ 1</b> (la <b>base</b>), la <b>funzione esponenziale</b> è <b>y = aˣ</b>, con x variabile al <b>posto dell'esponente</b>. Il significato si estende dai numeri naturali (a³ = a · a · a), agli interi (a⁻ⁿ = 1/aⁿ), ai razionali (a^(m/n) = ⁿ√(aᵐ)) e, per continuità, a tutti i reali. Le proprietà delle potenze valgono ancora:</p>
<ul>
<li>aˣ · aʸ = aˣ⁺ʸ &nbsp;&nbsp; aˣ / aʸ = aˣ⁻ʸ &nbsp;&nbsp; (aˣ)ʸ = aˣʸ &nbsp;&nbsp; (ab)ˣ = aˣ bˣ</li>
</ul>
<p><b>Caratteristiche del grafico di y = aˣ:</b></p>
<ul>
<li><b>Dominio</b> ℝ; <b>immagine</b> (0, +∞): aˣ è <b>sempre positivo</b>.</li>
<li>Passa per <b>(0, 1)</b> (perché a⁰ = 1) e per (1, a).</li>
<li>Se <b>a &gt; 1</b> è <b>crescente</b>: per x → +∞ cresce senza limite, per x → −∞ si avvicina a 0. Se <b>0 &lt; a &lt; 1</b> è <b>decrescente</b> (è il riflesso rispetto all'asse y, perché (1/a)ˣ = a⁻ˣ).</li>
<li>L'asse x (<b>y = 0</b>) è un <b>asintoto orizzontale</b>: la curva si avvicina ma non lo tocca mai.</li>
<li>È <b>strettamente monotona</b>, quindi <b>iniettiva</b> e invertibile: la sua inversa è il logaritmo.</li>
</ul>
<p><b>Il numero di Nepero e.</b> Tra tutte le basi ce n'è una speciale: <b>e ≈ 2,71828…</b>, un numero irrazionale e trascendente, definito come limite di (1 + 1/n)ⁿ per n → ∞. Si chiama funzione esponenziale naturale y = eˣ: nell'analisi ha la proprietà unica di essere uguale alla propria derivata. Per questo è la base "naturale" dei fenomeni di crescita e decadimento continui.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i soldi che si moltiplicano",
      html: `<p>Depositi 1000 € in un conto con interesse composto annuo del 3%. Dopo 1 anno hai 1000 · 1,03 = 1030 €; dopo 2 anni 1000 · 1,03² = 1060,90 €; dopo t anni <b>C(t) = 1000 · 1,03ᵗ</b>. È una funzione esponenziale con base 1,03: ogni anno il capitale è moltiplicato per lo stesso fattore. Dopo 20 anni: 1000 · 1,03²⁰ ≈ 1806 €, quasi il doppio. L'interesse semplice (30 € all'anno) darebbe solo 1600 €: la differenza è l'«interesse sugli interessi». Con i logaritmi calcoleremo anche <b>quando</b> il capitale raddoppia.</p>`
    },
    {
      type: "svg",
      title: "Esponenziale e logaritmo: due grafici simmetrici",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="220" x2="380" y2="220" stroke="#475569" stroke-width="2"/>
<line x1="130" y1="290" x2="130" y2="10" stroke="#475569" stroke-width="2"/>
<line x1="90" y1="260" x2="338" y2="12" stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"/>
<polyline points="30.0,212.9 33.9,212.4 37.8,211.9 41.8,211.3 45.7,210.7 49.6,210.1 53.5,209.4 57.4,208.6 61.4,207.8 65.3,207.0 69.2,206.1 73.1,205.1 77.0,204.0 81.0,202.9 84.9,201.7 88.8,200.4 92.7,199.0 96.6,197.6 100.6,196.0 104.5,194.3 108.4,192.5 112.3,190.6 116.2,188.5 120.2,186.3 124.1,183.9 128.0,181.4 131.9,178.6 135.8,175.7 139.8,172.6 143.7,169.3 147.6,165.7 151.5,161.9 155.4,157.8 159.4,153.5 163.3,148.8 167.2,143.8 171.1,138.4 175.0,132.7 179.0,126.6 182.9,120.0 186.8,113.0 190.7,105.4 194.6,97.4 198.6,88.8 202.5,79.5 206.4,69.7 210.3,59.1 214.2,47.8 218.2,35.7 222.1,22.7 226.0,8.9" fill="none" stroke="#2563eb" stroke-width="4"/>
<polyline points="144.0,280.6 146.6,270.8 149.2,262.5 151.7,255.2 154.3,248.8 156.9,242.9 159.4,237.7 162.0,232.8 164.6,228.4 167.2,224.2 169.8,220.4 172.3,216.7 174.9,213.3 177.5,210.1 180.1,207.1 182.6,204.2 185.2,201.4 187.8,198.8 190.3,196.3 192.9,193.9 195.5,191.5 198.1,189.3 200.7,187.2 203.2,185.1 205.8,183.1 208.4,181.2 210.9,179.3 213.5,177.5 216.1,175.8 218.7,174.1 221.3,172.4 223.8,170.8 226.4,169.2 229.0,167.7 231.6,166.2 234.1,164.8 236.7,163.4 239.3,162.0 241.8,160.7 244.4,159.3 247.0,158.1 249.6,156.8 252.2,155.6 254.7,154.4 257.3,153.2 259.9,152.0 262.4,150.9 265.0,149.8 267.6,148.7 270.2,147.6 272.8,146.6 275.3,145.6 277.9,144.5 280.5,143.5 283.1,142.6 285.6,141.6 288.2,140.7 290.8,139.7 293.4,138.8 295.9,137.9 298.5,137.0 301.1,136.1 303.6,135.3 306.2,134.4 308.8,133.6 311.4,132.8 313.9,132.0 316.5,131.1 319.1,130.4 321.7,129.6 324.3,128.8 326.8,128.0 329.4,127.3 332.0,126.6 334.6,125.8 337.1,125.1 339.7,124.4 342.3,123.7 344.9,123.0 347.4,122.3 350.0,121.6" fill="none" stroke="#ea580c" stroke-width="4"/>
<circle cx="130" cy="180" r="5" fill="#1d4ed8"/>
<circle cx="170" cy="220" r="5" fill="#9a3412"/>
<text x="136" y="172" font-size="14" fill="#1d4ed8" font-weight="bold">(0; 1)</text>
<text x="160" y="240" font-size="14" fill="#9a3412" font-weight="bold">(1; 0)</text>
<text x="210" y="60" font-size="16" fill="#1d4ed8" font-weight="bold">y = 2ˣ</text>
<text x="300" y="165" font-size="16" fill="#9a3412" font-weight="bold">y = log₂ x</text>
<text x="280" y="42" font-size="14" fill="#475569">y = x</text>
<text x="400" y="70" font-size="15" fill="#334155" font-weight="bold">Esponenziale a &gt; 1</text>
<text x="400" y="92" font-size="15" fill="#334155">dominio ℝ, immagine (0; +∞)</text>
<text x="400" y="114" font-size="15" fill="#334155">asintoto: y = 0</text>
<text x="400" y="154" font-size="15" fill="#334155" font-weight="bold">Logaritmo a &gt; 1</text>
<text x="400" y="176" font-size="15" fill="#334155">dominio (0; +∞), immagine ℝ</text>
<text x="400" y="198" font-size="15" fill="#334155">asintoto: x = 0</text>
<text x="400" y="250" font-size="15" fill="#334155">I grafici si scambiano</text>
<text x="400" y="272" font-size="15" fill="#334155">con la simmetria su y = x</text>
</svg>`,
      caption: "La funzione logaritmo è l'inversa dell'esponenziale: i due grafici sono simmetrici rispetto alla bisettrice y = x. Per questo l'asintoto orizzontale dell'uno diventa l'asintoto verticale dell'altro."
    },
    {
      type: "text",
      title: "Il logaritmo",
      html: `<p>Poiché aˣ è biettiva da ℝ a (0, +∞), per ogni numero <b>b &gt; 0</b> esiste un unico x tale che aˣ = b. Quel numero si chiama <b>logaritmo in base a di b</b>:</p>
<p style="text-align:center"><b>logₐ b = x ⟺ aˣ = b</b> &nbsp;&nbsp; (a &gt; 0, a ≠ 1, b &gt; 0)</p>
<p>In parole: il logaritmo di b in base a è <b>l'esponente</b> a cui elevare a per ottenere b. Esempi: log₂ 8 = 3 (2³ = 8); log₁₀ 1000 = 3; log₃ (1/9) = −2 (3⁻² = 1/9); log₅ 1 = 0.</p>
<p>Conseguenze immediate: <b>logₐ 1 = 0</b>, <b>logₐ a = 1</b>, <b>a^(logₐ b) = b</b> e <b>logₐ (aˣ) = x</b> (esponenziale e logaritmo si "annullano"). I logaritmi di <b>numeri negativi o nulli non esistono</b>: aˣ è sempre positivo.</p>
<p>Le basi più usate: <b>10</b> (logaritmi decimali, log x o Log x) e <b>e</b> (logaritmi naturali, ln x). Sulle calcolatrici ci sono i tasti "log" e "ln".</p>
<p><b>Proprietà</b> (con a &gt; 0, a ≠ 1 e argomenti positivi):</p>
<ul>
<li><b>logₐ (b · c) = logₐ b + logₐ c</b> (il logaritmo trasforma i prodotti in somme)</li>
<li><b>logₐ (b / c) = logₐ b − logₐ c</b></li>
<li><b>logₐ (bⁿ) = n · logₐ b</b></li>
<li><b>Cambiamento di base:</b> logₐ b = log_c b / log_c a (con c &gt; 0, c ≠ 1)</li>
</ul>
<p><b>Attenzione agli errori tipici</b>: logₐ(b + c) <b>non</b> è logₐ b + logₐ c; (logₐ b)ⁿ non è n logₐ b. <b>Esempio.</b> log₂ 12 + log₂ (2/3) = log₂ (12 · 2/3) = log₂ 8 = 3. <b>Cambio di base:</b> log₃ 7 = ln 7/ln 3 ≈ 1,9459/1,0986 ≈ 1,771.</p>
<p>Il grafico di y = logₐ x ha: dominio (0, +∞), immagine ℝ, passa per (1, 0) e (a, 1); è crescente per a &gt; 1 e decrescente per 0 &lt; a &lt; 1; ha l'asse y (x = 0) come asintoto verticale.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: funzioni e proprietà",
      questions: [
        { type: "num", q: "Quanto vale log₂ 32?", answer: 5, explain: "2⁵ = 32, quindi il logaritmo è 5." },
        { type: "mc", q: "Qual è l'immagine della funzione y = 3ˣ?", options: ["ℝ", "(0, +∞)", "[1, +∞)"], answer: 1, explain: "Una potenza di base positiva è sempre positiva e assume tutti i valori positivi." },
        { type: "tf", q: "log₁₀ (100 + 10) = log₁₀ 100 + log₁₀ 10.", answer: false, explain: "Il logaritmo trasforma i prodotti in somme, non le somme: log(100 · 10) = 2 + 1 = 3." },
        { type: "mc", q: "log₃ 5 + log₃ 2 è uguale a…", options: ["log₃ 10", "log₃ 7", "log₃ 3"], answer: 0, explain: "La somma di logaritmi di pari base è il logaritmo del prodotto: log₃(5 · 2) = log₃ 10." }
      ]
    },
    {
      type: "text",
      title: "Equazioni esponenziali",
      html: `<p>Un'equazione è <b>esponenziale</b> se l'incognita compare all'esponente. I casi principali:</p>
<p><b>1. Stessa base.</b> aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ ⟹ <b>f(x) = g(x)</b> (l'esponenziale è iniettiva). <i>Esempio:</i> 4ˣ⁺¹ = 8ˣ → 2²ˣ⁺² = 2³ˣ → 2x + 2 = 3x → x = 2.</p>
<p><b>2. Si porta a una forma aˣ = b con b &gt; 0.</b> Se b si scrive come potenza di a, come sopra; altrimenti si passa ai <b>logaritmi</b>: x = logₐ b. <i>Esempio:</i> 3ˣ = 7 → x = log₃ 7 = ln 7 / ln 3 ≈ 1,77. Se b ≤ 0, l'equazione è <b>impossibile</b> (2ˣ = −4 non ha soluzioni).</p>
<p><b>3. Sostituzione.</b> Se compaiono aˣ e a²ˣ, si pone t = aˣ (ricordando t &gt; 0!). <i>Esempio:</i> 4ˣ − 3 · 2ˣ + 2 = 0. Con t = 2ˣ: t² − 3t + 2 = 0 → t = 1 oppure t = 2 → 2ˣ = 1 → x = 0; 2ˣ = 2 → x = 1. Se una soluzione dell'equazione in t fosse negativa o nulla, andrebbe scartata.</p>
<p><b>4. Basi diverse.</b> Si prende il logaritmo di entrambi i membri. <i>Esempio:</i> 2ˣ = 3ˣ⁻¹ → x ln 2 = (x − 1) ln 3 → x (ln 2 − ln 3) = −ln 3 → x = ln 3 / (ln 3 − ln 2) ≈ 2,71.</p>`
    },
    {
      type: "text",
      title: "Equazioni logaritmiche e condizioni di esistenza",
      html: `<p>Un'equazione è <b>logaritmica</b> se l'incognita compare nell'argomento di un logaritmo. Il punto più importante è la <b>condizione di esistenza (CE)</b>: ogni argomento deve essere <b>strettamente positivo</b>. Le soluzioni trovate vanno controllate con le CE: quelle che non le rispettano si <b>scartano</b>.</p>
<p><b>Tipi di equazione:</b></p>
<ul>
<li><b>logₐ f(x) = logₐ g(x)</b> ⟹ f(x) = g(x), con f &gt; 0 e g &gt; 0 (basta una delle due, perché sono uguali).</li>
<li><b>logₐ f(x) = k</b> ⟹ f(x) = aᵏ, con f &gt; 0 (basta già).</li>
<li><b>Con sostituzione</b>: (log x)² − 3 log x + 2 = 0 → t = log x → t = 1, 2 → x = 10, 100.</li>
</ul>
<p><b>Esempio.</b> log₂ (x + 1) + log₂ (x − 1) = 3. Condizioni: x + 1 &gt; 0 e x − 1 &gt; 0, cioè <b>x &gt; 1</b>. Per la proprietà del prodotto: log₂ [(x + 1)(x − 1)] = 3 → x² − 1 = 2³ = 8 → x² = 9 → x = ± 3. Solo x = 3 è maggiore di 1: <b>soluzione x = 3</b>. Verifica: log₂ 4 + log₂ 2 = 2 + 1 = 3 ✓. La soluzione −3 sembra legittima algebricamente, ma log₂(−2) non esiste!</p>
<p><b>Esempio con la scala del pH.</b> Il pH è definito come −log₁₀ [H⁺], con la concentrazione in mol/L. Un pH di 3 corrisponde a [H⁺] = 10⁻³ mol/L, un pH di 5 a 10⁻⁵ mol/L: ogni unità di pH è un fattore 10 in concentrazione. Una soluzione con pH 3 è quindi 100 volte più acida di una con pH 5.</p>`
    },
    {
      type: "text",
      title: "Disequazioni esponenziali e logaritmiche",
      html: `<p>La regola fondamentale riguarda la <b>monotonia</b>:</p>
<ul>
<li>se la base è <b>maggiore di 1</b> le funzioni sono <b>crescenti</b>: la disuguaglianza <b>mantiene</b> il verso;</li>
<li>se la base è <b>tra 0 e 1</b> sono <b>decrescenti</b>: la disuguaglianza <b>si inverte</b>.</li>
</ul>
<p><b>Esempi.</b></p>
<ul>
<li>2ˣ &gt; 8 → 2ˣ &gt; 2³ → <b>x &gt; 3</b> (base 2 &gt; 1: verso mantenuto).</li>
<li>(1/2)ˣ &gt; 8 → (1/2)ˣ &gt; (1/2)⁻³ → <b>x &lt; −3</b> (base &lt; 1: verso invertito).</li>
<li>log₂ (x − 1) &lt; 3 → 0 &lt; x − 1 &lt; 2³ → <b>1 &lt; x &lt; 9</b> (la CE x − 1 &gt; 0 va messa a sistema).</li>
<li>log_{1/2} x &gt; 2 → 0 &lt; x &lt; (1/2)² → <b>0 &lt; x &lt; 1/4</b>.</li>
<li>4ˣ − 3 · 2ˣ + 2 &lt; 0 → (t − 1)(t − 2) &lt; 0 con t = 2ˣ → 1 &lt; t &lt; 2 → 0 &lt; x &lt; 1.</li>
</ul>
<p>Per le disequazioni logaritmiche si impone sempre il <b>sistema</b> tra la CE (argomento positivo) e la disequazione ottenuta trasformando entrambi i membri in logaritmi della stessa base.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: l'età di un reperto con il carbonio-14",
      html: `<p>Il carbonio-14 ha un tempo di dimezzamento di circa 5730 anni: dopo ogni 5730 anni ne resta la metà. La quantità residua è N(t) = N₀ · (1/2)^(t/5730). Se un reperto di legno ha ancora il 25% del C-14 iniziale, (1/2)^(t/5730) = 1/4 = (1/2)² → t/5730 = 2 → t = 11 460 anni. Se ne ha il 10%: (1/2)^(t/5730) = 0,1 → t = 5730 · log₂ 10 ≈ 5730 · 3,32 ≈ <b>19 000 anni</b>. Ecco il lavoro dei logaritmi: ricavare un <b>tempo</b> dall'esponente. Il metodo funziona fino a circa 50 000 anni, oltre i quali il C-14 residuo è troppo poco da misurare.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: quando il capitale raddoppia",
      html: `<p>Con interesse composto al 3% annuo, dopo quanti anni un capitale C raddoppia? Si risolve 1,03ᵗ = 2 → t = ln 2 / ln 1,03 = 0,6931 / 0,02956 ≈ <b>23,4 anni</b>. Regola pratica (la "regola del 72"): il tempo di raddoppio in anni è circa 72 diviso il tasso percentuale: 72/3 = 24 anni. Con il 6% bastano circa 12 anni. Stessa matematica per una popolazione di batteri che raddoppia ogni 20 minuti: dopo 10 ore (30 raddoppi) saranno 2³⁰ ≈ 10⁹ volte di più.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Piegare un foglio 42 volte",
      html: `<p>Un foglio di carta spesso 0,1 mm, piegato a metà 42 volte, avrebbe uno spessore di 0,1 mm · 2⁴² ≈ 0,1 mm · 4,4 · 10¹² ≈ <b>440 000 km</b>: più della distanza Terra-Luna (circa 384 000 km)! Naturalmente non è fisicamente possibile piegarlo così tante volte (il record per un foglio comune è intorno a 12 piegature), ma il calcolo mostra come la crescita esponenziale superi sempre l'intuizione. Per lo stesso motivo un contagio che sembra "sotto controllo" può sfuggire di mano in pochi giorni.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Dai logaritmi di Nepero al regolo",
      html: `<p>I logaritmi furono introdotti da <b>John Napier</b> (Nepero), scozzese, nel <i>Mirifici logarithmorum canonis descriptio</i> del <b>1614</b>, per semplificare i calcoli degli astronomi: trasformare moltiplicazioni lunghe in somme. <b>Henry Briggs</b> sviluppò poi i logaritmi decimali. Per tre secoli le tavole dei logaritmi e il <b>regolo calcolatore</b> (una coppia di scale logaritmiche scorrevoli) furono gli strumenti di calcolo di scienziati e ingegneri, fino alle calcolatrici tascabili degli anni Settanta. Il simbolo <b>e</b> per la base naturale fu introdotto da <b>Eulero</b>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire esponenziali e logaritmi",
      intro: "Il logaritmo è spesso l'argomento più ostico del liceo: proviamo a vederlo in altri modi.",
      tabs: [
        {
          label: "❓ La domanda del logaritmo",
          html: `<p>Il logaritmo è una <b>domanda</b>: «a quale esponente devo elevare la base per ottenere questo numero?». log₂ 8 si legge: «2 elevato a che cosa dà 8?». Risposta: 3. Quindi log₂ 8 = 3 e 2³ = 8 sono la <b>stessa frase</b> scritta in due modi. Quando devi risolvere 5ˣ = 20, la domanda è «5 elevato a che cosa fa 20?», cioè x = log₅ 20 ≈ 1,86 (5¹ = 5, 5² = 25: sta tra 1 e 2, come deve essere!).</p>`
        },
        {
          label: "🎹 La scala musicale",
          html: `<p>Il nostro orecchio percepisce le altezze dei suoni con una scala <b>logaritmica</b>: salire di un'ottava significa <b>raddoppiare</b> la frequenza (il La a 440 Hz, l'ottava sopra a 880 Hz, quella sopra a 1760 Hz). Nel temperamento equabile ogni semitono moltiplica la frequenza per 2^(1/12) ≈ 1,0595: dodici semitoni = 2 (un'ottava). Anche i decibel (L = 10 log₁₀ (I/I₀)) e la scala Richter sono scale logaritmiche: un sisma di magnitudo 7 è circa 10 volte più ampio di uno di magnitudo 6 (e libera circa 32 volte più energia).</p>`
        },
        {
          label: "🏷️ Crescente o decrescente?",
          html: `<p>Sposta ciascuna funzione nel gruppo giusto. Ricorda: se la base è maggiore di 1 la funzione cresce, se è minore di 1 (ma positiva) decresce.</p>`,
          widget: "classify",
          options: { groups: ["Crescente", "Decrescente"], items: [["2ˣ", 0], ["(1/3)ˣ", 1], ["10ˣ", 0], ["(0,5)ˣ", 1], ["eˣ", 0], ["log₂ x", 0], ["log_{1/2} x", 1]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di esponenziali e logaritmi",
      nodes: [
        { id: "pot", label: "Potenze", x: 15, y: 10, color: "#6366f1", html: "aⁿ, con esponente intero, razionale e poi reale.", why: "L'estensione dell'esponente avviene mantenendo le proprietà aˣ aʸ = aˣ⁺ʸ; per i reali si usa la continuità." },
        { id: "exp", label: "Funzione esponenziale", x: 85, y: 10, color: "#16a34a", html: "y = aˣ: sempre positiva, crescente se a &gt; 1, asintoto y = 0.", why: "Descrive i processi in cui la variazione è proporzionale al valore attuale (crescita di popolazioni, interessi, decadimento radioattivo)." },
        { id: "log", label: "Logaritmo", x: 50, y: 42, color: "#f59e0b", html: "logₐ b = x ⟺ aˣ = b; dominio (0, +∞).", why: "È l'inversa dell'esponenziale, resa possibile dalla sua biettività. Napier (1614) lo inventò per trasformare prodotti in somme." },
        { id: "prop", label: "Proprietà dei logaritmi", x: 15, y: 72, color: "#ef4444", html: "Logaritmo del prodotto, del quoziente, della potenza; cambiamento di base.", why: "Derivano direttamente dalle proprietà delle potenze: aˣ aʸ = aˣ⁺ʸ diventa logaritmo del prodotto = somma dei logaritmi." },
        { id: "eq", label: "Equazioni e disequazioni", x: 85, y: 72, color: "#0ea5e9", html: "Stessa base, sostituzione, logaritmi; CE; monotonia.", why: "Iniettività: aˣ = aʸ ⟹ x = y. Monotonia: per a &gt; 1 il verso resta, per a &lt; 1 si inverte." },
        { id: "app", label: "Applicazioni", x: 50, y: 92, color: "#a855f7", html: "Interessi, radioattività, pH, decibel, Richter, informatica.", why: "Quando una grandezza varia in modo proporzionale a se stessa, la sua evoluzione è esponenziale; il logaritmo permette di ricavare il tempo." }
      ],
      edges: [
        ["pot", "exp", "si estende a"],
        ["exp", "log", "inversa"],
        ["log", "prop", "ha"],
        ["exp", "eq", "ha"],
        ["log", "eq", "ha"],
        ["eq", "app", "serve a"],
        ["prop", "app", "serve a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: equazioni e disequazioni",
      questions: [
        { type: "num", q: "Risolvi 2ˣ = 64.", answer: 6, explain: "64 = 2⁶, quindi x = 6." },
        { type: "mc", q: "Risolvi (1/3)ˣ &lt; 1/9.", options: ["x &gt; 2", "x &lt; 2", "x &gt; −2"], answer: 0, explain: "(1/3)ˣ &lt; (1/3)². La base è minore di 1: il verso si inverte, x &gt; 2." },
        { type: "tf", q: "L'equazione log₂ x = −3 ha come soluzione x = 1/8.", answer: true, explain: "x = 2⁻³ = 1/8, che è positivo." }
      ]
    }
  ],
  glossary: [
    { t: "Funzione esponenziale", d: "y = aˣ con a &gt; 0, a ≠ 1: la variabile è all'esponente." },
    { t: "Logaritmo", d: "logₐ b è l'esponente a cui elevare a per ottenere b (b &gt; 0)." },
    { t: "Base", d: "Il numero a che viene elevato a potenza (o la base del logaritmo)." },
    { t: "Numero di Nepero e", d: "e ≈ 2,71828, base dei logaritmi naturali; limite di (1 + 1/n)ⁿ." },
    { t: "Logaritmo naturale", d: "Logaritmo in base e, indicato con ln." },
    { t: "Asintoto", d: "Retta a cui il grafico si avvicina indefinitamente senza toccarla." },
    { t: "Condizione di esistenza", d: "Requisito (ad esempio argomento del logaritmo &gt; 0) che le soluzioni devono rispettare." },
    { t: "Cambiamento di base", d: "logₐ b = log_c b / log_c a." },
    { t: "Tempo di dimezzamento", d: "Tempo dopo il quale una quantità radioattiva si riduce alla metà." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Quanto vale log₃ 81?", answer: 4, explain: "3⁴ = 81." },
      { type: "mc", q: "Il dominio di y = log₂ (x − 3) è…", options: ["x &gt; 3", "x ≥ 3", "x &gt; 0"], answer: 0, explain: "L'argomento deve essere strettamente positivo: x − 3 &gt; 0." },
      { type: "tf", q: "log₂ 8 + log₂ 4 = log₂ 12.", answer: false, explain: "La somma dei logaritmi è il logaritmo del prodotto: 3 + 2 = 5 = log₂ 32." },
      { type: "mc", q: "Risolvi 9ˣ = 27.", options: ["x = 3/2", "x = 3", "x = 2/3"], answer: 0, explain: "3²ˣ = 3³ → 2x = 3 → x = 3/2." },
      { type: "mc", q: "Le soluzioni di 4ˣ − 5 · 2ˣ + 4 = 0 sono…", options: ["x = 0 e x = 2", "x = 1 e x = 4", "x = 0 e x = 4"], answer: 0, explain: "t = 2ˣ: t² − 5t + 4 = 0 → t = 1, 4 → x = 0, 2." },
      { type: "num", q: "Risolvi log₂ (x + 1) = 3.", answer: 7, explain: "x + 1 = 2³ = 8 → x = 7 (CE: x &gt; −1 ✓)." },
      { type: "mc", q: "Risolvi log₃ x &gt; 2.", options: ["x &gt; 9", "0 &lt; x &lt; 9", "x &gt; 2"], answer: 0, explain: "La base 3 &gt; 1 conserva il verso: x &gt; 3² = 9." },
      { type: "tf", q: "La funzione y = (0,5)ˣ è decrescente.", answer: true, explain: "La base è minore di 1: più l'esponente cresce, più il risultato diminuisce." },
      { type: "text", q: "Come si chiama il logaritmo in base e? (nome o simbolo)", answer: ["naturale", "logaritmo naturale", "ln", "neperiano", "logaritmo neperiano"], explain: "È il logaritmo naturale, indicato con ln." },
      { type: "order", q: "Metti in ordine i passi per risolvere un'equazione logaritmica.", items: ["Scrivere le condizioni di esistenza (argomenti &gt; 0)", "Ridurre a un solo logaritmo per lato con le proprietà", "Eguagliare gli argomenti o passare all'esponenziale", "Risolvere l'equazione ottenuta", "Scartare le soluzioni che non rispettano le CE"], explain: "Le CE vanno scritte all'inizio e usate alla fine per scartare le soluzioni estranee." }
    ]
  }
});

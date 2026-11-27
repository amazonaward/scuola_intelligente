TOPIC('it', {
  id: "l3-mat-retta-analitica",
  title: "Geometria analitica: la retta",
  intro: "Come fa un'app di mappe a trovare il punto più vicino a una strada, a dirti quanto dista un negozio da un rettilineo, o a descrivere \"tutti i punti equidistanti da due case\"? Con le <b>coordinate</b> la geometria diventa calcolo. Dopo aver visto in seconda l'equazione della retta, oggi la usiamo da protagonista: <b>fasci di rette</b> (infinite rette descritte da una sola equazione con un parametro), <b>distanza punto–retta</b>, <b>angoli</b>, <b>bisettrici</b>, <b>aree</b> e <b>luoghi geometrici</b>.",
  minutes: 60,
  sections: [
    {
      type: "text",
      title: "Riepilogo: la retta e i suoi strumenti",
      html: `<p>Richiamiamo senza ripartire da zero (se serve, rivedi la lezione di seconda su piano cartesiano e retta). La retta si scrive in <b>forma implicita</b> ax + by + c = 0 oppure in <b>forma esplicita</b> y = mx + q (se non è verticale; le verticali sono x = k). Strumenti già noti:</p>
<ul>
<li><b>Coefficiente angolare</b> per due punti: m = (y₂ − y₁)/(x₂ − x₁); per ax + by + c = 0 (b ≠ 0) è <b>m = −a/b</b>.</li>
<li>Retta per P(x₀, y₀) con pendenza m: <b>y − y₀ = m(x − x₀)</b>.</li>
<li>Parallele: m = m′; perpendicolari: m·m′ = −1 (nella forma implicita: i vettori (a, b) e (a′, b′) sono multipli oppure ortogonali: aa′ + bb′ = 0).</li>
<li>Distanza tra due punti e punto medio.</li>
</ul>
<p>In questa lezione facciamo il salto: invece di una sola retta, ragioniamo su <b>famiglie</b> di rette e su <b>insiemi di punti che soddisfano una proprietà</b> (i luoghi). È il modo in cui la geometria analitica dimostra teoremi e risolve problemi di ottimizzazione.</p>`
    },
    {
      type: "text",
      title: "Distanza di un punto da una retta",
      html: `<p>La distanza di un punto P da una retta r è la lunghezza del segmento PH, dove H è la <b>proiezione ortogonale</b> di P su r (il "piede" della perpendicolare): è la distanza <b>minima</b> tra P e i punti della retta. Per P(x₀, y₀) e r: ax + by + c = 0:</p>
<p style="text-align:center"><b>d(P, r) = |a x₀ + b y₀ + c| / √(a² + b²)</b></p>
<p><b>Perché funziona</b>: il vettore (a, b) è perpendicolare alla retta ("vettore normale"); la quantità a x₀ + b y₀ + c misura di quanto P si discosta dalla retta, moltiplicata per √(a² + b²), la lunghezza di (a, b). Dividendo si ottiene la distanza vera. Il segno dell'espressione (prima del valore assoluto) dice da <b>quale lato</b> della retta si trova P.</p>
<p><b>Esempio 1.</b> Distanza di P(3, 4) dalla retta 3x − 4y + 10 = 0: |9 − 16 + 10|/√(9 + 16) = 3/5 = <b>0,6</b>.</p>
<p><b>Esempio 2 (rette parallele).</b> La distanza tra due rette parallele r: 2x + y − 1 = 0 e s: 2x + y + 4 = 0 è la distanza di un punto qualsiasi di r da s. Per r si prende, ad esempio, (0, 1) → |0 + 1 + 4|/√5 = 5/√5 = <b>√5</b>. In generale, per ax + by + c₁ = 0 e ax + by + c₂ = 0: d = |c₁ − c₂|/√(a² + b²).</p>
<p><b>Esempio 3 (retta con distanza data).</b> Trova le rette per P(1, 2) a distanza 1 dall'origine. Il fascio è y − 2 = m(x − 1), cioè mx − y + 2 − m = 0. La distanza di O: |2 − m|/√(m² + 1) = 1 → (2 − m)² = m² + 1 → 4 − 4m = 1 → <b>m = 3/4</b>: 3x − 4y + 5 = 0. Ma attenzione: la <b>retta verticale x = 1</b> passa per P e dista 1 da O, e il fascio "con m" non la contiene: soluzioni <b>3x − 4y + 5 = 0 e x = 1</b>. Controlla sempre la retta verticale!</p>`
    },
    {
      type: "svg",
      title: "La distanza punto–retta",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="270" x2="430" y2="85" stroke="#2563eb" stroke-width="4"/>
<line x1="250" y1="70" x2="285" y2="144" stroke="#dc2626" stroke-width="4"/>
<line x1="250" y1="70" x2="170" y2="190" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="250" y1="70" x2="370" y2="115" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<polyline points="278,137 285,140 281,147" fill="none" stroke="#dc2626" stroke-width="2"/>
<circle cx="250" cy="70" r="7" fill="#16a34a"/>
<circle cx="285" cy="144" r="6" fill="#dc2626"/>
<text x="228" y="62" font-size="16" fill="#166534" font-weight="bold" text-anchor="end">P(x₀, y₀)</text>
<text x="298" y="160" font-size="16" fill="#991b1b" font-weight="bold">H</text>
<text x="300" y="100" font-size="16" fill="#991b1b" font-weight="bold">d</text>
<text x="400" y="150" font-size="16" fill="#1d4ed8" font-weight="bold">r: ax + by + c = 0</text>
<text x="440" y="195" font-size="16" fill="#334155">d = |ax₀ + by₀ + c|</text>
<text x="472" y="218" font-size="16" fill="#334155">/ √(a² + b²)</text>
<text x="440" y="255" font-size="14" fill="#64748b">Le altre distanze (tratteggio)</text>
<text x="440" y="273" font-size="14" fill="#64748b">sono più lunghe: PH è minima.</text>
</svg>`,
      caption: "La distanza di P dalla retta r è la lunghezza della perpendicolare PH: tra tutti i segmenti da P a un punto della retta è il più corto."
    },
    {
      type: "text",
      title: "Fasci di rette",
      html: `<p>Un <b>fascio di rette</b> è un insieme di infinite rette descritto da un'equazione che contiene un <b>parametro</b> (di solito k o m).</p>
<ul>
<li><b>Fascio proprio</b> di centro C(x₀, y₀): tutte le rette per C. Equazione: <b>y − y₀ = m(x − x₀)</b> (al variare di m), alla quale va aggiunta a parte la <b>retta verticale x = x₀</b>.</li>
<li><b>Fascio improprio</b>: rette tutte <b>parallele</b> (centro "all'infinito"). Per esempio <b>y = m₀x + k</b> con m₀ fissato e k variabile; oppure x = k per le verticali.</li>
<li><b>Fascio generato da due rette</b> r: ax + by + c = 0 e s: a′x + b′y + c′ = 0: <b>(ax + by + c) + k(a′x + b′y + c′) = 0</b>. Se r e s sono incidenti il fascio è proprio, con centro nel loro punto di intersezione; se sono parallele, il fascio è improprio. Il valore k = 0 dà r; la retta s si ottiene "al limite" (k → ∞): va controllata a parte.</li>
</ul>
<p><b>Esempio.</b> Fascio generato da r: x + y − 3 = 0 e s: x − y + 1 = 0: (x + y − 3) + k(x − y + 1) = 0. Il centro è l'intersezione: x + y = 3, x − y = −1 → x = 1, y = 2, cioè C(1, 2). Per trovare la retta del fascio che passa per l'origine, si impone O: (−3) + k(1) = 0 → k = 3, quindi 4x − 2y = 0, cioè <b>y = 2x</b>: passa effettivamente per (1, 2) ✔️.</p>
<p><b>A cosa servono i fasci</b>: per trovare rette che soddisfano <b>una sola condizione</b> senza prima calcolare l'intersezione: bastano il fascio e la condizione (passaggio per un punto, distanza data, parallelismo con un'altra retta, perpendicolarità), da cui si ricava il parametro. Si "paga" una condizione per ogni parametro.</p>
<p><b>Un caso notevole</b>: la retta per un punto P perpendicolare a una retta r: si usa il fascio per P e la condizione m·m_r = −1; oppure, in forma implicita, se r: ax + by + c = 0, la perpendicolare per P(x₀, y₀) è <b>b(x − x₀) − a(y − y₀) = 0</b>. Esempio: per P(2, 1) perpendicolare a 3x + 4y − 1 = 0: 4(x − 2) − 3(y − 1) = 0 → 4x − 3y − 5 = 0.</p>`
    },
    {
      type: "svg",
      title: "Un fascio proprio e uno improprio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#2563eb" stroke-width="3">
<line x1="40" y1="150" x2="260" y2="150"/>
<line x1="40" y1="230" x2="260" y2="70"/>
<line x1="40" y1="70" x2="260" y2="230"/>
<line x1="150" y1="30" x2="150" y2="270"/>
<line x1="70" y1="270" x2="230" y2="30"/>
</g>
<circle cx="150" cy="150" r="8" fill="#dc2626"/>
<text x="160" y="140" font-size="16" fill="#991b1b" font-weight="bold">C</text>
<text x="40" y="288" font-size="16" fill="#1d4ed8" font-weight="bold">fascio proprio</text>
<g stroke="#ea580c" stroke-width="3">
<line x1="350" y1="270" x2="520" y2="60"/>
<line x1="390" y1="285" x2="560" y2="75"/>
<line x1="430" y1="300" x2="590" y2="105"/>
<line x1="310" y1="245" x2="480" y2="35"/>
</g>
<text x="330" y="22" font-size="16" fill="#9a3412" font-weight="bold">fascio improprio</text>
<text x="330" y="288" font-size="14" fill="#64748b">(rette parallele)</text>
</svg>`,
      caption: "A sinistra: tutte le rette passano per il centro C. A destra: le rette sono parallele, hanno la stessa pendenza e differiscono per l'intercetta."
    },
    {
      type: "quiz",
      title: "Mini-quiz: distanza e fasci",
      questions: [
        { type: "num", q: "Distanza dell'origine dalla retta 3x + 4y − 15 = 0.", answer: 3, explain: "|−15|/√(9 + 16) = 15/5 = 3." },
        { type: "mc", q: "Il fascio di rette y − 3 = m(x − 2) ha centro in…", options: ["(3, 2)", "(2, 3)", "(−2, −3)"], answer: 1, explain: "È il fascio di rette per P(x₀, y₀) = (2, 3)." },
        { type: "tf", q: "L'equazione y − y₀ = m(x − x₀) comprende anche la retta verticale x = x₀.", answer: false, explain: "La verticale non ha coefficiente angolare: va aggiunta a parte." }
      ]
    },
    {
      type: "text",
      title: "Angoli tra rette e bisettrici",
      html: `<p><b>Angolo tra due rette</b> non verticali di pendenze m₁ e m₂: se θ è l'angolo acuto (o retto) che formano,</p>
<p style="text-align:center"><b>tan θ = | (m₂ − m₁) / (1 + m₁m₂) |</b></p>
<p>(se 1 + m₁m₂ = 0 le rette sono perpendicolari: θ = 90°). La formula nasce dalla formula di sottrazione della tangente, che vedrai in goniometria: m = tan α con α inclinazione della retta. Esempio: y = 2x e y = x/3: tan θ = |(1/3 − 2)/(1 + 2/3)| = (5/3)/(5/3) = 1 → θ = <b>45°</b>.</p>
<p><b>Bisettrici</b> degli angoli formati da due rette incidenti r: ax + by + c = 0 e s: a′x + b′y + c′ = 0: sono il luogo dei punti <b>equidistanti</b> dalle due rette, quindi si impone</p>
<p style="text-align:center"><b>|ax + by + c| / √(a² + b²) = |a′x + b′y + c′| / √(a′² + b′²)</b></p>
<p>che si spezza in due rette (il segno + e il segno −): le due bisettrici, perpendicolari fra loro.</p>
<p><b>Esempio.</b> r: 3x − 4y + 1 = 0 e s: 4x + 3y − 2 = 0 (entrambe con √(a² + b²) = 5). Le bisettrici: 3x − 4y + 1 = ±(4x + 3y − 2). Con +: −x − 7y + 3 = 0 → <b>x + 7y − 3 = 0</b>. Con −: 7x − y − 1 = 0 → <b>7x − y − 1 = 0</b>. Le pendenze −1/7 e 7 hanno prodotto −1: sono perpendicolari ✔️. (E poiché r e s sono già perpendicolari tra loro, le bisettrici formano 45° con ciascuna.)</p>`
    },
    {
      type: "text",
      title: "Aree e allineamento",
      html: `<p>L'<b>area di un triangolo</b> di vertici A(x₁, y₁), B(x₂, y₂), C(x₃, y₃) è</p>
<p style="text-align:center"><b>Area = ½ · | x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂) |</b></p>
<p>(formula "dei lacci", dovuta a Gauss, oppure ½|det|). Se l'area è <b>zero</b>, i tre punti sono <b>allineati</b>. In alternativa: base = AB (distanza), altezza = distanza di C dalla retta AB; Area = ½ · AB · h.</p>
<p><b>Esempio.</b> A(0, 0), B(4, 1), C(1, 3). Area = ½|0 + 4(3 − 0) + 1(0 − 1)| = ½|12 − 1| = <b>5,5</b>. Controllo con base e altezza: AB = √17; retta AB: x − 4y = 0; distanza di C: |1 − 12|/√17 = 11/√17; Area = ½ · √17 · 11/√17 = 5,5 ✔️.</p>
<p><b>Allineamento.</b> I punti A(1, 1), B(3, 5), C(5, 9): m_AB = 2, m_BC = 2: coincidono, quindi sono allineati (area = ½|1(5 − 9) + 3(9 − 1) + 5(1 − 5)| = ½|−4 + 24 − 20| = 0 ✔️).</p>`
    },
    {
      type: "text",
      title: "Luoghi geometrici",
      html: `<p>Un <b>luogo geometrico</b> è l'insieme di <b>tutti e soli</b> i punti del piano che godono di una proprietà. La geometria analitica permette di trovarne l'<b>equazione</b>: si prende un punto generico P(x, y), si traduce la proprietà in una relazione tra x e y, e si semplifica.</p>
<ul>
<li><b>Asse di un segmento AB</b>: luogo dei punti equidistanti da A e da B. Per A(0, 0) e B(4, 2): PA² = PB² → x² + y² = (x − 4)² + (y − 2)² → 0 = −8x + 16 − 4y + 4 → <b>2x + y − 5 = 0</b>. (Controllo: passa per il punto medio (2, 1): 4 + 1 − 5 = 0 ✔️; pendenza −2, perpendicolare ad AB che ha pendenza ½ ✔️.)</li>
<li><b>Bisettrici</b>: i punti equidistanti da due rette (visto sopra).</li>
<li><b>Rette parallele a una retta data a distanza h</b>: |ax + by + c|/√(a² + b²) = h → due rette parallele. Per y = x (cioè x − y = 0) e h = 2: |x − y| = 2√2, cioè x − y = ±2√2.</li>
<li><b>Punti P tali che l'area di ABP sia costante</b>: P dista da AB di una quantità costante: due rette parallele ad AB.</li>
<li><b>Circonferenza</b>: luogo dei punti a distanza r da un centro (la vedremo nelle prossime lezioni); <b>parabola</b>, <b>ellisse</b>, <b>iperbole</b>: luoghi definiti da distanze da un punto e da una retta o da due punti (le coniche).</li>
</ul>
<p><b>Metodo</b>: (1) disegna la situazione; (2) scegli le coordinate (spesso conviene mettere i punti dati in posizioni comode, come A(0, 0)); (3) traduci la proprietà con le formule di distanza; (4) semplifica; (5) riconosci la curva e controlla casi particolari (punti esclusi, valori impossibili).</p>
<p><b>Esempio: il rapporto fisso.</b> Trova il luogo dei punti P(x, y) tali che PA² − PB² = 8, con A(0, 0) e B(4, 0). Si ottiene x² + y² − (x − 4)² − y² = 8 → 8x − 16 = 8 → <b>x = 3</b>: una retta verticale (perpendicolare ad AB). In generale PA² − PB² costante dà sempre una retta perpendicolare ad AB.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: dove costruire la pista ciclabile?",
      html: `<p>Su una mappa in metri una strada rettilinea ha equazione 3x + 4y − 120 = 0 (la strada passa per (40, 0) e (0, 30)). Una scuola si trova in S(10, 5). Il comune vuole costruire un raccordo ciclabile perpendicolare alla strada. Quanto sarà lungo, e dove incontrerà la strada?</p>
<ul>
<li>Lunghezza del raccordo = distanza di S dalla strada: |30 + 20 − 120|/5 = 70/5 = <b>14 m</b>.</li>
<li>Retta del raccordo: perpendicolare alla strada passante per S: 4(x − 10) − 3(y − 5) = 0 → 4x − 3y − 25 = 0.</li>
<li>Punto di incontro con la strada: sistema { 3x + 4y = 120 ; 4x − 3y = 25 } → moltiplicando: 9x + 12y = 360 e 16x − 12y = 100, sommando 25x = 460 → x = 18,4; y = (120 − 55,2)/4 = 16,2. H(18,4; 16,2). Verifica: distanza SH = √(8,4² + 11,2²) = √(70,56 + 125,44) = √196 = 14 ✔️.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: il punto di consegna equidistante",
      html: `<p>Due magazzini sono in A(0, 0) e B(8, 6) (coordinate in km). Un corriere vuole fermarsi in punti che siano a pari distanza dai due magazzini <b>e</b> lungo la strada rettilinea y = 2x − 5. Dove si trova il punto?</p>
<p>Il luogo dei punti equidistanti da A e B è l'asse del segmento: x² + y² = (x − 8)² + (y − 6)² → 0 = −16x + 64 − 12y + 36 → 4x + 3y − 25 = 0. Intersecando con y = 2x − 5: 4x + 6x − 15 − 25 = 0 → 10x = 40 → x = 4, y = 3. Il punto è <b>(4, 3)</b>: è anche il punto medio di AB, come si vede, perché la strada passa proprio per il punto medio. Distanza da ciascun magazzino: 5 km.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Dall'algebra alla dimostrazione",
      html: `<p>Molti teoremi della geometria euclidea si dimostrano in poche righe con le coordinate. Per esempio, "le diagonali di un parallelogramma si bisecano" diventa: se i vertici sono O(0, 0), A(a, 0), C(c, d) e B(a + c, d), il punto medio di OB è ((a + c)/2 ; d/2) e quello di AC è ((a + c)/2 ; d/2): coincidono. Questo approccio, che Cartesio descrisse nella <i>Géométrie</i> (1637), rese la geometria "meccanizzabile": ancora oggi i programmi di geometria dinamica e i dimostratori automatici lavorano proprio con le coordinate.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Quando una retta è tutto il risultato: la regressione",
      html: `<p>Gli statistici cercano la retta che "meglio" approssima una nuvola di punti: è la <b>retta di regressione</b>, scelta in modo da minimizzare la somma dei quadrati delle distanze (verticali) dei punti dalla retta. È un uso moderno e quotidiano della geometria analitica: previsioni sui consumi, andamenti di vendite, relazioni tra altezza e peso. Ne parleremo nell'ultima lezione di quest'anno (statistica bivariata).</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la distanza punto–retta",
      intro: "La formula con valore assoluto e radice può sembrare un incantesimo: ecco da dove viene e come ritrovarla.",
      tabs: [
        {
          label: "📐 Con la perpendicolare",
          html: `<p>Si fa tutto come nel problema geometrico: (1) retta per P perpendicolare a r; (2) intersezione H con r (sistema); (3) distanza PH con Pitagora. Il risultato è identico alla formula, ma con più passaggi: la formula è la scorciatoia generale. Per P(1, 1) e r: y = 2x − 4 (2x − y − 4 = 0): perpendicolare per P: pendenza −½ → y − 1 = −½(x − 1) → x + 2y − 3 = 0; intersezione con y = 2x − 4: x + 4x − 8 − 3 = 0 → x = 11/5, y = 2/5; PH = √((6/5)² + (3/5)²) = √(45)/5 = 3√5/5. Con la formula: |2 − 1 − 4|/√5 = 3/√5 = 3√5/5 ✔️.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><line x1="60" y1="260" x2="360" y2="110" stroke="#2563eb" stroke-width="4"/><line x1="200" y1="70" x2="260" y2="190" stroke="#dc2626" stroke-width="3" stroke-dasharray="7 5"/><circle cx="200" cy="70" r="7" fill="#16a34a"/><circle cx="260" cy="190" r="6" fill="#dc2626"/><text x="180" y="62" font-size="16" fill="#166534" font-weight="bold" text-anchor="end">P</text><text x="272" y="205" font-size="16" fill="#991b1b" font-weight="bold">H</text><text x="380" y="115" font-size="16" fill="#1d4ed8" font-weight="bold">r</text><text x="380" y="180" font-size="16" fill="#334155">1) perpendicolare per P</text><text x="380" y="205" font-size="16" fill="#334155">2) intersezione H con r</text><text x="380" y="230" font-size="16" fill="#334155">3) distanza PH</text></svg>`
        },
        {
          label: "🔄 Con l'area",
          html: `<p>Prendi due punti A e B qualsiasi della retta r e il triangolo ABP. La sua area si può calcolare in due modi: con i vertici (formula dei lacci) oppure come ½·AB·d, dove d è proprio la distanza di P da r (l'altezza relativa ad AB). Uguagliando, d = 2·Area/AB. Per r: 3x + 4y − 12 = 0 passa per A(4, 0) e B(0, 3); con P(0, 0): Area = ½·4·3 = 6, AB = 5, quindi d = 12/5 = 2,4. La formula dà |−12|/5 = 2,4 ✔️.</p>`
        },
        {
          label: "🧭 Con i vettori",
          html: `<p>Il vettore <b>n = (a, b)</b> è perpendicolare alla retta ax + by + c = 0 (una retta con pendenza −a/b ha direzione (b, −a), e (a, b)·(b, −a) = 0). Per andare da un punto Q della retta a P, "proiettiamo" il vettore QP su n: la lunghezza della proiezione è |n · QP|/|n| = |a(x₀ − xQ) + b(y₀ − yQ)|/√(a² + b²). Ma a·xQ + b·yQ = −c perché Q sta sulla retta: otteniamo esattamente la formula. È la stessa idea che si usa nella grafica 3D per calcolare quanto è lontano un punto da un piano.</p>`,
          widget: "match",
          options: { pairs: [["(a, b)", "vettore perpendicolare alla retta"], ["|ax₀ + by₀ + c|", "numeratore della distanza"], ["√(a² + b²)", "lunghezza del vettore normale"], ["H", "piede della perpendicolare"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della retta nel piano cartesiano",
      nodes: [
        { id: "retta", label: "Retta", x: 50, y: 6, color: "#6366f1", html: "ax + by + c = 0, oppure y = mx + q.", why: "Dai punti allineati: la variazione di y è proporzionale a quella di x, quindi l'equazione è di primo grado." },
        { id: "dist", label: "Distanza punto–retta", x: 18, y: 30, color: "#16a34a", html: "d = |ax₀ + by₀ + c|/√(a² + b²).", why: "Si ottiene proiettando sul vettore normale (a, b): è Pitagora in versione vettoriale; è anche la ragione per cui la perpendicolare è la minima distanza." },
        { id: "fasci", label: "Fasci di rette", x: 82, y: 30, color: "#f59e0b", html: "Proprio (per un punto) o improprio (parallele).", why: "Un'equazione con un parametro descrive infinite rette; combinando due rette r + k·s si ottengono tutte quelle che passano per la loro intersezione." },
        { id: "ang", label: "Angoli e bisettrici", x: 18, y: 62, color: "#ef4444", html: "tan θ = |(m₂ − m₁)/(1 + m₁m₂)|; bisettrici per equidistanza.", why: "L'angolo viene dalla tangente della differenza di due inclinazioni; le bisettrici sono per definizione i punti equidistanti dai lati." },
        { id: "area", label: "Area del triangolo", x: 82, y: 62, color: "#0ea5e9", html: "Formula dei lacci; area zero = punti allineati.", why: "Si può ricavare con base × altezza/2, dove l'altezza è la distanza punto–retta; oppure con il determinante." },
        { id: "luogo", label: "Luoghi geometrici", x: 50, y: 88, color: "#a855f7", html: "Insiemi di punti con una proprietà: asse, bisettrice, parallele...", why: "Tradurre una proprietà in un'equazione è l'idea fondante della geometria analitica (Cartesio e Fermat)." }
      ],
      edges: [
        ["retta", "dist", "misura"],
        ["retta", "fasci", "famiglie"],
        ["dist", "ang", "bisettrici"],
        ["fasci", "ang", "condizioni"],
        ["dist", "area", "altezza"],
        ["ang", "luogo", "luoghi"],
        ["area", "luogo", "luoghi"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: angoli, aree, luoghi",
      questions: [
        { type: "num", q: "Area del triangolo di vertici A(0, 0), B(6, 0), C(2, 4).", answer: 12, explain: "Base 6, altezza 4: Area = ½ · 6 · 4 = 12." },
        { type: "mc", q: "L'asse del segmento di estremi A(0, 0) e B(6, 0) è…", options: ["y = 3", "x = 3", "y = x"], answer: 1, explain: "È la perpendicolare ad AB (orizzontale) nel punto medio (3, 0): la retta verticale x = 3." },
        { type: "tf", q: "Tre punti sono allineati se l'area del triangolo da loro formato è zero.", answer: true, explain: "Un triangolo degenere ha area nulla: i tre vertici stanno sulla stessa retta." }
      ]
    }
  ],
  glossary: [
    { t: "Forma implicita", d: "Equazione della retta del tipo ax + by + c = 0." },
    { t: "Fascio di rette", d: "Insieme di infinite rette descritto da un'equazione con un parametro." },
    { t: "Fascio proprio", d: "Tutte le rette passanti per un punto, detto centro del fascio." },
    { t: "Fascio improprio", d: "Insieme di rette parallele tra loro." },
    { t: "Distanza punto–retta", d: "Lunghezza della perpendicolare condotta dal punto alla retta." },
    { t: "Bisettrice", d: "Retta dei punti equidistanti da due rette incidenti." },
    { t: "Luogo geometrico", d: "Insieme di tutti e soli i punti che soddisfano una data proprietà." },
    { t: "Vettore normale", d: "Il vettore (a, b), perpendicolare alla retta ax + by + c = 0." },
    { t: "Asse di un segmento", d: "Luogo dei punti equidistanti dagli estremi: la perpendicolare per il punto medio." },
    { t: "Allineati", d: "Punti che appartengono alla stessa retta." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Distanza di P(2, 3) dalla retta 3x + 4y + 2 = 0.", answer: 4, explain: "|6 + 12 + 2|/√(9 + 16) = 20/5 = 4." },
      { type: "mc", q: "Qual è la distanza tra le rette parallele x + y − 1 = 0 e x + y + 3 = 0?", options: ["4", "2√2", "√2"], answer: 1, explain: "|−1 − 3|/√2 = 4/√2 = 2√2." },
      { type: "mc", q: "Il centro del fascio generato da x + y − 3 = 0 e x − y + 1 = 0 è…", options: ["(1, 2)", "(2, 1)", "(−1, 4)"], answer: 0, explain: "Si risolve il sistema: x = 1, y = 2." },
      { type: "mc", q: "La retta per P(2, 1) perpendicolare a 3x + 4y − 1 = 0 è…", options: ["4x − 3y − 5 = 0", "3x + 4y − 10 = 0", "4x + 3y − 11 = 0"], answer: 0, explain: "La normale (3, 4) fornisce la direzione della perpendicolare: 4(x − 2) − 3(y − 1) = 0." },
      { type: "num", q: "Angolo acuto (in gradi) tra le rette y = 2x e y = x/3.", answer: 45, explain: "tan θ = |(1/3 − 2)/(1 + 2/3)| = 1, quindi θ = 45°." },
      { type: "num", q: "Area del triangolo A(0, 0), B(4, 1), C(1, 3).", answer: 5.5, tol: 0.01, explain: "½|0 + 4(3 − 0) + 1(0 − 1)| = ½ · 11 = 5,5." },
      { type: "mc", q: "L'asse del segmento di estremi A(0, 0) e B(4, 2) è…", options: ["2x + y − 5 = 0", "x + 2y − 4 = 0", "2x − y = 0"], answer: 0, explain: "Si impone PA² = PB²: x² + y² = (x − 4)² + (y − 2)² → 2x + y − 5 = 0." },
      { type: "tf", q: "Il fascio y − 2 = m(x − 1) contiene tutte le rette passanti per (1, 2), compresa x = 1.", answer: false, explain: "Manca la retta verticale x = 1, che non ha coefficiente angolare." },
      { type: "order", q: "Metti in ordine i passi per trovare un luogo geometrico.", items: ["Prendere un punto generico P(x, y)", "Tradurre la proprietà in una relazione tra le coordinate", "Semplificare l'equazione", "Riconoscere la curva ottenuta", "Controllare eventuali punti esclusi"], explain: "Si parte da P generico, si traduce, si semplifica, si riconosce la curva e si verificano i casi particolari." },
      { type: "text", q: "Come si chiama la retta che passa per il punto medio di un segmento ed è perpendicolare al segmento?", answer: ["asse", "asse del segmento", "l'asse", "asse di un segmento"], explain: "È l'asse del segmento: tutti i suoi punti sono equidistanti dagli estremi." }
    ]
  }
});

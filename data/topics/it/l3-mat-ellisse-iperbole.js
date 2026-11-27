TOPIC('it', {
  id: "l3-mat-ellisse-iperbole",
  title: "Ellisse e iperbole",
  intro: "I pianeti non girano attorno al Sole su circonferenze, ma su <b>ellissi</b>; una cometa che passa una volta sola e se ne va nello spazio profondo disegna un ramo di <b>iperbole</b>; il boato di un aereo supersonico forma un cono che sul terreno traccia un'iperbole. Ellisse e iperbole, insieme alla circonferenza e alla parabola, sono le <b>coniche</b>, le curve che si ottengono tagliando un cono con un piano. In questa lezione le definiamo con i <b>fuochi</b>, ricaviamo le loro equazioni e impariamo a leggerne gli elementi: semiassi, fuochi, eccentricità, asintoti.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Le coniche: una famiglia di curve",
      html: `<p>Il matematico greco <b>Apollonio di Perga</b> (III–II secolo a.C.) scrisse otto libri sulle <i>Coniche</i>, in cui studiò le curve ottenute sezionando un cono con un piano: <b>circonferenza</b> (piano perpendicolare all'asse), <b>ellisse</b> (piano inclinato che taglia tutte le generatrici), <b>parabola</b> (piano parallelo a una generatrice), <b>iperbole</b> (piano che taglia le due falde del cono). I nomi ellisse, parabola e iperbole si devono proprio a lui.</p>
<p>Nel Seicento, con la geometria analitica di Descartes e Fermat, ogni conica diventa l'insieme dei punti che soddisfano un'<b>equazione di secondo grado</b> in x e y. Dopo la circonferenza (lezione precedente), qui studiamo le due coniche "a centro" con due fuochi: ellisse e iperbole.</p>
<p>Una chiave comune: sia l'ellisse sia l'iperbole si definiscono con <b>due punti fissi F₁ e F₂, i fuochi</b>, e con una condizione sulle distanze da essi. Cambia solo l'operazione: <b>somma</b> per l'ellisse, <b>differenza</b> per l'iperbole.</p>`
    },
    {
      type: "text",
      title: "L'ellisse: definizione ed equazione",
      html: `<p>L'<b>ellisse</b> è il luogo dei punti P del piano per cui la <b>somma delle distanze da due punti fissi F₁ e F₂ è costante</b>: PF₁ + PF₂ = 2a, con 2a maggiore della distanza F₁F₂. Se i fuochi coincidono si ritrova la circonferenza.</p>
<p>Scegliamo il sistema di riferimento con i fuochi sull'asse x, simmetrici rispetto all'origine: F₁(−c, 0) e F₂(c, 0). Con un po' di algebra (si isola una radice, si eleva al quadrato due volte) si ottiene l'<b>equazione canonica</b>:</p>
<p style="text-align:center"><b>x²/a² + y²/b² = 1</b>, con b² = a² − c², cioè <b>c² = a² − b²</b></p>
<ul>
<li><b>a</b> è il semiasse maggiore (lungo l'asse x), <b>b</b> il semiasse minore: l'ellisse taglia gli assi nei <b>vertici</b> (±a, 0) e (0, ±b).</li>
<li>I <b>fuochi</b> sono F(±c, 0), con c = √(a² − b²).</li>
<li>L'<b>eccentricità</b> <b>e = c/a</b> misura quanto l'ellisse è "schiacciata": 0 ≤ e &lt; 1. Con e = 0 è una circonferenza; con e vicino a 1 è molto allungata.</li>
<li>L'ellisse è simmetrica rispetto agli assi e all'origine (il centro). L'<b>area</b> è <b>πab</b>.</li>
<li>Se invece <b>b &gt; a</b> l'asse maggiore è verticale: i fuochi sono sull'asse y, F(0, ±c) con <b>c² = b² − a²</b>, ed e = c/b.</li>
</ul>
<p><b>Esempio.</b> x²/25 + y²/9 = 1: a = 5, b = 3, c = √(25 − 9) = 4. Fuochi F(±4, 0), eccentricità e = 4/5 = 0,8. Verifica sul punto P(3, 12/5): PF₂ = √(1 + 144/25) = 13/5; PF₁ = √(49 + 144/25) = 37/5; somma = 50/5 = 10 = 2a ✔️.</p>
<p><b>Dall'equazione generale.</b> 9x² + 25y² = 225 → dividendo per 225 → x²/25 + y²/9 = 1. E 4x² + y² = 16 → x²/4 + y²/16 = 1: b² = 16 &gt; a² = 4, asse maggiore verticale, c² = 12, fuochi F(0, ±2√3), e = 2√3/4 = √3/2.</p>`
    },
    {
      type: "svg",
      title: "Gli elementi dell'ellisse",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#94a3b8" stroke-width="1.5"/>
<ellipse cx="300" cy="150" rx="200" ry="110" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="4"/>
<circle cx="167" cy="150" r="6" fill="#dc2626"/>
<circle cx="433" cy="150" r="6" fill="#dc2626"/>
<circle cx="360" cy="45" r="6" fill="#16a34a"/>
<line x1="167" y1="150" x2="360" y2="45" stroke="#ea580c" stroke-width="2.5"/>
<line x1="433" y1="150" x2="360" y2="45" stroke="#ea580c" stroke-width="2.5"/>
<text x="130" y="175" font-size="16" fill="#991b1b" font-weight="bold">F₁(−c, 0)</text>
<text x="415" y="175" font-size="16" fill="#991b1b" font-weight="bold">F₂(c, 0)</text>
<text x="368" y="42" font-size="16" fill="#166534" font-weight="bold">P</text>
<text x="500" y="140" font-size="14" fill="#334155">(a, 0)</text>
<text x="305" y="36" font-size="14" fill="#334155">(0, b)</text>
<text x="20" y="40" font-size="16" fill="#9a3412" font-weight="bold">PF₁ + PF₂ = 2a</text>
<text x="20" y="65" font-size="16" fill="#1d4ed8">x²/a² + y²/b² = 1</text>
<text x="20" y="90" font-size="16" fill="#334155">c² = a² − b²,  e = c/a &lt; 1</text>
</svg>`,
      caption: "In ogni punto dell'ellisse la somma delle distanze dai due fuochi è sempre la stessa: 2a, la lunghezza dell'asse maggiore."
    },
    {
      type: "remember",
      title: "Ellisse in breve",
      html: `<ul>
<li>Equazione: <b>x²/a² + y²/b² = 1</b>, con a ≠ b (se a = b è una circonferenza di raggio a).</li>
<li>Fuochi sull'asse del semiasse <b>maggiore</b>; c² = (semiasse maggiore)² − (semiasse minore)².</li>
<li>Eccentricità <b>e = c/(semiasse maggiore)</b>, sempre tra 0 e 1.</li>
<li>L'asse maggiore misura 2a (somma costante delle distanze dai fuochi).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: ellisse",
      questions: [
        { type: "num", q: "Nell'ellisse x²/16 + y²/7 = 1 quanto vale c (distanza di un fuoco dal centro)?", answer: 3, explain: "c² = a² − b² = 16 − 7 = 9, quindi c = 3. I fuochi sono (±3, 0)." },
        { type: "mc", q: "Per l'ellisse x²/4 + y²/9 = 1 i fuochi si trovano…", options: ["sull'asse x", "sull'asse y", "nell'origine"], answer: 1, explain: "Il semiasse maggiore è b = 3, verticale: i fuochi sono sull'asse y, a distanza c = √(9 − 4) = √5." },
        { type: "tf", q: "Un'ellisse con eccentricità 0 è una circonferenza.", answer: true, explain: "e = c/a = 0 significa c = 0: i fuochi coincidono con il centro e a = b." }
      ]
    },
    {
      type: "text",
      title: "L'iperbole: definizione ed equazione",
      html: `<p>L'<b>iperbole</b> è il luogo dei punti P del piano per cui la <b>differenza (in valore assoluto) delle distanze da due punti fissi F₁ e F₂ è costante</b>: |PF₁ − PF₂| = 2a, con 2a minore della distanza F₁F₂. Con i fuochi F(±c, 0) si ottiene l'equazione canonica:</p>
<p style="text-align:center"><b>x²/a² − y²/b² = 1</b>, con <b>c² = a² + b²</b></p>
<ul>
<li>L'iperbole è formata da <b>due rami</b> separati. I <b>vertici</b> sono V(±a, 0): non taglia mai l'asse y (per x = 0 si avrebbe y² = −b², impossibile).</li>
<li>I <b>fuochi</b> sono F(±c, 0), con c = √(a² + b²) &gt; a (nell'ellisse invece c &lt; a).</li>
<li>L'<b>eccentricità</b> è <b>e = c/a &gt; 1</b>.</li>
<li>Gli <b>asintoti</b> sono le rette <b>y = ±(b/a)x</b>: i rami vi si avvicinano sempre più allontanandosi dall'origine, senza toccarli.</li>
<li>Se l'equazione è <b>x²/a² − y²/b² = −1</b> i rami si aprono in alto e in basso: vertici (0, ±b), fuochi F(0, ±c) con c² = a² + b², asintoti sempre y = ±(b/a)x.</li>
</ul>
<p><b>Esempio.</b> x²/9 − y²/16 = 1: a = 3, b = 4, c = √(9 + 16) = 5. Vertici (±3, 0), fuochi (±5, 0), e = 5/3, asintoti y = ±(4/3)x. Verifica: P(5, 16/3) sta sull'iperbole (25/9 − (256/9)/16 = 25/9 − 16/9 = 1); la sua distanza dal fuoco (5, 0) è 16/3 e da (−5, 0) è √(100 + 256/9) = 34/3: la differenza è 18/3 = 6 = 2a ✔️.</p>
<p><b>Iperbole equilatera.</b> Se a = b gli asintoti sono perpendicolari (y = ±x) e e = √2. Ruotata in modo che gli asintoti siano gli assi coordinati ha equazione <b>xy = k</b> (k ≠ 0): è il grafico della <b>proporzionalità inversa</b> y = k/x. Per k &gt; 0 sta nel I e III quadrante, per k &lt; 0 nel II e IV.</p>`
    },
    {
      type: "svg",
      title: "Gli elementi dell'iperbole",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="20" y1="150" x2="580" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="300" y1="10" x2="300" y2="290" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="120" y1="20" x2="480" y2="280" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="8 6"/>
<line x1="120" y1="280" x2="480" y2="20" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="8 6"/>
<path d="M 380 30 Q 350 150 380 270" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M 220 30 Q 250 150 220 270" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="350" cy="150" r="6" fill="#16a34a"/>
<circle cx="250" cy="150" r="6" fill="#16a34a"/>
<circle cx="425" cy="150" r="6" fill="#dc2626"/>
<circle cx="175" cy="150" r="6" fill="#dc2626"/>
<text x="352" y="172" font-size="14" fill="#166534" font-weight="bold">V(a,0)</text>
<text x="185" y="172" font-size="14" fill="#166534" font-weight="bold">V′</text>
<text x="432" y="172" font-size="14" fill="#991b1b" font-weight="bold">F₂</text>
<text x="150" y="172" font-size="14" fill="#991b1b" font-weight="bold">F₁</text>
<text x="440" y="60" font-size="16" fill="#9a3412" font-weight="bold">y = (b/a)x</text>
<text x="440" y="250" font-size="16" fill="#9a3412" font-weight="bold">y = −(b/a)x</text>
<text x="20" y="40" font-size="16" fill="#1d4ed8" font-weight="bold">|PF₁ − PF₂| = 2a</text>
<text x="20" y="65" font-size="16" fill="#1d4ed8">x²/a² − y²/b² = 1</text>
<text x="20" y="90" font-size="16" fill="#334155">c² = a² + b²,  e = c/a &gt; 1</text>
</svg>`,
      caption: "I due rami dell'iperbole si avvicinano agli asintoti (tratteggiati). I fuochi stanno all'interno dei rami, più lontani dal centro dei vertici."
    },
    {
      type: "text",
      title: "Rette e coniche: tangenti e intersezioni",
      html: `<p>Come per la circonferenza, la posizione di una retta rispetto a un'ellisse o a un'iperbole si decide <b>sostituendo</b> y = mx + q nell'equazione della conica: si ottiene un'equazione di secondo grado in x e il segno del <b>discriminante</b> dice se la retta è <b>secante</b> (Δ &gt; 0), <b>tangente</b> (Δ = 0) o <b>esterna</b> (Δ &lt; 0). (Per l'iperbole bisogna fare un'attenzione in più: una retta parallela a un asintoto interseca l'iperbole in un solo punto senza essere tangente, perché l'equazione scende di grado.)</p>
<p><b>Esempio.</b> Ellisse x²/4 + y² = 1 e retta y = x + 1: x²/4 + (x + 1)² = 1 → x² + 4x² + 8x + 4 = 4 → 5x² + 8x = 0 → x = 0 oppure x = −8/5. I punti sono (0, 1) e (−8/5, −3/5): retta secante.</p>
<p><b>Tangente in un punto.</b> Per un punto P(x₀, y₀) dell'ellisse x²/a² + y²/b² = 1 la tangente è <b>x₀x/a² + y₀y/b² = 1</b>; per l'iperbole x²/a² − y²/b² = 1 è <b>x₀x/a² − y₀y/b² = 1</b>. Esempio: in P(0, b) l'ellisse ha tangente y = b (orizzontale), come ci si aspetta nel punto più alto.</p>
<p><b>Parametro k.</b> Per quali k la retta y = x + k è tangente a x²/8 + y²/2 = 1? Sostituendo: x² + 4(x + k)² = 8 → 5x² + 8kx + 4k² − 8 = 0, Δ/4 = 16k² − 5(4k² − 8) = 40 − 4k² = 0 → k² = 10 → k = ±√10.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la galleria dei sussurri",
      html: `<p>L'ellisse ha una proprietà sorprendente: <b>un raggio (di luce o di suono) che parte da un fuoco e rimbalza sulla curva passa sempre per l'altro fuoco</b>. In una stanza dal soffitto o dalle pareti ellittiche, una persona che sussurra in un fuoco viene sentita benissimo da chi sta nell'altro fuoco, anche se i due sono lontani e nel mezzo c'è rumore. Effetti di questo tipo si osservano in alcune gallerie e cupole famose; lo stesso principio è usato in <b>litotrissia</b> (si frantumano i calcoli renali con onde d'urto: l'apparecchio sta in un fuoco di un riflettore ellittico, il calcolo nell'altro).</p>
<p>Se la stanza è x²/25 + y²/9 = 1 con le unità in metri, i fuochi sono a (±4, 0): le due persone devono stare a 8 m di distanza l'una dall'altra, sul segmento che unisce i fuochi.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: orbite e comete",
      html: `<p>Nel 1609 <b>Giovanni Keplero</b> pubblicò l'<i>Astronomia nova</i> con la <b>prima legge</b>: l'orbita di ogni pianeta è un'<b>ellisse</b> con il Sole in uno dei due fuochi. L'orbita della Terra ha eccentricità e ≈ 0,017, praticamente circolare: la distanza dal Sole va da circa 147 a circa 152 milioni di km. La cometa di Halley ha invece e ≈ 0,97: un'ellisse molto allungata, con periodo di circa 76 anni.</p>
<p>Se l'eccentricità sale fino a superare 1 la curva non si chiude più: l'oggetto passa una sola volta e se ne va lungo un <b>ramo di iperbole</b>. Nel 2017 l'asteroide interstellare 'Oumuamua, con un'orbita nettamente iperbolica, fu il primo corpo di questo tipo osservato nel Sistema solare: veniva da fuori e non sarebbe tornato.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il metodo del giardiniere",
      html: `<p>Per disegnare un'ellisse basta una corda e due chiodi: si fissano gli estremi di una corda nei due fuochi e, tenendola tesa con la matita, si traccia la curva. Poiché la corda ha lunghezza fissa, in ogni punto la somma PF₁ + PF₂ è costante: è proprio la definizione dell'ellisse. Si chiama anche <b>metodo del giardiniere</b>, perché è così che si tracciano aiuole ellittiche.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Iperboli nel cielo e nel mare",
      html: `<p>La navigazione <b>LORAN</b> (usata prima del GPS) calcolava la posizione di una nave dalla <b>differenza</b> dei tempi di arrivo di segnali radio da due trasmettitori: differenza di distanza costante significa stare su una iperbole con fuochi nei trasmettitori; con due coppie di trasmettitori si intersecano due iperboli e si trova il punto. Un aereo che supera la velocità del suono trascina un cono d'urto, che incontrando il suolo disegna una curva iperbolica. Non è una coincidenza: l'iperbole è proprio una sezione di cono.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire ellisse e iperbole",
      intro: "Le equazioni sembrano simili: ecco tre modi per ricordare quale è quale e perché.",
      tabs: [
        {
          label: "✂️ Il cono tagliato",
          html: `<p>Immagina un doppio cono, come due clessidre unite per la punta. Se lo tagli con un piano <b>orizzontale</b> ottieni una circonferenza. Inclinando il piano la sezione diventa un'<b>ellisse</b> sempre più allungata. Quando il piano diventa parallelo a un lato del cono la curva non si chiude più: è la <b>parabola</b>. Inclinandolo ancora, il piano taglia entrambe le falde e si ottengono i <b>due rami dell'iperbole</b>. La stessa famiglia, un solo parametro che cambia: l'eccentricità (0 per la circonferenza, tra 0 e 1 per l'ellisse, 1 per la parabola, maggiore di 1 per l'iperbole).</p>`
        },
        {
          label: "🔤 Il segno fa la differenza",
          html: `<p>L'equazione dell'ellisse ha un <b>+</b>: x²/a² + y²/b² = 1. Poiché due quadrati sono positivi, x e y non possono crescere troppo: la curva è limitata, chiusa. L'iperbole ha un <b>−</b>: x²/a² − y²/b² = 1. Ora x² può diventare enorme purché y² lo compensi, e la curva va all'infinito. Quando x e y sono molto grandi, il termine "= 1" conta poco e l'equazione diventa quasi x²/a² − y²/b² = 0, cioè y = ±(b/a)x: ecco gli asintoti. Il segno − ricorda anche che per l'iperbole c² = a² + b² (si somma), per l'ellisse c² = a² − b² (si sottrae).</p>`
        },
        {
          label: "🔺 Il triangolo c, a, b",
          html: `<p>Un modo per ricordare le relazioni tra a, b e c è usare un <b>triangolo rettangolo</b>. Nell'ellisse, il fuoco F, il centro O e il vertice (0, b) formano un triangolo rettangolo con cateti c e b e ipotenusa a (distanza del vertice da un fuoco, che vale a): quindi a² = b² + c², cioè c² = a² − b². Nell'iperbole il triangolo rettangolo con cateti a e b ha ipotenusa c: c² = a² + b². Muovi i cursori e controlla con il teorema di Pitagora: in uno dei due casi l'ipotenusa è a, nell'altro è c.</p>`,
          widget: "pythagoras",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di ellisse e iperbole: tocca i nodi per scoprire il perché",
      nodes: [
        { id: "cono", label: "Sezioni coniche", x: 50, y: 6, color: "#6366f1", html: "Curve ottenute tagliando un cono con un piano.", why: "Apollonio di Perga (circa 200 a.C.) le studiò tutte con la geometria sintetica; i nomi ellisse, parabola e iperbole vengono da lui." },
        { id: "fuochi", label: "Fuochi", x: 18, y: 30, color: "#16a34a", html: "Due punti fissi F₁ e F₂ che definiscono la curva.", why: "Il teorema di Dandelin (1822) mostra che le sfere inscritte nel cono e tangenti al piano toccano il piano proprio nei fuochi: la definizione con i fuochi e quella con il cono sono equivalenti." },
        { id: "ell", label: "Ellisse: somma costante", x: 82, y: 30, color: "#f59e0b", html: "PF₁ + PF₂ = 2a; x²/a² + y²/b² = 1; c² = a² − b²; e &lt; 1.", why: "Nasce dalla definizione 'a corda tesa'. Elevando al quadrato due volte la condizione si ottiene l'equazione canonica; la relazione tra a, b, c è un triangolo rettangolo." },
        { id: "ip", label: "Iperbole: differenza costante", x: 50, y: 52, color: "#a855f7", html: "|PF₁ − PF₂| = 2a; x²/a² − y²/b² = 1; c² = a² + b²; e &gt; 1.", why: "Stessa procedura algebrica dell'ellisse, ma con la differenza al posto della somma: il segno meno nell'equazione ne cambia tutta la forma." },
        { id: "ecc", label: "Eccentricità", x: 18, y: 78, color: "#ef4444", html: "e = c/a misura quanto la curva è lontana dalla circonferenza.", why: "Nella definizione unitaria delle coniche, attribuita a Pappo di Alessandria (IV secolo d.C.), la curva è il luogo dei punti con rapporto costante e tra le distanze da un fuoco e da una retta (direttrice)." },
        { id: "asin", label: "Asintoti", x: 82, y: 78, color: "#0ea5e9", html: "y = ±(b/a)x: rette a cui l'iperbole si avvicina all'infinito.", why: "Per x e y grandi il '1' dell'equazione diventa trascurabile e rimane x²/a² − y²/b² ≈ 0, cioè due rette per l'origine." },
        { id: "keplero", label: "Keplero e le orbite", x: 50, y: 94, color: "#14b8a6", html: "I pianeti percorrono ellissi con il Sole in un fuoco.", why: "Keplero lo scoprì nel 1609 dai dati di Tycho Brahe sull'orbita di Marte; Newton dimostrò poi che una forza inversamente proporzionale al quadrato della distanza genera orbite coniche." }
      ],
      edges: [
        ["cono", "fuochi", "si descrive con"],
        ["fuochi", "ell", "somma"],
        ["fuochi", "ip", "differenza"],
        ["ell", "ecc", "e &lt; 1"],
        ["ip", "asin", "ha"],
        ["ip", "ecc", "e &gt; 1"],
        ["ell", "keplero", "applicata a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: iperbole",
      questions: [
        { type: "num", q: "Nell'iperbole x²/9 − y²/16 = 1 calcola c.", answer: 5, explain: "c² = a² + b² = 9 + 16 = 25, quindi c = 5." },
        { type: "mc", q: "Gli asintoti di x²/4 − y²/9 = 1 sono…", options: ["y = ±(3/2)x", "y = ±(2/3)x", "y = ±x"], answer: 0, explain: "y = ±(b/a)x con a = 2 e b = 3." },
        { type: "tf", q: "L'eccentricità di un'iperbole è sempre minore di 1.", answer: false, explain: "Per l'iperbole e = c/a &gt; 1 perché c² = a² + b² &gt; a². Minore di 1 è l'ellisse." }
      ]
    }
  ],
  glossary: [
    { t: "Conica", d: "Curva ottenuta come sezione di un cono con un piano: circonferenza, ellisse, parabola, iperbole." },
    { t: "Fuochi", d: "I due punti fissi F₁ e F₂ rispetto ai quali si definiscono ellisse e iperbole." },
    { t: "Ellisse", d: "Luogo dei punti la cui somma delle distanze dai fuochi è costante (2a)." },
    { t: "Iperbole", d: "Luogo dei punti la cui differenza (in valore assoluto) delle distanze dai fuochi è costante (2a)." },
    { t: "Semiassi", d: "I numeri a e b nell'equazione canonica: metà delle lunghezze degli assi dell'ellisse." },
    { t: "Vertici", d: "I punti in cui la conica taglia i suoi assi di simmetria." },
    { t: "Eccentricità", d: "Il rapporto e = c/a: 0 ≤ e &lt; 1 per l'ellisse, e &gt; 1 per l'iperbole." },
    { t: "Asintoto", d: "Retta a cui una curva si avvicina indefinitamente senza toccarla: per l'iperbole y = ±(b/a)x." },
    { t: "Iperbole equilatera", d: "Iperbole con a = b, asintoti perpendicolari: xy = k è la sua equazione rispetto agli asintoti." },
    { t: "Apollonio di Perga", d: "Matematico greco (III–II sec. a.C.), autore delle Coniche, che diede i nomi alle sezioni coniche." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale equazione rappresenta un'ellisse?", options: ["x²/9 + y²/4 = 1", "x²/9 − y²/4 = 1", "x² + y² = 9"], answer: 0, explain: "Somma di quadrati con denominatori diversi: ellisse. Con il segno meno è un'iperbole, con x² + y² = r² una circonferenza." },
      { type: "num", q: "Nell'ellisse x²/25 + y²/9 = 1 calcola la distanza focale 2c.", answer: 8, explain: "c² = 25 − 9 = 16, c = 4, quindi 2c = 8." },
      { type: "num", q: "Qual è l'eccentricità (in decimale) dell'ellisse x²/25 + y²/9 = 1?", answer: 0.8, tol: 0.001, explain: "e = c/a = 4/5 = 0,8." },
      { type: "mc", q: "Quali sono i fuochi di x²/9 − y²/16 = 1?", options: ["(±5, 0)", "(±√7, 0)", "(0, ±5)"], answer: 0, explain: "c² = a² + b² = 25; l'iperbole si apre lungo l'asse x." },
      { type: "mc", q: "Gli asintoti di x²/16 − y²/9 = 1 sono…", options: ["y = ±(3/4)x", "y = ±(4/3)x", "y = ±x"], answer: 0, explain: "y = ±(b/a)x = ±(3/4)x." },
      { type: "tf", q: "Un'ellisse con a = b ha eccentricità 0.", answer: true, explain: "c² = a² − b² = 0: i fuochi coincidono con il centro e la curva è una circonferenza." },
      { type: "mc", q: "L'equazione xy = 6 rappresenta…", options: ["un'iperbole equilatera", "un'ellisse", "una parabola"], answer: 0, explain: "È il grafico della proporzionalità inversa y = 6/x, iperbole con gli assi come asintoti." },
      { type: "tf", q: "Un'iperbole interseca l'asse delle ordinate nell'origine.", answer: false, explain: "Per x²/a² − y²/b² = 1, con x = 0 si avrebbe y² = −b² &lt; 0: non ci sono intersezioni con l'asse y. L'origine è il centro e non appartiene alla curva." },
      { type: "text", q: "Come si chiama l'astronomo che per primo, nel 1609, enunciò che le orbite dei pianeti sono ellittiche? (cognome)", answer: ["keplero", "kepler", "giovanni keplero", "johannes kepler"], explain: "Giovanni Keplero (Johannes Kepler), nell'Astronomia nova (1609): il Sole occupa uno dei due fuochi." },
      { type: "order", q: "Metti in ordine i passi per trovare i fuochi di un'ellisse data in forma 9x² + 25y² = 225.", items: ["Dividere per 225 per ottenere x²/25 + y²/9 = 1", "Leggere a² = 25 e b² = 9", "Calcolare c² = a² − b² = 16", "Scrivere i fuochi F(±4, 0)"], explain: "Si porta l'equazione in forma canonica, si leggono i quadrati dei semiassi, si calcola c e si scrivono i fuochi sull'asse del semiasse maggiore." }
    ]
  }
});

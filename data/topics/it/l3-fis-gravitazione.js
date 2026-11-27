TOPIC('it', {
  id: "l3-fis-gravitazione",
  title: "La gravitazione universale",
  intro: "La stessa forza che fa cadere una mela dall'albero tiene la Luna in orbita attorno alla Terra e i pianeti attorno al Sole. È una delle idee più potenti della storia della scienza: nel 1687 Isaac Newton mostrò che <b>la fisica del cielo e quella della Terra sono la stessa fisica</b>. In questa lezione partiamo dalle tre leggi di <b>Keplero</b>, scopriamo la <b>legge di gravitazione universale</b>, calcoliamo la velocità dei <b>satelliti</b> e introduciamo il concetto di <b>campo gravitazionale</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Dal cielo di Tolomeo alle ellissi di Keplero",
      html: `<p>Per quasi quindici secoli si accettò il modello <b>geocentrico</b> di Tolomeo (II sec. d.C., <i>Almagesto</i>): la Terra ferma al centro, e i pianeti che si muovono su cerchi e cerchi sui cerchi (epicicli). Nel 1543 <b>Niccolò Copernico</b> propose il modello <b>eliocentrico</b>, con il Sole al centro, ma conservando le orbite circolari. Con il telescopio (1609-1610) <b>Galileo</b> scoprì le fasi di Venere e i satelliti di Giove, prove che non tutto ruota attorno alla Terra.</p>
<p>Il passo decisivo lo fece <b>Johannes Keplero</b> (1571-1630), che ereditò le osservazioni di Marte, di precisione senza precedenti, di <b>Tycho Brahe</b> (1546-1601), l'astronomo che osservava a occhio nudo con strumenti di grandissima accuratezza. Dopo anni di calcoli Keplero scoprì tre leggi empiriche.</p>`
    },
    {
      type: "widget",
      title: "Dalla Terra al Sole: la grande cronologia",
      widget: "timeline",
      options: { unit: "anni", events: [
        { year: 150, label: "Tolomeo: Almagesto", icon: "🌍" },
        { year: 1543, label: "Copernico: De revolutionibus", icon: "☀️" },
        { year: 1609, label: "Keplero: prime due leggi", icon: "🪐" },
        { year: 1610, label: "Galileo: lune di Giove", icon: "🔭" },
        { year: 1619, label: "Keplero: terza legge", icon: "📐" },
        { year: 1687, label: "Newton: Principia", icon: "🍎" },
        { year: 1798, label: "Cavendish misura G", icon: "⚖️" },
        { year: 1846, label: "Scoperta di Nettuno", icon: "🔵" },
        { year: 1915, label: "Einstein: relatività generale", icon: "🌀" }
      ] },
      caption: "In meno di un secolo il cielo da «mondo perfetto» diventa un sistema governato da leggi matematiche."
    },
    {
      type: "decision",
      title: "Keplero e gli 8 primi d'arco",
      html: "<p>Keplero ha provato per anni a descrivere l'orbita di Marte con un cerchio (come volevano Aristotele, Tolomeo e Copernico). Il miglior cerchio che trova riproduce i dati di Tycho con un errore di <b>8 primi d'arco</b> (circa un quarto del diametro apparente della Luna piena). Per tutti gli astronomi dell'epoca un errore così sarebbe stato accettabile: gli strumenti di allora avevano errori simili.</p><p>Ma Keplero sa che Tycho misurava con una precisione di 1-2 primi d'arco.</p>",
      question: "Che cosa avresti fatto?",
      options: [
        { label: "Mantenere il cerchio: l'errore è piccolo, vale la tradizione", outcome: "Avresti seguito la saggezza di duemila anni, ma la teoria sarebbe rimasta in disaccordo con i dati migliori mai raccolti e la scoperta delle leggi sarebbe slittata." },
        { label: "Fidarsi dei dati di Tycho e cercare una curva diversa dal cerchio", outcome: "È la scelta di Keplero: abbandona un principio filosofico millenario perché non regge l'osservazione. Prova l'ovale, poi l'ellisse." },
        { label: "Dire che Tycho si è sbagliato nelle misure", outcome: "Sarebbe stato più comodo, ma sbagliato: i dati di Tycho erano eccellenti e Keplero lo sapeva." }
      ],
      answer: 1,
      explain: "Keplero scrive che «da questi otto primi d'arco nasce una rivoluzione dell'astronomia». Nell'<i>Astronomia nova</i> (1609) pubblica le prime due leggi: l'orbita di Marte è un'ellisse con il Sole in un fuoco, e il raggio vettore spazza aree uguali in tempi uguali. Il metodo è un modello della scienza: se la teoria non riproduce i dati, si cambia la teoria."
    },
    {
      type: "text",
      title: "Le tre leggi di Keplero",
      html: `<ol>
<li><b>Legge delle orbite</b> (1609): i pianeti percorrono <b>ellissi</b> di cui il <b>Sole occupa uno dei due fuochi</b>. L'ellisse ha un semiasse maggiore <b>a</b>. Le orbite dei pianeti sono molto vicine a un cerchio (quella terrestre ha eccentricità 0,017).</li>
<li><b>Legge delle aree</b> (1609): il segmento che congiunge il pianeta al Sole <b>spazza aree uguali in tempi uguali</b>. Quindi il pianeta va <b>più veloce</b> quando è più vicino al Sole (perielio) e più lento quando è più lontano (afelio). Equivale alla conservazione del momento angolare L = m·v·r.</li>
<li><b>Legge dei periodi</b> (1619, <i>Harmonices mundi</i>): il rapporto tra il <b>quadrato del periodo</b> di rivoluzione e il <b>cubo del semiasse maggiore</b> è <b>lo stesso per tutti i pianeti</b>:</li>
</ol>
<p style="text-align:center"><b>T² / a³ = costante</b></p>
<p>Con T in anni e a in <b>unità astronomiche</b> (1 UA = distanza media Terra-Sole ≈ 1,5·10<sup>11</sup> m), la costante vale 1 per i pianeti del Sistema Solare.</p>
<table>
<tr><th>Pianeta</th><th>a (UA)</th><th>T (anni)</th><th>T²/a³</th></tr>
<tr><td>Mercurio</td><td>0,387</td><td>0,241</td><td>≈ 1,0</td></tr>
<tr><td>Terra</td><td>1,000</td><td>1,000</td><td>1,0</td></tr>
<tr><td>Marte</td><td>1,524</td><td>1,881</td><td>≈ 1,0</td></tr>
<tr><td>Giove</td><td>5,203</td><td>11,86</td><td>≈ 1,0</td></tr>
<tr><td>Saturno</td><td>9,537</td><td>29,46</td><td>≈ 1,0</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Ellisse e legge delle aree",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g font-family="sans-serif">
<ellipse cx="300" cy="150" rx="250" ry="110" fill="none" stroke="#94a3b8" stroke-width="3"/>
<circle cx="200" cy="150" r="14" fill="#facc15"/>
<text x="200" y="185" font-size="15" fill="#fde68a" text-anchor="middle">Sole (fuoco)</text>
<circle cx="400" cy="150" r="4" fill="#94a3b8"/>
<text x="400" y="172" font-size="14" fill="#94a3b8" text-anchor="middle">altro fuoco</text>
<path d="M200 150 L 110 148 L 98 120 Z" fill="#ef4444" fill-opacity="0.6" stroke="#fca5a5" stroke-width="2"/>
<path d="M200 150 L 520 116 L 545 150 L 535 175 Z" fill="#3b82f6" fill-opacity="0.5" stroke="#93c5fd" stroke-width="2"/>
<circle cx="105" cy="140" r="9" fill="#38bdf8"/>
<circle cx="535" cy="165" r="9" fill="#38bdf8"/>
<text x="60" y="95" font-size="15" fill="#fca5a5">perielio:</text>
<text x="60" y="113" font-size="15" fill="#fca5a5">veloce</text>
<text x="500" y="95" font-size="15" fill="#93c5fd">afelio: lento</text>
<text x="300" y="30" font-size="15" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Aree uguali in tempi uguali</text>
<text x="300" y="285" font-size="14" fill="#cbd5e1" text-anchor="middle">(ellisse molto accentuata per chiarezza)</text>
</g>
</svg>`,
      caption: "Le due aree colorate sono spazzate nello stesso intervallo di tempo: sono uguali anche se gli archi percorsi sono diversi."
    },
    {
      type: "3d",
      title: "Il Sistema Solare in movimento",
      scene: "solar",
      options: { labels: true },
      caption: "Osserva come i pianeti più lontani impiegano molto più tempo a compiere un'orbita (terza legge di Keplero)."
    },
    {
      type: "example",
      title: "Quanto dura l'anno su Marte e su Giove?",
      html: `<p>Con la terza legge, in anni terrestri e UA: T = a<sup>3/2</sup>.</p>
<ul>
<li><b>Marte</b>: a = 1,52 UA ⟹ T = 1,52<sup>1,5</sup> ≈ <b>1,87 anni</b> (circa 687 giorni);</li>
<li><b>Giove</b>: a = 5,20 UA ⟹ T = 5,20<sup>1,5</sup> ≈ <b>11,9 anni</b>;</li>
<li><b>Una cometa</b> con a = 17,8 UA: T = 17,8<sup>1,5</sup> ≈ 75 anni — è la cometa di Halley, che torna ogni 75-76 anni (ultimo passaggio al perielio: 1986, prossimo nel 2061).</li>
</ul>
<p>La stessa legge vale per i satelliti di un pianeta, con una costante diversa: T²/a³ dipende dalla massa del corpo centrale.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: Keplero",
      questions: [
        { type: "mc", q: "Dove si trova il Sole rispetto all'orbita ellittica di un pianeta?", options: ["Al centro dell'ellisse", "In uno dei due fuochi", "In un punto qualunque", "All'afelio"], answer: 1, explain: "Prima legge di Keplero: il Sole occupa uno dei due fuochi." },
        { type: "num", q: "Un asteroide ha semiasse maggiore a = 4 UA. Quanto dura il suo anno (in anni terrestri)?", answer: 8, tol: 0.01, unit: "anni", explain: "T = a^(3/2) = 4^1,5 = 8 anni." },
        { type: "tf", q: "Un pianeta si muove più velocemente quando è più vicino al Sole.", answer: true, explain: "Seconda legge: per spazzare la stessa area il raggio più corto deve avere velocità maggiore (L = m·v·r costante)." }
      ]
    },
    {
      type: "text",
      title: "La legge di gravitazione universale",
      html: `<p>Keplero descrive <i>come</i> si muovono i pianeti, ma non spiega <i>perché</i>. Newton (<i>Philosophiae Naturalis Principia Mathematica</i>, 1687) mostrò che le tre leggi seguono da <b>un'unica forza</b>: tutti i corpi dotati di massa si attirano con una forza</p>
<p style="text-align:center"><b>F = G · m<sub>1</sub> · m<sub>2</sub> / r²</b></p>
<ul>
<li><b>m<sub>1</sub>, m<sub>2</sub></b>: masse dei due corpi (considerate puntiformi, o sfere omogenee con r = distanza tra i centri);</li>
<li><b>r</b>: distanza tra i centri;</li>
<li><b>G = 6,67·10<sup>-11</sup> N·m²/kg²</b>: costante di gravitazione universale (uguale ovunque).</li>
</ul>
<p>Caratteristiche: la forza è sempre <b>attrattiva</b>, agisce lungo la retta che unisce i centri, rispetta il <b>terzo principio</b> (le due forze sono uguali e opposte) e decresce con il <b>quadrato della distanza</b> («legge dell'inverso del quadrato»): raddoppiando r la forza diventa un quarto, triplicando diventa un nono.</p>
<p>La forza è <b>debolissima</b> per oggetti comuni: due persone di 70 kg a 1 m si attirano con F = 6,67·10<sup>-11</sup> × 70 × 70 / 1 ≈ 3,3·10<sup>-7</sup> N (meno del peso di un granello di sabbia). Diventa grande solo quando almeno una massa è astronomica.</p>
<p>La costante G non era nota a Newton: fu misurata da <b>Henry Cavendish</b> nel 1798 con una bilancia di torsione, due piccole sfere di piombo attratte da due grandi sfere. Si dice che Cavendish abbia «pesato la Terra»: nota G, e noto g, si ricava la massa terrestre.</p>`
    },
    {
      type: "example",
      title: "La prova della Luna",
      html: `<p>Newton si chiese: se la forza di gravità decresce come 1/r², la Luna (a 60 raggi terrestri) deve «cadere» verso la Terra con un'accelerazione 60² = 3600 volte minore di g. Dunque a<sub>Luna</sub> = 9,8/3600 ≈ <b>2,7·10<sup>-3</sup> m/s²</b>.</p>
<p>Dal moto circolare: a<sub>c</sub> = 4π²r/T². Con r = 3,84·10<sup>8</sup> m e T = 27,3 giorni = 2,36·10<sup>6</sup> s si ottiene a<sub>c</sub> = 39,5 × 3,84·10<sup>8</sup> / (5,57·10<sup>12</sup>) ≈ <b>2,7·10<sup>-3</sup> m/s²</b>. Il conto torna: è la stessa forza che fa cadere la mela e tiene la Luna in orbita. La Luna cade continuamente verso la Terra, ma ha una velocità tangenziale così alta che «manca» sempre il bersaglio.</p>`
    },
    {
      type: "text",
      title: "Il campo gravitazionale e la gravità sulla Terra",
      html: `<p>Una massa M modifica lo spazio intorno a sé: in ogni punto crea un <b>campo gravitazionale</b> g⃗, definito come la forza per unità di massa che si eserciterebbe su una massa di prova m posta in quel punto:</p>
<p style="text-align:center"><b>g⃗ = F⃗/m &nbsp;⟹&nbsp; g = G·M/r²</b> (a distanza r dal centro)</p>
<p>Il campo è un vettore che punta verso M e si misura in N/kg (equivalente a m/s²). Alla superficie di un pianeta di massa M e raggio R:</p>
<p style="text-align:center"><b>g = G·M / R²</b></p>
<p>Per la Terra (M = 5,97·10<sup>24</sup> kg, R = 6,37·10<sup>6</sup> m): g = 6,67·10<sup>-11</sup> × 5,97·10<sup>24</sup> / (6,37·10<sup>6</sup>)² ≈ <b>9,8 m/s²</b>. Il peso P = m·g non è altro che la forza di gravitazione sulla superficie. Si spiega anche perché <b>tutti i corpi cadono con la stessa accelerazione</b>: la forza è proporzionale a m, ma l'accelerazione a = F/m non dipende da m.</p>
<p>Con la quota g diminuisce: a un'altezza h sopra la superficie g(h) = G·M/(R + h)². A 400 km (orbita della ISS) g ≈ 8,7 m/s², ancora l'88% del valore al suolo: gli astronauti «fluttuano» non perché manchi la gravità, ma perché sono in <b>caduta libera</b> insieme alla stazione.</p>
<table>
<tr><th>Corpo</th><th>g alla superficie (m/s²)</th></tr>
<tr><td>Sole</td><td>≈ 274</td></tr>
<tr><td>Giove</td><td>≈ 24,8</td></tr>
<tr><td>Terra</td><td>9,81</td></tr>
<tr><td>Marte</td><td>≈ 3,7</td></tr>
<tr><td>Luna</td><td>≈ 1,62</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Controlla: legge di Newton e g",
      questions: [
        { type: "mc", q: "Se la distanza tra due corpi si raddoppia, la forza gravitazionale:", options: ["raddoppia", "si dimezza", "diventa un quarto", "diventa un ottavo"], answer: 2, explain: "F ∝ 1/r²: con r doppio la forza diventa 1/4." },
        { type: "num", q: "A quale distanza dal centro della Terra (in raggi terrestri R) g vale un quarto del valore alla superficie?", answer: 2, tol: 0, unit: "R", explain: "g ∝ 1/r²: g/4 se r = 2R, cioè a un'altezza di un raggio terrestre sopra la superficie." },
        { type: "tf", q: "Gli astronauti sulla ISS fluttuano perché lì non c'è gravità.", answer: false, explain: "A 400 km g vale ancora circa l'88% di quello al suolo: gli astronauti sono in caduta libera insieme alla stazione." }
      ]
    },
    {
      type: "text",
      title: "I satelliti: orbite circolari",
      html: `<p>Un satellite (artificiale o naturale) in orbita circolare di raggio r attorno a un corpo di massa M ha come forza centripeta la <b>forza di gravitazione</b>:</p>
<p style="text-align:center">m·v²/r = G·M·m/r² &nbsp;⟹&nbsp; <b>v = √(G·M / r)</b></p>
<p>Il periodo è T = 2π·r/v, da cui <b>T² = (4π²/GM)·r³</b>: ecco la terza legge di Keplero con la costante spiegata, K = 4π²/(G·M). Dai risultati si vede che:</p>
<ul>
<li>la <b>massa del satellite non conta</b>: una palla e un'astronave alla stessa quota hanno la stessa velocità e lo stesso periodo;</li>
<li>più l'orbita è <b>alta</b>, più il satellite è <b>lento</b> e ha periodo lungo;</li>
<li>conoscendo T e r di un satellite si può <b>pesare</b> il corpo centrale: M = 4π²r³/(G·T²). Così si è determinata la massa del Sole (usando la Terra), di Giove (usando le sue lune) ecc.</li>
</ul>
<p><b>Esempi.</b> Stazione spaziale ISS: quota ≈ 400 km ⟹ r ≈ 6,78·10<sup>6</sup> m; v = √(3,99·10<sup>14</sup>/6,78·10<sup>6</sup>) ≈ <b>7,7 km/s</b> (circa 27 600 km/h), periodo ≈ <b>92 minuti</b>: 16 albe al giorno. <b>Satellite geostazionario</b>: periodo di un giorno siderale (23 h 56 min), orbita equatoriale con r ≈ 42 160 km, cioè a circa 35 800 km dalla superficie: appare fermo nel cielo, ideale per le telecomunicazioni e la meteorologia.</p>`
    },
    {
      type: "svg",
      title: "Il cannone di Newton",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<g font-family="sans-serif">
<circle cx="300" cy="380" r="260" fill="#60a5fa" stroke="#1d4ed8" stroke-width="4"/>
<rect x="283" y="108" width="34" height="18" fill="#334155" rx="3"/>
<text x="300" y="98" font-size="15" fill="#0f172a" text-anchor="middle">cannone sulla montagna</text>
<path d="M317 117 Q 400 100 450 190" stroke="#dc2626" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
<path d="M317 117 Q 480 90 520 260" stroke="#f59e0b" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
<path d="M317 117 Q 570 80 580 300" stroke="#16a34a" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
<text x="455" y="205" font-size="14" fill="#991b1b">poca velocità: ricade</text>
<text x="300" y="60" font-size="15" fill="#166534" text-anchor="middle">v = √(GM/R) ≈ 7,9 km/s: orbita!</text>
</g>
</svg>`,
      caption: "Newton immaginò un cannone sulla cima di una montagna: più forte è lo sparo, più lontano ricade il proiettile. A una certa velocità la Terra «si curva» sotto di esso quanto il proiettile cade: è un'orbita."
    },
    {
      type: "text",
      title: "Energia potenziale e velocità di fuga",
      html: `<p>Vicino alla superficie l'energia potenziale gravitazionale è U = m·g·h. In generale, scegliendo U = 0 a distanza infinita, per una massa m a distanza r dal centro di M:</p>
<p style="text-align:center"><b>U(r) = − G·M·m / r</b></p>
<p>È negativa: la massa è «legata» al pianeta e per allontanarla bisogna fornire energia. Per un satellite in orbita circolare l'energia cinetica è K = ½mv² = G·M·m/(2r) e l'energia totale E = K + U = −G·M·m/(2r) (negativa: orbita legata).</p>
<p>La <b>velocità di fuga</b> è la velocità minima da dare a un corpo dalla superficie per fargli raggiungere l'infinito (con E = 0, trascurando l'aria): ½mv² = G·M·m/R ⟹</p>
<p style="text-align:center"><b>v<sub>fuga</sub> = √(2·G·M / R) = √2 · v<sub>orbitale</sub></b></p>
<p>Per la Terra v<sub>fuga</sub> ≈ <b>11,2 km/s</b> (la velocità orbitale a bassa quota è 7,9 km/s); per la Luna ≈ 2,4 km/s: troppo poco per trattenere un'atmosfera. Per un corpo abbastanza denso da avere v<sub>fuga</sub> maggiore della velocità della luce nemmeno la luce può uscire: è un <b>buco nero</b> (descritto rigorosamente dalla relatività generale).</p>`
    },
    {
      type: "example",
      title: "Pesare la Terra e il Sole",
      html: `<p><b>Massa della Terra.</b> Dalla g alla superficie: M = g·R²/G = 9,81 × (6,37·10<sup>6</sup>)² / 6,67·10<sup>-11</sup> ≈ <b>5,97·10<sup>24</sup> kg</b>.</p>
<p><b>Massa del Sole.</b> La Terra orbita a r = 1,50·10<sup>11</sup> m con T = 3,156·10<sup>7</sup> s: M<sub>S</sub> = 4π²r³/(G·T²) = 39,5 × 3,375·10<sup>33</sup> / (6,67·10<sup>-11</sup> × 9,96·10<sup>14</sup>) ≈ <b>2,0·10<sup>30</sup> kg</b>: circa 333 000 masse terrestri.</p>
<p>Senza mai mettere un piede sul Sole abbiamo ricavato la sua massa con la sola osservazione di un'orbita: la bellezza della gravitazione universale.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la gravitazione",
      intro: "Un'idea così grande ha molte immagini: scegli quella che ti aiuta di più.",
      tabs: [
        {
          label: "🔦 L'inverso del quadrato",
          html: "<p>Immagina una lampadina: la sua luce si distribuisce su una sfera sempre più grande. A distanza r la superficie è 4πr², quindi l'intensità cala come 1/r². Con la gravità, l'«influenza» di una massa si diffonde nello spazio tridimensionale allo stesso modo: ecco perché la legge è 1/r² e non, per esempio, 1/r o 1/r³. È anche la ragione per cui le orbite stabili ed ellittiche esistono solo con questa potenza: con altre leggi le orbite non si chiuderebbero.</p>"
        },
        {
          label: "🧗 La buca di potenziale",
          html: "<p>Pensa all'energia potenziale come a un <b>pozzo</b> con forma a imbuto (come quelli dei musei della scienza, dove le monete girano a spirale). Un pianeta è un imbuto profondo, e la moneta che gira rappresenta un satellite: se è veloce rimane alta, se rallenta scende a spirale. Se ha energia sufficiente esce dal pozzo (velocità di fuga). Le orbite chiuse sono quelle con energia totale negativa, cioè «intrappolate» nell'imbuto.</p>"
        },
        {
          label: "🔗 Abbina leggi e formule",
          html: "<p>Collega ogni legge o grandezza alla sua formula.</p>",
          widget: "match",
          options: { pairs: [
            ["Terza legge di Keplero", "T²/a³ = costante"],
            ["Gravitazione universale", "F = G·m1·m2/r²"],
            ["Campo gravitazionale", "g = G·M/r²"],
            ["Velocità orbitale circolare", "v = √(G·M/r)"],
            ["Velocità di fuga", "v = √(2·G·M/R)"]
          ] }
        },
        {
          label: "📉 Disegno: g con la distanza",
          html: "<p>Il campo gravitazionale decresce rapidamente allontanandosi dalla superficie (r in raggi terrestri).</p>",
          svg: "<svg viewBox='0 0 600 270' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='270' fill='#f8fafc'/><g font-family='sans-serif'><line x1='60' y1='230' x2='560' y2='230' stroke='#334155' stroke-width='3'/><line x1='60' y1='230' x2='60' y2='20' stroke='#334155' stroke-width='3'/><path d='M120 44 C 160 140 200 175 240 183 S 320 203 360 209 S 440 216 480 218 L 540 220' stroke='#2563eb' stroke-width='5' fill='none'/><g font-size='14' fill='#334155' text-anchor='middle'><text x='120' y='250'>1 R</text><text x='240' y='250'>2 R</text><text x='360' y='250'>3 R</text><text x='480' y='250'>4 R</text></g><text x='30' y='125' font-size='14' fill='#334155' transform='rotate(-90 30 125)' text-anchor='middle'>g</text><text x='140' y='60' font-size='14' fill='#1e3a8a'>9,8 m/s² (r = R)</text><text x='250' y='170' font-size='14' fill='#1e3a8a'>2,45 (r = 2R)</text><text x='370' y='196' font-size='14' fill='#1e3a8a'>1,09 (r = 3R)</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Nettuno scoperto con la matematica",
      html: `<p>Verso il 1840 si notò che l'orbita di Urano (scoperto da William Herschel nel 1781) mostrava piccole irregolarità rispetto alla previsione newtoniana. Due matematici, <b>Urbain Le Verrier</b> in Francia e <b>John Couch Adams</b> in Inghilterra, ipotizzarono l'esistenza di un pianeta sconosciuto e ne calcolarono la posizione. Il 23 settembre 1846 l'astronomo <b>Johann Galle</b>, a Berlino, puntò il telescopio nel punto indicato da Le Verrier e trovò <b>Nettuno</b> entro meno di un grado: la legge di gravitazione di Newton era così affidabile da permettere di scoprire un pianeta «con la penna».</p>`
    },
    {
      type: "curiosity",
      title: "Quando Newton non basta: Mercurio e Einstein",
      html: `<p>Anche Mercurio mostrava un'anomalia: il suo perielio ruotava di circa 43 secondi d'arco per secolo in più di quanto la teoria di Newton prevedesse. Si cercò un altro pianeta, «Vulcano», ma non esisteva. Il problema fu risolto solo nel 1915 da <b>Albert Einstein</b> con la <b>relatività generale</b>: la gravità non è una forza a distanza ma una <b>curvatura dello spazio-tempo</b> causata da massa ed energia. Per i corpi lenti e deboli la teoria di Einstein coincide con quella di Newton, che resta eccellente per calcolare le orbite dei satelliti e le traiettorie delle sonde spaziali.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della gravitazione",
      nodes: [
        { id: "keplero", label: "Leggi di Keplero", x: 15, y: 12, color: "#16a34a", html: "Orbite ellittiche, aree uguali in tempi uguali, T²/a³ = costante.", why: "Furono ricavate (1609-1619) dall'analisi dei dati di Tycho Brahe sul moto di Marte: sono leggi empiriche, che descrivono ma non spiegano." },
        { id: "newton", label: "Gravitazione universale F = G m1 m2/r²", x: 70, y: 12, color: "#ef4444", html: "Tutte le masse si attirano con una forza inversamente proporzionale al quadrato della distanza.", why: "Newton la ricavò mostrando che una forza centrale 1/r² produce orbite ellittiche, aree uguali e la terza legge. Il confronto con l'accelerazione della Luna ne confermò l'universalità." },
        { id: "campo", label: "Campo gravitazionale g = GM/r²", x: 85, y: 50, color: "#8b5cf6", html: "Forza per unità di massa: un vettore in ogni punto dello spazio, diretto verso M.", why: "L'idea di campo (Faraday, Maxwell) risolve l'imbarazzo dell'«azione a distanza» di Newton: la massa modifica lo spazio e la modifica agisce su un'altra massa." },
        { id: "satelliti", label: "Satelliti e orbite", x: 15, y: 55, color: "#2563eb", html: "v = √(GM/r), T² = 4π²r³/(GM): la forza di gravità fa da forza centripeta.", why: "Nell'orbita circolare gravità e forza centripeta coincidono. La terza legge di Keplero si ricava così e la costante contiene la massa del corpo centrale." },
        { id: "energia", label: "Energia potenziale e fuga", x: 55, y: 85, color: "#f59e0b", html: "U = −GMm/r; v di fuga = √(2GM/R) ≈ 11,2 km/s per la Terra.", why: "Si ottiene integrando la forza di gravità. L'energia negativa indica che il corpo è legato; v di fuga corrisponde a energia totale nulla." },
        { id: "einstein", label: "Relatività generale", x: 20, y: 90, color: "#64748b", html: "La gravità come curvatura dello spazio-tempo (1915).", why: "Spiega ciò che Newton non spiegava (perielio di Mercurio, deflessione della luce, onde gravitazionali) e include la teoria di Newton come caso limite." }
      ],
      edges: [["keplero", "newton", "spiegate da"], ["newton", "campo", "si descrive con"], ["newton", "satelliti", "determina"], ["newton", "energia", "implica"], ["newton", "einstein", "generalizzata da"]]
    }
  ],
  glossary: [
    { t: "Eliocentrismo", d: "Modello in cui il Sole è al centro del Sistema Solare e i pianeti gli orbitano attorno." },
    { t: "Semiasse maggiore", d: "Metà del diametro maggiore di un'ellisse: la «distanza media» di un pianeta dal Sole." },
    { t: "Perielio / afelio", d: "Punti dell'orbita più vicino / più lontano dal Sole." },
    { t: "Unità astronomica (UA)", d: "Distanza media Terra-Sole, circa 1,5·10¹¹ m." },
    { t: "Costante di gravitazione G", d: "G = 6,67·10⁻¹¹ N·m²/kg²: costante universale della legge di Newton." },
    { t: "Campo gravitazionale", d: "Forza per unità di massa in ogni punto dello spazio; g = G·M/r²." },
    { t: "Velocità di fuga", d: "Velocità minima per allontanarsi indefinitamente da un corpo celeste; per la Terra ≈ 11,2 km/s." },
    { t: "Satellite geostazionario", d: "Satellite con periodo di un giorno siderale in orbita equatoriale: appare fermo nel cielo." },
    { t: "Caduta libera", d: "Moto di un corpo soggetto alla sola gravità: spiega l'assenza di peso apparente in orbita." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa afferma la seconda legge di Keplero?", options: ["I pianeti percorrono orbite circolari", "Il raggio vettore spazza aree uguali in tempi uguali", "T² è proporzionale a a³", "La velocità è costante"], answer: 1, explain: "Equivale alla conservazione del momento angolare: il pianeta è più veloce al perielio." },
      { type: "num", q: "Un pianeta ha semiasse maggiore a = 9 UA. Qual è il suo periodo in anni (terza legge)?", answer: 27, tol: 0.01, unit: "anni", explain: "T = a^(3/2) = 9^1,5 = 27 anni." },
      { type: "mc", q: "Se la distanza tra due masse triplica, la forza gravitazionale:", options: ["triplica", "si riduce a un terzo", "si riduce a un nono", "resta uguale"], answer: 2, explain: "F ∝ 1/r²: con r triplo F diventa 1/9." },
      { type: "tf", q: "La forza di gravitazione tra Terra e Luna è uguale in modulo sulla Terra e sulla Luna.", answer: true, explain: "Per il terzo principio le due forze sono uguali e opposte." },
      { type: "num", q: "Qual è l'accelerazione di gravità a un'altezza di 2 raggi terrestri sopra la superficie (r = 3R)? Usa g0 = 9,8 m/s².", answer: 1.09, tol: 0.02, unit: "m/s²", explain: "g = g0/9 = 9,8/9 ≈ 1,09 m/s²." },
      { type: "tf", q: "Un satellite più massiccio, alla stessa quota, ha una velocità orbitale maggiore.", answer: false, explain: "v = √(GM/r) non dipende dalla massa del satellite." },
      { type: "mc", q: "Come cambia il periodo di un satellite se il raggio dell'orbita aumenta?", options: ["Diminuisce", "Aumenta", "Resta uguale", "Dipende dalla massa del satellite"], answer: 1, explain: "T² ∝ r³: orbite più alte hanno periodi più lunghi." },
      { type: "num", q: "Un satellite orbita attorno alla Terra con r = 6,78·10⁶ m. Con GM = 3,99·10¹⁴ m³/s², qual è circa la sua velocità in km/s?", answer: 7.67, tol: 0.1, unit: "km/s", explain: "v = √(GM/r) = √(5,88·10⁷) ≈ 7670 m/s ≈ 7,7 km/s." },
      { type: "mc", q: "Perché gli astronauti nella ISS fluttuano?", options: ["Non c'è gravità a quella quota", "Sono in caduta libera insieme alla stazione", "L'aria li sostiene", "Sono fuori dall'attrazione terrestre"], answer: 1, explain: "A 400 km g ≈ 8,7 m/s²: astronauti e stazione cadono insieme, quindi non c'è peso apparente." },
      { type: "order", q: "Ordina i pianeti per periodo di rivoluzione crescente.", items: ["Mercurio", "Terra", "Marte", "Giove", "Saturno"], explain: "Più il pianeta è lontano, più T è lungo: 0,24; 1; 1,88; 11,9; 29,5 anni." }
    ]
  }
});

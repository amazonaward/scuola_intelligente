TOPIC('it', {
  id: "l2-fis-lavoro-energia",
  title: "Lavoro ed energia",
  intro: "Nel linguaggio comune «lavorare» e «fare fatica» sono quasi sinonimi. In fisica il <b>lavoro</b> ha una definizione precisa: è ciò che una forza compie quando sposta un corpo. Da questa definizione nasce il concetto più importante e unificante di tutta la fisica, l'<b>energia</b>, e con esso una legge che non è mai stata smentita: l'energia non si crea e non si distrugge, ma si trasforma. Con questi strumenti risolverai problemi che con i soli principi della dinamica sarebbero molto più laboriosi.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Il lavoro di una forza",
      html: `<p>Il <b>lavoro</b> di una forza costante F che sposta il suo punto di applicazione di un tratto s è:</p>
<p style="text-align:center"><b>L = F · s · cos θ</b></p>
<p>dove θ è l'angolo tra la direzione della forza e quella dello spostamento. L'unità di misura è il <b>joule</b> (J): 1 J = 1 N · 1 m, il lavoro di una forza di 1 N che sposta un corpo di 1 m nella sua stessa direzione.</p>
<ul>
<li><b>θ = 0°</b> (forza concorde allo spostamento): cos θ = 1, lavoro <b>positivo</b> e massimo; la forza «aiuta» il moto;</li>
<li><b>θ = 90°</b> (forza perpendicolare): cos θ = 0, <b>lavoro nullo</b>. Una forza perpendicolare allo spostamento non lavora: per esempio la forza normale su un corpo che scivola su un piano, o il peso di una valigia che porti in orizzontale;</li>
<li><b>θ = 180°</b> (forza opposta allo spostamento): cos θ = −1, lavoro <b>negativo</b>; la forza «frena». Così lavora l'attrito dinamico.</li>
</ul>
<p>Il lavoro è una grandezza <b>scalare</b>. Se agiscono più forze, il lavoro totale è la somma dei lavori (o il lavoro della risultante). Nota che per fare lavoro non basta fare forza: se sostieni uno zaino immobile fai fatica fisiologica, ma sul sistema zaino non compi lavoro perché lo spostamento è zero.</p>`
    },
    {
      type: "svg",
      title: "Il lavoro dipende dall'angolo",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="wF" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="wS" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="20" y1="110" x2="210" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="60" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="110" y1="95" x2="190" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="60" y1="130" x2="190" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="115" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 0°</text>
<text x="115" y="188" font-size="15" fill="#16a34a" text-anchor="middle" font-weight="bold">L = F·s</text>
<line x1="230" y1="110" x2="420" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="270" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="295" y1="80" x2="295" y2="25" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="270" y1="130" x2="400" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="325" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 90°</text>
<text x="325" y="188" font-size="15" fill="#475569" text-anchor="middle" font-weight="bold">L = 0</text>
<line x1="440" y1="110" x2="630" y2="110" stroke="#475569" stroke-width="2"/>
<rect x="500" y="80" width="50" height="30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<line x1="500" y1="95" x2="450" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#wF)"/>
<line x1="500" y1="130" x2="620" y2="130" stroke="#2563eb" stroke-width="3" marker-end="url(#wS)"/>
<text x="535" y="165" font-size="15" fill="#0f172a" text-anchor="middle">θ = 180°</text>
<text x="535" y="188" font-size="15" fill="#dc2626" text-anchor="middle" font-weight="bold">L = −F·s</text>
<text x="320" y="250" font-size="16" fill="#0f172a" text-anchor="middle">Forza in rosso, spostamento in blu</text>
</g>
</svg>`,
      caption: "Concorde: lavoro positivo. Perpendicolare: nullo. Opposta: negativo."
    },
    {
      type: "example",
      title: "Quanto lavoro?",
      html: `<p><b>Spinta orizzontale.</b> Spingi un mobile con 50 N per 4 m nello stesso verso della forza: L = 50 · 4 = <b>200 J</b>.</p>
<p><b>Trascinare una valigia.</b> Tiri una valigia con una maniglia inclinata di 60° rispetto al pavimento, con 40 N, per 10 m: L = 40 · 10 · cos 60° = 40 · 10 · 0,5 = <b>200 J</b>. Solo la componente orizzontale della forza lavora.</p>
<p><b>Sollevare un peso.</b> Sollevi a velocità costante una cassa di 10 kg per 2 m (g = 9,8 m/s²): ti serve una forza uguale al peso, 98 N, quindi L = 98 · 2 = <b>196 J</b>. Il peso, nello stesso spostamento, compie lavoro <b>−196 J</b>.</p>`
    },
    {
      type: "text",
      title: "La potenza",
      html: `<p>Salire una scala di corsa o piano piano richiede lo stesso lavoro, ma non la stessa <b>potenza</b>: la potenza misura <b>quanto velocemente</b> si compie il lavoro.</p>
<p style="text-align:center"><b>P = L / Δt</b> &nbsp;&nbsp; (se la forza è costante e parallela a v: <b>P = F · v</b>)</p>
<p>L'unità è il <b>watt</b> (W) = 1 J/s, dal nome di James Watt, che perfezionò la macchina a vapore. Un'unità ancora molto usata è il <b>cavallo vapore</b> (CV): 1 CV ≈ 735,5 W. L'energia che paghi in bolletta si misura in <b>kilowattora</b>: 1 kWh è l'energia consumata da un apparecchio da 1 kW in un'ora, cioè 3,6 · 10⁶ J = 3,6 MJ.</p>
<p>Un motore da 60 kW che spinge un'auto a 20 m/s (72 km/h) sviluppa una forza motrice media F = P/v = 60000/20 = 3000 N.</p>`
    },
    {
      type: "widget",
      title: "Il lavoro è positivo, nullo o negativo?",
      widget: "classify",
      options: { groups: ["Lavoro positivo", "Lavoro nullo", "Lavoro negativo"], items: [
        ["Spingi un carrello nel verso del moto", 0],
        ["Porti uno zaino camminando in piano (lavoro del peso)", 1],
        ["Attrito su una cassa che scivola", 2],
        ["Gravità su un sasso che cade", 0],
        ["Freni di un'auto che rallenta", 2],
        ["Gravità su un satellite in orbita circolare", 1]
      ] },
      caption: "Guarda l'angolo tra forza e spostamento."
    },
    {
      type: "quiz",
      title: "Controlla: lavoro e potenza",
      questions: [
        { type: "num", q: "Una forza di 30 N sposta un corpo di 5 m nella sua stessa direzione. Quanto vale il lavoro?", answer: 150, tol: 0.1, unit: "J", explain: "L = F·s = 30 · 5 = 150 J." },
        { type: "tf", q: "Il lavoro della forza centripeta in un moto circolare uniforme è nullo.", answer: true, explain: "La forza è sempre perpendicolare allo spostamento: cos 90° = 0." },
        { type: "num", q: "Un motore compie 6000 J in 30 s. Calcola la potenza.", answer: 200, tol: 0.1, unit: "W", explain: "P = L/Δt = 6000/30 = 200 W." }
      ]
    },
    {
      type: "text",
      title: "L'energia cinetica e il teorema dell'energia cinetica",
      html: `<p>Un corpo in moto può compiere lavoro (un martello che colpisce un chiodo, l'acqua che fa girare una ruota). Questa capacità legata al moto si chiama <b>energia cinetica</b>:</p>
<p style="text-align:center"><b>E<sub>c</sub> = ½ · m · v²</b></p>
<p>Dipende dal <b>quadrato</b> della velocità: raddoppiando v l'energia diventa 4 volte più grande. Per questo gli incidenti ad alta velocità sono molto più gravi (e gli spazi di frenata crescono col quadrato di v).</p>
<p><b>Teorema dell'energia cinetica.</b> Il lavoro totale compiuto sul corpo è uguale alla variazione della sua energia cinetica:</p>
<p style="text-align:center"><b>L<sub>tot</sub> = ΔE<sub>c</sub> = ½ m v² − ½ m v₀²</b></p>
<p>Si ricava dal secondo principio e collega in modo diretto forze e velocità, senza passare per il tempo. Esempio: un'auto di 1000 kg a 20 m/s ha E<sub>c</sub> = ½ · 1000 · 400 = 200 000 J = 200 kJ. A 40 m/s sarebbe 800 kJ. Per fermarla su 40 m l'attrito deve compiere −200 000 J: la forza frenante media è 200000/40 = 5000 N.</p>`
    },
    {
      type: "text",
      title: "L'energia potenziale",
      html: `<p>Un oggetto sollevato o una molla compressa possono restituire lavoro anche se sono fermi: hanno <b>energia potenziale</b>, energia legata alla <b>posizione</b> (o alla configurazione). Vale per le <b>forze conservative</b>, quelle il cui lavoro non dipende dal percorso ma solo dalle posizioni iniziale e finale (peso, forza elastica, gravitazione, forza elettrica).</p>
<ul>
<li><b>Energia potenziale gravitazionale</b> (vicino alla Terra): <b>U = m · g · h</b>, con h quota rispetto a un livello di riferimento scelto a piacere (conta solo la differenza). Il lavoro del peso è L = −ΔU;</li>
<li><b>Energia potenziale elastica</b> di una molla di costante k deformata di x: <b>U = ½ · k · x²</b>.</li>
</ul>
<p>L'<b>attrito</b>, invece, è una forza <b>dissipativa</b>: il suo lavoro dipende dal percorso (più strada, più lavoro negativo) e trasforma energia meccanica in energia termica.</p>`
    },
    {
      type: "svg",
      title: "Le montagne russe e l'energia",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<path d="M30 60 C 120 60 170 250 280 250 C 390 250 420 130 470 130 C 520 130 540 190 610 190" fill="none" stroke="#475569" stroke-width="4"/>
<circle cx="45" cy="60" r="11" fill="#dc2626"/>
<circle cx="280" cy="250" r="11" fill="#dc2626"/>
<circle cx="470" cy="130" r="11" fill="#dc2626"/>
<text x="60" y="40" font-size="15" fill="#0f172a">A: tutta U (v ≈ 0)</text>
<text x="215" y="285" font-size="15" fill="#0f172a">B: tutta Ec (h = 0)</text>
<text x="395" y="105" font-size="15" fill="#0f172a">C: un po' di U, un po' di Ec</text>
<rect x="30" y="85" width="60" height="14" fill="#2563eb"/>
<rect x="30" y="103" width="2" height="14" fill="#16a34a"/>
<rect x="330" y="215" width="2" height="14" fill="#2563eb"/>
<rect x="330" y="233" width="60" height="14" fill="#16a34a"/>
<text x="95" y="97" font-size="14" fill="#2563eb">U</text>
<text x="40" y="132" font-size="14" fill="#16a34a">Ec</text>
<text x="400" y="228" font-size="14" fill="#2563eb">U</text>
<text x="395" y="246" font-size="14" fill="#16a34a">Ec</text>
</g>
</svg>`,
      caption: "In assenza di attrito la somma U + Ec resta costante: in alto è tutta potenziale, in basso tutta cinetica."
    },
    {
      type: "remember",
      title: "Conservazione dell'energia meccanica",
      html: `<p>Se agiscono <b>solo forze conservative</b> (o le altre non compiono lavoro), l'energia meccanica <b>E = E<sub>c</sub> + U</b> si conserva: <b>½mv₁² + mgh₁ = ½mv₂² + mgh₂</b>.</p>
<p>Se agiscono forze dissipative: <b>E<sub>finale</sub> = E<sub>iniziale</sub> + L<sub>attrito</sub></b> (con L<sub>attrito</sub> negativo): l'energia meccanica diminuisce, ma l'energia <b>totale</b> (includendo il calore prodotto) resta costante. È il <b>principio di conservazione dell'energia</b>, verificato in ogni esperimento finora.</p>`
    },
    {
      type: "example",
      title: "Caduta, pendolo e molla",
      html: `<p><b>Caduta.</b> Una pietra cade da 20 m partendo ferma. Conservazione: mgh = ½mv², quindi v = √(2gh) = √(2 · 9,8 · 20) ≈ <b>19,8 m/s</b> (circa 71 km/h). La massa si semplifica: vale per ogni corpo, ed è l'idea di Galileo in forma energetica.</p>
<p><b>Pendolo.</b> Un pendolo lungo 1 m, lasciato da 20 cm di altezza sopra il punto più basso, lo attraversa con v = √(2 · 9,8 · 0,2) ≈ 1,98 m/s. La tensione del filo è sempre perpendicolare allo spostamento e non compie lavoro.</p>
<p><b>Molla.</b> Una molla con k = 200 N/m, compressa di 0,10 m, immagazzina U = ½ · 200 · 0,01 = 1 J. Se spinge una pallina da 20 g su un piano liscio la lancia a v = √(2 · 1/0,02) = <b>10 m/s</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Calorie, joule e barrette energetiche",
      html: `<p>La caloria alimentare (kcal) vale circa 4186 J. Una barretta da 200 kcal contiene quindi circa 837 kJ di energia: in teoria basterebbe a sollevare di 1 m una massa di oltre 85 tonnellate! Il nostro corpo però ha un rendimento di circa il 20-25% e consuma energia anche a riposo, per questo la fatica è molto maggiore del «lavoro utile» che compiamo. Fu James Prescott Joule, negli anni '40 dell'Ottocento, a mostrare con i suoi esperimenti (le pale che agitano l'acqua) che il lavoro meccanico e il calore sono due forme della stessa grandezza, l'energia: da lui prende il nome l'unità.</p>`
    },
    {
      type: "curiosity",
      title: "Una diga è una batteria di acqua",
      html: `<p>Un metro cubo d'acqua (1000 kg) che cade da 100 m di dislivello libera mgh = 1000 · 9,8 · 100 ≈ 980 000 J, cioè circa 0,27 kWh. Le centrali idroelettriche trasformano proprio così energia potenziale in cinetica (l'acqua nelle condotte) e poi in elettrica (nelle turbine). Alcune, dette «a pompaggio», nelle ore di poca domanda risollevano l'acqua nel bacino superiore per riutilizzarla nei momenti di picco: sono vere e proprie batterie gravitazionali.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Il lavoro e l'energia sono idee astratte: ecco qualche analogia utile.",
      tabs: [
        { label: "🏦 Il conto in banca", html: "<p>Immagina l'energia come un <b>conto</b> con più «tasche»: cinetica, potenziale, termica. Il lavoro è un <b>bonifico</b> da una tasca all'altra (o dall'esterno al sistema). Il principio di conservazione dice che il totale non cambia mai: puoi solo spostare i soldi. L'attrito è un bonifico che manda l'energia meccanica nella tasca «calore», da cui è molto difficile farla tornare indietro.</p>" },
        { label: "🎢 Alla pista", html: "<p>Per risolvere un problema di moto lungo una pista senza attrito non devi conoscere la forma della pista: ti bastano le quote. Se parti fermo da quota h₁ e arrivi a quota h₂, ½mv² = mg(h₁ − h₂). Sorprendentemente, la velocità non dipende dal percorso scelto (rampa dolce o scivolo ripido), solo dal dislocamento verticale. Il percorso conta solo per il <b>tempo</b> impiegato.</p>" },
        { label: "📊 L'area sotto il grafico", html: "<p>Se rappresenti la forza F in funzione dello spostamento s, il lavoro è l'<b>area sotto la curva</b>. Per una forza costante è un rettangolo (F · s); per una molla (F = k·x) è un triangolo: area = ½ · x · (k·x) = ½ k x², cioè proprio l'energia potenziale elastica.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><line x1="60" y1="220" x2="540" y2="220" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="60" y2="30" stroke="#475569" stroke-width="2"/><polygon points="60,220 400,220 400,70" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/><line x1="60" y1="220" x2="440" y2="50" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/><text x="400" y="244" font-size="15" fill="#0f172a" text-anchor="middle">x</text><text x="535" y="240" font-size="15" fill="#0f172a">allungamento</text><text x="70" y="40" font-size="15" fill="#0f172a">F = kx</text><text x="300" y="195" font-size="16" fill="#166534" font-weight="bold">area = ½·k·x²</text></g></svg>` }
      ]
    },
    {
      type: "quiz",
      title: "Controlla: energia",
      questions: [
        { type: "num", q: "Un ciclista di 80 kg (con bici) viaggia a 10 m/s. Calcola l'energia cinetica.", answer: 4000, tol: 1, unit: "J", explain: "Ec = ½ · 80 · 100 = 4000 J." },
        { type: "mc", q: "Se la velocità di un corpo triplica, l'energia cinetica...", options: ["Triplica", "Diventa 6 volte", "Diventa 9 volte", "Resta uguale"], answer: 2, explain: "Ec dipende da v²: 3² = 9." },
        { type: "num", q: "Una sfera di 2 kg è a 5 m dal suolo (g = 10 m/s²). Quanto vale l'energia potenziale rispetto al suolo?", answer: 100, tol: 0.5, unit: "J", explain: "U = m·g·h = 2 · 10 · 5 = 100 J." }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di lavoro ed energia",
      nodes: [
        { id: "lavoro", label: "Lavoro", x: 15, y: 12, color: "#2563eb", html: "L = F·s·cos θ: trasferimento di energia per mezzo di una forza.", why: "Il concetto nasce nell'Ottocento con l'ingegneria delle macchine a vapore: Coriolis (1829) e Poncelet introdussero il termine «lavoro» per misurare quanto effetto utile produce una macchina." },
        { id: "potenza", label: "Potenza", x: 50, y: 12, color: "#f59e0b", html: "P = L/Δt: lavoro nell'unità di tempo, in watt.", why: "Watt la definì paragonando le sue macchine al lavoro dei cavalli da tiro: da qui il cavallo vapore. Il costo e la prestazione di un motore dipendono dalla potenza, non solo dal lavoro." },
        { id: "cin", label: "Energia cinetica", x: 85, y: 12, color: "#16a34a", html: "Ec = ½mv²: energia del moto.", why: "Leibniz parlava già di «vis viva» (forza viva) mv²; il fattore ½ e il nome «energia cinetica» arrivano nell'Ottocento (Coriolis, Thomson/Kelvin). Si ottiene integrando il secondo principio sullo spazio." },
        { id: "pot", label: "Energia potenziale", x: 20, y: 50, color: "#ef4444", html: "U = mgh e U = ½kx²: energia della posizione.", why: "Esiste solo per le forze conservative, cioè con lavoro indipendente dal percorso: la forza deriva da un'energia potenziale. Il termine fu introdotto da Rankine (1853)." },
        { id: "teo", label: "Teorema dell'energia cinetica", x: 78, y: 50, color: "#a855f7", html: "L_tot = ΔEc.", why: "Si dimostra dalla seconda legge di Newton: F·s = m·a·s = ½mv² − ½mv₀². È un modo equivalente di formulare F = ma, utile quando conosci gli spostamenti e non i tempi." },
        { id: "cons", label: "Conservazione dell'energia", x: 50, y: 88, color: "#0ea5e9", html: "In un sistema isolato l'energia totale è costante.", why: "Fu stabilita a metà Ottocento da Mayer, Joule, Helmholtz e altri studiando calore, lavoro, elettricità e vita. Con l'esperimento di Joule (1845) sull'equivalente meccanico del calore l'energia diventò il concetto unificatore della fisica." }
      ],
      edges: [["lavoro", "potenza", "nel tempo dà"], ["lavoro", "cin", "se risultante: ΔEc ="], ["lavoro", "pot", "forze conservative: −ΔU ="], ["cin", "cons", "somma con"], ["pot", "cons", "somma con"], ["teo", "cons", "porta alla"]]
    }
  ],
  glossary: [
    { t: "Lavoro", d: "Grandezza scalare L = F·s·cos θ, misurata in joule." },
    { t: "Joule (J)", d: "Unità di energia e lavoro: 1 J = 1 N·m." },
    { t: "Potenza", d: "Lavoro svolto nell'unità di tempo: P = L/Δt, in watt." },
    { t: "Energia cinetica", d: "Energia dovuta al moto: Ec = ½mv²." },
    { t: "Energia potenziale", d: "Energia legata alla posizione (gravitazionale mgh) o alla deformazione (elastica ½kx²)." },
    { t: "Forza conservativa", d: "Forza il cui lavoro non dipende dal percorso, ma solo dai punti iniziale e finale." },
    { t: "Forza dissipativa", d: "Forza, come l'attrito, che trasforma energia meccanica in calore." },
    { t: "Energia meccanica", d: "Somma di energia cinetica e potenziale." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quando il lavoro di una forza è nullo?", options: ["Quando F è perpendicolare allo spostamento", "Quando la forza è piccola", "Quando il corpo si muove velocemente", "Mai"], answer: 0, explain: "L = F·s·cos θ si annulla per θ = 90°, oppure se s = 0 o F = 0." },
      { type: "num", q: "Una forza di 20 N inclinata di 60° rispetto allo spostamento agisce per 10 m. Calcola il lavoro.", answer: 100, tol: 0.5, unit: "J", explain: "L = 20 · 10 · cos 60° = 200 · 0,5 = 100 J." },
      { type: "num", q: "Una gru solleva 500 kg a 10 m in 20 s (g = 10 m/s²). Quanto vale la potenza minima?", answer: 2500, tol: 5, unit: "W", explain: "L = mgh = 500 · 10 · 10 = 50 000 J; P = 50 000/20 = 2500 W." },
      { type: "num", q: "Convertendo: quanti joule ci sono in 2 kWh?", answer: 7200000, tol: 1000, unit: "J", explain: "1 kWh = 3,6 · 10⁶ J, quindi 2 kWh = 7,2 · 10⁶ J." },
      { type: "tf", q: "Raddoppiando la velocità di un'auto, la sua energia cinetica raddoppia.", answer: false, explain: "Ec ∝ v²: raddoppiando v, Ec quadruplica." },
      { type: "num", q: "Un corpo di 4 kg passa da 2 m/s a 6 m/s. Calcola il lavoro totale compiuto sul corpo.", answer: 64, tol: 0.5, unit: "J", explain: "L = ½·4·(36 − 4) = 2 · 32 = 64 J." },
      { type: "num", q: "Una palla è lasciata cadere da 5 m (g = 10 m/s², senza attrito). Con che velocità arriva a terra?", answer: 10, tol: 0.1, unit: "m/s", explain: "v = √(2gh) = √(100) = 10 m/s." },
      { type: "mc", q: "Che cosa succede all'energia meccanica di un corpo che scivola con attrito?", options: ["Resta costante", "Aumenta", "Diminuisce, trasformandosi in calore", "Sparisce nel nulla"], answer: 2, explain: "L'attrito compie lavoro negativo: energia meccanica trasformata in energia termica; l'energia totale si conserva." },
      { type: "tf", q: "L'energia potenziale gravitazionale dipende dalla scelta del livello di riferimento, ma le sue variazioni no.", answer: true, explain: "Contano solo le differenze: ΔU = mgΔh non dipende dallo zero scelto." },
      { type: "order", q: "Ordina dalla minore alla maggiore energia (stesso corpo da 1 kg).", items: ["Fermo a terra", "Fermo a 1 m di quota (g = 10)", "Fermo a 5 m di quota", "In moto a 12 m/s a terra"], explain: "Fermo a terra: 0 J; a 1 m: mgh = 10 J; a 5 m: 50 J; in moto a 12 m/s: ½·1·144 = 72 J." }
    ]
  }
});

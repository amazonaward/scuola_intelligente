TOPIC('it', {
  id: "l3-fis-moto-rotatorio",
  title: "Il moto rotatorio",
  intro: "Una pattinatrice sul ghiaccio ruota lentamente con le braccia aperte, poi le richiama al corpo e comincia a girare a una velocità vertiginosa, senza che nessuno la spinga. Una trottola resta in piedi finché gira, una ruota di bicicletta in rotazione sembra «resistere» quando provi a inclinarla. Per capire questi fenomeni serve il <b>moto rotatorio</b> dei corpi rigidi: nasce il <b>momento d'inerzia</b>, che è per la rotazione ciò che la massa è per la traslazione, e il <b>momento angolare</b>, una grandezza che si <b>conserva</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Dalla traslazione alla rotazione",
      html: `<p>Nei moti circolari (secondo anno) hai già incontrato le grandezze angolari: l'<b>angolo</b> θ (in radianti), la <b>velocità angolare</b> ω = Δθ/Δt (rad/s) e l'<b>accelerazione angolare</b> α = Δω/Δt (rad/s²). Ogni punto di un corpo che ruota a distanza <b>r</b> dall'asse ha velocità lineare <b>v = ω·r</b> e accelerazione tangenziale <b>a<sub>t</sub> = α·r</b>.</p>
<p>Un <b>corpo rigido</b> è un corpo che non si deforma: tutte le sue parti ruotano con la stessa ω (ma non con la stessa v!). Le grandezze della rotazione hanno un perfetto «gemello» nella traslazione:</p>
<table>
<tr><th>Traslazione</th><th>Rotazione</th></tr>
<tr><td>posizione x</td><td>angolo θ</td></tr>
<tr><td>velocità v</td><td>velocità angolare ω</td></tr>
<tr><td>accelerazione a</td><td>accelerazione angolare α</td></tr>
<tr><td>massa m</td><td><b>momento d'inerzia I</b></td></tr>
<tr><td>forza F</td><td><b>momento della forza τ</b></td></tr>
<tr><td>F = m·a</td><td><b>τ = I·α</b></td></tr>
<tr><td>quantità di moto p = m·v</td><td><b>momento angolare L = I·ω</b></td></tr>
<tr><td>energia cinetica ½mv²</td><td>energia cinetica rotazionale ½Iω²</td></tr>
</table>
<p>In questa lezione costruiamo la colonna di destra, passo dopo passo.</p>`
    },
    {
      type: "text",
      title: "Il momento di una forza",
      html: `<p>Per aprire una porta spingi lontano dai cardini, non vicino. Se spingi <b>sull'asse</b> (i cardini) la porta non si muove affatto. L'effetto rotatorio di una forza dipende dall'intensità, dalla distanza dall'asse e dalla direzione. Si definisce il <b>momento della forza</b> (o momento torcente):</p>
<p style="text-align:center"><b>τ = F · b = F · r · sen θ</b></p>
<ul>
<li><b>r</b> è la distanza tra l'asse e il punto di applicazione della forza;</li>
<li><b>θ</b> è l'angolo tra il vettore r e la forza F;</li>
<li><b>b = r·sen θ</b> è il <b>braccio</b> della forza: la distanza tra l'asse e la <i>retta d'azione</i> della forza;</li>
<li>unità: <b>N·m</b> (come il lavoro, ma è una grandezza diversa: qui è una grandezza vettoriale, con verso orario o antiorario).</li>
</ul>
<p>Il momento è massimo se la forza è perpendicolare al raggio (θ = 90°) e nullo se la forza passa per l'asse (θ = 0° o 180°). Le chiavi inglesi lunghe e le maniglie in fondo alla porta sfruttano il fatto che, a parità di forza, un braccio più lungo dà un momento maggiore: è la <b>leva</b> di Archimede («datemi un punto d'appoggio e solleverò il mondo»).</p>
<p>Un corpo rigido è in <b>equilibrio</b> se la risultante delle forze è nulla <b>e</b> la somma dei momenti rispetto a un qualsiasi punto è nulla. Ritroviamo così le leve e le altalene: due bambini restano in equilibrio se m<sub>1</sub>·d<sub>1</sub> = m<sub>2</sub>·d<sub>2</sub>.</p>`
    },
    {
      type: "example",
      title: "La chiave inglese e l'altalena",
      html: `<p><b>Chiave.</b> Per svitare un dado serve un momento di 60 N·m. Con una chiave lunga 0,20 m, con la forza perpendicolare, servono F = 60/0,20 = <b>300 N</b>. Con un tubo che allunga la chiave a 0,60 m bastano F = 60/0,60 = <b>100 N</b>: il trucco classico di meccanici e idraulici.</p>
<p><b>Altalena.</b> Una bambina di 30 kg siede a 2,0 m dal fulcro. Dove deve sedersi un bambino di 40 kg per essere in equilibrio? 30 × 2,0 = 40 × d ⟹ d = <b>1,5 m</b>. Il più pesante va più vicino al fulcro.</p>`
    },
    {
      type: "svg",
      title: "Il momento di una forza",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<defs>
<marker id="rmA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<circle cx="120" cy="170" r="8" fill="#0f172a"/>
<text x="120" y="205" font-size="15" fill="#0f172a" text-anchor="middle">asse</text>
<rect x="120" y="163" width="280" height="14" fill="#a16207" rx="4"/>
<line x1="400" y1="170" x2="400" y2="60" stroke="#dc2626" stroke-width="5" marker-end="url(#rmA)"/>
<text x="425" y="85" font-size="16" fill="#991b1b" font-weight="bold">F</text>
<line x1="120" y1="230" x2="400" y2="230" stroke="#2563eb" stroke-width="3"/>
<line x1="120" y1="222" x2="120" y2="238" stroke="#2563eb" stroke-width="3"/>
<line x1="400" y1="222" x2="400" y2="238" stroke="#2563eb" stroke-width="3"/>
<text x="260" y="256" font-size="16" fill="#1e3a8a" text-anchor="middle">r = braccio</text>
<text x="300" y="30" font-size="16" fill="#0f172a" font-weight="bold">τ = F · r  (forza perpendicolare)</text>
<path d="M170 140 A 50 50 0 0 0 150 120" stroke="#16a34a" stroke-width="3" fill="none"/>
<text x="480" y="170" font-size="15" fill="#166534">Rotazione antioraria</text>
<text x="480" y="192" font-size="15" fill="#166534">(momento positivo)</text>
</g>
</svg>`,
      caption: "La stessa forza produce un momento maggiore se è applicata più lontano dall'asse e perpendicolarmente al raggio."
    },
    {
      type: "text",
      title: "Il momento d'inerzia e la seconda legge per le rotazioni",
      html: `<p>Un corpo che ruota «resiste» a una variazione della sua rotazione, ma questa resistenza non dipende soltanto dalla massa: dipende anche da <b>come la massa è distribuita rispetto all'asse</b>. Un punto di massa m a distanza r dall'asse ha <b>momento d'inerzia</b> I = m·r². Per un corpo esteso si sommano tutti i contributi:</p>
<p style="text-align:center"><b>I = Σ m<sub>i</sub> · r<sub>i</sub>²</b> &nbsp; (unità: kg·m²)</p>
<p>La massa lontana dall'asse conta <b>col quadrato</b> della distanza: spostare massa verso il bordo aumenta molto I. La seconda legge della dinamica rotazionale è</p>
<p style="text-align:center"><b>τ<sub>ris</sub> = I · α</b></p>
<p>e si ricava subito per un punto materiale: F = m·a<sub>t</sub> ⟹ F·r = m·r²·(a<sub>t</sub>/r) = I·α. Più grande è I, più è difficile far ruotare (o fermare) il corpo.</p>
<p>Valori per corpi omogenei di massa M e raggio R (o lunghezza L), rispetto agli assi indicati:</p>
<table>
<tr><th>Corpo</th><th>Asse</th><th>I</th></tr>
<tr><td>Anello sottile</td><td>asse centrale</td><td><b>M·R²</b></td></tr>
<tr><td>Disco o cilindro pieno</td><td>asse centrale</td><td><b>½·M·R²</b></td></tr>
<tr><td>Sfera piena</td><td>per il centro</td><td><b>⅖·M·R²</b></td></tr>
<tr><td>Asta sottile</td><td>per il centro, perpendicolare</td><td><b>1/12 · M·L²</b></td></tr>
<tr><td>Asta sottile</td><td>per un estremo</td><td><b>1/3 · M·L²</b></td></tr>
</table>
<p>Il <b>teorema di Huygens-Steiner</b> permette di cambiare asse: se I<sub>CM</sub> è il momento d'inerzia rispetto a un asse per il centro di massa, rispetto a un asse parallelo a distanza d vale <b>I = I<sub>CM</sub> + M·d²</b>. Verifica con l'asta: 1/12·ML² + M·(L/2)² = 1/12 + 1/4 = 1/3·ML² ✓.</p>`
    },
    {
      type: "example",
      title: "Chi è più difficile da far girare?",
      html: `<p>Un disco di 2,0 kg e raggio 0,30 m ha I = ½·2,0·0,30² = <b>0,090 kg·m²</b>. Un anello con la stessa massa e lo stesso raggio ha I = 2,0·0,30² = <b>0,18 kg·m²</b>: il doppio. Per questo, a parità di momento applicato, il disco accelera il doppio: se τ = 0,36 N·m, il disco ha α = 4 rad/s² e l'anello 2 rad/s².</p>
<p>È la ragione per cui i <b>volani</b> (accumulatori di energia nei motori) hanno la massa concentrata sul bordo: a parità di massa immagazzinano più energia. E per cui un funambolo usa una lunga asta con pesi alle estremità: l'asta ha un grande momento d'inerzia e rende più lenta e controllabile ogni oscillazione.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: momento e inerzia",
      questions: [
        { type: "num", q: "Una forza di 50 N è applicata perpendicolarmente a 0,40 m dall'asse. Quanto vale il momento?", answer: 20, tol: 0, unit: "N·m", explain: "τ = F·r = 50 × 0,40 = 20 N·m." },
        { type: "num", q: "Un disco di momento d'inerzia 0,50 kg·m² è sottoposto a un momento di 2 N·m. Quanto vale l'accelerazione angolare?", answer: 4, tol: 0, unit: "rad/s²", explain: "α = τ/I = 2/0,5 = 4 rad/s²." },
        { type: "mc", q: "Raddoppiando la distanza di una massa puntiforme dall'asse, il suo momento d'inerzia:", options: ["raddoppia", "quadruplica", "si dimezza", "non cambia"], answer: 1, explain: "I = m·r²: il raggio compare al quadrato." }
      ]
    },
    {
      type: "text",
      title: "Energia cinetica di rotazione e rotolamento",
      html: `<p>Ogni punto di un corpo che ruota ha energia cinetica ½·m<sub>i</sub>·v<sub>i</sub>² = ½·m<sub>i</sub>·r<sub>i</sub>²·ω². Sommando su tutti i punti:</p>
<p style="text-align:center"><b>K<sub>rot</sub> = ½ · I · ω²</b></p>
<p>È la stessa formula di ½mv² con I al posto di m e ω al posto di v. Il <b>lavoro</b> di un momento è L = τ·Δθ e il <b>teorema dell'energia cinetica</b> vale anche qui.</p>
<p><b>Rotolamento senza strisciare.</b> Una ruota che rotola ha due moti insieme: traslazione del centro (velocità v) e rotazione (ω = v/R). L'energia cinetica totale è la somma:</p>
<p style="text-align:center"><b>K = ½·M·v² + ½·I·ω²</b>, con ω = v/R.</p>
<p><b>Gara lungo un piano inclinato.</b> Lasciamo scendere dalla stessa altezza h, senza strisciare, una sfera piena, un cilindro pieno e un anello, tutti con lo stesso raggio. Per la conservazione dell'energia: M·g·h = ½Mv² + ½Iω² = ½Mv²·(1 + I/(MR²)), da cui</p>
<p style="text-align:center"><b>v = √[ 2gh / (1 + I/(MR²)) ]</b></p>
<p>Il valore I/(MR²) vale 2/5 per la sfera, 1/2 per il cilindro, 1 per l'anello. Vince quindi chi ha <b>meno</b> I/(MR²): la <b>sfera</b> (v = √(10gh/7)), poi il <b>cilindro</b> (v = √(4gh/3)), infine l'<b>anello</b> (v = √(gh)). Il risultato non dipende né dalla massa né dal raggio, e vale per qualunque corpo con la stessa distribuzione di massa (una sfera piena è sempre più veloce di una sfera cava). Se invece non ci fosse rotazione (un blocco che scivola senza attrito), v = √(2gh), il più veloce di tutti: parte dell'energia nei corpi che rotolano è «spesa» per farli ruotare.</p>`
    },
    {
      type: "svg",
      title: "La gara sul piano inclinato",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<g font-family="sans-serif">
<polygon points="40,250 560,250 40,60" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
<circle cx="90" cy="70" r="20" fill="#16a34a"/>
<text x="90" y="76" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">S</text>
<circle cx="150" cy="104" r="20" fill="#2563eb"/>
<text x="150" y="110" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">C</text>
<circle cx="210" cy="138" r="20" fill="none" stroke="#dc2626" stroke-width="8"/>
<text x="210" y="144" font-size="14" fill="#991b1b" text-anchor="middle" font-weight="bold">A</text>
<text x="340" y="60" font-size="16" fill="#0f172a" font-weight="bold">Arrivo, nell'ordine:</text>
<text x="340" y="92" font-size="16" fill="#166534">1° S = sfera piena (I = 2/5 MR²)</text>
<text x="340" y="120" font-size="16" fill="#1e3a8a">2° C = cilindro pieno (I = 1/2 MR²)</text>
<text x="340" y="148" font-size="16" fill="#991b1b">3° A = anello (I = MR²)</text>
<text x="340" y="190" font-size="15" fill="#334155">La massa concentrata sul bordo</text>
<text x="340" y="212" font-size="15" fill="#334155">rallenta la discesa.</text>
</g>
</svg>`,
      caption: "Chi ha il momento d'inerzia più piccolo (in rapporto a MR²) scende più in fretta."
    },
    {
      type: "text",
      title: "Il momento angolare",
      html: `<p>Per la traslazione la quantità di moto p = m·v descrive «quanto moto» ha un corpo. Per la rotazione la grandezza analoga è il <b>momento angolare</b>. Per un corpo rigido che ruota attorno a un asse fisso:</p>
<p style="text-align:center"><b>L = I · ω</b> &nbsp;&nbsp; (unità: kg·m²/s)</p>
<p>(Per un punto di massa m che si muove con velocità v a distanza r dall'asse, perpendicolarmente al raggio, L = m·v·r.) È una grandezza <b>vettoriale</b>: con la <b>regola della mano destra</b> il vettore L punta lungo l'asse, nel verso del pollice quando le altre dita seguono il senso di rotazione.</p>
<p>La seconda legge si scrive in forma generale come</p>
<p style="text-align:center"><b>τ<sub>ris</sub> = ΔL / Δt</b></p>
<p>cioè: il momento delle forze esterne è la rapidità di variazione del momento angolare. Per I costante si ritrova τ = I·Δω/Δt = I·α.</p>
<h4>Conservazione del momento angolare</h4>
<p>Se il momento risultante delle forze esterne è <b>nullo</b>, il momento angolare totale è costante:</p>
<p style="text-align:center"><b>τ<sub>ris</sub> = 0 &nbsp;⟹&nbsp; L = I·ω = costante &nbsp;⟹&nbsp; I<sub>i</sub>·ω<sub>i</sub> = I<sub>f</sub>·ω<sub>f</sub></b></p>
<p>Se il corpo cambia forma e I <b>diminuisce</b>, ω deve <b>aumentare</b> (e viceversa).</p>`
    },
    {
      type: "example",
      title: "La pirouette e il tuffatore",
      html: `<p><b>Pirouette.</b> Una pattinatrice ruota a 2,0 rad/s con le braccia aperte, I = 3,0 kg·m². Chiudendo le braccia, il suo I scende a 1,0 kg·m². Per la conservazione: 3,0 × 2,0 = 1,0 × ω<sub>f</sub> ⟹ ω<sub>f</sub> = <b>6,0 rad/s</b>: gira tre volte più velocemente. L'energia cinetica passa da ½·3,0·4 = 6 J a ½·1,0·36 = 18 J: il lavoro in più è compiuto dai muscoli delle braccia, che tirano verso l'asse contro la tendenza centrifuga.</p>
<p><b>Tuffatore.</b> Si lancia dalla piattaforma con una piccola rotazione, poi si raggruppa «a boccia»: I diminuisce e ω aumenta, per fare più avvitamenti e capriole. Prima dell'ingresso in acqua si distende per diminuire ω e rientrare in verticale.</p>
<p><b>Gatto che cade.</b> Anche un gatto lasciato cadere a pancia in su si rigira in aria e atterra sulle zampe, pur partendo con L = 0: cambia la forma del corpo (zampe anteriori raccolte e posteriori distese e poi viceversa) in modo che le due metà ruotino in versi opposti con momento angolare totale ancora nullo.</p>`
    },
    {
      type: "widget",
      title: "Chi si conserva?",
      widget: "classify",
      options: { groups: ["Si conserva sempre (sistema isolato)", "Si conserva solo in certi casi"], items: [
        ["Momento angolare (senza momenti esterni)", 0],
        ["Quantità di moto (senza forze esterne)", 0],
        ["Velocità angolare ω", 1],
        ["Energia cinetica di rotazione", 1],
        ["Momento d'inerzia I", 1]
      ] },
      caption: "Nella pirouette cambiano ω, I ed energia cinetica: l'unica cosa che resta uguale è L."
    },
    {
      type: "quiz",
      title: "Controlla: momento angolare",
      questions: [
        { type: "num", q: "Un ginnasta ha I = 4 kg·m² e ω = 3 rad/s. Si raggruppa e il suo I diventa 2 kg·m². Qual è la nuova velocità angolare?", answer: 6, tol: 0, unit: "rad/s", explain: "I·ω = costante: 4·3 = 2·ω' ⟹ ω' = 6 rad/s." },
        { type: "num", q: "Un disco ha I = 0,2 kg·m² e ruota a 10 rad/s. Quanto vale il momento angolare?", answer: 2, tol: 0, unit: "kg·m²/s", explain: "L = I·ω = 0,2 × 10 = 2 kg·m²/s." },
        { type: "tf", q: "Quando una pattinatrice chiude le braccia la sua energia cinetica rotazionale resta costante.", answer: false, explain: "Si conserva L, non l'energia: ω triplica e K = ½Iω² aumenta (lavoro dei muscoli)." }
      ]
    },
    {
      type: "text",
      title: "Giroscopi, trottole e satelliti",
      html: `<p>Poiché L è un vettore, si conserva non solo in modulo ma anche in <b>direzione</b>. Un corpo che ruota velocemente tende quindi a mantenere fisso l'asse di rotazione nello spazio. È il principio del <b>giroscopio</b>: una ruota pesante con un grande L resiste ai tentativi di inclinarla. Per questo:</p>
<ul>
<li>una bicicletta in corsa resta in equilibrio più facilmente (la ruota si comporta da giroscopio);</li>
<li>un pallone da football lanciato con una rotazione a elica («spirale») mantiene l'asse e vola meglio; le pallottole delle armi hanno scanalature interne («rigatura») che le fanno ruotare per stabilizzarle;</li>
<li>aerei, navi e satelliti usano <b>giroscopi</b> per mantenere un riferimento di orientamento (bussola giroscopica);</li>
<li>la <b>Terra</b> ha un asse di rotazione che punta quasi sempre verso la stessa regione di cielo (la stella polare) nel corso dell'anno.</li>
</ul>
<p>Quando un momento esterno agisce perpendicolarmente a L, non ne cambia il modulo ma ne ruota la direzione: è la <b>precessione</b>. Una trottola inclinata non cade subito: il suo asse descrive un cono attorno alla verticale. Anche l'asse terrestre compie una lentissima precessione (circa 26 000 anni) per effetto dell'attrazione di Sole e Luna sul rigonfiamento equatoriale.</p>
<p>La conservazione del momento angolare spiega infine un fatto scoperto da Keplero (seconda legge): quando un pianeta si avvicina al Sole, orbitando più vicino, va più veloce, perché L = m·v·r è costante. Ne parleremo nella prossima lezione sulla gravitazione.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la rotazione",
      intro: "Il momento d'inerzia e il momento angolare non sono intuitivi: ecco altre strade per «sentirli».",
      tabs: [
        {
          label: "🪑 La sedia girevole",
          html: "<p>Siediti su una sedia girevole con due pesi in mano, a braccia aperte, e fatti dare una piccola spinta. Poi porta i pesi al petto: <b>giri molto più in fretta</b>! Riallarga le braccia: rallenti. Non è magia: hai cambiato I (da grande a piccolo) e, poiché L si conserva, ω è cresciuto. È lo stesso trucco della pattinatrice, e lo puoi provare a casa (con cautela).</p>"
        },
        {
          label: "🎯 La massa «pesa» col quadrato",
          html: "<p>Immagina due manubri di uguale massa totale: nel primo i pesi sono vicini all'asse (r = 0,1 m), nel secondo lontani (r = 0,5 m). I = Σmr²: il secondo ha un momento d'inerzia <b>25 volte</b> maggiore (perché (0,5/0,1)² = 25). Farlo ruotare, o fermarlo, richiede 25 volte più momento. Per questo i bambini piccoli possono far girare il manubrio corto con un dito, e per fermare la lunga barra di un funambolo non basta un dito.</p>"
        },
        {
          label: "🔗 Abbina analogie",
          html: "<p>Collega la grandezza della traslazione alla sua «gemella» nella rotazione.</p>",
          widget: "match",
          options: { pairs: [
            ["Massa m", "Momento d'inerzia I"],
            ["Forza F", "Momento della forza τ"],
            ["Quantità di moto p = mv", "Momento angolare L = Iω"],
            ["F = m·a", "τ = I·α"],
            ["Energia cinetica ½mv²", "Energia cinetica ½Iω²"]
          ] }
        },
        {
          label: "⚙️ Disegno: due distribuzioni",
          html: "<p>Due dischi con la stessa massa totale: nel primo la massa è concentrata al centro, nel secondo sul bordo. Il secondo ha I maggiore.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#fefce8'/><g font-family='sans-serif'><circle cx='150' cy='120' r='80' fill='none' stroke='#475569' stroke-width='3' stroke-dasharray='6 5'/><circle cx='150' cy='120' r='22' fill='#2563eb'/><text x='150' y='125' font-size='14' fill='#ffffff' text-anchor='middle' font-weight='bold'>M</text><text x='150' y='235' font-size='15' fill='#1e3a8a' text-anchor='middle'>massa al centro: I piccolo</text><circle cx='450' cy='120' r='80' fill='none' stroke='#dc2626' stroke-width='12'/><text x='450' y='125' font-size='14' fill='#991b1b' text-anchor='middle' font-weight='bold'>M</text><text x='450' y='235' font-size='15' fill='#991b1b' text-anchor='middle'>massa sul bordo: I grande</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "La Terra rallenta, i giorni si allungano",
      html: `<p>La Terra non ruota a velocità esattamente costante: le maree causate dalla Luna esercitano un momento frenante e la rotazione rallenta di circa 1,7 millisecondi per secolo. Poiché il momento angolare del sistema Terra-Luna si conserva, quello perso dalla Terra viene trasferito alla Luna, che si allontana di circa <b>3,8 cm all'anno</b> (misurato con i riflettori lasciati dagli astronauti Apollo). Circa 400 milioni di anni fa il giorno durava solo 22 ore circa: lo si deduce dagli anelli di crescita dei coralli fossili.</p>`
    },
    {
      type: "curiosity",
      title: "Pulsar: il volano cosmico",
      html: `<p>Una stella che collassa in una stella di neutroni passa da un raggio di centinaia di migliaia di chilometri a circa 10-12 km: I diminuisce di un fattore enorme e, per conservare L, ω aumenta altrettanto. Per questo le <b>pulsar</b> (stelle di neutroni che emettono fasci di radiazione) ruotano anche centinaia di volte al secondo. Fu l'astrofisica Jocelyn Bell Burnell a scoprire la prima pulsar nel 1967: gli impulsi radio erano così regolari da venire inizialmente soprannominati «LGM», Little Green Men, per scherzo.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa del moto rotatorio",
      nodes: [
        { id: "momento", label: "Momento di una forza τ = F·b", x: 15, y: 10, color: "#ef4444", html: "Misura l'efficacia di una forza nel far ruotare un corpo: dipende da F e dal braccio b.", why: "Archimede nello studio delle leve mostrò che l'equilibrio dipende dal prodotto forza × distanza dal fulcro. Il concetto fu poi formalizzato nella meccanica del corpo rigido (Eulero, Settecento)." },
        { id: "inerzia", label: "Momento d'inerzia I = Σmr²", x: 85, y: 10, color: "#2563eb", html: "Misura la resistenza di un corpo a cambiare la sua rotazione; dipende da come la massa è distribuita.", why: "Nasce dall'applicazione di F = m·a a ogni punto materiale del corpo rigido: sommando m·r² si ottiene una grandezza che dipende dalla geometria e dall'asse." },
        { id: "seconda", label: "τ = I·α", x: 50, y: 40, color: "#8b5cf6", html: "Seconda legge della dinamica per le rotazioni.", why: "È F = m·a «tradotta» in angoli: ogni grandezza traslazionale ha il suo gemello rotazionale, perché le leggi di Newton si applicano a ogni punto del corpo." },
        { id: "angolare", label: "Momento angolare L = I·ω", x: 20, y: 75, color: "#16a34a", html: "Il «moto di rotazione» del corpo; τ = ΔL/Δt.", why: "Keplero lo intuì (area spazzata) e Newton lo mostrò per le forze centrali; la forma generale è legata al terzo principio applicato alle rotazioni." },
        { id: "conserv", label: "Conservazione di L", x: 55, y: 85, color: "#f59e0b", html: "Se τ_ris = 0 allora L resta costante: pirouette, tuffi, giroscopi.", why: "Corrisponde alla simmetria per rotazioni dello spazio: nessuna direzione è privilegiata (teorema di Noether). È una delle leggi più profonde della fisica, valida anche nel mondo atomico." },
        { id: "energia", label: "Energia ½Iω²", x: 88, y: 65, color: "#64748b", html: "Energia cinetica di rotazione; nel rotolamento si somma a ½Mv².", why: "Si ottiene sommando ½mv² su tutti i punti: spiega perché a parità di massa un anello scende più lentamente di una sfera su un piano inclinato." }
      ],
      edges: [["momento", "seconda", "produce"], ["inerzia", "seconda", "si oppone"], ["seconda", "angolare", "ΔL/Δt = τ"], ["angolare", "conserv", "se τ=0"], ["inerzia", "energia", "determina"]]
    }
  ],
  glossary: [
    { t: "Velocità angolare", d: "ω = Δθ/Δt, in rad/s: rapidità con cui varia l'angolo." },
    { t: "Momento di una forza", d: "τ = F·b: grandezza che misura l'effetto rotatorio di una forza, in N·m." },
    { t: "Braccio", d: "Distanza tra l'asse di rotazione e la retta d'azione della forza." },
    { t: "Momento d'inerzia", d: "I = Σ m·r²: resistenza di un corpo a variare la propria rotazione, in kg·m²." },
    { t: "Momento angolare", d: "L = I·ω: grandezza vettoriale che descrive la rotazione di un corpo, in kg·m²/s." },
    { t: "Conservazione del momento angolare", d: "In assenza di momenti esterni L resta costante." },
    { t: "Corpo rigido", d: "Corpo che non si deforma: le distanze tra i suoi punti restano costanti." },
    { t: "Precessione", d: "Rotazione lenta dell'asse di un corpo in rotazione sotto l'azione di un momento esterno." },
    { t: "Huygens-Steiner", d: "Teorema per cambiare asse: I = I_CM + M·d²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Un'asta è spinta con una forza di 30 N perpendicolare all'asta, a 0,50 m dall'asse. Quanto vale il momento della forza?", answer: 15, tol: 0, unit: "N·m", explain: "τ = F·b = 30 × 0,50 = 15 N·m." },
      { type: "mc", q: "Quale oggetto ha il momento d'inerzia maggiore, a parità di massa e raggio?", options: ["Sfera piena", "Cilindro pieno", "Anello sottile", "Sono uguali"], answer: 2, explain: "L'anello ha tutta la massa alla distanza R: I = MR², il valore massimo." },
      { type: "num", q: "Una massa puntiforme di 2 kg ruota a 0,5 m dall'asse. Quanto vale il suo momento d'inerzia?", answer: 0.5, tol: 0.001, unit: "kg·m²", explain: "I = m·r² = 2 × 0,25 = 0,5 kg·m²." },
      { type: "num", q: "Su un corpo con I = 0,40 kg·m² agisce un momento di 1,2 N·m. Qual è l'accelerazione angolare?", answer: 3, tol: 0, unit: "rad/s²", explain: "α = τ/I = 1,2/0,40 = 3 rad/s²." },
      { type: "tf", q: "Il momento angolare di un sistema isolato si conserva sempre.", answer: true, explain: "Se il momento risultante delle forze esterne è nullo, L = I·ω è costante." },
      { type: "num", q: "Una pattinatrice gira a 3 rad/s con I = 2,4 kg·m². Chiudendo le braccia I diventa 1,2 kg·m². Quanto vale la nuova ω?", answer: 6, tol: 0, unit: "rad/s", explain: "2,4·3 = 1,2·ω' ⟹ ω' = 6 rad/s." },
      { type: "mc", q: "Chi vince la discesa su un piano inclinato (senza strisciare) tra sfera piena, cilindro pieno e anello della stessa massa e raggio?", options: ["L'anello", "Il cilindro", "La sfera piena", "Arrivano insieme"], answer: 2, explain: "La sfera ha il minore rapporto I/(MR²) = 2/5, quindi converte più energia in traslazione." },
      { type: "tf", q: "Il momento d'inerzia di un corpo dipende solo dalla sua massa.", answer: false, explain: "Dipende anche da come la massa è distribuita rispetto all'asse di rotazione." },
      { type: "num", q: "Un disco omogeneo di 4 kg e raggio 0,5 m ruota attorno al suo asse. Calcola I.", answer: 0.5, tol: 0.001, unit: "kg·m²", explain: "I = ½·M·R² = ½ × 4 × 0,25 = 0,5 kg·m²." },
      { type: "order", q: "Ordina per momento d'inerzia crescente (stessa massa M e stesso raggio R, asse centrale).", items: ["Sfera piena", "Disco pieno", "Anello sottile"], explain: "I = 2/5 MR² (0,4) < ½ MR² (0,5) < MR² (1)." }
    ]
  }
});

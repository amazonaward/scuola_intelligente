TOPIC('it', {
  id: "m2-mat-trasformazioni",
  title: "Le trasformazioni geometriche",
  intro: "Spostare, girare, ribaltare, ingrandire: le <b>trasformazioni geometriche</b> sono le regole con cui una figura cambia posizione o dimensione nel piano. Le trovi nelle piastrelle, nei loghi, negli specchi, nei videogiochi e perfino nelle ali di una farfalla.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è una trasformazione",
      html: `<p>Una <b>trasformazione geometrica</b> è una regola che a ogni punto <b>P</b> del piano associa uno e un solo punto <b>P'</b> (si legge "P primo"), detto <b>immagine</b> o <b>corrispondente</b> di P.</p>
<p>Applicando la regola a tutti i punti di una figura <b>F</b> si ottiene la figura trasformata <b>F'</b>.</p>
<p>Le trasformazioni si dividono in due grandi famiglie:</p>
<ul>
<li><b>Isometrie</b> (dal greco <i>isos</i> = uguale, <i>metron</i> = misura): conservano le <b>lunghezze</b> dei segmenti e l'ampiezza degli angoli. La figura si sposta ma resta <b>congruente</b> (sovrapponibile) a quella di partenza. Sono isometrie la <b>traslazione</b>, la <b>rotazione</b> e la <b>simmetria</b> (assiale e centrale).</li>
<li><b>Similitudini</b>: conservano la <b>forma</b> (gli angoli) ma possono cambiare le dimensioni. La figura viene ingrandita o rimpicciolita di un certo <b>rapporto di similitudine k</b>.</li>
</ul>
<p>Un punto che coincide con la propria immagine (P = P') si chiama <b>punto unito</b>.</p>`
    },
    {
      type: "text",
      title: "2. La traslazione: scivolare",
      html: `<p>Nella <b>traslazione</b> tutti i punti si spostano della stessa distanza, nella stessa direzione e con lo stesso verso. Questo spostamento si descrive con un <b>vettore</b> <b>v</b>: una freccia che ha</p>
<ul>
<li><b>modulo</b> (lunghezza dello spostamento),</li>
<li><b>direzione</b> (la retta su cui avviene),</li>
<li><b>verso</b> (da che parte punta la freccia).</li>
</ul>
<p>Nel piano cartesiano un vettore si scrive con le sue componenti, ad esempio <b>v(3; −2)</b>: "3 a destra e 2 in giù". Il punto A(1; 4) diventa A'(1+3; 4−2) = <b>A'(4; 2)</b>.</p>
<p>Regola: <b>P(x; y) → P'(x + a; y + b)</b> con v(a; b).</p>
<p>La traslazione <b>non ha punti uniti</b> (tranne quella di vettore nullo) e conserva l'<b>orientamento</b>: se i vertici di un triangolo si leggono in senso antiorario, anche quelli dell'immagine si leggono in senso antiorario.</p>`
    },
    {
      type: "svg",
      title: "Le quattro isometrie a confronto",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<line x1="300" y1="0" x2="300" y2="340" stroke="#cbd5e1" stroke-width="2"/>
<line x1="0" y1="170" x2="600" y2="170" stroke="#cbd5e1" stroke-width="2"/>
<text x="150" y="22" font-size="17" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Traslazione</text>
<polygon points="30,140 80,140 30,70" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="170,140 220,140 170,70" fill="#1d4ed8" fill-opacity="0.75" stroke="#1e3a8a" stroke-width="2"/>
<line x1="85" y1="110" x2="160" y2="110" stroke="#f97316" stroke-width="4"/>
<polygon points="160,102 175,110 160,118" fill="#f97316"/>
<text x="122" y="100" font-size="16" fill="#c2410c" text-anchor="middle">v</text>
<text x="450" y="22" font-size="17" font-weight="bold" fill="#15803d" text-anchor="middle">Simmetria assiale</text>
<line x1="450" y1="35" x2="450" y2="160" stroke="#15803d" stroke-width="3" stroke-dasharray="8,6"/>
<polygon points="380,140 430,140 430,70" fill="#86efac" stroke="#15803d" stroke-width="2"/>
<polygon points="520,140 470,140 470,70" fill="#15803d" fill-opacity="0.75" stroke="#14532d" stroke-width="2"/>
<text x="458" y="160" font-size="15" fill="#15803d">asse r</text>
<text x="150" y="195" font-size="17" font-weight="bold" fill="#7c3aed" text-anchor="middle">Rotazione di 90°</text>
<circle cx="150" cy="270" r="5" fill="#7c3aed"/>
<text x="140" y="292" font-size="15" fill="#7c3aed">O</text>
<polygon points="160,260 220,260 220,220" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
<polygon points="140,260 140,320 100,320" fill="#7c3aed" fill-opacity="0.75" stroke="#4c1d95" stroke-width="2"/>
<path d="M205 245 A60 60 0 0 1 135 305" fill="none" stroke="#f97316" stroke-width="3" stroke-dasharray="5,4"/>
<text x="450" y="195" font-size="17" font-weight="bold" fill="#be123c" text-anchor="middle">Simmetria centrale</text>
<circle cx="450" cy="270" r="5" fill="#be123c"/>
<text x="456" y="288" font-size="15" fill="#be123c">O</text>
<polygon points="470,255 530,255 470,215" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
<polygon points="430,285 370,285 430,325" fill="#be123c" fill-opacity="0.75" stroke="#881337" stroke-width="2"/>
<line x1="530" y1="255" x2="370" y2="285" stroke="#be123c" stroke-width="1.5" stroke-dasharray="5,4"/>
</svg>`,
      caption: "La figura chiara è quella di partenza (F), quella scura è l'immagine (F'). In tutti e quattro i casi F e F' sono congruenti."
    },
    {
      type: "text",
      title: "3. La rotazione: girare intorno a un punto",
      html: `<p>Una <b>rotazione</b> è definita da tre elementi:</p>
<ol>
<li>il <b>centro di rotazione O</b>, l'unico punto che resta fermo (punto unito);</li>
<li>l'<b>angolo di rotazione α</b> (ad esempio 90°, 180°, 60°…);</li>
<li>il <b>verso</b>: <b>antiorario</b> (per convenzione positivo, +) o <b>orario</b> (negativo, −).</li>
</ol>
<p>Ogni punto P si muove lungo una circonferenza di centro O: la distanza OP resta uguale a OP' e l'angolo POP' è proprio α.</p>
<p>Nel piano cartesiano, con centro nell'origine:</p>
<ul>
<li>rotazione di +90°: <b>(x; y) → (−y; x)</b></li>
<li>rotazione di 180°: <b>(x; y) → (−x; −y)</b></li>
<li>rotazione di −90° (o +270°): <b>(x; y) → (y; −x)</b></li>
</ul>
<p>Una rotazione di 360° riporta ogni punto al suo posto: è l'<b>identità</b>.</p>`
    },
    {
      type: "text",
      title: "4. Le simmetrie: lo specchio",
      html: `<p><b>Simmetria assiale</b> (o ribaltamento): è data da una retta <b>r</b>, l'<b>asse di simmetria</b>. Il punto P' è tale che l'asse r è l'<b>asse del segmento PP'</b>: PP' è perpendicolare a r e il punto medio di PP' sta su r. I punti dell'asse sono tutti punti uniti.</p>
<p>La simmetria assiale <b>inverte l'orientamento</b>: è come guardarsi allo specchio, dove la mano destra sembra una sinistra.</p>
<ul>
<li>Asse x: (x; y) → (x; −y)</li>
<li>Asse y: (x; y) → (−x; y)</li>
<li>Bisettrice y = x: (x; y) → (y; x)</li>
</ul>
<p><b>Simmetria centrale</b>: è data da un punto <b>O</b>, il <b>centro di simmetria</b>, che è il punto medio di ogni segmento PP'. Equivale a una <b>rotazione di 180°</b> intorno a O. Con centro nell'origine: (x; y) → (−x; −y).</p>
<p>Una figura ha un <b>asse di simmetria</b> se la simmetria rispetto a quell'asse la trasforma in sé stessa. Il quadrato ne ha 4, il rettangolo 2, il triangolo equilatero 3, il cerchio infiniti.</p>`
    },
    {
      type: "widget",
      title: "Laboratorio: trasforma il punto",
      widget: "numberLine",
      options: { min: -8, max: 8, step: 1, marks: [-3, 3] },
      caption: "Su una retta la simmetria rispetto allo 0 manda 3 in −3: è la stessa cosa che succede alla coordinata x nella simmetria rispetto all'asse y. Prova a saltare da 3 a −3: quanto misura il salto? (6 = due volte la distanza dall'asse)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: isometrie",
      questions: [
        { type: "mc", q: "Quale trasformazione è descritta da un vettore?", options: ["Rotazione", "Traslazione", "Simmetria assiale"], answer: 1, explain: "La traslazione sposta tutti i punti secondo lo stesso vettore (modulo, direzione, verso)." },
        { type: "mc", q: "Il punto A(2; 5) viene traslato con v(−4; 1). Dove arriva?", options: ["A'(6; 6)", "A'(−2; 6)", "A'(−2; 4)"], answer: 1, explain: "x: 2 + (−4) = −2; y: 5 + 1 = 6. Quindi A'(−2; 6)." },
        { type: "tf", q: "La simmetria centrale è uguale a una rotazione di 180° intorno al centro.", answer: true, explain: "Ogni punto finisce dalla parte opposta rispetto a O, alla stessa distanza: è un mezzo giro." },
        { type: "num", q: "Quanti assi di simmetria ha un quadrato?", answer: 4, explain: "2 mediane (verticale e orizzontale) e 2 diagonali." }
      ]
    },
    {
      type: "text",
      title: "5. Composizione di isometrie",
      html: `<p>Si possono applicare due trasformazioni una dopo l'altra: si parla di <b>composizione</b>. Alcuni risultati importanti:</p>
<ul>
<li>due traslazioni danno una traslazione (si sommano i vettori);</li>
<li>due simmetrie assiali con assi <b>paralleli</b> danno una <b>traslazione</b> di modulo doppio della distanza fra gli assi;</li>
<li>due simmetrie assiali con assi <b>incidenti</b> in O danno una <b>rotazione</b> di centro O e angolo doppio dell'angolo fra gli assi;</li>
<li>due simmetrie centrali danno una traslazione.</li>
</ul>
<p>Per questo si dice che la simmetria assiale è la trasformazione "mattone": combinando al massimo tre simmetrie assiali si ottiene <b>qualsiasi isometria</b> del piano.</p>`
    },
    {
      type: "text",
      title: "6. Omotetia e similitudine: ingrandire e rimpicciolire",
      html: `<p>L'<b>omotetia</b> di centro O e rapporto <b>k</b> manda ogni punto P in un punto P' sulla retta OP tale che <b>OP' = k · OP</b>.</p>
<ul>
<li>se <b>k &gt; 1</b> la figura si <b>ingrandisce</b>;</li>
<li>se <b>0 &lt; k &lt; 1</b> la figura si <b>rimpicciolisce</b>;</li>
<li>se <b>k = 1</b> non cambia (identità);</li>
<li>se k è negativo l'immagine sta dalla parte opposta di O (con k = −1 è la simmetria centrale).</li>
</ul>
<p>Due figure si dicono <b>simili</b> se una si ottiene dall'altra con un'omotetia seguita (eventualmente) da un'isometria. Nelle figure simili:</p>
<ul>
<li>gli <b>angoli corrispondenti sono uguali</b>;</li>
<li>i <b>lati corrispondenti sono proporzionali</b>, con rapporto k;</li>
<li>i <b>perimetri</b> stanno nel rapporto <b>k</b>;</li>
<li>le <b>aree</b> stanno nel rapporto <b>k²</b> (e i volumi dei solidi nel rapporto k³).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Un'omotetia di rapporto 2",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<circle cx="60" cy="260" r="7" fill="#dc2626"/>
<text x="40" y="290" font-size="18" fill="#dc2626" font-weight="bold">O</text>
<line x1="60" y1="260" x2="540" y2="260" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<line x1="60" y1="260" x2="300" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<line x1="60" y1="260" x2="540" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<polygon points="180,260 300,190 180,150" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<polygon points="300,260 540,120 300,40" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="150" y="160" font-size="18" fill="#92400e" font-weight="bold">A</text>
<text x="290" y="34" font-size="18" fill="#92400e" font-weight="bold">A'</text>
<text x="300" y="215" font-size="18" fill="#92400e" font-weight="bold">B</text>
<text x="545" y="115" font-size="18" fill="#92400e" font-weight="bold">B'</text>
<text x="380" y="215" font-size="17" fill="#0f172a">OA' = 2 · OA</text>
<text x="380" y="240" font-size="17" fill="#0f172a">area F' = 4 · area F</text>
</svg>`,
      caption: "Con k = 2 ogni lato raddoppia, ma l'area diventa 4 volte più grande (2² = 4)."
    },
    {
      type: "example",
      title: "Esempio pratico: la mappa e la scala",
      html: `<p>Una cartina in scala <b>1 : 25 000</b> è una figura <b>simile</b> al territorio reale con rapporto k = 1/25 000.</p>
<p>Se sulla carta due paesi distano <b>8 cm</b>, nella realtà distano 8 × 25 000 = 200 000 cm = <b>2 km</b>.</p>
<p>Attenzione alle aree: un campo che sulla carta è 2 cm × 2 cm = 4 cm² nella realtà misura 500 m × 500 m = 250 000 m², cioè 4 cm² × 25 000² = 2,5 miliardi di cm². Le aree scalano con <b>k²</b>!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: le coordinate di un triangolo",
      html: `<p>Il triangolo ABC ha vertici A(1; 1), B(4; 1), C(1; 3).</p>
<table>
<tr><th>Trasformazione</th><th>A'</th><th>B'</th><th>C'</th></tr>
<tr><td>Traslazione v(2; 3)</td><td>(3; 4)</td><td>(6; 4)</td><td>(3; 6)</td></tr>
<tr><td>Simmetria asse y</td><td>(−1; 1)</td><td>(−4; 1)</td><td>(−1; 3)</td></tr>
<tr><td>Rotazione +90° (centro O)</td><td>(−1; 1)</td><td>(−1; 4)</td><td>(−3; 1)</td></tr>
<tr><td>Omotetia k = 2 (centro O)</td><td>(2; 2)</td><td>(8; 2)</td><td>(2; 6)</td></tr>
</table>
<p>Controllo: AB = 3 e A'B' = 3 nelle prime tre righe (isometrie); nell'omotetia A'B' = 6 = 2 · 3.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le trasformazioni",
      intro: "Se le regole con le coordinate non ti convincono, prova con le mani, con l'arte o con il 3D.",
      tabs: [
        {
          label: "✂️ Carta, forbici e lucido",
          html: `<p>Il metodo usato in molte scuole del Nord Europa è <b>manipolativo</b>:</p>
<ul>
<li><b>Traslazione</b>: ricalca la figura su un foglio trasparente e fallo <b>scivolare</b> senza girarlo.</li>
<li><b>Rotazione</b>: punta una matita sul centro O e <b>gira</b> il foglio trasparente.</li>
<li><b>Simmetria assiale</b>: piega il foglio lungo l'asse, oppure <b>capovolgi</b> il lucido. Con una goccia di tempera su un lato e la piegatura ottieni subito la figura simmetrica (la "farfalla").</li>
<li><b>Simmetria centrale</b>: gira il lucido di mezzo giro intorno al centro.</li>
</ul>
<p>Domanda chiave: per ottenere F' hai dovuto <b>capovolgere</b> il lucido? Se sì, l'isometria inverte l'orientamento (è una simmetria assiale o una sua composizione).</p>`
        },
        {
          label: "🎨 Escher e i mosaici dell'Alhambra",
          html: `<p>L'artista olandese <b>M. C. Escher</b> (1898–1972), dopo aver visitato l'<b>Alhambra</b> di Granada (Spagna), costruì disegni di pesci, uccelli e lucertole che riempiono il piano senza lasciare buchi: le <b>tassellazioni</b>.</p>
<p>Il trucco: si parte da un quadrato, si "morde" un pezzo su un lato e lo si <b>trasla</b> sul lato opposto (o lo si <b>ruota</b> intorno a un vertice). La nuova tessera si incastra perfettamente con le sue copie.</p>
<p>I matematici hanno dimostrato (Fëdorov, 1891) che esistono esattamente <b>17 tipi</b> di simmetrie per i motivi che si ripetono nel piano: gli artigiani arabi dell'Alhambra ne usarono moltissimi secoli prima!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#eff6ff"/>
<g stroke="#1e3a8a" stroke-width="2">
<path d="M20 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M100 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M180 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M260 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M340 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M420 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M500 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
</g>
<text x="300" y="165" font-size="18" fill="#1e3a8a" text-anchor="middle">La stessa tessera "morsa", traslata ancora e ancora,</text>
<text x="300" y="192" font-size="18" fill="#1e3a8a" text-anchor="middle">riempie la striscia senza buchi.</text>
</svg>`
        },
        {
          label: "🎮 Come nei videogiochi",
          html: `<p>Nei videogiochi ogni personaggio è un insieme di punti con coordinate. Il computer li trasforma decine di volte al secondo:</p>
<ul>
<li>il personaggio <b>cammina</b> → traslazione (x + 2; y);</li>
<li>il personaggio <b>si gira</b> a sinistra → simmetria rispetto a un asse verticale (−x; y);</li>
<li>la telecamera <b>zooma</b> → omotetia con k &gt; 1;</li>
<li>una ruota <b>gira</b> → rotazione.</li>
</ul>
<p>Le schede grafiche fanno miliardi di questi calcoli ogni secondo usando le <b>matrici</b>, tabelle di numeri che studierai alle superiori.</p>`
        },
        {
          label: "🧊 Ruota un solido in 3D",
          html: `<p>Le rotazioni esistono anche nello spazio, intorno a un <b>asse</b> invece che a un punto. Trascina il prisma esagonale: girando di <b>60°</b> intorno al suo asse torna a sembrare identico, perché la sua base è un esagono regolare (360° : 6 = 60°). Si dice che ha una <b>simmetria rotazionale di ordine 6</b>.</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 1.4, color: "#a78bfa", labels: true }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le simmetrie del corpo e della natura",
      html: `<p>Quasi tutti gli animali hanno una <b>simmetria bilaterale</b> (un asse che divide il corpo in destra e sinistra), mentre le stelle marine adulte hanno una simmetria rotazionale di ordine <b>5</b>. I fiocchi di neve hanno una simmetria di ordine <b>6</b>, dovuta alla forma delle molecole d'acqua che si legano nel ghiaccio formando esagoni.</p>
<p>Il nostro viso però non è perfettamente simmetrico: se prendi una foto e componi un volto con due metà sinistre, ti sembrerà quasi un'altra persona!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Felix Klein e la geometria delle trasformazioni",
      html: `<p>Nel <b>1872</b> il matematico tedesco <b>Felix Klein</b>, a 23 anni, presentò il <b>Programma di Erlangen</b>: l'idea che ogni geometria si può definire dalle trasformazioni che <b>non</b> cambiano certe proprietà. La geometria euclidea studia ciò che resta uguale con le isometrie (lunghezze, angoli); la geometria delle similitudini ciò che resta uguale ingrandendo (angoli, rapporti). Questa idea è alla base della fisica moderna, compresa la relatività di Einstein.</p>`
    },
    {
      type: "widget",
      title: "Classifica le trasformazioni",
      widget: "classify",
      options: {
        groups: ["Isometria (stessa misura)", "Similitudine non isometrica (cambia la misura)"],
        items: [
          ["🪞 Immagine allo specchio", 0],
          ["🎡 Cabina che gira nella ruota panoramica", 0],
          ["🛗 Ascensore che sale", 0],
          ["🗺️ Mappa in scala 1:100 000", 1],
          ["📷 Foto stampata in formato più grande", 1],
          ["🔍 Lente d'ingrandimento", 1],
          ["🧩 Tessera del puzzle spostata", 0],
          ["🏠 Plastico di una casa", 1]
        ]
      },
      caption: "Chiediti sempre: le lunghezze restano uguali?"
    },
    {
      type: "conceptMap",
      title: "Mappa delle trasformazioni: tocca i nodi e scopri il perché",
      nodes: [
        { id: "trasf", label: "Trasformazione", x: 50, y: 6, color: "#0ea5e9", html: "Regola che associa a ogni punto P un unico punto P'.", why: "L'idea di studiare le figure attraverso i movimenti risale a Euclide (circa 300 a.C.), che dimostrava l'uguaglianza dei triangoli \"sovrapponendoli\". Fu Felix Klein nel 1872 a mettere le trasformazioni al centro di tutta la geometria." },
        { id: "iso", label: "Isometrie", x: 25, y: 28, color: "#16a34a", html: "Trasformazioni che conservano lunghezze e angoli.", why: "Il nome viene dal greco isos (uguale) e metron (misura). Se tutte le distanze restano uguali, la figura è congruente: per Euclide due figure sono uguali proprio se si possono sovrapporre con un movimento rigido." },
        { id: "simil", label: "Similitudini", x: 75, y: 28, color: "#f59e0b", html: "Trasformazioni che conservano la forma: angoli uguali, lati proporzionali.", why: "Si basano sul teorema di Talete (VI secolo a.C.): rette parallele tagliano su due trasversali segmenti proporzionali. Talete, secondo la tradizione, misurò così l'altezza delle piramidi dalla loro ombra." },
        { id: "trasl", label: "Traslazione", x: 8, y: 55, color: "#2563eb", html: "Spostamento di tutti i punti secondo un vettore.", why: "Il concetto di vettore (grandezza con modulo, direzione e verso) fu formalizzato nell'Ottocento da matematici come Hamilton e Grassmann, studiando forze e velocità in fisica." },
        { id: "rot", label: "Rotazione", x: 28, y: 62, color: "#7c3aed", html: "Giro di un angolo α intorno a un centro O.", why: "Si basa sulla circonferenza: ogni punto resta alla stessa distanza da O. Il verso antiorario è positivo per convenzione, la stessa usata in trigonometria per misurare gli angoli a partire dall'asse x." },
        { id: "simass", label: "Simmetria assiale", x: 48, y: 50, color: "#15803d", html: "Ribaltamento rispetto a una retta (asse).", why: "L'asse è il luogo dei punti equidistanti da P e P', cioè l'asse del segmento PP'. Componendo al massimo tre simmetrie assiali si ottiene ogni isometria del piano: per questo è la trasformazione fondamentale." },
        { id: "simcen", label: "Simmetria centrale", x: 40, y: 82, color: "#be123c", html: "Ogni punto va dalla parte opposta di O alla stessa distanza.", why: "O è il punto medio di PP'. Equivale a una rotazione di 180° ed è anche un'omotetia con k = −1: è il punto d'incontro fra le due famiglie di trasformazioni." },
        { id: "omot", label: "Omotetia (rapporto k)", x: 75, y: 58, color: "#ea580c", html: "Ingrandimento o riduzione da un centro O: OP' = k · OP.", why: "È il principio della camera oscura e del proiettore: i raggi di luce partono da un punto e si allontanano in linea retta, così l'immagine è più grande se lo schermo è più lontano." },
        { id: "aree", label: "Perimetri ×k, aree ×k²", x: 82, y: 85, color: "#a16207", html: "Nelle figure simili il perimetro cambia di k, l'area di k², il volume di k³.", why: "L'area è un prodotto di due lunghezze, e ciascuna viene moltiplicata per k: k · k = k². Per lo stesso motivo Galileo osservò (1638) che un animale gigante non può avere le stesse proporzioni di uno piccolo: il peso cresce come k³, la sezione delle ossa solo come k²." }
      ],
      edges: [
        ["trasf", "iso", "conserva le misure"],
        ["trasf", "simil", "conserva la forma"],
        ["iso", "trasl", ""],
        ["iso", "rot", ""],
        ["iso", "simass", ""],
        ["rot", "simcen", "di 180°"],
        ["simass", "simcen", "due assi ⊥"],
        ["simil", "omot", "si costruisce con"],
        ["omot", "aree", "effetti su"],
        ["omot", "simcen", "con k = −1"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Isometrie</b>: traslazione (vettore), rotazione (centro, angolo, verso), simmetria assiale (asse), simmetria centrale (centro). Conservano lunghezze e angoli.</li>
<li>Traslazione e rotazione conservano l'<b>orientamento</b>; la simmetria assiale lo <b>inverte</b>.</li>
<li><b>Similitudine</b> di rapporto k: angoli uguali, lati × k, perimetri × k, aree × k².</li>
<li>Coordinate: traslazione (x+a; y+b); simmetria asse x (x; −y); asse y (−x; y); centrale in O (−x; −y); rotazione +90° (−y; x).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: similitudine",
      questions: [
        { type: "num", q: "Un triangolo ha perimetro 15 cm. Un triangolo simile ha rapporto di similitudine k = 3. Quanto misura il suo perimetro?", answer: 45, unit: "cm", explain: "I perimetri stanno nel rapporto k: 15 × 3 = 45 cm." },
        { type: "num", q: "Un quadrato ha area 9 cm². Lo ingrandisco con k = 2. Che area ha la nuova figura?", answer: 36, unit: "cm²", explain: "Le aree stanno nel rapporto k² = 4: 9 × 4 = 36 cm²." },
        { type: "tf", q: "Due figure simili hanno sempre gli angoli corrispondenti uguali.", answer: true, explain: "La similitudine conserva la forma, cioè gli angoli." }
      ]
    }
  ],
  glossary: [
    { t: "Trasformazione geometrica", d: "Regola che associa a ogni punto P del piano un unico punto P'." },
    { t: "Isometria", d: "Trasformazione che conserva le distanze: la figura resta congruente." },
    { t: "Vettore", d: "Segmento orientato con modulo, direzione e verso; descrive una traslazione." },
    { t: "Centro di rotazione", d: "Punto che resta fermo in una rotazione." },
    { t: "Asse di simmetria", d: "Retta rispetto alla quale una figura si ribalta in sé stessa." },
    { t: "Punto unito", d: "Punto che coincide con la propria immagine." },
    { t: "Orientamento", d: "Verso (orario o antiorario) in cui si leggono i vertici di una figura." },
    { t: "Omotetia", d: "Trasformazione che ingrandisce o riduce le figure da un centro con rapporto k." },
    { t: "Rapporto di similitudine", d: "Numero k per cui si moltiplicano tutte le lunghezze di una figura simile." },
    { t: "Congruenti", d: "Figure sovrapponibili, con stesse misure." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste NON è un'isometria?", options: ["Traslazione", "Omotetia con k = 3", "Simmetria centrale", "Rotazione di 45°"], answer: 1, explain: "L'omotetia con k = 3 triplica le lunghezze, quindi non conserva le distanze." },
      { type: "mc", q: "Il simmetrico di P(3; −2) rispetto all'asse x è…", options: ["(−3; −2)", "(3; 2)", "(−3; 2)", "(−2; 3)"], answer: 1, explain: "Nella simmetria rispetto all'asse x la x resta uguale e la y cambia segno." },
      { type: "mc", q: "Il punto Q(2; 5) ruotato di +90° intorno all'origine diventa…", options: ["(5; 2)", "(−5; 2)", "(5; −2)", "(−2; −5)"], answer: 1, explain: "Regola della rotazione di +90°: (x; y) → (−y; x) = (−5; 2)." },
      { type: "tf", q: "La simmetria assiale conserva l'orientamento delle figure.", answer: false, explain: "Lo inverte: è l'effetto specchio, la destra diventa sinistra." },
      { type: "tf", q: "Una traslazione non ha punti uniti (se il vettore non è nullo).", answer: true, explain: "Tutti i punti si spostano della stessa quantità: nessuno resta fermo." },
      { type: "num", q: "Il punto A(−1; 4) viene traslato con il vettore v(5; −3). Qual è l'ascissa (x) di A'?", answer: 4, explain: "x' = −1 + 5 = 4 (e y' = 4 − 3 = 1)." },
      { type: "num", q: "Due rettangoli simili hanno rapporto di similitudine k = 3. Il più piccolo ha area 5 cm². Quanto misura l'area del più grande?", answer: 45, unit: "cm²", explain: "Le aree stanno nel rapporto k² = 9: 5 × 9 = 45 cm²." },
      { type: "num", q: "Quanti assi di simmetria ha un triangolo equilatero?", answer: 3, explain: "Ogni altezza (che è anche mediana e bisettrice) è un asse di simmetria." },
      { type: "text", q: "Come si chiama la trasformazione che ingrandisce o riduce una figura a partire da un centro O?", answer: ["omotetia", "l'omotetia", "omotetia di centro o"], explain: "È l'omotetia di rapporto k." },
      { type: "mc", q: "Componendo due simmetrie assiali con assi paralleli distanti 3 cm si ottiene…", options: ["una rotazione di 3°", "una traslazione di 6 cm", "una simmetria centrale", "una traslazione di 3 cm"], answer: 1, explain: "Il risultato è una traslazione perpendicolare agli assi di modulo doppio della loro distanza: 2 × 3 = 6 cm." },
      { type: "order", q: "Ordina le figure dal minore al maggiore numero di assi di simmetria.", items: ["Triangolo scaleno (0)", "Triangolo isoscele (1)", "Rettangolo (2)", "Quadrato (4)", "Cerchio (infiniti)"], explain: "0, 1, 2, 4, infiniti." },
      { type: "mc", q: "Su una mappa in scala 1:50 000 due città distano 6 cm. Quanto distano nella realtà?", options: ["300 m", "3 km", "30 km", "50 km"], answer: 1, explain: "6 × 50 000 = 300 000 cm = 3000 m = 3 km." }
    ],
    gen: [["proportion", 2]]
  }
});

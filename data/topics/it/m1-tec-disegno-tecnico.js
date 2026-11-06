TOPIC('it', {
  id: `m1-tec-disegno-tecnico`,
  title: `Il disegno tecnico`,
  intro: `Un disegno artistico esprime emozioni; un <b>disegno tecnico</b> deve essere <b>preciso</b> e <b>capito da tutti allo stesso modo</b>, in qualsiasi Paese del mondo: è il "linguaggio" di ingegneri, architetti, artigiani. In questa lezione conosciamo gli <b>strumenti</b>, i <b>formati</b> dei fogli, i <b>tipi di linea</b>, le <b>scale</b> e le principali <b>costruzioni geometriche</b> con riga, squadre e compasso. 📐✏️`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Perché serve un disegno "tecnico"`,
      html: `<p>Immagina di dover far costruire una mensola a un falegname che parla un'altra lingua. Con un disegno tecnico ben fatto lui capisce subito <b>forma</b>, <b>misure</b> e <b>materiale</b>, senza bisogno di parole.</p>
<p>Per essere capito da tutti, il disegno tecnico segue delle <b>norme</b> (regole comuni):</p>
<ul>
<li>le norme <b>UNI</b> (Ente Italiano di Normazione), fondato nel 1921;</li>
<li>le norme europee <b>EN</b> e quelle internazionali <b>ISO</b>, spesso unite: per esempio <b>UNI EN ISO 128</b> stabilisce i tipi di linea.</li>
</ul>
<p>Le norme fissano: formati dei fogli, tipi e spessori delle linee, scritte, quote (le misure), scale.</p>`
    },
    {
      type: `text`, title: `2. Gli strumenti`,
      html: `<table>
<tr><th>Strumento</th><th>A che cosa serve</th></tr>
<tr><td>✏️ <b>Matite</b></td><td>La mina può essere <b>dura</b> (H, 2H… segno chiaro e sottile, per le costruzioni) o <b>morbida</b> (B, 2B… segno scuro, per ripassare). <b>HB</b> è media. Si usa anche il portamine (0,5 mm).</td></tr>
<tr><td>📏 <b>Riga</b></td><td>Tracciare segmenti e misurare (di solito 30-50 cm).</td></tr>
<tr><td>📐 <b>Squadra 45°</b></td><td>Triangolo rettangolo isoscele: angoli di 90°, 45°, 45°.</td></tr>
<tr><td>📐 <b>Squadra 30°/60°</b></td><td>Triangolo rettangolo con angoli di 90°, 60°, 30°.</td></tr>
<tr><td>🔵 <b>Compasso</b></td><td>Tracciare circonferenze e archi, riportare misure.</td></tr>
<tr><td>🟠 <b>Goniometro</b></td><td>Misurare e disegnare angoli in gradi (semicerchio da 0° a 180°).</td></tr>
<tr><td>🧽 <b>Gomma</b> e <b>temperamatite</b></td><td>Cancellare senza sporcare; mantenere la punta sottile.</td></tr>
</table>
<p>Accostando le due squadre si ottengono anche angoli di <b>15°</b> (60 − 45), <b>75°</b> (30 + 45), <b>105°</b>, <b>135°</b>…</p>`
    },
    {
      type: `svg`, title: `Le due squadre`,
      caption: `A sinistra la squadra a 45°, a destra quella a 30°/60°. Insieme permettono di tracciare parallele e perpendicolari.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<path d="M40 260 L240 260 L40 60 Z" fill="#7dd3fc" fill-opacity="0.7" stroke="#0369a1" stroke-width="4"/>
<path d="M90 230 L150 230 L90 170 Z" fill="#f8fafc" stroke="#0369a1" stroke-width="2"/>
<rect x="40" y="240" width="20" height="20" fill="none" stroke="#0f172a" stroke-width="2"/>
<text x="70" y="90" font-size="18" fill="#0c4a6e" font-weight="bold">45°</text>
<text x="190" y="250" font-size="18" fill="#0c4a6e" font-weight="bold">45°</text>
<text x="65" y="255" font-size="15" fill="#0f172a">90°</text>
<text x="140" y="290" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Squadra 45°</text>
<path d="M330 260 L566 260 L330 124 Z" fill="#fdba74" fill-opacity="0.75" stroke="#c2410c" stroke-width="4"/>
<path d="M370 240 L470 240 L370 182 Z" fill="#f8fafc" stroke="#c2410c" stroke-width="2"/>
<rect x="330" y="240" width="20" height="20" fill="none" stroke="#0f172a" stroke-width="2"/>
<text x="340" y="160" font-size="18" fill="#7c2d12" font-weight="bold">60°</text>
<text x="505" y="252" font-size="18" fill="#7c2d12" font-weight="bold">30°</text>
<text x="355" y="255" font-size="15" fill="#0f172a">90°</text>
<text x="450" y="290" font-size="17" text-anchor="middle" fill="#7c2d12" font-weight="bold">Squadra 30°/60°</text>
<text x="300" y="35" font-size="16" text-anchor="middle" fill="#334155">La somma degli angoli è sempre 180°</text>
</svg>`
    },
    {
      type: `text`, title: `3. I fogli: i formati A`,
      html: `<p>I fogli da disegno seguono la serie <b>A</b> (norma ISO 216). Il foglio più grande, l'<b>A0</b>, ha l'area di <b>1 m²</b>. Tagliandolo a metà sul lato lungo si ottiene l'A1, poi l'A2, l'A3, l'A4…</p>
<table>
<tr><th>Formato</th><th>Misure (mm)</th></tr>
<tr><td>A0</td><td>841 × 1189</td></tr>
<tr><td>A1</td><td>594 × 841</td></tr>
<tr><td>A2</td><td>420 × 594</td></tr>
<tr><td><b>A3</b></td><td><b>297 × 420</b> (quello che usi a scuola per le tavole)</td></tr>
<tr><td><b>A4</b></td><td><b>210 × 297</b> (il foglio da stampante)</td></tr>
</table>
<p>Il segreto: il rapporto tra lato lungo e lato corto è sempre circa <b>1,414</b> (cioè √2). Così, piegando a metà, il foglio <b>mantiene la stessa forma</b>!</p>
<p>Prima di disegnare si fa la <b>squadratura</b>: un riquadro a circa 1 cm dal bordo, con in basso a destra il <b>cartiglio</b> (nome, classe, data, titolo, scala).</p>`
    },
    {
      type: `svg`, title: `Dall'A0 all'A4`,
      caption: `Ogni formato è la metà del precedente. Due A4 affiancati fanno un A3.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<rect x="150" y="20" width="370" height="262" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<rect x="150" y="20" width="185" height="262" fill="#bbf7d0" stroke="#1f2937" stroke-width="3"/>
<rect x="335" y="20" width="185" height="131" fill="#bfdbfe" stroke="#1f2937" stroke-width="3"/>
<rect x="335" y="151" width="92" height="131" fill="#fbcfe8" stroke="#1f2937" stroke-width="3"/>
<rect x="427" y="151" width="93" height="65" fill="#ddd6fe" stroke="#1f2937" stroke-width="3"/>
<text x="242" y="160" font-size="26" text-anchor="middle" fill="#166534" font-weight="bold">A1</text>
<text x="427" y="95" font-size="24" text-anchor="middle" fill="#1e40af" font-weight="bold">A2</text>
<text x="381" y="225" font-size="20" text-anchor="middle" fill="#9d174d" font-weight="bold">A3</text>
<text x="473" y="190" font-size="17" text-anchor="middle" fill="#5b21b6" font-weight="bold">A4</text>
<text x="20" y="60" font-size="20" fill="#854d0e" font-weight="bold">A0 = 1 m²</text>
<text x="20" y="90" font-size="15" fill="#334155">ogni taglio</text>
<text x="20" y="110" font-size="15" fill="#334155">dimezza l'area</text>
<text x="20" y="150" font-size="15" fill="#334155">lato lungo :</text>
<text x="20" y="170" font-size="15" fill="#334155">lato corto ≈ 1,414</text>
</svg>`
    },
    {
      type: `widget`, title: `Il foglio da disegno: trova le parti`,
      widget: `labelDiagram`,
      caption: `Clicca sui punti e scegli il nome giusto.`,
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="10" width="560" height="280" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
<rect x="45" y="30" width="515" height="240" fill="none" stroke="#0f172a" stroke-width="4"/>
<rect x="400" y="215" width="160" height="55" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>
<line x1="400" y1="242" x2="560" y2="242" stroke="#0f172a" stroke-width="1"/>
<rect x="120" y="90" width="160" height="90" fill="none" stroke="#0f172a" stroke-width="3"/>
<line x1="200" y1="70" x2="200" y2="200" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="14 4 2 4"/>
<line x1="120" y1="215" x2="280" y2="215" stroke="#0f172a" stroke-width="1"/>
<text x="200" y="210" font-size="14" text-anchor="middle" fill="#0f172a">80</text>
</svg>`,
        spots: [
          { x: 32, y: 150, label: `margine` },
          { x: 45, y: 120, label: `squadratura` },
          { x: 480, y: 242, label: `cartiglio` },
          { x: 120, y: 135, label: `contorno visibile` },
          { x: 200, y: 75, label: `asse di simmetria` },
          { x: 200, y: 215, label: `quota` }
        ]
      }
    },
    {
      type: `text`, title: `4. I tipi di linea`,
      html: `<p>Nel disegno tecnico ogni linea ha un <b>significato</b>:</p>
<table>
<tr><th>Linea</th><th>Aspetto</th><th>Significato</th></tr>
<tr><td><b>Continua grossa</b></td><td>━━━━━</td><td>contorni e spigoli <b>visibili</b></td></tr>
<tr><td><b>Continua fine</b></td><td>─────</td><td>linee di <b>quota</b> e di riferimento, tratteggi delle sezioni</td></tr>
<tr><td><b>Tratteggiata</b> (a tratti)</td><td>– – – – –</td><td>spigoli <b>nascosti</b> (che non si vedono)</td></tr>
<tr><td><b>Mista fine</b> (tratto-punto)</td><td>—·—·—·—</td><td><b>assi</b> di simmetria, centri di cerchi</td></tr>
</table>
<p>La <b>quota</b> è la misura scritta sul disegno, sempre in <b>millimetri</b> (senza scrivere "mm") e sempre la misura <b>reale</b> dell'oggetto, anche se il disegno è in scala.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: strumenti e linee`,
      questions: [
        { type: `mc`, q: `Quale matita lascia il segno più scuro e morbido?`, options: [`2H`, `HB`, `2B`], answer: 2, explain: `B = morbida (black): 2B è più scura di HB, H è dura e chiara.` },
        { type: `mc`, q: `Uno spigolo nascosto si disegna con una linea…`, options: [`continua grossa`, `tratteggiata`, `mista tratto-punto`], answer: 1, explain: `Gli spigoli nascosti si tratteggiano.` },
        { type: `num`, q: `Quanti mm è il lato corto di un foglio A4?`, answer: 210, tol: 0, unit: `mm`, explain: `A4 = 210 × 297 mm.` }
      ]
    },
    {
      type: `text`, title: `5. Le scale`,
      html: `<p>Spesso un oggetto è troppo grande (una casa) o troppo piccolo (una vite) per stare sul foglio. Si usa allora una <b>scala</b>: il rapporto tra la misura <b>sul disegno</b> e la misura <b>reale</b>.</p>
<ul>
<li><b>1:1</b> → scala <b>reale</b>: 1 cm sul foglio = 1 cm vero.</li>
<li><b>1:2, 1:5, 1:10, 1:100…</b> → scale di <b>riduzione</b>: in 1:10, 1 cm sul foglio = 10 cm veri.</li>
<li><b>2:1, 5:1, 10:1</b> → scale di <b>ingrandimento</b>: in 2:1, 2 cm sul foglio = 1 cm vero.</li>
</ul>
<p><b>Passo per passo</b>: un tavolo lungo 120 cm disegnato in scala 1:10 → 120 : 10 = <b>12 cm</b> sul foglio.</p>`
    },
    {
      type: `example`, title: `Esempio pratico: la pianta della tua camera`,
      html: `<p>La tua camera misura 4 m × 3 m. Vuoi disegnarla su un foglio A4 in scala <b>1:50</b>.</p>
<ol>
<li>Trasforma in cm: 400 cm × 300 cm.</li>
<li>Dividi per 50: 400 : 50 = <b>8 cm</b>; 300 : 50 = <b>6 cm</b>.</li>
<li>Il letto (200 cm × 90 cm) diventa 4 cm × 1,8 cm.</li>
</ol>
<p>Sul cartiglio scrivi "Scala 1:50", ma sulle quote scrivi le misure <b>vere</b> (4000 e 3000 mm).</p>`
    },
    {
      type: `text`, title: `6. Le costruzioni geometriche fondamentali`,
      html: `<p><b>Asse di un segmento AB</b> (la retta perpendicolare che passa per il punto medio):</p>
<ol>
<li>punta il compasso in A con apertura più grande di metà AB e traccia un arco sopra e sotto;</li>
<li>con la stessa apertura punta in B e traccia altri due archi;</li>
<li>unisci i due punti in cui gli archi si incrociano: è l'asse.</li>
</ol>
<p><b>Bisettrice di un angolo</b> (la retta che lo divide a metà):</p>
<ol>
<li>punta nel vertice V e traccia un arco che taglia i due lati nei punti 1 e 2;</li>
<li>punta in 1 e poi in 2 con la stessa apertura e traccia due archi che si incrociano in P;</li>
<li>unisci V con P.</li>
</ol>
<p><b>Esagono regolare inscritto</b>: traccia una circonferenza; con la <b>stessa apertura del raggio</b> punta su un punto della circonferenza e riporta 6 volte la misura: il lato dell'esagono è uguale al raggio! Unendo un punto sì e uno no ottieni un <b>triangolo equilatero</b>.</p>`
    },
    {
      type: `svg`, title: `Asse di un segmento ed esagono con il compasso`,
      caption: `A sinistra: gli archi da A e da B si incontrano sull'asse. A destra: il raggio riportato 6 volte forma l'esagono.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="70" y1="150" x2="230" y2="150" stroke="#0f172a" stroke-width="4"/>
<circle cx="70" cy="150" r="5" fill="#0f172a"/><circle cx="230" cy="150" r="5" fill="#0f172a"/>
<text x="55" y="175" font-size="18" fill="#0f172a" font-weight="bold">A</text>
<text x="235" y="175" font-size="18" fill="#0f172a" font-weight="bold">B</text>
<path d="M135 61.3 A110 110 0 0 1 165 94.5" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M165 205.5 A110 110 0 0 1 135 238.7" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M165 61.3 A110 110 0 0 0 135 94.5" fill="none" stroke="#dc2626" stroke-width="2"/>
<path d="M135 205.5 A110 110 0 0 0 165 238.7" fill="none" stroke="#dc2626" stroke-width="2"/>
<circle cx="150" cy="74.5" r="4" fill="#16a34a"/><circle cx="150" cy="225.5" r="4" fill="#16a34a"/>
<line x1="150" y1="40" x2="150" y2="265" stroke="#16a34a" stroke-width="2" stroke-dasharray="12 4 2 4"/>
<text x="160" y="60" font-size="16" fill="#166534" font-weight="bold">asse</text>
<text x="150" y="290" font-size="15" text-anchor="middle" fill="#334155">punto medio M</text>
<circle cx="150" cy="150" r="4" fill="#16a34a"/>
<circle cx="440" cy="150" r="100" fill="none" stroke="#94a3b8" stroke-width="2"/>
<polygon points="540,150 490,237 390,237 340,150 390,63 490,63" fill="#c7d2fe" fill-opacity="0.6" stroke="#4338ca" stroke-width="3"/>
<polygon points="540,150 390,237 390,63" fill="none" stroke="#db2777" stroke-width="2"/>
<line x1="440" y1="150" x2="540" y2="150" stroke="#ea580c" stroke-width="3"/>
<text x="490" y="142" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">r</text>
<text x="525" y="208" font-size="15" fill="#9a3412" font-weight="bold">lato = r</text>
<circle cx="440" cy="150" r="4" fill="#0f172a"/>
<text x="440" y="285" font-size="15" text-anchor="middle" fill="#334155">esagono e triangolo equilatero</text>
</svg>`
    },
    {
      type: `3d`, title: `Dal disegno al solido`,
      scene: `solid`,
      caption: `Un esagono disegnato sul foglio, "alzato" in altezza, diventa un prisma esagonale (come una matita!). Cambia solido con i pulsanti e osserva spigoli e misure.`,
      options: { shape: `prism`, n: 6, r: 1, h: 2, color: `#6366f1`, labels: true, shapes: [`prism`, `cube`, `cylinder`, `pyramid`] }
    },
    {
      type: `example`, title: `Esempio pratico: il logo della squadra`,
      html: `<p>La classe deve disegnare il logo del torneo di calcio: un <b>esagono</b> con dentro un <b>pallone</b>.</p>
<ol>
<li>Traccia gli assi perpendicolari al centro del foglio con la linea mista.</li>
<li>Con il compasso traccia un cerchio di raggio 6 cm.</li>
<li>Riporta 6 volte il raggio sulla circonferenza: ottieni i vertici dell'esagono.</li>
<li>Ripassa l'esagono con la matita morbida (linea continua grossa).</li>
<li>Al centro disegna un cerchio di raggio 3 cm per il pallone.</li>
</ol>
<p>Lo stesso metodo è usato per le piastrelle esagonali dei pavimenti e per i bulloni esagonali!</p>`
    },
    {
      type: `widget`, title: `Gioco: abbina strumento e uso`,
      widget: `match`,
      options: {
        pairs: [
          [`Compasso`, `Tracciare circonferenze e archi`],
          [`Goniometro`, `Misurare gli angoli in gradi`],
          [`Squadra 45°`, `Angoli di 90° e 45°`],
          [`Squadra 30°/60°`, `Angoli di 90°, 60° e 30°`],
          [`Matita H`, `Segno chiaro per le costruzioni`],
          [`Matita B`, `Segno scuro per ripassare`],
          [`Cartiglio`, `Riquadro con nome, titolo e scala`]
        ]
      }
    },
    {
      type: `curiosity`, title: `Lo sapevi che… Euclide disegnava solo con riga e compasso?`,
      html: `<p>Circa nel <b>300 a.C.</b>, ad Alessandria d'Egitto, il matematico greco <b>Euclide</b> scrisse gli <i>Elementi</i>, in cui tutte le costruzioni si fanno con <b>riga (senza tacche) e compasso</b>. Per oltre 2000 anni i matematici hanno cercato di dividere un angolo in tre parti uguali con questi soli strumenti: solo nel <b>1837</b> il francese Pierre Wantzel dimostrò che, in generale, è <b>impossibile</b>!</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… l'idea del foglio A4 è del Settecento?`,
      html: `<p>Lo scienziato tedesco <b>Georg Christoph Lichtenberg</b> notò già nel <b>1786</b> che un foglio con lati in rapporto √2 mantiene la forma quando si piega a metà. Il sistema fu adottato in Germania nel <b>1922</b> (norma DIN 476, dell'ingegnere Walter Porstmann) e poi in quasi tutto il mondo. Fanno eccezione gli <b>Stati Uniti</b>, che usano ancora il formato <i>Letter</i> (8,5 × 11 pollici).</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per capirlo`,
      intro: `Se le costruzioni geometriche ti sembrano "magia", prova queste strade.`,
      tabs: [
        {
          label: `🧵 Con spago e chiodi`,
          html: `<p>I giardinieri e i muratori antichi non avevano il compasso grande: usavano uno <b>spago legato a un picchetto</b>. Tenendo lo spago teso e girando intorno al picchetto si traccia un cerchio sul terreno. Gli <b>Egizi</b> usavano una corda con <b>12 nodi</b> equidistanti: formando un triangolo con lati di 3, 4 e 5 tratti ottenevano un angolo retto perfetto per costruire le piramidi!</p>`
        },
        {
          label: `🇯🇵 Piegando la carta`,
          html: `<p>In Giappone l'<b>origami</b> è diventato anche un metodo di geometria: piegando la carta si costruiscono assi, bisettrici e perpendicolari senza nessuno strumento.</p>
<ul>
<li><b>Asse di un segmento</b>: piega il foglio in modo che A vada esattamente su B: la piega è l'asse!</li>
<li><b>Bisettrice</b>: piega in modo che un lato dell'angolo si sovrapponga all'altro.</li>
<li><b>Perpendicolare</b>: piega una linea su sé stessa.</li>
</ul>
<p>Con le pieghe si può perfino dividere un angolo in tre parti: cosa impossibile con riga e compasso!</p>`
        },
        {
          label: `🧊 Il disegno diventa 3D`,
          html: `<p>Il disegno tecnico serve a costruire oggetti veri. Ruota il cubo: ogni faccia che vedi di fronte, di lato e dall'alto diventerà un quadrato sul foglio. È l'idea delle <b>proiezioni ortogonali</b>, inventate dal francese <b>Gaspard Monge</b> alla fine del Settecento, che studierai in seconda.</p>`,
          scene: `solid`,
          options: { shape: `box`, w: 3, h: 1, d: 2, color: `#f59e0b`, labels: true }
        },
        {
          label: `🧮 La scala sulla retta`,
          html: `<p>Pensa alla scala come a una retta in cui ogni "salto" vale più centimetri. In scala 1:10 ogni tacca da 1 cm sul foglio vale 10 cm nella realtà. Muovi i salti: 12 tacche = 120 cm, il tavolo dell'esempio!</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 150, step: 10, marks: [120] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: il linguaggio del disegno tecnico`,
      nodes: [
        { id: `dt`, label: `Disegno tecnico`, x: 50, y: 8, color: `#4f46e5`, html: `Linguaggio grafico preciso e universale.`, why: `Serve a comunicare un progetto senza ambiguità. Già nel Rinascimento artisti-ingegneri come <b>Leonardo da Vinci</b> e <b>Francesco di Giorgio Martini</b> disegnavano macchine con grande precisione, ma le regole comuni sono nate con l'industria nell'Ottocento.` },
        { id: `norme`, label: `Norme UNI EN ISO`, x: 15, y: 30, color: `#0ea5e9`, html: `Regole comuni per tutti.`, why: `Con la produzione in serie, i pezzi fatti in fabbriche diverse dovevano incastrarsi. L'ISO (Organizzazione Internazionale per la Normazione) nasce nel <b>1947</b> a Ginevra; in Italia l'UNI nel 1921.` },
        { id: `strum`, label: `Strumenti`, x: 50, y: 30, color: `#f97316`, html: `Matite, riga, squadre, compasso, goniometro.`, why: `Riga e compasso sono gli strumenti della geometria di <b>Euclide</b> (300 a.C. circa). Le squadre a 45° e 30°/60° derivano dai due triangoli rettangoli "speciali": metà di un quadrato e metà di un triangolo equilatero.` },
        { id: `fogli`, label: `Formati A`, x: 85, y: 30, color: `#eab308`, html: `A0 = 1 m², A4 = 210 × 297 mm.`, why: `Lati in rapporto √2: se a : b = √2, tagliando a metà il nuovo rapporto resta √2. Idea di Lichtenberg (1786), norma DIN 476 (1922), poi ISO 216.` },
        { id: `linee`, label: `Tipi di linea`, x: 20, y: 62, color: `#22c55e`, html: `Continua, tratteggiata, tratto-punto.`, why: `Una sola vista non mostra tutto: servono segni diversi per distinguere ciò che si vede, ciò che è nascosto e gli assi. Le regole sono fissate dalla norma ISO 128.` },
        { id: `scala`, label: `Scale`, x: 50, y: 62, color: `#ef4444`, html: `1:1 reale, 1:n riduzione, n:1 ingrandimento.`, why: `Una scala è un <b>rapporto</b>: lo stesso concetto delle proporzioni in matematica. Le carte geografiche usano lo stesso principio.` },
        { id: `costr`, label: `Costruzioni geometriche`, x: 80, y: 62, color: `#a855f7`, html: `Asse, bisettrice, perpendicolare, poligoni.`, why: `Funzionano perché il compasso traccia punti alla <b>stessa distanza</b> dal centro: l'asse è il luogo dei punti equidistanti da A e B; nell'esagono il lato è uguale al raggio perché è formato da 6 triangoli equilateri.` },
        { id: `cad`, label: `Dal foglio al CAD e al 3D`, x: 50, y: 92, color: `#14b8a6`, html: `Oggi si disegna anche al computer.`, why: `Nel <b>1963</b> Ivan Sutherland creò <i>Sketchpad</i>, il primo programma di disegno al computer. Oggi i programmi CAD e le stampanti 3D trasformano direttamente il disegno in oggetto. Ma le regole sono sempre quelle del disegno a mano!` }
      ],
      edges: [
        [`dt`, `norme`, `segue`], [`dt`, `strum`, `usa`], [`dt`, `fogli`, `su`], [`norme`, `linee`, `fissano`],
        [`strum`, `costr`, `permettono`], [`fogli`, `scala`, `richiedono`], [`costr`, `cad`, `evolvono in`], [`scala`, `cad`, `anche nel`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: scale e costruzioni`,
      questions: [
        { type: `mc`, q: `La scala 2:1 è una scala di…`, options: [`riduzione`, `ingrandimento`, `misura reale`], answer: 1, explain: `2 cm sul disegno = 1 cm vero: l'oggetto appare più grande.` },
        { type: `num`, q: `Un muro lungo 500 cm disegnato in scala 1:100 è lungo…`, answer: 5, tol: 0, unit: `cm`, explain: `500 : 100 = 5 cm.` },
        { type: `tf`, q: `Nell'esagono regolare inscritto il lato è uguale al raggio.`, answer: true, explain: `L'esagono è formato da 6 triangoli equilateri con lato = raggio.` }
      ]
    }
  ],
  glossary: [
    { t: `Disegno tecnico`, d: `Rappresentazione grafica precisa di un oggetto, secondo regole comuni (norme).` },
    { t: `Norme UNI, EN, ISO`, d: `Regole italiane, europee e internazionali per disegni e prodotti.` },
    { t: `Squadratura`, d: `Riquadro tracciato sul foglio a circa 1 cm dal bordo.` },
    { t: `Cartiglio`, d: `Riquadro in basso a destra con nome, titolo, data e scala.` },
    { t: `Quota`, d: `Misura reale scritta sul disegno, in millimetri.` },
    { t: `Scala`, d: `Rapporto tra misura sul disegno e misura reale (es. 1:10).` },
    { t: `Asse di un segmento`, d: `Retta perpendicolare al segmento passante per il suo punto medio.` },
    { t: `Bisettrice`, d: `Semiretta che divide un angolo in due angoli uguali.` },
    { t: `Formato A4`, d: `Foglio di 210 × 297 mm; l'A0 misura 1 m².` },
    { t: `CAD`, d: `Computer-Aided Design: disegno tecnico al computer.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale linea si usa per gli assi di simmetria?`, options: [`Continua grossa`, `Tratteggiata`, `Mista fine tratto-punto`], answer: 2, explain: `Gli assi si disegnano con la linea mista fine (tratto-punto).` },
      { type: `mc`, q: `Quali angoli ha la squadra 30°/60°?`, options: [`90°, 45°, 45°`, `90°, 60°, 30°`, `60°, 60°, 60°`], answer: 1, explain: `È un triangolo rettangolo con angoli di 90°, 60° e 30°.` },
      { type: `num`, q: `Quanti m² misura un foglio A0?`, answer: 1, tol: 0, unit: `m²`, explain: `L'A0 ha area 1 m² (841 × 1189 mm).` },
      { type: `mc`, q: `Un A3 è grande come…`, options: [`due A4`, `metà A4`, `quattro A4`], answer: 0, explain: `Ogni formato è il doppio del successivo: A3 = 2 × A4.` },
      { type: `num`, q: `Una porta alta 210 cm disegnata in scala 1:10 è alta… cm`, answer: 21, tol: 0, unit: `cm`, explain: `210 : 10 = 21 cm.` },
      { type: `tf`, q: `Le quote indicano la misura reale anche se il disegno è in scala.`, answer: true, explain: `Si scrive sempre la misura vera dell'oggetto, in mm.` },
      { type: `mc`, q: `La matita 2H è…`, options: [`dura, segno chiaro`, `morbida, segno scuro`, `media`], answer: 0, explain: `H = hard (dura): segno sottile e chiaro.` },
      { type: `order`, q: `Metti in ordine i passi per costruire l'asse del segmento AB.`, items: [`Punta in A e traccia due archi (sopra e sotto)`, `Con la stessa apertura punta in B e traccia due archi`, `Trova i due punti dove gli archi si incrociano`, `Unisci i due punti con la riga`], explain: `Gli archi da A e da B si incontrano in punti equidistanti da A e B: la retta che li unisce è l'asse.` },
      { type: `text`, q: `Come si chiama la semiretta che divide un angolo in due parti uguali?`, answer: [`bisettrice`, `la bisettrice`], explain: `La bisettrice.` },
      { type: `mc`, q: `Accostando le due squadre si può ottenere un angolo di…`, options: [`15°`, `20°`, `50°`], answer: 0, explain: `60° − 45° = 15°.` },
      { type: `tf`, q: `Il disegno di un francobollo in scala 5:1 è più piccolo del francobollo vero.`, answer: false, explain: `5:1 è un ingrandimento: il disegno è 5 volte più grande.` },
      { type: `mc`, q: `Chi scrisse gli "Elementi", con le costruzioni con riga e compasso?`, options: [`Pitagora`, `Euclide`, `Leonardo`], answer: 1, explain: `Euclide, circa 300 a.C., ad Alessandria d'Egitto.` }
    ],
    gen: [[`proportion`, 2]]
  }
});

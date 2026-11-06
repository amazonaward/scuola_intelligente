TOPIC('it', {
  id: "m3-sci-sistema-nervoso",
  title: "Il sistema nervoso",
  intro: "Leggere questa frase, ricordare una canzone, ritirare la mano da una pentola che scotta, sentire il profumo della pizza: tutto passa dal <b>sistema nervoso</b>, la rete di comunicazione del corpo. È fatto di miliardi di cellule speciali, i <b>neuroni</b>, che si scambiano segnali elettrici e chimici in pochi millesimi di secondo.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. A che cosa serve il sistema nervoso",
      html: `<p>Il sistema nervoso svolge tre compiti, uno dopo l'altro:</p>
<ol>
<li><b>Ricevere</b> informazioni dall'esterno e dall'interno del corpo, attraverso i <b>recettori</b> degli organi di senso (occhi, orecchie, pelle…) e degli organi interni.</li>
<li><b>Elaborare</b> le informazioni: confrontarle con i ricordi, decidere che cosa fare. Lo fanno il <b>cervello</b> e il <b>midollo spinale</b>.</li>
<li><b>Rispondere</b>, inviando ordini agli <b>effettori</b>: i muscoli (che si contraggono) e le ghiandole (che producono sostanze).</li>
</ol>
<p>Lavora insieme al <b>sistema endocrino</b> (le ghiandole che producono ormoni): il sistema nervoso è veloce come un messaggio sul telefono, gli ormoni sono più lenti ma hanno effetti più duraturi, come una lettera.</p>`
    },
    {
      type: "text",
      title: "2. Il neurone, la cellula che \"parla\"",
      html: `<p>Il <b>neurone</b> è la cellula del sistema nervoso. Nel cervello umano ce ne sono circa <b>86 miliardi</b>. È formato da:</p>
<ul>
<li><b>corpo cellulare</b>, con il nucleo;</li>
<li><b>dendriti</b>: corte ramificazioni che <b>ricevono</b> i segnali da altri neuroni;</li>
<li><b>assone</b>: un lungo prolungamento (può superare 1 metro, dal midollo spinale all'alluce!) che <b>trasmette</b> il segnale;</li>
<li><b>guaina mielinica</b>: un rivestimento isolante di grasso, come la plastica intorno ai fili elettrici, che rende il segnale molto più veloce;</li>
<li><b>terminali sinaptici</b>: le "dita" finali che passano il messaggio alla cellula successiva.</li>
</ul>
<p>Il segnale che corre lungo l'assone si chiama <b>impulso nervoso</b>: è una piccola onda elettrica prodotta dal passaggio di ioni (sodio e potassio) attraverso la membrana. Nelle fibre con mielina può viaggiare fino a circa <b>120 m/s</b> (più di 400 km/h).</p>
<p>Oltre ai neuroni ci sono le <b>cellule gliali</b>, che li nutrono, li proteggono e formano la mielina.</p>`
    },
    {
      type: "widget",
      title: "Riconosci le parti del neurone",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#eff6ff"/>
<path d="M90 130 L30 70 M90 130 L25 130 M90 130 L35 195 M60 100 L45 60 M55 165 L30 175 M40 70 L20 50" stroke="#7c3aed" stroke-width="7" stroke-linecap="round" fill="none"/>
<circle cx="100" cy="130" r="38" fill="#c084fc" stroke="#6d28d9" stroke-width="4"/>
<circle cx="100" cy="130" r="13" fill="#4c1d95"/>
<line x1="138" y1="130" x2="540" y2="130" stroke="#6d28d9" stroke-width="8"/>
<rect x="170" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="260" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="350" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<rect x="440" y="115" width="70" height="30" rx="15" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<path d="M540 130 L590 85 M540 130 L600 130 M540 130 L590 180" stroke="#6d28d9" stroke-width="6" fill="none"/>
<circle cx="592" cy="83" r="9" fill="#22c55e"/><circle cx="604" cy="130" r="9" fill="#22c55e"/><circle cx="592" cy="182" r="9" fill="#22c55e"/>
<text x="340" y="230" font-size="16" fill="#1e3a8a" text-anchor="middle">direzione dell'impulso →</text>
</svg>`,
        spots: [
          { x: 35, y: 70, label: "Dendriti" },
          { x: 100, y: 105, label: "Corpo cellulare" },
          { x: 100, y: 130, label: "Nucleo" },
          { x: 300, y: 130, label: "Guaina mielinica" },
          { x: 250, y: 155, label: "Assone" },
          { x: 604, y: 130, label: "Terminali sinaptici" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome giusto. Il segnale entra dai dendriti ed esce dai terminali."
    },
    {
      type: "text",
      title: "3. La sinapsi: un salto chimico",
      html: `<p>I neuroni non si toccano: tra un neurone e l'altro c'è uno spazio microscopico, la <b>sinapsi</b>. Quando l'impulso elettrico arriva alla fine dell'assone, il neurone libera delle sostanze chimiche, i <b>neurotrasmettitori</b> (per esempio acetilcolina, dopamina, serotonina). Queste attraversano lo spazio e si legano alla cellula successiva, che può "accendersi" o "spegnersi".</p>
<p>Ogni neurone può avere migliaia di sinapsi: nel cervello sono centinaia di <b>migliaia di miliardi</b>. Quando impariamo qualcosa, alcune sinapsi si rafforzano e se ne formano di nuove: è la <b>plasticità</b> del cervello. Per questo esercitarsi funziona!</p>
<p>Molte <b>droghe</b>, l'<b>alcol</b> e la <b>nicotina</b> agiscono proprio sulle sinapsi, imitando o bloccando i neurotrasmettitori: alterano percezioni e riflessi e possono creare <b>dipendenza</b>. Il cervello degli adolescenti è ancora in costruzione (fino a circa 25 anni) ed è particolarmente vulnerabile.</p>`
    },
    {
      type: "text",
      title: "4. L'organizzazione: centrale e periferico",
      html: `<table>
<tr><th>Sistema nervoso centrale (SNC)</th><th>Sistema nervoso periferico (SNP)</th></tr>
<tr><td><b>Encefalo</b> (nel cranio) e <b>midollo spinale</b> (dentro la colonna vertebrale). Elabora le informazioni e prende decisioni.</td>
<td><b>Nervi</b> che collegano il SNC a tutto il corpo: <b>12 paia di nervi cranici</b> (partono dall'encefalo) e <b>31 paia di nervi spinali</b> (partono dal midollo).</td></tr>
</table>
<p>Il SNC è protetto da <b>ossa</b> (cranio e vertebre), da tre membrane, le <b>meningi</b> (dura madre, aracnoide, pia madre), e da un liquido che fa da cuscinetto, il <b>liquor</b>.</p>
<p>Il SNP si divide in:</p>
<ul>
<li><b>somatico</b> (volontario): controlla i muscoli scheletrici, quelli che muovi quando vuoi;</li>
<li><b>autonomo</b> (involontario): controlla cuore, stomaco, intestino, ghiandole. Ha due parti che lavorano in modo opposto:
<ul><li><b>simpatico</b>: "combatti o fuggi" – accelera il cuore, dilata le pupille, blocca la digestione;</li>
<li><b>parasimpatico</b>: "riposa e digerisci" – rallenta il cuore, favorisce la digestione.</li></ul></li>
</ul>`
    },
    {
      type: "text",
      title: "5. L'encefalo",
      html: `<p>L'<b>encefalo</b> pesa circa <b>1,3–1,4 kg</b>, cioè il 2% del peso del corpo, ma consuma circa il <b>20% dell'energia</b>. Comprende:</p>
<ul>
<li><b>Cervello</b>: diviso in due <b>emisferi</b> collegati dal <b>corpo calloso</b>. La parte esterna, la <b>corteccia cerebrale</b> (sostanza grigia, piena di pieghe), è dove nascono pensiero, linguaggio, memoria e movimenti volontari. Ogni emisfero si divide in 4 <b>lobi</b>: frontale, parietale, temporale, occipitale.</li>
<li><b>Diencefalo</b>: il <b>talamo</b> smista le informazioni dei sensi; l'<b>ipotalamo</b> regola temperatura, fame, sete, sonno e comanda l'ipofisi (la "regina" delle ghiandole).</li>
<li><b>Cervelletto</b>: dietro e sotto il cervello; coordina i movimenti e l'<b>equilibrio</b>. Ti permette di andare in bicicletta senza pensarci.</li>
<li><b>Tronco encefalico</b>: collega encefalo e midollo; controlla funzioni vitali automatiche come <b>respiro</b> e <b>battito cardiaco</b>.</li>
</ul>
<p>Curioso: i nervi si <b>incrociano</b>. L'emisfero <b>sinistro</b> controlla la parte <b>destra</b> del corpo e viceversa.</p>`
    },
    {
      type: "svg",
      title: "I lobi del cervello e le loro funzioni",
      svg: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="330" fill="#fff7ed"/>
<path d="M120 190 C 100 110, 170 40, 280 38 C 380 35, 470 70, 490 150 C 505 205, 470 240, 420 240 L 160 240 C 130 238, 122 215, 120 190 Z" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<path d="M280 38 C 270 100, 290 150, 260 240" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M420 70 C 400 130, 420 180, 440 235" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M140 200 C 220 180, 330 190, 420 200" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<path d="M120 190 C 100 110, 170 40, 280 38 C 270 100, 290 150, 270 195 C 220 185, 170 190, 120 190 Z" fill="#60a5fa" opacity="0.75"/>
<path d="M280 38 C 380 35, 410 50, 420 70 C 400 130, 420 180, 420 200 C 360 192, 310 190, 270 195 C 290 150, 270 100, 280 38 Z" fill="#fbbf24" opacity="0.75"/>
<path d="M420 70 C 470 85, 495 130, 490 160 C 500 205, 470 238, 440 236 C 425 220, 420 210, 420 200 C 420 180, 400 130, 420 70 Z" fill="#a78bfa" opacity="0.8"/>
<path d="M140 200 C 220 182, 330 190, 420 200 C 430 220, 438 232, 440 238 L 170 240 C 150 236, 142 222, 140 200 Z" fill="#34d399" opacity="0.8"/>
<ellipse cx="430" cy="270" rx="55" ry="32" fill="#f472b6" stroke="#831843" stroke-width="3"/>
<rect x="335" y="238" width="30" height="80" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
<text x="195" y="130" font-size="16" font-weight="bold" fill="#1e3a8a">FRONTALE</text>
<text x="168" y="150" font-size="13" fill="#1e3a8a">decidere, movimento,</text>
<text x="180" y="166" font-size="13" fill="#1e3a8a">parlare (Broca)</text>
<text x="300" y="90" font-size="16" font-weight="bold" fill="#78350f">PARIETALE</text>
<text x="300" y="110" font-size="13" fill="#78350f">tatto, posizione</text>
<text x="430" y="140" font-size="14" font-weight="bold" fill="#3b0764">OCCIPI-</text>
<text x="435" y="157" font-size="14" font-weight="bold" fill="#3b0764">TALE</text>
<text x="437" y="175" font-size="13" fill="#3b0764">vista</text>
<text x="230" y="218" font-size="16" font-weight="bold" fill="#064e3b">TEMPORALE: udito, memoria</text>
<text x="430" y="275" font-size="14" font-weight="bold" fill="#831843" text-anchor="middle">Cervelletto</text>
<text x="300" y="300" font-size="14" font-weight="bold" fill="#7c2d12" text-anchor="end">Tronco encefalico</text>
<text x="40" y="60" font-size="15" fill="#334155">davanti ←</text>
</svg>`,
      caption: "Emisfero sinistro visto di lato. Ogni lobo ha funzioni prevalenti, ma per quasi ogni attività lavorano insieme molte aree."
    },
    {
      type: "3d",
      title: "Gli strati che proteggono il cervello",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fcd5b5", label: "Cuoio capelluto" },
          { r: 0.95, color: "#f1f5f9", label: "Ossa del cranio" },
          { r: 0.87, color: "#93c5fd", label: "Meningi e liquor" },
          { r: 0.82, color: "#9ca3af", label: "Corteccia (sostanza grigia)" },
          { r: 0.72, color: "#f8fafc", label: "Sostanza bianca (assoni con mielina)" },
          { r: 0.15, color: "#38bdf8", label: "Ventricoli pieni di liquor" }
        ]
      },
      caption: "Ruota e guarda lo spicchio: la sostanza grigia contiene i corpi dei neuroni, la sostanza bianca è bianca per la mielina degli assoni. Il casco in bici aggiunge uno strato in più!"
    },
    {
      type: "quiz",
      title: "Mini-quiz: neuroni ed encefalo",
      questions: [
        { type: "mc", q: "Quale parte del neurone riceve i segnali?", options: ["L'assone", "I dendriti", "La guaina mielinica"], answer: 1, explain: "I dendriti ricevono, l'assone trasmette." },
        { type: "mc", q: "Quale organo coordina l'equilibrio?", options: ["Il cervelletto", "Il midollo spinale", "Il talamo"], answer: 0, explain: "Il cervelletto coordina movimenti ed equilibrio." },
        { type: "tf", q: "L'emisfero sinistro controlla soprattutto la parte sinistra del corpo.", answer: false, explain: "Le vie nervose si incrociano: l'emisfero sinistro controlla la parte destra." },
        { type: "text", q: "Come si chiama lo spazio tra due neuroni in cui passano i neurotrasmettitori?", answer: ["sinapsi", "la sinapsi", "fessura sinaptica"], explain: "È la sinapsi." }
      ]
    },
    {
      type: "text",
      title: "6. Il midollo spinale e i riflessi",
      html: `<p>Il <b>midollo spinale</b> è un cordone lungo circa <b>45 cm</b> che scende dentro la colonna vertebrale. Fa da "autostrada" tra encefalo e corpo, ma sa anche decidere da solo nei <b>riflessi</b>.</p>
<p>Un <b>riflesso</b> è una risposta <b>automatica, rapidissima e involontaria</b>. Il percorso si chiama <b>arco riflesso</b>:</p>
<ol>
<li>un <b>recettore</b> (nella pelle) sente il calore della pentola;</li>
<li>un <b>neurone sensitivo</b> porta il segnale al midollo spinale;</li>
<li>nel midollo un <b>interneurone</b> lo passa subito a…</li>
<li>…un <b>neurone motorio</b>, che arriva al <b>muscolo</b> del braccio;</li>
<li>il muscolo si contrae: <b>ritiri la mano</b>. Solo <b>dopo</b> il cervello riceve l'informazione e senti il dolore!</li>
</ol>
<p>Il medico controlla il <b>riflesso rotuleo</b> battendo un martelletto sotto il ginocchio: la gamba scatta da sola. Anche sbattere le palpebre, starnutire e tossire sono riflessi.</p>`
    },
    {
      type: "svg",
      title: "L'arco riflesso",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0fdf4"/>
<ellipse cx="480" cy="150" rx="70" ry="80" fill="#e5e7eb" stroke="#475569" stroke-width="3"/>
<path d="M455 120 C 440 150, 440 170, 460 190 L 500 190 C 520 170, 520 150, 505 120 Z" fill="#9ca3af"/>
<text x="480" y="255" font-size="15" text-anchor="middle" fill="#1e293b" font-weight="bold">Midollo spinale</text>
<rect x="40" y="60" width="80" height="50" rx="10" fill="#ef4444"/>
<text x="80" y="92" font-size="15" fill="#fff" text-anchor="middle">🔥 calore</text>
<circle cx="140" cy="85" r="10" fill="#f59e0b"/>
<text x="140" y="45" font-size="14" fill="#92400e" text-anchor="middle">1 recettore</text>
<path d="M150 85 C 260 60, 380 70, 470 135" stroke="#2563eb" stroke-width="6" fill="none"/>
<text x="290" y="58" font-size="14" fill="#1d4ed8" text-anchor="middle">2 neurone sensitivo →</text>
<circle cx="480" cy="155" r="9" fill="#a855f7"/>
<text x="560" y="160" font-size="14" fill="#6b21a8">3 interneurone</text>
<path d="M470 165 C 380 230, 260 240, 160 215" stroke="#dc2626" stroke-width="6" fill="none"/>
<text x="300" y="262" font-size="14" fill="#b91c1c" text-anchor="middle">← 4 neurone motorio</text>
<ellipse cx="120" cy="210" rx="45" ry="25" fill="#fb7185" stroke="#9f1239" stroke-width="3"/>
<text x="120" y="215" font-size="14" fill="#fff" text-anchor="middle">muscolo</text>
<text x="120" y="262" font-size="14" fill="#9f1239" text-anchor="middle">5 ritiri la mano!</text>
</svg>`,
      caption: "Il percorso del riflesso non passa dal cervello: per questo è così veloce."
    },
    {
      type: "widget",
      title: "Volontario o involontario?",
      widget: "classify",
      options: {
        groups: ["🙋 Volontario (lo decidi tu)", "⚡ Involontario / riflesso"],
        items: [
          ["Alzare la mano per parlare", 0],
          ["Il battito del cuore", 1],
          ["Calciare un pallone", 0],
          ["Sbattere le palpebre se arriva un moscerino", 1],
          ["Scrivere una frase", 0],
          ["La pupilla che si stringe con la luce forte", 1],
          ["Lo starnuto", 1],
          ["Masticare un panino", 0],
          ["La digestione nello stomaco", 1]
        ]
      },
      caption: "I movimenti volontari partono dalla corteccia; quelli involontari dal midollo, dal tronco encefalico o dal sistema autonomo."
    },
    {
      type: "text",
      title: "7. Gli organi di senso",
      html: `<p>Gli organi di senso contengono <b>recettori</b> che trasformano uno stimolo (luce, suono, pressione, sostanze chimiche) in impulsi nervosi. Il cervello poi li interpreta: in realtà <b>vediamo e sentiamo con il cervello</b>.</p>
<table>
<tr><th>Senso</th><th>Organo e recettori</th><th>Area del cervello</th></tr>
<tr><td>👁️ Vista</td><td>Occhio: la luce passa da cornea, pupilla e cristallino e forma un'immagine <b>capovolta</b> sulla <b>retina</b>, dove ci sono i <b>coni</b> (circa 6 milioni, vedono i colori) e i <b>bastoncelli</b> (circa 120 milioni, vedono con poca luce). Il <b>nervo ottico</b> porta il segnale al cervello, che "raddrizza" l'immagine.</td><td>Lobo occipitale</td></tr>
<tr><td>👂 Udito ed equilibrio</td><td>Orecchio esterno (padiglione) → medio (timpano e tre ossicini: martello, incudine, <b>staffa</b>, l'osso più piccolo del corpo, circa 3 mm) → interno: la <b>coclea</b> per l'udito e i <b>canali semicircolari</b> per l'equilibrio.</td><td>Lobo temporale; cervelletto</td></tr>
<tr><td>👃 Olfatto</td><td>Recettori nella parte alta del naso, sensibili a migliaia di odori.</td><td>Lobo temporale e sistema limbico (emozioni e ricordi)</td></tr>
<tr><td>👅 Gusto</td><td>Papille gustative sulla lingua: dolce, salato, acido, amaro e <b>umami</b> (il sapore "saporito" del parmigiano e del brodo).</td><td>Corteccia gustativa</td></tr>
<tr><td>✋ Tatto</td><td>Recettori nella <b>pelle</b> per pressione, vibrazione, caldo, freddo e dolore. I polpastrelli e le labbra ne hanno moltissimi.</td><td>Lobo parietale</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Abbina la parte alla funzione",
      widget: "match",
      options: {
        pairs: [
          ["Retina", "Contiene coni e bastoncelli"],
          ["Coclea", "Trasforma i suoni in impulsi"],
          ["Canali semicircolari", "Senso dell'equilibrio"],
          ["Lobo occipitale", "Elabora la vista"],
          ["Tronco encefalico", "Controlla respiro e battito"],
          ["Ipotalamo", "Regola fame, sete e temperatura"]
        ]
      },
      caption: "Tocca un elemento a sinistra e poi quello giusto a destra."
    },
    {
      type: "example",
      title: "Esempio pratico: misura il tuo tempo di reazione con un righello",
      html: `<p>Ti serve un compagno e un righello da 30 cm.</p>
<ol>
<li>Il compagno tiene il righello in verticale, con lo 0 in basso, tra il tuo pollice e il tuo indice aperti (senza toccarlo).</li>
<li>Senza avvisare, lo lascia cadere: tu lo afferri il più in fretta possibile.</li>
<li>Leggi a quanti centimetri l'hai preso.</li>
</ol>
<p>Il righello cade come ogni oggetto, quindi dalla distanza si ricava il tempo: <b>t = √(2 × d : 9,8)</b> (con d in metri).<br>
Se l'hai preso a <b>20 cm</b>: t = √(2 × 0,20 : 9,8) ≈ <b>0,2 secondi</b>. A 15 cm ≈ 0,17 s; a 10 cm ≈ 0,14 s.</p>
<p>In quel tempo l'occhio vede, il segnale va al cervello, il cervello decide e invia l'ordine ai muscoli della mano. Provate a ripetere dopo aver letto ad alta voce o con una distrazione: il tempo peggiora. È il motivo per cui <b>non si usa il telefono mentre si guida</b>: a 50 km/h, in 1 secondo di distrazione si percorrono circa 14 metri.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: trova il tuo punto cieco",
      html: `<p>Su un foglio disegna una <b>X</b> a sinistra e un <b>pallino</b> 8 cm più a destra. Chiudi l'occhio sinistro e fissa la X con l'occhio destro. Avvicina e allontana lentamente il foglio: a circa 25–30 cm il pallino <b>sparisce</b>!</p>
<p>In quel punto l'immagine cade dove il <b>nervo ottico</b> esce dalla retina: lì non ci sono né coni né bastoncelli. Normalmente non ce ne accorgiamo perché il cervello "riempie il buco" con ciò che c'è intorno e perché i due occhi si coprono a vicenda.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Un Nobel italiano per i neuroni",
      html: `<p>Nel 1873 il medico italiano <b>Camillo Golgi</b>, a Pavia, inventò una colorazione con sali d'argento (la "reazione nera") che per la prima volta mostrava i neuroni interi al microscopio. Lo spagnolo <b>Santiago Ramón y Cajal</b> la usò per dimostrare che il sistema nervoso è fatto di cellule separate. Nel <b>1906</b> vinsero insieme il premio Nobel, anche se non erano d'accordo su come funzionassero i neuroni! Nel 1986 un'altra italiana, <b>Rita Levi-Montalcini</b>, vinse il Nobel per la scoperta del fattore di crescita nervoso (NGF).</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il cervello non si spegne mai",
      html: `<p>Durante il <b>sonno</b> il cervello lavora moltissimo: riordina i ricordi della giornata, rafforza ciò che hai imparato e fa \"pulizia\" delle sostanze di scarto. Per questo dormire 9–10 ore a notte, alla tua età, aiuta davvero a studiare meglio. E il cervello non sente dolore: non ha recettori del dolore, tanto che alcune operazioni si fanno con il paziente sveglio!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il sistema nervoso",
      intro: "Se i nomi delle parti non ti restano in testa, prova a vedere il sistema nervoso in un altro modo.",
      tabs: [
        {
          label: "🏢 L'azienda dei messaggi",
          html: `<p>Immagina il corpo come una grande <b>azienda</b>:</p>
<ul>
<li>i <b>recettori</b> sono i sensori e le telecamere all'ingresso;</li>
<li>i <b>nervi sensitivi</b> sono i fili che portano le notizie all'ufficio centrale;</li>
<li>il <b>cervello</b> è la direzione, dove si decide; la <b>corteccia frontale</b> è il direttore, il <b>cervelletto</b> il coordinatore dei lavori, il <b>tronco encefalico</b> il custode che tiene acceso il riscaldamento anche di notte;</li>
<li>il <b>midollo spinale</b> è la centrale di smistamento, che in caso di emergenza (riflesso) agisce senza chiedere al direttore;</li>
<li>i <b>nervi motori</b> portano gli ordini agli operai: i <b>muscoli</b>.</li>
</ul>`
        },
        {
          label: "🔌 Come un impianto elettrico",
          html: `<p>Un neurone assomiglia a un <b>cavo elettrico</b>: l'assone è il filo di rame, la <b>mielina</b> è la guaina isolante di plastica. Ma c'è una differenza importante: nel neurone non corrono elettroni come nel rame, ma <b>ioni</b> (sodio e potassio) che entrano ed escono dalla membrana, uno \"scatto\" dopo l'altro, come una fila di tessere del domino che cadono. Nella fibra con mielina il segnale \"salta\" da un'interruzione della guaina all'altra: per questo è più veloce.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="35" font-size="16" fill="#0f172a" font-weight="bold">Cavo elettrico</text>
<rect x="20" y="50" width="560" height="34" rx="17" fill="#3b82f6"/>
<rect x="20" y="61" width="560" height="12" fill="#d97706"/>
<text x="300" y="104" font-size="14" fill="#1e3a8a" text-anchor="middle">guaina di plastica + rame: corrono gli elettroni</text>
<text x="20" y="140" font-size="16" fill="#0f172a" font-weight="bold">Assone con mielina</text>
<line x1="20" y1="172" x2="580" y2="172" stroke="#7c3aed" stroke-width="10"/>
<rect x="40" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="170" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="300" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<rect x="430" y="156" width="110" height="32" rx="16" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<path d="M160 150 Q 225 115 290 150 Q 355 115 420 150 Q 485 115 550 150" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="300" y="212" font-size="14" fill="#7f1d1d" text-anchor="middle">il segnale \"salta\" tra i tratti scoperti: più veloce</text>
</svg>`
        },
        {
          label: "👁️ L'occhio in 3D",
          html: `<p>L'occhio è una sfera di circa <b>2,4 cm</b>. Ruota il modello: dall'esterno trovi la <b>sclera</b> (il \"bianco\" dell'occhio), la <b>coroide</b> ricca di vasi sanguigni, la <b>retina</b> con i recettori e, all'interno, l'<b>umor vitreo</b>, una gelatina trasparente. Davanti, cornea e cristallino funzionano come le lenti di una macchina fotografica.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#f8fafc", label: "Sclera" },
              { r: 0.94, color: "#b91c1c", label: "Coroide" },
              { r: 0.89, color: "#f59e0b", label: "Retina (coni e bastoncelli)" },
              { r: 0.85, color: "#bae6fd", label: "Umor vitreo" }
            ]
          }
        },
        {
          label: "🃏 Carte di ripasso",
          html: `<p>Gira le carte: sul davanti la parte, sul retro che cosa fa. Ripassare con le carte sfrutta proprio la plasticità del cervello: ogni volta che ricordi, la sinapsi si rafforza.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🧠 Corteccia frontale", back: "Decisioni, movimenti volontari, linguaggio parlato" },
              { front: "⚖️ Cervelletto", back: "Equilibrio e coordinazione dei movimenti" },
              { front: "❤️ Tronco encefalico", back: "Respiro, battito, deglutizione" },
              { front: "🦴 Midollo spinale", back: "Collega encefalo e corpo; gestisce i riflessi" },
              { front: "🏃 Simpatico", back: "Combatti o fuggi: accelera il cuore" },
              { front: "😌 Parasimpatico", back: "Riposa e digerisci: rallenta il cuore" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del sistema nervoso: tocca i nodi e scopri il perché",
      nodes: [
        { id: "stimolo", label: "Stimoli e recettori", x: 12, y: 10, color: "#f59e0b", html: "Luce, suoni, calore, pressione, sostanze chimiche percepite dai recettori.", why: "I recettori sono cellule specializzate che trasformano un tipo di energia in un segnale elettrico. Ogni recettore risponde a un solo tipo di stimolo: per questo un colpo sull'occhio fa \"vedere le stelle\"." },
        { id: "neurone", label: "Neurone", x: 50, y: 10, color: "#a855f7", html: "La cellula che trasmette i segnali nervosi.", why: "La <b>teoria del neurone</b> di Ramón y Cajal (fine Ottocento), resa possibile dalla colorazione di <b>Golgi</b> (1873), dimostrò che il sistema nervoso è fatto di cellule distinte. Nobel 1906 a entrambi." },
        { id: "impulso", label: "Impulso elettrico", x: 85, y: 10, color: "#ef4444", html: "Un'onda elettrica che corre lungo l'assone.", why: "<b>Luigi Galvani</b> nel 1791 vide le zampe di rana contrarsi toccate da metalli e parlò di \"elettricità animale\". Nel 1952 Hodgkin e Huxley spiegarono il ruolo degli ioni sodio e potassio (Nobel 1963)." },
        { id: "sinapsi", label: "Sinapsi", x: 85, y: 40, color: "#db2777", html: "Il punto di contatto chimico tra due neuroni.", why: "Il nome fu proposto da Charles Sherrington nel 1897. Nel 1921 Otto Loewi dimostrò con un esperimento sui cuori di rana che i neuroni comunicano con sostanze chimiche (i neurotrasmettitori)." },
        { id: "snc", label: "Sistema nervoso centrale", x: 50, y: 45, color: "#2563eb", html: "Encefalo e midollo spinale: elaborano e decidono.", why: "Si è evoluto concentrando i neuroni in un \"centro di comando\" protetto dalle ossa: animali semplici come le meduse hanno solo una rete diffusa di neuroni, i vertebrati un encefalo sempre più complesso." },
        { id: "snp", label: "Sistema nervoso periferico", x: 15, y: 45, color: "#0ea5e9", html: "12 paia di nervi cranici e 31 di nervi spinali.", why: "I nervi sono fasci di assoni: devono raggiungere ogni muscolo e ogni centimetro di pelle, per questo si ramificano in tutto il corpo." },
        { id: "riflessi", label: "Riflessi", x: 15, y: 80, color: "#14b8a6", html: "Risposte automatiche gestite dal midollo spinale.", why: "Sono un vantaggio per la sopravvivenza: saltando il cervello si guadagnano preziosi millisecondi per salvarsi da un pericolo." },
        { id: "corteccia", label: "Corteccia e lobi", x: 50, y: 80, color: "#16a34a", html: "Pensiero, linguaggio, memoria, sensi.", why: "Nel 1861 <b>Paul Broca</b> studiò un paziente che capiva ma non riusciva a parlare e trovò una lesione nel lobo frontale sinistro: fu la prima prova che le funzioni hanno un \"posto\" nel cervello." },
        { id: "autonomo", label: "Sistema autonomo", x: 85, y: 80, color: "#64748b", html: "Simpatico e parasimpatico regolano gli organi interni.", why: "Le funzioni vitali (battito, digestione) devono funzionare sempre, anche mentre dormiamo o pensiamo ad altro: per questo sono affidate a un sistema che non dipende dalla volontà." }
      ],
      edges: [
        ["stimolo", "neurone", "attivano il"],
        ["neurone", "impulso", "produce l'"],
        ["impulso", "sinapsi", "arriva alla"],
        ["neurone", "snc", "forma il"],
        ["neurone", "snp", "forma il"],
        ["snp", "snc", "porta informazioni al"],
        ["snp", "riflessi", "con il midollo crea i"],
        ["snc", "corteccia", "comprende la"],
        ["snc", "autonomo", "comanda il"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: riflessi e sensi",
      questions: [
        { type: "order", q: "Metti in ordine l'arco riflesso.", items: ["Recettore", "Neurone sensitivo", "Midollo spinale (interneurone)", "Neurone motorio", "Muscolo"], explain: "Il segnale va dal recettore al midollo e torna al muscolo." },
        { type: "mc", q: "Quali cellule della retina vedono i colori?", options: ["I bastoncelli", "I coni", "Le cellule gliali"], answer: 1, explain: "I coni vedono i colori; i bastoncelli funzionano con poca luce." },
        { type: "tf", q: "Il parasimpatico accelera il battito del cuore in caso di pericolo.", answer: false, explain: "Lo accelera il simpatico; il parasimpatico lo rallenta." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il <b>neurone</b> riceve con i dendriti e trasmette con l'assone; comunica con le <b>sinapsi</b> tramite i neurotrasmettitori.</li>
<li><b>SNC</b> = encefalo + midollo spinale; <b>SNP</b> = nervi (12 paia cranici, 31 spinali).</li>
<li>Encefalo: <b>cervello</b> (4 lobi, 2 emisferi), <b>cervelletto</b> (equilibrio), <b>tronco encefalico</b> (funzioni vitali).</li>
<li><b>Riflesso</b>: risposta automatica gestita dal midollo spinale.</li>
<li>Sistema autonomo: <b>simpatico</b> (attiva) e <b>parasimpatico</b> (calma).</li>
<li>Proteggi il tuo cervello: sonno, casco, niente alcol e droghe.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Neurone", d: "Cellula nervosa che riceve e trasmette impulsi." },
    { t: "Assone", d: "Lungo prolungamento del neurone che trasmette l'impulso." },
    { t: "Dendriti", d: "Brevi ramificazioni del neurone che ricevono i segnali." },
    { t: "Mielina", d: "Rivestimento isolante che rende più veloce l'impulso." },
    { t: "Sinapsi", d: "Zona di comunicazione tra due neuroni o tra neurone e muscolo." },
    { t: "Neurotrasmettitore", d: "Sostanza chimica che trasmette il segnale nella sinapsi." },
    { t: "Encefalo", d: "Parte del SNC nel cranio: cervello, cervelletto, tronco encefalico." },
    { t: "Riflesso", d: "Risposta automatica e involontaria a uno stimolo." },
    { t: "Recettore", d: "Cellula o struttura che capta uno stimolo." },
    { t: "Meningi", d: "Tre membrane che avvolgono encefalo e midollo spinale." },
    { t: "Retina", d: "Strato interno dell'occhio con i fotorecettori (coni e bastoncelli)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Il sistema nervoso centrale è formato da…", options: ["nervi cranici e spinali", "encefalo e midollo spinale", "cervello e cuore"], answer: 1, explain: "SNC = encefalo + midollo spinale." },
      { type: "mc", q: "A che cosa serve la guaina mielinica?", options: ["A nutrire il neurone", "A rendere più veloce l'impulso", "A produrre ormoni"], answer: 1, explain: "Isola l'assone e fa \"saltare\" il segnale." },
      { type: "text", q: "Come si chiamano le sostanze chimiche liberate nella sinapsi?", answer: ["neurotrasmettitori", "i neurotrasmettitori", "neurotrasmettitore"], explain: "I neurotrasmettitori, come dopamina e serotonina." },
      { type: "num", q: "Quante paia di nervi spinali ha il corpo umano?", answer: 31, explain: "31 paia, che escono dal midollo spinale tra le vertebre." },
      { type: "mc", q: "Quale lobo elabora le immagini viste dagli occhi?", options: ["Frontale", "Temporale", "Occipitale", "Parietale"], answer: 2, explain: "Il lobo occipitale, nella parte posteriore." },
      { type: "tf", q: "Nel riflesso il segnale passa prima dal cervello e poi dal midollo.", answer: false, explain: "Il riflesso è gestito dal midollo; il cervello viene informato dopo." },
      { type: "mc", q: "Quale parte dell'encefalo controlla respiro e battito cardiaco?", options: ["Il tronco encefalico", "Il corpo calloso", "Il lobo parietale"], answer: 0, explain: "Il tronco encefalico controlla le funzioni vitali." },
      { type: "mc", q: "Dove si trova la coclea?", options: ["Nell'occhio", "Nell'orecchio interno", "Nel naso"], answer: 1, explain: "La coclea, a forma di chiocciola, è nell'orecchio interno." },
      { type: "tf", q: "Il sistema simpatico prepara il corpo all'azione (\"combatti o fuggi\").", answer: true, explain: "Accelera cuore e respiro, dilata le pupille." },
      { type: "order", q: "Metti in ordine il percorso del segnale in un neurone.", items: ["Dendriti", "Corpo cellulare", "Assone", "Terminali sinaptici"], explain: "Si entra dai dendriti, si esce dai terminali." },
      { type: "text", q: "Quale scienziato italiano inventò la \"reazione nera\" per colorare i neuroni?", answer: ["golgi", "camillo golgi"], explain: "Camillo Golgi, Nobel 1906." },
      { type: "num", q: "Un righello viene afferrato in circa 0,2 s. Se una bici va a 5 m/s, quanti metri percorre in quel tempo?", answer: 1, tol: 0.01, unit: "m", explain: "5 m/s × 0,2 s = 1 m." }
    ]
  }
});

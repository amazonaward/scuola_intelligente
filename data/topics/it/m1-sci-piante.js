TOPIC('it', {
  id: "m1-sci-piante",
  title: "Le piante",
  intro: "Le piante non si muovono e non mangiano, eppure crescono, fabbricano zuccheri dalla luce e producono l'<b>ossigeno</b> che respiriamo. Scopriamo come sono fatte (<b>radice, fusto, foglie</b>), come funziona la <b>fotosintesi</b>, come si <b>riproducono</b> e come si classificano.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Le piante: carta d'identità",
      html: `<p>Le piante sono organismi del regno <b>Piante</b> (o Vegetali):</p>
<ul>
<li><b>pluricellulari</b>, con cellule <b>eucariote</b>;</li>
<li><b>autotrofe</b>: producono da sole il loro nutrimento con la <b>fotosintesi</b>;</li>
<li>le loro cellule hanno una <b>parete di cellulosa</b> (rigida), un grande <b>vacuolo</b> e i <b>cloroplasti</b>, che contengono il pigmento verde <b>clorofilla</b>;</li>
<li>vivono "ferme", ancorate al terreno, ma reagiscono agli stimoli: il fusto si piega verso la luce (<b>fototropismo</b>) e la radice cresce verso il basso (<b>geotropismo</b>).</li>
</ul>
<p>Si stima che esistano circa <b>380 000</b> specie di piante. Sono la base di quasi tutte le <b>catene alimentari</b> sulla terraferma: sono i <b>produttori</b>.</p>`
    },
    {
      type: "text",
      title: "2. Radice, fusto e foglie",
      html: `<p>Le piante più evolute (le <b>cormofite</b>) hanno un corpo diviso in tre organi:</p>
<p><b>🟫 La radice</b></p>
<ul>
<li><b>ancora</b> la pianta al terreno;</li>
<li><b>assorbe</b> acqua e sali minerali attraverso i <b>peli radicali</b>, sottilissimi;</li>
<li>a volte fa da <b>riserva</b>: la carota, la barbabietola e il ravanello sono radici ingrossate.</li>
</ul>
<p>Può essere <b>a fittone</b> (una radice principale grossa, come la carota) o <b>fascicolata</b> (tante radici sottili uguali, come il grano).</p>
<p><b>🟩 Il fusto</b></p>
<ul>
<li><b>sostiene</b> foglie, fiori e frutti e li porta verso la luce;</li>
<li><b>trasporta</b> le sostanze con due sistemi di "tubi": lo <b>xilema</b> porta in su la <b>linfa grezza</b> (acqua e sali), il <b>floema</b> distribuisce in tutta la pianta la <b>linfa elaborata</b> (acqua e zuccheri).</li>
</ul>
<p>Può essere <b>erbaceo</b> (verde e tenero) o <b>legnoso</b> (il tronco degli alberi). Ogni anno il tronco forma un nuovo <b>anello</b> di legno: contandoli si scopre l'età dell'albero.</p>
<p><b>🍃 La foglia</b></p>
<ul>
<li>è il "laboratorio" della <b>fotosintesi</b>;</li>
<li>ha una parte larga e piatta, la <b>lamina</b>, attaccata al fusto dal <b>picciolo</b>; le <b>nervature</b> sono i vasi che portano la linfa;</li>
<li>sulla pagina inferiore ha migliaia di forellini, gli <b>stomi</b>, che si aprono e si chiudono per far entrare anidride carbonica e uscire ossigeno e vapore acqueo.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Le parti della pianta",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#e0f2fe"/>
<rect y="230" width="600" height="110" fill="#a16207"/>
<circle cx="520" cy="50" r="30" fill="#facc15"/>
<path d="M300 230 L300 90" stroke="#15803d" stroke-width="10"/>
<path d="M300 170 Q240 150 210 120 Q260 120 300 165" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
<path d="M300 140 Q360 120 390 90 Q340 90 300 135" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
<circle cx="300" cy="75" r="16" fill="#facc15"/>
<g fill="#f472b6"><circle cx="300" cy="50" r="13"/><circle cx="325" cy="75" r="13"/><circle cx="300" cy="100" r="13"/><circle cx="275" cy="75" r="13"/></g>
<circle cx="300" cy="75" r="11" fill="#facc15"/>
<path d="M300 230 L300 300 M300 250 L260 290 M300 250 L340 295 M300 270 L270 320 M300 270 L330 325" stroke="#fef3c7" stroke-width="5"/>
<path d="M260 290 L250 300 M340 295 L352 302" stroke="#fef3c7" stroke-width="2"/>
<rect x="420" y="250" width="40" height="40" rx="8" fill="#93c5fd"/>
<text x="440" y="310" font-size="15" text-anchor="middle" fill="#ffffff">acqua</text>
</svg>`,
        spots: [
          { x: 300, y: 75, label: "Fiore" },
          { x: 230, y: 130, label: "Foglia" },
          { x: 300, y: 200, label: "Fusto" },
          { x: 300, y: 285, label: "Radice" },
          { x: 352, y: 302, label: "Peli radicali" },
          { x: 520, y: 50, label: "Luce del Sole" }
        ]
      },
      caption: "Clicca su ogni punto e scegli il nome giusto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: gli organi della pianta",
      questions: [
        { type: "mc", q: "Quale organo assorbe acqua e sali minerali?", options: ["La foglia", "La radice", "Il fiore", "Il frutto"], answer: 1, explain: "La radice assorbe acqua e sali con i peli radicali." },
        { type: "mc", q: "Come si chiamano i forellini della foglia da cui entrano i gas?", options: ["Nervature", "Stomi", "Piccioli", "Vacuoli"], answer: 1, explain: "Gli stomi regolano lo scambio di gas e la traspirazione." },
        { type: "tf", q: "La carota è una radice.", answer: true, explain: "È una radice a fittone ingrossata, piena di sostanze di riserva." }
      ]
    },
    {
      type: "text",
      title: "3. La fotosintesi clorofilliana",
      html: `<p>Nei <b>cloroplasti</b> delle foglie, grazie alla <b>clorofilla</b> che cattura l'energia della <b>luce</b>, la pianta trasforma <b>acqua</b> e <b>anidride carbonica</b> in <b>glucosio</b> (uno zucchero) e libera <b>ossigeno</b>:</p>
<p style="text-align:center"><b>anidride carbonica + acqua + luce → glucosio + ossigeno</b><br>6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂</p>
<ul>
<li>l'<b>acqua</b> arriva dalle radici attraverso lo xilema;</li>
<li>l'<b>anidride carbonica</b> entra dall'aria attraverso gli stomi;</li>
<li>il <b>glucosio</b> viene usato per produrre energia, per costruire la <b>cellulosa</b> della pianta o viene immagazzinato come <b>amido</b> (nelle patate, nei chicchi di grano, nei semi);</li>
<li>l'<b>ossigeno</b> esce dagli stomi: è l'ossigeno che respiriamo!</li>
</ul>
<p><b>Attenzione</b>: anche le piante <b>respirano</b>, giorno e notte, come noi (consumano ossigeno e liberano anidride carbonica). Ma di giorno la fotosintesi produce molto più ossigeno di quello che la pianta consuma.</p>
<p><b>Traspirazione</b>: dalle foglie evapora acqua. Questa evaporazione "tira" verso l'alto l'acqua dalle radici, come una cannuccia: un grande albero può far evaporare centinaia di litri al giorno.</p>`
    },
    {
      type: "svg",
      title: "La foglia: una fabbrica a energia solare",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<circle cx="70" cy="60" r="40" fill="#facc15"/>
<text x="70" y="66" font-size="17" text-anchor="middle" font-weight="bold">luce</text>
<line x1="110" y1="85" x2="210" y2="135" stroke="#f59e0b" stroke-width="5"/>
<path d="M200 160 Q300 40 470 160 Q300 280 200 160 Z" fill="#22c55e" stroke="#14532d" stroke-width="4"/>
<path d="M200 160 L470 160 M280 160 L320 120 M280 160 L320 200 M360 160 L400 125 M360 160 L400 195" stroke="#14532d" stroke-width="3"/>
<text x="335" y="150" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">clorofilla</text>
<text x="70" y="180" font-size="17" text-anchor="middle" fill="#475569" font-weight="bold">CO₂</text>
<text x="70" y="200" font-size="14" text-anchor="middle" fill="#475569">dall'aria</text>
<line x1="100" y1="185" x2="200" y2="170" stroke="#475569" stroke-width="4"/>
<text x="210" y="300" font-size="17" text-anchor="middle" fill="#2563eb" font-weight="bold">H₂O dalle radici</text>
<line x1="210" y1="280" x2="250" y2="200" stroke="#2563eb" stroke-width="4"/>
<text x="540" y="100" font-size="18" text-anchor="middle" fill="#0ea5e9" font-weight="bold">O₂</text>
<text x="540" y="120" font-size="14" text-anchor="middle" fill="#0ea5e9">nell'aria</text>
<line x1="460" y1="140" x2="520" y2="110" stroke="#0ea5e9" stroke-width="4"/>
<text x="530" y="230" font-size="17" text-anchor="middle" fill="#b45309" font-weight="bold">glucosio</text>
<text x="530" y="250" font-size="14" text-anchor="middle" fill="#b45309">nella linfa</text>
<line x1="440" y1="185" x2="500" y2="215" stroke="#b45309" stroke-width="4"/>
</svg>`,
      caption: "Entrano luce, anidride carbonica e acqua; escono ossigeno e zuccheri."
    },
    {
      type: "example",
      title: "Esempio pratico: il sedano colorato",
      html: `<ol>
<li>Metti un gambo di <b>sedano</b> con le foglie (o un garofano bianco) in un bicchiere d'acqua con qualche goccia di <b>colorante alimentare</b> rosso o blu.</li>
<li>Aspetta 24 ore.</li>
<li>Le foglie diventano colorate! Taglia il gambo di traverso: vedrai dei puntini colorati. Sono i <b>vasi dello xilema</b>, che hanno trasportato l'acqua verso l'alto.</li>
</ol>
<p>Prova anche con due bicchieri: uno al sole e uno all'ombra. Dove sale più in fretta? Al sole la <b>traspirazione</b> è più intensa e "tira" di più l'acqua.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: far germinare un fagiolo",
      html: `<ol>
<li>Metti del cotone bagnato in un barattolo di vetro e appoggia un <b>fagiolo secco</b> contro il vetro.</li>
<li>Tieni il cotone umido. Dopo 2-3 giorni il seme si gonfia e la <b>radichetta</b> esce e va verso il basso.</li>
<li>Poi spunta il <b>fusticino</b> che va verso l'alto, con le prime foglie.</li>
<li>Le due metà del fagiolo, i <b>cotiledoni</b>, si svuotano: contenevano la riserva di cibo per la piantina.</li>
</ol>
<p>Prova a capovolgere il barattolo dopo qualche giorno: la radice <b>cambia direzione</b> e torna a crescere verso il basso (geotropismo)!</p>`
    },
    {
      type: "text",
      title: "4. La classificazione delle piante",
      html: `<table>
<tr><th>Gruppo</th><th>Vasi</th><th>Semi</th><th>Esempi</th></tr>
<tr><td><b>Briofite</b></td><td>no</td><td>no (spore)</td><td>muschi, epatiche</td></tr>
<tr><td><b>Pteridofite</b></td><td>sì</td><td>no (spore)</td><td>felci, equiseti</td></tr>
<tr><td><b>Gimnosperme</b> ("seme nudo")</td><td>sì</td><td>sì, non protetti da un frutto, spesso in coni (pigne)</td><td>pino, abete, larice, cipresso, ginkgo</td></tr>
<tr><td><b>Angiosperme</b> ("seme in un contenitore")</td><td>sì</td><td>sì, dentro un <b>frutto</b>; hanno i <b>fiori</b></td><td>melo, grano, rosa, quercia, girasole</td></tr>
</table>
<p>Le <b>briofite</b> non hanno veri vasi: per questo restano piccole e vivono in luoghi umidi. Le angiosperme sono il gruppo più grande (circa il 90% delle piante) e si dividono in:</p>
<ul>
<li><b>Monocotiledoni</b>: il seme ha 1 cotiledone, foglie con nervature parallele, radici fascicolate (grano, mais, riso, tulipano, palma);</li>
<li><b>Dicotiledoni</b>: il seme ha 2 cotiledoni, foglie con nervature ramificate (fagiolo, quercia, rosa, girasole).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Classifica le piante",
      widget: "classify",
      options: {
        groups: ["Briofite", "Pteridofite", "Gimnosperme", "Angiosperme"],
        items: [["🌱 muschio", 0], ["🌿 felce", 1], ["🎋 equiseto (coda cavallina)", 1], ["🌲 pino", 2], ["🌲 abete", 2], ["🍂 ginkgo", 2], ["🌹 rosa", 3], ["🌾 grano", 3], ["🍎 melo", 3], ["🌻 girasole", 3]]
      },
      caption: "Il ginkgo perde le foglie in autunno ma è una gimnosperma: è un vero \"fossile vivente\"."
    },
    {
      type: "text",
      title: "5. Il fiore, il seme e il frutto",
      html: `<p>Il <b>fiore</b> è l'organo della <b>riproduzione sessuata</b> delle angiosperme. Dall'esterno verso l'interno:</p>
<ul>
<li><b>calice</b>, formato dai <b>sepali</b> verdi che proteggono il bocciolo;</li>
<li><b>corolla</b>, formata dai <b>petali</b> colorati che attirano gli insetti;</li>
<li><b>stami</b> (organi maschili): nelle <b>antere</b> si forma il <b>polline</b>;</li>
<li><b>pistillo</b> (organo femminile): lo <b>stimma</b> in alto, lo <b>stilo</b> e l'<b>ovario</b> in basso, che contiene gli <b>ovuli</b>.</li>
</ul>
<ol>
<li><b>Impollinazione</b>: il polline passa dalle antere allo stimma, portato dal <b>vento</b> (piante anemofile, come il grano) o dagli <b>animali</b>, soprattutto insetti come le api (piante entomofile).</li>
<li><b>Fecondazione</b>: dal granulo di polline cresce un tubetto che scende fino all'ovulo; la cellula maschile si unisce a quella femminile.</li>
<li>L'ovulo fecondato diventa il <b>seme</b>, che contiene l'<b>embrione</b> e una riserva di cibo.</li>
<li>L'ovario si ingrossa e diventa il <b>frutto</b>, che protegge i semi e aiuta a disperderli (mangiato dagli animali, trasportato dal vento come il "paracadute" del tarassaco, o agganciato al pelo come la bardana).</li>
<li><b>Germinazione</b>: con acqua e calore il seme si risveglia e nasce una nuova pianta.</li>
</ol>
<p><b>Riproduzione vegetativa</b> (asessuata): molte piante si riproducono anche senza fiori, da un pezzo di sé: le <b>talee</b> (un rametto in acqua mette radici), gli <b>stoloni</b> della fragola, i <b>tuberi</b> della patata, i <b>bulbi</b> della cipolla e del tulipano. Le nuove piante sono copie identiche della madre.</p>`
    },
    {
      type: "3d",
      title: "Dentro un frutto: la pesca in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fb923c", label: "Buccia (esocarpo)" },
          { r: 0.95, color: "#fde68a", label: "Polpa (mesocarpo)" },
          { r: 0.42, color: "#92400e", label: "Nocciolo (endocarpo)" },
          { r: 0.24, color: "#fef3c7", label: "Seme (mandorla)" }
        ]
      },
      caption: "Il frutto è l'ovario del fiore cresciuto: buccia, polpa e nocciolo sono le tre parti della sua parete. Dentro il nocciolo c'è il seme, da cui può nascere un nuovo pesco."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… l'albero più alto del mondo supera i 116 metri?",
      html: `<p>Si chiama <b>Hyperion</b> ed è una <b>sequoia sempreverde</b> (<i>Sequoia sempervirens</i>) della California: è alta circa <b>116 metri</b>, più della Statua della Libertà con il piedistallo (93 m). La sua posizione esatta è segreta, per proteggerla dai turisti.</p>
<p>Il fiore singolo più grande invece è quello della <b>Rafflesia arnoldii</b>, delle foreste di Sumatra e Borneo: può superare il <b>metro</b> di diametro e pesare 10 kg. E puzza di carne marcia, per attirare le mosche che la impollinano!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la scoperta della fotosintesi è durata 150 anni?",
      html: `<ul>
<li>Verso il <b>1640</b> il belga <b>Jan van Helmont</b> piantò un salice di 2,3 kg in un vaso con 90 kg di terra. Dopo 5 anni l'albero pesava circa 77 kg, ma la terra era diminuita di soli 57 grammi! Concluse (sbagliando in parte) che la pianta era cresciuta solo grazie all'acqua.</li>
<li>Nel <b>1771</b> l'inglese <b>Joseph Priestley</b> scoprì che una piantina di menta sotto una campana di vetro \"riparava\" l'aria consumata da una candela, permettendo a un topo di sopravvivere.</li>
<li>Nel <b>1779</b> l'olandese <b>Jan Ingenhousz</b> dimostrò che serve la <b>luce</b> e che solo le parti verdi producono ossigeno.</li>
</ul>
<p>Oggi sappiamo che la massa del salice veniva soprattutto dall'<b>anidride carbonica dell'aria</b>: gli alberi sono fatti, in gran parte, d'aria!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le piante",
      intro: "Se lo schema classico non ti basta, prova con un'analogia, con la storia o con un gioco di abbinamenti.",
      tabs: [
        {
          label: "🏭 La pianta come fabbrica",
          html: `<table>
<tr><th>Parte</th><th>Nella fabbrica è…</th></tr>
<tr><td>Radice</td><td>l'acquedotto e il magazzino</td></tr>
<tr><td>Fusto (xilema e floema)</td><td>i nastri trasportatori e i tubi</td></tr>
<tr><td>Foglia</td><td>il reparto produzione</td></tr>
<tr><td>Clorofilla</td><td>i pannelli solari</td></tr>
<tr><td>Stomi</td><td>le finestre per far entrare l'aria e uscire i \"gas di scarico\" (ossigeno)</td></tr>
<tr><td>Glucosio e amido</td><td>il prodotto finito e le scorte</td></tr>
<tr><td>Fiore e frutto</td><td>il reparto che costruisce le nuove fabbriche</td></tr>
</table>`
        },
        {
          label: "🍳 La ricetta della fotosintesi",
          html: `<p>Pensa alla fotosintesi come a una <b>ricetta</b>:</p>
<ul>
<li><b>Ingredienti</b>: 6 \"cucchiai\" di anidride carbonica + 6 di acqua.</li>
<li><b>Fornello</b>: la luce del Sole.</li>
<li><b>Cuoco</b>: la clorofilla nei cloroplasti.</li>
<li><b>Risultato</b>: 1 torta di glucosio + 6 \"palloncini\" di ossigeno che volano via.</li>
</ul>
<p>Conta gli atomi: prima ci sono 6 C, 12 H e 18 O; dopo, nel glucosio C₆H₁₂O₆ e nei 6 O₂, ancora 6 C, 12 H e 6 + 12 = 18 O. In cucina come in chimica, <b>nulla si crea e nulla si distrugge</b> (Lavoisier)!</p>`
        },
        {
          label: "🧪 La molecola di CO₂ in 3D",
          html: `<p>L'<b>anidride carbonica</b> (CO₂) è l'ingrediente \"invisibile\" della fotosintesi: un atomo di carbonio (nero) legato a due di ossigeno (rossi), in linea retta. Le piante \"smontano\" queste molecole e usano il carbonio per costruire zuccheri, legno e foglie.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.45, color: "#334155", label: "C" },
              { x: 1.16, y: 0, z: 0, r: 0.45, color: "#ef4444", label: "O" },
              { x: -1.16, y: 0, z: 0, r: 0.45, color: "#ef4444", label: "O" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        },
        {
          label: "🌸 Abbina le parti del fiore",
          html: `<p>Un gioco per fissare le parti del fiore e che cosa diventano.</p>`,
          widget: "match",
          options: { pairs: [["Petali", "attirano gli insetti"], ["Antere", "producono il polline"], ["Stimma", "riceve il polline"], ["Ovario", "diventa il frutto"], ["Ovulo", "diventa il seme"], ["Sepali", "proteggono il bocciolo"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle piante: tocca e scopri il perché",
      nodes: [
        { id: "pianta", label: "Pianta", x: 50, y: 5, color: "#16a34a", html: "Organismo pluricellulare, eucariote, autotrofo.", why: "Le prime piante terrestri comparvero circa 470 milioni di anni fa, discendenti di alghe verdi. Uscire dall'acqua richiese radici, vasi e una pelle (cuticola) che non lasciasse seccare la pianta." },
        { id: "radice", label: "Radice", x: 15, y: 28, color: "#a16207", html: "Ancora la pianta e assorbe acqua e sali.", why: "Sulla terraferma l'acqua è nel suolo: serviva un organo per raggiungerla. I peli radicali aumentano enormemente la superficie che assorbe." },
        { id: "fusto", label: "Fusto e vasi", x: 38, y: 28, color: "#65a30d", html: "Sostiene e trasporta: xilema (linfa grezza) e floema (linfa elaborata).", why: "Per competere per la luce le piante dovevano crescere in alto: servivano un sostegno rigido (il legno, fatto di cellulosa e lignina) e tubi per portare l'acqua fino in cima." },
        { id: "foglia", label: "Foglia", x: 62, y: 28, color: "#22c55e", html: "Sede della fotosintesi; ha gli stomi.", why: "È larga e sottile per catturare più luce possibile e far entrare l'anidride carbonica; gli stomi si chiudono quando fa troppo caldo per non perdere acqua." },
        { id: "foto", label: "Fotosintesi", x: 62, y: 54, color: "#facc15", html: "CO₂ + H₂O + luce → glucosio + O₂.", why: "Scoperta a tappe: van Helmont (1640), Priestley (1771), Ingenhousz (1779). Nel 1950 Melvin Calvin ne scoprì le reazioni chimiche, usando carbonio radioattivo (Nobel nel 1961)." },
        { id: "ossigeno", label: "Ossigeno nell'aria", x: 90, y: 54, color: "#0ea5e9", html: "Circa il 21% dell'aria.", why: "Quasi tutto l'ossigeno dell'atmosfera è stato prodotto dalla fotosintesi di cianobatteri, alghe e piante, a partire da circa 2,4 miliardi di anni fa." },
        { id: "fiore", label: "Fiore", x: 15, y: 60, color: "#ec4899", html: "Organo riproduttivo delle angiosperme.", why: "I fiori comparvero circa 130 milioni di anni fa, al tempo dei dinosauri. I petali colorati e il nettare sono un \"accordo\" con gli insetti: cibo in cambio del trasporto del polline." },
        { id: "seme", label: "Seme e frutto", x: 35, y: 82, color: "#f97316", html: "Il seme protegge l'embrione; il frutto protegge e disperde i semi.", why: "Il seme permette alla pianta di aspettare il momento giusto per germinare, anche per anni. Il frutto dolce è un \"premio\" per gli animali che, mangiandolo, spargono i semi lontano." },
        { id: "gruppi", label: "Classificazione", x: 75, y: 84, color: "#6366f1", html: "Briofite, pteridofite, gimnosperme, angiosperme.", why: "Rispecchia la storia evolutiva: prima piante senza vasi, poi con vasi ma senza semi, poi con semi nudi, infine con fiori e frutti." }
      ],
      edges: [
        ["pianta", "radice", "ha"],
        ["pianta", "fusto", "ha"],
        ["pianta", "foglia", "ha"],
        ["radice", "fusto", "acqua sale nei vasi"],
        ["foglia", "foto", "sede della"],
        ["foto", "ossigeno", "produce"],
        ["pianta", "fiore", "si riproduce con il"],
        ["fiore", "seme", "dopo la fecondazione"],
        ["seme", "gruppi", "presenza dei semi divide i"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: fotosintesi e riproduzione",
      questions: [
        { type: "mc", q: "Quale gas producono le piante con la fotosintesi?", options: ["Anidride carbonica", "Ossigeno", "Azoto", "Metano"], answer: 1, explain: "La fotosintesi libera ossigeno." },
        { type: "mc", q: "Dopo la fecondazione, l'ovario diventa…", options: ["il seme", "il frutto", "il polline", "la foglia"], answer: 1, explain: "L'ovario si trasforma nel frutto, gli ovuli nei semi." },
        { type: "tf", q: "Le felci si riproducono con i semi.", answer: false, explain: "Le felci (pteridofite) si riproducono con le spore." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Le piante sono <b>autotrofe</b>: fanno la <b>fotosintesi</b> nei cloroplasti grazie alla clorofilla.</li>
<li><b>Radice</b> (assorbe), <b>fusto</b> (sostiene e trasporta), <b>foglia</b> (fotosintesi, stomi).</li>
<li>Fotosintesi: <b>CO₂ + H₂O + luce → glucosio + O₂</b>.</li>
<li>Fiore → impollinazione → fecondazione → <b>seme</b> (dall'ovulo) e <b>frutto</b> (dall'ovario).</li>
<li>Gruppi: <b>briofite, pteridofite</b> (spore); <b>gimnosperme, angiosperme</b> (semi).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Clorofilla", d: "Pigmento verde dei cloroplasti che cattura l'energia della luce." },
    { t: "Fotosintesi", d: "Processo con cui le piante producono glucosio e ossigeno da CO₂ e acqua usando la luce." },
    { t: "Stomi", d: "Piccole aperture della foglia per lo scambio di gas e acqua." },
    { t: "Xilema", d: "Vasi che trasportano la linfa grezza (acqua e sali) dalle radici alle foglie." },
    { t: "Floema", d: "Vasi che distribuiscono la linfa elaborata (zuccheri)." },
    { t: "Traspirazione", d: "Evaporazione di acqua dalle foglie." },
    { t: "Impollinazione", d: "Trasporto del polline dalle antere allo stimma." },
    { t: "Cotiledone", d: "Foglia embrionale del seme, che spesso contiene sostanze di riserva." },
    { t: "Angiosperme", d: "Piante con fiori e semi racchiusi in un frutto." },
    { t: "Gimnosperme", d: "Piante con semi nudi, spesso portati da coni (pigne)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dove avviene la fotosintesi?", options: ["Nei mitocondri delle radici", "Nei cloroplasti delle foglie", "Nel nucleo del fiore"], answer: 1, explain: "Nei cloroplasti, soprattutto nelle cellule delle foglie." },
      { type: "order", q: "Metti in ordine le tappe della riproduzione di una pianta con fiori.", items: ["Impollinazione", "Fecondazione", "Formazione del seme e del frutto", "Dispersione dei semi", "Germinazione"], explain: "Il polline arriva allo stimma, feconda l'ovulo, si formano seme e frutto, i semi si disperdono e germinano." },
      { type: "mc", q: "Quale di questi NON è un ingrediente della fotosintesi?", options: ["Luce", "Acqua", "Anidride carbonica", "Ossigeno"], answer: 3, explain: "L'ossigeno è un prodotto, non un ingrediente." },
      { type: "tf", q: "Le piante respirano solo di notte.", answer: false, explain: "Le piante respirano sempre, giorno e notte; di giorno però la fotosintesi produce più ossigeno di quello consumato." },
      { type: "text", q: "Come si chiamano i vasi che portano la linfa grezza dalle radici alle foglie?", answer: ["xilema", "lo xilema", "vasi legnosi"], explain: "Lo xilema (vasi legnosi)." },
      { type: "mc", q: "Il pino è…", options: ["una briofita", "una pteridofita", "una gimnosperma", "un'angiosperma"], answer: 2, explain: "Il pino ha semi nudi nelle pigne: è una gimnosperma." },
      { type: "mc", q: "Quale parte del fiore produce il polline?", options: ["Lo stimma", "L'antera", "L'ovario", "Il sepalo"], answer: 1, explain: "Il polline si forma nelle antere degli stami." },
      { type: "tf", q: "Il grano è una monocotiledone con foglie a nervature parallele.", answer: true, explain: "Il grano ha un solo cotiledone, foglie a nervature parallele e radici fascicolate." },
      { type: "mc", q: "La patata che mangiamo è…", options: ["una radice", "un frutto", "un tubero (fusto sotterraneo)", "un seme"], answer: 2, explain: "È un tubero, un fusto sotterraneo pieno di amido, usato anche per la riproduzione vegetativa." },
      { type: "num", q: "Nella fotosintesi, quante molecole di O₂ si formano per ogni molecola di glucosio?", answer: 6, explain: "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂." },
      { type: "mc", q: "Chi scoprì che le piante producono ossigeno solo alla luce?", options: ["Jan Ingenhousz", "Carlo Linneo", "Galileo Galilei"], answer: 0, explain: "Jan Ingenhousz, nel 1779." },
      { type: "text", q: "Come si chiamano le aperture della foglia che regolano gli scambi di gas?", answer: ["stomi", "gli stomi", "stoma"], explain: "Gli stomi." }
    ]
  }
});

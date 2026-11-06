TOPIC('it', {
  id: "p4-sci-classificazione-animali",
  title: "La classificazione degli animali",
  intro: "Sulla Terra ci sono più di <b>un milione e mezzo</b> di specie animali conosciute, e ogni anno se ne scoprono di nuove. Per non perdersi, gli scienziati le mettono in ordine in gruppi, come i libri di una grande biblioteca. Il primo grande \"scaffale\" divide gli animali in <b>vertebrati</b> e <b>invertebrati</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Perché classificare?",
      html: `<p><b>Classificare</b> vuol dire raggruppare le cose secondo le loro <b>caratteristiche comuni</b>. Lo fai anche tu quando metti in ordine i giochi: costruzioni in una scatola, peluche in un'altra.</p>
<p>Gli scienziati osservano com'è fatto il <b>corpo</b> degli animali, come <b>respirano</b>, come <b>nascono</b>, che cosa hanno sulla <b>pelle</b>. Animali con caratteristiche simili finiscono nello stesso gruppo.</p>
<p>La prima e più grande divisione è questa:</p>
<ul>
<li><b>Vertebrati</b> 🐟🐸🦎🐦🐕: hanno uno <b>scheletro interno</b> con la <b>colonna vertebrale</b> (la "spina dorsale", fatta di tanti ossicini chiamati <b>vertebre</b>).</li>
<li><b>Invertebrati</b> 🐌🐝🕷️🪱🐙: <b>non</b> hanno la colonna vertebrale. Alcuni hanno un guscio o una "corazza" esterna, altri hanno il corpo molle.</li>
</ul>
<p>Sorpresa: gli invertebrati sono <b>molti, ma molti di più</b>! Circa il <b>95%</b> delle specie animali conosciute è invertebrato. I vertebrati sono solo una piccola parte.</p>`
    },
    {
      type: "svg",
      title: "Vertebrato o invertebrato?",
      svg: `<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg">
<rect width="620" height="300" fill="#f8fafc"/>
<rect x="10" y="10" width="290" height="280" rx="16" fill="#dbeafe"/>
<rect x="320" y="10" width="290" height="280" rx="16" fill="#fef3c7"/>
<text x="155" y="40" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Vertebrati</text>
<text x="465" y="40" font-size="22" text-anchor="middle" fill="#92400e" font-weight="bold">Invertebrati</text>
<ellipse cx="150" cy="140" rx="110" ry="45" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/>
<polygon points="40,140 10,105 10,175" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/>
<circle cx="225" cy="130" r="7" fill="#1e3a8a"/>
<line x1="60" y1="140" x2="235" y2="140" stroke="#ffffff" stroke-width="6"/>
<g fill="#ffffff" stroke="#1e3a8a" stroke-width="1.5"><rect x="70" y="134" width="12" height="12"/><rect x="90" y="134" width="12" height="12"/><rect x="110" y="134" width="12" height="12"/><rect x="130" y="134" width="12" height="12"/><rect x="150" y="134" width="12" height="12"/><rect x="170" y="134" width="12" height="12"/><rect x="190" y="134" width="12" height="12"/></g>
<g stroke="#ffffff" stroke-width="3"><line x1="96" y1="134" x2="90" y2="105"/><line x1="116" y1="134" x2="112" y2="100"/><line x1="136" y1="134" x2="136" y2="98"/><line x1="156" y1="134" x2="160" y2="100"/><line x1="176" y1="134" x2="182" y2="105"/></g>
<text x="155" y="225" font-size="17" text-anchor="middle" fill="#1e3a8a">colonna vertebrale</text>
<text x="155" y="248" font-size="17" text-anchor="middle" fill="#1e3a8a">e scheletro interno</text>
<ellipse cx="440" cy="150" rx="70" ry="50" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<path d="M440 150 m-45 0 a45 45 0 1 0 90 0 a30 30 0 1 0 -60 0 a15 15 0 1 0 30 0" fill="none" stroke="#92400e" stroke-width="4"/>
<path d="M370 190 C390 205 520 210 560 195 C565 180 540 175 510 182" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<line x1="545" y1="185" x2="560" y2="160" stroke="#3f6212" stroke-width="3"/>
<line x1="555" y1="187" x2="575" y2="168" stroke="#3f6212" stroke-width="3"/>
<text x="465" y="248" font-size="17" text-anchor="middle" fill="#92400e">niente colonna vertebrale</text>
<text x="465" y="271" font-size="17" text-anchor="middle" fill="#92400e">(qui: un guscio esterno)</text>
</svg>`,
      caption: "Il pesce ha una colonna vertebrale dentro il corpo; la chiocciola no: la protegge il guscio."
    },
    {
      type: "text",
      title: "Le cinque classi dei vertebrati",
      html: `<table>
<tr><th>Classe</th><th>Pelle</th><th>Respirazione</th><th>Nascita</th><th>Temperatura</th></tr>
<tr><td>🐟 <b>Pesci</b></td><td>squame</td><td>branchie</td><td>uova (quasi tutti)</td><td>variabile</td></tr>
<tr><td>🐸 <b>Anfibi</b></td><td>nuda e umida</td><td>branchie da piccoli, polmoni e pelle da adulti</td><td>uova in acqua (girino)</td><td>variabile</td></tr>
<tr><td>🦎 <b>Rettili</b></td><td>squame cornee, secche</td><td>polmoni</td><td>uova con guscio, sulla terra</td><td>variabile</td></tr>
<tr><td>🐦 <b>Uccelli</b></td><td>piume e penne</td><td>polmoni</td><td>uova con guscio duro, covate</td><td>costante</td></tr>
<tr><td>🐕 <b>Mammiferi</b></td><td>peli</td><td>polmoni</td><td>quasi tutti partoriscono i piccoli vivi</td><td>costante</td></tr>
</table>
<p>I <b>mammiferi</b> si chiamano così perché le mamme <b>allattano</b> i piccoli con il latte delle <b>mammelle</b>. Anche l'uomo è un mammifero!</p>
<p><b>Temperatura variabile</b> (animali "a sangue freddo", o <b>ectotermi</b>): il corpo si scalda o si raffredda con l'ambiente; per questo la lucertola si mette al sole. <b>Temperatura costante</b> (animali "a sangue caldo", o <b>endotermi</b>): il corpo produce calore e resta sempre più o meno alla stessa temperatura (noi circa 37 °C).</p>`
    },
    {
      type: "widget",
      title: "A quale classe appartiene?",
      widget: "classify",
      options: {
        groups: ["Pesci", "Anfibi", "Rettili", "Uccelli", "Mammiferi"],
        items: [
          ["🦈 squalo", 0],
          ["🐟 trota", 0],
          ["🐸 rana", 1],
          ["🦎 salamandra pezzata", 1],
          ["🐢 tartaruga", 2],
          ["🐊 coccodrillo", 2],
          ["🐧 pinguino", 3],
          ["🦇 pipistrello", 4],
          ["🐬 delfino", 4],
          ["🦅 aquila", 3],
          ["🐍 vipera", 2],
          ["🐳 balena", 4]
        ]
      },
      caption: "Attenzione ai trabocchetti: il delfino, la balena e il pipistrello sono mammiferi; il pinguino è un uccello; la salamandra è un anfibio."
    },
    {
      type: "quiz",
      title: "Mini-quiz: i vertebrati",
      questions: [
        { type: "mc", q: "Quale animale è un mammifero?", options: ["Lo squalo", "Il delfino", "Il pinguino"], answer: 1, explain: "Il delfino respira con i polmoni, partorisce i piccoli e li allatta." },
        { type: "mc", q: "Come respirano i pesci?", options: ["Con i polmoni", "Con le branchie", "Con la pelle"], answer: 1, explain: "Le branchie prendono l'ossigeno sciolto nell'acqua." },
        { type: "tf", q: "Gli uccelli hanno una temperatura corporea costante.", answer: true, explain: "Uccelli e mammiferi sono endotermi: producono il loro calore." }
      ]
    },
    {
      type: "text",
      title: "Gli invertebrati",
      html: `<p>Gli invertebrati sono un mondo enorme e variegato. I gruppi principali:</p>
<ul>
<li><b>Poriferi</b> (spugne): vivono in mare, attaccati agli scogli; il corpo è pieno di forellini.</li>
<li><b>Cnidari</b> (o celenterati): meduse, coralli, anemoni di mare. Hanno tentacoli urticanti.</li>
<li><b>Vermi</b>: corpo molle e allungato. Il <b>lombrico</b> (un anellide) ha il corpo fatto di tanti anelli.</li>
<li><b>Molluschi</b>: corpo molle, spesso protetto da una <b>conchiglia</b>: chiocciole e lumache, cozze e vongole, polpi e calamari (che la conchiglia l'hanno persa o è interna).</li>
<li><b>Artropodi</b> ("zampe articolate"): il gruppo più numeroso! Hanno una corazza esterna detta <b>esoscheletro</b> e zampe snodate.
<ul>
<li><b>Insetti</b> 🐝: 6 zampe, corpo in 3 parti (capo, torace, addome), 2 antenne, spesso le ali;</li>
<li><b>Aracnidi</b> 🕷️: 8 zampe, niente antenne (ragni, scorpioni, zecche);</li>
<li><b>Crostacei</b> 🦀: granchi, gamberi, aragoste; respirano con le branchie;</li>
<li><b>Miriapodi</b>: tantissime zampe (millepiedi, centopiedi).</li>
</ul></li>
<li><b>Echinodermi</b>: "pelle spinosa": stelle marine e ricci di mare.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Com'è fatto un insetto",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<ellipse cx="180" cy="150" rx="40" ry="35" fill="#f59e0b" stroke="#78350f" stroke-width="4"/>
<ellipse cx="275" cy="150" rx="55" ry="40" fill="#fbbf24" stroke="#78350f" stroke-width="4"/>
<ellipse cx="420" cy="150" rx="95" ry="50" fill="#fde047" stroke="#78350f" stroke-width="4"/>
<g stroke="#1f2937" stroke-width="5" fill="none"><path d="M440 150 L440 150"/><path d="M380 110 L400 110"/></g>
<g stroke="#1f2937" stroke-width="6"><line x1="370" y1="125" x2="370" y2="175"/><line x1="410" y1="105" x2="410" y2="195"/><line x1="450" y1="108" x2="450" y2="192"/><line x1="490" y1="120" x2="490" y2="180"/></g>
<g stroke="#78350f" stroke-width="4" fill="none">
<path d="M255 185 L235 240 L215 250"/><path d="M275 190 L280 250 L265 265"/><path d="M300 185 L330 240 L345 255"/>
<path d="M255 115 L235 60 L215 50"/><path d="M275 110 L280 50 L265 35"/><path d="M300 115 L330 60 L345 45"/>
<path d="M160 125 C130 80 110 70 90 60"/><path d="M160 175 C130 220 110 230 90 240"/>
</g>
<ellipse cx="300" cy="80" rx="70" ry="28" fill="#e0f2fe" fill-opacity="0.8" stroke="#0369a1" stroke-width="2" transform="rotate(-25 300 80)"/>
<circle cx="165" cy="140" r="8" fill="#1f2937"/>
</svg>`,
        spots: [
          { x: 180, y: 150, label: "Capo" },
          { x: 275, y: 150, label: "Torace" },
          { x: 430, y: 150, label: "Addome" },
          { x: 100, y: 65, label: "Antenna" },
          { x: 335, y: 245, label: "Zampa (6 in tutto)" },
          { x: 320, y: 70, label: "Ala" }
        ]
      },
      caption: "Tutti gli insetti hanno il corpo in tre parti e 6 zampe attaccate al torace. Un ragno ne ha 8: non è un insetto!"
    },
    {
      type: "svg",
      title: "L'albero della classificazione",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fdf4ff"/>
<rect x="250" y="10" width="140" height="36" rx="10" fill="#7e22ce"/>
<text x="320" y="34" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">ANIMALI</text>
<line x1="320" y1="46" x2="160" y2="80" stroke="#7e22ce" stroke-width="3"/>
<line x1="320" y1="46" x2="480" y2="80" stroke="#7e22ce" stroke-width="3"/>
<rect x="85" y="80" width="150" height="34" rx="10" fill="#2563eb"/>
<text x="160" y="103" font-size="17" fill="#ffffff" text-anchor="middle" font-weight="bold">Vertebrati</text>
<rect x="405" y="80" width="150" height="34" rx="10" fill="#d97706"/>
<text x="480" y="103" font-size="17" fill="#ffffff" text-anchor="middle" font-weight="bold">Invertebrati</text>
<g stroke="#2563eb" stroke-width="2"><line x1="160" y1="114" x2="40" y2="150"/><line x1="160" y1="114" x2="100" y2="150"/><line x1="160" y1="114" x2="160" y2="150"/><line x1="160" y1="114" x2="220" y2="150"/><line x1="160" y1="114" x2="280" y2="150"/></g>
<g font-size="15" text-anchor="middle" fill="#1e3a8a"><text x="40" y="170">🐟</text><text x="40" y="190">Pesci</text><text x="100" y="170">🐸</text><text x="100" y="190">Anfibi</text><text x="160" y="170">🦎</text><text x="160" y="190">Rettili</text><text x="220" y="170">🐦</text><text x="220" y="190">Uccelli</text><text x="280" y="170">🐕</text><text x="280" y="190">Mammiferi</text></g>
<g stroke="#d97706" stroke-width="2"><line x1="480" y1="114" x2="360" y2="150"/><line x1="480" y1="114" x2="420" y2="150"/><line x1="480" y1="114" x2="480" y2="150"/><line x1="480" y1="114" x2="545" y2="150"/><line x1="480" y1="114" x2="610" y2="150"/></g>
<g font-size="15" text-anchor="middle" fill="#92400e"><text x="360" y="170">🪸</text><text x="360" y="190">Cnidari</text><text x="420" y="170">🪱</text><text x="420" y="190">Vermi</text><text x="480" y="170">🐌</text><text x="480" y="190">Molluschi</text><text x="545" y="170">🐝</text><text x="545" y="190">Artropodi</text><text x="610" y="170">⭐</text><text x="605" y="190">Echinod.</text></g>
<g stroke="#d97706" stroke-width="2"><line x1="545" y1="196" x2="430" y2="235"/><line x1="545" y1="196" x2="500" y2="235"/><line x1="545" y1="196" x2="570" y2="235"/><line x1="545" y1="196" x2="625" y2="235"/></g>
<g font-size="14" text-anchor="middle" fill="#92400e"><text x="430" y="255">Insetti</text><text x="430" y="273">6 zampe</text><text x="500" y="255">Aracnidi</text><text x="500" y="273">8 zampe</text><text x="570" y="255">Crostacei</text><text x="570" y="273">🦀</text><text x="615" y="255">Miriapodi</text><text x="615" y="273">🐛</text></g>
<text x="160" y="240" font-size="16" fill="#1e3a8a" text-anchor="middle">circa 5% delle specie</text>
<text x="240" y="300" font-size="16" fill="#92400e" text-anchor="middle">invertebrati: circa 95% delle specie (solo gli insetti sono oltre 1 milione!)</text>
</svg>`,
      caption: "Ogni ramo è un gruppo con caratteristiche comuni. Più si scende, più gli animali di un gruppo si somigliano."
    },
    {
      type: "text",
      title: "Le \"scatole cinesi\" di Linneo",
      html: `<p>Nel <b>1735</b> lo scienziato svedese <b>Carl Linnaeus</b> (in italiano <b>Linneo</b>) pubblicò il <i>Systema Naturae</i>, dove mise in ordine piante e animali in gruppi uno dentro l'altro, come scatole cinesi:</p>
<p><b>Regno → Phylum (tipo) → Classe → Ordine → Famiglia → Genere → Specie</b></p>
<p>Ogni specie ha un <b>nome scientifico</b> in latino, fatto di due parole (genere + specie), uguale in tutto il mondo. Esempi:</p>
<ul>
<li>il lupo: <i>Canis lupus</i>; il cane: <i>Canis lupus familiaris</i> (una sottospecie del lupo!);</li>
<li>il gatto: <i>Felis catus</i>; il leone: <i>Panthera leo</i>;</li>
<li>l'uomo: <i>Homo sapiens</i> ("uomo sapiente").</li>
</ul>
<p>Una <b>specie</b> è un gruppo di animali che si possono riprodurre fra loro e avere figli a loro volta fertili.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la carta d'identità del gatto",
      html: `<p>Ecco dove sta il tuo gatto nelle "scatole" della classificazione:</p>
<ul>
<li><b>Regno</b>: Animali (si muove e mangia altri esseri viventi)</li>
<li><b>Phylum</b>: Cordati (ha la colonna vertebrale → vertebrato)</li>
<li><b>Classe</b>: Mammiferi (peli, allatta i piccoli)</li>
<li><b>Ordine</b>: Carnivori (denti aguzzi per la carne)</li>
<li><b>Famiglia</b>: Felidi (unghie retrattili; parente di leone e tigre)</li>
<li><b>Genere</b>: <i>Felis</i></li>
<li><b>Specie</b>: <i>Felis catus</i></li>
</ul>
<p>Il gatto e il leone sono nella stessa famiglia ma in generi diversi: si somigliano, ma meno di due gatti!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: classificare in giardino",
      html: `<p>Giulia esplora il giardino con una lente e trova: una <b>formica</b>, un <b>lombrico</b>, un <b>ragnetto</b>, una <b>lumaca</b>, un <b>merlo</b> e una <b>lucertola</b>. Come li classifica?</p>
<ol>
<li>Prima domanda: <b>ha la colonna vertebrale?</b> Sì → merlo e lucertola (vertebrati). No → gli altri.</li>
<li>Merlo: piume → <b>uccello</b>. Lucertola: squame secche → <b>rettile</b>.</li>
<li>Invertebrati: ha <b>zampe snodate</b>? Formica (6 zampe → <b>insetto</b>), ragnetto (8 zampe → <b>aracnide</b>).</li>
<li>Corpo molle: lumaca (con il "piede" e a volte il guscio → <b>mollusco</b>), lombrico (anelli → <b>verme anellide</b>).</li>
</ol>
<p>Questa serie di domande "sì/no" si chiama <b>chiave dicotomica</b>: gli scienziati la usano davvero!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'ornitorinco, il mammifero che fa le uova",
      html: `<p>In Australia vive l'<b>ornitorinco</b>: ha il becco come un'anatra, la coda come un castoro, le zampe palmate… e <b>depone le uova</b>! Eppure è un mammifero, perché ha il pelo e allatta i piccoli. Quando nel 1798 ne arrivò un esemplare in Inghilterra, gli scienziati pensarono a uno scherzo: credevano che qualcuno avesse cucito insieme pezzi di animali diversi!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il pianeta degli insetti",
      html: `<p>Gli scienziati hanno descritto circa <b>1 milione di specie di insetti</b>, e pensano che ce ne siano ancora milioni da scoprire. Solo i <b>coleotteri</b> (come le coccinelle) sono circa 400.000 specie. Si dice che il biologo J.B.S. Haldane, quando gli chiesero che cosa avesse capito del Creatore studiando la natura, rispose: "che ha una passione smodata per i coleotteri"!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Gli uccelli sono parenti dei dinosauri",
      html: `<p>I paleontologi hanno scoperto fossili di dinosauri <b>con le piume</b>. Oggi sappiamo che gli uccelli discendono da piccoli dinosauri carnivori: il passero sul tuo balcone è, in un certo senso, un dinosauro sopravvissuto! L'<i>Archaeopteryx</i>, vissuto circa 150 milioni di anni fa in Germania, aveva denti, coda ossea… e ali con penne.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Vertebrati</b>: colonna vertebrale. Classi: <b>pesci, anfibi, rettili, uccelli, mammiferi</b>.</li>
<li><b>Invertebrati</b>: niente colonna vertebrale (circa 95% delle specie): spugne, cnidari, vermi, molluschi, <b>artropodi</b> (insetti 6 zampe, aracnidi 8 zampe, crostacei, miriapodi), echinodermi.</li>
<li>Pesci, anfibi, rettili: temperatura <b>variabile</b>; uccelli e mammiferi: temperatura <b>costante</b>.</li>
<li>Linneo: Regno → Phylum → Classe → Ordine → Famiglia → Genere → Specie. Nome scientifico in due parole (es. <i>Homo sapiens</i>).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la classificazione",
      intro: "Classificare è un gioco di domande e di scatole. Ecco altri modi per capirlo: scegli il tuo!",
      tabs: [
        {
          label: "🔑 Il gioco delle domande (chiave)",
          html: `<p>È come il gioco "Indovina chi?": si fanno domande a cui si risponde solo <b>sì</b> o <b>no</b>.</p>
<ol>
<li>Ha la colonna vertebrale? <b>No</b> → invertebrato. <b>Sì</b> → vai al 2.</li>
<li>Ha le piume? <b>Sì</b> → uccello. <b>No</b> → vai al 3.</li>
<li>Ha i peli e allatta? <b>Sì</b> → mammifero. <b>No</b> → vai al 4.</li>
<li>Respira con le branchie per tutta la vita? <b>Sì</b> → pesce. <b>No</b> → vai al 5.</li>
<li>Ha la pelle nuda e umida? <b>Sì</b> → anfibio. <b>No</b> (squame secche) → rettile.</li>
</ol>
<p>Prova con il delfino: colonna sì → piume no → peli e allatta sì → <b>mammifero</b>! ✅</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<rect x="200" y="10" width="200" height="40" rx="10" fill="#0369a1"/>
<text x="300" y="36" font-size="16" fill="#ffffff" text-anchor="middle">Colonna vertebrale?</text>
<line x1="250" y1="50" x2="120" y2="90" stroke="#0369a1" stroke-width="3"/><text x="160" y="70" font-size="15" fill="#b91c1c">no</text>
<line x1="350" y1="50" x2="440" y2="90" stroke="#0369a1" stroke-width="3"/><text x="410" y="70" font-size="15" fill="#15803d">sì</text>
<rect x="40" y="90" width="160" height="36" rx="10" fill="#fde68a"/><text x="120" y="114" font-size="16" text-anchor="middle">Invertebrato</text>
<rect x="360" y="90" width="160" height="36" rx="10" fill="#0ea5e9"/><text x="440" y="114" font-size="16" fill="#ffffff" text-anchor="middle">Piume?</text>
<line x1="400" y1="126" x2="330" y2="160" stroke="#0369a1" stroke-width="3"/><text x="345" y="145" font-size="15" fill="#15803d">sì</text>
<line x1="480" y1="126" x2="520" y2="160" stroke="#0369a1" stroke-width="3"/><text x="510" y="145" font-size="15" fill="#b91c1c">no</text>
<rect x="260" y="160" width="140" height="36" rx="10" fill="#bbf7d0"/><text x="330" y="184" font-size="16" text-anchor="middle">Uccello</text>
<rect x="440" y="160" width="150" height="36" rx="10" fill="#0ea5e9"/><text x="515" y="184" font-size="16" fill="#ffffff" text-anchor="middle">Peli e latte?</text>
<text x="515" y="230" font-size="15" text-anchor="middle" fill="#1f2937">sì → mammifero …</text>
</svg>`
        },
        {
          label: "🪆 Le scatole una dentro l'altra (3D)",
          html: `<p>Pensa alle <b>matrioske</b> russe, o alle scatole cinesi. Ogni sfera contiene quella più piccola. La sfera più grande è il <b>Regno animale</b>; dentro ci sono i <b>Cordati</b> (vertebrati), poi i <b>Mammiferi</b>, poi i <b>Carnivori</b>, i <b>Felidi</b>, il genere <i>Felis</i> e al centro la specie <i>Felis catus</i>, il gatto.</p>
<p>Più vai verso il centro, meno animali ci sono dentro, ma più si somigliano fra loro.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#a855f7", label: "Regno: Animali" },
              { r: 0.85, color: "#3b82f6", label: "Phylum: Cordati" },
              { r: 0.7, color: "#0ea5e9", label: "Classe: Mammiferi" },
              { r: 0.55, color: "#22c55e", label: "Ordine: Carnivori" },
              { r: 0.4, color: "#eab308", label: "Famiglia: Felidi" },
              { r: 0.27, color: "#f97316", label: "Genere: Felis" },
              { r: 0.14, color: "#ef4444", label: "Specie: Felis catus" }
            ]
          }
        },
        {
          label: "📚 Come una biblioteca",
          html: `<p>In una grande biblioteca i libri sono divisi in <b>reparti</b> (narrativa, scienze, storia…), poi in <b>scaffali</b>, poi in <b>ripiani</b>, infine c'è il singolo libro con il suo codice.</p>
<ul>
<li>Biblioteca = Regno animale</li>
<li>Reparto = Phylum (es. Cordati)</li>
<li>Scaffale = Classe (es. Mammiferi)</li>
<li>Ripiano = Ordine e Famiglia</li>
<li>Il libro con autore e titolo = Genere e Specie (es. <i>Panthera leo</i>)</li>
</ul>
<p>Il nome in latino è come il codice del libro: chiunque, in Cina o in Brasile, trova lo stesso animale.</p>`
        },
        {
          label: "🃏 Carte da girare",
          html: `<p>Allena la memoria: leggi l'animale, pensa alla risposta e gira la carta.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🐋 Balena", back: "Mammifero: respira con i polmoni e allatta" },
              { front: "🦈 Squalo", back: "Pesce: branchie e scheletro di cartilagine" },
              { front: "🕷️ Ragno", back: "Artropode aracnide: 8 zampe" },
              { front: "🐙 Polpo", back: "Mollusco: corpo molle, conchiglia persa" },
              { front: "🐢 Tartaruga", back: "Rettile: squame cornee, uova sulla terra" },
              { front: "🦇 Pipistrello", back: "Mammifero volante" },
              { front: "🦀 Granchio", back: "Artropode crostaceo: respira con le branchie" },
              { front: "⭐ Stella marina", back: "Echinoderma: pelle spinosa" }
            ]
          }
        },
        {
          label: "🧬 Il metodo moderno: l'albero della famiglia",
          html: `<p>Oggi gli scienziati non guardano solo com'è fatto il corpo, ma anche il <b>DNA</b>, le "istruzioni" scritte dentro ogni cellula. Animali con il DNA più simile sono <b>parenti più stretti</b>.</p>
<p>Così si sono avute sorprese: le <b>balene</b> sono parenti degli <b>ippopotami</b>; gli <b>uccelli</b> sono più vicini ai <b>coccodrilli</b> che alle lucertole. Questo modo di classificare per "alberi genealogici" nasce dalle idee di <b>Charles Darwin</b> (1859) e del tedesco <b>Willi Hennig</b> (anni '50).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa della classificazione: tocca un nodo e scopri il perché",
      nodes: [
        { id: "aristotele", label: "Aristotele", x: 15, y: 8, color: "#64748b", html: "Il primo a classificare gli animali in modo scientifico, nel IV secolo a.C.", why: "Il filosofo greco osservò e descrisse più di 500 animali, dividendoli in animali \"con sangue\" (quasi i nostri vertebrati) e \"senza sangue\" (gli invertebrati), e capì già che il delfino non è un pesce perché respira aria e allatta." },
        { id: "linneo", label: "Linneo", x: 50, y: 8, color: "#7e22ce", html: "Lo scienziato svedese che inventò il sistema moderno (1735).", why: "Nel <i>Systema Naturae</i> creò le categorie una dentro l'altra e, dalla 10ª edizione (1758), il <b>nome scientifico in due parole</b> per ogni animale. Usò il latino perché era la lingua comune degli scienziati in tutta Europa." },
        { id: "darwin", label: "Darwin ed evoluzione", x: 85, y: 8, color: "#0f766e", html: "Gli animali simili si somigliano perché hanno antenati comuni.", why: "Nel 1859 Charles Darwin spiegò, con <i>L'origine delle specie</i>, che le specie cambiano nel tempo e discendono da antenati comuni. Così la classificazione diventò un \"albero di famiglia\"." },
        { id: "animali", label: "Regno animale", x: 50, y: 32, color: "#a855f7", html: "Esseri viventi fatti di molte cellule che si nutrono di altri esseri viventi (eterotrofi) e quasi sempre si muovono.", why: "Si distinguono dalle piante, che fanno la fotosintesi, e dai funghi, che assorbono il cibo dall'ambiente." },
        { id: "vertebrati", label: "Vertebrati", x: 25, y: 56, color: "#2563eb", html: "Animali con colonna vertebrale e scheletro interno.", why: "Il nome viene dal latino <i>vertebra</i>, da <i>vertere</i> = girare: le vertebre permettono di piegarsi e girarsi. Il primo a dividere gli animali in vertebrati e invertebrati con questi nomi fu il francese <b>Jean-Baptiste Lamarck</b>, nel 1797–1801." },
        { id: "invertebrati", label: "Invertebrati", x: 75, y: 56, color: "#d97706", html: "Animali senza colonna vertebrale: circa il 95% delle specie.", why: "Lamarck li studiò per primo come gruppo. Molti hanno un esoscheletro (artropodi) o una conchiglia (molluschi) al posto delle ossa interne." },
        { id: "classi", label: "5 classi", x: 12, y: 82, color: "#1d4ed8", html: "Pesci, anfibi, rettili, uccelli, mammiferi.", why: "Si distinguono per pelle (squame, pelle nuda, piume, peli), respirazione (branchie o polmoni), modo di nascere e temperatura del corpo." },
        { id: "temperatura", label: "Sangue caldo o freddo", x: 40, y: 92, color: "#dc2626", html: "Endotermi (uccelli, mammiferi) e ectotermi (pesci, anfibi, rettili).", why: "Gli endotermi \"bruciano\" più cibo per produrre calore: per questo possono vivere anche in luoghi freddissimi, ma devono mangiare molto di più." },
        { id: "artropodi", label: "Artropodi", x: 80, y: 84, color: "#b45309", html: "Insetti, aracnidi, crostacei, miriapodi: zampe articolate ed esoscheletro.", why: "Dal greco <i>árthron</i> = articolazione e <i>poús</i> = piede. L'esoscheletro è fatto di <b>chitina</b> e non cresce: per questo gli artropodi fanno la <b>muta</b>, cioè cambiano \"corazza\" per crescere." }
      ],
      edges: [
        ["aristotele", "linneo", "secoli dopo"],
        ["linneo", "animali", "ordina"],
        ["darwin", "animali", "spiega le somiglianze"],
        ["animali", "vertebrati", "con colonna"],
        ["animali", "invertebrati", "senza colonna"],
        ["vertebrati", "classi", "si dividono in"],
        ["classi", "temperatura", "si distinguono anche per"],
        ["invertebrati", "artropodi", "il gruppo più grande"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: gli invertebrati",
      questions: [
        { type: "mc", q: "Quante zampe ha un insetto?", options: ["4", "6", "8"], answer: 1, explain: "Gli insetti hanno 6 zampe; i ragni (aracnidi) 8." },
        { type: "mc", q: "Il polpo è un…", options: ["pesce", "mollusco", "crostaceo"], answer: 1, explain: "Ha il corpo molle: è un mollusco, parente di lumache e cozze." },
        { type: "tf", q: "Gli invertebrati sono meno numerosi dei vertebrati.", answer: false, explain: "Sono circa il 95% delle specie animali!" }
      ]
    }
  ],
  glossary: [
    { t: "Classificare", d: "Raggruppare in base a caratteristiche comuni." },
    { t: "Vertebrati", d: "Animali con colonna vertebrale e scheletro interno." },
    { t: "Invertebrati", d: "Animali senza colonna vertebrale." },
    { t: "Vertebre", d: "Piccole ossa che formano la colonna vertebrale." },
    { t: "Branchie", d: "Organi che prendono l'ossigeno sciolto nell'acqua." },
    { t: "Esoscheletro", d: "Corazza esterna rigida degli artropodi." },
    { t: "Endotermo", d: "Animale che mantiene costante la temperatura del corpo (\"a sangue caldo\")." },
    { t: "Ectotermo", d: "Animale la cui temperatura dipende dall'ambiente (\"a sangue freddo\")." },
    { t: "Specie", d: "Gruppo di individui che possono riprodursi fra loro e avere figli fertili." },
    { t: "Nome scientifico", d: "Nome latino in due parole (genere e specie), uguale in tutto il mondo." },
    { t: "Chiave dicotomica", d: "Serie di domande a due risposte per riconoscere e classificare un essere vivente." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa hanno in comune tutti i vertebrati?", options: ["Le piume", "La colonna vertebrale", "Le branchie"], answer: 1, explain: "La colonna vertebrale è ciò che li definisce." },
      { type: "mc", q: "La rana è…", options: ["un rettile", "un anfibio", "un pesce"], answer: 1, explain: "Pelle nuda e umida; da girino respira con le branchie: anfibio." },
      { type: "tf", q: "Il pipistrello è un uccello perché vola.", answer: false, explain: "Ha i peli e allatta i piccoli: è un mammifero." },
      { type: "mc", q: "Quale animale è un aracnide?", options: ["La formica", "Lo scorpione", "Il granchio"], answer: 1, explain: "Lo scorpione ha 8 zampe come i ragni." },
      { type: "text", q: "Come si chiamano gli animali che allattano i piccoli?", answer: ["mammiferi", "i mammiferi"], explain: "I mammiferi, dalle mammelle." },
      { type: "mc", q: "Quale gruppo ha la temperatura del corpo costante?", options: ["Rettili", "Uccelli", "Anfibi"], answer: 1, explain: "Uccelli e mammiferi sono endotermi." },
      { type: "order", q: "Metti in ordine i gruppi di Linneo, dal più grande al più piccolo.", items: ["Regno", "Phylum", "Classe", "Ordine", "Famiglia", "Genere", "Specie"], explain: "Ogni gruppo è contenuto in quello prima." },
      { type: "tf", q: "Il nome scientifico dell'uomo è Homo sapiens.", answer: true, explain: "Genere Homo, specie sapiens." },
      { type: "mc", q: "La stella marina appartiene agli…", options: ["echinodermi", "cnidari", "crostacei"], answer: 0, explain: "Echinodermi = pelle spinosa, come i ricci di mare." },
      { type: "num", q: "Quante parti ha il corpo di un insetto?", answer: 3, explain: "Capo, torace e addome." },
      { type: "mc", q: "Chi inventò il sistema dei nomi scientifici in due parole?", options: ["Darwin", "Linneo", "Aristotele"], answer: 1, explain: "Carl Linnaeus (Linneo), nel Settecento." },
      { type: "tf", q: "Il lombrico è un verme con il corpo diviso in anelli.", answer: true, explain: "È un anellide." }
    ]
  }
});

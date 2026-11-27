TOPIC('it', {
  id: "l4-sci-apparati-umani",
  title: "Anatomia e fisiologia umana",
  intro: "In terza hai visto come il corpo è organizzato in cellule, tessuti, organi e apparati, e come l'omeostasi mantiene costante l'ambiente interno. Ora entriamo nei quattro apparati che garantiscono il rifornimento e lo smaltimento: il <b>digerente</b> (che trasforma il cibo in molecole piccole), il <b>respiratorio</b> (che porta ossigeno e toglie anidride carbonica), il <b>circolatorio</b> (che distribuisce tutto con il sangue) e l'<b>escretore</b> (che filtra il sangue ed elimina le scorie). Li studieremo non come elenchi di organi ma come <b>sistemi che risolvono problemi fisici e chimici</b>: come aumentare una superficie di scambio, come far scorrere un fluido, come mantenere un pH.",
  minutes: 65,
  sections: [
    {
      type: "text",
      title: "L'apparato digerente: scomporre per assorbire",
      html: `<p>Le molecole del cibo (amido, proteine, grassi) sono troppo grandi per entrare nelle cellule. La <b>digestione</b> le scompone in molecole piccole: <b>glucosio</b> (e altri monosaccaridi), <b>amminoacidi</b>, <b>acidi grassi e monogliceridi</b>, che vengono poi <b>assorbite</b>. Avviene con due tipi di azione: <b>meccanica</b> (masticazione, rimescolamento) e <b>chimica</b> (enzimi, acidi, bile). È un tubo lungo circa 8-9 metri dalla bocca all'ano, con ghiandole annesse (salivari, fegato, pancreas).</p>
<table>
<tr><th>Tratto</th><th>Che cosa avviene</th></tr>
<tr><td><b>Bocca</b></td><td>La masticazione riduce il cibo in pezzetti; la saliva (pH ≈ 6,5-7) contiene l'<b>amilasi salivare</b>, che inizia a spezzare l'amido in zuccheri più piccoli (se mastichi a lungo il pane senti un sapore dolce). Si forma il <b>bolo</b>.</td></tr>
<tr><td><b>Faringe ed esofago</b></td><td>La deglutizione spinge il bolo; l'<b>epiglottide</b> chiude la laringe. Nell'esofago la <b>peristalsi</b> (onde di contrazione dei muscoli lisci) lo spinge verso il basso, tanto che si può deglutire anche a testa in giù.</td></tr>
<tr><td><b>Stomaco</b></td><td>Sacco muscolare che rimescola il bolo con il <b>succo gastrico</b>: acido cloridrico (pH ≈ 1,5-2), <b>pepsina</b> (enzima che scinde le proteine, attivato proprio dall'acido) e muco protettivo. Dopo 2-4 ore si forma il <b>chimo</b>, che passa a piccole dosi nel duodeno.</td></tr>
<tr><td><b>Intestino tenue</b></td><td>Duodeno, digiuno, ileo. Nel <b>duodeno</b> arrivano la <b>bile</b> (prodotta dal fegato, accumulata nella cistifellea: emulsiona i grassi, non è un enzima) e il <b>succo pancreatico</b> (bicarbonato che neutralizza l'acido, e enzimi: amilasi, lipasi, tripsina e altre proteasi). Qui si completa la digestione e avviene quasi tutto l'<b>assorbimento</b>.</td></tr>
<tr><td><b>Intestino crasso</b></td><td>Riassorbe acqua e sali; ospita il <b>microbiota</b> (batteri che producono vitamina K e acidi grassi a catena corta e fermentano le fibre); forma le feci.</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Riconosci i tratti del tubo digerente",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><ellipse cx="60" cy="150" rx="40" ry="30" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/><rect x="100" y="140" width="90" height="20" fill="#fdba74" stroke="#7c2d12" stroke-width="3"/><path d="M190 120 Q260 80 290 150 Q300 220 230 210 Q200 200 190 160 Z" fill="#fde68a" stroke="#78350f" stroke-width="3"/><path d="M290 160 L330 160 L330 210 L380 210 L380 120 L430 120 L430 200 L480 200" fill="none" stroke="#16a34a" stroke-width="16" stroke-linejoin="round"/><rect x="500" y="90" width="30" height="130" rx="12" fill="#a78bfa" stroke="#4c1d95" stroke-width="3"/></svg>`,
        spots: [
          { x: 60, y: 150, label: "Bocca" },
          { x: 145, y: 150, label: "Esofago" },
          { x: 245, y: 150, label: "Stomaco" },
          { x: 380, y: 160, label: "Intestino tenue" },
          { x: 515, y: 155, label: "Intestino crasso" }
        ]
      },
      caption: "Schema semplificato (non in scala): clicca ogni punto e scegli l'etichetta giusta."
    },
    {
      type: "text",
      title: "Assorbimento: come si moltiplica una superficie",
      html: `<p>Un tubo di 5-6 metri ha poca superficie se la parete è liscia. L'intestino tenue la moltiplica con tre livelli di piegature: le <b>pieghe circolari</b>, i <b>villi</b> (sporgenze di circa 1 mm) e i <b>microvilli</b> sulle singole cellule (l'<b>orletto a spazzola</b>). Il risultato è una superficie di assorbimento di circa <b>30 m²</b>. In ogni villo ci sono capillari e un vaso linfatico (<b>chilifero</b>):</p>
<ul>
<li><b>Glucosio e amminoacidi</b> passano nei capillari e, attraverso la <b>vena porta</b>, arrivano al fegato, che li regola prima di rimandarli in circolo.</li>
<li>I <b>grassi</b> vengono emulsionati dalla bile, digeriti dalla lipasi, ricomposti nelle cellule e inviati ai vasi linfatici sotto forma di <b>chilomicroni</b>, quindi al sangue.</li>
<li>Acqua e sali si assorbono per <b>osmosi</b> e <b>trasporto attivo</b>: l'intestino riassorbe circa 8-9 litri al giorno (compresi i succhi digestivi), ed evita la disidratazione.</li>
</ul>
<p>Il <b>fegato</b> (circa 1,5 kg, il più grande organo interno) svolge più di 500 funzioni: produce la bile, immagazzina glicogeno, trasforma le sostanze tossiche, sintetizza urea e proteine plasmatiche. Il <b>pancreas</b> è anche una ghiandola endocrina (insulina, glucagone), come vedrai nell'ultima lezione.</p>`
    },
    {
      type: "svg",
      title: "Un villo intestinale",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<path d="M260 270 L260 90 Q260 40 300 40 Q340 40 340 90 L340 270 Z" fill="#fde68a" stroke="#78350f" stroke-width="3"/>
<path d="M285 270 L285 100 Q285 70 300 70 Q315 70 315 100 L315 270" fill="none" stroke="#dc2626" stroke-width="6"/>
<path d="M300 250 L300 85" stroke="#16a34a" stroke-width="6" stroke-dasharray="8 6"/>
<g stroke="#78350f" stroke-width="2"><line x1="262" y1="90" x2="250" y2="90"/><line x1="262" y1="120" x2="250" y2="120"/><line x1="262" y1="150" x2="250" y2="150"/><line x1="338" y1="90" x2="350" y2="90"/><line x1="338" y1="120" x2="350" y2="120"/><line x1="338" y1="150" x2="350" y2="150"/></g>
<text x="370" y="70" font-size="15" font-weight="bold" fill="#78350f">microvilli (orletto a spazzola)</text>
<line x1="352" y1="100" x2="440" y2="80" stroke="#78350f" stroke-width="2"/>
<text x="360" y="130" font-size="15" font-weight="bold" fill="#dc2626">capillari sanguigni</text>
<text x="360" y="150" font-size="14" fill="#dc2626">(glucosio, amminoacidi)</text>
<text x="360" y="195" font-size="15" font-weight="bold" fill="#16a34a">vaso linfatico (chilifero)</text>
<text x="360" y="213" font-size="14" fill="#16a34a">(grassi)</text>
<text x="60" y="130" font-size="14" fill="#475569">lume intestinale</text>
<text x="60" y="148" font-size="14" fill="#475569">(cibo digerito)</text>
<text x="300" y="292" font-size="14" fill="#475569" text-anchor="middle">Un solo villo: milioni di villi moltiplicano l'area di assorbimento.</text>
</svg>`,
      caption: "Più superficie significa più scambio: è la stessa logica della scala e della superficie incontrata in terza."
    },
    {
      type: "quiz",
      title: "Mini-quiz: digestione",
      questions: [
        { type: "mc", q: "Quale ruolo ha la bile?", options: ["Emulsiona i grassi, rendendoli più attaccabili dalla lipasi", "Digerisce le proteine", "Neutralizza l'acido dello stomaco", "Scinde l'amido"], answer: 0, explain: "La bile è prodotta dal fegato e non contiene enzimi: i sali biliari frammentano i grassi in goccioline minuscole." },
        { type: "tf", q: "La maggior parte dell'assorbimento dei nutrienti avviene nello stomaco.", answer: false, explain: "Avviene nell'intestino tenue, grazie a villi e microvilli." },
        { type: "mc", q: "Perché l'enzima pepsina agisce nello stomaco ma non nel duodeno?", options: ["Funziona a pH molto acido, e nel duodeno il pH sale", "Nel duodeno non ci sono proteine", "Viene distrutta dalla bile", "È un enzima solo per i grassi"], answer: 0, explain: "Ogni enzima ha un pH ottimale: la pepsina lavora a pH ≈ 2; il bicarbonato del pancreas porta il duodeno a circa 7-8." }
      ]
    },
    {
      type: "text",
      title: "L'apparato respiratorio: lo scambio dei gas",
      html: `<p>Le cellule ricavano energia ossidando il glucosio con l'ossigeno (respirazione cellulare) e producono <b>CO₂</b>. L'apparato respiratorio fa arrivare O₂ al sangue e porta via la CO₂. Si distinguono:</p>
<ul>
<li><b>Ventilazione</b> (respirazione polmonare): l'aria entra ed esce dai polmoni.</li>
<li><b>Scambio gassoso</b> (respirazione esterna) negli <b>alveoli</b>.</li>
<li><b>Trasporto</b> dei gas con il sangue e <b>scambio con i tessuti</b> (respirazione interna).</li>
</ul>
<p><b>Le vie aeree</b>: naso (filtra, riscalda, umidifica), faringe, laringe (con le corde vocali), <b>trachea</b> (anelli di cartilagine, rivestita da ciglia che spingono il muco con le polveri verso l'alto), <b>bronchi</b> → bronchioli → <b>alveoli</b>. I polmoni contengono circa 300-500 milioni di alveoli, sacchetti con parete spessa una cellula (≈ 0,5 μm) e circondati da capillari: una superficie complessiva di circa <b>70 m²</b>.</p>
<p><b>Come entra l'aria?</b> È applicazione diretta della <b>legge di Boyle</b> (P · V = costante): all'<b>inspirazione</b> il <b>diaframma</b> si contrae e si abbassa e i muscoli intercostali sollevano le coste; il volume della cavità toracica aumenta, la pressione nei polmoni scende sotto quella atmosferica e l'aria entra. L'<b>espirazione</b> a riposo è passiva: i muscoli si rilasciano, il volume diminuisce, la pressione sale e l'aria esce. I polmoni non hanno muscoli propri: seguono la cassa toracica grazie alle <b>pleure</b> (due membrane con un velo di liquido in mezzo; se entra aria si ha il <i>pneumotorace</i> e il polmone collassa).</p>
<p><b>Volumi:</b> a riposo si muovono circa <b>500 mL</b> per atto (volume corrente), 12-16 volte al minuto: circa 6-8 L/min. La <b>capacità vitale</b> (la massima quantità che si può espirare dopo un'inspirazione massima) è di circa 4-5 L in un adulto in salute; poiché i polmoni non si svuotano mai del tutto, restano circa 1,2 L di <b>volume residuo</b>.</p>`
    },
    {
      type: "svg",
      title: "Lo scambio di gas nell'alveolo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="180" cy="150" r="100" fill="#e0f2fe" stroke="#0369a1" stroke-width="5"/>
<text x="180" y="135" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">ALVEOLO</text>
<text x="180" y="158" font-size="14" fill="#0369a1" text-anchor="middle">aria ricca di O₂</text>
<rect x="290" y="95" width="250" height="110" rx="55" fill="#fecaca" stroke="#991b1b" stroke-width="4"/>
<text x="415" y="145" font-size="16" font-weight="bold" fill="#991b1b" text-anchor="middle">CAPILLARE</text>
<text x="415" y="168" font-size="14" fill="#991b1b" text-anchor="middle">sangue povero di O₂</text>
<path d="M255 130 L335 130" stroke="#16a34a" stroke-width="5"/><polygon points="335,120 355,130 335,140" fill="#16a34a"/>
<path d="M335 175 L255 175" stroke="#f59e0b" stroke-width="5"/><polygon points="255,165 235,175 255,185" fill="#f59e0b"/>
<text x="300" y="118" font-size="16" font-weight="bold" fill="#16a34a" text-anchor="middle">O₂</text>
<text x="300" y="203" font-size="16" font-weight="bold" fill="#b45309" text-anchor="middle">CO₂</text>
<text x="300" y="262" font-size="14" fill="#475569" text-anchor="middle">Diffusione: ogni gas si sposta da dove la sua pressione parziale è più alta a dove è più bassa.</text>
</svg>`,
      caption: "Nessun trasporto attivo: lo scambio avviene per semplice diffusione attraverso una membrana sottilissima."
    },
    {
      type: "text",
      title: "Come l'ossigeno e la CO₂ viaggiano nel sangue",
      html: `<p>L'ossigeno si scioglie male nel plasma (circa 3 mL per litro), ma il sangue ne trasporta circa 200 mL per litro perché è legato all'<b>emoglobina</b> (Hb) dei globuli rossi: ogni molecola ha 4 gruppi eme con ferro e può legare 4 O₂ (quasi il 98% dell'ossigeno nel sangue è trasportato così). Il legame è reversibile: Hb + 4 O₂ ⇌ Hb(O₂)₄. Nei polmoni ([O₂] alta) l'equilibrio va verso destra; nei tessuti, dove [O₂] è bassa e abbondano CO₂ e H⁺ (<b>effetto Bohr</b>), l'ossigeno viene rilasciato: un esempio di Le Châtelier che hai già incontrato.</p>
<p>La <b>CO₂</b> viaggia in tre forme: circa il <b>70%</b> come <b>ione bicarbonato</b> (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻, catalizzata dall'enzima <b>anidrasi carbonica</b> nei globuli rossi), circa 20-25% legata all'emoglobina, il resto sciolta. È lo stesso sistema tampone che mantiene il pH del sangue a 7,4: se respiri troppo poco la CO₂ si accumula e il sangue si acidifica; se iperventili la CO₂ cala e il pH sale (per questo si può svenire respirando troppo in fretta).</p>
<p><b>Chi decide quando respirare?</b> Non la mancanza di ossigeno, ma soprattutto l'<b>aumento di CO₂ e di H⁺</b>, rilevato da sensori (<b>chemocettori</b>) vicino al <b>bulbo</b> (nel tronco encefalico). Per questo trattenere il fiato diventa insostenibile prima che l'ossigeno sia davvero basso. Il <b>monossido di carbonio</b> è invece letale perché non produce questa sensazione ed è legato all'emoglobina con un'affinità oltre 200 volte maggiore dell'ossigeno.</p>`
    },
    {
      type: "text",
      title: "L'apparato circolatorio: la pompa e le strade",
      html: `<p>Un uomo adulto ha circa 5 L di sangue (7-8% del peso) che compie un giro completo in circa un minuto. Il sistema è <b>chiuso</b>: il sangue resta sempre dentro i vasi (scoperta di William Harvey nel 1628, con <i>De motu cordis</i>; i capillari furono visti da Malpighi nel 1661). Si compone di cuore, vasi e sangue.</p>
<p><b>Il cuore</b> è un muscolo (miocardio) grosso come un pugno, diviso in <b>quattro camere</b>: due <b>atri</b> (ricevono) e due <b>ventricoli</b> (pompano). Le <b>valvole</b> (tricuspide a destra, mitrale a sinistra, e le semilunari polmonare e aortica) impongono il verso del flusso e producono i toni cardiaci (\"lub-dub\").</p>
<p>La circolazione è <b>doppia e completa</b>:</p>
<ol>
<li><b>Piccola circolazione (polmonare)</b>: ventricolo destro → arterie polmonari (le uniche arterie con sangue povero di O₂) → polmoni → vene polmonari (sangue ossigenato) → atrio sinistro.</li>
<li><b>Grande circolazione (sistemica)</b>: ventricolo sinistro → aorta → arterie → capillari dei tessuti → vene → vene cave → atrio destro.</li>
</ol>
<p>Il lato sinistro, che spinge il sangue in tutto il corpo, ha la parete più spessa. A riposo il cuore batte circa 70 volte al minuto e a ogni battito espelle circa 70 mL: la <b>gittata cardiaca</b> è circa <b>5 L/min</b> (≈ 7000 L al giorno), e può salire a oltre 20-25 L/min in un atleta sotto sforzo. Il battito nasce dal <b>nodo senoatriale</b> (il \"pacemaker\" naturale) nell'atrio destro: cellule muscolari che si depolarizzano spontaneamente, come vedrai nella lezione sul sistema nervoso. L'<b>elettrocardiogramma</b> (ECG) registra questi segnali elettrici.</p>
<p><b>I vasi.</b> Le <b>arterie</b> portano sangue dal cuore, hanno pareti spesse ed elastiche che attutiscono la pulsazione. I <b>capillari</b> (diametro di circa 8 μm, la larghezza di un globulo rosso) hanno la parete spessa una cellula: lì avviene lo scambio con i tessuti. Le <b>vene</b> riportano il sangue al cuore, a bassa pressione, con <b>valvole a nido di rondine</b> e l'aiuto della contrazione dei muscoli. Il sangue rallenta nei capillari perché la loro <b>sezione totale</b> è enorme (come un fiume che entra in una pianura): è il tempo che serve per gli scambi.</p>
<p><b>La pressione arteriosa</b> normale è circa <b>120/80 mmHg</b> (massima o sistolica, durante la contrazione; minima o diastolica, durante il rilasciamento). L'ipertensione cronica affatica il cuore e i vasi.</p>`
    },
    {
      type: "svg",
      title: "Le due circolazioni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="240" y="95" width="120" height="110" rx="30" fill="#fecaca" stroke="#7f1d1d" stroke-width="4"/>
<line x1="300" y1="100" x2="300" y2="200" stroke="#7f1d1d" stroke-width="3"/>
<line x1="245" y1="150" x2="355" y2="150" stroke="#7f1d1d" stroke-width="3"/>
<text x="270" y="130" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">AD</text><text x="330" y="130" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">AS</text>
<text x="270" y="185" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">VD</text><text x="330" y="185" font-size="13" font-weight="bold" fill="#b91c1c" text-anchor="middle">VS</text>
<ellipse cx="300" cy="35" rx="75" ry="22" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/>
<text x="300" y="40" font-size="15" font-weight="bold" fill="#0369a1" text-anchor="middle">POLMONI</text>
<ellipse cx="300" cy="268" rx="130" ry="24" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<text x="300" y="273" font-size="15" font-weight="bold" fill="#92400e" text-anchor="middle">TESSUTI DEL CORPO</text>
<path d="M265 95 C230 70 230 50 235 40" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<path d="M365 40 C375 50 370 70 335 95" fill="none" stroke="#b91c1c" stroke-width="4"/>
<path d="M360 190 C480 200 480 240 430 258" fill="none" stroke="#b91c1c" stroke-width="4"/>
<path d="M175 262 C100 240 90 190 245 185" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<text x="150" y="55" font-size="14" fill="#1d4ed8">sangue povero di O₂</text>
<text x="395" y="55" font-size="14" fill="#b91c1c">sangue ricco di O₂</text>
<text x="490" y="200" font-size="14" fill="#b91c1c" text-anchor="start">arterie</text>
<text x="20" y="215" font-size="14" fill="#1d4ed8">vene cave</text>
</svg>`,
      caption: "Rosso = sangue ossigenato, blu = sangue povero di ossigeno. AD/AS = atrio destro/sinistro; VD/VS = ventricolo destro/sinistro."
    },
    {
      type: "text",
      title: "Il sangue",
      html: `<p>Il sangue è un tessuto connettivo liquido:</p>
<ul>
<li><b>Plasma</b> (≈ 55%): acqua al 90%, con proteine (albumina, fibrinogeno, anticorpi), sali, glucosio, ormoni, scorie.</li>
<li><b>Globuli rossi</b> (eritrociti): 4,5-5,5 milioni per μL, privi di nucleo, a forma di disco biconcavo (più superficie per lo scambio dei gas), pieni di emoglobina; vivono circa 120 giorni e si formano nel <b>midollo osseo</b>.</li>
<li><b>Globuli bianchi</b> (leucociti): 4000-11 000 per μL, la difesa dell'organismo (vedi la lezione successiva).</li>
<li><b>Piastrine</b>: frammenti cellulari (150 000-400 000 per μL), avviano la <b>coagulazione</b>: il fibrinogeno diventa fibrina e forma il tappo che chiude la ferita.</li>
</ul>
<p>Il <b>gruppo sanguigno</b> AB0 (scoperto da Karl Landsteiner nel 1901, Nobel 1930) dipende da antigeni sulla superficie dei globuli rossi; l'<b>Rh</b> è un altro antigene. Chi è AB può ricevere da tutti i gruppi AB0 (nei globuli rossi), chi è 0 negativo può donare a tutti.</p>`
    },
    {
      type: "text",
      title: "L'apparato escretore: il filtro e l'equilibrio",
      html: `<p>Le cellule producono scorie: <b>urea</b> (dal metabolismo degli amminoacidi, sintetizzata dal fegato), <b>acido urico</b>, <b>creatinina</b>. E il sangue deve mantenere costanti acqua, sali e pH. L'apparato urinario assolve entrambi i compiti: due <b>reni</b> (grandi come un pugno, circa 150 g ciascuno), due <b>ureteri</b>, la <b>vescica</b> e l'<b>uretra</b>. I reni ricevono circa il 20-25% della gittata cardiaca.</p>
<p>L'unità funzionale è il <b>nefrone</b> (circa <b>un milione</b> per rene): un <b>glomerulo</b> (gomitolo di capillari) racchiuso nella <b>capsula di Bowman</b>, seguito da un lungo tubulo (prossimale, ansa di Henle, distale) che sbocca nel <b>dotto collettore</b>. Tre processi:</p>
<ol>
<li><b>Filtrazione</b> nel glomerulo: la pressione del sangue spinge acqua e piccole molecole (sali, glucosio, urea, amminoacidi) nel tubulo, trattenendo cellule e proteine grandi. Si filtrano circa <b>125 mL al minuto</b>, cioè circa <b>180 L al giorno</b> (il volume del plasma viene filtrato circa 60 volte!).</li>
<li><b>Riassorbimento</b> nel tubulo: oltre il <b>99%</b> dell'acqua e quasi tutto il glucosio e gli amminoacidi tornano al sangue (con trasporto attivo e osmosi). Nell'<b>ansa di Henle</b> si crea un gradiente di concentrazione che permette di produrre urina concentrata.</li>
<li><b>Secrezione</b>: ioni H⁺, K⁺, alcuni farmaci passano dal sangue al tubulo.</li>
</ol>
<p>Risultato: <b>1-2 litri di urina al giorno</b>, ricca di urea e sali. Se nelle urine compare glucosio vuol dire che il riassorbimento è saturo: è un indizio di <b>diabete</b>. Se compaiono proteine, il glomerulo è danneggiato.</p>
<p>I reni sono tra i principali regolatori dell'omeostasi: modulano l'acqua (sotto il controllo dell'<b>ormone antidiuretico ADH</b>), eliminano H⁺ e rigenerano bicarbonato per tenere il pH del sangue a 7,4, producono l'<b>eritropoietina</b> (che stimola il midollo a fare globuli rossi) e attivano la vitamina D. Se falliscono, la <b>dialisi</b> filtra il sangue con una membrana artificiale per via osmotica e di diffusione.</p>`
    },
    {
      type: "example",
      title: "Quanti litri filtrano i reni?",
      html: `<p>Un nefrone filtra molto di più di quanto urina: <b>125 mL/min</b> di filtrato, ma di urina se ne produce circa 1 mL/min. Calcoliamo:</p>
<ol>
<li>Filtrato al giorno: 125 mL/min · 1440 min = 180 000 mL = <b>180 L</b>.</li>
<li>Urina al giorno: circa 1,5 L.</li>
<li>Frazione riassorbita: (180 − 1,5)/180 ≈ <b>99,2%</b>.</li>
</ol>
<p>Se non ci fosse riassorbimento dovresti bere ben 180 litri al giorno per non disidratarti. Il rene non \"produce\" l'urina: <b>filtra tutto e poi recupera quasi tutto</b>, conservando solo ciò che non serve o che è in eccesso.</p>`
    },
    {
      type: "example",
      title: "Il viaggio di un panino",
      html: `<p>Mangi un panino con prosciutto e un po' d'olio. Che cosa succede alle sue molecole?</p>
<ol>
<li><b>Bocca</b>: l'amilasi inizia a scindere l'amido del pane.</li>
<li><b>Stomaco</b>: l'acido e la pepsina cominciano a spezzare le proteine del prosciutto.</li>
<li><b>Duodeno</b>: la bile emulsiona l'olio; amilasi, tripsina e lipasi pancreatiche completano la digestione.</li>
<li><b>Intestino tenue</b>: glucosio e amminoacidi passano nei capillari dei villi e vanno al fegato con la vena porta; i grassi, ricomposti in chilomicroni, entrano nei chiliferi.</li>
<li><b>Sangue</b>: porta il glucosio alle cellule, che lo ossidano con l'O&#8322; arrivato dai polmoni producendo CO&#8322;, rimandata nei polmoni; l'urea derivata dagli amminoacidi è filtrata dai reni.</li>
</ol>
<p>In poche ore, il panino ha coinvolto tutti e quattro gli apparati.</p>`
    },
    {
      type: "widget",
      title: "Abbina organo e funzione",
      widget: "match",
      options: {
        pairs: [
          ["Alveolo", "scambio di O₂ e CO₂ con il sangue"],
          ["Villo intestinale", "assorbimento dei nutrienti"],
          ["Nodo senoatriale", "pacemaker del cuore"],
          ["Glomerulo", "filtrazione del sangue"],
          ["Globulo rosso", "trasporto dell'ossigeno con l'emoglobina"],
          ["Fegato", "produce la bile e trasforma le sostanze tossiche"]
        ]
      },
      caption: "Ogni struttura risolve un problema fisico: superficie, pressione, trasporto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: respiro, cuore e reni",
      questions: [
        { type: "mc", q: "Quale dei seguenti vasi porta sangue povero di ossigeno?", options: ["Arteria polmonare", "Vena polmonare", "Aorta", "Arteria coronaria"], answer: 0, explain: "L'arteria polmonare porta sangue dal ventricolo destro ai polmoni, dove si ossigenerà: è l'unica arteria (con il suo gemello) che trasporta sangue povero di O₂." },
        { type: "num", q: "Se un cuore batte 70 volte/min e a ogni battito espelle 70 mL, quanti litri al minuto pompa (circa)?", answer: 4.9, tol: 0.1, unit: "L/min", explain: "70 · 70 mL = 4900 mL = 4,9 L/min." },
        { type: "tf", q: "Il riassorbimento nel nefrone recupera più del 99% dell'acqua filtrata.", answer: true, explain: "Su circa 180 L filtrati al giorno si producono solo 1-2 L di urina." }
      ]
    },
    {
      type: "remember",
      title: "Le idee da portare via",
      html: `<ul>
<li>Ogni apparato risolve un <b>problema fisico</b>: superficie (villi, alveoli), pressione (diaframma, cuore), gradienti (diffusione, osmosi).</li>
<li><b>Digestione</b>: meccanica + chimica; assorbimento nel tenue; il fegato sta tra l'intestino e il resto del corpo.</li>
<li><b>Respirazione</b>: la legge di Boyle muove l'aria; l'emoglobina trasporta O₂; la CO₂ è soprattutto bicarbonato (tampone).</li>
<li><b>Cuore</b>: 4 camere, doppia circolazione; sinistra = grande circolazione.</li>
<li><b>Rene</b>: filtra 180 L/giorno e ne riassorbe il 99%; regola acqua, sali e pH.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli apparati",
      intro: "Collega ogni apparato a un'idea che già conosci.",
      tabs: [
        { label: "🏭 La fabbrica", html: "<p>Il corpo è una fabbrica: l'<b>apparato digerente</b> è il reparto che scompone le materie prime in componenti; il <b>respiratorio</b> è l'ingresso del combustibile (O₂) e l'uscita dei fumi (CO₂); il <b>circolatorio</b> è la rete dei camion (il sangue) e delle strade (i vasi), con il cuore che è la stazione di pompaggio; l'<b>escretore</b> è l'ufficio che controlla i rifiuti e le giacenze e li smaltisce.</p>" },
        { label: "🏞️ Il fiume e la pianura", html: "<p>Perché il sangue rallenta nei capillari? Un fiume stretto e profondo è veloce; quando si apre in una pianura e si divide in mille canali scorre lentissimo. L'aorta è il fiume, i capillari (milioni, con una sezione totale enorme) sono la pianura: nel rallentamento il sangue ha il tempo per scambiare gas e nutrienti. Nelle vene il sangue si riunisce e riaccelera.</p>" },
        { label: "🎈 Boyle in tasca", html: "<p>Prova con una siringa senza ago: tira lo stantuffo (aumenti il volume), la pressione scende e l'aria entra. È la respirazione: il diaframma è lo stantuffo. Se tappi la punta, tirare è faticoso: ecco cosa avviene in chi ha un'ostruzione delle vie aeree. E se la parete toracica viene perforata, il polmone non segue più il torace (pneumotorace).</p>" },
        { label: "☕ Il filtro del caffè", html: "<p>Il glomerulo è un filtro del caffè sotto pressione: lascia passare l'acqua e le molecole piccole (il \"caffè\") e trattiene le cellule e le proteine (i \"fondi\"). Poi il tubulo recupera le cose preziose (glucosio, acqua, sali) e lascia andare il resto. Il rene fa il contrario di una colatrice: filtra tutto e <b>ricompra</b> quasi tutto.</p>" }
      ]
    },
    {
      type: "curiosity",
      title: "Lo stomaco non digerisce se stesso: la scoperta di Helicobacter",
      html: `<p>Come fa lo stomaco a non autodigerirsi? Il muco alcalino e le cellule rinnovate ogni pochi giorni. Per decenni si pensò che le ulcere fossero causate dallo stress e dall'acidità, finché nel 1982 due medici australiani, <b>Barry Marshall e Robin Warren</b>, dimostrarono che la causa è un batterio, <i>Helicobacter pylori</i>, capace di sopravvivere nell'acido neutralizzandolo localmente con l'enzima ureasi (produce ammoniaca). Marshall arrivò a bere una coltura del batterio per provarlo: sviluppò una gastrite. Oggi le ulcere si curano con antibiotici. Nobel per la medicina nel 2005.</p>`
    },
    {
      type: "curiosity",
      title: "Il cuore e i numeri di una vita",
      html: `<p>Con circa 70 battiti al minuto, in 80 anni il cuore compie quasi <b>3 miliardi di battiti</b> e pompa circa 200 milioni di litri di sangue. I vasi sanguigni, messi uno dietro l'altro, sarebbero lunghi, secondo le stime classiche, circa 100 000 km (due volte e mezzo il giro della Terra). I reni filtrano un volume pari a quello del plasma circa 60 volte al giorno. E in un minuto un globulo rosso ha il tempo di fare l'intero giro del corpo.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: gli apparati di scambio",
      nodes: [
        { id: "dig", label: "Digerente", x: 15, y: 15, color: "#f59e0b", html: "Scompone il cibo e assorbe i nutrienti nell'intestino tenue.", why: "William Beaumont (1822-33) osservò la digestione direttamente attraverso la fistola gastrica di un paziente, Alexis St. Martin, e dimostrò che era chimica, non solo meccanica. Pavlov (Nobel 1904) ne studiò i riflessi." },
        { id: "res", label: "Respiratorio", x: 50, y: 12, color: "#0ea5e9", html: "Ventilazione e scambio gassoso negli alveoli.", why: "Lavoisier (1777-1789) mostrò che la respirazione è una combustione lenta, che consuma ossigeno e produce CO₂; Boyle (1662) aveva formulato la legge di compressione dei gas." },
        { id: "cir", label: "Circolatorio", x: 85, y: 15, color: "#dc2626", html: "Il cuore pompa il sangue in doppio circuito.", why: "Harvey (1628) calcolò che il cuore pompa più sangue di quanto il fegato ne possa produrre e dedusse che il sangue deve circolare. Malpighi (1661) osservò i capillari, completando il circuito." },
        { id: "esc", label: "Escretore", x: 50, y: 85, color: "#16a34a", html: "I reni filtrano il sangue e regolano acqua, sali e pH.", why: "Carl Ludwig (1844) e poi Richards (1920-30) spiegarono la filtrazione glomerulare e il riassorbimento, direttamente misurando la pressione e raccogliendo il filtrato con micropipette." },
        { id: "omeo", label: "Omeostasi", x: 50, y: 48, color: "#a855f7", html: "Mantenere costante l'ambiente interno.", why: "Claude Bernard (1865) parlò di \"milieu intérieur\", Walter Cannon (1932) coniò la parola omeostasi: i quattro apparati sono i principali strumenti con cui il corpo la ottiene." }
      ],
      edges: [["dig", "cir", "i nutrienti vanno nel"], ["res", "cir", "O₂ e CO₂ viaggiano nel"], ["cir", "esc", "porta il sangue al"], ["dig", "omeo", "contribuisce all'"], ["res", "omeo", "contribuisce all'"], ["esc", "omeo", "contribuisce all'"]]
    }
  ],
  glossary: [
    { t: "Peristalsi", d: "Onde di contrazione dei muscoli lisci che spingono il contenuto lungo un tubo, come l'esofago." },
    { t: "Villi intestinali", d: "Sporgenze della mucosa dell'intestino tenue che aumentano la superficie di assorbimento." },
    { t: "Bile", d: "Liquido prodotto dal fegato che emulsiona i grassi; non contiene enzimi digestivi." },
    { t: "Alveolo", d: "Sacchetto dei polmoni in cui avviene lo scambio dei gas con i capillari." },
    { t: "Diaframma", d: "Muscolo a cupola sotto i polmoni, principale muscolo dell'inspirazione." },
    { t: "Emoglobina", d: "Proteina dei globuli rossi con quattro gruppi eme che legano l'ossigeno." },
    { t: "Gittata cardiaca", d: "Volume di sangue pompato da un ventricolo in un minuto (≈ 5 L/min a riposo)." },
    { t: "Circolazione doppia", d: "Il sangue passa due volte nel cuore per ogni giro: piccola (polmonare) e grande (sistemica) circolazione." },
    { t: "Capillare", d: "Vaso sottilissimo con parete di una cellula, sede degli scambi con i tessuti." },
    { t: "Nefrone", d: "Unità funzionale del rene: glomerulo, capsula di Bowman e tubulo." },
    { t: "Filtrazione glomerulare", d: "Passaggio di acqua e piccole molecole dal sangue al nefrone sotto pressione (circa 125 mL/min)." },
    { t: "Riassorbimento", d: "Recupero nel sangue di acqua e sostanze utili dal filtrato." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dove avviene la maggior parte dell'assorbimento dei nutrienti?", options: ["Intestino tenue", "Stomaco", "Esofago", "Intestino crasso"], answer: 0, explain: "L'intestino tenue ha villi e microvilli che ne moltiplicano la superficie fino a circa 30 m²." },
      { type: "mc", q: "Che funzione ha il bicarbonato nel succo pancreatico?", options: ["Neutralizza l'acido gastrico che arriva nel duodeno", "Digerisce le proteine", "Emulsiona i grassi", "Produce la bile"], answer: 0, explain: "Il duodeno deve avere pH vicino alla neutralità perché gli enzimi pancreatici lavorano bene a quel pH." },
      { type: "mc", q: "Durante l'inspirazione, il diaframma...", options: ["si contrae e si abbassa, aumentando il volume toracico", "si rilascia e sale", "non si muove", "si contrae e riduce il volume toracico"], answer: 0, explain: "Il volume aumenta, la pressione nei polmoni cala (Boyle) e l'aria entra." },
      { type: "tf", q: "Il pH del sangue è mantenuto anche dal sistema tampone acido carbonico/bicarbonato.", answer: true, explain: "La CO₂ trasportata come bicarbonato è il principale tampone ematico." },
      { type: "mc", q: "Quale camera del cuore pompa il sangue ossigenato in tutto il corpo?", options: ["Ventricolo sinistro", "Ventricolo destro", "Atrio destro", "Atrio sinistro"], answer: 0, explain: "Il ventricolo sinistro spinge il sangue nell'aorta (grande circolazione) ed è il più muscoloso." },
      { type: "num", q: "Una persona ha una frequenza cardiaca di 60 battiti/min e una gittata sistolica di 80 mL. Quanti L/min pompa?", answer: 4.8, tol: 0.05, unit: "L/min", explain: "60 · 80 mL = 4800 mL = 4,8 L/min." },
      { type: "mc", q: "Quale componente del sangue è responsabile della coagulazione?", options: ["Piastrine", "Globuli rossi", "Globuli bianchi", "Albumina soltanto"], answer: 0, explain: "Le piastrine avviano la formazione del tappo e della rete di fibrina." },
      { type: "num", q: "Se il filtrato glomerulare è 180 L/giorno e si producono 1,8 L di urina, che percentuale di acqua è riassorbita?", answer: 99, tol: 0.1, unit: "%", explain: "(180 − 1,8)/180 = 0,99 → 99%." },
      { type: "tf", q: "Il rene produce l'urina prima filtrando una piccola quantità di sangue e poi eliminando tutto ciò che è stato filtrato.", answer: false, explain: "Il rene filtra molto (180 L/giorno) e poi riassorbe quasi tutto: elimina solo l'1% circa." },
      { type: "order", q: "Metti in ordine il percorso di una molecola di O₂ dall'aria alle cellule.", items: ["Trachea", "Bronchioli", "Alveolo", "Emoglobina nel capillare", "Cellula del tessuto"], explain: "L'aria passa trachea → bronchi → bronchioli → alveoli, poi diffonde nel sangue legandosi all'emoglobina e infine ai tessuti." }
    ]
  }
});

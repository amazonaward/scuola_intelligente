TOPIC('it', {
  id: "m2-sci-apparato-circolatorio",
  title: "L'apparato circolatorio",
  intro: "Ogni giorno il tuo cuore batte circa <b>100 000 volte</b> e spinge il sangue in una rete di vasi lunga quasi <b>100 000 km</b>. L'<b>apparato circolatorio</b> è il sistema di trasporto del corpo: porta ossigeno e nutrienti a ogni cellula e ne porta via i rifiuti.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. A che cosa serve",
      html: `<p>Il nostro corpo è fatto di circa <b>30 000 miliardi di cellule</b>. Ognuna ha bisogno di <b>ossigeno</b> e <b>sostanze nutritive</b> e produce <b>anidride carbonica</b> e altre scorie. L'apparato circolatorio è il "servizio di consegne" che collega tutte le cellule con:</p>
<ul>
<li>i <b>polmoni</b> (dove il sangue prende O<sub>2</sub> e lascia CO<sub>2</sub>);</li>
<li>l'<b>intestino</b> (dove raccoglie i nutrienti);</li>
<li>i <b>reni</b> (che filtrano le scorie);</li>
<li>le <b>ghiandole</b> (di cui trasporta gli ormoni).</li>
</ul>
<p>Inoltre <b>difende</b> il corpo dalle infezioni (globuli bianchi), <b>ripara</b> le ferite (piastrine) e <b>distribuisce il calore</b>, mantenendo la temperatura intorno ai 37 °C.</p>
<p>È formato da tre componenti: il <b>cuore</b> (la pompa), i <b>vasi sanguigni</b> (i tubi) e il <b>sangue</b> (il liquido che trasporta).</p>`
    },
    {
      type: "text",
      title: "2. Il sangue",
      html: `<p>Un adulto ha circa <b>5 litri</b> di sangue (circa il 7–8% del peso corporeo). Se lo lasci riposare in una provetta con un anticoagulante, si separa in due parti:</p>
<ul>
<li><b>Plasma</b> (circa 55%): liquido giallo chiaro fatto al 90% d'acqua, con sali minerali, zuccheri, proteine, ormoni e CO<sub>2</sub> disciolta.</li>
<li><b>Parte corpuscolata</b> (circa 45%):
<ul>
<li><b>globuli rossi</b> (eritrociti): circa 5 milioni per mm³. Sono dischetti senza nucleo, pieni di <b>emoglobina</b>, una proteina contenente <b>ferro</b> che lega l'ossigeno e dà il colore rosso. Vivono circa <b>120 giorni</b>;</li>
<li><b>globuli bianchi</b> (leucociti): 5 000–10 000 per mm³. Difendono dai microbi, alcuni "mangiandoli" (fagocitosi), altri producendo <b>anticorpi</b>;</li>
<li><b>piastrine</b> (trombociti): frammenti di cellule che, quando un vaso si rompe, formano un tappo e avviano la <b>coagulazione</b>.</li>
</ul></li>
</ul>
<p>Tutte le cellule del sangue nascono nel <b>midollo osseo rosso</b>, all'interno delle ossa piatte e delle estremità delle ossa lunghe.</p>`
    },
    {
      type: "svg",
      title: "Il sangue in una provetta",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fff7ed"/>
<path d="M90 30 L90 270 Q90 300 120 300 Q150 300 150 270 L150 30" fill="#ffffff" stroke="#475569" stroke-width="4"/>
<rect x="92" y="60" width="56" height="110" fill="#fde68a"/>
<rect x="92" y="170" width="56" height="6" fill="#f1f5f9"/>
<path d="M92 176 L92 270 Q92 298 120 298 Q148 298 148 270 L148 176 Z" fill="#b91c1c"/>
<line x1="155" y1="115" x2="200" y2="115" stroke="#92400e" stroke-width="2"/>
<text x="205" y="110" font-size="17" fill="#92400e" font-weight="bold">Plasma ≈ 55%</text>
<text x="205" y="132" font-size="15" fill="#92400e">acqua, sali, zuccheri, proteine</text>
<line x1="155" y1="173" x2="200" y2="173" stroke="#475569" stroke-width="2"/>
<text x="205" y="178" font-size="15" fill="#475569">globuli bianchi e piastrine (&lt;1%)</text>
<line x1="155" y1="240" x2="200" y2="240" stroke="#991b1b" stroke-width="2"/>
<text x="205" y="236" font-size="17" fill="#991b1b" font-weight="bold">Globuli rossi ≈ 45%</text>
<ellipse cx="490" cy="70" rx="40" ry="22" fill="#ef4444"/><ellipse cx="490" cy="70" rx="18" ry="9" fill="#b91c1c"/>
<text x="490" y="115" font-size="15" text-anchor="middle" fill="#991b1b">globulo rosso</text>
<circle cx="490" cy="170" r="30" fill="#e0e7ff" stroke="#6366f1" stroke-width="3"/><path d="M475 165 q8 -14 18 0 q10 14 18 -2" fill="none" stroke="#4338ca" stroke-width="6"/>
<text x="490" y="222" font-size="15" text-anchor="middle" fill="#4338ca">globulo bianco</text>
<circle cx="470" cy="270" r="7" fill="#c084fc"/><circle cx="492" cy="262" r="6" fill="#c084fc"/><circle cx="510" cy="274" r="7" fill="#c084fc"/>
<text x="490" y="305" font-size="15" text-anchor="middle" fill="#7e22ce">piastrine</text>
</svg>`,
      caption: "Centrifugando il sangue i componenti si separano per densità: i globuli rossi, più pesanti, vanno sul fondo."
    },
    {
      type: "text",
      title: "3. Il cuore: una pompa doppia",
      html: `<p>Il <b>cuore</b> è un muscolo cavo grande circa come un <b>pugno chiuso</b> (circa 300 g), posto nel torace fra i due polmoni, leggermente spostato a sinistra. È fatto di un tessuto speciale, il <b>miocardio</b>, che si contrae da solo e non si stanca mai. È avvolto da una membrana, il <b>pericardio</b>.</p>
<p>All'interno è diviso in <b>4 cavità</b>:</p>
<ul>
<li>2 <b>atri</b> in alto (destro e sinistro), che <b>ricevono</b> il sangue;</li>
<li>2 <b>ventricoli</b> in basso (destro e sinistro), che lo <b>spingono</b> fuori. Le pareti del ventricolo sinistro sono le più spesse, perché deve spingere il sangue in tutto il corpo.</li>
</ul>
<p>Il cuore destro e il cuore sinistro <b>non comunicano</b> fra loro (sono separati dal <b>setto</b>): a destra passa solo sangue povero di ossigeno, a sinistra solo sangue ricco di ossigeno.</p>
<p>Fra atri e ventricoli e all'uscita dei ventricoli ci sono le <b>valvole</b> (tricuspide, mitrale o bicuspide, polmonare, aortica), che si aprono in un solo verso e impediscono al sangue di tornare indietro. Il loro chiudersi produce il "tu-tum" del battito.</p>
<p>Il ciclo cardiaco ha due fasi: <b>sistole</b> (contrazione) e <b>diastole</b> (rilassamento). A riposo il cuore batte circa <b>60–100 volte al minuto</b> e pompa circa <b>5 litri al minuto</b>.</p>`
    },
    {
      type: "widget",
      title: "Le parti del cuore",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="380" fill="#fef2f2"/>
<path d="M300 360 C150 280 110 200 130 130 C150 70 230 60 300 110 C370 60 450 70 470 130 C490 200 450 280 300 360 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<rect x="150" y="120" width="130" height="80" rx="20" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="320" y="120" width="130" height="80" rx="20" fill="#f87171" stroke="#7f1d1d" stroke-width="3"/>
<path d="M160 215 L285 215 L285 310 C220 290 175 255 160 215 Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
<path d="M315 215 L440 215 C425 255 380 300 315 330 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
<rect x="290" y="115" width="20" height="230" fill="#7f1d1d"/>
<path d="M330 120 C330 40 420 30 430 80" fill="none" stroke="#dc2626" stroke-width="26"/>
<path d="M180 120 L180 20" stroke="#2563eb" stroke-width="24"/>
<path d="M250 120 C250 60 200 50 160 60" fill="none" stroke="#7c3aed" stroke-width="18"/>
<rect x="190" y="205" width="60" height="10" fill="#fbbf24"/>
<rect x="350" y="205" width="60" height="10" fill="#fbbf24"/>
</svg>`,
        spots: [
          { x: 215, y: 160, label: "Atrio destro" },
          { x: 385, y: 160, label: "Atrio sinistro" },
          { x: 230, y: 265, label: "Ventricolo destro" },
          { x: 375, y: 265, label: "Ventricolo sinistro" },
          { x: 300, y: 240, label: "Setto" },
          { x: 400, y: 50, label: "Aorta" },
          { x: 180, y: 40, label: "Vena cava" },
          { x: 380, y: 210, label: "Valvola mitrale" }
        ]
      },
      caption: "Attenzione: nelle illustrazioni mediche il cuore si disegna come se guardassi una persona di fronte, quindi la sua destra è alla TUA sinistra. Blu = sangue povero di O₂, rosso = ricco di O₂."
    },
    {
      type: "quiz",
      title: "Mini-quiz: sangue e cuore",
      questions: [
        { type: "mc", q: "Quale componente del sangue trasporta l'ossigeno?", options: ["Piastrine", "Globuli rossi", "Globuli bianchi", "Plasma"], answer: 1, explain: "I globuli rossi contengono emoglobina, che lega l'ossigeno." },
        { type: "num", q: "Quante cavità ha il cuore umano?", answer: 4, explain: "Due atri e due ventricoli." },
        { type: "tf", q: "Nel cuore il sangue del lato destro si mescola con quello del lato sinistro.", answer: false, explain: "Il setto li separa: a destra sangue povero di O₂, a sinistra ricco di O₂." },
        { type: "text", q: "Come si chiama la fase in cui il cuore si contrae?", answer: ["sistole", "la sistole"], explain: "Sistole = contrazione; diastole = rilassamento." }
      ]
    },
    {
      type: "text",
      title: "4. I vasi sanguigni",
      html: `<p>Il sangue scorre in tre tipi di vasi:</p>
<table>
<tr><th>Vaso</th><th>Direzione</th><th>Caratteristiche</th></tr>
<tr><td><b>Arterie</b></td><td>dal cuore → agli organi</td><td>pareti spesse ed elastiche (tre strati, con muscolo) perché il sangue esce dal cuore ad alta pressione; pulsano (è il <b>polso</b>). La più grande è l'<b>aorta</b> (circa 2,5 cm di diametro).</td></tr>
<tr><td><b>Capillari</b></td><td>collegano arterie e vene</td><td>sottilissimi (circa 8 millesimi di mm, ci passa un globulo rosso alla volta) con pareti di <b>un solo strato di cellule</b>: qui avvengono gli <b>scambi</b> di gas, nutrienti e scorie.</td></tr>
<tr><td><b>Vene</b></td><td>dagli organi → al cuore</td><td>pareti più sottili, pressione bassa; hanno <b>valvole a nido di rondine</b> che impediscono al sangue di tornare indietro (soprattutto nelle gambe). Le più grandi sono le <b>vene cave</b>.</td></tr>
</table>
<p><b>Attenzione:</b> non è vero che le arterie trasportano sempre sangue ossigenato! Si chiamano arterie tutti i vasi che <b>escono</b> dal cuore. Le <b>arterie polmonari</b> portano sangue povero di O<sub>2</sub> ai polmoni, mentre le <b>vene polmonari</b> portano al cuore sangue ricco di O<sub>2</sub>.</p>`
    },
    {
      type: "3d",
      title: "Sezione 3D di un'arteria",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fcd34d", label: "Tonaca esterna (tessuto connettivo)" },
          { r: 0.8, color: "#f87171", label: "Tonaca media (muscolo liscio ed elastico)" },
          { r: 0.55, color: "#fbcfe8", label: "Tonaca interna (endotelio)" },
          { r: 0.45, color: "#b91c1c", label: "Lume: il sangue" }
        ]
      },
      caption: "Ruota il modello: le arterie hanno una tonaca media spessa e muscolosa che resiste alla pressione. Nelle vene è molto più sottile; nei capillari resta solo l'endotelio."
    },
    {
      type: "text",
      title: "5. La doppia circolazione",
      html: `<p>Il sangue fa un percorso a forma di "8", passando due volte dal cuore: per questo si parla di circolazione <b>doppia</b>, <b>chiusa</b> (il sangue resta sempre nei vasi) e <b>completa</b> (sangue ossigenato e non ossigenato non si mescolano).</p>
<p><b>Piccola circolazione</b> (polmonare): <br>ventricolo destro → arterie polmonari → capillari dei polmoni (il sangue lascia CO<sub>2</sub> e prende O<sub>2</sub>) → vene polmonari → <b>atrio sinistro</b>.</p>
<p><b>Grande circolazione</b> (sistemica): <br>ventricolo sinistro → aorta → arterie → capillari di tutti gli organi (il sangue cede O<sub>2</sub> e nutrienti, raccoglie CO<sub>2</sub> e scorie) → vene → vene cave → <b>atrio destro</b>.</p>
<p>Un giro completo dura meno di <b>un minuto</b>. Il cuore stesso è nutrito da arterie speciali, le <b>coronarie</b>: se una si chiude, una parte del miocardio resta senza ossigeno (è l'<b>infarto</b>).</p>`
    },
    {
      type: "svg",
      title: "Il percorso del sangue: un 8",
      svg: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="360" fill="#f8fafc"/>
<rect x="200" y="20" width="200" height="60" rx="25" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<text x="300" y="58" font-size="19" text-anchor="middle" fill="#831843" font-weight="bold">Polmoni 🫁</text>
<rect x="200" y="280" width="200" height="60" rx="25" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="300" y="318" font-size="19" text-anchor="middle" fill="#78350f" font-weight="bold">Organi del corpo</text>
<rect x="230" y="140" width="70" height="80" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="300" y="140" width="70" height="80" fill="#f87171" stroke="#7f1d1d" stroke-width="3"/>
<text x="265" y="185" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">cuore</text>
<text x="335" y="185" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">cuore</text>
<text x="265" y="205" font-size="14" text-anchor="middle" fill="#fff">destro</text>
<text x="335" y="205" font-size="14" text-anchor="middle" fill="#fff">sinistro</text>
<path d="M250 140 C190 120 170 90 200 60" fill="none" stroke="#2563eb" stroke-width="10"/>
<polygon points="190,62 208,45 214,68" fill="#2563eb"/>
<path d="M400 50 C440 80 420 120 350 140" fill="none" stroke="#dc2626" stroke-width="10"/>
<polygon points="360,128 340,142 362,152" fill="#dc2626"/>
<path d="M350 220 C430 240 440 280 400 300" fill="none" stroke="#dc2626" stroke-width="10"/>
<polygon points="412,292 392,310 392,288" fill="#dc2626"/>
<path d="M200 310 C150 280 160 240 250 220" fill="none" stroke="#2563eb" stroke-width="10"/>
<polygon points="240,212 262,220 242,232" fill="#2563eb"/>
<text x="20" y="100" font-size="15" fill="#1d4ed8">arterie polmonari</text>
<text x="440" y="100" font-size="15" fill="#b91c1c">vene polmonari</text>
<text x="450" y="260" font-size="15" fill="#b91c1c">aorta</text>
<text x="30" y="270" font-size="15" fill="#1d4ed8">vene cave</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#334155">piccola circolazione ↑</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#334155">grande circolazione ↓</text>
</svg>`,
      caption: "Rosso = sangue ricco di ossigeno; blu = povero di ossigeno (in realtà è rosso scuro, non blu!)."
    },
    {
      type: "widget",
      title: "Metti in ordine il viaggio del sangue",
      widget: "match",
      options: {
        pairs: [
          ["Ventricolo destro", "spinge il sangue nelle arterie polmonari"],
          ["Capillari polmonari", "scambio: entra O₂, esce CO₂"],
          ["Vene polmonari", "riportano sangue ossigenato all'atrio sinistro"],
          ["Ventricolo sinistro", "spinge il sangue nell'aorta"],
          ["Capillari degli organi", "cedono O₂ e nutrienti alle cellule"],
          ["Vene cave", "riportano sangue povero di O₂ all'atrio destro"]
        ]
      },
      caption: "Abbina ogni tappa a quello che succede."
    },
    {
      type: "example",
      title: "Esempio pratico: misura il tuo polso",
      html: `<p>Appoggia indice e medio sul lato interno del polso, dalla parte del pollice (arteria radiale), oppure sul collo accanto alla trachea (arteria carotide). Conta i battiti per <b>15 secondi</b> e moltiplica per 4.</p>
<p>Esempio: 20 battiti in 15 s → 20 × 4 = <b>80 battiti al minuto</b>.</p>
<p>Ora fai 30 saltelli e misura di nuovo: la frequenza sale (magari a 130), perché i muscoli in movimento chiedono più ossigeno. Poi aspetta 2 minuti: più sei allenato, più velocemente il battito torna normale.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: i gruppi sanguigni e la trasfusione",
      html: `<p>Nel <b>1901</b> il medico austriaco <b>Karl Landsteiner</b> scoprì che il sangue umano appartiene a gruppi diversi: <b>A, B, AB e 0</b>, a seconda delle molecole (antigeni) presenti sui globuli rossi. Esiste poi il fattore <b>Rh</b> (positivo o negativo).</p>
<ul>
<li>Il gruppo <b>0 negativo</b> è il "donatore universale" per i globuli rossi: si usa nelle emergenze.</li>
<li>Il gruppo <b>AB positivo</b> è il "ricevente universale".</li>
</ul>
<p>Prima di questa scoperta le trasfusioni spesso uccidevano il paziente. In Italia si può donare il sangue dai <b>18 anni</b>: una sacca da 450 ml può aiutare fino a tre persone.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la circolazione",
      intro: "Se i nomi di atri e ventricoli ti confondono, prova con queste immagini.",
      tabs: [
        {
          label: "🚚 La città e i camion",
          html: `<p>Immagina il corpo come una grande <b>città</b>:</p>
<ul>
<li>il <b>cuore</b> è il centro logistico con due reparti che non si mescolano;</li>
<li>i <b>globuli rossi</b> sono i <b>camion</b> che portano ossigeno (la merce);</li>
<li>le <b>arterie</b> sono le autostrade in uscita, le <b>vene</b> le strade di ritorno;</li>
<li>i <b>capillari</b> sono i vialetti davanti a ogni casa, dove si scarica la merce e si caricano i rifiuti;</li>
<li>i <b>polmoni</b> sono il magazzino dove si fa il pieno di ossigeno e si scarica la CO<sub>2</sub>;</li>
<li>i <b>globuli bianchi</b> sono la polizia, le <b>piastrine</b> la squadra che ripara le buche.</li>
</ul>`
        },
        {
          label: "💧 Le due pompe del giardino",
          html: `<p>In Inghilterra e in Germania si insegna spesso il cuore come <b>due pompe affiancate</b>:</p>
<ul>
<li>la pompa <b>destra</b> manda l'acqua a un piccolo giardino vicino (i polmoni): serve poca pressione, quindi è meno muscolosa;</li>
<li>la pompa <b>sinistra</b> deve mandarla fino in fondo a un grande parco (tutto il corpo, dalla testa ai piedi): serve molta pressione, per questo il ventricolo sinistro ha una parete circa <b>3 volte più spessa</b>.</li>
</ul>
<p>Le valvole sono come le <b>porte girevoli</b> di un supermercato: girano in un solo senso.</p>`
        },
        {
          label: "🧪 Il ferro che cattura l'ossigeno",
          html: `<p>Perché il sangue è rosso? Per l'<b>emoglobina</b>: ogni molecola contiene 4 atomi di <b>ferro</b>, e ogni ferro può legare una molecola di <b>ossigeno O<sub>2</sub></b> (due atomi di ossigeno uniti). Nei polmoni l'O<sub>2</sub> si attacca, nei tessuti si stacca. Qui vedi la molecola di O<sub>2</sub> e una di CO<sub>2</sub>, il gas che il sangue riporta indietro. Un globulo rosso contiene circa <b>270 milioni</b> di molecole di emoglobina!</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: -2.6, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" },
              { x: -1.4, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" },
              { x: 1.0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" },
              { x: 2.2, y: 0, z: 0, r: 0.45, color: "#334155", label: "C" },
              { x: 3.4, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }
            ],
            bonds: [[0, 1], [2, 3], [3, 4]]
          }
        },
        {
          label: "🎨 Il circuito in pianta",
          html: `<p>Disegna un circuito come quelli delle macchinine: due anelli che si toccano al centro (il cuore). L'anello piccolo in alto passa dai polmoni, quello grande in basso da tutto il corpo. Colora di <b>rosso</b> i tratti dopo i polmoni e di <b>blu</b> quelli dopo gli organi: vedrai che a sinistra del cuore arriva sempre il rosso e a destra il blu.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f1f5f9"/>
<ellipse cx="300" cy="70" rx="120" ry="50" fill="none" stroke="#a855f7" stroke-width="10"/>
<ellipse cx="300" cy="185" rx="230" ry="60" fill="none" stroke="#a855f7" stroke-width="10"/>
<path d="M180 70 A120 50 0 0 1 300 20" fill="none" stroke="#2563eb" stroke-width="10"/>
<path d="M300 20 A120 50 0 0 1 420 70" fill="none" stroke="#dc2626" stroke-width="10"/>
<path d="M70 185 A230 60 0 0 1 300 125" fill="none" stroke="#2563eb" stroke-width="10"/>
<path d="M300 125 A230 60 0 0 1 530 185" fill="none" stroke="#dc2626" stroke-width="10"/>
<path d="M70 185 A230 60 0 0 0 300 245" fill="none" stroke="#2563eb" stroke-width="10"/>
<path d="M300 245 A230 60 0 0 0 530 185" fill="none" stroke="#dc2626" stroke-width="10"/>
<circle cx="300" cy="125" r="28" fill="#f43f5e"/>
<text x="300" y="131" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">❤️</text>
<text x="300" y="75" font-size="17" text-anchor="middle" fill="#6b21a8" font-weight="bold">polmoni</text>
<text x="300" y="215" font-size="17" text-anchor="middle" fill="#6b21a8" font-weight="bold">tutto il corpo</text>
</svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? William Harvey e il sangue che gira",
      html: `<p>Per circa 1400 anni si credette, con il medico greco <b>Galeno</b>, che il sangue fosse prodotto continuamente dal fegato e "consumato" dagli organi. Nel <b>1628</b> l'inglese <b>William Harvey</b> fece un calcolo: se il cuore espelle circa 60 ml a ogni battito, in un'ora pompa centinaia di litri, molto più del peso di una persona! Quindi il sangue <b>non può</b> essere prodotto e consumato: deve <b>girare in circolo</b>. Harvey non vide però i capillari: li osservò nel <b>1661</b> l'italiano <b>Marcello Malpighi</b>, al microscopio, nei polmoni di una rana.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Numeri da record",
      html: `<ul>
<li>In una vita di 80 anni il cuore batte circa <b>3 miliardi</b> di volte.</li>
<li>Ogni secondo il midollo osseo produce circa <b>2 milioni</b> di nuovi globuli rossi.</li>
<li>Il cuore di una balenottera azzurra pesa circa <b>180 kg</b>; quello di un colibrì batte fino a 1200 volte al minuto.</li>
<li>Il primo trapianto di cuore fu eseguito nel <b>1967</b> in Sudafrica dal chirurgo <b>Christiaan Barnard</b>.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Da ricordare – e prenditi cura del tuo cuore",
      html: `<ul>
<li>Apparato circolatorio = <b>cuore + vasi + sangue</b>.</li>
<li>Sangue: <b>plasma</b> + globuli <b>rossi</b> (O<sub>2</sub>), <b>bianchi</b> (difesa), <b>piastrine</b> (coagulazione).</li>
<li>Cuore: 2 atri, 2 ventricoli, valvole; sistole e diastole.</li>
<li><b>Arterie</b> escono dal cuore, <b>vene</b> entrano, <b>capillari</b> fanno gli scambi.</li>
<li>Circolazione <b>doppia, chiusa e completa</b>: piccola (polmoni) e grande (corpo).</li>
<li>Per la salute: <b>movimento</b> ogni giorno, poco sale e grassi saturi, <b>niente fumo</b> (restringe i vasi e danneggia il cuore).</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa dell'apparato circolatorio: tocca i nodi e scopri il perché",
      nodes: [
        { id: "cellule", label: "Le cellule hanno bisogno", x: 50, y: 6, color: "#0ea5e9", html: "Ogni cellula ha bisogno di O₂ e nutrienti e produce CO₂ e scorie.", why: "Le cellule ricavano energia con la respirazione cellulare: zucchero + ossigeno → anidride carbonica + acqua + energia. In un organismo grande come il nostro, la diffusione da sola è troppo lenta: serve un sistema di trasporto." },
        { id: "sangue", label: "Sangue", x: 20, y: 28, color: "#dc2626", html: "Plasma + globuli rossi, globuli bianchi, piastrine.", why: "L'acqua del plasma scioglie molte sostanze, ma l'ossigeno vi si scioglie poco: per questo l'evoluzione ha \"inventato\" l'emoglobina, che ne trasporta circa 70 volte di più." },
        { id: "emoglobina", label: "Emoglobina e ferro", x: 8, y: 55, color: "#b91c1c", html: "Proteina dei globuli rossi che lega l'ossigeno grazie al ferro.", why: "La sua struttura fu scoperta nel 1959 da Max Perutz con i raggi X (premio Nobel 1962). Senza abbastanza ferro nella dieta si producono pochi globuli rossi: è l'anemia." },
        { id: "cuore", label: "Cuore", x: 50, y: 32, color: "#f43f5e", html: "Pompa muscolare a 4 cavità, con valvole.", why: "Il miocardio ha cellule che generano da sole l'impulso elettrico (il \"pacemaker naturale\", nodo seno-atriale): per questo il cuore batte anche senza ordini dal cervello. L'impulso si registra con l'elettrocardiogramma, inventato da Willem Einthoven nel 1903." },
        { id: "vasi", label: "Vasi sanguigni", x: 80, y: 28, color: "#7c3aed", html: "Arterie, capillari, vene.", why: "Le arterie devono resistere alla pressione e hanno pareti muscolose ed elastiche; le vene, a bassa pressione, hanno valvole che aiutano il ritorno al cuore, scoperte da Girolamo Fabrici d'Acquapendente a Padova (1603)." },
        { id: "capillari", label: "Capillari: scambi", x: 85, y: 58, color: "#a855f7", html: "Vasi sottilissimi in cui avvengono gli scambi con le cellule.", why: "Le loro pareti sono di un solo strato di cellule: le molecole passano per diffusione, dal punto dove sono più concentrate a quello dove lo sono meno. Li scoprì Marcello Malpighi nel 1661." },
        { id: "doppia", label: "Circolazione doppia", x: 50, y: 62, color: "#ea580c", html: "Piccola (cuore–polmoni) e grande (cuore–corpo).", why: "Separare i due circuiti tiene alta la pressione verso il corpo e non mescola sangue ricco e povero di ossigeno. Lo stesso schema c'è in uccelli e mammiferi, animali a sangue caldo che consumano molta energia; i pesci hanno una circolazione semplice." },
        { id: "harvey", label: "Harvey (1628)", x: 20, y: 85, color: "#64748b", html: "Dimostrò che il sangue circola in un percorso chiuso.", why: "Usò un ragionamento quantitativo (quanto sangue pompa il cuore in un'ora) e semplici esperimenti con lacci sul braccio, che mostravano come le vene si gonfino solo verso la mano." },
        { id: "salute", label: "Salute del cuore", x: 70, y: 88, color: "#16a34a", html: "Movimento, alimentazione equilibrata, niente fumo.", why: "Le malattie cardiovascolari sono la prima causa di morte nei Paesi industrializzati. L'attività fisica rinforza il miocardio; il fumo e i grassi in eccesso favoriscono placche che restringono le arterie (aterosclerosi)." }
      ],
      edges: [
        ["cellule", "sangue", "servono al"],
        ["sangue", "emoglobina", "contiene"],
        ["cuore", "sangue", "spinge il"],
        ["cuore", "vasi", "nei"],
        ["vasi", "capillari", "si ramificano nei"],
        ["capillari", "cellule", "nutrono le"],
        ["cuore", "doppia", "organizza la"],
        ["harvey", "doppia", "scoprì la circolazione"],
        ["salute", "cuore", "protegge il"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: vasi e circolazione",
      questions: [
        { type: "mc", q: "In quali vasi avvengono gli scambi con le cellule?", options: ["Arterie", "Vene", "Capillari"], answer: 2, explain: "I capillari hanno pareti sottilissime che permettono gli scambi." },
        { type: "tf", q: "Le vene polmonari trasportano sangue ricco di ossigeno.", answer: true, explain: "Portano al cuore il sangue che si è appena ossigenato nei polmoni." },
        { type: "mc", q: "Da quale cavità parte l'aorta?", options: ["Atrio destro", "Ventricolo destro", "Ventricolo sinistro"], answer: 2, explain: "Il ventricolo sinistro spinge il sangue ossigenato nell'aorta (grande circolazione)." }
      ]
    }
  ],
  glossary: [
    { t: "Plasma", d: "Parte liquida del sangue, fatta soprattutto d'acqua." },
    { t: "Emoglobina", d: "Proteina con ferro dei globuli rossi che trasporta l'ossigeno." },
    { t: "Atrio", d: "Cavità superiore del cuore che riceve il sangue." },
    { t: "Ventricolo", d: "Cavità inferiore del cuore che spinge il sangue nelle arterie." },
    { t: "Valvola", d: "Struttura che lascia passare il sangue in un solo verso." },
    { t: "Sistole", d: "Fase di contrazione del cuore." },
    { t: "Diastole", d: "Fase di rilassamento del cuore." },
    { t: "Arteria", d: "Vaso che porta il sangue dal cuore agli organi." },
    { t: "Vena", d: "Vaso che riporta il sangue al cuore." },
    { t: "Capillare", d: "Vaso sottilissimo in cui avvengono gli scambi con le cellule." },
    { t: "Aorta", d: "La più grande arteria, che esce dal ventricolo sinistro." },
    { t: "Coagulazione", d: "Processo che forma un tappo di sangue (coagulo) per chiudere le ferite." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste NON è una funzione dell'apparato circolatorio?", options: ["Trasportare ossigeno", "Difendere dalle infezioni", "Digerire le proteine", "Distribuire il calore"], answer: 2, explain: "La digestione è compito dell'apparato digerente." },
      { type: "mc", q: "Le piastrine servono a…", options: ["trasportare ossigeno", "far coagulare il sangue", "produrre anticorpi"], answer: 1, explain: "Le piastrine formano il tappo e avviano la coagulazione." },
      { type: "num", q: "Circa quanti litri di sangue ha un adulto?", answer: 5, tol: 1, unit: "litri", explain: "Circa 5 litri (dal 7 all'8% del peso corporeo)." },
      { type: "tf", q: "Tutte le arterie trasportano sangue ricco di ossigeno.", answer: false, explain: "Le arterie polmonari trasportano sangue povero di O₂ verso i polmoni." },
      { type: "mc", q: "Perché il ventricolo sinistro ha pareti più spesse del destro?", options: ["Perché riceve più sangue", "Perché deve spingere il sangue in tutto il corpo", "Perché contiene sangue povero di O₂"], answer: 1, explain: "Serve più forza per la grande circolazione che per quella polmonare." },
      { type: "text", q: "Come si chiama la proteina con il ferro che trasporta l'ossigeno?", answer: ["emoglobina", "l'emoglobina"], explain: "L'emoglobina dei globuli rossi." },
      { type: "order", q: "Metti in ordine il percorso della piccola circolazione.", items: ["Ventricolo destro", "Arterie polmonari", "Capillari dei polmoni", "Vene polmonari", "Atrio sinistro"], explain: "Il sangue va dal ventricolo destro ai polmoni e torna all'atrio sinistro." },
      { type: "mc", q: "A che cosa servono le valvole delle vene delle gambe?", options: ["Ad accelerare il sangue", "A impedire che il sangue torni indietro", "A filtrare il sangue"], answer: 1, explain: "Sono valvole a nido di rondine che si chiudono se il sangue tende a scendere." },
      { type: "num", q: "Conti 18 battiti in 15 secondi. Quanti battiti al minuto sono?", answer: 72, unit: "battiti/min", explain: "18 × 4 = 72 battiti al minuto." },
      { type: "mc", q: "Chi dimostrò nel 1628 che il sangue circola?", options: ["Galeno", "William Harvey", "Karl Landsteiner", "Louis Pasteur"], answer: 1, explain: "William Harvey, con il libro De motu cordis." },
      { type: "text", q: "Dove si producono le cellule del sangue?", answer: ["midollo osseo", "nel midollo osseo", "midollo osseo rosso", "nel midollo osseo rosso", "midollo rosso"], explain: "Nel midollo osseo rosso, dentro le ossa." },
      { type: "tf", q: "La circolazione umana è chiusa: il sangue scorre sempre dentro i vasi.", answer: true, explain: "Sì: è doppia, chiusa e completa." }
    ]
  }
});

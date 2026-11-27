TOPIC('it', {
  id: "l2-sci-membrana-trasporti",
  title: "Membrana e trasporti cellulari",
  intro: "Una cellula non è una stanza chiusa: deve far entrare nutrienti e ossigeno, far uscire rifiuti e segnali, e allo stesso tempo mantenere il proprio interno diverso dall'esterno. A fare da guardiano è la <b>membrana plasmatica</b>, sottile appena 7-8 nanometri ma capace di selezionare ogni molecola. In questa lezione studiamo com'è fatta e come avvengono i <b>trasporti</b>: <b>diffusione</b>, <b>osmosi</b>, <b>trasporto attivo</b>, <b>endocitosi</b> ed <b>esocitosi</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "La struttura della membrana: il modello a mosaico fluido",
      html: `<p>La membrana è costituita soprattutto da <b>fosfolipidi</b>, molecole <b>anfipatiche</b>: hanno una <b>testa idrofila</b> (con il gruppo fosfato, che "ama" l'acqua) e due <b>code idrofobe</b> (catene di acidi grassi, che "evitano" l'acqua). In ambiente acquoso si dispongono spontaneamente in un <b>doppio strato</b> (bilayer): le teste verso l'acqua dentro e fuori la cellula, le code nascoste all'interno. Già nel <b>1925</b> Gorter e Grendel avevano stimato, estraendo i lipidi dai globuli rossi, che bastassero due strati a ricoprire la cellula.</p>
<p>Nel <b>1972</b> <b>Singer e Nicolson</b> proposero il <b>modello a mosaico fluido</b>:</p>
<ul>
<li><b>fluido</b>: i fosfolipidi non sono fissi ma si muovono lateralmente, come persone in una folla;</li>
<li><b>mosaico</b>: nel doppio strato sono inserite <b>proteine</b> (canali, trasportatori, recettori, enzimi, proteine di riconoscimento);</li>
<li>il <b>colesterolo</b> (nelle cellule animali) regola la fluidità: la rende meno variabile col cambiare della temperatura;</li>
<li>all'esterno, catene di zuccheri legate a lipidi e proteine formano il <b>glicocalice</b>, che serve al riconoscimento tra cellule (per esempio determina i gruppi sanguigni AB0).</li>
</ul>
<p>Grazie a questa struttura la membrana ha <b>permeabilità selettiva</b>: lascia passare facilmente alcune sostanze e ne blocca altre.</p>
<table>
<tr><th>Sostanza</th><th>Passa direttamente nel doppio strato?</th></tr>
<tr><td>Ossigeno, CO₂, azoto (molecole piccole apolari)</td><td>sì, facilmente</td></tr>
<tr><td>Molecole liposolubili (steroidi, alcol, vitamine A-D-E-K)</td><td>sì</td></tr>
<tr><td>Acqua</td><td>un po' (molecola piccola ma polare); molto di più attraverso le <b>acquaporine</b></td></tr>
<tr><td>Glucosio, amminoacidi (grandi e polari)</td><td>no: servono trasportatori</td></tr>
<tr><td>Ioni (Na⁺, K⁺, Cl⁻, Ca²⁺) </td><td>no: servono canali o pompe</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "La membrana a mosaico fluido",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="90" fill="#dbeafe"/><rect x="0" y="210" width="600" height="90" fill="#fef9c3"/>
<text x="20" y="30" font-size="16" font-weight="bold" fill="#1e3a8a">ESTERNO della cellula</text>
<text x="20" y="285" font-size="16" font-weight="bold" fill="#854d0e">CITOPLASMA</text>
<g fill="#f59e0b" stroke="#b45309" stroke-width="1">
<circle cx="30" cy="100" r="12"/><circle cx="70" cy="100" r="12"/><circle cx="110" cy="100" r="12"/><circle cx="150" cy="100" r="12"/><circle cx="190" cy="100" r="12"/><circle cx="350" cy="100" r="12"/><circle cx="390" cy="100" r="12"/><circle cx="430" cy="100" r="12"/><circle cx="470" cy="100" r="12"/><circle cx="510" cy="100" r="12"/><circle cx="550" cy="100" r="12"/>
<circle cx="30" cy="200" r="12"/><circle cx="70" cy="200" r="12"/><circle cx="110" cy="200" r="12"/><circle cx="150" cy="200" r="12"/><circle cx="190" cy="200" r="12"/><circle cx="350" cy="200" r="12"/><circle cx="390" cy="200" r="12"/><circle cx="430" cy="200" r="12"/><circle cx="470" cy="200" r="12"/><circle cx="510" cy="200" r="12"/><circle cx="550" cy="200" r="12"/></g>
<g stroke="#b45309" stroke-width="3"><line x1="30" y1="112" x2="30" y2="188"/><line x1="70" y1="112" x2="70" y2="188"/><line x1="110" y1="112" x2="110" y2="188"/><line x1="150" y1="112" x2="150" y2="188"/><line x1="190" y1="112" x2="190" y2="188"/><line x1="350" y1="112" x2="350" y2="188"/><line x1="390" y1="112" x2="390" y2="188"/><line x1="430" y1="112" x2="430" y2="188"/><line x1="470" y1="112" x2="470" y2="188"/><line x1="510" y1="112" x2="510" y2="188"/><line x1="550" y1="112" x2="550" y2="188"/></g>
<rect x="225" y="82" width="95" height="136" rx="30" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<rect x="250" y="95" width="45" height="110" rx="8" fill="#ede9fe"/>
<text x="272" y="155" font-size="14" font-weight="bold" fill="#4c1d95" text-anchor="middle">canale</text>
<ellipse cx="205" cy="150" rx="8" ry="8" fill="#16a34a"/><text x="130" y="155" font-size="14" fill="#166534" font-weight="bold">colesterolo</text>
<path d="M560 80 q10 -20 20 0 q10 20 20 0" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="470" y="60" font-size="14" font-weight="bold" fill="#991b1b">glicocalice</text>
<text x="100" y="75" font-size="14" font-weight="bold" fill="#92400e">teste idrofile</text>
<text x="400" y="155" font-size="14" font-weight="bold" fill="#92400e">code idrofobe</text>
</svg>`,
      caption: "Doppio strato di fosfolipidi con una proteina-canale, colesterolo e catene di zuccheri all'esterno."
    },
    {
      type: "3d",
      title: "Un fosfolipide in 3D (schema)",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 1.2, z: 0, r: 0.5, color: "#f59e0b", label: "Testa (fosfato)" },
          { x: 0, y: 0.5, z: 0, r: 0.25, color: "#a855f7", label: "Glicerolo" },
          { x: -0.4, y: -0.2, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: -0.4, y: -0.9, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: -0.4, y: -1.6, z: 0, r: 0.2, color: "#64748b", label: "Coda 1" },
          { x: 0.4, y: -0.2, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: 0.4, y: -0.9, z: 0, r: 0.2, color: "#64748b", label: "" },
          { x: 0.4, y: -1.6, z: 0, r: 0.2, color: "#64748b", label: "Coda 2" }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7]]
      },
      caption: "Schema semplificato: una testa idrofila (giallo) e due code idrofobe di acidi grassi (grigio). Ruotalo col dito."
    },
    {
      type: "text",
      title: "Trasporto passivo: la diffusione",
      html: `<p>Le molecole sono sempre in movimento casuale (agitazione termica). Se in una zona sono più concentrate che in un'altra, per puro caso <b>statistico</b> più molecole vanno dalla zona densa a quella rarefatta di quante facciano il contrario: è la <b>diffusione</b>. Una goccia d'inchiostro in un bicchiere d'acqua si espande da sola fino a distribuirsi in modo uniforme. Non serve energia metabolica: è un <b>trasporto passivo</b>, che segue il <b>gradiente di concentrazione</b>, dalla concentrazione alta alla bassa, finché l'equilibrio è raggiunto.</p>
<p>Attraverso la membrana la diffusione può essere:</p>
<ul>
<li><b>semplice</b>: la molecola attraversa direttamente il doppio strato (O₂, CO₂, molecole liposolubili). Nei polmoni l'ossigeno passa dall'aria al sangue perché lì è più concentrato nell'aria; la CO₂ fa il percorso inverso;</li>
<li><b>facilitata</b>: la molecola (glucosio, amminoacidi, ioni) passa con l'aiuto di una <b>proteina canale</b> o di un <b>trasportatore</b> (carrier) che cambia forma; sempre secondo gradiente e senza consumo di ATP. La velocità raggiunge un massimo quando tutti i trasportatori sono occupati (saturazione).</li>
</ul>
<p>La velocità di diffusione aumenta con la differenza di concentrazione, con la temperatura e con la superficie disponibile, e diminuisce con lo spessore da attraversare: per questo gli scambi gassosi nei polmoni avvengono in alveoli con pareti sottilissime (una cellula di spessore) e superficie totale di circa 70-100 m².</p>`
    },
    {
      type: "text",
      title: "L'osmosi: la diffusione dell'acqua",
      html: `<p>L'<b>osmosi</b> è la diffusione dell'<b>acqua</b> attraverso una membrana semipermeabile, quando le soluzioni ai due lati hanno concentrazioni diverse di soluti che non riescono a passare. L'acqua si sposta <b>verso la soluzione più concentrata</b> (cioè dove c'è meno acqua "libera"), tendendo a diluirla. La forza che spinge l'acqua è la <b>pressione osmotica</b>.</p>
<p>Si confrontano due soluzioni usando i termini:</p>
<ul>
<li><b>isotonica</b>: stessa concentrazione di soluti, nessuno spostamento netto;</li>
<li><b>ipertonica</b>: più concentrata (di soluti) rispetto all'altra: richiama acqua;</li>
<li><b>ipotonica</b>: meno concentrata: cede acqua.</li>
</ul>
<p>Che cosa succede a una cellula in una soluzione:</p>
<table>
<tr><th>Soluzione esterna</th><th>Globulo rosso (animale)</th><th>Cellula vegetale</th></tr>
<tr><td><b>Ipotonica</b> (acqua pura)</td><td>entra acqua: si gonfia e scoppia (<b>emolisi</b>)</td><td>entra acqua: aumenta il <b>turgore</b>, la parete impedisce che scoppi</td></tr>
<tr><td><b>Isotonica</b></td><td>forma normale</td><td>cellula "flaccida"</td></tr>
<tr><td><b>Ipertonica</b> (acqua salata/zuccherata)</td><td>esce acqua: si raggrinza (<b>crenazione</b>)</td><td>la membrana si stacca dalla parete: <b>plasmolisi</b></td></tr>
</table>
<p>Nel 2003 <b>Peter Agre</b> ricevette il premio Nobel per la chimica per aver scoperto le <b>acquaporine</b>, proteine-canale specifiche per l'acqua, che rendono l'osmosi molto più rapida (per esempio nei reni, che riassorbono ogni giorno litri d'acqua).</p>`
    },
    {
      type: "example",
      title: "La soluzione fisiologica e il sale sulle fragole",
      html: `<p>La <b>soluzione fisiologica</b> usata in ospedale è una soluzione di cloruro di sodio allo <b>0,9%</b> (massa/volume): 9 g di sale per litro, e ha la stessa pressione osmotica del plasma sanguigno (è <b>isotonica</b>). Se si iniettasse acqua distillata in vena, i globuli rossi, in un ambiente ipotonico, si gonfierebbero e scoppierebbero.</p>
<p>Quanto sale serve per 500 mL di soluzione fisiologica? 9 g/L × 0,5 L = <b>4,5 g</b>.</p>
<p>In cucina: se cospargi di zucchero le fragole, dopo un po' compare un liquido sul fondo. Lo zucchero crea all'esterno un ambiente <b>ipertonico</b>: l'acqua esce per osmosi dalle cellule del frutto. Lo stesso principio spiega perché il sale conserva carne e pesce: i microbi, in un ambiente ipertonico, perdono acqua e muoiono o non si riproducono. E perché bere acqua di mare disidrata: è più salata dei nostri fluidi e richiamerebbe acqua dai tessuti.</p>`
    },
    {
      type: "example",
      title: "Perché servono i vasi sanguigni? Quanto è lenta la diffusione",
      html: `<p>Il tempo che una molecola impiega a diffondere cresce con il <b>quadrato</b> della distanza: t ≈ x² / (2D), dove D è il coefficiente di diffusione (per una piccola molecola in acqua, circa 10⁻⁹ m²/s).</p>
<ul>
<li>x = 10 µm (dimensioni di una cellula): t ≈ (10⁻⁵)² / (2 · 10⁻⁹) = 10⁻¹⁰ / (2 · 10⁻⁹) ≈ <b>0,05 s</b>;</li>
<li>x = 1 cm (10⁻² m): t ≈ 10⁻⁴ / (2 · 10⁻⁹) = 5 · 10⁴ s ≈ <b>14 ore</b>.</li>
</ul>
<p>Percorrere una distanza 1000 volte maggiore richiede un tempo 1 milione di volte più lungo. Ecco perché la diffusione va bene dentro la cellula ma non da una parte all'altra di un corpo: gli animali grandi hanno bisogno di un sistema circolatorio che trasporti le sostanze per "convezione", portando i capillari a pochi micrometri da ogni cellula.</p>`
    },
    {
      type: "widget",
      title: "Che cosa succede alla cellula?",
      widget: "classify",
      options: { groups: ["Entra acqua nella cellula", "Esce acqua dalla cellula", "Nessuno spostamento netto"], items: [
        ["Globulo rosso in acqua distillata", 0],
        ["Fragola cosparsa di zucchero", 1],
        ["Globulo rosso in soluzione allo 0,9% di NaCl", 2],
        ["Lumaca con del sale sul corpo", 1],
        ["Radice della pianta in un terreno ricco d'acqua dolce", 0],
        ["Lattuga appassita messa in acqua fresca", 0]
      ] },
      caption: "Ricorda: l'acqua va sempre verso la soluzione più concentrata di soluti."
    },
    {
      type: "quiz",
      title: "Mini-quiz: diffusione e osmosi",
      questions: [
        { type: "mc", q: "Verso dove si sposta l'acqua per osmosi?", options: ["Verso la soluzione più concentrata", "Verso la soluzione più diluita", "Non si sposta mai"], answer: 0, explain: "L'acqua si muove verso la zona con più soluto, tendendo a diluirla." },
        { type: "tf", q: "La diffusione facilitata consuma ATP.", answer: false, explain: "È un trasporto passivo: usa proteine ma segue il gradiente e non richiede energia metabolica." },
        { type: "mc", q: "Come si chiama la soluzione con la stessa concentrazione di soluti del sangue?", options: ["Ipotonica", "Isotonica", "Ipertonica"], answer: 1, explain: "Isotonica significa stessa pressione osmotica; la soluzione fisiologica è isotonica." }
      ]
    },
    {
      type: "text",
      title: "Trasporto attivo: contro gradiente, pagando in ATP",
      html: `<p>Molto spesso la cellula deve concentrare una sostanza dove è già abbondante, o espellerla dove è già in eccesso: andare <b>contro il gradiente</b> è come spingere una palla in salita, e richiede energia. È il <b>trasporto attivo</b>, svolto da proteine dette <b>pompe</b>, che usano l'energia dell'<b>ATP</b>.</p>
<p>L'esempio più importante è la <b>pompa sodio-potassio</b> (Na⁺/K⁺-ATPasi), scoperta da <b>Jens Skou</b> nel 1957 (Nobel 1997). Ad ogni ciclo, consumando una molecola di ATP, <b>espelle 3 ioni Na⁺</b> e <b>importa 2 ioni K⁺</b>. Così dentro la cellula c'è molto potassio e poco sodio, e fuori il contrario. Questo gradiente:</p>
<ul>
<li>crea la differenza di potenziale elettrico (circa −70 mV nei neuroni a riposo) su cui si basa l'<b>impulso nervoso</b>;</li>
<li>regola il volume cellulare (opponendosi all'ingresso d'acqua);</li>
<li>permette il <b>trasporto attivo secondario</b>: nell'intestino il sodio rientra secondo gradiente trascinando con sé il glucosio (cotrasporto).</li>
</ul>
<p>Si stima che nei neuroni la pompa consumi fino a circa il 20-40% dell'ATP.</p>
<p>Un'altra pompa è quella dei protoni (H⁺) nello stomaco: le cellule parietali pompano H⁺ fino a produrre acido cloridrico, portando il pH del succo gastrico a circa 1,5-2.</p>`
    },
    {
      type: "svg",
      title: "La pompa sodio-potassio",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="95" fill="#dbeafe"/><rect x="0" y="205" width="600" height="95" fill="#fef9c3"/>
<rect x="0" y="95" width="600" height="110" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<path d="M230 80 L370 80 L350 220 L250 220 Z" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<text x="300" y="155" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">POMPA Na⁺/K⁺</text>
<text x="20" y="28" font-size="16" font-weight="bold" fill="#1e3a8a">Fuori: molto Na⁺, poco K⁺</text>
<text x="20" y="285" font-size="16" font-weight="bold" fill="#854d0e">Dentro: molto K⁺, poco Na⁺</text>
<g fill="#ef4444"><circle cx="440" cy="40" r="12"/><circle cx="480" cy="55" r="12"/><circle cx="520" cy="40" r="12"/></g>
<text x="480" y="85" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">3 Na⁺ escono</text>
<g fill="#2563eb"><circle cx="100" cy="60" r="12"/><circle cx="140" cy="70" r="12"/></g>
<text x="120" y="92" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2 K⁺ entrano</text>
<text x="450" y="250" font-size="16" font-weight="bold" fill="#92400e">ATP → ADP + P</text>
<path d="M400 120 C420 90 440 70 440 55" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M200 70 C190 95 190 110 200 135" fill="none" stroke="#2563eb" stroke-width="4"/>
</svg>`,
      caption: "La pompa spende ATP per portare 3 ioni sodio fuori e 2 ioni potassio dentro, sempre contro il loro gradiente."
    },
    {
      type: "text",
      title: "Trasporti in massa: endocitosi ed esocitosi",
      html: `<p>Le particelle troppo grandi per attraversare canali e pompe (proteine, batteri, grossi frammenti) viaggiano in <b>vescicole</b> formate dalla membrana stessa. Sono processi che consumano ATP.</p>
<ul>
<li><b>Endocitosi</b>: la membrana si invagina, circonda il materiale e si chiude in una vescicola che entra nella cellula.
<ul>
<li><b>Fagocitosi</b> ("mangiare cellule"): inglobamento di particelle solide grandi, come batteri; la fanno i globuli bianchi (macrofagi, neutrofili) e le amebe. La vescicola si fonde con i lisosomi e il contenuto viene digerito. Fu osservata da <b>Ilya Mečnikov</b> (Nobel 1908) in larve di stella marina;</li>
<li><b>Pinocitosi</b> ("bere"): ingresso di liquidi con molecole disciolte;</li>
<li><b>Endocitosi mediata da recettori</b>: vengono catturate solo molecole specifiche che si legano a recettori: è così che le cellule assumono il colesterolo (LDL).</li>
</ul></li>
<li><b>Esocitosi</b>: una vescicola dell'interno si fonde con la membrana e rilascia il contenuto all'esterno: è così che escono gli ormoni (l'insulina), gli enzimi digestivi e i neurotrasmettitori alla sinapsi. La membrana della vescicola si aggiunge a quella della cellula.</li>
</ul>
<p>Endocitosi ed esocitosi si bilanciano, così la superficie cellulare resta costante.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: trasporti attivi e in massa",
      questions: [
        { type: "num", q: "Quanti ioni K⁺ importa la pompa sodio-potassio in ogni ciclo?", answer: 2, explain: "3 Na⁺ escono e 2 K⁺ entrano, con una molecola di ATP." },
        { type: "mc", q: "Quale processo permette a un globulo bianco di inglobare un batterio?", options: ["Fagocitosi", "Osmosi", "Diffusione semplice"], answer: 0, explain: "È una forma di endocitosi che forma una vescicola attorno alla particella." },
        { type: "tf", q: "Il trasporto attivo muove sempre le sostanze secondo il loro gradiente di concentrazione.", answer: false, explain: "Al contrario: va contro gradiente, ed è per questo che richiede energia." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i trasporti",
      intro: "Per orientarti tra i tipi di trasporto, prova queste analogie.",
      tabs: [
        {
          label: "⛷️ Discesa o salita",
          html: `<p>Pensa alla <b>concentrazione</b> come alla quota di una pista di sci. <b>Diffusione</b> (semplice o facilitata): scendi per la pista, senza fatica, anche se per passare da un cancello (<i>canale</i>) devi aspettare. <b>Trasporto attivo</b>: risali la pista, serve un impianto, cioè una pompa che brucia energia (ATP). <b>Vescicole</b>: porti giù con la slitta un carico molto grosso, che non passa dal cancello.</p>`
        },
        {
          label: "🍵 Il tè e la bustina",
          html: `<p>Metti una bustina nell'acqua calda: le sostanze del tè escono dalla bustina (membrana permeabile) e si diffondono finché il colore è uniforme. Intanto l'acqua entra nella bustina, un po' come l'osmosi (la bustina trattiene le foglie, che sono troppo grandi per passare). Il tè è più veloce in acqua calda, come la diffusione aumenta con la temperatura.</p>`
        },
        {
          label: "🥔 Esperimento con la patata",
          html: `<p>Taglia due cubetti di patata identici e pesali. Mettine uno in acqua pura e uno in acqua molto salata (per esempio 100 g di sale per litro) per un'ora. Pesali di nuovo: quello in acqua pura è più pesante e rigido (è entrata acqua per osmosi), quello nell'acqua salata è più leggero e flaccido (è uscita acqua). Misurare la differenza di massa ti permette di stimare la concentrazione a cui il cubetto non cambia peso: è la concentrazione isotonica alle cellule della patata.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><rect x="40" y="90" width="220" height="170" rx="10" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/><rect x="340" y="90" width="220" height="170" rx="10" fill="#fde68a" stroke="#b45309" stroke-width="3"/><rect x="120" y="170" width="60" height="60" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><rect x="430" y="180" width="40" height="40" fill="#fef3c7" stroke="#92400e" stroke-width="3"/><text x="150" y="70" font-size="16" font-weight="bold" fill="#1e40af" text-anchor="middle">Acqua pura</text><text x="450" y="70" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">Acqua salata</text><text x="150" y="285" font-size="14" fill="#1e293b" text-anchor="middle">si gonfia (entra acqua)</text><text x="450" y="285" font-size="14" fill="#1e293b" text-anchor="middle">si restringe (esce acqua)</text></svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Anestetici, veleni e membrana",
      html: `<p>Molti veleni agiscono bloccando proteine di membrana. La <b>tetrodotossina</b> del pesce palla (fugu) blocca i canali del sodio dei neuroni: i nervi non possono più trasmettere impulsi e subentra la paralisi. La <b>digitale</b> (digossina), un farmaco ricavato dalla pianta Digitalis, inibisce la pompa Na⁺/K⁺ e, in dosi controllate, rinforza le contrazioni del cuore. Le tossine del colera, invece, fanno aprire i canali del cloruro delle cellule intestinali: l'acqua esce per osmosi dando diarrea gravissima, e per questo si cura prima di tutto con soluzioni di sali e zuccheri (reidratazione orale) sfruttando il cotrasporto sodio-glucosio.</p>`
    },
    {
      type: "curiosity",
      title: "Perché le dita si raggrinziscono in acqua?",
      html: `<p>Dopo un bagno lungo la pelle di mani e piedi si increspa. Si credeva fosse solo osmosi, con la pelle che si gonfia d'acqua. In realtà il fenomeno è controllato dal sistema nervoso: i vasi sanguigni delle dita si restringono e la pelle si ripiega a formare solchi. Alcuni studi suggeriscono che questi solchi migliorino la presa sugli oggetti bagnati. È un buon esempio di come un fenomeno apparentemente "fisico" abbia una spiegazione più complessa.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa dei trasporti: tocca i nodi e scopri il perché",
      nodes: [
        { id: "membrana", label: "Membrana plasmatica", x: 50, y: 6, color: "#3b82f6", html: "Doppio strato di fosfolipidi con proteine: permeabilità selettiva.", why: "Gorter e Grendel (1925) trovarono che i lipidi dei globuli rossi bastavano a coprire due volte la cellula; Singer e Nicolson (1972) integrarono le proteine con il modello a mosaico fluido, poi confermato dalla microscopia elettronica e dalle tecniche di congelamento-frattura." },
        { id: "diff", label: "Diffusione", x: 15, y: 36, color: "#22c55e", html: "Dal più concentrato al meno concentrato, senza energia.", why: "È una conseguenza dell'agitazione termica: nel 1827 il botanico Robert Brown osservò il moto casuale dei granuli di polline nell'acqua; Einstein nel 1905 lo spiegò con l'urto delle molecole, e Jean Perrin ne ottenne conferma sperimentale, dimostrando la realtà degli atomi." },
        { id: "osmosi", label: "Osmosi", x: 50, y: 36, color: "#0ea5e9", html: "Diffusione dell'acqua attraverso una membrana semipermeabile.", why: "L'abate Nollet descrisse il fenomeno nel 1748; nell'Ottocento Pfeffer misurò la pressione osmotica e van 't Hoff (Nobel 1901) mostrò che si comporta come la pressione di un gas: π = MRT (per soluzioni diluite)." },
        { id: "facil", label: "Diffusione facilitata", x: 85, y: 36, color: "#a855f7", html: "Con canali e trasportatori, senza ATP.", why: "Serve perché le molecole polari non attraversano il nucleo idrofobo del doppio strato; i canali ionici sono stati studiati con la tecnica del patch-clamp di Neher e Sakmann (Nobel 1991)." },
        { id: "attivo", label: "Trasporto attivo", x: 25, y: 66, color: "#ef4444", html: "Pompe che usano ATP contro gradiente.", why: "Le cellule devono mantenere un interno diverso dall'esterno per vivere: è uno stato di non equilibrio. La pompa Na⁺/K⁺ (Skou, 1957) mantiene i gradienti che servono per i nervi, i muscoli e l'assorbimento intestinale." },
        { id: "massa", label: "Endo/esocitosi", x: 75, y: 66, color: "#f59e0b", html: "Trasporti in vescicole per molecole grandi.", why: "Servono quando la particella è troppo grande per le proteine di trasporto. Mečnikov, osservando la fagocitosi, intuì il ruolo delle cellule nella difesa immunitaria (Nobel 1908)." },
        { id: "atp", label: "Energia (ATP)", x: 50, y: 88, color: "#14b8a6", html: "La moneta energetica della cellula.", why: "Il suo costo spiega perché i trasporti attivi sono limitati ai casi indispensabili: la cellula spende ATP solo per andare contro il gradiente." }
      ],
      edges: [
        ["membrana", "diff", "permette"],
        ["membrana", "osmosi", "permette"],
        ["diff", "facil", "con proteine"],
        ["membrana", "attivo", "ospita pompe"],
        ["attivo", "atp", "consuma"],
        ["massa", "atp", "consuma"],
        ["membrana", "massa", "si deforma"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul><li>Passivi (nessun ATP, secondo gradiente): diffusione semplice, diffusione facilitata, osmosi.</li><li>Attivi (ATP, contro gradiente o in massa): pompe come Na⁺/K⁺ (3 fuori, 2 dentro), endocitosi, esocitosi.</li><li>L'acqua va verso la soluzione più concentrata (ipertonica).</li><li>Globulo rosso: ipotonico = scoppia, ipertonico = si raggrinza.</li></ul>`
    }
  ],
  glossary: [
    { t: "Fosfolipide", d: "Lipide con testa idrofila e due code idrofobe: componente base della membrana." },
    { t: "Mosaico fluido", d: "Modello della membrana: doppio strato fluido di fosfolipidi con proteine inserite." },
    { t: "Permeabilità selettiva", d: "Capacità della membrana di lasciar passare alcune sostanze e non altre." },
    { t: "Diffusione", d: "Movimento passivo delle particelle dalla zona più concentrata alla meno concentrata." },
    { t: "Osmosi", d: "Diffusione dell'acqua attraverso una membrana semipermeabile." },
    { t: "Soluzione isotonica", d: "Soluzione con la stessa concentrazione di soluti di un'altra (di solito la cellula)." },
    { t: "Soluzione ipertonica", d: "Soluzione più concentrata di soluti rispetto a un'altra." },
    { t: "Soluzione ipotonica", d: "Soluzione meno concentrata di soluti rispetto a un'altra." },
    { t: "Trasporto attivo", d: "Trasporto contro gradiente che consuma energia (ATP)." },
    { t: "Pompa sodio-potassio", d: "Proteina che espelle 3 Na⁺ e importa 2 K⁺ per ogni ATP consumato." },
    { t: "Endocitosi", d: "Ingresso di materiale nella cellula in vescicole formate dalla membrana." },
    { t: "Esocitosi", d: "Rilascio di sostanze all'esterno tramite fusione di vescicole con la membrana." },
    { t: "Plasmolisi", d: "Distacco della membrana dalla parete in una cellula vegetale in ambiente ipertonico." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché i fosfolipidi formano un doppio strato in acqua?", options: ["Le code idrofobe si nascondono all'interno e le teste idrofile guardano l'acqua", "Le teste si respingono con le code", "Perché sono molecole non polari"], answer: 0, explain: "La natura anfipatica porta alla disposizione spontanea a doppio strato." },
      { type: "tf", q: "L'ossigeno attraversa la membrana per diffusione semplice.", answer: true, explain: "È una piccola molecola apolare, e passa direttamente tra i fosfolipidi." },
      { type: "mc", q: "Un globulo rosso posto in acqua distillata...", options: ["si raggrinzisce", "si gonfia e può scoppiare", "non cambia"], answer: 1, explain: "L'acqua distillata è ipotonica: l'acqua entra per osmosi e provoca l'emolisi." },
      { type: "num", q: "Quanti grammi di NaCl servono per 2 litri di soluzione fisiologica (9 g/L)?", answer: 18, unit: "g", explain: "9 g/L × 2 L = 18 g." },
      { type: "mc", q: "Quale processo richiede ATP?", options: ["Osmosi", "Diffusione facilitata", "Pompa sodio-potassio"], answer: 2, explain: "La pompa trasporta ioni contro gradiente e consuma ATP." },
      { type: "num", q: "Per ogni ciclo della pompa Na⁺/K⁺, quanti ioni sodio vengono espulsi?", answer: 3, explain: "Ogni ciclo espelle 3 Na⁺ e importa 2 K⁺." },
      { type: "text", q: "Come si chiama l'inglobamento di una particella solida grande, come un batterio, da parte di una cellula?", answer: ["fagocitosi", "la fagocitosi"], explain: "È una forma di endocitosi svolta per esempio dai macrofagi." },
      { type: "order", q: "Ordina le fasi dell'esocitosi di un ormone.", items: ["L'ormone è confezionato in una vescicola dal Golgi", "La vescicola si sposta verso la membrana", "La vescicola si fonde con la membrana", "L'ormone viene rilasciato all'esterno"], explain: "Il contenuto passa dal Golgi alla vescicola, la vescicola raggiunge la membrana, si fonde e rilascia." },
      { type: "tf", q: "In una cellula vegetale posta in una soluzione ipertonica avviene la plasmolisi.", answer: true, explain: "L'acqua esce, il citoplasma si ritira e la membrana si stacca dalla parete." },
      { type: "mc", q: "Perché la frutta cosparsa di zucchero rilascia liquido?", options: ["Perché lo zucchero reagisce con l'acqua formando un acido", "Perché lo zucchero crea un ambiente ipertonico che richiama acqua", "Perché la frutta si scalda"], answer: 1, explain: "L'acqua esce per osmosi verso la zona più concentrata, cioè lo zucchero all'esterno." }
    ]
  }
});

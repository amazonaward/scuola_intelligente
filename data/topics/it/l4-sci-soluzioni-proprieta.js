TOPIC('it', {
  id: "l4-sci-soluzioni-proprieta",
  title: "Le soluzioni",
  intro: "Perché si getta il sale sulle strade ghiacciate? Perché una lattina di bibita sfrigola quando la apri? Perché un pesce di mare messo in acqua dolce sta male? Dietro tutte queste domande ci sono le <b>soluzioni</b>. In terza hai già imparato a calcolare la molarità e a fare le diluizioni: ora andiamo più a fondo. Vedremo che cosa succede a livello molecolare quando una sostanza si scioglie, quanto se ne può sciogliere (la <b>solubilità</b>) e come il soluto cambia le proprietà del solvente, anche se nulla ci fa pensare che il soluto sia \"chimicamente\" coinvolto: sono le <b>proprietà colligative</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Che cosa significa sciogliere",
      html: `<p>Richiamo di terza: una soluzione è un miscuglio omogeneo di <b>soluto</b> e <b>solvente</b>, e la molarità è <b>M = n / V</b>. Ma <i>perché</i> una sostanza si scioglie? La regola empirica è <b>«il simile scioglie il simile»</b>:</p>
<ul>
<li>I solventi <b>polari</b> (acqua) sciolgono composti ionici (NaCl) e molecole polari (zucchero, etanolo).</li>
<li>I solventi <b>apolari</b> (esano, benzina) sciolgono sostanze apolari (grassi, oli, iodio I₂).</li>
</ul>
<p>Nel caso del sale in acqua, le molecole d'acqua, polari, si dispongono attorno agli ioni con il polo di carica opposta rivolto verso di essi: l'ossigeno (δ−) verso Na⁺, gli idrogeni (δ+) verso Cl⁻. Questa <b>solvatazione</b> (<b>idratazione</b> se il solvente è l'acqua) libera gli ioni dal reticolo cristallino e li tiene separati.</p>
<p>Il processo ha un bilancio energetico: serve energia per rompere il reticolo (<b>energia reticolare</b>) e si libera energia quando gli ioni vengono idratati. Il saldo è l'<b>entalpia di soluzione</b>: se è positiva la soluzione si raffredda (le \"borse del ghiaccio istantaneo\" contengono nitrato d'ammonio), se è negativa si scalda (le \"scaldamani\" chimiche). Ma l'entalpia non basta: si scioglie anche ciò che è un po' endotermico perché il <b>disordine</b> (entropia) aumenta quando le particelle si mescolano.</p>`
    },
    {
      type: "3d",
      title: "Ione sodio idratato",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.5, color: "#a855f7", label: "Na⁺" },
          { x: 1.3, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" },
          { x: 1.9, y: 0.75, z: 0, r: 0.3, color: "#e2e8f0", label: "H" },
          { x: 1.9, y: -0.75, z: 0, r: 0.3, color: "#e2e8f0", label: "H" },
          { x: -1.3, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" },
          { x: -1.9, y: 0.75, z: 0, r: 0.3, color: "#e2e8f0", label: "H" },
          { x: -1.9, y: -0.75, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }
        ],
        bonds: [[1, 2], [1, 3], [4, 5], [4, 6]]
      },
      caption: "Modello semplificato: le molecole d'acqua si orientano con l'ossigeno (negativo) verso lo ione Na⁺. In realtà lo ione è circondato da circa 6 molecole d'acqua."
    },
    {
      type: "text",
      title: "Solubilità: satura, insatura, sovrasatura",
      html: `<p>La <b>solubilità</b> è la massima quantità di soluto che si scioglie in una data quantità di solvente a una certa temperatura (per esempio g di soluto ogni 100 g di acqua). Si distinguono tre situazioni:</p>
<ul>
<li><b>Soluzione insatura</b>: contiene meno soluto del massimo; se ne aggiungi, si scioglie.</li>
<li><b>Soluzione satura</b>: contiene il massimo; il soluto in più resta sul fondo e si instaura un <b>equilibrio dinamico</b>: velocità di dissoluzione = velocità di cristallizzazione.</li>
<li><b>Soluzione sovrasatura</b>: contiene <i>più</i> soluto del massimo. È instabile: si ottiene raffreddando con cautela una soluzione satura a caldo, e basta un granello o un urto per far cristallizzare l'eccesso (è il principio degli scaldamani all'acetato di sodio).</li>
</ul>
<p><b>Effetto della temperatura.</b> Per la maggior parte dei solidi la solubilità <b>aumenta</b> con la temperatura (il nitrato di potassio, KNO₃, ne guadagna moltissimo; il cloruro di sodio quasi per nulla). Per i <b>gas</b> accade il contrario: diminuisce. Per questo un lago che si scalda soffre di carenza d'ossigeno disciolto, e una bibita tiepida perde subito la sua anidride carbonica.</p>
<p><b>Effetto della pressione sui gas: la legge di Henry</b> (William Henry, 1803). A temperatura costante la solubilità di un gas in un liquido è <b>proporzionale alla sua pressione parziale</b> sul liquido: <b>S = k<sub>H</sub> · P</b>. Nella bibita il CO₂ è sciolto a pressione di alcune atmosfere; aprendo il tappo la pressione scende a quella atmosferica (dove il CO₂ è appena lo 0,04% dell'aria) e il gas esce in bolle. I subacquei risalendo lentamente evitano che l'azoto sciolto nel sangue, col calo di pressione, formi bolle (<b>malattia da decompressione</b>).</p>`
    },
    {
      type: "svg",
      title: "Curve di solubilità (andamento qualitativo)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="70" y1="250" x2="560" y2="250" stroke="#334155" stroke-width="2"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#334155" stroke-width="2"/>
<text x="315" y="285" font-size="15" fill="#334155" text-anchor="middle">temperatura (da 0 °C a 100 °C)</text>
<text x="20" y="140" font-size="15" fill="#334155" text-anchor="middle" transform="rotate(-90 20 140)">solubilità</text>
<path d="M70 235 Q300 190 540 50" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M70 190 L540 170" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M70 120 Q200 215 540 240" fill="none" stroke="#16a34a" stroke-width="4"/>
<text x="470" y="40" font-size="15" font-weight="bold" fill="#dc2626">KNO₃ (sale che sale molto)</text>
<text x="330" y="160" font-size="15" font-weight="bold" fill="#2563eb">NaCl (quasi piatta)</text>
<text x="250" y="232" font-size="15" font-weight="bold" fill="#16a34a">O₂, CO₂ (gas: scende)</text>
<text x="300" y="20" font-size="14" fill="#475569" text-anchor="middle">Tre andamenti tipici: le curve sono schematiche, non dati misurati.</text>
</svg>`,
      caption: "I solidi in genere si sciolgono di più a caldo; i gas di meno."
    },
    {
      type: "example",
      title: "Quanta bibita frizzante possiamo ancora aspettarci?",
      html: `<p>Una bibita è imbottigliata con CO₂ a circa 3 atm. Per la legge di Henry la quantità di gas sciolto è proporzionale alla pressione: se la pressione parziale scende da 3 atm a 0,0004 · 1 atm ≈ 0,0004 atm (aria libera), il gas disciolto in equilibrio diventerebbe circa 7500 volte più piccolo. La bibita \"piatta\" sembra quindi inevitabile: in realtà il rilascio è lento (il gas deve nucleare in bolle) e la fa durare minuti. Mettila in frigorifero: a bassa temperatura il gas è più solubile e la bibita resta frizzante più a lungo.</p>
<p>Ma attenzione: questo è un ordine di grandezza, non un dato di laboratorio. La cosa importante è il <b>meccanismo</b>: pressione alta e temperatura bassa tengono il gas in soluzione.</p>`
    },
    {
      type: "text",
      title: "Soluti che si dissociano e il prodotto di solubilità",
      html: `<p>Un composto ionico \"poco solubile\" come il cloruro d'argento AgCl non è del tutto insolubile: una piccola parte si scioglie e si dissocia. In una soluzione satura sul fondo c'è il solido in equilibrio con i suoi ioni:</p>
<p style="text-align:center"><b>AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)</b></p>
<p>La costante di questo equilibrio si chiama <b>prodotto di solubilità</b>: <b>K<sub>ps</sub> = [Ag⁺][Cl⁻]</b> (il solido non compare nell'espressione). A 25 °C K<sub>ps</sub>(AgCl) ≈ 1,8·10⁻¹⁰. Se si scioglie una quantità <i>s</i> (mol/L), si ha [Ag⁺] = [Cl⁻] = <i>s</i> e dunque <i>s</i> = √(1,8·10⁻¹⁰) ≈ 1,3·10⁻⁵ mol/L: pochissimo.</p>
<p>Se nella soluzione è già presente un altro sale con lo stesso ione (per esempio NaCl, che porta Cl⁻), l'AgCl si scioglie <b>ancora meno</b>: è l'<b>effetto dello ione comune</b>, un'applicazione del principio di Le Châtelier che incontrerai nella prossima lezione. Il K<sub>ps</sub> serve anche a prevedere se un precipitato si forma: se il prodotto delle concentrazioni degli ioni (Q) supera il K<sub>ps</sub>, la soluzione è sovrasatura e il solido precipita; se è minore, non si forma.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: solubilità",
      questions: [
        { type: "mc", q: "Un gas sciolto in acqua, riscaldando l'acqua...", options: ["diventa meno solubile e tende a uscire", "diventa più solubile", "non cambia solubilità", "reagisce sempre con l'acqua"], answer: 0, explain: "A differenza della maggior parte dei solidi, i gas sono meno solubili a temperatura più alta." },
        { type: "tf", q: "Una soluzione satura con del solido sul fondo è in equilibrio dinamico: il solido si scioglie e cristallizza con la stessa velocità.", answer: true, explain: "Non è un sistema fermo: i due processi continuano, ma le velocità sono uguali e la concentrazione resta costante." },
        { type: "mc", q: "Quale sostanza si scioglie meglio in esano (solvente apolare)?", options: ["Olio d'oliva", "NaCl", "Zucchero", "KNO₃"], answer: 0, explain: "L'olio è apolare: il simile scioglie il simile. I composti ionici e lo zucchero preferiscono l'acqua." }
      ]
    },
    {
      type: "text",
      title: "Le proprietà colligative",
      html: `<p>Sciogliendo un soluto <b>non volatile</b> in un solvente, alcune proprietà del solvente cambiano in modo che dipende <b>solo dal numero di particelle di soluto disciolte</b> (in rapporto al solvente) e non dalla loro natura. Si chiamano <b>proprietà colligative</b> (dal latino <i>colligare</i>, legare insieme: sono proprietà \"legate\" al numero). Sono quattro:</p>
<ol>
<li><b>Abbassamento della tensione di vapore</b> (legge di Raoult, 1887): P = χ<sub>solvente</sub> · P°. Il soluto \"occupa posto\" in superficie e il solvente evapora meno.</li>
<li><b>Innalzamento ebullioscopico</b>: la soluzione bolle a una temperatura <i>più alta</i>. <b>ΔT<sub>eb</sub> = K<sub>eb</sub> · m · i</b>.</li>
<li><b>Abbassamento crioscopico</b>: la soluzione congela a una temperatura <i>più bassa</i>. <b>ΔT<sub>cr</sub> = K<sub>cr</sub> · m · i</b>.</li>
<li><b>Pressione osmotica</b>: <b>π = M · R · T · i</b>, con R = 0,0821 L·atm/(mol·K) e T in kelvin.</li>
</ol>
<p>Qui <b>m</b> è la <b>molalità</b> (mol di soluto per kg di solvente), ricordata in terza perché non cambia con la temperatura. Le costanti dipendono dal solvente: per l'<b>acqua</b> K<sub>eb</sub> = 0,512 °C·kg/mol e K<sub>cr</sub> = 1,86 °C·kg/mol.</p>
<p>Il fattore <b>i</b> (di van 't Hoff) è il numero di particelle che si formano per unità di soluto: 1 per le sostanze molecolari non elettrolitiche (glucosio, saccarosio, etanolo), circa 2 per NaCl (Na⁺ + Cl⁻), circa 3 per CaCl₂. È ciò che fa del sale, a parità di moli, un antigelo molto più efficace dello zucchero. In soluzioni concentrate i valori reali di i sono un po' inferiori, perché gli ioni di carica opposta si attraggono (\"coppie ioniche\").</p>`
    },
    {
      type: "svg",
      title: "Il diagramma di fase dell'acqua con e senza soluto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#334155" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#334155" stroke-width="2"/>
<text x="315" y="285" font-size="15" fill="#334155" text-anchor="middle">temperatura</text>
<text x="18" y="140" font-size="15" fill="#334155" text-anchor="middle" transform="rotate(-90 18 140)">pressione di vapore</text>
<line x1="60" y1="120" x2="570" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<text x="565" y="112" font-size="14" fill="#64748b" text-anchor="end">pressione esterna (1 atm)</text>
<path d="M120 245 Q300 200 470 60" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M140 245 Q350 215 530 60" fill="none" stroke="#dc2626" stroke-width="4"/>
<circle cx="408" cy="120" r="7" fill="#2563eb"/><circle cx="480" cy="120" r="7" fill="#dc2626"/>
<text x="408" y="150" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">acqua pura</text>
<text x="408" y="168" font-size="14" fill="#2563eb" text-anchor="middle">bolle qui</text>
<text x="500" y="150" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">soluzione</text>
<text x="500" y="168" font-size="14" fill="#dc2626" text-anchor="middle">bolle qui</text>
<text x="445" y="104" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">ΔT eb</text>
<text x="300" y="25" font-size="14" fill="#475569" text-anchor="middle">La soluzione ha tensione di vapore minore, quindi serve più calore per raggiungere 1 atm.</text>
</svg>`,
      caption: "L'ebollizione avviene quando la tensione di vapore uguaglia la pressione esterna: con il soluto ci si arriva a temperatura più alta."
    },
    {
      type: "example",
      title: "Il sale sulle strade ghiacciate",
      html: `<p>Quanto abbassa la temperatura di congelamento 1,0 mol di NaCl (58,5 g) sciolta in 1,0 kg di acqua? Molalità m = 1,0 mol/kg; i ≈ 2.</p>
<p>ΔT<sub>cr</sub> = 1,86 · 1,0 · 2 ≈ <b>3,7 °C</b>: la soluzione congela a circa −3,7 °C. Con più sale l'abbassamento cresce, fino a un limite: la miscela acqua-NaCl con circa il 23% di sale (il punto <b>eutettico</b>) congela a −21 °C, e questo è il minimo raggiungibile con il solo sale. Sotto quella temperatura il sale è inutile, e infatti nelle regioni molto fredde si usano altri sali come il cloruro di calcio. Il prezzo ambientale è alto: il sale danneggia vegetazione, suoli e strutture metalliche.</p>
<p>Per lo stesso motivo il glicole etilenico nel radiatore dell'auto (antigelo) abbassa il punto di congelamento del liquido refrigerante e ne innalza anche il punto di ebollizione.</p>`
    },
    {
      type: "example",
      title: "Calcolare una massa molare dal punto di congelamento",
      html: `<p>La crioscopia è un metodo classico per \"pesare\" molecole. Si sciolgono 18,0 g di una sostanza molecolare non dissociabile in 500 g di acqua e si misura ΔT<sub>cr</sub> = 1,86 °C. Quanto vale la sua massa molare?</p>
<ol>
<li>ΔT<sub>cr</sub> = K<sub>cr</sub> · m (i = 1) → m = 1,86 / 1,86 = 1,00 mol/kg.</li>
<li>In 0,500 kg di acqua ci sono quindi 0,500 mol di soluto.</li>
<li>M = 18,0 g / 0,500 mol = <b>36 g/mol</b>.</li>
</ol>
<p>È la stessa logica con cui, in laboratorio, si poteva determinare la massa molare di sostanze sconosciute prima che esistessero gli spettrometri di massa.</p>`
    },
    {
      type: "text",
      title: "L'osmosi",
      html: `<p>Nella lezione sulla membrana cellulare hai già incontrato l'osmosi. Ora puoi quantificarla. Una <b>membrana semipermeabile</b> lascia passare il solvente ma non il soluto. Se separa due soluzioni a concentrazione diversa, l'acqua passa spontaneamente verso la soluzione <b>più concentrata</b>, diluendola. Per impedire questo flusso bisogna applicare alla soluzione concentrata una pressione pari alla <b>pressione osmotica</b>: <b>π = i · M · R · T</b>.</p>
<p>Per una soluzione di glucosio 0,10 M a 25 °C (298 K): π = 0,10 · 0,0821 · 298 ≈ <b>2,4 atm</b>. Una soluzione apparentemente poco concentrata genera una pressione paragonabile a quella di una gomma di bicicletta: ecco perché l'osmosi è così importante per le cellule.</p>
<ul>
<li>Il sangue ha una osmolarità di circa 0,3 osmol/L (≈ 300 mOsm/L). La <b>soluzione fisiologica</b> (NaCl 0,9% m/V, circa 0,154 M, quindi ≈ 0,31 osmol/L perché NaCl dà due particelle) è <b>isotonica</b>: i globuli rossi mantengono la loro forma.</li>
<li>In una soluzione <b>ipotonica</b> (acqua distillata) i globuli rossi si gonfiano e scoppiano (<b>emolisi</b>).</li>
<li>In una soluzione <b>ipertonica</b> si raggrinziscono (<b>crenazione</b>).</li>
<li>La <b>conservazione sotto sale</b> di carne e pesce funziona perché l'ambiente ipertonico sottrae acqua ai microbi per osmosi.</li>
<li>L'<b>osmosi inversa</b> (si applica una pressione maggiore di π dal lato della soluzione) dissala l'acqua di mare, che ha una pressione osmotica di circa 27 atm.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Si dissocia o no? Chi ha più particelle?",
      widget: "classify",
      options: {
        groups: ["Si dissocia in ioni (i > 1)", "Resta in molecole (i = 1)"],
        items: [["NaCl", 0], ["glucosio", 1], ["CaCl₂", 0], ["etanolo", 1], ["saccarosio", 1], ["KBr", 0], ["urea", 1], ["MgCl₂", 0]]
      },
      caption: "Il fattore di van 't Hoff dipende da quante particelle libera ogni unità di soluto."
    },
    {
      type: "quiz",
      title: "Mini-quiz: proprietà colligative",
      questions: [
        { type: "mc", q: "A parità di molalità, quale soluzione acquosa congela alla temperatura più bassa?", options: ["CaCl₂ 0,1 m", "NaCl 0,1 m", "Glucosio 0,1 m", "Saccarosio 0,1 m"], answer: 0, explain: "CaCl₂ libera circa 3 particelle per unità (i ≈ 3), NaCl 2, i due zuccheri 1: ΔT è proporzionale a i · m." },
        { type: "num", q: "Di quanti °C si abbassa il punto di congelamento dell'acqua sciogliendo 1,0 mol di glucosio in 1,0 kg d'acqua? (Kcr = 1,86 °C·kg/mol)", answer: 1.86, tol: 0.05, unit: "°C", explain: "ΔT = Kcr · m · i = 1,86 · 1,0 · 1 = 1,86 °C." },
        { type: "tf", q: "Le proprietà colligative dipendono dal tipo di soluto, non dal numero di particelle disciolte.", answer: false, explain: "È l'opposto: dipendono solo dal numero di particelle (non dalla loro identità chimica)." }
      ]
    },
    {
      type: "remember",
      title: "Formule e idee-chiave",
      html: `<ul>
<li><b>Il simile scioglie il simile</b>: polare con polare, apolare con apolare.</li>
<li><b>Gas</b>: solubilità ↑ se P ↑ (Henry, S = k<sub>H</sub>·P) e ↓ se T ↑. <b>Solidi</b>: di solito ↑ se T ↑.</li>
<li><b>K<sub>ps</sub></b> per un sale poco solubile in equilibrio con i suoi ioni; Q &gt; K<sub>ps</sub> → precipita.</li>
<li><b>ΔT<sub>eb</sub> = K<sub>eb</sub>·m·i</b>; <b>ΔT<sub>cr</sub> = K<sub>cr</sub>·m·i</b> (acqua: 0,512 e 1,86); <b>π = i·M·R·T</b> (R = 0,0821 L·atm/(mol·K)).</li>
<li>Il fattore <b>i</b> conta le particelle: 1 (molecole), ≈2 (NaCl), ≈3 (CaCl₂).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le proprietà colligative",
      intro: "Non serve ricordare quattro formule: basta capire una sola immagine, quella delle particelle che \"affollano\" il solvente.",
      tabs: [
        { label: "🚌 L'autobus affollato", html: "<p>Immagina la superficie dell'acqua come la porta di un autobus da cui le molecole d'acqua \"scendono\" (evaporano). Se tra i passeggeri ci sono molte persone che non scendono mai (le particelle di soluto), la porta è più ingombra e <b>meno acqua riesce a uscire</b>: la tensione di vapore cala. Siccome per bollire serve che la tensione di vapore arrivi alla pressione esterna, bisogna scaldare di più. Lo stesso ostacolo rende più difficile organizzarsi nel reticolo del ghiaccio: si congela solo a temperatura più bassa.</p>" },
        { label: "🎢 Il disordine", html: "<p>Una spiegazione più profonda è l'<b>entropia</b>. Il solvente puro è un po' \"più ordinato\" di una soluzione, dove il soluto aggiunge possibilità di disposizione. Il solvente in soluzione ha quindi meno tendenza a lasciarsi trasformare in vapore o in solido (stati più ordinati o indipendenti dalla soluzione), e per questo cambia il punto di ebollizione e quello di congelamento. È anche il motivo per cui l'osmosi spinge verso la soluzione più concentrata: il mescolamento aumenta il disordine.</p>" },
        { label: "🧂 Le particelle contano", html: "<p>Metti nel tuo bicchiere 1 mol di zucchero oppure 1 mol di sale: nel primo caso hai 1 mol di particelle (molecole di saccarosio) e nel secondo 2 mol (Na⁺ e Cl⁻). Se le proprietà colligative \"contano le particelle\", il sale ha un effetto doppio. È il significato del fattore <b>i</b> di van 't Hoff. Prova con il gioco di classificazione sopra: chi ha i = 1 e chi i &gt; 1?</p>" },
        { label: "🧪 Ione sodio e acqua in 3D", html: "<p>Ruota il modello: le molecole d'acqua si orientano attorno a Na⁺ con l'ossigeno rivolto verso lo ione. Ogni ione idratato porta con sé \"un'armatura\" d'acqua: è questo che dissolve i cristalli e che, nelle soluzioni concentrate, riduce l'acqua libera disponibile.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#a855f7", label: "Na⁺" }, { x: 1.3, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 1.9, y: 0.75, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }, { x: 1.9, y: -0.75, z: 0, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[1, 2], [1, 3]] } }
      ]
    },
    {
      type: "curiosity",
      title: "Perché non si può bere l'acqua di mare",
      html: `<p>L'acqua di mare ha una salinità media di circa il 3,5% (35 g di sali per kg), con una pressione osmotica di circa 27 atm, molto maggiore di quella del sangue (circa 7,5 atm). Se la bevi, i tuoi reni devono produrre un'urina <b>più concentrata</b> dell'acqua che hai bevuto per eliminare quel sale, e di conseguenza serve più acqua di quella che hai ingerito: bevendo acqua di mare ti disidrati di più. I pesci marini hanno il problema opposto e ne bevono continuamente, espellendo il sale con le branchie.</p>`
    },
    {
      type: "curiosity",
      title: "Il Mar Morto e la salamoia: si galleggia",
      html: `<p>Il Mar Morto ha una salinità di circa il 34% (contro il 3,5% degli oceani): la densità dell'acqua, circa 1,24 g/cm³, è molto maggiore di quella del corpo umano, circa 1,0 g/cm³, perciò si galleggia senza sforzo. Nel Great Salt Lake, negli Stati Uniti, accade lo stesso. Un uovo crudo affonda in acqua dolce ma galleggia in una soluzione satura di sale: un esperimento domestico che dimostra come il soluto cambi le proprietà del solvente (qui la densità; non è una proprietà colligativa, ma ricorda che sciogliere qualcosa in acqua cambia sempre qualcosa).</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: le soluzioni",
      nodes: [
        { id: "pol", label: "Polarità e solvatazione", x: 15, y: 12, color: "#2563eb", html: "Il simile scioglie il simile: l'acqua idrata gli ioni.", why: "Deriva dalla struttura delle molecole e dalle forze intermolecolari studiate con i legami chimici: Debye (1912) e Pauling descrissero il momento di dipolo e la polarità dei legami." },
        { id: "sol", label: "Solubilità", x: 50, y: 12, color: "#16a34a", html: "Quanto soluto si scioglie: dipende da T e, per i gas, dalla pressione.", why: "Henry (1803) misurò i gas in acqua. L'equilibrio dinamico tra solido e soluzione si formalizzò con il K<sub>ps</sub> grazie a Nernst (1889), che studiò gli equilibri ionici." },
        { id: "kps", label: "Prodotto di solubilità", x: 85, y: 12, color: "#f59e0b", html: "K<sub>ps</sub> = [catione][anione] per un sale poco solubile.", why: "È un caso particolare di costante di equilibrio, introdotta con la legge di azione di massa di Guldberg e Waage (1864)." },
        { id: "rao", label: "Legge di Raoult", x: 30, y: 52, color: "#a855f7", html: "P = χ<sub>solvente</sub> · P°: la tensione di vapore cala.", why: "François-Marie Raoult (1887) misurò sperimentalmente gli abbassamenti di tensione di vapore e di punto di congelamento di molte soluzioni." },
        { id: "col", label: "Proprietà colligative", x: 70, y: 52, color: "#ef4444", html: "ΔT<sub>eb</sub>, ΔT<sub>cr</sub>, π dipendono dal numero di particelle.", why: "Van 't Hoff (1886) mostrò che la pressione osmotica segue una legge analoga a quella dei gas; per questo ebbe il primo Nobel per la chimica (1901). Il fattore i fu poi spiegato da Arrhenius con la dissociazione ionica." },
        { id: "osm", label: "Osmosi", x: 50, y: 88, color: "#0ea5e9", html: "L'acqua passa verso la soluzione più concentrata: π = iMRT.", why: "Nollet (1748) osservò l'osmosi, Pfeffer (1877) misurò la pressione osmotica con membrane artificiali, e Van 't Hoff la interpretò. È alla base della fisiologia cellulare e della dissalazione." }
      ],
      edges: [["pol", "sol", "determina la"], ["sol", "kps", "per i sali dà il"], ["rao", "col", "spiega le"], ["col", "osm", "include l'"], ["pol", "col", "non influisce sulle"], ["kps", "col", "è diverso dalle"]]
    }
  ],
  glossary: [
    { t: "Solvatazione", d: "Interazione tra le molecole di solvente e le particelle di soluto che le circondano (idratazione se il solvente è l'acqua)." },
    { t: "Solubilità", d: "Massima quantità di soluto che si scioglie in una data quantità di solvente a una data temperatura." },
    { t: "Soluzione satura", d: "Soluzione che contiene la massima quantità di soluto, in equilibrio con il soluto non sciolto." },
    { t: "Soluzione sovrasatura", d: "Soluzione instabile che contiene più soluto del massimo possibile a quella temperatura." },
    { t: "Legge di Henry", d: "A temperatura costante la solubilità di un gas in un liquido è proporzionale alla sua pressione parziale." },
    { t: "Prodotto di solubilità (K<sub>ps</sub>)", d: "Costante di equilibrio di un sale poco solubile: prodotto delle concentrazioni degli ioni in soluzione satura." },
    { t: "Molalità", d: "Moli di soluto per chilogrammo di solvente (mol/kg)." },
    { t: "Proprietà colligative", d: "Proprietà delle soluzioni che dipendono solo dal numero di particelle di soluto e non dalla loro natura." },
    { t: "Fattore di van 't Hoff (i)", d: "Numero di particelle in cui si separa ogni unità di soluto: 1 per i non elettroliti, circa 2 per NaCl." },
    { t: "Pressione osmotica", d: "Pressione da applicare alla soluzione per impedire il passaggio del solvente attraverso una membrana semipermeabile." },
    { t: "Soluzione isotonica", d: "Soluzione con la stessa pressione osmotica di un'altra (per esempio del sangue)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché il cloruro di sodio si scioglie bene in acqua?", options: ["L'acqua è polare e idrata gli ioni Na⁺ e Cl⁻", "L'acqua reagisce con il sodio formando idrogeno", "Il sale è apolare come l'acqua", "L'acqua è un solvente apolare"], answer: 0, explain: "Le molecole d'acqua, polari, si orientano attorno agli ioni e li separano dal reticolo cristallino (solvatazione)." },
      { type: "tf", q: "Riscaldando l'acqua, la solubilità dell'ossigeno disciolto aumenta.", answer: false, explain: "I gas sono meno solubili a temperatura maggiore: per questo i laghi caldi hanno poco ossigeno." },
      { type: "mc", q: "Aprendo una bottiglia di spumante escono bolle perché...", options: ["la pressione scende e il CO₂ diventa meno solubile", "il CO₂ si forma dalla reazione con l'aria", "la temperatura sale di colpo", "il liquido evapora"], answer: 0, explain: "Per la legge di Henry, calando la pressione parziale del gas si riduce la quantità che può rimanere disciolta." },
      { type: "num", q: "La solubilità di un gas è 0,030 mol/L a 1,0 atm. Quanto sarà a 3,0 atm alla stessa temperatura (Henry)?", answer: 0.09, tol: 0.001, unit: "mol/L", explain: "S è proporzionale a P: 0,030 · 3,0 = 0,090 mol/L." },
      { type: "num", q: "Quanto vale la molalità di una soluzione con 2,0 mol di soluto in 500 g di acqua?", answer: 4, tol: 0.01, unit: "mol/kg", explain: "m = n / massa di solvente in kg = 2,0 / 0,500 = 4,0 mol/kg." },
      { type: "num", q: "Di quanti °C si abbassa il punto di congelamento dell'acqua sciogliendo 0,50 mol di saccarosio in 1,0 kg d'acqua? (Kcr = 1,86 °C·kg/mol)", answer: 0.93, tol: 0.02, unit: "°C", explain: "ΔT = 1,86 · 0,50 · 1 = 0,93 °C (i = 1 per il saccarosio)." },
      { type: "num", q: "Di quanti °C aumenta il punto di ebollizione sciogliendo 1,0 mol di glucosio in 1,0 kg d'acqua? (Keb = 0,512 °C·kg/mol)", answer: 0.512, tol: 0.01, unit: "°C", explain: "ΔT = 0,512 · 1,0 · 1 = 0,512 °C: un effetto piccolo, per questo l'acqua salata per la pasta bolle quasi alla stessa temperatura." },
      { type: "mc", q: "Una cellula è posta in una soluzione ipertonica. Che cosa accade?", options: ["Perde acqua per osmosi e si raggrinzisce", "Acquista acqua e si gonfia", "Non cambia nulla", "Acquista soluto per osmosi"], answer: 0, explain: "L'acqua esce verso la soluzione più concentrata: nei globuli rossi questa è la crenazione." },
      { type: "mc", q: "Il prodotto di solubilità di AgCl è Kps = [Ag⁺][Cl⁻]. Se Q > Kps...", options: ["si forma un precipitato", "il solido si scioglie ancora", "la soluzione è insatura", "Q diventa uguale a zero"], answer: 0, explain: "Q > Kps significa soluzione sovrasatura: l'eccesso di ioni si deposita come solido." },
      { type: "order", q: "Metti in ordine di effetto crescente sul punto di congelamento (a parità di molalità 0,1 m).", items: ["Glucosio (i = 1)", "NaCl (i ≈ 2)", "CaCl₂ (i ≈ 3)"], explain: "ΔT è proporzionale a i · m: più particelle, maggiore abbassamento." }
    ]
  }
});

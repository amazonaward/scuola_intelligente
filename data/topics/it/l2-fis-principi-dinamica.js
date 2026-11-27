TOPIC('it', {
  id: "l2-fis-principi-dinamica",
  title: "I principi della dinamica",
  intro: "Perché un pallone smette di rotolare? Perché sei spinto contro il sedile quando l'auto parte? Per quasi duemila anni, seguendo Aristotele, si è pensato che un corpo si muova solo se qualcosa lo spinge di continuo. Galileo e poi <b>Isaac Newton</b> hanno rovesciato questa idea, e i tre principi della dinamica (pubblicati nei <i>Philosophiae Naturalis Principia Mathematica</i>, 1687) sono ancora la base della meccanica con cui progettiamo ponti, auto e sonde spaziali.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Primo principio: l'inerzia",
      html: `<p>Nella fisica aristotelica lo stato «naturale» dei corpi sulla Terra era la quiete. Galileo, con esperimenti su piani inclinati e un celebre esperimento mentale, capì che è l'<b>attrito</b> a fermare i corpi, non la loro natura. Se una pallina scende da un piano inclinato e risale su un secondo piano, arriva quasi alla stessa altezza; riducendo l'inclinazione del secondo piano deve percorrere strade sempre più lunghe; su un piano orizzontale perfettamente liscio non si fermerebbe mai.</p>
<p><b>Primo principio (principio di inerzia).</b> Un corpo non soggetto a forze, o soggetto a forze la cui <b>risultante è nulla</b>, mantiene il proprio stato di quiete o di moto rettilineo uniforme.</p>
<p>La tendenza a conservare il proprio stato di moto si chiama <b>inerzia</b>, e la sua misura è la <b>massa inerziale</b>: più massa significa più difficoltà a cambiare velocità. Quando l'auto frena bruscamente il tuo corpo «continua» in avanti: non è una forza che ti spinge, è l'assenza di forza sul tuo corpo, finché la cintura non interviene.</p>
<p>Il principio vale nei <b>sistemi di riferimento inerziali</b>: quelli in cui il principio stesso è verificato (un treno a velocità costante lo è, un'auto che frena o curva no).</p>`
    },
    {
      type: "example",
      title: "Il bicchiere e la tovaglia",
      html: `<p>Se tiri via di scatto una tovaglia da sotto un bicchiere, il bicchiere resta (quasi) fermo: la forza di attrito agisce per un tempo brevissimo e non riesce a cambiare in modo sensibile la sua velocità. Più il bicchiere ha massa, meglio funziona il trucco.</p>
<p>Sul ghiaccio di un'arena di pattinaggio senti l'inerzia in modo evidente: dopo una spinta continui a scivolare a lungo, perché l'attrito è piccolo. Nello spazio, lontano da stelle e pianeti, una sonda spenta continua a muoversi a velocità costante per milioni di anni: la sonda Voyager 1, lanciata nel 1977, ne è un esempio.</p>`
    },
    {
      type: "text",
      title: "Secondo principio: F = m · a",
      html: `<p>Se la risultante delle forze non è nulla, la velocità cambia. <b>Secondo principio.</b> L'accelerazione di un corpo è <b>direttamente proporzionale alla forza risultante</b> e <b>inversamente proporzionale alla massa</b>, con la stessa direzione e verso della forza:</p>
<p style="text-align:center"><b>F⃗<sub>ris</sub> = m · a⃗</b></p>
<p>L'unità di forza è il <b>newton</b>: 1 N = 1 kg · m/s², la forza che imprime a 1 kg l'accelerazione di 1 m/s². Alcuni punti da fissare:</p>
<ul>
<li>conta la <b>risultante</b> (somma vettoriale) di tutte le forze che agiscono sul corpo;</li>
<li>a parità di forza, un corpo con più massa accelera meno;</li>
<li>il <b>peso</b> P = m·g è un caso particolare: un corpo in caduta libera ha accelerazione g perché la sola forza è il peso (F = m·g = m·a, quindi a = g per tutti i corpi: la massa si semplifica);</li>
<li>se a = 0 si ritrova il primo principio (equilibrio): il primo principio è quindi un caso del secondo, ma storicamente e logicamente definisce i sistemi inerziali in cui il secondo vale.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Più forza, più massa",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="dF" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="dA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="20" y1="120" x2="620" y2="120" stroke="#475569" stroke-width="3"/>
<rect x="80" y="70" width="60" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<text x="110" y="100" font-size="15" fill="#0f172a" text-anchor="middle">m</text>
<line x1="140" y1="95" x2="200" y2="95" stroke="#dc2626" stroke-width="4" marker-end="url(#dF)"/>
<text x="150" y="60" font-size="15" fill="#dc2626" font-weight="bold">F</text>
<line x1="80" y1="140" x2="170" y2="140" stroke="#16a34a" stroke-width="4" marker-end="url(#dA)"/>
<text x="95" y="162" font-size="15" fill="#16a34a" font-weight="bold">a = F/m</text>
<line x1="20" y1="260" x2="620" y2="260" stroke="#475569" stroke-width="3"/>
<rect x="80" y="190" width="120" height="70" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<text x="140" y="232" font-size="15" fill="#0f172a" text-anchor="middle">2m</text>
<line x1="200" y1="225" x2="260" y2="225" stroke="#dc2626" stroke-width="4" marker-end="url(#dF)"/>
<text x="215" y="212" font-size="15" fill="#dc2626" font-weight="bold">F</text>
<line x1="80" y1="280" x2="125" y2="280" stroke="#16a34a" stroke-width="4" marker-end="url(#dA)"/>
<text x="135" y="285" font-size="15" fill="#16a34a" font-weight="bold">a/2</text>
<text x="330" y="100" font-size="16" fill="#0f172a">Stessa forza, massa doppia:</text>
<text x="330" y="124" font-size="16" fill="#0f172a">accelerazione dimezzata</text>
</g>
</svg>`,
      caption: "L'accelerazione è proporzionale alla forza e inversamente proporzionale alla massa."
    },
    {
      type: "example",
      title: "Auto, ascensore e piano inclinato",
      html: `<p><b>Auto.</b> Un'auto di 1500 kg accelera sotto una forza motrice netta di 3000 N: a = 3000/1500 = <b>2 m/s²</b>. In 5 s la sua velocità passa da 0 a 10 m/s.</p>
<p><b>Ascensore.</b> Una persona di 70 kg sta su una bilancia nell'ascensore (g = 9,8 m/s²). Ferma: la bilancia segna 70 · 9,8 = 686 N (≈ 70 kg). Se l'ascensore <b>accelera verso l'alto</b> con 2 m/s²: N − mg = ma, N = 70 · (9,8 + 2) = <b>826 N</b> (ti senti più pesante). Se accelera verso il basso di 2 m/s²: N = 70 · (9,8 − 2) = <b>546 N</b> (ti senti più leggero). Se la fune si spezza (caduta libera, a = g) N = 0: assenza di peso apparente.</p>
<p><b>Piano inclinato liscio.</b> Su un piano inclinato di 30° senza attrito, l'accelerazione lungo il piano è g · sen 30° = 9,8 · 0,5 = <b>4,9 m/s²</b>, indipendente dalla massa.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: primo e secondo principio",
      questions: [
        { type: "mc", q: "Un corpo si muove a velocità costante su una retta. Che cosa si può dire della risultante delle forze?", options: ["È diretta nel verso del moto", "È nulla", "È uguale al peso", "È costante ma non nulla"], answer: 1, explain: "Velocità costante significa accelerazione nulla, quindi risultante nulla (primo principio)." },
        { type: "num", q: "Quale forza risultante serve per accelerare con 3 m/s² un carrello di 20 kg?", answer: 60, tol: 0.1, unit: "N", explain: "F = m·a = 20 · 3 = 60 N." },
        { type: "tf", q: "Una massa doppia, sotto la stessa forza, ha accelerazione doppia.", answer: false, explain: "a = F/m: con massa doppia l'accelerazione si dimezza." }
      ]
    },
    {
      type: "text",
      title: "Terzo principio: azione e reazione",
      html: `<p><b>Terzo principio.</b> Se un corpo A esercita una forza su un corpo B, allora B esercita su A una forza di <b>uguale modulo, stessa direzione e verso opposto</b>: F⃗<sub>AB</sub> = −F⃗<sub>BA</sub>.</p>
<p>Due precisazioni importanti, spesso fonte di errori:</p>
<ul>
<li>le due forze sono applicate a <b>corpi diversi</b>: per questo non si annullano tra loro (si annullerebbero solo se agissero sullo stesso corpo);</li>
<li>non c'è «prima l'azione e poi la reazione»: nascono insieme e sono dello <b>stesso tipo</b> (due forze gravitazionali, due forze di contatto, ecc.).</li>
</ul>
<p>Se spingi un muro con 100 N, il muro spinge te con 100 N. Quando cammini, spingi il suolo all'indietro con il piede e il suolo ti spinge in avanti: è questa reazione (attrito statico) che ti fa avanzare. Un razzo spinge i gas verso il basso e i gas spingono il razzo verso l'alto, anche nel vuoto dove non c'è nulla su cui «appoggiarsi».</p>
<p>Le forze di una coppia azione-reazione hanno lo stesso modulo anche se i corpi hanno masse diverse; ma le accelerazioni sono diverse: a = F/m. Quando la Terra attira una mela con 1 N, anche la mela attira la Terra con 1 N, ma l'accelerazione della Terra è irrisoria.</p>`
    },
    {
      type: "svg",
      title: "Coppie di forze: libro sul tavolo",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="tP" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="tN" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="200" y="140" width="140" height="50" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="270" y="170" font-size="16" fill="#0f172a" text-anchor="middle">Libro</text>
<rect x="120" y="190" width="300" height="30" fill="#d6d3d1" stroke="#57534e" stroke-width="3"/>
<text x="270" y="210" font-size="16" fill="#0f172a" text-anchor="middle">Tavolo</text>
<line x1="270" y1="165" x2="270" y2="235" stroke="#dc2626" stroke-width="4" marker-end="url(#tP)"/>
<text x="285" y="245" font-size="15" fill="#dc2626" font-weight="bold">Peso P (Terra→libro)</text>
<line x1="240" y1="140" x2="240" y2="70" stroke="#2563eb" stroke-width="4" marker-end="url(#tN)"/>
<text x="130" y="60" font-size="15" fill="#2563eb" font-weight="bold">N (tavolo→libro)</text>
<text x="450" y="150" font-size="15" fill="#0f172a">Il libro è fermo: P e N si</text>
<text x="450" y="172" font-size="15" fill="#0f172a">equilibrano, ma NON sono</text>
<text x="450" y="194" font-size="15" fill="#0f172a">azione e reazione.</text>
<text x="450" y="226" font-size="15" fill="#0f172a">La reazione di N è la spinta</text>
<text x="450" y="248" font-size="15" fill="#0f172a">del libro sul tavolo.</text>
</g>
</svg>`,
      caption: "Peso e forza normale agiscono sullo stesso corpo e si bilanciano: non formano una coppia azione-reazione."
    },
    {
      type: "curiosity",
      title: "Perché un cavallo riesce a tirare un carro?",
      html: `<p>Un classico paradosso: «Se il carro tira il cavallo indietro con la stessa forza con cui il cavallo tira il carro, come fanno a muoversi?». La soluzione è che le due forze agiscono su corpi diversi. Il carro accelera perché la forza del cavallo su di esso supera l'attrito; il cavallo avanza perché spinge sul terreno con gli zoccoli e il terreno (reazione) spinge lui in avanti più di quanto il carro lo trattenga. Per muoversi bisogna considerare <b>tutte le forze su ciascun corpo</b>.</p>`
    },
    {
      type: "remember",
      title: "I tre principi in una riga",
      html: `<p><b>1°</b>: se la risultante è nulla, il moto non cambia (inerzia). <b>2°</b>: F = m·a (la risultante causa l'accelerazione). <b>3°</b>: ogni forza ha la sua reazione, uguale e opposta, <b>su un altro corpo</b>.</p>
<p>Metodo per i problemi: 1) disegna il corpo e <b>tutte le forze che agiscono su di lui</b>; 2) scegli un asse e scrivi la somma delle componenti uguale a m·a; 3) risolvi per l'incognita; 4) controlla unità di misura e ordine di grandezza.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Il secondo principio è tutto qui: forza, massa e accelerazione. Guardalo con altre immagini.",
      tabs: [
        { label: "🛒 Il carrello della spesa", html: "<p>Spingere un carrello vuoto è facile: poca massa, grande accelerazione. Con il carrello pieno la stessa spinta lo fa partire molto più lentamente (a = F/m). Se due persone spingono insieme nello stesso verso la forza raddoppia e anche l'accelerazione raddoppia; se spingono in versi opposti con la stessa forza il carrello non si muove (risultante nulla). Ogni volta che «senti» di dover spingere di più per muovere qualcosa di più pesante stai ritrovando F = m·a.</p>" },
        { label: "📈 Il grafico", html: "<p>Se in un laboratorio misuri l'accelerazione di un carrello al variare della forza (massa costante), i punti si dispongono su una <b>retta passante per l'origine</b>: a ∝ F. Se tieni fissa la forza e cambi la massa, il grafico a–m è un'<b>iperbole</b>: a ∝ 1/m. Il coefficiente angolare della retta a–F vale 1/m.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><line x1="60" y1="220" x2="320" y2="220" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="60" y2="30" stroke="#475569" stroke-width="2"/><line x1="60" y1="220" x2="290" y2="60" stroke="#16a34a" stroke-width="4"/><text x="300" y="236" font-size="15" fill="#0f172a">F</text><text x="40" y="40" font-size="15" fill="#0f172a">a</text><text x="190" y="248" font-size="15" fill="#16a34a" font-weight="bold">a ∝ F</text><line x1="360" y1="220" x2="580" y2="220" stroke="#475569" stroke-width="2"/><line x1="360" y1="220" x2="360" y2="30" stroke="#475569" stroke-width="2"/><path d="M375 40 Q 400 190 560 212" fill="none" stroke="#dc2626" stroke-width="4"/><text x="570" y="240" font-size="15" fill="#0f172a">m</text><text x="340" y="40" font-size="15" fill="#0f172a">a</text><text x="470" y="248" font-size="15" fill="#dc2626" font-weight="bold">a ∝ 1/m</text></g></svg>` },
        { label: "🚀 Nello spazio", html: "<p>Un astronauta fuori dalla stazione spaziale che lancia un martello in una direzione parte nella direzione opposta: terzo principio. Se il martello ha massa 2 kg e l'astronauta con la tuta 100 kg, quando le due forze sono uguali l'accelerazione dell'astronauta è 50 volte più piccola di quella del martello (a = F/m). La quantità di moto totale si conserva: m₁v₁ + m₂v₂ = 0, quindi v_astronauta = −(2/100)·v_martello. Non servono né aria né pavimento.</p>" }
      ]
    },
    {
      type: "quiz",
      title: "Controlla: azione e reazione",
      questions: [
        { type: "mc", q: "Quale è la reazione alla forza peso che la Terra esercita su una mela?", options: ["La spinta del tavolo sulla mela", "La forza con cui la mela attira la Terra", "L'attrito dell'aria", "Non esiste"], answer: 1, explain: "Il terzo principio: se la Terra attira la mela con P, la mela attira la Terra con una forza uguale e opposta." },
        { type: "tf", q: "Le forze di azione e reazione si annullano perché sono uguali e opposte.", answer: false, explain: "Sono applicate a corpi diversi, quindi non si possono sommare per ottenere la risultante su un singolo corpo." },
        { type: "num", q: "Una persona di 50 kg su un ascensore che accelera verso l'alto con 1 m/s² (g = 10 m/s²): quanto vale la forza normale sul pavimento?", answer: 550, tol: 1, unit: "N", explain: "N − mg = ma → N = m(g + a) = 50 · 11 = 550 N." }
      ]
    },
    {
      type: "curiosity",
      title: "Newton nel 1687",
      html: `<p>I <i>Principia</i> furono pubblicati nel 1687, grazie anche all'incoraggiamento e al finanziamento di Edmond Halley. Newton non si limitò a enunciare i tre principi: li usò, insieme alla legge di gravitazione universale, per spiegare le orbite dei pianeti, le maree e la traiettoria delle comete. Era la prima volta che la stessa fisica spiegava la caduta di una mela e il moto della Luna. Oggi sappiamo che i principi valgono con ottima approssimazione per velocità molto minori di quella della luce e per oggetti non microscopici: oltre questi limiti servono la relatività di Einstein (1905, 1915) e la meccanica quantistica.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della dinamica",
      nodes: [
        { id: "inerzia", label: "1° principio: inerzia", x: 18, y: 12, color: "#16a34a", html: "Senza forza risultante, quiete o moto rettilineo uniforme.", why: "Galileo capì che l'attrito, non la natura dei corpi, frena i moti; Descartes e poi Newton ne diedero la formulazione generale. Rovesciò la fisica aristotelica, secondo cui occorreva una causa per mantenere un moto." },
        { id: "fma", label: "2° principio: F = m·a", x: 50, y: 40, color: "#ef4444", html: "La risultante delle forze determina l'accelerazione.", why: "Newton definì la forza come causa della variazione della quantità di moto (p = m·v): F = Δp/Δt. Da qui F = ma quando la massa è costante. Dà un metodo quantitativo per prevedere ogni moto." },
        { id: "azione", label: "3° principio: azione-reazione", x: 82, y: 12, color: "#2563eb", html: "Le forze nascono in coppie su corpi diversi.", why: "Nasce dall'osservazione degli urti (Wren, Huygens, Wallis): la quantità di moto totale si conserva. Newton la generalizzò a ogni interazione: è l'origine della conservazione della quantità di moto." },
        { id: "massa", label: "Massa inerziale", x: 20, y: 72, color: "#f59e0b", html: "Misura la resistenza di un corpo alla variazione di velocità.", why: "Il fatto che la massa inerziale (in F = ma) coincida con quella gravitazionale (nel peso) spiega perché tutti i corpi cadono con lo stesso g: è il principio di equivalenza, poi base della relatività generale di Einstein." },
        { id: "peso", label: "Peso e caduta libera", x: 52, y: 85, color: "#0ea5e9", html: "P = m·g: tutti i corpi cadono con accelerazione g.", why: "Galileo mostrò che, a meno della resistenza dell'aria, la caduta non dipende dalla massa. Nel 1971 l'astronauta David Scott lo mostrò sulla Luna, lasciando cadere insieme un martello e una piuma." },
        { id: "conserv", label: "Conservazione della quantità di moto", x: 85, y: 62, color: "#a855f7", html: "In un sistema isolato la quantità di moto totale non cambia.", why: "Conseguenza diretta del terzo principio: le variazioni di quantità di moto dei due corpi sono uguali e opposte, e la somma resta costante. È valida anche dove la meccanica newtoniana non lo è." }
      ],
      edges: [["inerzia", "fma", "è il caso a = 0 del"], ["fma", "massa", "definisce"], ["fma", "peso", "spiega"], ["azione", "conserv", "implica la"], ["fma", "azione", "si completa con"], ["massa", "peso", "uguaglia per l'equivalenza"]]
    }
  ],
  glossary: [
    { t: "Inerzia", d: "Tendenza di un corpo a conservare il proprio stato di quiete o di moto rettilineo uniforme." },
    { t: "Massa inerziale", d: "Misura della resistenza di un corpo alla variazione della sua velocità." },
    { t: "Risultante", d: "Somma vettoriale di tutte le forze che agiscono su un corpo." },
    { t: "Newton (N)", d: "Forza che imprime a un corpo di 1 kg un'accelerazione di 1 m/s²." },
    { t: "Sistema inerziale", d: "Sistema di riferimento in cui valgono i principi della dinamica nella forma usuale." },
    { t: "Reazione vincolare", d: "Forza esercitata da una superficie o un vincolo su un corpo, per esempio la forza normale." },
    { t: "Caduta libera", d: "Moto sotto la sola forza peso: accelerazione g per tutti i corpi." },
    { t: "Quantità di moto", d: "Prodotto della massa per la velocità: p = m·v." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Chi ha formulato per primo l'idea che un corpo non soggetto a forze mantenga il moto rettilineo uniforme, rovesciando la fisica aristotelica?", options: ["Galileo Galilei", "Tolomeo", "Archimede", "Keplero"], answer: 0, explain: "Galileo, con i suoi esperimenti e ragionamenti sul moto, preparò il principio di inerzia poi formulato da Newton." },
      { type: "tf", q: "Un corpo in moto a velocità costante deve essere soggetto a una forza risultante diretta nel verso del moto.", answer: false, explain: "È proprio l'idea aristotelica smentita dal primo principio: a velocità costante la risultante è nulla." },
      { type: "num", q: "Una forza risultante di 120 N agisce su un corpo di 30 kg. Calcola l'accelerazione.", answer: 4, tol: 0.05, unit: "m/s²", explain: "a = F/m = 120/30 = 4 m/s²." },
      { type: "num", q: "Un'auto di 1000 kg passa da 0 a 20 m/s in 8 s con accelerazione costante. Quanto vale la forza risultante?", answer: 2500, tol: 5, unit: "N", explain: "a = 20/8 = 2,5 m/s²; F = 1000 · 2,5 = 2500 N." },
      { type: "mc", q: "Che cosa succede alla forza normale su una persona in un ascensore che frena durante la salita (accelerazione verso il basso)?", options: ["Aumenta", "Diminuisce", "Resta uguale a mg", "Diventa nulla sempre"], answer: 1, explain: "Se a è verso il basso, N = m(g − a) < mg: ti senti più leggero." },
      { type: "mc", q: "Una pallina da tennis colpisce una racchetta. Che relazione c'è tra le forze di contatto?", options: ["Quella sulla racchetta è maggiore", "Quella sulla pallina è maggiore", "Sono uguali in modulo e opposte", "Dipende dalla velocità della pallina"], answer: 2, explain: "Terzo principio: le forze sono sempre uguali e opposte, anche se gli effetti (accelerazioni) sono diversi." },
      { type: "tf", q: "Il peso e la forza normale su un libro fermo su un tavolo formano una coppia azione-reazione.", answer: false, explain: "Agiscono sullo stesso corpo. La reazione al peso è la forza con cui il libro attira la Terra." },
      { type: "num", q: "Su un piano inclinato liscio di 30° (g = 10 m/s²) un blocco scivola. Calcola l'accelerazione lungo il piano.", answer: 5, tol: 0.1, unit: "m/s²", explain: "a = g · sen 30° = 10 · 0,5 = 5 m/s²." },
      { type: "text", q: "Come si chiama l'unità di misura della forza nel Sistema Internazionale?", answer: ["newton", "il newton", "n"], explain: "Il newton: 1 N = 1 kg·m/s²." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Galileo studia il moto sui piani inclinati", "Newton pubblica i Principia (1687)", "Einstein formula la relatività ristretta (1905)", "Primo sbarco sulla Luna (1969)"], explain: "Galileo (primi del Seicento) → Newton (1687) → Einstein (1905) → Apollo 11 (1969)." }
    ]
  }
});

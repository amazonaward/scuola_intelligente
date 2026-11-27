TOPIC('it', {
  id: "l4-fis-onde-meccaniche",
  title: "Le onde meccaniche",
  intro: "Un sasso nello stagno, la corda di una chitarra, il tremolio di un terremoto: in tutti questi fenomeni <b>non viaggia la materia, viaggia una perturbazione</b>. Un'onda trasporta <b>energia e informazione</b> da un punto all'altro senza spostare in blocco il mezzo. In questa lezione impariamo a descrivere un'onda con poche grandezze (<b>ampiezza, periodo, frequenza, lunghezza d'onda, velocità</b>), scopriamo che due onde possono rafforzarsi o annullarsi (<b>interferenza</b>) e capiamo perché una corda fissata agli estremi può suonare solo certe note (<b>onde stazionarie</b>).",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Che cos'è un'onda meccanica",
      html: `<p>Una <b>onda meccanica</b> è la propagazione di una perturbazione in un <b>mezzo materiale elastico</b> (corda, acqua, aria, roccia). Ogni piccola porzione del mezzo oscilla attorno alla propria posizione di equilibrio e, tirando o spingendo la porzione vicina, passa la perturbazione. Due fatti fondamentali:</p>
<ul>
<li>l'onda trasporta <b>energia e quantità di moto</b>, ma <b>non trasporta materia</b>: un tappo di sughero sul mare sale e scende ma non viene portato a riva dall'onda;</li>
<li>le onde meccaniche <b>non si propagano nel vuoto</b>, perché serve un mezzo (a differenza delle onde elettromagnetiche, come la luce).</li>
</ul>
<p>Si distinguono due famiglie in base al rapporto tra direzione di oscillazione e direzione di propagazione:</p>
<ul>
<li><b>onde trasversali</b>: il mezzo oscilla <b>perpendicolarmente</b> alla propagazione (onda su una corda, onde S dei terremoti);</li>
<li><b>onde longitudinali</b>: il mezzo oscilla <b>parallelamente</b> alla propagazione, con compressioni e rarefazioni (il suono nell'aria, onde P dei terremoti, una molla spinta e rilasciata a un'estremità).</li>
</ul>
<p>Un'onda può essere un <b>impulso</b> (una sola perturbazione) o un <b>treno d'onde periodico</b>; quando la sorgente oscilla in modo armonico (moto armonico semplice, già visto) l'onda è <b>sinusoidale</b> e tutta la teoria diventa particolarmente semplice.</p>`
    },
    {
      type: "svg",
      title: "Anatomia di un'onda",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="30" y1="150" x2="570" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<path d="M50 150 Q 100 50 150 150 T 250 150 T 350 150 T 450 150 T 550 150" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="100" y1="150" x2="100" y2="100" stroke="#dc2626" stroke-width="3"/>
<text x="108" y="128" font-size="16" fill="#b91c1c" font-weight="bold">A</text>
<text x="108" y="94" font-size="14" fill="#b91c1c">ampiezza</text>
<line x1="100" y1="235" x2="300" y2="235" stroke="#16a34a" stroke-width="3"/>
<line x1="100" y1="225" x2="100" y2="245" stroke="#16a34a" stroke-width="3"/>
<line x1="300" y1="225" x2="300" y2="245" stroke="#16a34a" stroke-width="3"/>
<text x="200" y="265" font-size="16" fill="#15803d" text-anchor="middle" font-weight="bold">lunghezza d'onda λ</text>
<text x="100" y="82" font-size="14" fill="#334155" text-anchor="middle">cresta</text>
<text x="200" y="222" font-size="14" fill="#334155" text-anchor="middle">ventre</text>
<text x="450" y="60" font-size="16" fill="#1e293b" text-anchor="middle" font-weight="bold">v = λ · f = λ / T</text>
<text x="450" y="85" font-size="14" fill="#475569" text-anchor="middle">velocità di propagazione</text>
<path d="M500 200 L 560 200" stroke="#7c3aed" stroke-width="3"/>
<polygon points="560,200 548,194 548,206" fill="#7c3aed"/>
<text x="500" y="222" font-size="14" fill="#6d28d9">propagazione</text>
</g>
</svg>`,
      caption: "L'ampiezza A è lo spostamento massimo dall'equilibrio; la lunghezza d'onda λ è la distanza tra due punti consecutivi nello stesso stato di oscillazione (due creste, per esempio)."
    },
    {
      type: "text",
      title: "Le grandezze che descrivono un'onda",
      html: `<ul>
<li><b>Ampiezza A</b> (m per una corda): lo spostamento massimo; l'energia trasportata è proporzionale ad A².</li>
<li><b>Periodo T</b> (s): tempo di un'oscillazione completa di un punto del mezzo.</li>
<li><b>Frequenza f</b> (hertz, Hz = 1/s): oscillazioni al secondo, <b>f = 1/T</b>. È fissata dalla <b>sorgente</b> e non cambia quando l'onda cambia mezzo.</li>
<li><b>Lunghezza d'onda λ</b> (m): distanza percorsa dall'onda in un periodo.</li>
<li><b>Velocità di propagazione v</b>: in un periodo l'onda avanza di una lunghezza d'onda, quindi</li>
</ul>
<p style="text-align:center"><b>v = λ / T = λ · f</b></p>
<p>La velocità dipende dal <b>mezzo</b> (elasticità e inerzia), non dalla sorgente. Per una <b>corda</b> di tensione F e densità lineare μ (massa per unità di lunghezza):</p>
<p style="text-align:center"><b>v = √(F / μ)</b></p>
<p>Una corda più tesa trasmette l'onda più velocemente; una più pesante la trasmette più lentamente. Se la sorgente impone f e il mezzo impone v, la lunghezza d'onda è <b>conseguenza</b>: λ = v/f. Quando un'onda passa da un mezzo all'altro, f resta uguale, v cambia e quindi cambia anche λ.</p>
<p>Matematicamente un'onda armonica che viaggia verso destra è descritta da y(x,t) = A·sin(kx − ωt), con numero d'onda k = 2π/λ e pulsazione ω = 2π/T = 2πf; il rapporto ω/k è proprio la velocità v.</p>`
    },
    {
      type: "example",
      title: "Onde del mare e corda tesa",
      html: `<p><b>Mare.</b> Un boa vede passare una cresta ogni 6 s, e due creste consecutive sono distanti 12 m. Allora T = 6 s, f = 1/6 ≈ 0,17 Hz, λ = 12 m e v = λ/T = 12/6 = <b>2 m/s</b> (7,2 km/h).</p>
<p><b>Corda.</b> Una corda con tensione F = 100 N e densità lineare μ = 0,010 kg/m (10 g per metro) propaga le onde a v = √(100/0,010) = √10 000 = <b>100 m/s</b>. Se la facciamo oscillare a 50 Hz, λ = v/f = 100/50 = <b>2 m</b>.</p>
<p><b>Un trucco di ragionamento:</b> quadruplicando la tensione la velocità solo raddoppia (v ∝ √F). Per questo accordare una chitarra richiede piccoli giri delle meccaniche.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: grandezze dell'onda",
      questions: [
        { type: "num", q: "Un'onda ha frequenza 5 Hz e lunghezza d'onda 0,8 m. Qual è la sua velocità?", answer: 4, tol: 0.01, unit: "m/s", explain: "v = λ·f = 0,8 × 5 = 4 m/s." },
        { type: "mc", q: "Quando un'onda passa da un mezzo a un altro, quale grandezza resta invariata?", options: ["La velocità", "La lunghezza d'onda", "La frequenza", "L'ampiezza"], answer: 2, explain: "La frequenza è imposta dalla sorgente e non cambia; cambiano v e λ." },
        { type: "tf", q: "Un'onda sull'acqua trasporta le molecole d'acqua dalla sorgente fino alla riva.", answer: false, explain: "Le particelle oscillano attorno a una posizione di equilibrio; viaggiano energia e perturbazione, non la materia." }
      ]
    },
    {
      type: "text",
      title: "Sovrapposizione e interferenza",
      html: `<p>Nei mezzi elastici, per perturbazioni non troppo grandi, vale il <b>principio di sovrapposizione</b>: quando due onde si incontrano, lo spostamento risultante in ogni punto è la <b>somma algebrica</b> degli spostamenti che ciascuna onda produrrebbe da sola. Dopo l'incrocio le onde proseguono <b>inalterate</b>: non si «scontrano» come palline.</p>
<p>Questo fenomeno si chiama <b>interferenza</b>. Per due sorgenti che oscillano <b>in fase</b> con la stessa lunghezza d'onda λ, in un punto P conta la <b>differenza di cammino</b> Δ = |r<sub>1</sub> − r<sub>2</sub>| tra le distanze di P dalle due sorgenti:</p>
<ul>
<li><b>interferenza costruttiva</b> (ampiezza massima, somma delle ampiezze) se <b>Δ = k·λ</b>, con k = 0, 1, 2, …: le onde arrivano in fase;</li>
<li><b>interferenza distruttiva</b> (ampiezza minima, nulla se le ampiezze sono uguali) se <b>Δ = (k + ½)·λ</b>: le onde arrivano in opposizione di fase, cresta contro ventre.</li>
</ul>
<p>L'energia non sparisce: nei punti di interferenza distruttiva ne arriva meno, ma nei punti costruttivi ne arriva di più. L'interferenza è la <b>firma</b> delle onde: un flusso di palline non può dare «buio più buio» sommando due fasci. Per questo vedremo che è la prova decisiva della natura ondulatoria della luce.</p>`
    },
    {
      type: "svg",
      title: "Due onde si sommano",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<g font-family="sans-serif">
<text x="150" y="25" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">Costruttiva (in fase)</text>
<text x="450" y="25" font-size="16" fill="#991b1b" text-anchor="middle" font-weight="bold">Distruttiva (in opposizione)</text>
<line x1="20" y1="80" x2="280" y2="80" stroke="#cbd5e1" stroke-width="1"/>
<line x1="320" y1="80" x2="580" y2="80" stroke="#cbd5e1" stroke-width="1"/>
<path d="M30 80 Q 50 50 70 80 T 110 80 T 150 80 T 190 80 T 230 80 T 270 80" fill="none" stroke="#2563eb" stroke-width="3"/>
<path d="M30 80 Q 50 50 70 80 T 110 80 T 150 80 T 190 80 T 230 80 T 270 80" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3 5" transform="translate(0 0)"/>
<path d="M330 80 Q 350 50 370 80 T 410 80 T 450 80 T 490 80 T 530 80 T 570 80" fill="none" stroke="#2563eb" stroke-width="3"/>
<path d="M330 80 Q 350 110 370 80 T 410 80 T 450 80 T 490 80 T 530 80 T 570 80" fill="none" stroke="#f59e0b" stroke-width="3"/>
<line x1="20" y1="215" x2="280" y2="215" stroke="#cbd5e1" stroke-width="1"/>
<line x1="320" y1="215" x2="580" y2="215" stroke="#cbd5e1" stroke-width="1"/>
<path d="M30 215 Q 50 155 70 215 T 110 215 T 150 215 T 190 215 T 230 215 T 270 215" fill="none" stroke="#16a34a" stroke-width="4"/>
<line x1="330" y1="215" x2="570" y2="215" stroke="#dc2626" stroke-width="4"/>
<text x="150" y="270" font-size="15" fill="#166534" text-anchor="middle">ampiezza doppia: 2A</text>
<text x="450" y="270" font-size="15" fill="#991b1b" text-anchor="middle">ampiezza nulla</text>
<text x="150" y="130" font-size="14" fill="#334155" text-anchor="middle">Δ = k·λ</text>
<text x="450" y="130" font-size="14" fill="#334155" text-anchor="middle">Δ = (k + ½)·λ</text>
</g>
</svg>`,
      caption: "In alto le due onde (blu e arancione), in basso la loro somma. Per una differenza di cammino di mezza lunghezza d'onda le onde si annullano a vicenda."
    },
    {
      type: "example",
      title: "Due altoparlanti in una stanza",
      html: `<p>Due altoparlanti emettono lo stesso tono con λ = 2 m, in fase. Un microfono sta a 7 m dal primo e a 10 m dal secondo: Δ = 3 m = 1,5·λ, cioè (k + ½)·λ con k = 1 ⟹ <b>interferenza distruttiva</b>: il suono è quasi assente.</p>
<p>Se il microfono si sposta a 8 m e 12 m, Δ = 4 m = 2·λ ⟹ <b>interferenza costruttiva</b>: il suono è massimo. Camminando nella stanza si sentono zone forti e zone «morte»: è esattamente quello che fanno le cuffie con <b>cancellazione attiva del rumore</b>, che generano un'onda in opposizione di fase rispetto al rumore esterno.</p>`
    },
    {
      type: "text",
      title: "Riflessione e onde stazionarie",
      html: `<p>Quando un'onda raggiunge l'estremità di una corda, viene <b>riflessa</b>. Se l'estremità è <b>fissa</b> l'onda torna <b>capovolta</b> (sfasata di π, cioè mezza lunghezza d'onda); se l'estremità è <b>libera</b> torna con la stessa forma. Sovrapponendosi a quella che arriva, l'onda riflessa può produrre un'<b>onda stazionaria</b>: un pattern che oscilla sul posto, senza propagarsi.</p>
<p>In un'onda stazionaria ci sono punti sempre fermi, i <b>nodi</b> (interferenza distruttiva), e punti che oscillano con ampiezza massima, i <b>ventri</b> (interferenza costruttiva). Due nodi consecutivi distano <b>λ/2</b>. Per una corda di lunghezza <b>L fissata ai due estremi</b>, agli estremi devono esserci dei nodi, quindi in L entra un numero intero di mezze lunghezze d'onda:</p>
<p style="text-align:center"><b>L = n · λ/2 &nbsp;⟹&nbsp; λ<sub>n</sub> = 2L/n &nbsp;⟹&nbsp; f<sub>n</sub> = n · v/(2L) = n · f<sub>1</sub></b> &nbsp; (n = 1, 2, 3, …)</p>
<p>La corda può vibrare stabilmente solo a queste frequenze, dette <b>modi normali</b> o <b>armoniche</b>: la <b>fondamentale</b> f<sub>1</sub> = v/(2L) e poi i multipli interi 2f<sub>1</sub>, 3f<sub>1</sub>, … Le frequenze sono <b>quantizzate</b> dalle condizioni al contorno: un'idea che ritroverai, molto più in grande, nella fisica quantistica con gli elettroni negli atomi.</p>`
    },
    {
      type: "svg",
      title: "Le prime tre armoniche di una corda",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g font-family="sans-serif">
<text x="20" y="28" font-size="15" fill="#1e3a8a">n = 1: λ = 2L, f = f₁ (fondamentale)</text>
<circle cx="60" cy="75" r="6" fill="#334155"/><circle cx="540" cy="75" r="6" fill="#334155"/>
<path d="M60 75 Q 300 15 540 75 Q 300 135 60 75" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="20" y="128" font-size="15" fill="#14532d">n = 2: λ = L, f = 2f₁</text>
<circle cx="60" cy="175" r="6" fill="#334155"/><circle cx="540" cy="175" r="6" fill="#334155"/>
<path d="M60 175 Q 180 125 300 175 T 540 175" fill="none" stroke="#16a34a" stroke-width="3"/>
<path d="M60 175 Q 180 225 300 175 T 540 175" fill="none" stroke="#16a34a" stroke-width="3"/>
<circle cx="300" cy="175" r="5" fill="#dc2626"/>
<text x="312" y="200" font-size="14" fill="#dc2626">nodo</text>
<text x="20" y="215" font-size="15" fill="#78350f">n = 3: λ = 2L/3, f = 3f₁</text>
<circle cx="60" cy="260" r="6" fill="#334155"/><circle cx="540" cy="260" r="6" fill="#334155"/>
<path d="M60 260 Q 120 225 180 260 T 300 260 T 420 260 T 540 260" fill="none" stroke="#b45309" stroke-width="3"/>
<path d="M60 260 Q 120 295 180 260 T 300 260 T 420 260 T 540 260" fill="none" stroke="#b45309" stroke-width="3"/>
</g>
</svg>`,
      caption: "Ogni armonica ha un numero intero di «fusi» tra i due estremi fissi. I punti rossi sono nodi, sempre fermi."
    },
    {
      type: "example",
      title: "La corda della chitarra",
      html: `<p>La prima corda di una chitarra (la più acuta, mi<sub>4</sub>) suona a circa f<sub>1</sub> = 330 Hz con lunghezza vibrante L = 0,65 m. La velocità sulla corda è v = 2L·f<sub>1</sub> = 2 × 0,65 × 330 ≈ <b>430 m/s</b>.</p>
<p>Le altre armoniche sono a 660 Hz, 990 Hz, 1320 Hz, … Premendo la corda al <b>dodicesimo tasto</b> si dimezza L: la frequenza raddoppia (660 Hz), cioè la nota sale di <b>un'ottava</b>. In generale f ∝ 1/L: corde più corte suonano più acute. È anche il motivo per cui gli strumenti a corda lunghi (contrabbasso, arpa) producono i suoni più bassi.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: interferenza e onde stazionarie",
      questions: [
        { type: "mc", q: "In un'onda stazionaria, qual è la distanza tra due nodi consecutivi?", options: ["λ/4", "λ/2", "λ", "2λ"], answer: 1, explain: "Tra due nodi consecutivi c'è un ventre: la distanza è mezza lunghezza d'onda." },
        { type: "num", q: "Una corda fissata agli estremi ha fondamentale 110 Hz. Quanto vale la terza armonica?", answer: 330, tol: 0.01, unit: "Hz", explain: "f₃ = 3·f₁ = 330 Hz." },
        { type: "tf", q: "Due onde che interferiscono distruttivamente fanno sparire per sempre la loro energia.", answer: false, explain: "L'energia non si perde: si ridistribuisce, con meno energia nei punti distruttivi e più in quelli costruttivi." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le onde",
      intro: "Se la formula v = λf ti sembra astratta, prova una di queste strade.",
      tabs: [
        {
          label: "🌀 L'ola allo stadio",
          html: "<p>Pensa all'<b>ola</b> in uno stadio: ogni spettatore si alza e si siede restando al proprio posto, ma la «gobba» corre lungo le gradinate. Il <b>periodo</b> T è il tempo che ogni persona impiega a fare un ciclo; la <b>lunghezza d'onda</b> λ è la distanza tra due persone nella stessa posizione (per esempio tutte in piedi); la <b>velocità</b> dell'ola è λ/T. Nessuno viaggia da un lato all'altro dello stadio, ma l'informazione sì: è un'onda trasversale vivente.</p>"
        },
        {
          label: "🧩 Molla slinky e rete di pendoli",
          html: "<p>Una <b>serie di pendoli collegati da molle</b> (o una molla slinky) mostra come nasce un'onda: spostando il primo pendolo, la molla tira il secondo, che tira il terzo, con un piccolo ritardo. L'onda è proprio questo <b>ritardo che si propaga</b>. Più le molle sono rigide (elasticità alta) e più le masse sono leggere (inerzia bassa), più l'onda corre veloce: v ≈ √(elasticità/inerzia). Nella corda l'elasticità è la tensione F e l'inerzia è μ: v = √(F/μ).</p>"
        },
        {
          label: "🔗 Abbina grandezza e formula",
          html: "<p>Collega ogni grandezza o fenomeno alla relazione corretta.</p>",
          widget: "match",
          options: { pairs: [
            ["Frequenza", "f = 1/T"],
            ["Velocità dell'onda", "v = λ·f"],
            ["Velocità su una corda", "v = √(F/μ)"],
            ["Interferenza costruttiva", "Δ = k·λ"],
            ["Interferenza distruttiva", "Δ = (k + ½)·λ"],
            ["Armoniche di una corda fissa", "f_n = n·v/(2L)"]
          ] }
        },
        {
          label: "🎨 Disegno: onda a un istante e nel tempo",
          html: "<p>Un'onda si può «fotografare» in due modi diversi: lo <b>spazio</b> a tempo fisso (si legge λ) o il <b>tempo</b> a posizione fissa (si legge T).</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#f8fafc'/><g font-family='sans-serif'><text x='150' y='25' font-size='15' fill='#1e3a8a' text-anchor='middle' font-weight='bold'>y(x) a t fisso</text><text x='450' y='25' font-size='15' fill='#7c2d12' text-anchor='middle' font-weight='bold'>y(t) a x fisso</text><line x1='20' y1='120' x2='280' y2='120' stroke='#94a3b8' stroke-width='2'/><line x1='320' y1='120' x2='580' y2='120' stroke='#94a3b8' stroke-width='2'/><path d='M30 120 Q 70 50 110 120 T 190 120 T 270 120' fill='none' stroke='#2563eb' stroke-width='4'/><path d='M330 120 Q 370 50 410 120 T 490 120 T 570 120' fill='none' stroke='#ea580c' stroke-width='4'/><line x1='70' y1='190' x2='190' y2='190' stroke='#16a34a' stroke-width='3'/><line x1='370' y1='190' x2='490' y2='190' stroke='#16a34a' stroke-width='3'/><text x='130' y='220' font-size='15' fill='#15803d' text-anchor='middle'>distanza: λ</text><text x='430' y='220' font-size='15' fill='#15803d' text-anchor='middle'>durata: T</text><text x='150' y='245' font-size='14' fill='#475569' text-anchor='middle'>x (m)</text><text x='450' y='245' font-size='14' fill='#475569' text-anchor='middle'>t (s)</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Onde sismiche e tsunami",
      html: `<p>Un terremoto genera onde di tipo diverso: le <b>onde P</b> (primarie, longitudinali) viaggiano più veloci e attraversano solidi e liquidi; le <b>onde S</b> (secondarie, trasversali) sono più lente e <b>non attraversano i liquidi</b>. Nel 1906 <b>Richard Oldham</b> e poi nel 1914 <b>Beno Gutenberg</b> usarono proprio questo fatto per dedurre che il <b>nucleo esterno della Terra è fluido</b>: le onde S spariscono dall'altra parte del mondo, nella «zona d'ombra».</p>
<p>Uno <b>tsunami</b> è un'onda di acqua con λ di centinaia di km: in oceano aperto, dove la profondità è h ≈ 4000 m, la velocità è circa v = √(g·h) = √(9,8 × 4000) ≈ 200 m/s, cioè <b>circa 700 km/h</b>, ma con ampiezza di appena mezzo metro. Avvicinandosi alla costa l'acqua è meno profonda, l'onda rallenta e l'energia si concentra in una parete d'acqua alta metri.</p>`
    },
    {
      type: "curiosity",
      title: "Quando l'oscillazione si rafforza: la risonanza",
      html: `<p>Ogni sistema elastico ha delle <b>frequenze proprie</b>, come le armoniche della corda. Se lo si forza con una sollecitazione periodica a una di queste frequenze, l'ampiezza cresce enormemente: è la <b>risonanza</b>. È quello che fai spingendo un'altalena al momento giusto. Una cantante può rompere un bicchiere di cristallo se emette una nota potente alla sua frequenza propria. Gli ingegneri progettano ponti e grattacieli con smorzatori proprio per evitare che il vento o i passi dei pedoni «accordino» la struttura sulla sua frequenza naturale.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>L'onda trasporta <b>energia, non materia</b>; trasversale = oscillazione ⟂ propagazione, longitudinale = oscillazione ∥ propagazione.</li>
<li><b>v = λ·f</b>; la frequenza è della sorgente, la velocità è del mezzo. Sulla corda <b>v = √(F/μ)</b>.</li>
<li>Interferenza: <b>Δ = kλ</b> costruttiva, <b>Δ = (k+½)λ</b> distruttiva.</li>
<li>Corda fissata agli estremi: <b>f<sub>n</sub> = n·v/(2L)</b>; nodi a distanza λ/2.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa delle onde meccaniche",
      nodes: [
        { id: "onda", label: "Onda meccanica", x: 50, y: 10, color: "#2563eb", html: "Propagazione di una perturbazione in un mezzo elastico, con trasporto di energia ma non di materia.", why: "Nasce perché le parti del mezzo sono collegate da forze elastiche: spostare un punto sposta il vicino con un ritardo. Il ritardo si propaga a velocità finita, determinata da elasticità e inerzia del mezzo." },
        { id: "grandezze", label: "Grandezze: A, T, f, λ, v", x: 12, y: 40, color: "#16a34a", html: "v = λ·f, f = 1/T; v = √(F/μ) su una corda.", why: "In un periodo la perturbazione avanza di una lunghezza d'onda, perciò v = λ/T. La formula della corda si ricava dalla seconda legge di Newton applicata a un piccolo tratto di corda sotto tensione." },
        { id: "sovrapposizione", label: "Principio di sovrapposizione", x: 85, y: 40, color: "#f59e0b", html: "Gli spostamenti di più onde si sommano punto per punto; poi ciascuna prosegue inalterata.", why: "Vale perché le equazioni del moto della corda (o dell'aria) per piccole ampiezze sono lineari: la somma di due soluzioni è ancora una soluzione." },
        { id: "interferenza", label: "Interferenza", x: 70, y: 70, color: "#ef4444", html: "Costruttiva per Δ = kλ, distruttiva per Δ = (k+½)λ.", why: "Dipende dalla differenza di fase: un cammino in più di mezza lunghezza d'onda equivale a un'oscillazione opposta, quindi le onde si cancellano." },
        { id: "stazionarie", label: "Onde stazionarie", x: 30, y: 78, color: "#8b5cf6", html: "Nodi e ventri fissi; su una corda lunga L solo le frequenze f_n = n·v/(2L).", why: "Sono interferenza tra onda incidente e riflessa. Gli estremi fissi impongono nodi, e solo un numero intero di mezze lunghezze d'onda soddisfa questa condizione al contorno." },
        { id: "risonanza", label: "Risonanza", x: 55, y: 95, color: "#64748b", html: "Una forzante alla frequenza propria fa crescere l'ampiezza.", why: "Se a ogni ciclo la forza trasferisce energia in fase con il moto, l'energia si accumula; solo l'attrito (smorzamento) la limita." }
      ],
      edges: [["onda", "grandezze", "descritta da"], ["onda", "sovrapposizione", "obbedisce a"], ["sovrapposizione", "interferenza", "produce"], ["interferenza", "stazionarie", "con riflessione dà"], ["stazionarie", "risonanza", "frequenze proprie ⟹"]]
    }
  ],
  glossary: [
    { t: "Onda meccanica", d: "Perturbazione che si propaga in un mezzo materiale trasportando energia ma non materia." },
    { t: "Onda trasversale / longitudinale", d: "Oscillazione perpendicolare / parallela alla direzione di propagazione." },
    { t: "Lunghezza d'onda λ", d: "Distanza tra due punti consecutivi nello stesso stato di oscillazione; λ = v/f." },
    { t: "Frequenza f", d: "Numero di oscillazioni al secondo, in hertz; f = 1/T." },
    { t: "Interferenza", d: "Sovrapposizione di onde con rafforzamento (costruttiva) o indebolimento (distruttiva)." },
    { t: "Differenza di cammino", d: "Differenza tra le distanze percorse da due onde per arrivare in uno stesso punto." },
    { t: "Onda stazionaria", d: "Onda con nodi e ventri fissi, generata da onde che si propagano in versi opposti." },
    { t: "Nodo / ventre", d: "Punto che resta fermo / punto di oscillazione massima in un'onda stazionaria." },
    { t: "Armonica", d: "Modo normale di vibrazione, con frequenza multipla intera della fondamentale." },
    { t: "Risonanza", d: "Forte crescita dell'ampiezza quando la forzante ha frequenza uguale a una frequenza propria." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa trasporta un'onda meccanica?", options: ["Materia ed energia", "Solo energia (e quantità di moto), non materia", "Solo materia", "Solo carica elettrica"], answer: 1, explain: "Le particelle del mezzo oscillano attorno al proprio equilibrio; si propagano energia e perturbazione." },
      { type: "num", q: "Un'onda ha periodo T = 0,02 s. Quanto vale la frequenza?", answer: 50, tol: 0.01, unit: "Hz", explain: "f = 1/T = 1/0,02 = 50 Hz." },
      { type: "num", q: "Un'onda di frequenza 440 Hz ha lunghezza d'onda 0,78 m. Qual è la sua velocità (circa)?", answer: 343, tol: 1, unit: "m/s", explain: "v = λ·f = 0,78 × 440 ≈ 343 m/s: è la velocità del suono in aria." },
      { type: "tf", q: "Raddoppiando la tensione di una corda, la velocità delle onde sulla corda raddoppia.", answer: false, explain: "v = √(F/μ): con F doppia, v aumenta di un fattore √2 ≈ 1,41." },
      { type: "mc", q: "Due sorgenti in fase emettono onde di lunghezza λ. In un punto la differenza di cammino è 2,5·λ. L'interferenza è:", options: ["costruttiva", "distruttiva", "nulla", "dipende dall'ampiezza"], answer: 1, explain: "2,5·λ = (2 + ½)·λ, cioè (k + ½)·λ con k = 2: interferenza distruttiva." },
      { type: "mc", q: "Una corda fissata a entrambi gli estremi vibra a 100 Hz nella fondamentale. Quale frequenza NON può produrre come armonica?", options: ["200 Hz", "300 Hz", "250 Hz", "400 Hz"], answer: 2, explain: "Le armoniche sono multipli interi della fondamentale: 100, 200, 300, 400… Non 250 Hz." },
      { type: "num", q: "Una corda lunga 0,50 m, con velocità delle onde 200 m/s, è fissata agli estremi. Qual è la frequenza fondamentale?", answer: 200, tol: 0.01, unit: "Hz", explain: "f₁ = v/(2L) = 200/(2 × 0,50) = 200 Hz." },
      { type: "tf", q: "In un'onda stazionaria i nodi sono punti che non oscillano mai.", answer: true, explain: "Nei nodi l'interferenza è sempre distruttiva: lo spostamento è nullo in ogni istante." },
      { type: "mc", q: "Perché le onde S dei terremoti hanno permesso di capire che il nucleo esterno della Terra è fluido?", options: ["Sono onde longitudinali e attraversano tutto", "Sono trasversali e non si propagano nei liquidi", "Hanno frequenza troppo alta", "Sono più veloci delle onde P"], answer: 1, explain: "Un fluido non può sostenere sforzi di taglio: le onde trasversali non lo attraversano e creano una zona d'ombra." },
      { type: "order", q: "Metti in ordine le armoniche di una corda per frequenza crescente (n = 1, 2, 3, 4).", items: ["fondamentale (λ = 2L)", "seconda armonica (λ = L)", "terza armonica (λ = 2L/3)", "quarta armonica (λ = L/2)"], explain: "Più n è grande, più λ è piccola e più la frequenza è alta: f_n = n·f₁." }
    ]
  }
});

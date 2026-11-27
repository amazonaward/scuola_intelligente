TOPIC('it', {
  id: "l4-fis-suono",
  title: "Il suono",
  intro: "Il suono è l'onda meccanica più vicina alla nostra esperienza: lo produciamo con la voce, lo ascoltiamo con le orecchie, lo usano i pipistrelli per «vedere» al buio e i medici per guardare dentro il corpo. Dopo aver studiato le onde in generale, applichiamo i concetti al suono: che cos'è fisicamente, quanto va veloce, come si misura la sua <b>intensità</b> in <b>decibel</b>, che cosa distingue <b>altezza</b> e <b>timbro</b>, come suonano un tubo o una canna d'organo e perché la sirena di un'ambulanza cambia tono quando ti passa accanto (<b>effetto Doppler</b>).",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Il suono come onda di pressione",
      html: `<p>Un oggetto che vibra (una corda, una membrana, le corde vocali) spinge e rilascia le molecole d'aria attorno a sé. Si creano così zone di <b>compressione</b> (pressione leggermente più alta) alternate a zone di <b>rarefazione</b> (pressione più bassa), che si propagano: è un'<b>onda longitudinale</b>. Le molecole oscillano avanti e indietro di una frazione di millimetro e non viaggiano con l'onda; ciò che si propaga è la <b>variazione di pressione</b>, di norma piccolissima (per il parlato, circa un milionesimo della pressione atmosferica).</p>
<p>Poiché il suono è un'onda meccanica, <b>non si propaga nel vuoto</b>: nello spazio «nessuno può sentirti urlare». Si propaga invece in gas, liquidi e solidi, e più velocemente nei mezzi più rigidi e meno densi (conta il rapporto tra elasticità e inerzia, come per la corda):</p>
<table>
<tr><th>Mezzo</th><th>Velocità del suono (circa)</th></tr>
<tr><td>Aria a 0 °C</td><td>331 m/s</td></tr>
<tr><td>Aria a 20 °C</td><td>343 m/s (≈ 1235 km/h)</td></tr>
<tr><td>Acqua dolce</td><td>≈ 1480 m/s</td></tr>
<tr><td>Acciaio</td><td>≈ 5000 m/s</td></tr>
</table>
<p>Nell'aria la velocità cresce con la temperatura: <b>v ≈ 331 + 0,6·t</b> (t in °C). Non dipende dalla frequenza né dall'intensità, e <b>nemmeno dalla pressione</b> a temperatura costante: per questo suoni gravi e acuti di un'orchestra arrivano insieme al pubblico.</p>
<p>Il nostro orecchio percepisce frequenze da circa <b>20 Hz a 20 000 Hz</b> (con l'età il limite alto scende). Sotto i 20 Hz si parla di <b>infrasuoni</b> (balene, terremoti), sopra i 20 kHz di <b>ultrasuoni</b> (pipistrelli, delfini, ecografia).</p>`
    },
    {
      type: "svg",
      title: "Il suono: compressioni e rarefazioni",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<rect x="20" y="60" width="26" height="90" fill="#475569" rx="4"/>
<text x="33" y="48" font-size="14" fill="#334155" text-anchor="middle">membrana</text>
<g stroke="#2563eb" stroke-width="3">
<line x1="70" y1="60" x2="70" y2="150"/><line x1="95" y1="60" x2="95" y2="150"/><line x1="120" y1="60" x2="120" y2="150"/>
<line x1="170" y1="60" x2="170" y2="150"/><line x1="180" y1="60" x2="180" y2="150"/><line x1="190" y1="60" x2="190" y2="150"/><line x1="200" y1="60" x2="200" y2="150"/><line x1="210" y1="60" x2="210" y2="150"/>
<line x1="270" y1="60" x2="270" y2="150"/><line x1="300" y1="60" x2="300" y2="150"/><line x1="330" y1="60" x2="330" y2="150"/>
<line x1="380" y1="60" x2="380" y2="150"/><line x1="390" y1="60" x2="390" y2="150"/><line x1="400" y1="60" x2="400" y2="150"/><line x1="410" y1="60" x2="410" y2="150"/><line x1="420" y1="60" x2="420" y2="150"/>
<line x1="480" y1="60" x2="480" y2="150"/><line x1="510" y1="60" x2="510" y2="150"/><line x1="540" y1="60" x2="540" y2="150"/>
</g>
<text x="190" y="175" font-size="14" fill="#1d4ed8" text-anchor="middle">compressione</text>
<text x="300" y="175" font-size="14" fill="#64748b" text-anchor="middle">rarefazione</text>
<text x="400" y="175" font-size="14" fill="#1d4ed8" text-anchor="middle">compressione</text>
<line x1="190" y1="190" x2="400" y2="190" stroke="#16a34a" stroke-width="3"/>
<line x1="190" y1="182" x2="190" y2="198" stroke="#16a34a" stroke-width="3"/>
<line x1="400" y1="182" x2="400" y2="198" stroke="#16a34a" stroke-width="3"/>
<text x="295" y="215" font-size="15" fill="#15803d" text-anchor="middle" font-weight="bold">λ = distanza tra due compressioni</text>
<path d="M30 260 Q 110 215 190 260 T 350 260 T 510 260" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="560" y="265" font-size="14" fill="#b91c1c" text-anchor="end">pressione</text>
</g>
</svg>`,
      caption: "Le linee blu rappresentano le molecole d'aria: dense nelle compressioni, rade nelle rarefazioni. La curva rossa mostra l'andamento della pressione, sinusoidale."
    },
    {
      type: "example",
      title: "Tuono, eco e sonar",
      html: `<p><b>Quanto è lontano il temporale?</b> La luce arriva quasi all'istante, il suono viaggia a ≈ 343 m/s. Se tra il lampo e il tuono passano 3 s, il fulmine è a d = v·t ≈ 343 × 3 ≈ <b>1 km</b> (circa 3 secondi per chilometro).</p>
<p><b>Eco.</b> Gridi davanti a una parete a 85 m: il suono compie andata e ritorno, 2 × 85 = 170 m, in t = 170/340 = <b>0,5 s</b>. Per percepire l'eco distinta serve un ritardo di circa 0,1 s, cioè una parete ad almeno ≈ 17 m.</p>
<p><b>Sonar.</b> Un battello emette un impulso e lo riceve riflesso dopo 0,80 s: nell'acqua (v ≈ 1500 m/s) il fondale è a h = v·t/2 = 1500 × 0,80/2 = <b>600 m</b>. Il pipistrello e l'ecografia funzionano con lo stesso principio di eco, con ultrasuoni.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: natura e velocità",
      questions: [
        { type: "tf", q: "Il suono è un'onda trasversale.", answer: false, explain: "Nei fluidi il suono è un'onda longitudinale di pressione: le molecole oscillano nella direzione di propagazione." },
        { type: "num", q: "Un tuono arriva 6 s dopo il lampo. A quale distanza (in m) è caduto il fulmine, con v = 340 m/s?", answer: 2040, tol: 10, unit: "m", explain: "d = v·t = 340 × 6 = 2040 m, circa 2 km." },
        { type: "mc", q: "In quale mezzo il suono si propaga più velocemente?", options: ["Aria", "Acqua", "Acciaio", "Vuoto"], answer: 2, explain: "Nei solidi rigidi come l'acciaio la velocità è maggiore (≈ 5000 m/s); nel vuoto il suono non si propaga." }
      ]
    },
    {
      type: "text",
      title: "Intensità e livello sonoro: i decibel",
      html: `<p>L'<b>intensità</b> I di un'onda è la <b>potenza che attraversa l'unità di superficie</b> perpendicolare alla propagazione: <b>I = P/S</b>, in W/m². Per una sorgente puntiforme che emette in tutte le direzioni con potenza P, a distanza r l'energia si distribuisce su una sfera di area 4πr²:</p>
<p style="text-align:center"><b>I = P / (4π·r²)</b></p>
<p>L'intensità cala quindi come <b>1/r²</b>: raddoppiando la distanza diventa un quarto. L'orecchio umano ha un intervallo enorme: la soglia di udibilità è I<sub>0</sub> = <b>10<sup>-12</sup> W/m²</b>, la soglia del dolore è circa <b>1 W/m²</b>, mille miliardi di volte più grande. Per questo si usa una scala <b>logaritmica</b>, il <b>livello di intensità sonora</b> in <b>decibel</b> (dB):</p>
<p style="text-align:center"><b>β = 10 · log<sub>10</sub>(I / I<sub>0</sub>)</b></p>
<ul>
<li>I = I<sub>0</sub> ⟹ β = 0 dB (soglia di udibilità); I = 1 W/m² ⟹ β = 120 dB (soglia del dolore);</li>
<li>ogni <b>moltiplicazione per 10</b> dell'intensità aggiunge <b>10 dB</b>; <b>raddoppiare</b> l'intensità aggiunge solo ≈ <b>3 dB</b> (10·log 2 ≈ 3);</li>
<li>due sorgenti uguali da 60 dB danno 63 dB, non 120 dB: si sommano le intensità, non i decibel.</li>
</ul>
<table>
<tr><th>Situazione</th><th>Livello (circa)</th></tr>
<tr><td>Fruscio di foglie</td><td>20 dB</td></tr>
<tr><td>Conversazione normale</td><td>60 dB</td></tr>
<tr><td>Traffico intenso</td><td>80 dB</td></tr>
<tr><td>Concerto rock / discoteca</td><td>100-110 dB</td></tr>
<tr><td>Motore a reazione vicino</td><td>≈ 130 dB</td></tr>
</table>
<p>Oltre circa <b>85 dB</b>, un'esposizione prolungata (ore) aumenta il rischio di danni permanenti all'udito: le cuffie al massimo volume possono superare questi valori.</p>`
    },
    {
      type: "example",
      title: "Calcolare i decibel",
      html: `<p><b>Una sorgente di 1 W</b> (come un amplificatore piccolo in campo aperto) a r = 10 m ha I = 1/(4π·10²) = 7,96·10<sup>-4</sup> W/m². Il livello è β = 10·log(7,96·10<sup>-4</sup>/10<sup>-12</sup>) = 10·log(7,96·10<sup>8</sup>) ≈ 10 × 8,90 = <b>89 dB</b>.</p>
<p><b>Se ci allontaniamo a 20 m</b>, I si riduce di 4 volte: β cala di 10·log 4 ≈ <b>6 dB</b> (a ogni raddoppio della distanza il livello cala di 6 dB), quindi ≈ 83 dB.</p>
<p><b>Quanti violini?</b> Un violino suona a 70 dB; per dieci violini uguali l'intensità è 10 volte più grande, quindi il livello sale di 10 dB: 80 dB, solo «un po' più forte» alla percezione. Ci vogliono circa 10 dB in più perché un suono sembri <b>doppio</b> in sonorità.</p>`
    },
    {
      type: "text",
      title: "Altezza, timbro e sonorità",
      html: `<p>Il suono ha tre caratteristiche soggettive, ciascuna legata a una grandezza fisica:</p>
<ul>
<li><b>Altezza</b> (acuto o grave) ⟷ <b>frequenza</b>. Il La<sub>4</sub> di riferimento per l'accordatura è 440 Hz. Due note a distanza di <b>un'ottava</b> hanno rapporto di frequenze 2:1 (La<sub>3</sub> = 220 Hz, La<sub>5</sub> = 880 Hz); una <b>quinta</b> giusta è circa 3:2; una <b>terza maggiore</b> giusta 5:4. Rapporti semplici suonano «consonanti»: già i pitagorici (VI sec. a.C.) legarono le note ai rapporti tra lunghezze di corde.</li>
<li><b>Sonorità</b> (forte o piano) ⟷ <b>intensità</b> (o ampiezza). Dipende però anche dalla frequenza: l'orecchio è più sensibile tra 1000 e 5000 Hz.</li>
<li><b>Timbro</b> (la «voce» di uno strumento) ⟷ <b>forma d'onda</b>, cioè quali <b>armoniche</b> sono presenti e con quale intensità relativa. Un violino e un flauto che suonano la stessa nota (stessa fondamentale) hanno timbri diversi perché hanno armoniche diverse.</li>
</ul>
<p>Un suono musicale reale è una somma di armoniche (f, 2f, 3f, …), come abbiamo visto per la corda. Il matematico <b>Joseph Fourier</b> (1822) mostrò che <b>ogni onda periodica</b> si può scrivere come somma di onde sinusoidali: è il fondamento dell'analisi dei suoni (e dei file MP3).</p>
<p><b>Battimenti.</b> Se due suoni di frequenze vicine f<sub>1</sub> e f<sub>2</sub> si sovrappongono, l'ampiezza risultante pulsa alla frequenza <b>f<sub>b</sub> = |f<sub>1</sub> − f<sub>2</sub>|</b>. Un diapason a 440 Hz e un altro a 444 Hz producono 4 pulsazioni al secondo: gli accordatori di pianoforte usano i battimenti, scomparsi quando le note sono perfettamente intonate.</p>`
    },
    {
      type: "text",
      title: "Onde stazionarie nei tubi",
      html: `<p>Anche l'aria dentro un tubo può vibrare in onde stazionarie, ed è il principio di flauti, canne d'organo e clarinetti. All'<b>estremità aperta</b> c'è un <b>ventre</b> di spostamento (l'aria è libera di muoversi), all'<b>estremità chiusa</b> un <b>nodo</b>.</p>
<ul>
<li><b>Tubo aperto ai due estremi</b> (lunghezza L): ventre-ventre, <b>f<sub>n</sub> = n·v/(2L)</b> con n = 1, 2, 3, …: tutte le armoniche, come la corda.</li>
<li><b>Tubo chiuso a un estremo</b>: nodo-ventre, <b>f<sub>n</sub> = n·v/(4L)</b> con <b>n = 1, 3, 5, …</b>: solo le armoniche <b>dispari</b>. A parità di lunghezza la fondamentale è <b>la metà</b> di quella del tubo aperto, cioè un'ottava più bassa.</li>
</ul>
<p>Esempio: un tubo aperto lungo 0,50 m con v = 343 m/s ha f<sub>1</sub> = 343/(2 × 0,50) = <b>343 Hz</b>; un tubo chiuso lungo 0,25 m ha la stessa fondamentale, f<sub>1</sub> = 343/(4 × 0,25) = 343 Hz, ma poi 1029 Hz, 1715 Hz, … (3f, 5f). Il diverso insieme di armoniche spiega il timbro «cavo» del clarinetto, tubo chiuso da un'ancia, rispetto a quello del flauto.</p>`
    },
    {
      type: "text",
      title: "L'effetto Doppler",
      html: `<p>Quando una sorgente sonora e un osservatore si <b>muovono l'uno rispetto all'altro</b>, la frequenza percepita f' è diversa da quella emessa f. Fu descritto da <b>Christian Doppler</b> nel 1842 e verificato nel 1845 da <b>Buys Ballot</b> con musicisti che suonavano su un treno in corsa. Con v la velocità del suono:</p>
<ul>
<li><b>sorgente in moto</b> con velocità v<sub>s</sub>, osservatore fermo: <b>f' = f · v / (v ∓ v<sub>s</sub>)</b>, con il segno <b>−</b> se la sorgente <b>si avvicina</b> (f' maggiore) e + se si allontana (f' minore);</li>
<li><b>osservatore in moto</b> con velocità v<sub>o</sub>, sorgente ferma: <b>f' = f · (v ± v<sub>o</sub>) / v</b>, con + se l'osservatore <b>si avvicina</b>.</li>
</ul>
<p>Perché? Se la sorgente si muove, davanti a sé «insegue» le proprie onde: i fronti d'onda si accumulano, la lunghezza d'onda è più corta e il suono più acuto; dietro, i fronti si allungano. Se si muove l'osservatore, incontra i fronti più (o meno) spesso, senza che cambi la lunghezza d'onda.</p>
<p>Quando v<sub>s</sub> raggiunge v i fronti si accavallano in un unico fronte: <b>barriera del suono</b>. Oltre (velocità supersonica) si forma un cono (<b>cono di Mach</b>, con sen θ = v/v<sub>s</sub>) e a terra si sente il <b>bang sonico</b>. Il rapporto v<sub>s</sub>/v è il <b>numero di Mach</b>.</p>`
    },
    {
      type: "svg",
      title: "Fronti d'onda di una sorgente in moto",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#0f172a"/>
<g font-family="sans-serif" fill="none" stroke-width="3">
<circle cx="240" cy="150" r="120" stroke="#38bdf8"/>
<circle cx="250" cy="150" r="90" stroke="#38bdf8"/>
<circle cx="260" cy="150" r="60" stroke="#38bdf8"/>
<circle cx="270" cy="150" r="30" stroke="#38bdf8"/>
<circle cx="280" cy="150" r="9" fill="#facc15" stroke="#facc15"/>
<path d="M300 150 L 350 150" stroke="#facc15"/>
<polygon points="352,150 340,143 340,157" fill="#facc15" stroke="none"/>
<text x="300" y="30" font-size="16" fill="#e2e8f0" text-anchor="middle" font-weight="bold" stroke="none">La sorgente si muove verso destra</text>
<text x="500" y="145" font-size="15" fill="#fca5a5" text-anchor="middle" stroke="none">λ' minore</text>
<text x="500" y="165" font-size="15" fill="#fca5a5" text-anchor="middle" stroke="none">suono più acuto</text>
<text x="70" y="145" font-size="15" fill="#93c5fd" text-anchor="middle" stroke="none">λ' maggiore</text>
<text x="70" y="165" font-size="15" fill="#93c5fd" text-anchor="middle" stroke="none">suono più grave</text>
<text x="300" y="285" font-size="14" fill="#cbd5e1" text-anchor="middle" stroke="none">ogni cerchio è un fronte emesso in un istante diverso: i cerchi più grandi sono più vecchi</text>
</g>
</svg>`,
      caption: "I fronti d'onda sono più fitti davanti alla sorgente e più radi dietro: chi sta davanti sente una frequenza più alta, chi sta dietro una più bassa."
    },
    {
      type: "example",
      title: "L'ambulanza che passa",
      html: `<p>Una sirena emette f = 1000 Hz su un'ambulanza che viaggia a v<sub>s</sub> = 20 m/s (72 km/h). Prendiamo v = 340 m/s.</p>
<ul>
<li><b>Mentre si avvicina</b>: f' = 1000 × 340/(340 − 20) = 1000 × 340/320 ≈ <b>1063 Hz</b>;</li>
<li><b>Mentre si allontana</b>: f' = 1000 × 340/(340 + 20) = 1000 × 340/360 ≈ <b>944 Hz</b>.</li>
</ul>
<p>Il salto è di circa 120 Hz, abbastanza da farci sentire il suono «cadere» quando l'ambulanza ci supera. Se invece è l'osservatore a muoversi a 20 m/s verso la sirena ferma, f' = 1000 × 360/340 ≈ 1059 Hz: leggermente diverso, perché la formula non è simmetrica.</p>
<p>Lo stesso effetto, con la luce, permette di misurare le velocità delle stelle e delle galassie (spostamento verso il rosso) e al radar dei vigili di misurare la velocità di un'auto.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: decibel, tubi e Doppler",
      questions: [
        { type: "num", q: "Di quanti decibel aumenta il livello sonoro se l'intensità diventa 100 volte più grande?", answer: 20, tol: 0.1, unit: "dB", explain: "Δβ = 10·log(100) = 20 dB." },
        { type: "mc", q: "In un tubo chiuso a un estremo quali armoniche sono presenti?", options: ["Tutte", "Solo le pari", "Solo le dispari", "Solo la fondamentale"], answer: 2, explain: "Nodo da un lato e ventre dall'altro: L = n·λ/4 con n dispari." },
        { type: "tf", q: "Un'ambulanza che si avvicina produce un suono percepito più acuto di quello che si sente quando si allontana.", answer: true, explain: "Effetto Doppler: avvicinandosi f' > f, allontanandosi f' < f." }
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il suono",
      intro: "Il suono è invisibile: ecco alcune immagini per «vederlo».",
      tabs: [
        {
          label: "🚶 La fila di persone",
          html: "<p>Immagina una lunga fila di persone molto vicine in una piazza: se la prima spinge la seconda, che spinge la terza, la spinta (compressione) corre lungo la fila, mentre ciascuno si sposta solo di un passo e torna al suo posto. Questo è il suono nell'aria: l'onda è la <b>spinta che corre</b>, non le persone. La velocità dipende da quanto ciascuno è «rigido» (elasticità del mezzo) e da quanto è «pesante» (densità): più rigido e leggero, più veloce. Per questo il suono è più rapido nell'acciaio che nell'aria.</p>"
        },
        {
          label: "🗂️ Infrasuoni, udibili, ultrasuoni",
          html: "<p>Classifica ciascun suono o fenomeno nella fascia di frequenze corretta.</p>",
          widget: "classify",
          options: { groups: ["Infrasuoni (< 20 Hz)", "Udibili (20 Hz - 20 kHz)", "Ultrasuoni (> 20 kHz)"], items: [
            ["🌋 Onde sismiche a 2 Hz", 0],
            ["🏢 Vibrazione di un edificio a 5 Hz", 0],
            ["🎵 La4 del diapason, 440 Hz", 1],
            ["🗣️ Voce umana, circa 200 Hz", 1],
            ["🐶 Fischietto per cani, 25 kHz", 2],
            ["🦇 Ecolocalizzazione del pipistrello, 50 kHz", 2],
            ["🩺 Ecografia, 5 MHz", 2]
          ] }
        },
        {
          label: "🔗 Abbina grandezza e formula",
          html: "<p>Collega ogni grandezza del suono alla sua relazione.</p>",
          widget: "match",
          options: { pairs: [
            ["Livello sonoro", "β = 10·log(I/I₀)"],
            ["Intensità di una sorgente puntiforme", "I = P/(4πr²)"],
            ["Tubo aperto", "f_n = n·v/(2L)"],
            ["Tubo chiuso a un estremo", "f_n = n·v/(4L), n dispari"],
            ["Battimenti", "f_b = |f₁ − f₂|"],
            ["Sorgente che si avvicina", "f' = f·v/(v − v_s)"]
          ] }
        },
        {
          label: "🎼 Disegno: ottava e timbro",
          html: "<p>Due note a distanza di un'ottava: la seconda ha frequenza doppia, quindi in uno stesso intervallo di tempo fa due oscillazioni al posto di una. Un timbro ricco di armoniche ha una forma d'onda meno «liscia» di una sinusoide pura.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#fffbeb'/><g font-family='sans-serif'><text x='20' y='28' font-size='15' fill='#1e3a8a' font-weight='bold'>La3, 220 Hz</text><text x='20' y='143' font-size='15' fill='#9a3412' font-weight='bold'>La4, 440 Hz (un'ottava sopra)</text><line x1='20' y1='80' x2='580' y2='80' stroke='#cbd5e1' stroke-width='2'/><line x1='20' y1='195' x2='580' y2='195' stroke='#cbd5e1' stroke-width='2'/><path d='M30 80 Q 135 20 240 80 T 450 80 T 560 80' fill='none' stroke='#2563eb' stroke-width='4'/><path d='M30 195 Q 82 150 135 195 T 240 195 T 345 195 T 450 195 T 555 195' fill='none' stroke='#ea580c' stroke-width='4'/><text x='300' y='248' font-size='14' fill='#475569' text-anchor='middle'>stessa durata: la nota più acuta compie il doppio delle oscillazioni</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Mach 1: dal Bell X-1 al bang sonico",
      html: `<p>Il 14 ottobre 1947 il pilota <b>Chuck Yeager</b>, a bordo del razzo sperimentale <b>Bell X-1</b>, fu il primo a superare in volo orizzontale la velocità del suono. La «barriera» era temuta perché vicino a Mach 1 le onde di pressione si accumulano davanti all'aereo causando forti resistenze e vibrazioni; con ali e profili adatti si poté superare. Il <b>bang sonico</b> che si sente a terra non è un «boom» emesso una volta sola: è il cono d'urto che <b>spazza il terreno</b> per tutto il tempo del volo supersonico.</p>`
    },
    {
      type: "curiosity",
      title: "Ultrasuoni: vedere con il suono",
      html: `<p>L'<b>ecografia</b> usa ultrasuoni di alcuni megahertz: la sonda emette impulsi e rileva gli echi riflessi dalle superfici tra tessuti con densità diverse; dal tempo di ritorno si ricava la profondità, come per il sonar, e il computer costruisce un'immagine. Gli ultrasuoni non sono radiazioni ionizzanti. I delfini e i pipistrelli fanno lo stesso con frequenze fino a decine di kHz; il pipistrello può misurare anche la velocità della preda proprio grazie all'<b>effetto Doppler</b> dell'eco. L'Italia ha una tradizione di studio sull'ecolocalizzazione: nel 1793 <b>Lazzaro Spallanzani</b> mostrò con esperimenti che i pipistrelli accecati riuscivano ancora a evitare gli ostacoli, ma non se avevano le orecchie tappate.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il suono è un'onda <b>longitudinale di pressione</b>, non si propaga nel vuoto; in aria v ≈ 331 + 0,6·t ≈ 343 m/s a 20 °C.</li>
<li><b>β = 10·log(I/I<sub>0</sub>)</b>, con I<sub>0</sub> = 10<sup>-12</sup> W/m²: ×10 di intensità = +10 dB; ×2 = +3 dB; distanza ×2 = −6 dB.</li>
<li>Altezza ⟷ frequenza; sonorità ⟷ intensità; timbro ⟷ armoniche.</li>
<li>Tubo aperto: tutte le armoniche; tubo chiuso: solo dispari, con fondamentale dimezzata.</li>
<li>Doppler: sorgente che si avvicina ⟹ f' maggiore; che si allontana ⟹ f' minore.</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Mappa del suono",
      nodes: [
        { id: "onda", label: "Onda di pressione", x: 50, y: 8, color: "#2563eb", html: "Onda meccanica longitudinale: compressioni e rarefazioni che si propagano in un mezzo.", why: "Una sorgente che vibra comprime e dilata il mezzo adiacente; la variazione di pressione si trasmette per collisioni tra molecole. Senza mezzo (vuoto) non c'è nulla da comprimere, quindi niente suono." },
        { id: "velocita", label: "Velocità del suono", x: 12, y: 38, color: "#16a34a", html: "≈ 343 m/s in aria a 20 °C; cresce con la temperatura e nei mezzi più rigidi.", why: "v dipende dal rapporto tra elasticità (rigidità) e inerzia (densità) del mezzo. Nei gas la temperatura aumenta l'agitazione termica e rende più rapida la trasmissione della compressione." },
        { id: "intensita", label: "Intensità e decibel", x: 85, y: 38, color: "#f59e0b", html: "I = P/S; β = 10·log(I/I₀); I ∝ 1/r².", why: "La scala logaritmica nasce dalla legge di Weber-Fechner: la sensazione è proporzionale al logaritmo dello stimolo, perciò l'orecchio gestisce un intervallo di 10¹² in intensità." },
        { id: "caratteristiche", label: "Altezza, timbro, sonorità", x: 30, y: 68, color: "#8b5cf6", html: "Frequenza, armoniche e intensità determinano ciò che sentiamo.", why: "Fourier mostrò che ogni suono periodico è somma di armoniche: il loro spettro spiega il timbro. Gli strumenti hanno risonanze diverse che rafforzano certe armoniche." },
        { id: "tubi", label: "Tubi e onde stazionarie", x: 70, y: 70, color: "#ef4444", html: "Aperto: f = n·v/2L; chiuso: f = n·v/4L (n dispari).", why: "Sono onde stazionarie con ventri alle estremità aperte e nodi a quelle chiuse: le condizioni al contorno selezionano le frequenze possibili." },
        { id: "doppler", label: "Effetto Doppler", x: 50, y: 92, color: "#64748b", html: "Il moto relativo sorgente-osservatore cambia la frequenza percepita.", why: "Dipende dal fatto che la velocità del suono è fissata dal mezzo: se la sorgente avanza, i fronti emessi si accorciano davanti e si allungano dietro; se avanza l'osservatore, incontra più fronti al secondo." }
      ],
      edges: [["onda", "velocita", "ha"], ["onda", "intensita", "trasporta"], ["onda", "caratteristiche", "si percepisce come"], ["caratteristiche", "tubi", "negli strumenti"], ["velocita", "doppler", "confrontata con v_s"]]
    }
  ],
  glossary: [
    { t: "Onda sonora", d: "Onda longitudinale di pressione che si propaga in un mezzo materiale." },
    { t: "Ultrasuoni / infrasuoni", d: "Suoni con frequenza superiore a 20 kHz / inferiore a 20 Hz, non udibili dall'uomo." },
    { t: "Intensità", d: "Potenza per unità di superficie, in W/m²; per una sorgente puntiforme I = P/(4πr²)." },
    { t: "Decibel (dB)", d: "Unità del livello sonoro: β = 10·log(I/I₀), con I₀ = 10⁻¹² W/m²." },
    { t: "Altezza", d: "Caratteristica che distingue suoni acuti e gravi; dipende dalla frequenza." },
    { t: "Timbro", d: "Qualità che distingue due suoni di uguale altezza e intensità; dipende dalle armoniche presenti." },
    { t: "Ottava", d: "Intervallo musicale in cui la frequenza raddoppia (rapporto 2:1)." },
    { t: "Battimenti", d: "Pulsazioni dell'intensità dovute alla sovrapposizione di due suoni di frequenza vicina; f = |f₁ − f₂|." },
    { t: "Effetto Doppler", d: "Variazione della frequenza percepita per il moto relativo tra sorgente e osservatore." },
    { t: "Numero di Mach", d: "Rapporto tra la velocità di un corpo e quella del suono nel mezzo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Perché nello spazio vuoto non si sente il suono?", options: ["Perché fa troppo freddo", "Perché manca un mezzo materiale che lo propaghi", "Perché le onde sono trasversali", "Perché la frequenza è troppo bassa"], answer: 1, explain: "Il suono è un'onda meccanica: serve un mezzo elastico in cui propagarsi." },
      { type: "num", q: "A quale velocità si propaga il suono in aria a 30 °C, usando v = 331 + 0,6·t?", answer: 349, tol: 0.5, unit: "m/s", explain: "v = 331 + 0,6 × 30 = 349 m/s." },
      { type: "num", q: "Un suono ha intensità 10⁻⁶ W/m². Qual è il livello sonoro? (I₀ = 10⁻¹² W/m²)", answer: 60, tol: 0.5, unit: "dB", explain: "β = 10·log(10⁻⁶/10⁻¹²) = 10·log(10⁶) = 60 dB." },
      { type: "mc", q: "Se la distanza da una sorgente puntiforme raddoppia, il livello sonoro varia di circa:", options: ["−3 dB", "−6 dB", "−12 dB", "+6 dB"], answer: 1, explain: "L'intensità diventa un quarto: 10·log(1/4) ≈ −6 dB." },
      { type: "tf", q: "Due sorgenti identiche da 70 dB, suonando insieme, producono un livello di 140 dB.", answer: false, explain: "Si sommano le intensità, non i decibel: l'intensità raddoppia e il livello cresce di circa 3 dB, cioè 73 dB." },
      { type: "mc", q: "Quale caratteristica del suono distingue un violino da un flauto che suonano la stessa nota con uguale intensità?", options: ["Altezza", "Timbro", "Frequenza fondamentale", "Velocità"], answer: 1, explain: "Il timbro dipende dalle armoniche presenti, diverse per i due strumenti." },
      { type: "num", q: "Un tubo chiuso a un estremo è lungo 0,425 m. Qual è la sua frequenza fondamentale, con v = 340 m/s?", answer: 200, tol: 0.5, unit: "Hz", explain: "f₁ = v/(4L) = 340/(4 × 0,425) = 200 Hz." },
      { type: "num", q: "Una sirena a 800 Hz si avvicina a 34 m/s, con v = 340 m/s. Quale frequenza ascolta un osservatore fermo?", answer: 889, tol: 2, unit: "Hz", explain: "f' = f·v/(v − v_s) = 800 × 340/306 ≈ 889 Hz." },
      { type: "tf", q: "Quando una sorgente sonora si allontana dall'osservatore, la frequenza percepita è minore di quella emessa.", answer: true, explain: "I fronti d'onda si allungano dietro la sorgente: λ' > λ e f' < f." },
      { type: "order", q: "Ordina i suoni per livello sonoro crescente.", items: ["Fruscio di foglie", "Conversazione normale", "Traffico intenso", "Concerto rock"], explain: "Circa 20 dB, 60 dB, 80 dB e 100-110 dB." }
    ]
  }
});

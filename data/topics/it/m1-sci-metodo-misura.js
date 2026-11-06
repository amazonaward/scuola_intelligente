TOPIC('it', {
  id: "m1-sci-metodo-misura",
  title: "Il metodo scientifico e la misura",
  intro: "Come fanno gli scienziati a sapere che una cosa è vera? Non basta crederci: bisogna <b>osservare</b>, fare <b>ipotesi</b>, <b>sperimentare</b> e <b>misurare</b>. In questa lezione scopri il <b>metodo scientifico</b> di Galileo, le <b>grandezze</b> fisiche e le <b>unità di misura</b> che usano gli scienziati di tutto il mondo.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Il metodo scientifico (o sperimentale)",
      html: `<p>Nel Seicento <b>Galileo Galilei</b> (1564–1642) propose un modo nuovo di studiare la natura: non fidarsi solo delle autorità antiche, ma <b>interrogare la natura con esperimenti</b> e descriverla con la <b>matematica</b>. Lo chiamava "sensate esperienze e necessarie dimostrazioni".</p>
<p>Il metodo scientifico segue alcune <b>fasi</b>:</p>
<ol>
<li><b>Osservazione</b> di un fenomeno e formulazione di una <b>domanda</b> ("Perché il ghiaccio galleggia?").</li>
<li><b>Ipotesi</b>: una possibile risposta, che si possa controllare.</li>
<li><b>Esperimento</b>: si riproduce il fenomeno in condizioni controllate, cambiando <b>una sola variabile</b> alla volta e <b>misurando</b>.</li>
<li><b>Analisi dei dati</b>: si raccolgono le misure in tabelle e grafici.</li>
<li><b>Conclusione</b>: l'ipotesi è <b>confermata</b> o <b>smentita</b>. Se è smentita, se ne formula una nuova e si ricomincia.</li>
<li>Se l'ipotesi viene confermata molte volte, anche da altri scienziati, diventa una <b>legge</b> o entra a far parte di una <b>teoria</b>.</li>
</ol>
<p>Un esperimento è valido solo se è <b>riproducibile</b>: chiunque, ripetendolo nelle stesse condizioni, deve ottenere lo stesso risultato.</p>`
    },
    {
      type: "svg",
      title: "Il ciclo del metodo scientifico",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdfa"/>
<rect x="215" y="14" width="170" height="46" rx="14" fill="#38bdf8"/>
<text x="300" y="44" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">1 Osservazione</text>
<rect x="420" y="90" width="160" height="46" rx="14" fill="#a78bfa"/>
<text x="500" y="120" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">2 Ipotesi</text>
<rect x="400" y="200" width="180" height="46" rx="14" fill="#f97316"/>
<text x="490" y="230" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">3 Esperimento</text>
<rect x="210" y="262" width="180" height="46" rx="14" fill="#22c55e"/>
<text x="300" y="292" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">4 Analisi dati</text>
<rect x="20" y="200" width="170" height="46" rx="14" fill="#ef4444"/>
<text x="105" y="230" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">5 Conclusione</text>
<rect x="20" y="90" width="170" height="46" rx="14" fill="#0f766e"/>
<text x="105" y="120" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">Legge / teoria</text>
<path d="M385 40 Q470 45 495 88" stroke="#334155" stroke-width="3" fill="none"/>
<path d="M500 136 L495 198" stroke="#334155" stroke-width="3" fill="none"/>
<path d="M440 246 Q420 280 392 284" stroke="#334155" stroke-width="3" fill="none"/>
<path d="M210 284 Q130 282 110 248" stroke="#334155" stroke-width="3" fill="none"/>
<path d="M105 200 L105 138" stroke="#16a34a" stroke-width="3" fill="none"/>
<path d="M190 214 Q300 170 420 120" stroke="#dc2626" stroke-width="3" fill="none" stroke-dasharray="8 6"/>
<text x="300" y="160" font-size="15" text-anchor="middle" fill="#dc2626">smentita: nuova ipotesi</text>
<text x="112" y="170" font-size="15" fill="#16a34a">confermata</text>
</svg>`,
      caption: "Il metodo è un ciclo: se l'ipotesi non funziona, si torna indietro e se ne prova un'altra."
    },
    {
      type: "example",
      title: "Esempio pratico: il pendolo di Galileo",
      html: `<p>Si racconta che Galileo, nel Duomo di Pisa, osservò una lampada che oscillava e notò che ogni oscillazione sembrava durare lo stesso tempo, anche quando diventava più piccola.</p>
<ul>
<li><b>Domanda</b>: da che cosa dipende il tempo di un'oscillazione (il <b>periodo</b>)?</li>
<li><b>Ipotesi</b>: dalla lunghezza del filo, non dal peso.</li>
<li><b>Esperimento</b>: costruisci un pendolo con un filo e una rondella. Cambia <b>solo la lunghezza</b> (25 cm, 50 cm, 100 cm) e misura con il cronometro il tempo di <b>10 oscillazioni</b>, poi dividi per 10 (così l'errore si riduce!). Poi tieni fissa la lunghezza e cambia solo il peso.</li>
<li><b>Risultato</b>: con 25 cm il periodo è circa 1 s, con 100 cm circa 2 s. Il peso invece non cambia nulla.</li>
<li><b>Conclusione</b>: il periodo dipende dalla lunghezza. Quadruplicando la lunghezza, il periodo raddoppia.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: il metodo",
      questions: [
        { type: "mc", q: "Chi è considerato il padre del metodo sperimentale?", options: ["Aristotele", "Galileo Galilei", "Leonardo da Vinci", "Isaac Newton"], answer: 1, explain: "Galileo Galilei, nel Seicento, unì esperimenti e matematica." },
        { type: "tf", q: "In un buon esperimento conviene cambiare molte variabili contemporaneamente.", answer: false, explain: "Si cambia una variabile alla volta, altrimenti non si sa quale abbia causato l'effetto." },
        { type: "order", q: "Metti in ordine le fasi del metodo scientifico.", items: ["Osservazione", "Ipotesi", "Esperimento", "Analisi dei dati", "Conclusione"], explain: "Si osserva, si ipotizza, si sperimenta, si analizzano i dati e si conclude." }
      ]
    },
    {
      type: "text",
      title: "2. Grandezze e misure",
      html: `<p>Una <b>grandezza</b> è una proprietà che si può <b>misurare</b>: lunghezza, massa, tempo, temperatura, volume… La bellezza o la simpatia non sono grandezze, perché non si misurano con uno strumento.</p>
<p><b>Misurare</b> significa <b>confrontare</b> una grandezza con un'altra dello stesso tipo scelta come <b>unità di misura</b>, e contare quante volte l'unità è contenuta nella grandezza.</p>
<p>Il risultato è sempre un <b>numero</b> seguito dall'<b>unità</b>: "3" da solo non vuol dire niente, "3 m" sì!</p>
<p>Per evitare confusione, dal <b>1960</b> quasi tutto il mondo usa il <b>Sistema Internazionale (SI)</b>, che ha <b>7 grandezze fondamentali</b>:</p>
<table>
<tr><th>Grandezza</th><th>Unità</th><th>Simbolo</th></tr>
<tr><td>Lunghezza</td><td>metro</td><td>m</td></tr>
<tr><td>Massa</td><td>chilogrammo</td><td>kg</td></tr>
<tr><td>Tempo</td><td>secondo</td><td>s</td></tr>
<tr><td>Temperatura</td><td>kelvin</td><td>K</td></tr>
<tr><td>Intensità di corrente elettrica</td><td>ampere</td><td>A</td></tr>
<tr><td>Quantità di sostanza</td><td>mole</td><td>mol</td></tr>
<tr><td>Intensità luminosa</td><td>candela</td><td>cd</td></tr>
</table>
<p>Tutte le altre sono <b>grandezze derivate</b>, ottenute combinando quelle fondamentali: area (m²), volume (m³), velocità (m/s), densità (kg/m³).</p>`
    },
    {
      type: "text",
      title: "3. Multipli e sottomultipli",
      html: `<p>Per misurare cose molto grandi o molto piccole si usano i <b>prefissi</b>, che moltiplicano l'unità per potenze di 10:</p>
<table>
<tr><th>Prefisso</th><th>Simbolo</th><th>Valore</th><th>Esempio</th></tr>
<tr><td>giga</td><td>G</td><td>1 000 000 000</td><td>1 GB di memoria</td></tr>
<tr><td>mega</td><td>M</td><td>1 000 000</td><td>1 MW centrale</td></tr>
<tr><td>chilo</td><td>k</td><td>1000</td><td>1 km = 1000 m</td></tr>
<tr><td>etto</td><td>h</td><td>100</td><td>1 hg = 100 g</td></tr>
<tr><td>deca</td><td>da</td><td>10</td><td>1 dam = 10 m</td></tr>
<tr><td>deci</td><td>d</td><td>0,1</td><td>1 dm = 0,1 m</td></tr>
<tr><td>centi</td><td>c</td><td>0,01</td><td>1 cm = 0,01 m</td></tr>
<tr><td>milli</td><td>m</td><td>0,001</td><td>1 mm = 0,001 m</td></tr>
<tr><td>micro</td><td>µ</td><td>0,000 001</td><td>una cellula ≈ 20 µm</td></tr>
<tr><td>nano</td><td>n</td><td>0,000 000 001</td><td>un virus ≈ 100 nm</td></tr>
</table>
<p><b>Attenzione</b>: per le aree ogni passo vale ×100 (1 m² = 100 dm²), per i volumi ×1000 (1 m³ = 1000 dm³).</p>
<p>Ricorda il legame tra volume e capacità: <b>1 dm³ = 1 litro</b> e <b>1 cm³ = 1 mL</b>.</p>`
    },
    {
      type: "3d",
      title: "1 litro = 1 dm³ = 1000 cm³",
      scene: "blocks",
      options: { mode: "volume", a: 10, b: 10, c: 10 },
      caption: "Un cubo di 10 cm di lato (1 dm³) contiene 10 × 10 × 10 = 1000 cubetti da 1 cm³ e tiene esattamente 1 litro d'acqua. Prova a cambiare le dimensioni con i cursori."
    },
    {
      type: "text",
      title: "4. Massa, peso, volume, densità, temperatura",
      html: `<ul>
<li><b>Massa</b>: quantità di materia di un corpo. Si misura in kg con la <b>bilancia a bracci</b>. Non cambia se vai sulla Luna.</li>
<li><b>Peso</b>: la forza con cui la Terra attira il corpo. È una forza, si misura in <b>newton</b> (N) con il <b>dinamometro</b>. Sulla Luna pesi circa <b>6 volte meno</b>, ma la tua massa è la stessa! Nella vita di tutti i giorni diciamo "peso 40 kg", ma in realtà è la massa.</li>
<li><b>Volume</b>: lo spazio occupato. Per i liquidi si usa il <b>cilindro graduato</b>; per un solido irregolare si misura l'acqua che sposta immergendolo.</li>
<li><b>Densità</b>: massa diviso volume, <b>d = m / V</b>. L'acqua ha densità 1 g/cm³; il ferro circa 7,9 g/cm³; il legno di abete circa 0,5 g/cm³. Un oggetto meno denso dell'acqua <b>galleggia</b>.</li>
<li><b>Temperatura</b>: misura quanto un corpo è caldo o freddo; si misura con il <b>termometro</b> in gradi Celsius (°C) o in kelvin (K): K = °C + 273,15.</li>
</ul>
<p>Ogni strumento ha una <b>portata</b> (il valore massimo che può misurare) e una <b>sensibilità</b> (il valore più piccolo che riesce ad apprezzare). Un righello da 30 cm con le tacche dei millimetri ha portata 30 cm e sensibilità 1 mm.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la densità di un sasso",
      html: `<ol>
<li>Metti il sasso sulla bilancia: <b>m = 54 g</b>.</li>
<li>Versa 100 mL d'acqua in un cilindro graduato.</li>
<li>Immergi il sasso con un filo: il livello sale a <b>120 mL</b>.</li>
<li>Volume del sasso: 120 − 100 = <b>20 mL = 20 cm³</b> (metodo di Archimede).</li>
<li>Densità: 54 g : 20 cm³ = <b>2,7 g/cm³</b>. È proprio la densità tipica di molte rocce, come il granito.</li>
</ol>
<p><b>Errori di misura.</b> Ogni misura ha un'<b>incertezza</b>. Se misuri tre volte e ottieni 54,1 g, 53,9 g e 54,0 g, prendi la <b>media</b> (54,0 g). Gli <b>errori casuali</b> si riducono ripetendo le misure; gli <b>errori sistematici</b> (bilancia non tarata, occhio non allineato con la tacca: <i>errore di parallasse</i>) si correggono controllando gli strumenti.</p>`
    },
    {
      type: "widget",
      title: "Abbina la grandezza allo strumento",
      widget: "match",
      options: {
        pairs: [
          ["Lunghezza", "📏 metro / righello / calibro"],
          ["Massa", "⚖️ bilancia"],
          ["Tempo", "⏱️ cronometro"],
          ["Temperatura", "🌡️ termometro"],
          ["Volume di un liquido", "🧪 cilindro graduato"],
          ["Peso (forza)", "🔩 dinamometro"]
        ]
      }
    },
    {
      type: "widget",
      title: "Fondamentale o derivata?",
      widget: "classify",
      options: {
        groups: ["Grandezza fondamentale SI", "Grandezza derivata"],
        items: [["lunghezza (m)", 0], ["massa (kg)", 0], ["tempo (s)", 0], ["temperatura (K)", 0], ["area (m²)", 1], ["volume (m³)", 1], ["velocità (m/s)", 1], ["densità (kg/m³)", 1], ["corrente elettrica (A)", 0]]
      }
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il metro nasce dalla Terra?",
      html: `<p>Nel <b>1791</b>, durante la Rivoluzione francese, il metro fu definito come <b>un decimilionesimo</b> della distanza tra il Polo Nord e l'Equatore, misurata lungo il meridiano di Parigi. Due astronomi, Delambre e Méchain, impiegarono 7 anni a misurare il tratto tra Dunkerque e Barcellona.</p>
<p>Oggi il metro è definito con la <b>velocità della luce</b>: è la distanza percorsa dalla luce nel vuoto in 1/299 792 458 di secondo (dal 1983). E dal <b>2019</b> anche il chilogrammo non dipende più dal cilindretto di platino-iridio conservato a Sèvres, vicino a Parigi, ma da una costante della natura, la <b>costante di Planck</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… un errore di unità è costato 125 milioni di dollari?",
      html: `<p>Nel <b>1999</b> la sonda della NASA <b>Mars Climate Orbiter</b> andò perduta arrivando su Marte. Il motivo? Un gruppo di ingegneri aveva fornito dati in <b>unità anglosassoni</b> (libbre-forza per secondo), mentre il software della NASA si aspettava unità del <b>Sistema Internazionale</b> (newton per secondo). La sonda passò troppo vicino al pianeta e si distrusse nell'atmosfera.</p>
<p>Morale: scrivi <b>sempre</b> l'unità di misura accanto al numero!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la misura",
      intro: "Le unità di misura non sono le stesse dappertutto e si possono capire in tanti modi: scegli il tuo.",
      tabs: [
        {
          label: "🇺🇸 Il sistema imperiale",
          html: `<p>Negli <b>Stati Uniti</b> (e in parte nel Regno Unito) si usano ancora unità antiche, basate sul corpo umano e su multipli non decimali:</p>
<table>
<tr><th>Unità</th><th>Valore nel SI</th></tr>
<tr><td>1 pollice (inch)</td><td>2,54 cm (una falange di pollice)</td></tr>
<tr><td>1 piede (foot) = 12 pollici</td><td>30,48 cm</td></tr>
<tr><td>1 iarda (yard) = 3 piedi</td><td>91,44 cm</td></tr>
<tr><td>1 miglio = 1760 iarde</td><td>1,609 km</td></tr>
<tr><td>1 libbra (pound)</td><td>0,4536 kg</td></tr>
<tr><td>1 gallone USA</td><td>3,785 L</td></tr>
</table>
<p>E la temperatura in <b>gradi Fahrenheit</b>: l'acqua gela a 32 °F e bolle a 212 °F. Lo schermo di un televisore "da 50 pollici" ha la diagonale di 50 × 2,54 = 127 cm. Vedi perché il sistema decimale è più comodo?</p>`
        },
        {
          label: "🪜 La scala dei prefissi",
          html: `<p>Immagina i prefissi come i <b>gradini di una scala</b>. Ogni gradino vale ×10. Per passare da km a m scendi 3 gradini: moltiplichi per 10 × 10 × 10 = 1000. Per salire da cm a m sali 2 gradini: dividi per 100.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<rect x="20" y="40" width="80" height="250" fill="#f97316"/>
<rect x="100" y="70" width="80" height="220" fill="#fb923c"/>
<rect x="180" y="100" width="80" height="190" fill="#fdba74"/>
<rect x="260" y="130" width="80" height="160" fill="#22c55e"/>
<rect x="340" y="160" width="80" height="130" fill="#7dd3fc"/>
<rect x="420" y="190" width="80" height="100" fill="#38bdf8"/>
<rect x="500" y="220" width="80" height="70" fill="#0ea5e9"/>
<text x="60" y="30" font-size="20" text-anchor="middle" font-weight="bold">km</text>
<text x="140" y="60" font-size="20" text-anchor="middle" font-weight="bold">hm</text>
<text x="220" y="90" font-size="20" text-anchor="middle" font-weight="bold">dam</text>
<text x="300" y="120" font-size="22" text-anchor="middle" font-weight="bold" fill="#166534">m</text>
<text x="380" y="150" font-size="20" text-anchor="middle" font-weight="bold">dm</text>
<text x="460" y="180" font-size="20" text-anchor="middle" font-weight="bold">cm</text>
<text x="540" y="210" font-size="20" text-anchor="middle" font-weight="bold">mm</text>
<text x="160" y="260" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">scendi: × 10</text>
<text x="460" y="270" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">sali: : 10</text>
</svg>`
        },
        {
          label: "🦶 Le misure del corpo",
          html: `<p>Prima del metro, ogni città aveva le sue misure, spesso prese dal corpo: il <b>piede</b>, il <b>palmo</b>, il <b>braccio</b>, il <b>passo</b>. A Firenze il braccio valeva circa 58 cm, a Milano circa 59 cm, a Bologna 64 cm: un mercante doveva fare continuamente conversioni!</p>
<p>Prova: misura il banco con le tue <b>spanne</b> e fallo misurare a un compagno. Ottenete numeri diversi? Ecco perché serve un'unità <b>uguale per tutti</b>: è questa l'idea che ha portato al metro, "per tutti i popoli, per tutti i tempi", come dicevano i francesi del 1791.</p>`
        },
        {
          label: "🧊 Il volume in 3D",
          html: `<p>Il volume si "conta" in cubetti. Un parallelepipedo 4 × 3 × 2 contiene 24 cubetti: se ogni cubetto è 1 cm³, il volume è 24 cm³ = 24 mL. Cambia le dimensioni e guarda come cresce.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 2 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del metodo e della misura: tocca e scopri il perché",
      nodes: [
        { id: "galileo", label: "Galileo", x: 50, y: 6, color: "#a855f7", html: "Galileo Galilei (1564–1642), scienziato pisano.", why: "Studiando il pendolo, la caduta dei gravi e il cielo con il cannocchiale (1609), capì che la natura è \"scritta in lingua matematica\" e che le idee vanno messe alla prova con gli esperimenti, non accettate solo perché le aveva dette Aristotele." },
        { id: "metodo", label: "Metodo scientifico", x: 50, y: 26, color: "#0f766e", html: "Osservazione → ipotesi → esperimento → analisi → conclusione.", why: "Serve a distinguere ciò che è vero da ciò che sembra vero. Funziona perché è controllabile da tutti: un risultato vale solo se altri lo riproducono." },
        { id: "ipotesi", label: "Ipotesi e variabili", x: 16, y: 40, color: "#8b5cf6", html: "Un'idea da controllare; si cambia una variabile alla volta.", why: "Se cambiassi due cose insieme non sapresti quale ha causato l'effetto. Per questo si usano anche esperimenti di controllo." },
        { id: "misura", label: "Misura", x: 84, y: 40, color: "#f97316", html: "Confronto di una grandezza con un'unità di misura.", why: "Senza numeri non si possono confrontare i risultati di scienziati diversi. Lord Kelvin diceva: se puoi misurare ciò di cui parli, ne sai qualcosa." },
        { id: "si", label: "Sistema Internazionale", x: 70, y: 62, color: "#2563eb", html: "7 unità fondamentali: m, kg, s, K, A, mol, cd.", why: "Nato dal sistema metrico decimale della Rivoluzione francese (1791-1799) e adottato nel 1960. Dal 2019 tutte le unità sono definite tramite costanti della natura, come la velocità della luce." },
        { id: "prefissi", label: "Multipli e sottomultipli", x: 92, y: 80, color: "#0ea5e9", html: "Prefissi come chilo, centi, milli: potenze di 10.", why: "Il sistema è decimale come il nostro modo di contare, quindi le conversioni si fanno spostando la virgola." },
        { id: "derivate", label: "Grandezze derivate", x: 50, y: 82, color: "#16a34a", html: "Area, volume, velocità, densità…", why: "Si ottengono combinando quelle fondamentali: la densità è massa diviso volume, la velocità è lunghezza diviso tempo." },
        { id: "errori", label: "Errori e incertezza", x: 16, y: 72, color: "#ef4444", html: "Ogni misura ha un'incertezza; si ripete e si fa la media.", why: "Nessuno strumento è perfetto e nessun occhio è perfetto. Ripetere le misure riduce gli errori casuali; tarare gli strumenti riduce quelli sistematici." },
        { id: "legge", label: "Legge scientifica", x: 22, y: 96, color: "#14b8a6", html: "Una relazione confermata da tanti esperimenti.", why: "Una legge può sempre essere migliorata da nuove misure più precise: la scienza non è un elenco di verità eterne, ma la migliore spiegazione che abbiamo finora." }
      ],
      edges: [
        ["galileo", "metodo", "propone il"],
        ["metodo", "ipotesi", "parte da"],
        ["metodo", "misura", "si basa sulla"],
        ["misura", "si", "usa le unità del"],
        ["si", "prefissi", "con i"],
        ["si", "derivate", "genera le"],
        ["misura", "errori", "ha sempre"],
        ["ipotesi", "legge", "se confermata"],
        ["errori", "legge", "rendono provvisoria"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: unità e strumenti",
      questions: [
        { type: "num", q: "Quanti mL ci sono in 1,5 L?", answer: 1500, unit: "mL", explain: "1 L = 1000 mL, quindi 1,5 L = 1500 mL." },
        { type: "mc", q: "Qual è l'unità di misura della massa nel SI?", options: ["grammo", "newton", "chilogrammo", "litro"], answer: 2, explain: "Il chilogrammo (kg) è l'unità fondamentale della massa." },
        { type: "tf", q: "Sulla Luna la massa di un astronauta diventa 6 volte più piccola.", answer: false, explain: "Cambia il peso (la forza di gravità), non la massa." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Metodo scientifico: <b>osservazione, ipotesi, esperimento, analisi, conclusione</b>; risultati <b>riproducibili</b>.</li>
<li>Misurare = <b>confrontare</b> con un'unità. Numero + unità!</li>
<li>SI: <b>metro, chilogrammo, secondo, kelvin, ampere, mole, candela</b>.</li>
<li>1 dm³ = 1 L; 1 cm³ = 1 mL. Densità d = m / V.</li>
<li>Massa (kg, bilancia) ≠ peso (N, dinamometro).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Ipotesi", d: "Possibile spiegazione di un fenomeno, da verificare con esperimenti." },
    { t: "Variabile", d: "Fattore che può cambiare in un esperimento." },
    { t: "Grandezza", d: "Proprietà di un corpo che si può misurare." },
    { t: "Unità di misura", d: "Grandezza campione con cui si confronta ciò che si misura." },
    { t: "Sistema Internazionale (SI)", d: "Sistema di unità di misura adottato in quasi tutto il mondo dal 1960." },
    { t: "Massa", d: "Quantità di materia; si misura in kg con la bilancia." },
    { t: "Peso", d: "Forza con cui un corpo è attratto dalla Terra; si misura in newton." },
    { t: "Densità", d: "Rapporto tra massa e volume di un corpo." },
    { t: "Portata", d: "Valore massimo che uno strumento può misurare." },
    { t: "Sensibilità", d: "Valore più piccolo che uno strumento riesce a misurare." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine le fasi del metodo sperimentale.", items: ["Osservo un fenomeno e mi faccio una domanda", "Formulo un'ipotesi", "Progetto ed eseguo un esperimento", "Analizzo i dati", "Traggo le conclusioni"], explain: "È la sequenza del metodo scientifico." },
      { type: "mc", q: "Quale di queste NON è una grandezza fisica?", options: ["La temperatura", "La simpatia", "Il tempo", "Il volume"], answer: 1, explain: "La simpatia non si può misurare con uno strumento e un'unità." },
      { type: "text", q: "Qual è l'unità di misura del tempo nel Sistema Internazionale?", answer: ["secondo", "il secondo", "s"], explain: "Il secondo (s)." },
      { type: "num", q: "Quanti centimetri ci sono in 3,2 m?", answer: 320, unit: "cm", explain: "1 m = 100 cm, quindi 3,2 × 100 = 320 cm." },
      { type: "num", q: "Un cubo ha lo spigolo di 1 dm. Quanti litri d'acqua contiene?", answer: 1, unit: "L", explain: "1 dm³ = 1 L." },
      { type: "num", q: "Un oggetto ha massa 80 g e volume 40 cm³. Qual è la sua densità in g/cm³?", answer: 2, unit: "g/cm³", explain: "d = m / V = 80 : 40 = 2 g/cm³." },
      { type: "tf", q: "Un oggetto con densità 0,6 g/cm³ galleggia nell'acqua.", answer: true, explain: "È meno denso dell'acqua (1 g/cm³), quindi galleggia." },
      { type: "mc", q: "Con quale strumento si misura il peso (forza)?", options: ["Bilancia a bracci", "Dinamometro", "Termometro", "Cilindro graduato"], answer: 1, explain: "Il peso è una forza: si misura con il dinamometro, in newton." },
      { type: "mc", q: "Un righello ha le tacche ogni millimetro. Qual è la sua sensibilità?", options: ["1 cm", "1 mm", "30 cm", "0,1 mm"], answer: 1, explain: "La sensibilità è la più piccola quantità che lo strumento apprezza: 1 mm." },
      { type: "num", q: "Il livello dell'acqua in un cilindro graduato passa da 50 mL a 68 mL immergendo un sasso. Qual è il volume del sasso in cm³?", answer: 18, unit: "cm³", explain: "68 − 50 = 18 mL = 18 cm³." },
      { type: "mc", q: "Perché si ripete più volte una misura?", options: ["Per farla durare di più", "Per ridurre gli errori casuali facendo la media", "Perché la prima è sempre sbagliata"], answer: 1, explain: "La media di più misure riduce l'effetto degli errori casuali." }
    ],
    gen: [["lengthConv", 3]]
  }
});

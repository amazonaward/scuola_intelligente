TOPIC('it', {
  id: "l1-fis-grandezze-misure",
  title: "Grandezze fisiche e Sistema Internazionale",
  intro: "La fisica comincia quando smettiamo di dire «è lungo», «è pesante», «è veloce» e cominciamo a dire <b>quanto</b>. Per farlo servono <b>grandezze</b>, <b>unità di misura</b> condivise da tutti e un modo comodo di scrivere numeri enormi o minuscoli. In questa lezione vediamo il <b>Sistema Internazionale (SI)</b>, i prefissi, le equivalenze, la <b>notazione scientifica</b> e gli <b>ordini di grandezza</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Che cos'è una grandezza fisica",
      html: `<p>Una <b>grandezza fisica</b> è una proprietà di un corpo o di un fenomeno che può essere <b>misurata</b>: la lunghezza di un banco, la massa di uno zaino, la durata di una lezione, la temperatura di una stanza. Non sono grandezze fisiche il «bello», il «simpatico», il «buono»: non esiste uno strumento per misurarli in modo oggettivo.</p>
<p><b>Misurare</b> una grandezza significa <b>confrontarla con una grandezza omogenea scelta come campione</b> (l'<b>unità di misura</b>) e contare quante volte questa è contenuta nella prima. Il risultato è un <b>numero seguito da un'unità</b>:</p>
<p style="text-align:center"><b>misura = numero × unità</b>, per esempio l = 3,2 m</p>
<p>Senza l'unità, un numero in fisica è privo di significato: «5» può essere 5 metri, 5 secondi o 5 chili. Le grandezze fisiche si dividono in:</p>
<ul>
<li><b>grandezze fondamentali</b>: scelte come punto di partenza (lunghezza, massa, tempo…);</li>
<li><b>grandezze derivate</b>: ottenute combinando le fondamentali con prodotti e rapporti (area, volume, velocità, densità…).</li>
</ul>`
    },
    {
      type: "text",
      title: "Il Sistema Internazionale (SI)",
      html: `<p>Per secoli ogni Paese, e a volte ogni città, usava le proprie unità (piedi, braccia, libbre, once…). Nel 1960 la Conferenza generale dei pesi e delle misure adottò il <b>Sistema Internazionale di unità</b>, oggi usato in tutto il mondo scientifico. Ha <b>sette grandezze fondamentali</b>:</p>
<table>
<tr><th>Grandezza</th><th>Unità</th><th>Simbolo</th></tr>
<tr><td>Lunghezza</td><td>metro</td><td>m</td></tr>
<tr><td>Massa</td><td>chilogrammo</td><td>kg</td></tr>
<tr><td>Tempo</td><td>secondo</td><td>s</td></tr>
<tr><td>Corrente elettrica</td><td>ampere</td><td>A</td></tr>
<tr><td>Temperatura termodinamica</td><td>kelvin</td><td>K</td></tr>
<tr><td>Quantità di sostanza</td><td>mole</td><td>mol</td></tr>
<tr><td>Intensità luminosa</td><td>candela</td><td>cd</td></tr>
</table>
<p>Nel programma del primo anno usiamo soprattutto le prime tre: <b>lunghezza, massa, tempo</b>.</p>`
    },
    {
      type: "widget",
      title: "Fondamentali o derivate?",
      widget: "classify",
      options: { groups: ["Fondamentale (SI)", "Derivata"], items: [
        ["Lunghezza", 0],
        ["Velocità", 1],
        ["Massa", 0],
        ["Area", 1],
        ["Tempo", 0],
        ["Densità", 1],
        ["Temperatura (kelvin)", 0],
        ["Volume", 1],
        ["Forza", 1]
      ] },
      caption: "Le grandezze derivate si ottengono dalle fondamentali con prodotti e rapporti."
    },
    {
      type: "text",
      title: "Come si definiscono le unità",
      html: `<p>Nel tempo le definizioni sono cambiate per renderle sempre più precise e riproducibili:</p>
<ul>
<li>il <b>metro</b> è oggi definito come la distanza percorsa dalla luce nel vuoto in <b>1/299 792 458 di secondo</b>; nel 1791 fu invece pensato come un decimilionesimo del quarto di meridiano terrestre;</li>
<li>il <b>secondo</b> è la durata di <b>9 192 631 770 periodi</b> della radiazione emessa da un atomo di cesio-133;</li>
<li>il <b>chilogrammo</b>, fino al 2019 definito da un cilindro di platino-iridio conservato a Sèvres (Francia), dal 20 maggio 2019 è definito a partire dalla <b>costante di Planck</b>.</li>
</ul>
<p>Oggi tutte le unità SI si basano su <b>costanti fondamentali della natura</b>: non dipendono più da un oggetto che potrebbe deteriorarsi.</p>`
    },
    {
      type: "text",
      title: "Le grandezze derivate",
      html: `<p>Le unità delle grandezze derivate si ottengono combinando quelle fondamentali:</p>
<table>
<tr><th>Grandezza</th><th>Definizione</th><th>Unità SI</th></tr>
<tr><td>Area</td><td>lunghezza × lunghezza</td><td>m²</td></tr>
<tr><td>Volume</td><td>lunghezza × lunghezza × lunghezza</td><td>m³</td></tr>
<tr><td>Velocità</td><td>spazio / tempo</td><td>m/s</td></tr>
<tr><td>Densità</td><td>massa / volume</td><td>kg/m³</td></tr>
<tr><td>Forza (la studieremo)</td><td>massa × accelerazione</td><td>newton: N = kg·m/s²</td></tr>
</table>
<p>Per controllare se una formula è corretta si fa l'<b>analisi dimensionale</b>: le unità di misura devono tornare. Esempio: la velocità è spazio/tempo, quindi la formula <i>v = s / t</i> ha come unità m/s. Se invece scrivessi <i>v = s · t</i> otterresti m·s, che non è una velocità.</p>`
    },
    {
      type: "remember",
      title: "Le regole per scrivere le misure",
      html: `<ul>
<li>Il simbolo dell'unità si scrive <b>senza punto</b> e <b>senza plurale</b>: 5 kg e non «5 kg.» né «5 kgs»</li>
<li>Si lascia uno spazio tra numero e unità: 12 m.</li>
<li>I simboli di unità che derivano da un nome proprio hanno la <b>maiuscola</b> (N per Newton, K per Kelvin, A per Ampère), gli altri sono minuscoli (m, kg, s).</li>
<li>Il separatore decimale in Italia è la virgola: 3,5 m.</li>
</ul>`
    },
    {
      type: "text",
      title: "Multipli e sottomultipli",
      html: `<p>Quando una grandezza è molto più grande o più piccola dell'unità, si usano i <b>prefissi</b>, che moltiplicano l'unità per una potenza di 10:</p>
<table>
<tr><th>Prefisso</th><th>Simbolo</th><th>Fattore</th></tr>
<tr><td>tera</td><td>T</td><td>10¹²</td></tr>
<tr><td>giga</td><td>G</td><td>10⁹</td></tr>
<tr><td>mega</td><td>M</td><td>10⁶</td></tr>
<tr><td>chilo</td><td>k</td><td>10³</td></tr>
<tr><td>centi</td><td>c</td><td>10⁻²</td></tr>
<tr><td>milli</td><td>m</td><td>10⁻³</td></tr>
<tr><td>micro</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>nano</td><td>n</td><td>10⁻⁹</td></tr>
<tr><td>pico</td><td>p</td><td>10⁻¹²</td></tr>
</table>
<p>Esempi: 1 km = 10³ m; 1 mm = 10⁻³ m; 1 GB = 10⁹ byte; 1 nm = 10⁻⁹ m (una frazione del diametro di un virus).</p>
<p>Attenzione al <b>chilogrammo</b>: è l'unica unità SI di base che contiene già un prefisso. I multipli e sottomultipli si formano a partire dal grammo (1 mg = 10⁻³ g = 10⁻⁶ kg).</p>`
    },
    {
      type: "widget",
      title: "Prefissi e potenze di 10",
      widget: "match",
      options: { pairs: [
        ["kilo (k)", "10³"],
        ["mega (M)", "10⁶"],
        ["giga (G)", "10⁹"],
        ["milli (m)", "10⁻³"],
        ["micro (μ)", "10⁻⁶"],
        ["nano (n)", "10⁻⁹"]
      ] },
      caption: "Abbina ogni prefisso al suo fattore."
    },
    {
      type: "svg",
      title: "La scala dei prefissi",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Ogni gradino vale mille volte il precedente</text>
<line x1="30" y1="130" x2="610" y2="130" stroke="#334155" stroke-width="3"/>
<g fill="#2563eb"><circle cx="60" cy="130" r="9"/><circle cx="145" cy="130" r="9"/><circle cx="230" cy="130" r="9"/><circle cx="315" cy="130" r="9"/><circle cx="400" cy="130" r="9"/><circle cx="485" cy="130" r="9"/><circle cx="570" cy="130" r="9"/></g>
<g font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="60" y="108">nano</text><text x="145" y="108">micro</text><text x="230" y="108">milli</text><text x="315" y="108">unità</text><text x="400" y="108">chilo</text><text x="485" y="108">mega</text><text x="570" y="108">giga</text>
</g>
<g font-size="15" text-anchor="middle" fill="#1d4ed8">
<text x="60" y="160">10⁻⁹</text><text x="145" y="160">10⁻⁶</text><text x="230" y="160">10⁻³</text><text x="315" y="160">1</text><text x="400" y="160">10³</text><text x="485" y="160">10⁶</text><text x="570" y="160">10⁹</text>
</g>
<g font-size="14" text-anchor="middle" fill="#475569">
<text x="102" y="205">× 1000</text><text x="187" y="205">× 1000</text><text x="272" y="205">× 1000</text><text x="357" y="205">× 1000</text><text x="442" y="205">× 1000</text><text x="527" y="205">× 1000</text>
</g>
<text x="320" y="262" font-size="15" text-anchor="middle" fill="#0f172a">Per passare da un prefisso a quello a destra: dividi per 1000 il numero</text>
</g>
</svg>`,
      caption: "Spostandosi a destra la stessa quantità si esprime con un numero mille volte più piccolo (1000 m = 1 km)."
    },
    {
      type: "example",
      title: "Le equivalenze in pratica",
      html: `<p><b>1)</b> Convertire 2,5 km in metri: 2,5 × 10³ m = <b>2500 m</b>.</p>
<p><b>2)</b> Convertire 450 mm in metri: 450 × 10⁻³ m = <b>0,45 m</b>.</p>
<p><b>3)</b> Convertire 36 km/h in m/s: 36 × 1000 m / 3600 s = <b>10 m/s</b>. Regola pratica: per passare da km/h a m/s si divide per 3,6; per il contrario si moltiplica per 3,6.</p>
<p><b>4)</b> Aree e volumi: 1 m² = (10² cm)² = <b>10⁴ cm²</b>; 1 m³ = <b>10⁶ cm³</b>; 1 L = 1 dm³ = 10⁻³ m³. Attenzione: per le aree e i volumi i fattori si elevano al quadrato e al cubo!</p>
<p><b>5)</b> Densità: 1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = <b>10³ kg/m³</b>. L'acqua ha densità di circa 1000 kg/m³.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: unità e prefissi",
      questions: [
        { type: "num", q: "Quanti metri sono 3,2 km?", answer: 3200, tol: 0, unit: "m", explain: "3,2 × 1000 = 3200 m." },
        { type: "num", q: "Converti 72 km/h in m/s.", answer: 20, tol: 0, unit: "m/s", explain: "72 : 3,6 = 20 m/s." },
        { type: "tf", q: "Il chilogrammo è l'unità di massa del Sistema Internazionale.", answer: true, explain: "Il kg è l'unità SI di massa." }
      ]
    },
    {
      type: "text",
      title: "La notazione scientifica",
      html: `<p>Numeri come la massa della Terra (5 970 000 000 000 000 000 000 000 kg) sono scomodi da scrivere. Si usa la <b>notazione scientifica</b>:</p>
<p style="text-align:center"><b>a × 10ⁿ</b> con <b>1 ≤ a &lt; 10</b> e n intero</p>
<p>Per scrivere un numero in notazione scientifica si sposta la virgola fino ad avere una sola cifra diversa da zero prima della virgola; l'esponente n è il numero di posti di cui si è spostata la virgola (positivo se il numero era grande, negativo se era piccolo).</p>
<ul>
<li>45 000 = <b>4,5 × 10⁴</b> (virgola spostata di 4 posti a sinistra)</li>
<li>0,00032 = <b>3,2 × 10⁻⁴</b> (virgola spostata di 4 posti a destra)</li>
<li>Massa della Terra ≈ <b>5,97 × 10²⁴ kg</b></li>
<li>Massa dell'elettrone ≈ <b>9,11 × 10⁻³¹ kg</b></li>
</ul>
<p><b>Operazioni.</b> Moltiplicando si moltiplicano i numeri e si sommano gli esponenti: (2 × 10³)(3 × 10⁴) = 6 × 10⁷. Dividendo si sottraggono gli esponenti: (8 × 10⁹)/(2 × 10³) = 4 × 10⁶. Per sommare occorre portare i numeri alla stessa potenza di 10.</p>`
    },
    {
      type: "text",
      title: "L'ordine di grandezza",
      html: `<p>L'<b>ordine di grandezza</b> di un numero è la <b>potenza di 10 più vicina</b> al numero. Serve per farsi un'idea rapida della «scala» di una grandezza e per fare stime.</p>
<p>Regola pratica: si scrive il numero in notazione scientifica a × 10ⁿ. Se <b>a &lt; 5</b> l'ordine di grandezza è <b>10ⁿ</b>; se <b>a ≥ 5</b> è <b>10ⁿ⁺¹</b> (la soglia esatta sarebbe √10 ≈ 3,16, ma nei testi scolastici si usa spesso 5).</p>
<ul>
<li>3,2 × 10⁴ → ordine di grandezza 10⁴</li>
<li>8 × 10⁴ → 10⁵</li>
<li>Diametro di un atomo: ≈ 10⁻¹⁰ m. Diametro di un capello: ≈ 10⁻⁴ m. Altezza di una persona: ≈ 10⁰ m. Raggio terrestre: ≈ 10⁷ m (6,4 × 10⁶ m). Distanza Terra-Sole: ≈ 10¹¹ m (1,5 × 10¹¹ m).</li>
</ul>
<p>Due grandezze che differiscono di <b>n ordini di grandezza</b> hanno un rapporto di circa 10ⁿ.</p>`
    },
    {
      type: "widget",
      title: "Dalla più piccola alla più grande",
      widget: "flashcards",
      options: { cards: [
        { front: "⚛️ Nucleo atomico", back: "circa 10⁻¹⁵ m" },
        { front: "🔬 Atomo", back: "circa 10⁻¹⁰ m" },
        { front: "🦠 Batterio", back: "circa 10⁻⁶ m" },
        { front: "💇 Spessore di un capello", back: "circa 10⁻⁴ m" },
        { front: "🧍 Un uomo", back: "circa 10⁰ m (1-2 m)" },
        { front: "🌍 Raggio della Terra", back: "6,4 × 10⁶ m, ordine 10⁷ m" },
        { front: "☀️ Distanza Terra-Sole", back: "1,5 × 10¹¹ m" },
        { front: "✨ Un anno luce", back: "circa 9,5 × 10¹⁵ m" },
        { front: "🌌 Diametro della Via Lattea", back: "circa 10²¹ m" }
      ] },
      caption: "Gira le carte: in 36 ordini di grandezza c'è tutto l'Universo osservabile."
    },
    {
      type: "example",
      title: "Stimare a occhio: quante volte batte il cuore?",
      html: `<p>Una persona ha circa <b>70 battiti al minuto</b>. Quanti battiti in una vita di 80 anni?</p>
<ol>
<li>Minuti in un anno: 60 × 24 × 365 ≈ 5,3 × 10⁵.</li>
<li>Minuti in 80 anni: 5,3 × 10⁵ × 80 ≈ 4,2 × 10⁷.</li>
<li>Battiti: 70 × 4,2 × 10⁷ ≈ <b>3 × 10⁹</b>, cioè circa <b>tre miliardi</b>.</li>
</ol>
<p>L'ordine di grandezza è 10⁹: non serve il numero esatto, basta capire che si parla di miliardi.</p>`
    },
    {
      type: "curiosity",
      title: "Il disastro del Mars Climate Orbiter",
      html: `<p>Nel 1999 la sonda NASA <b>Mars Climate Orbiter</b> si distrusse nell'atmosfera di Marte, nel tentativo di entrare in orbita, a una quota molto più bassa del previsto. Causa: un software forniva i dati di spinta in <b>libbre-forza</b> (unità anglosassone), mentre un altro programma li aspettava in <b>newton</b> (SI). Un errore di unità di misura è costato circa 125 milioni di dollari.</p>`
    },
    {
      type: "curiosity",
      title: "Un metro nato dalla Rivoluzione",
      html: `<p>Il sistema metrico decimale fu progettato in Francia durante la Rivoluzione, con l'idea di creare misure «per tutti i tempi, per tutti i popoli». Nel 1791 l'Accademia delle Scienze propose di definire il metro come la <b>decimilionesima parte del quarto di meridiano terrestre</b>. Due astronomi, Delambre e Méchain, misurarono l'arco di meridiano tra Dunkerque e Barcellona, tra mille difficoltà e anche arresti. Il campione di platino fu realizzato nel 1799.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le equivalenze",
      intro: "Se le equivalenze ti confondono, prova a guardarle in modo diverso.",
      tabs: [
        {
          label: "🪜 La scala dei prefissi",
          html: "<p>Immagina una <b>scala a gradini</b> (come nel disegno): ogni gradino multiplica o divide per 1000. Se scendi di un gradino, il <b>numero</b> si moltiplica per 1000 (3 km = 3000 m); se sali, si divide per 1000 (3000 m = 3 km). Per le <b>aree</b> ogni gradino vale 10⁶ (1 km² = 10⁶ m²), per i <b>volumi</b> 10⁹ (1 km³ = 10⁹ m³).</p>"
        },
        {
          label: "🧮 Il metodo dei fattori di conversione",
          html: "<p>Si moltiplica per una frazione uguale a 1, scritta in modo che le unità indesiderate si cancellino.<br>Esempio: 54 km/h = 54 <u>km</u>/<u>h</u> × (1000 m / 1 <u>km</u>) × (1 <u>h</u> / 3600 s) = 54 000 / 3600 m/s = <b>15 m/s</b>.<br>Basta controllare che alla fine restino solo le unità volute: se non è così, hai capovolto una frazione.</p>"
        },
        {
          label: "🔢 Il metodo della notazione scientifica",
          html: "<p>Sostituisci il prefisso con la potenza di 10: 45 μm = 45 × 10⁻⁶ m = 4,5 × 10⁻⁵ m. Con la notazione scientifica non si perdono gli zeri e si possono confrontare facilmente grandezze molto diverse: i numeri sono lunghi due cifre e l'<b>esponente</b> fa il lavoro.</p>"
        },
        {
          label: "📏 Disegno: ordini di grandezza",
          html: "<p>Ogni passo a destra sulla retta è una potenza di 10 in più.</p>",
          svg: "<svg viewBox='0 0 600 200' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='200' fill='#fff7ed'/><line x1='40' y1='100' x2='560' y2='100' stroke='#9a3412' stroke-width='3'/><g fill='#ea580c'><circle cx='60' cy='100' r='8'/><circle cx='150' cy='100' r='8'/><circle cx='240' cy='100' r='8'/><circle cx='330' cy='100' r='8'/><circle cx='420' cy='100' r='8'/><circle cx='510' cy='100' r='8'/></g><g font-family='sans-serif' font-size='15' text-anchor='middle' fill='#7c2d12'><text x='60' y='80'>10⁻¹⁰</text><text x='150' y='80'>10⁻⁶</text><text x='240' y='80'>10⁻²</text><text x='330' y='80'>10²</text><text x='420' y='80'>10⁶</text><text x='510' y='80'>10¹⁰</text><text x='60' y='135'>atomo</text><text x='150' y='135'>batterio</text><text x='240' y='135'>formica</text><text x='330' y='135'>campo</text><text x='420' y='135'>Italia</text><text x='510' y='135'>Terra-Luna x30</text></g></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa delle grandezze e delle misure",
      nodes: [
        { id: "grandezza", label: "Grandezza fisica", x: 50, y: 8, color: "#2563eb", html: "Proprietà misurabile di un oggetto o di un fenomeno.", why: "Galileo sostenne che il libro della natura è scritto in linguaggio matematico: per studiare un fenomeno bisogna prima trovare ciò che si può misurare. La fisica moderna nasce quando si scelgono grandezze misurabili (tempo, spazio, massa) invece di qualità vaghe." },
        { id: "misura", label: "Misura = numero × unità", x: 18, y: 42, color: "#16a34a", html: "Confronto con un campione omogeneo, l'unità di misura.", why: "Una misura è un confronto: dire che un tavolo è lungo 2 m significa che il metro campione sta 2 volte nel tavolo. Senza un campione condiviso non si possono confrontare risultati ottenuti da persone diverse." },
        { id: "si", label: "Sistema Internazionale", x: 82, y: 42, color: "#f59e0b", html: "Sette unità fondamentali condivise in tutto il mondo.", why: "Il SI nasce dal sistema metrico decimale francese (1790-99) e dalla Convenzione del Metro (1875). Dal 2019 le unità sono definite tramite costanti fisiche (c, h, e, k, N_A), perciò sono stabili e riproducibili ovunque." },
        { id: "derivate", label: "Grandezze derivate", x: 82, y: 78, color: "#8b5cf6", html: "Area, volume, velocità, densità, forza…", why: "Le derivate nascono dalle leggi fisiche: la velocità è il rapporto tra spazio e tempo; la forza (F = m·a) combina massa e accelerazione. Le loro unità si ricavano dalle fondamentali." },
        { id: "potenze", label: "Potenze di 10 e prefissi", x: 18, y: 78, color: "#ef4444", html: "Notazione scientifica, ordini di grandezza, multipli e sottomultipli.", why: "L'Universo spazia da 10⁻¹⁵ m a 10²⁶ m: nessun sistema di scrittura ordinario regge. Le potenze di 10 sono la scala logaritmica con cui gli scienziati si orientano tra il nucleo atomico e le galassie." },
        { id: "stima", label: "Stime e controlli", x: 50, y: 78, color: "#64748b", html: "Analisi dimensionale e ordini di grandezza per verificare i risultati.", why: "Enrico Fermi era famoso per le stime rapide (i «problemi di Fermi»): un risultato con l'ordine di grandezza sbagliato è sicuramente errato, quindi la stima è un controllo prezioso." }
      ],
      edges: [["grandezza", "misura", "si esprime con"], ["misura", "si", "usa unità del"], ["si", "derivate", "genera"], ["grandezza", "potenze", "si scrive con"], ["potenze", "stima", "serve per"], ["derivate", "stima", "si controllano con"]]
    },
    {
      type: "quiz",
      title: "Mini-quiz: notazione scientifica",
      questions: [
        { type: "mc", q: "Come si scrive 0,0045 in notazione scientifica?", options: ["4,5 × 10⁻³", "4,5 × 10³", "45 × 10⁻⁴", "0,45 × 10⁻²"], answer: 0, explain: "Si sposta la virgola di 3 posti a destra: 4,5 × 10⁻³." },
        { type: "mc", q: "Qual è l'ordine di grandezza di 7,5 × 10⁵?", options: ["10⁵", "10⁶", "10⁴", "10⁷"], answer: 1, explain: "Poiché 7,5 ≥ 5, l'ordine di grandezza è 10⁶." },
        { type: "num", q: "Calcola (2 × 10⁴) × (3 × 10⁵) e dai l'esponente di 10 nel risultato scritto come 6 × 10ⁿ.", answer: 9, tol: 0, explain: "6 × 10⁹: gli esponenti si sommano, 4 + 5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Grandezza fisica", d: "Proprietà di un corpo o di un fenomeno che si può misurare." },
    { t: "Unità di misura", d: "Grandezza campione con cui si confrontano le altre della stessa specie." },
    { t: "Sistema Internazionale (SI)", d: "Sistema di unità adottato in tutto il mondo scientifico, con sette grandezze fondamentali." },
    { t: "Grandezza derivata", d: "Grandezza ottenuta da quelle fondamentali con prodotti e rapporti, come velocità o densità." },
    { t: "Prefisso", d: "Parte iniziale dell'unità che indica un multiplo o sottomultiplo (kilo-, milli-…)." },
    { t: "Notazione scientifica", d: "Scrittura di un numero come a × 10ⁿ, con 1 ≤ a < 10." },
    { t: "Ordine di grandezza", d: "Potenza di 10 più vicina a un numero." },
    { t: "Analisi dimensionale", d: "Controllo di una formula attraverso le unità di misura." },
    { t: "Densità", d: "Rapporto tra massa e volume di un corpo (kg/m³)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Misurare una grandezza significa:", options: ["Stimarla a occhio", "Confrontarla con un campione omogeneo, l'unità di misura", "Contare quante cifre ha", "Calcolarla con una formula"], answer: 1, explain: "Una misura è il rapporto tra la grandezza e l'unità scelta." },
      { type: "tf", q: "Il Sistema Internazionale ha sette grandezze fondamentali.", answer: true, explain: "Lunghezza, massa, tempo, corrente, temperatura, quantità di sostanza e intensità luminosa." },
      { type: "text", q: "Qual è il simbolo corretto dell'unità di massa del SI?", answer: ["kg"], explain: "Il chilogrammo si scrive kg, senza punto e senza plurale." },
      { type: "num", q: "Quanti metri sono 450 mm?", answer: 0.45, tol: 0.001, unit: "m", explain: "450 × 10⁻³ m = 0,45 m." },
      { type: "num", q: "Quanti metri al secondo sono 108 km/h?", answer: 30, tol: 0.01, unit: "m/s", explain: "108 : 3,6 = 30 m/s." },
      { type: "mc", q: "Quale unità è corretta per la densità nel SI?", options: ["kg·m", "kg/m³", "m/s", "kg/s"], answer: 1, explain: "Densità = massa/volume, quindi kg/m³." },
      { type: "mc", q: "Scrivi 52 000 000 in notazione scientifica.", options: ["52 × 10⁶", "5,2 × 10⁷", "0,52 × 10⁸", "5,2 × 10⁶"], answer: 1, explain: "La virgola va spostata di 7 posti: 5,2 × 10⁷." },
      { type: "mc", q: "Qual è l'ordine di grandezza di 3 × 10⁻⁵?", options: ["10⁻⁴", "10⁻⁵", "10⁻⁶", "10⁵"], answer: 1, explain: "Poiché 3 < 5, l'ordine di grandezza è 10⁻⁵." },
      { type: "tf", q: "1 m² è uguale a 100 cm².", answer: false, explain: "1 m² = (100 cm)² = 10 000 cm² = 10⁴ cm²." },
      { type: "order", q: "Ordina dal più piccolo al più grande.", items: ["1 nm", "1 μm", "1 mm", "1 km"], explain: "nano 10⁻⁹ m < micro 10⁻⁶ m < milli 10⁻³ m < chilo 10³ m." }
    ]
  }
});

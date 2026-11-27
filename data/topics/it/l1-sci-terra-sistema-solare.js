TOPIC('it', {
  id: "l1-sci-terra-sistema-solare",
  title: "La Terra nel Sistema Solare",
  intro: "Siamo passeggeri di una sfera di roccia che corre a circa 30 km al secondo intorno a una stella. Come lo sappiamo? Per millenni l'umanità ha creduto il contrario: che la Terra fosse immobile al centro del cosmo. In questa lezione scopriamo com'è fatto il <b>Sistema Solare</b>, le <b>leggi di Keplero</b> che ne governano i moti e come si è arrivati a misurare la <b>forma e le dimensioni della Terra</b> con strumenti semplicissimi.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "La nostra famiglia di astri",
      html: `<p>Il <b>Sistema Solare</b> si è formato circa <b>4,6 miliardi di anni fa</b> dal collasso di una nube di gas e polveri (la <b>nebulosa solare</b>). Al centro si formò il Sole; il materiale rimasto, appiattito in un disco rotante, si aggregò in pianeti, lune, asteroidi e comete.</p>
<ul>
<li>Il <b>Sole</b> è una stella di piccole dimensioni (una "nana gialla") ma contiene il <b>99,86%</b> della massa del sistema. Il suo diametro è circa 109 volte quello terrestre. Brilla perché nel nucleo (circa 15 milioni di gradi) l'idrogeno viene trasformato in elio per <b>fusione nucleare</b>.</li>
<li>I <b>pianeti</b> sono otto. Quattro <b>terrestri</b> (rocciosi, piccoli, densi, vicini al Sole): Mercurio, Venere, Terra, Marte. Quattro <b>giganti</b>: i <b>gassosi</b> Giove e Saturno (idrogeno ed elio) e i <b>ghiacciati</b> Urano e Nettuno.</li>
<li>La <b>fascia degli asteroidi</b> tra Marte e Giove; la <b>fascia di Kuiper</b> oltre Nettuno; la lontanissima <b>nube di Oort</b>, serbatoio di comete.</li>
<li>I <b>pianeti nani</b> (Plutone, Cerere, Eris...): dal 2006 l'Unione Astronomica Internazionale ha definito pianeta un corpo che orbita attorno al Sole, è sferico per la propria gravità e ha "ripulito" la propria orbita. Plutone non lo fa, quindi è un pianeta nano.</li>
</ul>
<p>Perché i pianeti vicini al Sole sono rocciosi e quelli lontani gassosi? Nel disco primordiale, vicino al Sole faceva troppo caldo perché gas e ghiacci condensassero: restarono solo metalli e rocce. Oltre la "linea del ghiaccio" (tra Marte e Giove) i protopianeti poterono accumulare ghiaccio e catturare idrogeno ed elio.</p>`
    },
    {
      type: "3d",
      title: "Il Sistema Solare in movimento",
      scene: "solar",
      options: { labels: true },
      caption: "Ruota la vista. Nota che i pianeti orbitano quasi sullo stesso piano e nello stesso verso: è l'eredità del disco da cui sono nati."
    },
    {
      type: "svg",
      title: "Le distanze dal Sole",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<circle cx="25" cy="150" r="22" fill="#facc15"/>
<g stroke="#334155" stroke-width="1" stroke-dasharray="4 4"><line x1="75" y1="40" x2="75" y2="260"/><line x1="105" y1="40" x2="105" y2="260"/><line x1="125" y1="40" x2="125" y2="260"/><line x1="170" y1="40" x2="170" y2="260"/></g>
<g>
<circle cx="75" cy="150" r="4" fill="#9ca3af"/><text x="75" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Me</text>
<circle cx="100" cy="150" r="7" fill="#fbbf24"/><text x="100" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ve</text>
<circle cx="130" cy="150" r="8" fill="#3b82f6"/><text x="130" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Te</text>
<circle cx="170" cy="150" r="5" fill="#ef4444"/><text x="170" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ma</text>
<circle cx="290" cy="150" r="22" fill="#d97706"/><text x="290" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Gi</text>
<circle cx="400" cy="150" r="18" fill="#eab308"/><text x="400" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Sa</text>
<circle cx="520" cy="150" r="12" fill="#22d3ee"/><text x="520" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ur</text>
<circle cx="600" cy="150" r="12" fill="#2563eb"/><text x="600" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ne</text>
</g>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Distanze medie dal Sole (non in scala per le dimensioni)</text>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#cbd5e1">0,39 · 0,72 · 1 · 1,52 · 5,2 · 9,6 · 19,2 · 30 UA</text>
</svg>`,
      caption: "Distanze in unità astronomiche (UA). 1 UA = distanza media Terra-Sole ≈ 149,6 milioni di km. La luce del Sole la percorre in circa 8 minuti e 20 secondi."
    },
    {
      type: "example",
      title: "Quanto è lontano il Sole, in tempo-luce?",
      html: `<p>La luce viaggia a circa <b>300 000 km/s</b>. Distanza Terra-Sole: <b>149,6 milioni di km</b>.</p>
<ol>
<li>t = s / v = 149 600 000 km / 300 000 km/s ≈ <b>499 s</b>.</li>
<li>499 s ≈ 8 minuti e 19 secondi.</li>
</ol>
<p>Ciò significa che quando guardi il Sole, lo vedi com'era più di 8 minuti fa. Per Nettuno (30 UA) la luce impiega circa 4 ore e mezza: i segnali delle sonde Voyager, a oltre 20 miliardi di km, impiegano più di 18 ore ad arrivare.</p>`
    },
    {
      type: "text",
      title: "Dal geocentrismo all'eliocentrismo",
      html: `<p>Per vedere come cambia il modo di pensare, ricostruisci le tappe:</p>
<ul>
<li><b>Aristotele</b> e poi <b>Tolomeo</b> (II sec. d.C., <i>Almagesto</i>): la Terra è immobile al centro e tutto le ruota intorno. Per spiegare il moto "retrogrado" dei pianeti (che a volte sembrano tornare indietro) Tolomeo usava cerchi su cerchi, gli <b>epicicli</b>.</li>
<li><b>Aristarco di Samo</b> (III sec. a.C.) aveva già proposto un sistema con il Sole al centro, ma non fu seguito.</li>
<li><b>Copernico</b> (<i>De revolutionibus</i>, 1543): il Sole è al centro e la Terra è un pianeta che gira su sé stessa e intorno al Sole. Il moto retrogrado diventa un effetto prospettico: la Terra, più veloce, sorpassa Marte.</li>
<li><b>Galileo</b> (1610), col cannocchiale: le quattro lune di Giove (che girano intorno a Giove, non alla Terra), le fasi di Venere, le macchie solari, i crateri della Luna.</li>
<li><b>Keplero</b> (1609-1619) e <b>Newton</b> (1687) diedero al modello le leggi matematiche.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Siamo nel 1610: la Terra è ferma o si muove?",
      html: `<p>Hai appena letto il <i>Sidereus Nuncius</i> di Galileo. Dice di aver visto, con un cannocchiale, <b>quattro "stelle" che girano intorno a Giove</b> e che Venere mostra fasi come la Luna, da "falce" a "piena". La Chiesa e quasi tutti i professori universitari difendono il sistema di Tolomeo, in cui tutto gira intorno alla Terra. Cosa pensi?</p>`,
      question: "Che cosa avresti pensato?",
      options: [
        { label: "Galileo si sbaglia: sono difetti delle lenti", outcome: "Era la reazione di molti all'epoca. Ma altri astronomi, anche gesuiti del Collegio Romano, riprodussero le osservazioni e le confermarono." },
        { label: "Non tutto gira attorno alla Terra, ma non so se è il Sole il centro", outcome: "Ragionevole: le lune di Giove mostrano che esistono centri di moto diversi dalla Terra. Anche il sistema ibrido di Tycho Brahe (pianeti attorno al Sole e il Sole attorno alla Terra) spiegava le fasi di Venere." },
        { label: "Il modello copernicano è il più semplice e coerente", outcome: "È la conclusione a cui Galileo e Keplero arrivarono, anche se la prova decisiva (la parallasse stellare) arrivò solo nel 1838 con Bessel." }
      ],
      answer: 2,
      explain: "Le osservazioni di Galileo (1610) non provavano da sole l'eliocentrismo, ma mostravano che il modello di Tolomeo non reggeva. Nel 1633 Galileo fu processato dall'Inquisizione e costretto ad abiurare. Il sistema copernicano fu poi dimostrato dalle leggi di Keplero e dalla gravitazione di Newton."
    },
    {
      type: "text",
      title: "Le tre leggi di Keplero",
      html: `<p>Johannes <b>Keplero</b> (1571–1630) ereditò le osservazioni di Marte, di precisione senza precedenti, di <b>Tycho Brahe</b>. Dopo anni di calcoli, scoprì che le orbite non sono cerchi:</p>
<ol>
<li><b>Prima legge (1609)</b>: ogni pianeta percorre un'<b>ellisse</b> con il Sole in uno dei due <b>fuochi</b>.</li>
<li><b>Seconda legge (1609)</b>: il segmento che unisce il pianeta al Sole <b>spazza aree uguali in tempi uguali</b>. Conseguenza: il pianeta va più veloce quando è vicino al Sole (<b>perielio</b>) e più lento quando è lontano (<b>afelio</b>).</li>
<li><b>Terza legge (1619)</b>: il quadrato del periodo di rivoluzione è proporzionale al cubo del semiasse maggiore dell'orbita: <b>T² / a³ = costante</b>. Con T in anni e a in UA la costante vale 1: <b>T² = a³</b>.</li>
</ol>
<p>Newton nel 1687 mostrò che le tre leggi sono conseguenza di una sola forza: la <b>gravitazione universale</b>, F = G · m₁ · m₂ / r².</p>`
    },
    {
      type: "svg",
      title: "L'ellisse e la legge delle aree",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<ellipse cx="320" cy="150" rx="260" ry="100" fill="none" stroke="#2563eb" stroke-width="3"/>
<circle cx="220" cy="150" r="14" fill="#facc15" stroke="#b45309" stroke-width="2"/>
<circle cx="420" cy="150" r="4" fill="#475569"/>
<text x="220" y="185" font-size="14" text-anchor="middle" fill="#1f2937">Sole (fuoco)</text>
<text x="420" y="170" font-size="14" text-anchor="middle" fill="#475569">altro fuoco</text>
<path d="M220 150 L560 150 A260 100 0 0 0 543 106 Z" fill="#fde68a" opacity="0.9" stroke="#b45309" stroke-width="1"/>
<path d="M220 150 L83 128 A260 100 0 0 0 80 175 Z" fill="#bbf7d0" opacity="0.9" stroke="#15803d" stroke-width="1"/>
<circle cx="580" cy="150" r="9" fill="#3b82f6"/>
<circle cx="60" cy="150" r="9" fill="#3b82f6"/>
<text x="580" y="185" font-size="14" text-anchor="middle" fill="#1f2937">afelio</text>
<text x="60" y="185" font-size="14" text-anchor="middle" fill="#1f2937">perielio</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Le due aree colorate sono uguali: stesso tempo di percorrenza</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#475569">(l'eccentricità è molto esagerata: l'orbita della Terra è quasi un cerchio)</text>
</svg>`,
      caption: "Più il pianeta è vicino al Sole, più si muove veloce: per spazzare la stessa area in meno spazio serve più velocità, per quella più larga ne basta meno."
    },
    {
      type: "example",
      title: "Usare la terza legge: il periodo di Marte",
      html: `<p>Marte ha semiasse maggiore <b>a = 1,52 UA</b>. Quanto dura il suo anno?</p>
<ol>
<li>T² = a³ = 1,52³ ≈ 3,51</li>
<li>T = √3,51 ≈ <b>1,87 anni</b> terrestri (circa 687 giorni).</li>
</ol>
<p>Per Giove, a = 5,2 UA: T² = 140,6 → T ≈ <b>11,9 anni</b>. E per un asteroide con periodo di 8 anni? a³ = 64 → a = <b>4 UA</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Sistema Solare e Keplero",
      questions: [
        { type: "mc", q: "In quale punto dell'orbita un pianeta ha la velocità maggiore?", options: ["Afelio", "Perielio", "È sempre la stessa"], answer: 1, explain: "Seconda legge: più vicino al Sole, più veloce." },
        { type: "num", q: "Un pianeta ha semiasse maggiore a = 4 UA. Quanto vale il suo periodo T (in anni)?", answer: 8, tol: 0.05, unit: "anni", explain: "T² = 4³ = 64 → T = 8 anni." },
        { type: "tf", q: "Il Sole contiene circa il 99,86% della massa del Sistema Solare.", answer: true, explain: "I pianeti, tutti insieme, sono meno dello 0,2% (Giove da solo ne contiene oltre i due terzi)." }
      ]
    },
    {
      type: "text",
      title: "La forma e le dimensioni della Terra",
      html: `<p>Che la Terra sia una sfera lo si sapeva da molto prima di Colombo. Già i filosofi greci portavano prove:</p>
<ul>
<li>durante le <b>eclissi di Luna</b> l'ombra della Terra sul disco lunare è sempre rotonda (<b>Aristotele</b>, IV sec. a.C.);</li>
<li>le <b>navi che spariscono dall'orizzonte</b> partendo dallo scafo: prima sparisce lo scafo, poi le vele;</li>
<li>spostandosi verso sud compaiono stelle nuove, e l'altezza della stella polare cambia con la latitudine;</li>
<li>oggi: le foto dallo spazio, il giro del mondo, il GPS.</li>
</ul>
<p>Più precisamente la Terra non è una sfera perfetta ma un <b>geoide</b>: è schiacciata ai poli per effetto della rotazione. Raggio equatoriale <b>6378 km</b>, raggio polare <b>6357 km</b> (differenza circa 21 km, cioè 0,3%). Circonferenza all'equatore circa <b>40 075 km</b>; lungo un meridiano circa 40 008 km. Il 1° di latitudine misura circa 111 km: da qui nasce la definizione originale del <b>metro</b> (1791: un decimilionesimo del quarto di meridiano da polo ad equatore).</p>`
    },
    {
      type: "example",
      title: "Eratostene misura la Terra (circa 240 a.C.)",
      html: `<p>Eratostene, direttore della Biblioteca di Alessandria, seppe che a <b>Siene</b> (oggi Assuan) il giorno del solstizio d'estate a mezzogiorno il Sole illuminava il fondo dei pozzi: era allo <b>zenit</b>. Nello stesso momento ad <b>Alessandria</b> un'asta verticale (gnomone) proiettava un'ombra: il Sole formava un angolo di circa <b>7,2°</b> con la verticale, cioè 1/50 di angolo giro.</p>
<ol>
<li>Quindi la distanza Siene-Alessandria è 1/50 della circonferenza terrestre.</li>
<li>La distanza (misurata dai "bematisti", che contavano i passi) era circa <b>5000 stadi</b>.</li>
<li>Circonferenza = 5000 × 50 = <b>250 000 stadi</b>.</li>
</ol>
<p>Con uno stadio tra 157 e 185 m, il risultato è tra 39 000 e 46 000 km: sorprendentemente vicino al valore vero di 40 000 km, con un'asta, un'ombra e un po' di geometria.</p>`
    },
    {
      type: "widget",
      title: "Il globo",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f0f9ff"/><circle cx="200" cy="150" r="110" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><ellipse cx="200" cy="150" rx="110" ry="30" fill="none" stroke="#dc2626" stroke-width="2"/><ellipse cx="200" cy="150" rx="40" ry="110" fill="none" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#475569" stroke-width="2" stroke-dasharray="6 4"/><ellipse cx="200" cy="92" rx="70" ry="14" fill="none" stroke="#7c3aed" stroke-width="2"/></svg>`,
        spots: [
          { x: 200, y: 20, label: "Asse di rotazione" },
          { x: 310, y: 150, label: "Equatore" },
          { x: 200, y: 78, label: "Parallelo" },
          { x: 160, y: 220, label: "Meridiano" }
        ]
      },
      caption: "Il reticolato geografico: i paralleli (cerchi paralleli all'equatore) misurano la latitudine, i meridiani (da polo a polo) la longitudine."
    },
    {
      type: "3d",
      title: "L'interno della Terra",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#92400e", label: "Crosta (5-70 km)" },
        { r: 0.9, color: "#ea580c", label: "Mantello (fino a 2900 km)" },
        { r: 0.55, color: "#f59e0b", label: "Nucleo esterno (liquido)" },
        { r: 0.2, color: "#fef08a", label: "Nucleo interno (solido)" }
      ] },
      caption: "Il raggio terrestre è di circa 6371 km. Lo conosciamo grazie alle onde sismiche dei terremoti, che cambiano velocità attraversando materiali diversi (le proporzioni qui sono schematiche)."
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le dimensioni",
      intro: "Le distanze astronomiche sfuggono all'intuizione. Prova con queste scale.",
      tabs: [
        {
          label: "⚽ In scala 1:10 miliardi",
          html: `<p>Riduciamo tutto di 10 miliardi di volte: il Sole diventa una palla di circa 14 cm, la Terra un granello di 1,3 mm a 15 m di distanza. Giove è una pallina di 1,4 cm a 78 m; Nettuno è a 450 m. La stella più vicina, Proxima Centauri, sarebbe a oltre 4000 km di distanza, come da Roma a Mosca e oltre. Il Sistema Solare è quasi tutto vuoto.</p>`
        },
        {
          label: "🏎️ A 100 km/h",
          html: `<p>Un'auto a 100 km/h impiegherebbe circa <b>1,5 milioni di ore</b>, cioè circa <b>170 anni</b>, per andare dalla Terra al Sole. La Luna (384 400 km) in circa 160 giorni. La luce fa il giro dell'equatore 7,5 volte in un secondo.</p>`
        },
        {
          label: "📅 Il calendario cosmico",
          html: `<p>Comprimiamo 13,8 miliardi di anni di storia dell'Universo in un anno: il Big Bang è il 1° gennaio; il Sistema Solare nasce attorno al 2 settembre; la vita compare a metà settembre; i dinosauri dominano a fine dicembre; <b>Homo sapiens</b> compare a pochi minuti prima della mezzanotte del 31 dicembre. Tutta la storia umana scritta è negli ultimi secondi.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Siamo a testa in giù?",
      html: `<p>Non esiste un "su" assoluto nello spazio: "giù" è dove punta la gravità, cioè verso il centro della Terra. Un australiano è "capovolto" rispetto a un italiano solo secondo le nostre mappe, che mettono il nord in alto per convenzione (un tempo molte mappe medievali avevano l'est in alto, da cui la parola <b>orientarsi</b>). Un'altra curiosità: la Terra non solo gira intorno al Sole a circa 30 km/s: il Sole stesso orbita intorno al centro della Via Lattea a circa 220 km/s e compie un giro in circa 230 milioni di anni.</p>`
    },
    {
      type: "curiosity",
      title: "Perché Plutone non è più un pianeta",
      html: `<p>Plutone fu scoperto nel 1930 da <b>Clyde Tombaugh</b>. Ma negli anni 2000 si scoprirono altri corpi di dimensioni simili nella fascia di Kuiper: <b>Eris</b>, nel 2005, è addirittura un po' più massiccia di Plutone. O si dichiaravano pianeti decine di oggetti, o si ridefiniva la categoria. Nel 2006 l'Unione Astronomica Internazionale scelse la seconda strada e creò la categoria dei <b>pianeti nani</b>. Nel 2015 la sonda <b>New Horizons</b> ci ha mandato foto spettacolari della superficie di Plutone, con un'enorme pianura di ghiaccio di azoto a forma di cuore.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa del Sistema Solare: tocca i nodi e scopri il perché",
      nodes: [
        { id: "nebulosa", label: "Nebulosa solare", x: 50, y: 6, color: "#a855f7", html: "La nube di gas e polveri da cui nasce tutto, 4,6 miliardi di anni fa.", why: "L'ipotesi nebulare fu proposta da <b>Kant</b> (1755) e <b>Laplace</b> (1796) per spiegare perché i pianeti orbitano tutti nello stesso verso e quasi sullo stesso piano; l'età di 4,57 miliardi di anni viene dalla datazione radiometrica dei meteoriti più antichi." },
        { id: "sole", label: "Sole", x: 20, y: 28, color: "#facc15", html: "La stella centrale.", why: "L'energia solare nasce dalla fusione di idrogeno in elio: <b>Bethe</b> (1938-39) ne spiegò le reazioni. Per questo il Sole ha vita finita: ha ancora circa 5 miliardi di anni di combustibile." },
        { id: "pianeti", label: "Pianeti", x: 50, y: 40, color: "#3b82f6", html: "Quattro terrestri e quattro giganti.", why: "La differenza di composizione dipende dalla temperatura del disco: dentro la linea del ghiaccio solo rocce e metalli, fuori anche ghiacci e gas." },
        { id: "keplero", label: "Leggi di Keplero", x: 80, y: 28, color: "#22c55e", html: "Orbite ellittiche, aree uguali, T² ∝ a³.", why: "Keplero cercò per anni di far quadrare i dati di Tycho Brahe con orbite circolari, ma c'era sempre uno scarto di 8 primi d'arco: fidandosi dei dati più della tradizione, scoprì le ellissi." },
        { id: "newton", label: "Gravitazione universale", x: 80, y: 56, color: "#ef4444", html: "F = G·m₁·m₂/r².", why: "Newton (1687) mostrò che la stessa forza che fa cadere una mela governa il moto della Luna e dei pianeti, e da essa derivò matematicamente le tre leggi di Keplero." },
        { id: "terra", label: "Forma della Terra", x: 20, y: 62, color: "#06b6d4", html: "Un geoide leggermente schiacciato ai poli.", why: "La rotazione crea una forza centrifuga massima all'equatore, e la roccia fluisce in un rigonfiamento. Nel 1735 le spedizioni francesi in Lapponia e Perù misurarono la lunghezza di un grado di meridiano e confermarono lo schiacciamento previsto da Newton." },
        { id: "eratostene", label: "Eratostene", x: 20, y: 86, color: "#f59e0b", html: "Prima misura della circonferenza terrestre.", why: "Sfruttò la geometria: gli angoli alterni interni di raggi solari paralleli, e la distanza tra due città, danno la frazione di circonferenza." },
        { id: "geo", label: "Geocentrismo ed eliocentrismo", x: 55, y: 80, color: "#14b8a6", html: "Terra o Sole al centro?", why: "Copernico (1543), Galileo (1610), Keplero (1609) e Newton (1687) costruirono, uno sull'altro, il modello moderno. La conferma osservativa della rivoluzione annua della Terra, la parallasse stellare, arrivò nel 1838 con Bessel." }
      ],
      edges: [
        ["nebulosa", "sole", "forma"],
        ["nebulosa", "pianeti", "forma"],
        ["pianeti", "keplero", "descritti da"],
        ["keplero", "newton", "spiegate da"],
        ["pianeti", "terra", "tra cui"],
        ["terra", "eratostene", "misurata da"],
        ["geo", "keplero", "porta a"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: la Terra",
      questions: [
        { type: "mc", q: "Chi misurò per primo la circonferenza terrestre con ombre e geometria?", options: ["Eratostene", "Tolomeo", "Keplero"], answer: 0, explain: "Eratostene di Cirene, bibliotecario ad Alessandria (III sec. a.C.)." },
        { type: "mc", q: "La forma della Terra è meglio descritta come…", options: ["una sfera perfetta", "un geoide, schiacciato ai poli", "un disco"], answer: 1, explain: "La rotazione fa rigonfiare l'equatore: il raggio equatoriale supera di 21 km quello polare." },
        { type: "tf", q: "Plutone è un pianeta nano.", answer: true, explain: "Dal 2006 per la definizione dell'IAU." }
      ]
    }
  ],
  glossary: [
    { t: "Sistema Solare", d: "Il Sole e tutti i corpi che orbitano intorno a esso." },
    { t: "Unità astronomica (UA)", d: "Distanza media Terra-Sole, circa 149,6 milioni di km." },
    { t: "Pianeta terrestre", d: "Pianeta roccioso e piccolo: Mercurio, Venere, Terra, Marte." },
    { t: "Pianeta gigante", d: "Pianeta di grandi dimensioni e bassa densità: Giove, Saturno, Urano, Nettuno." },
    { t: "Pianeta nano", d: "Corpo sferico che orbita intorno al Sole ma non ha ripulito la propria orbita (Plutone, Cerere)." },
    { t: "Ellisse", d: "Curva chiusa per cui la somma delle distanze dai due fuochi è costante." },
    { t: "Perielio / afelio", d: "Punti dell'orbita più vicino e più lontano dal Sole." },
    { t: "Terza legge di Keplero", d: "T² / a³ è la stessa per tutti i pianeti." },
    { t: "Geoide", d: "La forma reale della Terra, schiacciata ai poli." },
    { t: "Latitudine / longitudine", d: "Coordinate angolari che individuano un punto sulla Terra rispetto all'equatore e al meridiano di Greenwich." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è il corpo del Sistema Solare con più massa?", options: ["Giove", "Il Sole", "La Terra"], answer: 1, explain: "Il Sole ha il 99,86% della massa." },
      { type: "mc", q: "Quali sono i pianeti gassosi?", options: ["Giove e Saturno", "Urano e Nettuno", "Marte e Venere"], answer: 0, explain: "Giove e Saturno sono fatti soprattutto di idrogeno ed elio; Urano e Nettuno sono giganti ghiacciati." },
      { type: "tf", q: "Secondo Keplero le orbite dei pianeti sono ellissi con il Sole in un fuoco.", answer: true, explain: "È la prima legge di Keplero." },
      { type: "num", q: "Un pianeta ha semiasse maggiore a = 9 UA. Qual è il periodo in anni?", answer: 27, unit: "anni", explain: "T² = 9³ = 729 → T = 27 anni." },
      { type: "mc", q: "In gennaio la Terra è al perielio, quindi…", options: ["si muove più velocemente", "fa più caldo nell'emisfero nord", "è più lontana dal Sole"], answer: 0, explain: "Vicina al Sole va più veloce (seconda legge). Le stagioni non dipendono dalla distanza ma dall'inclinazione dell'asse." },
      { type: "num", q: "Se la luce impiega 500 secondi per raggiungere la Terra dal Sole, quanti km dista il Sole? (c = 300 000 km/s)", answer: 150000000, tol: 1000000, unit: "km", explain: "s = c · t = 300 000 × 500 = 150 milioni di km." },
      { type: "mc", q: "Quale prova è stata fornita da Aristotele per la sfericità della Terra?", options: ["L'ombra circolare della Terra nelle eclissi di Luna", "Le foto dallo spazio", "Le maree"], answer: 0, explain: "Solo un corpo sferico proietta sempre un'ombra circolare." },
      { type: "text", q: "Chi scrisse nel 1543 il De revolutionibus orbium coelestium?", answer: ["copernico", "niccolo copernico", "nicolo copernico", "niccolò copernico"], explain: "Niccolò Copernico, che propose il sistema eliocentrico." },
      { type: "order", q: "Ordina i pianeti per distanza crescente dal Sole.", items: ["Mercurio", "Terra", "Marte", "Giove", "Saturno"], explain: "Mercurio 0,39 UA, Terra 1, Marte 1,52, Giove 5,2, Saturno 9,6." },
      { type: "mc", q: "Come si è potuta studiare la struttura interna della Terra?", options: ["Con onde sismiche", "Scavando fino al nucleo", "Con i telescopi"], answer: 0, explain: "Il pozzo più profondo (Kola, circa 12 km) non raggiunge nemmeno il mantello: l'interno si conosce dalle onde sismiche." }
    ]
  }
});

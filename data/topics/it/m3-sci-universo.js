TOPIC('it', {
  id: "m3-sci-universo",
  title: "L'Universo",
  intro: "Il Sole è solo una delle centinaia di miliardi di stelle della nostra galassia, la <b>Via Lattea</b>, che a sua volta è una tra miliardi di galassie. Come nascono e muoiono le stelle? Quanto è grande l'Universo? E com'è cominciato tutto, <b>13,8 miliardi di anni fa</b>?",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Misurare distanze enormi",
      html: `<p>Nello spazio i chilometri sono un'unità troppo piccola. Gli astronomi usano:</p>
<ul>
<li>l'<b>Unità Astronomica (UA)</b>: la distanza media Terra–Sole, circa <b>150 milioni di km</b> (149,6). Si usa dentro il Sistema Solare: Giove è a circa 5,2 UA, Nettuno a circa 30 UA.</li>
<li>l'<b>anno luce (a.l.)</b>: la distanza che la luce percorre in un anno. La luce viaggia a circa <b>300.000 km al secondo</b>, quindi:<br>
300.000 km/s × 31.557.600 s ≈ <b>9.460 miliardi di km</b> (9,46 × 10<sup>12</sup> km).</li>
</ul>
<p>⚠️ L'anno luce <b>non</b> è una misura di tempo, ma di <b>distanza</b>!</p>
<p>Conseguenza sorprendente: <b>guardare lontano significa guardare nel passato</b>. La luce del Sole impiega circa 8 minuti e 20 secondi per arrivare a noi: vediamo il Sole com'era 8 minuti fa. La stella più vicina dopo il Sole, <b>Proxima Centauri</b>, è a <b>4,24 anni luce</b>: la vediamo com'era più di 4 anni fa.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: quanto ci mette la luce del Sole?",
      html: `<p>Distanza Terra–Sole ≈ 150.000.000 km. Velocità della luce ≈ 300.000 km/s.</p>
<p>tempo = distanza : velocità = 150.000.000 : 300.000 = <b>500 secondi</b> = 8 minuti e 20 secondi.</p>
<p>E con un'astronave? La sonda <b>Voyager 1</b>, lanciata nel 1977, è l'oggetto umano più lontano e viaggia a circa 17 km/s. Per arrivare a Proxima Centauri (circa 40.000 miliardi di km) le servirebbero:<br>
40.000.000.000.000 : 17 ≈ 2,35 × 10<sup>12</sup> secondi ≈ <b>75.000 anni</b>!</p>`
    },
    {
      type: "3d",
      title: "Il nostro quartiere: il Sistema Solare",
      scene: "solar",
      options: { labels: true },
      caption: "Il Sistema Solare: il Sole, 8 pianeti, i loro satelliti, asteroidi e comete. Le distanze reali sarebbero molto più grandi: in scala, i pianeti sarebbero invisibili."
    },
    {
      type: "text",
      title: "2. Che cos'è una stella",
      html: `<p>Una <b>stella</b> è un'enorme sfera di gas caldissimo (soprattutto <b>idrogeno</b> ed <b>elio</b>) che produce luce e calore da sola. Nel suo <b>nucleo</b> la temperatura e la pressione sono così alte (nel Sole circa <b>15 milioni di °C</b>) che i nuclei di idrogeno si fondono e formano elio: è la <b>fusione nucleare</b>.</p>
<p>Nella fusione una piccola parte della massa sparisce e diventa energia, secondo la famosa formula di Einstein <b>E = mc²</b>. Il Sole trasforma ogni secondo circa <b>600 milioni di tonnellate</b> di idrogeno in elio.</p>
<p>Le stelle hanno <b>colori</b> diversi a seconda della temperatura della superficie:</p>
<ul>
<li>🔵 <b>azzurre/bianche</b>: le più calde (oltre 10.000 °C), es. Rigel;</li>
<li>🟡 <b>gialle</b>: medie, come il Sole (circa 5.500 °C);</li>
<li>🔴 <b>rosse</b>: le più "fredde" (circa 3.000 °C), es. Betelgeuse.</li>
</ul>
<p>Proprio come il ferro di un fabbro: prima diventa rosso, poi giallo, poi bianco man mano che si scalda.</p>`
    },
    {
      type: "3d",
      title: "Dentro il Sole",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fbbf24", label: "Fotosfera (la superficie, ~5.500 °C)" },
          { r: 0.97, color: "#f97316", label: "Zona convettiva: il gas sale e scende" },
          { r: 0.7, color: "#ef4444", label: "Zona radiativa: l'energia esce lentissima" },
          { r: 0.25, color: "#fef9c3", label: "Nucleo: fusione a ~15 milioni di °C" }
        ]
      },
      caption: "Ruota il Sole: l'energia prodotta nel nucleo impiega decine di migliaia di anni per attraversare la zona radiativa e arrivare in superficie, poi solo 8 minuti per raggiungere la Terra."
    },
    {
      type: "3d",
      title: "Gli atomi che accendono le stelle",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Fe"] },
      caption: "L'idrogeno (1 protone) è il combustibile delle stelle: fondendosi diventa elio (2 protoni). Le stelle più grandi continuano a fondere e producono carbonio, ossigeno… fino al ferro."
    },
    {
      type: "text",
      title: "3. La vita di una stella",
      html: `<p>Le stelle nascono, vivono e muoiono. Il loro destino dipende soprattutto dalla <b>massa</b>.</p>
<ol>
<li><b>Nebulosa</b>: una nube di gas e polveri si contrae per la forza di gravità.</li>
<li><b>Protostella</b>: il centro si riscalda; quando arriva a circa 10 milioni di °C si accende la fusione e nasce una <b>stella</b>.</li>
<li><b>Fase stabile</b> (sequenza principale): la stella brucia idrogeno per milioni o miliardi di anni. Il Sole è a metà della sua vita: ha circa <b>4,6 miliardi di anni</b> e ne vivrà ancora circa 5.</li>
<li><b>Gigante rossa</b>: finito l'idrogeno nel nucleo, la stella si gonfia moltissimo.</li>
<li><b>La fine</b>:
<ul>
<li>stelle come il Sole espellono gli strati esterni (una <b>nebulosa planetaria</b>) e lasciano una piccola stella densissima, la <b>nana bianca</b>, grande come la Terra;</li>
<li>stelle con più di circa 8 masse solari esplodono in una <b>supernova</b>, che per qualche settimana può brillare più di un'intera galassia. Rimane una <b>stella di neutroni</b> oppure, se la massa è enorme, un <b>buco nero</b>, così denso che nemmeno la luce riesce a uscire.</li>
</ul></li>
</ol>
<p>Paradosso: più una stella è grande, <b>meno vive</b>, perché consuma il combustibile molto più in fretta. Le stelle giganti durano pochi milioni di anni; le piccole nane rosse migliaia di miliardi.</p>`
    },
    {
      type: "svg",
      title: "Il ciclo di vita delle stelle",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#0f172a"/>
<ellipse cx="60" cy="160" rx="48" ry="34" fill="#7c3aed" opacity="0.7"/>
<ellipse cx="55" cy="150" rx="30" ry="20" fill="#c084fc" opacity="0.6"/>
<text x="60" y="220" font-size="15" fill="#e2e8f0" text-anchor="middle">Nebulosa</text>
<line x1="112" y1="160" x2="150" y2="110" stroke="#94a3b8" stroke-width="3"/>
<line x1="112" y1="160" x2="150" y2="215" stroke="#94a3b8" stroke-width="3"/>
<circle cx="175" cy="95" r="16" fill="#facc15"/>
<text x="175" y="70" font-size="14" fill="#fde68a" text-anchor="middle">Stella come il Sole</text>
<circle cx="175" cy="230" r="24" fill="#60a5fa"/>
<text x="175" y="275" font-size="14" fill="#bfdbfe" text-anchor="middle">Stella massiccia</text>
<line x1="195" y1="95" x2="265" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="202" y1="230" x2="265" y2="230" stroke="#94a3b8" stroke-width="3"/>
<circle cx="310" cy="95" r="36" fill="#ef4444"/>
<text x="310" y="150" font-size="14" fill="#fecaca" text-anchor="middle">Gigante rossa</text>
<circle cx="310" cy="230" r="44" fill="#dc2626"/>
<text x="310" y="292" font-size="14" fill="#fecaca" text-anchor="middle">Supergigante rossa</text>
<line x1="348" y1="95" x2="410" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="356" y1="230" x2="410" y2="230" stroke="#94a3b8" stroke-width="3"/>
<circle cx="445" cy="95" r="28" fill="none" stroke="#22d3ee" stroke-width="6" opacity="0.8"/>
<text x="445" y="145" font-size="13" fill="#a5f3fc" text-anchor="middle">Nebulosa planetaria</text>
<polygon points="445,195 455,220 482,222 461,238 468,264 445,249 422,264 429,238 408,222 435,220" fill="#fde047"/>
<text x="445" y="292" font-size="14" fill="#fef08a" text-anchor="middle">Supernova!</text>
<line x1="475" y1="95" x2="540" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="485" y1="225" x2="540" y2="200" stroke="#94a3b8" stroke-width="3"/>
<line x1="485" y1="235" x2="540" y2="265" stroke="#94a3b8" stroke-width="3"/>
<circle cx="565" cy="95" r="8" fill="#f8fafc"/>
<text x="565" y="125" font-size="14" fill="#f8fafc" text-anchor="middle">Nana bianca</text>
<circle cx="565" cy="195" r="6" fill="#a5b4fc"/>
<text x="565" y="222" font-size="13" fill="#c7d2fe" text-anchor="middle">Stella di neutroni</text>
<circle cx="565" cy="270" r="14" fill="#000000" stroke="#f97316" stroke-width="3"/>
<text x="565" y="305" font-size="14" fill="#fdba74" text-anchor="middle">Buco nero</text>
</svg>`,
      caption: "Il ramo in alto è il futuro del Sole; il ramo in basso quello delle stelle molto più grandi."
    },
    {
      type: "quiz",
      title: "Mini-quiz: luce e stelle",
      questions: [
        { type: "tf", q: "L'anno luce è un'unità di misura del tempo.", answer: false, explain: "È una distanza: quella che la luce percorre in un anno, circa 9.460 miliardi di km." },
        { type: "mc", q: "Che cosa produce l'energia di una stella?", options: ["La combustione del carbone", "La fusione nucleare dell'idrogeno", "L'elettricità dei fulmini"], answer: 1, explain: "Nel nucleo l'idrogeno si fonde in elio liberando energia." },
        { type: "mc", q: "Quale stella è più calda in superficie?", options: ["Una stella rossa", "Una stella gialla", "Una stella azzurra"], answer: 2, explain: "Le stelle azzurre sono le più calde, le rosse le meno calde." },
        { type: "mc", q: "Come finirà il Sole?", options: ["Come buco nero", "Come nana bianca", "Esploderà in una supernova"], answer: 1, explain: "Il Sole non ha abbastanza massa per esplodere: diventerà gigante rossa e poi nana bianca." }
      ]
    },
    {
      type: "text",
      title: "4. Le galassie e la Via Lattea",
      html: `<p>Una <b>galassia</b> è un enorme insieme di stelle, gas, polveri e materia oscura tenuto insieme dalla gravità. Secondo la classificazione di <b>Edwin Hubble</b> (1926) ce ne sono di tre tipi principali:</p>
<ul>
<li><b>a spirale</b> (con bracci che girano attorno a un centro, come la nostra);</li>
<li><b>ellittiche</b> (a forma di pallone schiacciato, spesso con stelle vecchie);</li>
<li><b>irregolari</b> (senza forma precisa, come le Nubi di Magellano).</li>
</ul>
<p>La nostra galassia è la <b>Via Lattea</b>: una spirale con una barra centrale, larga circa <b>100.000 anni luce</b>, con <b>100–400 miliardi di stelle</b>. Il Sole si trova in un braccio periferico, a circa 26.000 anni luce dal centro, e impiega circa <b>230 milioni di anni</b> a fare un giro completo. Al centro c'è un buco nero gigante, <b>Sagittarius A*</b>, con una massa di circa 4 milioni di Soli: la sua prima "foto" è stata pubblicata nel 2022.</p>
<p>Nelle notti buie, lontano dalle luci, la Via Lattea si vede come una striscia chiara nel cielo: la stiamo guardando "di taglio", dall'interno. Fu <b>Galileo</b>, nel 1610, a scoprire con il cannocchiale che quella striscia è fatta di innumerevoli stelle.</p>
<p>La grande galassia più vicina è <b>Andromeda</b>, a circa <b>2,5 milioni di anni luce</b>: è l'oggetto più lontano visibile a occhio nudo. Tra circa 4–5 miliardi di anni si scontrerà con la Via Lattea.</p>`
    },
    {
      type: "svg",
      title: "La Via Lattea vista dall'alto (e dove siamo noi)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#020617"/>
<ellipse cx="300" cy="160" rx="60" ry="30" fill="#fde68a" opacity="0.9"/>
<path d="M300 160 C 380 100, 470 140, 470 200 C 470 260, 380 290, 300 280" fill="none" stroke="#93c5fd" stroke-width="22" opacity="0.55"/>
<path d="M300 160 C 220 220, 130 180, 130 120 C 130 60, 220 30, 300 40" fill="none" stroke="#93c5fd" stroke-width="22" opacity="0.55"/>
<path d="M340 150 C 420 60, 540 90, 545 170" fill="none" stroke="#c4b5fd" stroke-width="14" opacity="0.45"/>
<path d="M260 170 C 180 260, 60 230, 55 150" fill="none" stroke="#c4b5fd" stroke-width="14" opacity="0.45"/>
<circle cx="440" cy="245" r="7" fill="#facc15" stroke="#ffffff" stroke-width="2"/>
<line x1="447" y1="250" x2="500" y2="285" stroke="#facc15" stroke-width="2"/>
<text x="505" y="295" font-size="16" fill="#facc15">Il Sole (noi!)</text>
<text x="300" y="166" font-size="14" fill="#0f172a" text-anchor="middle" font-weight="bold">Centro</text>
<line x1="50" y1="25" x2="550" y2="25" stroke="#e2e8f0" stroke-width="2"/>
<text x="300" y="18" font-size="15" fill="#e2e8f0" text-anchor="middle">circa 100.000 anni luce</text>
<line x1="300" y1="160" x2="440" y2="245" stroke="#f472b6" stroke-width="2" stroke-dasharray="6"/>
<text x="360" y="225" font-size="14" fill="#f9a8d4">26.000 a.l.</text>
</svg>`,
      caption: "Disegno semplificato: la Via Lattea è una spirale barrata; il Sistema Solare è in periferia."
    },
    {
      type: "text",
      title: "5. Il Big Bang: come è cominciato tutto",
      html: `<p>Nel 1929 l'astronomo statunitense <b>Edwin Hubble</b> scoprì che quasi tutte le galassie si <b>allontanano</b> da noi, e tanto più velocemente quanto più sono lontane. Il belga <b>Georges Lemaître</b> (un prete e fisico) lo aveva già previsto nel 1927: l'Universo si sta <b>espandendo</b>.</p>
<p>Se oggi tutto si allontana, andando indietro nel tempo tutto doveva essere più vicino, più denso e più caldo. Circa <b>13,8 miliardi di anni fa</b> l'Universo era piccolissimo e caldissimo: da lì comincia la sua espansione, chiamata <b>Big Bang</b>.</p>
<ul>
<li>Nei primi minuti si formarono i nuclei di <b>idrogeno</b> ed <b>elio</b>.</li>
<li>Dopo circa <b>380.000 anni</b> l'Universo si raffreddò abbastanza da formare gli atomi e diventò trasparente alla luce.</li>
<li>Dopo qualche centinaio di milioni di anni si accesero le <b>prime stelle</b> e le prime galassie.</li>
<li>Circa <b>4,6 miliardi di anni fa</b> nacquero il Sole e la Terra.</li>
</ul>
<p><b>Le prove</b> del Big Bang: (1) l'espansione osservata da Hubble; (2) la <b>radiazione cosmica di fondo</b>, il "debole calore" rimasto dal Big Bang, scoperta per caso nel 1965 da Arno Penzias e Robert Wilson (premio Nobel 1978); (3) la quantità di idrogeno ed elio nell'Universo, proprio quella prevista dalla teoria.</p>
<p>⚠️ Il Big Bang <b>non</b> fu un'esplosione in un punto dello spazio: è lo spazio stesso che si espande, ovunque.</p>`
    },
    {
      type: "widget",
      title: "La storia dell'Universo (scala logaritmica)",
      widget: "timeline",
      options: {
        scale: "log",
        events: [
          { year: -13800000000, label: "Big Bang", icon: "💥" },
          { year: -13500000000, label: "Prime stelle", icon: "✨" },
          { year: -4600000000, label: "Nasce il Sole", icon: "☀️" },
          { year: -3800000000, label: "Prima vita", icon: "🦠" },
          { year: -66000000, label: "Fine dinosauri", icon: "🦖" },
          { year: -300000, label: "Homo sapiens", icon: "🧑" },
          { year: 1610, label: "Galileo: telescopio", icon: "🔭" },
          { year: 1969, label: "Uomo sulla Luna", icon: "🌕" }
        ]
      },
      caption: "Su una scala normale tutta la storia umana sarebbe un puntino invisibile all'estremità destra: per questo si usa una scala logaritmica."
    },
    {
      type: "example",
      title: "Esempio pratico: osservare il cielo",
      html: `<p>In una notte serena, lontano dalle luci della città, puoi osservare:</p>
<ul>
<li>circa <b>2.000–3.000 stelle</b> a occhio nudo (in città forse 50!);</li>
<li>la <b>Stella Polare</b>, che indica il Nord: la trovi prolungando di 5 volte il lato posteriore del "carro" dell'Orsa Maggiore;</li>
<li><b>Sirio</b>, la stella più brillante del cielo notturno, a 8,6 anni luce;</li>
<li>la <b>galassia di Andromeda</b>, una macchiolina chiara in autunno: la sua luce è partita 2,5 milioni di anni fa, quando sulla Terra vivevano i primi esseri umani del genere <i>Homo</i>.</li>
</ul>
<p>Con un'app di astronomia o una carta del cielo puoi riconoscere costellazioni come Orione, Cassiopea e lo Scorpione.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Siamo fatti di polvere di stelle",
      html: `<p>Il carbonio del tuo DNA, l'ossigeno che respiri, il calcio delle tue ossa e il ferro del tuo sangue sono stati prodotti dentro stelle antiche, poi disperse nello spazio dalle loro esplosioni. Solo idrogeno ed elio (e un po' di litio) vengono direttamente dal Big Bang. Come disse l'astronomo Carl Sagan: <i>"Siamo fatti della stessa sostanza delle stelle"</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'Universo che non vediamo",
      html: `<p>Tutto ciò che vediamo – stelle, pianeti, gas, noi – è solo circa il <b>5%</b> dell'Universo. Circa il <b>27%</b> è <b>materia oscura</b>, che non emette luce ma si fa sentire con la sua gravità; il restante <b>68%</b> circa è l'<b>energia oscura</b>, che fa accelerare l'espansione. Nessuno sa ancora che cosa siano: magari lo scoprirai tu!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Un cucchiaino pesantissimo",
      html: `<p>Una <b>stella di neutroni</b> ha più massa del Sole compressa in una sfera di circa 20 km di diametro: un cucchiaino della sua materia peserebbe sulla Terra centinaia di milioni di tonnellate, più di una montagna. E il telescopio spaziale <b>James Webb</b>, lanciato il 25 dicembre 2021, osserva galassie la cui luce è partita più di 13 miliardi di anni fa.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per immaginare l'Universo",
      intro: "Numeri come \"miliardi di anni luce\" non dicono niente al nostro cervello. Ecco qualche trucco per renderli concreti.",
      tabs: [
        {
          label: "⚽ Il Sistema Solare in scala",
          html: `<p>Riduciamo tutto di circa <b>4,6 miliardi di volte</b>: il Sole diventa un pallone di <b>30 cm</b>.</p>
<table>
<tr><th>Oggetto</th><th>In scala</th><th>Distanza dal pallone</th></tr>
<tr><td>☀️ Sole</td><td>pallone da 30 cm</td><td>—</td></tr>
<tr><td>🌍 Terra</td><td>granello di 2,7 mm</td><td>circa 32 m</td></tr>
<tr><td>🪐 Giove</td><td>biglia di 3 cm</td><td>circa 170 m</td></tr>
<tr><td>🔵 Nettuno</td><td>pallina di 1 cm</td><td>quasi 1 km</td></tr>
<tr><td>⭐ Proxima Centauri</td><td>una ciliegia</td><td>circa <b>8.600 km</b>: come dall'Italia alla Cina!</td></tr>
</table>
<p>L'Universo è soprattutto… <b>spazio vuoto</b>.</p>`
        },
        {
          label: "📅 Il calendario cosmico",
          html: `<p>L'astronomo <b>Carl Sagan</b> propose di comprimere tutta la storia dell'Universo in <b>un solo anno</b>. Ogni giorno vale circa 38 milioni di anni; ogni secondo circa 440 anni.</p>
<ul>
<li>1 gennaio, mezzanotte: <b>Big Bang</b>;</li>
<li>inizio settembre: nascono il <b>Sole</b> e la <b>Terra</b>;</li>
<li>fine settembre: compare la <b>vita</b> (batteri);</li>
<li>30 dicembre, mattina: si estinguono i <b>dinosauri</b>;</li>
<li>31 dicembre, ore 23:48: compare <b>Homo sapiens</b>;</li>
<li>ultimi <b>11 secondi</b> prima di mezzanotte: tutta la storia scritta, dagli Egizi a oggi.</li>
</ul>`
        },
        {
          label: "🎈 Il palloncino che si gonfia",
          html: `<p>Disegna dei puntini su un palloncino sgonfio e poi gonfialo: tutti i puntini si allontanano tra loro, e quelli più distanti si allontanano più in fretta. Nessun puntino è "il centro". Le galassie sono come i puntini e lo spazio è la gomma del palloncino: è lo spazio a dilatarsi.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<circle cx="120" cy="130" r="55" fill="#f87171"/>
<circle cx="105" cy="115" r="5" fill="#1e293b"/><circle cx="135" cy="120" r="5" fill="#1e293b"/><circle cx="120" cy="148" r="5" fill="#1e293b"/>
<line x1="120" y1="185" x2="120" y2="230" stroke="#64748b" stroke-width="2"/>
<text x="120" y="250" font-size="15" text-anchor="middle" fill="#0f172a">ieri</text>
<text x="255" y="135" font-size="40" text-anchor="middle" fill="#64748b">→</text>
<circle cx="430" cy="125" r="110" fill="#f87171"/>
<circle cx="385" cy="85" r="7" fill="#1e293b"/><circle cx="470" cy="95" r="7" fill="#1e293b"/><circle cx="430" cy="170" r="7" fill="#1e293b"/>
<line x1="385" y1="85" x2="470" y2="95" stroke="#1e293b" stroke-dasharray="5"/>
<line x1="385" y1="85" x2="430" y2="170" stroke="#1e293b" stroke-dasharray="5"/>
<text x="430" y="252" font-size="15" text-anchor="middle" fill="#0f172a">oggi: tutte le distanze sono raddoppiate</text>
</svg>`
        },
        {
          label: "🪐 Esplora in 3D",
          html: `<p>Parti dal "quartiere" che conosci, il Sistema Solare: ruotalo e guarda le orbite. Poi ricorda che <b>tutto</b> questo, ingrandito al massimo, è un puntino invisibile nella Via Lattea, che a sua volta è un puntino tra miliardi di galassie.</p>`,
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dell'Universo: tocca i nodi e scopri il perché",
      nodes: [
        { id: "bigbang", label: "Big Bang", x: 50, y: 6, color: "#f97316", html: "L'inizio dell'espansione dell'Universo, circa 13,8 miliardi di anni fa.", why: "Proposto da <b>Lemaître</b> (1927) a partire dalle equazioni della relatività generale di Einstein; confermato dall'espansione osservata da <b>Hubble</b> (1929) e dalla radiazione di fondo scoperta da <b>Penzias e Wilson</b> (1965). L'età si ricava misurando la velocità di espansione e la radiazione di fondo (satellite Planck)." },
        { id: "elementi", label: "Idrogeno ed elio", x: 20, y: 24, color: "#38bdf8", html: "I primi elementi, formati nei primi minuti.", why: "L'Universo era troppo caldo e si raffreddava troppo in fretta per costruire nuclei più pesanti: per questo ancora oggi circa il 74% della materia normale è idrogeno e circa il 24% elio." },
        { id: "gravita", label: "Gravità", x: 80, y: 24, color: "#a855f7", html: "La forza che attira le masse tra loro.", why: "Descritta da <b>Newton</b> (1687) e poi da <b>Einstein</b> con la relatività generale (1915) come curvatura dello spazio-tempo. È lei che fa condensare le nubi di gas in stelle e tiene unite le galassie." },
        { id: "nebulose", label: "Nebulose", x: 50, y: 34, color: "#c084fc", html: "Nubi di gas e polveri: le \"culle\" delle stelle.", why: "Dove il gas è un po' più denso, la gravità lo attira e lo comprime sempre di più, finché si riscalda: così nascono le stelle, spesso a gruppi." },
        { id: "stelle", label: "Stelle", x: 30, y: 55, color: "#facc15", html: "Sfere di gas che producono energia con la fusione nucleare.", why: "Nel 1920 Arthur Eddington ipotizzò che le stelle brillassero fondendo idrogeno; nel 1938–39 <b>Hans Bethe</b> spiegò le reazioni precise. L'energia nasce dalla massa che \"scompare\", secondo E = mc²." },
        { id: "nuovielementi", label: "Nuovi elementi", x: 12, y: 78, color: "#22c55e", html: "Carbonio, ossigeno, ferro, oro… prodotti dalle stelle.", why: "Nel 1957 un famoso articolo (Burbidge, Burbidge, Fowler e Hoyle) dimostrò come le stelle \"cucinano\" gli elementi; i più pesanti del ferro nascono nelle supernove e negli scontri tra stelle di neutroni." },
        { id: "fine", label: "Nane bianche, supernove, buchi neri", x: 50, y: 78, color: "#64748b", html: "Il destino finale delle stelle dipende dalla loro massa.", why: "L'indiano <b>Subrahmanyan Chandrasekhar</b> calcolò nel 1930 che oltre una certa massa una stella morente non può reggersi: collassa. I buchi neri erano una previsione della relatività; la prima immagine di uno è del 2019." },
        { id: "galassie", label: "Galassie", x: 80, y: 55, color: "#3b82f6", html: "Enormi sistemi di stelle; la nostra è la Via Lattea.", why: "Fino al 1924 molti pensavano che la Via Lattea fosse tutto l'Universo. <b>Hubble</b> misurò la distanza di Andromeda e dimostrò che è una galassia separata, molto più lontana." },
        { id: "noi", label: "Sistema Solare e vita", x: 85, y: 92, color: "#16a34a", html: "Il Sole, la Terra e noi, nati 4,6 miliardi di anni fa.", why: "Il Sole si è formato da una nube arricchita dai resti di stelle precedenti: senza le loro esplosioni non ci sarebbero carbonio, ossigeno e ferro, cioè i mattoni della vita." }
      ],
      edges: [
        ["bigbang", "elementi", "produce"],
        ["bigbang", "gravita", "poi agisce la"],
        ["elementi", "nebulose", "formano le"],
        ["gravita", "nebulose", "comprime le"],
        ["nebulose", "stelle", "fanno nascere"],
        ["stelle", "nuovielementi", "fabbricano"],
        ["stelle", "fine", "muoiono come"],
        ["fine", "nuovielementi", "spargono"],
        ["gravita", "galassie", "tiene unite le"],
        ["stelle", "galassie", "formano le"],
        ["nuovielementi", "noi", "costruiscono"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: galassie e Big Bang",
      questions: [
        { type: "mc", q: "Come si chiama la nostra galassia?", options: ["Andromeda", "Via Lattea", "Nube di Magellano"], answer: 1, explain: "Viviamo nella Via Lattea, una galassia a spirale barrata." },
        { type: "num", q: "Circa quanti miliardi di anni fa è avvenuto il Big Bang?", answer: 13.8, tol: 0.2, explain: "Circa 13,8 miliardi di anni fa." },
        { type: "mc", q: "Chi osservò nel 1929 che le galassie si allontanano?", options: ["Galileo Galilei", "Edwin Hubble", "Isaac Newton"], answer: 1, explain: "Edwin Hubble, all'osservatorio di Monte Wilson." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>1 anno luce ≈ 9.460 miliardi di km: è una <b>distanza</b>. Guardare lontano = guardare nel passato.</li>
<li>Le stelle brillano grazie alla <b>fusione nucleare</b> dell'idrogeno in elio.</li>
<li>Ciclo: nebulosa → stella → gigante rossa → <b>nana bianca</b> (stelle piccole) oppure <b>supernova</b> → stella di neutroni o <b>buco nero</b> (stelle grandi).</li>
<li>La <b>Via Lattea</b> è una galassia a spirale di 100.000 anni luce; Andromeda è a 2,5 milioni di anni luce.</li>
<li>L'Universo si espande dal <b>Big Bang</b>, 13,8 miliardi di anni fa.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Anno luce", d: "Distanza percorsa dalla luce in un anno: circa 9.460 miliardi di km." },
    { t: "Unità astronomica", d: "Distanza media Terra–Sole, circa 150 milioni di km." },
    { t: "Fusione nucleare", d: "Unione di nuclei leggeri in nuclei più pesanti, con liberazione di energia." },
    { t: "Nebulosa", d: "Nube di gas e polveri nello spazio, dove nascono le stelle." },
    { t: "Nana bianca", d: "Resto piccolo e densissimo di una stella come il Sole." },
    { t: "Supernova", d: "Esplosione di una stella molto massiccia alla fine della sua vita." },
    { t: "Buco nero", d: "Regione dello spazio con gravità così forte che neppure la luce può uscire." },
    { t: "Galassia", d: "Enorme sistema di stelle, gas e polveri tenuto insieme dalla gravità." },
    { t: "Big Bang", d: "L'inizio dell'espansione dell'Universo, 13,8 miliardi di anni fa." },
    { t: "Radiazione cosmica di fondo", d: "Debole radiazione rimasta dall'Universo primordiale, scoperta nel 1965." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "L'anno luce misura…", options: ["un tempo", "una distanza", "una velocità", "una temperatura"], answer: 1, explain: "È la distanza percorsa dalla luce in un anno." },
      { type: "num", q: "La luce viaggia a 300.000 km/s. Quanti secondi impiega a percorrere 150.000.000 km?", answer: 500, unit: "s", explain: "150.000.000 : 300.000 = 500 s (8 min 20 s)." },
      { type: "text", q: "Come si chiama il gas principale \"bruciato\" (fuso) nelle stelle?", answer: ["idrogeno", "l'idrogeno", "h"], explain: "L'idrogeno, che fondendosi diventa elio." },
      { type: "tf", q: "Le stelle più massicce vivono più a lungo di quelle piccole.", answer: false, explain: "Consumano il combustibile molto più in fretta: vivono di meno." },
      { type: "order", q: "Metti in ordine la vita di una stella come il Sole.", items: ["Nebulosa", "Protostella", "Stella stabile (come oggi)", "Gigante rossa", "Nana bianca"], explain: "Dalla nube di gas alla nana bianca finale." },
      { type: "mc", q: "Che cosa può restare dopo l'esplosione di una supernova?", options: ["Una nana bianca", "Una stella di neutroni o un buco nero", "Un pianeta gassoso"], answer: 1, explain: "Le stelle massicce lasciano una stella di neutroni o un buco nero." },
      { type: "mc", q: "Quanto è larga circa la Via Lattea?", options: ["100 anni luce", "100.000 anni luce", "100 miliardi di anni luce"], answer: 1, explain: "Circa 100.000 anni luce." },
      { type: "text", q: "Come si chiama la grande galassia a spirale più vicina, visibile a occhio nudo?", answer: ["andromeda", "galassia di andromeda", "la galassia di andromeda", "m31"], explain: "Andromeda (M31), a circa 2,5 milioni di anni luce." },
      { type: "mc", q: "Quale di queste NON è una prova del Big Bang?", options: ["L'allontanamento delle galassie", "La radiazione cosmica di fondo", "Le fasi della Luna", "L'abbondanza di idrogeno ed elio"], answer: 2, explain: "Le fasi lunari dipendono dalla posizione di Luna, Terra e Sole." },
      { type: "tf", q: "Il ferro del nostro sangue è stato prodotto all'interno di stelle.", answer: true, explain: "Tutti gli elementi più pesanti dell'elio (tranne un po' di litio) vengono dalle stelle." },
      { type: "mc", q: "Di che colore sono le stelle più fredde?", options: ["Azzurre", "Gialle", "Rosse"], answer: 2, explain: "Circa 3.000 °C in superficie: appaiono rosse." },
      { type: "num", q: "Proxima Centauri è a 4,24 anni luce. Quanti anni fa è partita la luce che vediamo oggi?", answer: 4.24, tol: 0.01, unit: "anni", explain: "La luce impiega 1 anno per ogni anno luce: 4,24 anni." }
    ]
  }
});

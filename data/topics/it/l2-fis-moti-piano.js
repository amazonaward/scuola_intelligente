TOPIC('it', {
  id: "l2-fis-moti-piano",
  title: "I moti nel piano",
  intro: "Nel primo anno hai studiato forze e grandezze; ora mettiamo tutto in movimento. Un pallone calciato, una ruota che gira, un'altalena che oscilla: sono tutti moti che avvengono <b>in un piano</b>, non su una semplice retta. Vedremo tre protagonisti: il <b>moto parabolico</b>, il <b>moto circolare uniforme</b> e il <b>moto armonico</b>. Il filo conduttore è un'idea di Galileo tanto semplice quanto potente: un moto complicato si capisce <b>scomponendolo in moti semplici</b>.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Comporre i moti: l'idea di Galileo",
      html: `<p>Nel <i>Dialogo sopra i due massimi sistemi del mondo</i> (1632) Galileo sostiene che un corpo può partecipare a più moti contemporaneamente e che questi moti <b>non si disturbano a vicenda</b>. È il <b>principio di indipendenza dei moti</b> (o di sovrapposizione).</p>
<p>L'esempio classico: lasci cadere una pallina da una nave che procede a velocità costante. La pallina cade lungo la verticale rispetto alla nave, ma rispetto alla riva descrive una curva, perché conserva anche la velocità orizzontale della nave.</p>
<p>In pratica, per studiare un moto nel piano si scelgono due assi, <b>x</b> (orizzontale) e <b>y</b> (verticale), e si studia ciascun moto separatamente:</p>
<ul>
<li>lungo x il moto è <b>rettilineo uniforme</b> (se non ci sono forze orizzontali);</li>
<li>lungo y il moto è <b>uniformemente accelerato</b> con accelerazione di gravità g ≈ 9,8 m/s² verso il basso (trascurando la resistenza dell'aria).</li>
</ul>
<p>Alla fine si ricompongono i due risultati con la somma dei vettori che conosci dal primo anno.</p>`
    },
    {
      type: "svg",
      title: "La traiettoria di un proiettile",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="pA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="pB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
</defs>
<g font-family="sans-serif">
<line x1="30" y1="250" x2="610" y2="250" stroke="#475569" stroke-width="2"/>
<path d="M60 250 Q 260 -10 460 250" fill="none" stroke="#16a34a" stroke-width="4"/>
<line x1="60" y1="250" x2="120" y2="190" stroke="#dc2626" stroke-width="4" marker-end="url(#pA)"/>
<text x="124" y="186" font-size="15" fill="#dc2626" font-weight="bold">v0</text>
<line x1="260" y1="120" x2="330" y2="120" stroke="#2563eb" stroke-width="4" marker-end="url(#pB)"/>
<text x="334" y="116" font-size="15" fill="#2563eb" font-weight="bold">vx (costante)</text>
<line x1="260" y1="120" x2="260" y2="250" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<text x="268" y="170" font-size="15" fill="#0f172a">h max</text>
<text x="250" y="108" font-size="15" fill="#0f172a" text-anchor="end">vertice: vy = 0</text>
<text x="60" y="275" font-size="15" fill="#0f172a">partenza</text>
<text x="400" y="275" font-size="15" fill="#0f172a">arrivo (gittata)</text>
<path d="M90 250 A 30 30 0 0 0 85 232" fill="none" stroke="#475569" stroke-width="2"/>
<text x="96" y="238" font-size="15" fill="#0f172a">θ</text>
</g>
</svg>`,
      caption: "Orizzontalmente la velocità non cambia; verticalmente il corpo rallenta in salita, si ferma al vertice e accelera in discesa."
    },
    {
      type: "text",
      title: "Il moto parabolico: formule",
      html: `<p>Un corpo lanciato con velocità iniziale <b>v₀</b> che forma un angolo <b>θ</b> con l'orizzonte ha componenti iniziali v₀ₓ = v₀·cos θ e v₀ᵧ = v₀·sen θ. Le equazioni del moto sono:</p>
<table>
<tr><th>Asse x (uniforme)</th><th>Asse y (accelerato)</th></tr>
<tr><td>x = v₀ₓ · t</td><td>y = v₀ᵧ · t − ½ g t²</td></tr>
<tr><td>vₓ = v₀ₓ = costante</td><td>vᵧ = v₀ᵧ − g t</td></tr>
</table>
<p>Eliminando il tempo si ottiene y in funzione di x: un'equazione di secondo grado, cioè una <b>parabola</b> (da qui il nome del moto). Dalle formule ricaviamo:</p>
<ul>
<li><b>tempo di volo</b> (ritorno alla quota di partenza): t = 2 v₀ᵧ / g;</li>
<li><b>altezza massima</b> (vᵧ = 0): h = v₀ᵧ² / (2g);</li>
<li><b>gittata</b>: G = v₀² · sen(2θ) / g.</li>
</ul>
<p>A parità di v₀ la gittata è massima per <b>θ = 45°</b> (perché sen 2θ = 1), e angoli complementari (30° e 60°, per esempio) danno la stessa gittata. Caso particolare: un lancio <b>orizzontale</b> da un'altezza h (θ = 0) ha tempo di caduta t = √(2h/g), identico a quello di una caduta libera.</p>`
    },
    {
      type: "example",
      title: "Il calcio di punizione e il sasso dalla scogliera",
      html: `<p><b>Il pallone.</b> Un calciatore lancia il pallone con v₀ = 20 m/s e θ = 30°. Componenti: v₀ₓ = 20·cos 30° ≈ 17,3 m/s e v₀ᵧ = 20·sen 30° = 10 m/s. Con g = 9,8 m/s²:</p>
<ul>
<li>tempo di volo: 2·10/9,8 ≈ 2,04 s;</li>
<li>altezza massima: 10²/(2·9,8) ≈ 5,1 m;</li>
<li>gittata: 17,3 · 2,04 ≈ 35 m (stesso risultato di 20²·sen 60°/9,8 ≈ 35,3 m).</li>
</ul>
<p><b>Il sasso.</b> Da una scogliera alta 45 m lanci un sasso orizzontalmente a 10 m/s (g = 10 m/s² per semplicità). Tempo di caduta: √(2·45/10) = 3 s. In 3 s il sasso avanza di 10 · 3 = <b>30 m</b> in orizzontale. Se lo lasciassi semplicemente cadere, toccherebbe l'acqua dopo lo stesso identico tempo: la velocità orizzontale non influisce sulla caduta.</p>`
    },
    {
      type: "curiosity",
      title: "La scimmia e il cacciatore",
      html: `<p>Un classico esperimento mentale: un cacciatore punta un fucile dritto verso una scimmia appesa a un ramo. Nell'istante dello sparo la scimmia si lascia cadere. Si salva? <b>No</b>: proiettile e scimmia cadono della stessa quantità nello stesso tempo, quindi il proiettile la colpisce comunque (se arriva prima di toccare terra). È la prova che la caduta verticale non dipende dal moto orizzontale.</p>
<p>Nella realtà l'aria frena i proiettili: per questo le traiettorie vere (soprattutto di palline leggere e veloci) sono più corte e meno simmetriche della parabola ideale. Per i grandi cannoni l'artiglieria deve tenere conto anche della rotazione terrestre.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: moto parabolico",
      questions: [
        { type: "mc", q: "In un moto parabolico ideale, quale componente della velocità resta costante?", options: ["Quella verticale", "Quella orizzontale", "Entrambe", "Nessuna"], answer: 1, explain: "Orizzontalmente non agiscono forze: il moto è rettilineo uniforme. Verticalmente agisce la gravità." },
        { type: "tf", q: "Nel punto più alto della traiettoria la velocità del proiettile è nulla.", answer: false, explain: "Si annulla solo la componente verticale; resta la componente orizzontale vₓ ≠ 0." },
        { type: "num", q: "Un oggetto è lanciato verso l'alto con v₀ᵧ = 14,7 m/s (g = 9,8 m/s²). Dopo quanti secondi raggiunge il vertice?", answer: 1.5, tol: 0.05, unit: "s", explain: "Al vertice vᵧ = 0: t = v₀ᵧ/g = 14,7/9,8 = 1,5 s." }
      ]
    },
    {
      type: "text",
      title: "Il moto circolare uniforme",
      html: `<p>Un punto si muove di <b>moto circolare uniforme</b> se percorre una circonferenza di raggio r con <b>velocità scalare costante</b>. Attenzione: il modulo della velocità non cambia, ma la <b>direzione sì</b>, perché la velocità è sempre <b>tangente</b> alla circonferenza. Poiché la velocità è un vettore che cambia, c'è un'accelerazione!</p>
<p>Grandezze caratteristiche:</p>
<ul>
<li><b>Periodo T</b>: tempo per un giro completo (secondi);</li>
<li><b>Frequenza f = 1/T</b>: giri al secondo (hertz, Hz);</li>
<li><b>Velocità scalare</b> v = 2πr / T = 2πr·f;</li>
<li><b>Velocità angolare</b> ω = 2π / T = 2π·f (radianti al secondo): angolo spazzato nell'unità di tempo, con v = ω·r.</li>
</ul>
<p>L'<b>accelerazione centripeta</b> è diretta verso il centro e ha modulo <b>a = v² / r = ω² · r</b>. Per la seconda legge di Newton ci vuole una <b>forza centripeta</b> F = m·v²/r che tiene il corpo sulla curva: può essere la tensione di una corda, l'attrito delle ruote sull'asfalto, la gravità per un satellite. Non è una forza «in più»: è il nome del ruolo svolto da una forza che c'è già.</p>`
    },
    {
      type: "svg",
      title: "Velocità e accelerazione nel moto circolare",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="cV" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="cA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<circle cx="300" cy="150" r="110" fill="#ffffff" stroke="#475569" stroke-width="3"/>
<circle cx="300" cy="150" r="5" fill="#0f172a"/>
<text x="312" y="170" font-size="15" fill="#0f172a">centro</text>
<circle cx="410" cy="150" r="9" fill="#16a34a"/>
<line x1="410" y1="150" x2="410" y2="60" stroke="#2563eb" stroke-width="4" marker-end="url(#cV)"/>
<text x="420" y="75" font-size="16" fill="#2563eb" font-weight="bold">v (tangente)</text>
<line x1="410" y1="150" x2="340" y2="150" stroke="#dc2626" stroke-width="4" marker-end="url(#cA)"/>
<text x="345" y="140" font-size="16" fill="#dc2626" font-weight="bold">a (centripeta)</text>
<line x1="300" y1="150" x2="410" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
<text x="358" y="185" font-size="15" fill="#0f172a">r</text>
<circle cx="190" cy="150" r="9" fill="#16a34a"/>
<line x1="190" y1="150" x2="190" y2="240" stroke="#2563eb" stroke-width="4" marker-end="url(#cV)"/>
<line x1="190" y1="150" x2="250" y2="150" stroke="#dc2626" stroke-width="4" marker-end="url(#cA)"/>
<text x="470" y="150" font-size="15" fill="#0f172a">v costante in modulo,</text>
<text x="470" y="172" font-size="15" fill="#0f172a">ma la direzione cambia</text>
</g>
</svg>`,
      caption: "La velocità (blu) è tangente alla traiettoria; l'accelerazione (rossa) punta sempre verso il centro."
    },
    {
      type: "remember",
      title: "Formule del moto circolare uniforme",
      html: `<p><b>T = 1/f</b> · <b>ω = 2π/T</b> · <b>v = ω·r = 2πr/T</b> · <b>a<sub>c</sub> = v²/r = ω²·r</b> · <b>F<sub>c</sub> = m·v²/r</b>.</p>
<p><b>Esempio.</b> Una ruota di raggio 0,30 m compie un giro in 0,50 s: ω = 2π/0,5 ≈ 12,6 rad/s; v = 12,6·0,30 ≈ 3,8 m/s; a = ω²r ≈ 47 m/s². La Terra all'equatore (r ≈ 6378 km, T ≈ 24 h) si muove a circa 465 m/s, ma non ce ne accorgiamo perché la velocità è costante: sentiamo le accelerazioni, non le velocità.</p>`
    },
    {
      type: "quiz",
      title: "Controlla: moto circolare",
      questions: [
        { type: "mc", q: "Verso dove punta l'accelerazione nel moto circolare uniforme?", options: ["Lungo la tangente", "Verso il centro", "Verso l'esterno", "È nulla"], answer: 1, explain: "È l'accelerazione centripeta, diretta verso il centro della circonferenza." },
        { type: "num", q: "Un satellite compie un giro in 100 minuti. Quanti giri compie in un giorno (24 h = 1440 min)?", answer: 14.4, tol: 0.1, unit: "giri", explain: "1440/100 = 14,4 giri: la frequenza è l'inverso del periodo." },
        { type: "tf", q: "Raddoppiando la velocità su una curva di raggio costante, l'accelerazione centripeta raddoppia.", answer: false, explain: "a = v²/r: raddoppiando v, a diventa quattro volte più grande." }
      ]
    },
    {
      type: "text",
      title: "Il moto armonico",
      html: `<p>Prendi un punto che gira di moto circolare uniforme e osserva la sua <b>ombra</b> (la proiezione) su una parete: l'ombra va avanti e indietro lungo un segmento. Quel moto di andata e ritorno è il <b>moto armonico semplice</b>. La sua legge oraria è <b>x(t) = A · cos(ωt + φ)</b>, dove <b>A</b> è l'<b>ampiezza</b> (massimo spostamento dal centro), ω la pulsazione e φ la fase iniziale.</p>
<p>Caratteristiche:</p>
<ul>
<li>l'accelerazione è <b>proporzionale e opposta allo spostamento</b>: a = −ω²·x. È sempre diretta verso il centro di oscillazione;</li>
<li>la velocità è massima al centro (x = 0), nulla agli estremi (x = ±A): v<sub>max</sub> = ω·A;</li>
<li>il periodo T = 2π/ω non dipende dall'ampiezza.</li>
</ul>
<p>Due sistemi fondamentali:</p>
<ul>
<li><b>massa-molla</b> (senza attrito): F = −k·x, quindi <b>T = 2π·√(m/k)</b>. Una molla più rigida (k grande) oscilla più in fretta, una massa più grande più lentamente;</li>
<li><b>pendolo semplice</b> (piccole oscillazioni): <b>T = 2π·√(L/g)</b>. Non dipende dalla massa appesa né, per piccole ampiezze, dall'ampiezza (<i>isocronismo</i>, osservato da Galileo).</li>
</ul>`
    },
    {
      type: "example",
      title: "La molla e l'altalena",
      html: `<p><b>Molla.</b> Una massa di 1 kg è attaccata a una molla con k = 100 N/m: T = 2π√(1/100) = 2π · 0,1 ≈ <b>0,63 s</b>. Con una massa di 4 kg il periodo raddoppia (≈ 1,26 s).</p>
<p><b>Altalena.</b> Una altalena con catene lunghe 2,5 m ha T = 2π√(2,5/9,8) ≈ 3,2 s. Per «tenerla in moto» basta dare piccole spinte nel momento giusto, una per periodo: è il fenomeno della <b>risonanza</b>, che ti permette di aumentare l'ampiezza con poca fatica.</p>`
    },
    {
      type: "curiosity",
      title: "La lampada del Duomo di Pisa",
      html: `<p>La tradizione racconta che il giovane Galileo, osservando una lampada oscillare nel Duomo di Pisa, avrebbe scoperto l'isocronismo del pendolo contando i battiti del proprio polso. Il racconto fu messo per iscritto dal suo biografo Vincenzio Viviani ed è forse abbellito, ma l'idea è reale: Galileo studiò il pendolo e immaginò di usarlo per misurare il tempo. Il primo orologio a pendolo funzionante fu costruito da Christiaan Huygens nel 1656-57.</p>`
    },
    {
      type: "svg",
      title: "Oscillazione nel tempo",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="40" y1="150" x2="610" y2="150" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="270" stroke="#475569" stroke-width="2"/>
<path d="M60 60 C 110 60 140 150 190 150 C 240 150 270 240 320 240 C 370 240 400 150 450 150 C 500 150 530 60 580 60" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="320" y1="150" x2="320" y2="240" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 5"/>
<text x="70" y="52" font-size="15" fill="#0f172a">+A</text>
<text x="70" y="262" font-size="15" fill="#0f172a">−A</text>
<text x="590" y="144" font-size="15" fill="#0f172a">t</text>
<text x="66" y="24" font-size="15" fill="#0f172a">x</text>
<text x="190" y="172" font-size="15" fill="#0f172a" text-anchor="middle">T/4</text>
<text x="320" y="172" font-size="15" fill="#0f172a" text-anchor="middle">T/2</text>
<text x="450" y="172" font-size="15" fill="#0f172a" text-anchor="middle">3T/4</text>
<text x="580" y="172" font-size="15" fill="#0f172a" text-anchor="end">T</text>
<text x="330" y="40" font-size="16" fill="#2563eb" font-weight="bold">x = A cos(ωt)</text>
</g>
</svg>`,
      caption: "Una sinusoide: dopo un periodo T il moto si ripete identico."
    },
    {
      type: "alternatives",
      title: "Altri modi per capirlo",
      intro: "Se le formule non ti convincono, prova a guardare gli stessi moti da un'altra angolazione.",
      tabs: [
        { label: "🔄 L'ombra del cerchio", html: "<p>Immagina una pallina fissata al bordo di un disco che gira a velocità costante, illuminata di lato: la sua ombra sul muro oscilla su e giù. Quando la pallina è nel punto più alto o più basso l'ombra si ferma un attimo e inverte il moto; quando è a metà altezza l'ombra ha la velocità massima. È esattamente il moto armonico: <b>il moto armonico è il moto circolare visto di lato</b>.</p>", svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f8fafc"/><g font-family="sans-serif"><circle cx="180" cy="130" r="90" fill="#ffffff" stroke="#475569" stroke-width="3"/><circle cx="244" cy="66" r="10" fill="#16a34a"/><line x1="180" y1="130" x2="244" y2="66" stroke="#64748b" stroke-width="2"/><line x1="244" y1="66" x2="440" y2="66" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="440" y1="30" x2="440" y2="230" stroke="#0f172a" stroke-width="4"/><circle cx="440" cy="66" r="9" fill="#475569"/><text x="455" y="70" font-size="15" fill="#0f172a">ombra</text><text x="180" y="245" font-size="15" fill="#0f172a" text-anchor="middle">moto circolare</text></g></svg>` },
        { label: "🧍 Sulla giostra", html: "<p>Su una giostra senti di essere «spinto verso l'esterno». In realtà, visto da terra, il tuo corpo vorrebbe andare dritto (inerzia) e <b>è il sedile o la catena a deviarti</b> verso il centro: la forza centripeta è quella della catena. La spinta verso l'esterno è solo una sensazione tipica dei sistemi in rotazione (forza apparente). Se la catena si spezzasse, voleresti via lungo la <b>tangente</b>, non verso l'esterno radialmente.</p>" },
        { label: "📐 Con i numeri", html: "<p>Prova a ricavare la gittata senza trigonometria: se v₀ᵧ = 10 m/s e v₀ₓ = 17,3 m/s, la salita dura 10/9,8 ≈ 1,02 s e la discesa altrettanto, per un totale di 2,04 s. Moltiplica il tempo totale per la velocità orizzontale: 17,3 · 2,04 ≈ 35 m. Dividere il problema in «quanto resto in aria» (solo verticale) e «quanto avanzo in quel tempo» (solo orizzontale) è tutto il segreto.</p>" }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei moti nel piano",
      nodes: [
        { id: "comp", label: "Composizione dei moti", x: 50, y: 10, color: "#a855f7", html: "Un moto nel piano si scompone in due moti lungo assi perpendicolari, studiabili separatamente.", why: "Galileo (1632) la usò per rispondere ai critici di Copernico: se la Terra si muovesse, i sassi non cadrebbero in verticale. Mostrò che il moto comune a tutto il sistema non disturba i moti relativi: nasce il principio di relatività galileiana." },
        { id: "parab", label: "Moto parabolico", x: 15, y: 48, color: "#16a34a", html: "Uniforme in orizzontale, uniformemente accelerato in verticale: traiettoria a parabola.", why: "Galileo, nei Discorsi intorno a due nuove scienze (1638), dimostrò che la traiettoria dei proiettili è una parabola, smentendo la fisica aristotelica dell'«impeto» che prevedeva tratti rettilinei e poi una caduta verticale." },
        { id: "circ", label: "Moto circolare uniforme", x: 50, y: 48, color: "#ef4444", html: "Velocità di modulo costante, direzione variabile: accelerazione centripeta a = v²/r.", why: "L'espressione dell'accelerazione centripeta fu ricavata da Huygens (1659) e usata da Newton per mostrare che la Luna «cade» continuamente verso la Terra: la stessa gravità che fa cadere le mele governa le orbite." },
        { id: "arm", label: "Moto armonico", x: 85, y: 48, color: "#f59e0b", html: "x = A cos(ωt + φ), a = −ω²x: oscillazioni attorno a un centro.", why: "Hooke (1678) trovò la forza elastica proporzionale all'allungamento: una forza di richiamo lineare porta sempre a un'oscillazione sinusoidale. Per questo il modello vale per molle, pendoli, atomi nei solidi, onde." },
        { id: "grav", label: "Gravità g", x: 15, y: 88, color: "#0ea5e9", html: "Accelerazione verso il basso, circa 9,8 m/s² sulla Terra.", why: "Galileo mostrò che tutti i corpi cadono con la stessa accelerazione (in assenza d'aria); Newton ne spiegò l'origine con la gravitazione universale (1687)." },
        { id: "forza", label: "Forza centripeta / di richiamo", x: 68, y: 88, color: "#64748b", html: "La forza che curva la traiettoria o riporta il corpo verso il centro.", why: "Per il secondo principio F = m·a: se la traiettoria è curva c'è un'accelerazione, quindi deve esserci una forza risultante diretta verso l'interno della curva." }
      ],
      edges: [["comp", "parab", "dà origine a"], ["comp", "circ", "si applica a"], ["circ", "arm", "visto di lato diventa"], ["grav", "parab", "causa la curvatura del"], ["forza", "circ", "tiene su"], ["forza", "arm", "richiama nel"]]
    }
  ],
  glossary: [
    { t: "Principio di indipendenza dei moti", d: "Moti simultanei lungo direzioni diverse si sviluppano senza influenzarsi." },
    { t: "Gittata", d: "Distanza orizzontale percorsa da un proiettile fino a tornare alla quota di partenza." },
    { t: "Periodo", d: "Tempo necessario per compiere un'oscillazione o un giro completo." },
    { t: "Frequenza", d: "Numero di cicli al secondo: f = 1/T, misurata in hertz." },
    { t: "Velocità angolare", d: "Angolo spazzato nell'unità di tempo: ω = 2π/T (rad/s)." },
    { t: "Accelerazione centripeta", d: "Accelerazione diretta verso il centro nel moto circolare: a = v²/r." },
    { t: "Ampiezza", d: "Massimo spostamento dalla posizione di equilibrio in un moto armonico." },
    { t: "Isocronismo", d: "Indipendenza del periodo del pendolo dall'ampiezza (per piccole oscillazioni)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che traiettoria descrive un proiettile in assenza di resistenza dell'aria?", options: ["Una retta", "Una parabola", "Una circonferenza", "Una spirale"], answer: 1, explain: "Composizione di un moto uniforme orizzontale e di un moto uniformemente accelerato verticale: una parabola." },
      { type: "num", q: "Una palla è lanciata con v₀ᵧ = 20 m/s (g = 10 m/s²). Quanto vale l'altezza massima raggiunta?", answer: 20, tol: 0.1, unit: "m", explain: "h = v₀ᵧ²/(2g) = 400/20 = 20 m." },
      { type: "num", q: "Un oggetto è lanciato orizzontalmente da 20 m di altezza (g = 10 m/s²). Quanto dura la caduta?", answer: 2, tol: 0.05, unit: "s", explain: "t = √(2h/g) = √(40/10) = 2 s." },
      { type: "tf", q: "Per una data velocità iniziale, la gittata massima si ottiene con un angolo di 45°.", answer: true, explain: "G = v₀² sen(2θ)/g è massima quando sen 2θ = 1, cioè θ = 45°." },
      { type: "num", q: "Un disco compie 5 giri in 10 s. Calcola la frequenza.", answer: 0.5, tol: 0.01, unit: "Hz", explain: "f = 5/10 = 0,5 Hz; il periodo è T = 2 s." },
      { type: "num", q: "Un punto ruota su una circonferenza di raggio 2 m con velocità 4 m/s. Calcola l'accelerazione centripeta.", answer: 8, tol: 0.05, unit: "m/s²", explain: "a = v²/r = 16/2 = 8 m/s²." },
      { type: "tf", q: "Nel moto circolare uniforme l'accelerazione è nulla perché la velocità ha modulo costante.", answer: false, explain: "La direzione della velocità cambia, quindi c'è un'accelerazione centripeta." },
      { type: "mc", q: "In un moto armonico, dove è massima la velocità?", options: ["Agli estremi", "Al centro di oscillazione", "A metà tra centro ed estremo", "In nessun punto particolare"], answer: 1, explain: "Al centro l'energia è tutta cinetica: v = ωA. Agli estremi la velocità è nulla." },
      { type: "num", q: "Un pendolo semplice è lungo 1 m (g = 9,8 m/s²). Calcola il periodo.", answer: 2, tol: 0.05, unit: "s", explain: "T = 2π√(L/g) = 2π√(1/9,8) ≈ 2,0 s." },
      { type: "mc", q: "Se quadruplico la massa appesa a una molla, il periodo di oscillazione...", options: ["Raddoppia", "Si dimezza", "Quadruplica", "Resta uguale"], answer: 0, explain: "T = 2π√(m/k): con m×4, T è moltiplicato per √4 = 2." }
    ]
  }
});

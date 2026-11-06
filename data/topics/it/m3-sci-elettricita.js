TOPIC('it', {
  id: "m3-sci-elettricita",
  title: "Elettricità e magnetismo",
  intro: "Accendi la luce, ricarichi il telefono, la bussola indica il Nord, un fulmine squarcia il cielo: dietro tutto questo ci sono le <b>cariche elettriche</b> e il <b>magnetismo</b>, due facce dello stesso fenomeno. Scopriremo che cosa sono corrente, tensione e resistenza, come funziona un circuito, la <b>legge di Ohm</b> e come un magnete può produrre elettricità.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. La carica elettrica",
      html: `<p>Tutta la materia è fatta di <b>atomi</b>. Nel nucleo ci sono i <b>protoni</b> (carica <b>positiva +</b>) e i neutroni (senza carica); intorno si muovono gli <b>elettroni</b> (carica <b>negativa −</b>). Di solito un atomo ha tanti protoni quanti elettroni: è <b>neutro</b>.</p>
<p>Gli elettroni più esterni possono spostarsi da un corpo all'altro. Un corpo che ha <b>elettroni in più</b> è carico negativamente; uno che ne ha <b>in meno</b> è carico positivamente.</p>
<ul>
<li>Cariche <b>dello stesso segno si respingono</b> (+ e +, − e −);</li>
<li>cariche <b>di segno opposto si attraggono</b> (+ e −).</li>
</ul>
<p>Un corpo si può <b>elettrizzare</b> in tre modi:</p>
<ol>
<li><b>per strofinio</b>: strofina un palloncino sui capelli; gli elettroni passano dai capelli al palloncino, che poi si attacca al muro;</li>
<li><b>per contatto</b>: un corpo carico ne tocca uno neutro e gli cede parte della carica;</li>
<li><b>per induzione</b>: un corpo carico si avvicina senza toccare e \"sposta\" le cariche dell'altro (è così che il palloncino attira i pezzettini di carta).</li>
</ol>
<p>La carica si misura in <b>coulomb (C)</b>, dal fisico francese Charles-Augustin de Coulomb, che nel 1785 misurò la forza tra le cariche.</p>`
    },
    {
      type: "3d",
      title: "Perché i metalli conducono? Guarda l'atomo",
      scene: "atom",
      options: { elements: ["Cu", "Na", "C", "O", "Fe"] },
      caption: "Scegli il rame (Cu): ha 29 elettroni e l'ultimo, da solo sull'orbita più esterna, è legato debolmente. Nei metalli questi elettroni lasciano l'atomo e formano un \"mare\" di elettroni liberi di muoversi: per questo i metalli conducono la corrente."
    },
    {
      type: "text",
      title: "2. Conduttori e isolanti",
      html: `<ul>
<li><b>Conduttori</b>: lasciano passare facilmente le cariche. Sono i <b>metalli</b> (argento, rame, oro, alluminio, ferro), la <b>grafite</b>, l'<b>acqua</b> con sali disciolti (anche quella del rubinetto!) e il <b>corpo umano</b>.</li>
<li><b>Isolanti</b>: non lasciano passare le cariche. Plastica, gomma, vetro, ceramica, legno secco, aria secca.</li>
<li><b>Semiconduttori</b>: come il <b>silicio</b>, conducono \"a comando\": sono la base dei chip di computer e telefoni.</li>
</ul>
<p>Nei cavi elettrici il rame (conduttore) è avvolto nella plastica (isolante): la corrente va dove deve andare e noi siamo protetti.</p>`
    },
    {
      type: "widget",
      title: "Conduttore o isolante?",
      widget: "classify",
      options: {
        groups: ["⚡ Conduttore", "🛡️ Isolante"],
        items: [
          ["🔩 Chiodo di ferro", 0],
          ["🧤 Guanto di gomma", 1],
          ["🥄 Cucchiaio d'acciaio", 0],
          ["🥛 Bicchiere di vetro", 1],
          ["✏️ Mina di matita (grafite)", 0],
          ["🪵 Righello di legno secco", 1],
          ["💧 Acqua salata", 0],
          ["🧸 Plastica di un giocattolo", 1],
          ["🪙 Moneta", 0]
        ]
      },
      caption: "Tocca un oggetto e poi il gruppo giusto. Potresti verificarlo con una pila, una lampadina e due fili."
    },
    {
      type: "text",
      title: "3. Corrente, tensione e resistenza",
      html: `<p>Quando le cariche si muovono in modo ordinato in un conduttore si ha una <b>corrente elettrica</b>. Per descriverla servono tre grandezze:</p>
<table>
<tr><th>Grandezza</th><th>Che cos'è</th><th>Unità</th><th>Strumento</th></tr>
<tr><td><b>Intensità di corrente (I)</b></td><td>Quanta carica passa in un secondo in una sezione del filo: I = Q : t</td><td><b>ampere (A)</b></td><td>amperometro (in serie)</td></tr>
<tr><td><b>Tensione o differenza di potenziale (V)</b></td><td>La \"spinta\" che mette in moto le cariche, data dal generatore (pila, presa)</td><td><b>volt (V)</b></td><td>voltmetro (in parallelo)</td></tr>
<tr><td><b>Resistenza (R)</b></td><td>Quanto un materiale si oppone al passaggio della corrente</td><td><b>ohm (Ω)</b></td><td>ohmmetro</td></tr>
</table>
<p>La resistenza di un filo è maggiore se il filo è <b>più lungo</b>, <b>più sottile</b> o di un materiale <b>meno conduttore</b>; di solito cresce anche con la temperatura.</p>
<p>Alcuni valori: una pila stilo dà <b>1,5 V</b>, una batteria da auto <b>12 V</b>, le prese di casa in Italia <b>230 V</b> (corrente alternata a 50 Hz). Una lampadina LED assorbe circa 0,04 A, un forno elettrico circa 9 A.</p>`
    },
    {
      type: "text",
      title: "4. La legge di Ohm",
      html: `<p>Nel <b>1827</b> il fisico tedesco <b>Georg Simon Ohm</b> scoprì che, per molti conduttori (a temperatura costante), la corrente è <b>direttamente proporzionale</b> alla tensione:</p>
<p style="text-align:center;font-size:1.3em"><b>V = R × I</b></p>
<p>da cui: <b>I = V : R</b> e <b>R = V : I</b>.</p>
<p>Se raddoppi la tensione, raddoppia la corrente; se raddoppi la resistenza, la corrente si dimezza. Il grafico tensione–corrente di un conduttore \"ohmico\" è una <b>retta che passa per l'origine</b>: la pendenza è la resistenza.</p>
<p><b>Potenza ed energia</b>: la <b>potenza</b> elettrica, cioè quanta energia viene usata ogni secondo, è <b>P = V × I</b> e si misura in <b>watt (W)</b>. L'energia consumata è <b>E = P × t</b>: in bolletta si misura in <b>kilowattora (kWh)</b>, l'energia usata da un apparecchio da 1.000 W acceso per 1 ora.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: calcoli con la legge di Ohm",
      html: `<ol>
<li><b>Torcia</b>: pila da 4,5 V, lampadina da 9 Ω. I = V : R = 4,5 : 9 = <b>0,5 A</b>.</li>
<li><b>Tostapane</b>: alla presa da 230 V assorbe 4 A. R = V : I = 230 : 4 = <b>57,5 Ω</b>. Potenza: P = 230 × 4 = <b>920 W</b>.</li>
<li><b>Caricabatterie del telefono</b>: 5 V e 2 A → P = 5 × 2 = <b>10 W</b>. In 2 ore usa 10 × 2 = 20 Wh = 0,02 kWh: pochissimo!</li>
<li><b>Asciugacapelli</b> da 2.000 W usato per mezz'ora: E = 2 kW × 0,5 h = <b>1 kWh</b>. Se 1 kWh costa circa 0,25 €, sono 25 centesimi.</li>
</ol>
<p>Ecco perché una lampadina LED da 8 W, che fa la stessa luce di una vecchia lampadina a incandescenza da 60 W, fa risparmiare oltre l'85% di energia.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: cariche e legge di Ohm",
      questions: [
        { type: "tf", q: "Due corpi con carica negativa si attraggono.", answer: false, explain: "Cariche dello stesso segno si respingono." },
        { type: "num", q: "Una resistenza da 20 Ω è collegata a 10 V. Quanti ampere passano?", answer: 0.5, tol: 0.001, unit: "A", explain: "I = V : R = 10 : 20 = 0,5 A." },
        { type: "num", q: "Una stufetta assorbe 8 A a 230 V. Qual è la sua potenza in watt?", answer: 1840, unit: "W", explain: "P = V × I = 230 × 8 = 1840 W." },
        { type: "mc", q: "In che unità si misura la resistenza?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 2, explain: "In ohm (Ω)." }
      ]
    },
    {
      type: "text",
      title: "5. Il circuito elettrico: serie e parallelo",
      html: `<p>Un <b>circuito</b> è un percorso <b>chiuso</b> in cui circola la corrente. Comprende: un <b>generatore</b> (pila), dei <b>conduttori</b> (fili), uno o più <b>utilizzatori</b> (lampadine, motori) e un <b>interruttore</b>. Se l'interruttore è aperto il circuito è interrotto e la corrente non passa.</p>
<p><b>Collegamento in serie</b> (uno dopo l'altro, un solo percorso):</p>
<ul>
<li>la corrente è <b>la stessa</b> in tutti gli utilizzatori;</li>
<li>le resistenze si <b>sommano</b>: R = R₁ + R₂ + …;</li>
<li>se una lampadina si brucia, <b>si spengono tutte</b> (come certe vecchie luci dell'albero di Natale).</li>
</ul>
<p><b>Collegamento in parallelo</b> (ognuno su un ramo diverso):</p>
<ul>
<li>la tensione è <b>la stessa</b> per tutti;</li>
<li>la resistenza totale <b>diminuisce</b>: 1/R = 1/R₁ + 1/R₂ + …;</li>
<li>se una lampadina si brucia, <b>le altre restano accese</b>. Per questo l'impianto di casa è in parallelo: ogni presa ha 230 V e funziona da sola.</li>
</ul>
<p>Esempio: R₁ = 6 Ω e R₂ = 3 Ω. In serie: 9 Ω. In parallelo: 1/R = 1/6 + 1/3 = 3/6 → R = <b>2 Ω</b>.</p>`
    },
    {
      type: "svg",
      title: "Circuito in serie e in parallelo",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="150" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f172a">IN SERIE</text>
<rect x="40" y="60" width="220" height="180" fill="none" stroke="#334155" stroke-width="4"/>
<rect x="25" y="125" width="30" height="50" fill="#f8fafc"/>
<line x1="28" y1="135" x2="52" y2="135" stroke="#dc2626" stroke-width="5"/>
<line x1="33" y1="150" x2="47" y2="150" stroke="#0f172a" stroke-width="5"/>
<line x1="28" y1="160" x2="52" y2="160" stroke="#dc2626" stroke-width="5"/>
<text x="10" y="200" font-size="14" fill="#334155">pila</text>
<circle cx="110" cy="60" r="18" fill="#fde047" stroke="#334155" stroke-width="3"/>
<path d="M98 48 L122 72 M122 48 L98 72" stroke="#334155" stroke-width="2"/>
<circle cx="190" cy="60" r="18" fill="#fde047" stroke="#334155" stroke-width="3"/>
<path d="M178 48 L202 72 M202 48 L178 72" stroke="#334155" stroke-width="2"/>
<text x="150" y="275" font-size="14" text-anchor="middle" fill="#334155">un solo percorso: stessa corrente</text>
<path d="M120 240 L150 240" stroke="#2563eb" stroke-width="3"/>
<polygon points="150,234 162,240 150,246" fill="#2563eb"/>
<text x="470" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f172a">IN PARALLELO</text>
<rect x="360" y="60" width="240" height="180" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="480" y1="60" x2="480" y2="240" stroke="#334155" stroke-width="4"/>
<rect x="345" y="125" width="30" height="50" fill="#f8fafc"/>
<line x1="348" y1="135" x2="372" y2="135" stroke="#dc2626" stroke-width="5"/>
<line x1="353" y1="150" x2="367" y2="150" stroke="#0f172a" stroke-width="5"/>
<line x1="348" y1="160" x2="372" y2="160" stroke="#dc2626" stroke-width="5"/>
<circle cx="480" cy="150" r="18" fill="#fde047" stroke="#334155" stroke-width="3"/>
<path d="M468 138 L492 162 M492 138 L468 162" stroke="#334155" stroke-width="2"/>
<circle cx="600" cy="150" r="18" fill="#fde047" stroke="#334155" stroke-width="3"/>
<path d="M588 138 L612 162 M612 138 L588 162" stroke="#334155" stroke-width="2"/>
<text x="480" y="275" font-size="14" text-anchor="middle" fill="#334155">più rami: stessa tensione</text>
</svg>`,
      caption: "Simboli: le linee rosse e nere sono la pila, il cerchio con la X è la lampadina. A sinistra, svitando una lampadina si spegne anche l'altra; a destra no."
    },
    {
      type: "widget",
      title: "Riconosci le parti del circuito",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<rect x="100" y="60" width="400" height="180" fill="none" stroke="#475569" stroke-width="5"/>
<rect x="70" y="110" width="60" height="80" rx="6" fill="#f59e0b" stroke="#78350f" stroke-width="3"/>
<rect x="88" y="98" width="24" height="12" fill="#78350f"/>
<circle cx="300" cy="60" r="28" fill="#fef08a" stroke="#475569" stroke-width="4"/>
<path d="M285 60 Q 300 40 315 60" stroke="#b45309" stroke-width="3" fill="none"/>
<rect x="255" y="230" width="90" height="20" fill="#ecfeff"/>
<circle cx="260" cy="240" r="6" fill="#475569"/>
<circle cx="340" cy="240" r="6" fill="#475569"/>
<line x1="260" y1="240" x2="330" y2="210" stroke="#475569" stroke-width="5"/>
<circle cx="500" cy="150" r="30" fill="#e2e8f0" stroke="#475569" stroke-width="4"/>
<text x="500" y="158" font-size="22" text-anchor="middle" fill="#0f172a">A</text>
</svg>`,
        spots: [
          { x: 100, y: 150, label: "Generatore (pila)" },
          { x: 300, y: 60, label: "Utilizzatore (lampadina)" },
          { x: 295, y: 225, label: "Interruttore aperto" },
          { x: 500, y: 150, label: "Amperometro" },
          { x: 200, y: 240, label: "Filo conduttore" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome. Con l'interruttore aperto la lampadina è spenta: il circuito non è chiuso."
    },
    {
      type: "text",
      title: "6. Gli effetti della corrente e la sicurezza",
      html: `<ul>
<li><b>Effetto termico</b> (effetto Joule): un conduttore percorso da corrente si scalda. Lo sfruttano stufe, forni, ferri da stiro, phon, scaldabagni.</li>
<li><b>Effetto luminoso</b>: lampadine e LED.</li>
<li><b>Effetto magnetico</b>: la corrente crea un campo magnetico (elettrocalamite, campanelli, motori).</li>
<li><b>Effetto chimico</b>: la corrente può separare le sostanze (<b>elettrolisi</b>); al contrario, una reazione chimica può produrre corrente (pile e batterie).</li>
</ul>
<p>⚠️ <b>La corrente è pericolosa</b> per il corpo umano, che è un conduttore: già correnti di circa <b>30 milliampere</b> attraverso il corpo possono essere molto pericolose per il cuore. Regole d'oro:</p>
<ul>
<li>mai toccare apparecchi elettrici con le mani bagnate o in bagno vicino all'acqua;</li>
<li>non infilare oggetti nelle prese e non tirare i cavi;</li>
<li>non sovraccaricare le prese multiple (le \"ciabatte\");</li>
<li>in casa l'<b>interruttore differenziale</b> (\"salvavita\") stacca la corrente in una frazione di secondo se rileva una dispersione verso terra (di solito già a 30 mA); il <b>filo di terra</b> (giallo-verde) porta a terra le correnti di guasto. Gli impianti li devono realizzare e certificare tecnici abilitati.</li>
<li>durante un temporale non ripararti sotto un albero isolato.</li>
</ul>`
    },
    {
      type: "text",
      title: "7. Il magnetismo",
      html: `<p>Un <b>magnete</b> (calamita) attira oggetti di <b>ferro</b>, <b>nichel</b> e <b>cobalto</b>. Ogni magnete ha due <b>poli</b>, Nord e Sud: poli <b>uguali si respingono</b>, poli <b>opposti si attraggono</b>. Se spezzi una calamita ottieni due calamite più piccole, ognuna con il suo Nord e il suo Sud: non si può isolare un solo polo.</p>
<p>Intorno a un magnete c'è un <b>campo magnetico</b>, che si \"vede\" spargendo limatura di ferro su un foglio: si dispone lungo le <b>linee di forza</b>, che escono dal polo Nord ed entrano nel polo Sud.</p>
<p>Anche la <b>Terra</b> è un enorme magnete, grazie al ferro fuso che si muove nel nucleo esterno. L'ago della <b>bussola</b> (inventata in Cina, usata dai naviganti europei dal XII–XIII secolo) si orienta lungo il campo terrestre e indica il Nord. Il campo magnetico ci protegge anche dal vento solare: quando le particelle del Sole arrivano vicino ai poli, si vedono le <b>aurore polari</b>.</p>`
    },
    {
      type: "text",
      title: "8. Elettricità e magnetismo sono parenti",
      html: `<p>Nel <b>1820</b> il danese <b>Hans Christian Ørsted</b> notò, durante una lezione, che l'ago di una bussola si muoveva quando vicino passava corrente in un filo: <b>la corrente elettrica crea un campo magnetico</b>. Avvolgendo un filo attorno a un chiodo di ferro si ottiene un'<b>elettrocalamita</b>, che si \"spegne\" togliendo la corrente (usata nelle gru dei rottami, nei campanelli, nei relè).</p>
<p>Nel <b>1831</b> l'inglese <b>Michael Faraday</b> scoprì il contrario: <b>muovendo un magnete dentro una bobina di filo si produce corrente</b> (induzione elettromagnetica). Da qui nascono:</p>
<ul>
<li>il <b>generatore</b> (alternatore): nelle centrali idroelettriche, eoliche, termoelettriche una turbina fa girare magneti e bobine e produce corrente. La dinamo della bicicletta funziona allo stesso modo;</li>
<li>il <b>motore elettrico</b>: fa il percorso inverso, trasforma energia elettrica in movimento (frullatori, auto elettriche, ventilatori). L'italiano <b>Galileo Ferraris</b> nel 1885 scoprì il campo magnetico rotante, alla base dei motori in corrente alternata;</li>
<li>il <b>trasformatore</b>, che alza o abbassa la tensione: la corrente viaggia nelle linee ad alta tensione (fino a 380.000 V in Italia) e arriva a casa a 230 V.</li>
</ul>
<p>Nel 1865 lo scozzese <b>James Clerk Maxwell</b> unì tutto in quattro equazioni e capì che la <b>luce</b> stessa è un'onda elettromagnetica.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: costruisci un'elettrocalamita",
      html: `<p>Ti servono: un chiodo di ferro di circa 8 cm, 1 metro di filo di rame isolato sottile, una pila da 1,5 V, qualche graffetta. Fallo con un adulto.</p>
<ol>
<li>Avvolgi il filo intorno al chiodo facendo 30–40 spire strette, lasciando liberi i due capi.</li>
<li>Togli la plastica alle estremità del filo per circa 1 cm.</li>
<li>Tieni i capi sui poli della pila per pochi secondi: il chiodo <b>attira le graffette</b>!</li>
<li>Stacca un capo: le graffette cadono.</li>
</ol>
<p>Prova a raddoppiare le spire: quante graffette solleva ora? Più spire e più corrente = campo magnetico più forte. ⚠️ Non tenerlo collegato a lungo: il filo si scalda (effetto Joule) e la pila si scarica.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La pila è italiana",
      html: `<p>Nel <b>1799</b> il comasco <b>Alessandro Volta</b> impilò dischi di zinco e rame separati da panni imbevuti di acqua salata e ottenne la prima <b>pila</b>, il primo generatore di corrente continua (la annunciò nel 1800). Lo fece per dimostrare che Luigi Galvani si sbagliava sull'\"elettricità animale\" delle rane. In suo onore l'unità della tensione si chiama <b>volt</b>. E la parola \"elettricità\" viene dal greco <i>élektron</i>, che significa <b>ambra</b>: già il filosofo Talete, nel VI secolo a.C., notò che l'ambra strofinata attirava pagliuzze.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il fulmine e il parafulmine",
      html: `<p>Un <b>fulmine</b> è una gigantesca scarica tra nuvola e terra: la tensione può arrivare a centinaia di milioni di volt e la corrente a decine di migliaia di ampere, ma dura meno di un millesimo di secondo. L'aria attorno si scalda a circa 30.000 °C (più della superficie del Sole) e si espande di colpo: è il <b>tuono</b>. Nel 1752 Benjamin Franklin dimostrò con un aquilone che i fulmini sono elettricità e inventò il <b>parafulmine</b>. Per sapere quanto è lontano un temporale: conta i secondi tra lampo e tuono e dividi per 3: ottieni i chilometri.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la corrente",
      intro: "La corrente non si vede: ecco alcune immagini che aiutano a \"vederla\".",
      tabs: [
        {
          label: "💧 Analogia dell'acqua",
          html: `<p>Pensa a un circuito come a un impianto idraulico:</p>
<ul>
<li>la <b>pila</b> è una <b>pompa</b> che alza l'acqua: la <b>tensione</b> è il dislivello (la pressione);</li>
<li>la <b>corrente</b> è la quantità d'acqua che passa ogni secondo nel tubo;</li>
<li>la <b>resistenza</b> è un tubo stretto o un rubinetto quasi chiuso;</li>
<li>l'<b>interruttore</b> è una saracinesca.</li>
</ul>
<p>Con più pressione passa più acqua (V più grande → I più grande); con un tubo più stretto ne passa meno (R più grande → I più piccola). È la legge di Ohm!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<rect x="40" y="40" width="80" height="60" fill="#38bdf8" stroke="#0369a1" stroke-width="3"/>
<text x="80" y="76" font-size="15" text-anchor="middle" fill="#0c4a6e">serbatoio alto</text>
<rect x="40" y="190" width="80" height="40" fill="#38bdf8" stroke="#0369a1" stroke-width="3"/>
<text x="80" y="215" font-size="14" text-anchor="middle" fill="#0c4a6e">in basso</text>
<path d="M120 70 L360 70 L360 210 L120 210" fill="none" stroke="#0369a1" stroke-width="16"/>
<rect x="340" y="110" width="40" height="60" fill="#f59e0b" stroke="#78350f" stroke-width="3"/>
<text x="400" y="145" font-size="15" fill="#78350f">strettoia = resistenza</text>
<circle cx="80" cy="150" r="22" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<text x="80" y="156" font-size="14" text-anchor="middle" fill="#fff">pompa</text>
<line x1="80" y1="128" x2="80" y2="100" stroke="#5b21b6" stroke-width="4"/>
<line x1="80" y1="172" x2="80" y2="190" stroke="#5b21b6" stroke-width="4"/>
<text x="240" y="60" font-size="15" text-anchor="middle" fill="#0c4a6e">flusso d'acqua = corrente →</text>
<text x="180" y="130" font-size="15" fill="#5b21b6">pompa = pila</text>
<text x="180" y="150" font-size="15" fill="#5b21b6">dislivello = tensione</text>
</svg>`
        },
        {
          label: "🔺 Il triangolo magico",
          html: `<p>Nelle scuole inglesi si usa il <b>triangolo VRI</b>. Copri con il dito la grandezza che cerchi e leggi quello che resta:</p>
<ul><li>copri <b>V</b> → resta R accanto a I → <b>V = R × I</b>;</li>
<li>copri <b>I</b> → resta V sopra R → <b>I = V : R</b>;</li>
<li>copri <b>R</b> → resta V sopra I → <b>R = V : I</b>.</li></ul>
<p>Lo stesso trucco funziona per la potenza, con P in alto e V, I in basso.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fdf4ff"/>
<polygon points="300,20 470,230 130,230" fill="#f0abfc" stroke="#86198f" stroke-width="4"/>
<line x1="210" y1="130" x2="390" y2="130" stroke="#86198f" stroke-width="4"/>
<line x1="300" y1="130" x2="300" y2="230" stroke="#86198f" stroke-width="4"/>
<text x="300" y="110" font-size="44" text-anchor="middle" font-weight="bold" fill="#4a044e">V</text>
<text x="240" y="200" font-size="40" text-anchor="middle" font-weight="bold" fill="#4a044e">R</text>
<text x="360" y="200" font-size="40" text-anchor="middle" font-weight="bold" fill="#4a044e">I</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#4a044e">linea orizzontale = diviso · linea verticale = per</text>
</svg>`
        },
        {
          label: "⚛️ Gli elettroni in 3D",
          html: `<p>Guarda da vicino gli atomi: nei metalli come il <b>rame</b> l'elettrone più esterno è lontano dal nucleo e poco trattenuto. Quando colleghi una pila, tutti questi elettroni liberi \"scivolano\" nella stessa direzione, dal polo negativo verso il positivo. Curioso: si spostano lentissimi (pochi millimetri al minuto!), ma la \"spinta\" si propaga quasi alla velocità della luce, come quando spingi una fila di biglie in un tubo pieno.</p>`,
          scene: "atom",
          options: { elements: ["Cu", "Ag", "Au", "Al"] }
        },
        {
          label: "🧲 Abbina scienziato e scoperta",
          html: `<p>La storia dell'elettricità è una staffetta tra scienziati di molti Paesi. Abbina ognuno alla sua scoperta.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Alessandro Volta", "La pila (1799)"],
              ["Hans Christian Ørsted", "La corrente fa muovere la bussola (1820)"],
              ["Georg Simon Ohm", "V = R × I (1827)"],
              ["Michael Faraday", "Induzione elettromagnetica (1831)"],
              ["Galileo Ferraris", "Campo magnetico rotante (1885)"],
              ["Benjamin Franklin", "Il parafulmine (1752)"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa di elettricità e magnetismo: tocca i nodi e scopri il perché",
      nodes: [
        { id: "carica", label: "Carica elettrica", x: 50, y: 6, color: "#ef4444", html: "Proprietà di protoni (+) ed elettroni (−).", why: "L'elettrone fu scoperto da J. J. Thomson nel 1897; la carica più piccola (quella dell'elettrone, 1,6 × 10⁻¹⁹ C) fu misurata da Robert Millikan nel 1909 con goccioline d'olio." },
        { id: "coulomb", label: "Attrazione e repulsione", x: 15, y: 22, color: "#f97316", html: "Cariche uguali si respingono, opposte si attraggono.", why: "<b>Coulomb</b> nel 1785 misurò con una bilancia di torsione che la forza diminuisce con il quadrato della distanza, proprio come la gravità di Newton." },
        { id: "conduttori", label: "Conduttori e isolanti", x: 85, y: 22, color: "#f59e0b", html: "Materiali che lasciano o non lasciano muovere le cariche.", why: "Dipende dagli elettroni esterni: nei metalli sono liberi di muoversi tra gli atomi, negli isolanti restano legati ai loro atomi." },
        { id: "corrente", label: "Corrente, tensione, resistenza", x: 50, y: 38, color: "#2563eb", html: "I (ampere), V (volt), R (ohm).", why: "La corrente continua divenne studiabile solo dopo la <b>pila di Volta</b> (1799): prima si conoscevano solo scariche istantanee." },
        { id: "ohm", label: "Legge di Ohm", x: 20, y: 60, color: "#0ea5e9", html: "V = R × I.", why: "<b>Ohm</b> la ricavò nel 1827 misurando con cura la corrente in fili di lunghezze diverse. All'inizio fu criticato; poi la Royal Society lo premiò nel 1841." },
        { id: "circuiti", label: "Circuiti serie e parallelo", x: 20, y: 85, color: "#14b8a6", html: "Collegamenti diversi degli utilizzatori.", why: "Dalla legge di Ohm e dalla conservazione della carica (leggi di Kirchhoff, 1845) si ricava come si sommano le resistenze in serie e in parallelo." },
        { id: "potenza", label: "Potenza ed energia", x: 50, y: 85, color: "#22c55e", html: "P = V × I (watt); E = P × t (kWh).", why: "James Prescott Joule (1840) misurò il calore prodotto dalla corrente e dimostrò che l'energia si trasforma ma si conserva." },
        { id: "magnetismo", label: "Magneti e campo magnetico", x: 82, y: 55, color: "#a855f7", html: "Poli Nord e Sud, linee di forza, magnetismo terrestre.", why: "William Gilbert nel 1600 (<i>De Magnete</i>) capì che la Terra è un grande magnete. Il campo terrestre nasce dal ferro liquido in movimento nel nucleo esterno." },
        { id: "elettromagnetismo", label: "Elettromagnetismo", x: 82, y: 85, color: "#7c3aed", html: "La corrente crea magnetismo; il magnetismo in movimento crea corrente.", why: "<b>Ørsted</b> (1820) e <b>Faraday</b> (1831) lo scoprirono; <b>Maxwell</b> (1865) lo descrisse con 4 equazioni, prevedendo le onde elettromagnetiche (radio, luce) poi trovate da Hertz nel 1887." }
      ],
      edges: [
        ["carica", "coulomb", "esercita forze"],
        ["carica", "conduttori", "si muove nei"],
        ["conduttori", "corrente", "permettono la"],
        ["corrente", "ohm", "è legata dalla"],
        ["ohm", "circuiti", "spiega i"],
        ["corrente", "potenza", "trasporta"],
        ["corrente", "elettromagnetismo", "genera magnetismo"],
        ["magnetismo", "elettromagnetismo", "in moto genera corrente"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: circuiti e magneti",
      questions: [
        { type: "mc", q: "Perché l'impianto di casa è collegato in parallelo?", options: ["Per risparmiare filo", "Perché ogni apparecchio riceve 230 V e funziona da solo", "Perché la corrente è più debole"], answer: 1, explain: "In parallelo ogni ramo ha la stessa tensione ed è indipendente." },
        { type: "num", q: "Due resistenze da 4 Ω e 6 Ω sono in serie. Qual è la resistenza totale?", answer: 10, unit: "Ω", explain: "In serie si sommano: 4 + 6 = 10 Ω." },
        { type: "tf", q: "Muovendo un magnete dentro una bobina si produce corrente.", answer: true, explain: "È l'induzione elettromagnetica scoperta da Faraday." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Cariche uguali si respingono, opposte si attraggono. Elettrizzazione: strofinio, contatto, induzione.</li>
<li><b>I</b> in ampere, <b>V</b> in volt, <b>R</b> in ohm. Legge di Ohm: <b>V = R × I</b>.</li>
<li><b>P = V × I</b> (watt); energia <b>E = P × t</b> (kWh).</li>
<li>Serie: stessa corrente, R si sommano. Parallelo: stessa tensione, rami indipendenti.</li>
<li>Poli magnetici uguali si respingono; la Terra è un magnete.</li>
<li>Corrente → magnetismo (Ørsted); magnete in movimento → corrente (Faraday).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Carica elettrica", d: "Proprietà della materia: positiva (protoni) o negativa (elettroni)." },
    { t: "Conduttore", d: "Materiale in cui le cariche si muovono facilmente." },
    { t: "Isolante", d: "Materiale che non lascia passare la corrente." },
    { t: "Corrente elettrica", d: "Flusso ordinato di cariche; si misura in ampere (A)." },
    { t: "Tensione", d: "Differenza di potenziale che spinge le cariche; si misura in volt (V)." },
    { t: "Resistenza", d: "Opposizione al passaggio della corrente; si misura in ohm (Ω)." },
    { t: "Potenza elettrica", d: "Energia usata ogni secondo: P = V × I, in watt." },
    { t: "Kilowattora", d: "Energia usata da un apparecchio da 1.000 W per un'ora." },
    { t: "Circuito", d: "Percorso chiuso in cui circola la corrente." },
    { t: "Campo magnetico", d: "Zona intorno a un magnete o a una corrente in cui agiscono forze magnetiche." },
    { t: "Induzione elettromagnetica", d: "Produzione di corrente con un campo magnetico che cambia." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Un palloncino strofinato sui capelli si carica…", options: ["per contatto", "per strofinio", "per induzione"], answer: 1, explain: "Lo strofinio trasferisce elettroni dai capelli al palloncino." },
      { type: "mc", q: "Quale di questi materiali è un isolante?", options: ["Rame", "Gomma", "Acqua salata", "Grafite"], answer: 1, explain: "La gomma non lascia passare la corrente." },
      { type: "num", q: "Una lampadina ha una resistenza di 6 Ω e la pila dà 12 V. Quanti ampere passano?", answer: 2, unit: "A", explain: "I = 12 : 6 = 2 A." },
      { type: "num", q: "In un circuito passano 0,5 A attraverso una resistenza di 18 Ω. Qual è la tensione?", answer: 9, unit: "V", explain: "V = R × I = 18 × 0,5 = 9 V." },
      { type: "num", q: "Un forno da 2 kW resta acceso 3 ore. Quanti kWh consuma?", answer: 6, unit: "kWh", explain: "E = 2 kW × 3 h = 6 kWh." },
      { type: "num", q: "Due resistenze da 10 Ω sono in parallelo. Qual è la resistenza totale?", answer: 5, unit: "Ω", explain: "1/R = 1/10 + 1/10 = 2/10 → R = 5 Ω." },
      { type: "tf", q: "In un circuito in serie, se una lampadina si brucia, le altre restano accese.", answer: false, explain: "In serie c'è un solo percorso: si spengono tutte." },
      { type: "text", q: "Come si chiama lo scienziato italiano che inventò la pila?", answer: ["volta", "alessandro volta"], explain: "Alessandro Volta, nel 1799." },
      { type: "mc", q: "Che cosa scoprì Ørsted nel 1820?", options: ["Che la corrente crea un campo magnetico", "La legge V = R × I", "L'elettrone"], answer: 0, explain: "Un filo percorso da corrente fa ruotare l'ago della bussola." },
      { type: "mc", q: "Su quale principio si basano i generatori delle centrali elettriche?", options: ["Effetto Joule", "Induzione elettromagnetica", "Elettrizzazione per strofinio"], answer: 1, explain: "Magneti e bobine in rotazione producono corrente." },
      { type: "tf", q: "Due poli Nord di due calamite si attraggono.", answer: false, explain: "Poli uguali si respingono." },
      { type: "order", q: "Metti in ordine cronologico le scoperte.", items: ["Parafulmine di Franklin", "Pila di Volta", "Esperimento di Ørsted", "Legge di Ohm", "Induzione di Faraday"], explain: "1752, 1799, 1820, 1827, 1831." }
    ],
    gen: [["proportion", 2]]
  }
});

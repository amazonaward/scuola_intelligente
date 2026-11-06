TOPIC('it', {
  id: "p3-geo-fiumi-laghi",
  title: "Fiumi e laghi",
  intro: `Ogni fiume fa un lungo viaggio: nasce in montagna da una piccola <b>sorgente</b>, scende veloce tra le rocce, attraversa la pianura con larghe curve e alla fine si getta nel mare alla <b>foce</b>. Lungo la strada incontra altri fiumi e a volte si ferma in un <b>lago</b>. Seguiamo questo viaggio, anche in <b>3D</b>!`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Da dove viene l'acqua dei fiumi?",
      html: `<p>L'acqua dei fiumi arriva dal <b>cielo</b>: è la <b>pioggia</b> e la <b>neve</b> che cadono sulle montagne. Una parte scorre subito sul terreno, una parte penetra sotto terra e poi riesce fuori dalle <b>sorgenti</b>, una parte resta congelata nei <b>ghiacciai</b> e si scioglie piano piano in estate.</p>
<p>Il fiume porta l'acqua verso il <b>mare</b>; dal mare il Sole la fa evaporare, si formano le nuvole e piove di nuovo sui monti. È il <b>ciclo dell'acqua</b>: i fiumi sono le "strade" con cui l'acqua torna al mare.</p>
<p>L'acqua scende sempre <b>verso il basso</b>, per la forza di gravità: per questo i fiumi nascono in alto e finiscono in basso, nel mare, in un lago o in un altro fiume.</p>`
    },
    {
      type: "text",
      title: "Passo 1: il viaggio del fiume",
      html: `<ol>
<li>💧 <b>Sorgente</b>: il punto dove il fiume nasce, di solito in montagna, da una fonte o da un ghiacciaio.</li>
<li>⛰️ <b>Corso superiore</b> (in montagna): il letto è stretto e ripido, l'acqua è <b>veloce</b>, forma rapide e <b>cascate</b> e scava <b>valli</b> profonde a forma di <b>V</b>. Trascina sassi grandi.</li>
<li>🌳 <b>Corso medio</b> (in collina): il fiume rallenta e si allarga, riceve altri fiumi.</li>
<li>🌾 <b>Corso inferiore</b> (in pianura): l'acqua è <b>lenta</b> e il fiume disegna grandi curve chiamate <b>meandri</b>. Deposita sabbia e limo fine.</li>
<li>🌊 <b>Foce</b>: il punto dove il fiume finisce, nel mare, in un lago o in un altro fiume.</li>
</ol>
<p>Il "canale" in cui scorre l'acqua si chiama <b>letto</b> o <b>alveo</b>; i suoi bordi sono le <b>sponde</b>; i rialzi di terra costruiti per evitare le alluvioni sono gli <b>argini</b>. Guardando verso la foce, la sponda a destra è la <b>riva destra</b> e quella a sinistra è la <b>riva sinistra</b>.</p>`
    },
    {
      type: "svg",
      title: "Dalla sorgente alla foce",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#e0f2fe"/>
<path d="M0 150 L70 40 L130 110 L180 60 L250 170 L600 250 L600 330 L0 330 Z" fill="#a8a29e"/>
<path d="M50 70 L70 40 L90 68 Z M165 82 L180 60 L196 86 Z" fill="#ffffff"/>
<path d="M200 180 L600 250 L600 330 L120 330 Z" fill="#86efac"/>
<path d="M480 260 L600 250 L600 330 L460 330 Z" fill="#3b82f6"/>
<path d="M95 85 Q110 120 140 150 Q170 175 200 190 Q260 215 300 235 Q260 250 320 262 Q390 270 360 285 Q420 300 475 290" stroke="#2563eb" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M475 290 L500 275 M475 290 L505 300 M475 290 L495 315" stroke="#2563eb" stroke-width="5"/>
<path d="M250 140 Q240 180 230 200" stroke="#60a5fa" stroke-width="5" fill="none"/>
<circle cx="95" cy="85" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="3"/>
<g font-size="15" font-weight="bold" fill="#0f172a">
<text x="20" y="25">💧 sorgente</text>
<text x="100" y="175">corso superiore</text>
<text x="100" y="193" font-size="12" font-weight="normal">veloce, valle a V</text>
<text x="275" y="200">affluente</text>
<text x="270" y="310">meandri</text>
<text x="500" y="245">foce (delta)</text>
<text x="540" y="320" fill="#ffffff">mare</text>
</g>
<path d="M120 30 L160 30" stroke="#f59e0b" stroke-width="3"/>
<text x="165" y="35" font-size="13" fill="#78350f">in alto: acqua veloce → in basso: acqua lenta</text>
</svg>`,
      caption: "Il viaggio di un fiume: in montagna l'acqua corre e scava, in pianura rallenta e disegna curve, alla foce entra nel mare."
    },
    {
      type: "3d",
      title: "Il paesaggio del fiume in 3D",
      scene: "terrain",
      caption: "Ruota il paesaggio e tocca ogni etichetta: la parte si illumina. Segui il viaggio dell'acqua dal ghiacciaio al mare.",
      options: {
        features: {
          glacier: { label: "Ghiacciaio", html: "Una grande massa di ghiaccio sulle montagne più alte. D'estate si scioglie un po' e dà acqua ai fiumi anche quando non piove. La <b>Dora Baltea</b> nasce dai ghiacciai del Monte Bianco." },
          peak: { label: "Vetta", html: "La cima della montagna. Le linee di cresta tra le vette sono gli <b>spartiacque</b>: la pioggia che cade da una parte va in un fiume, quella che cade dall'altra parte va in un altro." },
          mountain: { label: "Montagna", html: "Qui piove e nevica di più: le montagne sono i \"serbatoi\" d'acqua dei fiumi." },
          source: { label: "Sorgente", html: "Il punto dove nasce il fiume. Il <b>Po</b> nasce in Piemonte, al <b>Pian del Re</b>, a circa 2000 metri, ai piedi del Monviso." },
          valley: { label: "Valle", html: "Il fiume con la forza dell'acqua e dei sassi scava la roccia: le valli dei fiumi hanno la forma di una <b>V</b>. Le valli scavate dai ghiacciai, invece, hanno la forma di una <b>U</b>." },
          river: { label: "Fiume", html: "Corso d'acqua che scorre tutto l'anno. In pianura rallenta e forma i <b>meandri</b>, grandi curve a forma di S." },
          lake: { label: "Lago", html: "Acqua dolce raccolta in una conca del terreno. Il fiume che entra nel lago si chiama <b>immissario</b>, quello che ne esce <b>emissario</b>." },
          plain: { label: "Pianura", html: "Spesso è proprio il fiume ad averla costruita, depositando sabbia e limo per migliaia di anni: la <b>Pianura Padana</b> è stata formata dal Po e dai suoi affluenti." },
          delta: { label: "Delta", html: "Foce a forma di triangolo, divisa in tanti rami, che si forma quando il fiume porta più detriti di quanti il mare riesca a portare via. Esempio: il <b>delta del Po</b>." },
          sea: { label: "Mare", html: "La fine del viaggio. L'acqua dolce del fiume si mescola con quella salata del mare… e prima o poi evaporerà e tornerà a piovere sui monti." }
        }
      }
    },
    {
      type: "quiz",
      title: "Mini-quiz: il viaggio del fiume",
      questions: [
        { type: "mc", q: "Come si chiama il punto dove nasce un fiume?", options: ["Foce", "Sorgente", "Delta"], answer: 1, explain: "Il fiume nasce dalla sorgente e finisce alla foce." },
        { type: "mc", q: "Dove l'acqua del fiume è più veloce?", options: ["In montagna", "In pianura", "Alla foce"], answer: 0, explain: "In montagna la pendenza è forte e l'acqua corre veloce." },
        { type: "tf", q: "I meandri sono le grandi curve che il fiume fa in pianura.", answer: true, explain: "In pianura l'acqua è lenta e il fiume serpeggia formando i meandri." }
      ]
    },
    {
      type: "text",
      title: "Passo 2: affluenti, torrenti e bacino",
      html: `<ul>
<li>Un <b>affluente</b> è un fiume che si getta in un altro fiume più grande. Il Po ha moltissimi affluenti: da sinistra (dalle Alpi) la <b>Dora Baltea</b>, il <b>Ticino</b>, l'<b>Adda</b>, l'<b>Oglio</b>, il <b>Mincio</b>; da destra (dall'Appennino) il <b>Tanaro</b>, il <b>Trebbia</b>, il <b>Taro</b>, il <b>Panaro</b>.</li>
<li>Il punto in cui due fiumi si uniscono si chiama <b>confluenza</b>.</li>
<li>Un <b>torrente</b> è un corso d'acqua che d'estate può restare quasi asciutto e dopo i temporali si gonfia all'improvviso. In Italia ce ne sono tanti, soprattutto sull'Appennino e nel Sud, dove piove poco d'estate.</li>
<li>Il <b>ruscello</b> è un piccolo corso d'acqua.</li>
<li>Il <b>bacino idrografico</b> è tutto il territorio da cui l'acqua piovana finisce in un certo fiume. Il bacino del Po è grande circa <b>71.000 km²</b>: quasi un quarto dell'Italia!</li>
</ul>
<p>La quantità d'acqua di un fiume cambia durante l'anno: si chiama <b>regime</b>. I fiumi alpini sono più pieni in primavera e in estate, quando si sciolgono neve e ghiacciai; quelli appenninici in autunno e in inverno, quando piove di più.</p>`
    },
    {
      type: "widget",
      title: "Le parti del fiume",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<path d="M0 0 L200 0 L120 120 L0 160 Z" fill="#a8a29e"/>
<path d="M60 20 Q70 10 80 22 Z" fill="#ffffff"/>
<path d="M500 220 L600 200 L600 300 L470 300 Z" fill="#3b82f6"/>
<path d="M70 40 Q100 90 150 120 Q230 150 260 180 Q300 210 360 200 Q420 190 430 230 Q440 260 490 255" stroke="#2563eb" stroke-width="9" fill="none" stroke-linecap="round"/>
<path d="M330 40 Q320 100 285 190" stroke="#60a5fa" stroke-width="6" fill="none"/>
<ellipse cx="200" cy="245" rx="70" ry="30" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
<path d="M240 190 Q230 205 220 218" stroke="#2563eb" stroke-width="5" fill="none"/>
<circle cx="70" cy="40" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 70, y: 40, label: "Sorgente" },
          { x: 325, y: 70, label: "Affluente" },
          { x: 285, y: 192, label: "Confluenza" },
          { x: 420, y: 200, label: "Meandro" },
          { x: 200, y: 245, label: "Lago" },
          { x: 490, y: 255, label: "Foce" },
          { x: 90, y: 120, label: "Montagna" }
        ]
      },
      caption: "Tocca ogni punto e scegli il nome giusto."
    },
    {
      type: "text",
      title: "Passo 3: due tipi di foce",
      html: `<p>Non tutti i fiumi finiscono nello stesso modo:</p>
<ul>
<li><b>Foce a delta</b>: il fiume si divide in tanti rami e forma un triangolo di terre nuove, perché porta molti detriti e il mare (con poche maree) non riesce a portarli via. Esempi: il <b>Po</b>, il <b>Nilo</b>, il <b>Danubio</b>.</li>
<li><b>Foce a estuario</b>: il fiume finisce con un'unica bocca larga a forma di imbuto, \"pulita\" dalle <b>maree</b> che entrano ed escono. Esempi: il <b>Tamigi</b> a Londra, la <b>Senna</b> in Francia, il <b>Río de la Plata</b> in Sudamerica.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Delta ed estuario",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<rect x="10" y="10" width="280" height="240" fill="#86efac"/>
<rect x="10" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M150 10 L150 110" stroke="#2563eb" stroke-width="10"/>
<path d="M150 110 L90 175 M150 110 L130 178 M150 110 L170 178 M150 110 L210 175" stroke="#2563eb" stroke-width="6"/>
<path d="M150 110 L70 170 L230 170 Z" fill="#facc15" opacity="0.45"/>
<text x="150" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">DELTA</text>
<text x="150" y="225" font-size="14" text-anchor="middle" fill="#ffffff">tanti rami, triangolo</text>
<rect x="310" y="10" width="280" height="240" fill="#86efac"/>
<rect x="310" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M450 10 L450 90" stroke="#2563eb" stroke-width="10"/>
<path d="M445 90 L380 172 L520 172 L455 90 Z" fill="#3b82f6"/>
<text x="450" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ESTUARIO</text>
<text x="450" y="225" font-size="14" text-anchor="middle" fill="#ffffff">una sola bocca a imbuto</text>
</svg>`,
      caption: "Nel delta il fiume costruisce nuova terra; nell'estuario il mare entra nel fiume con le maree."
    },
    {
      type: "text",
      title: "Passo 4: i laghi",
      html: `<p>Un <b>lago</b> è una massa d'acqua (di solito dolce) che riempie una <b>conca</b>, un \"buco\" del terreno. Non è collegato direttamente al mare. Viene alimentato da fiumi (gli <b>immissari</b>), da sorgenti sul fondo e dalla pioggia; spesso ne esce un fiume (l'<b>emissario</b>).</p>
<p>I laghi si classificano in base a come si è formata la conca:</p>
<ul>
<li>🧊 <b>Glaciali</b>: scavati dai ghiacciai durante le glaciazioni. Sono lunghi e stretti, come i grandi laghi prealpini: <b>Garda</b>, <b>Maggiore</b>, <b>Como</b>, <b>Iseo</b>, <b>Orta</b>. Sono glaciali anche i piccoli laghetti alpini.</li>
<li>🌋 <b>Vulcanici</b>: nel cratere di un vulcano spento. Sono quasi rotondi: <b>Bolsena</b>, <b>Bracciano</b>, <b>Vico</b>, <b>Albano</b> (nel Lazio).</li>
<li>🪨 <b>Tettonici</b>: in una conca creata dai movimenti della crosta terrestre, come il <b>Trasimeno</b> in Umbria.</li>
<li>🏖️ <b>Costieri</b>: vicino al mare, separati da strisce di sabbia, come <b>Lesina</b> e <b>Varano</b> in Puglia.</li>
<li>🏗️ <b>Artificiali</b>: creati dall'uomo con una <b>diga</b>, per avere acqua e produrre energia elettrica, come il lago di <b>Ceresole Reale</b> in Piemonte.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Che tipo di lago è?",
      widget: "classify",
      caption: "Metti ogni lago nel gruppo giusto.",
      options: {
        groups: ["🧊 Glaciale", "🌋 Vulcanico", "🏖️ Costiero", "🏗️ Artificiale"],
        items: [
          ["Lago di Garda", 0], ["Lago Maggiore", 0], ["Lago di Como", 0],
          ["Lago di Bolsena", 1], ["Lago di Bracciano", 1], ["Lago di Albano", 1],
          ["Lago di Lesina", 2], ["Lago di Varano", 2],
          ["Lago di Ceresole Reale (con diga)", 3]
        ]
      }
    },
    {
      type: "example",
      title: "Esempio pratico: il viaggio del Po",
      html: `<p>Il <b>Po</b> è il fiume più lungo d'Italia: <b>652 km</b>.</p>
<ul>
<li>Nasce in <b>Piemonte</b>, al <b>Pian del Re</b> (circa 2000 m), ai piedi del <b>Monviso</b>.</li>
<li>Scende veloce nella valle, poi arriva in pianura e attraversa <b>Torino</b>.</li>
<li>Scorre da Ovest a Est attraversando la <b>Pianura Padana</b>, tra Piemonte, Lombardia, Emilia-Romagna e Veneto, passando vicino a Piacenza, Cremona e Ferrara.</li>
<li>Riceve più di 140 affluenti.</li>
<li>Sfocia nel <b>Mar Adriatico</b> con un grande <b>delta</b>, tra Veneto ed Emilia-Romagna, oggi parco naturale.</li>
</ul>
<p>Dopo il Po, i fiumi più lunghi d'Italia sono l'<b>Adige</b> (circa 410 km) e il <b>Tevere</b> (circa 405 km), che attraversa Roma.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: a che cosa ci servono fiumi e laghi?",
      html: `<ul>
<li>🚰 <b>Acqua</b> da bere e per le case (dopo essere stata depurata).</li>
<li>🌾 <b>Irrigazione</b>: canali che portano l'acqua ai campi. La Pianura Padana è piena di canali, come il <b>Canale Cavour</b> in Piemonte.</li>
<li>⚡ <b>Energia</b>: le dighe e le centrali idroelettriche trasformano la forza dell'acqua che cade in elettricità.</li>
<li>🚢 <b>Trasporti</b>: un tempo barche e chiatte portavano merci sui fiumi; ancora oggi sul Reno e sul Danubio navigano grandi navi.</li>
<li>🐟 <b>Pesca</b>, sport e turismo: canoa, vela, nuoto nei laghi.</li>
<li>🏙️ Molte <b>città</b> sono nate sui fiumi: Roma sul Tevere, Firenze sull'Arno, Torino sul Po, Parigi sulla Senna, Londra sul Tamigi.</li>
</ul>
<p>Ma i fiumi vanno <b>rispettati</b>: possono straripare e causare <b>alluvioni</b>. Per questo non si deve costruire troppo vicino agli argini, e bisogna tenere i fiumi puliti.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… nel lago Bajkal c'è un quinto dell'acqua dolce dei laghi del mondo?",
      html: `<p>Il lago <b>Bajkal</b>, in Siberia (Russia), è il lago più <b>profondo</b> del mondo: <b>1642 metri</b>! Contiene circa il <b>20%</b> di tutta l'acqua dolce liquida dei laghi e dei fiumi della Terra. È anche uno dei più antichi: ha circa 25 milioni di anni. D'inverno gela e il ghiaccio è così spesso che ci passano sopra le automobili.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il \"lago\" più grande del mondo si chiama mare?",
      html: `<p>Il <b>Mar Caspio</b>, tra Europa e Asia, è in realtà il lago più grande del mondo: circa <b>371.000 km²</b>, più grande dell'Italia (circa 302.000 km²)! Si chiama \"mare\" perché la sua acqua è un po' <b>salata</b>. Il più grande lago di acqua dolce è il <b>Lago Superiore</b>, tra Canada e Stati Uniti.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… Nilo o Rio delle Amazzoni?",
      html: `<p>Il <b>Nilo</b> (circa 6650 km) e il <b>Rio delle Amazzoni</b> (circa 6400 km, ma alcuni studiosi dicono di più) si contendono il titolo di fiume più lungo del mondo: dipende da dove si mette la sorgente! Sulla quantità d'acqua invece non c'è gara: il Rio delle Amazzoni porta al mare circa <b>un quinto</b> di tutta l'acqua dei fiumi del mondo.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire fiumi e laghi",
      intro: "Se le parole sono tante, prova a vedere il fiume in modo diverso.",
      tabs: [
        {
          label: "🌳 Il fiume come un albero",
          html: `<p>Guarda un fiume dall'alto con tutti i suoi affluenti: sembra un <b>albero</b> rovesciato!</p>
<ul>
<li>le <b>radici</b> e i rametti più piccoli sono i ruscelli in montagna;</li>
<li>i <b>rami</b> sono gli affluenti;</li>
<li>il <b>tronco</b> è il fiume principale;</li>
<li>il punto dove il tronco tocca terra è la <b>foce</b>.</li>
</ul>
<p>E tutta la chioma dell'albero? È il <b>bacino idrografico</b>. In inglese il fiume con gli affluenti si chiama proprio <i>river system</i>, e le forme ad albero si chiamano <b>dendritiche</b> (dal greco <i>déndron</i>, albero).</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<path d="M300 250 L300 160" stroke="#2563eb" stroke-width="12"/>
<path d="M300 160 Q240 120 180 90 M300 160 Q360 120 420 90 M300 190 Q230 180 160 170 M300 190 Q380 185 450 165" stroke="#2563eb" stroke-width="7" fill="none"/>
<path d="M180 90 Q150 60 120 40 M180 90 Q190 55 200 30 M420 90 Q450 60 480 40 M420 90 Q400 55 390 25 M160 170 Q120 150 90 130 M450 165 Q490 145 520 120" stroke="#60a5fa" stroke-width="4" fill="none"/>
<text x="310" y="245" font-size="15" fill="#1e3a8a" font-weight="bold">foce (tronco)</text>
<text x="440" y="200" font-size="15" fill="#1e3a8a" font-weight="bold">affluenti (rami)</text>
<text x="60" y="30" font-size="15" fill="#1e3a8a" font-weight="bold">ruscelli e sorgenti</text>
</svg>`
        },
        {
          label: "🧪 L'esperimento del vassoio",
          html: `<p>Costruisci un fiume in miniatura:</p>
<ol>
<li>Metti della <b>sabbia</b> umida in un vassoio da forno, più alta da una parte (la \"montagna\").</li>
<li>Appoggia il vassoio un po' inclinato, con la parte bassa sopra un lavandino o una bacinella (il \"mare\").</li>
<li>Versa piano l'acqua da un bicchiere sulla parte alta.</li>
</ol>
<p>Osserva: l'acqua scava un <b>solco</b> (la valle), si divide e si riunisce (affluenti e confluenze), in basso rallenta e lascia la sabbia formando un piccolo <b>delta</b>! Se fai un buco nella sabbia, l'acqua lo riempie: ecco un <b>lago</b> con il suo immissario e il suo emissario.</p>`
        },
        {
          label: "🌍 I grandi fiumi del mondo",
          html: `<p>Ruota il globo e trova le foci dei fiumi più famosi. Nota che le grandi civiltà antiche sono nate vicino ai fiumi: Egizi sul Nilo, Sumeri tra Tigri ed Eufrate, Indiani sull'Indo, Cinesi sul Fiume Giallo.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.5, lon: 31.0, label: "Nilo (~6650 km)", color: "#2563eb" },
              { lat: -0.5, lon: -50.0, label: "Rio delle Amazzoni (~6400 km)", color: "#16a34a" },
              { lat: 31.4, lon: 121.9, label: "Yangtze (~6300 km)", color: "#f97316" },
              { lat: 29.0, lon: -89.3, label: "Mississippi", color: "#a855f7" },
              { lat: 45.2, lon: 29.6, label: "Danubio", color: "#0ea5e9" },
              { lat: 44.95, lon: 12.45, label: "Po (652 km)", color: "#dc2626" },
              { lat: 53.5, lon: 108.0, label: "Lago Bajkal", color: "#06b6d4" },
              { lat: 42.0, lon: 50.5, label: "Mar Caspio", color: "#06b6d4" }
            ]
          }
        },
        {
          label: "🇬🇧 Le parole in inglese",
          html: `<p>Gira le carte: molte parole in inglese assomigliano a quelle italiane!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🏞️ river", back: "fiume" },
              { front: "💧 spring / source", back: "sorgente" },
              { front: "🌊 mouth", back: "foce (\"bocca\" del fiume)" },
              { front: "🔀 tributary", back: "affluente" },
              { front: "〰️ meander", back: "meandro" },
              { front: "🏔️ glacier", back: "ghiacciaio" },
              { front: "🛶 lake", back: "lago" },
              { front: "🧱 dam", back: "diga" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: perché i fiumi e i laghi sono così? Tocca i nodi",
      nodes: [
        { id: "ciclo", label: "🌧️ Ciclo dell'acqua", x: 50, y: 5, color: "#0ea5e9", html: "Evaporazione, nuvole, pioggia e neve.", why: "Il Sole fa evaporare l'acqua dei mari; il vapore sale, si raffredda e forma le nuvole; poi cade come pioggia o neve. Che l'acqua dei fiumi venisse tutta dalla pioggia lo dimostrò il francese Pierre Perrault nel 1674, misurando la pioggia e l'acqua della Senna." },
        { id: "gravita", label: "⬇️ Gravità", x: 20, y: 25, color: "#7c3aed", html: "L'acqua scende sempre verso il basso.", why: "È la stessa forza che fa cadere le mele, descritta da Isaac Newton nel 1687. Più il terreno è ripido, più l'acqua accelera: per questo in montagna i fiumi sono veloci." },
        { id: "sorgente", label: "💧 Sorgente", x: 80, y: 25, color: "#06b6d4", html: "Dove il fiume nasce.", why: "L'acqua piovana penetra nelle rocce porose o fessurate, scorre sottoterra e riesce fuori dove trova uno strato di roccia impermeabile che la blocca." },
        { id: "erosione", label: "⛏️ Erosione", x: 20, y: 50, color: "#b45309", html: "L'acqua veloce scava e trasporta sassi.", why: "L'acqua che corre trascina sassi e sabbia che urtano il fondo come una lima: in migliaia di anni scava valli profonde. Il Gran Canyon è stato scavato dal fiume Colorado in alcuni milioni di anni." },
        { id: "deposito", label: "🏝️ Deposito", x: 50, y: 50, color: "#eab308", html: "L'acqua lenta lascia sabbia e limo.", why: "Più l'acqua è lenta, meno peso riesce a trasportare: prima lascia cadere i sassi, poi la sabbia, infine il limo finissimo. Così nascono le pianure alluvionali e i delta." },
        { id: "meandri", label: "〰️ Meandri e delta", x: 80, y: 55, color: "#2563eb", html: "Curve in pianura, foce a rami.", why: "Nella curva l'acqua è più veloce sulla sponda esterna (che viene scavata) e più lenta su quella interna (dove si deposita sabbia): la curva si allarga sempre di più. Il nome viene dal fiume Meandro, in Turchia, famoso per le sue curve." },
        { id: "ghiacciai", label: "🧊 Ghiacciai antichi", x: 25, y: 80, color: "#38bdf8", html: "Durante le glaciazioni scavarono grandi conche.", why: "Fino a circa 20.000 anni fa enormi lingue di ghiaccio scendevano dalle Alpi fino alla pianura. Scavarono conche profonde (il fondo del Lago di Como scende sotto il livello del mare!) e lasciarono colline di detriti, le morene, che fanno da diga." },
        { id: "laghi", label: "🛶 Laghi", x: 60, y: 90, color: "#0369a1", html: "Glaciali, vulcanici, tettonici, costieri, artificiali.", why: "Un lago nasce ovunque ci sia una conca che trattiene l'acqua: un cratere, una valle scavata dal ghiaccio, uno sprofondamento della crosta, una duna o una diga. Prima o poi i fiumi lo riempiono di detriti: anche i laghi, lentamente, \"invecchiano\"." }
      ],
      edges: [
        ["ciclo", "sorgente", "alimenta la"],
        ["ciclo", "gravita", "l'acqua cade per"],
        ["gravita", "erosione", "acqua veloce:"],
        ["erosione", "deposito", "i detriti finiscono nel"],
        ["deposito", "meandri", "forma"],
        ["sorgente", "meandri", "il fiume scorre fino a"],
        ["ghiacciai", "laghi", "scavano le conche dei"],
        ["erosione", "ghiacciai", "anche il ghiaccio scava:"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Il fiume nasce dalla <b>sorgente</b>, scorre nel suo <b>letto</b> e finisce alla <b>foce</b>.</li>
<li>In montagna è <b>veloce</b> e scava valli a V; in pianura è <b>lento</b> e forma i <b>meandri</b>.</li>
<li>Gli <b>affluenti</b> si gettano in un fiume più grande; il <b>torrente</b> può restare asciutto d'estate.</li>
<li>La foce può essere a <b>delta</b> (tanti rami) o a <b>estuario</b> (una bocca a imbuto).</li>
<li>Il <b>lago</b> riempie una conca: può essere glaciale, vulcanico, tettonico, costiero o artificiale. Il fiume che entra è l'<b>immissario</b>, quello che esce l'<b>emissario</b>.</li>
<li>Il Po (652 km) è il fiume più lungo d'Italia; il Garda è il lago più grande.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: i laghi",
      questions: [
        { type: "mc", q: "Come si chiama il fiume che esce da un lago?", options: ["Immissario", "Emissario", "Affluente"], answer: 1, explain: "L'emissario esce, l'immissario entra (\"im\" = dentro)." },
        { type: "mc", q: "I laghi di Bolsena e Bracciano, quasi rotondi, sono di origine…", options: ["glaciale", "vulcanica", "artificiale"], answer: 1, explain: "Si trovano nei crateri di antichi vulcani del Lazio." },
        { type: "mc", q: "Qual è il lago più grande d'Italia?", options: ["Lago di Como", "Lago di Garda", "Lago Trasimeno"], answer: 1, explain: "Il Lago di Garda, circa 370 km²." }
      ]
    }
  ],
  glossary: [
    { t: "Sorgente", d: "Il punto dove nasce un fiume." },
    { t: "Foce", d: "Il punto dove un fiume finisce, nel mare, in un lago o in un altro fiume." },
    { t: "Letto (alveo)", d: "Il solco in cui scorre l'acqua del fiume." },
    { t: "Argine", d: "Rialzo di terra lungo il fiume che impedisce all'acqua di uscire." },
    { t: "Affluente", d: "Fiume che si getta in un altro fiume." },
    { t: "Confluenza", d: "Punto in cui due fiumi si uniscono." },
    { t: "Torrente", d: "Corso d'acqua con molta acqua dopo le piogge e poca o nessuna d'estate." },
    { t: "Meandro", d: "Grande curva a forma di S che il fiume forma in pianura." },
    { t: "Delta", d: "Foce divisa in tanti rami, a forma di triangolo." },
    { t: "Estuario", d: "Foce a un solo ramo, larga, a forma di imbuto." },
    { t: "Bacino idrografico", d: "Territorio da cui tutte le acque finiscono in un certo fiume." },
    { t: "Immissario / Emissario", d: "Il fiume che entra in un lago / il fiume che esce da un lago." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine il viaggio del fiume.", items: ["Sorgente", "Corso superiore (montagna)", "Corso inferiore (pianura)", "Foce"], explain: "Il fiume nasce in montagna e finisce alla foce." },
      { type: "mc", q: "Da dove viene l'acqua dei fiumi?", options: ["Dalla pioggia, dalla neve e dai ghiacciai", "Solo dal mare", "Dai rubinetti"], answer: 0, explain: "È l'acqua del ciclo dell'acqua: pioggia, neve e ghiaccio che si scioglie." },
      { type: "text", q: "Come si chiama un fiume che si getta in un altro fiume?", answer: ["affluente", "un affluente", "l'affluente"], explain: "Si chiama affluente; il punto d'incontro è la confluenza." },
      { type: "tf", q: "In pianura l'acqua del fiume è più veloce che in montagna.", answer: false, explain: "In pianura il terreno è quasi piatto e l'acqua rallenta." },
      { type: "mc", q: "Qual è il fiume più lungo d'Italia?", options: ["Il Tevere", "L'Arno", "Il Po"], answer: 2, explain: "Il Po, 652 km, nasce dal Monviso e sfocia nell'Adriatico." },
      { type: "num", q: "Il Po è lungo 652 km e il Tevere 405 km. Quanti km è più lungo il Po?", answer: 247, tol: 0, unit: "km", explain: "652 − 405 = 247 km." },
      { type: "mc", q: "Una foce divisa in tanti rami a forma di triangolo si chiama…", options: ["estuario", "delta", "meandro"], answer: 1, explain: "Delta, come la lettera greca Δ." },
      { type: "mc", q: "Che cos'è un torrente?", options: ["Un fiume che d'estate può restare quasi asciutto", "Un lago di montagna", "Un fiume che non ha foce"], answer: 0, explain: "I torrenti dipendono dalle piogge: d'estate possono seccarsi." },
      { type: "mc", q: "I grandi laghi del Nord Italia (Garda, Maggiore, Como) sono di origine…", options: ["vulcanica", "glaciale", "costiera"], answer: 1, explain: "Le loro conche furono scavate dai ghiacciai delle glaciazioni." },
      { type: "tf", q: "L'emissario è il fiume che esce da un lago.", answer: true, explain: "L'immissario entra, l'emissario esce." },
      { type: "mc", q: "Qual è il lago più profondo del mondo?", options: ["Il Mar Caspio", "Il Bajkal", "Il Lago di Garda"], answer: 1, explain: "Il Bajkal, in Siberia, profondo 1642 metri." },
      { type: "text", q: "Come si chiama la grande curva a forma di S che il fiume fa in pianura?", answer: ["meandro", "il meandro", "meandri"], explain: "Il meandro." }
    ],
    gen: [["sub100", 2]]
  }
});

TOPIC('it', {
  id: "p5-ita-lessico",
  title: "Il lessico",
  intro: "Il <b>lessico</b> è l'insieme delle parole di una lingua. Le parole hanno amiche (<b>sinonimi</b>), nemiche (<b>contrari</b>), famiglie, e si possono costruire come mattoncini con <b>prefissi</b> e <b>suffissi</b>. Più parole conosci, meglio riesci a dire quello che pensi!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Che cos'è il lessico",
      html: `<p>Il <b>lessico</b> (o <b>vocabolario</b>) è l'insieme di tutte le parole di una lingua. Ognuno di noi ha poi il suo <b>lessico personale</b>: le parole che conosce e usa.</p>
<p>Il linguista <b>Tullio De Mauro</b> ha calcolato che circa <b>7.000 parole</b> formano il <b>vocabolario di base</b> dell'italiano: sono quelle che servono per capire quasi tutto ciò che leggiamo e ascoltiamo ogni giorno. I grandi dizionari, però, ne contengono più di <b>250.000</b>!</p>
<p>Per arricchire il lessico: leggere tanto, usare il dizionario, giocare con le parole, chiedersi da dove vengono.</p>`
    },
    {
      type: "text",
      title: "Sinonimi, contrari, omonimi",
      html: `<ul>
<li><b>Sinonimi</b>: parole con significato <b>uguale o simile</b>. <i>Casa – abitazione</i>, <i>bello – carino – stupendo</i>, <i>iniziare – cominciare</i>. Attenzione: raramente sono perfettamente uguali; ognuno ha la sua \"sfumatura\" (<i>carino</i> è meno di <i>stupendo</i>).</li>
<li><b>Contrari</b> (antonimi): parole con significato <b>opposto</b>. <i>Alto – basso</i>, <i>aprire – chiudere</i>, <i>felice – infelice</i>. Alcuni si formano con un prefisso: <i>utile → inutile</i>, <i>onesto → disonesto</i>.</li>
<li><b>Omonimi</b>: parole che si scrivono (e/o si pronunciano) <b>uguali</b> ma hanno <b>significati diversi</b>. <i>Riso</i> (cereale / il ridere), <i>miglio</i> (unità di misura / cereale), <i>pesca</i> (frutto / il pescare: qui cambia la pronuncia della <i>e</i>!).</li>
<li><b>Parole polisemiche</b>: una parola con <b>più significati collegati</b>: <i>la penna</i> dell'uccello e la <i>penna</i> per scrivere (le prime penne erano proprio penne d'oca!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Gioco: abbina i sinonimi",
      widget: "match",
      options: { pairs: [["veloce", "rapido"], ["paura", "timore"], ["regalo", "dono"], ["guardare", "osservare"], ["allegro", "contento"], ["finire", "terminare"]] },
      caption: "Collega ogni parola al suo sinonimo."
    },
    {
      type: "text",
      title: "Come nascono le parole: radice, prefissi, suffissi",
      html: `<p>Molte parole si costruiscono partendo da una <b>parola primitiva</b> (che non deriva da altre parole italiane), come <i>mare</i>, <i>fiore</i>, <i>giocare</i>.</p>
<ul>
<li>La <b>radice</b> è la parte che porta il significato: <b>fior</b>-e, <b>fior</b>-aio, <b>fior</b>-ire.</li>
<li>Il <b>prefisso</b> si mette <b>prima</b> della radice e cambia il significato: <i><b>ri</b>fare</i> (fare di nuovo), <i><b>s</b>contento</i> (non contento), <i><b>pre</b>vedere</i> (vedere prima), <i><b>super</b>mercato</i>, <i><b>sotto</b>passaggio</i>.</li>
<li>Il <b>suffisso</b> si mette <b>dopo</b> la radice e crea una parola nuova: <i>fior<b>aio</b></i> (mestiere), <i>gioca<b>tore</b></i> (chi fa), <i>gentil<b>ezza</b></i> (qualità), <i>lava<b>trice</b></i> (strumento), <i>mangi<b>abile</b></i> (che si può…).</li>
</ul>
<p>Le parole così ottenute si chiamano <b>derivate</b>. Tutte le parole con la stessa radice formano una <b>famiglia di parole</b>.</p>`
    },
    {
      type: "svg",
      title: "L'albero della famiglia di \"mare\"",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#ecfeff"/>
<rect x="300" y="200" width="40" height="110" fill="#92400e"/>
<ellipse cx="320" cy="140" rx="290" ry="115" fill="#86efac"/>
<rect x="250" y="250" width="140" height="44" rx="10" fill="#0369a1"/>
<text x="320" y="279" font-size="22" text-anchor="middle" fill="#ffffff" font-weight="bold">MARE</text>
<g font-size="17" text-anchor="middle" font-weight="bold">
<rect x="70" y="60" width="120" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="130" y="84" fill="#166534">mar<tspan fill="#dc2626">ino</tspan></text>
<rect x="210" y="40" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="275" y="64" fill="#166534">mar<tspan fill="#dc2626">inaio</tspan></text>
<rect x="360" y="40" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="425" y="64" fill="#166534">mar<tspan fill="#dc2626">ittimo</tspan></text>
<rect x="470" y="100" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="535" y="124" fill="#166534">mar<tspan fill="#dc2626">ea</tspan></text>
<rect x="60" y="130" width="160" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="140" y="154" fill="#166534"><tspan fill="#2563eb">sotto</tspan>mar<tspan fill="#dc2626">ino</tspan></text>
<rect x="240" y="110" width="160" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="320" y="134" fill="#166534"><tspan fill="#2563eb">oltre</tspan>mare</text>
<rect x="420" y="170" width="170" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="505" y="194" fill="#166534">mare<tspan fill="#dc2626">ggiata</tspan></text>
<rect x="70" y="190" width="150" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="145" y="214" fill="#166534">mar<tspan fill="#dc2626">oso</tspan></text>
</g>
<text x="20" y="310" font-size="14" fill="#1d4ed8">blu = prefisso</text>
<text x="520" y="310" font-size="14" fill="#b91c1c">rosso = suffisso</text>
</svg>`,
      caption: "Tutte queste parole hanno la radice «mar-»: formano la famiglia di parole di «mare»."
    },
    {
      type: "text",
      title: "Alterati e composti",
      html: `<p>I <b>nomi alterati</b> cambiano un po' il significato del nome con un suffisso, senza creare una cosa nuova:</p>
<ul>
<li><b>diminutivi</b> (più piccolo): <i>gatt<b>ino</b>, cas<b>etta</b>, libr<b>icino</b></i>;</li>
<li><b>accrescitivi</b> (più grande): <i>librone, nas<b>one</b></i>;</li>
<li><b>vezzeggiativi</b> (con affetto): <i>orsacch<b>iotto</b>, cag<b>nolino</b></i>;</li>
<li><b>dispregiativi</b> (con disprezzo): <i>temp<b>accio</b>, libr<b>accio</b></i>.</li>
</ul>
<p>⚠️ <b>Falsi alterati</b>: <i>tacchino</i> non è un piccolo tacco, <i>mattone</i> non è un grande matto, <i>bottone</i> non è una grande botte, <i>burrone</i> non è tanto burro! 😄</p>
<p>I <b>nomi composti</b> sono formati da <b>due parole unite</b>: <i>capo + stazione = capostazione</i>, <i>apri + scatole = apriscatole</i>, <i>arco + baleno = arcobaleno</i>, <i>pesce + spada = pescespada</i>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: le parole e le loro famiglie",
      questions: [
        { type: "mc", q: "Qual è il contrario di «generoso»?", options: ["gentile", "avaro", "buono"], answer: 1, explain: "Generoso = che dà volentieri; avaro = che non vuole dare." },
        { type: "mc", q: "Nella parola «rileggere», «ri-» è…", options: ["un suffisso", "un prefisso", "la radice"], answer: 1, explain: "Sta prima della radice e significa «di nuovo»: prefisso." },
        { type: "tf", q: "«Tacchino» è il diminutivo di «tacco».", answer: false, explain: "È un falso alterato: il tacchino è un animale, non un piccolo tacco!" },
        { type: "mc", q: "Quale parola NON fa parte della famiglia di «fiore»?", options: ["fioraio", "fiorire", "fiume"], answer: 2, explain: "«Fiume» non ha la radice fior-: è un'altra famiglia." }
      ]
    },
    {
      type: "example",
      title: "Esempio: arricchire una frase con i sinonimi",
      html: `<p>Frase \"povera\": «Il film era <b>bello</b>, la musica era <b>bella</b> e anche i costumi erano <b>belli</b>.»</p>
<p>Frase \"ricca\": «Il film era <b>appassionante</b>, la musica era <b>coinvolgente</b> e i costumi erano <b>eleganti</b>.»</p>
<p>Vedi? Con i sinonimi giusti si evitano le <b>ripetizioni</b> e si dice <b>di più</b>: ogni parola aggiunge un'informazione precisa. Il <b>dizionario dei sinonimi e dei contrari</b> è un ottimo amico di chi scrive.</p>`
    },
    {
      type: "example",
      title: "Esempio: indovina il significato con i pezzi",
      html: `<p>Trovi una parola nuova: <b>«irraggiungibile»</b>. Non sai che cosa significa? Smontala!</p>
<ul>
<li><b>ir-</b> = prefisso negativo (\"non\"), come in <i>ir</i>regolare;</li>
<li><b>raggiung-</b> = radice di <i>raggiungere</i>;</li>
<li><b>-ibile</b> = suffisso \"che si può\", come in <i>leggibile</i>.</li>
</ul>
<p>Risultato: «<b>che non si può raggiungere</b>». Così capisci tantissime parole nuove senza aprire il dizionario!</p>`
    },
    {
      type: "widget",
      title: "Flashcard: prefissi e suffissi",
      widget: "flashcards",
      options: {
        cards: [
          { front: "ri- (rifare)", back: "di nuovo" },
          { front: "in- / im- / s- / dis- (infelice, impossibile, scontento, disonesto)", back: "non, contrario" },
          { front: "pre- (prevedere)", back: "prima" },
          { front: "sotto- / sub- (sottomarino, subacqueo)", back: "sotto" },
          { front: "super- / iper- (supermercato, ipermercato)", back: "sopra, molto grande" },
          { front: "-aio / -ista (fioraio, dentista)", back: "mestiere" },
          { front: "-tore / -trice (giocatore, lavatrice)", back: "chi o che cosa fa l'azione" },
          { front: "-ezza / -ità (bellezza, bontà)", back: "qualità astratta" },
          { front: "-abile / -ibile (lavabile, leggibile)", back: "che si può…" }
        ]
      },
      caption: "Gira le carte: sul fronte il prefisso o suffisso, sul retro il significato."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il primo vocabolario italiano",
      html: `<p>Il primo grande vocabolario della lingua italiana fu pubblicato a Venezia nel <b>1612</b> dall'<b>Accademia della Crusca</b> di Firenze. Il nome è curioso: la crusca è lo scarto della farina. Gli accademici volevano \"setacciare\" la lingua, separando le parole buone (la farina) da quelle da scartare (la crusca)! Il simbolo dell'Accademia è infatti un <b>frullone</b>, il setaccio per la farina.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Parole che viaggiano",
      html: `<p>L'italiano ha preso parole da tante lingue (<b>prestiti</b>): dall'arabo <i>zucchero, arancia, magazzino, algebra</i>; dal francese <i>giardino, bistecca</i> (dall'inglese <i>beef-steak</i>!); dall'inglese <i>computer, sport, weekend</i>. E l'italiano ne ha regalate tante al mondo: <i>pizza, spaghetti, piano, opera, ciao, bravo</i> si usano in moltissime lingue!</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Sinonimi</b> = significato simile; <b>contrari</b> = significato opposto; <b>omonimi</b> = stessa forma, significati diversi.</li>
<li>Parola <b>primitiva</b> → con prefissi/suffissi diventa <b>derivata</b>; stessa radice = stessa <b>famiglia</b>.</li>
<li><b>Prefisso</b> prima della radice, <b>suffisso</b> dopo.</li>
<li><b>Alterati</b>: diminutivi, accrescitivi, vezzeggiativi, dispregiativi (attenzione ai falsi alterati!). <b>Composti</b>: due parole unite.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire come si costruiscono le parole",
      intro: "Le parole si possono vedere come mattoncini, come radici di latino e greco, come nell'inglese… oppure si possono ordinare in una scala di intensità.",
      tabs: [
        {
          label: "🧱 I mattoncini",
          html: `<p>Pensa a una parola come a una costruzione di <b>mattoncini</b>: al centro c'è il <b>mattoncino-radice</b> (il significato), davanti puoi agganciare un <b>prefisso</b>, dietro un <b>suffisso</b>.</p>
<p>Con la radice <b>-lav-</b>: lav<b>are</b>, lav<b>atrice</b>, lav<b>abile</b>, <b>ri</b>lavare, lav<b>andino</b>, lav<b>aggio</b>… Una radice, tante costruzioni!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<rect x="40" y="70" width="140" height="70" rx="6" fill="#3b82f6"/><circle cx="75" cy="64" r="10" fill="#3b82f6"/><circle cx="145" cy="64" r="10" fill="#3b82f6"/>
<text x="110" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">im-</text>
<rect x="190" y="70" width="200" height="70" rx="6" fill="#16a34a"/><circle cx="240" cy="64" r="10" fill="#16a34a"/><circle cx="340" cy="64" r="10" fill="#16a34a"/>
<text x="290" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">mangi</text>
<rect x="400" y="70" width="160" height="70" rx="6" fill="#dc2626"/><circle cx="440" cy="64" r="10" fill="#dc2626"/><circle cx="520" cy="64" r="10" fill="#dc2626"/>
<text x="480" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">-abile</text>
<text x="110" y="170" font-size="16" text-anchor="middle">prefisso: non</text>
<text x="290" y="170" font-size="16" text-anchor="middle">radice: mangiare</text>
<text x="480" y="170" font-size="16" text-anchor="middle">suffisso: che si può</text>
<text x="300" y="205" font-size="20" text-anchor="middle" font-weight="bold" fill="#1f2937">immangiabile = che non si può mangiare</text>
</svg>`
        },
        {
          label: "🏛️ Radici latine e greche",
          html: `<p>Moltissime parole italiane hanno <b>radici latine o greche</b>. Se impari le radici, capisci intere famiglie di parole!</p>
<ul>
<li><b>tele-</b> (greco: lontano): telefono, televisione, telescopio.</li>
<li><b>-fono</b> (greco: suono, voce): telefono, microfono, megafono.</li>
<li><b>-scopio</b> (greco: osservare): microscopio, telescopio.</li>
<li><b>bio-</b> (greco: vita): biologia, biografia.</li>
<li><b>aqua</b> (latino: acqua): acquario, acquedotto, acquatico.</li>
</ul>
<p>Abbina la radice al suo significato:</p>`,
          widget: "match",
          options: { pairs: [["tele-", "lontano"], ["micro-", "piccolo"], ["-fono", "suono"], ["bio-", "vita"], ["-grafia", "scrittura"], ["geo-", "terra"]] }
        },
        {
          label: "🇬🇧 In inglese è uguale!",
          html: `<p>Anche in inglese le parole si costruiscono con prefissi e suffissi, spesso <b>gli stessi</b> perché vengono dal latino:</p>
<table>
<tr><th>Inglese</th><th>Italiano</th><th>Che cosa fa</th></tr>
<tr><td><b>un</b>happy</td><td><b>in</b>felice</td><td>contrario</td></tr>
<tr><td><b>re</b>write</td><td><b>ri</b>scrivere</td><td>di nuovo</td></tr>
<tr><td>play<b>er</b></td><td>gioca<b>tore</b></td><td>chi fa</td></tr>
<tr><td>wash<b>able</b></td><td>lav<b>abile</b></td><td>che si può</td></tr>
<tr><td>kind<b>ness</b></td><td>gentil<b>ezza</b></td><td>qualità</td></tr>
</table>
<p>Conoscere i \"pezzi\" ti aiuta a imparare due lingue alla volta!</p>`
        },
        {
          label: "🌡️ Il termometro delle parole",
          html: `<p>I sinonimi non sono tutti uguali: hanno <b>intensità</b> diverse. Mettili su un <b>termometro</b>, dal più debole al più forte:</p>
<ul>
<li>😐 <b>contento</b> → 🙂 <b>felice</b> → 😄 <b>entusiasta</b> → 🤩 <b>euforico</b></li>
<li>🌤️ <b>tiepido</b> → ☀️ <b>caldo</b> → 🔥 <b>bollente</b> → 🌋 <b>rovente</b></li>
<li>🤏 <b>piccolo</b> → 🐜 <b>minuscolo</b> → 🔬 <b>microscopico</b></li>
</ul>
<p>Scegliere la parola giusta sul termometro rende i tuoi testi precisi. Prova a classificare: queste parole sono \"deboli\" o \"forti\"?</p>`,
          widget: "classify",
          options: { groups: ["Intensità debole", "Intensità forte"], items: [["contento", 0], ["tiepido", 0], ["carino", 0], ["stanco", 0], ["euforico", 1], ["rovente", 1], ["stupendo", 1], ["sfinito", 1]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del lessico",
      nodes: [
        { id: "lessico", label: "Lessico", x: 50, y: 6, color: "#2563eb", html: "L'insieme delle parole di una lingua (o di una persona).", why: "Dal greco <i>léxis</i> = \"parola\". Il lessico cambia sempre: nascono parole nuove (neologismi) e altre spariscono, perché cambia il mondo che descriviamo." },
        { id: "significato", label: "Rapporti di significato", x: 22, y: 30, color: "#16a34a", html: "Sinonimi, contrari, omonimi, parole polisemiche.", why: "Le parole non sono isolate: il loro significato si capisce anche dal confronto con le altre (caldo si capisce meglio accanto a freddo)." },
        { id: "sinonimi", label: "Sinonimi e contrari", x: 10, y: 56, color: "#22c55e", html: "Sinonimi: significato simile. Contrari: significato opposto.", why: "Dal greco <i>syn</i> (insieme) + <i>ónoma</i> (nome) e <i>antí</i> (contro) + <i>ónoma</i>. I sinonimi perfetti sono rarissimi: ogni lingua tende a dare a ogni parola una sfumatura sua." },
        { id: "omonimi", label: "Omonimi", x: 32, y: 56, color: "#14b8a6", html: "Stessa forma, significati diversi: riso (cereale) / riso (risata).", why: "Spesso nascono da parole latine diverse che, cambiando nei secoli, sono diventate uguali: <i>oryza</i> → riso (cereale), <i>risus</i> → riso (risata)." },
        { id: "formazione", label: "Formazione delle parole", x: 75, y: 30, color: "#dc2626", html: "Da una parola primitiva si creano derivate, alterate e composte.", why: "È il modo più economico per creare parole nuove: invece di inventare suoni nuovi si ricombinano pezzi già noti, che tutti capiscono." },
        { id: "radice", label: "Radice", x: 60, y: 56, color: "#f59e0b", html: "La parte della parola che porta il significato.", why: "Molte radici italiane vengono dal latino (e alcune dal greco): conoscerle aiuta a capire intere famiglie di parole." },
        { id: "affissi", label: "Prefissi e suffissi", x: 85, y: 56, color: "#a855f7", html: "Prefisso prima della radice, suffisso dopo.", why: "Molti erano parole latine autonome (<i>sub</i> = sotto, <i>super</i> = sopra, <i>re-</i> = di nuovo) che si sono \"incollate\" alle altre parole." },
        { id: "famiglia", label: "Famiglia di parole", x: 60, y: 82, color: "#0ea5e9", html: "Tutte le parole con la stessa radice: mare, marino, marinaio…", why: "Come in una famiglia vera, hanno un \"antenato\" comune: la parola primitiva." },
        { id: "alterati", label: "Alterati e composti", x: 88, y: 82, color: "#ec4899", html: "Alterati: gattino, librone, tempaccio. Composti: arcobaleno, apriscatole.", why: "Gli alterati non creano una cosa nuova ma aggiungono un'idea di grandezza o un'emozione; i composti uniscono due significati in uno." },
        { id: "dizionario", label: "Dizionario", x: 22, y: 82, color: "#64748b", html: "Il libro (o l'app) che raccoglie e spiega le parole.", why: "Il primo grande vocabolario italiano è quello dell'Accademia della Crusca (1612). Oggi i dizionari sono anche digitali e si aggiornano ogni anno con parole nuove." }
      ],
      edges: [
        ["lessico", "significato", "si studia per"],
        ["lessico", "formazione", "cresce con la"],
        ["significato", "sinonimi", ""],
        ["significato", "omonimi", ""],
        ["formazione", "radice", "parte dalla"],
        ["formazione", "affissi", "usa"],
        ["radice", "famiglia", "crea una"],
        ["affissi", "alterati", "creano"],
        ["lessico", "dizionario", "raccolto nel"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: alterati e prefissi",
      questions: [
        { type: "mc", q: "«Ventaccio» è un nome…", options: ["diminutivo", "accrescitivo", "dispregiativo"], answer: 2, explain: "Il suffisso -accio indica qualcosa di brutto o cattivo: dispregiativo." },
        { type: "mc", q: "Quale parola è composta?", options: ["portafoglio", "fogliolina", "sfogliare"], answer: 0, explain: "Porta + foglio: due parole unite." },
        { type: "mc", q: "Il contrario di «possibile» si forma con il prefisso…", options: ["dis-", "im-", "s-"], answer: 1, explain: "Im-possibile (davanti a p e b «in-» diventa «im-»)." }
      ]
    }
  ],
  glossary: [
    { t: "Lessico", d: "Insieme delle parole di una lingua o di una persona." },
    { t: "Sinonimi", d: "Parole con significato uguale o simile." },
    { t: "Contrari (antonimi)", d: "Parole con significato opposto." },
    { t: "Omonimi", d: "Parole uguali nella forma ma con significati diversi." },
    { t: "Parola primitiva", d: "Parola che non deriva da altre parole italiane (mare, fiore)." },
    { t: "Parola derivata", d: "Parola formata da una primitiva con prefissi o suffissi (marinaio)." },
    { t: "Prefisso", d: "Elemento posto prima della radice che ne modifica il significato (ri-, in-, pre-)." },
    { t: "Suffisso", d: "Elemento posto dopo la radice per formare nuove parole (-aio, -tore, -ezza)." },
    { t: "Nome alterato", d: "Nome modificato con un suffisso: diminutivo, accrescitivo, vezzeggiativo, dispregiativo." },
    { t: "Nome composto", d: "Nome formato da due parole unite (arcobaleno)." },
    { t: "Prestito", d: "Parola presa da un'altra lingua (computer, zucchero)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Qual è un sinonimo di «iniziare»?", options: ["finire", "cominciare", "continuare"], answer: 1, explain: "Iniziare e cominciare hanno lo stesso significato." },
      { type: "mc", q: "Qual è il contrario di «coraggioso»?", options: ["pauroso", "forte", "audace"], answer: 0, explain: "Pauroso è l'opposto di coraggioso; audace è un sinonimo." },
      { type: "tf", q: "«Riso» (il cereale) e «riso» (la risata) sono omonimi.", answer: true, explain: "Stessa forma, significati diversi." },
      { type: "mc", q: "Nella parola «giocatore», «-tore» è…", options: ["un prefisso", "un suffisso", "la radice"], answer: 1, explain: "Sta dopo la radice e indica chi compie l'azione." },
      { type: "mc", q: "Quale di queste è una parola primitiva?", options: ["pane", "panettiere", "panino"], answer: 0, explain: "Pane è la primitiva; panettiere e panino derivano da pane." },
      { type: "mc", q: "«Casetta» è un nome…", options: ["accrescitivo", "diminutivo", "composto"], answer: 1, explain: "Il suffisso -etta indica qualcosa di piccolo." },
      { type: "text", q: "Come si chiama l'elemento che si mette PRIMA della radice (es. «ri-» in «rifare»)?", answer: ["prefisso", "il prefisso", "un prefisso"], explain: "Il prefisso." },
      { type: "tf", q: "«Mattone» è l'accrescitivo di «matto».", answer: false, explain: "È un falso alterato: mattone ha un significato tutto suo." },
      { type: "mc", q: "Quale parola NON appartiene alla famiglia di «terra»?", options: ["terreno", "atterrare", "terrazza", "termometro"], answer: 3, explain: "«Termometro» viene dal greco «thermós» (caldo), non da terra." },
      { type: "num", q: "Secondo Tullio De Mauro, circa quante parole formano il vocabolario di base dell'italiano?", answer: 7000, tol: 500, explain: "Circa 7.000 parole." },
      { type: "mc", q: "In che anno uscì il primo Vocabolario degli Accademici della Crusca?", options: ["1312", "1612", "1912"], answer: 1, explain: "Nel 1612, a Venezia." },
      { type: "order", q: "Ordina dal meno intenso al più intenso.", items: ["tiepido", "caldo", "bollente"], explain: "Tiepido < caldo < bollente: è una scala di intensità." }
    ]
  }
});

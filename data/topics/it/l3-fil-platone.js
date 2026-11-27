TOPIC('it', {
  id: "l3-fil-platone",
  title: "Platone",
  intro: "Immagina di vivere fin dalla nascita in una caverna, incatenato, a guardare solo ombre proiettate su un muro: per te quelle ombre sono la realtà. Poi qualcuno ti libera e ti porta fuori, alla luce del sole. Questa immagine, tratta dalla <i>Repubblica</i>, è forse la più famosa di tutta la filosofia. <b>Platone</b>, allievo di Socrate, costruisce il primo grande <b>sistema filosofico</b> dell'Occidente: esiste un mondo delle <b>idee</b>, eterno e perfetto, di cui il mondo sensibile è solo una copia. E se i filosofi sono quelli che hanno visto la luce, dovrebbero anche <b>governare</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Vita e opere",
      html: `<p><b>Platone</b> nacque ad Atene nel 428/427 a.C. da famiglia aristocratica; morì nel 348/347 a.C. Destinato alla politica, fu sconvolto dalla condanna a morte di <b>Socrate</b> (399 a.C.): decise che la politica non poteva essere giusta senza filosofia. Viaggiò in Italia meridionale e in Sicilia, dove entrò in contatto con i pitagorici e con la corte di Siracusa (tentativi di realizzare le sue idee politiche, falliti). Intorno al 387 a.C. fondò ad Atene l'<b>Accademia</b>, una scuola di ricerca che durò secoli: tra i suoi allievi ci fu <b>Aristotele</b>.</p>
<p>Scrisse <b>dialoghi</b>, in cui Socrate è di solito il protagonista, forma che rispecchia l'idea che la filosofia sia ricerca condivisa. Si distinguono generalmente:</p>
<ul>
<li><b>dialoghi giovanili</b> (<i>Apologia</i>, <i>Critone</i>, <i>Eutifrone</i>): ritratto di Socrate e ricerca di definizioni;</li>
<li><b>dialoghi della maturità</b> (<i>Fedone</i>, <i>Simposio</i>, <i>Repubblica</i>, <i>Fedro</i>): teoria delle idee, anima, Stato ideale;</li>
<li><b>dialoghi della vecchiaia</b> (<i>Parmenide</i>, <i>Sofista</i>, <i>Timeo</i>, <i>Leggi</i>): critiche alla propria teoria, cosmologia, politica più realistica.</li>
</ul>
<p>Platone scrisse anche <i>lettere</i> e, secondo la tradizione, tenne all'Accademia insegnamenti «non scritti» (le dottrine non scritte), oggetto di discussione tra gli studiosi.</p>`
    },
    {
      type: "text",
      title: "2. La teoria delle idee",
      html: `<p>Da Socrate Platone eredita la ricerca di definizioni universali: che cosa è <i>la</i> giustizia, <i>il</i> bello? Ma egli compie un passo ulteriore: ciò che la definizione indica, l'<b>idea</b> (<i>eîdos</i>, «forma»), non è solo un concetto nella mente, <b>esiste davvero</b> come realtà autonoma, eterna, immutabile, accessibile solo all'intelletto. Davanti a molti cerchi disegnati, nessuno è perfettamente rotondo: eppure sappiamo che cos'è «il cerchio». Platone conclude che c'è un modello perfetto, l'idea del cerchio.</p>
<p>Ne deriva la divisione in <b>due mondi</b>:</p>
<ul>
<li><b>mondo sensibile</b>: le cose che vediamo e tocchiamo; cambiano, nascono e muoiono; sono copie imperfette; su di esse abbiamo solo <i>opinione</i> (<i>dóxa</i>);</li>
<li><b>mondo intelligibile (iperuranio)</b>: le idee, eterne e perfette; su di esse abbiamo <i>conoscenza vera</i> (<i>epistéme</i>). Il termine «iperuranio» («al di là del cielo») compare nel <i>Fedro</i>.</li>
</ul>
<p>Le idee sono ordinate gerarchicamente, e al vertice c'è l'<b>idea del Bene</b>, che nella <i>Repubblica</i> è paragonata al <b>Sole</b>: come il sole dà luce e vita alle cose visibili, il Bene rende conoscibili e dà essere a tutte le altre idee. Le cose sensibili «partecipano» delle idee (<i>méthexis</i>) o le «imitano» (<i>mímesis</i>): ecco perché, secondo Platone, un oggetto è bello perché partecipa dell'idea di Bello.</p>`
    },
    {
      type: "svg",
      title: "I due mondi di Platone",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="15" width="560" height="120" rx="12" fill="#ede9fe" stroke="#5b21b6" stroke-width="3"/>
<text x="300" y="42" font-size="18" font-weight="bold" text-anchor="middle" fill="#3b0764">MONDO INTELLIGIBILE (idee)</text>
<circle cx="110" cy="95" r="26" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="110" y="100" font-size="14" text-anchor="middle" fill="#0f172a">Bene</text>
<rect x="190" y="72" width="90" height="42" rx="8" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
<text x="235" y="98" font-size="14" text-anchor="middle" fill="#0f172a">Giustizia</text>
<rect x="300" y="72" width="90" height="42" rx="8" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
<text x="345" y="98" font-size="14" text-anchor="middle" fill="#0f172a">Bello</text>
<rect x="410" y="72" width="100" height="42" rx="8" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
<text x="460" y="98" font-size="14" text-anchor="middle" fill="#0f172a">Cerchio</text>
<text x="300" y="165" font-size="28" text-anchor="middle" fill="#475569">↓ copie ↓</text>
<rect x="20" y="180" width="560" height="105" rx="12" fill="#dcfce7" stroke="#166534" stroke-width="3"/>
<text x="300" y="207" font-size="18" font-weight="bold" text-anchor="middle" fill="#14532d">MONDO SENSIBILE (cose)</text>
<text x="300" y="245" font-size="15" text-anchor="middle" fill="#0f172a">atti giusti, corpi belli, ruote e monete: tutto cambia e invecchia</text>
</svg>`,
      caption: "Le cose sensibili sono copie imperfette delle idee eterne."
    },
    {
      type: "text",
      title: "3. Anima, reminiscenza e amore",
      html: `<p>Come facciamo a conoscere le idee, se i sensi ci mostrano solo cose imperfette? Platone risponde con l'<b>anima</b>, immortale e distinta dal corpo, che prima di unirsi al corpo ha contemplato le idee. Conoscere è <b>reminiscenza</b> (<i>anámnesis</i>): ricordare ciò che l'anima già sapeva. Nel <i>Menone</i> Socrate guida uno schiavo senza istruzione a risolvere un problema di geometria con le sole domande: la conoscenza era già «dentro».</p>
<p>Nel <i>Fedro</i> l'anima è paragonata a un <b>carro alato</b> guidato da un auriga (la ragione) e trainato da due cavalli: uno docile (l'impulso nobile, il coraggio) e uno indocile (i desideri). Nella <i>Repubblica</i> l'anima è divisa in tre parti: <b>razionale</b> (sede nella testa), <b>irascibile</b> (nel petto: coraggio, onore), <b>concupiscibile</b> (nel ventre: desideri, piaceri). La giustizia nell'anima è l'armonia tra le tre parti sotto la guida della ragione.</p>
<p>Nel <i>Simposio</i>, l'<b>amore</b> (<i>Eros</i>) è desiderio del bello e spinta a salire, per gradi, dalla bellezza di un corpo a quella di tutti i corpi, poi delle anime, delle leggi e delle scienze, fino al Bello in sé: è la «scala dell'amore». Da qui l'espressione «amore platonico», ma intesa in modo molto diverso da quello moderno.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: le idee",
      questions: [
        { type: "mc", q: "Dove esistono le idee secondo Platone?", options: ["Nel mondo intelligibile (iperuranio)", "Nella mente di ciascuno", "Nella natura"], answer: 0, explain: "Esistono come realtà autonome, eterne." },
        { type: "tf", q: "Per Platone la conoscenza è reminiscenza di ciò che l'anima ha contemplato.", answer: true, explain: "Anámnesis, nel Menone e nel Fedone." },
        { type: "text", q: "Come si chiama la scuola fondata da Platone ad Atene?", answer: ["accademia", "l'accademia"], explain: "L'Accademia, intorno al 387 a.C." }
      ]
    },
    {
      type: "text",
      title: "4. Il mito della caverna",
      html: `<p>All'inizio del libro VII della <i>Repubblica</i> Platone racconta un'immagine che riassume la sua filosofia. Alcuni uomini sono incatenati fin dalla nascita in una caverna e vedono, sul fondo, solo <b>ombre</b> di oggetti portati da persone dietro di loro, davanti a un fuoco. Credono che quelle ombre siano la realtà. Uno di loro viene liberato: la luce gli fa male, è confuso e vuole tornare indietro. Poi, a poco a poco, si abitua e vede gli oggetti veri, e infine il <b>sole</b>. Tornato nella caverna per liberare gli altri, rischia di essere deriso e ucciso: l'allusione è alla fine di Socrate.</p>
<p>Come si interpreta?</p>
<ul>
<li><b>caverna</b> = mondo sensibile; <b>ombre</b> = opinioni e apparenze;</li>
<li><b>uscita</b> e salita = percorso dell'anima verso la conoscenza (<i>dialettica</i>);</li>
<li><b>mondo esterno</b> = mondo delle idee; <b>sole</b> = idea del Bene;</li>
<li><b>ritorno</b> = dovere del filosofo di educare e governare.</li>
</ul>
<p>La <b>linea divisa</b> (<i>Repubblica</i>, libro VI) riassume i gradi della conoscenza: sul piano visibile <i>immaginazione</i> (immagini, ombre) e <i>credenza</i> (le cose); su quello intelligibile <i>pensiero matematico</i> (<i>diánoia</i>) e <i>intelligenza</i> o dialettica (<i>nóesis</i>), che raggiunge le idee.</p>`
    },
    {
      type: "svg",
      title: "La caverna e la linea divisa",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#1e293b"/>
<rect x="20" y="20" width="560" height="260" rx="14" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
<rect x="60" y="205" width="150" height="40" rx="8" fill="#475569"/>
<text x="135" y="231" font-size="14" text-anchor="middle" fill="#f1f5f9">prigionieri</text>
<rect x="60" y="60" width="150" height="90" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
<ellipse cx="100" cy="105" rx="14" ry="22" fill="#0f172a"/>
<ellipse cx="160" cy="105" rx="14" ry="22" fill="#0f172a"/>
<text x="135" y="50" font-size="14" text-anchor="middle" fill="#f1f5f9">ombre sul muro</text>
<circle cx="300" cy="225" r="16" fill="#f59e0b"/>
<text x="300" y="268" font-size="14" text-anchor="middle" fill="#f1f5f9">fuoco</text>
<path d="M250 170 L520 70" stroke="#f1f5f9" stroke-width="3" stroke-dasharray="6 5" fill="none"/>
<circle cx="520" cy="55" r="26" fill="#fde047" stroke="#ca8a04" stroke-width="3"/>
<text x="520" y="105" font-size="14" text-anchor="middle" fill="#f1f5f9">sole = Bene</text>
<text x="400" y="190" font-size="14" text-anchor="middle" fill="#f1f5f9">salita verso la verità</text>
</svg>`,
      caption: "Dalle ombre al sole: la conoscenza come educazione dell'anima."
    },
    {
      type: "decision",
      title: "Tornare nella caverna?",
      html: `<p>Sei il prigioniero liberato. Hai visto il mondo vero e il sole. Sai che i tuoi vecchi compagni vivono nell'inganno, e che chi li contraddice rischia di essere deriso o ucciso. Fuori si sta benissimo.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Resto fuori a contemplare la verità: me la sono meritata.", outcome: "Saresti felice, ma Platone osserva che il filosofo ha un dovere verso la città che lo ha formato." },
        { label: "Torno giù a spiegare agli altri, anche a rischio di essere deriso.", outcome: "È la scelta del filosofo-governante di Platone: chi ha visto il Bene deve guidare la città." },
        { label: "Torno giù ma mi adeguo alle ombre per non farmi notare.", outcome: "Salveresti te stesso, ma tradiresti la verità e gli altri non sarebbero liberati." }
      ],
      answer: 1,
      explain: "Nella Repubblica, i filosofi, che vorrebbero restare a contemplare, devono tornare a governare perché hanno la conoscenza del bene. È un obbligo di giustizia: chi sa deve servire la comunità. Il rischio c'è: la caverna evoca la condanna di Socrate."
    },
    {
      type: "text",
      title: "5. Lo Stato ideale",
      html: `<p>Nella <i>Repubblica</i> Platone chiede: che cos'è la <b>giustizia</b>? Per rispondere costruisce, in grande, il modello di una città perfetta, perché ciò che nell'anima è difficile da vedere in piccolo appare più chiaro nella polis. Come l'anima ha tre parti, anche lo Stato ha tre <b>classi</b>, ciascuna con la sua virtù:</p>
<table>
<tr><th>Parte dell'anima</th><th>Classe</th><th>Virtù</th></tr>
<tr><td>Razionale</td><td><b>Governanti</b> (filosofi)</td><td>Saggezza</td></tr>
<tr><td>Irascibile</td><td><b>Guardiani</b> (guerrieri)</td><td>Coraggio</td></tr>
<tr><td>Concupiscibile</td><td><b>Produttori</b> (artigiani, contadini)</td><td>Temperanza</td></tr>
</table>
<p>La <b>giustizia</b> è che ognuno faccia il proprio compito senza invadere quello altrui: armonia dell'insieme. I governanti sono i <b>filosofi</b>: «finché i filosofi non governeranno le città, o i re non filosoferanno, non ci sarà fine ai mali» (<i>Repubblica</i>, libro V). Per evitare corruzione e favoritismi, ai governanti e ai guardiani Platone impone la <b>comunanza dei beni</b> e (nel suo progetto) anche delle famiglie, ed una lunga educazione selettiva: musica e ginnastica, poi matematica e dialettica fino ai cinquant'anni. Nel suo progetto anche le donne possono accedere a tutte le classi, a seconda delle capacità.</p>
<p>Platone è severo con l'<b>arte</b>, in particolare con la poesia imitativa (<i>mímesis</i>): essendo copia di copie, è tre gradi lontana dalla verità e può trarre in inganno. Nelle <i>Leggi</i>, opera della vecchiaia, propone uno Stato più realistico, governato dalle leggi.</p>
<p>Gli studiosi discutono: la città ideale è un modello da realizzare, o uno strumento per capire la giustizia? Per i critici moderni (Popper, per esempio) è un progetto autoritario.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: il sistema platonico",
      nodes: [
        { id: "socrate", label: "Socrate", x: 50, y: 5, color: "#0ea5e9", html: "Definizioni universali; la virtù è conoscenza.", why: "Platone parte dall'idea socratica che esista una verità universale da trovare con il dialogo." },
        { id: "idee", label: "Teoria delle idee", x: 20, y: 30, color: "#7c3aed", html: "Le essenze esistono davvero, nel mondo intelligibile.", why: "Per spiegare come sia possibile una conoscenza stabile, in un mondo sensibile che muta (Eraclito), Platone assegna alle definizioni di Socrate una realtà oggettiva (risposta anche a Parmenide)." },
        { id: "anima", label: "Anima", x: 80, y: 30, color: "#16a34a", html: "Immortale; reminiscenza; tre parti.", why: "Se le idee sono eterne, l'anima che le conosce deve essere affine ad esse: ne deriva l'immortalità e la reminiscenza." },
        { id: "caverna", label: "Mito della caverna", x: 20, y: 60, color: "#f59e0b", html: "Dalle ombre al sole del Bene.", why: "Un'immagine per raccontare l'educazione come conversione dell'anima, dal sensibile all'intelligibile." },
        { id: "bene", label: "Idea del Bene", x: 50, y: 60, color: "#ef4444", html: "Il vertice delle idee, come il sole.", why: "Dà unità e valore a tutto: spiega perché conoscere vuol dire anche orientarsi al bene." },
        { id: "stato", label: "Stato ideale", x: 80, y: 62, color: "#14b8a6", html: "Governanti-filosofi, guardiani, produttori.", why: "La politica è conoscenza del bene: solo chi ha visto le idee può guidare con giustizia. Risposta alla condanna di Socrate e alla democrazia ateniese." }
      ],
      edges: [
        ["socrate", "idee", "radicalizza"],
        ["idee", "anima", "richiede"],
        ["idee", "caverna", "illustra"],
        ["caverna", "bene", "culmina"],
        ["bene", "stato", "fonda"],
        ["anima", "stato", "modello"]
      ]
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la caverna",
      intro: "Se l'immagine ti pare lontana, prova a tradurla in situazioni di oggi.",
      tabs: [
        {
          label: "📱 Oggi: lo schermo",
          html: `<p>Chi vive solo attraverso i feed dei social vede un'immagine del mondo filtrata, selezionata e spesso deformata: ombre su un muro. Uscire dalla caverna, oggi, può significare verificare le fonti, incontrare persone reali, studiare. Non è un'accusa alla tecnologia, ma un invito a chiedersi: che cosa sto davvero guardando?</p>`
        },
        {
          label: "🎬 Il cinema",
          html: `<p>In un cinema vediamo ombre di luce proiettate su uno schermo e ci emozioniamo come se fossero reali; se accendessero la luce in sala, l'illusione scomparirebbe. In <i>The Matrix</i> (1999) e in <i>The Truman Show</i> (1998) il protagonista scopre di vivere in una realtà costruita: due riscritture moderne del mito.</p>`
        },
        {
          label: "📊 Schema dei gradi di conoscenza",
          html: `<table>
<tr><th>Piano</th><th>Grado</th><th>Oggetto</th></tr>
<tr><td rowspan="2">Visibile (opinione)</td><td>Immaginazione</td><td>ombre, immagini</td></tr>
<tr><td>Credenza</td><td>le cose naturali</td></tr>
<tr><td rowspan="2">Intelligibile (scienza)</td><td>Pensiero matematico</td><td>enti matematici</td></tr>
<tr><td>Intelligenza (dialettica)</td><td>le idee e il Bene</td></tr>
</table>`
        }
      ]
    },
    {
      type: "example",
      title: "Un esempio: il triangolo perfetto",
      html: `<p>Disegna un triangolo con la matita: i lati non sono perfettamente dritti, e hanno spessore. Eppure i teoremi che dimostri valgono per «il triangolo» in senso assoluto, non per il tuo disegno: la somma degli angoli interni è 180° anche se il tuo disegno è storto. Per Platone il matematico parla delle idee, non delle figure disegnate: è la prova che esiste un mondo intelligibile.</p>`
    },
    {
      type: "example",
      title: "Un esempio: la città come squadra",
      html: `<p>In una squadra di basket, se il playmaker tira sempre e il centro cerca di organizzare il gioco, la squadra perde. Funziona se ciascuno fa ciò per cui è più portato, sotto la guida di un allenatore. È l'idea di giustizia di Platone: ognuno al suo posto, in armonia. Resta da chiedersi: chi decide chi è portato per cosa? E chi controlla l'allenatore?</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che...?",
      html: `<p>Platone si chiamava probabilmente <b>Aristocle</b>: «Platone» (da <i>platýs</i>, «largo») sarebbe un soprannome, forse per la corporatura o per l'ampiezza della fronte o dello stile. Sulla porta dell'Accademia, secondo una tradizione tarda, c'era scritto: «Non entri chi non conosce la geometria».</p>`
    },
    {
      type: "curiosity",
      title: "Whitehead e Platone",
      html: `<p>Il filosofo del Novecento Alfred North Whitehead scrisse che la tradizione filosofica europea «consiste in una serie di note a margine a Platone». È un'esagerazione, ma dice quanto fu influente: la distinzione tra mondo sensibile e intelligibile, l'anima immortale e l'idea del Bene entrarono poi nel cristianesimo, soprattutto con Agostino.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Platone (428/427-348/347 a.C.), allievo di Socrate, fonda l'<b>Accademia</b> (387 a.C. circa); scrive <b>dialoghi</b>.</li>
<li><b>Teoria delle idee</b>: due mondi, sensibile (opinione) e intelligibile (scienza). Al vertice il <b>Bene</b>, come il sole.</li>
<li><b>Anima</b> immortale, conoscenza come <b>reminiscenza</b>; anima tripartita.</li>
<li><b>Caverna</b>: dalle ombre alla luce, e ritorno per educare.</li>
<li><b>Stato ideale</b>: tre classi, giustizia come armonia, governano i filosofi.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: caverna e Stato",
      questions: [
        { type: "mc", q: "Che cosa rappresenta il sole nel mito della caverna?", options: ["L'idea del Bene", "La città di Atene", "Il fuoco della tecnica"], answer: 0, explain: "Il Bene illumina e rende conoscibile il mondo delle idee." },
        { type: "tf", q: "Nello Stato ideale i filosofi dovrebbero governare.", answer: true, explain: "Chi conosce il Bene è il più adatto a guidare." },
        { type: "order", q: "Metti in ordine i gradi della conoscenza (dal più basso).", items: ["Immaginazione", "Credenza", "Pensiero matematico", "Intelligenza (dialettica)"], explain: "Linea divisa, Repubblica VI." }
      ]
    }
  ],
  glossary: [
    { t: "Idea", d: "Per Platone, essenza eterna e immutabile, modello delle cose sensibili." },
    { t: "Iperuranio", d: "Il luogo «al di là del cielo» dove stanno le idee." },
    { t: "Reminiscenza", d: "Conoscere come ricordare ciò che l'anima ha contemplato prima della nascita." },
    { t: "Dialettica", d: "Metodo di ricerca che sale dalle opinioni alle idee." },
    { t: "Mimesis", d: "Imitazione: le cose imitano le idee, l'arte imita le cose." },
    { t: "Anima tripartita", d: "Parte razionale, irascibile e concupiscibile." },
    { t: "Accademia", d: "Scuola di Platone ad Atene, fondata intorno al 387 a.C." },
    { t: "Filosofo-re", d: "Il governante ideale di Platone, che conosce il Bene." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa sono le idee per Platone?", options: ["Realtà eterne e perfette, modelli delle cose sensibili", "Pensieri soggettivi", "Immagini dell'arte"], answer: 0, explain: "Esistono nel mondo intelligibile." },
      { type: "mc", q: "Come conosciamo le idee, secondo Platone?", options: ["Attraverso la reminiscenza, con la ragione e la dialettica", "Con i sensi", "Con la tradizione"], answer: 0, explain: "L'anima le ha contemplate prima di unirsi al corpo." },
      { type: "tf", q: "Il mondo sensibile è per Platone una copia imperfetta del mondo delle idee.", answer: true, explain: "Le cose sensibili partecipano delle idee ma ne sono copie." },
      { type: "text", q: "Come si chiama l'idea che sta al vertice, paragonata al sole?", answer: ["bene", "il bene", "idea del bene"], explain: "L'idea del Bene." },
      { type: "mc", q: "Quali sono le tre classi dello Stato ideale?", options: ["Governanti, guardiani, produttori", "Re, nobili, schiavi", "Sacerdoti, soldati, mercanti"], answer: 0, explain: "A ciascuna corrisponde una virtù." },
      { type: "mc", q: "Che cosa è la giustizia per Platone?", options: ["Che ciascuna parte svolga il proprio compito in armonia", "L'uguaglianza assoluta di tutti", "Il volere del più forte"], answer: 0, explain: "Vale per l'anima e per lo Stato." },
      { type: "mc", q: "Chi sono i governanti ideali?", options: ["I filosofi", "I generali", "I più ricchi"], answer: 0, explain: "Chi conosce il Bene sa guidare la città." },
      { type: "tf", q: "Nel mito della caverna il prigioniero liberato non ha alcun dovere verso gli altri.", answer: false, explain: "Deve tornare per educarli." },
      { type: "mc", q: "Quale dialogo contiene il mito della caverna?", options: ["Repubblica", "Apologia", "Simposio"], answer: 0, explain: "Libro VII della Repubblica." },
      { type: "text", q: "Come si chiama la scuola fondata da Platone?", answer: ["accademia", "l'accademia"], explain: "L'Accademia." }
    ]
  }
});

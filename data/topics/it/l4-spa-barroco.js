TOPIC('it', {
  id: "l4-spa-barroco",
  title: "Il Barocco",
  intro: "Nel Seicento la Spagna è un impero stanco: le guerre e le bancarotte logorano il potere, ma l'arte brilla come mai prima. Nasce il <b>Barocco</b>, un'epoca che ama il contrasto, l'ornamento, il paradosso e il pensiero della morte. Tre grandi voci lo raccontano: <b>Luis de Góngora</b>, che trasforma la poesia in un gioiello di luce e latinismi; <b>Francisco de Quevedo</b>, che condensa idee taglienti in pochi versi; <b>Pedro Calderón de la Barca</b>, che porta sulla scena il dilemma tra destino e libertà. In questa lezione leggi i loro versi in spagnolo, impari a smontare un sonetto e capisci perché dietro lo splendore c'è sempre il <b>desengaño</b>. 🎭🪞",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è il Barocco spagnolo",
      html: `<p>Nella lezione sul Siglo de Oro hai visto il quadro generale dei due secoli d'oro della cultura spagnola. Qui ci fermiamo sul <b>Barocco</b>, cioè sul periodo che va grosso modo dal <b>1600 alla fine del secolo</b>. La Spagna di <b>Felipe III</b> e <b>Felipe IV</b> è ancora immensa ma in crisi: guerre costose, tasse, povertà nelle città. L'arte non nasconde questa tensione, la mette in scena.</p>
<p>I grandi temi del Barocco sono pochi e ritornano ovunque:</p>
<ul>
<li><b>Desengaño</b> (disinganno): le apparenze ingannano, bisogna imparare a vedere oltre.</li>
<li><b>Tempus fugit</b> e <b>memento mori</b>: il tempo vola, la morte arriva per tutti, ricchi e poveri.</li>
<li><b>Carpe diem</b>: proprio perché la vita è breve, godi la bellezza finché dura.</li>
<li><b>La vita come sogno o teatro</b>: tutto ciò che vediamo è forse una messa in scena.</li>
<li><b>Il contrasto</b>: luce e ombra, bellezza e rovina, fede e dubbio, grandezza e miseria.</li>
</ul>
<p>Sul piano dello stile il Barocco ama l'<b>artificio</b>: metafore audaci, antitesi, iperbati, giochi di parole. Si parla di due grandi tendenze della poesia, il <b>culteranismo</b> (Góngora: bellezza della forma, lingua colta) e il <b>conceptismo</b> (Quevedo: concisione e idea ingegnosa), che però non si escludono in modo netto: anche Góngora ragiona, anche Quevedo cura la forma.</p>`
    },
    {
      type: "svg",
      title: "Tre voci, uno stesso sguardo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="28" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Il Barocco spagnolo: tre autori, un tema comune</text>
<rect x="20" y="50" width="170" height="130" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
<text x="105" y="76" font-size="16" text-anchor="middle" fill="#92400e" font-weight="bold">Góngora</text>
<text x="105" y="100" font-size="14" text-anchor="middle" fill="#1e293b">Córdoba 1561-1627</text>
<text x="105" y="124" font-size="14" text-anchor="middle" fill="#1e293b">Culteranismo</text>
<text x="105" y="148" font-size="14" text-anchor="middle" fill="#1e293b">Soledades, Polifemo</text>
<text x="105" y="168" font-size="14" text-anchor="middle" fill="#1e293b">bellezza e forma</text>
<rect x="215" y="50" width="170" height="130" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
<text x="300" y="76" font-size="16" text-anchor="middle" fill="#991b1b" font-weight="bold">Quevedo</text>
<text x="300" y="100" font-size="14" text-anchor="middle" fill="#1e293b">Madrid 1580-1645</text>
<text x="300" y="124" font-size="14" text-anchor="middle" fill="#1e293b">Conceptismo</text>
<text x="300" y="148" font-size="14" text-anchor="middle" fill="#1e293b">sonetti, satire, Buscón</text>
<text x="300" y="168" font-size="14" text-anchor="middle" fill="#1e293b">idea e paradosso</text>
<rect x="410" y="50" width="170" height="130" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<text x="495" y="76" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Calderón</text>
<text x="495" y="100" font-size="14" text-anchor="middle" fill="#1e293b">Madrid 1600-1681</text>
<text x="495" y="124" font-size="14" text-anchor="middle" fill="#1e293b">Teatro simbolico</text>
<text x="495" y="148" font-size="14" text-anchor="middle" fill="#1e293b">La vida es sueño</text>
<text x="495" y="168" font-size="14" text-anchor="middle" fill="#1e293b">libertà e destino</text>
<line x1="105" y1="180" x2="300" y2="235" stroke="#64748b" stroke-width="2"/>
<line x1="300" y1="180" x2="300" y2="235" stroke="#64748b" stroke-width="2"/>
<line x1="495" y1="180" x2="300" y2="235" stroke="#64748b" stroke-width="2"/>
<rect x="170" y="235" width="260" height="46" rx="10" fill="#1e3a8a"/>
<text x="300" y="264" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Desengaño: tutto passa</text>
</svg>`,
      caption: "Stili diversi, stessa consapevolezza: le apparenze ingannano e il tempo consuma ogni cosa."
    },
    {
      type: "text",
      title: "2. Luis de Góngora: la poesia come gioiello",
      html: `<p><b>Luis de Góngora y Argote</b> (Córdoba 1561 – 1627) è il poeta che porta la lingua poetica al massimo grado di artificio. Fu anche sacerdote e cappellano reale a Madrid. Scrisse due tipi di versi molto diversi:</p>
<ul>
<li><b>poesia «leggera»</b>: romances, letrillas, brevi componimenti popolari, musicali e ironici (per esempio la letrilla <i>«Ande yo caliente / y ríase la gente»</i>, che prende in giro chi insegue onori e preferisce un buon fuoco e una vita tranquilla);</li>
<li><b>poesia «grande»</b>: la <i>Fábula de Polifemo y Galatea</i> (1612-1613) e le <i>Soledades</i> (1613), poemi lunghi in stile molto elaborato.</li>
</ul>
<p>I tratti del suo stile (culteranismo): <b>latinismi</b> (parole e costruzioni prese dal latino), <b>iperbato</b> (l'ordine delle parole è rovesciato, come in latino), <b>metafore a catena</b> (i capelli diventano «oro», la pelle «lilio», le labbra «clavel»), <b>mitologia</b> e immagini sensoriali di luce e colore. Le <i>Soledades</i> iniziano con il verso <i>«Era del año la estación florida»</i>: l'inizio è semplice, poi la sintassi si complica volutamente. Chi leggeva Góngora doveva faticare: la difficoltà era un valore, un modo di selezionare i lettori colti.</p>
<p>Il polemista <b>Lope de Vega</b> e soprattutto Quevedo lo criticarono duramente, ma poeti e artisti del Novecento lo riscoprirono: nel <b>1927</b>, tre secoli dalla morte, i poeti della <b>Generación del 27</b> (Lorca, Alberti, Guillén…) lo celebrarono come un maestro.</p>`
    },
    {
      type: "example",
      title: "Esempio: il sonetto «Mientras por competir con tu cabello»",
      html: `<p>È il più celebre sonetto di Góngora (1582). Il poeta si rivolge a una donna e le descrive la bellezza come un insieme di colori preziosi che competono con la natura: il suo cabello con l'oro lucido al sole, la fronte con il giglio, le labbra con il garofano, il collo con il cristallo. Poi arriva il colpo di scena. Ecco i versi decisivi:</p>
<blockquote><i>goza cuello, cabello, labio y frente,<br>
antes que lo que fue en tu edad dorada<br>
oro, lilio, clavel, cristal luciente…<br>
…<br>
en tierra, en humo, en polvo, en sombra, en nada.</i></blockquote>
<p><b>Come si legge</b>:</p>
<ul>
<li><b>Tema</b>: <i>carpe diem</i> e brevità della bellezza. Tu sei bella ora, ma il tempo trasformerà tutto in «niente».</li>
<li><b>Struttura</b>: il sonetto sono 14 endecasillabi; le quartine hanno rima abbracciata (ABBA ABBA). Le prime tre strofe sono una sola grande frase che costruisce l'attesa («mientras… mientras…»); l'ultimo verso la fa crollare.</li>
<li><b>Figure</b>: metafore (oro, lilio, clavel, cristal), <b>anafora</b> di «mientras», <b>gradazione discendente</b> alla fine: tierra, humo, polvo, sombra, nada, cinque sostantivi che perdono peso uno dopo l'altro fino al nulla.</li>
<li><b>Barocco</b>: bellezza sensuale + pensiero della morte. È il desengaño espresso in un verso.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Góngora",
      questions: [
        { type: "mc", q: "Quale parola descrive meglio lo stile delle Soledades?", options: ["Colto e latineggiante", "Colloquiale e scarno", "Ripetitivo e popolare"], answer: 0, explain: "Le Soledades sono volutamente difficili: latinismi, iperbato e metafore elaborate." },
        { type: "tf", q: "L'ultimo verso di «Mientras por competir con tu cabello» elenca cinque sostantivi che finiscono in «nada».", answer: true, explain: "«En tierra, en humo, en polvo, en sombra, en nada»: la bellezza si dissolve fino al nulla." },
        { type: "mc", q: "Che cosa significa il tema del «carpe diem» in questo sonetto?", options: ["Goditi la bellezza ora, perché il tempo la distruggerà", "Studia molto per il futuro", "Il re è padrone del destino"], answer: 0, explain: "Il poeta invita la donna a godere della giovinezza prima che sia troppo tardi." }
      ]
    },
    {
      type: "text",
      title: "3. Francisco de Quevedo: pensiero in poche parole",
      html: `<p><b>Francisco de Quevedo</b> (Madrid 1580 – Villanueva de los Infantes 1645) è poeta, satirico, filosofo e politico. Studia a Alcalá e Valladolid, è amico del duca di Osuna (viceré a Napoli e in Sicilia), conosce la prigione: nel 1639 viene arrestato per ordine del conte-duca di Olivares e passa anni in un convento-carcere a León. È un uomo di corte che conosce da vicino i poteri e i loro vizi.</p>
<p>La sua opera ha quattro grandi filoni:</p>
<ul>
<li><b>poesia amorosa</b>, piena di contrasti (<i>«Es hielo abrasador, es fuego helado»</i>);</li>
<li><b>poesia morale e metafisica</b>: la brevità della vita, il tempo, la rovina («Miré los muros de la patria mía, / si un tiempo fuertes, ya desmoronados…»);</li>
<li><b>satira</b>: sonetti e letrillas che prendono in giro avari, medici, donne e uomini vanitosi e soprattutto il denaro (<i>«Poderoso caballero es don Dinero»</i>);</li>
<li><b>prosa</b>: il romanzo picaresco <i>La vida del Buscón</i> (pubblicato 1626), i <i>Sueños</i>, opere politiche.</li>
</ul>
<p>Il suo stile è il <b>conceptismo</b>: Quevedo riesce a far stare un'idea intera in un verso, giocando con le parole (<b>paronomasia</b>, antitesi, ossimori, doppi sensi). Il lettore deve fare un piccolo sforzo intellettuale per scoprire il «concepto», cioè la connessione ingegnosa fra due idee lontane.</p>`
    },
    {
      type: "example",
      title: "Esempio: «Cerrar podrá mis ojos la postrera»",
      html: `<p>È il sonetto d'amore «<i>Amor constante más allá de la muerte</i>». Il poeta dice che la morte potrà chiudergli gli occhi e liberare l'anima, ma non cancellerà la sua passione. L'ultima terzina:</p>
<blockquote><i>su cuerpo dejará, no su cuidado;<br>
serán ceniza, mas tendrá sentido;<br>
polvo serán, mas polvo enamorado.</i></blockquote>
<p><b>Come si legge</b>:</p>
<ul>
<li><b>Tema</b>: l'amore è più forte della morte. Il corpo si dissolve (ceniza, polvo), ma l'amore resta (cuidado, sentido, enamorado).</li>
<li><b>Struttura</b>: quartine ABBA ABBA; terzine CDC DCD. Le prime tre strofe preparano un'obiezione («podrá… podrá…»), l'ultima terzina la ribalta con un movimento di concessione («mas…»).</li>
<li><b>Figure</b>: <b>paradosso</b> (il polvo può essere «enamorado»), <b>parallelismo</b> in due membri («serán ceniza, mas…; polvo serán, mas…»), <b>anafora</b> e <b>climax</b>.</li>
<li><b>Barocco</b>: il pensiero della morte, ma risolto con una vittoria sull'oblio: ciò che resta è l'amore.</li>
</ul>
<p>Confronta con Góngora: lì la morte cancella tutto («en nada»), qui qualcosa sopravvive. Due risposte opposte alla stessa domanda.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la guerra dei poeti",
      html: `<p>Góngora e Quevedo si odiavano. Quevedo accusò Góngora di rovinare la lingua con i latinismi e scrisse versi feroci contro di lui; Góngora rispose con altre satire. Si dice persino che Quevedo comprò una casa abitata da Góngora per cacciarlo (è una tradizione, non un fatto del tutto provato). Il celebre sonetto di Quevedo «<i>Érase un hombre a una nariz pegado</i>», una serie di iperboli sul naso di un uomo, secondo una tradizione è rivolto a Góngora o a un altro nemico: gli studiosi discutono ancora. Nonostante la rivalità, oggi li leggiamo entrambi come i due poli del Barocco.</p>`
    },
    {
      type: "widget",
      title: "Abbina autore e opera",
      widget: "match",
      options: {
        pairs: [
          ["Góngora", "Soledades"],
          ["Góngora", "Fábula de Polifemo y Galatea"],
          ["Quevedo", "La vida del Buscón"],
          ["Quevedo", "Poderoso caballero es don Dinero"],
          ["Calderón", "La vida es sueño"],
          ["Calderón", "El alcalde de Zalamea"]
        ]
      },
      caption: "Collega ogni autore a una sua opera."
    },
    {
      type: "text",
      title: "4. Calderón de la Barca e il teatro delle idee",
      html: `<p><b>Pedro Calderón de la Barca</b> (Madrid 1600 – 1681) è il maggior drammaturgo della seconda parte del Siglo de Oro. Studia con i gesuiti, combatte come soldato, scrive per la corte di Felipe IV e dal 1651 diventa sacerdote. Mentre Lope de Vega scrive commedie veloci e naturali, Calderón costruisce <b>drammi filosofici</b>, molto simmetrici e simbolici. Le sue opere si dividono in:</p>
<ul>
<li><b>drammi filosofici</b>: <i>La vida es sueño</i> (c. 1635);</li>
<li><b>drammi d'onore</b>: <i>El alcalde de Zalamea</i> (c. 1636), <i>El médico de su honra</i>;</li>
<li><b>commedie di intrigo</b>: <i>La dama duende</i>;</li>
<li><b>autos sacramentales</b>: drammi allegorici su temi religiosi, come <i>El gran teatro del mundo</i>, dove il mondo è un palcoscenico e Dio il regista.</li>
</ul>
<p><b>La vida es sueño</b> racconta del principe <b>Segismundo</b>, rinchiuso in una torre dal padre, il re <b>Basilio</b>, perché un oroscopo ha annunciato che sarà un tiranno. Basilio decide di metterlo alla prova: lo droga, lo porta a palazzo, e Segismundo si comporta con violenza. Viene riportato nella torre e gli si dice che è stato tutto un sogno. Più tardi, durante una rivolta, è liberato e ora sceglie di dominarsi: capisce che, sogno o realtà, «il bene si deve fare comunque». Nella famosa riflessione dice:</p>
<blockquote><i>¿Qué es la vida? Un frenesí.<br>
¿Qué es la vida? Una ilusión,<br>
una sombra, una ficción,<br>
y el mayor bien es pequeño;<br>
que toda la vida es sueño,<br>
y los sueños, sueños son.</i></blockquote>
<p>Altro nucleo: la libertà. Il destino (l'oroscopo) sembra decidere tutto, ma Segismundo dimostra che l'uomo può vincere il proprio istinto: è il tema del <b>libre albedrío</b> (libero arbitrio).</p>`
    },
    {
      type: "decision",
      title: "Basilio e la profezia",
      html: `<p>Sei il re <b>Basilio</b>. Gli astri annunciano che tuo figlio Segismundo, appena nato, sarà un tiranno crudele e ti umilierà. Hai due scelte: fidarti della profezia e tenerlo rinchiuso, oppure dargli una possibilità di mostrare chi è.</p>`,
      question: "Tu cosa avresti fatto?",
      options: [
        { label: "Rinchiuderlo per sempre nella torre", outcome: "Come Basilio nella prima parte della storia: un'ingiustizia certa per evitare un male possibile. Il figlio cresce nell'ignoranza e nella rabbia." },
        { label: "Educarlo da subito e lasciarlo libero", outcome: "Rischieresti, ma daresti al principe la possibilità di dimostrare che la profezia non è un destino. È la tesi di Calderón sul libero arbitrio." },
        { label: "Metterlo alla prova senza dirgli la verità", outcome: "È ciò che fa Basilio: lo porta a palazzo senza preparazione. Segismundo reagisce con violenza e la prova fallisce, ma il vero cambiamento arriva dopo." }
      ],
      answer: 1,
      explain: "Nel dramma Basilio sceglie la prigione e poi una prova ingannevole; entrambi i metodi producono il risultato che voleva evitare. Alla fine Segismundo diventa un buon re <b>per scelta</b> e non per fortuna: l'insegnamento è che la profezia è solo un'informazione, e che l'educazione e la volontà possono vincerla."
    },
    {
      type: "text",
      title: "5. Gracián, Velázquez e l'arte barocca",
      html: `<p>Il Barocco non è soltanto letteratura. Il gesuita <b>Baltasar Gracián</b> (1601-1658) scrive <i>Agudeza y arte de ingenio</i> (1648), una teoria dell'«agudeza», cioè dell'intelligenza arguta, e <i>El Criticón</i> (1651-1657), romanzo allegorico sulla vita come viaggio pieno di inganni; il suo <i>Oráculo manual y arte de prudencia</i> (1647) raccoglie 300 massime di saggezza pratica.</p>
<p>In pittura <b>Diego Velázquez</b> (Siviglia 1599 – Madrid 1660), pittore di corte di Felipe IV, dipinge <i>Las Meninas</i> (1656, oggi al Museo del Prado), dove l'artista si ritrae mentre dipinge, con l'infanta Margarita e il suo seguito, e in fondo uno specchio mostra i sovrani: chi guarda chi? È un gioco sull'apparenza e sulla realtà, come nella letteratura. <b>Zurbarán</b> e <b>Murillo</b> dipingono santi e nature morte con forti contrasti di luce.</p>
<p>Un genere tipico sono le <b>vanitas</b>, nature morte con teschio, candela spenta, orologio e frutta marcia: ricordano che tutto è vanità, cioè vuoto e fugace.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per entrare nel Barocco",
      intro: "Se i sonetti ti sembrano lontani, prova da una di queste strade.",
      tabs: [
        {
          label: "🔍 Il metodo in quattro passi",
          html: `<p>Per capire un sonetto barocco: <b>1)</b> leggi ad alta voce e trova il <b>tema</b> (amore, tempo, morte); <b>2)</b> dividi il testo in <b>strofe</b> e chiediti che cosa fa ognuna (presenta, sviluppa, ribalta); <b>3)</b> sottolinea le <b>figure</b> (metafore, antitesi, ossimori, anafore); <b>4)</b> cerca il <b>concepto finale</b>, cioè l'ultima idea che chiude il discorso. Prova con Góngora: tema = bellezza e tempo; ultima riga = nada.</p>`
        },
        {
          label: "🎨 In pittura: le vanitas",
          html: `<p>Immagina un dipinto con un teschio, una candela che si spegne e fiori appassiti accanto a un bicchiere di vino e una moneta d'oro. È la versione visiva del sonetto di Góngora: bellezza, ricchezza e piacere ci sono, ma lo sguardo cade sul teschio. Barocco = lusso + pensiero della fine.</p>`
        },
        {
          label: "📱 Un'analogia di oggi",
          html: `<p>Un profilo social con foto perfette è un po' come un sonetto di Góngora: tutto lucido, filtrato, bellissimo. Il Barocco ricorda però che dietro l'apparenza c'è la realtà (e che nessun filtro ferma il tempo). La parola chiave è sempre <b>desengaño</b>: imparare a guardare oltre la superficie.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del Barocco spagnolo",
      nodes: [
        { id: "crisi", label: "Crisi e splendore", x: 50, y: 8, color: "#6366f1", html: "Impero indebolito, ma cultura al massimo.", why: "Quando il potere politico declina e le certezze vacillano, gli artisti cercano nell'arte una risposta: il Barocco nasce proprio dal contrasto tra grandezza esterna e fragilità interna." },
        { id: "desengano", label: "Desengaño", x: 50, y: 34, color: "#0ea5e9", html: "Le apparenze ingannano; tutto passa.", why: "È la lezione che la crisi e la Controriforma insegnano: non fidarsi dei beni terreni, ricordare la morte (memento mori)." },
        { id: "gongora", label: "Góngora", x: 15, y: 62, color: "#f59e0b", html: "Culteranismo: bellezza, latinismi, metafore.", why: "Vuole elevare il castigliano al livello del latino e dell'italiano: più la lingua è alta, più la poesia sembra degna di nobiltà." },
        { id: "quevedo", label: "Quevedo", x: 50, y: 78, color: "#dc2626", html: "Conceptismo: idee brevi e taglienti.", why: "Nasce dalla cultura della sentenza e della satira: dire molto con poco, svelare il vizio nascosto sotto l'apparenza." },
        { id: "calderon", label: "Calderón", x: 85, y: 62, color: "#16a34a", html: "Teatro filosofico: La vida es sueño.", why: "Il teatro è lo specchio perfetto dell'idea che «il mondo è un palcoscenico»; i personaggi vivono la domanda su destino e libertà." }
      ],
      edges: [
        ["crisi", "desengano", "produce"],
        ["desengano", "gongora", "si esprime in"],
        ["desengano", "quevedo", "si esprime in"],
        ["desengano", "calderon", "si esprime in"]
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… la Polonia di Calderón",
      html: `<p>La vida es sueño è ambientata in Polonia, ma la Polonia di Calderón è un paese immaginario: ai suoi spettatori serviva un luogo lontano e un po' misterioso, dove tutto potesse succedere. Anche oggi Segismundo è uno dei personaggi più rappresentati del teatro spagnolo, e il verso «toda la vida es sueño» è diventato un modo di dire.</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Barocco</b> = contrasto, artificio, desengaño, memento mori.</li>
<li><b>Góngora</b>: culteranismo; Soledades e Polifemo; sonetto «Mientras por competir con tu cabello».</li>
<li><b>Quevedo</b>: conceptismo; sonetti, letrillas, Buscón; «polvo serán, mas polvo enamorado».</li>
<li><b>Calderón</b>: La vida es sueño (c. 1635), El alcalde de Zalamea, autos sacramentales; tema: libero arbitrio e illusione.</li>
<li><b>Gracián</b>: Agudeza y arte de ingenio, Oráculo manual, El Criticón. <b>Velázquez</b>: Las Meninas (1656).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Quevedo e Calderón",
      questions: [
        { type: "mc", q: "Quale figura domina nel verso «polvo serán, mas polvo enamorado»?", options: ["Paradosso", "Onomatopea", "Apostrofe"], answer: 0, explain: "È un paradosso: la polvere non può essere innamorata, eppure l'amore sopravvive." },
        { type: "tf", q: "Segismundo, alla fine di La vida es sueño, decide di agire bene anche se la vita potrebbe essere un sogno.", answer: true, explain: "Capisce che il bene si fa comunque: il suo cambiamento è una scelta libera." },
        { type: "mc", q: "Che cos'è un «auto sacramental»?", options: ["Un dramma allegorico religioso", "Un sonetto d'amore", "Un romanzo picaresco"], answer: 0, explain: "Un esempio è El gran teatro del mundo di Calderón." }
      ]
    }
  ],
  glossary: [
    { t: "Barroco", d: "Stile artistico del Seicento: contrasto, ornamento, pensiero della morte." },
    { t: "Culteranismo", d: "Stile colto e latineggiante di Góngora." },
    { t: "Conceptismo", d: "Stile basato sul «concepto», l'idea ingegnosa e concisa (Quevedo)." },
    { t: "Desengaño", d: "Disinganno: la scoperta che le apparenze ingannano." },
    { t: "Hipérbaton", d: "Inversione dell'ordine normale delle parole, di gusto latino." },
    { t: "Carpe diem", d: "«Cogli l'attimo»: godi del presente perché il tempo fugge." },
    { t: "Memento mori", d: "«Ricordati che devi morire»: invito a pensare alla fine." },
    { t: "Vanitas", d: "Genere di natura morta che ricorda la fugacità della vita." },
    { t: "Auto sacramental", d: "Dramma allegorico religioso in un atto." },
    { t: "Libre albedrío", d: "Libero arbitrio: la capacità di scegliere in modo autonomo." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale parola riassume l'idea che le apparenze ingannano e tutto passa?", options: ["Desengaño", "Mestizaje", "Reconquista"], answer: 0, explain: "Desengaño è il disinganno, concetto centrale del Barocco." },
      { type: "mc", q: "Che cosa caratterizza il culteranismo?", options: ["Latinismi, metafore elaborate, iperbato", "Frasi brevi e colloquiali", "Versi senza rima"], answer: 0, explain: "È lo stile colto di Góngora." },
      { type: "tf", q: "Il «concepto» di Quevedo è un'idea ingegnosa espressa in modo conciso.", answer: true, explain: "Il conceptismo punta sulla concisione e sul gioco di idee." },
      { type: "text", q: "Come si chiama il principe protagonista di La vida es sueño?", answer: ["segismundo"], explain: "Segismundo, figlio del re Basilio." },
      { type: "mc", q: "Qual è l'ultimo verso del sonetto di Góngora «Mientras por competir con tu cabello»?", options: ["En tierra, en humo, en polvo, en sombra, en nada", "Polvo serán, mas polvo enamorado", "Que toda la vida es sueño"], answer: 0, explain: "È il verso che dissolve la bellezza nel nulla." },
      { type: "mc", q: "Che cosa dice Quevedo dell'amore nel sonetto «Cerrar podrá mis ojos la postrera»?", options: ["Che sopravvive alla morte", "Che finisce con la morte", "Che è solo un'illusione"], answer: 0, explain: "L'amore resta anche quando il corpo è polvere." },
      { type: "order", q: "Metti in ordine cronologico di nascita.", items: ["Góngora (1561)", "Quevedo (1580)", "Gracián (1601)", "Sor Juana (c. 1648)"], explain: "Góngora 1561, Quevedo 1580, Gracián 1601, Sor Juana circa 1648." },
      { type: "mc", q: "In quale anno è datata Las Meninas di Velázquez?", options: ["1656", "1556", "1756"], answer: 0, explain: "È un'opera del 1656 conservata al Prado." },
      { type: "tf", q: "El alcalde de Zalamea è un dramma di Quevedo.", answer: false, explain: "È di Calderón de la Barca." },
      { type: "mc", q: "Che cosa mette in scena un auto sacramental come El gran teatro del mundo?", options: ["Il mondo come palcoscenico con Dio come regista", "Una storia d'amore pastorale", "Le avventure di un pícaro"], answer: 0, explain: "È un dramma allegorico: il mondo è un teatro e gli esseri umani recitano una parte." }
    ]
  }
});

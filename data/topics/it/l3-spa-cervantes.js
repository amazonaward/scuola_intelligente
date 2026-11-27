TOPIC('it', {
  id: "l3-spa-cervantes",
  title: "Cervantes e il Don Quijote",
  intro: "Un nobile di campagna che ha letto troppi romanzi cavallereschi decide di diventare cavaliere errante, monta un cavallo magro e si butta contro dei mulini a vento credendoli giganti. Così comincia il <b>Don Quijote de la Mancha</b> (1605-1615) di <b>Miguel de Cervantes</b>, il libro che molti considerano il <b>primo romanzo moderno</b> e che è uno dei più tradotti e letti di sempre. In questa lezione conosci la vita avventurosa dell'autore, la struttura dell'opera, i personaggi, i temi (realtà e illusione, follia e saggezza) e impari a leggere un passo in spagnolo del Seicento. 🛡️🐴",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. L'autore: una vita da romanzo",
      html: `<p><b>Miguel de Cervantes Saavedra</b> nacque nel <b>1547</b> ad <b>Alcalá de Henares</b>, figlio di un chirurgo di modesta condizione. Visse una vita piena di avventure e di sfortune, così simile a un romanzo che, a volte, si dimentica quanto sia reale:</p>
<ul>
<li><b>1569-1570</b>: è in Italia (a Roma, forse al servizio di un cardinale) e si arruola come soldato.</li>
<li><b>7 ottobre 1571</b>: combatte alla <b>battaglia di Lepanto</b> (flotta della Lega Santa guidata da Don Giovanni d'Austria contro la flotta turca). Pur malato di febbre, combatté eroicamente; fu ferito e perse l'uso della mano sinistra: per questo è detto «el manco de Lepanto». Era orgoglioso di quella ferita, che considerava un «onore».</li>
<li><b>1575</b>: durante il viaggio di ritorno verso la Spagna la sua nave è catturata da pirati barbareschi: per cinque anni è <b>prigioniero ad Algeri</b>. Tenta più volte la fuga senza riuscirci. Nel <b>1580</b> viene <b>riscattato</b> dai frati Trinitari, dietro pagamento di un riscatto.</li>
<li>Tornato in Spagna, vive in povertà, fa l'esattore delle tasse, finisce più volte in carcere per conti in disordine: è proprio in carcere (a Siviglia) che, secondo il prologo, concepì il Quijote («engendrado en una cárcel»).</li>
<li><b>1605</b>: pubblica la <b>prima parte del Don Quijote</b> e conosce un successo immediato.</li>
<li><b>1615</b>: pubblica la <b>seconda parte</b> e le <i>Ocho comedias y ocho entremeses</i>.</li>
<li><b>22 aprile 1616</b>: muore a Madrid (fu sepolto il 23 aprile), pochi giorni dopo aver terminato <i>Los trabajos de Persiles y Sigismunda</i>, pubblicato postumo nel 1617.</li>
</ul>
<p>Altre opere importanti: il romanzo pastorale <i>La Galatea</i> (1585) e le dodici <b><i>Novelas ejemplares</i></b> (1613), come <i>La gitanilla</i>, <i>Rinconete y Cortadillo</i>, <i>El licenciado Vidriera</i>: racconti brevi molto vari, che inaugurano la novella moderna in spagnolo.</p>`
    },
    {
      type: "3d",
      title: "Le tappe della vita di Cervantes",
      scene: "spacetime",
      options: {
        lat: [34, 44],
        lon: [-8, 24],
        years: [1545, 1620],
        places: [
          { lat: 40.4, lon: -3.7, label: "Madrid" },
          { lat: 36.75, lon: 3.06, label: "Algeri" },
          { lat: 38.4, lon: 21.8, label: "Lepanto" }
        ],
        events: [
          { id: "c1547", lat: 40.48, lon: -3.37, year: 1547, label: "Nascita ad Alcalá", html: "Nasce Miguel de Cervantes, probabilmente il 29 settembre (giorno di San Michele)." },
          { id: "c1571", lat: 38.37, lon: 21.83, year: 1571, label: "Lepanto", html: "Cervantes combatte nella battaglia navale e perde l'uso della mano sinistra.", causes: ["c1547"] },
          { id: "c1575", lat: 36.75, lon: 3.06, year: 1575, label: "Prigioniero ad Algeri", html: "Catturato dai corsari barbareschi, resta schiavo fino al 1580.", causes: ["c1571"] },
          { id: "c1580", lat: 36.75, lon: 3.06, year: 1580, label: "Il riscatto", html: "I frati Trinitari pagano il riscatto e Cervantes torna in Spagna.", causes: ["c1575"] },
          { id: "c1605", lat: 40.4, lon: -3.7, year: 1605, label: "Don Quijote, parte I", html: "Pubblicazione a Madrid, nella stamperia di Juan de la Cuesta: successo immediato.", causes: ["c1580"] },
          { id: "c1616", lat: 40.4, lon: -3.7, year: 1616, label: "Morte a Madrid", html: "Muore il 22 aprile. Aveva pubblicato nel 1615 la seconda parte del Quijote.", causes: ["c1605"] }
        ]
      },
      caption: "Dalla nascita ad Alcalá alla morte a Madrid: ruota la mappa e segui le cause."
    },
    {
      type: "text",
      title: "2. Il progetto: parodiare i libri di cavalleria",
      html: `<p>Nel Cinquecento e primo Seicento i più popolari «romanzi» erano i <b>libri de caballerías</b> (romanzi cavallereschi): lunghe storie piene di cavalieri, draghi, maghi e dame da salvare, il cui modello era l'<i>Amadís de Gaula</i> (stampato nel 1508, ma di origini più antiche). Erano letti da tutti i ceti. Moralisti e umanisti li consideravano una lettura dannosa e falsa.</p>
<p>Cervantes dichiara nel prologo di voler «derribar la autoridad y cabida que en el mundo y en el vulgo tienen los libros de caballerías» (abbattere l'autorità e il favore che questi libri hanno nel mondo e presso il popolo). Perciò scrive la storia di un uomo che <b>impazzisce a forza di leggerli</b> e decide di imitarli nella realtà. Ma non è solo una parodia: il libro, via via, diventa molto di più, e Cervantes sembra affezionarsi al suo eroe folle.</p>
<p>Il libro inventa il romanzo moderno perché: 1) il protagonista è <b>complesso, contraddittorio, cambia nel tempo</b>; 2) i personaggi hanno <b>dialoghi realistici</b>, con lingue diverse; 3) il narratore <b>gioca con il lettore</b> e con la finzione stessa; 4) la realtà viene mostrata da <b>punti di vista diversi</b> (<i>perspectivismo</i>).</p>`
    },
    {
      type: "example",
      title: "Esempio: l'incipit più famoso",
      html: `<blockquote><i>En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.</i></blockquote>
<p><b>Traduzione</b>: «In un paese della Mancha, di cui non voglio ricordare il nome, non molto tempo fa viveva un nobile di quelli con la lancia nella rastrelliera, lo scudo antico, un ronzino magro e un levriero da caccia».</p>
<p><b>Analisi</b>:</p>
<ul>
<li><b>Ironia sul luogo</b>: «de cuyo nombre no quiero acordarme» è un modo ironico di non dire dove si svolge la storia (<i>lugar</i> significa «paese, villaggio»). Anche il luogo è volutamente vago, come nelle favole.</li>
<li><b>Il protagonista</b>: un <b><i>hidalgo</i></b> (nobile di rango basso, senza grandi ricchezze). Tutti i suoi beni sono elencati con ironia: una lancia da museo, uno scudo vecchio, un cavallo magro, un cane da caccia.</li>
<li><b>Linguaggio</b>: lessico antico (<i>adarga</i> = scudo di cuoio; <i>rocín</i> = ronzino; <i>no ha mucho tiempo</i> = non molto tempo fa); sintassi lunga, ma il ritmo è fluido.</li>
</ul>
<p>Il nome del personaggio è volutamente incerto: «dicono che avesse il cognome <i>Quijada</i> o <i>Quesada</i>… ma si deduce che si chiamava <i>Quejana</i>». Il narratore finge di non saperlo, e solo più avanti sapremo che si chiama <b>Alonso Quijano</b>.</p>`
    },
    {
      type: "text",
      title: "3. La storia in breve",
      html: `<p>Il Quijote ha <b>due parti</b>: la <b>Primera parte</b> (1605, 52 capitoli) e la <b>Segunda parte</b> (1615, 74 capitoli).</p>
<p><b>Prima parte</b></p>
<ul>
<li>Alonso Quijano, sui cinquant'anni, legge romanzi di cavalleria giorno e notte, «de claro en claro y de turbio en turbio», e «del poco dormir y del mucho leer, se le secó el celebro» (gli si seccò il cervello). Decide di farsi <b>cavaliere errante</b> per <i>«deshacer agravios y enderezar entuertos»</i> (riparare i torti e raddrizzare le ingiustizie). Si dà il nome <b>don Quijote de la Mancha</b>, chiama il suo cavallo <b>Rocinante</b> e sceglie come dama una contadina del paese vicino, Aldonza Lorenzo, che ribattezza <b>Dulcinea del Toboso</b>.</li>
<li>Nella <b>prima uscita</b>, da solo, si fa armare cavaliere da un oste che crede il castellano di un castello. Torna a casa malconcio. Il curato e il barbiere bruciano molti libri della sua biblioteca (l'<i>escrutinio</i>, cap. 6).</li>
<li>Nella <b>seconda uscita</b> si porta come scudiero il contadino <b>Sancho Panza</b>, un uomo semplice e furbo, al quale promette il governo di un'isola. Insieme vivono gli episodi più celebri: i <b>mulini a vento</b> (cap. 8), le greggi di pecore scambiate per eserciti, i galeotti liberati (che poi lo aggrediscono), la notte ai mulini di follatura, l'elmo di Mambrino (in realtà una bacinella da barbiere).</li>
<li>Nella Sierra Morena si inseriscono varie <b>novelle intercalate</b> (storie di altri personaggi, come Cardenio, Dorotea, il «Curioso impertinente»). Alla fine, per riportarlo a casa, gli amici lo rinchiudono in una gabbia su un carro.</li>
</ul>
<p><b>Seconda parte</b></p>
<ul>
<li>I personaggi sanno di essere i protagonisti di un libro, perché hanno letto la prima parte (e anche un falso seguito, apparso nel 1614 con la firma di un certo <b>Alonso Fernández de Avellaneda</b>, di identità sconosciuta).</li>
<li>I duchi si divertono a prendersi gioco dei due e fanno governare a Sancho una finta isola, <b>Barataria</b>, dove si rivela un governatore giusto e di buon senso.</li>
<li>Dopo vari episodi (la grotta di Montesinos, il cavallo Clavileño, Barcellona), il cavaliere è sconfitto da <b>Sansón Carrasco</b> (un baccelliere del suo paese travestito da «Cavaliere della Bianca Luna»), che gli impone di tornare a casa. Qui don Quijote si ammala, <b>recupera la ragione</b>, rinnega i romanzi di cavalleria, fa testamento e muore come <b>Alonso Quijano «el Bueno»</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Quijote e Sancho: due modi di vedere il mondo",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Il cavaliere e lo scudiero</text>
<rect x="20" y="42" width="260" height="190" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
<text x="150" y="68" font-size="17" text-anchor="middle" fill="#92400e" font-weight="bold">Don Quijote</text>
<text x="34" y="98" font-size="14" fill="#1e293b">Alto, magro, circa 50 anni</text>
<text x="34" y="122" font-size="14" fill="#1e293b">Idealista, vede gigantes</text>
<text x="34" y="146" font-size="14" fill="#1e293b">Cavalca Rocinante</text>
<text x="34" y="170" font-size="14" fill="#1e293b">Muove dagli ideali (libri)</text>
<text x="34" y="194" font-size="14" fill="#1e293b">Parla in modo elevato</text>
<text x="34" y="218" font-size="14" fill="#92400e" font-weight="bold">Lo spirito che sogna</text>
<rect x="320" y="42" width="260" height="190" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="450" y="68" font-size="17" text-anchor="middle" fill="#14532d" font-weight="bold">Sancho Panza</text>
<text x="334" y="98" font-size="14" fill="#1e293b">Basso, pingue, contadino</text>
<text x="334" y="122" font-size="14" fill="#1e293b">Realista, vede molinos</text>
<text x="334" y="146" font-size="14" fill="#1e293b">Cavalca un asino</text>
<text x="334" y="170" font-size="14" fill="#1e293b">Muove dal buon senso (proverbi)</text>
<text x="334" y="194" font-size="14" fill="#1e293b">Parla in modo popolare</text>
<text x="334" y="218" font-size="14" fill="#14532d" font-weight="bold">Il corpo che mangia</text>
<text x="300" y="266" font-size="14" text-anchor="middle" fill="#475569">Nel corso del libro si influenzano a vicenda: Sancho si «quijotiza» e Quijote si «sanchifica».</text>
</svg>`,
      caption: "Idealismo e realismo si incontrano e si scambiano: è il cuore del romanzo."
    },
    {
      type: "decision",
      title: "I mulini a vento: cosa avresti fatto?",
      html: `<p>Sei <b>Sancho Panza</b>. È l'alba, e don Quijote scorge in un campo <i>treinta o cuarenta molinos de viento</i> e dichiara: «Là ci sono trenta o più giganti smisurati: voglio combatterli e ucciderli tutti». Tu vedi chiaramente mulini a vento. Sai che il tuo padrone, quando si arrabbia, non ascolta nessuno.</p>`,
      question: "Cosa fai?",
      options: [
        { label: "Dici la verità: «Signore, sono mulini, non giganti!»", outcome: "È ciò che fa Sancho nel libro: il suo padrone non gli dà ascolto e lo manda a pregare, se ha paura. La verità non basta quando l'altro non vuole sentirla." },
        { label: "Gli dai ragione per non litigare e lo lasci andare da solo", outcome: "Tu eviti una discussione ma il tuo padrone si farà male, e la tua complicità lo spingerà ancora di più nella fantasia." },
        { label: "Scappi a casa con l'asino", outcome: "Ti salvi, ma perdi la promessa dell'isola e il legame con una persona che, pur folle, è generosa. E non ci sarebbe romanzo." }
      ],
      answer: 0,
      explain: "Nel capitolo 8 Sancho dice onestamente che sono mulini, ma segue comunque il suo padrone. Quijote carica con la lancia contro il primo mulino: la pala solleva cavallo e cavaliere e li getta a terra. Il padrone spiega che il mago <i>Frestón</i> ha trasformato i giganti in mulini «per togliermi la gloria della vittoria». Per Quijote la spiegazione magica salva sempre l'ideale: è un esempio dell'«<i>ingegno</i>» con cui il folle difende la sua visione."
    },
    {
      type: "quiz",
      title: "Mini-quiz: autore e trama",
      questions: [
        { type: "mc", q: "In che battaglia perse l'uso della mano sinistra Cervantes?", options: ["Lepanto (1571)", "Granada (1492)", "Las Navas de Tolosa (1212)"], answer: 0, explain: "Lepanto, 7 ottobre 1571." },
        { type: "mc", q: "Come si chiama la dama immaginaria di don Quijote?", options: ["Dulcinea del Toboso", "Melibea", "Jimena"], answer: 0, explain: "Dulcinea del Toboso, in realtà la contadina Aldonza Lorenzo." },
        { type: "tf", q: "Il Quijote è stato pubblicato in due parti, nel 1605 e nel 1615.", answer: true, explain: "La prima parte nel 1605, la seconda nel 1615." },
        { type: "mc", q: "Qual è il nome del cavallo di don Quijote?", options: ["Rocinante", "Babieca", "Clavileño"], answer: 0, explain: "Rocinante (Babieca è il cavallo del Cid; Clavileño è un cavallo di legno)." }
      ]
    },
    {
      type: "text",
      title: "4. I temi: follia, realtà e illusione",
      html: `<p>Il Quijote è un libro che <b>si può leggere a più livelli</b>:</p>
<ul>
<li><b>Come parodia</b>: ride dei romanzi di cavalleria, dei loro luoghi comuni e del mondo che immaginano.</li>
<li><b>Come romanzo comico</b>: le botte, le disavventure e i battibecchi tra i due protagonisti.</li>
<li><b>Come riflessione</b> su realtà e illusione: che cosa è vero? Chi è pazzo, chi è savio? Per il cavaliere i mulini sono giganti; per Sancho sono mulini; per il lettore sono entrambe le cose, a seconda del punto di vista. Questo si chiama <b>prospettivismo</b>.</li>
<li><b>Come celebrazione degli ideali</b>: la follia di don Quijote è anche un modo di credere nella giustizia, nell'onore, nella libertà. Famosa la frase: <i>«La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos»</i> (II, 58).</li>
<li><b>Come riflessione sul libro stesso</b>: il romanzo parla di libri e di lettori. Nella seconda parte i personaggi hanno letto la prima parte e ne parlano: è un primo esempio di <b>metaletteratura</b>. Il narratore finge anche di tradurre un manoscritto arabo dello storico <i>Cide Hamete Benengeli</i>, e commenta la propria attendibilità con ironia.</li>
</ul>
<p>Per questa ragione il Quijote è considerato il <b>primo romanzo moderno</b>: i personaggi non sono tipi fissi (l'eroe, il furfante), ma persone che cambiano, sbagliano, si contraddicono, e che sono viste in modo ambiguo dall'autore.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire il Quijote",
      intro: "Se il libro ti sembra lontano, prova queste strade.",
      tabs: [
        {
          label: "🎬 Come un film",
          html: `<p>Immagina il Quijote come una <b>serie in due stagioni</b> con due protagonisti con una coppia comica (un po' come Stanlio e Ollio: uno alto e magro, l'altro basso e tondo). Ogni capitolo è un episodio autonomo (mulini, pecore, galeotti, elmo) ma c'è un filo conduttore: la trasformazione dei due personaggi. Nella seconda stagione i personaggi <b>sanno di essere famosi</b>, e la trama si arricchisce di scherzi e di riferimenti alla prima.</p>`
        },
        {
          label: "🧠 Realtà e immaginazione",
          html: `<p>Pensa a quante volte «vedi» qualcosa che non c'è (un videogioco immersivo, un film, un'idea fissa). Don Quijote vede la realtà <b>attraverso i libri</b> che ha letto, un filtro che deforma quel che vede. Oggi si direbbe che «vive in una bolla». Sancho invece la vede attraverso <b>i proverbi</b> e il buon senso contadino. Tra le due prospettive nasce il romanzo.</p>`
        },
        {
          label: "🎨 Disegno: il quadro dei ruoli",
          html: `<p>Disegna due colonne: a sinistra <b>Quijote</b> (alto, magro, a cavallo, ideali, libri), a destra <b>Sancho</b> (basso, pingue, su un asino, cibo, proverbi). Poi frecce che collegano le caratteristiche che si passano l'un l'altro: dopo mille avventure Sancho comincia a credere nei sogni e Quijote ad accettare la realtà. È un modo semplice per ricordare che il libro è un viaggio dei due personaggi, che si trasformano.</p>`
        }
      ]
    },
    {
      type: "widget",
      title: "Personaggi del Quijote",
      widget: "match",
      options: { pairs: [["Rocinante", "il cavallo di don Quijote"], ["Dulcinea del Toboso", "la dama immaginaria"], ["Sancho Panza", "lo scudiero contadino"], ["Cide Hamete Benengeli", "lo storico arabo fittizio"], ["Sansón Carrasco", "il baccelliere che sconfigge Quijote"], ["Barataria", "l'isola governata da Sancho"]] },
      caption: "Abbina ogni nome al suo ruolo."
    },
    {
      type: "text",
      title: "5. La lingua del Quijote",
      html: `<p>Il Quijote è scritto in uno spagnolo del primo Seicento, che oggi appare un po' arcaico, ma si legge senza troppa fatica con qualche accorgimento:</p>
<table>
<tr><th>Forma nel testo</th><th>Spagnolo di oggi</th><th>Note</th></tr>
<tr><td>vuestra merced</td><td>usted</td><td>Formula di rispetto: da «vuestra merced» deriva «usted»</td></tr>
<tr><td>fuyáis</td><td>huyáis</td><td>Forma di <i>huir</i>, imperativo congiuntivo di vosotros</td></tr>
<tr><td>ansí</td><td>así</td><td>Forma popolare antica</td></tr>
<tr><td>agora</td><td>ahora</td><td>Forma antica</td></tr>
<tr><td>desfacer</td><td>deshacer</td><td>Grafia antica</td></tr>
<tr><td>dello, dellos</td><td>de ello, de ellos</td><td>Contrazioni di preposizione + pronome, oggi scomparse</td></tr>
<tr><td>cuyo nombre</td><td>cuyo nombre</td><td>Il relativo <i>cuyo</i> è ancora vivo</td></tr>
</table>
<p>Alcune espressioni nate nel Quijote sono oggi di uso comune in spagnolo e in italiano:</p>
<ul>
<li><b>luchar contra molinos de viento</b>: combattere contro nemici immaginari o battaglie inutili (in italiano «combattere contro i mulini a vento»).</li>
<li><b>quijotesco</b>: idealista, generoso e poco realistico.</li>
<li><b>ser un Sancho Panza</b> / <b>sanchopancesco</b>: persona di buon senso, pratica e terra terra.</li>
<li><b>dormir a pierna suelta</b>, <b>no es oro todo lo que reluce</b>: proverbi che Sancho cita di continuo (centinaia di proverbi in tutto il libro).</li>
</ul>
<p>⚠️ Attenzione: la frase «<i>Ladran, Sancho, señal que cabalgamos</i>» è attribuita al Quijote, ma <b>non si trova nel libro</b>: è un'attribuzione tardiva e molto popolare. Dire che «lo dice il Quijote» sarebbe un errore.</p>`
    },
    {
      type: "curiosity",
      title: "Un libro da record",
      html: `<p>Il Quijote è tra i libri più <b>tradotti e stampati</b> della storia: gli studiosi lo considerano, dopo la Bibbia, uno dei testi più diffusi nel mondo. Già nel 1612 fu tradotto in inglese e nel 1614 in francese. Il 23 aprile, data legata alla morte di Cervantes, si celebra la <b>Giornata mondiale del libro</b> (scelta dall'UNESCO nel 1995, perché in quella data del 1616 morirono anche Shakespeare e l'Inca Garcilaso de la Vega; ma bisogna notare che Inghilterra e Spagna usavano calendari diversi, per cui le due morti non cadono realmente nello stesso giorno). Il più importante premio letterario in lingua spagnola, il <b>Premio Cervantes</b>, esiste dal 1976.</p>`
    },
    {
      type: "curiosity",
      title: "Il falso Quijote",
      html: `<p>Nel 1614, mentre Cervantes scriveva la seconda parte, comparve a Tarragona un <b>seguito apocrifo</b> firmato da un certo <b>Alonso Fernández de Avellaneda</b>, che nessuno ha mai identificato con certezza. Cervantes si offese e rispose nel modo più geniale: nella seconda parte i personaggi incontrano persone che hanno letto il falso Quijote; don Quijote stesso, quando scopre che Avellaneda lo fa andare a Saragozza, decide di andare a Barcellona per smentirlo. È un caso in cui il plagio spinge l'autore a una trovata letteraria.</p>`
    },
    {
      type: "example",
      title: "Esempio: un dialogo tra padrone e scudiero",
      html: `<p>Ecco un piccolo dialogo che imita lo stile di Cervantes, in spagnolo moderno:</p>
<p><b>Don Quijote</b>: ¿Ves, Sancho, aquellos gigantes? Tenemos que vencerlos.<br>
<b>Sancho</b>: Mire vuestra merced que aquellos no son gigantes, sino molinos de viento.<br>
<b>Don Quijote</b>: Bien se ve que no sabes de aventuras. Si tienes miedo, <b>quítate de ahí</b> y ponte a rezar.<br>
<b>Sancho</b>: Yo, señor, <b>más quiero</b> un buen plato de sopa que mil gigantes.</p>
<p><b>Analisi</b>: Quijote parla con tono elevato e voce di comando; Sancho usa proverbi e parla di cibo. Nota l'uso di <b>vuestra merced</b> (trattamento rispettoso) e dell'imperativo (<i>mire</i>, <i>quítate</i>, <i>ponte</i>). L'effetto comico nasce dal <b>contrasto</b> tra due registri linguistici.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa del Don Quijote",
      nodes: [
        { id: "libro", label: "Don Quijote (1605-1615)", x: 50, y: 8, color: "#2563eb", html: "Due parti: 52 e 74 capitoli.", why: "Cervantes, ormai sessantenne e dopo una vita di sfortune, scrive il suo capolavoro. La prima parte ha un successo immediato; la seconda arriva dieci anni dopo, dopo il falso Quijote di Avellaneda." },
        { id: "parodia", label: "Parodia della cavalleria", x: 20, y: 40, color: "#dc2626", html: "Un hidalgo impazzito per i libri.", why: "I libri di cavalleria erano la lettura più diffusa del tempo e molti moralisti li giudicavano falsi e dannosi. Cervantes ne mostra le assurdità mettendole a confronto con la realtà spagnola di fine Cinquecento." },
        { id: "personajes", label: "Quijote e Sancho", x: 50, y: 40, color: "#16a34a", html: "Idealismo e buon senso.", why: "La coppia nasce dal contrasto: un cavaliere che parla la lingua dei libri e un contadino che parla per proverbi. Il dialogo tra loro permette di vedere ogni episodio da due punti di vista." },
        { id: "realidad", label: "Realtà e illusione", x: 80, y: 40, color: "#a855f7", html: "Giganti o mulini? Chi è savio, chi pazzo?", why: "L'epoca barocca è ossessionata dall'inganno dei sensi (desengaño): se l'apparenza inganna, anche il «folle» può avere ragione. Cervantes non decide, e lascia al lettore l'interpretazione." },
        { id: "metaliteratura", label: "Metaletteratura", x: 30, y: 78, color: "#f59e0b", html: "Il libro parla di libri; i personaggi sono lettori.", why: "Con Cide Hamete Benengeli, il manoscritto «trovato» e il falso Quijote, Cervantes mette in discussione il confine tra finzione e verità, anticipando il romanzo del Novecento." },
        { id: "modernidad", label: "Primo romanzo moderno", x: 70, y: 78, color: "#0ea5e9", html: "Personaggi complessi, dialoghi vivi, ironia.", why: "Perché i protagonisti non sono tipi fissi ma cambiano nel tempo: Quijote muore savio, Sancho diventa idealista. Questo sviluppo psicologico è la base del romanzo dei secoli successivi." }
      ],
      edges: [
        ["libro", "parodia", "nasce come"],
        ["libro", "personajes", "protagonisti"],
        ["libro", "realidad", "tema"],
        ["personajes", "realidad", "due punti di vista"],
        ["realidad", "metaliteratura", "finzione"],
        ["metaliteratura", "modernidad", "novità"],
        ["personajes", "modernidad", "personaggi che cambiano"]
      ]
    },
    {
      type: "widget",
      title: "Flashcards: parole del Quijote",
      widget: "flashcards",
      options: { cards: [
        { front: "el hidalgo", back: "nobile di basso rango" },
        { front: "el caballero andante", back: "il cavaliere errante" },
        { front: "el escudero", back: "lo scudiero" },
        { front: "el rocín", back: "il ronzino (cavallo magro)" },
        { front: "la adarga", back: "lo scudo di cuoio" },
        { front: "desfacer agravios", back: "riparare i torti (deshacer)" },
        { front: "el molino de viento", back: "il mulino a vento" },
        { front: "la locura / loco", back: "la follia / pazzo" }
      ] },
      caption: "Otto parole utili per leggere e commentare il Quijote."
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Cervantes</b>: nato ad Alcalá de Henares (1547), ferito a Lepanto (1571), prigioniero ad Algeri (1575-1580), morto a Madrid (1616).</li>
<li><b>Don Quijote</b>: due parti (1605 e 1615), parodia dei libri di cavalleria.</li>
<li>Personaggi: <b>Alonso Quijano / don Quijote</b>, <b>Sancho Panza</b>, <b>Rocinante</b>, <b>Dulcinea del Toboso</b>.</li>
<li>Temi: realtà e illusione, prospettivismo, libertà, giustizia, metaletteratura.</li>
<li>Considerato il <b>primo romanzo moderno</b>, perché ha personaggi che cambiano, dialoghi, ironia e riflessione sulla finzione.</li>
<li>Altre opere: <i>Novelas ejemplares</i> (1613), <i>Persiles y Sigismunda</i> (1617).</li>
<li>«Ladran, Sancho…» <b>non è</b> nel Quijote.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: temi e personaggi",
      questions: [
        { type: "mc", q: "Quale parola descrive l'idea che la stessa cosa possa essere vista in modi diversi?", options: ["Prospettivismo", "Parodia", "Epica"], answer: 0, explain: "Giganti per Quijote, mulini per Sancho." },
        { type: "text", q: "Come si chiama lo storico arabo immaginario a cui Cervantes attribuisce la storia?", answer: ["cide hamete benengeli", "cide hamete", "hamete benengeli"], explain: "Cide Hamete Benengeli." },
        { type: "tf", q: "Alla fine del romanzo don Quijote muore ancora convinto di essere un cavaliere errante.", answer: false, explain: "Recupera la ragione, rinnega i libri di cavalleria e muore come Alonso Quijano «el Bueno»." },
        { type: "mc", q: "Dove Sancho governa un'isola finta?", options: ["Barataria", "Toledo", "Clavileño"], answer: 0, explain: "L'isola Barataria, scherzo dei duchi." }
      ]
    }
  ],
  glossary: [
    { t: "Hidalgo", d: "Nobile di basso rango, spesso senza ricchezze." },
    { t: "Caballero andante", d: "Cavaliere errante: figura dei romanzi di cavalleria." },
    { t: "Escudero", d: "Scudiero: servitore che accompagna il cavaliere." },
    { t: "Libro de caballerías", d: "Romanzo cavalleresco in prosa (es. Amadís de Gaula)." },
    { t: "Parodia", d: "Imitazione comica di un'opera o di un genere." },
    { t: "Perspectivismo", d: "Presentare la stessa realtà da punti di vista diversi." },
    { t: "Metaliteratura", d: "Letteratura che parla di letteratura e della propria finzione." },
    { t: "Novela ejemplar", d: "Racconto breve di Cervantes (raccolta del 1613)." },
    { t: "Quijotesco", d: "Idealista, generoso e poco pratico." },
    { t: "Apócrifo", d: "Testo attribuito a un autore ma non scritto da lui (come il falso Quijote)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In che anno fu pubblicata la prima parte del Don Quijote?", options: ["1605", "1615", "1547"], answer: 0, explain: "1605; la seconda parte nel 1615." },
      { type: "mc", q: "Perché Cervantes è detto «el manco de Lepanto»?", options: ["Perse l'uso della mano sinistra a Lepanto", "Perse un occhio in battaglia", "Fu zoppo per una caduta da cavallo"], answer: 0, explain: "Fu ferito nella battaglia del 7 ottobre 1571." },
      { type: "tf", q: "Il Quijote è la parodia dei libri di cavalleria.", answer: true, explain: "Lo dichiara il prologo." },
      { type: "text", q: "Come si chiama lo scudiero di don Quijote? (nome e cognome)", answer: ["sancho panza"], explain: "Sancho Panza." },
      { type: "mc", q: "Quale animale cavalca Sancho Panza?", options: ["Un asino", "Un cavallo bianco", "Un mulo da guerra"], answer: 0, explain: "Un asino (il «rucio»)." },
      { type: "mc", q: "Chi sconfigge don Quijote a Barcellona, nella seconda parte?", options: ["Sansón Carrasco", "Avellaneda", "Il duca"], answer: 0, explain: "Il baccelliere Sansón Carrasco, travestito da Cavaliere della Bianca Luna." },
      { type: "order", q: "Metti in ordine gli eventi della vita di Cervantes.", items: ["Nascita ad Alcalá (1547)", "Battaglia di Lepanto (1571)", "Prigionia ad Algeri (1575-1580)", "Don Quijote, parte I (1605)", "Morte a Madrid (1616)"], explain: "Segui la vita: nascita, guerra, prigionia, successo, morte." },
      { type: "mc", q: "Che cosa significa «luchar contra molinos de viento»?", options: ["Combattere contro nemici immaginari o battaglie inutili", "Costruire mulini", "Navigare con il vento"], answer: 0, explain: "Espressione nata dall'episodio dei mulini (I, 8)." },
      { type: "tf", q: "La frase «Ladran, Sancho, señal que cabalgamos» si trova nel Quijote.", answer: false, explain: "Non c'è nel testo: è un'attribuzione popolare e tarda." },
      { type: "mc", q: "Perché il Quijote è considerato il primo romanzo moderno?", options: ["Ha personaggi complessi che cambiano, dialoghi realistici e un narratore ironico", "È scritto in prosa e non in versi", "È molto lungo"], answer: 0, explain: "La complessità dei personaggi e il gioco con la finzione sono la novità." }
    ]
  }
});

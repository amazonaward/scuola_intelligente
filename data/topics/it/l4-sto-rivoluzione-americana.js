TOPIC('it', {
  id: "l4-sto-rivoluzione-americana",
  title: "La rivoluzione americana",
  intro: "Il 4 luglio 1776, a Filadelfia, tredici colonie britanniche dichiarano di non voler più obbedire al re Giorgio III e proclamano che «tutti gli uomini sono creati uguali». È la prima volta che un popolo europeo d'oltremare rompe con la madrepatria in nome dei <b>diritti naturali</b> teorizzati da Locke e dagli illuministi. Dopo una lunga guerra nascono gli <b>Stati Uniti d'America</b>, che nel 1787 si danno una <b>Costituzione scritta</b>, ancora oggi in vigore: una repubblica federale con separazione dei poteri e un sistema di contrappesi. In questa lezione vedi le cause della rottura, i protagonisti, la guerra, la Costituzione, e anche le contraddizioni: la schiavitù e l'esclusione dei nativi e delle donne.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "1. Le tredici colonie",
      html: `<p>Sulla costa atlantica del Nord America, tra il Seicento e il Settecento, la Gran Bretagna ha fondato <b>tredici colonie</b>: la Virginia (1607), poi il Massachusetts (1620-1630) fondato da puritani, il New England, le colonie centrali (New York, Pennsylvania di William Penn, New Jersey) e quelle del Sud (Maryland, Carolina, Georgia).</p>
<ul>
<li><b>Nord</b>: commercio, pesca, piccole fattorie, città come Boston e Filadelfia, scuole e tipografie; forte tradizione di autogoverno nelle «assemblee» locali.</li>
<li><b>Sud</b>: grandi piantagioni di tabacco, riso e indaco, lavorate da <b>schiavi africani</b> (nel 1770 circa mezzo milione).</li>
<li><b>Popolazione</b>: circa 2,5 milioni di abitanti nel 1770, in forte crescita, con immigrati da molte parti d'Europa, non solo inglesi.</li>
</ul>
<p>Le colonie avevano ciascuna un governatore nominato dal re e un'<b>assemblea elettiva</b> che votava le tasse locali. Questo autogoverno, nato un po' per caso, abitua i coloni a decidere da sé e a difendere la propria libertà. La madrepatria, secondo la logica mercantilista, considera però le colonie un mercato per i suoi prodotti e una fonte di materie prime: i coloni possono commerciare solo con l'impero britannico (Navigation Acts).</p>`
    },
    {
      type: "text",
      title: "2. Dalla guerra dei Sette Anni alle tasse: le cause",
      html: `<p>La rottura matura in pochi anni, dopo il 1763.</p>
<ul>
<li>La <b>guerra dei Sette Anni</b> (1756-1763; in America «guerra franco-indiana») finisce con la <b>pace di Parigi</b> (1763): la Gran Bretagna ottiene dalla Francia il Canada e i territori fino al Mississippi. I coloni non temono più i francesi, e quindi non sentono più la necessità della protezione britannica.</li>
<li>Il governo britannico ha però <b>debiti enormi</b> e decide che le colonie devono pagare la loro parte delle spese di difesa. Inoltre, per evitare nuovi conflitti con gli indiani, la Proclamazione del 1763 vieta ai coloni di spingersi a ovest degli Appalachi.</li>
<li><b>Sugar Act</b> (1764) e soprattutto <b>Stamp Act</b> (1765): una tassa su documenti, giornali e carte da gioco. I coloni protestano con lo slogan «<b>No taxation without representation</b>» (nessuna tassa senza rappresentanza): il Parlamento di Londra non ha deputati americani, e dunque non può tassarli. L'Atto è ritirato nel 1766, ma Londra riafferma di avere il diritto di legiferare.</li>
<li><b>Townshend Acts</b> (1767): nuovi dazi su tè, vetro, carta. Boicottaggi. Nel <b>1770</b> a Boston i soldati sparano su una folla: il «massacro di Boston», cinque morti.</li>
<li><b>Tea Act</b> (1773): privilegia la Compagnia delle Indie nella vendita del tè. Il 16 dicembre 1773 un gruppo di coloni travestiti da indiani getta in mare nel porto di Boston oltre 300 casse di tè: il <b>Boston Tea Party</b>.</li>
<li>Londra risponde con le cosiddette <b>Leggi intollerabili</b> (1774): chiude il porto di Boston, limita l'autogoverno del Massachusetts. Le colonie reagiscono unendosi: nel settembre 1774 si riunisce a Filadelfia il <b>Primo Congresso continentale</b>.</li>
</ul>
<p>Come si vede, all'inizio i coloni non chiedono l'indipendenza ma di essere trattati come cittadini inglesi con gli stessi diritti. È la sordità di Londra a trasformare la protesta in rivoluzione.</p>`
    },
    {
      type: "svg",
      title: "La spirale che porta alla rottura",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="15" y="20" width="160" height="60" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="95" y="45" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">1763</text>
<text x="95" y="65" font-size="14" text-anchor="middle" fill="#0f172a">Pace di Parigi, debiti</text>
<rect x="220" y="20" width="160" height="60" rx="8" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
<text x="300" y="45" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">1765-67</text>
<text x="300" y="65" font-size="14" text-anchor="middle" fill="#0f172a">Stamp e Townshend Acts</text>
<rect x="425" y="20" width="160" height="60" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="505" y="45" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">1770-73</text>
<text x="505" y="65" font-size="14" text-anchor="middle" fill="#0f172a">Boston: massacro, Tea Party</text>
<rect x="15" y="130" width="160" height="60" rx="8" fill="#e9d5ff" stroke="#6b21a8" stroke-width="2"/>
<text x="95" y="155" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">1774</text>
<text x="95" y="175" font-size="14" text-anchor="middle" fill="#0f172a">Leggi intollerabili</text>
<rect x="220" y="130" width="160" height="60" rx="8" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
<text x="300" y="155" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">1775</text>
<text x="300" y="175" font-size="14" text-anchor="middle" fill="#0f172a">Lexington e Concord</text>
<rect x="425" y="130" width="160" height="60" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="505" y="155" font-size="15" font-weight="bold" text-anchor="middle" fill="#0f172a">1776</text>
<text x="505" y="175" font-size="14" text-anchor="middle" fill="#0f172a">Indipendenza</text>
<text x="300" y="245" font-size="16" font-weight="bold" text-anchor="middle" fill="#b91c1c">Più Londra tassa e reprime, più i coloni si uniscono</text>
<text x="300" y="272" font-size="14" text-anchor="middle" fill="#0f172a">Dalla richiesta di diritti alla richiesta di indipendenza</text>
</svg>`,
      caption: "Una protesta fiscale diventa una rivoluzione politica."
    },
    {
      type: "example",
      title: "«No taxation without representation»",
      html: `<p>Immagina che il consiglio d'istituto della tua scuola decida un'imposta sugli studenti di un'altra scuola, che non hanno eletto nessun rappresentante in quel consiglio. Direbbero: «Non abbiamo votato per voi, perché dovremmo pagare?». È il ragionamento dei coloni: nella tradizione inglese (Magna Charta, Bill of Rights del 1689) le imposte devono essere approvate dai rappresentanti dei tassati. Ai coloni, che non hanno deputati a Westminster, la tassa sembra arbitraria e il diritto da difendere è lo stesso per cui gli inglesi avevano combattuto contro Carlo I.</p>`
    },
    {
      type: "text",
      title: "3. La Dichiarazione d'indipendenza e la guerra",
      html: `<p>Il 19 aprile 1775, a <b>Lexington</b> e <b>Concord</b> (Massachusetts), scoppiano i primi scontri armati tra milizie dei coloni e soldati britannici. Il Secondo Congresso continentale nomina comandante dell'esercito il virginiano <b>George Washington</b>. Nel gennaio 1776 il pamphlet <i>Common Sense</i> di <b>Thomas Paine</b> convince molti che la riconciliazione è impossibile e che la monarchia sia illegittima.</p>
<p>Il <b>4 luglio 1776</b> il Congresso approva la <b>Dichiarazione d'indipendenza</b>, redatta soprattutto da <b>Thomas Jefferson</b>. Il testo ha due parti:</p>
<ul>
<li>una parte teorica, di impronta lockiana: «tutti gli uomini sono creati uguali» e hanno diritti inalienabili, tra cui «<b>la vita, la libertà e la ricerca della felicità</b>»; i governi nascono dal consenso dei governati e, se diventano oppressivi, il popolo ha il diritto di cambiarli;</li>
<li>una parte di accuse contro il re Giorgio III, elencate una per una.</li>
</ul>
<p><b>La guerra</b> (1775-1783):</p>
<ul>
<li>sulla carta l'esercito britannico è molto più forte e ben addestrato, ma deve combattere a 5000 km da casa, in un territorio immenso; Washington evita lo scontro frontale decisivo e logora il nemico.</li>
<li>Svolta a <b>Saratoga</b> (ottobre 1777): una vittoria americana convince la <b>Francia</b> di Luigi XVI (che cerca la rivincita sulla Gran Bretagna) a firmare nel 1778 un'alleanza con gli Stati Uniti. Anche Spagna e Olanda entrano in guerra contro la Gran Bretagna. Volontari come il marchese di <b>La Fayette</b> raggiungono Washington.</li>
<li>Nel <b>1781</b> a <b>Yorktown</b> (Virginia) l'esercito di Cornwallis, accerchiato da truppe americane e francesi e bloccato dalla flotta francese, si arrende.</li>
<li>Con la <b>pace di Parigi</b> (1783) la Gran Bretagna riconosce l'indipendenza degli Stati Uniti, i cui confini arrivano al Mississippi.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Mappa 3D: la rivoluzione americana",
      scene: "spacetime",
      caption: "Altezza = tempo (1763-1791). Tocca gli eventi per vedere cause ed effetti.",
      options: {
        lat: [32, 46],
        lon: [-82, -66],
        years: [1763, 1792],
        places: [
          { lat: 42.36, lon: -71.06, label: "Boston" },
          { lat: 39.95, lon: -75.16, label: "Filadelfia" },
          { lat: 40.71, lon: -74.0, label: "New York" },
          { lat: 37.23, lon: -76.51, label: "Yorktown" },
          { lat: 38.9, lon: -77.04, label: "Washington (futura capitale)" }
        ],
        events: [
          { id: "parigi", lat: 40.0, lon: -75.0, year: 1763, label: "Pace di Parigi", html: "La Gran Bretagna prende il Canada; i debiti spingono a tassare le colonie.", causes: [] },
          { id: "stamp", lat: 42.36, lon: -71.06, year: 1765, label: "Stamp Act", html: "Proteste: nessuna tassa senza rappresentanza.", causes: ["parigi"] },
          { id: "massacro", lat: 42.36, lon: -71.06, year: 1770, label: "Massacro di Boston", html: "Cinque coloni uccisi dai soldati britannici.", causes: ["stamp"] },
          { id: "tea", lat: 42.35, lon: -71.05, year: 1773, label: "Boston Tea Party", html: "Casse di tè gettate in mare.", causes: ["massacro"] },
          { id: "congr", lat: 39.95, lon: -75.16, year: 1774, label: "Primo Congresso continentale", html: "Le colonie si coordinano contro le Leggi intollerabili.", causes: ["tea"] },
          { id: "lexington", lat: 42.45, lon: -71.23, year: 1775, label: "Lexington e Concord", html: "Primi scontri armati.", causes: ["congr"] },
          { id: "indip", lat: 39.95, lon: -75.16, year: 1776, label: "Dichiarazione d'indipendenza", html: "4 luglio 1776: Jefferson e il Congresso.", causes: ["lexington"] },
          { id: "saratoga", lat: 43.0, lon: -73.6, year: 1777, label: "Saratoga", html: "Vittoria americana: la Francia si schiera.", causes: ["indip"] },
          { id: "york", lat: 37.23, lon: -76.51, year: 1781, label: "Yorktown", html: "Resa di Cornwallis.", causes: ["saratoga"] },
          { id: "pace", lat: 48.0, lon: -66.0, year: 1783, label: "Pace di Parigi", html: "Riconoscimento dell'indipendenza.", causes: ["york"] },
          { id: "cost", lat: 39.95, lon: -75.16, year: 1787, label: "Convenzione di Filadelfia", html: "Si scrive la Costituzione.", causes: ["pace"] },
          { id: "bill", lat: 40.71, lon: -74.0, year: 1791, label: "Bill of Rights", html: "Dieci emendamenti sui diritti individuali.", causes: ["cost"] }
        ]
      }
    },
    {
      type: "quiz",
      title: "Mini-quiz: dalla protesta alla guerra",
      questions: [
        { type: "mc", q: "Qual era lo slogan dei coloni contro le tasse britanniche?", options: ["No taxation without representation", "Liberté, égalité, fraternité", "God save the King"], answer: 0, explain: "Nessuna tassa senza rappresentanza." },
        { type: "num", q: "In che anno fu proclamata l'indipendenza degli Stati Uniti?", answer: 1776, tol: 0, explain: "Il 4 luglio 1776." },
        { type: "tf", q: "La vittoria di Saratoga convinse la Francia ad allearsi con gli americani.", answer: true, explain: "Fu la svolta diplomatica della guerra." }
      ]
    },
    {
      type: "text",
      title: "4. Dalla Confederazione alla Costituzione",
      html: `<p>Dopo la vittoria gli Stati, ora «sovrani», sono uniti dagli <b>Articoli di Confederazione</b> (scritti nel 1777, in vigore dal 1781): un governo centrale debolissimo, senza potere di tassare né di regolare il commercio. Nascono guai: debiti di guerra non pagati, rivalità fra Stati, la rivolta di Shays nel Massachusetts (1786-87), contadini indebitati.</p>
<p>Nel 1787 la <b>Convenzione di Filadelfia</b>, presieduta da Washington e con delegati come James Madison, Benjamin Franklin e Alexander Hamilton, invece di riformare gli Articoli scrive una <b>nuova Costituzione</b>, firmata il 17 settembre 1787. Le caratteristiche:</p>
<ul>
<li><b>Repubblica federale</b>: il potere è diviso fra Stati e governo federale; gli Stati mantengono ampie competenze, ma il governo centrale può tassare, avere un esercito, regolare il commercio.</li>
<li><b>Separazione dei poteri</b> (Montesquieu): potere <b>legislativo</b> al Congresso (due Camere: la Camera dei rappresentanti, in proporzione alla popolazione, e il Senato, con due senatori per Stato), potere <b>esecutivo</b> al Presidente, potere <b>giudiziario</b> alla Corte suprema.</li>
<li><b>Pesi e contrappesi</b> (<i>checks and balances</i>): il Presidente può porre il veto, il Congresso può respingerlo a maggioranza qualificata, il Senato ratifica le nomine, la Corte suprema giudica la costituzionalità delle leggi.</li>
<li><b>Sovranità popolare</b>: «We the People» è l'incipit del Preambolo.</li>
</ul>
<p>Per essere approvata la Costituzione deve essere ratificata dagli Stati. Dibattito acceso tra <b>federalisti</b> (Hamilton, Madison, Jay, autori dei <i>Federalist Papers</i>) e <b>antifederalisti</b>, che temono un potere centrale troppo forte. Si arriva a un compromesso: nel 1791 vengono aggiunti dieci emendamenti, il <b>Bill of Rights</b> (libertà di parola, di stampa, di religione, diritto a un giusto processo, diritto di portare armi...). Nel 1789 <b>Washington</b> è eletto primo Presidente.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la Costituzione americana",
      intro: "Una tabella dei poteri, un'analogia con un gioco e una linea del tempo.",
      tabs: [
        {
          label: "📊 I tre poteri e i contrappesi",
          html: `<table>
<tr><th>Potere</th><th>Chi</th><th>Che cosa fa</th><th>Come è controllato</th></tr>
<tr><td>Legislativo</td><td>Congresso (Camera + Senato)</td><td>Fa le leggi, vota le tasse</td><td>Il Presidente può porre il veto; la Corte può dichiarare una legge incostituzionale</td></tr>
<tr><td>Esecutivo</td><td>Presidente</td><td>Applica le leggi, comanda l'esercito</td><td>Il Senato ratifica nomine e trattati; il Congresso può metterlo in stato d'accusa (<i>impeachment</i>)</td></tr>
<tr><td>Giudiziario</td><td>Corte suprema</td><td>Giudica e interpreta la Costituzione</td><td>Giudici nominati dal Presidente e confermati dal Senato</td></tr>
</table>`
        },
        {
          label: "⚖️ L'analogia del triangolo",
          html: `<p>Immagina tre persone che portano insieme un tavolo pesante, ciascuna con una mano: nessuna può muoverlo da sola, e se una vuole andare dove non vogliono le altre due, il tavolo non si muove. È lo stesso principio dei <b>checks and balances</b>: nessuno dei tre poteri può agire da solo, quindi nessuno può dominare. Il prezzo è la lentezza; il vantaggio è che un abuso richiede la complicità di altri.</p>
<p>James Madison lo spiegò nel <i>Federalist n. 51</i>: «Se gli uomini fossero angeli non servirebbe nessun governo»; poiché non lo sono, bisogna «obbligare il governo a controllare se stesso».</p>`
        },
        {
          label: "📅 Linea del tempo",
          html: `<p>Dalla pace del 1763 al Bill of Rights.</p>`,
          widget: "timeline",
          options: { events: [
            { year: 1763, label: "Pace di Parigi", icon: "🕊️" },
            { year: 1765, label: "Stamp Act", icon: "💷" },
            { year: 1773, label: "Boston Tea Party", icon: "🍵" },
            { year: 1776, label: "Dichiarazione d'indipendenza", icon: "📜" },
            { year: 1781, label: "Yorktown", icon: "⚔️" },
            { year: 1783, label: "Pace di Parigi", icon: "🕊️" },
            { year: 1787, label: "Costituzione", icon: "🏛️" },
            { year: 1791, label: "Bill of Rights", icon: "✍️" }
          ], unit: "anni" }
        }
      ]
    },
    {
      type: "decision",
      title: "1787: come dividere il potere tra gli Stati?",
      html: `<p>Sei un delegato alla Convenzione di Filadelfia. Gli Stati grandi (Virginia) vogliono un Congresso in cui contino di più, in proporzione alla popolazione; gli Stati piccoli (New Jersey, Delaware) vogliono una rappresentanza eguale per ogni Stato. Il rischio è che la Convenzione fallisca e l'Unione si sciolga. C'è anche un altro problema: il Sud vuole contare nella popolazione anche gli schiavi, ma senza concedere loro il voto.</p>`,
      question: "Quale soluzione scegli?",
      options: [
        { label: "Una Camera proporzionale e un Senato con due senatori per Stato.", outcome: "È il «Grande Compromesso» adottato davvero: la Camera rappresenta la popolazione, il Senato gli Stati." },
        { label: "Solo una Camera proporzionale alla popolazione.", outcome: "Gli Stati piccoli avrebbero rifiutato di ratificare: l'Unione rischiava di non nascere." },
        { label: "Solo un Senato con rappresentanza uguale.", outcome: "Gli Stati grandi, con più abitanti e più tasse, non avrebbero accettato." }
      ],
      answer: 0,
      explain: "Il compromesso salvò la Convenzione. Ebbe però un costo morale: per conciliare Nord e Sud si adottò il «compromesso dei tre quinti» (gli schiavi contati come tre quinti di una persona per la rappresentanza), e la schiavitù, contraddizione con la Dichiarazione, restò in vigore fino alla guerra civile (1861-1865) e al XIII emendamento (1865)."
    },
    {
      type: "example",
      title: "Un veto presidenziale in azione",
      html: `<p>Il Congresso approva una legge, ma il Presidente non è d'accordo e la rimanda indietro con il <b>veto</b>. Per renderla comunque legge il Congresso deve rivotarla con una maggioranza di due terzi in entrambe le Camere: un'impresa difficile, che costringe a cercare un compromesso. Se poi qualcuno ritiene la legge contraria alla Costituzione, può rivolgersi ai giudici: dal 1803 (caso <i>Marbury contro Madison</i>) la Corte suprema rivendica il potere di annullarla. In pochi passaggi vedi all'opera i tre poteri che si frenano a vicenda.</p>`
    },
    {
      type: "curiosity",
      title: "La Costituzione più antica ancora in vigore",
      html: `<p>La Costituzione degli Stati Uniti (1787) è la più antica costituzione scritta tuttora in vigore: ha solo 7 articoli ed è stata modificata con <b>27 emendamenti</b>. Lo stesso testo ha attraversato la schiavitù, la guerra civile, il suffragio femminile (XIX emendamento, 1920) e i diritti civili. Un testo breve e flessibile può sopravvivere per secoli, purché i cittadini e i giudici continuino a interpretarlo.</p>`
    },
    {
      type: "curiosity",
      title: "Il tè e la bandiera",
      html: `<p>Il Boston Tea Party non fu una protesta contro il prezzo del tè, che anzi sarebbe diminuito grazie al Tea Act, ma contro il principio: pagare il dazio avrebbe significato riconoscere al Parlamento il diritto di tassarli. Per questo i coloni distrussero merce per un valore enorme (circa 10.000 sterline di allora). Dopo l'indipendenza gli americani si orientarono al caffè, anche come gesto patriottico.</p>`
    },
    {
      type: "text",
      title: "5. Luci e ombre della rivoluzione",
      html: `<p>La rivoluzione americana ha un valore universale: ha mostrato che si può costruire uno Stato basato sui diritti e sul consenso, e che una grande repubblica è possibile (si pensava che solo le piccole città-stato potessero esserlo). Ha ispirato la Francia del 1789 e le rivoluzioni dell'America latina. Ma ha anche limiti evidenti:</p>
<ul>
<li>la <b>schiavitù</b> resta legale; molti padri fondatori, tra cui Jefferson e Washington, sono proprietari di schiavi;</li>
<li>i <b>nativi americani</b> sono esclusi dalla cittadinanza e, dopo il 1783, sempre più cacciati verso ovest;</li>
<li>le <b>donne</b> non hanno il voto; il diritto di voto, nei primi decenni, dipende anche dalla proprietà e varia da Stato a Stato;</li>
<li>i <b>lealisti</b> (circa 60.000 fedeli al re) emigrano, soprattutto in Canada.</li>
</ul>
<p>Il lavoro di estensione dei diritti si compie nei secoli seguenti, appellandosi proprio ai principi della Dichiarazione: chi lotta contro la schiavitù (Lincoln, Frederick Douglass) o per il voto alle donne (Seneca Falls, 1848) li cita e li prende sul serio.</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa: dalle colonie agli Stati Uniti",
      nodes: [
        { id: "coloni", label: "Tredici colonie", x: 20, y: 4, color: "#0ea5e9", html: "Autogoverno e assemblee locali.", why: "Lontane da Londra, le colonie si abituano a decidere da sé: ciò rende insopportabile il controllo diretto." },
        { id: "tasse", label: "Tasse e Londra", x: 52, y: 4, color: "#f59e0b", html: "Stamp Act, Tea Act, Leggi intollerabili.", why: "I debiti della guerra dei Sette Anni spingono Londra a tassare i coloni, che invocano «no taxation without representation»." },
        { id: "idee", label: "Idee dei lumi", x: 84, y: 4, color: "#7c3aed", html: "Locke, Montesquieu, Rousseau.", why: "Forniscono il linguaggio dei diritti naturali, del patto e della separazione dei poteri." },
        { id: "indip", label: "Indipendenza", x: 35, y: 38, color: "#ef4444", html: "4 luglio 1776, Jefferson.", why: "Dopo Lexington e il rifiuto di Londra di ascoltare, la rottura è l'unica via; la Dichiarazione la giustifica con i diritti naturali." },
        { id: "guerra", label: "Guerra", x: 70, y: 38, color: "#b91c1c", html: "Washington, Saratoga, Yorktown.", why: "La vittoria dipende dalla distanza, dalla tenacia di Washington e dall'alleanza francese." },
        { id: "conf", label: "Confederazione debole", x: 20, y: 72, color: "#64748b", html: "Articoli di Confederazione.", why: "Gli Stati temono un governo forte; il risultato è un'Unione paralizzata, che spinge alla riforma." },
        { id: "cost", label: "Costituzione federale", x: 52, y: 78, color: "#16a34a", html: "Poteri separati, federalismo, Bill of Rights.", why: "Combina un governo forte con limiti: applicazione pratica di Montesquieu e Locke." },
        { id: "ombre", label: "Contraddizioni", x: 84, y: 72, color: "#14b8a6", html: "Schiavitù, nativi, donne.", why: "I diritti proclamati sono più ampi di chi ne gode: le lotte successive li estendono." }
      ],
      edges: [["coloni", "tasse", "scontro con"], ["tasse", "indip", "porta a"], ["idee", "indip", "giustificano"], ["indip", "guerra", "provoca"], ["guerra", "conf", "lascia"], ["conf", "cost", "spinge a"], ["cost", "ombre", "lascia aperte"]]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Cause</b>: dopo il 1763 Londra tassa le colonie (Stamp Act 1765, Tea Act 1773); i coloni rispondono «no taxation without representation».</li>
<li><b>4 luglio 1776</b>: Dichiarazione d'indipendenza (Jefferson): diritti naturali, consenso dei governati.</li>
<li><b>Guerra</b>: Saratoga 1777, alleanza francese, Yorktown 1781, pace di Parigi 1783.</li>
<li><b>Costituzione</b> (1787): federalismo, separazione dei poteri, pesi e contrappesi; Bill of Rights 1791; Washington primo presidente (1789).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: Costituzione",
      questions: [
        { type: "mc", q: "Che cosa prevede il sistema dei checks and balances?", options: ["Che i poteri si controllino a vicenda", "Che il Presidente abbia tutti i poteri", "Che gli Stati non abbiano alcun potere"], answer: 0, explain: "Nessun potere può dominare gli altri." },
        { type: "tf", q: "Il Bill of Rights è costituito dai primi dieci emendamenti.", answer: true, explain: "Approvati nel 1791." },
        { type: "text", q: "Chi fu il primo Presidente degli Stati Uniti?", answer: ["washington", "george washington"], explain: "Eletto nel 1789." }
      ]
    }
  ],
  glossary: [
    { t: "Colonie", d: "Territori d'oltremare governati da una potenza europea." },
    { t: "Congresso continentale", d: "Assemblea dei delegati delle colonie ribelli." },
    { t: "Federalismo", d: "Forma di Stato in cui il potere è diviso tra governo centrale e Stati membri." },
    { t: "Checks and balances", d: "Pesi e contrappesi: i poteri dello Stato si controllano a vicenda." },
    { t: "Bill of Rights", d: "Primi dieci emendamenti alla Costituzione americana (1791)." },
    { t: "Lealisti", d: "Coloni rimasti fedeli alla Corona britannica." },
    { t: "Emendamento", d: "Modifica o aggiunta a una Costituzione." },
    { t: "Impeachment", d: "Messa in stato d'accusa di un alto funzionario da parte del Congresso." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale evento fece da svolta diplomatica durante la guerra d'indipendenza?", options: ["Saratoga, che portò all'alleanza con la Francia", "La Tea Party", "Il Bill of Rights"], answer: 0, explain: "La vittoria del 1777 persuase Luigi XVI ad allearsi." },
      { type: "num", q: "In che anno fu firmata la pace di Parigi che riconobbe l'indipendenza americana?", answer: 1783, tol: 0, explain: "Pose fine alla guerra." },
      { type: "tf", q: "Gli Articoli di Confederazione davano al governo centrale il potere di tassare.", answer: false, explain: "Era uno dei limiti principali." },
      { type: "text", q: "Come si chiama l'autore principale della Dichiarazione d'indipendenza?", answer: ["jefferson", "thomas jefferson"], explain: "Thomas Jefferson." },
      { type: "mc", q: "Che cosa rappresenta il Senato nella Costituzione?", options: ["Gli Stati, con due senatori ciascuno", "La popolazione, in proporzione", "Il Presidente"], answer: 0, explain: "È il frutto del Grande Compromesso." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Stamp Act", "Boston Tea Party", "Dichiarazione d'indipendenza", "Yorktown", "Convenzione di Filadelfia"], explain: "1765, 1773, 1776, 1781, 1787." },
      { type: "mc", q: "Qual era la principale contraddizione della rivoluzione americana?", options: ["Proclamava l'uguaglianza ma manteneva la schiavitù", "Era contro la libertà", "Voleva restaurare la monarchia"], answer: 0, explain: "Fu superata solo dopo la guerra civile." },
      { type: "tf", q: "Il «massacro di Boston» avvenne nel 1770.", answer: true, explain: "Cinque coloni furono uccisi dai soldati britannici." },
      { type: "mc", q: "Perché i coloni protestarono contro lo Stamp Act?", options: ["Perché era una tassa decisa senza loro rappresentanti", "Perché abolì il commercio", "Perché li obbligava a emigrare"], answer: 0, explain: "Contestarono il principio più che l'importo." }
    ]
  }
});

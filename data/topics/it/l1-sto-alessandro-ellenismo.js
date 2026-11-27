TOPIC('it', {
  id: "l1-sto-alessandro-ellenismo",
  title: "Alessandro Magno e l'Ellenismo",
  intro: "In poco più di <b>dieci anni</b>, tra il 334 e il 323 a.C., un re di vent'anni partito da un regno ai margini del mondo greco conquistò l'impero più grande che si fosse mai visto, dal Mediterraneo all'India. Morì a 32 anni, senza aver sistemato la successione. Ma la sua avventura cambiò il mondo: dalle sue conquiste nacque una civiltà nuova, l'<b>Ellenismo</b>, in cui la lingua e la cultura greche si mescolarono con quelle d'Egitto, Persia e Asia. In questa lezione seguiamo Alessandro e scopriamo che cosa fu l'eredità che lasciò.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. La Macedonia di Filippo II",
      html: `<p>La <b>Macedonia</b>, a nord della Grecia, era un regno di pastori e contadini governato da re e nobili guerrieri. I Greci la consideravano semibarbara, anche se i suoi re parlavano greco. Con <b>Filippo II</b> (359-336 a.C.) diventò la potenza dominante:</p>
<ul>
<li><b>Esercito riformato</b>: fanteria con la <b>sarissa</b> (una lancia lunga circa 5-6 metri) in una <b>falange</b> compatta, cavalleria dei <b>Compagni</b>, ingegneria d'assedio.</li>
<li><b>Risorse</b>: miniere d'oro del monte Pangeo, che finanziarono esercito e diplomazia.</li>
<li><b>Politica</b>: approfittando delle divisioni tra poleis (indebolite dalla guerra del Peloponneso), Filippo si impose a poco a poco. Nel <b>338 a.C.</b> a <b>Cheronea</b> sconfisse Atene e Tebe. Il retore ateniese <b>Demostene</b> lo aveva avvertito con le sue «Filippiche»: troppo tardi.</li>
<li>Nel 337 a.C. creò la <b>Lega di Corinto</b>: tutte le poleis (tranne Sparta) giuravano alleanza e riconoscevano Filippo come capo, per muovere guerra alla Persia.</li>
</ul>
<p>Filippo fu assassinato nel <b>336 a.C.</b> durante le nozze della figlia. Gli successe suo figlio <b>Alessandro</b>.</p>`
    },
    {
      type: "text",
      title: "2. Alessandro: gioventù e primi passi",
      html: `<p><b>Alessandro</b> nacque nel <b>356 a.C.</b> a Pella, figlio di Filippo II e di Olimpiade. A 13 anni ebbe come maestro il filosofo <b>Aristotele</b>, che gli trasmise l'amore per Omero, la scienza e la geografia. A 16 anni governò il regno durante un'assenza del padre; a 18 comandò la cavalleria a Cheronea. Salì al trono a <b>20 anni</b> (336 a.C.), sottomise rapidamente i ribelli (distrusse Tebe nel 335 a.C.) e nel <b>334 a.C.</b> attraversò l'Ellesponto con circa 40.000 uomini: Macedoni, Greci alleati, Traci.</p>
<p>Il suo obiettivo dichiarato era vendicare l'invasione persiana di Serse e liberare i Greci d'Asia. Ma l'impresa ebbe presto una dimensione nuova: la conquista dell'impero persiano.</p>`
    },
    {
      type: "3d",
      title: "Mappa 3D: la marcia di Alessandro (334-323 a.C.)",
      scene: "spacetime",
      caption: "La base è la carta dall'Egeo all'India, l'altezza è il tempo (336-320 a.C.). Tocca gli eventi per vedere le tappe della conquista.",
      options: {
        lat: [24, 44],
        lon: [20, 78],
        years: [-337, -320],
        places: [
          { lat: 40.76, lon: 22.52, label: "Pella" },
          { lat: 32.5, lon: 44.4, label: "Babilonia" },
          { lat: 29.9, lon: 52.9, label: "Persepoli" },
          { lat: 31.2, lon: 29.9, label: "Alessandria" }
        ],
        events: [
          { id: "pella", lat: 40.76, lon: 22.52, year: -336, label: "Alessandro re", html: "Alla morte di Filippo II, Alessandro (20 anni) diventa re di Macedonia. Reprime le rivolte in Grecia.", causes: [] },
          { id: "granico", lat: 40.2, lon: 27.3, year: -334, label: "Granico", html: "Primavera 334 a.C.: prima battaglia contro i satrapi persiani; vittoria macedone e controllo dell'Asia Minore.", causes: ["pella"] },
          { id: "isso", lat: 36.8, lon: 36.2, year: -333, label: "Isso", html: "Nel 333 a.C. Alessandro sconfigge il re persiano Dario III, che fugge lasciando la famiglia.", causes: ["granico"] },
          { id: "tiro", lat: 33.27, lon: 35.2, year: -332, label: "Assedio di Tiro", html: "Dopo sette mesi, nel 332 a.C., Alessandro conquista Tiro costruendo una diga fino all'isola.", causes: ["isso"] },
          { id: "egitto", lat: 31.2, lon: 29.9, year: -331, label: "Egitto e Alessandria", html: "Gli Egizi lo accolgono come liberatore dai Persiani. Nel 331 a.C. fonda <b>Alessandria</b>, che diventerà capitale della cultura ellenistica.", causes: ["tiro"] },
          { id: "gaugamela", lat: 36.4, lon: 43.3, year: -331, label: "Gaugamela", html: "Il 1° ottobre 331 a.C. la vittoria decisiva su Dario III. Alessandro entra a Babilonia, poi a Susa.", causes: ["egitto"] },
          { id: "persepoli", lat: 29.93, lon: 52.9, year: -330, label: "Persepoli", html: "Nel 330 a.C. Alessandro conquista Persepoli, capitale cerimoniale, e il suo palazzo viene incendiato. Dario III viene assassinato dai suoi.", causes: ["gaugamela"] },
          { id: "battriana", lat: 36.7, lon: 67.1, year: -329, label: "Battriana e Sogdiana", html: "Tra il 329 e il 327 a.C. campagne difficili in Asia centrale. Sposa la principessa Rossane.", causes: ["persepoli"] },
          { id: "idaspe", lat: 32.7, lon: 73.4, year: -326, label: "Idaspe", html: "Nel 326 a.C. vince il re indiano Poro sul fiume Idaspe. Ai confini dell'India l'esercito, stremato, si rifiuta di proseguire.", causes: ["battriana"] },
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -323, label: "Morte a Babilonia", html: "Giugno 323 a.C.: Alessandro muore a Babilonia, a 32 anni (per febbre, forse malaria o tifo; la causa resta incerta). L'impero è senza erede adulto.", causes: ["idaspe"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Le conquiste: dal Granico all'India",
      html: `<p>La conquista procedette per tappe:</p>
<ul>
<li><b>334 a.C. Granico</b>: vittoria sui satrapi persiani e controllo dell'Asia Minore.</li>
<li><b>333 a.C. Isso</b>: il re persiano <b>Dario III</b> è sconfitto in Cilicia e fugge.</li>
<li><b>332 a.C.</b>: assedio e distruzione di <b>Tiro</b>, poi l'<b>Egitto</b> si arrende senza combattere; nell'oasi di Siwa i sacerdoti lo salutano come figlio di Ammone (il Zeus egizio).</li>
<li><b>331 a.C. Gaugamela</b>: nuova vittoria contro un esercito persiano molto più numeroso; Alessandro è il «Gran Re» di Persia.</li>
<li><b>330 a.C.</b>: Persepoli incendiata; Dario III viene ucciso da un suo satrapo.</li>
<li><b>329-327 a.C.</b>: Battriana e Sogdiana (Afghanistan e Asia centrale): una guerriglia durissima.</li>
<li><b>326 a.C.</b>: India nord-occidentale, vittoria contro Poro all'<b>Idaspe</b>; poi sul fiume Ifasi l'esercito si rifiuta di proseguire.</li>
<li><b>325-324 a.C.</b>: ritorno attraverso il deserto della Gedrosia (con gravi perdite); a Susa celebra nozze di massa tra Macedoni e donne persiane per fondere le élite.</li>
<li><b>323 a.C.</b>: muore a <b>Babilonia</b>, a 32 anni, mentre prepara nuove spedizioni.</li>
</ul>
<p><b>Come ci riuscì?</b> Con un esercito addestrato e fedele, una cavalleria eccellente, un'abile tattica (attaccava il punto più debole, spesso alla testa dei suoi), grande coraggio personale e ... la debolezza dell'impero persiano, grande ma poco unito. Il suo prezzo fu enorme: città distrutte, centinaia di migliaia di morti, esecuzioni anche di fedelissimi.</p>`
    },
    {
      type: "svg",
      title: "L'impero di Alessandro (schema)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<path d="M40 170 L70 150 L120 160 L130 190 L90 210 L50 200 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="85" y="185" font-size="14" text-anchor="middle" fill="#0f172a">Grecia</text>
<path d="M150 150 L300 120 L420 130 L500 160 L520 220 L400 250 L250 240 L160 210 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="330" y="190" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">IMPERO DI ALESSANDRO</text>
<polyline points="90,175 170,170 230,160 280,190 330,200 400,170 490,160" fill="none" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<g fill="#dc2626"><circle cx="90" cy="175" r="6"/><circle cx="170" cy="170" r="6"/><circle cx="230" cy="160" r="6"/><circle cx="280" cy="190" r="6"/><circle cx="330" cy="200" r="6"/><circle cx="400" cy="170" r="6"/><circle cx="490" cy="160" r="6"/></g>
<g font-size="14" fill="#0f172a" text-anchor="middle"><text x="170" y="150">Isso</text><text x="230" y="140">Egitto</text><text x="280" y="215">Babilonia</text><text x="400" y="150">Persepoli</text><text x="490" y="145">India</text></g>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#7c2d12">334 a.C. – 323 a.C.: circa 11 anni di campagna, oltre 20.000 km percorsi</text>
</svg>`,
      caption: "Mappa molto semplificata dell'itinerario; la linea tratteggiata indica la marcia verso est."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Alessandro",
      questions: [
        { type: "mc", q: "Chi fu il maestro di Alessandro?", options: ["Aristotele", "Platone", "Socrate"], answer: 0, explain: "Aristotele, filosofo greco." },
        { type: "mc", q: "In quale battaglia Alessandro sconfisse definitivamente Dario III?", options: ["Gaugamela", "Maratona", "Idaspe"], answer: 0, explain: "A Gaugamela nel 331 a.C." },
        { type: "tf", q: "Alessandro morì a 32 anni a Babilonia.", answer: true, explain: "Nel giugno 323 a.C." },
        { type: "text", q: "Quale città egiziana fondò nel 331 a.C.?", answer: ["alessandria", "alessandria d'egitto"], explain: "Alessandria, sulla costa del Delta del Nilo." }
      ]
    },
    {
      type: "decision",
      title: "Sul fiume Ifasi, 326 a.C.: avanti o indietro?",
      html: `<p>Sei Alessandro. L'esercito ha percorso migliaia di chilometri in otto anni, ha combattuto sotto le piogge monsoniche. Davanti, oltre il fiume Ifasi, ci sono altri regni indiani e si dice un esercito di centinaia di elefanti. I soldati sono stanchi, malati, vogliono rivedere la patria. Il tuo generale Coeno parla a nome di tutti: «torniamo».</p>`,
      question: "Che cosa decidi?",
      options: [
        { label: "Proseguire verso est ad ogni costo, anche contro il volere dell'esercito.", outcome: "Rischi un ammutinamento: senza il consenso delle truppe, anche un re semidivino non può comandare. Il tuo prestigio e la tua vita sarebbero in pericolo." },
        { label: "Cedere e tornare indietro, fondando nuove città e consolidando l'impero.", outcome: "Salvi l'esercito e puoi organizzare il territorio, anche se rinunci al sogno di raggiungere l'«Oceano orientale». Ma il ritorno è durissimo: nel deserto della Gedrosia muoiono molti soldati." },
        { label: "Congedare l'esercito e continuare con volontari locali.", outcome: "Rischi di perdere il nucleo militare macedone e di ritrovarti circondato da popoli ostili." }
      ],
      answer: 1,
      explain: "Alessandro, dopo tre giorni chiuso nella sua tenda, dovette cedere: sul fiume <b>Ifasi</b> (oggi Beas) l'esercito si rifiutò di proseguire. Fece costruire dodici altari e tornò indietro. Anche i più grandi condottieri dipendono dal consenso di chi li segue."
    },
    {
      type: "text",
      title: "4. Dopo Alessandro: i Diadochi e i regni ellenistici",
      html: `<p>Alessandro morì senza un erede adatto (il figlio Alessandro IV nacque dopo la sua morte). I suoi generali, i <b>Diadochi</b> («successori»), si contesero l'impero in lunghe guerre e dopo la battaglia di <b>Ipso</b> (301 a.C.) si formarono tre grandi regni, a cui se ne aggiunsero altri:</p>
<ul>
<li><b>Regno dei Tolomei</b> (Egitto): fondato da <b>Tolomeo I</b>, capitale <b>Alessandria</b>. Durò fino alla morte di <b>Cleopatra VII</b> (30 a.C.), ultima regina, quando Roma lo annetté.</li>
<li><b>Regno dei Seleucidi</b> (Siria, Mesopotamia, Persia): fondato da <b>Seleuco I</b>, capitale Antiochia; il più vasto, ma più difficile da tenere insieme.</li>
<li><b>Regno degli Antigonidi</b> (Macedonia e Grecia): più tradizionale, vicino a Roma.</li>
<li>Altri: il regno di <b>Pergamo</b> (Attalidi), il regno greco-battriano (Afghanistan), il regno di Siracusa.</li>
</ul>
<p>Questi regni erano <b>monarchie assolute</b>: il re era capo militare, giudice e talvolta divinizzato. Tra loro combattevano continue guerre per il controllo di territori come la Siria. Le antiche poleis greche, sempre più piccole e deboli, formarono leghe (come la Lega Achea e la Lega Etolica) per resistere.</p>`
    },
    {
      type: "text",
      title: "5. Che cos'è l'Ellenismo",
      html: `<p>Il termine <b>ellenismo</b> (dal tedesco di Droysen, XIX secolo) indica il periodo dalla morte di Alessandro (323 a.C.) alla conquista romana dell'Egitto (30 a.C.), e la cultura che lo caratterizza: una <b>civiltà greca allargata e mescolata</b> con le culture orientali.</p>
<ul>
<li><b>Lingua comune</b>: la <b>koinè</b>, un greco semplificato parlato e scritto da Egitto a Persia. Anche il Nuovo Testamento sarà scritto in koinè.</li>
<li><b>Nuove città</b>: Alessandro e i suoi successori fondarono decine di città con nome greco (le Alessandrie, le Antiochie, le Seleucie) con ginnasi, teatri, templi, mercati. Una nuova élite greca governava popolazioni locali.</li>
<li><b>Incontro di culture</b>: culto di Iside e Serapide, arte greco-buddhista del Gandhara (volti di Budda con tratti greci), mescolanza di divinità.</li>
<li><b>Cosmopolitismo</b>: dopo la crisi della polis, l'uomo non si sente più «cittadino di una città» ma <b>cittadino del mondo</b> (<i>kosmopolítes</i>).</li>
<li><b>Economia</b>: grandi commerci e monete comuni, rotte via mare e carovane fino all'India e alla Cina.</li>
</ul>
<p>Non tutti però ne beneficiarono: i Greci dominavano, i locali spesso restavano al margine. E non mancarono rivolte, come quella dei Maccabei in Giudea contro il re seleucide Antioco IV (167 a.C.).</p>`
    },
    {
      type: "text",
      title: "6. Scienza, filosofia, arte ellenistiche",
      html: `<p>I re ellenistici finanziavano la cultura per prestigio. Il centro era <b>Alessandria d'Egitto</b>, con il <b>Museo</b> (istituto di ricerca) e la <b>Biblioteca</b>, che puntava a raccogliere tutti i libri del mondo (le stime parlano di centinaia di migliaia di rotoli). Il <b>Faro</b> di Alessandria (circa 280 a.C., oltre 100 metri) era una delle sette meraviglie del mondo.</p>
<ul>
<li><b>Matematica</b>: <b>Euclide</b> scrisse gli <i>Elementi</i> (circa 300 a.C.), il manuale di geometria usato per oltre duemila anni. <b>Archimede</b> di Siracusa (287-212 a.C.) calcolò aree e volumi, trovò la legge della leva e dell'idrostatica («Eureka!»).</li>
<li><b>Astronomia e geografia</b>: <b>Aristarco di Samo</b> propose che la Terra girasse intorno al Sole. <b>Eratostene</b> misurò la circonferenza terrestre (circa 40.000 km) con l'ombra di un bastone a Siene e ad Alessandria. <b>Ipparco</b> catalogò le stelle.</li>
<li><b>Medicina</b>: Erofilo ed Erasistrato studiarono anatomia e sistema nervoso.</li>
<li><b>Filosofia</b>: <b>stoicismo</b> (Zenone: vivere secondo ragione e natura, accettare il destino), <b>epicureismo</b> (Epicuro: la serenità interiore, l'<i>atarassia</i>), <b>scetticismo</b>, <b>cinismo</b>. Cercano la felicità individuale in un mondo grande e incerto.</li>
<li><b>Arte</b>: più drammatica e realistica: il <b>Laocoonte</b>, la <b>Nike di Samotracia</b>, l'<b>Afrodite di Milo</b>; ritratti realistici, scene di vita quotidiana.</li>
<li><b>Letteratura</b>: nasce la filologia (studio dei testi) e la poesia raffinata di Callimaco e Teocrito.</li>
</ul>`
    },
    {
      type: "example",
      title: "Esempio pratico: misurare la Terra con un bastone",
      html: `<p><b>Eratostene</b>, direttore della Biblioteca di Alessandria (circa 240 a.C.), seppe che a Siene (oggi Assuan), il giorno del solstizio d'estate a mezzogiorno, il Sole illumina il fondo di un pozzo (è a picco). Ad Alessandria, nello stesso istante, un bastone verticale proietta un'ombra: l'angolo è circa <b>7,2°</b>, ovvero 1/50 di angolo giro.</p>
<ol>
<li>Se 7,2° corrispondono alla distanza Alessandria-Siene (circa 5000 stadi),</li>
<li>allora l'intera circonferenza è 50 volte tanto: 250.000 stadi.</li>
<li>Con lo stadio più probabile (circa 157-185 m) si ottengono circa <b>40.000-46.000 km</b>: a meno di un 15% dal valore vero (40.075 km).</li>
</ol>
<p>Con una geometria elementare, un bastone e un'idea geniale, fu misurato il pianeta. Puoi ripetere l'esperimento con un amico in un'altra città e uno gnomone!</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: parole greche di oggi",
      html: `<p>La koinè e la scienza ellenistica ci hanno lasciato un vocabolario enorme: <b>geometria</b> (misura della terra), <b>biblioteca</b>, <b>museo</b> (casa delle Muse), <b>filologia</b>, <b>cosmopolita</b>, <b>ginnasio</b>. Quando parliamo di <b>«epicureo»</b> (dedito ai piaceri) o <b>«stoico»</b> (impassibile) usiamo parole delle scuole ellenistiche, anche se spesso con un significato diverso: Epicuro considerava piacere soprattutto la serenità della mente, non il lusso!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il nodo di Gordio",
      html: `<p>A Gordio, in Frigia, un oracolo diceva che chi avesse sciolto un nodo intricatissimo, che legava un carro al suo giogo, sarebbe diventato signore dell'Asia. Alessandro, secondo la leggenda, non riuscendo a scioglierlo, lo <b>tagliò con la spada</b>. Da qui l'espressione «tagliare il nodo gordiano»: risolvere un problema difficile con un gesto netto.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La tomba perduta",
      html: `<p>Il corpo di Alessandro fu trasportato in Egitto da Tolomeo I e sepolto ad Alessandria, dove la tomba fu visitata per secoli da imperatori romani (Augusto, Caracalla). Poi se ne perse ogni traccia: nonostante molte ricerche, nessuno ha mai ritrovato la tomba. È uno dei grandi misteri dell'archeologia.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire l'Ellenismo",
      intro: "Una civiltà che mette insieme mondi diversi: ecco qualche analogia.",
      tabs: [
        {
          label: "🍲 La zuppa del mondo",
          html: `<p>Immagina l'Ellenismo come una grande <b>zuppa</b>: il brodo è la <b>cultura greca</b> (lingua, filosofia, teatro, città), a cui si aggiungono ingredienti dell'Oriente (religioni egizie e persiane, scienza babilonese, arte indiana). Il risultato non è né solo greco né solo orientale: è una cultura <b>mista</b>.</p>
<p>Esempio: un re indo-greco di Battriana, Menandro (II sec. a.C.), dialoga con un monaco buddhista in un testo celebre, il «Milindapañha». Una moneta con testo greco da un lato e indiano dall'altro: un oggetto che parla due lingue.</p>`
        },
        {
          label: "🏛️ Prima e dopo Alessandro",
          html: `<table>
<tr><th></th><th>Prima (polis classica)</th><th>Dopo (età ellenistica)</th></tr>
<tr><td>Stato</td><td>Piccola polis di cittadini</td><td>Grande regno con un re</td></tr>
<tr><td>Cittadino</td><td>Partecipa alla vita politica</td><td>Suddito, spesso lontano dal potere</td></tr>
<tr><td>Filosofia</td><td>Politica e virtù pubblica</td><td>Felicità individuale e cosmopolitismo</td></tr>
<tr><td>Cultura</td><td>Soprattutto greca</td><td>Mista Greco-orientale</td></tr>
<tr><td>Lingua</td><td>Dialetti greci</td><td>Koinè comune</td></tr>
</table>`
        },
        {
          label: "🗺️ Gira il globo",
          html: `<p>Ruota il globo e segui la marcia di Alessandro e le grandi città ellenistiche.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 40.76, lon: 22.52, label: "Pella", color: "#2563eb" },
              { lat: 36.8, lon: 36.2, label: "Isso", color: "#ef4444" },
              { lat: 31.2, lon: 29.9, label: "Alessandria", color: "#16a34a" },
              { lat: 36.4, lon: 43.3, label: "Gaugamela", color: "#ef4444" },
              { lat: 32.5, lon: 44.4, label: "Babilonia", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persepoli", color: "#ef4444" },
              { lat: 32.7, lon: 73.4, label: "Idaspe", color: "#ef4444" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6], color: "#dc2626" }]
          }
        },
        {
          label: "📅 Linea del tempo",
          html: `<p>Scorri la vita di Alessandro e dei suoi successori.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -356, label: "Nasce Alessandro", icon: "👶" },
              { year: -338, label: "Cheronea", icon: "⚔️" },
              { year: -334, label: "Granico", icon: "🏇" },
              { year: -331, label: "Gaugamela, Alessandria", icon: "🏛️" },
              { year: -326, label: "Idaspe", icon: "🐘" },
              { year: -323, label: "Morte di Alessandro", icon: "🕯️" },
              { year: -301, label: "Ipso, regni ellenistici", icon: "👑" },
              { year: -146, label: "Roma distrugge Corinto", icon: "🦅" },
              { year: -30, label: "Fine dell'Egitto tolemaico", icon: "🏺" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: da Filippo all'Ellenismo",
      nodes: [
        { id: "filippo", label: "Filippo II", x: 50, y: 6, color: "#0ea5e9", html: "Rafforza esercito e Stato; vince a Cheronea (338 a.C.).", why: "Le poleis erano esauste e divise; Filippo seppe unire diplomazia, denaro delle miniere e un esercito nuovo con la sarissa." },
        { id: "alessandro", label: "Alessandro", x: 22, y: 30, color: "#ef4444", html: "Conquista l'impero persiano (334-323 a.C.).", why: "Ereditò un esercito pronto e un sogno panellenico; la debolezza persiana e la sua audacia fecero il resto." },
        { id: "fusione", label: "Fusione di culture", x: 78, y: 30, color: "#16a34a", html: "Nozze di Susa, nuove città, adozione di usanze persiane.", why: "Per governare popoli diversi Alessandro cercò di unire élite greco-macedoni e persiane; molti Macedoni però non lo accettarono." },
        { id: "diadochi", label: "Guerre dei Diadochi", x: 50, y: 52, color: "#f97316", html: "I generali si contendono l'impero (323-301 a.C.).", why: "L'impero era troppo vasto e troppo personale: senza un erede adulto, i generali lo spartirono." },
        { id: "regni", label: "Regni ellenistici", x: 20, y: 75, color: "#7c3aed", html: "Tolomei, Seleucidi, Antigonidi, Pergamo.", why: "Monarchie basate su eserciti professionisti e funzionari greci, che governavano popolazioni locali: erano grandi ma instabili." },
        { id: "cultura", label: "Cultura ellenistica", x: 80, y: 75, color: "#eab308", html: "Koinè, scienza, filosofie, arte mista.", why: "I re finanziavano ricerche per prestigio; la lingua comune e le nuove città facilitarono scambi di idee su un'area vastissima." },
        { id: "roma", label: "Conquista romana", x: 50, y: 95, color: "#334155", html: "Macedonia 168, Corinto 146, Pergamo 133, Egitto 30 a.C.", why: "I regni, indeboliti da guerre interne, caddero uno dopo l'altro sotto Roma, che ne ereditò la cultura." }
      ],
      edges: [
        ["filippo", "alessandro", "prepara"],
        ["alessandro", "fusione", "promuove la"],
        ["alessandro", "diadochi", "lascia le"],
        ["diadochi", "regni", "creano i"],
        ["fusione", "cultura", "alimenta la"],
        ["regni", "cultura", "finanziano la"],
        ["regni", "roma", "cadono davanti a"],
        ["cultura", "roma", "ereditata da"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: l'Ellenismo",
      questions: [
        { type: "mc", q: "Che cos'è la koinè?", options: ["La lingua greca comune dell'età ellenistica", "Un tipo di nave", "Un'assemblea"], answer: 0, explain: "Greco semplificato usato in tutto l'impero." },
        { type: "mc", q: "Dove si trovava il Museo con la grande biblioteca?", options: ["Alessandria", "Atene", "Pergamo"], answer: 0, explain: "Alessandria d'Egitto, capitale dei Tolomei." },
        { type: "tf", q: "Eratostene misurò con buona precisione la circonferenza terrestre.", answer: true, explain: "Con l'ombra di un bastone a Siene e Alessandria." },
        { type: "mc", q: "Quale dinastia regnò sull'Egitto dopo Alessandro?", options: ["I Tolomei", "I Seleucidi", "Gli Antigonidi"], answer: 0, explain: "Fondata da Tolomeo I." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Filippo II</b> (359-336 a.C.) unifica la Grecia sotto la Macedonia (Cheronea, 338). <b>Alessandro</b> (356-323 a.C.) conquista l'impero persiano: Granico, Isso, Gaugamela, India.</li>
<li>Morto Alessandro, i <b>Diadochi</b> si spartiscono l'impero: <b>Tolomei</b>, <b>Seleucidi</b>, <b>Antigonidi</b>.</li>
<li><b>Ellenismo</b>: cultura greca allargata e mescolata con quella orientale, koinè, cosmopolitismo.</li>
<li>Alessandria: Museo, Biblioteca, Faro. <b>Euclide</b>, <b>Archimede</b>, <b>Eratostene</b>, <b>Aristarco</b>.</li>
<li>Fine dell'Ellenismo: conquista romana (Macedonia 168/146, Egitto 30 a.C.).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Sarissa", d: "Lunga lancia dei fanti macedoni." },
    { t: "Falange macedone", d: "Fanteria compatta armata di sarisse." },
    { t: "Lega di Corinto", d: "Alleanza delle poleis sotto la guida di Filippo II." },
    { t: "Diadochi", d: "I generali successori di Alessandro." },
    { t: "Ellenismo", d: "Civiltà greca estesa e mescolata con culture orientali (323-30 a.C.)." },
    { t: "Koinè", d: "Greco comune parlato in tutto il mondo ellenistico." },
    { t: "Cosmopolitismo", d: "Sentirsi cittadini del mondo e non solo di una polis." },
    { t: "Museo", d: "Istituto di ricerca di Alessandria." },
    { t: "Stoicismo", d: "Filosofia che invita a vivere secondo ragione e natura." },
    { t: "Epicureismo", d: "Filosofia che cerca la serenità evitando il dolore." },
    { t: "Satrapo", d: "Governatore di una provincia persiana." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale battaglia del 338 a.C. diede a Filippo II il controllo della Grecia?", options: ["Cheronea", "Maratona", "Gaugamela"], answer: 0, explain: "Cheronea, contro Atene e Tebe." },
      { type: "mc", q: "Chi fu il maestro di Alessandro?", options: ["Aristotele", "Platone", "Euclide"], answer: 0, explain: "Aristotele." },
      { type: "tf", q: "Alessandro conquistò l'impero persiano in pochi anni.", answer: true, explain: "Tra il 334 e il 330 a.C. conquistò la maggior parte dell'impero." },
      { type: "text", q: "Come si chiamano i generali che si spartirono l'impero dopo la morte di Alessandro?", answer: ["diadochi", "i diadochi"], explain: "I Diadochi, «successori»." },
      { type: "mc", q: "Quale città fondata da Alessandro divenne capitale culturale?", options: ["Alessandria d'Egitto", "Antiochia", "Pella"], answer: 0, explain: "Con Museo e Biblioteca." },
      { type: "mc", q: "Quale scienziato di Siracusa studiò la leva e l'idrostatica?", options: ["Archimede", "Euclide", "Eratostene"], answer: 0, explain: "Archimede (287-212 a.C.)." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Cheronea", "Granico", "Gaugamela", "Morte di Alessandro", "Battaglia di Ipso"], explain: "338, 334, 331, 323, 301 a.C." },
      { type: "mc", q: "Quale dei seguenti NON è un regno ellenistico?", options: ["Impero romano", "Regno dei Tolomei", "Regno dei Seleucidi"], answer: 0, explain: "Roma era un'altra potenza." },
      { type: "num", q: "A quanti anni morì Alessandro Magno?", answer: 32, tol: 1, explain: "Nacque nel 356 e morì nel 323 a.C., a circa 32 anni." },
      { type: "tf", q: "L'Ellenismo fu soltanto la diffusione della cultura greca, senza influenze orientali.", answer: false, explain: "Fu un incontro e una mescolanza di culture." },
      { type: "mc", q: "Con quale invenzione geometrica Eratostene misurò la Terra?", options: ["Con l'ombra di un bastone in due città", "Con un telescopio", "Con la bussola"], answer: 0, explain: "Confrontò l'angolo dell'ombra ad Alessandria e a Siene." }
    ]
  }
});

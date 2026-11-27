TOPIC('it', {
  id: "l1-sto-guerre-persiane-pericle",
  title: "Guerre persiane ed età di Pericle",
  intro: "Nel <b>490 a.C.</b> un piccolo esercito di cittadini ateniesi affrontò a Maratona le truppe del più grande impero del mondo e le sconfisse. Dieci anni dopo, a Salamina, una flotta greca distrusse quella di Serse. Fu il momento in cui una manciata di città libere salvò l'Occidente dal dominio di un re assoluto: o almeno così lo raccontarono i Greci. Da quella vittoria nacque l'<b>età d'oro di Atene</b>, con <b>Pericle</b>, la democrazia più avanzata dell'antichità, il Partenone, il teatro e la filosofia. Ma la stessa potenza di Atene fece scoppiare la guerra con Sparta, che la ridusse in rovina.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. L'impero persiano e la rivolta delle città ioniche",
      html: `<p>Nel VI sec. a.C. i <b>Persiani</b>, guidati da <b>Ciro il Grande</b> (559-530 a.C.), crearono il più vasto impero mai visto: dall'Egeo all'India, inclusi Babilonia, la Lidia e l'Egitto (conquistato da Cambise nel 525 a.C.). Sotto <b>Dario I</b> (522-486 a.C.) l'impero fu diviso in <b>satrapie</b> governate da satrapi, collegate dalla <b>Strada Reale</b> con stazioni di posta; i Persiani rispettavano lingue e religioni dei popoli sottomessi, ma pretendevano <b>tributi</b> e soldati.</p>
<p>Le <b>città greche d'Asia Minore</b> (Ionia: Mileto, Efeso, Focea) erano sudditi dei Persiani. Nel <b>499 a.C.</b> esse si ribellarono (<b>rivolta ionica</b>) e <b>Atene</b> ed <b>Eretria</b> mandarono qualche nave in aiuto. I Persiani domarono la rivolta, distruggendo Mileto (494 a.C.), e Dario decise di punire le due città «ribelli» della Grecia continentale. Per i Persiani era una questione di ordine imperiale; per i Greci sarebbe diventata la lotta per la libertà.</p>`
    },
    {
      type: "text",
      title: "2. Prima guerra persiana e Maratona (490 a.C.)",
      html: `<p>Nel <b>490 a.C.</b> una flotta persiana sbarcò nella pianura di <b>Maratona</b>, a circa 40 km da Atene, dopo aver distrutto Eretria. Gli Ateniesi, guidati dallo stratego <b>Milziade</b>, schierarono circa 10.000 opliti (aiutati da un migliaio di Plateesi) contro forze persiane stimate in molte migliaia. Sparta, per motivi religiosi, arrivò in ritardo.</p>
<p>La <b>falange</b> greca, con corazze di bronzo, scudi e lunghe lance, attaccò di corsa, rinforzando le ali e circondando il centro persiano. Fu una vittoria schiacciante: i Persiani persero circa 6400 uomini, gli Ateniesi 192. La leggenda racconta che un messaggero, <b>Fidippide</b>, corse fino ad Atene per annunciare «Abbiamo vinto!» e morì per lo sforzo (da qui la <b>maratona</b> di 42,195 km). Lo storico Erodoto racconta invece che Fidippide corse a Sparta per chiedere aiuto prima della battaglia, circa 240 km in due giorni.</p>
<p>Dopo Maratona, Dario preparò una nuova spedizione, ma morì nel 486 a.C.</p>`
    },
    {
      type: "3d",
      title: "Mappa 3D: dalle guerre persiane alla guerra del Peloponneso",
      scene: "spacetime",
      caption: "La base è la carta del Mediterraneo orientale, l'altezza è il tempo (500-400 a.C.). Tocca gli eventi: le frecce collegano cause ed effetti.",
      options: {
        lat: [33, 42],
        lon: [14, 30],
        years: [-500, -400],
        places: [
          { lat: 37.97, lon: 23.72, label: "Atene" },
          { lat: 37.08, lon: 22.43, label: "Sparta" },
          { lat: 37.53, lon: 27.28, label: "Mileto" },
          { lat: 37.07, lon: 15.29, label: "Siracusa" }
        ],
        events: [
          { id: "ionica", lat: 37.53, lon: 27.28, year: -499, label: "Rivolta ionica", html: "Le città greche d'Asia si ribellano ai Persiani. Atene ed Eretria inviano navi: è il pretesto della guerra.", causes: [] },
          { id: "maratona", lat: 38.15, lon: 23.96, year: -490, label: "Maratona", html: "Gli Ateniesi di Milziade sconfiggono lo sbarco persiano: 192 morti ateniesi contro circa 6400 persiani. Vittoria dell'esercito di cittadini.", causes: ["ionica"] },
          { id: "termopili", lat: 38.8, lon: 22.54, year: -480, label: "Termopili", html: "Agosto 480 a.C.: Leonida con 300 Spartiati e alcune migliaia di alleati ferma per tre giorni l'esercito di Serse, poi viene aggirato e muore con i suoi.", causes: ["maratona"] },
          { id: "atene480", lat: 37.97, lon: 23.72, year: -480, label: "Atene evacuata e incendiata", html: "I Persiani occupano Atene e incendiano l'Acropoli. Su consiglio di Temistocle gli Ateniesi si erano rifugiati sulle navi e a Salamina.", causes: ["termopili"] },
          { id: "salamina", lat: 37.95, lon: 23.5, year: -480, label: "Salamina", html: "Settembre 480 a.C.: la flotta greca di Temistocle attira le navi persiane nello stretto di Salamina e le distrugge: Serse torna in Asia.", causes: ["atene480"] },
          { id: "platea", lat: 38.22, lon: 23.27, year: -479, label: "Platea e Micale", html: "Nel 479 a.C. i Greci vincono a Platea (esercito) e a Micale (flotta): la minaccia persiana è finita.", causes: ["salamina"] },
          { id: "delo", lat: 37.4, lon: 25.27, year: -478, label: "Lega delio-attica", html: "Nel 478-477 a.C. Atene guida a Delo una lega di poleis per continuare la guerra: ogni città paga tributo o fornisce navi. Presto Atene la trasforma in un impero.", causes: ["platea"] },
          { id: "partenone", lat: 37.97, lon: 23.72, year: -447, label: "Partenone", html: "Con Pericle iniziano (447 a.C.) i lavori del Partenone sull'Acropoli, finanziato in parte con il tesoro della lega (spostato ad Atene nel 454).", causes: ["delo"] },
          { id: "peloponneso", lat: 37.08, lon: 22.43, year: -431, label: "Guerra del Peloponneso", html: "Nel 431 a.C. scoppia la guerra tra Atene e Sparta (con la Lega peloponnesiaca): durerà fino al 404 a.C.", causes: ["partenone"] },
          { id: "sicilia", lat: 37.07, lon: 15.29, year: -413, label: "Disastro in Sicilia", html: "La spedizione ateniese a Siracusa (415-413 a.C.) finisce con la distruzione della flotta e dell'esercito.", causes: ["peloponneso"] },
          { id: "egospotami", lat: 40.35, lon: 26.55, year: -405, label: "Egospotami", html: "Nel 405 a.C. la flotta spartana, finanziata dai Persiani, distrugge quella ateniese. Atene si arrende nel 404.", causes: ["sicilia"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Seconda guerra persiana: Termopili e Salamina (480-479 a.C.)",
      html: `<p>Nel <b>480 a.C.</b> il nuovo re <b>Serse</b> invase la Grecia con un esercito immenso (le cifre di Erodoto, oltre un milione, sono esagerate: forse 100.000-200.000 uomini) e una grande flotta. Le poleis greche, pur divise, si allearono sotto la guida di Sparta per l'esercito e di Atene per la flotta.</p>
<ul>
<li><b>Termopili</b>: nello stretto passo, il re spartano <b>Leonida</b> resiste per tre giorni; tradito da un greco che mostra ai Persiani un sentiero, viene aggirato e muore con i suoi uomini. È un sacrificio che rafforza la resistenza.</li>
<li><b>Atene evacuata</b>: gli Ateniesi lasciano la città, che viene saccheggiata e incendiata.</li>
<li><b>Salamina</b> (settembre 480 a.C.): <b>Temistocle</b>, stratego ateniese, aveva fatto costruire una grande flotta di <b>triremi</b> (navi da guerra a tre ordini di remi) con i proventi delle miniere d'argento del Laurio. Attira i Persiani nello stretto, dove le navi più grandi si ostacolano. Fu una vittoria decisiva.</li>
<li><b>Platea e Micale</b> (479 a.C.): vittorie terrestre e navale che liberano la Grecia.</li>
</ul>
<p>Per i Greci fu la vittoria della <b>libertà</b> dei cittadini sul dispotismo di un re, come la raccontò <b>Erodoto</b>, il «padre della storia», nelle <i>Storie</i>. Ma ricorda che anche la storia dei Persiani è scritta dai vincitori: per loro era una spedizione marginale in una provincia lontana.</p>`
    },
    {
      type: "svg",
      title: "La battaglia di Salamina (schema)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#bae6fd"/>
<path d="M0 0 L600 0 L600 60 Q520 90 480 130 L480 300 L0 300 Z" fill="#d6d3d1"/>
<path d="M0 300 L0 120 Q80 160 120 200 L200 300 Z" fill="#a8a29e"/>
<text x="60" y="260" font-size="16" font-weight="bold" fill="#0f172a">ATTICA</text>
<text x="500" y="40" font-size="16" font-weight="bold" fill="#0f172a">SALAMINA</text>
<g fill="#2563eb" stroke="#1e3a8a" stroke-width="2">
<polygon points="260,210 300,200 300,220"/><polygon points="260,240 300,230 300,250"/><polygon points="250,180 290,170 290,190"/>
</g>
<g fill="#dc2626" stroke="#7f1d1d" stroke-width="2">
<polygon points="440,130 400,120 400,140"/><polygon points="430,170 390,160 390,180"/><polygon points="460,100 420,90 420,110"/><polygon points="420,210 380,200 380,220"/>
</g>
<path d="M330 140 L360 140" stroke="#dc2626" stroke-width="3"/>
<text x="120" y="110" font-size="15" fill="#1e3a8a" font-weight="bold">Flotta greca</text>
<text x="400" y="260" font-size="15" fill="#7f1d1d" font-weight="bold">Flotta persiana</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Schema semplificato: nello stretto le navi persiane non riescono a manovrare.</text>
</svg>`,
      caption: "A Salamina le navi greche, più piccole e agili, sfruttarono lo spazio ristretto contro la flotta persiana più numerosa."
    },
    {
      type: "quiz",
      title: "Mini-quiz: le guerre persiane",
      questions: [
        { type: "mc", q: "Chi guidò gli Ateniesi a Maratona?", options: ["Milziade", "Pericle", "Leonida"], answer: 0, explain: "Lo stratego Milziade, nel 490 a.C." },
        { type: "mc", q: "In quale battaglia navale Temistocle sconfisse i Persiani?", options: ["Salamina", "Micale", "Egospotami"], answer: 0, explain: "A Salamina, settembre 480 a.C." },
        { type: "tf", q: "Leonida e i suoi uomini difesero il passo delle Termopili per mesi.", answer: false, explain: "Resistettero tre giorni, poi furono aggirati." },
        { type: "text", q: "Come si chiama il «padre della storia» che narrò le guerre persiane?", answer: ["erodoto"], explain: "Erodoto di Alicarnasso." }
      ]
    },
    {
      type: "text",
      title: "4. Dalla lega delio-attica all'impero di Atene",
      html: `<p>Dopo la vittoria, nel <b>478-477 a.C.</b> Atene fondò la <b>Lega delio-attica</b> (da Delo, dove era conservato il tesoro) con centinaia di poleis dell'Egeo. Ogni alleato forniva navi o pagava un <b>tributo</b> (<i>phoros</i>). Atene comandava la flotta e usava il denaro a suo vantaggio: nel <b>454 a.C.</b> il tesoro fu trasferito ad Atene, e chi voleva lasciare la lega (come Nasso e Taso) veniva sottomesso con la forza. La lega diventò un vero <b>impero marittimo</b>, che arricchì Atene e la fece temere da Sparta.</p>
<p>Il fatto che una potenza democratica opprimesse altre città libere è un esempio di contraddizione che già i Greci notavano: la libertà dei cittadini di Atene si fondava sul tributo degli alleati e sul lavoro degli schiavi.</p>`
    },
    {
      type: "text",
      title: "5. Pericle e la democrazia ateniese",
      html: `<p><b>Pericle</b> (circa 495-429 a.C.), aristocratico ma capo del partito popolare, fu rieletto <b>stratego</b> (comandante militare, una delle poche cariche elettive) quasi ogni anno dal 443 al 429 a.C. Lo storico <b>Tucidide</b> disse che Atene era «una democrazia di nome, ma di fatto il governo del primo cittadino».</p>
<ul>
<li><b>Ecclesia</b>: assemblea di tutti i cittadini maschi adulti (circa 30-40.000), che decide su guerra, pace, leggi, tributi; il voto è per alzata di mano.</li>
<li><b>Bulè dei 500</b>: consiglio sorteggiato che prepara le proposte; a turno una sua sezione governa ogni giorno.</li>
<li><b>Heliaia</b>: grandi tribunali popolari con giurati sorteggiati (anche 501).</li>
<li><b>Sorteggio</b>: quasi tutte le cariche sono assegnate per sorteggio, perché tutti sono considerati ugualmente capaci.</li>
<li><b>Misthós</b>: Pericle introduce un compenso per chi svolge cariche pubbliche, così anche i poveri possono partecipare senza rimetterci.</li>
</ul>
<p>Nel celebre <b>Discorso agli Ateniesi</b> in onore dei caduti (431 o 430 a.C.), riportato da Tucidide, Pericle dice: «la nostra costituzione si chiama democrazia perché il potere è nelle mani non di pochi ma dei più». Ma ricorda i limiti: fuori dal potere restavano <b>donne, schiavi, meteci</b> (stranieri residenti): circa 3/4 della popolazione.</p>`
    },
    {
      type: "text",
      title: "6. L'età d'oro: arte, teatro, pensiero",
      html: `<p>Con i tributi della lega Atene diventa il centro culturale del mondo greco.</p>
<ul>
<li><b>Architettura</b>: sull'Acropoli, ricostruita dopo l'incendio persiano, sorge il <b>Partenone</b> (447-432 a.C.), tempio di Atena opera di Ictino e Callicrate con sculture dirette da <b>Fidia</b>. È un modello di armonia e proporzione (ordine dorico).</li>
<li><b>Teatro</b>: nato nelle feste di Dioniso, con le tragedie di <b>Eschilo</b> (<i>Persiani</i>), <b>Sofocle</b> (<i>Edipo re</i>, <i>Antigone</i>) ed <b>Euripide</b> (<i>Medea</i>), e le commedie di <b>Aristofane</b>. Il teatro era un'esperienza civica: i cittadini discutevano di giustizia e potere.</li>
<li><b>Storia</b>: <b>Erodoto</b> e <b>Tucidide</b> (autore di una storia della guerra del Peloponneso fondata su prove e interviste, senza interventi divini).</li>
<li><b>Filosofia</b>: i <b>sofisti</b> insegnano l'arte del discorso; <b>Socrate</b> (469-399 a.C.) interroga i cittadini sulla virtù e la giustizia («so di non sapere»).</li>
<li><b>Medicina</b>: <b>Ippocrate</b> di Cos, che cerca cause naturali alle malattie.</li>
</ul>
<p>Atene era in quel periodo circa 250-300.000 abitanti (con l'Attica), con un porto, il Pireo, tra i più attivi del Mediterraneo.</p>`
    },
    {
      type: "decision",
      title: "Atene, 431 a.C.: affrontare Sparta sul campo o chiudersi dietro le Mura Lunghe?",
      html: `<p>Sei Pericle. Sparta e la Lega peloponnesiaca stanno per invadere l'Attica con un esercito di opliti molto più forte del tuo. Ma Atene ha la <b>flotta</b> più potente del Mediterraneo e le <b>Mura Lunghe</b> che collegano la città al porto del Pireo, da cui può ricevere grano via mare.</p>`,
      question: "Che strategia scegli?",
      options: [
        { label: "Affrontare gli Spartani in battaglia aperta fuori dalle mura.", outcome: "Sparta ha il miglior esercito di terra: Atene rischia una sconfitta decisiva fin dall'inizio." },
        { label: "Far entrare tutta la popolazione dentro le mura, lasciare devastare i campi e colpire dal mare con la flotta.", outcome: "È una strategia sensata: Atene non può essere affamata finché controlla il mare. Ma l'affollamento in città avrà un costo terribile: la peste." },
        { label: "Chiedere subito la pace cedendo il comando dell'Egeo.", outcome: "Atene perderebbe l'impero e i tributi: la sua ricchezza e il suo potere." }
      ],
      answer: 1,
      explain: "Pericle scelse la <b>strategia difensiva</b>: ripararsi dentro le mura e colpire per mare. Nel 430 a.C. una <b>peste</b> scoppiò nella città sovraffollata e uccise forse un terzo della popolazione, compreso Pericle stesso (429 a.C.). Senza di lui Atene seguì leader più impulsivi."
    },
    {
      type: "text",
      title: "7. La guerra del Peloponneso (431-404 a.C.)",
      html: `<p>La crescita di Atene spaventò Sparta e i suoi alleati (Corinto in particolare). Tucidide scrisse che «la vera causa fu la crescita della potenza ateniese e la paura che questa incuteva a Sparta». La guerra si divide in fasi:</p>
<ul>
<li><b>Guerra archidamica</b> (431-421 a.C.): invasioni spartane dell'Attica, incursioni della flotta ateniese, peste (430-426). Finisce con la <b>pace di Nicia</b> (421 a.C.), fragile.</li>
<li><b>Spedizione in Sicilia</b> (415-413 a.C.): spinti dall'ambizioso <b>Alcibiade</b>, gli Ateniesi attaccano Siracusa; la spedizione si conclude con una catastrofe: flotta distrutta, migliaia di prigionieri.</li>
<li><b>Fase finale</b> (413-404 a.C.): Sparta, finanziata dalla Persia, costruisce una flotta; nel <b>405 a.C.</b> a <b>Egospotami</b> distrugge quella ateniese. Nel <b>404 a.C.</b> Atene si arrende: mura abbattute, impero perduto. Per breve tempo governa una oligarchia filospartana, i <b>Trenta Tiranni</b>, poi la democrazia è restaurata (403 a.C.).</li>
</ul>
<p><b>Conseguenze</b>: tutta la Grecia ne esce stremata, con città devastate, guerre civili e un'egemonia spartana poco amata. Nel 399 a.C. Socrate fu condannato a morte con l'accusa di empietà e corruzione dei giovani, in un clima di paura e rancore. Le poleis, indebolite, saranno conquistate nel IV secolo dal re di Macedonia, Filippo II.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la voce dei vincitori e dei vinti",
      html: `<p>Quasi tutto quello che sappiamo sulle guerre persiane viene da <b>Erodoto</b>, un Greco, e dai testi ateniesi. I Persiani lasciarono pochi racconti scritti sulla vicenda. Quali domande fa uno storico?</p>
<ol>
<li><b>Chi racconta e perché?</b> Erodoto vuole esaltare le imprese dei Greci e spiegare il conflitto tra Greci e barbari.</li>
<li><b>Che cosa sappiamo da altre fonti?</b> Iscrizioni persiane (come quella di Dario a Behistun) e scavi mostrano che l'impero era molto organizzato e tollerante; per i Persiani la guerra fu una spedizione di confine.</li>
<li><b>Che cosa è esagerato?</b> Le cifre dell'esercito di Serse, certamente gonfiate.</li>
</ol>
<p>Una storia raccontata da una sola parte è sempre incompleta: per capire servono fonti diverse.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la maratona di oggi",
      html: `<p>La corsa di <b>42,195 km</b> nasce da un'idea del francese Michel Bréal per le Olimpiadi moderne di Atene del <b>1896</b>, che volle ricordare la leggenda del messaggero. La distanza ufficiale fu fissata solo nel 1921 sulla misura della maratona di Londra 1908. Tra Maratona e Atene ci sono circa 40 km: la leggenda di Fidippide, quindi, è più simbolica che storica, ma continua a ispirarci.</p>
<p>Un altro esempio di eredità: la parola <b>«democrazia»</b>. Oggi nelle nostre scuole eleggiamo rappresentanti di classe; ad Atene tutti i cittadini votavano direttamente in assemblea.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il Partenone dipinto",
      html: `<p>Oggi il Partenone è color marmo chiaro, ma nell'antichità le statue e i fregi erano <b>dipinti a colori vivaci</b> (blu, rosso, giallo). Il tempo ha cancellato i pigmenti. Nel 1687, durante la guerra tra Venezia e i Turchi, una bomba veneziana fece esplodere la polveriera ottomana ospitata nel tempio, distruggendone gran parte del tetto. I celebri marmi del fregio, portati a Londra nel 1801-1812 da Lord Elgin, sono oggi al British Museum, e la Grecia ne chiede la restituzione.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? La peste raccontata da chi la visse",
      html: `<p>Tucidide, che si ammalò di peste e sopravvisse, descrisse i sintomi con tanta precisione clinica da permettere ai medici moderni di ipotizzare la malattia (forse tifo o febbre tifoide; la questione è ancora aperta). Il suo scopo: «lasciare un possesso per sempre». La sua «Storia della guerra del Peloponneso» è considerata il primo esempio di storiografia scientifica.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la Grecia classica",
      intro: "Eventi, personaggi e idee: prova a guardarli con altri strumenti.",
      tabs: [
        {
          label: "🏁 Davide e Golia",
          html: `<p>Le guerre persiane si possono vedere come uno scontro tra un <b>gigante</b> (l'impero persiano, 20 milioni di sudditi) e dei <b>piccoli</b> (le poleis greche, qualche centinaio di migliaia di cittadini). Ma attenzione: non si trattava di una storia di buoni e cattivi.</p>
<ul>
<li>I Greci vinsero perché combattevano <b>vicino a casa</b>, in territorio stretto e montuoso, con una tattica adatta (falange, triremi).</li>
<li>I Persiani erano numerosi ma avevano problemi di rifornimenti e di coordinamento tra truppe di popoli diversi.</li>
<li>Per Atene, la vittoria ebbe effetti politici: i cittadini-rematori delle navi chiesero più peso politico, e la democrazia si allargò.</li>
</ul>`
        },
        {
          label: "📅 Linea del tempo",
          html: `<p>Scorri i grandi eventi dal 499 al 399 a.C.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -499, label: "Rivolta ionica", icon: "🔥" },
              { year: -490, label: "Maratona", icon: "🏃" },
              { year: -480, label: "Termopili e Salamina", icon: "⚓" },
              { year: -478, label: "Lega delio-attica", icon: "🤝" },
              { year: -447, label: "Inizio Partenone", icon: "🏛️" },
              { year: -431, label: "Guerra del Peloponneso", icon: "⚔️" },
              { year: -429, label: "Morte di Pericle", icon: "🕯️" },
              { year: -404, label: "Resa di Atene", icon: "🏳️" },
              { year: -399, label: "Morte di Socrate", icon: "🍷" }
            ]
          }
        },
        {
          label: "🗺️ Gira il globo",
          html: `<p>Ruota il globo: i luoghi chiave delle guerre persiane e del Peloponneso.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Atene", color: "#2563eb" },
              { lat: 38.15, lon: 23.96, label: "Maratona", color: "#ef4444" },
              { lat: 38.8, lon: 22.54, label: "Termopili", color: "#ef4444" },
              { lat: 37.95, lon: 23.5, label: "Salamina", color: "#ef4444" },
              { lat: 37.08, lon: 22.43, label: "Sparta", color: "#f97316" },
              { lat: 37.07, lon: 15.29, label: "Siracusa", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persepoli", color: "#7c3aed" }
            ],
            routes: [{ points: [6, 0, 1], color: "#7c3aed" }]
          }
        },
        {
          label: "🃏 Carte di ripasso",
          html: `<p>Gira le carte per ripassare.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Maratona", back: "490 a.C.: vittoria ateniese di Milziade sui Persiani" },
              { front: "Salamina", back: "480 a.C.: vittoria navale di Temistocle" },
              { front: "Lega delio-attica", back: "Alleanza guidata da Atene dal 478 a.C., poi impero" },
              { front: "Pericle", back: "Stratego, guida della democrazia ateniese; Partenone" },
              { front: "Egospotami", back: "405 a.C.: la flotta spartana distrugge quella ateniese" },
              { front: "Misthos", back: "Compenso per le cariche pubbliche introdotto da Pericle" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa: dalla vittoria alla caduta di Atene",
      nodes: [
        { id: "persia", label: "Impero persiano", x: 50, y: 6, color: "#7c3aed", html: "Il più vasto impero del tempo, con Dario e Serse.", why: "La rivolta delle città ioniche, appoggiata da Atene, spinse Dario a punire la Grecia e a consolidare il confine occidentale." },
        { id: "vittoria", label: "Vittoria greca", x: 25, y: 28, color: "#ef4444", html: "Maratona (490), Termopili e Salamina (480), Platea (479).", why: "I Greci vinsero perché combattevano in terreno a loro favorevole, con falange e triremi, e con la forte motivazione di difendere le proprie città." },
        { id: "lega", label: "Lega delio-attica", x: 75, y: 28, color: "#f97316", html: "Alleanza marittima che diventa impero di Atene.", why: "Atene aveva la flotta più forte: gli alleati preferirono pagare tributi piuttosto che armare navi. Così Atene divenne padrona dell'Egeo." },
        { id: "democrazia", label: "Democrazia di Pericle", x: 20, y: 55, color: "#16a34a", html: "Assemblea, sorteggio, indennità per le cariche.", why: "I rematori della flotta, poveri, avevano contribuito alla vittoria: pretesero più diritti. I tributi finanziarono le indennità." },
        { id: "cultura", label: "Età d'oro", x: 50, y: 55, color: "#eab308", html: "Partenone, teatro, filosofia, storia.", why: "Ricchezza e orgoglio per la vittoria finanziarono opere pubbliche e stimolarono il pensiero critico e la discussione pubblica." },
        { id: "paura", label: "Paura di Sparta", x: 82, y: 55, color: "#0ea5e9", html: "Sparta e Corinto temono la potenza ateniese.", why: "Tucidide indica nella crescita di Atene e nella paura di Sparta la causa profonda della guerra." },
        { id: "guerra", label: "Guerra del Peloponneso", x: 50, y: 78, color: "#7c2d12", html: "431-404 a.C.: peste, Sicilia, Egospotami.", why: "La guerra fu lunga e logorante; gli errori strategici e la peste indebolirono Atene, mentre i Persiani finanziarono Sparta." },
        { id: "crisi", label: "Crisi della polis", x: 50, y: 96, color: "#334155", html: "Egemonie instabili, guerre civili, ascesa della Macedonia.", why: "Dopo la guerra nessuna polis riuscì a unire la Grecia; la debolezza aprì la strada a Filippo II di Macedonia." }
      ],
      edges: [
        ["persia", "vittoria", "sconfitta da"],
        ["vittoria", "lega", "porta alla"],
        ["lega", "democrazia", "finanzia la"],
        ["democrazia", "cultura", "stimola l'"],
        ["lega", "paura", "genera"],
        ["paura", "guerra", "scatena la"],
        ["cultura", "guerra", "non evita la"],
        ["guerra", "crisi", "porta alla"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: Pericle e la guerra",
      questions: [
        { type: "mc", q: "Che cosa costruì Pericle sull'Acropoli?", options: ["Il Partenone", "Il Colosseo", "Le mura di Troia"], answer: 0, explain: "Il Partenone, tempio di Atena (447-432 a.C.)." },
        { type: "mc", q: "Chi vinse la guerra del Peloponneso?", options: ["Sparta", "Atene", "La Persia"], answer: 0, explain: "Sparta, con l'aiuto finanziario dei Persiani." },
        { type: "tf", q: "Durante la peste morì anche Pericle.", answer: true, explain: "Morì nel 429 a.C." },
        { type: "order", q: "Metti in ordine.", items: ["Maratona", "Salamina", "Lega delio-attica", "Guerra del Peloponneso"], explain: "490, 480, 478, 431 a.C." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Persiani</b>: impero vastissimo (Ciro, Dario, Serse); rivolta ionica (499 a.C.).</li>
<li>Prima guerra: <b>Maratona</b> (490, Milziade). Seconda: <b>Termopili</b> (Leonida) e <b>Salamina</b> (Temistocle) nel 480; <b>Platea</b> e <b>Micale</b> (479).</li>
<li><b>Lega delio-attica</b> (478-477): Atene guida l'alleanza e crea un impero.</li>
<li><b>Pericle</b>: democrazia diretta con indennità; Partenone; teatro, Erodoto, Tucidide, Socrate.</li>
<li><b>Guerra del Peloponneso</b> (431-404): Atene sconfitta da Sparta; crisi delle poleis.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Satrapia", d: "Provincia dell'impero persiano governata da un satrapo." },
    { t: "Falange", d: "Formazione compatta di opliti con scudo e lancia." },
    { t: "Trireme", d: "Nave da guerra con tre file di rematori." },
    { t: "Stratego", d: "Comandante militare ateniese, carica elettiva." },
    { t: "Lega delio-attica", d: "Alleanza di poleis dell'Egeo guidata da Atene (478-477 a.C.)." },
    { t: "Tributo", d: "Somma pagata da uno Stato soggetto o alleato." },
    { t: "Misthos", d: "Indennità pagata ai cittadini per le cariche pubbliche." },
    { t: "Ecclesia", d: "Assemblea dei cittadini di Atene." },
    { t: "Sofista", d: "Maestro di retorica e di sapere pratico." },
    { t: "Peste di Atene", d: "Epidemia del 430-426 a.C. durante la guerra." },
    { t: "Egemonia", d: "Supremazia di una città o Stato su altri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa provocò l'intervento persiano in Grecia?", options: ["Il sostegno di Atene ed Eretria alla rivolta ionica", "La fondazione della lega delio-attica", "Le Olimpiadi"], answer: 0, explain: "Atene ed Eretria aiutarono le città ribelli." },
      { type: "mc", q: "Chi guidò i Greci a Salamina?", options: ["Temistocle", "Milziade", "Alcibiade"], answer: 0, explain: "Lo stratego ateniese Temistocle." },
      { type: "tf", q: "A Maratona vinsero i Persiani.", answer: false, explain: "Vinsero gli Ateniesi, nel 490 a.C." },
      { type: "text", q: "Come si chiama la nave da guerra greca a tre ordini di remi?", answer: ["trireme", "la trireme"], explain: "La trireme." },
      { type: "mc", q: "Che cos'era la lega delio-attica?", options: ["Un'alleanza di poleis dell'Egeo guidata da Atene", "Un'alleanza di Sparta", "Un'associazione di mercanti"], answer: 0, explain: "Fondata nel 478-477 a.C., divenne un impero." },
      { type: "mc", q: "Quale misura di Pericle permise ai poveri di partecipare alla vita politica?", options: ["Un compenso per le cariche pubbliche", "L'abolizione della schiavitù", "Il suffragio alle donne"], answer: 0, explain: "Il misthós." },
      { type: "order", q: "Metti in ordine cronologico.", items: ["Maratona", "Termopili e Salamina", "Lega delio-attica", "Inizio del Partenone", "Guerra del Peloponneso"], explain: "490, 480, 478, 447, 431 a.C." },
      { type: "mc", q: "Qual è l'esito della guerra del Peloponneso?", options: ["Sparta vince, Atene perde mura e impero", "Atene vince e conquista Sparta", "Vince la Persia"], answer: 0, explain: "Nel 404 a.C. Atene si arrende." },
      { type: "num", q: "In che anno a.C. ebbe luogo la battaglia di Maratona?", answer: 490, tol: 0, explain: "490 a.C." },
      { type: "tf", q: "La democrazia ateniese era aperta a donne e schiavi.", answer: false, explain: "Solo i maschi adulti cittadini votavano." },
      { type: "mc", q: "Che cosa causò la morte di Pericle?", options: ["La peste", "Una battaglia", "L'ostracismo"], answer: 0, explain: "Morì per la peste nel 429 a.C." }
    ]
  }
});

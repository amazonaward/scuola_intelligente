TOPIC('it', {
  id: "m3-sto-totalitarismi",
  title: "I totalitarismi",
  intro: "Dopo la Prima guerra mondiale, in pochi anni, in Russia, in Italia e in Germania nacquero regimi di tipo nuovo: un solo partito, un capo indiscusso, la propaganda ovunque, la polizia segreta, nessuna libertà. Li chiamiamo <b>totalitarismi</b>, perché volevano controllare <b>totalmente</b> la vita delle persone. Studiarli serve a capire come le libertà possono essere perse e come difenderle.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è un regime totalitario",
      html: `<p>La parola \"totalitario\" fu usata nel 1923 dall'antifascista Giovanni Amendola per criticare il fascismo; poi lo stesso Mussolini la adottò con orgoglio: <i>\"Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato\"</i>. Nel 1951 la filosofa <b>Hannah Arendt</b>, ebrea tedesca fuggita negli Stati Uniti, ne studiò i caratteri comuni. Un regime totalitario ha:</p>
<ul>
<li>un <b>partito unico</b>: tutti gli altri sono vietati;</li>
<li>un <b>capo carismatico</b> (Duce, Führer, \"padre dei popoli\") presentato come infallibile: è il <b>culto della personalità</b>;</li>
<li>un'<b>ideologia</b> che pretende di spiegare tutto e indica un \"nemico\" da combattere;</li>
<li>la <b>propaganda</b> e il controllo di giornali, radio, cinema, scuola; la <b>censura</b>;</li>
<li>una <b>polizia segreta</b> e il <b>terrore</b>: arresti, carcere, campi di prigionia, esecuzioni degli oppositori;</li>
<li>l'<b>inquadramento delle masse</b>, a partire dai bambini, in organizzazioni del regime;</li>
<li>il controllo dell'<b>economia</b>.</li>
</ul>
<p>In una <b>democrazia</b>, invece, il potere è diviso (legislativo, esecutivo, giudiziario), ci sono elezioni libere tra più partiti, libertà di parola, di stampa e di associazione, e i diritti delle minoranze sono protetti.</p>`
    },    {
      type: "svg",
      title: "I pilastri di un regime totalitario",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f1f5f9"/>
<polygon points="320,20 610,90 30,90" fill="#475569" stroke="#0f172a" stroke-width="3"/>
<text x="320" y="72" font-size="20" text-anchor="middle" font-weight="bold" fill="#ffffff">STATO TOTALITARIO</text>
<rect x="45" y="95" width="80" height="150" fill="#ef4444" stroke="#0f172a" stroke-width="2"/>
<rect x="140" y="95" width="80" height="150" fill="#f97316" stroke="#0f172a" stroke-width="2"/>
<rect x="235" y="95" width="80" height="150" fill="#eab308" stroke="#0f172a" stroke-width="2"/>
<rect x="330" y="95" width="80" height="150" fill="#22c55e" stroke="#0f172a" stroke-width="2"/>
<rect x="425" y="95" width="80" height="150" fill="#3b82f6" stroke="#0f172a" stroke-width="2"/>
<rect x="520" y="95" width="80" height="150" fill="#a855f7" stroke="#0f172a" stroke-width="2"/>
<text x="85" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Partito</text>
<text x="85" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">unico</text>
<text x="180" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Culto</text>
<text x="180" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">del capo</text>
<text x="275" y="170" font-size="15" text-anchor="middle" font-weight="bold" fill="#0f172a">Propaganda</text>
<text x="370" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Polizia</text>
<text x="370" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">e terrore</text>
<text x="465" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Controllo</text>
<text x="465" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">dei giovani</text>
<text x="560" y="160" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">Controllo</text>
<text x="560" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#fff">economia</text>
<rect x="30" y="250" width="580" height="50" fill="#1e293b"/>
<text x="320" y="282" font-size="18" text-anchor="middle" font-weight="bold" fill="#fde68a">IDEOLOGIA + un \"NEMICO\" da combattere</text>
</svg>`,
      caption: "Tutti i pilastri poggiano su un'ideologia che pretende di spiegare tutto e su un nemico (interno o esterno) a cui dare la colpa dei problemi."
    },

    {
      type: "widget",
      title: "Democrazia o totalitarismo?",
      widget: "classify",
      options: {
        groups: ["🗳️ Democrazia", "⛓️ Totalitarismo"],
        items: [
          ["Più partiti si presentano alle elezioni", 0],
          ["Un solo partito è permesso", 1],
          ["I giornali possono criticare il governo", 0],
          ["La polizia segreta controlla le opinioni", 1],
          ["I giudici sono indipendenti dal governo", 0],
          ["Il capo è presentato come infallibile", 1],
          ["Le minoranze hanno gli stessi diritti", 0],
          ["Gli oppositori vengono mandati in campi di prigionia o al confino", 1],
          ["I ragazzi devono iscriversi all'organizzazione giovanile del partito", 1]
        ]
      },
      caption: "Tocca una frase e poi il gruppo giusto."
    },
    {
      type: "text",
      title: "2. Il terreno: il dopoguerra e la crisi",
      html: `<p>Perché, in Paesi diversi, tanta gente accettò o sostenne questi regimi? Le cause sono diverse ma si intrecciano:</p>
<ul>
<li>la <b>guerra</b> aveva abituato milioni di uomini alla violenza e all'obbedienza; molti reduci non trovavano lavoro;</li>
<li><b>crisi economica</b>, inflazione, disoccupazione; in Germania l'iperinflazione del 1923 (a novembre 1 dollaro valeva oltre 4.000 miliardi di marchi) e poi la <b>grande crisi del 1929</b>, iniziata con il crollo della Borsa di New York (ottobre 1929): nel 1932 in Germania i disoccupati erano circa 6 milioni;</li>
<li>la <b>paura della rivoluzione comunista</b> dopo l'esempio russo, soprattutto tra industriali, proprietari terrieri e ceti medi;</li>
<li>il <b>rancore per i trattati di pace</b>: la \"vittoria mutilata\" in Italia, l'umiliazione di Versailles in Germania;</li>
<li><b>democrazie giovani e deboli</b>, con partiti divisi che non riuscivano a governare.</li>
</ul>`
    },
    {
      type: "text",
      title: "3. L'Unione Sovietica: da Lenin a Stalin",
      html: `<p>Nel <b>1917</b> in Russia, stremata dalla guerra, una prima rivoluzione (febbraio) rovesciò lo zar Nicola II. Nell'<b>ottobre</b> i <b>bolscevichi</b> (comunisti) di <b>Lenin</b> presero il potere, promettendo \"pace, terra e pane\" e una società senza classi, secondo le idee di Karl Marx. Seguì una sanguinosa <b>guerra civile</b> (1918–1921) tra \"rossi\" e \"bianchi\", vinta dai bolscevichi. Nel <b>1922</b> nacque l'<b>URSS</b> (Unione delle Repubbliche Socialiste Sovietiche). Già sotto Lenin nacquero la polizia politica (Čeka) e il partito unico.</p>
<p>Morto Lenin (1924), il potere passò a <b>Iosif Stalin</b>, che eliminò i rivali (Trockij fu esiliato e poi ucciso in Messico nel 1940). Stalin:</p>
<ul>
<li>lanciò i <b>piani quinquennali</b> (dal 1928): l'URSS divenne in pochi anni una grande potenza industriale, ma a costo di enormi sacrifici;</li>
<li>impose la <b>collettivizzazione</b> forzata delle terre: i contadini dovevano lavorare in grandi aziende di Stato (kolchoz, sovchoz); chi si opponeva, accusato di essere un \"kulako\" (contadino ricco), veniva deportato. Nel 1932–33 una terribile <b>carestia</b> causò milioni di morti, soprattutto in <b>Ucraina</b> (dove è chiamata <b>Holodomor</b>, \"sterminio per fame\") e in Kazakistan;</li>
<li>organizzò le <b>grandi purghe</b> (1936–38): processi farsa, confessioni estorte, circa 700.000 persone fucilate in due anni, compresi molti comunisti e ufficiali;</li>
<li>sviluppò il sistema dei <b>gulag</b>, campi di lavoro forzato in Siberia e nelle regioni artiche, dove passarono milioni di persone.</li>
</ul>`
    },
    {
      type: "text",
      title: "4. Il fascismo in Italia",
      html: `<p>Nel dopoguerra l'Italia viveva scioperi, occupazioni di fabbriche e di terre (il \"<b>biennio rosso</b>\", 1919–1920) e la delusione per la \"vittoria mutilata\". Il <b>23 marzo 1919</b>, a Milano, l'ex socialista <b>Benito Mussolini</b> fondò i <b>Fasci di combattimento</b>.</p>
<p>Le <b>squadre d'azione</b> fasciste (lo <b>squadrismo</b>), spesso finanziate da agrari e industriali, attaccarono con manganelli e olio di ricino sedi socialiste, sindacati, cooperative e giornali; uccisero centinaia di persone. Polizia e autorità spesso non intervennero. Nel 1921 nacque il Partito Nazionale Fascista.</p>
<p>Il <b>28 ottobre 1922</b> migliaia di camicie nere marciarono verso la capitale: la <b>Marcia su Roma</b>. Il re <b>Vittorio Emanuele III</b> rifiutò di firmare lo stato d'assedio che avrebbe permesso all'esercito di fermarli, e il 30 ottobre affidò a Mussolini l'incarico di formare il governo.</p>
<p>Dal governo alla dittatura:</p>
<ul>
<li>1924: elezioni con una nuova legge maggioritaria (legge Acerbo), tra violenze e brogli;</li>
<li>il deputato socialista <b>Giacomo Matteotti</b> denunciò in Parlamento le violenze; il <b>10 giugno 1924</b> fu rapito e ucciso da squadristi;</li>
<li>il <b>3 gennaio 1925</b> Mussolini si assunse in Parlamento la \"responsabilità politica, morale, storica\" di quanto accaduto: è l'inizio della dittatura;</li>
<li><b>leggi fascistissime</b> (1925–1926): sciolti tutti i partiti tranne quello fascista, chiusi i giornali di opposizione, abolite le elezioni dei sindaci (sostituiti dai podestà), creati il Tribunale speciale e la polizia segreta (<b>OVRA</b>), il <b>confino</b> per gli oppositori (come Antonio Gramsci, morto nel 1937 dopo anni di carcere).</li>
</ul>
<p>Il regime cercò il <b>consenso</b>: organizzazioni giovanili (Opera Nazionale Balilla, poi GIL), il sabato fascista, il libro di testo unico, il cinema e la radio, grandi opere (bonifica dell'Agro Pontino), la \"battaglia del grano\". Nel <b>1929</b> firmò con la Chiesa i <b>Patti Lateranensi</b>, che crearono lo Stato della Città del Vaticano. Nel 1935–36 conquistò l'<b>Etiopia</b> con una guerra coloniale in cui usò anche i gas, e proclamò l'\"Impero\". Nel 1936 si avvicinò alla Germania nazista (Asse Roma-Berlino).</p>
<p>Nel <b>1938</b> furono approvate le <b>leggi razziali</b> contro gli ebrei: espulsi dalle scuole, dalle università, dagli impieghi pubblici, dall'esercito; vietati i matrimoni \"misti\". Circa 47.000 ebrei italiani, perfettamente integrati da secoli, divennero all'improvviso cittadini di serie B.</p>
<p>Molti storici parlano di totalitarismo \"<b>imperfetto</b>\": in Italia restavano due poteri che il fascismo non controllava del tutto, la <b>monarchia</b> e la <b>Chiesa</b>.</p>`
    },
    {
      type: "decision",
      title: "Roma, 28 ottobre 1922: sei il re",
      html: `<p>Migliaia di camicie nere, armate in modo disordinato, stanno convergendo su Roma sotto la pioggia. L'esercito regolare, ben armato, potrebbe disperderle facilmente. Il presidente del Consiglio Luigi Facta ti porta da firmare il decreto di <b>stato d'assedio</b>, che darebbe all'esercito il compito di fermarle. Alcuni generali però ti fanno capire che molti ufficiali simpatizzano per i fascisti; i liberali sperano di \"usare\" Mussolini contro i socialisti e poi riportarlo all'ordine.</p>`,
      question: "Che cosa fai?",
      options: [
        { label: "Firmo lo stato d'assedio: l'esercito difende la legge e lo Stato.", outcome: "Molti storici ritengono che l'esercito avrebbe disperso le squadre in poche ore. C'era il rischio di scontri e di una divisione nell'esercito, ma lo Stato avrebbe mostrato che la violenza non paga." },
        { label: "Non firmo e chiamo Mussolini a formare un governo, pensando di poterlo controllare.", outcome: "Si evitano scontri immediati, ma si premia chi ha usato la violenza contro le istituzioni: un capo di squadre armate diventa capo del governo in modo legale." },
        { label: "Abdico e lascio il trono al cugino, il duca d'Aosta.", outcome: "Il duca d'Aosta era vicino ai fascisti: probabilmente non sarebbe cambiato molto, e il Paese avrebbe vissuto una crisi istituzionale." }
      ],
      answer: 1,
      explain: "Vittorio Emanuele III <b>rifiutò di firmare</b> lo stato d'assedio e il <b>30 ottobre 1922</b> incaricò Mussolini, arrivato da Milano in vagone letto, di formare il governo. I fascisti in Parlamento erano solo 35 deputati, ma ebbero il sostegno di liberali e popolari. Il re pensava di aver evitato una guerra civile; in realtà aprì la strada alla dittatura, che non contrastò neppure dopo il delitto Matteotti. Questa scelta pesò sul giudizio degli italiani sulla monarchia nel referendum del 1946."
    },
    {
      type: "decision",
      title: "Giugno 1924: Matteotti è scomparso. Che cosa fa l'opposizione?",
      html: `<p>Sei un deputato dell'opposizione. Il tuo collega Giacomo Matteotti è stato rapito da squadristi davanti a casa; tutti temono che sia stato ucciso. Nel Paese c'è indignazione; perfino alcuni fascisti sono in difficoltà e Mussolini sembra vacillare.</p>`,
      question: "Quale strategia proponi?",
      options: [
        { label: "Restiamo in Parlamento e attacchiamo il governo ogni giorno con discorsi e voti.", outcome: "Il Parlamento era l'unico luogo dove l'opposizione poteva parlare pubblicamente e mettere il governo in difficoltà; ma i fascisti avevano la maggioranza assoluta grazie alla legge Acerbo." },
        { label: "Usciamo per protesta dal Parlamento e aspettiamo che il re intervenga a destituire Mussolini.", outcome: "Un gesto morale forte, che mostra che quel Parlamento non è più libero. Ma lascia il campo libero ai fascisti e affida tutto alla speranza che il re agisca." },
        { label: "Chiamiamo a uno sciopero generale in tutto il Paese.", outcome: "Avrebbe mostrato la forza dei lavoratori, ma rischiava nuove violenze squadriste e la divisione tra le forze antifasciste." }
      ],
      answer: 1,
      explain: "Circa 120 deputati di opposizione abbandonarono la Camera: fu chiamata la <b>secessione dell'Aventino</b>, ricordando la protesta della plebe nell'antica Roma. Speravano che il re destituisse Mussolini, ma Vittorio Emanuele III non intervenne. Il corpo di Matteotti fu ritrovato il 16 agosto. Il <b>3 gennaio 1925</b> Mussolini rivendicò la responsabilità politica del clima di violenza e avviò le leggi fascistissime; nel 1926 i deputati aventiniani furono dichiarati decaduti. Gli storici discutono ancora se un'altra strategia avrebbe potuto fermare il fascismo."
    },
    {
      type: "quiz",
      title: "Mini-quiz: URSS e fascismo",
      questions: [
        { type: "mc", q: "Chi guidò la rivoluzione d'ottobre del 1917?", options: ["Stalin", "Lenin", "Nicola II"], answer: 1, explain: "Lenin, capo dei bolscevichi." },
        { type: "mc", q: "Che cosa furono i gulag?", options: ["Fattorie collettive", "Campi di lavoro forzato", "Scuole di partito"], answer: 1, explain: "Campi di lavoro forzato in cui furono rinchiusi milioni di persone." },
        { type: "num", q: "In che anno avvenne la Marcia su Roma?", answer: 1922, explain: "Il 28 ottobre 1922." },
        { type: "text", q: "Come si chiamava il deputato socialista ucciso dai fascisti nel 1924?", answer: ["matteotti", "giacomo matteotti"], explain: "Giacomo Matteotti, ucciso il 10 giugno 1924." }
      ]
    },
    {
      type: "text",
      title: "5. Il nazismo in Germania",
      html: `<p>Dopo la sconfitta nacque in Germania una repubblica democratica, la <b>Repubblica di Weimar</b> (1919). Era fragile: attaccata dall'estrema destra e dall'estrema sinistra, schiacciata dalle riparazioni di guerra e dalle crisi economiche.</p>
<p><b>Adolf Hitler</b>, ex caporale austriaco, guidava il Partito nazionalsocialista (NSDAP, nazista). Nel 1923 tentò un colpo di Stato a Monaco, fallì e in carcere scrisse <i>Mein Kampf</i> (\"La mia battaglia\"). L'ideologia nazista era fondata su:</p>
<ul>
<li>il <b>razzismo</b>: l'idea, scientificamente falsa, che l'umanità sia divisa in razze superiori e inferiori, con al vertice la \"razza ariana\";</li>
<li>l'<b>antisemitismo</b>: gli ebrei erano accusati senza alcun fondamento di tutti i mali della Germania;</li>
<li>la conquista dello \"<b>spazio vitale</b>\" a Est, a danno dei popoli slavi;</li>
<li>il rifiuto di Versailles, della democrazia e del comunismo.</li>
</ul>
<p>Con la crisi del 1929 i nazisti crebbero rapidamente: nel luglio 1932 divennero il primo partito (circa 37% dei voti). Il <b>30 gennaio 1933</b> il presidente Hindenburg nominò Hitler <b>cancelliere</b>, in modo legale. In pochi mesi la democrazia fu distrutta:</p>
<ul>
<li>dopo l'incendio del Reichstag (27 febbraio 1933) furono sospese le libertà; a marzo il Parlamento concesse a Hitler i <b>pieni poteri</b>; a luglio tutti i partiti tranne il nazista erano vietati;</li>
<li>nel marzo 1933 aprì il primo <b>campo di concentramento</b>, a Dachau, per gli oppositori politici;</li>
<li>nella \"notte dei lunghi coltelli\" (30 giugno 1934) Hitler fece uccidere i capi delle SA e altri avversari; alla morte di Hindenburg (agosto 1934) divenne <b>Führer</b> (\"guida\"), capo di Stato e di governo;</li>
<li>la <b>Gestapo</b> (polizia segreta) e le <b>SS</b> di Himmler controllavano tutto; il ministro <b>Goebbels</b> guidava la propaganda; i ragazzi entravano nella <b>Gioventù hitleriana</b>; si bruciavano in piazza i libri \"non tedeschi\" (10 maggio 1933).</li>
</ul>
<p>La persecuzione degli <b>ebrei</b> crebbe passo dopo passo: boicottaggio dei negozi (1933), <b>leggi di Norimberga</b> (15 settembre 1935) che tolsero loro la cittadinanza e vietarono i matrimoni con non ebrei, la \"<b>notte dei cristalli</b>\" (9–10 novembre 1938), quando sinagoghe, negozi e case furono distrutti in tutta la Germania e circa 30.000 uomini ebrei furono deportati nei campi. Era l'anticamera della <b>Shoah</b>. Furono perseguitati anche Rom e Sinti, persone con disabilità, omosessuali, oppositori politici e religiosi.</p>
<p>Già dal 1935 Hitler riarmò la Germania violando Versailles; nel 1938 annesse l'Austria (<b>Anschluss</b>).</p>`
    },
    {
      type: "3d",
      title: "La mappa 3D spazio-tempo dei totalitarismi",
      scene: "spacetime",
      caption: "Base: l'Europa; altezza: il tempo dal 1917 al 1939. Tocca gli eventi e segui le frecce: vedrai come le crisi e le scelte si concatenano in Russia, Italia e Germania.",
      options: {
        lat: [37, 60.5],
        lon: [-6, 42],
        years: [1917, 1939],
        places: [
          { lat: 55.75, lon: 37.62, label: "Mosca" },
          { lat: 52.52, lon: 13.4, label: "Berlino" },
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 45.46, lon: 9.19, label: "Milano" },
          { lat: 48.14, lon: 11.58, label: "Monaco" },
          { lat: 48.21, lon: 16.37, label: "Vienna" },
          { lat: 40.42, lon: -3.7, label: "Madrid" }
        ],
        events: [
          { id: "ottobre", lat: 59.93, lon: 30.36, year: 1917, label: "Rivoluzione d'ottobre", html: "A Pietrogrado i bolscevichi di <b>Lenin</b> prendono il potere. Seguono la guerra civile e il partito unico." },
          { id: "fasci", lat: 45.46, lon: 9.19, year: 1919, label: "Nascono i Fasci di combattimento", html: "23 marzo 1919, piazza San Sepolcro a Milano: Mussolini fonda il movimento fascista. Il clima del \"biennio rosso\" spinge molti ceti medi e proprietari ad appoggiarlo per paura di una rivoluzione come quella russa.", causes: ["ottobre"] },
          { id: "weimar", lat: 50.98, lon: 11.33, year: 1919, label: "Repubblica di Weimar", html: "In Germania nasce una repubblica democratica, che deve firmare il Trattato di Versailles: molti tedeschi la considerano colpevole dell'umiliazione." },
          { id: "urss", lat: 55.75, lon: 37.62, year: 1922, label: "Nasce l'URSS", html: "Dicembre 1922: dopo la vittoria nella guerra civile nasce l'Unione Sovietica, guidata dal Partito comunista.", causes: ["ottobre"] },
          { id: "marcia", lat: 41.9, lon: 12.5, year: 1922, label: "Marcia su Roma", html: "28–30 ottobre 1922: il re rifiuta lo stato d'assedio e nomina Mussolini capo del governo.", causes: ["fasci"] },
          { id: "putsch", lat: 48.14, lon: 11.58, year: 1923, label: "Putsch di Monaco", html: "Novembre 1923, anno dell'iperinflazione: Hitler tenta un colpo di Stato ispirato alla Marcia su Roma. Fallisce; in carcere scrive <i>Mein Kampf</i>.", causes: ["weimar", "marcia"] },
          { id: "matteotti", lat: 41.91, lon: 12.47, year: 1924, label: "Delitto Matteotti", html: "10 giugno 1924: il deputato socialista Giacomo Matteotti viene rapito e ucciso dopo aver denunciato le violenze elettorali.", causes: ["marcia"] },
          { id: "leggi", lat: 41.89, lon: 12.49, year: 1926, label: "Leggi fascistissime", html: "Dopo il discorso del 3 gennaio 1925: partito unico, fine della libertà di stampa, Tribunale speciale, confino. L'Italia è una dittatura.", causes: ["matteotti"] },
          { id: "stalin", lat: 55.76, lon: 37.6, year: 1928, label: "Stalin: primo piano quinquennale", html: "Morto Lenin (1924), Stalin elimina i rivali e lancia industrializzazione forzata e collettivizzazione delle campagne.", causes: ["urss"] },
          { id: "laterano", lat: 41.9, lon: 12.45, year: 1929, label: "Patti Lateranensi", html: "11 febbraio 1929: accordo tra Stato italiano e Chiesa cattolica; nasce lo Stato della Città del Vaticano. Il regime ottiene un grande consenso.", causes: ["leggi"] },
          { id: "holodomor", lat: 49.0, lon: 32.0, year: 1932, label: "La grande carestia (Holodomor)", html: "1932–33: requisizioni forzate dei raccolti e collettivizzazione provocano una carestia con milioni di morti, soprattutto in Ucraina.", causes: ["stalin"] },
          { id: "hitler", lat: 52.52, lon: 13.4, year: 1933, label: "Hitler cancelliere", html: "30 gennaio 1933: Hitler è nominato cancelliere. In pochi mesi: pieni poteri, partiti vietati, primo campo di concentramento a Dachau.", causes: ["putsch", "weimar"] },
          { id: "norimberga", lat: 49.45, lon: 11.08, year: 1935, label: "Leggi di Norimberga", html: "15 settembre 1935: gli ebrei tedeschi perdono la cittadinanza e molti diritti.", causes: ["hitler"] },
          { id: "etiopia", lat: 41.88, lon: 12.52, year: 1936, label: "Proclamazione dell'\"Impero\"", html: "Maggio 1936: dopo la guerra d'Etiopia Mussolini proclama l'Impero. La Società delle Nazioni aveva imposto sanzioni all'Italia, che si avvicina alla Germania (Asse Roma-Berlino).", causes: ["laterano"] },
          { id: "spagna", lat: 40.42, lon: -3.7, year: 1936, label: "Guerra civile spagnola", html: "1936–1939: il generale Franco si ribella alla Repubblica. Italia e Germania mandano truppe e aerei a Franco; l'URSS aiuta i repubblicani; volontari antifascisti arrivano da tutto il mondo. Vince Franco.", causes: ["etiopia", "hitler"] },
          { id: "purghe", lat: 55.74, lon: 37.64, year: 1937, label: "Le grandi purghe", html: "1936–38: processi farsa e fucilazioni di massa; circa 700.000 persone giustiziate, milioni nei gulag.", causes: ["stalin"] },
          { id: "anschluss", lat: 48.21, lon: 16.37, year: 1938, label: "Anschluss", html: "Marzo 1938: la Germania annette l'Austria.", causes: ["hitler"] },
          { id: "razziali", lat: 43.72, lon: 10.32, year: 1938, label: "Leggi razziali in Italia", html: "Settembre–novembre 1938 (i primi decreti firmati dal re a San Rossore): gli ebrei italiani sono espulsi da scuole, università, pubblico impiego ed esercito.", causes: ["etiopia", "norimberga"] },
          { id: "cristalli", lat: 52.5, lon: 13.38, year: 1938, label: "Notte dei cristalli", html: "9–10 novembre 1938: pogrom in tutta la Germania; sinagoghe incendiate, negozi distrutti, circa 30.000 ebrei deportati nei campi.", causes: ["norimberga"] }
        ]
      }
    },
    {
      type: "text",
      title: "6. Tre regimi a confronto",
      html: `<table>
<tr><th></th><th>URSS (Stalin)</th><th>Italia (Mussolini)</th><th>Germania (Hitler)</th></tr>
<tr><td><b>Ideologia</b></td><td>Comunismo: società senza classi; nemico = \"borghesi\", \"kulaki\", \"traditori\"</td><td>Fascismo: nazionalismo, culto dello Stato e della forza; nemico = socialisti, liberali, poi ebrei</td><td>Nazismo: razzismo e antisemitismo; nemico = ebrei, comunisti, \"razze inferiori\"</td></tr>
<tr><td><b>Presa del potere</b></td><td>Rivoluzione e guerra civile</td><td>Violenza squadrista + nomina del re (1922)</td><td>Elezioni + nomina del presidente (1933)</td></tr>
<tr><td><b>Partito</b></td><td>Partito comunista</td><td>Partito nazionale fascista</td><td>NSDAP (nazista)</td></tr>
<tr><td><b>Polizia e repressione</b></td><td>NKVD, gulag, purghe</td><td>OVRA, Tribunale speciale, confino</td><td>Gestapo, SS, campi di concentramento</td></tr>
<tr><td><b>Economia</b></td><td>Tutto statale, piani quinquennali</td><td>Privata ma controllata (corporazioni, IRI), autarchia</td><td>Privata ma diretta al riarmo</td></tr>
<tr><td><b>Giovani</b></td><td>Pionieri, Komsomol</td><td>Balilla, Gioventù italiana del Littorio</td><td>Gioventù hitleriana</td></tr>
</table>
<p>Ideologie opposte (comunismo contro fascismo e nazismo), ma <b>metodi simili</b>: è per questo che Arendt e altri studiosi li hanno messi a confronto, pur con molte differenze.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: smontare un manifesto di propaganda",
      html: `<p>La propaganda dei regimi usava manifesti, cinegiornali, radio, canzoni, libri di scuola. Per analizzare un manifesto (lo trovi in un libro o in un museo) fatti queste domande:</p>
<ol>
<li><b>Chi l'ha prodotto e quando?</b> (spesso un ministero del regime)</li>
<li><b>A chi si rivolge?</b> (giovani, contadini, madri, soldati…)</li>
<li><b>Che emozione vuole suscitare?</b> Orgoglio, paura, odio, entusiasmo?</li>
<li><b>Come è rappresentato il capo?</b> Spesso in alto, gigantesco, illuminato, con lo sguardo verso l'orizzonte.</li>
<li><b>Come è rappresentato il \"nemico\"?</b> Spesso deformato, ridicolizzato o mostruoso: è un modo per disumanizzarlo.</li>
<li><b>Che cosa non mostra?</b> La povertà, la repressione, le vittime.</li>
</ol>
<p>Le stesse domande servono ancora oggi davanti a pubblicità, video virali e notizie false sui social: riconoscere la manipolazione è una difesa della libertà.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: una giornata a scuola nel 1938",
      html: `<p>Immagina di essere un alunno di 3ª media nell'autunno del 1938. In classe il ritratto del re e quello del Duce; il libro di testo è unico per tutta l'Italia e celebra il regime. Il sabato pomeriggio c'è il \"sabato fascista\" con esercitazioni ginniche e paramilitari in divisa.</p>
<p>A settembre il tuo compagno di banco, che è ebreo, non torna più a scuola: le leggi razziali gli vietano le scuole pubbliche. Anche la tua professoressa di lettere, ebrea, viene licenziata. Le comunità ebraiche organizzano in fretta scuole proprie. Tra quei ragazzi c'era, a Milano, una bambina di 8 anni: <b>Liliana Segre</b>, oggi senatrice a vita, che racconta: <i>\"Fui espulsa da scuola perché ebrea. Ero una bambina come le altre\"</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Solo 12 dissero no",
      html: `<p>Nel <b>1931</b> il regime fascista impose a tutti i professori universitari di giurare fedeltà al fascismo, pena la perdita del posto. Su circa 1.200 professori, solo <b>12</b> si rifiutarono (tra loro il matematico Vito Volterra e lo storico Gaetano De Sanctis). Ci voleva un grande coraggio per dire no: oggi sono ricordati come esempio di libertà di pensiero.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le foto ritoccate di Stalin",
      html: `<p>In URSS, quando un dirigente cadeva in disgrazia durante le purghe, veniva cancellato anche dalle <b>fotografie</b>: i tecnici del regime lo eliminavano a mano con pennelli e forbici, come se non fosse mai esistito. Esistono foto in cui, edizione dopo edizione, accanto a Stalin le persone spariscono una alla volta. Era un modo per riscrivere il passato: chi controlla la memoria controlla il presente.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Le parole di Matteotti",
      html: `<p>Il 30 maggio 1924, pochi giorni prima di essere ucciso, Giacomo Matteotti parlò alla Camera per più di un'ora, interrotto continuamente da urla e minacce, denunciando le violenze e i brogli delle elezioni. Si dice che, finito il discorso, abbia detto ai compagni: <i>\"Io il mio discorso l'ho fatto. Ora voi preparate il discorso funebre per me\"</i>.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire i totalitarismi",
      intro: "Un argomento così grande si capisce meglio da più angolazioni.",
      tabs: [
        {
          label: "🏫 La classe senza libertà",
          html: `<p>Immagina che nella tua classe, un giorno, uno studente prenda il comando: prima convince alcuni compagni promettendo vantaggi, poi spaventa gli altri. Abolisce le elezioni del rappresentante (c'è solo lui), decide che solo il suo gruppo di amici può parlare, legge i diari di tutti, punisce chi lo critica, appende il suo ritratto alla parete, fa cantare un inno in suo onore ogni mattina e indica un compagno come \"colpevole\" di tutto ciò che non va. Pian piano molti, per paura o per comodità, si adeguano.</p>
<p>È un'analogia semplice, ma mostra i meccanismi: <b>paura, propaganda, capro espiatorio, conformismo</b>. E mostra che conta anche ciò che fanno gli \"spettatori\".</p>`
        },
        {
          label: "🪜 La scala della persecuzione",
          html: `<p>La persecuzione degli ebrei in Germania non cominciò con lo sterminio: fu una <b>scala</b>, un gradino alla volta, e ogni gradino rendeva \"normale\" il successivo. Riconoscere i primi gradini (parole d'odio, discriminazioni) è il modo per fermarsi in tempo.</p>`,
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="20" y="240" width="120" height="50" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<rect x="140" y="190" width="120" height="100" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
<rect x="260" y="140" width="120" height="150" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
<rect x="380" y="90" width="120" height="200" fill="#f87171" stroke="#991b1b" stroke-width="2"/>
<rect x="500" y="40" width="120" height="250" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
<text x="80" y="232" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Parole d'odio</text>
<text x="80" y="268" font-size="13" text-anchor="middle" fill="#0f172a">propaganda</text>
<text x="200" y="182" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Boicottaggio</text>
<text x="200" y="215" font-size="13" text-anchor="middle" fill="#0f172a">1933</text>
<text x="320" y="132" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Leggi razziali</text>
<text x="320" y="165" font-size="13" text-anchor="middle" fill="#0f172a">1935 · 1938 Italia</text>
<text x="440" y="82" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Violenza</text>
<text x="440" y="115" font-size="13" text-anchor="middle" fill="#fff">Notte dei cristalli 1938</text>
<text x="560" y="32" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold">Sterminio</text>
<text x="560" y="65" font-size="13" text-anchor="middle" fill="#fff">Shoah 1941–45</text>
</svg>`
        },
        {
          label: "📅 Le date in fila",
          html: `<p>Tre storie parallele in vent'anni: guarda come si intrecciano.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: 1917, label: "Rivoluzione russa", icon: "🚩" },
              { year: 1919, label: "Fasci di comb.", icon: "⚫" },
              { year: 1922, label: "Marcia su Roma", icon: "🚶" },
              { year: 1924, label: "Delitto Matteotti", icon: "🕯️" },
              { year: 1928, label: "Piani di Stalin", icon: "🏭" },
              { year: 1929, label: "Crisi di Wall Street", icon: "📉" },
              { year: 1933, label: "Hitler al potere", icon: "🇩🇪" },
              { year: 1935, label: "Leggi Norimberga", icon: "📜" },
              { year: 1938, label: "Leggi razziali Italia", icon: "🚫" }
            ]
          }
        },
        {
          label: "🔗 Abbina persone e fatti",
          html: `<p>Collega ogni nome al suo ruolo.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Lenin", "Guida la rivoluzione d'ottobre"],
              ["Stalin", "Piani quinquennali e grandi purghe"],
              ["Mussolini", "Fonda i Fasci di combattimento"],
              ["Matteotti", "Denuncia le violenze e viene ucciso"],
              ["Hitler", "Cancelliere nel 1933, poi Führer"],
              ["Hannah Arendt", "Studia le origini del totalitarismo"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei totalitarismi: tocca i nodi e scopri il perché",
      nodes: [
        { id: "guerra", label: "Eredità della guerra", x: 15, y: 8, color: "#64748b", html: "Milioni di reduci, violenza, rancori per i trattati.", why: "La Grande Guerra aveva \"abituato\" alla morte e alla disciplina militare; i trattati del 1919 lasciarono Italia e Germania insoddisfatte." },
        { id: "crisi", label: "Crisi economiche", x: 50, y: 8, color: "#f59e0b", html: "Inflazione, disoccupazione, crisi del 1929.", why: "I debiti di guerra e le riparazioni destabilizzarono le economie; il crollo di Wall Street (ottobre 1929) si propagò in Europa perché le banche americane ritirarono i prestiti." },
        { id: "paura", label: "Paura della rivoluzione", x: 85, y: 8, color: "#ef4444", html: "Il timore che il comunismo russo si diffondesse.", why: "Dopo il 1917 scioperi e occupazioni (biennio rosso in Italia, rivolte in Germania) spaventarono borghesi e proprietari, che spesso appoggiarono i movimenti fascisti come \"argine\"." },
        { id: "urss", label: "URSS di Stalin", x: 15, y: 45, color: "#dc2626", html: "Partito comunista, piani quinquennali, gulag, purghe.", why: "Nata da una rivoluzione e da una guerra civile, l'URSS considerava legittimo usare il terrore contro i \"nemici di classe\"; Stalin lo estese a chiunque potesse opporsi." },
        { id: "fascismo", label: "Fascismo", x: 50, y: 45, color: "#1f2937", html: "Squadrismo, Marcia su Roma, leggi fascistissime, consenso, leggi razziali.", why: "Mussolini sfruttò la paura del socialismo e la debolezza dei governi liberali; la monarchia e parte delle élite pensarono di poterlo controllare." },
        { id: "nazismo", label: "Nazismo", x: 85, y: 45, color: "#7f1d1d", html: "Razzismo, antisemitismo, Führer, Gestapo, SS, spazio vitale.", why: "Hitler arrivò al potere legalmente, sfruttando la crisi del 1929 e la debolezza di Weimar; i conservatori lo fecero cancelliere credendo di \"addomesticarlo\". L'antisemitismo aveva radici antiche in Europa, che il nazismo trasformò in falsa \"scienza delle razze\"." },
        { id: "metodi", label: "Metodi comuni", x: 50, y: 70, color: "#7c3aed", html: "Partito unico, capo, propaganda, terrore, controllo dei giovani.", why: "Le nuove tecnologie di massa (radio, cinema, altoparlanti, stampa) permettevano per la prima volta di raggiungere ogni casa con la propaganda: il controllo poteva diventare \"totale\"." },
        { id: "resistenza", label: "Oppositori", x: 15, y: 90, color: "#16a34a", html: "Antifascisti, dissidenti, esuli, perseguitati.", why: "Persone come Matteotti, Gramsci, i fratelli Rosselli, i 12 professori, i dissidenti sovietici pagarono con il carcere, l'esilio o la vita. La loro memoria è alla base delle democrazie nate dopo il 1945." },
        { id: "guerra2", label: "Verso la Seconda guerra", x: 85, y: 90, color: "#0ea5e9", html: "Riarmo, Etiopia, Spagna, Anschluss, Asse Roma-Berlino.", why: "I regimi fascista e nazista esaltavano la guerra come prova di forza e cercavano conquiste; le democrazie, stanche della guerra precedente, cercarono di evitarla cedendo." }
      ],
      edges: [
        ["guerra", "fascismo", "alimenta il"],
        ["crisi", "nazismo", "favorisce il"],
        ["paura", "fascismo", "spinge verso il"],
        ["paura", "nazismo", "spinge verso il"],
        ["guerra", "urss", "fa crollare lo zar →"],
        ["urss", "metodi", "usa"],
        ["fascismo", "metodi", "usa"],
        ["nazismo", "metodi", "usa"],
        ["metodi", "resistenza", "perseguitano gli"],
        ["fascismo", "guerra2", "porta alla"],
        ["nazismo", "guerra2", "porta alla"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: il nazismo",
      questions: [
        { type: "mc", q: "In che modo Hitler divenne cancelliere nel 1933?", options: ["Con una rivoluzione armata", "Fu nominato dal presidente Hindenburg dopo il successo elettorale", "Vinse una guerra civile"], answer: 1, explain: "Fu nominato legalmente il 30 gennaio 1933." },
        { type: "tf", q: "Le leggi di Norimberga del 1935 tolsero agli ebrei la cittadinanza tedesca.", answer: true, explain: "Furono una tappa fondamentale della persecuzione." },
        { type: "mc", q: "Che cosa fu la \"notte dei cristalli\"?", options: ["Una festa nazista", "Un pogrom contro gli ebrei nel novembre 1938", "L'incendio del Reichstag"], answer: 1, explain: "Sinagoghe e negozi ebraici furono distrutti in tutta la Germania." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Totalitarismo</b>: partito unico, capo carismatico, ideologia, propaganda, polizia segreta e terrore, controllo di giovani ed economia.</li>
<li><b>URSS</b>: rivoluzione d'ottobre (1917), Lenin; poi <b>Stalin</b>: piani quinquennali, collettivizzazione, carestia, gulag, purghe.</li>
<li><b>Italia</b>: Fasci (1919), <b>Marcia su Roma</b> (1922), <b>delitto Matteotti</b> (1924), leggi fascistissime (1925–26), Patti Lateranensi (1929), Etiopia (1935–36), <b>leggi razziali</b> (1938).</li>
<li><b>Germania</b>: Weimar, crisi del 1929, <b>Hitler cancelliere</b> (1933), Führer (1934), leggi di <b>Norimberga</b> (1935), notte dei cristalli (1938).</li>
<li>La libertà si difende riconoscendo presto propaganda, odio e discriminazioni.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Totalitarismo", d: "Regime che vuole controllare ogni aspetto della vita pubblica e privata." },
    { t: "Culto della personalità", d: "Esaltazione del capo come persona eccezionale e infallibile." },
    { t: "Propaganda", d: "Diffusione organizzata di idee e messaggi per ottenere consenso." },
    { t: "Bolscevichi", d: "Comunisti russi guidati da Lenin." },
    { t: "Gulag", d: "Sistema di campi di lavoro forzato dell'URSS." },
    { t: "Collettivizzazione", d: "Passaggio forzato delle terre private a grandi aziende statali o collettive." },
    { t: "Squadrismo", d: "Violenza organizzata delle squadre fasciste contro avversari politici." },
    { t: "Leggi fascistissime", d: "Leggi del 1925–26 che trasformarono l'Italia in una dittatura." },
    { t: "Confino", d: "Obbligo di vivere in un luogo isolato imposto agli oppositori." },
    { t: "Antisemitismo", d: "Odio e discriminazione contro gli ebrei." },
    { t: "Leggi razziali", d: "Leggi discriminatorie contro gli ebrei: in Germania dal 1935, in Italia dal 1938." },
    { t: "Führer", d: "\"Guida\": titolo assunto da Hitler come capo assoluto della Germania." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di queste caratteristiche NON appartiene a un regime totalitario?", options: ["Partito unico", "Polizia segreta", "Libertà di stampa", "Culto del capo"], answer: 2, explain: "Nei totalitarismi la stampa è controllata e censurata." },
      { type: "text", q: "Come si chiamavano i campi di lavoro forzato sovietici?", answer: ["gulag", "i gulag"], explain: "I gulag." },
      { type: "mc", q: "Che cosa fu la collettivizzazione voluta da Stalin?", options: ["La distribuzione della terra ai singoli contadini", "Il passaggio forzato delle terre a grandi aziende collettive o statali", "La vendita delle terre agli stranieri"], answer: 1, explain: "I contadini furono costretti a entrare nei kolchoz." },
      { type: "order", q: "Metti in ordine cronologico gli eventi italiani.", items: ["Fondazione dei Fasci di combattimento", "Marcia su Roma", "Delitto Matteotti", "Patti Lateranensi", "Leggi razziali"], explain: "1919, 1922, 1924, 1929, 1938." },
      { type: "mc", q: "Che cosa fece il re durante la Marcia su Roma?", options: ["Firmò lo stato d'assedio", "Rifiutò lo stato d'assedio e affidò il governo a Mussolini", "Fuggì all'estero"], answer: 1, explain: "Il 30 ottobre 1922 incaricò Mussolini." },
      { type: "tf", q: "Con i Patti Lateranensi del 1929 nacque lo Stato della Città del Vaticano.", answer: true, explain: "Fu l'accordo tra Stato italiano e Santa Sede." },
      { type: "num", q: "In che anno Hitler fu nominato cancelliere?", answer: 1933, explain: "Il 30 gennaio 1933." },
      { type: "mc", q: "Quale evento economico favorì l'ascesa del nazismo?", options: ["La scoperta del petrolio", "La crisi del 1929", "La rivoluzione industriale"], answer: 1, explain: "La disoccupazione di massa portò voti ai nazisti." },
      { type: "mc", q: "Che cosa stabilirono le leggi razziali italiane del 1938?", options: ["La parità di tutti i cittadini", "L'esclusione degli ebrei da scuole, università e impieghi pubblici", "Il diritto di voto alle donne"], answer: 1, explain: "Furono leggi di discriminazione e persecuzione." },
      { type: "text", q: "Come si chiamava la polizia segreta nazista?", answer: ["gestapo", "la gestapo"], explain: "La Gestapo." },
      { type: "tf", q: "Fascismo e nazismo arrivarono al potere solo con la forza, senza alcun appoggio delle istituzioni.", answer: false, explain: "Mussolini fu nominato dal re e Hitler dal presidente Hindenburg: entrambi ebbero l'appoggio di parte delle élite." },
      { type: "mc", q: "Chi scrisse \"Le origini del totalitarismo\" (1951)?", options: ["Hannah Arendt", "Karl Marx", "Primo Levi"], answer: 0, explain: "La filosofa Hannah Arendt." }
    ]
  }
});

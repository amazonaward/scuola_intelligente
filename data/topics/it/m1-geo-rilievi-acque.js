TOPIC('it', {
  id: `m1-geo-rilievi-acque`,
  title: `Rilievi e acque d'Europa e d'Italia`,
  intro: `L'Europa è un continente piccolo ma molto vario: grandi catene montuose come le <b>Alpi</b>, immense pianure, fiumi lunghi migliaia di chilometri come il <b>Volga</b> e il <b>Danubio</b>, migliaia di laghi. L'Italia ne è un esempio in miniatura: montagne, colline, pianure, vulcani, fiumi e laghi in poco spazio. Scopriamo come si sono formati e perché sono importanti per la vita delle persone.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Come nascono i rilievi`,
      html: `<p>La crosta terrestre è divisa in grandi <b>placche</b> che si muovono di pochi centimetri all'anno. Quando due placche si scontrano, le rocce si piegano e si sollevano: è l'<b>orogenesi</b> (dal greco «nascita dei monti»).</p><ul><li><b>Montagne giovani</b> (Alpi, Pirenei, Appennini, Caucaso): formate negli ultimi 60–30 milioni di anni circa, dallo scontro tra la placca <b>africana</b> e quella <b>euroasiatica</b>. Sono <b>alte</b>, con cime aguzze, e si sollevano ancora, mentre l'erosione le consuma.</li><li><b>Montagne antiche</b> (Urali, Alpi Scandinave, rilievi della Scozia e della Germania centrale): nate centinaia di milioni di anni fa, oggi sono <b>basse e arrotondate</b> perché l'erosione le ha consumate a lungo.</li></ul><p>Le <b>colline</b> possono essere montagne molto erose, depositi di ghiacciai (colline moreniche) o vulcani spenti. Le <b>pianure</b> si formano soprattutto con i <b>detriti</b> portati dai fiumi (pianure alluvionali).</p>`
    },
    {
      type: `3d`,
      title: `Paesaggio 3D: tocca e scopri`,
      scene: `terrain`,
      options: {
        features: {
          mountain: { label: `Montagna`, html: `Rilievo oltre i <b>600 m</b> circa. In Italia le montagne occupano circa il <b>35%</b> del territorio: Alpi a nord, Appennini lungo tutta la penisola.` },
          peak: { label: `Vetta`, html: `Il punto più alto di una montagna. La vetta più alta delle Alpi e dell'Europa occidentale è il <b>Monte Bianco</b> (circa 4.805 m), tra Italia e Francia.` },
          glacier: { label: `Ghiacciaio`, html: `Massa di ghiaccio che scorre lentamente a valle. In Italia i ghiacciai si stanno riducendo molto per il riscaldamento globale: dal 1850 hanno perso oltre metà della superficie.` },
          hill: { label: `Collina`, html: `Rilievo tra circa 200 e 600 m, con forme dolci. È la forma più diffusa in Italia (circa <b>42%</b> del territorio): Langhe, Monferrato, colline toscane.` },
          valley: { label: `Valle`, html: `Solco tra due rilievi. Le valli scavate dai <b>fiumi</b> hanno forma a <b>V</b>; quelle scavate dai <b>ghiacciai</b> hanno forma a <b>U</b> (come la Valle d'Aosta).` },
          plain: { label: `Pianura`, html: `Territorio piatto sotto i 200 m circa: solo il <b>23%</b> dell'Italia. La più grande è la <b>Pianura Padana</b> (circa 46.000 km²), formata dai detriti del Po e dei suoi affluenti.` },
          source: { label: `Sorgente`, html: `Il punto dove nasce un fiume. Il <b>Po</b> nasce dal Pian del Re, ai piedi del Monviso (Piemonte), a circa 2.000 m.` },
          river: { label: `Fiume`, html: `Corso d'acqua perenne che scorre dalla sorgente alla foce. Il fiume più lungo d'Italia è il <b>Po</b> (652 km); in Europa il <b>Volga</b> (circa 3.530 km).` },
          lake: { label: `Lago`, html: `Massa d'acqua dolce in una conca. Il più grande d'Italia è il <b>Lago di Garda</b> (circa 370 km²); il più grande d'Europa è il <b>Ladoga</b>, in Russia (circa 17.700 km²).` },
          delta: { label: `Delta`, html: `Foce a più rami, che si forma dove il fiume deposita molti detriti in un mare con poche maree. Il <b>delta del Po</b> e il <b>delta del Danubio</b> (Romania) sono zone umide protette.` },
          volcano: { label: `Vulcano`, html: `Apertura della crosta da cui esce il magma. L'<b>Etna</b> (oltre 3.300 m, l'altezza cambia con le eruzioni) è il vulcano attivo più alto d'Europa. Attivi anche Vesuvio, Stromboli, Vulcano e Campi Flegrei.` },
          sea: { label: `Mare`, html: `Dove i fiumi portano le loro acque. L'Europa è bagnata dall'oceano Atlantico, dal Mar Glaciale Artico, dal Mediterraneo, dal Mar Nero, dal Baltico e dal Mare del Nord.` }
        }
      },
      caption: `Ruota il paesaggio e tocca ogni parte: si illumina e compare la spiegazione con esempi d'Europa e d'Italia.`
    },
    {
      type: `text`,
      title: `2. I rilievi d'Europa`,
      html: `<ul><li><b>Alpi</b>: grande arco di circa 1.200 km dalla Liguria all'Austria e alla Slovenia. Vette: Monte Bianco (circa 4.805 m), Monte Rosa (4.634 m), Cervino (4.478 m).</li><li><b>Pirenei</b>: tra Francia e Spagna; cima più alta l'Aneto (3.404 m).</li><li><b>Carpazi</b>: arco tra Slovacchia, Polonia, Ucraina e Romania.</li><li><b>Balcani</b> e <b>Alpi Dinariche</b>: nella penisola balcanica.</li><li><b>Alpi Scandinave</b>: antiche, lungo Norvegia e Svezia, con i <b>fiordi</b> scavati dai ghiacciai.</li><li><b>Urali</b>: antichi e bassi (cima più alta circa 1.895 m), segnano il <b>confine convenzionale tra Europa e Asia</b>.</li><li><b>Caucaso</b>: tra Mar Nero e Mar Caspio; il monte <b>Elbrus</b> (5.642 m) è considerato da molti geografi la vetta più alta d'Europa, a seconda di dove si traccia il confine.</li></ul><p>Le grandi <b>pianure</b>: la <b>Grande Pianura Europea</b>, che va dalla Francia alla Russia passando per Germania e Polonia, la pianura ungherese (Pannonica), la Pianura Padana.</p>`
    },
    {
      type: `text`,
      title: `3. I rilievi d'Italia`,
      html: `<ul><li><b>Alpi</b>: si dividono in <b>occidentali</b> (dal Colle di Cadibona al Monte Bianco), <b>centrali</b> (fino al Brennero) e <b>orientali</b> (fino al passo di Vrata). Sono attraversate da passi e trafori (Fréjus, Monte Bianco, Gottardo, Brennero).</li><li><b>Appennini</b>: lunga catena di circa 1.200 km che attraversa la penisola come una «spina dorsale», dalla Liguria alla Calabria, e continua in Sicilia. Sono più bassi delle Alpi: la vetta più alta è il <b>Corno Grande</b> del Gran Sasso (2.912 m), in Abruzzo, dove c'è anche il ghiacciaio più meridionale d'Europa, il Calderone (ormai quasi scomparso).</li><li><b>Vulcani</b>: Etna, Vesuvio, Stromboli, Vulcano, Campi Flegrei, Ischia; molti vulcani spenti hanno formato colline e laghi nel Lazio.</li><li><b>Pianure</b>: oltre alla Padana, il Tavoliere delle Puglie, la Maremma, l'Agro Pontino, la Piana di Catania, il Campidano in Sardegna.</li></ul>`
    },
    {
      type: `svg`,
      title: `Profilo dei rilievi: chi è il più alto?`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#e0f2fe"/><line x1="40" y1="280" x2="580" y2="280" stroke="#334155" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#475569" text-anchor="end"><text x="36" y="284">0</text><text x="36" y="234">1000</text><text x="36" y="184">2000</text><text x="36" y="134">3000</text><text x="36" y="84">4000</text><text x="36" y="34">5000</text></g><g stroke="#cbd5e1" stroke-width="1"><line x1="40" y1="230" x2="580" y2="230"/><line x1="40" y1="180" x2="580" y2="180"/><line x1="40" y1="130" x2="580" y2="130"/><line x1="40" y1="80" x2="580" y2="80"/><line x1="40" y1="30" x2="580" y2="30"/></g><polygon points="50,280 95,0 140,280" fill="#57534e"/><polygon points="80,60 95,0 110,60" fill="#ffffff"/><polygon points="150,280 205,40 260,280" fill="#a16207"/><polygon points="190,100 205,40 220,100" fill="#ffffff"/><polygon points="270,280 320,110 370,280" fill="#ca8a04"/><polygon points="380,280 430,113 480,280" fill="#dc2626"/><polygon points="490,280 535,185 580,280" fill="#65a30d"/><g font-family="sans-serif" font-size="14" text-anchor="middle" fill="#0f172a" font-weight="bold"><text x="95" y="300">Elbrus</text><text x="205" y="300">M. Bianco</text><text x="320" y="300">Aneto</text><text x="430" y="300">Etna</text><text x="535" y="300">Urali</text></g><g font-family="sans-serif" font-size="13" text-anchor="middle" fill="#1e293b"><text x="95" y="316">5.642 m</text><text x="205" y="316">≈4.805 m</text><text x="320" y="316">3.404 m</text><text x="430" y="316">≈3.350 m</text><text x="535" y="316">1.895 m</text></g><text x="560" y="60" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">Gran Sasso: 2.912 m</text></svg>`,
      caption: `Confronto delle altezze (scala verticale: ogni riga = 1.000 m). Le montagne giovani (Caucaso, Alpi, Pirenei) sono molto più alte di quelle antiche (Urali).`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 1`,
      questions: [
        { type: `mc`, q: `Quale catena montuosa segna il confine convenzionale tra Europa e Asia?`, options: [`Alpi`, `Pirenei`, `Urali`, `Carpazi`], answer: 2, explain: `Gli Urali, antichi e bassi, in Russia.` },
        { type: `text`, q: `Qual è la vetta più alta degli Appennini?`, answer: [`corno grande`, `il corno grande`, `gran sasso`, `corno grande del gran sasso`], explain: `Il Corno Grande del Gran Sasso, 2.912 m.` },
        { type: `num`, q: `Quanti metri in più del Corno Grande (2.912 m) misura il Monte Bianco (circa 4.805 m)?`, answer: 1893, tol: 0, unit: `m`, explain: `4.805 − 2.912 = 1.893 m.` }
      ]
    },
    {
      type: `text`,
      title: `4. Le acque: fiumi`,
      html: `<p>Un fiume nasce da una <b>sorgente</b> (o da un ghiacciaio o un lago), scorre in un <b>letto</b> tra due <b>argini</b>, riceve <b>affluenti</b> e termina in una <b>foce</b>, che può essere a <b>estuario</b> (un'unica bocca larga, dove le maree portano via i detriti: Senna, Tamigi) o a <b>delta</b> (più rami: Po, Danubio, Rodano, Volga). Il territorio da cui un fiume raccoglie le acque è il suo <b>bacino idrografico</b>.</p><p><b>Fiumi d'Europa</b>:</p><table><tr><th>Fiume</th><th>Lunghezza</th><th>Sfocia in</th></tr><tr><td>Volga</td><td>≈3.530 km</td><td>Mar Caspio</td></tr><tr><td>Danubio</td><td>≈2.850 km</td><td>Mar Nero (attraversa 10 Stati)</td></tr><tr><td>Dnepr</td><td>≈2.200 km</td><td>Mar Nero</td></tr><tr><td>Reno</td><td>≈1.230 km</td><td>Mare del Nord</td></tr><tr><td>Elba</td><td>≈1.090 km</td><td>Mare del Nord</td></tr><tr><td>Loira</td><td>≈1.010 km</td><td>Oceano Atlantico</td></tr><tr><td>Rodano</td><td>≈810 km</td><td>Mar Mediterraneo</td></tr></table><p><b>Fiumi d'Italia</b>: il <b>Po</b> (652 km, il più lungo e con il bacino più grande), l'<b>Adige</b> (410 km), il <b>Tevere</b> (405 km, attraversa Roma), l'Adda, l'Oglio, il Tanaro, l'Arno, il Volturno.</p><ul><li>I fiumi <b>alpini</b> hanno acqua tutto l'anno, alimentati da nevi e ghiacciai (piene in primavera-estate).</li><li>I fiumi <b>appenninici</b> e delle isole sono brevi e spesso <b>torrentizi</b>: quasi asciutti d'estate, in piena improvvisa con le piogge (le <b>fiumare</b> calabresi).</li></ul>`
    },
    {
      type: `example`,
      title: `Esempio pratico: il viaggio di una goccia d'acqua`,
      html: `<p>Una goccia di neve si scioglie sul Monviso, a circa 2.000 m: nasce il <b>Po</b>. Scende tra le montagne piemontesi, passa per <b>Torino</b>, riceve la Dora Baltea, il Ticino, l'Adda, l'Oglio, il Mincio… attraversa la Pianura Padana, bagna Piacenza e Cremona e dopo <b>652 km</b> si divide nei rami del <b>delta</b>, tra Veneto ed Emilia-Romagna, gettandosi nel <b>Mar Adriatico</b>. Se scorresse a 3 km/h senza fermarsi, impiegherebbe circa 652 : 3 ≈ <b>217 ore</b>, cioè 9 giorni.</p>`
    },
    {
      type: `text`,
      title: `5. Le acque: laghi`,
      html: `<p>I laghi si classificano in base all'<b>origine</b> della conca:</p><ul><li><b>Glaciali</b>: conche scavate dai ghiacciai e sbarrate dalle morene. In Italia i grandi <b>laghi prealpini</b>: <b>Garda</b> (il più grande, circa 370 km²), <b>Maggiore</b>, <b>Como</b> (il più profondo, oltre 400 m), Iseo, Lugano. In Europa i laghi della Finlandia (circa 188.000!) e della Scandinavia, e il <b>Ladoga</b>.</li><li><b>Vulcanici</b>: in crateri di vulcani spenti, di forma rotonda: Bolsena, Bracciano, Vico, Albano (Lazio), Averno (Campania).</li><li><b>Costieri</b> (lagune): separati dal mare da cordoni di sabbia: Lesina e Varano (Puglia), laguna di Venezia.</li><li><b>Carsici</b>: in rocce calcaree sciolte dall'acqua.</li><li><b>Artificiali</b>: creati da dighe per produrre energia o irrigare.</li></ul><p>Il <b>Mar Caspio</b>, al confine tra Europa e Asia, è il più grande lago del mondo (circa 371.000 km²), ma ha acqua salata.</p>`
    },
    {
      type: `widget`,
      title: `Abbina il fiume al mare in cui sfocia`,
      widget: `match`,
      options: { pairs: [ [`Po`, `Mar Adriatico`], [`Tevere`, `Mar Tirreno`], [`Volga`, `Mar Caspio`], [`Danubio`, `Mar Nero`], [`Reno`, `Mare del Nord`], [`Rodano`, `Mar Mediterraneo (Golfo del Leone)`], [`Vistola`, `Mar Baltico`] ] },
      caption: `Aiutati con una carta fisica d'Europa.`
    },
    {
      type: `widget`,
      title: `Classifica i laghi per origine`,
      widget: `classify`,
      options: { groups: [`Glaciale`, `Vulcanico`, `Costiero`], items: [ [`Lago di Garda`, 0], [`Lago di Como`, 0], [`Lago Maggiore`, 0], [`Lago di Bolsena`, 1], [`Lago di Bracciano`, 1], [`Lago d'Averno`, 1], [`Lago di Lesina`, 2], [`Lago di Varano`, 2] ] },
      caption: `Suggerimento: i laghi vulcanici sono rotondi; i costieri sono vicinissimi al mare.`
    },
    {
      type: `curiosity`,
      title: `Il Monte Bianco cambia altezza`,
      html: `<p>L'altezza del Monte Bianco non è fissa! La cima è coperta da una calotta di <b>ghiaccio e neve</b> spessa diversi metri, che cambia con il vento e le nevicate. Le misure dei geometri francesi e italiani, ripetute ogni due anni, hanno dato 4.810 m nel 2007 e circa 4.805 m nel 2023. La roccia sotto il ghiaccio è a circa 4.792 m.</p>`
    },
    {
      type: `curiosity`,
      title: `Il Danubio delle capitali`,
      html: `<p>Il <b>Danubio</b> nasce nella Foresta Nera (Germania), attraversa o lambisce <b>10 Stati</b> (più di qualsiasi altro fiume al mondo) e bagna <b>4 capitali</b>: Vienna, Bratislava, Budapest e Belgrado. Per secoli è stato una grande via di commercio, e il compositore Johann Strauss gli dedicò il famoso valzer <i>Sul bel Danubio blu</i> (1867).</p>`
    },
    {
      type: `example`,
      title: `Esempio pratico: rilievi e acque nella vita di tutti i giorni`,
      html: `<ul><li>Il <b>Po</b> e i suoi affluenti irrigano campi di riso, mais e foraggi: la Pianura Padana è la zona agricola più produttiva d'Italia.</li><li>Le <b>centrali idroelettriche</b> sulle Alpi sfruttano dighe e cascate: l'acqua che scende fa girare le turbine e produce energia rinnovabile.</li><li>I <b>trafori</b> alpini (Fréjus, Monte Bianco, Gottardo, Brennero e il nuovo tunnel di base del Brennero) permettono a merci e persone di attraversare le Alpi.</li><li>Il <b>Reno</b> e il <b>Danubio</b> sono «autostrade d'acqua» percorse da chiatte che trasportano merci; un canale li collega, unendo Mare del Nord e Mar Nero.</li></ul>`
    },
    {
      type: `alternatives`,
      title: `Altri modi per capirlo`,
      intro: `Se elenchi di nomi e numeri non ti restano in mente, prova queste strade.`,
      tabs: [
        { label: `🧻 Il tovagliolo spinto`, html: `<p>Appoggia un tovagliolo sul tavolo e spingilo da due lati verso il centro: si formano delle <b>pieghe</b> che si sollevano. È proprio quello che fanno le placche quando si scontrano: le rocce si piegano e nascono le montagne. Se poi passi molte volte la mano sulle pieghe, si appiattiscono: è l'<b>erosione</b> che rende basse le montagne antiche.</p>` },
        { label: `🦴 Lo scheletro dell'Italia`, html: `<p>Immagina l'Italia come un corpo: le <b>Alpi</b> sono una corona sulla testa, gli <b>Appennini</b> la <b>spina dorsale</b> che scende fino in Calabria, la <b>Pianura Padana</b> le spalle larghe, i <b>fiumi</b> le vene che portano acqua (il Po è l'aorta!), i <b>vulcani</b> il cuore caldo del Sud.</p>`, svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#e0f2fe"/><path d="M170 60 Q240 30 320 40 Q390 35 430 70 L400 95 Q350 85 320 95 L330 140 Q350 180 390 210 Q420 230 440 260 L420 280 Q400 260 380 255 L360 240 Q330 220 300 180 Q280 150 270 110 Q230 95 190 100 Z" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><path d="M175 70 Q250 40 320 50 Q390 45 425 72" fill="none" stroke="#78350f" stroke-width="10" stroke-linecap="round"/><path d="M280 100 Q300 150 335 190 Q370 225 405 262" fill="none" stroke="#a16207" stroke-width="7" stroke-linecap="round" stroke-dasharray="2 10"/><path d="M200 92 Q280 88 360 92" fill="none" stroke="#2563eb" stroke-width="4"/><circle cx="345" cy="205" r="7" fill="#dc2626"/><circle cx="440" cy="295" r="7" fill="#dc2626"/><path d="M405 285 Q440 275 470 290 Q450 310 410 305 Z" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><g font-family="sans-serif" font-size="15" fill="#0f172a"><text x="440" y="50">Alpi = corona</text><text x="440" y="150">Appennini =</text><text x="440" y="168">spina dorsale</text><text x="40" y="120">Po = aorta</text><text x="40" y="200" fill="#b91c1c">vulcani = cuore caldo</text></g></svg>` },
        { label: `🇳🇴 Fiordi e laghi del Nord`, html: `<p>In Norvegia i ghiacciai dell'ultima glaciazione (finita circa 11.700 anni fa) hanno scavato valli profondissime che poi il mare ha invaso: i <b>fiordi</b>. Il Sognefjord è lungo oltre 200 km. In Finlandia, invece, i ghiacciai hanno lasciato decine di migliaia di conche: per questo la chiamano «terra dei mille laghi». Lo stesso processo, in piccolo, ha creato i nostri laghi prealpini.</p>` },
        { label: `🌍 Sul globo`, html: `<p>Trova sul globo le vette e le foci dei grandi fiumi europei. Nota come quasi tutti i grandi fiumi d'Europa orientale scorrano verso sud (Mar Nero e Caspio), e quelli d'Europa occidentale verso nord e ovest (Mare del Nord e Atlantico).</p>`, scene: `globe`, options: { points: [ { lat: 45.83, lon: 6.86, label: `Monte Bianco`, color: `#78350f` }, { lat: 43.35, lon: 42.44, label: `Elbrus`, color: `#78350f` }, { lat: 42.47, lon: 13.57, label: `Gran Sasso`, color: `#a16207` }, { lat: 37.75, lon: 15.0, label: `Etna`, color: `#dc2626` }, { lat: 44.95, lon: 12.5, label: `Delta del Po`, color: `#2563eb` }, { lat: 45.2, lon: 29.6, label: `Delta del Danubio`, color: `#2563eb` }, { lat: 46.3, lon: 48.0, label: `Delta del Volga`, color: `#2563eb` }, { lat: 61.0, lon: 31.5, label: `Lago Ladoga`, color: `#0ea5e9` }, { lat: 45.6, lon: 10.65, label: `Lago di Garda`, color: `#0ea5e9` } ] } }
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz 2`,
      questions: [
        { type: `mc`, q: `Qual è il fiume più lungo d'Europa?`, options: [`Danubio`, `Reno`, `Volga`, `Po`], answer: 2, explain: `Il Volga, circa 3.530 km, sfocia nel Mar Caspio.` },
        { type: `mc`, q: `Di che origine è il Lago di Bolsena?`, options: [`Glaciale`, `Vulcanica`, `Costiera`, `Artificiale`], answer: 1, explain: `Occupa una grande conca vulcanica nel Lazio.` },
        { type: `tf`, q: `I fiumi appenninici hanno molta acqua anche in estate grazie ai ghiacciai.`, answer: false, explain: `Sono spesso torrentizi: quasi asciutti d'estate. Sono i fiumi alpini ad avere ghiacciai.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Mappa concettuale: perché il territorio è così?`,
      nodes: [
        { id: `placche`, label: `Placche tettoniche`, x: 50, y: 8, color: `#7c2d12`, html: `<p>Africa ed Eurasia si avvicinano di qualche millimetro o centimetro all'anno.</p>`, why: `<p>La teoria della deriva dei continenti fu proposta da Alfred Wegener (1912) e confermata negli anni '60 con la tettonica a placche, grazie allo studio dei fondali oceanici.</p>` },
        { id: `giovani`, label: `Montagne giovani`, x: 20, y: 30, color: `#a16207`, html: `<p>Alpi, Pirenei, Appennini, Caucaso: alte e aguzze.</p>`, why: `<p>Lo scontro tra Africa ed Europa (orogenesi alpina) è iniziato decine di milioni di anni fa e continua: per questo in Italia ci sono terremoti.</p>` },
        { id: `antiche`, label: `Montagne antiche`, x: 80, y: 30, color: `#78716c`, html: `<p>Urali, Alpi Scandinave: basse e arrotondate.</p>`, why: `<p>Si formarono in orogenesi molto più antiche (centinaia di milioni di anni fa); da allora pioggia, gelo e vento le hanno consumate.</p>` },
        { id: `vulcani`, label: `Vulcani`, x: 50, y: 38, color: `#dc2626`, html: `<p>Etna, Vesuvio, Stromboli, Islanda.</p>`, why: `<p>Nascono dove il magma risale: nel Sud Italia la placca africana scende sotto quella europea (subduzione); in Islanda due placche si allontanano lungo la dorsale atlantica.</p>` },
        { id: `ghiacciai`, label: `Glaciazioni`, x: 15, y: 65, color: `#0ea5e9`, html: `<p>Grandi ghiacciai fino a circa 11.700 anni fa.</p>`, why: `<p>Lo sappiamo dalle <b>morene</b> (colline di detriti), dai massi erratici e dalle valli a U. L'ultima glaciazione coprì di ghiaccio la Scandinavia e le Alpi.</p>` },
        { id: `fiumi`, label: `Fiumi`, x: 50, y: 65, color: `#2563eb`, html: `<p>Volga, Danubio, Reno, Po, Tevere…</p>`, why: `<p>L'acqua piovana e quella di disgelo scorre sempre verso il basso: i rilievi decidono dove nascono i fiumi e in quale mare finiscono (spartiacque).</p>` },
        { id: `laghi`, label: `Laghi`, x: 30, y: 90, color: `#06b6d4`, html: `<p>Glaciali, vulcanici, costieri, carsici, artificiali.</p>`, why: `<p>Un lago esiste dove c'è una <b>conca</b> che trattiene l'acqua: la forma e l'origine della conca determinano il tipo di lago.</p>` },
        { id: `pianure`, label: `Pianure alluvionali`, x: 72, y: 88, color: `#16a34a`, html: `<p>Pianura Padana, Grande Pianura Europea.</p>`, why: `<p>Per milioni di anni i fiumi hanno trasportato sabbia, ghiaia e argilla dalle montagne e le hanno depositate: la Pianura Padana era un golfo marino, riempito dai detriti di Alpi e Appennini.</p>` },
        { id: `uomo`, label: `Uomo e territorio`, x: 88, y: 62, color: `#ca8a04`, html: `<p>Agricoltura, energia idroelettrica, trasporti, turismo, rischi.</p>`, why: `<p>Le persone si sono sempre insediate vicino all'acqua e nelle pianure fertili; oggi dobbiamo anche difenderci da alluvioni, frane e dalla scomparsa dei ghiacciai.</p>` }
      ],
      edges: [ [`placche`, `giovani`, `scontro`], [`placche`, `antiche`, `in passato`], [`placche`, `vulcani`, `magma`], [`ghiacciai`, `laghi`, `scavano`], [`giovani`, `fiumi`, `alimentano`], [`fiumi`, `pianure`, `depositano`], [`fiumi`, `laghi`, ``], [`pianure`, `uomo`, `agricoltura`], [`fiumi`, `uomo`, `energia, trasporti`] ]
    }
  ],
  glossary: [
    { t: `Orogenesi`, d: `Processo di formazione delle montagne per lo scontro di placche.` },
    { t: `Erosione`, d: `Consumo delle rocce causato da acqua, vento, ghiaccio.` },
    { t: `Pianura alluvionale`, d: `Pianura formata dai detriti depositati dai fiumi.` },
    { t: `Affluente`, d: `Fiume che si getta in un altro fiume.` },
    { t: `Bacino idrografico`, d: `Territorio da cui un fiume e i suoi affluenti raccolgono le acque.` },
    { t: `Delta`, d: `Foce di un fiume divisa in più rami.` },
    { t: `Estuario`, d: `Foce di un fiume a un'unica bocca larga, a forma di imbuto.` },
    { t: `Regime`, d: `Variazione della portata di un fiume durante l'anno.` },
    { t: `Torrentizio`, d: `Detto di un corso d'acqua con portata molto variabile, quasi secco d'estate.` },
    { t: `Morena`, d: `Accumulo di detriti trasportati e depositati da un ghiacciaio.` },
    { t: `Fiordo`, d: `Lunga e profonda insenatura scavata da un ghiacciaio e invasa dal mare.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Perché le Alpi sono più alte e aguzze degli Urali?`, options: [`Perché sono più giovani e meno erose`, `Perché sono fatte di ghiaccio`, `Perché sono vulcani`, `Perché sono più a sud`], answer: 0, explain: `Le montagne giovani hanno subito meno erosione.` },
      { type: `text`, q: `Qual è il fiume più lungo d'Italia?`, answer: [`po`, `il po`], explain: `Il Po, 652 km.` },
      { type: `num`, q: `Quanti km è lungo il Po?`, answer: 652, tol: 2, unit: `km`, explain: `Circa 652 km, dal Monviso all'Adriatico.` },
      { type: `mc`, q: `Qual è il lago più grande d'Italia?`, options: [`Lago Maggiore`, `Lago di Como`, `Lago di Garda`, `Lago Trasimeno`], answer: 2, explain: `Il Garda, circa 370 km².` },
      { type: `tf`, q: `Il Danubio attraversa più Stati di qualsiasi altro fiume al mondo.`, answer: true, explain: `Attraversa o lambisce 10 Stati.` },
      { type: `order`, q: `Ordina dal più alto al più basso`, items: [`Elbrus`, `Monte Bianco`, `Aneto`, `Corno Grande`, `Monte Narodnaja (Urali)`], explain: `5.642 m, ≈4.805 m, 3.404 m, 2.912 m, ≈1.895 m.` },
      { type: `mc`, q: `Come si chiama una foce a più rami?`, options: [`Estuario`, `Delta`, `Affluente`, `Sorgente`], answer: 1, explain: `Il delta, come quello del Po.` },
      { type: `mc`, q: `Qual è la forma del territorio più diffusa in Italia?`, options: [`Pianura`, `Collina`, `Montagna`, `Altopiano`], answer: 1, explain: `La collina: circa il 42% del territorio.` },
      { type: `mc`, q: `Dove sfocia il Volga?`, options: [`Mar Nero`, `Mar Baltico`, `Mar Caspio`, `Mare del Nord`], answer: 2, explain: `Nel Mar Caspio, con un grande delta.` },
      { type: `tf`, q: `I laghi prealpini (Garda, Como, Maggiore) hanno origine glaciale.`, answer: true, explain: `Le loro conche furono scavate dai ghiacciai.` },
      { type: `text`, q: `Come si chiama il vulcano attivo più alto d'Europa?`, answer: [`etna`, `l'etna`], explain: `L'Etna, in Sicilia.` },
      { type: `mc`, q: `Perché i fiumi alpini hanno acqua tutto l'anno?`, options: [`Perché piove sempre`, `Perché sono alimentati da nevi e ghiacciai`, `Perché sono corti`, `Perché sono artificiali`], answer: 1, explain: `In estate lo scioglimento di nevi e ghiacciai li alimenta.` }
    ]
  }
});

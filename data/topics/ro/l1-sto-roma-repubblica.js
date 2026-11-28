TOPIC('ro', {
  id: "l1-sto-roma-repubblica",
  title: "Roma: de la origini la republică",
  intro: "Un sat de colibe pe un deal lângă un râu, întemeiat (după legendă) în <b>753 î.Hr.</b>. Trei secole mai târziu era stăpâna Italiei; două secole mai târziu stăpânea întreaga Mediterană. Cum a fost posibil? În această lecție urmărim nașterea Romei între mit și arheologie, domnia regilor, <b>republica</b> cu instituțiile ei, lupta dintre patricieni și plebei, cucerirea Italiei și duelul mortal cu <b>Cartagina</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Originile Romei: mit și arheologie",
      html: `<p>După tradiție, <b>Romulus</b> și <b>Remus</b>, gemeni descendenți ai eroului troian <b>Eneas</b> (fugit din Troia), alăptați de o lupoaică și crescuți de un păstor, au întemeiat Roma la <b>21 aprilie 753 î.Hr.</b> Romulus a trasat brazda pe Palatin și l-a ucis pe Remus, care o sărise. Mitul exprimă ideea unui oraș născut din violență, dar și dintr-o misiune divină.</p>
<p>Arheologia povestește ceva diferit și mai interesant: între secolele al X-lea și al VIII-lea î.Hr. pe coline (Palatin, Capitoliu, Quirinal...) existau <b>sate de păstori și țărani latini și sabini</b>. Locul era excelent: un vad pe <b>Tibru</b> (insula Tiberină), drumul sării (via Salaria), coline ușor de apărat, aproape de mare, dar nu prea aproape. Către sfârșitul secolelor VIII-VII î.Hr. satele s-au contopit într-un oraș, iar Forumul (înainte mlaștină) a fost desecat cu <b>Cloaca Maxima</b>.</p>
<p>Istoricii fac, așadar, distincție între <b>legendă</b> (utilă pentru a înțelege cum se vedeau romanii) și <b>surse istorice</b> (arheologie, inscripții).</p>`
    },
    {
      type: "3d",
      title: "Hartă 3D: expansiunea Romei",
      scene: "spacetime",
      caption: "Baza este harta Italiei și a Mediteranei occidentale, înălțimea este timpul (753-146 î.Hr.). Atinge evenimentele: săgețile leagă cauzele de efecte.",
      options: {
        lat: [34, 47],
        lon: [-2, 20],
        years: [-753, -140],
        places: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 36.85, lon: 10.32, label: "Cartagina" },
          { lat: 40.47, lon: 17.24, label: "Tarent" },
          { lat: 38.19, lon: 15.55, label: "Messina" }
        ],
        events: [
          { id: "fondazione", lat: 41.89, lon: 12.49, year: -753, label: "Întemeierea Romei", html: "Data tradițională: 21 aprilie 753 î.Hr. (Romulus).", causes: [] },
          { id: "cacciata", lat: 41.89, lon: 12.49, year: -509, label: "Alungarea regilor", html: "În 509 î.Hr., după tradiție, romanii îl alungă pe ultimul rege, Tarquinius Superbus, și instituie republica cu doi consuli.", causes: ["fondazione"] },
          { id: "secessione", lat: 41.89, lon: 12.5, year: -494, label: "Prima secesiune a plebei", html: "Plebeii se retrag pe Muntele Sacru: obțin tribunii plebei, cu drept de veto.", causes: ["cacciata"] },
          { id: "dodici", lat: 41.89, lon: 12.49, year: -450, label: "Legea celor XII table", html: "Către 450 î.Hr. legile, păstrate înainte de patricieni, sunt săpate și făcute publice: toți le pot cunoaște.", causes: ["secessione"] },
          { id: "veio", lat: 42.02, lon: 12.4, year: -396, label: "Cucerirea Veiilor", html: "După zece ani de asediu Roma cucerește bogatul oraș etrusc Veii (Camillus).", causes: ["dodici"] },
          { id: "sannitiche", lat: 41.3, lon: 14.6, year: -321, label: "Războaiele samnite", html: "Între 343 și 290 î.Hr. Roma îi învinge pe samniții din Apenini; în 321 suferă umilința Furcilor Caudine.", causes: ["veio"] },
          { id: "pirro", lat: 41.13, lon: 14.78, year: -275, label: "Pirus învins la Beneventum", html: "În 275 î.Hr. Roma îl bate pe Pirus, regele Epirului chemat de Tarent. În 272 cucerește și Tarentul: tot sudul Italiei îi aparține.", causes: ["sannitiche"] },
          { id: "messina", lat: 38.19, lon: 15.55, year: -264, label: "Începutul primului război punic", html: "În 264 î.Hr. Roma intervine la Messina împotriva Cartaginei: începe lupta pentru Sicilia.", causes: ["pirro"] },
          { id: "egadi", lat: 37.97, lon: 12.3, year: -241, label: "Bătălia de la Insulele Egate", html: "În 241 î.Hr. flota romană învinge: Sicilia devine prima provincie romană.", causes: ["messina"] },
          { id: "canne", lat: 41.3, lon: 16.13, year: -216, label: "Cannae", html: "În 216 î.Hr. Hannibal nimicește armata romană: cea mai grea înfrângere din istoria Romei, dar socii italici rămân loiali.", causes: ["egadi"] },
          { id: "zama", lat: 36.0, lon: 9.4, year: -202, label: "Zama", html: "În 202 î.Hr. Scipio îl învinge pe Hannibal în Africa: sfârșitul celui de-al doilea război punic.", causes: ["canne"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -146, label: "Distrugerea Cartaginei", html: "În 146 î.Hr., după al treilea război punic, Scipio Aemilianus distruge Cartagina. În același an Roma distruge Corintul.", causes: ["zama"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Monarhia și etruscii",
      html: `<p>După tradiție Roma a avut <b>șapte regi</b>: Romulus, Numa Pompilius, Tullus Hostilius, Ancus Marcius, Tarquinius Priscus, Servius Tullius, Tarquinius Superbus. Ultimii trei erau de origine <b>etruscă</b>. Regele era comandant militar, preot și judecător suprem, ales de o adunare și ajutat de <b>Senat</b> (consiliul bătrânilor, <i>patres</i>).</p>
<p><b>Etruscii</b>, popor din Etruria (Toscana și nordul Latiumului), organizați în cetăți-stat (lucumonii), erau metalurgiști, navigatori și agricultori pricepuți. Au dominat Roma în secolul al VI-lea î.Hr., aducând: <b>urbanizarea</b> (ziduri, lucrări hidraulice, templul lui Jupiter de pe Capitoliu), <b>alfabetul</b> (derivat din cel grecesc), simbolurile puterii (<b>fasciile</b> și <b>securea</b>, toga, scaunul curul), luptele de gladiatori și arta divinatorie a haruspicilor.</p>
<p>Regele <b>Servius Tullius</b> a împărțit populația în clase după <b>cens</b> (avere), nu doar după naștere; societatea romană era deja împărțită în <b>patricieni</b> (familii nobile, descendenți ai <i>patres</i>) și <b>plebei</b> (toți ceilalți, oameni liberi, adesea țărani și meșteșugari, fără acces la funcții), cu <b>clienții</b> legați de patricieni printr-un raport de credință (<i>clientela</i>). În <b>509 î.Hr.</b> patricienii l-au alungat pe ultimul rege, Tarquinius Superbus, acuzat de tiranie: s-a născut <b>republica</b> (<i>res publica</i>, «lucrul public»). De atunci titlul de rege a fost urât la Roma.</p>`
    },
    {
      type: "svg",
      title: "Instituțiile republicii romane",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="210" y="15" width="180" height="45" rx="8" fill="#ddd6fe" stroke="#5b21b6" stroke-width="2"/>
<text x="300" y="44" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SENAT (300 membri)</text>
<rect x="20" y="105" width="170" height="60" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="105" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">2 CONSULI</text>
<text x="105" y="152" font-size="14" text-anchor="middle" fill="#0f172a">aleși, durează 1 an</text>
<rect x="215" y="105" width="170" height="60" rx="8" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ALȚI MAGISTRAȚI</text>
<text x="300" y="152" font-size="14" text-anchor="middle" fill="#0f172a">pretori, chestori, edili, cenzori</text>
<rect x="410" y="105" width="170" height="60" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="2"/>
<text x="495" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">TRIBUNII PLEBEI</text>
<text x="495" y="152" font-size="14" text-anchor="middle" fill="#0f172a">au dreptul de veto</text>
<rect x="150" y="215" width="300" height="55" rx="8" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
<text x="300" y="240" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">COMIȚIILE (adunările poporului)</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">aleg magistrații și votează legile</text>
<path d="M300 60 L300 105 M300 165 L300 215 M105 165 L105 190 L300 215 M495 165 L495 190 L300 215" stroke="#374151" stroke-width="2" fill="none"/>
</svg>`,
      caption: "Schemă simplificată: puterea era împărțită între mai multe organe, ca să nu devină rege unul singur."
    },
    {
      type: "text",
      title: "3. Instituțiile republicii",
      html: `<p>Romanii, după experiența regilor, au construit un stat cu un sistem de <b>contrapuneri</b> (cum l-a definit mai târziu istoricul grec <b>Polibiu</b>, care vedea în el o «constituție mixtă»: monarhie, aristocrație și democrație laolaltă).</p>
<ul>
<li><b>Magistrații</b>: funcții alese, anuale, colegiale (cel puțin două persoane cu aceeași putere, care se puteau bloca reciproc) și negratuite. Cei doi <b>consuli</b> comandă armata și cetatea; <b>pretorii</b> administrează justiția; <b>chestorii</b> finanțele; <b>edilii</b> orașul și jocurile; <b>cenzorii</b> (din 5 în 5 ani) fac recensământul și veghează asupra moravurilor. În caz de urgență se numea un <b>dictator</b> pentru cel mult șase luni.</li>
<li><b>Senatul</b>: circa 300 de foști magistrați, pe viață; controlează politica externă, finanțele și religia. Era adevăratul centru al puterii.</li>
<li><b>Comițiile</b>: adunările poporului (<i>comițiile centuriate</i> pentru alegerea magistraților superiori și declararea războiului, <i>comițiile tribute</i> pentru legi), cu vot ponderat după avere.</li>
<li><b>Cursus honorum</b>: cariera politică ordonată: chestor → edil → pretor → consul.</li>
</ul>
<p>Era un sistem gândit ca să <b>evite tirania</b>, dar nu o democrație: voturile celor bogați contau mai mult, iar accesul la marile funcții a fost ani de zile rezervat patricienilor, apoi familiilor bogate. Femeile, sclavii și străinii erau excluși.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: origini și instituții",
      questions: [
        { type: "mc", q: "În ce an, după tradiție, a fost alungat ultimul rege al Romei?", options: ["509 î.Hr.", "753 î.Hr.", "264 î.Hr."], answer: 0, explain: "509 î.Hr., Tarquinius Superbus." },
        { type: "mc", q: "Câți consuli erau și cât timp rămâneau în funcție?", options: ["Doi, un an", "Unul, pe viață", "Trei, cinci ani"], answer: 0, explain: "Doi consuli anuali: se puteau controla reciproc." },
        { type: "tf", q: "Senatul roman era alcătuit din foști magistrați.", answer: true, explain: "În funcție pe viață." },
        { type: "text", q: "Cum se numește cariera politică ordonată a magistraților romani?", answer: ["cursus honorum", "cursus honorum-ul"], explain: "Cursus honorum." }
      ]
    },
    {
      type: "text",
      title: "4. Patricieni și plebei: lupta dintre ordine",
      html: `<p>În primele secole ale republicii, <b>plebeii</b> (care slujeau în armată, dar nu puteau ocupa funcții și nici să se căsătorească cu patriciene) au luptat pentru egalitate. A fost o confruntare lungă, dar aproape fără război civil, cu ajutorul <b>secesiunii</b>: refuzul de a lupta și retragerea din oraș.</p>
<ul>
<li><b>494 î.Hr.</b>: prima secesiune pe Muntele Sacru; plebeii obțin <b>tribunii plebei</b>, magistrați sacri și inviolabili, cu drept de <b>veto</b> împotriva deciziilor magistraților.</li>
<li><b>451-450 î.Hr.</b>: <b>Legea celor XII table</b>, prima culegere de legi scrise, expuse în Forum: legea devine cunoscută, nu mai este monopolul patricienilor.</li>
<li><b>445 î.Hr.</b> (Lex Canuleia): sunt permise căsătoriile dintre patricieni și plebei.</li>
<li><b>367 î.Hr.</b> (legile Licinia-Sextia): unul dintre cei doi consuli poate fi plebeu; limite pentru stăpânirea pământurilor publice.</li>
<li><b>287 î.Hr.</b> (Lex Hortensia): <b>plebiscitele</b> (deciziile adunării plebei) au valoare de lege pentru toți cetățenii.</li>
</ul>
<p>La sfârșit s-a născut o nouă clasă conducătoare, <b>nobilitas</b>, formată din patricieni și plebei bogați care ocupaseră funcții. Dar cei săraci au rămas săraci: problemele sociale (datorii, pământ) au revenit mai târziu cu frații Gracchi.</p>`
    },
    {
      type: "decision",
      title: "Roma, 494 î.Hr.: să se retragă plebea pe Muntele Sacru?",
      html: `<p>Ești un plebeu, soldat și țăran. Ești copleșit de datorii: creditorii patricieni pot pune în lanțuri pe cel care nu plătește. Războaiele îți iau timpul de la câmp. Un grup de plebei propune să <b>părăsească orașul</b> și să tăbărască pe Muntele Sacru: fără ei, Roma nu are armată ca să se apere de dușmanii vecini.</p>`,
      question: "Ce faci?",
      options: [
        { label: "Ascult și continui să slujesc: cetatea are nevoie de toți.", outcome: "Eviți conflictul, dar patricienii nu au niciun motiv să se schimbe, iar datoriile rămân. Situația se înrăutățește." },
        { label: "Particip la secesiune ca să cer garanții.", outcome: "Senatul, speriat, trimite un sol (Menenius Agrippa, care spune apologul trupului și al mădularelor) și acordă tribunii plebei. O revoltă fără violență obține o cucerire fundamentală." },
        { label: "Cer unui general faimos să preia puterea și să-i pedepsească pe patricieni.", outcome: "Riști să găsești un tiran: chiar pericolul pe care republica voia să-l evite." }
      ],
      answer: 1,
      explain: "Plebea a ales <b>secesiunea</b>, o formă de protest fără arme. Senatul a cedat: s-au născut <b>tribunii plebei</b>. Istoria romană arată că și un grup lipsit de putere formală poate obține drepturi dacă are o armă sigură: greva propriei forțe militare."
    },
    {
      type: "text",
      title: "5. Cucerirea Italiei",
      html: `<p>Între secolele al V-lea și al III-lea î.Hr. Roma a trecut de la un orășel din Latium la stăpâna peninsulei:</p>
<ul>
<li><b>Latium și Etruria</b>: după ani de războaie împotriva ecvilor, volscilor și a vecinei Veii (cucerită în <b>396 î.Hr.</b> de Camillus). În <b>390 î.Hr.</b> galii lui Brennus au jefuit Roma (dar nu Capitoliul, salvat de gâște, după legendă).</li>
<li><b>Războaiele samnite</b> (343-290 î.Hr.): împotriva samniților din Apenini. În 321 î.Hr. armata romană a suferit umilința de la <b>Furcile Caudine</b>. Roma a câștigat învățând: a înlocuit falanga cu <b>legiunea manipulară</b>, mai flexibilă.</li>
<li><b>Războiul latin</b> (340-338 î.Hr.): Roma a desființat Liga latină și a anexat cetățile.</li>
<li><b>Pirus și Tarent</b> (280-275 î.Hr.): Tarentul îl cheamă pe regele Epirului, <b>Pirus</b>, care învinge la Heraclea și Asculum, dar cu pierderi foarte grele («victorie à la Pirus»), apoi este învins la Beneventum (275 î.Hr.). În 272 Roma ia Tarentul: tot sudul Italiei îi aparține.</li>
</ul>
<p><b>Cum a guvernat Italia?</b> Cu un sistem flexibil: nu o singură regulă, ci înțelegeri diferite pentru fiecare popor.</p>
<ul>
<li><b>Cetățenie</b> deplină sau <b>fără drept de vot</b> pentru unele cetăți apropiate;</li>
<li><b>Aliați</b> (<i>socii</i>) care își păstrau autonomia internă, dar trebuiau să furnizeze soldați;</li>
<li><b>Colonii</b> romane și latine în poziții strategice;</li>
<li><b>Drumuri</b> (via Appia din 312 î.Hr.) pentru deplasarea rapidă a legiunilor.</li>
</ul>
<p>Strategia «<b>divide et impera</b>» (desparte și stăpânește): îi răsplătea pe cei loiali, îi pedepsea pe răsculați. A oferit și o perspectivă: socii puteau năzui la cetățenie. Așa Roma a avut mereu noi recruți pentru războaie.</p>`
    },
    {
      type: "text",
      title: "6. Roma și Cartagina: războaiele punice",
      html: `<p>Cartagina, colonie feniciană (814 î.Hr.), era puterea maritimă și comercială a Mediteranei occidentale, cu vestul Siciliei, Sardinia și sudul Spaniei. Roma, stăpâna Italiei, s-a trezit vecină cu ea la strâmtoarea Messina. A fost o luptă de peste un secol.</p>
<ul>
<li><b>Primul război punic</b> (264-241 î.Hr.): provocat de intervenția de la Messina. Roma, fără flotă, a construit una, copiind navele cartagineze și folosind <b>corvusul</b> (pasarelă cu cârlig pentru abordaj). Victorii navale la Mylae (260) și la <b>Insulele Egate</b> (241 î.Hr.). Cartagina a cedat <b>Sicilia</b>, prima provincie romană; apoi și Sardinia și Corsica (238 î.Hr.).</li>
<li><b>Al doilea război punic</b> (218-201 î.Hr.): <b>Hannibal</b>, tânăr general cartaginez, pornește din Spania, trece Alpii cu 37 de elefanți și circa 26.000 de oameni. Învinge la Ticinus și la Trebia (218), la <b>Trasimeno</b> (217) și la <b>Cannae</b> (216 î.Hr.), unde înfrânge o armată romană dublă față de a lui, încercuind-o (circa 50.000 de romani morți). Dar cea mai mare parte a aliaților italici rămâne loială Romei. <b>Fabius Maximus</b>, «Cunctator» (Temporizatorul), îl uzează pe Hannibal evitând marile bătălii. <b>Scipio</b> mută războiul în Africa și îl învinge pe Hannibal la <b>Zama</b> (202 î.Hr.), câștigându-și porecla de «Africanul». Cartagina pierde flota, coloniile și trebuie să plătească o despăgubire uriașă.</li>
<li><b>Al treilea război punic</b> (149-146 î.Hr.): <b>Cato Cenzorul</b> încheia orice discurs cu «Carthago delenda est» («Cartagina trebuie distrusă»). Roma asediază și <b>distruge Cartagina</b> (146 î.Hr.), sub <b>Scipio Aemilianus</b>. Teritoriul devine provincia Africa.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: de ce nu a învins Hannibal?",
      html: `<p>Hannibal a câștigat aproape toate bătăliile, și totuși a pierdut războiul. De ce? Încearcă să raționezi ca un istoric:</p>
<ol>
<li><b>Aliații</b>: spera că aliații italici se vor răscula împotriva Romei: aproape toți au rămas loiali, pentru că Roma le garanta avantaje și protecție.</li>
<li><b>Aprovizionarea</b>: trăia «din teritoriu», fără o bază sigură, în timp ce Roma avea resurse de oameni aproape nelimitate.</li>
<li><b>Marea</b>: Roma controla marea și putea muta trupe în Spania și în Africa.</li>
<li><b>Strategia</b>: contraatacul lui Scipio în Africa l-a obligat pe Hannibal să se întoarcă la Cartagina.</li>
</ol>
<p>Lecție: nu este de ajuns să câștigi bătălii, este nevoie de o <b>structură politică și militară</b> capabilă să reziste înfrângerilor. Roma avea una, datorită sistemului de alianțe.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: cum citim harta unui drum roman",
      html: `<p>Drumurile consulare legau Roma de provincii: <b>via Appia</b> (312 î.Hr.) ajungea până la Brundisium, via Aurelia de-a lungul coastei Mării Tireniene, via Flaminia spre Adriatica, via Aemilia (187 î.Hr.) în câmpia Padului. Construite cu straturi de pietriș, nisip și plăci de bazalt, aveau <b>borne miliare</b> care indicau distanța de la Roma. Multe drumuri moderne urmează și azi acel traseu: SS 1 Aurelia, Appia, Flaminia. Verifică pe harta zonei tale: există nume de drumuri romane lângă tine?</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cincinnatus, dictatorul-țăran",
      html: `<p>În <b>458 î.Hr.</b> Roma era asediată de ecvi. Senatul l-a chemat ca dictator pe <b>Lucius Quinctius Cincinnatus</b>, fost consul care își lucra micul câmp. L-au găsit cu plugul în mână. Cincinnatus i-a învins pe dușmani în șaisprezece zile, apoi a renunțat la funcție și s-a întors la câmp. Pentru romani era modelul cetățeanului virtuos care folosește puterea doar ca să slujească statul. George Washington a fost numit «Cincinnatus al Americii» pentru că a lăsat comanda după războiul de independență.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Gâștele de pe Capitoliu",
      html: `<p>În 390 î.Hr. galii lui Brennus erau pe cale să-i surprindă noaptea pe romanii refugiați pe Capitoliu, dar gâștele sacre ale Iunonei, trezite de zgomot, au gâgâit. Consulul Manlius s-a trezit și a respins asaltul. După răscumpărare, după tradiție, Brennus și-a aruncat sabia pe talerul balanței cu aur: «Vai de cei învinși» (<i>Vae victis</i>). Cât este istorie și cât legendă? Galii au jefuit într-adevăr Roma în jurul acelui an, iar amintirea acelei catastrofe i-a marcat mult timp pe romani.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege Roma republicană",
      intro: "Un sistem politic complex, o cucerire treptată: iată câteva analogii.",
      tabs: [
        {
          label: "🎭 O echipă fără căpitan",
          html: `<p>Imaginează-ți o echipă de fotbal cu <b>doi căpitani</b> aleși în fiecare an, care se pot bloca reciproc, și cu un <b>consiliu de foști căpitani</b> (Senatul) care sfătuiește și hotărăște în chestiunile cele mai importante. În fiecare sezon se schimbă: nimeni nu rămâne căpitan prea mult. Suporterii, adică adunările, votează căpitanii și regulile.</p>
<p>De ce? Ca să nu devină cineva <b>tiran</b>. Romanii aveau o groază aproape religioasă de monarhie, după experiența lui Tarquinius. Sistemul a funcționat cât timp Roma a fost mică: cu imperiul și cu generali prea puternici a intrat în criză (vom vedea mai departe).</p>`
        },
        {
          label: "🔗 Sistemul de alianțe",
          html: `<p>Forța Romei nu era doar armata ei, ci <b>rețeaua de aliați</b>:</p>
<ul>
<li>Cetățeni romani (chiar și fără drept de vot): plătesc impozite, dau soldați.</li>
<li>Latinii: drepturi private asemănătoare cu cele ale romanilor, furnizori de trupe.</li>
<li>Socii italici: autonomie locală, dar soldați pentru Roma.</li>
</ul>
<p>Fiecare aliat era legat direct de Roma, nu de ceilalți aliați: o rază de roată, nu o ligă. În schimb exista protecție, pradă și posibilitatea de a obține cetățenia. În al doilea război punic, după Cannae, această rețea a rezistat și a făcut diferența.</p>`
        },
        {
          label: "🗺️ Rotește globul",
          html: `<p>Rotește globul și urmărește războaiele punice.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Roma", color: "#ef4444" },
              { lat: 36.85, lon: 10.32, label: "Cartagina", color: "#7c3aed" },
              { lat: 37.97, lon: 12.3, label: "Insulele Egate", color: "#f97316" },
              { lat: 37.88, lon: -1.13, label: "Cartagena (Spania)", color: "#7c3aed" },
              { lat: 45.0, lon: 9.7, label: "Trebia", color: "#f97316" },
              { lat: 41.3, lon: 16.13, label: "Cannae", color: "#f97316" },
              { lat: 36.0, lon: 9.4, label: "Zama", color: "#f97316" }
            ],
            routes: [{ points: [3, 4, 5], color: "#7c3aed" }, { points: [0, 6], color: "#ef4444" }]
          }
        },
        {
          label: "📅 Axa timpului",
          html: `<p>Parcurge etapele fundamentale ale Romei.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -753, label: "Întemeierea (tradiție)", icon: "🐺" },
              { year: -509, label: "Alungarea regilor", icon: "👑" },
              { year: -494, label: "Secesiunea și tribunii", icon: "✊" },
              { year: -450, label: "XII table", icon: "📜" },
              { year: -396, label: "Cucerirea Veiilor", icon: "🏹" },
              { year: -312, label: "Via Appia", icon: "🛣️" },
              { year: -264, label: "Primul război punic", icon: "⚓" },
              { year: -216, label: "Cannae", icon: "🐘" },
              { year: -202, label: "Zama", icon: "🛡️" },
              { year: -146, label: "Sfârșitul Cartaginei", icon: "🔥" }
            ]
          }
        },
        {
          label: "🃏 Cartonașe de recapitulare",
          html: `<p>Întoarce cartonașele pentru a recapitula.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Patricieni / plebei", back: "Familii nobile cu toate drepturile / popor fără acces la funcții (la început)" },
              { front: "Tribunul plebei", back: "Magistrat inviolabil cu drept de veto (494 î.Hr.)" },
              { front: "XII table", back: "Primele legi scrise ale Romei (451-450 î.Hr.)" },
              { front: "Socii", back: "Aliați italici care furnizau soldați Romei" },
              { front: "Cannae", back: "216 î.Hr.: cea mai grea înfrângere romană, de la Hannibal" },
              { front: "Zama", back: "202 î.Hr.: Scipio îl învinge pe Hannibal" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de ce a învins Roma",
      nodes: [
        { id: "posizione", label: "Poziție și resurse", x: 50, y: 6, color: "#16a34a", html: "Vad pe Tibru, câmpie fertilă, coline ușor de apărat.", why: "O poziție centrală în peninsulă a permis controlul drumurilor de uscat și de mare. Populația latină numeroasă a furnizat oameni pentru legiuni." },
        { id: "istituzioni", label: "Instituții mixte", x: 20, y: 30, color: "#7c3aed", html: "Consuli, Senat, comiții, tribuni.", why: "Contrapunerile au evitat atât tirania, cât și anarhia. Deciziile Senatului au dat continuitate politicii externe, chiar și cu magistrați anuali." },
        { id: "lotta", label: "Lupta dintre ordine", x: 80, y: 30, color: "#ef4444", html: "De la tribuni (494 î.Hr.) la Lex Hortensia (287 î.Hr.).", why: "Plebeii, care luptau în armată, au obținut drepturi în schimbul serviciului lor: așa s-a evitat un război civil." },
        { id: "esercito", label: "Armată de cetățeni", x: 15, y: 58, color: "#f97316", html: "Legiune manipulară, disciplină, drumuri.", why: "Cetățenii-soldați își apărau propriile câmpuri: erau motivați. Legiunea, flexibilă, s-a adaptat terenurilor și dușmanilor." },
        { id: "alleanze", label: "Sistemul de alianțe", x: 50, y: 58, color: "#0ea5e9", html: "Cetățenie, socii, colonii.", why: "Roma le oferea învinșilor un statut și speranța unei cetățenii depline: așa loialitatea lor a rămas solidă chiar și după Cannae." },
        { id: "mare", label: "Putere navală", x: 85, y: 58, color: "#eab308", html: "Flota construită în primul război punic.", why: "Roma a învățat de la adversar: ca să învingă Cartagina a trebuit să devină putere maritimă." },
        { id: "conquista", label: "Dominația Mediteranei", x: 50, y: 92, color: "#334155", html: "Sicilia, Spania, Africa, Macedonia, Grecia.", why: "După Cartagina nicio putere nu mai putea concura cu Roma: în secolul al II-lea î.Hr. a cucerit Mediterana și a trebuit să înfrunte noi probleme interne." }
      ],
      edges: [
        ["posizione", "esercito", "alimentează"],
        ["istituzioni", "lotta", "evoluează prin"],
        ["lotta", "esercito", "motivează"],
        ["esercito", "alleanze", "se întemeiază pe"],
        ["alleanze", "conquista", "permit"],
        ["mare", "conquista", "deschide"],
        ["istituzioni", "alleanze", "garantează"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: războaiele punice",
      questions: [
        { type: "mc", q: "Cine l-a învins pe Hannibal la Zama?", options: ["Scipio", "Fabius Maximus", "Pirus"], answer: 0, explain: "Scipio, numit apoi Africanul." },
        { type: "tf", q: "După bătălia de la Cannae aliații italici au abandonat în masă Roma.", answer: false, explain: "Cei mai mulți au rămas loiali." },
        { type: "text", q: "Cum se numește prima provincie romană, cucerită prin primul război punic?", answer: ["sicilia", "provincia sicilia"], explain: "Sicilia." },
        { type: "order", q: "Pune în ordine.", items: ["Primul război punic", "Cannae", "Zama", "Distrugerea Cartaginei"], explain: "264, 216, 202, 146 î.Hr." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Roma: întemeiere tradițională 753 î.Hr.; șapte regi; ultimii trei etrusci; alungarea regilor în 509 î.Hr. → <b>republica</b>.</li>
<li>Instituții: <b>consuli</b> (2, anuali), <b>Senat</b>, <b>comiții</b>, magistrați, <b>tribunii plebei</b>.</li>
<li>Lupta patricieni-plebei: tribuni (494), XII table (450), Licinia-Sextia (367), Lex Hortensia (287).</li>
<li>Cucerirea Italiei: Veii, samniții, Pirus (275), Tarent (272); aliați și colonii.</li>
<li>Războaiele punice (264-146 î.Hr.): Sicilia, Hannibal (Cannae 216), Zama 202, distrugerea Cartaginei 146.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Res publica", d: "«Lucrul public»: republica romană." },
    { t: "Patricieni", d: "Familii nobile care în primele secole dețineau funcțiile." },
    { t: "Plebei", d: "Cetățeni nenobili, la început excluși din funcții." },
    { t: "Consul", d: "Unul dintre cei doi magistrați supremi, în funcție un an." },
    { t: "Senat", d: "Consiliu de foști magistrați, centrul puterii." },
    { t: "Tribunul plebei", d: "Magistrat care îi apăra pe plebei prin dreptul de veto." },
    { t: "Dictator", d: "Magistrat cu puteri depline pentru șase luni în caz de urgență." },
    { t: "Socii", d: "Aliații italici ai Romei." },
    { t: "Provincie", d: "Teritoriu din afara Italiei guvernat de un magistrat roman." },
    { t: "Legiune", d: "Unitatea fundamentală a armatei romane." },
    { t: "Carthago delenda est", d: "«Cartagina trebuie distrusă»: deviza lui Cato." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce eveniment marchează începutul republicii romane?", options: ["Alungarea lui Tarquinius Superbus (509 î.Hr.)", "Întemeierea Romei", "Distrugerea Cartaginei"], answer: 0, explain: "După tradiție, 509 î.Hr." },
      { type: "mc", q: "Ce popor a dominat Roma în secolul al VI-lea î.Hr.?", options: ["Etruscii", "Samniții", "Galii"], answer: 0, explain: "Ultimii trei regi erau etrusci." },
      { type: "tf", q: "Consulii erau doi și rămâneau în funcție un an.", answer: true, explain: "Se puteau bloca reciproc." },
      { type: "text", q: "Cum se numește magistratul plebeilor înzestrat cu drept de veto?", answer: ["tribunul plebei", "tribun al plebei", "tribun", "tribunul"], explain: "Tribunul plebei." },
      { type: "mc", q: "Ce sunt legile celor XII table?", options: ["Primele legi scrise romane", "Un tratat cu Cartagina", "O reformă militară"], answer: 0, explain: "Circa 450 î.Hr." },
      { type: "mc", q: "Ce rege, chemat de Tarent, a încercat să cucerească sudul Italiei?", options: ["Pirus", "Hannibal", "Brennus"], answer: 0, explain: "Pirus, regele Epirului." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Alungarea regilor", "XII table", "Cucerirea Veiilor", "Primul război punic", "Zama"], explain: "509, 450, 396, 264, 202 î.Hr." },
      { type: "mc", q: "De ce nu a reușit Hannibal să învingă Roma deși a câștigat la Cannae?", options: ["Aliații italici au rămas loiali Romei", "Roma nu avea soldați", "Cartagina nu voia războiul"], answer: 0, explain: "Rețeaua de alianțe romană a rezistat." },
      { type: "num", q: "În ce an î.Hr. a fost distrusă Cartagina?", answer: 146, tol: 0, explain: "146 î.Hr." },
      { type: "tf", q: "Roma a cucerit Italia impunând tuturor popoarelor aceeași condiție juridică.", answer: false, explain: "A folosit condiții diferite: cetățenie, alianță, colonii." },
      { type: "mc", q: "Care a fost prima provincie romană?", options: ["Sicilia", "Egiptul", "Grecia"], answer: 0, explain: "După primul război punic." }
    ]
  }
});

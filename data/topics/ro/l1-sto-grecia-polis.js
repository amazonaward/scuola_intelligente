TOPIC('ro', {
  id: "l1-sto-grecia-polis",
  title: "Grecia cetăților",
  intro: "Un teritoriu de munți și insule, fără fluvii mari și fără câmpii întinse, unde nimeni nu a reușit vreodată să unească totul sub un singur rege. Și totuși de aici s-au născut <b>democrația</b>, filosofia, teatrul, Jocurile Olimpice. Cum? Printr-o invenție pur grecească: <b>polis-ul</b>, un oraș care este în același timp stat și comunitate de cetățeni. În această lecție pornim de la civilizațiile epocii bronzului, minoicii și micenienii, și ajungem la cele două modele opuse, <b>Sparta</b> și <b>Atena</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Teritoriul Greciei și de ce este important",
      html: `<p>Grecia este alcătuită din <b>peninsule, insule și munți</b>: aproximativ 80% din teritoriu este muntos, iar câmpiile bune pentru agricultură sunt mici și despărțite între ele. Asta are trei efecte hotărâtoare:</p>
<ul>
<li><b>Fragmentare politică</b>: fiecare vale sau insulă dezvoltă o comunitate autonomă; este greu să le unești într-un singur regat.</li>
<li><b>Sărăcie de pământ</b>: recoltele sunt limitate (puțin grâu, mult ulei de măsline și vin): hrana și comerțul se caută în altă parte.</li>
<li><b>Vocație maritimă</b>: niciun punct din Grecia nu este departe de mare; Mediterana este drumul. Cum spunea Platon, grecii trăiesc «în jurul mării ca broaștele în jurul unei bălți».</li>
</ul>
<p>Grecii se numeau pe ei înșiși <b>eleni</b>, iar țara lor <b>Elada</b>; se simțeau un singur popor prin limbă, religie (aceiași zei ai Olimpului), serbări panelenice (<b>Jocurile Olimpice</b>, din <b>776 î.Hr.</b>) și sanctuare (Delfi, cu oracolul lui Apollo). Cine nu vorbea grecește era <i>bárbaros</i> (barbar).</p>`
    },
    {
      type: "text",
      title: "2. Minoicii și micenienii: Grecia bronzului",
      html: `<p><b>Civilizația minoică</b> (Creta, circa 2000-1450 î.Hr.): și-a luat numele de la mitologicul rege Minos. <b>Palate</b> bogate, precum cel de la <b>Cnossos</b>, fără ziduri de apărare (semn de putere pe mare), fresce vii cu delfini, tauri, tineri acrobați. Scriau cu <b>Linearul A</b>, încă nedescifrat. Puterea lor a scăzut după erupția vulcanului din <b>Thera</b> (Santorini, circa 1600 î.Hr.) și după cucerirea de către micenieni.</p>
<p><b>Civilizația miceniană</b> (Grecia continentală, circa 1600-1100 î.Hr.): își ia numele de la <b>Micene</b>, în Peloponez. Erau <b>greci</b> de limbă indo-europeană, veniți din nord în mileniul al II-lea î.Hr. Construiau <b>citadele fortificate</b> (cu blocuri uriașe, «zidurile ciclopice», și Poarta Leilor), morminte cu cupolă (tholos) cu comori de aur (masca lui «Agamemnon»). Scriau în <b>Linearul B</b>, descifrat în 1952 de <b>Michael Ventris</b>: este greaca veche și ne oferă inventare ale palatelor. La sfârșitul mileniului al II-lea î.Hr. (circa 1200-1100) civilizația miceniană s-a prăbușit, în contextul crizei generale a Mediteranei (invazii, cutremure, războaie).</p>
<p>Amintirea acelei epoci supraviețuiește în poemele lui <b>Homer</b> (<i>Iliada</i> și <i>Odiseea</i>, scrise probabil în secolul al VIII-lea î.Hr.): războiul Troiei (circa 1200 î.Hr.), regele Agamemnon, Ahile, Ulise. Sunt povestiri literare, nu cronici, dar conțin amintiri adevărate.</p>`
    },
    {
      type: "3d",
      title: "Hartă 3D: de la Grecia miceniană la colonii",
      scene: "spacetime",
      caption: "Baza este harta Greciei și a Mării Egee, înălțimea este timpul (1700-500 î.Hr.). Atinge evenimentele: săgețile leagă cauzele de efecte.",
      options: {
        lat: [34, 41],
        lon: [20, 30],
        years: [-1700, -500],
        places: [
          { lat: 37.97, lon: 23.72, label: "Atena" },
          { lat: 37.08, lon: 22.43, label: "Sparta" },
          { lat: 37.73, lon: 22.76, label: "Micene" },
          { lat: 35.3, lon: 25.16, label: "Cnossos" }
        ],
        events: [
          { id: "cnosso", lat: 35.3, lon: 25.16, year: -1700, label: "Palatul de la Cnossos", html: "Marele palat din Creta este centrul administrativ și religios al civilizației minoice.", causes: [] },
          { id: "micene", lat: 37.73, lon: 22.76, year: -1500, label: "Micene", html: "Micenienii, greci continentali, domină Peloponezul și cuceresc Creta în jurul anului 1450 î.Hr.", causes: ["cnosso"] },
          { id: "crollo", lat: 37.73, lon: 22.76, year: -1150, label: "Prăbușirea palatelor", html: "Circa 1200-1100 î.Hr. palatele miceniene sunt distruse. Urmează secole de declin: «Evul Mediu elen» sau epoca întunecată.", causes: ["micene"] },
          { id: "olimpiadi", lat: 37.64, lon: 21.63, year: -776, label: "Primele Jocuri Olimpice", html: "În 776 î.Hr. (dată tradițională) au loc la Olimpia primele jocuri panelenice în cinstea lui Zeus: erau folosite pentru a data evenimentele.", causes: ["crollo"] },
          { id: "polis", lat: 37.97, lon: 23.72, year: -800, label: "Nașterea cetăților", html: "Către secolul al VIII-lea î.Hr. satele se unesc în cetăți-stat (poleis), cu acropolă, agora și adunarea cetățenilor.", causes: ["crollo"] },
          { id: "cuma", lat: 40.85, lon: 14.05, year: -750, label: "Cumae: prima colonie din Italia", html: "Către 750 î.Hr. debarcă în Campania coloniști din Calcis și Eretria: începe Magna Graecia.", causes: ["polis"] },
          { id: "siracusa", lat: 37.07, lon: 15.29, year: -733, label: "Siracuza", html: "În 733 î.Hr. coloniști din Corint întemeiază Siracuza, care va deveni cea mai puternică cetate greacă din Occident.", causes: ["polis"] },
          { id: "solone", lat: 37.97, lon: 23.72, year: -594, label: "Reformele lui Solon", html: "La Atena, Solon anulează datoriile și sclavia pentru datorii, împarte cetățenii după avere și dă tuturor acces la adunare.", causes: ["polis"] },
          { id: "clistene", lat: 37.97, lon: 23.72, year: -508, label: "Reformele lui Clistene", html: "În 508-507 î.Hr. Clistene reorganizează cetățenii în 10 triburi amestecate și creează Consiliul celor 500 (Boule): este începutul democrației ateniene.", causes: ["solone"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Ce este un polis",
      html: `<p>După prăbușirea lumii miceniene, între secolele al IX-lea și al VIII-lea î.Hr. satele grecești se unesc în <b>poleis</b> (singular <i>polis</i>): comunități autonome, cu legi, armată, monedă și zei protectori proprii. Nu este pur și simplu un oraș: este un <b>stat</b> în miniatură.</p>
<ul>
<li><b>Acropola</b> («orașul de sus»): deal fortificat cu temple, adăpost în caz de atac.</li>
<li><b>Agora</b>: piața centrală pentru comerț și adunări; inima vieții publice.</li>
<li><b>Chora</b>: câmpia din jur, cu ogoarele cetățenilor.</li>
<li><b>Cetățenii</b>: doar bărbații adulți născuți din cetățeni participă la viața politică. Femeile, sclavii și străinii (<i>metecii</i>) sunt excluși.</li>
<li>Dimensiuni: de la câteva mii de locuitori la câteva zeci de mii (Atena și Siracuza erau cele mai mari). Așa încât toți puteau să se cunoască și să participe direct.</li>
</ul>
<p>Cetățile erau rivale și adesea în război, dar se simțeau părți ale aceleiași culturi. Formele de guvernare se schimbă în timp: <b>monarhie → aristocrație (oligarhie) → tiranie → democrație</b>. <b>Tiranul</b> este cel care ia puterea cu forța (adesea cu sprijinul celor săraci) și conduce în afara regulilor; cuvântul nu avea neapărat sensul negativ de astăzi.</p>`
    },
    {
      type: "svg",
      title: "Cum este alcătuit un polis",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect x="0" y="230" width="600" height="70" fill="#bfdbfe"/>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#1e3a8a">marea: port și comerț</text>
<path d="M200 220 L250 90 L350 90 L400 220 Z" fill="#d6d3d1" stroke="#44403c" stroke-width="3"/>
<rect x="265" y="55" width="70" height="35" fill="#fafaf9" stroke="#44403c" stroke-width="2"/>
<polygon points="260,55 300,30 340,55" fill="#fecaca" stroke="#7f1d1d" stroke-width="2"/>
<text x="300" y="75" font-size="14" text-anchor="middle" fill="#0f172a">templu</text>
<text x="300" y="130" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">ACROPOLA</text>
<rect x="215" y="150" width="170" height="60" fill="#fef9c3" stroke="#a16207" stroke-width="2"/>
<text x="300" y="185" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">AGORA</text>
<g fill="#fde68a" stroke="#92400e" stroke-width="2"><rect x="60" y="170" width="50" height="40"/><rect x="120" y="180" width="50" height="30"/><rect x="430" y="170" width="50" height="40"/><rect x="490" y="180" width="50" height="30"/></g>
<text x="115" y="160" font-size="14" text-anchor="middle" fill="#0f172a">case</text>
<text x="490" y="160" font-size="14" text-anchor="middle" fill="#0f172a">case</text>
<text x="85" y="40" font-size="14" fill="#14532d">câmpuri și sate (chora)</text>
<text x="400" y="40" font-size="14" fill="#14532d">câmpuri și sate (chora)</text>
</svg>`,
      caption: "Schema ideală a unui polis: acropola cu templele, agora în centru, case, câmpie și port."
    },
    {
      type: "quiz",
      title: "Mini-test: originile",
      questions: [
        { type: "mc", q: "Care scriere a micenienilor a fost descifrată în 1952?", options: ["Linearul A", "Linearul B", "Hieroglifele"], answer: 1, explain: "Linearul B, de către Michael Ventris: este greaca." },
        { type: "mc", q: "Ce era agora?", options: ["Piața centrală a polis-ului", "Dealul fortificat", "Un templu"], answer: 0, explain: "Piața comerțului și a adunărilor." },
        { type: "tf", q: "Grecia antică era un stat unit sub un singur rege.", answer: false, explain: "Era împărțită în numeroase cetăți independente." }
      ]
    },
    {
      type: "text",
      title: "4. Colonizarea greacă (secolele VIII-VI î.Hr.)",
      html: `<p>Între secolele al VIII-lea și al VI-lea î.Hr. multe cetăți au trimis grupuri de cetățeni să întemeieze <b>colonii</b> de-a lungul coastelor Mediteranei și ale Mării Negre. Fiecare colonie (<i>apoikia</i>, «casă îndepărtată») era un polis <b>independent</b>, legat de cetatea-mamă (<i>metropola</i>) prin legături religioase și afective.</p>
<p><b>De ce?</b></p>
<ul>
<li><b>Suprapopulare și lipsă de pământ</b>: fiii mai mici ai țăranilor nu aveau ogoare;</li>
<li><b>Comerț</b>: erau necesare porturi pentru metale și grâu;</li>
<li><b>Lupte politice</b>: cei învinși plecau adesea;</li>
<li><b>Spirit de aventură</b> și curiozitate.</li>
</ul>
<p>Înainte de plecare, coloniștii consultau <b>oracolul din Delfi</b>. Conducătorul expediției se numea <i>ecist</i>.</p>
<p><b>Unde?</b> În vest: <b>Magna Graecia</b> (sudul Italiei) și <b>Sicilia</b>: Cumae, Neapole, Tarent (de la Sparta, circa 706 î.Hr.), Sybaris, Crotona, Rhegion, Siracuza (de la Corint, 733 î.Hr.), Agrigent, Naxos. În Franța <b>Massalia</b> (Marsilia, circa 600 î.Hr.), în Spania Emporion; în est, la Marea Neagră și în Helespont (Bizanț, circa 660 î.Hr.).</p>
<p><b>Consecințe</b>: mai mult comerț și bogăție; apariția unei <b>clase de negustori</b> care cere putere; răspândirea culturii grecești (și a alfabetului) printre popoarele italice și întâlnirea cu etruscii și cu romanii; se naște sentimentul unei identități <b>grecești</b> comune în fața barbarilor.</p>`
    },
    {
      type: "text",
      title: "5. Sparta: statul-cazarmă",
      html: `<p><b>Sparta</b>, în câmpia Laconiei (Peloponez), a cucerit prin lungi războaie (secolele VIII-VII î.Hr.) vecina Messenie și i-a transformat pe locuitori în <b>iloți</b>, servi colectivi ai statului, care munceau pământul. Ca să-i țină supuși, grecii din Sparta au ales să devină un popor de soldați.</p>
<ul>
<li><b>Trei clase</b>: <b>spartiații</b> (cetățeni cu drepturi depline, puțini, războinici), <b>perieci</b> (liberi fără drepturi politice, meșteșugari și negustori) și <b>iloții</b>.</li>
<li><b>Guvernare mixtă</b>, atribuită legendarului <b>Licurg</b>: doi <b>regi</b> (diarhie) cu puteri mai ales militare; <b>gerusia</b>, consiliul a 28 de bătrâni de peste 60 de ani, plus cei doi regi; <b>apella</b>, adunarea tuturor spartiaților, care aproba sau respingea propunerile prin aclamații; cei cinci <b>efori</b>, magistrați aleși în fiecare an, care îi supravegheau pe regi.</li>
<li><b>Agoge</b> («educație»): la 7 ani băieții își părăseau familia ca să fie crescuți de stat: disciplină, foame, rezistență la durere, antrenament. Până la 30 de ani trăiau în cazarmă.</li>
<li><b>Femeile</b>: aveau mai multă libertate și respect decât în alte părți ale Greciei (activitate fizică, administrarea bunurilor), dar datoria lor era să nască războinici.</li>
<li>Sparta avea cea mai puternică <b>falangă</b>: soldați cu scut (<i>hoplon</i>) și lance, în rânduri strânse. În secolul al V-lea avea circa 8000 de spartiați.</li>
</ul>
<p>Sparta a rămas închisă și conservatoare, puțin înclinată spre artă; forța ei militară a făcut din ea conducătoarea <b>Ligii peloponeziace</b>.</p>`
    },
    {
      type: "text",
      title: "6. Atena: de la aristocrație la democrație",
      html: `<p><b>Atena</b>, în Attica, era mai mare și mai deschisă spre mare. Drumul ei politic a fost treptat, pas cu pas:</p>
<ul>
<li><b>Aristocrația</b>: puterea aparținea marilor proprietari (<i>eupatrizii</i>), care alegeau cei nouă <b>arhonți</b>. Micii țărani îndatorați riscau să devină sclavi.</li>
<li><b>Dracon</b> (621 î.Hr.): pune legile în scris: foarte aspre («draconice»), dar acum cunoscute de toți.</li>
<li><b>Solon</b> (594 î.Hr.): anulează datoriile (<i>seisachtheia</i>, «scuturarea poverilor») și interzice sclavia pentru datorii; împarte cetățenii în <b>patru clase după venit</b>: accesul la funcții depinde de avere și nu de naștere; înființează un consiliu de 400 și un tribunal popular.</li>
<li><b>Pisistrate</b> (561-527 î.Hr.): tiran popular, îi protejează pe țărani, construiește lucrări publice și serbări (Marile Dionisii).</li>
<li><b>Clistene</b> (508-507 î.Hr.): împarte populația în <b>10 triburi amestecate</b> (nemaifiind legate de familii nobile) și creează <b>Consiliul celor 500 (Boule)</b>, care pregătește legile. Introduce <b>ostracismul</b>: în fiecare an cetățenii pot vota scriind pe un ciob numele unui om periculos, care este exilat pentru 10 ani fără proces.</li>
</ul>
<p>Cu Clistene se naște <b>democrația</b> («puterea poporului»): deciziile cele mai importante revin <b>Eclesiei</b> (adunarea tuturor cetățenilor bărbați adulți, care se aduna pe dealul Pnyx), iar cea mai mare parte a funcțiilor este <b>atribuită prin tragere la sorți</b>.</p>`
    },
    {
      type: "widget",
      title: "Sparta sau Atena?",
      widget: "classify",
      options: {
        groups: ["🛡️ Sparta", "🏛️ Atena"],
        items: [
          ["Doi regi și cinci efori", 0],
          ["Adunarea tuturor cetățenilor (Eclesia)", 1],
          ["Agoge, educație militară de la 7 ani", 0],
          ["Ostracismul", 1],
          ["Iloți care muncesc pământul", 0],
          ["Reformele lui Solon și Clistene", 1],
          ["Gerusia de 28 de bătrâni", 0],
          ["Flotă comercială și militară puternică", 1]
        ]
      },
      caption: "Atinge o expresie, apoi cetatea potrivită."
    },
    {
      type: "decision",
      title: "Atena, 508 î.Hr.: cine trebuie să decidă?",
      html: `<p>După căderea tiranilor, Atena este sfâșiată de luptele dintre familiile nobile. Tu ești <b>Clistene</b>, un aristocrat care vrea să evite războiul civil și întoarcerea unui tiran. Aproape toate puterile sunt încă în mâinile câtorva familii. Ceilalți cetățeni, mai ales țăranii și meșteșugarii, cer să conteze mai mult.</p>`,
      question: "Ce soluție propui?",
      options: [
        { label: "Întăresc puterea marilor familii, ca să guverneze cu hotărâre.", outcome: "Familiile rămân în luptă, iar cetățenii excluși sprijină un nou tiran: riscul unui război civil rămâne mare." },
        { label: "Dau tuturor cetățenilor bărbați un loc în adunare și în consilii, reorganizând triburile.", outcome: "Cetățenii se simt responsabili pentru stat și îl apără: va fi forța Atenei în războaiele medice. Prețul: cea mai mare parte a populației (femei, sclavi, metecii) rămâne exclusă." },
        { label: "Încredințez totul unui rege care să conducă pentru toți.", outcome: "Se revine la monarhie, dar atenienii abandonaseră ideea cu secole înainte: ar fi o alegere împotriva tendinței vremii." }
      ],
      answer: 1,
      explain: "Clistene a ales calea <b>participării largi</b>: puterea a trecut de la aristocrația de naștere la ansamblul cetățenilor bărbați. A fost nașterea democrației ateniene, care va atinge apogeul cu Pericle."
    },
    {
      type: "example",
      title: "Exemplu practic: un cetățean atenian la lucru",
      html: `<p>Imaginează-ți că ești <b>Nicias</b>, un țăran atenian de 30 de ani. Ziua ta:</p>
<ol>
<li>Dimineața lucrezi grădina și măslinii, ajutat de un sclav.</li>
<li>Aproximativ o dată la zece zile mergi pe <b>Pnyx</b> la <b>adunare</b>: votezi prin ridicarea mâinii despre război, impozite, legi.</li>
<li>Dacă ești tras la sorți, ești timp de un an membru al <b>Consiliului (Boule)</b> sau <b>jurat</b> în tribunalele populare (cu o mică plată, ca să nu pierzi bani).</li>
<li>În caz de război ești <b>hoplit</b> și lupți cu scutul tău.</li>
</ol>
<p>Ești implicat direct în decizii, spre deosebire de azi, când alegem reprezentanți: democrația ateniană era <b>directă</b>. Dar soția ta, sclavii tăi și vecinul metec nu pot vota.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: numele formelor de guvernare",
      html: `<p>Cuvintele politice pe care le folosim astăzi sunt grecești:</p>
<ul>
<li><b>monarhie</b>: guvernarea unuia singur (<i>mónos</i> + <i>archía</i>);</li>
<li><b>aristocrație</b>: guvernarea celor mai buni (<i>áristoi</i>);</li>
<li><b>oligarhie</b>: guvernarea câtorva (<i>olígoi</i>);</li>
<li><b>democrație</b>: puterea poporului (<i>dêmos</i> + <i>krátos</i>);</li>
<li><b>tiranie</b>: puterea celui care a luat conducerea cu forța.</li>
</ul>
<p>Încearcă să clasifici astfel statul în care trăiești: cine decide? Câți cetățeni pot vota? Cum sunt aleși conducătorii? Aceleași întrebări puse de greci sunt valabile și astăzi.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cei 300 de la Termopile",
      html: `<p>În <b>480 î.Hr.</b> regele spartan <b>Leonida</b> a rezistat trei zile la trecătoarea Termopile cu 300 de spartiați și câteva mii de alți greci împotriva imensei armate persane. De fapt, aliații greci erau în jur de 7000; cei 300 de spartiați au fost nucleul grupului. Când a fost încercuit, Leonida a trimis înapoi cea mai mare parte a aliaților și a rămas să lupte cu oamenii săi până la moarte. În lecția următoare vom vedea contextul acestor războaie.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Votul cu ciobul",
      html: `<p>Numele «ostracism» vine de la <i>óstrakon</i>, ciobul de ceramică pe care cetățenii scriau numele celui de exilat. Arheologii au găsit mai mult de zece mii în agora Atenei. Unele, cu numele lui <b>Temistocle</b>, au fost pregătite dinainte de adversari politici, toate scrise de aceeași mână: o dovadă că și atunci se făcea propagandă electorală! După cei zece ani de exil, ostracizatul se putea întoarce și își recăpăta toate drepturile.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege Sparta și Atena",
      intro: "Două cetăți, două alegeri opuse. Iată câteva analogii ca să le ții minte.",
      tabs: [
        {
          label: "🏫 Două școli comparate",
          html: `<p>Imaginează-ți două școli cu reguli opuse.</p>
<ul>
<li><b>Școala Sparta</b>: disciplină de fier, uniformă, program militar, câțiva profesori decid totul, toți egali, fără artă. Funcționează în situații de urgență, mai puțin când e nevoie de schimbare.</li>
<li><b>Școala Atena</b>: adunarea clasei care discută și votează, toate materiile, sport, teatru, experimente. Mai multă încurcătură și lentoare, dar creativitate și inovație.</li>
</ul>
<p>Sparta a ales <b>siguranța și ordinea</b>, Atena <b>participarea și libertatea</b>. Niciuna nu era perfectă: ambele excludeau majoritatea (femei, sclavi, străini).</p>`
        },
        {
          label: "📊 Cine conduce?",
          html: `<table>
<tr><th></th><th>Sparta</th><th>Atena</th></tr>
<tr><td>Conducători</td><td>2 regi + 5 efori</td><td>9 arhonți, strategi, Boule</td></tr>
<tr><td>Adunarea</td><td>Apella (aclamații)</td><td>Eclesia (vot, dezbatere)</td></tr>
<tr><td>Economia</td><td>Agricolă, cu iloți</td><td>Comerț, meșteșuguri, flotă</td></tr>
<tr><td>Armata</td><td>Falanga spartiaților</td><td>Hopliți, apoi flota de trirem</td></tr>
<tr><td>Cultura</td><td>Disciplină și tăcere</td><td>Teatru, filosofie, artă</td></tr>
<tr><td>Excluși</td><td>Iloți, perieci, femei</td><td>Sclavi, metecii, femei</td></tr>
</table>`
        },
        {
          label: "🗺️ Rotește globul",
          html: `<p>Rotește globul: cetățile și coloniile grecești de la Marsilia la Marea Neagră.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Atena", color: "#2563eb" },
              { lat: 37.08, lon: 22.43, label: "Sparta", color: "#ef4444" },
              { lat: 37.07, lon: 15.29, label: "Siracuza", color: "#f97316" },
              { lat: 40.85, lon: 14.05, label: "Cumae", color: "#f97316" },
              { lat: 40.47, lon: 17.24, label: "Tarent", color: "#f97316" },
              { lat: 43.3, lon: 5.37, label: "Marsilia", color: "#f97316" },
              { lat: 41.01, lon: 28.98, label: "Bizanț", color: "#f97316" }
            ],
            routes: [{ points: [0, 2, 3], color: "#f97316" }, { points: [0, 6], color: "#f97316" }]
          }
        },
        {
          label: "📅 Axa timpului",
          html: `<p>Parcurge etapele principale, de la micenieni la Clistene.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -2000, label: "Palatele minoice", icon: "🐂" },
              { year: -1600, label: "Micene", icon: "🛡️" },
              { year: -1200, label: "Războiul Troiei (tradiție)", icon: "🐴" },
              { year: -776, label: "Primele Jocuri Olimpice", icon: "🥇" },
              { year: -733, label: "Siracuza", icon: "⚓" },
              { year: -621, label: "Dracon", icon: "📜" },
              { year: -594, label: "Solon", icon: "⚖️" },
              { year: -508, label: "Clistene", icon: "🗳️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta Greciei cetăților",
      nodes: [
        { id: "geo", label: "Teritoriu fragmentat", x: 50, y: 6, color: "#16a34a", html: "Munți, insule, câmpii mici.", why: "Geografia împiedică unificarea: fiecare comunitate se organizează singură și învață să se conducă. Marea îndeamnă la comerț și colonizare." },
        { id: "polis", label: "Polis", x: 20, y: 32, color: "#2563eb", html: "Cetate-stat cu acropolă, agora și cetățeni.", why: "Comunități mici în care cetățenii se cunosc și participă: este terenul pe care se naște ideea de cetățenie." },
        { id: "colonie", label: "Colonizare", x: 82, y: 32, color: "#f97316", html: "Colonii de la Marea Neagră până în Spania.", why: "Puțin pământ, prea mulți locuitori și dorința de comerț i-au împins să întemeieze noi cetăți. Cultura greacă se răspândește, se naște ideea de a fi eleni în fața barbarilor." },
        { id: "sparta", label: "Sparta", x: 20, y: 62, color: "#ef4444", html: "Oligarhie militară cu iloți.", why: "Având de controlat un număr enorm de iloți, Sparta a ales disciplina militară permanentă; asta a făcut-o puternică, dar rigidă și puțin creativă." },
        { id: "atene", label: "Atena", x: 80, y: 62, color: "#7c3aed", html: "De la aristocrație la democrație (Solon, Clistene).", why: "Tensiunile dintre bogați și săraci (datorii, sclavie) au făcut necesare reformele. Extinderea drepturilor a întărit cetatea și a dat cetățenilor o identitate comună." },
        { id: "democrazia", label: "Democrația", x: 50, y: 85, color: "#0ea5e9", html: "Puterea demosului: adunare, tragere la sorți, ostracism.", why: "Este directă și rezervată puținilor (bărbați adulți născuți atenieni), dar este prima dată când se încearcă să se lase comunitatea să decidă. Va influența democrațiile moderne." },
        { id: "panellenismo", label: "Identitate greacă", x: 50, y: 50, color: "#eab308", html: "Limbă, zei, Jocuri Olimpice, oracolul din Delfi.", why: "Deși divizate, cetățile împărtășeau o cultură: asta le-a unit ca să reziste perșilor." }
      ],
      edges: [
        ["geo", "polis", "dă naștere"],
        ["geo", "colonie", "împinge spre"],
        ["polis", "sparta", "model"],
        ["polis", "atene", "model"],
        ["atene", "democrazia", "dezvoltă"],
        ["colonie", "panellenismo", "întăresc"],
        ["panellenismo", "democrazia", "împărtășește valori cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: Sparta și Atena",
      questions: [
        { type: "mc", q: "Cum se numeau servii Spartei?", options: ["Iloți", "Meteci", "Efori"], answer: 0, explain: "Iloții munceau pământul pentru spartiați." },
        { type: "mc", q: "Cine a întemeiat, după tradiție, legile Spartei?", options: ["Licurg", "Solon", "Clistene"], answer: 0, explain: "Legendarul Licurg." },
        { type: "tf", q: "Solon a interzis sclavia pentru datorii.", answer: true, explain: "A anulat datoriile și i-a eliberat pe cei reduși la sclavie." },
        { type: "mc", q: "Ce era ostracismul?", options: ["Exil de 10 ani votat pe un ciob", "O pedeapsă cu moartea", "Un tip de impozit"], answer: 0, explain: "Se scria pe un ciob numele celui pe care se voia să fie exilat." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Minoici (Creta, Linearul A) și micenieni (Micene, Linearul B, prăbușire circa 1200-1100 î.Hr.).</li>
<li><b>Polis</b>: cetate-stat cu acropolă, agora, cetățeni bărbați adulți; niciodată unificate.</li>
<li><b>Colonizarea</b> (secolele VIII-VI î.Hr.): Magna Graecia, Siracuza (733), Marsilia; cauze: pământ puțin și comerț.</li>
<li><b>Sparta</b>: oligarhie militară, doi regi, efori, iloți, agoge. <b>Atena</b>: de la aristocrație la democrație cu Dracon, Solon, Pisistrate, Clistene (508 î.Hr.).</li>
<li>Jocurile Olimpice din 776 î.Hr.; oracolul din Delfi; limbă și zei comuni.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Polis", d: "Cetate-stat greacă, comunitate autonomă de cetățeni." },
    { t: "Acropola", d: "Partea înaltă și fortificată a polis-ului, cu temple." },
    { t: "Agora", d: "Piața centrală a polis-ului, loc de comerț și de adunare." },
    { t: "Magna Graecia", d: "Coloniile grecești din sudul Italiei." },
    { t: "Ilot", d: "Servul statului spartan." },
    { t: "Efor", d: "Magistrat spartan care îi controla pe regi." },
    { t: "Agoge", d: "Educația militară a tinerilor spartani." },
    { t: "Eclesia", d: "Adunarea cetățenilor atenieni." },
    { t: "Ostracism", d: "Exil de zece ani votat de adunare." },
    { t: "Metec", d: "Străin care locuia la Atena, fără drepturi politice." },
    { t: "Tiran", d: "Cel care ia puterea cu forța, în afara regulilor." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "De ce nu s-a unificat Grecia într-un singur stat?", options: ["Din cauza teritoriului fragmentat între munți și insule", "Pentru că lipsea apa", "Pentru că nu avea zei"], answer: 0, explain: "Teritoriul a favorizat comunitățile autonome." },
      { type: "mc", q: "Cine a descifrat Linearul B?", options: ["Michael Ventris", "Howard Carter", "Champollion"], answer: 0, explain: "În 1952; a descoperit că este greaca veche." },
      { type: "tf", q: "O colonie greacă era supusă patriei-mamă ca o provincie.", answer: false, explain: "Era un polis independent, legat de metropolă prin legături religioase și afective." },
      { type: "text", q: "Cum se numește partea înaltă și fortificată a unui polis, cu temple?", answer: ["acropola", "acropolă", "acropole"], explain: "Acropola." },
      { type: "mc", q: "Ce cetate greacă a întemeiat Siracuza (733 î.Hr.)?", options: ["Corint", "Sparta", "Atena"], answer: 0, explain: "Coloniști din Corint." },
      { type: "mc", q: "Care reformă a lui Clistene a creat baza democrației?", options: ["Zece triburi amestecate și Consiliul celor 500", "Abolirea sclaviei", "Tirania populară"], answer: 0, explain: "A depășit diviziunile dintre familiile nobile." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Primele Jocuri Olimpice", "Dracon", "Solon", "Pisistrate tiran", "Clistene"], explain: "776, 621, 594, 561, 508 î.Hr." },
      { type: "mc", q: "Cine erau eforii la Sparta?", options: ["Cinci magistrați aleși care îi supravegheau pe regi", "Preoții oracolului", "Războinici aleși"], answer: 0, explain: "Îi controlau pe regi și orientau politica." },
      { type: "num", q: "În ce an î.Hr. au avut loc, după tradiție, primele Jocuri Olimpice?", answer: 776, tol: 0, explain: "776 î.Hr." },
      { type: "tf", q: "La Atena femeile și sclavii participau la adunare.", answer: false, explain: "Votau doar bărbații adulți cetățeni." },
      { type: "mc", q: "De ce avea Sparta o organizare atât de militarizată?", options: ["Ca să controleze un mare număr de iloți", "Ca să cucerească Asia", "Ca să se apere de romani"], answer: 0, explain: "Puținii spartiați trebuiau să domine mulții iloți." }
    ]
  }
});

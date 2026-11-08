TOPIC('ro', {
  id: `m2-geo-europa-nordica`,
  title: `Europa de Nord`,
  intro: `Fiorduri săpate de ghețari, mii de lacuri, vulcani sub gheață, soarele de la miezul nopții și aurora boreală: <b>Europa de Nord</b> cuprinde <b>țările nordice</b> (Norvegia, Suedia, Finlanda, Danemarca, Islanda) și <b>Insulele Britanice</b> (Regatul Unit și Irlanda). Sunt țări puțin populate, dar printre cele mai bogate, mai educate și mai inovatoare din lume. Să aflăm cum latitudinea, gheața și marea le-au modelat peisajele și viața.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. O regiune modelată de gheață`,
      html: `<p>În timpul <b>glaciațiunilor</b> (ultima s-a încheiat în urmă cu aproximativ 11.700 de ani), o uriașă calotă de gheață, groasă de până la 3 km, acoperea Scandinavia și o mare parte din Insulele Britanice. Gheața a lăsat urme peste tot:</p>
<ul>
<li><b>fiordurile</b> Norvegiei: văi săpate de ghețari și apoi invadate de mare;</li>
<li>zecile de mii de <b>lacuri</b> din Finlanda și Suedia, în depresiunile săpate de gheață;</li>
<li>stânci șlefuite, dealuri de pietriș și bolovani (morene) și soluri subțiri, puțin potrivite pentru agricultură.</li>
</ul>
<p><b>Alpii Scandinaviei</b> se întind de-a lungul peninsulei scandinave: înalți în vest (Norvegia), coboară lin spre est (Suedia) până la Marea Baltică. Ținuturile britanice au munți vechi și joși în nord și în vest (Scoția, Țara Galilor) și câmpii în sud-est (Anglia).</p>
<p>Curiozitate geologică: eliberată de greutatea gheții, Scandinavia <b>continuă să se ridice</b>, în unele locuri cu aproape 1 cm pe an!</p>`
    },
    {
      type: `svg`,
      title: `Cum se formează un fiord`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="100" y="28" font-size="16" text-anchor="middle" font-weight="bold">1. Vale în formă de V</text>
<polygon points="20,60 90,200 110,200 180,60 180,240 20,240" fill="#a8a29e"/>
<path d="M95 195 L105 195" stroke="#2563eb" stroke-width="6"/>
<text x="100" y="268" font-size="14" text-anchor="middle">săpată de un râu</text>
<text x="300" y="28" font-size="16" text-anchor="middle" font-weight="bold">2. Vine ghețarul</text>
<polygon points="220,60 245,215 355,215 380,60 380,240 220,240" fill="#a8a29e"/>
<polygon points="222,62 247,213 353,213 378,62" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="3"/>
<text x="300" y="140" font-size="15" text-anchor="middle" fill="#0369a1" font-weight="bold">gheață</text>
<text x="300" y="268" font-size="14" text-anchor="middle">sapă și lărgește: vale în U</text>
<text x="500" y="28" font-size="16" text-anchor="middle" font-weight="bold">3. Intră marea</text>
<polygon points="420,60 445,215 555,215 580,60 580,240 420,240" fill="#a8a29e"/>
<polygon points="434,130 445,213 555,213 566,130" fill="#2563eb"/>
<line x1="420" y1="130" x2="580" y2="130" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="6 4"/>
<text x="500" y="180" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">FIORD</text>
<text x="500" y="268" font-size="14" text-anchor="middle">gheața se topește,</text>
<text x="500" y="288" font-size="14" text-anchor="middle">nivelul mării crește</text>
</svg>`,
      caption: `Sognefjord, în Norvegia, pătrunde pe aproximativ 204 km în interior și în unele locuri are o adâncime de peste 1.300 de metri.`
    },
    {
      type: `3d`,
      title: `Peisajele Nordului în 3D`,
      scene: `terrain`,
      caption: `Rotește peisajul și atinge fiecare element: descoperă câte un exemplu nordic pentru fiecare.`,
      options: {
        features: {
          bay: { label: `Fiord`, html: `Golf lung și îngust între pereți abrupți: este o vale glaciară invadată de mare. Coastele Norvegiei sunt pline de fiorduri; <b>Geirangerfjord</b> este patrimoniu UNESCO.` },
          glacier: { label: `Ghețar`, html: `<b>Vatnajökull</b>, din Islanda, este cel mai mare ghețar din Europa ca volum; sub el se ascund vulcani activi.` },
          volcano: { label: `Vulcan`, html: `Islanda are aproximativ 30 de sisteme vulcanice active. În 2010, erupția vulcanului <b>Eyjafjallajökull</b> a blocat zile în șir zborurile din jumătate de Europă.` },
          mountain: { label: `Lanț muntos`, html: `<b>Alpii Scandinaviei</b> (în Norvegia, Galdhøpiggen, 2.469 m) și <b>Highlands</b>-ul scoțian, cu Ben Nevis (1.345 m), cel mai înalt vârf din Insulele Britanice.` },
          lake: { label: `Lac`, html: `Finlanda are aproximativ <b>188.000 de lacuri</b>; în Suedia, <b>Vänern</b> (aproximativ 5.650 km²) este cel mai mare lac din Uniunea Europeană.` },
          island: { label: `Insulă`, html: `<b>Marea Britanie</b> este cea mai mare insulă a Europei. <b>Groenlanda</b> (Danemarca) este cea mai mare insulă din lume.` },
          archipelago: { label: `Arhipelag`, html: `Insulele <b>Lofoten</b> din Norvegia, <b>Insulele Feroe</b> (Danemarca) și <b>Hebridele</b> din Scoția. Chiar și Stockholm este construit pe 14 insule.` },
          peninsula: { label: `Peninsulă`, html: `<b>Peninsula Scandinavă</b> (Norvegia și Suedia) este cea mai mare din Europa; Danemarca ocupă peninsula <b>Iutlanda</b>.` },
          strait: { label: `Strâmtoare`, html: `<b>Strâmtoarea Calais</b> (33 km) separă Anglia de Franța; pe sub ea trece Eurotunelul. <b>Øresund</b> separă Danemarca de Suedia și este traversat de un pod-tunel.` },
          cape: { label: `Cap`, html: `<b>Capul Nord</b>, în Norvegia, cu stânca lui înaltă de peste 300 m, este considerat cel mai nordic punct al Europei care poate fi atins cu mașina.` },
          coast: { label: `Coastă`, html: `<b>Stâncile albe de la Dover</b>, din calcar, sunt simbolul coastei engleze la Canalul Mânecii.` },
          river: { label: `Râu`, html: `<b>Tamisa</b> (aproximativ 346 km) traversează Londra; <b>Shannon</b> (aproximativ 360 km) este cel mai lung râu al Irlandei și al Insulelor Britanice.` },
          plain: { label: `Câmpie`, html: `<b>Danemarca</b> este aproape în întregime plată: cel mai înalt punct depășește cu puțin 170 m!` }
        }
      }
    },
    {
      type: `text`,
      title: `2. Clima, lumina și întunericul`,
      html: `<p>Europa de Nord se află la aceeași latitudine ca Alaska și Siberia și totuși este locuibilă: meritul este al <b>curentului nord-atlantic</b> (prelungirea Curentului Golfului), care aduce ape calde de-a lungul coastelor. De aceea:</p>
<ul>
<li>Insulele Britanice, Irlanda, Danemarca și coasta norvegiană au un <b>climat oceanic</b>: ierni blânde, veri răcoroase, ploi dese; porturile norvegiene nu îngheață nici dincolo de Cercul Polar;</li>
<li>interiorul Suediei și al Finlandei are un <b>climat continental rece</b> (subarctic), cu ierni lungi și ninsoare multă;</li>
<li>extremul nord și munții au un <b>climat polar</b>, cu tundră.</li>
</ul>
<p>Dincolo de <b>Cercul Polar de Nord</b> (66°34' N) se întâmplă ceva special: vara există cel puțin o zi în care Soarele nu apune niciodată (<b>soarele de la miezul nopții</b>), iar iarna cel puțin o zi în care nu răsare deloc (<b>noaptea polară</b>). În nopțile de iarnă se poate vedea <b>aurora boreală</b>, lumină produsă de particulele vântului solar care lovesc atmosfera.</p>`
    },
    {
      type: `svg`,
      title: `Ore de lumină: Roma, Oslo și Tromsø`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="24" font-size="17" text-anchor="middle" font-weight="bold">Ore de lumină pe zi (aproximativ)</text>
<line x1="60" y1="250" x2="580" y2="250" stroke="#334155" stroke-width="2"/>
<rect x="90" y="100" width="50" height="150" fill="#facc15"/>
<rect x="145" y="160" width="50" height="90" fill="#1e3a8a"/>
<text x="117" y="92" font-size="14" text-anchor="middle">15 h</text>
<text x="170" y="152" font-size="14" text-anchor="middle">9 h</text>
<text x="142" y="275" font-size="16" text-anchor="middle" font-weight="bold">Roma (42° N)</text>
<rect x="265" y="62" width="50" height="188" fill="#facc15"/>
<rect x="320" y="190" width="50" height="60" fill="#1e3a8a"/>
<text x="290" y="54" font-size="14" text-anchor="middle">19 h</text>
<text x="345" y="182" font-size="14" text-anchor="middle">6 h</text>
<text x="317" y="275" font-size="16" text-anchor="middle" font-weight="bold">Oslo (60° N)</text>
<rect x="440" y="10" width="50" height="240" fill="#facc15"/>
<rect x="495" y="248" width="50" height="2" fill="#1e3a8a"/>
<text x="465" y="45" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">24 h</text>
<text x="520" y="240" font-size="14" text-anchor="middle">0 h</text>
<text x="492" y="275" font-size="16" text-anchor="middle" font-weight="bold">Tromsø (70° N)</text>
<rect x="70" y="285" width="14" height="12" fill="#facc15"/>
<text x="90" y="296" font-size="13">21 iunie</text>
<rect x="180" y="285" width="14" height="12" fill="#1e3a8a"/>
<text x="200" y="296" font-size="13">21 decembrie</text>
</svg>`,
      caption: `Cu cât urci mai spre nord, cu atât diferența dintre vară și iarnă este mai extremă. La Tromsø, dincolo de Cercul Polar, Soarele nu apune de pe la 20 mai până pe 22 iulie.`
    },
    {
      type: `quiz`,
      title: `Mini-test: gheață și lumină`,
      questions: [
        { type: `mc`, q: `Ce este un fiord?`, options: [`Un vulcan stins`, `O vale săpată de un ghețar și invadată de mare`, `Un lac sărat`], answer: 1, explain: `Mai întâi râu, apoi ghețar, apoi marea intră în valea în formă de U.` },
        { type: `tf`, q: `Dincolo de Cercul Polar de Nord, vara, Soarele poate rămâne deasupra orizontului 24 de ore.`, answer: true, explain: `Este soarele de la miezul nopții.` },
        { type: `mc`, q: `De ce nu îngheață iarna coastele Norvegiei?`, options: [`Din cauza vulcanilor`, `Din cauza curentului nord-atlantic, care aduce ape calde`, `Pentru că apa este foarte sărată`], answer: 1, explain: `Este prelungirea Curentului Golfului.` }
      ]
    },
    {
      type: `text`,
      title: `3. Țările nordice`,
      html: `<table>
<tr><th>Țara</th><th>Capitala</th><th>Locuitori (aprox.)</th><th>Suprafața (aprox.)</th><th>UE / monedă</th></tr>
<tr><td><b>Norvegia</b></td><td>Oslo</td><td>5,6 milioane</td><td>385.000 km²</td><td>nu e în UE · coroana norvegiană</td></tr>
<tr><td><b>Suedia</b></td><td>Stockholm</td><td>10,5 milioane</td><td>450.000 km²</td><td>în UE din 1995 · coroana suedeză</td></tr>
<tr><td><b>Finlanda</b></td><td>Helsinki</td><td>5,6 milioane</td><td>338.000 km²</td><td>în UE din 1995 · euro</td></tr>
<tr><td><b>Danemarca</b></td><td>Copenhaga</td><td>6 milioane</td><td>43.000 km²</td><td>în UE din 1973 · coroana daneză</td></tr>
<tr><td><b>Islanda</b></td><td>Reykjavík</td><td>390.000</td><td>103.000 km²</td><td>nu e în UE · coroana islandeză</td></tr>
</table>
<ul>
<li><b>Norvegia</b>: coaste foarte lungi și crestate, fiorduri, pescuit (somon, cod), energie hidroelectrică (aproape toată electricitatea) și mai ales <b>petrol și gaze</b> din Marea Nordului. Prin referendum (1972 și 1994) a ales de două ori să nu intre în UE.</li>
<li><b>Suedia</b>: cea mai mare și mai populată țară a regiunii; păduri (aproximativ două treimi din teritoriu), lemn și hârtie, mine de fier, industrie (automobile, telecomunicații, mobilă). La Stockholm se decernează în fiecare 10 decembrie <b>premiile Nobel</b> (cel pentru pace, la Oslo).</li>
<li><b>Finlanda</b>: „țara celor o mie de lacuri” (în realitate aproape 188.000!), păduri, tehnologie. Limba finlandeză nu este indo-europeană: este <b>ugro-finică</b>, ca maghiara și estona. Sistemul ei de învățământ este printre cele mai studiate din lume.</li>
<li><b>Danemarca</b>: plată, cu peninsula Iutlanda și cu aproximativ 400 de insule; agricultură și creșterea animalelor moderne, <b>energie eoliană</b> (mai mult de jumătate din electricitate), <b>Lego</b> (născut în 1932). Fac parte din Regatul Danemarcei, cu o largă autonomie, și Insulele Feroe și <b>Groenlanda</b>.</li>
<li><b>Islanda</b>: o insulă pe dorsala mediooceanică atlantică, unde plăcile nord-americană și euroasiatică se îndepărtează: vulcani, gheizere, izvoare calde. Aproape toată electricitatea provine din surse <b>regenerabile</b> (hidroelectrică și geotermală).</li>
</ul>
<p>Țările nordice sunt faimoase pentru <b>statul bunăstării</b> (școală, sănătate și servicii publice de nivel înalt, finanțate prin taxe ridicate) și se află mereu pe primele locuri în clasamentele privind calitatea vieții.</p>`
    },
    {
      type: `text`,
      title: `4. Insulele Britanice: Regatul Unit și Irlanda`,
      html: `<p><b>Regatul Unit</b> – Capitala: <b>Londra</b> · aproximativ 69 de milioane de locuitori · aproximativ 244.000 km² · monarhie parlamentară · moneda: <b>lira sterlină</b>.</p>
<ul>
<li>Este format din <b>patru națiuni</b>: <b>Anglia</b> (Londra), <b>Scoția</b> (Edinburgh), <b>Țara Galilor</b> (Cardiff) și <b>Irlanda de Nord</b> (Belfast). Numele complet este „Regatul Unit al Marii Britanii și Irlandei de Nord”.</li>
<li>Aici a început, în secolul al XVIII-lea, <b>prima revoluție industrială</b>; în secolul al XIX-lea, Imperiul Britanic era cel mai mare din lume. Astăzi economia se bazează pe finanțe (City din Londra), servicii, cercetare, industria aerospațială și farmaceutică.</li>
<li>La <b>Greenwich</b>, în Londra, trece <b>meridianul zero</b>, de la care se măsoară longitudinile și fusurile orare.</li>
<li>A părăsit Uniunea Europeană la <b>31 ianuarie 2020</b> (Brexit). Din 1994 este legat de Franța prin <b>Eurotunel</b>, sub Canalul Mânecii (aproximativ 50 km).</li>
</ul>
<p><b>Irlanda</b> – Capitala: <b>Dublin</b> · aproximativ 5,3 milioane de locuitori · aproximativ 70.000 km² · republică · euro.</p>
<ul>
<li>Ocupă cea mai mare parte a insulei Irlanda (nord-estul este Irlanda de Nord, britanică). Este numită <b>„Insula de Smarald”</b> pentru pajiștile ei mereu verzi, datorită climei blânde și ploioase.</li>
<li>Limbi oficiale: <b>irlandeza</b> (gaelica) și engleza. În UE din 1973.</li>
<li>În timpul <b>Marii Foamete</b> (1845-1849), provocată de o boală a cartofilor, aproximativ un milion de oameni au murit și alt milion au emigrat, mai ales în Statele Unite. Astăzi este o țară bogată, sediu european al multor mari companii de tehnologie și din industria farmaceutică.</li>
</ul>`
    },
    {
      type: `widget`,
      title: `Potrivește țara cu capitala`,
      widget: `match`,
      options: {
        pairs: [
          [`🇳🇴 Norvegia`, `Oslo`],
          [`🇸🇪 Suedia`, `Stockholm`],
          [`🇫🇮 Finlanda`, `Helsinki`],
          [`🇩🇰 Danemarca`, `Copenhaga`],
          [`🇮🇸 Islanda`, `Reykjavík`],
          [`🇬🇧 Regatul Unit`, `Londra`],
          [`🇮🇪 Irlanda`, `Dublin`]
        ]
      },
      caption: `Reykjavík (64° N) este capitala celui mai nordic stat suveran din lume.`
    },
    {
      type: `widget`,
      title: `În interiorul sau în afara Uniunii Europene?`,
      widget: `classify`,
      options: {
        groups: [`Membră a UE`, `Nemembră`],
        items: [
          [`🇸🇪 Suedia`, 0],
          [`🇫🇮 Finlanda`, 0],
          [`🇩🇰 Danemarca`, 0],
          [`🇮🇪 Irlanda`, 0],
          [`🇳🇴 Norvegia`, 1],
          [`🇮🇸 Islanda`, 1],
          [`🇬🇧 Regatul Unit`, 1]
        ]
      },
      caption: `Norvegia și Islanda nu sunt în UE, dar fac parte din Spațiul Economic European și din Schengen. Regatul Unit a ieșit în 2020.`
    },
    {
      type: `example`,
      title: `Exemplu practic: de ce aproape toți norvegienii cumpără mașini electrice?`,
      html: `<p>În 2024, aproximativ <b>9 mașini noi din 10</b> vândute în Norvegia erau complet electrice: un record mondial. Cum se explică, într-o țară care vinde petrol?</p>
<ol>
<li>Electricitatea norvegiană este aproape în totalitate <b>hidroelectrică</b> (munți + multă ploaie și zăpadă = multe râuri și cascade), curată și ieftină.</li>
<li>Statul a eliminat ani la rând multe taxe pentru mașinile electrice și le-a crescut pe cele pentru mașinile pe benzină și motorină.</li>
<li>A construit o rețea deasă de stații de încărcare.</li>
</ol>
<p>Este un exemplu despre cum se îmbină <b>geografia</b> (relief și ploi) și <b>alegerile politice</b>. Încearcă să te gândești: în Italia, unde electricitatea provine din surse mai variate, efectele ar fi aceleași?</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: de la Londra la Edinburgh, prin Regatul Unit`,
      html: `<p>Cu trenul de la Londra la Edinburgh faci aproximativ <b>4 ore și jumătate</b> pe aproximativ 630 km. Peisajul se schimbă: mai întâi câmpiile și dealurile verzi din sudul Angliei, apoi vechile orașe industriale din Nord (York, Newcastle), în sfârșit coasta scoțiană.</p>
<p>La Edinburgh vei observa indicatoare în engleză, dar în unele zone ale Scoției și în <b>gaelica scoțiană</b>; în Țara Galilor indicatoarele sunt mereu bilingve, în engleză și <b>galeză</b>. Și nu uita: în Regatul Unit și în Irlanda se circulă pe <b>stânga</b>!</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… în Islanda căldura vine din Pământ?`,
      html: `<p>În Islanda, aproximativ <b>9 case din 10</b> sunt încălzite cu apa caldă care urcă din subsol, încălzită de căldura vulcanilor (<b>energie geotermală</b>). La Reykjavík, sub unele trotuare trec țevi cu apă caldă care topesc zăpada. Iar cuvântul <b>gheizer</b>, folosit în toată lumea, vine de la numele unui izvor islandez, <i>Geysir</i>, care înseamnă „care țâșnește”.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… engleza are cuvinte de la vikingi?`,
      html: `<p>Între secolele al VIII-lea și al XI-lea, <b>vikingii</b> plecați din Norvegia, Danemarca și Suedia au navigat până în Anglia, Irlanda, Islanda, Groenlanda și chiar în America de Nord (în jurul anului 1000). S-au stabilit și în Anglia și au lăsat multe cuvinte: <i>sky</i> (cer), <i>egg</i> (ou), <i>knife</i> (cuțit), <i>window</i> (din „ochiul vântului”) și <i>Thursday</i>, ziua lui <b>Thor</b>! Althing-ul islandez, născut în 930, este unul dintre cele mai vechi parlamente din lume.</p>`
    },
    {
      type: `decision`,
      title: `Norvegia, anii ’70: ați găsit petrol. Ce faceți?`,
      html: `<p>În 1969, sub Marea Nordului este descoperit zăcământul Ekofisk: Norvegia, o țară de pescari și țărani, devine brusc bogată în petrol și gaze. Dar petrolul se va termina mai devreme sau mai târziu, iar prețul lui urcă și coboară imprevizibil.</p>`,
      question: `Ce faci cu banii din petrol?`,
      options: [
        { label: `Cheltuim totul imediat: taxe mai mici și salarii mai mari pentru toți.`, outcome: `Bunăstare imediată… dar când prețul petrolului se prăbușește sau zăcămintele se epuizează, economia se prăbușește odată cu el. S-a întâmplat în mai multe țări producătoare.` },
        { label: `Punem o mare parte din câștiguri într-un fond investit în străinătate, pentru generațiile viitoare.`, outcome: `Trebuie să reziști tentației de a cheltui azi, dar țara se protejează de crize și își păstrează bogăția când petrolul se va termina.` },
        { label: `Lăsăm companiile străine să extragă și să păstreze profiturile, în schimbul unei mici chirii.`, outcome: `Niciun risc pentru stat, dar bogăția ar ajunge aproape toată în străinătate.` }
      ],
      answer: 1,
      explain: `Norvegia a creat o companie petrolieră de stat (astăzi Equinor) și, din 1990, un <b>fond suveran</b> („fondul petrolului”), în care depune câștigurile din petrol, investindu-le în companii din toată lumea. Guvernul poate folosi în fiecare an doar o mică parte din randamente. Astăzi este cel mai mare fond suveran din lume, cu o valoare de peste 1.500 de miliarde de dolari: aproximativ 300.000 de dolari pentru fiecare norvegian. Este un exemplu de gestionare a unei <b>resurse neregenerabile</b> gândindu-te la viitor.`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege Europa de Nord`,
      intro: `Dacă te încurcă atâtea nume și numere, încearcă aceste puncte de vedere.`,
      tabs: [
        {
          label: `🖐️ Ghețarul ca un deget în nisip`,
          html: `<p>Ia o tăviță cu nisip ud și trage încet un deget, apăsând: vei lăsa un șanț în formă de <b>U</b>, cu fundul larg și pereții abrupți. Acum toarnă puțină apă: iată un fiord în miniatură!</p>
<p>Un râu, în schimb, sapă doar fundul, ca vârful unui creion: lasă un șanț în formă de <b>V</b>. Privind forma unei văi, geografii înțeleg dacă a fost săpată de un râu sau de un ghețar.</p>`
        },
        {
          label: `🌍 Pe glob`,
          html: `<p>Rotește globul: găsește capitalele, Capul Nord și Groenlanda. Observă cât de aproape este Islanda de Cercul Polar de Nord.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 59.91, lon: 10.75, label: `Oslo`, color: `#ef4444` },
              { lat: 59.33, lon: 18.07, label: `Stockholm`, color: `#2563eb` },
              { lat: 60.17, lon: 24.94, label: `Helsinki`, color: `#0ea5e9` },
              { lat: 55.68, lon: 12.57, label: `Copenhaga`, color: `#dc2626` },
              { lat: 64.15, lon: -21.94, label: `Reykjavík`, color: `#7c3aed` },
              { lat: 51.51, lon: -0.13, label: `Londra`, color: `#1d4ed8` },
              { lat: 53.35, lon: -6.26, label: `Dublin`, color: `#16a34a` },
              { lat: 71.17, lon: 25.78, label: `Capul Nord`, color: `#f97316` },
              { lat: 72.0, lon: -40.0, label: `Groenlanda`, color: `#94a3b8` },
              { lat: 69.65, lon: 18.96, label: `Tromsø`, color: `#eab308` }
            ]
          }
        },
        {
          label: `🗣️ Limbi surori și limbi „străine”`,
          html: `<p>Norvegiana, suedeza și daneza sunt atât de asemănătoare, încât vorbitorii lor se înțeleg între ei (cu puțin efort). Sunt limbi <b>germanice</b>, ca engleza și germana. Islandeza este cea mai conservatoare: islandezii reușesc să citească sagele medievale!</p>
<table>
<tr><th>Română</th><th>Suedeză</th><th>Norvegiană</th><th>Daneză</th><th>Finlandeză</th></tr>
<tr><td>mulțumesc</td><td>tack</td><td>takk</td><td>tak</td><td>kiitos</td></tr>
<tr><td>casă</td><td>hus</td><td>hus</td><td>hus</td><td>talo</td></tr>
<tr><td>apă</td><td>vatten</td><td>vann</td><td>vand</td><td>vesi</td></tr>
</table>
<p><b>Finlandeza</b> aparține altei familii (ugro-finice): de aceea cuvintele ei sunt atât de diferite. În Regatul Unit și în Irlanda, pe lângă engleză, supraviețuiesc limbi <b>celtice</b>: galeza, gaelica scoțiană, irlandeza.</p>`
        },
        {
          label: `☀️ De ce vara nu se face întuneric?`,
          html: `<p>Axa Pământului este <b>înclinată</b> cu aproximativ 23,4°. În iunie, Polul Nord este „aplecat” spre Soare: rotindu-se în jurul propriei axe, zona din apropierea polului rămâne mereu în partea luminată, ca o persoană așezată lângă centrul unui carusel, aproape de o lampă. În decembrie se întâmplă invers: zona aceea rămâne mereu în întuneric.</p>
<p>Cercul Polar de Nord (66°34' N) este chiar limita dincolo de care se întâmplă asta cel puțin o zi pe an: 90° − 23,4° ≈ 66,6°.</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta Europei de Nord`,
      nodes: [
        { id: `latitudine`, label: `Latitudine mare`, x: 50, y: 6, color: `#1e3a8a`, html: `Regiunea se întinde de la aproximativ 50° până la peste 71° latitudine nordică.`, why: `Cu cât te apropii de pol, cu atât razele Soarelui sosesc mai oblic și încălzesc mai puțin; iar din cauza înclinării axei terestre, orele de lumină variază foarte mult între vară și iarnă.` },
        { id: `luce`, label: `Soarele de la miezul nopții și noaptea polară`, x: 18, y: 22, color: `#eab308`, html: `Dincolo de Cercul Polar, Soarele nu apune vara și nu răsare iarna cel puțin o zi.`, why: `Axa terestră este înclinată cu aproximativ 23,4°: 90° − 23,4° dă latitudinea Cercului Polar (66°34').` },
        { id: `corrente`, label: `Curentul nord-atlantic`, x: 82, y: 22, color: `#0ea5e9`, html: `Ape calde care fac clima mai blândă decât ne-am aștepta.`, why: `Este prelungirea Curentului Golfului, care se naște în Caraibe; vânturile de vest împing aer călduț și umed spre coaste.` },
        { id: `ghiaccio`, label: `Glaciațiuni`, x: 50, y: 35, color: `#7dd3fc`, html: `O calotă de gheață acoperea regiunea până în urmă cu aproximativ 11.700 de ani.`, why: `Variațiile ciclice ale orbitei Pământului (ciclurile Milanković) au alternat perioade reci și calde în ultimii 2,6 milioane de ani.` },
        { id: `fiordi`, label: `Fiorduri și lacuri`, x: 18, y: 55, color: `#2563eb`, html: `Fiorduri în Norvegia, lacuri în Finlanda și Suedia.`, why: `Gheața a săpat văi în formă de U și depresiuni în stâncă; când s-a topit, marea a invadat văile de coastă, iar apa dulce a umplut depresiunile din interior.` },
        { id: `vulcani`, label: `Vulcanii Islandei`, x: 82, y: 50, color: `#dc2626`, html: `Vulcani, gheizere și izvoare calde.`, why: `Islanda se află pe dorsala mediooceanică atlantică, unde două plăci se îndepărtează cu aproximativ 2 cm pe an și magma urcă; dedesubt se află și un „punct fierbinte” al mantalei.` },
        { id: `energia`, label: `Energie și resurse`, x: 50, y: 70, color: `#16a34a`, html: `Petrol și gaze (Marea Nordului), hidroelectrică, eoliană, geotermală, păduri, pescuit.`, why: `Munții ploioși dau energie hidroelectrică; vânturile Atlanticului, energie eoliană; vulcanii, energie geotermală; sedimentele de sub Marea Nordului au format petrol și gaze.` },
        { id: `vichinghi`, label: `Vikingi și navigatori`, x: 18, y: 88, color: `#a16207`, html: `Popoare de navigatori din Evul Mediu până la Imperiul Britanic.`, why: `Pământurile sărace și coastele foarte lungi îi împingeau spre mare: vikingii au ajuns în America în jurul anului 1000; Anglia, ca insulă, a construit cea mai puternică flotă din lume.` },
        { id: `welfare`, label: `Bunăstare și stat social`, x: 82, y: 85, color: `#a855f7`, html: `Venituri mari, servicii publice puternice, calitate înaltă a vieții.`, why: `Populații mici și educate, resurse naturale gestionate de stat și un puternic acord social între muncitori și companii au permis finanțarea școlii, sănătății și pensiilor prin taxe ridicate.` }
      ],
      edges: [
        [`latitudine`, `luce`, `cauză`],
        [`latitudine`, `ghiaccio`, `favorizează`],
        [`corrente`, `latitudine`, `atenuează frigul`],
        [`ghiaccio`, `fiordi`, `sapă`],
        [`vulcani`, `energia`, `geotermie`],
        [`fiordi`, `energia`, `hidroelectrică`],
        [`energia`, `welfare`, `finanțează`],
        [`corrente`, `vichinghi`, `mări navigabile`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: țările din Nord`,
      questions: [
        { type: `text`, q: `Care este capitala Suediei?`, answer: [`stockholm`, `stocholm`, `stokholm`], explain: `Stockholm, construit pe 14 insule.` },
        { type: `mc`, q: `Care sunt cele patru națiuni ale Regatului Unit?`, options: [`Anglia, Scoția, Țara Galilor, Irlanda de Nord`, `Anglia, Irlanda, Islanda, Țara Galilor`, `Londra, Edinburgh, Cardiff, Dublin`], answer: 0, explain: `Irlanda (cu capitala Dublin) este un stat independent.` },
        { type: `tf`, q: `Finlanda folosește euro.`, answer: true, explain: `Este singura țară nordică care l-a adoptat.` }
      ]
    }
  ],
  glossary: [
    { t: `Fiord`, d: `Golf lung, îngust și adânc: o vale glaciară invadată de mare.` },
    { t: `Glaciațiune`, d: `Perioadă rece în care ghețarii se extind și acoperă regiuni vaste.` },
    { t: `Cercul Polar de Nord`, d: `Paralela de 66°34' N dincolo de care apar soarele de la miezul nopții și noaptea polară.` },
    { t: `Soarele de la miezul nopții`, d: `Fenomen prin care, vara, la latitudini mari, Soarele rămâne deasupra orizontului 24 de ore.` },
    { t: `Aurora boreală`, d: `Lumini colorate pe cerul nopții polare, produse de particulele vântului solar.` },
    { t: `Energie geotermală`, d: `Energie obținută din căldura internă a Pământului.` },
    { t: `Fond suveran`, d: `Fond de investiții aflat în proprietatea unui stat, precum cel norvegian, alimentat de petrol.` },
    { t: `Stat social (welfare)`, d: `Sistem în care statul garantează cetățenilor servicii precum sănătatea, școala, pensiile și ajutoarele sociale.` },
    { t: `Țări nordice`, d: `Norvegia, Suedia, Finlanda, Danemarca și Islanda.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Care țări formează Peninsula Scandinavă?`, options: [`Norvegia și Suedia`, `Danemarca și Islanda`, `Finlanda și Irlanda`], answer: 0, explain: `Danemarca ocupă Iutlanda; Islanda este o insulă.` },
      { type: `order`, q: `Pune în ordine etapele formării unui fiord.`, items: [`Un râu sapă o vale în formă de V`, `Un ghețar ocupă valea și o lărgește în formă de U`, `Gheața se topește`, `Marea invadează valea`], explain: `Râu, ghețar, topire, mare.` },
      { type: `mc`, q: `Care țară este numită „țara celor o mie de lacuri”?`, options: [`Norvegia`, `Finlanda`, `Danemarca`], answer: 1, explain: `În realitate Finlanda are aproximativ 188.000 de lacuri.` },
      { type: `text`, q: `Care este capitala Islandei?`, answer: [`reykjavik`, `reykjavík`, `reikjavik`], explain: `Reykjavík, cea mai nordică capitală a unui stat suveran.` },
      { type: `tf`, q: `Norvegia face parte din Uniunea Europeană.`, answer: false, explain: `Prin două referendumuri (1972 și 1994), norvegienii au spus nu.` },
      { type: `mc`, q: `De unde provine cea mai mare parte a electricității Norvegiei?`, options: [`Din cărbune`, `Din centralele hidroelectrice`, `Din energia nucleară`], answer: 1, explain: `Munți și multe precipitații: râuri și cascade peste tot.` },
      { type: `num`, q: `La ce latitudine (în grade, aproximativ) se află Cercul Polar de Nord?`, answer: 66.6, tol: 0.5, unit: `° N`, explain: `66°34' N, adică aproximativ 66,6°: 90° minus înclinarea axei (23,4°).` },
      { type: `mc`, q: `De ce are Islanda atâția vulcani?`, options: [`Pentru că este aproape de pol`, `Pentru că se află pe dorsala mediooceanică atlantică, unde două plăci se îndepărtează`, `Pentru că este mică`], answer: 1, explain: `Magma urcă acolo unde plăcile se despart.` },
      { type: `mc`, q: `Care limbă NU este germanică?`, options: [`Suedeza`, `Daneza`, `Finlandeza`], answer: 2, explain: `Finlandeza este o limbă ugro-finică.` },
      { type: `text`, q: `Cum se numește meridianul zero care trece prin Londra?`, answer: [`greenwich`, `meridianul greenwich`, `meridianul de greenwich`], explain: `Meridianul Greenwich.` },
      { type: `num`, q: `În ce an a ieșit Regatul Unit din Uniunea Europeană?`, answer: 2020, explain: `La 31 ianuarie 2020 (Brexit).` },
      { type: `mc`, q: `Ce a provocat Marea Foamete din Irlanda (1845-1849)?`, options: [`Un război`, `O boală a cartofilor`, `O erupție vulcanică`], answer: 1, explain: `Mana cartofului a distrus recoltele de cartofi, hrana de bază a țăranilor.` }
    ]
  }
});

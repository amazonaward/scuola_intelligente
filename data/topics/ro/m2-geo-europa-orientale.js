TOPIC('ro', {
  id: `m2-geo-europa-orientale`,
  title: `Europa Orientală`,
  intro: `Spre est, Europa se lărgește într-o câmpie imensă care ajunge până la <b>Munții Urali</b>. Aici se află <b>România</b> și <b>Republica Moldova</b>, unde se vorbește o limbă neolatină, <b>Ucraina</b>, „hambarul Europei”, și partea europeană a <b>Rusiei</b>, cel mai mare stat din lume. Este o regiune cu mari râuri, ierni geroase, pământuri foarte fertile și o istorie marcată de imperii, regimuri și războaie, chiar și recente.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. O câmpie nesfârșită și un climat „extrem”`,
      html: `<p>Cea mai mare parte a Europei Orientale este ocupată de <b>Câmpia Est-Europeană</b> (sarmatică, sau rusă), cea mai mare câmpie a Europei: pe mii de km terenul este aproape plat, cu dealuri joase. Principalele reliefuri se află la margini:</p>
<ul>
<li><b>Carpații</b>, un mare arc muntos în România și în vestul Ucrainei;</li>
<li><b>Uralii</b>, munți vechi și joși (cel mult circa 1.900 m) care marchează granița cu Asia;</li>
<li><b>Caucazul</b>, între Marea Neagră și Marea Caspică, cu <b>Elbrus</b> (5.642 m).</li>
</ul>
<p>Departe de ocean, clima este <b>continentală</b>: ierni lungi și foarte reci, veri calde, mare diferență de temperatură între anotimpuri. La <b>Moscova</b> media din ianuarie este de circa -6 °C, dar adesea temperatura coboară sub -20 °C; în iulie media este de circa +19 °C.</p>
<p>De la nord la sud se schimbă vegetația: <b>tundră</b> (lângă Oceanul Înghețat de Nord), <b>taiga</b> (imense păduri de conifere), <b>pădure mixtă</b>, <b>stepă</b> (pajiști fără copaci, cu pământuri foarte fertile).</p>`
    },
    {
      type: `svg`,
      title: `Fâșiile de vegetație de la nord la sud`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<rect x="0" y="0" width="600" height="55" fill="#e0f2fe"/>
<text x="20" y="34" font-size="16" font-weight="bold" fill="#0c4a6e">NORD · Oceanul Înghețat de Nord</text>
<rect x="0" y="55" width="600" height="55" fill="#cbd5e1"/>
<text x="20" y="88" font-size="16" font-weight="bold" fill="#1e293b">TUNDRĂ: mușchi, licheni, sol înghețat</text>
<rect x="0" y="110" width="600" height="65" fill="#166534"/>
<text x="20" y="148" font-size="16" font-weight="bold" fill="#ffffff">TAIGA: păduri de brazi, pini, zadă</text>
<polygon points="470,170 485,120 500,170" fill="#14532d"/>
<polygon points="510,170 525,125 540,170" fill="#14532d"/>
<polygon points="550,170 565,118 580,170" fill="#14532d"/>
<rect x="0" y="175" width="600" height="55" fill="#4ade80"/>
<text x="20" y="208" font-size="16" font-weight="bold" fill="#14532d">PĂDURE MIXTĂ: stejari, mesteceni, arțari</text>
<rect x="0" y="230" width="600" height="60" fill="#fde047"/>
<text x="20" y="265" font-size="16" font-weight="bold" fill="#713f12">STEPĂ: pajiști și lanuri de grâu pe „pământ negru”</text>
<rect x="0" y="290" width="600" height="30" fill="#60a5fa"/>
<text x="20" y="311" font-size="15" font-weight="bold" fill="#ffffff">SUD · Marea Neagră și Marea Caspică</text>
</svg>`,
      caption: `Mergând spre sud, e mai cald și sezonul bun durează mai mult: tundra face loc pădurii și apoi stepei.`
    },
    {
      type: `3d`,
      title: `Peisajele Europei Orientale în 3D`,
      scene: `terrain`,
      caption: `Rotește peisajul și atinge fiecare element.`,
      options: {
        features: {
          plain: { label: `Câmpie`, html: `<b>Câmpia Est-Europeană</b> se întinde de la Polonia până la Urali: cea mai vastă din Europa.` },
          river: { label: `Râu`, html: `<b>Volga</b> (circa 3.530 km) este cel mai lung râu al Europei; <b>Nipru</b> (circa 2.200 km) traversează Ucraina și orașul Kiev.` },
          delta: { label: `Deltă`, html: `<b>Delta Dunării</b>, în România și Ucraina: canale, stufărișuri și peste 300 de specii de păsări, printre care pelicanii. Este rezervație a biosferei UNESCO.` },
          mountain: { label: `Lanț muntos`, html: `<b>Carpații</b> formează un arc de circa 1.500 km; în România, Moldoveanu ajunge la 2.544 m. Trăiesc aici urși, lupi și râși.` },
          peak: { label: `Vârf`, html: `<b>Elbrus</b> (5.642 m), un vulcan stins din Caucazul rusesc: dacă Caucazul este considerat european, este cel mai înalt munte al Europei.` },
          glacier: { label: `Ghețar`, html: `Vârfurile <b>Caucazului</b> sunt acoperite de mari ghețari.` },
          lake: { label: `Lac`, html: `<b>Ladoga</b>, lângă Sankt Petersburg, este cel mai mare lac din Europa (circa 17.700 km²). Marea Caspică, la granița cu Asia, este cel mai mare lac din lume.` },
          sea: { label: `Mare`, html: `<b>Marea Neagră</b> scaldă România, Ucraina și Rusia; este legată de Mediterana prin strâmtorile Bosfor și Dardanele.` },
          peninsula: { label: `Peninsulă`, html: `<b>Crimeea</b>, în Marea Neagră, este o peninsulă legată de uscat printr-un istm subțire.` },
          hill: { label: `Dealuri`, html: `<b>Republica Moldova</b> este o țară de dealuri line, acoperite de vii și livezi: cel mai înalt punct depășește puțin 400 m.` },
          lagoon: { label: `Lagună`, html: `De-a lungul coastei Mării Negre se găsesc multe lagune (<i>limanele</i>), la gurile râurilor.` }
        }
      }
    },
    {
      type: `text`,
      title: `2. România`,
      html: `<p><b>Capitala</b>: București · <b>Locuitori</b>: circa 19 milioane · <b>Suprafață</b>: circa 238.000 km² · <b>Forma de guvernământ</b>: republică semiprezidențială · <b>Moneda</b>: leul românesc.</p>
<ul>
<li>Teritoriul are o formă „în cercuri”: în centru Podișul <b>Transilvaniei</b>, în jur arcul <b>Carpaților</b>, apoi dealuri și câmpii, la sud <b>Dunărea</b> și la est <b>Marea Neagră</b> (portul Constanța).</li>
<li>Numele și limba amintesc de <b>Roma</b>: în anul 106 d.Hr. împăratul <b>Traian</b> a cucerit Dacia, iar regiunea a fost romanizată. <b>Româna</b> este o limbă neolatină, soră cu italiana.</li>
<li>Face parte din <b>UE din 2007</b>, iar din 2025 este pe deplin în spațiul Schengen.</li>
<li>Economie: industria auto (Dacia), informatică, agricultură (porumb, grâu, floarea-soarelui), petrol și gaze, turism.</li>
<li>În Italia trăiește cea mai numeroasă comunitate străină, cea românească: circa un milion de persoane.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. Republica Moldova`,
      html: `<p><b>Capitala</b>: Chișinău · <b>Locuitori</b>: circa 2,4 milioane · <b>Suprafață</b>: circa 33.800 km² (circa o noime din Italia) · <b>Forma de guvernământ</b>: republică parlamentară · <b>Moneda</b>: leul moldovenesc.</p>
<ul>
<li>Este strânsă între două râuri: <b>Prutul</b> la vest (granița cu România) și <b>Nistrul</b> la est. Nu are ieșire la mare.</li>
<li>Limba oficială este <b>româna</b>. Mulți oameni vorbesc și rusa; există minorități ucrainene, găgăuze și bulgare.</li>
<li>Are un teritoriu deluros, cu pământuri fertile: se cultivă vița-de-vie, fructe, floarea-soarelui, cereale. <b>Vinul</b> este o tradiție foarte importantă: pivnița de la <b>Mileștii Mici</b> are circa 200 km de galerii subterane și a intrat în Cartea Recordurilor pentru cea mai mare colecție de vinuri din lume (circa 2 milioane de sticle).</li>
<li>Regiunea <b>Transnistria</b>, la est de Nistru, s-a separat de fapt la începutul anilor ’90 și nu este recunoscută de niciun stat membru ONU.</li>
<li>Din <b>2022</b>, Republica Moldova este <b>țară candidată</b> la aderarea la Uniunea Europeană.</li>
</ul>`
    },
    {
      type: `quiz`,
      title: `Mini-test: România și Republica Moldova`,
      questions: [
        { type: `mc`, q: `Ce fel de limbă este româna?`, options: [`Slavă`, `Neolatină`, `Germanică`], answer: 1, explain: `Derivă din latină, ca italiana: Dacia a fost o provincie romană.` },
        { type: `text`, q: `Care este capitala Republicii Moldova?`, answer: [`chisinau`, `chișinău`, `chisinău`, `kishinev`], explain: `Chișinău.` },
        { type: `tf`, q: `Republica Moldova are ieșire la Marea Neagră.`, answer: false, explain: `Este un stat fără ieșire la mare, între România și Ucraina.` }
      ]
    },
    {
      type: `text`,
      title: `4. Ucraina`,
      html: `<p><b>Capitala</b>: Kiev (în ucraineană Kîiv) · <b>Suprafață</b>: circa 603.500 km², cel mai mare stat aflat în întregime în Europa · <b>Locuitori</b>: circa 41 de milioane înainte de 2022; astăzi numărul este nesigur din cauza războiului · <b>Moneda</b>: grivna.</p>
<ul>
<li>Este aproape în întregime plată, străbătută de <b>Nipru</b>. În vest se află Carpații (Hoverla, 2.061 m), în sud Marea Neagră și Marea de Azov.</li>
<li>O mare parte din sol este <b>cernoziom</b>, „pământul negru”, unul dintre cele mai fertile soluri din lume, foarte bogat în humus. De aceea Ucraina este numită <b>„hambarul Europei”</b>: este printre cei mai mari exportatori mondiali de grâu, porumb și <b>ulei de floarea-soarelui</b>.</li>
<li>Limba este <b>ucraineana</b>, o limbă slavă scrisă cu alfabetul chirilic.</li>
<li>Istorie recentă: independentă față de URSS din <b>24 august 1991</b>. În 1986 a avut loc aici dezastrul nuclear de la <b>Cernobîl</b>. În 2014 Rusia a ocupat și anexat Crimeea, anexare pe care Adunarea Generală a ONU nu a recunoscut-o. Din <b>24 februarie 2022</b> Rusia a început o <b>invazie pe scară largă</b> a Ucrainei, condamnată de Adunarea Generală a ONU: războiul a provocat foarte multe victime, distrugeri și milioane de refugiați, mulți primiți și în Italia.</li>
</ul>
<p><i>Notă: când un război este în desfășurare, granițele controlate și datele despre populație se schimbă: pentru cifre actualizate consultă surse recente și de încredere.</i></p>`
    },
    {
      type: `text`,
      title: `5. Rusia europeană`,
      html: `<p><b>Rusia</b> este cel mai mare stat din lume: circa <b>17,1 milioane de km²</b> (de peste 56 de ori Italia), cu 11 fusuri orare și circa 146 de milioane de locuitori. Este o <b>federație</b>; capitala este <b>Moscova</b>.</p>
<p>Uralii o împart în două: partea <b>asiatică</b> (Siberia) este enormă, dar puțin populată; partea <b>europeană</b> reprezintă circa un sfert din teritoriu, dar găzduiește circa <b>trei sferturi</b> din populație, orașele principale (Moscova, <b>Sankt Petersburg</b>, Nijni Novgorod, Kazan) și cea mai mare parte a industriilor.</p>
<ul>
<li><b>Volga</b>, cel mai lung râu al Europei, izvorăște lângă Moscova și se varsă în <b>Marea Caspică</b>; prin canale și baraje este legată de cinci mări.</li>
<li>În nord, portul <b>Murmansk</b>, dincolo de Cercul polar, rămâne liber de gheață tot anul datorită apelor calde ale Curentului Atlanticului de Nord.</li>
<li><b>Economie</b>: petrol și gaze naturale (printre primii producători din lume), metale, grâu, armament; multe resurse vin din Siberia.</li>
<li>Printre vecini se află <b>Belarus</b> (capitala Minsk); în nord-vest, cele trei <b>țări baltice</b> (Estonia, Letonia, Lituania), independente din 1991 și în UE din 2004.</li>
</ul>`
    },
    {
      type: `widget`,
      title: `Despre ce țară este vorba?`,
      widget: `classify`,
      options: {
        groups: [`România`, `Republica Moldova`, `Ucraina`, `Rusia`],
        items: [
          [`🏰 Transilvania`, 0],
          [`🚗 Automobilele Dacia`, 0],
          [`⚓ Portul Constanța`, 0],
          [`🍇 Pivnițele de la Mileștii Mici`, 1],
          [`🌊 Între Prut și Nistru`, 1],
          [`🌻 Hambarul Europei, pământ negru`, 2],
          [`🏙️ Kiev pe Nipru`, 2],
          [`☢️ Cernobîl`, 2],
          [`🚂 Transsiberianul`, 3],
          [`🏛️ Sankt Petersburg`, 3],
          [`🌊 Volga care se varsă în Caspica`, 3]
        ]
      },
      caption: `Unele elemente (Dunărea, Marea Neagră, Carpații) sunt comune mai multor țări: aici le-am ales pe cele care aparțin unei singure țări.`
    },
    {
      type: `widget`,
      title: `Potrivește țara cu capitala`,
      widget: `match`,
      options: {
        pairs: [
          [`🇷🇴 România`, `București`],
          [`🇲🇩 Republica Moldova`, `Chișinău`],
          [`🇺🇦 Ucraina`, `Kiev (Kîiv)`],
          [`🇷🇺 Rusia`, `Moscova`],
          [`🇧🇾 Belarus`, `Minsk`],
          [`🇧🇬 Bulgaria`, `Sofia`]
        ]
      },
      caption: `Bulgaria, la Marea Neagră, este adesea studiată împreună cu Balcanii.`
    },
    {
      type: `example`,
      title: `Exemplu practic: cea mai lungă călătorie cu trenul`,
      html: `<p><b>Transsiberianul</b> leagă Moscova de Vladivostok, la Oceanul Pacific: <b>9.289 km</b>, cea mai lungă cale ferată din lume. Călătoria durează circa <b>7 zile</b> și traversează 8 fusuri orare: la fiecare fus trebuie să muți ceasul cu o oră.</p>
<p>Calculează: dacă ai pleca din Moscova la ora 12:00 și trenul ar merge mereu spre est, câte ore ar trebui să adaugi ajungând la Vladivostok? (+7 ore: între Moscova și Vladivostok sunt 7 ore diferență.) Chiar primul tronson, de la Moscova la Urali, traversează toată Rusia europeană: câmpii, păduri de mesteceni, Volga.</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: Europa Orientală pe masă`,
      html: `<p>Multe produse pe care le folosești în fiecare zi vin de aici:</p>
<ul>
<li><b>uleiul din semințe de floarea-soarelui</b> din biscuiți și din chipsuri: Ucraina a fost mult timp primul exportator mondial;</li>
<li><b>grâul</b> pentru pâine și paste: Rusia și Ucraina sunt printre cei mai mari exportatori din lume;</li>
<li><b>porumbul</b> pentru hrana animalelor;</li>
<li><b>vinul</b> moldovenesc și românesc, printre cele mai vechi din Europa.</li>
</ul>
<p>În 2022, când războiul a blocat luni de zile porturile ucrainene de la Marea Neagră, prețurile grâului și ale uleiului de floarea-soarelui au crescut în toată lumea. Este un exemplu despre cum geografia unei regiuni îndepărtate poate atinge viața noastră de zi cu zi.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… Marea Caspică este un lac?`,
      html: `<p><b>Marea Caspică</b>, la granița dintre Europa și Asia, este <b>cel mai mare lac din lume</b>: circa 371.000 km², mai mare decât Italia! Se numește „mare” pentru că apa ei este ușor sărată. Suprafața ei se află la circa <b>28 de metri sub nivelul mării</b>. Trăiesc aici sturioni, din ale căror icre se obține caviarul.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… la Cernobîl trăiesc astăzi lupi și cai sălbatici?`,
      html: `<p>După explozia reactorului din 1986, în jurul centralei a fost creată o <b>zonă de excludere</b> cu raza de circa 30 km și peste 100.000 de oameni au fost evacuați. Fără oameni, natura și-a recucerit spațiile: astăzi trăiesc aici lupi, elani, râși și chiar cai Przewalski, eliberați acolo în anii ’90. Dar nivelurile de radioactivitate din unele zone rămân periculoase pentru oameni.</p>`
    },
    {
      type: `decision`,
      title: `1703: ești țarul Petru cel Mare`,
      html: `<p>Rusia este imensă, dar aproape închisă: Marea Neagră este controlată de Imperiul Otoman, porturile arctice îngheață multe luni, iar capitala, Moscova, este foarte departe de mare. Vrei să modernizezi țara și s-o faci să facă comerț cu Europa Occidentală. Tocmai ai cucerit de la suedezi o fâșie de coastă mlăștinoasă la gura râului Neva, la Marea Baltică.</p>`,
      question: `Ce faci?`,
      options: [
        { label: `Rămân la Moscova: este inima istorică și religioasă a Rusiei.`, outcome: `Moscova este sigură, dar la sute de km de mare: comerțul cu Europa rămâne lent și dificil.` },
        { label: `Construiesc un oraș nou și un port pe Neva și îl fac capitală.`, outcome: `Mlaștinile fac lucrările foarte grele, clima este rece și umedă, iar suedezii ar putea reveni. Dar Rusia ar avea o „fereastră spre Europa”.` },
        { label: `Mizez totul pe Arctica, pe Marea Albă.`, outcome: `Portul Arhanghelsk exista deja, dar îngheață circa șase luni pe an și este foarte departe de Europa Centrală.` }
      ],
      answer: 1,
      explain: `În 1703 Petru cel Mare a întemeiat <b>Sankt Petersburgul</b>, iar în 1712 l-a făcut capitală. Zeci de mii de muncitori, adesea siliți, au desecat mlaștinile și au construit orașul pe insule și canale; foarte mulți au murit. Orașul a devenit „fereastra spre Europa” a Rusiei și a rămas capitală până în 1918, când bolșevicii au mutat capitala înapoi la Moscova. Astăzi este al doilea oraș al Rusiei, cu peste 5 milioane de locuitori, și este faimos pentru Ermitaj și pentru nopțile albe de vară.`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege Europa Orientală`,
      intro: `Limbi, clime și distanțe diferite: încearcă aceste chei de lectură.`,
      tabs: [
        {
          label: `🔤 Chirilica în 5 minute`,
          html: `<p>Ucraineana, rusa, belarusa și bulgara se scriu cu <b>alfabetul chirilic</b>, născut în secolul al IX-lea de la misionarii Chiril și Metodiu (și de la elevii lor), pornind mai ales de la alfabetul grecesc. Unele litere sunt „prietene”, altele „înșelătoare”:</p>
<table>
<tr><th>Litera</th><th>Sunetul</th><th>Atenție!</th></tr>
<tr><td>А, К, М, О, Т</td><td>a, k, m, o, t</td><td>ca în română</td></tr>
<tr><td>В</td><td>v</td><td>seamănă cu un B, dar este un V</td></tr>
<tr><td>Н</td><td>n</td><td>seamănă cu un H, dar este un N</td></tr>
<tr><td>Р</td><td>r</td><td>seamănă cu un P, dar este un R</td></tr>
<tr><td>С</td><td>s</td><td>seamănă cu un C, dar este un S</td></tr>
<tr><td>Д, Л, П</td><td>d, l, p</td><td>derivă din Δ, Λ, Π grecești</td></tr>
</table>
<p>Încearcă să citești: <b>МОСКВА</b> (M-O-S-K-V-A = Moskva, Moscova) și <b>КИЇВ</b> (Kîiv).</p>`
        },
        {
          label: `🌡️ De ce este atât de frig?`,
          html: `<p>Marea funcționează ca un <b>calorifer</b> care se încălzește încet vara și redă căldura încet iarna. Uscatul, în schimb, este ca o <b>tigaie</b>: se încălzește și se răcește repede.</p>
<p>Europa Occidentală primește vânturile umede și calde dinspre Atlantic. Cu cât mergi mai spre est, cu atât acele vânturi se „consumă” și predomină tigaia: veri calde, ierni geroase. Iată mediile din ianuarie, aproximativ la aceeași latitudine (52-55° N):</p>
<table>
<tr><th>Orașul</th><th>Distanța față de Atlantic</th><th>Media din ianuarie</th></tr>
<tr><td>Dublin</td><td>pe ocean</td><td>circa +5 °C</td></tr>
<tr><td>Berlin</td><td>medie</td><td>circa +1 °C</td></tr>
<tr><td>Moscova</td><td>foarte departe</td><td>circa -6 °C</td></tr>
</table>`
        },
        {
          label: `🗣️ Română și italiană`,
          html: `<p>Româna este rudă apropiată cu italiana: multe cuvinte se înțeleg pe loc!</p>
<table>
<tr><th>Italiană</th><th>Română</th></tr>
<tr><td>casa</td><td>casă</td></tr>
<tr><td>lupo</td><td>lup</td></tr>
<tr><td>latte</td><td>lapte</td></tr>
<tr><td>notte</td><td>noapte</td></tr>
<tr><td>scuola</td><td>școală</td></tr>
<tr><td>grazie</td><td>mulțumesc</td></tr>
</table>
<p>Atenție la surprize: „grazie” (mulțumesc) vine dintr-o altă rădăcină, iar articolul hotărât se pune <b>după</b> substantiv în română: <i>lupul</i> = il lupo, <i>casa</i> = la casa. Dacă ai colegi italieni sau care învață italiana, cere-le să-ți citească aceste cuvinte!</p>`
        },
        {
          label: `🌍 Pe glob`,
          html: `<p>Rotește globul: găsește capitalele și urmărește Transsiberianul de la Moscova până la Pacific. Observă cât de mică este Europa în comparație cu Rusia asiatică!</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 44.43, lon: 26.1, label: `București`, color: `#2563eb` },
              { lat: 47.01, lon: 28.86, label: `Chișinău`, color: `#eab308` },
              { lat: 50.45, lon: 30.52, label: `Kiev (Kîiv)`, color: `#0ea5e9` },
              { lat: 55.76, lon: 37.62, label: `Moscova`, color: `#ef4444` },
              { lat: 56.84, lon: 60.6, label: `Ekaterinburg (Urali)`, color: `#f97316` },
              { lat: 55.03, lon: 82.92, label: `Novosibirsk`, color: `#f97316` },
              { lat: 52.29, lon: 104.3, label: `Irkutsk (Lacul Baikal)`, color: `#f97316` },
              { lat: 43.12, lon: 131.89, label: `Vladivostok`, color: `#ef4444` }
            ],
            routes: [{ points: [3, 4, 5, 6, 7], color: `#dc2626` }]
          }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta Europei Orientale`,
      nodes: [
        { id: `pianura`, label: `Câmpia Est-Europeană`, x: 50, y: 6, color: `#65a30d`, html: `Cea mai vastă câmpie a Europei, de la Polonia până la Urali.`, why: `Este un vechi soclu de roci foarte stabile („platforma rusă”), acoperit de sedimente; ghețarii glaciațiunilor au netezit-o și mai mult.` },
        { id: `clima`, label: `Climă continentală`, x: 18, y: 25, color: `#0ea5e9`, html: `Ierni geroase, veri calde, amplitudine termică mare.`, why: `Distanța față de Atlantic anulează efectul îmblânzitor al mării; iar în câmpie, fără munți care să facă bariere, aerul rece arctic coboară liber spre sud.` },
        { id: `fasce`, label: `Tundră, taiga, stepă`, x: 18, y: 55, color: `#166534`, html: `Fâșii de vegetație de la nord la sud.`, why: `Vegetația depinde mai ales de temperatură și precipitații: odată cu latitudinea se schimbă cantitatea de lumină și căldură care vine de la Soare.` },
        { id: `terranera`, label: `Pământ negru (cernoziom)`, x: 50, y: 40, color: `#3f3f46`, html: `Sol foarte fertil din stepele Ucrainei și ale sudului Rusiei.`, why: `Timp de mii de ani ierburile stepei au crescut și au murit, acumulând humus; iernile reci le încetinesc descompunerea, deci solul s-a îmbogățit în materie organică.` },
        { id: `granaio`, label: `Hambarul Europei`, x: 50, y: 70, color: `#eab308`, html: `Grâu, porumb, floarea-soarelui exportate în toată lumea.`, why: `Pământ negru + mari câmpii ușor de lucrat cu mașini + porturi la Marea Neagră = producții agricole uriașe de exportat.` },
        { id: `fiumi`, label: `Mari râuri`, x: 82, y: 25, color: `#2563eb`, html: `Volga, Nipru, Dunărea, Don.`, why: `Într-o câmpie enormă și puțin înclinată, râurile devin lungi și lente: perfecte pentru navigație, încât au fost primele „drumuri” ale Rusiei medievale.` },
        { id: `lingue`, label: `Limbi slave și romanice`, x: 82, y: 55, color: `#a855f7`, html: `Rusă, ucraineană, belarusă (slave, în chirilică); română (neolatină).`, why: `Popoarele slave s-au răspândit în regiune la începutul Evului Mediu; Dacia, în schimb, fusese provincie romană (106-271 d.Hr.) și a păstrat o limbă latină, înconjurată de limbi slave și de maghiară.` },
        { id: `storia`, label: `Imperii și independențe`, x: 82, y: 85, color: `#7f1d1d`, html: `Imperiul Rus, URSS, apoi independența Ucrainei, Moldovei, țărilor baltice (1991); război în Ucraina din 2014 și pe scară largă din 2022.`, why: `O câmpie fără granițe naturale este ușor de traversat pentru armate: secole la rând imperii diferite și-au disputat aceste pământuri. Prăbușirea URSS în 1991 a creat state noi, cu probleme de granițe și de minorități încă deschise.` },
        { id: `risorse`, label: `Petrol și gaze`, x: 18, y: 85, color: `#f97316`, html: `Rusia este printre primii producători mondiali.`, why: `În subsolul Siberiei, al Uralilor și al regiunii Volga s-au acumulat, în milioane de ani, rămășițe de organisme transformate în hidrocarburi. Gazoductele și oleoductele le duc în Europa și în Asia.` }
      ],
      edges: [
        [`pianura`, `clima`, `lasă să treacă aerul arctic`],
        [`clima`, `fasce`, `determină`],
        [`fasce`, `terranera`, `în stepă se naște`],
        [`terranera`, `granaio`, `face din Ucraina`],
        [`pianura`, `fiumi`, `găzduiește`],
        [`fiumi`, `granaio`, `transportă grâul`],
        [`pianura`, `storia`, `ușor de invadat`],
        [`lingue`, `storia`, `povestesc`],
        [`risorse`, `storia`, `interese economice`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: Ucraina și Rusia`,
      questions: [
        { type: `mc`, q: `De ce este numită Ucraina „hambarul Europei”?`, options: [`Pentru marile ei depozite`, `Pentru pământul negru foarte fertil și marile culturi de cereale`, `Pentru că importă mult grâu`], answer: 1, explain: `Cernoziomul și vastele câmpii permit recolte uriașe.` },
        { type: `mc`, q: `Unde se varsă Volga?`, options: [`În Marea Neagră`, `În Marea Baltică`, `În Marea Caspică`], answer: 2, explain: `În Marea Caspică, cel mai mare lac din lume.` },
        { type: `tf`, q: `Cea mai mare parte a locuitorilor Rusiei trăiește în partea europeană.`, answer: true, explain: `Circa trei sferturi, deși partea europeană reprezintă doar un sfert din teritoriu.` }
      ]
    }
  ],
  glossary: [
    { t: `Câmpia Est-Europeană`, d: `Marea câmpie a Europei Orientale, numită și câmpia rusă.` },
    { t: `Climă continentală`, d: `Climă cu ierni foarte reci și veri calde, tipică zonelor îndepărtate de mare.` },
    { t: `Amplitudine termică`, d: `Diferența dintre temperatura cea mai ridicată și cea mai scăzută într-o perioadă (zi sau an).` },
    { t: `Tundră`, d: `Mediu rece fără copaci, cu mușchi și licheni, aproape de Cercul polar arctic.` },
    { t: `Taiga`, d: `Imensă pădure de conifere din regiunile reci ale emisferei nordice.` },
    { t: `Stepă`, d: `Vastă pajiște fără copaci, cu veri calde și uscate.` },
    { t: `Cernoziom (pământ negru)`, d: `Sol închis la culoare și foarte fertil, bogat în humus, tipic stepelor.` },
    { t: `Alfabetul chirilic`, d: `Alfabet folosit pentru rusă, ucraineană, belarusă, bulgară, sârbă și alte limbi.` },
    { t: `Limbă neolatină`, d: `Limbă derivată din latină, ca italiana, româna, franceza, spaniola.` },
    { t: `Țară candidată`, d: `Stat care așteaptă oficial să intre în Uniunea Europeană, precum Republica Moldova și Ucraina.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Care munți marchează granița dintre Europa și Asia?`, options: [`Carpații`, `Uralii`, `Alpii`], answer: 1, explain: `Uralii, în Rusia.` },
      { type: `text`, q: `Care este capitala României?`, answer: [`bucuresti`, `bucurești`], explain: `București.` },
      { type: `mc`, q: `De ce se vorbește în România o limbă neolatină?`, options: [`Din cauza comerțului cu Spania`, `Pentru că Dacia a fost cucerită și romanizată de romani`, `Din cauza unei legi moderne`], answer: 1, explain: `Traian a cucerit Dacia în anul 106 d.Hr.` },
      { type: `mc`, q: `Între ce râuri se află Republica Moldova?`, options: [`Prut și Nistru`, `Volga și Don`, `Rin și Dunăre`], answer: 0, explain: `Prutul la vest, Nistrul la est.` },
      { type: `tf`, q: `Ucraina este cel mai mare stat aflat în întregime în Europa.`, answer: true, explain: `Circa 603.500 km²; Rusia este mai mare, dar în mare parte în Asia.` },
      { type: `order`, q: `Pune în ordine fâșiile de vegetație de la NORD la SUD.`, items: [`Tundră`, `Taiga`, `Pădure mixtă`, `Stepă`], explain: `De la frigul Arcticii la pajiștile calde de lângă Marea Neagră.` },
      { type: `mc`, q: `Ce este cernoziomul?`, options: [`Un vânt rece`, `Un sol negru și foarte fertil`, `Un munte`], answer: 1, explain: `„Pământul negru” bogat în humus al stepelor.` },
      { type: `num`, q: `Cam câți kilometri are Transsiberianul?`, answer: 9289, tol: 300, unit: `km`, explain: `9.289 km de la Moscova la Vladivostok.` },
      { type: `mc`, q: `Care lac este cel mai mare din Europa?`, options: [`Ladoga`, `Balaton`, `Lacul Garda`], answer: 0, explain: `Ladoga, în Rusia, circa 17.700 km².` },
      { type: `mc`, q: `Ce alfabet se folosește pentru a scrie ucraineana și rusa?`, options: [`Latin`, `Grecesc`, `Chirilic`], answer: 2, explain: `Alfabetul chirilic.` },
      { type: `text`, q: `Ce oraș a întemeiat Petru cel Mare în 1703 la Marea Baltică? (Sankt …)`, answer: [`sankt petersburg`, `sankt-petersburg`, `petersburg`, `sankt peterburg`], explain: `Sankt Petersburg, capitala Rusiei din 1712 până în 1918.` },
      { type: `tf`, q: `România face parte din Uniunea Europeană din 2007.`, answer: true, explain: `Împreună cu Bulgaria, în 2007.` }
    ]
  }
});

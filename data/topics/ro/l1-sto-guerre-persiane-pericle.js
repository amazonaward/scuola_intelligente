TOPIC('ro', {
  id: "l1-sto-guerre-persiane-pericle",
  title: "Războaiele medice și epoca lui Pericle",
  intro: "În <b>490 î.Hr.</b> o mică armată de cetățeni atenieni a înfruntat la Marathon trupele celui mai mare imperiu al lumii și le-a învins. Zece ani mai târziu, la Salamina, o flotă greacă a distrus-o pe cea a lui Xerxes. A fost momentul în care o mână de cetăți libere a salvat Occidentul de dominația unui rege absolut: sau cel puțin așa au povestit grecii. Din acea victorie s-a născut <b>epoca de aur a Atenei</b>, cu <b>Pericle</b>, cea mai avansată democrație a Antichității, Partenonul, teatrul și filosofia. Dar însăși puterea Atenei a declanșat războiul cu Sparta, care a dus-o la ruină.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Imperiul persan și răscoala cetăților ioniene",
      html: `<p>În secolul al VI-lea î.Hr. <b>perșii</b>, conduși de <b>Cirus cel Mare</b> (559-530 î.Hr.), au creat cel mai vast imperiu văzut vreodată: din Marea Egee până în India, cuprinzând Babilonul, Lidia și Egiptul (cucerit de Cambise în 525 î.Hr.). Sub <b>Darius I</b> (522-486 î.Hr.) imperiul a fost împărțit în <b>satrapii</b> guvernate de satrapi, legate prin <b>Drumul Regal</b>, cu stații de poștă; perșii respectau limbile și religiile popoarelor supuse, dar cereau <b>tribut</b> și soldați.</p>
<p><b>Cetățile grecești din Asia Mică</b> (Ionia: Milet, Efes, Focea) erau supuse perșilor. În <b>499 î.Hr.</b> ele s-au răsculat (<b>răscoala ionică</b>), iar <b>Atena</b> și <b>Eretria</b> au trimis câteva nave în ajutor. Perșii au înăbușit răscoala, distrugând Miletul (494 î.Hr.), iar Darius a hotărât să pedepsească cele două cetăți «rebele» din Grecia continentală. Pentru perși era o chestiune de ordine imperială; pentru greci avea să devină lupta pentru libertate.</p>`
    },
    {
      type: "text",
      title: "2. Primul război medic și Marathon (490 î.Hr.)",
      html: `<p>În <b>490 î.Hr.</b> o flotă persană a debarcat în câmpia <b>Marathonului</b>, la circa 40 km de Atena, după ce distrusese Eretria. Atenienii, conduși de strategul <b>Miltiade</b>, au aliniat circa 10.000 de hopliți (ajutați de o mie de plateeni) împotriva unor forțe persane estimate la multe mii. Sparta, din motive religioase, a ajuns târziu.</p>
<p><b>Falanga</b> greacă, cu platoșe de bronz, scuturi și lănci lungi, a atacat în fugă, întărind aripile și încercuind centrul persan. A fost o victorie zdrobitoare: perșii au pierdut circa 6400 de oameni, atenienii 192. Legenda spune că un mesager, <b>Filipide</b>, a alergat până la Atena ca să anunțe «Am învins!» și a murit de oboseală (de aici <b>maratonul</b> de 42,195 km). Istoricul Herodot povestește însă că Filipide a alergat la Sparta ca să ceară ajutor înainte de bătălie, circa 240 km în două zile.</p>
<p>După Marathon, Darius a pregătit o nouă expediție, dar a murit în 486 î.Hr.</p>`
    },
    {
      type: "3d",
      title: "Hartă 3D: de la războaiele medice la războiul peloponeziac",
      scene: "spacetime",
      caption: "Baza este harta Mediteranei orientale, înălțimea este timpul (500-400 î.Hr.). Atinge evenimentele: săgețile leagă cauzele de efecte.",
      options: {
        lat: [33, 42],
        lon: [14, 30],
        years: [-500, -400],
        places: [
          { lat: 37.97, lon: 23.72, label: "Atena" },
          { lat: 37.08, lon: 22.43, label: "Sparta" },
          { lat: 37.53, lon: 27.28, label: "Milet" },
          { lat: 37.07, lon: 15.29, label: "Siracuza" }
        ],
        events: [
          { id: "ionica", lat: 37.53, lon: 27.28, year: -499, label: "Răscoala ionică", html: "Cetățile grecești din Asia se răscoală împotriva perșilor. Atena și Eretria trimit nave: este pretextul războiului.", causes: [] },
          { id: "maratona", lat: 38.15, lon: 23.96, year: -490, label: "Marathon", html: "Atenienii lui Miltiade înfrâng debarcarea persană: 192 de atenieni morți față de circa 6400 de perși. Victoria armatei de cetățeni.", causes: ["ionica"] },
          { id: "termopili", lat: 38.8, lon: 22.54, year: -480, label: "Termopile", html: "August 480 î.Hr.: Leonida, cu 300 de spartiați și câteva mii de aliați, oprește trei zile armata lui Xerxes, apoi este încercuit și moare împreună cu oamenii săi.", causes: ["maratona"] },
          { id: "atene480", lat: 37.97, lon: 23.72, year: -480, label: "Atena evacuată și incendiată", html: "Perșii ocupă Atena și incendiază Acropola. La sfatul lui Temistocle, atenienii se refugiaseră pe nave și la Salamina.", causes: ["termopili"] },
          { id: "salamina", lat: 37.95, lon: 23.5, year: -480, label: "Salamina", html: "Septembrie 480 î.Hr.: flota greacă a lui Temistocle atrage navele persane în strâmtoarea Salamina și le distruge: Xerxes se întoarce în Asia.", causes: ["atene480"] },
          { id: "platea", lat: 38.22, lon: 23.27, year: -479, label: "Plateea și Mycale", html: "În 479 î.Hr. grecii câștigă la Plateea (armata) și la Mycale (flota): amenințarea persană s-a încheiat.", causes: ["salamina"] },
          { id: "delo", lat: 37.4, lon: 25.27, year: -478, label: "Liga de la Delos", html: "În 478-477 î.Hr. Atena conduce la Delos o ligă de cetăți pentru a continua războiul: fiecare cetate plătește tribut sau furnizează nave. În curând Atena o transformă într-un imperiu.", causes: ["platea"] },
          { id: "partenone", lat: 37.97, lon: 23.72, year: -447, label: "Partenonul", html: "Cu Pericle încep (447 î.Hr.) lucrările la Partenon, pe Acropola, finanțat în parte din tezaurul ligii (mutat la Atena în 454).", causes: ["delo"] },
          { id: "peloponneso", lat: 37.08, lon: 22.43, year: -431, label: "Războiul peloponeziac", html: "În 431 î.Hr. izbucnește războiul dintre Atena și Sparta (cu Liga peloponeziacă): va dura până în 404 î.Hr.", causes: ["partenone"] },
          { id: "sicilia", lat: 37.07, lon: 15.29, year: -413, label: "Dezastrul din Sicilia", html: "Expediția ateniană la Siracuza (415-413 î.Hr.) se termină cu distrugerea flotei și a armatei.", causes: ["peloponneso"] },
          { id: "egospotami", lat: 40.35, lon: 26.55, year: -405, label: "Aigospotamoi", html: "În 405 î.Hr. flota spartană, finanțată de perși, o distruge pe cea ateniană. Atena se predă în 404.", causes: ["sicilia"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Al doilea război medic: Termopile și Salamina (480-479 î.Hr.)",
      html: `<p>În <b>480 î.Hr.</b> noul rege <b>Xerxes</b> a invadat Grecia cu o armată imensă (cifrele lui Herodot, peste un milion, sunt exagerate: poate 100.000-200.000 de oameni) și cu o mare flotă. Cetățile grecești, deși divizate, s-au aliat sub conducerea Spartei pentru armata de uscat și a Atenei pentru flotă.</p>
<ul>
<li><b>Termopile</b>: în trecătoarea îngustă, regele spartan <b>Leonida</b> rezistă trei zile; trădat de un grec care le arată perșilor o potecă, este încercuit și moare împreună cu oamenii săi. Este un sacrificiu care întărește rezistența.</li>
<li><b>Atena evacuată</b>: atenienii părăsesc orașul, care este jefuit și incendiat.</li>
<li><b>Salamina</b> (septembrie 480 î.Hr.): <b>Temistocle</b>, strateg atenian, pusese să se construiască o mare flotă de <b>trireme</b> (nave de război cu trei rânduri de vâsle) cu veniturile minelor de argint de la Laurion. El îi atrage pe perși în strâmtoare, unde navele mai mari se încurcă între ele. A fost o victorie hotărâtoare.</li>
<li><b>Plateea și Mycale</b> (479 î.Hr.): victorii terestră și navală care eliberează Grecia.</li>
</ul>
<p>Pentru greci a fost victoria <b>libertății</b> cetățenilor asupra despotismului unui rege, așa cum a povestit-o <b>Herodot</b>, «părintele istoriei», în <i>Istorii</i>. Dar ține minte că și istoria perșilor este scrisă de învingători: pentru ei era o expediție marginală într-o provincie îndepărtată.</p>`
    },
    {
      type: "svg",
      title: "Bătălia de la Salamina (schemă)",
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
<text x="120" y="110" font-size="15" fill="#1e3a8a" font-weight="bold">Flota greacă</text>
<text x="400" y="260" font-size="15" fill="#7f1d1d" font-weight="bold">Flota persană</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#0f172a">Schemă simplificată: în strâmtoare navele persane nu pot manevra.</text>
</svg>`,
      caption: "La Salamina navele grecești, mai mici și mai agile, au folosit spațiul îngust împotriva flotei persane, mai numeroase."
    },
    {
      type: "quiz",
      title: "Mini-test: războaiele medice",
      questions: [
        { type: "mc", q: "Cine i-a condus pe atenieni la Marathon?", options: ["Miltiade", "Pericle", "Leonida"], answer: 0, explain: "Strategul Miltiade, în 490 î.Hr." },
        { type: "mc", q: "În ce bătălie navală i-a învins Temistocle pe perși?", options: ["Salamina", "Mycale", "Aigospotamoi"], answer: 0, explain: "La Salamina, septembrie 480 î.Hr." },
        { type: "tf", q: "Leonida și oamenii săi au apărat trecătoarea Termopile timp de luni de zile.", answer: false, explain: "Au rezistat trei zile, apoi au fost încercuiți." },
        { type: "text", q: "Cum se numește «părintele istoriei», care a povestit războaiele medice?", answer: ["herodot", "herodot din halicarnas"], explain: "Herodot din Halicarnas." }
      ]
    },
    {
      type: "text",
      title: "4. De la Liga de la Delos la imperiul Atenei",
      html: `<p>După victorie, în <b>478-477 î.Hr.</b>, Atena a întemeiat <b>Liga de la Delos</b> (de la Delos, unde era păstrat tezaurul) cu sute de cetăți din Egeea. Fiecare aliat furniza nave sau plătea un <b>tribut</b> (<i>phoros</i>). Atena comanda flota și folosea banii în avantajul ei: în <b>454 î.Hr.</b> tezaurul a fost mutat la Atena, iar cei care voiau să părăsească liga (ca Naxos și Thasos) erau supuși cu forța. Liga a devenit un adevărat <b>imperiu maritim</b>, care a îmbogățit Atena și a făcut-o temută de Sparta.</p>
<p>Faptul că o putere democratică asuprea alte cetăți libere este un exemplu de contradicție pe care o remarcau deja grecii: libertatea cetățenilor Atenei se baza pe tributul aliaților și pe munca sclavilor.</p>`
    },
    {
      type: "text",
      title: "5. Pericle și democrația ateniană",
      html: `<p><b>Pericle</b> (circa 495-429 î.Hr.), aristocrat, dar conducător al partidului popular, a fost reales <b>strateg</b> (comandant militar, una dintre puținele funcții alese) aproape în fiecare an din 443 până în 429 î.Hr. Istoricul <b>Tucidide</b> spunea că Atena era «o democrație cu numele, dar de fapt guvernarea primului cetățean».</p>
<ul>
<li><b>Eclesia</b>: adunarea tuturor cetățenilor bărbați adulți (circa 30-40.000), care decide asupra războiului, păcii, legilor, tributurilor; votul se dă prin ridicarea mâinii.</li>
<li><b>Boule celor 500</b>: consiliu ales prin tragere la sorți, care pregătește propunerile; pe rând, câte o secțiune a lui guvernează în fiecare zi.</li>
<li><b>Heliaia</b>: marile tribunale populare, cu jurați trași la sorți (chiar 501).</li>
<li><b>Tragerea la sorți</b>: aproape toate funcțiile sunt atribuite prin tragere la sorți, pentru că toți sunt considerați la fel de capabili.</li>
<li><b>Misthós</b>: Pericle introduce o plată pentru cei care îndeplinesc funcții publice, astfel încât și cei săraci să poată participa fără să piardă bani.</li>
</ul>
<p>În celebrul <b>Discurs funebru</b> închinat celor căzuți (431 sau 430 î.Hr.), relatat de Tucidide, Pericle spune: «constituția noastră se numește democrație pentru că puterea este în mâinile nu ale câtorva, ci ale celor mai mulți». Dar nu uită limitele: în afara puterii rămâneau <b>femeile, sclavii, metecii</b> (străinii care locuiau în cetate): circa 3/4 din populație.</p>`
    },
    {
      type: "text",
      title: "6. Epoca de aur: artă, teatru, gândire",
      html: `<p>Cu tributurile ligii, Atena devine centrul cultural al lumii grecești.</p>
<ul>
<li><b>Arhitectura</b>: pe Acropola, reconstruită după incendiul persan, se ridică <b>Partenonul</b> (447-432 î.Hr.), templul Atenei, opera lui Ictinos și Callicrates, cu sculpturi conduse de <b>Fidias</b>. Este un model de armonie și proporție (ordinul doric).</li>
<li><b>Teatrul</b>: născut la serbările lui Dionysos, cu tragediile lui <b>Eschil</b> (<i>Perșii</i>), <b>Sofocle</b> (<i>Oedip rege</i>, <i>Antigona</i>) și <b>Euripide</b> (<i>Medeea</i>), și comediile lui <b>Aristofan</b>. Teatrul era o experiență civică: cetățenii discutau despre dreptate și putere.</li>
<li><b>Istoria</b>: <b>Herodot</b> și <b>Tucidide</b> (autorul unei istorii a războiului peloponeziac întemeiată pe dovezi și interviuri, fără intervenții divine).</li>
<li><b>Filosofia</b>: <b>sofiștii</b> predau arta cuvântului; <b>Socrate</b> (469-399 î.Hr.) îi interoghează pe cetățeni despre virtute și dreptate («știu că nu știu nimic»).</li>
<li><b>Medicina</b>: <b>Hipocrate</b> din Cos, care caută cauze naturale ale bolilor.</li>
</ul>
<p>Atena avea în acea perioadă circa 250-300.000 de locuitori (cu Attica), cu un port, Pireu, printre cele mai active din Mediterana.</p>`
    },
    {
      type: "decision",
      title: "Atena, 431 î.Hr.: înfruntăm Sparta pe câmp sau ne închidem în Zidurile Lungi?",
      html: `<p>Ești Pericle. Sparta și Liga peloponeziacă sunt pe cale să invadeze Attica cu o armată de hopliți mult mai puternică decât a ta. Dar Atena are cea mai puternică <b>flotă</b> din Mediterana și <b>Zidurile Lungi</b> care leagă orașul de portul Pireu, de unde poate primi grâu pe mare.</p>`,
      question: "Ce strategie alegi?",
      options: [
        { label: "Îi înfrunt pe spartani în luptă deschisă, în afara zidurilor.", outcome: "Sparta are cea mai bună armată de uscat: Atena riscă o înfrângere decisivă chiar de la început." },
        { label: "Las toată populația să intre în ziduri, las câmpurile să fie devastate și lovesc dinspre mare cu flota.", outcome: "Este o strategie rezonabilă: Atena nu poate fi înfometată cât timp controlează marea. Dar aglomerația din oraș va avea un preț teribil: ciuma." },
        { label: "Cer imediat pace, cedând conducerea Egeei.", outcome: "Atena și-ar pierde imperiul și tributurile: bogăția și puterea ei." }
      ],
      answer: 1,
      explain: "Pericle a ales <b>strategia defensivă</b>: adăpost în ziduri și lovituri pe mare. În 430 î.Hr. o <b>ciumă</b> a izbucnit în orașul supraaglomerat și a ucis poate o treime din populație, inclusiv pe Pericle însuși (429 î.Hr.). Fără el, Atena a urmat lideri mai impulsivi."
    },
    {
      type: "text",
      title: "7. Războiul peloponeziac (431-404 î.Hr.)",
      html: `<p>Creșterea Atenei i-a speriat pe Sparta și pe aliații ei (în special Corintul). Tucidide a scris că «adevărata cauză a fost creșterea puterii ateniene și frica pe care aceasta o inspira Spartei». Războiul se împarte în faze:</p>
<ul>
<li><b>Războiul arhidamic</b> (431-421 î.Hr.): invazii spartane în Attica, incursiuni ale flotei ateniene, ciumă (430-426). Se încheie cu <b>pacea lui Nicias</b> (421 î.Hr.), fragilă.</li>
<li><b>Expediția din Sicilia</b> (415-413 î.Hr.): împinși de ambițiosul <b>Alcibiade</b>, atenienii atacă Siracuza; expediția se încheie cu o catastrofă: flota distrusă, mii de prizonieri.</li>
<li><b>Faza finală</b> (413-404 î.Hr.): Sparta, finanțată de Persia, construiește o flotă; în <b>405 î.Hr.</b>, la <b>Aigospotamoi</b>, o distruge pe cea ateniană. În <b>404 î.Hr.</b> Atena se predă: ziduri dărâmate, imperiu pierdut. Pentru scurt timp guvernează o oligarhie filospartană, <b>Cei Treizeci de Tirani</b>, apoi democrația este restaurată (403 î.Hr.).</li>
</ul>
<p><b>Consecințe</b>: întreaga Grecie iese epuizată, cu cetăți devastate, războaie civile și o hegemonie spartană puțin iubită. În 399 î.Hr. Socrate a fost condamnat la moarte sub acuzația de impietate și de coruperea tinerilor, într-un climat de frică și ranchiună. Cetățile, slăbite, vor fi cucerite în secolul al IV-lea de regele Macedoniei, Filip al II-lea.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: vocea învingătorilor și a învinșilor",
      html: `<p>Aproape tot ce știm despre războaiele medice vine de la <b>Herodot</b>, un grec, și din textele ateniene. Perșii au lăsat puține relatări scrise despre eveniment. Ce întrebări își pune un istoric?</p>
<ol>
<li><b>Cine povestește și de ce?</b> Herodot vrea să slăvească faptele grecilor și să explice conflictul dintre greci și barbari.</li>
<li><b>Ce știm din alte surse?</b> Inscripții persane (precum cea a lui Darius de la Behistun) și săpăturile arată că imperiul era foarte bine organizat și tolerant; pentru perși războiul a fost o expediție de frontieră.</li>
<li><b>Ce este exagerat?</b> Cifrele armatei lui Xerxes, cu siguranță umflate.</li>
</ol>
<p>O poveste spusă doar de o parte este întotdeauna incompletă: pentru a înțelege sunt necesare surse diferite.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: maratonul de azi",
      html: `<p>Cursa de <b>42,195 km</b> s-a născut dintr-o idee a francezului Michel Bréal pentru primele Jocuri Olimpice moderne de la Atena din <b>1896</b>, care a vrut să amintească legenda mesagerului. Distanța oficială a fost fixată abia în 1921, după măsura maratonului de la Londra din 1908. Între Marathon și Atena sunt circa 40 km: legenda lui Filipide este, așadar, mai degrabă simbolică decât istorică, dar continuă să ne inspire.</p>
<p>Un alt exemplu de moștenire: cuvântul <b>«democrație»</b>. Astăzi în școlile noastre alegem reprezentanți ai clasei; la Atena toți cetățenii votau direct în adunare.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Partenonul vopsit",
      html: `<p>Astăzi Partenonul are culoarea deschisă a marmurei, dar în Antichitate statuile și frizele erau <b>vopsite în culori vii</b> (albastru, roșu, galben). Timpul a șters pigmenții. În 1687, în timpul războiului dintre Veneția și turci, o bombă venețiană a făcut să explodeze depozitul de praf de pușcă otoman instalat în templu, distrugându-i o mare parte din acoperiș. Celebrele marmure ale frizei, duse la Londra în 1801-1812 de Lordul Elgin, se află astăzi la British Museum, iar Grecia cere restituirea lor.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Ciuma povestită de cel care a trăit-o",
      html: `<p>Tucidide, care s-a îmbolnăvit de ciumă și a supraviețuit, a descris simptomele cu o precizie clinică atât de mare, încât medicii moderni au putut formula ipoteze despre boală (poate tifos exantematic sau febră tifoidă; întrebarea rămâne deschisă). Scopul lui: «să lase o avere pentru totdeauna». «Istoria războiului peloponeziac» este considerată primul exemplu de istoriografie științifică.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege Grecia clasică",
      intro: "Evenimente, personaje și idei: încearcă să le privești cu alte instrumente.",
      tabs: [
        {
          label: "🏁 David și Goliat",
          html: `<p>Războaiele medice pot fi văzute ca o ciocnire între un <b>gigant</b> (imperiul persan, 20 de milioane de supuși) și niște <b>mici</b> (cetățile grecești, câteva sute de mii de cetățeni). Dar atenție: nu era o poveste cu buni și răi.</p>
<ul>
<li>Grecii au câștigat pentru că luptau <b>aproape de casă</b>, pe teren îngust și muntos, cu o tactică potrivită (falangă, trireme).</li>
<li>Perșii erau numeroși, dar aveau probleme de aprovizionare și de coordonare între trupe ale unor popoare diferite.</li>
<li>Pentru Atena, victoria a avut efecte politice: cetățenii-vâslași ai navelor au cerut mai multă pondere politică, iar democrația s-a extins.</li>
</ul>`
        },
        {
          label: "📅 Axa timpului",
          html: `<p>Parcurge marile evenimente din 499 până în 399 î.Hr.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -499, label: "Răscoala ionică", icon: "🔥" },
              { year: -490, label: "Marathon", icon: "🏃" },
              { year: -480, label: "Termopile și Salamina", icon: "⚓" },
              { year: -478, label: "Liga de la Delos", icon: "🤝" },
              { year: -447, label: "Începutul Partenonului", icon: "🏛️" },
              { year: -431, label: "Războiul peloponeziac", icon: "⚔️" },
              { year: -429, label: "Moartea lui Pericle", icon: "🕯️" },
              { year: -404, label: "Capitularea Atenei", icon: "🏳️" },
              { year: -399, label: "Moartea lui Socrate", icon: "🍷" }
            ]
          }
        },
        {
          label: "🗺️ Rotește globul",
          html: `<p>Rotește globul: locurile-cheie ale războaielor medice și ale războiului peloponeziac.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 37.97, lon: 23.72, label: "Atena", color: "#2563eb" },
              { lat: 38.15, lon: 23.96, label: "Marathon", color: "#ef4444" },
              { lat: 38.8, lon: 22.54, label: "Termopile", color: "#ef4444" },
              { lat: 37.95, lon: 23.5, label: "Salamina", color: "#ef4444" },
              { lat: 37.08, lon: 22.43, label: "Sparta", color: "#f97316" },
              { lat: 37.07, lon: 15.29, label: "Siracuza", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persepolis", color: "#7c3aed" }
            ],
            routes: [{ points: [6, 0, 1], color: "#7c3aed" }]
          }
        },
        {
          label: "🃏 Cartonașe de recapitulare",
          html: `<p>Întoarce cartonașele pentru a recapitula.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Marathon", back: "490 î.Hr.: victoria ateniană a lui Miltiade asupra perșilor" },
              { front: "Salamina", back: "480 î.Hr.: victoria navală a lui Temistocle" },
              { front: "Liga de la Delos", back: "Alianță condusă de Atena din 478 î.Hr., apoi imperiu" },
              { front: "Pericle", back: "Strateg, conducătorul democrației ateniene; Partenonul" },
              { front: "Aigospotamoi", back: "405 î.Hr.: flota spartană o distruge pe cea ateniană" },
              { front: "Misthos", back: "Plata pentru funcțiile publice, introdusă de Pericle" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de la victorie la căderea Atenei",
      nodes: [
        { id: "persia", label: "Imperiul persan", x: 50, y: 6, color: "#7c3aed", html: "Cel mai vast imperiu al vremii, cu Darius și Xerxes.", why: "Răscoala cetăților ioniene, sprijinită de Atena, l-a împins pe Darius să pedepsească Grecia și să-și consolideze frontiera de vest." },
        { id: "vittoria", label: "Victoria greacă", x: 25, y: 28, color: "#ef4444", html: "Marathon (490), Termopile și Salamina (480), Plateea (479).", why: "Grecii au câștigat pentru că luptau pe un teren favorabil lor, cu falangă și trireme, și cu motivația puternică de a-și apăra cetățile." },
        { id: "lega", label: "Liga de la Delos", x: 75, y: 28, color: "#f97316", html: "Alianță maritimă care devine imperiul Atenei.", why: "Atena avea cea mai puternică flotă: aliații au preferat să plătească tribut în loc să înarmeze nave. Așa Atena a devenit stăpâna Egeei." },
        { id: "democrazia", label: "Democrația lui Pericle", x: 20, y: 55, color: "#16a34a", html: "Adunare, tragere la sorți, plată pentru funcții.", why: "Vâslașii flotei, oameni săraci, contribuiseră la victorie: au cerut mai multe drepturi. Tributurile au finanțat plățile." },
        { id: "cultura", label: "Epoca de aur", x: 50, y: 55, color: "#eab308", html: "Partenon, teatru, filosofie, istorie.", why: "Bogăția și mândria pentru victorie au finanțat lucrări publice și au stimulat gândirea critică și discuția publică." },
        { id: "paura", label: "Frica de Sparta", x: 82, y: 55, color: "#0ea5e9", html: "Sparta și Corintul se tem de puterea ateniană.", why: "Tucidide vede în creșterea Atenei și în frica Spartei cauza profundă a războiului." },
        { id: "guerra", label: "Războiul peloponeziac", x: 50, y: 78, color: "#7c2d12", html: "431-404 î.Hr.: ciumă, Sicilia, Aigospotamoi.", why: "Războiul a fost lung și epuizant; greșelile strategice și ciuma au slăbit Atena, în timp ce perșii au finanțat Sparta." },
        { id: "crisi", label: "Criza polis-ului", x: 50, y: 96, color: "#334155", html: "Hegemonii instabile, războaie civile, ascensiunea Macedoniei.", why: "După război, nicio cetate nu a reușit să unească Grecia; slăbiciunea a deschis drumul lui Filip al II-lea al Macedoniei." }
      ],
      edges: [
        ["persia", "vittoria", "înfrântă de"],
        ["vittoria", "lega", "duce la"],
        ["lega", "democrazia", "finanțează"],
        ["democrazia", "cultura", "stimulează"],
        ["lega", "paura", "generează"],
        ["paura", "guerra", "declanșează"],
        ["cultura", "guerra", "nu împiedică"],
        ["guerra", "crisi", "duce la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: Pericle și războiul",
      questions: [
        { type: "mc", q: "Ce a construit Pericle pe Acropola?", options: ["Partenonul", "Colosseumul", "Zidurile Troiei"], answer: 0, explain: "Partenonul, templul Atenei (447-432 î.Hr.)." },
        { type: "mc", q: "Cine a câștigat războiul peloponeziac?", options: ["Sparta", "Atena", "Persia"], answer: 0, explain: "Sparta, cu ajutorul financiar al perșilor." },
        { type: "tf", q: "În timpul ciumei a murit și Pericle.", answer: true, explain: "A murit în 429 î.Hr." },
        { type: "order", q: "Pune în ordine.", items: ["Marathon", "Salamina", "Liga de la Delos", "Războiul peloponeziac"], explain: "490, 480, 478, 431 î.Hr." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Perșii</b>: imperiu foarte vast (Cirus, Darius, Xerxes); răscoala ionică (499 î.Hr.).</li>
<li>Primul război: <b>Marathon</b> (490, Miltiade). Al doilea: <b>Termopile</b> (Leonida) și <b>Salamina</b> (Temistocle) în 480; <b>Plateea</b> și <b>Mycale</b> (479).</li>
<li><b>Liga de la Delos</b> (478-477): Atena conduce alianța și creează un imperiu.</li>
<li><b>Pericle</b>: democrație directă cu plată pentru funcții; Partenonul; teatru, Herodot, Tucidide, Socrate.</li>
<li><b>Războiul peloponeziac</b> (431-404): Atena înfrântă de Sparta; criza cetăților.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Satrapie", d: "Provincie a imperiului persan, guvernată de un satrap." },
    { t: "Falangă", d: "Formație compactă de hopliți cu scut și lance." },
    { t: "Trirema", d: "Navă de război cu trei rânduri de vâslași." },
    { t: "Strateg", d: "Comandant militar atenian, funcție aleasă." },
    { t: "Liga de la Delos", d: "Alianță de cetăți din Egeea condusă de Atena (478-477 î.Hr.)." },
    { t: "Tribut", d: "Sumă plătită de un stat supus sau aliat." },
    { t: "Misthos", d: "Plată acordată cetățenilor pentru funcțiile publice." },
    { t: "Eclesia", d: "Adunarea cetățenilor Atenei." },
    { t: "Sofist", d: "Învățător de retorică și de cunoștințe practice." },
    { t: "Ciuma din Atena", d: "Epidemia din 430-426 î.Hr., din timpul războiului." },
    { t: "Hegemonie", d: "Supremația unei cetăți sau a unui stat asupra altora." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce a provocat intervenția persană în Grecia?", options: ["Sprijinul Atenei și al Eretriei pentru răscoala ionică", "Întemeierea Ligii de la Delos", "Jocurile Olimpice"], answer: 0, explain: "Atena și Eretria au ajutat cetățile răsculate." },
      { type: "mc", q: "Cine i-a condus pe greci la Salamina?", options: ["Temistocle", "Miltiade", "Alcibiade"], answer: 0, explain: "Strategul atenian Temistocle." },
      { type: "tf", q: "La Marathon au învins perșii.", answer: false, explain: "Au învins atenienii, în 490 î.Hr." },
      { type: "text", q: "Cum se numește nava de război greacă cu trei rânduri de vâsle?", answer: ["trirema", "triremă", "trireme"], explain: "Trirema." },
      { type: "mc", q: "Ce era Liga de la Delos?", options: ["O alianță de cetăți din Egeea condusă de Atena", "O alianță a Spartei", "O asociație de negustori"], answer: 0, explain: "Întemeiată în 478-477 î.Hr., a devenit un imperiu." },
      { type: "mc", q: "Ce măsură a lui Pericle le-a permis celor săraci să participe la viața politică?", options: ["O plată pentru funcțiile publice", "Abolirea sclaviei", "Votul femeilor"], answer: 0, explain: "Misthos-ul." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Marathon", "Termopile și Salamina", "Liga de la Delos", "Începutul Partenonului", "Războiul peloponeziac"], explain: "490, 480, 478, 447, 431 î.Hr." },
      { type: "mc", q: "Care este rezultatul războiului peloponeziac?", options: ["Sparta învinge, Atena își pierde zidurile și imperiul", "Atena învinge și cucerește Sparta", "Învinge Persia"], answer: 0, explain: "În 404 î.Hr. Atena se predă." },
      { type: "num", q: "În ce an î.Hr. a avut loc bătălia de la Marathon?", answer: 490, tol: 0, explain: "490 î.Hr." },
      { type: "tf", q: "Democrația ateniană era deschisă femeilor și sclavilor.", answer: false, explain: "Votau doar bărbații adulți cetățeni." },
      { type: "mc", q: "Ce a cauzat moartea lui Pericle?", options: ["Ciuma", "O bătălie", "Ostracismul"], answer: 0, explain: "A murit de ciumă în 429 î.Hr." }
    ]
  }
});

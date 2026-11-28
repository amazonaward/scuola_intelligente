TOPIC('ro', {
  id: "l1-geo-migrazioni",
  title: "Migrațiile",
  intro: "Oamenii s-au deplasat dintotdeauna: primii <i>Homo sapiens</i> au părăsit Africa acum zeci de mii de ani, iar astăzi în lume circa <b>280-300 de milioane</b> de persoane trăiesc într-o altă țară decât cea în care s-au născut. De ce se pleacă? Încotro? Ce se schimbă pentru cei care pleacă, pentru cei care ajung și pentru cei care rămân? Învățăm să deosebim termenii, cauzele, rutele și consecințele, cu date și nu cu sloganuri.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Cuvintele potrivite: cine este un migrant?",
      html: `<p>În limbajul de zi cu zi se folosesc ca sinonime cuvinte care au în realitate sensuri diferite, inclusiv juridice. A le deosebi este primul pas pentru a gândi corect.</p>
<ul>
<li><b>Migrant</b> (sau emigrant/imigrant): cel care se mută în alt loc pentru o perioadă semnificativă. <b>Emigrant</b> dacă îl privim din țara de plecare, <b>imigrant</b> din țara de sosire. Migrațiile sunt <b>interne</b> (în interiorul aceluiași stat, cum au fost deplasările din sudul spre nordul Italiei în anii '50-'60) sau <b>internaționale</b> (dintr-un stat în altul).</li>
<li><b>Migrant economic</b>: cel care pleacă pentru a găsi de lucru sau pentru a-și îmbunătăți condițiile de viață.</li>
<li><b>Refugiat</b>: potrivit <b>Convenției de la Geneva din 1951</b>, cel care se află în afara țării sale și nu poate sau nu vrea să se întoarcă din cauza fricii întemeiate de a fi persecutat pe motive de rasă, religie, naționalitate, apartenență la un grup social sau opinii politice. Are dreptul la <b>protecție internațională</b> și la principiul <b>nereturnării</b> (<i>non-refoulement</i>): nu poate fi trimis înapoi acolo unde își riscă viața.</li>
<li><b>Solicitant de azil</b>: cel care a cerut protecție și așteaptă răspunsul statului. Nu toți solicitanții de azil sunt recunoscuți ca refugiați.</li>
<li><b>Persoană strămutată intern</b> (<i>internally displaced person</i>): cel care este silit să-și părăsească locuința, dar rămâne în țara sa (adesea sunt majoritatea victimelor războaielor și inundațiilor).</li>
<li><b>Migrant neregulamentar</b>: cel care intră sau rămâne într-o țară fără documentele cerute. Regularitatea este o condiție juridică, nu o calitate a persoanei.</li>
</ul>
<p>Constituția italiană prevede dreptul de azil la <b>articolul 10</b>: străinul căruia i se împiedică în țara sa exercitarea efectivă a libertăților democratice garantate de Constituția italiană are dreptul de azil.</p>`
    },
    {
      type: "text",
      title: "2. De ce se migrează: factori de respingere și de atracție",
      html: `<p>În 1966 geograful Everett Lee a propus un model folosit și astăzi: alegerea de a migra apare din compararea <b>factorilor de respingere</b> (<i>push</i>, care îi fac pe oameni să părăsească locul de origine) cu <b>factorii de atracție</b> (<i>pull</i>, care atrag spre destinație), în prezența unor <b>obstacole</b> (distanță, costuri, legi, limbă).</p>
<ul>
<li><b>Respingere</b>: sărăcie și șomaj, războaie și persecuții, regimuri autoritare, dezastre naturale și <b>schimbare climatică</b> (secetă, deșertificare, creșterea nivelului mărilor), lipsa serviciilor (școli, sănătate).</li>
<li><b>Atracție</b>: loc de muncă și salarii mai mari, siguranță, libertate, studii, reîntregirea familiei, servicii și calitatea vieții.</li>
<li><b>Rețele sociale</b>: adesea se pleacă acolo unde sunt deja rude sau consăteni, care ajută să găsești locuință și muncă (<b>migrație în lanț</b>). De aceea italienii se concentrau în anumite cartiere din New York sau în anumite orașe argentiniene, iar astăzi comunitățile marocane sau chineze se stabilesc în zone precise.</li>
</ul>
<p><b>O idee greșită, dar răspândită</b>: cea mai mare parte a migranților <b>nu</b> este alcătuită din cei mai săraci dintre săraci. A emigra costă (călătorie, documente, uneori mii de euro), deci pleacă cei care au ceva resurse în plus. În plus, <b>cea mai mare parte a migranților africani se mută rămânând în Africa</b>, iar cei mai mulți refugiați din lume sunt găzduiți în țări cu venituri mici și medii, apropiate de a lor (Turcia, Iran, Columbia, Uganda, Pakistan), nu în Europa.</p>`
    },
    {
      type: "widget",
      title: "Activitate: respingere sau atracție?",
      widget: "classify",
      options: {
        groups: ["Factor de respingere", "Factor de atracție"],
        items: [
          ["💥 Război în țara de origine", 0],
          ["💼 Ofertă de muncă în străinătate", 1],
          ["🌵 Secetă și recolte pierdute", 0],
          ["🎓 Universitate prestigioasă", 1],
          ["👪 Rude deja emigrate", 1],
          ["🚫 Persecuții politice", 0],
          ["🏥 Sistem sanitar eficient", 1],
          ["📉 Șomaj foarte mare în rândul tinerilor", 0]
        ]
      },
      caption: "În realitate, orice alegere migratorie este aproape întotdeauna o combinație de mai mulți factori."
    },
    {
      type: "svg",
      title: "Cine migrează: marile cifre",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Din 100 de persoane din lume (aproximativ)</text>
<g>
<rect x="40" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="75" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="110" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="145" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="180" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="215" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="250" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="285" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="320" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="355" y="50" width="30" height="30" fill="#f97316" stroke="#9a3412"/>
</g>
<text x="40" y="110" font-size="15" fill="#111827">Aproape 96-97 din 100 de persoane trăiesc în țara în care s-au născut.</text>
<text x="40" y="136" font-size="15" fill="#9a3412" font-weight="bold">Circa 3-4 din 100 sunt migranți internaționali.</text>
<rect x="40" y="170" width="520" height="22" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="40" y="170" width="94" height="22" fill="#ef4444" stroke="#7f1d1d"/>
<text x="40" y="215" font-size="15" fill="#111827">Dintre ei (circa 1 din 3 sau 4): persoane care fug de războaie și persecuții.</text>
<text x="40" y="240" font-size="15" fill="#111827">Persoanele strămutate forțat în lume (inclusiv cele interne): peste 120 de milioane.</text>
<text x="40" y="270" font-size="14" fill="#6b7280">Estimări ONU / UNHCR (date rotunjite, actualizate în fiecare an).</text>
</svg>`,
      caption: "Numărul migranților (circa 3,6-3,7% din populația lumii) este mare în valori absolute, dar mic în procente: marea majoritate a oamenilor nu părăsește țara în care s-a născut."
    },
    {
      type: "quiz",
      title: "Mini-test: termeni și cauze",
      questions: [
        { type: "mc", q: "Cine este refugiat potrivit Convenției de la Geneva?", options: ["Cel care emigrează ca să găsească o muncă mai bună", "Cel care se află în afara țării sale din cauza fricii întemeiate de persecuție", "Cel care își schimbă orașul în propria țară"], answer: 1, explain: "Refugiatul fuge de persecuții pe motive de rasă, religie, naționalitate, grup social sau opinii politice." },
        { type: "mc", q: "Care dintre acestea este un factor de respingere?", options: ["O muncă bine plătită în străinătate", "Un război în țara de origine", "O universitate prestigioasă"], answer: 1, explain: "Războaiele îi împing pe oameni să părăsească locul de origine; celelalte sunt factori de atracție." },
        { type: "tf", q: "Cei mai mulți refugiați din lume sunt găzduiți în Europa.", answer: false, explain: "Cei mai mulți sunt găzduiți în țări cu venituri mici și medii, apropiate de cele de origine." }
      ]
    },
    {
      type: "text",
      title: "3. O istorie a deplasărilor",
      html: `<p>Migrațiile nu sunt un fenomen recent:</p>
<ul>
<li><b>Preistoria</b>: <i>Homo sapiens</i> se răspândește din Africa (circa 70-60.000 de ani în urmă migrațiile care au populat restul lumii) și ajunge pe toate continentele, cu excepția Antarcticii.</li>
<li><b>Antichitatea și Evul Mediu</b>: colonizarea greacă și feniciană a Mediteranei, migrațiile popoarelor germanice după secolul al IV-lea, expansiunea arabă și mongolă.</li>
<li><b>Din secolul al XVI-lea</b>: cucerirea Americilor și <b>comerțul atlantic cu sclavi</b>: circa <b>12,5 milioane</b> de africani au fost îmbarcați cu forța între secolele al XVI-lea și al XIX-lea, dintre care circa 10,7 milioane au supraviețuit traversării. A fost o migrație <b>forțată</b>.</li>
<li><b>1850-1914</b>: <b>marea emigrație europeană</b> transoceanică: între 50 și 60 de milioane de europeni (irlandezi, germani, italieni, polonezi, scandinavi, evrei din Est) spre America de Nord, Argentina, Brazilia, Australia. La Ellis Island, la New York, între 1892 și 1954 au trecut circa 12 milioane de persoane.</li>
<li><b>Secolul al XX-lea</b>: deplasări în masă din cauza războaielor (schimburi de populație, refugiații celui de-al Doilea Război Mondial), decolonizare, migrația lucrătorilor în Europa occidentală după 1945 (<b>Gastarbeiter</b> în Germania), Marea Migrație a afro-americanilor din Sudul spre Nordul SUA (1916-1970, circa 6 milioane de persoane).</li>
<li><b>Astăzi</b>: migrații spre țările din Golf, SUA, Europa; migrație intensă intra-asiatică și intra-africană; migrații climatice și de refugiați (Siria, Afganistan, Ucraina, Sudan, Venezuela).</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: italienii care au plecat",
      html: `<p>Între <b>1876</b> și <b>1976</b> circa <b>27 de milioane de italieni</b> au părăsit țara (unii s-au întors ulterior). Destinațiile au fost Americile (Argentina, Brazilia, Statele Unite), țări europene (Franța, Elveția, Germania, Belgia) și Australia. Plecau mai întâi venetii, friulanii, piemontezii, apoi tot mai mult sudiștii (Sicilia, Campania, Calabria, Puglia).</p>
<p>În 1900 un țăran din Sudul Italiei putea câștiga în câteva luni la New York mai mult decât într-un an acasă: respingerea era <b>foamea de pământ și de muncă</b>, atracția salariile americane. În 1946 Italia a semnat un acord cu Belgia: oamenii mergeau să lucreze în mină în schimbul cărbunelui. La 8 august 1956, în mina de la <b>Marcinelle</b>, au murit 262 de mineri, dintre care 136 italieni. Și italienii au suferit prejudecăți și discriminări și au fost victimele unor episoade de violență, precum linșarea a unsprezece italieni la New Orleans în 1891.</p>
<p>Astăzi trăiesc în străinătate peste <b>6 milioane de cetățeni italieni</b> (înscriși în AIRE, registrul italienilor din străinătate), iar circa <b>80 de milioane de persoane din lume</b> au origini italiene (mai ales în Brazilia și Argentina). Din anii 2010 mulți tineri absolvenți de facultate pleacă din nou: este așa-numitul <b>„exod al creierelor”</b>.</p>`
    },
    {
      type: "3d",
      title: "Pe glob: câteva mari rute migratorii",
      scene: "globe",
      options: {
        points: [
          { lat: 38.1, lon: 13.4, label: "Italia (plecarea migranților din secolul al XIX-lea)", color: "#16a34a" },
          { lat: 40.7, lon: -74.0, label: "New York (Ellis Island)", color: "#7c3aed" },
          { lat: -34.6, lon: -58.4, label: "Buenos Aires", color: "#0ea5e9" },
          { lat: 14.7, lon: -17.4, label: "Dakar (Africa de Vest)", color: "#f59e0b" },
          { lat: 33.9, lon: 10.1, label: "Tunisia (ruta Mediteranei centrale)", color: "#dc2626" },
          { lat: 36.0, lon: 14.5, label: "Lampedusa", color: "#dc2626" },
          { lat: 25.3, lon: 55.3, label: "Emiratele (lucrători din Asia)", color: "#a16207" },
          { lat: 28.6, lon: 77.2, label: "Delhi (India)", color: "#ec4899" },
          { lat: 19.4, lon: -99.1, label: "Ciudad de México", color: "#2563eb" },
          { lat: 33.7, lon: -118.2, label: "Los Angeles", color: "#2563eb" }
        ],
        routes: [
          { points: [0, 1], color: "#16a34a" },
          { points: [0, 2], color: "#16a34a" },
          { points: [4, 5, 0], color: "#dc2626" },
          { points: [7, 6], color: "#ec4899" },
          { points: [8, 9], color: "#2563eb" }
        ]
      },
      caption: "Verde: emigrația italiană istorică. Roșu: ruta Mediteranei centrale. Roz: lucrătorii asiatici spre țările din Golf. Albastru: Mexic-SUA."
    },
    {
      type: "text",
      title: "4. Astăzi: de unde, încotro",
      html: `<p>Potrivit estimărilor ONU, în 2020 existau circa <b>281 de milioane</b> de migranți internaționali (3,6% din populația lumii); în 2024 au ajuns la circa <b>304 milioane</b> (3,7%).</p>
<ul>
<li><b>Țări de destinație</b>: <b>Statele Unite</b> (circa 50 de milioane de persoane născute în străinătate) sunt pe primul loc; urmează <b>Germania</b>, <b>Arabia Saudită</b>, <b>Rusia</b>, <b>Regatul Unit</b>. În țările din Golf (Emirate, Qatar, Kuwait) străinii sunt <b>majoritatea</b> locuitorilor (de exemplu circa 88% în Qatar), mai ales lucrători în construcții și servicii domestice din India, Pakistan, Bangladesh, Nepal, Filipine.</li>
<li><b>Țări de origine</b>: <b>India</b> (circa 18 milioane de emigrați, cea mai mare diasporă), <b>Mexic</b>, <b>Rusia</b>, <b>China</b>, <b>Siria</b>, <b>Bangladesh</b>, <b>Pakistan</b>, <b>Ucraina</b>.</li>
<li><b>Principalele coridoare</b>: Mexic → Statele Unite; Asia de Sud → țările din Golf; Siria → Turcia, Liban, Germania; Ucraina → Polonia și UE (din 2022); Venezuela → Columbia și America de Sud; Africa subsahariană → alte țări africane și, într-o măsură mai mică, Europa.</li>
<li><b>Refugiați și persoane strămutate</b> (UNHCR): peste <b>120 de milioane</b> de persoane silite să fugă (inclusiv cele strămutate intern). Printre țările care găzduiesc cei mai mulți refugiați: Iran, Turcia, Columbia, Germania, Uganda, Pakistan.</li>
</ul>
<p><b>Ruta Mediteranei centrale</b> (Libia și Tunisia spre Lampedusa și Sicilia) este una dintre cele mai periculoase: din 2014 au fost numărate peste 25.000 de morți și dispăruți în Mediterana. Uniunea Europeană are <b>Regulamentul Dublin</b>, care stabilește (în general) că cererea de azil este examinată de prima țară a UE în care se intră, și un recent <b>Pact privind migrația și azilul</b> (2024).</p>
<p>În <b>Italia</b> locuiesc peste <b>5 milioane</b> de străini (circa 9% din populație), din România, Maroc, Albania, China, Ucraina. <b>Cetățenia</b> se dobândește de regulă prin <b>ius sanguinis</b> (descendența din cetățeni italieni) sau, pentru străini, după 10 ani de reședință (4 pentru cetățenii UE, 5 pentru apatrizi și refugiați) sau prin căsătorie.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… remitențele valorează mai mult decât ajutoarele?",
      html: `<p>Migranții trimit acasă o parte din câștiguri: sunt <b>remitențele</b>. Potrivit Băncii Mondiale, în 2023 au atins circa <b>650 de miliarde de dolari</b> spre țările cu venituri mici și medii, mai mult decât investițiile directe și mult mai mult decât ajutoarele pentru dezvoltare. În unele țări (Tonga, Liban, Tadjikistan, Nepal) valorează peste un sfert din PIB. Un lucrător filipinez la Dubai care trimite acasă 300 de dolari pe lună poate plăti studiile a doi nepoți.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: citirea unei date migratorii",
      html: `<p>O țară are <b>10 milioane</b> de locuitori, dintre care <b>1,2 milioane</b> născuți în străinătate; într-un an sosesc 80.000 de persoane și pleacă 30.000.</p>
<ul>
<li>Ponderea născuților în străinătate = 1.200.000 ÷ 10.000.000 = <b>12%</b>.</li>
<li><b>Soldul migratoriu</b> = 80.000 − 30.000 = <b>+50.000</b> (circa +5 la mie).</li>
<li>Dacă în acel an născuții depășesc decesele cu doar 10.000 de unități, soldul total este +60.000: <b>5/6 din creștere vine din migrații</b>.</li>
</ul>
<p>Este cazul multor țări europene: populația crește (sau nu scade) datorită soldului migratoriu, nu celui natural.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… Brazilia are mai mulți „italieni” decât Italia?",
      html: `<p>Estimările arată că în <b>Brazilia</b> trăiesc circa <b>30 de milioane</b> de persoane cu origini italiene (peste 10% din populație), mai mulți decât în oricare regiune italiană, și că la <b>São Paulo</b> sunt mai mulți urmași de italieni decât la Roma. Și în Argentina circa jumătate din populație are cel puțin un strămoș italian. Migrațiile lasă urme în nume de familie, în mâncăruri, în dialecte (<i>talian</i>, derivat din venețiană, este limbă recunoscută în unele comune din Rio Grande do Sul).</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… și migrațiile interne schimbă chipul unei țări?",
      html: `<p>Între anii '50 și '70 milioane de italieni s-au mutat din Sud în Nord. <b>Torino</b> a ajuns să fie numit „al treilea oraș meridional al Italiei” (după Napoli și Palermo), pentru că ani de zile sosiseră acolo mii de oameni în fiecare lună să lucreze la Fiat. În 1861 Italia era unită, dar împărțită de limbi și obiceiuri: migrațiile interne, împreună cu școala și televiziunea, au făcut ca limba italiană să fie vorbită de toți.</p>`
    },
    {
      type: "text",
      title: "5. Consecințe: pentru cei care pleacă, pentru cei care ajung, pentru cei care rămân",
      html: `<p>Migrațiile produc efecte complexe, pe care studiile le măsoară cu date și nu cu impresii.</p>
<ul>
<li><b>În țările de sosire</b>: migranții acoperă locuri de muncă lipsă (agricultură, îngrijirea vârstnicilor, construcții, restaurante, sănătate) și <b>compensează îmbătrânirea</b>: în Italia cetățenii străini plătesc în fiecare an contribuții mai mari decât prestațiile pe care le primesc (estimări ale unor fundații și ale INPS, casa italiană de pensii, arată un sold pozitiv), contribuie la circa <b>9%</b> din PIB (estimări ale unor fundații de cercetare). În același timp există provocări: <b>integrarea</b> școlară și lingvistică, concurența în unele sectoare cu calificare scăzută, tensiuni dacă sosirea este foarte rapidă și concentrată, riscul exploatării (<i>caporalato</i>, munca ilegală în agricultură).</li>
<li><b>În țările de origine</b>: sosesc <b>remitențe</b> și competențe dobândite în străinătate (<i>brain circulation</i>), dar poate exista un <b>exod al creierelor</b> (<i>brain drain</i>): medici, ingineri, asistente care pleacă, lăsând țara fără profesioniști.</li>
<li><b>Pentru migranți</b>: câștiguri mai mari, dar și riscuri (călătorie, exploatare, discriminare) și depărtarea de familie.</li>
<li><b>Culturale</b>: limbi, mâncăruri, muzică, religii se amestecă. Gândește-te cât din bucătăria „italiană” (roșia, cartoful, porumbul) vine din Americi, sau la pizza din SUA și Brazilia.</li>
</ul>
<p>Societățile urmează modele diferite de incluziune: <b>asimilare</b> (migrantul adoptă cultura dominantă și o pierde pe a sa), <b>multiculturalism</b> (culturi diferite coexistă cu demnitate egală), <b>integrare</b> (migrantul participă pe deplin la societate, iar fiecare respectă regulile comune păstrându-și identitatea). Constituția italiană protejează drepturile inviolabile ale oricărei persoane, cetățean sau nu (art. 2).</p>`
    },
    {
      type: "decision",
      title: "1905: să pleci sau să rămâi?",
      html: `<p>Este anul 1905. Ești un tânăr țăran dintr-un sat din Calabria. Pământul este puțin, recolta de grâu este slabă, ai soție și un copil mic. De la un văr sosește o scrisoare: la Buenos Aires (sau la New York) se caută zilieri, muncitori în construcții și zidari, iar salariul este de cel puțin patru ori mai mare. Călătoria cu vaporul la clasa a treia costă cât câștigul unui an întreg. Ziarele vorbesc despre escrocheriile „agenților de emigrare” și despre condițiile grele de viață.</p>`,
      question: "Tu ce ai fi făcut?",
      options: [
        { label: "Rămân și sper într-un an mai bun", outcome: "Rămâi aproape de familie, dar datele arată că multe familii de țărani din Sud își înrăutățeau nivelul de trai; cei care rămâneau ajungeau adesea să emigreze după câțiva ani." },
        { label: "Plec singur și trimit bani acasă", outcome: "Era alegerea cea mai frecventă: tatăl pleca, muncea ani de zile și trimitea remitențe. Mulți se întorceau (circa jumătate dintre emigranții italieni din secolul al XX-lea s-au întors în patrie)." },
        { label: "Plec cu toată familia", outcome: "Mai puțin frecvent, dar cu costuri foarte mari: riscai despărțirea totală de origini, chiar dacă copiii ar fi avut șanse mai bune." }
      ],
      answer: 1,
      explain: "Istoria arată că mulți emigranți au plecat singuri („migrație pendulară” sau temporară) și au trimis remitențe; „întoarcerea” făcea parte din plan, iar remitențele emigranților au fost decenii întregi un capitol important al economiei italiene. Nicio alegere nu era lipsită de riscuri."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege migrațiile",
      intro: "Migrațiile sunt adesea povestite cu cifre și sloganuri: iată perspective diferite.",
      tabs: [
        {
          label: "🌊 Râul și barajul",
          html: `<p>Imaginează-ți migrațiile ca apa unui râu: curge de la locurile „înalte” (cu puține oportunități) spre locurile „joase” (cu mai multe oportunități) și găsește mereu drumul. Construirea unui <b>baraj</b> (bariere, frontiere închise) poate devia curgerea sau îi poate schimba traseul (rute mai lungi și mai periculoase), dar rareori o oprește de tot: adesea o transformă din legală în neregulamentară. Politicile migratorii eficace încearcă să <b>gestioneze</b> fluxul prin canale regulamentare (vize de muncă, coridoare umanitare, reîntregirea familiei), ca și cum s-ar construi <b>canale</b>, nu doar baraje.</p>`
        },
        {
          label: "🧳 Povestea unei familii",
          html: `<p>Întreabă-i pe bunicii și străbunicii tăi: de unde vine familia ta? Foarte multe familii italiene au o rudă care a trăit într-o altă țară sau într-o altă regiune. Poți desena un <b>arbore al migrațiilor</b>: o hartă cu săgeți de la locul nașterii la locul de reședință, pe trei generații. Vei descoperi că migrațiile, apropiate sau îndepărtate, fac parte din istoria aproape tuturor. Și Italia contemporană s-a născut din <b>migrații interne</b>: în perioada de după război milioane de sudiști și de veneți au mers să lucreze la Torino, Milano, Genova.</p>`
        },
        {
          label: "📊 O altă scară",
          html: `<p>Un mod de a măsura: cele circa <b>181.000</b> de debarcări din 2016 în Italia (maximul istoric) reprezentau circa <b>0,3%</b> din populația Italiei; Libanul a primit peste un milion de sirieni la circa 6 milioane de locuitori (peste 15%). Schimbând <b>scara</b> comparației (țară, continent, lume) percepția se schimbă. O altă scară utilă: în lume circa 3,7 persoane din 100 trăiesc în afara țării în care s-au născut; <b>96,3 din 100 nu</b>.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fefce8"/><rect x="40" y="60" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="60" width="16" height="30" fill="#f97316" stroke="#9a3412"/><text x="40" y="45" font-size="15" fill="#111827" font-weight="bold">Migranți internaționali în lume: 3,7%</text><rect x="40" y="130" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="130" width="38" height="30" fill="#ef4444" stroke="#7f1d1d"/><text x="40" y="115" font-size="15" fill="#111827" font-weight="bold">Străini rezidenți în Italia: circa 9%</text><text x="40" y="185" font-size="14" fill="#6b7280">bare la scară (gri = restul populației)</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de ce și cum ne mutăm",
      nodes: [
        { id: "spinta", label: "Factori de respingere", x: 20, y: 8, color: "#dc2626", html: "Sărăcie, războaie, persecuții, dezastre, climă.", why: "Sunt motivele pentru care este greu să rămâi: sărăcia extremă sau războaiele reduc posibilitățile de alegere. Cercetările arată însă că sărăcia singură nu explică plecările: sunt necesare și resurse și aspirații." },
        { id: "attrazione", label: "Factori de atracție", x: 80, y: 8, color: "#16a34a", html: "Muncă, siguranță, studii, libertate.", why: "Salariile din Europa sau din SUA pot fi de 5-10 ori mai mari decât cele din multe țări de origine, iar cererea de forță de muncă apare și din îmbătrânirea țărilor bogate: demografia leagă Nordul de Sud." },
        { id: "reti", label: "Rețele și obstacole", x: 50, y: 30, color: "#a855f7", html: "Rude în străinătate, legi, costuri, distanță.", why: "Rețelele sociale explică de ce migrațiile se concentrează pe puține coridoare (sociologul Douglas Massey le-a studiat pentru Mexic-SUA); legile și costurile decid dacă drumul este regulamentar sau neregulamentar." },
        { id: "rotte", label: "Rute și fluxuri", x: 20, y: 56, color: "#2563eb", html: "Mediterana, Mexic-SUA, Asia-Golf.", why: "Rutele urmează geografia și politicile: dacă se închide un pasaj (Balcanii 2016), fluxul se mută pe altă rută (Mediterana centrală), adesea mai riscantă." },
        { id: "diritto", label: "Dreptul internațional", x: 80, y: 56, color: "#f59e0b", html: "Convenția de la Geneva 1951, nereturnarea, azilul.", why: "După al Doilea Război Mondial și experiența a milioane de refugiați și a celor respinși spre regimurile care îi persecutau, statele au hotărât să stabilească un drept internațional la protecție." },
        { id: "effetti", label: "Consecințe", x: 50, y: 78, color: "#ec4899", html: "Demografice, economice, culturale.", why: "Efectele depind de viteză, de calificarea migranților și de politicile de integrare: aceeași migrație poate fi o resursă sau o problemă, după cum este gestionată." },
        { id: "gestione", label: "Gestionarea migrațiilor", x: 50, y: 95, color: "#14b8a6", html: "Canale regulamentare, acorduri, cooperare, integrare.", why: "Pactul global pentru o migrație sigură, ordonată și regulamentară (ONU, 2018) este primul acord internațional pe acest subiect: nu este obligatoriu, dar recunoaște că nicio țară nu-l poate gestiona singură." }
      ],
      edges: [
        ["spinta", "reti", "cu atât mai mult"],
        ["attrazione", "reti", "cu atât mai mult"],
        ["reti", "rotte", "aleg"],
        ["diritto", "rotte", "reglementează"],
        ["rotte", "effetti", "produc"],
        ["diritto", "effetti", "protejează"],
        ["effetti", "gestione", "necesită"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Circa <b>280-300 de milioane</b> de migranți internaționali, adică circa <b>3,6-3,7%</b> din omenire.</li>
<li><b>Migrant</b> ≠ <b>refugiat</b> ≠ <b>solicitant de azil</b> ≠ <b>persoană strămutată intern</b>. Convenția de la Geneva: 1951.</li>
<li><b>Push</b> (respingere) și <b>pull</b> (atracție); rețele sociale și obstacole.</li>
<li>Marea emigrație europeană 1850-1914; italieni în străinătate: circa 27 de milioane între 1876 și 1976.</li>
<li>Remitențe: circa 650 de miliarde de dolari pe an spre țări cu venituri mici și medii.</li>
<li>Efectele depind mult de felul în care migrațiile sunt <b>gestionate</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: istorie și consecințe",
      questions: [
        { type: "mc", q: "Ce eveniment istoric a provocat migrația forțată a circa 12,5 milioane de africani?", options: ["Comerțul atlantic cu sclavi", "Revoluția industrială", "Primul Război Mondial"], answer: 0, explain: "Între secolele al XVI-lea și al XIX-lea circa 12,5 milioane de africani au fost îmbarcați cu forța spre Americi." },
        { type: "text", q: "Cum se numesc banii pe care migranții îi trimit rudelor din țara de origine?", answer: ["remitențe", "remitențele", "remitență"], explain: "Remitențele sunt o resursă esențială pentru multe țări sărace." },
        { type: "tf", q: "„Exodul creierelor” este plecarea unor persoane foarte calificate din țara de origine.", answer: true, explain: "Da: medici, ingineri, cercetători care emigrează. Se numește brain drain." }
      ]
    }
  ],
  glossary: [
    { t: "Migrant", d: "Persoană care se mută într-un alt loc, în interiorul propriei țări sau în străinătate, pentru o perioadă semnificativă." },
    { t: "Refugiat", d: "Persoană care și-a părăsit țara din cauza fricii întemeiate de persecuție și are dreptul la protecție internațională (Convenția de la Geneva, 1951)." },
    { t: "Solicitant de azil", d: "Persoană care a cerut protecție internațională și așteaptă decizia statului." },
    { t: "Persoană strămutată intern", d: "Persoană silită să-și părăsească locuința, dar care rămâne în granițele propriei țări." },
    { t: "Factori de respingere (push)", d: "Condiții din locul de origine care îndeamnă la plecare: sărăcie, războaie, persecuții, dezastre." },
    { t: "Factori de atracție (pull)", d: "Condiții din locul de destinație care atrag: muncă, siguranță, studii, libertate." },
    { t: "Remitențe", d: "Sume de bani pe care migranții le trimit familiilor rămase în țara de origine." },
    { t: "Exodul creierelor", d: "Emigrarea persoanelor foarte calificate (brain drain)." },
    { t: "Nereturnare", d: "Principiu al dreptului internațional: nimeni nu poate fi trimis înapoi într-un loc unde riscă persecuții sau moartea." },
    { t: "Integrare", d: "Proces prin care migranții participă pe deplin la viața socială, economică și culturală a țării de sosire." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cam ce procent din populația lumii este alcătuit din migranți internaționali?", options: ["Circa 3,7%", "Circa 20%", "Circa 50%"], answer: 0, explain: "Circa 280-300 de milioane din 8 miliarde: mai puțin de 4%." },
      { type: "mc", q: "Care este diferența dintre un refugiat și un migrant economic?", options: ["Refugiatul fuge de persecuții și are dreptul la protecție internațională", "Nu există nicio diferență", "Migrantul economic călătorește doar cu avionul"], answer: 0, explain: "Refugiatul este protejat de Convenția de la Geneva din 1951; migrantul economic pleacă pentru muncă sau pentru a-și îmbunătăți condițiile." },
      { type: "tf", q: "Majoritatea refugiaților din lume este găzduită de țări europene bogate.", answer: false, explain: "Cei mai mulți sunt găzduiți de țări cu venituri mici și medii, adesea vecine cu țara de origine." },
      { type: "num", q: "Câți italieni (în milioane, aproximativ) au emigrat între 1876 și 1976?", answer: 27, tol: 2, unit: "milioane", explain: "Circa 27 de milioane: una dintre cele mai mari emigrații din istoria modernă." },
      { type: "mc", q: "Ce este migrația în lanț?", options: ["Plecarea unor persoane care urmează rude și prieteni deja emigrați", "O călătorie cu vaporul în condiții de sclavie", "Un tip de rută maritimă"], answer: 0, explain: "Rețelele sociale înlesnesc alegerea destinației: adesea se pleacă acolo unde cunoști deja pe cineva." },
      { type: "text", q: "Cum se numește insula din golful New York pe unde au trecut circa 12 milioane de imigranți între 1892 și 1954?", answer: ["ellis island", "ellis"], explain: "Ellis Island, în golful New York." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Comerțul atlantic cu sclavi (din secolul al XVI-lea)", "Marea emigrație europeană (1850-1914)", "Gastarbeiter în Germania (după 1945)", "Criza refugiaților sirieni (din 2011)"], explain: "De la comerțul atlantic cu sclavi la marea emigrație, apoi la lucrătorii oaspeți și la refugiații conflictelor recente." },
      { type: "mc", q: "Ce efect poate avea plecarea medicilor și inginerilor din țara de origine?", options: ["Exodul creierelor", "Dividendul demografic", "Creșterea sporului natural"], answer: 0, explain: "Este brain drain: țara pierde competențe costisitoare de format." },
      { type: "tf", q: "În dreptul internațional, principiul nereturnării interzice trimiterea unei persoane înapoi acolo unde riscă viața sau persecuția.", answer: true, explain: "Este unul dintre principiile fundamentale ale Convenției de la Geneva." },
      { type: "mc", q: "De ce nu pleacă în migrație, din țările sărace, cei mai săraci oameni în sens absolut?", options: ["Pentru că emigrarea are costuri mari și sunt necesare unele resurse", "Pentru că cei mai săraci nu vor să se mute", "Pentru că este interzis prin lege"], answer: 0, explain: "Călătoria și documentele costă: cel care pleacă are adesea un minim de resurse, studii sau o rețea de ajutor." }
    ]
  }
});

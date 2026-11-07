TOPIC('ro', {
  id: "p2-sto-fonti",
  title: "Sursele istorice",
  intro: "Cum aflăm ce s-a întâmplat demult, când noi nu eram acolo? 🤔 Facem ca <b>detectivii</b> 🕵️: căutăm <b>urmele</b> trecutului. Aceste urme se numesc <b>surse</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Ce este o sursă?",
      html: `<p>O <b>sursă istorică</b> este <b>orice lucru</b> care ne dă informații despre trecut.</p>
<p>Cuvântul „sursă” înseamnă și <b>izvor</b> ⛲: așa cum din izvor iese apa, din sursa istorică ies <b>informațiile</b>.</p>
<p>Oamenii care studiază sursele ca să reconstituie trecutul se numesc <b>istorici</b> 📚. Cei care caută urmele săpând în pământ se numesc <b>arheologi</b> ⛏️.</p>`
    },
    {
      type: "text",
      title: "Cele patru tipuri de surse",
      html: `<ul>
<li>📜 <b>Surse scrise</b>: tot ce conține cuvinte scrise. Scrisori, jurnale, cărți, ziare, carnete de note, cărți poștale, documente, inscripții pe monumente.</li>
<li>🧸 <b>Surse materiale</b>: obiecte care pot fi atinse. Jucării, haine, unelte, monede, case, oase, vase.</li>
<li>🖼️ <b>Surse iconografice</b> (sau vizuale): imagini. Fotografii, desene, picturi, filme, hărți.</li>
<li>🗣️ <b>Surse orale</b>: poveștile spuse cu voce tare. Amintirile bunicilor, cântecele, poeziile pentru copii, interviurile înregistrate.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Sursele poveștii bunicului",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="30" width="130" height="170" rx="12" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<rect x="165" y="30" width="130" height="170" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="3"/>
<rect x="310" y="30" width="130" height="170" rx="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="455" y="30" width="130" height="170" rx="12" fill="#fce7f3" stroke="#be185d" stroke-width="3"/>
<rect x="45" y="60" width="80" height="95" fill="#ffffff" stroke="#92400e" stroke-width="2"/>
<line x1="55" y1="80" x2="115" y2="80" stroke="#92400e" stroke-width="3"/><line x1="55" y1="97" x2="115" y2="97" stroke="#92400e" stroke-width="3"/><line x1="55" y1="114" x2="105" y2="114" stroke="#92400e" stroke-width="3"/><line x1="55" y1="131" x2="110" y2="131" stroke="#92400e" stroke-width="3"/>
<text x="230" y="125" font-size="56" text-anchor="middle">🧸</text>
<rect x="335" y="60" width="80" height="95" fill="#ffffff" stroke="#1e3a8a" stroke-width="4"/>
<circle cx="375" cy="95" r="15" fill="#94a3b8"/><path d="M350 150 Q375 105 400 150 Z" fill="#94a3b8"/>
<text x="520" y="125" font-size="56" text-anchor="middle">👴</text>
<text x="85" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#92400e">scrisă</text>
<text x="85" y="252" font-size="14" text-anchor="middle" fill="#78350f">o scrisoare</text>
<text x="230" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#166534">materială</text>
<text x="230" y="252" font-size="14" text-anchor="middle" fill="#14532d">ursulețul lui</text>
<text x="375" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#1d4ed8">iconografică</text>
<text x="375" y="252" font-size="14" text-anchor="middle" fill="#1e3a8a">o fotografie veche</text>
<text x="520" y="230" font-size="18" text-anchor="middle" font-weight="bold" fill="#be185d">orală</text>
<text x="520" y="252" font-size="14" text-anchor="middle" fill="#831843">poveștile lui</text>
<text x="300" y="288" font-size="17" text-anchor="middle" fill="#334155">împreună, povestesc cum a fost copilăria lui</text>
</svg>`,
      caption: "O scrisoare, o jucărie, o fotografie și o poveste: patru surse diferite pentru a cunoaște povestea bunicului."
    },
    {
      type: "widget",
      title: "Ce fel de sursă este?",
      widget: "classify",
      options: {
        groups: ["📜 Scrisă", "🧸 Materială", "🖼️ Iconografică", "🗣️ Orală"],
        items: [
          ["carnetul de note al mamei", 0],
          ["o monedă antică", 1],
          ["o fotografie de la nunta bunicilor", 2],
          ["povestea străbunicii", 3],
          ["un jurnal", 0],
          ["un vas roman", 1],
          ["o pictură dintr-un muzeu", 2],
          ["un cântec de leagăn cântat de bunic", 3],
          ["un bilet vechi de tren", 0],
          ["primul meu pantofior", 1]
        ]
      },
      caption: "Ține minte: dacă are cuvinte scrise, este scrisă; dacă este o imagine, este iconografică; dacă este un obiect, este materială; dacă este o poveste spusă cu voce tare, este orală."
    },
    {
      type: "quiz",
      title: "Mini-test: tipurile de surse",
      questions: [
        { type: "mc", q: "O fotografie veche este o sursă…", options: ["scrisă", "iconografică", "orală"], answer: 1, explain: "Imaginile (fotografii, desene, picturi) sunt surse iconografice." },
        { type: "mc", q: "Povestea bunicului este o sursă…", options: ["orală", "materială", "scrisă"], answer: 0, explain: "Informațiile spuse cu voce tare sunt surse orale." },
        { type: "tf", q: "O jucărie veche este o sursă materială.", answer: true, explain: "Este un obiect care poate fi atins: sursă materială." }
      ]
    },
    {
      type: "example",
      title: "Exemplu: povestea mea personală 👶",
      html: `<p>Și tu ai o poveste! Ca s-o reconstitui, poți folosi multe surse:</p>
<ul>
<li>📜 <b>certificatul de naștere</b> sau brățara de la maternitate (scrisă): îți spune <b>când și unde</b> te-ai născut;</li>
<li>🖼️ <b>fotografiile</b> și filmările de când erai mic (iconografice): cum arătai;</li>
<li>🧸 prima <b>suzetă</b>, pantofiorii, primul desen (materiale);</li>
<li>🗣️ <b>poveștile mamei și ale tatei</b> (orale): primul tău cuvânt, primii pași.</li>
</ul>
<p>Așezându-le în ordine pe <b>linia timpului</b>, îți reconstitui povestea!</p>`
    },
    {
      type: "widget",
      title: "Linia timpului lui Marco",
      widget: "timeline",
      options: {
        unit: "ani",
        events: [
          { year: 2019, label: "Se naște Marco (certificatul de naștere)", icon: "👶" },
          { year: 2020, label: "Primii pași (filmarea mamei)", icon: "🚶" },
          { year: 2022, label: "Grădinița (fotografia din prima zi)", icon: "🎒" },
          { year: 2023, label: "Pierde primul dințișor (îl păstrează într-o cutiuță)", icon: "🦷" },
          { year: 2025, label: "Clasa pregătitoare (primul caiet)", icon: "✏️" },
          { year: 2026, label: "Clasa I", icon: "📚" }
        ]
      },
      caption: "Fiecare moment din povestea lui Marco este povestit de o sursă diferită."
    },
    {
      type: "text",
      title: "Istoricul este un detectiv",
      html: `<p>Ca să înțeleagă bine trecutul, istoricul face așa:</p>
<ol>
<li>🔍 <b>Caută</b> sursele: în casă, în muzee, în <b>arhive</b> (unde se păstrează documentele), în biblioteci, sub pământ.</li>
<li>❓ <b>Pune întrebări</b> sursei: ce este? Cine a făcut-o? Când? La ce servea?</li>
<li>⚖️ <b>Compară</b> mai multe surse: dacă spun același lucru, informația este mai sigură.</li>
<li>✍️ <b>Povestește</b>: scrie istoria a ceea ce a descoperit.</li>
</ol>
<p>⚠️ Atenție: și sursele pot <b>greși</b>! Bunicul poate să-și amintească greșit o dată; o fotografie poate arăta doar o parte din scenă. De aceea trebuie comparate.</p>`
    },
    {
      type: "widget",
      title: "Săpătura arheologului",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect y="40" width="600" height="60" fill="#a3e635"/>
<rect y="100" width="600" height="70" fill="#d6a46b"/>
<rect y="170" width="600" height="70" fill="#b07a4a"/>
<rect y="240" width="600" height="80" fill="#7c4a2a"/>
<text x="560" y="78" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">azi</text>
<text x="560" y="300" font-size="16" text-anchor="end" fill="#fde68a" font-weight="bold">foarte demult</text>
<rect x="80" y="62" width="40" height="22" rx="4" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
<circle cx="230" cy="135" r="16" fill="#facc15" stroke="#a16207" stroke-width="3"/>
<path d="M350 185 L400 185 L392 225 L358 225 Z" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
<path d="M160 270 L240 285 M175 262 L170 295" stroke="#f5f5f4" stroke-width="8" stroke-linecap="round"/>
<line x1="0" y1="100" x2="600" y2="100" stroke="#78350f" stroke-width="2"/>
<line x1="0" y1="170" x2="600" y2="170" stroke="#78350f" stroke-width="2"/>
<line x1="0" y1="240" x2="600" y2="240" stroke="#78350f" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 100, y: 73, label: "Doză de azi" },
          { x: 230, y: 135, label: "Monedă de acum 100 de ani" },
          { x: 375, y: 205, label: "Vas roman" },
          { x: 200, y: 278, label: "Oase preistorice" }
        ]
      },
      caption: "Pământul se formează în straturi, ca o prăjitură: straturile mai de jos sunt cele mai vechi. Apasă pe fiecare obiect și alege ce este, începând de sus (cel mai recent)."
    },
    {
      type: "example",
      title: "Exemplu: școala bunicilor 🏫",
      html: `<p>Vrei să afli cum era școala bunicului, acum 60 de ani?</p>
<ul>
<li>🗣️ <b>Îl intervievezi</b>: „Era o singură învățătoare, se scria cu peniță și cerneală.”</li>
<li>🖼️ Te uiți la <b>fotografia clasei</b>: șorțuri negre și gulere albe, bănci de lemn.</li>
<li>📜 Citești <b>carnetul lui de note</b>: notele erau scrise de mână.</li>
<li>🧸 Găsești în pod <b>călimara</b> lui.</li>
</ul>
<p>Cele patru surse spun același lucru: acum ești sigur! ✅</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Ötzi, omul venit din gheață",
      html: `<p>În <b>1991</b>, doi excursioniști germani au găsit un trup în ghețarul Similaun, în Alpi, la granița dintre Italia și Austria. Credeau că este un alpinist nefericit… dar era un om care trăise acum mai bine de <b>5000 de ani</b>! ❄️</p>
<p>L-au numit <b>Ötzi</b>. Gheața îl păstrase împreună cu hainele, securea de cupru, arcul și săgețile: surse materiale foarte prețioase! Astăzi se află în Muzeul Arheologic din <b>Bolzano</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Orașul de sub cenușă",
      html: `<p>În anul <b>79 d.Hr.</b>, vulcanul <b>Vezuviu</b> a erupt și a îngropat orașul roman <b>Pompei</b> sub metri de cenușă și lapili. 🌋</p>
<p>Cenușa a păstrat case, străzi, picturi, pâine în cuptoare și chiar inscripțiile de pe ziduri, ca graffiti-urile noastre! Săpăturile au început în <b>1748</b> și continuă și astăzi: Pompei este o uriașă sursă pentru a cunoaște viața romanilor.</p>`
    },
    {
      type: "3d",
      title: "Călătorie în timp: surse celebre",
      scene: "spacetime",
      caption: "Harta este baza, înălțimea este timpul. Jos este momentul în care a fost făcută sursa, mai sus momentul în care a fost descoperită sau înțeleasă. Atinge evenimentele și urmărește săgețile.",
      options: {
        lat: [30, 56],
        lon: [-5, 32],
        years: [-3500, 2000],
        places: [
          { lat: 46.5, lon: 11.35, label: "Bolzano" },
          { lat: 40.75, lon: 14.49, label: "Pompei" },
          { lat: 31.4, lon: 30.42, label: "Rosetta (Egipt)" },
          { lat: 48.85, lon: 2.35, label: "Paris" },
          { lat: 55.0, lon: -2.36, label: "Vindolanda" }
        ],
        events: [
          { id: "otzi", lat: 46.78, lon: 10.84, year: -3300, label: "Ötzi moare în Alpi", html: "Un om din <b>epoca cuprului</b> moare pe o trecătoare alpină, la peste 3200 de metri. Zăpada și gheața îl acoperă și îl păstrează timp de peste 5000 de ani, cu hainele și uneltele lui." },
          { id: "otzi2", lat: 46.5, lon: 11.35, year: 1991, label: "Ötzi este găsit", html: "La 19 septembrie 1991, doi excursioniști găsesc trupul în ghețarul Similaun. Oamenii de știință studiază totul: ce mâncase, bolile lui, chiar și cele <b>61 de tatuaje</b>. Astăzi este la Muzeul Arheologic din Bolzano.", causes: ["otzi"] },
          { id: "rosetta", lat: 31.4, lon: 30.42, year: -196, label: "Piatra din Rosetta", html: "În Egipt este sculptată o piatră cu același text în trei scrieri: <b>hieroglife</b>, <b>demotică</b> și <b>greacă</b>. Este o sursă scrisă care va deveni „cheia” pentru citirea hieroglifelor." },
          { id: "champollion", lat: 48.85, lon: 2.35, year: 1822, label: "Champollion citește hieroglifele", html: "Comparând greaca de pe Piatră (descoperită în 1799) cu hieroglifele, francezul <b>Jean-François Champollion</b> reușește să le descifreze. Mii de surse scrise egiptene devin, în sfârșit, lizibile!", causes: ["rosetta"] },
          { id: "pompei", lat: 40.75, lon: 14.49, year: 79, label: "Vezuviul îngroapă Pompeiul", html: "Erupția <b>Vezuviului</b> acoperă Pompei și Herculanum. Scriitorul roman <b>Pliniu cel Tânăr</b> a văzut-o de departe și a descris-o în două scrisori: o sursă scrisă care confirmă sursa materială." },
          { id: "scavi", lat: 40.76, lon: 14.5, year: 1748, label: "Încep săpăturile de la Pompei", html: "Încep săpăturile. Mai târziu, în 1863, arheologul <b>Giuseppe Fiorelli</b> inventează o metodă: toarnă ipsos în golurile rămase în cenușă și obține <b>mulajele</b> oamenilor și ale animalelor.", causes: ["pompei"] },
          { id: "vindolanda", lat: 55.0, lon: -2.36, year: 100, label: "Tăblițele de la Vindolanda", html: "Într-un fort roman din Britania, soldați și familii scriu scrisori pe <b>tăblițe subțiri de lemn</b>. Printre ele este și o invitație la o petrecere de ziua de naștere! Descoperite din 1973, sunt printre cele mai vechi scrisori scrise de mână din Europa." },
          { id: "foto", lat: 46.72, lon: 4.85, year: 1827, label: "Prima fotografie", html: "În Franța, <b>Nicéphore Niépce</b> reușește să fixeze imaginea priveliștii de la fereastra sa: este cea mai veche fotografie ajunsă până la noi (1826–1827). De atunci, fotografiile devin surse iconografice prețioase." },
          { id: "voce", lat: 48.86, lon: 2.34, year: 1860, label: "Prima voce înregistrată", html: "La Paris, <b>Édouard-Léon Scott de Martinville</b> înregistrează o persoană care cântă „Au clair de la lune” cu o mașină care desenează sunetul. Abia în 2008 oamenii de știință au reușit să o asculte din nou: cea mai veche sursă orală înregistrată!", causes: ["foto"] }
        ]
      }
    },
    {
      type: "decision",
      title: "1991: ați găsit un trup în gheață!",
      html: `<p>Ești la munte, la peste 3000 de metri, cu un prieten. În gheața care se topește vedeți ieșind spatele și capul unei persoane. În apropiere sunt bucăți de lemn și de piele.</p>`,
      question: "Ce faceți?",
      options: [
        { label: "Îl scoatem singuri cu cazmalele și luăm obiectele acasă ca amintire.", outcome: "Ați risca să stricați trupul și obiectele și, mai ales, s-ar pierde lucrul cel mai important: <b>unde</b> și <b>cum</b> se afla fiecare lucru. Pentru arheologi, poziția obiectelor este o informație prețioasă." },
        { label: "Facem o fotografie, nu atingem nimic și anunțăm imediat cabana și autoritățile.", outcome: "Este alegerea corectă: fotografia este deja o sursă, iar experții vor putea recupera totul cu grijă și îl vor putea studia." },
        { label: "Ne facem că nu am văzut nimic și coborâm în vale.", outcome: "Gheața, topindu-se, ar fi lăsat trupul la soare și la intemperii: într-un timp scurt s-ar fi stricat, iar o sursă unică s-ar fi pierdut." }
      ],
      answer: 1,
      explain: "Erika și Helmut Simon, la 19 septembrie 1991, au fotografiat trupul și au anunțat cabana. La început toți s-au gândit la un alpinist mort de curând, iar prima recuperare s-a făcut în grabă cu un ciocan pneumatic, stricând puțin trupul și unele obiecte. Apoi arheologul <b>Konrad Spindler</b> a înțeles că avea peste 4000 de ani (astăzi știm: aproximativ 5300). De atunci, Ötzi este una dintre cele mai studiate descoperiri din lume. Regula arheologilor este: <b>nu atinge, documentează, anunță</b>. În Italia, cine găsește vestigii antice trebuie să anunțe autoritățile: ele aparțin tuturor."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege sursele",
      intro: "Sursele se înțeleg mai bine jucându-te de-a istoricii.",
      tabs: [
        {
          label: "📦 Cutia cu amintiri",
          html: `<p>Pregătește acasă o <b>cutie a timpului</b>: pune înăuntru o fotografie de-a ta, un desen, o jucărie pe care n-o mai folosești și o scrisoare scrisă de tine („Azi am 7 ani și îmi place…”). Închide-o și scrie deasupra: „De deschis peste 10 ani”.</p>
<p>Peste 10 ani, acea cutie va fi o mică colecție de <b>surse</b> despre tine! În toată lumea se îngroapă astfel „capsulele timpului” pentru cei care vor veni.</p>`
        },
        {
          label: "🕵️ Întrebările detectivului",
          html: `<p>În fața oricărei surse, pune cele <b>5 întrebări</b> ale detectivului. Întoarce cartonașele!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "❓ Ce este?", back: "O scrisoare, un vas, o fotografie, o poveste…" },
              { front: "👤 Cine a făcut-o?", back: "O persoană faimoasă, un copil, un soldat, un meșteșugar…" },
              { front: "📅 Când?", back: "Mă uit la dată, la stratul de pământ, la cum este făcută." },
              { front: "📍 Unde?", back: "Unde a fost găsită sau scrisă." },
              { front: "🎯 De ce?", back: "La ce servea? Ce voia să povestească?" }
            ]
          }
        },
        {
          label: "🌍 Surse prin lume",
          html: `<p>Unele surse sunt atât de importante, încât sunt celebre în toată lumea. Rotește globul și găsește-le!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 46.78, lon: 10.84, label: "Ötzi (Alpi)", color: "#0ea5e9" },
              { lat: 40.75, lon: 14.49, label: "Pompei", color: "#ef4444" },
              { lat: 45.05, lon: 1.17, label: "Peștera Lascaux: picturi de acum aproximativ 17.000 de ani", color: "#a16207" },
              { lat: 31.4, lon: 30.42, label: "Piatra din Rosetta (Egipt)", color: "#eab308" },
              { lat: 34.38, lon: 109.27, label: "Armata de teracotă (China)", color: "#b45309" },
              { lat: -13.16, lon: -72.55, label: "Machu Picchu (Peru)", color: "#16a34a" }
            ]
          }
        },
        {
          label: "🍰 Prăjitura cu straturi",
          html: `<p>Închipuie-ți că faci o prăjitură cu straturi: mai întâi pui blatul, apoi crema, apoi ciocolata, apoi frișca. Stratul de <b>jos</b> l-ai pus <b>primul</b>, cel de sus ultimul.</p>
<p>Pământul funcționează la fel: țărâna, praful și resturile se adună încet-încet. De aceea arheologul știe că, de obicei, cu cât sapă mai <b>adânc</b>, cu atât găsește obiecte mai <b>vechi</b>. Această idee se numește <b>stratigrafie</b>.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf2f8"/>
<rect x="150" y="40" width="300" height="35" rx="6" fill="#ffffff" stroke="#9ca3af" stroke-width="2"/>
<rect x="150" y="75" width="300" height="35" fill="#78350f"/>
<rect x="150" y="110" width="300" height="35" fill="#fde68a"/>
<rect x="150" y="145" width="300" height="45" rx="6" fill="#fbbf24"/>
<text x="470" y="63" font-size="16" fill="#334155" font-weight="bold">4. frișcă (ultimul)</text>
<text x="470" y="98" font-size="16" fill="#78350f" font-weight="bold">3. ciocolată</text>
<text x="470" y="133" font-size="16" fill="#a16207" font-weight="bold">2. cremă</text>
<text x="470" y="173" font-size="16" fill="#b45309" font-weight="bold">1. blat</text>
<text x="20" y="63" font-size="16" fill="#16a34a" font-weight="bold">mai recent ↑</text>
<text x="20" y="173" font-size="16" fill="#7c2d12" font-weight="bold">mai vechi ↓</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta surselor: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "passato", label: "Trecutul", x: 50, y: 6, color: "#64748b", html: "Tot ce s-a întâmplat deja.", why: "Trecutul nu poate fi revăzut: nu există mașina timpului! Îl putem cunoaște doar prin urmele pe care le-a lăsat." },
        { id: "fonti", label: "Sursele", x: 50, y: 28, color: "#a855f7", html: "Toate urmele care ne dau informații despre trecut.", why: "Fiecare om, în fiecare zi, lasă urme: obiecte, scrieri, fotografii, amintiri. Unele se păstrează secole, altele se pierd. De aceea istoricii lucrează cu sursele care au ajuns până la noi." },
        { id: "scritte", label: "Scrise", x: 12, y: 50, color: "#b45309", html: "Scrisori, jurnale, cărți, documente, inscripții.", why: "Există de când a fost inventată <b>scrierea</b>, acum aproximativ <b>5000 de ani</b>, în Mesopotamia. De aceea perioada de dinainte de scriere se numește <b>Preistorie</b>: „înainte de istoria scrisă”." },
        { id: "materiali", label: "Materiale", x: 37, y: 55, color: "#16a34a", html: "Obiecte, case, unelte, oase, monede.", why: "Sunt cele mai vechi surse: ne povestesc și Preistoria, când nu se scria. Multe se găsesc săpând, pentru că în timp sunt acoperite de pământ." },
        { id: "iconografiche", label: "Iconografice", x: 63, y: 55, color: "#1d4ed8", html: "Fotografii, desene, picturi, filme.", why: "„Iconografică” vine din greaca <i>eikón</i> = imagine. Primele imagini sunt picturile din peșteri, vechi de zeci de mii de ani; prima fotografie este din 1826–1827." },
        { id: "orali", label: "Orale", x: 88, y: 50, color: "#be185d", html: "Povești, amintiri, cântece transmise cu voce tare.", why: "Mii de ani, poveștile au trecut de la bunic la nepot doar prin viu grai. Chiar și poemele lui Homer, Iliada și Odiseea, au fost cântate pe de rost timp de secole înainte de a fi scrise." },
        { id: "storico", label: "Istoric și arheolog", x: 30, y: 82, color: "#0ea5e9", html: "Cel care caută, studiază și compară sursele.", why: "Istoricul grec <b>Herodot</b> (acum aproximativ 2500 de ani) este numit „părintele istoriei”: a călătorit și a pus întrebări ca să adune știrile. Arheologia modernă, care sapă cu metodă strat cu strat, s-a născut în ultimii 200 de ani." },
        { id: "luoghi", label: "Muzee și arhive", x: 70, y: 85, color: "#ef4444", html: "Unde se păstrează sursele.", why: "În <b>muzee</b> se păstrează obiectele, în <b>arhive</b> documentele, în <b>biblioteci</b> cărțile. Muzeul Capitolin din Roma, deschis în 1734, este unul dintre cele mai vechi muzee publice din lume." }
      ],
      edges: [
        ["passato", "fonti", "lasă urme:"],
        ["fonti", "scritte", "pot fi"],
        ["fonti", "materiali", "pot fi"],
        ["fonti", "iconografiche", "pot fi"],
        ["fonti", "orali", "pot fi"],
        ["materiali", "storico", "le dezgroapă"],
        ["scritte", "storico", "le citește"],
        ["storico", "luoghi", "le păstrează în"],
        ["iconografiche", "luoghi", "expuse în"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: detectivi ai istoriei",
      questions: [
        { type: "mc", q: "Cine caută urmele trecutului săpând în pământ?", options: ["Arheologul", "Bucătarul", "Astronautul"], answer: 0, explain: "Arheologul sapă și studiază sursele materiale." },
        { type: "tf", q: "În straturile pământului, de obicei, obiectele mai de jos sunt cele mai vechi.", answer: true, explain: "Straturile se depun unul peste altul: cele mai adânci sunt cele mai vechi." },
        { type: "mc", q: "De ce este util să comparăm mai multe surse?", options: ["Ca să pierdem timpul", "Pentru că o singură sursă poate greși", "Pentru că toate sursele sunt la fel"], answer: 1, explain: "Dacă mai multe surse spun același lucru, informația este mai sigură." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Sursele</b> sunt urmele trecutului.</li>
<li>Există surse <b>scrise</b>, <b>materiale</b>, <b>iconografice</b> și <b>orale</b>.</li>
<li><b>Istoricul</b> le caută, pune întrebări, le <b>compară</b> și povestește.</li>
<li><b>Arheologul</b> sapă: mai jos = mai vechi.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Sursă istorică", d: "Orice urmă care ne dă informații despre trecut." },
    { t: "Sursă scrisă", d: "Sursă cu cuvinte scrise: scrisori, jurnale, documente." },
    { t: "Sursă materială", d: "Un obiect: jucării, unelte, vase, case, oase." },
    { t: "Sursă iconografică", d: "O imagine: fotografii, desene, picturi, filme." },
    { t: "Sursă orală", d: "O poveste spusă cu voce tare, ca amintirile bunicilor." },
    { t: "Istoric", d: "Cel care studiază sursele ca să reconstituie trecutul." },
    { t: "Arheolog", d: "Cel care caută și studiază urmele trecutului săpând." },
    { t: "Arhivă", d: "Loc unde se păstrează documentele." },
    { t: "Vestigiu", d: "Obiect antic găsit în timpul unei săpături." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce este o sursă istorică?", options: ["O fântână din piață", "O urmă care ne dă informații despre trecut", "O carte de povești"], answer: 1, explain: "Sursele sunt urmele trecutului." },
      { type: "mc", q: "O scrisoare a străbunicii este o sursă…", options: ["scrisă", "orală", "materială"], answer: 0, explain: "Conține cuvinte scrise: sursă scrisă." },
      { type: "mc", q: "O sabie veche este o sursă…", options: ["iconografică", "materială", "orală"], answer: 1, explain: "Este un obiect: sursă materială." },
      { type: "mc", q: "O pictură este o sursă…", options: ["iconografică", "scrisă", "orală"], answer: 0, explain: "Imaginile sunt surse iconografice." },
      { type: "tf", q: "Amintirile povestite de bunic sunt o sursă orală.", answer: true, explain: "Sunt informații spuse cu voce tare." },
      { type: "tf", q: "O singură sursă este întotdeauna de ajuns ca să fim siguri.", answer: false, explain: "Sursele pot greși: este mai bine să comparăm mai multe." },
      { type: "text", q: "Cum se numește cel care sapă ca să găsească urmele trecutului?", answer: ["arheolog", "arheologul", "arheologă", "arheologa"], explain: "Arheologul." },
      { type: "order", q: "O săpătură: pune în ordine de la cele mai recente obiecte (sus) la cele mai vechi (jos).", items: ["doza de azi", "moneda bunicului", "vas roman", "oase preistorice"], explain: "Straturile mai adânci sunt cele mai vechi." },
      { type: "mc", q: "Unde se află astăzi Ötzi, omul venit din gheață?", options: ["La Bolzano", "La Paris", "La New York"], answer: 0, explain: "La Muzeul Arheologic din Tirolul de Sud, la Bolzano." },
      { type: "mc", q: "Care vulcan a îngropat Pompei în anul 79 d.Hr.?", options: ["Etna", "Vezuviu", "Stromboli"], answer: 1, explain: "Vezuviu, lângă Napoli." },
      { type: "mc", q: "Unde se păstrează documentele vechi?", options: ["În arhive", "În frigidere", "În sala de sport"], answer: 0, explain: "Arhivele păstrează documentele." }
    ]
  }
});

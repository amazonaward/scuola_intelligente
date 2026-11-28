TOPIC('ro', {
  id: "l1-sto-ebrei-fenici",
  title: "Evrei, fenicieni și popoarele Mediteranei",
  intro: "În jurul anului <b>1200 î.Hr.</b>, Orientul Apropiat trece printr-o mare criză: imperii care se prăbușesc, orașe distruse, migrații ale „Popoarelor Mării”. Din ruine apar popoare mai mici, dar sortite să lase o moștenire uriașă. <b>Evreii</b> dezvoltă ideea unui <b>singur Dumnezeu</b> și un tezaur de legi și povestiri aflat la baza iudaismului, creștinismului și islamului. <b>Fenicienii</b>, navigatori și negustori iscusiți, întemeiază colonii în toată Mediterana și răspândesc <b>alfabetul</b> din care derivă cele pe care le folosim astăzi. În această lecție îi întâlnim, împreună cu vecinii lor.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Orientul Apropiat după 1200 î.Hr.",
      html: `<p>Spre <b>1200 î.Hr.</b>, multe civilizații din Epoca Bronzului s-au prăbușit aproape deodată: hitiții au dispărut, orașele miceniene și Ugarit au fost distruse, Egiptul a slăbit. Egiptenii vorbesc despre <b>Popoarele Mării</b>, grupuri misterioase care atacau dinspre mare. Cauzele sunt încă dezbătute: secetă, cutremure, migrații, ruperea schimburilor de bronz, revolte interne.</p>
<p>În golul de putere apar sau se întăresc <b>mici regate</b> în fâșia de pământ dintre Mediterană și deșertul siro-arab, regiunea <b>Canaan</b> (astăzi Liban, Israel, Palestina):</p>
<ul>
<li><b>fenicienii</b> pe coastă (Liban);</li>
<li><b>evreii</b> (sau israeliții) în dealurile din interior;</li>
<li><b>filistenii</b> pe coasta de sud (de la ei vine „Palestina”);</li>
<li><b>arameii</b> în Siria, a căror limbă va deveni lingua franca a Orientului Apropiat.</li>
</ul>
<p>Mai la vest, în jurul secolului al VII-lea î.Hr., în regatul <b>Lidiei</b> (Anatolia) apare o altă invenție fundamentală: <b>moneda</b> bătută (regele Cresus).</p>`
    },
    {
      type: "3d",
      title: "Hartă 3D: fenicieni și evrei în Mediterana",
      scene: "spacetime",
      caption: "Baza este Marea Mediterană, înălțimea este timpul (1200–500 î.Hr.). Atinge evenimentele: săgețile leagă cauzele de efecte.",
      options: {
        lat: [29, 42],
        lon: [-8, 40],
        years: [-1250, -500],
        places: [
          { lat: 33.27, lon: 35.2, label: "Tir" },
          { lat: 31.78, lon: 35.22, label: "Ierusalim" },
          { lat: 36.85, lon: 10.32, label: "Cartagina" },
          { lat: 36.53, lon: -6.29, label: "Cadiz" }
        ],
        events: [
          { id: "mare", lat: 33.5, lon: 36.0, year: -1200, label: "Criza și Popoarele Mării", html: "În jurul anului 1200 î.Hr. se prăbușesc multe regate din Epoca Bronzului: loc pentru popoare și cetăți-stat noi.", causes: [] },
          { id: "fenici", lat: 34.1, lon: 35.65, year: -1100, label: "Orașele feniciene", html: "Byblos, Sidon și Tir devin puteri comerciale. Pun la punct un <b>alfabet de 22 de semne</b> (doar consoane).", causes: ["mare"] },
          { id: "davide", lat: 31.78, lon: 35.22, year: -1000, label: "David și Ierusalimul", html: "Regele David unifică triburile lui Israel și face din Ierusalim capitala (circa 1000 î.Hr.). Fiul său Solomon construiește Templul (circa 960 î.Hr.).", causes: ["mare"] },
          { id: "cadice", lat: 36.53, lon: -6.29, year: -1000, label: "Gadir (Cadiz)", html: "Printre cele mai vechi colonii feniciene din Occident (tradițional circa 1100 î.Hr.): căutau argint și cositor din Spania.", causes: ["fenici"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -814, label: "Întemeierea Cartaginei", html: "Potrivit tradiției, în 814 î.Hr. prințesa Elissa-Didona din Tir întemeiază Cartagina („orașul nou”) în Africa, care va deveni cea mai mare putere din Mediterana de vest.", causes: ["fenici"] },
          { id: "scisma", lat: 32.2, lon: 35.2, year: -930, label: "Regatul se împarte", html: "La moartea lui Solomon (circa 930 î.Hr.), regatul se rupe: Israel la nord (capitala Samaria) și Iuda la sud (Ierusalim).", causes: ["davide"] },
          { id: "assiri", lat: 32.2, lon: 35.2, year: -722, label: "Asirienii distrug Israelul", html: "În 722 î.Hr., asirienii cuceresc Samaria și deportează o mare parte din populație: cele „zece triburi pierdute”.", causes: ["scisma"] },
          { id: "babilonia", lat: 31.78, lon: 35.22, year: -586, label: "Distrugerea Templului", html: "În 586 î.Hr., Nabucodonosor al II-lea cucerește Ierusalimul, distruge Templul și deportează elita la Babilon: este <b>exilul babilonian</b>. Evreii pun în scris multe texte sacre.", causes: ["assiri"] },
          { id: "ciro", lat: 31.78, lon: 35.22, year: -539, label: "Întoarcerea din Babilon", html: "În 539 î.Hr., Cirus cel Mare, regele perșilor, cucerește Babilonul și le permite exilaților să se întoarcă. Al Doilea Templu va fi inaugurat în jurul anului 516 î.Hr.", causes: ["babilonia"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Evreii: o istorie, o credință",
      html: `<p>Principalele noastre izvoare sunt textele sacre adunate în <b>Biblia ebraică</b> (<i>Tanakh</i>), pe care istoricii o citesc ca izvor religios și istoric, de confruntat cu arheologia.</p>
<ul>
<li><b>Patriarhii</b>: potrivit tradiției, <b>Avraam</b> părăsește Urul din Mesopotamia spre Canaan, cu promisiunea lui Dumnezeu: un pământ și urmași. Urmează Isaac și Iacov (Israel).</li>
<li><b>Exodul</b>: evreii, potrivit relatării biblice, trăiesc ca sclavi în Egipt și sunt conduși de <b>Moise</b> spre Canaan (tradițional în secolul al XIII-lea î.Hr.). Pe <b>Sinai</b> primesc Legea (cele <b>Zece porunci</b>) și încheie o <b>Alianță</b> cu Dumnezeu. Paștele evreiesc (<i>Pesah</i>) amintește această eliberare.</li>
<li><b>Judecători și regi</b>: după așezarea în Canaan, cele douăsprezece triburi sunt conduse de șefi carismatici (judecătorii). Ca să se apere de filisteni, aleg un rege: <b>Saul</b>, apoi <b>David</b> (circa 1000 î.Hr.), care cucerește <b>Ierusalimul</b>, și <b>Solomon</b>, constructorul Templului.</li>
<li><b>Împărțirea</b> (circa 930 î.Hr.): <b>Israel</b> la nord și <b>Iuda</b> la sud. Asirienii distrug Israelul (722 î.Hr.), Babilonul distruge Iuda (586 î.Hr.).</li>
<li><b>Întoarcerea</b>, datorită toleranței persane (539 î.Hr.): reconstruirea Templului și stabilirea <b>Torei</b> ca lege. Poporul lui Iuda primește numele de <b>iudei</b> (de unde „evrei” în sens modern).</li>
</ul>
<p>Atenție: pentru istorici, multe detalii (Exodul, patriarhii, dimensiunile regatului lui David) rămân dezbătute, pentru că lipsesc dovezile arheologice directe.</p>`
    },
    {
      type: "text",
      title: "3. Marea noutate: un singur Dumnezeu",
      html: `<p>Aproape toate popoarele antice erau <b>politeiste</b>: mulți zei, adesea legați de un oraș, de un fenomen al naturii, de o meserie. Evreii dezvoltă treptat <b>monoteismul</b>: un singur Dumnezeu, <b>Yahweh</b>, creator al tuturor lucrurilor, nevăzut (nu trebuie reprezentat prin imagini), drept și legat de poporul său printr-o <b>alianță</b>.</p>
<ul>
<li>Dumnezeu nu este natura: este <b>deasupra</b> naturii și a istoriei. Istoria are un sens și o direcție (eliberare, dreptate, așteptarea Mesiei).</li>
<li><b>Legea</b> privește întreaga viață: cultul, justiția, familia, hrana, relațiile cu străinul și cu săracul.</li>
<li><b>Profeții</b> (Isaia, Ieremia, Ezechiel...) nu prezic viitorul ca niște ghicitori, ci îi cheamă pe popor și pe regi la dreptate socială și la credincioșie.</li>
<li>Cărțile sacre (<b>Tora</b>, Profeții, Scrierile) sunt puse în scris mai ales după exil și devin identitatea comună a poporului, chiar fără stat și fără Templu.</li>
</ul>
<p>Din <b>iudaism</b> vor deriva <b>creștinismul</b> (secolul I d.Hr.) și <b>islamul</b> (secolul al VII-lea d.Hr.): cele trei mari religii monoteiste.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: evreii",
      questions: [
        { type: "mc", q: "Cine i-a condus pe evrei afară din Egipt, potrivit tradiției?", options: ["Moise", "David", "Avraam"], answer: 0, explain: "Moise, care a primit Legea pe Sinai." },
        { type: "mc", q: "Care rege a făcut din Ierusalim capitala?", options: ["Saul", "David", "Nabucodonosor"], answer: 1, explain: "David, în jurul anului 1000 î.Hr." },
        { type: "tf", q: "Monoteismul evreiesc prevedea un singur Dumnezeu, care nu trebuie reprezentat prin imagini.", answer: true, explain: "Dumnezeu este unic și nevăzut." },
        { type: "mc", q: "Ce a fost exilul babilonian?", options: ["Deportarea evreilor la Babilon după 586 î.Hr.", "Fuga din Egipt", "O călătorie a lui Avraam"], answer: 0, explain: "Nabucodonosor al II-lea a distrus Templul și a deportat elita." }
      ]
    },
    {
      type: "text",
      title: "4. Fenicienii: negustorii mării",
      html: `<p>Fenicienii locuiau pe o îngustă fâșie de coastă (astăzi Liban), cu munți acoperiți de <b>cedri</b> în spate și puțin loc pentru câmpuri. Marea era calea lor de creștere.</p>
<ul>
<li><b>Cetăți-stat</b> independente (Byblos, Sidon, Tir, Arwad), fiecare cu propriul rege și cu o flotă; nu au format niciodată un singur regat. Tirul era cel mai bogat, construit pe o insulă aproape de coastă.</li>
<li><b>Nave și navigație</b>: construiau nave de transport și de război (din lemn de cedru), se orientau după stele, în special după Ursa Mică („steaua fenicienilor”).</li>
<li><b>Mărfuri</b>: lemn de cedru, sticlă, <b>purpură</b> (colorant obținut din molusca murex, atât de prețios încât „culoarea purpurie” a devenit simbol al regilor și al împăraților; numele „fenicieni” vine poate din grecescul <i>phoinix</i>, „roșu-purpuriu”), țesături, fildeș, metale.</li>
<li><b>Comerț</b>: schimbau produse între Orient și Occident: din Spania luau argint și cositor, din Egipt in și aur.</li>
</ul>
<p>Fenicienii nu erau cuceritori: căutau <b>piețe și porturi</b>, nu teritorii. Stăpânirea lor era cea a comerțului.</p>`
    },
    {
      type: "text",
      title: "5. Coloniile și Cartagina",
      html: `<p>Între secolele al X-lea și al VII-lea î.Hr., fenicienii au întemeiat <b>emporii</b> (porturi comerciale) și colonii de-a lungul rutelor din Mediterana: în Cipru, în Malta, în <b>Sicilia</b> (Motya, Palermo/<i>Zyz</i>, Soluntum), în <b>Sardinia</b> (Nora, Tharros, Sulky), în Africa de Nord (<b>Utica</b>, <b>Cartagina</b>), în Spania (<b>Gadir</b>, astăzi Cadiz).</p>
<p>Cea mai importantă a fost <b>Cartagina</b> (în actuala Tunisie), întemeiată, potrivit tradiției, în <b>814 î.Hr.</b> de prințesa din Tir <b>Elissa (Didona)</b>. Când Tirul a fost slăbit de asirieni și apoi de Babilon, Cartagina a devenit o putere autonomă: avea o flotă uriașă, o aristocrație de negustori și un imperiu comercial în Mediterana de vest. A devenit marea rivală a <b>Romei</b>, care a distrus-o în 146 î.Hr. (vom vedea asta la războaiele punice; „punic” vine de la <i>poenus</i>, „fenician”).</p>`
    },
    {
      type: "svg",
      title: "Descoperirea alfabetului",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Un semn pentru fiecare sunet: evoluția literei „A”</text>
<g stroke="#1e3a8a" stroke-width="4" fill="none">
<path d="M50 90 L80 140 L110 90 M80 140 L80 110" />
<path d="M200 150 L230 90 L260 150 M215 125 L245 125"/>
<path d="M350 150 L380 90 L410 150 M360 128 L400 128"/>
<path d="M490 150 L520 90 L550 150 M502 130 L538 130"/>
</g>
<g font-size="15" fill="#0f172a" text-anchor="middle">
<text x="80" y="185">hieroglifă:</text><text x="80" y="205">cap de bou</text>
<text x="230" y="185">feniciană</text><text x="230" y="205">aleph („bou”)</text>
<text x="380" y="185">greacă</text><text x="380" y="205">alfa</text>
<text x="520" y="185">latină</text><text x="520" y="205">A</text>
</g>
<g stroke="#b45309" stroke-width="3" fill="#b45309"><line x1="115" y1="115" x2="170" y2="115"/><polygon points="170,108 186,115 170,122"/>
<line x1="270" y1="115" x2="320" y2="115"/><polygon points="320,108 336,115 320,122"/>
<line x1="425" y1="115" x2="470" y2="115"/><polygon points="470,108 486,115 470,122"/></g>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#7c2d12">Schemă simplificată: forma răsturnată a literei amintește de capul unui bou.</text>
</svg>`,
      caption: "Alfabetul fenician (22 de semne, doar consoane) a fost preluat de greci, care au adăugat vocalele; din greacă derivă alfabetul latin și cel chirilic."
    },
    {
      type: "text",
      title: "6. Alfabetul: revoluția celor 22 de semne",
      html: `<p>Sistemele de scriere anterioare (cuneiform, hieroglife) aveau sute de semne și cereau ani de învățare: era treaba scribilor. <b>Alfabetul fenician</b>, pus la punct în jurul anilor <b>1200–1000 î.Hr.</b> pornind de la scrieri semitice anterioare, are doar <b>22 de semne</b>, câte unul pentru fiecare <b>consoană</b>. Învățarea citirii și a scrierii devine mult mai rapidă și utilă negustorilor.</p>
<ul>
<li>Numele primelor litere înseamnă un obiect: <i>aleph</i> = bou, <i>bet</i> = casă, <i>gimel</i> = cămilă. De aici <b>alfa, beta, gama</b> și cuvântul „alfabet”.</li>
<li><b>Grecii</b> (circa secolele IX–VIII î.Hr.) au preluat alfabetul și au folosit unele semne pentru <b>vocale</b>, făcându-l potrivit limbilor indo-europene.</li>
<li>Din greacă derivă alfabetul <b>etrusc</b>, apoi cel <b>latin</b> (al nostru) și cel <b>chirilic</b> (rusă, bulgară...).</li>
<li>Și <b>ebraica</b> și <b>araba</b> derivă din scrieri semitice apropiate de cea feniciană și se scriu de la dreapta la stânga.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Tir, circa 800 î.Hr.: explorăm marea sau rămânem acasă?",
      html: `<p>Ești un negustor bogat din Tir. Orașul este suprapopulat, pământul este puțin, asirienii cer tributuri tot mai grele. Unii căpitani povestesc că dincolo de mare, în îndepărtatul Occident, există mine de argint și cositor și coaste libere de imperii. Dar călătoria durează săptămâni, iar riscul este mare.</p>`,
      question: "Ce hotărăști?",
      options: [
        { label: "Rămân la Tir și plătesc tributul asirienilor: nu merită să risc.", outcome: "Se evită riscul, dar comerțul se reduce, iar impozitele cresc. Cu timpul, Tirul și-ar pierde bogăția și importanța." },
        { label: "Întemeiez emporii și colonii în Mediterana de vest, departe de imperii.", outcome: "Este alegerea fenicienilor: porturi la fiecare câteva zile de navigație, alianțe cu popoarele locale și siguranța comerțului. Unele colonii, precum Cartagina, vor deveni la fel de bogate ca metropola." },
        { label: "Înarmez o armată și cuceresc teritorii vecine ca să extind regatul.", outcome: "O cetate-stat comercială nu are resursele necesare pentru a purta un război împotriva unui imperiu precum cel asirian: ar fi un pariu prea riscant." }
      ],
      answer: 1,
      explain: "Fenicienii au ales să se <b>extindă pe mare</b>: coloniile le-au asigurat materii prime și piețe. Când Tirul a căzut sub imperiile orientale, coloniile, și Cartagina în special, au continuat să prospere."
    },
    {
      type: "example",
      title: "Exemplu practic: de unde vine cuvântul „bibliotecă”?",
      html: `<p>Orașul fenician <b>Byblos</b> exporta papirus egiptean. Grecii au numit de aceea papirusul <i>byblos</i>, iar „cartea” făcută din papirus, <i>biblíon</i>. De aici:</p>
<ul>
<li><b>Biblie</b> (literal: „cărțile”), <b>bibliotecă</b> („depozit de cărți”), <b>bibliografie</b>.</li>
</ul>
<p>Și multe cuvinte ale comerțului mediteranean vin din limbi semitice: „magazie” și „tarif” (arabă), „zahăr” și „cifră” (arabă). Cuvintele călătoresc la fel ca mărfurile: a urmări un cuvânt este un mod de a face istorie.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: citim un text antic cu spirit critic",
      html: `<p>Biblia este un izvor istoric despre regatele Israel și Iuda, dar nu este o relatare neutră: este un text religios scris și reelaborat de-a lungul secolelor. Cum îl folosește istoricul?</p>
<ol>
<li><b>Cine scrie și când?</b> Textele au fost redactate și retușate mult timp, în mare parte după evenimente.</li>
<li><b>Cu ce scop?</b> Să transmită un mesaj religios: dreptate și credincioșie față de Alianță.</li>
<li><b>Ce spun alte izvoare?</b> Inscripțiile asiriene (precum cele ale lui Sanherib care asediază Ierusalimul), textele babiloniene și săpăturile arheologice confirmă unele evenimente și le corectează pe altele.</li>
</ol>
<p>De exemplu, textele asiriene confirmă distrugerea Samariei în 722 î.Hr. și deportarea locuitorilor ei. Încrucișarea izvoarelor este metoda centrală a istoriei.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? „Culoarea purpurie” costa mai mult decât aurul",
      html: `<p>Pentru a obține un singur gram de colorant purpuriu erau necesare mii de moluște murex, din care se extrăgea o glandă și se lăsa la macerat. Rezultatul era un roșu-violaceu care nu se decolora. În Antichitate, o țesătură purpurie putea costa mai mult decât greutatea ei în argint. De aceea era rezervată regilor, preoților și, la Roma, senatorilor și împăraților: „a te naște în purpură” însemna a te naște în familia imperială.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cei care au ocolit Africa",
      html: `<p>Istoricul grec Herodot povestește că, în jurul anului <b>600 î.Hr.</b>, faraonul Necho al II-lea a însărcinat o expediție de marinari fenicieni să ocolească Africa. Au plecat din Marea Roșie, în trei ani s-au întors prin Coloanele lui Hercule și au povestit că, în timpul navigației, aveau „soarele în dreapta”: un detaliu pe care Herodot nu-l credea, dar care dovedește că trecuseră de ecuator spre sud. Dacă drumul a avut loc cu adevărat, el ar precede cu peste 2000 de ani pe cel al portughezului Vasco da Gama.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege evreii și fenicienii",
      intro: "Două popoare mici, două moșteniri uriașe. Iată câteva chei pentru a le ține minte.",
      tabs: [
        {
          label: "⚓ Instrument sau idee",
          html: `<p>Un mod simplu: fenicienii au lăsat <b>un instrument</b>, evreii <b>o idee</b>.</p>
<ul>
<li><b>Fenicienii → alfabetul</b>: un mod rapid de a scrie orice limbă; a schimbat comunicarea.</li>
<li><b>Evreii → monoteismul etic</b>: un singur Dumnezeu, o Lege care privește și dreptatea și sărăcia, un text sacru care ține unit un popor chiar și în exil.</li>
</ul>
<p>Două popoare fără mari armate și fără imperii întinse au lăsat o urmă mai durabilă decât multe imperii.</p>`
        },
        {
          label: "🗺️ Rotește globul",
          html: `<p>Rotește globul: rutele feniciene de pe coasta Libanului la Cadiz și la Cartagina.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 33.27, lon: 35.2, label: "Tir", color: "#7c3aed" },
              { lat: 35.1, lon: 33.4, label: "Cipru", color: "#f97316" },
              { lat: 35.9, lon: 14.4, label: "Malta", color: "#f97316" },
              { lat: 37.9, lon: 12.5, label: "Motya", color: "#f97316" },
              { lat: 36.85, lon: 10.32, label: "Cartagina", color: "#ef4444" },
              { lat: 36.53, lon: -6.29, label: "Gadir (Cadiz)", color: "#f97316" },
              { lat: 31.78, lon: 35.22, label: "Ierusalim", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 4, 5], color: "#7c3aed" }]
          }
        },
        {
          label: "🔤 Potrivește litera și sensul",
          html: `<p>Unele litere feniciene aveau un nume care indica un obiect. Potrivește-le cu sensurile lor.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Aleph", "Bou"],
              ["Bet", "Casă"],
              ["Gimel", "Cămilă"],
              ["Mem", "Apă"],
              ["Ayin", "Ochi"]
            ]
          }
        },
        {
          label: "📅 Linia timpului",
          html: `<p>Parcurge datele principale ale evreilor și fenicienilor.</p>`,
          widget: "timeline",
          options: {
            unit: "ani",
            events: [
              { year: -1200, label: "Criza și Popoarele Mării", icon: "🌊" },
              { year: -1000, label: "David la Ierusalim", icon: "👑" },
              { year: -960, label: "Templul lui Solomon", icon: "🏛️" },
              { year: -930, label: "Împărțirea regatului", icon: "✂️" },
              { year: -814, label: "Cartagina", icon: "⚓" },
              { year: -722, label: "Sfârșitul Israelului", icon: "⚔️" },
              { year: -586, label: "Exilul babilonian", icon: "⛓️" },
              { year: -539, label: "Întoarcerea cu Cirus", icon: "🏠" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: popoare mici, moșteniri mari",
      nodes: [
        { id: "crisi", label: "Criza din 1200 î.Hr.", x: 50, y: 6, color: "#64748b", html: "Prăbușirea regatelor din Epoca Bronzului, Popoarele Mării.", why: "Prăbușirea marilor imperii a lăsat spații libere: orașele de coastă și popoarele din dealuri au putut crește fără să fie sufocate de o putere centrală." },
        { id: "fenici", label: "Fenicienii", x: 20, y: 32, color: "#7c3aed", html: "Cetăți-stat comerciale pe coasta libaneză.", why: "Puțin pământ arabil și mult lemn: resursa lor era marea. Au ales comerțul, nu cucerirea." },
        { id: "ebrei", label: "Evreii", x: 80, y: 32, color: "#2563eb", html: "Triburi, apoi regatele Israel și Iuda; credința într-un singur Dumnezeu.", why: "Popor mic, strâns între mari imperii (Egipt, Asiria, Babilon): în exil, religia și Legea scrisă au devenit adevărata lui legătură." },
        { id: "colonie", label: "Colonii și Cartagina", x: 15, y: 60, color: "#f97316", html: "Emporii feniciene din Liban până în Spania; Cartagina întemeiată în 814 î.Hr.", why: "Căutau metale și piețe sigure departe de imperiile orientale; coloniile au format o rețea autonomă care a supraviețuit Tirului." },
        { id: "alfabeto", label: "Alfabetul", x: 50, y: 60, color: "#16a34a", html: "22 de semne consonantice.", why: "Negustorii aveau nevoie de o scriere simplă și rapidă pentru contracte și scrisori: alfabetul a făcut-o accesibilă multora, nu doar scribilor." },
        { id: "mono", label: "Monoteismul", x: 85, y: 60, color: "#0ea5e9", html: "Un singur Dumnezeu, o Lege, o Alianță.", why: "După distrugerea Templului, ideea unui Dumnezeu care nu este legat de un loc a permis păstrarea identității în exil și a deschis calea creștinismului și islamului." },
        { id: "eredita", label: "Moștenirea în Mediterana", x: 50, y: 92, color: "#7c2d12", html: "Alfabetele grecesc, latin; Biblia; comerțul.", why: "Grecii și romanii au moștenit atât alfabetul, cât și rutele maritime; din iudaism au apărut creștinismul și islamul." }
      ],
      edges: [
        ["crisi", "fenici", "face loc"],
        ["crisi", "ebrei", "face loc"],
        ["fenici", "colonie", "întemeiază"],
        ["fenici", "alfabeto", "răspândesc"],
        ["ebrei", "mono", "dezvoltă"],
        ["colonie", "eredita", "lasă rețele și orașe"],
        ["alfabeto", "eredita", "trece la greci și romani"],
        ["mono", "eredita", "dă naștere unor religii"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: fenicienii",
      questions: [
        { type: "mc", q: "Câte litere (consoane) avea alfabetul fenician?", options: ["12", "22", "50"], answer: 1, explain: "Douăzeci și două de semne, doar consoane." },
        { type: "tf", q: "Fenicienii au format un mare imperiu unit sub un singur rege.", answer: false, explain: "Erau cetăți-stat independente." },
        { type: "text", q: "Cum se numește colonia feniciană din Africa de Nord care a devenit mare putere?", answer: ["cartagina", "cartagena"], explain: "Cartagina, întemeiată (tradițional) în 814 î.Hr." },
        { type: "mc", q: "Cine a adăugat vocalele alfabetului fenician?", options: ["Grecii", "Romanii", "Egiptenii"], answer: 0, explain: "Grecii au adaptat semnele la vocalele lor." }
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>După criza din <b>1200 î.Hr.</b> apar popoare mai mici: fenicieni, evrei, filisteni, arameeni.</li>
<li><b>Evreii</b>: Avraam, Moise (Exodul, Legea), regatele lui David și Solomon, împărțirea în Israel și Iuda, exilul babilonian (586 î.Hr.). Moștenire: <b>monoteismul</b> și Tora.</li>
<li><b>Fenicienii</b>: cetăți-stat (Tir, Sidon, Byblos), comerț, purpură, colonii; <b>Cartagina</b> (814 î.Hr.).</li>
<li><b>Alfabetul</b> fenician de 22 de consoane → grec (cu vocale) → latin.</li>
<li><b>Moneda</b> apare în Lidia (secolul al VII-lea î.Hr.).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Popoarele Mării", d: "Grupuri de invadatori care, în jurul anului 1200 î.Hr., au atacat coastele de est ale Mediteranei." },
    { t: "Monoteism", d: "Credința într-un singur Dumnezeu." },
    { t: "Politeism", d: "Credința în mai mulți zei." },
    { t: "Alianță", d: "Pactul dintre Dumnezeu și poporul evreu, baza Legii." },
    { t: "Tora", d: "Legea: primele cinci cărți ale Bibliei ebraice." },
    { t: "Profet", d: "Cel care vorbește în numele lui Dumnezeu, chemând poporul la dreptate." },
    { t: "Exilul babilonian", d: "Deportarea evreilor din Iuda la Babilon după 586 î.Hr." },
    { t: "Emporiu", d: "Port comercial pe teritoriu străin." },
    { t: "Purpură", d: "Colorant prețios obținut din molusca murex." },
    { t: "Alfabet", d: "Sistem de scriere în care fiecare semn indică un sunet." },
    { t: "Punic", d: "Referitor la fenicienii din Occident și la Cartagina." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce s-a întâmplat în jurul anului 1200 î.Hr. în estul Mediteranei?", options: ["Prăbușirea multor regate din Epoca Bronzului", "Nașterea Imperiului Roman", "Inventarea monedei"], answer: 0, explain: "Criză generală, cu așa-numitele Popoare ale Mării." },
      { type: "mc", q: "Care suveran a făcut din Ierusalim capitala evreilor?", options: ["David", "Solomon", "Saul"], answer: 0, explain: "David, în jurul anului 1000 î.Hr. (Solomon a construit acolo Templul)." },
      { type: "tf", q: "Regatul evreiesc s-a împărțit în Israel (nord) și Iuda (sud).", answer: true, explain: "După moartea lui Solomon, circa 930 î.Hr." },
      { type: "mc", q: "Ce a fost exilul babilonian?", options: ["Deportarea evreilor din Iuda la Babilon", "Fuga din Egipt", "Cucerirea Canaanului"], answer: 0, explain: "După distrugerea Templului în 586 î.Hr." },
      { type: "text", q: "Cum se numește principalul oraș fenician întemeiat pe o insulă, cu o mare flotă?", answer: ["tir", "tyr", "tirul", "tyrul"], explain: "Tir." },
      { type: "mc", q: "De ce au întemeiat fenicienii colonii?", options: ["Pentru a avea porturi comerciale și materii prime", "Pentru a întemeia imperii teritoriale", "Pentru a răspândi monoteismul"], answer: 0, explain: "Căutau piețe și metale, nu cucerire." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["David la Ierusalim", "Întemeierea Cartaginei", "Căderea Samariei", "Distrugerea Templului", "Întoarcerea exilaților cu Cirus"], explain: "1000, 814, 722, 586, 539 î.Hr. aproximativ." },
      { type: "mc", q: "Care este principala deosebire dintre alfabetul fenician și cuneiform?", options: ["Cel fenician are puține semne, câte unul pentru fiecare sunet", "Cel fenician are mii de semne", "Cel fenician folosește doar desene"], answer: 0, explain: "22 de semne față de sute." },
      { type: "num", q: "Câte semne avea alfabetul fenician?", answer: 22, tol: 0, explain: "Douăzeci și două de consoane." },
      { type: "tf", q: "Alfabetul latin derivă din cel grec, care derivă din cel fenician.", answer: true, explain: "Fenician → grec → etrusc/latin." },
      { type: "mc", q: "Care dintre acestea NU este o religie derivată din iudaism?", options: ["Creștinismul", "Islamul", "Zoroastrismul"], answer: 2, explain: "Zoroastrismul este religia persană, de origine diferită." }
    ]
  }
});

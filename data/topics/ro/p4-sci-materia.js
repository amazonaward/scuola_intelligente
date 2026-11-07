TOPIC('ro', {
  id: "p4-sci-materia",
  title: "Materia",
  intro: "Banca, apa pe care o bei, aerul pe care îl respiri și chiar și tu: totul este făcut din <b>materie</b>. Dar din ce este făcută materia? Din bucățele foarte mici, invizibile, numite <b>atomi</b>. Să descoperim cum se comportă în <b>solide</b>, în <b>lichide</b> și în <b>gaze</b> și cum își poate <b>schimba starea</b> materia.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ce este materia",
      html: `<p><b>Materia</b> este tot ce <b>ocupă un loc în spațiu</b> și are o <b>masă</b> (adică „cântărește”). Sunt materie lemnul, apa, fierul, aerul, corpul nostru.</p>
<p><b>Nu</b> sunt materie lumina, sunetul, căldura, gândurile sau emoțiile: ele nu ocupă spațiu și nu au masă.</p>
<p>Fiecare obiect are:</p>
<ul>
<li>o <b>masă</b>: cantitatea de materie (se măsoară în grame, kilograme…);</li>
<li>un <b>volum</b>: spațiul pe care îl ocupă (se măsoară în litri, cm³, m³…).</li>
</ul>
<p>Și aerul are masă și ocupă spațiu: încearcă să strivești o sticlă goală închisă cu dop… nu reușești, pentru că este plină de aer!</p>`
    },
    {
      type: "text",
      title: "Atomi și molecule: cărămiduțele materiei",
      html: `<p>Dacă ai putea tăia o bucată de fier în două, apoi din nou în două și iar și iar… la sfârșit ai ajunge la o particulă foarte mică, care nu mai poate fi împărțită fără să înceteze să fie fier: <b>atomul</b>.</p>
<ul>
<li><b>Atomii</b> sunt foarte mici: într-un singur grăunte de sare sunt aproximativ un miliard de miliarde!</li>
<li>Există aproximativ <b>118 tipuri</b> de atomi, numite <b>elemente</b>: hidrogen (H), oxigen (O), carbon (C), fier (Fe), aur (Au)…</li>
<li>Atomii se unesc între ei și formează <b>molecule</b>. De exemplu, <b>2 atomi de hidrogen + 1 de oxigen</b> formează o moleculă de <b>apă</b>: <b>H₂O</b>.</li>
</ul>
<p>Cu puține tipuri de atomi, natura construiește milioane de substanțe diferite, la fel cum cu cele 21 de litere ale alfabetului italian scriem toate cuvintele!</p>
<p>Particulele materiei sunt <b>mereu în mișcare</b> și se <b>atrag</b> între ele. Cât se mișcă și cât de aproape stau decide <b>starea</b> materiei.</p>`
    },
    {
      type: "3d",
      title: "Molecula de apă în 3D",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0.3, z: 0, r: 0.6, color: "#ef4444", label: "O" },
          { x: -0.78, y: -0.3, z: 0, r: 0.38, color: "#f8fafc", label: "H" },
          { x: 0.78, y: -0.3, z: 0, r: 0.38, color: "#f8fafc", label: "H" }
        ],
        bonds: [[0, 1], [0, 2]]
      },
      caption: "O moleculă de apă: un atom de oxigen (roșu) legat de doi atomi de hidrogen (albi). Are forma unui „V” puțin deschis, cu un unghi de aproximativ 104,5°."
    },
    {
      type: "text",
      title: "Cele trei stări ale materiei",
      html: `<table>
<tr><th></th><th>🧊 Solid</th><th>💧 Lichid</th><th>💨 Gazos (gaz)</th></tr>
<tr><td><b>Formă</b></td><td>proprie</td><td>o ia pe cea a vasului</td><td>o ia pe cea a vasului</td></tr>
<tr><td><b>Volum</b></td><td>propriu</td><td>propriu</td><td>ocupă tot spațiul disponibil</td></tr>
<tr><td><b>Particule</b></td><td>foarte apropiate, ordonate, vibrează pe loc</td><td>apropiate, dar alunecă una peste alta</td><td>depărtate, se mișcă foarte repede în toate direcțiile</td></tr>
<tr><td><b>Poate fi comprimat?</b></td><td>nu</td><td>aproape deloc</td><td>da, foarte mult</td></tr>
<tr><td><b>Exemple</b></td><td>piatră, gheață, lemn</td><td>apă, ulei, lapte</td><td>aer, vapori, heliul din baloane</td></tr>
</table>
<p>Atenție: <b>nisipul</b>, <b>făina</b> și <b>sarea</b> par lichide pentru că se pot turna, dar sunt <b>solide</b>: fiecare grăunte are forma lui!</p>`
    },
    {
      type: "svg",
      title: "Particulele în cele trei stări",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="20" y="40" width="180" height="180" fill="#e0e7ff" stroke="#3730a3" stroke-width="4"/>
<g fill="#6366f1"><circle cx="50" cy="70" r="14"/><circle cx="82" cy="70" r="14"/><circle cx="114" cy="70" r="14"/><circle cx="146" cy="70" r="14"/><circle cx="178" cy="70" r="14"/>
<circle cx="50" cy="102" r="14"/><circle cx="82" cy="102" r="14"/><circle cx="114" cy="102" r="14"/><circle cx="146" cy="102" r="14"/><circle cx="178" cy="102" r="14"/>
<circle cx="50" cy="134" r="14"/><circle cx="82" cy="134" r="14"/><circle cx="114" cy="134" r="14"/><circle cx="146" cy="134" r="14"/><circle cx="178" cy="134" r="14"/>
<circle cx="50" cy="166" r="14"/><circle cx="82" cy="166" r="14"/><circle cx="114" cy="166" r="14"/><circle cx="146" cy="166" r="14"/><circle cx="178" cy="166" r="14"/>
<circle cx="50" cy="198" r="14"/><circle cx="82" cy="198" r="14"/><circle cx="114" cy="198" r="14"/><circle cx="146" cy="198" r="14"/><circle cx="178" cy="198" r="14"/></g>
<text x="110" y="28" font-size="20" text-anchor="middle" fill="#3730a3" font-weight="bold">SOLID</text>
<text x="110" y="250" font-size="15" text-anchor="middle" fill="#1f2937">ordonate, vibrează</text>
<path d="M230 40 L230 220 L410 220 L410 40" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<g fill="#0ea5e9"><circle cx="255" cy="205" r="14"/><circle cx="285" cy="200" r="14"/><circle cx="318" cy="206" r="14"/><circle cx="350" cy="198" r="14"/><circle cx="385" cy="205" r="14"/>
<circle cx="262" cy="174" r="14"/><circle cx="298" cy="170" r="14"/><circle cx="335" cy="173" r="14"/><circle cx="372" cy="170" r="14"/>
<circle cx="250" cy="143" r="14"/><circle cx="285" cy="140" r="14"/><circle cx="320" cy="142" r="14"/><circle cx="356" cy="140" r="14"/><circle cx="392" cy="145" r="14"/></g>
<text x="320" y="28" font-size="20" text-anchor="middle" fill="#0369a1" font-weight="bold">LICHID</text>
<text x="320" y="250" font-size="15" text-anchor="middle" fill="#1f2937">apropiate, alunecă</text>
<rect x="440" y="40" width="180" height="180" fill="#fef3c7" stroke="#b45309" stroke-width="4"/>
<g fill="#f59e0b"><circle cx="470" cy="70" r="14"/><circle cx="580" cy="80" r="14"/><circle cx="530" cy="130" r="14"/><circle cx="465" cy="180" r="14"/><circle cx="595" cy="195" r="14"/></g>
<g stroke="#b45309" stroke-width="3"><line x1="485" y1="62" x2="510" y2="50"/><line x1="565" y1="90" x2="545" y2="105"/><line x1="545" y1="140" x2="570" y2="160"/><line x1="480" y1="188" x2="500" y2="205"/><line x1="580" y1="185" x2="560" y2="170"/></g>
<text x="530" y="28" font-size="20" text-anchor="middle" fill="#b45309" font-weight="bold">GAZ</text>
<text x="530" y="250" font-size="15" text-anchor="middle" fill="#1f2937">depărtate, foarte rapide</text>
<text x="320" y="285" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">mai multă căldură ➜ mai multă mișcare ➜ particule mai libere</text>
</svg>`,
      caption: "Aceleași particule, comportament diferit: în solid stau nemișcate la locul lor, în lichid alunecă, în gaz zboară peste tot."
    },
    {
      type: "widget",
      title: "Solid, lichid sau gaz?",
      widget: "classify",
      options: {
        groups: ["Solid", "Lichid", "Gazos"],
        items: [
          ["🪨 piatră", 0],
          ["🧂 sare", 0],
          ["🧊 cub de gheață", 0],
          ["🥛 lapte", 1],
          ["🫒 ulei", 1],
          ["🍯 miere", 1],
          ["🎈 heliul din balon", 2],
          ["♨️ aburul din oală", 2],
          ["🌬️ aer", 2],
          ["⏳ nisip", 0]
        ]
      },
      caption: "Capcane: sarea și nisipul se toarnă, dar sunt solide; mierea curge încet, dar este un lichid."
    },
    {
      type: "quiz",
      title: "Mini-test: stările materiei",
      questions: [
        { type: "mc", q: "Care stare a materiei are formă și volum proprii?", options: ["Solidă", "Lichidă", "Gazoasă"], answer: 0, explain: "Solidul își păstrează forma și volumul." },
        { type: "tf", q: "Lumina este materie.", answer: false, explain: "Lumina nu are masă și nu ocupă spațiu: este energie." },
        { type: "mc", q: "O moleculă de apă este formată din…", options: ["1 atom de hidrogen și 2 de oxigen", "2 atomi de hidrogen și 1 de oxigen", "numai oxigen"], answer: 1, explain: "H₂O: doi H și un O." }
      ]
    },
    {
      type: "text",
      title: "Schimbările de stare",
      html: `<p>Dacă <b>se dă căldură</b> sau <b>se ia căldură</b>, materia își poate schimba starea. Particulele rămân aceleași: se schimbă doar felul în care se mișcă!</p>
<p><b>Dând căldură</b> (particulele se mișcă mai mult):</p>
<ul>
<li><b>Topirea</b>: de la solid la lichid (gheața se topește la <b>0 °C</b>; ciocolata se topește în mână).</li>
<li><b>Evaporarea</b>: de la lichid la gaz, lent și doar la suprafață (rufele întinse se usucă). Dacă se petrece în tot lichidul, cu bule, se numește <b>fierbere</b> (apa fierbe la <b>100 °C</b> la nivelul mării).</li>
<li><b>Sublimarea</b>: de la solid direct la gaz (naftalina din dulapuri, „gheața uscată” care face fum la concerte).</li>
</ul>
<p><b>Luând căldură</b> (particulele încetinesc):</p>
<ul>
<li><b>Solidificarea</b>: de la lichid la solid (apa din congelator devine gheață).</li>
<li><b>Condensarea</b>: de la gaz la lichid (picăturile de pe oglindă după duș, roua).</li>
<li><b>Depunerea (desublimarea)</b>: de la gaz direct la solid (bruma de pe iarbă și de pe geamuri în nopțile geroase).</li>
</ul>
<p>În timp ce o substanță pură își schimbă starea, <b>temperatura ei rămâne constantă</b>: toată căldura folosește la „desprinderea” particulelor. Un pahar cu apă și gheață rămâne la 0 °C cât timp mai există gheață!</p>`
    },
    {
      type: "svg",
      title: "Ciclul schimbărilor de stare",
      svg: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="330" fill="#fff7ed"/>
<circle cx="110" cy="250" r="62" fill="#c7d2fe" stroke="#3730a3" stroke-width="4"/>
<text x="110" y="248" font-size="34" text-anchor="middle">🧊</text>
<text x="110" y="280" font-size="18" text-anchor="middle" font-weight="bold" fill="#3730a3">SOLID</text>
<circle cx="530" cy="250" r="62" fill="#bae6fd" stroke="#0369a1" stroke-width="4"/>
<text x="530" y="248" font-size="34" text-anchor="middle">💧</text>
<text x="530" y="280" font-size="18" text-anchor="middle" font-weight="bold" fill="#0369a1">LICHID</text>
<circle cx="320" cy="75" r="62" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<text x="320" y="73" font-size="34" text-anchor="middle">💨</text>
<text x="320" y="105" font-size="18" text-anchor="middle" font-weight="bold" fill="#b45309">GAZ</text>
<g stroke="#dc2626" stroke-width="4" fill="none"><path d="M175 235 L465 235"/><path d="M490 195 L375 110"/><path d="M150 195 L262 110"/></g>
<g fill="#dc2626"><polygon points="465,227 480,235 465,243"/><polygon points="381,103 366,104 372,117"/><polygon points="255,104 270,103 266,117"/></g>
<g stroke="#2563eb" stroke-width="4" fill="none"><path d="M465 275 L175 275"/><path d="M360 135 L470 215"/><path d="M280 135 L170 215"/></g>
<g fill="#2563eb"><polygon points="175,267 160,275 175,283"/><polygon points="464,222 478,224 473,210"/><polygon points="176,222 162,224 167,210"/></g>
<g font-size="16" font-weight="bold"><text x="320" y="228" text-anchor="middle" fill="#dc2626">topire ➜</text><text x="320" y="300" text-anchor="middle" fill="#2563eb">⬅ solidificare</text>
<text x="445" y="135" fill="#dc2626">evaporare</text><text x="430" y="200" fill="#2563eb">condensare</text>
<text x="85" y="135" fill="#dc2626">sublimare</text><text x="110" y="200" fill="#2563eb">depunere</text></g>
<text x="20" y="320" font-size="15" fill="#dc2626">roșu = se dă căldură</text>
<text x="460" y="320" font-size="15" fill="#2563eb">albastru = se ia căldură</text>
</svg>`,
      caption: "Șase schimbări de stare, în perechi opuse: topire ↔ solidificare, evaporare ↔ condensare, sublimare ↔ depunere."
    },
    {
      type: "widget",
      title: "Potrivește schimbarea de stare cu exemplul",
      widget: "match",
      options: {
        pairs: [
          ["Topirea", "Înghețata se topește la soare"],
          ["Solidificarea", "Apa din congelator devine gheață"],
          ["Evaporarea", "Băltoaca dispare"],
          ["Condensarea", "Oglinda se aburește după duș"],
          ["Sublimarea", "Naftalina se micșorează în dulap"],
          ["Depunerea", "Se formează brumă pe geamul mașinii"]
        ]
      },
      caption: "Fiecare schimbare de stare se vede în fiecare zi, acasă și în natură."
    },
    {
      type: "example",
      title: "Exemplu practic: apa în bucătărie",
      html: `<p>Mama pregătește pastele. Observă câte schimbări apar:</p>
<ol>
<li>Scoate cuburile de gheață din congelator pentru apa de băut: în pahar ele se <b>topesc</b> (solid → lichid).</li>
<li>Pune oala pe foc: la 100 °C apa <b>fierbe</b> (fierbere: lichid → gaz). Vaporii sunt invizibili!</li>
<li>„Norișorul” alb pe care îl vezi deasupra oalei sunt de fapt picături: vaporii, atingând aerul mai rece, <b>se condensează</b> (gaz → lichid).</li>
<li>Pe capac se formează multe picături care cad înapoi: tot o <b>condensare</b>.</li>
</ol>
<p>În tot acest timp apa rămâne apă (H₂O): se schimbă starea, nu substanța. Este o <b>transformare fizică</b>, reversibilă.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: sticla și balonul",
      html: `<p>Un experiment care arată că gazele ocupă spațiu și se dilată cu căldura:</p>
<ol>
<li>Pune un balon dezumflat pe gâtul unei sticle de plastic goale.</li>
<li>Pune sticla într-un lighean cu <b>apă caldă</b> (nu clocotită!): balonul se <b>umflă</b> puțin. Aerul din interior, încălzindu-se, se dilată.</li>
<li>Apoi pune-o în apă cu <b>gheață</b>: balonul se <b>dezumflă</b>. Aerul rece ocupă mai puțin loc.</li>
</ol>
<p>Particulele de aer, mai calde, se mișcă mai repede și „împing” mai tare.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Gheața plutește",
      html: `<p>Aproape toate substanțele, când devin solide, se strâng și ocupă mai puțin loc. Apa nu! Gheața ocupă cu aproximativ <b>9% mai mult</b> decât apa lichidă: de aceea plutește și de aceea o sticlă plină cu apă uitată în congelator crapă. Este un noroc pentru pești: iarna gheața rămâne la suprafață și funcționează ca o „pătură”, iar dedesubt apa rămâne lichidă.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Există o a patra stare",
      html: `<p>Pe lângă solid, lichid și gaz, există <b>plasma</b>: un gaz atât de fierbinte încât atomii pierd bucățele din ei (electronii). Soarele și stelele sunt făcute din plasmă, la fel și fulgerele și aurorele polare. De fapt, este cea mai răspândită stare din univers!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Suntem făcuți din praf de stele",
      html: `<p>Atomii de carbon, oxigen și fier din corpul tău au fost „fabricați” acum miliarde de ani în interiorul unor stele foarte vechi, care apoi au explodat și și-au împrăștiat atomii în spațiu. Din acel praf s-au format Soarele, Pământul… și chiar și noi!</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Materia = tot ce are <b>masă</b> și <b>volum</b>. Este făcută din <b>atomi</b>, care se unesc în <b>molecule</b>.</li>
<li><b>Solid</b>: formă și volum proprii. <b>Lichid</b>: volum propriu, forma vasului. <b>Gaz</b>: nici formă, nici volum proprii.</li>
<li>Cu căldură: <b>topire</b>, <b>evaporare/fierbere</b>, <b>sublimare</b>.</li>
<li>Luând căldură: <b>solidificare</b>, <b>condensare</b>, <b>depunere</b>.</li>
<li>Apa: se topește/se solidifică la <b>0 °C</b>, fierbe la <b>100 °C</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege materia",
      intro: "Atomii nu se văd, dar se pot imagina, interpreta cu corpul, construi. Alege modul care ți se potrivește!",
      tabs: [
        {
          label: "🏃 Devino o particulă",
          html: `<p>Un joc de făcut în sala de sport sau în curte: fiecare copil este o <b>particulă</b>.</p>
<ul>
<li><b>Solid</b>: stați strânși, în șiruri ordonate, ținându-vă de brațe. Puteți doar să vă legănați pe loc (să vibrați).</li>
<li><b>Lichid</b>: dați drumul brațelor, dar rămâneți aproape; puteți aluneca unul pe lângă altul și „umple” o zonă desenată cu creta.</li>
<li><b>Gaz</b>: alergați (încet!) în toate direcțiile, folosind toată sala.</li>
</ul>
<p>Profesorul face pe „aragazul”: când spune „mai multă căldură!”, vă mișcați mai repede și vă schimbați starea; când spune „frig!”, încetiniți și vă apropiați din nou.</p>`
        },
        {
          label: "🧱 Ca niște cărămizi",
          html: `<p>Imaginează-ți <b>atomii</b> ca <b>piesele</b> unui joc de construcții: există puține culori și forme (elementele), dar cu ele poți construi orice.</p>
<ul>
<li>2 piese albe (H) + 1 roșie (O) = o moleculă de apă 💧</li>
<li>1 neagră (C) + 2 roșii (O) = dioxid de carbon</li>
<li>2 roșii împreună = oxigenul pe care îl respirăm</li>
</ul>
<p>Dacă desfaci construcția și refaci piesele în alt fel, obții o substanță diferită: este o <b>reacție chimică</b>! În schimbările de stare, în schimb, construcțiile rămân întregi: se schimbă doar cât sunt de apropiate și cât se mișcă.</p>`
        },
        {
          label: "⚛️ Atomul în 3D",
          html: `<p>Iată cum își imaginează oamenii de știință un atom (modelul danezului <b>Niels Bohr</b>, 1913): în centru un <b>nucleu</b> foarte mic, în jur <b>electronii</b> care se rotesc foarte repede. Alege elementul: hidrogen (1 electron), heliu (2), carbon (6), oxigen (8), sodiu (11).</p>
<p>Dacă atomul ar fi mare cât un stadion de fotbal, nucleul ar fi mare cât o furnică în mijlocul terenului: atomul este aproape tot gol!</p>`,
          scene: "atom",
          options: { elements: ["H", "He", "C", "O", "Na"] }
        },
        {
          label: "🏛️ Ideea lui Democrit",
          html: `<p>Acum aproximativ <b>2400 de ani</b>, în Grecia, filozoful <b>Democrit</b> (împreună cu profesorul său Leucip) s-a întrebat: „Dacă tai un măr în două, apoi din nou în două, pot continua la nesfârșit?”. A răspuns că nu: mai devreme sau mai târziu se ajunge la o bucățică care <b>nu mai poate fi tăiată</b>. A numit-o <b>átomos</b>, care în greacă înseamnă tocmai „indivizibil”.</p>
<p>Era doar o idee, fără experimente. Au trebuit peste 2000 de ani ca englezul <b>John Dalton</b> (1808) s-o transforme într-o adevărată teorie științifică. Și apoi s-a descoperit că și atomul, de fapt, este făcut din particule și mai mici!</p>`
        },
        {
          label: "🔬 Tabelul elementelor",
          html: `<p>Toate elementele cunoscute sunt așezate în ordine în <b>tabelul periodic</b>, inventat de rusul <b>Dmitri Mendeleev</b> în 1869. Atinge un element ca să-l descoperi. Le găsești pe cele pe care le cunoști? Oxigen (O), fier (Fe), aur (Au), carbon (C)…</p>`,
          widget: "periodicTable",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta materiei: atinge un nod și descoperă de ce",
      nodes: [
        { id: "materia", label: "Materia", x: 50, y: 6, color: "#7c3aed", html: "Tot ce are masă și ocupă spațiu.", why: "Este o definiție care se poate verifica cu balanța (masa) și cu un vas gradat (volumul). Deja Aristotel vorbea despre materie, dar credea că este făcută din 4 „elemente”: pământ, apă, aer și foc." },
        { id: "atomi", label: "Atomi", x: 22, y: 28, color: "#2563eb", html: "Particulele foarte mici din care este făcută materia.", why: "Presupuși de Democrit (secolul al V-lea î.Hr.); dovediți prin experimente de John Dalton (1808), care a observat că substanțele se combină mereu în proporții fixe. În 1905 Albert Einstein a explicat mișcarea dezordonată a grăunțelor de polen în apă (mișcarea browniană) ca efect al ciocnirilor cu moleculele: era dovada că ele există cu adevărat." },
        { id: "elementi", label: "Elemente", x: 8, y: 52, color: "#0ea5e9", html: "Substanțe făcute dintr-un singur tip de atom: aproximativ 118.", why: "Mendeleev le-a ordonat în 1869 în tabelul periodic și a lăsat locuri goale pentru elemente încă nedescoperite, prevăzându-le proprietățile. Când au fost găsite (galiu 1875, scandiu 1879, germaniu 1886), toți au înțeles că avusese dreptate." },
        { id: "molecole", label: "Molecule", x: 36, y: 52, color: "#06b6d4", html: "Grupuri de atomi legați între ei, ca H₂O.", why: "Numele a fost făcut cunoscut de italianul <b>Amedeo Avogadro</b> (1811), care a înțeles primul diferența dintre atomi și molecule: de exemplu, că gazul oxigen este făcut din perechi de atomi (O₂)." },
        { id: "particelle", label: "Particule în mișcare", x: 78, y: 28, color: "#dc2626", html: "Particulele se mișcă mereu și se atrag.", why: "Mai multă căldură = mai multă mișcare. Această „teorie cinetică” a fost dezvoltată în secolul al XIX-lea de Maxwell și Boltzmann și explică de ce materia își schimbă starea." },
        { id: "solido", label: "Solid", x: 60, y: 60, color: "#4f46e5", html: "Formă și volum proprii.", why: "Particulele sunt atât de legate încât pot doar vibra la locul lor, adesea în aranjamente ordonate numite cristale (ca în sare sau în zăpadă)." },
        { id: "liquido", label: "Lichid", x: 78, y: 70, color: "#0284c7", html: "Volum propriu, forma vasului.", why: "Particulele rămân apropiate (deci volumul nu se schimbă), dar alunecă una peste alta (deci forma se schimbă)." },
        { id: "gas", label: "Gaz", x: 94, y: 56, color: "#d97706", html: "Nici formă, nici volum proprii.", why: "Particulele sunt atât de rapide încât biruie atracția reciprocă: se depărtează și umplu tot spațiul. De aceea gazele se comprimă: între particule este mult gol." },
        { id: "passaggi", label: "Schimbări de stare", x: 50, y: 92, color: "#16a34a", html: "Topire, solidificare, evaporare, condensare, sublimare, depunere.", why: "Dând căldură, particulele se mișcă mai mult, luând-o, ele încetinesc. Omul de știință scoțian <b>Joseph Black</b> (în jurul anului 1760) a descoperit „căldura latentă”: în timpul schimbării de stare se absoarbe căldură fără ca temperatura să crească." }
      ],
      edges: [
        ["materia", "atomi", "este făcută din"],
        ["atomi", "elementi", "tipuri diferite"],
        ["atomi", "molecole", "se unesc în"],
        ["materia", "particelle", "particulele"],
        ["particelle", "solido", "nemișcate și apropiate"],
        ["particelle", "liquido", "apropiate și alunecătoare"],
        ["particelle", "gas", "libere și rapide"],
        ["solido", "passaggi", "cu căldură"],
        ["liquido", "passaggi", "își schimbă starea"],
        ["gas", "passaggi", "luând căldură"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: schimbările de stare",
      questions: [
        { type: "mc", q: "Cum se numește trecerea de la gaz la lichid?", options: ["Evaporare", "Condensare", "Topire"], answer: 1, explain: "Condensare, ca picăturile de pe oglindă." },
        { type: "num", q: "La câte grade Celsius fierbe apa la nivelul mării?", answer: 100, unit: "°C", explain: "100 °C (la munte, la altitudine mare, fierbe la temperaturi puțin mai mici)." },
        { type: "tf", q: "În sublimare, un solid devine gaz fără să devină lichid.", answer: true, explain: "Ca naftalina sau gheața uscată." }
      ]
    }
  ],
  glossary: [
    { t: "Materie", d: "Tot ce are o masă și ocupă un loc în spațiu." },
    { t: "Masă", d: "Cantitatea de materie a unui corp." },
    { t: "Volum", d: "Spațiul ocupat de un corp." },
    { t: "Atom", d: "Particulă foarte mică, din care este formată materia." },
    { t: "Element", d: "Substanță făcută dintr-un singur tip de atom (de ex. oxigen, fier)." },
    { t: "Moleculă", d: "Grup de atomi uniți între ei (de ex. H₂O)." },
    { t: "Gazos", d: "Starea materiei a gazelor și a vaporilor." },
    { t: "Topire", d: "Trecerea de la solid la lichid." },
    { t: "Evaporare", d: "Trecerea lentă de la lichid la gaz, la suprafață." },
    { t: "Fierbere", d: "Evaporare în tot lichidul, cu formare de bule." },
    { t: "Condensare", d: "Trecerea de la gaz la lichid." },
    { t: "Sublimare", d: "Trecerea directă de la solid la gaz." },
    { t: "Depunere", d: "Trecerea directă de la gaz la solid." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre acestea NU este materie?", options: ["Aerul", "Sunetul", "Apa"], answer: 1, explain: "Sunetul este o undă de energie, nu are masă proprie." },
      { type: "mc", q: "Un lichid are…", options: ["formă și volum proprii", "volum propriu, dar forma vasului", "nici formă, nici volum proprii"], answer: 1, explain: "Volumul rămâne, forma se schimbă." },
      { type: "tf", q: "Sarea de bucătărie este un solid, chiar dacă se poate turna.", answer: true, explain: "Fiecare grăunte are formă și volum proprii." },
      { type: "text", q: "Cum se numește trecerea de la solid la lichid?", answer: ["topire", "topirea"], explain: "Topirea." },
      { type: "mc", q: "Bruma de pe geamuri se formează prin…", options: ["topire", "depunere", "evaporare"], answer: 1, explain: "Vaporii de apă devin direct gheață." },
      { type: "num", q: "La câte grade Celsius apa devine gheață?", answer: 0, unit: "°C", explain: "La 0 °C." },
      { type: "mc", q: "În care stare sunt particulele cele mai depărtate între ele?", options: ["Solidă", "Lichidă", "Gazoasă"], answer: 2, explain: "În gaz, particulele se mișcă libere și depărtate." },
      { type: "order", q: "Pune în ordine ce se întâmplă cu un cub de gheață uitat pe o plită aprinsă.", items: ["Gheață solidă", "Topire", "Apă lichidă", "Fierbere", "Vapori"], explain: "Solidul se topește, devine lichid, apoi fierbe și devine vapori." },
      { type: "tf", q: "În timpul unei schimbări de stare se schimbă substanța: apa devine altceva.", answer: false, explain: "Se schimbă starea, nu substanța: gheața, apa și vaporii sunt toate H₂O." },
      { type: "mc", q: "Cum se numesc „cărămidurile” materiei?", options: ["Atomi", "Celule", "Grăunți"], answer: 0, explain: "Atomii, care se unesc în molecule." },
      { type: "mc", q: "De ce poate crăpa o sticlă cu apă din congelator?", options: ["Pentru că gheața ocupă mai mult loc decât apa", "Pentru că frigul sparge plasticul", "Pentru că apa se evaporă"], answer: 0, explain: "Apa, solidificându-se, își mărește volumul cu aproximativ 9%." }
    ]
  }
});

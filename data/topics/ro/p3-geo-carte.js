TOPIC('ro', {
  id: "p3-geo-carte",
  title: "Hărțile geografice",
  intro: "O hartă geografică este ca o <b>fotografie făcută de sus</b>, micșorată și desenată cu culori și simboluri. Astăzi descoperim cum se face ca un oraș, o regiune sau lumea întreagă să încapă pe o foaie: <b>scara</b>, <b>legenda</b> și diferitele <b>tipuri de hărți</b>. 🗺️",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Pasul 1: privitul de sus",
      html: `<p>Încearcă să te uiți la penarul tău din trei locuri diferite:</p>
<ul>
<li><b>Din față</b> (vedere frontală): vezi partea din față.</li>
<li><b>Din lateral, pieziș</b> (vedere oblică): vezi partea din față și puțin din partea de sus.</li>
<li><b>De sus</b> (vedere <b>zenitală</b>, sau „din zbor de pasăre”): vezi doar partea de deasupra. 🦅</li>
</ul>
<p>Cartografii, adică cei care desenează hărți, folosesc <b>întotdeauna vederea de sus</b>. Astfel fiecare lucru își păstrează forma adevărată și se pot măsura distanțele.</p>`
    },
    {
      type: "text", title: "Pasul 2: micșorarea (reducerea la scară)",
      html: `<p>Un parc sau un oraș sunt prea mari pentru o foaie. Atunci cartograful le <b>micșorează</b>: toate dimensiunile sunt împărțite la același număr. Aceasta se numește <b>reducere la scară</b>.</p>
<p><b>Scara</b> se scrie așa: <b>1 : 100</b> (se citește „unu la o sută”). Înseamnă:</p>
<p style="font-size:1.15em">📏 <b>1 cm</b> pe desen = <b>100 cm</b> (adică 1 metru) în realitate.</p>
<ul>
<li><b>1 : 100</b> → 1 cm = 1 m. Este potrivită pentru planul sălii tale de clasă.</li>
<li><b>1 : 100.000</b> → 1 cm = 1 km. Este potrivită pentru un județ.</li>
<li><b>1 : 10.000.000</b> → 1 cm = 100 km. Este potrivită pentru toată Italia.</li>
</ul>
<p>Cu cât al doilea număr este mai <b>mare</b>, cu atât realitatea a fost mai micșorată și se văd <b>mai puține detalii</b>.</p>`
    },
    {
      type: "svg", title: "De la realitate la plan",
      caption: "Aceeași sală de clasă văzută pieziș și apoi de sus, micșorată și desenată cu simbolurile din legendă.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<text x="140" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">VEDERE OBLICĂ</text>
<polygon points="40,240 240,240 270,110 70,110" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="70,110 270,110 270,60 70,60" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<rect x="110" y="70" width="70" height="30" fill="#166534" stroke="#14532d" stroke-width="2"/>
<polygon points="80,215 120,215 128,185 88,185" fill="#a16207"/>
<polygon points="150,215 190,215 198,185 158,185" fill="#a16207"/>
<polygon points="105,170 140,170 146,145 111,145" fill="#a16207"/>
<polygon points="175,170 210,170 216,145 181,145" fill="#a16207"/>
<text x="300" y="165" font-size="34" text-anchor="middle" fill="#2563eb">➜</text>
<text x="300" y="195" font-size="13" text-anchor="middle" fill="#1e3a8a">de sus</text>
<text x="465" y="28" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">PLAN 1 : 100</text>
<rect x="350" y="50" width="230" height="190" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
<rect x="420" y="54" width="90" height="12" fill="#166534"/>
<rect x="375" y="100" width="40" height="25" fill="#a16207"/>
<rect x="445" y="100" width="40" height="25" fill="#a16207"/>
<rect x="515" y="100" width="40" height="25" fill="#a16207"/>
<rect x="375" y="160" width="40" height="25" fill="#a16207"/>
<rect x="445" y="160" width="40" height="25" fill="#a16207"/>
<rect x="515" y="160" width="40" height="25" fill="#a16207"/>
<rect x="545" y="236" width="30" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<rect x="355" y="258" width="16" height="12" fill="#a16207"/>
<text x="377" y="269" font-size="14" fill="#0f172a">bancă</text>
<rect x="425" y="258" width="16" height="12" fill="#166534"/>
<text x="447" y="269" font-size="14" fill="#0f172a">tablă</text>
<rect x="510" y="258" width="16" height="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
<text x="532" y="269" font-size="14" fill="#0f172a">ușă</text>
<text x="465" y="292" font-size="14" text-anchor="middle" fill="#475569">LEGENDA</text>
</svg>`
    },
    {
      type: "example", title: "Exemplu practic: măsurarea pe plan",
      html: `<p>Pe planul sălii tale de clasă la scara <b>1 : 100</b>, peretele lung măsoară <b>7 cm</b>.</p>
<p>Cât este de lung în realitate? Fiecare centimetru valorează 100 cm, deci:</p>
<p><b>7 × 100 = 700 cm = 7 metri</b> ✅</p>
<p>Și invers: dacă holul este lung de 12 m, pe plan îl desenez lung de <b>12 cm</b>.</p>`
    },
    {
      type: "remember", title: "Legenda și culorile",
      html: `<p>Fiecare hartă are o <b>legendă</b>: un chenar care explică ce înseamnă <b>simbolurile</b> și <b>culorile</b>. Pe hărțile fizice culorile sunt aproape întotdeauna acestea:</p>
<ul>
<li>🟦 <b>albastru deschis / albastru</b>: mări, lacuri, râuri (cu cât este mai închis, cu atât apa este mai adâncă);</li>
<li>🟩 <b>verde</b>: câmpii;</li>
<li>🟨 <b>galben / maro deschis</b>: dealuri;</li>
<li>🟫 <b>maro închis</b>: munți (cu cât este mai închis, cu atât sunt mai înalți);</li>
<li>⬜ <b>alb</b>: ghețari și zăpezi permanente.</li>
</ul>
<p>Și nu uita <b>Nordul</b>: de obicei este <b>sus</b>, indicat de o săgeată sau de <b>roza vânturilor</b>.</p>`
    },
    {
      type: "3d", title: "Peisajul real și culorile lui pe hartă",
      scene: "terrain",
      caption: "Rotește peisajul și atinge părțile: pentru fiecare afli cu ce culoare sau simbol îl desenează cartograful.",
      options: {
        features: {
          sea: { label: "Mare", html: "Pe harta fizică este <b>albastră</b>: cu cât albastrul este mai închis, cu atât marea este mai adâncă." },
          coast: { label: "Coastă", html: "Este desenată cu o <b>linie</b> care separă albastrul mării de culoarea uscatului." },
          plain: { label: "Câmpie", html: "Teren plat și jos (sub 200 m): pe harta fizică este <b>verde</b>." },
          hill: { label: "Deal", html: "Relief de până la aproximativ 600 m: pe hartă este <b>galben</b> sau maro deschis." },
          mountain: { label: "Munte", html: "Relief de peste 600 m: pe hartă este <b>maro</b>, tot mai închis pe măsură ce urci." },
          peak: { label: "Vârf", html: "Culmea muntelui: se marchează cu un <b>triunghi ▲</b> și cu înălțimea lui în metri, de exemplu ▲ 4.808 (Mont Blanc)." },
          glacier: { label: "Ghețar", html: "Gheață care nu se topește niciodată: pe hartă este <b>albă</b>." },
          river: { label: "Râu", html: "O <b>linie albastră</b> care se lărgește spre vărsare." },
          lake: { label: "Lac", html: "O <b>pată albastră</b> înconjurată de uscat." }
        }
      }
    },
    {
      type: "quiz", title: "Mini-test: scară și legendă",
      questions: [
        { type: "mc", q: "Harta desenată privind de sus folosește vederea…", options: ["frontală", "zenitală", "laterală"], answer: 1, explain: "Zenitală = de sus, ca o pasăre în zbor." },
        { type: "num", q: "Scara 1 : 100. Un perete pe plan măsoară 5 cm. Câți metri este lung în realitate?", answer: 5, tol: 0, unit: "m", explain: "5 cm × 100 = 500 cm = 5 m." },
        { type: "mc", q: "Pe o hartă fizică, câmpiile au culoarea…", options: ["maro", "verde", "albă"], answer: 1, explain: "Verde pentru câmpii, maro pentru munți." }
      ]
    },
    {
      type: "text", title: "Pasul 3: tipurile de hărți",
      html: `<p>Hărțile se împart în două feluri: <b>după cât micșorează</b> (scara) și <b>după ce arată</b> (conținutul).</p>
<table>
<tr><th>După scară</th><th>Ce arată</th><th>Scara tipică</th></tr>
<tr><td><b>Plan</b></td><td>o cameră, o casă, o școală</td><td>1 : 50 – 1 : 500</td></tr>
<tr><td><b>Plan de oraș</b></td><td>un cartier, un oraș cu străzile</td><td>până la 1 : 10.000</td></tr>
<tr><td><b>Hartă topografică</b></td><td>un teritoriu mic: poteci, case, păduri</td><td>1 : 25.000 – 1 : 100.000</td></tr>
<tr><td><b>Hartă corografică</b></td><td>o regiune</td><td>1 : 200.000 – 1 : 1.000.000</td></tr>
<tr><td><b>Hartă geografică</b></td><td>un stat, un continent</td><td>peste 1 : 1.000.000</td></tr>
<tr><td><b>Planiglob</b></td><td>tot Pământul pe o foaie</td><td>aproximativ 1 : 100.000.000</td></tr>
</table>
<p>După <b>conținut</b>:</p>
<ul>
<li><b>Harta fizică</b>: munți, câmpii, râuri, lacuri, mări (elementele naturii).</li>
<li><b>Harta politică</b>: state, regiuni, granițe, orașe (elementele stabilite de om). Fiecare stat are o culoare diferită.</li>
<li><b>Harta tematică</b>: un singur subiect, de exemplu clima, drumurile, produsele agricole sau unde trăiesc mai mulți oameni.</li>
</ul>`
    },
    {
      type: "svg", title: "Fizică, politică sau tematică?",
      caption: "Aceeași insulă inventată desenată în trei feluri diferite.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ffffff"/>
<rect x="10" y="40" width="185" height="200" fill="#7dd3fc"/>
<ellipse cx="102" cy="140" rx="75" ry="80" fill="#4ade80"/>
<ellipse cx="110" cy="125" rx="45" ry="45" fill="#facc15"/>
<ellipse cx="115" cy="115" rx="22" ry="22" fill="#92400e"/>
<polygon points="115,100 108,112 122,112" fill="#ffffff"/>
<path d="M115,130 Q90,170 70,215" stroke="#1d4ed8" stroke-width="4" fill="none"/>
<text x="102" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#166534">FIZICĂ</text>
<text x="102" y="265" font-size="14" text-anchor="middle" fill="#0f172a">munți, dealuri,</text>
<text x="102" y="283" font-size="14" text-anchor="middle" fill="#0f172a">câmpii, râuri</text>
<rect x="208" y="40" width="185" height="200" fill="#e0f2fe"/>
<path d="M300,60 A75,80 0 0 0 225,140 L300,140 Z" fill="#fca5a5" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M300,60 A75,80 0 0 1 375,140 L300,140 Z" fill="#c4b5fd" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<path d="M225,140 A75,80 0 0 0 375,140 Z" fill="#fde68a" stroke="#0f172a" stroke-width="2" stroke-dasharray="6 3"/>
<circle cx="270" cy="115" r="5" fill="#0f172a"/>
<circle cx="335" cy="110" r="5" fill="#0f172a"/>
<rect x="294" y="174" width="12" height="12" fill="#dc2626"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#b91c1c">POLITICĂ</text>
<text x="300" y="265" font-size="14" text-anchor="middle" fill="#0f172a">granițe, regiuni,</text>
<text x="300" y="283" font-size="14" text-anchor="middle" fill="#0f172a">orașe, capitală ■</text>
<rect x="406" y="40" width="185" height="200" fill="#e0f2fe"/>
<ellipse cx="498" cy="140" rx="75" ry="80" fill="#e5e7eb"/>
<text x="470" y="115" font-size="26" text-anchor="middle">🍇</text>
<text x="530" y="125" font-size="26" text-anchor="middle">🐄</text>
<text x="490" y="180" font-size="26" text-anchor="middle">🌾</text>
<text x="498" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c3aed">TEMATICĂ</text>
<text x="498" y="265" font-size="14" text-anchor="middle" fill="#0f172a">un singur subiect:</text>
<text x="498" y="283" font-size="14" text-anchor="middle" fill="#0f172a">produsele agricole</text>
</svg>`
    },
    {
      type: "widget", title: "Joc: hartă fizică sau hartă politică?",
      widget: "classify",
      caption: "Pe ce hartă cauți aceste lucruri? Elementele naturale sunt pe cea fizică, cele stabilite de om pe cea politică.",
      options: {
        groups: ["🏔️ Hartă fizică", "🏛️ Hartă politică"],
        items: [
          ["râul Pad", 0], ["Alpii", 0], ["lacul Garda", 0], ["Câmpia Padului", 0], ["înălțimea muntelui Mont Blanc", 0],
          ["granița cu Franța", 1], ["Roma capitală", 1], ["cele 20 de regiuni", 1], ["reședințele de provincie", 1], ["numele statelor", 1]
        ]
      }
    },
    {
      type: "example", title: "Exemplu practic: ce hartă îmi trebuie?",
      html: `<ul>
<li>🥾 Mergi în excursie la munte și vrei să urmezi poteca → <b>hartă topografică</b> 1 : 25.000 (se văd și cabanele și fântânile).</li>
<li>🏙️ Trebuie să găsești strada Garibaldi într-un oraș nou → <b>plan de oraș</b>.</li>
<li>🚗 Mergeți în vacanță de la Torino la Bari → <b>hartă rutieră</b> a Italiei (o hartă tematică: drumurile).</li>
<li>☀️ Vrei să știi unde plouă cel mai mult în Italia → <b>hartă tematică a climei</b>.</li>
<li>🌍 Vrei să vezi toate continentele împreună → <b>planiglob</b> sau <b>glob pământesc</b>.</li>
</ul>`
    },
    {
      type: "3d", title: "Globul pământesc: Pământul fără deformări",
      scene: "globe",
      caption: "Rotește globul. Globul pământesc este singura „hartă” care arată Pământul cu forma corectă: toate hărțile plane îl deformează puțin.",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 72, lon: -40, label: "Groenlanda" },
          { lat: 2, lon: 21, label: "Africa (centru)" },
          { lat: 51.48, lon: 0, label: "Greenwich (meridianul 0°)" },
          { lat: 0, lon: -50, label: "Ecuator" },
          { lat: 90, lon: 0, label: "Polul Nord" }
        ]
      }
    },
    {
      type: "curiosity", title: "Știai că… Groenlanda pare la fel de mare ca Africa?",
      html: `<p>Pe multe planigloburi (cele desenate cu metoda lui <b>Gerardus Mercator</b>, în 1569) <b>Groenlanda</b> pare aproape la fel de mare ca <b>Africa</b>. În realitate Africa este de aproximativ <b>14 ori mai mare</b>! 😮</p>
<p>Motivul: Pământul este o minge și, ca să-l „aplatizezi” pe o foaie, trebuie să-l întinzi. Pământurile apropiate de poli sunt întinse foarte mult. De aceea <b>globul pământesc</b> este mai fidel decât orice hartă plană.</p>`
    },
    {
      type: "curiosity", title: "Știai că… există o hartă lungă de aproape 7 metri?",
      html: `<p><b>Tabula Peutingeriana</b> este o copie medievală a unei hărți rutiere din <b>Roma antică</b>. Este un sul lung de aproximativ <b>6 metri și 75 de centimetri</b> și înalt de doar 34 cm! Arată drumurile Imperiului Roman, orașele și distanțele dintre o etapă și alta, ca un vechi „navigator” pentru călători. Astăzi se află la Viena.</p>`
    },
    {
      type: "alternatives", title: "Alte moduri de a înțelege",
      intro: "Dacă scara sau simbolurile ți se par grele, încearcă una dintre aceste căi.",
      tabs: [
        {
          label: "🧸 Lumea jucăriilor",
          html: `<p>O <b>mașinuță</b> de jucărie este o mașină adevărată micșorată. Adesea dedesubt scrie <b>1 : 43</b>: înseamnă că mașina adevărată este de <b>43 de ori</b> mai lungă.</p>
<p>O hartă face același lucru cu un teritoriu: scara îți spune de <b>câte ori</b> a fost micșorată realitatea. O căsuță de păpuși, o machetă de trenuleț, un model de avion: toate sunt obiecte „la scară”!</p>`
        },
        {
          label: "🏃 Hărțile de orientare sportivă (Suedia și Norvegia)",
          html: `<p>În țările nordice copiii învață hărțile jucându-se <b>orientare sportivă</b> (<i>orienteering</i>): o cursă în pădure cu harta și busola, căutând niște puncte marcate. Hărțile lor folosesc culori speciale, la fel în toată lumea:</p>
<ul>
<li>⬜ <b>alb</b> = pădure pe unde se aleargă bine;</li>
<li>🟩 <b>verde</b> = pădure deasă, greu de străbătut;</li>
<li>🟨 <b>galben</b> = pajiște deschisă;</li>
<li>🟦 <b>albastru</b> = apă;</li>
<li>🟫 <b>maro</b> = formele terenului (curbe de nivel);</li>
<li>⬛ <b>negru</b> = poteci, stânci, case.</li>
</ul>
<p>Ai observat? Aici albul nu este gheața! De aceea trebuie <b>să citești mereu legenda</b>.</p>`
        },
        {
          label: "✏️ Desenează-ți camera",
          html: `<p>Cel mai bun mod de a înțelege un plan este <b>să faci unul</b>:</p>
<ol>
<li>Măsoară-ți camera cu ruleta (de exemplu 4 m × 3 m).</li>
<li>Alege scara 1 : 100: 1 m devine 1 cm. Desenează un dreptunghi de <b>4 cm × 3 cm</b>.</li>
<li>Desenează de sus patul, dulapul, biroul, mereu micșorate.</li>
<li>Inventează un simbol pentru fiecare mobilă și scrie-l în <b>legendă</b>.</li>
<li>Desenează săgeata <b>Nordului</b>.</li>
</ol>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#f1f5f9"/>
<rect x="40" y="20" width="320" height="200" fill="#ffffff" stroke="#0f172a" stroke-width="4"/>
<rect x="50" y="30" width="90" height="140" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<rect x="55" y="35" width="80" height="30" fill="#ffffff" stroke="#1e3a8a"/>
<rect x="250" y="30" width="100" height="40" fill="#a16207"/>
<rect x="270" y="160" width="80" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<rect x="150" y="214" width="60" height="10" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="200" y="130" font-size="15" text-anchor="middle" fill="#475569">4 cm × 3 cm</text>
<text x="390" y="40" font-size="17" font-weight="bold" fill="#0f172a">LEGENDA</text>
<rect x="390" y="55" width="22" height="16" fill="#93c5fd" stroke="#1e3a8a"/>
<text x="420" y="69" font-size="15" fill="#0f172a">pat</text>
<rect x="390" y="85" width="22" height="16" fill="#a16207"/>
<text x="420" y="99" font-size="15" fill="#0f172a">dulap</text>
<rect x="390" y="115" width="22" height="16" fill="#fbbf24" stroke="#92400e"/>
<text x="420" y="129" font-size="15" fill="#0f172a">birou</text>
<rect x="390" y="145" width="22" height="8" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="420" y="155" font-size="15" fill="#0f172a">ușă</text>
<text x="420" y="190" font-size="15" fill="#0f172a">scara 1 : 100</text>
<polygon points="545,30 535,60 555,60" fill="#dc2626"/>
<text x="545" y="80" font-size="18" font-weight="bold" text-anchor="middle" fill="#dc2626">N</text>
</svg>`
        },
        {
          label: "🌍 Glob 3D contra foaie",
          html: `<p>Încearcă să „cojești” o portocală și să strivești coaja pe masă: se rupe sau se întinde! Este aceeași problemă pe care o au cartografii cu Pământul. Învârte globul și observă unde sunt Groenlanda și Africa: pe glob vezi mărimile lor <b>adevărate</b>.</p>`,
          scene: "globe",
          options: { points: [ { lat: 72, lon: -40, label: "Groenlanda: 2,2 milioane km²" }, { lat: 2, lon: 21, label: "Africa: 30 de milioane km²" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Hartă: cum se naște o hartă geografică",
      nodes: [
        { id: "realta", label: "Teritoriul real", x: 50, y: 6, color: "#16a34a", html: "Munți, râuri, orașe și drumuri, mari și tridimensionale.", why: "Teritoriul este prea mare ca să-l vezi dintr-odată: de aceea oamenii au încercat dintotdeauna să-l deseneze, mai întâi pe argilă și piele, apoi pe hârtie, astăzi pe ecran." },
        { id: "zenit", label: "Vedere de sus", x: 18, y: 30, color: "#0ea5e9", html: "Teritoriul se privește de sus (vedere zenitală).", why: "Doar privind de sus fiecare lucru își păstrează forma, iar distanțele se pot măsura. Odinioară se măsura la sol cu instrumente optice; din 1800 s-au folosit fotografii din baloane și avioane, astăzi imaginile de la sateliți." },
        { id: "scala", label: "Reducere la scară", x: 50, y: 30, color: "#f97316", html: "Toate dimensiunile sunt împărțite la același număr.", why: "Dacă micșorezi totul în același fel, formele rămân aceleași (sunt „asemenea”, cum spune geometria). Așa, cu o riglă se poate calcula distanța reală: măsura de pe hartă × numărul scării." },
        { id: "simboli", label: "Simboluri și legendă", x: 82, y: 30, color: "#a855f7", html: "Culori și semne în locul lucrurilor adevărate.", why: "O casă adevărată pe o hartă a Italiei ar fi mai mică decât un punct: de aceea se folosesc simboluri. Multe culori sunt convenții acceptate în toată lumea (albastru pentru apă, verde pentru câmpie), dar fiecare hartă le explică în legendă." },
        { id: "nord", label: "Orientare (Nord)", x: 82, y: 58, color: "#dc2626", html: "Nordul este de obicei sus.", why: "Este un obicei răspândit în Europa cu hărțile tipărite din 1500 încoace, legat și de folosirea busolei, al cărei ac arată Nordul. În Evul Mediu multe hărți europene aveau în schimb Estul sus, spre Ierusalim: de aici cuvântul „a se orienta” (a căuta Orientul)." },
        { id: "proiezione", label: "De la sferă la foaie", x: 18, y: 58, color: "#0284c7", html: "Pământul este sferic, foaia este plană: orice hartă plană deformează puțin.", why: "Încă Eratostene, în jurul anului 240 î.Hr., a calculat circumferința Pământului. Ptolemeu (secolul al II-lea d.Hr.) a învățat cum să desenezi Pământul cu paralele și meridiane. În 1569 Mercator a inventat o hartă foarte utilă marinarilor, dar care mărește pământurile apropiate de poli." },
        { id: "fisica", label: "Harta fizică", x: 18, y: 88, color: "#65a30d", html: "Arată elementele naturale.", why: "Servește pentru a înțelege cum este făcut teritoriul: unde se poate cultiva (câmpii), pe unde curg râurile, cât de înalți sunt munții. Pentru reliefuri se folosesc benzile de culoare sau curbele de nivel." },
        { id: "politica", label: "Harta politică", x: 50, y: 88, color: "#e11d48", html: "Arată state, regiuni, granițe și orașe.", why: "Granițele nu se văd pe teren: sunt stabilite de oameni prin legi și tratate și se pot schimba în timp. De aceea hărțile politice trebuie actualizate mai des decât cele fizice." },
        { id: "tematica", label: "Harta tematică", x: 82, y: 88, color: "#7c3aed", html: "Arată un singur subiect (climă, drumuri, populație…).", why: "Punând un singur subiect pe o hartă, se văd imediat deosebirile dintre un loc și altul. Una dintre cele mai faimoase a fost desenată de medicul John Snow în 1854 la Londra: marcând bolnavii de holeră, a înțeles că boala venea de la o fântână." }
      ],
      edges: [
        ["realta", "zenit", "se privește"], ["realta", "scala", "se micșorează"], ["realta", "simboli", "se simplifică"],
        ["zenit", "proiezione", "dacă e tot Pământul"], ["simboli", "nord", "cu"], ["scala", "fisica", "conținut"], ["scala", "politica", "conținut"], ["scala", "tematica", "conținut"],
        ["simboli", "tematica", "un singur subiect"]
      ]
    },
    {
      type: "quiz", title: "Mini-test: tipurile de hărți",
      questions: [
        { type: "mc", q: "Pe ce hartă găsești granițele dintre state?", options: ["fizică", "politică", "topografică a potecilor"], answer: 1, explain: "Harta politică arată state, regiuni și granițe." },
        { type: "mc", q: "Harta care arată tot Pământul pe o foaie este…", options: ["planiglobul", "planul", "planul de oraș"], answer: 0, explain: "Planiglobul (sau, dacă este o minge, globul pământesc)." },
        { type: "tf", q: "Pe o hartă la scara 1 : 1.000.000 se văd mai multe detalii decât pe una la 1 : 25.000.", answer: false, explain: "Este invers: cu cât al doilea număr este mai mare, cu atât realitatea este mai micșorată și se văd mai puține detalii." }
      ]
    }
  ],
  glossary: [
    { t: "Cartograf", d: "Cel care desenează hărțile geografice." },
    { t: "Vedere zenitală", d: "Modul de a privi un loc de sus, perpendicular." },
    { t: "Reducere la scară", d: "Micșorarea realității împărțind toate dimensiunile la același număr." },
    { t: "Scară", d: "Raportul dintre dimensiunile de pe hartă și cele reale. 1 : 100 înseamnă 1 cm = 100 cm." },
    { t: "Legendă", d: "Chenarul care explică semnificația simbolurilor și a culorilor hărții." },
    { t: "Plan", d: "Desen făcut de sus, la scară foarte mare, al unui spațiu mic (cameră, casă, școală)." },
    { t: "Hartă fizică", d: "Hartă care arată elementele naturale: munți, câmpii, râuri, lacuri, mări." },
    { t: "Hartă politică", d: "Hartă care arată state, regiuni, granițe și orașe." },
    { t: "Hartă tematică", d: "Hartă dedicată unui singur subiect, precum clima, drumurile sau populația." },
    { t: "Planiglob", d: "Hartă care reprezintă toată suprafața Pământului pe o foaie." },
    { t: "Glob pământesc", d: "Glob care reprezintă Pământul cu forma lui sferică, fără deformări." },
    { t: "Roza vânturilor", d: "Desen care indică punctele cardinale: Nord, Sud, Est, Vest." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Hărțile geografice reprezintă teritoriul văzut…", options: ["din față", "de sus", "din lateral"], answer: 1, explain: "Se folosește vederea zenitală, de sus." },
      { type: "mc", q: "Ce înseamnă scara 1 : 100?", options: ["1 cm pe hartă = 100 cm în realitate", "1 m pe hartă = 100 km în realitate", "harta are 100 de simboluri"], answer: 0, explain: "Fiecare centimetru desenat corespunde la 100 cm, adică 1 metru." },
      { type: "num", q: "Plan la scara 1 : 100. Patul pe desen este lung de 2 cm. Câți metri este lung patul adevărat?", answer: 2, tol: 0, unit: "m", explain: "2 × 100 = 200 cm = 2 m." },
      { type: "num", q: "Scara 1 : 100. Sala de sport este lungă de 20 m. Câți centimetri va fi lungă pe plan?", answer: 20, tol: 0, unit: "cm", explain: "Cu scara 1 : 100 fiecare metru devine 1 cm: 20 m → 20 cm." },
      { type: "text", q: "Cum se numește chenarul care explică simbolurile unei hărți?", answer: ["legendă", "legenda", "o legendă"], explain: "Legenda." },
      { type: "mc", q: "Pe o hartă fizică munții sunt…", options: ["verzi", "maro", "albaștri"], answer: 1, explain: "Maro, tot mai închis acolo unde munții sunt mai înalți." },
      { type: "mc", q: "Vrei să știi pe unde trece granița dintre Italia și Elveția. Folosești o hartă…", options: ["fizică", "politică", "a climei"], answer: 1, explain: "Granițele sunt pe harta politică." },
      { type: "mc", q: "O hartă care arată doar ploile din Italia este o hartă…", options: ["tematică", "topografică", "politică"], answer: 0, explain: "Tratează un singur subiect: este tematică." },
      { type: "order", q: "Pune în ordine de la harta care reprezintă locul cel mai mic la cea care reprezintă locul cel mai mare.", items: ["planul clasei", "planul orașului", "harta regiunii", "harta Italiei", "planiglobul"], explain: "Cu cât teritoriul este mai mare, cu atât trebuie micșorat mai mult." },
      { type: "tf", q: "Globul pământesc arată forma Pământului mai bine decât un planiglob.", answer: true, explain: "Pământul este sferic ca globul; orice hartă plană îl deformează puțin." },
      { type: "tf", q: "Pe planigloburile lui Mercator Groenlanda apare mai mică decât este în realitate.", answer: false, explain: "Apare mult mai mare: pământurile apropiate de poli sunt întinse." },
      { type: "mc", q: "De obicei, pe hărți, Nordul se găsește…", options: ["jos", "sus", "în dreapta"], answer: 1, explain: "Prin convenție Nordul este sus, indicat de o săgeată sau de roza vânturilor." }
    ]
  }
});

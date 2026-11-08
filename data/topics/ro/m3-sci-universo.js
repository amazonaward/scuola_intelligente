TOPIC('ro', {
  id: "m3-sci-universo",
  title: "Universul",
  intro: "Soarele este doar una dintre sutele de miliarde de stele ale galaxiei noastre, <b>Calea Lactee</b>, care la rândul ei este una dintre miliardele de galaxii. Cum se nasc și mor stelele? Cât de mare este Universul? Și cum a început totul, acum <b>13,8 miliarde de ani</b>?",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Măsurarea unor distanțe uriașe",
      html: `<p>În spațiu kilometrii sunt o unitate prea mică. Astronomii folosesc:</p>
<ul>
<li><b>Unitatea astronomică (UA)</b>: distanța medie Pământ–Soare, aproximativ <b>150 de milioane de km</b> (149,6). Se folosește în interiorul Sistemului Solar: Jupiter se află la aproximativ 5,2 UA, Neptun la aproximativ 30 UA.</li>
<li><b>anul-lumină (a.l.)</b>: distanța pe care o parcurge lumina într-un an. Lumina călătorește cu aproximativ <b>300.000 km pe secundă</b>, deci:<br>
300.000 km/s × 31.557.600 s ≈ <b>9.460 de miliarde de km</b> (9,46 × 10<sup>12</sup> km).</li>
</ul>
<p>⚠️ Anul-lumină <b>nu</b> este o măsură de timp, ci de <b>distanță</b>!</p>
<p>Consecință surprinzătoare: <b>a privi departe înseamnă a privi în trecut</b>. Lumina Soarelui are nevoie de aproximativ 8 minute și 20 de secunde ca să ajungă la noi: vedem Soarele așa cum era acum 8 minute. Cea mai apropiată stea după Soare, <b>Proxima Centauri</b>, se află la <b>4,24 ani-lumină</b>: o vedem așa cum era acum mai bine de 4 ani.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: cât durează lumina Soarelui?",
      html: `<p>Distanța Pământ–Soare ≈ 150.000.000 km. Viteza luminii ≈ 300.000 km/s.</p>
<p>timp = distanță : viteză = 150.000.000 : 300.000 = <b>500 de secunde</b> = 8 minute și 20 de secunde.</p>
<p>Și cu o navă spațială? Sonda <b>Voyager 1</b>, lansată în 1977, este cel mai îndepărtat obiect construit de oameni și călătorește cu aproximativ 17 km/s. Pentru a ajunge la Proxima Centauri (aproximativ 40.000 de miliarde de km) i-ar trebui:<br>
40.000.000.000.000 : 17 ≈ 2,35 × 10<sup>12</sup> secunde ≈ <b>75.000 de ani</b>!</p>`
    },
    {
      type: "3d",
      title: "Cartierul nostru: Sistemul Solar",
      scene: "solar",
      options: { labels: true },
      caption: "Sistemul Solar: Soarele, 8 planete, sateliții lor, asteroizi și comete. Distanțele reale ar fi mult mai mari: la scară, planetele ar fi invizibile."
    },
    {
      type: "text",
      title: "2. Ce este o stea",
      html: `<p>O <b>stea</b> este o sferă uriașă de gaz fierbinte (mai ales <b>hidrogen</b> și <b>heliu</b>) care produce singură lumină și căldură. În <b>nucleul</b> ei temperatura și presiunea sunt atât de mari (în Soare aproximativ <b>15 milioane de °C</b>) încât nucleele de hidrogen fuzionează și formează heliu: este <b>fuziunea nucleară</b>.</p>
<p>În fuziune o mică parte din masă dispare și devine energie, conform celebrei formule a lui Einstein <b>E = mc²</b>. Soarele transformă în fiecare secundă aproximativ <b>600 de milioane de tone</b> de hidrogen în heliu.</p>
<p>Stelele au <b>culori</b> diferite în funcție de temperatura suprafeței:</p>
<ul>
<li>🔵 <b>albastre/albe</b>: cele mai fierbinți (peste 10.000 °C), de ex. Rigel;</li>
<li>🟡 <b>galbene</b>: medii, ca Soarele (aproximativ 5.500 °C);</li>
<li>🔴 <b>roșii</b>: cele mai „reci” (aproximativ 3.000 °C), de ex. Betelgeuse.</li>
</ul>
<p>Exact ca fierul unui fierar: mai întâi devine roșu, apoi galben, apoi alb pe măsură ce se încălzește.</p>`
    },
    {
      type: "3d",
      title: "În interiorul Soarelui",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fbbf24", label: "Fotosfera (suprafața, ~5.500 °C)" },
          { r: 0.97, color: "#f97316", label: "Zona convectivă: gazul urcă și coboară" },
          { r: 0.7, color: "#ef4444", label: "Zona radiativă: energia iese foarte încet" },
          { r: 0.25, color: "#fef9c3", label: "Nucleul: fuziune la ~15 milioane de °C" }
        ]
      },
      caption: "Rotește Soarele: energia produsă în nucleu are nevoie de zeci de mii de ani ca să străbată zona radiativă și să ajungă la suprafață, apoi doar 8 minute ca să ajungă pe Pământ."
    },
    {
      type: "3d",
      title: "Atomii care aprind stelele",
      scene: "atom",
      options: { elements: ["H", "He", "C", "O", "Fe"] },
      caption: "Hidrogenul (1 proton) este combustibilul stelelor: prin fuziune devine heliu (2 protoni). Stelele mai mari continuă să fuzioneze și produc carbon, oxigen… până la fier."
    },
    {
      type: "text",
      title: "3. Viața unei stele",
      html: `<p>Stelele se nasc, trăiesc și mor. Soarta lor depinde mai ales de <b>masă</b>.</p>
<ol>
<li><b>Nebuloasa</b>: un nor de gaz și praf se contractă din cauza forței gravitaționale.</li>
<li><b>Protostea</b>: centrul se încălzește; când ajunge la aproximativ 10 milioane de °C se aprinde fuziunea și se naște o <b>stea</b>.</li>
<li><b>Faza stabilă</b> (secvența principală): steaua arde hidrogen timp de milioane sau miliarde de ani. Soarele se află la jumătatea vieții: are aproximativ <b>4,6 miliarde de ani</b> și va mai trăi încă aproximativ 5.</li>
<li><b>Gigantă roșie</b>: când se termină hidrogenul din nucleu, steaua se umflă foarte mult.</li>
<li><b>Sfârșitul</b>:
<ul>
<li>stelele ca Soarele își aruncă straturile exterioare (o <b>nebuloasă planetară</b>) și lasă o stea mică și foarte densă, <b>pitica albă</b>, cât Pământul;</li>
<li>stelele cu mai mult de aproximativ 8 mase solare explodează într-o <b>supernovă</b>, care timp de câteva săptămâni poate străluci mai mult decât o galaxie întreagă. Rămâne o <b>stea neutronică</b> sau, dacă masa este enormă, o <b>gaură neagră</b>, atât de densă încât nici lumina nu poate ieși.</li>
</ul></li>
</ol>
<p>Paradox: cu cât o stea este mai mare, cu atât <b>trăiește mai puțin</b>, pentru că își consumă combustibilul mult mai repede. Stelele gigantice durează câteva milioane de ani; piticele roșii mici, mii de miliarde.</p>`
    },
    {
      type: "svg",
      title: "Ciclul de viață al stelelor",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#0f172a"/>
<ellipse cx="60" cy="160" rx="48" ry="34" fill="#7c3aed" opacity="0.7"/>
<ellipse cx="55" cy="150" rx="30" ry="20" fill="#c084fc" opacity="0.6"/>
<text x="60" y="220" font-size="15" fill="#e2e8f0" text-anchor="middle">Nebuloasă</text>
<line x1="112" y1="160" x2="150" y2="110" stroke="#94a3b8" stroke-width="3"/>
<line x1="112" y1="160" x2="150" y2="215" stroke="#94a3b8" stroke-width="3"/>
<circle cx="175" cy="95" r="16" fill="#facc15"/>
<text x="175" y="70" font-size="14" fill="#fde68a" text-anchor="middle">Stea ca Soarele</text>
<circle cx="175" cy="230" r="24" fill="#60a5fa"/>
<text x="175" y="275" font-size="14" fill="#bfdbfe" text-anchor="middle">Stea masivă</text>
<line x1="195" y1="95" x2="265" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="202" y1="230" x2="265" y2="230" stroke="#94a3b8" stroke-width="3"/>
<circle cx="310" cy="95" r="36" fill="#ef4444"/>
<text x="310" y="150" font-size="14" fill="#fecaca" text-anchor="middle">Gigantă roșie</text>
<circle cx="310" cy="230" r="44" fill="#dc2626"/>
<text x="310" y="292" font-size="14" fill="#fecaca" text-anchor="middle">Supergigantă roșie</text>
<line x1="348" y1="95" x2="410" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="356" y1="230" x2="410" y2="230" stroke="#94a3b8" stroke-width="3"/>
<circle cx="445" cy="95" r="28" fill="none" stroke="#22d3ee" stroke-width="6" opacity="0.8"/>
<text x="445" y="145" font-size="13" fill="#a5f3fc" text-anchor="middle">Nebuloasă planetară</text>
<polygon points="445,195 455,220 482,222 461,238 468,264 445,249 422,264 429,238 408,222 435,220" fill="#fde047"/>
<text x="445" y="292" font-size="14" fill="#fef08a" text-anchor="middle">Supernovă!</text>
<line x1="475" y1="95" x2="540" y2="95" stroke="#94a3b8" stroke-width="3"/>
<line x1="485" y1="225" x2="540" y2="200" stroke="#94a3b8" stroke-width="3"/>
<line x1="485" y1="235" x2="540" y2="265" stroke="#94a3b8" stroke-width="3"/>
<circle cx="565" cy="95" r="8" fill="#f8fafc"/>
<text x="565" y="125" font-size="14" fill="#f8fafc" text-anchor="middle">Pitică albă</text>
<circle cx="565" cy="195" r="6" fill="#a5b4fc"/>
<text x="565" y="222" font-size="13" fill="#c7d2fe" text-anchor="middle">Stea neutronică</text>
<circle cx="565" cy="270" r="14" fill="#000000" stroke="#f97316" stroke-width="3"/>
<text x="565" y="305" font-size="14" fill="#fdba74" text-anchor="middle">Gaură neagră</text>
</svg>`,
      caption: "Ramura de sus este viitorul Soarelui; ramura de jos, cea a stelelor mult mai mari."
    },
    {
      type: "quiz",
      title: "Mini-test: lumină și stele",
      questions: [
        { type: "tf", q: "Anul-lumină este o unitate de măsură a timpului.", answer: false, explain: "Este o distanță: cea parcursă de lumină într-un an, aproximativ 9.460 de miliarde de km." },
        { type: "mc", q: "Ce produce energia unei stele?", options: ["Arderea cărbunelui", "Fuziunea nucleară a hidrogenului", "Electricitatea fulgerelor"], answer: 1, explain: "În nucleu hidrogenul fuzionează în heliu eliberând energie." },
        { type: "mc", q: "Care stea este mai fierbinte la suprafață?", options: ["O stea roșie", "O stea galbenă", "O stea albastră"], answer: 2, explain: "Stelele albastre sunt cele mai fierbinți, cele roșii cele mai puțin fierbinți." },
        { type: "mc", q: "Cum se va sfârși Soarele?", options: ["Ca o gaură neagră", "Ca o pitică albă", "Va exploda într-o supernovă"], answer: 1, explain: "Soarele nu are destulă masă ca să explodeze: va deveni gigantă roșie și apoi pitică albă." }
      ]
    },
    {
      type: "text",
      title: "4. Galaxiile și Calea Lactee",
      html: `<p>O <b>galaxie</b> este un uriaș ansamblu de stele, gaz, praf și materie întunecată ținut laolaltă de gravitație. După clasificarea lui <b>Edwin Hubble</b> (1926) există trei tipuri principale:</p>
<ul>
<li><b>spirale</b> (cu brațe care se rotesc în jurul unui centru, ca a noastră);</li>
<li><b>eliptice</b> (în formă de minge turtită, adesea cu stele bătrâne);</li>
<li><b>neregulate</b> (fără o formă precisă, ca Norii lui Magellan).</li>
</ul>
<p>Galaxia noastră este <b>Calea Lactee</b>: o spirală cu o bară centrală, lată de aproximativ <b>100.000 de ani-lumină</b>, cu <b>100–400 de miliarde de stele</b>. Soarele se află într-un braț periferic, la aproximativ 26.000 de ani-lumină de centru, și are nevoie de aproximativ <b>230 de milioane de ani</b> ca să facă un tur complet. În centru se află o gaură neagră gigantică, <b>Sagittarius A*</b>, cu o masă de aproximativ 4 milioane de Sori: prima ei „fotografie” a fost publicată în 2022.</p>
<p>În nopțile întunecate, departe de lumini, Calea Lactee se vede ca o fâșie luminoasă pe cer: o privim „din profil”, din interior. <b>Galileo</b>, în 1610, a descoperit cu luneta că acea fâșie este alcătuită dintr-o infinitate de stele.</p>
<p>Cea mai apropiată galaxie mare este <b>Andromeda</b>, la aproximativ <b>2,5 milioane de ani-lumină</b>: este cel mai îndepărtat obiect vizibil cu ochiul liber. Peste aproximativ 4–5 miliarde de ani se va ciocni cu Calea Lactee.</p>`
    },
    {
      type: "svg",
      title: "Calea Lactee văzută de sus (și unde ne aflăm noi)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#020617"/>
<ellipse cx="300" cy="160" rx="60" ry="30" fill="#fde68a" opacity="0.9"/>
<path d="M300 160 C 380 100, 470 140, 470 200 C 470 260, 380 290, 300 280" fill="none" stroke="#93c5fd" stroke-width="22" opacity="0.55"/>
<path d="M300 160 C 220 220, 130 180, 130 120 C 130 60, 220 30, 300 40" fill="none" stroke="#93c5fd" stroke-width="22" opacity="0.55"/>
<path d="M340 150 C 420 60, 540 90, 545 170" fill="none" stroke="#c4b5fd" stroke-width="14" opacity="0.45"/>
<path d="M260 170 C 180 260, 60 230, 55 150" fill="none" stroke="#c4b5fd" stroke-width="14" opacity="0.45"/>
<circle cx="440" cy="245" r="7" fill="#facc15" stroke="#ffffff" stroke-width="2"/>
<line x1="447" y1="250" x2="500" y2="285" stroke="#facc15" stroke-width="2"/>
<text x="505" y="295" font-size="16" fill="#facc15">Soarele (noi!)</text>
<text x="300" y="166" font-size="14" fill="#0f172a" text-anchor="middle" font-weight="bold">Centrul</text>
<line x1="50" y1="25" x2="550" y2="25" stroke="#e2e8f0" stroke-width="2"/>
<text x="300" y="18" font-size="15" fill="#e2e8f0" text-anchor="middle">aproximativ 100.000 de ani-lumină</text>
<line x1="300" y1="160" x2="440" y2="245" stroke="#f472b6" stroke-width="2" stroke-dasharray="6"/>
<text x="360" y="225" font-size="14" fill="#f9a8d4">26.000 a.l.</text>
</svg>`,
      caption: "Desen simplificat: Calea Lactee este o spirală barată; Sistemul Solar se află la periferie."
    },
    {
      type: "text",
      title: "5. Big Bang: cum a început totul",
      html: `<p>În 1929 astronomul american <b>Edwin Hubble</b> a descoperit că aproape toate galaxiile se <b>îndepărtează</b> de noi, și cu atât mai repede cu cât sunt mai departe. Belgianul <b>Georges Lemaître</b> (preot și fizician) o prevăzuse deja în 1927: Universul este în <b>expansiune</b>.</p>
<p>Dacă astăzi totul se îndepărtează, mergând înapoi în timp totul trebuia să fi fost mai apropiat, mai dens și mai fierbinte. Acum aproximativ <b>13,8 miliarde de ani</b> Universul era foarte mic și foarte fierbinte: de acolo începe expansiunea lui, numită <b>Big Bang</b>.</p>
<ul>
<li>În primele minute s-au format nucleele de <b>hidrogen</b> și <b>heliu</b>.</li>
<li>După aproximativ <b>380.000 de ani</b> Universul s-a răcit suficient ca să se formeze atomii și a devenit transparent pentru lumină.</li>
<li>După câteva sute de milioane de ani s-au aprins <b>primele stele</b> și primele galaxii.</li>
<li>Acum aproximativ <b>4,6 miliarde de ani</b> s-au născut Soarele și Pământul.</li>
</ul>
<p><b>Dovezile</b> Big Bang-ului: (1) expansiunea observată de Hubble; (2) <b>radiația cosmică de fond</b>, „căldura slabă” rămasă de la Big Bang, descoperită întâmplător în 1965 de Arno Penzias și Robert Wilson (premiul Nobel 1978); (3) cantitatea de hidrogen și heliu din Univers, exact cea prevăzută de teorie.</p>
<p>⚠️ Big Bang-ul <b>nu</b> a fost o explozie într-un punct al spațiului: spațiul însuși este cel care se extinde, peste tot.</p>`
    },
    {
      type: "widget",
      title: "Istoria Universului (scară logaritmică)",
      widget: "timeline",
      options: {
        scale: "log",
        events: [
          { year: -13800000000, label: "Big Bang", icon: "💥" },
          { year: -13500000000, label: "Primele stele", icon: "✨" },
          { year: -4600000000, label: "Se naște Soarele", icon: "☀️" },
          { year: -3800000000, label: "Prima viață", icon: "🦠" },
          { year: -66000000, label: "Sfârșitul dinozaurilor", icon: "🦖" },
          { year: -300000, label: "Homo sapiens", icon: "🧑" },
          { year: 1610, label: "Galileo: telescopul", icon: "🔭" },
          { year: 1969, label: "Omul pe Lună", icon: "🌕" }
        ]
      },
      caption: "Pe o scară obișnuită, toată istoria omenirii ar fi un punctuleț invizibil la extremitatea dreaptă: de aceea se folosește o scară logaritmică."
    },
    {
      type: "example",
      title: "Exemplu practic: observarea cerului",
      html: `<p>Într-o noapte senină, departe de luminile orașului, poți observa:</p>
<ul>
<li>aproximativ <b>2.000–3.000 de stele</b> cu ochiul liber (în oraș poate 50!);</li>
<li><b>Steaua Polară</b>, care indică Nordul: o găsești prelungind de 5 ori latura din spate a „carului” Ursei Mari;</li>
<li><b>Sirius</b>, cea mai strălucitoare stea a cerului nocturn, la 8,6 ani-lumină;</li>
<li><b>galaxia Andromeda</b>, o pată luminoasă toamna: lumina ei a plecat acum 2,5 milioane de ani, când pe Pământ trăiau primii oameni din genul <i>Homo</i>.</li>
</ul>
<p>Cu o aplicație de astronomie sau o hartă a cerului poți recunoaște constelații ca Orion, Cassiopeea și Scorpionul.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Suntem făcuți din praf de stele",
      html: `<p>Carbonul din ADN-ul tău, oxigenul pe care îl respiri, calciul din oasele tale și fierul din sângele tău au fost produse în stele străvechi, apoi risipite în spațiu prin exploziile lor. Doar hidrogenul și heliul (și puțin litiu) vin direct de la Big Bang. După cum a spus astronomul Carl Sagan: <i>„Suntem făcuți din aceeași substanță ca stelele”</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Universul pe care nu-l vedem",
      html: `<p>Tot ce vedem – stele, planete, gaz, noi – este doar aproximativ <b>5%</b> din Univers. Aproximativ <b>27%</b> este <b>materie întunecată</b>, care nu emite lumină, dar se face simțită prin gravitația ei; restul de aproximativ <b>68%</b> este <b>energia întunecată</b>, care accelerează expansiunea. Nimeni nu știe încă ce sunt: poate vei afla tu!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? O linguriță foarte grea",
      html: `<p>O <b>stea neutronică</b> are mai multă masă decât Soarele comprimată într-o sferă cu diametrul de aproximativ 20 km: o linguriță din materia ei ar cântări pe Pământ sute de milioane de tone, mai mult decât un munte. Iar telescopul spațial <b>James Webb</b>, lansat la 25 decembrie 2021, observă galaxii a căror lumină a plecat acum mai bine de 13 miliarde de ani.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a ne imagina Universul",
      intro: "Numere ca „miliarde de ani-lumină” nu spun nimic creierului nostru. Iată câteva trucuri ca să le facem concrete.",
      tabs: [
        {
          label: "⚽ Sistemul Solar la scară",
          html: `<p>Să micșorăm totul de aproximativ <b>4,6 miliarde de ori</b>: Soarele devine o minge de <b>30 cm</b>.</p>
<table>
<tr><th>Obiect</th><th>La scară</th><th>Distanța față de minge</th></tr>
<tr><td>☀️ Soare</td><td>minge de 30 cm</td><td>—</td></tr>
<tr><td>🌍 Pământ</td><td>un bob de 2,7 mm</td><td>aproximativ 32 m</td></tr>
<tr><td>🪐 Jupiter</td><td>o bilă de 3 cm</td><td>aproximativ 170 m</td></tr>
<tr><td>🔵 Neptun</td><td>o bilă de 1 cm</td><td>aproape 1 km</td></tr>
<tr><td>⭐ Proxima Centauri</td><td>o cireașă</td><td>aproximativ <b>8.600 km</b>: cât de la Italia până în China!</td></tr>
</table>
<p>Universul este mai ales… <b>spațiu gol</b>.</p>`
        },
        {
          label: "📅 Calendarul cosmic",
          html: `<p>Astronomul <b>Carl Sagan</b> a propus să comprimăm toată istoria Universului într-<b>un singur an</b>. Fiecare zi valorează aproximativ 38 de milioane de ani; fiecare secundă aproximativ 440 de ani.</p>
<ul>
<li>1 ianuarie, miezul nopții: <b>Big Bang</b>;</li>
<li>începutul lui septembrie: se nasc <b>Soarele</b> și <b>Pământul</b>;</li>
<li>sfârșitul lui septembrie: apare <b>viața</b> (bacterii);</li>
<li>30 decembrie, dimineața: se sting <b>dinozaurii</b>;</li>
<li>31 decembrie, ora 23:48: apare <b>Homo sapiens</b>;</li>
<li>ultimele <b>11 secunde</b> înainte de miezul nopții: toată istoria scrisă, de la egipteni până azi.</li>
</ul>`
        },
        {
          label: "🎈 Balonul care se umflă",
          html: `<p>Desenează niște puncte pe un balon dezumflat și apoi umflă-l: toate punctele se îndepărtează între ele, iar cele mai îndepărtate se îndepărtează mai repede. Niciun punct nu este „centrul”. Galaxiile sunt ca punctele, iar spațiul este cauciucul balonului: spațiul este cel care se dilată.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0f9ff"/>
<circle cx="120" cy="130" r="55" fill="#f87171"/>
<circle cx="105" cy="115" r="5" fill="#1e293b"/><circle cx="135" cy="120" r="5" fill="#1e293b"/><circle cx="120" cy="148" r="5" fill="#1e293b"/>
<line x1="120" y1="185" x2="120" y2="230" stroke="#64748b" stroke-width="2"/>
<text x="120" y="250" font-size="15" text-anchor="middle" fill="#0f172a">ieri</text>
<text x="255" y="135" font-size="40" text-anchor="middle" fill="#64748b">→</text>
<circle cx="430" cy="125" r="110" fill="#f87171"/>
<circle cx="385" cy="85" r="7" fill="#1e293b"/><circle cx="470" cy="95" r="7" fill="#1e293b"/><circle cx="430" cy="170" r="7" fill="#1e293b"/>
<line x1="385" y1="85" x2="470" y2="95" stroke="#1e293b" stroke-dasharray="5"/>
<line x1="385" y1="85" x2="430" y2="170" stroke="#1e293b" stroke-dasharray="5"/>
<text x="430" y="252" font-size="15" text-anchor="middle" fill="#0f172a">azi: toate distanțele s-au dublat</text>
</svg>`
        },
        {
          label: "🪐 Explorează în 3D",
          html: `<p>Pornește de la „cartierul” pe care îl cunoști, Sistemul Solar: rotește-l și privește orbitele. Apoi amintește-ți că <b>tot</b> acest sistem, mărit la maximum, este un punctuleț invizibil în Calea Lactee, care la rândul ei este un punctuleț printre miliarde de galaxii.</p>`,
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta Universului: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "bigbang", label: "Big Bang", x: 50, y: 6, color: "#f97316", html: "Începutul expansiunii Universului, acum aproximativ 13,8 miliarde de ani.", why: "Propus de <b>Lemaître</b> (1927) pornind de la ecuațiile relativității generale a lui Einstein; confirmat de expansiunea observată de <b>Hubble</b> (1929) și de radiația de fond descoperită de <b>Penzias și Wilson</b> (1965). Vârsta se deduce măsurând viteza de expansiune și radiația de fond (satelitul Planck)." },
        { id: "elementi", label: "Hidrogen și heliu", x: 20, y: 24, color: "#38bdf8", html: "Primele elemente, formate în primele minute.", why: "Universul era prea fierbinte și se răcea prea repede ca să construiască nuclee mai grele: de aceea și azi aproximativ 74% din materia obișnuită este hidrogen și aproximativ 24% heliu." },
        { id: "gravita", label: "Gravitația", x: 80, y: 24, color: "#a855f7", html: "Forța care atrage masele între ele.", why: "Descrisă de <b>Newton</b> (1687) și apoi de <b>Einstein</b> cu relativitatea generală (1915) ca o curbură a spațiu-timpului. Ea face să se condenseze norii de gaz în stele și ține laolaltă galaxiile." },
        { id: "nebulose", label: "Nebuloase", x: 50, y: 34, color: "#c084fc", html: "Nori de gaz și praf: „leagănele” stelelor.", why: "Acolo unde gazul este puțin mai dens, gravitația îl atrage și îl comprimă din ce în ce mai mult, până când se încălzește: așa se nasc stelele, adesea în grupuri." },
        { id: "stelle", label: "Stele", x: 30, y: 55, color: "#facc15", html: "Sfere de gaz care produc energie prin fuziune nucleară.", why: "În 1920 Arthur Eddington a presupus că stelele strălucesc fuzionând hidrogen; în 1938–39 <b>Hans Bethe</b> a explicat reacțiile exacte. Energia provine din masa care „dispare”, conform E = mc²." },
        { id: "nuovielementi", label: "Elemente noi", x: 12, y: 78, color: "#22c55e", html: "Carbon, oxigen, fier, aur… produse de stele.", why: "În 1957 un celebru articol (Burbidge, Burbidge, Fowler și Hoyle) a arătat cum stelele „gătesc” elementele; cele mai grele decât fierul se nasc în supernove și în ciocnirile dintre stele neutronice." },
        { id: "fine", label: "Pitice albe, supernove, găuri negre", x: 50, y: 78, color: "#64748b", html: "Soarta finală a stelelor depinde de masa lor.", why: "Indianul <b>Subrahmanyan Chandrasekhar</b> a calculat în 1930 că peste o anumită masă o stea pe moarte nu se mai poate susține: se prăbușește. Găurile negre erau o previziune a relativității; prima imagine a uneia este din 2019." },
        { id: "galassie", label: "Galaxii", x: 80, y: 55, color: "#3b82f6", html: "Uriașe sisteme de stele; a noastră este Calea Lactee.", why: "Până în 1924 mulți credeau că Calea Lactee este întregul Univers. <b>Hubble</b> a măsurat distanța până la Andromeda și a demonstrat că este o galaxie separată, mult mai îndepărtată." },
        { id: "noi", label: "Sistemul Solar și viața", x: 85, y: 92, color: "#16a34a", html: "Soarele, Pământul și noi, născuți acum 4,6 miliarde de ani.", why: "Soarele s-a format dintr-un nor îmbogățit cu resturile stelelor precedente: fără exploziile lor nu ar exista carbon, oxigen și fier, adică cărămizile vieții." }
      ],
      edges: [
        ["bigbang", "elementi", "produce"],
        ["bigbang", "gravita", "apoi acționează"],
        ["elementi", "nebulose", "formează"],
        ["gravita", "nebulose", "comprimă"],
        ["nebulose", "stelle", "dau naștere la"],
        ["stelle", "nuovielementi", "fabrică"],
        ["stelle", "fine", "mor ca"],
        ["fine", "nuovielementi", "răspândesc"],
        ["gravita", "galassie", "ține laolaltă"],
        ["stelle", "galassie", "formează"],
        ["nuovielementi", "noi", "construiesc"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: galaxii și Big Bang",
      questions: [
        { type: "mc", q: "Cum se numește galaxia noastră?", options: ["Andromeda", "Calea Lactee", "Norul lui Magellan"], answer: 1, explain: "Trăim în Calea Lactee, o galaxie spirală barată." },
        { type: "num", q: "Aproximativ cu câte miliarde de ani în urmă a avut loc Big Bang-ul?", answer: 13.8, tol: 0.2, explain: "Acum aproximativ 13,8 miliarde de ani." },
        { type: "mc", q: "Cine a observat în 1929 că galaxiile se îndepărtează?", options: ["Galileo Galilei", "Edwin Hubble", "Isaac Newton"], answer: 1, explain: "Edwin Hubble, la observatorul de pe Muntele Wilson." }
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>1 an-lumină ≈ 9.460 de miliarde de km: este o <b>distanță</b>. A privi departe = a privi în trecut.</li>
<li>Stelele strălucesc datorită <b>fuziunii nucleare</b> a hidrogenului în heliu.</li>
<li>Ciclul: nebuloasă → stea → gigantă roșie → <b>pitică albă</b> (stele mici) sau <b>supernovă</b> → stea neutronică sau <b>gaură neagră</b> (stele mari).</li>
<li><b>Calea Lactee</b> este o galaxie spirală de 100.000 de ani-lumină; Andromeda se află la 2,5 milioane de ani-lumină.</li>
<li>Universul se extinde de la <b>Big Bang</b>, acum 13,8 miliarde de ani.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "An-lumină", d: "Distanța parcursă de lumină într-un an: aproximativ 9.460 de miliarde de km." },
    { t: "Unitate astronomică", d: "Distanța medie Pământ–Soare, aproximativ 150 de milioane de km." },
    { t: "Fuziune nucleară", d: "Unirea unor nuclee ușoare în nuclee mai grele, cu eliberare de energie." },
    { t: "Nebuloasă", d: "Nor de gaz și praf în spațiu, unde se nasc stelele." },
    { t: "Pitică albă", d: "Rest mic și foarte dens al unei stele ca Soarele." },
    { t: "Supernovă", d: "Explozia unei stele foarte masive la sfârșitul vieții sale." },
    { t: "Gaură neagră", d: "Regiune a spațiului cu o gravitație atât de puternică încât nici lumina nu poate ieși." },
    { t: "Galaxie", d: "Uriaș sistem de stele, gaz și praf ținut laolaltă de gravitație." },
    { t: "Big Bang", d: "Începutul expansiunii Universului, acum 13,8 miliarde de ani." },
    { t: "Radiația cosmică de fond", d: "Radiație slabă rămasă din Universul primordial, descoperită în 1965." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Anul-lumină măsoară…", options: ["un timp", "o distanță", "o viteză", "o temperatură"], answer: 1, explain: "Este distanța parcursă de lumină într-un an." },
      { type: "num", q: "Lumina călătorește cu 300.000 km/s. Câte secunde îi trebuie să parcurgă 150.000.000 km?", answer: 500, unit: "s", explain: "150.000.000 : 300.000 = 500 s (8 min 20 s)." },
      { type: "text", q: "Cum se numește gazul principal „ars” (fuzionat) în stele?", answer: ["hidrogen", "hidrogenul", "h"], explain: "Hidrogenul, care prin fuziune devine heliu." },
      { type: "tf", q: "Stelele mai masive trăiesc mai mult decât cele mici.", answer: false, explain: "Își consumă combustibilul mult mai repede: trăiesc mai puțin." },
      { type: "order", q: "Pune în ordine viața unei stele ca Soarele.", items: ["Nebuloasă", "Protostea", "Stea stabilă (ca acum)", "Gigantă roșie", "Pitică albă"], explain: "De la norul de gaz până la pitica albă finală." },
      { type: "mc", q: "Ce poate rămâne după explozia unei supernove?", options: ["O pitică albă", "O stea neutronică sau o gaură neagră", "O planetă gazoasă"], answer: 1, explain: "Stelele masive lasă o stea neutronică sau o gaură neagră." },
      { type: "mc", q: "Cât de lată este aproximativ Calea Lactee?", options: ["100 de ani-lumină", "100.000 de ani-lumină", "100 de miliarde de ani-lumină"], answer: 1, explain: "Aproximativ 100.000 de ani-lumină." },
      { type: "text", q: "Cum se numește cea mai apropiată mare galaxie spirală, vizibilă cu ochiul liber?", answer: ["andromeda", "galaxia andromeda", "galaxia andromedei", "m31"], explain: "Andromeda (M31), la aproximativ 2,5 milioane de ani-lumină." },
      { type: "mc", q: "Care dintre acestea NU este o dovadă a Big Bang-ului?", options: ["Îndepărtarea galaxiilor", "Radiația cosmică de fond", "Fazele Lunii", "Abundența hidrogenului și a heliului"], answer: 2, explain: "Fazele Lunii depind de poziția Lunii, a Pământului și a Soarelui." },
      { type: "tf", q: "Fierul din sângele nostru a fost produs în interiorul stelelor.", answer: true, explain: "Toate elementele mai grele decât heliul (în afară de puțin litiu) vin de la stele." },
      { type: "mc", q: "De ce culoare sunt cele mai reci stele?", options: ["Albastre", "Galbene", "Roșii"], answer: 2, explain: "Aproximativ 3.000 °C la suprafață: par roșii." },
      { type: "num", q: "Proxima Centauri se află la 4,24 ani-lumină. Cu câți ani în urmă a plecat lumina pe care o vedem azi?", answer: 4.24, tol: 0.01, unit: "ani", explain: "Lumina are nevoie de 1 an pentru fiecare an-lumină: 4,24 ani." }
    ]
  }
});

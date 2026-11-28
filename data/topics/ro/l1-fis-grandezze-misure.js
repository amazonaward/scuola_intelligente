TOPIC('ro', {
  id: "l1-fis-grandezze-misure",
  title: "Mărimi fizice și Sistemul Internațional",
  intro: "Fizica începe atunci când încetăm să spunem «e lung», «e greu», «e rapid» și începem să spunem <b>cât</b>. Pentru asta avem nevoie de <b>mărimi</b>, de <b>unități de măsură</b> acceptate de toți și de un mod comod de a scrie numere uriașe sau minuscule. În această lecție vedem <b>Sistemul Internațional (SI)</b>, prefixele, transformările de unități, <b>notația științifică</b> și <b>ordinele de mărime</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Ce este o mărime fizică",
      html: `<p>O <b>mărime fizică</b> este o proprietate a unui corp sau a unui fenomen care poate fi <b>măsurată</b>: lungimea unei bănci, masa unui ghiozdan, durata unei lecții, temperatura unei camere. «Frumosul», «simpaticul», «bunul» nu sunt mărimi fizice: nu există un instrument care să le măsoare în mod obiectiv.</p>
<p>A <b>măsura</b> o mărime înseamnă a o <b>compara cu o mărime de aceeași natură aleasă ca etalon</b> (<b>unitatea de măsură</b>) și a număra de câte ori se cuprinde aceasta în prima. Rezultatul este un <b>număr urmat de o unitate</b>:</p>
<p style="text-align:center"><b>măsura = număr × unitate</b>, de exemplu l = 3,2 m</p>
<p>Fără unitate, un număr în fizică nu are sens: «5» poate fi 5 metri, 5 secunde sau 5 kilograme. Mărimile fizice se împart în:</p>
<ul>
<li><b>mărimi fundamentale</b>: alese ca punct de plecare (lungime, masă, timp…);</li>
<li><b>mărimi derivate</b>: obținute combinând mărimile fundamentale prin produse și rapoarte (arie, volum, viteză, densitate…).</li>
</ul>`
    },
    {
      type: "text",
      title: "Sistemul Internațional (SI)",
      html: `<p>Timp de secole, fiecare țară, iar uneori fiecare oraș, folosea propriile unități (picioare, coți, livre, uncii…). În 1960, Conferința Generală de Măsuri și Greutăți a adoptat <b>Sistemul Internațional de unități</b>, folosit astăzi în toată lumea științifică. Are <b>șapte mărimi fundamentale</b>:</p>
<table>
<tr><th>Mărimea</th><th>Unitatea</th><th>Simbol</th></tr>
<tr><td>Lungime</td><td>metru</td><td>m</td></tr>
<tr><td>Masă</td><td>kilogram</td><td>kg</td></tr>
<tr><td>Timp</td><td>secundă</td><td>s</td></tr>
<tr><td>Curent electric</td><td>amper</td><td>A</td></tr>
<tr><td>Temperatură termodinamică</td><td>kelvin</td><td>K</td></tr>
<tr><td>Cantitate de substanță</td><td>mol</td><td>mol</td></tr>
<tr><td>Intensitate luminoasă</td><td>candelă</td><td>cd</td></tr>
</table>
<p>În programa clasei întâi folosim mai ales primele trei: <b>lungimea, masa, timpul</b>.</p>`
    },
    {
      type: "widget",
      title: "Fundamentale sau derivate?",
      widget: "classify",
      options: { groups: ["Fundamentală (SI)", "Derivată"], items: [
        ["Lungime", 0],
        ["Viteză", 1],
        ["Masă", 0],
        ["Arie", 1],
        ["Timp", 0],
        ["Densitate", 1],
        ["Temperatură (kelvin)", 0],
        ["Volum", 1],
        ["Forță", 1]
      ] },
      caption: "Mărimile derivate se obțin din cele fundamentale prin produse și rapoarte."
    },
    {
      type: "text",
      title: "Cum se definesc unitățile",
      html: `<p>De-a lungul timpului definițiile s-au schimbat pentru a deveni tot mai precise și mai ușor de reprodus:</p>
<ul>
<li><b>metrul</b> este definit astăzi ca distanța parcursă de lumină în vid în <b>1/299 792 458 dintr-o secundă</b>; în 1791 fusese gândit, în schimb, ca a zecea milioana parte dintr-un sfert de meridian terestru;</li>
<li><b>secunda</b> este durata a <b>9 192 631 770 perioade</b> ale radiației emise de un atom de cesiu-133;</li>
<li><b>kilogramul</b>, definit până în 2019 de un cilindru de platină-iridiu păstrat la Sèvres (Franța), este definit din 20 mai 2019 pornind de la <b>constanta lui Planck</b>.</li>
</ul>
<p>Astăzi toate unitățile SI se bazează pe <b>constante fundamentale ale naturii</b>: nu mai depind de un obiect care s-ar putea deteriora.</p>`
    },
    {
      type: "text",
      title: "Mărimile derivate",
      html: `<p>Unitățile mărimilor derivate se obțin combinând unitățile celor fundamentale:</p>
<table>
<tr><th>Mărimea</th><th>Definiția</th><th>Unitatea SI</th></tr>
<tr><td>Arie</td><td>lungime × lungime</td><td>m²</td></tr>
<tr><td>Volum</td><td>lungime × lungime × lungime</td><td>m³</td></tr>
<tr><td>Viteză</td><td>spațiu / timp</td><td>m/s</td></tr>
<tr><td>Densitate</td><td>masă / volum</td><td>kg/m³</td></tr>
<tr><td>Forță (o vom studia)</td><td>masă × accelerație</td><td>newton: N = kg·m/s²</td></tr>
</table>
<p>Pentru a verifica dacă o formulă este corectă se face <b>analiza dimensională</b>: unitățile de măsură trebuie să se potrivească. Exemplu: viteza este spațiu/timp, deci formula <i>v = s / t</i> are ca unitate m/s. Dacă ai scrie în schimb <i>v = s · t</i>, ai obține m·s, care nu este o viteză.</p>`
    },
    {
      type: "remember",
      title: "Regulile de scriere a măsurilor",
      html: `<ul>
<li>Simbolul unității se scrie <b>fără punct</b> și <b>fără plural</b>: 5 kg, și nu «5 kg.» sau «5 kgs»</li>
<li>Se lasă un spațiu între număr și unitate: 12 m.</li>
<li>Simbolurile unităților care provin dintr-un nume propriu se scriu cu <b>majusculă</b> (N de la Newton, K de la Kelvin, A de la Ampère), celelalte se scriu cu minuscule (m, kg, s).</li>
<li>Separatorul zecimal este virgula: 3,5 m.</li>
</ul>`
    },
    {
      type: "text",
      title: "Multipli și submultipli",
      html: `<p>Când o mărime este mult mai mare sau mult mai mică decât unitatea, se folosesc <b>prefixele</b>, care înmulțesc unitatea cu o putere a lui 10:</p>
<table>
<tr><th>Prefix</th><th>Simbol</th><th>Factor</th></tr>
<tr><td>tera</td><td>T</td><td>10¹²</td></tr>
<tr><td>giga</td><td>G</td><td>10⁹</td></tr>
<tr><td>mega</td><td>M</td><td>10⁶</td></tr>
<tr><td>kilo</td><td>k</td><td>10³</td></tr>
<tr><td>centi</td><td>c</td><td>10⁻²</td></tr>
<tr><td>mili</td><td>m</td><td>10⁻³</td></tr>
<tr><td>micro</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>nano</td><td>n</td><td>10⁻⁹</td></tr>
<tr><td>pico</td><td>p</td><td>10⁻¹²</td></tr>
</table>
<p>Exemple: 1 km = 10³ m; 1 mm = 10⁻³ m; 1 GB = 10⁹ octeți; 1 nm = 10⁻⁹ m (o fracțiune din diametrul unui virus).</p>
<p>Atenție la <b>kilogram</b>: este singura unitate SI de bază care conține deja un prefix. Multiplii și submultiplii se formează pornind de la gram (1 mg = 10⁻³ g = 10⁻⁶ kg).</p>`
    },
    {
      type: "widget",
      title: "Prefixe și puteri ale lui 10",
      widget: "match",
      options: { pairs: [
        ["kilo (k)", "10³"],
        ["mega (M)", "10⁶"],
        ["giga (G)", "10⁹"],
        ["mili (m)", "10⁻³"],
        ["micro (μ)", "10⁻⁶"],
        ["nano (n)", "10⁻⁹"]
      ] },
      caption: "Asociază fiecare prefix cu factorul său."
    },
    {
      type: "svg",
      title: "Scara prefixelor",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Fiecare treaptă valorează de o mie de ori cât precedenta</text>
<line x1="30" y1="130" x2="610" y2="130" stroke="#334155" stroke-width="3"/>
<g fill="#2563eb"><circle cx="60" cy="130" r="9"/><circle cx="145" cy="130" r="9"/><circle cx="230" cy="130" r="9"/><circle cx="315" cy="130" r="9"/><circle cx="400" cy="130" r="9"/><circle cx="485" cy="130" r="9"/><circle cx="570" cy="130" r="9"/></g>
<g font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">
<text x="60" y="108">nano</text><text x="145" y="108">micro</text><text x="230" y="108">mili</text><text x="315" y="108">unitate</text><text x="400" y="108">kilo</text><text x="485" y="108">mega</text><text x="570" y="108">giga</text>
</g>
<g font-size="15" text-anchor="middle" fill="#1d4ed8">
<text x="60" y="160">10⁻⁹</text><text x="145" y="160">10⁻⁶</text><text x="230" y="160">10⁻³</text><text x="315" y="160">1</text><text x="400" y="160">10³</text><text x="485" y="160">10⁶</text><text x="570" y="160">10⁹</text>
</g>
<g font-size="14" text-anchor="middle" fill="#475569">
<text x="102" y="205">× 1000</text><text x="187" y="205">× 1000</text><text x="272" y="205">× 1000</text><text x="357" y="205">× 1000</text><text x="442" y="205">× 1000</text><text x="527" y="205">× 1000</text>
</g>
<text x="320" y="262" font-size="15" text-anchor="middle" fill="#0f172a">Pentru a trece la prefixul din dreapta: împarte numărul la 1000</text>
</g>
</svg>`,
      caption: "Deplasându-ne spre dreapta, aceeași cantitate se exprimă printr-un număr de o mie de ori mai mic (1000 m = 1 km)."
    },
    {
      type: "example",
      title: "Transformările de unități în practică",
      html: `<p><b>1)</b> Transformă 2,5 km în metri: 2,5 × 10³ m = <b>2500 m</b>.</p>
<p><b>2)</b> Transformă 450 mm în metri: 450 × 10⁻³ m = <b>0,45 m</b>.</p>
<p><b>3)</b> Transformă 36 km/h în m/s: 36 × 1000 m / 3600 s = <b>10 m/s</b>. Regulă practică: pentru a trece de la km/h la m/s se împarte la 3,6; pentru invers se înmulțește cu 3,6.</p>
<p><b>4)</b> Arii și volume: 1 m² = (10² cm)² = <b>10⁴ cm²</b>; 1 m³ = <b>10⁶ cm³</b>; 1 L = 1 dm³ = 10⁻³ m³. Atenție: pentru arii și volume factorii se ridică la pătrat și la cub!</p>
<p><b>5)</b> Densitate: 1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = <b>10³ kg/m³</b>. Apa are densitatea de aproximativ 1000 kg/m³.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: unități și prefixe",
      questions: [
        { type: "num", q: "Câți metri sunt 3,2 km?", answer: 3200, tol: 0, unit: "m", explain: "3,2 × 1000 = 3200 m." },
        { type: "num", q: "Transformă 72 km/h în m/s.", answer: 20, tol: 0, unit: "m/s", explain: "72 : 3,6 = 20 m/s." },
        { type: "tf", q: "Kilogramul este unitatea de masă din Sistemul Internațional.", answer: true, explain: "Kg este unitatea SI de masă." }
      ]
    },
    {
      type: "text",
      title: "Notația științifică",
      html: `<p>Numere precum masa Pământului (5 970 000 000 000 000 000 000 000 kg) sunt incomode de scris. Se folosește <b>notația științifică</b>:</p>
<p style="text-align:center"><b>a × 10ⁿ</b> cu <b>1 ≤ a &lt; 10</b> și n număr întreg</p>
<p>Pentru a scrie un număr în notație științifică se mută virgula până când rămâne o singură cifră diferită de zero înaintea ei; exponentul n este numărul de locuri cu care am mutat virgula (pozitiv dacă numărul era mare, negativ dacă era mic).</p>
<ul>
<li>45 000 = <b>4,5 × 10⁴</b> (virgula mutată cu 4 locuri spre stânga)</li>
<li>0,00032 = <b>3,2 × 10⁻⁴</b> (virgula mutată cu 4 locuri spre dreapta)</li>
<li>Masa Pământului ≈ <b>5,97 × 10²⁴ kg</b></li>
<li>Masa electronului ≈ <b>9,11 × 10⁻³¹ kg</b></li>
</ul>
<p><b>Operații.</b> La înmulțire se înmulțesc numerele și se adună exponenții: (2 × 10³)(3 × 10⁴) = 6 × 10⁷. La împărțire se scad exponenții: (8 × 10⁹)/(2 × 10³) = 4 × 10⁶. Pentru a aduna, trebuie să aducem numerele la aceeași putere a lui 10.</p>`
    },
    {
      type: "text",
      title: "Ordinul de mărime",
      html: `<p><b>Ordinul de mărime</b> al unui număr este <b>cea mai apropiată putere a lui 10</b> de acel număr. Servește pentru a-ți face rapid o idee despre «scara» unei mărimi și pentru a face estimări.</p>
<p>Regulă practică: se scrie numărul în notație științifică a × 10ⁿ. Dacă <b>a &lt; 5</b>, ordinul de mărime este <b>10ⁿ</b>; dacă <b>a ≥ 5</b>, este <b>10ⁿ⁺¹</b> (pragul exact ar fi √10 ≈ 3,16, dar în manualele școlare se folosește adesea 5).</p>
<ul>
<li>3,2 × 10⁴ → ordin de mărime 10⁴</li>
<li>8 × 10⁴ → 10⁵</li>
<li>Diametrul unui atom: ≈ 10⁻¹⁰ m. Grosimea unui fir de păr: ≈ 10⁻⁴ m. Înălțimea unei persoane: ≈ 10⁰ m. Raza Pământului: ≈ 10⁷ m (6,4 × 10⁶ m). Distanța Pământ-Soare: ≈ 10¹¹ m (1,5 × 10¹¹ m).</li>
</ul>
<p>Două mărimi care diferă prin <b>n ordine de mărime</b> au un raport de aproximativ 10ⁿ.</p>`
    },
    {
      type: "widget",
      title: "De la cea mai mică la cea mai mare",
      widget: "flashcards",
      options: { cards: [
        { front: "⚛️ Nucleul atomic", back: "aproximativ 10⁻¹⁵ m" },
        { front: "🔬 Atomul", back: "aproximativ 10⁻¹⁰ m" },
        { front: "🦠 O bacterie", back: "aproximativ 10⁻⁶ m" },
        { front: "💇 Grosimea unui fir de păr", back: "aproximativ 10⁻⁴ m" },
        { front: "🧍 Un om", back: "aproximativ 10⁰ m (1-2 m)" },
        { front: "🌍 Raza Pământului", back: "6,4 × 10⁶ m, ordin 10⁷ m" },
        { front: "☀️ Distanța Pământ-Soare", back: "1,5 × 10¹¹ m" },
        { front: "✨ Un an-lumină", back: "aproximativ 9,5 × 10¹⁵ m" },
        { front: "🌌 Diametrul Căii Lactee", back: "aproximativ 10²¹ m" }
      ] },
      caption: "Întoarce cărțile: în 36 de ordine de mărime încape tot Universul observabil."
    },
    {
      type: "example",
      title: "Estimare din ochi: de câte ori bate inima?",
      html: `<p>O persoană are aproximativ <b>70 de bătăi pe minut</b>. Câte bătăi are într-o viață de 80 de ani?</p>
<ol>
<li>Minute într-un an: 60 × 24 × 365 ≈ 5,3 × 10⁵.</li>
<li>Minute în 80 de ani: 5,3 × 10⁵ × 80 ≈ 4,2 × 10⁷.</li>
<li>Bătăi: 70 × 4,2 × 10⁷ ≈ <b>3 × 10⁹</b>, adică aproximativ <b>trei miliarde</b>.</li>
</ol>
<p>Ordinul de mărime este 10⁹: nu avem nevoie de numărul exact, ne ajunge să înțelegem că vorbim de miliarde.</p>`
    },
    {
      type: "curiosity",
      title: "Dezastrul sondei Mars Climate Orbiter",
      html: `<p>În 1999, sonda NASA <b>Mars Climate Orbiter</b> s-a distrus în atmosfera Marte, în încercarea de a intra pe orbită, la o altitudine mult mai joasă decât cea prevăzută. Cauza: un software furniza datele de tracțiune în <b>livre-forță</b> (unitate anglo-saxonă), în timp ce un alt program le aștepta în <b>newtoni</b> (SI). O greșeală de unități de măsură a costat aproximativ 125 de milioane de dolari.</p>`
    },
    {
      type: "curiosity",
      title: "Un metru născut din Revoluție",
      html: `<p>Sistemul metric zecimal a fost conceput în Franța în timpul Revoluției, cu ideea de a crea măsuri «pentru toate timpurile, pentru toate popoarele». În 1791, Academia de Științe a propus definirea metrului ca <b>a zecea milioana parte dintr-un sfert de meridian terestru</b>. Doi astronomi, Delambre și Méchain, au măsurat arcul de meridian dintre Dunkerque și Barcelona, printre nenumărate dificultăți și chiar arestări. Etalonul de platină a fost realizat în 1799.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege transformările de unități",
      intro: "Dacă transformările de unități te încurcă, încearcă să le privești altfel.",
      tabs: [
        {
          label: "🪜 Scara prefixelor",
          html: "<p>Imaginează-ți o <b>scară cu trepte</b> (ca în desen): fiecare treaptă înmulțește sau împarte cu 1000. Dacă cobori o treaptă, <b>numărul</b> se înmulțește cu 1000 (3 km = 3000 m); dacă urci, se împarte la 1000 (3000 m = 3 km). Pentru <b>arii</b> fiecare treaptă valorează 10⁶ (1 km² = 10⁶ m²), pentru <b>volume</b> 10⁹ (1 km³ = 10⁹ m³).</p>"
        },
        {
          label: "🧮 Metoda factorilor de conversie",
          html: "<p>Se înmulțește cu o fracție egală cu 1, scrisă astfel încât unitățile nedorite să se simplifice.<br>Exemplu: 54 km/h = 54 <u>km</u>/<u>h</u> × (1000 m / 1 <u>km</u>) × (1 <u>h</u> / 3600 s) = 54 000 / 3600 m/s = <b>15 m/s</b>.<br>Trebuie doar să verifici că la final rămân numai unitățile dorite: dacă nu, ai răsturnat o fracție.</p>"
        },
        {
          label: "🔢 Metoda notației științifice",
          html: "<p>Înlocuiește prefixul cu puterea lui 10: 45 μm = 45 × 10⁻⁶ m = 4,5 × 10⁻⁵ m. Cu notația științifică nu pierzi zerourile și poți compara ușor mărimi foarte diferite: numerele au două cifre, iar <b>exponentul</b> face treaba.</p>"
        },
        {
          label: "📏 Desen: ordine de mărime",
          html: "<p>Fiecare pas spre dreapta pe dreaptă înseamnă o putere a lui 10 în plus.</p>",
          svg: "<svg viewBox='0 0 600 200' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='200' fill='#fff7ed'/><line x1='40' y1='100' x2='560' y2='100' stroke='#9a3412' stroke-width='3'/><g fill='#ea580c'><circle cx='60' cy='100' r='8'/><circle cx='150' cy='100' r='8'/><circle cx='240' cy='100' r='8'/><circle cx='330' cy='100' r='8'/><circle cx='420' cy='100' r='8'/><circle cx='510' cy='100' r='8'/></g><g font-family='sans-serif' font-size='15' text-anchor='middle' fill='#7c2d12'><text x='60' y='80'>10⁻¹⁰</text><text x='150' y='80'>10⁻⁶</text><text x='240' y='80'>10⁻²</text><text x='330' y='80'>10²</text><text x='420' y='80'>10⁶</text><text x='510' y='80'>10¹⁰</text><text x='60' y='135'>atom</text><text x='150' y='135'>bacterie</text><text x='240' y='135'>furnică</text><text x='330' y='135'>câmp</text><text x='420' y='135'>Italia</text><text x='510' y='135'>Pământ-Lună x30</text></g></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta mărimilor și a măsurilor",
      nodes: [
        { id: "grandezza", label: "Mărime fizică", x: 50, y: 8, color: "#2563eb", html: "Proprietate măsurabilă a unui obiect sau a unui fenomen.", why: "Galilei susținea că cartea naturii este scrisă în limbaj matematic: pentru a studia un fenomen trebuie mai întâi să găsești ce se poate măsura. Fizica modernă se naște când se aleg mărimi măsurabile (timp, spațiu, masă) în locul unor calități vagi." },
        { id: "misura", label: "Măsura = număr × unitate", x: 18, y: 42, color: "#16a34a", html: "Comparație cu un etalon de aceeași natură, unitatea de măsură.", why: "O măsurare este o comparație: a spune că o masă are 2 m lungime înseamnă că metrul etalon încape de 2 ori în masă. Fără un etalon comun nu se pot compara rezultatele obținute de persoane diferite." },
        { id: "si", label: "Sistemul Internațional", x: 82, y: 42, color: "#f59e0b", html: "Șapte unități fundamentale folosite în toată lumea.", why: "SI provine din sistemul metric zecimal francez (1790-99) și din Convenția Metrului (1875). Din 2019 unitățile sunt definite prin constante fizice (c, h, e, k, N_A), deci sunt stabile și reproductibile oriunde." },
        { id: "derivate", label: "Mărimi derivate", x: 82, y: 78, color: "#8b5cf6", html: "Arie, volum, viteză, densitate, forță…", why: "Mărimile derivate provin din legile fizicii: viteza este raportul dintre spațiu și timp; forța (F = m·a) combină masa și accelerația. Unitățile lor se deduc din cele fundamentale." },
        { id: "potenze", label: "Puteri ale lui 10 și prefixe", x: 18, y: 78, color: "#ef4444", html: "Notație științifică, ordine de mărime, multipli și submultipli.", why: "Universul se întinde de la 10⁻¹⁵ m la 10²⁶ m: niciun sistem obișnuit de scriere nu face față. Puterile lui 10 sunt scara logaritmică prin care oamenii de știință se orientează între nucleul atomic și galaxii." },
        { id: "stima", label: "Estimări și verificări", x: 50, y: 78, color: "#64748b", html: "Analiza dimensională și ordinele de mărime pentru a verifica rezultatele.", why: "Enrico Fermi era faimos pentru estimările rapide («problemele Fermi»): un rezultat cu ordinul de mărime greșit este sigur incorect, deci estimarea este o verificare prețioasă." }
      ],
      edges: [["grandezza", "misura", "se exprimă prin"], ["misura", "si", "folosește unități din"], ["si", "derivate", "generează"], ["grandezza", "potenze", "se scrie cu"], ["potenze", "stima", "servesc pentru"], ["derivate", "stima", "se verifică prin"]]
    },
    {
      type: "quiz",
      title: "Mini-test: notația științifică",
      questions: [
        { type: "mc", q: "Cum se scrie 0,0045 în notație științifică?", options: ["4,5 × 10⁻³", "4,5 × 10³", "45 × 10⁻⁴", "0,45 × 10⁻²"], answer: 0, explain: "Se mută virgula cu 3 locuri spre dreapta: 4,5 × 10⁻³." },
        { type: "mc", q: "Care este ordinul de mărime al lui 7,5 × 10⁵?", options: ["10⁵", "10⁶", "10⁴", "10⁷"], answer: 1, explain: "Deoarece 7,5 ≥ 5, ordinul de mărime este 10⁶." },
        { type: "num", q: "Calculează (2 × 10⁴) × (3 × 10⁵) și dă exponentul lui 10 din rezultatul scris ca 6 × 10ⁿ.", answer: 9, tol: 0, explain: "6 × 10⁹: exponenții se adună, 4 + 5 = 9." }
      ]
    }
  ],
  glossary: [
    { t: "Mărime fizică", d: "Proprietate a unui corp sau a unui fenomen care poate fi măsurată." },
    { t: "Unitate de măsură", d: "Mărime etalon cu care se compară celelalte mărimi de același fel." },
    { t: "Sistemul Internațional (SI)", d: "Sistem de unități adoptat în toată lumea științifică, cu șapte mărimi fundamentale." },
    { t: "Mărime derivată", d: "Mărime obținută din cele fundamentale prin produse și rapoarte, precum viteza sau densitatea." },
    { t: "Prefix", d: "Parte inițială a unității care indică un multiplu sau un submultiplu (kilo-, mili-…)." },
    { t: "Notație științifică", d: "Scrierea unui număr sub forma a × 10ⁿ, cu 1 ≤ a < 10." },
    { t: "Ordin de mărime", d: "Cea mai apropiată putere a lui 10 de un număr." },
    { t: "Analiză dimensională", d: "Verificarea unei formule cu ajutorul unităților de măsură." },
    { t: "Densitate", d: "Raportul dintre masa și volumul unui corp (kg/m³)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "A măsura o mărime înseamnă:", options: ["A o estima din ochi", "A o compara cu un etalon de aceeași natură, unitatea de măsură", "A număra câte cifre are", "A o calcula cu o formulă"], answer: 1, explain: "O măsură este raportul dintre mărime și unitatea aleasă." },
      { type: "tf", q: "Sistemul Internațional are șapte mărimi fundamentale.", answer: true, explain: "Lungime, masă, timp, curent, temperatură, cantitate de substanță și intensitate luminoasă." },
      { type: "text", q: "Care este simbolul corect al unității de masă din SI?", answer: ["kg"], explain: "Kilogramul se scrie kg, fără punct și fără plural." },
      { type: "num", q: "Câți metri sunt 450 mm?", answer: 0.45, tol: 0.001, unit: "m", explain: "450 × 10⁻³ m = 0,45 m." },
      { type: "num", q: "Câți metri pe secundă sunt 108 km/h?", answer: 30, tol: 0.01, unit: "m/s", explain: "108 : 3,6 = 30 m/s." },
      { type: "mc", q: "Care unitate este corectă pentru densitate în SI?", options: ["kg·m", "kg/m³", "m/s", "kg/s"], answer: 1, explain: "Densitate = masă/volum, deci kg/m³." },
      { type: "mc", q: "Scrie 52 000 000 în notație științifică.", options: ["52 × 10⁶", "5,2 × 10⁷", "0,52 × 10⁸", "5,2 × 10⁶"], answer: 1, explain: "Virgula trebuie mutată cu 7 locuri: 5,2 × 10⁷." },
      { type: "mc", q: "Care este ordinul de mărime al lui 3 × 10⁻⁵?", options: ["10⁻⁴", "10⁻⁵", "10⁻⁶", "10⁵"], answer: 1, explain: "Deoarece 3 < 5, ordinul de mărime este 10⁻⁵." },
      { type: "tf", q: "1 m² este egal cu 100 cm².", answer: false, explain: "1 m² = (100 cm)² = 10 000 cm² = 10⁴ cm²." },
      { type: "order", q: "Ordonează de la cel mai mic la cel mai mare.", items: ["1 nm", "1 μm", "1 mm", "1 km"], explain: "nano 10⁻⁹ m < micro 10⁻⁶ m < mili 10⁻³ m < kilo 10³ m." }
    ]
  }
});

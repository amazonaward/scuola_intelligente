TOPIC('ro', {
  id: "l1-sci-moti-terra",
  title: "Mișcările Pământului și ale Lunii",
  intro: "Nu simțim nimic, și totuși chiar acum te rotești în jurul axei Pământului cu peste 1000 km/h (la latitudini medii) și călătorești în jurul Soarelui cu aproximativ 30 km pe secundă. De aceste două mișcări depind ziua și noaptea, anotimpurile, fusurile orare. Iar Luna, cu fazele, mareele și eclipsele ei, completează spectacolul. În această lecție descoperim <b>geometria cerului</b> și de ce este cald vara, chiar dacă vara Pământul este <i>mai departe</i> de Soare.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Rotația Pământului",
      html: `<p>Pământul se rotește în jurul propriei <b>axe</b> (dreapta care trece prin poli) de la <b>vest spre est</b> (în sens antiorar, privit de la Polul Nord). De aceea Soarele, Luna și stelele par să răsară la est și să apună la vest.</p>
<ul>
<li><b>Ziua siderală</b> (față de stele) durează <b>23 h 56 min 4 s</b>.</li>
<li><b>Ziua solară</b> (de la un amiază la următoarea) durează în medie <b>24 de ore</b>. Este puțin mai lungă pentru că, în timp ce se rotește, Pământul se deplasează și pe orbită și trebuie să se mai rotească aproximativ 4 minute ca să readucă Soarele în aceeași poziție.</li>
<li>Viteza unui punct de la suprafață depinde de latitudine: la ecuator este de circa <b>1670 km/h</b>, la București (circa 44° N) de circa 1200 km/h, la poli este nulă.</li>
</ul>
<p>Consecințele rotației:</p>
<ul>
<li><b>alternanța zilei și a nopții</b>;</li>
<li><b>turtirea polară</b> (Pământul este un geoid);</li>
<li><b>deviația corpurilor în mișcare</b> din cauza <b>forței Coriolis</b>: spre dreapta în emisfera nordică, spre stânga în cea sudică (importantă pentru vânturi și curenți, dar nu pentru scurgerea apei din chiuvetă, care depinde de alți factori);</li>
<li><b>mareele</b> se explică prin Lună și Soare, dar rotația le face să „alerge” pe planetă.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Pendulul lui Foucault: dovada că Pământul se rotește",
      html: `<p>În 1851, fizicianul francez <b>Léon Foucault</b> a atârnat de bolta Panthéonului din Paris o sferă de 28 kg, cu un cablu de 67 de metri. Pendulul oscila, iar planul de oscilație se rotea încet: podeaua, adică Pământul, se rotea sub el. La Paris, planul face o rotație completă în circa 32 de ore; la poli în 24 de ore; la ecuator nu se rotește. A fost prima demonstrație directă, în laborator, a rotației Pământului.</p>`
    },
    {
      type: "text",
      title: "Revoluția și înclinarea axei",
      html: `<p>Pământul parcurge o orbită eliptică aproape circulară în jurul Soarelui, în același sens cu rotația (antiorar, privit de la Polul Nord). <b>Anul sideral</b> durează <b>365,256 zile</b>; <b>anul tropic</b> (de la echinocțiu la echinocțiu, pe care se bazează calendarul) circa <b>365,242 zile</b>. De aici provin <b>anii bisecți</b> (calendarul gregorian, 1582): la fiecare 4 ani o zi în plus, cu excepția anilor seculari care nu se împart la 400 (1900 nu a fost bisect, 2000 a fost).</p>
<p>Distanța Pământ–Soare variază puțin: <b>periheliul</b> circa 147,1 milioane km (începutul lui ianuarie), <b>afeliul</b> circa 152,1 milioane km (începutul lui iulie). Diferența este de numai 3%: <b>nu distanța provoacă anotimpurile</b>.</p>
<p>Adevărata cauză este <b>înclinarea axei</b> Pământului: axa formează un unghi de aproximativ <b>23,4°</b> (23° 27') cu perpendiculara pe <b>planul orbitei</b> (numit <b>ecliptică</b>) și, pe parcursul anului, <b>își păstrează aceeași direcție în spațiu</b> (arată aproximativ spre Steaua Polară). De aceea, jumătate din an este înclinată spre Soare emisfera nordică, iar cealaltă jumătate emisfera sudică.</p>`
    },
    {
      type: "svg",
      title: "Anotimpurile: de ce se schimbă",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#0f172a"/>
<circle cx="320" cy="160" r="26" fill="#facc15"/><text x="320" y="205" font-size="14" text-anchor="middle" fill="#fde68a">Soare</text>
<ellipse cx="320" cy="160" rx="240" ry="105" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
<g>
<circle cx="80" cy="160" r="20" fill="#3b82f6"/><line x1="68" y1="190" x2="92" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="80" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21 iunie</text><text x="80" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">solstițiul de vară N</text>
<circle cx="560" cy="160" r="20" fill="#3b82f6"/><line x1="548" y1="190" x2="572" y2="130" stroke="#f8fafc" stroke-width="3"/><text x="560" y="228" font-size="14" text-anchor="middle" fill="#e2e8f0">21 decembrie</text><text x="560" y="246" font-size="14" text-anchor="middle" fill="#93c5fd">solstițiul de iarnă N</text>
<circle cx="320" cy="265" r="20" fill="#3b82f6"/><line x1="308" y1="295" x2="332" y2="235" stroke="#f8fafc" stroke-width="3"/><text x="320" y="312" font-size="14" text-anchor="middle" fill="#e2e8f0">echinocțiu</text>
<circle cx="320" cy="55" r="20" fill="#3b82f6"/><line x1="308" y1="85" x2="332" y2="25" stroke="#f8fafc" stroke-width="3"/><text x="320" y="20" font-size="14" text-anchor="middle" fill="#e2e8f0">echinocțiu</text>
</g>
<text x="140" y="60" font-size="14" fill="#93c5fd">axa mereu paralelă cu ea însăși</text>
</svg>`,
      caption: "Axa (linia albă) arată mereu în aceeași direcție: în iunie emisfera nordică este înclinată spre Soare, în decembrie în direcția opusă."
    },
    {
      type: "text",
      title: "Solstiții, echinocții și anotimpuri",
      html: `<p>Când emisfera nordică este înclinată spre Soare, razele cad <b>mai vertical</b>, iar Soarele rămâne pe cer <b>mai mult timp</b>: energia pe metru pătrat este mai mare și este mai mult timp pentru încălzire. Este vară. După șase luni se întâmplă invers. Anotimpurile din emisfera sudică sunt întotdeauna opuse celor din emisfera nordică (de Crăciun, în Australia este vară).</p>
<table>
<tr><th>Data (aproximativ)</th><th>Eveniment</th><th>Ce se întâmplă (emisfera nordică)</th></tr>
<tr><td>20–21 martie</td><td><b>Echinocțiul de primăvară</b></td><td>ziua și noaptea sunt egale (12 h) peste tot; Soarele este la zenit la ecuator</td></tr>
<tr><td>20–21 iunie</td><td><b>Solstițiul de vară</b></td><td>cea mai lungă zi; Soarele la zenit pe Tropicul Racului (23,4° N)</td></tr>
<tr><td>22–23 septembrie</td><td><b>Echinocțiul de toamnă</b></td><td>ziua și noaptea sunt egale</td></tr>
<tr><td>21–22 decembrie</td><td><b>Solstițiul de iarnă</b></td><td>cea mai scurtă zi; Soarele la zenit pe Tropicul Capricornului (23,4° S)</td></tr>
</table>
<p><b>Soarele la amiază</b> are înălțimea maximă deasupra orizontului egală cu <b>90° − latitudine + declinație</b>. La București (44° N), pe 21 iunie este 90 − 44 + 23,4 = <b>69,4°</b>; pe 21 decembrie este 90 − 44 − 23,4 = <b>22,6°</b>.</p>
<p><b>Zonele astronomice</b>: zona torida între tropice (±23,4°); zonele temperate între tropice și cercurile polare; zonele glaciale de la <b>cercurile polare</b> (±66,6°) până la poli, unde vara apare <b>soarele de la miezul nopții</b>, iar iarna noaptea polară.</p>`
    },
    {
      type: "example",
      title: "Înălțimea Soarelui la Milano",
      html: `<p>Milano are latitudinea de aproximativ <b>45,5° N</b>. Cât de sus este Soarele la amiază la echinocții și la solstiții?</p>
<ul>
<li>Echinocțiu (declinație 0°): 90 − 45,5 = <b>44,5°</b></li>
<li>Solstițiul de vară: 90 − 45,5 + 23,4 = <b>67,9°</b></li>
<li>Solstițiul de iarnă: 90 − 45,5 − 23,4 = <b>21,1°</b></li>
</ul>
<p>Umbra unui par înalt de 2 m la amiază are lungimea 2 / tan(21,1°) ≈ 5,2 m în decembrie, dar numai 2 / tan(67,9°) ≈ 0,8 m în iunie. Cu această idee ceasurile solare marchează anotimpurile.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: anotimpuri și rotație",
      questions: [
        { type: "mc", q: "Cauza anotimpurilor este…", options: ["variația distanței față de Soare", "înclinarea axei Pământului", "rotația în jurul propriei axe"], answer: 1, explain: "Axa înclinată cu 23,4° face să varieze unghiul cu care sosesc razele și durata zilei." },
        { type: "tf", q: "În decembrie Pământul este mai aproape de Soare decât în iunie.", answer: true, explain: "Periheliul este în ianuarie: iarna boreală are loc când Pământul este mai aproape de Soare." },
        { type: "num", q: "La ce înălțime maximă ajunge Soarele deasupra orizontului într-un loc aflat la 40° N, la echinocțiu?", answer: 50, unit: "°", explain: "90 − 40 = 50°." }
      ]
    },
    {
      type: "3d",
      title: "Globul și paralelele importante",
      scene: "globe",
      options: { points: [
        { lat: 0, lon: 0, label: "Ecuator / Greenwich", color: "#ef4444" },
        { lat: 23.4, lon: 30, label: "Tropicul Racului", color: "#f97316" },
        { lat: -23.4, lon: 30, label: "Tropicul Capricornului", color: "#f97316" },
        { lat: 66.6, lon: 30, label: "Cercul polar arctic", color: "#3b82f6" },
        { lat: 41.9, lon: 12.5, label: "Roma", color: "#16a34a" }
      ], routes: [] },
      caption: "Rotește globul: tropicele marchează limita până la care Soarele poate ajunge la zenit; cercurile polare, limita soarelui de la miezul nopții."
    },
    {
      type: "text",
      title: "Fusurile orare",
      html: `<p>Pământul se rotește cu 360° în 24 de ore, adică <b>15° pe oră</b> (1° la fiecare 4 minute). Soarele culminează (este „amiază”) la momente diferite în funcție de longitudine: Roma (12,5° E) și Torino (7,7° E) diferă cu aproximativ 4,8°, deci amiaza adevărată ajunge la Torino cu circa 19 minute mai târziu decât la Roma. În secolul al XIX-lea fiecare oraș avea ora lui, iar orarele trenurilor deveneau imposibile: în 1884, la <b>Conferința internațională a meridianului</b> de la Washington, s-a ales ca origine <b>meridianul Greenwich</b> (longitudine 0°) și globul a fost împărțit în <b>24 de fusuri</b> de 15°.</p>
<ul>
<li>Deplasându-te spre <b>est</b>, ora <b>înaintează</b> (se câștigă ore), spre <b>vest</b> <b>rămâne în urmă</b>.</li>
<li>România se află în fusul Europei de Est (<b>EET = UTC+2</b>, meridianul 30° E); vara <b>ora de vară</b> o duce la UTC+3. Italia se află în fusul Europei Centrale (<b>CET = UTC+1</b>).</li>
<li><b>Linia de schimbare a datei</b> (circa 180° longitudine, în Pacific) este locul unde se trece de la o zi la următoarea: mergând spre vest se <b>adaugă</b> o zi.</li>
</ul>
<p>Multe țări folosesc fusuri care nu sunt strict centrate pe meridiane: China, care acoperă cinci fusuri geografice, folosește o singură oră (UTC+8).</p>`
    },
    {
      type: "example",
      title: "Cât este ceasul la New York?",
      html: `<p>La Roma este <b>18:00</b> (CET, UTC+1). New York este la UTC−5 (ora standard). Cât este ceasul la New York?</p>
<ol>
<li>Diferența dintre fusuri: +1 − (−5) = 6 ore.</li>
<li>New York este la vest, deci ora este <b>mai mică</b>: 18:00 − 6 h = <b>12:00</b>.</li>
</ol>
<p>Pentru Tokyo (UTC+9): diferența 9 − 1 = 8 ore, la est: 18:00 + 8 = <b>02:00 în ziua următoare</b>.</p>`
    },
    {
      type: "text",
      title: "Luna și mișcările ei",
      html: `<p>Luna este singurul nostru satelit natural: diametrul de 3474 km (aproximativ un sfert din cel al Pământului), distanța medie <b>384 400 km</b>. Are trei mișcări:</p>
<ul>
<li><b>Rotația</b> în jurul propriei axe în 27,3 zile;</li>
<li><b>Revoluția</b> în jurul Pământului în 27,3 zile (<b>luna siderală</b>);</li>
<li><b>Translația</b> împreună cu Pământul în jurul Soarelui.</li>
</ul>
<p>Pentru că rotația și revoluția durează la fel de mult (<b>rotație sincronă</b>, datorată forțelor mareice), Luna ne arată <b>mereu aceeași față</b>. Cealaltă față (nu „întunecată”, ci „ascunsă”) a fost fotografiată pentru prima dată de sonda sovietică <b>Luna 3</b> în 1959.</p>
<p><b>Fazele Lunii</b> depind de poziția relativă a Soarelui, a Pământului și a Lunii: Luna este mereu iluminată pe jumătate de Soare, dar noi vedem o parte diferită din ea. Ciclul (<b>luna sinodică</b> sau lunația) durează <b>29,53 zile</b>, mai mult decât luna siderală, pentru că între timp Pământul s-a deplasat pe orbită, iar Luna trebuie să „alerge” după Soare ca să se alinieze din nou.</p>
<table>
<tr><th>Faza</th><th>Poziția</th><th>Aspectul</th></tr>
<tr><td><b>Luna nouă</b></td><td>Luna între Pământ și Soare</td><td>invizibilă</td></tr>
<tr><td>Primul pătrar</td><td>la 90° de Soare</td><td>jumătatea dreaptă iluminată (emisfera nordică), răsare la amiază</td></tr>
<tr><td><b>Luna plină</b></td><td>Pământul între Soare și Lună</td><td>tot discul; răsare la apusul Soarelui</td></tr>
<tr><td>Ultimul pătrar</td><td>la 90° de Soare</td><td>jumătatea stângă iluminată; răsare la miezul nopții</td></tr>
</table>
<p>Regula „cornului” (emisfera nordică): dacă Luna are forma unei litere D (<b>partea rotunjită spre vest</b>, adică spre dreapta) este în <b>creștere</b>; dacă are forma unei litere C (partea rotunjită spre est) este în <b>descreștere</b>.</p>`
    },
    {
      type: "svg",
      title: "Fazele Lunii",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Fazele văzute de pe Pământ (emisfera nordică), pe parcursul unei luni</text>
<g>
<circle cx="70" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
<circle cx="190" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M190 74 A36 36 0 0 1 190 146 A18 36 0 0 0 190 74 Z" fill="#fde68a"/>
<circle cx="310" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M310 74 A36 36 0 0 1 310 146 Z" fill="#fde68a"/>
<circle cx="430" cy="110" r="36" fill="#1e293b" stroke="#64748b" stroke-width="2"/><path d="M430 74 A36 36 0 0 1 430 146 A18 36 0 0 1 430 74 Z" fill="#fde68a"/>
<circle cx="550" cy="110" r="36" fill="#fde68a" stroke="#64748b" stroke-width="2"/>
</g>
<g font-size="14" fill="#e2e8f0" text-anchor="middle">
<text x="70" y="175">Nouă</text><text x="190" y="175">Crescătoare</text><text x="310" y="175">Primul pătrar</text><text x="430" y="175">Giboasă</text><text x="550" y="175">Plină</text>
<text x="70" y="195" fill="#94a3b8">ziua 0</text><text x="190" y="195" fill="#94a3b8">~3-4</text><text x="310" y="195" fill="#94a3b8">~7,4</text><text x="430" y="195" fill="#94a3b8">~11</text><text x="550" y="195" fill="#94a3b8">~14,8</text>
</g>
<text x="320" y="250" font-size="15" text-anchor="middle" fill="#cbd5e1">Apoi Luna descrește: giboasă, ultimul pătrar (ziua ~22), descrescătoare și din nou nouă (29,5)</text>
<text x="320" y="275" font-size="14" text-anchor="middle" fill="#94a3b8">Partea iluminată este mereu spre Soare</text>
</svg>`,
      caption: "Luna nu își schimbă forma: se schimbă porțiunea din jumătatea ei iluminată care este întoarsă spre noi."
    },
    {
      type: "text",
      title: "Eclipsele",
      html: `<p>O <b>eclipsă</b> are loc atunci când Soarele, Pământul și Luna sunt aliniate.</p>
<ul>
<li><b>Eclipsa de Soare</b>: Luna se interpune între Pământ și Soare, la <b>Luna nouă</b>. Umbra ei cade pe Pământ, iar cine se află în zona de umbră (o fâșie lată cel mult de circa 270 km) vede eclipsa <b>totală</b>, cu durata maximă de circa 7 minute și jumătate. În afară, în <b>penumbră</b>, eclipsa este parțială. Este o coincidență norocoasă că Soarele este de aproximativ 400 de ori mai mare decât Luna și de aproximativ 400 de ori mai departe: cele două discuri par aproape egale pe cer. Dacă Luna se află în punctul cel mai îndepărtat, eclipsa este <b>inelară</b>.</li>
<li><b>Eclipsa de Lună</b>: Pământul se interpune, la <b>Luna plină</b>, iar Luna intră în umbra Pământului. Se vede din toată jumătatea de Pământ în care este noapte și poate dura aproape două ore în totalitate; Luna nu dispare, ci devine <b>roșiatică</b>, pentru că atmosfera Pământului abate spre Lună lumina roșie a Soarelui (ca la apus).</li>
</ul>
<p>De ce nu are loc o eclipsă la fiecare Lună nouă și plină? Pentru că orbita Lunii este înclinată cu aproximativ <b>5,1°</b> față de ecliptică: de obicei Luna trece puțin deasupra sau dedesubtul Soarelui ori al umbrei Pământului. O eclipsă are loc doar dacă Luna este aproape de <b>noduri</b>, cele două puncte în care orbita ei străbate planul eclipticii. În fiecare an au loc între 4 și 7 eclipse (de Soare și de Lună la un loc).</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege fazele Lunii",
      intro: "Fazele sunt o confuzie clasică: umbra Pământului nu are nicio legătură cu ele. Încearcă să le recreezi.",
      tabs: [
        {
          label: "💡 Experimentul cu lampa",
          html: `<p>Într-o cameră întunecată, aprinde o lampă (Soarele) și ține în mână o minge (Luna), în timp ce capul tău este Pământul. Rotindu-te pe loc cu mingea întinsă în față, vei vedea mingea iluminată ca în toate fazele: plină când este opusă lămpii, nouă când este între tine și lampă. Umbra capului tău cade pe minge doar într-o poziție precisă: eclipsa de Lună.</p>`
        },
        {
          label: "🧭 Când răsare și când apune",
          html: `<p>O modalitate de a recunoaște faza după oră: Luna <b>nouă</b> răsare și apune odată cu Soarele; cea <b>plină</b> răsare când Soarele apune (și invers); <b>primul pătrar</b> răsare la amiază și apune la miezul nopții; <b>ultimul pătrar</b> răsare la miezul nopții și apune la amiază. În fiecare zi Luna răsare în medie cu circa 50 de minute mai târziu decât în ziua precedentă, pentru că se deplasează cu aproximativ 12–13° spre est pe traseul ei.</p>`
        },
        {
          label: "🌊 De ce există mareele?",
          html: `<p>Gravitația lunară atrage apa din partea îndreptată spre Lună și, prin efect diferențial, generează o umflătură și pe partea opusă: două maree înalte și două joase pe zi (la fiecare circa 12 ore și 25 de minute). La Luna <b>nouă</b> și <b>plină</b>, Soarele și Luna se adună: maree mai ample, <b>mareele de sizigii</b> (maree vii). La pătrare se contrazic: maree mai slabe, <b>mareele de cuadratură</b>. În Marea Mediterană mareele sunt mici (câțiva decimetri, dar la Veneția până la aproximativ 1 m), în golful Fundy din Canada depășesc 15 m.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Luna se îndepărtează",
      html: `<p>Oglinzile lăsate pe Lună de astronauții misiunilor Apollo (1969–1972) permit să se măsoare cu laser distanța Pământ–Lună cu o precizie de milimetri. Rezultat: Luna se îndepărtează cu aproximativ <b>3,8 cm pe an</b>, în timp ce rotația Pământului încetinește. Acum un miliard de ani zilele durau circa 19–20 de ore, iar peste multe miliarde de ani o eclipsă totală de Soare nu va mai fi posibilă, pentru că Luna va părea prea mică să acopere discul solar. Se crede că Luna s-a format acum circa 4,5 miliarde de ani, în urma impactului dintre proto-Pământ și un corp cât Marte (<b>Theia</b>).</p>`
    },
    {
      type: "conceptMap",
      title: "Harta mișcărilor: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "rot", label: "Rotația", x: 18, y: 8, color: "#3b82f6", html: "Rotația Pământului în jurul propriei axe în 24 h.", why: "A fost propusă de <b>Heraclide din Pont</b> (secolul al IV-lea î.Hr.) și susținută de Copernic; demonstrată de <b>Foucault</b> în 1851. Produce ziua și noaptea, forța Coriolis și turtirea la poli." },
        { id: "riv", label: "Revoluția", x: 82, y: 8, color: "#22c55e", html: "Rotația în jurul Soarelui în circa 365,25 zile.", why: "Odată cu <b>Copernic</b> (1543) și Galilei, Pământul și-a pierdut nemișcarea. Confirmarea a venit din <b>paralaxa stelară</b> (Bessel, 1838) și din aberația luminii (Bradley, 1729)." },
        { id: "asse", label: "Axa înclinată (23,4°)", x: 50, y: 32, color: "#f97316", html: "Axa nu este perpendiculară pe orbită.", why: "Conform ipotezei celei mai acceptate, înclinarea se datorează impactului care a format Luna acum circa 4,5 miliarde de ani. Luna are rol de stabilizator: fără ea, unghiul ar putea varia mult, cu efecte dramatice asupra climei." },
        { id: "stag", label: "Anotimpurile", x: 82, y: 40, color: "#ef4444", html: "Schimbarea unghiului razelor și a duratei zilei.", why: "O convingere răspândită, dar greșită, este că ar depinde de distanța față de Soare: dar Pământul este mai aproape în ianuarie, iar emisfera sudică are vară de Crăciun." },
        { id: "fusi", label: "Fusurile orare", x: 18, y: 44, color: "#eab308", html: "24 de fusuri de 15°.", why: "Au apărut odată cu căile ferate și telegraful: 1884, Conferința de la Washington, cu meridianul Greenwich ca origine." },
        { id: "luna", label: "Mișcările Lunii", x: 50, y: 62, color: "#a855f7", html: "Rotație sincronă, revoluție în 27,3 zile.", why: "Rotația sincronă se datorează forțelor mareice pe care Pământul le-a exercitat asupra Lunii de-a lungul a miliarde de ani, frânându-i rotația până a ajuns să coincidă cu revoluția." },
        { id: "fasi", label: "Fazele Lunii", x: 18, y: 82, color: "#06b6d4", html: "Ciclu de 29,53 zile.", why: "Încă <b>Aristarh din Samos</b> (secolul al III-lea î.Hr.) a dedus din faza de jumătate de Lună distanța relativă a Soarelui și a Lunii, cu o metodă geometrică corectă, dar cu măsurători greșite." },
        { id: "ecl", label: "Eclipsele", x: 82, y: 82, color: "#14b8a6", html: "Alinierea Soare–Pământ–Lună.", why: "Babilonienii au descoperit <b>ciclul Saros</b> (circa 18 ani și 11 zile), după care eclipsele se repetă aproape identic, și îl foloseau ca să le prevadă. Eclipsele nu au loc lunar pentru că orbita Lunii este înclinată cu 5,1°." }
      ],
      edges: [
        ["rot", "fusi", "dă naștere la"],
        ["riv", "stag", "cu axa înclinată produce"],
        ["asse", "stag", "provoacă"],
        ["luna", "fasi", "dă naștere la"],
        ["luna", "ecl", "când e aliniată produce"],
        ["rot", "luna", "se rotește ca"],
        ["riv", "asse", "păstrează"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: Luna",
      questions: [
        { type: "mc", q: "De ce vedem mereu aceeași față a Lunii?", options: ["Pentru că Luna nu se rotește", "Pentru că rotația și revoluția durează la fel de mult", "Pentru că cealaltă față este mereu în umbră"], answer: 1, explain: "Este rotația sincronă. Cealaltă față primește la fel de multă lumină ca prima." },
        { type: "mc", q: "În ce fază a Lunii poate avea loc o eclipsă de Soare?", options: ["Luna plină", "Luna nouă", "Primul pătrar"], answer: 1, explain: "Luna trebuie să fie între Pământ și Soare, deci ne arată partea neiluminată." },
        { type: "num", q: "La Roma este ora 12:00 (UTC+1). Cât este ceasul la Londra (UTC+0), în ore?", answer: 11, unit: "h", explain: "Londra este la vest: ora este cu o oră mai mică." }
      ]
    }
  ],
  glossary: [
    { t: "Rotația", d: "Mișcarea Pământului în jurul propriei axe, în 24 de ore." },
    { t: "Revoluția", d: "Mișcarea Pământului în jurul Soarelui, în circa 365,25 zile." },
    { t: "Ecliptica", d: "Planul orbitei Pământului în jurul Soarelui." },
    { t: "Solstițiul", d: "Momentul în care Soarele atinge declinația maximă nordică sau sudică: ziua cea mai lungă sau cea mai scurtă." },
    { t: "Echinocțiul", d: "Momentul în care ziua și noaptea au aceeași durată." },
    { t: "Fus orar", d: "Fiecare dintre cele 24 de fâșii de 15° de longitudine cu aceeași oră." },
    { t: "Luna sinodică", d: "Intervalul dintre două faze identice ale Lunii: 29,53 zile." },
    { t: "Rotație sincronă", d: "Situația în care un corp se rotește într-un timp egal cu cel al revoluției sale." },
    { t: "Eclipsa de Soare", d: "Luna acoperă Soarele privit de pe Pământ (Luna nouă)." },
    { t: "Eclipsa de Lună", d: "Luna trece prin umbra Pământului (Luna plină)." },
    { t: "Mareele", d: "Oscilații ale nivelului mării datorate atracției Lunii și a Soarelui." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cât durează ziua solară medie?", options: ["23 h 56 min", "24 h", "27 de zile"], answer: 1, explain: "Ziua solară medie durează 24 de ore (ziua siderală 23 h 56 min)." },
      { type: "tf", q: "Anotimpurile se datorează distanței Pământului față de Soare.", answer: false, explain: "Depind de înclinarea axei Pământului." },
      { type: "mc", q: "Ce eveniment are loc pe 21 iunie în emisfera nordică?", options: ["Echinocțiul de primăvară", "Solstițiul de vară", "Echinocțiul de toamnă"], answer: 1, explain: "Cea mai lungă zi din an." },
      { type: "num", q: "Care este înălțimea maximă a Soarelui la amiază, la solstițiul de vară, la 45° N? (declinația 23,4°)", answer: 68.4, tol: 0.2, unit: "°", explain: "90 − 45 + 23,4 = 68,4°." },
      { type: "num", q: "În câte minute se rotește Pământul cu 1° de longitudine?", answer: 4, unit: "min", explain: "360° în 24 de ore: 1° la fiecare 4 minute." },
      { type: "mc", q: "De ce ne arată Luna mereu aceeași față?", options: ["Rotație sincronă", "Luna stă pe loc", "Mareele o opresc"], answer: 0, explain: "Rotația și revoluția durează amândouă circa 27,3 zile." },
      { type: "tf", q: "O eclipsă de Lună are loc la Luna plină.", answer: true, explain: "Pământul este între Soare și Lună, iar Luna intră în conul de umbră." },
      { type: "mc", q: "De ce nu are loc o eclipsă la fiecare Lună nouă?", options: ["Orbita Lunii este înclinată cu circa 5° față de ecliptică", "Luna este prea mică", "Pământul se rotește"], answer: 0, explain: "De obicei Luna trece deasupra sau dedesubtul dreptei Soare–Pământ." },
      { type: "order", q: "Pune în ordine fazele Lunii după Luna nouă.", items: ["Luna crescătoare", "Primul pătrar", "Luna plină", "Ultimul pătrar"], explain: "Ciclul complet durează 29,5 zile." },
      { type: "text", q: "Care fizician francez a demonstrat în 1851 rotația Pământului cu un pendul?", answer: ["foucault", "leon foucault", "léon foucault"], explain: "Léon Foucault, la Panthéon, în Paris." }
    ]
  }
});

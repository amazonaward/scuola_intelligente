TOPIC('ro', {
  id: "l1-fis-vettori-forze",
  title: "Vectori și forțe",
  intro: "Dacă îți spun «mergi 5 metri», nu ajunge ca să ajungi într-un punct precis: trebuie să-ți spun și <b>în ce direcție</b> și <b>în ce sens</b>. Unele mărimi fizice, precum <b>forța</b>, au nevoie de aceste informații și se descriu cu ajutorul <b>vectorilor</b>. În această lecție învățăm să adunăm vectori și să cunoaștem trei forțe fundamentale ale mecanicii: <b>greutatea</b>, <b>forța elastică</b> (legea lui Hooke) și <b>frecarea</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Mărimi scalare și vectoriale",
      html: `<p>Mărimile fizice se împart în două mari familii:</p>
<ul>
<li><b>Mărimi scalare</b>: sunt descrise de un <b>număr cu unitatea de măsură</b>. Exemple: masa (3 kg), timpul (5 s), temperatura (20 °C), energia, volumul.</li>
<li><b>Mărimi vectoriale</b>: au nevoie de un <b>modul</b> (cât valorează), o <b>direcție</b> (dreapta pe care acționează) și un <b>sens</b> (într-o parte sau în alta), iar uneori și de un <b>punct de aplicație</b>. Exemple: deplasarea, viteza, accelerația, <b>forța</b>.</li>
</ul>
<p>Un <b>vector</b> se reprezintă printr-o <b>săgeată</b>: lungimea este proporțională cu modulul, dreapta pe care se află este direcția, vârful indică sensul. Se notează cu o literă cu săgeată deasupra (<b>v⃗</b>, <b>F⃗</b>); modulul său se scrie v sau |v⃗|.</p>
<p>Doi vectori sunt <b>egali</b> dacă au același modul, aceeași direcție și același sens, chiar dacă au puncte de aplicație diferite. Vectorul <b>opus</b> lui v⃗ are același modul și aceeași direcție, dar sens contrar (−v⃗).</p>`
    },
    {
      type: "widget",
      title: "Scalar sau vector?",
      widget: "classify",
      options: { groups: ["Scalar", "Vector"], items: [
        ["Masă", 0],
        ["Forță", 1],
        ["Timp", 0],
        ["Viteză", 1],
        ["Temperatură", 0],
        ["Deplasare", 1],
        ["Volum", 0],
        ["Accelerație", 1]
      ] },
      caption: "Dacă trebuie să știm și «în ce direcție și în ce sens», este un vector."
    },
    {
      type: "text",
      title: "Adunarea vectorilor",
      html: `<p>A aduna doi vectori înseamnă a găsi efectul <b>total</b> (<b>vectorul rezultant</b>). Nu se adună pur și simplu modulele!</p>
<p><b>Metoda poligonului (vârf-coadă).</b> Se desenează primul vector; din vârful lui se desenează al doilea; vectorul sumă merge de la originea primului la vârful celui de-al doilea.</p>
<p><b>Metoda paralelogramului.</b> Se desenează cei doi vectori cu aceeași origine și se completează paralelogramul: <b>diagonala</b> care pleacă din origine este suma.</p>
<p><b>Cazuri particulare</b> (cele mai importante în clasele de început):</p>
<table>
<tr><th>Situația</th><th>Modulul sumei</th></tr>
<tr><td>Aceeași direcție și același sens</td><td>se <b>adună</b> modulele: R = a + b</td></tr>
<tr><td>Aceeași direcție, sensuri opuse</td><td>se <b>scad</b> modulele: R = |a − b|, în sensul celui mai mare</td></tr>
<tr><td>Direcții perpendiculare</td><td><b>teorema lui Pitagora</b>: R = √(a² + b²)</td></tr>
</table>
<p><b>Diferența</b> a⃗ − b⃗ se calculează adunând la a⃗ opusul lui b⃗. Produsul unui vector cu un <b>număr</b> k îi schimbă modulul (înmulțit cu |k|) și, dacă k este negativ, și sensul.</p>`
    },
    {
      type: "svg",
      title: "Suma a doi vectori",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="aR" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="aB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="aG" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<text x="160" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Vârf-coadă</text>
<line x1="40" y1="230" x2="180" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="180" y1="230" x2="250" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="40" y1="230" x2="250" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="110" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="235" y="190" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="120" y="160" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
<text x="480" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Paralelogram</text>
<line x1="360" y1="230" x2="500" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="360" y1="230" x2="430" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="500" y1="230" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="430" y1="130" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="360" y1="230" x2="570" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="430" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="385" y="175" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="480" y="165" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
</g>
</svg>`,
      caption: "Cele două metode dau același rezultat: vectorul sumă este diagonala paralelogramului."
    },
    {
      type: "example",
      title: "Tragerea frânghiei și vaporașul pe râu",
      html: `<p><b>Tragerea frânghiei.</b> Echipa A trage spre stânga cu 800 N, echipa B spre dreapta cu 650 N. Aceeași direcție, sensuri opuse: rezultanta = 800 − 650 = <b>150 N spre stânga</b>. Frânghia se mișcă spre A.</p>
<p><b>Vaporașul.</b> Un vaporaș se îndreaptă cu viteza de 4,0 m/s <b>perpendicular</b> pe malul unui râu care curge cu 3,0 m/s. Viteza față de mal este: √(4² + 3²) = √25 = <b>5,0 m/s</b>, înclinată spre aval. Vaporașul ajunge pe celălalt mal mai în aval față de punctul din care a plecat.</p>
<p>Dacă, în schimb, cei doi vectori ar fi paraleli și de același sens, ai avea 4 + 3 = 7 m/s: modulul sumei depinde de unghiul dintre vectori.</p>`
    },
    {
      type: "remember",
      title: "Componentele unui vector",
      html: `<p>Un vector poate fi și <b>descompus</b> în doi vectori perpendiculari (<b>componentele</b>), de obicei de-a lungul axelor x și y. Componentele au modulele v<sub>x</sub> = v · cos θ și v<sub>y</sub> = v · sin θ, unde θ este unghiul cu axa x (trigonometria o vei studia mai bine mai târziu). Descompunerea este operația inversă adunării și permite adunarea mai multor vectori: se adună separat componentele x și componentele y, apoi se recompune cu Pitagora.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: vectori",
      questions: [
        { type: "num", q: "Două forțe perpendiculare de 6 N și 8 N acționează asupra aceluiași punct. Cât este rezultanta?", answer: 10, tol: 0, unit: "N", explain: "√(6² + 8²) = √100 = 10 N." },
        { type: "num", q: "Două forțe de 15 N și 9 N acționează pe aceeași dreaptă, în sensuri opuse. Cât este rezultanta?", answer: 6, tol: 0, unit: "N", explain: "15 − 9 = 6 N, în sensul forței mai mari." },
        { type: "tf", q: "Suma a doi vectori are întotdeauna ca modul suma modulelor lor.", answer: false, explain: "Se întâmplă doar dacă au aceeași direcție și același sens." }
      ]
    },
    {
      type: "text",
      title: "Ce este o forță",
      html: `<p>O <b>forță</b> este o mărime vectorială care descrie interacțiunea dintre corpuri. Poate produce două efecte:</p>
<ul>
<li><b>deformarea</b> unui corp (un arc care se alungește, o bilă de lut care se turtește);</li>
<li><b>schimbarea stării de mișcare</b> a unui corp: punerea lui în mișcare, oprirea lui, schimbarea vitezei sau a direcției (o minge lovită cu piciorul).</li>
</ul>
<p>Unitatea de măsură în Sistemul Internațional este <b>newtonul</b> (N), în onoarea lui Isaac Newton. Un newton este aproximativ greutatea unui măr de 100 g. Instrumentul pentru măsurarea forțelor este <b>dinamometrul</b>, bazat pe alungirea unui arc.</p>
<p>Forțele se împart în <b>forțe de contact</b> (împingerea cu mâna, frecarea, forța elastică) și <b>forțe la distanță</b> (greutatea, forța magnetică, forța electrică).</p>`
    },
    {
      type: "text",
      title: "Greutatea",
      html: `<p><b>Greutatea</b> este forța cu care o planetă atrage un corp spre centrul ei. Se calculează cu:</p>
<p style="text-align:center"><b>G = m · g</b></p>
<p>unde <b>m</b> este masa (kg) și <b>g</b> <b>accelerația gravitațională</b>, care la suprafața Pământului are în medie valoarea <b>9,8 m/s²</b> (mai exact 9,81 la latitudini medii). Greutatea este un <b>vector</b>: direcție verticală, sens în jos (spre centrul Pământului), punct de aplicație în centrul de greutate.</p>
<p><b>Masa și greutatea nu sunt același lucru:</b></p>
<table>
<tr><th></th><th>Masa</th><th>Greutatea</th></tr>
<tr><td>Ce este</td><td>cantitate de materie, inerție</td><td>forță de atracție gravitațională</td></tr>
<tr><td>Unitate</td><td>kg</td><td>N</td></tr>
<tr><td>Tip</td><td>scalară</td><td>vectorială</td></tr>
<tr><td>Depinde de loc?</td><td>nu</td><td>da (depinde de g)</td></tr>
<tr><td>Instrument</td><td>balanță cu brațe</td><td>dinamometru</td></tr>
</table>
<p>Valori ale lui g: Pământ 9,8 m/s²; Lună ≈ 1,6 m/s²; Marte ≈ 3,7 m/s²; Jupiter ≈ 25 m/s². O persoană de 60 kg cântărește aproximativ 588 N pe Pământ, 97 N pe Lună. <b>Masa</b> ei rămâne 60 kg oriunde.</p>`
    },
    {
      type: "widget",
      title: "Masa și greutatea în Sistemul Solar",
      widget: "flashcards",
      options: { cards: [
        { front: "🌍 Pământ, 60 kg", back: "g = 9,8 m/s² → G ≈ 588 N" },
        { front: "🌙 Lună, 60 kg", back: "g ≈ 1,6 m/s² → G ≈ 97 N" },
        { front: "🔴 Marte, 60 kg", back: "g ≈ 3,7 m/s² → G ≈ 222 N" },
        { front: "🪐 Jupiter, 60 kg", back: "g ≈ 25 m/s² → G ≈ 1500 N" },
        { front: "🚀 Spațiul îndepărtat, 60 kg", back: "g ≈ 0 → greutate ≈ 0, dar masa rămâne 60 kg" }
      ] },
      caption: "Se schimbă greutatea, nu masa. Întoarce cărțile ca să vezi valorile."
    },
    {
      type: "text",
      title: "Forța elastică și legea lui Hooke",
      html: `<p>Un <b>arc</b> (sau o bandă elastică) care este alungit sau comprimat tinde să revină la lungimea inițială exercitând o <b>forță de revenire</b>, numită <b>forță elastică</b>. Fizicianul englez <b>Robert Hooke</b> a descoperit că, atâta timp cât deformarea este mică, forța este <b>direct proporțională</b> cu alungirea:</p>
<p style="text-align:center"><b>F = k · Δx</b></p>
<ul>
<li><b>Δx</b> este alungirea (sau comprimarea) arcului față de lungimea în repaus, în metri;</li>
<li><b>k</b> este <b>constanta elastică</b> a arcului, în <b>N/m</b>: un arc rigid are k mare, un arc moale are k mic;</li>
<li>forța este <b>întotdeauna opusă</b> deformării (de aceea se scrie adesea F = −k·Δx).</li>
</ul>
<p>Dincolo de <b>limita de elasticitate</b> arcul se deformează permanent și legea nu mai este valabilă. Dinamometrul funcționează astfel: cu cât corpul atârnat este mai greu, cu atât arcul se alungește mai mult; scara este gradată în newtoni.</p>
<p><b>Exemplu.</b> Un arc cu k = 50 N/m este alungit cu 0,20 m: F = 50 × 0,20 = <b>10 N</b>. Pentru a-l alungi cu 0,40 m sunt necesari 20 N (dublu).</p>`
    },
    {
      type: "svg",
      title: "Graficul unui arc",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fffbeb"/>
<g font-family="sans-serif">
<line x1="70" y1="250" x2="360" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#334155" stroke-width="3"/>
<text x="215" y="285" font-size="15" text-anchor="middle" fill="#334155">alungirea Δx (m)</text>
<text x="30" y="140" font-size="15" fill="#334155" transform="rotate(-90 30 140)" text-anchor="middle">forța F (N)</text>
<line x1="70" y1="250" x2="270" y2="80" stroke="#d97706" stroke-width="5"/>
<line x1="270" y1="80" x2="340" y2="60" stroke="#dc2626" stroke-width="5" stroke-dasharray="8 6"/>
<g fill="#334155" font-size="14" text-anchor="middle"><text x="120" y="270">0,1</text><text x="170" y="270">0,2</text><text x="220" y="270">0,3</text></g>
<g fill="#334155" font-size="14" text-anchor="end"><text x="62" y="208">5</text><text x="62" y="165">10</text><text x="62" y="122">15</text></g>
<text x="170" y="100" font-size="15" fill="#92400e" font-weight="bold">panta = k</text>
<text x="300" y="120" font-size="14" fill="#991b1b">dincolo de limita</text>
<text x="300" y="138" font-size="14" fill="#991b1b">de elasticitate</text>
<rect x="420" y="50" width="26" height="30" fill="#94a3b8"/>
<path d="M433 80 l-14 8 l28 12 l-28 12 l28 12 l-28 12 l28 12 l-14 8" stroke="#d97706" stroke-width="4" fill="none"/>
<rect x="415" y="168" width="36" height="34" rx="4" fill="#2563eb"/>
<text x="433" y="190" font-size="14" fill="#fff" text-anchor="middle">m</text>
<line x1="500" y1="100" x2="500" y2="168" stroke="#16a34a" stroke-width="3"/>
<text x="540" y="140" font-size="15" fill="#166534">Δx</text>
<line x1="433" y1="202" x2="433" y2="248" stroke="#dc2626" stroke-width="4"/>
<text x="470" y="236" font-size="15" fill="#991b1b" font-weight="bold">G = m·g</text>
</g>
</svg>`,
      caption: "În zona elastică graficul este o dreaptă care trece prin origine: forța și alungirea sunt direct proporționale."
    },
    {
      type: "text",
      title: "Frecarea",
      html: `<p>Când două suprafețe sunt în contact și una tinde să alunece pe cealaltă, apare o forță care se <b>opune</b> alunecării: <b>frecarea</b>. Are direcția paralelă cu suprafețele și sensul opus mișcării (sau tendinței de mișcare). Depinde de <b>natura suprafețelor</b> (asperitate) și de forța cu care sunt apăsate una pe cealaltă (<b>forța normală</b> N, perpendiculară pe suprafață). Pe un plan orizontal, N = G = m·g.</p>
<ul>
<li><b>Frecarea statică</b> (corp în repaus): împiedică punerea corpului în mișcare. Crește odată cu forța aplicată până la o valoare maximă: <b>F<sub>s,max</sub> = μ<sub>s</sub> · N</b>. Dacă forța depășește această valoare, corpul pornește.</li>
<li><b>Frecarea dinamică</b> sau de alunecare (corp în mișcare): are valoarea <b>F<sub>d</sub> = μ<sub>d</sub> · N</b>, constantă. În general <b>μ<sub>d</sub> &lt; μ<sub>s</sub></b>: este mai greu să pui în mișcare un mobilier decât să-l ții în mișcare.</li>
<li><b>Frecarea de rostogolire</b>: pentru un corp care se rostogolește (roată, sferă), mult mai mică decât frecarea de alunecare: de aceea roata este o mare invenție.</li>
</ul>
<p>μ (se citește «miu») este <b>coeficientul de frecare</b>, un număr pur care depinde doar de cele două suprafețe. În modelul folosit la început, frecarea <b>nu depinde de aria de contact</b> și nici de viteză.</p>
<p><b>Exemplu.</b> O ladă de 20 kg pe o podea orizontală, cu μ<sub>s</sub> = 0,5 și μ<sub>d</sub> = 0,4. N = 20 × 9,8 = 196 N. Pentru a o porni sunt necesari mai mult de 0,5 × 196 = <b>98 N</b>; pentru a o ține în mișcare cu viteză constantă ajung 0,4 × 196 ≈ <b>78 N</b>.</p>`
    },
    {
      type: "example",
      title: "Cântărirea cu un arc",
      html: `<p>Un dinamometru are un arc cu k = 40 N/m. Atârni un ghiozdan și arcul se alungește cu 0,25 m. Forța elastică echilibrează greutatea: G = k·Δx = 40 × 0,25 = <b>10 N</b>. Masa ghiozdanului este m = G/g = 10/9,8 ≈ <b>1,0 kg</b>. Ducând același ghiozdan pe Lună, arcul s-ar alungi doar cu aproximativ 0,04 m (G ≈ 1,6 N): dinamometrul măsoară greutatea, nu masa.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: greutate, arc, frecare",
      questions: [
        { type: "num", q: "Calculează greutatea unui corp de 5 kg pe Pământ (g = 9,8 m/s²).", answer: 49, tol: 0.1, unit: "N", explain: "G = m · g = 5 × 9,8 = 49 N." },
        { type: "num", q: "Un arc cu k = 200 N/m este alungit cu 5 cm. Cât este forța elastică?", answer: 10, tol: 0.01, unit: "N", explain: "Δx = 0,05 m; F = 200 × 0,05 = 10 N." },
        { type: "mc", q: "Un bloc de 10 kg are μ_s = 0,3. Cu g = 10 m/s², care este aproximativ forța minimă pentru a-l porni?", options: ["3 N", "30 N", "100 N", "300 N"], answer: 1, explain: "N = 100 N; F = 0,3 × 100 = 30 N." }
      ]
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege vectorii și forțele",
      intro: "Un vector este «o săgeată cu un înțeles». Haide să-l privim din alte unghiuri.",
      tabs: [
        {
          label: "🗺️ Vânătoarea de comori",
          html: "<p>Un vector este o instrucțiune de <b>deplasare</b>: «fă 3 pași spre est, apoi 4 spre nord». Vectorul sumă este instrucțiunea <b>directă</b>: ai ajuns la 5 pași spre nord-est (Pitagora: 3, 4, 5). Dacă, în schimb, faci 3 pași spre est și 3 spre vest, te-ai întors la punctul de plecare: suma este nulă, deși ai mers 6 pași.</p>"
        },
        {
          label: "⚖️ Echilibrul forțelor",
          html: "<p>Un lustră atârnată de două cabluri: greutatea ei în jos este echilibrată de suma celor două tensiuni din cabluri, care sunt îndreptate în sus și puțin într-o parte. Când <b>suma vectorială a tuturor forțelor este zero</b>, corpul este în echilibru (vei studia asta în lecția următoare). Din acest motiv, cablurile foarte înclinate sunt mai întinse decât greutatea pe care o susțin.</p>"
        },
        {
          label: "🔗 Asociază forța și formula",
          html: "<p>Leagă fiecare forță de formula ei.</p>",
          widget: "match",
          options: { pairs: [
            ["Greutatea", "G = m · g"],
            ["Forța elastică", "F = k · Δx"],
            ["Frecarea dinamică", "F = μd · N"],
            ["Frecarea statică maximă", "F = μs · N"]
          ] }
        },
        {
          label: "📊 Desenul frecării",
          html: "<p>Graficul arată cum frecarea statică crește până la maxim și apoi, imediat ce corpul alunecă, scade la valoarea dinamică.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#f0fdf4'/><g font-family='sans-serif'><line x1='60' y1='220' x2='560' y2='220' stroke='#334155' stroke-width='3'/><line x1='60' y1='220' x2='60' y2='20' stroke='#334155' stroke-width='3'/><path d='M60 220 L240 60 L260 100 L540 100' stroke='#16a34a' stroke-width='5' fill='none'/><line x1='240' y1='60' x2='240' y2='220' stroke='#94a3b8' stroke-width='2' stroke-dasharray='6 5'/><text x='300' y='248' font-size='14' fill='#334155' text-anchor='middle'>forța aplicată</text><text x='30' y='120' font-size='14' fill='#334155' transform='rotate(-90 30 120)' text-anchor='middle'>frecarea</text><text x='245' y='50' font-size='14' fill='#166534' text-anchor='middle'>maximul static</text><text x='420' y='88' font-size='14' fill='#166534' text-anchor='middle'>frecarea dinamică (constantă)</text><text x='150' y='170' font-size='14' fill='#166534'>în repaus</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Ut tensio, sic vis",
      html: `<p>Robert Hooke, ca să nu i se fure descoperirile, obișnuia să publice anunțurile sub formă de <b>anagrame</b>. În 1676 a publicat <i>ceiiinosssttuv</i>; abia în 1678 a dezvăluit soluția: <b>«Ut tensio, sic vis»</b>, adică «cum este alungirea, așa este forța». Este legea care îi poartă astăzi numele. A fost și omul care a folosit pentru prima oară termenul de «celulă», observând la microscop o bucată de plută.</p>`
    },
    {
      type: "curiosity",
      title: "Sărind pe Lună",
      html: `<p>Pe Lună g are valoarea de aproximativ 1,6 m/s², adică aproximativ <b>o șesime</b> din cea terestră. Astronauții din programul Apollo, cu costum și rucsac de multe zeci de kg, cântăreau o șesime din cât ar fi cântărit pe Pământ, dar <b>masa</b> lor era aceeași: de aceea, punerea în mișcare sau oprirea unui obiect cerea același efort ca pe Pământ (masa măsoară inerția), în timp ce ridicarea lui cerea mult mai puțin.</p>`
    },
    {
      type: "conceptMap",
      title: "Harta vectorilor și a forțelor",
      nodes: [
        { id: "vettore", label: "Vector", x: 50, y: 8, color: "#2563eb", html: "Săgeată cu modul, direcție și sens.", why: "Unele mărimi (forțe, viteze) au o orientare care influențează rezultatul: două împingeri opuse se anulează, două împingeri în același sens se adună. Vectorii au apărut pentru a descrie această realitate în mod geometric." },
        { id: "somma", label: "Adunarea vectorilor", x: 15, y: 42, color: "#16a34a", html: "Vârf-coadă sau paralelogram; Pitagora în cazurile perpendiculare.", why: "Regula paralelogramului era cunoscută deja de Newton și de Stevin: provine din observația experimentală că două forțe aplicate aceluiași punct echivalează cu o singură forță «diagonală»." },
        { id: "forza", label: "Forța", x: 50, y: 42, color: "#ef4444", html: "Mărime vectorială care deformează sau schimbă starea de mișcare (newton).", why: "Newton, în Principia (1687), a făcut din forță conceptul central al dinamicii: este cauza schimbărilor de mișcare. Înainte se credea că un corp are nevoie de o împingere continuă pentru a se mișca." },
        { id: "peso", label: "Greutatea", x: 85, y: 42, color: "#f59e0b", html: "G = m·g, spre centrul Pământului.", why: "Greutatea este un caz al forței de atracție universală a lui Newton: toate corpurile cu masă se atrag. Depinde de g, de aceea se schimbă de la o planetă la alta, în timp ce masa este o proprietate a corpului." },
        { id: "elastica", label: "Forța elastică", x: 28, y: 80, color: "#8b5cf6", html: "F = k·Δx: legea lui Hooke.", why: "Hooke a observat (1676-78) că, pentru deformări mici, forța de revenire crește proporțional cu alungirea: este principiul dinamometrului și al oricărui arc. Provine din forțele electrice dintre atomii materialului." },
        { id: "attrito", label: "Frecarea", x: 72, y: 80, color: "#64748b", html: "Forță care se opune alunecării: statică, dinamică, de rostogolire.", why: "La nivel microscopic suprafețele sunt rugoase, iar asperitățile se agață; în plus, între molecule acționează forțe de adeziune. De aceea frecarea depinde de materiale și de forța care le apasă, nu de aria aparentă." }
      ],
      edges: [["vettore", "somma", "se combină prin"], ["vettore", "forza", "descrie"], ["forza", "peso", "include"], ["forza", "elastica", "include"], ["forza", "attrito", "include"], ["somma", "forza", "dă rezultanta"]]
    }
  ],
  glossary: [
    { t: "Mărime scalară", d: "Mărime descrisă de un singur număr cu unitate de măsură." },
    { t: "Vector", d: "Mărime cu modul, direcție și sens, reprezentată printr-o săgeată." },
    { t: "Modul", d: "Intensitatea (lungimea) unui vector." },
    { t: "Rezultantă", d: "Vectorul sumă a mai multor vectori." },
    { t: "Newton (N)", d: "Unitatea de măsură a forței în SI: 1 N = 1 kg·m/s²." },
    { t: "Greutate", d: "Forța de atracție gravitațională asupra unui corp: G = m·g." },
    { t: "Constantă elastică", d: "Raportul k dintre forța elastică și alungirea arcului, în N/m." },
    { t: "Frecare", d: "Forță care se opune alunecării dintre două suprafețe în contact." },
    { t: "Forță normală", d: "Forță perpendiculară pe suprafața de sprijin, exercitată de suprafață asupra corpului." },
    { t: "Dinamometru", d: "Instrument care măsoară forțele prin alungirea unui arc." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre aceste mărimi este vectorială?", options: ["Masa", "Temperatura", "Forța", "Timpul"], answer: 2, explain: "Forța are modul, direcție și sens." },
      { type: "tf", q: "Doi vectori cu același modul sunt întotdeauna egali.", answer: false, explain: "Trebuie să aibă și aceeași direcție și același sens." },
      { type: "num", q: "Două forțe perpendiculare de 9 N și 12 N acționează asupra aceluiași punct. Calculează modulul rezultantei.", answer: 15, tol: 0, unit: "N", explain: "√(9² + 12²) = √225 = 15 N." },
      { type: "num", q: "Un corp de 8 kg: calculează greutatea pe Pământ (g = 9,8 m/s²).", answer: 78.4, tol: 0.1, unit: "N", explain: "G = 8 × 9,8 = 78,4 N." },
      { type: "mc", q: "Ce se schimbă dacă duci un obiect pe Lună?", options: ["Nici masa, nici greutatea", "Masa, nu greutatea", "Greutatea, nu masa", "Și masa, și greutatea"], answer: 2, explain: "Masa este o proprietate a corpului; greutatea depinde de g, care pe Lună este aproximativ o șesime." },
      { type: "num", q: "Un arc se alungește cu 0,12 m sub o forță de 6 N. Calculează constanta elastică.", answer: 50, tol: 0.1, unit: "N/m", explain: "k = F/Δx = 6/0,12 = 50 N/m." },
      { type: "tf", q: "Conform legii lui Hooke, dacă dublezi alungirea, se dublează forța elastică (în limita de elasticitate).", answer: true, explain: "F = k·Δx: forța și alungirea sunt direct proporționale." },
      { type: "mc", q: "Cum variază în general frecarea dinamică față de frecarea statică maximă?", options: ["Este mai mare", "Este mai mică", "Este întotdeauna egală", "Este nulă"], answer: 1, explain: "În general μ_d < μ_s: este mai ușor să menții un obiect în mișcare decât să-l pui în mișcare." },
      { type: "num", q: "Un bloc de 4 kg pe un plan orizontal (g = 9,8 m/s²) are μ_d = 0,25. Calculează forța de frecare dinamică.", answer: 9.8, tol: 0.1, unit: "N", explain: "N = 4 × 9,8 = 39,2 N; F = 0,25 × 39,2 = 9,8 N." },
      { type: "order", q: "Ordonează crescător greutatea unei persoane de 60 kg pe următoarele corpuri cerești.", items: ["Spațiul îndepărtat", "Luna", "Marte", "Pământul", "Jupiter"], explain: "Greutatea crește cu g: spațiul îndepărtat (≈0) < Luna (1,6) < Marte (3,7) < Pământ (9,8) < Jupiter (≈25 m/s²)." }
    ]
  }
});

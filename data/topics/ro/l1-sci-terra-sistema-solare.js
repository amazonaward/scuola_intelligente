TOPIC('ro', {
  id: "l1-sci-terra-sistema-solare",
  title: "Pământul în Sistemul Solar",
  intro: "Suntem pasageri pe o sferă de rocă care aleargă cu aproximativ 30 km pe secundă în jurul unei stele. De unde știm? Milenii la rând omenirea a crezut contrariul: că Pământul ar sta nemișcat în centrul cosmosului. În această lecție aflăm cum este alcătuit <b>Sistemul Solar</b>, care sunt <b>legile lui Kepler</b> ce îi guvernează mișcările și cum s-a ajuns să se măsoare <b>forma și dimensiunile Pământului</b> cu instrumente foarte simple.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Familia noastră de astre",
      html: `<p><b>Sistemul Solar</b> s-a format acum circa <b>4,6 miliarde de ani</b> prin prăbușirea unui nor de gaz și praf (<b>nebuloasa solară</b>). În centru s-a format Soarele; materialul rămas, turtit într-un disc în rotație, s-a aglomerat în planete, luni, asteroizi și comete.</p>
<ul>
<li><b>Soarele</b> este o stea de dimensiuni mici (o „pitică galbenă”), dar conține <b>99,86%</b> din masa sistemului. Diametrul său este de aproximativ 109 ori cel al Pământului. Strălucește pentru că în nucleu (circa 15 milioane de grade) hidrogenul este transformat în heliu prin <b>fuziune nucleară</b>.</li>
<li><b>Planetele</b> sunt opt. Patru sunt <b>telurice</b> (stâncoase, mici, dense, apropiate de Soare): Mercur, Venus, Pământ, Marte. Patru sunt <b>gigantice</b>: cele <b>gazoase</b>, Jupiter și Saturn (hidrogen și heliu), și cele <b>de gheață</b>, Uranus și Neptun.</li>
<li><b>Centura de asteroizi</b> dintre Marte și Jupiter; <b>centura Kuiper</b> dincolo de Neptun; foarte îndepărtatul <b>nor Oort</b>, rezervor de comete.</li>
<li><b>Planetele pitice</b> (Pluto, Ceres, Eris...): din 2006, Uniunea Astronomică Internațională definește planeta drept un corp care orbitează în jurul Soarelui, este sferic datorită propriei gravitații și și-a „curățat” orbita. Pluto nu o face, deci este o planetă pitică.</li>
</ul>
<p>De ce sunt planetele apropiate de Soare stâncoase, iar cele îndepărtate gazoase? În discul primordial, aproape de Soare era prea cald ca gazele și gheața să se condenseze: au rămas doar metale și roci. Dincolo de „linia înghețului” (între Marte și Jupiter), protoplanetele au putut acumula gheață și captura hidrogen și heliu.</p>`
    },
    {
      type: "3d",
      title: "Sistemul Solar în mișcare",
      scene: "solar",
      options: { labels: true },
      caption: "Rotește vederea. Observă că planetele orbitează aproape în același plan și în același sens: este moștenirea discului din care s-au născut."
    },
    {
      type: "svg",
      title: "Distanțele față de Soare",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<circle cx="25" cy="150" r="22" fill="#facc15"/>
<g stroke="#334155" stroke-width="1" stroke-dasharray="4 4"><line x1="75" y1="40" x2="75" y2="260"/><line x1="105" y1="40" x2="105" y2="260"/><line x1="125" y1="40" x2="125" y2="260"/><line x1="170" y1="40" x2="170" y2="260"/></g>
<g>
<circle cx="75" cy="150" r="4" fill="#9ca3af"/><text x="75" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Me</text>
<circle cx="100" cy="150" r="7" fill="#fbbf24"/><text x="100" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ve</text>
<circle cx="130" cy="150" r="8" fill="#3b82f6"/><text x="130" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Pă</text>
<circle cx="170" cy="150" r="5" fill="#ef4444"/><text x="170" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ma</text>
<circle cx="290" cy="150" r="22" fill="#d97706"/><text x="290" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ju</text>
<circle cx="400" cy="150" r="18" fill="#eab308"/><text x="400" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Sa</text>
<circle cx="520" cy="150" r="12" fill="#22d3ee"/><text x="520" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ur</text>
<circle cx="600" cy="150" r="12" fill="#2563eb"/><text x="600" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ne</text>
</g>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Distanțe medii față de Soare (dimensiunile nu sunt la scară)</text>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#cbd5e1">0,39 · 0,72 · 1 · 1,52 · 5,2 · 9,6 · 19,2 · 30 UA</text>
</svg>`,
      caption: "Distanțe în unități astronomice (UA). 1 UA = distanța medie Pământ–Soare ≈ 149,6 milioane km. Lumina Soarelui o parcurge în aproximativ 8 minute și 20 de secunde."
    },
    {
      type: "example",
      title: "Cât de departe este Soarele, în timp-lumină?",
      html: `<p>Lumina se deplasează cu aproximativ <b>300 000 km/s</b>. Distanța Pământ–Soare: <b>149,6 milioane km</b>.</p>
<ol>
<li>t = s / v = 149 600 000 km / 300 000 km/s ≈ <b>499 s</b>.</li>
<li>499 s ≈ 8 minute și 19 secunde.</li>
</ol>
<p>Asta înseamnă că atunci când te uiți la Soare, îl vezi așa cum era acum mai bine de 8 minute. Pentru Neptun (30 UA) lumina are nevoie de aproximativ patru ore și jumătate: semnalele sondelor Voyager, aflate la peste 20 de miliarde km, durează mai mult de 18 ore până ajung la noi.</p>`
    },
    {
      type: "text",
      title: "De la geocentrism la heliocentrism",
      html: `<p>Ca să vezi cum se schimbă modul de a gândi, reconstituie etapele:</p>
<ul>
<li><b>Aristotel</b> și apoi <b>Ptolemeu</b> (secolul al II-lea d.Hr., <i>Almagesta</i>): Pământul este nemișcat în centru și totul se rotește în jurul lui. Ca să explice mișcarea „retrogradă” a planetelor (care uneori par să se întoarcă din drum), Ptolemeu folosea cercuri peste cercuri, <b>epiciclurile</b>.</li>
<li><b>Aristarh din Samos</b> (secolul al III-lea î.Hr.) propusese deja un sistem cu Soarele în centru, dar nu a fost urmat.</li>
<li><b>Copernic</b> (<i>De revolutionibus</i>, 1543): Soarele este în centru, iar Pământul este o planetă care se rotește în jurul propriei axe și în jurul Soarelui. Mișcarea retrogradă devine un efect de perspectivă: Pământul, mai rapid, depășește Marte.</li>
<li><b>Galilei</b> (1610), cu luneta: cele patru luni ale lui Jupiter (care se rotesc în jurul lui Jupiter, nu al Pământului), fazele lui Venus, petele solare, craterele Lunii.</li>
<li><b>Kepler</b> (1609–1619) și <b>Newton</b> (1687) au dat modelului legile matematice.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Suntem în 1610: Pământul stă pe loc sau se mișcă?",
      html: `<p>Tocmai ai citit <i>Sidereus Nuncius</i> de Galilei. El spune că a văzut, cu o lunetă, <b>patru „stele” care se rotesc în jurul lui Jupiter</b> și că Venus prezintă faze ca Luna, de la „seceră” la „plină”. Biserica și aproape toți profesorii universitari apără sistemul lui Ptolemeu, în care totul se rotește în jurul Pământului. Ce crezi?</p>`,
      question: "Ce ai fi crezut?",
      options: [
        { label: "Galilei se înșală: sunt defecte ale lentilelor", outcome: "Aceasta a fost reacția multora la vremea aceea. Dar alți astronomi, inclusiv iezuiți de la Collegio Romano, au reprodus observațiile și le-au confirmat." },
        { label: "Nu totul se rotește în jurul Pământului, dar nu știu dacă Soarele este centrul", outcome: "Rezonabil: lunile lui Jupiter arată că există centre de mișcare diferite de Pământ. Și sistemul hibrid al lui Tycho Brahe (planetele în jurul Soarelui, iar Soarele în jurul Pământului) explica fazele lui Venus." },
        { label: "Modelul copernican este cel mai simplu și mai coerent", outcome: "Este concluzia la care au ajuns Galilei și Kepler, deși dovada decisivă (paralaxa stelară) a venit abia în 1838, cu Bessel." }
      ],
      answer: 2,
      explain: "Observațiile lui Galilei (1610) nu dovedeau singure heliocentrismul, dar arătau că modelul lui Ptolemeu nu se susține. În 1633 Galilei a fost judecat de Inchiziție și silit să-și retragă public afirmațiile. Sistemul copernican a fost apoi demonstrat de legile lui Kepler și de gravitația lui Newton."
    },
    {
      type: "text",
      title: "Cele trei legi ale lui Kepler",
      html: `<p>Johannes <b>Kepler</b> (1571–1630) a moștenit observațiile asupra lui Marte, de o precizie fără precedent, ale lui <b>Tycho Brahe</b>. După ani de calcule, a descoperit că orbitele nu sunt cercuri:</p>
<ol>
<li><b>Legea întâi (1609)</b>: fiecare planetă parcurge o <b>elipsă</b> având Soarele într-unul dintre cele două <b>focare</b>.</li>
<li><b>Legea a doua (1609)</b>: segmentul care unește planeta cu Soarele <b>mătură arii egale în intervale de timp egale</b>. Consecință: planeta se mișcă mai repede când este aproape de Soare (<b>periheliu</b>) și mai încet când este departe (<b>afeliu</b>).</li>
<li><b>Legea a treia (1619)</b>: pătratul perioadei de revoluție este proporțional cu cubul semiaxei mari a orbitei: <b>T² / a³ = constantă</b>. Cu T în ani și a în UA, constanta este 1: <b>T² = a³</b>.</li>
</ol>
<p>În 1687 Newton a arătat că cele trei legi sunt consecința unei singure forțe: <b>gravitația universală</b>, F = G · m₁ · m₂ / r².</p>`
    },
    {
      type: "svg",
      title: "Elipsa și legea ariilor",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<ellipse cx="320" cy="150" rx="260" ry="100" fill="none" stroke="#2563eb" stroke-width="3"/>
<circle cx="220" cy="150" r="14" fill="#facc15" stroke="#b45309" stroke-width="2"/>
<circle cx="420" cy="150" r="4" fill="#475569"/>
<text x="220" y="185" font-size="14" text-anchor="middle" fill="#1f2937">Soare (focar)</text>
<text x="420" y="170" font-size="14" text-anchor="middle" fill="#475569">celălalt focar</text>
<path d="M220 150 L560 150 A260 100 0 0 0 543 106 Z" fill="#fde68a" opacity="0.9" stroke="#b45309" stroke-width="1"/>
<path d="M220 150 L83 128 A260 100 0 0 0 80 175 Z" fill="#bbf7d0" opacity="0.9" stroke="#15803d" stroke-width="1"/>
<circle cx="580" cy="150" r="9" fill="#3b82f6"/>
<circle cx="60" cy="150" r="9" fill="#3b82f6"/>
<text x="580" y="185" font-size="14" text-anchor="middle" fill="#1f2937">afeliu</text>
<text x="60" y="185" font-size="14" text-anchor="middle" fill="#1f2937">periheliu</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Cele două arii colorate sunt egale: același timp de parcurs</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#475569">(excentricitatea este foarte exagerată: orbita Pământului este aproape un cerc)</text>
</svg>`,
      caption: "Cu cât planeta este mai aproape de Soare, cu atât se mișcă mai repede: ca să măture aceeași arie pe un arc mai scurt, este nevoie de viteză mai mare; pentru arcul mai lung, este suficientă o viteză mai mică."
    },
    {
      type: "example",
      title: "Folosim legea a treia: perioada lui Marte",
      html: `<p>Marte are semiaxa mare <b>a = 1,52 UA</b>. Cât durează anul lui?</p>
<ol>
<li>T² = a³ = 1,52³ ≈ 3,51</li>
<li>T = √3,51 ≈ <b>1,87 ani</b> pământeni (circa 687 de zile).</li>
</ol>
<p>Pentru Jupiter, a = 5,2 UA: T² = 140,6 → T ≈ <b>11,9 ani</b>. Și pentru un asteroid cu perioada de 8 ani? a³ = 64 → a = <b>4 UA</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: Sistemul Solar și Kepler",
      questions: [
        { type: "mc", q: "În ce punct al orbitei are o planetă cea mai mare viteză?", options: ["Afeliu", "Periheliu", "Este mereu aceeași"], answer: 1, explain: "Legea a doua: cu cât este mai aproape de Soare, cu atât se mișcă mai repede." },
        { type: "num", q: "O planetă are semiaxa mare a = 4 UA. Cât este perioada ei T (în ani)?", answer: 8, tol: 0.05, unit: "ani", explain: "T² = 4³ = 64 → T = 8 ani." },
        { type: "tf", q: "Soarele conține aproximativ 99,86% din masa Sistemului Solar.", answer: true, explain: "Planetele, toate împreună, reprezintă sub 0,2% (Jupiter singur are peste două treimi din ele)." }
      ]
    },
    {
      type: "text",
      title: "Forma și dimensiunile Pământului",
      html: `<p>Că Pământul este o sferă se știa cu mult înainte de Columb. Încă filosofii greci aduceau dovezi:</p>
<ul>
<li>în timpul <b>eclipselor de Lună</b>, umbra Pământului pe discul lunar este întotdeauna rotundă (<b>Aristotel</b>, secolul al IV-lea î.Hr.);</li>
<li><b>corăbiile care dispar la orizont</b> dispar începând de la corp: întâi dispare coca, apoi pânzele;</li>
<li>deplasându-te spre sud apar stele noi, iar înălțimea stelei polare se schimbă odată cu latitudinea;</li>
<li>astăzi: fotografiile din spațiu, ocolul lumii, GPS-ul.</li>
</ul>
<p>Mai exact, Pământul nu este o sferă perfectă, ci un <b>geoid</b>: este turtit la poli din cauza rotației. Raza ecuatorială este de <b>6378 km</b>, raza polară de <b>6357 km</b> (diferență de circa 21 km, adică 0,3%). Circumferința la ecuator este de aproximativ <b>40 075 km</b>; de-a lungul unui meridian, circa 40 008 km. 1° de latitudine măsoară circa 111 km: de aici provine definiția originală a <b>metrului</b> (1791: a zecea milioana parte din un sfert de meridian, de la pol la ecuator).</p>`
    },
    {
      type: "example",
      title: "Eratostene măsoară Pământul (circa 240 î.Hr.)",
      html: `<p>Eratostene, directorul Bibliotecii din Alexandria, a aflat că la <b>Siene</b> (azi Assuan), în ziua solstițiului de vară, la amiază, Soarele lumina fundul fântânilor: se afla la <b>zenit</b>. În același moment, la <b>Alexandria</b>, un băț vertical (gnomon) arunca o umbră: Soarele făcea un unghi de aproximativ <b>7,2°</b> cu verticala, adică 1/50 dintr-un unghi plin.</p>
<ol>
<li>Așadar, distanța Siene–Alexandria este 1/50 din circumferința Pământului.</li>
<li>Distanța (măsurată de „bematiști”, care numărau pașii) era de circa <b>5000 de stadii</b>.</li>
<li>Circumferința = 5000 × 50 = <b>250 000 de stadii</b>.</li>
</ol>
<p>Cu un stadiu între 157 și 185 m, rezultatul este între 39 000 și 46 000 km: surprinzător de aproape de valoarea reală de 40 000 km, cu un băț, o umbră și puțină geometrie.</p>`
    },
    {
      type: "widget",
      title: "Globul",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f0f9ff"/><circle cx="200" cy="150" r="110" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><ellipse cx="200" cy="150" rx="110" ry="30" fill="none" stroke="#dc2626" stroke-width="2"/><ellipse cx="200" cy="150" rx="40" ry="110" fill="none" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#475569" stroke-width="2" stroke-dasharray="6 4"/><ellipse cx="200" cy="92" rx="70" ry="14" fill="none" stroke="#7c3aed" stroke-width="2"/></svg>`,
        spots: [
          { x: 200, y: 20, label: "Axa de rotație" },
          { x: 310, y: 150, label: "Ecuatorul" },
          { x: 200, y: 78, label: "Paralela" },
          { x: 160, y: 220, label: "Meridianul" }
        ]
      },
      caption: "Rețeaua geografică: paralelele (cercuri paralele cu ecuatorul) măsoară latitudinea, meridianele (de la pol la pol) longitudinea."
    },
    {
      type: "3d",
      title: "Interiorul Pământului",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#92400e", label: "Scoarța (5-70 km)" },
        { r: 0.9, color: "#ea580c", label: "Mantaua (până la 2900 km)" },
        { r: 0.55, color: "#f59e0b", label: "Nucleul extern (lichid)" },
        { r: 0.2, color: "#fef08a", label: "Nucleul intern (solid)" }
      ] },
      caption: "Raza Pământului este de aproximativ 6371 km. O cunoaștem datorită undelor seismice ale cutremurelor, care își schimbă viteza când străbat materiale diferite (proporțiile de aici sunt schematice)."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege dimensiunile",
      intro: "Distanțele astronomice scapă intuiției. Încearcă aceste scări.",
      tabs: [
        {
          label: "⚽ La scara 1:10 miliarde",
          html: `<p>Micșorăm totul de 10 miliarde de ori: Soarele devine o minge de circa 14 cm, Pământul un bob de 1,3 mm aflat la 15 m distanță. Jupiter este o bilă de 1,4 cm la 78 m; Neptun este la 450 m. Cea mai apropiată stea, Proxima Centauri, ar fi la peste 4000 km distanță, cam cât de la Roma la Moscova și chiar mai mult. Sistemul Solar este aproape tot gol.</p>`
        },
        {
          label: "🏎️ Cu 100 km/h",
          html: `<p>O mașină cu 100 km/h ar avea nevoie de circa <b>1,5 milioane de ore</b>, adică aproximativ <b>170 de ani</b>, ca să ajungă de la Pământ la Soare. La Lună (384 400 km) ar ajunge în circa 160 de zile. Lumina face ocolul ecuatorului de 7,5 ori într-o secundă.</p>`
        },
        {
          label: "📅 Calendarul cosmic",
          html: `<p>Comprimăm 13,8 miliarde de ani din istoria Universului într-un singur an: Big Bang-ul este pe 1 ianuarie; Sistemul Solar se naște în jurul datei de 2 septembrie; viața apare la mijlocul lui septembrie; dinozaurii domină la sfârșitul lui decembrie; <b>Homo sapiens</b> apare cu doar câteva minute înainte de miezul nopții de 31 decembrie. Toată istoria umană scrisă încape în ultimele secunde.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Stăm cu capul în jos?",
      html: `<p>În spațiu nu există un „sus” absolut: „jos” este direcția în care arată gravitația, adică spre centrul Pământului. Un australian este „cu capul în jos” față de un italian doar după hărțile noastre, care pun nordul sus prin convenție (cândva multe hărți medievale aveau estul sus, de unde cuvântul <b>a se orienta</b>). Altă curiozitate: Pământul nu doar că se rotește în jurul Soarelui cu aproximativ 30 km/s: însuși Soarele orbitează în jurul centrului Căii Lactee cu circa 220 km/s și face o rotație completă în aproximativ 230 de milioane de ani.</p>`
    },
    {
      type: "curiosity",
      title: "De ce Pluto nu mai este planetă",
      html: `<p>Pluto a fost descoperit în 1930 de <b>Clyde Tombaugh</b>. Dar în anii 2000 au fost descoperite în centura Kuiper alte corpuri de dimensiuni asemănătoare: <b>Eris</b>, în 2005, este chiar puțin mai masivă decât Pluto. Ori se declarau planete zeci de obiecte, ori se redefinea categoria. În 2006 Uniunea Astronomică Internațională a ales a doua variantă și a creat categoria <b>planetelor pitice</b>. În 2015, sonda <b>New Horizons</b> ne-a trimis fotografii spectaculoase ale suprafeței lui Pluto, cu o câmpie uriașă de gheață de azot în formă de inimă.</p>`
    },
    {
      type: "conceptMap",
      title: "Harta Sistemului Solar: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "nebulosa", label: "Nebuloasa solară", x: 50, y: 6, color: "#a855f7", html: "Norul de gaz și praf din care se naște totul, acum 4,6 miliarde de ani.", why: "Ipoteza nebulară a fost propusă de <b>Kant</b> (1755) și <b>Laplace</b> (1796) ca să explice de ce planetele orbitează toate în același sens și aproape în același plan; vârsta de 4,57 miliarde de ani provine din datarea radiometrică a celor mai vechi meteoriți." },
        { id: "sole", label: "Soarele", x: 20, y: 28, color: "#facc15", html: "Steaua centrală.", why: "Energia solară provine din fuziunea hidrogenului în heliu: <b>Bethe</b> (1938–39) i-a explicat reacțiile. De aceea Soarele are o viață limitată: mai are combustibil pentru circa 5 miliarde de ani." },
        { id: "pianeti", label: "Planetele", x: 50, y: 40, color: "#3b82f6", html: "Patru telurice și patru gigantice.", why: "Diferența de compoziție depinde de temperatura discului: în interiorul liniei înghețului doar roci și metale, în exterior și gheață, și gaze." },
        { id: "keplero", label: "Legile lui Kepler", x: 80, y: 28, color: "#22c55e", html: "Orbite eliptice, arii egale, T² ∝ a³.", why: "Kepler a încercat ani la rând să potrivească datele lui Tycho Brahe cu orbite circulare, dar rămânea mereu o abatere de 8 minute de arc: având mai multă încredere în date decât în tradiție, a descoperit elipsele." },
        { id: "newton", label: "Gravitația universală", x: 80, y: 56, color: "#ef4444", html: "F = G·m₁·m₂/r².", why: "Newton (1687) a arătat că aceeași forță care face să cadă un măr guvernează mișcarea Lunii și a planetelor și a dedus matematic din ea cele trei legi ale lui Kepler." },
        { id: "terra", label: "Forma Pământului", x: 20, y: 62, color: "#06b6d4", html: "Un geoid ușor turtit la poli.", why: "Rotația creează o forță centrifugă maximă la ecuator, iar roca curge formând o umflătură. În 1735, expedițiile franceze în Laponia și Peru au măsurat lungimea unui grad de meridian și au confirmat turtirea prevăzută de Newton." },
        { id: "eratostene", label: "Eratostene", x: 20, y: 86, color: "#f59e0b", html: "Prima măsurare a circumferinței Pământului.", why: "A folosit geometria: unghiurile alterne interne ale razelor solare paralele și distanța dintre două orașe dau fracțiunea din circumferință." },
        { id: "geo", label: "Geocentrism și heliocentrism", x: 55, y: 80, color: "#14b8a6", html: "Pământul sau Soarele în centru?", why: "Copernic (1543), Galilei (1610), Kepler (1609) și Newton (1687) au construit, unul peste altul, modelul modern. Confirmarea prin observație a revoluției anuale a Pământului, paralaxa stelară, a venit în 1838 cu Bessel." }
      ],
      edges: [
        ["nebulosa", "sole", "formează"],
        ["nebulosa", "pianeti", "formează"],
        ["pianeti", "keplero", "descrise de"],
        ["keplero", "newton", "explicate de"],
        ["pianeti", "terra", "printre care"],
        ["terra", "eratostene", "măsurat de"],
        ["geo", "keplero", "duce la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: Pământul",
      questions: [
        { type: "mc", q: "Cine a măsurat primul circumferința Pământului cu umbre și geometrie?", options: ["Eratostene", "Ptolemeu", "Kepler"], answer: 0, explain: "Eratostene din Cirene, bibliotecar la Alexandria (secolul al III-lea î.Hr.)." },
        { type: "mc", q: "Forma Pământului este descrisă cel mai bine ca…", options: ["o sferă perfectă", "un geoid, turtit la poli", "un disc"], answer: 1, explain: "Rotația face ca ecuatorul să se umfle: raza ecuatorială depășește cu 21 km pe cea polară." },
        { type: "tf", q: "Pluto este o planetă pitică.", answer: true, explain: "Din 2006, conform definiției UAI." }
      ]
    }
  ],
  glossary: [
    { t: "Sistemul Solar", d: "Soarele și toate corpurile care orbitează în jurul lui." },
    { t: "Unitate astronomică (UA)", d: "Distanța medie Pământ–Soare, circa 149,6 milioane km." },
    { t: "Planetă telurică", d: "Planetă stâncoasă și mică: Mercur, Venus, Pământ, Marte." },
    { t: "Planetă gigantică", d: "Planetă de dimensiuni mari și densitate mică: Jupiter, Saturn, Uranus, Neptun." },
    { t: "Planetă pitică", d: "Corp sferic care orbitează în jurul Soarelui, dar nu și-a curățat orbita (Pluto, Ceres)." },
    { t: "Elipsă", d: "Curbă închisă pentru care suma distanțelor la cele două focare este constantă." },
    { t: "Periheliu / afeliu", d: "Punctele orbitei cele mai apropiat și cel mai îndepărtat de Soare." },
    { t: "Legea a treia a lui Kepler", d: "T² / a³ este aceeași pentru toate planetele." },
    { t: "Geoid", d: "Forma reală a Pământului, turtită la poli." },
    { t: "Latitudine / longitudine", d: "Coordonate unghiulare care localizează un punct de pe Pământ față de ecuator și de meridianul Greenwich." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este corpul din Sistemul Solar cu cea mai mare masă?", options: ["Jupiter", "Soarele", "Pământul"], answer: 1, explain: "Soarele are 99,86% din masă." },
      { type: "mc", q: "Care sunt planetele gazoase?", options: ["Jupiter și Saturn", "Uranus și Neptun", "Marte și Venus"], answer: 0, explain: "Jupiter și Saturn sunt făcute mai ales din hidrogen și heliu; Uranus și Neptun sunt giganți de gheață." },
      { type: "tf", q: "Conform lui Kepler, orbitele planetelor sunt elipse având Soarele într-un focar.", answer: true, explain: "Este prima lege a lui Kepler." },
      { type: "num", q: "O planetă are semiaxa mare a = 9 UA. Care este perioada în ani?", answer: 27, unit: "ani", explain: "T² = 9³ = 729 → T = 27 ani." },
      { type: "mc", q: "În ianuarie Pământul se află la periheliu, deci…", options: ["se mișcă mai repede", "este mai cald în emisfera nordică", "este mai departe de Soare"], answer: 0, explain: "Fiind aproape de Soare se mișcă mai repede (legea a doua). Anotimpurile nu depind de distanță, ci de înclinarea axei." },
      { type: "num", q: "Dacă lumina are nevoie de 500 de secunde ca să ajungă de la Soare la Pământ, la câți km se află Soarele? (c = 300 000 km/s)", answer: 150000000, tol: 1000000, unit: "km", explain: "s = c · t = 300 000 × 500 = 150 de milioane km." },
      { type: "mc", q: "Ce dovadă a adus Aristotel pentru sfericitatea Pământului?", options: ["Umbra circulară a Pământului în eclipsele de Lună", "Fotografiile din spațiu", "Mareele"], answer: 0, explain: "Doar un corp sferic aruncă întotdeauna o umbră circulară." },
      { type: "text", q: "Cine a scris în 1543 De revolutionibus orbium coelestium?", answer: ["copernic", "nicolaus copernic", "nicolae copernic", "niccolò copernic"], explain: "Nicolaus Copernic, care a propus sistemul heliocentric." },
      { type: "order", q: "Ordonează planetele în ordinea crescătoare a distanței față de Soare.", items: ["Mercur", "Pământ", "Marte", "Jupiter", "Saturn"], explain: "Mercur 0,39 UA, Pământ 1, Marte 1,52, Jupiter 5,2, Saturn 9,6." },
      { type: "mc", q: "Cum s-a putut studia structura internă a Pământului?", options: ["Cu unde seismice", "Săpând până la nucleu", "Cu telescoapele"], answer: 0, explain: "Cea mai adâncă gaură (Kola, circa 12 km) nu ajunge nici măcar la manta: interiorul se cunoaște din undele seismice." }
    ]
  }
});

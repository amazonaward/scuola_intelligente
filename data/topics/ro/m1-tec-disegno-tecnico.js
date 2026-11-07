TOPIC('ro', {
  id: `m1-tec-disegno-tecnico`,
  title: `Desenul tehnic`,
  intro: `Un desen artistic exprimă emoții; un <b>desen tehnic</b> trebuie să fie <b>precis</b> și <b>înțeles de toți în același fel</b>, în orice țară din lume: este „limbajul” inginerilor, arhitecților, meșteșugarilor. În această lecție cunoaștem <b>instrumentele</b>, <b>formatele</b> foilor, <b>tipurile de linii</b>, <b>scările</b> și principalele <b>construcții geometrice</b> cu rigla, echerele și compasul. 📐✏️`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. De ce este nevoie de un desen „tehnic”`,
      html: `<p>Imaginează-ți că trebuie să-i comanzi unui tâmplar care vorbește altă limbă un raft. Cu un desen tehnic bine făcut, el înțelege imediat <b>forma</b>, <b>dimensiunile</b> și <b>materialul</b>, fără nevoie de cuvinte.</p>
<p>Pentru a fi înțeles de toți, desenul tehnic respectă niște <b>norme</b> (reguli comune):</p>
<ul>
<li>normele <b>UNI</b> (Ente Italiano di Normazione, organismul italian de standardizare), înființat în 1921;</li>
<li>normele europene <b>EN</b> și cele internaționale <b>ISO</b>, adesea unite: de exemplu <b>UNI EN ISO 128</b> stabilește tipurile de linii.</li>
</ul>
<p>Normele fixează: formatele foilor, tipurile și grosimile liniilor, scrierea, cotele (dimensiunile), scările.</p>`
    },
    {
      type: `text`, title: `2. Instrumentele`,
      html: `<table>
<tr><th>Instrument</th><th>La ce servește</th></tr>
<tr><td>✏️ <b>Creioanele</b></td><td>Mina poate fi <b>tare</b> (H, 2H… trăsătură deschisă și subțire, pentru construcții) sau <b>moale</b> (B, 2B… trăsătură închisă, pentru a contura). <b>HB</b> este medie. Se folosește și creionul mecanic (0,5 mm).</td></tr>
<tr><td>📏 <b>Rigla</b></td><td>Pentru trasarea segmentelor și măsurare (de obicei 30-50 cm).</td></tr>
<tr><td>📐 <b>Echer de 45°</b></td><td>Triunghi dreptunghic isoscel: unghiuri de 90°, 45°, 45°.</td></tr>
<tr><td>📐 <b>Echer de 30°/60°</b></td><td>Triunghi dreptunghic cu unghiuri de 90°, 60°, 30°.</td></tr>
<tr><td>🔵 <b>Compasul</b></td><td>Pentru trasarea cercurilor și a arcelor, pentru raportarea măsurilor.</td></tr>
<tr><td>🟠 <b>Raportorul</b></td><td>Pentru măsurarea și desenarea unghiurilor în grade (semicerc de la 0° la 180°).</td></tr>
<tr><td>🧽 <b>Guma</b> și <b>ascuțitoarea</b></td><td>Pentru a șterge fără a murdări; pentru a menține vârful subțire.</td></tr>
</table>
<p>Alăturând cele două echere se obțin și unghiuri de <b>15°</b> (60 − 45), <b>75°</b> (30 + 45), <b>105°</b>, <b>135°</b>…</p>`
    },
    {
      type: `svg`, title: `Cele două echere`,
      caption: `În stânga, echerul de 45°, în dreapta cel de 30°/60°. Împreună permit trasarea de paralele și perpendiculare.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<path d="M40 260 L240 260 L40 60 Z" fill="#7dd3fc" fill-opacity="0.7" stroke="#0369a1" stroke-width="4"/>
<path d="M90 230 L150 230 L90 170 Z" fill="#f8fafc" stroke="#0369a1" stroke-width="2"/>
<rect x="40" y="240" width="20" height="20" fill="none" stroke="#0f172a" stroke-width="2"/>
<text x="70" y="90" font-size="18" fill="#0c4a6e" font-weight="bold">45°</text>
<text x="190" y="250" font-size="18" fill="#0c4a6e" font-weight="bold">45°</text>
<text x="65" y="255" font-size="15" fill="#0f172a">90°</text>
<text x="140" y="290" font-size="17" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Echer 45°</text>
<path d="M330 260 L566 260 L330 124 Z" fill="#fdba74" fill-opacity="0.75" stroke="#c2410c" stroke-width="4"/>
<path d="M370 240 L470 240 L370 182 Z" fill="#f8fafc" stroke="#c2410c" stroke-width="2"/>
<rect x="330" y="240" width="20" height="20" fill="none" stroke="#0f172a" stroke-width="2"/>
<text x="340" y="160" font-size="18" fill="#7c2d12" font-weight="bold">60°</text>
<text x="505" y="252" font-size="18" fill="#7c2d12" font-weight="bold">30°</text>
<text x="355" y="255" font-size="15" fill="#0f172a">90°</text>
<text x="450" y="290" font-size="17" text-anchor="middle" fill="#7c2d12" font-weight="bold">Echer 30°/60°</text>
<text x="300" y="35" font-size="16" text-anchor="middle" fill="#334155">Suma unghiurilor este întotdeauna 180°</text>
</svg>`
    },
    {
      type: `text`, title: `3. Foile: formatele A`,
      html: `<p>Foile de desen urmează seria <b>A</b> (norma ISO 216). Cea mai mare foaie, <b>A0</b>, are aria de <b>1 m²</b>. Tăind-o în două pe latura lungă se obține A1, apoi A2, A3, A4…</p>
<table>
<tr><th>Format</th><th>Dimensiuni (mm)</th></tr>
<tr><td>A0</td><td>841 × 1189</td></tr>
<tr><td>A1</td><td>594 × 841</td></tr>
<tr><td>A2</td><td>420 × 594</td></tr>
<tr><td><b>A3</b></td><td><b>297 × 420</b> (cel pe care îl folosești la școală pentru planșe)</td></tr>
<tr><td><b>A4</b></td><td><b>210 × 297</b> (foaia de imprimantă)</td></tr>
</table>
<p>Secretul: raportul dintre latura lungă și latura scurtă este întotdeauna aproximativ <b>1,414</b> (adică √2). Astfel, îndoită în două, foaia <b>păstrează aceeași formă</b>!</p>
<p>Înainte de a desena se face <b>chenarul</b>: un dreptunghi la aproximativ 1 cm de margine, cu <b>indicatorul</b> în dreapta jos (nume, clasă, dată, titlu, scară).</p>`
    },
    {
      type: `svg`, title: `De la A0 la A4`,
      caption: `Fiecare format este jumătate din cel precedent. Două A4 alăturate fac un A3.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<rect x="150" y="20" width="370" height="262" fill="#fef9c3" stroke="#1f2937" stroke-width="3"/>
<rect x="150" y="20" width="185" height="262" fill="#bbf7d0" stroke="#1f2937" stroke-width="3"/>
<rect x="335" y="20" width="185" height="131" fill="#bfdbfe" stroke="#1f2937" stroke-width="3"/>
<rect x="335" y="151" width="92" height="131" fill="#fbcfe8" stroke="#1f2937" stroke-width="3"/>
<rect x="427" y="151" width="93" height="65" fill="#ddd6fe" stroke="#1f2937" stroke-width="3"/>
<text x="242" y="160" font-size="26" text-anchor="middle" fill="#166534" font-weight="bold">A1</text>
<text x="427" y="95" font-size="24" text-anchor="middle" fill="#1e40af" font-weight="bold">A2</text>
<text x="381" y="225" font-size="20" text-anchor="middle" fill="#9d174d" font-weight="bold">A3</text>
<text x="473" y="190" font-size="17" text-anchor="middle" fill="#5b21b6" font-weight="bold">A4</text>
<text x="20" y="60" font-size="20" fill="#854d0e" font-weight="bold">A0 = 1 m²</text>
<text x="20" y="90" font-size="15" fill="#334155">fiecare tăietură</text>
<text x="20" y="110" font-size="15" fill="#334155">înjumătățește aria</text>
<text x="20" y="150" font-size="15" fill="#334155">latura lungă :</text>
<text x="20" y="170" font-size="15" fill="#334155">latura scurtă ≈ 1,414</text>
</svg>`
    },
    {
      type: `widget`, title: `Foaia de desen: găsește părțile`,
      widget: `labelDiagram`,
      caption: `Dă clic pe puncte și alege numele potrivit.`,
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="10" width="560" height="280" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
<rect x="45" y="30" width="515" height="240" fill="none" stroke="#0f172a" stroke-width="4"/>
<rect x="400" y="215" width="160" height="55" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>
<line x1="400" y1="242" x2="560" y2="242" stroke="#0f172a" stroke-width="1"/>
<rect x="120" y="90" width="160" height="90" fill="none" stroke="#0f172a" stroke-width="3"/>
<line x1="200" y1="70" x2="200" y2="200" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="14 4 2 4"/>
<line x1="120" y1="215" x2="280" y2="215" stroke="#0f172a" stroke-width="1"/>
<text x="200" y="210" font-size="14" text-anchor="middle" fill="#0f172a">80</text>
</svg>`,
        spots: [
          { x: 32, y: 150, label: `margine` },
          { x: 45, y: 120, label: `chenar` },
          { x: 480, y: 242, label: `indicator` },
          { x: 120, y: 135, label: `contur vizibil` },
          { x: 200, y: 75, label: `axă de simetrie` },
          { x: 200, y: 215, label: `cotă` }
        ]
      }
    },
    {
      type: `text`, title: `4. Tipurile de linii`,
      html: `<p>În desenul tehnic, fiecare linie are o <b>semnificație</b>:</p>
<table>
<tr><th>Linia</th><th>Aspect</th><th>Semnificație</th></tr>
<tr><td><b>Continuă groasă</b></td><td>━━━━━</td><td>contururi și muchii <b>vizibile</b></td></tr>
<tr><td><b>Continuă subțire</b></td><td>─────</td><td>linii de <b>cotă</b> și de referință, hașuri ale secțiunilor</td></tr>
<tr><td><b>Întreruptă</b> (cu liniuțe)</td><td>– – – – –</td><td>muchii <b>ascunse</b> (care nu se văd)</td></tr>
<tr><td><b>Linie-punct subțire</b> (liniuță-punct)</td><td>—·—·—·—</td><td><b>axe</b> de simetrie, centre de cercuri</td></tr>
</table>
<p><b>Cota</b> este dimensiunea scrisă pe desen, întotdeauna în <b>milimetri</b> (fără a scrie „mm”) și întotdeauna dimensiunea <b>reală</b> a obiectului, chiar dacă desenul este la scară.</p>`
    },
    {
      type: `quiz`, title: `Mini-test: instrumente și linii`,
      questions: [
        { type: `mc`, q: `Care creion lasă trăsătura cea mai închisă și moale?`, options: [`2H`, `HB`, `2B`], answer: 2, explain: `B = moale (black): 2B este mai închis decât HB, H este tare și deschis.` },
        { type: `mc`, q: `O muchie ascunsă se desenează cu o linie…`, options: [`continuă groasă`, `întreruptă`, `linie-punct`], answer: 1, explain: `Muchiile ascunse se desenează cu linii întrerupte.` },
        { type: `num`, q: `Câți mm are latura scurtă a unei foi A4?`, answer: 210, tol: 0, unit: `mm`, explain: `A4 = 210 × 297 mm.` }
      ]
    },
    {
      type: `text`, title: `5. Scările`,
      html: `<p>Adesea un obiect este prea mare (o casă) sau prea mic (un șurub) ca să încapă pe foaie. Se folosește atunci o <b>scară</b>: raportul dintre dimensiunea <b>de pe desen</b> și dimensiunea <b>reală</b>.</p>
<ul>
<li><b>1:1</b> → scară <b>naturală</b>: 1 cm pe foaie = 1 cm în realitate.</li>
<li><b>1:2, 1:5, 1:10, 1:100…</b> → scări de <b>reducere</b>: la 1:10, 1 cm pe foaie = 10 cm în realitate.</li>
<li><b>2:1, 5:1, 10:1</b> → scări de <b>mărire</b>: la 2:1, 2 cm pe foaie = 1 cm în realitate.</li>
</ul>
<p><b>Pas cu pas</b>: o masă lungă de 120 cm desenată la scara 1:10 → 120 : 10 = <b>12 cm</b> pe foaie.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: planul camerei tale`,
      html: `<p>Camera ta măsoară 4 m × 3 m. Vrei să o desenezi pe o foaie A4 la scara <b>1:50</b>.</p>
<ol>
<li>Transformă în cm: 400 cm × 300 cm.</li>
<li>Împarte la 50: 400 : 50 = <b>8 cm</b>; 300 : 50 = <b>6 cm</b>.</li>
<li>Patul (200 cm × 90 cm) devine 4 cm × 1,8 cm.</li>
</ol>
<p>În indicator scrii „Scara 1:50”, dar pe cote scrii dimensiunile <b>reale</b> (4000 și 3000 mm).</p>`
    },
    {
      type: `text`, title: `6. Construcțiile geometrice fundamentale`,
      html: `<p><b>Mediatoarea unui segment AB</b> (dreapta perpendiculară care trece prin mijlocul segmentului):</p>
<ol>
<li>pune compasul în A cu o deschidere mai mare decât jumătatea lui AB și trasează un arc deasupra și dedesubt;</li>
<li>cu aceeași deschidere pune compasul în B și trasează alte două arce;</li>
<li>unește cele două puncte în care se intersectează arcele: aceasta este mediatoarea.</li>
</ol>
<p><b>Bisectoarea unui unghi</b> (dreapta care îl împarte în două):</p>
<ol>
<li>pune compasul în vârful V și trasează un arc care taie cele două laturi în punctele 1 și 2;</li>
<li>pune compasul în 1 și apoi în 2 cu aceeași deschidere și trasează două arce care se intersectează în P;</li>
<li>unește V cu P.</li>
</ol>
<p><b>Hexagon regulat înscris</b>: trasează un cerc; cu <b>aceeași deschidere ca raza</b>, pune compasul pe un punct al cercului și raportează de 6 ori această măsură: latura hexagonului este egală cu raza! Unind un punct da și unul nu, obții un <b>triunghi echilateral</b>.</p>`
    },
    {
      type: `svg`, title: `Mediatoarea unui segment și hexagonul cu compasul`,
      caption: `În stânga: arcele din A și din B se întâlnesc pe mediatoare. În dreapta: raza raportată de 6 ori formează hexagonul.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="70" y1="150" x2="230" y2="150" stroke="#0f172a" stroke-width="4"/>
<circle cx="70" cy="150" r="5" fill="#0f172a"/><circle cx="230" cy="150" r="5" fill="#0f172a"/>
<text x="55" y="175" font-size="18" fill="#0f172a" font-weight="bold">A</text>
<text x="235" y="175" font-size="18" fill="#0f172a" font-weight="bold">B</text>
<path d="M135 61.3 A110 110 0 0 1 165 94.5" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M165 205.5 A110 110 0 0 1 135 238.7" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M165 61.3 A110 110 0 0 0 135 94.5" fill="none" stroke="#dc2626" stroke-width="2"/>
<path d="M135 205.5 A110 110 0 0 0 165 238.7" fill="none" stroke="#dc2626" stroke-width="2"/>
<circle cx="150" cy="74.5" r="4" fill="#16a34a"/><circle cx="150" cy="225.5" r="4" fill="#16a34a"/>
<line x1="150" y1="40" x2="150" y2="265" stroke="#16a34a" stroke-width="2" stroke-dasharray="12 4 2 4"/>
<text x="160" y="60" font-size="16" fill="#166534" font-weight="bold">mediatoare</text>
<text x="150" y="290" font-size="15" text-anchor="middle" fill="#334155">mijlocul M</text>
<circle cx="150" cy="150" r="4" fill="#16a34a"/>
<circle cx="440" cy="150" r="100" fill="none" stroke="#94a3b8" stroke-width="2"/>
<polygon points="540,150 490,237 390,237 340,150 390,63 490,63" fill="#c7d2fe" fill-opacity="0.6" stroke="#4338ca" stroke-width="3"/>
<polygon points="540,150 390,237 390,63" fill="none" stroke="#db2777" stroke-width="2"/>
<line x1="440" y1="150" x2="540" y2="150" stroke="#ea580c" stroke-width="3"/>
<text x="490" y="142" font-size="15" text-anchor="middle" fill="#9a3412" font-weight="bold">r</text>
<text x="525" y="208" font-size="15" fill="#9a3412" font-weight="bold">latură = r</text>
<circle cx="440" cy="150" r="4" fill="#0f172a"/>
<text x="440" y="285" font-size="15" text-anchor="middle" fill="#334155">hexagon și triunghi echilateral</text>
</svg>`
    },
    {
      type: `3d`, title: `De la desen la corp`,
      scene: `solid`,
      caption: `Un hexagon desenat pe foaie, „ridicat” în înălțime, devine o prismă hexagonală (ca un creion!). Schimbă corpul cu butoanele și observă muchiile și dimensiunile.`,
      options: { shape: `prism`, n: 6, r: 1, h: 2, color: `#6366f1`, labels: true, shapes: [`prism`, `cube`, `cylinder`, `pyramid`] }
    },
    {
      type: `example`, title: `Exemplu practic: sigla echipei`,
      html: `<p>Clasa trebuie să deseneze sigla turneului de fotbal: un <b>hexagon</b> cu o <b>minge</b> înăuntru.</p>
<ol>
<li>Trasează axele perpendiculare în centrul foii cu linia-punct.</li>
<li>Cu compasul trasează un cerc cu raza de 6 cm.</li>
<li>Raportează de 6 ori raza pe cerc: obții vârfurile hexagonului.</li>
<li>Conturează hexagonul cu creionul moale (linie continuă groasă).</li>
<li>În centru desenează un cerc cu raza de 3 cm pentru minge.</li>
</ol>
<p>Aceeași metodă este folosită pentru plăcile hexagonale ale pardoselilor și pentru piulițele hexagonale!</p>`
    },
    {
      type: `widget`, title: `Joc: potrivește instrumentul cu utilizarea`,
      widget: `match`,
      options: {
        pairs: [
          [`Compas`, `Trasarea cercurilor și a arcelor`],
          [`Raportor`, `Măsurarea unghiurilor în grade`],
          [`Echer 45°`, `Unghiuri de 90° și 45°`],
          [`Echer 30°/60°`, `Unghiuri de 90°, 60° și 30°`],
          [`Creion H`, `Trăsătură deschisă pentru construcții`],
          [`Creion B`, `Trăsătură închisă pentru conturare`],
          [`Indicator`, `Chenar cu nume, titlu și scară`]
        ]
      }
    },
    {
      type: `curiosity`, title: `Ai știut că… Euclid desena doar cu rigla și compasul?`,
      html: `<p>În jurul anului <b>300 î.Hr.</b>, la Alexandria (Egipt), matematicianul grec <b>Euclid</b> a scris <i>Elementele</i>, în care toate construcțiile se fac cu <b>riglă (fără gradații) și compas</b>. Timp de peste 2000 de ani, matematicienii au încercat să împartă un unghi în trei părți egale cu aceste singure instrumente: abia în <b>1837</b>, francezul Pierre Wantzel a demonstrat că, în general, este <b>imposibil</b>!</p>`
    },
    {
      type: `curiosity`, title: `Ai știut că… ideea foii A4 este din secolul al XVIII-lea?`,
      html: `<p>Omul de știință german <b>Georg Christoph Lichtenberg</b> a observat încă din <b>1786</b> că o foaie cu laturile în raport √2 își păstrează forma atunci când este îndoită în două. Sistemul a fost adoptat în Germania în <b>1922</b> (norma DIN 476, a inginerului Walter Porstmann) și apoi în aproape toată lumea. Fac excepție <b>Statele Unite</b>, care folosesc încă formatul <i>Letter</i> (8,5 × 11 inci).</p>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Dacă construcțiile geometrice ți se par „magie”, încearcă aceste căi.`,
      tabs: [
        {
          label: `🧵 Cu sfoară și țăruși`,
          html: `<p>Grădinarii și zidarii din vechime nu aveau compasul mare: foloseau o <b>sfoară legată de un țăruș</b>. Ținând sfoara întinsă și rotindu-se în jurul țărușului, se trasează un cerc pe teren. <b>Egiptenii</b> foloseau o frânghie cu <b>12 noduri</b> echidistante: formând un triunghi cu laturile de 3, 4 și 5 intervale, obțineau un unghi drept perfect pentru construirea piramidelor!</p>`
        },
        {
          label: `🇯🇵 Îndoind hârtia`,
          html: `<p>În Japonia, <b>origami</b> a devenit și o metodă de geometrie: îndoind hârtia se construiesc axe, bisectoare și perpendiculare fără niciun instrument.</p>
<ul>
<li><b>Mediatoarea unui segment</b>: îndoaie foaia astfel încât A să ajungă exact peste B: cuta este mediatoarea!</li>
<li><b>Bisectoarea</b>: îndoaie astfel încât o latură a unghiului să se suprapună peste cealaltă.</li>
<li><b>Perpendiculara</b>: îndoaie o linie peste ea însăși.</li>
</ul>
<p>Cu îndoituri se poate chiar împărți un unghi în trei părți: lucru imposibil cu rigla și compasul!</p>`
        },
        {
          label: `🧊 Desenul devine 3D`,
          html: `<p>Desenul tehnic servește la construirea obiectelor reale. Rotește cubul: fiecare față pe care o vezi din față, din lateral și de sus va deveni un pătrat pe foaie. Aceasta este ideea <b>proiecțiilor ortogonale</b>, inventate de francezul <b>Gaspard Monge</b> la sfârșitul secolului al XVIII-lea, pe care le vei studia în clasa a doua.</p>`,
          scene: `solid`,
          options: { shape: `box`, w: 3, h: 1, d: 2, color: `#f59e0b`, labels: true }
        },
        {
          label: `🧮 Scara pe axă`,
          html: `<p>Gândește-te la scară ca la o axă în care fiecare „salt” valorează mai mulți centimetri. La scara 1:10, fiecare gradație de 1 cm pe foaie valorează 10 cm în realitate. Mută săriturile: 12 gradații = 120 cm, masa din exemplu!</p>`,
          widget: `numberLine`,
          options: { min: 0, max: 150, step: 10, marks: [120] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Hartă: limbajul desenului tehnic`,
      nodes: [
        { id: `dt`, label: `Desen tehnic`, x: 50, y: 8, color: `#4f46e5`, html: `Limbaj grafic precis și universal.`, why: `Servește la comunicarea unui proiect fără ambiguități. Încă din Renaștere, artiști-ingineri precum <b>Leonardo da Vinci</b> și <b>Francesco di Giorgio Martini</b> desenau mașini cu mare precizie, dar regulile comune s-au născut odată cu industria, în secolul al XIX-lea.` },
        { id: `norme`, label: `Norme UNI EN ISO`, x: 15, y: 30, color: `#0ea5e9`, html: `Reguli comune pentru toți.`, why: `Odată cu producția în serie, piesele făcute în fabrici diferite trebuiau să se potrivească între ele. ISO (Organizația Internațională de Standardizare) s-a născut în <b>1947</b> la Geneva; în Italia, UNI în 1921.` },
        { id: `strum`, label: `Instrumente`, x: 50, y: 30, color: `#f97316`, html: `Creioane, riglă, echere, compas, raportor.`, why: `Rigla și compasul sunt instrumentele geometriei lui <b>Euclid</b> (aproximativ 300 î.Hr.). Echerele de 45° și 30°/60° provin din cele două triunghiuri dreptunghice „speciale”: jumătate dintr-un pătrat și jumătate dintr-un triunghi echilateral.` },
        { id: `fogli`, label: `Formate A`, x: 85, y: 30, color: `#eab308`, html: `A0 = 1 m², A4 = 210 × 297 mm.`, why: `Laturi în raport √2: dacă a : b = √2, tăind în două, noul raport rămâne √2. Ideea lui Lichtenberg (1786), norma DIN 476 (1922), apoi ISO 216.` },
        { id: `linee`, label: `Tipuri de linii`, x: 20, y: 62, color: `#22c55e`, html: `Continuă, întreruptă, linie-punct.`, why: `O singură vedere nu arată totul: sunt necesare semne diferite pentru a distinge ceea ce se vede, ceea ce este ascuns și axele. Regulile sunt fixate de norma ISO 128.` },
        { id: `scala`, label: `Scări`, x: 50, y: 62, color: `#ef4444`, html: `1:1 naturală, 1:n reducere, n:1 mărire.`, why: `O scară este un <b>raport</b>: același concept ca proporțiile din matematică. Hărțile geografice folosesc același principiu.` },
        { id: `costr`, label: `Construcții geometrice`, x: 80, y: 62, color: `#a855f7`, html: `Mediatoare, bisectoare, perpendiculară, poligoane.`, why: `Funcționează pentru că compasul trasează puncte aflate la <b>aceeași distanță</b> de centru: mediatoarea este locul punctelor egal depărtate de A și de B; în hexagon, latura este egală cu raza pentru că este format din 6 triunghiuri echilaterale.` },
        { id: `cad`, label: `De la foaie la CAD și la 3D`, x: 50, y: 92, color: `#14b8a6`, html: `Astăzi se desenează și la calculator.`, why: `În <b>1963</b>, Ivan Sutherland a creat <i>Sketchpad</i>, primul program de desen pe calculator. Astăzi, programele CAD și imprimantele 3D transformă direct desenul în obiect. Dar regulile sunt întotdeauna cele ale desenului de mână!` }
      ],
      edges: [
        [`dt`, `norme`, `respectă`], [`dt`, `strum`, `folosește`], [`dt`, `fogli`, `pe`], [`norme`, `linee`, `fixează`],
        [`strum`, `costr`, `permit`], [`fogli`, `scala`, `cer`], [`costr`, `cad`, `evoluează în`], [`scala`, `cad`, `și în`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: scări și construcții`,
      questions: [
        { type: `mc`, q: `Scara 2:1 este o scară de…`, options: [`reducere`, `mărire`, `mărime naturală`], answer: 1, explain: `2 cm pe desen = 1 cm în realitate: obiectul apare mai mare.` },
        { type: `num`, q: `Un zid lung de 500 cm desenat la scara 1:100 are lungimea de…`, answer: 5, tol: 0, unit: `cm`, explain: `500 : 100 = 5 cm.` },
        { type: `tf`, q: `În hexagonul regulat înscris, latura este egală cu raza.`, answer: true, explain: `Hexagonul este format din 6 triunghiuri echilaterale cu latura = raza.` }
      ]
    }
  ],
  glossary: [
    { t: `Desen tehnic`, d: `Reprezentare grafică precisă a unui obiect, după reguli comune (norme).` },
    { t: `Norme UNI, EN, ISO`, d: `Reguli italiene, europene și internaționale pentru desene și produse.` },
    { t: `Chenar`, d: `Dreptunghi trasat pe foaie la aproximativ 1 cm de margine.` },
    { t: `Indicator`, d: `Dreptunghi în dreapta jos cu nume, titlu, dată și scară.` },
    { t: `Cotă`, d: `Dimensiune reală scrisă pe desen, în milimetri.` },
    { t: `Scară`, d: `Raportul dintre dimensiunea de pe desen și dimensiunea reală (de ex. 1:10).` },
    { t: `Mediatoarea unui segment`, d: `Dreapta perpendiculară pe segment care trece prin mijlocul lui.` },
    { t: `Bisectoare`, d: `Semidreaptă care împarte un unghi în două unghiuri egale.` },
    { t: `Format A4`, d: `Foaie de 210 × 297 mm; A0 măsoară 1 m².` },
    { t: `CAD`, d: `Computer-Aided Design: desen tehnic la calculator.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Ce linie se folosește pentru axele de simetrie?`, options: [`Continuă groasă`, `Întreruptă`, `Linie-punct subțire`], answer: 2, explain: `Axele se desenează cu linia-punct subțire.` },
      { type: `mc`, q: `Ce unghiuri are echerul de 30°/60°?`, options: [`90°, 45°, 45°`, `90°, 60°, 30°`, `60°, 60°, 60°`], answer: 1, explain: `Este un triunghi dreptunghic cu unghiuri de 90°, 60° și 30°.` },
      { type: `num`, q: `Câți m² măsoară o foaie A0?`, answer: 1, tol: 0, unit: `m²`, explain: `A0 are aria de 1 m² (841 × 1189 mm).` },
      { type: `mc`, q: `Un A3 are mărimea a…`, options: [`două A4`, `jumătate de A4`, `patru A4`], answer: 0, explain: `Fiecare format este dublul celui următor: A3 = 2 × A4.` },
      { type: `num`, q: `O ușă înaltă de 210 cm desenată la scara 1:10 are înălțimea de… cm`, answer: 21, tol: 0, unit: `cm`, explain: `210 : 10 = 21 cm.` },
      { type: `tf`, q: `Cotele indică dimensiunea reală chiar dacă desenul este la scară.`, answer: true, explain: `Se scrie întotdeauna dimensiunea reală a obiectului, în mm.` },
      { type: `mc`, q: `Creionul 2H este…`, options: [`tare, trăsătură deschisă`, `moale, trăsătură închisă`, `mediu`], answer: 0, explain: `H = hard (tare): trăsătură subțire și deschisă.` },
      { type: `order`, q: `Pune în ordine pașii pentru construirea mediatoarei segmentului AB.`, items: [`Pune compasul în A și trasează două arce (deasupra și dedesubt)`, `Cu aceeași deschidere pune compasul în B și trasează două arce`, `Găsește cele două puncte în care se intersectează arcele`, `Unește cele două puncte cu rigla`], explain: `Arcele din A și din B se întâlnesc în puncte egal depărtate de A și de B: dreapta care le unește este mediatoarea.` },
      { type: `text`, q: `Cum se numește semidreapta care împarte un unghi în două părți egale?`, answer: [`bisectoare`, `bisectoarea`], explain: `Bisectoarea.` },
      { type: `mc`, q: `Alăturând cele două echere se poate obține un unghi de…`, options: [`15°`, `20°`, `50°`], answer: 0, explain: `60° − 45° = 15°.` },
      { type: `tf`, q: `Desenul unui timbru poștal la scara 5:1 este mai mic decât timbrul real.`, answer: false, explain: `5:1 este o mărire: desenul este de 5 ori mai mare.` },
      { type: `mc`, q: `Cine a scris „Elementele”, cu construcțiile cu riglă și compas?`, options: [`Pitagora`, `Euclid`, `Leonardo`], answer: 1, explain: `Euclid, în jurul anului 300 î.Hr., la Alexandria (Egipt).` }
    ],
    gen: [[`proportion`, 2]]
  }
});

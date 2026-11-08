TOPIC('ro', {
  id: `m3-tec-assonometria`,
  title: `Axonometria`,
  intro: `O foaie de hârtie este plată, dar obiectele au trei dimensiuni. Cum desenăm un cub, o piesă de mobilier sau o clădire astfel încât să se înțeleagă <b>forma</b> și să se poată și <b>măsura</b> părțile? Cu <b>axonometria</b>: o metodă de desen tehnic care reprezintă într-o singură vedere lățimea, adâncimea și înălțimea. Este limbajul proiectanților, al arhitecților… și al multor jocuri video! 📐🧊`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. De la proiecțiile ortogonale la axonometrie`,
      html: `<p>Cu <b>proiecțiile ortogonale</b> (pe care le-ai studiat deja) un obiect se desenează în <b>trei vederi separate</b>: vedere de sus (plan), vedere din față, vedere laterală. Sunt precise, dar ca să înțelegi forma trebuie să le „asamblezi" în minte.</p>
<p><b>Axonometria</b> (din greacă <i>áxōn</i> = axă și <i>métron</i> = măsură: „măsură de-a lungul axelor") arată în schimb obiectul <b>într-un singur desen</b>, cu trei fețe vizibile deodată.</p>
<p>Este o <b>proiecție paralelă</b>: razele de proiecție sunt toate paralele între ele, ca și cum am privi obiectul de la o distanță infinită. Consecințe importante:</p>
<ul>
<li>dreptele <b>paralele</b> din realitate rămân <b>paralele</b> în desen;</li>
<li>măsurile de-a lungul axelor se pot <b>citi cu rigla</b> (eventual înmulțite cu un coeficient);</li>
<li>obiectele <b>nu se micșorează</b> în depărtare (spre deosebire de <b>perspectivă</b>).</li>
</ul>`
    },
    {
      type: `text`, title: `2. Cele trei axe: x, y, z`,
      html: `<p>Orice axonometrie se construiește pe <b>trei axe</b> care pornesc dintr-o origine O:</p>
<ul>
<li><b>axa z</b>: mereu <b>verticală</b>, pentru <b>înălțimi</b>;</li>
<li><b>axa x</b>: pentru <b>lățimi</b> (lungimi);</li>
<li><b>axa y</b>: pentru <b>adâncimi</b>.</li>
</ul>
<p>Diferitele axonometrii se deosebesc prin două lucruri:</p>
<ol>
<li><b>unghiurile</b> pe care axele x și y le formează cu orizontala;</li>
<li><b>coeficienții de reducere</b>: dacă măsurile de pe o axă se reportează în mărime reală (×1) sau reduse (de exemplu ×½).</li>
</ol>`
    },
    {
      type: `text`, title: `3. Tipurile de axonometrie`,
      html: `<table>
<tr><th>Tip</th><th>Unghiurile axelor x și y</th><th>Reduceri</th><th>Utilizare tipică</th></tr>
<tr><td><b>Izometrică</b></td><td>30° și 30° (cele trei axe formează unghiuri de 120°)</td><td>niciuna: x, y, z în mărime reală</td><td>mecanică, obiecte, design</td></tr>
<tr><td><b>Cavalieră</b></td><td>x orizontală; y la 45° (sau 30°, 60°)</td><td>y redus la ½ (cavalieră „redusă")</td><td>obiecte cu o față importantă, schițe rapide</td></tr>
<tr><td><b>Monometrică (planometrică)</b></td><td>x și y la 30°/60° (sau 45°/45°), între ele la 90°</td><td>niciuna</td><td>arhitectură, amenajări interioare: planul rămâne în mărime reală</td></tr>
</table>
<p><b>Izometrică</b> = „aceeași măsură": toate cele trei axe au aceeași scară. În teorie reducerea exactă ar fi de circa 0,82 pe toate axele, dar în desenul tehnic se folosește <b>izometria unificată</b>, cu măsuri reale: desenul iese doar puțin mai mare.</p>
<p>În <b>cavalieră</b> fața frontală este desenată <b>exact așa cum este</b> (în adevărată mărime): perfectă pentru obiecte cu o față din față complicată, cum ar fi o roată dințată sau o literă.</p>
<p>În <b>monometrică</b> <b>planul</b> (vederea de sus) este în adevărată mărime, doar rotit: se desenează planul unei case și apoi se „ridică" zidurile pe verticală.</p>`
    },
    {
      type: `svg`, title: `Același cub în trei axonometrii`,
      caption: `Cub cu latura 60: izometrică (axe la 30°), cavalieră (adâncimea la 45° redusă la jumătate), monometrică (plan rotit la 30°/60°).`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="100,140 152,170 100,200 48,170" fill="#fde68a"/>
<polygon points="48,170 100,200 100,260 48,230" fill="#f59e0b"/>
<polygon points="100,200 152,170 152,230 100,260" fill="#fbbf24"/>
</g>
<text x="100" y="40" font-size="17" font-weight="bold" fill="#92400e" text-anchor="middle">IZOMETRICĂ</text>
<text x="100" y="62" font-size="13" fill="#334155" text-anchor="middle">30° – 30°, totul ×1</text>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="250,170 310,170 331,149 271,149" fill="#bfdbfe"/>
<polygon points="310,170 331,149 331,209 310,230" fill="#3b82f6"/>
<rect x="250" y="170" width="60" height="60" fill="#60a5fa"/>
</g>
<text x="290" y="40" font-size="17" font-weight="bold" fill="#1e40af" text-anchor="middle">CAVALIERĂ</text>
<text x="290" y="62" font-size="13" fill="#334155" text-anchor="middle">y la 45°, redus ×½</text>
<g stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round">
<polygon points="490,120 542,150 512,202 460,172" fill="#bbf7d0"/>
<polygon points="460,172 512,202 512,262 460,232" fill="#22c55e"/>
<polygon points="512,202 542,150 542,210 512,262" fill="#4ade80"/>
</g>
<text x="490" y="40" font-size="17" font-weight="bold" fill="#166534" text-anchor="middle">MONOMETRICĂ</text>
<text x="490" y="62" font-size="13" fill="#334155" text-anchor="middle">plan 30°/60°, ×1</text>
<line x1="20" y1="290" x2="580" y2="290" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="300" y="312" font-size="13" fill="#475569" text-anchor="middle">dreptele paralele rămân paralele: niciun punct de fugă</text>
</svg>`
    },
    {
      type: `3d`, title: `Rotește solidul și găsește vederea izometrică`,
      scene: `solid`,
      options: { shape: `box`, w: 3, h: 2, d: 2, color: `#f59e0b`, labels: true, shapes: [`cube`, `box`, `prism`, `pyramid`, `cylinder`] },
      caption: `Rotește solidul până vezi trei fețe cu aceeași „importanță": este punctul de vedere al izometriei. Dimensiunile indicate sunt cele care trebuie reportate pe axe.`
    },
    {
      type: `quiz`, title: `Mini-test: recunoaște axonometria`,
      questions: [
        { type: `mc`, q: `În axonometria izometrică axele x și y formează cu orizontala un unghi de…`, options: [`45°`, `30°`, `60°`], answer: 1, explain: `Izometrică: x și y la 30°, z vertical; cele trei axe sunt la 120° una față de alta.` },
        { type: `mc`, q: `În care axonometrie fața frontală este în adevărată mărime?`, options: [`Izometrică`, `Cavalieră`, `Monometrică`], answer: 1, explain: `În cavalieră planul frontal (x-z) este desenat așa cum este.` },
        { type: `tf`, q: `În axonometrie dreptele paralele converg într-un punct de fugă.`, answer: false, explain: `Este o proiecție paralelă: paralelele rămân paralele. Punctul de fugă ține de perspectivă.` }
      ]
    },
    {
      type: `text`, title: `4. Cum se desenează un paralelipiped în izometrie (pas cu pas)`,
      html: `<p>Desenăm o cutie de <b>4 × 3 × 2 cm</b> (lățime × adâncime × înălțime) cu echerele de 30°/60° și rigla.</p>
<ol>
<li><b>Originea</b>: alege un punct O jos, la mijlocul foii.</li>
<li><b>Axele</b>: din O trasează verticala (z) și, cu echerul de 30°, două drepte la 30° deasupra orizontalei: spre dreapta (x) și spre stânga (y).</li>
<li><b>Măsurile</b>: pe axa x reportează 4 cm, pe axa y 3 cm, pe axa z 2 cm.</li>
<li><b>Baza</b>: din capete trasează paralele la axe (paralela la y din punctul de pe x, paralela la x din punctul de pe y): obții rombul bazei.</li>
<li><b>Muchiile verticale</b>: din fiecare vârf vizibil al bazei ridică o verticală de 2 cm.</li>
<li><b>Fața superioară</b>: unește vârfurile cu paralele la axele x și y.</li>
<li><b>Contur final</b>: repasează cu linie <b>groasă</b> muchiile vizibile; muchiile ascunse se fac <b>punctate</b> (întrerupte) sau se omit; șterge liniile de construcție.</li>
</ol>
<p>Regula de aur: <b>se măsoară numai de-a lungul axelor</b> (sau paralel cu ele). Diagonalele și cercurile nu sunt în adevărată mărime!</p>`
    },
    {
      type: `svg`, title: `Construcțiile pas cu pas`,
      caption: `1) axe la 30°; 2) măsuri pe axe și baza; 3) muchii verticale și fața superioară.`,
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fffbeb"/>
<g font-size="16" font-weight="bold" fill="#92400e"><text x="100" y="28" text-anchor="middle">1. Axe</text><text x="300" y="28" text-anchor="middle">2. Baza</text><text x="500" y="28" text-anchor="middle">3. Solidul</text></g>
<g stroke="#64748b" stroke-width="2"><line x1="100" y1="240" x2="100" y2="60"/><line x1="100" y1="240" x2="185" y2="191"/><line x1="100" y1="240" x2="15" y2="191"/></g>
<text x="108" y="70" font-size="16" fill="#dc2626" font-weight="bold">z</text>
<text x="180" y="185" font-size="16" fill="#dc2626" font-weight="bold">x</text>
<text x="15" y="185" font-size="16" fill="#dc2626" font-weight="bold">y</text>
<path d="M140 240 A40 40 0 0 0 135 220" stroke="#2563eb" stroke-width="2" fill="none"/>
<line x1="100" y1="240" x2="185" y2="240" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="145" y="258" font-size="14" fill="#2563eb">30°</text>
<g stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 3"><line x1="300" y1="250" x2="390" y2="198"/><line x1="300" y1="250" x2="225" y2="207"/><line x1="300" y1="250" x2="300" y2="120"/></g>
<polygon points="300,250 369,210 317,180 248,220" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="345" y="248" font-size="14" fill="#b45309">4 cm</text>
<text x="240" y="250" font-size="14" fill="#b45309">3 cm</text>
<polygon points="500,240 569,200 569,165 500,205" fill="#f59e0b" stroke="#1e293b" stroke-width="3"/>
<polygon points="500,240 448,210 448,175 500,205" fill="#fbbf24" stroke="#1e293b" stroke-width="3"/>
<polygon points="500,205 569,165 517,135 448,175" fill="#fef3c7" stroke="#1e293b" stroke-width="3"/>
<polyline points="448,210 517,170 569,200" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="517" y1="170" x2="517" y2="135" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="580" y="190" font-size="14" fill="#1e293b">2 cm</text>
</svg>`
    },
    {
      type: `example`, title: `Exemplu practic: raftul din camera ta`,
      html: `<p>Vrei să faci un raft de <b>80 × 20 × 2 cm</b>. Doar cu proiecțiile ortogonale tâmplarul ar înțelege, dar poate părinții tăi nu. Desenându-l în <b>izometrie</b> la scara 1:10 (8 cm pe axa x, 2 cm pe y, 0,2 cm pe z) se vede imediat cum arată și se pot scrie <b>cotele</b> de-a lungul muchiilor.</p>
<p>Dacă raftul are o decorație cioplită în față, e mai potrivită <b>cavaliera</b>: fața frontală rămâne în adevărată mărime și decorația se desenează ușor.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: planul casei în monometrică`,
      html: `<p>Ai planul camerei tale la scara 1:50. Ca să o arăți „mobilată":</p>
<ol>
<li>rotești planul cu 30° (sau 45°) și îl copiezi întocmai: măsurile rămân reale;</li>
<li>din fiecare colț ridici pereții pe verticală, de exemplu 2,70 m ➜ 5,4 cm la scara 1:50;</li>
<li>desenezi patul și biroul ca paralelipipede, ridicând mereu înălțimile pe verticală.</li>
</ol>
<p>Arhitecții folosesc adesea această vedere „din zbor de pasăre", numită și <b>desen explodat</b> când părțile sunt separate.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… jocurile video folosesc axonometria?`,
      html: `<p>Multe jocuri de strategie și de simulare (precum clasicele <i>SimCity 2000</i> sau <i>Age of Empires</i>) folosesc o vedere numită „izometrică". De fapt, pe pixeli se folosește aproape mereu o <b>dimetrică 2:1</b>: liniile urcă 1 pixel la fiecare 2 pe orizontală (un unghi de circa 26,6° în loc de 30°), pentru că așa liniile de pe ecran ies curate, fără „trepte" neregulate. Ca în axonometrie, obiectele îndepărtate <b>nu devin mai mici</b>!</p>`
    },
    {
      type: `curiosity`, title: `Știai că… China desena în axonometrie cu secole în urmă?`,
      html: `<p>În sulurile pictate chinezești, ca celebrul <i>Pe malul râului în timpul sărbătorii Qingming</i> (secolul al XII-lea), casele și podurile sunt desenate cu linii paralele oblice: este un fel de <b>axonometrie</b>, care îți permite să „derulezi" orașul fără un punct de vedere fix. În Europa, izometria a fost descrisă ca metodă științifică de profesorul englez <b>William Farish</b> în <b>1822</b>, pentru a desena mașini.</p>`
    },
    {
      type: `remember`, title: `De ținut minte`,
      html: `<ul>
<li>Axonometria = proiecție <b>paralelă</b> pe trei axe (x lățime, y adâncime, z înălțime verticală).</li>
<li><b>Izometrică</b>: x și y la 30°, toate măsurile reale.</li>
<li><b>Cavalieră</b>: fața frontală reală, adâncimea la 45° redusă la ½.</li>
<li><b>Monometrică</b>: plan real rotit (30°/60° sau 45°), înălțimi reale.</li>
<li>Se măsoară <b>numai paralel cu axele</b>; muchiile vizibile groase, cele ascunse punctate.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Axonometria e mai ușor de văzut decât de explicat. Încearcă aceste abordări.`,
      tabs: [
        {
          label: `🧊 Rotește cubul 3D`,
          html: `<p>Ia cubul și rotește-l astfel încât <b>muchia verticală cea mai apropiată</b> să fie în centru și să vezi trei fețe egale (sus, stânga, dreapta). Aceea este exact vederea <b>izometriei</b>: nicio față nu este „mai importantă" decât celelalte.</p>`,
          scene: `solid`,
          options: { shape: `cube`, color: `#3b82f6`, labels: true }
        },
        {
          label: `📄 Hârtie izometrică`,
          html: `<p>În multe țări (Regatul Unit, Japonia, SUA) la școală se folosește <b>hârtia izometrică</b>: o foaie cu puncte așezate în triunghiuri. E de ajuns să unești punctele pe cele trei direcții (verticală și două la 30°) și desenul iese de la sine, fără echere!</p>
<p>Încearcă: un cub cu latura 1 ocupă un hexagon format din 6 triunghiuri mici.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<g fill="#94a3b8">
<circle cx="100" cy="30" r="3"/><circle cx="100" cy="70" r="3"/><circle cx="100" cy="110" r="3"/><circle cx="100" cy="150" r="3"/><circle cx="100" cy="190" r="3"/><circle cx="100" cy="230" r="3"/>
<circle cx="135" cy="50" r="3"/><circle cx="135" cy="90" r="3"/><circle cx="135" cy="130" r="3"/><circle cx="135" cy="170" r="3"/><circle cx="135" cy="210" r="3"/>
<circle cx="170" cy="30" r="3"/><circle cx="170" cy="70" r="3"/><circle cx="170" cy="110" r="3"/><circle cx="170" cy="150" r="3"/><circle cx="170" cy="190" r="3"/><circle cx="170" cy="230" r="3"/>
<circle cx="205" cy="50" r="3"/><circle cx="205" cy="90" r="3"/><circle cx="205" cy="130" r="3"/><circle cx="205" cy="170" r="3"/><circle cx="205" cy="210" r="3"/>
<circle cx="240" cy="30" r="3"/><circle cx="240" cy="70" r="3"/><circle cx="240" cy="110" r="3"/><circle cx="240" cy="150" r="3"/><circle cx="240" cy="190" r="3"/><circle cx="240" cy="230" r="3"/>
<circle cx="275" cy="50" r="3"/><circle cx="275" cy="90" r="3"/><circle cx="275" cy="130" r="3"/><circle cx="275" cy="170" r="3"/><circle cx="275" cy="210" r="3"/>
<circle cx="65" cy="50" r="3"/><circle cx="65" cy="90" r="3"/><circle cx="65" cy="130" r="3"/><circle cx="65" cy="170" r="3"/><circle cx="65" cy="210" r="3"/>
</g>
<g stroke="#1e293b" stroke-width="3" stroke-linejoin="round">
<polygon points="170,70 240,110 170,150 100,110" fill="#fde68a"/>
<polygon points="100,110 170,150 170,230 100,190" fill="#f59e0b"/>
<polygon points="170,150 240,110 240,190 170,230" fill="#fbbf24"/>
</g>
<text x="440" y="100" font-size="17" fill="#1e293b" text-anchor="middle" font-weight="bold">Unește punctele</text>
<text x="440" y="130" font-size="15" fill="#334155" text-anchor="middle">numai pe 3 direcții:</text>
<text x="440" y="160" font-size="15" fill="#334155" text-anchor="middle">| verticală, / și \ la 30°</text>
</svg>`
        },
        {
          label: `🔦 Umbra la soare`,
          html: `<p>Soarele este atât de departe, încât razele lui ajung <b>paralele</b>. Umbra unui obiect pe podea este deci o <b>proiecție paralelă</b>, exact ca axonometria! Dacă muți la soare un cub din sârmă, umbra lui își schimbă forma, dar liniile paralele rămân mereu paralele.</p>
<p>Cu un bec aproape, în schimb, razele pornesc dintr-un punct: umbra se lărgește, ca în <b>perspectivă</b>.</p>`
        },
        {
          label: `🏷️ Numește axele`,
          html: `<p>Atinge punctele din desen și alege eticheta potrivită.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><g stroke="#1e293b" stroke-width="3"><polygon points="200,90 290,140 200,190 110,140" fill="#bfdbfe"/><polygon points="110,140 200,190 200,270 110,220" fill="#3b82f6"/><polygon points="200,190 290,140 290,220 200,270" fill="#60a5fa"/></g><g stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"><line x1="200" y1="270" x2="200" y2="30"/><line x1="200" y1="270" x2="360" y2="178"/><line x1="200" y1="270" x2="40" y2="178"/></g></svg>`,
            spots: [
              { x: 200, y: 40, label: `Axa z (înălțime)` },
              { x: 350, y: 184, label: `Axa x (lățime)` },
              { x: 50, y: 184, label: `Axa y (adâncime)` },
              { x: 200, y: 270, label: `Originea O` },
              { x: 200, y: 140, label: `Fața superioară` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: axonometria`,
      nodes: [
        { id: `rapp`, label: `Reprezentarea 3D`, x: 50, y: 6, color: `#64748b`, html: `A desena obiecte tridimensionale pe o foaie plată.`, why: `Orice desen pe hârtie pierde o dimensiune. <b>Geometria descriptivă</b>, întemeiată de <b>Gaspard Monge</b> (1795), studiază cum să o faci fără să pierzi informații.` },
        { id: `orto`, label: `Proiecții ortogonale`, x: 15, y: 30, color: `#0ea5e9`, html: `Trei vederi separate: plan, față, lateral.`, why: `Metodă sistematizată de Monge pentru fortificațiile militare franceze: precisă, dar puțin intuitivă.` },
        { id: `ass`, label: `Axonometria`, x: 50, y: 30, color: `#f59e0b`, html: `O singură vedere cu trei axe și măsuri care se pot citi.`, why: `Apare pentru a avea laolaltă precizia măsurilor și imediatețea formei. Izometria a fost formalizată de William Farish (Cambridge, 1822).` },
        { id: `prosp`, label: `Perspectiva`, x: 85, y: 30, color: `#a855f7`, html: `Cum vede ochiul: paralelele converg în punctele de fugă.`, why: `Redescoperită de <b>Filippo Brunelleschi</b> la Florența în jurul anului 1415 și descrisă de Leon Battista Alberti în 1435. Realistă, dar măsurile nu se citesc direct.` },
        { id: `par`, label: `Proiecție paralelă`, x: 50, y: 52, color: `#22c55e`, html: `Raze toate paralele: niciun punct de fugă.`, why: `E ca și cum ai privi de la distanță infinită. O transformare paralelă păstrează paralelismul și rapoartele dintre segmentele paralele: de aceea se poate măsura cu rigla.` },
        { id: `iso`, label: `Izometrică`, x: 15, y: 78, color: `#ef4444`, html: `x și y la 30°, totul în măsură reală.`, why: `Dacă privești un cub de-a lungul diagonalei sale, cele trei muchii apar egale și la 120° între ele. Factorul teoretic este √(2/3) ≈ 0,82; se folosește 1 pentru comoditate (izometria unificată).` },
        { id: `cav`, label: `Cavalieră`, x: 50, y: 78, color: `#3b82f6`, html: `Fața frontală reală, adâncimea la 45° ×½.`, why: `Numele vine de la „cavalier", movila din fortificații de pe care se vedea totul de sus. Reducerea la ½ face solidul să pară mai natural.` },
        { id: `mono`, label: `Monometrică`, x: 85, y: 78, color: `#16a34a`, html: `Plan real rotit, înălțimi verticale.`, why: `Foarte folosită de arhitecții secolului XX (de exemplu în mișcarea De Stijl și la Bauhaus) pentru că planul rămâne măsurabil și zidurile se „ridică".` }
      ],
      edges: [
        [`rapp`, `orto`, `metodă`], [`rapp`, `ass`, `metodă`], [`rapp`, `prosp`, `metodă`], [`ass`, `par`, `este o`],
        [`par`, `iso`, `tip`], [`par`, `cav`, `tip`], [`par`, `mono`, `tip`], [`orto`, `par`, `de asemenea`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: construiește`,
      questions: [
        { type: `num`, q: `În cavaleră redusă, o adâncime reală de 6 cm se desenează cu lungimea de…`, answer: 3, tol: 0, unit: `cm`, explain: `Coeficient ½: 6 × 0,5 = 3 cm.` },
        { type: `mc`, q: `Cum se desenează muchiile ascunse?`, options: [`Cu linie groasă continuă`, `Punctate (sau nu se desenează)`, `Cu roșu`], answer: 1, explain: `Convenție a desenului tehnic: linii întrerupte pentru muchiile ascunse.` },
        { type: `tf`, q: `În izometrie se poate măsura cu rigla o diagonală a unei fețe.`, answer: false, explain: `Se măsoară numai pe direcții paralele cu axele.` }
      ]
    }
  ],
  glossary: [
    { t: `Axonometrie`, d: `Metodă de reprezentare prin proiecție paralelă pe trei axe.` },
    { t: `Axele x, y, z`, d: `Direcțiile lățimii, adâncimii și înălțimii (z mereu vertical).` },
    { t: `Izometrică`, d: `Axonometrie cu axele x și y la 30° și măsuri reale pe toate axele.` },
    { t: `Cavalieră`, d: `Axonometrie cu fața frontală în adevărată mărime și adâncime oblică redusă.` },
    { t: `Monometrică`, d: `Axonometrie cu planul în adevărată mărime rotit și înălțimi verticale.` },
    { t: `Coeficient de reducere`, d: `Număr cu care se înmulțesc măsurile de pe o axă (de ex. ½).` },
    { t: `Perspectivă`, d: `Reprezentare cu puncte de fugă, cum vede ochiul.` },
    { t: `Proiecție paralelă`, d: `Proiecție cu razele toate paralele între ele.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `„Axonometrie" înseamnă…`, options: [`măsură de-a lungul axelor`, `desen în mână liberă`, `vedere de sus`], answer: 0, explain: `Din greacă áxōn (axă) + métron (măsură).` },
      { type: `mc`, q: `Axa z reprezintă…`, options: [`adâncimea`, `înălțimea`, `lățimea`], answer: 1, explain: `z este mereu verticală: înălțimile.` },
      { type: `mc`, q: `În izometrie cele trei axe formează între ele unghiuri de…`, options: [`90°`, `120°`, `45°`], answer: 1, explain: `360° : 3 = 120°.` },
      { type: `num`, q: `Un cub cu latura de 5 cm în izometrie unificată: cât de lungă este muchia desenată pe axa x?`, answer: 5, tol: 0, unit: `cm`, explain: `În izometria unificată măsurile sunt reale.` },
      { type: `num`, q: `În cavaleră redusă (½), o cutie adâncă de 12 cm: lungimea desenată pe axa y?`, answer: 6, tol: 0, unit: `cm`, explain: `12 × ½ = 6 cm.` },
      { type: `tf`, q: `În axonometrie obiectele îndepărtate se desenează mai mici.`, answer: false, explain: `Asta se întâmplă în perspectivă, nu în axonometrie.` },
      { type: `tf`, q: `În monometrică planul este în adevărată mărime.`, answer: true, explain: `Planul este doar rotit (30°/60° sau 45°).` },
      { type: `order`, q: `Pune în ordine pașii pentru desenarea unui paralelipiped în izometrie.`, items: [`Fixează originea și trasează axele`, `Reportează măsurile pe axe`, `Desenează baza cu paralele la axe`, `Ridică muchiile verticale`, `Închide fața superioară`, `Repasează muchiile vizibile`], explain: `Întâi axele și măsurile, apoi baza, înălțimile, fața superioară și conturul final.` },
      { type: `mc`, q: `Pentru un obiect cu o față din față foarte decorată se potrivește…`, options: [`cavaliera`, `izometrica`, `perspectiva centrală`], answer: 0, explain: `Cavaliera păstrează fața frontală în adevărată mărime.` },
      { type: `text`, q: `Cum se numește metoda cu puncte de fugă, redescoperită de Brunelleschi?`, answer: [`perspectiva`, `perspectivă`], explain: `Perspectiva, folosită din Renaștere încoace.` },
      { type: `mc`, q: `Cine a descris izometria ca metodă științifică în 1822?`, options: [`Leonardo da Vinci`, `William Farish`, `Gaspard Monge`], answer: 1, explain: `William Farish, profesor la Cambridge.` }
    ]
  }
});

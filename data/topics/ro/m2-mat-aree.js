TOPIC('ro', {
  id: `m2-mat-aree`,
  title: `Ariile poligoanelor`,
  intro: `Câte plăci de gresie sunt necesare pentru pardoseală? Câtă vopsea pentru un perete? Câtă iarbă pentru un teren de fotbal? Pentru a răspunde avem nevoie de <b>arie</b>. Descoperim de unde vin formulele pentru dreptunghi, pătrat, paralelogram, triunghi, romb, trapez și poligoane regulate și cum să le folosim și „invers”, cu <b>formulele inverse</b>.`,
  minutes: 55,
  sections: [
    {
      type: `text`,
      title: `Suprafață, arie și echivalență`,
      html: `<p><b>Suprafața</b> este partea de plan închisă de un poligon; <b>aria</b> este <b>măsura</b> suprafeței, adică de câte ori conține un pătrățel ales ca unitate.</p>
<p>Unitatea principală de măsură este <b>metrul pătrat (m²)</b>: un pătrat cu latura de 1 m. Fiecare unitate este de <b>100 de ori</b> mai mare decât următoarea:</p>
<p style="text-align:center"><b>km² → hm² → dam² → m² → dm² → cm² → mm²</b> &nbsp; (× 100 la fiecare pas spre dreapta)</p>
<p>Exemplu: 1 m² = 100 dm² = 10 000 cm². În agricultură se folosesc <b>hectarul</b> (ha = 1 hm² = 10 000 m²) și <b>arul</b> (a = 100 m²).</p>
<p>Două figuri sunt <b>echivalente</b> (au aceeași întindere) dacă au <b>aceeași arie</b>, chiar dacă au forme diferite. Două figuri formate din aceleași piese așezate diferit (<b>echidescompozabile</b>) sunt întotdeauna echivalente: este ideea pe care se bazează toate formulele!</p>`
    },
    {
      type: `text`,
      title: `Dreptunghiul și pătratul`,
      html: `<p><b>Dreptunghiul</b>: într-un dreptunghi cu baza de 5 cm și înălțimea de 3 cm încap 3 rânduri de câte 5 pătrățele de 1 cm²: 5 × 3 = 15 cm².</p>
<p style="text-align:center;font-size:1.15em"><b>A = b × h</b> &nbsp;&nbsp; formule inverse: <b>b = A : h</b> &nbsp; <b>h = A : b</b></p>
<p><b>Pătratul</b>: este un dreptunghi cu baza și înălțimea egale.</p>
<p style="text-align:center;font-size:1.15em"><b>A = l × l = l²</b> &nbsp;&nbsp; formulă inversă: <b>l = √A</b></p>
<p>Pătratul poate fi văzut și ca un romb: <b>A = d² : 2</b> (d = diagonala), deci <b>d = √(2 × A)</b>.</p>`
    },
    {
      type: `widget`,
      title: `Aria dreptunghiului pe pătrățele`,
      widget: `areaGrid`,
      options: { w: 5, h: 3, max: 12 },
      caption: `Schimbă baza și înălțimea și numără pătrățelele: aria este întotdeauna bază × înălțime.`
    },
    {
      type: `text`,
      title: `Paralelogramul și triunghiul`,
      html: `<p><b>Paralelogramul</b>: dacă tai triunghiul din stânga și îl muți în dreapta, obții un <b>dreptunghi</b> cu aceeași bază și aceeași înălțime (sunt echidescompozabile):</p>
<p style="text-align:center;font-size:1.15em"><b>A = b × h</b> &nbsp;&nbsp; <b>b = A : h</b> &nbsp; <b>h = A : b</b></p>
<p><b>Triunghiul</b>: două triunghiuri egale, alăturate, formează un paralelogram. Deci triunghiul este <b>jumătate</b> din paralelogramul cu aceeași bază și înălțime:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (b × h) : 2</b> &nbsp;&nbsp; <b>b = (2 × A) : h</b> &nbsp; <b>h = (2 × A) : b</b></p>
<p>În <b>triunghiul dreptunghic</b>, catetele sunt baza și înălțimea: A = (c₁ × c₂) : 2. Ține minte: înălțimea este întotdeauna <b>perpendiculară</b> pe bază și poate cădea și <b>în afara</b> triunghiului (triunghiuri obtuzunghice).</p>`
    },
    {
      type: `svg`,
      title: `De la paralelogram la dreptunghi, de la triunghi la paralelogram`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<polygon points="40,130 100,40 260,40 200,130" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="40,130 100,40 100,130" fill="#f97316" stroke="#92400e" stroke-width="3"/>
<line x1="100" y1="40" x2="100" y2="130" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="150" y="155" font-size="15" text-anchor="middle" fill="#78350f">baza b</text>
<text x="108" y="95" font-size="15" fill="#dc2626">h</text>
<text x="290" y="95" font-size="34" fill="#1f2937">→</text>
<rect x="340" y="40" width="160" height="90" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<polygon points="440,130 500,40 500,130" fill="#f97316" stroke="#92400e" stroke-width="3"/>
<text x="420" y="155" font-size="15" text-anchor="middle" fill="#78350f">dreptunghi b × h</text>
<polygon points="60,270 140,180 220,270" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="140" y="292" font-size="15" text-anchor="middle" fill="#1e3a8a">triunghi</text>
<text x="290" y="235" font-size="34" fill="#1f2937">→</text>
<polygon points="340,270 420,180 500,270" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<polygon points="420,180 580,180 500,270" fill="#a5b4fc" stroke="#1e3a8a" stroke-width="3"/>
<text x="460" y="292" font-size="15" text-anchor="middle" fill="#1e3a8a">2 triunghiuri = paralelogram</text>
</svg>`,
      caption: `Mutând o piesă, paralelogramul devine dreptunghi; dublând un triunghi se obține un paralelogram.`
    },
    {
      type: `quiz`,
      title: `Mini-test: primele formule`,
      questions: [
        { type: `num`, q: `Un dreptunghi are baza de 12 cm și înălțimea de 7 cm. Aria?`, answer: 84, unit: `cm²`, explain: `12 × 7 = 84 cm².` },
        { type: `num`, q: `Un triunghi are aria de 30 cm² și baza de 10 cm. Cât măsoară înălțimea?`, answer: 6, unit: `cm`, explain: `h = 2 × 30 : 10 = 6 cm.` },
        { type: `num`, q: `Câți cm² sunt 3 dm²?`, answer: 300, unit: `cm²`, explain: `1 dm² = 100 cm² → 3 × 100 = 300 cm².` }
      ]
    },
    {
      type: `text`,
      title: `Rombul și trapezul`,
      html: `<p><b>Rombul</b>: este cuprins într-un dreptunghi care are ca laturi cele două diagonale și ocupă exact <b>jumătate</b> din el:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (D × d) : 2</b> &nbsp;&nbsp; <b>D = (2 × A) : d</b> &nbsp; <b>d = (2 × A) : D</b></p>
<p>Rombul este și un paralelogram, deci este valabilă și A = latură × înălțime. (Formula cu diagonalele este valabilă pentru orice patrulater cu diagonalele perpendiculare, ca <b>zmeul</b>/deltoidul.)</p>
<p><b>Trapezul</b>: două trapeze egale, unul răsturnat, formează un paralelogram cu baza (B + b) și înălțimea h:</p>
<p style="text-align:center;font-size:1.15em"><b>A = (B + b) × h : 2</b> &nbsp;&nbsp; <b>h = (2 × A) : (B + b)</b> &nbsp; <b>B + b = (2 × A) : h</b></p>`
    },
    {
      type: `svg`,
      title: `Rombul și trapezul dublat`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdfa"/>
<rect x="30" y="40" width="220" height="160" fill="#ccfbf1" stroke="#0f766e" stroke-width="2" stroke-dasharray="8 5"/>
<polygon points="140,40 250,120 140,200 30,120" fill="#14b8a6" stroke="#0f766e" stroke-width="3"/>
<line x1="30" y1="120" x2="250" y2="120" stroke="#fff" stroke-width="3"/>
<line x1="140" y1="40" x2="140" y2="200" stroke="#fff" stroke-width="3"/>
<text x="200" y="113" font-size="16" fill="#fff" font-weight="bold">D</text>
<text x="146" y="70" font-size="16" fill="#fff" font-weight="bold">d</text>
<text x="140" y="230" font-size="16" text-anchor="middle" fill="#134e4a" font-weight="bold">romb = jumătate din dreptunghiul D × d</text>
<polygon points="270,200 310,90 410,90 440,200" fill="#a78bfa" stroke="#5b21b6" stroke-width="3"/>
<polygon points="410,90 580,90 540,200 440,200" fill="#ddd6fe" stroke="#5b21b6" stroke-width="3"/>
<text x="360" y="82" font-size="15" text-anchor="middle" fill="#4c1d95">b</text>
<text x="355" y="220" font-size="15" text-anchor="middle" fill="#4c1d95">B</text>
<text x="495" y="82" font-size="15" text-anchor="middle" fill="#4c1d95">B</text>
<text x="490" y="220" font-size="15" text-anchor="middle" fill="#4c1d95">b</text>
<text x="425" y="250" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">2 trapeze = paralelogram</text>
<text x="425" y="272" font-size="16" text-anchor="middle" fill="#4c1d95" font-weight="bold">cu baza B + b</text>
</svg>`,
      caption: `Rombul ocupă jumătate din dreptunghiul construit pe diagonale; două trapeze egale formează un paralelogram.`
    },
    {
      type: `text`,
      title: `Poligoane regulate și poligoane oarecare`,
      html: `<p>Un <b>poligon regulat</b> (laturi și unghiuri toate egale) se poate împărți în multe <b>triunghiuri egale</b> cu vârful în centru. Înălțimea fiecărui triunghi este <b>apotema</b> (a), raza cercului înscris.</p>
<p style="text-align:center;font-size:1.15em"><b>A = (2p × a) : 2 = p × a</b> &nbsp; (2p = perimetrul, p = semiperimetrul)</p>
<p>Formule inverse: <b>a = (2 × A) : 2p</b> &nbsp; <b>2p = (2 × A) : a</b>.</p>
<p>În orice poligon regulat raportul apotemă/latură este un <b>număr fix</b> (f): a = l × f.</p>
<table>
<tr><th>Poligon</th><td>Triunghi echilateral</td><td>Pătrat</td><td>Pentagon</td><td>Hexagon</td><td>Octogon</td></tr>
<tr><th>f (a = l·f)</th><td>0,289</td><td>0,5</td><td>0,688</td><td>0,866</td><td>1,207</td></tr>
</table>
<p><b>Poligoane neregulate</b>: se <b>descompun</b> în figuri cunoscute (dreptunghiuri, triunghiuri, trapeze) și se adună ariile; sau se calculează aria unei figuri mai mari și se <b>scad</b> piesele în plus.</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: placăm bucătăria cu gresie`,
      html: `<p>O bucătărie dreptunghiulară măsoară <b>4,5 m × 3,2 m</b>. Plăcile sunt pătrate, cu latura de <b>40 cm</b>, iar o cutie conține 10. Câte cutii sunt necesare?</p>
<ol>
<li>Aria pardoselii: 4,5 × 3,2 = <b>14,4 m²</b>.</li>
<li>Aria unei plăci: 0,4 × 0,4 = <b>0,16 m²</b>.</li>
<li>Numărul de plăci: 14,4 : 0,16 = <b>90</b>.</li>
<li>Cutii: 90 : 10 = <b>9</b> (în realitate se cumpără una în plus pentru tăieturi și deșeuri!).</li>
</ol>`
    },
    {
      type: `example`,
      title: `Exemplu practic: un teren neregulat`,
      html: `<p>O grădină de legume are forma unui <b>trapez dreptunghic</b> cu bazele de 18 m și 12 m și înălțimea de 10 m. În interior se află un bazin pătrat cu latura de 2 m, care nu se cultivă.</p>
<ol>
<li>Aria trapezului: (18 + 12) × 10 : 2 = <b>150 m²</b>.</li>
<li>Aria bazinului: 2² = <b>4 m²</b>.</li>
<li>Aria cultivabilă: 150 − 4 = <b>146 m²</b>.</li>
</ol>
<p>Dacă un sac de îngrășământ ajunge pentru 25 m², sunt necesari 146 : 25 = 5,84 → <b>6 saci</b>.</p>
<p><b>Formula inversă</b>: dacă am ști că grădina are 150 m² cu bazele de 18 și 12 m, înălțimea ar fi h = 2 × 150 : (18 + 12) = 300 : 30 = <b>10 m</b>.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Ariile de pe Nil`,
      html: `<p>Cuvântul <b>geometrie</b> înseamnă „măsurarea pământului”. Potrivit istoricului grec <b>Herodot</b>, s-a născut în Egipt: în fiecare an, revărsările <b>Nilului</b> ștergeau hotarele câmpurilor, iar „întinzătorii de frânghii” trebuiau să le măsoare din nou pentru a calcula impozitele. <b>Papirusul Rhind</b> (circa 1650 î.Hr.) conține probleme despre aria triunghiurilor, a trapezelor și chiar a cercului.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Formula lui Pick`,
      html: `<p>În <b>1899</b>, matematicianul austriac <b>Georg Pick</b> a descoperit o formulă surprinzătoare pentru poligoanele cu vârfurile în punctele unei rețele pătrate: <b>A = I + B/2 − 1</b>, unde <b>I</b> este numărul de puncte <b>interioare</b> și <b>B</b> numărul de puncte de pe <b>contur</b>. E suficient să numeri punctele! Încearcă pe un pătrat 2 × 2: I = 1, B = 8 → A = 1 + 4 − 1 = 4 ✓.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege ariile`,
      intro: `Formulele se pot descoperi tăind, mutând și recompunând. Iată câteva căi diferite.`,
      tabs: [
        {
          label: `✂️ Taie și recompune (China)`,
          html: `<p>În China antică, textul <b>„Cele nouă capitole despre arta matematică”</b> (circa secolele II–I î.Hr.) și comentatorul <b>Liu Hui</b> (secolul al III-lea) foloseau <b>principiul „înăuntru-afară”</b> (<i>chu ru xiang bu</i>): o figură se taie în piese care se mută pentru a forma un dreptunghi. Aria nu se schimbă, pentru că piesele sunt aceleași! Este exact ceea ce facem cu paralelogramul, triunghiul și trapezul.</p>`
        },
        {
          label: `🧩 Tangramul`,
          html: `<p><b>Tangramul</b> este un joc de răbdare chinezesc: un pătrat tăiat în <b>7 piese</b> (5 triunghiuri, 1 pătrat, 1 paralelogram). Cu aceleași 7 piese poți face o pisică, o barcă, o casă… și toate aceste figuri au <b>aceeași arie</b> ca pătratul inițial: sunt <b>echidescompozabile</b>, deci echivalente.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ffffff"/>
<polygon points="40,20 260,20 150,130" fill="#ef4444" stroke="#fff" stroke-width="3"/>
<polygon points="40,20 150,130 40,240" fill="#3b82f6" stroke="#fff" stroke-width="3"/>
<polygon points="260,20 260,130 205,75" fill="#facc15" stroke="#fff" stroke-width="3"/>
<polygon points="205,75 260,130 205,185 150,130" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<polygon points="150,130 205,185 95,185" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<polygon points="260,130 260,240 150,240" fill="#f97316" stroke="#fff" stroke-width="3"/>
<polygon points="40,240 95,185 205,185 150,240" fill="#14b8a6" stroke="#fff" stroke-width="3"/>
<text x="300" y="70" font-size="18" fill="#1f2937" font-weight="bold">7 piese, 1 pătrat</text>
<text x="300" y="110" font-size="16" fill="#334155">2 triunghiuri mari = 1/2</text>
<text x="300" y="138" font-size="16" fill="#334155">1 triunghi mijlociu = 1/8</text>
<text x="300" y="166" font-size="16" fill="#334155">2 triunghiuri mici = 1/8</text>
<text x="300" y="194" font-size="16" fill="#334155">1 pătrățel = 1/8</text>
<text x="300" y="222" font-size="16" fill="#334155">1 paralelogram = 1/8</text>
<text x="300" y="256" font-size="16" fill="#be185d" font-weight="bold">Total = 1 pătrat întreg</text>
</svg>`
        },
        {
          label: `🧊 Cubulețe în 3D`,
          html: `<p>Aria dreptunghiului este numărul de pătrățele în rânduri și coloane: aici vezi <b>4 × 6 = 24</b> (gândește-te la fața de sus a cubulețelor). Schimbă cursoarele: baza și înălțimea se înmulțesc mereu. Și dacă pui un alt strat de cubulețe deasupra? Treci de la <b>arie</b> la <b>volum</b>!</p>`,
          scene: `blocks`,
          options: { mode: `array`, a: 4, b: 6 }
        },
        {
          label: `🔺 Prisma hexagonală`,
          html: `<p>Rotește prisma: baza ei este un <b>hexagon regulat</b>. Dacă te uiți de sus, vezi că hexagonul se împarte în <b>6 triunghiuri echilaterale</b> egale, cu vârful în centru. Înălțimea fiecăruia este <b>apotema</b>: de aceea A = perimetru × apotemă : 2 (6 triunghiuri × latură × apotemă : 2).</p>`,
          scene: `solid`,
          options: { shape: `prism`, n: 6, r: 1, h: 0.6, color: `#f59e0b`, labels: true }
        },
        {
          label: `🃏 Formule pe de rost`,
          html: `<p>Potrivește fiecare figură cu formula ei.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Dreptunghi`, `b × h`],
              [`Pătrat`, `l²`],
              [`Triunghi`, `b × h : 2`],
              [`Romb`, `D × d : 2`],
              [`Trapez`, `(B + b) × h : 2`],
              [`Poligon regulat`, `2p × a : 2`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta ariilor`,
      nodes: [
        { id: `area`, label: `Aria`, x: 50, y: 6, color: `#0f172a`, html: `Măsura suprafeței în unități pătrate.`, why: `A măsura o arie înseamnă a număra câte unități pătrate încap înăuntru. Sistemul metric zecimal, cu m², s-a născut în Franța în <b>1795</b>.` },
        { id: `equi`, label: `Echivalență`, x: 50, y: 24, color: `#7c3aed`, html: `Figuri diferite cu aceeași arie.`, why: `Se bazează pe o idee pe care Euclid o pune printre „noțiunile comune”: <i>lucrurile care se suprapun sunt egale</i> și <i>întregul este mai mare decât partea</i>. Dacă piesele se mută fără să se piardă, aria rămâne aceeași.` },
        { id: `rett`, label: `Dreptunghi`, x: 18, y: 42, color: `#2563eb`, html: `A = b × h.`, why: `Este figura „de bază” pentru că se umple exact cu rânduri de pătrățele: b pătrățele pe h rânduri. Toate celelalte formule se obțin transformând figurile în dreptunghiuri.` },
        { id: `parall`, label: `Paralelogram`, x: 42, y: 50, color: `#0891b2`, html: `A = b × h.`, why: `Tăind un triunghi de pe o parte și mutându-l pe cealaltă, devine un dreptunghi cu aceeași bază și înălțime (Euclid, Elemente I, 35: paralelogramele cu aceeași bază și între aceleași paralele sunt echivalente).` },
        { id: `tri`, label: `Triunghi`, x: 66, y: 46, color: `#16a34a`, html: `A = b × h : 2.`, why: `Două triunghiuri egale formează un paralelogram (Euclid I, 41). De aceea apare „: 2”. Orice poligon se poate împărți în triunghiuri: de aceea triunghiul este „cărămida” geometriei.` },
        { id: `rombo`, label: `Romb`, x: 84, y: 66, color: `#db2777`, html: `A = D × d : 2.`, why: `Diagonalele sunt perpendiculare și împart rombul în 4 triunghiuri dreptunghice egale; dreptunghiul construit pe diagonale conține 8.` },
        { id: `trap`, label: `Trapez`, x: 60, y: 76, color: `#ca8a04`, html: `A = (B + b) × h : 2.`, why: `Două trapeze egale, unul răsturnat, formează un paralelogram cu baza B + b. Această formulă era deja cunoscută <b>egiptenilor</b> și <b>babilonienilor</b> pentru măsurarea câmpurilor.` },
        { id: `reg`, label: `Poligoane regulate`, x: 30, y: 76, color: `#ea580c`, html: `A = 2p × a : 2; a = l × f.`, why: `Se împart în n triunghiuri egale cu înălțimea egală cu apotema. Numărul fix f depinde doar de formă (de unghiuri), nu de mărime: este o consecință a <b>asemănării</b>.` },
        { id: `inv`, label: `Formule inverse`, x: 18, y: 94, color: `#64748b`, html: `A obține o latură sau o înălțime din arie.`, why: `Se obțin „desfăcând” operațiile în ordine inversă: dacă A = b × h : 2, atunci 2A = b × h și h = 2A : b. Este același raționament ca la ecuații, pe care le vei studia mai târziu.` }
      ],
      edges: [
        [`area`, `equi`, `se compară cu`],
        [`equi`, `rett`, `se reduce la`],
        [`rett`, `parall`, `taie și mută`],
        [`parall`, `tri`, `jumătate`],
        [`tri`, `rombo`, `4 triunghiuri`],
        [`parall`, `trap`, `jumătate din 2 trapeze`],
        [`tri`, `reg`, `n triunghiuri`],
        [`rett`, `inv`, `se folosesc invers`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: romb, trapez, poligoane`,
      questions: [
        { type: `num`, q: `Un romb are diagonalele de 16 cm și 10 cm. Aria?`, answer: 80, unit: `cm²`, explain: `16 × 10 : 2 = 80 cm².` },
        { type: `num`, q: `Un trapez are bazele de 9 cm și 5 cm și înălțimea de 4 cm. Aria?`, answer: 28, unit: `cm²`, explain: `(9 + 5) × 4 : 2 = 28 cm².` },
        { type: `num`, q: `Un hexagon regulat are perimetrul de 60 cm și apotema de 8,66 cm. Aria?`, answer: 259.8, tol: 0.1, unit: `cm²`, explain: `60 × 8,66 : 2 = 259,8 cm².` }
      ]
    },
    {
      type: `remember`,
      title: `De ținut minte`,
      html: `<table>
<tr><th>Figura</th><th>Aria</th><th>Formule inverse</th></tr>
<tr><td>Dreptunghi / paralelogram</td><td>b × h</td><td>b = A : h; h = A : b</td></tr>
<tr><td>Pătrat</td><td>l² (sau d² : 2)</td><td>l = √A</td></tr>
<tr><td>Triunghi</td><td>b × h : 2</td><td>b = 2A : h; h = 2A : b</td></tr>
<tr><td>Romb</td><td>D × d : 2</td><td>D = 2A : d; d = 2A : D</td></tr>
<tr><td>Trapez</td><td>(B + b) × h : 2</td><td>h = 2A : (B + b); B + b = 2A : h</td></tr>
<tr><td>Poligon regulat</td><td>2p × a : 2</td><td>a = 2A : 2p; 2p = 2A : a</td></tr>
</table>`
    }
  ],
  glossary: [
    { t: `Suprafață`, d: `Partea de plan închisă de o figură.` },
    { t: `Arie`, d: `Măsura unei suprafețe.` },
    { t: `Echivalente`, d: `Figuri care au aceeași arie.` },
    { t: `Echidescompozabile`, d: `Figuri formate din aceleași piese dispuse diferit.` },
    { t: `Înălțime`, d: `Segment perpendicular pe bază, dus din vârful opus (sau din latura opusă).` },
    { t: `Apotemă`, d: `Distanța de la centrul unui poligon regulat la una dintre laturile sale; raza cercului înscris.` },
    { t: `Număr fix`, d: `Raport constant între apotema și latura unui poligon regulat.` },
    { t: `Formulă inversă`, d: `Formulă care obține un element (bază, înălțime…) cunoscând aria.` },
    { t: `Hectar`, d: `Unitate de suprafață agrară egală cu 10 000 m².` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Un pătrat are latura de 9 cm. Aria?`, answer: 81, unit: `cm²`, explain: `9² = 81 cm².` },
      { type: `num`, q: `Un pătrat are aria de 144 m². Cât măsoară latura?`, answer: 12, unit: `m`, explain: `√144 = 12 m.` },
      { type: `num`, q: `Un paralelogram are aria de 96 cm² și înălțimea de 8 cm. Cât măsoară baza?`, answer: 12, unit: `cm`, explain: `b = 96 : 8 = 12 cm.` },
      { type: `num`, q: `Un triunghi dreptunghic are catetele de 6 cm și 8 cm. Aria?`, answer: 24, unit: `cm²`, explain: `6 × 8 : 2 = 24 cm².` },
      { type: `num`, q: `Un romb are aria de 60 cm² și o diagonală de 12 cm. Cât măsoară cealaltă diagonală?`, answer: 10, unit: `cm`, explain: `d = 2 × 60 : 12 = 10 cm.` },
      { type: `num`, q: `Un trapez are aria de 50 cm² și înălțimea de 5 cm. Cât este suma bazelor?`, answer: 20, unit: `cm`, explain: `B + b = 2 × 50 : 5 = 20 cm.` },
      { type: `mc`, q: `De câte ori este un m² mai mare decât un dm²?`, options: [`10`, `100`, `1000`], answer: 1, explain: `Unitățile de suprafață cresc din 100 în 100.` },
      { type: `tf`, q: `Două figuri echidescompozabile au întotdeauna aceeași arie.`, answer: true, explain: `Sunt făcute din aceleași piese: aria este aceeași.` },
      { type: `tf`, q: `Dublând latura unui pătrat, aria se dublează.`, answer: false, explain: `Aria devine de 4 ori mai mare: (2l)² = 4l².` },
      { type: `mc`, q: `Un hectar este echivalent cu…`, options: [`100 m²`, `1000 m²`, `10 000 m²`], answer: 2, explain: `1 ha = 1 hm² = 10 000 m².` },
      { type: `num`, q: `Un pătrat are latura de 10 cm. Calculează apotema cu numărul fix 0,5.`, answer: 5, unit: `cm`, explain: `a = 10 × 0,5 = 5 cm (jumătate din latură).` },
      { type: `order`, q: `Ordonează figurile de la cea mai mică arie la cea mai mare: toate au baza 6 și înălțimea 4 (pentru trapez baza mică este 2).`, items: [`Triunghi`, `Trapez`, `Dreptunghi`], explain: `6×4:2 = 12; (6+2)×4:2 = 16; 6×4 = 24.` }
    ],
    gen: [[`areaRect`, 2], [`areaTri`, 2]]
  }
});

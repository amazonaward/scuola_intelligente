TOPIC('ro', {
  id: `l1-art-costruzioni-geometriche`,
  title: `Desen: construcții geometrice`,
  intro: `Înainte de a desena o casă, o mașină sau o siglă trebuie să știi să trasezi cu precizie <b>drepte perpendiculare, paralele, unghiuri și poligoane</b>. Instrumentele sunt puține: <b>rigla, echerele și compasul</b>. Construcțiile geometrice sunt gramatica desenului tehnic: fiecare pas are o rațiune matematică, iar fiecare greșeală se vede imediat. Să învățăm să „raționăm cu compasul", așa cum făceau geometrii greci! 📐✏️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Instrumentele și regulile jocului`,
      html: `<p>Geometria euclidiană clasică admite doar două instrumente: <b>rigla negradată</b> (pentru a trasa drepte) și <b>compasul</b> (pentru a trasa cercuri și a raporta distanțe). În desenul tehnic se folosesc și <b>echerele</b> și <b>raportorul</b>, care accelerează lucrul, dar rămân fundamentale construcțiile „cu rigla și compasul".</p>
<ul>
<li><b>Creioane</b>: tare (H, 2H) pentru liniile de construcție, subțiri și ușoare; mai moale (HB, B) pentru a contura desenul final.</li>
<li><b>Echere</b>: echerul de <b>45°</b> (triunghi dreptunghic isoscel) și cel de <b>30°/60°</b> (jumătate dintr-un triunghi echilateral). Cu un echer sprijinit de riglă se trasează perpendiculare și paralele; combinând cele două echere se obțin și unghiuri de 15°, 75°, 105°.</li>
<li><b>Compasul</b>: se înfige vârful în centru și se rotește mina. Regula de aur: <b>nu schimba niciodată deschiderea</b> cât timp construcția nu o cere.</li>
</ul>
<p>Convenții: punctele se notează cu litere <b>mari</b> (A, B, C), dreptele cu litere mici (r, s), arcele de construcție se lasă <b>vizibile și subțiri</b>: cine privește trebuie să poată „citi" raționamentul tău. Desenul final se conturează cu linie groasă.</p>`
    },
    {
      type: `text`, title: `2. Mediatoarea unui segment și mijlocul lui`,
      html: `<p><b>Mediatoarea</b> unui segment AB este dreapta perpendiculară pe AB care trece prin mijlocul lui. Este și mulțimea punctelor <b>egal depărtate</b> de A și de B: de aceea funcționează construcția.</p>
<ol>
<li>Înfige compasul în <b>A</b> cu o deschidere <b>mai mare decât jumătatea lui AB</b> și trasează un arc deasupra și dedesubtul segmentului.</li>
<li>Fără să schimbi deschiderea, înfige în <b>B</b> și trasează două arce care le intersectează pe cele precedente în punctele <b>C</b> și <b>D</b>.</li>
<li>Unește C și D: dreapta CD este <b>mediatoarea</b>; punctul M în care taie AB este <b>mijlocul</b> segmentului.</li>
</ol>
<p>De ce funcționează: C și D sunt la aceeași distanță de A și de B (aceeași rază), deci se află amândouă pe mediatoare; două puncte sunt suficiente pentru a determina dreapta. Cele patru laturi AC, BC, AD, BD sunt egale, iar ACBD este un <b>romb</b>: diagonalele unui romb sunt perpendiculare și se taie la jumătate.</p>`
    },
    {
      type: `svg`, title: `Mediatoarea unui segment, pas cu pas`,
      caption: `Două arce cu aceeași rază, cu centrele în A și în B, se întâlnesc în C și D: dreapta CD este perpendiculară pe AB și trece prin mijlocul M.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="150" x2="340" y2="150" stroke="#1e293b" stroke-width="3"/>
<path d="M200 52 A140 140 0 0 1 200 248" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M200 52 A140 140 0 0 0 200 248" fill="none" stroke="#dc2626" stroke-width="2"/>
<line x1="200" y1="30" x2="200" y2="270" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/>
<g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="52" r="5"/><circle cx="200" cy="248" r="5"/><circle cx="200" cy="150" r="5" fill="#16a34a"/></g>
<g font-size="18" font-weight="bold" fill="#1e293b"><text x="82" y="140">A</text><text x="308" y="140">B</text><text x="210" y="50">C</text><text x="210" y="266">D</text><text x="210" y="142" fill="#16a34a">M</text></g>
<text x="400" y="100" font-size="16" fill="#2563eb">arc cu centrul în A</text>
<text x="400" y="130" font-size="16" fill="#dc2626">arc cu centrul în B</text>
<text x="400" y="160" font-size="16" fill="#16a34a">mediatoarea CD (perpendiculară)</text>
<text x="400" y="200" font-size="15" fill="#334155">aceeași rază: AC = BC = AD = BD</text>
</svg>`
    },
    {
      type: `text`, title: `3. Perpendiculare și paralele`,
      html: `<p><b>Perpendiculara pe o dreaptă r care trece printr-un punct P</b></p>
<ul>
<li><b>P pe r</b>: cu centrul în P trasează un arc care taie r în două puncte X și Y; construiește apoi mediatoarea segmentului XY (este perpendiculara căutată, trece prin P).</li>
<li><b>P în afara lui r</b>: cu centrul în P trasează un arc care taie r în X și Y; din X și din Y, cu aceeași deschidere, trasează două arce care se întâlnesc în Q; dreapta PQ este perpendiculara.</li>
<li><b>Cu echerele</b>: sprijină o catetă a echerului de dreaptă, alunecă-l până când cealaltă catetă trece prin P și trasează.</li>
</ul>
<p><b>Paralela la o dreaptă r care trece printr-un punct P</b></p>
<ul>
<li><b>Cu două echere</b>: sprijină ipotenuza (sau o catetă) unui echer de r, al doilea echer are rol de „ghid" sprijinit de primul; alunecă primul echer până la P și trasează. Este metoda cea mai folosită la masa de desen.</li>
<li><b>Cu compasul (romb)</b>: alege pe r un punct A; cu centrul în A și raza AP trasează un arc care taie r în B; cu aceeași rază și centrele în B și în P trasează două arce care se întâlnesc în Q (de partea lui P). APQB este un romb, deci PQ este paralelă cu r.</li>
<li><b>Cu două perpendiculare</b>: două drepte perpendiculare pe aceeași dreaptă r sunt paralele între ele.</li>
</ul>
<p>Un caz important este cel al <b>dreptelor paralele la distanță dată d</b>: construiește o perpendiculară pe r, raportează pe ea distanța d și trasează de acolo perpendiculara pe perpendiculară.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: marginea unui caiet și o ramă`,
      html: `<p>Vrei să desenezi o ramă lată de <b>1,5 cm</b> în jurul unui dreptunghi. Este suficient să trasezi patru <b>paralele la laturi, la distanța de 1,5 cm</b>: pentru fiecare construiești o perpendiculară, raportezi cu compasul 1,5 cm și trasezi paralela cu echerele. Unghiurile rămân de 90° pentru că paralelele la laturi perpendiculare sunt la rândul lor perpendiculare. Este procedeul folosit de un grafician pentru marginile unei pagini.</p>`
    },
    {
      type: `text`, title: `4. Bisectoarea unui unghi și împărțirea unui segment`,
      html: `<p><b>Bisectoarea</b> (semidreapta care împarte unghiul în două unghiuri egale), dat unghiul cu vârful în V:</p>
<ol>
<li>Cu centrul în V trasează un arc care taie cele două laturi în A și B.</li>
<li>Cu centrul în A și apoi în B, cu aceeași deschidere, trasează două arce care se întâlnesc în E.</li>
<li>Semidreapta VE este bisectoarea. Funcționează pentru că VAEB este un romb (sau un patrulater cu laturile egale două câte două), iar diagonala unui romb împarte unghiurile în două.</li>
</ol>
<p>Cu bisectoarea poți construi unghiuri de <b>45°</b> (bisectoarea lui 90°), <b>30°</b> (bisectoarea lui 60°), <b>15°</b>, <b>22,5°</b> și așa mai departe. Unghiul de <b>60°</b> se obține dintr-un triunghi echilateral (compas cu aceeași deschidere pentru trei laturi); cel de <b>90°</b> cu perpendiculara.</p>
<p><b>Împărțirea unui segment în n părți egale</b> (teorema lui Thales): pentru a împărți AB în 5 părți:</p>
<ol>
<li>Din A trasează o semidreaptă oarecare, care nu este pe aceeași dreaptă cu AB.</li>
<li>Cu o deschidere oarecare a compasului raportează pe ea <b>5 segmente egale</b> consecutive: A1, A2, … A5.</li>
<li>Unește A5 cu B și trasează din A4, A3, A2, A1 <b>paralele la A5B</b>: ele împart AB în 5 părți egale.</li>
</ol>
<p>Motivul: un fascicul de drepte paralele taie două transversale în segmente proporționale (Thales). Dacă segmentele de pe o transversală sunt egale, sunt egale și cele de pe cealaltă.</p>`
    },
    {
      type: `quiz`, title: `Mini-test: primele instrumente`,
      questions: [
        { type: `mc`, q: `Ce proprietate au toate punctele mediatoarei unui segment AB?`, options: [`Sunt egal depărtate de A și de B`, `Sunt la aceeași distanță doar de punctul A`, `Sunt coliniare cu A și B`], answer: 0, explain: `Mediatoarea este locul geometric al punctelor egal depărtate de extremități: de aceea se construiește cu două arce de rază egală.` },
        { type: `num`, q: `Câte grade măsoară bisectoarea unui unghi drept față de fiecare latură?`, answer: 45, tol: 0, unit: `°`, explain: `90° : 2 = 45°.` },
        { type: `tf`, q: `Pentru a împărți un segment în 7 părți egale este suficient să raportezi 7 segmente egale pe o semidreaptă ajutătoare și să trasezi paralele.`, answer: true, explain: `Este aplicarea teoremei lui Thales: paralelele taie segmentul în părți egale.` }
      ]
    },
    {
      type: `text`, title: `5. Poligoane regulate înscrise într-un cerc`,
      html: `<p>Un <b>poligon regulat</b> are toate laturile și toate unghiurile egale. Înscris într-un cerc de rază r, are vârfurile pe cerc: cercul este împărțit în <b>n arce egale</b>, fiecare de 360°/n.</p>
<ul>
<li><b>Triunghiul echilateral</b>: împarte cercul în 3 părți (arce de 120°) sau construiește cele trei laturi egale. Latura este l = r√3 ≈ 1,732 r.</li>
<li><b>Pătratul</b>: trasează două diametre perpendiculare: capetele lor sunt cele 4 vârfuri. Latura este l = r√2 ≈ 1,414 r.</li>
<li><b>Hexagonul regulat</b>: <b>latura este egală cu raza</b> (l = r). Cu aceeași deschidere a compasului o raportezi de 6 ori pe cerc și te întorci exact în punctul de plecare. Unind un vârf da și unul nu obții <b>triunghiul echilateral</b>.</li>
<li><b>Octogonul</b>: pornești de la pătrat și afli mijloacele arcelor (bisectoare); numărul laturilor se dublează: 4 → 8 → 16.</li>
<li><b>Pentagonul</b>: mai complicat, latura este legată de <b>secțiunea de aur</b>. Se obține cu o construcție care folosește mijlocul unei raze (vezi mai jos).</li>
<li><b>Decagonul</b>: latura este partea de aur a razei; dublând decagonul se obțin 20 de laturi.</li>
</ul>
<p>Hexagonul este cel mai simplu pentru că 360° : 6 = 60°, iar triunghiul format din două raze și o latură este <b>echilateral</b>. De aceea hexagonul apare peste tot în natură: celulele albinelor, cristalele de zăpadă, structura grafenei.</p>`
    },
    {
      type: `svg`, title: `Hexagonul regulat cu compasul`,
      caption: `Se trasează cercul de rază r; fără să schimbi deschiderea, raportezi raza pe cerc de 6 ori. Unite, cele 6 puncte formează hexagonul. Șase triunghiuri echilaterale umplu hexagonul.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="110" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
<polygon points="280,150 225,245.3 115,245.3 60,150 115,54.7 225,54.7" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round"/>
<g stroke="#1e3a8a" stroke-width="1.5"><line x1="170" y1="150" x2="280" y2="150"/><line x1="170" y1="150" x2="225" y2="245.3"/><line x1="170" y1="150" x2="115" y2="245.3"/><line x1="170" y1="150" x2="60" y2="150"/><line x1="170" y1="150" x2="115" y2="54.7"/><line x1="170" y1="150" x2="225" y2="54.7"/></g>
<g fill="#dc2626"><circle cx="280" cy="150" r="5"/><circle cx="225" cy="245.3" r="5"/><circle cx="115" cy="245.3" r="5"/><circle cx="60" cy="150" r="5"/><circle cx="115" cy="54.7" r="5"/><circle cx="225" cy="54.7" r="5"/></g>
<circle cx="170" cy="150" r="5" fill="#1e293b"/>
<text x="180" y="170" font-size="16" fill="#1e293b">O</text>
<text x="222" y="142" font-size="16" fill="#92400e" font-weight="bold">r</text>
<polygon points="450,150 490,81 570,81 610,150 570,219 490,219" fill="none"/>
<text x="330" y="60" font-size="17" font-weight="bold" fill="#1e3a8a">Hexagon regulat</text>
<text x="330" y="95" font-size="16" fill="#334155">latura = raza (l = r)</text>
<text x="330" y="125" font-size="16" fill="#334155">unghi la centru = 60°</text>
<text x="330" y="155" font-size="16" fill="#334155">unghi interior = 120°</text>
<text x="330" y="185" font-size="16" fill="#334155">6 triunghiuri echilaterale</text>
<text x="330" y="225" font-size="16" fill="#334155">trasat un vârf da și unul nu:</text>
<text x="330" y="250" font-size="16" fill="#334155">triunghi echilateral înscris</text>
</svg>`
    },
    {
      type: `3d`, title: `Prisma hexagonală: o construcție care capătă volum`,
      scene: `solid`,
      options: { shape: `prism`, n: 6, r: 1, h: 1.6, color: `#3b82f6`, labels: true, shapes: [`prism`, `pyramid`, `cube`, `cylinder`] },
      caption: `Baza acestei prisme este hexagonul pe care tocmai l-ai construit. Numărând fețele, muchiile și vârfurile găsești că F + V - E = 2 (formula lui Euler). O secțiune orizontală reproduce construcția ta.`
    },
    {
      type: `text`, title: `6. Un poligon oarecare: metoda generală și pentagonul`,
      html: `<p><b>Alte poligoane</b>: pentru orice n se poate împărți cercul cu raportorul în arce de 360°/n (de exemplu 40° pentru enagon). Cu rigla și compasul, în schimb, sunt exacte doar unele poligoane: cele obținute prin dublarea laturilor (4, 8, 16; 6, 12; 5, 10, 20) plus triunghiul și poligonul cu 17 laturi. Pentru celelalte (7, 9, 11…) se folosesc metode aproximative.</p>
<p><b>Pentagonul regulat înscris</b> într-un cerc cu centrul O (construcție clasică):</p>
<ol>
<li>Trasează două diametre perpendiculare: AB orizontal și CD vertical.</li>
<li>Află mijlocul M al razei OB.</li>
<li>Cu centrul în M și raza MC (de la M la capătul C al diametrului vertical) trasează un arc care taie diametrul AB în N, pe partea opusă lui B.</li>
<li>Segmentul CN este <b>latura pentagonului</b>. Cu această deschidere o raportezi de 5 ori pe cerc, pornind de la C.</li>
</ol>
<p>Raportul dintre diagonala și latura pentagonului este <b>(1+√5)/2 ≈ 1,618</b>, <b>numărul de aur φ</b>. Pitagoreicii au adoptat pentagrama (steaua cu cinci colțuri) ca simbol secret.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: sigla cu steaua`,
      html: `<p>Vrei să desenezi o stea cu cinci colțuri pentru o siglă. Construiești pentagonul regulat în cerc și apoi unești fiecare vârf cu al doilea următor: obții o <b>pentagramă</b> perfectă. Dacă ai face-o „din ochi" ar ieși strâmbă; cu compasul, colțurile sunt toate egale pentru că cercul este împărțit în 5 arce de 72°.</p>
<p>Același lucru este valabil pentru un ceas: cele 12 numere sunt în vârfurile unui dodecagon regulat, la 30° unul de altul. Se obține din hexagon, înjumătățind arcele.</p>`
    },
    {
      type: `text`, title: `7. Tangente și racordări`,
      html: `<p>O <b>tangentă</b> la un cerc atinge curba într-un singur punct, <b>punctul de tangență</b>, și este <b>perpendiculară pe raza</b> care ajunge în acel punct. Această proprietate este cheia tuturor racordărilor.</p>
<p>O <b>racordare</b> este un arc de cerc care leagă „lin" două linii (două drepte sau o dreaptă și o curbă) fără colțuri. O vezi pe șosele, pe linii ferate, pe marginile rotunjite ale mobilelor și ale telefoanelor.</p>
<p><b>Racordarea a două drepte concurente cu un arc de rază r</b>:</p>
<ol>
<li>Trasează două drepte <b>paralele</b> cu fiecare dintre cele două date, la distanța <b>r</b> (în interiorul unghiului).</li>
<li>Punctul lor de intersecție <b>C</b> este <b>centrul arcului</b>: se află la distanța r de ambele drepte.</li>
<li>Din centrul C trasează <b>perpendicularele</b> pe cele două drepte: picioarele T₁ și T₂ sunt <b>punctele de tangență</b>.</li>
<li>Cu centrul în C și raza r trasează arcul de la T₁ la T₂. Conturează cu linie groasă <b>doar</b> porțiunile de dreaptă până la T₁ și T₂ și arcul.</li>
</ol>
<p><b>Racordarea dintre o dreaptă și un cerc</b>, sau dintre două cercuri: centrul arcului se află la distanța r de dreaptă și la distanța (R + r) (racordare exterioară) sau (R − r) (racordare interioară) de centrul cercului. Punctul de tangență se află mereu pe <b>dreapta care unește centrele</b>.</p>`
    },
    {
      type: `svg`, title: `Racordarea a două drepte perpendiculare`,
      caption: `Centrul C se află la distanța r de ambele drepte; T1 și T2 sunt punctele de tangență, iar arcul le unește continuu. Dreptele punctate sunt paralelele ajutătoare.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 5"><line x1="120" y1="240" x2="120" y2="40"/><line x1="120" y1="240" x2="520" y2="240"/></g>
<g stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 4"><line x1="200" y1="40" x2="200" y2="270"/><line x1="90" y1="160" x2="520" y2="160"/></g>
<g stroke="#1e293b" stroke-width="4" stroke-linecap="round" fill="none"><path d="M120 40 L120 160 A80 80 0 0 0 200 240 L520 240"/></g>
<g stroke="#16a34a" stroke-width="2"><line x1="200" y1="160" x2="120" y2="160"/><line x1="200" y1="160" x2="200" y2="240"/></g>
<g fill="#dc2626"><circle cx="200" cy="160" r="6"/><circle cx="120" cy="160" r="5"/><circle cx="200" cy="240" r="5"/></g>
<g font-size="17" font-weight="bold" fill="#1e293b"><text x="208" y="152">C</text><text x="70" y="156">T1</text><text x="208" y="262">T2</text></g>
<text x="240" y="200" font-size="16" fill="#16a34a">r</text>
<text x="150" y="190" font-size="16" fill="#16a34a">r</text>
<text x="320" y="110" font-size="16" fill="#334155">1) paralele la distanța r</text>
<text x="320" y="135" font-size="16" fill="#334155">2) intersecția lor este centrul C</text>
<text x="320" y="190" font-size="16" fill="#334155">3) perpendiculare: punctele T1 și T2</text>
<text x="320" y="215" font-size="16" fill="#334155">4) arc cu centrul C și raza r</text>
</svg>`
    },
    {
      type: `curiosity`, title: `Știai că… Euclid a scris regulile acum 2300 de ani?`,
      html: `<p><i>Elementele</i> lui <b>Euclid</b> (Alexandria Egiptului, circa 300 î.Hr.) încep cu construcția unui triunghi echilateral pe un segment dat: folosește chiar două cercuri ca cele ale mediatoarei. Timp de peste două mii de ani s-a discutat care construcții sunt posibile doar cu rigla și compasul. Abia în secolul al XIX-lea s-a demonstrat că cu aceste instrumente <b>nu se pot</b> rezolva trei probleme celebre: <b>trisecțiunea unui unghi oarecare</b>, <b>duplicarea cubului</b> și <b>cuadratura cercului</b>. Tânărul <b>Carl Friedrich Gauss</b>, în 1796, la 19 ani, a descoperit în schimb că se poate construi poligonul regulat cu <b>17 laturi</b>: a fost atât de mândru încât a vrut să fie gravat pe mormântul său.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… albinele „desenează" hexagoane?`,
      html: `<p>Celulele fagurilor sunt <b>hexagoane regulate</b>. Dintre formele care acoperă planul fără goluri (triunghiul echilateral, pătratul, hexagonul), hexagonul este cea cu <b>cel mai mic perimetru la arie egală</b>: este nevoie de mai puțină ceară pentru pereți. Încă Pappus din Alexandria (secolul al IV-lea d.Hr.) observase acest lucru; demonstrația matematică completă, „conjectura fagurelui", a fost dată de Thomas Hales în 1999.</p>`
    },
    {
      type: `remember`, title: `De ținut minte`,
      html: `<ul>
<li><b>Mediatoarea</b> unui segment: arce de rază egală din A și din B; dreapta prin intersecții este perpendiculară și trece prin mijloc.</li>
<li><b>Bisectoarea</b>: arc din vârf, două arce egale din punctele găsite pe laturi.</li>
<li><b>Thales</b> pentru a împărți un segment în părți egale, cu o semidreaptă și paralele.</li>
<li><b>Hexagonul</b>: latura = raza; <b>pătratul</b>: două diametre perpendiculare; <b>pentagonul</b>: latura legată de secțiunea de aur.</li>
<li><b>Racordarea</b>: centrul la distanța r de ambele linii; punctele de tangență pe perpendicularele din centru.</li>
<li>Liniile de construcție se lasă <b>subțiri și vizibile</b>, rezultatul se conturează cu <b>linie groasă</b>.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Dacă compasul ți se pare un ritual misterios, încearcă să privești aceleași construcții din alte unghiuri.`,
      tabs: [
        {
          label: `🧠 De ce: locurile geometrice`,
          html: `<p>Fiecare construcție este răspunsul la o întrebare de felul „<b>unde sunt toate punctele care…?</b>" (loc geometric).</p>
<ul>
<li>Punctele aflate la distanța <i>r</i> de O → <b>cercul</b>.</li>
<li>Punctele egal depărtate de A și B → <b>mediatoarea</b> segmentului.</li>
<li>Punctele egal depărtate de două drepte concurente → <b>bisectoarea</b>.</li>
<li>Punctele aflate la distanța <i>r</i> de o dreaptă → două <b>drepte paralele</b>.</li>
</ul>
<p>Compasul servește la obținerea distanțelor egale, rigla la unirea punctelor. O racordare este intersecția a două locuri: <b>centrul = (paralela la r) ∩ (paralela la r)</b>.</p>`
        },
        {
          label: `✂️ Cu hârtie pliată (origami)`,
          html: `<p>O foaie de hârtie este un instrument de geometru! Pliază o foaie făcând să coincidă două puncte A și B: <b>cutura</b> este mediatoarea segmentului AB. Pliază făcând să coincidă două laturi ale unui unghi: cutura este <b>bisectoarea</b>. Pliind un pătrat pe diagonală obții un unghi de 45°.</p>
<p>Origami permite și <b>trisecțiunea unui unghi</b> și duplicarea cubului, lucruri imposibile cu rigla și compasul: în 1980 a arătat acest lucru japonezul <b>Hisashi Abe</b>.</p>`
        },
        {
          label: `💻 Cum face calculatorul (CAD)`,
          html: `<p>În programele de desen (CAD, Illustrator, Inkscape) comenzi ca „<i>Offset</i>" (paralela la distanță dată), „<i>Fillet</i>" (racordare) și „<i>Polygon</i>" (poligon regulat) execută automat aceste construcții: <b>Offset</b> trasează paralele la distanța r, iar <b>Fillet</b> caută centrul arcului ca intersecție a paralelelor. Dacă înțelegi procedeul, folosești programul fără să încerci la întâmplare.</p>`
        },
        {
          label: `🏷️ Recunoaște punctele`,
          html: `<p>La mediatoarea unui segment, apasă pe un punct și dă-i numele potrivit.</p>`,
          widget: `labelDiagram`,
          options: {
            svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f8fafc"/><line x1="40" y1="150" x2="360" y2="150" stroke="#1e293b" stroke-width="3"/><path d="M200 35 A130 130 0 0 1 200 265" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M200 35 A130 130 0 0 0 200 265" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#16a34a" stroke-width="3" stroke-dasharray="8 4"/><g fill="#1e293b"><circle cx="100" cy="150" r="5"/><circle cx="300" cy="150" r="5"/><circle cx="200" cy="35" r="5"/><circle cx="200" cy="265" r="5"/><circle cx="200" cy="150" r="5"/></g></svg>`,
            spots: [
              { x: 100, y: 150, label: `Extremitatea A` },
              { x: 300, y: 150, label: `Extremitatea B` },
              { x: 200, y: 150, label: `Mijlocul M` },
              { x: 200, y: 35, label: `Intersecția arcelor (C)` },
              { x: 200, y: 22, label: `Mediatoarea segmentului` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Hartă: construcțiile geometrice`,
      nodes: [
        { id: `eucl`, label: `Riglă și compas`, x: 50, y: 6, color: `#64748b`, html: `Două instrumente: dreapta și cercul.`, why: `Postulatele lui <b>Euclid</b> (Elementele, circa 300 î.Hr.) admit doar „a trasa o dreaptă între două puncte" și „a descrie un cerc cu centru și rază date". Tot restul trebuie construit.` },
        { id: `asse`, label: `Mediatoare și perpendiculare`, x: 18, y: 32, color: `#2563eb`, html: `Mediatoarea segmentului, perpendiculare, mijlocul.`, why: `Din egalitatea distanțelor: două cercuri de rază egală se întâlnesc în cele două puncte egal depărtate de centre (romb cu diagonale perpendiculare).` },
        { id: `bis`, label: `Bisectoarea`, x: 50, y: 32, color: `#f59e0b`, html: `Împărțirea unui unghi în două: 45°, 30°, 15°…`, why: `Se folosește un romb: diagonala împarte unghiurile în două. Cu bisectoarea se înjumătățește numărul laturilor poligoanelor.` },
        { id: `tal`, label: `Thales și proporții`, x: 82, y: 32, color: `#a855f7`, html: `Împărțirea unui segment în părți egale.`, why: `<b>Thales din Milet</b> (secolul al VI-lea î.Hr.): un fascicul de paralele determină pe două transversale segmente proporționale. De aici provine și asemănarea.` },
        { id: `pol`, label: `Poligoane regulate`, x: 30, y: 62, color: `#ef4444`, html: `Triunghi, pătrat, hexagon, pentagon, octogon…`, why: `Împărțirea cercului în n arce egale. Gauss (1801) a demonstrat că poligonul regulat cu n laturi este construibil cu rigla și compasul dacă n este produsul unei puteri a lui 2 cu numere prime Fermat distincte (3, 5, 17, 257, 65537).` },
        { id: `tan`, label: `Tangente și racordări`, x: 70, y: 62, color: `#16a34a`, html: `Arce care unesc linii fără colțuri.`, why: `Tangenta este perpendiculară pe rază în punctul de contact. Centrul racordării este punctul aflat la distanța r de ambele linii: intersecția a două locuri geometrice.` },
        { id: `app`, label: `Aplicații`, x: 50, y: 90, color: `#0ea5e9`, html: `Arhitectură, mecanică, design, grafică, CAD.`, why: `De la rozeta gotică (arce trasate cu compasul) la șosele (curbe de racordare) și piese mecanice cu muchii rotunjite, totul pornește de la aceste construcții.` }
      ],
      edges: [
        [`eucl`, `asse`, `generează`], [`eucl`, `bis`, `generează`], [`eucl`, `tal`, `folosește`], [`asse`, `pol`, `servește la`], [`bis`, `pol`, `dublează laturile`],
        [`tal`, `pol`, `generalizează`], [`asse`, `tan`, `perpendiculare`], [`pol`, `app`, `pentru`], [`tan`, `app`, `pentru`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: poligoane și racordări`,
      questions: [
        { type: `mc`, q: `Cât este de lungă latura unui hexagon regulat înscris într-un cerc cu raza de 4 cm?`, options: [`2 cm`, `4 cm`, `8 cm`], answer: 1, explain: `La hexagonul regulat latura este egală cu raza: l = r = 4 cm.` },
        { type: `mc`, q: `Unde se află centrul unui arc de racordare între două drepte concurente?`, options: [`În punctul în care se întâlnesc cele două drepte`, `La intersecția paralelelor la cele două drepte, la distanța r`, `Pe punctul de mijloc dintre cele două drepte`], answer: 1, explain: `Centrul trebuie să fie la distanța r de ambele drepte: este intersecția celor două paralele la distanța r.` },
        { type: `tf`, q: `O tangentă la un cerc este perpendiculară pe rază în punctul de tangență.`, answer: true, explain: `Este proprietatea fundamentală a tangentelor, la baza racordărilor.` },
        { type: `num`, q: `Câte grade măsoară unghiul la centru al unui octogon regulat?`, answer: 45, tol: 0, unit: `°`, explain: `360° : 8 = 45°.` }
      ]
    }
  ],
  glossary: [
    { t: `Mediatoarea unui segment`, d: `Dreapta perpendiculară pe segment în mijlocul lui; locul geometric al punctelor egal depărtate de extremități.` },
    { t: `Bisectoarea`, d: `Semidreapta care împarte un unghi în două unghiuri egale.` },
    { t: `Perpendiculară`, d: `Dreaptă care formează cu alta un unghi de 90°.` },
    { t: `Paralele`, d: `Drepte din același plan care nu se întâlnesc niciodată.` },
    { t: `Poligon regulat`, d: `Poligon cu laturile și unghiurile toate egale; poate fi înscris într-un cerc.` },
    { t: `Tangentă`, d: `Dreaptă care atinge un cerc într-un singur punct, perpendiculară pe rază.` },
    { t: `Racordare`, d: `Arc de cerc care unește fără colțuri două linii, tangent la amândouă.` },
    { t: `Loc geometric`, d: `Mulțimea tuturor punctelor care au aceeași proprietate.` },
    { t: `Secțiunea de aur`, d: `Raportul φ = (1+√5)/2 ≈ 1,618, legat de pentagonul regulat.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Pentru a construi mediatoarea lui AB, deschiderea compasului trebuie să fie…`, options: [`mai mică decât jumătatea lui AB`, `mai mare decât jumătatea lui AB`, `exact AB`], answer: 1, explain: `Dacă ar fi mai mică sau egală cu jumătatea, arcele nu s-ar întâlni (sau s-ar atinge doar): este nevoie de mai mult de jumătate.` },
      { type: `tf`, q: `Mediatoarea unui segment trece prin mijlocul lui.`, answer: true, explain: `Este perpendiculară pe segment tocmai în mijlocul M.` },
      { type: `num`, q: `Cât măsoară fiecare unghi interior al unui hexagon regulat?`, answer: 120, tol: 0, unit: `°`, explain: `Suma unghiurilor interioare (6−2)·180° = 720°; 720° : 6 = 120°.` },
      { type: `mc`, q: `Cu echerul de 30°/60° și cel de 45° sprijinite împreună se poate obține un unghi de…`, options: [`15°`, `20°`, `25°`], answer: 0, explain: `45° − 30° = 15°; se obține și 75° (45° + 30°).` },
      { type: `num`, q: `La o racordare de rază r = 3 cm între două drepte perpendiculare, la ce distanță de vârf (măsurată pe fiecare dreaptă) se află punctele de tangență?`, answer: 3, tol: 0, unit: `cm`, explain: `Centrul este la 3 cm de fiecare dreaptă; punctele de tangență sunt la 3 cm de vârf pe fiecare dreaptă (pătratul cu latura r).` },
      { type: `order`, q: `Pune în ordine pașii pentru bisectoarea unui unghi.`, items: [`Arc cu centrul în vârf: taie laturile în A și B`, `Arc cu centrul în A`, `Aceeași rază, arc cu centrul în B: intersecția E`, `Trasează semidreapta de la vârf la E`], explain: `Mai întâi punctele de pe laturi, apoi două arce egale care se întâlnesc, în sfârșit semidreapta.` },
      { type: `text`, q: `Cum se numește teorema folosită pentru a împărți un segment în părți egale cu paralele?`, answer: [`thales`, `teorema lui thales`, `a lui thales`, `tales`, `teorema lui tales`], explain: `Teorema lui Thales: un fascicul de drepte paralele determină segmente proporționale pe transversale.` },
      { type: `mc`, q: `Care poligon regulat are latura egală cu raza cercului circumscris?`, options: [`Pătratul`, `Pentagonul`, `Hexagonul`], answer: 2, explain: `Unghiul la centru este de 60°, iar triunghiul cu două raze și o latură este echilateral.` },
      { type: `tf`, q: `Punctul de tangență al unei racordări se află pe perpendiculara pe dreaptă dusă din centrul arcului.`, answer: true, explain: `Raza în punctul de tangență este perpendiculară pe tangentă, deci piciorul perpendicularei din centru este punctul de tangență.` },
      { type: `mc`, q: `Ce creion se folosește pentru liniile de construcție?`, options: [`Tare (H) și ușor`, `Moale (B) și foarte apăsat`, `Marker`], answer: 0, explain: `Liniile de construcție trebuie să fie subțiri; desenul final se conturează cu o linie mai groasă.` }
    ]
  }
});

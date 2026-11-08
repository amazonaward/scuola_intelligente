TOPIC('ro', {
  id: "m2-mat-trasformazioni",
  title: "Transformările geometrice",
  intro: "A muta, a roti, a răsturna, a mări: <b>transformările geometrice</b> sunt regulile după care o figură își schimbă poziția sau dimensiunea în plan. Le găsești în gresie, în sigle, în oglinzi, în jocurile video și chiar în aripile unui fluture.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "1. Ce este o transformare",
      html: `<p>O <b>transformare geometrică</b> este o regulă care asociază fiecărui punct <b>P</b> al planului unul și numai un punct <b>P'</b> (se citește „P prim”), numit <b>imagine</b> sau <b>corespondent</b> al lui P.</p>
<p>Aplicând regula tuturor punctelor unei figuri <b>F</b> se obține figura transformată <b>F'</b>.</p>
<p>Transformările se împart în două mari familii:</p>
<ul>
<li><b>Izometrii</b> (din grecescul <i>isos</i> = egal, <i>metron</i> = măsură): păstrează <b>lungimile</b> segmentelor și măsura unghiurilor. Figura se mută, dar rămâne <b>congruentă</b> (suprapozabilă) cu cea de plecare. Sunt izometrii <b>translația</b>, <b>rotația</b> și <b>simetria</b> (axială și centrală).</li>
<li><b>Asemănări</b>: păstrează <b>forma</b> (unghiurile), dar pot schimba dimensiunile. Figura este mărită sau micșorată cu un anumit <b>raport de asemănare k</b>.</li>
</ul>
<p>Un punct care coincide cu propria imagine (P = P') se numește <b>punct fix</b>.</p>`
    },
    {
      type: "text",
      title: "2. Translația: alunecarea",
      html: `<p>În <b>translație</b> toate punctele se deplasează cu aceeași distanță, în aceeași direcție și în același sens. Această deplasare se descrie cu un <b>vector</b> <b>v</b>: o săgeată care are</p>
<ul>
<li><b>modul</b> (lungimea deplasării),</li>
<li><b>direcție</b> (dreapta pe care are loc),</li>
<li><b>sens</b> (încotro arată săgeata).</li>
</ul>
<p>În planul cartezian un vector se scrie cu componentele sale, de exemplu <b>v(3; −2)</b>: „3 spre dreapta și 2 în jos”. Punctul A(1; 4) devine A'(1+3; 4−2) = <b>A'(4; 2)</b>.</p>
<p>Regula: <b>P(x; y) → P'(x + a; y + b)</b> cu v(a; b).</p>
<p>Translația <b>nu are puncte fixe</b> (în afară de cea cu vector nul) și păstrează <b>orientarea</b>: dacă vârfurile unui triunghi se citesc în sens antiorar, și cele ale imaginii se citesc în sens antiorar.</p>`
    },
    {
      type: "svg",
      title: "Cele patru izometrii comparate",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<line x1="300" y1="0" x2="300" y2="340" stroke="#cbd5e1" stroke-width="2"/>
<line x1="0" y1="170" x2="600" y2="170" stroke="#cbd5e1" stroke-width="2"/>
<text x="150" y="22" font-size="17" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Translație</text>
<polygon points="30,140 80,140 30,70" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<polygon points="170,140 220,140 170,70" fill="#1d4ed8" fill-opacity="0.75" stroke="#1e3a8a" stroke-width="2"/>
<line x1="85" y1="110" x2="160" y2="110" stroke="#f97316" stroke-width="4"/>
<polygon points="160,102 175,110 160,118" fill="#f97316"/>
<text x="122" y="100" font-size="16" fill="#c2410c" text-anchor="middle">v</text>
<text x="450" y="22" font-size="17" font-weight="bold" fill="#15803d" text-anchor="middle">Simetrie axială</text>
<line x1="450" y1="35" x2="450" y2="160" stroke="#15803d" stroke-width="3" stroke-dasharray="8,6"/>
<polygon points="380,140 430,140 430,70" fill="#86efac" stroke="#15803d" stroke-width="2"/>
<polygon points="520,140 470,140 470,70" fill="#15803d" fill-opacity="0.75" stroke="#14532d" stroke-width="2"/>
<text x="458" y="160" font-size="15" fill="#15803d">axa r</text>
<text x="150" y="195" font-size="17" font-weight="bold" fill="#7c3aed" text-anchor="middle">Rotație de 90°</text>
<circle cx="150" cy="270" r="5" fill="#7c3aed"/>
<text x="140" y="292" font-size="15" fill="#7c3aed">O</text>
<polygon points="160,260 220,260 220,220" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
<polygon points="140,260 140,320 100,320" fill="#7c3aed" fill-opacity="0.75" stroke="#4c1d95" stroke-width="2"/>
<path d="M205 245 A60 60 0 0 1 135 305" fill="none" stroke="#f97316" stroke-width="3" stroke-dasharray="5,4"/>
<text x="450" y="195" font-size="17" font-weight="bold" fill="#be123c" text-anchor="middle">Simetrie centrală</text>
<circle cx="450" cy="270" r="5" fill="#be123c"/>
<text x="456" y="288" font-size="15" fill="#be123c">O</text>
<polygon points="470,255 530,255 470,215" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
<polygon points="430,285 370,285 430,325" fill="#be123c" fill-opacity="0.75" stroke="#881337" stroke-width="2"/>
<line x1="530" y1="255" x2="370" y2="285" stroke="#be123c" stroke-width="1.5" stroke-dasharray="5,4"/>
</svg>`,
      caption: "Figura deschisă la culoare este cea de plecare (F), cea închisă este imaginea (F'). În toate cele patru cazuri F și F' sunt congruente."
    },
    {
      type: "text",
      title: "3. Rotația: rotirea în jurul unui punct",
      html: `<p>O <b>rotație</b> este definită de trei elemente:</p>
<ol>
<li><b>centrul de rotație O</b>, singurul punct care rămâne pe loc (punct fix);</li>
<li><b>unghiul de rotație α</b> (de exemplu 90°, 180°, 60°…);</li>
<li><b>sensul</b>: <b>antiorar</b> (prin convenție pozitiv, +) sau <b>orar</b> (negativ, −).</li>
</ol>
<p>Fiecare punct P se mișcă pe un cerc cu centrul în O: distanța OP rămâne egală cu OP', iar unghiul POP' este chiar α.</p>
<p>În planul cartezian, cu centrul în origine:</p>
<ul>
<li>rotație de +90°: <b>(x; y) → (−y; x)</b></li>
<li>rotație de 180°: <b>(x; y) → (−x; −y)</b></li>
<li>rotație de −90° (sau +270°): <b>(x; y) → (y; −x)</b></li>
</ul>
<p>O rotație de 360° readuce fiecare punct la locul lui: este <b>identitatea</b>.</p>`
    },
    {
      type: "text",
      title: "4. Simetriile: oglinda",
      html: `<p><b>Simetria axială</b> (sau răsturnarea): este dată de o dreaptă <b>r</b>, <b>axa de simetrie</b>. Punctul P' este astfel încât axa r este <b>mediatoarea segmentului PP'</b>: PP' este perpendicular pe r, iar mijlocul lui PP' se află pe r. Punctele axei sunt toate puncte fixe.</p>
<p>Simetria axială <b>inversează orientarea</b>: este ca atunci când te privești în oglindă, unde mâna dreaptă pare o mână stângă.</p>
<ul>
<li>Axa x: (x; y) → (x; −y)</li>
<li>Axa y: (x; y) → (−x; y)</li>
<li>Bisectoarea y = x: (x; y) → (y; x)</li>
</ul>
<p><b>Simetria centrală</b>: este dată de un punct <b>O</b>, <b>centrul de simetrie</b>, care este mijlocul fiecărui segment PP'. Este echivalentă cu o <b>rotație de 180°</b> în jurul lui O. Cu centrul în origine: (x; y) → (−x; −y).</p>
<p>O figură are o <b>axă de simetrie</b> dacă simetria față de acea axă o transformă în ea însăși. Pătratul are 4, dreptunghiul 2, triunghiul echilateral 3, cercul o infinitate.</p>`
    },
    {
      type: "widget",
      title: "Laborator: transformă punctul",
      widget: "numberLine",
      options: { min: -8, max: 8, step: 1, marks: [-3, 3] },
      caption: "Pe o dreaptă, simetria față de 0 trimite 3 în −3: este exact ce se întâmplă cu coordonata x în simetria față de axa y. Încearcă să sari de la 3 la −3: cât măsoară saltul? (6 = de două ori distanța până la axă)."
    },
    {
      type: "quiz",
      title: "Mini-test: izometrii",
      questions: [
        { type: "mc", q: "Care transformare este descrisă de un vector?", options: ["Rotația", "Translația", "Simetria axială"], answer: 1, explain: "Translația mută toate punctele după același vector (modul, direcție, sens)." },
        { type: "mc", q: "Punctul A(2; 5) este translatat cu v(−4; 1). Unde ajunge?", options: ["A'(6; 6)", "A'(−2; 6)", "A'(−2; 4)"], answer: 1, explain: "x: 2 + (−4) = −2; y: 5 + 1 = 6. Deci A'(−2; 6)." },
        { type: "tf", q: "Simetria centrală este la fel cu o rotație de 180° în jurul centrului.", answer: true, explain: "Fiecare punct ajunge în partea opusă față de O, la aceeași distanță: este o jumătate de tură." },
        { type: "num", q: "Câte axe de simetrie are un pătrat?", answer: 4, explain: "2 mediane (verticală și orizontală) și 2 diagonale." }
      ]
    },
    {
      type: "text",
      title: "5. Compunerea izometriilor",
      html: `<p>Se pot aplica două transformări una după alta: se vorbește despre <b>compunere</b>. Câteva rezultate importante:</p>
<ul>
<li>două translații dau o translație (se adună vectorii);</li>
<li>două simetrii axiale cu axe <b>paralele</b> dau o <b>translație</b> cu modulul dublu față de distanța dintre axe;</li>
<li>două simetrii axiale cu axe <b>concurente</b> în O dau o <b>rotație</b> cu centrul în O și unghiul dublu față de unghiul dintre axe;</li>
<li>două simetrii centrale dau o translație.</li>
</ul>
<p>De aceea se spune că simetria axială este transformarea „cărămidă”: combinând cel mult trei simetrii axiale se obține <b>orice izometrie</b> a planului.</p>`
    },
    {
      type: "text",
      title: "6. Omotetia și asemănarea: a mări și a micșora",
      html: `<p><b>Omotetia</b> de centru O și raport <b>k</b> trimite fiecare punct P într-un punct P' de pe dreapta OP astfel încât <b>OP' = k · OP</b>.</p>
<ul>
<li>dacă <b>k &gt; 1</b> figura se <b>mărește</b>;</li>
<li>dacă <b>0 &lt; k &lt; 1</b> figura se <b>micșorează</b>;</li>
<li>dacă <b>k = 1</b> nu se schimbă (identitate);</li>
<li>dacă k este negativ, imaginea se află de partea opusă a lui O (cu k = −1 este simetria centrală).</li>
</ul>
<p>Două figuri se numesc <b>asemenea</b> dacă una se obține din cealaltă cu o omotetie urmată (eventual) de o izometrie. În figurile asemenea:</p>
<ul>
<li><b>unghiurile corespondente sunt egale</b>;</li>
<li><b>laturile corespondente sunt proporționale</b>, cu raportul k;</li>
<li><b>perimetrele</b> sunt în raportul <b>k</b>;</li>
<li><b>ariile</b> sunt în raportul <b>k²</b> (iar volumele corpurilor în raportul k³).</li>
</ul>`
    },
    {
      type: "svg",
      title: "O omotetie de raport 2",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<circle cx="60" cy="260" r="7" fill="#dc2626"/>
<text x="40" y="290" font-size="18" fill="#dc2626" font-weight="bold">O</text>
<line x1="60" y1="260" x2="540" y2="260" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<line x1="60" y1="260" x2="300" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<line x1="60" y1="260" x2="540" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,5"/>
<polygon points="180,260 300,190 180,150" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
<polygon points="300,260 540,120 300,40" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="150" y="160" font-size="18" fill="#92400e" font-weight="bold">A</text>
<text x="290" y="34" font-size="18" fill="#92400e" font-weight="bold">A'</text>
<text x="300" y="215" font-size="18" fill="#92400e" font-weight="bold">B</text>
<text x="545" y="115" font-size="18" fill="#92400e" font-weight="bold">B'</text>
<text x="380" y="215" font-size="17" fill="#0f172a">OA' = 2 · OA</text>
<text x="380" y="240" font-size="17" fill="#0f172a">aria F' = 4 · aria F</text>
</svg>`,
      caption: "Cu k = 2 fiecare latură se dublează, dar aria devine de 4 ori mai mare (2² = 4)."
    },
    {
      type: "example",
      title: "Exemplu practic: harta și scara",
      html: `<p>O hartă la scara <b>1 : 25 000</b> este o figură <b>asemenea</b> cu teritoriul real, cu raportul k = 1/25 000.</p>
<p>Dacă pe hartă două sate sunt la <b>8 cm</b> distanță, în realitate sunt la 8 × 25 000 = 200 000 cm = <b>2 km</b>.</p>
<p>Atenție la arii: un câmp care pe hartă este 2 cm × 2 cm = 4 cm² în realitate măsoară 500 m × 500 m = 250 000 m², adică 4 cm² × 25 000² = 2,5 miliarde de cm². Ariile se scalează cu <b>k²</b>!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: coordonatele unui triunghi",
      html: `<p>Triunghiul ABC are vârfurile A(1; 1), B(4; 1), C(1; 3).</p>
<table>
<tr><th>Transformarea</th><th>A'</th><th>B'</th><th>C'</th></tr>
<tr><td>Translație v(2; 3)</td><td>(3; 4)</td><td>(6; 4)</td><td>(3; 6)</td></tr>
<tr><td>Simetrie față de axa y</td><td>(−1; 1)</td><td>(−4; 1)</td><td>(−1; 3)</td></tr>
<tr><td>Rotație +90° (centru O)</td><td>(−1; 1)</td><td>(−1; 4)</td><td>(−3; 1)</td></tr>
<tr><td>Omotetie k = 2 (centru O)</td><td>(2; 2)</td><td>(8; 2)</td><td>(2; 6)</td></tr>
</table>
<p>Verificare: AB = 3 și A'B' = 3 în primele trei rânduri (izometrii); în omotetie A'B' = 6 = 2 · 3.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege transformările",
      intro: "Dacă regulile cu coordonate nu te conving, încearcă cu mâinile, cu arta sau cu 3D.",
      tabs: [
        {
          label: "✂️ Hârtie, foarfecă și calc",
          html: `<p>Metoda folosită în multe școli din Europa de Nord este <b>manipulativă</b>:</p>
<ul>
<li><b>Translația</b>: copiază figura pe o foaie transparentă și fă-o să <b>alunece</b> fără să o rotești.</li>
<li><b>Rotația</b>: înfige un creion în centrul O și <b>rotește</b> foaia transparentă.</li>
<li><b>Simetria axială</b>: îndoaie foaia de-a lungul axei sau <b>întoarce</b> calcul pe partea cealaltă. Cu o picătură de acuarelă pe o parte și îndoirea obții imediat figura simetrică („fluturele”).</li>
<li><b>Simetria centrală</b>: rotește calcul o jumătate de tură în jurul centrului.</li>
</ul>
<p>Întrebare-cheie: pentru a obține F' a trebuit să <b>întorci</b> calcul pe partea cealaltă? Dacă da, izometria inversează orientarea (este o simetrie axială sau o compunere a ei).</p>`
        },
        {
          label: "🎨 Escher și mozaicurile din Alhambra",
          html: `<p>Artistul olandez <b>M. C. Escher</b> (1898–1972), după ce a vizitat <b>Alhambra</b> din Granada (Spania), a construit desene cu pești, păsări și șopârle care umplu planul fără să lase goluri: <b>pavările</b>.</p>
<p>Trucul: se pornește de la un pătrat, se „mușcă” o bucată de pe o latură și se <b>translatează</b> pe latura opusă (sau se <b>rotește</b> în jurul unui vârf). Noua piesă se îmbină perfect cu copiile ei.</p>
<p>Matematicienii au demonstrat (Fiodorov, 1891) că există exact <b>17 tipuri</b> de simetrii pentru motivele care se repetă în plan: meșterii arabi din Alhambra au folosit foarte multe dintre ele cu secole înainte!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#eff6ff"/>
<g stroke="#1e3a8a" stroke-width="2">
<path d="M20 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M100 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M180 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M260 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M340 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
<path d="M420 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#fbbf24"/>
<path d="M500 20 h80 q-15 25 0 50 q15 25 0 50 h-80 q15 -25 0 -50 q-15 -25 0 -50z" fill="#60a5fa"/>
</g>
<text x="300" y="165" font-size="18" fill="#1e3a8a" text-anchor="middle">Aceeași piesă „mușcată”, translatată iar și iar,</text>
<text x="300" y="192" font-size="18" fill="#1e3a8a" text-anchor="middle">umple fâșia fără goluri.</text>
</svg>`
        },
        {
          label: "🎮 Ca în jocurile video",
          html: `<p>În jocurile video fiecare personaj este o mulțime de puncte cu coordonate. Calculatorul le transformă de zeci de ori pe secundă:</p>
<ul>
<li>personajul <b>merge</b> → translație (x + 2; y);</li>
<li>personajul <b>se întoarce</b> spre stânga → simetrie față de o axă verticală (−x; y);</li>
<li>camera <b>face zoom</b> → omotetie cu k &gt; 1;</li>
<li>o roată se <b>rotește</b> → rotație.</li>
</ul>
<p>Plăcile grafice fac miliarde de asemenea calcule pe secundă folosind <b>matricele</b>, tabele de numere pe care le vei studia la liceu.</p>`
        },
        {
          label: "🧊 Rotește un corp în 3D",
          html: `<p>Rotațiile există și în spațiu, în jurul unei <b>axe</b> în loc de un punct. Trage prisma hexagonală: rotind-o cu <b>60°</b> în jurul axei sale, ea pare din nou identică, pentru că baza ei este un hexagon regulat (360° : 6 = 60°). Se spune că are o <b>simetrie de rotație de ordinul 6</b>.</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 1.4, color: "#a78bfa", labels: true }
        },
        {
          "label": "🇬🇷 Meandrul grecesc: o translație infinită",
          "html": "<p>Pe vasele, mozaicurile și templele din <b>Grecia</b> antică se găsește adesea un chenar în spirală pătrățoasă: <b>meandrul</b>, numit și <b>«cheia grecească»</b>. Numele vine de la râul Meandru (în Turcia), faimos pentru curbele sale.</p><p>Meandrul este construit cu o singură transformare: <b>translația</b>.</p><ol><li>Pe o foaie cu pătrățele desenează <b>«cărămida»</b>: o bucată de spirală (în desen este în chenarul galben).</li><li>Alege un <b>vector</b>: de exemplu 8 pătrățele spre dreapta.</li><li>Copiază cărămida, apoi mut-o cu acel vector și copiaz-o din nou… și din nou.</li><li>Unește cărămizile cu liniile de margine: iată friza!</li></ol><p>Fiecare cărămidă este <b>imaginea</b> celei precedente: aceeași formă, aceeași mărime, aceeași orientare. Un desen care se repetă astfel de-a lungul unei fâșii se numește <b>friză</b>. Matematicienii au demonstrat că, combinând translații, simetrii și rotații de o jumătate de tură, există <b>doar 7 tipuri</b> diferite de friză.</p><p>🎯 Are meandrul și o <b>simetrie axială</b>? Încearcă să îndoi desenul de-a lungul unei drepte verticale și verifică.</p>",
          "svg": "<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"250\" fill=\"#fff7ed\"/><polyline points=\"60,120 60,40 120,40 120,100 80,100 80,60 100,60 100,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"140,120 140,40 200,40 200,100 160,100 160,60 180,60 180,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"220,120 220,40 280,40 280,100 240,100 240,60 260,60 260,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"300,120 300,40 360,40 360,100 320,100 320,60 340,60 340,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"380,120 380,40 440,40 440,100 400,100 400,60 420,60 420,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><polyline points=\"460,120 460,40 520,40 520,100 480,100 480,60 500,60 500,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"7\" stroke-linejoin=\"miter\"/><line x1=\"56\" y1=\"120\" x2=\"544\" y2=\"120\" stroke=\"#1e3a8a\" stroke-width=\"7\"/><line x1=\"56\" y1=\"32\" x2=\"544\" y2=\"32\" stroke=\"#1e3a8a\" stroke-width=\"7\"/><rect x=\"56\" y=\"28\" width=\"80\" height=\"96\" fill=\"#fde68a\" fill-opacity=\"0.35\" stroke=\"#d97706\" stroke-width=\"3\"/><defs><marker id=\"arrM\" markerWidth=\"10\" markerHeight=\"10\" refX=\"8\" refY=\"5\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10 Z\" fill=\"#dc2626\"/></marker></defs><line x1=\"60\" y1=\"170\" x2=\"136\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><line x1=\"140\" y1=\"170\" x2=\"216\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><line x1=\"220\" y1=\"170\" x2=\"296\" y2=\"170\" stroke=\"#dc2626\" stroke-width=\"4\" marker-end=\"url(#arrM)\"/><text x=\"320\" y=\"176\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">același vector, mereu repetat</text><text x=\"96\" y=\"225\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\">«Cărămida» colorată, translatată de multe ori, formează friza.</text></svg>"
        },
        {
          "label": "🇲🇩 Covoare și broderii din Moldova",
          "html": "<p>În <b>Moldova</b> și în <b>România</b> covoarele tradiționale și broderiile cămășilor sunt pline de geometrie: romburi, stele, cruci, pomi stilizați. În 2016 <b>UNESCO</b> a recunoscut arta covoarelor tradiționale de perete din România și Republica Moldova drept <b>patrimoniu cultural imaterial al umanității</b>.</p><p>Brodeuzele lucrează pe <b>urzeala țesăturii</b>, care este o grilă de pătrățele, exact ca la caietul tău. Pentru a crea un motiv folosesc (adesea fără să le numească așa) <b>transformările geometrice</b>:</p><ol><li>Desenează <b>un sfert</b> din motiv, pătrățel cu pătrățel.</li><li>Îl <b>răstoarnă</b> față de o dreaptă verticală (<b>simetrie axială</b>): fiecare pătrățel ajunge de cealaltă parte, la aceeași distanță de axă.</li><li>Răstoarnă jumătatea obținută față de o dreaptă orizontală: motivul este complet.</li><li>Apoi îl <b>translatează</b> de-a lungul marginii covorului pentru a face un chenar.</li></ol><p>Motivul obținut are <b>două axe de simetrie</b> și rămâne la fel chiar dacă îl <b>rotești cu 90°</b> în jurul centrului.</p><p>🎯 Încearcă: pe o foaie cu pătrățele desenează un sfert de motiv al tău într-un pătrat 6 × 6 și completează-l cu două simetrii. Apoi translatează motivul pentru a face o bordură!</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"30\" x2=\"274\" y2=\"30\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"58\" y1=\"30\" x2=\"58\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"48\" x2=\"274\" y2=\"48\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"76\" y1=\"30\" x2=\"76\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"66\" x2=\"274\" y2=\"66\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"94\" y1=\"30\" x2=\"94\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"84\" x2=\"274\" y2=\"84\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"112\" y1=\"30\" x2=\"112\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"102\" x2=\"274\" y2=\"102\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"120\" x2=\"274\" y2=\"120\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"148\" y1=\"30\" x2=\"148\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"138\" x2=\"274\" y2=\"138\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"166\" y1=\"30\" x2=\"166\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"156\" x2=\"274\" y2=\"156\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"184\" y1=\"30\" x2=\"184\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"174\" x2=\"274\" y2=\"174\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"202\" y1=\"30\" x2=\"202\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"192\" x2=\"274\" y2=\"192\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"220\" y1=\"30\" x2=\"220\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"210\" x2=\"274\" y2=\"210\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"238\" y1=\"30\" x2=\"238\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"228\" x2=\"274\" y2=\"228\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"256\" y1=\"30\" x2=\"256\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"246\" x2=\"274\" y2=\"246\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"274\" y1=\"30\" x2=\"274\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"40\" y1=\"264\" x2=\"274\" y2=\"264\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><rect x=\"41\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"31\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"247\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"49\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"229\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"67\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"211\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"85\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"193\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"103\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"175\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"121\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"121\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"157\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"157\" width=\"16\" height=\"16\" fill=\"#111827\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"31\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"247\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"49\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"229\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"67\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"211\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"85\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"193\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"103\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"175\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"121\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"157\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"149\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"41\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"257\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"59\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"239\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"77\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"221\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"95\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"203\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"113\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"185\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"131\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"167\" y=\"139\" width=\"16\" height=\"16\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"157\" y1=\"20\" x2=\"157\" y2=\"274\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><line x1=\"30\" y1=\"147\" x2=\"284\" y2=\"147\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-dasharray=\"8 5\"/><text x=\"320\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">Axe de simetrie (albastru):</text><text x=\"320\" y=\"84\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">îndoaie de-a lungul unei axe și</text><text x=\"320\" y=\"104\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">cele două jumătăți coincid.</text><text x=\"320\" y=\"144\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">Rotație: rotește cu 90°</text><text x=\"320\" y=\"168\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">în jurul centrului și</text><text x=\"320\" y=\"188\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">motivul rămâne la fel.</text><text x=\"320\" y=\"228\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">Fiecare pătrățel = un punct</text><text x=\"320\" y=\"248\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">cu cruciulița pe țesătură.</text></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Știai că…? Simetriile corpului și ale naturii",
      html: `<p>Aproape toate animalele au o <b>simetrie bilaterală</b> (o axă care împarte corpul în dreapta și stânga), în timp ce stelele de mare adulte au o simetrie de rotație de ordinul <b>5</b>. Fulgii de zăpadă au o simetrie de ordinul <b>6</b>, datorată formei moleculelor de apă care se leagă în gheață formând hexagoane.</p>
<p>Chipul nostru însă nu este perfect simetric: dacă iei o fotografie și compui o față din două jumătăți stângi, ți se va părea aproape o altă persoană!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Felix Klein și geometria transformărilor",
      html: `<p>În <b>1872</b> matematicianul german <b>Felix Klein</b>, la 23 de ani, a prezentat <b>Programul de la Erlangen</b>: ideea că orice geometrie se poate defini prin transformările care <b>nu</b> schimbă anumite proprietăți. Geometria euclidiană studiază ce rămâne neschimbat la izometrii (lungimi, unghiuri); geometria asemănărilor studiază ce rămâne neschimbat la mărire (unghiuri, rapoarte). Această idee stă la baza fizicii moderne, inclusiv a relativității lui Einstein.</p>`
    },
    {
      type: "widget",
      title: "Clasifică transformările",
      widget: "classify",
      options: {
        groups: ["Izometrie (aceeași măsură)", "Asemănare neizometrică (se schimbă măsura)"],
        items: [
          ["🪞 Imagine în oglindă", 0],
          ["🎡 Cabina care se rotește în roata panoramică", 0],
          ["🛗 Liftul care urcă", 0],
          ["🗺️ Hartă la scara 1:100 000", 1],
          ["📷 Fotografie tipărită în format mai mare", 1],
          ["🔍 Lupă", 1],
          ["🧩 Piesă de puzzle mutată", 0],
          ["🏠 Machetă a unei case", 1]
        ]
      },
      caption: "Întreabă-te mereu: lungimile rămân egale?"
    },
    {
      type: "conceptMap",
      title: "Harta transformărilor: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "trasf", label: "Transformare", x: 50, y: 6, color: "#0ea5e9", html: "Regulă care asociază fiecărui punct P un unic punct P'.", why: "Ideea de a studia figurile prin mișcări datează de la Euclid (circa 300 î.Hr.), care demonstra egalitatea triunghiurilor „suprapunându-le”. Felix Klein, în 1872, a pus transformările în centrul întregii geometrii." },
        { id: "iso", label: "Izometrii", x: 25, y: 28, color: "#16a34a", html: "Transformări care păstrează lungimile și unghiurile.", why: "Numele vine din grecescul isos (egal) și metron (măsură). Dacă toate distanțele rămân egale, figura este congruentă: pentru Euclid două figuri sunt egale chiar dacă se pot suprapune printr-o mișcare rigidă." },
        { id: "simil", label: "Asemănări", x: 75, y: 28, color: "#f59e0b", html: "Transformări care păstrează forma: unghiuri egale, laturi proporționale.", why: "Se bazează pe teorema lui Thales (secolul al VI-lea î.Hr.): dreptele paralele determină pe două transversale segmente proporționale. Thales, potrivit tradiției, a măsurat astfel înălțimea piramidelor după umbra lor." },
        { id: "trasl", label: "Translație", x: 8, y: 55, color: "#2563eb", html: "Deplasarea tuturor punctelor după un vector.", why: "Conceptul de vector (mărime cu modul, direcție și sens) a fost formalizat în secolul al XIX-lea de matematicieni precum Hamilton și Grassmann, studiind forțele și vitezele din fizică." },
        { id: "rot", label: "Rotație", x: 28, y: 62, color: "#7c3aed", html: "Rotire cu un unghi α în jurul unui centru O.", why: "Se bazează pe cerc: fiecare punct rămâne la aceeași distanță de O. Sensul antiorar este pozitiv prin convenție, aceeași folosită în trigonometrie pentru a măsura unghiurile pornind de la axa x." },
        { id: "simass", label: "Simetrie axială", x: 48, y: 50, color: "#15803d", html: "Răsturnare față de o dreaptă (axă).", why: "Axa este locul geometric al punctelor egal depărtate de P și P', adică mediatoarea segmentului PP'. Compunând cel mult trei simetrii axiale se obține orice izometrie a planului: de aceea este transformarea fundamentală." },
        { id: "simcen", label: "Simetrie centrală", x: 40, y: 82, color: "#be123c", html: "Fiecare punct merge în partea opusă a lui O, la aceeași distanță.", why: "O este mijlocul lui PP'. Este echivalentă cu o rotație de 180° și este și o omotetie cu k = −1: este punctul de întâlnire dintre cele două familii de transformări." },
        { id: "omot", label: "Omotetie (raport k)", x: 75, y: 58, color: "#ea580c", html: "Mărire sau micșorare pornind de la un centru O: OP' = k · OP.", why: "Este principiul camerei obscure și al proiectorului: razele de lumină pornesc dintr-un punct și se depărtează în linie dreaptă, deci imaginea este mai mare dacă ecranul este mai departe." },
        { id: "aree", label: "Perimetre ×k, arii ×k²", x: 82, y: 85, color: "#a16207", html: "În figurile asemenea perimetrul se schimbă cu k, aria cu k², volumul cu k³.", why: "Aria este un produs de două lungimi, iar fiecare se înmulțește cu k: k · k = k². Din același motiv Galileo a observat (1638) că un animal uriaș nu poate avea aceleași proporții ca unul mic: greutatea crește ca k³, secțiunea oaselor doar ca k²." }
      ],
      edges: [
        ["trasf", "iso", "păstrează măsurile"],
        ["trasf", "simil", "păstrează forma"],
        ["iso", "trasl", ""],
        ["iso", "rot", ""],
        ["iso", "simass", ""],
        ["rot", "simcen", "de 180°"],
        ["simass", "simcen", "două axe ⊥"],
        ["simil", "omot", "se construiește cu"],
        ["omot", "aree", "efecte asupra"],
        ["omot", "simcen", "cu k = −1"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Izometrii</b>: translație (vector), rotație (centru, unghi, sens), simetrie axială (axă), simetrie centrală (centru). Păstrează lungimile și unghiurile.</li>
<li>Translația și rotația păstrează <b>orientarea</b>; simetria axială o <b>inversează</b>.</li>
<li><b>Asemănare</b> de raport k: unghiuri egale, laturi × k, perimetre × k, arii × k².</li>
<li>Coordonate: translație (x+a; y+b); simetrie față de axa x (x; −y); față de axa y (−x; y); centrală în O (−x; −y); rotație +90° (−y; x).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: asemănare",
      questions: [
        { type: "num", q: "Un triunghi are perimetrul de 15 cm. Un triunghi asemenea are raportul de asemănare k = 3. Cât măsoară perimetrul lui?", answer: 45, unit: "cm", explain: "Perimetrele sunt în raportul k: 15 × 3 = 45 cm." },
        { type: "num", q: "Un pătrat are aria de 9 cm². Îl măresc cu k = 2. Ce arie are noua figură?", answer: 36, unit: "cm²", explain: "Ariile sunt în raportul k² = 4: 9 × 4 = 36 cm²." },
        { type: "tf", q: "Două figuri asemenea au întotdeauna unghiurile corespondente egale.", answer: true, explain: "Asemănarea păstrează forma, adică unghiurile." }
      ]
    }
  ],
  glossary: [
    { t: "Transformare geometrică", d: "Regulă care asociază fiecărui punct P al planului un unic punct P'." },
    { t: "Izometrie", d: "Transformare care păstrează distanțele: figura rămâne congruentă." },
    { t: "Vector", d: "Segment orientat cu modul, direcție și sens; descrie o translație." },
    { t: "Centru de rotație", d: "Punct care rămâne pe loc într-o rotație." },
    { t: "Axă de simetrie", d: "Dreaptă față de care o figură se răstoarnă în ea însăși." },
    { t: "Punct fix", d: "Punct care coincide cu propria imagine." },
    { t: "Orientare", d: "Sensul (orar sau antiorar) în care se citesc vârfurile unei figuri." },
    { t: "Omotetie", d: "Transformare care mărește sau micșorează figurile pornind de la un centru, cu raportul k." },
    { t: "Raport de asemănare", d: "Numărul k cu care se înmulțesc toate lungimile unei figuri asemenea." },
    { t: "Congruente", d: "Figuri suprapozabile, cu aceleași măsuri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre acestea NU este o izometrie?", options: ["Translația", "Omotetia cu k = 3", "Simetria centrală", "Rotația de 45°"], answer: 1, explain: "Omotetia cu k = 3 triplează lungimile, deci nu păstrează distanțele." },
      { type: "mc", q: "Simetricul lui P(3; −2) față de axa x este…", options: ["(−3; −2)", "(3; 2)", "(−3; 2)", "(−2; 3)"], answer: 1, explain: "În simetria față de axa x, x rămâne la fel, iar y își schimbă semnul." },
      { type: "mc", q: "Punctul Q(2; 5) rotit cu +90° în jurul originii devine…", options: ["(5; 2)", "(−5; 2)", "(5; −2)", "(−2; −5)"], answer: 1, explain: "Regula rotației de +90°: (x; y) → (−y; x) = (−5; 2)." },
      { type: "tf", q: "Simetria axială păstrează orientarea figurilor.", answer: false, explain: "O inversează: este efectul de oglindă, dreapta devine stânga." },
      { type: "tf", q: "O translație nu are puncte fixe (dacă vectorul nu este nul).", answer: true, explain: "Toate punctele se deplasează cu aceeași cantitate: niciunul nu rămâne pe loc." },
      { type: "num", q: "Punctul A(−1; 4) este translatat cu vectorul v(5; −3). Care este abscisa (x) lui A'?", answer: 4, explain: "x' = −1 + 5 = 4 (iar y' = 4 − 3 = 1)." },
      { type: "num", q: "Două dreptunghiuri asemenea au raportul de asemănare k = 3. Cel mai mic are aria de 5 cm². Cât măsoară aria celui mai mare?", answer: 45, unit: "cm²", explain: "Ariile sunt în raportul k² = 9: 5 × 9 = 45 cm²." },
      { type: "num", q: "Câte axe de simetrie are un triunghi echilateral?", answer: 3, explain: "Fiecare înălțime (care este și mediană și bisectoare) este o axă de simetrie." },
      { type: "text", q: "Cum se numește transformarea care mărește sau micșorează o figură pornind de la un centru O?", answer: ["omotetie", "omotetia", "omotetie de centru o"], explain: "Este omotetia de raport k." },
      { type: "mc", q: "Compunând două simetrii axiale cu axe paralele aflate la 3 cm distanță se obține…", options: ["o rotație de 3°", "o translație de 6 cm", "o simetrie centrală", "o translație de 3 cm"], answer: 1, explain: "Rezultatul este o translație perpendiculară pe axe, cu modulul dublu față de distanța lor: 2 × 3 = 6 cm." },
      { type: "order", q: "Ordonează figurile de la cel mai mic la cel mai mare număr de axe de simetrie.", items: ["Triunghi scalen (0)", "Triunghi isoscel (1)", "Dreptunghi (2)", "Pătrat (4)", "Cerc (o infinitate)"], explain: "0, 1, 2, 4, o infinitate." },
      { type: "mc", q: "Pe o hartă la scara 1:50 000 două orașe sunt la 6 cm distanță. Cât de departe sunt în realitate?", options: ["300 m", "3 km", "30 km", "50 km"], answer: 1, explain: "6 × 50 000 = 300 000 cm = 3000 m = 3 km." }
    ],
    gen: [["proportion", 2]]
  }
});

TOPIC('ro', {
  id: "m2-tec-proiezioni-ortogonali",
  title: "Proiecțiile ortogonale",
  intro: "Cum îi explici unui tâmplar, unui mecanic sau unei imprimante 3D cum arată un obiect <b>tridimensional</b> folosind doar o foaie <b>plată</b>? Cu <b>proiecțiile ortogonale</b>: același obiect desenat <b>văzut din față, de sus și din lateral</b>, cu reguli precise pe care le înțeleg toți tehnicienii din lume.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Ce sunt",
      html: `<p><b>A proiecta</b> înseamnă «a arunca înainte»: imaginează-ți că proiectezi umbra unui obiect pe un perete. În proiecția <b>ortogonală</b>, razele de proiecție sunt <b>paralele</b> între ele și <b>perpendiculare</b> (adică la 90°, «ortogonale») pe planul pe care desenăm.</p>
<p>Rezultatul este un desen în care fețele paralele cu planul apar în <b>formă reală și mărime reală</b> (la scară): fără perspectivă, fără deformări. De aceea se pot <b>măsura</b>.</p>
<p>O singură vedere însă nu este de ajuns: un cub și un cilindru, văzute din față, pot arăta amândouă ca un pătrat! De aceea se folosesc <b>trei plane</b> perpendiculare între ele, care formează un colț ca cel al unei camere (<b>triedrul</b>):</p>
<ul>
<li><b>P.V. – planul vertical</b>: primește <b>vederea frontală</b> (sau <b>fațada</b>);</li>
<li><b>P.O. – planul orizontal</b>: primește <b>vederea de sus</b> (sau <b>planul</b>);</li>
<li><b>P.L. – planul lateral</b>: primește <b>vederea laterală</b> (sau <b>profilul</b>).</li>
</ul>
<p>Dreapta în care se întâlnesc P.V. și P.O. se numește <b>linia de pământ</b> (L.P.).</p>`
    },
    {
      type: "widget",
      title: "Recunoaște planurile triedrului",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="120,30 420,30 420,190 120,190" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<polygon points="120,190 420,190 350,300 50,300" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<polygon points="420,30 420,190 350,300 350,140" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<line x1="120" y1="190" x2="420" y2="190" stroke="#dc2626" stroke-width="5"/>
<polygon points="200,210 270,210 270,250 200,250" fill="#fb923c" stroke="#9a3412" stroke-width="2"/>
<polygon points="200,210 270,210 290,180 220,180" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
<polygon points="270,210 290,180 290,220 270,250" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
<text x="500" y="80" font-size="16" fill="#334155">atinge cercurile</text>
<text x="500" y="100" font-size="16" fill="#334155">și alege numele</text>
</svg>`,
        spots: [
          { x: 260, y: 100, label: "Planul vertical (P.V.)" },
          { x: 130, y: 270, label: "Planul orizontal (P.O.)" },
          { x: 385, y: 160, label: "Planul lateral (P.L.)" },
          { x: 160, y: 190, label: "Linia de pământ (L.P.)" },
          { x: 240, y: 230, label: "Obiectul de reprezentat" }
        ]
      },
      caption: "Cele trei plane formează un colț, ca pereții și podeaua unei camere. Obiectul se pune în colț și se «proiectează» pe fiecare plan."
    },
    {
      type: "text",
      title: "Metoda pas cu pas",
      html: `<ol>
<li><b>Observă obiectul</b> și alege fața cea mai semnificativă drept <b>vedere frontală</b> (cea care arată cel mai bine forma).</li>
<li>Desenează cu creionul subțire <b>linia de pământ</b> orizontală și o linie verticală: ele împart foaia în patru cadrane.</li>
<li>În cadranul din <b>stânga sus</b> desenează <b>vederea frontală</b> (P.V.), măsurând lățimea și înălțimea.</li>
<li><b>Sub</b> vederea frontală desenează <b>vederea de sus</b> (P.O.): lățimea (egală cu cea din fațadă, o aduci cu linii verticale) și adâncimea.</li>
<li><b>În dreapta</b> vederii frontale desenează <b>vederea laterală din stânga</b> (P.L.): înălțimea (o aduci cu linii orizontale) și adâncimea.</li>
<li>Ca să transferi <b>adâncimea</b> din plan în profil folosește o linie la <b>45°</b> în cadranul din dreapta jos (sau compasul): liniile orizontale din plan o ating și «se răsucesc», devenind verticale.</li>
<li><b>Conturează</b> muchiile vizibile cu linie continuă groasă; muchiile <b>ascunse</b> cu linie întreruptă; <b>axele</b> de simetrie cu linie mixtă (linie-punct).</li>
</ol>
<p>Aceasta este <b>metoda europeană</b> (numită și «a primului diedru», norma ISO metoda E).</p>`
    },
    {
      type: "svg",
      title: "Cele trei vederi ale unei trepte (metoda europeană)",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<line x1="20" y1="150" x2="380" y2="150" stroke="#dc2626" stroke-width="2"/>
<line x1="220" y1="20" x2="220" y2="300" stroke="#dc2626" stroke-width="2"/>
<line x1="220" y1="150" x2="330" y2="260" stroke="#64748b" stroke-width="2"/>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4">
<line x1="60" y1="130" x2="60" y2="170"/>
<line x1="120" y1="130" x2="120" y2="170"/>
<line x1="180" y1="130" x2="180" y2="170"/>
<line x1="180" y1="50" x2="240" y2="50"/>
<line x1="180" y1="90" x2="240" y2="90"/>
<line x1="180" y1="170" x2="240" y2="170"/>
<line x1="180" y1="230" x2="300" y2="230"/>
<line x1="240" y1="150" x2="240" y2="170"/>
<line x1="300" y1="130" x2="300" y2="230"/>
</g>
<polygon points="60,50 120,50 120,90 180,90 180,130 60,130" fill="#bfdbfe" stroke="#0f172a" stroke-width="4"/>
<rect x="60" y="170" width="120" height="60" fill="#bbf7d0" stroke="#0f172a" stroke-width="4"/>
<line x1="120" y1="170" x2="120" y2="230" stroke="#0f172a" stroke-width="4"/>
<rect x="240" y="50" width="60" height="80" fill="#fde68a" stroke="#0f172a" stroke-width="4"/>
<line x1="240" y1="90" x2="300" y2="90" stroke="#0f172a" stroke-width="3" stroke-dasharray="8 5"/>
<text x="120" y="40" font-size="15" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Vedere frontală (P.V.)</text>
<text x="120" y="255" font-size="15" font-weight="bold" fill="#15803d" text-anchor="middle">Vedere de sus (P.O.)</text>
<text x="270" y="40" font-size="15" font-weight="bold" fill="#b45309" text-anchor="middle">Vedere din stânga (P.L.)</text>
<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">linie la 45°</text>
<polygon points="410,140 455,140 455,170 500,170 500,200 410,200" fill="#bfdbfe" stroke="#0f172a" stroke-width="2"/>
<polygon points="410,140 455,140 491,112 446,112" fill="#93c5fd" stroke="#0f172a" stroke-width="2"/>
<polygon points="455,140 491,112 491,142 455,170" fill="#60a5fa" stroke="#0f172a" stroke-width="2"/>
<polygon points="455,170 500,170 536,142 491,142" fill="#93c5fd" stroke="#0f172a" stroke-width="2"/>
<polygon points="500,170 536,142 536,172 500,200" fill="#60a5fa" stroke="#0f172a" stroke-width="2"/>
<text x="480" y="255" font-size="15" fill="#0f172a" text-anchor="middle">obiectul (treapta)</text>
<text x="300" y="310" font-size="14" fill="#0f172a" text-anchor="middle">linie întreruptă = muchie ascunsă</text>
</svg>`,
      caption: "Vederea de sus se află sub fațadă, vederea laterală din stânga se află în dreapta ei. În vederea laterală, muchia treptei este ascunsă în spatele blocului înalt: de aceea este desenată întrerupt."
    },
    {
      type: "3d",
      title: "Rotește solidul și imaginează-ți cele trei vederi",
      scene: "solid",
      options: { shape: "box", w: 3, h: 1.5, d: 2, color: "#60a5fa", labels: true, shapes: ["box", "cube", "prism", "cylinder", "pyramid", "cone"] },
      caption: "Rotește solidul până îl vezi exact din față, apoi de sus, apoi din lateral: ceea ce vezi în fiecare caz este o proiecție ortogonală. Încearcă să schimbi solidul."
    },
    {
      type: "quiz",
      title: "Mini-test: planurile și vederile",
      questions: [
        { type: "mc", q: "În metoda europeană, unde se desenează vederea de sus?", options: ["Deasupra vederii frontale", "Sub vederea frontală", "În stânga vederii frontale"], answer: 1, explain: "În metoda europeană (primul diedru), planul se află sub fațadă." },
        { type: "mc", q: "Cum se desenează o muchie ascunsă?", options: ["Linie continuă groasă", "Linie întreruptă", "Linie-punct"], answer: 1, explain: "Muchiile ascunse se reprezintă cu o linie întreruptă." },
        { type: "tf", q: "În proiecția ortogonală, razele de proiecție sunt perpendiculare pe plan.", answer: true, explain: "Ortogonal înseamnă tocmai «în unghi drept»." }
      ]
    },
    {
      type: "example",
      title: "Exemplu practic: paralelipipedul",
      html: `<p>Un paralelipiped (ca o cărămidă) măsoară <b>8 cm</b> în lungime, <b>5 cm</b> în adâncime și <b>3 cm</b> în înălțime.</p>
<ul>
<li><b>Vedere frontală</b>: dreptunghi lat de 8 cm și înalt de 3 cm.</li>
<li><b>Vedere de sus</b>: dreptunghi lat de 8 cm și adânc de 5 cm, desenat sub primul.</li>
<li><b>Vedere laterală</b>: dreptunghi adânc de 5 cm și înalt de 3 cm, în dreapta primului.</li>
</ul>
<p>Observă: fiecare dimensiune apare în <b>două vederi</b>. Lățimea (8) este în fațadă și în plan, înălțimea (3) în fațadă și în profil, adâncimea (5) în plan și în profil. Este «verificarea» care îți spune dacă ai desenat bine!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: cilindrul și piramida",
      html: `<ul>
<li><b>Cilindru în picioare</b> (diametru 4 cm, înălțime 6 cm): vedere frontală = <b>dreptunghi</b> 4 × 6 cu axa verticală linie-punct; vedere laterală = același dreptunghi; vedere de sus = <b>cerc</b> cu diametrul de 4 cm cu două axe în cruce.</li>
<li><b>Piramidă cu baza pătrată</b> (latura 5 cm, înălțimea 6 cm): vederea frontală și cea laterală = <b>triunghiuri</b> isoscele cu baza 5 și înălțimea 6; vederea de sus = <b>pătrat</b> 5 × 5 cu cele două <b>diagonale</b>, care sunt muchiile ce urcă spre vârf.</li>
</ul>
<p>Două vederi identice (dreptunghi, dreptunghi) nu sunt de ajuns ca să înțelegi dacă obiectul este un cilindru sau un paralelipiped: este nevoie de a treia!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Secretul militar al lui Monge",
      html: `<p>Metoda proiecțiilor pe plane perpendiculare a fost pusă la punct de matematicianul francez <b>Gaspard Monge</b> (1746–1818), pe când era un tânăr desenator la școala militară din Mézières. Cu metoda lui, <b>fortificațiile</b> puteau fi proiectate mult mai repede decât prin calcule.</p>
<p>Era considerată atât de utilă încât armata franceză a ținut-o <b>secretă</b> ani la rând! Abia după Revoluție a putut Monge s-o predea public, iar în 1799 a apărut cartea lui <i>Géométrie descriptive</i> (geometrie descriptivă).</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Europa contra Americii",
      html: `<p>În <b>Statele Unite</b> și în Canada se folosește altă metodă, numită «americană» sau a <b>celui de-al treilea diedru</b>: vederea de sus se pune <b>deasupra</b> fațadei, iar vederea din dreapta, în <b>dreapta</b>. Vederile sunt aceleași, se schimbă doar poziția lor pe foaie.</p>
<p>Ca să se evite greșelile, în indicatorul (cartușul) desenelor tehnice se pune un simbol: un <b>trunchi de con</b> văzut din față și din lateral. Din poziția celor două desene se înțelege imediat ce metodă a fost folosită. O greșeală poate costa scump: o piesă făcută «în oglindă» nu se mai montează!</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Proiecție ortogonală: raze paralele și perpendiculare pe plan → formă reală, fără perspectivă.</li>
<li>Trei plane: <b>P.V.</b> (vedere frontală), <b>P.O.</b> (vedere de sus), <b>P.L.</b> (vedere laterală).</li>
<li>Metoda europeană: planul <b>sub</b> fațadă, profilul din stânga <b>în dreapta</b> fațadei.</li>
<li>Lățimea, înălțimea și adâncimea apar fiecare în două vederi: transferă-le cu linii de ghidaj și cu linia la 45°.</li>
<li>Linii: continuă groasă = vizibil; întreruptă = ascuns; linie-punct = axe.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege proiecțiile",
      intro: "Proiecțiile ortogonale se înțeleg mai bine cu mâinile și cu ochii. Iată câteva moduri diferite de a le «vedea».",
      tabs: [
        {
          label: "📦 Cutia care se deschide",
          html: `<p>Ia o cutie de pantofi fără capac și pune înăuntru un obiect (un zar, un dop, o piesă LEGO). Imaginează-ți că desenezi pe fiecare perete <b>umbra</b> obiectului văzută din față, de sus și din lateral.</p>
<p>Acum <b>deschide cutia</b> și întinde-o pe masă: peretele din fund rămâne pe loc (P.V.), fundul se rabate <b>în jos</b> (P.O. dedesubt), iar peretele lateral se rabate <b>într-o parte</b> (P.L. în dreapta). Iată de ce vederile se află exact în acele poziții!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<rect x="150" y="20" width="160" height="120" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="150" y="140" width="160" height="110" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<rect x="310" y="20" width="110" height="120" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="230" y="85" font-size="20" font-weight="bold" fill="#1e3a8a" text-anchor="middle">P.V.</text>
<text x="230" y="200" font-size="20" font-weight="bold" fill="#14532d" text-anchor="middle">P.O.</text>
<text x="365" y="85" font-size="20" font-weight="bold" fill="#78350f" text-anchor="middle">P.L.</text>
<path d="M120 60 Q 90 160 140 220" fill="none" stroke="#dc2626" stroke-width="3"/>
<polygon points="140,220 128,206 146,204" fill="#dc2626"/>
<text x="20" y="150" font-size="16" fill="#b91c1c">fundul</text>
<text x="20" y="170" font-size="16" fill="#b91c1c">se rabate în jos</text>
<path d="M430 30 Q 500 20 520 90" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="440" y="130" font-size="16" fill="#b91c1c">peretele</text>
<text x="440" y="150" font-size="16" fill="#b91c1c">se deschide lateral</text>
</svg>`
        },
        {
          label: "🔦 Umbre la soare",
          html: `<p><b>Soarele</b> este atât de departe încât razele lui ajung practic <b>paralele</b>. La prânz, vara, când Soarele este sus, umbra unui obiect pe podea este aproape <b>vederea lui de sus</b>.</p>
<p>O lanternă apropiată, în schimb, face raze care se desfac: umbra devine mai mare decât obiectul. Aceasta este <b>proiecția centrală</b>, cea a perspectivei și a fotografiei. Proiecția ortogonală este ca un «soare perfect» care luminează mereu la 90° față de plan.</p>`
        },
        {
          label: "🇺🇸 Metoda americană",
          html: `<p>În metoda americană (al treilea diedru) îți imaginezi că planul se află <b>între tine și obiect</b>, ca o sticlă pe care calchiezi ce vezi. Atunci:</p>
<ul>
<li>vederea de sus se desenează <b>deasupra</b> fațadei;</li>
<li>vederea din dreapta se desenează <b>în dreapta</b>.</li>
</ul>
<p>În metoda europeană, în schimb, obiectul se află <b>între tine și plan</b> și îi proiectezi «umbra» în spate. Figurile sunt identice: se schimbă doar așezarea lor pe foaie. Multor elevi metoda americană li se pare mai intuitivă: «desenez ce văd acolo unde văd».</p>`
        },
        {
          label: "🧊 Rotește solidul 3D",
          html: `<p>Alege un solid, privește-l exact din față, apoi de sus, apoi din lateral. Desenează pe o foaie ceea ce vezi în fiecare poziție: ai făcut cele trei proiecții!</p>`,
          scene: "solid",
          options: { shape: "cylinder", r: 1, h: 2, color: "#f97316", labels: true, shapes: ["cylinder", "cone", "pyramid", "prism", "box"] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta proiecțiilor ortogonale",
      nodes: [
        { id: "geomdesc", label: "Geometria descriptivă", x: 50, y: 7, color: "#7c3aed", html: "Partea geometriei care reprezintă obiecte 3D pe o foaie 2D în mod exact.", why: "A fost pusă la punct de Gaspard Monge la sfârșitul secolului al XVIII-lea. Înaintea lui, arhitecții și pietrarii foloseau deja planuri și elevații (o făceau romanii și constructorii de catedrale), dar fără o metodă matematică unică." },
        { id: "proiezione", label: "Proiecție ortogonală", x: 50, y: 28, color: "#2563eb", html: "Raze paralele între ele și perpendiculare pe planul de proiecție.", why: "Dacă razele sunt perpendiculare, fiecare segment paralel cu planul își păstrează lungimea: de aceea desenul se poate măsura. Este aceeași idee ca umbra la soare (raze paralele)." },
        { id: "triedro", label: "Triedru (3 plane)", x: 50, y: 48, color: "#0ea5e9", html: "P.V., P.O. și P.L., perpendiculare între ele ca pereții și podeaua.", why: "Spațiul are trei dimensiuni (lățime, înălțime, adâncime): fiecare vedere arată două dintre ele, deci cu trei vederi fiecare dimensiune este reprezentată de cel puțin două ori." },
        { id: "pv", label: "Vedere frontală", x: 15, y: 66, color: "#3b82f6", html: "Pe planul vertical: arată lățimea și înălțimea.", why: "Se alege fața care descrie cel mai bine obiectul: este «portretul» principal de care depind celelalte vederi." },
        { id: "po", label: "Vedere de sus", x: 38, y: 82, color: "#16a34a", html: "Pe planul orizontal: arată lățimea și adâncimea.", why: "Este «planul», același care se folosește pentru case și orașe: ideea de a privi de sus este foarte veche (planuri de orașe încă din Mesopotamia antică)." },
        { id: "pl", label: "Vedere laterală", x: 62, y: 82, color: "#f59e0b", html: "Pe planul lateral: arată adâncimea și înălțimea.", why: "Servește la risipirea îndoielilor pe care le lasă primele două vederi: de exemplu între un cilindru și o prismă." },
        { id: "linee", label: "Tipuri de linii", x: 85, y: 66, color: "#ef4444", html: "Continuă groasă (vizibil), întreruptă (ascuns), linie-punct (axe).", why: "Normele tehnice (SR în România, ISO în lume) stabilesc tipurile de linii astfel încât oricine, în orice țară, să citească desenul în același fel." },
        { id: "metodi", label: "Metoda europeană și americană", x: 85, y: 92, color: "#64748b", html: "Europeană (primul diedru): planul dedesubt. Americană (al treilea diedru): planul deasupra.", why: "Depinde de locul în care ne imaginăm planul: în spatele obiectului (europeană, ca o umbră) sau în fața lui (americană, ca o sticlă). Ambele sunt admise de norma ISO 128, dacă sunt indicate prin simbol." },
        { id: "monge", label: "Gaspard Monge", x: 15, y: 92, color: "#a855f7", html: "Matematician francez (1746–1818), părintele geometriei descriptive.", why: "Lucrând la fortificații la Mézières, a inventat o metodă grafică rapidă. Cartea lui <i>Géométrie descriptive</i> (1799) a stat la baza predării desenului tehnic în școlile de inginerie." }
      ],
      edges: [
        ["geomdesc", "proiezione", "folosește"],
        ["proiezione", "triedro", "pe"],
        ["triedro", "pv", "oferă"],
        ["triedro", "po", "oferă"],
        ["triedro", "pl", "oferă"],
        ["proiezione", "linee", "se desenează cu"],
        ["triedro", "metodi", "se dispune cu"],
        ["monge", "geomdesc", "a întemeiat"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: citirea vederilor",
      questions: [
        { type: "mc", q: "Un obiect are vederea frontală = dreptunghi, vederea laterală = dreptunghi, vederea de sus = cerc. Ce este?", options: ["Un con", "Un cilindru în picioare", "O sferă"], answer: 1, explain: "Doar cilindrul în picioare are planul circular și fațadele dreptunghiulare." },
        { type: "num", q: "Un paralelipiped măsoară 6 × 4 × 2 cm (lungime × adâncime × înălțime). Câți cm² are aria vederii lui de sus?", answer: 24, unit: "cm²", explain: "De sus se văd lungimea și adâncimea: 6 × 4 = 24 cm²." },
        { type: "tf", q: "Adâncimea unui obiect apare în vederea frontală.", answer: false, explain: "Vederea frontală arată lățimea și înălțimea; adâncimea apare în plan și în profil." }
      ]
    }
  ],
  glossary: [
    { t: "Proiecție ortogonală", d: "Reprezentare cu raze paralele perpendiculare pe plan: măsurile rămân reale." },
    { t: "Triedru", d: "Cele trei plane perpendiculare P.V., P.O. și P.L. pe care se proiectează obiectul." },
    { t: "Fațadă (elevație)", d: "Vederea frontală, pe planul vertical." },
    { t: "Plan (vedere de sus)", d: "Vederea de sus, pe planul orizontal." },
    { t: "Profil", d: "Vederea laterală, pe planul lateral." },
    { t: "Linia de pământ", d: "Dreapta în care se întâlnesc planul vertical și cel orizontal." },
    { t: "Linii de ghidaj", d: "Linii subțiri care transferă măsurile de la o vedere la alta." },
    { t: "Linia la 45°", d: "Dreaptă care servește la transferul adâncimii din plan în profil." },
    { t: "Muchie ascunsă", d: "Muchie care nu se vede din acel punct de vedere: se desenează întrerupt." },
    { t: "Geometrie descriptivă", d: "Știință care reprezintă obiecte 3D în 2D în mod exact, întemeiată de Gaspard Monge." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce înseamnă «ortogonal»?", options: ["Oblic", "Perpendicular, în unghi drept", "Curb"], answer: 1, explain: "Ortogonal = perpendicular (din grecescul orthós, «drept», și gonía, «unghi»)." },
      { type: "mc", q: "Pe ce plan se proiectează vederea frontală?", options: ["Planul orizontal", "Planul vertical", "Planul lateral"], answer: 1, explain: "Vederea frontală (fațada) se află pe planul vertical." },
      { type: "mc", q: "În metoda europeană, vederea laterală din stânga se desenează…", options: ["în dreapta fațadei", "în stânga fațadei", "deasupra fațadei"], answer: 0, explain: "În primul diedru, vederea din stânga se pune în dreapta vederii frontale." },
      { type: "tf", q: "Axele de simetrie se desenează cu linia-punct.", answer: true, explain: "Linie mixtă subțire linie-punct = axe și linii de centru." },
      { type: "num", q: "Un cub are muchia de 5 cm. Câți cm² are aria vederii lui frontale?", answer: 25, unit: "cm²", explain: "Vederea frontală a unui cub este un pătrat 5 × 5 = 25 cm²." },
      { type: "mc", q: "Care este vederea de sus a unei piramide cu baza pătrată?", options: ["Un triunghi", "Un pătrat cu diagonalele", "Un cerc"], answer: 1, explain: "De sus se vede baza pătrată și cele patru muchii care urcă spre vârf, adică diagonalele." },
      { type: "text", q: "Cum se numește dreapta în care se întâlnesc P.V. și P.O.? (linia de …)", answer: ["pământ", "pamant", "linia de pământ", "linia de pamant"], explain: "Este linia de pământ (L.P.)." },
      { type: "mc", q: "La ce servește linia la 45°?", options: ["Să deseneze perspectiva", "Să transfere adâncimea din plan în profil", "Să indice muchiile ascunse"], answer: 1, explain: "Liniile de ghidaj orizontale din plan se «răsucesc» pe dreapta la 45° și devin verticale în profil." },
      { type: "order", q: "Pune în ordine fazele desenului.", items: ["Alegerea vederii frontale", "Trasarea liniei de pământ și a axelor", "Desenarea fațadei", "Transferul măsurilor și desenarea planului și a profilului", "Conturarea liniilor după tipul lor"], explain: "Mai întâi alegerea și construcția, apoi vederile, în sfârșit conturarea." },
      { type: "text", q: "Numele de familie al matematicianului francez care a întemeiat geometria descriptivă.", answer: ["monge", "gaspard monge"], explain: "Gaspard Monge (1746–1818)." },
      { type: "tf", q: "În metoda americană, planul se desenează deasupra vederii frontale.", answer: true, explain: "În al treilea diedru, vederea de sus se pune deasupra." },
      { type: "num", q: "Un paralelipiped are lungimea de 10 cm, adâncimea de 4 cm și înălțimea de 3 cm. Cât este de lat (în cm) dreptunghiul vederii laterale?", answer: 4, unit: "cm", explain: "Vederea laterală arată adâncimea (4 cm) și înălțimea (3 cm): lățimea ei este adâncimea, 4 cm." }
    ],
    gen: [["areaRect", 2]]
  }
});

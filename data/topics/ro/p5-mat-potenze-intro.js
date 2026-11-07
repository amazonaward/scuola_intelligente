TOPIC('ro', {
  id: "p5-mat-potenze-intro",
  title: "Puterile (ridicarea la putere)",
  intro: "Cum se scrie repede 10 × 10 × 10 × 10 × 10 × 10? Cu o <b>putere</b>: 10<sup>6</sup>! Să învățăm ce sunt <b>baza</b> și <b>exponentul</b>, cum se calculează puterile și de ce <b>puterile lui 10</b> sunt atât de utile pentru a scrie numerele foarte mari.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "O înmulțire „prescurtată”",
      html: `<p>Când înmulțești <b>același număr</b> de mai multe ori cu el însuși, îl poți scrie pe scurt cu o <b>putere</b>.</p>
<p>Exemplu: <b>2 × 2 × 2 × 2 = 2<sup>4</sup></b> și se citește „doi <b>la puterea a patra</b>”.</p>
<ul>
<li><b>Baza</b> (2) este numărul care se repetă, adică factorul care se înmulțește.</li>
<li><b>Exponentul</b> (4), scris mic sus în dreapta, arată <b>de câte ori</b> apare baza ca factor.</li>
<li>Rezultatul (16) se numește și el <b>putere</b>.</li>
</ul>
<p>Atenție la cea mai frecventă greșeală: 2<sup>4</sup> <b>nu</b> este 2 × 4 = 8! Este 2 × 2 × 2 × 2 = <b>16</b>.</p>`
    },
    {
      type: "svg",
      title: "Baza și exponentul",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="130" y="170" font-size="110" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3</text>
<text x="185" y="100" font-size="60" font-weight="bold" fill="#dc2626" text-anchor="middle">4</text>
<text x="300" y="150" font-size="44" fill="#1f2937" text-anchor="middle">=</text>
<text x="460" y="150" font-size="34" fill="#1f2937" text-anchor="middle"><tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan></text>
<text x="460" y="200" font-size="34" font-weight="bold" fill="#047857" text-anchor="middle">= 81</text>
<path d="M200 70 Q260 40 330 60" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="340" y="64" font-size="18" fill="#dc2626">exponent: de câte ori</text>
<path d="M120 190 Q130 240 180 255" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="190" y="262" font-size="18" fill="#1d4ed8">baza: numărul care se repetă</text>
<path d="M375 165 L545 165" stroke="#dc2626" stroke-width="3"/>
<text x="460" y="110" font-size="16" fill="#dc2626" text-anchor="middle">4 factori egali</text>
</svg>`,
      caption: "3⁴ se citește „trei la puterea a patra”: baza 3 se înmulțește cu ea însăși de 4 ori."
    },
    {
      type: "text",
      title: "Cum se citesc și cum se calculează",
      html: `<p>Se calculează <b>pas cu pas</b>, înmulțind rezultatul cu baza:</p>
<p>5<sup>3</sup> → 5 × 5 = 25 → 25 × 5 = <b>125</b></p>
<table>
<tr><th>Puterea</th><th>Se citește</th><th>Calcul</th><th>Rezultat</th></tr>
<tr><td>4<sup>2</sup></td><td>patru la puterea a doua (la <b>pătrat</b>)</td><td>4 × 4</td><td>16</td></tr>
<tr><td>2<sup>3</sup></td><td>doi la puterea a treia (la <b>cub</b>)</td><td>2 × 2 × 2</td><td>8</td></tr>
<tr><td>3<sup>4</sup></td><td>trei la puterea a patra</td><td>3 × 3 × 3 × 3</td><td>81</td></tr>
<tr><td>2<sup>5</sup></td><td>doi la puterea a cincea</td><td>2 × 2 × 2 × 2 × 2</td><td>32</td></tr>
</table>
<p>Două cazuri speciale:</p>
<ul>
<li>cu exponentul <b>1</b> rezultatul este chiar baza: 7<sup>1</sup> = 7;</li>
<li>cu exponentul <b>0</b> rezultatul este întotdeauna <b>1</b> (dacă baza nu este 0): 9<sup>0</sup> = 1, 100<sup>0</sup> = 1.</li>
</ul>
<p>Și dacă baza este <b>1</b>? 1<sup>50</sup> = 1 × 1 × … × 1 = <b>1</b>!</p>`
    },
    {
      type: "3d",
      title: "Pătratul și cubul în 3D",
      scene: "blocks",
      options: { mode: "volume", a: 3, b: 3, c: 3 },
      caption: "3 × 3 × 3 = 3³ = 27 de cubulețe: de aceea exponentul 3 se numește „cub”. Încearcă să pui înălțimea la 1: vezi un pătrat de 3 × 3 = 3² = 9 cubulețe, „pătratul”."
    },
    {
      type: "quiz",
      title: "Mini-test: baza și exponentul",
      questions: [
        { type: "mc", q: "În 6<sup>3</sup> care este baza?", options: ["3", "6", "18"], answer: 1, explain: "Baza este numărul mare care se repetă: 6." },
        { type: "num", q: "Cât face 2<sup>3</sup>?", answer: 8, explain: "2 × 2 × 2 = 8 (nu 2 × 3!)." },
        { type: "tf", q: "5<sup>2</sup> = 10", answer: false, explain: "5<sup>2</sup> = 5 × 5 = 25. 10 ar fi 5 × 2." },
        { type: "num", q: "Cât face 8<sup>0</sup>?", answer: 1, explain: "Orice număr (diferit de 0) ridicat la puterea 0 face 1." }
      ]
    },
    {
      type: "text",
      title: "Puterile lui 10",
      html: `<p>Cele mai comode puteri dintre toate sunt cele cu <b>baza 10</b>. Uită-te:</p>
<table>
<tr><th>Puterea</th><th>Numărul</th><th>Nume</th></tr>
<tr><td>10<sup>0</sup></td><td>1</td><td>unitate</td></tr>
<tr><td>10<sup>1</sup></td><td>10</td><td>zece</td></tr>
<tr><td>10<sup>2</sup></td><td>100</td><td>sută</td></tr>
<tr><td>10<sup>3</sup></td><td>1 000</td><td>mie</td></tr>
<tr><td>10<sup>6</sup></td><td>1 000 000</td><td>milion</td></tr>
<tr><td>10<sup>9</sup></td><td>1 000 000 000</td><td>miliard</td></tr>
</table>
<p>Regula magică: <b>exponentul este egal cu numărul de zerouri</b> de după 1. 10<sup>5</sup> = 1 urmat de 5 zerouri = 100 000.</p>
<p>Fiecare loc din sistemul nostru de numerație valorează o putere a lui 10: de aceea se numește sistem <b>zecimal</b> (în baza 10).</p>`
    },
    {
      type: "text",
      title: "Scrierea unui număr sub formă de sumă de puteri ale lui 10",
      html: `<p>Cu puterile lui 10 putem „demonta” un număr în cifrele lui. Se numește <b>descompunere polinomială</b>:</p>
<p><b>4 352</b> = 4 × 1000 + 3 × 100 + 5 × 10 + 2 × 1</p>
<p><b>4 352</b> = 4 × 10<sup>3</sup> + 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 2 × 10<sup>0</sup></p>
<p>Iar numerele uriașe se scriu mai repede: distanța Pământ–Soare este de aproximativ <b>150 000 000 km</b>, adică <b>15 × 10<sup>7</sup> km</b> (oamenii de știință scriu 1,5 × 10<sup>8</sup> km).</p>`
    },
    {
      type: "widget",
      title: "Puterile pe abac",
      widget: "abacus",
      options: { columns: ["uk", "h", "da", "u"], value: 4352 },
      caption: "Fiecare tijă valorează de 10 ori mai mult decât cea din dreapta ei: u = 10⁰, da = 10¹, h = 10², uk = 10³. Schimbă bilele și scrie numărul ca sumă de puteri ale lui 10."
    },
    {
      type: "example",
      title: "Exemplu practic: lanțul de mesaje",
      html: `<p>Luca trimite un mesaj la <b>3 prieteni</b>. Fiecare îl trimite altor 3, și tot așa. Câte persoane îl primesc la fiecare „tură”?</p>
<ul>
<li>Tura 1: 3 = <b>3<sup>1</sup></b></li>
<li>Tura a 2-a: 3 × 3 = <b>3<sup>2</sup> = 9</b></li>
<li>Tura a 3-a: 3 × 3 × 3 = <b>3<sup>3</sup> = 27</b></li>
<li>Tura a 4-a: <b>3<sup>4</sup> = 81</b></li>
<li>Tura a 10-a: <b>3<sup>10</sup> = 59 049</b> de persoane!</li>
</ul>
<p>Iată de ce știrile (chiar și cele false!) se răspândesc atât de repede: cresc „la putere”.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: plăcile de gresie și cutiile",
      html: `<p>Podeaua camerei este un pătrat cu <b>8 plăci pe latură</b>. Câte plăci sunt în total? 8 × 8 = <b>8<sup>2</sup> = 64</b>.</p>
<p>Un depozit stivuiește cutii în formă de cub: <b>5</b> în lungime, <b>5</b> în lățime și <b>5</b> în înălțime. Câte cutii? 5 × 5 × 5 = <b>5<sup>3</sup> = 125</b>.</p>
<p>De aceea exponentul 2 se numește <b>pătrat</b>, iar exponentul 3 se numește <b>cub</b>!</p>`
    },
    {
      type: "svg",
      title: "Dublarea: 2¹, 2², 2³, 2⁴",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<g fill="#f97316" stroke="#9a3412" stroke-width="2">
<rect x="40" y="170" width="24" height="24"/><rect x="40" y="198" width="24" height="24"/>
<rect x="130" y="142" width="24" height="24"/><rect x="130" y="170" width="24" height="24"/><rect x="158" y="142" width="24" height="24"/><rect x="158" y="170" width="24" height="24"/>
</g>
<g fill="#22c55e" stroke="#166534" stroke-width="2">
<rect x="240" y="114" width="24" height="24"/><rect x="268" y="114" width="24" height="24"/>
<rect x="240" y="142" width="24" height="24"/><rect x="268" y="142" width="24" height="24"/>
<rect x="240" y="170" width="24" height="24"/><rect x="268" y="170" width="24" height="24"/>
<rect x="240" y="198" width="24" height="24"/><rect x="268" y="198" width="24" height="24"/>
</g>
<g fill="#3b82f6" stroke="#1e3a8a" stroke-width="2">
<rect x="360" y="114" width="24" height="24"/><rect x="388" y="114" width="24" height="24"/><rect x="416" y="114" width="24" height="24"/><rect x="444" y="114" width="24" height="24"/>
<rect x="360" y="142" width="24" height="24"/><rect x="388" y="142" width="24" height="24"/><rect x="416" y="142" width="24" height="24"/><rect x="444" y="142" width="24" height="24"/>
<rect x="360" y="170" width="24" height="24"/><rect x="388" y="170" width="24" height="24"/><rect x="416" y="170" width="24" height="24"/><rect x="444" y="170" width="24" height="24"/>
<rect x="360" y="198" width="24" height="24"/><rect x="388" y="198" width="24" height="24"/><rect x="416" y="198" width="24" height="24"/><rect x="444" y="198" width="24" height="24"/>
</g>
<text x="52" y="255" font-size="20" text-anchor="middle" font-weight="bold">2¹ = 2</text>
<text x="156" y="255" font-size="20" text-anchor="middle" font-weight="bold">2² = 4</text>
<text x="266" y="255" font-size="20" text-anchor="middle" font-weight="bold">2³ = 8</text>
<text x="414" y="255" font-size="20" text-anchor="middle" font-weight="bold">2⁴ = 16</text>
<text x="300" y="50" font-size="22" fill="#7c2d12" text-anchor="middle">De fiecare dată când exponentul crește cu 1, pătrățelele se dublează</text>
<text x="540" y="180" font-size="26" fill="#7c2d12" text-anchor="middle">…2⁵ = 32</text>
</svg>`,
      caption: "A adăuga 1 la exponent înseamnă a înmulți încă o dată cu baza."
    },
    {
      type: "curiosity",
      title: "Știai că…? Legenda șahului",
      html: `<p>Se spune că inventatorul <b>șahului</b> a cerut regelui drept răsplată: 1 bob de orez pe prima căsuță, 2 pe a doua, 4 pe a treia, 8 pe a patra… dublând până la a 64-a căsuță. Regele a râs: „Atât de puțin?”.</p>
<p>Dar pe ultima căsuță ar fi trebuit <b>2<sup>63</sup></b> boabe: aproximativ <b>9 miliarde de miliarde</b>! Mult mai mult orez decât s-a cultivat vreodată în toată istoria omenirii.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Googol-ul",
      html: `<p>Un număr cu 1 urmat de <b>100 de zerouri</b>, adică <b>10<sup>100</sup></b>, se numește <b>googol</b>. Numele l-a inventat în 1938 un băiețel de 9 ani, Milton Sirotta, nepotul matematicianului Edward Kasner.</p>
<p>Numele companiei <b>Google</b> vine chiar de acolo (scris puțin greșit!). Gândește-te: atomii din tot universul observabil sunt „doar” aproximativ 10<sup>80</sup>.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Puterea = înmulțirea unor <b>factori egali</b>: a<sup>n</sup> = a × a × … × a (de n ori).</li>
<li><b>Baza</b> = factorul care se repetă; <b>exponentul</b> = de câte ori.</li>
<li>Exponentul 2 = <b>pătrat</b>; exponentul 3 = <b>cub</b>.</li>
<li>a<sup>1</sup> = a; a<sup>0</sup> = 1 (cu a diferit de 0); 1<sup>n</sup> = 1.</li>
<li>10<sup>n</sup> = 1 urmat de <b>n zerouri</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege puterile",
      intro: "Dacă „baza” și „exponentul” ți se par cuvinte ciudate, încearcă una dintre aceste căi: copaci, cubulețe, îndoiri de hârtie sau felul în care se scriu în alte țări.",
      tabs: [
        {
          label: "🌳 Arborele cu ramuri",
          html: `<p>Imaginează-ți un copac: trunchiul se împarte în <b>2 ramuri</b>, fiecare ramură în alte 2, și tot așa.</p>
<ul>
<li>la nivelul 1 sunt 2 ramuri = 2<sup>1</sup>;</li>
<li>la nivelul 2 sunt 4 ramurele = 2<sup>2</sup>;</li>
<li>la nivelul 3 sunt 8 ramurele = 2<sup>3</sup>.</li>
</ul>
<p><b>Exponentul</b> este <b>numărul nivelului</b>, <b>baza</b> este <b>în câte părți se împarte</b> fiecare ramură.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#78350f" stroke-width="6" fill="none">
<line x1="300" y1="270" x2="300" y2="220"/>
<line x1="300" y1="220" x2="180" y2="160"/><line x1="300" y1="220" x2="420" y2="160"/>
</g>
<g stroke="#92400e" stroke-width="4">
<line x1="180" y1="160" x2="120" y2="100"/><line x1="180" y1="160" x2="240" y2="100"/>
<line x1="420" y1="160" x2="360" y2="100"/><line x1="420" y1="160" x2="480" y2="100"/>
</g>
<g stroke="#16a34a" stroke-width="3">
<line x1="120" y1="100" x2="95" y2="45"/><line x1="120" y1="100" x2="145" y2="45"/>
<line x1="240" y1="100" x2="215" y2="45"/><line x1="240" y1="100" x2="265" y2="45"/>
<line x1="360" y1="100" x2="335" y2="45"/><line x1="360" y1="100" x2="385" y2="45"/>
<line x1="480" y1="100" x2="455" y2="45"/><line x1="480" y1="100" x2="505" y2="45"/>
</g>
<g fill="#22c55e"><circle cx="95" cy="40" r="9"/><circle cx="145" cy="40" r="9"/><circle cx="215" cy="40" r="9"/><circle cx="265" cy="40" r="9"/><circle cx="335" cy="40" r="9"/><circle cx="385" cy="40" r="9"/><circle cx="455" cy="40" r="9"/><circle cx="505" cy="40" r="9"/></g>
<text x="530" y="170" font-size="20" fill="#1f2937">2¹ = 2</text>
<text x="530" y="110" font-size="20" fill="#1f2937">2² = 4</text>
<text x="530" y="50" font-size="20" fill="#1f2937">2³ = 8</text>
</svg>`
        },
        {
          label: "🧊 Cubulețe 3D",
          html: `<p>Construiește un cub din cubulețe: <b>4</b> în lățime, <b>4</b> în adâncime, <b>4</b> în înălțime. Câte cubulețe trebuie? <b>4 × 4 × 4 = 4<sup>3</sup> = 64</b>.</p>
<p>Rotește modelul și numără mai întâi un strat (4 × 4 = 4<sup>2</sup> = 16), apoi înmulțește cu numărul de straturi. Schimbă cursoarele ca să vezi 2<sup>3</sup>, 5<sup>3</sup>…</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 4, c: 4 }
        },
        {
          label: "📄 Îndoaie foaia",
          html: `<p>Ia o foaie și îndoaie-o în două: ai <b>2</b> straturi. Îndoaie-o din nou: <b>4</b>. Încă o dată: <b>8</b>…</p>
<p>După <b>n</b> îndoiri ai <b>2<sup>n</sup></b> straturi. După 7 îndoiri (2<sup>7</sup> = 128 de straturi) este aproape imposibil s-o mai îndoi!</p>
<p>Dacă ai putea îndoi o foaie subțire de 0,1 mm de <b>42 de ori</b>, grosimea (2<sup>42</sup> straturi) ar depăși distanța de la Pământ la Lună. Puterile cresc incredibil de repede!</p>`
        },
        {
          label: "🌍 Cum se scrie în alte părți",
          html: `<p>În toată lumea exponentul se scrie sus în dreapta: 2<sup>4</sup>. Dar se schimbă felul în care se citește:</p>
<ul>
<li>🇷🇴 „doi <b>la puterea a patra</b>”</li>
<li>🇮🇹 „due <b>alla quarta</b>” (doi la a patra)</li>
<li>🇬🇧🇺🇸 „two <b>to the power of</b> four” sau „two to the fourth”</li>
<li>🇫🇷 „deux <b>puissance</b> quatre” (doi putere patru)</li>
<li>🇩🇪 „zwei <b>hoch</b> vier” (adică „doi <i>sus</i> patru”)</li>
</ul>
<p>Pe calculatoare și în computere, unde nu se poate scrie mic, se folosește simbolul <b>^</b>: <code>2^4</code>. În multe limbaje de programare (precum Python) se scrie <code>2**4</code>.</p>`
        },
        {
          label: "➕ Sumă repetată și produs repetat",
          html: `<p>Îți amintești înmulțirea? Este o <b>adunare repetată</b>: 3 × 4 = 3 + 3 + 3 + 3.</p>
<p>Puterea este treapta următoare: o <b>înmulțire repetată</b>: 3<sup>4</sup> = 3 × 3 × 3 × 3.</p>
<table>
<tr><th>Operația</th><th>Ce repetă</th><th>Exemplu</th></tr>
<tr><td>Înmulțirea</td><td>adunări</td><td>3 × 4 = 12</td></tr>
<tr><td>Puterea</td><td>înmulțiri</td><td>3<sup>4</sup> = 81</td></tr>
</table>
<p>Iată de ce 3<sup>4</sup> este mult mai mare decât 3 × 4!</p>`
        },
        {
          "label": "🇮🇳 Legenda tablei de șah (India)",
          "html": "<p>O <b>legendă</b> celebră spune că în <b>India</b> inventatorul șahului (în multe variante se numește <b>Sissa</b>) a prezentat jocul regelui. Regele, încântat, i-a spus: «Cere-mi ce vrei!». Inventatorul a cerut doar boabe de grâu: <b>1</b> bob pe prima căsuță, <b>2</b> pe a doua, <b>4</b> pe a treia, și așa mai departe, <b>dublând</b> de fiecare dată până la căsuța 64. Regele a râs: «Atât de puțin?». Legenda era povestită încă în Evul Mediu de scriitori arabi și persani.</p><p>Să facem socotelile cu <b>puterile lui 2</b>:</p><ul><li>căsuța 1: 1 = 2<sup>0</sup>; căsuța 2: 2 = 2<sup>1</sup>; căsuța 3: 4 = 2<sup>2</sup>…</li><li>pe căsuța <b>n</b> sunt <b>2<sup>n−1</sup></b> boabe;</li><li>căsuța 11: 2<sup>10</sup> = 1024; căsuța 21: 2<sup>20</sup> = mai mult de <b>un milion</b>;</li><li>căsuța 64: 2<sup>63</sup>, un număr de 19 cifre!</li></ul><p>În total ar fi fost nevoie de 2<sup>64</sup> − 1 = <b>18.446.744.073.709.551.615</b> boabe: mult mai mult decât grâul recoltat în toată lumea în sute de ani. Regele nu putea plăti! Puterile cresc <b>foarte repede</b>.</p>",
          "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#fffbeb\"/><rect x=\"36\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"69\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"69\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁰</text><rect x=\"102\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"135\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"135\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2¹</text><rect x=\"168\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"201\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"201\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2²</text><rect x=\"234\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"267\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">8</text><text x=\"267\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2³</text><rect x=\"300\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"333\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">16</text><text x=\"333\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁴</text><rect x=\"366\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"399\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">32</text><text x=\"399\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁵</text><rect x=\"432\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"465\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">64</text><text x=\"465\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁶</text><rect x=\"498\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"531\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">128</text><text x=\"531\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁷</text><text x=\"300\" y=\"140\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Căsuța n → 2 la (n − 1) boabe</text><text x=\"300\" y=\"175\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">căsuța 11 → 2¹⁰ = 1024</text><text x=\"300\" y=\"200\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">căsuța 21 → 2²⁰ = 1.048.576 (mai mult de un milion!)</text><text x=\"300\" y=\"235\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">În total: 2⁶⁴ − 1 =</text><text x=\"300\" y=\"262\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">18.446.744.073.709.551.615 de boabe</text></svg>"
        },
        {
          "label": "🇨🇳 Triunghiul lui Yang Hui (China)",
          "html": "<p>În <b>1261</b> matematicianul <b>chinez</b> <b>Yang Hui</b> a publicat un triunghi de numere care în China era cunoscut deja de aproximativ două secole (îl folosea Jia Xian). În Italia îl numim <b>triunghiul lui Tartaglia</b>, în Franța și în România triunghiul lui Pascal: dar chinezii îl cunoșteau cu mult înainte!</p><p>Cum se construiește:</p><ol><li>În vârf scrii <b>1</b>.</li><li>Fiecare rând începe și se termină cu <b>1</b>.</li><li>Fiecare alt număr este <b>suma celor două numere de deasupra</b> lui: 1 + 2 = 3, 3 + 3 = 6…</li></ol><p>Acum <b>adună numerele fiecărui rând</b>: 1, 2, 4, 8, 16, 32… Sunt <b>puterile lui 2</b>! Rândul cu numărul n (numărând de la 0) are suma <b>2<sup>n</sup></b>.</p><p>De ce? Fiecare număr dintr-un rând este folosit <b>de două ori</b> pentru a construi rândul următor (ajunge în numărul de jos din stânga și în cel de jos din dreapta): deci fiecare rând are o sumă <b>dublă</b> față de cel dinainte.</p><p>🎯 Scrie tu rândul următor: cât trebuie să facă suma?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"230\" cy=\"40\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">suma = 1 = 2⁰</text><circle cx=\"202\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"258\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">suma = 2 = 2¹</text><circle cx=\"174\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"230\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><circle cx=\"286\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">suma = 4 = 2²</text><circle cx=\"146\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"202\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"258\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"314\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">suma = 8 = 2³</text><circle cx=\"118\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"118\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"174\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"230\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><circle cx=\"286\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"342\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"342\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">suma = 16 = 2⁴</text><circle cx=\"90\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"90\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"146\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"202\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"258\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"314\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"370\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"370\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">suma = 32 = 2⁵</text><text x=\"230\" y=\"296\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">3 + 3 deasupra → 6 dedesubt</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta puterilor: atinge un nod și descoperă de ce",
      nodes: [
        { id: "molt", label: "Înmulțirea", x: 50, y: 6, color: "#2563eb", html: "Operație care repetă o adunare: 4 × 3 = 4 + 4 + 4.", why: "Puterile se nasc din înmulțire exact cum înmulțirea se naște din adunare: fiecare operație este o prescurtare a celei precedente repetate." },
        { id: "potenza", label: "Puterea", x: 50, y: 30, color: "#16a34a", html: "Produs de factori toți egali: a<sup>n</sup>.", why: "Încă <b>babilonienii</b> (acum aproximativ 4000 de ani) aveau tabele cu pătrate și cuburi. Scrierea modernă cu exponentul mic sus a introdus-o filosoful și matematicianul francez <b>René Descartes</b> în 1637." },
        { id: "base", label: "Baza", x: 18, y: 50, color: "#f59e0b", html: "Factorul care se repetă.", why: "Se numește bază pentru că este numărul „de pornire” pe care se construiește toată puterea, ca baza unei clădiri." },
        { id: "esp", label: "Exponentul", x: 82, y: 50, color: "#ef4444", html: "Numărul mic de sus: de câte ori se repetă baza.", why: "Din latinescul <i>exponere</i>, „a pune în evidență, a expune”: este numărul pus în evidență sus. Crește cu 1 de fiecare dată când înmulțești încă o dată cu baza." },
        { id: "quadcubo", label: "Pătrat și cub", x: 18, y: 76, color: "#a855f7", html: "a<sup>2</sup> se citește „a la pătrat”, a<sup>3</sup> „a la cub”.", why: "Matematicienii greci, precum <b>Euclid</b>, gândeau numerele ca pe niște figuri: un număr înmulțit cu el însuși formează un pătrat de puncte; de trei ori formează un cub. Numele geometrice au rămas." },
        { id: "zero", label: "Exponentul 0 și 1", x: 50, y: 62, color: "#0ea5e9", html: "a<sup>1</sup> = a; a<sup>0</sup> = 1.", why: "Uită-te la scara 2<sup>3</sup> = 8, 2<sup>2</sup> = 4, 2<sup>1</sup> = 2: de fiecare dată când exponentul scade cu 1 se <b>împarte la bază</b>. Încă un pas: 2 : 2 = 1, deci 2<sup>0</sup> = 1. Este o convenție aleasă pentru ca toate regulile să continue să funcționeze." },
        { id: "dieci", label: "Puterile lui 10", x: 82, y: 76, color: "#14b8a6", html: "10<sup>n</sup> = 1 urmat de n zerouri.", why: "Sistemul nostru de numerație este <b>zecimal și pozițional</b>: fiecare loc valorează de 10 ori mai mult decât cel din dreapta. Probabil folosim 10 pentru că avem 10 degete! Cifrele indo-arabe și zero au ajuns în Europa cu <b>Fibonacci</b> în 1202." },
        { id: "scientifica", label: "Numere uriașe", x: 50, y: 92, color: "#64748b", html: "Puterile lui 10 servesc la scrierea numerelor enorme într-un spațiu mic.", why: "Încă <b>Arhimede</b>, în secolul al III-lea î.Hr., în cartea <i>Arenarul</i>, a inventat un mod de a număra cu „miriade de miriade” ca să estimeze câte grăunțe de nisip ar umple universul. Astăzi oamenii de știință folosesc <b>notația științifică</b> (de ex. 1,5 × 10<sup>8</sup> km)." }
      ],
      edges: [
        ["molt", "potenza", "repetată devine"],
        ["potenza", "base", "are o"],
        ["potenza", "esp", "are un"],
        ["base", "quadcubo", "cu ea însăși de 2 sau 3 ori"],
        ["esp", "zero", "cazuri speciale"],
        ["esp", "dieci", "numără zerourile"],
        ["dieci", "scientifica", "servesc la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: puterile lui 10 și probleme",
      questions: [
        { type: "num", q: "Câte zerouri are 10<sup>6</sup> scris în întregime?", answer: 6, explain: "Exponentul arată numărul de zerouri: 1 000 000." },
        { type: "mc", q: "Cum se scrie 1000 cu o putere a lui 10?", options: ["10<sup>2</sup>", "10<sup>3</sup>", "3<sup>10</sup>"], answer: 1, explain: "1000 = 10 × 10 × 10 = 10<sup>3</sup>." },
        { type: "num", q: "Un pătrat are 7 plăci pe latură. Câte plăci sunt în total?", answer: 49, explain: "7<sup>2</sup> = 7 × 7 = 49." }
      ]
    }
  ],
  glossary: [
    { t: "Putere", d: "Înmulțirea unor factori egali, scrisă pe scurt (de ex. 2⁵); și rezultatul ei." },
    { t: "Bază", d: "Factorul care se repetă în putere." },
    { t: "Exponent", d: "Numărul mic de sus: de câte ori baza se înmulțește cu ea însăși." },
    { t: "Pătrat", d: "Putere cu exponentul 2: a × a." },
    { t: "Cub", d: "Putere cu exponentul 3: a × a × a." },
    { t: "Putere a lui 10", d: "10 ridicat la un exponent: 1 urmat de atâtea zerouri cât este exponentul." },
    { t: "Formă polinomială", d: "Scrierea unui număr ca sumă de cifre înmulțite cu puteri ale lui 10." },
    { t: "Googol", d: "Numărul 10¹⁰⁰: 1 urmat de 100 de zerouri." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cum se scrie 7 × 7 × 7 × 7 cu o putere?", options: ["7<sup>4</sup>", "4<sup>7</sup>", "7 × 4"], answer: 0, explain: "Baza este 7, care apare de 4 ori: 7<sup>4</sup>." },
      { type: "num", q: "Cât face 3<sup>3</sup>?", answer: 27, explain: "3 × 3 × 3 = 27." },
      { type: "num", q: "Cât face 10<sup>4</sup>?", answer: 10000, explain: "1 urmat de 4 zerouri: 10 000." },
      { type: "tf", q: "2<sup>5</sup> = 10", answer: false, explain: "2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32. Nu se înmulțește baza cu exponentul!" },
      { type: "text", q: "Cum se numește numărul mic scris sus în dreapta?", answer: ["exponent", "exponentul", "esponente", "l'esponente", "l esponente"], explain: "Este exponentul." },
      { type: "mc", q: "Cât valorează 15<sup>1</sup>?", options: ["1", "15", "0"], answer: 1, explain: "Cu exponentul 1 rezultatul este chiar baza." },
      { type: "tf", q: "Orice număr diferit de 0 ridicat la puterea 0 face 1.", answer: true, explain: "Prin convenție a<sup>0</sup> = 1: este pasul care urmează după a<sup>1</sup> împărțind la bază." },
      { type: "mc", q: "Cum se citește 9<sup>2</sup>?", options: ["nouă ori doi", "nouă la pătrat", "nouă la cub"], answer: 1, explain: "Exponentul 2: „la pătrat”." },
      { type: "order", q: "Ordonează de la cel mai mic la cel mai mare.", items: ["2<sup>2</sup>", "3<sup>2</sup>", "2<sup>4</sup>", "10<sup>2</sup>"], explain: "2<sup>2</sup> = 4, 3<sup>2</sup> = 9, 2<sup>4</sup> = 16, 10<sup>2</sup> = 100." },
      { type: "num", q: "5 382 = 5 × 10<sup>3</sup> + 3 × 10<sup>?</sup> + 8 × 10 + 2. Ce exponent lipsește?", answer: 2, explain: "Cifra 3 ocupă locul sutelor: 100 = 10<sup>2</sup>." },
      { type: "num", q: "Un cub de cubulețe are 6 cubulețe pe muchie. Câte cubulețe conține?", answer: 216, explain: "6<sup>3</sup> = 6 × 6 × 6 = 36 × 6 = 216." }
    ],
    gen: [["power", 3]]
  }
});

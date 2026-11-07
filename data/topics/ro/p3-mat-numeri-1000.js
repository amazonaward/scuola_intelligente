TOPIC('ro', {
  id: "p3-mat-numeri-1000",
  title: "Numerele până la 1000",
  intro: "Până ieri numărai până la 100. Astăzi facem un salt enorm: ajungem până la <b>1000</b>! 🚀 Descoperim <b>sutele</b>, învățăm să citim, să scriem, să descompunem și să comparăm numerele de trei cifre și facem cunoștință cu marea <b>mie</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "De la unități la sute",
      html: `<p>Sistemul nostru de numerație se numește <b>zecimal</b> pentru că lucrează în grupe de <b>zece</b>:</p>
<ul>
<li><b>10 unități</b> (U) formează <b>1 zece</b> (Z) → 10</li>
<li><b>10 zeci</b> formează <b>1 sută</b> (S) → 100</li>
<li><b>10 sute</b> formează <b>1 mie</b> (M) → 1000</li>
</ul>
<p>De fiecare dată când ai 10 elemente de un ordin, le poți «schimba» cu 1 element din ordinul mai mare, ca atunci când schimbi 10 monede de 10 bani cu 1 leu! 💶</p>
<p>Literele din manualele italiene vin din greacă: <b>h</b> de la <i>hecto</i> («o sută») și <b>k</b> de la <i>kilo</i> («o mie»). La noi se folosesc S (sute), Z (zeci), U (unități).</p>`
    },
    {
      type: "3d",
      title: "Cubulețe, bețișoare și plăci în 3D",
      scene: "blocks",
      options: { mode: "base10", value: 245 },
      caption: "Cubulețul este 1 unitate, bățișorul (10 cubulețe) este 1 zece, placa (10 bețișoare = 100 de cubulețe) este 1 sută. Mișcă cursorul și rotește modelul: 245 = 2 plăci, 4 bețișoare, 5 cubulețe."
    },
    {
      type: "text",
      title: "Valoarea de poziție: fiecare cifră are locul ei",
      html: `<p>Un număr până la 999 se scrie cu cel mult <b>trei cifre</b>. Fiecare cifră are o valoare diferită în funcție de <b>locul</b> pe care îl ocupă:</p>
<table>
<tr><th>S (sute)</th><th>Z (zeci)</th><th>U (unități)</th></tr>
<tr><td style="color:#8b5cf6;font-weight:bold">3</td><td style="color:#3b82f6;font-weight:bold">5</td><td style="color:#22c55e;font-weight:bold">6</td></tr>
<tr><td>3 × 100 = 300</td><td>5 × 10 = 50</td><td>6 × 1 = 6</td></tr>
</table>
<p>356 se citește «<b>trei sute cincizeci și șase</b>».</p>
<p>Atenție la cifra <b>0</b>: este un «loc ținut», spune că în acel loc nu este nimic. <b>305</b> = 3 S, <b>0</b> Z, 5 U (trei sute cinci); <b>350</b> = 3 S, 5 Z, <b>0</b> U (trei sute cincizeci). Fără zero nu am reuși să le deosebim!</p>
<p>Același <b>3</b> valorează 3 în 123, 30 în 132 și 300 în 312: contează locul!</p>`
    },
    {
      type: "widget",
      title: "Abacul cu trei tije",
      widget: "abacus",
      options: { columns: ["S", "Z", "U"], value: 356 },
      caption: "Fiecare bilă de pe tija sutelor valorează 100, pe tija zecilor valorează 10, pe tija unităților valorează 1. Încearcă să faci 407 și apoi 999. Ce se întâmplă dacă mai adaugi 1?"
    },
    {
      type: "text",
      title: "A compune și a descompune",
      html: `<p>A <b>descompune</b> un număr înseamnă a-l împărți în părțile lui:</p>
<ul>
<li>472 = <b>4 S + 7 Z + 2 U</b></li>
<li>472 = <b>400 + 70 + 2</b> (descompunere prin adunare)</li>
<li>472 = <b>4 × 100 + 7 × 10 + 2 × 1</b></li>
</ul>
<p>A <b>compune</b> este invers: 6 S + 0 Z + 8 U = <b>608</b>.</p>
<p>Același număr se poate descompune și în alte feluri: 472 = 47 Z + 2 U, sau 472 = 3 S + 17 Z + 2 U (am «spart» o sută în 10 zeci). Acest truc îți va folosi foarte mult la scăderile cu împrumut!</p>`
    },
    {
      type: "svg",
      title: "Tabelul sutelor",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="40" y="30" width="170" height="60" rx="8" fill="#8b5cf6"/>
<rect x="215" y="30" width="170" height="60" rx="8" fill="#3b82f6"/>
<rect x="390" y="30" width="170" height="60" rx="8" fill="#22c55e"/>
<text x="125" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">S</text>
<text x="300" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">Z</text>
<text x="475" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">U</text>
<g stroke="#4c1d95" stroke-width="2" fill="#ffffff">
<rect x="40" y="95" width="170" height="80"/><rect x="215" y="95" width="170" height="80"/><rect x="390" y="95" width="170" height="80"/>
</g>
<text x="125" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#7c3aed">4</text>
<text x="300" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#2563eb">7</text>
<text x="475" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#16a34a">2</text>
<text x="125" y="215" font-size="26" text-anchor="middle" fill="#7c3aed">400</text>
<text x="300" y="215" font-size="26" text-anchor="middle" fill="#2563eb">70</text>
<text x="475" y="215" font-size="26" text-anchor="middle" fill="#16a34a">2</text>
<text x="212" y="215" font-size="26" text-anchor="middle" fill="#1f2937">+</text>
<text x="387" y="215" font-size="26" text-anchor="middle" fill="#1f2937">+</text>
<text x="300" y="270" font-size="24" font-weight="bold" text-anchor="middle" fill="#1f2937">patru sute șaptezeci și doi</text>
</svg>`,
      caption: "Fiecare cifră în căsuța ei: 472 = 400 + 70 + 2."
    },
    {
      type: "quiz",
      title: "Mini-test: valoarea cifrelor",
      questions: [
        { type: "num", q: "În 583, cât valorează cifra 8?", answer: 80, explain: "8 se află la locul zecilor: 8 × 10 = 80." },
        { type: "num", q: "Compune numărul: 7 S + 0 Z + 4 U", answer: 704, explain: "Șapte sute patru: zeroul ține locul zecilor." },
        { type: "mc", q: "Cum se scrie «două sute nouăsprezece»?", options: ["2019", "219", "209"], answer: 1, explain: "Două sute (200) + nouăsprezece (19) = 219." }
      ]
    },
    {
      type: "text",
      title: "A compara și a ordona",
      html: `<p>Ca să afli care număr este mai mare:</p>
<ol>
<li>Dacă au un număr diferit de cifre, este mai mare cel cu <b>mai multe cifre</b>: 1000 &gt; 999, 105 &gt; 98.</li>
<li>Dacă au același număr de cifre, compară <b>sutele</b>: 512 &gt; 498 (5 S &gt; 4 S).</li>
<li>Dacă sutele sunt egale, compară <b>zecile</b>: 372 &gt; 365.</li>
<li>Dacă și zecile sunt egale, compară <b>unitățile</b>: 847 &gt; 843.</li>
</ol>
<p>Ține minte simbolurile: <b>&gt;</b> mai mare, <b>&lt;</b> mai mic, <b>=</b> egal. «Ciocul» deschis privește mereu numărul mai mare! 🐊</p>
<p><b>Precedentul și succesorul</b>: succesorul lui 399 este <b>400</b> (+1); precedentul lui 700 este <b>699</b> (−1).</p>`
    },
    {
      type: "widget",
      title: "Axa numerelor până la 1000",
      widget: "numberLine",
      options: { min: 0, max: 1000, step: 100, marks: [250, 500, 750, 1000] },
      caption: "Fă salturi de câte 100: 100, 200, 300… Zece salturi te duc la 1000! Unde se află 500? Exact la mijloc."
    },
    {
      type: "text",
      title: "Mia: 1000",
      html: `<p>După 999 urmează <b>1000</b> (o mie): 999 + 1 = 1000. Ai umplut toate căsuțele și trebuie să «schimbi»:</p>
<ul>
<li>10 unități → 1 zece (unitățile revin la 0);</li>
<li>10 zeci → 1 sută (zecile revin la 0);</li>
<li>10 sute → <b>1 mie</b> (sutele revin la 0).</li>
</ul>
<p>Ca să scrii 1000 ai nevoie de o <b>a patra căsuță</b>: <b>M</b> (mii). 1000 = 1 M, 0 S, 0 Z, 0 U.</p>
<p>1000 = 10 sute = 100 de zeci = 1000 de unități. Pluralul lui «o mie» este «mii»: două mii, trei mii…</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: abțibildurile din cutie",
      html: `<p>Luca colecționează abțibilduri. Le ține așa: abțibildurile libere (unități), pliculețele de 10 (zeci) și cutiile de 100 (sute).</p>
<p>Are <b>3 cutii</b>, <b>12 pliculețe</b> și <b>7 abțibilduri libere</b>. Câte abțibilduri are?</p>
<ul>
<li>12 pliculețe = 10 pliculețe + 2 pliculețe = 1 cutie + 2 pliculețe</li>
<li>Deci are 4 cutii, 2 pliculețe, 7 libere</li>
<li>4 S + 2 Z + 7 U = <b>427 de abțibilduri</b></li>
</ul>
<p>Câte îi mai lipsesc ca să ajungă la 1000? Facem salturi până la numerele «rotunde»: 427 + 3 = 430, 430 + 70 = 500, 500 + 500 = 1000 → 3 + 70 + 500 = <b>573</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: banii din pușculiță",
      html: `<p>În pușculița Anei sunt: 2 bancnote de 100 lei, 5 bancnote de 10 lei, 9 monede de 1 leu.</p>
<p>Total: 200 + 50 + 9 = <b>259 lei</b>.</p>
<p>Ana vrea să cumpere o bicicletă de <b>295 lei</b>. 259 &lt; 295: încă nu ajung! Îi mai lipsesc 295 − 259 = <b>36 lei</b>.</p>
<p>Banii funcționează exact ca S, Z, U: 100 lei, 10 lei, 1 leu.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Zeroul a ajuns târziu",
      html: `<p>Cifrele pe care le folosim (0, 1, 2… 9) se numesc <b>indo-arabe</b>: au fost inventate în <b>India</b>, apoi matematicienii arabi le-au făcut cunoscute, iar în Italia au ajuns datorită lui <b>Leonardo Fibonacci</b> din Pisa, în cartea sa <i>Liber Abaci</i> din <b>1202</b>. Marea noutate era <b>zeroul</b>, care face posibilă valoarea de poziție. Înainte, în Europa se foloseau cifrele romane, care nu aveau zero!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? M-ul romanilor și floarea de lotus a egiptenilor",
      html: `<p>Romanii scriau <b>C</b> = 100 (de la <i>centum</i>), <b>D</b> = 500 și <b>M</b> = 1000 (de la <i>mille</i>). Așa 356 devenea <b>CCCLVI</b>: lung de tot! Vechii <b>egipteni</b>, în schimb, desenau: o liniuță pentru 1, un arc pentru 10, o frânghie rulată pentru 100 și o <b>floare de lotus</b> 🪷 pentru 1000.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>10 U = 1 Z · 10 Z = 1 S · 10 S = 1 M (1000).</li>
<li>Valoarea unei cifre depinde de <b>loc</b>: S, Z, U.</li>
<li><b>0</b> ține locul gol: 305 ≠ 35.</li>
<li>A descompune: 472 = 4 S + 7 Z + 2 U = 400 + 70 + 2.</li>
<li>A compara: mai întâi sutele, apoi zecile, apoi unitățile.</li>
<li>999 + 1 = 1000 (o mie).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege numerele până la 1000",
      intro: "Dacă abacul nu-ți ajunge, încearcă cu banii, cu numerele chinezești, cu romanii sau cu kilometrajul.",
      tabs: [
        {
          label: "💶 Banii",
          html: `<p>Banii sunt un abac perfect:</p>
<ul>
<li>💵 bancnota de <b>100 lei</b> = 1 sută</li>
<li>💵 bancnota de <b>10 lei</b> = 1 zece</li>
<li>🪙 moneda de <b>1 leu</b> = 1 unitate</li>
</ul>
<p>Ca să plătești <b>638 lei</b> cu cât mai puține piese: 6 de 100, 3 de 10, 8 de 1. Dacă magazinul nu are rest și îți dă 10 monede de 1 leu în loc de o bancnotă de 10… este exact «schimbul» dintre zeci și unități!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0fdf4"/>
<g fill="#86efac" stroke="#15803d" stroke-width="3">
<rect x="20" y="30" width="100" height="50" rx="6"/><rect x="30" y="40" width="100" height="50" rx="6"/><rect x="40" y="50" width="100" height="50" rx="6"/>
</g>
<text x="90" y="82" font-size="22" font-weight="bold" text-anchor="middle" fill="#14532d">100 lei</text>
<text x="90" y="140" font-size="22" text-anchor="middle" fill="#14532d">× 6 = 600</text>
<g fill="#fca5a5" stroke="#b91c1c" stroke-width="3">
<rect x="230" y="40" width="90" height="45" rx="6"/><rect x="240" y="50" width="90" height="45" rx="6"/>
</g>
<text x="285" y="80" font-size="20" font-weight="bold" text-anchor="middle" fill="#7f1d1d">10 lei</text>
<text x="285" y="140" font-size="22" text-anchor="middle" fill="#7f1d1d">× 3 = 30</text>
<g fill="#fde047" stroke="#a16207" stroke-width="3">
<circle cx="440" cy="60" r="22"/><circle cx="480" cy="60" r="22"/><circle cx="520" cy="60" r="22"/><circle cx="460" cy="95" r="22"/><circle cx="500" cy="95" r="22"/>
</g>
<text x="480" y="66" font-size="16" font-weight="bold" text-anchor="middle" fill="#713f12">1 leu</text>
<text x="480" y="140" font-size="22" text-anchor="middle" fill="#713f12">× 8 = 8</text>
<text x="300" y="195" font-size="30" font-weight="bold" text-anchor="middle" fill="#1f2937">600 + 30 + 8 = 638 lei</text>
</svg>`
        },
        {
          label: "🇨🇳 Ca în China și Japonia",
          html: `<p>În chineză (și în japoneză) numerele se spun într-un mod <b>foarte regulat</b>: se spune chiar câte sute, câte zeci și câte unități sunt!</p>
<ul>
<li>356 = 三百五十六 = «<b>trei-sute cinci-zece șase</b>»</li>
<li>11 = 十一 = «<b>zece unu</b>» (în italiană «undici» nu se înțelege!)</li>
<li>20 = 二十 = «<b>doi-zece</b>»</li>
</ul>
<p>Încearcă să spui numerele «pe chinezește»: 472 = «patru-sute șapte-zece doi». Este un mod foarte frumos de a înțelege valoarea de poziție. Unii cercetători cred că asta îi ajută pe copiii din Asia de Est să învețe numerele mai repede!</p>`
        },
        {
          label: "🧊 Cubulețe 3D",
          html: `<p>Construiește numărul cu blocuri: placa este 100, bățișorul este 10, cubulețul este 1. Încearcă să faci <b>999</b>: 9 plăci, 9 bețișoare, 9 cubulețe. Acum imaginează-ți că adaugi 1 cubuleț: 10 cubulețe devin un bețișor, 10 bețișoare o placă, iar 10 plăci, puse una peste alta, formează un <b>mare cub de 1000</b>!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 999 }
        },
        {
          label: "🚗 Kilometrajul",
          html: `<p>Te-ai uitat vreodată la kilometrajul unei mașini vechi? Are niște <b>rotițe</b> cu cifre de la 0 la 9.</p>
<p>Când rotița unităților trece de la 9 la 0, face să sară cu unu rotița zecilor. Când cea a zecilor trece de la 9 la 0, face să sară sutele.</p>
<p>0 9 9 → 1 0 0 · 9 9 9 → 1 0 0 0: toate rotițele se învârt împreună! Este «schimbul» din sistemul zecimal, făcut de o mașină.</p>`
        },
        {
          label: "🏛️ Cifre romane",
          html: `<p>Romanii nu aveau valoare de poziție: fiecare simbol valorează mereu la fel, iar valorile se adună (sau se scad dacă un simbol mic stă înaintea unuia mare).</p>
<table>
<tr><th>Simbolul</th><td>I</td><td>V</td><td>X</td><td>L</td><td>C</td><td>D</td><td>M</td></tr>
<tr><th>Valoarea</th><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1000</td></tr>
</table>
<p>Exemple: <b>CCXL</b> = 100 + 100 + (50 − 10) = 240 · <b>CMXCIX</b> = 999 · <b>M</b> = 1000.</p>
<p>Compară: noi scriem 999 cu 3 cifre, romanii cu 6 simboluri!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta numerelor până la 1000: atinge un nod și descoperă de ce",
      nodes: [
        { id: "decimale", label: "Sistem zecimal", x: 50, y: 6, color: "#2563eb", html: "Numărăm în grupe de zece.", why: "Aproape sigur pentru că avem <b>10 degete</b>! Nu toate popoarele au făcut așa: mayașii numărau în baza 20 (degetele de la mâini și de la picioare), babilonienii în baza 60, de unde vin cele 60 de minute dintr-o oră." },
        { id: "cifre", label: "10 cifre", x: 20, y: 26, color: "#f59e0b", html: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9.", why: "Sunt cifrele indo-arabe: inventate în India, răspândite de matematicienii arabi (precum al-Khwarizmi, secolul al IX-lea) și aduse în Europa de Fibonacci în 1202." },
        { id: "zero", label: "Zeroul", x: 20, y: 52, color: "#64748b", html: "Cifra care arată un loc gol.", why: "Matematicianul indian <b>Brahmagupta</b>, în anul 628 d.Hr., a fost printre primii care au tratat zeroul ca pe un adevărat număr, cu regulile lui. Fără zero nu am putea deosebi 35 de 305." },
        { id: "posizione", label: "Valoare de poziție", x: 50, y: 40, color: "#a855f7", html: "O cifră valorează mai mult sau mai puțin după loc.", why: "Este ideea genială care face calculele ușoare: cu doar 10 cifre se poate scrie orice număr. Mutând o cifră cu un loc spre stânga, valoarea ei devine de 10 ori mai mare." },
        { id: "unita", label: "Unități (U)", x: 82, y: 22, color: "#22c55e", html: "Cubulețul: valorează 1.", why: "Este punctul de plecare: a număra unul câte unul. Din cuvântul latin <i>unus</i>, unu." },
        { id: "decine", label: "Zeci (Z)", x: 82, y: 46, color: "#3b82f6", html: "10 unități = 1 zece.", why: "A grupa câte 10 permite să numeri repede multe lucruri: în loc de 30 de obiecte, numeri 3 grupe." },
        { id: "centinaia", label: "Sute (S)", x: 82, y: 70, color: "#8b5cf6", html: "10 zeci = 1 sută = 100.", why: "Simbolul h din manualele italiene vine din prefixul grecesc <i>hecto-</i> (o sută), pe care îl folosim și în hectolitru (100 de litri) și în hectar." },
        { id: "migliaio", label: "Mia (M)", x: 50, y: 92, color: "#ef4444", html: "10 sute = 1000.", why: "«Mille» (o mie) vine din latinescul <i>mille</i>, al cărui plural era <i>milia</i>. Simbolul k vine din grecescul <i>chílioi</i> (o mie), ca în kilogram și kilometru." },
        { id: "confronto", label: "A compara și a descompune", x: 20, y: 80, color: "#14b8a6", html: "472 = 400 + 70 + 2; 512 &gt; 498.", why: "Fiindcă fiecare loc valorează de 10 ori cât cel din dreapta lui, o singură sută în plus contează mai mult decât orice număr de zeci și unități: de aceea se compară mai întâi sutele." }
      ],
      edges: [
        ["decimale", "cifre", "folosește"],
        ["cifre", "zero", "inclusiv"],
        ["decimale", "posizione", "se bazează pe"],
        ["posizione", "unita", "locul"],
        ["unita", "decine", "×10"],
        ["decine", "centinaia", "×10"],
        ["centinaia", "migliaio", "×10"],
        ["zero", "posizione", "face posibilă"],
        ["posizione", "confronto", "permite"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: compararea și mia",
      questions: [
        { type: "mc", q: "Care număr este mai mare?", options: ["689", "698", "669"], answer: 1, explain: "Aceleași sute (6): compar zecile, 9 este cea mai mare → 698." },
        { type: "num", q: "Care este succesorul lui 599?", answer: 600, explain: "599 + 1 = 600: unitățile și zecile se «schimbă»." },
        { type: "num", q: "Câte sute sunt în 1000?", answer: 10, explain: "10 × 100 = 1000." }
      ]
    }
  ],
  glossary: [
    { t: "Unitate (U)", d: "Elementul singur: valorează 1." },
    { t: "Zece (Z)", d: "Grup de 10 unități." },
    { t: "Sută (S)", d: "Grup de 10 zeci, adică 100 de unități." },
    { t: "Mie (M)", d: "Grup de 10 sute, adică 1000 de unități." },
    { t: "Cifră", d: "Fiecare dintre cele 10 simboluri cu care se scriu numerele (0–9)." },
    { t: "Valoare de poziție", d: "Valoarea unei cifre depinde de locul pe care îl ocupă în număr." },
    { t: "A descompune", d: "A împărți un număr în părțile lui: 472 = 400 + 70 + 2." },
    { t: "A compune", d: "A forma un număr pornind de la părțile lui: 4 S + 7 Z + 2 U = 472." },
    { t: "Precedent", d: "Numărul care vine imediat înainte (−1)." },
    { t: "Succesor", d: "Numărul care vine imediat după (+1)." },
    { t: "Sistem zecimal", d: "Sistem de numerație care grupează câte 10." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Compune numărul: 5 S + 3 Z + 9 U", answer: 539, explain: "500 + 30 + 9 = 539." },
      { type: "num", q: "În 742, cât valorează cifra 7?", answer: 700, explain: "Se află la locul sutelor: 7 × 100 = 700." },
      { type: "mc", q: "Cum se scrie «nouă sute șase»?", options: ["960", "906", "9006"], answer: 1, explain: "Nouă sute, zero zeci, șase unități: 906." },
      { type: "tf", q: "305 și 350 sunt același număr.", answer: false, explain: "305 are 0 zeci și 5 unități; 350 are 5 zeci și 0 unități." },
      { type: "num", q: "Care este precedentul lui 800?", answer: 799, explain: "800 − 1 = 799." },
      { type: "mc", q: "Care descompunere este corectă pentru 608?", options: ["600 + 80", "600 + 8", "60 + 8"], answer: 1, explain: "6 S, 0 Z, 8 U = 600 + 8." },
      { type: "order", q: "Pune în ordine de la cel mai mic la cel mai mare.", items: ["98", "189", "198", "891", "1000"], explain: "Mai întâi numărul de două cifre, apoi se compară sutele, zecile, în sfârșit 1000." },
      { type: "num", q: "Câte zeci sunt în 1000?", answer: 100, explain: "1000 : 10 = 100 de zeci." },
      { type: "mc", q: "Ce simbol se pune între 457 … 475?", options: [">", "<", "="], answer: 1, explain: "Aceleași sute; zecile 5 < 7: 457 < 475." },
      { type: "text", q: "Scrie cu litere numărul 1000.", answer: ["o mie", "mie", "1 mie"], explain: "1000 se citește «o mie»." },
      { type: "num", q: "Luca are 3 cutii de câte 100 de abțibilduri, 4 pliculețe de câte 10 și 6 abțibilduri libere. Câte abțibilduri are?", answer: 346, explain: "300 + 40 + 6 = 346." }
    ],
    gen: [["placeValue", 3]]
  }
});

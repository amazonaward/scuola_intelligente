TOPIC('ro', {
  id: "p3-mat-moltiplicazioni-colonna",
  title: "Înmulțirea în coloană",
  intro: "Știi tabla înmulțirii? Atunci ești gata să înmulțești și numere mari! ✖️ Învățăm <b>înmulțirea în coloană</b> cu o cifră și cu două cifre, <b>reportul</b>, <b>proba</b>… și descoperim cum se înmulțește în Japonia, în Rusia și cum era pe vremea egiptenilor.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Să recapitulăm: ce este înmulțirea",
      html: `<p><b>Înmulțirea</b> este o <b>adunare repetată</b> de numere egale: 4 × 3 = 4 + 4 + 4 = 12.</p>
<ul>
<li>Numerele care se înmulțesc se numesc <b>factori</b> (primul se numește și <b>deînmulțit</b>, al doilea <b>înmulțitor</b>).</li>
<li>Rezultatul se numește <b>produs</b>.</li>
</ul>
<p>Proprietăți utile:</p>
<ul>
<li><b>Comutativitatea</b>: schimbând ordinea factorilor produsul nu se schimbă: 4 × 3 = 3 × 4.</li>
<li><b>Distributivitatea</b>: pot «sparge» un factor: 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92. Este chiar secretul înmulțirii în coloană!</li>
<li>Înmulțirea cu <b>10</b>: se adaugă un <b>zero</b> la sfârșit: 34 × 10 = 340. Fiecare cifră se mută cu un loc spre stânga (unitățile devin zeci…).</li>
</ul>`
    },
    {
      type: "3d",
      title: "Înmulțirea este un dreptunghi",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "3 rânduri de câte 4 cubulețe = 12 cubulețe. Rotește dreptunghiul: devine 4 rânduri de câte 3, dar cubulețele sunt tot 12 (comutativitatea). Folosește cursoarele ca să schimbi factorii."
    },
    {
      type: "text",
      title: "În coloană, cu o cifră la înmulțitor",
      html: `<p>Calculăm <b>247 × 3</b>. Se scriu numerele în coloană și se înmulțește <b>pornind de la unități</b>, de la dreapta spre stânga:</p>
<ol>
<li><b>Unități</b>: 3 × 7 = 21 → scriu <b>1</b> la unități și țin <b>2</b> zeci (<b>reportul</b>) deasupra zecilor.</li>
<li><b>Zeci</b>: 3 × 4 = 12, plus reportul 2 = 14 → scriu <b>4</b> și țin <b>1</b> deasupra sutelor.</li>
<li><b>Sute</b>: 3 × 2 = 6, plus reportul 1 = <b>7</b> → scriu 7.</li>
</ol>
<p>Rezultat: 247 × 3 = <b>741</b>.</p>
<p><b>Atenție:</b> reportul se <b>adaugă după</b> ce ai înmulțit, nu înainte! (3 × 4 + 2, nu 3 × 6.)</p>`
    },
    {
      type: "svg",
      title: "247 × 3 pas cu pas",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g font-size="20" font-weight="bold" fill="#8b5cf6" text-anchor="middle"><text x="110" y="30">S</text></g>
<g font-size="20" font-weight="bold" fill="#3b82f6" text-anchor="middle"><text x="160" y="30">Z</text></g>
<g font-size="20" font-weight="bold" fill="#22c55e" text-anchor="middle"><text x="210" y="30">U</text></g>
<text x="110" y="62" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">1</text>
<text x="160" y="62" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">2</text>
<g font-size="44" font-family="monospace" text-anchor="middle" fill="#1f2937">
<text x="110" y="110">2</text><text x="160" y="110">4</text><text x="210" y="110">7</text>
<text x="60" y="165">×</text><text x="210" y="165">3</text>
</g>
<line x1="40" y1="182" x2="240" y2="182" stroke="#1f2937" stroke-width="4"/>
<g font-size="44" font-family="monospace" text-anchor="middle" font-weight="bold" fill="#b45309">
<text x="110" y="235">7</text><text x="160" y="235">4</text><text x="210" y="235">1</text>
</g>
<g font-size="20" fill="#1f2937">
<text x="290" y="80">① 3 × 7 = 21 → scriu 1, țin 2</text>
<text x="290" y="135">② 3 × 4 = 12, + 2 = 14</text>
<text x="320" y="160">→ scriu 4, țin 1</text>
<text x="290" y="215">③ 3 × 2 = 6, + 1 = 7</text>
</g>
<text x="300" y="285" font-size="18" text-anchor="middle" fill="#dc2626">Numerele mici roșii sunt reporturile.</text>
</svg>`,
      caption: "Se pornește mereu de la unități; reporturile se scriu mici deasupra coloanei următoare."
    },
    {
      type: "quiz",
      title: "Mini-test: cu o cifră",
      questions: [
        { type: "num", q: "Cât face 132 × 3?", answer: 396, explain: "3 × 2 = 6; 3 × 3 = 9; 3 × 1 = 3 → 396 (fără report)." },
        { type: "num", q: "Cât face 58 × 4?", answer: 232, explain: "4 × 8 = 32, scriu 2 și țin 3; 4 × 5 = 20 + 3 = 23 → 232." },
        { type: "mc", q: "În 46 × 7, după ce ai făcut 7 × 6 = 42, cât ții minte?", options: ["2", "4", "42"], answer: 1, explain: "Scriu 2 la unități și țin 4 zeci." }
      ]
    },
    {
      type: "text",
      title: "În coloană, cu două cifre la înmulțitor",
      html: `<p>Calculăm <b>34 × 12</b>. Înmulțitorul 12 = <b>1 zece și 2 unități</b>, deci facem <b>două înmulțiri</b> și apoi le adunăm:</p>
<ol>
<li><b>Primul rând</b> – înmulțesc cu <b>unitățile</b> (2): 34 × 2 = <b>68</b>.</li>
<li><b>Al doilea rând</b> – înmulțesc cu <b>zecile</b> (1, care valorează 10): mai întâi scriu un <b>0</b> (sau o liniuță «–») la locul unităților, pentru că înmulțesc cu 10; apoi 34 × 1 = 34 → rândul devine <b>340</b>.</li>
<li><b>Adun</b> cele două rânduri (<b>produsele parțiale</b>): 68 + 340 = <b>408</b>.</li>
</ol>
<p>De ce zeroul? Pentru că 34 × 12 = 34 × 2 + 34 × <b>10</b>. Al doilea rând este 34 × 10 = 340, nu 34!</p>`
    },
    {
      type: "svg",
      title: "34 × 12: cele două produse parțiale",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#eff6ff"/>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#1f2937">
<text x="160" y="55">3</text><text x="200" y="55">4</text>
<text x="70" y="105">×</text><text x="160" y="105">1</text><text x="200" y="105">2</text>
</g>
<line x1="60" y1="120" x2="230" y2="120" stroke="#1f2937" stroke-width="4"/>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#2563eb">
<text x="160" y="170">6</text><text x="200" y="170">8</text>
</g>
<g font-size="40" font-family="monospace" text-anchor="middle" fill="#16a34a">
<text x="120" y="220">3</text><text x="160" y="220">4</text>
</g>
<text x="200" y="220" font-size="40" font-family="monospace" text-anchor="middle" fill="#dc2626">0</text>
<line x1="60" y1="235" x2="230" y2="235" stroke="#1f2937" stroke-width="4"/>
<text x="70" y="200" font-size="34" text-anchor="middle" fill="#1f2937">+</text>
<g font-size="40" font-family="monospace" text-anchor="middle" font-weight="bold" fill="#b45309">
<text x="120" y="285">4</text><text x="160" y="285">0</text><text x="200" y="285">8</text>
</g>
<g font-size="20">
<text x="270" y="170" fill="#2563eb">← 34 × 2 unități = 68</text>
<text x="270" y="210" fill="#16a34a">← 34 × 1 zece = 340</text>
<text x="290" y="236" fill="#dc2626">(0-ul roșu: × 10)</text>
<text x="270" y="285" fill="#b45309">← suma: 68 + 340 = 408</text>
</g>
</svg>`,
      caption: "Fiecare cifră a înmulțitorului dă un rând. Rândul zecilor se mută cu un loc spre stânga."
    },
    {
      type: "text",
      title: "Un exemplu cu reporturi și proba",
      html: `<p><b>56 × 23</b>:</p>
<ol>
<li>56 × <b>3</b>: 3 × 6 = 18 (scriu 8, țin 1); 3 × 5 = 15 + 1 = 16 → <b>168</b>.</li>
<li>56 × <b>2</b> zeci: scriu 0; 2 × 6 = 12 (scriu 2, țin 1); 2 × 5 = 10 + 1 = 11 → <b>1120</b>.</li>
<li>168 + 1120 = <b>1288</b>.</li>
</ol>
<p><b>Sfat:</b> când treci la al doilea rând, <b>șterge reporturile</b> din primul, ca să nu le încurci!</p>
<p><b>Proba</b>: datorită comutativității, poți reface calculul schimbând factorii: 23 × 56 trebuie să dea tot 1288. Poți face și o <b>estimare</b>: 56 × 23 este aproximativ 60 × 20 = 1200, deci 1288 este un rezultat rezonabil. Dacă îți ieșea 128 sau 12 880, înțelegeai imediat că ai greșit!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: excursia școlii",
      html: `<p>La excursie pleacă <b>4 autocare</b>. Fiecare autocar are <b>54 de locuri</b>. Câți copii pot pleca cel mult?</p>
<p>54 × 4: 4 × 4 = 16 (scriu 6, țin 1); 4 × 5 = 20 + 1 = 21 → <b>216 copii</b>.</p>
<p>Biletul la muzeu costă <b>12 lei</b> pe copil. Dacă pleacă 216 copii, cât se cheltuiește?</p>
<p>216 × 12: 216 × 2 = 432; 216 × 10 = 2160; 432 + 2160 = <b>2592 lei</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: ouăle din magazin",
      html: `<p>Un negustor primește <b>18 cutii</b> cu ouă. În fiecare cutie sunt <b>6 rânduri de câte 5 ouă</b>, adică 30 de ouă. Câte ouă sunt în total?</p>
<p>Mai întâi fiecare cutie: 6 × 5 = 30. Apoi toate cutiile: 30 × 18.</p>
<p>În coloană: 30 × 8 = 240; 30 × 1 zece = 300; 240 + 300 = <b>540 de ouă</b>.</p>
<p>Truc: 30 × 18 = 3 × 18 × 10 = 54 × 10 = 540. Același rezultat!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cine a inventat semnul ×",
      html: `<p>Semnul <b>×</b> a fost folosit pentru prima dată într-o carte tipărită de matematicianul englez <b>William Oughtred</b>, în <b>1631</b>. Marelui matematician german Leibniz nu-i plăcea, pentru că se confunda cu litera x, și prefera <b>punctul</b> (3 · 4). Și azi, în multe țări, se folosesc amândouă (la noi, în România, se folosește mai ales «·» sau «×»)!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Înmulțirea «în gelozie»",
      html: `<p>În Italia secolului al XV-lea se înmulțea cu o metodă în grilă numită «<b>per gelosia</b>» (în gelozie), pentru că grila seamănă cu zăbrelele ferestrelor (le «gelosie») prin care se putea privi afară fără a fi văzut. O găsim în <b>Aritmetica din Treviso</b> (1478), una dintre primele cărți de matematică tipărite în Europa. Venise din lumea arabă și indiană.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Se începe mereu de la <b>unități</b>, de la dreapta spre stânga.</li>
<li><b>Reportul</b> se adaugă <b>după</b> ce ai înmulțit.</li>
<li>Cu două cifre: un rând pentru unități, un rând pentru zeci cu <b>0</b> (sau liniuță) la locul unităților.</li>
<li>La sfârșit se <b>adună</b> produsele parțiale.</li>
<li>Proba: schimbă factorii (comutativitatea) sau fă o estimare.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înmulți",
      intro: "Metoda în coloană nu este singura! În lume și în istorie s-a înmulțit în multe feluri. Încearcă-o pe cea care îți place mai mult: toate dau același rezultat.",
      tabs: [
        {
          label: "🇯🇵 Metoda liniilor",
          html: `<p>În Japonia și în China se învață și înmulțirea <b>desenând linii</b>. Pentru 23 × 12: desenezi 2 linii și 3 linii pe o direcție (pentru 23) și 1 linie și 2 linii pe cealaltă direcție (pentru 12). Apoi <b>numeri intersecțiile</b> din fiecare zonă: în stânga sutele, la mijloc zecile, în dreapta unitățile. 2 | 7 | 6 → <b>276</b>.</p>`,
          widget: "lineMultiply",
          options: { a: 23, b: 12 }
        },
        {
          label: "🕌 În gelozie (grilă)",
          html: `<p>Desenezi o grilă cu o căsuță pentru fiecare pereche de cifre, tăiată pe diagonală. În fiecare căsuță scrii produsul (zecile sus, unitățile jos). Apoi aduni de-a lungul diagonalelor, începând din dreapta. Niciun report cât timp înmulțești! 47 × 36 = <b>1692</b>.</p>`,
          widget: "lattice",
          options: { a: 47, b: 36 }
        },
        {
          label: "🇷🇺 Țăranul rus",
          html: `<p>Ajunge să știi să <b>înjumătățești</b> și să <b>dublezi</b>! Scrii cele două numere în coloană: în stânga înjumătățești (ignorând restul), în dreapta dublezi. Apoi <b>tai</b> rândurile unde în stânga este un număr <b>par</b> și aduni ce rămâne în dreapta. 37 × 24 = <b>888</b>.</p>`,
          widget: "russianPeasant",
          options: { a: 37, b: 24 }
        },
        {
          label: "𓂀 Ca egiptenii",
          html: `<p>Scribii egipteni, acum mai bine de 3500 de ani, înmulțeau doar <b>dublând</b>: 21, 42, 84, 168… Apoi alegeau dublările potrivite și le adunau. Pentru 13 × 21: 13 = 1 + 4 + 8, deci 21 + 84 + 168 = <b>273</b>.</p>`,
          widget: "egyptianMultiply",
          options: { a: 13, b: 21 }
        },
        {
          label: "🟦 Dreptunghiul spart",
          html: `<p>Mulți învățători din Anglia și din Statele Unite folosesc «<b>box method</b>» (metoda căsuței): se sparg numerele în zeci și unități și se desenează un dreptunghi împărțit în bucăți.</p>
<p>34 × 12 → (30 + 4) × (10 + 2): patru dreptunghiuri 300, 40, 60, 8. Suma: 300 + 40 + 60 + 8 = <b>408</b>. Este exact ce face coloana, dar se vede!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#ffffff"/>
<text x="210" y="30" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">30</text>
<text x="400" y="30" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">4</text>
<text x="45" y="125" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">10</text>
<text x="45" y="225" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">2</text>
<rect x="80" y="45" width="260" height="150" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<rect x="340" y="45" width="120" height="150" fill="#fde68a" stroke="#1e3a8a" stroke-width="3"/>
<rect x="80" y="195" width="260" height="60" fill="#bbf7d0" stroke="#1e3a8a" stroke-width="3"/>
<rect x="340" y="195" width="120" height="60" fill="#fecaca" stroke="#1e3a8a" stroke-width="3"/>
<text x="210" y="128" font-size="30" font-weight="bold" text-anchor="middle" fill="#1e3a8a">300</text>
<text x="400" y="128" font-size="30" font-weight="bold" text-anchor="middle" fill="#78350f">40</text>
<text x="210" y="234" font-size="26" font-weight="bold" text-anchor="middle" fill="#14532d">60</text>
<text x="400" y="234" font-size="26" font-weight="bold" text-anchor="middle" fill="#7f1d1d">8</text>
<text x="530" y="130" font-size="22" text-anchor="middle" fill="#1f2937">= 408</text>
</svg>`
        },
        {
          label: "🧊 Cubulețe 3D",
          html: `<p>O înmulțire este un dreptunghi de cubulețe: 12 rânduri de câte 4 = 48. Mișcă cursoarele și observă: dacă dublezi un factor, dreptunghiul devine dublu. Spărgând dreptunghiul în două bucăți (10 rânduri + 2 rânduri) vezi cele două rânduri ale înmulțirii în coloană!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 12, b: 4, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta înmulțirii în coloană: atinge un nod și descoperă de ce",
      nodes: [
        { id: "addizione", label: "Adunare repetată", x: 50, y: 6, color: "#2563eb", html: "4 × 3 = 4 + 4 + 4.", why: "Înmulțirea s-a născut ca o scurtătură: în loc să aduni de multe ori același număr, folosești o singură operație. Egiptenii și babilonienii o foloseau încă de acum 4000 de ani ca să calculeze recolte și terenuri." },
        { id: "tabelline", label: "Tabla înmulțirii", x: 18, y: 26, color: "#f59e0b", html: "Produsele de la 1 × 1 la 10 × 10.", why: "Sunt «cărămizile» oricărui calcul: fiecare înmulțire în coloană este făcută din multe mici table ale înmulțirii. Tabla se numește «pitagorică» în onoarea lui Pitagora, deși tabele asemănătoare existau deja la Babilon." },
        { id: "posizione", label: "Valoare de poziție", x: 82, y: 26, color: "#8b5cf6", html: "Fiecare cifră valorează U, Z sau S după loc.", why: "Metoda în coloană funcționează doar datorită sistemului pozițional indo-arab cu zero, adus în Europa de Fibonacci în 1202: cu cifrele romane era aproape imposibil!" },
        { id: "distributiva", label: "Proprietatea distributivă", x: 50, y: 45, color: "#16a34a", html: "34 × 12 = 34 × 10 + 34 × 2.", why: "Este adevăratul «de ce» al coloanei: sparg un factor în zeci și unități, înmulțesc bucățile și apoi adun. Fiecare rând al coloanei este una dintre aceste bucăți." },
        { id: "riporto", label: "Reportul", x: 18, y: 62, color: "#dc2626", html: "Zecile în plus care trec în coloana din stânga.", why: "Dacă un produs depășește 9, nu încape într-o căsuță: 10 unități devin 1 zece și «urcă» la locul următor. Este schimbul din sistemul zecimal." },
        { id: "zero", label: "Zeroul (sau liniuța)", x: 82, y: 62, color: "#64748b", html: "În al doilea rând se pune un 0 sub unități.", why: "Când înmulțesc cu cifra zecilor, înmulțesc cu 10, 20, 30…: rezultatul trebuie să se mute cu un loc spre stânga. Zeroul ține gol locul unităților." },
        { id: "parziali", label: "Produse parțiale", x: 50, y: 74, color: "#0ea5e9", html: "Rândurile care apoi se adună: 68 și 340.", why: "Sunt bucățile proprietății distributive scrise una sub alta, deja aliniate ca să fie adunate." },
        { id: "commutativa", label: "Comutativitatea și proba", x: 22, y: 90, color: "#a855f7", html: "a × b = b × a: refac calculul schimbând factorii.", why: "Un dreptunghi de 3 × 4 cubulețe întors devine 4 × 3: cubulețele rămân aceleași. De aceea schimbarea factorilor este o verificare excelentă." },
        { id: "altri", label: "Alte metode", x: 78, y: 90, color: "#ec4899", html: "Liniile japoneze, gelozia, țăranul rus, egiptenii.", why: "Toate folosesc aceleași idei (dublarea, distributivitatea, valoarea de poziție) în moduri diferite. Metoda în coloană s-a răspândit în Europa pentru că este rapidă de scris pe hârtie și ocupă puțin loc." }
      ],
      edges: [
        ["addizione", "tabelline", "se memorează în"],
        ["addizione", "posizione", "cu numere mari folosește"],
        ["tabelline", "distributiva", "+"],
        ["posizione", "distributiva", "+"],
        ["distributiva", "riporto", "cere"],
        ["distributiva", "zero", "pentru zeci trebuie"],
        ["distributiva", "parziali", "produce"],
        ["parziali", "commutativa", "se verifică cu"],
        ["parziali", "altri", "se pot face și cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: cu două cifre",
      questions: [
        { type: "num", q: "Cât face 23 × 13?", answer: 299, explain: "23 × 3 = 69; 23 × 10 = 230; 69 + 230 = 299." },
        { type: "mc", q: "În 45 × 21, al doilea rând (pentru zeci) este…", options: ["90", "900", "45"], answer: 1, explain: "45 × 2 zeci = 45 × 20 = 900." },
        { type: "tf", q: "În al doilea rând se scrie un 0 la locul unităților pentru că se înmulțește cu zecile.", answer: true, explain: "Înmulțirea cu 10, 20, 30… mută totul cu un loc spre stânga." }
      ]
    }
  ],
  glossary: [
    { t: "Înmulțire", d: "Operație care corespunde unei adunări repetate de numere egale." },
    { t: "Factori", d: "Numerele care se înmulțesc." },
    { t: "Produs", d: "Rezultatul înmulțirii." },
    { t: "Report", d: "Zecile (sau sutele) care se mută în coloana din stânga când un produs depășește 9." },
    { t: "Produs parțial", d: "Fiecare rând obținut înmulțind cu o cifră a înmulțitorului." },
    { t: "Comutativitate", d: "Schimbând ordinea factorilor, produsul nu se schimbă." },
    { t: "Distributivitate", d: "Se poate sparge un factor și înmulți părțile: 23 × 4 = 20 × 4 + 3 × 4." },
    { t: "Estimare", d: "Calcul aproximativ pentru a verifica dacă rezultatul este rezonabil." },
    { t: "Probă", d: "Verificarea rezultatului, de exemplu schimbând factorii." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Cât face 213 × 3?", answer: 639, explain: "3 × 3 = 9; 3 × 1 = 3; 3 × 2 = 6 → 639." },
      { type: "num", q: "Cât face 125 × 4?", answer: 500, explain: "4 × 5 = 20 (0, țin 2); 4 × 2 = 8 + 2 = 10 (0, țin 1); 4 × 1 = 4 + 1 = 5 → 500." },
      { type: "num", q: "Cât face 27 × 14?", answer: 378, explain: "27 × 4 = 108; 27 × 10 = 270; 108 + 270 = 378." },
      { type: "mc", q: "De la ce cifră se începe înmulțirea în coloană?", options: ["de la sute", "de la unități", "de la zeci"], answer: 1, explain: "Se pornește de la unități, de la dreapta spre stânga." },
      { type: "tf", q: "Reportul se adaugă înainte de a înmulți.", answer: false, explain: "Mai întâi se înmulțește, apoi se adaugă reportul." },
      { type: "num", q: "Cât face 64 × 10?", answer: 640, explain: "Înmulțind cu 10 se adaugă un zero." },
      { type: "mc", q: "Ce calcul servește la verificarea lui 36 × 15 = 540?", options: ["15 × 36", "36 + 15", "540 − 36"], answer: 0, explain: "Comutativitatea: schimbând factorii, produsul trebuie să fie egal." },
      { type: "order", q: "Pune în ordine pașii lui 34 × 12.", items: ["34 × 2 = 68", "scriu 0 sub unități", "34 × 1 = 34 → 340", "68 + 340 = 408"], explain: "Mai întâi unitățile, apoi zecile cu zero, în sfârșit suma." },
      { type: "num", q: "Un autocar are 52 de locuri. Câte locuri sunt în 6 autocare?", answer: 312, explain: "52 × 6: 6 × 2 = 12 (2, țin 1); 6 × 5 = 30 + 1 = 31 → 312." },
      { type: "mc", q: "O estimare pentru 48 × 21 este aproximativ…", options: ["100", "1000", "10 000"], answer: 1, explain: "48 este aproape 50, 21 aproape 20: 50 × 20 = 1000. Rezultatul exact este 1008." },
      { type: "num", q: "Cât face 45 × 21?", answer: 945, explain: "45 × 1 = 45; 45 × 20 = 900; 45 + 900 = 945." }
    ],
    gen: [["mult2", 3]]
  }
});

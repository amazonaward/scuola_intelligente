TOPIC('ro', {
  id: "l1-mat-statistica",
  title: "Statistică descriptivă",
  intro: "În fiecare zi suntem asaltați de numere: sondaje, procente, „în medie”, „majoritatea…”… <b>Statistica</b> este știința care ne permite să adunăm date, să le organizăm, să le rezumăm și să le citim cu spirit critic. În această lecție înveți să construiești tabele de frecvențe și grafice și să calculezi <b>indicii</b> care rezumă un set de date: <b>media, mediana, modul</b> și măsurile de <b>variabilitate</b> (amplitudinea, varianța, abaterea medie pătratică).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Populație, eșantion, caracter",
      html: `<p>Statistica descriptivă pornește de la câțiva termeni:</p>
<ul>
<li><b>Populația</b> (sau colectivitatea): mulțimea tuturor indivizilor asupra cărora se face cercetarea (elevii unei școli, familiile unui oraș…). Fiecare element este o <b>unitate statistică</b>.</li>
<li><b>Eșantionul</b>: o submulțime a populației, aleasă pentru a o studia fără a-i întreba pe toți. Pentru ca eșantionul să fie de încredere trebuie să fie <b>reprezentativ</b> (ales la întâmplare, nu doar dintre prietenii tăi!).</li>
<li><b>Caracterul</b>: ceea ce se observă la fiecare unitate; manifestările lui posibile sunt <b>modalitățile</b>.</li>
</ul>
<p>Caracterele pot fi:</p>
<ul>
<li><b>calitative</b>: modalitățile sunt nume (culoarea ochilor, echipa preferată, profilul de studii);</li>
<li><b>cantitative discrete</b>: numere întregi obținute prin numărare (numărul de frați, note întregi);</li>
<li><b>cantitative continue</b>: numere măsurate, care pot lua orice valoare dintr-un interval (înălțime, greutate, timp). Se grupează în <b>clase</b>.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Ce fel de caracter este?",
      widget: "classify",
      options: { groups: ["Calitativ", "Cantitativ discret", "Cantitativ continuu"], items: [
        ["culoarea ochilor", 0],
        ["numărul de frați", 1],
        ["înălțimea", 2],
        ["echipa susținută", 0],
        ["nota din catalog (numere întregi)", 1],
        ["greutatea", 2],
        ["timpul la 100 m", 2],
        ["mesaje trimise pe zi", 1]
      ] },
      caption: "Dacă numeri, este discret; dacă măsori, este continuu; dacă descrii cu cuvinte, este calitativ."
    },
    {
      type: "text",
      title: "Frecvențe și tabele",
      html: `<p>După ce au fost adunate datele, se numără de câte ori apare fiecare modalitate. Acest număr este <b>frecvența</b>:</p>
<ul>
<li><b>frecvență absolută</b> (f): de câte ori apare modalitatea;</li>
<li><b>frecvență relativă</b> (f/n): fracția din totalul n al observațiilor (un număr între 0 și 1);</li>
<li><b>frecvență procentuală</b>: cea relativă × 100;</li>
<li><b>frecvență cumulată</b>: suma frecvențelor până la acea modalitate (pentru caractere ordonabile).</li>
</ul>
<p><b>Exemplu</b>: notele a 20 de elevi la o lucrare.</p>
<table>
<tr><th>Nota</th><th>f</th><th>f relativă</th><th>%</th><th>cumulată</th></tr>
<tr><td>5</td><td>2</td><td>0,10</td><td>10 %</td><td>2</td></tr>
<tr><td>6</td><td>5</td><td>0,25</td><td>25 %</td><td>7</td></tr>
<tr><td>7</td><td>7</td><td>0,35</td><td>35 %</td><td>14</td></tr>
<tr><td>8</td><td>4</td><td>0,20</td><td>20 %</td><td>18</td></tr>
<tr><td>9</td><td>2</td><td>0,10</td><td>10 %</td><td>20</td></tr>
<tr><td><b>Total</b></td><td><b>20</b></td><td><b>1</b></td><td><b>100 %</b></td><td></td></tr>
</table>
<p>Verificare: suma frecvențelor absolute este n, iar cea a frecvențelor relative este întotdeauna <b>1</b>.</p>`
    },
    {
      type: "svg",
      title: "Graficul notelor",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="560" y2="250" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="250" x2="60" y2="60" stroke="#475569" stroke-width="2"/>
<rect x="80" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="170" y="125" width="70" height="125" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="260" y="75" width="70" height="175" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
<rect x="350" y="150" width="70" height="100" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<rect x="440" y="200" width="70" height="50" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
<g font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="115" y="278">5</text><text x="205" y="278">6</text><text x="295" y="278">7</text><text x="385" y="278">8</text><text x="475" y="278">9</text>
</g>
<g font-size="16" text-anchor="middle" fill="#1e3a8a">
<text x="115" y="192">2</text><text x="205" y="117">5</text><text x="295" y="67">7</text><text x="385" y="142">4</text><text x="475" y="192">2</text>
</g>
<line x1="290" y1="45" x2="290" y2="250" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<text x="300" y="38" font-size="16" fill="#dc2626" font-weight="bold">media 6,95 · mediana 7 · modul 7</text>
<text x="570" y="296" font-size="14" text-anchor="end" fill="#475569">nota</text>
<text x="66" y="52" font-size="14" fill="#475569">numărul de elevi</text>
</svg>`,
      caption: "Diagrama cu bare a distribuției notelor: vârful este modulul, linia punctată arată unde se află media și mediana."
    },
    {
      type: "text",
      title: "Reprezentări grafice",
      html: `<p>Alegerea graficului depinde de tipul datelor:</p>
<ul>
<li><b>Diagrama cu bare (ortogramă)</b>: pentru caractere calitative sau discrete; barele sunt separate, iar înălțimea lor este proporțională cu frecvența.</li>
<li><b>Histograma</b>: pentru caractere continue grupate în clase; dreptunghiurile sunt <b>adiacente</b>, iar <b>aria</b> (nu înălțimea!) este proporțională cu frecvența, dacă clasele au amplitudini diferite.</li>
<li><b>Diagrama circulară (grafic „plăcintă”)</b>: fiecare modalitate este un sector circular cu unghiul = frecvența relativă × 360°. Utilă pentru a arăta părțile unui întreg.</li>
<li><b>Diagrama carteziană (cu linii)</b>: pentru evoluția în timp (evoluția temperaturilor, a populației).</li>
</ul>
<p>⚠️ Un grafic poate induce în eroare: o axă verticală care nu pornește de la zero sau prea multe dimensiuni (grafice 3D) măresc diferențele mici. Uită-te întotdeauna la axe!</p>
<p><b>Exemplu de diagramă circulară</b>: 35 % dintre note sunt 7 → unghiul 0,35 · 360° = <b>126°</b>.</p>`
    },
    {
      type: "text",
      title: "Indicii de poziție: media, mediana, modul",
      html: `<p>Pentru a rezuma un set de date printr-un singur număr se folosesc <b>valorile medii</b>:</p>
<ul>
<li><b>Media aritmetică</b>: suma tuturor valorilor împărțită la numărul datelor. Cu un tabel de frecvențe se folosește media ponderată: (Σ valoare · frecvență)/n.</li>
<li><b>Mediana</b>: valoarea aflată <b>în mijlocul</b> datelor ordonate. Dacă n este impar, este data din mijloc; dacă n este par, este media celor două date din mijloc.</li>
<li><b>Modul</b>: valoarea cu <b>frecvența cea mai mare</b>. Poate să nu fie unic (distribuție bimodală) și este valabil și pentru caractere calitative.</li>
</ul>
<p><b>Exemplu</b>: datele 2, 4, 4, 4, 5, 5, 7, 9 (n = 8).</p>
<ul>
<li>Media: (2 + 4 + 4 + 4 + 5 + 5 + 7 + 9)/8 = 40/8 = <b>5</b>.</li>
<li>Mediana: datele sunt deja ordonate; cele din mijloc sunt a 4-a și a 5-a (4 și 5): (4 + 5)/2 = <b>4,5</b>.</li>
<li>Modul: 4 apare de trei ori: <b>4</b>.</li>
</ul>
<p><b>Din notele din tabel</b>: media = (5·2 + 6·5 + 7·7 + 8·4 + 9·2)/20 = 139/20 = <b>6,95</b>; mediana: a 10-a și a 11-a dată sunt amândouă 7 → <b>7</b>; modul <b>7</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: media care induce în eroare",
      html: `<p>Într-o firmă mică, 9 angajați câștigă <b>1 500 €</b> pe lună, iar patronul <b>11 500 €</b>. Care este salariul „tipic”?</p>
<ul>
<li>Media: (9 · 1 500 + 11 500)/10 = 25 000/10 = <b>2 500 €</b>.</li>
<li>Mediana: <b>1 500 €</b>. Modul: <b>1 500 €</b>.</li>
</ul>
<p>Dacă firma spune „salariul mediu 2 500 €”, este formal adevărat, dar niciun angajat nu câștigă o sumă apropiată! O <b>valoare anormală</b> (<i>outlier</i>) mută mult media și foarte puțin mediana. De aceea, când datele sunt asimetrice (venituri, prețuri ale locuințelor), se preferă <b>mediana</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: frecvențe și valori medii",
      questions: [
        { type: "num", q: "Într-o clasă de 25 de elevi, 5 merg la școală cu bicicleta. Ce procent?", answer: 20, unit: "%", explain: "5/25 = 0,20 → 20 %." },
        { type: "num", q: "Care este media numerelor 4, 6, 8, 10, 12?", answer: 8, explain: "40/5 = 8." },
        { type: "num", q: "Care este mediana numerelor 3, 9, 4, 7, 5?", answer: 5, explain: "Ordonate: 3, 4, 5, 7, 9: data din mijloc este 5." }
      ]
    },
    {
      type: "text",
      title: "Indici de variabilitate",
      html: `<p>Două clase pot avea aceeași medie, dar să fie foarte diferite: A = {6, 6, 6, 6}, B = {2, 4, 8, 10}: media 6 în ambele, dar în B notele sunt foarte împrăștiate. <b>Indicii de variabilitate</b> măsoară cât de împrăștiate sunt datele:</p>
<ul>
<li><b>Amplitudinea</b>: maxim − minim. (A: 0, B: 8.) Simplă, dar depinde doar de extreme.</li>
<li><b>Abaterea</b> unei date: diferența față de medie (x − m). Abaterile au <b>suma zero</b>, deci nu pot fi adunate direct.</li>
<li><b>Varianța</b> (σ²): <b>media pătratelor abaterilor</b>. Prin ridicare la pătrat semnele dispar, iar abaterile mari contează mai mult.</li>
<li><b>Abaterea medie pătratică</b> (abaterea standard, σ): rădăcina pătrată a varianței; are <b>aceeași unitate de măsură</b> ca datele.</li>
</ul>
<p><b>Exemplu</b>: datele 2, 4, 4, 4, 5, 5, 7, 9 (media 5). Abateri: −3, −1, −1, −1, 0, 0, 2, 4. Pătrate: 9, 1, 1, 1, 0, 0, 4, 16, suma 32. Varianța = 32/8 = <b>4</b>; abaterea medie pătratică = √4 = <b>2</b>.</p>
<p>Pentru notele din tabel: Σx² = 991, deci σ² = 991/20 − 6,95² = 49,55 − 48,3025 = <b>1,2475</b>, iar σ ≈ <b>1,12</b>. O formulă comodă este σ² = (media pătratelor) − (pătratul mediei).</p>`
    },
    {
      type: "remember",
      title: "Cum alegem indicele",
      html: `<ul>
<li><b>Media</b>: date numerice fără valori anormale; folosește toate datele.</li>
<li><b>Mediana</b>: date asimetrice sau cu outlieri; este suficient să ordonezi datele.</li>
<li><b>Modul</b>: singurul utilizabil la caracterele calitative (culoarea preferată, marca…).</li>
<li><b>Varianța / σ</b>: pentru a spune dacă media „reprezintă bine” datele: σ mic = date apropiate de medie.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Puiul lui Trilussa",
      html: `<p>Poetul roman <b>Trilussa</b> (1871–1950) a scris o poezie, <i>La statistica</i>, care ironizează mediile: dacă unul mănâncă doi pui și altul niciunul, „în medie” au mâncat câte un pui fiecare, dar unul a avut o indigestie, iar celălalt a rămas flămând. Media singură nu spune <i>cum</i> sunt distribuite datele: de aceea sunt necesare și mediana și variabilitatea.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Florence Nightingale",
      html: `<p>Asistenta <b>Florence Nightingale</b> (1820–1910), în timpul războiului din Crimeea (1853–1856), a adunat date despre decesele din taberele militare britanice și a descoperit că majoritatea soldaților nu mureau din cauza rănilor, ci a bolilor provocate de igiena precară. Pentru a convinge guvernul, a inventat un grafic pe sectoare foarte eficient, „diagrama coxcomb” (creastă de cocoș): reformele sanitare care au urmat au salvat foarte multe vieți. A fost și prima femeie aleasă membră a Royal Statistical Society. Cuvântul <i>statistică</i> provine din <i>Staat</i>, „stat”: a apărut pentru a descrie datele statului (populație, impozite, armate).</p>`
    },
    {
      type: "example",
      title: "Exemplu: cum citim un sondaj cu spirit critic",
      html: `<p>„70 % dintre italieni vor o școală mai lungă”, spune un titlu. Întrebări de pus: cine a fost întrebat (<b>eșantionul</b> este reprezentativ sau sunt 100 de persoane dintr-un singur cartier)? Cum a fost formulată întrebarea? Câți sunt respondenții? O frecvență relativă de 0,7 la 10 persoane spune mult mai puțin decât la 1 000. În statistică, calitatea datelor contează la fel de mult ca și calculele.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege indicii statistici",
      intro: "Media, mediana și varianța au și interpretări intuitive, aproape fizice.",
      tabs: [
        {
          label: "⚖️ Media ca centru de greutate",
          html: `<p>Pune datele pe un <b>balansoar</b>: fiecare dată este o pietricică în poziția ei pe axa numerelor. <b>Media</b> este punctul în care trebuie să pui axul pentru a ține balansoarul în <b>echilibru</b>. Datele îndepărtate de centru „cântăresc” mai mult: de aceea o valoare anormală trage media după ea. Abaterile din stânga compensează exact pe cele din dreapta: suma lor este zero.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="170" x2="550" y2="170" stroke="#334155" stroke-width="4"/>
<g stroke="#334155" stroke-width="2"><line x1="150" y1="170" x2="150" y2="178"/><line x1="200" y1="170" x2="200" y2="178"/><line x1="250" y1="170" x2="250" y2="178"/><line x1="300" y1="170" x2="300" y2="178"/><line x1="350" y1="170" x2="350" y2="178"/><line x1="400" y1="170" x2="400" y2="178"/><line x1="450" y1="170" x2="450" y2="178"/><line x1="500" y1="170" x2="500" y2="178"/></g>
<g fill="#f59e0b" stroke="#92400e" stroke-width="2">
<circle cx="150" cy="152" r="14"/>
<circle cx="250" cy="152" r="14"/><circle cx="250" cy="124" r="14"/><circle cx="250" cy="96" r="14"/>
<circle cx="300" cy="152" r="14"/><circle cx="300" cy="124" r="14"/>
<circle cx="400" cy="152" r="14"/>
<circle cx="500" cy="152" r="14"/>
</g>
<polygon points="300,176 275,215 325,215" fill="#dc2626"/>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="150" y="240">2</text><text x="200" y="240">3</text><text x="250" y="240">4</text><text x="300" y="240">5</text><text x="350" y="240">6</text><text x="400" y="240">7</text><text x="450" y="240">8</text><text x="500" y="240">9</text>
</g>
<text x="300" y="268" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">ax = media = 5 (echilibru)</text>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1f2937">date: 2, 4, 4, 4, 5, 5, 7, 9</text>
</svg>`
        },
        {
          label: "🍬 Redistribuirea",
          html: `<p>Media este valoarea pe care ar avea-o fiecare individ dacă cantitatea totală ar fi <b>împărțită în părți egale</b>. Patru prieteni au 2, 4, 6 și 12 bomboane: total 24. Dacă le pun la un loc și le împart, fiecare primește 24/4 = <b>6</b>: media. Cu această idee este ușor de înțeles de ce suma abaterilor este zero: cine se află deasupra mediei cedează exact ce primește cine se află sub ea.</p>`
        },
        {
          label: "🚶 Mediana: șirul",
          html: `<p>Pune elevii la rând de la cel mai scund la cel mai înalt: <b>mediana</b> este înălțimea celui aflat <b>în mijlocul șirului</b>. Jumătate dintre elevi sunt mai scunzi sau egali, jumătate mai înalți sau egali. Dacă vine un baschetbalist foarte înalt, șirul se lungește, dar <b>cel din mijloc se schimbă foarte puțin</b>: de aceea mediana este robustă față de valorile anormale. Media, în schimb, se deplasează imediat spre noul venit.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta statisticii descriptive",
      nodes: [
        { id: "pop", label: "Populație și eșantion", x: 50, y: 6, color: "#6366f1", html: "Toți indivizii sau o submulțime reprezentativă.", why: "A-i întreba pe toți este adesea imposibil sau prea costisitor: se studiază un eșantion. Dacă este ales prost (nealeatoriu), rezultatele sunt distorsionate." },
        { id: "car", label: "Caracter", x: 20, y: 26, color: "#16a34a", html: "Calitativ, discret, continuu.", why: "Tipul de caracter decide ce grafice și ce indici au sens: nu se poate face media culorilor." },
        { id: "freq", label: "Frecvențe", x: 80, y: 26, color: "#f59e0b", html: "Absolute, relative, procentuale, cumulate.", why: "Transformă o listă dezordonată de date într-o distribuție lizibilă; cele relative permit compararea eșantioanelor de dimensiuni diferite." },
        { id: "graf", label: "Grafice", x: 80, y: 52, color: "#a855f7", html: "Bare, histogramă, diagramă circulară, linii.", why: "Florence Nightingale a arătat cu grafice că reformele sanitare erau necesare: o imagine poate convinge acolo unde tabelele nu reușesc." },
        { id: "pos", label: "Media, mediana, modul", x: 25, y: 52, color: "#0ea5e9", html: "Valori care rezumă „centrul” datelor.", why: "Media (Gauss, metoda celor mai mici pătrate) minimizează suma pătratelor abaterilor; mediana suma valorilor absolute; modul indică valoarea cea mai tipică." },
        { id: "var", label: "Variabilitate", x: 50, y: 74, color: "#ef4444", html: "Amplitudine, varianță, abatere medie pătratică.", why: "Sunt necesare pentru că centrul singur nu este suficient: aceleași valori medii pot ascunde date foarte împrăștiate." },
        { id: "out", label: "Valori anormale", x: 82, y: 82, color: "#14b8a6", html: "Date foarte îndepărtate de celelalte.", why: "Mută media, dar nu mediana: alegerea indicelui depinde de prezența outlierilor." },
        { id: "inf", label: "Spre probabilitate", x: 20, y: 88, color: "#ec4899", html: "De la a descrie la a prevedea.", why: "Statistica inferențială folosește probabilitatea pentru a extinde ceea ce se observă pe eșantion la populație, cu o marjă de eroare." }
      ],
      edges: [
        ["pop", "car", "se observă un"],
        ["car", "freq", "se numără cu"],
        ["freq", "graf", "se reprezintă cu"],
        ["freq", "pos", "se rezumă cu"],
        ["pos", "var", "se completează cu"],
        ["var", "out", "sensibilă la"],
        ["pop", "inf", "duce la"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: variabilitate",
      questions: [
        { type: "tf", q: "Media unui set de date este sensibilă la valorile anormale, mediana mult mai puțin.", answer: true, explain: "Un outlier mută media; mediana depinde doar de data din mijloc." },
        { type: "num", q: "Care este amplitudinea numerelor 3, 9, 4, 12, 7?", answer: 9, explain: "12 − 3 = 9." },
        { type: "mc", q: "Varianța este…", options: ["media pătratelor abaterilor de la medie", "diferența dintre maxim și minim", "data cea mai frecventă"], answer: 0, explain: "Rădăcina ei pătrată este abaterea medie pătratică." }
      ]
    }
  ],
  glossary: [
    { t: "Populație", d: "Mulțimea tuturor unităților statistice studiate." },
    { t: "Eșantion", d: "Submulțime reprezentativă a populației." },
    { t: "Caracter", d: "Proprietatea observată la fiecare unitate: calitativă sau cantitativă (discretă sau continuă)." },
    { t: "Frecvență absolută / relativă", d: "De câte ori apare o modalitate / fracția ei din total." },
    { t: "Media aritmetică", d: "Suma datelor împărțită la numărul lor." },
    { t: "Mediana", d: "Valoarea din mijloc a datelor ordonate." },
    { t: "Modul", d: "Modalitatea cu frecvența cea mai mare." },
    { t: "Amplitudine", d: "Diferența dintre valoarea maximă și cea minimă." },
    { t: "Varianța", d: "Media pătratelor abaterilor de la medie." },
    { t: "Abaterea medie pătratică", d: "Rădăcina pătrată a varianței (abaterea standard)." },
    { t: "Outlier", d: "Valoare anormală, foarte îndepărtată de celelalte date." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Numărul de frați este un caracter…", options: ["cantitativ discret", "calitativ", "cantitativ continuu"], answer: 0, explain: "Se obține prin numărare: valori întregi." },
      { type: "num", q: "Care este media numerelor 4, 6, 8, 10, 12?", answer: 8, explain: "40/5 = 8." },
      { type: "num", q: "Care este mediana numerelor 3, 9, 4, 7, 5?", answer: 5, explain: "Ordonând: 3, 4, 5, 7, 9; data din mijloc este 5." },
      { type: "num", q: "Care este mediana numerelor 2, 4, 6, 10?", answer: 5, explain: "n este par: media celor două date din mijloc, (4 + 6)/2 = 5." },
      { type: "mc", q: "Care este modul numerelor 1, 2, 2, 3, 3, 3, 4?", options: ["3", "2", "2,5"], answer: 0, explain: "3 apare de trei ori, mai mult decât orice altă valoare." },
      { type: "num", q: "Într-un eșantion de 48 de persoane, 12 preferă ceaiul. Care este frecvența relativă?", answer: 0.25, tol: 0.001, explain: "12/48 = 0,25." },
      { type: "tf", q: "O valoare anormală foarte mare crește mult media, dar schimbă puțin mediana.", answer: true, explain: "Este motivul pentru care la venituri se preferă adesea mediana." },
      { type: "num", q: "Nouă angajați câștigă 1 500 €, iar patronul 11 500 €. Care este salariul mediu, în euro?", answer: 2500, unit: "€", explain: "(9 · 1 500 + 11 500)/10 = 2 500 €." },
      { type: "order", q: "Pune în ordine pașii pentru calculul varianței.", items: ["Calculăm media", "Calculăm abaterile de la medie", "Ridicăm la pătrat abaterile", "Facem media pătratelor abaterilor"], explain: "Rădăcina pătrată a varianței este abaterea medie pătratică." },
      { type: "num", q: "Cât este abaterea medie pătratică a datelor 4 și 6?", answer: 1, explain: "Media 5; abaterile −1 și +1; pătratele 1 și 1; varianța 1; rădăcina 1." }
    ]
  }
});

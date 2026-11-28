TOPIC('ro', {
  id: "l1-mat-insiemi-numerici",
  title: "Numere naturale, întregi și raționale",
  intro: "Să numeri oile, să notezi o datorie, să împarți o pizza în părți egale: fiecare problemă din viața de zi cu zi a cerut, de-a lungul istoriei, un nou tip de numere. De la <b>naturale</b> la <b>întregi</b> și apoi la <b>raționale</b>, construim pas cu pas un sistem în care orice adunare, scădere, înmulțire și împărțire (cu excepția împărțirii la zero) are întotdeauna un rezultat. În această lecție recapitulăm riguros <b>proprietățile operațiilor</b>, <b>puterile</b>, <b>fracțiile</b> și <b>fracțiile zecimale periodice</b>, cu o întrebare în fundal: de ce avem mereu nevoie de numere noi?",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "ℕ, ℤ, ℚ: trei mulțimi, trei nevoi",
      html: `<p><b>Numerele naturale</b> ℕ = {0, 1, 2, 3, …} servesc la numărat. În ℕ adunarea și înmulțirea dau mereu un număr natural (se spune că ℕ este <b>închisă</b> față de ele), dar scăderea nu: 3 − 5 nu este un număr natural.</p>
<p>De aceea se introduc <b>numerele întregi</b> ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}, care includ <b>opusele</b> numerelor naturale. În ℤ se pot face întotdeauna sume, diferențe și produse. Dar 7 : 2 nu este un număr întreg.</p>
<p>Pentru ca împărțirea să fie mereu posibilă (cu un număr diferit de zero) se construiesc <b>numerele raționale</b> ℚ, adică cele care se pot scrie ca <b>fracție</b> a/b cu a ∈ ℤ și b ∈ ℤ, b ≠ 0. De exemplu 3/4, −5/2, 7 = 7/1.</p>
<p>Au loc incluziunile <b>ℕ ⊂ ℤ ⊂ ℚ</b>. Fiecare extindere „rezolvă” o ecuație care înainte nu avea soluție: x + 5 = 3 are soluție în ℤ (x = −2), 2x = 7 în ℚ (x = 7/2). Dar extinderea nu s-a terminat: x² = 2 nu are soluții în ℚ și de aceea sunt necesare numerele reale (le vei studia în anii următori).</p>
<p>Reține notațiile: ℤ⁺ (pozitivi), ℤ⁻ (negativi), ℤ* (fără zero), ℚ⁺ etc. <b>Zero</b> este număr natural în multe manuale italiene; unii autori exclud zero din ℕ și scriu ℕ₀ pentru a-l include.</p>`
    },
    {
      type: "svg",
      title: "Mulțimile de numere, una în alta",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<ellipse cx="300" cy="150" rx="280" ry="135" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<ellipse cx="300" cy="165" rx="205" ry="100" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="180" rx="125" ry="62" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<text x="300" y="42" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">ℚ: fracții a/b (b ≠ 0)  ·  2/3, −5/4, 0,(3)</text>
<text x="300" y="96" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ℤ: …, −2, −1, 0, 1, 2, …</text>
<text x="300" y="187" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">ℕ: 0, 1, 2, 3, …</text>
<text x="300" y="270" font-size="16" text-anchor="middle" fill="#334155">În afara lui ℚ sunt numere ca √2 și π: le vei întâlni printre numerele reale.</text>
</svg>`,
      caption: "Fiecare mulțime o conține pe cea precedentă: orice număr natural este întreg, orice număr întreg este rațional (n = n/1)."
    },
    {
      type: "text",
      title: "Proprietățile operațiilor",
      html: `<p>Operațiile respectă reguli precise. Fie a, b, c numere oarecare:</p>
<table>
<tr><th>Proprietate</th><th>Adunare</th><th>Înmulțire</th></tr>
<tr><td><b>Comutativitate</b></td><td>a + b = b + a</td><td>a · b = b · a</td></tr>
<tr><td><b>Asociativitate</b></td><td>(a + b) + c = a + (b + c)</td><td>(a · b) · c = a · (b · c)</td></tr>
<tr><td><b>Element neutru</b></td><td>a + 0 = a</td><td>a · 1 = a</td></tr>
<tr><td><b>Element invers</b></td><td>opus: a + (−a) = 0 (în ℤ și ℚ)</td><td>invers: a · (1/a) = 1, dacă a ≠ 0 (în ℚ)</td></tr>
</table>
<p>Cele două operații sunt legate de <b>distributivitate</b>: <b>a · (b + c) = a·b + a·c</b>. Este regula care permite să „desfacem parantezele” și, invers, să „dăm factor comun”: 7·38 + 7·62 = 7·(38 + 62) = 700.</p>
<p>Scăderea și împărțirea <b>nu</b> sunt nici comutative, nici asociative: 8 − 3 ≠ 3 − 8 și (20 : 4) : 5 = 1 ≠ 20 : (4 : 5) = 25. Dar pot fi <b>reduse</b> la celelalte două: a − b = a + (−b) și a : b = a · (1/b). Astfel, în ℚ regula semnelor devine simplă: produsul a două numere are semnul + dacă factorii au același semn, − dacă au semne diferite.</p>
<p>Alte proprietăți utile: <b>proprietatea invariantivă</b> a scăderii (a − b = (a + k) − (b + k)) și a împărțirii (a : b = (a·k) : (b·k), k ≠ 0), <b>legea anulării produsului</b> (a·b = 0 ⇒ a = 0 sau b = 0) și faptul că <b>nu se poate împărți la zero</b>: 5 : 0 nu are sens (niciun număr înmulțit cu 0 nu dă 5), iar 0 : 0 este nedeterminat (orice număr înmulțit cu 0 dă 0).</p>
<p><b>Ordinea operațiilor</b>: mai întâi parantezele (rotunde, pătrate, acolade, dinspre interior spre exterior), apoi puterile, apoi înmulțirile și împărțirile (de la stânga la dreapta), la final adunările și scăderile. Exemplu: 2 + 3 · 4² − (10 − 4) : 2 = 2 + 3·16 − 6 : 2 = 2 + 48 − 3 = 47.</p>`
    },
    {
      type: "example",
      title: "Exemplu: calculul mental cu ajutorul proprietăților",
      html: `<p>Proprietățile nu sunt simple formalități: ne ajută să calculăm mai repede.</p>
<ul>
<li><b>25 · 37 · 4</b>: prin comutativitate și asociativitate, (25 · 4) · 37 = 100 · 37 = <b>3700</b>.</li>
<li><b>99 · 46</b>: 99 = 100 − 1, deci 99·46 = 100·46 − 46 = 4600 − 46 = <b>4554</b> (distributivitate).</li>
<li><b>1000 − 487</b>: prin proprietatea invariantivă (adaug 13 la ambele numere) = 1013 − 500 = <b>513</b>.</li>
<li><b>2,5 · 48</b> = (10/4) · 48 = 10 · 12 = <b>120</b>.</li>
</ul>
<p>Tânărul Gauss, potrivit tradiției, a calculat la școală 1 + 2 + … + 100 grupând numerele în 50 de perechi cu suma 101: 50 · 101 = 5050. O folosire strălucită a comutativității, asociativității și distributivității!</p>`
    },
    {
      type: "text",
      title: "Puterile",
      html: `<p><b>Puterea</b> a<sup>n</sup> (cu n natural) este produsul a n factori egali cu a: a<sup>n</sup> = a·a·…·a. a este <b>baza</b>, n este <b>exponentul</b>. Extinderi importante:</p>
<ul>
<li>a<sup>1</sup> = a;</li>
<li><b>a<sup>0</sup> = 1</b> pentru a ≠ 0 (0<sup>0</sup> este nedeterminat);</li>
<li><b>a<sup>−n</sup> = 1/a<sup>n</sup></b> = (1/a)<sup>n</sup> pentru a ≠ 0: 2<sup>−3</sup> = 1/8, (2/3)<sup>−2</sup> = 9/4.</li>
</ul>
<p>Proprietăți (a, b ≠ 0; m, n întregi):</p>
<table>
<tr><td>Produsul puterilor cu aceeași bază</td><td>a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup></td></tr>
<tr><td>Câtul puterilor cu aceeași bază</td><td>a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup></td></tr>
<tr><td>Puterea unei puteri</td><td>(a<sup>m</sup>)<sup>n</sup> = a<sup>m·n</sup></td></tr>
<tr><td>Produsul puterilor cu același exponent</td><td>a<sup>n</sup> · b<sup>n</sup> = (a·b)<sup>n</sup></td></tr>
<tr><td>Câtul puterilor cu același exponent</td><td>a<sup>n</sup> : b<sup>n</sup> = (a : b)<sup>n</sup></td></tr>
</table>
<p>De ce a<sup>0</sup> = 1? Pentru că trebuie să fie adevărat că a<sup>n</sup> : a<sup>n</sup> = a<sup>n−n</sup> = a<sup>0</sup>, dar pe de altă parte rezultatul este 1. De ce a<sup>−n</sup> = 1/a<sup>n</sup>? Pentru că a<sup>0</sup> = a<sup>n</sup> · a<sup>−n</sup> = 1. Definițiile sunt alese astfel încât proprietățile să rămână mereu valabile: așa se extinde o noțiune în matematică.</p>
<p><b>Atenție la semne</b>: (−2)<sup>2</sup> = 4, dar −2<sup>2</sup> = −4 (puterea are prioritate față de semnul minus). O putere cu baza negativă este pozitivă dacă exponentul este par și negativă dacă este impar. În plus, (a + b)<sup>2</sup> <b>nu</b> este a<sup>2</sup> + b<sup>2</sup>: vei vedea în curând, la formulele de calcul prescurtat.</p>
<p>Puterile lui 10 dau <b>notația științifică</b>: 300 000 000 = 3 · 10<sup>8</sup>; 0,00000052 = 5,2 · 10<sup>−7</sup>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: proprietăți și puteri",
      questions: [
        { type: "num", q: "Calculează: 2 + 3 · 4² − (10 − 4) : 2", answer: 47, explain: "Puterile: 4² = 16; apoi 3 · 16 = 48; (10 − 4) : 2 = 3. Deci 2 + 48 − 3 = 47." },
        { type: "num", q: "Calculează: 2⁵ · 2⁻² : 2²", answer: 2, explain: "Bazele sunt egale: exponentul este 5 − 2 − 2 = 1, deci 2¹ = 2." },
        { type: "mc", q: "Cât este −3²?", options: ["9", "−9", "6"], answer: 1, explain: "Puterea se calculează înaintea semnului minus: −(3²) = −9. În schimb (−3)² = 9." },
        { type: "tf", q: "Împărțirea este o operație comutativă.", answer: false, explain: "De exemplu 8 : 2 = 4, dar 2 : 8 = 1/4." }
      ]
    },
    {
      type: "text",
      title: "Fracțiile și numerele raționale",
      html: `<p>O <b>fracție</b> a/b indică a părți dintr-un întreg împărțit în b părți egale (b = <b>numitor</b>, a = <b>numărător</b>). Două fracții sunt <b>echivalente</b> dacă reprezintă același număr: a/b = c/d ⇔ a·d = b·c. Înmulțind sau împărțind numărătorul și numitorul cu același număr ≠ 0 se obține o fracție echivalentă (<b>proprietatea invariantivă</b>): 2/3 = 4/6 = 10/15. Un număr rațional este clasa tuturor fracțiilor echivalente. O fracție se <b>simplifică până la forma ireductibilă</b> împărțind la cel mai mare divizor comun (c.m.m.d.c.): 18/24 = 3/4.</p>
<p><b>Operații în ℚ</b>:</p>
<ul>
<li><b>Suma/diferența</b>: se aduc la numitor comun (c.m.m.m.c.): 1/6 + 3/4 = 2/12 + 9/12 = 11/12.</li>
<li><b>Produsul</b>: numărător cu numărător, numitor cu numitor (simplifică mai întâi!): (4/9) · (3/8) = 12/72 = 1/6.</li>
<li><b>Câtul</b>: se înmulțește cu <b>inversul</b> împărțitorului: (3/5) : (9/10) = 3/5 · 10/9 = 30/45 = 2/3.</li>
<li><b>Compararea</b>: se aduc la numitor comun și se compară numărătorii: 5/8 &gt; 3/5, deoarece 25/40 &gt; 24/40. Sau se compară produsele „în cruce”: 5·5 = 25 &gt; 3·8 = 24.</li>
</ul>
<p>Numerele raționale sunt <b>dense</b>: între două numere raționale există mereu un altul (de exemplu media lor). Așadar, între 0 și 1 există o infinitate de numere raționale, fără „număr următor”: spre deosebire de numerele naturale, nu se poate spune care este succesorul lui 1/2. Cu toate acestea, pe axa numerelor rămân „goluri”: √2 nu este rațional, așa cum au descoperit deja pitagoreicii (sec. V î.Hr.), printr-un raționament prin reducere la absurd.</p>`
    },
    {
      type: "example",
      title: "Exemplu: rețetele și fracțiile",
      html: `<p>O rețetă pentru 4 persoane cere 3/4 de litru de lapte, dar tu gătești pentru 6. Și ai la dispoziție doar 1 litru. Ajunge?</p>
<ol>
<li>Factorul de scară: 6/4 = 3/2.</li>
<li>Laptele necesar: (3/4) · (3/2) = 9/8 de litru = 1 + 1/8 de litru = 1,125 L.</li>
<li>Comparație cu 1 L = 8/8: 9/8 &gt; 8/8 → <b>nu ajunge</b>, lipsesc 1/8 de litru (125 mL).</li>
</ol>
<p>Un alt exemplu, cu număr negativ: banca îți debitează 2/5 dintr-o datorie de 150 €: (−150) · (2/5) = −60 €. Produsul dintre un număr negativ și unul pozitiv este negativ.</p>`
    },
    {
      type: "text",
      title: "Numere zecimale: finite și periodice",
      html: `<p>Orice fracție poate fi transformată în <b>număr zecimal</b> efectuând împărțirea. Se poate întâmpla ca:</p>
<ul>
<li>împărțirea să se <b>termine</b>: <b>zecimal finit</b>. 3/4 = 0,75; 7/20 = 0,35;</li>
<li>împărțirea să <b>nu se termine</b>, dar cifrele să se repete: <b>zecimal periodic</b>. 1/3 = 0,3333… = 0,<span style="text-decoration:overline">3</span> (se scrie 0,(3)); 5/6 = 0,8333… = 0,8(3); 1/7 = 0,(142857).</li>
</ul>
<p>De ce se repetă mereu? Împărțind la b există doar b resturi posibile (de la 0 la b − 1): după cel mult b pași un rest se repetă și de acolo tot ce urmează se repetă. Grupul de cifre care se repetă este <b>perioada</b>; cifrele dintre virgulă și perioadă formează <b>partea neperiodică</b>.</p>
<p><b>Criteriu</b>: o fracție ireductibilă dă un zecimal <b>finit</b> dacă numitorul are ca factori primi numai 2 și/sau 5 (adică factorii lui 10); altfel este <b>periodică</b>. De exemplu 7/20 (20 = 2²·5) este finită; 7/12 (12 = 2²·3) este periodică mixtă.</p>
<p><b>Fracția generatoare</b> (de la zecimal la fracție):</p>
<ul>
<li><b>Periodic simplu</b>: numărător = numărul fără virgulă, <i>minus</i> partea întreagă; numitor = atâția de 9 câte cifre are perioada. 2,(45) = (245 − 2)/99 = 243/99 = 27/11.</li>
<li><b>Periodic mixt</b>: numărător = numărul fără virgulă până la sfârșitul perioadei, <i>minus</i> numărul fără virgulă format până la partea neperiodică; numitor = atâția de 9 câte cifre are perioada, urmați de atâția de 0 câte cifre are partea neperiodică. 0,1(6) = (16 − 1)/90 = 15/90 = 1/6; 3,2(7) = (327 − 32)/90 = 295/90 = 59/18.</li>
</ul>
<p>O curiozitate: <b>0,(9) = 1</b>. Într-adevăr, 0,(9) = 9/9 = 1. Un alt mod: 1/3 = 0,(3), deci 3 · (1/3) = 3 · 0,(3) = 0,(9) și în același timp = 1. Nu există niciun număr între 0,(9) și 1: sunt același număr scris în două feluri.</p>`
    },
    {
      type: "example",
      title: "Exemplu: de la fracție la zecimal și înapoi",
      html: `<p><b>De la fracție la zecimal</b>: 5/7 = 0,714285 714285… = 0,(714285), perioadă de 6 cifre. Pentru 7, resturile posibile sunt 1, …, 6: perioada lui 1/7 folosește toate resturile și de aceea este atât de lungă.</p>
<p><b>De la zecimal la fracție</b>: transformă 0,(36).</p>
<ol>
<li>Este periodic simplu cu partea întreagă 0 și perioada 36 (două cifre): 36/99.</li>
<li>Simplific cu 9: 36/99 = 4/11.</li>
<li>Verificare: 4 : 11 = 0,363636… ✔</li>
</ol>
<p>Cu această metodă orice zecimal periodic (și orice zecimal finit) se recunoaște ca număr rațional. Invers, un număr cu infinit de zecimale <b>neperiodice</b>, ca 0,1011011101111…, nu poate fi rațional: este un număr irațional.</p>`
    },
    {
      type: "widget",
      title: "Cărei mulțimi îi aparține?",
      widget: "classify",
      options: { groups: ["Natural", "Întreg, dar nu natural", "Rațional, dar nu întreg", "Nici rațional, nici întreg"], items: [
        ["7", 0], ["0", 0], ["√16", 0],
        ["−4", 1], ["−12", 1], ["−20 : 5", 1],
        ["3/4", 2], ["−2/5", 2], ["0,(3)", 2], ["2,5", 2],
        ["√2", 3], ["π", 3]
      ] },
      caption: "√16 = 4 este natural; −20 : 5 = −4 este întreg; 0,(3) = 1/3 este rațional; √2 și π nu sunt raționale."
    },
    {
      type: "curiosity",
      title: "Numărul care i-a scandalizat pe pitagoreici",
      html: `<p>Pitagoreicii credeau că „totul este număr”, adică raport de numere întregi. Dar aplicând propria lor teoremă la pătratul cu latura 1, diagonala măsoară √2 și <b>nu există două numere întregi a și b cu (a/b)² = 2</b>. Demonstrația este prin reducere la absurd: dacă a/b ar fi ireductibilă, a² = 2b² ar face ca a să fie par, deci a = 2k și 4k² = 2b² → b² = 2k² → și b ar fi par, contrar ipotezei că a/b este ireductibilă. Potrivit unei legende (de care istoricii se îndoiesc), pitagoreicul Hippasos din Metapont, care a dezvăluit existența mărimilor incomensurabile, ar fi fost aruncat în mare. Descoperirea „numerelor iraționale” a schimbat pentru totdeauna matematica greacă.</p>`
    },
    {
      type: "curiosity",
      title: "Zero și numerele negative au avut o istorie dificilă",
      html: `<p>Zero ca număr propriu-zis a fost dezvoltat în India: în <i>Brahmasphutasiddhanta</i> (628 d.Hr.) Brahmagupta dă regulile de calcul cu el și, de asemenea, regulile pentru numerele negative, interpretate ca „datorii” (cele pozitive erau „bunuri”). În Europa numerele negative au fost acceptate cu mare întârziere: încă în secolul al XVI-lea mulți matematicieni le numeau „numere absurde” sau „fictive”. Leonardo Pisano (Fibonacci) a adus în Europa, în <i>Liber abaci</i> (1202), cifrele indo-arabe și zero, dar au fost necesare secole pentru ca acestea să se răspândească. Semnele + și − au apărut tipărite la sfârșitul secolului al XV-lea.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege numerele și fracțiile",
      intro: "Dacă regula semnelor sau fracțiile ți se par formule de memorat, încearcă aceste imagini.",
      tabs: [
        {
          label: "🍕 Pizza",
          html: `<p>O fracție n/d este o pizza tăiată în d felii egale, din care se iau n. Trage cursoarele ca să vezi că 2/3 și 4/6 acoperă <b>aceeași cantitate</b> de pizza: fracțiile echivalente sunt doar moduri diferite de a tăia aceeași pizza. A aduna 1/2 și 1/3 înseamnă a găsi o tăietură (în șesimi) care se potrivește amândurora: 3/6 + 2/6 = 5/6.</p>`,
          widget: "fractionPie",
          options: { n: 2, d: 3 }
        },
        {
          label: "🌡️ Axa și temperatura",
          html: `<p>Numerele întregi relative sunt numerele de pe termometre: dacă sunt −3 °C și temperatura crește cu 5 °C, ajung la +2 °C. Pe axă, a aduna un număr pozitiv este un salt spre dreapta, unul negativ este un salt spre stânga. A înmulți cu −1 înseamnă a „oglindi” față de zero. Încearcă: pornești de la −3 și faci un salt de 5.</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 5, start: -3 }
        },
        {
          label: "💰 Bunuri și datorii",
          html: `<p>Așa gândeau indienii din secolul al VII-lea: pozitiv = câștig, negativ = datorie.</p>
<ul>
<li>(+5) + (−3): am 5 € și datorez 3 €: îmi rămân 2 €.</li>
<li>(−5) − (−3): am o datorie de 5 € și mi se <b>scade</b> o datorie de 3 €: datoria scade la 2 €, adică −2.</li>
<li>(−4) · (+3): trei datorii de câte 4 € = −12 €.</li>
<li>(−4) · (−3): <b>scad</b> trei datorii de câte 4 € = +12 €. Iată de ce „minus ori minus dă plus”.</li>
</ul>`
        },
        {
          label: "📏 0,(9) = 1 cu un truc",
          html: `<p>Fie x = 0,999… Înmulțesc cu 10: 10x = 9,999… Scad: 10x − x = 9,999… − 0,999… = 9, deci 9x = 9 și <b>x = 1</b>. Același truc funcționează pentru orice număr periodic: pentru x = 0,(36) înmulțesc cu 100: 100x = 36,(36), scad x: 99x = 36, deci x = 36/99. Este demonstrația regulii fracției generatoare.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta numerelor",
      nodes: [
        { id: "naturali", label: "Naturale ℕ", x: 15, y: 8, color: "#2563eb", html: "0, 1, 2, 3, …: servesc la numărat.", why: "Sunt primele numere din istorie: crestături pe oase datează de acum peste 20 000 de ani. Peano (1889) le-a axiomatizat: 0 este un număr, orice număr are un succesor, este valabil principiul inducției." },
        { id: "interi", label: "Întregi ℤ", x: 50, y: 22, color: "#16a34a", html: "Numerele naturale împreună cu opusele lor: …, −2, −1, 0, 1, …", why: "Servesc pentru ca scăderea să fie mereu posibilă. Introduse cu ideea de datorie de către Brahmagupta (628 d.Hr.) și acceptate în Europa abia în secolele al XVI-lea–al XVII-lea." },
        { id: "razionali", label: "Raționale ℚ", x: 80, y: 40, color: "#f59e0b", html: "Fracții a/b cu b ≠ 0.", why: "Fac ca împărțirea să fie mereu posibilă (pentru numere nenule). Apar din măsurare: dacă o lungime nu este multiplu al unității, o exprimăm ca fracție. Încă egiptenii foloseau fracții cu numărător unu." },
        { id: "proprieta", label: "Proprietățile operațiilor", x: 20, y: 38, color: "#9333ea", html: "Comutativitate, asociativitate, distributivitate, elemente neutre și inverse.", why: "Sunt „axiomele” algebrei: ℚ este un corp. Toate tehnicile de calcul literal (în curând) provin din aceste reguli." },
        { id: "potenze", label: "Puteri", x: 12, y: 66, color: "#ef4444", html: "Produs repetat: aⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.", why: "Definițiile lui a⁰ și a⁻ⁿ sunt alese pentru a păstra valabile proprietățile: matematica extinde noțiunile păstrând regulile." },
        { id: "frazioni", label: "Fracții și operații", x: 50, y: 62, color: "#0ea5e9", html: "Echivalență, numitor comun, invers.", why: "Regula inversului provine din faptul că a împărți la b înseamnă a găsi numărul care, înmulțit cu b, dă deîmpărțitul: x·b = a → x = a/b." },
        { id: "decimali", label: "Zecimale finite și periodice", x: 85, y: 78, color: "#22c55e", html: "Reprezentări în baza 10 ale numerelor raționale.", why: "Împărțirea are doar un număr finit de resturi posibile, deci se oprește sau se repetă: orice număr rațional are scriere zecimală finită sau periodică și invers." },
        { id: "irrazionali", label: "Dincolo de ℚ: iraționale", x: 55, y: 92, color: "#64748b", html: "√2, π: zecimale infinite neperiodice.", why: "Descoperirea lui √2 (pitagoreicii, sec. V î.Hr.) a arătat că fracțiile nu sunt suficiente pentru a măsura toate lungimile: sunt necesare numerele reale." }
      ],
      edges: [["naturali", "interi", "extindere"], ["interi", "razionali", "extindere"], ["naturali", "proprieta", "operații"], ["proprieta", "potenze", "se extind"], ["razionali", "frazioni", "scrise ca"], ["frazioni", "decimali", "împărțire"], ["razionali", "decimali", "au"], ["decimali", "irrazionali", "limita"]]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>ℕ ⊂ ℤ ⊂ ℚ: fiecare mulțime rezolvă o nouă ecuație (scădere, împărțire).</li>
<li>Proprietăți: comutativitate, asociativitate, distributivitate; scăderea și împărțirea <b>nu</b> sunt nici comutative, nici asociative; niciodată împărțire la 0.</li>
<li>a⁰ = 1; a⁻ⁿ = 1/aⁿ; aᵐ·aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ. Atenție: −2² = −4, dar (−2)² = 4.</li>
<li>Fracții: a împărți la o fracție = a înmulți cu inversul ei.</li>
<li>Zecimal finit dacă numitorul (fracției ireductibile) are doar factorii 2 și 5; altfel periodic. Fracția generatoare: 0,(a) = a/9 și așa mai departe.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: fracții și zecimale",
      questions: [
        { type: "num", q: "Calculează: 1/6 + 3/4 (dă rezultatul în douăsprezecimi, adică numărătorul fracției cu numitor 12).", answer: 11, explain: "1/6 = 2/12 și 3/4 = 9/12; suma este 11/12: numărătorul este 11." },
        { type: "mc", q: "Care este fracția generatoare a lui 0,(6)?", options: ["6/10", "2/3", "6/100"], answer: 1, explain: "0,(6) = 6/9 = 2/3." },
        { type: "mc", q: "Care fracție are o scriere zecimală periodică?", options: ["3/8", "7/20", "5/12"], answer: 2, explain: "12 = 2²·3 conține factorul 3, deci 5/12 = 0,41(6). 8 = 2³ și 20 = 2²·5 dau zecimale finite (0,375 și 0,35)." },
        { type: "tf", q: "0,(9) este un număr mai mic decât 1.", answer: false, explain: "0,(9) = 9/9 = 1: este același număr." }
      ]
    }
  ],
  glossary: [
    { t: "Numere naturale (ℕ)", d: "Numerele 0, 1, 2, 3, … folosite pentru numărat." },
    { t: "Numere întregi (ℤ)", d: "Numerele naturale și opusele lor negative." },
    { t: "Numere raționale (ℚ)", d: "Numere care se pot exprima ca fracție a/b de numere întregi cu b ≠ 0." },
    { t: "Închidere", d: "O mulțime este închisă față de o operație dacă rezultatul aparține tot mulțimii." },
    { t: "Opus", d: "Numărul −a care, adunat cu a, dă 0." },
    { t: "Invers", d: "Numărul 1/a care, înmulțit cu a (≠ 0), dă 1." },
    { t: "Distributivitate", d: "a·(b + c) = a·b + a·c." },
    { t: "Putere", d: "aⁿ: produsul a n factori egali cu a; pentru exponenți negativi, a⁻ⁿ = 1/aⁿ." },
    { t: "Fracții echivalente", d: "Fracții care reprezintă același număr rațional." },
    { t: "Perioadă", d: "Grup de cifre care se repetă de o infinitate de ori după virgulă." },
    { t: "Fracție generatoare", d: "Fracția care dă un anumit număr zecimal periodic." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care ecuație nu are soluție în ℕ, dar are în ℤ?", options: ["x + 4 = 9", "x + 7 = 3", "2x = 7"], answer: 1, explain: "x + 7 = 3 dă x = −4: întreg, dar nu natural. 2x = 7 nu are soluție în ℤ, ci doar în ℚ." },
      { type: "num", q: "Calculează: 5 − 2 · (3 − 7) + 6 : 3", answer: 15, explain: "3 − 7 = −4; 2 · (−4) = −8; 5 + 8 = 13; 6 : 3 = 2; 13 + 2 = 15." },
      { type: "num", q: "Calculează: (2³ · 2⁻⁵) : 2⁻² (rezultatul ca număr).", answer: 1, explain: "Exponenți: 3 − 5 − (−2) = 0, deci 2⁰ = 1." },
      { type: "num", q: "Calculează: (3/5) : (9/10) și scrie rezultatul ca zecimal (rotunjește la două zecimale).", answer: 0.67, tol: 0.01, explain: "(3/5) · (10/9) = 30/45 = 2/3 ≈ 0,67." },
      { type: "mc", q: "Care este forma ireductibilă a fracției 18/24?", options: ["3/4", "9/12", "6/8"], answer: 0, explain: "c.m.m.d.c.(18, 24) = 6: 18/24 = 3/4. Celelalte două nu sunt ireductibile." },
      { type: "mc", q: "Care este fracția generatoare a lui 0,1(6)?", options: ["16/100", "1/6", "16/99"], answer: 1, explain: "(16 − 1)/90 = 15/90 = 1/6." },
      { type: "num", q: "Care este fracția generatoare a lui 2,(3)? Dă numărătorul fracției ireductibile.", answer: 7, explain: "2,(3) = (23 − 2)/9 = 21/9 = 7/3." },
      { type: "tf", q: "Fracția 7/40 are o scriere zecimală finită.", answer: true, explain: "40 = 2³·5: doar factorii 2 și 5. 7/40 = 0,175." },
      { type: "tf", q: "Între două numere raționale diferite există întotdeauna un alt număr rațional.", answer: true, explain: "Aceasta este densitatea lui ℚ: media (a + b)/2 se află între cele două." },
      { type: "order", q: "Ordonează de la cel mai mic la cel mai mare.", items: ["−3/2", "−1", "0,(3)", "2/3", "1,5"], explain: "−1,5 < −1 < 0,333… < 0,666… < 1,5." },
      { type: "text", q: "Cum se numește numărul cu care trebuie înmulțit un număr (≠ 0) pentru a obține 1?", answer: ["invers", "inversul", "inversul multiplicativ", "numărul invers", "reciproc", "reciprocul"], explain: "Este inversul: inversul multiplicativ al lui a este 1/a." }
    ]
  }
});

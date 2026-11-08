TOPIC('ro', {
  id: `m2-mat-frazioni-decimali`,
  title: `Fracții și numere zecimale`,
  intro: `Fiecare fracție este o <b>împărțire</b> care așteaptă să fie făcută. Dacă o efectuezi, obții un <b>număr zecimal</b>: uneori se termină (3/4 = 0,75), alteori continuă la infinit repetând aceleași cifre (1/3 = 0,333…). Descoperim <b>când</b> se întâmplă asta, <b>de ce</b> și cum ne întoarcem de la numărul zecimal la fracție cu <b>fracția generatoare</b>.`,
  minutes: 50,
  sections: [
    {
      type: `text`,
      title: `De la fracție la număr zecimal`,
      html: `<p>Linia de fracție înseamnă <b>„împărțit la”</b>: <b>a/b = a : b</b>.</p>
<p>Pentru a transforma o fracție în număr zecimal este suficient să efectuezi împărțirea numărătorului la numitor:</p>
<ul>
<li>3/4 = 3 : 4 = <b>0,75</b> → împărțirea se <b>termină</b> (rest 0): număr <b>zecimal finit</b>;</li>
<li>1/3 = 1 : 3 = 0,3333… → restul nu devine niciodată 0 și cifrele se repetă: număr <b>zecimal infinit periodic</b>.</li>
</ul>
<p>Cifrele care se repetă formează <b>perioada</b>, care se scrie cu o liniuță deasupra sau între paranteze: 0,333… = <b>0,(3)</b> = 0,3̅.</p>`
    },
    {
      type: `text`,
      title: `Trei tipuri de numere zecimale`,
      html: `<table>
<tr><th>Tip</th><th>Exemplu</th><th>Cum arată</th></tr>
<tr><td><b>Zecimal finit</b></td><td>7/8 = 0,875</td><td>un număr finit de cifre după virgulă</td></tr>
<tr><td><b>Periodic simplu</b></td><td>2/3 = 0,(6)<br>5/11 = 0,(45)</td><td>perioada începe <b>imediat</b> după virgulă</td></tr>
<tr><td><b>Periodic mixt</b></td><td>1/6 = 0,1(6)<br>7/12 = 0,58(3)</td><td>între virgulă și perioadă există cifre care nu se repetă: <b>partea neperiodică</b></td></tr>
</table>
<p>Într-un număr ca <b>2,1(36)</b>: <b>2</b> este partea întreagă, <b>1</b> este partea neperiodică, <b>36</b> este perioada.</p>`
    },
    {
      type: `remember`,
      title: `Regula numitorului`,
      html: `<p>Înainte de a face împărțirea poți deja să <b>prevezi</b> tipul de număr zecimal! Simplifică fracția până devine ireductibilă și descompune numitorul în factori primi:</p>
<ul>
<li>doar factori <b>2</b> și/sau <b>5</b> → <b>zecimal finit</b> (de ex. 3/20, pentru că 20 = 2² × 5);</li>
<li><b>niciun</b> factor 2 sau 5 → <b>periodic simplu</b> (de ex. 4/7, 5/9, 2/33);</li>
<li>factori 2 și/sau 5 <b>împreună</b> cu alții → <b>periodic mixt</b> (de ex. 5/6, pentru că 6 = 2 × 3).</li>
</ul>`
    },
    {
      type: `svg`,
      title: `De ce 2 și 5?`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<rect x="30" y="30" width="250" height="110" rx="14" fill="#16a34a"/>
<text x="155" y="65" font-size="20" fill="#fff" text-anchor="middle" font-weight="bold">10 = 2 × 5</text>
<text x="155" y="95" font-size="16" fill="#dcfce7" text-anchor="middle">puterile lui 10 conțin</text>
<text x="155" y="118" font-size="16" fill="#dcfce7" text-anchor="middle">doar factorii 2 și 5</text>
<rect x="320" y="30" width="250" height="110" rx="14" fill="#2563eb"/>
<text x="445" y="62" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">3/20 = 15/100</text>
<text x="445" y="92" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">= 0,15 ✓</text>
<text x="445" y="120" font-size="14" fill="#dbeafe" text-anchor="middle">20 = 2²×5 → ajunge ×5</text>
<rect x="30" y="165" width="540" height="110" rx="14" fill="#dc2626"/>
<text x="300" y="200" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">1/3 = ?/10 = ?/100 = ?/1000…</text>
<text x="300" y="232" font-size="16" fill="#fee2e2" text-anchor="middle">nicio putere a lui 10 nu se împarte exact la 3:</text>
<text x="300" y="258" font-size="16" fill="#fee2e2" text-anchor="middle">împărțirea nu se termină niciodată → 0,333…</text>
</svg>`,
      caption: `O fracție este un număr zecimal finit doar dacă poate fi transformată într-o fracție zecimală (cu numitorul 10, 100, 1000…).`
    },
    {
      type: `example`,
      title: `Exemplu practic: împărțirea care se repetă`,
      html: `<p>Calculăm <b>1/7</b> cu împărțirea în coloană și observăm <b>resturile</b>:</p>
<p>10 : 7 = 1 rest <b>3</b> → 30 : 7 = 4 rest <b>2</b> → 20 : 7 = 2 rest <b>6</b> → 60 : 7 = 8 rest <b>4</b> → 40 : 7 = 5 rest <b>5</b> → 50 : 7 = 7 rest <b>1</b> → se reia de la 10!</p>
<p>Rezultat: <b>1/7 = 0,(142857)</b>, perioadă de 6 cifre.</p>
<p><b>De ce se repetă?</b> La împărțirea cu 7, resturile posibile sunt doar 1, 2, 3, 4, 5, 6: cel mult după 6 pași un rest trebuie să reapară, iar de acolo cifrele se repetă la fel. În general, la împărțirea cu <i>n</i>, perioada are <b>cel mult n − 1</b> cifre.</p>`
    },
    {
      type: `widget`,
      title: `Fracție și număr zecimal`,
      widget: `fractionPie`,
      options: { n: 3, d: 8 },
      caption: `Mișcă cursoarele: pentru fiecare fracție încearcă să calculezi numărul zecimal. 3/8 = 0,375. Care numitori dau numere zecimale finite?`
    },
    {
      type: `quiz`,
      title: `Mini-test: ce număr zecimal este?`,
      questions: [
        { type: `mc`, q: `7/25 este un număr…`, options: [`zecimal finit`, `periodic simplu`, `periodic mixt`], answer: 0, explain: `25 = 5²: doar factori 5, deci zecimal finit (7/25 = 0,28).` },
        { type: `mc`, q: `5/6 este un număr…`, options: [`zecimal finit`, `periodic simplu`, `periodic mixt`], answer: 2, explain: `6 = 2 × 3: există 2 împreună cu 3 → periodic mixt (0,8(3)).` },
        { type: `num`, q: `Cât face 3/8 ca număr zecimal?`, answer: 0.375, tol: 0.0001, explain: `3 : 8 = 0,375.` }
      ]
    },
    {
      type: `text`,
      title: `De la numărul zecimal la fracție: fracția generatoare`,
      html: `<p><b>Fracția generatoare</b> este fracția care, împărțită, „generează” acel număr zecimal.</p>
<p><b>1. Zecimal finit</b>: la numărător numărul fără virgulă, la numitor 1 urmat de atâtea zerouri câte zecimale are. Apoi simplifică.<br>
0,75 = 75/100 = <b>3/4</b> &nbsp;&nbsp; 2,4 = 24/10 = <b>12/5</b></p>
<p><b>2. Periodic simplu</b>: la numărător numărul fără virgulă <b>minus</b> partea întreagă; la numitor atâtea <b>9</b> câte cifre are perioada.<br>
0,(3) = 3/9 = <b>1/3</b> &nbsp;&nbsp; 1,(27) = (127 − 1)/99 = 126/99 = <b>14/11</b></p>
<p><b>3. Periodic mixt</b>: la numărător numărul fără virgulă <b>minus</b> numărul format din partea întreagă și partea neperiodică; la numitor atâtea <b>9</b> câte cifre are perioada, urmate de atâtea <b>0</b> câte cifre are partea neperiodică.<br>
0,1(6) = (16 − 1)/90 = 15/90 = <b>1/6</b> &nbsp;&nbsp; 2,3(5) = (235 − 23)/90 = 212/90 = <b>106/45</b></p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: de ce tocmai 9?`,
      html: `<p>Să luăm <b>x = 0,(45)</b> = 0,454545…</p>
<ol>
<li>Perioada are 2 cifre: înmulțesc cu 100 → <b>100x = 45,4545…</b></li>
<li>Scad x: 100x − x = 45,4545… − 0,4545… → <b>99x = 45</b> (partea infinită se anulează!)</li>
<li>Deci x = 45/99 = <b>5/11</b>.</li>
</ol>
<p>Iată de unde vin cei <b>9</b>: 100 − 1 = 99. Cu o perioadă de 3 cifre se înmulțește cu 1000 și se obține 999.</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: bonul de casă și banii`,
      html: `<p>Trei prieteni trebuie să împartă o notă de plată de <b>10 €</b>. Fiecare ar trebui să plătească 10/3 € = <b>3,(3) €</b> = 3,333… €.</p>
<p>Dar bănuții nu se pot împărți la infinit! Se <b>rotunjește</b>: doi prieteni plătesc 3,33 €, iar unul 3,34 € (3,33 + 3,33 + 3,34 = 10,00 €).</p>
<p>Cu <b>4 prieteni</b>, în schimb: 10/4 = 2,5 € exact, pentru că 4 = 2² are doar factorul 2!</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? 0,999… = 1`,
      html: `<p>Numărul <b>0,(9)</b> = 0,9999… este exact egal cu <b>1</b>! Cu regula fracției generatoare: 0,(9) = 9/9 = 1. Sau: 1/3 = 0,(3); înmulțește cu 3: 3/3 = 0,(9), dar 3/3 = 1. De aceea perioada 9 nu se folosește: se scrie direct numărul rotunjit (2,4(9) = 2,5).</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Cine a inventat virgula`,
      html: `<p>Numerele zecimale au fost răspândite în Europa de matematicianul flamand <b>Simon Stevin</b> în cărticica <i>De Thiende</i> („A zecea”, <b>1585</b>), dar el le scria cu cerculețe numerotate deasupra cifrelor. Separatorul cu punct a fost popularizat de <b>John Napier</b> în 1617. Și astăzi țările anglo-saxone folosesc <b>punctul</b> (3.14), iar România, Italia și o mare parte a Europei folosesc <b>virgula</b> (3,14).</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege numerele zecimale periodice`,
      intro: `Dacă regula cu 9 și 0 ți se pare magie, iată alte căi.`,
      tabs: [
        {
          label: `🧊 O sută de cubulețe`,
          html: `<p>Iată un pătrat de <b>10 × 10 = 100</b> de cubulețe: tot blocul valorează <b>1</b>. Un rând de 10 cubulețe valorează <b>0,1</b> (o zecime); un cubuleț valorează <b>0,01</b> (o sutime).</p>
<p>Încearcă: 3/4 din bloc = 75 de cubulețe = <b>0,75</b>. Dar 1/3 din bloc? 100 de cubulețe nu se împart în 3 părți egale: 33 de cubulețe fiecăruia și mai rămâne 1, pe care ar trebui să-l tai în bucățele din ce în ce mai mici… la infinit: 0,333…</p>`,
          scene: `blocks`,
          options: { mode: `array`, a: 10, b: 10 }
        },
        {
          label: `📏 Axa care mărește`,
          html: `<p>Imaginează-ți că cauți 1/3 pe axă cu o <b>lupă</b>:</p>
<ul>
<li>între 0 și 1, împărțită în zecimi, 1/3 se află între 0,3 și 0,4;</li>
<li>măreşti între 0,3 și 0,4 împărțite în sutimi: se află între 0,33 și 0,34;</li>
<li>măreşti din nou: între 0,333 și 0,334…</li>
</ul>
<p>De fiecare dată 1/3 cade <b>în aceeași poziție</b> (cam la o treime din interval): de aceea iese mereu cifra <b>3</b>. Nu vei ajunge niciodată exact pe o liniuță!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<line x1="40" y1="60" x2="560" y2="60" stroke="#1e1b4b" stroke-width="4"/>
<line x1="40" y1="48" x2="40" y2="72" stroke="#1e1b4b" stroke-width="3"/><line x1="560" y1="48" x2="560" y2="72" stroke="#1e1b4b" stroke-width="3"/>
<line x1="196" y1="50" x2="196" y2="70" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="50" x2="248" y2="70" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="60" r="7" fill="#dc2626"/>
<text x="40" y="35" font-size="16" text-anchor="middle">0</text><text x="560" y="35" font-size="16" text-anchor="middle">1</text>
<text x="196" y="95" font-size="15" text-anchor="middle">0,3</text><text x="248" y="95" font-size="15" text-anchor="middle">0,4</text>
<line x1="196" y1="70" x2="40" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="248" y1="70" x2="560" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="40" y1="150" x2="560" y2="150" stroke="#1e1b4b" stroke-width="4"/>
<line x1="196" y1="140" x2="196" y2="160" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="140" x2="248" y2="160" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="150" r="7" fill="#dc2626"/>
<text x="40" y="185" font-size="15" text-anchor="middle">0,3</text><text x="560" y="185" font-size="15" text-anchor="middle">0,4</text>
<text x="196" y="185" font-size="15" text-anchor="middle">0,33</text><text x="252" y="185" font-size="15" text-anchor="middle">0,34</text>
<line x1="196" y1="160" x2="40" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="248" y1="160" x2="560" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#1e1b4b" stroke-width="4"/>
<line x1="196" y1="230" x2="196" y2="250" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="230" x2="248" y2="250" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="240" r="7" fill="#dc2626"/>
<text x="40" y="275" font-size="15" text-anchor="middle">0,33</text><text x="560" y="275" font-size="15" text-anchor="middle">0,34</text>
<text x="196" y="275" font-size="15" text-anchor="middle">0,333</text><text x="256" y="275" font-size="15" text-anchor="middle">0,334</text>
<text x="420" y="110" font-size="16" fill="#dc2626" font-weight="bold">● = 1/3</text>
</svg>`
        },
        {
          label: `🇬🇧 Metoda englezească cu algebra`,
          html: `<p>În țările anglo-saxone (și în multe școli din lume) nu se învață „regula cu 9 și 0”, ci trucul algebric „<b>înmulțește și scade</b>”:</p>
<p>x = 0,1666… → 10x = 1,666… și 100x = 16,666…<br>100x − 10x = 16,666… − 1,666… → <b>90x = 15</b> → x = 15/90 = 1/6.</p>
<p>Se mută virgula astfel încât cozile infinite să fie <b>egale</b>, iar prin scădere dispar. Regula pe care o învățăm noi este doar această idee deja „împachetată”!</p>`
        },
        {
          label: `🎡 Roata resturilor`,
          html: `<p>Gândește-te la împărțirea cu 7 ca la o <b>roată panoramică</b> cu 6 cabine (resturile posibile 1–6). Fiecare pas al împărțirii te mută într-o cabină: 1 → 3 → 2 → 6 → 4 → 5 → din nou 1. Când te întorci la cabina de plecare, turul reîncepe și cifrele se repetă. Dacă, în schimb, ajungi la cabina „0”, ai coborât: împărțirea s-a terminat (zecimal finit).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="300" cy="150" r="110" fill="none" stroke="#9a3412" stroke-width="5"/>
<circle cx="300" cy="40" r="28" fill="#f97316"/><text x="300" y="47" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="395" cy="95" r="28" fill="#fb923c"/><text x="395" y="102" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
<circle cx="395" cy="205" r="28" fill="#f97316"/><text x="395" y="212" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
<circle cx="300" cy="260" r="28" fill="#fb923c"/><text x="300" y="267" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">6</text>
<circle cx="205" cy="205" r="28" fill="#f97316"/><text x="205" y="212" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
<circle cx="205" cy="95" r="28" fill="#fb923c"/><text x="205" y="102" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">resturile lui 1 : 7</text>
<text x="300" y="170" font-size="16" text-anchor="middle" fill="#7c2d12">cifre: 1 4 2 8 5 7</text>
<text x="500" y="60" font-size="15" fill="#7c2d12">tur complet</text>
<text x="500" y="80" font-size="15" fill="#7c2d12">= perioada</text>
</svg>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta: fracții și numere zecimale`,
      nodes: [
        { id: `fraz`, label: `Fracție a/b`, x: 50, y: 6, color: `#2563eb`, html: `Un cât între două numere întregi.`, why: `Fracția s-a născut pentru a împărți cantități; scrierea «a/b» indică chiar împărțirea a : b. Orice fracție este un <b>număr rațional</b> (de la <i>ratio</i>, „raport”).` },
        { id: `div`, label: `Împărțire`, x: 50, y: 26, color: `#7c3aed`, html: `Numărător : numitor.`, why: `Efectuând împărțirea în coloană cu zecimale, se continuă adăugând zerouri la rest. Este metoda indo-arabă ajunsă în Europa cu Fibonacci (1202).` },
        { id: `lim`, label: `Zecimal finit`, x: 16, y: 50, color: `#16a34a`, html: `Se termină după un număr finit de cifre: 0,75.`, why: `Se întâmplă dacă numitorul (simplificat) are doar factori 2 și 5, pentru că atunci fracția se poate scrie cu numitorul 10, 100, 1000… iar 10 = 2 × 5.` },
        { id: `sempl`, label: `Periodic simplu`, x: 50, y: 52, color: `#ea580c`, html: `Perioada începe imediat: 0,(3).`, why: `Se întâmplă când numitorul nu are nici 2, nici 5. Resturile se repetă în mod obligatoriu, pentru că sunt în număr finit (mai puține decât împărțitorul): este <b>principiul cutiei (al lui Dirichlet)</b>.` },
        { id: `misto`, label: `Periodic mixt`, x: 84, y: 50, color: `#dc2626`, html: `Există o parte neperiodică: 0,1(6).`, why: `Numitorul conține 2 sau 5 împreună cu alți factori: partea „2 și 5” produce partea neperiodică, ceilalți factori produc perioada.` },
        { id: `gen`, label: `Fracție generatoare`, x: 50, y: 76, color: `#0d9488`, html: `Fracția din care se naște un număr zecimal.`, why: `Se demonstrează cu algebra: se înmulțește numărul cu o putere a lui 10 și se scade, astfel încât partea periodică infinită se anulează și rămân cei 9 (de ex. 100x − x = 99x).` },
        { id: `irr`, label: `Numere iraționale`, x: 84, y: 82, color: `#64748b`, html: `Zecimale infinite NEperiodice: √2, π.`, why: `Nu sunt fracții: nu au fracție generatoare. Pitagoreicii au descoperit în secolul al V-lea î.Hr. că diagonala pătratului (√2) nu este un raport de numere întregi: a fost un șoc!` },
        { id: `stevin`, label: `Notația zecimală`, x: 16, y: 82, color: `#ca8a04`, html: `A scrie numerele cu virgulă.`, why: `Încă matematicienii arabi (al-Kashi, secolul al XV-lea) foloseau fracții zecimale; în Europa le-a răspândit <b>Simon Stevin</b> în 1585, pentru a simplifica calculele negustorilor și inginerilor.` }
      ],
      edges: [
        [`fraz`, `div`, `înseamnă`],
        [`div`, `lim`, `rest 0`],
        [`div`, `sempl`, `resturi care se repetă`],
        [`div`, `misto`, `parte neperiodică + perioadă`],
        [`sempl`, `gen`, `ne întoarcem cu`],
        [`misto`, `gen`, `ne întoarcem cu`],
        [`misto`, `irr`, `diferite de`],
        [`lim`, `stevin`, `se scrie cu`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: fracția generatoare`,
      questions: [
        { type: `mc`, q: `Fracția generatoare a lui 0,(7) este…`, options: [`7/10`, `7/9`, `7/99`], answer: 1, explain: `Perioadă de o cifră: 7/9.` },
        { type: `mc`, q: `Fracția generatoare a lui 0,1(6) este…`, options: [`16/90 = 8/45`, `15/90 = 1/6`, `16/99`], answer: 1, explain: `(16 − 1)/90 = 15/90 = 1/6.` },
        { type: `num`, q: `0,25 = 1/?`, answer: 4, explain: `0,25 = 25/100 = 1/4.` }
      ]
    },
    {
      type: `remember`,
      title: `De ținut minte`,
      html: `<ul>
<li>a/b = a : b. Numărul zecimal poate fi <b>finit</b>, <b>periodic simplu</b>, <b>periodic mixt</b>.</li>
<li>Numitor cu doar 2 și 5 → finit; fără 2 și 5 → simplu; amestecat → mixt.</li>
<li>Generatoarea: numărător = numărul fără virgulă − (partea întreagă și partea neperiodică); numitor = un <b>9</b> pentru fiecare cifră a perioadei și un <b>0</b> pentru fiecare cifră a părții neperiodice.</li>
<li>Simplifică întotdeauna rezultatul!</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Număr zecimal finit`, d: `Număr cu un număr finit de cifre după virgulă.` },
    { t: `Număr periodic`, d: `Număr zecimal infinit în care un grup de cifre se repetă la infinit.` },
    { t: `Perioadă`, d: `Grupul de cifre care se repetă.` },
    { t: `Parte neperiodică`, d: `Cifrele zecimale dintre virgulă și perioadă, care nu se repetă.` },
    { t: `Fracție generatoare`, d: `Fracția care, prin efectuarea împărțirii, generează un număr zecimal.` },
    { t: `Fracție zecimală`, d: `Fracție cu numitorul 10, 100, 1000…` },
    { t: `Număr rațional`, d: `Număr care se poate scrie ca fracție de două numere întregi.` },
    { t: `Număr irațional`, d: `Zecimal infinit neperiodic, care nu este o fracție (de ex. π, √2).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Scrie 7/20 ca număr zecimal.`, answer: 0.35, tol: 0.0001, explain: `7/20 = 35/100 = 0,35.` },
      { type: `mc`, q: `Care fracție dă un număr zecimal periodic simplu?`, options: [`3/8`, `2/9`, `1/6`], answer: 1, explain: `9 = 3²: niciun 2 sau 5 → periodic simplu (0,(2)).` },
      { type: `mc`, q: `În 3,4(12), partea neperiodică este…`, options: [`3`, `4`, `12`], answer: 1, explain: `3 partea întreagă, 4 partea neperiodică, 12 perioada.` },
      { type: `tf`, q: `1/40 este un număr zecimal finit.`, answer: true, explain: `40 = 2³ × 5: doar 2 și 5 → finit (0,025).` },
      { type: `mc`, q: `Fracția generatoare a lui 0,(12) este…`, options: [`12/100`, `12/99 = 4/33`, `12/90`], answer: 1, explain: `Două cifre în perioadă → 99: 12/99 = 4/33.` },
      { type: `mc`, q: `Fracția generatoare a lui 1,2(3) este…`, options: [`(123 − 12)/90 = 37/30`, `123/99`, `(123 − 1)/99`], answer: 0, explain: `Numărul fără virgulă 123 minus partea întreagă + partea neperiodică 12; numitor 90.` },
      { type: `num`, q: `Câte cifre are perioada lui 1/7?`, answer: 6, explain: `1/7 = 0,(142857).` },
      { type: `tf`, q: `0,(9) este egal cu 1.`, answer: true, explain: `0,(9) = 9/9 = 1.` },
      { type: `num`, q: `Transformă 0,6 în fracție ireductibilă: 3/?`, answer: 5, explain: `0,6 = 6/10 = 3/5.` },
      { type: `order`, q: `Ordonează de la cel mai mic la cel mai mare.`, items: [`0,3`, `1/3`, `0,34`, `0,(4)`], explain: `0,3 < 0,333… < 0,34 < 0,444…` },
      { type: `mc`, q: `π = 3,14159… este…`, options: [`periodic simplu`, `zecimal finit`, `irațional (neperiodic)`], answer: 2, explain: `π este infinit și neperiodic: nu este o fracție.` }
    ],
    gen: [[`fracEquiv`, 2], [`decAdd`, 1]]
  }
});

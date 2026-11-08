TOPIC('ro', {
  id: `m2-mat-rapporti-proporzioni`,
  title: `Rapoarte și proporții`,
  intro: `Scara unei hărți, rețeta pentru 4 persoane de adaptat la 10, viteza unui tren, ecranul 16:9 al telefonului: în spatele tuturor acestor lucruri se află <b>rapoartele</b> și <b>proporțiile</b>. Învățăm ce sunt, care sunt <b>proprietățile</b> lor și cum se găsește <b>termenul necunoscut</b>.`,
  minutes: 50,
  sections: [
    {
      type: `text`,
      title: `Raportul dintre două numere`,
      html: `<p><b>Raportul</b> dintre două numere <i>a</i> și <i>b</i> (cu b ≠ 0) este <b>câtul</b> împărțirii a : b. Se scrie <b>a : b</b> sau <b>a/b</b>.</p>
<ul>
<li><i>a</i> se numește <b>antecedent</b>, <i>b</i> se numește <b>consecvent</b>.</li>
<li>Exemplu: raportul dintre 12 și 4 este 12 : 4 = <b>3</b>; raportul dintre 4 și 12 este 4/12 = <b>1/3</b> (raport <b>invers</b>).</li>
</ul>
<p>Proprietate: dacă înmulțești sau împarți antecedentul și consecventul cu <b>același număr</b> (diferit de 0), raportul <b>nu se schimbă</b>: 12 : 4 = 24 : 8 = 6 : 2 = 3. (Este aceeași proprietate ca la fracțiile echivalente!)</p>`
    },
    {
      type: `text`,
      title: `Rapoarte între mărimi`,
      html: `<p><b>Mărimi omogene</b> (de același fel, cu aceeași unitate de măsură): raportul este un <b>număr pur</b>, fără unitate.</p>
<ul>
<li><b>Scara</b> unei hărți: distanța pe hartă / distanța reală. Scara <b>1 : 100 000</b> înseamnă că 1 cm pe hartă = 100 000 cm = <b>1 km</b> în realitate.</li>
<li><b>Procentul</b>: un raport cu consecventul 100 (15% = 15/100).</li>
<li><b>Formatul</b> ecranelor: 16 : 9 (lățime : înălțime).</li>
</ul>
<p><b>Mărimi neomogene</b> (de feluri diferite): raportul este o <b>mărime nouă</b>, cu unitatea ei.</p>
<ul>
<li><b>Viteza</b> = distanță / timp → 150 km în 2 h = <b>75 km/h</b>;</li>
<li><b>Densitatea</b> = masă / volum → apă: 1 g/cm³;</li>
<li><b>Prețul unitar</b> = preț / cantitate → 3 lei pentru 2 kg = <b>1,50 lei/kg</b>;</li>
<li><b>Densitatea populației</b> = locuitori / suprafață (Italia: circa 195 loc./km²).</li>
</ul>`
    },
    {
      type: `example`,
      title: `Exemplu practic: citim harta`,
      html: `<p>Pe o hartă la scara <b>1 : 25 000</b> (cea a potecilor de munte), două cabane se află la <b>8 cm</b> una de alta. Cât de departe sunt în realitate?</p>
<ol>
<li>8 cm × 25 000 = 200 000 cm</li>
<li>200 000 cm = 2000 m = <b>2 km</b> (în linie dreaptă).</li>
</ol>
<p>Și invers: un lac lung de 3 km, câți centimetri va avea pe hartă? 3 km = 300 000 cm → 300 000 : 25 000 = <b>12 cm</b>.</p>`
    },
    {
      type: `text`,
      title: `Proporția`,
      html: `<p>O <b>proporție</b> este o <b>egalitate între două rapoarte</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>a : b = c : d</b></p>
<p>Se citește „<i>a este la b ca c la d</i>”. Exemplu: <b>3 : 6 = 5 : 10</b> (ambele rapoarte valorează 0,5).</p>
<ul>
<li><b>a</b> și <b>d</b> (termenii din exterior) sunt <b>extremii</b>;</li>
<li><b>b</b> și <b>c</b> (termenii din interior) sunt <b>mezii</b>;</li>
<li>a și c sunt <b>antecedenții</b>; b și d sunt <b>consecvenții</b>.</li>
</ul>`
    },
    {
      type: `svg`,
      title: `Extremi și mezi`,
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#faf5ff"/>
<text x="110" y="135" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">3</text>
<text x="185" y="135" font-size="56" fill="#1f2937" text-anchor="middle">:</text>
<text x="250" y="135" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">6</text>
<text x="315" y="135" font-size="56" fill="#1f2937" text-anchor="middle">=</text>
<text x="380" y="135" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">5</text>
<text x="440" y="135" font-size="56" fill="#1f2937" text-anchor="middle">:</text>
<text x="510" y="135" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">10</text>
<path d="M110 70 Q310 0 510 70" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="310" y="30" font-size="18" fill="#dc2626" text-anchor="middle" font-weight="bold">EXTREMI: 3 × 10 = 30</text>
<path d="M250 155 Q315 210 380 155" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="315" y="235" font-size="18" fill="#2563eb" text-anchor="middle" font-weight="bold">MEZI: 6 × 5 = 30</text>
</svg>`,
      caption: `Produsul extremilor este egal cu produsul mezilor: este proprietatea fundamentală.`
    },
    {
      type: `remember`,
      title: `Proprietatea fundamentală`,
      html: `<p>În orice proporție <b>produsul mezilor este egal cu produsul extremilor</b>:</p>
<p style="text-align:center;font-size:1.2em">a : b = c : d &nbsp;⟺&nbsp; <b>a × d = b × c</b></p>
<p>Servește la <b>verificarea</b> faptului că patru numere formează o proporție: 4 : 5 = 12 : 15? 4 × 15 = 60 și 5 × 12 = 60 → <b>da</b>.</p>`
    },
    {
      type: `text`,
      title: `Celelalte proprietăți`,
      html: `<p>Pornind de la <b>3 : 6 = 5 : 10</b>:</p>
<ul>
<li><b>A inversa</b>: se schimbă fiecare antecedent cu consecventul lui → 6 : 3 = 10 : 5.</li>
<li><b>A permuta</b>: se schimbă între ei mezii (sau extremii) → 3 : 5 = 6 : 10 (sau 10 : 6 = 5 : 3).</li>
<li><b>A compune</b>: (a + b) : a = (c + d) : c, sau (a + b) : b = (c + d) : d → (3 + 6) : 3 = (5 + 10) : 5 → 9 : 3 = 15 : 5 ✓</li>
<li><b>A descompune</b>: (a − b) : a = (c − d) : c (cu a &gt; b, c &gt; d) → din 6 : 3 = 10 : 5 → (6 − 3) : 6 = (10 − 5) : 10 → 3 : 6 = 5 : 10 ✓</li>
</ul>
<p>Compunerea și descompunerea sunt foarte utile în problemele în care se cunoaște <b>suma</b> sau <b>diferența</b> a două numere și raportul lor.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-test: rapoarte și proporții`,
      questions: [
        { type: `mc`, q: `În 2 : 7 = 6 : 21, care sunt mezii?`, options: [`2 și 21`, `7 și 6`, `2 și 6`], answer: 1, explain: `Mezii sunt termenii din interior: 7 și 6.` },
        { type: `tf`, q: `4 : 6 = 10 : 15 este o proporție.`, answer: true, explain: `4 × 15 = 60 și 6 × 10 = 60.` },
        { type: `num`, q: `O mașină parcurge 240 km în 3 ore. Care este viteza medie în km/h?`, answer: 80, unit: `km/h`, explain: `240 : 3 = 80 km/h.` }
      ]
    },
    {
      type: `text`,
      title: `Calculăm termenul necunoscut`,
      html: `<p>Din proprietatea fundamentală obținem două reguli:</p>
<ul>
<li><b>Extrem necunoscut</b> = produsul mezilor : extremul cunoscut.<br>
<i>x : 4 = 15 : 12</i> → x = (4 × 15) : 12 = 60 : 12 = <b>5</b>.</li>
<li><b>Mediu necunoscut</b> = produsul extremilor : mediul cunoscut.<br>
<i>8 : x = 6 : 9</i> → x = (8 × 9) : 6 = 72 : 6 = <b>12</b>.</li>
</ul>
<p><b>Proporție continuă</b>: cei doi mezi sunt egali, a : x = x : d. Termenul x se numește <b>mediu proporțional</b> și este <b>x = √(a × d)</b>.<br>
<i>4 : x = x : 9</i> → x² = 36 → x = <b>6</b>.</p>
<p><b>Cu compunerea</b> (suma cunoscută): două numere au suma 40 și sunt între ele ca 3 : 5. Care sunt?<br>
(a + b) : a = (3 + 5) : 3 → 40 : a = 8 : 3 → a = 40 × 3 : 8 = <b>15</b>; b = 40 − 15 = <b>25</b>.</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: rețeta de tiramisu`,
      html: `<p>O rețetă pentru <b>4 persoane</b> folosește <b>250 g</b> de mascarpone. Cât este nevoie pentru <b>10 persoane</b>?</p>
<p>4 : 250 = 10 : x → x = (250 × 10) : 4 = 2500 : 4 = <b>625 g</b>.</p>
<p>Cu aceeași metodă: dacă sunt necesare <b>3 ouă</b> pentru 4 persoane, pentru 10 persoane: 4 : 3 = 10 : x → x = 30 : 4 = 7,5 → în bucătărie vei rotunji la <b>7 sau 8 ouă</b>!</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Raportul de aur`,
      html: `<p>Un segment este împărțit după <b>secțiunea de aur</b> când întregul este la partea mai mare cum partea mai mare este la cea mai mică. Raportul lor este <b>numărul de aur φ ≈ 1,618</b>. Euclid l-a descris în <i>Elemente</i> (secolul al III-lea î.Hr.); Luca Pacioli l-a numit „proporția divină” (1509), cu ilustrații de <b>Leonardo da Vinci</b>. Raportul dintre două numere consecutive din șirul lui Fibonacci (1, 1, 2, 3, 5, 8, 13, 21…) se apropie tot mai mult de φ: 21 : 13 ≈ 1,615.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Eratostene măsoară Pământul`,
      html: `<p>Pe la <b>240 î.Hr.</b>, <b>Eratostene</b> a măsurat circumferința Pământului cu o proporție! La prânz, în ziua solstițiului, la Siene Soarele se afla la zenit, în timp ce la Alexandria razele formau un unghi de circa <b>7,2°</b>, adică 1/50 din 360°. Cum cele două orașe se aflau la circa 5000 de stadii distanță: 7,2 : 360 = 5000 : x → x = <b>250 000 de stadii</b>, circa 40 000 km. Valoarea adevărată este 40 075 km la ecuator!</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege proporțiile`,
      intro: `Dacă „extremii” și „mezii” te încurcă, încearcă aceste metode folosite în alte țări.`,
      tabs: [
        {
          label: `✖️ Produsul în cruce (Franța, SUA)`,
          html: `<p>Scrie proporția ca <b>egalitate de fracții</b>:</p>
<p style="text-align:center;font-size:1.2em">a/b = c/d &nbsp;→&nbsp; a × d = b × c</p>
<p>Se înmulțesc numerele „în diagonală” (în formă de <b>X</b>): în Franța se numește <i>produit en croix</i>, în SUA <i>cross multiplication</i>. Este aceeași proprietate fundamentală, dar se vede mai bine!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ecfeff"/>
<text x="200" y="90" font-size="48" font-weight="bold" fill="#0e7490" text-anchor="middle">4</text>
<line x1="165" y1="110" x2="235" y2="110" stroke="#1f2937" stroke-width="5"/>
<text x="200" y="165" font-size="48" font-weight="bold" fill="#0e7490" text-anchor="middle">250</text>
<text x="300" y="125" font-size="48" fill="#1f2937" text-anchor="middle">=</text>
<text x="400" y="90" font-size="48" font-weight="bold" fill="#be185d" text-anchor="middle">10</text>
<line x1="365" y1="110" x2="435" y2="110" stroke="#1f2937" stroke-width="5"/>
<text x="400" y="165" font-size="48" font-weight="bold" fill="#be185d" text-anchor="middle">x</text>
<line x1="230" y1="70" x2="375" y2="150" stroke="#f59e0b" stroke-width="5"/>
<line x1="240" y1="150" x2="370" y2="70" stroke="#f59e0b" stroke-width="5"/>
<text x="300" y="215" font-size="20" fill="#1f2937" text-anchor="middle" font-weight="bold">4 · x = 250 · 10 → x = 625</text>
</svg>`
        },
        {
          label: `📋 Tabel și reducerea la unitate`,
          html: `<p>În Germania și în Anglia se folosește adesea <b>reducerea la unitate</b> (<i>Dreisatz</i>, „regula de trei simplă”): mai întâi se calculează cât valorează <b>1</b>, apoi se înmulțește.</p>
<table>
<tr><th>Persoane</th><th>Mascarpone</th></tr>
<tr><td>4</td><td>250 g</td></tr>
<tr><td>1</td><td>250 : 4 = 62,5 g</td></tr>
<tr><td>10</td><td>62,5 × 10 = <b>625 g</b></td></tr>
</table>
<p>Nicio formulă de ținut minte: doar o împărțire și o înmulțire!</p>`
        },
        {
          label: `🗺️ Zoom-ul hărților`,
          html: `<p>Gândește-te la o proporție ca la un <b>zoom</b>: când mărești o fotografie pe telefon, toate lungimile se înmulțesc cu același număr, deci <b>rapoartele rămân egale</b>. Un dreptunghi 3 × 6 mărit devine 5 × 10: forma este aceeași pentru că 3 : 6 = 5 : 10. Dacă rapoartele nu ar fi egale, fotografia s-ar „deforma”!</p>`
        },
        {
          label: `🧊 Cubulețe la scară`,
          html: `<p>Iată un dreptunghi de <b>2 × 3</b> cubulețe. Încearcă să construiești unul mai mare „în proporție” cu cursoarele: 4 × 6, 6 × 9… Funcționează doar dacă 2 : 3 = noua latură mică : noua latură mare. Încearcă 4 × 7: forma se schimbă!</p>`,
          scene: `blocks`,
          options: { mode: `array`, a: 2, b: 3 }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta rapoartelor și proporțiilor`,
      nodes: [
        { id: `rapp`, label: `Raport a : b`, x: 50, y: 6, color: `#2563eb`, html: `Câtul a două numere.`, why: `În latină <i>ratio</i>, în greacă <i>lógos</i>: pentru greci raportul era modul de a compara două mărimi. Din <i>ratio</i> vine și „rațional”.` },
        { id: `omog`, label: `Mărimi omogene`, x: 18, y: 28, color: `#16a34a`, html: `Aceeași unitate: scară, procent (număr pur).`, why: `Împărțind cm la cm, unitatea „se simplifică”: rămâne un număr pur care spune „de câte ori” încape o mărime în cealaltă.` },
        { id: `nonomog`, label: `Mărimi neomogene`, x: 82, y: 28, color: `#ea580c`, html: `Unități diferite: viteză, densitate, preț pe kg.`, why: `Raportul creează o <b>mărime derivată</b>: km/h, g/cm³, lei/kg. Galilei a folosit aceste rapoarte pentru a studia mișcarea în secolul al XVII-lea.` },
        { id: `prop`, label: `Proporție`, x: 50, y: 46, color: `#7c3aed`, html: `Egalitate între două rapoarte: a : b = c : d.`, why: `Teoria proporțiilor a fost dezvoltată de <b>Eudoxos din Cnidos</b> (secolul al IV-lea î.Hr.) și este expusă în <b>cartea a V-a din Elementele lui Euclid</b>. Funcționa și cu mărimi precum √2, care nu sunt fracții.` },
        { id: `fond`, label: `Proprietatea fundamentală`, x: 22, y: 66, color: `#dc2626`, html: `Produsul mezilor = produsul extremilor.`, why: `Dacă a/b = c/d, înmulțind ambii membri cu b × d se obține a × d = c × b: este o consecință a fracțiilor echivalente.` },
        { id: `altre`, label: `A inversa, a permuta, a compune, a descompune`, x: 78, y: 66, color: `#ca8a04`, html: `Transformări care păstrează proporția.`, why: `Toate se demonstrează din proprietatea fundamentală. Erau deja în cartea a V-a a lui Euclid cu nume grecești; în Evul Mediu le predau „școlile de abac” copiilor negustorilor.` },
        { id: `incog`, label: `Termen necunoscut`, x: 22, y: 88, color: `#0d9488`, html: `Extrem = mezii : extrem; mediu = extremii : mediu.`, why: `Este „regula de trei”, predată în tratatele de abac precum <i>Liber Abaci</i> al lui <b>Fibonacci</b> (1202) pentru a rezolva probleme de schimb valutar, mărfuri și prețuri.` },
        { id: `continua`, label: `Proporție continuă`, x: 78, y: 88, color: `#db2777`, html: `a : x = x : d → x = √(a·d).`, why: `Mediul proporțional este <b>media geometrică</b>. Apare în teorema a doua a lui Euclid despre triunghiurile dreptunghice și în secțiunea de aur.` }
      ],
      edges: [
        [`rapp`, `omog`, `între`],
        [`rapp`, `nonomog`, `între`],
        [`rapp`, `prop`, `două rapoarte egale`],
        [`prop`, `fond`, `are`],
        [`prop`, `altre`, `se transformă prin`],
        [`fond`, `incog`, `permite să găsim`],
        [`altre`, `continua`, `caz special`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: termenul necunoscut`,
      questions: [
        { type: `num`, q: `x : 6 = 10 : 15. Cât este x?`, answer: 4, explain: `x = 6 × 10 : 15 = 60 : 15 = 4.` },
        { type: `num`, q: `9 : x = x : 4. Cât este x (pozitiv)?`, answer: 6, explain: `x = √(9 × 4) = √36 = 6.` },
        { type: `num`, q: `Pe o hartă la scara 1 : 50 000, două sate se află la 6 cm unul de altul. Câți km sunt în realitate?`, answer: 3, unit: `km`, explain: `6 × 50 000 = 300 000 cm = 3 km.` }
      ]
    },
    {
      type: `remember`,
      title: `De ținut minte`,
      html: `<ul>
<li>Raport = cât; omogene → număr pur; neomogene → mărime nouă.</li>
<li>Proporție a : b = c : d; <b>extremi</b> a, d; <b>mezi</b> b, c.</li>
<li><b>Mezi × mezi = extremi × extremi</b>.</li>
<li>x extrem = mezii înmulțiți : extremul cunoscut; x mediu = extremii înmulțiți : mediul cunoscut.</li>
<li>Mediu proporțional: x = √(a·d).</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Raport`, d: `Câtul dintre două numere sau mărimi.` },
    { t: `Antecedent`, d: `Primul termen al unui raport.` },
    { t: `Consecvent`, d: `Al doilea termen al unui raport.` },
    { t: `Scară`, d: `Raportul dintre o distanță pe hartă și distanța reală corespunzătoare.` },
    { t: `Proporție`, d: `Egalitate între două rapoarte.` },
    { t: `Extremi`, d: `Primul și al patrulea termen al unei proporții.` },
    { t: `Mezi`, d: `Al doilea și al treilea termen al unei proporții.` },
    { t: `Proporție continuă`, d: `Proporție cu mezii egali.` },
    { t: `Mediu proporțional`, d: `Termenul repetat într-o proporție continuă: √(a·d).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Care este raportul dintre 45 și 9?`, answer: 5, explain: `45 : 9 = 5.` },
      { type: `mc`, q: `În 5 : 8 = 15 : 24, extremii sunt…`, options: [`5 și 24`, `8 și 15`, `5 și 15`], answer: 0, explain: `Primul și ultimul termen.` },
      { type: `tf`, q: `3 : 4 = 9 : 16 este o proporție.`, answer: false, explain: `3 × 16 = 48, dar 4 × 9 = 36: diferite.` },
      { type: `num`, q: `x : 12 = 5 : 3. Află x.`, answer: 20, explain: `x = 12 × 5 : 3 = 20.` },
      { type: `num`, q: `7 : x = 21 : 9. Află x.`, answer: 3, explain: `x = 7 × 9 : 21 = 3.` },
      { type: `mc`, q: `Permutând mezii din 2 : 3 = 8 : 12 se obține…`, options: [`3 : 2 = 12 : 8`, `2 : 8 = 3 : 12`, `12 : 3 = 8 : 2`], answer: 1, explain: `Se schimbă între ei 3 și 8.` },
      { type: `mc`, q: `Raportul dintre 300 km și 4 h este…`, options: [`75 (număr pur)`, `75 km/h`, `1200 km·h`], answer: 1, explain: `Mărimi neomogene: se obține o viteză, 75 km/h.` },
      { type: `num`, q: `Două numere au suma 56 și sunt ca 3 : 4. Care este cel mai mic?`, answer: 24, explain: `Compunere: 56 : a = 7 : 3 → a = 56 × 3 : 7 = 24 (celălalt este 32).` },
      { type: `num`, q: `Află mediul proporțional dintre 2 și 18.`, answer: 6, explain: `√(2 × 18) = √36 = 6.` },
      { type: `num`, q: `La scara 1 : 200, o cameră are 3 cm lungime pe desen. Câți metri are de fapt?`, answer: 6, unit: `m`, explain: `3 × 200 = 600 cm = 6 m.` },
      { type: `order`, q: `Pune în ordine pașii pentru a găsi un extrem necunoscut.`, items: [`Identific mezii`, `Înmulțesc mezii`, `Împart la extremul cunoscut`, `Verific cu proprietatea fundamentală`], explain: `Mezi × mezi : extremul cunoscut, apoi se verifică.` }
    ],
    gen: [[`proportion`, 3]]
  }
});

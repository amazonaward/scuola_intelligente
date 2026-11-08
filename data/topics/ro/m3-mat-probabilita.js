TOPIC('ro', {
  id: "m3-mat-probabilita",
  title: "Probabilități și statistică",
  intro: "Câți colegi preferă fotbalul? Care este nota cea mai frecventă? Ce șanse am să dau 6 cu un zar? <b>Statistica</b> adună și rezumă datele, <b>probabilitatea</b> măsoară cât de ușor se poate întâmpla un eveniment. Împreună ne ajută să luăm decizii atunci când nu totul este sigur.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Ce este o cercetare statistică",
      html: `<p><b>Statistica</b> studiază fenomenele <b>colective</b>, adică cele care privesc mulți indivizi (persoane, obiecte, evenimente). O cercetare statistică se face în 4 pași:</p>
<ol>
<li><b>Definirea problemei</b> și a <b>populației</b> (mulțimea tuturor elementelor pe care vrem să le studiem: de ex. toți elevii școlii).</li>
<li><b>Culegerea datelor</b>: pe întreaga populație (<b>recensământ</b>) sau pe o parte bine aleasă, <b>eșantionul</b>.</li>
<li><b>Organizarea datelor</b> în tabele și reprezentarea lor cu grafice.</li>
<li><b>Prelucrarea și interpretarea</b>: calcularea frecvențelor și a indicilor (media, modul, mediana) și tragerea concluziilor.</li>
</ol>
<p>Fiecare proprietate pe care o observăm se numește <b>caracteristică</b>. O caracteristică poate fi:</p>
<ul>
<li><b>calitativă</b>, exprimată în cuvinte (culoarea preferată, sportul practicat);</li>
<li><b>cantitativă</b>, exprimată în numere (înălțime, numărul de frați, notă). Valorile ei se numesc <b>modalități</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "2. Frecvențele: absolută, relativă, procentuală",
      html: `<p>Îi întrebăm pe cei 25 de elevi dintr-o clasă a VIII-a: <i>„Ce sport practici?”</i>. Numărăm răspunsurile:</p>
<table>
<tr><th>Sport</th><th>Frecvența absolută</th><th>Frecvența relativă</th><th>Frecvența procentuală</th></tr>
<tr><td>⚽ Fotbal</td><td>10</td><td>10/25 = 0,40</td><td>40%</td></tr>
<tr><td>🏐 Volei</td><td>6</td><td>6/25 = 0,24</td><td>24%</td></tr>
<tr><td>🏊 Înot</td><td>5</td><td>5/25 = 0,20</td><td>20%</td></tr>
<tr><td>🤸 Gimnastică</td><td>4</td><td>4/25 = 0,16</td><td>16%</td></tr>
<tr><td><b>Total</b></td><td><b>25</b></td><td><b>1</b></td><td><b>100%</b></td></tr>
</table>
<ul>
<li><b>Frecvența absolută</b> (f): de câte ori apare o modalitate.</li>
<li><b>Frecvența relativă</b>: f împărțit la numărul total de date. Suma frecvențelor relative este întotdeauna <b>1</b>.</li>
<li><b>Frecvența procentuală</b>: frecvența relativă × 100. Suma este întotdeauna <b>100%</b>.</li>
</ul>
<p>Frecvențele relative servesc pentru a <b>compara</b> grupuri de mărimi diferite: 10 fotbaliști din 25 (40%) sunt „mai mulți” decât 12 fotbaliști din 40 (30%)!</p>`
    },
    {
      type: "svg",
      title: "Aceleași date în două grafice",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<text x="160" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#1e293b">Histogramă (diagramă cu coloane)</text>
<line x1="40" y1="270" x2="300" y2="270" stroke="#334155" stroke-width="2"/>
<line x1="40" y1="270" x2="40" y2="50" stroke="#334155" stroke-width="2"/>
<text x="32" y="274" font-size="14" text-anchor="end" fill="#334155">0</text>
<text x="32" y="174" font-size="14" text-anchor="end" fill="#334155">5</text>
<text x="32" y="74" font-size="14" text-anchor="end" fill="#334155">10</text>
<line x1="40" y1="170" x2="300" y2="170" stroke="#cbd5e1" stroke-dasharray="4"/>
<line x1="40" y1="70" x2="300" y2="70" stroke="#cbd5e1" stroke-dasharray="4"/>
<rect x="55" y="70" width="45" height="200" fill="#ef4444"/>
<rect x="115" y="150" width="45" height="120" fill="#3b82f6"/>
<rect x="175" y="170" width="45" height="100" fill="#22c55e"/>
<rect x="235" y="190" width="45" height="80" fill="#f59e0b"/>
<text x="77" y="62" font-size="15" text-anchor="middle" fill="#1e293b">10</text>
<text x="137" y="142" font-size="15" text-anchor="middle" fill="#1e293b">6</text>
<text x="197" y="162" font-size="15" text-anchor="middle" fill="#1e293b">5</text>
<text x="257" y="182" font-size="15" text-anchor="middle" fill="#1e293b">4</text>
<text x="77" y="292" font-size="14" text-anchor="middle" fill="#1e293b">Fotbal</text>
<text x="137" y="292" font-size="14" text-anchor="middle" fill="#1e293b">Volei</text>
<text x="197" y="292" font-size="14" text-anchor="middle" fill="#1e293b">Înot</text>
<text x="257" y="292" font-size="14" text-anchor="middle" fill="#1e293b">Gimnastică</text>
<text x="480" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#1e293b">Diagramă circulară</text>
<path d="M480 165 L480 55 A110 110 0 0 1 544.66 254 Z" fill="#ef4444"/>
<path d="M480 165 L544.66 254 A110 110 0 0 1 395.25 235.1 Z" fill="#3b82f6"/>
<path d="M480 165 L395.25 235.1 A110 110 0 0 1 387.1 106.1 Z" fill="#22c55e"/>
<path d="M480 165 L387.1 106.1 A110 110 0 0 1 480 55 Z" fill="#f59e0b"/>
<text x="520" y="140" font-size="16" font-weight="bold" fill="#ffffff">40%</text>
<text x="472" y="235" font-size="16" font-weight="bold" fill="#ffffff">24%</text>
<text x="398" y="178" font-size="16" font-weight="bold" fill="#ffffff">20%</text>
<text x="430" y="112" font-size="16" font-weight="bold" fill="#ffffff">16%</text>
<text x="480" y="300" font-size="14" text-anchor="middle" fill="#334155">unghi = procent × 3,6°  (40% → 144°)</text>
</svg>`,
      caption: "Histograma compară bine cantitățile; diagrama circulară arată părțile unui întreg. În diagrama circulară fiecare sector are un unghi proporțional cu frecvența: 100% = 360°."
    },
    {
      type: "text",
      title: "3. Indicii: media, modul, mediana",
      html: `<p>Pentru a rezuma multe date cu <b>un singur număr</b> se folosesc <b>indicii tendinței centrale</b>. Să luăm notele lui Luca la matematică: <b>5, 7, 6, 8, 7, 9, 7</b>.</p>
<ul>
<li><b>Media aritmetică</b>: suma tuturor valorilor împărțită la numărul lor.<br>(5+7+6+8+7+9+7) : 7 = 49 : 7 = <b>7</b>.</li>
<li><b>Modul</b>: valoarea cea mai frecventă. 7 apare de 3 ori: mod = <b>7</b>. (O distribuție poate avea mai multe moduri sau niciunul. Modul este valabil și pentru caracteristicile calitative: în tabelul sporturilor modul este „fotbal”.)</li>
<li><b>Mediana</b>: datele se pun <b>în ordine</b> și se ia cea <b>din mijloc</b>.<br>5, 6, 7, <b>7</b>, 7, 8, 9 → mediana = <b>7</b>. Dacă numărul datelor este par, mediana este media celor două din mijloc.</li>
<li><b>Amplitudinea</b>: valoarea maximă − valoarea minimă = 9 − 5 = <b>4</b>. Spune cât de „împrăștiate” sunt datele.</li>
</ul>
<p>⚠️ Media este sensibilă la valorile extreme: dacă într-o firmă 9 persoane câștigă 1.500 € și șeful 30.000 €, media este 4.350 €, dar niciun angajat nu câștigă atât! În aceste cazuri <b>mediana</b> (1.500 €) descrie mai bine situația.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: temperaturile săptămânii",
      html: `<p>La Torino, într-o săptămână din aprilie, temperaturile maxime au fost: <b>14, 16, 15, 19, 21, 16, 18 °C</b>.</p>
<ul>
<li>Media: (14+16+15+19+21+16+18) : 7 = 119 : 7 = <b>17 °C</b>;</li>
<li>Ordonate: 14, 15, 16, <b>16</b>, 18, 19, 21 → mediana = <b>16 °C</b>;</li>
<li>Modul = <b>16 °C</b> (apare de 2 ori);</li>
<li>Amplitudinea = 21 − 14 = <b>7 °C</b>.</li>
</ul>
<p>Meteorologii folosesc tocmai acești indici pentru a spune dacă o lună a fost „mai caldă decât media”.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: statistică",
      questions: [
        { type: "num", q: "Calculează media numerelor 4, 8, 6, 10.", answer: 7, explain: "(4+8+6+10) : 4 = 28 : 4 = 7." },
        { type: "num", q: "Care este mediana numerelor 3, 9, 4, 7, 5?", answer: 5, explain: "În ordine: 3, 4, 5, 7, 9. Valoarea din mijloc este 5." },
        { type: "mc", q: "Culoarea ochilor este o caracteristică…", options: ["cantitativă", "calitativă", "numerică continuă"], answer: 1, explain: "Se exprimă în cuvinte (albaștri, căprui…), deci este calitativă." },
        { type: "num", q: "Într-o clasă de 20 de elevi, 5 au o pisică. Care este frecvența procentuală?", answer: 25, unit: "%", explain: "5/20 = 0,25 → 25%." }
      ]
    },
    {
      type: "text",
      title: "4. Evenimentele: sigure, imposibile, probabile",
      html: `<p>Un <b>eveniment</b> este un fapt care se poate întâmpla sau nu ca rezultat al unui experiment (aruncarea unui zar, extragerea unei cărți…). Evenimentele pot fi:</p>
<ul>
<li><b>sigure</b>: se întâmplă întotdeauna (aruncând un zar, iese un număr mai mic decât 7);</li>
<li><b>imposibile</b>: nu se întâmplă niciodată (iese 8);</li>
<li><b>aleatoare</b> sau <b>probabile</b>: se pot întâmpla sau nu (iese 6).</li>
</ul>
<p>Mulțimea tuturor rezultatelor posibile se numește <b>spațiul de probabilitate</b> (spațiul eșantioanelor). Pentru un zar: {1, 2, 3, 4, 5, 6}.</p>`
    },
    {
      type: "widget",
      title: "Sigur, probabil sau imposibil?",
      widget: "classify",
      options: {
        groups: ["✅ Sigur", "🎲 Probabil", "🚫 Imposibil"],
        items: [
          ["Mâine, după luni, vine marți", 0],
          ["Aruncând un zar iese un număr par", 1],
          ["Aruncând un zar iese 7", 2],
          ["Extrăgând o carte dintr-un pachet de 40 iese un as", 1],
          ["Aruncând o monedă iese cap sau pajură", 0],
          ["Dintr-un săculeț cu bile doar roșii extrag o bilă albastră", 2],
          ["Mâine va ploua la Milano", 1],
          ["Aruncând două zaruri suma este 1", 2]
        ]
      },
      caption: "Trage sau atinge fiecare eveniment și pune-l în grupul potrivit."
    },
    {
      type: "text",
      title: "5. Probabilitatea clasică",
      html: `<p>Dacă toate rezultatele sunt <b>la fel de posibile</b> (zar nefalsificat, monedă echilibrată…), probabilitatea unui eveniment E este:</p>
<p style="text-align:center;font-size:1.25em"><b>p(E) = cazuri favorabile / cazuri posibile</b></p>
<p>Exemple cu un zar:</p>
<ul>
<li>p(iese 6) = <b>1/6</b> ≈ 0,167 ≈ 16,7%;</li>
<li>p(iese un număr par) = 3/6 = <b>1/2</b> = 50% (favorabile: 2, 4, 6);</li>
<li>p(iese un număr mai mic decât 7) = 6/6 = <b>1</b> → eveniment <b>sigur</b>;</li>
<li>p(iese 8) = 0/6 = <b>0</b> → eveniment <b>imposibil</b>.</li>
</ul>
<p>Deci probabilitatea este întotdeauna un număr <b>între 0 și 1</b> (adică între 0% și 100%) și poate fi scrisă ca fracție, număr zecimal sau procent.</p>
<p><b>Evenimentul contrar</b>: „nu iese 6” are probabilitatea 1 − 1/6 = <b>5/6</b>. În general p(non E) = 1 − p(E).</p>`
    },
    {
      type: "3d",
      title: "Zarul: 6 fețe, 6 cazuri posibile",
      scene: "solid",
      options: { shape: "cube", color: "#f8fafc", labels: true },
      caption: "Un zar este un cub: 6 fețe egale, deci (dacă nu este falsificat) fiecare față are aceeași probabilitate, 1/6. Rotește-l: fețele opuse ale unui zar adevărat însumează întotdeauna 7 (1-6, 2-5, 3-4)."
    },
    {
      type: "widget",
      title: "Probabilitatea ca parte dintr-un întreg",
      widget: "fractionPie",
      options: { n: 1, d: 6 },
      caption: "O probabilitate este o fracție din întreg (întregul = eveniment sigur = 1). Încearcă: 3/6 este probabilitatea unui număr par, 2/6 cea a lui „mai mare decât 4”…"
    },
    {
      type: "example",
      title: "Exemplu practic: suma a două zaruri",
      html: `<p>Aruncăm două zaruri (unul roșu și unul albastru) și adunăm punctele. Cazurile posibile sunt <b>6 × 6 = 36</b> (fiecare față a celui roșu cu fiecare față a celui albastru).</p>
<p>Suma 7 se obține în <b>6 moduri</b>: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1 → p = 6/36 = <b>1/6</b>.<br>
Suma 2 doar într-un singur mod (1+1) → p = <b>1/36</b>. Suma 12 doar cu 6+6 → <b>1/36</b>.</p>
<p>Iată de ce în jocurile de societate cu două zaruri 7 iese atât de des! Sumele nu sunt la fel de probabile, deși fiecare zar este corect.</p>`
    },
    {
      type: "3d",
      title: "Cele 36 de cazuri ale celor două zaruri în 3D",
      scene: "blocks",
      options: { mode: "array", a: 6, b: 6 },
      caption: "Fiecare cubuleț este o pereche (zar roșu, zar albastru). Perechile cu suma 7 se află pe o diagonală: sunt 6 din 36."
    },
    {
      type: "text",
      title: "6. Probabilitatea frecvențială și evenimentele compuse",
      html: `<p>Nu întotdeauna cazurile sunt la fel de posibile (un zar falsificat, probabilitatea ca o mașină să aibă o defecțiune…). Atunci se fac multe <b>probe</b> și se calculează <b>frecvența relativă</b>:</p>
<p style="text-align:center"><b>f = de câte ori s-a produs E / numărul de probe</b></p>
<p><b>Legea numerelor mari</b> spune că, pe măsură ce numărul de probe crește, frecvența relativă se apropie tot mai mult de probabilitate. Cu 10 aruncări de monedă poți avea 7 steme; cu 10.000 de aruncări vei fi foarte aproape de 50%.</p>
<p><b>Evenimente compuse</b>:</p>
<ul>
<li><b>Evenimente incompatibile</b> (nu se pot produce împreună): p(A <b>sau</b> B) = p(A) + p(B). Ex. zar: p(1 sau 2) = 1/6 + 1/6 = 1/3.</li>
<li><b>Evenimente independente</b> (unul nu îl influențează pe celălalt): p(A <b>și</b> B) = p(A) × p(B). Ex. două monede: p(cap și cap) = 1/2 × 1/2 = 1/4.</li>
</ul>
<p>⚠️ <b>Zarul nu are memorie!</b> Dacă a ieșit de 5 ori la rând „cap”, la aruncarea următoare probabilitatea de pajură este tot 1/2. A crede contrariul se numește <b>eroarea jucătorului</b>: este unul dintre motivele pentru care jocurile de noroc creează dependență și fac să pierzi bani.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Probabilitatea s-a născut dintr-un joc de zaruri",
      html: `<p>În <b>1654</b> un jucător francez, Cavalerul de Méré, l-a întrebat pe matematicianul <b>Blaise Pascal</b> cum să împartă miza unui joc întrerupt. Pascal a discutat cu <b>Pierre de Fermat</b> prin scrisori: din acele scrisori s-a născut calculul probabilităților. Cu un secol înainte, italianul <b>Gerolamo Cardano</b> scrisese o carte despre jocurile de zaruri, <i>Liber de ludo aleae</i>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Paradoxul zilei de naștere",
      html: `<p>Într-o clasă de <b>23 de persoane</b> există o probabilitate de peste <b>50%</b> ca cel puțin două să-și serbeze ziua de naștere în aceeași zi; cu 30 de persoane se ajunge la aproximativ <b>70%</b>! Pare ciudat, dar perechile posibile între 23 de persoane sunt nu mai puțin de 253. Încercați să verificați în clasa voastră.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Un grafic care a salvat vieți",
      html: `<p>Asistenta engleză <b>Florence Nightingale</b>, în timpul războiului din Crimeea (1854-1856), a desenat grafice circulare speciale pentru a arăta că cei mai mulți soldați mureau din cauza infecțiilor din spitale, nu din cauza rănilor. Datorită datelor ei, spitalele militare au îmbunătățit igiena. În Italia, datele despre populație sunt culese de <b>ISTAT</b>, prin recensământ.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege probabilitatea",
      intro: "Dacă formula „favorabile din posibile” nu te convinge, încearcă una dintre aceste căi.",
      tabs: [
        {
          label: "🌳 Diagrama arbore",
          html: `<p>Pentru evenimente în mai multe etape se desenează un <b>arbore</b>: fiecare ramură este un rezultat și poartă probabilitatea ei. Pentru a afla probabilitatea unui drum se <b>înmulțesc</b> probabilitățile de pe ramuri. Exemplu: arunc de două ori o monedă. Există 4 drumuri, fiecare cu probabilitatea 1/2 × 1/2 = 1/4. „Cel puțin un cap” = CC, CP, PC → 3/4.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="60" cy="150" r="12" fill="#0f172a"/>
<line x1="60" y1="150" x2="230" y2="80" stroke="#2563eb" stroke-width="4"/>
<line x1="60" y1="150" x2="230" y2="220" stroke="#dc2626" stroke-width="4"/>
<text x="130" y="100" font-size="16" fill="#2563eb">1/2</text>
<text x="130" y="215" font-size="16" fill="#dc2626">1/2</text>
<circle cx="245" cy="80" r="20" fill="#2563eb"/><text x="245" y="86" font-size="17" fill="#fff" text-anchor="middle">C</text>
<circle cx="245" cy="220" r="20" fill="#dc2626"/><text x="245" y="226" font-size="17" fill="#fff" text-anchor="middle">P</text>
<line x1="265" y1="80" x2="400" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="265" y1="80" x2="400" y2="115" stroke="#dc2626" stroke-width="4"/>
<line x1="265" y1="220" x2="400" y2="185" stroke="#2563eb" stroke-width="4"/>
<line x1="265" y1="220" x2="400" y2="260" stroke="#dc2626" stroke-width="4"/>
<circle cx="418" cy="40" r="18" fill="#2563eb"/><text x="418" y="46" font-size="16" fill="#fff" text-anchor="middle">C</text>
<circle cx="418" cy="115" r="18" fill="#dc2626"/><text x="418" y="121" font-size="16" fill="#fff" text-anchor="middle">P</text>
<circle cx="418" cy="185" r="18" fill="#2563eb"/><text x="418" y="191" font-size="16" fill="#fff" text-anchor="middle">C</text>
<circle cx="418" cy="260" r="18" fill="#dc2626"/><text x="418" y="266" font-size="16" fill="#fff" text-anchor="middle">P</text>
<text x="450" y="46" font-size="16" fill="#0f172a">CC → 1/4</text>
<text x="450" y="121" font-size="16" fill="#0f172a">CP → 1/4</text>
<text x="450" y="191" font-size="16" fill="#0f172a">PC → 1/4</text>
<text x="450" y="266" font-size="16" fill="#0f172a">PP → 1/4</text>
<text x="20" y="290" font-size="15" fill="#475569">1ª aruncare</text>
<text x="300" y="290" font-size="15" fill="#475569">2ª aruncare</text>
</svg>`
        },
        {
          label: "🍬 Săculețul cu bomboane",
          html: `<p>Imaginează-ți un săculeț cu <b>10 bomboane</b>: 3 de căpșuni, 5 de lămâie, 2 de mentă. Scoți una cu ochii închiși. Probabilitatea de a lua una de căpșuni este <b>felia de plăcintă</b> pe care o ocupă bomboanele de căpșuni: 3 din 10. Mișcă cursoarele: dacă adaugi bomboane de căpșuni, felia (și probabilitatea) crește; dacă adaugi bomboane de alte arome, numitorul crește și probabilitatea scade.</p>`,
          widget: "fractionPie",
          options: { n: 3, d: 10 }
        },
        {
          label: "🧊 Tabel cu dublă intrare în 3D",
          html: `<p>Pentru două zaruri, în loc de formulă, construiește <b>grila</b>: rânduri = zarul roșu, coloane = zarul albastru. Fiecare cubuleț este un caz. Numără cubulețele care te interesează: este metoda cea mai folosită în școlile din Regatul Unit și din Statele Unite („sample space diagram”). Schimbă numerele: cu un zar de 4 și unul de 6 cazurile sunt 24.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 6, b: 6 }
        },
        {
          label: "🇬🇧 „Odds” (cotele)",
          html: `<p>În țările anglo-saxone se folosesc adesea <b>odds</b>: în loc de „favorabile din posibile” se spune „favorabile <b>contra</b> nefavorabile”. Pentru 6 la un zar: odds <b>1 la 5</b> (1 caz favorabil, 5 nefavorabile), în timp ce probabilitatea este 1/6.</p>
<table><tr><th>Eveniment</th><th>Probabilitate</th><th>Odds</th></tr>
<tr><td>Cap la o monedă</td><td>1/2</td><td>1 la 1</td></tr>
<tr><td>Iese 6</td><td>1/6</td><td>1 la 5</td></tr>
<tr><td>As dintr-un pachet de 40 de cărți</td><td>4/40 = 1/10</td><td>4 la 36 = 1 la 9</td></tr></table>
<p>Pentru a trece de la odds „a contra b” la probabilitate: p = a / (a + b).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta: de la date la probabilitate",
      nodes: [
        { id: "dati", label: "Date și populație", x: 50, y: 6, color: "#0ea5e9", html: "Valorile culese observând o caracteristică pe o populație sau pe un eșantion.", why: "Statele adună date de milenii: recensăminte se făceau deja în Egipt, în China și la Roma (<i>census</i>-ul servea pentru taxe și serviciul militar). Cuvântul <b>statistică</b> vine de la „stat”: în secolul al XVIII-lea desemna știința informațiilor utile pentru a guverna." },
        { id: "frequenze", label: "Frecvențe", x: 20, y: 28, color: "#22c55e", html: "Absolută, relativă (f/n) și procentuală (×100).", why: "Servesc pentru a compara grupuri de mărimi diferite: împărțind la total, totul este adus la aceeași scară („din 1” sau „din 100”)." },
        { id: "grafici", label: "Grafice", x: 50, y: 30, color: "#f59e0b", html: "Histograme, diagrame circulare, diagrame cartesiene, pictograme.", why: "Diagrama cu bare și cea circulară au fost inventate de scoțianul <b>William Playfair</b> între 1786 și 1801: o imagine face vizibil dintr-o privire ceea ce un tabel ascunde." },
        { id: "indici", label: "Media, modul, mediana", x: 80, y: 28, color: "#a855f7", html: "Indici care rezumă o distribuție cu o singură valoare centrală.", why: "Media provine din ideea de a „împărți în părți egale” totalul; mediana este mai rezistentă la valorile extreme; modul este singurul utilizabil cu date nenumerice." },
        { id: "evento", label: "Eveniment", x: 30, y: 55, color: "#ef4444", html: "Un rezultat posibil al unui experiment aleatoriu: sigur, imposibil sau probabil.", why: "Un experiment este aleatoriu când cunoaștem rezultatele posibile, dar nu și care va ieși: este cazul zarului, dar și al vremii sau al geneticii (Mendel a folosit chiar probabilitatea pentru a explica ereditatea)." },
        { id: "classica", label: "Probabilitatea clasică", x: 15, y: 80, color: "#2563eb", html: "p = cazuri favorabile / cazuri posibile, dacă cazurile sunt echiprobabile.", why: "Apare din scrisorile dintre <b>Pascal</b> și <b>Fermat</b> (1654) despre jocurile de noroc; Laplace a formulat-o complet în 1812. Funcționează doar dacă toate cazurile au aceeași probabilitate." },
        { id: "frequentista", label: "Probabilitatea frecvențială", x: 50, y: 80, color: "#14b8a6", html: "Probabilitatea estimată ca frecvență relativă după foarte multe probe.", why: "Se bazează pe <b>legea numerelor mari</b>, demonstrată de <b>Jakob Bernoulli</b> (publicată în 1713): cu cât se fac mai multe probe, cu atât frecvența se apropie de probabilitate. Așa își calculează asigurările riscurile." },
        { id: "composti", label: "Evenimente compuse", x: 85, y: 62, color: "#db2777", html: "Suma pentru evenimente incompatibile (sau), produsul pentru evenimente independente (și).", why: "Dacă două evenimente nu se suprapun, cazurile lor favorabile se adună; dacă sunt independente, fiecare caz al primului se combină cu fiecare caz al celui de-al doilea, ca în grila 6×6 a celor două zaruri: de aceea se înmulțește." },
        { id: "decisioni", label: "Decizii în incertitudine", x: 85, y: 92, color: "#64748b", html: "Prognoze meteo, medicină, asigurări, sondaje, sport.", why: "Statistica și probabilitatea permit să decidem rațional când nu putem fi siguri: de exemplu un medicament se aprobă comparând statistic un grup care îl ia cu unul care nu îl ia." }
      ],
      edges: [
        ["dati", "frequenze", "se numără"],
        ["dati", "grafici", "se reprezintă"],
        ["dati", "indici", "se rezumă"],
        ["frequenze", "frequentista", "estimează"],
        ["evento", "classica", "se măsoară cu"],
        ["evento", "frequentista", "sau cu"],
        ["classica", "composti", "se combină în"],
        ["composti", "decisioni", "ajută"],
        ["indici", "decisioni", "ajută"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: probabilitate",
      questions: [
        { type: "mc", q: "Care este probabilitatea de a extrage o carte de inimă roșie dintr-un pachet de 52 de cărți (13 de inimă roșie)?", options: ["1/13", "1/4", "1/2"], answer: 1, explain: "13/52 = 1/4." },
        { type: "tf", q: "O probabilitate poate avea valoarea 1,5.", answer: false, explain: "Probabilitatea este întotdeauna cuprinsă între 0 (imposibil) și 1 (sigur)." },
        { type: "num", q: "Un săculeț conține 4 bile roșii și 6 albastre. Care este probabilitatea (în %) de a extrage o bilă roșie?", answer: 40, unit: "%", explain: "4/10 = 0,4 = 40%." },
        { type: "mc", q: "A ieșit pajură de 4 ori la rând. La a 5-a aruncare probabilitatea de pajură este…", options: ["mai mică de 1/2", "1/2", "mai mare de 1/2"], answer: 1, explain: "Aruncările sunt independente: moneda nu își amintește rezultatele anterioare." }
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Frecvența relativă = f / n; procentul = relativa × 100.</li>
<li><b>Media</b> = suma : numărul datelor; <b>modul</b> = valoarea cea mai frecventă; <b>mediana</b> = valoarea din mijloc a datelor ordonate.</li>
<li><b>p(E) = favorabile / posibile</b>, cu 0 ≤ p ≤ 1. Eveniment sigur: 1; imposibil: 0.</li>
<li>p(non E) = 1 − p(E).</li>
<li>Incompatibile: p(A sau B) = p(A) + p(B). Independente: p(A și B) = p(A) × p(B).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Populație statistică", d: "Mulțimea tuturor elementelor asupra cărora se face o cercetare." },
    { t: "Eșantion", d: "O parte a populației, aleasă astfel încât să o reprezinte." },
    { t: "Caracteristică", d: "Proprietatea observată (calitativă sau cantitativă)." },
    { t: "Frecvența absolută", d: "De câte ori apare o valoare." },
    { t: "Frecvența relativă", d: "Frecvența absolută împărțită la numărul total de date." },
    { t: "Media aritmetică", d: "Suma valorilor împărțită la numărul lor." },
    { t: "Modul", d: "Valoarea care apare cel mai des." },
    { t: "Mediana", d: "Valoarea din mijloc a datelor puse în ordine." },
    { t: "Eveniment aleatoriu", d: "Un eveniment care se poate produce sau nu." },
    { t: "Spațiul de probabilitate", d: "Mulțimea tuturor rezultatelor posibile ale unui experiment." },
    { t: "Evenimente independente", d: "Evenimente în care producerea unuia nu schimbă probabilitatea celuilalt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Calculează media numerelor 12, 15, 18, 15.", answer: 15, explain: "(12+15+18+15) : 4 = 60 : 4 = 15." },
      { type: "num", q: "Care este mediana numerelor 2, 8, 5, 10, 4, 9?", answer: 6.5, tol: 0.01, explain: "În ordine: 2, 4, 5, 8, 9, 10. Cele două din mijloc sunt 5 și 8: (5+8):2 = 6,5." },
      { type: "text", q: "Cum se numește valoarea care apare cel mai des într-o serie de date?", answer: ["modul", "mod", "modulul", "valoarea modală"], explain: "Este modul." },
      { type: "mc", q: "Numărul de frați este o caracteristică…", options: ["calitativă", "cantitativă", "nici una, nici alta"], answer: 1, explain: "Se exprimă printr-un număr." },
      { type: "num", q: "Într-o diagramă circulară, câte grade ocupă un sector care reprezintă 25%?", answer: 90, unit: "°", explain: "25 × 3,6° = 90°." },
      { type: "mc", q: "Aruncând un zar, care este probabilitatea să iasă un număr mai mare decât 4?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 1, explain: "Favorabile: 5 și 6 → 2/6 = 1/3." },
      { type: "tf", q: "Evenimentul „aruncând un zar iese 0” are probabilitatea 0.", answer: true, explain: "Este un eveniment imposibil." },
      { type: "num", q: "Probabilitatea ca mâine să plouă este 0,3. Care este probabilitatea să NU plouă?", answer: 0.7, tol: 0.001, explain: "1 − 0,3 = 0,7." },
      { type: "mc", q: "Aruncând două zaruri, care este probabilitatea ca suma să fie 2?", options: ["1/36", "1/12", "1/6", "2/36"], answer: 0, explain: "Doar 1+1 din 36 de cazuri posibile." },
      { type: "mc", q: "Arunc o monedă și un zar. Probabilitatea de „cap și 6”?", options: ["1/8", "1/12", "2/3", "7/12"], answer: 1, explain: "Evenimente independente: 1/2 × 1/6 = 1/12." },
      { type: "tf", q: "Conform legii numerelor mari, cu multe probe frecvența relativă se apropie de probabilitate.", answer: true, explain: "Este fundamentul probabilității frecvențiale." },
      { type: "order", q: "Pune în ordine etapele unei cercetări statistice.", items: ["Definirea problemei și a populației", "Culegerea datelor", "Organizarea datelor în tabele și grafice", "Calcularea indicilor și interpretarea"], explain: "Mai întâi se decide ce se studiază, apoi datele se culeg, se ordonează și se prelucrează." }
    ],
    gen: [["percent", 2], ["fracEquiv", 1]]
  }
});

TOPIC('ro', {
  id: "m3-mat-equazioni",
  title: "Ecuațiile de gradul întâi",
  intro: "„Mă gândesc la un număr, îl înmulțesc cu 3, adaug 5 și obțin 26: la ce număr m-am gândit?” Pentru a răspunde avem nevoie de o <b>ecuație</b>. Vom învăța să rezolvăm ecuațiile de gradul întâi cu cele două <b>principii de echivalență</b>, ca și cum ar fi o balanță în echilibru, și să le folosim pentru a rezolva probleme.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Identități și ecuații",
      html: `<p>O <b>egalitate</b> între două expresii literale poate fi:</p>
<ul>
<li>o <b>identitate</b>, dacă este adevărată <b>pentru orice valoare</b> a literelor: 2(x + 3) = 2x + 6 este mereu adevărată;</li>
<li>o <b>ecuație</b>, dacă este adevărată <b>doar pentru anumite valori</b> (sau pentru niciuna): x + 3 = 10 este adevărată doar dacă x = 7.</li>
</ul>
<p>Într-o ecuație:</p>
<ul>
<li>litera este <b>necunoscuta</b> (de obicei x);</li>
<li>ceea ce se află în stânga semnului egal este <b>membrul întâi</b>, ceea ce se află în dreapta este <b>membrul al doilea</b>;</li>
<li>valoarea care face egalitatea adevărată este <b>soluția</b> (sau rădăcina);</li>
<li>o ecuație este de <b>gradul întâi</b> dacă necunoscuta apare cu exponentul maxim 1 (fără x², x³…).</li>
</ul>
<p>Două ecuații sunt <b>echivalente</b> dacă au aceleași soluții: x + 3 = 10 și x = 7 sunt echivalente. A rezolva o ecuație înseamnă a o transforma în ecuații echivalente din ce în ce mai simple, până ajungem la <b>x = număr</b>.</p>`
    },
    {
      type: "svg",
      title: "Ecuația este o balanță",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f0f9ff"/>
<polygon points="320,260 290,290 350,290" fill="#475569"/>
<rect x="315" y="110" width="10" height="150" fill="#475569"/>
<rect x="90" y="105" width="460" height="10" rx="5" fill="#334155"/>
<line x1="150" y1="115" x2="150" y2="170" stroke="#334155" stroke-width="3"/>
<line x1="490" y1="115" x2="490" y2="170" stroke="#334155" stroke-width="3"/>
<path d="M70 170 L230 170 L210 195 L90 195 Z" fill="#94a3b8"/>
<path d="M410 170 L570 170 L550 195 L430 195 Z" fill="#94a3b8"/>
<rect x="85" y="120" width="44" height="50" rx="6" fill="#a855f7"/><text x="107" y="153" font-size="22" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<rect x="133" y="120" width="44" height="50" rx="6" fill="#a855f7"/><text x="155" y="153" font-size="22" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<circle cx="195" cy="155" r="14" fill="#f59e0b"/><text x="195" y="161" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="215" cy="140" r="14" fill="#f59e0b"/><text x="215" y="146" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="195" cy="127" r="14" fill="#f59e0b"/><text x="195" y="133" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<g fill="#f59e0b"><circle cx="430" cy="155" r="14"/><circle cx="460" cy="155" r="14"/><circle cx="490" cy="155" r="14"/><circle cx="520" cy="155" r="14"/><circle cx="550" cy="155" r="14"/><circle cx="445" cy="128" r="14"/><circle cx="475" cy="128" r="14"/><circle cx="505" cy="128" r="14"/><circle cx="535" cy="128" r="14"/><circle cx="490" cy="101" r="14"/><circle cx="460" cy="101" r="14"/></g>
<text x="150" y="235" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">2x + 3</text>
<text x="320" y="60" font-size="34" text-anchor="middle" fill="#1f2937" font-weight="bold">=</text>
<text x="490" y="235" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">11</text>
<text x="320" y="30" font-size="17" text-anchor="middle" fill="#0369a1">Scoate 3 din ambele talere, apoi împarte la jumătate: x = 4</text>
</svg>`,
      caption: "Orice faci pe un taler, trebuie să faci și pe celălalt: astfel balanța rămâne în echilibru."
    },
    {
      type: "text",
      title: "Primul principiu de echivalență",
      html: `<p><b>Adunând sau scăzând</b> din ambii membri <b>același număr</b> (sau aceeași expresie), se obține o ecuație echivalentă.</p>
<p>Exemplu: x + 5 = 12 → scad 5 din ambii membri: x + 5 − 5 = 12 − 5 → <b>x = 7</b>.</p>
<p>Consecințe practice:</p>
<ul>
<li><b>Regula transportului</b>: un termen poate fi <b>mutat</b> dintr-un membru în celălalt <b>schimbându-i semnul</b>. 3x − 4 = 2x + 6 → 3x − 2x = 6 + 4 → x = 10.</li>
<li><b>Regula reducerii</b>: doi termeni <b>egali</b> din cei doi membri se pot reduce. x + 7 = 2 + 7 → x = 2.</li>
</ul>`
    },
    {
      type: "text",
      title: "Al doilea principiu de echivalență",
      html: `<p><b>Înmulțind sau împărțind</b> ambii membri cu <b>același număr diferit de zero</b>, se obține o ecuație echivalentă.</p>
<p>Exemplu: 4x = 28 → împart ambii membri la 4: <b>x = 7</b>.</p>
<p>Consecințe practice:</p>
<ul>
<li><b>Schimbarea tuturor semnelor</b> (înmulțire cu −1): −3x = −12 → 3x = 12 → x = 4.</li>
<li><b>Eliminarea numitorilor</b>: se înmulțește totul cu c.m.m.m.c. al numitorilor. x/2 + x/3 = 5 → (×6) → 3x + 2x = 30 → 5x = 30 → x = 6.</li>
<li><b>Simplificarea</b>: dacă toți termenii au un divizor comun, se împarte: 6x + 9 = 15 → (:3) → 2x + 3 = 5.</li>
</ul>
<p>⚠️ De ce „diferit de zero”? Înmulțind cu 0 orice ecuație devine 0 = 0 și se pierd toate informațiile!</p>`
    },
    {
      type: "remember",
      title: "Metoda în 6 pași",
      html: `<ol>
<li>Elimină <b>parantezele</b> (proprietatea distributivă).</li>
<li>Elimină <b>numitorii</b> (înmulțește cu c.m.m.m.c.).</li>
<li><b>Transportă</b>: termenii cu x în membrul întâi, numerele în al doilea (schimbând semnul!).</li>
<li><b>Redu</b> termenii asemenea: ajungi la <b>forma normală</b> ax = b.</li>
<li><b>Împarte</b> la coeficientul lui x: x = b/a.</li>
<li><b>Verifică</b>: înlocuiește soluția în ecuația inițială.</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemplu ghidat",
      html: `<p>Rezolvă: <b>3(x − 2) + 4 = x + 10</b></p>
<ol>
<li>Paranteze: 3x − 6 + 4 = x + 10</li>
<li>Transport: 3x − x = 10 + 6 − 4</li>
<li>Reducere: 2x = 12</li>
<li>Împărțire la 2: <b>x = 6</b></li>
<li>Verificare: 3(6 − 2) + 4 = 12 + 4 = 16; 6 + 10 = 16 ✔️</li>
</ol>`
    },
    {
      type: "quiz",
      title: "Mini-test: principiile de echivalență",
      questions: [
        { type: "num", q: "Rezolvă: x − 9 = 4", answer: 13, explain: "Transport −9: x = 4 + 9 = 13." },
        { type: "num", q: "Rezolvă: 5x = −35", answer: -7, explain: "Împart la 5: x = −7." },
        { type: "tf", q: "Se pot înmulți ambii membri cu 0.", answer: false, explain: "Al doilea principiu este valabil doar pentru numere diferite de zero." }
      ]
    },
    {
      type: "text",
      title: "Determinate, imposibile, nedeterminate",
      html: `<p>Când ajungi la forma normală <b>ax = b</b>:</p>
<table>
<tr><th>Caz</th><th>Exemplu</th><th>Soluții</th></tr>
<tr><td>a ≠ 0 → <b>determinată</b></td><td>4x = 12</td><td>una singură: x = 3</td></tr>
<tr><td>a = 0, b ≠ 0 → <b>imposibilă</b></td><td>0x = 5</td><td>niciuna: niciun număr înmulțit cu 0 nu dă 5</td></tr>
<tr><td>a = 0, b = 0 → <b>nedeterminată</b></td><td>0x = 0</td><td>o infinitate: este o identitate</td></tr>
</table>
<p>Exemplu de ecuație imposibilă: x + 3 = x + 5 → 0x = 2. Exemplu de ecuație nedeterminată: 2(x + 1) = 2x + 2 → 0x = 0.</p>`
    },
    {
      type: "widget",
      title: "Clasifică ecuațiile",
      widget: "classify",
      options: { groups: ["Determinată", "Imposibilă", "Nedeterminată"], items: [
        ["3x = 12", 0],
        ["0x = 7", 1],
        ["0x = 0", 2],
        ["x + 1 = x + 4", 1],
        ["2x + 2 = 2(x + 1)", 2],
        ["5x − 1 = 9", 0],
        ["4(x − 1) = 4x", 1],
        ["x/2 = 3", 0]
      ] },
      caption: "Redu la forma normală ax = b și uită-te la a și b."
    },
    {
      type: "example",
      title: "Exemplu practic: problema biletelor",
      html: `<p>O clasă merge la muzeu. Biletul întreg costă <b>8 €</b>, cel redus pentru elevi <b>5 €</b>. Sunt 2 profesori (bilet întreg) și se cheltuiesc în total <b>131 €</b>. Câți elevi sunt?</p>
<ol>
<li><b>Necunoscuta</b>: x = numărul de elevi.</li>
<li><b>Ecuația</b>: 5x + 2·8 = 131 → 5x + 16 = 131</li>
<li><b>Rezolvare</b>: 5x = 115 → x = <b>23</b> elevi.</li>
<li><b>Verificare</b>: 23·5 + 16 = 115 + 16 = 131 ✔️ (iar 23 este un număr întreg pozitiv, deci acceptabil).</li>
</ol>`
    },
    {
      type: "example",
      title: "Exemplu practic: vârsta",
      html: `<p>Marco are de 3 ori vârsta fiicei sale Sofia. Peste 12 ani va avea dublul vârstei lui Sofia. Ce vârstă au?</p>
<ul>
<li>Vârsta lui Sofia = x; vârsta lui Marco = 3x.</li>
<li>Peste 12 ani: 3x + 12 = 2(x + 12)</li>
<li>3x + 12 = 2x + 24 → x = <b>12</b>. Sofia are 12 ani, Marco <b>36</b>.</li>
<li>Verificare: peste 12 ani 48 și 24, iar 48 = 2·24 ✔️</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Semnul „=”",
      html: `<p>Semnul <b>=</b> a fost inventat de medicul și matematicianul galez <b>Robert Recorde</b> în 1557, în cartea <i>The Whetstone of Witte</i>. El a scris că alesese două linii paralele de aceeași lungime „pentru că nicio pereche de lucruri nu poate fi mai egală”. Înaintea lui se scria în întregime „este egal cu” (în latină <i>aequales</i>, prescurtat „ae”).</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Epitaful lui Diofant",
      html: `<p>O ghicitoare grecească străveche povestește viața matematicianului <b>Diofant</b>: „Copilăria lui a durat 1/6 din viață; după 1/12 i-a crescut barba; după 1/7 s-a căsătorit; după 5 ani i s-a născut un fiu, care a trăit jumătate din anii tatălui; tatăl a murit la 4 ani după fiu.” Ecuația: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x → <b>x = 84</b>. Iar încă din <b>papirusul Rhind</b> (Egipt, aproximativ 1650 î.Hr.) există probleme „aha” care sunt adevărate ecuații de gradul întâi: „o cantitate și a șaptea parte din ea fac 19”.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a rezolva ecuațiile",
      intro: "Transportul cu schimbarea semnului ți se pare magie? Iată de unde vine, cu metode folosite în alte țări.",
      tabs: [
        {
          label: "⚖️ Balanța",
          html: `<p>Gândește-te la ecuație ca la o <b>balanță cu două talere</b> în echilibru. Literele x sunt săculeți misterioși, toți de aceeași greutate, numerele sunt greutăți mici de 1.</p>
<ul>
<li>Poți <b>scoate aceeași greutate</b> de pe ambele talere (principiul 1).</li>
<li>Poți <b>împărți la jumătate</b> ambele talere (principiul 2).</li>
</ul>
<p>„A transporta schimbând semnul” este doar o scurtătură: dacă scoți 3 greutăți mici de pe ambele talere, dispare +3 din stânga și apare un −3 în dreapta!</p>
<p>3x + 2 = x + 10 → scot x de pe ambele → 2x + 2 = 10 → scot 2 → 2x = 8 → împart la jumătate → <b>x = 4</b>.</p>`
        },
        {
          label: "🇸🇬 Modelul cu bare din Singapore",
          html: `<p>În Singapore, una dintre țările cu cele mai bune rezultate la matematică, problemele se rezolvă cu <b>bare</b> chiar înainte de a folosi literele.</p>
<p>„Luca are de 3 ori mai multe abțibilduri decât Anna; împreună au 48.” Desenează o bară pentru Anna și 3 bare egale pentru Luca: în total <b>4 bare = 48</b>, deci o bară = 12. Anna are 12 abțibilduri, Luca 36. În algebră: x + 3x = 48 → 4x = 48 → x = 12.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<text x="20" y="60" font-size="20" fill="#1f2937" font-weight="bold">Anna</text>
<rect x="110" y="35" width="100" height="40" fill="#f472b6" stroke="#9d174d" stroke-width="3"/>
<text x="160" y="62" font-size="18" text-anchor="middle" fill="#fff">x</text>
<text x="20" y="130" font-size="20" fill="#1f2937" font-weight="bold">Luca</text>
<rect x="110" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="210" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="310" y="105" width="100" height="40" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="160" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text><text x="260" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text><text x="360" y="132" font-size="18" text-anchor="middle" fill="#fff">x</text>
<path d="M430 35 Q450 90 430 145" fill="none" stroke="#1f2937" stroke-width="3"/>
<text x="460" y="97" font-size="24" fill="#1f2937" font-weight="bold">48</text>
<text x="300" y="195" font-size="20" text-anchor="middle" fill="#166534" font-weight="bold">4 bare = 48 → 1 bară = 12</text>
</svg>`
        },
        {
          label: "🇬🇧 Mașina în sens invers",
          html: `<p>În școlile englezești se folosesc <b>function machines</b> (mașini de funcții): necunoscuta intră într-o mașină care face niște operații.</p>
<p>x → <b>× 3</b> → <b>+ 5</b> → 26</p>
<p>Pentru a-l găsi pe x, pornești mașina <b>în sens invers</b>, cu operațiile <b>inverse</b> și în ordine inversă:</p>
<p>26 → <b>− 5</b> → 21 → <b>: 3</b> → <b>7</b>. Deci x = 7.</p>
<p>Este exact ceea ce faci cu principiile de echivalență: pentru a „desface” un +5 scazi 5, pentru a desface un ×3 împarți la 3. Este ca atunci când te dezbraci: ultimul lucru pe care l-ai îmbrăcat (geaca) este primul pe care îl dai jos!</p>`
        },
        {
          label: "🐸 Pe axă",
          html: `<p>Rezolvă <b>x + 7 = 3</b> pe axă: de la ce număr trebuie să pornesc ca să ajung la 3 făcând o săritură de +7? Pornește de la 3 și întoarce-te cu 7: ajungi la <b>−4</b>. Deci x = −4. Încearcă cu widgetul: pune plecarea la 3 și săritura la 7, apoi apasă „−”.</p>`,
          widget: "numberLine",
          options: { min: -10, max: 10, step: 7, start: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta ecuațiilor de gradul întâi",
      nodes: [
        { id: "uguaglianza", label: "Egalitate", x: 50, y: 6, color: "#64748b", html: "Două expresii legate prin semnul =.", why: "Semnul = a fost introdus de Robert Recorde în 1557. O egalitate între expresii literale poate fi mereu adevărată sau adevărată doar uneori." },
        { id: "identita", label: "Identitate", x: 20, y: 26, color: "#94a3b8", html: "Egalitate adevărată pentru orice valoare a literelor.", why: "Provine din proprietățile operațiilor (de ex. distributivitatea): formulele calculului literal sunt identități." },
        { id: "equazione", label: "Ecuație", x: 70, y: 26, color: "#2563eb", html: "Egalitate adevărată doar pentru anumite valori ale necunoscutei.", why: "Din latinescul <i>aequatio</i>, „a face egal”. Probleme de acest fel se găsesc deja în papirusul Rhind (aproximativ 1650 î.Hr.) și în tăblițele babiloniene." },
        { id: "principio1", label: "Principiul 1", x: 45, y: 50, color: "#16a34a", html: "Se poate aduna sau scădea aceeași cantitate din ambii membri.", why: "Corespunde lui <i>al-jabr</i> și <i>al-muqābala</i> ale lui al-Khwārizmī (aproximativ 820 d.Hr.): „a pune la loc” termenii scăzuți și „a echilibra” pe cei egali." },
        { id: "principio2", label: "Principiul 2", x: 80, y: 50, color: "#f59e0b", html: "Se pot înmulți sau împărți membrii cu același număr ≠ 0.", why: "Dacă două cantități sunt egale, rămân egale și dublurile lor, jumătățile lor… Este unul dintre axiomele („noțiunile comune”) lui Euclid. Zero este exclus pentru că împărțirea la zero nu are sens." },
        { id: "trasporto", label: "Regula transportului", x: 20, y: 70, color: "#22c55e", html: "Un termen trece în celălalt membru schimbându-și semnul.", why: "Este o scurtătură a principiului 1: adunarea opusului în ambii membri face ca termenul să „dispară” dintr-o parte și să „apară” cu semn opus în cealaltă." },
        { id: "forma", label: "Forma normală ax = b", x: 60, y: 72, color: "#a855f7", html: "Punctul de sosire după transformări.", why: "Orice ecuație de gradul întâi poate fi redusă la această formă; de aici se vede imediat dacă este determinată, imposibilă sau nedeterminată." },
        { id: "casi", label: "Determinată / imposibilă / nedeterminată", x: 60, y: 92, color: "#ef4444", html: "O soluție / niciuna / o infinitate.", why: "Depinde de a și b: dacă a ≠ 0 pot împărți; dacă a = 0 membrul întâi este mereu 0, deci totul depinde de b." },
        { id: "problemi", label: "Probleme", x: 20, y: 92, color: "#0ea5e9", html: "A traduce o situație reală într-o ecuație.", why: "Este motivul pentru care au apărut ecuațiile: împărțirea moștenirilor, calculul taxelor, prețurilor, distanțelor. Liber Abaci al lui Fibonacci (1202) este plin de probleme comerciale rezolvate astfel." }
      ],
      edges: [
        ["uguaglianza", "identita", "mereu adevărată"],
        ["uguaglianza", "equazione", "uneori adevărată"],
        ["equazione", "principio1", "se transformă cu"],
        ["equazione", "principio2", "se transformă cu"],
        ["principio1", "trasporto", "scurtătură"],
        ["principio1", "forma", "duce la"],
        ["principio2", "forma", "duce la"],
        ["forma", "casi", "decide"],
        ["problemi", "equazione", "se traduc în"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: rezolvă și verifică",
      questions: [
        { type: "num", q: "Rezolvă: 7x − 4 = 3x + 20", answer: 6, explain: "7x − 3x = 20 + 4 → 4x = 24 → x = 6." },
        { type: "num", q: "Rezolvă: x/3 + 2 = 6", answer: 12, explain: "x/3 = 4 → x = 12." },
        { type: "mc", q: "Ecuația 2(x + 3) = 2x + 1 este…", options: ["determinată", "imposibilă", "nedeterminată"], answer: 1, explain: "2x + 6 = 2x + 1 → 0x = −5: imposibilă." }
      ]
    }
  ],
  glossary: [
    { t: "Ecuație", d: "Egalitate între două expresii verificată doar pentru anumite valori ale necunoscutei." },
    { t: "Identitate", d: "Egalitate adevărată pentru orice valoare a literelor." },
    { t: "Necunoscută", d: "Litera a cărei valoare o căutăm." },
    { t: "Membri", d: "Cele două expresii din stânga (primul) și din dreapta (al doilea) semnului egal." },
    { t: "Soluție (rădăcină)", d: "Valoarea necunoscutei care face ecuația adevărată." },
    { t: "Ecuații echivalente", d: "Ecuații care au aceleași soluții." },
    { t: "Principii de echivalență", d: "Reguli care transformă o ecuație într-una echivalentă." },
    { t: "Forma normală", d: "Forma ax = b a unei ecuații de gradul întâi." },
    { t: "Verificare", d: "Controlul soluției prin înlocuirea ei în ecuație." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre acestea este o identitate?", options: ["x + 2 = 5", "3(x + 1) = 3x + 3", "2x = 0"], answer: 1, explain: "Este adevărată pentru orice x datorită proprietății distributive." },
      { type: "num", q: "Rezolvă: 4x + 7 = 31", answer: 6, explain: "4x = 24 → x = 6." },
      { type: "num", q: "Rezolvă: 2(x − 5) = x + 3", answer: 13, explain: "2x − 10 = x + 3 → x = 13." },
      { type: "num", q: "Rezolvă: −3x + 2 = 14", answer: -4, explain: "−3x = 12 → x = −4." },
      { type: "num", q: "Rezolvă: x/4 − 1 = x/6", answer: 12, explain: "Înmulțesc cu 12: 3x − 12 = 2x → x = 12." },
      { type: "tf", q: "Cu primul principiu se poate scădea același număr din ambii membri.", answer: true, explain: "Chiar aceasta este enunțul primului principiu." },
      { type: "mc", q: "O ecuație care se reduce la 0x = 0 este…", options: ["imposibilă", "determinată", "nedeterminată"], answer: 2, explain: "Orice număr o verifică: o infinitate de soluții." },
      { type: "order", q: "Pune în ordine pașii pentru rezolvarea unei ecuații.", items: ["Eliminarea parantezelor", "Eliminarea numitorilor", "Transportul termenilor", "Reducerea la forma ax = b", "Împărțirea la coeficient", "Verificarea"], explain: "Este metoda standard în 6 pași." },
      { type: "num", q: "Suma a trei numere consecutive este 72. Care este cel mai mic?", answer: 23, explain: "x + (x + 1) + (x + 2) = 72 → 3x + 3 = 72 → x = 23." },
      { type: "num", q: "Perimetrul unui dreptunghi este 50 cm; lungimea depășește lățimea cu 7 cm. Cât măsoară lățimea?", answer: 9, unit: "cm", explain: "2(l + 7) + 2l = 50 → 4l + 14 = 50 → l = 9." },
      { type: "mc", q: "Pentru a elimina numitorii din x/2 + x/5 = 7 se înmulțește totul cu…", options: ["7", "10", "2"], answer: 1, explain: "C.m.m.m.c. al lui 2 și 5 este 10." },
      { type: "text", q: "Cine a inventat semnul „=” în 1557?", answer: ["robert recorde", "recorde"], explain: "Galezul Robert Recorde." }
    ],
    gen: [["equation", 3]]
  }
});

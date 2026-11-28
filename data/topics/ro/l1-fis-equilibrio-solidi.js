TOPIC('ro', {
  id: "l1-fis-equilibrio-solidi",
  title: "Echilibrul solidelor",
  intro: "De ce rămâne o ladă nemișcată pe o rampă? De ce poate un copil ușor să ridice un adult pe un balansoar? De ce se înclină Turnul din Pisa, dar nu cade? În spatele tuturor acestor întrebări stau două idei simple și foarte puternice: <b>suma forțelor</b> și <b>suma momentelor</b>. În această lecție învățăm să recunoaștem când un corp este în <b>echilibru</b> și să folosim planul înclinat și pârghiile, «mașinile simple» cu care omenirea ridică greutăți de milenii.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Ce înseamnă «a fi în echilibru»",
      html: `<p>Un corp este în <b>echilibru static</b> când <b>rămâne în repaus</b> deși este supus unor forțe. O forță este o mărime <b>vectorială</b>: are o valoare (în <b>newtoni</b>, N), o direcție și un sens. De aceea nu ajunge să adunăm numere: trebuie să adunăm <b>vectori</b>.</p>
<p>Pentru un <b>punct material</b> (un corp atât de mic, sau atât de compact, încât poate fi tratat ca un punct) condiția de echilibru este una singură:</p>
<p style="text-align:center"><b>rezultanta forțelor aplicate este nulă: ΣF = 0</b></p>
<p>Forțele pe care le întâlnim cel mai des sunt:</p>
<ul>
<li><b>greutatea</b> G = m·g, îndreptată spre centrul Pământului, cu g ≈ 9,8 m/s² (adesea se rotunjește la 10 pentru calculele în minte). O masă de 50 kg are greutatea G = 50 × 9,8 = 490 N. Atenție: <b>masa</b> se măsoară în kg și este aceeași oriunde, <b>greutatea</b> se măsoară în N și pe Lună este de aproximativ șase ori mai mică;</li>
<li><b>reacțiunea legăturii</b>: forța cu care un reazem, un fir sau un perete împiedică o mișcare. O masă nu «vrea» să te lase să cazi: se deformează infim și împinge în sus cu o forță egală cu greutatea obiectului;</li>
<li><b>forța de frecare statică</b>, care se opune alunecării. Are o valoare maximă F<sub>s</sub> = μ<sub>s</sub>·N, unde N este forța de apăsare perpendiculară pe suprafață, iar μ<sub>s</sub> coeficientul de frecare statică (depinde de cele două suprafețe).</li>
</ul>
<p>Exemplu: o carte pe masă. Greutatea G este îndreptată în jos, reacțiunea N în sus: G = N, rezultanta este zero și cartea rămâne în repaus. Dacă, în schimb, te lovești de un zid în timp ce împingi un cărucior, zidul îți răspunde cu o forță egală și contrară (principiul al treilea al dinamicii), dar aceasta acționează asupra unui alt corp: nu trebuie confundată cu perechea greutate/reacțiune a reazemului.</p>`
    },
    {
      type: "example",
      title: "Exemplu: o lampă atârnată de două fire",
      html: `<p>O lampă cu masa de 4 kg este suspendată de tavan cu un singur fir vertical. Cât este tensiunea T din fir?</p>
<ol>
<li>Greutatea este G = 4 × 9,8 = 39,2 N în jos.</li>
<li>Punctul material (lampa) este în repaus: ΣF = 0, deci tensiunea trebuie să echilibreze greutatea: T = 39,2 N în sus.</li>
</ol>
<p>Dacă aceeași lampă este ținută de <b>două fire identice</b> înclinate, fiecare fir trebuie să furnizeze o componentă verticală de 19,6 N, dar forța totală de-a lungul firului este <b>mai mare</b> de 19,6 N, pentru că o parte din tensiune «trage în lateral». Cu cât firele sunt mai aproape de orizontală, cu atât tensiunea crește: de aceea o funie întinsă orizontal, cu o greutate la mijloc, nu poate deveni niciodată perfect dreaptă fără să se rupă.</p>`
    },
    {
      type: "svg",
      title: "Planul înclinat și descompunerea greutății",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polygon points="60,260 540,260 540,60" fill="#e2e8f0" stroke="#334155" stroke-width="3"/>
<text x="548" y="170" font-size="18" fill="#334155" font-weight="bold">h</text>
<text x="280" y="285" font-size="16" fill="#334155">baza b</text>
<text x="190" y="190" font-size="16" fill="#334155" transform="rotate(-22 190 190)">lungimea l</text>
<path d="M130 260 A70 70 0 0 0 126 238" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="140" y="250" font-size="18" fill="#dc2626" font-weight="bold">α</text>
<g transform="translate(300 160) rotate(-22.6)">
<rect x="-30" y="-40" width="60" height="40" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
</g>
<circle cx="292" cy="141" r="4" fill="#111827"/>
<line x1="292" y1="141" x2="292" y2="228" stroke="#16a34a" stroke-width="4"/>
<polygon points="292,236 285,222 299,222" fill="#16a34a"/>
<text x="262" y="250" font-size="18" fill="#16a34a" font-weight="bold">G</text>
<line x1="292" y1="141" x2="262" y2="154" stroke="#2563eb" stroke-width="4"/>
<polygon points="256,157 267,147 270,161" fill="#2563eb"/>
<text x="100" y="140" font-size="16" fill="#2563eb" font-weight="bold">G∥ = G sin α</text>
<line x1="292" y1="141" x2="322" y2="215" stroke="#9333ea" stroke-width="4"/>
<polygon points="324,221 314,208 328,203" fill="#9333ea"/>
<text x="345" y="225" font-size="16" fill="#9333ea" font-weight="bold">G⊥ = G cos α</text>
<text x="20" y="30" font-size="17" fill="#1f2937">Greutatea se descompune într-o parte de-a lungul planului și una perpendiculară.</text>
</svg>`,
      caption: "Componenta paralelă G∥ tinde să facă corpul să alunece; componenta perpendiculară G⊥ este echilibrată de reacțiunea planului. Unghiul α este cel dintre plan și orizontală."
    },
    {
      type: "text",
      title: "Planul înclinat",
      html: `<p><b>Planul înclinat</b> este o suprafață plană care formează un unghi α cu orizontala. Asupra corpului aflat pe el acționează greutatea G, verticală. Este convenabil să o descompunem pe două axe: una <b>paralelă</b> cu planul și una <b>perpendiculară</b>.</p>
<ul>
<li>G<sub>⊥</sub> = G·cos α: apasă corpul pe plan și este echilibrată de reacțiunea N = G cos α;</li>
<li>G<sub>∥</sub> = G·sin α: trage corpul în josul pantei.</li>
</ul>
<p>Dacă planul este <b>neted</b> (fără frecare), pentru a ține corpul în repaus trebuie o forță F, paralelă cu planul, care să echilibreze G<sub>∥</sub>:</p>
<p style="text-align:center"><b>F = G·sin α = G·h/l</b></p>
<p>unde h este înălțimea planului și l lungimea lui (sin α = h/l în triunghiul dreptunghic). Deoarece h &lt; l, forța necesară este <b>mai mică decât greutatea</b>: planul înclinat «economisește forță», dar trebuie parcurs un drum mai lung. Lucrul mecanic (forță × deplasare) pentru a ajunge la aceeași înălțime rămâne același, dacă frecarea este neglijabilă.</p>
<p>Cu frecare, corpul rămâne în repaus atâta timp cât G sin α ≤ μ<sub>s</sub>·G cos α, adică atâta timp cât <b>tan α ≤ μ<sub>s</sub></b>. Peste unghiul critic corpul începe să alunece, iar masa nu contează: condiția nu depinde de greutate!</p>`
    },
    {
      type: "example",
      title: "Exemplu: rampa pentru furgonetă",
      html: `<p>Trebuie să încarci într-o furgonetă un frigider de 80 kg. Platforma este la 1 m de sol și folosești o rampă de 4 m (neglijează frecarea).</p>
<ol>
<li>Greutatea: G = 80 × 9,8 = 784 N.</li>
<li>Forța paralelă necesară pentru a-l ține în repaus (sau a urca cu viteză constantă): F = G·h/l = 784 × 1/4 = <b>196 N</b>, adică ca și cum ai ridica aproximativ 20 kg.</li>
<li>Cu o rampă de 8 m forța scade la 98 N, dar trebuie să împingi pe un drum de două ori mai lung.</li>
</ol>
<p>Este același principiu ca la potecile în serpentină din munți, la scările cu pantă lină și la pasurile alpine: se mărește lungimea pentru a micșora efortul.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: forțe și plan înclinat",
      questions: [
        { type: "mc", q: "Un punct material este în echilibru când…", options: ["suma modulelor forțelor este nulă", "rezultanta vectorială a forțelor este nulă", "acționează o singură forță"], answer: 1, explain: "Forțele sunt vectori: ΣF = 0 înseamnă că suma lor vectorială este nulă, chiar dacă modulele individuale nu sunt nule." },
        { type: "num", q: "Un corp de 10 kg se află pe un plan înclinat neted de 30°. Cât este (în N, cu g = 9,8 m/s²) forța paralelă cu planul care îl ține în repaus?", answer: 49, tol: 0.5, unit: "N", explain: "G = 98 N; F = G sin 30° = 98 × 0,5 = 49 N." },
        { type: "tf", q: "Pe un plan cu frecare, unghiul maxim la care un corp rămâne în repaus depinde de masa lui.", answer: false, explain: "Rămâne în repaus atâta timp cât tan α ≤ μs: masa se simplifică și nu contează." }
      ]
    },
    {
      type: "text",
      title: "Momentul unei forțe",
      html: `<p>A împinge o ușă aproape de balamale este foarte greu; aproape de clanță este ușor. Forța este aceeași, dar efectul <b>de rotație</b> se schimbă. Pentru a-l descrie se introduce <b>momentul unei forțe</b> față de un punct O (polul sau punctul de sprijin):</p>
<p style="text-align:center"><b>M = F · b</b></p>
<p>unde <b>b</b> este <b>brațul</b>: distanța <b>perpendiculară</b> dintre punctul O și <b>dreapta suport</b> a forței. Se măsoară în <b>newton metri</b> (N·m).</p>
<ul>
<li>Dacă forța este perpendiculară pe bară, brațul coincide cu distanța până la punctul de sprijin;</li>
<li>dacă forța trece prin punctul de sprijin, brațul este zero și momentul este nul: a împinge ușa în planul ușii nu o face să se rotească;</li>
<li>momentul are un <b>sens</b>: prin convenție este pozitiv dacă produce rotație în sens antiorar, negativ dacă în sens orar.</li>
</ul>
<p>Un <b>cuplu de forțe</b> este format din două forțe egale, paralele și de sensuri opuse, cu drepte suport distincte: rezultanta este nulă, dar momentul nu (are valoarea F·d, cu d distanța dintre drepte). Este ceea ce folosești ca să rotești un volan cu două mâini sau să deșurubezi un dop.</p>
<p>Un <b>corp rigid</b> (care nu se deformează) este în echilibru dacă sunt valabile <b>două</b> condiții simultan:</p>
<p style="text-align:center"><b>ΣF = 0 (nu se deplasează) &nbsp;și&nbsp; ΣM = 0 (nu se rotește)</b></p>`
    },
    {
      type: "svg",
      title: "Pârghia: forța activă, rezistența și punctul de sprijin",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<polygon points="300,215 270,260 330,260" fill="#475569"/>
<g transform="rotate(0 300 210)"><rect x="60" y="200" width="480" height="14" rx="4" fill="#92400e"/></g>
<rect x="95" y="140" width="70" height="60" rx="6" fill="#ef4444"/>
<text x="130" y="178" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">sarcină</text>
<line x1="130" y1="95" x2="130" y2="135" stroke="#ef4444" stroke-width="4"/>
<polygon points="130,139 122,124 138,124" fill="#ef4444"/>
<text x="130" y="85" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">rezistența Fr</text>
<line x1="470" y1="120" x2="470" y2="196" stroke="#16a34a" stroke-width="4"/>
<polygon points="470,200 462,185 478,185" fill="#16a34a"/>
<text x="470" y="108" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">forța activă Fa</text>
<text x="300" y="285" font-size="17" text-anchor="middle" fill="#334155" font-weight="bold">punct de sprijin</text>
<line x1="130" y1="232" x2="300" y2="232" stroke="#2563eb" stroke-width="3"/>
<line x1="300" y1="232" x2="470" y2="232" stroke="#9333ea" stroke-width="3"/>
<text x="215" y="250" font-size="16" text-anchor="middle" fill="#2563eb" font-weight="bold">br</text>
<text x="385" y="250" font-size="16" text-anchor="middle" fill="#9333ea" font-weight="bold">ba</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#1f2937" font-weight="bold">Echilibru: Fa · ba = Fr · br</text>
</svg>`,
      caption: "O pârghie de genul întâi: punctul de sprijin este la mijloc. Brațul ba este dublul lui br, deci ajunge o forță activă jumătate din sarcină."
    },
    {
      type: "text",
      title: "Pârghiile",
      html: `<p><b>Pârghia</b> este o bară rigidă liberă să se rotească în jurul unui punct fix, <b>punctul de sprijin</b>. Asupra ei acționează o <b>forță activă</b> F<sub>a</sub> (cea pe care o aplicăm) și o <b>forță rezistentă</b> F<sub>r</sub> (sarcina de ridicat sau de învins). Pârghia este în echilibru când momentele se echilibrează:</p>
<p style="text-align:center"><b>F<sub>a</sub> · b<sub>a</sub> = F<sub>r</sub> · b<sub>r</sub></b></p>
<p>De aici <b>câștigul</b> pârghiei: F<sub>a</sub>/F<sub>r</sub> = b<sub>r</sub>/b<sub>a</sub>. Dacă brațul forței active este mai mare decât cel al rezistenței, pârghia este <b>avantajoasă</b> (se economisește forță); dacă este mai mic, este <b>dezavantajoasă</b> (se pierde forță, dar se câștigă viteză și amplitudine de mișcare).</p>
<table>
<tr><th>Gen</th><th>Poziție</th><th>Exemple</th><th>Avantaj</th></tr>
<tr><td><b>1</b></td><td>punctul de sprijin între forță și rezistență</td><td>balansoar, foarfece, clește, rangă</td><td>poate fi avantajoasă, dezavantajoasă sau indiferentă</td></tr>
<tr><td><b>2</b></td><td>rezistența între punctul de sprijin și forță</td><td>roabă, spărgător de nuci, desfăcător de sticle, tăietor de unghii</td><td>întotdeauna avantajoasă</td></tr>
<tr><td><b>3</b></td><td>forța între punctul de sprijin și rezistență</td><td>pensetă, cleștele pentru gheață, undiță, antebraț</td><td>întotdeauna dezavantajoasă</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Exemplu: balansoarul în echilibru",
      html: `<p>Un adult de 60 kg stă la 1 m de centrul unui balansoar. La ce distanță trebuie să se așeze un copil de 20 kg ca să-l echilibreze?</p>
<ol>
<li>Greutățile: 588 N (adultul) și 196 N (copilul): dar ajunge să folosim masele, pentru că g se simplifică.</li>
<li>Echilibrul momentelor: 60 · 1 = 20 · x</li>
<li>x = 60/20 = <b>3 m</b>.</li>
</ol>
<p>Copilul cântărește o treime și stă la o distanță de trei ori mai mare: produsul «greutate × distanță» este același. Dacă balansoarul are în total doar 4 m lungime (2 m pe fiecare parte), copilul nu ar reuși să echilibreze adultul de acolo: adultul ar trebui să se apropie de punctul de sprijin (0,67 m).</p>`
    },
    {
      type: "widget",
      title: "De ce gen este pârghia?",
      widget: "classify",
      options: { groups: ["Genul 1 (sprijin la mijloc)", "Genul 2 (rezistența la mijloc)", "Genul 3 (forța la mijloc)"], items: [
        ["balansoar", 0],
        ["foarfece", 0],
        ["clește", 0],
        ["roabă", 1],
        ["spărgător de nuci", 1],
        ["desfăcător de sticle cu pârghie", 1],
        ["pensetă", 2],
        ["cleștele pentru gheață", 2],
        ["undiță", 2]
      ] },
      caption: "Găsește cele trei puncte (sprijin, forță, rezistență) și vezi care se află la mijloc."
    },
    {
      type: "curiosity",
      title: "«Dați-mi un punct de sprijin și voi ridica lumea»",
      html: `<p>Fraza este atribuită lui <b>Arhimede din Siracuza</b> (secolul al III-lea î.Hr.), care în tratatul <i>Despre echilibrul planelor</i> a demonstrat primul, cu rigoare matematică, legea pârghiei: două greutăți sunt în echilibru când sunt invers proporționale cu distanțele față de punctul de sprijin. Citatul ne-a ajuns din surse mai târzii (Pappus din Alexandria), dar exprimă bine ideea: cu un braț suficient de lung, o forță mică echilibrează una uriașă. Ca să ridice Pământul, însă, Arhimede ar fi trebuit să mișce pârghia pe distanțe astronomice: câștigul de forță se plătește întotdeauna cu o deplasare mai mare.</p>`
    },
    {
      type: "curiosity",
      title: "Corpul tău este plin de pârghii",
      html: `<p>Cotul este punctul de sprijin, bicepsul se prinde la câțiva centimetri de cot, în timp ce mâna care susține o greutate este la aproximativ 30 cm: este o pârghie de <b>genul 3</b>, dezavantajoasă ca forță. Pentru a ține în mână o greutate de 5 kg (49 N) cu brațul îndoit, bicepsul trebuie să exercite o forță de câteva ori mai mare. În schimb se obține o viteză și o amplitudine mari de mișcare: o mică scurtare a mușchiului deplasează mâna mult. Piciorul care se ridică pe vârfuri este, în schimb, o pârghie de genul 2, avantajoasă. Chiar și mestecatul cu mandibula și aprobarea din cap folosesc pârghii!</p>`
    },
    {
      type: "text",
      title: "Centrul de greutate și tipurile de echilibru",
      html: `<p><b>Centrul de greutate</b> este punctul în care se poate considera aplicată întreaga greutate a unui corp. Într-un corp omogen și simetric coincide cu centrul geometric (în centrul unui disc, al unui cub, al unei sfere). Un corp atârnat de un fir rămâne în repaus când centrul de greutate se află pe verticala punctului de suspensie; un corp așezat nu cade atâta timp cât <b>verticala care trece prin centrul de greutate cade în interiorul bazei de sprijin</b>.</p>
<p>Pentru un corp care se poate mișca sau roti, după o mică deplasare față de echilibru se disting trei cazuri:</p>
<ul>
<li><b>echilibru stabil</b>: corpul tinde să revină în poziția inițială (o bilă în fundul unui castron; centrul de greutate urcă dacă o deplasezi);</li>
<li><b>echilibru instabil</b>: corpul se îndepărtează și mai mult (o bilă în vârful unui deal; centrul de greutate coboară);</li>
<li><b>echilibru indiferent</b>: corpul rămâne în noua poziție (o sferă pe o masă plană; centrul de greutate nu își schimbă înălțimea).</li>
</ul>
<p>Cu cât centrul de greutate este mai <b>jos</b> și baza mai <b>largă</b>, cu atât echilibrul este mai stabil: de aceea mașinile de curse sunt joase și late, un camion încărcat sus se răstoarnă mai ușor în curbă, iar în tramvai ții mai bine echilibrul cu picioarele depărtate.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege momentul",
      intro: "Conceptul de moment este adesea cel mai greu din lecție. Iată patru drumuri diferite ca să-l înțelegi.",
      tabs: [
        {
          label: "🚪 Ușa",
          html: `<p>Încearcă să închizi o ușă împingând la 5 cm de balamale: este nevoie de o forță enormă. Împinge la clanță, la 80 cm, și ajunge un deget. <b>Momentul</b> M = F·b măsoară această diferență: dacă brațul b devine de 16 ori mai mare, aceeași rotație se obține cu o forță de 16 ori mai mică. De aceea clanțele sunt în partea opusă balamalelor, iar cheile fixe au mânerul lung.</p>`
        },
        {
          label: "⚖️ Greutate × distanță",
          html: `<p>Imaginează-ți o bară cu săculeți atârnați la distanțe diferite de centru. Nu contează doar <b>cât cântărește</b> un săculeț, ci și <b>unde</b> este atârnat: se înmulțește greutatea cu distanța. Dacă în stânga ai 3 kg la 4 cm (3 × 4 = 12) și în dreapta 2 kg la 6 cm (2 × 6 = 12), «punctajele» sunt egale și bara este în echilibru. Dacă în dreapta pui 2 kg la 5 cm, punctajul este 10 și câștigă stânga.</p>`,
          widget: "match",
          options: { pairs: [["3 kg la 4 cm", "moment 12"], ["5 kg la 2 cm", "moment 10"], ["1 kg la 9 cm", "moment 9"], ["4 kg la 5 cm", "moment 20"]] }
        },
        {
          label: "🏗️ Brațul perpendicular",
          html: `<p>Brațul este distanța <b>perpendiculară</b> dintre punctul de sprijin și dreapta forței, nu o distanță oarecare. Dacă împingi o cheie fixă oblic, doar componenta perpendiculară pe mâner învârte șurubul. A împinge de-a lungul mânerului, spre șurub, nu îl rotește deloc (braț zero). De aceea momentul se poate scrie și M = F·d·sin θ, unde θ este unghiul dintre forță și segmentul care merge de la punctul de sprijin la punctul de aplicație.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<circle cx="90" cy="130" r="16" fill="#475569"/>
<text x="90" y="170" font-size="16" text-anchor="middle" fill="#1f2937">șurub</text>
<rect x="90" y="124" width="320" height="12" rx="5" fill="#92400e"/>
<line x1="410" y1="130" x2="470" y2="50" stroke="#16a34a" stroke-width="4"/>
<polygon points="474,45 456,53 468,63" fill="#16a34a"/>
<text x="480" y="48" font-size="17" fill="#15803d" font-weight="bold">F</text>
<line x1="410" y1="130" x2="410" y2="62" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 3"/>
<text x="360" y="72" font-size="16" fill="#2563eb" font-weight="bold">F sin θ</text>
<text x="300" y="200" font-size="17" text-anchor="middle" fill="#1f2937">Doar componenta perpendiculară pe mâner produce rotația.</text>
</svg>`
        },
        {
          label: "🔁 Momentul ca «cât se rotește»",
          html: `<p>O analogie utilă cu mișcarea de translație: forța face să <b>varieze viteza</b> unui corp, momentul face să <b>varieze rotația</b>. O forță nulă înseamnă nicio accelerație; un moment nul înseamnă nicio accelerație unghiulară. Un corp în echilibru este ca un corp care nu se mișcă, nu accelerează și nu se rotește: de aceea sunt necesare și ΣF = 0, și ΣM = 0.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta echilibrului solidelor",
      nodes: [
        { id: "equilibrio", label: "Echilibru static", x: 50, y: 6, color: "#64748b", html: "Un corp este în repaus și rămâne în repaus: nu se deplasează și nu se rotește.", why: "Este statica, prima ramură a fizicii tratată cu rigoare matematică, încă de Arhimede (secolul al III-lea î.Hr.) și apoi de Stevin și Galilei. Dacă un corp în repaus ar accelera, l-am vedea mișcându-se: echilibrul este condiția în care efectele forțelor se anulează reciproc." },
        { id: "forze", label: "Suma forțelor este nulă", x: 20, y: 28, color: "#2563eb", html: "ΣF = 0: corpul nu se deplasează.", why: "Decurge din principiul al doilea al dinamicii al lui Newton (1687): F = ma. Dacă rezultanta este zero, accelerația este zero. Iar dacă pornește din repaus, rămâne în repaus (principiul întâi, intuit deja de Galilei)." },
        { id: "momenti", label: "Suma momentelor este nulă", x: 80, y: 28, color: "#9333ea", html: "ΣM = 0: corpul nu se rotește.", why: "Pentru un corp extins nu ajunge să adunăm forțele: contează și punctele de aplicație. Momentul M = F·b măsoară capacitatea unei forțe de a produce rotația. Conceptul provine din legea pârghiei a lui Arhimede." },
        { id: "peso", label: "Greutatea și reacțiunile", x: 8, y: 52, color: "#16a34a", html: "G = mg, N, tensiuni, frecare.", why: "Greutatea este atracția gravitațională a Pământului (Newton, 1687); reacțiunile legăturilor decurg din principiul al treilea: orice acțiune are o reacțiune egală și contrară." },
        { id: "inclinato", label: "Plan înclinat", x: 32, y: 66, color: "#22c55e", html: "Descompunerea greutății: G sin α de-a lungul planului, G cos α perpendicular.", why: "Descompunerea vectorilor în componente este o aplicație a trigonometriei și a regulii paralelogramului. Galilei a studiat planul înclinat pentru a «încetini» căderea corpurilor și a o putea măsura." },
        { id: "leve", label: "Pârghii", x: 80, y: 56, color: "#f59e0b", html: "Fa·ba = Fr·br; trei genuri.", why: "Arhimede a demonstrat legea pârghiei în tratatul Despre echilibrul planelor (secolul al III-lea î.Hr.), pornind de la postulate de simetrie. Este un caz particular al condiției ΣM = 0." },
        { id: "baricentro", label: "Centrul de greutate", x: 56, y: 80, color: "#ef4444", html: "Punctul de aplicație al greutății totale.", why: "Arhimede l-a studiat pentru figuri plane (parabola, triunghiul). Un corp este stabil dacă verticala prin centrul de greutate cade în bază." },
        { id: "stabilita", label: "Stabil / instabil / indiferent", x: 20, y: 92, color: "#0ea5e9", html: "Ce se întâmplă după o mică perturbare.", why: "Depinde de energia potențială gravitațională: echilibrul este stabil acolo unde energia potențială este minimă (centrul de greutate este în cel mai jos punct posibil)." }
      ],
      edges: [["equilibrio", "forze", "condiția 1"], ["equilibrio", "momenti", "condiția 2"], ["forze", "peso", "forțe în joc"], ["peso", "inclinato", "se descompune"], ["momenti", "leve", "aplicație"], ["peso", "baricentro", "aplicată în"], ["baricentro", "stabilita", "determină"]]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Punct material: <b>ΣF = 0</b>. Corp rigid: <b>ΣF = 0 și ΣM = 0</b>.</li>
<li>Greutatea: <b>G = m g</b>. Componentele pe planul înclinat: <b>G∥ = G sin α</b>, <b>G⊥ = G cos α</b>.</li>
<li>Momentul: <b>M = F · b</b> (b = brațul, distanța perpendiculară față de dreapta suport).</li>
<li>Pârghia: <b>Fa · ba = Fr · br</b>. Genul 1: sprijinul la mijloc; genul 2: rezistența la mijloc; genul 3: forța la mijloc.</li>
<li>O mașină simplă <b>nu economisește lucru mecanic</b>: schimbă doar raportul forță / deplasare.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: momente, pârghii și echilibru",
      questions: [
        { type: "num", q: "O forță de 20 N acționează perpendicular la 0,5 m de punctul de sprijin. Cât este momentul (în N·m)?", answer: 10, unit: "N·m", explain: "M = F·b = 20 × 0,5 = 10 N·m." },
        { type: "mc", q: "Roaba este o pârghie de…", options: ["genul 1", "genul 2", "genul 3"], answer: 1, explain: "Punctul de sprijin este roata, sarcina se află la mijloc, forța este aplicată la mânere: rezistența între sprijin și forță, deci genul 2, întotdeauna avantajoasă." },
        { type: "mc", q: "O sferă așezată pe o masă orizontală se află în echilibru…", options: ["stabil", "instabil", "indiferent"], answer: 2, explain: "Dacă o muți, rămâne unde ai pus-o: centrul de greutate nu își schimbă înălțimea." },
        { type: "tf", q: "O forță care trece prin punctul de sprijin are moment nul.", answer: true, explain: "Brațul este zero: momentul M = F·0 = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Echilibru static", d: "Condiția unui corp în repaus, asupra căruia rezultanta forțelor și a momentelor este nulă." },
    { t: "Rezultantă", d: "Suma vectorială a tuturor forțelor care acționează asupra unui corp." },
    { t: "Greutate", d: "Forța cu care Pământul atrage un corp: G = m·g, în newtoni." },
    { t: "Reacțiunea legăturii", d: "Forță exercitată de un reazem, un fir sau un perete care împiedică o mișcare." },
    { t: "Frecare statică", d: "Forță care se opune începutului alunecării; valoarea maximă μs·N." },
    { t: "Plan înclinat", d: "Suprafață plană înclinată cu un unghi α față de orizontală." },
    { t: "Momentul unei forțe", d: "M = F·b: măsoară capacitatea forței de a roti un corp în jurul unui punct." },
    { t: "Braț", d: "Distanța perpendiculară dintre pol și dreapta suport a forței." },
    { t: "Cuplu de forțe", d: "Două forțe egale, paralele și opuse, cu drepte suport diferite: rezultantă nulă, moment diferit de zero." },
    { t: "Pârghie", d: "Bară rigidă care se rotește în jurul unui punct de sprijin, supusă unei forțe active și uneia rezistente." },
    { t: "Centru de greutate", d: "Punctul în care se consideră aplicată greutatea totală a unui corp." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este condiția de echilibru a unui punct material?", options: ["Rezultanta forțelor este nulă", "Momentul forțelor este nul", "Greutatea este egală cu masa"], answer: 0, explain: "Pentru punctul material nu există rotație de luat în considerare: ajunge ΣF = 0." },
      { type: "num", q: "Care este greutatea (în N, cu g = 9,8 m/s²) unui obiect de 5 kg?", answer: 49, tol: 0.1, unit: "N", explain: "G = m·g = 5 × 9,8 = 49 N." },
      { type: "num", q: "Un plan înclinat neted are înălțimea de 2 m și lungimea de 5 m. Ce forță paralelă (în N) ține în repaus o sarcină cu greutatea de 300 N?", answer: 120, unit: "N", explain: "F = G·h/l = 300 × 2/5 = 120 N." },
      { type: "tf", q: "Cu frecare, unghiul maxim al unui plan pe care un corp rămâne în repaus depinde de masa corpului.", answer: false, explain: "Condiția este tan α ≤ μs: masa se simplifică." },
      { type: "num", q: "O forță de 50 N este aplicată perpendicular la 0,4 m de axa de rotație. Calculează momentul (N·m).", answer: 20, unit: "N·m", explain: "M = F·b = 50 × 0,4 = 20 N·m." },
      { type: "num", q: "O pârghie este în echilibru cu o rezistență de 90 N la 20 cm de punctul de sprijin. Ce forță activă (în N) este necesară la 60 cm de punctul de sprijin, în partea opusă?", answer: 30, unit: "N", explain: "Fa·60 = 90·20, deci Fa = 1800/60 = 30 N." },
      { type: "mc", q: "Care dintre aceste unelte este o pârghie de genul 3?", options: ["Foarfecele", "Pensetă", "Spărgătorul de nuci"], answer: 1, explain: "La pensetă forța este aplicată între punctul de sprijin (articulația) și vârf, unde se află rezistența." },
      { type: "tf", q: "O pârghie de genul 2 este întotdeauna avantajoasă.", answer: true, explain: "Rezistența este mai aproape de punctul de sprijin decât forța activă: br < ba, deci Fa < Fr." },
      { type: "order", q: "Pune în ordine pașii pentru rezolvarea unei probleme de echilibru pe un plan înclinat.", items: ["Desenarea tuturor forțelor care acționează asupra corpului", "Alegerea axelor paralelă și perpendiculară pe plan", "Descompunerea greutății în cele două componente", "Impunerea ΣF = 0 de-a lungul fiecărei axe", "Aflarea forței necunoscute"], explain: "Metoda standard: desen, axe potrivite, descompunere, echilibru pe fiecare axă, soluție." },
      { type: "mc", q: "Când nu se răstoarnă un corp așezat?", options: ["Când centrul de greutate este în punctul cel mai înalt", "Când verticala prin centrul de greutate cade în interiorul bazei de sprijin", "Când masa este mică"], answer: 1, explain: "Dacă verticala prin centrul de greutate iese din bază, greutatea creează un moment care rotește corpul până la răsturnare." },
      { type: "text", q: "Cum se numește punctul fix în jurul căruia se rotește o pârghie?", answer: ["punct de sprijin", "punctul de sprijin", "fulcru", "fulcrul", "sprijin", "sprijinul"], explain: "Punctul de sprijin este punctul de reazem al pârghiei." }
    ]
  }
});

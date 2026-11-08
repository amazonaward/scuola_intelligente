TOPIC('ro', {
  id: "m2-sci-forze-moto",
  title: "Forțe și mișcare",
  intro: "De ce accelerează, frânează sau virează o bicicletă? De ce se poate ridica un bolovan cu un levier? În această lecție înveți să descrii <b>mișcarea</b> (viteza și accelerația), să înțelegi ce sunt <b>forțele</b> și cum ne ajută <b>pârghiile</b> să le înmulțim.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Mișcarea este relativă",
      html: `<p>Un corp este <b>în mișcare</b> când poziția lui se schimbă în timp față de un <b>sistem de referință</b>, adică față de ceva ce considerăm nemișcat.</p>
<p>Așezat în tren, ești <b>nemișcat</b> față de scaunul tău, dar <b>în mișcare</b> față de gară. Iar Pământul însuși se rotește în jurul Soarelui cu aproximativ 30 km pe secundă! De aceea se spune că mișcarea este <b>relativă</b>.</p>
<p>Pentru a descrie o mișcare sunt necesare:</p>
<ul>
<li><b>traiectoria</b>: linia parcursă (rectilinie, circulară, curbă…);</li>
<li><b>distanța parcursă</b> <i>s</i>, în metri (m);</li>
<li><b>timpul</b> folosit <i>t</i>, în secunde (s).</li>
</ul>`
    },
    {
      type: "text",
      title: "2. Viteza",
      html: `<p><b>Viteza</b> spune cât spațiu se parcurge în unitatea de timp:</p>
<p style="font-size:1.3em;text-align:center"><b>v = s / t</b></p>
<p>În Sistemul Internațional se măsoară în <b>metri pe secundă (m/s)</b>; în viața de zi cu zi folosim <b>kilometri pe oră (km/h)</b>.</p>
<ul>
<li>din km/h în m/s: <b>împarte la 3,6</b> (72 km/h = 20 m/s);</li>
<li>din m/s în km/h: <b>înmulțește cu 3,6</b> (10 m/s = 36 km/h).</li>
</ul>
<p>De ce 3,6? Pentru că 1 km = 1000 m și 1 h = 3600 s: 1000/3600 = 1/3,6.</p>
<p>Formule inverse: <b>s = v · t</b> și <b>t = s / v</b>.</p>
<p><b>Mișcarea rectilinie uniformă</b> este aceea în care un corp merge în linie dreaptă cu viteză <b>constantă</b>: parcurge distanțe egale în timpuri egale. Graficul ei spațiu-timp este o <b>dreaptă</b> care pleacă din origine; cu cât este mai înclinată, cu atât viteza este mai mare.</p>
<p>Aproape întotdeauna însă viteza se schimbă: atunci calculăm <b>viteza medie</b> (distanța totală / timpul total).</p>`
    },
    {
      type: "svg",
      title: "Graficul spațiu-timp",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<line x1="70" y1="270" x2="560" y2="270" stroke="#0f172a" stroke-width="3"/>
<line x1="70" y1="270" x2="70" y2="30" stroke="#0f172a" stroke-width="3"/>
<polygon points="560,264 575,270 560,276" fill="#0f172a"/>
<polygon points="64,30 70,15 76,30" fill="#0f172a"/>
<text x="560" y="300" font-size="17" fill="#0f172a">t (s)</text>
<text x="20" y="40" font-size="17" fill="#0f172a">s (m)</text>
<g stroke="#e2e8f0" stroke-width="1">
<line x1="170" y1="270" x2="170" y2="40"/><line x1="270" y1="270" x2="270" y2="40"/><line x1="370" y1="270" x2="370" y2="40"/><line x1="470" y1="270" x2="470" y2="40"/>
<line x1="70" y1="210" x2="560" y2="210"/><line x1="70" y1="150" x2="560" y2="150"/><line x1="70" y1="90" x2="560" y2="90"/>
</g>
<line x1="70" y1="270" x2="320" y2="40" stroke="#dc2626" stroke-width="5"/>
<line x1="70" y1="270" x2="560" y2="150" stroke="#2563eb" stroke-width="5"/>
<path d="M70 270 Q300 265 470 60" fill="none" stroke="#16a34a" stroke-width="5"/>
<text x="250" y="70" font-size="17" fill="#dc2626" font-weight="bold">rapid 🚗</text>
<text x="440" y="185" font-size="17" fill="#2563eb" font-weight="bold">lent 🚲</text>
<text x="420" y="110" font-size="17" fill="#16a34a" font-weight="bold">accelerează 🏃</text>
</svg>`,
      caption: "Dreptele = viteză constantă (mișcare uniformă): cea mai înclinată este cea mai rapidă. Curba verde devine tot mai înclinată: corpul accelerează."
    },
    {
      type: "text",
      title: "3. Accelerația",
      html: `<p>Când viteza se schimbă, există o <b>accelerație</b>. Se calculează ca variația vitezei împărțită la timp:</p>
<p style="font-size:1.3em;text-align:center"><b>a = (v<sub>final</sub> − v<sub>inițial</sub>) / t</b></p>
<p>Se măsoară în <b>m/s²</b> („metri pe secundă la pătrat”): spune cu câți m/s crește viteza în fiecare secundă.</p>
<ul>
<li>accelerație <b>pozitivă</b>: viteza crește;</li>
<li>accelerație <b>negativă</b> (decelerație): viteza scade, ca atunci când se frânează.</li>
</ul>
<p>Exemplu: o mașină trece de la 0 la 27 m/s (aproximativ 100 km/h) în 9 s. a = 27 / 9 = <b>3 m/s²</b>.</p>
<p>Un caz foarte celebru este <b>căderea liberă</b>: lângă suprafața Pământului, fără aer, toate corpurile cad cu aceeași accelerație <b>g ≈ 9,8 m/s²</b>. A înțeles asta <b>Galileo Galilei</b> studiind bile care se rostogoleau pe planuri înclinate (publicat în 1638).</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: viteză și accelerație",
      questions: [
        { type: "num", q: "Un biciclist parcurge 600 m în 120 s. Care este viteza lui medie în m/s?", answer: 5, unit: "m/s", explain: "v = s / t = 600 / 120 = 5 m/s (adică 18 km/h)." },
        { type: "num", q: "Câți km/h sunt 25 m/s?", answer: 90, unit: "km/h", explain: "25 × 3,6 = 90 km/h." },
        { type: "num", q: "Un scuter trece de la 2 m/s la 12 m/s în 5 s. Care este accelerația lui?", answer: 2, unit: "m/s²", explain: "a = (12 − 2) / 5 = 10 / 5 = 2 m/s²." },
        { type: "tf", q: "În mișcarea rectilinie uniformă accelerația este zero.", answer: true, explain: "Viteza nu se schimbă, deci nu există accelerație." }
      ]
    },
    {
      type: "text",
      title: "4. Forțele",
      html: `<p>O <b>forță</b> este o acțiune capabilă să <b>schimbe starea de mișcare</b> a unui corp (să-l pornească, să-l oprească, să-l accelereze, să-l facă să vireze) sau să-l <b>deformeze</b>.</p>
<p>Forța este o mărime <b>vectorială</b>: pentru a o descrie sunt necesare <b>intensitatea</b> (cât de puternică este), <b>direcția</b>, <b>sensul</b> și <b>punctul de aplicație</b>. Se reprezintă cu o săgeată.</p>
<p>Se măsoară în <b>newtoni (N)</b> cu <b>dinamometrul</b>, un resort etalonat. 1 N este aproximativ greutatea unui măr mic (100 g).</p>
<p>Forțe din fiecare zi:</p>
<ul>
<li><b>forța de greutate</b>: G = m · g. Un băiat de 50 kg cântărește aproximativ 50 × 9,8 = <b>490 N</b>. Atenție: <b>masa</b> (kg) este cantitatea de materie și nu se schimbă; <b>greutatea</b> (N) este o forță și pe Lună este de aproximativ 6 ori mai mică;</li>
<li><b>frecarea</b>: se opune mișcării dintre două suprafețe (frâne, tălpile pantofilor);</li>
<li><b>forța elastică</b>: a resorturilor și a elasticelor;</li>
<li><b>forțe la distanță</b>: gravitația, forța magnetică, forța electrică.</li>
</ul>
<p>Dacă mai multe forțe acționează asupra aceluiași corp, ele se adună ca vectori: suma lor este <b>rezultanta</b>. Dacă rezultanta este zero, corpul este în <b>echilibru</b>.</p>`
    },
    {
      type: "text",
      title: "5. Cele trei principii ale dinamicii lui Newton",
      html: `<p>În <b>1687</b> <b>Isaac Newton</b> a publicat <i>Principia</i>, în care a rezumat legătura dintre forțe și mișcare în trei principii.</p>
<ol>
<li><b>Principiul inerției</b>: dacă rezultanta forțelor este zero, un corp rămâne în repaus sau continuă să se miște în linie dreaptă cu viteză constantă. (De aceea în mașină se pune centura: la o frânare corpul tinde să continue înainte.)</li>
<li><b>Principiul fundamental</b>: <b>F = m · a</b>. Forța produce o accelerație proporțională cu ea însăși și invers proporțională cu masa. A împinge un cărucior gol este mai ușor decât a împinge unul plin.</li>
<li><b>Principiul acțiunii și reacțiunii</b>: dacă un corp A exercită o forță asupra lui B, atunci B exercită asupra lui A o forță egală și de sens contrar. Racheta împinge gazele înapoi, iar gazele împing racheta înainte; când mergi, împingi podeaua înapoi, iar ea te împinge pe tine înainte.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Forțele care acționează asupra unei mașini în mers",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<rect x="0" y="230" width="600" height="70" fill="#64748b"/>
<line x1="0" y1="265" x2="600" y2="265" stroke="#f8fafc" stroke-width="4" stroke-dasharray="30,20"/>
<rect x="210" y="150" width="190" height="60" rx="14" fill="#ef4444"/>
<path d="M240 150 L265 110 L345 110 L370 150 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="3"/>
<circle cx="250" cy="215" r="20" fill="#1f2937"/><circle cx="360" cy="215" r="20" fill="#1f2937"/>
<line x1="400" y1="180" x2="520" y2="180" stroke="#16a34a" stroke-width="7"/>
<polygon points="520,168 545,180 520,192" fill="#16a34a"/>
<text x="430" y="165" font-size="16" fill="#166534" font-weight="bold">forța motorului</text>
<line x1="210" y1="180" x2="110" y2="180" stroke="#f97316" stroke-width="7"/>
<polygon points="110,168 85,180 110,192" fill="#f97316"/>
<text x="60" y="160" font-size="16" fill="#c2410c" font-weight="bold">frecare + aer</text>
<line x1="305" y1="180" x2="305" y2="280" stroke="#7c3aed" stroke-width="6"/>
<polygon points="293,270 305,295 317,270" fill="#7c3aed"/>
<text x="315" y="290" font-size="16" fill="#6d28d9" font-weight="bold">greutatea G</text>
<line x1="305" y1="150" x2="305" y2="60" stroke="#0284c7" stroke-width="6"/>
<polygon points="293,65 305,40 317,65" fill="#0284c7"/>
<text x="315" y="60" font-size="16" fill="#0369a1" font-weight="bold">reacțiunea drumului</text>
</svg>`,
      caption: "Dacă forța motorului este egală cu frecările, rezultanta este zero: mașina merge cu viteză constantă (principiul 1). Dacă forța motorului este mai mare, mașina accelerează (principiul 2)."
    },
    {
      type: "text",
      title: "6. Pârghiile: înmulțirea forței",
      html: `<p>O <b>pârghie</b> este o mașină simplă: o bară rigidă care se poate roti în jurul unui punct fix, <b>punctul de sprijin</b>. Asupra ei acționează:</p>
<ul>
<li><b>forța activă (puterea) P</b>: forța pe care o aplicăm noi;</li>
<li><b>forța rezistentă R</b>: forța de învins (o greutate, un cui…).</li>
</ul>
<p>Distanțele față de punctul de sprijin se numesc <b>brațul puterii b<sub>P</sub></b> și <b>brațul rezistenței b<sub>R</sub></b>. Pârghia este în echilibru când:</p>
<p style="font-size:1.3em;text-align:center"><b>P · b<sub>P</sub> = R · b<sub>R</sub></b></p>
<p>Cu cât brațul puterii este mai lung, cu atât forța necesară este mai mică. Dacă b<sub>P</sub> &gt; b<sub>R</sub> pârghia este <b>avantajoasă</b>; dacă b<sub>P</sub> &lt; b<sub>R</sub> este <b>dezavantajoasă</b> (dar câștigă în viteză și în amplitudinea mișcării); dacă sunt egale este <b>indiferentă</b>.</p>
<p>Pârghiile se clasifică în trei <b>genuri</b>:</p>
<table>
<tr><th>Genul</th><th>Poziția</th><th>Exemple</th></tr>
<tr><td>Genul 1</td><td>Punctul de sprijin <b>la mijloc</b>, între P și R</td><td>balansoar, foarfece, levier, cântar cu brațe</td></tr>
<tr><td>Genul 2</td><td>Rezistența la mijloc (întotdeauna avantajoasă)</td><td>roabă, spărgător de nuci, desfăcător de sticle</td></tr>
<tr><td>Genul 3</td><td>Puterea la mijloc (întotdeauna dezavantajoasă)</td><td>pensetă, undiță, antebraț</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Cele trei genuri de pârghii",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#fefce8"/>
<text x="20" y="30" font-size="17" font-weight="bold" fill="#0f172a">Genul 1: F la mijloc</text>
<rect x="60" y="62" width="320" height="10" fill="#92400e"/>
<polygon points="220,72 205,100 235,100" fill="#475569"/>
<text x="245" y="98" font-size="15" fill="#475569">sprijin</text>
<rect x="60" y="30" width="34" height="32" fill="#64748b"/><text x="66" y="52" font-size="15" fill="#fff">R</text>
<line x1="370" y1="20" x2="370" y2="58" stroke="#16a34a" stroke-width="5"/><polygon points="362,52 370,64 378,52" fill="#16a34a"/>
<text x="384" y="40" font-size="15" fill="#166534">P</text>
<text x="420" y="70" font-size="15" fill="#0f172a">✂️ foarfece, balansoar</text>
<text x="20" y="135" font-size="17" font-weight="bold" fill="#0f172a">Genul 2: R la mijloc</text>
<rect x="60" y="167" width="320" height="10" fill="#92400e"/>
<polygon points="60,177 45,205 75,205" fill="#475569"/>
<rect x="160" y="135" width="34" height="32" fill="#64748b"/><text x="166" y="157" font-size="15" fill="#fff">R</text>
<line x1="370" y1="200" x2="370" y2="182" stroke="#16a34a" stroke-width="5"/><polygon points="362,186 370,174 378,186" fill="#16a34a"/>
<text x="384" y="200" font-size="15" fill="#166534">P</text>
<text x="420" y="175" font-size="15" fill="#0f172a">🛒 roabă, spărgător de nuci</text>
<text x="20" y="240" font-size="17" font-weight="bold" fill="#0f172a">Genul 3: P la mijloc</text>
<rect x="60" y="272" width="320" height="10" fill="#92400e"/>
<polygon points="60,282 45,310 75,310" fill="#475569"/>
<rect x="346" y="240" width="34" height="32" fill="#64748b"/><text x="352" y="262" font-size="15" fill="#fff">R</text>
<line x1="150" y1="315" x2="150" y2="287" stroke="#16a34a" stroke-width="5"/><polygon points="142,291 150,279 158,291" fill="#16a34a"/>
<text x="164" y="315" font-size="15" fill="#166534">P</text>
<text x="420" y="280" font-size="15" fill="#0f172a">💪 antebraț, pensetă</text>
</svg>`,
      caption: "Pentru a recunoaște genul, uită-te la ce se află la mijloc: punctul de sprijin (genul 1), rezistența (genul 2) sau puterea (genul 3)."
    },
    {
      type: "example",
      title: "Exemplu practic: balansoarul",
      html: `<p>Marco cântărește <b>400 N</b> și se așază la <b>1,5 m</b> de punctul de sprijin. Surioara lui cântărește <b>200 N</b>. La ce distanță trebuie să se așeze pentru a fi în echilibru?</p>
<p>P · b<sub>P</sub> = R · b<sub>R</sub> → 200 · x = 400 · 1,5 → 200 · x = 600 → <b>x = 3 m</b>.</p>
<p>Cine cântărește jumătate trebuie să stea la dublul distanței: forța și brațul sunt <b>invers proporționale</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: distanța de frânare",
      html: `<p>O mașină merge cu <b>90 km/h</b> = 90 : 3,6 = <b>25 m/s</b>. Șoferul vede un obstacol și are nevoie de aproximativ <b>1 secundă</b> pentru a reacționa (timp de reacție): în acea secundă mașina parcurge încă 25 m fără să frâneze!</p>
<p>Dacă șoferul se uită la telefon 3 secunde, parcurge 25 × 3 = <b>75 m „pe orbește”</b>: aproape un teren de fotbal. Apoi, cu frâne care dau o decelerație de aproximativ 7 m/s², mai sunt necesari circa 45 m pentru a se opri. Iată de ce distanța de siguranță și atenția salvează vieți.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege forțele și mișcarea",
      intro: "Formulele nu sunt de ajuns? Încearcă o analogie, un experiment făcut acasă sau 3D.",
      tabs: [
        {
          label: "🛒 Analogia căruciorului",
          html: `<p>Gândește-te la <b>căruciorul de la supermarket</b>:</p>
<ul>
<li>Gol, cu o mică împingere pornește imediat: <b>masă mică → accelerație mare</b>.</li>
<li>Plin de sticle, trebuie să împingi mult mai tare ca să-l pornești la fel de repede: <b>masă mai mare → este nevoie de mai multă forță</b>. Aceasta este F = m · a.</li>
<li>Odată lansat, dacă îl lași continuă singur o bucată de drum (<b>inerție</b>) până când frecarea roților îl oprește.</li>
<li>Ca să vireze trebuie să-l împingi într-o parte: și schimbarea direcției cere o forță.</li>
</ul>`
        },
        {
          label: "🧪 Experimentul lui Galileo acasă",
          html: `<p>Galileo voia să înțeleagă cum cad corpurile, dar căderea este prea rapidă pentru a fi măsurată. Atunci a „încetinit-o” cu un <b>plan înclinat</b>.</p>
<ol>
<li>Sprijină o scândură sau o carte mare înclinată pe o grămadă de cărți.</li>
<li>Lasă să se rostogolească o bilă și marchează cu bandă adezivă unde se află după 1, 2, 3 „tic-uri” ale unui metronom (sau bătând din palme în ritm).</li>
<li>Vei descoperi că distanțele parcurse cresc ca <b>1, 4, 9…</b>, adică ca pătratele timpilor: bila <b>accelerează</b> în mod constant.</li>
</ol>
<p>Galileo a folosit drept ceas o găleată cu apă care picura: cântărea apa scursă pentru a măsura timpul!</p>`
        },
        {
          label: "🇯🇵 Triunghiul magic (metodă folosită în Asia)",
          html: `<p>În multe școli din Asia și din țările anglo-saxone se folosește un <b>triunghi</b> pentru a ține minte formulele inverse: acoperă cu degetul mărimea pe care o cauți și citește-le pe celelalte două.</p>
<ul>
<li>acoperă <b>s</b> → rămâne v · t (sunt alăturate: se înmulțesc);</li>
<li>acoperă <b>v</b> → rămâne s / t (una deasupra alteia: se împarte);</li>
<li>acoperă <b>t</b> → rămâne s / v.</li>
</ul>
<p>Funcționează și pentru F = m · a: F sus, m și a jos.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<polygon points="150,20 40,230 260,230" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/>
<line x1="85" y1="140" x2="215" y2="140" stroke="#15803d" stroke-width="4"/>
<line x1="150" y1="140" x2="150" y2="230" stroke="#15803d" stroke-width="4"/>
<text x="150" y="115" font-size="38" text-anchor="middle" fill="#14532d" font-weight="bold">s</text>
<text x="108" y="200" font-size="34" text-anchor="middle" fill="#14532d" font-weight="bold">v</text>
<text x="192" y="200" font-size="34" text-anchor="middle" fill="#14532d" font-weight="bold">t</text>
<polygon points="450,20 340,230 560,230" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<line x1="385" y1="140" x2="515" y2="140" stroke="#b45309" stroke-width="4"/>
<line x1="450" y1="140" x2="450" y2="230" stroke="#b45309" stroke-width="4"/>
<text x="450" y="115" font-size="38" text-anchor="middle" fill="#78350f" font-weight="bold">F</text>
<text x="408" y="200" font-size="34" text-anchor="middle" fill="#78350f" font-weight="bold">m</text>
<text x="492" y="200" font-size="34" text-anchor="middle" fill="#78350f" font-weight="bold">a</text>
</svg>`
        },
        {
          label: "🪐 Gravitația în 3D",
          html: `<p>Newton a înțeles că forța care face un măr să cadă este <b>aceeași</b> care ține Luna în jurul Pământului și planetele în jurul Soarelui: <b>gravitația universală</b>. Planetele „cad” continuu spre Soare, dar au și o viteză laterală: așa că, în loc să se prăbușească, se rotesc pe orbită. Cu cât o planetă este mai aproape de Soare, cu atât forța este mai intensă și cu atât orbita ei este mai rapidă. Observă-o în model.</p>`,
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "widget",
      title: "Recunoaște genul pârghiei",
      widget: "classify",
      options: {
        groups: ["Genul 1 (sprijin la mijloc)", "Genul 2 (rezistența la mijloc)", "Genul 3 (puterea la mijloc)"],
        items: [
          ["✂️ Foarfece", 0],
          ["🎢 Balansoar", 0],
          ["🔧 Levier", 0],
          ["🛒 Roabă", 1],
          ["🌰 Spărgător de nuci", 1],
          ["🍾 Desfăcător de sticle", 1],
          ["🪡 Pensetă", 2],
          ["🎣 Undiță", 2],
          ["💪 Antebraț care ridică o greutate", 2]
        ]
      },
      caption: "Găsește punctul de sprijin, punctul în care împingi (puterea) și lucrul de învins (rezistența)."
    },
    {
      type: "curiosity",
      title: "Știai că…? „Dați-mi un punct de sprijin…”",
      html: `<p>Savantul grec <b>Arhimede</b> din Siracuza (circa 287–212 î.Hr.) a studiat primul în mod matematic legea pârghiilor. Potrivit tradiției, ar fi spus: <i>„Dați-mi un punct de sprijin și voi ridica lumea”</i>. În teorie avea dreptate: cu un braț suficient de lung orice forță este de ajuns… dar pentru a ridica Pământul cu 1 cm ar fi trebuit să deplaseze capătul pârghiei pe o distanță enormă, mult mai mare decât Universul vizibil!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Ciocanul și pana pe Lună",
      html: `<p>În <b>1971</b>, în timpul misiunii <b>Apollo 15</b>, astronautul <b>David Scott</b> a lăsat să cadă pe Lună, în același moment, un ciocan și o pană de șoim. Fără aer care s-o frâneze, pana a atins solul <b>odată</b> cu ciocanul: exact cum prevăzuse Galileo cu mai bine de 300 de ani înainte. Pe Lună g are aproximativ 1,6 m/s², circa 1/6 din cea de pe Pământ.</p>`
    },
    {
      type: "widget",
      title: "Axa timpului: cine a înțeles mișcarea",
      widget: "timeline",
      options: {
        unit: "ani",
        events: [
          { year: -340, label: "Aristotel: „corpurile grele cad mai repede” (greșit!)", icon: "🏛️" },
          { year: -250, label: "Arhimede: legea pârghiei", icon: "⚖️" },
          { year: 1638, label: "Galileo: căderea corpurilor și inerția", icon: "🔭" },
          { year: 1687, label: "Newton: cele trei principii și gravitația", icon: "🍎" },
          { year: 1905, label: "Einstein: relativitatea restrânsă", icon: "⚡" },
          { year: 1971, label: "Ciocan și pană pe Lună", icon: "🌕" }
        ]
      },
      caption: "Aproape 2000 de ani s-a crezut în Aristotel: experimentele au corectat eroarea."
    },
    {
      type: "conceptMap",
      title: "Harta forțelor și a mișcării: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "rif", label: "Sistem de referință", x: 15, y: 8, color: "#64748b", html: "Ceea ce folosim ca reper pentru a măsura mișcarea.", why: "Galileo, în Dialog (1632), și-a imaginat o corabie care navighează lin: cine se află sub punte nu poate înțelege cu niciun experiment dacă nava se mișcă. De aici ideea că mișcarea este relativă, baza relativității lui Einstein." },
        { id: "vel", label: "Viteza v = s/t", x: 40, y: 22, color: "#2563eb", html: "Distanța parcursă în unitatea de timp (m/s, km/h).", why: "Este nevoie de o cale de a compara mișcări diferite: împărțind distanța la timp obținem cât se parcurge într-o secundă. Cu ceasuri precise (pendulul, studiat de Galileo și construit de Huygens în 1656) viteza a putut fi măsurată bine." },
        { id: "acc", label: "Accelerația", x: 65, y: 22, color: "#7c3aed", html: "Variația vitezei în timp (m/s²).", why: "Galileo a descoperit că în cădere viteza crește mereu cu aceeași cantitate în fiecare secundă: o accelerație constantă. Pentru a o măsura a folosit planuri înclinate și ceasuri cu apă." },
        { id: "forza", label: "Forță (newton)", x: 50, y: 48, color: "#dc2626", html: "Acțiune care schimbă mișcarea sau deformează un corp; se măsoară în N.", why: "Unitatea poartă numele lui Isaac Newton. 1 N este forța care dă unui corp de 1 kg o accelerație de 1 m/s². Înainte de Newton se credea (împreună cu Aristotel) că este nevoie de o forță chiar și numai pentru a menține un corp în mișcare." },
        { id: "n1", label: "Principiul 1: inerția", x: 18, y: 50, color: "#0891b2", html: "Fără forțe un corp stă pe loc sau se mișcă rectiliniu uniform.", why: "Galileo a observat că o bilă pe un plan neted încetinește cu atât mai puțin cu cât este mai puțină frecare: și-a imaginat că fără frecare ar merge la nesfârșit. Newton a transformat această intuiție în primul principiu (1687)." },
        { id: "n2", label: "Principiul 2: F = m·a", x: 82, y: 50, color: "#ea580c", html: "Forța este egală cu masa înmulțită cu accelerația.", why: "Leagă cauzele (forțele) de efecte (accelerațiile). Masa măsoară inerția: cât de mult „se opune” un corp schimbării vitezei." },
        { id: "n3", label: "Principiul 3: acțiune și reacțiune", x: 82, y: 78, color: "#16a34a", html: "Forțele apar întotdeauna în pereche, egale și de sens contrar.", why: "Newton l-a dedus observând ciocnirile dintre corpuri: nimeni nu poate împinge fără să fie împins. Este principiul pe care funcționează rachetele, înotătorii și chiar mersul nostru." },
        { id: "peso", label: "Greutate și gravitație", x: 50, y: 78, color: "#a16207", html: "G = m · g, cu g ≈ 9,8 m/s² pe Pământ.", why: "Newton a înțeles că forța care face corpurile să cadă este aceeași care ține Luna pe orbită: gravitația universală. Greutatea depinde de planetă, masa nu." },
        { id: "leva", label: "Pârghii", x: 18, y: 85, color: "#92400e", html: "Mașini simple: P · bP = R · bR.", why: "Arhimede (secolul al III-lea î.Hr.) a demonstrat legea pornind de la simetrie: greutăți egale la distanțe egale sunt în echilibru. O pârghie nu creează energie: se economisește forță, dar puterea trebuie deplasată pe o distanță mai lungă." }
      ],
      edges: [
        ["rif", "vel", "se măsoară față de"],
        ["vel", "acc", "dacă se schimbă există"],
        ["forza", "acc", "produce"],
        ["n1", "forza", "fără"],
        ["forza", "n2", ""],
        ["forza", "n3", ""],
        ["forza", "peso", "exemplu:"],
        ["forza", "leva", "înmulțită de"],
        ["n2", "acc", "calculează"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>v = s / t</b> (m/s); km/h ÷ 3,6 = m/s.</li>
<li><b>a = Δv / t</b> (m/s²); în cădere liberă g ≈ 9,8 m/s².</li>
<li><b>Forța</b>: vector, se măsoară în newtoni cu dinamometrul. Greutatea G = m · g.</li>
<li>Newton: <b>inerția</b>, <b>F = m · a</b>, <b>acțiune și reacțiune</b>.</li>
<li><b>Pârghii</b>: P · b<sub>P</sub> = R · b<sub>R</sub>; genul 1 sprijin la mijloc, genul 2 rezistența la mijloc, genul 3 puterea la mijloc.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: forțe și pârghii",
      questions: [
        { type: "num", q: "Ce forță este necesară pentru a da unui cărucior de 20 kg o accelerație de 1,5 m/s²?", answer: 30, unit: "N", explain: "F = m · a = 20 × 1,5 = 30 N." },
        { type: "mc", q: "Roaba este o pârghie de…", options: ["genul 1", "genul 2", "genul 3"], answer: 1, explain: "Punctul de sprijin este roata, rezistența (încărcătura) se află la mijloc, puterea la mânere." },
        { type: "num", q: "O pârghie are bP = 2 m și bR = 0,5 m. Cu ce forță activă ridic R = 800 N?", answer: 200, unit: "N", explain: "P · 2 = 800 · 0,5 = 400 → P = 200 N." }
      ]
    }
  ],
  glossary: [
    { t: "Sistem de referință", d: "Corp sau punct considerat nemișcat, față de care se descrie o mișcare." },
    { t: "Traiectorie", d: "Linia parcursă de un corp în mișcare." },
    { t: "Viteză", d: "Raportul dintre distanța parcursă și timpul folosit (m/s)." },
    { t: "Accelerație", d: "Raportul dintre variația vitezei și timp (m/s²)." },
    { t: "Forță", d: "Acțiune care modifică mișcarea sau forma unui corp; se măsoară în newtoni (N)." },
    { t: "Dinamometru", d: "Instrument cu resort pentru măsurarea forțelor." },
    { t: "Masă", d: "Cantitatea de materie a unui corp (kg); măsoară inerția lui." },
    { t: "Greutate", d: "Forța cu care o planetă atrage un corp: G = m · g." },
    { t: "Inerție", d: "Tendința unui corp de a-și menține starea de repaus sau de mișcare uniformă." },
    { t: "Frecare", d: "Forța care se opune alunecării dintre două suprafețe." },
    { t: "Punct de sprijin", d: "Punctul fix în jurul căruia se rotește o pârghie." },
    { t: "Braț", d: "Distanța dintre punctul de sprijin și punctul în care acționează o forță." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Un tren parcurge 360 km în 2 ore. Care este viteza lui medie în km/h?", answer: 180, unit: "km/h", explain: "v = 360 / 2 = 180 km/h." },
      { type: "num", q: "Transformă 72 km/h în m/s.", answer: 20, unit: "m/s", explain: "72 : 3,6 = 20 m/s." },
      { type: "num", q: "Un alergător pornește din repaus și în 4 s atinge 8 m/s. Care este accelerația lui medie?", answer: 2, unit: "m/s²", explain: "a = (8 − 0) / 4 = 2 m/s²." },
      { type: "mc", q: "Ce măsoară dinamometrul?", options: ["Masa", "Viteza", "Forțele", "Timpul"], answer: 2, explain: "Dinamometrul măsoară forțele în newtoni." },
      { type: "tf", q: "Pe Lună masa unui astronaut este de 6 ori mai mică decât pe Pământ.", answer: false, explain: "Masa nu se schimbă; greutatea este cea care este de aproximativ 6 ori mai mică." },
      { type: "mc", q: "Când un autobuz frânează brusc, pasagerii sunt împinși înainte. Ce principiu explică asta?", options: ["Principiul inerției", "Acțiunea și reacțiunea", "Legea pârghiilor"], answer: 0, explain: "Corpul tinde să-și păstreze viteza pe care o avea: este inerția (principiul 1)." },
      { type: "mc", q: "O rachetă urcă pentru că…", options: ["aerul o împinge în sus", "împinge gazele în jos, iar gazele o împing pe ea în sus", "este mai ușoară decât aerul"], answer: 1, explain: "Este al treilea principiu: acțiune și reacțiune. Funcționează și în vid." },
      { type: "num", q: "Care este greutatea pe Pământ (g = 10 m/s², rotunjit) a unui ghiozdan de 6 kg?", answer: 60, unit: "N", explain: "G = m · g = 6 × 10 = 60 N." },
      { type: "mc", q: "La care pârghie se află puterea între punctul de sprijin și rezistență?", options: ["genul 1", "genul 2", "genul 3"], answer: 2, explain: "La pârghia de genul 3 (pensetă, antebraț) puterea se află la mijloc: este întotdeauna dezavantajoasă." },
      { type: "num", q: "Pe un balansoar un copil de 300 N stă la 2 m de punctul de sprijin. La câți metri trebuie să se așeze un adult de 600 N pentru echilibru?", answer: 1, unit: "m", explain: "600 · x = 300 · 2 = 600 → x = 1 m." },
      { type: "text", q: "Care savant a publicat în 1687 cele trei principii ale dinamicii?", answer: ["newton", "isaac newton"], explain: "Isaac Newton, în Principia." },
      { type: "order", q: "Pune în ordine cronologică acești savanți.", items: ["Aristotel", "Arhimede", "Galileo Galilei", "Isaac Newton", "Albert Einstein"], explain: "secolul al IV-lea î.Hr., secolul al III-lea î.Hr., 1564–1642, 1643–1727, 1879–1955." }
    ],
    gen: [["proportion", 2]]
  }
});

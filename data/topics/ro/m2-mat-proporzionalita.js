TOPIC('ro', {
  id: `m2-mat-proporzionalita`,
  title: `Proporționalitate directă și inversă`,
  intro: `Dacă cumperi de două ori mai multe caiete, cheltuiești dublu. Dacă, în schimb, sunteți de două ori mai mulți să împărțiți o pizza, fiecare mănâncă jumătate. În primul caz avem <b>proporționalitate directă</b>, în al doilea <b>proporționalitate inversă</b>. Învățăm să le recunoaștem cu ajutorul <b>tabelelor</b>, al <b>formulelor</b> și al <b>graficelor</b> și să le folosim pentru a rezolva probleme.`,
  minutes: 50,
  sections: [
    {
      type: `text`,
      title: `Mărimi constante și variabile`,
      html: `<p>O <b>mărime</b> este ceva care se poate măsura. Într-o problemă, unele mărimi rămân <b>constante</b> (prețul unui caiet), altele <b>variază</b> (câte caiete cumperi, cât cheltuiești).</p>
<p>Când două mărimi variabile <b>x</b> și <b>y</b> sunt legate între ele (când variază una, se schimbă și cealaltă), se spune că <b>y depinde de x</b>, sau că y este <b>funcție</b> de x. Cele mai simple moduri de a depinde sunt două: <b>proporționalitatea directă</b> și <b>proporționalitatea inversă</b>.</p>`
    },
    {
      type: `text`,
      title: `Proporționalitatea directă`,
      html: `<p>Două mărimi sunt <b>direct proporționale</b> dacă <b>raportul lor este constant</b>:</p>
<p style="text-align:center;font-size:1.3em"><b>y / x = k</b> &nbsp;&nbsp; adică &nbsp;&nbsp; <b>y = k · x</b></p>
<p>Numărul <b>k</b> se numește <b>coeficient de proporționalitate</b> (constantă de proporționalitate).</p>
<p>Exemplu: un caiet costă <b>2 €</b>.</p>
<table>
<tr><th>Caiete (x)</th><td>1</td><td>2</td><td>3</td><td>5</td><td>10</td></tr>
<tr><th>Cheltuială în € (y)</th><td>2</td><td>4</td><td>6</td><td>10</td><td>20</td></tr>
<tr><th>y / x</th><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
</table>
<p><b>Cum o recunoști</b>: dacă x se <b>dublează</b>, și y se dublează; dacă x se <b>triplează</b>, y se triplează; dacă x se înjumătățește, y se înjumătățește. Iar când x = 0, și y = 0.</p>
<p><b>Atenție</b>: „cresc împreună” nu este suficient! Vârsta și înălțimea unui copil cresc împreună, dar la 10 ani nu ești de două ori mai înalt decât la 5.</p>`
    },
    {
      type: `svg`,
      title: `Graficul proporționalității directe`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0fdf4"/>
<g stroke="#bbf7d0" stroke-width="1">
<line x1="60" y1="40" x2="60" y2="280"/><line x1="110" y1="40" x2="110" y2="280"/><line x1="160" y1="40" x2="160" y2="280"/><line x1="210" y1="40" x2="210" y2="280"/><line x1="260" y1="40" x2="260" y2="280"/><line x1="310" y1="40" x2="310" y2="280"/>
<line x1="60" y1="280" x2="330" y2="280"/><line x1="60" y1="240" x2="330" y2="240"/><line x1="60" y1="200" x2="330" y2="200"/><line x1="60" y1="160" x2="330" y2="160"/><line x1="60" y1="120" x2="330" y2="120"/><line x1="60" y1="80" x2="330" y2="80"/><line x1="60" y1="40" x2="330" y2="40"/>
</g>
<line x1="60" y1="290" x2="60" y2="30" stroke="#14532d" stroke-width="3"/>
<line x1="50" y1="280" x2="340" y2="280" stroke="#14532d" stroke-width="3"/>
<line x1="60" y1="280" x2="310" y2="80" stroke="#16a34a" stroke-width="5"/>
<circle cx="110" cy="240" r="7" fill="#dc2626"/><circle cx="160" cy="200" r="7" fill="#dc2626"/><circle cx="210" cy="160" r="7" fill="#dc2626"/><circle cx="260" cy="120" r="7" fill="#dc2626"/><circle cx="310" cy="80" r="7" fill="#dc2626"/>
<text x="110" y="302" font-size="14" text-anchor="middle">1</text><text x="160" y="302" font-size="14" text-anchor="middle">2</text><text x="210" y="302" font-size="14" text-anchor="middle">3</text><text x="260" y="302" font-size="14" text-anchor="middle">4</text><text x="310" y="302" font-size="14" text-anchor="middle">5</text>
<text x="45" y="245" font-size="14" text-anchor="end">2</text><text x="45" y="205" font-size="14" text-anchor="end">4</text><text x="45" y="165" font-size="14" text-anchor="end">6</text><text x="45" y="125" font-size="14" text-anchor="end">8</text><text x="45" y="85" font-size="14" text-anchor="end">10</text>
<text x="345" y="290" font-size="16" font-weight="bold">x</text><text x="68" y="30" font-size="16" font-weight="bold">y</text>
<text x="370" y="90" font-size="22" fill="#15803d" font-weight="bold">y = 2x</text>
<text x="370" y="130" font-size="16" fill="#14532d">• este o dreaptă</text>
<text x="370" y="158" font-size="16" fill="#14532d">• trece prin origine (0;0)</text>
<text x="370" y="186" font-size="16" fill="#14532d">• cu cât k este mai mare,</text>
<text x="370" y="208" font-size="16" fill="#14532d">  cu atât dreapta este mai înclinată</text>
</svg>`,
      caption: `Graficul unei proporționalități directe este o semidreaptă (sau dreaptă) care trece prin originea axelor.`
    },
    {
      type: `quiz`,
      title: `Mini-test: directa`,
      questions: [
        { type: `tf`, q: `Perimetrul unui pătrat este direct proporțional cu latura.`, answer: true, explain: `P = 4 · l: raportul P/l este mereu 4.` },
        { type: `mc`, q: `Dacă y = 5x și x = 7, cât este y?`, options: [`12`, `35`, `1,4`], answer: 1, explain: `5 × 7 = 35.` },
        { type: `tf`, q: `Aria unui pătrat este direct proporțională cu latura.`, answer: false, explain: `A = l²: dacă latura se dublează, aria se împătrește; raportul A/l nu este constant.` }
      ]
    },
    {
      type: `text`,
      title: `Proporționalitatea inversă`,
      html: `<p>Două mărimi sunt <b>invers proporționale</b> dacă <b>produsul lor este constant</b>:</p>
<p style="text-align:center;font-size:1.3em"><b>x · y = k</b> &nbsp;&nbsp; adică &nbsp;&nbsp; <b>y = k / x</b></p>
<p>Exemplu: o călătorie de <b>120 km</b>. Cu cât mergi mai repede, cu atât îți trebuie mai puțin timp.</p>
<table>
<tr><th>Viteza km/h (x)</th><td>20</td><td>30</td><td>40</td><td>60</td><td>120</td></tr>
<tr><th>Timpul în h (y)</th><td>6</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>
<tr><th>x · y</th><td>120</td><td>120</td><td>120</td><td>120</td><td>120</td></tr>
</table>
<p><b>Cum o recunoști</b>: dacă x se <b>dublează</b>, y se <b>înjumătățește</b>; dacă x se triplează, y devine o treime. x și y nu pot fi niciodată 0.</p>
<p><b>Atenție</b>: „una crește și cealaltă scade” nu este suficient! Dacă ai 10 € și cheltuiești, banii rămași scad, dar 10 − cheltuială nu este un produs constant: nu este proporționalitate inversă.</p>`
    },
    {
      type: `svg`,
      title: `Graficul proporționalității inverse`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#eff6ff"/>
<line x1="60" y1="290" x2="60" y2="20" stroke="#1e3a8a" stroke-width="3"/>
<line x1="50" y1="280" x2="360" y2="280" stroke="#1e3a8a" stroke-width="3"/>
<path d="M88 52 L100 120 L120 173 L140 200 L180 227 L220 240 L260 248 L300 253 L345 257" fill="none" stroke="#2563eb" stroke-width="5" stroke-linejoin="round"/>
<circle cx="100" cy="120" r="7" fill="#dc2626"/><circle cx="140" cy="200" r="7" fill="#dc2626"/><circle cx="220" cy="240" r="7" fill="#dc2626"/>
<rect x="60" y="120" width="40" height="160" fill="#f59e0b" opacity="0.25"/>
<rect x="60" y="240" width="160" height="40" fill="#10b981" opacity="0.25"/>
<text x="100" y="302" font-size="14" text-anchor="middle">1</text><text x="140" y="302" font-size="14" text-anchor="middle">2</text><text x="220" y="302" font-size="14" text-anchor="middle">4</text>
<text x="45" y="125" font-size="14" text-anchor="end">4</text><text x="45" y="205" font-size="14" text-anchor="end">2</text><text x="45" y="245" font-size="14" text-anchor="end">1</text>
<text x="365" y="290" font-size="16" font-weight="bold">x</text><text x="68" y="20" font-size="16" font-weight="bold">y</text>
<text x="390" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">x · y = 4</text>
<text x="390" y="118" font-size="16" fill="#1e3a8a">• este o ramură de</text>
<text x="390" y="140" font-size="16" fill="#1e3a8a">  hiperbolă echilateră</text>
<text x="390" y="168" font-size="16" fill="#1e3a8a">• nu atinge niciodată axele</text>
<text x="390" y="196" font-size="16" fill="#1e3a8a">• dreptunghiurile colorate</text>
<text x="390" y="218" font-size="16" fill="#1e3a8a">  au aceeași arie (k)</text>
</svg>`,
      caption: `Graficul este o curbă numită hiperbolă echilateră: se apropie de axe fără să le atingă vreodată.`
    },
    {
      type: `widget`,
      title: `Dreptunghiuri cu aceeași arie`,
      widget: `areaGrid`,
      options: { w: 6, h: 2, max: 12 },
      caption: `Încearcă să construiești toate dreptunghiurile cu aria 12: 1 × 12, 2 × 6, 3 × 4, 4 × 3, 6 × 2, 12 × 1. Baza și înălțimea sunt invers proporționale!`
    },
    {
      type: `example`,
      title: `Exemplu practic: directă sau inversă?`,
      html: `<ul>
<li><b>Benzina și kilometrii</b>: o mașină face 20 km cu 1 litru. Litrii și km sunt <b>direct</b> proporționali (k = 20 km/l): cu 35 de litri face 700 km.</li>
<li><b>Muncitori și zile</b>: 6 muncitori construiesc un zid în 10 zile. Muncitorii și zilele sunt <b>invers</b> proporționali (k = 60 „zile-muncitor”): 12 muncitori au nevoie de 60 : 12 = <b>5 zile</b>; 4 muncitori de 60 : 4 = <b>15 zile</b>.</li>
<li><b>Ingrediente și persoane</b>: directă. <b>Felii de pizza și prieteni</b> (pizza fixă): inversă.</li>
<li><b>Vârsta și numărul pantofilor</b>: nici una, nici alta!</li>
</ul>`
    },
    {
      type: `example`,
      title: `Exemplu practic: rezolvăm o problemă în trei pași`,
      html: `<p><i>Pentru a umple o piscină sunt necesare 8 ore cu 3 pompe identice. Cât timp este necesar cu 4 pompe?</i></p>
<ol>
<li><b>Recunosc</b>: mai multe pompe → mai puțin timp; cu de două ori mai multe pompe, timpul se înjumătățește → <b>inversă</b>.</li>
<li><b>Găsesc k</b>: k = 3 × 8 = 24 („ore-pompă”).</li>
<li><b>Calculez</b>: timpul = 24 : 4 = <b>6 ore</b>.</li>
</ol>
<p>Cu o proporție: la cea inversă se scrie <b>inversând</b> un raport: 3 : 4 = x : 8 → x = 3 × 8 : 4 = 6. ✓</p>`
    },
    {
      type: `widget`,
      title: `Directă sau inversă?`,
      widget: `classify`,
      options: {
        groups: [`📈 Directă (y/x constant)`, `📉 Inversă (x·y constant)`, `🚫 Niciuna dintre ele`],
        items: [
          [`Kg de mere și prețul plătit`, 0], [`Latura pătratului și perimetrul`, 0], [`Orele de muncă și plata (la oră)`, 0],
          [`Viteza și timpul pentru 100 km`, 1], [`Numărul de prieteni și feliile de tort pentru fiecare`, 1], [`Muncitorii și zilele pentru o lucrare`, 1],
          [`Vârsta și înălțimea`, 2], [`Latura pătratului și aria`, 2], [`Banii cheltuiți și banii rămași`, 2]
        ]
      },
      caption: `Verifică întotdeauna: dacă x se dublează, y se dublează (directă), se înjumătățește (inversă) sau face altceva?`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Legea lui Boyle`,
      html: `<p>În <b>1662</b>, chimistul irlandez <b>Robert Boyle</b> a descoperit că, la temperatură constantă, <b>presiunea</b> și <b>volumul</b> unui gaz sunt <b>invers proporționale</b>: p · V = constantă. Dacă strângi o seringă astupată până la jumătate din volum, presiunea aerului dinăuntru se dublează. De aceea ți se „înfundă” urechile în avion sau sub apă!</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Legea lui Hooke`,
      html: `<p>În <b>1678</b>, <b>Robert Hooke</b> și-a publicat legea: <b>alungirea</b> unui resort este <b>direct proporțională</b> cu forța care îl trage (atâta timp cât nu îl deformezi). Este principiul <b>dinamometrului</b> și al vechilor cântare cu resort: dacă atârni o greutate dublă, resortul se alungește dublu. Hooke a anunțat legea mai întâi ca anagramă latină, «ceiiinosssttuv», ca să nu i se fure ideea: înseamnă <i>ut tensio, sic vis</i>, „cum este alungirea, așa este forța”.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege proporționalitatea`,
      intro: `Dacă formulele nu te conving, încearcă să vezi proporționalitatea în alte moduri.`,
      tabs: [
        {
          label: `🧊 Aceleași cubulețe`,
          html: `<p>Iată <b>12 cubulețe</b> în 3 rânduri de câte 4. Mișcă cursoarele și încearcă să le așezi altfel <b>fără să adaugi sau să scoți vreunul</b>: 2 rânduri de 6, 4 rânduri de 3, 6 rânduri de 2… Numărul de rânduri și cubulețele pe rând sunt <b>invers proporționale</b> (produsul rămâne 12). Dacă, în schimb, adaugi rânduri de câte 4 cubulețe, totalul crește <b>direct</b>: 1 rând = 4, 2 rânduri = 8, 3 rânduri = 12.</p>`,
          scene: `blocks`,
          options: { mode: `array`, a: 3, b: 4 }
        },
        {
          label: `🇳🇱 Tabelul-raport olandez`,
          html: `<p>În școlile olandeze (metoda <b>matematicii realiste</b>) se folosește <b>verhoudingstabel</b>, „tabelul rapoartelor”: se scriu perechile pe coloane și se fac operații simple <b>pe ambele rânduri</b>.</p>
<table>
<tr><th>Caiete</th><td>4</td><td>2</td><td>1</td><td>10</td></tr>
<tr><th>€</th><td>8</td><td>4</td><td>2</td><td>20</td></tr>
<tr><td></td><td></td><td>:2</td><td>:2</td><td>×10</td></tr>
</table>
<p>La cea directă se face <b>aceeași operație</b> sus și jos. La cea inversă se face operația <b>opusă</b>: dacă sus înmulțești cu 2, jos împarți la 2.</p>`
        },
        {
          label: `🚲 Analogia cu bicicleta`,
          html: `<p>Pedalează într-un ritm constant: cu cât pedalezi <b>mai mult timp</b>, cu atât faci <b>mai mult drum</b> → directă (constanta este viteza).</p>
<p>Acum trebuie să faci un traseu fix de 30 km: cu cât mergi <b>mai repede</b>, cu atât îți trebuie <b>mai puțin timp</b> → inversă (constanta este distanța).</p>
<p>Aceeași relație <b>distanță = viteză × timp</b> dă o directă sau o inversă după <b>mărimea pe care o ții fixă</b>!</p>`
        },
        {
          label: `📊 Cele două grafice comparate`,
          html: `<p>Privește cele două forme: cea directă este o <b>dreaptă care pornește din origine</b>; cea inversă este o <b>curbă care coboară</b> și se apropie de axe. Dacă vezi o dreaptă care nu trece prin origine, nu este proporționalitate directă!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<line x1="40" y1="230" x2="40" y2="20" stroke="#334155" stroke-width="3"/><line x1="30" y1="220" x2="270" y2="220" stroke="#334155" stroke-width="3"/>
<line x1="40" y1="220" x2="250" y2="40" stroke="#16a34a" stroke-width="5"/>
<text x="150" y="250" font-size="17" text-anchor="middle" fill="#15803d" font-weight="bold">DIRECTĂ: y = kx</text>
<line x1="330" y1="230" x2="330" y2="20" stroke="#334155" stroke-width="3"/><line x1="320" y1="220" x2="570" y2="220" stroke="#334155" stroke-width="3"/>
<path d="M345 30 Q360 160 400 180 Q460 205 560 210" fill="none" stroke="#2563eb" stroke-width="5"/>
<text x="450" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">INVERSĂ: y = k/x</text>
</svg>`
        },
        {
          label: `🇸🇬 Modelul cu bare (Singapore)`,
          html: `<p>La <b>Singapore</b>, una dintre țările cu cele mai bune rezultate la matematică, problemele cu rapoarte se rezolvă desenând <b>bare alcătuite din blocuri toate egale</b> (<b>bar model</b>). Raportul 3 : 2 înseamnă pur și simplu „3 blocuri față de 2 blocuri”.</p><p><b>Problema 1</b>: într-un tort, făina și zahărul sunt în raportul <b>3 : 2</b>. Dacă folosesc 450 g de făină, de cât zahăr am nevoie?</p><ol><li>Desenează făina cu <b>3 blocuri</b> și zahărul cu <b>2 blocuri</b> de aceeași mărime.</li><li>3 blocuri = 450 g → 1 bloc = 450 : 3 = <b>150 g</b>.</li><li>Zahăr = 2 blocuri = <b>300 g</b>.</li></ol><p><b>Problema 2</b>: Ana și Luca își împart 45 € în raportul <b>2 : 3</b>.</p><ol><li>În total sunt 2 + 3 = <b>5 blocuri</b> = 45 €.</li><li>1 bloc = 45 : 5 = <b>9 €</b>.</li><li>Ana = 2 × 9 = <b>18 €</b>, Luca = 3 × 9 = <b>27 €</b>. Verificare: 18 + 27 = 45 ✔</li></ol><p>Secretul proporționalității directe este chiar acesta: <b>blocurile sunt toate egale</b>. Dacă dublezi făina, se dublează blocul și deci se dublează și zahărul.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="280" fill="#f8fafc"/><text x="20" y="40" font-size="17" font-family="sans-serif" fill="#1e293b" font-weight="bold">Făină</text><rect x="110" y="18" width="70" height="36" fill="#fde68a" stroke="#92400e" stroke-width="2"/><rect x="180" y="18" width="70" height="36" fill="#fde68a" stroke="#92400e" stroke-width="2"/><rect x="250" y="18" width="70" height="36" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="20" y="98" font-size="17" font-family="sans-serif" fill="#1e293b" font-weight="bold">Zahăr</text><rect x="110" y="76" width="70" height="36" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><rect x="180" y="76" width="70" height="36" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><path d="M110,10 Q215,-6 320,10" fill="none" stroke="#92400e" stroke-width="2"/><text x="330" y="42" font-size="16" font-family="sans-serif" fill="#92400e" font-weight="bold">= 450 g → 1 bloc = 150 g</text><text x="260" y="100" font-size="16" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">→ zahăr = 2 × 150 = 300 g</text><line x1="20" y1="140" x2="580" y2="140" stroke="#cbd5e1" stroke-width="2"/><text x="20" y="190" font-size="17" font-family="sans-serif" fill="#1e293b" font-weight="bold">Ana</text><rect x="110" y="168" width="50" height="36" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><rect x="160" y="168" width="50" height="36" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="20" y="248" font-size="17" font-family="sans-serif" fill="#1e293b" font-weight="bold">Luca</text><rect x="110" y="226" width="50" height="36" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/><rect x="160" y="226" width="50" height="36" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/><rect x="210" y="226" width="50" height="36" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/><path d="M268,168 Q290,215 268,262" fill="none" stroke="#475569" stroke-width="2"/><text x="290" y="205" font-size="16" font-family="sans-serif" fill="#1e293b" font-weight="bold">5 blocuri = 45 € → 1 bloc = 9 €</text><text x="290" y="232" font-size="16" font-family="sans-serif" fill="#1e293b">Ana 2 × 9 = 18 €   Luca 3 × 9 = 27 €</text></svg>`
        },
        {
          label: `🇫🇷 «Produit en croix» francez`,
          html: `<p>În gimnaziile <b>franceze</b> (<i>collège</i>) se folosește foarte mult <b>tableau de proportionnalité</b> (tabelul de proporționalitate) și, pentru a găsi numărul care lipsește, <b>produit en croix</b>, „produsul în cruce”.</p><p><b>Exemplu</b>: 4 caiete costă 6 €. Cât costă 10 caiete?</p><ol><li>Scrie tabelul: sus caietele (4 și 10), jos euro (6 și ?).</li><li>Înmulțește cele două numere cunoscute <b>pe diagonală</b>: 10 × 6 = 60.</li><li>Împarte la numărul rămas: 60 : 4 = <b>15 €</b>.</li></ol><p><b>De ce funcționează?</b> Tabelul este o proporție: 4 : 6 = 10 : ?. Prin <b>proprietatea fundamentală a proporțiilor</b>, produsul mezilor este egal cu produsul extremilor: 4 × ? = 6 × 10.</p><p>⚠️ <b>Atenție</b>: produsul în cruce este valabil <b>doar</b> pentru proporționalitatea <b>directă</b>. La cea inversă se înmulțesc numerele din <b>aceeași coloană</b>: dacă 3 muncitori au nevoie de 8 zile, 6 muncitori au nevoie de 3 × 8 : 6 = <b>4 zile</b> (produsul 24 rămâne constant).</p>`,
          svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="250" fill="#f8fafc"/><rect x="120" y="60" width="120" height="60" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/><rect x="240" y="60" width="120" height="60" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/><rect x="120" y="120" width="120" height="60" fill="#fef9c3" stroke="#a16207" stroke-width="2"/><rect x="240" y="120" width="120" height="60" fill="#fef9c3" stroke="#a16207" stroke-width="2"/><rect x="20" y="60" width="100" height="60" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/><rect x="20" y="120" width="100" height="60" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/><text x="70" y="96" font-size="15" font-family="sans-serif" fill="#1e293b" text-anchor="middle">caiete</text><text x="70" y="156" font-size="15" font-family="sans-serif" fill="#1e293b" text-anchor="middle">euro</text><text x="180" y="100" font-size="26" font-family="sans-serif" fill="#1e293b" text-anchor="middle" font-weight="bold">4</text><text x="300" y="100" font-size="26" font-family="sans-serif" fill="#1e293b" text-anchor="middle" font-weight="bold">10</text><text x="180" y="160" font-size="26" font-family="sans-serif" fill="#1e293b" text-anchor="middle" font-weight="bold">6</text><text x="300" y="160" font-size="30" font-family="sans-serif" fill="#dc2626" text-anchor="middle" font-weight="bold">?</text><line x1="205" y1="92" x2="280" y2="145" stroke="#dc2626" stroke-width="3"/><line x1="205" y1="150" x2="280" y2="92" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 4"/><text x="390" y="90" font-size="20" font-family="sans-serif" fill="#dc2626" font-weight="bold">? = 10 × 6 : 4</text><text x="390" y="125" font-size="20" font-family="sans-serif" fill="#1e293b" font-weight="bold">? = 60 : 4 = 15 €</text><text x="390" y="170" font-size="16" font-family="sans-serif" fill="#1e293b">înmulțește în cruce,</text><text x="390" y="192" font-size="16" font-family="sans-serif" fill="#1e293b">împarte la numărul</text><text x="390" y="214" font-size="16" font-family="sans-serif" fill="#1e293b">care rămâne</text><text x="240" y="230" font-size="16" font-family="sans-serif" fill="#475569" text-anchor="middle" font-weight="bold">Funcționează doar pentru proporționalitatea DIRECTĂ!</text></svg>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta proporționalității`,
      nodes: [
        { id: `grand`, label: `Mărimi variabile`, x: 50, y: 6, color: `#334155`, html: `Cantități care se pot schimba: x și y.`, why: `Ideea că o mărime depinde de alta (funcție) a fost dezvoltată în secolul al XVII-lea de <b>Galilei</b>, <b>Descartes</b> și apoi <b>Leibniz</b>, care a folosit primul cuvântul „funcție” (1673).` },
        { id: `dir`, label: `Proporționalitate directă`, x: 22, y: 30, color: `#16a34a`, html: `y / x = k → y = kx.`, why: `Derivă din teoria proporțiilor: dacă y₁ : x₁ = y₂ : x₂ pentru toate perechile, raportul este mereu același număr k.` },
        { id: `inv`, label: `Proporționalitate inversă`, x: 78, y: 30, color: `#2563eb`, html: `x · y = k → y = k / x.`, why: `Echivalează cu a spune că y este direct proporțional cu 1/x. În tratatele de abac medievale era „regula de trei inversă”.` },
        { id: `k`, label: `Constanta k`, x: 50, y: 48, color: `#ca8a04`, html: `Numărul care nu se schimbă: raport sau produs.`, why: `Adesea are o semnificație fizică: prețul unitar, viteza, distanța fixă. A găsi constanta înseamnă a înțelege „regula” fenomenului.` },
        { id: `retta`, label: `Dreaptă prin origine`, x: 18, y: 66, color: `#22c55e`, html: `Graficul celei directe.`, why: `Planul cartezian a fost imaginat de <b>René Descartes</b> (Cartesius) în <i>Géométrie</i> din 1637: a unit algebra cu geometria. Fiecare punct (x; kx) se află pe aceeași dreaptă pentru că „panta” y/x este mereu k.` },
        { id: `iperb`, label: `Hiperbolă echilateră`, x: 82, y: 66, color: `#3b82f6`, html: `Graficul celei inverse.`, why: `Numele vine de la <b>Apollonios din Perga</b> (secolul al III-lea î.Hr.), care a studiat conicele: elipsa, parabola, hiperbola. Toate dreptunghiurile dintre origine și un punct al curbei au aceeași arie k.` },
        { id: `tab`, label: `Tabele`, x: 50, y: 72, color: `#9333ea`, html: `Perechi de valori: se verifică raportul sau produsul.`, why: `Tabelele sunt cel mai vechi mod de a studia o relație: babilonienii aveau tabele de inverse (1/x) pentru a face împărțirile, acum circa 4000 de ani.` },
        { id: `fisica`, label: `Legile naturii`, x: 50, y: 92, color: `#dc2626`, html: `Hooke (directă), Boyle (inversă)…`, why: `Multe legi științifice descoperite în secolul al XVII-lea prin <b>metoda experimentală</b> sunt proporționalități: măsurând și punând datele în tabel și în grafic, oamenii de știință recunoșteau relația.` }
      ],
      edges: [
        [`grand`, `dir`, `pot fi`],
        [`grand`, `inv`, `pot fi`],
        [`dir`, `k`, `raport =`],
        [`inv`, `k`, `produs =`],
        [`dir`, `retta`, `grafic`],
        [`inv`, `iperb`, `grafic`],
        [`k`, `tab`, `se verifică cu`],
        [`tab`, `fisica`, `dezvăluie`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: inversa și problemele`,
      questions: [
        { type: `num`, q: `x · y = 36. Dacă x = 9, cât este y?`, answer: 4, explain: `y = 36 : 9 = 4.` },
        { type: `num`, q: `5 muncitori termină o lucrare în 12 zile. Câte zile sunt necesare pentru 10 muncitori?`, answer: 6, unit: `zile`, explain: `Inversă: k = 60 → 60 : 10 = 6.` },
        { type: `mc`, q: `Graficul proporționalității inverse este…`, options: [`o dreaptă prin origine`, `o hiperbolă echilateră`, `o parabolă`], answer: 1, explain: `Hiperbolă echilateră, care nu atinge axele.` }
      ]
    },
    {
      type: `remember`,
      title: `De ținut minte`,
      html: `<ul>
<li><b>Directă</b>: y/x = k, y = kx; x se dublează → y se dublează; grafic: <b>dreaptă prin origine</b>.</li>
<li><b>Inversă</b>: x·y = k, y = k/x; x se dublează → y se înjumătățește; grafic: <b>hiperbolă echilateră</b>.</li>
<li>Pentru a decide, verifică <b>raportul</b> sau <b>produsul</b> într-un tabel: nu este suficient „cresc împreună” sau „una crește și cealaltă scade”.</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Mărimi direct proporționale`, d: `Mărimi al căror raport este constant (y = kx).` },
    { t: `Mărimi invers proporționale`, d: `Mărimi al căror produs este constant (y = k/x).` },
    { t: `Constantă de proporționalitate`, d: `Valoarea k care rămâne aceeași pentru toate perechile.` },
    { t: `Funcție`, d: `Lege care asociază fiecărei valori a lui x o singură valoare a lui y.` },
    { t: `Plan cartezian`, d: `Plan cu două axe perpendiculare (x și y) pentru a reprezenta perechi de numere.` },
    { t: `Origine`, d: `Punctul (0; 0) în care se întâlnesc axele.` },
    { t: `Hiperbolă echilateră`, d: `Curba care este graficul proporționalității inverse.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Într-o proporționalitate directă, ce rămâne constant?`, options: [`Suma x + y`, `Raportul y / x`, `Produsul x · y`], answer: 1, explain: `y/x = k.` },
      { type: `mc`, q: `Într-o proporționalitate inversă, ce rămâne constant?`, options: [`Produsul x · y`, `Diferența y − x`, `Raportul y / x`], answer: 0, explain: `x · y = k.` },
      { type: `num`, q: `y = 3x. Cât este y dacă x = 12?`, answer: 36, explain: `3 × 12 = 36.` },
      { type: `num`, q: `3 kg de pâine costă 7,50 €. Cât costă 5 kg (în €)?`, answer: 12.5, tol: 0.01, unit: `€`, explain: `Directă: 7,50 : 3 = 2,50 €/kg → 2,50 × 5 = 12,50 €.` },
      { type: `num`, q: `La 60 km/h o călătorie durează 3 ore. Cât durează la 90 km/h?`, answer: 2, unit: `h`, explain: `Inversă: 60 × 3 = 180 km → 180 : 90 = 2 h.` },
      { type: `tf`, q: `Graficul proporționalității directe trece întotdeauna prin origine.`, answer: true, explain: `Dacă x = 0, y = k · 0 = 0.` },
      { type: `tf`, q: `Dacă o mărime crește și cealaltă scade, sunt întotdeauna invers proporționale.`, answer: false, explain: `Este nevoie ca produsul să fie constant: de ex. banii cheltuiți/rămași nu este.` },
      { type: `mc`, q: `Numărul de bilete și costul total (bilet cu preț fix) sunt…`, options: [`direct proporționale`, `invers proporționale`, `neproporționale`], answer: 0, explain: `Costul total / bilete = prețul fix.` },
      { type: `num`, q: `Un tort se împarte în părți egale: cu 4 prieteni, fiecare primește 150 g. Câte grame primește fiecare cu 6 prieteni?`, answer: 100, unit: `g`, explain: `Inversă: 4 × 150 = 600 g → 600 : 6 = 100 g.` },
      { type: `mc`, q: `Care tabel arată o proporționalitate inversă?`, options: [`x: 1, 2, 4 — y: 3, 6, 12`, `x: 1, 2, 4 — y: 8, 4, 2`, `x: 1, 2, 4 — y: 5, 6, 8`], answer: 1, explain: `1·8 = 2·4 = 4·2 = 8: produs constant.` },
      { type: `order`, q: `Pune în ordine pașii pentru a rezolva o problemă de proporționalitate.`, items: [`Înțeleg dacă este directă sau inversă`, `Calculez constanta k`, `Calculez valoarea cerută`, `Verific dacă rezultatul are sens`], explain: `A recunoaște, a găsi k, a calcula, a verifica.` }
    ],
    gen: [[`proportion`, 2]]
  }
});

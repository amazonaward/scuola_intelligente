TOPIC('ro', {
  id: "p5-mat-percentuali",
  title: "Procentele",
  intro: "«Reduceri: −30%!», «Bateria la 15%», «60% dintre elevii clasei preferă fotbalul». <b>Procentele</b> sunt peste tot. Simbolul <b>%</b> înseamnă pur și simplu <b>„la sută”</b>. Să învățăm să le calculăm, să le folosim pentru <b>reduceri</b> și <b>scumpiri</b> și să le citim în <b>diagramele circulare</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ce este un procent",
      html: `<p>Un <b>procent</b> este o <b>fracție cu numitorul 100</b>, scrisă cu simbolul <b>%</b> („la sută”).</p>
<ul>
<li><b>25%</b> = 25/100 = 0,25 → 25 de părți din 100;</li>
<li><b>50%</b> = 50/100 = 1/2 → <b>jumătatea</b>;</li>
<li><b>100%</b> = 100/100 = 1 → <b>totul</b>, întregul;</li>
<li><b>10%</b> = 10/100 = 1/10 → o zecime.</li>
</ul>
<p>De ce chiar 100? Pentru că așa este foarte ușor de <b>comparat</b>: „18 din 25” și „35 din 50” sunt greu de comparat, dar „72%” și „70%” se compară imediat!</p>`
    },
    {
      type: "svg",
      title: "Grila lui 100",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g transform="translate(30,30)">
<rect x="0" y="0" width="240" height="240" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<rect x="0" y="0" width="240" height="48" fill="#f97316"/>
<rect x="0" y="48" width="120" height="24" fill="#f97316"/>
<g stroke="#cbd5e1" stroke-width="1">
<line x1="24" y1="0" x2="24" y2="240"/><line x1="48" y1="0" x2="48" y2="240"/><line x1="72" y1="0" x2="72" y2="240"/><line x1="96" y1="0" x2="96" y2="240"/><line x1="120" y1="0" x2="120" y2="240"/><line x1="144" y1="0" x2="144" y2="240"/><line x1="168" y1="0" x2="168" y2="240"/><line x1="192" y1="0" x2="192" y2="240"/><line x1="216" y1="0" x2="216" y2="240"/>
<line x1="0" y1="24" x2="240" y2="24"/><line x1="0" y1="48" x2="240" y2="48"/><line x1="0" y1="72" x2="240" y2="72"/><line x1="0" y1="96" x2="240" y2="96"/><line x1="0" y1="120" x2="240" y2="120"/><line x1="0" y1="144" x2="240" y2="144"/><line x1="0" y1="168" x2="240" y2="168"/><line x1="0" y1="192" x2="240" y2="192"/><line x1="0" y1="216" x2="240" y2="216"/>
</g>
</g>
<text x="310" y="70" font-size="20" fill="#1f2937">100 de pătrățele = <tspan font-weight="bold">100%</tspan> (întregul)</text>
<text x="310" y="115" font-size="20" fill="#c2410c">25 de pătrățele colorate</text>
<text x="310" y="150" font-size="26" fill="#c2410c" font-weight="bold">= 25/100 = 25%</text>
<text x="310" y="190" font-size="20" fill="#1f2937">= 0,25 = 1/4</text>
<text x="310" y="235" font-size="17" fill="#475569">un sfert din grilă!</text>
</svg>`,
      caption: "Într-o grilă de 100 de pătrățele, fiecare pătrățel este 1%. A colora 25 înseamnă a colora 25%."
    },
    {
      type: "widget",
      title: "Construiește procentul pe pătrățele",
      widget: "areaGrid",
      options: { w: 5, h: 4, max: 10 },
      caption: "Grila 10 × 10 are 100 de pătrățele: aria colorată este procentul. Cu 5 × 4 = 20 de pătrățele ai 20%. Încearcă să faci 30%, 50%, 64%!"
    },
    {
      type: "text",
      title: "Calcularea procentului dintr-un număr",
      html: `<p>A calcula un procent este ca și cum ai calcula o <b>fracție dintr-un număr</b> cu numitorul 100:</p>
<ol>
<li><b>împarte</b> numărul la <b>100</b> (afli 1%);</li>
<li><b>înmulțește</b> cu procentul.</li>
</ol>
<p>Exemplu: 30% din 250 → 250 : 100 = 2,5 → 2,5 × 30 = <b>75</b>.</p>
<p>Sau invers: 250 × 30 : 100 = 7500 : 100 = <b>75</b>.</p>
<p><b>Procente „prietene”</b> de ținut minte: 50% = jumătate (: 2), 25% = un sfert (: 4), 10% = o zecime (: 10), 20% = o cincime (: 5), 75% = trei sferturi.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: clasa și sportul",
      html: `<p>În clasa a V-a A sunt <b>20 de elevi</b>. <b>40%</b> fac înot. Câți sunt?</p>
<p>20 : 100 × 40 = <b>8 elevi</b>. Truc: 10% din 20 este 2, deci 40% este 2 × 4 = 8.</p>
<p>Și invers: <b>5 elevi din 20</b> cântă la un instrument. Ce procent este? 5/20 = 25/100 = <b>25%</b> (am înmulțit numărătorul și numitorul cu 5 ca să ajung la 100).</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: calcularea procentelor",
      questions: [
        { type: "num", q: "Cât este 50% din 84?", answer: 42, explain: "50% este jumătatea: 84 : 2 = 42." },
        { type: "num", q: "Cât este 10% din 350?", answer: 35, explain: "10% este o zecime: 350 : 10 = 35." },
        { type: "mc", q: "25% corespunde fracției…", options: ["1/2", "1/4", "1/25"], answer: 1, explain: "25/100 = 1/4." },
        { type: "num", q: "3 elevi din 10 poartă ochelari. Ce procent este?", answer: 30, unit: "%", explain: "3/10 = 30/100 = 30%." }
      ]
    },
    {
      type: "text",
      title: "Reduceri și scumpiri",
      html: `<p><b>Reducere</b>: prețul <b>scade</b> cu un procent.</p>
<ol>
<li>calculează reducerea: preț × % : 100;</li>
<li>scade reducerea din preț: <b>preț redus = preț − reducere</b>.</li>
</ol>
<p>Pantofi de <b>60 €</b> cu reducere de <b>20%</b>: reducere = 60 × 20 : 100 = 12 € → preț final <b>60 − 12 = 48 €</b>.</p>
<p><b>Scumpire</b>: prețul <b>crește</b> cu un procent. Abonament de <b>40 €</b> scumpit cu <b>5%</b>: scumpire = 40 × 5 : 100 = 2 € → preț nou <b>42 €</b>.</p>
<p><b>Scurtătură</b>: cu reducere de 20% plătești <b>80%</b> din preț: 60 × 80 : 100 = 48 €. Același rezultat!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: reducerile",
      html: `<p>O bicicletă costă <b>180 €</b>. În perioada reducerilor este redusă cu <b>30%</b>.</p>
<ul>
<li>Reducere: 180 : 100 × 30 = <b>54 €</b>.</li>
<li>Preț redus: 180 − 54 = <b>126 €</b>.</li>
<li>Verificare: 70% din 180 = 18 × 7 = 126 € ✅.</li>
</ul>
<p>⚠️ <b>Atenție la păcăleală!</b> Dacă un preț crește cu 10% și apoi scade cu 10%, <b>nu</b> revine la fel: 100 € → +10% = 110 € → −10% = 99 €! Pentru că al doilea 10% se calculează din 110, nu din 100.</p>`
    },
    {
      type: "text",
      title: "Diagramele circulare (diagrame „pe felii”)",
      html: `<p><b>Diagrama circulară</b> (grafico a torta, sau aerogramma) este un cerc împărțit în felii: <b>tot cercul este 100%</b>, iar fiecare felie arată un procent.</p>
<p>Cercul are <b>360°</b>, deci:</p>
<ul>
<li>100% = 360°, 50% = 180° (jumătate de cerc), 25% = 90° (un unghi drept), 10% = 36°;</li>
<li><b>1% = 3,6°</b>: ca să desenezi o felie, înmulțește procentul cu 3,6.</li>
</ul>
<p>Suma tuturor feliilor trebuie să fie întotdeauna <b>100%</b> (și 360°).</p>`
    },
    {
      type: "svg",
      title: "Fructul preferat din clasa a V-a B",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fffbeb"/>
<path d="M160,150 L160,30 A120,120 0 0,1 280,150 Z" fill="#ef4444"/>
<path d="M160,150 L280,150 A120,120 0 0,1 160,270 Z" fill="#facc15"/>
<path d="M160,150 L160,270 A120,120 0 0,1 62.9,220.5 Z" fill="#22c55e"/>
<path d="M160,150 L62.9,220.5 A120,120 0 0,1 160,30 Z" fill="#f97316"/>
<g font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="210" y="105">25%</text><text x="210" y="205">25%</text><text x="125" y="228">15%</text><text x="105" y="125">35%</text>
</g>
<g font-size="18" fill="#1f2937">
<rect x="340" y="50" width="24" height="24" fill="#f97316"/><text x="374" y="69">🍊 portocală 35% (7 elevi)</text>
<rect x="340" y="95" width="24" height="24" fill="#ef4444"/><text x="374" y="114">🍎 măr 25% (5 elevi)</text>
<rect x="340" y="140" width="24" height="24" fill="#facc15"/><text x="374" y="159">🍌 banană 25% (5 elevi)</text>
<rect x="340" y="185" width="24" height="24" fill="#22c55e"/><text x="374" y="204">🍐 pară 15% (3 elevi)</text>
<text x="340" y="250" font-weight="bold">Total: 20 de elevi = 100%</text>
</g>
</svg>`,
      caption: "Fiecare elev valorează 100 : 20 = 5%. Mărul (25%) ocupă un sfert de cerc: 90°."
    },
    {
      type: "curiosity",
      title: "Știai că…? De unde vine simbolul %",
      html: `<p>Simbolul <b>%</b> s-a născut în <b>Italia</b>! În manuscrisele negustorilor din secolul al XV-lea se scria <i>„per cento”</i> prescurtat <b>„p cento”</b> sau <b>„p c°”</b>. De atâta scris în grabă, „c” și cerculețul au devenit un fel de fracție cu două cerculețe: <b>%</b>. Există și <b>la mie ‰</b> (cu trei cerculețe), folosit de exemplu pentru salinitatea mării (aproximativ 35‰).</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Prima diagramă circulară",
      html: `<p>Prima diagramă circulară cunoscută a fost desenată în <b>1801</b> de inginerul scoțian <b>William Playfair</b>, care a inventat și diagrama cu bare și pe cea cu linii. Mai târziu, asistenta medicală <b>Florence Nightingale</b> a folosit o diagramă asemănătoare, în formă de „floare”, ca să arate că în timpul războiului din Crimeea (1853–1856) mureau mai mulți soldați din cauza bolilor decât din cauza rănilor: datorită diagramelor ei, spitalele militare și-au îmbunătățit igiena!</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>% = la sută</b>: 35% = 35/100 = 0,35.</li>
<li>Procentul dintr-un număr: <b>număr × % : 100</b>.</li>
<li><b>Reducere</b>: preț − reducere (sau plătești 100% − reducerea%). <b>Scumpire</b>: preț + scumpire.</li>
<li>Diagrama circulară: <b>100% = 360°</b>, 1% = 3,6°.</li>
<li>50% = jumătate, 25% = un sfert, 10% = o zecime, 20% = o cincime.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege procentele",
      intro: "Procentele se pot înțelege cu tortul, cu metoda lui 10% folosită în țările anglo-saxone, cu bateria telefonului sau cu tabelul proporțiilor.",
      tabs: [
        {
          label: "🥧 Tort și fracții",
          html: `<p>Procentele sunt <b>fracții deghizate</b>! Mișcă cursoarele: cu 1/4 tortul este la <b>25%</b>, cu 1/2 la <b>50%</b>, cu 3/4 la <b>75%</b>, cu 1/5 la <b>20%</b>, cu 1/10 la <b>10%</b>.</p>
<p>Pentru a trece de la fracție la procent, află fracția echivalentă cu numitorul 100: 3/5 = 60/100 = <b>60%</b>.</p>`,
          widget: "fractionPie",
          options: { n: 1, d: 4 }
        },
        {
          label: "🔟 Metoda lui 10%",
          html: `<p>În Anglia și în multe alte țări se învață să se calculeze totul pornind de la <b>10%</b>, care se află imediat împărțind la 10:</p>
<ul>
<li>10% din 80 = <b>8</b></li>
<li>20% = 8 × 2 = <b>16</b>;  30% = 8 × 3 = <b>24</b></li>
<li>5% = jumătate din 10% = <b>4</b></li>
<li>15% = 10% + 5% = 8 + 4 = <b>12</b></li>
<li>1% = 10% : 10 = <b>0,8</b></li>
</ul>
<p>Așa 35% din 80 = 30% + 5% = 24 + 4 = <b>28</b>. Totul din cap, fără hârtie! 🧠</p>`
        },
        {
          label: "🔋 Bateria",
          html: `<p><b>Bateria telefonului</b> este un „măsurător de procente” perfect: 100% este plină, 0% este descărcată, 50% este la jumătate.</p>
<p>Dacă bateria ține <b>20 de ore</b> și ești la <b>25%</b>, îți rămân 20 × 25 : 100 = <b>5 ore</b>.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f1f5f9"/>
<g stroke="#1f2937" stroke-width="4">
<rect x="30" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="170" y="80" width="10" height="30" fill="#1f2937"/>
<rect x="220" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="360" y="80" width="10" height="30" fill="#1f2937"/>
<rect x="410" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="550" y="80" width="10" height="30" fill="#1f2937"/>
</g>
<rect x="36" y="66" width="128" height="58" rx="6" fill="#22c55e"/>
<rect x="226" y="66" width="64" height="58" rx="6" fill="#facc15"/>
<rect x="416" y="66" width="32" height="58" rx="6" fill="#ef4444"/>
<g font-size="22" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="100" y="165">100%</text><text x="290" y="165">50%</text><text x="480" y="165">25%</text>
</g>
<g font-size="15" text-anchor="middle" fill="#475569">
<text x="100" y="190">plină</text><text x="290" y="190">jumătate</text><text x="480" y="190">un sfert</text>
</g>
</svg>`
        },
        {
          label: "📊 Tabelul (proporția)",
          html: `<p>Poți folosi un <b>tabel cu două rânduri</b>: sus cantitatea, jos procentul. Ce faci la o coloană faci și la cealaltă.</p>
<table>
<tr><th>Cantitatea</th><td>240</td><td>24</td><td>72</td></tr>
<tr><th>Procentul</th><td>100%</td><td>10%</td><td>30%</td></tr>
</table>
<p>De la 100% la 10% împart la 10 (și 240 : 10 = 24); de la 10% la 30% înmulțesc cu 3 (24 × 3 = 72). Deci <b>30% din 240 este 72</b>. În gimnaziu aceasta va deveni o <b>proporție</b>: 240 : 100 = x : 30.</p>`
        },
        {
          "label": "🇸🇬 Modelul cu bare (Singapore)",
          "html": "<p>La <b>Singapore</b> problemele cu procente se rezolvă desenând o <b>bară</b>: bara întreagă este <b>100%</b> și se împarte în părți egale.</p><p><b>Problema 1</b>: o bicicletă costă <b>240 €</b> și este redusă cu <b>25%</b>. Cât plătești?</p><ol><li>Desenează o bară = 100% = 240 €.</li><li>25% este un sfert: împarte bara în <b>4 părți</b>. Fiecare parte valorează 240 : 4 = <b>60 €</b>.</li><li>Reducerea este 1 parte (60 €); tu plătești celelalte 3 părți: 3 × 60 = <b>180 €</b>.</li></ol><p><b>Problema 2</b> (invers!): <b>30%</b> dintre copiii unei clase sunt <b>6</b>. Câți copii sunt în total?</p><ol><li>Împarte bara în <b>10 părți</b> de câte 10%.</li><li>30% = 3 părți = 6 copii → 1 parte = 6 : 3 = 2.</li><li>Toată bara = 10 părți = <b>20 de copii</b>.</li></ol><p>Desenul te face să vezi imediat dacă trebuie să înmulțești sau să împarți.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><text x=\"20\" y=\"30\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Bicicletă: 240 € — reducere 25%</text><rect x=\"40\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"100\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"160\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"220\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"280\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"340\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"400\" y=\"45\" width=\"120\" height=\"44\" fill=\"#fecaca\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"460\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><text x=\"40\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">100% = 240 €  →  1 parte = 240 : 4 = 60 €</text><text x=\"40\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">Plătești 3 părți = 180 €</text><text x=\"400\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">reducere</text><line x1=\"20\" y1=\"152\" x2=\"580\" y2=\"152\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"180\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">30% din clasă = 6 copii. Câți în total?</text><rect x=\"40\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"65\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"90\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"115\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"140\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"165\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"190\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"215\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"240\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"265\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"290\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"315\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"340\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"365\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"390\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"415\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"440\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"465\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"490\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"515\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><text x=\"40\" y=\"258\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">3 părți de 10% = 6  →  1 parte = 2</text><text x=\"40\" y=\"280\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">10 părți = 100% = 20 de copii</text></svg>"
        },
        {
          "label": "🇬🇧 «Multiplicatorul» englezesc",
          "html": "<p>În școlile din <b>Regatul Unit</b> se învață un truc foarte rapid pentru reduceri și scumpiri: <b>multiplier</b>, adică <b>multiplicatorul</b>. Ideea: în loc să calculezi reducerea și apoi s-o scazi, calculezi <b>direct cât plătești</b>.</p><ul><li>Reducere de <b>20%</b> → plătești <b>80%</b> → 80/100 = <b>0,8</b> → înmulțește cu 0,8.<br>45 € × 0,8 = <b>36 €</b>.</li><li>Reducere de <b>50%</b> → plătești 50% → × 0,5 (adică jumătate).</li><li>Scumpire de <b>10%</b> → plătești <b>110%</b> → × <b>1,1</b>.<br>50 € × 1,1 = <b>55 €</b>.</li></ul><p><b>Cum afli multiplicatorul</b>: pornești de la 100%, scazi reducerea (sau adaugi scumpirea) și împarți la 100.</p><p>⚠️ <b>Capcană</b>: o scumpire de 10% urmată de o reducere de 10% <b>nu</b> te readuce la prețul de pornire! 100 € × 1,1 = 110 €; 110 € × 0,9 = <b>99 €</b>. De ce? Al doilea 10% este calculat dintr-un număr mai mare.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta procentelor",
      nodes: [
        { id: "frazioni", label: "Fracții zecimale", x: 50, y: 6, color: "#64748b", html: "Fracții cu numitorul 10, 100, 1000.", why: "Procentele sunt un caz special: fracții cu numitorul 100. De aceea tot ce știi despre fracții este valabil și pentru procente." },
        { id: "percentuale", label: "Procent", x: 50, y: 28, color: "#2563eb", html: "O fracție din 100, scrisă cu %: 35% = 35/100.", why: "Din latinescul <i>per centum</i> = „la fiecare sută”. Romanii aveau deja o taxă de 1/100 (<i>centesima rerum venalium</i>) pe mărfurile vândute la licitație, introdusă de Augustus." },
        { id: "simbolo", label: "Simbolul %", x: 15, y: 28, color: "#a855f7", html: "Semnul care înseamnă „la sută”.", why: "Născut din prescurtările negustorilor italieni din secolul al XV-lea („p cento” → „p c°” → %). Folosirea mereu a lui 100 ca numitor face comparațiile ușoare." },
        { id: "calcolo", label: "% dintr-un număr", x: 22, y: 55, color: "#16a34a", html: "Număr × procent : 100.", why: "Este regula fracției dintr-un număr (împărțit la numitor, înmulțit cu numărător) cu numitorul 100." },
        { id: "decimale", label: "Forma zecimală", x: 50, y: 55, color: "#eab308", html: "35% = 0,35; 5% = 0,05; 100% = 1.", why: "Împărțirea la 100 mută virgula cu două locuri spre stânga: de aceea calculatoarele transformă procentele în numere zecimale." },
        { id: "sconti", label: "Reduceri și scumpiri", x: 22, y: 82, color: "#dc2626", html: "Preț − reducere; preț + scumpire.", why: "S-au născut odată cu comerțul: negustorii calculau dobânzi, câștiguri și pierderi „la sută” în registrele lor, încă din Evul Mediu (Fibonacci vorbește despre ele în <i>Liber Abaci</i>, 1202)." },
        { id: "torta", label: "Diagrama circulară", x: 78, y: 55, color: "#f97316", html: "Cerc împărțit în felii: 100% = 360°.", why: "Inventată de William Playfair în 1801. Funcționează pentru că cercul întreg reprezintă bine ideea de „tot” (100%)." },
        { id: "gradi", label: "1% = 3,6°", x: 78, y: 82, color: "#0ea5e9", html: "Pentru a desena o felie: procent × 3,6.", why: "Cercul are 360°, o moștenire de la babilonieni, care numărau în baza 60: 360 : 100 = 3,6." },
        { id: "statistica", label: "Statistică", x: 50, y: 92, color: "#14b8a6", html: "A aduna date și a le compara cu procente.", why: "Procentele permit compararea unor grupuri de mărimi diferite (5 din 20 și 30 din 120 sunt amândouă 25%): de aceea institutele de statistică și sondajele le folosesc mereu." }
      ],
      edges: [
        ["frazioni", "percentuale", "caz special"],
        ["percentuale", "simbolo", "se scrie cu"],
        ["percentuale", "calcolo", "se calculează"],
        ["percentuale", "decimale", "este echivalent cu"],
        ["calcolo", "sconti", "servește la"],
        ["percentuale", "torta", "se reprezintă cu"],
        ["torta", "gradi", "se desenează cu"],
        ["decimale", "statistica", "folosită în"],
        ["torta", "statistica", "folosită în"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: reduceri și diagrame",
      questions: [
        { type: "num", q: "Un joc costă 50 € și este redus cu 10%. Cât plătești?", answer: 45, unit: "€", explain: "Reducere: 5 €; 50 − 5 = 45 €." },
        { type: "num", q: "Într-o diagramă circulară, câte grade măsoară felia de 50%?", answer: 180, unit: "°", explain: "50% din 360° = 180°." },
        { type: "tf", q: "Într-o diagramă circulară suma procentelor trebuie să fie 100%.", answer: true, explain: "Cercul întreg reprezintă totalul, adică 100%." }
      ]
    }
  ],
  glossary: [
    { t: "Procent", d: "Fracție cu numitorul 100, indicată cu simbolul %." },
    { t: "Reducere", d: "Scăderea unui preț, adesea exprimată în procente." },
    { t: "Preț redus", d: "Prețul inițial minus reducerea." },
    { t: "Scumpire (majorare)", d: "Creșterea unui preț sau a unei cantități, adesea exprimată în procente." },
    { t: "Diagramă circulară", d: "Cerc împărțit în felii proporționale cu procentele; cercul întreg este 100%." },
    { t: "La mie (‰)", d: "Fracție cu numitorul 1000." },
    { t: "Total", d: "Întregul de referință, care corespunde lui 100%." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce înseamnă 40%?", options: ["40 din 10", "40 din 100", "40 din 1000"], answer: 1, explain: "La sută = din o sută: 40/100." },
      { type: "num", q: "Cât este 25% din 120?", answer: 30, explain: "25% este un sfert: 120 : 4 = 30." },
      { type: "num", q: "Cât este 15% din 200?", answer: 30, explain: "200 × 15 : 100 = 30." },
      { type: "mc", q: "Ce procent este echivalent cu 3/4?", options: ["34%", "75%", "43%"], answer: 1, explain: "3/4 = 75/100 = 75%." },
      { type: "num", q: "Un tricou costă 30 € cu reducere de 20%. Cât se plătește?", answer: 24, unit: "€", explain: "Reducere: 30 × 20 : 100 = 6 €; 30 − 6 = 24 €." },
      { type: "num", q: "Abonamentul costă 200 € și se scumpește cu 5%. Care este prețul nou?", answer: 210, unit: "€", explain: "Scumpire: 10 €; 200 + 10 = 210 €." },
      { type: "num", q: "Într-o clasă de 25 de elevi, 5 au câine. Ce procent este?", answer: 20, unit: "%", explain: "5/25 = 20/100 = 20%." },
      { type: "num", q: "Într-o diagramă circulară, câte grade corespund lui 25%?", answer: 90, unit: "°", explain: "360 × 25 : 100 = 90°." },
      { type: "tf", q: "0,07 și 7% indică aceeași cantitate.", answer: true, explain: "7% = 7/100 = 0,07." },
      { type: "tf", q: "Dacă un preț crește cu 10% și apoi scade cu 10%, revine la prețul inițial.", answer: false, explain: "100 → 110 → 99: al doilea 10% se calculează dintr-o sumă mai mare." },
      { type: "order", q: "Ordonează de la cea mai mică cantitate la cea mai mare.", items: ["5% din 100", "10% din 100", "1/4 din 100", "50% din 100"], explain: "5 < 10 < 25 < 50." },
      { type: "mc", q: "Unde s-a născut simbolul %?", options: ["în manuscrisele negustorilor italieni", "în piramidele egiptene", "în computerele americane"], answer: 0, explain: "Din prescurtarea lui «per cento» în manuscrisele comerciale italiene din secolul al XV-lea." }
    ],
    gen: [["percent", 3]]
  }
});

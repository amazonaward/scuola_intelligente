TOPIC('ro', {
  id: "p5-mat-operazioni-decimali",
  title: "Operații cu numere zecimale",
  intro: "Prețuri, măsuri, timpii de la concursuri: <b>numerele zecimale</b> sunt peste tot. În această lecție înveți să faci <b>cele patru operații cu virgulă</b> și să înmulțești și să împarți cu 10, 100, 1000 „mutând” virgula.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Recapitulare: cum este alcătuit un număr zecimal",
      html: `<p>Un număr zecimal are o <b>parte întreagă</b> (înainte de virgulă) și o <b>parte zecimală</b> (după virgulă).</p>
<p>În numărul <b>34,56</b>:</p>
<ul>
<li>3 = zeci (z), 4 = unități (u) → partea întreagă;</li>
<li>5 = <b>zecimi</b> (zi): 1 zecime = 1/10 = 0,1;</li>
<li>6 = <b>sutimi</b> (s): 1 sutime = 1/100 = 0,01;</li>
<li>cifra următoare ar fi cea a <b>miimilor</b> (m): 1/1000 = 0,001.</li>
</ul>
<p>Regula de aur: adăugarea de <b>zerouri la sfârșitul</b> părții zecimale <b>nu schimbă</b> numărul: 2,5 = 2,50 = 2,500. Acest truc ne va folosi foarte mult!</p>`
    },
    {
      type: "text",
      title: "Adunarea și scăderea: virgulă sub virgulă",
      html: `<ol>
<li>Scrie numerele în coloană cu <b>virgula sub virgulă</b> (astfel unitățile sunt sub unități, zecimile sub zecimi…).</li>
<li>Dacă un număr are mai puține zecimale, <b>adaugă zerouri</b> ca să egalezi: 12,4 → 12,40.</li>
<li>Fă operația ca la numerele întregi, de la dreapta la stânga, cu transport și împrumut.</li>
<li>În rezultat pune <b>virgula sub celelalte virgule</b>.</li>
</ol>
<p>Exemplu: 12,4 + 3,75 → 12,40 + 3,75 = <b>16,15</b>. Exemplu: 8 − 2,35 → 8,00 − 2,35 = <b>5,65</b>.</p>`
    },
    {
      type: "svg",
      title: "În coloană, virgulă sub virgulă",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-size="15" text-anchor="middle" font-weight="bold">
<text x="80" y="36" fill="#7c3aed">z</text><text x="120" y="36" fill="#2563eb">u</text><text x="180" y="36" fill="#16a34a">zi</text><text x="220" y="36" fill="#dc2626">s</text>
</g>
<rect x="148" y="44" width="10" height="170" fill="#fde68a"/>
<g font-size="34" text-anchor="middle" font-family="monospace" fill="#1f2937">
<text x="80" y="84">1</text><text x="120" y="84">2</text><text x="153" y="84">,</text><text x="180" y="84">4</text><text x="220" y="84" fill="#f97316">0</text>
<text x="40" y="134">+</text><text x="120" y="134">3</text><text x="153" y="134">,</text><text x="180" y="134">7</text><text x="220" y="134">5</text>
<text x="80" y="200" font-weight="bold">1</text><text x="120" y="200" font-weight="bold">6</text><text x="153" y="200" font-weight="bold">,</text><text x="180" y="200" font-weight="bold">1</text><text x="220" y="200" font-weight="bold">5</text>
</g>
<line x1="30" y1="150" x2="250" y2="150" stroke="#1f2937" stroke-width="3"/>
<text x="132" y="58" font-size="14" text-anchor="middle" fill="#64748b">1</text>
<text x="235" y="250" font-size="15" text-anchor="middle" fill="#ea580c">zero adăugat</text>
<line x1="228" y1="234" x2="222" y2="92" stroke="#ea580c" stroke-width="2"/>
<g font-size="16" fill="#1f2937">
<text x="300" y="70">1) virgulă sub virgulă</text>
<text x="300" y="105">2) egalez cu zerouri: 12,4 → 12,40</text>
<text x="300" y="140">3) calculez de la dreapta, cu transport:</text>
<text x="320" y="165">0 + 5 = 5;  4 + 7 = 11 → scriu 1, țin minte 1</text>
<text x="300" y="200">4) virgula din rezultat coboară</text>
<text x="320" y="225">în aceeași coloană</text>
</g>
</svg>`,
      caption: "Coloana galbenă a virgulelor ține cifrele în ordine: zecimi cu zecimi, sutimi cu sutimi."
    },
    {
      type: "example",
      title: "Exemplu practic: cumpărăturile",
      html: `<p>Mama cumpără: pâine <b>2,35 €</b>, lapte <b>1,49 €</b>, mere <b>3,2 €</b>. Plătește cu o bancnotă de <b>10 €</b>.</p>
<ol>
<li>Total: 2,35 + 1,49 + 3,20 = <b>7,04 €</b> (atenție: 3,2 → 3,20!).</li>
<li>Rest: 10,00 − 7,04 = <b>2,96 €</b>.</li>
</ol>
<p>Verificare rapidă (estimare): 2 + 1,5 + 3 ≈ 6,5, deci totalul este cam 7 €: rezultatul este rezonabil. ✅</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: adunarea și scăderea",
      questions: [
        { type: "num", q: "4,5 + 2,35 = ?", answer: 6.85, explain: "4,50 + 2,35 = 6,85." },
        { type: "num", q: "10 − 3,6 = ?", answer: 6.4, explain: "10,0 − 3,6 = 6,4." },
        { type: "tf", q: "3,7 și 3,70 sunt același număr.", answer: true, explain: "Zerourile de la sfârșitul părții zecimale nu schimbă valoarea." }
      ]
    },
    {
      type: "text",
      title: "Înmulțirea și împărțirea cu 10, 100, 1000",
      html: `<p>Aceasta este partea cea mai „magică”:</p>
<ul>
<li><b>× 10, × 100, × 1000</b> → virgula se mută spre <b>dreapta</b> cu <b>1, 2, 3</b> locuri (numărul devine mai mare). 3,456 × 10 = 34,56; 3,456 × 100 = 345,6; 3,456 × 1000 = 3456.</li>
<li><b>: 10, : 100, : 1000</b> → virgula se mută spre <b>stânga</b> cu <b>1, 2, 3</b> locuri (numărul devine mai mic). 45,7 : 10 = 4,57; 45,7 : 100 = 0,457.</li>
</ul>
<p>Dacă lipsesc cifre, se adaugă <b>zerouri</b>: 2,5 × 1000 = 2500; 3 : 100 = 0,03.</p>
<p>Trucul: <b>numără zerourile</b> lui 10, 100, 1000. Atâtea zerouri = atâtea locuri.</p>`
    },
    {
      type: "text",
      title: "Înmulțirea cu virgulă",
      html: `<ol>
<li>Fă înmulțirea <b>ca și cum nu ar exista virgule</b>.</li>
<li><b>Numără</b> câte zecimale sunt <b>în total</b> la cei doi factori.</li>
<li>În rezultat, pornind de la dreapta, separă cu virgulă <b>același număr de cifre</b>.</li>
</ol>
<p>Exemplu: 2,3 × 1,4 → 23 × 14 = 322. Zecimale: 1 + 1 = 2 → <b>3,22</b>.</p>
<p>Exemplu: 0,5 × 0,3 → 5 × 3 = 15. Zecimale: 2 → <b>0,15</b>.</p>
<p>⚠️ Înmulțirea cu un număr <b>mai mic decât 1</b> dă un rezultat <b>mai mic</b>: 0,5 × 8 = 4 (este jumătatea lui 8!).</p>`
    },
    {
      type: "widget",
      title: "Înmulțirea ca arie: 0,3 × 0,4",
      widget: "areaGrid",
      options: { w: 3, h: 4, max: 10 },
      caption: "Imaginează-ți că pătratul mare 10 × 10 este 1 întreg: fiecare latură este 1 și fiecare pătrățel valorează 0,01. Un dreptunghi cu 3 coloane (0,3) și 4 rânduri (0,4) conține 12 pătrățele: 0,3 × 0,4 = 0,12."
    },
    {
      type: "text",
      title: "Împărțirea cu virgulă",
      html: `<p><b>Cazul 1 – virgula este în deîmpărțit</b> (de ex. 7,5 : 3):</p>
<ol>
<li>împarți normal partea întreagă: 7 : 3 = 2 rest 1;</li>
<li><b>când cobori prima cifră de după virgulă, pune virgula în cât</b>: cobori 5 → 15 : 3 = 5 → rezultat <b>2,5</b>.</li>
</ol>
<p><b>Cazul 2 – virgula este în împărțitor</b> (de ex. 6 : 1,5):</p>
<ol>
<li>folosește <b>proprietatea de invarianță</b>: înmulțește deîmpărțitul și împărțitorul cu <b>același număr</b> (10, 100…) ca să scoți virgula din împărțitor;</li>
<li>6 : 1,5 → (× 10) → 60 : 15 = <b>4</b>.</li>
</ol>
<p><b>Cazul 3 – restul nu este zero</b>: poți continua adăugând un <b>zero</b> la rest și punând virgula în cât: 7 : 4 = 1 rest 3 → 30 : 4 = 7 rest 2 → 20 : 4 = 5 → <b>1,75</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: împărțim nota de plată de la pizzerie",
      html: `<p>Patru prieteni cheltuiesc la pizzerie <b>38,60 €</b> și împart nota în părți egale.</p>
<p>38,60 : 4 → 38 : 4 = 9 rest 2; cobor 6 (pun virgula!) → 26 : 4 = 6 rest 2; cobor 0 → 20 : 4 = 5. Rezultat: <b>9,65 €</b> de fiecare.</p>
<p>Verificare: 9,65 × 4 = 38,60 ✅. Înmulțirea este operația <b>inversă</b> a împărțirii: este cel mai bun mod de a verifica!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: benzina și scuterul",
      html: `<p>Benzina costă <b>1,85 €</b> litrul. Bunicul pune <b>12 litri</b>. Cât cheltuiește?</p>
<p>185 × 12 = 2220 → 2 zecimale → <b>22,20 €</b>.</p>
<p>Scuterul parcurge <b>34,5 km</b> cu 1 litru. Cu 12 litri: 34,5 × 12 = <b>414 km</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: înmulțirea și împărțirea",
      questions: [
        { type: "num", q: "4,73 × 100 = ?", answer: 473, explain: "× 100: virgula se mută cu 2 locuri spre dreapta." },
        { type: "num", q: "56 : 1000 = ?", answer: 0.056, explain: ": 1000: virgula se mută cu 3 locuri spre stânga, adăugând zerouri: 0,056." },
        { type: "num", q: "1,2 × 0,3 = ?", answer: 0.36, explain: "12 × 3 = 36; 2 zecimale → 0,36." },
        { type: "num", q: "9 : 1,5 = ?", answer: 6, explain: "Proprietatea de invarianță: 90 : 15 = 6." }
      ]
    },
    {
      type: "curiosity",
      title: "Știai că…? Virgulă sau punct?",
      html: `<p>În Italia, în România și în mare parte din Europa zecimalele se separă cu <b>virgula</b> (3,14). În țările de limbă engleză, în China și în Japonia se folosește <b>punctul</b> (3.14). Calculatoarele de buzunar și computerele folosesc adesea punctul! Și miile? Noi scriem 1.000.000 sau 1 000 000; englezii 1,000,000. Pentru a evita confuziile, normele internaționale recomandă separarea miilor cu un <b>spațiu</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cărticica care a inventat zecimalele (în Europa)",
      html: `<p>În <b>1585</b> matematicianul flamand <b>Simon Stevin</b> a publicat o cărticică de câteva pagini, <i>De Thiende</i> („A zecea”), ca să explice negustorilor și geometrilor cum să folosească fracțiile zecimale în socotelile de zi cu zi. Scria numerele într-un mod ciudat, cu cerculețe: 3⓪1①4②. Câțiva ani mai târziu, scoțianul <b>John Napier</b> (Neper) a făcut popular separatorul. Cu mult înainte, matematicieni arabi și chinezi foloseau deja fracțiile zecimale.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>+ și −</b>: virgulă sub virgulă, egalează cu zerouri.</li>
<li><b>× și : cu 10, 100, 1000</b>: mută virgula spre dreapta (×) sau spre stânga (:) cu atâtea locuri câte zerouri sunt.</li>
<li><b>×</b>: înmulțește fără virgule, apoi separă atâtea zecimale câte sunt în total la factori.</li>
<li><b>:</b> virgula în deîmpărțit → pune-o în cât când o treci; virgula în împărțitor → scoate-o cu proprietatea de invarianță.</li>
<li><b>Estimează</b> mereu rezultatul și fă <b>proba</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege calculele cu virgulă",
      intro: "Dacă regula virgulei te încurcă, încearcă cu euro, cu blocurile 3D, cu unitățile de măsură sau cu metoda estimării folosită în multe țări.",
      tabs: [
        {
          label: "💶 Gândește în cenți",
          html: `<p>Transformă totul în <b>cenți</b> și virgula dispare!</p>
<ul>
<li>2,35 € + 1,49 € → 235 c + 149 c = 384 c = <b>3,84 €</b>.</li>
<li>10 € − 7,04 € → 1000 c − 704 c = 296 c = <b>2,96 €</b>.</li>
<li>1,85 € × 12 → 185 c × 12 = 2220 c = <b>22,20 €</b>.</li>
<li>38,60 € : 4 → 3860 c : 4 = 965 c = <b>9,65 €</b>.</li>
</ul>
<p>Exact asta face regula virgulei: lucrează cu numere întregi și la sfârșit pune virgula la locul ei.</p>`
        },
        {
          label: "🧊 Blocurile 3D",
          html: `<p>Ia blocurile de baza 10, dar schimbă „valoarea”: <b>placa</b> de 100 de cubulețe valorează <b>1 întreg</b>, <b>bastonașul</b> de 10 valorează <b>1 zecime</b> (0,1), <b>cubulețul</b> valorează <b>1 sutime</b> (0,01).</p>
<p>Modelul de mai jos arată 245 de cubulețe: cu regula noastră sunt <b>2,45</b> (2 plăci, 4 bastonașe, 5 cubulețe). Dacă adaugi 0,07 adaugi 7 cubulețe: ajungi la 12 cubulețe libere, schimbi 10 cu un bastonaș (este <b>transportul</b>!) și obții 2,52.</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 245 }
        },
        {
          label: "📏 Cu măsurile",
          html: `<p>Înmulțirea și împărțirea cu 10, 100, 1000 este ca <b>schimbarea unității de măsură</b>:</p>
<ul>
<li>3,25 m = 32,5 dm = <b>325 cm</b> (× 100: din metri în centimetri).</li>
<li>1500 g = <b>1,5 kg</b> (: 1000: din grame în kilograme).</li>
<li>0,75 l = <b>75 cl</b> = 750 ml.</li>
</ul>
<p>Numărul se schimbă, dar <b>cantitatea rămâne aceeași</b>: se schimbă doar „rigla” cu care o măsori. A muta virgula = a schimba sertarul în tabelul măsurilor.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f0fdf4"/>
<g font-size="20" text-anchor="middle" font-weight="bold">
<rect x="20" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="60" y="73">km</text>
<rect x="100" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="140" y="73">hm</text>
<rect x="180" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="220" y="73">dam</text>
<rect x="260" y="40" width="80" height="50" fill="#fde68a" stroke="#15803d" stroke-width="2"/><text x="300" y="73">m</text>
<rect x="340" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="380" y="73">dm</text>
<rect x="420" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="460" y="73">cm</text>
<rect x="500" y="40" width="80" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><text x="540" y="73">mm</text>
</g>
<path d="M300,100 Q380,150 460,100" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="452,96 468,100 458,112" fill="#dc2626"/>
<text x="380" y="160" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">× 100 (2 locuri spre dreapta)</text>
<text x="300" y="190" font-size="17" text-anchor="middle" fill="#1f2937">3,25 m = 325 cm</text>
</svg>`
        },
        {
          label: "🎯 Mai întâi estimează, apoi calculează",
          html: `<p>În multe țări (de exemplu în Anglia și în Olanda) se învață să <b>estimezi mai întâi</b> și să folosești estimarea ca să <b>pui virgula</b>:</p>
<ul>
<li>4,8 × 3,1 → estimare: 5 × 3 = 15. Calcul fără virgule: 48 × 31 = 1488. Unde pun virgula ca să fie aproape de 15? → <b>14,88</b>!</li>
<li>0,62 × 5 → estimare: cam jumătate din 5… cam 3. 62 × 5 = 310 → <b>3,10</b>.</li>
</ul>
<p>Așa, chiar dacă greșești la numărarea zecimalelor, estimarea te avertizează imediat: 148,8 sau 1,488 ar fi absurde!</p>`
        },
        {
          "label": "🇬🇧 Punctul zecimal englezesc",
          "html": "<p>În Italia și în România scriem <b>3,75</b>. În <b>Regatul Unit</b>, în <b>Statele Unite</b> și în multe alte țări se scrie <b>3.75</b>: în locul virgulei se pune <b>punctul</b> (<i>decimal point</i>). Iar pentru mii fac invers decât noi: 1.250,75 al nostru este pentru un englez <b>1,250.75</b>!</p><p>⚠️ Atenție când folosești un calculator sau un telefon setat în engleză: tasta virgulei este un <b>punct</b>.</p><p>Pentru a aduna și a scădea în coloană, profesorii englezi repetă: <b>«line up the decimal points!»</b>, adică «aliniază punctele zecimale!». Este aceeași regulă pe care o folosim noi cu virgula:</p><ol><li>Scrie numerele unul sub altul cu <b>virgulele (sau punctele) în coloană</b>.</li><li>Adaugă <b>zerourile</b> care lipsesc, ca să fie toate cifrele aliniate: 12,5 devine 12,50.</li><li>Calculează ca la numerele întregi și coboară virgula în aceeași coloană.</li></ol><p>12,50 + 3,75 = <b>16,25</b> (în engleză: 12.50 + 3.75 = 16.25).</p>",
          "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#f8fafc\"/><rect x=\"30\" y=\"30\" width=\"250\" height=\"110\" fill=\"#ffffff\" stroke=\"#16a34a\" stroke-width=\"3\"/><text x=\"155\" y=\"62\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">🇮🇹 Italia</text><text x=\"155\" y=\"100\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1.250,75</text><text x=\"155\" y=\"128\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\">virgulă = zecimale</text><rect x=\"320\" y=\"30\" width=\"250\" height=\"110\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"445\" y=\"62\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">🇬🇧 🇺🇸 UK și SUA</text><text x=\"445\" y=\"100\" font-size=\"30\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1,250.75</text><text x=\"445\" y=\"128\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#2563eb\" text-anchor=\"middle\">punct = zecimale</text><text x=\"140\" y=\"190\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">  12.50</text><text x=\"140\" y=\"222\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">+  3.75</text><line x1=\"140\" y1=\"232\" x2=\"260\" y2=\"232\" stroke=\"#1e293b\" stroke-width=\"3\"/><text x=\"140\" y=\"262\" font-size=\"26\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">  16.25</text><line x1=\"215\" y1=\"168\" x2=\"215\" y2=\"270\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><text x=\"300\" y=\"215\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">«line up the</text><text x=\"300\" y=\"238\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">decimal points!»</text></svg>"
        },
        {
          "label": "🇯🇵 Soroban: tu alegi unde e virgula",
          "html": "<p>Pe <b>soroban</b>-ul japonez nu există virgulă! La fiecare 3 vergele există un mic <b>punct</b> pe bară: înainte de a începe <b>alegi un punct</b> și hotărăști că aceea este vergeaua <b>unităților</b>. În stânga sunt zecile și sutele, în <b>dreapta</b> zecimile, sutimile, miimile.</p><p>Ține minte: mărgeaua de sus valorează <b>5</b>, fiecare dintre cele 4 de jos valorează <b>1</b>.</p><p><b>2,35 + 1,49</b>:</p><ol><li>Pune <b>2,35</b>: 2 pe vergeaua unităților, 3 pe zecimi, 5 pe sutimi (mărgeaua de 5).</li><li>Adaugă 1 unitate → 3 unități.</li><li>Adaugă 4 zecimi → 7 zecimi.</li><li>Adaugă 9 sutimi: 5 + 9 = 14 → lași 4 sutimi și treci <b>1 zecime</b> în plus: 8 zecimi.</li><li>Citește: <b>3,84</b>.</li></ol><p>Virgula nu se mută niciodată: hotărăști o singură dată unde sunt unitățile. Și pentru a înmulți cu 10? E de ajuns să-ți imaginezi că unitățile sunt cu o vergea mai la dreapta: toate cifrele „urcă” cu un loc!</p>",
          "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"290\" fill=\"#f8fafc\"/><rect x=\"30\" y=\"20\" width=\"320\" height=\"230\" fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\"/><rect x=\"40\" y=\"30\" width=\"300\" height=\"210\" fill=\"#fef3c7\" stroke=\"#78350f\" stroke-width=\"2\"/><rect x=\"40\" y=\"90\" width=\"300\" height=\"8\" fill=\"#451a03\" stroke=\"#451a03\" stroke-width=\"1\"/><line x1=\"70\" y1=\"30\" x2=\"70\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"70\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"70\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">zeci</text><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"130\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"130\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><circle cx=\"130\" cy=\"94\" r=\"4\" fill=\"#fff\" stroke=\"none\" stroke-width=\"2\"/><text x=\"130\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">unități</text><line x1=\"190\" y1=\"30\" x2=\"190\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"190\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"113\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"190\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">zecimi</text><line x1=\"250\" y1=\"30\" x2=\"250\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"250\" cy=\"75\" rx=\"24\" ry=\"13\" fill=\"#dc2626\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"250\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">sutimi</text><line x1=\"310\" y1=\"30\" x2=\"310\" y2=\"240\" stroke=\"#78350f\" stroke-width=\"3\"/><ellipse cx=\"310\" cy=\"47\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"141\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"169\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"197\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><ellipse cx=\"310\" cy=\"225\" rx=\"24\" ry=\"13\" fill=\"#a16207\" stroke=\"#1e293b\" stroke-width=\"1.5\"/><text x=\"310\" y=\"272\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">miimi</text><text x=\"410\" y=\"60\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">2,35 pe soroban</text><text x=\"410\" y=\"92\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">punctul alb =</text><text x=\"410\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">vergeaua unităților</text><text x=\"410\" y=\"150\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">în dreapta:</text><text x=\"410\" y=\"170\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">zecimi, sutimi…</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta operațiilor cu numere zecimale",
      nodes: [
        { id: "decimali", label: "Numere zecimale", x: 50, y: 6, color: "#2563eb", html: "Numere cu parte întreagă și parte zecimală, separate prin virgulă.", why: "Sunt fracții zecimale (cu numitor 10, 100, 1000…) scrise într-un mod comod: 0,25 = 25/100. Funcționează pentru că sistemul nostru de numerație este în baza 10." },
        { id: "posizione", label: "Valoare de poziție", x: 20, y: 26, color: "#7c3aed", html: "Fiecare loc valorează de 10 ori mai mult decât cel din dreapta lui: u, zi, s, m.", why: "Sistemul pozițional cu zero a venit din India prin arabi; Fibonacci l-a răspândit în Europa în 1202. Zecimalele sunt extinderea lui „după virgulă”." },
        { id: "addsott", label: "Adunare și scădere", x: 20, y: 52, color: "#16a34a", html: "Virgulă sub virgulă, egalând cu zerouri.", why: "Se pot aduna doar unități de același fel (zecimi cu zecimi): așezarea virgulelor în coloană aliniază automat valorile de poziție." },
        { id: "potenze10", label: "× și : cu 10, 100, 1000", x: 50, y: 34, color: "#f97316", html: "Virgula se mută la dreapta (×) sau la stânga (:) cu atâtea locuri câte zerouri sunt.", why: "Înmulțirea cu 10 face ca fiecare cifră să fie de 10 ori mai mare: fiecare cifră „urcă” cu un loc. De fapt se mută cifrele, dar este ca și cum s-ar muta virgula." },
        { id: "molt", label: "Înmulțire", x: 50, y: 62, color: "#dc2626", html: "Înmulțește fără virgule, apoi separă atâtea zecimale câte sunt la factori.", why: "2,3 × 1,4 = (23 : 10) × (14 : 10) = 322 : 100 = 3,22. A scoate virgulele înseamnă a înmulți cu 10, 100…; la sfârșit trebuie să „restituim” acele împărțiri." },
        { id: "div", label: "Împărțire", x: 80, y: 52, color: "#0ea5e9", html: "Virgulă în cât când se trece de virgula deîmpărțitului; virgula împărțitorului se scoate cu invarianța.", why: "Proprietatea de invarianță: înmulțind deîmpărțitul și împărțitorul cu același număr câtul nu se schimbă (6 : 1,5 = 60 : 15), ca fracțiile echivalente." },
        { id: "zeri", label: "Zerouri finale", x: 80, y: 26, color: "#eab308", html: "2,5 = 2,50 = 2,500.", why: "A adăuga zerouri după ultima zecimală înseamnă a adăuga 0 sutimi, 0 miimi: valoarea nu se schimbă. Este ca și cum ai spune 25/10 = 250/100." },
        { id: "stima", label: "Estimare și probă", x: 35, y: 86, color: "#14b8a6", html: "Calcul aproximativ înainte, operația inversă după.", why: "Rotunjirea la numere întregi dă imediat ordinul de mărime: dacă estimarea și rezultatul sunt foarte diferite, virgula este la locul greșit." },
        { id: "storia", label: "Stevin și Neper", x: 70, y: 86, color: "#64748b", html: "Cei care au răspândit zecimalele în Europa.", why: "Simon Stevin în 1585 (<i>De Thiende</i>) a explicat zecimalele pentru comerț; John Napier (Neper) la începutul secolului al XVII-lea a făcut popular separatorul zecimal. Încă mai înainte le foloseau matematicieni chinezi și arabi precum al-Kashi (1427)." }
      ],
      edges: [
        ["decimali", "posizione", "se bazează pe"],
        ["decimali", "zeri", "proprietate"],
        ["posizione", "addsott", "aliniază"],
        ["posizione", "potenze10", "explică"],
        ["potenze10", "molt", "folosit la"],
        ["zeri", "div", "ajută la"],
        ["molt", "stima", "se verifică cu"],
        ["decimali", "storia", "răspândite de"]
      ]
    }
  ],
  glossary: [
    { t: "Număr zecimal", d: "Număr cu o parte întreagă și o parte zecimală separate prin virgulă." },
    { t: "Zecime", d: "Una dintre cele 10 părți ale unității: 0,1." },
    { t: "Sutime", d: "Una dintre cele 100 de părți ale unității: 0,01." },
    { t: "Miime", d: "Una dintre cele 1000 de părți ale unității: 0,001." },
    { t: "A așeza în coloană", d: "A scrie numerele unul sub altul cu cifrele de același ordin aliniate." },
    { t: "Proprietatea de invarianță", d: "Înmulțind sau împărțind deîmpărțitul și împărțitorul cu același număr, câtul nu se schimbă." },
    { t: "Estimare", d: "Calcul aproximativ pentru a prevedea rezultatul." },
    { t: "Proba", d: "Verificarea rezultatului cu operația inversă." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "15,6 + 4,75 = ?", answer: 20.35, explain: "15,60 + 4,75 = 20,35." },
      { type: "num", q: "20 − 7,85 = ?", answer: 12.15, explain: "20,00 − 7,85 = 12,15." },
      { type: "num", q: "0,38 × 1000 = ?", answer: 380, explain: "3 locuri spre dreapta: 380." },
      { type: "num", q: "125 : 100 = ?", answer: 1.25, explain: "2 locuri spre stânga: 1,25." },
      { type: "num", q: "3,5 × 4 = ?", answer: 14, explain: "35 × 4 = 140; 1 zecimală → 14,0 = 14." },
      { type: "num", q: "0,6 × 0,7 = ?", answer: 0.42, explain: "6 × 7 = 42; 2 zecimale → 0,42." },
      { type: "num", q: "8,4 : 4 = ?", answer: 2.1, explain: "8 : 4 = 2, apoi 4 : 4 = 1 după virgulă → 2,1." },
      { type: "num", q: "12 : 0,4 = ?", answer: 30, explain: "Invarianță: 120 : 4 = 30." },
      { type: "mc", q: "La înmulțirea 2,37 × 1,2 câte zecimale va avea rezultatul?", options: ["1", "2", "3"], answer: 2, explain: "2 zecimale în 2,37 + 1 în 1,2 = 3 zecimale (2,844)." },
      { type: "tf", q: "Înmulțind un număr cu 0,5 se obține un număr mai mare.", answer: false, explain: "0,5 este mai mic decât 1: se obține jumătatea numărului." },
      { type: "num", q: "Un caiet costă 1,75 €. Cât costă 6 caiete?", answer: 10.5, unit: "€", explain: "175 × 6 = 1050 → 10,50 €." },
      { type: "order", q: "Ordonează pașii pentru a calcula 2,3 × 1,4.", items: ["Înmulțesc fără virgule: 23 × 14 = 322", "Număr zecimalele factorilor: 1 + 1 = 2", "Separ 2 cifre de la dreapta: 3,22", "Verific cu estimarea: 2 × 1,5 ≈ 3"], explain: "Calculez, număr zecimalele, pun virgula, verific cu estimarea." }
    ],
    gen: [["decAdd", 2], ["decMul", 2]]
  }
});

TOPIC('ro', {
  id: "m2-tec-energia",
  title: "Energia și centralele",
  intro: "Apeși un întrerupător și lumina se aprinde: în spatele acestui gest se află o călătorie foarte lungă. Electricitatea se naște într-o <b>centrală</b>, unde o sursă de energie (apă, vânt, soare, gaz, căldura Pământului…) este <b>transformată</b>, apoi aleargă sute de kilometri pe cabluri până la priza de acasă. Să aflăm cum funcționează.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Energia: nimic nu se creează, totul se transformă",
      html: `<p><b>Energia</b> este capacitatea de a efectua un lucru mecanic: a mișca, a încălzi, a lumina. Se măsoară în <b>jouli</b> (J); pentru electricitate se folosește <b>kilowattora</b> (kWh).</p>
<p>Există multe <b>forme</b> de energie: <b>mecanică</b> (mișcare și poziție), <b>termică</b> (căldură), <b>chimică</b> (în combustibili și în hrană), <b>electrică</b>, <b>luminoasă</b> (radiantă), <b>nucleară</b>.</p>
<p>Regula de aur (principiul conservării energiei): energia <b>nu se creează și nu se distruge</b>, se <b>transformă</b> dintr-o formă în alta. Centralele electrice nu «produc» energie din nimic: o transformă în energie electrică.</p>
<p>În orice transformare, o parte din energie se pierde, aproape întotdeauna sub formă de căldură. <b>Randamentul</b> spune câtă energie utilă obținem:</p>
<p style="text-align:center"><b>randament = energie utilă ÷ energie consumată × 100</b></p>`
    },
    {
      type: "text",
      title: "Sursele de energie",
      html: `<table>
<tr><th>Surse <b>neregenerabile</b></th><th>Surse <b>regenerabile</b></th></tr>
<tr><td>S-au format în milioane de ani și se epuizează: <b>petrol</b>, <b>cărbune</b>, <b>gaz natural</b> (combustibili fosili), <b>uraniu</b> (nuclear).</td><td>Se regenerează continuu datorită Soarelui sau Pământului: <b>solară</b>, <b>eoliană</b> (vânt), <b>hidroelectrică</b> (apă), <b>geotermală</b> (căldură internă), <b>biomasă</b> (lemne, resturi vegetale), energia <b>mării</b>.</td></tr>
<tr><td>Arzând combustibilii fosili se eliberează <b>dioxid de carbon</b> (CO₂), principalul gaz responsabil de încălzirea globală, și substanțe poluante.</td><td>În timpul funcționării emit foarte puțin CO₂, dar unele depind de vreme (soare, vânt) și sunt necesare sisteme de <b>stocare</b>.</td></tr>
</table>`
    },
    {
      type: "text",
      title: "Inima aproape oricărei centrale: turbină + alternator",
      html: `<p>În <b>1831</b>, englezul <b>Michael Faraday</b> a descoperit <b>inducția electromagnetică</b>: dacă un magnet se mișcă lângă o bobină de sârmă de cupru, în sârmă apare curent electric. Acesta este principiul dinamului de la bicicletă și al aproape tuturor centralelor.</p>
<ol>
<li>Sursa de energie pune în mișcare o <b>turbină</b> (o roată mare cu palete): o împinge apa, vântul sau aburul.</li>
<li>Turbina învârte <b>alternatorul</b>: magneți care se rotesc în interiorul unor bobine de cupru → se produce <b>curent alternativ</b>.</li>
<li><b>Transformatorul</b> ridică tensiunea (până la 380 000 de volți în Italia) pentru a transporta energia cu pierderi mai mici.</li>
<li><b>Liniile electrice</b> (stâlpii) duc energia departe; <b>posturile de transformare</b> coboară tensiunea până la cei <b>230 de volți</b> ai prizelor de acasă, la <b>50 de herți</b>.</li>
</ol>
<p>Face excepție <b>fotovoltaicul</b>: panourile transformă lumina <b>direct</b> în electricitate, fără turbine. Curentul produs este continuu, iar un <b>invertor</b> îl transformă în alternativ.</p>`
    },
    {
      type: "svg",
      title: "De la centrală la priza de acasă",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<rect x="0" y="240" width="600" height="60" fill="#bbf7d0"/>
<rect x="20" y="130" width="90" height="110" fill="#94a3b8" stroke="#334155" stroke-width="3"/>
<rect x="40" y="80" width="22" height="50" fill="#64748b"/>
<circle cx="51" cy="65" r="12" fill="#e2e8f0"/>
<circle cx="62" cy="48" r="15" fill="#f1f5f9"/>
<circle cx="65" cy="185" r="26" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<line x1="65" y1="159" x2="65" y2="211" stroke="#92400e" stroke-width="3"/>
<line x1="39" y1="185" x2="91" y2="185" stroke="#92400e" stroke-width="3"/>
<text x="65" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">1 centrală</text>
<rect x="140" y="180" width="60" height="60" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<text x="170" y="218" font-size="22" fill="#ffffff" text-anchor="middle">⚡</text>
<text x="170" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">2 transf.</text>
<text x="170" y="286" font-size="13" fill="#7c2d12" text-anchor="middle">ridică la 380 kV</text>
<polygon points="260,240 280,90 300,240" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="255" y1="110" x2="305" y2="110" stroke="#334155" stroke-width="4"/>
<polygon points="380,240 400,90 420,240" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="375" y1="110" x2="425" y2="110" stroke="#334155" stroke-width="4"/>
<path d="M200 195 Q 230 120 258 110 Q 340 140 378 110 Q 430 140 460 190" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="340" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">3 linie electrică</text>
<rect x="450" y="190" width="40" height="50" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="470" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">4 post trafo</text>
<polygon points="510,180 550,145 590,180" fill="#ef4444"/>
<rect x="515" y="180" width="70" height="60" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<circle cx="550" cy="205" r="10" fill="#fde047"/>
<line x1="490" y1="210" x2="515" y2="210" stroke="#dc2626" stroke-width="3"/>
<text x="550" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">5 casă</text>
<text x="550" y="286" font-size="13" fill="#92400e" text-anchor="middle">230 V</text>
<text x="300" y="30" font-size="18" font-weight="bold" fill="#0e7490" text-anchor="middle">Călătoria electricității</text>
</svg>`,
      caption: "Tensiunea este ridicată pentru transport (mai puține pierderi pe cabluri) și coborâtă înainte de a intra în case."
    },
    {
      type: "text",
      title: "Principalele tipuri de centrale",
      html: `<ul>
<li><b>Termoelectrică</b>: arde gaz, cărbune sau petrol într-un cazan; căldura transformă apa în <b>abur</b> la presiune înaltă, care învârte turbina. Lanț: chimică → termică → mecanică → electrică.</li>
<li><b>Hidroelectrică</b>: apa dintr-un bazin (adesea creat de un <b>baraj</b>) coboară prin <b>conducte forțate</b> și lovește turbina. Lanț: potențială → cinetică → electrică.</li>
<li><b>Eoliană</b>: vântul învârte paletele unui <b>aerogenerator</b>, legat de alternatorul din nacela de pe vârful turnului.</li>
<li><b>Fotovoltaică</b>: celule de <b>siliciu</b> transformă lumina în curent (efect fotovoltaic, descoperit de Edmond Becquerel în 1839).</li>
<li><b>Geotermală</b>: folosește aburul cald care urcă din subsol în zonele vulcanice.</li>
<li><b>Nucleară</b>: <b>fisiunea</b> (ruperea) nucleelor de uraniu eliberează foarte multă căldură, care produce abur ca într-o termoelectrică. Nu emite CO₂, dar produce <b>deșeuri radioactive</b> care trebuie păstrate timp foarte îndelungat. În Italia, după referendumul din 1987, centralele nucleare au fost închise.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Explorează o centrală hidroelectrică",
      scene: "terrain",
      options: { features: {
        glacier: { label: "Ghețar", html: "Ghețarii și zăpada sunt «rezervele» de apă: topindu-se primăvara și vara, alimentează râurile și lacurile alpine." },
        mountain: { label: "Munte", html: "Centralele hidroelectrice se construiesc la munte pentru că este nevoie de o mare <b>diferență de nivel</b>: cu cât apa cade de mai sus, cu atât are mai multă energie." },
        lake: { label: "Bazin (lac artificial)", html: "<b>Barajul</b> închide o vale și creează un lac: apa oprită sus are <b>energie potențială</b>. Bazinul este și o «baterie»: poate fi golit atunci când este nevoie de energie." },
        valley: { label: "Valea cu centrala", html: "La capătul văii se află <b>centrala</b>: apa ajunge în conductele forțate, lovește turbina și învârte alternatorul." },
        river: { label: "Râu", html: "După turbină, apa se întoarce în râu: nu este consumată și nici poluată. Centralele «pe firul apei» folosesc direct curentul râului, fără baraje mari." },
        plain: { label: "Câmpie", html: "Liniile electrice duc energia spre orașele și fabricile din câmpie, unde se consumă cel mai mult." }
      } },
      caption: "Atinge părțile peisajului ca să urmărești drumul apei de la munte până la curentul electric."
    },
    {
      type: "quiz",
      title: "Mini-test: surse și transformări",
      questions: [
        { type: "mc", q: "Care sursă este regenerabilă?", options: ["Cărbunele", "Vântul", "Gazul natural"], answer: 1, explain: "Vântul se regenerează continuu: este o sursă regenerabilă." },
        { type: "mc", q: "Care mașină transformă mișcarea în energie electrică?", options: ["Transformatorul", "Alternatorul", "Cazanul"], answer: 1, explain: "Alternatorul folosește inducția electromagnetică descoperită de Faraday." },
        { type: "tf", q: "Panourile fotovoltaice au nevoie de o turbină.", answer: false, explain: "Fotovoltaicul transformă lumina direct în electricitate, fără piese în mișcare." }
      ]
    },
    {
      type: "widget",
      title: "Regenerabilă sau nu?",
      widget: "classify",
      options: {
        groups: ["Regenerabilă", "Neregenerabilă"],
        items: [
          ["☀️ Soare", 0], ["🌬️ Vânt", 0], ["💧 Apa râurilor", 0], ["🌋 Căldura Pământului", 0],
          ["🪵 Biomasă", 0], ["🛢️ Petrol", 1], ["⚫ Cărbune", 1], ["🔥 Gaz natural", 1], ["☢️ Uraniu", 1]
        ]
      },
      caption: "Sursele fosile și uraniul sunt limitate: într-o zi se vor termina."
    },
    {
      type: "example",
      title: "Exemplu practic: cum citim factura",
      html: `<p><b>Puterea</b> unui aparat (în wați, W, sau kilowați, kW) spune câtă energie consumă <b>în fiecare oră</b>. Energia consumată este:</p>
<p style="text-align:center"><b>energie (kWh) = putere (kW) × timp (h)</b></p>
<ul>
<li>Un cuptor de <b>2 kW</b> aprins <b>1,5 ore</b> consumă 2 × 1,5 = <b>3 kWh</b>.</li>
<li>Un bec LED de <b>10 W</b> (= 0,01 kW) aprins <b>5 ore</b> pe zi timp de 30 de zile: 0,01 × 5 × 30 = <b>1,5 kWh</b> pe lună.</li>
<li>Un vechi bec cu incandescență de <b>60 W</b> care dă aceeași lumină: 0,06 × 5 × 30 = <b>9 kWh</b>, de șase ori mai mult!</li>
</ul>
<p>Dacă un kWh costă aproximativ 0,30 €, LED-ul costă 0,45 € pe lună, iar vechiul bec 2,70 €. A economisi energie convine mediului și buzunarului.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: randamentul",
      html: `<p>O centrală termoelectrică primește de la combustibil <b>100</b> de unități de energie și transformă în electricitate <b>40</b>: randamentul ei este 40 ÷ 100 × 100 = <b>40%</b>. Restul se pierde sub formă de căldură (de aceea au turnurile mari de răcire).</p>
<p>Centralele moderne <b>cu ciclu combinat</b> recuperează căldura gazelor arse ca să producă alt abur și ajung la aproximativ <b>60%</b>. O centrală hidroelectrică poate depăși <b>85–90%</b>, în timp ce un panou fotovoltaic obișnuit transformă în electricitate aproximativ <b>20%</b> din lumina primită.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Italia a aprins primul bec geotermic",
      html: `<p>În <b>1904</b>, la <b>Larderello</b>, în Toscana, prințul <b>Piero Ginori Conti</b> a folosit aburul natural care ieșea din pământ ca să învârtă un mic dinam și a aprins <b>5 becuri</b>: era prima dată în lume când se producea electricitate din căldura Pământului.</p>
<p>În 1913, la Larderello a intrat în funcțiune prima centrală geotermală comercială din lume. Și astăzi Toscana produce electricitate geotermală.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? „Bateriile de apă”",
      html: `<p>Soarele și vântul nu produc mereu când este nevoie. O soluție inteligentă sunt centralele <b>cu acumulare prin pompare</b>: au două lacuri, unul sus și unul jos. Când există energie în plus (de exemplu la prânz, cu mult soare), ea se folosește ca să <b>pompeze</b> apa în lacul de sus; seara, când toți aprind luminile, apa coboară și produce electricitate.</p>
<p>E ca și cum ai reîncărca o baterie uriașă… făcută din apă și munți!</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Energia nu se creează și nu se distruge: se <b>transformă</b>. Randamentul măsoară câtă energie este utilă.</li>
<li>Surse <b>neregenerabile</b>: fosile și uraniu. Surse <b>regenerabile</b>: soare, vânt, apă, geotermie, biomasă.</li>
<li>Aproape toate centralele: sursă → <b>turbină</b> → <b>alternator</b> → <b>transformator</b> → rețea. Fotovoltaicul nu folosește turbine.</li>
<li>Energie (kWh) = putere (kW) × timp (h).</li>
<li>În casă: 230 V, 50 Hz, curent alternativ.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege centralele",
      intro: "Dacă transformările de energie te încurcă, încearcă o analogie, istoria sau o axă a timpului interactivă.",
      tabs: [
        {
          label: "🚲 Dinamul de la bicicletă",
          html: `<p>O bicicletă veche cu <b>dinam</b> este o centrală electrică în miniatură!</p>
<ul>
<li>Tu ești <b>sursa de energie</b> (energia chimică a hranei → mușchi).</li>
<li>Roata care se învârte este <b>turbina</b>.</li>
<li>Dinamul, cu un magnet care se rotește într-o bobină, este <b>alternatorul</b>.</li>
<li>Farul care se aprinde este <b>casa</b> care consumă.</li>
</ul>
<p>Dacă pedalezi mai tare, lumina este mai puternică; dacă te oprești, se stinge: fără mișcare nu există curent. Într-o centrală termoelectrică, în locul picioarelor tale este aburul; într-una hidroelectrică, apa care cade.</p>`
        },
        {
          label: "🔗 Lanțul transformărilor",
          html: `<p>Fiecare centrală este un <b>lanț</b> de transformări. Urmărește-l ca pe o ștafetă în care energia trece din mână în mână:</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fff7ed"/>
<text x="300" y="30" font-size="18" font-weight="bold" fill="#9a3412" text-anchor="middle">Centrală termoelectrică</text>
<rect x="15" y="45" width="125" height="60" rx="12" fill="#a16207"/>
<text x="77" y="82" font-size="16" fill="#ffffff" text-anchor="middle">chimică 🔥</text>
<rect x="160" y="45" width="125" height="60" rx="12" fill="#dc2626"/>
<text x="222" y="82" font-size="16" fill="#ffffff" text-anchor="middle">termică ♨️</text>
<rect x="305" y="45" width="125" height="60" rx="12" fill="#2563eb"/>
<text x="367" y="82" font-size="16" fill="#ffffff" text-anchor="middle">mecanică ⚙️</text>
<rect x="450" y="45" width="135" height="60" rx="12" fill="#16a34a"/>
<text x="517" y="82" font-size="16" fill="#ffffff" text-anchor="middle">electrică ⚡</text>
<text x="150" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="295" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="440" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="300" y="150" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">Centrală hidroelectrică</text>
<rect x="60" y="165" width="140" height="60" rx="12" fill="#0ea5e9"/>
<text x="130" y="202" font-size="16" fill="#ffffff" text-anchor="middle">potențială 🏔️</text>
<rect x="230" y="165" width="140" height="60" rx="12" fill="#2563eb"/>
<text x="300" y="202" font-size="16" fill="#ffffff" text-anchor="middle">cinetică 💧</text>
<rect x="400" y="165" width="140" height="60" rx="12" fill="#16a34a"/>
<text x="470" y="202" font-size="16" fill="#ffffff" text-anchor="middle">electrică ⚡</text>
<text x="215" y="202" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="385" y="202" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="300" y="262" font-size="15" fill="#7c2d12" text-anchor="middle">la fiecare pas, puțină energie se pierde sub formă de căldură</text>
</svg>`
        },
        {
          label: "🌍 Cum fac alte țări",
          html: `<p>Fiecare țară produce electricitate cu resursele pe care le are:</p>
<ul>
<li>🇳🇴 <b>Norvegia</b>: plină de munți și râuri, produce aproximativ <b>90%</b> din electricitate cu <b>hidroenergie</b>.</li>
<li>🇫🇷 <b>Franța</b>: aproximativ două treimi din electricitate vin din <b>nuclear</b>.</li>
<li>🇮🇸 <b>Islanda</b>: insulă vulcanică, folosește <b>hidroenergie și geotermie</b> aproape 100%.</li>
<li>🇩🇰 <b>Danemarca</b>: ținut plat și bătut de vânt, mai mult de jumătate din electricitate vine din <b>vânt</b>.</li>
<li>🇮🇹 <b>Italia</b>: folosește mai ales <b>gaz natural</b>, dar sursele regenerabile (hidro, solar, eolian, geotermal, biomasă) acoperă acum aproximativ două cincimi din consumul electric, iar solarul crește în fiecare an.</li>
</ul>
<p>Geografia și energia sunt strâns legate!</p>`
        },
        {
          label: "⏳ Axa timpului",
          html: `<p>Parcurge axa timpului: de la inducția lui Faraday până la panourile solare de pe acoperișuri.</p>`,
          widget: "timeline",
          options: { unit: "ani", events: [
            { year: 1831, label: "Faraday descoperă inducția electromagnetică", icon: "🧲" },
            { year: 1839, label: "Becquerel descoperă efectul fotovoltaic", icon: "☀️" },
            { year: 1879, label: "Becul cu incandescență al lui Edison", icon: "💡" },
            { year: 1882, label: "Primele centrale electrice la Londra și New York", icon: "🏭" },
            { year: 1883, label: "La Milano, centrala din via Santa Radegonda", icon: "🇮🇹" },
            { year: 1904, label: "Larderello: prima electricitate geotermală", icon: "🌋" },
            { year: 1954, label: "Primele panouri solare cu siliciu (Bell Labs)", icon: "🔋" },
            { year: 1987, label: "Referendum: Italia renunță la nuclear", icon: "🗳️" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta energiei electrice",
      nodes: [
        { id: "energia", label: "Energie", x: 50, y: 7, color: "#7c3aed", html: "Capacitatea de a efectua un lucru mecanic. Se măsoară în jouli (J) sau kWh.", why: "Principiul conservării energiei a fost formulat la mijlocul secolului al XIX-lea de oameni de știință precum Julius Robert Mayer, James Prescott Joule și Hermann von Helmholtz: energia se transformă, dar totalul rămâne constant." },
        { id: "fonti", label: "Surse", x: 50, y: 27, color: "#2563eb", html: "De unde luăm energia: regenerabile și neregenerabile.", why: "Aproape toate vin de la Soare: combustibilii fosili sunt rămășițe de plante și animale care au înmagazinat energie solară acum milioane de ani; vântul și ploaia se nasc din Soarele care încălzește aerul și marea. Fac excepție geotermia și nuclearul." },
        { id: "rinn", label: "Regenerabile", x: 20, y: 45, color: "#16a34a", html: "Soare, vânt, apă, geotermie, biomasă.", why: "Se regenerează în timp omenesc: Soarele va străluci încă miliarde de ani, iar ciclul apei aduce mereu ploaia pe munți." },
        { id: "nonrinn", label: "Neregenerabile", x: 80, y: 45, color: "#64748b", html: "Petrol, cărbune, gaz, uraniu.", why: "Combustibilii fosili s-au format în milioane de ani: noi îi consumăm în câteva secole. Arzându-i, eliberăm CO₂, care reține căldura în atmosferă." },
        { id: "turbina", label: "Turbină", x: 35, y: 65, color: "#0ea5e9", html: "Roată cu palete pusă în mișcare de apă, abur sau vânt.", why: "Descinde din morile de apă și de vânt folosite de secole. Turbina cu abur modernă a fost inventată de Charles Parsons în 1884." },
        { id: "alternatore", label: "Alternator", x: 65, y: 65, color: "#f59e0b", html: "Transformă mișcarea în curent alternativ.", why: "Se bazează pe inducția electromagnetică descoperită de Michael Faraday în 1831: un magnet în mișcare lângă o bobină generează curent." },
        { id: "fv", label: "Fotovoltaic", x: 10, y: 82, color: "#eab308", html: "Celule de siliciu care transformă lumina în electricitate.", why: "Efectul fotovoltaic a fost observat de Edmond Becquerel în 1839; Albert Einstein a explicat fenomenul înrudit (efectul fotoelectric) în 1905 și pentru asta a primit Nobelul." },
        { id: "rete", label: "Rețeaua electrică", x: 65, y: 85, color: "#ef4444", html: "Transformatoare, linii electrice, posturi de transformare: duc energia în case.", why: "Se folosește curentul alternativ pentru că, cu transformatoarele, tensiunea se poate ridica și coborî ușor: tensiune înaltă = pierderi mai mici pe cabluri. A fost «războiul curenților» dintre Edison (continuu) și Tesla/Westinghouse (alternativ) la sfârșitul secolului al XIX-lea." },
        { id: "kwh", label: "kWh", x: 90, y: 92, color: "#a855f7", html: "Unitatea energiei electrice: putere (kW) × timp (h).", why: "Watt-ul poartă numele lui James Watt, inginerul scoțian care a perfecționat mașina cu abur. 1 kWh = 3 600 000 jouli." }
      ],
      edges: [
        ["energia", "fonti", "provine din"],
        ["fonti", "rinn", "tip"],
        ["fonti", "nonrinn", "tip"],
        ["rinn", "turbina", "apa, vântul mișcă"],
        ["nonrinn", "turbina", "aburul mișcă"],
        ["turbina", "alternatore", "învârte"],
        ["rinn", "fv", "Soarele alimentează"],
        ["alternatore", "rete", "introduce în"],
        ["fv", "rete", "cu invertor"],
        ["rete", "kwh", "se măsoară în"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: calcule cu energia",
      questions: [
        { type: "num", q: "Un uscător de păr de 2 kW rămâne pornit 0,5 ore. Câți kWh consumă?", answer: 1, unit: "kWh", explain: "2 × 0,5 = 1 kWh." },
        { type: "num", q: "O centrală primește 200 de unități de energie și transformă 70 în electricitate. Care este randamentul în %?", answer: 35, unit: "%", explain: "70 ÷ 200 × 100 = 35%." },
        { type: "mc", q: "De ce se transportă electricitatea la tensiune foarte înaltă?", options: ["Ca să ajungă mai repede", "Ca să se reducă pierderile pe cabluri", "Ca să fie mai sigură în casă"], answer: 1, explain: "La tensiune înaltă este nevoie de mai puțin curent pentru a transporta aceeași putere, deci cablurile se încălzesc mai puțin și se irosește mai puțină energie." }
      ]
    }
  ],
  glossary: [
    { t: "Energie", d: "Capacitatea de a efectua un lucru mecanic; se măsoară în jouli (J) sau kilowattore (kWh)." },
    { t: "Sursă regenerabilă", d: "Sursă care se regenerează în timp scurt: soare, vânt, apă, geotermie, biomasă." },
    { t: "Combustibil fosil", d: "Petrol, cărbune sau gaz, formate în milioane de ani din rămășițe de organisme." },
    { t: "Turbină", d: "Roată cu palete pusă în rotație de apă, abur sau vânt." },
    { t: "Alternator", d: "Mașină care transformă mișcarea în curent electric alternativ." },
    { t: "Transformator", d: "Dispozitiv care ridică sau coboară tensiunea electrică." },
    { t: "Linie electrică", d: "Linie de cabluri și stâlpi care transportă energia la înaltă tensiune." },
    { t: "Efect fotovoltaic", d: "Transformarea directă a luminii în electricitate în celulele de siliciu." },
    { t: "Fisiune nucleară", d: "Ruperea nucleelor grele (uraniu) care eliberează cantități mari de căldură." },
    { t: "Randament", d: "Raportul dintre energia utilă obținută și energia consumată, în procente." },
    { t: "Kilowattora (kWh)", d: "Energia consumată de un aparat de 1 kW aprins timp de o oră." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "Conform principiului conservării, energia se transformă, dar nu se creează din nimic.", answer: true, explain: "Energia nu se creează și nu se distruge, se transformă." },
      { type: "mc", q: "Care dintre acestea este o sursă neregenerabilă?", options: ["Geotermia", "Uraniul", "Biomasa"], answer: 1, explain: "Uraniul este un mineral prezent în cantitate limitată." },
      { type: "mc", q: "Cine a descoperit inducția electromagnetică în 1831?", options: ["Thomas Edison", "Michael Faraday", "Alessandro Volta"], answer: 1, explain: "Michael Faraday, om de știință englez." },
      { type: "order", q: "Pune în ordine funcționarea unei centrale termoelectrice.", items: ["Combustibilul arde în cazan", "Apa devine abur", "Aburul învârte turbina", "Alternatorul produce curent", "Transformatorul ridică tensiunea"], explain: "Chimică → termică → mecanică → electrică, apoi rețeaua." },
      { type: "num", q: "Un televizor de 0,1 kW rămâne pornit 4 ore. Câți kWh consumă?", answer: 0.4, tol: 0.001, unit: "kWh", explain: "0,1 × 4 = 0,4 kWh." },
      { type: "mc", q: "În care centrală nu există o turbină?", options: ["Eoliană", "Fotovoltaică", "Hidroelectrică"], answer: 1, explain: "Fotovoltaicul transformă direct lumina în electricitate." },
      { type: "text", q: "Cum se numește localitatea toscană unde în 1904 s-a produs pentru prima dată electricitate geotermală?", answer: ["larderello"], explain: "Larderello, în provincia Pisa." },
      { type: "num", q: "Care este tensiunea (în volți) a prizelor de acasă în Italia?", answer: 230, unit: "V", explain: "În Italia (și în Europa) rețeaua casnică este de 230 V, 50 Hz." },
      { type: "tf", q: "Centralele hidroelectrice consumă apa, care nu se mai întoarce în râu.", answer: false, explain: "Apa trece prin turbină și se întoarce în râu: este folosită, nu consumată." },
      { type: "mc", q: "Care este principalul dezavantaj al combustibililor fosili pentru climă?", options: ["Fac prea mult zgomot", "Eliberează CO₂ care contribuie la încălzirea globală", "Funcționează doar ziua"], answer: 1, explain: "Arderea eliberează dioxid de carbon, un gaz cu efect de seră." },
      { type: "num", q: "Un panou primește 1000 W de lumină și produce 200 W de electricitate. Care este randamentul în %?", answer: 20, unit: "%", explain: "200 ÷ 1000 × 100 = 20%." },
      { type: "mc", q: "La ce servește o centrală cu acumulare prin pompare?", options: ["La păstrarea energiei prin pomparea apei în sus când există energie în plus", "La pomparea petrolului din subsol", "La răcirea centralelor nucleare"], answer: 0, explain: "Funcționează ca o mare baterie: acumulează energie sub formă de apă la înălțime." }
    ],
    gen: [["percent", 2]]
  }
});

TOPIC('ro', {
  id: `p4-geo-clima`,
  title: `Clima`,
  intro: `„Azi plouă” și „la Palermo iernile sunt blânde” nu sunt același lucru! Prima propoziție vorbește despre <b>vreme</b>, a doua despre <b>climă</b>. În această lecție descoperim diferența, instrumentele cu care se măsoară vremea, de ce pe Pământ există zone calde și zone reci (<b>zonele climatice</b>) și ce climate există în Italia.`,
  minutes: 30,
  sections: [
    {
      type: `text`,
      title: `1. Vremea și clima: nu sunt același lucru`,
      html: `<p><b>Vremea</b> este starea aerului într-un loc și într-un <b>moment precis</b>: azi, dimineață, acum. Se poate schimba în câteva ore: e soare, apoi vine o furtună.</p>
<p><b>Clima</b>, în schimb, este vremea „medie” a unei regiuni, observată timp de <b>mulți ani</b> (oamenii de știință folosesc măsurători din cel puțin <b>30 de ani</b>). Spune cum sunt de obicei anotimpurile în acel loc.</p>
<table>
<tr><th>Vremea</th><th>Clima</th></tr>
<tr><td>„Azi la Milano este ceață.”</td><td>„În Câmpia Padului iarna este adesea ceață.”</td></tr>
<tr><td>„Mâine la Roma vor fi 30 °C.”</td><td>„La Roma verile sunt calde și uscate.”</td></tr>
<tr><td>Se schimbă de la o oră la alta</td><td>Se schimbă foarte încet (decenii, secole)</td></tr>
</table>
<p>O metodă ușoară de a ține minte: <b>vremea este starea ta de spirit de azi, clima este caracterul tău</b>.</p>`
    },
    {
      type: `text`,
      title: `2. Elementele climei și instrumentele cu care se măsoară`,
      html: `<p>Pentru a descrie vremea și clima, meteorologii măsoară câteva <b>elemente</b>:</p>
<ul>
<li><b>temperatura</b> aerului (cât de cald sau de frig este) → se măsoară cu <b>termometrul</b>, în grade Celsius (°C);</li>
<li><b>precipitațiile</b> (ploaie, zăpadă, grindină) → se măsoară cu <b>pluviometrul</b>, în milimetri (mm): 1 mm = 1 litru de apă pe un metru pătrat;</li>
<li><b>umiditatea</b> (cât vapor de apă se află în aer) → se măsoară cu <b>higrometrul</b>;</li>
<li><b>presiunea atmosferică</b> („greutatea” aerului de deasupra noastră) → se măsoară cu <b>barometrul</b>, inventat de <b>Evangelista Torricelli</b> în 1643. Presiune ridicată = de obicei vreme frumoasă; presiune scăzută = de obicei nori și ploaie;</li>
<li><b>vânturile</b> (aer care se deplasează din zonele de presiune ridicată spre zonele de presiune scăzută) → <b>girueta</b> (sau mâneca de vânt) arată direcția, <b>anemometrul</b> viteza.</li>
</ul>
<p>Toate aceste instrumente se găsesc împreună în <b>stațiile meteorologice</b>. Astăzi ne ajută și <b>sateliții</b>, care fotografiază norii din spațiu.</p>`
    },
    {
      type: `widget`,
      title: `Potrivește instrumentul cu ceea ce măsoară`,
      widget: `match`,
      options: {
        pairs: [
          [`🌡️ Termometru`, `Temperatura`],
          [`🧪 Pluviometru`, `Ploaia căzută (mm)`],
          [`💧 Higrometru`, `Umiditatea aerului`],
          [`⏲️ Barometru`, `Presiunea atmosferică`],
          [`🌀 Anemometru`, `Viteza vântului`],
          [`🚩 Giruetă`, `Direcția vântului`]
        ]
      },
      caption: `Instrumentele unei stații meteorologice.`
    },
    {
      type: `quiz`,
      title: `Mini-test: vreme sau climă?`,
      questions: [
        { type: `mc`, q: `„Ieri la Napoli a căzut grindină.” Această propoziție vorbește despre…`, options: [`vreme`, `climă`], answer: 0, explain: `Vorbește despre un moment precis: este vreme.` },
        { type: `mc`, q: `„În Sicilia plouă puțin vara.” Această propoziție vorbește despre…`, options: [`vreme`, `climă`], answer: 1, explain: `Descrie o situație care se repetă în fiecare an: este climă.` },
        { type: `mc`, q: `Cu ce instrument se măsoară presiunea atmosferică?`, options: [`Termometru`, `Barometru`, `Pluviometru`], answer: 1, explain: `Cu barometrul, inventat de Torricelli.` }
      ]
    },
    {
      type: `text`,
      title: `3. Factorii climei: de ce e mai cald aici decât dincolo?`,
      html: `<p>Clima unui loc depinde de câțiva <b>factori</b>:</p>
<ol>
<li><b>Latitudinea</b> (distanța față de Ecuator). Aproape de Ecuator, razele Soarelui ajung aproape <b>perpendicular</b> și încălzesc mult; aproape de Poli ajung <b>înclinate</b>, aceeași lumină se împrăștie pe o suprafață mai mare și încălzește puțin.</li>
<li><b>Altitudinea</b> (înălțimea față de nivelul mării). Cu cât urci mai sus, cu atât e mai frig: aproximativ <b>6 °C mai puțin la fiecare 1000 m</b> (adică aproximativ 0,6 °C la fiecare 100 m). De aceea pe munți există zăpadă chiar și vara.</li>
<li><b>Apropierea de mare</b>. Marea se încălzește și se răcește încet: vara răcorește, iarna încălzește. Pe coaste temperaturile sunt mai <b>blânde</b>; în interior, departe de mare, iernile sunt mai reci și verile mai calde (climă <b>continentală</b>).</li>
<li><b>Vânturile și curenții marini</b>. <b>Curentul Golfului</b> aduce apă caldă din Caraibe spre nordul Europei: de aceea Londra are ierni mai blânde decât orașele canadiene aflate la aceeași latitudine.</li>
<li><b>Lanțurile muntoase</b>, care pot bloca vânturile reci sau norii de ploaie. <b>Alpii</b>, de exemplu, apără Italia de vânturile reci din nord.</li>
</ol>`
    },
    {
      type: `svg`,
      title: `De ce este mai cald la Ecuator?`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#0f172a"/>
<circle cx="380" cy="160" r="140" fill="#3b82f6"/>
<path d="M260 90 C300 70 330 95 350 80 C380 60 420 80 440 70 L470 95 C430 110 400 100 370 115 C330 130 290 110 260 120 Z" fill="#22c55e"/>
<path d="M300 190 C330 170 370 200 400 180 C430 170 460 200 490 190 L480 240 C440 250 400 230 360 245 C330 250 310 230 300 230 Z" fill="#22c55e"/>
<line x1="240" y1="160" x2="520" y2="160" stroke="#fde047" stroke-width="2" stroke-dasharray="6 4"/>
<text x="525" y="165" font-size="14" fill="#fde047">Ecuator</text>
<circle cx="40" cy="160" r="30" fill="#facc15"/>
<text x="40" y="215" font-size="15" fill="#fde047" text-anchor="middle">Soare</text>
<line x1="80" y1="140" x2="240" y2="140" stroke="#facc15" stroke-width="5"/>
<line x1="80" y1="180" x2="240" y2="180" stroke="#facc15" stroke-width="5"/>
<rect x="238" y="140" width="10" height="40" fill="#ef4444"/>
<text x="150" y="130" font-size="15" fill="#fecaca">raze drepte:</text>
<text x="150" y="200" font-size="15" fill="#fecaca">lumină concentrată = CALD</text>
<line x1="80" y1="40" x2="300" y2="40" stroke="#facc15" stroke-width="5"/>
<line x1="80" y1="70" x2="270" y2="70" stroke="#facc15" stroke-width="5"/>
<path d="M300 40 Q285 52 270 70" fill="none" stroke="#38bdf8" stroke-width="10"/>
<text x="20" y="98" font-size="15" fill="#bae6fd">raze înclinate:</text>
<text x="20" y="116" font-size="15" fill="#bae6fd">lumină împrăștiată = FRIG</text>
<circle cx="380" cy="22" r="12" fill="#f8fafc"/>
<text x="400" y="28" font-size="14" fill="#f8fafc">Polul Nord</text>
</svg>`,
      caption: `Aceeași cantitate de raze (două linii galbene) încălzește o bucățică mică la Ecuator (roșu) și una mult mai mare lângă Pol (albastru deschis). Încearcă cu o lanternă: îndreapt-o drept pe masă, apoi înclinată!`
    },
    {
      type: `text`,
      title: `4. Zonele climatice ale Pământului`,
      html: `<p>Pentru că Pământul este o sferă, Soarele îl încălzește diferit în funcție de latitudine. Așa se formează <b>zonele climatice</b>, ca niște fâșii orizontale pe glob, separate de câteva <b>paralele</b> speciale:</p>
<ul>
<li><b>zona toridă</b> (sau tropicală), între <b>Tropicul Racului</b> și <b>Tropicul Capricornului</b> (aproximativ 23° nord și sud): e cald tot anul. Aici se află clima <b>ecuatorială</b> (caldă și ploioasă, cu păduri tropicale ca Amazonia), clima <b>tropicală</b> (cu un anotimp uscat și unul ploios: savana) și clima <b>deșertică</b> (aproape fără ploi: Sahara);</li>
<li>cele două <b>zone temperate</b>, între Tropice și <b>Cercurile polare</b> (aproximativ 66° nord și sud): există <b>patru anotimpuri</b> bine distincte. Aici se găsesc clima <b>mediteraneană</b>, cea <b>oceanică</b> și cea <b>continentală</b>. Italia se află în zona temperată de nord;</li>
<li>cele două <b>zone polare</b> (sau glaciale), dincolo de Cercurile polare: foarte frig tot anul, gheață și tundră. Iarna este <b>noaptea polară</b>, vara <b>ziua polară</b> (Soarele nu apune niciodată!).</li>
</ul>
<p>Zonele sunt cinci în total: <b>1 toridă, 2 temperate, 2 polare</b>.</p>`
    },
    {
      type: `svg`,
      title: `Cele cinci zone climatice`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<defs><clipPath id="clipTerraClima"><circle cx="200" cy="160" r="140"/></clipPath></defs>
<g clip-path="url(#clipTerraClima)">
<rect x="60" y="20" width="280" height="45" fill="#bae6fd"/>
<rect x="60" y="65" width="280" height="62" fill="#86efac"/>
<rect x="60" y="127" width="280" height="66" fill="#fca5a5"/>
<rect x="60" y="193" width="280" height="62" fill="#86efac"/>
<rect x="60" y="255" width="280" height="45" fill="#bae6fd"/>
</g>
<circle cx="200" cy="160" r="140" fill="none" stroke="#1e293b" stroke-width="3"/>
<line x1="60" y1="160" x2="340" y2="160" stroke="#dc2626" stroke-width="2"/>
<line x1="70" y1="127" x2="330" y2="127" stroke="#1e293b" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="70" y1="193" x2="330" y2="193" stroke="#1e293b" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="110" y1="65" x2="290" y2="65" stroke="#1e293b" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="110" y1="255" x2="290" y2="255" stroke="#1e293b" stroke-width="1" stroke-dasharray="5 4"/>
<text x="360" y="47" font-size="15" fill="#0369a1" font-weight="bold">zona polară arctică</text>
<text x="360" y="70" font-size="14" fill="#334155">— Cercul polar arctic (66°N)</text>
<text x="360" y="100" font-size="15" fill="#15803d" font-weight="bold">zona temperată nordică (Italia)</text>
<text x="360" y="130" font-size="14" fill="#334155">— Tropicul Racului (23°N)</text>
<text x="360" y="165" font-size="15" fill="#b91c1c" font-weight="bold">zona toridă — Ecuator</text>
<text x="360" y="198" font-size="14" fill="#334155">— Tropicul Capricornului (23°S)</text>
<text x="360" y="228" font-size="15" fill="#15803d" font-weight="bold">zona temperată sudică</text>
<text x="360" y="258" font-size="14" fill="#334155">— Cercul polar antarctic (66°S)</text>
<text x="360" y="285" font-size="15" fill="#0369a1" font-weight="bold">zona polară antarctică</text>
<circle cx="245" cy="100" r="6" fill="#111827"/>
<text x="190" y="96" font-size="14" fill="#111827">Italia</text>
</svg>`,
      caption: `Zonele climatice sunt ca niște centuri în jurul Pământului: cu cât ne îndepărtăm de Ecuator, cu atât e mai frig.`
    },
    {
      type: `3d`,
      title: `Climatele pe glob`,
      scene: `globe`,
      caption: `Rotește globul: fiecare punct este un exemplu de climă. Uită-te la ce latitudine se află față de Ecuator.`,
      options: {
        points: [
          { lat: -3.1, lon: -60.0, label: `Manaus: ecuatorială (pădure tropicală)`, color: `#16a34a` },
          { lat: 1.3, lon: 103.8, label: `Singapore: ecuatorială`, color: `#16a34a` },
          { lat: -2.3, lon: 34.8, label: `Serengeti: tropicală (savană)`, color: `#eab308` },
          { lat: 23.4, lon: 25.7, label: `Sahara: deșertică`, color: `#f97316` },
          { lat: 41.9, lon: 12.5, label: `Roma: mediteraneană`, color: `#ef4444` },
          { lat: 51.5, lon: -0.13, label: `Londra: oceanică`, color: `#3b82f6` },
          { lat: 55.75, lon: 37.62, label: `Moscova: continentală`, color: `#8b5cf6` },
          { lat: 62.0, lon: 129.7, label: `Iakuțk: rece (taiga)`, color: `#0ea5e9` },
          { lat: 72.0, lon: -40.0, label: `Groenlanda: polară`, color: `#e0f2fe` },
          { lat: -78.5, lon: 106.8, label: `Vostok (Antarctida): polară`, color: `#e0f2fe` }
        ]
      }
    },
    {
      type: `quiz`,
      title: `Mini-test: factori și zone`,
      questions: [
        { type: `num`, q: `Câte zone climatice are Pământul în total?`, answer: 5, explain: `1 toridă, 2 temperate, 2 polare.` },
        { type: `mc`, q: `În ce zonă climatică se află Italia?`, options: [`Toridă`, `Temperată nordică`, `Polară`], answer: 1, explain: `Italia se află în zona temperată a emisferei nordice.` },
        { type: `num`, q: `La mare sunt 20 °C. Câte grade vor fi, aproximativ, pe un munte înalt de 2000 m? (aproximativ 6 °C mai puțin la fiecare 1000 m)`, answer: 8, tol: 1, unit: `°C`, explain: `2000 m = 2 × 6 °C = 12 °C mai puțin: 20 − 12 = 8 °C.` }
      ]
    },
    {
      type: `text`,
      title: `5. Climatele Italiei`,
      html: `<p>Italia are în general o climă <b>temperată</b>, datorită poziției ei și Mării Mediterane. Dar este lungă și muntoasă, deci există climate diferite:</p>
<ul>
<li><b>clima alpină</b> (în Alpi și pe cele mai înalte vârfuri ale Apeninilor): ierni lungi și reci cu multă zăpadă, veri răcoroase și scurte, furtuni frecvente;</li>
<li><b>clima continentală</b> (sau padană, în Câmpia Padului): ierni reci și umede cu multă <b>ceață</b>, veri calde și <b>înăbușitoare</b> (foarte umede); marea este departe, iar Alpii și Apeninii închid câmpia;</li>
<li><b>clima apeninică</b> (în zonele interioare ale Apeninilor): ierni reci și cu zăpadă, veri destul de calde;</li>
<li><b>clima mediteraneană</b> (de-a lungul coastelor, în centru-sud și pe insule): ierni <b>blânde</b> și ploioase, veri <b>calde și uscate</b>. Aici cresc măslini, citrice, viță-de-vie și <b>maquis-ul mediteranean</b>.</li>
</ul>
<p>Clima influențează totul: plantele care cresc, culturile, forma caselor (acoperișuri înclinate la munte, ca zăpada să alunece; case albe în sud, ca să reflecte Soarele), mâncărurile și chiar sărbătorile.</p>`
    },
    {
      type: `widget`,
      title: `Joc: ce climă este?`,
      widget: `classify`,
      options: {
        groups: [`Alpină`, `Continentală (padană)`, `Mediteraneană`],
        items: [
          [`❄️ Zăpadă multe luni`, 0],
          [`🏔️ Veri răcoroase și scurte`, 0],
          [`🌲 Păduri de brazi și zadă`, 0],
          [`🌫️ Ceață iarna`, 1],
          [`🥵 Vară înăbușitoare și umedă`, 1],
          [`🌾 Orezării și lanuri de porumb`, 1],
          [`🫒 Măslini și citrice`, 2],
          [`☀️ Vară caldă și uscată`, 2],
          [`🌸 Iarnă blândă`, 2]
        ]
      },
      caption: `Fiecare climă are caracteristicile, plantele și culturile ei.`
    },
    {
      type: `example`,
      title: `Exemplu practic: cum citim o climogramă`,
      html: `<p>O <b>climogramă</b> (sau diagramă climatică) arată într-un singur grafic <b>temperaturile medii</b> (linia) și <b>ploile</b> (coloanele) din fiecare lună într-un loc. Uită-te la cele simplificate pentru Palermo și Milano de mai jos și compară:</p>
<ul>
<li>la <b>Palermo</b> (climă mediteraneană) temperatura nu scade niciodată prea mult (aproximativ 12 °C în ianuarie), iar vara aproape că nu plouă;</li>
<li>la <b>Milano</b> (climă continentală) în ianuarie media este apropiată de 3–4 °C și plouă destul în toate anotimpurile, mai mult primăvara și toamna.</li>
</ul>
<p>Cu o climogramă poți înțelege clima unui loc chiar fără să fi fost vreodată acolo!</p>`
    },
    {
      type: `svg`,
      title: `Climograme simplificate: Palermo și Milano`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="150" y="22" font-size="17" fill="#b91c1c" text-anchor="middle" font-weight="bold">Palermo (mediteraneană)</text>
<text x="450" y="22" font-size="17" fill="#6d28d9" text-anchor="middle" font-weight="bold">Milano (continentală)</text>
<line x1="30" y1="250" x2="280" y2="250" stroke="#334155" stroke-width="2"/>
<line x1="330" y1="250" x2="580" y2="250" stroke="#334155" stroke-width="2"/>
<g fill="#60a5fa">
<rect x="35" y="180" width="14" height="70"/><rect x="55" y="190" width="14" height="60"/><rect x="75" y="200" width="14" height="50"/><rect x="95" y="215" width="14" height="35"/>
<rect x="115" y="232" width="14" height="18"/><rect x="135" y="242" width="14" height="8"/><rect x="155" y="246" width="14" height="4"/><rect x="175" y="242" width="14" height="8"/>
<rect x="195" y="220" width="14" height="30"/><rect x="215" y="200" width="14" height="50"/><rect x="235" y="185" width="14" height="65"/><rect x="255" y="175" width="14" height="75"/>
<rect x="335" y="200" width="14" height="50"/><rect x="355" y="205" width="14" height="45"/><rect x="375" y="190" width="14" height="60"/><rect x="395" y="170" width="14" height="80"/>
<rect x="415" y="160" width="14" height="90"/><rect x="435" y="180" width="14" height="70"/><rect x="455" y="190" width="14" height="60"/><rect x="475" y="180" width="14" height="70"/>
<rect x="495" y="170" width="14" height="80"/><rect x="515" y="150" width="14" height="100"/><rect x="535" y="160" width="14" height="90"/><rect x="555" y="190" width="14" height="60"/>
</g>
<polyline points="42,154 62,154 82,146 102,136 122,118 142,98 162,84 182,82 202,96 222,112 242,130 262,146" fill="none" stroke="#dc2626" stroke-width="4"/>
<polyline points="342,218 362,206 382,182 402,162 422,138 442,118 462,104 482,108 502,132 522,158 542,186 562,212" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="42" y="270" font-size="14" fill="#334155">I</text>
<text x="255" y="270" font-size="14" fill="#334155">D</text>
<text x="342" y="270" font-size="14" fill="#334155">I</text>
<text x="555" y="270" font-size="14" fill="#334155">D</text>
<text x="150" y="292" font-size="14" fill="#334155" text-anchor="middle">coloane albastre = ploaie</text>
<text x="450" y="292" font-size="14" fill="#334155" text-anchor="middle">linie roșie = temperatură</text>
</svg>`,
      caption: `Evoluție orientativă (nu la scară exactă). La Palermo, vara coloanele ploii aproape dispar; la Milano linia temperaturii pornește mult mai jos iarna.`
    },
    {
      type: `example`,
      title: `Exemplu practic: de ce este mai puțin frig iarna la mare?`,
      html: `<p>Fă un experiment: pune la soare o găleată cu apă și una cu nisip. După o oră atinge-le: <b>nisipul</b> frige, <b>apa</b> este abia căldicică. Seara, în schimb, nisipul e deja rece, iar apa este încă căldicică.</p>
<p>Marea face la fel, dar în mare: vara „absoarbe” căldura încet-încet, iarna o „redă” încet-încet. De aceea <b>Genova</b> (la mare) are în ianuarie o medie de aproximativ 8 °C, în timp ce <b>Milano</b>, la doar 120 km, dar în câmpia închisă, are aproximativ 3–4 °C.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… recordul european de căldură este în Italia?`,
      html: `<p>Pe <b>11 august 2021</b>, lângă <b>Siracuza</b>, în Sicilia, o stație meteorologică a înregistrat <b>48,8 °C</b>: este cea mai ridicată temperatură măsurată vreodată în Europa, recunoscută de Organizația Meteorologică Mondială.</p>
<p>Recordul de frig al Pământului este, în schimb, de <b>−89,2 °C</b>, măsurat în 1983 la stația rusească <b>Vostok</b>, în Antarctida.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că… clima se schimbă?`,
      html: `<p>De când omul arde cantități mari de cărbune, petrol și gaze (din secolul al XIX-lea), în aer a crescut <b>dioxidul de carbon</b>, un gaz care reține căldura ca învelișul unei sere (<b>efect de seră</b>). Temperatura medie a Pământului a crescut cu aproximativ <b>1,2 °C</b> față de sfârșitul secolului al XIX-lea.</p>
<p>Pare puțin, dar are deja efecte: <b>ghețarii alpini</b> se retrag (unii au dispărut deja), valurile de căldură sunt mai frecvente, iar nivelul mării crește. De aceea aproape toate țările lumii au semnat în 2015 <b>Acordul de la Paris</b> pentru reducerea acestor emisii.</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege clima`,
      intro: `Dacă zonele și factorii ți se par complicați, încearcă aceste alte puncte de vedere.`,
      tabs: [
        {
          label: `🔦 Experimentul cu lanterna`,
          html: `<p>Ai nevoie de o lanternă și de o foaie cu pătrățele, într-o cameră întunecată.</p>
<ol>
<li>Îndreaptă lanterna <b>drept</b> spre foaie, de la 30 cm: lumina formează un cerc mic și foarte luminos. Numără pătrățelele luminate.</li>
<li>Acum <b>înclină</b> lanterna, tot la 30 cm: lumina formează o elipsă mai mare și mai slabă. Numără din nou pătrățelele: sunt mult mai multe!</li>
</ol>
<p>Cantitatea de lumină este aceeași, dar împărțită pe mai multe pătrățele: fiecare pătrățel primește mai puțină lumină, deci mai puțină căldură. Exact asta se întâmplă la Poli față de Ecuator. Și este și motivul <b>anotimpurilor</b>: vara Soarele este mai sus pe cer, iar razele sunt mai drepte.</p>`
        },
        {
          label: `🏔️ Clima în 3D`,
          html: `<p>Rotește peisajul și atinge părțile lui: vei vedea cum munții, câmpiile, marea și lacurile schimbă clima unui loc chiar și la câțiva kilometri distanță.</p>`,
          scene: `terrain`,
          options: {
            features: {
              peak: { label: `Vârf`, html: `Sus e frig: aproximativ 6 °C mai puțin la fiecare 1000 m. Pe vârfurile alpine temperatura medie a anului este sub zero.` },
              glacier: { label: `Ghețar`, html: `Se formează acolo unde zăpada de iarnă este mai multă decât cea care se topește vara. Dacă clima se încălzește, ghețarul se retrage.` },
              mountain: { label: `Munte`, html: `Munții opresc norii: o parte primește multă ploaie, cealaltă rămâne mai uscată. Alpii blochează vânturile reci din nord.` },
              valley: { label: `Vale`, html: `În văi, iarna, aerul rece, mai greu, coboară și stagnează: uneori jos în vale e mai frig decât la jumătatea muntelui!` },
              plain: { label: `Câmpie închisă`, html: `O câmpie închisă de munți, ca Câmpia Padului, are puțin vânt: iarna se formează ceața, vara este înăbușeală.` },
              lake: { label: `Lac`, html: `Lacurile mari, ca Garda, moderează clima din jur: pe malurile lor cresc măslini și lămâi chiar și în nord!` },
              sea: { label: `Mare`, html: `Marea se încălzește și se răcește încet: face clima coastelor mai blândă iarna și mai răcoroasă vara.` },
              coast: { label: `Coastă`, html: `Pe coaste bat brizele: ziua dinspre mare spre uscat, noaptea dinspre uscat spre mare.` }
            }
          }
        },
        {
          label: `🌍 Straturile atmosferei`,
          html: `<p>Vremea „se petrece” aproape toată în stratul cel mai de jos al aerului, <b>troposfera</b>, gros doar de aproximativ 8–17 km (mai subțire la Poli, mai gros la Ecuator). Deasupra se află <b>stratosfera</b> (cu stratul de <b>ozon</b> care ne apără de razele ultraviolete), <b>mezosfera</b> și <b>termosfera</b>. Rotește sfera tăiată (straturile nu sunt la scară!).</p>`,
          scene: `layers`,
          options: {
            layers: [
              { r: 1, color: `#c4b5fd`, label: `Termosfera (până la aproximativ 600 km)` },
              { r: 0.9, color: `#a5b4fc`, label: `Mezosfera (50–85 km)` },
              { r: 0.8, color: `#93c5fd`, label: `Stratosfera cu ozon (12–50 km)` },
              { r: 0.7, color: `#bae6fd`, label: `Troposfera: nori și ploaie (0–12 km)` },
              { r: 0.6, color: `#22c55e`, label: `Suprafața Pământului` }
            ]
          }
        },
        {
          label: `🧥 Clima și hainele`,
          html: `<p>O analogie de zi cu zi: <b>vremea</b> hotărăște ce îmbraci <b>azi</b>; <b>clima</b> hotărăște ce ai <b>în dulap</b>.</p>
<ul>
<li>Un copil din <b>Bolzano</b> are în dulap o geacă groasă, mănuși, bocanci de zăpadă (climă alpină/continentală).</li>
<li>Un copil din <b>Lampedusa</b> poate nu a avut niciodată nevoie de mănuși de zăpadă (climă mediteraneană).</li>
<li>Un copil din <b>Singapore</b> poartă haine ușoare tot anul și umbrela aproape în fiecare zi (climă ecuatorială).</li>
</ul>
<p>Chiar dacă la Bolzano într-o zi de aprilie e cald (vreme), geaca rămâne în dulap pentru că iarna se va întoarce (climă)!</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta climei`,
      nodes: [
        { id: `sole`, label: `Energia Soarelui`, x: 50, y: 6, color: `#f59e0b`, html: `Soarele încălzește Pământul și pune în mișcare aerul și apa.`, why: `Aproape toată energia care pune în mișcare atmosfera vine de la Soare. Pentru că Pământul este sferic, îl încălzește diferit la diferite latitudini: aceasta este cauza primă a climatelor.` },
        { id: `latitudine`, label: `Latitudine`, x: 18, y: 28, color: `#dc2626`, html: `Distanța față de Ecuator.`, why: `Grecii o înțeleseseră deja: cuvântul „climă” vine din greacă, <i>klima</i>, „înclinare”, adică înclinarea razelor Soarelui. Geograful Parmenide (secolul al V-lea î.Hr.) a fost primul care a împărțit Pământul în cinci zone.` },
        { id: `fasce`, label: `Zone climatice`, x: 18, y: 54, color: `#16a34a`, html: `Toridă, temperate, polare.`, why: `Tropicele (aproximativ 23°) arată unde Soarele poate ajunge direct deasupra capului; Cercurile polare (aproximativ 66°) unde poate exista o zi întreagă de lumină sau de întuneric. Depinde de înclinarea axei Pământului (aproximativ 23,4°).` },
        { id: `altitudine`, label: `Altitudine`, x: 50, y: 30, color: `#78716c`, html: `Cu cât urci mai sus, cu atât e mai frig.`, why: `Aerul de sus este mai rarefiat (are mai puțină „greutate” de aer deasupra) și se încălzește mai puțin: aerul se încălzește mai ales de jos, de la sol, nu direct de la Soare.` },
        { id: `mare`, label: `Mare și curenți`, x: 82, y: 28, color: `#0284c7`, html: `Moderează temperaturile coastelor.`, why: `Apa are nevoie de mult mai multă energie decât uscatul ca să se încălzească (are o „capacitate termică” mare): așa acumulează căldură vara și o cedează iarna.` },
        { id: `elementi`, label: `Elemente: temperatură, ploi, presiune, umiditate, vânturi`, x: 50, y: 56, color: `#6366f1`, html: `Ceea ce se măsoară în stațiile meteo.`, why: `Galilei a construit un termoscop pe la 1593, Torricelli barometrul în 1643; la Florența, în 1654, marele duce Ferdinand al II-lea a creat prima rețea de stații meteo cu instrumente toate la fel.` },
        { id: `tempo`, label: `Vremea`, x: 30, y: 80, color: `#0ea5e9`, html: `Situația de azi, într-un loc.`, why: `Se schimbă repede pentru că masele de aer calde și reci se mișcă mereu, împinse de diferențele de presiune.` },
        { id: `clima`, label: `Clima`, x: 70, y: 80, color: `#15803d`, html: `Media vremii în cel puțin 30 de ani.`, why: `Organizația Meteorologică Mondială a ales 30 de ani ca perioadă standard, suficient de lungă ca să „șteargă” anii excepționali.` },
        { id: `italia`, label: `Climatele Italiei`, x: 70, y: 98, color: `#b91c1c`, html: `Alpină, continentală, apeninică, mediteraneană.`, why: `Italia se întinde pe aproximativ 10° de latitudine, are munți foarte înalți și este înconjurată de mare: de aceea în câțiva kilometri clima se poate schimba mult.` }
      ],
      edges: [
        [`sole`, `latitudine`, `ajunge înclinat după`],
        [`latitudine`, `fasce`, `creează`],
        [`sole`, `altitudine`, `încălzește mai puțin la`],
        [`sole`, `mare`, `încălzește încet`],
        [`altitudine`, `elementi`, `schimbă`],
        [`mare`, `elementi`, `schimbă`],
        [`elementi`, `tempo`, `descriu`],
        [`tempo`, `clima`, `media de 30 de ani =`],
        [`clima`, `italia`, `ex.`],
        [`fasce`, `clima`, `mari tipuri de`]
      ]
    },
    {
      type: `remember`,
      title: `De reținut`,
      html: `<ul>
<li><b>Vremea</b> = situația unui moment; <b>clima</b> = media a cel puțin 30 de ani.</li>
<li>Elemente: <b>temperatura</b> (termometru), <b>precipitațiile</b> (pluviometru), <b>umiditatea</b> (higrometru), <b>presiunea</b> (barometru), <b>vânturile</b> (anemometru, giruetă).</li>
<li>Factori: <b>latitudinea</b>, <b>altitudinea</b> (aproximativ −6 °C la fiecare 1000 m), <b>marea</b>, vânturile și curenții, munții.</li>
<li><b>5 zone climatice</b>: 1 toridă, 2 temperate, 2 polare.</li>
<li>În Italia: clima <b>alpină</b>, <b>continentală/padană</b>, <b>apeninică</b>, <b>mediteraneană</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Vreme`, d: `Condițiile aerului într-un loc și într-un moment precise.` },
    { t: `Climă`, d: `Ansamblul condițiilor de vreme tipice unei regiuni, calculate pe cel puțin 30 de ani.` },
    { t: `Precipitații`, d: `Apă care cade din cer: ploaie, zăpadă, grindină.` },
    { t: `Presiune atmosferică`, d: `Greutatea aerului care se află deasupra noastră.` },
    { t: `Umiditate`, d: `Cantitatea de vapori de apă prezenți în aer.` },
    { t: `Latitudine`, d: `Distanța unui loc față de Ecuator, măsurată în grade spre nord sau spre sud.` },
    { t: `Altitudine`, d: `Înălțimea unui loc deasupra nivelului mării.` },
    { t: `Tropice`, d: `Paralele la aproximativ 23° nord (Racului) și 23° sud (Capricornului) care delimitează zona toridă.` },
    { t: `Cercuri polare`, d: `Paralele la aproximativ 66° nord și sud, dincolo de care încep zonele polare.` },
    { t: `Climogramă`, d: `Grafic care arată temperaturile și ploile medii din fiecare lună într-un loc.` },
    { t: `Înăbușeală`, d: `Căldură umedă și fără vânt, tipică verii în Câmpia Padului.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Care este diferența dintre vreme și climă?`, options: [`Sunt același lucru`, `Vremea ține de un moment, clima este media din mulți ani`, `Clima se schimbă în fiecare zi`], answer: 1, explain: `Clima se calculează pe cel puțin 30 de ani.` },
      { type: `tf`, q: `O propoziție ca „Azi la Torino ninge” descrie clima.`, answer: false, explain: `Descrie vremea de azi.` },
      { type: `mc`, q: `Care instrument măsoară cantitatea de ploaie?`, options: [`Pluviometrul`, `Anemometrul`, `Barometrul`], answer: 0, explain: `Pluviometrul, în milimetri.` },
      { type: `text`, q: `Cine a inventat barometrul în 1643? (numele de familie)`, answer: [`torricelli`, `evangelista torricelli`], explain: `Evangelista Torricelli.` },
      { type: `mc`, q: `De ce este mai cald la Ecuator decât la Poli?`, options: [`Pentru că este mai aproape de Soare`, `Pentru că razele Soarelui ajung mai drepte`, `Pentru că este mai multă mare`], answer: 1, explain: `Razele drepte concentrează căldura pe o suprafață mică.` },
      { type: `num`, q: `Dacă la mare sunt 25 °C, câte grade vor fi aproximativ la 1000 m altitudine? (aproximativ −6 °C la fiecare 1000 m)`, answer: 19, tol: 1, unit: `°C`, explain: `25 − 6 = 19 °C.` },
      { type: `order`, q: `Pune zonele în ordine, de la Polul Nord la Ecuator.`, items: [`Zona polară arctică`, `Zona temperată nordică`, `Zona toridă`], explain: `De la Pol: polară, temperată, toridă.` },
      { type: `mc`, q: `Care țară are clima pădurii tropicale (ecuatorială)?`, options: [`Brazilia (Amazonia)`, `Norvegia`, `Italia`], answer: 0, explain: `Amazonia este aproape de Ecuator.` },
      { type: `mc`, q: `În Câmpia Padului clima este…`, options: [`mediteraneană`, `continentală, cu ceață iarna și înăbușeală vara`, `polară`], answer: 1, explain: `Este departe de mare și închisă de munți.` },
      { type: `mc`, q: `Ce caracteristică are clima mediteraneană?`, options: [`Veri calde și uscate, ierni blânde`, `Zăpadă tot anul`, `Ploi în fiecare zi`], answer: 0, explain: `Este tipică coastelor și insulelor italiene.` },
      { type: `tf`, q: `Marea face clima coastelor mai blândă.`, answer: true, explain: `Se încălzește și se răcește încet.` },
      { type: `num`, q: `Câți ani de măsurători sunt necesari, cel puțin, pentru a descrie clima unui loc?`, answer: 30, explain: `Cel puțin 30 de ani, potrivit Organizației Meteorologice Mondiale.` }
    ]
  }
});

TOPIC('ro', {
  id: "l1-sci-idrosfera",
  title: "Hidrosfera",
  intro: "Văzută din spațiu, planeta noastră este albastră: aproximativ <b>71%</b> din suprafață este acoperită de apă. <b>Hidrosfera</b> este ansamblul întregii ape de pe Pământ, în stare lichidă, solidă și de vapori: oceane, mări, lacuri, râuri, ape subterane, ghețari și vapori în aer. Este mediul în care s-a născut viața și reglează clima. În această lecție urmărim picăturile de-a lungul <b>circuitului apei</b> și studiem oceanele, curenții, râurile, lacurile și ghețarii.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Câtă apă există și unde se află",
      html: `<p>Volumul total de apă de pe Pământ este de aproximativ <b>1,4 miliarde km³</b>. Dar aproape toată este nepotrivită pentru băut:</p>
<table>
<tr><th>Unde</th><th>Procent din apa totală</th></tr>
<tr><td>Oceane și mări (sărată)</td><td>circa <b>97,5%</b></td></tr>
<tr><td>Apă dulce</td><td>circa <b>2,5%</b></td></tr>
</table>
<p>Iar din apa dulce:</p>
<ul>
<li>circa <b>69%</b> este blocată în <b>ghețari și calote polare</b>;</li>
<li>circa <b>30%</b> este <b>apă subterană</b> (pânze freatice);</li>
<li>mai puțin de <b>1%</b> se află în lacuri, râuri, sol și atmosferă: adică aproximativ 0,01% din apa totală este ușor accesibilă.</li>
</ul>
<p>Dacă toată apa de pe Pământ ar fi adunată într-o sferă, aceasta ar avea un diametru de aproximativ 1400 km: dimensiunea unei luni ca Europa.</p>
<p><b>Apele sărate</b> conțin săruri (mai ales clorură de sodiu, circa 85%) în medie <b>35 g pe kg</b>, adică o <b>salinitate</b> de 35‰. Salinitatea variază: mai mică acolo unde se varsă multe râuri sau plouă mult (Marea Baltică: 5–10‰), mai mare acolo unde evaporarea este puternică (Marea Roșie: 40‰; Marea Moartă: circa 300‰, un lac sărat).</p>`
    },
    {
      type: "widget",
      title: "Apă dulce sau sărată?",
      widget: "classify",
      options: { groups: ["Apă sărată", "Apă dulce"], items: [
        ["Oceanul Pacific", 0],
        ["Marea Mediterană", 0],
        ["Lacul Garda", 1],
        ["Râul Po", 1],
        ["Ghețarul Aletsch", 1],
        ["Marea Roșie", 0],
        ["Pânza de apă subterană", 1],
        ["Marea Moartă", 0],
        ["Banchiza antarctică", 1],
        ["Lacul Bolsena", 1]
      ] },
      caption: "Marea Moartă și Marea Caspică poartă nume „de mare”, dar în realitate sunt lacuri (Caspica are apă salmastră). Observă că gheața de pe uscat este apă dulce."
    },
    {
      type: "text",
      title: "Circuitul apei",
      html: `<p>Apa nu stă niciodată pe loc: <b>ciclul hidrologic</b> o face să circule între oceane, atmosferă și uscat, împinsă de energia Soarelui și de gravitație. Etapele:</p>
<ol>
<li><b>Evaporarea</b>: Soarele încălzește apa mărilor, a lacurilor și a solului; circa 86% din evaporare provine din oceane.</li>
<li><b>Transpirația</b> plantelor (care, împreună cu evaporarea, formează <b>evapotranspirația</b>).</li>
<li><b>Condensarea</b>: urcând, vaporii se răcesc și se condensează în picături mici: nori.</li>
<li><b>Precipitațiile</b>: ploaie, zăpadă, grindină.</li>
<li><b>Scurgerea la suprafață</b> (apa care curge la suprafață spre râuri și mări), <b>infiltrarea</b> (apa care pătrunde în sol și alimentează pânzele freatice) și <b>topirea</b> zăpezii și a gheții.</li>
</ol>
<p>O idee importantă: apa de pe planetă este aproape mereu aceeași. Apa pe care o bei astăzi poate să fi fost într-un ocean, într-un nor, într-un ghețar, în corpul unui dinozaur. Moleculele sunt „reciclate” de miliarde de ani. <b>Timpul de ședere</b> variază foarte mult: în atmosferă doar circa 9 zile, în râuri câteva săptămâni, în oceane circa 3000 de ani, în ghețarii antarctici zeci de mii de ani.</p>`
    },
    {
      type: "svg",
      title: "Circuitul apei",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#e0f2fe"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<path d="M0 230 L120 190 L200 215 L300 140 L400 205 L640 205 L640 320 L0 320 Z" fill="#a3a38a"/>
<path d="M300 140 L275 168 L300 160 L325 170 Z" fill="#fff"/>
<rect x="0" y="260" width="640" height="60" fill="#38bdf8"/>
<ellipse cx="190" cy="70" rx="60" ry="26" fill="#f1f5f9" stroke="#94a3b8"/><ellipse cx="230" cy="64" rx="45" ry="22" fill="#f1f5f9" stroke="#94a3b8"/>
<g stroke="#1d4ed8" stroke-width="3"><line x1="180" y1="100" x2="170" y2="130"/><line x1="200" y1="100" x2="190" y2="130"/><line x1="220" y1="100" x2="210" y2="130"/></g>
<g stroke="#dc2626" stroke-width="3" fill="none"><path d="M480 255 C480 200 480 150 440 100"/><path d="M520 255 C530 210 530 160 500 110"/></g>
<text x="500" y="285" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">evaporare</text>
<text x="135" y="160" font-size="14" fill="#1e3a8a" text-anchor="middle" font-weight="bold">precipitații</text>
<text x="230" y="30" font-size="14" fill="#334155" text-anchor="middle" font-weight="bold">condensare (nori)</text>
<text x="350" y="125" font-size="14" fill="#334155" font-weight="bold">zăpadă și ghețari</text>
<path d="M240 218 C210 232 170 250 150 262" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<text x="190" y="248" font-size="14" fill="#1e3a8a" font-weight="bold">râu</text>
<g stroke="#334155" stroke-width="2" stroke-dasharray="4 4"><line x1="90" y1="215" x2="90" y2="250"/><line x1="70" y1="215" x2="70" y2="250"/></g>
<text x="75" y="305" font-size="14" fill="#fff" font-weight="bold">infiltrare și pânză freatică</text>
<text x="440" y="305" font-size="16" fill="#fff" font-weight="bold">OCEAN</text>
</svg>`,
      caption: "Circuitul este alimentat de Soare (care face apa să se evapore) și de gravitație (care face apa să cadă și să curgă)."
    },
    {
      type: "example",
      title: "Câtă apă cade? Bilanțul hidric",
      html: `<p>O ploaie de <b>1 mm</b> echivalează cu <b>1 litru de apă pe fiecare m²</b>. Dacă într-o zi de furtună cad 50 mm pe un bazin de <b>20 km²</b>, câtă apă ajunge?</p>
<ol>
<li>20 km² = 20 000 000 m².</li>
<li>50 mm = 50 L/m² → 50 × 20 000 000 = <b>1 000 000 000 L</b> = 10⁹ L = <b>1 milion de m³</b>.</li>
</ol>
<p>O piscină olimpică conține 2500 m³: sunt aproximativ <b>400 de piscine olimpice</b>. Un bilanț hidric compară precipitațiile (P), evapotranspirația (E) și scurgerea (D): într-un bazin stabil, P ≈ E + D. Dacă prelevările depășesc realimentarea, pânzele freatice coboară.</p>`
    },
    {
      type: "example",
      title: "Câtă sare se află într-un bazin de apă de mare?",
      html: `<p>Apa de mare are densitatea medie de aproximativ <b>1,025 kg/L</b> și salinitatea de <b>35‰</b>. Câtă sare se obține evaporând <b>200 L</b> de apă de mare?</p>
<ol>
<li>Masa apei: 200 L × 1,025 kg/L = 205 kg.</li>
<li>Masa sărurilor: 205 × 0,035 = <b>circa 7,2 kg</b>.</li>
</ol>
<p>Nu toate sărurile sunt clorură de sodiu: în practica sărăriilor se obține mai întâi ghipsul și apoi sarea de bucătărie (NaCl), lăsând „apele-mamă” bogate în magneziu și potasiu.</p>`
    },
    {
      type: "text",
      title: "Oceane și mări",
      html: `<p>Cele trei mari oceane sunt <b>Pacificul</b> (circa 165 milioane km², aproape jumătate din suprafața oceanică și mai mult decât toate uscaturile la un loc), <b>Atlanticul</b> (circa 106 milioane km²) și <b>Indian</b> (circa 70 milioane km²); oceanele <b>Arctic</b> și <b>Austral</b> (Antarctic) sunt mai mici. În realitate formează un singur ocean planetar. Adâncimea medie este de aproximativ <b>3700 m</b>; cea maximă este <b>Groapa Marianelor</b> (Challenger Deep), circa <b>10 900 m</b>: Everestul (8849 m) ar încăpea în ea, cu peste 2 km de apă deasupra vârfului.</p>
<p><b>Fundurile</b> au o morfologie variată: <b>platforma continentală</b> (până la circa 200 m, bogată în viață și în pescuit), <b>povârnișul</b>, <b>câmpia abisală</b>, <b>dorsalele oceanice</b> (lanțuri muntoase submarine unde se naște scoarță nouă) și <b>fosele</b> (unde scoarța se scufundă în manta): subiecte legate de tectonica plăcilor.</p>
<p>O <b>mare</b> este o porțiune de ocean mai mică, delimitată de uscat (mare închisă, ca Mediterana, care comunică cu oceanul doar prin Strâmtoarea Gibraltar; mare deschisă, ca Marea Caraibelor).</p>
<p>Temperatura scade odată cu adâncimea: stratul de la suprafață (circa 100–200 m), amestecat de valuri și vânt, este cald; sub <b>termoclin</b> temperatura scade rapid; la peste 1000 m este aproape constantă, în jur de 2–4 °C.</p>`
    },
    {
      type: "text",
      title: "Mișcările mării: valuri, maree și curenți",
      html: `<ul>
<li><b>Valurile</b>: provocate de vânt. Apa nu înaintează: particulele descriu cercuri, iar <b>energia</b> se propagă. Valurile cresc odată cu viteza vântului, durata lui și <b>fetch-ul</b> (lungimea de mare pe care suflă vântul). <b>Tsunami</b> sunt valuri foarte lungi (chiar 100–200 km între două creste) provocate de cutremure submarine sau alunecări de teren: în larg se deplasează cu circa 800 km/h, la o înălțime de sub un metru, apoi încetinesc și se ridică apropiindu-se de coastă.</li>
<li><b>Mareele</b>: două înalte și două joase la fiecare circa 24 h 50 min, datorită atracției gravitaționale a Lunii și a Soarelui.</li>
<li><b>Curenții</b>: mari râuri în interiorul mării.
<ul>
<li><b>Curenți de suprafață</b>: provocați de <b>vânturile dominante</b> și deviați de <b>forța Coriolis</b>; formează mari vârtejuri (<b>gyre</b>) care se rotesc în sens orar în emisfera nordică și antiorar în cea sudică. Exemplu: <b>Curentul Golfului</b>, care aduce apă caldă din Golful Mexic spre nordul Europei și face clima Insulelor Britanice mai blândă decât cea din Labrador, la aceeași latitudine.</li>
<li><b>Curenți de adâncime</b> (<b>circulația termohalină</b>): datorați diferențelor de <b>temperatură</b> și <b>salinitate</b>, adică de densitate. Apa rece și sărată de lângă poli se scufundă și curge pe fund spre ecuator: o „bandă rulantă” globală care are nevoie de circa 1000 de ani ca să încheie un ciclu.</li>
</ul></li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Rățuștele de plastic care povestesc despre curenți",
      html: `<p>În 1992, un cargou a pierdut în Pacific un container cu 28 800 de jucării de plastic pentru baie (rățuște, broaște țestoase, castori, broscuțe). Oceanografii, urmărind unde au ajuns jucăriile pe plajele din Alaska, din Japonia și, ani mai târziu, pe alte coaste din Atlanticul de Nord, au reconstituit curenții de suprafață și vârtejurile gyre. Și astăzi, marile pete de deșeuri de plastic, precum „Great Pacific Garbage Patch”, se formează chiar acolo unde curenții gyre converg și fac apa să stagneze.</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: apă și oceane",
      questions: [
        { type: "mc", q: "Ce procent din apa Pământului este dulce?", options: ["circa 2,5%", "circa 25%", "circa 50%"], answer: 0, explain: "97,5% este sărată, iar din mica parte dulce aproape totul se află în gheață." },
        { type: "tf", q: "Curentul Golfului contribuie la blândețea climei din nord-vestul Europei.", answer: true, explain: "Transportă apă caldă din tropice spre nord." },
        { type: "num", q: "Câți litri de apă aduce o ploaie de 25 mm pe un câmp de 100 m²?", answer: 2500, unit: "L", explain: "1 mm = 1 L/m²: 25 × 100 = 2500 L." }
      ]
    },
    {
      type: "text",
      title: "Râuri și bazine hidrografice",
      html: `<p>Un <b>râu</b> este un curs de apă care curge într-o albie de la <b>izvor</b> până la <b>vărsare</b>. Teritoriul care adună toate apele ce alimentează un râu este <b>bazinul lui hidrografic</b>, separat de bazinele vecine prin <b>cumpăna apelor</b>. Râul principal primește <b>afluenții</b>; spre mare se termină într-o <b>deltă</b> (cu brațe și teren depus: Po, Nil, Mississippi) sau într-un <b>estuar</b> (pâlnie deschisă spre mare, unde mareele sunt puternice: Tamisa, Sena).</p>
<p>Traseul râului se împarte în trei sectoare:</p>
<ul>
<li><b>cursul superior</b> (montan): pantă mare, apă rapidă care <b>erodează</b> și sapă văi în formă de V;</li>
<li><b>cursul mijlociu</b>: pantă mai mică, transport de aluviuni;</li>
<li><b>cursul inferior</b> (de câmpie): curge lent, formează <b>meandre</b> și <b>depune</b> sedimentele (aluviuni) până la vărsare.</li>
</ul>
<p><b>Debitul</b> este volumul de apă care trece printr-o secțiune într-o secundă (m³/s). <b>Regimul</b> este evoluția debitului în cursul anului: <b>pluvial</b> (depinde de ploi: Apenini), <b>nival</b> sau <b>glaciar</b> (maxim primăvara–vara datorită topirii zăpezii și a gheții: Alpi), <b>mixt</b>.</p>
<p>Câteva cifre: <b>Po</b> este cel mai lung râu din Italia (652 km) și cel cu cea mai multă apă (debit mediu la vărsare în jur de 1500 m³/s); <b>Nilul</b> (circa 6650 km) și <b>Amazonul</b> (circa 6400 km) își dispută întâietatea la lungime; Amazonul este primul la debit (circa 200 000 m³/s, aproximativ o cincime din toată apa dulce vărsată de râuri în oceane).</p>`
    },
    {
      type: "3d",
      title: "Peisajul apei",
      scene: "terrain",
      options: { features: {
        glacier: { label: "Ghețar", html: "<p>O masă de gheață care coboară lent în vale sub propria greutate. Când se topește, alimentează râurile și produce lacuri glaciare.</p>" },
        source: { label: "Izvor", html: "<p>Punctul în care apa subterană sau de topire iese la suprafață și începe râul.</p>" },
        river: { label: "Râu", html: "<p>Un curs de apă care curge spre mare sau într-un lac. Erodează la munte, depune la câmpie.</p>" },
        valley: { label: "Vale", html: "<p>Săpată de râu (în V) sau de un ghețar (în U).</p>" },
        lake: { label: "Lac", html: "<p>Un bazin de apă dulce sau sărată înconjurat de uscat. Poate fi glaciar, vulcanic, tectonic, de baraj.</p>" },
        delta: { label: "Deltă", html: "<p>Zona de la vărsare unde râul depune sedimentele și se împarte în mai multe brațe.</p>" },
        sea: { label: "Mare", html: "<p>Locul unde se încheie tot ciclul... și reîncepe prin evaporare.</p>" },
        plain: { label: "Câmpie", html: "<p>Formată din sedimentele râului (câmpie aluvială): Câmpia Padului este cea mai mare din Italia.</p>" }
      } },
      caption: "Atinge părțile peisajului: de la izvor la deltă, urmărește drumul apei."
    },
    {
      type: "text",
      title: "Lacuri, ape subterane și ghețari",
      html: `<p><b>Lacurile</b>: mase de apă adunate într-o depresiune. După origine:</p>
<ul>
<li><b>glaciare</b>: săpate sau barate de ghețari (marile lacuri subalpine: Maggiore, Como, Garda; Marile Lacuri americane);</li>
<li><b>tectonice</b>: în depresiuni datorate mișcărilor scoarței (Baikal, cel mai adânc, 1642 m, și cu circa 20% din apa dulce de la suprafață);</li>
<li><b>vulcanice</b>: în cratere (Bolsena, Albano, Bracciano: cratere și caldere ale unor vulcani vechi);</li>
<li><b>de baraj</b> (alunecări de teren, diguri), <b>litorale</b> (lagune), <b>carstice</b>.</li>
</ul>
<p>Cel mai întins lac din Italia este <b>Garda</b> (368 km²); cel mai adânc este Como (circa 410 m).</p>
<p><b>Apele subterane</b>: apa care se infiltrează umple porii rocilor <b>permeabile</b> (nisipuri, pietrișuri, calcare fisurate) până întâlnește un strat <b>impermeabil</b> (argilă): formează o <b>pânză freatică</b>. Dacă pânza iese la suprafață, apare un <b>izvor</b> (în Câmpia Padului se numesc <b>risorgive</b> sau fontanili). <b>Fântânile</b> o ating. În regiunile calcaroase, apa dizolvă roca și creează <b>carstul</b>: peșteri, doline, râuri subterane.</p>
<p><b>Ghețarii</b>: mari mase de gheață formate din zăpada care se tasează în ani sau secole. <b>Calotele glaciare</b> (Antarctida și Groenlanda) conțin circa 99% din gheața Pământului: dacă s-ar topi toată Antarctida, nivelul mării ar crește cu aproximativ 58 m; cu Groenlanda, cu circa 7 m. <b>Ghețarii alpini</b> (de vale) înaintează cu câțiva metri pe an și sunt considerați santinele ale climei: în 150 de ani, cei alpini au pierdut mai mult de jumătate din volumul lor.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege hidrosfera",
      intro: "Dacă cifrele despre apă ți se par prea abstracte, încearcă aceste reprezentări.",
      tabs: [
        {
          label: "🥤 O sticlă cu apă",
          html: `<p>Imaginează-ți toată apa Pământului într-un bidon mare de <b>100 de litri</b>. Oceanele ocupă 97,5 L. Doar 2,5 L sunt dulci. Din ei, aproape 1,7 L sunt în gheață și circa 0,75 L sub pământ. Rămân circa <b>0,03 L: o lingură</b> pentru toate râurile, lacurile, solul și umiditatea din aer. Toată viața din apele dulci de la suprafață depinde de acea lingură, pe care ciclul apei o reînnoiește continuu.</p>`
        },
        {
          label: "🧂 De ce este marea sărată?",
          html: `<p>Râurile dizolvă încet rocile și aduc în mare cantități mici de săruri minerale; vulcanii submarini și izvoarele hidrotermale mai adaugă altele. Apa se evaporă și lasă sărurile: ele se acumulează timp de milioane de ani. De aceea marea este sărată, iar râurile nu. Salinitatea oceanului a rămas totuși aproximativ constantă sute de milioane de ani, pentru că sărurile sunt și îndepărtate: depuse pe fund sub formă de roci (evaporite) sau încorporate de organisme.</p>`
        },
        {
          label: "🧊 De ce plutește gheața?",
          html: `<p>Apa este aproape unică: ca lichid, când se răcește, se contractă până la <b>4 °C</b> (densitate maximă, 1,000 g/cm³), apoi sub 4 °C se dilată și, înghețând, devine cu circa 9% mai puțin densă (gheața 0,92 g/cm³). Vinovate sunt <b>legăturile de hidrogen</b>: în gheață moleculele formează o structură hexagonală cu mult spațiu gol. De aceea gheața plutește, lacurile îngheață de la suprafață, iar sub crusta de gheață rămâne apă lichidă la circa 4 °C, unde peștii și plantele supraviețuiesc iernii. Dacă gheața s-ar scufunda, lacurile ar îngheța de jos în sus, iar viața ar fi foarte diferită.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lacul Aral: apa care a dispărut",
      html: `<p>Lacul Aral, din Asia Centrală, era în 1960 al patrulea lac ca mărime din lume (circa 68 000 km²). În anii ’60, URSS a deviat râurile Amu Daria și Sîr Daria pentru a iriga câmpurile de bumbac: lacul a pierdut peste 90% din suprafață, iar partea sudică este astăzi un deșert sărat (Aralkum). Nave ruginite zac în nisip. Este unul dintre cele mai cunoscute exemple de cât de mult poate activitatea umană să altereze bilanțul hidric al unei întregi regiuni, cu urmări asupra climei, sănătății și pescuitului.</p>`
    },
    {
      type: "conceptMap",
      title: "Harta hidrosferei: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "ciclo", label: "Circuitul apei", x: 50, y: 6, color: "#3b82f6", html: "Evaporare, condensare, precipitații, scurgere.", why: "Circuitul fusese intuit încă de greci, dar secole la rând s-a crezut că izvoarele sunt alimentate de mare prin canale subterane. În secolul al XVII-lea, <b>Pierre Perrault</b> și <b>Edme Mariotte</b> au măsurat ploaia și debitul Senei și au demonstrat că precipitațiile erau suficiente ca să alimenteze râurile." },
        { id: "oceani", label: "Oceanele", x: 20, y: 30, color: "#0ea5e9", html: "97,5% din apă, salinitate medie 35‰.", why: "Au o adâncime medie de circa 3700 m: expediția navei britanice <b>Challenger</b> (1872–76) a fost prima campanie oceanografică sistematică și a descoperit Groapa Marianelor." },
        { id: "correnti", label: "Curenții", x: 20, y: 56, color: "#22c55e", html: "De suprafață (vânt) și de adâncime (termohalini).", why: "Curenții de suprafață depind de vânturi și de efectul Coriolis, descris de <b>Coriolis</b> în 1835; circulația termohalină a fost intuită de <b>Benjamin Thompson (contele Rumford)</b> în 1797 și descrisă de <b>Wallace Broecker</b>, care în anii ’80 ai secolului XX a lansat expresia „bandă rulantă”." },
        { id: "fiumi", label: "Râuri și bazine", x: 80, y: 30, color: "#f59e0b", html: "Aduc apa de la munte la mare.", why: "Conceptul de bazin hidrografic explică de ce inundațiile depind de ce se întâmplă în amonte: apa unei zone vaste se concentrează într-o singură secțiune a râului." },
        { id: "laghi", label: "Lacurile", x: 80, y: 56, color: "#a855f7", html: "Bazine de apă mai ales dulce.", why: "Originea lor geologică (glaciară, tectonică, vulcanică) le leagă de istoria Pământului: lacurile subalpine sunt moștenirea glaciațiunilor cuaternare." },
        { id: "ghiacci", label: "Ghețarii", x: 50, y: 70, color: "#06b6d4", html: "69% din apa dulce.", why: "Louis Agassiz (1837) a propus primul că mari epoci glaciare au acoperit Europa, explicând blocurile eratice aflate departe de rocile lor de origine. Astăzi ghețarii sunt o arhivă: bulele de aer din carotele de gheață din Antarctida povestesc clima ultimelor 800 000 de ani." },
        { id: "falde", label: "Pânzele freatice", x: 20, y: 86, color: "#ef4444", html: "Apă subterană (30% din apa dulce).", why: "Legea lui <b>Darcy</b> (1856), dedusă studiind fântânile din Dijon, descrie cum se mișcă apa într-un mediu poros: viteza este proporțională cu panta și cu permeabilitatea." },
        { id: "uomo", label: "Folosirea de către om", x: 80, y: 86, color: "#14b8a6", html: "Agricultura (circa 70% din prelevări), industria, uzul casnic.", why: "Doar o mică parte din apă este accesibilă: gestionarea durabilă a resursei este una dintre marile provocări ale secolului; un exemplu negativ este lacul Aral." }
      ],
      edges: [
        ["ciclo", "oceani", "din ocean"],
        ["ciclo", "fiumi", "alimentează"],
        ["oceani", "correnti", "găzduiesc"],
        ["fiumi", "laghi", "alimentează"],
        ["ghiacci", "fiumi", "alimentează"],
        ["ciclo", "falde", "realimentează"],
        ["falde", "uomo", "folosite de"],
        ["fiumi", "uomo", "folosite de"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: râuri, lacuri, ghețari",
      questions: [
        { type: "mc", q: "Care este cel mai lung râu din Italia?", options: ["Tibru", "Po", "Adige"], answer: 1, explain: "Po măsoară 652 km și are și cel mai mare debit." },
        { type: "tf", q: "Gheața plutește pentru că este mai puțin densă decât apa lichidă.", answer: true, explain: "Gheața 0,92 g/cm³ față de 1,00 g/cm³ a apei." },
        { type: "mc", q: "Cum se numește teritoriul care adună apele unui râu?", options: ["Bazin hidrografic", "Deltă", "Pânză freatică"], answer: 0, explain: "Este separat de bazinele vecine prin cumpăna apelor." }
      ]
    }
  ],
  glossary: [
    { t: "Hidrosfera", d: "Ansamblul întregii ape de pe Pământ, în diferitele ei stări." },
    { t: "Ciclul hidrologic", d: "Circulația continuă a apei între oceane, atmosferă și uscat." },
    { t: "Salinitate", d: "Cantitatea de săruri dizolvate la un kg de apă (în medie 35‰ în oceane)." },
    { t: "Curent marin", d: "Mișcarea unor mari mase de apă oceanică." },
    { t: "Circulația termohalină", d: "Circulația de adâncime datorată diferențelor de temperatură și salinitate." },
    { t: "Bazin hidrografic", d: "Teritoriul din care un râu adună apele." },
    { t: "Debit", d: "Volumul de apă care străbate o secțiune a unui râu într-o secundă." },
    { t: "Regim", d: "Evoluția debitului unui râu în cursul anului." },
    { t: "Deltă", d: "Vărsare a unui râu în mai multe brațe, cu depuneri de sedimente." },
    { t: "Pânză freatică", d: "Apă care umple porii unui strat permeabil din subsol." },
    { t: "Ghețar", d: "Masă de gheață perenă care se mișcă lent sub acțiunea gravitației." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce fracțiune din apa dulce se află în ghețari?", options: ["Circa 69%", "Circa 10%", "Circa 0,3%"], answer: 0, explain: "Aproape 70% din apa dulce este gheață, mai ales în Antarctida și Groenlanda." },
      { type: "tf", q: "Cea mai mare parte a evaporării de pe Pământ are loc din oceane.", answer: true, explain: "Circa 86% din evaporarea totală." },
      { type: "mc", q: "Cum se numește apa care pătrunde în sol?", options: ["Scurgere la suprafață", "Infiltrare", "Condensare"], answer: 1, explain: "Infiltrarea alimentează pânzele freatice." },
      { type: "num", q: "Câți litri aduce o ploaie de 10 mm pe un acoperiș de 60 m²?", answer: 600, unit: "L", explain: "10 L/m² × 60 m² = 600 L." },
      { type: "mc", q: "Care este salinitatea medie a oceanelor?", options: ["3,5‰", "35‰", "350‰"], answer: 1, explain: "35 g de săruri pe kg, adică 35‰ (3,5%)." },
      { type: "mc", q: "Curenții de suprafață ai vârtejurilor gyre din emisfera nordică se rotesc în sens…", options: ["orar", "antiorar", "aleatoriu"], answer: 0, explain: "Din cauza forței Coriolis, care deviază spre dreapta." },
      { type: "tf", q: "Garda este cel mai întins lac din Italia.", answer: true, explain: "Circa 368 km²." },
      { type: "order", q: "Ordonează etapele circuitului apei.", items: ["Evaporare", "Condensare", "Precipitații", "Scurgere la suprafață sau infiltrare"], explain: "Apa urcă, formează norii, cade, apoi curge sau se infiltrează." },
      { type: "text", q: "Cum se numește vărsarea în mai multe brațe, tipică pentru Po și Nil?", answer: ["deltă", "delta", "o deltă"], explain: "Delta se formează acolo unde râul depune sedimentele." },
      { type: "mc", q: "De ce sunt valurile unui tsunami aproape imperceptibile în larg?", options: ["Au înălțime sub un metru, dar lungime enormă", "Sunt foarte lente", "Sunt unde sonore"], answer: 0, explain: "Se ridică abia când se apropie de coastă, unde fundul încetinește partea din față." }
    ]
  }
});

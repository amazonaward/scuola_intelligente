TOPIC('ro', {
  id: `m1-tec-materiali`,
  title: `Materialele`,
  intro: `Banca este din lemn și metal, caietul din hârtie, bidonul din aluminiu sau din plastic. Fiecare obiect este făcut dintr-un <b>material</b> ales pentru <b>proprietățile</b> sale. În această lecție descoperim de unde vin materialele, cum se clasifică, cum se prelucrează <b>lemnul, hârtia, metalele și plasticurile</b> și de ce <b>reciclarea</b> este atât de importantă. 🪵📄🔩♻️`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Materii prime, materiale, produse`,
      html: `<p>Fiecare obiect face o lungă călătorie:</p>
<ol>
<li><b>Materia primă</b>: ceea ce se ia din natură (trunchi de copac, minereu de fier, petrol, nisip).</li>
<li><b>Materialul</b> (sau semifabricatul): materia primă transformată și pregătită pentru a fi prelucrată (scânduri de lemn, table de oțel, granule de plastic, sticlă în plăci).</li>
<li><b>Produsul finit</b>: obiectul pe care îl folosim (scaun, oală, sticlă, fereastră).</li>
</ol>
<p>După <b>origine</b>, materiile prime sunt:</p>
<ul>
<li><b>vegetale</b>: lemn, bumbac, in, plută, cauciuc natural;</li>
<li><b>animale</b>: lână, mătase, piele;</li>
<li><b>minerale</b>: metale, nisip (pentru sticlă), argilă (pentru ceramică), pietre;</li>
<li><b>fosile</b>: petrol, cărbune, gaze naturale (din care se obțin plasticuri și fibre sintetice).</li>
</ul>
<p>Unele sunt <b>regenerabile</b> (lemnul crește la loc, dacă se replantează copacii), altele <b>neregenerabile</b> (petrolul și mineralele se epuizează).</p>`
    },
    {
      type: `text`, title: `2. Proprietățile materialelor`,
      html: `<p>Pentru a alege materialul potrivit trebuie să-i cunoști <b>proprietățile</b>:</p>
<table>
<tr><th>Tipul</th><th>Proprietatea</th><th>Ce înseamnă</th></tr>
<tr><td rowspan="3"><b>Fizice</b></td><td>Densitate</td><td>cât „cântărește” la același volum (fierul mai mult decât lemnul)</td></tr>
<tr><td>Conductibilitate termică și electrică</td><td>dacă lasă să treacă căldura și electricitatea (metalele da, lemnul și plasticul puțin: sunt <b>izolatoare</b>)</td></tr>
<tr><td>Punct de topire</td><td>temperatura la care devine lichid</td></tr>
<tr><td rowspan="3"><b>Mecanice</b></td><td>Duritate</td><td>rezistența la a fi zgâriat sau gravat</td></tr>
<tr><td>Elasticitate</td><td>capacitatea de a reveni la forma inițială (arc)</td></tr>
<tr><td>Rezistență / tenacitate</td><td>a suporta forțe fără a se rupe; opusul <b>fragilității</b> (sticla)</td></tr>
<tr><td rowspan="3"><b>Tehnologice</b></td><td>Maleabilitate</td><td>poate fi redus în foi subțiri (folia de aluminiu de bucătărie)</td></tr>
<tr><td>Ductilitate</td><td>poate fi tras în fire (firele de cupru)</td></tr>
<tr><td>Fuzibilitate și prelucrabilitate</td><td>poate fi topit în matrițe, tăiat, găurit</td></tr>
</table>`
    },
    {
      type: `example`, title: `Exemplu practic: de ce este făcută oala așa?`,
      html: `<p>O oală are <b>fundul din oțel sau aluminiu</b> și <b>mânerul din plastic sau lemn</b>. De ce?</p>
<ul>
<li>Metalul este un bun <b>conducător de căldură</b>: duce căldura de la flacără la mâncare.</li>
<li>Mânerul trebuie să fie <b>izolant</b>: așa nu te arzi când îl apuci.</li>
<li>Metalul este și <b>rezistent</b> și nu se deformează la căldură; plasticul mânerului este de tip <b>termorigid</b>, care nu se înmoaie când se încălzește.</li>
</ul>
<p>Fiecare alegere de material răspunde la o întrebare: <b>ce trebuie să facă acea parte a obiectului?</b></p>`
    },
    {
      type: `text`, title: `3. Lemnul`,
      html: `<p>Lemnul este partea interioară a trunchiului copacilor. Este regenerabil, ușor, rezistent, izolant, ușor de prelucrat și frumos la vedere.</p>
<p><b>Structura trunchiului</b> (din exterior spre interior): <b>scoarța</b> (protejează), <b>liberul</b> (transportă seva elaborată), <b>cambiul</b> (stratul care crește și formează în fiecare an un nou inel), <b>alburnul</b> (lemn tânăr, deschis la culoare), <b>duramenul</b> (lemn vechi, închis la culoare și rezistent), <b>măduva</b> (în centru).</p>
<p><b>Lemn moale și lemn tare</b>:</p>
<ul>
<li><b>moale</b> (fraged), de obicei din conifere: brad, pin, zadă → ușor, ieftin, pentru grinzi, ambalaje, mobilă simplă;</li>
<li><b>tare</b> (puternic), de obicei din foioase: stejar, nuc, fag, castan → pentru mobilă de calitate, parchet, unelte.</li>
</ul>
<p><b>Semifabricate</b> (derivate din lemn): <b>placajul</b> (foi subțiri lipite cu fibrele încrucișate), <b>PAL-ul</b> (așchii presate cu clei), <b>MDF-ul</b> (fibre foarte fine presate), <b>lemnul lamelar</b> (lamele lipite: pentru marile grinzi curbe ale sălilor de sport și ale podurilor).</p>`
    },
    {
      type: `3d`, title: `În interiorul trunchiului, în 3D`,
      scene: `layers`,
      caption: `Rotește trunchiul „tăiat în felie”: fiecare strat are o sarcină diferită. Numărând inelele afli vârsta copacului!`,
      options: {
        layers: [
          { r: 1, color: `#5b3a1e`, label: `Scoarță` },
          { r: 0.93, color: `#8b5a2b`, label: `Liber (floem)` },
          { r: 0.88, color: `#a3e635`, label: `Cambiu` },
          { r: 0.85, color: `#f5deb3`, label: `Alburn` },
          { r: 0.55, color: `#b45309`, label: `Duramen` },
          { r: 0.08, color: `#451a03`, label: `Măduvă` }
        ]
      }
    },
    {
      type: `text`, title: `4. Hârtia`,
      html: `<p>Hârtia este făcută din <b>fibre de celuloză</b>, care se obțin mai ales din lemn (dar și din bumbac, cânepă și din hârtie reciclată).</p>
<p><b>Cum se face, pas cu pas:</b></p>
<ol>
<li>lemnul este mărunțit în așchii și transformat în <b>pastă</b> (mecanic sau cu substanțe chimice);</li>
<li>pasta este albită și amestecată cu multă apă;</li>
<li>amestecul se întinde pe o <b>sită</b> în mișcare: apa se scurge, iar fibrele se împletesc;</li>
<li>foaia trece printre <b>valțuri</b> care o presează și o usucă;</li>
<li>se rulează în mari bobine și se taie în formate.</li>
</ol>
<p>Hârtia se măsoară în <b>gramaj</b>: grame pe metru pătrat. Hârtia de xerox cântărește de obicei <b>80 g/m²</b>; cartonul de desen 200 g/m² sau mai mult.</p>`
    },
    {
      type: `quiz`, title: `Mini-test: proprietăți, lemn și hârtie`,
      questions: [
        { type: `mc`, q: `Capacitatea unui metal de a fi tras în fire se numește…`, options: [`maleabilitate`, `ductilitate`, `duritate`], answer: 1, explain: `Ductilitate = fire; maleabilitate = foi.` },
        { type: `mc`, q: `Stratul trunchiului care produce în fiecare an un nou inel este…`, options: [`măduva`, `cambiul`, `scoarța`], answer: 1, explain: `Cambiul se divide și formează lemn nou spre interior.` },
        { type: `num`, q: `O foaie A4 este 1/16 din m². Dacă hârtia are 80 g/m², câte grame cântărește o foaie A4?`, answer: 5, tol: 0, unit: `g`, explain: `80 : 16 = 5 g.` }
      ]
    },
    {
      type: `text`, title: `5. Metalele`,
      html: `<p>Metalele se obțin din <b>minereurile</b> extrase în mine. Sunt buni conducători de căldură și electricitate, rezistente, adesea ductile și maleabile, și pot fi topite.</p>
<p><b>Metale feroase</b> (pe bază de fier, se obțin în furnal din minereul de fier cu cărbune):</p>
<ul>
<li><b>fonta</b>: fier cu mai mult de 2% carbon → dură, dar fragilă; se toarnă în matrițe (capace de canal, calorifere, oale vechi);</li>
<li><b>oțelul</b>: fier cu mai puțin de 2% carbon → rezistent și elastic; cel mai folosit din lume (mașini, poduri, șine, unelte). <b>Oțelul inoxidabil</b> conține și crom (cel puțin 10,5%) și nu ruginește.</li>
</ul>
<p><b>Metale neferoase</b>:</p>
<ul>
<li><b>aluminiul</b> (din <b>bauxită</b>): foarte ușor, nu ruginește → doze, avioane, tâmplărie;</li>
<li><b>cuprul</b>: excelent conducător → fire electrice, țevi;</li>
<li><b>aliaje</b>: <b>bronzul</b> = cupru + staniu (statui, clopote); <b>alama</b> = cupru + zinc (robinete, mânere, instrumente muzicale).</li>
</ul>`
    },
    {
      type: `text`, title: `6. Plasticurile`,
      html: `<p>Plasticurile sunt materiale <b>sintetice</b>, adică create de om, aproape întotdeauna pornind de la <b>petrol</b>. Sunt formate din <b>polimeri</b>: lanțuri foarte lungi de molecule mici identice (<b>monomerii</b>) legate între ele, ca perlele unui colier.</p>
<ul>
<li><b>Termoplastice</b>: încălzite se înmoaie și pot fi remodelate de mai multe ori → <b>reciclabile</b> (sticle din PET, pungi din polietilenă, jucării).</li>
<li><b>Termorigide</b>: odată formate, la căldură nu se înmoaie, ci ard → mânere de oale, prize electrice.</li>
<li><b>Elastomeri</b>: elastici ca cauciucul → pneuri, garnituri.</li>
</ul>
<p>Pe obiecte găsești un triunghi de săgeți cu un număr, <b>codul de reciclare</b>: 1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 PS, 7 alte plasticuri. Ajută la separarea lor pentru reciclare.</p>
<p>⚠️ Plasticurile sunt ușoare, ieftine și impermeabile, dar <b>durează secole</b> în mediu: o sticlă poate avea nevoie de sute de ani ca să se degradeze și se sfărâmă în <b>microplastice</b> care ajung în mare și în animale.</p>`
    },
    {
      type: `3d`, title: `Un lanț de polietilenă în 3D`,
      scene: `molecule`,
      caption: `O bucățică de polietilenă, plasticul pungilor: un lanț de atomi de carbon (gri) cu atomi de hidrogen (albi) atașați. În realitate, lanțul are mii de atomi lungime!`,
      options: {
        atoms: [
          { x: -3, y: 0, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: -1.5, y: 0.6, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: 0, y: 0, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: 1.5, y: 0.6, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: 3, y: 0, z: 0, r: 0.45, color: `#4b5563`, label: `C` },
          { x: -3, y: -0.7, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: -3, y: -0.7, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: -1.5, y: 1.3, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: -1.5, y: 1.3, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 0, y: -0.7, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 0, y: -0.7, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 1.5, y: 1.3, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 1.5, y: 1.3, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 3, y: -0.7, z: 0.8, r: 0.28, color: `#f8fafc`, label: `H` },
          { x: 3, y: -0.7, z: -0.8, r: 0.28, color: `#f8fafc`, label: `H` }
        ],
        bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [0, 6], [1, 7], [1, 8], [2, 9], [2, 10], [3, 11], [3, 12], [4, 13], [4, 14]]
      }
    },
    {
      type: `text`, title: `7. Reciclarea și economia circulară`,
      html: `<p>A recicla înseamnă a transforma un deșeu în <b>nouă materie primă</b>. Funcționează doar dacă <b>colectarea selectivă</b> este făcută bine!</p>
<table>
<tr><th>Materialul</th><th>În ce se transformă</th><th>Cât se economisește</th></tr>
<tr><td>📄 Hârtie</td><td>hârtie nouă, carton, cutii</td><td>fibrele pot fi reciclate de aproximativ 5-7 ori, apoi devin prea scurte</td></tr>
<tr><td>🥫 Aluminiu</td><td>doze noi, biciclete, tâmplărie</td><td>reciclabil la nesfârșit; se economisește aproximativ <b>95%</b> din energie față de producerea din bauxită</td></tr>
<tr><td>🔩 Oțel</td><td>oțel nou</td><td>reciclabil la nesfârșit; se separă cu magneți</td></tr>
<tr><td>🍾 Sticlă</td><td>sticle și borcane noi</td><td>reciclabilă la nesfârșit fără a-și pierde calitatea</td></tr>
<tr><td>🧴 Plastic</td><td>fibre pentru fleece și pulovere, bănci, sticle noi</td><td>se reciclează de puține ori; multe plasticuri amestecate sunt arse pentru a produce energie</td></tr>
</table>
<p><b>Economia circulară</b> merge dincolo de reciclare. Urmează regula celor <b>R</b>: <b>Reducere</b> (a folosi mai puțin material), <b>Reutilizare</b> (bidon în loc de sticle), <b>Reparare</b>, și abia la sfârșit <b>Reciclare</b>.</p>`
    },
    {
      type: `svg`, title: `Economie liniară și economie circulară`,
      caption: `În economia liniară, materialele ajung la groapa de gunoi; în cea circulară revin în joc.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<text x="150" y="30" font-size="18" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Liniară</text>
<rect x="20" y="60" width="70" height="40" rx="8" fill="#fca5a5"/><text x="55" y="86" font-size="14" text-anchor="middle" fill="#7f1d1d">Extrag</text>
<rect x="115" y="60" width="70" height="40" rx="8" fill="#fca5a5"/><text x="150" y="86" font-size="14" text-anchor="middle" fill="#7f1d1d">Produc</text>
<rect x="210" y="60" width="70" height="40" rx="8" fill="#fca5a5"/><text x="245" y="86" font-size="14" text-anchor="middle" fill="#7f1d1d">Folosesc</text>
<rect x="115" y="150" width="70" height="40" rx="8" fill="#6b7280"/><text x="150" y="176" font-size="14" text-anchor="middle" fill="#ffffff">Arunc</text>
<path d="M90 80 L113 80 M185 80 L208 80 M245 100 L245 170 L187 170" stroke="#7f1d1d" stroke-width="3" fill="none"/>
<text x="150" y="230" font-size="28" text-anchor="middle">🗑️</text>
<text x="150" y="265" font-size="14" text-anchor="middle" fill="#7f1d1d">deșeuri și gropi de gunoi</text>
<line x1="300" y1="20" x2="300" y2="280" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6"/>
<text x="450" y="30" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Circulară</text>
<circle cx="450" cy="160" r="90" fill="none" stroke="#16a34a" stroke-width="6"/>
<rect x="415" y="52" width="70" height="34" rx="8" fill="#86efac"/><text x="450" y="75" font-size="14" text-anchor="middle" fill="#14532d">Produc</text>
<rect x="515" y="143" width="76" height="34" rx="8" fill="#86efac"/><text x="553" y="166" font-size="14" text-anchor="middle" fill="#14532d">Folosesc</text>
<rect x="405" y="234" width="90" height="34" rx="8" fill="#86efac"/><text x="450" y="257" font-size="14" text-anchor="middle" fill="#14532d">Repar</text>
<rect x="312" y="143" width="80" height="34" rx="8" fill="#86efac"/><text x="352" y="166" font-size="14" text-anchor="middle" fill="#14532d">Reciclez</text>
<text x="450" y="168" font-size="34" text-anchor="middle">♻️</text>
</svg>`
    },
    {
      type: `widget`, title: `Joc: în ce container?`,
      widget: `classify`,
      caption: `Fă colectarea selectivă. Atenție: regulile se pot schimba puțin de la o comună la alta!`,
      options: {
        groups: [`📦 Hârtie și carton`, `🧴 Plastic`, `🍾 Sticlă`, `🥫 Metale`],
        items: [
          [`caiet vechi`, 0], [`cutie de pantofi`, 0], [`ziar`, 0],
          [`sticlă de apă din PET`, 1], [`caserolă de iaurt`, 1], [`flacon de detergent`, 1],
          [`borcan de gem`, 2], [`sticlă de ulei din sticlă`, 2],
          [`doză de băutură`, 3], [`conservă de ton`, 3], [`folie de aluminiu curată`, 3]
        ]
      }
    },
    {
      type: `example`, title: `Exemplu practic: a doua viață a unei sticle`,
      html: `<p>Urmărește o sticlă de plastic (PET, cod 1):</p>
<ol>
<li>o arunci în containerul pentru plastic;</li>
<li>la centrul de sortare este separată de celelalte plasticuri (și cu senzori cu raze infraroșii);</li>
<li>este spălată și transformată în <b>fulgi</b> (flakes);</li>
<li>fulgii, topiți, devin sticle noi sau <b>fibre</b>: sunt necesare aproximativ 20-30 de sticle pentru o bluză din fleece!</li>
</ol>
<p>Și mai bine: să folosești un <b>bidon</b> reutilizabil, așa încât sticla să nu se mai nască deloc.</p>`
    },
    {
      type: `curiosity`, title: `Ai știut că… hârtia au inventat-o chinezii?`,
      html: `<p>Potrivit tradiției, funcționarul chinez <b>Cai Lun</b>, în anul <b>105 d.Hr.</b>, a perfecționat hârtia din scoarță, zdrențe și plase de pescuit. Secretul a ajuns în Occident prin lumea arabă și, în <b>secolul al XIII-lea</b>, la <b>Fabriano</b> (Marche), fabricanții de hârtie au inventat <b>filigranul</b> (desenul vizibil în contralumină) și încleierea cu gelatină animală. Și astăzi, hârtia bancnotelor în euro este legată de acea tradiție.</p>`
    },
    {
      type: `curiosity`, title: `Ai știut că… un italian a câștigat Nobelul pentru un plastic?`,
      html: `<p>Chimistul <b>Giulio Natta</b>, de la Politehnica din Milano, a reușit în <b>1954</b> să producă <b>polipropilena izotactică</b>, un plastic robust și ușor. A fost vândută sub numele de <b>Moplen</b> și a umplut casele italiene cu găleți, lighene și strecurători colorate. Pentru această descoperire, Natta a câștigat <b>Premiul Nobel pentru Chimie în 1963</b>, împreună cu germanul Karl Ziegler. Polipropilena este „5” din triunghiul reciclării!</p>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Dacă proprietățile materialelor ți se par abstracte, încearcă aceste căi.`,
      tabs: [
        {
          label: `🔬 Experimente acasă`,
          html: `<p>Descoperă proprietățile cu mâinile tale (cu ajutorul unui adult):</p>
<ul>
<li><b>Conductibilitate termică</b>: pune într-o cană cu apă fierbinte o lingură de metal, una de lemn și una de plastic. După un minut atinge mânerele: care arde?</li>
<li><b>Plutire (densitate)</b>: într-un lighean pune un dop de plută, un șurub, o bucată de lemn, o monedă.</li>
<li><b>Elasticitate</b>: îndoaie un arc, o gumă elastică, un fir de cupru. Care revin la forma de dinainte?</li>
<li><b>Magnetism</b>: apropie un magnet de o doză de băutură (aluminiu) și de o conservă (oțel). Așa se separă metalele în stațiile de sortare!</li>
</ul>`
        },
        {
          label: `🇯🇵🇸🇪 Cum fac alte țări`,
          html: `<ul>
<li>🇯🇵 În <b>Japonia</b>, unele orașe împart deșeurile în mai mult de 10 categorii; satul <b>Kamikatsu</b> ajunge la aproximativ 45 de categorii, cu obiectivul „zero deșeuri”.</li>
<li>🇸🇪 În <b>Suedia</b>, mai puțin de 1% din deșeurile urbane ajung la groapa de gunoi: aproape totul este reciclat sau ars în instalații care produc căldură pentru încălzirea orașelor.</li>
<li>🇩🇪 În <b>Germania</b> funcționează de ani de zile <b>sistemul garanției</b> (Pfand): pentru sticle se plătește o mică garanție (25 de cenți) care se returnează când le duci înapoi la supermarket.</li>
<li>🇮🇹 <b>Italia</b> este printre țările europene care reciclează cel mai mult în procente, datorită și consorțiilor precum CONAI.</li>
</ul>`
        },
        {
          label: `📿 Colierul de perle`,
          html: `<p>Un <b>polimer</b> este ca un <b>colier</b>: fiecare perlă este un monomer. La <b>termoplastice</b>, colierele sunt separate, ca spaghetele într-o farfurie: încălzindu-le alunecă unele peste altele și plasticul se înmoaie. La <b>termorigide</b>, colierele sunt legate între ele ca o <b>plasă</b>: încălzindu-le nu pot aluneca, iar materialul rămâne rigid până arde.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#fdf4ff"/>
<path d="M30 50 Q90 20 150 60 T270 50" stroke="#ec4899" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M30 100 Q90 130 150 90 T270 110" stroke="#3b82f6" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M30 150 Q90 120 150 160 T270 140" stroke="#22c55e" stroke-width="10" fill="none" stroke-linecap="round"/>
<text x="150" y="190" font-size="16" text-anchor="middle" fill="#701a75" font-weight="bold">termoplastic: lanțuri libere</text>
<path d="M330 50 L570 50 M330 100 L570 100 M330 150 L570 150" stroke="#a855f7" stroke-width="10" stroke-linecap="round"/>
<path d="M380 50 L380 100 M460 100 L460 150 M520 50 L520 100 M420 100 L420 150 M500 50 L480 100" stroke="#f97316" stroke-width="6"/>
<text x="450" y="190" font-size="16" text-anchor="middle" fill="#701a75" font-weight="bold">termorigid: lanțuri legate</text>
</svg>`
        },
        {
          label: `🧩 Potrivește obiectul cu materialul`,
          html: `<p>Pentru fiecare obiect, alege materialul și gândește-te <b>de ce</b>.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Fir electric`, `Cupru: excelent conducător și ductil`],
              [`Doză`, `Aluminiu: ușor și maleabil`],
              [`Grindă de pod`, `Oțel: rezistent și elastic`],
              [`Clopot`, `Bronz: aliaj de cupru și staniu`],
              [`Dopul sticlei de vin`, `Plută: ușoară și impermeabilă`],
              [`Parchet`, `Stejar: lemn tare`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Hartă: ciclul de viață al materialelor`,
      nodes: [
        { id: `mp`, label: `Materii prime`, x: 50, y: 8, color: `#16a34a`, html: `Vegetale, animale, minerale, fosile.`, why: `Istoria omenirii este împărțită în epoci ale materialelor: epoca <b>pietrei</b>, a <b>bronzului</b> (din aproximativ 3300 î.Hr.), a <b>fierului</b> (din aproximativ 1200 î.Hr.). Fiecare material nou a schimbat felul de a trăi.` },
        { id: `prop`, label: `Proprietăți`, x: 50, y: 30, color: `#0ea5e9`, html: `Fizice, mecanice, tehnologice.`, why: `Depind de modul în care sunt legați atomii și moleculele: în metale, electronii sunt liberi să se miște, de aceea conduc căldura și electricitatea; în lemn, fibrele de celuloză îl fac rezistent în sensul vinișoarelor.` },
        { id: `legno`, label: `Lemn și hârtie`, x: 12, y: 55, color: `#a16207`, html: `Din celuloza copacilor.`, why: `<b>Celuloza</b> este cel mai răspândit polimer natural de pe Pământ: plantele o produc prin fotosinteză. Hârtia este celuloză dizolvată în apă și împletită la loc.` },
        { id: `met`, label: `Metale`, x: 37, y: 58, color: `#64748b`, html: `Feroase (fontă, oțel) și neferoase (aluminiu, cupru).`, why: `În natură, metalele sunt aproape întotdeauna legate de oxigen în minereuri. Pentru a le obține trebuie să „smulgi” oxigenul cu căldură și cărbune (furnal) sau cu electricitate (aluminiu, procesul Hall-Héroult din <b>1886</b>).` },
        { id: `plast`, label: `Plasticuri`, x: 63, y: 58, color: `#ec4899`, html: `Polimeri sintetici din petrol.`, why: `Primul plastic complet sintetic este <b>bachelita</b> (1907, Leo Baekeland). Chimistul german <b>Hermann Staudinger</b> a înțeles în anii ’20 că polimerii sunt macromolecule în lanț (Nobel 1953).` },
        { id: `vetro`, label: `Sticlă și ceramică`, x: 88, y: 55, color: `#06b6d4`, html: `Din nisip și argilă.`, why: `Sticla se obține topind nisip silicios la aproximativ 1500 °C: o produceau încă mesopotamienii și egiptenii; romanii au inventat sticla suflată.` },
        { id: `rif`, label: `Deșeuri`, x: 30, y: 85, color: `#6b7280`, html: `Ceea ce aruncăm după folosire.`, why: `Un italian produce în medie aproximativ <b>500 kg</b> de deșeuri urbane pe an. Dacă nu sunt separate, ajung la groapa de gunoi sau în incineratoare.` },
        { id: `ric`, label: `Reciclare și economie circulară`, x: 70, y: 88, color: `#22c55e`, html: `Reducere, reutilizare, reparare, reciclare.`, why: `Ideea de economie circulară s-a răspândit din anii 2010; Uniunea Europeană a adoptat-o printr-un plan de acțiune în <b>2015</b> și în 2020. Se inspiră din natură, unde „resturile” unui organism sunt hrana altuia.` }
      ],
      edges: [
        [`mp`, `prop`, `au`], [`prop`, `legno`, `alegerea`], [`prop`, `met`, `alegerea`], [`prop`, `plast`, `alegerea`], [`prop`, `vetro`, `alegerea`],
        [`legno`, `rif`, `devin`], [`plast`, `rif`, `devin`], [`rif`, `ric`, `cu`], [`ric`, `mp`, `materie nouă`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: metale, plasticuri, reciclare`,
      questions: [
        { type: `mc`, q: `Alama este un aliaj de…`, options: [`cupru și staniu`, `cupru și zinc`, `fier și carbon`], answer: 1, explain: `Alamă = cupru + zinc; bronz = cupru + staniu.` },
        { type: `mc`, q: `Plasticurile care pot fi încălzite și remodelate de mai multe ori sunt…`, options: [`termoplastice`, `termorigide`], answer: 0, explain: `Termoplasticele se înmoaie la căldură și se reciclează.` },
        { type: `tf`, q: `Aluminiul poate fi reciclat de nenumărate ori.`, answer: true, explain: `Nu-și pierde calitatea și se economisește aproximativ 95% din energie.` }
      ]
    }
  ],
  glossary: [
    { t: `Materie primă`, d: `Substanță luată din natură pentru a produce materiale (lemn, minerale, petrol).` },
    { t: `Semifabricat`, d: `Material deja transformat, dar încă nu produs finit (scânduri, table).` },
    { t: `Maleabilitate`, d: `Capacitatea de a fi redus în foi subțiri.` },
    { t: `Ductilitate`, d: `Capacitatea de a fi tras în fire.` },
    { t: `Izolant`, d: `Material care nu lasă să treacă ușor căldura sau electricitatea.` },
    { t: `Duramen / alburn`, d: `Lemn interior, închis la culoare și dur / lemn exterior, tânăr și deschis la culoare.` },
    { t: `Celuloză`, d: `Fibră vegetală din care se face hârtia.` },
    { t: `Gramaj`, d: `Greutatea hârtiei în grame pe metru pătrat (g/m²).` },
    { t: `Aliaj`, d: `Amestec de metale (sau metal și alte elemente): bronz, alamă, oțel.` },
    { t: `Oțel`, d: `Aliaj de fier cu mai puțin de aproximativ 2% carbon.` },
    { t: `Polimer`, d: `Lanț lung de molecule identice (monomeri): din ei sunt făcute plasticurile și celuloza.` },
    { t: `Economie circulară`, d: `Sistem care reduce, reutilizează, repară și reciclează pentru a nu risipi materiale.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Care dintre aceste materii prime este de origine animală?`, options: [`bumbac`, `lână`, `petrol`], answer: 1, explain: `Lâna vine de la oi; bumbacul este vegetal, petrolul fosil.` },
      { type: `mc`, q: `De ce sunt firele electrice din cupru acoperit cu plastic?`, options: [`Cuprul conduce, plasticul izolează`, `Cuprul izolează, plasticul conduce`, `Ca să fie colorate`], answer: 0, explain: `Cuprul duce curentul, plasticul protejează de șocuri.` },
      { type: `mc`, q: `Lemnul de brad este un lemn…`, options: [`moale (fraged)`, `tare (puternic)`], answer: 0, explain: `Bradul, pinul, zada sunt conifere cu lemn moale.` },
      { type: `tf`, q: `Placajul este făcut din foi subțiri de lemn lipite cu fibrele încrucișate.`, answer: true, explain: `Încrucișând fibrele, panoul devine mai stabil și mai rezistent.` },
      { type: `mc`, q: `Diferența dintre fontă și oțel este…`, options: [`cantitatea de carbon`, `culoarea`, `prezența aluminiului`], answer: 0, explain: `Fontă: mai mult de 2% carbon; oțel: mai puțin de 2%.` },
      { type: `text`, q: `Din ce minereu se obține aluminiul?`, answer: [`bauxită`, `bauxita`], explain: `Din bauxită.` },
      { type: `mc`, q: `Din ce materie primă se obțin aproape toate plasticurile?`, options: [`nisip`, `petrol`, `argilă`], answer: 1, explain: `Din petrol (și din gaze naturale).` },
      { type: `num`, q: `Un top de 500 de foi A4 de 80 g/m². Fiecare foaie cântărește 5 g. Câte grame cântărește topul (fără ambalaj)?`, answer: 2500, tol: 0, unit: `g`, explain: `500 × 5 = 2500 g = 2,5 kg.` },
      { type: `order`, q: `Pune în ordine straturile trunchiului din exterior spre centru.`, items: [`scoarță`, `liber`, `cambiu`, `alburn`, `duramen`, `măduvă`], explain: `Scoarță, liber, cambiu, alburn, duramen, măduvă.` },
      { type: `mc`, q: `Ce acțiune vine PRIMA în regula celor R ale economiei circulare?`, options: [`Reciclare`, `Reducere`, `Ardere`], answer: 1, explain: `Mai întâi se reduce: cel mai bun deșeu este cel care nu se produce.` },
      { type: `tf`, q: `Hârtia poate fi reciclată la nesfârșit.`, answer: false, explain: `Fibrele se scurtează: aproximativ 5-7 cicluri.` },
      { type: `mc`, q: `Cine a câștigat Nobelul pentru Chimie în 1963 pentru polipropilenă?`, options: [`Giulio Natta`, `Enrico Fermi`, `Guglielmo Marconi`], answer: 0, explain: `Giulio Natta, împreună cu Karl Ziegler.` }
    ]
  }
});

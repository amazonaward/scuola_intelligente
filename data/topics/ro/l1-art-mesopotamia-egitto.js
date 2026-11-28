TOPIC('ro', {
  id: `l1-art-mesopotamia-egitto`,
  title: `Arta mesopotamiană și egipteană`,
  intro: `Între Tigru și Eufrat și de-a lungul Nilului, acum mai bine de 5000 de ani, se nasc <b>primele orașe</b>, <b>scrierea</b> și primele mari arhitecturi din piatră și cărămidă: zigurate, piramide, temple gigantice. Două civilizații vecine, două moduri diferite de a face artă: <b>sumerienii și babilonienii</b> construiesc turnuri spre cer și scriu legi pe piatră; <b>egiptenii</b> construiesc pentru eternitate, pentru că, în ochii lor, arta servește la <b>înfrângerea morții</b>. 🏛️🔺`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Două civilizații ale marilor fluvii`,
      html: `<p>Primele civilizații apar acolo unde agricultura este favorizată de fluvii mari care fac solul fertil.</p>
<ul>
<li><b>Mesopotamia</b> (din grecescul „țara dintre ape", Irakul de azi): sumerieni (din 3500 î.Hr.), akkadieni, babilonieni, asirieni. Orașe-stat conduse de regi-preoți. <b>Scrierea cuneiformă</b> (semne în formă de pană, incizate pe tăblițe de lut) apare în jurul anului <b>3300 î.Hr.</b>. Lipsesc piatra și lemnul: materialul de bază este <b>cărămida crudă</b> din lut.</li>
<li><b>Egipt</b>: o civilizație de circa 3000 de ani de-a lungul Nilului, unificată în jurul anului <b>3100 î.Hr.</b> sub primul faraon (Narmer sau Menes). Nilul, care iese din matcă în fiecare an, fertilizează pământul. Aici abundă <b>piatra</b> (calcar, granit, gresie): arhitectura este din piatră cioplită. Scrierea: <b>hieroglifele</b> (descifrate în 1822 de <b>Champollion</b> datorită Pietrei de la Rosetta).</li>
</ul>
<p>În ambele, <b>religia și puterea</b> coincid: arta servește la cinstirea zeilor și a regelui. Dar scopul este diferit: în Mesopotamia templele sunt <b>casa zeului</b> pe pământ și locul unde regele își arată puterea; în Egipt faraonul este un <b>zeu viu</b>, iar mormintele și imaginile trebuie să-i garanteze supraviețuirea în lumea de apoi.</p>`
    },
    {
      type: `3d`, title: `Navigând prin timp și spațiu: de la Mesopotamia la Egipt`,
      scene: `spacetime`,
      options: {
        lat: [20, 36], lon: [28, 52], years: [-3200, -400],
        places: [ { lat: 30.0, lon: 31.1, label: `Giza` }, { lat: 30.96, lon: 46.1, label: `Ur` }, { lat: 32.54, lon: 44.42, label: `Babilon` }, { lat: 25.72, lon: 32.66, label: `Karnak` } ],
        events: [
          { id: `e1`, lat: 30.96, lon: 46.1, year: -2100, label: `Zigurat din Ur`, html: `Regele Ur-Nammu construiește marele zigurat dedicat zeului-lună Nanna, circa 2100 î.Hr.` },
          { id: `e2`, lat: 29.87, lon: 31.22, year: -2650, label: `Piramida lui Djoser (Saqqara)`, html: `Imhotep proiectează prima mare construcție din piatră: piramida în trepte.` },
          { id: `e3`, lat: 30.0, lon: 31.1, year: -2560, label: `Marea Piramidă a lui Keops`, html: `Faraonul Keops pune să se construiască cea mai mare piramidă, înaltă la origine de 146,6 m.`, causes: [`e2`] },
          { id: `e4`, lat: 32.54, lon: 44.42, year: -1750, label: `Codul lui Hammurabi`, html: `Regele babilonian Hammurabi pune să se graveze circa 282 de legi pe o stelă de bazalt.` },
          { id: `e5`, lat: 25.72, lon: 32.66, year: -1300, label: `Sala hipostilă de la Karnak`, html: `Faraonii Seti I și Ramses II termină sala cu 134 de coloane a templului lui Amon.` },
          { id: `e6`, lat: 32.54, lon: 44.42, year: -575, label: `Poarta Ishtar`, html: `Nabucodonosor II pune să se construiască poarta din cărămizi smălțuite albastre la Babilon.`, causes: [`e4`] }
        ]
      },
      caption: `Harta este baza, înălțimea este timpul: atinge un eveniment pentru a citi fișa și săgețile dintre cauze și efecte.`
    },
    {
      type: `text`, title: `2. Arhitectura mesopotamiană: zigguratul`,
      html: `<p>Simbolul artei mesopotamiene este <b>zigguratul</b> (din akkadianul <i>ziqqurratu</i>, „vârf, culme"): un <b>turn în trepte</b> din cărămizi crude îmbrăcate în cărămizi arse și bitum, cu scări exterioare. În vârf se afla un mic sanctuar, „casa" zeului, la care preotul ajungea pentru ritualuri.</p>
<ul>
<li>Zigguratul din <b>Ur</b> (sudul Irakului), construit de regele <b>Ur-Nammu</b> în jurul anului <b>2100 î.Hr.</b> și dedicat zeului-lună <b>Nanna</b>: bază de circa 60 × 45 m, trei terase, trei scări care se întâlnesc. Astăzi se păstrează partea inferioară (restaurată).</li>
<li><b>Etemenanki</b> din <b>Babilon</b>, dedicat lui Marduk, considerat la originea relatării biblice despre <b>Turnul Babel</b>: sursele vorbesc de circa șapte niveluri.</li>
</ul>
<p>Fiind lipsă de piatră, se construiește cu cărămizi și se folosesc <b>arce și bolți</b> încă din mileniul al III-lea î.Hr. Fațadele sunt decorate cu <b>cărămizi smălțuite</b> (precum <b>Poarta Ishtar</b>, vezi mai jos).</p>`
    },
    {
      type: `text`, title: `3. Sculptura și reliefurile mesopotamiene`,
      html: `<p>În operele mesopotamiene nu contează asemănarea, ci <b>importanța socială</b> a personajului și povestirea.</p>
<ul>
<li><b>Sumerieni – Stindardul din Ur</b> (circa 2600-2500 î.Hr., British Museum): cutie de lemn decorată cu un <b>mozaic</b> din lapislazuli, scoică și calcar roșu, împărțită în „registre" orizontale. O față arată <b>războiul</b>, cealaltă <b>pacea</b> (banchetul). Se citește de jos în sus.</li>
<li><b>Sumerieni – statuete de închinători</b> (Tell Asmar, circa 2700-2500 î.Hr.): figuri cu ochi uriași din scoică și lapislazuli și cu mâinile împreunate, așezate în temple în locul credincioșilor.</li>
<li><b>Babilonieni – Stela lui Hammurabi</b> (circa 1750 î.Hr., Luvru): bloc de <b>bazalt negru</b> înalt de circa 2,25 m, găsit la Susa în 1901-02. Sus, regele primește simbolul puterii de la zeul-soare <b>Shamash</b>; dedesubt, în scriere cuneiformă, <b>282 de legi</b> („codul" lui Hammurabi), printre care celebra lege a talionului („ochi pentru ochi").</li>
<li><b>Babilonieni – Poarta Ishtar</b> (circa 575 î.Hr., Nabucodonosor II): intrarea orașului îmbrăcată în <b>cărămizi smălțuite albastre</b> cu șiruri de tauri (Adad) și balauri (Marduk). Reconstruită la Pergamonmuseum din Berlin.</li>
<li><b>Asirieni</b> (sec. IX-VII î.Hr.): putere militară. Palatele de la Khorsabad (Sargon II) și Ninive cu <b>lamassu</b> (tauri înaripați cu cap de om, păzitori ai porților, cu cinci picioare pentru a se arăta atât din față, cât și din profil) și <b>basoreliefuri</b> cu bătălii și vânători (precum <i>Vânătoarea de lei</i> a lui Assurbanipal, circa 645 î.Hr.).</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-test: Mesopotamia`,
      questions: [
        { type: `mc`, q: `Ce material folosesc mesopotamienii mai ales pentru a construi?`, options: [`Cărămizi de lut`, `Granit`, `Marmură`], answer: 0, explain: `Lipsesc piatra și lemnul: se folosește lutul (cărămizi crude și arse).` },
        { type: `mc`, q: `Unde se află astăzi stela cu codul lui Hammurabi?`, options: [`La Luvru, la Paris`, `La Muzeul Egiptean din Torino`, `La Bagdad`], answer: 0, explain: `A fost dusă la Paris după descoperirea de la Susa (1901-02).` },
        { type: `tf`, q: `Zigguratul era un mormânt regal.`, answer: false, explain: `Era un turn în trepte cu un sanctuar în vârf; nu un mormânt.` }
      ]
    },
    {
      type: `text`, title: `4. Arhitectura egipteană: de la mastaba la piramidă`,
      html: `<p>Pentru egipteni moartea este o trecere: trupul trebuie conservat (<b>mumificare</b>), iar mormântul dotat cu tot ce este necesar. De aceea arhitectura funerară se dezvoltă enorm.</p>
<ul>
<li><b>Mastaba</b> (din arabă „bancă"): mormânt în formă de trunchi de piramidă dreptunghiulară, din cărămidă sau piatră, cu o cameră subterană pentru sarcofag și o capelă pentru ofrande.</li>
<li><b>Piramida în trepte a lui Djoser</b> la <b>Saqqara</b> (circa 2650 î.Hr., dinastia a III-a): proiectată de arhitectul și medicul <b>Imhotep</b>, divinizat ulterior. Este prima mare construcție din piatră cioplită: șase mastabe suprapuse, înaltă de circa 60 m.</li>
<li><b>Piramidele lui Snefru</b> la Dahshur (circa 2600 î.Hr.): cea „romboidală" își schimbă înclinarea la jumătatea înălțimii (de la circa 54° la 43°) pentru că se temea o cedare; cea „roșie" are deja înclinarea constantă de circa 43°.</li>
<li><b>Piramidele de la Giza</b> (dinastia a IV-a, circa 2560-2470 î.Hr.): cele ale lui <b>Keops</b> (Khufu, înălțime inițială <b>146,6 m</b>, bază pătrată cu latura de circa <b>230 m</b>, 2,3 milioane de blocuri de circa 2,5 tone în medie), <b>Kefren</b> (circa 143,5 m) și <b>Mikerinos</b> (circa 65 m). <b>Sfinxul</b>, sculptat în stâncă de calcar, are circa 73 m lungime și 20 m înălțime: are corp de leu și chip, poate, al lui Kefren.</li>
</ul>
<p>Piramida cu fețe netede reprezintă <b>razele Soarelui</b> care coboară din cer: o „scară" pentru faraon spre Ra. Marea Piramidă a rămas cea mai înaltă clădire din lume timp de circa <b>3800 de ani</b>, până la catedrala din Lincoln, în Anglia (circa 1311). Laturile sunt orientate spre punctele cardinale cu o eroare minimă.</p>`
    },
    {
      type: `svg`, title: `De la mastaba la piramidă`,
      caption: `Trei etape ale arhitecturii funerare egiptene: mastaba, piramida în trepte a lui Djoser (Imhotep, circa 2650 î.Hr.) și piramida cu fețe netede de la Giza (Keops, circa 2560 î.Hr.).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<rect x="0" y="230" width="600" height="70" fill="#fcd34d"/>
<polygon points="30,230 175,230 160,180 45,180" fill="#d6a85a" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/>
<text x="102" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">MASTABA</text>
<text x="102" y="280" font-size="14" fill="#78350f" text-anchor="middle">circa 3000-2700 î.Hr.</text>
<g fill="#d6a85a" stroke="#78350f" stroke-width="3" stroke-linejoin="round">
<polygon points="215,230 365,230 365,205 215,205"/>
<polygon points="230,205 350,205 350,180 230,180"/>
<polygon points="245,180 335,180 335,155 245,155"/>
<polygon points="258,155 322,155 322,130 258,130"/>
<polygon points="270,130 310,130 310,108 270,108"/>
<polygon points="278,108 302,108 302,88 278,88"/>
</g>
<text x="290" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">DJOSER, LA SAQQARA</text>
<text x="290" y="280" font-size="14" fill="#78350f" text-anchor="middle">trepte, circa 2650 î.Hr.</text>
<polygon points="395,230 580,230 487,45" fill="#e8c068" stroke="#78350f" stroke-width="3" stroke-linejoin="round"/>
<line x1="487" y1="45" x2="487" y2="230" stroke="#92400e" stroke-width="2" stroke-dasharray="6 4"/>
<text x="487" y="260" font-size="16" font-weight="bold" fill="#78350f" text-anchor="middle">KEOPS, LA GIZA</text>
<text x="487" y="280" font-size="14" fill="#78350f" text-anchor="middle">fețe netede, circa 2560 î.Hr.</text>
<text x="497" y="150" font-size="14" fill="#92400e">146,6 m</text>
</svg>`
    },
    {
      type: `3d`, title: `O piramidă de rotit`,
      scene: `solid`,
      options: { shape: `pyramid`, n: 4, r: 1.6, h: 2.2, color: `#e8c068`, labels: true, shapes: [`pyramid`, `prism`, `cube`, `cone`] },
      caption: `Piramida egipteană este o piramidă dreaptă cu baza pătrată. Privește-o de sus (plan pătrat cu diagonalele) și din lateral (elevație triunghiulară): regăsești proiecțiile ortogonale.`
    },
    {
      type: `curiosity`, title: `Știai că… piramidele nu au fost construite de sclavi?`,
      html: `<p>Săpăturile de lângă Giza (începând din anii '90, cu Zahi Hawass și Mark Lehner) au scos la iveală satul <b>muncitorilor</b>: case, brutării, berării și morminte cu onoruri. Muncitori <b>plătiți și hrăniți</b> (pâine, bere, carne), organizați în echipe cu nume hazlii precum „Prietenii lui Keops". Lucrarea a durat circa 20 de ani. Blocurile ajungeau din cariere adesea pe <b>Nil</b> în timpul revărsării, când fluviul ajungea aproape de șantier: un papirus descoperit în 2013 la Wadi al-Jarf („jurnalul lui Merer") povestește chiar transportul blocurilor de calcar de la Tura.</p>`
    },
    {
      type: `text`, title: `5. Templul egiptean`,
      html: `<p>Templul Regatului Nou (circa 1550-1070 î.Hr.) este casa pământească a zeului. Are un plan <b>axial</b>: de la intrare spre sanctuar se trece de la spații luminoase și deschise la spații întunecate și tot mai rezervate. Sistemul constructiv este <b>trilitic</b> (stâlpi și arhitrave) cu planșee din lespezi de piatră.</p>
<ol>
<li><b>Aleea sfincșilor</b>: intrarea monumentală.</li>
<li><b>Pilonii</b>: două turnuri masive trapezoidale de o parte și de alta a intrării, cu reliefuri ale faraonului victorios și cu obeliscuri în față.</li>
<li><b>Curtea</b> descoperită, cu porticuri de coloane.</li>
<li><b>Sala hipostilă</b> (din grecescul „susținută de coloane"): o pădure deasă de coloane cu capiteluri în formă de <b>papirus</b> (deschis sau închis), <b>lotus</b> sau <b>palmier</b>; lumina pătrunde pe ferestre înalte (claristoriu).</li>
<li><b>Naosul</b> (<i>sancta sanctorum</i>): celula întunecată cu statuia zeului, accesibilă numai preoților și faraonului.</li>
</ol>
<p>Exemple: <b>templul lui Amon de la Karnak</b> (Teba, construit și extins timp de circa 2000 de ani; sala hipostilă are <b>134 de coloane</b>, cele mai înalte de 21 m); <b>templul de la Luxor</b>; <b>templul lui Ramses II de la Abu Simbel</b> (circa 1265 î.Hr., săpat în stâncă, cu patru statui șezânde înalte de circa 20 m; mutat mai sus între 1964 și 1968 pentru a-l salva de apele barajului de la Assuan); <b>templul funerar al Hatșepsutei</b> de la Deir el-Bahari (circa 1470 î.Hr., terase cu porticuri, atribuit arhitectului Senenmut).</p>`
    },
    {
      type: `svg`, title: `Planul unui templu egiptean (schemă)`,
      caption: `De la aleea de sfincși la sanctuar: spațiul devine tot mai îngust, mai întunecat și mai sacru. Coloanele din sala hipostilă sunt dese pentru că susțin arhitrave grele de piatră.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<g fill="#b45309" stroke="#78350f" stroke-width="1.5">
<rect x="20" y="115" width="20" height="10"/><rect x="50" y="115" width="20" height="10"/><rect x="80" y="115" width="20" height="10"/>
<rect x="20" y="175" width="20" height="10"/><rect x="50" y="175" width="20" height="10"/><rect x="80" y="175" width="20" height="10"/>
</g>
<polygon points="110,100 150,95 150,135 110,135" fill="#d6a85a" stroke="#78350f" stroke-width="3"/>
<polygon points="110,200 150,205 150,165 110,165" fill="#d6a85a" stroke="#78350f" stroke-width="3"/>
<rect x="150" y="90" width="110" height="120" fill="#fef9c3" stroke="#78350f" stroke-width="3"/>
<g fill="#78350f"><circle cx="165" cy="105" r="5"/><circle cx="165" cy="195" r="5"/><circle cx="245" cy="105" r="5"/><circle cx="245" cy="195" r="5"/><circle cx="165" cy="135" r="5"/><circle cx="165" cy="165" r="5"/><circle cx="245" cy="135" r="5"/><circle cx="245" cy="165" r="5"/></g>
<rect x="260" y="95" width="150" height="110" fill="#e7d3a1" stroke="#78350f" stroke-width="3"/>
<g fill="#78350f">
<circle cx="280" cy="115" r="6"/><circle cx="310" cy="115" r="6"/><circle cx="340" cy="115" r="6"/><circle cx="370" cy="115" r="6"/><circle cx="395" cy="115" r="6"/>
<circle cx="280" cy="150" r="6"/><circle cx="310" cy="150" r="6"/><circle cx="340" cy="150" r="6"/><circle cx="370" cy="150" r="6"/><circle cx="395" cy="150" r="6"/>
<circle cx="280" cy="185" r="6"/><circle cx="310" cy="185" r="6"/><circle cx="340" cy="185" r="6"/><circle cx="370" cy="185" r="6"/><circle cx="395" cy="185" r="6"/>
</g>
<rect x="410" y="115" width="80" height="70" fill="#d6c08a" stroke="#78350f" stroke-width="3"/>
<rect x="490" y="130" width="60" height="40" fill="#a16207" stroke="#451a03" stroke-width="3"/>
<g font-size="14" fill="#1c1917" font-weight="bold">
<text x="60" y="80" text-anchor="middle">aleea de sfincși</text>
<text x="130" y="75" text-anchor="middle">pilon</text>
<text x="205" y="75" text-anchor="middle">curte</text>
<text x="335" y="75" text-anchor="middle">sala hipostilă</text>
<text x="450" y="75" text-anchor="middle">anticamere</text>
<text x="520" y="115" text-anchor="middle">naos</text>
</g>
<text x="300" y="250" font-size="15" fill="#44403c" text-anchor="middle">lumină și spațiu larg  →  penumbră  →  întuneric și sacru</text>
<path d="M60 275 L540 275" stroke="#78350f" stroke-width="2"/><polygon points="540,270 552,275 540,280" fill="#78350f"/>
</svg>`
    },
    {
      type: `text`, title: `6. Pictura și sculptura egiptene`,
      html: `<p>Arta egipteană respectă <b>reguli stricte</b>, rămase aproape neschimbate timp de 3000 de ani, pentru că imaginea are o valoare <b>magică</b>: ce este pictat „există" în lumea de apoi. Se urmărește claritatea, nu iluzia.</p>
<p><b>Legea frontalității</b> (în relief și în pictură): figura umană este reprezentată cu <b>capul din profil</b>, <b>ochiul văzut din față</b>, <b>umerii și trunchiul din față</b>, <b>talia și picioarele din profil</b>, cu un picior înainte. Astfel fiecare parte a corpului își arată aspectul „cel mai ușor de recunoscut". Figurile sunt ordonate în <b>registre</b> (benzi orizontale), iar <b>dimensiunea indică rangul</b>: faraonul este mai mare decât servitorii (perspectivă ierarhică).</p>
<ul>
<li><b>Paleta lui Narmer</b> (circa 3100 î.Hr.): Narmer unifică Egiptul de Sus și Egiptul de Jos.</li>
<li><b>Pictura funerară</b>: morminte din Teba cu scene din viața de zi cu zi, precum <i>Vânătoarea de păsări în mlaștini</i> din mormântul lui <b>Nebamon</b> (circa 1350 î.Hr., British Museum). Culori minerale: ocru, azurit, malachit, negru de fum.</li>
<li><b>Sculptura</b>: statui din granit sau diorit, <b>frontale, simetrice, nemișcate</b>, cu un picior înainte; <b>Scribul așezat</b> (circa 2500 î.Hr., Luvru) este mai natural; <b>Triada lui Mikerinos</b>.</li>
<li><b>Perioada Amarna</b> (circa 1350-1330 î.Hr.): faraonul <b>Akhenaton</b> impune cultul unui singur zeu, discul solar <b>Aton</b>, și schimbă și stilul: mai naturalist, chipuri alungite și momente de viață de familie. De aici <b>Bustul Nefertitei</b> al sculptorului <b>Thutmose</b> (circa 1345 î.Hr., calcar și stuc pictat, Neues Museum din Berlin).</li>
<li><b>Masca funerară a lui Tutankhamon</b> (circa 1323 î.Hr.): aur masiv cu pastă de sticlă și pietre semiprețioase, 54 cm; mormântul a fost descoperit de <b>Howard Carter</b> la 4 noiembrie 1922 (camera funerară deschisă în 1923) în Valea Regilor. Muzeul Egiptean din Cairo.</li>
</ul>`
    },
    {
      type: `example`, title: `Exemplu: cum se „citește" un relief egiptean`,
      html: `<p>Privește un relief cu faraonul care lovește dușmanii. Regulile te ajută să-l „citești":</p>
<ul>
<li>faraonul este <b>gigantic</b> față de dușmani: este cel mai important;</li>
<li>figurile se află pe <b>registre</b> suprapuse: sus pentru rege și zei, jos pentru servitori;</li>
<li>corpul este un <b>colaj</b> de vederi: cap din profil, ochi din față, trunchi din față, picioare din profil;</li>
<li>alături apar <b>hieroglifele</b>: textul povestește ceea ce arată imaginea.</li>
</ul>
<p>Nu este vorba că egiptenii „nu știau" să deseneze în perspectivă: voiau ca imaginea să fie <b>clară și completă</b>, nu realistă.</p>`
    },
    {
      type: `example`, title: `Exemplu: calculul înclinării unei piramide`,
      html: `<p>Marea Piramidă are latura bazei de circa 230 m și o înălțime inițială de circa 146,6 m. Jumătatea bazei este 115 m: <b>unghiul de înclinare</b> al fețelor este cel a cărui tangentă este înălțimea / jumătatea bazei = 146,6 / 115 ≈ 1,275, adică circa <b>51,9°</b>. Raportul dintre apotemă (distanța de la mijlocul unei laturi până la vârf, circa 186 m) și jumătatea bazei (115 m) este circa 1,62, foarte aproape de numărul de aur; dar probabil provine dintr-un raport ales (7 palme pe cot) și nu dintr-o alegere „aurie" intenționată.</p>`
    },
    {
      type: `decision`, title: `Unde te faci îngropat?`,
      html: `<p>Ești un faraon al Regatului Nou (circa 1500 î.Hr.). Piramidele strămoșilor tăi, bine vizibile în deșert, au fost aproape toate <b>jefuite</b> de hoții de morminte: mumia și comoara nu mai sunt acolo. Trebuie să hotărăști unde să-ți construiești mormântul.</p>`,
      question: `Tu ce ai fi ales?`,
      options: [
        { label: `O piramidă nouă, uriașă, și mai înaltă`, outcome: `Costisitoare și foarte vizibilă: ar atrage hoții exact ca pe celelalte.` },
        { label: `Un mormânt săpat în stâncă, într-o vale ascunsă`, outcome: `Este alegerea făcută de faraonii Regatului Nou: Valea Regilor, lângă Teba, cu morminte subterane fără monumente la exterior și un templu funerar aflat departe pentru cult.` },
        { label: `Niciun mormânt: te încrezi în zei`, outcome: `Pentru egipteni mormântul era indispensabil pentru nemurire: nu ar fi renunțat niciodată la el.` }
      ],
      answer: 1,
      explain: `Din circa 1500 î.Hr. faraonii au ales Valea Regilor (circa 60 de morminte): coridoare și camere săpate în stâncă, cu pereți pictați. Nici asta nu a fost de ajuns: aproape toate au fost jefuite în antichitate. Face excepție mormântul lui Tutankhamon (KV62), mic și acoperit de moloz, descoperit aproape intact de Howard Carter în 1922.`
    },
    {
      type: `curiosity`, title: `Știai că… Champollion a citit hieroglifele în 1822?`,
      html: `<p><b>Piatra de la Rosetta</b> (196 î.Hr., British Museum) poartă același decret în trei scrieri: hieroglifică, demotică și greacă. Francezul <b>Jean-François Champollion</b> a comparat numele regilor din cartușe (Ptolemeu, Cleopatra) și la 27 septembrie 1822 a anunțat că a descifrat sistemul, care amestecă semne-imagine și semne-sunet. Așa egiptenii au prins din nou glas după 1400 de ani de tăcere.</p>`
    },
    {
      type: `remember`, title: `De reținut`,
      html: `<ul>
<li><b>Mesopotamia</b>: cărămizi, <b>zigurat</b> (Ur, circa 2100 î.Hr.), stela lui Hammurabi (circa 1750 î.Hr.), Poarta Ishtar (circa 575 î.Hr.), lamassu asirieni.</li>
<li><b>Egipt</b>: mastaba → piramida în trepte (Djoser, Imhotep, circa 2650 î.Hr.) → piramidele de la Giza (Keops circa 2560 î.Hr., 146,6 m).</li>
<li><b>Templul egiptean</b>: aleea de sfincși, piloni, curte, <b>sală hipostilă</b>, naos; sistem trilitic.</li>
<li><b>Pictura și sculptura egiptene</b>: legea frontalității, registre, dimensiune ierarhică; excepția de la Amarna (Nefertiti).</li>
<li>Masca lui Tutankhamon (circa 1323 î.Hr.), descoperită în 1922 de Carter.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Pentru a te orienta în cele două civilizații, încearcă să le privești din puncte de vedere diferite.`,
      tabs: [
        {
          label: `🔺 Piramida în secțiune`,
          html: `<p>În interiorul Marii Piramide sunt trei camere: cea <b>subterană</b> (neterminată), <b>camera reginei</b> și <b>camera regelui</b> (cu sarcofagul din granit roz de Assuan), la care se ajunge printr-o <b>Mare Galerie</b> cu boltă în console, înaltă de circa 8 m. Deasupra camerei regelui, cinci „camere de descărcare" ușurează greutatea pe arhitravă.</p>`,
          scene: `solid`,
          options: { shape: `pyramid`, n: 4, r: 1.6, h: 2.2, color: `#fcd34d`, labels: true }
        },
        {
          label: `🧱 A construi fără macara`,
          html: `<p>Cum se construia? Rampe din cărămizi și pământ (drepte sau în spirală) pentru a urca blocurile pe sănii de lemn; solul era udat în fața săniei pentru a reduce frecarea (cum arată o pictură de la Deir el-Bersha); pârghii de lemn pentru poziționarea finală; frânghii din papirus și fibre. Pietrele de placare (calcar fin de Tura) erau așezate de sus în jos și finisate pe măsură. Anticii nu aveau roți pentru sarcinile grele: forța era <b>echipa</b> organizată.</p>`
        },
        {
          label: `📜 Mesopotamia în comparație`,
          html: `<table>
<tr><th></th><th>Mesopotamia</th><th>Egipt</th></tr>
<tr><td><b>Material</b></td><td>cărămidă crudă și arsă</td><td>piatră cioplită</td></tr>
<tr><td><b>Clădirea-simbol</b></td><td>zigurat (spre cer)</td><td>piramidă (mormânt)</td></tr>
<tr><td><b>Scriere</b></td><td>cuneiformă pe lut</td><td>hieroglife pe piatră și papirus</td></tr>
<tr><td><b>Regele</b></td><td>locțiitor al zeilor</td><td>zeu viu</td></tr>
<tr><td><b>Arta</b></td><td>povestire, putere, legi</td><td>eternitate, lumea de apoi</td></tr>
</table>`
        },
        {
          label: `🧩 Asociază`,
          html: `<p>Leagă fiecare operă de civilizația ei.</p>`,
          widget: `classify`,
          options: { groups: [`Mesopotamia`, `Egipt`], items: [[`Stela lui Hammurabi`, 0], [`Piramida lui Keops`, 1], [`Poarta Ishtar`, 0], [`Masca lui Tutankhamon`, 1], [`Lamassu`, 0], [`Sala hipostilă de la Karnak`, 1], [`Zigguratul din Ur`, 0], [`Bustul Nefertitei`, 1]] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: arta mesopotamiană și egipteană`,
      nodes: [
        { id: `fiumi`, label: `Civilizații ale marilor fluvii`, x: 50, y: 6, color: `#64748b`, html: `Tigru-Eufrat și Nil.`, why: `Revărsările fertilizează solul: surplus agricol, deci orașe, scribi, meșteșugari și regi care pot construi opere monumentale.` },
        { id: `mes`, label: `Mesopotamia`, x: 22, y: 30, color: `#2563eb`, html: `Sumerieni, babilonieni, asirieni.`, why: `Zonă fără piatră: se construiește din cărămizi. Orașele-stat sunt în luptă, așa că puterea se exprimă și în scene de război și în legi scrise.` },
        { id: `egi`, label: `Egipt`, x: 78, y: 30, color: `#d97706`, html: `Regat unificat timp de milenii.`, why: `Izolare naturală (deșert și mare), continuitate politică: stilul se schimbă puțin timp de 3000 de ani.` },
        { id: `zig`, label: `Zigurat și Poarta Ishtar`, x: 15, y: 62, color: `#3b82f6`, html: `Turnuri în trepte și cărămizi smălțuite.`, why: `Un munte artificial pentru a-l apropia pe zeu: templul se naște pe câmpia unde nu există înălțimi.` },
        { id: `ham`, label: `Stela lui Hammurabi`, x: 35, y: 85, color: `#0ea5e9`, html: `282 de legi în cuneiformă.`, why: `A scrie legile pe piatră face regulile publice: nimeni nu poate spune că nu le cunoaște (circa 1750 î.Hr.).` },
        { id: `pir`, label: `Piramide`, x: 68, y: 62, color: `#f59e0b`, html: `Mastaba → Djoser → Giza.`, why: `De la piatra suprapusă (Djoser, Imhotep) la forma pură: faraonul urcă la cer cu lumina lui Ra.` },
        { id: `tem`, label: `Templu și sală hipostilă`, x: 92, y: 62, color: `#ef4444`, html: `Plan axial, coloane în formă de papirus.`, why: `Templul este un munte primordial și o mlaștină de papirus: coloanele imită plantele.` },
        { id: `front`, label: `Frontalitate și registre`, x: 78, y: 88, color: `#a855f7`, html: `Reguli fixe pentru imagini.`, why: `O imagine corectă funcționează magic în lumea de apoi: de aceea nu se schimbă.` }
      ],
      edges: [
        [`fiumi`, `mes`, `1°`], [`fiumi`, `egi`, `2°`], [`mes`, `zig`, `edificiu`], [`mes`, `ham`, `legi`], [`egi`, `pir`, `morminte`], [`egi`, `tem`, `cult`], [`egi`, `front`, `imagini`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: Egipt`,
      questions: [
        { type: `mc`, q: `Cine a proiectat piramida în trepte a lui Djoser?`, options: [`Imhotep`, `Senenmut`, `Champollion`], answer: 0, explain: `Imhotep, arhitect și medic, circa 2650 î.Hr.` },
        { type: `tf`, q: `În legea frontalității capul este din profil, iar ochiul este văzut din față.`, answer: true, explain: `Astfel fiecare parte a corpului este reprezentată în aspectul ei cel mai ușor de recunoscut.` },
        { type: `num`, q: `Câte coloane are sala hipostilă a templului lui Amon de la Karnak?`, answer: 134, tol: 0, explain: `134 de coloane, cele centrale înalte de circa 21 m.` },
        { type: `mc`, q: `Cine a descoperit mormântul lui Tutankhamon în 1922?`, options: [`Howard Carter`, `Heinrich Schliemann`, `Arthur Evans`], answer: 0, explain: `Arheologul britanic Howard Carter, în Valea Regilor.` }
      ]
    }
  ],
  glossary: [
    { t: `Zigurat`, d: `Turn în trepte mesopotamian din cărămizi, cu un sanctuar în vârf.` },
    { t: `Cuneiformă`, d: `Scriere cu semne în formă de pană, incizate pe lut.` },
    { t: `Lamassu`, d: `Taur înaripat cu cap de om, păzitor al porților palatelor asiriene.` },
    { t: `Mastaba`, d: `Mormânt egiptean în formă de trunchi de piramidă dreptunghiulară.` },
    { t: `Piramidă`, d: `Mormânt monumental al faraonilor, cu baza pătrată și fețe triunghiulare.` },
    { t: `Sală hipostilă`, d: `Sală a templului egiptean cu șiruri dese de coloane.` },
    { t: `Naos`, d: `Celula templului unde se află statuia zeului.` },
    { t: `Legea frontalității`, d: `Convenție egipteană: cap din profil, ochi și trunchi din față, picioare din profil.` },
    { t: `Hieroglife`, d: `Scriere egipteană cu semne-imagine și semne-sunet.` },
    { t: `Registru`, d: `Bandă orizontală în care se dispune o scenă.` },
    { t: `Trilitic`, d: `Sistem constructiv cu stâlpi și arhitravă.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Ce este un zigurat?`, options: [`Un mormânt egiptean`, `Un turn în trepte mesopotamian cu un sanctuar în vârf`, `Un palat cretan`], answer: 1, explain: `Era casa pământească a zeului, din cărămizi.` },
      { type: `mc`, q: `Unde se află Poarta Ishtar reconstruită?`, options: [`Luvru`, `Pergamonmuseum din Berlin`, `Muzeul din Cairo`], answer: 1, explain: `A fost dusă la Berlin după săpăturile germane ale lui Koldewey (1899-1917).` },
      { type: `tf`, q: `Stela lui Hammurabi conține circa 282 de legi.`, answer: true, explain: `Sunt gravate în cuneiformă pe bazalt negru.` },
      { type: `order`, q: `Pune în ordine cronologică.`, items: [`Piramida lui Djoser`, `Piramida lui Keops`, `Stela lui Hammurabi`, `Masca lui Tutankhamon`, `Poarta Ishtar`], explain: `Djoser (circa 2650), Keops (circa 2560), Hammurabi (circa 1750), Tutankhamon (circa 1323), Poarta Ishtar (circa 575 î.Hr.).` },
      { type: `num`, q: `Cât de înaltă era, la origine, piramida lui Keops (în metri, rotunjit la număr întreg)?`, answer: 147, tol: 1, unit: `m`, explain: `146,6 m la origine, astăzi circa 138 m pentru că și-a pierdut placajul și vârful.` },
      { type: `mc`, q: `Care faraon a schimbat religia și stilul artistic (Amarna)?`, options: [`Akhenaton`, `Ramses II`, `Keops`], answer: 0, explain: `Akhenaton a impus cultul lui Aton și un stil mai naturalist.` },
      { type: `text`, q: `Cum se numește mormântul egiptean în formă de trunchi de piramidă dreptunghiulară, anterior piramidelor?`, answer: [`mastaba`, `mastaba egipteană`, `o mastaba`], explain: `Mastaba (din arabă „bancă").` },
      { type: `mc`, q: `Cine a descifrat hieroglifele în 1822?`, options: [`Champollion`, `Carter`, `Hammurabi`], answer: 0, explain: `Jean-François Champollion, datorită Pietrei de la Rosetta.` },
      { type: `tf`, q: `Piramidele au fost construite de sclavi înlănțuiți.`, answer: false, explain: `Săpăturile arată muncitori plătiți și hrăniți, cu morminte proprii.` },
      { type: `mc`, q: `Într-un templu egiptean, care parte este cea mai sacră și mai întunecată?`, options: [`Aleea de sfincși`, `Curtea`, `Naosul`], answer: 2, explain: `În naos se află statuia zeului, accesibilă numai preoților și faraonului.` }
    ]
  }
});

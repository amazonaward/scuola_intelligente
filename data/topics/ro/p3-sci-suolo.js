TOPIC('ro', {
  id: "p3-sci-suolo",
  title: "Solul",
  intro: "Sub picioarele noastre este o lume ascunsă plină de viață! 🪱 <b>Solul</b> este stratul de pământ în care cresc plantele și trăiesc o mulțime de animăluțe. Descoperim din ce este făcut, cum se formează, care sunt <b>straturile</b> lui și cine locuiește în el.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Ce este solul",
      html: `<p><b>Solul</b> (sau <b>pământul</b>) este stratul cel mai de la suprafață al scoarței terestre, cel pe care mergem și în care plantele își fixează rădăcinile. 🌱</p>
<p>Nu este doar „pământ murdar”! Este un <b>amestec</b> de multe lucruri:</p>
<ul>
<li>🪨 <b>bucățele de rocă</b> de mărimi diferite: <b>pietriș</b> (mari), <b>nisip</b> (mijlocii), <b>mâl</b> și <b>argilă</b> (foarte fine);</li>
<li>🍂 <b>humus</b>: partea închisă la culoare și mirositoare, făcută din resturi de frunze, ramuri și animale descompuse. Este „hrana” plantelor;</li>
<li>💧 <b>apă</b>, care se strecoară printre granule;</li>
<li>🌬️ <b>aer</b>, în micile spații goale (<b>porii</b>);</li>
<li>🐛 <b>ființe vii</b>: râme, insecte, ciuperci, bacterii… miliarde!</li>
</ul>`
    },
    {
      type: "example",
      title: "Experiment: borcanul care se împarte în straturi",
      html: `<p>Îți trebuie: un borcan transparent cu capac, puțin pământ din grădină, apă.</p>
<ol>
<li>Umple borcanul <b>o treime</b> cu pământ.</li>
<li>Adaugă apă aproape până sus și închide bine.</li>
<li><b>Agită</b> tare un minut, apoi lasă-l să se odihnească o zi întreagă.</li>
</ol>
<p>Ce vezi? Pământul s-a împărțit în <b>straturi</b>: pe fund pietricelele și <b>nisipul</b> (grele), deasupra <b>mâlul</b>, apoi <b>argila</b> foarte fină; apa rămâne puțin tulbure, iar la suprafață <b>plutesc</b> bucățele de frunze și crenguțe (humusul încă nedescompus). Ai „demontat” solul! 🔬</p>`
    },
    {
      type: "text",
      title: "Cum se formează solul",
      html: `<p>Solul se formează <b>foarte încet</b>, în două moduri care lucrează împreună:</p>
<ol>
<li>🪨➡️🟤 <b>Roca se sfărâmă</b> (se numește <b>dezagregare</b>):
<ul>
<li><b>înghețul</b>: apa intră în crăpături, îngheață, se mărește și sparge roca;</li>
<li><b>ploaia</b> și <b>râurile</b> o macină;</li>
<li><b>vântul</b> o netezește cu nisipul;</li>
<li><b>rădăcinile</b> plantelor se strecoară în crăpături și le lărgesc.</li>
</ul></li>
<li>🍂➡️🟫 <b>Resturile viețuitoarelor se descompun</b>: frunzele, ramurile și animalele moarte sunt mâncate și transformate de râme, ciuperci și bacterii (<b>descompunătorii</b>) și devin <b>humus</b>.</li>
</ol>
<p>⏳ Pentru a forma <b>1 centimetru</b> de sol fertil pot fi necesari <b>între 100 și 1000 de ani</b>! De aceea solul este o comoară prețioasă.</p>`
    },
    {
      type: "svg",
      title: "Straturile solului",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#e0f2fe"/>
<rect x="40" y="40" width="300" height="20" fill="#65a30d"/>
<path d="M70 40 L75 15 L80 40 M120 40 L127 10 L132 40 M190 40 L195 20 L200 40 M260 40 L268 12 L274 40" stroke="#15803d" stroke-width="4" fill="none"/>
<rect x="40" y="60" width="300" height="25" fill="#3f2a14"/>
<rect x="40" y="85" width="300" height="70" fill="#6b4423"/>
<rect x="40" y="155" width="300" height="65" fill="#a16207"/>
<rect x="40" y="220" width="300" height="55" fill="#a8a29e"/>
<rect x="40" y="275" width="300" height="55" fill="#57534e"/>
<g fill="#d6d3d1" stroke="#44403c" stroke-width="2">
<ellipse cx="90" cy="240" rx="22" ry="12"/><ellipse cx="170" cy="250" rx="28" ry="14"/><ellipse cx="260" cy="238" rx="20" ry="11"/><ellipse cx="310" cy="258" rx="18" ry="10"/>
<ellipse cx="130" cy="190" rx="10" ry="6"/><ellipse cx="240" cy="200" rx="12" ry="7"/>
</g>
<path d="M195 60 L190 110 L180 140 M190 110 L205 150" stroke="#fef3c7" stroke-width="3" fill="none"/>
<path d="M100 120 q15 -10 30 0 q15 10 30 0" stroke="#f472b6" stroke-width="6" fill="none" stroke-linecap="round"/>
<g font-size="17" fill="#1f2937">
<text x="355" y="56">Așternut: frunze și crenguțe</text>
<text x="355" y="80" font-weight="bold">Humus închis la culoare</text>
<text x="355" y="125" font-weight="bold">Stratul de la suprafață (sol</text>
<text x="355" y="145" font-weight="bold">agricol): rădăcini și râme</text>
<text x="355" y="192">Subsolul: mai deschis,</text>
<text x="355" y="212">puțin humus, argilă</text>
<text x="355" y="252">Rocă sfărâmată</text>
<text x="355" y="308" font-weight="bold">Roca-mamă</text>
</g>
</svg>`,
      caption: "Tăind pământul se văd straturi de culori diferite, numite orizonturi: de la cel mai închis și mai bogat, sus, până la rocă, jos."
    },
    {
      type: "text",
      title: "Straturile (orizonturile) de sus în jos",
      html: `<ol>
<li>🍂 <b>Așternutul</b>: frunze, crenguțe, ace de pin abia căzute.</li>
<li>🟫 <b>Stratul de la suprafață</b> (solul agricol): închis la culoare, moale, bogat în <b>humus</b>. Aici sunt aproape toate <b>rădăcinile</b> și cea mai mare parte a animalelor. Este stratul pe care agricultorul îl <b>ară</b>.</li>
<li>🟧 <b>Subsolul</b>: mai deschis și mai compact, cu puțin humus, multă argilă și pietre. Ajung aici doar cele mai lungi rădăcini ale copacilor.</li>
<li>🪨 <b>Roca sfărâmată</b>: bucăți de rocă care se fărâmițează.</li>
<li>⛰️ <b>Roca-mamă</b>: roca întreagă și tare din care, încet-încet, se naște solul.</li>
</ol>
<p>Stratul de la suprafață are de obicei o grosime de doar câteva zeci de centimetri!</p>`
    },
    {
      type: "3d",
      title: "Solul în 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#65a30d", label: "Așternut: frunze căzute" },
          { r: 0.9, color: "#3f2a14", label: "Humus și stratul de la suprafață: rădăcini și râme" },
          { r: 0.75, color: "#a16207", label: "Subsol: argilă și pietre" },
          { r: 0.55, color: "#a8a29e", label: "Rocă sfărâmată" },
          { r: 0.35, color: "#57534e", label: "Roca-mamă" }
        ]
      },
      caption: "O felie tăiată arată straturile pământului unul peste altul (nu sunt la scară). Rotește-o și atinge fiecare strat!"
    },
    {
      type: "quiz",
      title: "Mini-test: cum este făcut solul",
      questions: [
        { type: "mc", q: "Cum se numește partea închisă la culoare a solului, făcută din resturi de frunze și animale descompuse?", options: ["argila", "humusul", "roca-mamă"], answer: 1, explain: "Este humusul, foarte hrănitor pentru plante." },
        { type: "tf", q: "În sol există și aer, și apă.", answer: true, explain: "Aerul și apa umplu micile spații dintre granule." },
        { type: "mc", q: "Care este cel mai adânc strat?", options: ["Așternutul", "Subsolul", "Roca-mamă"], answer: 2, explain: "În adânc se află roca-mamă, din care se formează solul." }
      ]
    },
    {
      type: "text",
      title: "Cine trăiește în sol",
      html: `<p>Într-o lingură de pământ fertil sunt <b>mai multe ființe vii decât oameni pe Pământ</b>: mai ales <b>bacterii</b> invizibile! Iată câțiva locuitori:</p>
<ul>
<li>🪱 <b>Râma</b>: „agricultorul” solului. Sapă galerii prin care intră aer și apă, mănâncă pământ și frunze și le dă înapoi sub formă de îngrășământ.</li>
<li>🐜 <b>Furnicile</b>: construiesc cuiburi cu multe camere și amestecă pământul.</li>
<li>🦔 <b>Cârtița</b>: sapă galerii lungi și mănâncă râme și larve. Este aproape oarbă, dar are labe în formă de lopată!</li>
<li>🐞 <b>Gândacul de umezeală</b> (porcușorul de pământ): nu este o insectă, ci un crustaceu, rudă cu crevetele! Mănâncă frunze putrezite.</li>
<li>🐛 <b>Larve</b> de insecte, <b>miriapode</b>, <b>melci</b>, <b>păianjeni</b>…</li>
<li>🍄 <b>Ciuperci</b> și 🦠 <b>bacterii</b>: descompunătorii care transformă resturile în humus.</li>
</ul>
<p>Toți împreună formează un <b>lanț</b>: fără ei frunzele și resturile s-ar aduna, iar plantele nu ar avea hrană.</p>`
    },
    {
      type: "widget",
      title: "Locuiește în sol sau nu?",
      widget: "classify",
      options: {
        groups: ["Trăiește în sol 🟫", "Nu trăiește în sol ☁️"],
        items: [
          ["🪱 râmă", 0],
          ["🦅 vultur", 1],
          ["🐜 furnică", 0],
          ["🐟 păstrăv", 1],
          ["🦔 cârtiță", 0],
          ["🍄 ciuperci", 0],
          ["🦋 fluture adult", 1],
          ["🐞 gândac de umezeală", 0],
          ["🐦 vrăbiuță", 1]
        ]
      },
      caption: "Trage fiecare ființă vie în grupul potrivit."
    },
    {
      type: "text",
      title: "Tipuri de sol: cine lasă apa să treacă?",
      html: `<p>Nu toate solurile sunt la fel. Depinde de cât nisip, cât argilă și cât humus conțin:</p>
<table>
<tr><th>Solul</th><th>Cum este</th><th>Apa</th></tr>
<tr><td>🏖️ <b>Nisipos</b></td><td>granule mari, se fărâmițează</td><td>trece <b>foarte repede</b> (foarte <b>permeabil</b>): se usucă imediat</td></tr>
<tr><td>🧱 <b>Argilos</b></td><td>granule foarte fine, lipicios, se modelează</td><td>trece <b>foarte puțin</b> (<b>impermeabil</b>): face bălți</td></tr>
<tr><td>🌻 <b>Bogat în humus</b> (amestecat)</td><td>închis la culoare, moale, mirositor</td><td>reține apa potrivită: <b>cel mai bun</b> pentru cultivat</td></tr>
<tr><td>🪨 <b>Calcaros</b> / pietros</td><td>deschis la culoare, plin de pietre</td><td>lasă apa să treacă; potrivit pentru viță-de-vie și măslin</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Experiment: permeabilitatea",
      html: `<p>Ia 3 sticle de plastic tăiate în două și folosește partea de sus, întoarsă, drept <b>pâlnie</b> (cu o bucățică de tifon sau de vată în gât).</p>
<ul>
<li>Pâlnia 1: <b>nisip</b>; pâlnia 2: <b>argilă</b>; pâlnia 3: <b>pământ de flori</b> din grădină. Toate cu <b>aceeași cantitate</b>!</li>
<li>Toarnă în fiecare <b>un pahar cu apă</b> și pornește cronometrul ⏱️.</li>
</ul>
<p>Rezultat: prin nisip apa coboară imediat; prin argilă coboară doar câteva picături; pământul de flori lasă să treacă puțină apă și reține o parte. Tocmai ai folosit <b>metoda științifică</b>: ai schimbat un singur lucru (tipul de sol)!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Marele om de știință <b>Charles Darwin</b>, celebru pentru teoria evoluției, a studiat <b>râmele</b> mai bine de 40 de ani! În <b>1881</b> a scris o carte întreagă despre ele și a calculat că pe un câmp râmele pot aduce la suprafață mai multe tone de pământ în fiecare an. Le numea „plugurile naturii”. 🪱</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Aproximativ <b>95%</b> din hrana pe care o mâncăm vine, direct sau indirect, din sol: fructe, legume, cereale și chiar carnea (pentru că animalele mănâncă plante). 🍎🌾 Ca să ne amintim cât este de important, ONU a stabilit <b>Ziua Mondială a Solului</b>, în fiecare an pe <b>5 decembrie</b>.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Solul este un amestec de fragmente de rocă, humus, apă, aer și ființe vii.</li>
<li>Se formează prin dezagregarea rocii și prin descompunerea resturilor viețuitoarelor: durează secole.</li>
<li>Straturi: așternut, strat de la suprafață cu humus, subsol, rocă sfărâmată, roca-mamă.</li>
<li>Nisipos = permeabil; argilos = impermeabil; bogat în humus = cel mai fertil.</li>
<li>Râmele, ciupercile și bacteriile îl fac fertil: trebuie să-l protejăm.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege solul",
      intro: "Solul este ascuns sub picioarele noastre: iată câteva moduri de a-l „vedea” și de a-l ține minte mai bine.",
      tabs: [
        {
          label: "🍰 Tortul cu straturi",
          html: `<p>Imaginează-ți solul ca pe un <b>tort cu straturi</b> (sau ca pe o lasagna!) 🍰:</p>
<ul>
<li>deasupra <b>decorațiunile</b> mărunțite = așternutul de frunze;</li>
<li><b>crema de ciocolată</b> închisă la culoare și moale = stratul cu humus;</li>
<li><b>pandispanul</b> mai deschis și mai compact = subsolul;</li>
<li><b>biscuiții</b> sfărâmați pe fund = roca sfărâmată;</li>
<li><b>platoul</b> tare = roca-mamă.</li>
</ul>
<p>Dacă tai o felie, vezi toate straturile: exact cum fac oamenii de știință când sapă o groapă!</p>`
        },
        {
          label: "🪱 Crescătoria de râme din clasă",
          html: `<p>Construiește o <b>crescătorie de râme</b> într-un borcan înalt de sticlă:</p>
<ol>
<li>alternează straturi de <b>nisip deschis</b> și de <b>pământ închis</b>;</li>
<li>la suprafață pune frunze uscate și coji de legume;</li>
<li>adaugă 3–4 râme găsite în grădină și umezește puțin;</li>
<li>acoperă sticla cu un carton închis la culoare (le place întunericul).</li>
</ol>
<p>După o săptămână straturile vor fi <b>amestecate</b>, iar frunzele în parte dispărute sub pământ! Apoi du râmele înapoi unde le-ai găsit. 🌿</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="60" y="30" width="160" height="210" rx="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<rect x="66" y="60" width="148" height="30" fill="#78350f"/>
<rect x="66" y="90" width="148" height="30" fill="#fde68a"/>
<rect x="66" y="120" width="148" height="30" fill="#78350f"/>
<rect x="66" y="150" width="148" height="30" fill="#fde68a"/>
<rect x="66" y="180" width="148" height="54" fill="#78350f"/>
<path d="M80 55 l20 -10 l20 10 M140 55 l25 -12 l15 12" stroke="#ca8a04" stroke-width="5" fill="none"/>
<text x="140" y="255" font-size="18" text-anchor="middle" font-weight="bold">ziua 1</text>
<rect x="360" y="30" width="160" height="210" rx="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<rect x="366" y="60" width="148" height="174" fill="#92400e"/>
<g fill="#fde68a"><circle cx="400" cy="100" r="8"/><circle cx="470" cy="140" r="10"/><circle cx="420" cy="190" r="9"/><circle cx="490" cy="210" r="7"/></g>
<path d="M390 120 q15 -10 30 0 q15 10 30 0 M430 170 q12 -8 24 0 q12 8 24 0" stroke="#f472b6" stroke-width="6" fill="none" stroke-linecap="round"/>
<text x="440" y="255" font-size="18" text-anchor="middle" font-weight="bold">după 1 săptămână</text>
<text x="290" y="140" font-size="40" text-anchor="middle">➡️</text>
</svg>`
        },
        {
          label: "🧊 Straturile în 3D",
          html: `<p>Încearcă să privești straturile ca pe etajele unei clădiri: la etajul cel mai de sus este viața (rădăcini, râme), coborând se ajunge la „fundația” de rocă.</p>
<p>Rotește modelul și observă cum straturile se înfășoară unul în celălalt.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#3f2a14", label: "Strat cu humus" },
              { r: 0.75, color: "#a16207", label: "Subsol" },
              { r: 0.5, color: "#57534e", label: "Roca-mamă" }
            ]
          }
        },
        {
          label: "🌍 Soluri din lume",
          html: `<p>În fiecare parte a lumii solul este diferit:</p>
<ul>
<li>🇺🇦 În <b>Ucraina</b> și în Rusia există <b>cernoziomul</b> („pământ negru”): unul dintre cele mai fertile soluri de pe planetă, bogat în humus, gros uneori și de peste un metru.</li>
<li>🇧🇷 În <b>Amazonia</b> populațiile străvechi au creat <b>terra preta</b> („pământ negru”) adăugând cărbune de lemn, cioburi și resturi: este fertil și astăzi, după sute de ani!</li>
<li>🇨🇳 În <b>China</b> și în <b>Liguria</b> se construiesc <b>terase</b>: trepte cu ziduri de piatră uscată care împiedică ploaia să ducă solul de pe dealuri.</li>
<li>🏜️ În <b>deșerturi</b> solul este aproape numai nisip, cu foarte puțin humus.</li>
</ul>`
        },
        {
          label: "♻️ Fă compost",
          html: `<p><b>Compostul</b> este humus făcut acasă! Într-un recipient de compostare se pun coji de fructe și legume, zaț de cafea, frunze uscate, iarbă tăiată. Râmele, ciupercile și bacteriile fac restul.</p>
<p>După câteva luni se obține un pământ închis la culoare și mirositor, bun de dat plantelor. Este exact ce se întâmplă în pădure, dar mai repede. 🌱 Fără plastic, sticlă sau metal: pe acestea descompunătorii nu le mănâncă!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta solului: atinge un nod și descoperă de ce",
      nodes: [
        { id: "suolo", label: "Solul", x: 50, y: 8, color: "#78350f", html: "Stratul de la suprafața Pământului în care cresc plantele.", why: "Știința care studiază solul se numește pedologie (din grecescul <i>pédon</i>, „pământ”). Fondatorul ei este rusul Vasili Dokuceaev, care în 1883 a înțeles că solul este un corp natural „viu”, născut din rocă, climă, viețuitoare și timp." },
        { id: "roccia", label: "Roca-mamă", x: 15, y: 30, color: "#57534e", html: "Roca din care se formează solul.", why: "Tipul de rocă hotărăște în parte tipul de sol: dintr-un granit se naște un sol nisipos, dintr-un calcar un sol calcaros." },
        { id: "disg", label: "Dezagregarea", x: 15, y: 55, color: "#0ea5e9", html: "Roca se sfărâmă din cauza înghețului, apei, vântului și rădăcinilor.", why: "Apa, înghețând, își mărește volumul cu aproximativ o zecime: intrând în crăpături, acționează ca o pană și sparge roca." },
        { id: "humus", label: "Humus", x: 85, y: 30, color: "#3f2a14", html: "Parte închisă la culoare, făcută din resturi descompuse de plante și animale.", why: "Din latinescul <i>humus</i>, „pământ”: din acest cuvânt vin și „umil”, și, probabil, „om”. Humusul reține apa și substanțele hrănitoare ca un burete." },
        { id: "decomp", label: "Descompunători", x: 85, y: 55, color: "#ec4899", html: "Râme, ciuperci și bacterii care transformă resturile în humus.", why: "Fără ei pădurea ar fi îngropată sub frunze moarte. Darwin a demonstrat în 1881 cât de mult lucrează râmele." },
        { id: "strati", label: "Straturi (orizonturi)", x: 50, y: 42, color: "#a16207", html: "Așternut, strat de la suprafață, subsol, rocă sfărâmată, roca-mamă.", why: "Se formează pentru că sus ajunge mai multă materie organică de la plante, iar jos este mai ales rocă care se fărâmițează." },
        { id: "tipi", label: "Tipuri de sol", x: 30, y: 80, color: "#f59e0b", html: "Nisipos, argilos, bogat în humus, calcaros.", why: "Depinde de mărimea granulelor: printre granulele mari (nisip) apa trece ușor, printre cele foarte fine (argilă) aproape deloc." },
        { id: "vita", label: "Viață și hrană", x: 70, y: 80, color: "#16a34a", html: "Solul hrănește plantele și, deci, și pe noi.", why: "Aproximativ 95% din hrana noastră depinde de sol. De aceea FAO și ONU sărbătoresc Ziua Mondială a Solului pe 5 decembrie." },
        { id: "tempo", label: "Timp foarte îndelungat", x: 50, y: 95, color: "#64748b", html: "1 cm de sol fertil se formează în 100–1000 de ani.", why: "Dezagregarea și descompunerea sunt foarte lente. Solul se distruge repede (beton, eroziune, poluare), dar se reface încet: este o resursă de protejat." }
      ],
      edges: [
        ["roccia", "disg", "suferă"],
        ["disg", "suolo", "formează"],
        ["decomp", "humus", "produc"],
        ["humus", "suolo", "îmbogățește"],
        ["suolo", "strati", "este împărțit în"],
        ["suolo", "tipi", "există diferite"],
        ["suolo", "vita", "face posibilă"],
        ["strati", "tempo", "se formează într-un"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: locuitori și tipuri de sol",
      questions: [
        { type: "mc", q: "Care animal este numit „plugul naturii”?", options: ["cârtița", "râma", "furnica"], answer: 1, explain: "Râma amestecă pământul și îl face să respire cu galeriile ei." },
        { type: "mc", q: "În ce sol trece apa cel mai repede?", options: ["argilos", "nisipos", "bogat în humus"], answer: 1, explain: "Între granulele mari de nisip sunt spații mai largi." },
        { type: "tf", q: "Gândacul de umezeală este o insectă.", answer: false, explain: "Este un crustaceu, rudă cu crevetele!" }
      ]
    }
  ],
  glossary: [
    { t: "Sol", d: "Stratul de la suprafața scoarței terestre în care cresc plantele." },
    { t: "Humus", d: "Partea închisă la culoare a solului, formată din resturi descompuse de plante și animale." },
    { t: "Roca-mamă", d: "Roca din care, sfărâmându-se, se formează solul." },
    { t: "Dezagregare", d: "Sfărâmarea rocii din cauza înghețului, apei, vântului și rădăcinilor." },
    { t: "Descompunători", d: "Ființe vii (râme, ciuperci, bacterii) care transformă resturile în humus." },
    { t: "Așternut", d: "Strat de frunze și crenguțe căzute deasupra solului." },
    { t: "Subsol", d: "Stratul de sub cel de la suprafață, mai deschis și sărac în humus." },
    { t: "Permeabil", d: "Care lasă apa să treacă (de ex. solul nisipos)." },
    { t: "Impermeabil", d: "Care nu lasă apa să treacă (de ex. solul argilos)." },
    { t: "Compost", d: "Humus produs din resturile de bucătărie și de grădină." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce este solul?", options: ["Stratul de la suprafața Pământului în care cresc plantele", "Centrul Pământului", "Stratul de aer din jurul Pământului"], answer: 0, explain: "Este stratul cel mai de la suprafață al scoarței terestre." },
      { type: "order", q: "Pune în ordine straturile solului, de sus în jos.", items: ["Așternutul", "Stratul de la suprafață cu humus", "Subsolul", "Roca sfărâmată", "Roca-mamă"], explain: "Sus materia organică, jos roca." },
      { type: "text", q: "Cum se numește partea închisă la culoare și fertilă a solului, formată din resturi descompuse?", answer: ["humus", "humusul"], explain: "Este humusul." },
      { type: "tf", q: "Solul conține și aer, și apă.", answer: true, explain: "Se găsesc în porii dintre granule." },
      { type: "mc", q: "Care dintre acestea NU ajută la sfărâmarea rocii?", options: ["înghețul", "rădăcinile", "lumina Lunii"], answer: 2, explain: "Înghețul, apa, vântul și rădăcinile dezagregă roca; lumina Lunii nu." },
      { type: "mc", q: "Solul argilos…", options: ["lasă apa să treacă foarte repede", "reține apa și formează bălți", "este făcut din pietre mari"], answer: 1, explain: "Argila are granule foarte fine: este aproape impermeabilă." },
      { type: "mc", q: "Cât timp poate fi necesar ca să se formeze 1 cm de sol fertil?", options: ["O zi", "Un an", "Între 100 și 1000 de ani"], answer: 2, explain: "Solul se formează foarte încet." },
      { type: "text", q: "Care animal cu labe în formă de lopată sapă galerii și mănâncă râme?", answer: ["cârtiță", "cârtița", "cartita", "cartiță"], explain: "Cârtița." },
      { type: "tf", q: "Ciupercile și bacteriile sunt descompunători.", answer: true, explain: "Transformă resturile de plante și animale în humus." },
      { type: "mc", q: "Care sol este cel mai bun pentru a cultiva o grădină de legume?", options: ["nisipos", "bogat în humus", "numai rocă"], answer: 1, explain: "Solul bogat în humus este plin de substanțe hrănitoare și reține cantitatea potrivită de apă." },
      { type: "mc", q: "În experimentul cu borcanul agitat, ce se depune pe fund?", options: ["Pietricele și nisip, pentru că sunt mai grele", "Frunzele", "Argila foarte fină"], answer: 0, explain: "Granulele mai mari și mai grele coboară primele; frunzele plutesc." },
      { type: "mc", q: "În ce zi se sărbătorește Ziua Mondială a Solului?", options: ["5 decembrie", "22 martie", "25 aprilie"], answer: 0, explain: "Pe 5 decembrie (22 martie este Ziua Mondială a Apei)." }
    ]
  }
});

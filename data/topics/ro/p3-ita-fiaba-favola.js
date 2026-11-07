TOPIC('ro', {
  id: "p3-ita-fiaba-favola",
  title: "Basmul și fabula (fiaba e favola)",
  intro: "«A fost odată…» («C'era una volta…») 🏰 Basmele și fabulele sunt printre cele mai vechi povești din lume. Seamănă între ele, dar nu sunt același lucru! Descoperim cum să le recunoaștem: în <b>basm</b> există <b>magie</b> ✨, în <b>fabulă</b> <b>animalele vorbesc</b> 🦊 și la sfârșit există o <b>morală</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Basmul: magie și final fericit",
      html: `<p><b>Basmul</b> (<i>fiaba</i>) este o povestire fantastică, născută cu mult timp în urmă și transmisă din gură în gură de la bunici la nepoți. Caracteristicile lui:</p>
<ul>
<li>✨ <b>Magie</b>: zâne, vrăjitoare, căpcăuni, zmei, obiecte magice (condurul, lampa, cizmele de șapte leghe).</li>
<li>🕰️ <b>Timp nedefinit</b>: «A fost odată…», «Demult, tare demult…».</li>
<li>🌲 <b>Loc nedefinit</b>: «într-o împărăție îndepărtată», «într-o pădure deasă».</li>
<li>👑 <b>Personaje fixe</b>: protagonistul (eroul sau eroina), antagonistul (cel rău), ajutorul, obiectul magic.</li>
<li>⚔️ Protagonistul trebuie să treacă <b>probe</b> grele.</li>
<li>😊 <b>Final fericit</b>: «…și au trăit fericiți până la adânci bătrâneți».</li>
</ul>
<p>Basme faimoase: <i>Cenerentola</i> (Cenușăreasa), <i>Biancaneve</i> (Albă ca Zăpada), <i>Hänsel și Gretel</i>, <i>Motanul încălțat</i>, <i>Frumoasa adormită</i>.</p>`
    },
    {
      type: "text",
      title: "Fabula: animale și morală",
      html: `<p><b>Fabula</b> (<i>favola</i>) este o povestire <b>scurtă</b> care vrea să <b>învețe ceva</b>. Caracteristicile ei:</p>
<ul>
<li>🦊 Protagoniștii sunt aproape întotdeauna <b>animale</b> care vorbesc și se poartă ca oamenii.</li>
<li>🎭 Fiecare animal reprezintă un <b>caracter</b>: vulpea este vicleană, leul este puternic și arogant, furnica este harnică, măgarul este încăpățânat, mielul este neajutorat.</li>
<li>⚡ Povestea este <b>scurtă</b>, cu puține personaje (adesea doar două) și adesea un dialog.</li>
<li>📜 La sfârșit există <b>morala</b>: o învățătură despre cum să te porți. Uneori este scrisă, alteori trebuie s-o descoperi tu.</li>
<li>❌ Nu există magie și nu întotdeauna există final fericit.</li>
</ul>
<p>Fabule faimoase: <i>Vulpea și strugurii</i>, <i>Greierele și furnica</i>, <i>Iepurele și broasca țestoasă</i>, <i>Lupul și mielul</i>.</p>`
    },
    {
      type: "svg",
      title: "Basm sau fabulă? dintr-o privire",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<rect x="20" y="20" width="270" height="260" rx="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
<rect x="310" y="20" width="270" height="260" rx="20" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
<text x="155" y="60" font-size="30" font-weight="bold" text-anchor="middle" fill="#5b21b6">BASM</text>
<text x="445" y="60" font-size="30" font-weight="bold" text-anchor="middle" fill="#92400e">FABULĂ</text>
<text x="155" y="105" font-size="34" text-anchor="middle">🧚 🐉 👑</text>
<text x="445" y="105" font-size="34" text-anchor="middle">🦊 🍇 🐢</text>
<g font-size="18" fill="#1f2937">
<text x="40" y="145">✨ magie</text>
<text x="40" y="175">📖 poveste lungă</text>
<text x="40" y="205">🧍 personaje umane</text>
<text x="40" y="235">⚔️ probe de trecut</text>
<text x="40" y="265">😊 final fericit</text>
<text x="330" y="145">🚫 fără magie</text>
<text x="330" y="175">⚡ poveste scurtă</text>
<text x="330" y="205">🐾 animale vorbitoare</text>
<text x="330" y="235">🎭 un defect sau o calitate</text>
<text x="330" y="265">📜 morală la sfârșit</text>
</g>
</svg>`,
      caption: "Două genuri diferite: basmul te face să visezi, fabula te face să reflectezi."
    },
    {
      type: "quiz",
      title: "Mini-test: basm sau fabulă?",
      questions: [
        { type: "mc", q: "O poveste cu o zână, un prinț și o vrajă este…", options: ["un basm", "o fabulă"], answer: 0, explain: "Magia și personajele fantastice sunt tipice pentru basm." },
        { type: "mc", q: "O poveste scurtă în care un corb și o vulpe vorbesc, iar la sfârșit există o învățătură, este…", options: ["un basm", "o fabulă"], answer: 1, explain: "Animale vorbitoare + morală = fabulă." },
        { type: "tf", q: "În fabulă, vulpea reprezintă de obicei viclenia.", answer: true, explain: "Animalele din fabule au caractere fixe: vulpea este vicleană." }
      ]
    },
    {
      type: "text",
      title: "Autorii: cine a scris basme și fabule",
      html: `<p><b>Fabule</b></p>
<ul>
<li><b>Esop</b> 🇬🇷: a trăit în Grecia în <b>secolul al VI-lea î.Hr.</b>; după tradiție era un sclav foarte înțelept. Fabulele lui (<i>Vulpea și strugurii</i>, <i>Iepurele și broasca țestoasă</i>) au ajuns până la noi.</li>
<li><b>Fedru</b> 🏛️: poet latin din <b>secolul I d.Hr.</b>, a rescris în versuri multe fabule ale lui Esop (<i>Lupul și mielul</i>).</li>
<li><b>Jean de La Fontaine</b> 🇫🇷: în <b>1668</b> a publicat în Franța <i>Fabulele</i> sale în versuri (<i>Greierele și furnica</i>).</li>
</ul>
<p><b>Basme</b></p>
<ul>
<li><b>Giambattista Basile</b> 🇮🇹: napolitan, a scris <i>Lo cunto de li cunti</i> (publicat în <b>1634–1636</b>), una dintre primele culegeri de basme din Europa, unde există deja <i>La gatta Cenerentola</i> (Pisica Cenușăreasa).</li>
<li><b>Charles Perrault</b> 🇫🇷: în <b>1697</b> a publicat <i>Scufița Roșie</i>, <i>Motanul încălțat</i>, <i>Cenușăreasa</i>.</li>
<li><b>Frații Grimm</b> 🇩🇪: Jacob și Wilhelm au cules basmele populare germane și le-au publicat din <b>1812</b> (<i>Hänsel și Gretel</i>, <i>Albă ca Zăpada</i>).</li>
<li><b>Hans Christian Andersen</b> 🇩🇰: din <b>1835</b> a scris basme noi: <i>Mica sirenă</i>, <i>Rățușca cea urâtă</i>.</li>
<li><b>Italo Calvino</b> 🇮🇹: în <b>1956</b> a cules și rescris 200 de <i>Fiabe italiane</i> (Basme italiene) din toate regiunile.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Axa timpului basmelor și fabulelor",
      widget: "timeline",
      options: {
        events: [
          { year: -550, label: "Esop", icon: "🦊", text: "Fabule grecești, secolul al VI-lea î.Hr. (dată orientativă)." },
          { year: 40, label: "Fedru", icon: "🐺", text: "Fabule în latină, secolul I d.Hr. (dată orientativă)." },
          { year: 1634, label: "Basile", icon: "📜", text: "Lo cunto de li cunti, Napoli (1634–1636)." },
          { year: 1668, label: "La Fontaine", icon: "🦗", text: "Fabulele, Franța." },
          { year: 1697, label: "Perrault", icon: "🐈", text: "Scufița Roșie, Cenușăreasa, Motanul încălțat." },
          { year: 1812, label: "Frații Grimm", icon: "🍬", text: "Basme pentru copii și familii: Hänsel și Gretel, Albă ca Zăpada." },
          { year: 1835, label: "Andersen", icon: "🧜", text: "Primele basme; apoi Mica sirenă, Rățușca cea urâtă." },
          { year: 1956, label: "Calvino", icon: "📚", text: "Fiabe italiane: 200 de basme din regiunile Italiei." }
        ]
      },
      caption: "Atinge un punct ca să afli autorul. Poveștile sunt mult mai vechi decât cărțile: se povesteau din gură în gură."
    },
    {
      type: "text",
      title: "Structura basmului",
      html: `<p>Aproape toate basmele urmează același drum în <b>cinci etape</b>:</p>
<ol>
<li><b>Situația inițială</b>: «A fost odată o fată bună care trăia cu mama vitregă…»</li>
<li><b>Ruperea echilibrului</b> (problema): o interdicție încălcată, o vrajă, o răpire.</li>
<li><b>Peripețiile</b>: protagonistul pornește la drum, înfruntă probe, întâlnește ajutoare și antagoniști, primește un obiect magic.</li>
<li><b>Deznodământul</b>: cel rău este învins, vraja se sparge.</li>
<li><b>Situația finală</b>: protagonistul este fericit (și adesea se căsătorește sau devine rege).</li>
</ol>
<p>Fabula, în schimb, este mai simplă: <b>situație → întâmplare → încheiere → morală</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: fabula «Vulpea și strugurii» (Esop)",
      html: `<p><i>O vulpe flămândă a văzut niște ciorchini de struguri copți care atârnau de o boltă înaltă. A sărit o dată, de două ori, de trei ori, dar nu a reușit să-i ajungă. Atunci a plecat spunând: «Oricum, strugurii aceia sunt acri!»</i></p>
<ul>
<li>Personaj: vulpea (animal care vorbește).</li>
<li>Situație: îi este foame și vede strugurii.</li>
<li>Întâmplare: încearcă să-i ia, dar nu reușește.</li>
<li>Încheiere: spune că strugurii nu sunt buni.</li>
<li><b>Morala</b>: cine nu reușește să obțină ceva se preface adesea că nu își dorește acel lucru. De aici expresia «a face ca vulpea cu strugurii».</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: basmul Cenușăresei",
      html: `<ul>
<li><b>Situația inițială</b>: Cenușăreasa trăiește cu mama vitregă și cu surorile vitrege, care o tratează ca pe o slujnică.</li>
<li><b>Ruperea echilibrului</b>: prințul organizează un bal, dar ei îi este interzis să meargă.</li>
<li><b>Ajutor și obiecte magice</b>: zâna cea bună transformă un dovleac în trăsură și îi dă o rochie și condurii de cristal (în versiunea lui Perrault).</li>
<li><b>Proba</b>: trebuie să se întoarcă până la miezul nopții; fugind, pierde un conduraș.</li>
<li><b>Antagoniști</b>: mama vitregă și surorile vitrege, care încearcă să-l păcălească pe prinț.</li>
<li><b>Deznodământ și final fericit</b>: condurul i se potrivește doar ei; se căsătorește cu prințul.</li>
</ul>
<p>Același basm se povestește în toată lumea sub nume diferite: în China există o poveste asemănătoare, <i>Ye Xian</i>, scrisă încă din secolul al IX-lea!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cele 31 de «mutări» ale basmului",
      html: `<p>În <b>1928</b> cercetătorul rus <b>Vladimir Propp</b> a citit și a comparat o sută de basme fantastice rusești și a descoperit că toate erau construite din aceleași «cărămizi»: <b>31 de funcții</b>, adică acțiuni tipice (plecarea, interdicția, încălcarea interdicției, darul obiectului magic, lupta, victoria, nunta…). Basmele par toate diferite, dar în fond au același schelet!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Rodari și poveștile la telefon",
      html: `<p>Scriitorul italian <b>Gianni Rodari</b> a publicat în <b>1962</b> <i>Favole al telefono</i> (Povești la telefon): poveștile pe care contabilul Bianchi, mereu în călătorie de afaceri, le spunea în fiecare seară fiicei sale la telefon. Trebuiau să fie scurte pentru că plătea cu jetoane! În <b>1970</b> Rodari a câștigat <b>Premiul Hans Christian Andersen</b>, cel mai important premiu din lume pentru scriitorii pentru copii: este singurul scriitor italian care l-a câștigat.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<table>
<tr><th></th><th>BASM</th><th>FABULĂ</th></tr>
<tr><td>Personaje</td><td>umane și fantastice (zâne, căpcăuni)</td><td>animale care vorbesc</td></tr>
<tr><td>Magie</td><td>da</td><td>nu</td></tr>
<tr><td>Lungime</td><td>mai lungă, cu multe probe</td><td>scurtă</td></tr>
<tr><td>Timp și loc</td><td>nedefinite («a fost odată»)</td><td>nedefinite</td></tr>
<tr><td>Final</td><td>final fericit</td><td>morală</td></tr>
<tr><td>Autori</td><td>Basile, Perrault, Grimm, Andersen, Calvino</td><td>Esop, Fedru, La Fontaine</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Joc: personajele basmului",
      widget: "classify",
      options: {
        groups: ["Protagonist", "Antagonist", "Ajutor", "Obiect magic"],
        items: [
          ["👧 Scufița Roșie", 0], ["👸 Albă ca Zăpada", 0], ["🧒 Hänsel", 0],
          ["🐺 lupul", 1], ["🧙‍♀️ vrăjitoarea", 1], ["👹 căpcăunul", 1],
          ["🧚 zâna cea bună", 2], ["🪓 vânătorul", 2], ["🐦 păsărelele", 2],
          ["👠 condurul de cristal", 3], ["🪄 bagheta", 3], ["👢 cizmele de șapte leghe", 3]
        ]
      },
      caption: "Fiecare personaj are un rol precis în basm: pune-l la locul potrivit."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege basmele și fabulele",
      intro: "Poți înțelege diferența și cu o bandă desenată, cu cărțile lui Propp, potrivind morale sau călătorind prin lume cu Cenușăreasa.",
      tabs: [
        {
          label: "🎨 Basmul în benzi desenate",
          html: `<p>Iată cele cinci etape ale basmului desenate ca o bandă desenată. Încearcă să povestești <i>Hänsel și Gretel</i> urmând vignetele!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<g stroke="#1f2937" stroke-width="3">
<rect x="10" y="20" width="108" height="150" fill="#dbeafe"/>
<rect x="128" y="20" width="108" height="150" fill="#fee2e2"/>
<rect x="246" y="20" width="108" height="150" fill="#fef3c7"/>
<rect x="364" y="20" width="108" height="150" fill="#dcfce7"/>
<rect x="482" y="20" width="108" height="150" fill="#fce7f3"/>
</g>
<g font-size="40" text-anchor="middle">
<text x="64" y="95">🏠</text><text x="182" y="95">🌲</text><text x="300" y="95">🍬</text><text x="418" y="95">🔥</text><text x="536" y="95">🤗</text>
</g>
<g font-size="14" text-anchor="middle" fill="#1f2937">
<text x="64" y="135">familie</text><text x="64" y="155">săracă</text>
<text x="182" y="135">abandonați</text><text x="182" y="155">în pădure</text>
<text x="300" y="135">casa de</text><text x="300" y="155">turtă dulce</text>
<text x="418" y="135">Gretel</text><text x="418" y="155">învinge vrăjitoarea</text>
<text x="536" y="135">se întorc</text><text x="536" y="155">acasă</text>
</g>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#7c3aed">
<text x="64" y="200">1. început</text><text x="182" y="200">2. problemă</text><text x="300" y="200">3. probe</text><text x="418" y="200">4. soluție</text><text x="536" y="200">5. final fericit</text>
</g>
</svg>`
        },
        {
          label: "🃏 Cărțile lui Propp",
          html: `<p>Scriitorul <b>Gianni Rodari</b>, în cartea <i>Grammatica della fantasia</i> (Gramatica fanteziei, 1973), a propus să transformăm funcțiile lui Propp în <b>cărți de joc</b>: tragi câteva cărți la rând și inventezi un basm nou! Încearcă cu acestea:</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "1. Plecarea", back: "Cineva părăsește casa (tatăl pleacă, eroul merge în pădure)." },
              { front: "2. Interdicția", back: "«Nu deschide ușa aceea!», «Nu vorbi cu lupul!»" },
              { front: "3. Încălcarea", back: "Interdicția este încălcată… și iată necazurile!" },
              { front: "4. Darul magic", back: "Un ajutor îi dăruiește eroului un obiect magic." },
              { front: "5. Lupta", back: "Eroul se confruntă cu antagonistul." },
              { front: "6. Victoria", back: "Cel rău este învins." },
              { front: "7. Întoarcerea", back: "Eroul se întoarce acasă." },
              { front: "8. Nunta", back: "Final fericit: eroul se căsătorește sau devine rege." }
            ]
          }
        },
        {
          label: "🔗 Potrivește fabula și morala",
          html: `<p>Leagă fiecare fabulă de morala ei.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Iepurele și broasca țestoasă", "Încet și bine, ajungi departe"],
              ["Greierele și furnica", "Trebuie să te gândești la viitor"],
              ["Vulpea și strugurii", "Cine nu obține un lucru se preface că nu-l vrea"],
              ["Lupul și mielul", "Cel arogant găsește mereu un pretext"],
              ["Leul și șoarecele", "Și cei mici îi pot ajuta pe cei mari"]
            ]
          }
        },
        {
          label: "🌍 Cenușăreasa prin lume (3D)",
          html: `<p>Aceeași poveste călătorește prin lume și își schimbă hainele. Rotește globul și găsește locurile:</p>
<ul>
<li>🇨🇳 <b>Ye Xian</b> (China, secolul al IX-lea): ajutorul magic este un pește, iar ea pierde un conduraș de aur.</li>
<li>🇮🇹 <b>La gatta Cenerentola</b> (Basile, Napoli, 1634): protagonista se numește Zezolla.</li>
<li>🇫🇷 <b>Cendrillon</b> (Perrault, Paris, 1697): apar zâna, dovleacul-trăsură și condurul de cristal.</li>
<li>🇩🇪 <b>Aschenputtel</b> (Grimm, 1812): nu există zână, o ajută un copac magic și niște păsărele.</li>
</ul>
<p>Cercetătorii au adunat sute de versiuni diferite ale acestui basm din lume!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 23, lon: 109, label: "Ye Xian (China)", color: "#ef4444" },
              { lat: 40.85, lon: 14.27, label: "Basile (Napoli)", color: "#22c55e" },
              { lat: 48.86, lon: 2.35, label: "Perrault (Paris)", color: "#3b82f6" },
              { lat: 50.32, lon: 9.4, label: "Grimm (Germania)", color: "#f59e0b" }
            ]
          }
        },
        {
          label: "🎭 Animalele-mască",
          html: `<p>În fabulă fiecare animal este ca o <b>mască</b> de teatru: de îndată ce îl vezi, știi deja cum este.</p>
<table>
<tr><th>Animalul</th><th>Caracterul</th></tr>
<tr><td>🦊 vulpea</td><td>vicleană, șireată</td></tr>
<tr><td>🦁 leul</td><td>puternic, mărinimos, uneori arogant</td></tr>
<tr><td>🐺 lupul</td><td>rău, arogant</td></tr>
<tr><td>🐑 mielul</td><td>nevinovat, neajutorat</td></tr>
<tr><td>🐜 furnica</td><td>harnică, prevăzătoare</td></tr>
<tr><td>🦗 greierele</td><td>nepăsător, leneș</td></tr>
<tr><td>🐢 broasca țestoasă</td><td>înceată, dar constantă</td></tr>
</table>
<p>Folosind animalele, Esop și Fedru puteau să-i critice pe cei puternici… fără să-i numească!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta basmelor și fabulelor: atinge un nod și descoperă de ce",
      nodes: [
        { id: "racconto", label: "Povestire fantastică", x: 50, y: 6, color: "#2563eb", html: "Poveste inventată, cu elemente care în realitate nu există.", why: "Oamenii povestesc de când există limbajul: poveștile serveau să distreze, să explice lumea și să-i învețe pe cei tineri cum să se poarte." },
        { id: "orale", label: "Tradiția orală", x: 50, y: 26, color: "#64748b", html: "Poveștile treceau din gură în gură, din generație în generație.", why: "Secole la rând aproape nimeni nu știa să citească: poveștile se spuneau seara, lângă foc. Ca să fie ținute minte se foloseau formule fixe («A fost odată») și repetiții (trei probe, trei frați)." },
        { id: "fiaba", label: "Basm", x: 22, y: 45, color: "#7c3aed", html: "Povestire cu magie, probe și final fericit.", why: "Cuvântul italian vine din latinescul <i>fabula</i>, «povestire». Basmele dau speranță: chiar și cel mai mic și mai sărac, dacă este curajos și bun, poate învinge." },
        { id: "favola", label: "Fabulă", x: 78, y: 45, color: "#d97706", html: "Povestire scurtă cu animale vorbitoare și o morală.", why: "Și «favola» vine din <i>fabula</i>. În antichitate era un mod de a învăța și de a-i critica pe cei puternici fără riscuri, făcând animalele să vorbească în locul oamenilor." },
        { id: "personaggi", label: "Rolurile personajelor", x: 10, y: 70, color: "#ec4899", html: "Protagonist, antagonist, ajutor, obiect magic.", why: "Propp a descoperit că în basmele fantastice personajele își schimbă numele, dar <b>rolurile</b> sunt mereu aceleași: a identificat șapte (printre care eroul, antagonistul, dăruitorul și ajutorul)." },
        { id: "propp", label: "Cele 31 de funcții ale lui Propp", x: 34, y: 70, color: "#a855f7", html: "Acțiunile tipice care construiesc orice basm.", why: "Vladimir Propp le-a descris în cartea <i>Morfologia basmului</i> (1928), comparând o sută de basme fantastice rusești. Metoda lui a fost folosită apoi și pentru a studia filme și romane." },
        { id: "morale", label: "Morala", x: 66, y: 70, color: "#16a34a", html: "Învățătura finală a fabulei.", why: "Esop și Fedru scriau ca să învețe cum se trăiește: morala rezumă într-o frază lecția poveștii. Multe expresii («a face ca vulpea cu strugurii») vin chiar din fabule." },
        { id: "animali", label: "Animale-simbol", x: 90, y: 70, color: "#f59e0b", html: "Vulpea vicleană, leul puternic, furnica harnică.", why: "Animalele au caractere «fixe» pe care toți le recunosc imediat: așa fabula poate fi foarte scurtă, pentru că nu trebuie explicat cum este personajul." },
        { id: "autori", label: "Culegători și autori", x: 50, y: 92, color: "#0ea5e9", html: "Esop, Fedru, Basile, Perrault, Grimm, Andersen, Calvino, Rodari.", why: "Mulți dintre ei nu au inventat poveștile: le-au <b>cules</b> din glasul poporului și le-au pus în scris, salvându-le de la uitare. Alții, ca Andersen și Rodari, au scris povești noi." }
      ],
      edges: [
        ["racconto", "orale", "se naște din"],
        ["orale", "fiaba", "a dat naștere"],
        ["orale", "favola", "și"],
        ["fiaba", "personaggi", "are"],
        ["fiaba", "propp", "studiat de"],
        ["favola", "morale", "se încheie cu"],
        ["favola", "animali", "folosește"],
        ["orale", "autori", "pusă în scris de"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: autori și structură",
      questions: [
        { type: "mc", q: "Care este cel mai faimos autor grec de fabule?", options: ["Esop", "Andersen", "Perrault"], answer: 0, explain: "Esop a trăit în Grecia în secolul al VI-lea î.Hr." },
        { type: "mc", q: "Cum se numește «cel rău» din basm?", options: ["ajutor", "antagonist", "protagonist"], answer: 1, explain: "Antagonistul îl împiedică pe protagonist." },
        { type: "order", q: "Pune în ordine structura basmului.", items: ["Situația inițială", "Ruperea echilibrului", "Peripeții și probe", "Deznodământ", "Situația finală"], explain: "Început, problemă, probe, soluție, final fericit." }
      ]
    }
  ],
  glossary: [
    { t: "Basm", d: "Povestire fantastică cu magie, probe de trecut și final fericit." },
    { t: "Fabulă", d: "Povestire scurtă cu animale vorbitoare, care se încheie cu o morală." },
    { t: "Morală", d: "Învățătura care se desprinde dintr-o fabulă." },
    { t: "Protagonist", d: "Personajul principal al poveștii." },
    { t: "Antagonist", d: "Personajul care îl împiedică pe protagonist." },
    { t: "Ajutor", d: "Personajul care îl ajută pe protagonist (zână, animal magic)." },
    { t: "Obiect magic", d: "Obiect cu puteri speciale care îl ajută pe erou (baghetă, cizme)." },
    { t: "Final fericit", d: "Sfârșit fericit al poveștii." },
    { t: "Tradiție orală", d: "Povești transmise din gură în gură, din generație în generație." },
    { t: "Funcțiile lui Propp", d: "Cele 31 de acțiuni tipice ale basmelor fantastice identificate de Vladimir Propp (1928)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce element există în basm, dar de obicei nu în fabulă?", options: ["magia", "personajele", "un început"], answer: 0, explain: "Magia (zâne, vrăji, obiecte magice) este tipică pentru basm." },
      { type: "mc", q: "«Greierele și furnica» este…", options: ["un basm", "o fabulă"], answer: 1, explain: "Animale vorbitoare și morală: este o fabulă (Esop, apoi La Fontaine)." },
      { type: "tf", q: "Basmele încep adesea cu «A fost odată».", answer: true, explain: "Este formula care arată un timp nedefinit." },
      { type: "text", q: "Cum se numește învățătura de la sfârșitul unei fabule?", answer: ["morala", "morală", "morala fabulei"], explain: "Morala." },
      { type: "mc", q: "În basmul Cenușăresei, zâna cea bună este…", options: ["antagonistul", "ajutorul", "protagonista"], answer: 1, explain: "O ajută pe Cenușăreasa să meargă la bal." },
      { type: "mc", q: "Cine a cules basmele populare germane, precum Hänsel și Gretel?", options: ["frații Grimm", "Esop", "Fedru"], answer: 0, explain: "Jacob și Wilhelm Grimm, din 1812." },
      { type: "tf", q: "În fabule, fiecare animal reprezintă un caracter omenesc.", answer: true, explain: "De exemplu, vulpea este viclenia, furnica este hărnicia." },
      { type: "order", q: "Pune autorii în ordine cronologică, de la cel mai vechi.", items: ["Esop", "Fedru", "Perrault", "Frații Grimm", "Italo Calvino"], explain: "Sec. VI î.Hr., sec. I d.Hr., 1697, 1812, 1956." },
      { type: "mc", q: "Care este morala fabulei «Iepurele și broasca țestoasă»?", options: ["Încet și bine, ajungi departe", "Unirea face puterea", "Cel mai puternic câștigă mereu"], answer: 0, explain: "Broasca țestoasă, înceată dar constantă, îl învinge pe iepurele încrezut." },
      { type: "mc", q: "Care scriitor italian a cules 200 de «Fiabe italiane» în 1956?", options: ["Gianni Rodari", "Italo Calvino", "Carlo Collodi"], answer: 1, explain: "Italo Calvino, din toate regiunile Italiei." },
      { type: "tf", q: "În fabulă există întotdeauna final fericit.", answer: false, explain: "Nu întotdeauna: în «Lupul și mielul» mielul este mâncat. Fabula are mereu o morală, nu mereu un final fericit." },
      { type: "mc", q: "Napolitanul Giambattista Basile a scris…", options: ["Lo cunto de li cunti", "Le avventure di Pinocchio", "Favole al telefono"], answer: 0, explain: "Una dintre primele culegeri de basme din Europa (1634–1636)." }
    ]
  }
});

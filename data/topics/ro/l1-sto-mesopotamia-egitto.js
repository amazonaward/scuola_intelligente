TOPIC('ro', {
  id: "l1-sto-mesopotamia-egitto",
  title: "Mesopotamia și Egiptul",
  intro: "Două mari fluvii, <b>Tigrul și Eufratul</b>, și unul încă și mai celebru, <b>Nilul</b>, au văzut nașterea primelor orașe, a primelor legi scrise și a primelor state din istorie. În aceste „civilizații fluviale”, apa era viață și putere: cine știa s-o stăpânească, comanda. În această lecție comparăm două lumi foarte diferite între ele, <b>Mesopotamia</b> cetăților-stat și <b>Egiptul</b> faraonului, și descoperim ce ne-au lăsat: scrisul, matematica, codurile de legi, piramidele.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "1. Civilizațiile fluviale: darul (și riscul) apei",
      html: `<p>Între mileniile al IV-lea și al III-lea î.Hr. au apărut patru mari civilizații pe malurile fluviilor: <b>Mesopotamia</b> (Tigru și Eufrat), <b>Egiptul</b> (Nil), <b>valea Indusului</b> și <b>valea Fluviului Galben</b>. Ce le leagă?</p>
<ul>
<li><b>Terenuri fertile</b>: fluviile depun nămol care face solul foarte productiv.</li>
<li><b>Controlul apei</b>: trebuie săpate <b>canale</b>, construite diguri și rezervoare. Sunt necesare muncă colectivă, calendare, funcționari: se naște un <b>stat</b>.</li>
<li><b>Surplus</b>: recoltele bogate întrețin meșteșugari, preoți, scribi și soldați.</li>
<li><b>Scrisul</b>, pentru a ține evidența magaziilor și a legilor.</li>
</ul>
<p>Istoricul Karl Wittfogel a vorbit despre „societăți hidraulice”; astăzi definiția este discutată, dar rămâne o idee utilă: <b>apă → organizare → putere</b>.</p>
<p><b>Mesopotamia</b> înseamnă „țara dintre cele două fluvii” (în greacă). Nilul, în schimb, are o creștere de apă previzibilă (din iulie până în octombrie) și deșert pe ambele părți: <b>Egiptul</b> este „darul Nilului”, după cum a scris istoricul grec Herodot.</p>`
    },
    {
      type: "3d",
      title: "Hartă 3D: de la Uruk la Ramses",
      scene: "spacetime",
      caption: "Baza este harta Orientului Apropiat și a Egiptului, înălțimea este timpul (3500–1000 î.Hr.). Atinge evenimentele: săgețile leagă cauzele de efecte.",
      options: {
        lat: [22, 38],
        lon: [28, 52],
        years: [-3500, -1000],
        places: [
          { lat: 30.05, lon: 31.25, label: "Memfis / Cairo" },
          { lat: 25.7, lon: 32.65, label: "Teba" },
          { lat: 32.5, lon: 44.4, label: "Babilon" },
          { lat: 36.35, lon: 43.15, label: "Ninive" },
          { lat: 30.96, lon: 46.1, label: "Ur" }
        ],
        events: [
          { id: "uruk", lat: 31.32, lon: 45.64, year: -3300, label: "Uruk: oraș și scris", html: "În orașul sumerian Uruk se naște <b>scrisul</b>: semne pe tăblițe de lut pentru a înregistra grâu, bere, turme. Este unul dintre primele centre urbane din istorie." },
          { id: "unif", lat: 29.85, lon: 31.25, year: -3100, label: "Unificarea Egiptului", html: "În jurul anului 3100 î.Hr. (tradiția: regele Menes/Narmer), Egiptul de Sus și Egiptul de Jos sunt unite într-un singur regat cu capitala la Memfis.", causes: [] },
          { id: "sargon", lat: 32.5, lon: 44.3, year: -2334, label: "Sargon din Akkad", html: "Sargon învinge cetățile sumeriene și creează primul <b>imperiu</b> din istorie, de la Golful Persic la Mediterană." , causes: ["uruk"] },
          { id: "giza", lat: 29.98, lon: 31.13, year: -2560, label: "Piramida lui Keops", html: "Faraonul Keops (Khufu) pune să se construiască la Giza Marea Piramidă, înaltă inițial de circa 146 m: simbol al puterii absolute a faraonului-zeu.", causes: ["unif"] },
          { id: "hammurabi", lat: 32.54, lon: 44.42, year: -1754, label: "Codul lui Hammurabi", html: "Regele Babilonului, Hammurabi (circa 1792–1750 î.Hr.), pune să se graveze pe o stelă de bazalt 282 de legi: cea mai completă culegere din lumea mesopotamiană.", causes: ["sargon"] },
          { id: "hyksos", lat: 30.9, lon: 31.8, year: -1650, label: "Hicsoșii în Egipt", html: "Populații asiatice dotate cu care de luptă și cai cuceresc Delta Nilului; vor fi alungate în jurul anului 1550 î.Hr. de egipteni, care învață să folosească carele și arme mai bune din bronz.", causes: ["giza"] },
          { id: "nuovo", lat: 25.7, lon: 32.65, year: -1550, label: "Regatul Nou", html: "Odată cu alungarea hicsoșilor începe Regatul Nou (1550–1070 î.Hr.): Egiptul devine o putere militară cu capitala la Teba; faraoni precum Thutmes al III-lea cuceresc Siria.", causes: ["hyksos"] },
          { id: "akhenaton", lat: 27.65, lon: 30.9, year: -1350, label: "Akhenaton și Aton", html: "Faraonul Amenhotep al IV-lea se numește Akhenaton și impune cultul unui singur zeu, discul solar <b>Aton</b>, întemeind orașul Akhetaton (Amarna). La moartea lui se revine la politeism.", causes: ["nuovo"] },
          { id: "qadesh", lat: 34.57, lon: 36.52, year: -1274, label: "Bătălia de la Kadesh", html: "Ramses al II-lea se înfruntă cu hitiții la Kadesh (Siria): nu există un învingător clar. Prin 1259 î.Hr., cele două regate semnează <b>primul tratat de pace scris</b> care s-a păstrat.", causes: ["nuovo"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Mesopotamia: cetăți-stat și imperii",
      html: `<p>În câmpia dintre Tigru și Eufrat, săracă în piatră și metale, dar bogată în argilă, s-au succedat multe popoare.</p>
<ul>
<li><b>Sumerienii</b> (din mileniul al IV-lea î.Hr.): trăiesc în <b>cetăți-stat</b> independente și adesea în război: Uruk, Ur, Lagaș, Kiș. În centrul fiecărui oraș se afla <b>zigguratul</b>, un turn în trepte cu un templu în vârf. Regele-preot guverna în numele zeului orașului.</li>
<li><b>Akkadienii</b>: <b>Sargon</b> (circa 2334 î.Hr.) unifică regiunea în primul imperiu.</li>
<li><b>Babilonienii</b>: orașul <b>Babilon</b> devine puternic cu <b>Hammurabi</b> (circa 1792–1750 î.Hr.). O a doua înflorire a avut loc cu <b>Nabucodonosor al II-lea</b> (secolul al VI-lea î.Hr.).</li>
<li><b>Asirienii</b>: din nordul Mesopotamiei, între secolele al IX-lea și al VII-lea î.Hr., creează un imperiu cu o armată de fier și o cruzime celebră; Ninive găzduia biblioteca lui <b>Assurbanipal</b> (peste 20.000 de tăblițe).</li>
</ul>
<p>Cu timpul, regiunea a fost cucerită de perșii lui <b>Cirus cel Mare</b> (539 î.Hr., căderea Babilonului).</p>`
    },
    {
      type: "text",
      title: "3. Scrierea cuneiformă și cultura mesopotamiană",
      html: `<p>Scrisul s-a născut din nevoi foarte practice: <b>a număra</b>. Primele semne (circa 3300 î.Hr.) sunt pictograme pe tăblițe de lut: un cap de bou, un spic, un număr. Apoi semnele devin tot mai stilizate și se imprimă cu o trestie cu vârf triunghiular: scrierea <b>cuneiformă</b> (de la „cuneus”, formă de pană). Se adaptează la mai multe limbi (sumeriană, akkadiană, hitită, persană veche).</p>
<ul>
<li><b>Scribii</b> învățau ani de zile în „casele tăblițelor” (edubba): erau birocrația statului.</li>
<li><b>Literatura</b>: <b>Epopeea lui Ghilgameș</b>, poem despre regele din Uruk în căutarea nemuririi, cu o poveste a <b>potopului</b> foarte asemănătoare cu cea biblică.</li>
<li><b>Matematica</b>: sistem numeric în baza <b>șaizecimală</b> (60). De aici provin cele 60 de minute ale orei și cele 360 de grade ale cercului.</li>
<li><b>Astronomia</b>: au observat cu precizie cerul, au prevăzut eclipsele și au imaginat zodiacul.</li>
<li><b>Tehnologia</b>: roata (circa 3500 î.Hr.), plugul, canalele.</li>
</ul>`
    },
    {
      type: "svg",
      title: "De la desen la pană: cum se schimbă scrisul",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<text x="300" y="32" font-size="18" font-weight="bold" text-anchor="middle" fill="#78350f">De la imagine la semn</text>
<g stroke="#78350f" stroke-width="3" fill="none">
<path d="M70 120 Q55 90 80 80 Q110 70 120 100 Q130 130 105 150 Z"/>
<path d="M200 140 L260 90 M215 100 L260 140 M190 120 L270 120"/>
<path d="M360 80 L380 140 M395 80 L415 140 M420 100 L440 100"/>
</g>
<g fill="#78350f"><polygon points="500,90 520,90 510,130"/><polygon points="530,90 550,90 540,130"/><polygon points="510,135 530,135 520,175"/></g>
<text x="95" y="190" font-size="15" text-anchor="middle" fill="#0f172a">desenul unui</text>
<text x="95" y="210" font-size="15" text-anchor="middle" fill="#0f172a">cap de bou</text>
<text x="230" y="190" font-size="15" text-anchor="middle" fill="#0f172a">semn rotit</text>
<text x="230" y="210" font-size="15" text-anchor="middle" fill="#0f172a">și simplificat</text>
<text x="400" y="190" font-size="15" text-anchor="middle" fill="#0f172a">semne mai rapide</text>
<text x="400" y="210" font-size="15" text-anchor="middle" fill="#0f172a">pe argilă</text>
<text x="520" y="190" font-size="15" text-anchor="middle" fill="#0f172a">cuneiform</text>
<text x="520" y="210" font-size="15" text-anchor="middle" fill="#0f172a">cu trestia</text>
<text x="300" y="262" font-size="15" text-anchor="middle" fill="#7c2d12">Schemă simplificată: evoluția a cerut multe secole.</text>
</svg>`,
      caption: "Cuneiformul se naște din pictograme pe argilă proaspătă, folosite pentru ținerea evidenței."
    },
    {
      type: "quiz",
      title: "Mini-test: Mesopotamia",
      questions: [
        { type: "mc", q: "Ce era zigguratul?", options: ["Un turn în trepte cu un templu în vârf", "Un tip de navă", "Un cod de legi"], answer: 0, explain: "Era centrul religios al orașului sumerian." },
        { type: "mc", q: "De ce are ora 60 de minute?", options: ["Din moștenirea sistemului șaizecimal mesopotamian", "Prin decizia lui Ramses al II-lea", "Din cauza lungimii Nilului"], answer: 0, explain: "Babilonienii numărau în baza 60, iar tradiția a ajuns până la noi." },
        { type: "tf", q: "Scrierea cuneiformă era gravată cu un vârf pe piatră.", answer: false, explain: "Se imprima cu o trestie cu vârf triunghiular pe argilă proaspătă." }
      ]
    },
    {
      type: "text",
      title: "4. Codul lui Hammurabi și justiția scrisă",
      html: `<p>În jurul anului <b>1754 î.Hr.</b>, regele Babilonului, <b>Hammurabi</b>, a pus să se graveze pe o stelă neagră de bazalt (înaltă de peste 2 metri, astăzi la Muzeul Luvru) <b>282 de legi</b>. În partea de sus, regele primește misiunea de la zeul dreptății, <b>Șamaș</b>. Nu este primul cod (înaintea lui a existat cel al lui <b>Ur-Nammu</b>, circa 2100 î.Hr.), dar este cel mai complet.</p>
<ul>
<li><b>Legea talionului</b>: „ochi pentru ochi, dinte pentru dinte” — pedeapsa trebuie să fie proporțională cu fapta și nu mai mare: o formă de limitare a răzbunării private.</li>
<li>Dar pedeapsa <b>depinde de clasa socială</b>: dacă un nobil rănește un alt nobil, plătește cu aceeași rană; dacă rănește un om de rang inferior, plătește o amendă.</li>
<li>Reguli privind <b>comerțul, împrumuturile, căsătoria, moștenirea, salariile</b> și răspunderea zidarilor și a medicilor.</li>
<li>Legile sunt <b>scrise și publice</b>: judecătorul nu poate hotărî după bunul plac.</li>
</ul>
<p>Pentru noi, noutatea importantă este principiul <b>certitudinii dreptului</b>: toți trebuie să cunoască legea. Astăzi ni se par dure și inegale, dar pe vremea aceea erau un pas înainte față de justiția arbitrară a celui mai puternic.</p>`
    },
    {
      type: "decision",
      title: "Babilon, circa 1760 î.Hr.: trebuie justiția să fie scrisă?",
      html: `<p>Ești consilierul lui Hammurabi. Regatul a crescut și cuprinde multe orașe cu obiceiuri și judecători diferiți. Negustorii se plâng: același litigiu poate avea rezultate opuse de la un oraș la altul. Preoții-judecători susțin că dreptatea se află în mâinile zeilor și în deciziile lor de la caz la caz.</p>`,
      question: "Ce îl sfătuiești pe rege?",
      options: [
        { label: "Să lase judecătorii locali să hotărască de la caz la caz, ca întotdeauna.", outcome: "Se păstrează tradițiile locale, dar justiția rămâne imprevizibilă, iar negustorii nu au încredere: schimburile au de suferit." },
        { label: "Să adune legi egale pentru tot regatul și să le pună să fie gravate în locuri publice.", outcome: "Regatul devine mai unit și mai previzibil: supușii știu ce riscă. Regele își întărește autoritatea, prezentându-se drept garant al dreptății." },
        { label: "Să încredințeze totul unui singur mare tribunal al regelui, la Babilon.", outcome: "Justiția se centralizează, dar timpii devin foarte lungi, iar mulți supuși nu pot ajunge în capitală." }
      ],
      answer: 1,
      explain: "Hammurabi a ales calea <b>legilor scrise și publice</b>: stela a fost așezată în locuri unde putea fi citită (dar mulți nu știau să citească: judecătorii și scribii făceau pe intermediarii). Era și un instrument de propagandă: regele drept, dorit de zei."
    },
    {
      type: "text",
      title: "5. Egiptul: darul Nilului și faraonul",
      html: `<p>Egiptul este o fâșie de pământ fertil („Țara Neagră”) înconjurată de deșert („Țara Roșie”). Nilul curge de la sud la nord și se împarte într-o mare <b>deltă</b>. În fiecare an, vara, se revarsă și depune nămol; de aceea egiptenii au inventat un <b>calendar de 365 de zile</b>, bazat pe creșterile apei și pe steaua Sirius.</p>
<p><b>O istorie de 3000 de ani</b>, împărțită în:</p>
<ul>
<li><b>Perioada predinastică</b> și unificarea (circa <b>3100 î.Hr.</b>): Egiptul de Sus (sud) și Egiptul de Jos (nord, cu Delta) se unesc sub un singur rege.</li>
<li><b>Regatul Vechi</b> (circa 2686–2181 î.Hr.): capitala la Memfis, marile <b>piramide de la Giza</b> (Keops, Kefren, Mikerinos).</li>
<li><b>Regatul Mijlociu</b> (circa 2055–1650 î.Hr.): reunificare, capitala la Teba, artă și literatură; apoi invazia <b>hicsoșilor</b>.</li>
<li><b>Regatul Nou</b> (circa 1550–1070 î.Hr.): epoca imperială și a marilor faraoni: <b>Hatșepsut</b> (o femeie-faraon), <b>Thutmes al III-lea</b>, <b>Amenhotep al IV-lea/Akhenaton</b>, <b>Tutankhamon</b>, <b>Ramses al II-lea</b>.</li>
<li><b>Epoca târzie</b>: invazii ale asirienilor, perșilor (525 î.Hr.), apoi cucerirea lui <b>Alexandru cel Mare</b> (332 î.Hr.) și a Ptolemeilor, în sfârșit Roma (30 î.Hr.).</li>
</ul>
<p><b>Faraonul</b> era rege și zeu viu, fiu al zeului Horus și garant al <b>ordinii cosmice</b> (Maat). În teorie, deținea tot pământul. Guverna cu ajutorul unui <b>vizir</b>, al funcționarilor-<b>scribi</b> și al preoților.</p>`
    },
    {
      type: "svg",
      title: "Piramida socială a Egiptului",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef9c3"/>
<polygon points="300,20 160,270 440,270" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<line x1="270" y1="80" x2="330" y2="80" stroke="#92400e" stroke-width="2"/>
<line x1="235" y1="140" x2="365" y2="140" stroke="#92400e" stroke-width="2"/>
<line x1="200" y1="200" x2="400" y2="200" stroke="#92400e" stroke-width="2"/>
<text x="300" y="68" font-size="16" font-weight="bold" text-anchor="middle" fill="#7c2d12">Faraon</text>
<text x="300" y="118" font-size="14" text-anchor="middle" fill="#0f172a">Vizir, preoți, nobili</text>
<text x="300" y="175" font-size="14" text-anchor="middle" fill="#0f172a">Scribi, soldați, meșteșugari</text>
<text x="300" y="240" font-size="14" text-anchor="middle" fill="#0f172a">Țărani (marea majoritate)</text>
<text x="500" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Sclavi (puțini)</text>
<text x="90" y="262" font-size="14" text-anchor="middle" fill="#0f172a">Prizonieri</text>
</svg>`,
      caption: "Societatea egipteană era puternic ierarhizată; țăranii, în timpul inundației, munceau și la marile șantiere ale statului."
    },
    {
      type: "text",
      title: "6. Scris, religie și viața de după moarte",
      html: `<ul>
<li><b>Hieroglifele</b> („inscripții sacre”): scriere prin imagini care combină semne ce indică sunete, idei și categorii. Alături, pentru viața de zi cu zi, scrierea <b>hieratică</b> și apoi cea <b>demotică</b>. Se scria pe <b>papirus</b>, obținut dintr-o plantă a Nilului.</li>
<li>Hieroglifele au fost uitate și descifrate în <b>1822</b> de <b>Jean-François Champollion</b> datorită <b>pietrei de la Rosetta</b> (descoperită în 1799), care reproduce același text în hieroglife, demotică și greacă.</li>
<li><b>Religie politeistă</b>: Ra (soarele), Osiris (lumea de dincolo), Isis, Horus, Anubis. Zeii au adesea capete de animale.</li>
<li><b>Lumea de dincolo</b>: după moarte, defunctul este judecat: inima lui este cântărită în raport cu pana zeiței Maat. De aceea se practica <b>mumificarea</b> (conservarea corpului) și se construiau <b>morminte</b> cu comori și „Cartea morților”.</li>
<li><b>Științe</b>: geometrie pentru retrasarea hotarelor după inundații, medicină practică (papirusuri medicale), astronomie.</li>
</ul>
<p><b>Piramidele</b> sunt morminte monumentale ale faraonilor din Regatul Vechi, construite de muncitori organizați (nu de sclavi, conform descoperirilor arheologice de lângă Giza) cu rampe și blocuri de piatră. Apoi, de teama jafului, faraonii din Regatul Nou s-au făcut înmormântați în morminte săpate în stânca din <b>Valea Regilor</b>, lângă Teba.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: citim un cartuș",
      html: `<p>Numele unui faraon se scria într-un oval alungit, <b>cartușul</b>. Champollion a înțeles că hieroglifele din cartușele lui Ptolemeu și Cleopatra, de pe piatra de la Rosetta, indicau <b>sunete</b> și nu doar idei: de acolo a început să descifreze totul. Încearcă să gândești ca el:</p>
<ol>
<li>Piatra are același text în <b>trei scrieri</b>: greaca se putea citi, deci oferea traducerea.</li>
<li>Numele „Ptolemeu” apare în greacă de mai multe ori: caută aceeași secvență în hieroglife, într-un cartuș.</li>
<li>Asociază fiecare semn cu un sunet și compară cu „Cleopatra”: literele comune (P, O, L, T) corespund acelorași semne.</li>
</ol>
<p>Este metoda cu care se descifrează orice scriere pierdută: este nevoie de o cheie comparativă și de multă răbdare.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: ceasul tău este babilonian",
      html: `<p>De fiecare dată când te uiți la ceas sau măsori un unghi, folosești moșteniri mesopotamiene:</p>
<ul>
<li>1 oră = 60 de minute, 1 minut = 60 de secunde: baza 60;</li>
<li>cercul are 360 de grade (6 × 60);</li>
<li>zilele săptămânii sunt legate de șapte astre vizibile cu ochiul liber (Soare, Lună, Marte, Mercur, Jupiter, Venus, Saturn), așa cum se vede încă în denumirile românești: luni, marți, miercuri...</li>
</ul>
<p>Iar de la Egipt moștenim <b>calendarul solar de 365 de zile</b>, corectat apoi de romani prin Iulius Cezar (anul bisect).</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Blestemul lui Tutankhamon",
      html: `<p>În <b>1922</b>, arheologul britanic <b>Howard Carter</b> a descoperit în Valea Regilor mormântul aproape intact al lui <b>Tutankhamon</b>, faraon mort foarte tânăr (circa 18–19 ani) în jurul anului 1323 î.Hr., fiu sau rudă a lui Akhenaton. Când a murit, în 1923, finanțatorul Lord Carnarvon, s-a vorbit despre „blestemul faraonului”. Dar arheologii au demonstrat că majoritatea participanților au murit de moarte naturală și la vârste înaintate (Carter în 1939): „blestemul” este o invenție a ziarelor. Mormântul conținea peste 5000 de obiecte, printre care celebra mască funerară de aur.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Primul „tratat de pace” din istorie",
      html: `<p>După bătălia de la Kadesh (circa 1274 î.Hr.), faraonul <b>Ramses al II-lea</b> și regele hitit <b>Hattusili al III-lea</b> au semnat, prin 1259 î.Hr., un tratat de pace și alianță din care avem atât versiunea egipteană (gravată pe pereții templului de la Karnak), cât și pe cea hitită (tăblițe de lut). O copie este expusă la sediul ONU din New York ca exemplu de acord internațional antic.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege Mesopotamia și Egiptul",
      intro: "Două civilizații fluviale, două soluții. Iată câteva moduri de a le compara.",
      tabs: [
        {
          label: "⚖️ Comparație pe două coloane",
          html: `<table>
<tr><th></th><th>Mesopotamia</th><th>Egiptul</th></tr>
<tr><td><b>Fluviul</b></td><td>Tigru și Eufrat: viituri bruște și distrugătoare</td><td>Nil: inundație regulată și previzibilă</td></tr>
<tr><td><b>Teritoriul</b></td><td>Câmpie deschisă, ușor de invadat</td><td>Deșerturi pe laturi: bine protejat</td></tr>
<tr><td><b>Statul</b></td><td>Multe cetăți-stat, apoi imperii</td><td>Un regat unit sub faraon</td></tr>
<tr><td><b>Regele</b></td><td>Rege-preot, reprezentant al zeilor</td><td>Faraon: zeu viu</td></tr>
<tr><td><b>Scrisul</b></td><td>Cuneiform pe argilă</td><td>Hieroglife pe papirus</td></tr>
<tr><td><b>Monumente</b></td><td>Zigguratul, din cărămidă</td><td>Piramide și temple, din piatră</td></tr>
<tr><td><b>Lumea de dincolo</b></td><td>Tristă și prăfuită</td><td>Viață fericită pentru cine trece de judecată</td></tr>
</table>
<p>Geografia explică mult: un fluviu capricios și un teritoriu deschis produc orașe în conflict și popoare agresive; un fluviu regulat și un deșert protector produc o unitate stabilă și o viziune optimistă asupra vieții.</p>`
        },
        {
          label: "🗺️ Unde se află: rotește globul",
          html: `<p>Rotește globul ca să localizezi marile orașe ale celor două civilizații.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.3, lon: 45.6, label: "Uruk", color: "#f97316" },
              { lat: 30.96, lon: 46.1, label: "Ur", color: "#f97316" },
              { lat: 32.5, lon: 44.4, label: "Babilon", color: "#ef4444" },
              { lat: 36.35, lon: 43.15, label: "Ninive", color: "#ef4444" },
              { lat: 29.98, lon: 31.13, label: "Giza", color: "#2563eb" },
              { lat: 25.7, lon: 32.65, label: "Teba", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 3], color: "#f97316" }, { points: [4, 5], color: "#2563eb" }]
          }
        },
        {
          label: "📅 Linia timpului",
          html: `<p>Așază pe linia timpului evenimentele: vezi cât de lungi sunt aceste istorii.</p>`,
          widget: "timeline",
          options: {
            unit: "ani",
            events: [
              { year: -3300, label: "Scrisul la Uruk", icon: "✍️" },
              { year: -3100, label: "Unificarea Egiptului", icon: "👑" },
              { year: -2560, label: "Piramida lui Keops", icon: "🔺" },
              { year: -2334, label: "Sargon din Akkad", icon: "⚔️" },
              { year: -1754, label: "Codul lui Hammurabi", icon: "⚖️" },
              { year: -1550, label: "Regatul Nou", icon: "🏛️" },
              { year: -1350, label: "Akhenaton", icon: "☀️" },
              { year: -1274, label: "Kadesh", icon: "🛡️" },
              { year: -539, label: "Perșii la Babilon", icon: "🏰" },
              { year: -332, label: "Alexandru în Egipt", icon: "🐎" }
            ]
          }
        },
        {
          label: "🃏 Cartonașe de recapitulare",
          html: `<p>Întoarce cartonașele ca să repeți cuvintele-cheie.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Zigguratul", back: "Turn în trepte cu un templu în vârf, centrul orașului sumerian" },
              { front: "Cuneiformul", back: "Scriere cu semne în formă de pană pe argilă" },
              { front: "Hammurabi", back: "Rege al Babilonului (circa 1792–1750 î.Hr.), autorul celebrului cod de 282 de legi" },
              { front: "Faraonul", back: "Regele-zeu al Egiptului, garant al ordinii (Maat)" },
              { front: "Rosetta", back: "Stelă cu același text în trei scrieri: cheia descifrării hieroglifelor" },
              { front: "Legea talionului", back: "Pedeapsă proporțională cu fapta („ochi pentru ochi”)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta civilizațiilor fluviale: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "fiumi", label: "Marile fluvii", x: 50, y: 6, color: "#0ea5e9", html: "Tigrul, Eufratul și Nilul oferă apă, nămol și căi de transport.", why: "Acolo unde apa este abundentă și previzibilă (sau gestionabilă), pământul rodește mult: mai multă hrană înseamnă mai mulți oameni și un surplus pentru întreținerea specialiștilor." },
        { id: "canali", label: "Irigații și control", x: 18, y: 30, color: "#16a34a", html: "Canale, diguri, calendare ale inundațiilor.", why: "Pentru a săpa și a întreține canalele sunt necesare muncă colectivă și coordonare. Puterea centrală se afirmă tocmai pentru că organizează și apără aceste lucrări." },
        { id: "surplus", label: "Surplus și magazii", x: 82, y: 30, color: "#eab308", html: "Recoltele se adună în hambarele templului sau ale palatului.", why: "Cine administrează magaziile are nevoie să înregistreze cât intră și cât iese: se naște contabilitatea." },
        { id: "scrittura", label: "Scrisul", x: 50, y: 50, color: "#a855f7", html: "Cuneiform în Mesopotamia, hieroglife în Egipt.", why: "Inventat pentru a număra rezervele și datoriile, apoi folosit pentru legi, scrisori, rugăciuni și povești. Marchează nașterea istoriei." },
        { id: "stato", label: "Stat și rege", x: 20, y: 75, color: "#ef4444", html: "Cetăți-stat sumeriene, imperii mesopotamiene, regatul unit al Egiptului.", why: "Puterea se legitimează prin religie: regele este reprezentantul zeului (Mesopotamia) sau este el însuși un zeu (Egipt). Armata, impozitele și birocrația susțin statul." },
        { id: "leggi", label: "Legi scrise", x: 80, y: 75, color: "#7c2d12", html: "Codul lui Ur-Nammu, codul lui Hammurabi.", why: "În societățile mari și complexe nu te mai poți baza doar pe tradiția orală: sunt necesare reguli comune și publice pentru a rezolva conflictele și a garanta comerțul." },
        { id: "cultura", label: "Știință și religie", x: 50, y: 95, color: "#0f766e", html: "Matematică, astronomie, mumificare, temple.", why: "Calcularea calendarului, măsurarea câmpurilor după inundații și construirea marilor lucrări stimulează matematica și astronomia; teama de moarte și nevoia de ordine produc mituri și rituri." }
      ],
      edges: [
        ["fiumi", "canali", "necesită"],
        ["fiumi", "surplus", "produc"],
        ["canali", "stato", "întăresc"],
        ["surplus", "scrittura", "cere"],
        ["scrittura", "leggi", "permite"],
        ["stato", "leggi", "emite"],
        ["scrittura", "cultura", "transmite"],
        ["stato", "cultura", "finanțează"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: Egiptul",
      questions: [
        { type: "mc", q: "Cine a descifrat hieroglifele în 1822?", options: ["Howard Carter", "Jean-François Champollion", "Herodot"], answer: 1, explain: "Champollion a folosit piatra de la Rosetta." },
        { type: "mc", q: "Ce era faraonul pentru egipteni?", options: ["Un rege-zeu, garant al ordinii cosmice", "Un simplu judecător", "Un comandant militar ales"], answer: 0, explain: "Era considerat fiu al zeilor și garant al lui Maat." },
        { type: "tf", q: "Piramidele de la Giza aparțin Regatului Nou.", answer: false, explain: "Au fost construite în Regatul Vechi (circa 2600–2500 î.Hr.)." },
        { type: "text", q: "Cum se numește scrierea egipteană prin imagini?", answer: ["hieroglife", "hieroglifă", "hieroglifele"], explain: "Hieroglife, „inscripții sacre”." }
      ]
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li>Civilizațiile fluviale apar acolo unde apa oferă surplus și cere organizare: Mesopotamia, Egiptul, Indusul, Fluviul Galben.</li>
<li><b>Mesopotamia</b>: sumerieni (cetăți-stat, ziggurat, cuneiform), akkadieni (Sargon, primul imperiu), babilonieni (<b>Hammurabi</b>, circa 1792–1750 î.Hr.), asirieni.</li>
<li><b>Codul lui Hammurabi</b>: 282 de legi scrise, talion, pedepse diferite în funcție de clasa socială.</li>
<li><b>Egiptul</b>: unificare circa 3100 î.Hr.; Regatul Vechi (piramide), Mijlociu, Nou; faraon rege-zeu; hieroglife descifrate în 1822.</li>
<li>Moștenire: scrisul, baza 60, calendarul de 365 de zile, geometria, legile scrise.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Civilizație fluvială", d: "Societate apărută de-a lungul unui mare fluviu, care îi folosește și îi controlează apele." },
    { t: "Cetate-stat", d: "Oraș independent, cu propriul guvern și teritoriu." },
    { t: "Ziggurat", d: "Turn mesopotamian în trepte cu un templu în vârf." },
    { t: "Cuneiform", d: "Scriere mesopotamiană cu semne în formă de pană imprimate pe argilă." },
    { t: "Scrib", d: "Funcționar care știa să citească și să scrie." },
    { t: "Talion", d: "Principiul pedepsei egale cu paguba suferită." },
    { t: "Faraon", d: "Regele Egiptului, considerat zeu." },
    { t: "Hieroglifă", d: "Scriere prin imagini a Egiptului antic." },
    { t: "Papirus", d: "Material pentru scris obținut dintr-o plantă a Nilului." },
    { t: "Mumificare", d: "Tehnică de conservare a corpului defuncților." },
    { t: "Imperiu", d: "Stat întins care domină mai multe popoare." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce înseamnă „Mesopotamia”?", options: ["Țara dintre cele două fluvii", "Țara Nilului", "Țara soarelui"], answer: 0, explain: "Din greacă: „țara dintre fluvii” (Tigru și Eufrat)." },
      { type: "mc", q: "Care este scrierea sumerienilor?", options: ["Hieroglifică", "Cuneiformă", "Alfabetică"], answer: 1, explain: "Cuneiformă, pe tăblițe de argilă." },
      { type: "tf", q: "Codul lui Hammurabi prevedea pedepse identice pentru nobili și oameni de rând.", answer: false, explain: "Pedepsele depindeau de clasa socială." },
      { type: "text", q: "Cum se numește primul rege care a unificat Mesopotamia într-un imperiu, în jurul anului 2334 î.Hr.?", answer: ["sargon", "sargon din akkad", "sargon de akkad"], explain: "Sargon din Akkad." },
      { type: "mc", q: "În ce perioadă au fost construite piramidele de la Giza?", options: ["Regatul Vechi", "Regatul Nou", "Epoca ptolemeică"], answer: 0, explain: "Regatul Vechi, circa 2600–2500 î.Hr." },
      { type: "mc", q: "Ce a permis descifrarea hieroglifelor?", options: ["Piatra de la Rosetta", "Mormântul lui Tutankhamon", "Codul lui Hammurabi"], answer: 0, explain: "Textul în trei scrieri, dintre care una greacă, a fost cheia." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Nașterea scrisului la Uruk", "Unificarea Egiptului", "Piramida lui Keops", "Codul lui Hammurabi", "Bătălia de la Kadesh"], explain: "3300, 3100, 2560, 1754, 1274 î.Hr. aproximativ." },
      { type: "mc", q: "De ce era Egiptul mai stabil decât Mesopotamia?", options: ["Avea un Nil regulat și granițe protejate de deșert", "Nu avea fluvii", "Era o insulă"], answer: 0, explain: "Inundația previzibilă și protecția naturală au favorizat un regat unit." },
      { type: "num", q: "Câte legi conține codul lui Hammurabi? (aproximativ)", answer: 282, tol: 2, explain: "282 de articole, gravate pe stela de bazalt." },
      { type: "tf", q: "Akhenaton a introdus în Egipt cultul unui singur zeu, Aton.", answer: true, explain: "A fost o încercare de monoteism, abandonată după moartea lui." },
      { type: "mc", q: "Ce moștenire mesopotamiană folosim și astăzi?", options: ["Împărțirea orei în 60 de minute", "Cifrele romane", "Moneda"], answer: 0, explain: "Sistemul șaizecimal." }
    ]
  }
});

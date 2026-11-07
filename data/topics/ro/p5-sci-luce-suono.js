TOPIC('ro', {
  id: "p5-sci-luce-suono",
  title: "Lumina și sunetul",
  intro: "În timpul unei furtuni vezi mai întâi <b>fulgerul</b> și abia apoi auzi <b>tunetul</b>. De ce? Pentru că <b>lumina</b> și <b>sunetul</b> călătoresc în moduri foarte diferite! Descoperim cum se <b>propagă</b>, de ce există <b>umbre</b>, cum se nasc <b>curcubeul</b> și <b>ecoul</b> și ce sunt <b>vibrațiile</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Lumina: de unde vine",
      html: `<p><b>Lumina</b> este o formă de energie care ne permite să <b>vedem</b>.</p>
<ul>
<li>Corpurile care produc lumină proprie se numesc <b>surse de lumină</b> (sau corpuri luminoase): <b>Soarele</b>, stelele, focul, un bec, o licurici.</li>
<li>Toate celelalte corpuri sunt <b>luminate</b>: le vedem pentru că lumina le lovește și „sare” până la ochii noștri. Și <b>Luna</b> este un corp luminat: reflectă lumina Soarelui!</li>
</ul>
<p>Lumina se <b>propagă în linie dreaptă</b>, în toate direcțiile, și nu are nevoie de aer: străbate și <b>vidul</b> spațiului. Este cel mai rapid lucru din univers: aproximativ <b>300 000 km pe secundă</b>. Într-o secundă ar face de mai mult de 7 ori ocolul Pământului!</p>`
    },
    {
      type: "text",
      title: "Transparente, translucide, opace și umbrele",
      html: `<p>Când lumina întâlnește un obiect:</p>
<ul>
<li>corpurile <b>transparente</b> o lasă să treacă toată: vezi bine prin ele (sticla, aerul, apa limpede);</li>
<li>corpurile <b>translucide</b> lasă să treacă doar o parte: vezi forme neclare (sticla mată, hârtia de copt, o perdea subțire);</li>
<li>corpurile <b>opace</b> nu o lasă să treacă: în spatele lor se formează o <b>umbră</b> (lemnul, zidul, corpul tău).</li>
</ul>
<p>Umbra există tocmai <b>pentru că lumina merge drept</b> și nu poate „ocoli” obiectele. Cu cât sursa este mai joasă (ca Soarele la apus), cu atât umbra este mai <b>lungă</b>.</p>`
    },
    {
      type: "svg",
      title: "Cum se formează o umbră",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="0" y="240" width="600" height="60" fill="#d9f99d"/>
<circle cx="70" cy="70" r="36" fill="#facc15" stroke="#ca8a04" stroke-width="4"/>
<g stroke="#f59e0b" stroke-width="3" stroke-dasharray="10 6">
<line x1="100" y1="88" x2="270" y2="150"/><line x1="100" y1="92" x2="560" y2="240"/>
<line x1="100" y1="80" x2="300" y2="100"/>
</g>
<rect x="255" y="150" width="30" height="90" fill="#78350f"/>
<circle cx="270" cy="128" r="30" fill="#16a34a"/>
<polygon points="285,240 560,240 285,150" fill="#334155" opacity="0.55"/>
<text x="70" y="135" font-size="18" text-anchor="middle" font-weight="bold">Soare</text>
<text x="270" y="275" font-size="18" text-anchor="middle" font-weight="bold">corp opac</text>
<text x="440" y="275" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e293b">umbră</text>
<text x="420" y="130" font-size="16" fill="#92400e">razele merg drept</text>
</svg>`,
      caption: "Razele de lumină care lovesc copacul se opresc: în spate rămâne o zonă întunecată, umbra."
    },
    {
      type: "text",
      title: "Reflexia și refracția",
      html: `<ul>
<li><b>Reflexia</b>: lumina „sare” de pe o suprafață. Pe o suprafață netedă și lucioasă, ca o <b>oglindă</b> sau apa liniștită, sare în mod ordonat și vezi o imagine. Regulă: unghiul sub care ajunge este <b>egal</b> cu unghiul sub care pleacă.</li>
<li><b>Refracția</b>: când lumina trece dintr-un material în altul (de ex. din aer în apă) își <b>schimbă viteza</b> și de aceea <b>se abate</b>. De aceea un creion într-un pahar cu apă pare <b>frânt</b>! <b>Lentilele</b> ochelarilor, ale lupelor și ale microscoapelor funcționează datorită refracției.</li>
</ul>`
    },
    {
      type: "text",
      title: "Culorile luminii",
      html: `<p>Lumina Soarelui pare albă, dar este un <b>amestec al tuturor culorilor</b>. Dacă o trecem printr-o <b>prismă</b> de sticlă, se separă în culorile <b>curcubeului</b>: roșu, portocaliu, galben, verde, albastru deschis, indigo, violet.</p>
<p><b>Curcubeul</b> se formează când Soarele luminează picăturile de ploaie: fiecare picătură este o mică prismă. Ca să-l vezi, trebuie să ai Soarele <b>în spate</b> și ploaia în față.</p>
<p>Și de ce este un măr roșu? Pentru că <b>absoarbe</b> toate culorile în afară de roșu, care este <b>reflectat</b> spre ochii noștri. Un obiect alb le reflectă pe toate; unul negru le absoarbe pe toate (de aceea vara un tricou negru încălzește mai tare!).</p>`
    },
    {
      type: "svg",
      title: "Prisma separă culorile",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<line x1="20" y1="150" x2="230" y2="125" stroke="#ffffff" stroke-width="7"/>
<polygon points="300,40 380,190 220,190" fill="#bae6fd" fill-opacity="0.35" stroke="#e0f2fe" stroke-width="3"/>
<g stroke-width="7">
<line x1="330" y1="120" x2="580" y2="70" stroke="#ef4444"/>
<line x1="330" y1="122" x2="580" y2="92" stroke="#f97316"/>
<line x1="330" y1="124" x2="580" y2="114" stroke="#facc15"/>
<line x1="330" y1="126" x2="580" y2="136" stroke="#22c55e"/>
<line x1="330" y1="128" x2="580" y2="158" stroke="#38bdf8"/>
<line x1="330" y1="130" x2="580" y2="180" stroke="#4f46e5"/>
<line x1="330" y1="132" x2="580" y2="202" stroke="#a855f7"/>
</g>
<line x1="230" y1="125" x2="330" y2="126" stroke="#ffffff" stroke-width="5"/>
<text x="90" y="120" font-size="18" fill="#ffffff">lumină albă</text>
<text x="300" y="230" font-size="18" fill="#e0f2fe" text-anchor="middle">prismă</text>
<text x="590" y="45" font-size="16" fill="#fca5a5" text-anchor="end">roșu: se abate mai puțin</text>
<text x="590" y="235" font-size="16" fill="#d8b4fe" text-anchor="end">violet: se abate mai mult</text>
</svg>`,
      caption: "Isaac Newton a făcut acest experiment în 1666 și a înțeles că lumina albă este făcută din toate culorile."
    },
    {
      type: "quiz",
      title: "Mini-test: lumina",
      questions: [
        { type: "mc", q: "Luna este…", options: ["o sursă de lumină", "un corp luminat", "un corp transparent"], answer: 1, explain: "Luna nu produce lumină: o reflectă pe cea a Soarelui." },
        { type: "mc", q: "O perdea subțire care lasă să treacă puțină lumină este…", options: ["transparentă", "translucidă", "opacă"], answer: 1, explain: "Lasă să treacă doar o parte din lumină: este translucidă." },
        { type: "tf", q: "Umbrele se formează pentru că lumina călătorește în linie dreaptă.", answer: true, explain: "Lumina nu poate ocoli obiectele opace." }
      ]
    },
    {
      type: "text",
      title: "Sunetul: totul pornește de la o vibrație",
      html: `<p>Pune două degete pe gât și spune „aaaa”: simți un <b>tremur</b>. Toate sunetele se nasc din ceva care <b>vibrează</b>, adică se mișcă foarte repede încoace și încolo: corzile vocale, coarda unei chitare, pielea unei tobe.</p>
<p>Vibrația împinge particulele de aer din apropiere, care le împing pe cele de alături, și tot așa: se formează o <b>undă sonoră</b> care ajunge până la <b>urechea</b> noastră. Este puțin ca „valul” de pe stadion: oamenii rămân la locul lor, dar unda călătorește!</p>
<p>Sunetul are nevoie de un <b>mediu</b> ca să se propage (aer, apă, lemn, metal). <b>În vid sunetul nu se propagă</b>: în spațiu domnește tăcerea absolută, chiar și în timpul unei explozii!</p>`
    },
    {
      type: "text",
      title: "Cât de repede este sunetul",
      html: `<table>
<tr><th>Mediul</th><th>Viteza sunetului (aproximativ)</th></tr>
<tr><td>🌬️ Aer (20 °C)</td><td>340 de metri pe secundă</td></tr>
<tr><td>💧 Apă</td><td>1 500 de metri pe secundă</td></tr>
<tr><td>🔩 Oțel</td><td>5 000–6 000 de metri pe secundă</td></tr>
<tr><td>🌌 Vid</td><td>nu se propagă</td></tr>
</table>
<p>Sunetul este foarte rapid pentru noi (peste 1200 km/h în aer), dar este de aproape <b>un milion de ori mai lent</b> decât lumina. De aceea fulgerul se vede imediat, iar tunetul ajunge mai târziu.</p>
<p>În solide și în lichide particulele sunt mai apropiate și „își trec” împingerea mai repede: de aceea nativii americani își lipeau urechea de pământ sau de șine ca să audă venind caii și trenurile.</p>`
    },
    {
      type: "svg",
      title: "Fulger și tunet",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#1e293b"/>
<ellipse cx="110" cy="50" rx="90" ry="35" fill="#64748b"/>
<polygon points="110,80 85,140 108,140 90,200 140,120 115,120 130,80" fill="#fde047"/>
<rect x="0" y="230" width="600" height="50" fill="#365314"/>
<circle cx="520" cy="185" r="16" fill="#fcd34d"/>
<rect x="508" y="200" width="24" height="32" rx="6" fill="#3b82f6"/>
<line x1="150" y1="130" x2="495" y2="180" stroke="#fde047" stroke-width="3"/>
<text x="320" y="135" font-size="17" fill="#fde047" text-anchor="middle">lumina: ajunge imediat ⚡</text>
<g fill="none" stroke="#93c5fd" stroke-width="3">
<path d="M160 195 Q170 210 160 225"/><path d="M190 190 Q205 210 190 230"/><path d="M220 185 Q240 210 220 235"/>
</g>
<text x="320" y="215" font-size="17" fill="#93c5fd" text-anchor="middle">sunetul: 340 m pe secundă… 🔊</text>
<text x="300" y="265" font-size="16" fill="#f8fafc" text-anchor="middle">numără secundele dintre fulger și tunet și împarte la 3 → distanța în km</text>
</svg>`,
      caption: "În 3 secunde sunetul parcurge aproximativ 1 km (3 × 340 = 1020 m)."
    },
    {
      type: "text",
      title: "Caracteristicile sunetului și ecoul",
      html: `<ul>
<li><b>Intensitatea</b> (volumul): sunet <b>tare</b> sau <b>slab</b>. Depinde de cât de amplă este vibrația. Se măsoară în <b>decibeli</b> (dB): o șoaptă aproximativ 30 dB, o conversație 60 dB, un concert rock peste 100 dB. Peste 85 dB, timp îndelungat, auzul se poate deteriora!</li>
<li><b>Înălțimea</b>: sunet <b>acut</b> (ca un fluier) sau <b>grav</b> (ca un contrabas). Depinde de câte vibrații pe secundă (<b>frecvența</b>): cu cât sunt mai rapide, cu atât sunetul este mai acut. Corzile mai scurte și mai întinse dau sunete mai acute.</li>
<li><b>Timbrul</b>: este „vocea” specială a fiecărui instrument sau a fiecărei persoane. Aceeași notă <i>do</i> cântată la pian și la trompetă este diferită: recunoști timbrul!</li>
</ul>
<p><b>Ecoul</b> este un sunet <b>reflectat</b>: se lovește de un perete îndepărtat (un munte, un zid) și se întoarce. Ca să auzi ecoul separat de vocea ta, obstacolul trebuie să fie la cel puțin <b>17 metri</b> aproximativ.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: cât de departe este furtuna?",
      html: `<p>Vezi un fulger și începi să numeri: „unu, doi, trei…”. Auzi tunetul după <b>6 secunde</b>.</p>
<ul>
<li>Sunetul parcurge aproximativ <b>340 de metri</b> pe secundă.</li>
<li>340 × 6 = <b>2 040 de metri</b>, adică aproximativ <b>2 km</b>.</li>
<li>Truc rapid: secunde <b>: 3</b> = kilometri (6 : 3 = 2 km).</li>
</ul>
<p>Dacă secundele scad la fiecare fulger, furtuna se <b>apropie</b>: mai bine te adăpostești într-o clădire! ⛈️</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: telefonul din cutii",
      html: `<p>Construiește un „telefon” cu două pahare de iaurt și un șnur lung de 10 metri:</p>
<ol>
<li>fă o gaură mică în fundul fiecărui pahar;</li>
<li>trece șnurul prin ele și fă un nod în interior;</li>
<li>depărtați-vă până când șnurul este <b>bine întins</b>;</li>
<li>unul vorbește în pahar, celălalt îl lipește de ureche.</li>
</ol>
<p>Funcționează pentru că vocea face să vibreze fundul paharului, vibrația aleargă de-a lungul <b>șnurului</b> (un solid) și face să vibreze celălalt pahar. Dacă șnurul este moale sau cineva îl atinge, vibrația se oprește și nu se mai aude nimic!</p>`
    },
    {
      type: "widget",
      title: "Lumină sau sunet?",
      widget: "classify",
      options: {
        groups: ["💡 Lumină", "🔊 Sunet", "💡🔊 Amândouă"],
        items: [
          ["Se propagă și în vid", 0],
          ["Se naște dintr-o vibrație", 1],
          ["Călătorește cu aproximativ 300 000 km pe secundă", 0],
          ["Călătorește cu aproximativ 340 m pe secundă în aer", 1],
          ["Poate fi reflectat (oglindă / ecou)", 2],
          ["Se descompune în culori cu o prismă", 0],
          ["Se măsoară în decibeli", 1],
          ["Este o formă de energie", 2]
        ]
      },
      caption: "Pune fiecare afirmație în grupul potrivit."
    },
    {
      type: "curiosity",
      title: "Știai că…? Lumina trecutului",
      html: `<p>Lumina Soarelui are nevoie de aproximativ <b>8 minute și 20 de secunde</b> ca să ajungă la noi. Așadar Soarele pe care îl vezi este Soarele de acum 8 minute!</p>
<p>Lumina unor stele pe care le vezi noaptea a plecat acum sute sau mii de ani: a privi cerul este ca și cum ai privi în <b>trecut</b>. Unele dintre acele stele ar putea să nu mai existe!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Sunete pe care nu le auzim",
      html: `<p>Noi auzim sunete de la aproximativ <b>20</b> până la <b>20 000</b> de vibrații pe secundă (herți). Sub aceste valori sunt <b>infrasunetele</b>: <b>elefanții</b> le folosesc ca să „vorbească” între ei la kilometri distanță. Deasupra sunt <b>ultrasunetele</b>: <b>liliecii</b> și <b>delfinii</b> le emit și ascultă ecoul ca să găsească prăzi și obstacole în întuneric (se numește <b>ecolocație</b>).</p>
<p>Și medicii folosesc ultrasunetele pentru <b>ecografie</b>, ca să vadă în interiorul corpului fără să doară.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<table>
<tr><th></th><th>💡 Lumina</th><th>🔊 Sunetul</th></tr>
<tr><td>Se naște din</td><td>surse de lumină</td><td>vibrații</td></tr>
<tr><td>În vid</td><td>se propagă</td><td>nu se propagă</td></tr>
<tr><td>Viteza</td><td>300 000 km/s</td><td>340 m/s în aer</td></tr>
<tr><td>Se întoarce</td><td>reflexie (oglindă)</td><td>ecou</td></tr>
<tr><td>Caracteristici</td><td>culori</td><td>intensitate, înălțime, timbru</td></tr>
</table>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege lumina și sunetul",
      intro: "Lumina și sunetul se înțeleg mai bine cu experimente, analogii și modele. Alege-l pe al tău!",
      tabs: [
        {
          label: "🌊 Piatra în iaz",
          html: `<p>Aruncă o piatră într-un iaz: se formează <b>cercuri</b> care se lărgesc. Apa nu merge spre mal: fiecare punct urcă și coboară, dar <b>unda</b> călătorește.</p>
<p>Sunetul face la fel în aer, dar în <b>3D</b>: se lărgește ca o <b>sferă</b> din ce în ce mai mare în jurul celui care vorbește. De aceea te aud și cei din spatele tău. Și cu cât sfera este mai mare, cu cât sunetul este mai „întins” și mai slab: de aceea de departe se aude mai puțin.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#e0f2fe"/>
<g fill="none" stroke="#0284c7">
<circle cx="200" cy="120" r="20" stroke-width="5"/><circle cx="200" cy="120" r="50" stroke-width="4"/><circle cx="200" cy="120" r="80" stroke-width="3"/><circle cx="200" cy="120" r="110" stroke-width="2"/>
</g>
<circle cx="200" cy="120" r="7" fill="#78716c"/>
<text x="430" y="100" font-size="20" fill="#075985" text-anchor="middle">undele se lărgesc,</text>
<text x="430" y="130" font-size="20" fill="#075985" text-anchor="middle">apa rămâne pe loc</text>
<text x="430" y="170" font-size="18" fill="#0369a1" text-anchor="middle">departe = undă mai slabă</text>
</svg>`
        },
        {
          label: "🎸 Rigla vibrantă",
          html: `<p>Ține o <b>riglă</b> fixată pe marginea băncii și fă să vibreze partea care iese în afară:</p>
<ul>
<li>cu o parte <b>lungă</b> în afara băncii, vibrează <b>încet</b> → sunet <b>grav</b>;</li>
<li>cu o parte <b>scurtă</b>, vibrează <b>repede</b> → sunet <b>acut</b>;</li>
<li>dacă o împingi <b>mai tare</b>, vibrează mai amplu → sunet mai <b>intens</b> (mai tare).</li>
</ul>
<p>Tocmai ai descoperit înălțimea și intensitatea! Este același principiu ca la chitare, viori și harpe.</p>`
        },
        {
          label: "🫙 Xilofonul din pahare",
          html: `<p>Pune în șir 6 pahare de sticlă la fel, cu cantități diferite de apă, și lovește-le încet cu o linguriță.</p>
<ul>
<li>cu cât este mai multă <b>apă</b>, cu atât sunetul este mai <b>grav</b> (sticla cu multă apă vibrează mai încet);</li>
<li>dacă în schimb <b>sufli</b> peste sticle, se întâmplă invers: mai multă apă → mai puțin aer → sunet mai <b>acut</b>, pentru că vibrează coloana de aer!</li>
</ul>
<p>Cu puțină răbdare le poți acorda și poți cânta <i>Frère Jacques</i>!</p>`,
          widget: "counter",
          options: { emoji: "🥛", max: 8 }
        },
        {
          label: "🔦 Lanterna și oglinzile",
          html: `<p>Într-o cameră întunecată, cu puțin praf (sau cu aburul de la duș), aprinde o <b>lanternă</b>: vezi raza <b>dreaptă</b>.</p>
<p>Acum îndreapt-o spre o <b>oglindă</b>: raza sare sub același unghi, ca o bilă de biliard de marginea mesei. Cu 2–3 oglinzi poți trimite lumina oriunde vrei, ca într-un <b>periscop</b> de submarin.</p>
<p>În sfârșit, pune un creion într-un pahar cu apă și privește-l din lateral: pare frânt. Aceasta este <b>refracția</b>!</p>`
        },
        {
          label: "⚛️ Lumina se naște din atomi (3D)",
          html: `<p>De unde vine lumina? Din <b>atomi</b>! Când un atom primește energie (de exemplu este încălzit), un electron „sare” pe o orbită mai îndepărtată. Când coboară la loc, restituie energia sub forma unui pachet de <b>lumină</b>.</p>
<p>Fiecare element emite culori speciale: <b>sodiul</b> (Na) dă lumina galbenă a vechilor felinare stradale și galbenul artificiilor. Privește modelul atomului.</p>`,
          scene: "atom",
          options: { elements: ["H", "He", "Na"], element: "Na" }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta luminii și a sunetului: atinge un nod și descoperă de ce",
      nodes: [
        { id: "energia", label: "Energia", x: 50, y: 6, color: "#f59e0b", html: "Lumina și sunetul sunt două moduri în care călătorește energia.", why: "Un panou solar transformă lumina în electricitate; un sunet foarte puternic poate face geamurile să tremure: amândouă transportă energie dintr-un loc în altul, fără să transporte materie." },
        { id: "luce", label: "Lumina", x: 25, y: 26, color: "#eab308", html: "Energie care ne permite să vedem; călătorește și prin vid.", why: "În 1865, scoțianul <b>James Clerk Maxwell</b> a înțeles că lumina este o undă electromagnetică, ca undele radio. În 1905, <b>Einstein</b> a explicat că este făcută și din „pachete” de energie, fotonii." },
        { id: "velluce", label: "300 000 km/s", x: 8, y: 48, color: "#facc15", html: "Viteza luminii.", why: "<b>Galilei</b> a încercat s-o măsoare cu două felinare pe două dealuri, dar era prea rapidă. În 1676, danezul <b>Ole Rømer</b> a estimat-o primul, observând lunile lui Jupiter. Este cea mai mare viteză posibilă din univers." },
        { id: "rifl", label: "Reflexia și refracția", x: 30, y: 62, color: "#38bdf8", html: "Lumina sare (oglinzi) sau se abate schimbând materialul (lentile).", why: "Legea reflexiei era cunoscută încă de <b>Euclid</b> și <b>Heron</b>. Legea refracției au găsit-o <b>Ibn Sahl</b> (Bagdad, 984) și, secole mai târziu, <b>Snell</b> și <b>Descartes</b>. Galilei a folosit-o în luneta sa (1609)." },
        { id: "colori", label: "Culorile", x: 15, y: 86, color: "#a855f7", html: "Lumina albă conține toate culorile curcubeului.", why: "<b>Isaac Newton</b>, în 1666, a separat lumina cu o prismă și apoi a recompus-o cu o a doua prismă, demonstrând că albul este un amestec. El a ales 7 culori, ca cele 7 note muzicale." },
        { id: "suono", label: "Sunetul", x: 75, y: 26, color: "#2563eb", html: "Vibrație care se propagă ca undă într-un mediu.", why: "Încă <b>Pitagora</b> (secolul al VI-lea î.Hr.) a descoperit că o coardă lungă cât jumătate sună cu o octavă mai sus. În 1660, <b>Robert Boyle</b> a pus un ceas deșteptător într-un clopot de sticlă și a scos aerul: sunetul a dispărut. Dovadă că e nevoie de un mediu!" },
        { id: "velsuono", label: "340 m/s", x: 92, y: 48, color: "#0ea5e9", html: "Viteza sunetului în aer.", why: "În secolul al XVII-lea se măsura trăgând cu tunul și cronometrând timpul dintre fulger și bubuitură la o distanță cunoscută. Este mai rapid în lichide și în solide, pentru că acolo particulele sunt mai apropiate și mai rigide." },
        { id: "caratt", label: "Intensitate, înălțime, timbru", x: 70, y: 62, color: "#16a34a", html: "Cele trei caracteristici ale sunetului.", why: "Intensitatea = amplitudinea vibrației; înălțimea = frecvența (vibrații pe secundă, măsurate în <b>herți</b>, după fizicianul german Heinrich Hertz); timbrul = forma undei, diferită pentru fiecare instrument." },
        { id: "eco", label: "Ecoul și ecolocația", x: 85, y: 86, color: "#14b8a6", html: "Sunetul care sare și se întoarce.", why: "Numele vine de la nimfa Echo din mitologia greacă. În 1794, italianul <b>Lazzaro Spallanzani</b> a descoperit că liliecii se orientează în întuneric cu ajutorul auzului; în 1938 s-a înțeles că folosesc ultrasunete. De aici s-au născut sonarul și ecografia." }
      ],
      edges: [
        ["energia", "luce", "călătorește ca"],
        ["energia", "suono", "călătorește ca"],
        ["luce", "velluce", "viteză"],
        ["luce", "rifl", "poate suferi"],
        ["rifl", "colori", "prisma separă"],
        ["suono", "velsuono", "viteză"],
        ["suono", "caratt", "are"],
        ["suono", "eco", "reflectat devine"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: sunetul",
      questions: [
        { type: "mc", q: "Din ce se naște orice sunet?", options: ["Dintr-o lumină", "Dintr-o vibrație", "Din vânt"], answer: 1, explain: "Orice sunet se naște dintr-un obiect care vibrează." },
        { type: "tf", q: "În spațiul vid se poate auzi o explozie.", answer: false, explain: "Sunetul are nevoie de un mediu: în vid nu se propagă." },
        { type: "num", q: "Între fulger și tunet trec 9 secunde. La câți km aproximativ este furtuna?", answer: 3, unit: "km", explain: "9 : 3 = 3 km (340 × 9 = 3060 m)." }
      ]
    }
  ],
  glossary: [
    { t: "Sursă de lumină", d: "Corp care produce lumină proprie, ca Soarele sau un bec." },
    { t: "Corp opac", d: "Corp care nu lasă lumina să treacă și produce umbră." },
    { t: "Corp transparent", d: "Corp care lasă lumina să treacă, permițând să vedem prin el." },
    { t: "Reflexie", d: "Întoarcerea luminii (sau a sunetului) de pe o suprafață." },
    { t: "Refracție", d: "Abaterea luminii când trece dintr-un material în altul." },
    { t: "Vibrație", d: "Mișcare rapidă încoace și încolo care produce sunetul." },
    { t: "Ecou", d: "Sunet reflectat de un obstacol, care se întoarce la cel care l-a produs." },
    { t: "Decibel", d: "Unitate de măsură a intensității sunetului." },
    { t: "Ultrasunete", d: "Sunete prea acute pentru urechea umană, folosite de lilieci și delfini." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre acestea este o sursă de lumină?", options: ["Luna", "O lumânare aprinsă", "O oglindă"], answer: 1, explain: "Lumânarea produce lumină proprie; Luna și oglinda o reflectă." },
      { type: "mc", q: "Un zid de cărămidă este un corp…", options: ["transparent", "translucid", "opac"], answer: 2, explain: "Nu lasă lumina să treacă: este opac." },
      { type: "tf", q: "Lumina călătorește în linie dreaptă.", answer: true, explain: "De aceea se formează umbrele." },
      { type: "text", q: "Cum se numește fenomenul din cauza căruia un creion într-un pahar cu apă pare frânt?", answer: ["refracție", "refracția", "refractie", "refractia"], explain: "Este refracția: lumina se abate trecând din apă în aer." },
      { type: "mc", q: "Cine a descoperit, cu o prismă, că lumina albă conține toate culorile?", options: ["Galileo Galilei", "Isaac Newton", "Alessandro Volta"], answer: 1, explain: "Isaac Newton, în 1666." },
      { type: "mc", q: "De ce vedem fulgerul înainte de a auzi tunetul?", options: ["Pentru că tunetul pornește mai târziu", "Pentru că lumina este mult mai rapidă decât sunetul", "Pentru că ochii sunt mai aproape de creier"], answer: 1, explain: "Lumina călătorește cu 300 000 km/s, sunetul cu aproximativ 340 m/s." },
      { type: "mc", q: "În ce mediu este sunetul mai rapid?", options: ["Aer", "Apă", "Oțel"], answer: 2, explain: "În solide sunetul călătorește mai repede: în oțel aproximativ 5000 m/s." },
      { type: "mc", q: "Un sunet acut este produs de vibrații…", options: ["lente", "rapide", "absente"], answer: 1, explain: "Mai multe vibrații pe secundă = sunet mai acut." },
      { type: "text", q: "Cum se numește sunetul care sare de un perete îndepărtat și se întoarce?", answer: ["ecou", "ecoul", "un ecou"], explain: "Este ecoul." },
      { type: "num", q: "Sunetul călătorește cu 340 m pe secundă. Câți metri parcurge în 5 secunde?", answer: 1700, unit: "m", explain: "340 × 5 = 1700 m." },
      { type: "order", q: "Așază în ordine călătoria unui sunet.", items: ["Coarda chitarei vibrează", "Aerul din apropiere este împins", "Unda sonoră călătorește prin aer", "Timpanul urechii vibrează", "Creierul recunoaște sunetul"], explain: "Vibrație → undă în mediu → ureche → creier." },
      { type: "tf", q: "Liliecii folosesc ultrasunetele ca să se orienteze în întuneric.", answer: true, explain: "Emit ultrasunete și ascultă ecoul: este ecolocația." }
    ]
  }
});

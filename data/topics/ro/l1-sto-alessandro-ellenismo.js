TOPIC('ro', {
  id: "l1-sto-alessandro-ellenismo",
  title: "Alexandru cel Mare și epoca elenistică",
  intro: "În puțin peste <b>zece ani</b>, între 334 și 323 î.Hr., un rege de douăzeci de ani, plecat dintr-un regat de la marginea lumii grecești, a cucerit cel mai mare imperiu văzut vreodată, de la Mediterana până în India. A murit la 32 de ani, fără să fi rânduit succesiunea. Dar aventura lui a schimbat lumea: din cuceririle sale s-a născut o civilizație nouă, <b>elenismul</b>, în care limba și cultura greacă s-au amestecat cu cele ale Egiptului, Persiei și Asiei. În această lecție îl urmărim pe Alexandru și aflăm care a fost moștenirea lăsată de el.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Macedonia lui Filip al II-lea",
      html: `<p><b>Macedonia</b>, la nord de Grecia, era un regat de păstori și țărani condus de regi și nobili războinici. Grecii o considerau semibarbară, deși regii ei vorbeau grecește. Cu <b>Filip al II-lea</b> (359-336 î.Hr.) a devenit puterea dominantă:</p>
<ul>
<li><b>Armată reformată</b>: infanterie cu <b>sarisa</b> (o lance lungă de circa 5-6 metri) într-o <b>falangă</b> compactă, cavaleria <b>Companionilor</b>, inginerie de asediu.</li>
<li><b>Resurse</b>: minele de aur din muntele Pangeu, care au finanțat armata și diplomația.</li>
<li><b>Politică</b>: profitând de diviziunile dintre cetăți (slăbite de războiul peloponeziac), Filip s-a impus treptat. În <b>338 î.Hr.</b>, la <b>Cheroneea</b>, a învins Atena și Teba. Retorul atenian <b>Demostene</b> îl avertizase prin «Filipicele» sale: prea târziu.</li>
<li>În 337 î.Hr. a creat <b>Liga de la Corint</b>: toate cetățile (cu excepția Spartei) jurau alianță și îl recunoșteau pe Filip drept conducător, pentru a porni război împotriva Persiei.</li>
</ul>
<p>Filip a fost asasinat în <b>336 î.Hr.</b> la nunta fiicei sale. I-a urmat fiul său, <b>Alexandru</b>.</p>`
    },
    {
      type: "text",
      title: "2. Alexandru: tinerețea și primii pași",
      html: `<p><b>Alexandru</b> s-a născut în <b>356 î.Hr.</b> la Pella, fiul lui Filip al II-lea și al Olimpiei. La 13 ani l-a avut ca învățător pe filosoful <b>Aristotel</b>, care i-a transmis dragostea pentru Homer, știință și geografie. La 16 ani a condus regatul în timpul unei absențe a tatălui; la 18 ani a comandat cavaleria la Cheroneea. A urcat pe tron la <b>20 de ani</b> (336 î.Hr.), a înăbușit rapid revoltele (a distrus Teba în 335 î.Hr.) și în <b>334 î.Hr.</b> a trecut Helespontul cu circa 40.000 de oameni: macedoneni, greci aliați, traci.</p>
<p>Scopul declarat era să răzbune invazia persană a lui Xerxes și să-i elibereze pe grecii din Asia. Dar întreprinderea a căpătat curând o dimensiune nouă: cucerirea imperiului persan.</p>`
    },
    {
      type: "3d",
      title: "Hartă 3D: marșul lui Alexandru (334-323 î.Hr.)",
      scene: "spacetime",
      caption: "Baza este harta de la Marea Egee până în India, înălțimea este timpul (336-320 î.Hr.). Atinge evenimentele ca să vezi etapele cuceririi.",
      options: {
        lat: [24, 44],
        lon: [20, 78],
        years: [-337, -320],
        places: [
          { lat: 40.76, lon: 22.52, label: "Pella" },
          { lat: 32.5, lon: 44.4, label: "Babilon" },
          { lat: 29.9, lon: 52.9, label: "Persepolis" },
          { lat: 31.2, lon: 29.9, label: "Alexandria" }
        ],
        events: [
          { id: "pella", lat: 40.76, lon: 22.52, year: -336, label: "Alexandru rege", html: "La moartea lui Filip al II-lea, Alexandru (20 de ani) devine rege al Macedoniei. Înăbușe revoltele din Grecia.", causes: [] },
          { id: "granico", lat: 40.2, lon: 27.3, year: -334, label: "Granicos", html: "Primăvara 334 î.Hr.: prima bătălie împotriva satrapilor persani; victorie macedoneană și controlul Asiei Mici.", causes: ["pella"] },
          { id: "isso", lat: 36.8, lon: 36.2, year: -333, label: "Issos", html: "În 333 î.Hr. Alexandru îl învinge pe regele persan Darius al III-lea, care fuge lăsându-și familia.", causes: ["granico"] },
          { id: "tiro", lat: 33.27, lon: 35.2, year: -332, label: "Asediul Tyrului", html: "După șapte luni, în 332 î.Hr., Alexandru cucerește Tyrul construind un dig până la insulă.", causes: ["isso"] },
          { id: "egitto", lat: 31.2, lon: 29.9, year: -331, label: "Egiptul și Alexandria", html: "Egiptenii îl primesc ca eliberator de sub perși. În 331 î.Hr. întemeiază <b>Alexandria</b>, care va deveni capitala culturii elenistice.", causes: ["tiro"] },
          { id: "gaugamela", lat: 36.4, lon: 43.3, year: -331, label: "Gaugamela", html: "La 1 octombrie 331 î.Hr., victoria decisivă asupra lui Darius al III-lea. Alexandru intră în Babilon, apoi în Susa.", causes: ["egitto"] },
          { id: "persepoli", lat: 29.93, lon: 52.9, year: -330, label: "Persepolis", html: "În 330 î.Hr. Alexandru cucerește Persepolis, capitala ceremonială, iar palatul ei este incendiat. Darius al III-lea este asasinat de ai săi.", causes: ["gaugamela"] },
          { id: "battriana", lat: 36.7, lon: 67.1, year: -329, label: "Bactria și Sogdiana", html: "Între 329 și 327 î.Hr., campanii grele în Asia Centrală. Se căsătorește cu prințesa Roxana.", causes: ["persepoli"] },
          { id: "idaspe", lat: 32.7, lon: 73.4, year: -326, label: "Hydaspes", html: "În 326 î.Hr. îl învinge pe regele indian Porus pe râul Hydaspes. La granițele Indiei armata, epuizată, refuză să meargă mai departe.", causes: ["battriana"] },
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -323, label: "Moartea la Babilon", html: "Iunie 323 î.Hr.: Alexandru moare la Babilon, la 32 de ani (de febră, poate malarie sau tifos; cauza rămâne incertă). Imperiul rămâne fără moștenitor adult.", causes: ["idaspe"] }
        ]
      }
    },
    {
      type: "text",
      title: "3. Cuceririle: de la Granicos până în India",
      html: `<p>Cucerirea s-a desfășurat pe etape:</p>
<ul>
<li><b>334 î.Hr. Granicos</b>: victorie asupra satrapilor persani și controlul Asiei Mici.</li>
<li><b>333 î.Hr. Issos</b>: regele persan <b>Darius al III-lea</b> este învins în Cilicia și fuge.</li>
<li><b>332 î.Hr.</b>: asediul și distrugerea <b>Tyrului</b>, apoi <b>Egiptul</b> se predă fără luptă; în oaza Siwa preoții îl salută ca fiu al lui Amon (Zeusul egiptean).</li>
<li><b>331 î.Hr. Gaugamela</b>: nouă victorie împotriva unei armate persane mult mai numeroase; Alexandru este «Marele Rege» al Persiei.</li>
<li><b>330 î.Hr.</b>: Persepolis incendiat; Darius al III-lea este ucis de un satrap al său.</li>
<li><b>329-327 î.Hr.</b>: Bactria și Sogdiana (Afganistan și Asia Centrală): un război de gherilă foarte dur.</li>
<li><b>326 î.Hr.</b>: nord-vestul Indiei, victorie împotriva lui Porus la <b>Hydaspes</b>; apoi, pe râul Hyphasis, armata refuză să meargă mai departe.</li>
<li><b>325-324 î.Hr.</b>: întoarcerea prin deșertul Gedrosiei (cu pierderi grele); la Susa celebrează nunți în masă între macedoneni și femei persane, pentru a topi elitele.</li>
<li><b>323 î.Hr.</b>: moare la <b>Babilon</b>, la 32 de ani, în timp ce pregătea noi expediții.</li>
</ul>
<p><b>Cum a reușit?</b> Cu o armată antrenată și loială, o cavalerie excelentă, o tactică abilă (ataca punctul cel mai slab, adesea în fruntea oamenilor săi), mult curaj personal și... slăbiciunea imperiului persan, mare, dar puțin unit. Prețul a fost enorm: orașe distruse, sute de mii de morți, execuții chiar și ale unor apropiați.</p>`
    },
    {
      type: "svg",
      title: "Imperiul lui Alexandru (schemă)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<path d="M40 170 L70 150 L120 160 L130 190 L90 210 L50 200 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="85" y="185" font-size="14" text-anchor="middle" fill="#0f172a">Grecia</text>
<path d="M150 150 L300 120 L420 130 L500 160 L520 220 L400 250 L250 240 L160 210 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="330" y="190" font-size="18" font-weight="bold" text-anchor="middle" fill="#7c2d12">IMPERIUL LUI ALEXANDRU</text>
<polyline points="90,175 170,170 230,160 280,190 330,200 400,170 490,160" fill="none" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<g fill="#dc2626"><circle cx="90" cy="175" r="6"/><circle cx="170" cy="170" r="6"/><circle cx="230" cy="160" r="6"/><circle cx="280" cy="190" r="6"/><circle cx="330" cy="200" r="6"/><circle cx="400" cy="170" r="6"/><circle cx="490" cy="160" r="6"/></g>
<g font-size="14" fill="#0f172a" text-anchor="middle"><text x="170" y="150">Issos</text><text x="230" y="140">Egipt</text><text x="280" y="215">Babilon</text><text x="400" y="150">Persepolis</text><text x="490" y="145">India</text></g>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#7c2d12">334 î.Hr. – 323 î.Hr.: circa 11 ani de campanie, peste 20.000 km parcurși</text>
</svg>`,
      caption: "Hartă foarte simplificată a itinerarului; linia punctată arată marșul spre est."
    },
    {
      type: "quiz",
      title: "Mini-test: Alexandru",
      questions: [
        { type: "mc", q: "Cine a fost învățătorul lui Alexandru?", options: ["Aristotel", "Platon", "Socrate"], answer: 0, explain: "Aristotel, filosof grec." },
        { type: "mc", q: "În ce bătălie l-a învins Alexandru definitiv pe Darius al III-lea?", options: ["Gaugamela", "Marathon", "Hydaspes"], answer: 0, explain: "La Gaugamela, în 331 î.Hr." },
        { type: "tf", q: "Alexandru a murit la 32 de ani la Babilon.", answer: true, explain: "În iunie 323 î.Hr." },
        { type: "text", q: "Ce oraș egiptean a întemeiat în 331 î.Hr.?", answer: ["alexandria", "alexandria egiptului"], explain: "Alexandria, pe coasta Deltei Nilului." }
      ]
    },
    {
      type: "decision",
      title: "Pe râul Hyphasis, 326 î.Hr.: înainte sau înapoi?",
      html: `<p>Ești Alexandru. Armata a parcurs mii de kilometri în opt ani, a luptat sub ploile musonice. În față, dincolo de râul Hyphasis, se află alte regate indiene și se spune că există o armată de sute de elefanți. Soldații sunt obosiți, bolnavi, vor să-și revadă patria. Generalul tău Coenus vorbește în numele tuturor: «să ne întoarcem».</p>`,
      question: "Ce hotărăști?",
      options: [
        { label: "Merg mai departe spre est cu orice preț, chiar împotriva voinței armatei.", outcome: "Riști o răzvrătire: fără consimțământul trupelor, nici un rege semi-divin nu poate comanda. Prestigiul și viața ta ar fi în pericol." },
        { label: "Cedez și mă întorc, întemeind noi orașe și consolidând imperiul.", outcome: "Salvezi armata și poți organiza teritoriul, chiar dacă renunți la visul de a ajunge la «Oceanul oriental». Dar întoarcerea este foarte grea: în deșertul Gedrosiei mor mulți soldați." },
        { label: "Concediez armata și continui cu voluntari locali.", outcome: "Riști să pierzi nucleul militar macedonean și să te trezești înconjurat de popoare ostile." }
      ],
      answer: 1,
      explain: "Alexandru, după trei zile petrecute închis în cortul său, a trebuit să cedeze: pe râul <b>Hyphasis</b> (azi Beas) armata a refuzat să meargă mai departe. A pus să se construiască douăsprezece altare și s-a întors. Chiar și cei mai mari comandanți depind de consimțământul celor care îi urmează."
    },
    {
      type: "text",
      title: "4. După Alexandru: diadohii și regatele elenistice",
      html: `<p>Alexandru a murit fără un moștenitor potrivit (fiul său Alexandru al IV-lea s-a născut după moartea lui). Generalii săi, <b>diadohii</b> («urmașii»), și-au disputat imperiul în lungi războaie, iar după bătălia de la <b>Ipsos</b> (301 î.Hr.) s-au format trei mari regate, la care s-au adăugat altele:</p>
<ul>
<li><b>Regatul Ptolemeilor</b> (Egipt): întemeiat de <b>Ptolemeu I</b>, capitala <b>Alexandria</b>. A durat până la moartea Cleopatrei a VII-a (30 î.Hr.), ultima regină, când Roma l-a anexat.</li>
<li><b>Regatul Seleucizilor</b> (Siria, Mesopotamia, Persia): întemeiat de <b>Seleucos I</b>, capitala Antiohia; cel mai vast, dar și cel mai greu de ținut laolaltă.</li>
<li><b>Regatul Antigonizilor</b> (Macedonia și Grecia): mai tradițional, vecin cu Roma.</li>
<li>Altele: regatul <b>Pergamului</b> (Attalizii), regatul greco-bactrian (Afganistan), regatul Siracuzei.</li>
</ul>
<p>Aceste regate erau <b>monarhii absolute</b>: regele era comandant militar, judecător și uneori divinizat. Între ele se duceau războaie continue pentru controlul unor teritorii precum Siria. Vechile cetăți grecești, tot mai mici și mai slabe, au format ligi (precum Liga Ahee și Liga Etoliană) ca să reziste.</p>`
    },
    {
      type: "text",
      title: "5. Ce este elenismul",
      html: `<p>Termenul <b>elenism</b> (de la germanul Droysen, secolul al XIX-lea) desemnează perioada de la moartea lui Alexandru (323 î.Hr.) până la cucerirea romană a Egiptului (30 î.Hr.) și cultura care o caracterizează: o <b>civilizație greacă extinsă și amestecată</b> cu culturile orientale.</p>
<ul>
<li><b>Limba comună</b>: <b>koiné</b>, o greacă simplificată, vorbită și scrisă din Egipt până în Persia. Și Noul Testament va fi scris în koiné.</li>
<li><b>Orașe noi</b>: Alexandru și urmașii săi au întemeiat zeci de orașe cu nume grecești (Alexandriile, Antiohiile, Seleucia) cu gimnazii, teatre, temple, piețe. O nouă elită greacă conducea populațiile locale.</li>
<li><b>Întâlnirea culturilor</b>: cultul lui Isis și Serapis, arta greco-budistă din Gandhara (chipuri de Buddha cu trăsături grecești), amestec de zeități.</li>
<li><b>Cosmopolitism</b>: după criza polis-ului, omul nu se mai simte «cetățean al unui oraș», ci <b>cetățean al lumii</b> (<i>kosmopolítes</i>).</li>
<li><b>Economia</b>: mari schimburi comerciale și monede comune, rute pe mare și caravane până în India și China.</li>
</ul>
<p>Nu toți au beneficiat însă: grecii dominau, iar localnicii rămâneau adesea la margine. Și nu au lipsit răscoalele, ca cea a Macabeilor în Iudeea împotriva regelui seleucid Antiochos al IV-lea (167 î.Hr.).</p>`
    },
    {
      type: "text",
      title: "6. Știința, filosofia și arta elenistice",
      html: `<p>Regii elenistici finanțau cultura din prestigiu. Centrul era <b>Alexandria Egiptului</b>, cu <b>Museion</b>-ul (institut de cercetare) și <b>Biblioteca</b>, care urmărea să adune toate cărțile lumii (estimările vorbesc despre sute de mii de suluri). <b>Farul</b> din Alexandria (circa 280 î.Hr., peste 100 de metri) era una dintre cele șapte minuni ale lumii.</p>
<ul>
<li><b>Matematica</b>: <b>Euclid</b> a scris <i>Elementele</i> (circa 300 î.Hr.), manualul de geometrie folosit peste două mii de ani. <b>Arhimede</b> din Siracuza (287-212 î.Hr.) a calculat arii și volume, a descoperit legea pârghiei și a hidrostaticii («Evrika!»).</li>
<li><b>Astronomia și geografia</b>: <b>Aristarh din Samos</b> a propus ca Pământul să se rotească în jurul Soarelui. <b>Eratostene</b> a măsurat circumferința Pământului (circa 40.000 km) cu umbra unui băț la Siena și la Alexandria. <b>Hiparh</b> a catalogat stelele.</li>
<li><b>Medicina</b>: Herofil și Erasistrat au studiat anatomia și sistemul nervos.</li>
<li><b>Filosofia</b>: <b>stoicismul</b> (Zenon: a trăi după rațiune și natură, a accepta destinul), <b>epicureismul</b> (Epicur: liniștea interioară, <i>ataraxia</i>), <b>scepticismul</b>, <b>cinismul</b>. Caută fericirea individuală într-o lume mare și nesigură.</li>
<li><b>Arta</b>: mai dramatică și mai realistă: <b>Laocoon</b>, <b>Victoria din Samotracia</b>, <b>Afrodita din Milo</b>; portrete realiste, scene din viața de zi cu zi.</li>
<li><b>Literatura</b>: se naște filologia (studiul textelor) și poezia rafinată a lui Callimah și Teocrit.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: măsurarea Pământului cu un băț",
      html: `<p><b>Eratostene</b>, directorul Bibliotecii din Alexandria (circa 240 î.Hr.), a aflat că la Siena (azi Assuan), în ziua solstițiului de vară, la amiază, Soarele luminează fundul unei fântâni (este la verticală). La Alexandria, în același moment, un băț vertical aruncă o umbră: unghiul este de circa <b>7,2°</b>, adică 1/50 dintr-un unghi plin.</p>
<ol>
<li>Dacă 7,2° corespund distanței Alexandria-Siena (circa 5000 de stadii),</li>
<li>atunci întreaga circumferință este de 50 de ori mai mare: 250.000 de stadii.</li>
<li>Cu stadionul cel mai probabil (circa 157-185 m) se obțin circa <b>40.000-46.000 km</b>: la mai puțin de 15% de valoarea reală (40.075 km).</li>
</ol>
<p>Cu o geometrie elementară, un băț și o idee genială, a fost măsurată planeta. Poți repeta experimentul cu un prieten dintr-un alt oraș, folosind un gnomon!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: cuvinte grecești de azi",
      html: `<p>Koiné și știința elenistică ne-au lăsat un vocabular enorm: <b>geometrie</b> (măsurarea pământului), <b>bibliotecă</b>, <b>muzeu</b> (casa Muzelor), <b>filologie</b>, <b>cosmopolit</b>, <b>gimnaziu</b>. Când spunem <b>«epicurian»</b> (dedicat plăcerilor) sau <b>«stoic»</b> (impasibil) folosim cuvinte ale școlilor elenistice, deși adesea cu un sens diferit: Epicur considera plăcere mai ales liniștea minții, nu luxul!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Nodul gordian",
      html: `<p>La Gordion, în Frigia, un oracol spunea că cel care va desface un nod foarte încâlcit, care lega un car de jugul său, va deveni stăpânul Asiei. Alexandru, după legendă, neputând să-l desfacă, l-a <b>tăiat cu sabia</b>. De aici expresia «a tăia nodul gordian»: a rezolva o problemă dificilă cu un gest hotărât.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Mormântul pierdut",
      html: `<p>Trupul lui Alexandru a fost dus în Egipt de Ptolemeu I și înmormântat la Alexandria, unde mormântul a fost vizitat timp de secole de împărați romani (Augustus, Caracalla). Apoi i s-a pierdut orice urmă: în ciuda multor căutări, nimeni nu a mai găsit mormântul. Este una dintre marile mistere ale arheologiei.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege elenismul",
      intro: "O civilizație care pune laolaltă lumi diferite: iată câteva analogii.",
      tabs: [
        {
          label: "🍲 Supa lumii",
          html: `<p>Imaginează-ți elenismul ca pe o mare <b>supă</b>: zeama este <b>cultura greacă</b> (limbă, filosofie, teatru, orașe), la care se adaugă ingrediente din Orient (religii egiptene și persane, știință babiloniană, artă indiană). Rezultatul nu este nici doar grecesc, nici doar oriental: este o cultură <b>mixtă</b>.</p>
<p>Exemplu: un rege indo-grec din Bactria, Menandru (secolul al II-lea î.Hr.), dialoghează cu un călugăr budist într-un text celebru, «Milindapañha». O monedă cu text grecesc pe o față și indian pe cealaltă: un obiect care vorbește două limbi.</p>`
        },
        {
          label: "🏛️ Înainte și după Alexandru",
          html: `<table>
<tr><th></th><th>Înainte (polis clasic)</th><th>După (epoca elenistică)</th></tr>
<tr><td>Statul</td><td>Mic polis de cetățeni</td><td>Mare regat cu un rege</td></tr>
<tr><td>Cetățeanul</td><td>Participă la viața politică</td><td>Supus, adesea departe de putere</td></tr>
<tr><td>Filosofia</td><td>Politică și virtute publică</td><td>Fericire individuală și cosmopolitism</td></tr>
<tr><td>Cultura</td><td>Mai ales greacă</td><td>Mixtă greco-orientală</td></tr>
<tr><td>Limba</td><td>Dialecte grecești</td><td>Koiné comună</td></tr>
</table>`
        },
        {
          label: "🗺️ Rotește globul",
          html: `<p>Rotește globul și urmărește marșul lui Alexandru și marile orașe elenistice.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 40.76, lon: 22.52, label: "Pella", color: "#2563eb" },
              { lat: 36.8, lon: 36.2, label: "Issos", color: "#ef4444" },
              { lat: 31.2, lon: 29.9, label: "Alexandria", color: "#16a34a" },
              { lat: 36.4, lon: 43.3, label: "Gaugamela", color: "#ef4444" },
              { lat: 32.5, lon: 44.4, label: "Babilon", color: "#f97316" },
              { lat: 29.93, lon: 52.9, label: "Persepolis", color: "#ef4444" },
              { lat: 32.7, lon: 73.4, label: "Hydaspes", color: "#ef4444" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6], color: "#dc2626" }]
          }
        },
        {
          label: "📅 Axa timpului",
          html: `<p>Parcurge viața lui Alexandru și a urmașilor săi.</p>`,
          widget: "timeline",
          options: {
            unit: "anni",
            events: [
              { year: -356, label: "Se naște Alexandru", icon: "👶" },
              { year: -338, label: "Cheroneea", icon: "⚔️" },
              { year: -334, label: "Granicos", icon: "🏇" },
              { year: -331, label: "Gaugamela, Alexandria", icon: "🏛️" },
              { year: -326, label: "Hydaspes", icon: "🐘" },
              { year: -323, label: "Moartea lui Alexandru", icon: "🕯️" },
              { year: -301, label: "Ipsos, regatele elenistice", icon: "👑" },
              { year: -146, label: "Roma distruge Corintul", icon: "🦅" },
              { year: -30, label: "Sfârșitul Egiptului ptolemeic", icon: "🏺" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de la Filip la elenism",
      nodes: [
        { id: "filippo", label: "Filip al II-lea", x: 50, y: 6, color: "#0ea5e9", html: "Întărește armata și statul; învinge la Cheroneea (338 î.Hr.).", why: "Cetățile erau epuizate și divizate; Filip a știut să unească diplomația, banii din mine și o armată nouă cu sarisa." },
        { id: "alessandro", label: "Alexandru", x: 22, y: 30, color: "#ef4444", html: "Cucerește imperiul persan (334-323 î.Hr.).", why: "A moștenit o armată gata și un vis panelenic; slăbiciunea persană și îndrăzneala lui au făcut restul." },
        { id: "fusione", label: "Fuziunea culturilor", x: 78, y: 30, color: "#16a34a", html: "Nunțile de la Susa, orașe noi, preluarea unor obiceiuri persane.", why: "Pentru a guverna popoare diferite, Alexandru a încercat să unească elitele greco-macedonene și persane; mulți macedoneni însă nu au acceptat." },
        { id: "diadochi", label: "Războaiele diadohilor", x: 50, y: 52, color: "#f97316", html: "Generalii își dispută imperiul (323-301 î.Hr.).", why: "Imperiul era prea vast și prea legat de o persoană: fără un moștenitor adult, generalii l-au împărțit." },
        { id: "regni", label: "Regate elenistice", x: 20, y: 75, color: "#7c3aed", html: "Ptolemei, Seleucizi, Antigonizi, Pergam.", why: "Monarhii bazate pe armate profesioniste și funcționari greci, care guvernau populații locale: erau mari, dar instabile." },
        { id: "cultura", label: "Cultura elenistică", x: 80, y: 75, color: "#eab308", html: "Koiné, știință, filosofii, artă mixtă.", why: "Regii finanțau cercetarea din prestigiu; limba comună și orașele noi au înlesnit schimbul de idei pe o arie vastă." },
        { id: "roma", label: "Cucerirea romană", x: 50, y: 95, color: "#334155", html: "Macedonia 168, Corint 146, Pergam 133, Egipt 30 î.Hr.", why: "Regatele, slăbite de războaie interne, au căzut unul după altul în fața Romei, care le-a moștenit cultura." }
      ],
      edges: [
        ["filippo", "alessandro", "pregătește"],
        ["alessandro", "fusione", "promovează"],
        ["alessandro", "diadochi", "lasă"],
        ["diadochi", "regni", "creează"],
        ["fusione", "cultura", "alimentează"],
        ["regni", "cultura", "finanțează"],
        ["regni", "roma", "cad în fața"],
        ["cultura", "roma", "moștenită de"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: elenismul",
      questions: [
        { type: "mc", q: "Ce este koiné?", options: ["Limba greacă comună a epocii elenistice", "Un tip de navă", "O adunare"], answer: 0, explain: "Greacă simplificată, folosită în tot imperiul." },
        { type: "mc", q: "Unde se afla Museion-ul cu marea bibliotecă?", options: ["Alexandria", "Atena", "Pergam"], answer: 0, explain: "Alexandria Egiptului, capitala Ptolemeilor." },
        { type: "tf", q: "Eratostene a măsurat cu bună precizie circumferința Pământului.", answer: true, explain: "Cu umbra unui băț la Siena și la Alexandria." },
        { type: "mc", q: "Ce dinastie a domnit în Egipt după Alexandru?", options: ["Ptolemeii", "Seleucizii", "Antigonizii"], answer: 0, explain: "Întemeiată de Ptolemeu I." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Filip al II-lea</b> (359-336 î.Hr.) unifică Grecia sub Macedonia (Cheroneea, 338). <b>Alexandru</b> (356-323 î.Hr.) cucerește imperiul persan: Granicos, Issos, Gaugamela, India.</li>
<li>După moartea lui Alexandru, <b>diadohii</b> își împart imperiul: <b>Ptolemeii</b>, <b>Seleucizii</b>, <b>Antigonizii</b>.</li>
<li><b>Elenismul</b>: cultură greacă extinsă și amestecată cu cea orientală, koiné, cosmopolitism.</li>
<li>Alexandria: Museion, Biblioteca, Farul. <b>Euclid</b>, <b>Arhimede</b>, <b>Eratostene</b>, <b>Aristarh</b>.</li>
<li>Sfârșitul elenismului: cucerirea romană (Macedonia 168/146, Egipt 30 î.Hr.).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Sarisa", d: "Lancea lungă a infanteriștilor macedoneni." },
    { t: "Falanga macedoneană", d: "Infanterie compactă înarmată cu sarise." },
    { t: "Liga de la Corint", d: "Alianța cetăților sub conducerea lui Filip al II-lea." },
    { t: "Diadohi", d: "Generalii urmași ai lui Alexandru." },
    { t: "Elenism", d: "Civilizație greacă extinsă și amestecată cu culturi orientale (323-30 î.Hr.)." },
    { t: "Koiné", d: "Greaca comună vorbită în toată lumea elenistică." },
    { t: "Cosmopolitism", d: "Sentimentul de a fi cetățean al lumii, nu doar al unui polis." },
    { t: "Museion", d: "Institut de cercetare din Alexandria." },
    { t: "Stoicism", d: "Filosofie care îndeamnă să trăiești după rațiune și natură." },
    { t: "Epicureism", d: "Filosofie care caută liniștea evitând durerea." },
    { t: "Satrap", d: "Guvernator al unei provincii persane." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce bătălie din 338 î.Hr. i-a dat lui Filip al II-lea controlul Greciei?", options: ["Cheroneea", "Marathon", "Gaugamela"], answer: 0, explain: "Cheroneea, împotriva Atenei și Tebei." },
      { type: "mc", q: "Cine a fost învățătorul lui Alexandru?", options: ["Aristotel", "Platon", "Euclid"], answer: 0, explain: "Aristotel." },
      { type: "tf", q: "Alexandru a cucerit imperiul persan în câțiva ani.", answer: true, explain: "Între 334 și 330 î.Hr. a cucerit cea mai mare parte a imperiului." },
      { type: "text", q: "Cum se numesc generalii care și-au împărțit imperiul după moartea lui Alexandru?", answer: ["diadohii", "diadohi"], explain: "Diadohii, «urmașii»." },
      { type: "mc", q: "Ce oraș întemeiat de Alexandru a devenit capitală culturală?", options: ["Alexandria Egiptului", "Antiohia", "Pella"], answer: 0, explain: "Cu Museion și Bibliotecă." },
      { type: "mc", q: "Ce savant din Siracuza a studiat pârghia și hidrostatica?", options: ["Arhimede", "Euclid", "Eratostene"], answer: 0, explain: "Arhimede (287-212 î.Hr.)." },
      { type: "order", q: "Pune în ordine cronologică.", items: ["Cheroneea", "Granicos", "Gaugamela", "Moartea lui Alexandru", "Bătălia de la Ipsos"], explain: "338, 334, 331, 323, 301 î.Hr." },
      { type: "mc", q: "Care dintre următoarele NU este un regat elenistic?", options: ["Imperiul roman", "Regatul Ptolemeilor", "Regatul Seleucizilor"], answer: 0, explain: "Roma era o altă putere." },
      { type: "num", q: "La ce vârstă a murit Alexandru cel Mare?", answer: 32, tol: 1, explain: "S-a născut în 356 și a murit în 323 î.Hr., la circa 32 de ani." },
      { type: "tf", q: "Elenismul a fost doar răspândirea culturii grecești, fără influențe orientale.", answer: false, explain: "A fost o întâlnire și un amestec de culturi." },
      { type: "mc", q: "Cu ce metodă geometrică a măsurat Eratostene Pământul?", options: ["Cu umbra unui băț în două orașe", "Cu un telescop", "Cu busola"], answer: 0, explain: "A comparat unghiul umbrei la Alexandria și la Siena." }
    ]
  }
});

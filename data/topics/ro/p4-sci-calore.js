TOPIC('ro', {
  id: "p4-sci-calore",
  title: "Căldura și temperatura",
  intro: "De ce se răcește ciocolata caldă și se topește înghețata? De ce au șinele trenului spații între o bucată și alta? Ca să înțelegem, trebuie să descoperim diferența dintre <b>căldură</b> și <b>temperatură</b>, cum funcționează <b>termometrul</b> și ce este <b>dilatarea</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Căldura și temperatura nu sunt același lucru",
      html: `<p>În viața de zi cu zi spunem „e cald” sau „ce căldură!”, dar pentru oamenii de știință sunt două lucruri diferite.</p>
<ul>
<li><b>Căldura</b> este o formă de <b>energie</b> care <b>trece</b> de la un corp mai cald la unul mai rece. Trece <b>întotdeauna</b> în această direcție, niciodată invers (de la sine).</li>
<li><b>Temperatura</b> este <b>măsura</b> cât de cald sau de rece este un corp. Depinde de cât se agită particulele lui: cu cât se mișcă mai repede, cu atât temperatura este mai mare.</li>
</ul>
<p>Căldura continuă să treacă până când cele două corpuri au <b>aceeași temperatură</b>: se spune că au ajuns la <b>echilibru termic</b>.</p>
<p>Exemplu: mâna ta pe o bancă de metal simte frig. Nu „frigul” intră în mână: este <b>căldura</b> din mână care iese și trece în metal!</p>
<p>O cadă cu apă călduță conține mult mai multă energie termică decât o ceșcuță de cafea fierbinte, chiar dacă temperatura ei este mai mică: pentru că are <b>mult mai multă materie</b>.</p>`
    },
    {
      type: "svg",
      title: "Căldura merge de la cald la rece",
      svg: `<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg">
<rect width="620" height="280" fill="#fff7ed"/>
<rect x="40" y="80" width="200" height="140" rx="16" fill="#fca5a5" stroke="#b91c1c" stroke-width="4"/>
<text x="140" y="140" font-size="26" text-anchor="middle" fill="#7f1d1d" font-weight="bold">☕ 80 °C</text>
<text x="140" y="180" font-size="18" text-anchor="middle" fill="#7f1d1d">cald</text>
<rect x="380" y="80" width="200" height="140" rx="16" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="4"/>
<text x="480" y="140" font-size="26" text-anchor="middle" fill="#1e3a8a" font-weight="bold">🧊 5 °C</text>
<text x="480" y="180" font-size="18" text-anchor="middle" fill="#1e3a8a">rece</text>
<g stroke="#f97316" stroke-width="10"><line x1="250" y1="130" x2="350" y2="130"/><line x1="250" y1="170" x2="350" y2="170"/></g>
<g fill="#f97316"><polygon points="350,115 375,130 350,145"/><polygon points="350,155 375,170 350,185"/></g>
<text x="310" y="105" font-size="20" text-anchor="middle" fill="#c2410c" font-weight="bold">CĂLDURĂ</text>
<text x="310" y="255" font-size="18" text-anchor="middle" fill="#1f2937">…până când temperaturile devin egale (echilibru termic)</text>
</svg>`,
      caption: "Căldura trece întotdeauna de la corpul mai cald la cel mai rece, niciodată invers."
    },
    {
      type: "text",
      title: "Termometrul și scările de temperatură",
      html: `<p><b>Termometrul</b> este instrumentul care măsoară temperatura. Cel clasic este un tubuleț subțire de sticlă cu un lichid înăuntru (odinioară mercur, azi alcool colorat sau un aliaj special). Când este cald, lichidul se <b>dilată</b> (ocupă mai mult loc) și urcă; când este frig, se contractă și coboară.</p>
<p>În Italia, ca și la noi, se folosește scara <b>Celsius</b> (°C), inventată de astronomul suedez <b>Anders Celsius</b> în <b>1742</b>:</p>
<ul>
<li><b>0 °C</b> = temperatura la care gheața se topește (și apa îngheață);</li>
<li><b>100 °C</b> = temperatura la care apa fierbe (la nivelul mării);</li>
<li>între ele, 100 de părți egale: <b>gradele</b>. De aceea se mai numea și scara „centigradă”.</li>
</ul>
<p>Sub zero, temperaturile sunt <b>negative</b>: −5 °C se citește „minus cinci grade” sau „cinci grade sub zero”.</p>
<p>Câteva temperaturi pe care e bine să le știi:</p>
<ul>
<li>corpul uman sănătos: aproximativ <b>36–37 °C</b> (peste circa 37,5 °C se vorbește de febră);</li>
<li>o cameră confortabilă: aproximativ <b>20 °C</b>;</li>
<li>congelatorul de acasă: aproximativ <b>−18 °C</b>;</li>
<li>cuptorul pentru pizza: chiar și <b>400 °C</b>.</li>
</ul>
<p>Există termometre de multe feluri: <b>medical</b> (de la 35 la 42 °C, pentru febră), <b>de cameră</b> (pentru aer), <b>digital</b>, <b>cu infraroșu</b> (măsoară fără să atingă), de bucătărie…</p>`
    },
    {
      type: "svg",
      title: "Cum citim termometrul",
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<rect x="120" y="20" width="40" height="260" rx="20" fill="#ffffff" stroke="#334155" stroke-width="4"/>
<circle cx="140" cy="295" r="30" fill="#ef4444" stroke="#334155" stroke-width="4"/>
<rect x="132" y="150" width="16" height="140" fill="#ef4444"/>
<g stroke="#334155" stroke-width="3">
<line x1="160" y1="270" x2="185" y2="270"/><line x1="160" y1="230" x2="185" y2="230"/><line x1="160" y1="190" x2="185" y2="190"/><line x1="160" y1="150" x2="185" y2="150"/><line x1="160" y1="110" x2="185" y2="110"/><line x1="160" y1="70" x2="185" y2="70"/><line x1="160" y1="30" x2="185" y2="30"/>
</g>
<g font-size="18" fill="#1f2937"><text x="192" y="276">−20</text><text x="192" y="236">−10</text><text x="192" y="196">0</text><text x="192" y="156">10</text><text x="192" y="116">20</text><text x="192" y="76">30</text><text x="192" y="36">40</text></g>
<text x="300" y="60" font-size="20" fill="#1f2937" font-weight="bold">Aici lichidul ajunge la 10 °C</text>
<text x="300" y="110" font-size="17" fill="#1e40af">🧊 0 °C: gheața se topește</text>
<text x="300" y="145" font-size="17" fill="#15803d">🏠 20 °C: cameră</text>
<text x="300" y="180" font-size="17" fill="#b91c1c">🤒 37 °C: corp uman</text>
<text x="300" y="215" font-size="17" fill="#7c3aed">❄️ −18 °C: congelator</text>
<text x="300" y="250" font-size="17" fill="#c2410c">♨️ 100 °C: apa fierbe</text>
<text x="300" y="290" font-size="15" fill="#475569">(în afara acestei scări)</text>
</svg>`,
      caption: "Lichidul roșu urcă și coboară în tubuleț. Se citește numărul unde se termină coloana."
    },
    {
      type: "widget",
      title: "Termometrul ca o axă a numerelor",
      widget: "numberLine",
      options: { min: -10, max: 40, step: 5, start: 20, marks: [0, 37] },
      caption: "Broscuța pornește de la 20 °C. Fă sărituri ca să urmărești temperatura: noaptea scade cu 5 grade, apoi cu încă 5… Reușești să ajungi sub zero? Punctele violet arată 0 °C și 37 °C."
    },
    {
      type: "quiz",
      title: "Mini-test: căldura și termometrul",
      questions: [
        { type: "mc", q: "Căldura trece…", options: ["de la corpul mai rece la cel mai cald", "de la corpul mai cald la cel mai rece", "în ambele direcții în același fel"], answer: 1, explain: "Căldura trece de la sine de la cald la rece." },
        { type: "num", q: "Temperatura este 4 °C și scade cu 7 grade. La cât ajunge?", answer: -3, unit: "°C", explain: "4 − 7 = −3 °C: trei grade sub zero." },
        { type: "tf", q: "În scara Celsius apa fierbe la 100 °C (la nivelul mării).", answer: true, explain: "0 °C gheața se topește, 100 °C apa fierbe." }
      ]
    },
    {
      type: "text",
      title: "Cum călătorește căldura",
      html: `<p>Căldura se propagă în trei moduri:</p>
<ol>
<li><b>Conducția</b>: căldura trece <b>prin solide</b>, de la particulă la particulă, prin contact. Pune o linguriță de metal în ceaiul fierbinte: după puțin timp și mânerul arde.</li>
<li><b>Convecția</b>: în <b>lichide</b> și în <b>gaze</b> partea caldă devine mai ușoară și <b>urcă</b>, cea rece <b>coboară</b>: se formează niște „cercuri” numite <b>curenți de convecție</b>. Așa încălzește caloriferul întreaga cameră și așa se încălzește toată apa din oală.</li>
<li><b>Radiația</b>: căldura călătorește ca <b>radiație</b> (raze infraroșii), chiar <b>în vid</b>, fără să aibă nevoie de materie. Așa ajunge până la noi căldura Soarelui, prin spațiu, și așa te încălzești în fața unui foc de tabără.</li>
</ol>
<p><b>Conductori și izolatori</b>: <b>metalele</b> (cupru, aluminiu, fier) sunt buni <b>conductori</b>: căldura le străbate repede. Lemnul, plasticul, lâna, polistirenul, plutea și mai ales <b>aerul nemișcat</b> sunt <b>izolatori</b>: căldura trece foarte încet. De aceea cratițele sunt din metal, dar mânerele din plastic sau lemn!</p>`
    },
    {
      type: "svg",
      title: "Conducție, convecție, radiație",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fefce8"/>
<text x="105" y="30" font-size="18" text-anchor="middle" font-weight="bold" fill="#b91c1c">Conducție</text>
<rect x="40" y="150" width="130" height="80" rx="8" fill="#fecaca" stroke="#7f1d1d" stroke-width="3"/>
<text x="105" y="200" font-size="16" text-anchor="middle">ceai fierbinte</text>
<line x1="90" y1="180" x2="165" y2="60" stroke="#94a3b8" stroke-width="10" stroke-linecap="round"/>
<g fill="#ef4444"><circle cx="100" cy="165" r="5"/><circle cx="115" cy="140" r="5"/><circle cx="130" cy="115" r="5"/><circle cx="145" cy="90" r="5"/></g>
<text x="105" y="265" font-size="15" text-anchor="middle">în solide, prin contact</text>
<text x="320" y="30" font-size="18" text-anchor="middle" font-weight="bold" fill="#c2410c">Convecție</text>
<path d="M260 80 L260 220 L380 220 L380 80" fill="#bae6fd" stroke="#0369a1" stroke-width="4"/>
<rect x="255" y="225" width="130" height="14" fill="#f97316"/>
<path d="M320 200 C300 160 300 120 320 100 C340 120 345 160 360 195" fill="none" stroke="#ef4444" stroke-width="4"/>
<path d="M300 110 C280 140 280 180 300 205" fill="none" stroke="#2563eb" stroke-width="4"/>
<polygon points="314,103 322,92 328,106" fill="#ef4444"/>
<polygon points="294,198 301,212 307,199" fill="#2563eb"/>
<text x="320" y="265" font-size="15" text-anchor="middle">în lichide și gaze: cel cald urcă</text>
<text x="535" y="30" font-size="18" text-anchor="middle" font-weight="bold" fill="#a16207">Radiație</text>
<circle cx="480" cy="110" r="38" fill="#facc15"/>
<g stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 6"><line x1="520" y1="120" x2="590" y2="180"/><line x1="515" y1="140" x2="570" y2="205"/><line x1="525" y1="100" x2="605" y2="150"/></g>
<text x="590" y="225" font-size="30" text-anchor="middle">🌍</text>
<text x="535" y="265" font-size="15" text-anchor="middle">chiar și în vid</text>
</svg>`,
      caption: "Trei moduri de a călători: din mână în mână (conducție), cu un circuit de curenți (convecție), cu raze (radiație)."
    },
    {
      type: "widget",
      title: "Conductor sau izolator?",
      widget: "classify",
      options: {
        groups: ["Bun conductor", "Izolator"],
        items: [
          ["🥄 lingură de oțel", 0],
          ["🍳 fundul de cupru al cratiței", 0],
          ["🥫 doză de aluminiu", 0],
          ["🧤 mănușă de lână", 1],
          ["🪵 polonic de lemn", 1],
          ["📦 polistiren", 1],
          ["🍾 dop de plută", 1],
          ["🔩 cui de fier", 0]
        ]
      },
      caption: "Metalele conduc bine căldura; materialele cu mult aer prins în ele (lână, polistiren, pene) izolează."
    },
    {
      type: "text",
      title: "Dilatarea termică",
      html: `<p>Când un corp se <b>încălzește</b>, particulele lui se mișcă mai mult și se <b>depărtează</b> puțin: corpul devine ceva mai mare. Aceasta se numește <b>dilatare termică</b>. Când se răcește, se întâmplă invers: <b>contracție</b>.</p>
<ul>
<li><b>Solidele</b> se dilată puțin: o șină de oțel lungă de 10 m, cu o diferență de 40 °C între iarnă și vară, se alungește cu aproximativ <b>5 mm</b>. Puțin, dar suficient ca să încovoaie șinele dacă nu ar exista <b>spațiile</b> (rosturile)!</li>
<li><b>Lichidele</b> se dilată mai mult: este principiul termometrului.</li>
<li><b>Gazele</b> se dilată foarte mult: un balon lăsat la soare se umflă, iar în frigider se dezumflă.</li>
</ul>
<p>De aceea podurile, șinele, drumurile și clădirile au <b>rosturi de dilatare</b>: mici spații sau „piepteni” de metal care le permit să se alungească fără să se rupă. Iar firele electrice vara atârnă mai mult decât iarna!</p>
<p>O excepție faimoasă: <b>apa</b> între 0 °C și 4 °C face invers (se contractă încălzindu-se), iar când îngheață se dilată. De aceea gheața plutește.</p>`
    },
    {
      type: "svg",
      title: "Rostul șinei",
      svg: `<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg">
<rect width="620" height="260" fill="#f1f5f9"/>
<text x="20" y="40" font-size="20" fill="#1e40af" font-weight="bold">❄️ Iarna</text>
<rect x="20" y="60" width="270" height="22" fill="#64748b"/>
<rect x="320" y="60" width="270" height="22" fill="#64748b"/>
<text x="305" y="110" font-size="16" text-anchor="middle" fill="#1e40af">spațiu larg</text>
<line x1="290" y1="92" x2="320" y2="92" stroke="#1e40af" stroke-width="3"/>
<text x="20" y="160" font-size="20" fill="#b91c1c" font-weight="bold">☀️ Vara</text>
<rect x="20" y="180" width="283" height="22" fill="#94a3b8"/>
<rect x="307" y="180" width="283" height="22" fill="#94a3b8"/>
<text x="305" y="230" font-size="16" text-anchor="middle" fill="#b91c1c">spațiu aproape închis</text>
<text x="450" y="140" font-size="16" fill="#1f2937">metalul cald</text>
<text x="450" y="160" font-size="16" fill="#1f2937">se alungește</text>
</svg>`,
      caption: "Fără spațiul dintre o șină și alta, vara oțelul dilatat s-ar împinge și s-ar încovoia."
    },
    {
      type: "example",
      title: "Exemplu practic: borcanul care nu se deschide",
      html: `<p>Tata nu reușește să deschidă un borcan cu dulceață care are capacul de metal. Bunica îi spune: „Ține-l o clipă sub apă caldă!”.</p>
<ol>
<li>Apa caldă încălzește capacul de metal, care este un bun <b>conductor</b>.</li>
<li>Metalul se <b>dilată</b> mai mult decât sticla: capacul se lărgește puțin.</li>
<li>Capacul se deșurubează ușor! 🎉</li>
</ol>
<p>Atenție: nu folosi niciodată apă clocotită pe sticla rece, pentru că poate crăpa (o parte se dilată, iar cealaltă nu).</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: îmbrăcatul în straturi",
      html: `<p>Iarna este mai bine să îmbraci <b>trei bluze subțiri</b> decât una singură groasă. De ce?</p>
<ul>
<li>Între un strat și altul rămâne prins <b>aer nemișcat</b>, care este un foarte bun <b>izolator</b>.</li>
<li>Hainele nu „dau” căldură: <b>rețin</b> căldura produsă de corpul nostru și nu o lasă să fugă spre aerul rece.</li>
</ul>
<p>Din același motiv păsările iarna își „umflă” penele, iar casele moderne au <b>geamuri duble</b> cu aer (sau gaz) la mijloc și <b>termoizolație</b> pe pereți: se irosește mai puțină energie pentru încălzire.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Turnul Eiffel crește vara",
      html: `<p>Turnul Eiffel din Paris este făcut din fier: vara, cu căldura, se <b>alungește cu aproximativ 15 centimetri</b> față de iarnă! Iar în zilele însorite partea luminată se dilată mai mult decât cealaltă, așa că vârful se înclină ușor în partea opusă Soarelui.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Primul termometru a fost italian",
      html: `<p>Pe la <b>1593</b>, <b>Galileo Galilei</b> a construit <b>termoscopul</b>: un balon de sticlă cu un tub scufundat în apă. Aerul dinăuntru, încălzindu-se sau răcindu-se, făcea apa din tub să coboare sau să urce. Nu avea încă numere: spunea doar „mai cald” sau „mai rece”. Medicul <b>Santorio Santorio</b> din Padova i-a adăugat o scară pentru măsurarea febrei, iar la Florența, în jurul anului 1654, au apărut primele termometre închise, cu alcool.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Zero absolut",
      html: `<p>Se poate coborî la nesfârșit cu temperatura? Nu! La <b>−273,15 °C</b> particulele ar fi aproape complet nemișcate: este <b>zero absolut</b>, cea mai joasă temperatură posibilă. Oamenii de știință folosesc scara <b>Kelvin</b>, care pornește chiar de acolo (0 K). În spațiul cosmic adânc sunt aproximativ −270 °C. Cea mai ridicată și cea mai scăzută temperatură măsurate vreodată pe Pământ? Aproximativ <b>+56,7 °C</b> în Valea Morții (SUA, 1913) și <b>−89,2 °C</b> la baza Vostok din Antarctica (1983).</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>Căldura</b> = energie care trece de la corpul mai cald la cel mai rece. <b>Temperatura</b> = măsura cât de cald este un corp.</li>
<li>Termometrul și scara <b>Celsius</b>: 0 °C gheața se topește, 100 °C apa fierbe. Corpul uman ≈ 37 °C.</li>
<li>Propagare: <b>conducție</b> (solide), <b>convecție</b> (lichide și gaze), <b>radiație</b> (și în vid).</li>
<li><b>Conductori</b> (metale) și <b>izolatori</b> (lemn, lână, plastic, aer).</li>
<li><b>Dilatare</b>: încălzindu-se, corpurile se măresc; răcindu-se, se contractă.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege căldura și temperatura",
      intro: "Căldura și temperatura se confundă ușor. Încearcă cu o analogie, un experiment, un model 3D sau scările folosite în alte țări.",
      tabs: [
        {
          label: "💃 Petrecerea dansantă a particulelor",
          html: `<p>Imaginează-ți particulele unui obiect ca pe niște oameni la o petrecere:</p>
<ul>
<li><b>temperatura</b> este <b>cât de dezlănțuit dansează</b> oamenii: muzică lentă = frig, muzică rock = cald;</li>
<li><b>căldura</b> este energia care trece atunci când o sală dezlănțuită și una liniștită deschid ușa dintre ele: dansatorii agitați îi „molipsesc” pe cei calmi până când toți dansează în același ritm (<b>echilibru termic</b>);</li>
<li><b>dilatarea</b>: când dansează mai tare, oamenii au nevoie de mai mult loc și mulțimea se lărgește!</li>
</ul>
<p>O sală uriașă plină de oameni care dansează încet (cada cu apă călduță) poate avea mai multă „energie totală” decât o cămăruță cu trei persoane dezlănțuite (ceșcuța fierbinte).</p>`
        },
        {
          label: "🖐️ Experimentul cu trei lighene",
          html: `<p>Un experiment celebru, descris încă din 1690 de filozoful englez John Locke:</p>
<ol>
<li>Pregătește trei lighene: unul cu apă <b>rece</b>, unul cu apă <b>călduță</b>, unul cu apă <b>caldă</b> (nu clocotită!).</li>
<li>Pune mâna dreaptă în cea rece și mâna stângă în cea caldă, timp de un minut.</li>
<li>Apoi pune ambele mâini în cea călduță.</li>
</ol>
<p>Surpriză: mâna dreaptă o simte <b>caldă</b>, cea stângă <b>rece</b>! Mâinile noastre nu măsoară temperatura, ci simt dacă energia termică <b>intră</b> sau <b>iese</b>. De aceea avem nevoie de termometru.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<path d="M30 100 L50 190 L170 190 L190 100 Z" fill="#93c5fd" stroke="#1e40af" stroke-width="4"/>
<path d="M210 100 L230 190 L370 190 L390 100 Z" fill="#c4b5fd" stroke="#5b21b6" stroke-width="4"/>
<path d="M410 100 L430 190 L550 190 L570 100 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<text x="110" y="85" font-size="18" text-anchor="middle" fill="#1e40af" font-weight="bold">rece 10 °C</text>
<text x="300" y="85" font-size="18" text-anchor="middle" fill="#5b21b6" font-weight="bold">călduță 25 °C</text>
<text x="490" y="85" font-size="18" text-anchor="middle" fill="#991b1b" font-weight="bold">caldă 40 °C</text>
<text x="110" y="40" font-size="30" text-anchor="middle">✋</text>
<text x="490" y="40" font-size="30" text-anchor="middle">🤚</text>
<text x="300" y="40" font-size="30" text-anchor="middle">✋🤚 ?</text>
</svg>`
        },
        {
          label: "☀️ Căldura Soarelui în vid (3D)",
          html: `<p>Între Soare și Pământ sunt aproximativ <b>150 de milioane de km</b> de spațiu aproape gol: nici aer, nici apă. Și totuși căldura Soarelui ajunge! Călătorește prin <b>radiație</b>, cu viteza luminii, în aproximativ 8 minute și 20 de secunde.</p>
<p>Privește Sistemul Solar: planetele mai apropiate de Soare sunt foarte fierbinți (Mercur ziua depășește 400 °C), cele îndepărtate sunt înghețate (Neptun aproximativ −200 °C). Venus este însă cea mai fierbinte dintre toate, aproximativ 460 °C, din cauza „hainei” groase de dioxid de carbon care reține căldura: un puternic <b>efect de seră</b>.</p>`,
          scene: "solar",
          options: { labels: true }
        },
        {
          label: "🇺🇸 Fahrenheit și Kelvin",
          html: `<p>Nu toți folosesc gradele Celsius!</p>
<ul>
<li>În <b>Statele Unite</b> se folosește scara <b>Fahrenheit</b> (°F), inventată de germanul <b>Daniel Gabriel Fahrenheit</b> în 1724, care a construit și primul termometru cu mercur de încredere (1714). În această scară apa îngheață la <b>32 °F</b> și fierbe la <b>212 °F</b>; corpul uman are aproximativ <b>98,6 °F</b>. Dacă un prieten american spune „azi sunt 100 de grade”, înseamnă aproximativ 38 °C: o căldură mare, nu apă care fierbe!</li>
<li><b>Oamenii de știință</b> folosesc scara <b>Kelvin</b> (K), propusă de <b>Lord Kelvin</b> în 1848, care pornește de la zero absolut: 0 K = −273,15 °C, iar 0 °C = 273,15 K. Gradele sunt la fel de mari ca cele Celsius.</li>
</ul>
<p>Curiozitate: în prima versiune a lui Celsius (1742) numerele erau invers! 0 era apa care fierbe și 100 gheața. A fost inversată la scurt timp după moartea lui, poate de Linné.</p>`
        },
        {
          label: "🧪 Termosul în 3D",
          html: `<p><b>Termosul</b> (inventat de scoțianul James Dewar în 1892) păstrează ceaiul cald și apa rece blocând <b>toate cele trei</b> moduri în care călătorește căldura:</p>
<ul>
<li><b>vidul</b> dintre doi pereți de sticlă blochează conducția și convecția (nu există materie!);</li>
<li>pereții <b>argintați</b>, ca niște oglinzi, trimit înapoi radiația;</li>
<li><b>dopul</b> izolant împiedică aerul cald să iasă pe sus.</li>
</ul>
<p>Rotește modelul tăiat și privește straturile, de la exterior spre interior.</p>`,
          scene: "layers",
          options: {
            layers: [
              { r: 1, color: "#475569", label: "Carcasa exterioară" },
              { r: 0.92, color: "#cbd5e1", label: "Perete de sticlă argintat" },
              { r: 0.88, color: "#f1f5f9", label: "Vid (nici conducție, nici convecție)" },
              { r: 0.72, color: "#e2e8f0", label: "Perete interior argintat" },
              { r: 0.68, color: "#b45309", label: "Ceai fierbinte" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta căldurii și a temperaturii: atinge un nod și descoperă de ce",
      nodes: [
        { id: "particelle", label: "Particule în mișcare", x: 50, y: 6, color: "#7c3aed", html: "Materia este făcută din particule care se mișcă mereu.", why: "Este baza a tot: cu cât particulele se agită mai mult, cu atât corpul este mai cald. Au înțeles asta în secolul al XIX-lea oameni de știință ca Rudolf Clausius, James Clerk Maxwell și Ludwig Boltzmann." },
        { id: "temperatura", label: "Temperatura", x: 25, y: 28, color: "#dc2626", html: "Măsura cât de cald este un corp, adică cât se agită particulele lui.", why: "Nu depinde de cât de mare este corpul: o picătură și o oală de apă clocotită au aceeași temperatură (100 °C)." },
        { id: "calore", label: "Căldura", x: 75, y: 28, color: "#f97316", html: "Energie care trece de la corpul mai cald la cel mai rece.", why: "Până în secolul al XVIII-lea se credea că căldura este un fluid invizibil, „caloricul”. În 1798, contele Rumford, observând că forând tunurile se producea căldură fără încetare, a înțeles că aceasta provine din mișcare. James Joule (anii 1840) a măsurat câtă energie de mișcare este necesară pentru a încălzi apa." },
        { id: "termometro", label: "Termometrul", x: 10, y: 52, color: "#2563eb", html: "Instrument care măsoară temperatura folosind dilatarea.", why: "Termoscopul lui Galileo (în jur de 1593) folosea dilatarea aerului; termometrele moderne folosesc dilatarea unui lichid sau variația unui curent electric (cele digitale)." },
        { id: "scale", label: "Scările Celsius, Fahrenheit, Kelvin", x: 32, y: 76, color: "#0ea5e9", html: "Moduri diferite de a număra temperatura.", why: "Pentru a construi o scară sunt necesare două puncte fixe ușor de reprodus: Celsius a ales gheața care se topește și apa care fierbe și le-a împărțit în 100 de părți. Kelvin a pornit de la zero absolut, limita cea mai de jos posibilă." },
        { id: "equilibrio", label: "Echilibru termic", x: 60, y: 52, color: "#16a34a", html: "Două corpuri aflate în contact ajung să aibă aceeași temperatură.", why: "Căldura trece cât timp există o diferență de temperatură. De aceea funcționează termometrul: așteaptă să ajungă la aceeași temperatură cu corpul tău și apoi o „citește”." },
        { id: "propagazione", label: "Conducție, convecție, radiație", x: 88, y: 52, color: "#ca8a04", html: "Cele trei moduri în care călătorește căldura.", why: "În solide, particulele își transmit agitația prin contact; în fluide partea caldă, mai puțin densă, urcă; radiația este lumină infraroșie, descoperită în 1800 de William Herschel, care a pus un termometru dincolo de roșul curcubeului produs de o prismă." },
        { id: "dilatazione", label: "Dilatarea", x: 60, y: 92, color: "#be185d", html: "Corpurile încălzindu-se își măresc volumul.", why: "Particulele mai agitate au nevoie de mai mult loc. Inginerii țin cont de asta prin rosturile de dilatare de la poduri și șine." },
        { id: "isolanti", label: "Conductori și izolatori", x: 88, y: 80, color: "#0f766e", html: "Metale: conduc bine. Lemn, lână, aer: izolează.", why: "În metale există electroni liberi să se miște, care transportă rapid energia; în materialele cu aer prins în ele, căldura trece greu." }
      ],
      edges: [
        ["particelle", "temperatura", "agitația"],
        ["particelle", "calore", "energia"],
        ["temperatura", "termometro", "se măsoară cu"],
        ["termometro", "scale", "folosește"],
        ["calore", "equilibrio", "duce la"],
        ["calore", "propagazione", "călătorește prin"],
        ["propagazione", "isolanti", "depinde de material"],
        ["calore", "dilatazione", "provoacă"],
        ["dilatazione", "termometro", "face să funcționeze"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: propagarea și dilatarea",
      questions: [
        { type: "mc", q: "Cum ajunge pe Pământ căldura Soarelui?", options: ["Prin conducție", "Prin convecție", "Prin radiație"], answer: 2, explain: "Prin vidul spațiului poate călători doar prin radiație." },
        { type: "mc", q: "De ce au șinele mici spații între o bucată și alta?", options: ["Ca să economisească oțel", "Pentru că vara metalul se dilată", "Ca să facă zgomot"], answer: 1, explain: "Spațiul permite șinei să se alungească fără să se încovoaie." },
        { type: "tf", q: "Lemnul este un bun conductor de căldură.", answer: false, explain: "Este un izolator: de aceea se folosesc polonice și mânere de lemn." }
      ]
    }
  ],
  glossary: [
    { t: "Căldură", d: "Energie care trece de la un corp mai cald la unul mai rece." },
    { t: "Temperatură", d: "Mărime care arată cât de cald sau de rece este un corp." },
    { t: "Termometru", d: "Instrument care măsoară temperatura." },
    { t: "Grad Celsius (°C)", d: "Unitate de temperatură: 0 °C gheața se topește, 100 °C apa fierbe." },
    { t: "Echilibru termic", d: "Situația în care două corpuri aflate în contact au aceeași temperatură." },
    { t: "Conducție", d: "Trecerea căldurii printr-un corp, prin contact între particule." },
    { t: "Convecție", d: "Transportul căldurii în lichide și gaze prin curenți de fluid." },
    { t: "Radiație", d: "Propagarea căldurii sub formă de radiație, chiar și în vid." },
    { t: "Conductor termic", d: "Material pe care căldura îl străbate ușor (de ex. metalele)." },
    { t: "Izolator termic", d: "Material pe care căldura îl străbate cu greu (de ex. lâna, lemnul)." },
    { t: "Dilatare termică", d: "Mărirea dimensiunilor unui corp când se încălzește." },
    { t: "Zero absolut", d: "Cea mai joasă temperatură posibilă: −273,15 °C (0 K)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce este temperatura?", options: ["Un tip de energie care trece de la un corp la altul", "Măsura cât de cald sau de rece este un corp", "Un tip de termometru"], answer: 1, explain: "Căldura este energia care trece; temperatura este măsura." },
      { type: "tf", q: "Atingând metalul rece, frigul trece în mâna noastră.", answer: false, explain: "Căldura mâinii este cea care trece în metal." },
      { type: "num", q: "Care este temperatura normală a corpului uman, în grade Celsius (rotunjește la unitate)?", answer: 37, unit: "°C", tol: 1, explain: "Aproximativ 36–37 °C." },
      { type: "mc", q: "Care material este cel mai bun conductor de căldură?", options: ["Lâna", "Cuprul", "Polistirenul"], answer: 1, explain: "Metalele, ca cuprul, conduc foarte bine." },
      { type: "mc", q: "Caloriferul încălzește aerul din toată camera mai ales prin…", options: ["conducție", "convecție", "dilatare"], answer: 1, explain: "Aerul cald urcă, cel rece coboară: curenți de convecție." },
      { type: "num", q: "Dimineața sunt −2 °C; la prânz temperatura urcă cu 9 grade. Câte grade sunt la prânz?", answer: 7, unit: "°C", explain: "−2 + 9 = 7 °C." },
      { type: "text", q: "Cum se numește creșterea volumului unui corp care se încălzește?", answer: ["dilatare", "dilatare termică", "dilatarea", "dilatarea termică"], explain: "Dilatarea termică." },
      { type: "order", q: "Pune în ordine de la cea mai joasă temperatură la cea mai ridicată.", items: ["Congelatorul de acasă", "Gheața care se topește", "Cameră confortabilă", "Corpul uman", "Apa care fierbe"], explain: "−18 °C, 0 °C, 20 °C, 37 °C, 100 °C." },
      { type: "mc", q: "Cine a construit termoscopul în jurul anului 1593?", options: ["Anders Celsius", "Galileo Galilei", "Daniel Fahrenheit"], answer: 1, explain: "Galileo Galilei, la Padova." },
      { type: "tf", q: "Căldura Soarelui poate străbate vidul spațiului.", answer: true, explain: "Călătorește prin radiație, care nu are nevoie de materie." },
      { type: "mc", q: "De ce se îmbracă mai multe bluze subțiri în loc de una groasă?", options: ["Pentru că între straturi rămâne aer nemișcat, care izolează", "Pentru că hainele produc căldură", "Pentru că lâna conduce căldura"], answer: 0, explain: "Aerul nemișcat este un foarte bun izolator și reține căldura corpului." },
      { type: "num", q: "Într-o zi de iarnă sunt 3 °C; noaptea temperatura scade cu 8 grade. Câte grade sunt noaptea?", answer: -5, unit: "°C", explain: "3 − 8 = −5 °C." }
    ]
  }
});

TOPIC('ro', {
  id: "p3-sci-aria",
  title: "Aerul",
  intro: "Nu-l vedem, nu are miros și totuși este peste tot: este <b>aerul</b>! 🌬️ Descoperim ce este, din ce este făcut, de ce fără el nu am putea trăi și cum îl putem proteja.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Aerul este materie",
      html: `<p>Aerul este <b>invizibil</b>, <b>inodor</b> (fără miros) și <b>insipid</b> (fără gust). Dar atenție: <b>nu este „nimic”</b>! Aerul este <b>materie</b>, ca apa și pietrele, doar că se află în stare <b>gazoasă</b>.</p>
<p>De unde știm? Din experimente! Aerul:</p>
<ul>
<li>📦 <b>ocupă spațiu</b>: un pahar „gol” este de fapt plin cu aer;</li>
<li>⚖️ <b>are greutate</b>: o minge umflată cântărește puțin mai mult decât una dezumflată;</li>
<li>🎈 <b>poate fi comprimat</b>: dacă astupi o seringă fără ac, poți apăsa pistonul, pentru că aerul se „strânge”;</li>
<li>💨 <b>se extinde</b> și apasă în toate direcțiile: de aceea umflă baloanele și roțile bicicletei.</li>
</ul>`
    },
    {
      type: "example",
      title: "Experiment: șervețelul care nu se udă",
      html: `<p>Îți trebuie: un pahar, un șervețel de hârtie, un lighean cu apă.</p>
<ol>
<li>Boțește șervețelul și înghesuie-l bine pe <b>fundul</b> paharului.</li>
<li>Întoarce paharul cu gura în jos și scufundă-l <b>drept</b> în lighean, până jos.</li>
<li>Scoate-l tot drept și atinge șervețelul…</li>
</ol>
<p>Este <b>uscat</b>! 😲 Aerul din pahar ocupă spațiul și nu lasă apa să intre. Încearcă apoi să înclini paharul sub apă: ies niște <b>bule</b> (aerul scapă) și apa intră.</p>`
    },
    {
      type: "text",
      title: "Din ce este făcut aerul",
      html: `<p>Aerul nu este un singur gaz: este un <b>amestec de gaze</b>. Din 100 de părți de aer uscat sunt aproximativ:</p>
<ul>
<li>🔵 <b>78 de părți de azot</b>: cel mai abundent gaz; este util plantelor (care îl iau din sol datorită unor bacterii);</li>
<li>🔴 <b>21 de părți de oxigen</b>: cel pe care îl respirăm și care face focul să ardă;</li>
<li>⚪ <b>1 parte de alte gaze</b>: mai ales <b>argon</b>, apoi puțin <b>dioxid de carbon</b> (CO₂), de care plantele au nevoie pentru fotosinteză.</li>
</ul>
<p>În aer mai sunt și <b>vapori de apă</b> (apa sub formă de gaz, care formează norii și ploaia) și <b>praf fin</b>: praf, polen, grăunțe foarte mici pe care le vezi „dansând” într-o rază de soare care intră pe fereastră. ☀️</p>`
    },
    {
      type: "svg",
      title: "Compoziția aerului",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="300" y="30" font-size="22" font-weight="bold" fill="#1f2937" text-anchor="middle">100 de „bilițe” de aer</text>
<g>
<rect x="30" y="55" width="390" height="40" fill="#3b82f6"/>
<rect x="420" y="55" width="105" height="40" fill="#ef4444"/>
<rect x="525" y="55" width="5" height="40" fill="#a3a3a3"/>
</g>
<rect x="30" y="55" width="500" height="40" fill="none" stroke="#1f2937" stroke-width="3"/>
<text x="225" y="83" font-size="20" fill="#ffffff" text-anchor="middle" font-weight="bold">AZOT 78</text>
<text x="472" y="83" font-size="18" fill="#ffffff" text-anchor="middle" font-weight="bold">O₂ 21</text>
<g font-size="20" fill="#1f2937">
<rect x="40" y="130" width="30" height="30" fill="#3b82f6"/><text x="85" y="152">Azot (N₂): 78 din 100</text>
<rect x="40" y="175" width="30" height="30" fill="#ef4444"/><text x="85" y="197">Oxigen (O₂): 21 din 100</text>
<rect x="40" y="220" width="30" height="30" fill="#a3a3a3"/><text x="85" y="242">Argon, dioxid de carbon și altele: circa 1</text>
</g>
<text x="300" y="285" font-size="16" fill="#475569" text-anchor="middle">+ vapori de apă și praf fin, care variază de la loc la loc</text>
</svg>`,
      caption: "Dacă aerul ar fi făcut din 100 de bilițe, 78 ar fi de azot, 21 de oxigen și doar 1 de alte gaze."
    },
    {
      type: "3d",
      title: "Moleculele aerului",
      scene: "molecule",
      options: {
        atoms: [
          { x: -2.4, y: 0.6, z: 0, r: 0.5, color: "#3b82f6", label: "N (azot)" },
          { x: -1.5, y: 0.6, z: 0, r: 0.5, color: "#3b82f6", label: "N (azot)" },
          { x: 0.5, y: 0.6, z: 0, r: 0.5, color: "#ef4444", label: "O (oxigen)" },
          { x: 1.4, y: 0.6, z: 0, r: 0.5, color: "#ef4444", label: "O (oxigen)" },
          { x: 0, y: -1.2, z: 0, r: 0.5, color: "#374151", label: "C (carbon)" },
          { x: -1.0, y: -1.2, z: 0, r: 0.45, color: "#ef4444", label: "O" },
          { x: 1.0, y: -1.2, z: 0, r: 0.45, color: "#ef4444", label: "O" }
        ],
        bonds: [[0, 1], [2, 3], [4, 5], [4, 6]]
      },
      caption: "Sus: o moleculă de azot (N₂) și una de oxigen (O₂). Jos: dioxid de carbon (CO₂). Rotește-le cu degetul!"
    },
    {
      type: "quiz",
      title: "Mini-test: ce este aerul",
      questions: [
        { type: "tf", q: "Un pahar „gol” este de fapt plin cu aer.", answer: true, explain: "Aerul ocupă spațiu: o demonstrează experimentul cu șervețelul uscat." },
        { type: "mc", q: "Care este cel mai abundent gaz din aer?", options: ["Oxigenul", "Azotul", "Dioxidul de carbon"], answer: 1, explain: "Azotul: aproximativ 78 de părți din 100." },
        { type: "num", q: "Din 100 de părți de aer, aproximativ câte sunt de oxigen?", answer: 21, explain: "Aproximativ 21 din 100." }
      ]
    },
    {
      type: "text",
      title: "De ce este important aerul",
      html: `<ul>
<li>🫁 <b>Respirația</b>: oamenii, animalele și chiar plantele iau <b>oxigen</b> și elimină <b>dioxid de carbon</b>. Fără aer, o persoană rezistă doar câteva minute.</li>
<li>🌿 <b>Fotosinteza</b>: ziua plantele verzi iau <b>dioxid de carbon</b>, cu lumina Soarelui își produc hrana și eliberează <b>oxigen</b>. Plantele și animalele se ajută reciproc!</li>
<li>🔥 <b>Arderea</b>: focul are nevoie de oxigen ca să ardă.</li>
<li>🛡️ <b>Atmosfera</b>: stratul de aer care înconjoară Pământul ne protejează de cele mai periculoase raze ale Soarelui (datorită <b>ozonului</b>), reține căldura noaptea și face să ardă aproape toate meteoriții înainte să ajungă pe pământ („stelele căzătoare” 🌠).</li>
<li>🌬️ <b>Vântul și vremea</b>: aerul în mișcare formează vântul, aduce norii și ploaia, învârte morile de vânt și umflă pânzele.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Straturile atmosferei",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#1e1b4b", label: "Exosfera: aerul aproape că nu mai există, aici zboară mulți sateliți" },
          { r: 0.9, color: "#4338ca", label: "Termosfera: aurore polare și Stația Spațială (aproximativ 400 km)" },
          { r: 0.8, color: "#6366f1", label: "Mezosfera: aici ard stelele căzătoare" },
          { r: 0.7, color: "#38bdf8", label: "Stratosfera: stratul de ozon care ne protejează" },
          { r: 0.6, color: "#bae6fd", label: "Troposfera: până la aproximativ 12 km, aici sunt norii, ploaia și vântul" },
          { r: 0.5, color: "#16a34a", label: "Pământul" }
        ]
      },
      caption: "Atmosfera este împărțită în straturi (grosimile de aici nu sunt la scară). Noi trăim în troposferă, cea mai apropiată de Pământ."
    },
    {
      type: "text",
      title: "Aerul cald urcă, aerul rece coboară",
      html: `<p>Când aerul se <b>încălzește</b>, se lărgește (se dilată) și devine mai <b>ușor</b>: de aceea <b>urcă</b>. Aerul <b>rece</b> este mai greu și <b>coboară</b>.</p>
<ul>
<li>🎈 <b>Baloanele cu aer cald</b> zboară pentru că un arzător încălzește aerul din interiorul balonului.</li>
<li>🏠 Într-o cameră, căldura se simte mai mult aproape de tavan.</li>
<li>🌬️ <b>Vântul</b> se naște așa: aerul cald urcă și în locul lui vine aer mai proaspăt din altă parte.</li>
</ul>`
    },
    {
      type: "example",
      title: "Exemplu practic: balonul de pe sticlă",
      html: `<p>Împreună cu un adult: pune un balon dezumflat pe gâtul unei sticle goale de plastic.</p>
<ul>
<li>Pune sticla într-un bol cu <b>apă caldă</b> 🔥: balonul se <b>umflă</b> puțin! Aerul din interior s-a încălzit și s-a dilatat.</li>
<li>Apoi pune-o în <b>apă rece</b> 🧊: balonul se <b>dezumflă</b> din nou.</li>
</ul>
<p>Tocmai ai demonstrat că aerul cald ocupă mai mult spațiu decât aerul rece!</p>`
    },
    {
      type: "text",
      title: "Poluarea aerului",
      html: `<p>Aerul se <b>poluează</b> când primește fum și substanțe dăunătoare:</p>
<ul>
<li>🚗 gazele de eșapament ale mașinilor, camioanelor și motoretelor;</li>
<li>🏭 fumul fabricilor și al centralelor electrice;</li>
<li>🏠 încălzirea caselor (mai ales cu lemne, motorină sau cărbune);</li>
<li>🔥 incendiile și deșeurile arse.</li>
</ul>
<p><b>Particulele fine</b> fac rău plămânilor, iar excesul de <b>dioxid de carbon</b> reține prea multă căldură și încălzește planeta (<b>schimbări climatice</b>).</p>
<p>Ce putem face? 🚶 să mergem pe jos sau cu bicicleta, 🚌 să folosim transportul în comun, 🌳 să plantăm copaci, 💡 să stingem luminile și încălzirea când nu sunt necesare.</p>`
    },
    {
      type: "widget",
      title: "Face bine sau rău aerului?",
      widget: "classify",
      options: {
        groups: ["Ajută la un aer curat 🌳", "Poluează aerul 🏭"],
        items: [
          ["🚲 să mergi la școală cu bicicleta", 0],
          ["🔥 să arzi plastic în grădină", 1],
          ["🌳 să plantezi copaci", 0],
          ["🚗 să lași mașina pornită când stă pe loc", 1],
          ["🚌 să folosești autobuzul", 0],
          ["🏭 fumul fabricilor fără filtre", 1],
          ["🌡️ să dai încălzirea puțin mai încet", 0],
          ["🚶 să mergi la școală în grup, pe jos (pedibus)", 0]
        ]
      },
      caption: "Trage fiecare acțiune în grupul potrivit."
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>În fiecare zi respiri <b>de peste 20 000 de ori</b>! Un copil în repaus face aproximativ 20 de respirații pe minut: în 24 de ore sunt aproape 29 000. Iar aerul de deasupra noastră apasă pe fiecare centimetru pătrat al corpului nostru cu o greutate de aproximativ <b>1 kilogram</b>: nu o simțim pentru că trupul nostru împinge în afară cu aceeași forță. Această apăsare se numește <b>presiune atmosferică</b> și a descoperit-o italianul <b>Evangelista Torricelli</b> în <b>1643</b>, inventând <b>barometrul</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…?",
      html: `<p>Cu cât urci mai sus în munți, cu atât aerul este mai <b>rarefiat</b> (este mai puțin). Pe vârful <b>Everestului</b> (8849 m) fiecare respirație aduce în plămâni doar aproximativ <b>o treime</b> din oxigenul pe care îl respiri la nivelul mării. De aceea aproape toți alpiniștii folosesc butelii de oxigen. 🏔️ Iar avioanele zboară la aproximativ 10 000 de metri cu cabina „presurizată”.</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Aerul este materie: ocupă spațiu, are greutate, poate fi comprimat.</li>
<li>Este un amestec: azot 78%, oxigen 21%, alte gaze 1% (argon, CO₂…), plus vapori de apă și praf fin.</li>
<li>Este necesar pentru respirație, pentru fotosinteză și pentru ardere.</li>
<li>Aerul cald urcă, aerul rece coboară: așa se naște vântul.</li>
<li>Atmosfera ne protejează; poluarea o dăunează.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege aerul",
      intro: "Aerul nu se vede: de aceea este greu de imaginat. Iată câteva moduri de a-l „vedea”.",
      tabs: [
        {
          label: "🐠 Suntem pești în aer",
          html: `<p>Gândește-te la <b>pești</b>: trăiesc scufundați în apă și poate nici nu observă că există. Noi suntem la fel: trăim pe <b>fundul unui „ocean” de aer</b> înalt de sute de kilometri!</p>
<p>Când pedalezi, simți aerul care te împinge în față, exact cum simți apa când înoți. Și, ca apa, și aerul „apasă” asupra noastră de sus: este presiunea atmosferică.</p>`
        },
        {
          label: "🎨 Bilițele colorate",
          html: `<p>Imaginează-ți un săculeț cu <b>100 de bilițe</b>: 78 <b>albastre</b> (azot), 21 <b>roșii</b> (oxigen) și 1 <b>gri</b> (argon, dioxid de carbon și alte gaze).</p>
<p>De fiecare dată când respiri, iei un astfel de „săculeț”. Corpul folosește o parte din bilițele roșii și dă înapoi niște bilițe de dioxid de carbon. Bilițele albastre intră și ies fără să fie folosite!</p>
<p>Încearcă să numeri 78 de bilițe albastre cu contorul: sunt multe!</p>`,
          widget: "counter",
          options: { emoji: "🔵", max: 100 }
        },
        {
          label: "🌍 Atmosfera ca o coajă",
          html: `<p>Dacă Pământul ar fi un <b>măr</b>, atmosfera în care sunt norii și ploaia ar fi subțire <b>ca o coajă</b>! 🍎</p>
<p>Troposfera are doar 10–12 km înălțime (până la aproximativ 18 km la Ecuator), în timp ce raza Pământului este de aproximativ 6371 km. De aceea trebuie să avem grijă de ea: este un strat subțire și prețios.</p>`,
          scene: "globe",
          options: { points: [{ lat: 41.9, lon: 12.5, label: "Roma", color: "#ef4444" }, { lat: 27.99, lon: 86.93, label: "Everest: aer rarefiat", color: "#3b82f6" }] }
        },
        {
          label: "🔄 Plante și animale: schimbul",
          html: `<p>Animalele (și noi) iau <b>oxigen</b> și dau <b>dioxid de carbon</b>. Plantele, ziua, fac invers prin fotosinteză: iau dioxid de carbon și dau oxigen. Este ca un <b>schimb de daruri</b> între prieteni!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<circle cx="520" cy="45" r="28" fill="#facc15"/>
<rect x="100" y="150" width="20" height="80" fill="#92400e"/>
<circle cx="110" cy="120" r="60" fill="#22c55e"/>
<text x="110" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#166534">plantă</text>
<text x="470" y="170" font-size="70" text-anchor="middle">🧒</text>
<text x="470" y="250" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">copil</text>
<defs><marker id="a1" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#dc2626"/></marker><marker id="a2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<path d="M190 100 Q300 50 410 100" stroke="#dc2626" stroke-width="5" fill="none" marker-end="url(#a1)"/>
<path d="M410 175 Q300 220 190 175" stroke="#475569" stroke-width="5" fill="none" marker-end="url(#a2)"/>
<text x="300" y="60" font-size="22" text-anchor="middle" fill="#dc2626" font-weight="bold">oxigen O₂</text>
<text x="300" y="235" font-size="22" text-anchor="middle" fill="#475569" font-weight="bold">dioxid de carbon CO₂</text>
</svg>`
        },
        {
          label: "🎈 Experimente cu mâinile",
          html: `<p>Trei probe foarte rapide ca să „simți” aerul:</p>
<ul>
<li>✋ Suflă pe palma mâinii: simți aerul care se mișcă.</li>
<li>📄 Lasă să cadă o foaie desfăcută și una boțită: foaia desfăcută coboară încet pentru că aerul o <b>frânează</b>.</li>
<li>🥤 Pune o pai în apă, astupă gaura de sus cu degetul și ridică-l: apa rămâne înăuntru! Este <b>presiunea aerului</b> care o ține sus.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta aerului: atinge un nod și descoperă de ce",
      nodes: [
        { id: "aria", label: "Aer", x: 50, y: 8, color: "#0ea5e9", html: "Amestec invizibil de gaze care înconjoară Pământul.", why: "Vechii greci, ca Empedocle (secolul al V-lea î.Hr.), credeau că aerul este unul dintre cele patru „elemente”, alături de pământ, apă și foc. Abia în secolul al XVIII-lea s-a descoperit că este făcut din gaze diferite." },
        { id: "materia", label: "Este materie", x: 15, y: 28, color: "#64748b", html: "Ocupă spațiu, are greutate, poate fi comprimat și se poate extinde.", why: "O demonstrează experimentele: paharul întors, mingea umflată care cântărește mai mult, seringa astupată. Torricelli a măsurat pentru prima dată în 1643 greutatea aerului cu barometrul cu mercur." },
        { id: "azoto", label: "Azot 78%", x: 38, y: 40, color: "#3b82f6", html: "Cel mai abundent gaz din aer.", why: "A fost descoperit în 1772 de Daniel Rutherford. Numele francez <i>azote</i>, ales de Lavoisier, înseamnă „fără viață”, pentru că într-un vas plin numai cu azot un animal nu poate respira." },
        { id: "ossigeno", label: "Oxigen 21%", x: 62, y: 40, color: "#ef4444", html: "Gazul pe care îl respirăm și care face focul să ardă.", why: "Descoperit în anii 1770 de Carl Scheele și Joseph Priestley; Antoine Lavoisier a înțeles rolul lui în respirație și în ardere și i-a dat numele." },
        { id: "co2", label: "Dioxid de carbon", x: 85, y: 28, color: "#475569", html: "Gaz prezent în cantitate mică (aproximativ 0,04%).", why: "Este necesar plantelor pentru fotosinteză. Arzând cărbune, petrol și gaze, omul i-a mărit cantitatea, iar asta încălzește planeta." },
        { id: "resp", label: "Respirația și fotosinteza", x: 50, y: 62, color: "#16a34a", html: "Ființele vii schimbă gaze cu aerul.", why: "Oxigenul din aer există datorită plantelor și algelor: acum miliarde de ani, primii organisme care făceau fotosinteză l-au „umplut” cu oxigen." },
        { id: "atmo", label: "Atmosfera", x: 18, y: 78, color: "#6366f1", html: "Stratul de aer din jurul Pământului, împărțit în troposferă, stratosferă, mezosferă, termosferă, exosferă.", why: "Rămâne lipită de Pământ datorită forței gravitaționale. Stratul de ozon din stratosferă filtrează razele ultraviolete ale Soarelui." },
        { id: "vento", label: "Vântul", x: 50, y: 92, color: "#f59e0b", html: "Aer care se deplasează.", why: "Soarele încălzește diferit uscatul și marea: aerul cald urcă, cel rece vine să-i ia locul." },
        { id: "inq", label: "Poluarea", x: 82, y: 78, color: "#dc2626", html: "Fum și pulberi care fac aerul dăunător.", why: "Se nasc mai ales din trafic, încălzire și industrie. De aceea există legi și stații care măsoară în fiecare zi calitatea aerului." }
      ],
      edges: [
        ["aria", "materia", "este"],
        ["aria", "azoto", "conține"],
        ["aria", "ossigeno", "conține"],
        ["aria", "co2", "conține puțin"],
        ["ossigeno", "resp", "este necesar pentru"],
        ["co2", "resp", "este necesar pentru"],
        ["aria", "atmo", "formează"],
        ["atmo", "vento", "se mișcă sub formă de"],
        ["co2", "inq", "crește odată cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: aerul și viața",
      questions: [
        { type: "mc", q: "Ziua, plantele prin fotosinteză eliberează…", options: ["oxigen", "azot", "fum"], answer: 0, explain: "Iau dioxid de carbon și eliberează oxigen." },
        { type: "tf", q: "Aerul cald tinde să coboare.", answer: false, explain: "Aerul cald este mai ușor și urcă; cel rece coboară." },
        { type: "mc", q: "În care strat al atmosferei se află norii și ploaia?", options: ["Troposfera", "Exosfera", "Mezosfera"], answer: 0, explain: "Troposfera este stratul cel mai de jos, unde au loc fenomenele meteo." }
      ]
    }
  ],
  glossary: [
    { t: "Aer", d: "Amestec de gaze (mai ales azot și oxigen) care înconjoară Pământul." },
    { t: "Gaz", d: "Stare a materiei fără formă și volum proprii: ocupă tot spațiul pe care îl găsește." },
    { t: "Azot", d: "Cel mai abundent gaz din aer (aproximativ 78%)." },
    { t: "Oxigen", d: "Gaz din aer (aproximativ 21%) necesar pentru respirație și pentru ardere." },
    { t: "Dioxid de carbon", d: "Gaz (CO₂) produs prin respirație și folosit de plante în fotosinteză." },
    { t: "Atmosferă", d: "Înveliș de aer care înconjoară Pământul." },
    { t: "Presiune atmosferică", d: "Apăsarea pe care o exercită aerul asupra a tot ce se află sub el." },
    { t: "Praf fin", d: "Particule minuscule de praf, polen și fum suspendate în aer." },
    { t: "Poluare", d: "Prezența în aer a unor substanțe dăunătoare sănătății și mediului." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "Aerul nu are greutate.", answer: false, explain: "Aerul este materie și are greutate: o minge umflată cântărește mai mult decât una dezumflată." },
      { type: "mc", q: "În experimentul cu paharul întors, șervețelul rămâne uscat pentru că…", options: ["paharul este magic", "aerul ocupă spațiul și nu lasă apa să intre", "apa este prea rece"], answer: 1, explain: "Aerul din pahar ocupă spațiu." },
      { type: "num", q: "Din 100 de părți de aer, aproximativ câte sunt de azot?", answer: 78, explain: "Aproximativ 78 din 100." },
      { type: "text", q: "Care gaz din aer îl respirăm și ne este necesar ca să trăim?", answer: ["oxigen", "oxigenul", "o2", "o₂"], explain: "Oxigenul." },
      { type: "mc", q: "Plantele, prin fotosinteză, absorb…", options: ["oxigen", "dioxid de carbon", "argon"], answer: 1, explain: "Absorb dioxid de carbon și eliberează oxigen." },
      { type: "tf", q: "Focul are nevoie de oxigen ca să ardă.", answer: true, explain: "Fără oxigen flacăra se stinge, ca în experimentul cu lumânarea sub pahar." },
      { type: "mc", q: "De ce zboară balonul cu aer cald?", options: ["Pentru că aerul cald din balon este mai ușor", "Pentru că are un motor cu elice", "Pentru că este plin cu apă"], answer: 0, explain: "Aerul încălzit de arzător se dilată și devine mai ușor decât aerul din jur." },
      { type: "mc", q: "Cine a inventat barometrul în 1643?", options: ["Galileo Galilei", "Evangelista Torricelli", "Alessandro Volta"], answer: 1, explain: "Evangelista Torricelli, elev al lui Galileo." },
      { type: "order", q: "Pune în ordine straturile atmosferei, de la cel mai de jos la cel mai de sus.", items: ["Troposfera", "Stratosfera", "Mezosfera", "Termosfera", "Exosfera"], explain: "Pornind de la Pământ: troposfera, stratosfera, mezosfera, termosfera, exosfera." },
      { type: "mc", q: "Care dintre aceste acțiuni ajută la menținerea aerului curat?", options: ["Arderea deșeurilor", "Mersul pe jos la școală", "Lăsarea motorului pornit"], answer: 1, explain: "Mersul pe jos nu produce gaze de eșapament." },
      { type: "tf", q: "În munții înalți aerul este mai rarefiat și la fiecare respirație intră mai puțin oxigen.", answer: true, explain: "Urcând, aerul este tot mai puțin: pe Everest fiecare respirație aduce aproximativ o treime din oxigenul de la nivelul mării." },
      { type: "text", q: "Cum se numește stratul de gaz din stratosferă care ne protejează de razele ultraviolete?", answer: ["ozon", "ozonul", "stratul de ozon", "strat de ozon"], explain: "Este stratul de ozon." }
    ]
  }
});

TOPIC('ro', {
  id: "p5-sci-corpo-umano",
  title: "Corpul uman",
  intro: "Corpul tău este o mașinărie extraordinară, făcută din aproximativ <b>37 000 de miliarde de celule</b> care lucrează împreună. Să descoperim cum <b>celulele</b> formează <b>țesuturile</b>, țesuturile formează <b>organele</b>, iar organele formează <b>aparatele</b> și <b>sistemele</b>: o echipă perfectă care te face să respiri, să mănânci, să alergi și să gândești.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "De la foarte mic la mare: nivelurile de organizare",
      html: `<p>Corpul uman este organizat ca un oraș mare, în care fiecare are sarcina lui:</p>
<ol>
<li><b>Celula</b>: cea mai mică parte vie. Este ca o singură <b>cărămidă</b>. Se vede doar la microscop.</li>
<li><b>Țesutul</b>: un grup de celule <b>la fel</b> care fac aceeași muncă, ca un <b>zid</b> de cărămizi. De ex. țesutul muscular, țesutul nervos.</li>
<li><b>Organul</b>: mai multe țesuturi diferite care lucrează împreună pentru o sarcină precisă, ca o <b>cameră</b>. De ex. inima, stomacul, plămânii.</li>
<li><b>Aparatul sau sistemul</b>: mai multe organe care colaborează pentru o mare funcție, ca o <b>casă</b> întreagă. De ex. aparatul digestiv.</li>
<li><b>Organismul</b>: toate aparatele și sistemele laolaltă: <b>ești tu</b>!</li>
</ol>`
    },
    {
      type: "svg",
      title: "Celulă → țesut → organ → aparat → organism",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fdf2f8"/>
<circle cx="50" cy="110" r="28" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<circle cx="50" cy="110" r="9" fill="#9d174d"/>
<g fill="#fbcfe8" stroke="#be185d" stroke-width="2">
<rect x="120" y="80" width="22" height="22"/><rect x="142" y="80" width="22" height="22"/><rect x="164" y="80" width="22" height="22"/>
<rect x="120" y="102" width="22" height="22"/><rect x="142" y="102" width="22" height="22"/><rect x="164" y="102" width="22" height="22"/>
<rect x="120" y="124" width="22" height="22"/><rect x="142" y="124" width="22" height="22"/><rect x="164" y="124" width="22" height="22"/>
</g>
<path d="M270 85 C250 60 225 80 240 105 L270 140 L300 105 C315 80 290 60 270 85 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
<g stroke="#7f1d1d" stroke-width="5" fill="none">
<path d="M370 55 L370 165"/><path d="M370 80 C340 90 340 130 360 150"/><path d="M370 80 C400 90 400 130 380 150"/>
</g>
<path d="M370 95 C355 85 345 98 355 108 L370 122 L385 108 C395 98 385 85 370 95 Z" fill="#ef4444"/>
<circle cx="510" cy="55" r="20" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<rect x="490" y="78" width="40" height="70" rx="12" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<line x1="495" y1="148" x2="490" y2="190" stroke="#1e3a8a" stroke-width="10"/><line x1="525" y1="148" x2="530" y2="190" stroke="#1e3a8a" stroke-width="10"/>
<g fill="#be185d" font-size="26"><text x="88" y="120">→</text><text x="198" y="120">→</text><text x="312" y="120">→</text><text x="420" y="120">→</text></g>
<g font-size="17" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="50" y="215">Celulă</text><text x="153" y="215">Țesut</text><text x="270" y="215">Organ</text><text x="370" y="215">Aparat</text><text x="510" y="215">Organism</text>
</g>
<g font-size="14" text-anchor="middle" fill="#475569">
<text x="50" y="238">musculară</text><text x="153" y="238">muscular</text><text x="270" y="238">inima</text><text x="370" y="238">circulator</text><text x="510" y="238">tu!</text>
</g>
</svg>`,
      caption: "Fiecare nivel este format din unirea multor elemente ale nivelului precedent."
    },
    {
      type: "text",
      title: "Celula, cărămida vieții",
      html: `<p>Fiecare celulă umană are trei părți principale:</p>
<ul>
<li><b>membrana celulară</b>: o „piele” foarte subțire care o înconjoară și hotărăște ce intră și ce iese;</li>
<li><b>citoplasma</b>: o substanță gelatinoasă în care au loc foarte multe reacții;</li>
<li><b>nucleul</b>: „centrul de comandă”, care conține <b>ADN-ul</b>, instrucțiunile pentru funcționarea celulei și pentru construirea altora noi.</li>
</ul>
<p>Există peste 200 de tipuri de celule, cu forme diferite, potrivite muncii lor: <b>globulele roșii</b> sunt discuri mici care transportă oxigen, <b>neuronii</b> au „fire” lungi pentru a transmite mesaje, celulele <b>mușchilor</b> sunt alungite și se scurtează pentru a ne mișca.</p>`
    },
    {
      type: "3d",
      title: "În interiorul unei celule animale",
      scene: "layers",
      options: { layers: [ { r: 1, color: "#f9a8d4", label: "Membrana celulară" }, { r: 0.93, color: "#fce7f3", label: "Citoplasma" }, { r: 0.38, color: "#a855f7", label: "Nucleul" }, { r: 0.15, color: "#6b21a8", label: "Nucleolul" } ] },
      caption: "O celulă tăiată felie (model simplificat). Rotește-o ca să vezi straturile, de la membrană până la nucleu."
    },
    {
      type: "text",
      title: "Cele patru tipuri de țesut",
      html: `<table>
<tr><th>Țesutul</th><th>Ce face</th><th>Unde se găsește</th></tr>
<tr><td>🛡️ <b>Epitelial</b></td><td>acoperă și protejează</td><td>piele, interiorul gurii și al stomacului</td></tr>
<tr><td>💪 <b>Muscular</b></td><td>se contractă și produce mișcare</td><td>mușchi, inimă, pereții intestinului</td></tr>
<tr><td>⚡ <b>Nervos</b></td><td>primește și transmite mesaje</td><td>creier, măduva spinării, nervi</td></tr>
<tr><td>🦴 <b>Conjunctiv</b></td><td>susține, leagă, transportă</td><td>oase, cartilaje, grăsime, <b>sânge</b></td></tr>
</table>
<p>Da: și <b>sângele</b> este un țesut (conjunctiv), chiar dacă este lichid!</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: celule și țesuturi",
      questions: [
        { type: "order", q: "Așază în ordine de la cel mai mic la cel mai mare.", items: ["Celulă", "Țesut", "Organ", "Aparat", "Organism"], explain: "Celulele formează țesuturile, țesuturile formează organele, organele formează aparatele, aparatele formează organismul." },
        { type: "mc", q: "Care parte a celulei conține ADN-ul?", options: ["Membrana", "Nucleul", "Citoplasma"], answer: 1, explain: "Nucleul este centrul de comandă cu ADN-ul." },
        { type: "tf", q: "Sângele este un țesut.", answer: true, explain: "Este un țesut conjunctiv lichid." }
      ]
    },
    {
      type: "text",
      title: "Aparate și sisteme: marea echipă",
      html: `<p>De obicei se numește <b>aparat</b> un grup de organe <b>diferite</b> care colaborează, iar <b>sistem</b> un grup de organe făcute mai ales din <b>același țesut</b> (de ex. sistemul nervos, sistemul muscular).</p>
<table>
<tr><th>Aparat / sistem</th><th>Organe principale</th><th>Funcția</th></tr>
<tr><td>🍝 <b>Digestiv</b></td><td>gură, esofag, stomac, intestin, ficat</td><td>transformă hrana în substanțe utile</td></tr>
<tr><td>🫁 <b>Respirator</b></td><td>nas, trahee, bronhii, plămâni</td><td>preia oxigen, elimină dioxidul de carbon</td></tr>
<tr><td>❤️ <b>Circulator</b></td><td>inimă, artere, vene, capilare, sânge</td><td>transportă oxigen și nutrienți la toate celulele</td></tr>
<tr><td>🚽 <b>Excretor</b></td><td>rinichi, vezică urinară</td><td>filtrează sângele și elimină deșeurile (urina)</td></tr>
<tr><td>🧠 <b>Nervos</b></td><td>creier, măduva spinării, nervi</td><td>comandă și coordonează tot corpul</td></tr>
<tr><td>🦴 <b>Scheletic</b></td><td>206 oase</td><td>susține și protejează</td></tr>
<tr><td>💪 <b>Muscular</b></td><td>peste 600 de mușchi</td><td>permite mișcările</td></tr>
<tr><td>👶 <b>Reproducător</b></td><td>organe diferite la băieți și la fete</td><td>permite nașterea unor noi ființe</td></tr>
</table>
<p><b>Sistemul imunitar</b> (globule albe, ganglioni limfatici…) ne apără de viruși și bacterii.</p>`
    },
    {
      type: "widget",
      title: "Organele corpului",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="420" fill="#f0f9ff"/>
<circle cx="300" cy="55" r="42" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<path d="M280 40 C280 22 320 22 320 40 C320 58 280 58 280 40 Z" fill="#f9a8d4" stroke="#9d174d" stroke-width="2"/>
<rect x="288" y="95" width="24" height="20" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<path d="M220 115 L380 115 L370 330 L230 330 Z" fill="#fde2c8" stroke="#9a3412" stroke-width="3"/>
<line x1="300" y1="100" x2="300" y2="140" stroke="#60a5fa" stroke-width="8"/>
<ellipse cx="265" cy="170" rx="30" ry="45" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<ellipse cx="335" cy="170" rx="30" ry="45" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<path d="M305 170 C295 158 282 168 290 180 L305 196 L320 180 C328 168 315 158 305 170 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
<path d="M245 222 C270 210 300 215 300 240 C285 250 255 248 245 222 Z" fill="#92400e"/>
<path d="M310 225 C340 215 360 230 345 255 C330 262 312 250 310 225 Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
<path d="M255 265 C270 255 330 255 345 268 C350 285 330 300 300 300 C270 300 250 290 255 265 Z" fill="#fdba74" stroke="#9a3412" stroke-width="2"/>
<g stroke="#9a3412" stroke-width="2" fill="none"><path d="M265 275 C285 268 315 268 335 278"/><path d="M265 288 C285 280 315 282 335 290"/></g>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Creier" },
          { x: 300, y: 120, label: "Trahee" },
          { x: 262, y: 160, label: "Plămân" },
          { x: 305, y: 180, label: "Inimă" },
          { x: 268, y: 232, label: "Ficat" },
          { x: 330, y: 240, label: "Stomac" },
          { x: 300, y: 282, label: "Intestin" }
        ]
      },
      caption: "Atinge fiecare punct și alege numele organului (schemă simplificată)."
    },
    {
      type: "example",
      title: "Exemplu practic: ce se întâmplă când alergi",
      html: `<p>În timpul unei alergări, toate aparatele lucrează împreună:</p>
<ol>
<li><b>sistemul nervos</b> (creierul) trimite mușchilor comanda „aleargă!”;</li>
<li><b>mușchii</b> se contractă și mișcă <b>oasele</b> picioarelor;</li>
<li>mușchii au nevoie de mai multă energie și oxigen: <b>aparatul respirator</b> se grăbește și respiri mai tare;</li>
<li><b>inima</b> bate mai repede (de la aproximativ 80 la peste 150 de bătăi pe minut) ca să ducă mai mult sânge;</li>
<li>pielea produce <b>transpirație</b> ca să te răcorească (și acesta este un mod de a elimina apă și săruri).</li>
</ol>
<p>Niciun aparat nu lucrează singur: este un adevărat joc de echipă!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: călătoria unui sandviș",
      html: `<p>Mănânci un sandviș cu brânză. Iată călătoria lui:</p>
<ul>
<li><b>Gura</b>: dinții îl mestecă, saliva începe să digere amidonul din pâine.</li>
<li><b>Esofagul</b>: un tub de aproximativ 25 cm îl împinge în jos până la stomac.</li>
<li><b>Stomacul</b>: sucurile gastrice îl transformă într-o păstă (timp de 2–4 ore).</li>
<li><b>Intestinul subțire</b>: lung de aproximativ 6–7 metri! Aici nutrienții trec în <b>sânge</b>.</li>
<li>Aparatul <b>circulator</b> duce nutrienții la toate celulele.</li>
<li><b>Intestinul gros</b>: absoarbe apa; ce nu este necesar este eliminat.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Potrivește organul cu aparatul lui",
      widget: "match",
      options: {
        pairs: [
          ["❤️ Inima", "Aparatul circulator"],
          ["🫁 Plămânii", "Aparatul respirator"],
          ["🍽️ Stomacul", "Aparatul digestiv"],
          ["🧠 Creierul", "Sistemul nervos"],
          ["🫘 Rinichii", "Aparatul excretor"],
          ["🦴 Femurul", "Sistemul scheletic"]
        ]
      },
      caption: "Leagă fiecare organ de aparatul sau sistemul din care face parte."
    },
    {
      type: "curiosity",
      title: "Știai că…? Numere record",
      html: `<ul>
<li><b>Inima</b> bate de aproximativ <b>100 000 de ori pe zi</b>, fără să se oprească vreodată.</li>
<li>Dacă ai așeza în șir toate <b>vasele de sânge</b> ale unui adult, ai ajunge la aproximativ <b>100 000 km</b>: de două ori și jumătate ocolul Pământului!</li>
<li>Un nou-născut are aproximativ <b>300 de oase</b>; pe măsură ce crește, unele se sudează și un adult are <b>206</b>.</li>
<li>Cel mai mic os este <b>scărița</b>, din ureche: măsoară cam 3 mm.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Corpul se înnoiește",
      html: `<p>În fiecare minut pierzi zeci de mii de celule ale pielii (o mare parte din praful din casă este… piele!). <b>Globulele roșii</b> trăiesc aproximativ <b>120 de zile</b>, iar măduva osoasă produce aproximativ <b>2 milioane pe secundă</b> ca să le înlocuiască.</p>
<p>Celulele nervoase din creier, în schimb, durează aproape toată viața: de aceea este atât de important să ne protejăm capul, de exemplu cu casca pe bicicletă! 🚲</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Celule</b> la fel → <b>țesut</b>; țesuturi diferite → <b>organ</b>; organe → <b>aparat/sistem</b>; toate laolaltă → <b>organism</b>.</li>
<li>Celula are <b>membrană</b>, <b>citoplasmă</b> și <b>nucleu</b>.</li>
<li>4 țesuturi: <b>epitelial, muscular, nervos, conjunctiv</b>.</li>
<li>Aparatele <b>colaborează</b>: niciunul nu funcționează singur.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege corpul uman",
      intro: "Dacă nivelurile de organizare ți se par abstracte, încearcă o analogie, un experiment cu mâinile sau modelul 3D.",
      tabs: [
        {
          label: "🏙️ Corpul ca un oraș",
          html: `<p>Imaginează-ți corpul ca pe un mare <b>oraș</b>:</p>
<ul>
<li><b>cetățenii</b> sunt celulele;</li>
<li><b>cartierele</b> oamenilor care au aceeași meserie sunt țesuturile;</li>
<li><b>clădirile</b> (spitalul, centrala electrică, primăria) sunt organele;</li>
<li><b>serviciile</b> orașului sunt aparatele: străzile și camioanele care transportă mărfuri (circulator), colectarea gunoiului (excretor), bucătăria și piețele (digestiv), telefoanele și primarul (nervos), poliția (imunitar)…</li>
</ul>
<p>Dacă un serviciu se blochează, tot orașul are de suferit!</p>`
        },
        {
          label: "🫀 Măsoară-ți inima",
          html: `<p>Fă un experiment cu corpul tău:</p>
<ol>
<li>pune două degete pe încheietura mâinii (în partea degetului mare) sau pe gât: simți <b>pulsul</b>;</li>
<li>numără bătăile timp de <b>15 secunde</b> și înmulțește cu 4: este frecvența ta în repaus (la un copil de 10 ani, aproximativ 70–110 pe minut);</li>
<li>fă 30 de sărituri și verifică din nou: a crescut!</li>
<li>așteaptă 2 minute: scade la loc.</li>
</ol>
<p>Ai văzut în acțiune colaborarea dintre mușchi, inimă și plămâni.</p>`
        },
        {
          label: "⚛️ Și mai mic: moleculele",
          html: `<p>Și celulele sunt făcute din părți mai mici: <b>moleculele</b>. Cea mai abundentă din corp este <b>apa</b> (H<sub>2</sub>O): aproximativ <b>60%</b> din greutatea unui adult! Fiecare moleculă de apă are 1 atom de oxigen și 2 de hidrogen. Rotește-o.</p>`,
          scene: "molecule",
          options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.75, y: 0.55, z: 0, r: 0.32, color: "#f8fafc", label: "H" }, { x: -0.75, y: 0.55, z: 0, r: 0.32, color: "#f8fafc", label: "H" } ], bonds: [ [0, 1], [0, 2] ] }
        },
        {
          label: "🧩 Matrioșka",
          html: `<p>Gândește-te la <b>matrioșkele</b> rusești, păpușile una în alta, dar invers:</p>
<p>🪆 <b>organismul</b> conține <b>aparatele</b>, care conțin <b>organele</b>, care conțin <b>țesuturile</b>, care conțin <b>celulele</b>, care conțin <b>nucleul</b> cu <b>ADN-ul</b>.</p>
<p>Fiecare păpușă este făcută din multe păpuși mai mici!</p>`
        },
        {
          label: "🌍 Medicina în lume și în istorie",
          html: `<ul>
<li>🇬🇷 Medicul grec <b>Hipocrate</b> (secolul al V-lea î.Hr.) a spus că bolile au cauze naturale, nu magice.</li>
<li>🇮🇹 La Padova, în <b>1543</b>, <b>Andrea Vesalius</b> a publicat primul mare atlas al corpului uman, desenat observând direct.</li>
<li>🇬🇧 <b>William Harvey</b> a descoperit în <b>1628</b> că sângele <b>circulă</b>, împins de inimă.</li>
<li>🇮🇹 <b>Marcello Malpighi</b> a văzut primul <b>capilarele</b> la microscop, în 1661.</li>
<li>🇨🇳 Medicina tradițională chineză își imagina corpul străbătut de „canale” de energie: un mod foarte diferit de a gândi corpul.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta corpului uman: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "cellula", label: "Celula", x: 50, y: 6, color: "#ec4899", html: "Cea mai mică unitate vie.", why: "În <b>1665</b>, englezul <b>Robert Hooke</b> a observat la microscop o bucățică de plută și a văzut multe „cămăruțe” goale: le-a numit <i>cells</i>. În 1838–1839, <b>Schleiden și Schwann</b> au înțeles că toate viețuitoarele sunt făcute din celule (teoria celulară)." },
        { id: "nucleo", label: "Nucleul și ADN-ul", x: 15, y: 20, color: "#a855f7", html: "Centrul de comandă al celulei, cu instrucțiunile.", why: "ADN-ul conține „instrucțiunile” pentru a construi și a face să funcționeze corpul. Forma lui de dublu helix a fost descoperită în <b>1953</b> de Watson și Crick, datorită și imaginilor cu raze X ale <b>Rosalindei Franklin</b>." },
        { id: "tessuto", label: "Țesutul", x: 50, y: 28, color: "#f97316", html: "Grup de celule la fel, cu aceeași sarcină.", why: "Celulele se specializează: un grup care face bine un singur lucru (să se contracte, să transmită semnale) este mai eficient. Francezul <b>Xavier Bichat</b> (în jur de 1800) a descris primul țesuturile." },
        { id: "organo", label: "Organul", x: 50, y: 50, color: "#ef4444", html: "Mai multe țesuturi laolaltă pentru o sarcină: inima, stomacul, plămânii…", why: "Inima, de exemplu, are țesut muscular pentru a pompa, nervos pentru ritm, conjunctiv pentru a o ține laolaltă și epitelial pentru a o căptuși: toate sunt necesare pentru o singură treabă." },
        { id: "apparato", label: "Aparate și sisteme", x: 50, y: 72, color: "#2563eb", html: "Grupuri de organe care îndeplinesc o mare funcție.", why: "Funcțiile complexe, cum este hrănirea, cer mai multe etape: mestecare, digestie, absorbție, eliminare. Fiecare organ face o parte din lucru, ca pe o linie de montaj." },
        { id: "organismo", label: "Organismul", x: 50, y: 94, color: "#16a34a", html: "Toate aparatele care lucrează împreună: o persoană.", why: "Corpul își menține stabile temperatura, apa și zahărul datorită colaborării aparatelor. Acest echilibru se numește <b>homeostazie</b>, cuvânt introdus de fiziologul american Walter Cannon în 1926." },
        { id: "nutr", label: "Nutriția", x: 85, y: 40, color: "#eab308", html: "Digestiv + respirator + circulator + excretor.", why: "Celulele au nevoie de hrană și oxigen ca să producă energie și produc deșeuri: patru aparate lucrează împreună ca să le aprovizioneze și să le „curețe”." },
        { id: "relazione", label: "Relația și mișcarea", x: 85, y: 75, color: "#0ea5e9", html: "Sistemul nervos, organele de simț, scheletul și mușchii.", why: "Ca să trăim, trebuie să percepem mediul (simțurile), să decidem (creierul) și să ne mișcăm (mușchii și oasele). Luigi <b>Galvani</b>, la Bologna, în 1791, a descoperit că nervii transmit semnale electrice." },
        { id: "molecole", label: "Moleculele", x: 15, y: 45, color: "#64748b", html: "Celulele sunt făcute din molecule: apă, proteine, zaharuri, grăsimi.", why: "Toată materia este făcută din atomi. Aproximativ 60% din corp este apă; proteinele construiesc țesuturile, zaharurile și grăsimile dau energie: de aceea este nevoie de o alimentație variată." }
      ],
      edges: [
        ["molecole", "cellula", "formează"],
        ["cellula", "nucleo", "conține"],
        ["cellula", "tessuto", "la fel formează"],
        ["tessuto", "organo", "diferite formează"],
        ["organo", "apparato", "laolaltă formează"],
        ["apparato", "organismo", "toate laolaltă"],
        ["apparato", "nutr", "funcții de"],
        ["apparato", "relazione", "funcții de"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: organe și aparate",
      questions: [
        { type: "mc", q: "Care aparat duce oxigen și nutrienți la toate celulele?", options: ["Digestiv", "Circulator", "Excretor"], answer: 1, explain: "Sângele, împins de inimă, transportă oxigen și nutrienți." },
        { type: "num", q: "Câte oase are un adult?", answer: 206, explain: "Un adult are 206 oase." },
        { type: "mc", q: "Rinichii fac parte din aparatul…", options: ["respirator", "excretor", "nervos"], answer: 1, explain: "Filtrează sângele și elimină deșeurile prin urină." }
      ]
    }
  ],
  glossary: [
    { t: "Celulă", d: "Cea mai mică unitate vie." },
    { t: "Nucleu", d: "Parte a celulei care conține ADN-ul și o conduce." },
    { t: "Țesut", d: "Ansamblu de celule la fel, cu aceeași funcție." },
    { t: "Organ", d: "Structură formată din mai multe țesuturi, care îndeplinește o sarcină precisă." },
    { t: "Aparat", d: "Ansamblu de organe diferite care îndeplinesc împreună o funcție." },
    { t: "Sistem", d: "Ansamblu de organe formate mai ales din același țesut (de ex. sistemul nervos)." },
    { t: "Organism", d: "Ființă vie formată din toate aparatele și sistemele ei." },
    { t: "ADN", d: "Moleculă care conține instrucțiunile ereditare ale celulei." },
    { t: "Homeostazie", d: "Capacitatea corpului de a-și menține stabile condițiile interne." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este cea mai mică unitate vie?", options: ["Organul", "Celula", "Țesutul"], answer: 1, explain: "Toate ființele vii sunt făcute din celule." },
      { type: "order", q: "Așază de la nivelul cel mai simplu la cel mai complex.", items: ["Celulă", "Țesut", "Organ", "Aparat", "Organism"], explain: "Fiecare nivel este făcut din multe elemente ale nivelului precedent." },
      { type: "mc", q: "Țesutul care transmite mesaje este…", options: ["muscular", "nervos", "epitelial"], answer: 1, explain: "Țesutul nervos transmite semnale electrice." },
      { type: "tf", q: "Un organ este format dintr-un singur tip de țesut.", answer: false, explain: "Un organ este format din mai multe țesuturi diferite care lucrează împreună." },
      { type: "text", q: "Cum se numește „pielea” subțire care înconjoară celula?", answer: ["membrană", "membrana", "membrană celulară", "membrana celulară", "membrana celulara", "membrana celulară a celulei"], explain: "Este membrana celulară." },
      { type: "mc", q: "În care organ trec nutrienții în sânge?", options: ["În stomac", "În intestinul subțire", "În esofag"], answer: 1, explain: "În intestinul subțire, prin vilozitățile intestinale." },
      { type: "mc", q: "Care aparat elimină dioxidul de carbon?", options: ["Respirator", "Digestiv", "Scheletic"], answer: 0, explain: "Prin expirație, plămânii elimină dioxidul de carbon." },
      { type: "tf", q: "Sângele este un țesut conjunctiv.", answer: true, explain: "Este un țesut conjunctiv lichid." },
      { type: "mc", q: "De aproximativ câte ori bate inima într-o zi?", options: ["Aproximativ 1 000", "Aproximativ 100 000", "Aproximativ 100 de milioane"], answer: 1, explain: "Aproximativ 100 000 de bătăi pe zi (70 pe minut × 1440 de minute ≈ 100 000)." },
      { type: "mc", q: "Cine a numit primul „celule” micile cămăruțe văzute la microscop?", options: ["Robert Hooke", "Galileo Galilei", "Charles Darwin"], answer: 0, explain: "Robert Hooke, în 1665, observând pluta." },
      { type: "mc", q: "Când alergi, care aparate lucrează?", options: ["Doar mușchii", "Mușchii, oasele, inima, plămânii și sistemul nervos împreună", "Doar inima"], answer: 1, explain: "Toate aparatele colaborează." }
    ]
  }
});

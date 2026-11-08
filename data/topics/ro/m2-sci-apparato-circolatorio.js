TOPIC('ro', {
  id: "m2-sci-apparato-circolatorio",
  title: "Aparatul circulator",
  intro: "În fiecare zi inima ta bate de aproximativ <b>100 000 de ori</b> și împinge sângele printr-o rețea de vase lungă de aproape <b>100 000 km</b>. <b>Aparatul circulator</b> este sistemul de transport al corpului: aduce oxigen și nutrienți fiecărei celule și îndepărtează deșeurile.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. La ce folosește",
      html: `<p>Corpul nostru este alcătuit din aproximativ <b>30 000 de miliarde de celule</b>. Fiecare are nevoie de <b>oxigen</b> și de <b>substanțe nutritive</b> și produce <b>dioxid de carbon</b> și alte deșeuri. Aparatul circulator este „serviciul de livrări” care leagă toate celulele cu:</p>
<ul>
<li><b>plămânii</b> (unde sângele ia O<sub>2</sub> și lasă CO<sub>2</sub>);</li>
<li><b>intestinul</b> (unde strânge nutrienții);</li>
<li><b>rinichii</b> (care filtrează deșeurile);</li>
<li><b>glandele</b> (ai căror hormoni îi transportă).</li>
</ul>
<p>În plus <b>apără</b> corpul de infecții (globulele albe), <b>repară</b> rănile (trombocitele) și <b>distribuie căldura</b>, menținând temperatura în jur de 37 °C.</p>
<p>Este format din trei componente: <b>inima</b> (pompa), <b>vasele de sânge</b> (țevile) și <b>sângele</b> (lichidul care transportă).</p>`
    },
    {
      type: "text",
      title: "2. Sângele",
      html: `<p>Un adult are aproximativ <b>5 litri</b> de sânge (circa 7–8% din greutatea corpului). Dacă îl lași să stea într-o eprubetă cu un anticoagulant, se separă în două părți:</p>
<ul>
<li><b>Plasma</b> (circa 55%): lichid galben deschis alcătuit în proporție de 90% din apă, cu săruri minerale, zaharuri, proteine, hormoni și CO<sub>2</sub> dizolvat.</li>
<li><b>Partea celulară</b> (circa 45%):
<ul>
<li><b>globulele roșii</b> (eritrocite): circa 5 milioane pe mm³. Sunt discuri fără nucleu, pline de <b>hemoglobină</b>, o proteină care conține <b>fier</b>, leagă oxigenul și dă culoarea roșie. Trăiesc circa <b>120 de zile</b>;</li>
<li><b>globulele albe</b> (leucocite): 5 000–10 000 pe mm³. Apără de microbi, unele „mâncându-i” (fagocitoză), altele producând <b>anticorpi</b>;</li>
<li><b>trombocitele</b> (plachete): fragmente de celule care, când un vas se rupe, formează un dop și declanșează <b>coagularea</b>.</li>
</ul></li>
</ul>
<p>Toate celulele sângelui se nasc în <b>măduva osoasă roșie</b>, în interiorul oaselor late și al capetelor oaselor lungi.</p>`
    },
    {
      type: "svg",
      title: "Sângele într-o eprubetă",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fff7ed"/>
<path d="M90 30 L90 270 Q90 300 120 300 Q150 300 150 270 L150 30" fill="#ffffff" stroke="#475569" stroke-width="4"/>
<rect x="92" y="60" width="56" height="110" fill="#fde68a"/>
<rect x="92" y="170" width="56" height="6" fill="#f1f5f9"/>
<path d="M92 176 L92 270 Q92 298 120 298 Q148 298 148 270 L148 176 Z" fill="#b91c1c"/>
<line x1="155" y1="115" x2="200" y2="115" stroke="#92400e" stroke-width="2"/>
<text x="205" y="110" font-size="17" fill="#92400e" font-weight="bold">Plasmă ≈ 55%</text>
<text x="205" y="132" font-size="15" fill="#92400e">apă, săruri, zaharuri, proteine</text>
<line x1="155" y1="173" x2="200" y2="173" stroke="#475569" stroke-width="2"/>
<text x="205" y="178" font-size="15" fill="#475569">globule albe și trombocite (&lt;1%)</text>
<line x1="155" y1="240" x2="200" y2="240" stroke="#991b1b" stroke-width="2"/>
<text x="205" y="236" font-size="17" fill="#991b1b" font-weight="bold">Globule roșii ≈ 45%</text>
<ellipse cx="490" cy="70" rx="40" ry="22" fill="#ef4444"/><ellipse cx="490" cy="70" rx="18" ry="9" fill="#b91c1c"/>
<text x="490" y="115" font-size="15" text-anchor="middle" fill="#991b1b">globulă roșie</text>
<circle cx="490" cy="170" r="30" fill="#e0e7ff" stroke="#6366f1" stroke-width="3"/><path d="M475 165 q8 -14 18 0 q10 14 18 -2" fill="none" stroke="#4338ca" stroke-width="6"/>
<text x="490" y="222" font-size="15" text-anchor="middle" fill="#4338ca">globulă albă</text>
<circle cx="470" cy="270" r="7" fill="#c084fc"/><circle cx="492" cy="262" r="6" fill="#c084fc"/><circle cx="510" cy="274" r="7" fill="#c084fc"/>
<text x="490" y="305" font-size="15" text-anchor="middle" fill="#7e22ce">trombocite</text>
</svg>`,
      caption: "Prin centrifugarea sângelui, componentele se separă după densitate: globulele roșii, mai grele, ajung pe fund."
    },
    {
      type: "text",
      title: "3. Inima: o pompă dublă",
      html: `<p><b>Inima</b> este un mușchi cavitar de mărimea unui <b>pumn strâns</b> (circa 300 g), situat în torace între cei doi plămâni, ușor deplasat spre stânga. Este alcătuită dintr-un țesut special, <b>miocardul</b>, care se contractă singur și nu obosește niciodată. Este înfășurată de o membrană, <b>pericardul</b>.</p>
<p>În interior este împărțită în <b>4 camere</b>:</p>
<ul>
<li>2 <b>atrii</b> sus (drept și stâng), care <b>primesc</b> sângele;</li>
<li>2 <b>ventricule</b> jos (drept și stâng), care îl <b>împing</b> afară. Pereții ventriculului stâng sunt cei mai groși, pentru că trebuie să împingă sângele în tot corpul.</li>
</ul>
<p>Inima dreaptă și inima stângă <b>nu comunică</b> între ele (sunt separate de <b>sept</b>): în dreapta trece numai sânge sărac în oxigen, în stânga numai sânge bogat în oxigen.</p>
<p>Între atrii și ventricule și la ieșirea din ventricule se află <b>valvele</b> (tricuspidă, mitrală sau bicuspidă, pulmonară, aortică), care se deschid într-un singur sens și împiedică întoarcerea sângelui. Închiderea lor produce „tu-tum”-ul bătăii.</p>
<p>Ciclul cardiac are două faze: <b>sistola</b> (contracție) și <b>diastola</b> (relaxare). În repaus inima bate de aproximativ <b>60–100 de ori pe minut</b> și pompează aproximativ <b>5 litri pe minut</b>.</p>`
    },
    {
      type: "widget",
      title: "Părțile inimii",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="380" fill="#fef2f2"/>
<path d="M300 360 C150 280 110 200 130 130 C150 70 230 60 300 110 C370 60 450 70 470 130 C490 200 450 280 300 360 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="4"/>
<rect x="150" y="120" width="130" height="80" rx="20" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="320" y="120" width="130" height="80" rx="20" fill="#f87171" stroke="#7f1d1d" stroke-width="3"/>
<path d="M160 215 L285 215 L285 310 C220 290 175 255 160 215 Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
<path d="M315 215 L440 215 C425 255 380 300 315 330 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
<rect x="290" y="115" width="20" height="230" fill="#7f1d1d"/>
<path d="M330 120 C330 40 420 30 430 80" fill="none" stroke="#dc2626" stroke-width="26"/>
<path d="M180 120 L180 20" stroke="#2563eb" stroke-width="24"/>
<path d="M250 120 C250 60 200 50 160 60" fill="none" stroke="#7c3aed" stroke-width="18"/>
<rect x="190" y="205" width="60" height="10" fill="#fbbf24"/>
<rect x="350" y="205" width="60" height="10" fill="#fbbf24"/>
</svg>`,
        spots: [
          { x: 215, y: 160, label: "Atriul drept" },
          { x: 385, y: 160, label: "Atriul stâng" },
          { x: 230, y: 265, label: "Ventriculul drept" },
          { x: 375, y: 265, label: "Ventriculul stâng" },
          { x: 300, y: 240, label: "Septul" },
          { x: 400, y: 50, label: "Aorta" },
          { x: 180, y: 40, label: "Vena cavă" },
          { x: 380, y: 210, label: "Valva mitrală" }
        ]
      },
      caption: "Atenție: în ilustrațiile medicale inima se desenează ca și cum ai privi o persoană din față, deci partea ei dreaptă este în STÂNGA TA. Albastru = sânge sărac în O₂, roșu = bogat în O₂."
    },
    {
      type: "quiz",
      title: "Mini-test: sânge și inimă",
      questions: [
        { type: "mc", q: "Care component al sângelui transportă oxigenul?", options: ["Trombocitele", "Globulele roșii", "Globulele albe", "Plasma"], answer: 1, explain: "Globulele roșii conțin hemoglobină, care leagă oxigenul." },
        { type: "num", q: "Câte camere are inima umană?", answer: 4, explain: "Două atrii și două ventricule." },
        { type: "tf", q: "În inimă sângele din partea dreaptă se amestecă cu cel din partea stângă.", answer: false, explain: "Septul le separă: în dreapta sânge sărac în O₂, în stânga bogat în O₂." },
        { type: "text", q: "Cum se numește faza în care inima se contractă?", answer: ["sistola", "sistolă", "sistola cardiacă"], explain: "Sistola = contracție; diastola = relaxare." }
      ]
    },
    {
      type: "text",
      title: "4. Vasele de sânge",
      html: `<p>Sângele curge prin trei tipuri de vase:</p>
<table>
<tr><th>Vasul</th><th>Direcția</th><th>Caracteristici</th></tr>
<tr><td><b>Arterele</b></td><td>de la inimă → la organe</td><td>pereți groși și elastici (trei straturi, cu mușchi) pentru că sângele iese din inimă la presiune mare; pulsează (este <b>pulsul</b>). Cea mai mare este <b>aorta</b> (circa 2,5 cm în diametru).</td></tr>
<tr><td><b>Capilarele</b></td><td>leagă arterele și venele</td><td>foarte subțiri (circa 8 miimi de mm, trece o singură globulă roșie o dată) cu pereți dintr-<b>un singur strat de celule</b>: aici au loc <b>schimburile</b> de gaze, nutrienți și deșeuri.</td></tr>
<tr><td><b>Venele</b></td><td>de la organe → la inimă</td><td>pereți mai subțiri, presiune mică; au <b>valve în formă de cuib de rândunică</b> care împiedică întoarcerea sângelui (mai ales în picioare). Cele mai mari sunt <b>venele cave</b>.</td></tr>
</table>
<p><b>Atenție:</b> nu este adevărat că arterele transportă întotdeauna sânge oxigenat! Se numesc artere toate vasele care <b>ies</b> din inimă. <b>Arterele pulmonare</b> duc sânge sărac în O<sub>2</sub> la plămâni, în timp ce <b>venele pulmonare</b> duc la inimă sânge bogat în O<sub>2</sub>.</p>`
    },
    {
      type: "3d",
      title: "Secțiune 3D printr-o arteră",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fcd34d", label: "Tunica externă (țesut conjunctiv)" },
          { r: 0.8, color: "#f87171", label: "Tunica medie (mușchi neted și elastic)" },
          { r: 0.55, color: "#fbcfe8", label: "Tunica internă (endoteliu)" },
          { r: 0.45, color: "#b91c1c", label: "Lumenul: sângele" }
        ]
      },
      caption: "Rotește modelul: arterele au o tunică medie groasă și musculoasă care rezistă la presiune. La vene este mult mai subțire; la capilare rămâne doar endoteliul."
    },
    {
      type: "text",
      title: "5. Circulația dublă",
      html: `<p>Sângele parcurge un traseu în formă de „8”, trecând de două ori prin inimă: de aceea se vorbește despre o circulație <b>dublă</b>, <b>închisă</b> (sângele rămâne întotdeauna în vase) și <b>completă</b> (sângele oxigenat și cel neoxigenat nu se amestecă).</p>
<p><b>Mica circulație</b> (pulmonară): <br>ventriculul drept → arterele pulmonare → capilarele plămânilor (sângele lasă CO<sub>2</sub> și ia O<sub>2</sub>) → venele pulmonare → <b>atriul stâng</b>.</p>
<p><b>Marea circulație</b> (sistemică): <br>ventriculul stâng → aorta → artere → capilarele tuturor organelor (sângele cedează O<sub>2</sub> și nutrienți, strânge CO<sub>2</sub> și deșeuri) → vene → venele cave → <b>atriul drept</b>.</p>
<p>Un circuit complet durează mai puțin de <b>un minut</b>. Inima însăși este hrănită de artere speciale, <b>coronarele</b>: dacă una se înfundă, o parte din miocard rămâne fără oxigen (este <b>infarctul</b>).</p>`
    },
    {
      type: "svg",
      title: "Drumul sângelui: un 8",
      svg: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="360" fill="#f8fafc"/>
<rect x="200" y="20" width="200" height="60" rx="25" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<text x="300" y="58" font-size="19" text-anchor="middle" fill="#831843" font-weight="bold">Plămâni 🫁</text>
<rect x="200" y="280" width="200" height="60" rx="25" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="300" y="318" font-size="19" text-anchor="middle" fill="#78350f" font-weight="bold">Organele corpului</text>
<rect x="230" y="140" width="70" height="80" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="300" y="140" width="70" height="80" fill="#f87171" stroke="#7f1d1d" stroke-width="3"/>
<text x="265" y="185" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">inima</text>
<text x="335" y="185" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">inima</text>
<text x="265" y="205" font-size="14" text-anchor="middle" fill="#fff">dreaptă</text>
<text x="335" y="205" font-size="14" text-anchor="middle" fill="#fff">stângă</text>
<path d="M250 140 C190 120 170 90 200 60" fill="none" stroke="#2563eb" stroke-width="10"/>
<polygon points="190,62 208,45 214,68" fill="#2563eb"/>
<path d="M400 50 C440 80 420 120 350 140" fill="none" stroke="#dc2626" stroke-width="10"/>
<polygon points="360,128 340,142 362,152" fill="#dc2626"/>
<path d="M350 220 C430 240 440 280 400 300" fill="none" stroke="#dc2626" stroke-width="10"/>
<polygon points="412,292 392,310 392,288" fill="#dc2626"/>
<path d="M200 310 C150 280 160 240 250 220" fill="none" stroke="#2563eb" stroke-width="10"/>
<polygon points="240,212 262,220 242,232" fill="#2563eb"/>
<text x="20" y="100" font-size="15" fill="#1d4ed8">artere pulmonare</text>
<text x="440" y="100" font-size="15" fill="#b91c1c">vene pulmonare</text>
<text x="450" y="260" font-size="15" fill="#b91c1c">aorta</text>
<text x="30" y="270" font-size="15" fill="#1d4ed8">vene cave</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#334155">mica circulație ↑</text>
<text x="300" y="255" font-size="15" text-anchor="middle" fill="#334155">marea circulație ↓</text>
</svg>`,
      caption: "Roșu = sânge bogat în oxigen; albastru = sărac în oxigen (în realitate este roșu închis, nu albastru!)."
    },
    {
      type: "widget",
      title: "Pune în ordine călătoria sângelui",
      widget: "match",
      options: {
        pairs: [
          ["Ventriculul drept", "împinge sângele în arterele pulmonare"],
          ["Capilarele pulmonare", "schimb: intră O₂, iese CO₂"],
          ["Venele pulmonare", "readuc sânge oxigenat în atriul stâng"],
          ["Ventriculul stâng", "împinge sângele în aortă"],
          ["Capilarele organelor", "cedează O₂ și nutrienți celulelor"],
          ["Venele cave", "readuc sânge sărac în O₂ în atriul drept"]
        ]
      },
      caption: "Potrivește fiecare etapă cu ceea ce se întâmplă."
    },
    {
      type: "example",
      title: "Exemplu practic: măsoară-ți pulsul",
      html: `<p>Pune degetul arătător și mijlociu pe partea interioară a încheieturii mâinii, dinspre degetul mare (artera radială), sau pe gât, lângă trahee (artera carotidă). Numără bătăile timp de <b>15 secunde</b> și înmulțește cu 4.</p>
<p>Exemplu: 20 de bătăi în 15 s → 20 × 4 = <b>80 de bătăi pe minut</b>.</p>
<p>Acum fă 30 de sărituri și măsoară din nou: frecvența crește (poate la 130), pentru că mușchii în mișcare cer mai mult oxigen. Apoi așteaptă 2 minute: cu cât ești mai antrenat, cu atât mai repede revine pulsul la normal.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: grupele de sânge și transfuzia",
      html: `<p>În <b>1901</b> medicul austriac <b>Karl Landsteiner</b> a descoperit că sângele uman aparține unor grupe diferite: <b>A, B, AB și 0</b>, în funcție de moleculele (antigenele) prezente pe globulele roșii. Mai există și factorul <b>Rh</b> (pozitiv sau negativ).</p>
<ul>
<li>Grupa <b>0 negativ</b> este „donatorul universal” pentru globulele roșii: se folosește în urgențe.</li>
<li>Grupa <b>AB pozitiv</b> este „primitorul universal”.</li>
</ul>
<p>Înainte de această descoperire, transfuziile omorau adesea pacientul. În România poți dona sânge de la <b>18 ani</b>: o pungă de 450 ml poate ajuta până la trei persoane.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege circulația",
      intro: "Dacă numele atriilor și ale ventriculelor te încurcă, încearcă aceste imagini.",
      tabs: [
        {
          label: "🚚 Orașul și camioanele",
          html: `<p>Imaginează-ți corpul ca pe un mare <b>oraș</b>:</p>
<ul>
<li><b>inima</b> este centrul logistic cu două secții care nu se amestecă;</li>
<li><b>globulele roșii</b> sunt <b>camioanele</b> care transportă oxigen (marfa);</li>
<li><b>arterele</b> sunt autostrăzile de ieșire, <b>venele</b> drumurile de întoarcere;</li>
<li><b>capilarele</b> sunt aleile din fața fiecărei case, unde se descarcă marfa și se încarcă gunoiul;</li>
<li><b>plămânii</b> sunt depozitul unde se face plinul de oxigen și se descarcă CO<sub>2</sub>;</li>
<li><b>globulele albe</b> sunt poliția, <b>trombocitele</b> echipa care repară gropile.</li>
</ul>`
        },
        {
          label: "💧 Cele două pompe de grădină",
          html: `<p>În Anglia și în Germania inima este adesea explicată ca <b>două pompe alăturate</b>:</p>
<ul>
<li>pompa <b>dreaptă</b> trimite apa într-o grădiniță din apropiere (plămânii): este nevoie de puțină presiune, deci este mai puțin musculoasă;</li>
<li>pompa <b>stângă</b> trebuie să o trimită până la capătul unui parc mare (tot corpul, de la cap la picioare): este nevoie de multă presiune, de aceea ventriculul stâng are un perete de aproximativ <b>3 ori mai gros</b>.</li>
</ul>
<p>Valvele sunt ca <b>ușile turnante</b> ale unui supermarket: se învârt într-un singur sens.</p>`
        },
        {
          label: "🧪 Fierul care captează oxigenul",
          html: `<p>De ce este sângele roșu? Din cauza <b>hemoglobinei</b>: fiecare moleculă conține 4 atomi de <b>fier</b>, iar fiecare fier poate lega o moleculă de <b>oxigen O<sub>2</sub></b> (doi atomi de oxigen uniți). În plămâni O<sub>2</sub> se leagă, în țesuturi se desprinde. Aici vezi molecula de O<sub>2</sub> și una de CO<sub>2</sub>, gazul pe care sângele îl aduce înapoi. O globulă roșie conține circa <b>270 de milioane</b> de molecule de hemoglobină!</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: -2.6, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" },
              { x: -1.4, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" },
              { x: 1.0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" },
              { x: 2.2, y: 0, z: 0, r: 0.45, color: "#334155", label: "C" },
              { x: 3.4, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }
            ],
            bonds: [[0, 1], [2, 3], [3, 4]]
          }
        },
        {
          label: "🎨 Circuitul văzut de sus",
          html: `<p>Desenează un circuit ca cele ale mașinuțelor: două inele care se ating în centru (inima). Inelul mic de sus trece prin plămâni, cel mare de jos prin tot corpul. Colorează cu <b>roșu</b> porțiunile de după plămâni și cu <b>albastru</b> pe cele de după organe: vei vedea că în stânga inimii ajunge întotdeauna roșul, iar în dreapta albastrul.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f1f5f9"/>
<ellipse cx="300" cy="70" rx="120" ry="50" fill="none" stroke="#a855f7" stroke-width="10"/>
<ellipse cx="300" cy="185" rx="230" ry="60" fill="none" stroke="#a855f7" stroke-width="10"/>
<path d="M180 70 A120 50 0 0 1 300 20" fill="none" stroke="#2563eb" stroke-width="10"/>
<path d="M300 20 A120 50 0 0 1 420 70" fill="none" stroke="#dc2626" stroke-width="10"/>
<path d="M70 185 A230 60 0 0 1 300 125" fill="none" stroke="#2563eb" stroke-width="10"/>
<path d="M300 125 A230 60 0 0 1 530 185" fill="none" stroke="#dc2626" stroke-width="10"/>
<path d="M70 185 A230 60 0 0 0 300 245" fill="none" stroke="#2563eb" stroke-width="10"/>
<path d="M300 245 A230 60 0 0 0 530 185" fill="none" stroke="#dc2626" stroke-width="10"/>
<circle cx="300" cy="125" r="28" fill="#f43f5e"/>
<text x="300" y="131" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">❤️</text>
<text x="300" y="75" font-size="17" text-anchor="middle" fill="#6b21a8" font-weight="bold">plămâni</text>
<text x="300" y="215" font-size="17" text-anchor="middle" fill="#6b21a8" font-weight="bold">tot corpul</text>
</svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Știai că…? William Harvey și sângele care circulă",
      html: `<p>Timp de aproximativ 1400 de ani s-a crezut, împreună cu medicul grec <b>Galen</b>, că sângele este produs continuu de ficat și „consumat” de organe. În <b>1628</b> englezul <b>William Harvey</b> a făcut un calcul: dacă inima aruncă aproximativ 60 ml la fiecare bătaie, într-o oră pompează sute de litri, mult mai mult decât greutatea unei persoane! Deci sângele <b>nu poate</b> fi produs și consumat: trebuie să <b>circule în cerc</b>. Harvey însă nu a văzut capilarele: le-a observat în <b>1661</b> italianul <b>Marcello Malpighi</b>, la microscop, în plămânii unei broaște.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Numere record",
      html: `<ul>
<li>Într-o viață de 80 de ani inima bate de aproximativ <b>3 miliarde</b> de ori.</li>
<li>În fiecare secundă măduva osoasă produce aproximativ <b>2 milioane</b> de globule roșii noi.</li>
<li>Inima unei balene albastre cântărește circa <b>180 kg</b>; cea a unui colibri bate până la 1200 de ori pe minut.</li>
<li>Primul transplant de inimă a fost efectuat în <b>1967</b> în Africa de Sud de chirurgul <b>Christiaan Barnard</b>.</li>
</ul>`
    },
    {
      type: "remember",
      title: "De ținut minte – și ai grijă de inima ta",
      html: `<ul>
<li>Aparatul circulator = <b>inimă + vase + sânge</b>.</li>
<li>Sânge: <b>plasmă</b> + globule <b>roșii</b> (O<sub>2</sub>), <b>albe</b> (apărare), <b>trombocite</b> (coagulare).</li>
<li>Inima: 2 atrii, 2 ventricule, valve; sistolă și diastolă.</li>
<li><b>Arterele</b> ies din inimă, <b>venele</b> intră, <b>capilarele</b> fac schimburile.</li>
<li>Circulație <b>dublă, închisă și completă</b>: mică (plămâni) și mare (corp).</li>
<li>Pentru sănătate: <b>mișcare</b> în fiecare zi, puțină sare și grăsimi saturate, <b>fără fumat</b> (îngustează vasele și dăunează inimii).</li>
</ul>`
    },
    {
      type: "conceptMap",
      title: "Harta aparatului circulator: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "cellule", label: "Celulele au nevoie", x: 50, y: 6, color: "#0ea5e9", html: "Fiecare celulă are nevoie de O₂ și nutrienți și produce CO₂ și deșeuri.", why: "Celulele obțin energie prin respirația celulară: zahăr + oxigen → dioxid de carbon + apă + energie. Într-un organism mare ca al nostru, difuzia singură este prea lentă: este nevoie de un sistem de transport." },
        { id: "sangue", label: "Sânge", x: 20, y: 28, color: "#dc2626", html: "Plasmă + globule roșii, globule albe, trombocite.", why: "Apa din plasmă dizolvă multe substanțe, dar oxigenul se dizolvă puțin în ea: de aceea evoluția a „inventat” hemoglobina, care transportă de circa 70 de ori mai mult." },
        { id: "emoglobina", label: "Hemoglobină și fier", x: 8, y: 55, color: "#b91c1c", html: "Proteină din globulele roșii care leagă oxigenul datorită fierului.", why: "Structura ei a fost descoperită în 1959 de Max Perutz cu raze X (premiul Nobel 1962). Fără destul fier în alimentație se produc puține globule roșii: este anemia." },
        { id: "cuore", label: "Inima", x: 50, y: 32, color: "#f43f5e", html: "Pompă musculară cu 4 camere, cu valve.", why: "Miocardul are celule care generează singure impulsul electric („stimulatorul cardiac natural”, nodul sinoatrial): de aceea inima bate chiar și fără ordine de la creier. Impulsul se înregistrează cu electrocardiograma, inventată de Willem Einthoven în 1903." },
        { id: "vasi", label: "Vase de sânge", x: 80, y: 28, color: "#7c3aed", html: "Artere, capilare, vene.", why: "Arterele trebuie să reziste la presiune și au pereți musculoși și elastici; venele, la presiune mică, au valve care ajută întoarcerea la inimă, descoperite de Girolamo Fabrici d'Acquapendente la Padova (1603)." },
        { id: "capillari", label: "Capilare: schimburi", x: 85, y: 58, color: "#a855f7", html: "Vase foarte subțiri în care au loc schimburile cu celulele.", why: "Pereții lor sunt dintr-un singur strat de celule: moleculele trec prin difuzie, din locul unde sunt mai concentrate în cel unde sunt mai puțin concentrate. Le-a descoperit Marcello Malpighi în 1661." },
        { id: "doppia", label: "Circulația dublă", x: 50, y: 62, color: "#ea580c", html: "Mică (inimă–plămâni) și mare (inimă–corp).", why: "Separarea celor două circuite menține presiunea ridicată spre corp și nu amestecă sângele bogat și cel sărac în oxigen. Aceeași schemă există la păsări și mamifere, animale cu sânge cald care consumă multă energie; peștii au o circulație simplă." },
        { id: "harvey", label: "Harvey (1628)", x: 20, y: 85, color: "#64748b", html: "A demonstrat că sângele circulă pe un traseu închis.", why: "A folosit un raționament cantitativ (cât sânge pompează inima într-o oră) și experimente simple cu garouri pe braț, care arătau cum venele se umflă doar spre mână." },
        { id: "salute", label: "Sănătatea inimii", x: 70, y: 88, color: "#16a34a", html: "Mișcare, alimentație echilibrată, fără fumat.", why: "Bolile cardiovasculare sunt prima cauză de deces în țările industrializate. Activitatea fizică întărește miocardul; fumatul și excesul de grăsimi favorizează plăcile care îngustează arterele (ateroscleroza)." }
      ],
      edges: [
        ["cellule", "sangue", "servesc la"],
        ["sangue", "emoglobina", "conține"],
        ["cuore", "sangue", "împinge"],
        ["cuore", "vasi", "în"],
        ["vasi", "capillari", "se ramifică în"],
        ["capillari", "cellule", "hrănesc"],
        ["cuore", "doppia", "organizează"],
        ["harvey", "doppia", "a descoperit circulația"],
        ["salute", "cuore", "protejează"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: vase și circulație",
      questions: [
        { type: "mc", q: "În care vase au loc schimburile cu celulele?", options: ["Artere", "Vene", "Capilare"], answer: 2, explain: "Capilarele au pereți foarte subțiri care permit schimburile." },
        { type: "tf", q: "Venele pulmonare transportă sânge bogat în oxigen.", answer: true, explain: "Duc la inimă sângele care tocmai s-a oxigenat în plămâni." },
        { type: "mc", q: "Din ce cameră pornește aorta?", options: ["Atriul drept", "Ventriculul drept", "Ventriculul stâng"], answer: 2, explain: "Ventriculul stâng împinge sângele oxigenat în aortă (marea circulație)." }
      ]
    }
  ],
  glossary: [
    { t: "Plasmă", d: "Partea lichidă a sângelui, alcătuită mai ales din apă." },
    { t: "Hemoglobină", d: "Proteină cu fier din globulele roșii care transportă oxigenul." },
    { t: "Atriu", d: "Camera superioară a inimii care primește sângele." },
    { t: "Ventricul", d: "Camera inferioară a inimii care împinge sângele în artere." },
    { t: "Valvă", d: "Structură care lasă sângele să treacă într-un singur sens." },
    { t: "Sistolă", d: "Faza de contracție a inimii." },
    { t: "Diastolă", d: "Faza de relaxare a inimii." },
    { t: "Arteră", d: "Vas care duce sângele de la inimă la organe." },
    { t: "Venă", d: "Vas care readuce sângele la inimă." },
    { t: "Capilar", d: "Vas foarte subțire în care au loc schimburile cu celulele." },
    { t: "Aortă", d: "Cea mai mare arteră, care iese din ventriculul stâng." },
    { t: "Coagulare", d: "Proces care formează un dop de sânge (cheag) pentru a închide rănile." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre acestea NU este o funcție a aparatului circulator?", options: ["Transportul oxigenului", "Apărarea împotriva infecțiilor", "Digerarea proteinelor", "Distribuirea căldurii"], answer: 2, explain: "Digestia este sarcina aparatului digestiv." },
      { type: "mc", q: "Trombocitele servesc la…", options: ["transportul oxigenului", "coagularea sângelui", "producerea de anticorpi"], answer: 1, explain: "Trombocitele formează dopul și declanșează coagularea." },
      { type: "num", q: "Aproximativ câți litri de sânge are un adult?", answer: 5, tol: 1, unit: "litri", explain: "Circa 5 litri (7–8% din greutatea corpului)." },
      { type: "tf", q: "Toate arterele transportă sânge bogat în oxigen.", answer: false, explain: "Arterele pulmonare transportă sânge sărac în O₂ spre plămâni." },
      { type: "mc", q: "De ce are ventriculul stâng pereți mai groși decât cel drept?", options: ["Pentru că primește mai mult sânge", "Pentru că trebuie să împingă sângele în tot corpul", "Pentru că conține sânge sărac în O₂"], answer: 1, explain: "Este nevoie de mai multă forță pentru marea circulație decât pentru cea pulmonară." },
      { type: "text", q: "Cum se numește proteina cu fier care transportă oxigenul?", answer: ["hemoglobina", "hemoglobină", "emoglobina"], explain: "Hemoglobina din globulele roșii." },
      { type: "order", q: "Pune în ordine traseul micii circulații.", items: ["Ventriculul drept", "Arterele pulmonare", "Capilarele plămânilor", "Venele pulmonare", "Atriul stâng"], explain: "Sângele merge de la ventriculul drept la plămâni și se întoarce în atriul stâng." },
      { type: "mc", q: "La ce servesc valvele venelor din picioare?", options: ["Să accelereze sângele", "Să împiedice întoarcerea sângelui", "Să filtreze sângele"], answer: 1, explain: "Sunt valve în formă de cuib de rândunică care se închid dacă sângele tinde să coboare." },
      { type: "num", q: "Numeri 18 bătăi în 15 secunde. Câte bătăi pe minut sunt?", answer: 72, unit: "bătăi/min", explain: "18 × 4 = 72 de bătăi pe minut." },
      { type: "mc", q: "Cine a demonstrat în 1628 că sângele circulă?", options: ["Galen", "William Harvey", "Karl Landsteiner", "Louis Pasteur"], answer: 1, explain: "William Harvey, cu cartea De motu cordis." },
      { type: "text", q: "Unde se produc celulele sângelui?", answer: ["măduva osoasă", "în măduva osoasă", "măduva osoasă roșie", "în măduva osoasă roșie", "măduva roșie"], explain: "În măduva osoasă roșie, din interiorul oaselor." },
      { type: "tf", q: "Circulația umană este închisă: sângele curge întotdeauna în interiorul vaselor.", answer: true, explain: "Da: este dublă, închisă și completă." }
    ]
  }
});

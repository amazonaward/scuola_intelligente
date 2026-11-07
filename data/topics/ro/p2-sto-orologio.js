TOPIC('ro', {
  id: "p2-sto-orologio",
  title: "Ceasul",
  intro: "La ce oră începe școala? Cât mai este până la recreație? ⏰ Ca să aflăm, folosim <b>ceasul</b>. Învățăm să citim <b>orele</b> și <b>minutele</b> și descoperim cum au învățat oamenii să măsoare timpul.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Cum este făcut ceasul",
      html: `<p>Ceasul cu limbi are:</p>
<ul>
<li>🔢 <b>numerele de la 1 la 12</b> așezate în cerc;</li>
<li>⬛ <b>limba mică</b>: arată <b>orele</b>. Este lentă: face un tur în 12 ore;</li>
<li>➖ <b>limba mare</b>: arată <b>minutele</b>. Face un tur complet într-o <b>oră</b> (60 de minute);</li>
<li>🔴 uneori mai există și <b>limba subțire a secundelor</b>, care face un tur într-un minut.</li>
</ul>
<p>Limbile se rotesc mereu în același sens: <b>sensul acelor de ceasornic</b> ↻.</p>`
    },
    {
      type: "svg",
      title: "Este ora 3 fix",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="170" cy="150" r="125" fill="#ffffff" stroke="#c2410c" stroke-width="8"/>
<g font-size="24" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="170" y="52">12</text><text x="222" y="66">1</text><text x="258" y="102">2</text><text x="272" y="158">3</text><text x="258" y="212">4</text><text x="222" y="248">5</text>
<text x="170" y="262">6</text><text x="118" y="248">7</text><text x="82" y="212">8</text><text x="68" y="158">9</text><text x="82" y="102">10</text><text x="118" y="66">11</text>
</g>
<line x1="170" y1="150" x2="170" y2="60" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
<line x1="170" y1="150" x2="235" y2="150" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
<circle cx="170" cy="150" r="9" fill="#1e293b"/>
<text x="330" y="80" font-size="22" fill="#dc2626" font-weight="bold">limba mică → 3</text>
<text x="330" y="110" font-size="18" fill="#7f1d1d">(orele)</text>
<text x="330" y="160" font-size="22" fill="#2563eb" font-weight="bold">limba mare → 12</text>
<text x="330" y="190" font-size="18" fill="#1e3a8a">(minutele: „fix”)</text>
<text x="330" y="250" font-size="26" fill="#0f172a" font-weight="bold">Este ora 3:00</text>
</svg>`,
      caption: "Când limba mare este pe 12, ora este „fix”. Limba mică ne spune care oră."
    },
    {
      type: "text",
      title: "Minutele: numărăm din 5 în 5",
      html: `<p>Între un număr și altul sunt <b>5 minute</b> (5 liniuțe mici).</p>
<ul>
<li>Limba mare pe <b>1</b> → 5 minute; pe <b>2</b> → 10; pe <b>3</b> → 15… pe <b>6</b> → 30… până la <b>12</b> → 60, adică o oră întreagă!</li>
</ul>
<p>Ca să citești minutele, e de ajuns să numeri din 5 în 5: este <b>tabla înmulțirii cu 5</b>! 🖐️</p>`
    },
    {
      type: "widget",
      title: "Sari din 5 în 5 minute",
      widget: "numberLine",
      options: { min: 0, max: 60, step: 5, marks: [15, 30, 45, 60] },
      caption: "Fiecare săritură este un număr de pe ceas. 3 sărituri = 15 minute (un sfert de oră), 6 sărituri = 30 de minute (jumătate de oră), 12 sărituri = 60 de minute (o oră)."
    },
    {
      type: "remember",
      title: "Cuvintele ceasului",
      html: `<table>
<tr><th>Limba mare pe…</th><th>Se spune</th><th>Exemplu</th></tr>
<tr><td><b>12</b></td><td>„fix”</td><td>ora 8 fix (8:00)</td></tr>
<tr><td><b>3</b></td><td>„și un sfert” (15 min)</td><td>8 și un sfert (8:15)</td></tr>
<tr><td><b>6</b></td><td>„și jumătate” (30 min)</td><td>8 și jumătate (8:30)</td></tr>
<tr><td><b>9</b></td><td>„fără un sfert” (45 min)</td><td>9 fără un sfert (8:45)</td></tr>
</table>
<p>1 oră = <b>60 de minute</b>. 1 minut = <b>60 de secunde</b>. 1 zi = <b>24 de ore</b>.</p>`
    },
    {
      type: "svg",
      title: "Un sfert, jumătate, trei sferturi",
      svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<circle cx="100" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M100 110 L100 35 A75 75 0 0 1 175 110 Z" fill="#fde047"/>
<circle cx="300" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M300 110 L300 35 A75 75 0 0 1 300 185 Z" fill="#86efac"/>
<circle cx="500" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M500 110 L500 35 A75 75 0 1 1 425 110 Z" fill="#93c5fd"/>
<line x1="100" y1="110" x2="160" y2="110" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<line x1="300" y1="110" x2="300" y2="172" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<line x1="500" y1="110" x2="440" y2="110" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<g fill="#1e293b"><circle cx="100" cy="110" r="6"/><circle cx="300" cy="110" r="6"/><circle cx="500" cy="110" r="6"/></g>
<text x="100" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#854d0e">și un sfert = 15 min</text>
<text x="300" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#166534">și jumătate = 30 min</text>
<text x="500" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e40af">fără un sfert = 45 min</text>
</svg>`,
      caption: "Ca o pizza 🍕: un sfert de tur al limbii mari înseamnă 15 minute, jumătate de tur 30, trei sferturi 45."
    },
    {
      type: "quiz",
      title: "Mini-test: citim ceasul",
      questions: [
        { type: "mc", q: "Care limbă arată orele?", options: ["Limba mică", "Limba mare", "Niciuna"], answer: 0, explain: "Limba mică arată orele, cea mare minutele." },
        { type: "num", q: "Limba mare este pe 4. Câte minute sunt?", answer: 20, unit: "min", explain: "4 sărituri din 5 în 5: 5, 10, 15, 20." },
        { type: "mc", q: "Limba mică este pe 7, cea mare pe 6. Cât este ceasul?", options: ["6 și 7", "7 și jumătate", "7 fix"], answer: 1, explain: "Limba mare pe 6 = 30 de minute, adică „și jumătate”: este 7 și jumătate (7:30)." }
      ]
    },
    {
      type: "text",
      title: "Ceasul digital și cele 24 de ore",
      html: `<p>Ceasul <b>digital</b> 📱 scrie ora cu cifre: întâi <b>orele</b>, apoi două puncte, apoi <b>minutele</b>. <b>08:30</b> = 8 și jumătate.</p>
<p>Ziua are <b>24 de ore</b>, dar ceasul cu limbi arată doar 12: limba mică face <b>2 ture</b> pe zi!</p>
<ul>
<li>🌅 Orele dimineții: de la 0 la 12.</li>
<li>🌇 Orele după-amiezii și ale serii: de la 13 la 24. Ca să le afli, adaugi 12: ora <b>3 după-amiaza</b> = 3 + 12 = <b>15:00</b>.</li>
</ul>
<p><b>12:00</b> este <b>amiaza</b>; <b>24:00</b> (sau 00:00) este <b>miezul nopții</b>.</p>`
    },
    {
      type: "example",
      title: "Exemplu: ziua mea ⏰",
      html: `<table>
<tr><td>🛏️ Mă trezesc</td><td>7:00</td><td>ora 7 fix</td></tr>
<tr><td>🏫 Intru la școală</td><td>8:15</td><td>8 și un sfert</td></tr>
<tr><td>🍎 Recreația</td><td>10:30</td><td>10 și jumătate</td></tr>
<tr><td>🍝 Prânzul</td><td>12:45</td><td>unu fără un sfert</td></tr>
<tr><td>⚽ Antrenamentul</td><td>17:00</td><td>ora 5 după-amiaza</td></tr>
<tr><td>🌙 La culcare</td><td>21:00</td><td>ora 9 seara</td></tr>
</table>
<p>De la 7:00 la 8:15 trece <b>1 oră și 15 minute</b>: timp ca să te îmbraci, să iei micul dejun și să mergi la școală.</p>`
    },
    {
      type: "example",
      title: "Exemplu: cât durează desenul animat? 📺",
      html: `<p>Desenul animat începe la <b>16:00</b> și se termină la <b>16:30</b>.</p>
<p>Limba mare merge de la 12 la 6: <b>jumătate de tur</b> = <b>30 de minute</b>. Desenul animat durează o jumătate de oră!</p>`
    },
    {
      type: "widget",
      title: "Potrivește ora scrisă în două feluri",
      widget: "match",
      options: {
        pairs: [
          ["ora 9 fix", "9:00"],
          ["4 și un sfert", "4:15"],
          ["6 și jumătate", "6:30"],
          ["11 fără un sfert", "10:45"],
          ["ora 2 după-amiaza", "14:00"],
          ["miezul nopții", "00:00"]
        ]
      },
      caption: "Atenție la „fără un sfert”: 11 fără un sfert este tot 10 și 45 de minute!"
    },
    {
      type: "curiosity",
      title: "Știai că…? De ce 60 de minute și 24 de ore?",
      html: `<p>Ideea de a împărți ziua în <b>24 de ore</b> vine de la <b>vechii egipteni</b>: 12 ore pentru zi și 12 pentru noapte.</p>
<p>Numărul <b>60</b>, în schimb, vine de la <b>babilonieni</b>, care, acum mai bine de 4000 de ani, numărau în grupe de câte 60. Numărul 60 se poate împărți în multe feluri (la 2, 3, 4, 5, 6, 10, 12…): foarte comod pentru jumătăți, treimi și sferturi de oră!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cel mai precis ceas",
      html: `<p><b>Ceasurile atomice</b> măsoară timpul numărând „vibrațiile” atomilor. Cele mai moderne sunt atât de precise, încât ar greși cu <b>mai puțin de o secundă</b> în miliarde de ani!</p>
<p>Telefonul tău și GPS-ul mașinii folosesc semnale care vin de la ceasuri atomice aflate pe sateliți. 🛰️</p>`
    },
    {
      type: "3d",
      title: "Călătorie în timp: istoria ceasului",
      scene: "spacetime",
      caption: "Harta este baza, înălțimea este timpul: cu cât un eveniment este mai sus, cu atât este mai recent. Atinge un eveniment și urmărește săgețile de la cauze la efecte.",
      options: {
        lat: [20, 56],
        lon: [-10, 120],
        years: [-2100, 2000],
        places: [
          { lat: 32.54, lon: 44.42, label: "Babilon" },
          { lat: 25.7, lon: 32.64, label: "Teba (Egipt)" },
          { lat: 31.2, lon: 29.92, label: "Alexandria" },
          { lat: 41.9, lon: 12.5, label: "Roma" },
          { lat: 51.5, lon: -0.12, label: "Londra" },
          { lat: 34.8, lon: 114.3, label: "Kaifeng (China)" }
        ],
        events: [
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -2000, label: "Babilonienii numără din 60 în 60", html: "În Mesopotamia, scribii numără în grupe de câte <b>60</b> și împart cercul în 360 de grade. De aici vor veni cele <b>60 de minute</b> ale orei și cele <b>60 de secunde</b> ale minutului." },
          { id: "meridiana", lat: 25.74, lon: 32.6, year: -1500, label: "Ceasuri cu umbră în Egipt", html: "Egiptenii folosesc un băț și <b>umbra</b> lui ca să afle ora: este strămoșul <b>cadranului solar</b>. Ei împart ziua în <b>12 ore</b> de lumină și noaptea în 12 ore de întuneric." },
          { id: "clessidra", lat: 25.72, lon: 32.66, year: -1400, label: "Clepsidra cu apă", html: "În templul de la Karnak se folosește un vas de piatră cu o găurică: apa curge încet-încet, iar nivelul arată orele chiar și <b>noaptea</b>, când cadranul solar nu funcționează.", causes: ["meridiana"] },
          { id: "ctesibio", lat: 31.2, lon: 29.92, year: -250, label: "Ctesibios îmbunătățește clepsidra", html: "La Alexandria, inventatorul grec <b>Ctesibios</b> construiește clepsidre cu apă foarte precise, cu flotoare și limbi care se mișcă singure.", causes: ["clessidra", "babilonia"] },
          { id: "roma", lat: 41.9, lon: 12.5, year: -263, label: "Primul cadran solar din Roma", html: "După istoricii antici, primul cadran solar ajunge la Roma din Sicilia, ca pradă de război. Dar fusese făcut pentru Catania: la Roma arăta ora greșită, iar ani la rând nimeni nu a observat!", causes: ["meridiana"] },
          { id: "susong", lat: 34.8, lon: 114.3, year: 1088, label: "Turnul-ceas al lui Su Song", html: "În China, savantul <b>Su Song</b> construiește un turn înalt de aproximativ 12 metri, cu un ceas pus în mișcare de o mare <b>roată hidraulică</b>, care bate din tobe și clopote și arată stelele.", causes: ["clessidra"] },
          { id: "padova", lat: 45.41, lon: 11.88, year: 1344, label: "Ceasul din Padova", html: "Ceasurile <b>mecanice</b>, cu roți dințate și greutăți, apar în Europa la sfârșitul secolului al XIII-lea. La Padova, <b>Jacopo Dondi</b> construiește un mare ceas astronomic pentru turnul orașului: clopotele sună orele pentru toți.", causes: ["ctesibio"] },
          { id: "galileo", lat: 43.72, lon: 10.4, year: 1583, label: "Galileo și candelabrul", html: "Se povestește că în Domul din <b>Pisa</b>, tânărul <b>Galileo Galilei</b> a observat un candelabru care se legăna și a măsurat oscilațiile cu bătăile pulsului său: mari sau mici, durau mereu la fel! Aceasta este legea <b>pendulului</b>.", causes: ["padova"] },
          { id: "huygens", lat: 52.08, lon: 4.3, year: 1656, label: "Ceasul cu pendul", html: "Olandezul <b>Christiaan Huygens</b> folosește ideea lui Galileo și construiește primul ceas cu <b>pendul</b>: trece de la o greșeală de 15 minute pe zi la mai puțin de 1 minut!", causes: ["galileo"] },
          { id: "greenwich", lat: 51.48, lon: 0, year: 1884, label: "Fusurile orare și Greenwich", html: "Odată cu trenurile și telegraful, este nevoie de o oră la fel pentru toți. În 1884, țările lumii aleg meridianul <b>Greenwich</b> (Londra) ca punct de plecare și împart lumea în <b>24 de fusuri orare</b>. În Italia, ora unică vine la 1 noiembrie 1893.", causes: ["huygens"] },
          { id: "atomico", lat: 51.42, lon: -0.33, year: 1955, label: "Primul ceas atomic", html: "În Anglia, <b>Louis Essen</b> construiește primul ceas atomic precis, care măsoară timpul cu vibrațiile atomilor de cesiu. Din 1967, <b>secunda</b> este definită tocmai așa.", causes: ["greenwich", "babilonia"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Anul 1880: ești șeful căilor ferate italiene",
      html: `<p>Odinioară, fiecare oraș își regla ceasurile după <b>Soare</b>: când Soarele era cel mai sus pe cer, era amiază. Dar Soarele ajunge mai devreme la Veneția (la est) și mai târziu la Torino (la vest)!</p>
<p>Așa că, atunci când la Veneția era amiază, la Torino mai erau aproximativ <b>20 de minute</b>. Cu caii, nu conta pentru nimeni… dar acum există <b>trenurile</b>, iar orarele se încurcă.</p>`,
      question: "Ce hotărăști?",
      options: [
        { label: "Fiecare oraș își păstrează ora lui după Soare.", outcome: "Fiecare gară ar avea un orar diferit: călătorii ar pierde trenurile, iar două trenuri pe aceeași linie nu ar ști unde este celălalt. Periculos!" },
        { label: "O singură oră pentru toată țara, la fel în fiecare gară.", outcome: "Amiaza de pe ceas nu va mai coincide perfect cu Soarele în fiecare oraș, dar toate ceasurile din Italia vor arăta aceeași oră. Orarele trenurilor devin clare și sigure." },
        { label: "Fără orare: trenurile pleacă atunci când se umplu.", outcome: "Nimeni nu ar ști când să plece de acasă: s-ar aștepta ore în gară, iar marfa și poșta ar ajunge cu întârziere." }
      ],
      answer: 1,
      explain: "Căile ferate italiene foloseau deja din 1866 ora Romei pentru toate trenurile. Apoi, în <b>1884</b>, lumea a fost împărțită în <b>24 de fusuri orare</b> pornind de la Greenwich, iar de la <b>1 noiembrie 1893</b> toată Italia a adoptat o oră unică, cea a <b>Europei centrale</b>, pe care o folosim și azi. Trenurile au făcut necesară o oră la fel pentru toți!"
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege ceasul",
      intro: "Dacă limbile ceasului te încurcă, încearcă aceste alte drumuri.",
      tabs: [
        {
          label: "🇺🇸 AM și PM",
          html: `<p>În Italia spunem „ora 15:00”. În <b>Statele Unite</b> și în Anglia se folosește aproape mereu ceasul de 12 ore, cu două prescurtări latinești:</p>
<ul>
<li><b>a.m.</b> (<i>ante meridiem</i> = „înainte de amiază”): 9 a.m. = ora 9 dimineața;</li>
<li><b>p.m.</b> (<i>post meridiem</i> = „după amiază”): 3 p.m. = ora 15:00.</li>
</ul>
<p>Potrivește!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["7 a.m.", "7:00 dimineața"],
              ["7 p.m.", "19:00"],
              ["12 p.m. (noon)", "amiaza"],
              ["12 a.m. (midnight)", "miezul nopții"],
              ["4 p.m.", "16:00"]
            ]
          }
        },
        {
          label: "🍕 Ceasul-pizza",
          html: `<p>Închipuie-ți ceasul ca pe o <b>pizza</b> tăiată în <b>12 felii</b>. Fiecare felie valorează <b>5 minute</b>.</p>
<ul>
<li>3 felii = un <b>sfert</b> de pizza = 15 minute;</li>
<li>6 felii = <b>jumătate</b> de pizza = 30 de minute;</li>
<li>9 felii = <b>trei sferturi</b> = 45 de minute;</li>
<li>12 felii = pizza întreagă = 60 de minute = <b>1 oră</b>.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<circle cx="150" cy="120" r="100" fill="#fbbf24" stroke="#b45309" stroke-width="8"/>
<path d="M150 120 L150 20 A100 100 0 0 1 250 120 Z" fill="#ef4444" stroke="#b45309" stroke-width="3"/>
<g stroke="#b45309" stroke-width="2">
<line x1="150" y1="120" x2="150" y2="20"/><line x1="150" y1="120" x2="200" y2="33"/><line x1="150" y1="120" x2="237" y2="70"/><line x1="150" y1="120" x2="250" y2="120"/>
<line x1="150" y1="120" x2="237" y2="170"/><line x1="150" y1="120" x2="200" y2="207"/><line x1="150" y1="120" x2="150" y2="220"/><line x1="150" y1="120" x2="100" y2="207"/>
<line x1="150" y1="120" x2="63" y2="170"/><line x1="150" y1="120" x2="50" y2="120"/><line x1="150" y1="120" x2="63" y2="70"/><line x1="150" y1="120" x2="100" y2="33"/>
</g>
<text x="300" y="80" font-size="22" fill="#991b1b" font-weight="bold">3 felii roșii</text>
<text x="300" y="115" font-size="22" fill="#991b1b" font-weight="bold">= 3 × 5 = 15 minute</text>
<text x="300" y="160" font-size="22" fill="#78350f" font-weight="bold">12 felii = 60 de minute</text>
<text x="300" y="195" font-size="22" fill="#78350f" font-weight="bold">= 1 oră</text>
</svg>`
        },
        {
          label: "🌍 Cât este ceasul în lume?",
          html: `<p>Soarele nu luminează tot Pământul deodată: când la noi este zi, de cealaltă parte este noapte! De aceea fiecare zonă a lumii are ora ei (<b>fusul orar</b>).</p>
<p>Când în Italia este <b>amiază</b> (iarna): la Londra este ora 11, la New York ora 6 dimineața, la Moscova ora 14, la Beijing ora 19 și la Tokyo ora 20. Rotește globul!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Roma 12:00", color: "#16a34a" },
              { lat: 51.5, lon: -0.12, label: "Londra 11:00", color: "#2563eb" },
              { lat: 40.7, lon: -74, label: "New York 6:00", color: "#7c3aed" },
              { lat: 55.75, lon: 37.6, label: "Moscova 14:00", color: "#f97316" },
              { lat: 39.9, lon: 116.4, label: "Beijing 19:00", color: "#ef4444" },
              { lat: 35.7, lon: 139.7, label: "Tokyo 20:00", color: "#db2777" }
            ]
          }
        },
        {
          label: "🕰️ Linia timpului ceasurilor",
          html: `<p>De la vechile bețe cu umbră până la ceasurile atomice: derulează linia timpului.</p>`,
          widget: "timeline",
          options: {
            unit: "ani",
            events: [
              { year: -1500, label: "Ceasul cu umbră egiptean", icon: "☀️" },
              { year: -1400, label: "Clepsidra cu apă", icon: "💧" },
              { year: 1344, label: "Ceasul din turnul din Padova", icon: "🏰" },
              { year: 1656, label: "Ceasul cu pendul al lui Huygens", icon: "🕰️" },
              { year: 1884, label: "24 de fusuri orare", icon: "🌍" },
              { year: 1955, label: "Ceasul atomic", icon: "⚛️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta ceasului: atinge nodurile și descoperă de ce",
      nodes: [
        { id: "sole", label: "Soarele", x: 50, y: 6, color: "#eab308", html: "Primul „ceas” din istorie.", why: "Pământul se rotește în jurul lui însuși în aproximativ 24 de ore: de aceea vedem Soarele răsărind, urcând și apunând. Primii oameni măsurau timpul privind lumina și umbrele." },
        { id: "giorno", label: "Ziua = 24 de ore", x: 20, y: 28, color: "#f97316", html: "Un tur complet al Pământului în jurul său.", why: "<b>Vechii egipteni</b> au împărțit ziua în 12 ore de lumină și noaptea în 12 ore de întuneric: 12 + 12 = 24. Numărul 12 venea poate din numărarea falangelor degetelor cu ajutorul degetului mare (4 degete × 3 falange = 12)." },
        { id: "sessanta", label: "60 de minute, 60 de secunde", x: 80, y: 28, color: "#a855f7", html: "O oră are 60 de minute, un minut are 60 de secunde.", why: "Vine de la <b>babilonieni</b>, care numărau în grupe de câte 60. Numărul 60 se împarte la 2, 3, 4, 5, 6, 10, 12, 15, 20 și 30: perfect pentru jumătăți și sferturi de oră." },
        { id: "lancette", label: "Limbile ceasului", x: 50, y: 45, color: "#2563eb", html: "Mică = ore, mare = minute, subțire = secunde.", why: "Limbile se rotesc în „sensul acelor de ceasornic” pentru că imită umbra <b>cadranului solar</b>: în emisfera nordică, unde au apărut ceasurile, umbra se rotește tocmai în acest sens." },
        { id: "meccanico", label: "Ceasuri mecanice", x: 20, y: 65, color: "#64748b", html: "Roți dințate, greutăți și arcuri care rotesc limbile.", why: "Au apărut în Europa spre sfârșitul secolului al XIII-lea, pe turnurile orașelor și ale mănăstirilor: călugării trebuiau să se roage la ore precise, chiar și noaptea. Pendulul (Galileo, Huygens) le-a făcut mult mai precise." },
        { id: "digitale", label: "Ceas digital", x: 80, y: 65, color: "#16a34a", html: "Arată ora cu cifre: 14:30.", why: "Folosește un mic cristal de <b>cuarț</b> care vibrează de peste 32.000 de ori pe secundă: un cip numără vibrațiile. Primul ceas de mână cu cuarț a apărut în 1969." },
        { id: "fusi", label: "Fusuri orare", x: 35, y: 88, color: "#ef4444", html: "Lumea împărțită în 24 de zone, fiecare cu ora ei.", why: "Când trenurile au făcut călătoriile rapide, fiecare oraș cu ora lui după Soare crea confuzie. În <b>1884</b> a fost aleasă Greenwich ca punct de plecare." },
        { id: "atomico", label: "Ceas atomic", x: 70, y: 88, color: "#0ea5e9", html: "Cel mai precis ceas: numără vibrațiile atomilor.", why: "Din 1967, secunda este definită cu atomii de <b>cesiu</b>. Fără ceasuri atomice, GPS-ul telefonului ți-ar greși poziția cu kilometri." }
      ],
      edges: [
        ["sole", "giorno", "dă"],
        ["giorno", "sessanta", "împărțită în ore de"],
        ["sole", "lancette", "umbra inspiră"],
        ["sessanta", "lancette", "numerele cadranului"],
        ["lancette", "meccanico", "mișcate de"],
        ["meccanico", "digitale", "apoi cuarțul:"],
        ["giorno", "fusi", "diferită în lume:"],
        ["digitale", "atomico", "și mai precis:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: 24 de ore și istorie",
      questions: [
        { type: "num", q: "Ora 4 după-amiaza este ora…", answer: 16, explain: "4 + 12 = 16: ora 16:00." },
        { type: "mc", q: "Cine ne-a lăsat cele 60 de minute?", options: ["Babilonienii", "Romanii", "Americanii"], answer: 0, explain: "Babilonienii numărau în grupe de câte 60." },
        { type: "tf", q: "Cadranul solar funcționează și noaptea.", answer: false, explain: "Cadranul solar folosește umbra Soarelui: noaptea nu funcționează. De aceea s-a inventat clepsidra." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Limba mică</b> = ore; <b>limba mare</b> = minute.</li>
<li>Între un număr și altul sunt <b>5 minute</b>.</li>
<li>15 min = <b>un sfert</b>; 30 min = <b>jumătate de oră</b>; 45 min = <b>trei sferturi</b>.</li>
<li>1 zi = 24 de ore; 1 oră = 60 de minute; 1 minut = 60 de secunde.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Oră", d: "Fiecare dintre cele 24 de părți ale zilei; durează 60 de minute." },
    { t: "Minut", d: "A șaizecea parte a orei; durează 60 de secunde." },
    { t: "Limbă (a ceasului)", d: "Acul care se rotește pe cadran și arată orele, minutele sau secundele." },
    { t: "Cadran", d: "Cercul cu numerele de la 1 la 12." },
    { t: "Sensul acelor de ceasornic", d: "Sensul în care se rotesc limbile ceasului ↻." },
    { t: "Cadran solar", d: "Ceas care arată ora cu ajutorul umbrei Soarelui." },
    { t: "Clepsidră", d: "Instrument care măsoară timpul cu apă sau nisip ce curge încet-încet." },
    { t: "Fus orar", d: "Zonă a Pământului în care toți au aceeași oră." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care limbă arată minutele?", options: ["Cea mică", "Cea mare", "Cadranul"], answer: 1, explain: "Limba mare arată minutele." },
      { type: "num", q: "Câte minute are o oră?", answer: 60, unit: "min", explain: "1 oră = 60 de minute." },
      { type: "num", q: "Câte ore are o zi?", answer: 24, explain: "O zi are 24 de ore." },
      { type: "num", q: "Limba mare este pe 9. Câte minute arată?", answer: 45, unit: "min", explain: "9 × 5 = 45 de minute." },
      { type: "mc", q: "Ora 8:30 se poate spune…", options: ["8 și un sfert", "8 și jumătate", "9 fără un sfert"], answer: 1, explain: "30 de minute = jumătate de oră: 8 și jumătate." },
      { type: "mc", q: "9 fără un sfert este…", options: ["9:15", "8:45", "9:45"], answer: 1, explain: "Mai lipsește un sfert de oră până la 9: este 8 și 45." },
      { type: "tf", q: "Limba orelor face 2 ture pe zi.", answer: true, explain: "Cadranul are 12 ore: în 24 de ore, limba mică face 2 ture." },
      { type: "text", q: "Ora 15:00 este ora … după-amiaza. (scrie numărul)", answer: ["3", "trei"], explain: "15 − 12 = 3: ora 3 după-amiaza." },
      { type: "order", q: "Pune în ordine orele din timpul zilei.", items: ["7:00 trezirea", "8:15 începutul școlii", "12:45 prânzul", "17:00 sportul", "21:00 la culcare"], explain: "De dimineață până seara." },
      { type: "mc", q: "Un desen animat începe la 16:00 și se termină la 16:30. Cât durează?", options: ["Un sfert de oră", "O jumătate de oră", "O oră"], answer: 1, explain: "De la 16:00 la 16:30 trec 30 de minute." },
      { type: "mc", q: "Ce instrument foloseau oamenii din vechime ca să citească ora după umbra Soarelui?", options: ["Cadranul solar", "Termometrul", "Balanța"], answer: 0, explain: "Cadranul solar arată ora cu ajutorul umbrei." },
      { type: "tf", q: "Galileo a descoperit legea pendulului observând un candelabru.", answer: true, explain: "Așa spune tradiția: în Domul din Pisa, în jurul anului 1583." }
    ]
  }
});

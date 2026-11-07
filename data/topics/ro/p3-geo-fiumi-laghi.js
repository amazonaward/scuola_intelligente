TOPIC('ro', {
  id: "p3-geo-fiumi-laghi",
  title: "Râuri și lacuri",
  intro: `Fiecare râu face o călătorie lungă: se naște în munți dintr-un mic <b>izvor</b>, coboară repede printre stânci, străbate câmpia cu curbe largi și la sfârșit se varsă în mare la <b>vărsare</b>. Pe drum întâlnește alte râuri și uneori se oprește într-un <b>lac</b>. Să urmărim această călătorie, chiar și în <b>3D</b>!`,
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "De unde vine apa râurilor?",
      html: `<p>Apa râurilor vine din <b>cer</b>: este <b>ploaia</b> și <b>zăpada</b> care cad pe munți. O parte se scurge imediat pe pământ, o parte pătrunde sub pământ și apoi iese la suprafață din <b>izvoare</b>, o parte rămâne înghețată în <b>ghețari</b> și se topește încet-încet vara.</p>
<p>Râul duce apa spre <b>mare</b>; din mare Soarele o face să se evapore, se formează norii și plouă din nou pe munți. Este <b>circuitul apei</b>: râurile sunt „drumurile” prin care apa se întoarce la mare.</p>
<p>Apa coboară mereu <b>în jos</b>, din cauza gravitației: de aceea râurile se nasc sus și se termină jos, în mare, într-un lac sau într-un alt râu.</p>`
    },
    {
      type: "text",
      title: "Pasul 1: călătoria râului",
      html: `<ol>
<li>💧 <b>Izvorul</b>: locul unde se naște râul, de obicei în munți, dintr-o sursă sau dintr-un ghețar.</li>
<li>⛰️ <b>Cursul superior</b> (la munte): albia este îngustă și abruptă, apa este <b>rapidă</b>, formează repezișuri și <b>cascade</b> și sapă <b>văi</b> adânci în formă de <b>V</b>. Târăște pietre mari.</li>
<li>🌳 <b>Cursul mijlociu</b> (la deal): râul încetinește și se lărgește, primește alte râuri.</li>
<li>🌾 <b>Cursul inferior</b> (la câmpie): apa este <b>lentă</b>, iar râul desenează curbe mari numite <b>meandre</b>. Depune nisip și mâl fin.</li>
<li>🌊 <b>Vărsarea</b>: locul unde se termină râul, în mare, într-un lac sau într-un alt râu.</li>
</ol>
<p>„Canalul” prin care curge apa se numește <b>albie</b>; marginile ei sunt <b>malurile</b>; ridicăturile de pământ construite ca să evite inundațiile sunt <b>digurile</b>. Privind spre vărsare, malul din dreapta este <b>malul drept</b>, iar cel din stânga este <b>malul stâng</b>.</p>`
    },
    {
      type: "svg",
      title: "De la izvor la vărsare",
      svg: `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="330" fill="#e0f2fe"/>
<path d="M0 150 L70 40 L130 110 L180 60 L250 170 L600 250 L600 330 L0 330 Z" fill="#a8a29e"/>
<path d="M50 70 L70 40 L90 68 Z M165 82 L180 60 L196 86 Z" fill="#ffffff"/>
<path d="M200 180 L600 250 L600 330 L120 330 Z" fill="#86efac"/>
<path d="M480 260 L600 250 L600 330 L460 330 Z" fill="#3b82f6"/>
<path d="M95 85 Q110 120 140 150 Q170 175 200 190 Q260 215 300 235 Q260 250 320 262 Q390 270 360 285 Q420 300 475 290" stroke="#2563eb" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M475 290 L500 275 M475 290 L505 300 M475 290 L495 315" stroke="#2563eb" stroke-width="5"/>
<path d="M250 140 Q240 180 230 200" stroke="#60a5fa" stroke-width="5" fill="none"/>
<circle cx="95" cy="85" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="3"/>
<g font-size="15" font-weight="bold" fill="#0f172a">
<text x="20" y="25">💧 izvor</text>
<text x="100" y="175">curs superior</text>
<text x="100" y="193" font-size="12" font-weight="normal">rapid, vale în V</text>
<text x="275" y="200">afluent</text>
<text x="270" y="310">meandre</text>
<text x="500" y="245">vărsare (deltă)</text>
<text x="540" y="320" fill="#ffffff">mare</text>
</g>
<path d="M120 30 L160 30" stroke="#f59e0b" stroke-width="3"/>
<text x="165" y="35" font-size="13" fill="#78350f">sus: apă rapidă → jos: apă lentă</text>
</svg>`,
      caption: "Călătoria unui râu: la munte apa aleargă și sapă, la câmpie încetinește și desenează curbe, la vărsare intră în mare."
    },
    {
      type: "3d",
      title: "Peisajul râului în 3D",
      scene: "terrain",
      caption: "Rotește peisajul și atinge fiecare etichetă: partea se luminează. Urmărește călătoria apei de la ghețar la mare.",
      options: {
        features: {
          glacier: { label: "Ghețar", html: "O mare masă de gheață pe munții cei mai înalți. Vara se topește puțin și dă apă râurilor chiar și când nu plouă. <b>Dora Baltea</b> se naște din ghețarii de pe Mont Blanc." },
          peak: { label: "Vârf", html: "Culmea muntelui. Liniile de creastă dintre vârfuri sunt <b>liniile de despărțire a apelor</b>: ploaia care cade pe o parte ajunge într-un râu, cea care cade pe cealaltă parte ajunge în altul." },
          mountain: { label: "Munte", html: "Aici plouă și ninge mai mult: munții sunt „rezervoarele” de apă ale râurilor." },
          source: { label: "Izvor", html: "Locul unde se naște râul. <b>Padul</b> se naște în Piemont, la <b>Pian del Re</b>, la aproximativ 2000 de metri, la poalele muntelui Monviso." },
          valley: { label: "Vale", html: "Râul, cu forța apei și a pietrelor, sapă stânca: văile râurilor au forma unui <b>V</b>. Văile săpate de ghețari, în schimb, au forma unui <b>U</b>." },
          river: { label: "Râu", html: "Curs de apă care curge tot anul. La câmpie încetinește și formează <b>meandre</b>, curbe mari în formă de S." },
          lake: { label: "Lac", html: "Apă dulce adunată într-o depresiune a terenului. Râul care intră în lac se numește <b>afluent</b>, cel care iese din el <b>emisar</b>." },
          plain: { label: "Câmpie", html: "Adesea chiar râul a construit-o, depunând nisip și mâl timp de mii de ani: <b>Câmpia Padului</b> a fost formată de Pad și de afluenții lui." },
          delta: { label: "Deltă", html: "Vărsare în formă de triunghi, împărțită în multe brațe, care se formează când râul aduce mai multe sedimente decât poate duce marea. Exemplu: <b>delta Padului</b> (sau delta Dunării)." },
          sea: { label: "Mare", html: "Sfârșitul călătoriei. Apa dulce a râului se amestecă cu cea sărată a mării… și mai devreme sau mai târziu se va evapora și va ploua din nou pe munți." }
        }
      }
    },
    {
      type: "quiz",
      title: "Mini-test: călătoria râului",
      questions: [
        { type: "mc", q: "Cum se numește locul unde se naște un râu?", options: ["Vărsare", "Izvor", "Deltă"], answer: 1, explain: "Râul se naște la izvor și se termină la vărsare." },
        { type: "mc", q: "Unde este apa râului cea mai rapidă?", options: ["La munte", "La câmpie", "La vărsare"], answer: 0, explain: "La munte panta este mare și apa aleargă repede." },
        { type: "tf", q: "Meandrele sunt curbele mari pe care le face râul la câmpie.", answer: true, explain: "La câmpie apa este lentă, iar râul șerpuiește formând meandre." }
      ]
    },
    {
      type: "text",
      title: "Pasul 2: afluenți, torenți și bazin",
      html: `<ul>
<li>Un <b>afluent</b> este un râu care se varsă într-un alt râu mai mare. Padul are foarte mulți afluenți: din stânga (din Alpi) <b>Dora Baltea</b>, <b>Ticino</b>, <b>Adda</b>, <b>Oglio</b>, <b>Mincio</b>; din dreapta (din Apenini) <b>Tanaro</b>, <b>Trebbia</b>, <b>Taro</b>, <b>Panaro</b>.</li>
<li>Locul în care două râuri se unesc se numește <b>confluență</b>.</li>
<li>Un <b>torent</b> este un curs de apă care vara poate rămâne aproape uscat, iar după furtuni se umflă brusc. În Italia sunt mulți, mai ales în Apenini și în Sud, unde plouă puțin vara.</li>
<li><b>Pârâul</b> este un mic curs de apă.</li>
<li><b>Bazinul hidrografic</b> este tot teritoriul din care apa de ploaie ajunge într-un anumit râu. Bazinul Padului are aproximativ <b>71.000 km²</b>: aproape un sfert din Italia!</li>
</ul>
<p>Cantitatea de apă a unui râu se schimbă în timpul anului: se numește <b>regim</b>. Râurile alpine sunt mai pline primăvara și vara, când se topesc zăpada și ghețarii; cele din Apenini toamna și iarna, când plouă mai mult.</p>`
    },
    {
      type: "widget",
      title: "Părțile râului",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<path d="M0 0 L200 0 L120 120 L0 160 Z" fill="#a8a29e"/>
<path d="M60 20 Q70 10 80 22 Z" fill="#ffffff"/>
<path d="M500 220 L600 200 L600 300 L470 300 Z" fill="#3b82f6"/>
<path d="M70 40 Q100 90 150 120 Q230 150 260 180 Q300 210 360 200 Q420 190 430 230 Q440 260 490 255" stroke="#2563eb" stroke-width="9" fill="none" stroke-linecap="round"/>
<path d="M330 40 Q320 100 285 190" stroke="#60a5fa" stroke-width="6" fill="none"/>
<ellipse cx="200" cy="245" rx="70" ry="30" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
<path d="M240 190 Q230 205 220 218" stroke="#2563eb" stroke-width="5" fill="none"/>
<circle cx="70" cy="40" r="8" fill="#0ea5e9" stroke="#ffffff" stroke-width="2"/>
</svg>`,
        spots: [
          { x: 70, y: 40, label: "Izvor" },
          { x: 325, y: 70, label: "Afluent" },
          { x: 285, y: 192, label: "Confluență" },
          { x: 420, y: 200, label: "Meandru" },
          { x: 200, y: 245, label: "Lac" },
          { x: 490, y: 255, label: "Vărsare" },
          { x: 90, y: 120, label: "Munte" }
        ]
      },
      caption: "Atinge fiecare punct și alege numele potrivit."
    },
    {
      type: "text",
      title: "Pasul 3: două feluri de vărsare",
      html: `<p>Nu toate râurile se termină la fel:</p>
<ul>
<li><b>Vărsare în deltă</b>: râul se împarte în multe brațe și formează un triunghi de pământuri noi, pentru că aduce multe sedimente, iar marea (cu maree puțină) nu reușește să le ducă departe. Exemple: <b>Padul</b>, <b>Nilul</b>, <b>Dunărea</b>.</li>
<li><b>Vărsare în estuar</b>: râul se termină cu o singură gură largă în formă de pâlnie, „curățată” de <b>mareele</b> care intră și ies. Exemple: <b>Tamisa</b> la Londra, <b>Sena</b> în Franța, <b>Río de la Plata</b> în America de Sud.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Deltă și estuar",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<rect x="10" y="10" width="280" height="240" fill="#86efac"/>
<rect x="10" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M150 10 L150 110" stroke="#2563eb" stroke-width="10"/>
<path d="M150 110 L90 175 M150 110 L130 178 M150 110 L170 178 M150 110 L210 175" stroke="#2563eb" stroke-width="6"/>
<path d="M150 110 L70 170 L230 170 Z" fill="#facc15" opacity="0.45"/>
<text x="150" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">DELTĂ</text>
<text x="150" y="225" font-size="14" text-anchor="middle" fill="#ffffff">multe brațe, triunghi</text>
<rect x="310" y="10" width="280" height="240" fill="#86efac"/>
<rect x="310" y="170" width="280" height="80" fill="#3b82f6"/>
<path d="M450 10 L450 90" stroke="#2563eb" stroke-width="10"/>
<path d="M445 90 L380 172 L520 172 L455 90 Z" fill="#3b82f6"/>
<text x="450" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">ESTUAR</text>
<text x="450" y="225" font-size="14" text-anchor="middle" fill="#ffffff">o singură gură în pâlnie</text>
</svg>`,
      caption: "În deltă râul construiește pământ nou; în estuar marea intră în râu cu mareele."
    },
    {
      type: "text",
      title: "Pasul 4: lacurile",
      html: `<p>Un <b>lac</b> este o masă de apă (de obicei dulce) care umple o <b>depresiune</b>, o „gaură” a terenului. Nu este legat direct de mare. Este alimentat de râuri (<b>afluenții</b>), de izvoare de pe fund și de ploaie; adesea din el iese un râu (<b>emisarul</b>).</p>
<p>Lacurile se clasifică după felul în care s-a format depresiunea:</p>
<ul>
<li>🧊 <b>Glaciare</b>: săpate de ghețari în timpul glaciațiunilor. Sunt lungi și înguste, ca marile lacuri subalpine: <b>Garda</b>, <b>Maggiore</b>, <b>Como</b>, <b>Iseo</b>, <b>Orta</b>. Sunt glaciare și micile lacuri alpine.</li>
<li>🌋 <b>Vulcanice</b>: în craterul unui vulcan stins. Sunt aproape rotunde: <b>Bolsena</b>, <b>Bracciano</b>, <b>Vico</b>, <b>Albano</b> (în Lazio).</li>
<li>🪨 <b>Tectonice</b>: într-o depresiune creată de mișcările scoarței terestre, precum <b>Trasimeno</b> în Umbria.</li>
<li>🏖️ <b>Litorale</b>: aproape de mare, separate de fâșii de nisip, precum <b>Lesina</b> și <b>Varano</b> în Puglia.</li>
<li>🏗️ <b>Artificiale</b>: create de om cu un <b>baraj</b>, pentru a avea apă și a produce energie electrică, precum lacul <b>Ceresole Reale</b> în Piemont.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Ce fel de lac este?",
      widget: "classify",
      caption: "Pune fiecare lac în grupul potrivit.",
      options: {
        groups: ["🧊 Glaciar", "🌋 Vulcanic", "🏖️ Litoral", "🏗️ Artificial"],
        items: [
          ["Lacul Garda", 0], ["Lacul Maggiore", 0], ["Lacul Como", 0],
          ["Lacul Bolsena", 1], ["Lacul Bracciano", 1], ["Lacul Albano", 1],
          ["Lacul Lesina", 2], ["Lacul Varano", 2],
          ["Lacul Ceresole Reale (cu baraj)", 3]
        ]
      }
    },
    {
      type: "example",
      title: "Exemplu practic: călătoria Padului",
      html: `<p><b>Padul</b> este cel mai lung râu din Italia: <b>652 km</b>.</p>
<ul>
<li>Se naște în <b>Piemont</b>, la <b>Pian del Re</b> (aproximativ 2000 m), la poalele muntelui <b>Monviso</b>.</li>
<li>Coboară repede prin vale, apoi ajunge la câmpie și străbate <b>Torino</b>.</li>
<li>Curge de la Vest la Est prin <b>Câmpia Padului</b>, între Piemont, Lombardia, Emilia-Romagna și Veneto, trecând pe lângă Piacenza, Cremona și Ferrara.</li>
<li>Primește mai mult de 140 de afluenți.</li>
<li>Se varsă în <b>Marea Adriatică</b> cu o mare <b>deltă</b>, între Veneto și Emilia-Romagna, astăzi parc natural.</li>
</ul>
<p>După Pad, cele mai lungi râuri din Italia sunt <b>Adige</b> (aproximativ 410 km) și <b>Tibru</b> (aproximativ 405 km), care străbate Roma.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: la ce ne folosesc râurile și lacurile?",
      html: `<ul>
<li>🚰 <b>Apă</b> de băut și pentru case (după ce a fost epurată).</li>
<li>🌾 <b>Irigații</b>: canale care duc apa la ogoare. Câmpia Padului este plină de canale, precum <b>Canalul Cavour</b> în Piemont.</li>
<li>⚡ <b>Energie</b>: barajele și hidrocentralele transformă forța apei care cade în electricitate.</li>
<li>🚢 <b>Transport</b>: odinioară bărcile și șlepurile duceau mărfuri pe râuri; și astăzi pe Rin și pe Dunăre navighează nave mari.</li>
<li>🐟 <b>Pescuit</b>, sport și turism: canoe, vele, înot în lacuri.</li>
<li>🏙️ Multe <b>orașe</b> au apărut pe râuri: Roma pe Tibru, Florența pe Arno, Torino pe Pad, Parisul pe Sena, Londra pe Tamisa.</li>
</ul>
<p>Dar râurile trebuie <b>respectate</b>: pot ieși din matcă și pot provoca <b>inundații</b>. De aceea nu trebuie să construim prea aproape de diguri și trebuie să păstrăm râurile curate.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… în lacul Baikal se află o cincime din apa dulce a lacurilor din lume?",
      html: `<p>Lacul <b>Baikal</b>, în Siberia (Rusia), este cel mai <b>adânc</b> lac din lume: <b>1642 de metri</b>! Conține aproximativ <b>20%</b> din toată apa dulce lichidă a lacurilor și râurilor de pe Pământ. Este și unul dintre cele mai vechi: are aproximativ 25 de milioane de ani. Iarna îngheață, iar gheața este atât de groasă încât trec peste ea automobile.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… cel mai mare „lac” din lume se numește mare?",
      html: `<p><b>Marea Caspică</b>, între Europa și Asia, este de fapt cel mai mare lac din lume: aproximativ <b>371.000 km²</b>, mai mare decât Italia (aproximativ 302.000 km²)! Se numește „mare” pentru că apa ei este puțin <b>sărată</b>. Cel mai mare lac de apă dulce este <b>Lacul Superior</b>, între Canada și Statele Unite.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că… Nil sau Amazon?",
      html: `<p><b>Nilul</b> (aproximativ 6650 km) și <b>Amazonul</b> (aproximativ 6400 km, dar unii cercetători spun că mai mult) își dispută titlul de cel mai lung râu din lume: depinde de unde se pune izvorul! La cantitatea de apă însă nu e concurență: Amazonul duce în mare aproximativ <b>o cincime</b> din toată apa râurilor din lume.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege râurile și lacurile",
      intro: "Dacă sunt multe cuvinte, încearcă să privești râul într-un alt fel.",
      tabs: [
        {
          label: "🌳 Râul ca un copac",
          html: `<p>Privește un râu de sus, cu toți afluenții lui: seamănă cu un <b>copac</b> răsturnat!</p>
<ul>
<li><b>rădăcinile</b> și cele mai mici ramuri sunt pâraiele de la munte;</li>
<li><b>ramurile</b> sunt afluenții;</li>
<li><b>trunchiul</b> este râul principal;</li>
<li>locul unde trunchiul atinge pământul este <b>vărsarea</b>.</li>
</ul>
<p>Și toată coroana copacului? Este <b>bazinul hidrografic</b>. În engleză râul cu afluenții lui se numește chiar <i>river system</i>, iar formele de copac se numesc <b>dendritice</b> (din greacă <i>déndron</i>, copac).</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<path d="M300 250 L300 160" stroke="#2563eb" stroke-width="12"/>
<path d="M300 160 Q240 120 180 90 M300 160 Q360 120 420 90 M300 190 Q230 180 160 170 M300 190 Q380 185 450 165" stroke="#2563eb" stroke-width="7" fill="none"/>
<path d="M180 90 Q150 60 120 40 M180 90 Q190 55 200 30 M420 90 Q450 60 480 40 M420 90 Q400 55 390 25 M160 170 Q120 150 90 130 M450 165 Q490 145 520 120" stroke="#60a5fa" stroke-width="4" fill="none"/>
<text x="310" y="245" font-size="15" fill="#1e3a8a" font-weight="bold">vărsare (trunchi)</text>
<text x="440" y="200" font-size="15" fill="#1e3a8a" font-weight="bold">afluenți (ramuri)</text>
<text x="60" y="30" font-size="15" fill="#1e3a8a" font-weight="bold">pâraie și izvoare</text>
</svg>`
        },
        {
          label: "🧪 Experimentul cu tava",
          html: `<p>Construiește un râu în miniatură:</p>
<ol>
<li>Pune <b>nisip</b> umed într-o tavă de copt, mai ridicat dintr-o parte („muntele”).</li>
<li>Sprijină tava puțin înclinată, cu partea joasă deasupra unei chiuvete sau a unui lighean („marea”).</li>
<li>Toarnă încet apă dintr-un pahar pe partea de sus.</li>
</ol>
<p>Observă: apa sapă un <b>șanț</b> (valea), se împarte și se reunește (afluenți și confluențe), jos încetinește și lasă nisipul, formând o mică <b>deltă</b>! Dacă faci o gaură în nisip, apa o umple: iată un <b>lac</b> cu afluentul și emisarul lui.</p>`
        },
        {
          label: "🌍 Marile râuri ale lumii",
          html: `<p>Rotește globul și găsește vărsările celor mai faimoase râuri. Observă că marile civilizații antice au apărut lângă râuri: egiptenii pe Nil, sumerienii între Tigru și Eufrat, indienii pe Indus, chinezii pe Fluviul Galben.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 31.5, lon: 31.0, label: "Nil (~6650 km)", color: "#2563eb" },
              { lat: -0.5, lon: -50.0, label: "Amazon (~6400 km)", color: "#16a34a" },
              { lat: 31.4, lon: 121.9, label: "Yangtze (~6300 km)", color: "#f97316" },
              { lat: 29.0, lon: -89.3, label: "Mississippi", color: "#a855f7" },
              { lat: 45.2, lon: 29.6, label: "Dunărea", color: "#0ea5e9" },
              { lat: 44.95, lon: 12.45, label: "Pad (652 km)", color: "#dc2626" },
              { lat: 53.5, lon: 108.0, label: "Lacul Baikal", color: "#06b6d4" },
              { lat: 42.0, lon: 50.5, label: "Marea Caspică", color: "#06b6d4" }
            ]
          }
        },
        {
          label: "🇬🇧 Cuvintele în engleză",
          html: `<p>Întoarce cartonașele: multe cuvinte englezești seamănă cu cele românești!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🏞️ river", back: "râu" },
              { front: "💧 spring / source", back: "izvor" },
              { front: "🌊 mouth", back: "vărsare („gura” râului)" },
              { front: "🔀 tributary", back: "afluent" },
              { front: "〰️ meander", back: "meandru" },
              { front: "🏔️ glacier", back: "ghețar" },
              { front: "🛶 lake", back: "lac" },
              { front: "🧱 dam", back: "baraj" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: de ce sunt așa râurile și lacurile? Atinge nodurile",
      nodes: [
        { id: "ciclo", label: "🌧️ Circuitul apei", x: 50, y: 5, color: "#0ea5e9", html: "Evaporare, nori, ploaie și zăpadă.", why: "Soarele evaporă apa mărilor; vaporii urcă, se răcesc și formează norii; apoi cad sub formă de ploaie sau zăpadă. Că apa râurilor vine toată din ploaie a dovedit-o francezul Pierre Perrault în 1674, măsurând ploaia și apa Senei." },
        { id: "gravita", label: "⬇️ Gravitația", x: 20, y: 25, color: "#7c3aed", html: "Apa coboară mereu în jos.", why: "Este aceeași forță care face merele să cadă, descrisă de Isaac Newton în 1687. Cu cât terenul este mai abrupt, cu atât apa accelerează mai mult: de aceea la munte râurile sunt rapide." },
        { id: "sorgente", label: "💧 Izvor", x: 80, y: 25, color: "#06b6d4", html: "Unde se naște râul.", why: "Apa de ploaie pătrunde în rocile poroase sau fisurate, curge pe sub pământ și iese la suprafață acolo unde găsește un strat de rocă impermeabilă care o oprește." },
        { id: "erosione", label: "⛏️ Eroziunea", x: 20, y: 50, color: "#b45309", html: "Apa rapidă sapă și transportă pietre.", why: "Apa care aleargă târăște pietre și nisip care lovesc fundul ca o pilă: în mii de ani sapă văi adânci. Marele Canion a fost săpat de râul Colorado în câteva milioane de ani." },
        { id: "deposito", label: "🏝️ Depunerea", x: 50, y: 50, color: "#eab308", html: "Apa lentă lasă nisip și mâl.", why: "Cu cât apa este mai lentă, cu atât transportă mai puțină greutate: mai întâi lasă să cadă pietrele, apoi nisipul, în sfârșit mâlul foarte fin. Așa se nasc câmpiile aluvionare și deltele." },
        { id: "meandri", label: "〰️ Meandre și deltă", x: 80, y: 55, color: "#2563eb", html: "Curbe la câmpie, vărsare în brațe.", why: "În curbă apa este mai rapidă pe malul exterior (care este săpat) și mai lentă pe cel interior (unde se depune nisip): curba se lărgește tot mai mult. Numele vine de la râul Meandru, din Turcia, faimos pentru curbele lui." },
        { id: "ghiacciai", label: "🧊 Ghețari vechi", x: 25, y: 80, color: "#38bdf8", html: "În timpul glaciațiunilor au săpat mari depresiuni.", why: "Până acum aproximativ 20.000 de ani, enorme limbi de gheață coborau din Alpi până în câmpie. Au săpat depresiuni adânci (fundul Lacului Como coboară sub nivelul mării!) și au lăsat dealuri de sedimente, morenele, care fac rol de baraj." },
        { id: "laghi", label: "🛶 Lacuri", x: 60, y: 90, color: "#0369a1", html: "Glaciare, vulcanice, tectonice, litorale, artificiale.", why: "Un lac se naște oriunde există o depresiune care reține apa: un crater, o vale săpată de gheață, o scufundare a scoarței, o dună sau un baraj. Mai devreme sau mai târziu râurile îl umplu cu sedimente: și lacurile, încet, „îmbătrânesc”." }
      ],
      edges: [
        ["ciclo", "sorgente", "alimentează"],
        ["ciclo", "gravita", "apa cade din cauza"],
        ["gravita", "erosione", "apă rapidă:"],
        ["erosione", "deposito", "sedimentele ajung în"],
        ["deposito", "meandri", "formează"],
        ["sorgente", "meandri", "râul curge până la"],
        ["ghiacciai", "laghi", "sapă depresiunile"],
        ["erosione", "ghiacciai", "și gheața sapă:"]
      ]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Râul se naște la <b>izvor</b>, curge în <b>albia</b> lui și se termină la <b>vărsare</b>.</li>
<li>La munte este <b>rapid</b> și sapă văi în V; la câmpie este <b>lent</b> și formează <b>meandre</b>.</li>
<li><b>Afluenții</b> se varsă într-un râu mai mare; <b>torentul</b> poate rămâne uscat vara.</li>
<li>Vărsarea poate fi în <b>deltă</b> (multe brațe) sau în <b>estuar</b> (o gură în pâlnie).</li>
<li><b>Lacul</b> umple o depresiune: poate fi glaciar, vulcanic, tectonic, litoral sau artificial. Râul care intră este <b>afluentul</b>, cel care iese este <b>emisarul</b>.</li>
<li>Padul (652 km) este cel mai lung râu din Italia; Garda este cel mai mare lac.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: lacurile",
      questions: [
        { type: "mc", q: "Cum se numește râul care iese dintr-un lac?", options: ["Afluent", "Emisar", "Confluent"], answer: 1, explain: "Emisarul iese, afluentul intră în lac." },
        { type: "mc", q: "Lacurile Bolsena și Bracciano, aproape rotunde, sunt de origine…", options: ["glaciară", "vulcanică", "artificială"], answer: 1, explain: "Se află în craterele unor vulcani străvechi din Lazio." },
        { type: "mc", q: "Care este cel mai mare lac din Italia?", options: ["Lacul Como", "Lacul Garda", "Lacul Trasimeno"], answer: 1, explain: "Lacul Garda, aproximativ 370 km²." }
      ]
    }
  ],
  glossary: [
    { t: "Izvor", d: "Locul unde se naște un râu." },
    { t: "Vărsare", d: "Locul unde se termină un râu, în mare, într-un lac sau într-un alt râu." },
    { t: "Albie", d: "Șanțul în care curge apa râului." },
    { t: "Dig", d: "Ridicătură de pământ de-a lungul râului care împiedică apa să iasă." },
    { t: "Afluent", d: "Râu care se varsă într-un alt râu (sau într-un lac)." },
    { t: "Confluență", d: "Loc în care două râuri se unesc." },
    { t: "Torent", d: "Curs de apă cu multă apă după ploi și cu puțină sau deloc vara." },
    { t: "Meandru", d: "Curbă mare în formă de S pe care o face râul la câmpie." },
    { t: "Deltă", d: "Vărsare împărțită în multe brațe, în formă de triunghi." },
    { t: "Estuar", d: "Vărsare cu un singur braț, largă, în formă de pâlnie." },
    { t: "Bazin hidrografic", d: "Teritoriu din care toate apele ajung într-un anumit râu." },
    { t: "Afluent / Emisar (la lac)", d: "Râul care intră într-un lac / râul care iese dintr-un lac." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Pune în ordine călătoria râului.", items: ["Izvor", "Curs superior (munte)", "Curs inferior (câmpie)", "Vărsare"], explain: "Râul se naște la munte și se termină la vărsare." },
      { type: "mc", q: "De unde vine apa râurilor?", options: ["Din ploaie, din zăpadă și din ghețari", "Doar din mare", "Din robinete"], answer: 0, explain: "Este apa din circuitul apei: ploaie, zăpadă și gheață care se topește." },
      { type: "text", q: "Cum se numește un râu care se varsă într-un alt râu?", answer: ["afluent", "un afluent", "afluentul"], explain: "Se numește afluent; locul de întâlnire este confluența." },
      { type: "tf", q: "La câmpie apa râului este mai rapidă decât la munte.", answer: false, explain: "La câmpie terenul este aproape plat, iar apa încetinește." },
      { type: "mc", q: "Care este cel mai lung râu din Italia?", options: ["Tibru", "Arno", "Padul"], answer: 2, explain: "Padul, 652 km, se naște din Monviso și se varsă în Adriatica." },
      { type: "num", q: "Padul are 652 km, iar Tibrul 405 km. Cu câți km este Padul mai lung?", answer: 247, tol: 0, unit: "km", explain: "652 − 405 = 247 km." },
      { type: "mc", q: "O vărsare împărțită în multe brațe în formă de triunghi se numește…", options: ["estuar", "deltă", "meandru"], answer: 1, explain: "Deltă, ca litera grecească Δ." },
      { type: "mc", q: "Ce este un torent?", options: ["Un râu care vara poate rămâne aproape uscat", "Un lac de munte", "Un râu care nu are vărsare"], answer: 0, explain: "Torenții depind de ploi: vara se pot usca." },
      { type: "mc", q: "Marile lacuri din nordul Italiei (Garda, Maggiore, Como) sunt de origine…", options: ["vulcanică", "glaciară", "litorală"], answer: 1, explain: "Depresiunile lor au fost săpate de ghețarii glaciațiunilor." },
      { type: "tf", q: "Emisarul este râul care iese dintr-un lac.", answer: true, explain: "Afluentul intră, emisarul iese." },
      { type: "mc", q: "Care este cel mai adânc lac din lume?", options: ["Marea Caspică", "Baikal", "Lacul Garda"], answer: 1, explain: "Baikal, în Siberia, adânc de 1642 de metri." },
      { type: "text", q: "Cum se numește curba mare în formă de S pe care o face râul la câmpie?", answer: ["meandru", "meandrul", "meandre"], explain: "Meandrul." }
    ],
    gen: [["sub100", 2]]
  }
});

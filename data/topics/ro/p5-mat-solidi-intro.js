TOPIC('ro', {
  id: "p5-mat-solidi-intro",
  title: "Corpurile geometrice",
  intro: "Un zar, o conservă, un corn de înghețată, o minge: toate sunt <b>corpuri geometrice</b>, figuri care nu stau plate pe o foaie, ci ocupă spațiu. Să învățăm să deosebim <b>poliedrele</b> de <b>corpurile rotunde</b>, să numărăm <b>fețele, muchiile și vârfurile</b> și să „deschidem” un corp în <b>desfășurarea</b> lui.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "De la plan la spațiu",
      html: `<p>Figurile pe care le-ai studiat până acum (pătrat, triunghi, cerc…) sunt <b>figuri plane</b>: au doar <b>două dimensiuni</b>, lungime și lățime. Stau toate pe o foaie.</p>
<p><b>Corpurile</b> au <b>trei dimensiuni</b>: lungime, lățime și <b>înălțime</b> (sau adâncime). Ocupă un spațiu: le poți ține în mână, învârti, umple.</p>
<p>Corpurile geometrice se împart în două mari familii:</p>
<ul>
<li><b>Poliedrele</b>: au doar <b>fețe plane</b>, în formă de poligon (de ex. cubul, piramida). Dacă le așezi, nu se rostogolesc niciodată.</li>
<li><b>Corpurile rotunde</b> (sau „de rotație”): au cel puțin o <b>suprafață curbă</b> (de ex. cilindrul, conul, sfera). Se pot rostogoli!</li>
</ul>`
    },
    {
      type: "3d",
      title: "Învârte corpurile în 3D",
      scene: "solid",
      options: { shape: "cube", shapes: ["cube", "box", "prism", "pyramid", "cylinder", "cone", "sphere"], labels: true, color: "#60a5fa" },
      caption: "Folosește butoanele ca să schimbi corpul și rotește-l cu degetul sau cu mouse-ul. Care au doar fețe plane? Care au suprafețe curbe?"
    },
    {
      type: "text",
      title: "Fețe, muchii și vârfuri",
      html: `<p>Fiecare poliedru are trei „ingrediente”:</p>
<ul>
<li><b>fețele</b>: poligoanele care îl închid (la zar sunt cele 6 pătrate cu puncte);</li>
<li><b>muchiile</b>: segmentele în care se întâlnesc două fețe (dacă treci degetul peste ele, simți „marginea”);</li>
<li><b>vârfurile</b>: punctele în care se întâlnesc mai multe muchii („colțurile”).</li>
</ul>
<table>
<tr><th>Poliedrul</th><th>Fețe</th><th>Muchii</th><th>Vârfuri</th></tr>
<tr><td>Cub</td><td>6</td><td>12</td><td>8</td></tr>
<tr><td>Paralelipiped</td><td>6</td><td>12</td><td>8</td></tr>
<tr><td>Prismă cu baza triunghiulară</td><td>5</td><td>9</td><td>6</td></tr>
<tr><td>Piramidă cu baza pătrată</td><td>5</td><td>8</td><td>5</td></tr>
<tr><td>Piramidă cu baza triunghiulară (tetraedru)</td><td>4</td><td>6</td><td>4</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Recunoaște părțile cubului",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="200,110 380,110 380,290 200,290" fill="#93c5fd" stroke="#1e3a8a" stroke-width="4"/>
<polygon points="200,110 280,40 460,40 380,110" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="4"/>
<polygon points="380,110 460,40 460,220 380,290" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<line x1="200" y1="290" x2="280" y2="220" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="280" y1="220" x2="460" y2="220" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="280" y1="220" x2="280" y2="40" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="8 6"/>
<circle cx="460" cy="40" r="8" fill="#dc2626"/>
<line x1="380" y1="110" x2="380" y2="290" stroke="#f97316" stroke-width="8"/>
</svg>`,
        spots: [
          { x: 290, y: 200, label: "Față" },
          { x: 380, y: 200, label: "Muchie" },
          { x: 460, y: 40, label: "Vârf" },
          { x: 370, y: 75, label: "Față de sus" },
          { x: 280, y: 130, label: "Muchie ascunsă" }
        ]
      },
      caption: "Atinge fiecare punct și alege numele potrivit. Liniile punctate sunt muchiile care nu se văd din această poziție."
    },
    {
      type: "quiz",
      title: "Mini-test: poliedre și corpuri rotunde",
      questions: [
        { type: "mc", q: "Care dintre acestea este un poliedru?", options: ["Mingea", "Zarul", "Conserva"], answer: 1, explain: "Zarul (cubul) are doar fețe plane: este un poliedru." },
        { type: "num", q: "Câte muchii are un cub?", answer: 12, explain: "4 sus, 4 jos și 4 verticale: 12." },
        { type: "tf", q: "Conul este un corp de rotație.", answer: true, explain: "Are o suprafață curbă și se obține rotind un triunghi dreptunghic." }
      ]
    },
    {
      type: "text",
      title: "Prisme și piramide",
      html: `<p>Două familii de poliedre foarte importante:</p>
<ul>
<li><b>Prisma</b>: are <b>două baze egale și paralele</b> (una sus și una jos) și fețe laterale care sunt <b>dreptunghiuri</b>. Își ia numele de la forma bazei: prismă triunghiulară, patrulateră, pentagonală, hexagonală… <b>Cubul</b> și <b>paralelipipedul</b> sunt prisme speciale.</li>
<li><b>Piramida</b>: are <b>o singură bază</b> și fețe laterale care sunt <b>triunghiuri</b> ce se întâlnesc într-un punct sus, <b>vârful</b> (sau apexul). Și ea își ia numele de la bază: piramidă triunghiulară, patrulateră…</li>
</ul>
<p>Truc: dacă o prismă are baza cu <b>n</b> laturi, are <b>n + 2</b> fețe. O piramidă cu baza de <b>n</b> laturi are <b>n + 1</b> fețe.</p>`
    },
    {
      type: "text",
      title: "Corpurile de rotație",
      html: `<p>De ce se numesc „de rotație”? Pentru că se pot obține <b>rotind o figură plană</b> în jurul unei linii (<b>axa</b>):</p>
<ul>
<li>un <b>dreptunghi</b> care se rotește în jurul unei laturi formează un <b>cilindru</b> 🥫;</li>
<li>un <b>triunghi dreptunghic</b> care se rotește în jurul unei catete formează un <b>con</b> 🍦;</li>
<li>un <b>semicerc</b> care se rotește în jurul diametrului formează o <b>sferă</b> ⚽.</li>
</ul>
<p>Cilindrul are 2 baze în formă de disc, conul are 1, sfera nu are nici una: este toată curbă!</p>`
    },
    {
      type: "svg",
      title: "Figuri care se rotesc și devin corpuri",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<line x1="100" y1="30" x2="100" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<rect x="100" y="60" width="60" height="140" fill="#fb923c" stroke="#9a3412" stroke-width="3"/>
<ellipse cx="100" cy="60" rx="60" ry="14" fill="none" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<ellipse cx="100" cy="200" rx="60" ry="14" fill="none" stroke="#9a3412" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M150 30 A40 12 0 1 1 50 30" fill="none" stroke="#dc2626" stroke-width="3"/>
<polygon points="50,24 44,34 58,34" fill="#dc2626"/>
<text x="100" y="265" font-size="20" text-anchor="middle" font-weight="bold">dreptunghi → cilindru</text>
<line x1="300" y1="30" x2="300" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<polygon points="300,60 300,200 360,200" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<ellipse cx="300" cy="200" rx="60" ry="14" fill="none" stroke="#3f6212" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="300" y1="60" x2="240" y2="200" stroke="#3f6212" stroke-width="2" stroke-dasharray="5 4"/>
<text x="300" y="265" font-size="20" text-anchor="middle" font-weight="bold">triunghi → con</text>
<line x1="500" y1="30" x2="500" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<path d="M500 60 A70 70 0 0 1 500 200 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<path d="M500 60 A70 70 0 0 0 500 200" fill="none" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="5 4"/>
<text x="500" y="265" font-size="20" text-anchor="middle" font-weight="bold">semicerc → sferă</text>
<text x="300" y="292" font-size="16" text-anchor="middle" fill="#dc2626">linia roșie punctată este axa de rotație</text>
</svg>`,
      caption: "Partea colorată se rotește în jurul axei roșii: conturul punctat arată corpul care se formează."
    },
    {
      type: "text",
      title: "Desfășurarea: deschiderea unui corp",
      html: `<p>Dacă iei o cutie de carton și o „descoși” de-a lungul unor muchii, o poți întinde plat pe masă. Figura plană pe care o obții se numește <b>desfășurarea</b> corpului.</p>
<ul>
<li>desfășurarea <b>cubului</b> este alcătuită din <b>6 pătrate</b> egale (există 11 moduri diferite de a o desena!);</li>
<li>desfășurarea <b>paralelipipedului</b> este alcătuită din <b>6 dreptunghiuri</b>, egale două câte două;</li>
<li>desfășurarea <b>cilindrului</b> este un <b>dreptunghi</b> și <b>2 discuri</b>: dreptunghiul este eticheta conservei!</li>
<li>desfășurarea <b>conului</b> este un <b>sector de disc</b> (un „evantai”) și un disc.</li>
</ul>
<p>Sfera, în schimb, <b>nu are o desfășurare</b> exactă: nu se poate întinde plat fără să se rupă sau să se deformeze. De aceea hărțile lumii sunt întotdeauna puțin „greșite”!</p>`
    },
    {
      type: "svg",
      title: "Desfășurarea cubului",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g stroke="#166534" stroke-width="3">
<rect x="110" y="20" width="65" height="65" fill="#86efac"/>
<rect x="45" y="85" width="65" height="65" fill="#4ade80"/>
<rect x="110" y="85" width="65" height="65" fill="#22c55e"/>
<rect x="175" y="85" width="65" height="65" fill="#4ade80"/>
<rect x="240" y="85" width="65" height="65" fill="#86efac"/>
<rect x="110" y="150" width="65" height="65" fill="#bbf7d0"/>
</g>
<text x="142" y="60" font-size="18" text-anchor="middle">sus</text>
<text x="142" y="124" font-size="18" text-anchor="middle">față</text>
<text x="142" y="190" font-size="18" text-anchor="middle">jos</text>
<text x="272" y="124" font-size="18" text-anchor="middle">spate</text>
<text x="370" y="110" font-size="40" fill="#166534">→</text>
<polygon points="440,130 520,130 520,210 440,210" fill="#22c55e" stroke="#166534" stroke-width="3"/>
<polygon points="440,130 480,95 560,95 520,130" fill="#86efac" stroke="#166534" stroke-width="3"/>
<polygon points="520,130 560,95 560,175 520,210" fill="#4ade80" stroke="#166534" stroke-width="3"/>
<text x="300" y="270" font-size="20" text-anchor="middle" fill="#14532d">Îndoaie de-a lungul muchiilor: 6 pătrate devin un cub</text>
</svg>`,
      caption: "Una dintre cele 11 desfășurări posibile ale cubului. Încearcă s-o desenezi, s-o decupezi și s-o închizi cu scotch!"
    },
    {
      type: "example",
      title: "Exemplu practic: vânătoarea de corpuri în bucătărie",
      html: `<p>Deschide cămara și uită-te bine:</p>
<ul>
<li>cutia de cereale este un <b>paralelipiped</b> (6 fețe dreptunghiulare);</li>
<li>conserva de roșii este un <b>cilindru</b>;</li>
<li>cornetul de înghețată este un <b>con</b>;</li>
<li>portocala este (aproape) o <b>sferă</b>;</li>
<li>ambalajul de Toblerone este o <b>prismă cu baza triunghiulară</b>;</li>
<li>plicul de ceai în formă de piramidă este un <b>tetraedru</b>.</li>
</ul>
<p>De ce sunt conservele cilindri și nu cuburi? Pentru că cilindrii rezistă mai bine la presiune, se așază bine în stive și se pot rostogoli pe benzile din fabrică!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: câte cubulețe?",
      html: `<p><b>Volumul</b> unui corp este <b>spațiul</b> pe care îl ocupă. Se poate măsura numărând câte cubulețe egale încap înăuntru.</p>
<p>O cutie are lungimea de <b>4</b> cubulețe, lățimea de <b>3</b> și înălțimea de <b>2</b>:</p>
<ul>
<li>un strat conține 4 × 3 = <b>12</b> cubulețe;</li>
<li>sunt 2 straturi: 12 × 2 = <b>24 de cubulețe</b>.</li>
</ul>
<p>Dacă fiecare cubuleț are muchia de 1 cm, volumul este <b>24 cm³</b> (centimetri cubi). Încearcă mai jos cu cursoarele!</p>`
    },
    {
      type: "3d",
      title: "Umple cutia cu cubulețe",
      scene: "blocks",
      options: { mode: "volume", a: 4, b: 3, c: 2 },
      caption: "Volumul = lungimea × lățimea × înălțimea. Schimbă cele trei măsuri și numără cubulețele."
    },
    {
      type: "curiosity",
      title: "Știai că…? Cele 5 corpuri perfecte",
      html: `<p>Există doar <b>5 poliedre regulate</b>, cu toate fețele egale și regulate: <b>tetraedrul</b> (4 triunghiuri), <b>cubul</b> (6 pătrate), <b>octaedrul</b> (8 triunghiuri), <b>dodecaedrul</b> (12 pentagoane) și <b>icosaedrul</b> (20 de triunghiuri).</p>
<p>Se numesc și <b>corpuri platonice</b>, după filosoful grec <b>Platon</b>, care le asocia elementelor: foc, pământ, aer, univers și apă. Le găsești în <b>zarurile</b> jocurilor de rol: d4, d6, d8, d12, d20!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Albinele și hexagoanele",
      html: `<p>Celulele fagurilor de albine sunt <b>prisme cu baza hexagonală</b>. Cu această formă albinele reușesc să construiască mai multe celule folosind cât mai puțină ceară, fără să lase spații goale. Încă matematicianul grec Pappus din Alexandria, acum aproximativ 1700 de ani, se întreba cum de erau albinele atât de „bune la geometrie”!</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Corpurile</b> au 3 dimensiuni.</li>
<li><b>Poliedre</b>: doar fețe plane (cub, paralelipiped, prismă, piramidă).</li>
<li><b>Corpuri de rotație</b>: suprafețe curbe (cilindru, con, sferă).</li>
<li>La poliedre numărăm <b>fețele</b>, <b>muchiile</b> și <b>vârfurile</b>.</li>
<li><b>Desfășurarea</b> este corpul „deschis” și întins pe plan.</li>
<li><b>Volumul</b> este spațiul ocupat: se măsoară în cubulețe (cm³).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Poliedru sau corp de rotație?",
      widget: "classify",
      options: {
        groups: ["Poliedre", "Corpuri de rotație"],
        items: [
          ["🎲 zar", 0],
          ["⚽ minge", 1],
          ["🥫 conservă", 1],
          ["📦 cutie de pantofi", 0],
          ["🍦 corn de înghețată", 1],
          ["🔺 piramida lui Keops", 0],
          ["🧱 cărămidă", 0],
          ["🕯️ lumânare cilindrică", 1],
          ["🍫 ambalaj de Toblerone", 0],
          ["🌍 glob pământesc", 1]
        ]
      },
      caption: "Trage sau atinge fiecare obiect și pune-l în grupul potrivit."
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege corpurile",
      intro: "Corpurile se înțeleg mai bine cu mâinile decât cu ochii: încearcă să le construiești, să le atingi sau să descoperi o formulă secretă.",
      tabs: [
        {
          label: "🍡 Scobitori și plastilină",
          html: `<p>Construiește poliedrele cu <b>scobitori</b> (muchiile) și <b>bile de plastilină</b> (vârfurile):</p>
<ul>
<li>pentru un cub îți trebuie <b>12 scobitori</b> și <b>8 bile</b>;</li>
<li>pentru o piramidă cu baza pătrată <b>8 scobitori</b> și <b>5 bile</b>;</li>
<li>pentru un tetraedru <b>6 scobitori</b> și <b>4 bile</b>.</li>
</ul>
<p>Apoi numără „ferestrele” goale: sunt <b>fețele</b>! Așa nu mai greșești când numeri muchiile și vârfurile.</p>`
        },
        {
          label: "✨ Formula lui Euler",
          html: `<p>Marele matematician elvețian <b>Leonhard Euler</b> a descoperit în 1750 o regulă magică, valabilă pentru toate poliedrele „obișnuite” (fără găuri):</p>
<p style="font-size:1.3em;text-align:center"><b>Fețe + Vârfuri − Muchii = 2</b></p>
<ul>
<li>Cub: 6 + 8 − 12 = <b>2</b> ✔</li>
<li>Piramidă pătrată: 5 + 5 − 8 = <b>2</b> ✔</li>
<li>Prismă triunghiulară: 5 + 6 − 9 = <b>2</b> ✔</li>
</ul>
<p>Folosește-o ca să verifici dacă ai numărat bine!</p>`
        },
        {
          label: "🔺 Prismă sau piramidă în 3D",
          html: `<p>Compară o <b>prismă</b> și o <b>piramidă</b> cu aceeași bază hexagonală. Prisma are <b>două baze</b> și fețe laterale dreptunghiulare; piramida are <b>o bază</b> și fețe triunghiulare care urcă spre vârf. Folosește butoanele ca să treci de la una la alta.</p>`,
          scene: "solid",
          options: { shape: "prism", n: 6, r: 1, h: 1.4, labels: true, color: "#f59e0b", shapes: ["prism", "pyramid"] }
        },
        {
          label: "🙈 Săculețul misterios",
          html: `<p>Joc pentru doi: pune într-un săculeț câteva obiecte (un zar, o bilă, un dop, o radieră, un con de hârtie). Colegul, <b>cu ochii închiși</b>, atinge unul și trebuie să spună:</p>
<ul>
<li>are fețe plane sau curbe? → poliedru sau corp de rotație;</li>
<li>câte colțuri (vârfuri) simte?</li>
<li>câte margini (muchii)?</li>
</ul>
<p>Copiii nevăzători învață geometria chiar așa: cu <b>mâinile</b>!</p>`
        },
        {
          label: "🌍 Corpuri celebre din lume",
          html: `<ul>
<li>🇪🇬 <b>Piramidele</b> de la Giza: piramide cu baza pătrată.</li>
<li>🇫🇷 <b>Piramida de la Luvru</b>, din Paris: din sticlă, tot cu baza pătrată.</li>
<li>🇮🇹 <b>Turnul din Pisa</b>: un cilindru (înclinat!).</li>
<li>🇧🇪 <b>Atomium</b> din Bruxelles: 9 sfere legate prin tuburi cilindrice.</li>
<li>🇯🇵 În Japonia se cultivă <b>pepeni cubici</b>, făcuți să crească în cutii de sticlă, pentru că încap mai bine în frigidere!</li>
</ul>`
        },
        {
          "label": "🇬🇷 Cele cinci corpuri ale lui Platon",
          "html": "<p>Un poliedru se numește <b>regulat</b> dacă toate fețele lui sunt <b>poligoane regulate egale</b> și în fiecare vârf se întâlnește <b>același număr</b> de fețe. Filosoful <b>grec</b> <b>Platon</b> (aproximativ 360 î.Hr.) a vorbit despre ele în cartea <i>Timaios</i> și le-a legat de foc, pământ, aer, apă și univers: de aceea se numesc <b>corpuri platonice</b>. <b>Euclid</b> a demonstrat că sunt <b>doar cinci</b>!</p><table><tr><th>Corpul</th><th>Fețe</th><th>Vârfuri</th><th>Muchii</th></tr><tr><td>Tetraedru</td><td>4 triunghiuri</td><td>4</td><td>6</td></tr><tr><td>Cub (hexaedru)</td><td>6 pătrate</td><td>8</td><td>12</td></tr><tr><td>Octaedru</td><td>8 triunghiuri</td><td>6</td><td>12</td></tr><tr><td>Dodecaedru</td><td>12 pentagoane</td><td>20</td><td>30</td></tr><tr><td>Icosaedru</td><td>20 de triunghiuri</td><td>12</td><td>30</td></tr></table><p><b>De ce doar 5?</b> Într-un vârf trebuie să se întâlnească cel puțin 3 fețe, iar unghiurile lor trebuie să facă <b>mai puțin de 360°</b> (altfel corpul devine plat):</p><ul><li>triunghiuri (60°): 3 → 180°, 4 → 240°, 5 → 300° ✔; 6 → 360° ✘ plat;</li><li>pătrate (90°): 3 → 270° ✔; 4 → 360° ✘;</li><li>pentagoane (108°): 3 → 324° ✔;</li><li>hexagoane (120°): 3 → 360° ✘ deja plat.</li></ul><p>Sunt 3 + 1 + 1 = <b>5</b> posibilități. Verifică formula lui Euler pe fiecare rând al tabelului! Zarurile jocurilor de rol cu 4, 6, 8, 12 și 20 de fețe sunt chiar corpurile lui Platon.</p>"
        },
        {
          "label": "🇩🇪 Sferă, cub, cilindru: darul lui Fröbel (Germania)",
          "html": "<p><b>Friedrich Fröbel</b>, învățătorul <b>german</b> care a inventat <b>Kindergarten</b>-ul (grădinița), le dăruia copiilor o cutie de lemn cu trei corpuri: <b>sferă, cub și cilindru</b>. Era „al doilea dar” al lui. De ce tocmai acestea trei? Pentru că sunt cele mai diferite între ele, iar cilindrul se află <b>la mijloc</b> între celelalte două.</p><ol><li><b>Sfera</b>: doar suprafață <b>curbă</b>. Se rostogolește în toate direcțiile și nu stă niciodată pe loc pe un plan înclinat.</li><li><b>Cubul</b>: doar fețe <b>plane</b> (6 pătrate), 8 vârfuri și 12 muchii. Nu se rostogolește: alunecă sau stă pe loc.</li><li><b>Cilindrul</b>: 2 fețe plane (două discuri) și o suprafață curbă. Dacă îl pui în picioare, stă pe loc ca cubul; dacă îl culci, se rostogolește ca sfera, dar doar <b>într-o singură direcție</b>, drept.</li></ol><p>🎯 Încearcă cu o minge, un zar și o rolă de hârtie pe o carte înclinată. Apoi uită-te la modelul de mai jos și schimbă corpul cu butoanele: care este un <b>poliedru</b>? Care sunt <b>corpuri de rotație</b>?</p>",
          "scene": "solid",
          "options": {
            "shapes": [
              "sphere",
              "cube",
              "cylinder"
            ],
            "shape": "sphere",
            "labels": true,
            "color": "#f59e0b"
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta corpurilor: atinge un nod și descoperă de ce",
      nodes: [
        { id: "solido", label: "Corp geometric", x: 50, y: 6, color: "#2563eb", html: "Figură geometrică cu trei dimensiuni.", why: "Lumea reală are 3 dimensiuni: orice obiect are lungime, lățime și înălțime. Geometria corpurilor a fost adunată de <b>Euclid</b> în ultimele cărți din <i>Elemente</i> (aproximativ 300 î.Hr.)." },
        { id: "poliedri", label: "Poliedre", x: 25, y: 28, color: "#16a34a", html: "Corpuri cu doar fețe plane (poligoane).", why: "Din grecescul <i>polýs</i> (multe) + <i>hédra</i> (față, scaun): „cu multe fețe”. Fiind făcute din poligoane, pot fi studiate cu geometria plană pe care o cunoști deja." },
        { id: "rotazione", label: "Corpuri de rotație", x: 75, y: 28, color: "#f97316", html: "Corpuri cu suprafețe curbe: cilindru, con, sferă.", why: "Se obțin rotind o figură plană în jurul unei axe. Așa funcționează <b>strungul</b>, inventat încă din antichitate pentru a face vase și obiecte de lemn perfect rotunde." },
        { id: "fsv", label: "Fețe, muchii, vârfuri", x: 12, y: 52, color: "#a855f7", html: "Elementele unui poliedru.", why: "Fețele sunt poligoane; unde se ating două fețe apare o muchie; unde se întâlnesc cel puțin trei muchii apare un vârf. Într-un vârf nu pot fi mai puțin de 3 fețe, altfel corpul nu se închide." },
        { id: "eulero", label: "F + V − M = 2", x: 12, y: 80, color: "#ec4899", html: "Relația lui Euler.", why: "Descoperită de <b>Leonhard Euler</b> în 1750 (și Descartes ajunsese aproape cu un secol înainte). Este valabilă pentru toate poliedrele fără găuri și este punctul de plecare al unei părți a matematicii numite topologie." },
        { id: "prismipir", label: "Prisme și piramide", x: 38, y: 62, color: "#0ea5e9", html: "Prisma: 2 baze egale și fețe dreptunghiulare. Piramida: 1 bază și fețe triunghiulare.", why: "Prisma se obține „trăgând” un poligon în sus; piramida unind toate vârfurile bazei cu un singur punct. <b>Democrit</b> a descoperit că o piramidă are o treime din volumul prismei cu aceeași bază și aceeași înălțime; <b>Eudoxiu</b> a demonstrat-o." },
        { id: "platonici", label: "Corpuri platonice", x: 38, y: 90, color: "#14b8a6", html: "Cele 5 poliedre regulate: tetraedru, cub, octaedru, dodecaedru, icosaedru.", why: "Sunt doar 5 pentru că în jurul unui vârf suma unghiurilor fețelor trebuie să fie mai mică de 360°: cu triunghiuri încap 3, 4 sau 5 fețe, cu pătrate 3, cu pentagoane 3; cu hexagoane deja 3 × 120° = 360° și vârful devine plat. Euclid a demonstrat-o în ultima carte din <i>Elemente</i>." },
        { id: "sviluppo", label: "Desfășurare", x: 72, y: 58, color: "#84cc16", html: "Corpul deschis și întins pe un plan.", why: "Servește la construirea cutiilor și ambalajelor. Toate poliedrele și chiar cilindrii și conurile se pot desfășura; sfera nu, pentru că este curbă în toate direcțiile: de aceea nicio hartă plană a lumii nu este perfectă." },
        { id: "volume", label: "Volum", x: 72, y: 86, color: "#64748b", html: "Spațiul ocupat de un corp, măsurat în cubulețe (cm³, dm³, m³).", why: "Se măsoară numărând câte cubulețe cu muchia de 1 cm încap înăuntru. 1 dm³ de apă este exact 1 litru: sistemul metric, născut în Franța la sfârșitul secolului al XVIII-lea, leagă astfel volumele de capacități." }
      ],
      edges: [
        ["solido", "poliedri", "fețe plane"],
        ["solido", "rotazione", "suprafețe curbe"],
        ["poliedri", "fsv", "au"],
        ["fsv", "eulero", "legate de"],
        ["poliedri", "prismipir", "de ex."],
        ["prismipir", "platonici", "cele mai regulate"],
        ["poliedri", "sviluppo", "se deschid în"],
        ["rotazione", "sviluppo", "cilindru și con"],
        ["solido", "volume", "ocupă un"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: prisme, piramide și desfășurări",
      questions: [
        { type: "mc", q: "Care corp are o singură bază și fețe laterale triunghiulare?", options: ["Prisma", "Piramida", "Cilindrul"], answer: 1, explain: "Piramida are o bază și triunghiuri care se întâlnesc în vârf." },
        { type: "mc", q: "Desfășurarea unui cilindru este formată din…", options: ["6 pătrate", "un dreptunghi și 2 discuri", "4 triunghiuri"], answer: 1, explain: "Suprafața laterală desfășurată este un dreptunghi; cele două baze sunt discuri." },
        { type: "num", q: "Câte vârfuri are o piramidă cu baza pătrată?", answer: 5, explain: "4 vârfuri ale bazei + 1 sus = 5." }
      ]
    }
  ],
  glossary: [
    { t: "Corp geometric", d: "Figură geometrică cu trei dimensiuni: lungime, lățime, înălțime." },
    { t: "Poliedru", d: "Corp mărginit doar de fețe plane în formă de poligon." },
    { t: "Corp de rotație", d: "Corp obținut rotind o figură plană în jurul unei axe; are suprafețe curbe." },
    { t: "Față", d: "Fiecare dintre poligoanele care mărginesc un poliedru." },
    { t: "Muchie", d: "Segment în care se întâlnesc două fețe." },
    { t: "Vârf", d: "Punct în care se întâlnesc trei sau mai multe muchii." },
    { t: "Prismă", d: "Poliedru cu două baze egale și paralele și fețe laterale dreptunghiulare." },
    { t: "Piramidă", d: "Poliedru cu o bază și fețe laterale triunghiulare care se întâlnesc în vârf." },
    { t: "Desfășurare", d: "Figură plană care se obține deschizând un corp." },
    { t: "Volum", d: "Spațiul ocupat de un corp; se măsoară în cm³, dm³, m³." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Câte dimensiuni are un corp geometric?", options: ["2", "3", "4"], answer: 1, explain: "Lungime, lățime și înălțime." },
      { type: "mc", q: "Care dintre aceste obiecte este un corp de rotație?", options: ["O cărămidă", "Un tub de chipsuri", "Un zar"], answer: 1, explain: "Tubul este un cilindru: are o suprafață curbă." },
      { type: "num", q: "Câte fețe are un cub?", answer: 6, explain: "Ca un zar: 6 fețe pătrate." },
      { type: "num", q: "Câte vârfuri are un cub?", answer: 8, explain: "4 sus și 4 jos." },
      { type: "tf", q: "Sfera are o muchie.", answer: false, explain: "Sfera nu are nici muchii, nici vârfuri: este toată curbă." },
      { type: "text", q: "Cum se numește segmentul în care se întâlnesc două fețe ale unui poliedru?", answer: ["muchie", "muchia", "o muchie", "spigolo", "lo spigolo"], explain: "Este muchia." },
      { type: "mc", q: "Rotind un dreptunghi în jurul uneia dintre laturile sale se obține…", options: ["un con", "un cilindru", "o sferă"], answer: 1, explain: "Dreptunghiul care se rotește formează un cilindru." },
      { type: "mc", q: "Care figură NU poate fi desfășurarea unui cub?", options: ["6 pătrate în formă de cruce", "6 pătrate toate la rând", "6 pătrate în formă de T"], answer: 1, explain: "Cu 6 pătrate la rând, îndoindu-le, două fețe se suprapun și două rămân descoperite." },
      { type: "tf", q: "Cubul este o prismă particulară.", answer: true, explain: "Are două baze pătrate egale și paralele și fețe laterale care sunt pătrate (dreptunghiuri speciale)." },
      { type: "num", q: "O cutie conține 5 cubulețe în lungime, 2 în lățime și 3 în înălțime. Câte cubulețe în total?", answer: 30, explain: "5 × 2 = 10 cubulețe pe strat; 10 × 3 = 30." },
      { type: "order", q: "Ordonează de la corpul cu cele mai puține fețe la cel cu cele mai multe fețe.", items: ["Tetraedru (piramidă triunghiulară)", "Piramidă cu baza pătrată", "Cub", "Prismă cu baza hexagonală"], explain: "4, 5, 6 și 8 fețe (6 laterale + 2 baze)." }
    ],
    gen: [["volBox", 2]]
  }
});

TOPIC('ro', {
  id: "p2-geo-punti-riferimento",
  title: "Punctele de reper",
  intro: "Cum faci ca să nu te rătăcești când mergi la școală sau în parc? 🤔 Folosești <b>punctele de reper</b>: lucruri pe care le vezi în jurul tău și care te ajută să înțelegi <b>unde ești</b> și <b>încotro să mergi</b>. Astăzi învățăm să ne <b>orientăm</b> 🧭.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Ce este un punct de reper? 📍",
      html: `<p>Un <b>punct de reper</b> este ceva care se vede bine și <b>nu se mută</b>.</p>
<p>De exemplu, ca să ajungi la bunica: <i>„Trec prin fața <b>fântânii</b> ⛲, o iau pe lângă <b>farmacie</b> ➕ și casa este cea cu <b>poarta verde</b> 🟩.”</i></p>
<p>Un bun punct de reper este:</p>
<ul>
<li>👀 <b>ușor de văzut</b> (mare, colorat, înalt);</li>
<li>🧱 <b>fix</b>: rămâne mereu acolo;</li>
<li>⭐ <b>deosebit</b>: nu sunt multe la fel prin apropiere.</li>
</ul>
<p>A te <b>orienta</b> înseamnă a înțelege unde te afli și ce drum să alegi.</p>`
    },
    {
      type: "text",
      title: "Fixe sau mobile? 🌳🚗",
      html: `<p>Atenție: nu toate lucrurile sunt bune ca puncte de reper!</p>
<table>
<tr><th>✅ Fixe (sunt bune)</th><th>❌ Mobile (nu sunt bune)</th></tr>
<tr><td>⛪ o biserică</td><td>🚗 o mașină parcată</td></tr>
<tr><td>🌳 un copac mare</td><td>🐕 un câine care doarme</td></tr>
<tr><td>⛲ o fântână</td><td>🚌 autobuzul</td></tr>
<tr><td>🏔️ un munte</td><td>☁️ un nor</td></tr>
<tr><td>🏫 școala</td><td>🧑 un domn așezat pe bancă</td></tr>
</table>
<p>Dacă spun <i>„Virează unde este mașina roșie”</i> și mașina pleacă… mă rătăcesc! 😵</p>`
    },
    {
      type: "widget",
      title: "Joc: fix sau mobil?",
      widget: "classify",
      options: {
        groups: ["🧱 Fix: bun punct de reper", "🚶 Mobil: nu este bun"],
        items: [
          ["⛪ clopotniță", 0],
          ["🚲 bicicletă", 1],
          ["🌉 pod", 0],
          ["🐈 pisică", 1],
          ["🏰 castel", 0],
          ["🚚 camion", 1],
          ["🗼 turn", 0],
          ["🎈 balon", 1],
          ["🚦 semafor", 0]
        ]
      },
      caption: "Pune fiecare lucru în grupul potrivit."
    },
    {
      type: "text",
      title: "Cuvintele pentru orientare ↔️↕️",
      html: `<p>Ca să explicăm unde se află un lucru folosim <b>cuvintele poziției</b>. Ele depind de <b>cine privește</b>!</p>
<ul>
<li>⬆️⬇️ <b>deasupra</b> / <b>dedesubt</b>: tabloul este <i>deasupra</i> tablei.</li>
<li>➡️⬅️ <b>în față</b> / <b>în spate</b>: grădina este <i>în spatele</i> școlii.</li>
<li>👈👉 <b>la stânga</b> / <b>la dreapta</b>: ușa este <i>la dreapta mea</i>.</li>
<li>🤏📏 <b>aproape</b> / <b>departe</b>: cafeneaua este <i>aproape</i> de casă.</li>
<li>🎯 <b>la mijloc</b> / <b>între</b>: banca este <i>între</i> doi copaci.</li>
</ul>
<p>💡 <b>Truc pentru dreapta:</b> mâna dreaptă este, de obicei, aceea cu care scrii (dacă ești stângaci, este cealaltă!). Mulți copii pun o brățară pe încheietura dreaptă.</p>`
    },
    {
      type: "svg",
      title: "Unde se află? Privește desenul",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bae6fd"/>
<rect y="230" width="600" height="90" fill="#86efac"/>
<rect x="230" y="110" width="150" height="120" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<polygon points="220,110 305,50 390,110" fill="#b91c1c"/>
<rect x="290" y="170" width="35" height="60" fill="#7c2d12"/>
<text x="305" y="150" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">ȘCOALA</text>
<rect x="95" y="160" width="16" height="70" fill="#78350f"/>
<circle cx="103" cy="140" r="40" fill="#16a34a"/>
<text x="103" y="265" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">copac</text>
<circle cx="490" cy="215" r="28" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="484" y="170" width="12" height="30" fill="#64748b"/>
<text x="490" y="265" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">fântână</text>
<circle cx="520" cy="50" r="28" fill="#facc15"/>
<text x="520" y="100" font-size="16" text-anchor="middle" fill="#92400e" font-weight="bold">soare</text>
<rect x="400" y="280" width="60" height="22" rx="5" fill="#a16207"/>
<text x="430" y="297" font-size="13" text-anchor="middle" fill="#ffffff">bancă</text>
<text x="160" y="300" font-size="17" text-anchor="middle" fill="#0f172a">Copacul este la STÂNGA școlii</text>
</svg>`,
      caption: "Privind desenul: copacul este la stânga școlii, fântâna la dreapta, soarele deasupra fântânii."
    },
    {
      type: "quiz",
      title: "Mini-test: privește desenul",
      questions: [
        { type: "mc", q: "În desen, ce se află la dreapta școlii?", options: ["Copacul", "Fântâna", "Nimic"], answer: 1, explain: "Fântâna este la dreapta școlii." },
        { type: "tf", q: "O mașină parcată este un bun punct de reper.", answer: false, explain: "Mașinile se mută: nu este un punct fix." },
        { type: "mc", q: "Care cuvânt este opusul lui „aproape”?", options: ["dedesubt", "departe", "în spate"], answer: 1, explain: "Aproape ↔ departe." }
      ]
    },
    {
      type: "text",
      title: "Soarele: un punct de reper pe cer ☀️",
      html: `<p>Și cerul ne ajută să ne orientăm!</p>
<ul>
<li>🌅 Dimineața Soarele <b>răsare</b> (apare) dintr-o parte numită <b>EST</b>.</li>
<li>🌞 La amiază este sus, spre <b>SUD</b>.</li>
<li>🌇 Seara <b>apune</b> în partea opusă, la <b>VEST</b>.</li>
<li>🧊 În spatele nostru, când privim Soarele de la amiază, se află <b>NORDUL</b>.</li>
</ul>
<p>Nord, Sud, Est și Vest sunt <b>punctele cardinale</b>. Sunt la fel pentru toți, în toată lumea: de aceea sunt mai precise decât „dreapta” și „stânga”.</p>
<p>🧭 <b>Busola</b> are un ac magnetizat care arată mereu spre <b>Nord</b>.</p>`
    },
    {
      type: "svg",
      title: "Roza vânturilor",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fefce8"/>
<circle cx="300" cy="160" r="120" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<polygon points="300,45 318,160 300,175 282,160" fill="#dc2626"/>
<polygon points="300,275 318,160 300,145 282,160" fill="#1e3a8a"/>
<polygon points="185,160 300,142 315,160 300,178" fill="#64748b"/>
<polygon points="415,160 300,142 285,160 300,178" fill="#f59e0b"/>
<circle cx="300" cy="160" r="8" fill="#0f172a"/>
<text x="300" y="30" font-size="22" text-anchor="middle" fill="#dc2626" font-weight="bold">N - Nord</text>
<text x="300" y="305" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">S - Sud</text>
<text x="490" y="168" font-size="22" text-anchor="middle" fill="#b45309" font-weight="bold">E - Est</text>
<text x="105" y="168" font-size="22" text-anchor="middle" fill="#475569" font-weight="bold">V - Vest</text>
<text x="530" y="210" font-size="15" text-anchor="middle" fill="#b45309">Soarele răsare</text>
<text x="80" y="210" font-size="15" text-anchor="middle" fill="#475569">Soarele apune</text>
</svg>`,
      caption: "Roza vânturilor arată cele 4 puncte cardinale. Acul roșu al busolei arată spre Nord."
    },
    {
      type: "example",
      title: "Exemplu practic: drumul spre școală 🎒",
      html: `<p>Sara își descrie drumul folosind punctele de reper:</p>
<ol>
<li>🏠 Ies din casă și merg spre <b>brutărie</b> 🥖.</li>
<li>➡️ La brutărie cotesc <b>la dreapta</b>.</li>
<li>⛲ Merg drept până la <b>fântâna</b> din piață.</li>
<li>⬅️ La fântână cotesc <b>la stânga</b>.</li>
<li>🏫 Școala este <b>în fața</b> mea, lângă <b>biserică</b> ⛪.</li>
</ol>
<p>Încearcă și tu: scrie drumul de la casa ta la școală cu cel puțin <b>3 puncte de reper</b>!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: rătăcit în parcul de joacă 🎠",
      html: `<p>Luca s-a depărtat de mama și nu o mai vede. Ce face?</p>
<ul>
<li>😮‍💨 Se oprește și respiră.</li>
<li>👀 Caută un <b>punct de reper</b> pe care îl cunoaște: <b>toboganul galben</b> cel mare, lângă locul unde stătuseră.</li>
<li>🚶 Se întoarce spre tobogan și așteaptă acolo.</li>
</ul>
<p>💡 Un sfat: când ajungi într-un loc nou, alege împreună cu părinții un <b>loc de întâlnire</b> ușor de văzut („ne vedem sub ceasul cel mare”).</p>`
    },
    {
      type: "3d",
      title: "Punctele de reper ale naturii 🏞️",
      scene: "terrain",
      caption: "Rotește peisajul și atinge părțile lui: sunt puncte de reper naturale, mari și fixe.",
      options: {
        features: {
          mountain: { label: "Munte", html: "Se vede de foarte departe și nu se mută niciodată: un punct de reper perfect. Cine locuiește la Torino, de exemplu, vede Alpii și Monviso." },
          peak: { label: "Vârf", html: "Vârful muntelui. Excursioniștii îl folosesc ca să înțeleagă în ce direcție să meargă." },
          river: { label: "Râu", html: "Urmând un râu ajungi la mare sau la un lac. Multe orașe s-au născut de-a lungul râurilor: „locuiesc de partea asta sau de partea cealaltă a râului”." },
          lake: { label: "Lac", html: "O mare întindere de apă dulce stătută: ușor de recunoscut chiar și de sus." },
          hill: { label: "Deal", html: "Mai scund decât muntele. Adesea, pe dealuri se află un castel sau o biserică ce se văd de departe." },
          valley: { label: "Vale", html: "Partea joasă dintre doi munți. Adesea are un râu și trece drumul principal." },
          sea: { label: "Mare", html: "Pe coastă, marea este un reper excelent: „plaja este într-acolo”." }
        }
      }
    },
    {
      type: "curiosity",
      title: "Știai că…? 🗿",
      html: `<p>În Marele Nord al Canadei, unde sunt doar zăpadă și gheață și totul pare la fel, poporul <b>Inuit</b> construiește <b>inukshuk</b>: grămezi de pietre în formă de om. Servesc drept <b>puncte de reper</b> ca să arate drumul, un loc bun de pescuit sau un pericol.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? 🐝",
      html: `<p>Și animalele folosesc punctele de reper! <b>Albinele</b> își amintesc copacii și casele ca să se întoarcă la stup și folosesc <b>Soarele</b> drept busolă. <b>Porumbeii călători</b> știu să se întoarcă acasă de la sute de kilometri, ajutându-se de Soare, de câmpul magnetic al Pământului și de râurile și drumurile pe care le văd de sus.</p>`
    },
    {
      type: "widget",
      title: "Găsește punctele de reper pe plan",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<rect x="0" y="130" width="600" height="40" fill="#9ca3af"/>
<rect x="280" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="60" y="40" width="120" height="70" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<rect x="400" y="30" width="80" height="80" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<circle cx="440" cy="70" r="12" fill="#92400e"/>
<circle cx="300" cy="150" r="22" fill="#60a5fa" stroke="#1e40af" stroke-width="3"/>
<circle cx="120" cy="230" r="35" fill="#16a34a"/>
<rect x="400" y="200" width="120" height="70" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 120, y: 75, label: "Școala" },
          { x: 440, y: 70, label: "Biserica cu clopotniță" },
          { x: 300, y: 150, label: "Fântâna" },
          { x: 120, y: 230, label: "Copac mare" },
          { x: 460, y: 235, label: "Biblioteca" }
        ]
      },
      caption: "Apasă pe fiecare punct și alege numele. Fântâna se află chiar la intersecția celor două străzi!"
    },
    {
      type: "alternatives",
      title: "Alte moduri de a ne orienta",
      intro: "În lume, oamenii se orientează în multe feluri diferite. Încearcă să le descoperi!",
      tabs: [
        {
          label: "🌊 Navigatorii polinezieni",
          html: `<p>În Oceanul Pacific, acum mii de ani, <b>polinezienii</b> călătoreau de la o insulă la alta cu pirogile, pe mii de kilometri, <b>fără busolă și fără hărți</b>!</p>
<ul>
<li>⭐ Noaptea se uitau la <b>stele</b>: fiecare răsare într-un punct precis al orizontului.</li>
<li>🌊 Simțeau forma <b>valurilor</b> sub pirogă.</li>
<li>🐦 Urmăreau <b>păsările</b> marine, care seara se întorc spre uscat.</li>
<li>☁️ Căutau <b>norii</b> nemișcați deasupra insulelor.</li>
</ul>
<p>Pentru ei, stelele, valurile și păsările erau puncte de reper!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -17.5, lon: -149.6, label: "Tahiti", color: "#f97316" },
              { lat: 19.6, lon: -155.5, label: "Hawaii", color: "#ef4444" },
              { lat: -41, lon: 174, label: "Noua Zeelandă", color: "#22c55e" },
              { lat: -27.1, lon: -109.4, label: "Insula Paștelui", color: "#a855f7" }
            ],
            routes: [{ points: [0, 1], color: "#0ea5e9" }, { points: [0, 2], color: "#0ea5e9" }, { points: [0, 3], color: "#0ea5e9" }]
          }
        },
        {
          label: "🎶 „Drumurile cântecelor” australiene",
          html: `<p>Popoarele <b>aborigene</b> din Australia au <b>songlines</b>, „drumurile cântecelor”: cântece lungi care descriu, unul după altul, punctele de reper ale călătoriei (o stâncă, o baltă, un deal).</p>
<p>Cântând cântecul, îți amintești drumul! 🎵 E cam ca și cum ai inventa o poezioară: <i>„De la brutar cotesc la dreapta, fântâna face sărbătoare, apoi la stânga e biserica…”</i></p>`
        },
        {
          label: "🤖 Ca navigatorul mașinii",
          html: `<p><b>Navigatorul</b> (GPS) din telefoane și din mașini vorbește tocmai cu puncte de reper: <i>„Peste 200 de metri, la sensul giratoriu, ia a doua ieșire”</i>.</p>
<p>Știe unde ești datorită <b>sateliților</b> care se rotesc în jurul Pământului 🛰️: telefonul primește semnalele lor și își calculează poziția. Dar și navigatorul are nevoie de o <b>hartă</b> și de cuvinte ca dreapta, stânga, drept înainte.</p>`
        },
        {
          label: "🧍 Jocul corpului",
          html: `<p>Stai în picioare în mijlocul camerei. 🧍</p>
<ol>
<li>Arată cu mâna dreaptă spre <b>ușă</b>.</li>
<li>Întoarce-te: acum ușa este <b>în spatele</b> tău!</li>
<li>Întoarce-te încă un sfert de tur: acum este <b>la stânga</b>?</li>
</ol>
<p>Ai descoperit că <b>dreapta, stânga, în față și în spate se schimbă</b> dacă te întorci tu, dar ușa rămâne mereu acolo. De aceea punctele de reper fixe sunt atât de utile!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f1f5f9"/>
<circle cx="300" cy="80" r="26" fill="#fcd9b6" stroke="#92400e" stroke-width="2"/>
<rect x="278" y="108" width="44" height="70" rx="8" fill="#3b82f6"/>
<line x1="230" y1="130" x2="278" y2="125" stroke="#334155" stroke-width="8"/>
<line x1="322" y1="125" x2="370" y2="130" stroke="#334155" stroke-width="8"/>
<text x="160" y="140" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">STÂNGA</text>
<text x="450" y="140" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">DREAPTA</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">ÎN FAȚĂ (spre tine)</text>
<text x="300" y="208" font-size="16" text-anchor="middle" fill="#475569">Copilul se uită la tine: dreapta lui este stânga ta!</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Hartă: cum ne orientăm",
      nodes: [
        { id: "orientarsi", label: "A ne orienta", x: 50, y: 6, color: "#6366f1", html: "<p>A înțelege unde ne aflăm și încotro să mergem.</p>", why: "<p>Cuvântul vine de la <b>Orient</b>, adică Est, unde răsare Soarele. Odinioară, hărțile și bisericile erau desenate și construite „privind spre Orient”: a te orienta însemna chiar a găsi Estul.</p>" },
        { id: "riferimento", label: "Puncte de reper", x: 25, y: 30, color: "#f97316", html: "<p>Lucruri fixe și bine vizibile: o biserică, un copac, o fântână.</p>", why: "<p>Creierul nostru își amintește mai bine <b>imaginile</b> decât cuvintele. În creier există o parte, <b>hipocampul</b>, care creează un fel de „hartă” a locurilor: oamenii de știință care au descoperit asta au câștigat premiul Nobel în 2014.</p>" },
        { id: "posizione", label: "Cuvintele poziției", x: 75, y: 30, color: "#0ea5e9", html: "<p>Deasupra, dedesubt, în față, în spate, dreapta, stânga, aproape, departe.</p>", why: "<p>Aceste cuvinte depind de <b>cine privește</b>: dreapta ta este stânga celui din fața ta. De aceea sunt comode, dar pot încurca.</p>" },
        { id: "fissi", label: "Fixe și mobile", x: 10, y: 55, color: "#16a34a", html: "<p>Doar lucrurile care nu se mută sunt repere bune.</p>", why: "<p>Un reper trebuie să fie mereu în același loc, altfel descrierea drumului nu mai funcționează data viitoare.</p>" },
        { id: "sole", label: "Soarele", x: 45, y: 55, color: "#eab308", html: "<p>Răsare la est și apune la vest.</p>", why: "<p>Soarele pare că se mișcă pe cer, dar de fapt <b>Pământul se rotește</b> în jurul lui însuși de la vest spre est, o dată pe zi. De aceea vedem Soarele răsărind mereu dinspre est.</p>" },
        { id: "cardinali", label: "Puncte cardinale", x: 75, y: 72, color: "#ef4444", html: "<p>Nord, Sud, Est, Vest.</p>", why: "<p>Sunt la fel pentru toți, în toată lumea, pentru că depind de Pământ și nu de noi. Se numesc „cardinale” din latinescul <i>cardo</i>, balama: sunt „balamalele” pe care se învârte orientarea.</p>" },
        { id: "bussola", label: "Busola", x: 45, y: 92, color: "#a855f7", html: "<p>Instrument cu un ac care arată Nordul.</p>", why: "<p>Pământul este ca un uriaș <b>magnet</b>: acul magnetic se întoarce spre Nord. Busola a fost inventată în <b>China</b> și a ajuns în Europa în Evul Mediu; marinarii din <b>Amalfi</b> o foloseau mult.</p>" },
        { id: "mappe", label: "Hărți", x: 15, y: 85, color: "#14b8a6", html: "<p>Desene ale locurilor văzute de sus.</p>", why: "<p>Pe o hartă, punctele de reper sunt desenate cu <b>simboluri</b>: așa oricine poate găsi drumul chiar într-un loc nemaivăzut.</p>" }
      ],
      edges: [
        ["orientarsi", "riferimento", "cu"],
        ["orientarsi", "posizione", "cu"],
        ["riferimento", "fissi", "trebuie să fie"],
        ["orientarsi", "sole", "și cu"],
        ["sole", "cardinali", "arată"],
        ["cardinali", "bussola", "găsite cu"],
        ["riferimento", "mappe", "desenate pe"],
        ["posizione", "cardinali", "mai precise:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: Soarele și busola",
      questions: [
        { type: "mc", q: "Dinspre ce parte răsare Soarele?", options: ["Nord", "Est", "Vest"], answer: 1, explain: "Soarele răsare la Est." },
        { type: "mc", q: "Spre ce arată acul busolei?", options: ["Spre Nord", "Spre Soare", "Spre casă"], answer: 0, explain: "Acul magnetizat arată mereu Nordul." },
        { type: "num", q: "Câte sunt punctele cardinale?", answer: 4, tol: 0, explain: "Nord, Sud, Est și Vest." }
      ]
    },
    {
      type: "remember",
      title: "De ținut minte 📌",
      html: `<ul>
<li>Un <b>punct de reper</b> este un lucru <b>fix</b> și <b>ușor de văzut</b>.</li>
<li>Cuvintele poziției (dreapta, stânga, în față, în spate…) se <b>schimbă</b> dacă ne întoarcem.</li>
<li>Soarele răsare la <b>Est</b> și apune la <b>Vest</b>.</li>
<li><b>Punctele cardinale</b> sunt Nord, Sud, Est, Vest; <b>busola</b> arată Nordul.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Punct de reper", d: "Un lucru fix și bine vizibil care ne ajută să ne orientăm." },
    { t: "A se orienta", d: "A înțelege unde te afli și ce direcție să alegi." },
    { t: "Fix", d: "Care nu se mută niciodată." },
    { t: "Mobil", d: "Care poate fi mutat sau se mișcă singur." },
    { t: "Puncte cardinale", d: "Nord, Sud, Est, Vest: direcțiile la fel pentru toți." },
    { t: "Busolă", d: "Instrument cu un ac magnetic care arată Nordul." },
    { t: "Roza vânturilor", d: "Desen în formă de stea care arată punctele cardinale." },
    { t: "Traseu", d: "Drumul pe care îl faci ca să ajungi dintr-un loc în altul." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este cel mai bun punct de reper?", options: ["🐕 Un câine", "⛪ O clopotniță", "☁️ Un nor"], answer: 1, explain: "Clopotnița este fixă și se vede de departe." },
      { type: "tf", q: "Un punct de reper trebuie să fie fix.", answer: true, explain: "Dacă se mută, nu ne mai ajută să găsim drumul." },
      { type: "mc", q: "Opusul lui „deasupra” este…", options: ["dedesubt", "în spate", "departe"], answer: 0, explain: "Deasupra ↔ dedesubt." },
      { type: "mc", q: "Soarele apune la…", options: ["Est", "Vest", "Nord"], answer: 1, explain: "Răsare la Est și apune la Vest." },
      { type: "text", q: "Cum se numește instrumentul care arată Nordul?", answer: ["busola", "busolă", "o busolă"], explain: "Busola, cu acul ei magnetizat." },
      { type: "order", q: "Pune în ordine traseul Sarei: casă → … → școală.", items: ["Ies din casă", "La brutărie cotesc la dreapta", "Ajung la fântână", "Cotesc la stânga", "Intru în școală"], explain: "Este ordinea drumului descris în exemplu." },
      { type: "tf", q: "Dacă mă întorc, dreapta și stânga mea se schimbă față de lucrurile din jur.", answer: true, explain: "Dreapta și stânga depind de cum sunt întors eu." },
      { type: "mc", q: "O persoană este în fața ta și ridică mâna dreaptă. În ce parte o vezi?", options: ["La dreapta mea", "La stânga mea", "Deasupra mea"], answer: 1, explain: "Cel din fața ta este întors invers: dreapta lui este dinspre stânga ta." },
      { type: "num", q: "Câte puncte cardinale există?", answer: 4, tol: 0, explain: "Nord, Sud, Est, Vest." },
      { type: "mc", q: "Ce construiesc inuiții ca să arate drumul?", options: ["Inukshuk, grămezi de pietre", "Semafoare", "Turnuri de gheață"], answer: 0, explain: "Inukshuk sunt puncte de reper din piatră." },
      { type: "text", q: "Punctul cardinal opus Nordului este…", answer: ["sud", "sudul"], explain: "Nord ↔ Sud, Est ↔ Vest." }
    ]
  }
});

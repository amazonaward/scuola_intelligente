TOPIC('ro', {
  id: "p5-ita-lessico",
  title: "Lexicul",
  intro: "<b>Lexicul</b> (<i>lessico</i>) este totalitatea cuvintelor unei limbi. Cuvintele au prietene (<b>sinonime</b>), dușmani (<b>antonime</b>), familii și se pot construi ca niște piese de joc cu <b>prefixe</b> și <b>sufixe</b>. Cu cât cunoști mai multe cuvinte, cu atât poți spune mai bine ceea ce gândești!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Ce este lexicul",
      html: `<p><b>Lexicul</b> (sau <b>vocabularul</b>) este totalitatea cuvintelor unei limbi. Fiecare dintre noi are apoi <b>lexicul său personal</b>: cuvintele pe care le cunoaște și le folosește.</p>
<p>Lingvistul <b>Tullio De Mauro</b> a calculat că aproximativ <b>7.000 de cuvinte</b> formează <b>vocabularul de bază</b> al limbii italiene: sunt cele necesare pentru a înțelege aproape tot ce citim și ascultăm în fiecare zi. Dicționarele mari, însă, conțin mai mult de <b>250.000</b>!</p>
<p>Pentru a-ți îmbogăți lexicul: citește mult, folosește dicționarul, joacă-te cu cuvintele, întreabă-te de unde vin.</p>`
    },
    {
      type: "text",
      title: "Sinonime, antonime, omonime",
      html: `<ul>
<li><b>Sinonime</b> (<i>sinonimi</i>): cuvinte cu sens <b>la fel sau asemănător</b>. <i>Casa – abitazione</i> (casă – locuință), <i>bello – carino – stupendo</i> (frumos – drăguț – minunat), <i>iniziare – cominciare</i> (a începe). Atenție: rareori sunt perfect la fel; fiecare are „nuanța” ei (<i>carino</i> înseamnă mai puțin decât <i>stupendo</i>).</li>
<li><b>Antonime</b> (<i>contrari</i>): cuvinte cu sens <b>opus</b>. <i>Alto – basso</i> (înalt – scund), <i>aprire – chiudere</i> (a deschide – a închide), <i>felice – infelice</i> (fericit – nefericit). Unele se formează cu un prefix: <i>utile → inutile</i>, <i>onesto → disonesto</i>.</li>
<li><b>Omonime</b> (<i>omonimi</i>): cuvinte care se scriu (și/sau se pronunță) <b>la fel</b>, dar au <b>sensuri diferite</b>. <i>Riso</i> (orez / râsul), <i>miglio</i> (milă, unitate de măsură / mei, cereală), <i>pesca</i> (piersică / pescuitul: aici se schimbă pronunția lui <i>e</i>!).</li>
<li><b>Cuvinte polisemantice</b>: un cuvânt cu <b>mai multe sensuri legate între ele</b>: <i>la penna</i> a păsării și <i>penna</i> pentru scris (primele pene de scris erau chiar pene de gâscă!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Joc: potrivește sinonimele",
      widget: "match",
      options: { pairs: [["veloce", "rapido"], ["paura", "timore"], ["regalo", "dono"], ["guardare", "osservare"], ["allegro", "contento"], ["finire", "terminare"]] },
      caption: "Leagă fiecare cuvânt de sinonimul lui."
    },
    {
      type: "text",
      title: "Cum se nasc cuvintele: rădăcină, prefixe, sufixe",
      html: `<p>Multe cuvinte se construiesc pornind de la un <b>cuvânt primitiv</b> (care nu derivă din alte cuvinte italiene), precum <i>mare</i>, <i>fiore</i>, <i>giocare</i>.</p>
<ul>
<li><b>Rădăcina</b> (<i>radice</i>) este partea care poartă sensul: <b>fior</b>-e, <b>fior</b>-aio, <b>fior</b>-ire.</li>
<li><b>Prefixul</b> (<i>prefisso</i>) se pune <b>înaintea</b> rădăcinii și schimbă sensul: <i><b>ri</b>fare</i> (a face din nou), <i><b>s</b>contento</i> (nemulțumit), <i><b>pre</b>vedere</i> (a prevedea), <i><b>super</b>mercato</i>, <i><b>sotto</b>passaggio</i> (pasaj subteran).</li>
<li><b>Sufixul</b> (<i>suffisso</i>) se pune <b>după</b> rădăcină și creează un cuvânt nou: <i>fior<b>aio</b></i> (meserie), <i>gioca<b>tore</b></i> (cel care face), <i>gentil<b>ezza</b></i> (calitate), <i>lava<b>trice</b></i> (unealtă), <i>mangi<b>abile</b></i> (care se poate…).</li>
</ul>
<p>Cuvintele obținute astfel se numesc <b>derivate</b>. Toate cuvintele cu aceeași rădăcină formează o <b>familie de cuvinte</b>.</p>`
    },
    {
      type: "svg",
      title: "Arborele familiei lui „mare”",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#ecfeff"/>
<rect x="300" y="200" width="40" height="110" fill="#92400e"/>
<ellipse cx="320" cy="140" rx="290" ry="115" fill="#86efac"/>
<rect x="250" y="250" width="140" height="44" rx="10" fill="#0369a1"/>
<text x="320" y="279" font-size="22" text-anchor="middle" fill="#ffffff" font-weight="bold">MARE</text>
<g font-size="17" text-anchor="middle" font-weight="bold">
<rect x="70" y="60" width="120" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="130" y="84" fill="#166534">mar<tspan fill="#dc2626">ino</tspan></text>
<rect x="210" y="40" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="275" y="64" fill="#166534">mar<tspan fill="#dc2626">inaio</tspan></text>
<rect x="360" y="40" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="425" y="64" fill="#166534">mar<tspan fill="#dc2626">ittimo</tspan></text>
<rect x="470" y="100" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="535" y="124" fill="#166534">mar<tspan fill="#dc2626">ea</tspan></text>
<rect x="60" y="130" width="160" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="140" y="154" fill="#166534"><tspan fill="#2563eb">sotto</tspan>mar<tspan fill="#dc2626">ino</tspan></text>
<rect x="240" y="110" width="160" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="320" y="134" fill="#166534"><tspan fill="#2563eb">oltre</tspan>mare</text>
<rect x="420" y="170" width="170" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="505" y="194" fill="#166534">mare<tspan fill="#dc2626">ggiata</tspan></text>
<rect x="70" y="190" width="150" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="145" y="214" fill="#166534">mar<tspan fill="#dc2626">oso</tspan></text>
</g>
<text x="20" y="310" font-size="14" fill="#1d4ed8">albastru = prefix</text>
<text x="520" y="310" font-size="14" fill="#b91c1c">roșu = sufix</text>
</svg>`,
      caption: "Toate aceste cuvinte au rădăcina «mar-»: formează familia de cuvinte a lui «mare» (marea)."
    },
    {
      type: "text",
      title: "Cuvinte modificate și compuse",
      html: `<p><b>Substantivele modificate</b> (<i>nomi alterati</i>) schimbă puțin sensul substantivului cu un sufix, fără a crea un lucru nou:</p>
<ul>
<li><b>diminutive</b> (mai mic): <i>gatt<b>ino</b>, cas<b>etta</b>, libr<b>icino</b></i>;</li>
<li><b>augmentative</b> (mai mare): <i>librone, nas<b>one</b></i>;</li>
<li><b>drăgăstoase</b> (cu afecțiune): <i>orsacch<b>iotto</b>, cag<b>nolino</b></i>;</li>
<li><b>peiorative</b> (cu dispreț): <i>temp<b>accio</b>, libr<b>accio</b></i>.</li>
</ul>
<p>⚠️ <b>Falși modificați</b>: <i>tacchino</i> (curcan) nu este un toc mic (<i>tacco</i>), <i>mattone</i> (cărămidă) nu este un nebun mare (<i>matto</i>), <i>bottone</i> (nasture) nu este un butoi mare (<i>botte</i>), <i>burrone</i> (prăpastie) nu este mult unt (<i>burro</i>)! 😄</p>
<p><b>Substantivele compuse</b> sunt formate din <b>două cuvinte unite</b>: <i>capo + stazione = capostazione</i> (șef de gară), <i>apri + scatole = apriscatole</i> (deschizător de conserve), <i>arco + baleno = arcobaleno</i> (curcubeu), <i>pesce + spada = pescespada</i> (pește-spadă).</p>`
    },
    {
      type: "quiz",
      title: "Mini-test: cuvintele și familiile lor",
      questions: [
        { type: "mc", q: "Care este antonimul lui «generoso» (generos)?", options: ["gentile (amabil)", "avaro (zgârcit)", "buono (bun)"], answer: 1, explain: "Generoso = care dă cu plăcere; avaro = care nu vrea să dea." },
        { type: "mc", q: "În cuvântul «rileggere», «ri-» este…", options: ["un sufix", "un prefix", "rădăcina"], answer: 1, explain: "Stă înaintea rădăcinii și înseamnă «din nou»: prefix." },
        { type: "tf", q: "«Tacchino» este diminutivul lui «tacco».", answer: false, explain: "Este un fals modificat: tacchino este un animal (curcanul), nu un toc mic!" },
        { type: "mc", q: "Care cuvânt NU face parte din familia lui «fiore» (floare)?", options: ["fioraio", "fiorire", "fiume"], answer: 2, explain: "«Fiume» (râu) nu are rădăcina fior-: este altă familie." }
      ]
    },
    {
      type: "example",
      title: "Exemplu: îmbogățim o propoziție cu sinonime",
      html: `<p>Propoziție „săracă”: «Il film era <b>bello</b>, la musica era <b>bella</b> e anche i costumi erano <b>belli</b>.»</p>
<p>Propoziție „bogată”: «Il film era <b>appassionante</b>, la musica era <b>coinvolgente</b> e i costumi erano <b>eleganti</b>.» (Filmul era captivant, muzica antrenantă, iar costumele elegante.)</p>
<p>Vezi? Cu sinonimele potrivite se evită <b>repetițiile</b> și se spune <b>mai mult</b>: fiecare cuvânt adaugă o informație precisă. <b>Dicționarul de sinonime și antonime</b> este un prieten bun pentru cine scrie.</p>`
    },
    {
      type: "example",
      title: "Exemplu: ghicește sensul din piese",
      html: `<p>Găsești un cuvânt nou: <b>«irraggiungibile»</b>. Nu știi ce înseamnă? Demontează-l!</p>
<ul>
<li><b>ir-</b> = prefix negativ („nu”), ca în <i>ir</i>regolare;</li>
<li><b>raggiung-</b> = rădăcina lui <i>raggiungere</i> (a ajunge la);</li>
<li><b>-ibile</b> = sufix „care se poate”, ca în <i>leggibile</i>.</li>
</ul>
<p>Rezultat: «<b>care nu poate fi atins</b>». Așa înțelegi foarte multe cuvinte noi fără să deschizi dicționarul!</p>`
    },
    {
      type: "widget",
      title: "Flashcard: prefixe și sufixe",
      widget: "flashcards",
      options: {
        cards: [
          { front: "ri- (rifare)", back: "din nou" },
          { front: "in- / im- / s- / dis- (infelice, impossibile, scontento, disonesto)", back: "nu, contrariu" },
          { front: "pre- (prevedere)", back: "înainte" },
          { front: "sotto- / sub- (sottomarino, subacqueo)", back: "sub" },
          { front: "super- / iper- (supermercato, ipermercato)", back: "deasupra, foarte mare" },
          { front: "-aio / -ista (fioraio, dentista)", back: "meserie" },
          { front: "-tore / -trice (giocatore, lavatrice)", back: "cine sau ce face acțiunea" },
          { front: "-ezza / -ità (bellezza, bontà)", back: "calitate abstractă" },
          { front: "-abile / -ibile (lavabile, leggibile)", back: "care se poate…" }
        ]
      },
      caption: "Întoarce cărțile: pe față prefixul sau sufixul, pe verso sensul."
    },
    {
      type: "curiosity",
      title: "Știai că…? Primul dicționar italian",
      html: `<p>Primul mare dicționar al limbii italiene a fost publicat la Veneția în <b>1612</b> de <b>Accademia della Crusca</b> din Florența. Numele este curios: <i>crusca</i> înseamnă tărâțe, resturile de la făină. Academicienii voiau să „cearnă” limba, separând cuvintele bune (făina) de cele de lepădat (tărâțele)! Simbolul Academiei este chiar un <b>frullone</b>, sita pentru făină.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Cuvinte care călătoresc",
      html: `<p>Italiana a luat cuvinte din multe limbi (<b>împrumuturi</b>): din arabă <i>zucchero, arancia, magazzino, algebra</i> (zahăr, portocală, depozit, algebră); din franceză <i>giardino, bistecca</i> (din engleză <i>beef-steak</i>!); din engleză <i>computer, sport, weekend</i>. Iar italiana a dăruit multe lumii: <i>pizza, spaghetti, piano, opera, ciao, bravo</i> se folosesc în foarte multe limbi, inclusiv în română!</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Sinonime</b> = sens asemănător; <b>antonime</b> = sens opus; <b>omonime</b> = aceeași formă, sensuri diferite.</li>
<li>Cuvânt <b>primitiv</b> → cu prefixe/sufixe devine <b>derivat</b>; aceeași rădăcină = aceeași <b>familie</b>.</li>
<li><b>Prefixul</b> înaintea rădăcinii, <b>sufixul</b> după.</li>
<li><b>Modificate</b>: diminutive, augmentative, drăgăstoase, peiorative (atenție la falșii modificați!). <b>Compuse</b>: două cuvinte unite.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege cum se construiesc cuvintele",
      intro: "Cuvintele pot fi privite ca niște piese de construit, ca rădăcini din latină și greacă, ca în engleză… sau pot fi ordonate pe o scară de intensitate.",
      tabs: [
        {
          label: "🧱 Piesele",
          html: `<p>Gândește-te la un cuvânt ca la o construcție din <b>piese</b>: în centru este <b>piesa-rădăcină</b> (sensul), în față poți agăța un <b>prefix</b>, în spate un <b>sufix</b>.</p>
<p>Cu rădăcina <b>-lav-</b>: lav<b>are</b>, lav<b>atrice</b>, lav<b>abile</b>, <b>ri</b>lavare, lav<b>andino</b>, lav<b>aggio</b>… O rădăcină, multe construcții!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<rect x="40" y="70" width="140" height="70" rx="6" fill="#3b82f6"/><circle cx="75" cy="64" r="10" fill="#3b82f6"/><circle cx="145" cy="64" r="10" fill="#3b82f6"/>
<text x="110" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">im-</text>
<rect x="190" y="70" width="200" height="70" rx="6" fill="#16a34a"/><circle cx="240" cy="64" r="10" fill="#16a34a"/><circle cx="340" cy="64" r="10" fill="#16a34a"/>
<text x="290" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">mangi</text>
<rect x="400" y="70" width="160" height="70" rx="6" fill="#dc2626"/><circle cx="440" cy="64" r="10" fill="#dc2626"/><circle cx="520" cy="64" r="10" fill="#dc2626"/>
<text x="480" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">-abile</text>
<text x="110" y="170" font-size="16" text-anchor="middle">prefix: nu</text>
<text x="290" y="170" font-size="16" text-anchor="middle">rădăcină: mangiare</text>
<text x="480" y="170" font-size="16" text-anchor="middle">sufix: care se poate</text>
<text x="300" y="205" font-size="20" text-anchor="middle" font-weight="bold" fill="#1f2937">immangiabile = care nu se poate mânca</text>
</svg>`
        },
        {
          label: "🏛️ Rădăcini latine și grecești",
          html: `<p>Foarte multe cuvinte italiene au <b>rădăcini latine sau grecești</b>. Dacă înveți rădăcinile, înțelegi familii întregi de cuvinte! (Multe seamănă și cu româna.)</p>
<ul>
<li><b>tele-</b> (greacă: departe): telefono, televisione, telescopio.</li>
<li><b>-fono</b> (greacă: sunet, voce): telefono, microfono, megafono.</li>
<li><b>-scopio</b> (greacă: a observa): microscopio, telescopio.</li>
<li><b>bio-</b> (greacă: viață): biologia, biografia.</li>
<li><b>aqua</b> (latină: apă): acquario, acquedotto, acquatico.</li>
</ul>
<p>Potrivește rădăcina cu sensul ei:</p>`,
          widget: "match",
          options: { pairs: [["tele-", "departe"], ["micro-", "mic"], ["-fono", "sunet"], ["bio-", "viață"], ["-grafia", "scriere"], ["geo-", "pământ"]] }
        },
        {
          label: "🇬🇧 În engleză este la fel!",
          html: `<p>Și în engleză cuvintele se construiesc cu prefixe și sufixe, adesea <b>aceleași</b> pentru că vin din latină:</p>
<table>
<tr><th>Engleză</th><th>Italiană</th><th>Ce face</th></tr>
<tr><td><b>un</b>happy</td><td><b>in</b>felice</td><td>contrariu</td></tr>
<tr><td><b>re</b>write</td><td><b>ri</b>scrivere</td><td>din nou</td></tr>
<tr><td>play<b>er</b></td><td>gioca<b>tore</b></td><td>cine face</td></tr>
<tr><td>wash<b>able</b></td><td>lav<b>abile</b></td><td>care se poate</td></tr>
<tr><td>kind<b>ness</b></td><td>gentil<b>ezza</b></td><td>calitate</td></tr>
</table>
<p>Să cunoști „piesele” te ajută să înveți două limbi deodată!</p>`
        },
        {
          label: "🌡️ Termometrul cuvintelor",
          html: `<p>Sinonimele nu sunt toate la fel: au <b>intensități</b> diferite. Pune-le pe un <b>termometru</b>, de la cel mai slab la cel mai puternic:</p>
<ul>
<li>😐 <b>contento</b> (mulțumit) → 🙂 <b>felice</b> (fericit) → 😄 <b>entusiasta</b> → 🤩 <b>euforico</b></li>
<li>🌤️ <b>tiepido</b> (călduț) → ☀️ <b>caldo</b> (cald) → 🔥 <b>bollente</b> (fierbinte) → 🌋 <b>rovente</b> (încins)</li>
<li>🤏 <b>piccolo</b> (mic) → 🐜 <b>minuscolo</b> → 🔬 <b>microscopico</b></li>
</ul>
<p>Alegerea cuvântului potrivit de pe termometru face textele tale precise. Încearcă să clasifici: aceste cuvinte sunt „slabe” sau „puternice”?</p>`,
          widget: "classify",
          options: { groups: ["Intensitate slabă", "Intensitate puternică"], items: [["contento", 0], ["tiepido", 0], ["carino", 0], ["stanco", 0], ["euforico", 1], ["rovente", 1], ["stupendo", 1], ["sfinito", 1]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta lexicului",
      nodes: [
        { id: "lessico", label: "Lexic", x: 50, y: 6, color: "#2563eb", html: "Totalitatea cuvintelor unei limbi (sau ale unei persoane).", why: "Din grecescul <i>léxis</i> = „cuvânt”. Lexicul se schimbă mereu: apar cuvinte noi (neologisme) și altele dispar, pentru că se schimbă lumea pe care o descriem." },
        { id: "significato", label: "Relații de sens", x: 22, y: 30, color: "#16a34a", html: "Sinonime, antonime, omonime, cuvinte polisemantice.", why: "Cuvintele nu sunt izolate: sensul lor se înțelege și din comparația cu celelalte (cald se înțelege mai bine lângă rece)." },
        { id: "sinonimi", label: "Sinonime și antonime", x: 10, y: 56, color: "#22c55e", html: "Sinonime: sens asemănător. Antonime: sens opus.", why: "Din grecescul <i>syn</i> (împreună) + <i>ónoma</i> (nume) și <i>antí</i> (împotrivă) + <i>ónoma</i>. Sinonimele perfecte sunt foarte rare: fiecare limbă tinde să dea fiecărui cuvânt o nuanță a lui." },
        { id: "omonimi", label: "Omonime", x: 32, y: 56, color: "#14b8a6", html: "Aceeași formă, sensuri diferite: riso (orez) / riso (râs).", why: "Adesea se nasc din cuvinte latinești diferite care, schimbându-se de-a lungul secolelor, au devenit la fel: <i>oryza</i> → riso (orez), <i>risus</i> → riso (râs)." },
        { id: "formazione", label: "Formarea cuvintelor", x: 75, y: 30, color: "#dc2626", html: "Dintr-un cuvânt primitiv se creează derivate, modificate și compuse.", why: "Este cel mai economic mod de a crea cuvinte noi: în loc să inventezi sunete noi, recombini piese deja cunoscute, pe care toți le înțeleg." },
        { id: "radice", label: "Rădăcină", x: 60, y: 56, color: "#f59e0b", html: "Partea cuvântului care poartă sensul.", why: "Multe rădăcini italiene vin din latină (și unele din greacă): cunoașterea lor ajută să înțelegi familii întregi de cuvinte." },
        { id: "affissi", label: "Prefixe și sufixe", x: 85, y: 56, color: "#a855f7", html: "Prefixul înaintea rădăcinii, sufixul după.", why: "Multe erau cuvinte latinești de sine stătătoare (<i>sub</i> = sub, <i>super</i> = deasupra, <i>re-</i> = din nou) care s-au „lipit” de alte cuvinte." },
        { id: "famiglia", label: "Familie de cuvinte", x: 60, y: 82, color: "#0ea5e9", html: "Toate cuvintele cu aceeași rădăcină: mare, marino, marinaio…", why: "Ca într-o familie adevărată, au un „strămoș” comun: cuvântul primitiv." },
        { id: "alterati", label: "Modificate și compuse", x: 88, y: 82, color: "#ec4899", html: "Modificate: gattino, librone, tempaccio. Compuse: arcobaleno, apriscatole.", why: "Cuvintele modificate nu creează un lucru nou, ci adaugă o idee de mărime sau o emoție; cele compuse unesc două sensuri într-unul." },
        { id: "dizionario", label: "Dicționar", x: 22, y: 82, color: "#64748b", html: "Cartea (sau aplicația) care adună și explică cuvintele.", why: "Primul mare dicționar italian este cel al Accademiei della Crusca (1612). Astăzi dicționarele sunt și digitale și se actualizează în fiecare an cu cuvinte noi." }
      ],
      edges: [
        ["lessico", "significato", "se studiază prin"],
        ["lessico", "formazione", "crește prin"],
        ["significato", "sinonimi", ""],
        ["significato", "omonimi", ""],
        ["formazione", "radice", "pornește de la"],
        ["formazione", "affissi", "folosește"],
        ["radice", "famiglia", "creează o"],
        ["affissi", "alterati", "creează"],
        ["lessico", "dizionario", "este adunat în"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: modificate și prefixe",
      questions: [
        { type: "mc", q: "«Ventaccio» este un substantiv…", options: ["diminutiv", "augmentativ", "peiorativ"], answer: 2, explain: "Sufixul -accio indică ceva urât sau rău: peiorativ." },
        { type: "mc", q: "Care cuvânt este compus?", options: ["portafoglio", "fogliolina", "sfogliare"], answer: 0, explain: "Porta + foglio: două cuvinte unite (portofel)." },
        { type: "mc", q: "Antonimul lui «possibile» se formează cu prefixul…", options: ["dis-", "im-", "s-"], answer: 1, explain: "Im-possibile (înaintea lui p și b «in-» devine «im-»)." }
      ]
    }
  ],
  glossary: [
    { t: "Lexic", d: "Totalitatea cuvintelor unei limbi sau ale unei persoane." },
    { t: "Sinonime", d: "Cuvinte cu sens la fel sau asemănător." },
    { t: "Antonime (contrari)", d: "Cuvinte cu sens opus." },
    { t: "Omonime", d: "Cuvinte la fel ca formă, dar cu sensuri diferite." },
    { t: "Cuvânt primitiv", d: "Cuvânt care nu derivă din alte cuvinte italiene (mare, fiore)." },
    { t: "Cuvânt derivat", d: "Cuvânt format dintr-unul primitiv cu prefixe sau sufixe (marinaio)." },
    { t: "Prefix", d: "Element pus înaintea rădăcinii care îi modifică sensul (ri-, in-, pre-)." },
    { t: "Sufix", d: "Element pus după rădăcină pentru a forma cuvinte noi (-aio, -tore, -ezza)." },
    { t: "Substantiv modificat (alterato)", d: "Substantiv modificat cu un sufix: diminutiv, augmentativ, drăgăstos, peiorativ." },
    { t: "Substantiv compus", d: "Substantiv format din două cuvinte unite (arcobaleno)." },
    { t: "Împrumut", d: "Cuvânt luat dintr-o altă limbă (computer, zucchero)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care este un sinonim al lui «iniziare» (a începe)?", options: ["finire", "cominciare", "continuare"], answer: 1, explain: "Iniziare și cominciare au același sens." },
      { type: "mc", q: "Care este antonimul lui «coraggioso» (curajos)?", options: ["pauroso", "forte", "audace"], answer: 0, explain: "Pauroso (fricos) este opusul lui coraggioso; audace este un sinonim." },
      { type: "tf", q: "«Riso» (cerealul) și «riso» (râsul) sunt omonime.", answer: true, explain: "Aceeași formă, sensuri diferite." },
      { type: "mc", q: "În cuvântul «giocatore», «-tore» este…", options: ["un prefix", "un sufix", "rădăcina"], answer: 1, explain: "Stă după rădăcină și arată cine face acțiunea." },
      { type: "mc", q: "Care dintre acestea este un cuvânt primitiv?", options: ["pane", "panettiere", "panino"], answer: 0, explain: "Pane (pâine) este primitivul; panettiere și panino derivă din pane." },
      { type: "mc", q: "«Casetta» este un substantiv…", options: ["augmentativ", "diminutiv", "compus"], answer: 1, explain: "Sufixul -etta indică ceva mic." },
      { type: "text", q: "Cum se numește elementul care se pune ÎNAINTEA rădăcinii (de ex. «ri-» în «rifare»)?", answer: ["prefix", "prefixul", "un prefix", "prefisso", "il prefisso"], explain: "Prefixul." },
      { type: "tf", q: "«Mattone» este augmentativul lui «matto».", answer: false, explain: "Este un fals modificat: mattone (cărămidă) are un sens al lui." },
      { type: "mc", q: "Care cuvânt NU aparține familiei lui «terra» (pământ)?", options: ["terreno", "atterrare", "terrazza", "termometro"], answer: 3, explain: "«Termometro» vine din grecescul «thermós» (cald), nu din terra." },
      { type: "num", q: "După Tullio De Mauro, aproximativ câte cuvinte formează vocabularul de bază al limbii italiene?", answer: 7000, tol: 500, explain: "Aproximativ 7.000 de cuvinte." },
      { type: "mc", q: "În ce an a apărut primul Vocabolario degli Accademici della Crusca?", options: ["1312", "1612", "1912"], answer: 1, explain: "În 1612, la Veneția." },
      { type: "order", q: "Ordonează de la cel mai puțin intens la cel mai intens.", items: ["tiepido", "caldo", "bollente"], explain: "Tiepido < caldo < bollente: este o scară de intensitate." }
    ]
  }
});

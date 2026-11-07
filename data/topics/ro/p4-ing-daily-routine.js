TOPIC('ro', {
  id: "p4-ing-daily-routine",
  title: "Daily routine",
  intro: "Good morning! ☀️ În fiecare zi facem aproape aceleași lucruri: ne trezim, luăm micul dejun, mergem la școală… În engleză această „zi obișnuită” se numește <b>daily routine</b>. Învățăm verbele zilei, să <b>citim ceasul</b> în engleză și să ne povestim ziua: <i>«I get up at seven o'clock.»</i> ⏰",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Verbele zilei",
      html: `<p>Iată acțiunile pe care le facem aproape în fiecare zi, în ordine, de dimineața până seara:</p>
<table>
<tr><th>Engleză</th><th>Se pronunță</th><th>Română</th></tr>
<tr><td>⏰ <b>wake up</b></td><td>ueic ap</td><td>a se trezi</td></tr>
<tr><td>🛏️ <b>get up</b></td><td>get ap</td><td>a se da jos din pat</td></tr>
<tr><td>🚿 <b>have a shower</b></td><td>hev ă șauăr</td><td>a face duș</td></tr>
<tr><td>🪥 <b>brush my teeth</b></td><td>braș mai tiiț</td><td>a se spăla pe dinți</td></tr>
<tr><td>👕 <b>get dressed</b></td><td>get drest</td><td>a se îmbrăca</td></tr>
<tr><td>🥣 <b>have breakfast</b></td><td>hev brecfăst</td><td>a lua micul dejun</td></tr>
<tr><td>🏫 <b>go to school</b></td><td>gou tu scuul</td><td>a merge la școală</td></tr>
<tr><td>🍝 <b>have lunch</b></td><td>hev lanci</td><td>a lua prânzul</td></tr>
<tr><td>📚 <b>do my homework</b></td><td>du mai houmuork</td><td>a face temele</td></tr>
<tr><td>⚽ <b>play with my friends</b></td><td>plei uiț mai frends</td><td>a se juca cu prietenii</td></tr>
<tr><td>🍲 <b>have dinner</b></td><td>hev diner</td><td>a lua cina</td></tr>
<tr><td>😴 <b>go to bed</b></td><td>gou tu bed</td><td>a merge la culcare</td></tr>
</table>
<p>Ai observat? Verbul <b>have</b> (a avea) se folosește pentru mese și pentru duș: <i>have breakfast, have lunch, have dinner, have a shower</i>. În română spunem „a lua” masa sau „a face” duș, în engleză „a avea”!</p>`
    },
    {
      type: "widget",
      title: "Cartonașe: acțiunile zilei",
      widget: "flashcards",
      options: {
        cards: [
          { front: "⏰ wake up", back: "a se trezi" },
          { front: "🛏️ get up", back: "a se da jos din pat" },
          { front: "🚿 have a shower", back: "a face duș" },
          { front: "🪥 brush my teeth", back: "a mă spăla pe dinți" },
          { front: "👕 get dressed", back: "a se îmbrăca" },
          { front: "🥣 have breakfast", back: "a lua micul dejun" },
          { front: "🏫 go to school", back: "a merge la școală" },
          { front: "🍝 have lunch", back: "a lua prânzul" },
          { front: "📚 do my homework", back: "a face temele" },
          { front: "🍲 have dinner", back: "a lua cina" },
          { front: "😴 go to bed", back: "a merge la culcare" }
        ]
      },
      caption: "Citește cu voce tare propoziția în engleză și mimează acțiunea, apoi întoarce cartonașul."
    },
    {
      type: "text",
      title: "2. What time is it? Cât este ceasul?",
      html: `<p>Pentru a întreba ora se spune <b>What time is it?</b> (uot taim is it?). Se răspunde cu <b>It's…</b> (Este / Sunt…).</p>
<ul>
<li>🕖 Ora fixă: <b>It's seven o'clock.</b> = Este ora șapte. (<i>o'clock</i> se folosește doar cu ora fixă)</li>
<li>🕢 Și jumătate: <b>It's half past seven.</b> = Este șapte și jumătate. (<i>half</i> = jumătate, <i>past</i> = după)</li>
<li>🕖 Și un sfert: <b>It's quarter past seven.</b> = Este șapte și un sfert.</li>
<li>🕖 Fără un sfert: <b>It's quarter to eight.</b> = Este opt fără un sfert. (<i>to</i> = spre, mai lipsește puțin până la…)</li>
<li>🕖 Minute: <b>It's ten past seven</b> (7:10) · <b>It's twenty to eight</b> (7:40).</li>
</ul>
<p><b>Trucul:</b> în <b>jumătatea dreaptă</b> a ceasului (de la 1 la 30 de minute) folosești <b>past</b>; în <b>jumătatea stângă</b> (de la 31 la 59 de minute) folosești <b>to</b> și numeri minutele care lipsesc până la ora următoare.</p>
<p>Există și modul „digital”, mai ușor: se citesc numerele așa cum sunt. 7:30 → <b>seven thirty</b>; 7:15 → <b>seven fifteen</b>; 7:45 → <b>seven forty-five</b>.</p>`
    },
    {
      type: "svg",
      title: "Past și to pe ceas",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0f9ff"/>
<path d="M300 160 L300 30 A130 130 0 0 1 300 290 Z" fill="#bbf7d0"/>
<path d="M300 160 L300 290 A130 130 0 0 1 300 30 Z" fill="#fecaca"/>
<circle cx="300" cy="160" r="130" fill="none" stroke="#1e293b" stroke-width="6"/>
<g font-size="20" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="300" y="56">12</text><text x="365" y="73">1</text><text x="410" y="118">2</text><text x="420" y="167">3</text><text x="410" y="218">4</text><text x="365" y="262">5</text>
<text x="300" y="280">6</text><text x="235" y="262">7</text><text x="190" y="218">8</text><text x="180" y="167">9</text><text x="190" y="118">10</text><text x="235" y="73">11</text>
</g>
<line x1="300" y1="160" x2="300" y2="60" stroke="#1d4ed8" stroke-width="6" stroke-linecap="round"/>
<line x1="300" y1="160" x2="350" y2="160" stroke="#b91c1c" stroke-width="8" stroke-linecap="round"/>
<circle cx="300" cy="160" r="8" fill="#1e293b"/>
<text x="480" y="60" font-size="30" font-weight="bold" fill="#15803d" text-anchor="middle">PAST</text>
<text x="480" y="90" font-size="16" fill="#15803d" text-anchor="middle">minute DUPĂ oră</text>
<text x="480" y="160" font-size="18" fill="#15803d" text-anchor="middle">:15 quarter past</text>
<text x="480" y="270" font-size="18" fill="#1e293b" text-anchor="middle">:30 half past</text>
<text x="110" y="60" font-size="30" font-weight="bold" fill="#b91c1c" text-anchor="middle">TO</text>
<text x="110" y="90" font-size="16" fill="#b91c1c" text-anchor="middle">minute care LIPSESC</text>
<text x="110" y="160" font-size="18" fill="#b91c1c" text-anchor="middle">:45 quarter to</text>
<text x="300" y="20" font-size="16" fill="#1e293b" text-anchor="middle">:00 o'clock</text>
<text x="300" y="315" font-size="18" fill="#1e293b" text-anchor="middle" font-weight="bold">It's quarter past twelve (12:15)</text>
</svg>`,
      caption: "Jumătatea verde: past (minute după oră). Jumătatea roșie: to (minute care lipsesc până la ora următoare)."
    },
    {
      type: "quiz",
      title: "Mini-test: verbe și ceas",
      questions: [
        { type: "mc", q: "Cum se spune «a lua micul dejun» în engleză?", options: ["have breakfast", "make breakfast time", "do lunch"], answer: 0, explain: "A lua micul dejun = have breakfast: pentru mese se folosește verbul have." },
        { type: "mc", q: "Ora 8:30 se spune…", options: ["half to eight", "half past eight", "eight o'clock"], answer: 1, explain: "O jumătate de oră după ora opt: half past eight." },
        { type: "mc", q: "«It's quarter to nine» înseamnă…", options: ["9:15", "8:45", "9:45"], answer: 1, explain: "Mai lipsește un sfert de oră până la nouă: este 8:45." },
        { type: "tf", q: "«O'clock» se folosește doar cu ora fixă.", answer: true, explain: "Da: seven o'clock = 7:00. Cu minute nu se folosește." }
      ]
    },
    {
      type: "text",
      title: "3. Ne povestim ziua: present simple",
      html: `<p>Pentru acțiunile pe care le facem <b>mereu, în fiecare zi</b>, engleza folosește <b>present simple</b>. Pentru a spune ora se folosește <b>at</b>:</p>
<p>🕖 <b>I get up at seven o'clock.</b> = Mă dau jos din pat la ora șapte.<br>
🏫 <b>I go to school at eight.</b> = Merg la școală la opt.<br>
😴 <b>I go to bed at nine.</b> = Merg la culcare la nouă.</p>
<p><b>Atenție la persoana a treia!</b> Cu <b>he</b> (el), <b>she</b> (ea), <b>it</b> verbul primește un <b>-s</b>:</p>
<ul>
<li>I get up → <b>he gets up</b></li>
<li>I play → <b>she plays</b></li>
<li>I go → <b>he goes</b> (verbele care se termină în -o, -sh, -ch primesc <b>-es</b>: go → goes, brush → brushes, watch → watches)</li>
<li>I have → <b>she has</b> (acesta este neregulat!)</li>
</ul>
<p>Pentru a spune <b>când</b>: <b>in the morning</b> (dimineața), <b>in the afternoon</b> (după-amiaza), <b>in the evening</b> (seara), dar <b>at night</b> (noaptea).</p>
<p>Pentru a spune <b>cât de des</b>: <b>always</b> (mereu), <b>usually</b> (de obicei), <b>sometimes</b> (uneori), <b>never</b> (niciodată). Se pun <b>înaintea</b> verbului: <i>I always have breakfast.</i></p>`
    },
    {
      type: "widget",
      title: "Morning, afternoon or evening?",
      widget: "classify",
      options: {
        groups: ["🌅 in the morning", "🌤️ in the afternoon", "🌙 in the evening / at night"],
        items: [
          ["⏰ wake up", 0],
          ["🥣 have breakfast", 0],
          ["👕 get dressed", 0],
          ["🏫 go to school", 0],
          ["📚 do my homework", 1],
          ["⚽ play with my friends", 1],
          ["🍲 have dinner", 2],
          ["📺 watch TV", 2],
          ["😴 go to bed", 2]
        ]
      },
      caption: "Pune fiecare acțiune în momentul zilei în care o faci de obicei."
    },
    {
      type: "example",
      title: "Exemplu practic: My day (ziua lui Luca)",
      html: `<p><i>Hi! I'm Luca and I'm nine. I <b>wake up</b> at seven o'clock. I <b>get up</b>, I <b>have a shower</b> and I <b>get dressed</b>. I <b>have breakfast</b> at half past seven: I usually have milk and biscuits. 🥛🍪 I <b>go to school</b> at quarter past eight. I <b>have lunch</b> at school at half past twelve. In the afternoon I <b>do my homework</b> and then I <b>play</b> with my friends. I <b>have dinner</b> at eight o'clock and I <b>go to bed</b> at half past nine. Good night! 🌙</i></p>
<p>Încearcă să rescrii textul vorbind despre tine: schimbă doar orele și lucrurile pe care le faci!</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: dialog cu bunica din Anglia",
      html: `<p><b>Granny:</b> What time do you get up, Sofia?<br>
<b>Sofia:</b> I get up at seven o'clock.<br>
<b>Granny:</b> And what time do you go to school?<br>
<b>Sofia:</b> At quarter past eight. My brother goes to school at eight. 🚌<br>
<b>Granny:</b> Do you have lunch at school?<br>
<b>Sofia:</b> Yes, I do! I have lunch at half past twelve.<br>
<b>Granny:</b> What time is it now?<br>
<b>Sofia:</b> It's nine o'clock… Time for bed! 😴</p>
<p>Notă: întrebarea se face cu <b>What time do you…?</b> (La ce oră…?) și se răspunde cu <b>at</b> + ora. Pentru fratele (he) Sofia spune <b>goes</b>, cu -es.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? O'clock",
      html: `<p><b>O'clock</b> este prescurtarea de la <b>„of the clock”</b>, adică „al ceasului”. Cu secole în urmă se spunea „seven of the clock” ca să se deosebească ora ceasului mecanic de cea a cadranului solar. Cu timpul, expresia s-a scurtat în <i>o'clock</i>!</p>
<p>Iar <b>Big Ben</b>, la Londra, nu este numele turnului, ci al <b>clopotului</b> cel mai mare din turn, care sună orele din 1859. Din 2012 turnul se numește <b>Elizabeth Tower</b>. 🔔</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Zilele copiilor din Anglia",
      html: `<p>În Anglia școala începe de obicei pe la <b>8:45–9:00</b> și se termină pe la <b>15:00–15:30</b>, de luni până vineri. Aproape toți iau prânzul la școală: unii mănâncă la cantină (<i>school dinner</i>), alții aduc de acasă <b>packed lunch</b> în lunchbox. 🥪🍎</p>
<p>Mulți copii poartă <b>uniform</b> (uniforma) cu pulover și cravată în culorile școlii. Iar cina (<i>dinner</i> sau <i>tea</i>) este adesea pe la 18:00, mult mai devreme decât la noi!</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>What time is it?</b> → <b>It's</b> … o'clock / half past … / quarter past … / quarter to …</li>
<li><b>Past</b> = minute după oră (până la 30); <b>to</b> = minute care lipsesc până la ora următoare.</li>
<li>Pentru a spune la ce oră faci ceva: <b>at</b> + ora → <i>I get up at seven.</i></li>
<li>Mesele și dușul cu <b>have</b>: have breakfast / lunch / dinner / a shower.</li>
<li>Cu <b>he / she / it</b> verbul primește <b>-s</b>: she gets up, he goes, she has.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege ora și rutina",
      intro: "Ți se pare greu să citești ceasul în engleză? Iată alte căi: sistemul am/pm al englezilor, pizza fracțiilor, ora digitală, comparații cu alte limbi și un joc de potrivire.",
      tabs: [
        {
          label: "🇬🇧 am și pm",
          html: `<p>La noi se spune adesea „ora 15” sau „ora 21” (ceas de <b>24 de ore</b>). Englezii și americanii folosesc în viața de zi cu zi ceasul de <b>12 ore</b> și adaugă:</p>
<ul>
<li><b>am</b> (din latină <i>ante meridiem</i> = înainte de amiază): de la miezul nopții până la amiază → 7 am = 7 dimineața;</li>
<li><b>pm</b> (<i>post meridiem</i> = după amiază): de la amiază până la miezul nopții → 7 pm = ora 19.</li>
</ul>
<p>Truc: ca să treci de la pm la ora de 24 de ore, adaugi 12. 3 pm → 3 + 12 = <b>15</b>. 9 pm → <b>21</b>.</p>
<p>Oral se spune și <i>in the morning</i> / <i>in the afternoon</i> / <i>in the evening</i>: „It's three o'clock in the afternoon”.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<rect x="30" y="60" width="270" height="70" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="300" y="60" width="270" height="70" fill="#1e3a8a" stroke="#b45309" stroke-width="3"/>
<text x="165" y="105" font-size="30" font-weight="bold" fill="#92400e" text-anchor="middle">AM ☀️</text>
<text x="435" y="105" font-size="30" font-weight="bold" fill="#fde68a" text-anchor="middle">PM 🌙</text>
<g font-size="16" fill="#1e293b" text-anchor="middle">
<text x="30" y="155">0:00</text><text x="300" y="155">12:00</text><text x="570" y="155">24:00</text>
</g>
<text x="165" y="45" font-size="17" fill="#1e293b" text-anchor="middle">de la miezul nopții la amiază</text>
<text x="435" y="45" font-size="17" fill="#1e293b" text-anchor="middle">de la amiază la miezul nopții</text>
<text x="300" y="195" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">7 am = 7:00   ·   7 pm = 19:00</text>
</svg>`
        },
        {
          label: "🍕 Pizza-ceas",
          html: `<p>Îți amintești fracțiile? Ceasul este ca o <b>pizza</b> împărțită în 4 felii: fiecare felie este <b>un sfert de oră</b> = 15 minute.</p>
<ul>
<li>1 felie mâncată după ora 12 → <b>quarter past</b> (un sfert <i>după</i>);</li>
<li>2 felii = jumătate de pizza → <b>half past</b> (jumătate <i>după</i>);</li>
<li>3 felii mâncate → mai lipsește 1 felie până la ora următoare → <b>quarter to</b> (un sfert <i>spre</i> ora următoare).</li>
</ul>
<p>Și în engleză <b>quarter</b> înseamnă „sfert”, iar <b>half</b> înseamnă „jumătate”: sunt chiar cuvintele fracțiilor!</p>`
        },
        {
          label: "📱 Ora digitală",
          html: `<p>Dacă „past” și „to” te încurcă, există un mod pe care englezii îl înțeleg întotdeauna: citirea orei ca pe telefon, număr cu număr.</p>
<table>
<tr><th>Ora</th><th>Modul clasic</th><th>Modul digital</th></tr>
<tr><td>7:15</td><td>quarter past seven</td><td><b>seven fifteen</b></td></tr>
<tr><td>7:30</td><td>half past seven</td><td><b>seven thirty</b></td></tr>
<tr><td>7:45</td><td>quarter to eight</td><td><b>seven forty-five</b></td></tr>
<tr><td>7:05</td><td>five past seven</td><td><b>seven oh five</b></td></tr>
</table>
<p>„0” se citește <b>oh</b> (ca litera O). Acest mod se folosește mult pentru orele trenurilor, avioanelor și ale programelor TV.</p>`
        },
        {
          label: "🌍 Alte limbi",
          html: `<p>Fiecare limbă spune ora în felul ei. Compară 7:30:</p>
<ul>
<li>🇷🇴 Română: <b>șapte și jumătate</b> (după ora 7)</li>
<li>🇬🇧 Engleză: <b>half past seven</b> (jumătate după ora 7)</li>
<li>🇩🇪 Germană: <b>halb acht</b> = „jumătate de opt”, adică jumătatea drumului <i>spre</i> ora 8!</li>
<li>🇪🇸 Spaniolă: <b>las siete y media</b> (ca în română)</li>
<li>🇫🇷 Franceză: <b>sept heures et demie</b></li>
</ul>
<p>Atenție: dacă un prieten german spune „halb acht”, nu este 8:30, ci 7:30! Engleza, în schimb, gândește ca noi: <i>half past seven</i>.</p>`
        },
        {
          label: "🎮 Potrivește ora",
          html: `<p>Apasă pe o oră în engleză și apoi pe ceasul digital potrivit. Ține minte: <b>past</b> = după, <b>to</b> = lipsesc.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["seven o'clock", "7:00"],
              ["half past seven", "7:30"],
              ["quarter past nine", "9:15"],
              ["quarter to nine", "8:45"],
              ["ten past four", "4:10"],
              ["twenty to six", "5:40"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta rutinei zilnice: atinge un nod",
      nodes: [
        { id: "routine", label: "Daily routine", x: 50, y: 8, color: "#2563eb", html: "Ziua obișnuită: acțiunile pe care le repeți în fiecare zi, de la trezire până la culcare.", why: "<i>Routine</i> este un cuvânt francez intrat în engleză în secolul al XVII-lea: vine de la <i>route</i>, „drum”. O rutină este „drumul” pe care îl parcurgi mereu la fel în fiecare zi." },
        { id: "verbi", label: "Verbele zilei", x: 18, y: 30, color: "#16a34a", html: "wake up, get up, have breakfast, go to school, do homework, go to bed…", why: "Multe sunt <b>phrasal verbs</b>, adică verb + un cuvințel (up, to…): <i>get</i> singur înseamnă „a obține”, dar <i>get up</i> înseamnă „a se da jos din pat”. Engleza construiește astfel foarte multe verbe noi." },
        { id: "have", label: "have + mese", x: 18, y: 58, color: "#f59e0b", html: "have breakfast, have lunch, have dinner, have a shower.", why: "În engleză <i>have</i> înseamnă și „a consuma, a lua”. Noi spunem „a lua micul dejun”, ei „a avea micul dejun”: fiecare limbă alege alte verbe, de aceea aceste expresii se învață pe de rost, ca blocuri întregi." },
        { id: "simple", label: "Present simple", x: 50, y: 40, color: "#a855f7", html: "Timpul pentru obiceiuri: I get up at seven.", why: "Engleza deosebește ceea ce faci <b>mereu</b> (present simple) de ceea ce faci <b>acum</b> (present continuous). Româna folosește aproape mereu același prezent." },
        { id: "terza", label: "-s la persoana a 3-a", x: 50, y: 70, color: "#ef4444", html: "he gets up, she goes, it has.", why: "Este ultima rămășiță a unei engleze vechi (Old English) care avea multe terminații, ca româna: eu cânt, tu cânți, el cântă. Celelalte s-au pierdut de-a lungul secolelor; a rămas doar -s la he/she/it (înainte era <i>-eth</i>: „he goeth”)." },
        { id: "ora", label: "What time is it?", x: 82, y: 30, color: "#0ea5e9", html: "Pentru a întreba ora. Răspuns: It's…", why: "Întrebarea cere literal „Ce timp este?”: în engleză <i>time</i> înseamnă și „timp”, și „oră”." },
        { id: "pastto", label: "past / to", x: 82, y: 58, color: "#14b8a6", html: "quarter past (și un sfert), half past (și jumătate), quarter to (fără un sfert).", why: "Vine de la ceasurile cu limbi: te uiți dacă limba lungă a <b>trecut</b> (past) de oră sau merge <b>spre</b> (to) cea următoare. <i>Quarter</i> și <i>half</i> sunt aceleași cuvinte ca fracțiile 1/4 și 1/2." },
        { id: "oclock", label: "o'clock și am/pm", x: 82, y: 84, color: "#64748b", html: "seven o'clock = 7:00; 7 am = dimineața, 7 pm = seara.", why: "<i>O'clock</i> = „of the clock”. <i>Am</i> și <i>pm</i> vin din latinescul <i>ante meridiem</i> și <i>post meridiem</i>: înainte și după amiază, momentul în care Soarele este cel mai sus (<i>meridianul</i>)." },
        { id: "at", label: "at + ora", x: 18, y: 84, color: "#db2777", html: "I go to bed at nine. In the morning, at night.", why: "<i>At</i> arată un punct precis (o oră, un moment), <i>in</i> o perioadă mai lungă (in the morning). Este aceeași logică ca la locuri: at the bus stop (un punct), in Italy (o zonă)." }
      ],
      edges: [
        ["routine", "verbi", "se povestește cu"],
        ["routine", "ora", "are ore fixe"],
        ["verbi", "have", "pentru mese"],
        ["verbi", "simple", "la timpul"],
        ["simple", "terza", "cu he/she/it"],
        ["ora", "pastto", "se citește cu"],
        ["ora", "oclock", "ora fixă"],
        ["simple", "at", "ora cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: povestește-ți ziua",
      questions: [
        { type: "mc", q: "Completează: «She ___ up at seven.»", options: ["get", "gets", "getting"], answer: 1, explain: "Cu she (ea) verbul primește -s: she gets up." },
        { type: "mc", q: "Completează: «I go to bed ___ nine o'clock.»", options: ["in", "on", "at"], answer: 2, explain: "Cu ora se folosește at: at nine o'clock." },
        { type: "text", q: "Scrie persoana a treia a verbului «go» (he ___ to school).", answer: ["goes"], explain: "Verbele care se termină în -o primesc -es: goes." },
        { type: "mc", q: "9 pm corespunde cu…", options: ["ora 9 dimineața", "ora 21", "ora 12"], answer: 1, explain: "pm = după amiază: 9 + 12 = 21." }
      ]
    }
  ],
  glossary: [
    { t: "Daily routine", d: "Ziua obișnuită, acțiunile care se fac în fiecare zi." },
    { t: "Wake up / get up", d: "A se trezi / a se da jos din pat." },
    { t: "Have breakfast / lunch / dinner", d: "A lua micul dejun / prânzul / cina." },
    { t: "Get dressed", d: "A se îmbrăca." },
    { t: "What time is it?", d: "Cât este ceasul?" },
    { t: "O'clock", d: "Se folosește cu ora fixă (seven o'clock = ora 7:00)." },
    { t: "Half past", d: "Și jumătate (half past seven = 7:30)." },
    { t: "Quarter past / quarter to", d: "Și un sfert / fără un sfert." },
    { t: "am / pm", d: "Înainte de amiază / după amiază." },
    { t: "Present simple", d: "Timpul englezesc pentru obiceiuri și acțiunile de fiecare zi." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cum se spune «a se îmbrăca» în engleză?", options: ["get dressed", "get up", "go to bed"], answer: 0, explain: "A se îmbrăca = get dressed." },
      { type: "mc", q: "«I have dinner» înseamnă…", options: ["iau micul dejun", "iau prânzul", "iau cina"], answer: 2, explain: "Dinner este cina." },
      { type: "mc", q: "Cum se spune 6:30?", options: ["half past six", "half to six", "six o'clock"], answer: 0, explain: "O jumătate de oră după ora șase: half past six." },
      { type: "mc", q: "«It's quarter past ten» este…", options: ["9:45", "10:15", "10:45"], answer: 1, explain: "Un sfert după ora zece: 10:15." },
      { type: "mc", q: "«Twenty to five» este…", options: ["5:20", "4:40", "4:20"], answer: 1, explain: "Lipsesc 20 de minute până la cinci: 4:40." },
      { type: "tf", q: "În engleză, pentru mese se folosește verbul «have».", answer: true, explain: "have breakfast, have lunch, have dinner." },
      { type: "tf", q: "«He go to school» este corect.", answer: false, explain: "Cu he verbul primește -es: he goes to school." },
      { type: "text", q: "Cum se întreabă «Cât este ceasul?» în engleză? (What … is it?)", answer: ["what time is it", "what time is it?"], explain: "What time is it?" },
      { type: "num", q: "Câte minute are «a quarter of an hour»?", answer: 15, unit: "minute", explain: "Un sfert de oră: 60 : 4 = 15 minute." },
      { type: "num", q: "4 pm pe ceasul de 24 de ore: ora…", answer: 16, explain: "pm: se adaugă 12 → 4 + 12 = 16." },
      { type: "order", q: "Pune în ordine dimineața lui Tom.", items: ["wake up", "get up", "have a shower", "get dressed", "have breakfast", "go to school"], explain: "Mai întâi te trezești, te dai jos din pat, te speli, te îmbraci, iei micul dejun și mergi la școală." },
      { type: "mc", q: "Completează: «I always ___ my teeth after breakfast.»", options: ["brush", "brushes", "do"], answer: 0, explain: "Cu I verbul rămâne la fel: I brush my teeth." }
    ]
  }
});

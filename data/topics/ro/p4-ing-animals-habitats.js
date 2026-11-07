TOPIC('ro', {
  id: "p4-ing-animals-habitats",
  title: "Wild animals",
  intro: "Lei în savană, pinguini pe gheață, cămile în deșert… 🦁🐧🐫 <b>Wild animals</b> (animalele sălbatice) trăiesc în medii diferite numite <b>habitats</b>. Să învățăm în engleză numele animalelor și ale habitatelor lor și cum să le descriem: <i>«Polar bears live in the Arctic. They can swim. They eat fish.»</i>",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Habitats: unde trăiesc animalele",
      html: `<p>Un <b>habitat</b> este locul unde un animal trăiește, își găsește hrana și își crește puii. Iată principalele:</p>
<table>
<tr><th>Engleză</th><th>Se pronunță</th><th>Română</th></tr>
<tr><td>🌳 <b>forest</b></td><td>fórist</td><td>pădure</td></tr>
<tr><td>🌴 <b>rainforest</b> / jungle</td><td>réinfórist / giángl</td><td>pădure tropicală / junglă</td></tr>
<tr><td>🦒 <b>savannah</b></td><td>savána</td><td>savană</td></tr>
<tr><td>🏜️ <b>desert</b></td><td>dézert</td><td>deșert</td></tr>
<tr><td>🌊 <b>ocean</b> / sea</td><td>óușăn / sii</td><td>ocean / mare</td></tr>
<tr><td>🧊 <b>polar regions</b> (Arctic, Antarctica)</td><td>póulă régions</td><td>regiuni polare (Arctica, Antarctica)</td></tr>
<tr><td>🏔️ <b>mountains</b></td><td>máuntăns</td><td>munți</td></tr>
<tr><td>🏞️ <b>river</b></td><td>rívă</td><td>râu</td></tr>
</table>
<p>Ca să spui unde trăiește un animal: <b>Lions live in the savannah.</b> = Leii trăiesc în savană. Cu un singur animal: <b>A camel lives in the desert.</b> (cu -s, pentru că este „it”).</p>`
    },
    {
      type: "text",
      title: "2. Wild animals: animalele sălbatice",
      html: `<ul>
<li>🦒 <b>Savannah</b>: lion (leu), zebra (zebră), giraffe (girafă), elephant (elefant), cheetah (ghepard)</li>
<li>🌴 <b>Rainforest</b>: monkey (maimuță), parrot (papagal), snake (șarpe), tiger (tigru), frog (broască)</li>
<li>🏜️ <b>Desert</b>: camel (cămilă), scorpion (scorpion), lizard (șopârlă)</li>
<li>🧊 <b>Polar regions</b>: polar bear (urs polar), penguin (pinguin), seal (focă)</li>
<li>🌊 <b>Ocean</b>: whale (balenă), dolphin (delfin), shark (rechin), octopus (caracatiță)</li>
<li>🌳 <b>Forest</b>: bear (urs), wolf (lup), deer (cerb), owl (bufniță), fox (vulpe)</li>
<li>🏔️ <b>Mountains</b>: eagle (vultur), goat (capră), marmot (marmotă)</li>
<li>🏞️ <b>River</b>: crocodile (crocodil), hippo (hipopotam), beaver (castor)</li>
</ul>
<p>⚠️ Pluraluri ciudate: one <b>wolf</b> → two <b>wolves</b>; one <b>deer</b> → two <b>deer</b> (la fel!); one <b>fish</b> → two <b>fish</b>; one <b>mouse</b> → two <b>mice</b>.</p>`
    },
    {
      type: "widget",
      title: "Flashcards: wild animals",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🦁 lion", back: "leu" },
          { front: "🦓 zebra", back: "zebră" },
          { front: "🐆 cheetah", back: "ghepard" },
          { front: "🐒 monkey", back: "maimuță" },
          { front: "🦜 parrot", back: "papagal" },
          { front: "🐍 snake", back: "șarpe" },
          { front: "🐫 camel", back: "cămilă" },
          { front: "🐻‍❄️ polar bear", back: "urs polar" },
          { front: "🐧 penguin", back: "pinguin" },
          { front: "🐋 whale", back: "balenă" },
          { front: "🦈 shark", back: "rechin" },
          { front: "🐺 wolf", back: "lup" },
          { front: "🦉 owl", back: "bufniță" },
          { front: "🦅 eagle", back: "vultur" },
          { front: "🐊 crocodile", back: "crocodil" },
          { front: "🦛 hippo", back: "hipopotam" }
        ]
      },
      caption: "Citește cuvântul cu voce tare și încearcă să-ți amintești traducerea înainte de a întoarce cartea."
    },
    {
      type: "widget",
      title: "Who lives where? Cine trăiește unde?",
      widget: "classify",
      options: {
        groups: ["🦒 savannah", "🌴 rainforest", "🏜️ desert", "🧊 polar regions", "🌊 ocean"],
        items: [
          ["🦁 lion", 0], ["🦓 zebra", 0], ["🦒 giraffe", 0],
          ["🐒 monkey", 1], ["🦜 parrot", 1], ["🐸 frog", 1],
          ["🐫 camel", 2], ["🦂 scorpion", 2],
          ["🐻‍❄️ polar bear", 3], ["🐧 penguin", 3], ["🦭 seal", 3],
          ["🐬 dolphin", 4], ["🦈 shark", 4], ["🐙 octopus", 4]
        ]
      },
      caption: "Atinge un animal și apoi habitatul lui."
    },
    {
      type: "quiz",
      title: "Mini-test: animale și habitate",
      questions: [
        { type: "mc", q: "«Desert» înseamnă…", options: ["dessert (desert, dulce)", "deșert", "pădure"], answer: 1, explain: "Desert (un singur s) = deșert. Dessert (doi s) = desertul, dulcele de la sfârșitul mesei!" },
        { type: "mc", q: "Unde trăiește pinguinul?", options: ["in the desert", "in Antarctica", "in the rainforest"], answer: 1, explain: "Pinguinii trăiesc mai ales în emisfera sudică, în Antarctica și pe coastele reci." },
        { type: "text", q: "Cum se spune «balenă» în engleză?", answer: ["whale", "a whale"], explain: "Balenă = whale." },
        { type: "mc", q: "Pluralul lui «wolf» este…", options: ["wolfs", "wolves", "wolf"], answer: 1, explain: "Plural neregulat: wolf → wolves." }
      ]
    },
    {
      type: "text",
      title: "3. Cum descriem un animal",
      html: `<p>Cu câteva propoziții poți descrie orice animal:</p>
<ul>
<li>🏠 <b>Unde trăiește</b>: <i>It lives in the rainforest.</i></li>
<li>📏 <b>Cum este</b>: <i>It's big / small / fast / slow / dangerous / beautiful.</i></li>
<li>🎨 <b>Ce are</b>: <i>It has got</i> (are) <i>a long neck / big ears / sharp teeth / stripes / a long tail.</i></li>
<li>💪 <b>Ce poate să facă</b>: <i>It <b>can</b> run fast. It <b>can</b> swim. It <b>can't</b> fly.</i> (can = poate / știe; can't = nu poate / nu știe)</li>
<li>🍖 <b>Ce mănâncă</b>: <i>It eats meat</i> (carne) / <i>grass</i> (iarbă) / <i>leaves</i> (frunze) / <i>fish</i> (pește) / <i>insects</i> (insecte).</li>
</ul>
<p>După <b>can</b> verbul rămâne mereu la fel, chiar și cu he/she/it: <i>It can swim</i> (nu „it can swims”).</p>`
    },
    {
      type: "svg",
      title: "Portretul girafei",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fef3c7"/>
<rect y="260" width="600" height="60" fill="#bef264"/>
<ellipse cx="170" cy="200" rx="80" ry="38" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<polygon points="215,180 240,175 275,50 255,45" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<ellipse cx="275" cy="45" rx="30" ry="16" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<line x1="262" y1="32" x2="258" y2="16" stroke="#92400e" stroke-width="4"/>
<line x1="274" y1="31" x2="274" y2="15" stroke="#92400e" stroke-width="4"/>
<circle cx="285" cy="40" r="4" fill="#1e293b"/>
<g stroke="#92400e" stroke-width="8"><line x1="115" y1="225" x2="115" y2="290"/><line x1="140" y1="230" x2="140" y2="292"/><line x1="200" y1="230" x2="200" y2="292"/><line x1="225" y1="225" x2="225" y2="290"/></g>
<g fill="#b45309"><circle cx="140" cy="195" r="9"/><circle cx="175" cy="185" r="8"/><circle cx="205" cy="205" r="9"/><circle cx="160" cy="215" r="7"/><circle cx="250" cy="120" r="6"/><circle cx="262" cy="80" r="6"/><circle cx="238" cy="160" r="7"/></g>
<path d="M92 195 Q70 215 78 240" stroke="#92400e" stroke-width="4" fill="none"/>
<g font-size="18" fill="#1e293b">
<text x="340" y="50" font-weight="bold" font-size="24" fill="#92400e">The giraffe</text>
<text x="340" y="85">🏠 It lives in the savannah.</text>
<text x="340" y="115">📏 It's very tall.</text>
<text x="340" y="145">🦒 It has got a long neck.</text>
<text x="340" y="175">🟤 It has got brown spots.</text>
<text x="340" y="205">🍃 It eats leaves.</text>
<text x="340" y="235">💪 It can run fast.</text>
</g>
<text x="300" y="305" font-size="16" fill="#3f6212" text-anchor="middle">Este cel mai înalt animal din lume: până la aproximativ 5,5 metri!</text>
</svg>`,
      caption: "Cu 5–6 propoziții simple ai descris un animal: unde trăiește, cum este, ce are, ce mănâncă, ce poate să facă."
    },
    {
      type: "3d",
      title: "Ocolul lumii animalelor",
      scene: "globe",
      options: {
        points: [
          { lat: -2, lon: 35, label: "🦁 Savannah (Kenya, Tanzania)", color: "#f59e0b" },
          { lat: -3, lon: -60, label: "🐒 Rainforest (Amazon)", color: "#16a34a" },
          { lat: 23, lon: 13, label: "🐫 Desert (Sahara)", color: "#eab308" },
          { lat: 78, lon: 16, label: "🐻‍❄️ Arctic (Svalbard)", color: "#38bdf8" },
          { lat: -75, lon: 0, label: "🐧 Antarctica", color: "#0ea5e9" },
          { lat: 0, lon: -150, label: "🐋 Pacific Ocean", color: "#1d4ed8" },
          { lat: 46, lon: 10, label: "🦅 Mountains (Alps)", color: "#64748b" },
          { lat: 0, lon: 25, label: "🐊 River (Congo)", color: "#14b8a6" }
        ]
      },
      caption: "Rotește globul și găsește habitatele. Uită-te: urșii polari (Arctica, la nord) și pinguinii (Antarctica, la sud) trăiesc la capetele opuse ale Pământului!"
    },
    {
      type: "example",
      title: "Exemplu practic: ghicește cine sunt! (Animal riddles)",
      html: `<p>Citește ghicitorile și încearcă să răspunzi în engleză:</p>
<ol>
<li><i>«I live in the desert. I've got one or two humps. I can walk for days without water. What am I?»</i> → 🐫 <b>A camel!</b></li>
<li><i>«I live in the ocean. I'm very, very big. I'm not a fish: I breathe air. What am I?»</i> → 🐋 <b>A whale!</b></li>
<li><i>«I live in the rainforest. I'm green. I can jump and I eat insects. What am I?»</i> → 🐸 <b>A frog!</b></li>
</ol>
<p>Acum inventează tu o ghicitoare pentru colegi, cu propozițiile <b>I live in… / I've got… / I can… / I eat…</b></p>`
    },
    {
      type: "example",
      title: "Exemplu practic: fișa pentru clasă",
      html: `<p>Marco a pregătit în engleză o fișă despre animalul lui preferat:</p>
<p><b>My favourite animal: the cheetah 🐆</b><br>
<i>The cheetah lives in the savannah in Africa. It's yellow with black spots. It has got long legs and a long tail. It eats meat. It can run very fast: it's the fastest animal on land! It can't climb trees very well. I love cheetahs!</i></p>
<p>Observă: <b>fast</b> (rapid) → <b>the fastest</b> (cel mai rapid). La fel și <b>big → the biggest</b>, <b>tall → the tallest</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Urșii polari și pinguinii nu se întâlnesc niciodată",
      html: `<p>În desenele animate, urșii polari și pinguinii se joacă adesea împreună… dar în realitate <b>nu se întâlnesc niciodată</b>! <b>Urșii polari</b> trăiesc la <b>Polul Nord</b> (Arctica), în timp ce aproape toți <b>pinguinii</b> trăiesc în <b>emisfera sudică</b>, mai ales în jurul <b>Polului Sud</b> (Antarctica). Între ei sunt aproximativ 20.000 km! 🌍</p>
<p>Numele Arctica vine din greacă, <i>arktos</i>, „urs” (de la constelația Ursa), iar Antarctica înseamnă „opusul Arcticii”.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Recorduri printre animale",
      html: `<ul>
<li>🐋 <b>Blue whale</b> (balena albastră) este cel mai mare animal care a existat vreodată, mai mare decât orice dinozaur: poate depăși <b>30 de metri</b> în lungime!</li>
<li>🐆 <b>Cheetah</b> (ghepardul) este cel mai rapid animal terestru: într-o fugă scurtă atinge aproximativ <b>100–110 km/h</b>.</li>
<li>🐫 Cocoașa cămilei <b>nu conține apă</b>, ci <b>grăsime</b>: este o rezervă de energie pentru călătoriile lungi prin deșert.</li>
</ul>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Habitate: forest, rainforest/jungle, savannah, desert, ocean, polar regions, mountains, river.</li>
<li><b>They live in…</b> / <b>It lives in…</b> (cu it se pune -s!).</li>
<li><b>It has got</b> (are) · <b>It can</b> (poate) / <b>It can't</b> (nu poate) + verb fără -s.</li>
<li><b>It eats</b> meat / grass / leaves / fish / insects.</li>
<li>Pluraluri neregulate: wolf → wolves, mouse → mice, deer → deer, fish → fish.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a învăța animalele",
      intro: "Cuvintele se țin minte mai bine dacă le legi de ceva. Iată patru drumuri diferite: cuvintele „veri” cu româna, cuvintele compuse, globul 3D și jocul portretului-robot.",
      tabs: [
        {
          label: "👯 Cuvinte înrudite",
          html: `<p>Multe nume de animale din engleză <b>seamănă cu româna</b>, pentru că vin din latină sau din greacă. Se numesc <b>cognates</b> (cuvinte înrudite):</p>
<ul>
<li>elephant → elefant · giraffe → girafă · zebra → zebră</li>
<li>crocodile → crocodil · hippopotamus (hippo) → hipopotam</li>
<li>tiger → tigru · lion → leu · penguin → pinguin</li>
<li>camel → cămilă · dolphin → delfin · scorpion → scorpion</li>
</ul>
<p>Altele, în schimb, sunt de origine germanică și sunt diferite: <b>wolf</b> (lup), <b>bear</b> (urs), <b>fox</b> (vulpe), <b>owl</b> (bufniță). Dar uită-te la germană: Wolf, Bär, Fuchs, Eule… aproape la fel ca în engleză!</p>`
        },
        {
          label: "🧩 Cuvinte compuse",
          html: `<p>Engleza construiește multe nume de animale <b>îmbinând două cuvinte</b>, ca piesele LEGO. Dacă știi piesele, înțelegi numele!</p>
<table>
<tr><th>Piesa 1</th><th>Piesa 2</th><th>Animalul</th></tr>
<tr><td>polar (polar)</td><td>bear (urs)</td><td>🐻‍❄️ polar bear</td></tr>
<tr><td>star (stea)</td><td>fish (pește)</td><td>⭐ starfish = stea de mare</td></tr>
<tr><td>jelly (jeleu)</td><td>fish (pește)</td><td>🪼 jellyfish = meduză</td></tr>
<tr><td>sea (mare)</td><td>horse (cal)</td><td>🌊🐴 seahorse = căluț de mare</td></tr>
<tr><td>rain (ploaie)</td><td>forest (pădure)</td><td>🌧️🌳 rainforest = pădure tropicală</td></tr>
</table>
<p>Curios: <b>hippopotamus</b> în greacă înseamnă chiar „calul de râu” (hippos = cal, potamos = râu)!</p>`
        },
        {
          label: "🌍 Globul 3D",
          html: `<p>Rotește globul: fiecare punct este un habitat. Încearcă să spui cu voce tare câte o propoziție pentru fiecare, de exemplu: <i>«Camels live in the Sahara Desert, in Africa.»</i> Observă cum deșerturile se află lângă tropice, pădurile tropicale lângă ecuator, iar gheața la poli: clima hotărăște cine poate trăi unde!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -2, lon: 35, label: "🦁 Savannah", color: "#f59e0b" },
              { lat: -3, lon: -60, label: "🐒 Amazon rainforest", color: "#16a34a" },
              { lat: 23, lon: 13, label: "🐫 Sahara Desert", color: "#eab308" },
              { lat: 78, lon: 16, label: "🐻‍❄️ Arctic", color: "#38bdf8" },
              { lat: -75, lon: 0, label: "🐧 Antarctica", color: "#0ea5e9" },
              { lat: -25, lon: 133, label: "🦘 Australian outback", color: "#ea580c" },
              { lat: 0, lon: 113, label: "🦧 Borneo rainforest", color: "#15803d" }
            ]
          }
        },
        {
          label: "🕵️ Jocul portretului-robot",
          html: `<p>Potrivește fiecare descriere cu animalul corect. Citește cu atenție cuvintele-cheie: <i>neck</i> (gât), <i>stripes</i> (dungi), <i>humps</i> (cocoașe), <i>fly</i> (a zbura).</p>`,
          widget: "match",
          options: {
            pairs: [
              ["It has got a very long neck.", "🦒 giraffe"],
              ["It has got black and white stripes.", "🦓 zebra"],
              ["It has got humps and lives in the desert.", "🐫 camel"],
              ["It's a bird but it can't fly. It can swim.", "🐧 penguin"],
              ["It can fly and it can see at night.", "🦉 owl"],
              ["It lives in the ocean and it has got sharp teeth.", "🦈 shark"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta: animale și habitate",
      nodes: [
        { id: "habitat", label: "Habitat", x: 50, y: 8, color: "#16a34a", html: "Locul unde un animal trăiește, mănâncă și își crește puii.", why: "<i>Habitat</i> este un cuvânt latinesc care înseamnă „(el) locuiește”. Naturaliștii secolului al XVIII-lea îl foloseau în cataloagele lor scrise în latină ca să arate unde trăia fiecare specie; apoi a trecut în engleză, în română și în alte limbi." },
        { id: "clima", label: "Clima", x: 18, y: 30, color: "#0ea5e9", html: "Cald, frig, uscat, ploios: ea hotărăște ce habitate există într-un loc.", why: "Lângă ecuator Soarele încălzește mai tare și plouă mult (păduri tropicale); la poli este foarte frig (gheață); lângă tropice aerul uscat creează marile deșerturi, precum Sahara." },
        { id: "adatt", label: "Adaptări", x: 82, y: 30, color: "#f59e0b", html: "Trăsături care ajută la supraviețuire: blană groasă, cocoașă, gât lung…", why: "A explicat-o <b>Charles Darwin</b> (1859): animalele cele mai potrivite mediului lor supraviețuiesc și au mai mulți pui, așa că de-a lungul a nenumărate generații speciile se schimbă. Gâtul girafei îi permite să ajungă la cele mai înalte frunze." },
        { id: "wild", label: "Wild animals", x: 50, y: 34, color: "#ef4444", html: "Animale sălbatice: lion, monkey, camel, penguin, whale…", why: "<i>Wild</i> (sălbatic) se opune lui <i>pets</i> (animale de companie) și lui <i>farm animals</i> (animale de la fermă): animalele sălbatice nu au fost domesticite de om." },
        { id: "nomi", label: "Nume și cognates", x: 18, y: 62, color: "#a855f7", html: "Multe nume seamănă cu româna: elephant, giraffe, crocodile.", why: "Aceste animale erau necunoscute vechilor popoare germanice: englezii le-au luat numele din latină și din greacă (adesea prin franceză). Animalele europene precum wolf și bear au, în schimb, nume germanice străvechi." },
        { id: "plurali", label: "Pluraluri neregulate", x: 18, y: 88, color: "#64748b", html: "wolf → wolves, mouse → mice, deer → deer, fish → fish.", why: "Sunt rămășițe din engleza veche, care forma pluralul în multe feluri diferite. Cuvintele folosite foarte des de secole au rezistat schimbărilor și și-au păstrat forma veche." },
        { id: "descr", label: "A descrie", x: 50, y: 64, color: "#2563eb", html: "It lives in… It has got… It can… It eats…", why: "Sunt aceleași întrebări pe care și le pune un om de știință: unde trăiește, cum este făcut, ce poate să facă, cu ce se hrănește. Răspunzând, construiești o adevărată fișă științifică în engleză." },
        { id: "can", label: "can / can't", x: 82, y: 62, color: "#db2777", html: "It can swim. It can't fly. Verbul de după can nu are -s.", why: "<i>Can</i> este un verb „modal”: nu ia niciodată -s și cere verbul următor la forma de bază. Vine din vechiul <i>cunnan</i>, „a ști, a cunoaște”, din care provine și <i>know</i>." },
        { id: "catena", label: "Food chain", x: 82, y: 88, color: "#14b8a6", html: "Lanț trofic: grass → zebra → lion.", why: "Animalele se împart în <i>herbivores</i> (ierbivore: eat plants), <i>carnivores</i> (carnivore: eat meat) și <i>omnivores</i> (omnivore: eat everything). Energia trece de la plante la ierbivore și apoi la carnivore." }
      ],
      edges: [
        ["habitat", "clima", "depinde de"],
        ["habitat", "wild", "găzduiește"],
        ["wild", "adatt", "au"],
        ["clima", "adatt", "selectează"],
        ["wild", "nomi", "se numesc"],
        ["nomi", "plurali", "atenție la"],
        ["wild", "descr", "se descriu"],
        ["descr", "can", "abilități cu"],
        ["descr", "catena", "ce mănâncă"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: descrie animalele",
      questions: [
        { type: "mc", q: "Care propoziție este corectă?", options: ["A penguin can flies.", "A penguin can't fly.", "A penguin can't flying."], answer: 1, explain: "După can/can't verbul rămâne la forma de bază: can't fly." },
        { type: "mc", q: "«It eats leaves» înseamnă…", options: ["Mănâncă frunze", "Mănâncă carne", "Trăiește în pădure"], answer: 0, explain: "Leaves = frunze (singular: leaf)." },
        { type: "mc", q: "Completează: «A crocodile ___ in rivers.»", options: ["live", "lives", "living"], answer: 1, explain: "A crocodile = it → lives, cu -s." },
        { type: "tf", q: "Cocoașa cămilei este plină cu apă.", answer: false, explain: "Conține grăsime, o rezervă de energie." }
      ]
    }
  ],
  glossary: [
    { t: "Wild animals", d: "Animale sălbatice, nedomestice." },
    { t: "Habitat", d: "Locul unde trăiește în mod natural un animal." },
    { t: "Savannah", d: "Savana: câmpie caldă cu puțini copaci (lei, zebre, girafe)." },
    { t: "Rainforest / jungle", d: "Pădure tropicală / junglă: caldă și foarte ploioasă." },
    { t: "Desert", d: "Deșert (atenție: dessert = desert, dulce)." },
    { t: "Polar regions", d: "Regiuni polare: Arctic (Arctica, nord) și Antarctica (sud)." },
    { t: "It has got", d: "Are (posesie): It has got a long tail." },
    { t: "Can / can't", d: "Poate, știe / nu poate, nu știe: It can swim." },
    { t: "Cognates", d: "Cuvinte asemănătoare în două limbi pentru că au aceeași origine (elephant/elefant)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Unde trăiesc zebrele?", options: ["in the savannah", "in the Arctic", "in the ocean"], answer: 0, explain: "Zebrele trăiesc în savana africană." },
      { type: "mc", q: "«Owl» înseamnă…", options: ["vultur", "bufniță", "lup"], answer: 1, explain: "Owl = bufniță; eagle = vultur; wolf = lup." },
      { type: "mc", q: "Care animal trăiește în deșert?", options: ["penguin", "camel", "dolphin"], answer: 1, explain: "Cămila (camel) trăiește în deșert." },
      { type: "text", q: "Cum se spune «rechin» în engleză?", answer: ["shark", "a shark"], explain: "Rechin = shark." },
      { type: "text", q: "Scrie pluralul lui «mouse».", answer: ["mice"], explain: "Plural neregulat: mice." },
      { type: "tf", q: "Urșii polari și pinguinii trăiesc în aceleași locuri.", answer: false, explain: "Urșii polari la Polul Nord, pinguinii în emisfera sudică." },
      { type: "tf", q: "«Rainforest» este o pădure foarte ploioasă.", answer: true, explain: "Rain = ploaie, forest = pădure." },
      { type: "mc", q: "Completează: «A monkey ___ climb trees.»", options: ["can", "cans", "is"], answer: 0, explain: "Can nu ia niciodată -s." },
      { type: "mc", q: "«It has got sharp teeth» vrea să spună…", options: ["Are dinți ascuțiți", "Are coada lungă", "Are dungi"], answer: 0, explain: "Sharp teeth = dinți ascuțiți." },
      { type: "order", q: "Pune în ordine lanțul trofic (food chain): de la cine este mâncat la cine mănâncă.", items: ["grass", "zebra", "lion"], explain: "Iarba (grass) este mâncată de zebră, care este mâncată de leu." },
      { type: "num", q: "O balenă albastră poate depăși … metri în lungime (scrie numărul rotund).", answer: 30, tol: 0, unit: "m", explain: "Poate depăși 30 de metri: este cel mai mare animal care a existat vreodată." },
      { type: "mc", q: "Traduce: «Elefanții trăiesc în Africa și în Asia.»", options: ["Elephants lives in Africa and Asia.", "Elephants live in Africa and Asia.", "Elephant live in Africa and Asia."], answer: 1, explain: "Elephants este la plural (they) → live, fără -s." }
    ]
  }
});

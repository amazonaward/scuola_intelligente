TOPIC('it', {
  id: "p4-ing-animals-habitats",
  title: "Wild animals",
  intro: "Leoni nella savana, pinguini sul ghiaccio, cammelli nel deserto… 🦁🐧🐫 Gli <b>wild animals</b> (animali selvatici) vivono in ambienti diversi chiamati <b>habitats</b>. Impariamo in inglese i nomi degli animali e dei loro habitat e a descriverli: <i>«Polar bears live in the Arctic. They can swim. They eat fish.»</i>",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Habitats: dove vivono gli animali",
      html: `<p>Un <b>habitat</b> è il luogo dove un animale vive, trova il cibo e cresce i suoi piccoli. Ecco i principali:</p>
<table>
<tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>
<tr><td>🌳 <b>forest</b></td><td>fòrest</td><td>foresta, bosco</td></tr>
<tr><td>🌴 <b>rainforest</b> / jungle</td><td>rèinforest / giàngol</td><td>foresta pluviale / giungla</td></tr>
<tr><td>🦒 <b>savannah</b></td><td>savàna</td><td>savana</td></tr>
<tr><td>🏜️ <b>desert</b></td><td>dèsert</td><td>deserto</td></tr>
<tr><td>🌊 <b>ocean</b> / sea</td><td>òuscian / sii</td><td>oceano / mare</td></tr>
<tr><td>🧊 <b>polar regions</b> (Arctic, Antarctica)</td><td>pòular rìgiuns</td><td>regioni polari (Artide, Antartide)</td></tr>
<tr><td>🏔️ <b>mountains</b></td><td>màuntens</td><td>montagne</td></tr>
<tr><td>🏞️ <b>river</b></td><td>rìver</td><td>fiume</td></tr>
</table>
<p>Per dire dove vive un animale: <b>Lions live in the savannah.</b> = I leoni vivono nella savana. Con un solo animale: <b>A camel lives in the desert.</b> (con la -s, perché è "it").</p>`
    },
    {
      type: "text",
      title: "2. Wild animals: gli animali selvatici",
      html: `<ul>
<li>🦒 <b>Savannah</b>: lion (leone), zebra (zebra), giraffe (giraffa), elephant (elefante), cheetah (ghepardo)</li>
<li>🌴 <b>Rainforest</b>: monkey (scimmia), parrot (pappagallo), snake (serpente), tiger (tigre), frog (rana)</li>
<li>🏜️ <b>Desert</b>: camel (cammello), scorpion (scorpione), lizard (lucertola)</li>
<li>🧊 <b>Polar regions</b>: polar bear (orso polare), penguin (pinguino), seal (foca)</li>
<li>🌊 <b>Ocean</b>: whale (balena), dolphin (delfino), shark (squalo), octopus (polpo)</li>
<li>🌳 <b>Forest</b>: bear (orso), wolf (lupo), deer (cervo), owl (gufo), fox (volpe)</li>
<li>🏔️ <b>Mountains</b>: eagle (aquila), goat (capra), marmot (marmotta)</li>
<li>🏞️ <b>River</b>: crocodile (coccodrillo), hippo (ippopotamo), beaver (castoro)</li>
</ul>
<p>⚠️ Plurali strani: one <b>wolf</b> → two <b>wolves</b>; one <b>deer</b> → two <b>deer</b> (uguale!); one <b>fish</b> → two <b>fish</b>; one <b>mouse</b> → two <b>mice</b>.</p>`
    },
    {
      type: "widget",
      title: "Flashcards: wild animals",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🦁 lion", back: "leone" },
          { front: "🦓 zebra", back: "zebra" },
          { front: "🐆 cheetah", back: "ghepardo" },
          { front: "🐒 monkey", back: "scimmia" },
          { front: "🦜 parrot", back: "pappagallo" },
          { front: "🐍 snake", back: "serpente" },
          { front: "🐫 camel", back: "cammello" },
          { front: "🐻‍❄️ polar bear", back: "orso polare" },
          { front: "🐧 penguin", back: "pinguino" },
          { front: "🐋 whale", back: "balena" },
          { front: "🦈 shark", back: "squalo" },
          { front: "🐺 wolf", back: "lupo" },
          { front: "🦉 owl", back: "gufo" },
          { front: "🦅 eagle", back: "aquila" },
          { front: "🐊 crocodile", back: "coccodrillo" },
          { front: "🦛 hippo", back: "ippopotamo" }
        ]
      },
      caption: "Leggi la parola ad alta voce e prova a ricordare la traduzione prima di girare la carta."
    },
    {
      type: "widget",
      title: "Who lives where? Chi vive dove?",
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
      caption: "Tocca un animale e poi il suo habitat."
    },
    {
      type: "quiz",
      title: "Mini-quiz: animali e habitat",
      questions: [
        { type: "mc", q: "«Desert» significa…", options: ["dessert (dolce)", "deserto", "foresta"], answer: 1, explain: "Desert (una s) = deserto. Dessert (due s) = il dolce!" },
        { type: "mc", q: "Dove vive il pinguino?", options: ["in the desert", "in Antarctica", "in the rainforest"], answer: 1, explain: "I pinguini vivono soprattutto nell'emisfero sud, in Antartide e sulle coste fredde." },
        { type: "text", q: "Come si dice «balena» in inglese?", answer: ["whale", "a whale"], explain: "Balena = whale." },
        { type: "mc", q: "Il plurale di «wolf» è…", options: ["wolfs", "wolves", "wolf"], answer: 1, explain: "Plurale irregolare: wolf → wolves." }
      ]
    },
    {
      type: "text",
      title: "3. Descrivere un animale",
      html: `<p>Con poche frasi puoi descrivere qualsiasi animale:</p>
<ul>
<li>🏠 <b>Dove vive</b>: <i>It lives in the rainforest.</i></li>
<li>📏 <b>Com'è</b>: <i>It's big / small / fast / slow / dangerous / beautiful.</i></li>
<li>🎨 <b>Che cosa ha</b>: <i>It has got</i> (ha) <i>a long neck / big ears / sharp teeth / stripes / a long tail.</i></li>
<li>💪 <b>Che cosa sa fare</b>: <i>It <b>can</b> run fast. It <b>can</b> swim. It <b>can't</b> fly.</i> (can = sa / può; can't = non sa / non può)</li>
<li>🍖 <b>Che cosa mangia</b>: <i>It eats meat</i> (carne) / <i>grass</i> (erba) / <i>leaves</i> (foglie) / <i>fish</i> (pesce) / <i>insects</i> (insetti).</li>
</ul>
<p>Con <b>can</b> il verbo dopo resta sempre uguale, anche con he/she/it: <i>It can swim</i> (non "it can swims").</p>`
    },
    {
      type: "svg",
      title: "Identikit della giraffa",
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
<text x="300" y="305" font-size="16" fill="#3f6212" text-anchor="middle">È l'animale più alto del mondo: fino a circa 5,5 metri!</text>
</svg>`,
      caption: "Con 5–6 frasi semplici hai descritto un animale: dove vive, com'è, cosa ha, cosa mangia, cosa sa fare."
    },
    {
      type: "3d",
      title: "Il giro del mondo degli animali",
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
      caption: "Ruota il globo e trova gli habitat. Guarda: gli orsi polari (Artide, a nord) e i pinguini (Antartide, a sud) vivono ai lati opposti della Terra!"
    },
    {
      type: "example",
      title: "Esempio pratico: indovina chi sono! (Animal riddles)",
      html: `<p>Leggi gli indovinelli e prova a rispondere in inglese:</p>
<ol>
<li><i>«I live in the desert. I've got one or two humps. I can walk for days without water. What am I?»</i> → 🐫 <b>A camel!</b></li>
<li><i>«I live in the ocean. I'm very, very big. I'm not a fish: I breathe air. What am I?»</i> → 🐋 <b>A whale!</b></li>
<li><i>«I live in the rainforest. I'm green. I can jump and I eat insects. What am I?»</i> → 🐸 <b>A frog!</b></li>
</ol>
<p>Ora inventa tu un indovinello per i compagni con le frasi <b>I live in… / I've got… / I can… / I eat…</b></p>`
    },
    {
      type: "example",
      title: "Esempio pratico: la scheda per la classe",
      html: `<p>Marco ha preparato in inglese una scheda sul suo animale preferito:</p>
<p><b>My favourite animal: the cheetah 🐆</b><br>
<i>The cheetah lives in the savannah in Africa. It's yellow with black spots. It has got long legs and a long tail. It eats meat. It can run very fast: it's the fastest animal on land! It can't climb trees very well. I love cheetahs!</i></p>
<p>Nota: <b>fast</b> (veloce) → <b>the fastest</b> (il più veloce). Lo stesso con <b>big → the biggest</b>, <b>tall → the tallest</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Orsi polari e pinguini non si incontrano mai",
      html: `<p>Nei cartoni animati spesso orsi polari e pinguini giocano insieme… ma nella realtà <b>non si incontrano mai</b>! Gli <b>orsi polari</b> vivono al <b>Polo Nord</b> (Artide), mentre quasi tutti i <b>pinguini</b> vivono nell'<b>emisfero sud</b>, soprattutto intorno al <b>Polo Sud</b> (Antartide). Tra loro ci sono circa 20.000 km! 🌍</p>
<p>Il nome Artide viene dal greco <i>arktos</i>, "orso" (per la costellazione dell'Orsa), e Antartide significa "opposto all'Artide".</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Record animali",
      html: `<ul>
<li>🐋 La <b>blue whale</b> (balenottera azzurra) è l'animale più grande mai esistito, più grande di qualsiasi dinosauro: può superare i <b>30 metri</b> di lunghezza!</li>
<li>🐆 Il <b>cheetah</b> (ghepardo) è l'animale terrestre più veloce: in uno scatto breve arriva a circa <b>100–110 km/h</b>.</li>
<li>🐫 La gobba del cammello <b>non contiene acqua</b>, ma <b>grasso</b>: è una riserva di energia per i lunghi viaggi nel deserto.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Habitat: forest, rainforest/jungle, savannah, desert, ocean, polar regions, mountains, river.</li>
<li><b>They live in…</b> / <b>It lives in…</b> (con it la -s!).</li>
<li><b>It has got</b> (ha) · <b>It can</b> (sa) / <b>It can't</b> (non sa) + verbo senza -s.</li>
<li><b>It eats</b> meat / grass / leaves / fish / insects.</li>
<li>Plurali irregolari: wolf → wolves, mouse → mice, deer → deer, fish → fish.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per imparare gli animali",
      intro: "Le parole si ricordano meglio se le colleghi a qualcosa. Ecco quattro strade diverse: le parole \"cugine\" dell'italiano, le parole composte, il globo 3D e il gioco dell'identikit.",
      tabs: [
        {
          label: "👯 Parole cugine",
          html: `<p>Molti nomi di animali in inglese <b>somigliano all'italiano</b>, perché vengono dal latino o dal greco. Si chiamano <b>cognates</b> (parole affini):</p>
<ul>
<li>elephant → elefante · giraffe → giraffa · zebra → zebra</li>
<li>crocodile → coccodrillo · hippopotamus (hippo) → ippopotamo</li>
<li>tiger → tigre · lion → leone · penguin → pinguino</li>
<li>camel → cammello · dolphin → delfino · scorpion → scorpione</li>
</ul>
<p>Altri invece sono di origine germanica e sono diversi: <b>wolf</b> (lupo), <b>bear</b> (orso), <b>fox</b> (volpe), <b>owl</b> (gufo). Ma guarda il tedesco: Wolf, Bär, Fuchs, Eule… quasi uguali all'inglese!</p>`
        },
        {
          label: "🧩 Parole composte",
          html: `<p>L'inglese costruisce tanti nomi di animali <b>incastrando due parole</b>, come i LEGO. Se conosci i pezzi, capisci il nome!</p>
<table>
<tr><th>Pezzo 1</th><th>Pezzo 2</th><th>Animale</th></tr>
<tr><td>polar (polare)</td><td>bear (orso)</td><td>🐻‍❄️ polar bear</td></tr>
<tr><td>star (stella)</td><td>fish (pesce)</td><td>⭐ starfish = stella marina</td></tr>
<tr><td>jelly (gelatina)</td><td>fish (pesce)</td><td>🪼 jellyfish = medusa</td></tr>
<tr><td>sea (mare)</td><td>horse (cavallo)</td><td>🌊🐴 seahorse = cavalluccio marino</td></tr>
<tr><td>rain (pioggia)</td><td>forest (foresta)</td><td>🌧️🌳 rainforest = foresta pluviale</td></tr>
</table>
<p>Curioso: <b>hippopotamus</b> in greco vuol dire proprio "cavallo di fiume" (hippos = cavallo, potamos = fiume)!</p>`
        },
        {
          label: "🌍 Il globo 3D",
          html: `<p>Ruota il globo: ogni punto è un habitat. Prova a dire ad alta voce una frase per ognuno, per esempio: <i>«Camels live in the Sahara Desert, in Africa.»</i> Nota come i deserti stanno vicino ai tropici, le foreste pluviali vicino all'equatore e i ghiacci ai poli: il clima decide chi può vivere dove!</p>`,
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
          label: "🕵️ Gioco dell'identikit",
          html: `<p>Abbina ogni descrizione all'animale giusto. Leggi bene le parole chiave: <i>neck</i> (collo), <i>stripes</i> (strisce), <i>humps</i> (gobbe), <i>fly</i> (volare).</p>`,
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
      title: "Mappa: animali e habitat",
      nodes: [
        { id: "habitat", label: "Habitat", x: 50, y: 8, color: "#16a34a", html: "Il luogo dove un animale vive, mangia e cresce i piccoli.", why: "<i>Habitat</i> è una parola latina che significa \"(egli) abita\". I naturalisti del Settecento la usavano nei loro cataloghi scritti in latino per indicare dove viveva ogni specie; poi è passata all'inglese e all'italiano." },
        { id: "clima", label: "Clima", x: 18, y: 30, color: "#0ea5e9", html: "Caldo, freddo, secco, piovoso: decide quali habitat esistono in un luogo.", why: "Vicino all'equatore il Sole scalda di più e piove molto (foreste pluviali); ai poli fa freddissimo (ghiacci); vicino ai tropici l'aria secca crea i grandi deserti come il Sahara." },
        { id: "adatt", label: "Adattamenti", x: 82, y: 30, color: "#f59e0b", html: "Caratteristiche che aiutano a sopravvivere: pelliccia spessa, gobba, collo lungo…", why: "Lo spiegò <b>Charles Darwin</b> (1859): gli animali più adatti al loro ambiente sopravvivono e hanno più piccoli, così nel corso di moltissime generazioni le specie cambiano. Il collo della giraffa le permette di raggiungere le foglie più alte." },
        { id: "wild", label: "Wild animals", x: 50, y: 34, color: "#ef4444", html: "Animali selvatici: lion, monkey, camel, penguin, whale…", why: "<i>Wild</i> (selvatico) si oppone a <i>pets</i> (animali domestici) e <i>farm animals</i> (della fattoria): gli animali selvatici non sono stati addomesticati dall'uomo." },
        { id: "nomi", label: "Nomi e cognates", x: 18, y: 62, color: "#a855f7", html: "Molti nomi somigliano all'italiano: elephant, giraffe, crocodile.", why: "Questi animali erano sconosciuti agli antichi popoli germanici: gli inglesi presero i loro nomi dal latino e dal greco (spesso attraverso il francese). Gli animali europei come wolf e bear hanno invece nomi germanici antichi." },
        { id: "plurali", label: "Plurali irregolari", x: 18, y: 88, color: "#64748b", html: "wolf → wolves, mouse → mice, deer → deer, fish → fish.", why: "Sono resti dell'inglese antico, che formava i plurali in molti modi diversi. Le parole usatissime da secoli hanno resistito ai cambiamenti e hanno conservato la forma antica." },
        { id: "descr", label: "Descrivere", x: 50, y: 64, color: "#2563eb", html: "It lives in… It has got… It can… It eats…", why: "Sono le stesse domande che si fa uno scienziato: dove vive, com'è fatto, cosa sa fare, di che cosa si nutre. Rispondendo, costruisci una vera scheda scientifica in inglese." },
        { id: "can", label: "can / can't", x: 82, y: 62, color: "#db2777", html: "It can swim. It can't fly. Verbo dopo can senza -s.", why: "<i>Can</i> è un verbo \"modale\": non prende mai la -s e vuole il verbo dopo nella forma base. Viene dall'antico <i>cunnan</i>, \"sapere, conoscere\", da cui deriva anche <i>know</i>." },
        { id: "catena", label: "Food chain", x: 82, y: 88, color: "#14b8a6", html: "Catena alimentare: grass → zebra → lion.", why: "Gli animali si dividono in <i>herbivores</i> (erbivori: eat plants), <i>carnivores</i> (carnivori: eat meat) e <i>omnivores</i> (onnivori: eat everything). L'energia passa dalle piante agli erbivori e poi ai carnivori." }
      ],
      edges: [
        ["habitat", "clima", "dipende dal"],
        ["habitat", "wild", "ospita"],
        ["wild", "adatt", "hanno"],
        ["clima", "adatt", "seleziona"],
        ["wild", "nomi", "si chiamano"],
        ["nomi", "plurali", "attenzione ai"],
        ["wild", "descr", "si descrivono"],
        ["descr", "can", "abilità con"],
        ["descr", "catena", "cosa mangiano"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: descrivere gli animali",
      questions: [
        { type: "mc", q: "Quale frase è corretta?", options: ["A penguin can flies.", "A penguin can't fly.", "A penguin can't flying."], answer: 1, explain: "Dopo can/can't il verbo resta nella forma base: can't fly." },
        { type: "mc", q: "«It eats leaves» significa…", options: ["Mangia foglie", "Mangia carne", "Vive nella foresta"], answer: 0, explain: "Leaves = foglie (singolare: leaf)." },
        { type: "mc", q: "Completa: «A crocodile ___ in rivers.»", options: ["live", "lives", "living"], answer: 1, explain: "A crocodile = it → lives, con la -s." },
        { type: "tf", q: "La gobba del cammello è piena d'acqua.", answer: false, explain: "Contiene grasso, una riserva di energia." }
      ]
    }
  ],
  glossary: [
    { t: "Wild animals", d: "Animali selvatici, non domestici." },
    { t: "Habitat", d: "Il luogo dove un animale vive naturalmente." },
    { t: "Savannah", d: "Savana: prateria calda con pochi alberi (leoni, zebre, giraffe)." },
    { t: "Rainforest / jungle", d: "Foresta pluviale / giungla: calda e piovosissima." },
    { t: "Desert", d: "Deserto (attenzione: dessert = dolce)." },
    { t: "Polar regions", d: "Regioni polari: Arctic (Artide, nord) e Antarctica (Antartide, sud)." },
    { t: "It has got", d: "Ha (possesso): It has got a long tail." },
    { t: "Can / can't", d: "Sa, può / non sa, non può: It can swim." },
    { t: "Cognates", d: "Parole simili in due lingue perché hanno la stessa origine (elephant/elefante)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Dove vivono le zebre?", options: ["in the savannah", "in the Arctic", "in the ocean"], answer: 0, explain: "Le zebre vivono nella savana africana." },
      { type: "mc", q: "«Owl» significa…", options: ["aquila", "gufo", "lupo"], answer: 1, explain: "Owl = gufo; eagle = aquila; wolf = lupo." },
      { type: "mc", q: "Quale animale vive nel deserto?", options: ["penguin", "camel", "dolphin"], answer: 1, explain: "Il cammello (camel) vive nel deserto." },
      { type: "text", q: "Come si dice «squalo» in inglese?", answer: ["shark", "a shark"], explain: "Squalo = shark." },
      { type: "text", q: "Scrivi il plurale di «mouse».", answer: ["mice"], explain: "Plurale irregolare: mice." },
      { type: "tf", q: "Gli orsi polari e i pinguini vivono negli stessi luoghi.", answer: false, explain: "Orsi polari al Polo Nord, pinguini nell'emisfero sud." },
      { type: "tf", q: "«Rainforest» è una foresta molto piovosa.", answer: true, explain: "Rain = pioggia, forest = foresta." },
      { type: "mc", q: "Completa: «A monkey ___ climb trees.»", options: ["can", "cans", "is"], answer: 0, explain: "Can non prende mai la -s." },
      { type: "mc", q: "«It has got sharp teeth» vuol dire…", options: ["Ha i denti aguzzi", "Ha la coda lunga", "Ha le strisce"], answer: 0, explain: "Sharp teeth = denti aguzzi." },
      { type: "order", q: "Ordina la catena alimentare (food chain): da chi viene mangiato a chi mangia.", items: ["grass", "zebra", "lion"], explain: "L'erba (grass) è mangiata dalla zebra, che è mangiata dal leone." },
      { type: "num", q: "Una balenottera azzurra può superare i … metri di lunghezza (scrivi il numero tondo).", answer: 30, tol: 0, unit: "m", explain: "Può superare i 30 metri: è l'animale più grande mai esistito." },
      { type: "mc", q: "Traduci: «Gli elefanti vivono in Africa e in Asia.»", options: ["Elephants lives in Africa and Asia.", "Elephants live in Africa and Asia.", "Elephant live in Africa and Asia."], answer: 1, explain: "Elephants è plurale (they) → live, senza -s." }
    ]
  }
});

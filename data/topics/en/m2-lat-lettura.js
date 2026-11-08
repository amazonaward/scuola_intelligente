TOPIC('en', {
  id: "m2-lat-lettura",
  title: "Latin: reading and pronouncing",
  intro: "Latin was the language of ancient Rome and, for centuries, of scientists, lawyers and the Church. It is the \"mother\" of Italian and a great deal of English too: that is why reading it is much easier than you think! Let's learn the <b>alphabet</b>, the rules of <b>pronunciation</b> (the one used in Italy and the \"restored\" one of the ancient Romans), the <b>stress</b> and the first words.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "The Latin alphabet",
      html: `<p>The Romans took the alphabet from the <b>Etruscans</b>, who had taken it from the <b>Greeks</b>. In the classical age (1st century BC) it had <b>23 letters</b>:</p>
<p style="text-align:center;font-size:1.3em;letter-spacing:3px"><b>A B C D E F G H I K L M N O P Q R S T V X Y Z</b></p>
<ul>
<li><b>J, U and W are missing</b>. The letter <b>I</b> counted both as a vowel (<i>i</i>) and as a consonant (<i>iam</i> = "already", read <i>yam</i>); the letter <b>V</b> counted both as <i>u</i> and as <i>v</i>. The U/V and I/J distinction was introduced only in the <b>Renaissance</b>; today books write <i>u</i> for the vowel and <i>v</i> for the consonant.</li>
<li><b>K</b> was very rare (e.g. <i>Kalendae</i>, the first day of the month).</li>
<li><b>Y</b> and <b>Z</b> were added at the end of the alphabet to write Greek words (<i>zephyrus</i>, the wind).</li>
<li>The Romans wrote <b>only in capital letters</b>, often with no spaces between words (or with a dot at mid-height). Lower-case letters were born in the Middle Ages.</li>
</ul>`
    },
    {
      type: "svg",
      title: "A Roman inscription",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fef3c7"/>
<rect x="40" y="30" width="520" height="200" rx="6" fill="#e7e5e4" stroke="#78716c" stroke-width="6"/>
<rect x="55" y="45" width="490" height="170" fill="#f5f5f4" stroke="#a8a29e" stroke-width="2"/>
<text x="300" y="105" font-size="34" font-family="serif" font-weight="bold" fill="#7f1d1d" text-anchor="middle" letter-spacing="3">SENATVS·POPVLVSQVE</text>
<text x="300" y="160" font-size="34" font-family="serif" font-weight="bold" fill="#7f1d1d" text-anchor="middle" letter-spacing="3">ROMANVS</text>
<text x="300" y="200" font-size="18" font-family="serif" fill="#57534e" text-anchor="middle">S · P · Q · R</text>
<text x="300" y="262" font-size="17" fill="#1f2937" text-anchor="middle">"The Senate and the Roman People": V instead of U, all capitals,</text>
<text x="300" y="285" font-size="17" fill="#1f2937" text-anchor="middle">and the dot (interpunct) to separate the words</text>
</svg>`,
      caption: "The abbreviation SPQR can still be seen today on the manhole covers and buses of Rome."
    },
    {
      type: "text",
      title: "School (or Church) pronunciation",
      html: `<p>In Italy, school uses the <b>scholastic</b> pronunciation, also called <b>ecclesiastical</b> because it is the Church's. It is very similar to Italian: <b>you read it as it is written</b>, with a few special rules. (Vowels are read as in Italian: a = "ah", e = "eh", i = "ee", o = "oh", u = "oo".)</p>
<table>
<tr><th>Written</th><th>Read</th><th>Example</th></tr>
<tr><td><b>ae</b>, <b>oe</b></td><td><b>e</b></td><td><i>rosae</i> → "roseh", <i>poena</i> → "pena", <i>caelum</i> → "chelum"</td></tr>
<tr><td><b>ti</b> + vowel</td><td><b>tsi</b></td><td><i>gratia</i> → "gratsia", <i>natio</i> → "natsio"</td></tr>
<tr><td>…but after <b>s, t, x</b>: ti</td><td><b>ti</b></td><td><i>hostia</i> → "ostia", <i>mixtio</i> → "mixtio"</td></tr>
<tr><td><b>ph</b></td><td><b>f</b></td><td><i>philosophia</i> → "filosofia"</td></tr>
<tr><td><b>ch</b>, <b>th</b>, <b>rh</b></td><td><b>k</b>, <b>t</b>, <b>r</b></td><td><i>chorus</i> → "korus", <i>theatrum</i> → "teatrum"</td></tr>
<tr><td><b>h</b></td><td>silent</td><td><i>homo</i> → "omo"</td></tr>
<tr><td><b>y</b></td><td><b>i</b></td><td><i>lyra</i> → "lira"</td></tr>
<tr><td><b>x</b></td><td><b>cs</b></td><td><i>rex</i> → "recs"</td></tr>
<tr><td><b>c</b>, <b>g</b> before e, i (also ae, oe)</td><td>soft, like <i>ch</i> in "church" and <i>j</i> in "jam"</td><td><i>Cicero</i> → "CHEEchero", <i>Caesar</i> → "CHEsar", <i>genus</i> → "JEnus"</td></tr>
</table>
<p>Everything else is read as in Italian: <i>aqua</i>, <i>schola</i> (<b>sch</b> → "sk": "SKOla"), <i>agnus</i> (gn like "ny" in "canyon").</p>`
    },
    {
      type: "text",
      title: "The restored pronunciation (the Romans' own)",
      html: `<p>By comparing inscriptions, words that passed into Greek and the spelling mistakes of the ancients, scholars have reconstructed how the educated Romans of <b>Cicero</b> and <b>Caesar</b> really spoke. This is the <b>restored</b> pronunciation, used in many schools in the United Kingdom, Germany and the United States.</p>
<table>
<tr><th>Written</th><th>Scholastic</th><th>Restored</th></tr>
<tr><td>Cicero</td><td>"CHEEchero"</td><td>"KEEkero"</td></tr>
<tr><td>Caesar</td><td>"CHEsar"</td><td>"KYsar"</td></tr>
<tr><td>veni, vidi, vici</td><td>"VEni, VIdi, VIchi"</td><td>"WEni, WIdi, WIki"</td></tr>
<tr><td>gratia</td><td>"GRAtsia"</td><td>"GRAtia"</td></tr>
</table>
<p>Proof? The Greeks wrote Cicero's name <b>Κικέρων</b> (Kikéron), and the Latin word <i>Caesar</i> became <b>Kaiser</b> in German (emperor). Both pronunciations are correct: at school in Italy the scholastic one is used.</p>`
    },
    {
      type: "widget",
      title: "Hard C or soft C? (scholastic pronunciation)",
      widget: "classify",
      options: {
        groups: ["Hard C (k sound)", "Soft C (like \"ch\" in \"cheese\")"],
        items: [
          ["corpus", 0], ["cura", 0], ["clamor", 0], ["chorus", 0],
          ["Cicero", 1], ["caelum", 1], ["cena", 1], ["Caesar", 1], ["civis", 1]
        ]
      },
      caption: "Remember: ae is read e, so \"caelum\" and \"Caesar\" have a soft c in the scholastic pronunciation."
    },
    {
      type: "quiz",
      title: "Mini-quiz: alphabet and pronunciation",
      questions: [
        { type: "mc", q: "Which letter did NOT exist in the classical Latin alphabet?", options: ["K", "J", "X"], answer: 1, explain: "J was introduced only in the Renaissance to mark the consonant i." },
        { type: "mc", q: "How is \"rosae\" read in the scholastic pronunciation?", options: ["ro-sa-e", "roseh", "ro-sigh"], answer: 1, explain: "The diphthong ae is pronounced e." },
        { type: "tf", q: "In the scholastic pronunciation \"gratia\" is read \"gratsia\".", answer: true, explain: "ti + vowel (not after s, t, x) is read tsi." }
      ]
    },
    {
      type: "text",
      title: "Where the stress falls",
      html: `<p>In Latin the stress is not written, but there are precise rules:</p>
<ol>
<li><b>No word</b> of two or more syllables is stressed on the <b>last</b> syllable.</li>
<li>Words of <b>two syllables</b>: the stress goes on the <b>second-to-last</b> (that is, on the first): <i>ró-sa</i>, <i>á-qua</i>, <i>ví-ta</i>.</li>
<li>Words of <b>three or more syllables</b> (<b>the penultimate rule</b>): if the second-to-last syllable is <b>long</b>, the stress falls there; if it is <b>short</b>, it goes on the <b>third-to-last</b>.
<ul>
<li><i>a-mī-cus</i> (ī long) → <b>amícus</b></li>
<li><i>dó-mĭ-nus</i> (ĭ short) → <b>dóminus</b></li>
</ul></li>
</ol>
<p>How do you know whether a syllable is long? In the dictionary, long vowels carry the sign <b>ā</b> (macron) and short ones <b>ă</b>. Also, a syllable is long "<b>by position</b>" if the vowel is followed by <b>two consonants</b>: <i>pu-él-la</i>, <i>ma-gís-ter</i>.</p>`
    },
    {
      type: "example",
      title: "Worked example: let's read Julius Caesar",
      html: `<p>The first words of the <i>De bello Gallico</i> (The Gallic War), written by <b>Julius Caesar</b> around 50 BC:</p>
<p style="text-align:center"><b><i>Gallia est omnis divisa in partes tres.</i></b></p>
<ul>
<li>Scholastic reading: "<b>GAL</b>-lia est <b>OM</b>-nis di-<b>VI</b>-sa in <b>PAR</b>-tes tres".</li>
<li>Translation: "Gaul, taken as a whole, is divided into three parts".</li>
</ul>
<p>Did you notice how many words you recognise? <i>Gallia</i> → Gaul, <i>divisa</i> → divided, <i>partes</i> → parts, <i>tres</i> → three.</p>`
    },
    {
      type: "example",
      title: "Worked example: the first words",
      html: `<table>
<tr><th>Latin</th><th>Read</th><th>Means</th><th>English words descended from it</th></tr>
<tr><td>rosa</td><td>ró-sa</td><td>rose</td><td>rosary, rosette</td></tr>
<tr><td>puella</td><td>pu-él-la</td><td>girl</td><td>puerile (from <i>puer</i>, boy)</td></tr>
<tr><td>aqua</td><td>á-qua</td><td>water</td><td>aquarium, aqueduct</td></tr>
<tr><td>schola</td><td>skó-la</td><td>school</td><td>scholastic</td></tr>
<tr><td>magister</td><td>ma-gís-ter</td><td>teacher</td><td>magisterial</td></tr>
<tr><td>caelum</td><td>cé-lum</td><td>sky</td><td>celestial</td></tr>
<tr><td>amicus</td><td>a-mí-cus</td><td>friend</td><td>amicable</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Flashcards: first Latin words",
      widget: "flashcards",
      options: { cards: [
        { front: "aqua", back: "water (read \"AHqua\")" },
        { front: "terra", back: "earth, land" },
        { front: "puella", back: "girl (pu-él-la)" },
        { front: "schola", back: "school (read \"SKOla\")" },
        { front: "caelum", back: "sky (read \"CHElum\")" },
        { front: "vita", back: "life" },
        { front: "magister", back: "teacher (ma-gís-ter)" },
        { front: "Salve!", back: "Hello! / Greetings!" }
      ] },
      caption: "Read the word aloud, try to guess what it means and then flip the card."
    },
    {
      type: "curiosity",
      title: "Did you know…? The cash machine in Latin",
      html: `<p>Latin is still the official language of the <b>Holy See</b>. In Vatican City the cash machines offer, among the available languages, <b>Latin</b> too! The message for inserting your card is: <i>Inserito scidulam quaeso ut faciundam cognoscas rationem</i> ("Please insert your card to find out which operation to carry out").</p>
<p>There is even a Wikipedia in Latin, the <i>Vicipaedia</i>, with more than 100,000 entries.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? You use it every day",
      html: `<p>You speak Latin without knowing it:</p>
<ul>
<li><b>video</b> = "I see", <b>audio</b> = "I hear";</li>
<li><b>bis</b> = "twice", <b>ultimatum</b>, <b>curriculum</b> ("little race"), <b>referendum</b> ("that which must be referred");</li>
<li><b>p.s.</b> = <i>post scriptum</i> ("written after"), <b>a.m. / p.m.</b> = <i>ante / post meridiem</i> ("before / after midday");</li>
<li>the motto of the European Union: <i>In varietate concordia</i> ("United in diversity").</li>
</ul>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Classical alphabet: 23 letters, without J, U, W; V = u/v, I = i/j.</li>
<li>Scholastic pronunciation: <b>ae, oe → e</b>; <b>ti + vowel → tsi</b> (not after s, t, x); <b>ph → f</b>; <b>ch → k</b>; silent <b>h</b>; <b>y → i</b>.</li>
<li>Restored pronunciation: c and g always hard, v = w, ae = "eye".</li>
<li>Stress never on the last syllable; two-syllable words on the second-to-last; longer words: second-to-last if long, otherwise third-to-last.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to learn to read Latin",
      intro: "Everyone learns in their own way: some prefer listening, some comparing languages, some thinking about music.",
      tabs: [
        {
          label: "🇬🇧🇩🇪 How they read it abroad",
          html: `<p>An English or German student reads Latin with the <b>restored</b> pronunciation. Try it yourself with these rules:</p>
<ul>
<li><b>C</b> always like <b>k</b>: <i>Cicero</i> = "KEEkero".</li>
<li><b>G</b> always hard: <i>genus</i> = "GHEnus".</li>
<li><b>V</b> like the English <b>w</b>: <i>vinum</i> = "WEEnum".</li>
<li><b>AE</b> = "eye", <b>OE</b> = "oy": <i>Caesar</i> = "KYsar".</li>
</ul>
<p>If one day you listen to a video of an Oxford professor reading Virgil, now you will understand why it sounds so different!</p>`
        },
        {
          label: "🎵 Long and short like notes",
          html: `<p>The Romans felt the difference between <b>long</b> and <b>short</b> vowels the way in music you feel the difference between a <b>half note</b> and a <b>quarter note</b>: a long one lasts twice as long as a short one. Latin poetry was built on this rhythm, not on rhymes.</p>
<p>Try "tapping" the rhythm of the word <i>amīcus</i>: ta-<b>TAA</b>-ta. The stress goes on the long note!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f5f3ff"/>
<line x1="40" y1="80" x2="560" y2="80" stroke="#6b21a8" stroke-width="2"/>
<line x1="40" y1="100" x2="560" y2="100" stroke="#6b21a8" stroke-width="2"/>
<line x1="40" y1="120" x2="560" y2="120" stroke="#6b21a8" stroke-width="2"/>
<line x1="40" y1="140" x2="560" y2="140" stroke="#6b21a8" stroke-width="2"/>
<line x1="40" y1="160" x2="560" y2="160" stroke="#6b21a8" stroke-width="2"/>
<ellipse cx="130" cy="120" rx="14" ry="10" fill="#6b21a8"/>
<line x1="143" y1="120" x2="143" y2="70" stroke="#6b21a8" stroke-width="3"/>
<ellipse cx="300" cy="120" rx="16" ry="11" fill="none" stroke="#6b21a8" stroke-width="4"/>
<line x1="315" y1="120" x2="315" y2="70" stroke="#6b21a8" stroke-width="3"/>
<ellipse cx="470" cy="120" rx="14" ry="10" fill="#6b21a8"/>
<line x1="483" y1="120" x2="483" y2="70" stroke="#6b21a8" stroke-width="3"/>
<text x="130" y="200" font-size="24" fill="#1f2937" text-anchor="middle">a</text>
<text x="300" y="200" font-size="28" font-weight="bold" fill="#dc2626" text-anchor="middle">MĪ</text>
<text x="470" y="200" font-size="24" fill="#1f2937" text-anchor="middle">cus</text>
<text x="130" y="228" font-size="15" fill="#4c1d95" text-anchor="middle">short</text>
<text x="300" y="228" font-size="15" fill="#4c1d95" text-anchor="middle">long = stress</text>
<text x="470" y="228" font-size="15" fill="#4c1d95" text-anchor="middle">last: never stressed</text>
</svg>`
        },
        {
          label: "🇮🇹 The Italian trick",
          html: `<p>Often the <b>stress of the Italian word</b> matches the Latin one, because words changed slowly while keeping their strongest syllable (and many English words came through French or straight from Latin in the same way):</p>
<ul>
<li><i>amícus</i> → a<b>mí</b>co (Italian), a<b>mi</b>cable</li>
<li><i>fenéstra</i> → fi<b>né</b>stra (Italian "window")</li>
<li><i>dóminus</i> → <b>dón</b>no (lord, as in "don Abbondio"), <b>dó</b>minate</li>
<li><i>pópulus</i> → <b>pó</b>polo (Italian "people"), <b>pop</b>ulation</li>
<li><i>fábula</i> → <b>fá</b>vola (Italian "fairy tale"), <b>fa</b>ble</li>
</ul>
<p>When you are in doubt, think of the Italian (or English) word that comes from it: very often it hints where to put the stress. It is not 100% reliable, but it works very many times!</p>`
        },
        {
          label: "🎮 Match the famous mottoes",
          html: `<p>Many Latin phrases are still used today. Match each motto to its meaning.</p>`,
          widget: "match",
          options: { pairs: [
            ["Veni, vidi, vici", "I came, I saw, I conquered (Caesar)"],
            ["Carpe diem", "Seize the day (Horace)"],
            ["Errare humanum est", "To err is human"],
            ["Mens sana in corpore sano", "A healthy mind in a healthy body (Juvenal)"],
            ["Repetita iuvant", "Repeated things help"]
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: reading Latin",
      nodes: [
        { id: "latino", label: "Lingua latina", x: 50, y: 7, color: "#7f1d1d", html: "Language of ancient Latium and later of the Roman Empire.", why: "It is an Indo-European language, a relative of Greek, Sanskrit and the Germanic and Slavic languages. It was born in Latium (Latium, hence \"Latin\") and spread with Rome's conquests." },
        { id: "alfabeto", label: "Alphabet", x: 20, y: 28, color: "#b45309", html: "23 letters in the classical age, capitals only.", why: "It comes from the Etruscan alphabet, which in turn came from a western Greek alphabet brought to Italy by the Greek colonists of Cumae (8th century BC). The Greeks had taken it from the Phoenicians." },
        { id: "uv", label: "U/V, I/J", x: 8, y: 52, color: "#f59e0b", html: "One single letter for vowel and consonant.", why: "The Romans did not feel the need to tell them apart. Around 1500 printers and the French scholar Pierre de la Ramée spread the use of separate letters." },
        { id: "pronuncia", label: "Pronunciation", x: 50, y: 30, color: "#2563eb", html: "Two systems: scholastic and restored.", why: "Latin kept being spoken (in church, in universities) for centuries, and every country read it with the sounds of its own language. The Italian pronunciation became the Church's." },
        { id: "scolastica", label: "Scholastic (ecclesiastical)", x: 35, y: 55, color: "#3b82f6", html: "ae → e, ti → tsi, soft c before e/i.", why: "It reflects the evolution of spoken Latin in late antiquity: already from the 3rd–4th century AD the diphthong ae was pronounced e and the c before e/i had become \"softened\", as in the Italian that grew out of it." },
        { id: "restituta", label: "Restored", x: 65, y: 55, color: "#0ea5e9", html: "c and g always hard, v = w, ae = \"eye\".", why: "Reconstructed by philologists (between 1800 and 1900) by studying Greek transcriptions (Kikéron), loanwords in other languages (Kaiser) and scribes' mistakes." },
        { id: "accento", label: "Stress", x: 80, y: 28, color: "#16a34a", html: "Never on the last syllable; the penultimate rule.", why: "Latin distinguished long and short vowels: the stress was \"attracted\" by the long syllable near the end of the word. Ancient grammarians such as Quintilian describe it." },
        { id: "quantita", label: "Long and short syllables", x: 90, y: 55, color: "#22c55e", html: "Long by nature (ā) or by position (two consonants).", why: "The length of vowels changed the meaning: <i>malum</i> with a short a = \"evil\", <i>mālum</i> with a long a = \"apple\". It was the basis of the rhythm of poetry (metre)." },
        { id: "parole", label: "Words alive today", x: 50, y: 85, color: "#a855f7", html: "video, audio, curriculum, SPQR, mottoes.", why: "For centuries Latin remained the language of culture in Europe: scientists such as Galileo (in part), Newton and Linnaeus wrote in Latin. That is why so many technical and scientific words are Latin." }
      ],
      edges: [
        ["latino", "alfabeto", "is written with"],
        ["alfabeto", "uv", "special feature"],
        ["latino", "pronuncia", "is read with"],
        ["pronuncia", "scolastica", "in Italy"],
        ["pronuncia", "restituta", "abroad"],
        ["latino", "accento", "rules"],
        ["accento", "quantita", "depends on"],
        ["latino", "parole", "survives in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: the stress",
      questions: [
        { type: "mc", q: "Where does the stress fall in \"rosa\"?", options: ["ro-SA", "RO-sa", "it has no stress"], answer: 1, explain: "Two-syllable word: stress on the second-to-last, RÓ-sa." },
        { type: "mc", q: "\"Dominus\" has a short i in the second-to-last syllable (dŏ-mĭ-nus). Where does the stress fall?", options: ["DÓ-mi-nus", "do-MÍ-nus", "do-mi-NÚS"], answer: 0, explain: "Short second-to-last → stress on the third-to-last: DÓminus." },
        { type: "tf", q: "In Latin a three-syllable word can be stressed on the last syllable.", answer: false, explain: "In Latin the stress never falls on the last syllable." }
      ]
    }
  ],
  glossary: [
    { t: "Latin alphabet", d: "23 letters in the classical age, derived from the Etruscan and Greek alphabets." },
    { t: "Scholastic (ecclesiastical) pronunciation", d: "Pronunciation of Latin used in Italy and by the Church, close to Italian." },
    { t: "Restored pronunciation", d: "Reconstructed pronunciation of classical Latin: c and g hard, v = w, ae = \"eye\"." },
    { t: "Diphthong", d: "Two vowels pronounced in a single breath: ae, oe, au." },
    { t: "Penultimate rule", d: "In words of several syllables the stress goes on the second-to-last if it is long, otherwise on the third-to-last." },
    { t: "Syllable long by position", d: "Syllable with a vowel followed by two consonants: pu-él-la." },
    { t: "Macron (ā)", d: "Little bar over a vowel which in dictionaries shows that it is long." },
    { t: "Scriptio continua", d: "Writing with no spaces between the words, used in antiquity." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "How many letters did the Latin alphabet have in the classical age?", answer: 23, explain: "23 letters: A B C D E F G H I K L M N O P Q R S T V X Y Z." },
      { type: "mc", q: "From which people did the Romans take the alphabet directly?", options: ["Egyptians", "Etruscans", "Celts"], answer: 1, explain: "From the Etruscans, who had taken it from the Greeks." },
      { type: "text", q: "How is \"caelum\" pronounced in the scholastic pronunciation?", answer: ["celum", "chelum", "chèlum", "cèlum", "chaylum", "celum (sky)"], explain: "ae is read e and the c before e is soft: \"CHElum\"." },
      { type: "mc", q: "How is \"philosophia\" read in the scholastic pronunciation?", options: ["pilosopia", "filosofia", "chilosochia"], answer: 1, explain: "ph is read f." },
      { type: "tf", q: "In the restored pronunciation \"Cicero\" is read \"KEEkero\".", answer: true, explain: "In the restored pronunciation the c is always hard." },
      { type: "mc", q: "In which word is \"ti\" read \"ti\" and not \"tsi\"?", options: ["gratia", "hostia", "natio"], answer: 1, explain: "After s, t, x the group ti stays ti: hostia." },
      { type: "mc", q: "In \"amīcus\" the i is long. Where does the stress fall?", options: ["Á-mi-cus", "a-MÍ-cus", "a-mi-CÚS"], answer: 1, explain: "Long second-to-last → stress on the second-to-last: amícus." },
      { type: "order", q: "Put the steps of the alphabet's journey in order, from the oldest.", items: ["Phoenicians", "Greeks", "Etruscans", "Romans"], explain: "The alphabet passed from the Phoenicians to the Greeks, then to the Etruscans and finally to the Romans." },
      { type: "text", q: "What does the Latin word \"video\" mean?", answer: ["i see", "see"], explain: "Video = \"I see\" (first person of the verb videre)." },
      { type: "mc", q: "Why does \"puella\" have the stress on \"el\"?", options: ["Because it is a foreign word", "Because the syllable is long by position (followed by two consonants, ll)", "Because the stress always falls on the second syllable"], answer: 1, explain: "The e is followed by ll: the syllable is long by position and attracts the stress." },
      { type: "tf", q: "The ancient Romans wrote using lower-case letters too.", answer: false, explain: "In the classical age people wrote in capitals; lower-case letters were born in the Middle Ages." }
    ]
  }
});

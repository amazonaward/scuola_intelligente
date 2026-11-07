TOPIC('ro', {
  id: "p2-ing-family",
  title: "My family",
  intro: "Hello! 👋 Astăzi învățăm să ne prezentăm <b>familia</b> în engleză: <b>family</b> (se pronunță <i>fe-mi-li</i>). La sfârșit vei ști să spui: <i>«This is my mum!»</i> 👩 și <i>«I have got a brother!»</i> 👦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "The family: numele membrilor familiei 👨‍👩‍👧‍👦",
      html: "<table><tr><th>Engleză</th><th>Se pronunță</th><th>Română</th></tr>" +
        "<tr><td>👩 <b>mother</b> / <b>mum</b></td><td>ma-dăr / mam</td><td>mamă / mămica</td></tr>" +
        "<tr><td>👨 <b>father</b> / <b>dad</b></td><td>fa-dăr / ded</td><td>tată / tăticul</td></tr>" +
        "<tr><td>👧 <b>sister</b></td><td>sis-tăr</td><td>soră</td></tr>" +
        "<tr><td>👦 <b>brother</b></td><td>bra-dăr</td><td>frate</td></tr>" +
        "<tr><td>👶 <b>baby</b></td><td>bei-bi</td><td>bebeluș, nou-născut</td></tr>" +
        "<tr><td>👵 <b>grandmother</b> / <b>grandma</b></td><td>gren-ma-dăr / gren-ma</td><td>bunică</td></tr>" +
        "<tr><td>👴 <b>grandfather</b> / <b>grandpa</b></td><td>gren-fa-dăr / gren-pa</td><td>bunic</td></tr>" +
        "<tr><td>👩‍🦰 <b>aunt</b></td><td>ant</td><td>mătușă</td></tr>" +
        "<tr><td>👨‍🦱 <b>uncle</b></td><td>an-cl</td><td>unchi</td></tr>" +
        "<tr><td>🧒 <b>cousin</b></td><td>ca-zăn</td><td>văr / verișoară</td></tr></table>" +
        "<p>💡 <b>Mum</b> și <b>dad</b> sunt cuvintele afectuoase, ca „mămica” și „tăticul”. <b>Mother</b> și <b>father</b> sunt mai formale, ca „mamă” și „tată”.</p>"
    },
    {
      type: "svg",
      title: "My family tree 🌳 (arborele meu genealogic)",
      svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="320" fill="#f0fdf4"/>' +
        '<line x1="150" y1="75" x2="450" y2="75" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="75" x2="300" y2="140" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="200" y1="170" x2="400" y2="170" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="170" x2="300" y2="225" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="150" y1="225" x2="450" y2="225" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="150" y1="225" x2="150" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="300" y1="225" x2="300" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<line x1="450" y1="225" x2="450" y2="245" stroke="#15803d" stroke-width="4"/>' +
        '<rect x="80" y="45" width="140" height="55" rx="12" fill="#c4b5fd"/>' +
        '<text x="150" y="70" font-size="17" text-anchor="middle" fill="#3b0764" font-weight="bold">grandpa</text>' +
        '<text x="150" y="91" font-size="14" text-anchor="middle" fill="#3b0764">bunic</text>' +
        '<rect x="380" y="45" width="140" height="55" rx="12" fill="#c4b5fd"/>' +
        '<text x="450" y="70" font-size="17" text-anchor="middle" fill="#3b0764" font-weight="bold">grandma</text>' +
        '<text x="450" y="91" font-size="14" text-anchor="middle" fill="#3b0764">bunică</text>' +
        '<rect x="130" y="140" width="140" height="55" rx="12" fill="#93c5fd"/>' +
        '<text x="200" y="165" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">dad</text>' +
        '<text x="200" y="186" font-size="14" text-anchor="middle" fill="#1e3a8a">tata</text>' +
        '<rect x="330" y="140" width="140" height="55" rx="12" fill="#f9a8d4"/>' +
        '<text x="400" y="165" font-size="17" text-anchor="middle" fill="#831843" font-weight="bold">mum</text>' +
        '<text x="400" y="186" font-size="14" text-anchor="middle" fill="#831843">mama</text>' +
        '<rect x="85" y="245" width="130" height="55" rx="12" fill="#fde68a"/>' +
        '<text x="150" y="270" font-size="17" text-anchor="middle" fill="#78350f" font-weight="bold">brother</text>' +
        '<text x="150" y="291" font-size="14" text-anchor="middle" fill="#78350f">frate</text>' +
        '<rect x="235" y="245" width="130" height="55" rx="12" fill="#fb923c"/>' +
        '<text x="300" y="270" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">ME</text>' +
        '<text x="300" y="291" font-size="14" text-anchor="middle" fill="#ffffff">eu</text>' +
        '<rect x="385" y="245" width="130" height="55" rx="12" fill="#fde68a"/>' +
        '<text x="450" y="270" font-size="17" text-anchor="middle" fill="#78350f" font-weight="bold">sister</text>' +
        '<text x="450" y="291" font-size="14" text-anchor="middle" fill="#78350f">soră</text>' +
        '</svg>',
      caption: "Sus sunt bunicii (grandparents), la mijloc părinții (parents), jos copiii (children). Tata de aici este fiul lui grandpa și al lui grandma."
    },
    {
      type: "widget",
      title: "Flashcards: familia",
      widget: "flashcards",
      options: {
        cards: [
          { front: "👩 mum", back: "mama" },
          { front: "👨 dad", back: "tata" },
          { front: "👧 sister", back: "sora" },
          { front: "👦 brother", back: "fratele" },
          { front: "👶 baby", back: "bebelușul" },
          { front: "👵 grandma", back: "bunica" },
          { front: "👴 grandpa", back: "bunicul" },
          { front: "👩‍🦰 aunt", back: "mătușa" },
          { front: "👨‍🦱 uncle", back: "unchiul" },
          { front: "🧒 cousin", back: "văr / verișoară" },
          { front: "👫 parents", back: "părinții" },
          { front: "👴👵 grandparents", back: "bunicii" }
        ]
      },
      caption: "Citește cu voce tare cuvântul englezesc, apoi întoarce cartonașul."
    },
    {
      type: "quiz",
      title: "Mini-test: who is it?",
      questions: [
        { type: "mc", q: "Cum se spune „frate” în engleză?", options: ["sister", "brother", "father"], answer: 1, explain: "Brother = frate. Sister = soră." },
        { type: "mc", q: "„Grandma” înseamnă…", options: ["bunică", "mătușă", "mamă"], answer: 0, explain: "Grandma = bunică (grand = mare, ma = mamă)." },
        { type: "text", q: "Scrie în engleză: tata", answer: ["dad", "daddy", "father"], explain: "Tata = dad (formal: father)." }
      ]
    },
    {
      type: "remember",
      title: "Frazele pentru a prezenta familia 🗣️",
      html: "<p>👉 Ca să <b>prezinți</b> pe cineva: <b>This is my…</b> = Acesta/aceasta este… meu / mea…</p>" +
        "<p>🖼️ <i>This is my mum.</i> = Aceasta este mama mea.<br>🖼️ <i>This is my grandpa.</i> = Acesta este bunicul meu.</p>" +
        "<p>👉 Ca să spui cine este în familia ta: <b>I have got a…</b> = Eu am un / o…</p>" +
        "<p>👧 <i>I have got a sister.</i> = Am o soră.<br>👦👦 <i>I have got two brothers.</i> = Am doi frați.</p>" +
        "<p>👉 Ca să întrebi: <b>Have you got a brother?</b> = Ai un frate?<br>✅ <b>Yes, I have.</b> ❌ <b>No, I haven't.</b></p>" +
        "<p>💡 Notă: în engleză <b>my</b> se folosește pentru toți: my mum, my dad, my sisters. Nu există „meu / mea / mei / mele”!</p>"
    },
    {
      type: "example",
      title: "Exemplu: Emma își prezintă familia 📸",
      html: "<p>Emma le arată colegilor o fotografie:</p>" +
        "<p><b>Emma:</b> Look! This is my family! 📸<br>" +
        "This is my <b>dad</b>. His name is Paul. 👨<br>" +
        "This is my <b>mum</b>. Her name is Lucy. 👩<br>" +
        "I have got a <b>brother</b>. His name is Tom. He is ten. 👦<br>" +
        "And this is my <b>baby sister</b>, Lily! 👶<br>" +
        "I love my family! ❤️</p>" +
        "<p>💡 <b>His name is…</b> = Numele lui este… (pentru un băiat). <b>Her name is…</b> = Numele ei este… (pentru o fată).</p>"
    },
    {
      type: "example",
      title: "Exemplu: un dialog în parc 🌳",
      html: "<p><b>Sam:</b> Hi! Who is that? 👀<br>" +
        "<b>Mia:</b> That's my <b>grandma</b>. 👵<br>" +
        "<b>Sam:</b> Have you got a brother?<br>" +
        "<b>Mia:</b> No, I haven't. But I have got two <b>cousins</b>! 🧒🧒<br>" +
        "<b>Sam:</b> Cool! I have got a sister. She's six.</p>" +
        "<p>💡 <b>Who is that?</b> = Cine este acela/aceea?</p>"
    },
    {
      type: "widget",
      title: "Băiat sau fată?",
      widget: "classify",
      options: {
        groups: ["👦 Boys and men (băieți și bărbați)", "👧 Girls and women (fete și femei)"],
        items: [
          ["brother", 0],
          ["sister", 1],
          ["dad", 0],
          ["mum", 1],
          ["uncle", 0],
          ["aunt", 1],
          ["grandpa", 0],
          ["grandma", 1]
        ]
      },
      caption: "Atenție: cousin și baby se potrivesc și pentru băieți, și pentru fete, de aceea nu sunt aici!"
    },
    {
      type: "widget",
      title: "Potrivește cuvintele",
      widget: "match",
      options: {
        pairs: [
          ["parents", "părinți"],
          ["grandparents", "bunici"],
          ["uncle", "unchi"],
          ["aunt", "mătușă"],
          ["cousin", "văr/verișoară"],
          ["family", "familie"]
        ]
      },
      caption: "Apasă pe un cuvânt englezesc și apoi pe traducerea lui."
    },
    {
      type: "curiosity",
      title: "Știai că…? 🇬🇧🇺🇸",
      html: "<p>În <b>Marea Britanie</b> mama se numește <b>mum</b>, în timp ce în <b>Statele Unite</b> se spune <b>mom</b>! Iar copiii mici spun <b>mummy</b> și <b>daddy</b>. Bunica poate fi și <b>granny</b> sau <b>nan</b>.</p>"
    },
    {
      type: "curiosity",
      title: "Știai că…? 🌍",
      html: "<p>În foarte multe limbi din lume cuvântul pentru „mamă” este foarte asemănător: <b>mamă</b> în română, <b>mum</b> în engleză, <b>maman</b> în franceză, <b>mama</b> în rusă și în swahili, <b>māma</b> în chineză! Cercetătorii cred că asta se întâmplă pentru că „ma-ma” este unul dintre primele sunete ușoare pe care le pot spune bebelușii. 👶</p>"
    },
    {
      type: "3d",
      title: "«Mum» around the world 🌍",
      scene: "globe",
      options: {
        points: [
          { lat: 51.5, lon: -0.1, label: "🇬🇧 mum", color: "#2563eb" },
          { lat: 40.7, lon: -74, label: "🇺🇸 mom", color: "#ef4444" },
          { lat: 41.9, lon: 12.5, label: "🇮🇹 mamma", color: "#16a34a" },
          { lat: 48.9, lon: 2.35, label: "🇫🇷 maman", color: "#1d4ed8" },
          { lat: 40.4, lon: -3.7, label: "🇪🇸 mamá", color: "#f59e0b" },
          { lat: 55.75, lon: 37.6, label: "🇷🇺 mama", color: "#dc2626" },
          { lat: 39.9, lon: 116.4, label: "🇨🇳 māma", color: "#ef4444" },
          { lat: -6.8, lon: 39.3, label: "🇹🇿 mama", color: "#22c55e" },
          { lat: 47.0, lon: 28.8, label: "🇲🇩 mama", color: "#facc15" }
        ]
      },
      caption: "Rotește globul: în aproape toată lumea mama se numește aproape la fel!"
    },
    {
      type: "alternatives",
      title: "Alte moduri de a ține minte familia",
      intro: "<p>Nu reușești să ții minte toate cuvintele? Încearcă unul dintre aceste trucuri!</p>",
      tabs: [
        {
          label: "🖐️ Finger family",
          html: "<p>Fiecare deget al mâinii este un membru al familiei! Este un cântecel foarte faimos în țările de limbă engleză:</p>" +
            "<ul><li>👍 degetul mare = <b>Daddy finger</b></li><li>☝️ arătătorul = <b>Mummy finger</b></li><li>🖕 mijlociul = <b>Brother finger</b></li><li>💍 inelarul = <b>Sister finger</b></li><li>🤙 degetul mic = <b>Baby finger</b></li></ul>" +
            "<p>Cântă: <i>«Daddy finger, daddy finger, where are you? Here I am, here I am, how do you do?»</i> și mișcă degetul potrivit! 🎵</p>",
          svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="600" height="260" fill="#fff7ed"/>' +
            '<rect x="200" y="140" width="200" height="110" rx="40" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="140" y="130" width="60" height="40" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="210" y="40" width="40" height="110" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="258" y="20" width="40" height="130" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="306" y="35" width="40" height="115" rx="20" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<rect x="354" y="70" width="36" height="85" rx="18" fill="#fcd9b6" stroke="#92400e" stroke-width="3"/>' +
            '<text x="110" y="150" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Daddy</text>' +
            '<text x="190" y="30" font-size="16" text-anchor="middle" fill="#be185d" font-weight="bold">Mummy</text>' +
            '<text x="278" y="14" font-size="16" text-anchor="middle" fill="#b45309" font-weight="bold">Brother</text>' +
            '<text x="400" y="30" font-size="16" text-anchor="middle" fill="#7e22ce" font-weight="bold">Sister</text>' +
            '<text x="450" y="90" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">Baby</text>' +
            '</svg>'
        },
        {
          label: "🔗 Cuvinte gemene",
          html: "<p>Unele cuvinte se construiesc ca niște cărămizi:</p>" +
            "<ul><li><b>grand</b> (mare) + <b>mother</b> = <b>grandmother</b> 👵 („mama cea mare”)</li>" +
            "<li><b>grand</b> + <b>father</b> = <b>grandfather</b> 👴</li>" +
            "<li><b>grand</b> + <b>parents</b> = <b>grandparents</b> (bunici)</li></ul>" +
            "<p>Și uită-te ce grup: <b>mother – brother</b> și <b>father</b> se termină toate în <b>-ther</b>! Și <b>sister</b> se termină în <b>-er</b>. Cuvintele familiei „seamănă între ele”, ca rudele! 😄</p>"
        },
        {
          label: "🎭 Joc: familia de carton",
          html: "<p>Desenează și decupează-ți familia (și animalele de casă!). Apoi prezint-o unui prieten sau unei păpuși, ca într-un spectacol:</p>" +
            "<p>🎤 <i>«Hello! This is my dad. This is my mum. I have got a sister. And this is my dog, Max!»</i> 🐶</p>" +
            "<p>A juca cu mâinile ajută creierul să țină minte cuvintele mult mai bine decât simpla citire.</p>"
        },
        {
          label: "🃏 Găsește perechile",
          html: "<p>Potrivește cuvântul afectuos cu cel formal:</p>",
          widget: "match",
          options: { pairs: [["mum", "mother"], ["dad", "father"], ["grandma", "grandmother"], ["grandpa", "grandfather"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta familiei în engleză",
      nodes: [
        { id: "family", label: "Family", x: 50, y: 6, color: "#8b5cf6", html: "<p><b>Family</b> = familie.</p>", why: "<p>Vine din latinescul <i>familia</i>, același cuvânt din care vine „familie”. De aceea seamănă atât de mult! În latină însemna toate persoanele care locuiau într-o casă.</p>" },
        { id: "parents", label: "Parents", x: 25, y: 30, color: "#3b82f6", html: "<p>Mum and dad = părinții.</p>", why: "<p><b>Parents</b> vine din latinescul <i>parens</i>, „cel care dă naștere”. Atenție: nu confunda <b>parents</b> (părinți) cu <b>relatives</b> (rude).</p>" },
        { id: "children", label: "Children", x: 75, y: 30, color: "#f59e0b", html: "<p>Copiii: brother, sister, baby.</p>", why: "<p>Un copil este <b>a child</b>, doi copii sunt <b>two children</b>: este un plural special, nu se adaugă doar -s.</p>" },
        { id: "grand", label: "Grandparents", x: 25, y: 58, color: "#a855f7", html: "<p>Grandma și grandpa: bunicii.</p>", why: "<p>Bucata <b>grand-</b> vine din franceză și înseamnă „mare”: bunicii sunt mama și tatăl „cei mari”, cu o generație înainte.</p>" },
        { id: "relatives", label: "Aunt, uncle, cousin", x: 75, y: 58, color: "#ec4899", html: "<p>Mătușă, unchi, văr/verișoară.</p>", why: "<p>Cuvintele <b>aunt</b> și <b>uncle</b> au intrat în engleză din franceza veche, acum aproximativ 800 de ani. <b>Cousin</b> se folosește și pentru băieți, și pentru fete, ca în franceză.</p>" },
        { id: "this", label: "This is my…", x: 20, y: 88, color: "#22c55e", html: "<p>Pentru a prezenta: <i>This is my sister.</i></p>", why: "<p><b>This</b> arată ceva apropiat de tine (acesta, aceasta). <b>That</b> arată ceva îndepărtat (acela). <b>My</b> nu se schimbă niciodată.</p>" },
        { id: "haveGot", label: "I have got…", x: 50, y: 88, color: "#0ea5e9", html: "<p>Pentru a spune pe cine ai: <i>I have got a brother.</i></p>", why: "<p>În engleza britanică se folosește mult <b>have got</b> pentru „a avea”. În America se spune mai des doar <b>I have a brother</b>.</p>" },
        { id: "hisHer", label: "His / Her", x: 80, y: 88, color: "#ef4444", html: "<p>His name = numele lui. Her name = numele ei.</p>", why: "<p>În engleză, cuvântul se alege după <b>cine posedă</b>: his pentru un băiat, her pentru o fată; nu depinde de lucrul posedat.</p>" }
      ],
      edges: [
        ["family", "parents", "are"],
        ["family", "children", "are"],
        ["parents", "grand", "copiii"],
        ["family", "relatives", "și rudele"],
        ["parents", "this", "prezintă-i cu"],
        ["children", "haveGot", "spune cu"],
        ["relatives", "hisHer", "cu numele:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: fraze",
      questions: [
        { type: "mc", q: "Cum se spune „Aceasta este mama mea”?", options: ["This is my mum.", "I have got mum.", "My is mum."], answer: 0, explain: "This is my mum." },
        { type: "mc", q: "„Have you got a sister?” Dacă nu ai o soră, răspunzi…", options: ["Yes, I have.", "No, I haven't.", "I am sister."], answer: 1, explain: "No, I haven't = Nu, nu am." },
        { type: "tf", q: "„Parents” înseamnă „rude”.", answer: false, explain: "Parents = părinți! Rude = relatives." }
      ]
    }
  ],
  glossary: [
    { t: "Family", d: "Familie." },
    { t: "Mum / Mother", d: "Mămica / mamă." },
    { t: "Dad / Father", d: "Tăticul / tată." },
    { t: "Brother / Sister", d: "Frate / soră." },
    { t: "Grandma / Grandpa", d: "Bunică / bunic." },
    { t: "Aunt / Uncle", d: "Mătușă / unchi." },
    { t: "Cousin", d: "Văr sau verișoară." },
    { t: "Parents", d: "Părinți (nu «rude»!)." },
    { t: "This is my…", d: "Acesta/aceasta este… meu / mea…" },
    { t: "I have got…", d: "Eu am…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cum se spune „soră”?", options: ["sister", "brother", "aunt"], answer: 0, explain: "Sister = soră." },
      { type: "mc", q: "„Uncle” înseamnă…", options: ["bunic", "unchi", "văr"], answer: 1, explain: "Uncle = unchi. Aunt = mătușă." },
      { type: "text", q: "Scrie în engleză: bunic (cuvânt afectuos)", answer: ["grandpa", "grandad", "granddad"], explain: "Grandpa = bunic (formal: grandfather)." },
      { type: "text", q: "Scrie în engleză: mama", answer: ["mum", "mom", "mummy", "mother"], explain: "Mum (în America mom); formal: mother." },
      { type: "tf", q: "„Cousin” se folosește și pentru văr, și pentru verișoară.", answer: true, explain: "În engleză, cousin se potrivește pentru amândoi." },
      { type: "mc", q: "Completează: «This is ___ dad.»", options: ["my", "I", "me"], answer: 0, explain: "This is my dad = Acesta este tatăl meu." },
      { type: "mc", q: "Cum se spune „Am un frate”?", options: ["I have got a brother.", "This is brother.", "I am a brother got."], answer: 0, explain: "I have got a brother." },
      { type: "order", q: "Pune în ordine fraza: „Am două surori”.", items: ["I", "have", "got", "two", "sisters"], explain: "I have got two sisters." },
      { type: "mc", q: "Tatăl mamei tale este…", options: ["uncle", "grandpa", "brother"], answer: 1, explain: "Tatăl mamei este bunicul: grandpa." },
      { type: "mc", q: "Cum se spune „Numele ei este Anna” (despre o fată)?", options: ["His name is Anna.", "Her name is Anna.", "My name is Anna."], answer: 1, explain: "Pentru o fată se folosește her." },
      { type: "tf", q: "„Grandparents” înseamnă „bunici”.", answer: true, explain: "Grand + parents = părinții „cei mari”: bunicii." }
    ]
  }
});

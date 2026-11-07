TOPIC('fr', {
  id: "p3-ing-body",
  title: "My body",
  intro: "Hello! 👋 Aujourd'hui, nous apprenons en anglais les <b>parties du corps</b> (the parts of the body), de la tête aux pieds : <i>from head to toe!</i> Nous apprendrons aussi à dire <b>I've got two eyes</b> 👀 et à chanter une chanson célèbre dans le monde entier. 🎵",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The face : le visage 🙂",
      html: `<table><tr><th>Anglais</th><th>Se prononce</th><th>Français</th></tr>
<tr><td>🙂 <b>face</b></td><td>feïce</td><td>visage</td></tr>
<tr><td>💇 <b>hair</b></td><td>hère</td><td>cheveux</td></tr>
<tr><td>👁️ <b>eye</b> / <b>eyes</b></td><td>aï / aïz</td><td>œil / yeux</td></tr>
<tr><td>👂 <b>ear</b> / <b>ears</b></td><td>ïeur / ïeurz</td><td>oreille / oreilles</td></tr>
<tr><td>👃 <b>nose</b></td><td>nôze</td><td>nez</td></tr>
<tr><td>👄 <b>mouth</b></td><td>mavth</td><td>bouche</td></tr>
<tr><td>🦷 <b>tooth</b> / <b>teeth</b></td><td>touth / tiith</td><td>dent / dents</td></tr>
</table>
<p>Attention : <b>hair</b> (cheveux) est <b>singulier</b> en anglais : on dit <i>My hair <b>is</b> brown</i> = Mes cheveux sont bruns.</p>`
    },
    {
      type: "text", title: "The body : le corps 🧍",
      html: `<ul>
<li>🗣️ <b>head</b> (hèd) – tête · <b>neck</b> (nèk) – cou · <b>shoulders</b> (chôl-deurz) – épaules</li>
<li>💪 <b>arm</b> – bras · <b>hand</b> (hènd) – main · <b>finger</b> (fin-gueur) – doigt de la main</li>
<li>🫃 <b>tummy</b> (ta-mi) – ventre · <b>back</b> (bak) – dos</li>
<li>🦵 <b>leg</b> – jambe · <b>knee</b> (nii, le k ne se prononce pas !) – genou</li>
<li>🦶 <b>foot</b> / <b>feet</b> (fout / fiit) – pied / pieds · <b>toe</b> (tô) – orteil</li>
</ul>`
    },
    {
      type: "widget", title: "Jeu : donne leur nom aux parties du corps",
      widget: "labelDiagram",
      caption: "Touche un point jaune et choisis le bon mot anglais.",
      options: {
        svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="420" fill="#f0f9ff"/>
<path d="M255,40 Q300,5 345,40 L345,60 L255,60 Z" fill="#92400e"/>
<circle cx="300" cy="75" r="45" fill="#fcd9b6" stroke="#b45309" stroke-width="3"/>
<circle cx="283" cy="68" r="6" fill="#1e3a8a"/>
<circle cx="317" cy="68" r="6" fill="#1e3a8a"/>
<path d="M300,74 L295,88 L303,88" stroke="#b45309" stroke-width="3" fill="none"/>
<path d="M285,100 Q300,110 315,100" stroke="#dc2626" stroke-width="4" fill="none"/>
<ellipse cx="254" cy="78" rx="8" ry="14" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<ellipse cx="346" cy="78" rx="8" ry="14" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<rect x="288" y="118" width="24" height="18" fill="#fcd9b6"/>
<rect x="245" y="135" width="110" height="130" rx="20" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<rect x="205" y="140" width="38" height="110" rx="16" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<rect x="357" y="140" width="38" height="110" rx="16" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<circle cx="224" cy="268" r="17" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<circle cx="376" cy="268" r="17" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<rect x="255" y="262" width="40" height="120" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
<rect x="305" y="262" width="40" height="120" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="268" cy="395" rx="30" ry="13" fill="#7c2d12"/>
<ellipse cx="332" cy="395" rx="30" ry="13" fill="#7c2d12"/>
</svg>`,
        spots: [
          { x: 300, y: 25, label: "hair" },
          { x: 283, y: 68, label: "eye" },
          { x: 300, y: 84, label: "nose" },
          { x: 300, y: 104, label: "mouth" },
          { x: 346, y: 78, label: "ear" },
          { x: 300, y: 127, label: "neck" },
          { x: 365, y: 150, label: "shoulder" },
          { x: 214, y: 200, label: "arm" },
          { x: 376, y: 268, label: "hand" },
          { x: 300, y: 210, label: "tummy" },
          { x: 275, y: 330, label: "leg" },
          { x: 332, y: 395, label: "foot" }
        ]
      }
    },
    {
      type: "remember", title: "Un, deux… et les pluriels bizarres",
      html: `<p>Pour faire le pluriel, on ajoute généralement <b>-s</b> :</p>
<p>one eye → two eye<b>s</b> 👀 · one hand → two hand<b>s</b> 🙌 · one finger → ten finger<b>s</b></p>
<p>Mais deux mots du corps sont « rebelles » et changent de voyelles :</p>
<p style="font-size:1.15em">🦶 one <b>foot</b> → two <b>feet</b> · 🦷 one <b>tooth</b> → many <b>teeth</b></p>
<p>Astuce : les deux <b>o</b> deviennent deux <b>e</b> ! oo → ee</p>`
    },
    {
      type: "remember", title: "I've got… = J'ai…",
      html: `<p>Pour décrire le corps, on utilise <b>have got</b> (avoir) :</p>
<ul>
<li><b>I've got</b> two eyes. = J'ai deux yeux.</li>
<li><b>I've got</b> brown hair. = J'ai les cheveux bruns.</li>
<li><b>She's got</b> long hair. = Elle a les cheveux longs.</li>
<li><b>It's got</b> four legs. = Il a quatre pattes. 🐶</li>
</ul>
<p>N'oublie pas : en anglais, la couleur se place <b>avant</b> : <i>blue eyes</i> = des yeux bleus.</p>`
    },
    {
      type: "quiz", title: "Mini-quiz : the face",
      questions: [
        { type: "mc", q: "Comment dit-on « nez » en anglais ?", options: ["mouth", "nose", "ear"], answer: 1, explain: "Nez = nose 👃." },
        { type: "mc", q: "« Eyes » veut dire…", options: ["oreilles", "yeux", "dents"], answer: 1, explain: "Eye = œil, eyes = yeux 👀." },
        { type: "text", q: "Écris en anglais : bouche", answer: ["mouth"], explain: "Bouche = mouth 👄." }
      ]
    },
    {
      type: "widget", title: "Flashcards : de la tête aux pieds",
      widget: "flashcards",
      caption: "Dis le mot à voix haute et touche cette partie de ton corps, puis retourne la carte.",
      options: {
        cards: [
          { front: "🗣️ head", back: "tête" },
          { front: "💇 hair", back: "cheveux" },
          { front: "👁️ eye", back: "œil" },
          { front: "👂 ear", back: "oreille" },
          { front: "👃 nose", back: "nez" },
          { front: "👄 mouth", back: "bouche" },
          { front: "🦷 teeth", back: "dents" },
          { front: "💪 arm", back: "bras" },
          { front: "✋ hand", back: "main" },
          { front: "☝️ finger", back: "doigt (de la main)" },
          { front: "🦵 leg", back: "jambe" },
          { front: "🦶 feet", back: "pieds" },
          { front: "🦶 toes", back: "orteils" },
          { front: "🦵 knee", back: "genou" }
        ]
      }
    },
    {
      type: "example", title: "Exemple : la chanson « Head, shoulders, knees and toes » 🎵",
      html: `<p>C'est la chanson du corps la plus célèbre du monde ! Chante-la en touchant chaque partie nommée, de plus en plus vite :</p>
<p style="font-size:1.15em"><b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
And <b>eyes</b> and <b>ears</b> and <b>mouth</b> and <b>nose</b>…<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!</p>
<p>(tête, épaules, genoux et orteils… et yeux et oreilles et bouche et nez)</p>`
    },
    {
      type: "example", title: "Exemple : mon monstre 👾",
      html: `<p>Lis la description et essaie de dessiner le monstre :</p>
<p><i>This is my monster. His name is Blob. 👾<br>
He's got <b>three eyes</b> and <b>one big mouth</b>.<br>
He's got <b>green hair</b> and <b>four arms</b>.<br>
He's got <b>two legs</b> and <b>big feet</b>.<br>
He's got <b>six fingers</b> on each hand!</i></p>
<p>À toi maintenant : invente un monstre et décris-le avec <b>He's got…</b> ou <b>She's got…</b></p>`,
    },
    {
      type: "svg", title: "Le monstre Blob",
      caption: "Three eyes, one big mouth, green hair, four arms, two legs, big feet!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#fdf4ff"/>
<path d="M240,70 L250,40 L262,68 L275,35 L288,66 L300,32 L312,66 L325,35 L338,68 L350,40 L360,70 Z" fill="#16a34a"/>
<ellipse cx="300" cy="140" rx="85" ry="80" fill="#a855f7" stroke="#6b21a8" stroke-width="4"/>
<circle cx="260" cy="115" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="300" cy="100" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="340" cy="115" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="262" cy="117" r="7" fill="#111827"/>
<circle cx="302" cy="102" r="7" fill="#111827"/>
<circle cx="342" cy="117" r="7" fill="#111827"/>
<path d="M245,160 Q300,215 355,160 Z" fill="#7f1d1d"/>
<rect x="270" y="160" width="14" height="14" fill="#ffffff"/>
<rect x="316" y="160" width="14" height="14" fill="#ffffff"/>
<line x1="220" y1="130" x2="160" y2="100" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="220" y1="165" x2="160" y2="195" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="380" y1="130" x2="440" y2="100" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="380" y1="165" x2="440" y2="195" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="270" y1="215" x2="265" y2="255" stroke="#6b21a8" stroke-width="12"/>
<line x1="330" y1="215" x2="335" y2="255" stroke="#6b21a8" stroke-width="12"/>
<ellipse cx="250" cy="265" rx="35" ry="14" fill="#f97316"/>
<ellipse cx="350" cy="265" rx="35" ry="14" fill="#f97316"/>
<text x="90" y="60" font-size="18" font-weight="bold" fill="#16a34a">green hair</text>
<text x="470" y="80" font-size="18" font-weight="bold" fill="#6b21a8">four arms</text>
<text x="470" y="140" font-size="18" font-weight="bold" fill="#1f2937">three eyes</text>
<text x="40" y="250" font-size="18" font-weight="bold" fill="#c2410c">big feet</text>
<text x="420" y="250" font-size="18" font-weight="bold" fill="#7f1d1d">big mouth</text>
</svg>`
    },
    {
      type: "widget", title: "Associe : anglais et français",
      widget: "match",
      options: {
        pairs: [["head", "tête"], ["shoulders", "épaules"], ["knees", "genoux"], ["toes", "orteils"], ["neck", "cou"], ["teeth", "dents"], ["hand", "main"], ["back", "dos"]]
      }
    },
    {
      type: "widget", title: "Jeu : pluriel en -s ou pluriel rebelle ?",
      widget: "classify",
      caption: "Quels mots forment leur pluriel en ajoutant -s et lesquels changent de voyelles ?",
      options: {
        groups: ["➕ pluriel en -s", "🔀 pluriel rebelle"],
        items: [["eye → eyes", 0], ["ear → ears", 0], ["hand → hands", 0], ["leg → legs", 0], ["finger → fingers", 0], ["arm → arms", 0], ["foot → feet", 1], ["tooth → teeth", 1]]
      }
    },
    {
      type: "curiosity", title: "Le savais-tu ? En anglais, les doigts ont deux noms !",
      html: `<p>En français, on dit « doigts » pour les mains, et pour les pieds on dit « orteils ». En anglais aussi, il y a deux mots !</p>
<ul><li>☝️ les doigts des <b>mains</b> sont des <b>fingers</b> ;</li><li>🦶 les doigts des <b>pieds</b> sont des <b>toes</b>.</li></ul>
<p>Et le pouce a un nom bien à lui : <b>thumb</b> (tham, le b final ne se prononce pas). Les Anglais disent d'ailleurs <i>fingers and thumbs</i>.</p>`
    },
    {
      type: "curiosity", title: "Le savais-tu ? Les acteurs se souhaitent de « se casser une jambe » !",
      html: `<p>Avant un spectacle, en Angleterre et en Amérique, les acteurs se disent <b>Break a leg!</b> (littéralement « casse-toi une jambe ! »). Ce n'est pas méchant : cela veut dire <b>bonne chance</b>, un peu comme notre « merde ! » au théâtre ! 🎭</p>
<p>Et sais-tu combien d'os a un adulte ? <b>206</b> ! Plus de la moitié sont dans les mains et dans les pieds.</p>`
    },
    {
      type: "alternatives", title: "D'autres façons de retenir les mots",
      intro: "<p>Certains apprennent en bougeant, d'autres en regardant, d'autres en jouant. Choisis la voie qui marche pour toi !</p>",
      tabs: [
        {
          label: "🙋 Simon says (jeu anglais)",
          html: `<p>Les enfants anglais et américains jouent à <b>Simon says</b> (« Jacques a dit »). L'un est Simon et donne des ordres :</p>
<p><i>« Simon says: touch your <b>nose</b>! »</i> 👃 → tout le monde se touche le nez.<br>
<i>« Simon says: touch your <b>knees</b>! »</i> → tout le monde se touche les genoux.<br>
<i>« Touch your <b>head</b>! »</i> → attention ! Simon ne l'a pas dit : celui qui bouge est éliminé ! 😄</p>
<p>Bouger le corps en disant le mot aide le cerveau à s'en souvenir : les enseignants appellent cela la <b>TPR</b> (réponse physique totale).</p>`
        },
        {
          label: "🔗 Mots parents",
          html: `<p>L'anglais est un « cousin » de l'allemand : beaucoup de mots du corps se ressemblent !</p>
<table><tr><th>Anglais</th><th>Allemand</th><th>Français</th></tr>
<tr><td>hand</td><td>Hand</td><td>main</td></tr>
<tr><td>arm</td><td>Arm</td><td>bras</td></tr>
<tr><td>finger</td><td>Finger</td><td>doigt</td></tr>
<tr><td>knee</td><td>Knie</td><td>genou</td></tr>
<tr><td>nose</td><td>Nase</td><td>nez</td></tr></table>
<p>Et avec le français ? <b>nose</b> rappelle <b>nasal</b>, <b>mouth</b>… non ! Mais <b>face</b> ressemble à <b>face</b> (le mot vient du latin, par le français).</p>`
        },
        {
          label: "🖼️ Dessine et écris",
          html: `<p>Dessine un grand personnage sur une feuille et écris les mots avec des flèches. Utilise une couleur pour le <b>visage</b>, une pour le <b>corps</b> et une pour les <b>jambes et les pieds</b>. Ton cerveau se souviendra aussi de la couleur !</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#fffbeb"/>
<circle cx="300" cy="50" r="30" fill="#fcd9b6" stroke="#b45309" stroke-width="3"/>
<line x1="300" y1="80" x2="300" y2="160" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="100" x2="245" y2="140" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="100" x2="355" y2="140" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="160" x2="265" y2="220" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="160" x2="335" y2="220" stroke="#111827" stroke-width="5"/>
<line x1="230" y1="40" x2="270" y2="45" stroke="#dc2626" stroke-width="2"/>
<text x="140" y="45" font-size="20" font-weight="bold" fill="#dc2626">head</text>
<line x1="390" y1="125" x2="350" y2="135" stroke="#16a34a" stroke-width="2"/>
<text x="395" y="130" font-size="20" font-weight="bold" fill="#16a34a">arm</text>
<line x1="390" y1="200" x2="320" y2="195" stroke="#2563eb" stroke-width="2"/>
<text x="395" y="205" font-size="20" font-weight="bold" fill="#2563eb">leg</text>
<line x1="210" y1="225" x2="262" y2="222" stroke="#2563eb" stroke-width="2"/>
<text x="140" y="230" font-size="20" font-weight="bold" fill="#2563eb">foot</text>
</svg>`
        },
        {
          label: "🃏 Cartes avec des émojis",
          html: `<p>Regarde seulement l'émoji, dis le mot anglais, puis retourne la carte pour vérifier.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "👁️", back: "eye" }, { front: "👂", back: "ear" }, { front: "👃", back: "nose" }, { front: "👄", back: "mouth" }, { front: "🦷", back: "tooth" }, { front: "✋", back: "hand" }, { front: "🦵", back: "leg" }, { front: "🦶", back: "foot" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Carte : le corps en anglais",
      nodes: [
        { id: "body", label: "My body", x: 50, y: 6, color: "#0ea5e9", html: "Le corps : <b>body</b>.", why: "Le mot <i>body</i> vient du vieil anglais <i>bodig</i>, d'origine germanique. L'anglais est né de la langue des Angles et des Saxons, peuples germaniques arrivés en Bretagne vers le Ve siècle : c'est pourquoi beaucoup de mots du corps ressemblent à l'allemand." },
        { id: "head", label: "Head & face", x: 18, y: 32, color: "#f97316", html: "head, hair, eyes, ears, nose, mouth, teeth.", why: "Ce sont parmi les premiers mots qu'on apprend dans toutes les langues, car ils désignent des choses qu'on voit et qu'on touche chaque jour. <i>Face</i>, en revanche, est arrivé avec les Normands français en 1066 : il vient du latin <i>facies</i>, comme le français « face »." },
        { id: "upper", label: "Arms & hands", x: 50, y: 32, color: "#22c55e", html: "neck, shoulders, arms, hands, fingers, thumb.", why: "<i>Hand</i>, <i>arm</i> et <i>finger</i> sont de très anciens mots germaniques, presque identiques en allemand (Hand, Arm, Finger)." },
        { id: "lower", label: "Legs & feet", x: 82, y: 32, color: "#2563eb", html: "legs, knees, feet, toes.", why: "Dans <i>knee</i>, le k ne se prononce plus, mais il se prononçait autrefois : en vieil anglais, on disait \"cneo\". L'écriture est restée ancienne alors que la prononciation a changé." },
        { id: "plural", label: "Pluriel en -s", x: 25, y: 62, color: "#a855f7", html: "eye → eyes, hand → hands.", why: "En vieil anglais, il y avait beaucoup de façons de faire le pluriel ; avec le temps, presque tous les mots ont pris le -s, qui était la façon la plus courante." },
        { id: "irreg", label: "Pluriels rebelles", x: 75, y: 62, color: "#e11d48", html: "foot → feet, tooth → teeth.", why: "Ce sont des « fossiles » de la langue ancienne : il y a des milliers d'années, le pluriel se faisait en changeant la voyelle à l'intérieur du mot. Les mots très utilisés comme foot et tooth ont gardé l'ancienne règle, comme man → men." },
        { id: "got", label: "I've got…", x: 25, y: 90, color: "#ca8a04", html: "Sert à décrire : I've got blue eyes.", why: "<i>Have got</i> est typique de l'anglais britannique parlé ; les Américains disent plus souvent <i>I have</i>. Les deux veulent dire la même chose : avoir, posséder." },
        { id: "adj", label: "Couleur d'abord", x: 75, y: 90, color: "#0d9488", html: "brown hair, blue eyes, big feet.", why: "En anglais, l'adjectif se place presque toujours avant le nom et ne change jamais : big foot, big feet. En français, il se place souvent après et s'accorde (œil bleu, yeux bleus)." }
      ],
      edges: [
        ["body", "head", "en haut"], ["body", "upper", "au milieu"], ["body", "lower", "en bas"],
        ["upper", "plural", "hands"], ["lower", "irreg", "feet"], ["head", "irreg", "teeth"],
        ["plural", "got", "I've got two…"], ["got", "adj", "on décrit avec"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz : from head to toe",
      questions: [
        { type: "mc", q: "Le pluriel de « foot » est…", options: ["foots", "feet", "feets"], answer: 1, explain: "Foot → feet : pluriel rebelle, oo devient ee." },
        { type: "mc", q: "Les orteils se disent en anglais…", options: ["fingers", "toes", "thumbs"], answer: 1, explain: "Toes = orteils ; fingers = doigts des mains." },
        { type: "tf", q: "« I've got two ears » veut dire « J'ai deux oreilles ».", answer: true, explain: "I've got = j'ai ; ears = oreilles 👂." }
      ]
    }
  ],
  glossary: [
    { t: "body", d: "corps" },
    { t: "head", d: "tête" },
    { t: "face", d: "visage" },
    { t: "hair", d: "cheveux (en anglais, c'est un singulier : my hair is…)" },
    { t: "eye / eyes", d: "œil / yeux" },
    { t: "ear / ears", d: "oreille / oreilles" },
    { t: "nose", d: "nez" },
    { t: "mouth", d: "bouche" },
    { t: "tooth / teeth", d: "dent / dents (pluriel irrégulier)" },
    { t: "neck · shoulders", d: "cou · épaules" },
    { t: "arm · hand · finger · thumb", d: "bras · main · doigt de la main · pouce" },
    { t: "leg · knee", d: "jambe · genou (le k ne se prononce pas)" },
    { t: "foot / feet · toe", d: "pied / pieds (pluriel irrégulier) · orteil" },
    { t: "I've got", d: "j'ai (pour décrire : I've got brown hair)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Comment dit-on « tête » en anglais ?", options: ["hand", "head", "hair"], answer: 1, explain: "Tête = head ; hand = main ; hair = cheveux." },
      { type: "mc", q: "« Mouth » veut dire…", options: ["bouche", "nez", "oreille"], answer: 0, explain: "Mouth = bouche 👄." },
      { type: "text", q: "Écris en anglais : yeux", answer: ["eyes"], explain: "Eye = œil, eyes = yeux." },
      { type: "text", q: "Écris en anglais : jambe", answer: ["leg"], explain: "Jambe = leg 🦵." },
      { type: "mc", q: "Quel est le pluriel de « tooth » ?", options: ["tooths", "teeth", "toothes"], answer: 1, explain: "Tooth → teeth : oo devient ee." },
      { type: "mc", q: "Comment s'appellent les doigts des mains ?", options: ["toes", "fingers", "knees"], answer: 1, explain: "Fingers = doigts des mains ; toes = orteils." },
      { type: "tf", q: "Dans « knee », la lettre k se prononce.", answer: false, explain: "Knee se prononce « nii » : le k est muet." },
      { type: "tf", q: "« She's got long hair » veut dire « Elle a les cheveux longs ».", answer: true, explain: "She's got = elle a ; long hair = cheveux longs." },
      { type: "mc", q: "Complète : « I've got two blue … »", options: ["eye", "eyes", "nose"], answer: 1, explain: "Deux → pluriel : two blue eyes. La couleur se place avant le nom." },
      { type: "order", q: "Remets dans l'ordre les mots de la chanson : Head, …", items: ["head", "shoulders", "knees", "toes"], explain: "Head, shoulders, knees and toes : de haut en bas !" },
      { type: "mc", q: "Comment dit-on « épaules » ?", options: ["shoulders", "shoes", "legs"], answer: 0, explain: "Shoulders = épaules. Shoes = chaussures !" },
      { type: "mc", q: "« Break a leg! » se dit pour souhaiter…", options: ["bonne nuit", "bonne chance", "bon appétit"], answer: 1, explain: "C'est comme notre « merde ! » pour les acteurs." }
    ]
  }
});

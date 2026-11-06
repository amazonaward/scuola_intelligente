TOPIC('it', {
  id: "m1-sci-animali-invertebrati-vertebrati",
  title: "Gli animali: invertebrati e vertebrati",
  intro: "Dalla spugna al polpo, dalla farfalla alla balena: il regno degli <b>Animali</b> conta oltre <b>1,5 milioni</b> di specie descritte. Impariamo a dividerli nei due grandi gruppi, <b>invertebrati</b> e <b>vertebrati</b>, e a riconoscere le caratteristiche di ciascun gruppo.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Che cos'è un animale",
      html: `<p>Gli animali sono organismi:</p>
<ul>
<li><b>pluricellulari</b>, con cellule <b>eucariote</b> senza parete cellulare;</li>
<li><b>eterotrofi</b>: devono <b>mangiare</b> altri organismi (erbivori, carnivori, onnivori, filtratori…);</li>
<li>quasi sempre capaci di <b>muoversi</b> almeno in una fase della vita;</li>
<li>con cellule specializzate in <b>tessuti</b> e, nella maggior parte, in <b>organi</b> e <b>apparati</b> (sistema nervoso, muscoli…).</li>
</ul>
<p>La grande divisione è semplice: gli animali <b>senza colonna vertebrale</b> sono gli <b>invertebrati</b>; quelli <b>con colonna vertebrale</b> (uno scheletro interno di ossa o cartilagine) sono i <b>vertebrati</b>.</p>
<p>Sorpresa: gli invertebrati sono circa il <b>95%</b> di tutte le specie animali! I vertebrati sono "solo" circa 70 000 specie.</p>
<p>Un altro criterio utile è la <b>simmetria</b> del corpo: le spugne sono <b>asimmetriche</b>, meduse e stelle marine hanno simmetria <b>raggiata</b> (come una ruota), quasi tutti gli altri hanno simmetria <b>bilaterale</b> (una metà destra uguale alla sinistra, come noi).</p>`
    },
    {
      type: "text",
      title: "2. Gli invertebrati",
      html: `<table>
<tr><th>Gruppo (phylum)</th><th>Caratteristiche</th><th>Esempi</th></tr>
<tr><td><b>Poriferi</b></td><td>i più semplici: niente organi, corpo pieno di pori da cui filtrano l'acqua</td><td>spugne</td></tr>
<tr><td><b>Celenterati</b> (Cnidari)</td><td>simmetria raggiata, tentacoli con cellule urticanti</td><td>meduse, coralli, attinie</td></tr>
<tr><td><b>Platelminti</b></td><td>vermi piatti</td><td>planaria, tenia</td></tr>
<tr><td><b>Anellidi</b></td><td>vermi a corpo diviso in anelli (segmenti)</td><td>lombrico, sanguisuga</td></tr>
<tr><td><b>Molluschi</b></td><td>corpo molle, spesso con conchiglia; hanno un "piede" muscoloso</td><td>gasteropodi (chiocciola, lumaca), bivalvi (cozza, vongola), cefalopodi (polpo, seppia, calamaro)</td></tr>
<tr><td><b>Artropodi</b></td><td>zampe articolate e <b>esoscheletro</b> di chitina</td><td>insetti, aracnidi, crostacei, miriapodi</td></tr>
<tr><td><b>Echinodermi</b></td><td>"pelle spinosa", simmetria raggiata a 5 da adulti</td><td>stella marina, riccio di mare</td></tr>
</table>
<p><b>Gli artropodi</b> sono il gruppo più numeroso di tutto il regno animale. Il loro scheletro esterno (<b>esoscheletro</b>) è come un'armatura: protegge, ma non cresce. Per crescere devono fare la <b>muta</b>, abbandonando il vecchio "vestito".</p>
<ul>
<li><b>Insetti</b>: corpo in 3 parti (<b>capo, torace, addome</b>), <b>6 zampe</b>, 2 antenne, spesso le ali (formica, ape, farfalla, coleottero).</li>
<li><b>Aracnidi</b>: corpo in 2 parti, <b>8 zampe</b>, niente antenne (ragno, scorpione, zecca).</li>
<li><b>Crostacei</b>: 2 paia di antenne, spesso 10 zampe, respirano con le branchie (granchio, gambero, aragosta; e il porcellino di terra!).</li>
<li><b>Miriapodi</b>: tantissimi segmenti, ognuno con 1 o 2 paia di zampe (centopiedi, millepiedi).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Il corpo di un insetto",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<ellipse cx="160" cy="150" rx="45" ry="40" fill="#92400e"/>
<ellipse cx="270" cy="150" rx="60" ry="45" fill="#b45309"/>
<ellipse cx="420" cy="150" rx="95" ry="55" fill="#d97706"/>
<path d="M130 120 Q100 60 70 50 M140 115 Q130 55 110 35" stroke="#78350f" stroke-width="4" fill="none"/>
<circle cx="140" cy="140" r="9" fill="#111827"/>
<g stroke="#78350f" stroke-width="5" fill="none">
<path d="M240 190 L215 250 L200 260"/><path d="M270 195 L270 260 L260 275"/><path d="M300 190 L330 250 L345 260"/>
<path d="M240 110 L215 55 L200 45"/><path d="M270 105 L270 40 L260 25"/><path d="M300 110 L330 55 L345 45"/>
</g>
<ellipse cx="300" cy="80" rx="80" ry="25" fill="#bfdbfe" opacity="0.8" stroke="#1e40af" stroke-width="2"/>
<path d="M400 120 L440 120 M390 150 L460 150 M400 180 L440 180" stroke="#92400e" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 160, y: 165, label: "Capo" },
          { x: 270, y: 150, label: "Torace" },
          { x: 430, y: 150, label: "Addome" },
          { x: 100, y: 55, label: "Antenne" },
          { x: 140, y: 140, label: "Occhio composto" },
          { x: 330, y: 250, label: "Zampa (3 paia)" },
          { x: 320, y: 80, label: "Ala" }
        ]
      },
      caption: "Le zampe e le ali degli insetti sono tutte attaccate al torace."
    },
    {
      type: "quiz",
      title: "Mini-quiz: gli invertebrati",
      questions: [
        { type: "mc", q: "Quante zampe ha un ragno?", options: ["6", "8", "10", "Dipende dalla specie"], answer: 1, explain: "Gli aracnidi hanno 8 zampe; gli insetti 6." },
        { type: "mc", q: "A quale gruppo appartiene il polpo?", options: ["Celenterati", "Molluschi", "Artropodi", "Echinodermi"], answer: 1, explain: "Il polpo è un mollusco cefalopode: la sua conchiglia è scomparsa nel corso dell'evoluzione." },
        { type: "tf", q: "Gli artropodi crescono facendo la muta perché l'esoscheletro non si allarga.", answer: true, explain: "L'esoscheletro rigido viene abbandonato e sostituito da uno più grande." }
      ]
    },
    {
      type: "text",
      title: "3. I vertebrati",
      html: `<p>I vertebrati fanno parte del phylum dei <b>Cordati</b>. Hanno uno <b>scheletro interno</b> (endoscheletro) con la <b>colonna vertebrale</b> che protegge il <b>midollo spinale</b>, un cranio che protegge l'encefalo e, di solito, due paia di arti (pinne, zampe, ali, braccia).</p>
<p>Si dividono in <b>5 classi</b>:</p>
<table>
<tr><th>Classe</th><th>Pelle</th><th>Respirazione</th><th>Temperatura</th><th>Riproduzione</th></tr>
<tr><td>🐟 <b>Pesci</b></td><td>squame</td><td>branchie</td><td>variabile (eterotermi)</td><td>quasi tutti ovipari, uova in acqua</td></tr>
<tr><td>🐸 <b>Anfibi</b></td><td>nuda e umida</td><td>branchie da larve, poi polmoni e pelle</td><td>variabile</td><td>ovipari, uova in acqua; <b>metamorfosi</b></td></tr>
<tr><td>🦎 <b>Rettili</b></td><td>squame cornee</td><td>polmoni</td><td>variabile</td><td>ovipari, uova con guscio sulla terra</td></tr>
<tr><td>🐦 <b>Uccelli</b></td><td>penne e piume</td><td>polmoni con sacchi aerei</td><td><b>costante</b> (omeotermi)</td><td>ovipari, covano le uova</td></tr>
<tr><td>🐻 <b>Mammiferi</b></td><td>peli</td><td>polmoni</td><td><b>costante</b></td><td>quasi tutti vivipari; <b>allattano</b> i piccoli</td></tr>
</table>
<p><b>Eterotermi e omeotermi.</b> Gli <b>eterotermi</b> (un tempo detti "a sangue freddo") hanno una temperatura che segue quella dell'ambiente: la lucertola si scalda al sole la mattina. Gli <b>omeotermi</b> (uccelli e mammiferi) producono calore e mantengono una temperatura costante (noi circa 37 °C), così possono vivere anche nei climi più freddi, ma devono mangiare molto di più.</p>
<p><b>Riproduzione.</b> <b>Ovipari</b>: depongono uova che si schiudono fuori dalla madre. <b>Vivipari</b>: il piccolo si sviluppa dentro la madre e nasce già formato. <b>Ovovivipari</b>: le uova restano e si schiudono dentro la madre (vipera, alcuni squali).</p>`
    },
    {
      type: "svg",
      title: "La metamorfosi della rana",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<rect y="150" width="600" height="150" fill="#a5f3fc"/>
<g fill="#111827"><circle cx="80" cy="200" r="7"/><circle cx="95" cy="210" r="7"/><circle cx="75" cy="220" r="7"/><circle cx="92" cy="228" r="7"/></g>
<g fill="none" stroke="#475569" stroke-width="2"><circle cx="80" cy="200" r="12"/><circle cx="95" cy="210" r="12"/><circle cx="75" cy="220" r="12"/><circle cx="92" cy="228" r="12"/></g>
<text x="85" y="275" font-size="16" text-anchor="middle" font-weight="bold">1 uova</text>
<ellipse cx="220" cy="215" rx="20" ry="14" fill="#4b5563"/>
<path d="M240 215 Q265 200 280 220 Q262 222 240 220 Z" fill="#6b7280"/>
<text x="235" y="275" font-size="16" text-anchor="middle" font-weight="bold">2 girino</text>
<text x="235" y="293" font-size="14" text-anchor="middle">branchie</text>
<ellipse cx="380" cy="210" rx="26" ry="18" fill="#4d7c0f"/>
<path d="M406 210 Q430 200 445 214" stroke="#4d7c0f" stroke-width="8" fill="none"/>
<path d="M365 225 L350 245 M395 225 L410 245" stroke="#4d7c0f" stroke-width="6"/>
<text x="390" y="275" font-size="16" text-anchor="middle" font-weight="bold">3 zampe</text>
<ellipse cx="530" cy="130" rx="40" ry="26" fill="#16a34a"/>
<circle cx="510" cy="108" r="9" fill="#ffffff"/><circle cx="550" cy="108" r="9" fill="#ffffff"/>
<circle cx="510" cy="108" r="4" fill="#111827"/><circle cx="550" cy="108" r="4" fill="#111827"/>
<path d="M495 150 L470 170 M565 150 L590 170" stroke="#16a34a" stroke-width="8"/>
<text x="530" y="200" font-size="16" text-anchor="middle" font-weight="bold">4 rana adulta</text>
<text x="530" y="218" font-size="14" text-anchor="middle">polmoni</text>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#0e7490" font-weight="bold">Dall'acqua alla terra: \"anfibio\" = doppia vita</text>
</svg>`,
      caption: "Il girino vive in acqua e respira con le branchie; la rana adulta ha i polmoni e vive anche sulla terra."
    },
    {
      type: "widget",
      title: "Vertebrato o invertebrato?",
      widget: "classify",
      options: {
        groups: ["Invertebrati", "Vertebrati"],
        items: [["🐌 chiocciola", 0], ["🦋 farfalla", 0], ["🪱 lombrico", 0], ["🦀 granchio", 0], ["🐙 polpo", 0], ["⭐ stella marina", 0], ["🪼 medusa", 0], ["🦈 squalo", 1], ["🐍 serpente", 1], ["🐬 delfino", 1], ["🦇 pipistrello", 1], ["🐸 rana", 1]]
      },
      caption: "Lo squalo ha uno scheletro di cartilagine, ma ha la colonna vertebrale: è un vertebrato."
    },
    {
      type: "widget",
      title: "Abbina la classe alla sua caratteristica",
      widget: "match",
      options: {
        pairs: [
          ["Pesci", "branchie e pinne"],
          ["Anfibi", "pelle nuda e metamorfosi"],
          ["Rettili", "squame cornee e uova con guscio"],
          ["Uccelli", "penne, becco e ossa cave"],
          ["Mammiferi", "peli e ghiandole mammarie"]
        ]
      }
    },
    {
      type: "3d",
      title: "L'uovo con il guscio: una \"astronave\" per la vita sulla terra",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fef3c7", label: "Guscio (calcare, con pori)" },
          { r: 0.96, color: "#e2e8f0", label: "Membrane" },
          { r: 0.92, color: "#e0f2fe", label: "Albume (acqua e proteine)" },
          { r: 0.48, color: "#facc15", label: "Tuorlo (riserva di cibo)" },
          { r: 0.12, color: "#f97316", label: "Embrione (disco germinativo)" }
        ]
      },
      caption: "L'uovo di rettili e uccelli porta con sé acqua e cibo e lascia passare l'aria dai pori del guscio: per questo può essere deposto sulla terra, lontano dall'acqua."
    },
    {
      type: "example",
      title: "Esempio pratico: osservare un lombricaio",
      html: `<ol>
<li>Prendi un barattolo grande di vetro e riempilo a strati alterni di <b>terra</b> e <b>sabbia</b> chiara.</li>
<li>Metti in superficie qualche foglia secca e 3-4 <b>lombrichi</b> trovati in giardino; inumidisci un po'.</li>
<li>Copri il barattolo con un cartoncino nero (i lombrichi evitano la luce) e lascialo in un posto fresco.</li>
<li>Dopo una settimana gli strati sono <b>mescolati</b> e le foglie sono sparite sottoterra!</li>
</ol>
<p>I lombrichi (anellidi) scavano gallerie che fanno entrare aria e acqua nel suolo e lo rendono fertile. Charles Darwin li studiò per 40 anni. Alla fine <b>rimetti i lombrichi in giardino</b>.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: una chiave per riconoscere i vertebrati",
      html: `<p>Hai trovato un animale con la colonna vertebrale. Segui le domande:</p>
<ol>
<li>Ha i <b>peli</b> e allatta i piccoli? → <b>Mammifero</b>. Altrimenti vai al 2.</li>
<li>Ha <b>penne</b>? → <b>Uccello</b>. Altrimenti vai al 3.</li>
<li>Respira con le <b>branchie</b> per tutta la vita e ha pinne? → <b>Pesce</b>. Altrimenti vai al 4.</li>
<li>Ha la pelle <b>nuda e umida</b>? → <b>Anfibio</b>. Se ha <b>squame cornee</b> e secche → <b>Rettile</b>.</li>
</ol>
<p>Prova con il <b>delfino</b>: ha qualche pelo da piccolo e allatta → mammifero, anche se vive in acqua e ha le pinne!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… l'ornitorinco è un mammifero che depone uova?",
      html: `<p>Quando nel 1798 arrivò in Inghilterra il primo ornitorinco imbalsamato dall'Australia, gli scienziati pensarono a uno scherzo: becco d'anatra, coda di castoro, zampe palmate… Eppure è un <b>mammifero</b>: ha il pelo e allatta i piccoli. Ma <b>depone le uova</b>! È un <b>monotremo</b>, come l'echidna. In più il maschio ha uno sperone velenoso sulle zampe posteriori.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che… il polpo ha tre cuori?",
      html: `<p>Il <b>polpo</b> ha <b>3 cuori</b> (due pompano il sangue alle branchie, uno al resto del corpo), il sangue <b>blu</b> (perché contiene rame invece di ferro) e circa due terzi dei suoi neuroni si trovano nelle <b>braccia</b>, che possono \"decidere\" in parte da sole. Sa aprire barattoli e cambiare colore in un attimo.</p>
<p>E il più grande animale mai vissuto non è un dinosauro: è la <b>balenottera azzurra</b>, un mammifero lungo fino a circa <b>30 metri</b> e pesante fino a circa 150-190 tonnellate. Il suo cuore pesa quanto un'automobile piccola!</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire gli animali",
      intro: "Le tabelle non bastano? Prova con un'analogia, con l'albero della vita o con le flashcard.",
      tabs: [
        {
          label: "🛡️ Armatura o scheletro interno?",
          html: `<p>Immagina due cavalieri:</p>
<ul>
<li>il primo indossa un'<b>armatura</b> di metallo (come l'esoscheletro degli artropodi): è protettissimo, ma quando cresce deve toglierla e farsene fare una nuova, e nel frattempo è vulnerabile. Un'armatura molto grande sarebbe troppo pesante: per questo gli insetti sono piccoli.</li>
<li>il secondo ha un'<b>impalcatura</b> interna, come i pali di una tenda (lo scheletro dei vertebrati): cresce insieme al corpo e regge anche animali enormi, come elefanti e balene.</li>
</ul>
<p>Molluschi e vermi invece sono come persone senza armatura né impalcatura: si sostengono con l'acqua o con i muscoli, e a volte si costruiscono una "casa" (la conchiglia).</p>`
        },
        {
          label: "🌳 L'albero della vita",
          html: `<p>Gli scienziati disegnano gli animali come i rami di un <b>albero genealogico</b>: i gruppi più vicini hanno antenati comuni più recenti. Notate: i vertebrati sono un rametto piccolo in mezzo a un albero enorme di invertebrati!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f7fee7"/>
<path d="M300 290 L300 240" stroke="#78350f" stroke-width="12"/>
<path d="M300 240 L60 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L150 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L250 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L350 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L450 60" stroke="#a16207" stroke-width="6"/>
<path d="M300 240 L550 60" stroke="#15803d" stroke-width="8"/>
<text x="60" y="45" font-size="16" text-anchor="middle" font-weight="bold">Spugne</text>
<text x="150" y="45" font-size="16" text-anchor="middle" font-weight="bold">Meduse</text>
<text x="250" y="45" font-size="16" text-anchor="middle" font-weight="bold">Vermi</text>
<text x="350" y="45" font-size="16" text-anchor="middle" font-weight="bold">Molluschi</text>
<text x="450" y="45" font-size="16" text-anchor="middle" font-weight="bold">Artropodi</text>
<text x="550" y="35" font-size="16" text-anchor="middle" font-weight="bold" fill="#15803d">Cordati</text>
<text x="550" y="55" font-size="14" text-anchor="middle" fill="#15803d">(vertebrati)</text>
<text x="300" y="275" font-size="15" text-anchor="start" dx="15">antenato comune</text>
</svg>`
        },
        {
          label: "🃏 Flashcard degli animali",
          html: `<p>Gira le carte e verifica se sai a quale gruppo appartiene ogni animale.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🦐 gambero", back: "Artropode, crostaceo" },
              { front: "🕷️ scorpione", back: "Artropode, aracnide (8 zampe)" },
              { front: "🐚 vongola", back: "Mollusco bivalve" },
              { front: "🐢 tartaruga", back: "Vertebrato, rettile" },
              { front: "🐧 pinguino", back: "Vertebrato, uccello (non vola, nuota)" },
              { front: "🐋 balena", back: "Vertebrato, mammifero" },
              { front: "🦎 salamandra", back: "Vertebrato, anfibio (non è una lucertola!)" },
              { front: "🪸 corallo", back: "Celenterato (cnidario)" }
            ]
          }
        },
        {
          label: "🌍 Come si contano nel mondo",
          html: `<p>Su circa 1,5 milioni di specie animali descritte:</p>
<ul>
<li>insetti: circa <b>1 milione</b> (i soli coleotteri sono circa 400 000!);</li>
<li>altri invertebrati (molluschi, aracnidi, crostacei, vermi…): diverse centinaia di migliaia;</li>
<li>pesci: circa 36 000; uccelli: circa 11 000; rettili: circa 12 000; anfibi: circa 8 700; mammiferi: circa 6 500.</li>
</ul>
<p>Il biologo britannico J.B.S. Haldane, a chi gli chiedeva che cosa avesse imparato sul Creatore studiando la natura, rispose scherzando: \"Che ha una passione smodata per i coleotteri\".</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa del regno animale: tocca e scopri il perché",
      nodes: [
        { id: "animali", label: "Animali", x: 50, y: 5, color: "#f97316", html: "Pluricellulari, eucarioti, eterotrofi.", why: "I primi animali comparvero nei mari più di 600 milioni di anni fa. Poiché non fanno la fotosintesi, si sono evoluti per muoversi e cercare il cibo: da qui muscoli e sistema nervoso." },
        { id: "invert", label: "Invertebrati", x: 25, y: 25, color: "#a16207", html: "Senza colonna vertebrale: circa il 95% delle specie.", why: "Non è un vero gruppo di parenti, ma tutti quelli che \"non sono vertebrati\": per questo comprende animali diversissimi, dalla spugna al polpo." },
        { id: "vert", label: "Vertebrati", x: 75, y: 25, color: "#2563eb", html: "Con colonna vertebrale e scheletro interno.", why: "Discendono da piccoli cordati marini con una corda dorsale flessibile. I primi pesci senza mascelle comparvero circa 500 milioni di anni fa." },
        { id: "artropodi", label: "Artropodi", x: 10, y: 52, color: "#d97706", html: "Zampe articolate ed esoscheletro di chitina.", why: "L'esoscheletro protegge e impedisce di seccarsi: per questo gli artropodi furono tra i primi animali a conquistare la terraferma, oltre 400 milioni di anni fa." },
        { id: "molluschi", label: "Molluschi", x: 35, y: 52, color: "#ca8a04", html: "Corpo molle, spesso con conchiglia.", why: "La conchiglia è fatta di carbonato di calcio prodotto dal mantello: cresce insieme all'animale, senza bisogno di muta." },
        { id: "eterotermi", label: "Eterotermi", x: 60, y: 52, color: "#0ea5e9", html: "Pesci, anfibi, rettili: temperatura variabile.", why: "Usano il calore dell'ambiente: consumano poca energia e possono restare settimane senza mangiare, ma con il freddo diventano lenti." },
        { id: "omeotermi", label: "Omeotermi", x: 88, y: 52, color: "#ef4444", html: "Uccelli e mammiferi: temperatura costante.", why: "Producono calore bruciando il cibo e lo trattengono con penne o peli: possono essere attivi anche al freddo, ma devono mangiare molto di più." },
        { id: "uovo", label: "Uovo con guscio", x: 45, y: 80, color: "#facc15", html: "L'uovo amniotico di rettili e uccelli.", why: "Contiene la sua \"piscina\" di liquido: comparve circa 310 milioni di anni fa e permise ai vertebrati di riprodursi lontano dall'acqua, a differenza degli anfibi." },
        { id: "evoluzione", label: "Evoluzione", x: 50, y: 97, color: "#16a34a", html: "Tutti gli animali discendono da antenati comuni.", why: "Charles Darwin lo spiegò nel 1859 con la selezione naturale. Per questo la classificazione rispecchia un albero di parentele." }
      ],
      edges: [
        ["animali", "invert", "senza colonna"],
        ["animali", "vert", "con colonna"],
        ["invert", "artropodi", "il gruppo più grande"],
        ["invert", "molluschi", "comprende"],
        ["vert", "eterotermi", "pesci, anfibi, rettili"],
        ["vert", "omeotermi", "uccelli, mammiferi"],
        ["eterotermi", "uovo", "i rettili inventano l'"],
        ["uovo", "evoluzione", "esempio di"],
        ["artropodi", "evoluzione", "esempio di"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: i vertebrati",
      questions: [
        { type: "mc", q: "Quali vertebrati sono omeotermi?", options: ["Pesci e anfibi", "Rettili e uccelli", "Uccelli e mammiferi", "Tutti"], answer: 2, explain: "Uccelli e mammiferi mantengono costante la temperatura del corpo." },
        { type: "tf", q: "Il pipistrello è un uccello perché vola.", answer: false, explain: "Il pipistrello ha i peli e allatta: è un mammifero." },
        { type: "mc", q: "Quale classe fa la metamorfosi da larva acquatica ad adulto?", options: ["Rettili", "Anfibi", "Uccelli"], answer: 1, explain: "Gli anfibi: il girino diventa rana." }
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Animali: <b>pluricellulari, eucarioti, eterotrofi</b>.</li>
<li><b>Invertebrati</b> (95% delle specie): poriferi, celenterati, vermi, molluschi, <b>artropodi</b>, echinodermi.</li>
<li>Insetti: 3 parti, <b>6 zampe</b>; aracnidi: 2 parti, <b>8 zampe</b>.</li>
<li><b>Vertebrati</b>: pesci, anfibi, rettili (<b>eterotermi</b>); uccelli, mammiferi (<b>omeotermi</b>).</li>
<li>Ovipari, vivipari, ovovivipari.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Invertebrato", d: "Animale senza colonna vertebrale." },
    { t: "Vertebrato", d: "Animale con colonna vertebrale e scheletro interno." },
    { t: "Esoscheletro", d: "Scheletro esterno di chitina degli artropodi." },
    { t: "Muta", d: "Cambio dell'esoscheletro (o della pelle) durante la crescita." },
    { t: "Metamorfosi", d: "Grande trasformazione del corpo durante lo sviluppo (girino → rana, bruco → farfalla)." },
    { t: "Eterotermo", d: "Animale la cui temperatura varia con quella dell'ambiente." },
    { t: "Omeotermo", d: "Animale che mantiene costante la temperatura corporea." },
    { t: "Oviparo", d: "Animale che depone le uova." },
    { t: "Viviparo", d: "Animale il cui piccolo si sviluppa nel corpo della madre e nasce già formato." },
    { t: "Simmetria bilaterale", d: "Corpo divisibile in due metà speculari, destra e sinistra." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Che cosa distingue i vertebrati dagli invertebrati?", options: ["Le zampe", "La colonna vertebrale", "Le ali", "Il colore del sangue"], answer: 1, explain: "I vertebrati hanno la colonna vertebrale." },
      { type: "tf", q: "Gli invertebrati sono molte più specie dei vertebrati.", answer: true, explain: "Sono circa il 95% di tutte le specie animali." },
      { type: "num", q: "Quante zampe ha un insetto?", answer: 6, explain: "Gli insetti hanno 3 paia di zampe attaccate al torace." },
      { type: "mc", q: "La stella marina è…", options: ["un pesce", "un mollusco", "un echinoderma", "un celenterato"], answer: 2, explain: "Stelle e ricci di mare sono echinodermi, \"pelle spinosa\"." },
      { type: "mc", q: "Quale animale è un mollusco bivalve?", options: ["Chiocciola", "Cozza", "Seppia", "Granchio"], answer: 1, explain: "La cozza ha una conchiglia formata da due valve." },
      { type: "text", q: "Come si chiama lo scheletro esterno degli artropodi?", answer: ["esoscheletro", "l'esoscheletro"], explain: "L'esoscheletro, fatto di chitina." },
      { type: "mc", q: "Quale classe di vertebrati ha la pelle nuda e umida?", options: ["Rettili", "Anfibi", "Uccelli", "Pesci"], answer: 1, explain: "Gli anfibi respirano anche attraverso la pelle, che deve restare umida." },
      { type: "mc", q: "Che cosa hanno solo i mammiferi?", options: ["Le uova", "Le ghiandole mammarie e i peli", "I polmoni", "La colonna vertebrale"], answer: 1, explain: "Peli e ghiandole mammarie sono esclusivi dei mammiferi." },
      { type: "tf", q: "La lucertola è un animale omeotermo.", answer: false, explain: "È un rettile eterotermo: si scalda al sole." },
      { type: "order", q: "Metti in ordine le fasi della vita di una rana.", items: ["Uova in acqua", "Girino con branchie", "Girino con le zampe", "Rana adulta con polmoni"], explain: "È la metamorfosi degli anfibi." },
      { type: "mc", q: "Un animale le cui uova si schiudono dentro il corpo della madre è…", options: ["oviparo", "viviparo", "ovoviviparo"], answer: 2, explain: "Ovoviviparo, come la vipera." },
      { type: "mc", q: "L'ornitorinco è un mammifero particolare perché…", options: ["non ha peli", "depone le uova", "respira con le branchie"], answer: 1, explain: "È un monotremo: allatta i piccoli ma depone le uova." }
    ]
  }
});

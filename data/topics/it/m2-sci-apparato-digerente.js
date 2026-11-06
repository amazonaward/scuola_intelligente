TOPIC('it', {
  id: "m2-sci-apparato-digerente",
  title: "L'apparato digerente",
  intro: "Un panino non può entrare così com'è nelle tue cellule: va <b>spezzettato</b> fino a molecole piccolissime. Questo lavoro lo fa l'<b>apparato digerente</b>, un tubo lungo circa <b>8–9 metri</b> che va dalla bocca all'ano, aiutato da ghiandole come il fegato e il pancreas.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Perché dobbiamo digerire",
      html: `<p>Gli alimenti contengono <b>nutrienti</b>:</p>
<ul>
<li><b>carboidrati</b> (pane, pasta, frutta): energia pronta;</li>
<li><b>proteine</b> (carne, pesce, legumi, uova): servono a costruire e riparare i tessuti;</li>
<li><b>grassi</b> o lipidi (olio, burro): energia di riserva e costruzione delle membrane;</li>
<li><b>vitamine</b>, <b>sali minerali</b> e <b>acqua</b>, che non hanno bisogno di essere digeriti.</li>
</ul>
<p>Carboidrati, proteine e grassi sono però <b>macromolecole</b>, troppo grandi per attraversare la parete dell'intestino. La <b>digestione</b> le spezza in molecole semplici:</p>
<table>
<tr><th>Macromolecola</th><th>→ diventa</th></tr>
<tr><td>amido, saccarosio (carboidrati)</td><td><b>glucosio</b> e altri zuccheri semplici</td></tr>
<tr><td>proteine</td><td><b>amminoacidi</b></td></tr>
<tr><td>grassi</td><td><b>acidi grassi e glicerolo</b></td></tr>
</table>
<p>La digestione è sia <b>meccanica</b> (masticare, rimescolare) sia <b>chimica</b>, grazie agli <b>enzimi</b>: proteine speciali che, come forbici molecolari, tagliano un tipo preciso di molecola.</p>
<p>Le fasi sono quattro: <b>ingestione</b> → <b>digestione</b> → <b>assorbimento</b> → <b>eliminazione</b> (egestione).</p>`
    },
    {
      type: "widget",
      title: "Il viaggio del cibo: dai un nome agli organi",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="420" fill="#fff7ed"/>
<ellipse cx="300" cy="40" rx="60" ry="28" fill="#fecaca" stroke="#b91c1c" stroke-width="3"/>
<rect x="290" y="68" width="20" height="110" fill="#fda4af" stroke="#be123c" stroke-width="2"/>
<path d="M300 175 C380 160 420 200 400 240 C385 270 330 260 320 235 C310 215 300 200 300 175 Z" fill="#f9a8d4" stroke="#9d174d" stroke-width="3"/>
<path d="M180 150 C230 130 290 150 290 175 C280 210 220 220 180 200 C160 190 160 160 180 150 Z" fill="#92400e" stroke="#451a03" stroke-width="3"/>
<path d="M280 260 C310 275 350 270 370 255" fill="none" stroke="#ca8a04" stroke-width="16"/>
<path d="M200 280 L200 380 L420 380 L420 280 Z" fill="none" stroke="#a16207" stroke-width="22"/>
<path d="M240 300 q20 15 40 0 q20 -15 40 0 q20 15 40 0 M240 330 q20 15 40 0 q20 -15 40 0 q20 15 40 0 M240 355 q20 15 40 0 q20 -15 40 0 q20 15 40 0" fill="none" stroke="#f472b6" stroke-width="10"/>
<rect x="290" y="380" width="20" height="30" fill="#a16207"/>
</svg>`,
        spots: [
          { x: 300, y: 40, label: "Bocca" },
          { x: 300, y: 120, label: "Esofago" },
          { x: 360, y: 215, label: "Stomaco" },
          { x: 215, y: 175, label: "Fegato" },
          { x: 330, y: 268, label: "Pancreas" },
          { x: 300, y: 330, label: "Intestino tenue" },
          { x: 420, y: 330, label: "Intestino crasso" },
          { x: 300, y: 400, label: "Retto e ano" }
        ]
      },
      caption: "Schema semplificato. Il fegato è a destra della persona (cioè a sinistra nel disegno, che guarda il corpo di fronte)."
    },
    {
      type: "text",
      title: "2. Bocca, faringe ed esofago",
      html: `<p>Nella <b>bocca</b> inizia la digestione:</p>
<ul>
<li>i <b>denti</b> tagliano e macinano (digestione meccanica). Un adulto ha <b>32 denti</b>: 8 incisivi (tagliano), 4 canini (strappano), 8 premolari e 12 molari (macinano). I bambini hanno 20 denti da latte;</li>
<li>le <b>ghiandole salivari</b> producono circa 1–1,5 litri di <b>saliva</b> al giorno. La saliva inumidisce il cibo e contiene l'enzima <b>amilasi salivare</b> (ptialina), che comincia a trasformare l'amido in zuccheri;</li>
<li>la <b>lingua</b> rimescola e forma il <b>bolo</b>, una pallina morbida.</li>
</ul>
<p>Con la <b>deglutizione</b> il bolo passa nella <b>faringe</b>; una "linguetta", l'<b>epiglottide</b>, chiude la trachea perché il cibo non vada nei polmoni. Poi il bolo scende nell'<b>esofago</b>, un tubo di circa 25 cm, spinto dalla <b>peristalsi</b>: onde di contrazione dei muscoli, come quando spremi un tubetto di dentifricio. Funziona anche a testa in giù!</p>`
    },
    {
      type: "3d",
      title: "Dentro un dente, in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#f8fafc", label: "Smalto (il tessuto più duro del corpo)" },
          { r: 0.82, color: "#fde68a", label: "Dentina" },
          { r: 0.45, color: "#f87171", label: "Polpa (nervi e vasi)" }
        ]
      },
      caption: "Lo smalto è fatto soprattutto di idrossiapatite, un minerale di calcio e fosfato. I batteri della placca, nutrendosi di zuccheri, producono acidi che lo sciolgono: è la carie. Per questo si lavano i denti dopo ogni pasto!"
    },
    {
      type: "text",
      title: "3. Lo stomaco",
      html: `<p>Lo <b>stomaco</b> è una sacca muscolare a forma di "J" che può contenere fino a 1–1,5 litri. Il bolo entra attraverso una valvola, il <b>cardias</b>, e resta nello stomaco da <b>2 a 4 ore</b>.</p>
<p>Le pareti producono il <b>succo gastrico</b> (circa 2 litri al giorno), che contiene:</p>
<ul>
<li><b>acido cloridrico</b> (HCl): rende l'ambiente molto acido (pH 1,5–2), uccide molti batteri e attiva gli enzimi;</li>
<li><b>pepsina</b>: enzima che comincia a spezzare le <b>proteine</b>;</li>
<li><b>muco</b>: protegge la parete dello stomaco dal suo stesso acido.</li>
</ul>
<p>I muscoli rimescolano il cibo e lo trasformano in una poltiglia semiliquida, il <b>chimo</b>, che passa a piccole dosi nell'intestino attraverso un'altra valvola, il <b>piloro</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: bocca e stomaco",
      questions: [
        { type: "mc", q: "Quale enzima della saliva comincia a digerire l'amido?", options: ["Pepsina", "Amilasi", "Lipasi"], answer: 1, explain: "L'amilasi salivare (ptialina) trasforma l'amido in zuccheri più semplici." },
        { type: "text", q: "Come si chiama la pallina di cibo masticato che si forma in bocca?", answer: ["bolo", "il bolo", "bolo alimentare"], explain: "Il bolo alimentare." },
        { type: "tf", q: "Lo stomaco si protegge dal proprio acido grazie al muco.", answer: true, explain: "Lo strato di muco impedisce all'acido cloridrico di danneggiare la parete." },
        { type: "num", q: "Quanti denti ha un adulto con la dentatura completa?", answer: 32, explain: "8 incisivi, 4 canini, 8 premolari, 12 molari." }
      ]
    },
    {
      type: "text",
      title: "4. L'intestino tenue: digestione finale e assorbimento",
      html: `<p>L'<b>intestino tenue</b> è lungo circa <b>6–7 metri</b> e ha tre tratti: <b>duodeno</b> (circa 25 cm), <b>digiuno</b> e <b>ileo</b>. Qui la digestione si completa grazie a tre succhi:</p>
<ul>
<li><b>bile</b>, prodotta dal <b>fegato</b> e conservata nella <b>cistifellea</b>: non è un enzima, ma <b>emulsiona</b> i grassi, cioè li divide in goccioline minuscole (come fa il sapone con l'olio), così gli enzimi li attaccano meglio;</li>
<li><b>succo pancreatico</b>, prodotto dal <b>pancreas</b>: neutralizza l'acidità del chimo e contiene enzimi per tutti i nutrienti (amilasi, tripsina, lipasi);</li>
<li><b>succo enterico</b>, prodotto dalla parete intestinale, che completa il lavoro.</li>
</ul>
<p>Alla fine il cibo è diventato <b>chilo</b>: un liquido con glucosio, amminoacidi, acidi grassi, vitamine, sali e acqua.</p>
<p>Ora avviene l'<b>assorbimento</b>. La parete interna del tenue è coperta da milioni di <b>villi intestinali</b>, piccole dita alte circa 1 mm, a loro volta coperte di <b>microvilli</b>. Grazie a queste pieghe la superficie di assorbimento è enorme: circa <b>30–40 m²</b>, come un piccolo appartamento! Dentro ogni villo ci sono <b>capillari sanguigni</b> (che assorbono zuccheri e amminoacidi e li portano al fegato) e un <b>vaso linfatico</b> (che assorbe la maggior parte dei grassi).</p>`
    },
    {
      type: "svg",
      title: "I villi intestinali",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf2f8"/>
<rect x="0" y="230" width="600" height="70" fill="#f9a8d4"/>
<g fill="#fbcfe8" stroke="#be185d" stroke-width="3">
<path d="M40 230 L40 110 Q70 70 100 110 L100 230 Z"/>
<path d="M130 230 L130 90 Q160 50 190 90 L190 230 Z"/>
<path d="M220 230 L220 110 Q250 70 280 110 L280 230 Z"/>
<path d="M310 230 L310 90 Q340 50 370 90 L370 230 Z"/>
</g>
<path d="M150 225 L150 100 Q160 80 170 100 L170 225" fill="none" stroke="#dc2626" stroke-width="5"/>
<path d="M155 225 L155 105 M165 105 L165 225" stroke="#2563eb" stroke-width="3"/>
<line x1="160" y1="225" x2="160" y2="110" stroke="#eab308" stroke-width="5"/>
<circle cx="70" cy="40" r="9" fill="#22c55e"/><circle cx="250" cy="45" r="9" fill="#22c55e"/><circle cx="330" cy="30" r="9" fill="#22c55e"/>
<circle cx="120" cy="60" r="7" fill="#f97316"/><circle cx="300" cy="65" r="7" fill="#f97316"/>
<text x="400" y="40" font-size="16" fill="#15803d">● glucosio</text>
<text x="400" y="65" font-size="16" fill="#c2410c">● amminoacidi</text>
<text x="400" y="110" font-size="16" fill="#b91c1c">capillari sanguigni</text>
<text x="400" y="135" font-size="16" fill="#a16207">vaso linfatico (grassi)</text>
<text x="400" y="180" font-size="16" fill="#9d174d" font-weight="bold">villo ≈ 1 mm</text>
<text x="300" y="275" font-size="17" text-anchor="middle" fill="#831843" font-weight="bold">parete dell'intestino tenue</text>
</svg>`,
      caption: "Le molecole piccole attraversano la parete dei villi ed entrano nel sangue o nella linfa."
    },
    {
      type: "text",
      title: "5. Intestino crasso ed eliminazione",
      html: `<p>Ciò che non è stato assorbito passa nell'<b>intestino crasso</b> (circa <b>1,5 metri</b>), formato da <b>cieco</b> (con l'<b>appendice</b>), <b>colon</b> (ascendente, trasverso, discendente) e <b>retto</b>.</p>
<ul>
<li>Qui viene riassorbita gran parte dell'<b>acqua</b> e dei sali.</li>
<li>Vivono migliaia di miliardi di <b>batteri buoni</b> (il <b>microbiota intestinale</b>) che digeriscono parte delle <b>fibre</b> vegetali, producono vitamine come la <b>K</b> e alcune del gruppo B e ci proteggono dai microbi nocivi.</li>
<li>I residui si compattano e formano le <b>feci</b>, eliminate attraverso l'<b>ano</b>.</li>
</ul>
<p>Le <b>fibre</b> (in verdura, frutta, cereali integrali, legumi) non sono digerite da noi, ma sono fondamentali: aiutano l'intestino a muoversi e nutrono i batteri buoni.</p>
<p>Il viaggio completo del cibo dura in genere da <b>24 a 72 ore</b>.</p>`
    },
    {
      type: "widget",
      title: "Chi digerisce che cosa?",
      widget: "match",
      options: {
        pairs: [
          ["Amilasi (saliva e pancreas)", "Amido → zuccheri"],
          ["Pepsina (stomaco)", "Proteine → pezzi più piccoli"],
          ["Tripsina (pancreas)", "Proteine → amminoacidi"],
          ["Lipasi (pancreas)", "Grassi → acidi grassi e glicerolo"],
          ["Bile (fegato)", "Emulsiona i grassi in goccioline"],
          ["Acido cloridrico (stomaco)", "Uccide i batteri e attiva la pepsina"]
        ]
      },
      caption: "Abbina ogni sostanza al suo lavoro."
    },
    {
      type: "example",
      title: "Esempio pratico: l'esperimento del pane",
      html: `<p>Prendi un pezzetto di <b>pane</b> senza zucchero e masticalo a lungo, per almeno <b>2 minuti</b>, senza inghiottirlo.</p>
<p>A un certo punto sentirai un sapore <b>dolce</b>! È l'amilasi della saliva che ha spezzato l'<b>amido</b> (che non è dolce) in zuccheri più piccoli come il <b>maltosio</b> (che è dolce). Stai vedendo un enzima al lavoro dentro la tua bocca.</p>
<p>Prova anche con un cracker: succede la stessa cosa.</p>`
    },
    {
      type: "example",
      title: "Esempio pratico: leggere un'etichetta e il piatto sano",
      html: `<p>Su una confezione di biscotti leggi, per 100 g: carboidrati 70 g (di cui zuccheri 25 g), grassi 18 g (di cui saturi 8 g), proteine 7 g, fibre 3 g, sale 0,5 g.</p>
<p>Significa che un quarto del biscotto è zucchero! Le linee guida dell'OMS consigliano di non superare circa <b>25 g di zuccheri aggiunti al giorno</b> per un ragazzo (circa 6 cucchiaini).</p>
<p>Il "<b>piatto sano</b>" (Harvard) suggerisce: <b>metà</b> piatto di verdura e frutta, <b>un quarto</b> di cereali preferibilmente integrali, <b>un quarto</b> di proteine (meglio legumi, pesce, carni bianche), un filo di olio d'oliva e acqua come bevanda. È molto simile alla <b>dieta mediterranea</b>, dichiarata dall'UNESCO Patrimonio culturale immateriale dell'umanità nel 2010.</p>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire la digestione",
      intro: "Se i nomi degli enzimi ti sembrano tutti uguali, prova con queste immagini.",
      tabs: [
        {
          label: "🏭 La catena di smontaggio",
          html: `<p>Pensa all'apparato digerente come a una <b>fabbrica al contrario</b>: invece di montare oggetti, li <b>smonta</b> pezzo per pezzo.</p>
<ul>
<li><b>Bocca</b> = reparto taglio (denti) e primo lavaggio (saliva);</li>
<li><b>Stomaco</b> = la betoniera acida che rimescola;</li>
<li><b>Duodeno</b> = il reparto con gli attrezzi speciali (enzimi del pancreas, sapone della bile);</li>
<li><b>Tenue</b> = il nastro dove i pezzi piccoli vengono "spediti" nel sangue;</li>
<li><b>Crasso</b> = il reparto che recupera l'acqua e compatta gli scarti;</li>
<li><b>Ano</b> = l'uscita dei rifiuti.</li>
</ul>`
        },
        {
          label: "🧱 Mattoncini da smontare",
          html: `<p>Una proteina è come una lunga <b>collana di perline</b> (gli <b>amminoacidi</b>, ne esistono 20 tipi). L'amido è una lunga collana di perline tutte uguali (il <b>glucosio</b>).</p>
<p>Gli enzimi sono <b>forbici specializzate</b>: l'amilasi taglia solo le collane di glucosio, la pepsina solo le collane di amminoacidi. Le perline singole sono abbastanza piccole da passare attraverso la parete dei villi; poi le cellule del corpo le useranno per costruire le <b>proprie</b> collane, cioè le proteine umane.</p>
<p>Qui vedi una molecola piccola, l'<b>acqua</b> (H<sub>2</sub>O): gli enzimi digestivi usano proprio l'acqua per "spezzare" i legami (si chiama <b>idrolisi</b>, "rottura con l'acqua").</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.7, color: "#ef4444", label: "O" },
              { x: 0.95, y: 0.6, z: 0, r: 0.45, color: "#e2e8f0", label: "H" },
              { x: -0.95, y: 0.6, z: 0, r: 0.45, color: "#e2e8f0", label: "H" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        },
        {
          label: "🐄 Come digeriscono gli altri animali",
          html: `<p>Confrontare ci aiuta a capire:</p>
<ul>
<li>la <b>mucca</b> (ruminante) ha uno stomaco a <b>4 camere</b> (rumine, reticolo, omaso, abomaso) e rimastica l'erba: nel rumine miliardi di microbi digeriscono la <b>cellulosa</b>, che noi non riusciamo a digerire;</li>
<li>gli <b>uccelli</b> non hanno denti: inghiottono sassolini che, nel <b>ventriglio</b>, macinano i semi;</li>
<li>il <b>serpente</b> inghiotte la preda intera e può impiegare settimane per digerirla;</li>
<li>gli <b>erbivori</b> hanno in genere l'intestino molto più lungo dei <b>carnivori</b>, perché i vegetali si digeriscono più lentamente. Il nostro intestino ha una lunghezza intermedia: siamo <b>onnivori</b>.</li>
</ul>`
        },
        {
          label: "📏 Il tubo srotolato",
          html: `<p>Se srotolassimo tutto il tubo digerente di un adulto, sarebbe lungo circa come <b>un autobus</b>. Ecco le proporzioni approssimative:</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="20" y="80" width="10" height="40" fill="#ef4444"/>
<rect x="30" y="80" width="17" height="40" fill="#fb923c"/>
<rect x="47" y="80" width="17" height="40" fill="#ec4899"/>
<rect x="64" y="80" width="420" height="40" fill="#f9a8d4"/>
<rect x="484" y="80" width="100" height="40" fill="#a16207"/>
<text x="25" y="70" font-size="14" fill="#b91c1c">bocca</text>
<text x="20" y="145" font-size="14" fill="#c2410c">esofago 25 cm</text>
<text x="60" y="168" font-size="14" fill="#9d174d">stomaco 25 cm</text>
<text x="270" y="105" font-size="18" text-anchor="middle" fill="#831843" font-weight="bold">intestino tenue ≈ 6–7 m</text>
<text x="534" y="150" font-size="15" text-anchor="middle" fill="#713f12" font-weight="bold">crasso ≈ 1,5 m</text>
<text x="300" y="205" font-size="17" text-anchor="middle" fill="#0f172a">Totale circa 8–9 metri</text>
</svg>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? L'uomo con il buco nello stomaco",
      html: `<p>Nel <b>1822</b> un giovane cacciatore canadese, <b>Alexis St. Martin</b>, fu colpito per sbaglio da un colpo di fucile. Guarì, ma gli rimase un <b>foro permanente</b> nello stomaco. Il medico militare <b>William Beaumont</b> per anni inserì attraverso il foro pezzi di cibo legati a un filo e osservò quanto tempo servisse per digerirli. Così dimostrò che la digestione è soprattutto un processo <b>chimico</b>, dovuto al succo gastrico, e non solo un "rimescolamento". St. Martin visse fino a 78 anni!</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il secondo cervello",
      html: `<p>Le pareti dell'intestino contengono circa <b>500 milioni di neuroni</b>, più di quelli del midollo spinale: per questo si parla di "<b>secondo cervello</b>". È anche il motivo per cui quando sei agitato senti le "farfalle nello stomaco". E il microbiota intestinale conta circa <b>40 000 miliardi</b> di batteri, più o meno quante sono le cellule del nostro corpo!</p>`
    },
    {
      type: "conceptMap",
      title: "Mappa della digestione: tocca i nodi e scopri il perché",
      nodes: [
        { id: "cibo", label: "Cibo e nutrienti", x: 50, y: 6, color: "#f59e0b", html: "Carboidrati, proteine, grassi, vitamine, sali, acqua.", why: "Il corpo ha bisogno di energia (calorie) e di materiale da costruzione. Le grandi molecole degli alimenti vengono da altri esseri viventi e devono essere smontate per diventare \"nostre\"." },
        { id: "mecc", label: "Digestione meccanica", x: 18, y: 28, color: "#ef4444", html: "Masticazione, peristalsi, rimescolamento dello stomaco.", why: "Pezzi più piccoli hanno più superficie esposta, quindi gli enzimi lavorano più in fretta. Per lo stesso motivo lo zucchero a velo si scioglie prima di una zolletta." },
        { id: "enzimi", label: "Enzimi", x: 50, y: 30, color: "#a855f7", html: "Proteine che spezzano in modo specifico le macromolecole.", why: "Il primo enzima fu scoperto nel 1833 da Payen e Persoz (la diastasi, che digerisce l'amido). Ogni enzima ha una forma che si incastra solo con certe molecole: è il modello \"chiave-serratura\" proposto da Emil Fischer nel 1894." },
        { id: "stomaco", label: "Stomaco acido", x: 82, y: 28, color: "#ec4899", html: "Succo gastrico con HCl e pepsina; produce il chimo.", why: "L'acidità uccide gran parte dei microbi ingeriti e serve alla pepsina, che lavora bene solo a pH molto basso. William Beaumont dimostrò il ruolo chimico del succo gastrico (1833)." },
        { id: "fegpanc", label: "Fegato e pancreas", x: 82, y: 55, color: "#92400e", html: "Ghiandole annesse: bile e succo pancreatico.", why: "Il fegato è la ghiandola più grande del corpo (circa 1,5 kg). Il pancreas produce anche l'insulina, l'ormone che regola il glucosio nel sangue, scoperto nel 1921 da Banting e Best." },
        { id: "tenue", label: "Intestino tenue", x: 50, y: 58, color: "#f472b6", html: "Completa la digestione e assorbe i nutrienti.", why: "È il tratto più lungo perché l'assorbimento richiede tempo e superficie: pieghe, villi e microvilli moltiplicano la superficie fino a decine di metri quadrati." },
        { id: "villi", label: "Villi → sangue e linfa", x: 20, y: 62, color: "#dc2626", html: "Le molecole piccole passano nei capillari e nei vasi linfatici.", why: "Qui l'apparato digerente si collega a quello circolatorio: il sangue dell'intestino va prima al fegato (vena porta), che controlla e immagazzina i nutrienti." },
        { id: "crasso", label: "Intestino crasso e microbiota", x: 50, y: 85, color: "#a16207", html: "Riassorbe acqua; i batteri digeriscono le fibre e producono vitamine.", why: "Il microbiota è una vera alleanza: noi diamo cibo e casa ai batteri, loro ci aiutano a digerire e ci difendono. Gli antibiotici possono alterarlo." },
        { id: "salute", label: "Alimentazione sana", x: 15, y: 88, color: "#16a34a", html: "Dieta varia, fibre, acqua, pochi zuccheri aggiunti.", why: "La dieta mediterranea, studiata dall'americano Ancel Keys negli anni '50 proprio in Italia meridionale, è associata a minori malattie cardiovascolari." }
      ],
      edges: [
        ["cibo", "mecc", "subisce"],
        ["cibo", "enzimi", "viene spezzato dagli"],
        ["enzimi", "stomaco", "pepsina nello"],
        ["fegpanc", "tenue", "versano succhi nel"],
        ["enzimi", "tenue", "finiscono il lavoro nel"],
        ["tenue", "villi", "assorbe con i"],
        ["tenue", "crasso", "passa il resto al"],
        ["salute", "cibo", "sceglie il"]
      ]
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li>Percorso: <b>bocca → faringe → esofago → stomaco → intestino tenue → intestino crasso → ano</b>.</li>
<li>Ghiandole annesse: <b>ghiandole salivari, fegato (bile), pancreas</b>.</li>
<li>Digestione meccanica (denti, peristalsi) + chimica (<b>enzimi</b>).</li>
<li>Carboidrati → <b>glucosio</b>; proteine → <b>amminoacidi</b>; grassi → <b>acidi grassi e glicerolo</b>.</li>
<li>L'<b>assorbimento</b> avviene nei <b>villi</b> dell'intestino tenue; il crasso riassorbe <b>acqua</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: intestino",
      questions: [
        { type: "mc", q: "Dove avviene la maggior parte dell'assorbimento dei nutrienti?", options: ["Stomaco", "Intestino tenue", "Intestino crasso"], answer: 1, explain: "Nei villi dell'intestino tenue." },
        { type: "tf", q: "La bile è un enzima che spezza i grassi.", answer: false, explain: "La bile non è un enzima: emulsiona i grassi in goccioline, poi la lipasi li spezza." },
        { type: "mc", q: "In quale tratto vive la maggior parte dei batteri intestinali?", options: ["Esofago", "Stomaco", "Intestino crasso"], answer: 2, explain: "Il microbiota abita soprattutto il colon." }
      ]
    }
  ],
  glossary: [
    { t: "Digestione", d: "Trasformazione degli alimenti in molecole semplici assorbibili." },
    { t: "Enzima", d: "Proteina che accelera una reazione chimica specifica, ad esempio spezzando una molecola." },
    { t: "Bolo", d: "Pallina di cibo masticato e impastato con la saliva." },
    { t: "Peristalsi", d: "Onde di contrazione muscolare che fanno avanzare il cibo nel tubo digerente." },
    { t: "Chimo", d: "Poltiglia acida che esce dallo stomaco." },
    { t: "Chilo", d: "Liquido ricco di nutrienti che si forma nell'intestino tenue." },
    { t: "Bile", d: "Liquido prodotto dal fegato che emulsiona i grassi." },
    { t: "Villi intestinali", d: "Piccole sporgenze della parete del tenue che assorbono i nutrienti." },
    { t: "Microbiota", d: "Insieme dei microrganismi che vivono nell'intestino." },
    { t: "Epiglottide", d: "Linguetta che chiude la trachea durante la deglutizione." },
    { t: "Fibre", d: "Parti dei vegetali che non digeriamo ma che aiutano l'intestino." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Metti in ordine il percorso del cibo.", items: ["Bocca", "Faringe", "Esofago", "Stomaco", "Intestino tenue", "Intestino crasso"], explain: "Bocca, faringe, esofago, stomaco, tenue, crasso, poi retto e ano." },
      { type: "mc", q: "In che cosa vengono trasformate le proteine?", options: ["Glucosio", "Amminoacidi", "Acidi grassi"], answer: 1, explain: "Le proteine sono catene di amminoacidi." },
      { type: "mc", q: "Quale organo produce la bile?", options: ["Pancreas", "Stomaco", "Fegato", "Cistifellea"], answer: 2, explain: "La produce il fegato; la cistifellea la conserva." },
      { type: "tf", q: "La digestione dell'amido comincia già in bocca.", answer: true, explain: "Grazie all'amilasi salivare." },
      { type: "text", q: "Come si chiama il movimento ondulatorio che spinge il cibo lungo l'esofago?", answer: ["peristalsi", "la peristalsi"], explain: "La peristalsi." },
      { type: "mc", q: "Perché la superficie interna dell'intestino tenue è così grande?", options: ["Perché è pieno d'aria", "Per la presenza di pieghe, villi e microvilli", "Perché contiene molti batteri"], answer: 1, explain: "Villi e microvilli moltiplicano la superficie di assorbimento." },
      { type: "num", q: "Circa quanti metri è lungo l'intestino tenue di un adulto?", answer: 6.5, tol: 1, unit: "m", explain: "Circa 6–7 metri." },
      { type: "mc", q: "Quale funzione svolge l'intestino crasso?", options: ["Produce la bile", "Riassorbe acqua e sali", "Digerisce le proteine con la pepsina"], answer: 1, explain: "Il crasso riassorbe acqua e ospita il microbiota." },
      { type: "tf", q: "Il succo gastrico è basico (non acido).", answer: false, explain: "È fortemente acido, pH 1,5–2, per l'acido cloridrico." },
      { type: "mc", q: "Che cosa impedisce al cibo di entrare nella trachea?", options: ["Il piloro", "L'epiglottide", "Il cardias"], answer: 1, explain: "L'epiglottide chiude la trachea durante la deglutizione." },
      { type: "text", q: "Come si chiamano le proteine che spezzano le molecole degli alimenti?", answer: ["enzimi", "gli enzimi", "enzimi digestivi"], explain: "Gli enzimi digestivi." },
      { type: "mc", q: "Masticando a lungo il pane si sente un sapore dolce perché…", options: ["il pane contiene sale", "l'amilasi trasforma l'amido in zuccheri", "la lingua produce zucchero"], answer: 1, explain: "L'amido viene spezzato in maltosio, che è dolce." }
    ]
  }
});

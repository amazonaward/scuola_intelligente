TOPIC('it', {
  id: "p5-ita-verbi-transitivi",
  title: "Verbi transitivi e intransitivi",
  intro: "Alcune azioni \"passano\" su qualcosa o qualcuno (<i>mangio una mela</i>), altre restano su chi le fa (<i>dormo</i>). Scopriamo i verbi <b>transitivi</b> e <b>intransitivi</b> e le tre forme del verbo: <b>attiva</b>, <b>passiva</b> e <b>riflessiva</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Transitivo = l'azione \"transita\"",
      html: `<p><b>Transitivo</b> viene dal latino <i>transire</i>, "passare oltre". Un verbo è:</p>
<ul>
<li><b>transitivo</b> quando l'azione <b>passa</b> direttamente dal soggetto a un <b>complemento oggetto</b> (chi? che cosa?): «Marta <u>legge</u> <b>un libro</b>», «Il cane <u>morde</u> <b>l'osso</b>».</li>
<li><b>intransitivo</b> quando l'azione <b>resta</b> sul soggetto e <b>non può avere</b> il complemento oggetto: «Il bambino <u>dorme</u>», «Vado a scuola», «Il fiore <u>sboccia</u>».</li>
</ul>
<p><b>Prova</b>: dopo il verbo chiedi «chi? che cosa?». Se la domanda ha senso (<i>leggo… che cosa?</i>) è transitivo; se non ha senso (<i>arrivo… che cosa?</i> 🤔) è intransitivo.</p>`
    },
    {
      type: "svg",
      title: "La freccia dell'azione",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="20" y="34" font-size="20" font-weight="bold" fill="#15803d">TRANSITIVO</text>
<circle cx="80" cy="95" r="38" fill="#3b82f6"/><text x="80" y="101" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">Luca</text>
<line x1="125" y1="95" x2="420" y2="95" stroke="#16a34a" stroke-width="8"/>
<polygon points="420,78 450,95 420,112" fill="#16a34a"/>
<text x="280" y="80" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">lancia</text>
<circle cx="500" cy="95" r="38" fill="#f97316"/><text x="500" y="101" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">la palla</text>
<text x="500" y="152" font-size="14" text-anchor="middle" fill="#1f2937">complemento oggetto</text>
<text x="20" y="194" font-size="20" font-weight="bold" fill="#b91c1c">INTRANSITIVO</text>
<circle cx="80" cy="250" r="38" fill="#3b82f6"/><text x="80" y="256" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">Luca</text>
<path d="M118,232 C200,170 220,300 125,268" fill="none" stroke="#dc2626" stroke-width="7"/>
<polygon points="132,256 112,274 138,282" fill="#dc2626"/>
<text x="230" y="240" font-size="20" fill="#b91c1c" font-weight="bold">dorme</text>
<text x="230" y="268" font-size="15" fill="#1f2937">l'azione resta su di lui: niente oggetto!</text>
</svg>`,
      caption: "Nei verbi transitivi la freccia dell'azione arriva a un oggetto; negli intransitivi torna sul soggetto."
    },
    {
      type: "text",
      title: "Usi transitivi e intransitivi",
      html: `<p>Alcuni verbi transitivi possono essere usati <b>senza</b> complemento oggetto: si dice che sono usati in modo <b>assoluto</b>. «Il neonato <u>mangia</u>» (mangia che cosa? non lo dico, ma potrei: è sempre transitivo).</p>
<p>Altri verbi cambiano significato: <i>Il treno <u>corre</u></i> (intransitivo) / <i>Il ciclista <u>corre</u> il Giro d'Italia</i> (transitivo).</p>
<p>Per gli <b>ausiliari</b> c'è una regola utile:</p>
<ul>
<li>i transitivi usano sempre <b>avere</b> nei tempi composti: <i>ho mangiato, ho letto</i>;</li>
<li>gli intransitivi usano <b>essere</b> o <b>avere</b>: <i>sono partito, sono caduto</i> / <i>ho dormito, ho camminato</i>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: transitivo o intransitivo?",
      questions: [
        { type: "mc", q: "«Il sole tramonta.» Il verbo è…", options: ["transitivo", "intransitivo"], answer: 1, explain: "Tramonta che cosa? Non ha senso: intransitivo." },
        { type: "mc", q: "«La mamma prepara la cena.» Il verbo è…", options: ["transitivo", "intransitivo"], answer: 0, explain: "Prepara che cosa? La cena (complemento oggetto): transitivo." },
        { type: "tf", q: "Nei tempi composti i verbi transitivi usano l'ausiliare avere.", answer: true, explain: "Ho preparato, ho letto, ho visto (in forma attiva)." }
      ]
    },
    {
      type: "widget",
      title: "Gioco: dividi i verbi",
      widget: "classify",
      options: {
        groups: ["Transitivo", "Intransitivo"],
        items: [["🍎 mangiare (una mela)", 0], ["✉️ scrivere (una lettera)", 0], ["👀 guardare (un film)", 0], ["🎁 regalare (un dono)", 0], ["🔨 costruire (una casa)", 0], ["😴 dormire", 1], ["🚶 andare", 1], ["🌅 nascere", 1], ["🏃 arrivare", 1], ["🌸 sbocciare", 1]]
      },
      caption: "Prova la domanda «che cosa?» dopo il verbo: se ha senso, è transitivo."
    },
    {
      type: "text",
      title: "Forma attiva e forma passiva",
      html: `<p>I verbi <b>transitivi</b> possono avere due forme:</p>
<ul>
<li><b>Attiva</b>: il soggetto <b>fa</b> l'azione. «<b>Il gatto</b> mangia <u>il topo</u>».</li>
<li><b>Passiva</b>: il soggetto <b>subisce</b> l'azione. «<b>Il topo</b> è mangiato <u>dal gatto</u>».</li>
</ul>
<p><b>Come si trasforma</b> una frase da attiva a passiva:</p>
<ol>
<li>il <b>complemento oggetto</b> diventa il <b>soggetto</b> (il topo);</li>
<li>il verbo si forma con <b>essere</b> (o <b>venire</b>) + <b>participio passato</b>, nello <b>stesso modo e tempo</b>: <i>mangia</i> → <i>è mangiato</i>; <i>mangiò</i> → <i>fu mangiato</i>; <i>ha mangiato</i> → <i>è stato mangiato</i>;</li>
<li>il vecchio soggetto diventa <b>complemento d'agente</b>, introdotto da <b>da</b> (dal gatto). Se è una cosa si chiama <b>complemento di causa efficiente</b>: «La casa fu distrutta <u>dal terremoto</u>».</li>
</ol>
<p>⚠️ Solo i verbi <b>transitivi con il complemento oggetto</b> possono diventare passivi. «Io dormo» non ha forma passiva!</p>`
    },
    {
      type: "example",
      title: "Esempio: dalla notizia sportiva al giornale",
      html: `<p>Il telecronista dice (attiva): «<b>Il capitano</b> ha segnato <b>il gol della vittoria</b>».</p>
<p>Il giornale titola (passiva): «<b>Il gol della vittoria</b> è stato segnato <b>dal capitano</b>».</p>
<p>La notizia è la stessa, ma cambia <b>che cosa mettiamo in primo piano</b>: nella passiva l'importante è il gol. Ecco perché nei giornali e nei testi scientifici il passivo è frequente: «L'America fu raggiunta da Colombo nel 1492», «L'acqua viene riscaldata fino a 100 °C».</p>`
    },
    {
      type: "text",
      title: "La forma riflessiva",
      html: `<p>Un verbo è in <b>forma riflessiva</b> quando l'azione compiuta dal soggetto <b>ricade sul soggetto stesso</b>, come in uno specchio. Si usano i pronomi <b>mi, ti, si, ci, vi, si</b>.</p>
<ul>
<li><b>Riflessiva propria</b>: «Io <u>mi lavo</u>» = lavo me stesso (il pronome è complemento oggetto).</li>
<li><b>Riflessiva apparente</b>: «Io <u>mi lavo</u> le mani» = lavo le mani a me (il complemento oggetto è "le mani"; <i>mi</i> = a me).</li>
<li><b>Riflessiva reciproca</b>: «Marco e Anna <u>si salutano</u>» = l'uno saluta l'altro.</li>
</ul>
<p>Attenzione ai <b>verbi intransitivi pronominali</b>: <i>pentirsi, vergognarsi, accorgersi, arrabbiarsi</i>. Hanno il pronome, ma <b>non sono riflessivi</b>: non si può dire "pento me stesso"!</p>`
    },
    {
      type: "svg",
      title: "Le tre forme a confronto",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fefce8"/>
<rect x="15" y="20" width="195" height="260" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="112" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#15803d">ATTIVA</text>
<text x="112" y="100" font-size="34" text-anchor="middle">🐱➡️🐭</text>
<text x="112" y="150" font-size="16" text-anchor="middle">Il gatto</text>
<text x="112" y="172" font-size="16" text-anchor="middle" font-weight="bold">insegue</text>
<text x="112" y="194" font-size="16" text-anchor="middle">il topo.</text>
<text x="112" y="240" font-size="14" text-anchor="middle" fill="#15803d">il soggetto FA</text>
<rect x="222" y="20" width="195" height="260" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<text x="320" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">PASSIVA</text>
<text x="320" y="100" font-size="34" text-anchor="middle">🐭⬅️🐱</text>
<text x="320" y="150" font-size="16" text-anchor="middle">Il topo</text>
<text x="320" y="172" font-size="16" text-anchor="middle" font-weight="bold">è inseguito</text>
<text x="320" y="194" font-size="16" text-anchor="middle">dal gatto.</text>
<text x="320" y="240" font-size="14" text-anchor="middle" fill="#1d4ed8">il soggetto SUBISCE</text>
<rect x="430" y="20" width="195" height="260" rx="14" fill="#fce7f3" stroke="#db2777" stroke-width="3"/>
<text x="527" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#be185d">RIFLESSIVA</text>
<text x="527" y="100" font-size="34" text-anchor="middle">🐱🪞</text>
<text x="527" y="150" font-size="16" text-anchor="middle">Il gatto</text>
<text x="527" y="172" font-size="16" text-anchor="middle" font-weight="bold">si lecca.</text>
<text x="527" y="240" font-size="14" text-anchor="middle" fill="#be185d">il soggetto FA</text>
<text x="527" y="260" font-size="14" text-anchor="middle" fill="#be185d">e SUBISCE</text>
</svg>`,
      caption: "Attiva: il soggetto fa. Passiva: il soggetto subisce. Riflessiva: fa e subisce insieme."
    },
    {
      type: "example",
      title: "Esempio: trasformiamo insieme",
      html: `<table>
<tr><th>Tempo</th><th>Attiva</th><th>Passiva</th></tr>
<tr><td>Presente</td><td>Il vento <b>muove</b> le foglie.</td><td>Le foglie <b>sono mosse</b> dal vento.</td></tr>
<tr><td>Imperfetto</td><td>Il nonno <b>raccontava</b> storie.</td><td>Le storie <b>erano raccontate</b> dal nonno.</td></tr>
<tr><td>Passato prossimo</td><td>Gli alunni <b>hanno piantato</b> un albero.</td><td>Un albero <b>è stato piantato</b> dagli alunni.</td></tr>
<tr><td>Futuro</td><td>La giuria <b>premierà</b> i vincitori.</td><td>I vincitori <b>saranno premiati</b> dalla giuria.</td></tr>
</table>
<p>Nota: il participio si <b>accorda</b> con il nuovo soggetto: <i>le foglie sono moss<b>e</b></i>, <i>i vincitori saranno premiat<b>i</b></i>.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il passivo \"veloce\" con il si",
      html: `<p>In italiano esiste un passivo \"travestito\": il <b>si passivante</b>. Nei cartelli dei negozi leggi «<b>Si vendono</b> biciclette» = «Biciclette <b>sono vendute</b>». Il verbo è al plurale perché si accorda con <i>biciclette</i>, che è il soggetto! Per questo «Si vende biciclette» è un errore.</p>`
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? Il latino aveva il passivo in una parola sola",
      html: `<p>In latino il passivo si faceva cambiando solo la <b>desinenza</b>: <i>amo</i> = io amo, <i>amor</i> = io sono amato; <i>laudat</i> = loda, <i>laudatur</i> = è lodato. L'italiano ha perso queste forme e usa l'ausiliare <b>essere</b>. Anche l'inglese usa un ausiliare: <i>the cake <b>is eaten</b></i> (la torta è mangiata).</p>`
    },
    {
      type: "remember",
      title: "Da ricordare",
      html: `<ul>
<li><b>Transitivo</b>: può avere il complemento oggetto. <b>Intransitivo</b>: non può averlo.</li>
<li><b>Passiva</b> = essere/venire + participio passato; il vecchio soggetto diventa <b>complemento d'agente</b> (da…).</li>
<li>Solo i <b>transitivi</b> hanno la forma passiva.</li>
<li><b>Riflessiva</b>: l'azione ricade sul soggetto (mi, ti, si, ci, vi, si): propria, apparente, reciproca.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Altri modi per capire le forme del verbo",
      intro: "Il passivo e il riflessivo si possono capire con una fotografia, con l'inglese, con lo specchio o con un gioco di abbinamenti.",
      tabs: [
        {
          label: "📸 Cambia l'inquadratura",
          html: `<p>Immagina di fotografare la stessa scena con due inquadrature:</p>
<ul>
<li>📷 <b>Attiva</b>: zoom su chi <b>fa</b> l'azione → «<b>La volpe</b> ruba l'uva».</li>
<li>📷 <b>Passiva</b>: zoom su chi <b>riceve</b> l'azione → «<b>L'uva</b> è rubata dalla volpe».</li>
</ul>
<p>La scena è identica, cambia il \"protagonista\" della foto, cioè il <b>soggetto</b>. Per questo nella passiva il protagonista è chi subisce.</p>`
        },
        {
          label: "🇬🇧 Passive voice",
          html: `<p>In inglese il passivo si forma come in italiano: <b>to be + participio passato</b> e <b>by</b> per l'agente.</p>
<table>
<tr><th>Active</th><th>Passive</th></tr>
<tr><td>Shakespeare <b>wrote</b> Hamlet.</td><td>Hamlet <b>was written by</b> Shakespeare.</td></tr>
<tr><td>The dog <b>eats</b> the bone.</td><td>The bone <b>is eaten by</b> the dog.</td></tr>
</table>
<p><i>by</i> = <i>da</i> (complemento d'agente). Gli inglesi usano molto il passivo nelle notizie e nella scienza, proprio come noi.</p>`,
          widget: "match",
          options: { pairs: [["is eaten", "è mangiato"], ["was written", "fu scritto"], ["are sold", "sono venduti"], ["by the dog", "dal cane"], ["has been built", "è stato costruito"]] }
        },
        {
          label: "🪞 Lo specchio",
          html: `<p>Per capire se un verbo è <b>riflessivo</b>, fai la <b>prova dello specchio</b>: sostituisci <i>mi/ti/si</i> con <b>"me stesso / te stesso / se stesso"</b>.</p>
<ul>
<li>«Mi pettino» → pettino <b>me stesso</b> ✅ riflessivo proprio.</li>
<li>«Mi pettino i capelli» → pettino i capelli <b>a me</b> ✅ riflessivo apparente.</li>
<li>«Ci abbracciamo» → l'uno abbraccia l'altro ✅ reciproco.</li>
<li>«Mi pento» → pento me stesso? ❌ non ha senso: è un <b>intransitivo pronominale</b>.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf4ff"/>
<rect x="290" y="20" width="20" height="180" fill="#a5b4fc" stroke="#4338ca" stroke-width="3"/>
<text x="180" y="110" font-size="64" text-anchor="middle">🧒</text>
<text x="420" y="110" font-size="64" text-anchor="middle" transform="translate(840,0) scale(-1,1)">🧒</text>
<path d="M210,150 Q300,200 390,150" fill="none" stroke="#db2777" stroke-width="5"/>
<path d="M390,150 Q300,100 210,150" fill="none" stroke="#db2777" stroke-width="5" stroke-dasharray="8 6"/>
<text x="300" y="214" font-size="18" text-anchor="middle" fill="#9d174d" font-weight="bold">mi lavo = lavo me stesso</text>
</svg>`
        },
        {
          label: "🧮 La formula",
          html: `<p>Se ti piacciono le regole \"matematiche\", ecco la <b>formula del passivo</b>:</p>
<p style="font-size:1.2em"><b>S + V(attivo) + CO</b> ➜ <b>CO + essere(stesso tempo) + participio + da + S</b></p>
<p>Esempio: <i>Anna</i> (S) + <i>dipinge</i> (V) + <i>un quadro</i> (CO) ➜ <i>Un quadro</i> + <i>è</i> + <i>dipinto</i> + <i>da Anna</i>.</p>
<p>Controllo finale: il tempo di <i>essere</i> deve essere lo stesso del verbo attivo (dipinge = presente → è = presente).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mappa dei verbi e delle loro forme",
      nodes: [
        { id: "verbo", label: "Verbo", x: 50, y: 6, color: "#dc2626", html: "Parola che indica azione o stato.", why: "Il verbo è il centro della frase: da lui dipende quali altri elementi servono (soggetto, oggetto…)." },
        { id: "trans", label: "Transitivo", x: 25, y: 28, color: "#16a34a", html: "Può reggere il complemento oggetto: leggere qualcosa.", why: "Dal latino <i>transire</i> (passare oltre): l'azione \"passa\" dal soggetto all'oggetto. In grammatica valenziale è un verbo che ha almeno due argomenti: chi e che cosa." },
        { id: "intr", label: "Intransitivo", x: 75, y: 28, color: "#f97316", html: "Non può avere complemento oggetto: dormire, andare, nascere.", why: "<i>In-</i> = non: l'azione non passa oltre il soggetto. Molti indicano movimento o cambiamento di stato e usano l'ausiliare essere (sono andato, sono nato)." },
        { id: "attiva", label: "Forma attiva", x: 10, y: 55, color: "#22c55e", html: "Il soggetto compie l'azione.", why: "È la forma \"normale\" e più usata in italiano: segue l'ordine naturale chi → fa → che cosa." },
        { id: "passiva", label: "Forma passiva", x: 38, y: 55, color: "#2563eb", html: "Il soggetto subisce l'azione: essere/venire + participio.", why: "Serve a mettere in primo piano chi riceve l'azione o a non dire chi l'ha fatta («La finestra è stata rotta»). Il latino la faceva con le desinenze (<i>amor</i>); l'italiano con l'ausiliare essere." },
        { id: "agente", label: "Complemento d'agente", x: 38, y: 80, color: "#0ea5e9", html: "Chi compie l'azione in una frase passiva: «dal gatto». Se è una cosa: causa efficiente.", why: "È il vecchio soggetto della frase attiva, \"spostato\" e introdotto dalla preposizione <i>da</i>." },
        { id: "rifl", label: "Forma riflessiva", x: 70, y: 55, color: "#db2777", html: "L'azione ricade sul soggetto: mi lavo.", why: "Il nome viene da <i>riflettere</i> come uno specchio. Si forma con i pronomi atoni mi, ti, si, ci, vi, si, che vengono dai pronomi latini <i>me, te, se</i>." },
        { id: "tipirifl", label: "Propria, apparente, reciproca", x: 70, y: 80, color: "#a855f7", html: "Propria (mi lavo), apparente (mi lavo le mani), reciproca (ci salutiamo).", why: "Dipende da che funzione ha il pronome: complemento oggetto (propria), complemento di termine (apparente), azione scambiata tra due o più soggetti (reciproca)." },
        { id: "pronom", label: "Intransitivi pronominali", x: 92, y: 40, color: "#64748b", html: "Verbi sempre con il pronome ma non riflessivi: pentirsi, vergognarsi.", why: "Il pronome fa parte del verbo e non indica \"me stesso\": per questo non superano la prova dello specchio." }
      ],
      edges: [
        ["verbo", "trans", "può essere"],
        ["verbo", "intr", "può essere"],
        ["trans", "attiva", "forma"],
        ["trans", "passiva", "forma"],
        ["trans", "rifl", "forma"],
        ["passiva", "agente", "ha il"],
        ["rifl", "tipirifl", "può essere"],
        ["intr", "pronom", "a volte"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: attiva, passiva, riflessiva",
      questions: [
        { type: "mc", q: "«Il quadro fu dipinto da Leonardo.» Il verbo è in forma…", options: ["attiva", "passiva", "riflessiva"], answer: 1, explain: "Essere (fu) + participio (dipinto) + complemento d'agente: passiva." },
        { type: "mc", q: "«Le bambine si pettinano i capelli.» È una forma riflessiva…", options: ["propria", "apparente", "reciproca"], answer: 1, explain: "Il complemento oggetto è «i capelli»; «si» vale «a se stesse»: apparente." },
        { type: "tf", q: "La frase «Il bambino corre» si può volgere al passivo.", answer: false, explain: "«Correre» qui è intransitivo, senza complemento oggetto: niente passivo." }
      ]
    }
  ],
  glossary: [
    { t: "Verbo transitivo", d: "Verbo che può avere un complemento oggetto (leggere un libro)." },
    { t: "Verbo intransitivo", d: "Verbo che non può avere un complemento oggetto (dormire, andare)." },
    { t: "Uso assoluto", d: "Verbo transitivo usato senza esprimere il complemento oggetto (Luca mangia)." },
    { t: "Forma attiva", d: "Il soggetto compie l'azione." },
    { t: "Forma passiva", d: "Il soggetto subisce l'azione; si forma con essere/venire + participio passato." },
    { t: "Complemento d'agente", d: "Nella frase passiva indica chi compie l'azione (da + persona o animale)." },
    { t: "Complemento di causa efficiente", d: "Nella frase passiva indica la cosa che compie l'azione (dal vento)." },
    { t: "Forma riflessiva", d: "L'azione ricade sul soggetto: mi lavo, ti vesti, si pettina." },
    { t: "Si passivante", d: "Particella si che dà valore passivo al verbo: si vendono case = case sono vendute." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Quale di questi verbi è intransitivo?", options: ["comprare", "partire", "disegnare"], answer: 1, explain: "Partire che cosa? Non ha senso: intransitivo." },
      { type: "tf", q: "Un verbo transitivo usato senza complemento oggetto («Marco legge») resta transitivo.", answer: true, explain: "È un uso assoluto: il complemento oggetto si potrebbe aggiungere." },
      { type: "mc", q: "Qual è la forma passiva di «Il cuoco cucina la pasta»?", options: ["La pasta cucina il cuoco.", "La pasta è cucinata dal cuoco.", "Il cuoco si cucina la pasta."], answer: 1, explain: "L'oggetto diventa soggetto, essere + participio, complemento d'agente." },
      { type: "mc", q: "In «Il ponte fu distrutto dalla piena», «dalla piena» è complemento…", options: ["d'agente", "di causa efficiente", "di moto da luogo"], answer: 1, explain: "La piena è una cosa (non una persona o un animale): causa efficiente." },
      { type: "text", q: "Quale ausiliare si usa per formare il passivo (oltre a «venire»)?", answer: ["essere", "l'ausiliare essere"], explain: "Il passivo si forma con essere (o venire) + participio passato." },
      { type: "mc", q: "«Paolo e Luca si stringono la mano.» Che forma è?", options: ["riflessiva reciproca", "passiva", "attiva semplice"], answer: 0, explain: "L'uno stringe la mano all'altro: riflessiva reciproca." },
      { type: "tf", q: "«Mi vergogno» è un verbo in forma riflessiva propria.", answer: false, explain: "Non significa «vergogno me stesso»: è un intransitivo pronominale." },
      { type: "mc", q: "Volgi al passivo «Gli alunni hanno letto il racconto».", options: ["Il racconto è letto dagli alunni.", "Il racconto è stato letto dagli alunni.", "Il racconto fu letto dagli alunni."], answer: 1, explain: "Hanno letto = passato prossimo → è stato letto (passato prossimo passivo)." },
      { type: "order", q: "Metti in ordine i passaggi per volgere una frase al passivo.", items: ["Il complemento oggetto diventa soggetto", "Il verbo diventa essere + participio passato, nello stesso tempo", "Il soggetto diventa complemento d'agente con «da»"], explain: "Prima si sceglie il nuovo soggetto, poi si trasforma il verbo, infine si sposta l'agente." },
      { type: "mc", q: "Quale frase è corretta?", options: ["Si vende appartamenti.", "Si vendono appartamenti.", "Si vendono appartamento."], answer: 1, explain: "Con il si passivante il verbo si accorda con il soggetto plurale «appartamenti»." },
      { type: "mc", q: "Quale verbo NON può avere la forma passiva?", options: ["costruire", "arrivare", "lavare"], answer: 1, explain: "Arrivare è intransitivo: non ha complemento oggetto, quindi niente passivo." }
    ]
  }
});

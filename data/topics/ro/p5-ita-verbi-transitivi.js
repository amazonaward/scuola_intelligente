TOPIC('ro', {
  id: "p5-ita-verbi-transitivi",
  title: "Verbe tranzitive și intranzitive",
  intro: "Unele acțiuni „trec” asupra a ceva sau a cuiva (<i>mangio una mela</i> = mănânc un măr), altele rămân asupra celui care le face (<i>dormo</i> = dorm). Să descoperim verbele <b>tranzitive</b> și <b>intranzitive</b> și cele trei forme ale verbului: <b>activă</b>, <b>pasivă</b> și <b>reflexivă</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Tranzitiv = acțiunea „trece” mai departe",
      html: `<p><b>Tranzitiv</b> vine din latinescul <i>transire</i>, „a trece dincolo”. Un verb este:</p>
<ul>
<li><b>tranzitiv</b> când acțiunea <b>trece</b> direct de la subiect la un <b>complement direct</b> (pe cine? ce?): «Marta <u>legge</u> <b>un libro</b>» (Marta citește o carte), «Il cane <u>morde</u> <b>l'osso</b>» (câinele roade osul).</li>
<li><b>intranzitiv</b> când acțiunea <b>rămâne</b> asupra subiectului și <b>nu poate avea</b> complement direct: «Il bambino <u>dorme</u>» (copilul doarme), «Vado a scuola» (merg la școală), «Il fiore <u>sboccia</u>» (floarea înflorește).</li>
</ul>
<p><b>Proba</b>: după verb pune întrebarea «pe cine? ce?». Dacă întrebarea are sens (<i>leggo… che cosa?</i>, citesc… ce?) este tranzitiv; dacă nu are sens (<i>arrivo… che cosa?</i>, ajung… ce? 🤔) este intranzitiv.</p>`
    },
    {
      type: "svg",
      title: "Săgeata acțiunii",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="20" y="34" font-size="20" font-weight="bold" fill="#15803d">TRANZITIV</text>
<circle cx="80" cy="95" r="38" fill="#3b82f6"/><text x="80" y="101" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">Luca</text>
<line x1="125" y1="95" x2="420" y2="95" stroke="#16a34a" stroke-width="8"/>
<polygon points="420,78 450,95 420,112" fill="#16a34a"/>
<text x="280" y="80" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">lancia</text>
<circle cx="500" cy="95" r="38" fill="#f97316"/><text x="500" y="101" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">la palla</text>
<text x="500" y="152" font-size="14" text-anchor="middle" fill="#1f2937">complement direct</text>
<text x="20" y="194" font-size="20" font-weight="bold" fill="#b91c1c">INTRANZITIV</text>
<circle cx="80" cy="250" r="38" fill="#3b82f6"/><text x="80" y="256" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">Luca</text>
<path d="M118,232 C200,170 220,300 125,268" fill="none" stroke="#dc2626" stroke-width="7"/>
<polygon points="132,256 112,274 138,282" fill="#dc2626"/>
<text x="230" y="240" font-size="20" fill="#b91c1c" font-weight="bold">dorme</text>
<text x="230" y="268" font-size="15" fill="#1f2937">acțiunea rămâne asupra lui: fără complement direct!</text>
</svg>`,
      caption: "La verbele tranzitive săgeata acțiunii ajunge la un obiect; la cele intranzitive se întoarce la subiect."
    },
    {
      type: "text",
      title: "Folosiri tranzitive și intranzitive",
      html: `<p>Unele verbe tranzitive pot fi folosite <b>fără</b> complement direct: se spune că sunt folosite <b>absolut</b>. «Il neonato <u>mangia</u>» (bebelușul mănâncă) (ce mănâncă? nu spun, dar aș putea: este mereu tranzitiv).</p>
<p>Alte verbe își schimbă sensul: <i>Il treno <u>corre</u></i> (trenul aleargă, intranzitiv) / <i>Il ciclista <u>corre</u> il Giro d'Italia</i> (ciclistul participă la Turul Italiei, tranzitiv).</p>
<p>Pentru <b>auxiliare</b> există o regulă utilă:</p>
<ul>
<li>verbele tranzitive folosesc întotdeauna <b>avere</b> („a avea”) la timpurile compuse: <i>ho mangiato, ho letto</i>;</li>
<li>cele intranzitive folosesc <b>essere</b> („a fi”) sau <b>avere</b>: <i>sono partito, sono caduto</i> / <i>ho dormito, ho camminato</i>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: tranzitiv sau intranzitiv?",
      questions: [
        { type: "mc", q: "«Il sole tramonta.» Verbul este…", options: ["tranzitiv", "intranzitiv"], answer: 1, explain: "Tramonta ce? Nu are sens: intranzitiv." },
        { type: "mc", q: "«La mamma prepara la cena.» Verbul este…", options: ["tranzitiv", "intranzitiv"], answer: 0, explain: "Prepara ce? La cena (complement direct): tranzitiv." },
        { type: "tf", q: "La timpurile compuse verbele tranzitive folosesc auxiliarul avere.", answer: true, explain: "Ho preparato, ho letto, ho visto (în forma activă)." }
      ]
    },
    {
      type: "widget",
      title: "Joc: împarte verbele",
      widget: "classify",
      options: {
        groups: ["Tranzitiv", "Intranzitiv"],
        items: [["🍎 mangiare (una mela)", 0], ["✉️ scrivere (una lettera)", 0], ["👀 guardare (un film)", 0], ["🎁 regalare (un dono)", 0], ["🔨 costruire (una casa)", 0], ["😴 dormire", 1], ["🚶 andare", 1], ["🌅 nascere", 1], ["🏃 arrivare", 1], ["🌸 sbocciare", 1]]
      },
      caption: "Încearcă întrebarea «ce?» după verb: dacă are sens, este tranzitiv."
    },
    {
      type: "text",
      title: "Forma activă și forma pasivă",
      html: `<p>Verbele <b>tranzitive</b> pot avea două forme:</p>
<ul>
<li><b>Activă</b>: subiectul <b>face</b> acțiunea. «<b>Il gatto</b> mangia <u>il topo</u>» (pisica mănâncă șoarecele).</li>
<li><b>Pasivă</b>: subiectul <b>suferă</b> acțiunea. «<b>Il topo</b> è mangiato <u>dal gatto</u>» (șoarecele este mâncat de pisică).</li>
</ul>
<p><b>Cum se transformă</b> o propoziție din activă în pasivă:</p>
<ol>
<li><b>complementul direct</b> devine <b>subiect</b> (il topo);</li>
<li>verbul se formează cu <b>essere</b> (sau <b>venire</b>) + <b>participiu trecut</b>, în <b>același mod și timp</b>: <i>mangia</i> → <i>è mangiato</i>; <i>mangiò</i> → <i>fu mangiato</i>; <i>ha mangiato</i> → <i>è stato mangiato</i>;</li>
<li>vechiul subiect devine <b>complement de agent</b>, introdus de <b>da</b> (dal gatto). Dacă este un lucru se numește <b>complement de cauză eficientă</b>: «La casa fu distrutta <u>dal terremoto</u>».</li>
</ol>
<p>⚠️ Doar verbele <b>tranzitive cu complement direct</b> pot deveni pasive. «Io dormo» nu are formă pasivă!</p>`
    },
    {
      type: "example",
      title: "Exemplu: de la știrea sportivă la ziar",
      html: `<p>Comentatorul spune (activ): «<b>Il capitano</b> ha segnato <b>il gol della vittoria</b>». (Căpitanul a marcat golul victoriei.)</p>
<p>Ziarul titrează (pasiv): «<b>Il gol della vittoria</b> è stato segnato <b>dal capitano</b>».</p>
<p>Știrea este aceeași, dar se schimbă <b>ce punem în prim-plan</b>: în pasiv important este golul. De aceea în ziare și în textele științifice pasivul este frecvent: «L'America fu raggiunta da Colombo nel 1492», «L'acqua viene riscaldata fino a 100 °C».</p>`
    },
    {
      type: "text",
      title: "Forma reflexivă",
      html: `<p>Un verb este la <b>forma reflexivă</b> când acțiunea făcută de subiect <b>se întoarce asupra subiectului însuși</b>, ca într-o oglindă. Se folosesc pronumele <b>mi, ti, si, ci, vi, si</b>.</p>
<ul>
<li><b>Reflexivă propriu-zisă</b>: «Io <u>mi lavo</u>» = mă spăl pe mine însumi (pronumele este complement direct).</li>
<li><b>Reflexivă aparentă</b>: «Io <u>mi lavo</u> le mani» = spăl mâinile mie (complementul direct este „le mani”; <i>mi</i> = mie).</li>
<li><b>Reflexivă reciprocă</b>: «Marco e Anna <u>si salutano</u>» = unul îl salută pe celălalt.</li>
</ul>
<p>Atenție la <b>verbele intranzitive pronominale</b>: <i>pentirsi, vergognarsi, accorgersi, arrabbiarsi</i>. Au pronume, dar <b>nu sunt reflexive</b>: nu se poate spune „pocăiesc pe mine însumi”!</p>`
    },
    {
      type: "svg",
      title: "Cele trei forme comparate",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fefce8"/>
<rect x="15" y="20" width="195" height="260" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="112" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#15803d">ACTIVĂ</text>
<text x="112" y="100" font-size="34" text-anchor="middle">🐱➡️🐭</text>
<text x="112" y="150" font-size="16" text-anchor="middle">Il gatto</text>
<text x="112" y="172" font-size="16" text-anchor="middle" font-weight="bold">insegue</text>
<text x="112" y="194" font-size="16" text-anchor="middle">il topo.</text>
<text x="112" y="240" font-size="14" text-anchor="middle" fill="#15803d">subiectul FACE</text>
<rect x="222" y="20" width="195" height="260" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<text x="320" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">PASIVĂ</text>
<text x="320" y="100" font-size="34" text-anchor="middle">🐭⬅️🐱</text>
<text x="320" y="150" font-size="16" text-anchor="middle">Il topo</text>
<text x="320" y="172" font-size="16" text-anchor="middle" font-weight="bold">è inseguito</text>
<text x="320" y="194" font-size="16" text-anchor="middle">dal gatto.</text>
<text x="320" y="240" font-size="14" text-anchor="middle" fill="#1d4ed8">subiectul SUFERĂ</text>
<rect x="430" y="20" width="195" height="260" rx="14" fill="#fce7f3" stroke="#db2777" stroke-width="3"/>
<text x="527" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#be185d">REFLEXIVĂ</text>
<text x="527" y="100" font-size="34" text-anchor="middle">🐱🪞</text>
<text x="527" y="150" font-size="16" text-anchor="middle">Il gatto</text>
<text x="527" y="172" font-size="16" text-anchor="middle" font-weight="bold">si lecca.</text>
<text x="527" y="240" font-size="14" text-anchor="middle" fill="#be185d">subiectul FACE</text>
<text x="527" y="260" font-size="14" text-anchor="middle" fill="#be185d">și SUFERĂ</text>
</svg>`,
      caption: "Activă: subiectul face. Pasivă: subiectul suferă. Reflexivă: face și suferă în același timp."
    },
    {
      type: "example",
      title: "Exemplu: transformăm împreună",
      html: `<table>
<tr><th>Timpul</th><th>Activ</th><th>Pasiv</th></tr>
<tr><td>Prezent</td><td>Il vento <b>muove</b> le foglie.</td><td>Le foglie <b>sono mosse</b> dal vento.</td></tr>
<tr><td>Imperfect</td><td>Il nonno <b>raccontava</b> storie.</td><td>Le storie <b>erano raccontate</b> dal nonno.</td></tr>
<tr><td>Passato prossimo</td><td>Gli alunni <b>hanno piantato</b> un albero.</td><td>Un albero <b>è stato piantato</b> dagli alunni.</td></tr>
<tr><td>Viitor</td><td>La giuria <b>premierà</b> i vincitori.</td><td>I vincitori <b>saranno premiati</b> dalla giuria.</td></tr>
</table>
<p>Observă: participiul se <b>acordă</b> cu noul subiect: <i>le foglie sono moss<b>e</b></i>, <i>i vincitori saranno premiat<b>i</b></i>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Pasivul „rapid” cu si",
      html: `<p>În italiană există un pasiv „deghizat”: <b>si passivante</b>. Pe firmele magazinelor citești «<b>Si vendono</b> biciclette» = «Biciclette <b>sono vendute</b>» (se vând biciclete). Verbul este la plural pentru că se acordă cu <i>biciclette</i>, care este subiectul! De aceea «Si vende biciclette» este o greșeală.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Latina avea pasivul într-un singur cuvânt",
      html: `<p>În latină pasivul se făcea schimbând doar <b>terminația</b>: <i>amo</i> = eu iubesc, <i>amor</i> = eu sunt iubit; <i>laudat</i> = laudă, <i>laudatur</i> = este lăudat. Italiana a pierdut aceste forme și folosește auxiliarul <b>essere</b>. Și engleza folosește un auxiliar: <i>the cake <b>is eaten</b></i> (tortul este mâncat).</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li><b>Tranzitiv</b>: poate avea complement direct. <b>Intranzitiv</b>: nu poate avea.</li>
<li><b>Pasiv</b> = essere/venire + participiu trecut; vechiul subiect devine <b>complement de agent</b> (da…).</li>
<li>Doar verbele <b>tranzitive</b> au forma pasivă.</li>
<li><b>Reflexivă</b>: acțiunea se întoarce asupra subiectului (mi, ti, si, ci, vi, si): propriu-zisă, aparentă, reciprocă.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege formele verbului",
      intro: "Pasivul și reflexivul se pot înțelege cu o fotografie, cu engleza, cu oglinda sau cu un joc de potriviri.",
      tabs: [
        {
          label: "📸 Schimbă cadrul",
          html: `<p>Imaginează-ți că fotografiezi aceeași scenă din două cadre:</p>
<ul>
<li>📷 <b>Activ</b>: zoom pe cel care <b>face</b> acțiunea → «<b>La volpe</b> ruba l'uva» (vulpea fură strugurii).</li>
<li>📷 <b>Pasiv</b>: zoom pe cel care <b>primește</b> acțiunea → «<b>L'uva</b> è rubata dalla volpe» (strugurii sunt furați de vulpe).</li>
</ul>
<p>Scena este identică, se schimbă „protagonistul” fotografiei, adică <b>subiectul</b>. De aceea în pasiv protagonistul este cel care suferă.</p>`
        },
        {
          label: "🇬🇧 Passive voice",
          html: `<p>În engleză pasivul se formează ca în italiană: <b>to be + participiu trecut</b> și <b>by</b> pentru agent.</p>
<table>
<tr><th>Active</th><th>Passive</th></tr>
<tr><td>Shakespeare <b>wrote</b> Hamlet.</td><td>Hamlet <b>was written by</b> Shakespeare.</td></tr>
<tr><td>The dog <b>eats</b> the bone.</td><td>The bone <b>is eaten by</b> the dog.</td></tr>
</table>
<p><i>by</i> = <i>da</i> (complement de agent). Englezii folosesc mult pasivul în știri și în știință, exact ca noi.</p>`,
          widget: "match",
          options: { pairs: [["is eaten", "este mâncat"], ["was written", "a fost scris"], ["are sold", "sunt vândute"], ["by the dog", "de către câine"], ["has been built", "a fost construit"]] }
        },
        {
          label: "🪞 Oglinda",
          html: `<p>Ca să înțelegi dacă un verb este <b>reflexiv</b>, fă <b>proba oglinzii</b>: înlocuiește <i>mi/ti/si</i> cu <b>„pe mine însumi / pe tine însuți / pe sine însuși”</b>.</p>
<ul>
<li>«Mi pettino» → mă piept <b>pe mine însumi</b> ✅ reflexiv propriu-zis.</li>
<li>«Mi pettino i capelli» → pieptăn părul <b>mie</b> ✅ reflexiv aparent.</li>
<li>«Ci abbracciamo» → unul îl îmbrățișează pe celălalt ✅ reciproc.</li>
<li>«Mi pento» → mă pocăiesc pe mine însumi? ❌ nu are sens: este un <b>intranzitiv pronominal</b>.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf4ff"/>
<rect x="290" y="20" width="20" height="180" fill="#a5b4fc" stroke="#4338ca" stroke-width="3"/>
<text x="180" y="110" font-size="64" text-anchor="middle">🧒</text>
<text x="420" y="110" font-size="64" text-anchor="middle" transform="translate(840,0) scale(-1,1)">🧒</text>
<path d="M210,150 Q300,200 390,150" fill="none" stroke="#db2777" stroke-width="5"/>
<path d="M390,150 Q300,100 210,150" fill="none" stroke="#db2777" stroke-width="5" stroke-dasharray="8 6"/>
<text x="300" y="214" font-size="18" text-anchor="middle" fill="#9d174d" font-weight="bold">mi lavo = mă spăl pe mine însumi</text>
</svg>`
        },
        {
          label: "🧮 Formula",
          html: `<p>Dacă îți plac regulile „matematice”, iată <b>formula pasivului</b>:</p>
<p style="font-size:1.2em"><b>S + V(activ) + CD</b> ➜ <b>CD + essere(același timp) + participiu + da + S</b></p>
<p>Exemplu: <i>Anna</i> (S) + <i>dipinge</i> (V) + <i>un quadro</i> (CD) ➜ <i>Un quadro</i> + <i>è</i> + <i>dipinto</i> + <i>da Anna</i>. (S = subiect, V = verb, CD = complement direct.)</p>
<p>Verificare finală: timpul lui <i>essere</i> trebuie să fie același cu al verbului activ (dipinge = prezent → è = prezent).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta verbelor și a formelor lor",
      nodes: [
        { id: "verbo", label: "Verb", x: 50, y: 6, color: "#dc2626", html: "Cuvânt care arată acțiune sau stare.", why: "Verbul este centrul propoziției: de el depinde ce alte elemente sunt necesare (subiect, obiect…)." },
        { id: "trans", label: "Tranzitiv", x: 25, y: 28, color: "#16a34a", html: "Poate avea complement direct: leggere qualcosa (a citi ceva).", why: "Din latinescul <i>transire</i> (a trece dincolo): acțiunea „trece” de la subiect la obiect. În gramatica valențială este un verb care are cel puțin două argumente: cine și ce." },
        { id: "intr", label: "Intranzitiv", x: 75, y: 28, color: "#f97316", html: "Nu poate avea complement direct: dormire, andare, nascere.", why: "<i>In-</i> = nu: acțiunea nu trece dincolo de subiect. Multe arată mișcare sau schimbare de stare și folosesc auxiliarul essere (sono andato, sono nato)." },
        { id: "attiva", label: "Forma activă", x: 10, y: 55, color: "#22c55e", html: "Subiectul face acțiunea.", why: "Este forma „normală” și cea mai folosită în italiană: urmează ordinea naturală cine → face → ce." },
        { id: "passiva", label: "Forma pasivă", x: 38, y: 55, color: "#2563eb", html: "Subiectul suferă acțiunea: essere/venire + participiu.", why: "Ajută să pui în prim-plan pe cel care primește acțiunea sau să nu spui cine a făcut-o («La finestra è stata rotta»). Latina o făcea cu terminații (<i>amor</i>); italiana cu auxiliarul essere." },
        { id: "agente", label: "Complement de agent", x: 38, y: 80, color: "#0ea5e9", html: "Cine face acțiunea într-o propoziție pasivă: «dal gatto». Dacă este un lucru: cauză eficientă.", why: "Este vechiul subiect al propoziției active, „mutat” și introdus de prepoziția <i>da</i>." },
        { id: "rifl", label: "Forma reflexivă", x: 70, y: 55, color: "#db2777", html: "Acțiunea se întoarce asupra subiectului: mi lavo.", why: "Numele vine de la a <i>reflecta</i> ca o oglindă. Se formează cu pronumele neaccentuate mi, ti, si, ci, vi, si, care vin din pronumele latine <i>me, te, se</i>." },
        { id: "tipirifl", label: "Propriu-zisă, aparentă, reciprocă", x: 70, y: 80, color: "#a855f7", html: "Propriu-zisă (mi lavo), aparentă (mi lavo le mani), reciprocă (ci salutiamo).", why: "Depinde de funcția pronumelui: complement direct (propriu-zisă), complement de termen (aparentă), acțiune schimbată între două sau mai multe subiecte (reciprocă)." },
        { id: "pronom", label: "Intranzitive pronominale", x: 92, y: 40, color: "#64748b", html: "Verbe mereu cu pronume, dar nereflexive: pentirsi, vergognarsi.", why: "Pronumele face parte din verb și nu înseamnă „pe mine însumi”: de aceea nu trec proba oglinzii." }
      ],
      edges: [
        ["verbo", "trans", "poate fi"],
        ["verbo", "intr", "poate fi"],
        ["trans", "attiva", "formă"],
        ["trans", "passiva", "formă"],
        ["trans", "rifl", "formă"],
        ["passiva", "agente", "are"],
        ["rifl", "tipirifl", "poate fi"],
        ["intr", "pronom", "uneori"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: activă, pasivă, reflexivă",
      questions: [
        { type: "mc", q: "«Il quadro fu dipinto da Leonardo.» Verbul este la forma…", options: ["activă", "pasivă", "reflexivă"], answer: 1, explain: "Essere (fu) + participiu (dipinto) + complement de agent: pasivă." },
        { type: "mc", q: "«Le bambine si pettinano i capelli.» Este o formă reflexivă…", options: ["propriu-zisă", "aparentă", "reciprocă"], answer: 1, explain: "Complementul direct este «i capelli»; «si» înseamnă «lor însele»: aparentă." },
        { type: "tf", q: "Propoziția «Il bambino corre» poate fi transformată la pasiv.", answer: false, explain: "«Correre» aici este intranzitiv, fără complement direct: nu există pasiv." }
      ]
    }
  ],
  glossary: [
    { t: "Verb tranzitiv", d: "Verb care poate avea un complement direct (leggere un libro)." },
    { t: "Verb intranzitiv", d: "Verb care nu poate avea un complement direct (dormire, andare)." },
    { t: "Folosire absolută", d: "Verb tranzitiv folosit fără a exprima complementul direct (Luca mangia)." },
    { t: "Forma activă", d: "Subiectul face acțiunea." },
    { t: "Forma pasivă", d: "Subiectul suferă acțiunea; se formează cu essere/venire + participiu trecut." },
    { t: "Complement de agent", d: "În propoziția pasivă arată cine face acțiunea (da + persoană sau animal)." },
    { t: "Complement de cauză eficientă", d: "În propoziția pasivă arată lucrul care face acțiunea (dal vento)." },
    { t: "Forma reflexivă", d: "Acțiunea se întoarce asupra subiectului: mi lavo, ti vesti, si pettina." },
    { t: "Si passivante", d: "Particula si care dă valoare pasivă verbului: si vendono case = case sono vendute." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre aceste verbe este intranzitiv?", options: ["comprare", "partire", "disegnare"], answer: 1, explain: "Partire ce? Nu are sens: intranzitiv." },
      { type: "tf", q: "Un verb tranzitiv folosit fără complement direct («Marco legge») rămâne tranzitiv.", answer: true, explain: "Este o folosire absolută: complementul direct ar putea fi adăugat." },
      { type: "mc", q: "Care este forma pasivă a propoziției «Il cuoco cucina la pasta»?", options: ["La pasta cucina il cuoco.", "La pasta è cucinata dal cuoco.", "Il cuoco si cucina la pasta."], answer: 1, explain: "Obiectul devine subiect, essere + participiu, complement de agent." },
      { type: "mc", q: "În «Il ponte fu distrutto dalla piena», «dalla piena» este complement…", options: ["de agent", "de cauză eficientă", "de mișcare dinspre un loc"], answer: 1, explain: "Viitura (la piena) este un lucru (nu o persoană sau un animal): cauză eficientă." },
      { type: "text", q: "Ce auxiliar se folosește pentru a forma pasivul (pe lângă «venire»)?", answer: ["essere", "auxiliarul essere", "l'ausiliare essere"], explain: "Pasivul se formează cu essere (sau venire) + participiu trecut." },
      { type: "mc", q: "«Paolo e Luca si stringono la mano.» Ce formă este?", options: ["reflexivă reciprocă", "pasivă", "activă simplă"], answer: 0, explain: "Unul îi strânge mâna celuilalt: reflexivă reciprocă." },
      { type: "tf", q: "«Mi vergogno» este un verb la forma reflexivă propriu-zisă.", answer: false, explain: "Nu înseamnă «mă rușinez pe mine însumi»: este un intranzitiv pronominal." },
      { type: "mc", q: "Transformă la pasiv «Gli alunni hanno letto il racconto».", options: ["Il racconto è letto dagli alunni.", "Il racconto è stato letto dagli alunni.", "Il racconto fu letto dagli alunni."], answer: 1, explain: "Hanno letto = passato prossimo → è stato letto (passato prossimo pasiv)." },
      { type: "order", q: "Pune în ordine pașii pentru a transforma o propoziție la pasiv.", items: ["Complementul direct devine subiect", "Verbul devine essere + participiu trecut, în același timp", "Subiectul devine complement de agent cu «da»"], explain: "Mai întâi se alege noul subiect, apoi se transformă verbul, la urmă se mută agentul." },
      { type: "mc", q: "Care propoziție este corectă?", options: ["Si vende appartamenti.", "Si vendono appartamenti.", "Si vendono appartamento."], answer: 1, explain: "Cu si passivante verbul se acordă cu subiectul la plural «appartamenti»." },
      { type: "mc", q: "Care verb NU poate avea forma pasivă?", options: ["costruire", "arrivare", "lavare"], answer: 1, explain: "Arrivare este intranzitiv: nu are complement direct, deci nu are pasiv." }
    ]
  }
});

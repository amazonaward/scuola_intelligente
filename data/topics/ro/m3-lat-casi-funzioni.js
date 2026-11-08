TOPIC('ro', {
  id: `m3-lat-casi-funzioni`,
  title: `Cazurile și funcțiile logice`,
  intro: `În italiană înțelegem cine face ce datorită <b>ordinii cuvintelor</b> și <b>prepozițiilor</b>: „Il cane morde l'uomo" (Câinele mușcă omul) este foarte diferit de „L'uomo morde il cane" (Omul mușcă câinele)! Latina arată același lucru prin <b>sfârșitul cuvântului</b>, <b>desinența</b>. Fiecare desinență corespunde unui <b>caz</b>, iar fiecare caz unei <b>funcții logice</b>. De aceea <b>analiza logică</b> pe care o faci în limba maternă este cheia pentru a înțelege latina. 🏛️📜`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Latina este o limbă „cu desinențe"`,
      html: `<p>Un cuvânt latin variabil are două părți:</p>
<ul>
<li><b>tema</b> (partea care nu se schimbă și poartă sensul): <i>ros-</i> = trandafir;</li>
<li><b>desinența</b> (partea finală care se schimbă): <i>-a, -ae, -am, -is…</i> și arată <b>funcția</b> cuvântului în propoziție, <b>numărul</b> (singular/plural) și adesea <b>genul</b>.</li>
</ul>
<p>Uită-te la aceste două propoziții:</p>
<p><i>Puell<b>a</b> ros<b>am</b> amat.</i> = Fata iubește trandafirul.<br>
<i>Ros<b>am</b> puell<b>a</b> amat.</i> = Fata iubește trandafirul (același sens!).</p>
<p>Chiar dacă schimbăm ordinea, <i>puella</i> cu desinența <b>-a</b> rămâne subiectul, iar <i>rosam</i> cu <b>-am</b> rămâne complementul direct. În latină ordinea cuvintelor este <b>liberă</b> (deși poziția cea mai obișnuită pune verbul la sfârșit).</p>
<p>Ansamblul tuturor formelor unui substantiv se numește <b>declinare</b>; a „declina" un substantiv înseamnă a-i enumera cazurile.</p>`
    },
    {
      type: `text`, title: `2. Cele șase cazuri și funcțiile lor`,
      html: `<table>
<tr><th>Caz</th><th>Funcția logică principală</th><th>Întrebarea</th><th>Exemplu (decl. I)</th></tr>
<tr><td><b>Nominativ</b></td><td>subiect, nume predicativ</td><td>cine? ce? (face acțiunea)</td><td><i>puella</i> = fata</td></tr>
<tr><td><b>Genitiv</b></td><td>complement de specificare (posesiv)</td><td>al cui? a cui? ale cui? de ce?</td><td><i>puellae</i> = a fetei</td></tr>
<tr><td><b>Dativ</b></td><td>complement indirect</td><td>cui? la cine? la ce?</td><td><i>puellae</i> = fetei</td></tr>
<tr><td><b>Acuzativ</b></td><td>complement direct (și direcție, cu <i>in, ad</i>)</td><td>pe cine? ce? (suportă acțiunea)</td><td><i>puellam</i> = pe fată</td></tr>
<tr><td><b>Vocativ</b></td><td>complement de adresare</td><td>(se strigă pe cineva)</td><td><i>puella!</i> = fato!</td></tr>
<tr><td><b>Ablativ</b></td><td>multe complemente circumstanțiale: mijloc, mod, cauză, însoțire (<i>cum</i>), loc (<i>in</i>), timp…</td><td>cu ce? cum? unde? când?</td><td><i>puellā</i> = cu/de la fată</td></tr>
</table>
<p>Numele cazurilor vin din latină: <i>nominativus</i> (cel care numește), <i>genetivus</i> (al originii), <i>dativus</i> (de la <i>dare</i> = a da), <i>accusativus</i>, <i>vocativus</i> (de la <i>vocare</i> = a chema), <i>ablativus</i> (de la <i>auferre</i> = a lua, a duce departe, pentru că arăta și îndepărtarea).</p>`
    },
    {
      type: `svg`, title: `O propoziție, patru cazuri`,
      caption: `Puella nautae rosam dat = Fata dă un trandafir marinarului. Fiecare culoare este o funcție logică, indicată de desinență.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="20" y="40" width="140" height="70" rx="12" fill="#ef4444"/>
<rect x="170" y="40" width="140" height="70" rx="12" fill="#22c55e"/>
<rect x="320" y="40" width="140" height="70" rx="12" fill="#3b82f6"/>
<rect x="470" y="40" width="110" height="70" rx="12" fill="#64748b"/>
<text x="90" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">puell<tspan fill="#fde047">a</tspan></text>
<text x="240" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">naut<tspan fill="#fde047">ae</tspan></text>
<text x="390" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">ros<tspan fill="#fde047">am</tspan></text>
<text x="525" y="85" font-size="26" fill="#fff" text-anchor="middle" font-weight="bold">dat</text>
<text x="90" y="140" font-size="15" fill="#b91c1c" text-anchor="middle" font-weight="bold">NOMINATIV</text>
<text x="240" y="140" font-size="15" fill="#15803d" text-anchor="middle" font-weight="bold">DATIV</text>
<text x="390" y="140" font-size="15" fill="#1d4ed8" text-anchor="middle" font-weight="bold">ACUZATIV</text>
<text x="525" y="140" font-size="15" fill="#334155" text-anchor="middle" font-weight="bold">VERB</text>
<text x="90" y="165" font-size="14" fill="#334155" text-anchor="middle">subiect</text>
<text x="240" y="165" font-size="14" fill="#334155" text-anchor="middle">compl. indirect</text>
<text x="390" y="165" font-size="14" fill="#334155" text-anchor="middle">compl. direct</text>
<text x="525" y="165" font-size="14" fill="#334155" text-anchor="middle">predicat</text>
<text x="90" y="200" font-size="18" fill="#0f172a" text-anchor="middle">fata</text>
<text x="240" y="200" font-size="18" fill="#0f172a" text-anchor="middle">marinarului</text>
<text x="390" y="200" font-size="18" fill="#0f172a" text-anchor="middle">un trandafir</text>
<text x="525" y="200" font-size="18" fill="#0f172a" text-anchor="middle">dă</text>
<text x="300" y="250" font-size="17" fill="#854d0e" text-anchor="middle">Desinența (în galben) arată cazul, chiar dacă muți cuvintele:</text>
<text x="300" y="278" font-size="17" fill="#854d0e" text-anchor="middle" font-style="italic">Nautae rosam puella dat. = același sens!</text>
</svg>`
    },
    {
      type: `text`, title: `3. Declinarea I: rosa, rosae`,
      html: `<p>Substantivele din <b>declinarea I</b> au la nominativ singular terminația <b>-a</b>, iar la genitiv singular <b>-ae</b>. Sunt aproape toate <b>feminine</b> (<i>rosa, puella, silva</i> = pădure, <i>terra, aqua, insula</i> = insulă), dar unele nume de meserii masculine sunt tot de declinarea I: <i>nauta</i> (marinar), <i>agricola</i> (țăran), <i>poeta</i>, <i>incola</i> (locuitor).</p>
<table>
<tr><th>Caz</th><th>Singular</th><th>Plural</th></tr>
<tr><td>Nominativ</td><td>ros<b>a</b> – trandafirul</td><td>ros<b>ae</b> – trandafirii</td></tr>
<tr><td>Genitiv</td><td>ros<b>ae</b> – al trandafirului</td><td>ros<b>arum</b> – ai trandafirilor</td></tr>
<tr><td>Dativ</td><td>ros<b>ae</b> – trandafirului</td><td>ros<b>is</b> – trandafirilor</td></tr>
<tr><td>Acuzativ</td><td>ros<b>am</b> – pe trandafir</td><td>ros<b>as</b> – pe trandafiri</td></tr>
<tr><td>Vocativ</td><td>ros<b>a</b> – o, trandafirule</td><td>ros<b>ae</b> – o, trandafirilor</td></tr>
<tr><td>Ablativ</td><td>ros<b>ā</b> – cu trandafirul</td><td>ros<b>is</b> – cu trandafirii</td></tr>
</table>
<p>Atenție la formele identice: <b>rosae</b> poate fi genitiv sing., dativ sing., nominativ sau vocativ plural! Sensul se înțelege din <b>context</b> și din verb (singular sau plural). Latina nu are <b>articol</b>: <i>rosa</i> = trandafirul / un trandafir.</p>
<p>Declinările sunt în total <b>cinci</b>, recunoscute după <b>genitivul singular</b>: I -ae (<i>rosa, rosae</i>), a II-a -i (<i>dominus, domini</i>), a III-a -is (<i>rex, regis</i>), a IV-a -us (<i>manus, manus</i>), a V-a -ei (<i>dies, diei</i>). De aceea în dicționar se găsesc mereu nominativul și genitivul.</p>`
    },
    {
      type: `widget`, title: `Flashcards: declină rosa`,
      widget: `flashcards`,
      options: { cards: [
        { front: `nominativ singular`, back: `rosa – trandafirul (subiect)` },
        { front: `genitiv singular`, back: `rosae – al trandafirului` },
        { front: `dativ singular`, back: `rosae – trandafirului` },
        { front: `acuzativ singular`, back: `rosam – pe trandafir (complement direct)` },
        { front: `ablativ singular`, back: `rosā – cu trandafirul` },
        { front: `genitiv plural`, back: `rosarum – ai trandafirilor` },
        { front: `dativ/ablativ plural`, back: `rosis – trandafirilor / cu trandafirii` },
        { front: `acuzativ plural`, back: `rosas – pe trandafiri (complement direct)` }
      ] },
      caption: `Repetă declinarea cu voce tare ca pe o poezioară: rosa, rosae, rosae, rosam, rosa, rosā…`
    },
    {
      type: `quiz`, title: `Mini-test: cazuri și desinențe`,
      questions: [
        { type: `mc`, q: `Care caz exprimă complementul direct?`, options: [`Nominativ`, `Acuzativ`, `Dativ`], answer: 1, explain: `Acuzativul este cazul complementului direct.` },
        { type: `mc`, q: `„Silvarum" este…`, options: [`genitiv plural`, `acuzativ singular`, `ablativ plural`], answer: 0, explain: `-arum este desinența genitivului plural: „ai pădurilor".` },
        { type: `tf`, q: `În latină există articol hotărât.`, answer: false, explain: `Latina nu are articole: rosa = trandafirul sau un trandafir.` }
      ]
    },
    {
      type: `text`, title: `4. De la analiza logică la traducere: metoda`,
      html: `<p>Pentru a traduce o propoziție latină procedezi ca un detectiv:</p>
<ol>
<li><b>Găsește verbul</b> (de obicei la sfârșit): din desinență înțelegi persoana și numărul subiectului (<i>dat</i> = el/ea dă).</li>
<li><b>Găsește subiectul</b>: un nominativ acordat cu verbul (singular dacă verbul este singular).</li>
<li><b>Găsește complementul direct</b>: un acuzativ (dacă verbul este tranzitiv).</li>
<li><b>Analizează celelalte cazuri</b>: genitiv (al/a/ale…), dativ (cui…), ablativ (cu, de la, în…).</li>
<li><b>Alege sensul</b> potrivit din dicționar și <b>reordonează</b> în română.</li>
</ol>
<p>Exemplu: <i>Agricola cum filiā in silvā ambulat.</i></p>
<ul>
<li><i>ambulat</i>: verb, persoana a III-a singular = se plimbă;</li>
<li><i>agricola</i>: nominativ singular = țăranul (subiect);</li>
<li><i>cum filiā</i>: <i>cum</i> + ablativ = însoțire ➜ cu fiica;</li>
<li><i>in silvā</i>: <i>in</i> + ablativ = loc (unde?) ➜ în pădure.</li>
</ul>
<p>➜ <b>Țăranul se plimbă cu fiica în pădure.</b></p>
<p>⚠️ <i>in</i> + <b>ablativ</b> = loc unde (<i>in silvā</i> = în pădure); <i>in</i> + <b>acuzativ</b> = direcție (<i>in silvam</i> = spre pădure / în pădure, înăuntru).</p>`
    },
    {
      type: `widget`, title: `Joc: în ce caz este cuvântul scris cu majuscule?`,
      widget: `classify`,
      options: {
        groups: [`Nominativ`, `Genitiv`, `Dativ`, `Acuzativ`, `Ablativ`],
        items: [
          [`PUELLA cantat (fata cântă)`, 0],
          [`NAUTAE navigant (marinarii navighează)`, 0],
          [`ira DEAE (mânia zeiței)`, 1],
          [`insula NAUTARUM (insula marinarilor)`, 1],
          [`poetae ROSAS do (dau trandafiri poetului)`, 3],
          [`AGRICOLAE pecuniam do (dau bani țăranului)`, 2],
          [`magistra DISCIPULIS narrat (povestește elevilor)`, 2],
          [`AQUAM porto (duc apa)`, 3],
          [`in SILVĀ (în pădure)`, 4],
          [`cum FILIĀ (cu fiica)`, 4]
        ]
      },
      caption: `Gândește mai întâi în română: este subiect, specificare, complement indirect, complement direct sau alt complement?`
    },
    {
      type: `example`, title: `Exemplu practic: traducem o inscripție`,
      html: `<p>Pe o tăbliță romană imaginară citești: <i>Incolae insulae deae aras parant.</i></p>
<ol>
<li><i>parant</i> = pregătesc (pers. a III-a plural) ➜ subiectul este la plural.</li>
<li><i>incolae</i>: nominativ plural = locuitorii (subiect).</li>
<li><i>insulae</i>: genitiv singular = ai insulei (specificare, se leagă de <i>incolae</i>).</li>
<li><i>deae</i>: dativ singular = zeiței (complement indirect).</li>
<li><i>aras</i>: acuzativ plural = altarele (complement direct).</li>
</ol>
<p>➜ <b>Locuitorii insulei pregătesc altare zeiței.</b> Ai observat? <i>insulae</i> și <i>deae</i> au aceeași desinență, dar funcții diferite: sensul propoziției hotărăște.</p>`
    },
    {
      type: `example`, title: `Exemplu practic: cazurile ascunse în limba română`,
      html: `<p>Româna a păstrat cazurile mai bine decât alte limbi romanice, în special la <b>pronume</b> și la substantive (genitiv-dativ și vocativ):</p>
<ul>
<li><b>eu</b> vorbesc (subiect = nominativ, din latinescul <i>ego</i>);</li>
<li>Luca <b>mă</b> vede / vede <b>pe mine</b> (complement direct = acuzativ, din latinescul <i>me</i>);</li>
<li>Luca <b>îmi</b> dă o carte = dă <b>mie</b> (complement indirect = dativ, din latinescul <i>mihi</i>).</li>
</ul>
<p>Același lucru la <b>el/lui/îi/îl</b>, <b>cine/cui</b>. În plus, multe cuvinte din limbile romanice vin din <b>acuzativul</b> latin: <i>rosam</i> ➜ rosa, <i>montem</i> ➜ monte (munte), <i>lupum</i> ➜ lupo (lup) (-m final nu se mai pronunța încă din epoca imperială).</p>`
    },
    {
      type: `curiosity`, title: `Știai că… multe limbi vii au încă cazuri?`,
      html: `<p><b>Germana</b> are 4 (Nominativ, Genitiv, Dativ, Akkusativ), <b>rusa</b> 6, <b>poloneza</b> 7, <b>româna</b> păstrează genitiv-dativul și vocativul, <b>greaca modernă</b> 4. <b>Finlandeza</b> are cam 15, iar <b>maghiara</b> peste 18! Latina avea 6 (plus o mică rămășiță a unui al șaptelea, <b>locativul</b>: <i>Romae</i> = la Roma, <i>domi</i> = acasă).</p>`
    },
    {
      type: `curiosity`, title: `Știai că… folosim cazuri latine fără să știm?`,
      html: `<p>Multe expresii latine pe care le folosim sunt într-un caz precis: <i>curriculum <b>vitae</b></i> (genitiv: „cursul <b>vieții</b>"), <i>aqua <b>vitae</b></i>, <i>terra <b>incognita</b></i> (nominativ), <i>ad <b>hoc</b></i> (acuzativ: „pentru aceasta"), <i>in <b>extremis</b></i> (ablativ plural: „în ultimele clipe"), <i>a <b>priori</b></i> (ablativ), <i>pro <b>forma</b></i> (ablativ). Iar numele limbii <i>latine</i> vine de la <b>Latium</b> (regiunea Lazio).</p>`
    },
    {
      type: `remember`, title: `De ținut minte`,
      html: `<ul>
<li><b>Desinența</b> = arată <b>cazul</b> (funcția logică) și <b>numărul</b>.</li>
<li>Nominativ = subiect; Genitiv = al/a/ale…; Dativ = cui…; Acuzativ = complement direct; Vocativ = o…!; Ablativ = cu, de la, în (complemente circumstanțiale).</li>
<li>Declinarea I: <b>rosa, rosae</b> (gen. -ae), aproape toate feminine.</li>
<li>Pentru traducere: verb ➜ subiect ➜ complement direct ➜ alte complemente ➜ reordonează.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a înțelege`,
      intro: `Dacă cazurile ți se par un zid, încearcă să le privești din altă parte.`,
      tabs: [
        {
          label: `🏷️ Etichetele de pe cuvinte`,
          html: `<p>Imaginează-ți că fiecare cuvânt latin poartă o <b>etichetă</b> lipită la sfârșit, ca eticheta unui bagaj: <i>-a</i> = „sunt subiectul", <i>-am</i> = „sunt complementul direct", <i>-ae</i> (cu un verb ca <i>dare</i>) = „sunt cel căruia i se dă".</p>
<p>În română, în schimb, rolul multor cuvinte depinde de <b>locul</b> în care stau, ca jucătorii unei echipe care contează prin <b>poziția</b> lor pe teren. În latină fiecare jucător are <b>tricoul cu rolul</b> scris pe el: poate sta oriunde, se vede mereu cine este portarul!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<g font-size="22" font-weight="bold" text-anchor="middle">
<rect x="30" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="110" y="88" fill="#0f172a">ros</text>
<rect x="210" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="290" y="88" fill="#0f172a">puell</text>
<rect x="390" y="50" width="160" height="60" rx="10" fill="#fff" stroke="#0f172a" stroke-width="3"/><text x="470" y="88" fill="#0f172a">am</text>
</g>
<polygon points="150,110 190,110 190,150 170,165 150,150" fill="#3b82f6"/>
<text x="170" y="140" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">am</text>
<polygon points="330,110 370,110 370,150 350,165 330,150" fill="#ef4444"/>
<text x="350" y="140" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">a</text>
<polygon points="510,110 550,110 550,150 530,165 510,150" fill="#64748b"/>
<text x="530" y="140" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">-at</text>
<text x="110" y="195" font-size="15" fill="#1d4ed8" text-anchor="middle">etichetă: COMPLEMENT DIRECT</text>
<text x="290" y="195" font-size="15" fill="#b91c1c" text-anchor="middle">etichetă: SUBIECT</text>
<text x="470" y="195" font-size="15" fill="#334155" text-anchor="middle">verb: am-at (iubește)</text>
<text x="300" y="30" font-size="17" fill="#0f172a" text-anchor="middle" font-weight="bold">Rosam puella amat = Fata iubește trandafirul</text>
</svg>`
        },
        {
          label: `🇩🇪 Ca în germană și rusă`,
          html: `<p>Dacă studiezi sau auzi germana, cunoști deja cazurile! Dar acolo le poartă mai ales <b>articolul</b>:</p>
<ul>
<li><b>Der</b> Hund beißt <b>den</b> Mann = Câinele mușcă omul (der = nominativ, den = acuzativ).</li>
<li><b>Den</b> Mann beißt <b>der</b> Hund = același sens, ordine diferită!</li>
</ul>
<p>În <b>rusă</b>, ca în latină, se schimbă sfârșitul substantivului: <i>мам<b>а</b></i> (mama, subiect) ➜ <i>вижу мам<b>у</b></i> (o văd pe mama, complement direct). Elevii vorbitori de română, rusă sau poloneză găsesc cazurile latine mult mai naturale decât cei vorbitori de italiană!</p>`
        },
        {
          label: `🧩 Potrivește cazul cu întrebarea`,
          html: `<p>Fiecare caz răspunde unei întrebări din analiza logică. Leagă perechile.</p>`,
          widget: `match`,
          options: { pairs: [
            [`Nominativ`, `Cine face acțiunea?`],
            [`Genitiv`, `Al cui? A cui? De ce?`],
            [`Dativ`, `Cui? La cine? La ce?`],
            [`Acuzativ`, `Cine/ce suportă acțiunea?`],
            [`Vocativ`, `Pe cine strig?`],
            [`Ablativ`, `Cu ce? Unde? Cum? Când?`]
          ] }
        },
        {
          label: `🎨 Culorile analizei logice`,
          html: `<p>Un truc folosit în multe școli: dă fiecărei funcții logice o <b>culoare fixă</b>, în română și în latină.</p>
<ul>
<li>🔴 roșu = subiect (nominativ)</li>
<li>⚫ negru = verb</li>
<li>🔵 albastru = complement direct (acuzativ)</li>
<li>🟢 verde = complement indirect (dativ)</li>
<li>🟡 galben = specificare (genitiv)</li>
<li>🟣 violet = alte complemente (ablativ)</li>
</ul>
<p>Colorează propoziția în română, apoi pe cea în latină: cuvintele își schimbă locul, dar culorile rămân aceleași!</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta: cazuri și funcții`,
      nodes: [
        { id: `flex`, label: `Limbă flexionară`, x: 50, y: 6, color: `#64748b`, html: `Cuvintele își schimbă terminația pentru a exprima funcția.`, why: `Latina moștenește cazurile din <b>indoeuropeană</b>, limba-mamă reconstruită din care provin și greaca, sanscrita, limbile germanice și slave. Indoeuropeana avea probabil 8 cazuri.` },
        { id: `des`, label: `Desinența`, x: 25, y: 26, color: `#eab308`, html: `Partea finală care se schimbă.`, why: `Din latinescul <i>desinere</i> = a se termina. Se atașează la tema cuvântului, care poartă sensul.` },
        { id: `decl`, label: `5 declinări`, x: 75, y: 26, color: `#a855f7`, html: `Grupuri de substantive cu aceleași desinențe; se recunosc după genitivul singular.`, why: `Clasificarea în cinci declinări aparține gramaticienilor antici și medievali (precum Priscian, secolul VI): genitivul este cazul în care diferențele se văd cel mai bine.` },
        { id: `nom`, label: `Nominativ`, x: 10, y: 52, color: `#ef4444`, html: `Subiect și nume predicativ.`, why: `Este forma cu care se „numește" lucrul (<i>nominare</i>): de aceea este prima formă din dicționar.` },
        { id: `gen`, label: `Genitiv`, x: 28, y: 72, color: `#f59e0b`, html: `Specificare: al cui?`, why: `Numele a apărut dintr-o greșeală de traducere: grecescul <i>genikḗ</i> însemna „al genului, al categoriei", dar romanii l-au redat ca <i>genetivus</i>, „al nașterii, al originii".` },
        { id: `dat`, label: `Dativ`, x: 48, y: 52, color: `#22c55e`, html: `Complement indirect: cui?`, why: `De la <i>dare</i>: este cazul celui care primește ceva. „Îmi", „îți", „îi" din română sunt moștenitorii lui.` },
        { id: `acc`, label: `Acuzativ`, x: 68, y: 72, color: `#3b82f6`, html: `Complement direct; cu <i>in, ad</i> direcție.`, why: `Tot o greșeală de traducere: grecescul <i>aitiatikḗ</i> (al celui cauzat, al efectului) a fost confundat cu <i>aitiáomai</i> (a acuza) și a devenit <i>accusativus</i>.` },
        { id: `abl`, label: `Ablativ`, x: 88, y: 52, color: `#7c3aed`, html: `Mijloc, mod, cauză, însoțire, loc, timp.`, why: `Greaca nu îl avea: după tradiție numele provine de la Iulius Caesar, autorul unui tratat de gramatică (<i>ablativus</i>, de la <i>auferre</i>, a duce departe). În latină a „absorbit" trei cazuri indoeuropene vechi: ablativul, instrumentalul și locativul.` },
        { id: `ital`, label: `Moștenire în limbile romanice`, x: 50, y: 92, color: `#0ea5e9`, html: `Pronume (eu/mine/mă) și substantive derivate din acuzativ.`, why: `În latina vorbită desinențele finale s-au slăbit (-m nu se mai pronunța, vocalele se confundau): au devenit atunci necesare prepozițiile și ordinea fixă a cuvintelor, ca în italiană.` }
      ],
      edges: [
        [`flex`, `des`, `folosește`], [`flex`, `decl`, `organizează`], [`des`, `nom`, `caz`], [`des`, `gen`, `caz`], [`des`, `dat`, `caz`], [`des`, `acc`, `caz`], [`des`, `abl`, `caz`],
        [`acc`, `ital`, `de aici substantivele`], [`dat`, `ital`, `pronume`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: tradu`,
      questions: [
        { type: `mc`, q: `„Poeta puellis fabulam narrat" înseamnă…`, options: [`Fata povestește o poveste poetului.`, `Poetul povestește o poveste fetelor.`, `Fetele povestesc poveștile poetului.`], answer: 1, explain: `poeta = nom. (subiect), puellis = dat. pl. (fetelor), fabulam = acuz. (complement direct).` },
        { type: `text`, q: `Cum se spune în latină „în pădure" (in + ablativul lui silva)?`, answer: [`in silva`, `in silvā`], explain: `Loc unde: in + ablativ ➜ in silvā.` },
        { type: `tf`, q: `„Rosam puella amat" și „Puella rosam amat" au același sens.`, answer: true, explain: `Desinențele -a (subiect) și -am (complement direct) nu se schimbă.` }
      ]
    }
  ],
  glossary: [
    { t: `Caz`, d: `Forma pe care o ia un cuvânt pentru a-și exprima funcția logică.` },
    { t: `Desinență`, d: `Terminație variabilă care arată cazul și numărul.` },
    { t: `Temă`, d: `Partea invariabilă a cuvântului, care poartă sensul.` },
    { t: `Declinare`, d: `Ansamblul formelor unui substantiv; în latină sunt cinci grupe.` },
    { t: `Nominativ`, d: `Cazul subiectului și al numelui predicativ.` },
    { t: `Genitiv`, d: `Cazul complementului de specificare.` },
    { t: `Dativ`, d: `Cazul complementului indirect.` },
    { t: `Acuzativ`, d: `Cazul complementului direct.` },
    { t: `Vocativ`, d: `Cazul folosit pentru a striga pe cineva.` },
    { t: `Ablativ`, d: `Cazul multor complemente circumstanțiale (mijloc, mod, loc, timp…).` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `În latină funcția logică a unui substantiv se înțelege mai ales din…`, options: [`ordinea cuvintelor`, `desinență`, `articol`], answer: 1, explain: `Desinența arată cazul.` },
      { type: `mc`, q: `Cazul complementului indirect este…`, options: [`genitivul`, `dativul`, `ablativul`], answer: 1, explain: `Dativ = cui? la ce?` },
      { type: `mc`, q: `„Rosarum" este…`, options: [`genitiv plural`, `dativ singular`, `acuzativ plural`], answer: 0, explain: `-arum = genitiv plural (ai trandafirilor).` },
      { type: `num`, q: `Câte cazuri are latina (fără a număra locativul)?`, answer: 6, tol: 0, explain: `Nominativ, genitiv, dativ, acuzativ, vocativ, ablativ.` },
      { type: `num`, q: `Câte declinări latine există?`, answer: 5, tol: 0, explain: `Se recunosc după genitivul singular: -ae, -i, -is, -us, -ei.` },
      { type: `text`, q: `Scrie acuzativul singular al lui „puella".`, answer: [`puellam`], explain: `Declinarea I: -am ➜ puellam.` },
      { type: `text`, q: `Scrie genitivul singular al lui „rosa".`, answer: [`rosae`], explain: `Declinarea I: genitiv singular în -ae.` },
      { type: `tf`, q: `„Nauta" este un substantiv masculin din declinarea I.`, answer: true, explain: `Numele de meserii masculine ca nauta, agricola, poeta sunt de declinarea I.` },
      { type: `tf`, q: `„In silvam" arată locul unde se află cineva.`, answer: false, explain: `In + acuzativ = direcție (spre pădure); locul unde este in + ablativ.` },
      { type: `order`, q: `Pune în ordine pașii pentru a traduce o propoziție latină.`, items: [`Găsește verbul`, `Găsește subiectul la nominativ`, `Găsește complementul direct la acuzativ`, `Analizează celelalte complemente`, `Reordonează în română`], explain: `A porni de la verb ajută să înțelegi cine este subiectul.` },
      { type: `mc`, q: `„Agricolae filiae rosas dant" înseamnă…`, options: [`Țăranii dau trandafiri fiicei.`, `Fiica dă trandafiri țăranilor.`, `Țăranul dă trandafirul fiicelor.`], answer: 0, explain: `dant este la plural ➜ agricolae nom. pl.; filiae dat. sing.; rosas acuz. pl.` },
      { type: `mc`, q: `Din ce caz latin provin aproape toate substantivele limbilor romanice?`, options: [`Nominativ`, `Acuzativ`, `Vocativ`], answer: 1, explain: `rosam ➜ rosa, montem ➜ monte, lupum ➜ lupo.` }
    ]
  }
});

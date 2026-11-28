TOPIC('ro', {
  id: `l1-lat-complementi`,
  title: `Principalele complemente`,
  intro: `O propoziție nu trăiește doar din subiect, verb și complement direct: ne spun și <b>unde</b>, <b>când</b>, <b>cu ce</b>, <b>cum</b>, <b>de ce</b>, <b>cu cine</b>, <b>de către cine</b>. Sunt <b>complementele indirecte</b> (circumstanțiale), iar latina le exprimă prin combinația dintre <b>caz</b> și <b>prepoziție</b> (sau doar prin caz, mai ales prin <b>ablativ</b>, „cazul-joker"). În această lecție înveți cele mai frecvente complemente: <b>de loc</b> (cu regula specială pentru numele de orașe), <b>de timp</b>, <b>instrumental</b>, <b>de mod</b>, <b>de cauză</b>, <b>sociativ</b>, <b>de agent</b> și alte câteva care îți vor folosi zilnic la traduceri. 🗺️⏳⚔️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Tabloul complementelor`,
      html: `<p>În română folosim multe prepoziții (de, la, din, în, cu, pentru, pe, între) ca să deosebim complementele. În latină prepozițiile sunt mai puține, iar multe complemente sunt exprimate doar prin caz. Cazul principal pentru complemente este <b>ablativul</b>, care a moștenit trei funcții indo-europene diferite (<i>ablativul propriu-zis</i>, care indică îndepărtarea; <i>instrumentalul</i>, care indică mijlocul și tovărășia; <i>locativul</i>, care indică locul și timpul).</p>
<table>
<tr><th>Complementul</th><th>Întrebarea</th><th>Construcția latină</th><th>Exemplu</th></tr>
<tr><td>Atribut genitival (apartenență)</td><td>al cui?</td><td>genitiv</td><td><i>casa agricolae</i></td></tr>
<tr><td>Complement indirect</td><td>cui?</td><td>dativ</td><td><i>puellae rosam dat</i></td></tr>
<tr><td>Agent / cauză eficientă</td><td>de către cine?</td><td><b>a, ab + ablativ</b></td><td><i>a magistro laudatur</i></td></tr>
<tr><td>Instrumental (mijloc)</td><td>cu ce?</td><td><b>ablativ simplu</b></td><td><i>gladio pugnat</i></td></tr>
<tr><td>Sociativ (tovărășie)</td><td>cu cine?</td><td><b>cum + ablativ</b></td><td><i>cum amicis ambulat</i></td></tr>
<tr><td>De mod</td><td>cum?</td><td><b>cum + ablativ</b> (sau ablativ + adjectiv)</td><td><i>cum cura laborat</i></td></tr>
<tr><td>De cauză</td><td>de ce?</td><td>ablativ simplu, <b>ob/propter + acuzativ</b>, <b>ex + ablativ</b></td><td><i>timore fugit</i></td></tr>
<tr><td>De loc</td><td>unde? încotro? de unde? pe unde?</td><td>prepoziții + caz (vezi mai jos)</td><td><i>in horto</i></td></tr>
<tr><td>De timp</td><td>când? cât timp?</td><td>ablativ (determinat), acuzativ (continuat)</td><td><i>hora quinta</i></td></tr>
<tr><td>De relație (despre ce)</td><td>despre ce?</td><td><b>de + ablativ</b></td><td><i>de bello narrat</i></td></tr>
<tr><td>De materie</td><td>din ce este făcut?</td><td><b>ex + ablativ</b></td><td><i>ex auro</i></td></tr>
<tr><td>De origine</td><td>de unde provine?</td><td><b>ex/de + ablativ</b></td><td><i>ex Italia</i></td></tr>
</table>`
    },
    {
      type: `svg`, title: `Ablativul și cele trei suflete ale sale`,
      caption: `Ablativul latin reunește trei cazuri indo-europene: de aceea îndeplinește atâtea funcții diferite.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#164e63" text-anchor="middle">UN CAZ, MULTE FUNCȚII</text>
<rect x="215" y="46" width="170" height="52" rx="12" fill="#06b6d4" stroke="#0e7490" stroke-width="3"/>
<text x="300" y="80" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">ABLATIV</text>
<line x1="250" y1="98" x2="110" y2="150" stroke="#0e7490" stroke-width="3"/>
<line x1="300" y1="98" x2="300" y2="150" stroke="#0e7490" stroke-width="3"/>
<line x1="350" y1="98" x2="490" y2="150" stroke="#0e7490" stroke-width="3"/>
<rect x="20" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="110" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">SEPARARE</text>
<text x="110" y="200" font-size="14" fill="#334155" text-anchor="middle">de cine? de unde?</text>
<text x="110" y="222" font-size="14" fill="#334155" text-anchor="middle">agent, origine,</text>
<text x="110" y="242" font-size="14" fill="#334155" text-anchor="middle">mișcare dinspre loc</text>
<rect x="210" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="300" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">INSTRUMENT</text>
<text x="300" y="200" font-size="14" fill="#334155" text-anchor="middle">cu ce? cu cine?</text>
<text x="300" y="222" font-size="14" fill="#334155" text-anchor="middle">mijloc, tovărășie,</text>
<text x="300" y="242" font-size="14" fill="#334155" text-anchor="middle">mod, cauză</text>
<rect x="400" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="490" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">LOC ȘI TIMP</text>
<text x="490" y="200" font-size="14" fill="#334155" text-anchor="middle">unde? când?</text>
<text x="490" y="222" font-size="14" fill="#334155" text-anchor="middle">loc unde se află,</text>
<text x="490" y="242" font-size="14" fill="#334155" text-anchor="middle">timp determinat</text>
<text x="300" y="285" font-size="14" fill="#164e63" text-anchor="middle">ablativ propriu-zis + instrumental + locativ</text>
</svg>`
    },
    {
      type: `text`, title: `2. Complementele de loc`,
      html: `<p>Pentru locuri trebuie să deosebim <b>patru situații</b> și două categorii de nume: <b>substantive comune</b> (<i>silva, urbs, agri</i>) și <b>nume proprii de orașe și de insule mici</b> (<i>Roma, Athenae, Capua, Delos</i>), care au construcții proprii.</p>
<table>
<tr><th>Complementul</th><th>Substantive comune</th><th>Nume de orașe și insule mici</th></tr>
<tr><td><b>Loc unde se află</b> (unde sunt?)</td><td><b>in + ablativ</b><br><i>in silva</i> (în pădure), <i>in agris</i> (pe câmpuri)</td><td><b>locativ</b>: declinarea I și a II-a singular: <b>-ae</b>, <b>-i</b><br><i>Romae</i> (la Roma), <i>Capuae</i>, <i>Corinthi</i>; plural: ablativ <i>Athenis</i> (la Atena), <i>Pompeiis</i></td></tr>
<tr><td><b>Mișcare spre loc</b> (încotro merg?)</td><td><b>in / ad + acuzativ</b><br><i>in silvam</i> (în pădure), <i>ad portam</i> (la poartă)</td><td><b>acuzativ fără prepoziție</b><br><i>Romam</i> (la Roma), <i>Athenas</i></td></tr>
<tr><td><b>Mișcare dinspre loc</b> (de unde vin?)</td><td><b>ab, ex, de + ablativ</b><br><i>ex silva</i> (din pădure), <i>ab urbe</i></td><td><b>ablativ fără prepoziție</b><br><i>Roma</i> (de la Roma), <i>Athenis</i></td></tr>
<tr><td><b>Mișcare prin loc</b> (pe unde trec?)</td><td><b>per + acuzativ</b><br><i>per silvam</i> (prin pădure), <i>per agros</i></td><td><b>per + acuzativ</b><br><i>per Italiam</i></td></tr>
</table>
<p>Unele substantive comune se comportă ca numele de orașe: <b>domus</b> (casă: <i>domi</i> „acasă", <i>domum</i> „spre casă", <i>domo</i> „de acasă"), <b>rus</b> (țară, sat: <i>ruri</i>, <i>rus</i>, <i>rure</i>), <b>humi</b> (pe pământ). Ține minte diferența dintre <b>in + ablativ</b> (loc unde se află) și <b>in + acuzativ</b> (mișcare): <i>in agro</i> „în câmp (stare)", dar <i>in agrum</i> „în câmp, înăuntrul câmpului (mișcare)". Înseamnă că <b>aceeași</b> prepoziție are două valori după caz!</p>
<p>Cele mai folosite <b>prepoziții</b>: cu <b>acuzativul</b>: <i>ad, apud, ante, post, per, inter, ob, propter, contra, trans, circum, extra, intra, in</i> (mișcare); cu <b>ablativul</b>: <i>a/ab, e/ex, de, cum, sine, pro, prae, in</i> (stare), <i>sub</i>.</p>`
    },
    {
      type: `example`, title: `Locuri în acțiune`,
      html: `<ul>
<li><i>Marcus Romae habitat.</i> ➜ „Marcus locuiește la Roma." (locativ)</li>
<li><i>Marcus Romam venit.</i> ➜ „Marcus merge (vine) la Roma." (acuzativ simplu: venio = vin)</li>
<li><i>Marcus Roma venit.</i> ➜ „Marcus vine de la Roma." (ablativ simplu)</li>
<li><i>Marcus in horto laborat.</i> ➜ „Marcus muncește în grădină." (in + abl.)</li>
<li><i>Pueri in hortum currunt.</i> ➜ „Băieții aleargă în grădină." (in + ac.: mișcare)</li>
<li><i>Poeta ex Italia venit.</i> ➜ „Poetul vine din Italia." (Italia nu este oraș: ex + abl.)</li>
</ul>
<p>Notă: <i>Athenas navigant</i> „navighează spre Atena" (ac. plur.), <i>Athenis navigant</i> „navighează dinspre Atena" (abl. plur.), dar și <i>Athenis habitant</i> „locuiesc la Atena" (plural: locul unde se află este ablativul).</p>`
    },
    {
      type: `quiz`, title: `Mini-test: complementele de loc`,
      questions: [
        { type: `mc`, q: `Cum se spune „la Roma" (loc unde se află)?`, options: [`in Roma`, `Romae`, `Romam`], answer: 1, explain: `Nume de orașe din declinarea I și a II-a singular: locativ în -ae / -i: Romae.` },
        { type: `mc`, q: `„Ad Italiam" față de „in Italiam": ce complement exprimă?`, options: [`mișcare spre loc`, `loc unde se află`, `mișcare dinspre loc`], answer: 0, explain: `Cu acuzativul prepoziția exprimă mișcare spre: ad/in + ac.` },
        { type: `text`, q: `Cum se spune „de la Roma" (mișcare dinspre loc, fără prepoziție)?`, answer: [`roma`], explain: `Ablativ simplu pentru numele de orașe: Roma (a lung).` },
        { type: `tf`, q: `„In silva" înseamnă „spre pădure".`, answer: false, explain: `In + ablativ = loc unde se află (în pădure); spre pădure este in silvam.` }
      ]
    },
    {
      type: `text`, title: `3. Complementul de timp`,
      html: `<table>
<tr><th>Tipul</th><th>Întrebarea</th><th>Construcția</th><th>Exemplu</th></tr>
<tr><td><b>Timp determinat</b></td><td>când?</td><td><b>ablativ simplu</b> (sau in + ablativ cu unele substantive)</td><td><i>hora quinta</i> la ora cinci; <i>anno</i> în anul…; <i>bello</i> în război, în timpul războiului; <i>primo mense</i> în prima lună</td></tr>
<tr><td><b>Timp continuat</b></td><td>cât timp?</td><td><b>acuzativ simplu</b> (sau per + acuzativ)</td><td><i>tres annos</i> timp de trei ani; <i>multos dies</i> timp de mai multe zile; <i>totam noctem</i> toată noaptea</td></tr>
<tr><td><b>Timp „înainte/după"</b></td><td>cu cât timp înainte/după?</td><td><b>ante / post + acuzativ</b></td><td><i>ante bellum</i> înainte de război; <i>post tres annos</i> după trei ani</td></tr>
</table>
<p>Ca să le deosebești: <b>când?</b> (moment precis) ➜ ablativ; <b>cât timp?</b> (durată) ➜ acuzativ. Un truc din română: „la ora trei" ➜ ablativ; „timp de trei ore" ➜ acuzativ.</p>`
    },
    {
      type: `text`, title: `4. Mijloc, mod, cauză, tovărășie, agent`,
      html: `<p>Aceste cinci complemente sunt toate exprimate prin <b>ablativ</b> (cu sau fără prepoziție) și trebuie deosebite cu atenție:</p>
<ul>
<li><b>Instrumental / mijloc</b> (<i>cu ce?</i>): ablativ <b>fără prepoziție</b>, de lucru. <i>Milites hostes gladiis vincunt</i> „Soldații îi înving pe dușmani cu săbiile".</li>
<li><b>Sociativ / tovărășie</b> (<i>cu cine?</i>): <b>cum + ablativ</b>, de persoane. <i>Pueri cum magistro in silva ambulant</i> „Băieții se plimbă prin pădure cu învățătorul". Cu pronumele personale prepoziția se pune la <b>sfârșit</b>: <i>mecum, tecum, secum, nobiscum, vobiscum</i> („cu mine, cu tine, cu sine, cu noi, cu voi").</li>
<li><b>De mod</b> (<i>cum?</i>): <b>cum + ablativ</b> cu substantiv abstract (<i>cum cura</i>, „cu grijă"); dacă există un adjectiv, <i>cum</i> poate lipsi sau poate sta la mijloc: <i>magna cum cura</i> sau <i>magna cura</i> „cu mare grijă"; <i>more maiorum</i> „după obiceiul strămoșilor".</li>
<li><b>De cauză</b> (<i>de ce?</i>): ablativ simplu pentru cauză internă sau sentimente (<i>timore</i>, „de frică"; <i>amore</i>, „din dragoste"), <b>ob / propter + acuzativ</b> pentru cauză externă (<i>propter bellum</i>, „din cauza războiului"), <b>ex + ablativ</b> pentru cauză care derivă (<i>ex vulnere mortuus est</i>, „a murit din cauza rănii").</li>
<li><b>De agent</b> (<i>de către cine?</i>): <b>a/ab + ablativ</b> cu un <b>verb pasiv</b> și un nume de <b>persoană</b>. <i>Puer a magistro laudatur</i> „Băiatul este lăudat de învățător". Dacă este un nume de lucru, se folosește ablativul simplu (cauză eficientă): <i>Milites telis vulnerantur</i> „Soldații sunt răniți de săgeți".</li>
</ul>
<p>Regulă practică: <b>persoană + pasiv ➜ a/ab</b> (agent); <b>persoană + activ ➜ cum</b> (tovărășie); <b>lucru ➜ ablativ simplu</b> (mijloc sau cauză eficientă).</p>`
    },
    {
      type: `remember`, title: `Tabel de decizie: „cu" în latină`,
      html: `<table>
<tr><th>Română „cu…"</th><th>Latină</th></tr>
<tr><td>cu o persoană (tovărășie)</td><td><b>cum + abl.</b> (<i>cum amico</i>)</td></tr>
<tr><td>cu un instrument (mijloc)</td><td><b>abl. simplu</b> (<i>gladio</i>)</td></tr>
<tr><td>cu o atitudine (mod)</td><td><b>cum + abl.</b> sau abl. + adj. (<i>cum cura</i>, <i>magna cura</i>)</td></tr>
<tr><td>„de" o persoană la pasiv (agent)</td><td><b>a/ab + abl.</b> (<i>a magistro</i>)</td></tr>
</table>`
    },
    {
      type: `widget`, title: `Joc: ce complement este?`,
      widget: `match`,
      options: {
        pairs: [
          [`gladio pugnat`, `mijloc`],
          [`cum amicis ambulat`, `tovărășie`],
          [`a magistro laudatur`, `agent`],
          [`magna cum cura laborat`, `mod`],
          [`propter bellum`, `cauză (externă)`],
          [`de bello narrat`, `relație (despre ce)`],
          [`hora quinta`, `timp determinat`],
          [`tres annos`, `timp continuat`]
        ]
      },
      caption: `Potrivește expresia latină cu complementul.`
    },
    {
      type: `svg`, title: `Locul: cele patru întrebări`,
      caption: `Cele patru complemente de loc: stare, mișcare spre loc, mișcare dinspre loc, mișcare prin loc.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f7fee7"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#365314" text-anchor="middle">COMPLEMENTELE DE LOC</text>
<rect x="20" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="85" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<circle cx="85" cy="120" r="12" fill="#dc2626"/>
<text x="85" y="150" font-size="14" fill="#713f12" text-anchor="middle">STARE (unde?)</text>
<text x="85" y="168" font-size="14" fill="#713f12" text-anchor="middle">in + abl. / Romae</text>
<rect x="190" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="255" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<line x1="170" y1="130" x2="235" y2="130" stroke="#16a34a" stroke-width="5"/>
<polygon points="235,120 255,130 235,140" fill="#16a34a"/>
<text x="255" y="150" font-size="14" fill="#713f12" text-anchor="middle">MIȘCARE SPRE</text>
<text x="255" y="168" font-size="14" fill="#713f12" text-anchor="middle">ad/in + ac. / Romam</text>
<rect x="360" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="425" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<line x1="430" y1="130" x2="500" y2="130" stroke="#2563eb" stroke-width="5"/>
<polygon points="500,120 520,130 500,140" fill="#2563eb"/>
<text x="425" y="150" font-size="14" fill="#713f12" text-anchor="middle">MIȘCARE DINSPRE</text>
<text x="425" y="168" font-size="14" fill="#713f12" text-anchor="middle">ab/ex/de + abl. / Roma</text>
<rect x="20" y="195" width="560" height="80" rx="14" fill="#ffffff" stroke="#65a30d" stroke-width="2"/>
<text x="300" y="224" font-size="16" font-weight="bold" fill="#365314" text-anchor="middle">MIȘCARE PRIN LOC (pe unde?): per + acuzativ</text>
<text x="300" y="248" font-size="15" fill="#334155" text-anchor="middle">per silvam, per agros, per Italiam</text>
<text x="300" y="268" font-size="14" fill="#334155" text-anchor="middle">Nume de orașe: acuzativ/ablativ FĂRĂ prepoziție</text>
</svg>`
    },
    {
      type: `text`, title: `5. Alte complemente utile`,
      html: `<ul>
<li><b>Atribut genitival</b> (genitiv): <i>casa agricolae</i> „casa țăranului". Indică posesia, apartenența, materia (<i>vas auri</i> „un vas de aur"), partea (genitiv partitiv: <i>pars militum</i> „o parte dintre soldați").</li>
<li><b>Complement indirect</b> (dativ): <i>Puer donum matri dat</i> „Băiatul dă un dar mamei". Dativ de interes: <i>Non scholae sed vitae discimus</i> „Nu învățăm pentru școală, ci pentru viață" (fraza este o inversare a lui Seneca, care reproșa: <i>non vitae sed scholae discimus</i>).</li>
<li><b>De relație</b> (<b>de + ablativ</b>): <i>De bello Gallico</i>, „Despre războiul galic" (Cezar); <i>de amicitia</i> „despre prietenie".</li>
<li><b>De materie</b> (<b>ex + ablativ</b>): <i>statua ex marmore</i> „o statuie de marmură" (marmor, declinarea a III-a).</li>
<li><b>De origine</b> (<b>ex/de + ablativ</b> sau ablativ simplu): <i>ex Italia oriundus</i> „originar din Italia".</li>
<li><b>De calitate</b> (genitiv sau ablativ cu adjectiv): <i>vir magnae virtutis</i> / <i>vir magna virtute</i> „un om de mare vitejie".</li>
<li><b>De scop</b> (dativ): <i>Auxilio venit</i> „Vine în ajutor" (literal „vine pentru ajutor").</li>
</ul>`
    },
    {
      type: `example`, title: `Traducem o propoziție completă`,
      html: `<p><i>Nautae ex Italia ad insulam parvam magnis navibus propter bellum navigant.</i></p>
<ol>
<li><b>nautae</b>: nom. plur., subiect (marinari).</li>
<li><b>ex Italia</b>: mișcare dinspre loc (din Italia), ex + ablativ.</li>
<li><b>ad insulam parvam</b>: mișcare spre loc, ad + ac. (spre insula mică).</li>
<li><b>magnis navibus</b>: mijloc, ablativ plural (cu nave mari; <i>navis</i> este din declinarea a III-a).</li>
<li><b>propter bellum</b>: cauză, propter + ac. (din cauza războiului).</li>
<li><b>navigant</b>: verb, pers. a III-a plur.</li>
</ol>
<p>Traducere: <i>„Marinarii navighează din Italia spre insula mică cu nave mari din cauza războiului."</i></p>`
    },
    {
      type: `curiosity`, title: `Știai că… „mecum" are prepoziția la urmă?`,
      html: `<p><i>Mecum</i>, <i>tecum</i>, <i>nobiscum</i>: prepoziția <i>cum</i> este „lipită" la sfârșitul pronumelui. Este o proprietate a lui <i>cum</i> cu pronumele personale (și <i>quocum</i>, <i>quibuscum</i>, „cu care"). Formula liturgică <i>Dominus vobiscum</i> („Domnul fie cu voi") o păstrează încă.</p>`
    },
    {
      type: `curiosity`, title: `Știai că… locativul este un caz „fosil"?`,
      html: `<p>Locativul latin nu are desinențe proprii: la declinarea I și a II-a singular coincide cu <b>genitivul</b> (<i>Romae</i>, <i>Corinthi</i>, <i>domi</i>), la a III-a cu <b>ablativul</b> sau dativul (<i>Carthagine</i> sau <i>Carthagini</i>), la plural cu <b>ablativul</b> (<i>Athenis</i>). De aceea este considerat un caz „fosil": supraviețuiește doar în puține nume. Un exemplu celebru: Cicero scrie că se află la <i>Tusculi</i> (la Tusculum) sau <i>Romae</i>.</p>`
    },
    {
      type: `alternatives`, title: `Alte moduri de a recunoaște complementele`,
      intro: `Dacă te încurci printre toate aceste prepoziții, iată trei strategii.`,
      tabs: [
        {
          label: `❓ Întrebările`,
          html: `<p>Pune complementului întrebarea din română: <b>unde</b> (stare), <b>încotro</b> (mișcare spre), <b>de unde</b> (mișcare dinspre), <b>pe unde</b> (mișcare prin); <b>când</b>, <b>cât timp</b>; <b>cu ce</b>, <b>cum</b>, <b>cu cine</b>, <b>de ce</b>, <b>de către cine</b>. Fiecărei întrebări îi corespunde un rând din tabel. Este metoda cea mai sigură.</p>`
        },
        {
          label: `🧭 Cazul-călăuză`,
          html: `<p>Uită-te la cazul substantivului:</p>
<ul>
<li>dacă este <b>acuzativ</b> + prepoziție, de obicei este vorba de <b>mișcare</b> (ad, in, per, trans), <b>timp continuat</b>, <b>cauză externă</b> (ob, propter);</li>
<li>dacă este <b>ablativ</b> + prepoziție, este <b>mișcare dinspre</b> (ab, ex, de), <b>tovărășie</b>/<b>mod</b> (cum), <b>agent</b> (a/ab cu pasiv), <b>stare</b> (in), <b>relație</b> (de), <b>materie</b> (ex);</li>
<li>dacă este <b>ablativ fără prepoziție</b>, este <b>mijloc</b>, <b>timp determinat</b>, <b>cauză internă</b>, <b>mod</b> (cu adjectiv).</li>
</ul>`
        },
        {
          label: `🇷🇴 De la latină la română`,
          html: `<p>Multe prepoziții românești provin din cele latine: <i>in</i> ➜ în; <i>ad</i> ➜ a, la; <i>de</i> ➜ de; <i>ex</i> ➜ din (de la <i>de ex</i>); <i>cum</i> ➜ cu; <i>per</i> ➜ pe, prin; <i>ab</i> ➜ de; <i>sine</i> ➜ fără (de la <i>sine</i>/<i>foras</i>); <i>post</i> ➜ după (<i>de-post</i>); <i>ante</i> ➜ înainte; <i>sub</i> ➜ sub; <i>super</i> ➜ sus, peste. Să le recunoști este jumătate din treabă.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Harta complementelor`,
      nodes: [
        { id: `abl`, label: `Ablativ`, x: 50, y: 8, color: `#06b6d4`, html: `„Cazul-joker" al complementelor indirecte.`, why: `Ablativul latin provine din fuziunea a trei cazuri indo-europene: ablativul (îndepărtare), instrumentalul (mijloc, tovărășie) și locativul (loc, timp). De aceea are atâtea funcții diferite.` },
        { id: `luogo`, label: `Loc`, x: 18, y: 42, color: `#16a34a`, html: `Stare, mișcare spre, mișcare dinspre, mișcare prin.`, why: `Numele de orașe nu au prepoziție pentru că locul este simțit ca „punct de sosire" deja cunoscut: Romam = spre Roma. Locativul Romae este o rămășiță a unui caz dispărut.` },
        { id: `tempo`, label: `Timp`, x: 50, y: 42, color: `#f59e0b`, html: `Când (abl.) și cât timp (ac.).`, why: `Acuzativul este cazul extensiei („de-a lungul întregii nopți"), ablativul cel al punctului („în acel moment").` },
        { id: `mezzo`, label: `Mijloc, mod, cauză`, x: 82, y: 42, color: `#3b82f6`, html: `Ablativ simplu sau cu cum.`, why: `Funcție a instrumentalului indo-european: „prin intermediul". Româna nu are un caz corespunzător și folosește „cu" și „din".` },
        { id: `comp`, label: `Tovărășie și agent`, x: 30, y: 78, color: `#ef4444`, html: `Cum + abl. (cu cine); a/ab + abl. (de către cine).`, why: `Deosebirea dintre persoane și lucruri este tipică pentru latină: dacă agentul este o persoană, e nevoie de prepoziție; dacă este un instrument, nu. O greșeală frecventă este să spui „gladio" pentru „de către soldat".` },
        { id: `ita`, label: `Româna: prepoziții`, x: 75, y: 82, color: `#a855f7`, html: `de, la, din, în, cu, pe…`, why: `Limbile romanice au înlocuit cazurile cu prepoziții: româna a moștenit multe prepoziții din latină (<i>de, a, în, cu, per</i>) și a creat apoi altele compuse (din, de la, pe lângă…).` }
      ],
      edges: [
        [`abl`, `luogo`, `funcție`], [`abl`, `tempo`, `funcție`], [`abl`, `mezzo`, `funcție`], [`mezzo`, `comp`, `+ prepoziție`], [`comp`, `ita`, `azi`]
      ]
    },
    {
      type: `quiz`, title: `Mini-test: mijloc, tovărășie, agent`,
      questions: [
        { type: `mc`, q: `„Cum amicis" este un complement de…`, options: [`mijloc`, `tovărășie`, `agent`], answer: 1, explain: `Cum + ablativ cu persoane: tovărășie.` },
        { type: `text`, q: `Cum se spune „cu mine" (un cuvânt)?`, answer: [`mecum`], explain: `Prepoziția cum se postpune pronumelui: mecum.` },
        { type: `mc`, q: `„Puer a magistro laudatur": a magistro este…`, options: [`complement de agent`, `complement de tovărășie`, `complement de mijloc`], answer: 0, explain: `Verb pasiv + persoană: a/ab + ablativ = complement de agent.` },
        { type: `mc`, q: `„Milites gladiis pugnant": gladiis este…`, options: [`mijloc`, `tovărășie`, `agent`], answer: 0, explain: `Ablativ simplu de lucru: mijloc („luptă cu săbiile").` }
      ]
    }
  ],
  glossary: [
    { t: `Complement indirect`, d: `Complement condus de o prepoziție sau de un caz diferit de acuzativ.` },
    { t: `Ablativ`, d: `Cazul complementelor circumstanțiale; reunește ablativul, instrumentalul și locativul.` },
    { t: `Locativ`, d: `Cazul locului unde se află cineva, păstrat în Romae, domi, ruri.` },
    { t: `Loc unde se află`, d: `Unde? in + ablativ (orașe: locativ).` },
    { t: `Mișcare spre loc`, d: `Încotro? in/ad + acuzativ (orașe: acuzativ simplu).` },
    { t: `Mișcare dinspre loc`, d: `De unde? ab/ex/de + ablativ (orașe: ablativ simplu).` },
    { t: `Complement de mijloc`, d: `Cu ce? ablativ simplu.` },
    { t: `Complement de tovărășie`, d: `Cu cine? cum + ablativ.` },
    { t: `Complement de agent`, d: `De către cine? a/ab + ablativ, cu verb pasiv.` },
    { t: `Complement de cauză`, d: `De ce? ablativ simplu sau ob/propter + acuzativ.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Cum se spune „la Roma" ca răspuns la „unde?"`, options: [`Romae`, `Roma`, `in Romam`], answer: 0, explain: `Locativul lui Roma.` },
      { type: `mc`, q: `Cum se spune „spre Atena" (Athenae, -arum, plural)?`, options: [`Athenas`, `Athenis`, `ad Athenae`], answer: 0, explain: `Mișcare spre loc cu nume de oraș: acuzativ simplu, Athenas.` },
      { type: `text`, q: `Traduce „cu sabia" (gladius, -i): ablativ de mijloc.`, answer: [`gladio`], explain: `Ablativ singular al lui gladius fără prepoziție.` },
      { type: `mc`, q: `„Tres annos" este…`, options: [`timp determinat`, `timp continuat`, `cauză`], answer: 1, explain: `Acuzativ de timp continuat: timp de trei ani.` },
      { type: `mc`, q: `„Ex agris" este…`, options: [`mișcare dinspre loc`, `loc unde se află`, `agent`], answer: 0, explain: `Ex + ablativ = mișcare dinspre loc (de pe câmpuri).` },
      { type: `mc`, q: `Cum se traduce „Servus a domino vocatur"?`, options: [`Sclavul îl cheamă pe stăpân`, `Sclavul este chemat de stăpân`, `Sclavul cheamă cu stăpânul`], answer: 1, explain: `Vocatur este pasiv; a domino = agent.` },
      { type: `tf`, q: `„In silvam" indică loc unde se află cineva.`, answer: false, explain: `In + acuzativ indică mișcare (înăuntrul pădurii).` },
      { type: `mc`, q: `„Cum cura" este…`, options: [`mod`, `mijloc`, `loc`], answer: 0, explain: `Cum + ablativ abstract: mod.` },
      { type: `text`, q: `Cum se spune „de acasă" (domus)?`, answer: [`domo`], explain: `Ca numele de orașe: ablativ simplu: domo.` },
      { type: `order`, q: `Pune în ordine cele patru întrebări de loc.`, items: [`unde? (stare)`, `încotro? (mișcare spre)`, `de unde? (mișcare dinspre)`, `pe unde? (mișcare prin)`], explain: `Ordinea tradițională: stare, mișcare spre loc, mișcare dinspre loc, mișcare prin loc.` }
    ]
  }
});

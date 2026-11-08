TOPIC('ro', {
  id: `m2-ita-poesia`,
  title: `Poezia și figurile de stil (figure retoriche)`,
  intro: `Poezia este cel mai „concentrat” mod de a folosi cuvintele: spune mult în puțin spațiu, se joacă cu <b>sunetele</b>, <b>ritmul</b> și <b>imaginile</b>. Învățăm să citim o poezie așa cum fac poeții: numărând silabele, ascultând rimele și descoperind <b>figurile de stil</b>, „trucurile” care fac cuvintele de neuitat. (Versurile-exemplu rămân în italiană; explicațiile sunt în română.)`,
  minutes: 50,
  sections: [
    {
      type: `text`,
      title: `Textul poetic: vers, strofă, rimă`,
      html: `<ul>
<li><b>Versul</b> (<i>verso</i>) este rândul poeziei. Se trece la rând nou nu pentru că se termină spațiul, ci prin alegerea poetului.</li>
<li><b>Strofa</b> (<i>strofa</i>) este un grup de versuri separat de celelalte printr-un spațiu alb: <b>distih</b> (2 versuri), <b>terțină</b> (3), <b>catren</b> (4), <b>sextină</b> (6), <b>octavă</b> (8).</li>
<li><b>Rima</b> (<i>rima</i>) este egalitatea sunetelor începând de la vocala accentuată: <i>am<b>ore</b> / cu<b>ore</b></i>, <i>s<b>ole</b> / par<b>ole</b></i>. Principalele scheme (se notează cu litere):
<ul>
<li><b>împerecheată</b> (<i>baciata</i>): AABB</li>
<li><b>alternată</b> (<i>alternata</i>): ABAB</li>
<li><b>îmbrățișată</b> (<i>incrociata</i>): ABBA</li>
<li><b>înlănțuită</b> (<i>incatenata</i>): ABA BCB CDC (cea a lui Dante)</li>
</ul></li>
<li>Dacă nu există rime, se vorbește de <b>versuri albe</b> (<i>versi sciolti</i>); dacă nu există nici măcar o măsură fixă, de <b>versuri libere</b> (<i>versi liberi</i>, foarte folosite în secolul al XX-lea: Ungaretti, Montale).</li>
</ul>`
    },
    {
      type: `text`,
      title: `Numărăm silabele: metrica`,
      html: `<p>Versurile italiene se clasifică după numărul de <b>silabe metrice</b>: <b>settenario</b> (7), <b>ottonario</b> (8), <b>novenario</b> (9), <b>endecasillabo</b> (11, cel mai important vers al poeziei noastre).</p>
<p>Silabele metrice nu sunt întotdeauna egale cu cele gramaticale, din cauza a trei reguli:</p>
<ol>
<li><b>Sinalefa</b> (<i>sinalefe</i>): vocala finală a unui cuvânt și cea inițială a cuvântului următor se contopesc într-o singură silabă: <i>mi / ri / tro / vai / per / u / na / sel / <b>va‿o</b> / scu / ra</i> → «selva oscura» se citește «sel-vao-scu-ra»: 11 silabe metrice în loc de 12 gramaticale.</li>
<li><b>Ultima silabă accentuată</b> contează: se numără până la ultimul accent și se adaugă 1. Dacă versul se termină cu un cuvânt <b>tronc</b> (<i>tronca</i>, <i>città</i>) se adaugă o silabă; dacă se termină cu un cuvânt <b>sdrucciola</b> (accentuat pe a treia silabă de la sfârșit, <i>tavola</i>) se scade una.</li>
<li><b>Diereza</b> (<i>dieresi</i>) și <b>sinereza</b> (<i>sineresi</i>): uneori două vocale alăturate se numără ca două silabe (diereză, notată cu ¨: <i>sopra la rïa</i>) sau ca una (sinereză).</li>
</ol>
<p>Exemplu: <i>Nel / mez / zo / del / cam / min / di / no / stra / vi / ta</i> = <b>11 silabe</b> → endecasillabo.</p>`
    },
    {
      type: `svg`,
      title: `Schema rimelor`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fdf4ff"/>
<text x="20" y="32" font-size="18" font-weight="bold" fill="#701a75">Împerecheată (AABB)</text>
<rect x="20" y="44" width="16" height="16" fill="#ec4899"/><text x="44" y="58" font-size="15" fill="#1f2937">…la sera fresca e piana <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="66" width="16" height="16" fill="#ec4899"/><text x="44" y="80" font-size="15" fill="#1f2937">…suona la campana <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="88" width="16" height="16" fill="#3b82f6"/><text x="44" y="102" font-size="15" fill="#1f2937">…il gatto sul cuscino <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="110" width="16" height="16" fill="#3b82f6"/><text x="44" y="124" font-size="15" fill="#1f2937">…dorme col suo micino <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<text x="320" y="32" font-size="18" font-weight="bold" fill="#701a75">Alternată (ABAB)</text>
<rect x="320" y="44" width="16" height="16" fill="#ec4899"/><text x="344" y="58" font-size="15" fill="#1f2937">…il vento <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="66" width="16" height="16" fill="#3b82f6"/><text x="344" y="80" font-size="15" fill="#1f2937">…le foglie <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="88" width="16" height="16" fill="#ec4899"/><text x="344" y="102" font-size="15" fill="#1f2937">…lento <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="110" width="16" height="16" fill="#3b82f6"/><text x="344" y="124" font-size="15" fill="#1f2937">…raccoglie <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<text x="20" y="175" font-size="18" font-weight="bold" fill="#701a75">Îmbrățișată (ABBA)</text>
<rect x="20" y="187" width="16" height="16" fill="#ec4899"/><text x="44" y="201" font-size="15" fill="#1f2937">…mare <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="20" y="209" width="16" height="16" fill="#3b82f6"/><text x="44" y="223" font-size="15" fill="#1f2937">…stella <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="231" width="16" height="16" fill="#3b82f6"/><text x="44" y="245" font-size="15" fill="#1f2937">…bella <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="20" y="253" width="16" height="16" fill="#ec4899"/><text x="44" y="267" font-size="15" fill="#1f2937">…navigare <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<text x="320" y="175" font-size="18" font-weight="bold" fill="#701a75">Înlănțuită (ABA BCB)</text>
<rect x="320" y="187" width="16" height="16" fill="#ec4899"/><text x="344" y="201" font-size="15" fill="#1f2937">…vita <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="209" width="16" height="16" fill="#3b82f6"/><text x="344" y="223" font-size="15" fill="#1f2937">…oscura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="231" width="16" height="16" fill="#ec4899"/><text x="344" y="245" font-size="15" fill="#1f2937">…smarrita <tspan font-weight="bold" fill="#ec4899">(A)</tspan></text>
<rect x="320" y="253" width="16" height="16" fill="#3b82f6"/><text x="344" y="267" font-size="15" fill="#1f2937">…dura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
<rect x="320" y="275" width="16" height="16" fill="#22c55e"/><text x="344" y="289" font-size="15" fill="#1f2937">…forte <tspan font-weight="bold" fill="#22c55e">(C)</tspan></text>
<rect x="320" y="297" width="16" height="16" fill="#3b82f6"/><text x="344" y="311" font-size="15" fill="#1f2937">…paura <tspan font-weight="bold" fill="#3b82f6">(B)</tspan></text>
</svg>`,
      caption: `Aceeași culoare = aceeași rimă. Rima înlănțuită este cea din Divina Commedia.`
    },
    {
      type: `quiz`,
      title: `Mini-test: versuri și rime`,
      questions: [
        { type: `num`, q: `Câte silabe metrice are un endecasillabo?`, answer: 11, explain: `Din grecescul héndeka = unsprezece.` },
        { type: `mc`, q: `Schema ABAB este o rimă…`, options: [`împerecheată (baciata)`, `alternată (alternata)`, `îmbrățișată (incrociata)`], answer: 1, explain: `Versurile rimează unul da, unul nu: alternată.` },
        { type: `tf`, q: `Prin sinalefă, două vocale din cuvinte alăturate se numără ca o singură silabă.`, answer: true, explain: `De ex. «selva oscura»: «a» din selva și «o» din oscura se contopesc într-o singură silabă metrică.` }
      ]
    },
    {
      type: `text`,
      title: `Figurile de stil care țin de sunet`,
      html: `<ul>
<li><b>Aliterația</b> (<i>allitterazione</i>): repetarea aceluiași sunet la începutul sau în interiorul unor cuvinte apropiate. <i>«<b>F</b>resche le mie parole ne la sera / ti sien come il <b>f</b>ruscìo che <b>f</b>an le <b>f</b>oglie»</i> (D'Annunzio).</li>
<li><b>Onomatopeea</b> (<i>onomatopea</i>): cuvânt care imită un sunet. <i>«<b>Tin tin</b> / di campanelle»</i>; <i>«<b>Don… Don…</b> E mi dicono, Dormi!»</i> (Pascoli, <i>La mia sera</i>).</li>
<li><b>Paronomaza</b> (<i>paronomasia</i>): alăturarea unor cuvinte cu sunet asemănător, dar cu sens diferit. <i>«Chi <b>dice</b> donna dice <b>danno</b>»</i>; <i>«<b>traduttore</b>, <b>traditore</b>»</i> (traducător, trădător).</li>
<li><b>Asonanța</b> (<i>assonanza</i>) și <b>consonanța</b> (<i>consonanza</i>): rime „imperfecte”, cu aceleași vocale (<i>c<b>a</b>s<b>a</b> / l<b>a</b>n<b>a</b></i>) sau aceleași consoane (<i>ca<b>nt</b>o / te<b>nt</b>a</i>).</li>
</ul>`
    },
    {
      type: `text`,
      title: `Figurile de stil care țin de sens`,
      html: `<ul>
<li><b>Comparația</b> (<i>similitudine</i>): paralelă între două elemente cu <b>ca, asemenea, pare, seamănă</b> (în italiană: come, simile a, sembra, pare). <i>«Si sta <b>come</b> / d'autunno / sugli alberi / le foglie»</i> (Ungaretti, <i>Soldati</i>, 1918).</li>
<li><b>Metafora</b> (<i>metafora</i>): o comparație „scurtată”, fără „ca”: se înlocuiește un cuvânt cu altul prin asemănare. <i>«Sei <b>un leone</b>»</i>; <i>«la <b>primavera</b> della vita»</i>; <i>«il mare è <b>una tavola</b>»</i>.</li>
<li><b>Personificarea</b> (<i>personificazione</i>): se atribuie însușiri omenești lucrurilor, animalelor, ideilor. <i>«Il <b>sole</b> ride»</i>; <i>«<b>La nebbia</b> agli irti colli / piovigginando <b>sale</b>»</i> (Carducci).</li>
<li><b>Anafora</b> (<i>anafora</i>): repetarea aceluiași cuvânt la începutul mai multor versuri. <i>«<b>Per me</b> si va ne la città dolente, / <b>per me</b> si va ne l'etterno dolore, / <b>per me</b> si va tra la perduta gente»</i> (Dante, Inferno III).</li>
<li><b>Hiperbola</b> (<i>iperbole</i>): exagerare. <i>«Te l'ho detto <b>mille volte</b>»</i>; <i>«ho una fame <b>da lupi</b>»</i>.</li>
<li><b>Sinestezia</b> (<i>sinestesia</i>): se unesc senzații ale unor simțuri diferite. <i>«<b>urlo nero</b>»</i> (Quasimodo: auz + vedere); <i>«<b>voce calda</b>»</i>.</li>
<li><b>Oximoronul</b> (<i>ossimoro</i>): unirea a două cuvinte cu sens opus. <i>«<b>ghiaccio bollente</b>»</i>, <i>«<b>silenzio assordante</b>»</i>, <i>«<b>dolce</b> <b>amaro</b>»</i>.</li>
<li><b>Metonimia</b> (<i>metonimia</i>): se folosește un cuvânt în locul altuia legat de el (conținătorul pentru conținut, autorul pentru operă): <i>«bere <b>un bicchiere</b>»</i>, <i>«leggere <b>un Montale</b>»</i>.</li>
<li><b>Sinecdoca</b> (<i>sineddoche</i>): partea pentru întreg. <i>«avere un <b>tetto</b>»</i> (= o casă), <i>«cento <b>vele</b>»</i> (= o sută de nave).</li>
</ul>`
    },
    {
      type: `text`,
      title: `Figurile de stil care țin de ordine`,
      html: `<ul>
<li><b>Enumerația</b> (<i>enumerazione</i>): listă de cuvinte. <i>«Le donne, i cavallier, l'arme, gli amori, / le cortesie, l'audaci imprese io canto»</i> (Ariosto, <i>Orlando furioso</i>).</li>
<li><b>Gradația</b> (<i>climax</i>): listă în care intensitatea <b>crește</b> (sau scade, „anticlimax”). <i>«Mi piace, mi entusiasma, mi fa impazzire!»</i></li>
<li><b>Anastrofa</b> (<i>anastrofe</i>): inversarea ordinii normale a cuvintelor. <i>«Sempre caro <b>mi fu</b> quest'ermo colle»</i> (Leopardi, <i>L'infinito</i>) în loc de «quest'ermo colle mi fu sempre caro».</li>
<li><b>Chiasmul</b> (<i>chiasmo</i>): încrucișarea elementelor după schema AB-BA. <i>«Bisogna <b>mangiare</b> per <b>vivere</b>, non <b>vivere</b> per <b>mangiare</b>»</i>. La Ariosto: <i>«Le <b>donne</b>, i <b>cavallier</b>, l'<b>arme</b>, gli <b>amori</b>»</i> → donne (A) și amori (A) se leagă între ele, ca și cavallieri (B) și armi (B).</li>
<li><b>Enjambementul</b> (<i>enjambement</i>; în franceză „a călări peste”): fraza nu se termină odată cu versul și „trece” în versul următor. <i>«e il naufragar m'è dolce / in questo mare»</i>.</li>
</ul>`
    },
    {
      type: `example`,
      title: `Exemplu practic: analizăm «Soldati» de Ungaretti`,
      html: `<p><i>Bosco di Courton luglio 1918</i></p>
<p style="font-size:1.2em"><i>Si sta come<br>d'autunno<br>sugli alberi<br>le foglie</i></p>
<ul>
<li><b>Context</b>: Giuseppe Ungaretti a luptat în Primul Război Mondial; data și locul (o pădure din Franța) spun unde se naște poezia.</li>
<li><b>Formă</b>: patru versuri foarte scurte, libere, fără rimă și fără punctuație. Fiecare cuvânt cântărește.</li>
<li><b>Figură de stil</b>: o <b>comparație</b> (introdusă de «come»): soldații sunt ca frunzele toamna, care pot cădea dintr-o clipă în alta.</li>
<li><b>Sens</b>: <b>fragilitatea</b> și precaritatea vieții în război. Titlul «Soldati» este necesar pentru a înțelege comparația.</li>
</ul>
<p>(Traducere aproximativă: „Ne aflăm precum toamna pe copaci frunzele”.)</p>`
    },
    {
      type: `example`,
      title: `Exemplu practic: parafraza și comentariul`,
      html: `<p>Să luăm începutul poeziei <i>L'infinito</i> de Giacomo Leopardi (1819):</p>
<p><i>Sempre caro mi fu quest'ermo colle,<br>e questa siepe, che da tanta parte<br>dell'ultimo orizzonte il guardo esclude.</i></p>
<ol>
<li><b>Parafraza</b> (rescrierea în proză, cu cuvinte de azi, în ordine normală): <i>Acest deal singuratic mi-a fost mereu drag, și la fel acest gard viu, care împiedică privirea să vadă o mare parte din orizontul cel mai îndepărtat.</i></li>
<li><b>Figuri</b>: <b>anastrofă</b> («sempre caro mi fu»), <b>enjambement</b> («tanta parte / dell'ultimo orizzonte»), cuvinte literare («ermo» = singuratic, «guardo» = privire).</li>
<li><b>Comentariu</b>: gardul viu care <b>ascunde</b> priveliștea împinge imaginația să-și închipuie spații infinite. Paradox: tocmai limita te face să te gândești la infinit.</li>
</ol>`
    },
    {
      type: `widget`,
      title: `Recunoaște figura de stil`,
      widget: `classify`,
      options: {
        groups: [`🪞 Comparație (similitudine)`, `🎭 Metaforă (metafora)`, `🙋 Personificare (personificazione)`, `🔁 Anaforă (anafora)`, `🎈 Hiperbolă (iperbole)`],
        items: [
          [`Forte come un toro`, 0], [`Bianca come la neve`, 0],
          [`Sei un vulcano di idee`, 1], [`Quel ragazzo è una volpe`, 1],
          [`Il vento sussurra tra i rami`, 2], [`La città dorme`, 2],
          [`Ti amo per… ti amo per… ti amo per…`, 3], [`Ogni giorno… ogni sera… ogni notte…`, 3],
          [`Ho aspettato un secolo`, 4], [`Ti ho chiamato un milione di volte`, 4]
        ]
      },
      caption: `Atinge un exemplu și apoi figura de stil potrivită.`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Cea mai scurtă poezie`,
      html: `<p>Una dintre cele mai celebre (și mai scurte) poezii din literatura italiană este <b>«Mattina»</b> de Giuseppe Ungaretti (1917): <i>«M'illumino / d'immenso»</i> („Mă luminez de imens”). Doar <b>două versuri și trei cuvinte</b>! În Japonia există o formă poetică foarte scurtă, <b>haiku</b>: trei versuri de 5, 7 și 5 silabe, care de obicei vorbesc despre natură și anotimpuri.</p>`
    },
    {
      type: `curiosity`,
      title: `Știai că…? Figurile de stil în publicitate`,
      html: `<p>Figurile de stil nu se află doar în cărți: <b>publicitatea</b>, sloganurile și cântecele sunt pline de ele! Aliterațiile și rimele ajută la reținerea unei mărci, hiperbolele fac un produs să pară extraordinar, metaforele creează imagini puternice. Și în expresiile curente folosim figuri de stil în fiecare zi: «sei la luce dei miei occhi» (metaforă; „ești lumina ochilor mei”), «piove a catinelle» (hiperbolă; plouă cu găleata), «bere un bicchiere» (metonimie; „a bea un pahar”).</p>`
    },
    {
      type: `alternatives`,
      title: `Alte moduri de a înțelege poezia`,
      intro: `Poezia se înțelege cu urechile, cu ochii și cu corpul. Încearcă aceste căi.`,
      tabs: [
        {
          label: `🎧 Ca un cântec`,
          html: `<p>Cântecele sunt poezii cu muzică! Au <b>strofe</b> și <b>refren</b> (care este o <b>anaforă</b> uriașă), <b>rime</b> și <b>ritm</b>. Ia textul cântecului tău preferat și încearcă să găsești: câte strofe sunt? Care cuvinte rimează? Există o metaforă sau o hiperbolă? Mai ales <b>rap-ul</b> este plin de rime interioare, aliterații și jocuri de cuvinte: rapperii sunt maeștri ai figurilor de stil!</p>`
        },
        {
          label: `🥁 Bate ritmul`,
          html: `<p>Versul are un <b>ritm</b> dat de <b>accente</b>, ca o tobă. Citește cu voce tare, lovind cu mâna în bancă la silabele accentuate:</p>
<p><i>nel mez-<b>ZO</b> del cam-<b>MIN</b> di <b>NO</b>-stra <b>VI</b>-ta</i></p>
<p>Accentele cad pe silaba a 2-a, a 6-a, a 8-a și a 10-a. În endecasillabo există <b>întotdeauna un accent pe silaba a 10-a</b>; celelalte se schimbă și dau versului „muzica” lui. Împarte versul în bătăi și numără-le pe degete!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#eff6ff"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="10" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="34" y="92" fill="#1e3a8a">nel</text>
<rect x="62" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="86" y="92" fill="#fff">mez</text>
<rect x="114" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="138" y="92" fill="#1e3a8a">zo</text>
<rect x="166" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="190" y="92" fill="#1e3a8a">del</text>
<rect x="218" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="242" y="92" fill="#1e3a8a">cam</text>
<rect x="270" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="294" y="92" fill="#fff">min</text>
<rect x="322" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="346" y="92" fill="#1e3a8a">di</text>
<rect x="374" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="398" y="92" fill="#fff">no</text>
<rect x="426" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="450" y="92" fill="#1e3a8a">stra</text>
<rect x="478" y="60" width="48" height="50" rx="8" fill="#2563eb"/><text x="502" y="92" fill="#fff">vi</text>
<rect x="530" y="60" width="48" height="50" rx="8" fill="#bfdbfe"/><text x="554" y="92" fill="#1e3a8a">ta</text>
</g>
<g font-size="14" text-anchor="middle" fill="#334155">
<text x="34" y="135">1</text><text x="86" y="135">2</text><text x="138" y="135">3</text><text x="190" y="135">4</text><text x="242" y="135">5</text><text x="294" y="135">6</text><text x="346" y="135">7</text><text x="398" y="135">8</text><text x="450" y="135">9</text><text x="502" y="135">10</text><text x="554" y="135">11</text>
</g>
<text x="300" y="40" font-size="17" text-anchor="middle" fill="#1e3a8a" font-weight="bold">🥁 = silabă accentuată (albastru)</text>
<text x="300" y="175" font-size="15" text-anchor="middle" fill="#334155">11 silabe, accent fix pe a 10-a: endecasillabo</text>
</svg>`
        },
        {
          label: `🖼️ Desenează metafora`,
          html: `<p>O metaforă este o <b>imagine</b>. Încearcă să o desenezi la propriu: «quel ragazzo è un <b>leone</b>» („băiatul acela este un leu”) → desenează un băiat cu coamă! Apoi întreabă-te: <i>ce au în comun</i> băiatul și leul? <b>Curajul</b>, forța. Acea calitate comună este „puntea” metaforei. În comparație puntea este declarată (<i>curajos <b>ca</b> un leu</i>); în metaforă trebuie să o găsești tu.</p>`
        },
        {
          label: `🇯🇵 Haiku-ul japonez`,
          html: `<p>În Japonia, copiii învață poezia cu <b>haiku</b>: <b>3 versuri</b> de <b>5 – 7 – 5 silabe</b>, o imagine din natură și un cuvânt care indică anotimpul. Cel mai celebru este al lui <b>Matsuo Bashō</b> (1686):</p>
<p><i>Vechiul iaz — / o broască sare în el: / sunetul apei.</i></p>
<p>Încearcă să scrii și tu unul: numără silabele pe degete! Este un foarte bun antrenament pentru metrică.</p>`
        },
        {
          label: `🃏 Flashcarduri cu figurile`,
          html: `<p>Întoarce cărțile și repetă.</p>`,
          widget: `flashcards`,
          options: {
            cards: [
              { front: `Similitudine (comparație)`, back: `Paralelă cu «come» (ca): veloce come il vento` },
              { front: `Metafora`, back: `Paralelă fără «come»: sei un fulmine` },
              { front: `Anafora`, back: `Același cuvânt la începutul mai multor versuri` },
              { front: `Allitterazione (aliterație)`, back: `Repetarea de sunete: il fruscìo che fan le foglie` },
              { front: `Onomatopea`, back: `Cuvânt care imită un sunet: tic tac, din don` },
              { front: `Ossimoro (oximoron)`, back: `Contrarii unite: ghiaccio bollente` },
              { front: `Sinestesia (sinestezie)`, back: `Simțuri diferite unite: urlo nero` },
              { front: `Enjambement`, back: `Fraza continuă în versul următor` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Harta poeziei`,
      nodes: [
        { id: `poesia`, label: `Text poetic`, x: 50, y: 6, color: `#86198f`, html: `Text în versuri care folosește sunetul, ritmul și imaginile.`, why: `Cuvântul vine din grecescul <i>poiéin</i>, „a face, a crea”. La origine, poezia era <b>cântată</b>: rima și ritmul ajutau la memorarea textelor când scrisul era rar (ca Iliada și Odiseea).` },
        { id: `metrica`, label: `Metrică`, x: 20, y: 28, color: `#2563eb`, html: `Numărarea silabelor și a accentelor.`, why: `Metrica latină se baza pe durata silabelor (lungi și scurte). Când în limba vulgară s-a pierdut diferența de durată, s-a trecut la numărarea <b>silabelor</b> și a <b>accentelor</b>: așa se naște endecasillabo.` },
        { id: `endec`, label: `Endecasillabo`, x: 12, y: 54, color: `#0ea5e9`, html: `Versul de 11 silabe, regele poeziei italiene.`, why: `Provine din versuri provensale și latine medievale; a fost făcut perfect de Dante și Petrarca. Este destul de lung pentru o frază completă și destul de variat în accente încât să nu plictisească.` },
        { id: `rima`, label: `Rimă`, x: 38, y: 44, color: `#ec4899`, html: `Egalitatea sunetului începând de la vocala accentuată.`, why: `În poezia latină clasică rima aproape că nu exista; s-a răspândit în <b>imnurile religioase medievale</b> și în poezia trubadurilor provensali, de unde a trecut la Școala siciliană.` },
        { id: `figure`, label: `Figuri de stil`, x: 70, y: 28, color: `#16a34a`, html: `Folosiri speciale ale limbii pentru a da forță textului.`, why: `Au fost clasificate de maeștrii de <b>retorică</b> greci și romani — arta de a vorbi în public — precum <b>Aristotel</b> și <b>Quintilian</b> (<i>Institutio oratoria</i>, secolul I d.Hr.). Denumirile grecești (metaforă, anaforă, hiperbolă) vin de acolo.` },
        { id: `suono`, label: `De sunet`, x: 62, y: 56, color: `#f97316`, html: `Aliterație, onomatopee, paronomază.`, why: `Creierul nostru este sensibil la sunetele repetate: de aceea numărătorile și sloganurile se țin ușor minte. Pascoli și D'Annunzio, la sfârșitul secolului al XIX-lea, le-au folosit într-un mod foarte rafinat.` },
        { id: `signif`, label: `De sens`, x: 88, y: 52, color: `#dc2626`, html: `Comparație, metaforă, personificare, hiperbolă, oximoron…`, why: `<i>Metafora</i> în greacă înseamnă „transport”: se „transportă” sensul de la un lucru la altul. Lingviștii Lakoff și Johnson (1980) au arătat că și în vorbirea de zi cu zi gândim prin metafore („timpul înseamnă bani”).` },
        { id: `ordine`, label: `De ordine`, x: 74, y: 82, color: `#ca8a04`, html: `Anaforă, anastrofă, chiasm, gradație, enjambement.`, why: `Schimbând ordinea normală a cuvintelor se pune în evidență un element. Latina avea o ordine liberă, iar poeții italieni au moștenit gustul pentru inversiuni.` },
        { id: `versolib`, label: `Vers liber`, x: 30, y: 82, color: `#64748b`, html: `Versuri fără măsură fixă și fără rimă obligatorie.`, why: `S-a născut în secolul al XIX-lea în Franța și în America (Walt Whitman) și s-a răspândit în secolul al XX-lea: poeți ca Ungaretti voiau să elibereze cuvântul de reguli pentru a-l face să exprime esențialul.` }
      ],
      edges: [
        [`poesia`, `metrica`, `are o`],
        [`metrica`, `endec`, `vers principal`],
        [`poesia`, `rima`, `folosește adesea`],
        [`poesia`, `figure`, `folosește`],
        [`figure`, `suono`, ``],
        [`figure`, `signif`, ``],
        [`figure`, `ordine`, ``],
        [`metrica`, `versolib`, `se eliberează în`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-test: figuri de stil`,
      questions: [
        { type: `mc`, q: `«Il mare è una tavola blu» conține…`, options: [`o comparație (similitudine)`, `o metaforă`, `o onomatopee`], answer: 1, explain: `Paralela este fără «come» (ca): metaforă.` },
        { type: `mc`, q: `«Silenzio assordante» este un…`, options: [`oximoron (ossimoro)`, `gradație (climax)`, `chiasm (chiasmo)`], answer: 0, explain: `Unește două noțiuni opuse: oximoron.` },
        { type: `mc`, q: `«Per me si va… / per me si va… / per me si va…» este un exemplu de…`, options: [`anaforă`, `hiperbolă`, `sinestezie`], answer: 0, explain: `Repetare la începutul versurilor: anaforă.` }
      ]
    },
    {
      type: `remember`,
      title: `De ținut minte`,
      html: `<ul>
<li><b>Vers</b>, <b>strofă</b>, <b>rimă</b> (împerecheată AABB, alternată ABAB, îmbrățișată ABBA, înlănțuită ABA BCB).</li>
<li>Silabe metrice: <b>sinalefă</b>, ultimul accent + 1; endecasillabo = 11.</li>
<li>Figuri de <b>sunet</b>: aliterație, onomatopee, paronomază.</li>
<li>Figuri de <b>sens</b>: comparație (cu «come»), metaforă (fără), personificare, hiperbolă, oximoron, sinestezie, metonimie.</li>
<li>Figuri de <b>ordine</b>: anaforă, anastrofă, gradație, chiasm, enjambement.</li>
</ul>`
    }
  ],
  glossary: [
    { t: `Verso (vers)`, d: `Fiecare rând al unei poezii.` },
    { t: `Strofa (strofă)`, d: `Grup de versuri separat de celelalte printr-un spațiu.` },
    { t: `Rima (rimă)`, d: `Egalitatea sunetelor din partea finală a două cuvinte, începând de la vocala accentuată.` },
    { t: `Endecasillabo`, d: `Vers de 11 silabe metrice, cu accent pe a 10-a.` },
    { t: `Sinalefe (sinalefă)`, d: `Contopirea într-o singură silabă a vocalei finale a unui cuvânt cu cea inițială a următorului.` },
    { t: `Similitudine (comparație)`, d: `Paralelă între două elemente introdusă prin «come» (ca) sau echivalente.` },
    { t: `Metafora (metaforă)`, d: `Înlocuirea unui cuvânt cu altul prin asemănare, fără «come».` },
    { t: `Anafora (anaforă)`, d: `Repetarea unui cuvânt la începutul unor versuri sau fraze succesive.` },
    { t: `Ossimoro (oximoron)`, d: `Alăturarea a două cuvinte cu sens opus.` },
    { t: `Enjambement`, d: `Când fraza continuă dincolo de sfârșitul versului.` },
    { t: `Parafrasi (parafrază)`, d: `Rescrierea în proză și cu cuvinte simple a conținutului unei poezii.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `«Veloce come il vento» este…`, options: [`o metaforă`, `o comparație (similitudine)`, `o anaforă`], answer: 1, explain: `Există «come» (ca): comparație.` },
      { type: `mc`, q: `Schema ABBA este o rimă…`, options: [`îmbrățișată (incrociata)`, `alternată (alternata)`, `împerecheată (baciata)`], answer: 0, explain: `Primul vers rimează cu al patrulea, al doilea cu al treilea.` },
      { type: `num`, q: `Câte versuri are un sonet?`, answer: 14, explain: `Două catrene și două terține: 4+4+3+3 = 14.` },
      { type: `tf`, q: `În onomatopee un cuvânt imită un sunet.`, answer: true, explain: `De ex. «tic tac», «bau», «din don».` },
      { type: `mc`, q: `«Il sole sorride ai bambini» conține…`, options: [`o personificare`, `un oximoron`, `o sinestezie`], answer: 0, explain: `Soarele face o acțiune omenească: personificare.` },
      { type: `text`, q: `Cum se numește figura în care se unesc două simțuri diferite, ca în «voce calda»?`, answer: [`sinestesia`, `la sinestesia`, `sinestezie`, `sinestezia`], explain: `Auz (voce) + simțul tactil (calda): sinestezie.` },
      { type: `mc`, q: `Ce este enjambement-ul?`, options: [`O rimă între cuvinte tronc`, `Fraza care continuă în versul următor`, `Repetarea unui sunet`], answer: 1, explain: `Fraza „trece peste” sfârșitul versului.` },
      { type: `mc`, q: `«Te l'ho detto mille volte» este…`, options: [`o hiperbolă`, `un chiasm`, `o metonimie`], answer: 0, explain: `Este o exagerare: hiperbolă.` },
      { type: `tf`, q: `Versurile libere trebuie să rimeze întotdeauna.`, answer: false, explain: `Versurile libere nu au nici măsură fixă, nici rimă obligatorie.` },
      { type: `mc`, q: `Cine a scris «Soldati» («Si sta come d'autunno…»)?`, options: [`Leopardi`, `Ungaretti`, `Pascoli`], answer: 1, explain: `Giuseppe Ungaretti, în 1918.` },
      { type: `mc`, q: `«Bere un bicchiere» este un exemplu de…`, options: [`metonimie`, `anaforă`, `onomatopee`], answer: 0, explain: `Recipientul (paharul) în locul conținutului: metonimie.` },
      { type: `order`, q: `Ordonează versurile de la cel mai scurt la cel mai lung.`, items: [`Settenario`, `Ottonario`, `Novenario`, `Endecasillabo`], explain: `7, 8, 9, 11 silabe.` }
    ]
  }
});

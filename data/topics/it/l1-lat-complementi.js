TOPIC('it', {
  id: `l1-lat-complementi`,
  title: `I principali complementi`,
  intro: `Una frase non vive solo di soggetto, verbo e oggetto: ci dicono <b>dove</b>, <b>quando</b>, <b>con che cosa</b>, <b>come</b>, <b>perché</b>, <b>con chi</b>, <b>da chi</b>. Sono i <b>complementi indiretti</b>, e il latino li esprime con la combinazione di <b>caso</b> e <b>preposizione</b> (o con il solo caso, soprattutto l'<b>ablativo</b>, che è il "caso-jolly"). In questa lezione impari i complementi più frequenti: <b>luogo</b> (con la regola speciale per i nomi di città), <b>tempo</b>, <b>mezzo</b>, <b>modo</b>, <b>causa</b>, <b>compagnia</b>, <b>agente</b> e altri sei che ti serviranno ogni giorno nelle versioni. 🗺️⏳⚔️`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Il quadro dei complementi`,
      html: `<p>In italiano usiamo molte preposizioni (di, a, da, in, con, per, su, tra) per distinguere i complementi. In latino le preposizioni sono meno, e molti complementi sono espressi dal caso da solo. Il caso principale per i complementi è l'<b>ablativo</b>, che ha ereditato tre funzioni indoeuropee diverse (<i>ablativo vero e proprio</i>, che indica allontanamento; <i>strumentale</i>, che indica mezzo e compagnia; <i>locativo</i>, che indica luogo e tempo).</p>
<table>
<tr><th>Complemento</th><th>Domanda</th><th>Costrutto latino</th><th>Esempio</th></tr>
<tr><td>Specificazione</td><td>di chi?</td><td>genitivo</td><td><i>casa agricolae</i></td></tr>
<tr><td>Termine</td><td>a chi?</td><td>dativo</td><td><i>puellae rosam dat</i></td></tr>
<tr><td>Agente / causa efficiente</td><td>da chi?</td><td><b>a, ab + ablativo</b></td><td><i>a magistro laudatur</i></td></tr>
<tr><td>Mezzo</td><td>con che cosa?</td><td><b>ablativo semplice</b></td><td><i>gladio pugnat</i></td></tr>
<tr><td>Compagnia</td><td>con chi?</td><td><b>cum + ablativo</b></td><td><i>cum amicis ambulat</i></td></tr>
<tr><td>Modo</td><td>come?</td><td><b>cum + ablativo</b> (o ablativo + aggettivo)</td><td><i>cum cura laborat</i></td></tr>
<tr><td>Causa</td><td>perché?</td><td>ablativo semplice, <b>ob/propter + accusativo</b>, <b>ex + ablativo</b></td><td><i>timore fugit</i></td></tr>
<tr><td>Luogo</td><td>dove? verso dove? da dove? per dove?</td><td>preposizioni + caso (vedi sotto)</td><td><i>in horto</i></td></tr>
<tr><td>Tempo</td><td>quando? per quanto tempo?</td><td>ablativo (determinato), accusativo (continuato)</td><td><i>hora quinta</i></td></tr>
<tr><td>Argomento</td><td>su che cosa?</td><td><b>de + ablativo</b></td><td><i>de bello narrat</i></td></tr>
<tr><td>Materia</td><td>di che cosa è fatto?</td><td><b>ex + ablativo</b></td><td><i>ex auro</i></td></tr>
<tr><td>Origine</td><td>da dove proviene?</td><td><b>ex/de + ablativo</b></td><td><i>ex Italia</i></td></tr>
</table>`
    },
    {
      type: `svg`, title: `L'ablativo e le sue tre anime`,
      caption: `L'ablativo latino unisce tre casi indoeuropei: per questo svolge tante funzioni diverse.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#164e63" text-anchor="middle">UN CASO, TANTE FUNZIONI</text>
<rect x="215" y="46" width="170" height="52" rx="12" fill="#06b6d4" stroke="#0e7490" stroke-width="3"/>
<text x="300" y="80" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">ABLATIVO</text>
<line x1="250" y1="98" x2="110" y2="150" stroke="#0e7490" stroke-width="3"/>
<line x1="300" y1="98" x2="300" y2="150" stroke="#0e7490" stroke-width="3"/>
<line x1="350" y1="98" x2="490" y2="150" stroke="#0e7490" stroke-width="3"/>
<rect x="20" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="110" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">SEPARAZIONE</text>
<text x="110" y="200" font-size="14" fill="#334155" text-anchor="middle">da chi? da dove?</text>
<text x="110" y="222" font-size="14" fill="#334155" text-anchor="middle">agente, origine,</text>
<text x="110" y="242" font-size="14" fill="#334155" text-anchor="middle">moto da luogo</text>
<rect x="210" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="300" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">STRUMENTO</text>
<text x="300" y="200" font-size="14" fill="#334155" text-anchor="middle">con che cosa? con chi?</text>
<text x="300" y="222" font-size="14" fill="#334155" text-anchor="middle">mezzo, compagnia,</text>
<text x="300" y="242" font-size="14" fill="#334155" text-anchor="middle">modo, causa</text>
<rect x="400" y="150" width="180" height="110" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
<text x="490" y="176" font-size="16" font-weight="bold" fill="#164e63" text-anchor="middle">LUOGO E TEMPO</text>
<text x="490" y="200" font-size="14" fill="#334155" text-anchor="middle">dove? quando?</text>
<text x="490" y="222" font-size="14" fill="#334155" text-anchor="middle">stato in luogo,</text>
<text x="490" y="242" font-size="14" fill="#334155" text-anchor="middle">tempo determinato</text>
<text x="300" y="285" font-size="14" fill="#164e63" text-anchor="middle">ablativo propriamente detto + strumentale + locativo</text>
</svg>`
    },
    {
      type: `text`, title: `2. I complementi di luogo`,
      html: `<p>Per i luoghi bisogna distinguere <b>quattro situazioni</b> e due categorie di nomi: <b>nomi comuni</b> (<i>silva, urbs, agri</i>) e <b>nomi propri di città e piccole isole</b> (<i>Roma, Athenae, Capua, Delos</i>), che hanno costrutti propri.</p>
<table>
<tr><th>Complemento</th><th>Nomi comuni</th><th>Nomi di città e piccole isole</th></tr>
<tr><td><b>Stato in luogo</b> (dove sono?)</td><td><b>in + ablativo</b><br><i>in silva</i> (nel bosco), <i>in agris</i> (nei campi)</td><td><b>locativo</b>: 1ª e 2ª decl. singolare: <b>-ae</b>, <b>-i</b><br><i>Romae</i> (a Roma), <i>Capuae</i>, <i>Corinthi</i>; plurale: ablativo <i>Athenis</i> (ad Atene), <i>Pompeiis</i></td></tr>
<tr><td><b>Moto a luogo</b> (dove vado?)</td><td><b>in / ad + accusativo</b><br><i>in silvam</i> (nel bosco), <i>ad portam</i> (alla porta)</td><td><b>accusativo senza preposizione</b><br><i>Romam</i> (a Roma), <i>Athenas</i></td></tr>
<tr><td><b>Moto da luogo</b> (da dove vengo?)</td><td><b>ab, ex, de + ablativo</b><br><i>ex silva</i> (dal bosco), <i>ab urbe</i></td><td><b>ablativo senza preposizione</b><br><i>Roma</i> (da Roma), <i>Athenis</i></td></tr>
<tr><td><b>Moto per luogo</b> (per dove passo?)</td><td><b>per + accusativo</b><br><i>per silvam</i> (attraverso il bosco), <i>per agros</i></td><td><b>per + accusativo</b><br><i>per Italiam</i></td></tr>
</table>
<p>Alcuni nomi comuni si comportano come i nomi di città: <b>domus</b> (casa: <i>domi</i> "a casa", <i>domum</i> "verso casa", <i>domo</i> "da casa"), <b>rus</b> (campagna: <i>ruri</i>, <i>rus</i>, <i>rure</i>), <b>humi</b> (per terra). Ricorda la differenza tra <b>in + ablativo</b> (stato) e <b>in + accusativo</b> (moto): <i>in agro</i> "nel campo (stato)", ma <i>in agrum</i> "dentro il campo (moto)". Significa che la <b>stessa</b> preposizione ha due valori a seconda del caso!</p>
<p>Le <b>preposizioni</b> più usate: con l'<b>accusativo</b>: <i>ad, apud, ante, post, per, inter, ob, propter, contra, trans, circum, extra, intra, in</i> (moto); con l'<b>ablativo</b>: <i>a/ab, e/ex, de, cum, sine, pro, prae, in</i> (stato), <i>sub</i>.</p>`
    },
    {
      type: `example`, title: `Luoghi in azione`,
      html: `<ul>
<li><i>Marcus Romae habitat.</i> ➜ "Marco abita a Roma." (locativo)</li>
<li><i>Marcus Romam venit.</i> ➜ "Marco va (viene) a Roma." (accusativo semplice: venio = vengo)</li>
<li><i>Marcus Roma venit.</i> ➜ "Marco viene da Roma." (ablativo semplice)</li>
<li><i>Marcus in horto laborat.</i> ➜ "Marco lavora nell'orto." (in + abl.)</li>
<li><i>Pueri in hortum currunt.</i> ➜ "I ragazzi corrono nell'orto." (in + acc.: moto)</li>
<li><i>Poeta ex Italia venit.</i> ➜ "Il poeta viene dall'Italia." (Italia non è città: ex + abl.)</li>
</ul>
<p>Nota: <i>Athenas navigant</i> "navigano verso Atene" (acc. plur.), <i>Athenis navigant</i> "navigano da Atene" (abl. plur.) ma anche <i>Athenis habitant</i> "abitano ad Atene" (plurale: lo stato in luogo è l'ablativo).</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: complementi di luogo`,
      questions: [
        { type: `mc`, q: `Come si dice "a Roma" (stato in luogo)?`, options: [`in Roma`, `Romae`, `Romam`], answer: 1, explain: `Nomi di città di 1ª e 2ª decl. singolare: locativo in -ae / -i: Romae.` },
        { type: `mc`, q: `"Ad Italiam" vs "in Italiam": quale complemento esprimono?`, options: [`moto a luogo`, `stato in luogo`, `moto da luogo`], answer: 0, explain: `Con l'accusativo la preposizione esprime movimento verso: ad/in + acc.` },
        { type: `text`, q: `Come si dice "da Roma" (moto da luogo, senza preposizione)?`, answer: [`roma`], explain: `Ablativo semplice per i nomi di città: Roma (a lunga).` },
        { type: `tf`, q: `"In silva" significa "verso il bosco".`, answer: false, explain: `In + ablativo = stato in luogo (nel bosco); verso il bosco è in silvam.` }
      ]
    },
    {
      type: `text`, title: `3. Il complemento di tempo`,
      html: `<table>
<tr><th>Tipo</th><th>Domanda</th><th>Costrutto</th><th>Esempio</th></tr>
<tr><td><b>Tempo determinato</b></td><td>quando?</td><td><b>ablativo semplice</b> (o in + ablativo con alcuni nomi)</td><td><i>hora quinta</i> alle cinque; <i>anno</i> nell'anno; <i>bello</i> in guerra, durante la guerra; <i>primo mense</i> nel primo mese</td></tr>
<tr><td><b>Tempo continuato</b></td><td>per quanto tempo?</td><td><b>accusativo semplice</b> (o per + accusativo)</td><td><i>tres annos</i> per tre anni; <i>multos dies</i> per molti giorni; <i>totam noctem</i> per tutta la notte</td></tr>
<tr><td><b>Tempo "prima/dopo"</b></td><td>quanto tempo fa/dopo?</td><td><b>ante / post + accusativo</b></td><td><i>ante bellum</i> prima della guerra; <i>post tres annos</i> dopo tre anni</td></tr>
</table>
<p>Per distinguere: <b>quando?</b> (momento preciso) ➜ ablativo; <b>per quanto?</b> (durata) ➜ accusativo. Un trucco dall'italiano: "alle tre" ➜ ablativo; "per tre ore" ➜ accusativo.</p>`
    },
    {
      type: `text`, title: `4. Mezzo, modo, causa, compagnia, agente`,
      html: `<p>Questi cinque complementi sono tutti espressi dall'<b>ablativo</b> (con o senza preposizione) e vanno distinti con cura:</p>
<ul>
<li><b>Mezzo</b> (<i>con che cosa?</i>): ablativo <b>senza preposizione</b>, di cosa. <i>Milites hostes gladiis vincunt</i> "I soldati vincono i nemici con le spade".</li>
<li><b>Compagnia</b> (<i>con chi?</i>): <b>cum + ablativo</b>, di persone. <i>Pueri cum magistro in silva ambulant</i> "I ragazzi passeggiano nel bosco con il maestro". Con i pronomi personali la preposizione si mette in <b>fondo</b>: <i>mecum, tecum, secum, nobiscum, vobiscum</i> ("con me, con te, con sé, con noi, con voi").</li>
<li><b>Modo</b> (<i>come?</i>): <b>cum + ablativo</b> con nome astratto (<i>cum cura</i>, "con cura"); se c'è un aggettivo, <i>cum</i> può mancare o essere in mezzo: <i>magna cum cura</i> o <i>magna cura</i> "con grande cura"; <i>more maiorum</i> "secondo l'uso degli avi".</li>
<li><b>Causa</b> (<i>perché?</i>): ablativo semplice per causa interna o sentimenti (<i>timore</i>, "per la paura"; <i>amore</i>, "per amore"), <b>ob / propter + accusativo</b> per causa esterna (<i>propter bellum</i>, "a causa della guerra"), <b>ex + ablativo</b> per causa derivante (<i>ex vulnere mortuus est</i>, "morì per la ferita").</li>
<li><b>Agente</b> (<i>da chi?</i>): <b>a/ab + ablativo</b> con un <b>verbo passivo</b> e un nome di <b>persona</b>. <i>Puer a magistro laudatur</i> "Il ragazzo è lodato dal maestro". Se è un nome di cosa, si usa l'ablativo semplice (causa efficiente): <i>Milites telis vulnerantur</i> "I soldati sono feriti dai dardi".</li>
</ul>
<p>Regola pratica: <b>persona + passivo ➜ a/ab</b> (agente); <b>persona + attivo ➜ cum</b> (compagnia); <b>cosa ➜ ablativo semplice</b> (mezzo o causa efficiente).</p>`
    },
    {
      type: `remember`, title: `Tabella di decisione: "con" in latino`,
      html: `<table>
<tr><th>Italiano "con…"</th><th>Latino</th></tr>
<tr><td>con una persona (compagnia)</td><td><b>cum + abl.</b> (<i>cum amico</i>)</td></tr>
<tr><td>con uno strumento (mezzo)</td><td><b>abl. semplice</b> (<i>gladio</i>)</td></tr>
<tr><td>con un atteggiamento (modo)</td><td><b>cum + abl.</b> o abl. + agg. (<i>cum cura</i>, <i>magna cura</i>)</td></tr>
<tr><td>"da" una persona nel passivo (agente)</td><td><b>a/ab + abl.</b> (<i>a magistro</i>)</td></tr>
</table>`
    },
    {
      type: `widget`, title: `Gioco: che complemento è?`,
      widget: `match`,
      options: {
        pairs: [
          [`gladio pugnat`, `mezzo`],
          [`cum amicis ambulat`, `compagnia`],
          [`a magistro laudatur`, `agente`],
          [`magna cum cura laborat`, `modo`],
          [`propter bellum`, `causa (esterna)`],
          [`de bello narrat`, `argomento`],
          [`hora quinta`, `tempo determinato`],
          [`tres annos`, `tempo continuato`]
        ]
      },
      caption: `Abbina l'espressione latina al complemento.`
    },
    {
      type: `svg`, title: `Luogo: le quattro domande`,
      caption: `I quattro complementi di luogo: stato, moto a luogo, moto da luogo, moto per luogo.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f7fee7"/>
<text x="300" y="28" font-size="20" font-weight="bold" fill="#365314" text-anchor="middle">I COMPLEMENTI DI LUOGO</text>
<rect x="20" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="85" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<circle cx="85" cy="120" r="12" fill="#dc2626"/>
<text x="85" y="150" font-size="14" fill="#713f12" text-anchor="middle">STATO (dove?)</text>
<text x="85" y="168" font-size="14" fill="#713f12" text-anchor="middle">in + abl. / Romae</text>
<rect x="190" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="255" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<line x1="170" y1="130" x2="235" y2="130" stroke="#16a34a" stroke-width="5"/>
<polygon points="235,120 255,130 235,140" fill="#16a34a"/>
<text x="255" y="150" font-size="14" fill="#713f12" text-anchor="middle">MOTO A (verso)</text>
<text x="255" y="168" font-size="14" fill="#713f12" text-anchor="middle">ad/in + acc. / Romam</text>
<rect x="360" y="45" width="130" height="130" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<text x="425" y="75" font-size="18" font-weight="bold" fill="#713f12" text-anchor="middle">URBS</text>
<line x1="430" y1="130" x2="500" y2="130" stroke="#2563eb" stroke-width="5"/>
<polygon points="500,120 520,130 500,140" fill="#2563eb"/>
<text x="425" y="150" font-size="14" fill="#713f12" text-anchor="middle">MOTO DA</text>
<text x="425" y="168" font-size="14" fill="#713f12" text-anchor="middle">ab/ex/de + abl. / Roma</text>
<rect x="20" y="195" width="560" height="80" rx="14" fill="#ffffff" stroke="#65a30d" stroke-width="2"/>
<text x="300" y="224" font-size="16" font-weight="bold" fill="#365314" text-anchor="middle">MOTO PER LUOGO (per dove?): per + accusativo</text>
<text x="300" y="248" font-size="15" fill="#334155" text-anchor="middle">per silvam, per agros, per Italiam</text>
<text x="300" y="268" font-size="14" fill="#334155" text-anchor="middle">Nomi di città: accusativo/ablativo SENZA preposizione</text>
</svg>`
    },
    {
      type: `text`, title: `5. Altri complementi utili`,
      html: `<ul>
<li><b>Specificazione</b> (genitivo): <i>casa agricolae</i> "la casa del contadino". Indica possesso, appartenenza, materia (<i>vas auri</i> "un vaso d'oro"), parte (genitivo partitivo: <i>pars militum</i> "una parte dei soldati").</li>
<li><b>Termine</b> (dativo): <i>Puer donum matri dat</i> "Il ragazzo dà un dono alla madre". Dativo di vantaggio: <i>Non scholae sed vitae discimus</i> "Non impariamo per la scuola, ma per la vita" (la frase è un rovesciamento di Seneca, che rimproverava: <i>non vitae sed scholae discimus</i>).</li>
<li><b>Argomento</b> (<b>de + ablativo</b>): <i>De bello Gallico</i>, "Sulla guerra gallica" (Cesare); <i>de amicitia</i> "sull'amicizia".</li>
<li><b>Materia</b> (<b>ex + ablativo</b>): <i>statua ex marmore</i> "una statua di marmo" (marmor, 3ª decl.).</li>
<li><b>Origine</b> (<b>ex/de + ablativo</b> o ablativo semplice): <i>ex Italia oriundus</i> "originario dell'Italia".</li>
<li><b>Qualità</b> (genitivo o ablativo con aggettivo): <i>vir magnae virtutis</i> / <i>vir magna virtute</i> "un uomo di grande valore".</li>
<li><b>Fine</b> (dativo): <i>Auxilio venit</i> "Viene in aiuto" (letteralmente "viene per l'aiuto").</li>
</ul>`
    },
    {
      type: `example`, title: `Traduciamo una frase completa`,
      html: `<p><i>Nautae ex Italia ad insulam parvam magnis navibus propter bellum navigant.</i></p>
<ol>
<li><b>nautae</b>: nom. plur., soggetto (marinai).</li>
<li><b>ex Italia</b>: moto da luogo (dall'Italia), ex + ablativo.</li>
<li><b>ad insulam parvam</b>: moto a luogo, ad + acc. (verso la piccola isola).</li>
<li><b>magnis navibus</b>: mezzo, ablativo plurale (con grandi navi; <i>navis</i> è di 3ª decl.).</li>
<li><b>propter bellum</b>: causa, propter + acc. (a causa della guerra).</li>
<li><b>navigant</b>: verbo, 3ª plur.</li>
</ol>
<p>Traduzione: <i>"I marinai navigano dall'Italia verso la piccola isola con grandi navi a causa della guerra."</i></p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "mecum" ha la preposizione dopo?`,
      html: `<p><i>Mecum</i>, <i>tecum</i>, <i>nobiscum</i>: la preposizione <i>cum</i> è "incollata" in fondo al pronome. È una proprietà di <i>cum</i> con i pronomi personali (anche <i>quocum</i>, <i>quibuscum</i>, "con il quale, con i quali"). La formula liturgica <i>Dominus vobiscum</i> ("Il Signore sia con voi") la conserva ancora.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… il locativo è un caso "fossile"?`,
      html: `<p>Il locativo latino non ha desinenze proprie: in 1ª e 2ª declinazione singolare coincide con il <b>genitivo</b> (<i>Romae</i>, <i>Corinthi</i>, <i>domi</i>), in 3ª con l'<b>ablativo</b> o il dativo (<i>Carthagine</i> o <i>Carthagini</i>), al plurale con l'<b>ablativo</b> (<i>Athenis</i>). Per questo viene considerato un caso "fossile": sopravvive solo in pochi nomi. Un esempio celebre: Cicerone scrive di essere a <i>Tusculi</i> (a Tuscolo) o <i>Romae</i>.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per riconoscere i complementi`,
      intro: `Se ti confondi con tutte queste preposizioni, ecco tre strategie.`,
      tabs: [
        {
          label: `❓ Le domande`,
          html: `<p>Poni al complemento la domanda italiana: <b>dove</b> (stato), <b>verso dove</b> (moto a), <b>da dove</b> (moto da), <b>per dove</b> (moto per); <b>quando</b>, <b>per quanto tempo</b>; <b>con che cosa</b>, <b>come</b>, <b>con chi</b>, <b>perché</b>, <b>da chi</b>. A ogni domanda corrisponde una riga della tabella. È il metodo più sicuro.</p>`
        },
        {
          label: `🧭 Il caso guida`,
          html: `<p>Guarda il caso del nome:</p>
<ul>
<li>se è <b>accusativo</b> + preposizione, di solito si tratta di <b>moto</b> (ad, in, per, trans), <b>tempo continuato</b>, <b>causa esterna</b> (ob, propter);</li>
<li>se è <b>ablativo</b> + preposizione, è <b>moto da</b> (ab, ex, de), <b>compagnia</b>/<b>modo</b> (cum), <b>agente</b> (a/ab con passivo), <b>stato</b> (in), <b>argomento</b> (de), <b>materia</b> (ex);</li>
<li>se è <b>ablativo senza preposizione</b>, è <b>mezzo</b>, <b>tempo determinato</b>, <b>causa interna</b>, <b>modo</b> (con aggettivo).</li>
</ul>`
        },
        {
          label: `🇮🇹 Da latino a italiano`,
          html: `<p>Molte preposizioni italiane vengono da queste latine: <i>in</i> ➜ in; <i>ad</i> ➜ a; <i>de</i> ➜ di/da; <i>ex</i> ➜ da (e); <i>cum</i> ➜ con; <i>per</i> ➜ per; <i>ab</i> ➜ da; <i>sine</i> ➜ senza; <i>post</i> ➜ dopo; <i>ante</i> ➜ avanti, prima; <i>sub</i> ➜ sotto; <i>super</i> ➜ sopra. Riconoscerle è metà del lavoro.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa dei complementi`,
      nodes: [
        { id: `abl`, label: `Ablativo`, x: 50, y: 8, color: `#06b6d4`, html: `Il "caso jolly" dei complementi indiretti.`, why: `L'ablativo latino deriva dalla fusione di tre casi indoeuropei: l'ablativo (allontanamento), lo strumentale (mezzo, compagnia) e il locativo (luogo, tempo). Per questo ha tante funzioni diverse.` },
        { id: `luogo`, label: `Luogo`, x: 18, y: 42, color: `#16a34a`, html: `Stato, moto a, moto da, moto per.`, why: `I nomi di città non hanno preposizione perché il luogo è sentito come "punto di arrivo" già noto: Romam = verso Roma. Il locativo Romae è un relitto di un caso morto.` },
        { id: `tempo`, label: `Tempo`, x: 50, y: 42, color: `#f59e0b`, html: `Quando (abl.) e per quanto (acc.).`, why: `L'accusativo è il caso dell'estensione ("lungo tutta la notte"), l'ablativo quello del punto ("in quel momento").` },
        { id: `mezzo`, label: `Mezzo, modo, causa`, x: 82, y: 42, color: `#3b82f6`, html: `Ablativo semplice o con cum.`, why: `Funzione dello strumentale indoeuropeo: "per mezzo di". L'italiano non ha un caso corrispondente e usa "con" e "per".` },
        { id: `comp`, label: `Compagnia e agente`, x: 30, y: 78, color: `#ef4444`, html: `Cum + abl. (con chi); a/ab + abl. (da chi).`, why: `La distinzione tra persone e cose è tipica del latino: se l'agente è una persona serve la preposizione, se è uno strumento no. Un errore comune è dire "gladio" per "dal soldato".` },
        { id: `ita`, label: `Italiano: preposizioni`, x: 75, y: 82, color: `#a855f7`, html: `di, a, da, in, con, per…`, why: `Le lingue romanze hanno sostituito i casi con le preposizioni: l'italiano ha ereditato molte preposizioni dal latino (<i>di, a, da, in, con, per</i>) e ha poi creato quelle articolate (del, nel, sul…).` }
      ],
      edges: [
        [`abl`, `luogo`, `funzione`], [`abl`, `tempo`, `funzione`], [`abl`, `mezzo`, `funzione`], [`mezzo`, `comp`, `+ preposizione`], [`comp`, `ita`, `oggi`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: mezzo, compagnia, agente`,
      questions: [
        { type: `mc`, q: `"Cum amicis" è un complemento di…`, options: [`mezzo`, `compagnia`, `agente`], answer: 1, explain: `Cum + ablativo con persone: compagnia.` },
        { type: `text`, q: `Come si dice "con me" (una parola)?`, answer: [`mecum`], explain: `La preposizione cum si pospone al pronome: mecum.` },
        { type: `mc`, q: `"Puer a magistro laudatur": a magistro è…`, options: [`complemento d'agente`, `complemento di compagnia`, `complemento di mezzo`], answer: 0, explain: `Verbo passivo + persona: a/ab + ablativo = complemento d'agente.` },
        { type: `mc`, q: `"Milites gladiis pugnant": gladiis è…`, options: [`mezzo`, `compagnia`, `agente`], answer: 0, explain: `Ablativo semplice di cosa: mezzo ("combattono con le spade").` }
      ]
    }
  ],
  glossary: [
    { t: `Complemento indiretto`, d: `Complemento retto da una preposizione o da un caso diverso dall'accusativo.` },
    { t: `Ablativo`, d: `Caso dei complementi circostanziali; fonde ablativo, strumentale e locativo.` },
    { t: `Locativo`, d: `Caso dello stato in luogo, conservato in Romae, domi, ruri.` },
    { t: `Stato in luogo`, d: `Dove? in + ablativo (città: locativo).` },
    { t: `Moto a luogo`, d: `Verso dove? in/ad + accusativo (città: accusativo semplice).` },
    { t: `Moto da luogo`, d: `Da dove? ab/ex/de + ablativo (città: ablativo semplice).` },
    { t: `Complemento di mezzo`, d: `Con che cosa? ablativo semplice.` },
    { t: `Complemento di compagnia`, d: `Con chi? cum + ablativo.` },
    { t: `Complemento d'agente`, d: `Da chi? a/ab + ablativo, con verbo passivo.` },
    { t: `Complemento di causa`, d: `Perché? ablativo semplice o ob/propter + accusativo.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Come si dice "a Roma" in risposta a "dove?"`, options: [`Romae`, `Roma`, `in Romam`], answer: 0, explain: `Locativo di Roma.` },
      { type: `mc`, q: `Come si dice "verso Atene" (Athenae, -arum, plurale)?`, options: [`Athenas`, `Athenis`, `ad Athenae`], answer: 0, explain: `Moto a luogo con nome di città: accusativo semplice, Athenas.` },
      { type: `text`, q: `Traduci "con la spada" (gladius, -i): ablativo di mezzo.`, answer: [`gladio`], explain: `Ablativo singolare di gladius senza preposizione.` },
      { type: `mc`, q: `"Tres annos" è…`, options: [`tempo determinato`, `tempo continuato`, `causa`], answer: 1, explain: `Accusativo di tempo continuato: per tre anni.` },
      { type: `mc`, q: `"Ex agris" è…`, options: [`moto da luogo`, `stato in luogo`, `agente`], answer: 0, explain: `Ex + ablativo = moto da luogo (dai campi).` },
      { type: `mc`, q: `Come si traduce "Servus a domino vocatur"?`, options: [`Il servo chiama il padrone`, `Il servo è chiamato dal padrone`, `Il servo con il padrone chiama`], answer: 1, explain: `Vocatur passivo; a domino = agente.` },
      { type: `tf`, q: `"In silvam" indica stato in luogo.`, answer: false, explain: `In + accusativo indica moto (dentro il bosco).` },
      { type: `mc`, q: `"Cum cura" è…`, options: [`modo`, `mezzo`, `luogo`], answer: 0, explain: `Cum + ablativo astratto: modo.` },
      { type: `text`, q: `Come si dice "da casa" (domus)?`, answer: [`domo`], explain: `Come i nomi di città: ablativo semplice: domo.` },
      { type: `order`, q: `Metti in ordine le quattro domande di luogo.`, items: [`dove? (stato)`, `verso dove? (moto a)`, `da dove? (moto da)`, `per dove? (moto per)`], explain: `Ordine tradizionale: stato, moto a luogo, moto da luogo, moto per luogo.` }
    ]
  }
});

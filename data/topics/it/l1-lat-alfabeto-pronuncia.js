TOPIC('it', {
  id: `l1-lat-alfabeto-pronuncia`,
  title: `Alfabeto, pronuncia e accento`,
  intro: `Prima di tradurre bisogna saper <b>leggere</b>. Il latino ha un alfabeto quasi identico al nostro, ma si legge in modo un po' diverso, e soprattutto ha una regola d'oro per l'<b>accento</b>: la <b>legge della penultima</b>. In questa lezione impari l'alfabeto, i dittonghi, le due pronunce (classica e scolastica), come si dividono le parole in sillabe, cosa sono la <b>quantità</b> delle vocali e delle sillabe e come si capisce dove cade l'accento. Sembra poco, ma è la base di tutto: chi legge bene il latino lo capisce meglio. 🏛️🔤`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. L'alfabeto latino`,
      html: `<p>L'alfabeto latino classico ha <b>23 lettere</b>:</p>
<p style="text-align:center"><b>A B C D E F G H I K L M N O P Q R S T V X Y Z</b></p>
<p>Rispetto all'italiano ci sono alcune differenze importanti:</p>
<ul>
<li>Mancano <b>J, U, W</b>. Nel latino classico la lettera <b>I</b> valeva sia come vocale sia come semiconsonante (<i>iam</i>, "già"), e la lettera <b>V</b> valeva sia <i>u</i> sia <i>v</i> (<i>servus</i>, <i>uenit</i> = <i>venit</i>). Le lettere <i>j</i> e <i>u</i> sono state introdotte solo molti secoli dopo, per comodità dei lettori; i testi scolastici di solito scrivono <i>v</i> per la consonante e <i>u</i> per la vocale, ma non <i>j</i>.</li>
<li><b>K</b> è rara: resta in pochissime parole (<i>Kalendae</i>, le "calende", il primo giorno del mese). Di norma il suono /k/ si scrive con <b>C</b> (o con <b>Q</b> davanti a <i>u</i>).</li>
<li><b>Y</b> e <b>Z</b> furono aggiunte nel I secolo a.C. solo per scrivere parole di origine greca (<i>zephyrus</i>, <i>gymnasium</i>, <i>lyra</i>).</li>
<li>La <b>H</b> in latino è un lievissimo soffio (aspirazione) che già in età classica si indeboliva: come in italiano, nella lettura scolastica è <b>muta</b> (<i>homo</i> si legge "òmo").</li>
</ul>
<p>Le lettere maiuscole sono quelle che vedi sulle iscrizioni (<i>SPQR</i>, <i>IMPERATOR</i>): i Romani non usavano le minuscole, che compaiono nel Medioevo. Non esistevano nemmeno la punteggiatura e gli spazi tra parole come li usiamo oggi.</p>`
    },
    {
      type: `svg`, title: `Le 23 lettere`,
      caption: `L'alfabeto latino classico: in arancione Y e Z (prestiti dal greco), in azzurro la K (rarissima). Non esistono J, U, W.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<text x="300" y="34" font-size="20" font-weight="bold" fill="#78350f" text-anchor="middle">ALFABETO LATINO: 23 LETTERE</text>
<g font-size="26" font-weight="bold" text-anchor="middle">
<rect x="14" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="34" y="92" fill="#0f172a">A</text>
<rect x="64" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="84" y="92" fill="#0f172a">B</text>
<rect x="114" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="134" y="92" fill="#0f172a">C</text>
<rect x="164" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="184" y="92" fill="#0f172a">D</text>
<rect x="214" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="234" y="92" fill="#0f172a">E</text>
<rect x="264" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="284" y="92" fill="#0f172a">F</text>
<rect x="314" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="334" y="92" fill="#0f172a">G</text>
<rect x="364" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="384" y="92" fill="#0f172a">H</text>
<rect x="414" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="434" y="92" fill="#0f172a">I</text>
<rect x="464" y="60" width="40" height="46" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><text x="484" y="92" fill="#1e3a8a">K</text>
<rect x="514" y="60" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="534" y="92" fill="#0f172a">L</text>
<rect x="14" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="34" y="156" fill="#0f172a">M</text>
<rect x="64" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="84" y="156" fill="#0f172a">N</text>
<rect x="114" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="134" y="156" fill="#0f172a">O</text>
<rect x="164" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="184" y="156" fill="#0f172a">P</text>
<rect x="214" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="234" y="156" fill="#0f172a">Q</text>
<rect x="264" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="284" y="156" fill="#0f172a">R</text>
<rect x="314" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="334" y="156" fill="#0f172a">S</text>
<rect x="364" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="384" y="156" fill="#0f172a">T</text>
<rect x="414" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="434" y="156" fill="#0f172a">V</text>
<rect x="464" y="124" width="40" height="46" rx="6" fill="#ffffff" stroke="#b45309" stroke-width="2"/><text x="484" y="156" fill="#0f172a">X</text>
<rect x="514" y="124" width="40" height="46" rx="6" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><text x="534" y="156" fill="#7c2d12">Y</text>
<rect x="14" y="188" width="40" height="46" rx="6" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><text x="34" y="220" fill="#7c2d12">Z</text>
</g>
<text x="76" y="218" font-size="16" fill="#334155">Y, Z: parole greche</text>
<text x="76" y="244" font-size="16" fill="#334155">K: solo Kalendae</text>
<text x="300" y="278" font-size="16" fill="#78350f" text-anchor="middle" font-weight="bold">Niente J, U, W: I e V facevano il doppio lavoro</text>
</svg>`
    },
    {
      type: `text`, title: `2. Vocali, consonanti e dittonghi`,
      html: `<p>Le <b>vocali</b> sono <b>a, e, i, o, u</b> (più la <b>y</b>, solo nei grecismi). Le altre lettere sono consonanti. Le vocali possono essere <b>lunghe</b> o <b>brevi</b>: lo vediamo tra poco.</p>
<p>I <b>dittonghi</b> sono due vocali pronunciate in una sola sillaba. I più importanti sono tre:</p>
<table>
<tr><th>Dittongo</th><th>Esempio</th><th>Classica</th><th>Scolastica</th></tr>
<tr><td><b>ae</b></td><td>rosae, aestas</td><td>"ai" (ròsai)</td><td>"e" (ròse)</td></tr>
<tr><td><b>oe</b></td><td>poena, poeta</td><td>"oi" (pòina)</td><td>"e" (pèna)</td></tr>
<tr><td><b>au</b></td><td>aurum, causa</td><td>"au"</td><td>"au"</td></tr>
</table>
<p>Più rari sono <b>ei</b> e <b>eu</b> (<i>heu!</i>, "ahimè!"), <b>ui</b> (<i>huic</i>). Se le due vocali vanno pronunciate separate si segna spesso la dieresi o un segno sulla seconda vocale: <i>poëta</i> (po-è-ta, tre sillabe), <i>aër</i> (a-ér, "aria"): in questi casi non c'è dittongo.</p>
<p>Il gruppo <b>qu</b> si legge sempre come "qu" italiano (<i>quis</i>, <i>aqua</i>). Anche <b>gu</b> e <b>su</b> prima di vocale possono valere come "gu" e "su" consonantici (<i>lingua</i>, <i>suavis</i>).</p>`
    },
    {
      type: `text`, title: `3. Due modi di leggere: classica e scolastica`,
      html: `<p>Nel latino parlato in età di Cesare e Cicerone (I secolo a.C.) si pronunciava in un modo che gli studiosi ricostruiscono dalle iscrizioni, dai grammatici antichi e dal confronto con le lingue indoeuropee: è la <b>pronuncia classica</b> (o <i>restituta</i>). In Italia, invece, la scuola usa tradizionalmente la <b>pronuncia scolastica</b> (o ecclesiastica, quella che si sente nelle messe), che deriva dall'evoluzione medievale e si avvicina all'italiano. Entrambe sono corrette: l'importante è <b>essere coerenti</b> e rispettare le <b>quantità</b> e l'<b>accento</b>.</p>
<table>
<tr><th>Lettere</th><th>Pronuncia classica</th><th>Pronuncia scolastica</th></tr>
<tr><td><b>c</b> davanti a e, i</td><td>sempre /k/: <i>Cicero</i> = "Kìkero"</td><td>dolce come "cena": <i>Cicero</i> = "Cìcero"</td></tr>
<tr><td><b>g</b> davanti a e, i</td><td>sempre dura, "ghe, ghi": <i>genus</i> = "ghènus"</td><td>dolce come "gente": "gènus"</td></tr>
<tr><td><b>sc</b> davanti a e, i</td><td>"sk": <i>scientia</i> = "skièntia"</td><td>"sce, sci" come "scena": <i>scientia</i> = "scièntsia"</td></tr>
<tr><td><b>v</b></td><td>suono /w/ (come "u" semiconsonantica inglese in <i>water</i>): <i>vici</i> = "wìki"</td><td>"v" italiana: <i>vici</i> = "vìci"</td></tr>
<tr><td><b>ti</b> + vocale</td><td>"ti": <i>natio</i> = "nàtio"</td><td>"zi": <i>natio</i> = "nàzio" (ma non dopo s, t, x: <i>ostium</i>, <i>mixtio</i>)</td></tr>
<tr><td><b>h</b></td><td>lieve aspirazione, spesso muta</td><td>muta</td></tr>
<tr><td><b>gn</b></td><td>"g" + "n" (<i>magnus</i> = "mag-nus")</td><td>come "gn" italiano in "ogni" (<i>magnus</i> = "màgnus")</td></tr>
<tr><td><b>ch, ph, th</b></td><td>k, p, t aspirate (grecismi)</td><td>"k", "f", "t"</td></tr>
<tr><td><b>j / i</b> semiconsonante</td><td>"i" come in "ieri": <i>iam</i> = "iam"</td><td>stessa pronuncia</td></tr>
<tr><td><b>x</b></td><td>"ks": <i>rex</i> = "reks"</td><td>"ks"</td></tr>
<tr><td><b>s</b></td><td>sempre sorda, come "sasso" (mai "z")</td><td>sorda; in genere si legge come in italiano</td></tr>
<tr><td><b>z</b></td><td>"dz" (grecismi)</td><td>"dz"</td></tr>
</table>
<p>Poiché la scuola italiana in genere insegna la scolastica, nel seguito del corso useremo <b>quella</b> negli esempi di lettura. Tieni solo presente che con la pronuncia classica <i>Veni, vidi, vici</i> si legge "Wèni, wìdi, wìki".</p>`
    },
    {
      type: `example`, title: `Leggiamo: «Veni, vidi, vici»`,
      html: `<p>Cesare avrebbe scritto al Senato, dopo la vittoria di Zela del 47 a.C. sul re del Ponto Farnace II, <i>Veni, vidi, vici</i> ("Venni, vidi, vinsi"). Come si legge?</p>
<ul>
<li><b>Scolastica</b>: <i>Vèni, vìdi, vìci</i> (ce = "ci" di "cena").</li>
<li><b>Classica</b>: <i>Wèni, wìdi, wìki</i> (v = /w/; c = /k/).</li>
</ul>
<p>La frase di Cesare è anche un perfetto esempio di <b>brevitas</b> latina: tre verbi, tre parole, nessun pronome, nessuna congiunzione. Ognuna è la 1ª persona singolare del perfetto: la desinenza -i dice "io".</p>
<p>Altro esempio: <i>Quod erat demonstrandum</i> (Q.E.D.): scolastica "Quod èrat demonstràndum"; classica "Kwod èrat demonstràndum".</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… un ragazzo romano non sapeva dire "j"?`,
      html: `<p>I Romani scrivevano <i>IVLIVS CAESAR</i>, con la I e la V al posto di J e U. E per la pronuncia di Cesare: <i>Caesar</i> era "Kàisar"! Il titolo tedesco <i>Kaiser</i> e il russo <i>zar</i> derivano proprio da <i>Caesar</i>, ed è uno degli indizi che i linguisti usano per ricostruire che la <i>c</i> davanti a <i>ae</i> fosse /k/ e il dittongo suonasse davvero "ai".</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: alfabeto e pronuncia`,
      questions: [
        { type: `mc`, q: `Quante lettere ha l'alfabeto latino classico?`, options: [`21`, `23`, `26`], answer: 1, explain: `Sono 23: mancano J, U e W; Y e Z sono state aggiunte per i grecismi.` },
        { type: `mc`, q: `Come si legge "rosae" nella pronuncia scolastica?`, options: [`ròsai`, `ròse`, `ròsa-e (a e e staccate)`], answer: 1, explain: `Nella pronuncia scolastica il dittongo ae si legge "e": ròse. (Nella classica sarebbe "ròsai".)` },
        { type: `tf`, q: `Nella pronuncia classica la lettera "c" davanti a "e" si legge sempre "k".`, answer: true, explain: `La classica non ha suoni dolci: Cicero = Kìkero, Caesar = Kàisar.` },
        { type: `mc`, q: `In "poeta" (grecismo) la sequenza "oe" è…`, options: [`un dittongo da leggere in una sola sillaba`, `due vocali separate: po-è-ta`, `una consonante`], answer: 1, explain: `In poëta le due vocali sono staccate: po-è-ta, tre sillabe, perché non è il dittongo oe.` }
      ]
    },
    {
      type: `text`, title: `4. Le sillabe`,
      html: `<p>Per sapere dove va l'accento occorre dividere la parola in <b>sillabe</b>. In latino una parola ha tante sillabe quante sono le sue <b>vocali o dittonghi</b> (<i>ae, au, oe</i> contano come una sola). Regole di divisione:</p>
<ul>
<li><b>Vocale + consonante + vocale</b>: la consonante va con la vocale seguente: <i>a-mi-cus</i>, <i>do-mi-nus</i>.</li>
<li><b>Due consonanti</b> tra due vocali: si dividono: <i>ter-ra</i>, <i>mag-nus</i>, <i>por-ta</i>, <i>an-ti-qua</i>.</li>
<li><b>Consonante muta + liquida</b> (<i>b, c, d, g, p, t, f</i> seguite da <i>l</i> o <i>r</i>) restano <b>unite</b> e passano alla sillaba seguente: <i>pa-tris</i>, <i>fe-bru-a-ri-us</i>, <i>a-gri</i>.</li>
<li>Il gruppo <b>qu</b> non si separa (<i>a-qua</i>); la <b>x</b> vale due suoni (<i>c+s</i>) e rende lunga la sillaba precedente: <i>dux</i>, <i>lex-</i>, <i>nex</i>; in <i>axis</i> si divide <i>ax-is</i>.</li>
<li>Tre consonanti: ci si ferma dopo la prima o la seconda, in genere la prima va alla sillaba precedente: <i>sanc-tus</i>, <i>in-stru-men-tum</i>.</li>
<li><b>Due vocali consecutive</b> che non fanno dittongo si separano: <i>de-us</i>, <i>fi-li-us</i>, <i>pu-er</i>.</li>
</ul>
<p>Le sillabe hanno un nome in base alla loro posizione nella parola, contando <b>dalla fine</b>: l'<b>ultima</b>, la <b>penultima</b>, la <b>terzultima</b> (o <b>antepenultima</b>).</p>`
    },
    {
      type: `text`, title: `5. La quantità: vocali e sillabe lunghe e brevi`,
      html: `<p>In latino ogni vocale è <b>lunga</b> (<i>ā, ē, ī, ō, ū</i>, segnate con una lineetta, il <b>macron</b>) oppure <b>breve</b> (<i>ă, ĕ, ĭ, ŏ, ŭ</i>, con un archetto). La differenza è di <b>durata</b>: una vocale lunga dura circa il doppio. Cambiare quantità può cambiare significato: <i>mălum</i> = "il male", <i>mālum</i> = "la mela"; <i>lĕgit</i> = "legge" (presente), <i>lēgit</i> = "lesse" (perfetto).</p>
<p>Anche una <b>sillaba</b> può essere lunga o breve. Una sillaba è <b>lunga</b> in due casi:</p>
<ol>
<li><b>per natura</b>: contiene una vocale lunga (<i>amīcus</i>: la sillaba <i>mī</i>) oppure un <b>dittongo</b> (<i>poena</i>, <i>causa</i>);</li>
<li><b>per posizione</b>: contiene una vocale breve ma <b>seguita da due consonanti</b> (o da una consonante doppia come x e z): <i>magister</i>, la sillaba <i>gis-</i> è lunga perché la <i>i</i> breve è seguita da <i>s + t</i>.</li>
</ol>
<p>Una sillaba è <b>breve</b> quando ha una vocale breve seguita da <b>una sola consonante</b> o da un'altra vocale: <i>dŏminus</i>, la <i>mi</i> è breve; <i>fĭlia</i>, la <i>li</i> è breve (vocale davanti a vocale).</p>
<p>Attenzione alla <b>muta cum liquida</b> (<i>tr, pl, br, cr…</i>): una vocale breve davanti a questi gruppi può restare breve (<i>pătris</i>, <i>cĕlĕbris</i>). Nei casi dubbi non indovinare: <b>per sapere se una vocale è lunga o breve controlla il vocabolario</b>, dove le vocali lunghe sono segnate col macron; la lunghezza "per posizione" la deduci tu.</p>`
    },
    {
      type: `text`, title: `6. La legge della penultima`,
      html: `<p>Il latino ha una regola per l'accento che vale per <b>tutte</b> le parole:</p>
<ul>
<li>Le parole di <b>due sillabe</b> hanno sempre l'accento sulla <b>penultima</b> (cioè sulla prima): <i>ròsa, vìa, sèrvus, lùpus, mùrus</i>.</li>
<li>Le parole di <b>tre o più sillabe</b>: se la <b>penultima è lunga</b> l'accento cade su di essa (<i>amìcus, regìna, magìster, momèntum</i>); se la penultima è <b>breve</b> l'accento sale alla <b>terzultima</b> (<i>dòminus, òppidum, fìlia, tèmpora</i>).</li>
<li>L'accento <b>non cade mai sull'ultima sillaba</b> (le parole latine non sono mai tronche; le monosillabiche come <i>rex, lex, mons</i> hanno ovviamente l'unica sillaba accentata).</li>
</ul>
<table>
<tr><th>Parola</th><th>Sillabe</th><th>Penultima</th><th>Accento</th></tr>
<tr><td>amicus</td><td>a-mi-cus</td><td>mī: lunga per natura</td><td>amìcus</td></tr>
<tr><td>dominus</td><td>do-mi-nus</td><td>mĭ: breve</td><td>dòminus</td></tr>
<tr><td>magister</td><td>ma-gis-ter</td><td>gis: lunga per posizione (s+t)</td><td>magìster</td></tr>
<tr><td>puella</td><td>pu-el-la</td><td>el: lunga per posizione (ll)</td><td>puèlla</td></tr>
<tr><td>filia</td><td>fi-li-a</td><td>li: breve (vocale davanti a vocale)</td><td>fìlia</td></tr>
<tr><td>amare (infinito)</td><td>a-mā-re</td><td>mā: lunga</td><td>amàre</td></tr>
<tr><td>legere</td><td>le-ge-re</td><td>ge: breve</td><td>lègere</td></tr>
</table>
<p>Ora capisci perché l'italiano ha tante coppie come <i>lèggere</i> / <i>vedére</i>: la 3ª coniugazione latina (<i>legĕre</i>, con e breve) mette l'accento sulla terzultima, mentre la 2ª (<i>vidēre</i>, con e lunga) sulla penultima. La stessa differenza si ritrova identica nell'italiano!</p>`
    },
    {
      type: `svg`, title: `Dove cade l'accento`,
      caption: `Legge della penultima: se la penultima sillaba è lunga porta l'accento; se è breve, l'accento sale alla terzultima.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#1e3a8a" text-anchor="middle">LEGGE DELLA PENULTIMA</text>
<rect x="20" y="50" width="270" height="100" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="155" y="76" font-size="16" font-weight="bold" fill="#14532d" text-anchor="middle">Penultima LUNGA</text>
<rect x="38" y="90" width="64" height="40" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="2"/><text x="70" y="119" font-size="22" fill="#0f172a" text-anchor="middle">a</text>
<rect x="110" y="90" width="64" height="40" rx="6" fill="#fde68a" stroke="#d97706" stroke-width="3"/><text x="142" y="119" font-size="22" font-weight="bold" fill="#92400e" text-anchor="middle">mì</text>
<rect x="182" y="90" width="64" height="40" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="2"/><text x="214" y="119" font-size="22" fill="#0f172a" text-anchor="middle">cus</text>
<text x="155" y="146" font-size="14" fill="#14532d" text-anchor="middle">amìcus</text>
<rect x="310" y="50" width="270" height="100" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
<text x="445" y="76" font-size="16" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Penultima BREVE</text>
<rect x="328" y="90" width="64" height="40" rx="6" fill="#fde68a" stroke="#d97706" stroke-width="3"/><text x="360" y="119" font-size="22" font-weight="bold" fill="#92400e" text-anchor="middle">dò</text>
<rect x="400" y="90" width="64" height="40" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="2"/><text x="432" y="119" font-size="22" fill="#0f172a" text-anchor="middle">mi</text>
<rect x="472" y="90" width="64" height="40" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="2"/><text x="504" y="119" font-size="22" fill="#0f172a" text-anchor="middle">nus</text>
<text x="445" y="146" font-size="14" fill="#7f1d1d" text-anchor="middle">dòminus</text>
<text x="300" y="190" font-size="16" fill="#334155" text-anchor="middle">Penultima lunga: per natura (vocale lunga o dittongo)</text>
<text x="300" y="214" font-size="16" fill="#334155" text-anchor="middle">oppure per posizione (vocale + due consonanti: magìster)</text>
<text x="300" y="250" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Due sillabe: accento sempre sulla prima (ròsa)</text>
<text x="300" y="276" font-size="16" font-weight="bold" fill="#1e3a8a" text-anchor="middle">L'ultima sillaba non porta mai l'accento</text>
</svg>`
    },
    {
      type: `widget`, title: `Gioco: penultima o terzultima?`,
      widget: `classify`,
      options: {
        groups: [`Accento sulla penultima`, `Accento sulla terzultima`],
        items: [
          [`amicus (amìcus)`, 0], [`regina (regìna)`, 0], [`magister (magìster)`, 0], [`momentum (momèntum)`, 0], [`puella (puèlla)`, 0], [`libertas (libèrtas)`, 0],
          [`dominus (dòminus)`, 1], [`oppidum (òppidum)`, 1], [`filia (fìlia)`, 1], [`tempora (tèmpora)`, 1], [`hominum (hòminum)`, 1]
        ]
      },
      caption: `Dividi in sillabe, guarda la penultima: lunga (per natura o per posizione) o breve?`
    },
    {
      type: `remember`, title: `Il metodo in tre passi`,
      html: `<ol>
<li><b>Dividi</b> la parola in sillabe (tante quante vocali o dittonghi).</li>
<li>Guarda la <b>penultima</b>: ha una vocale lunga, un dittongo, oppure una vocale seguita da due consonanti? Allora è <b>lunga</b>.</li>
<li>Se è <b>lunga</b>, accento sulla penultima; se è <b>breve</b>, sulla terzultima. Con due sillabe, sempre sulla prima.</li>
</ol>`
    },
    {
      type: `example`, title: `Applichiamo il metodo a una frase`,
      html: `<p>Leggiamo <i>Magister puellam amat</i> ("Il maestro ama la fanciulla"):</p>
<ul>
<li><i>ma-gis-ter</i>: penultima lunga per posizione ➜ <b>magìster</b>.</li>
<li><i>pu-el-lam</i>: penultima lunga per posizione (ll) ➜ <b>puèllam</b>.</li>
<li><i>a-mat</i>: due sillabe ➜ <b>àmat</b>.</li>
</ul>
<p>Frase letta: "magìster puèllam àmat". Con la scolastica nessuna lettera cambia suono; con la classica la <i>c</i> e la <i>v</i> avrebbero un altro suono, ma qui non ce ne sono.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… i Romani scrivevano senza spazi?`,
      html: `<p>Sulle iscrizioni romane le parole erano spesso separate da un puntino (<i>interpunct</i>) o non erano separate affatto: <i>SENATVSPOPVLVSQVEROMANVS</i>. Spazi e minuscole sono invenzioni medievali. Per questo i filologi, per leggere un testo antico, devono sapere esattamente dove finisce una parola e dove comincia l'altra.</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per ricordare la regola`,
      intro: `Se la legge della penultima non ti torna ancora, prova una di queste strade.`,
      tabs: [
        {
          label: `🇮🇹 Il trucco dell'italiano`,
          html: `<p>Molte parole italiane conservano l'accento latino. Chiediti come le diresti in italiano:</p>
<ul>
<li><i>amìcus</i> ➜ <b>amìco</b> (accento sulla penultima).</li>
<li><i>dòminus</i> ➜ <b>dòmino</b> (e il <i>dòmine</i> latino, accento sulla terzultima).</li>
<li><i>regìna</i> ➜ <b>regìna</b>, <i>libèrtas</i> ➜ <b>libertà</b> (l'accento si è spostato perché è caduta la -s finale).</li>
<li><i>lègere</i> ➜ <b>lèggere</b>, ma <i>vidēre</i> ➜ <b>vedére</b>: lo stesso comportamento.</li>
</ul>
<p>Non funziona sempre (l'italiano ha anche subito cambiamenti), ma è un ottimo indizio.</p>`
        },
        {
          label: `🎵 Il ritmo`,
          html: `<p>Il latino aveva un ritmo basato sulla <b>durata</b>: una lunga vale "due tempi", una breve "uno". Prova a battere il ritmo: <i>a-mī-cus</i> ➜ "ta-TÀ-ta"; <i>dŏ-mĭ-nus</i> ➜ "TÀ-ta-ta". Il ritmo di un verso poetico latino (esametro, distico elegiaco) si basa proprio sull'alternarsi di lunghe e brevi: lo vedrai al triennio.</p>`
        },
        {
          label: `📏 Tabella decisionale`,
          html: `<table>
<tr><th>Numero di sillabe</th><th>Penultima</th><th>Accento</th></tr>
<tr><td>2</td><td>(non conta)</td><td>sulla prima (penultima)</td></tr>
<tr><td>3 o più</td><td>lunga</td><td>sulla penultima</td></tr>
<tr><td>3 o più</td><td>breve</td><td>sulla terzultima</td></tr>
</table>
<p>Hai un alberello a tre rami: due sillabe? Penultima. Altrimenti: lunga o breve?</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: leggere il latino`,
      nodes: [
        { id: `alf`, label: `Alfabeto di 23 lettere`, x: 20, y: 10, color: `#d97706`, html: `A B C D E F G H I K L M N O P Q R S T V X Y Z. Senza J, U, W.`, why: `Il latino derivò l'alfabeto dagli Etruschi, che a loro volta lo ricevettero dai Greci di Cuma (colonia euboica in Campania). Y e Z furono reintrodotte in età di Cicerone per trascrivere nomi e termini greci.` },
        { id: `pron`, label: `Due pronunce`, x: 70, y: 10, color: `#3b82f6`, html: `Classica (ricostruita) e scolastica (tradizione italiana ed ecclesiastica).`, why: `La pronuncia classica è ricostruita da iscrizioni, grammatici (Quintiliano, Varrone) e dal confronto con altre lingue; la scolastica è quella che si è evoluta nelle scuole e nella Chiesa e che si è avvicinata al suono dell'italiano.` },
        { id: `quant`, label: `Quantità`, x: 20, y: 50, color: `#16a34a`, html: `Vocali e sillabe lunghe o brevi.`, why: `In latino la durata è un tratto distintivo: <i>mălum</i> e <i>mālum</i> sono parole diverse. È la base della metrica, che non contava gli accenti ma le lunghe e le brevi.` },
        { id: `sill`, label: `Sillabe`, x: 50, y: 50, color: `#a855f7`, html: `Una per ogni vocale o dittongo; due consonanti si dividono, muta+liquida restano unite.`, why: `Dividere correttamente le sillabe serve a calcolare la quantità per posizione.` },
        { id: `acc`, label: `Legge della penultima`, x: 50, y: 85, color: `#ef4444`, html: `Accento sulla penultima se lunga; altrimenti sulla terzultima. Mai sull'ultima.`, why: `Questa regola, descritta dai grammatici antichi, ha una conseguenza storica: nelle lingue romanze la vocale accentata è sopravvissuta, mentre le vocali atone finali sono cadute o si sono indebolite (lat. <i>amìcus</i> ➜ it. <i>amìco</i>, fr. <i>ami</i>).` },
        { id: `ita`, label: `Italiano e lingue romanze`, x: 85, y: 85, color: `#f59e0b`, html: `Gran parte dell'italiano deriva dal latino parlato.`, why: `L'accento italiano conserva quasi sempre quello latino: ecco perché leggere bene il latino aiuta a scrivere e a pronunciare bene l'italiano.` }
      ],
      edges: [
        [`alf`, `pron`, `si legge in`], [`pron`, `quant`, `rispetta`], [`quant`, `sill`, `si misura sulle`], [`sill`, `acc`, `decidono`], [`acc`, `ita`, `eredità`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: sillabe e accento`,
      questions: [
        { type: `mc`, q: `Dove cade l'accento in "rosa"?`, options: [`sulla prima sillaba (ròsa)`, `sulla seconda (rosà)`, `non si può sapere`], answer: 0, explain: `Nelle parole di due sillabe l'accento cade sempre sulla penultima, cioè sulla prima.` },
        { type: `text`, q: `Dividi in sillabe "magister" (scrivi con i trattini).`, answer: [`ma-gis-ter`], explain: `Due consonanti (s e t) tra due vocali si dividono: ma-gis-ter. La penultima gis è lunga per posizione: magìster.` },
        { type: `mc`, q: `Perché "dominus" ha l'accento sulla terzultima?`, options: [`perché la penultima (mĭ) è breve`, `perché è un nome maschile`, `perché finisce in -us`], answer: 0, explain: `Se la penultima è breve, l'accento sale alla terzultima: dòminus.` },
        { type: `tf`, q: `In latino l'accento può cadere sull'ultima sillaba di una parola di tre sillabe.`, answer: false, explain: `No: l'ultima sillaba non è mai accentata nelle parole polisillabiche.` }
      ]
    }
  ],
  glossary: [
    { t: `Alfabeto latino`, d: `Insieme di 23 lettere (A B C D E F G H I K L M N O P Q R S T V X Y Z).` },
    { t: `Dittongo`, d: `Due vocali pronunciate in una sola sillaba: ae, oe, au.` },
    { t: `Pronuncia classica`, d: `Quella ricostruita dei Romani dell'età di Cesare e Cicerone (c sempre dura, v = w, ae = ai).` },
    { t: `Pronuncia scolastica`, d: `Quella tradizionale italiana, più vicina all'italiano (ce = "ce", ti+vocale = "zi", ae = "e").` },
    { t: `Quantità`, d: `Durata lunga o breve di una vocale o di una sillaba.` },
    { t: `Macron`, d: `Lineetta (¯) sulla vocale lunga: ā, ē, ī, ō, ū.` },
    { t: `Sillaba lunga per natura`, d: `Sillaba con vocale lunga o dittongo.` },
    { t: `Sillaba lunga per posizione`, d: `Sillaba con vocale breve seguita da due consonanti.` },
    { t: `Penultima`, d: `Penultima sillaba di una parola: se lunga, porta l'accento.` },
    { t: `Terzultima`, d: `Terzultima sillaba (antepenultima): porta l'accento se la penultima è breve.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Quale di queste lettere NON c'è nell'alfabeto latino classico?`, options: [`K`, `Y`, `W`], answer: 2, explain: `La W non esiste; K è rara, Y e Z sono usate solo per grecismi.` },
      { type: `mc`, q: `Con la pronuncia scolastica "Caesar" si legge…`, options: [`Kàisar`, `Cèsar`, `Cà-e-sar con a e e staccate`], answer: 1, explain: `Scolastica: c dolce davanti a e e dittongo ae = e, quindi Cèsar. La classica sarebbe "Kàisar".` },
      { type: `tf`, q: `La parola "magister" ha l'accento sulla penultima perché la sillaba "gis" è lunga per posizione.`, answer: true, explain: `La i è breve ma seguita da due consonanti (s e t): sillaba lunga per posizione, quindi magìster.` },
      { type: `text`, q: `In "amicus" l'accento cade sulla sillaba… (scrivi la sillaba accentata)`, answer: [`mi`, `mì`, `mī`], explain: `A-mi-cus: la penultima è lunga per natura (mī), quindi amìcus.` },
      { type: `mc`, q: `Quale parola ha l'accento sulla terzultima?`, options: [`puella`, `filia`, `regina`], answer: 1, explain: `Fi-li-a: la penultima li è breve (davanti a vocale), quindi fìlia. Le altre hanno la penultima lunga: puèlla, regìna.` },
      { type: `order`, q: `Metti in ordine i passi per trovare l'accento.`, items: [`Dividere la parola in sillabe`, `Guardare la penultima sillaba`, `Stabilire se la penultima è lunga o breve`, `Collocare l'accento sulla penultima o sulla terzultima`], explain: `Prima le sillabe, poi la penultima, poi la quantità, infine l'accento.` },
      { type: `mc`, q: `Una sillaba contenente una vocale breve seguita da due consonanti è…`, options: [`breve`, `lunga per posizione`, `lunga per natura`], answer: 1, explain: `Vocale breve + due consonanti = lunga per posizione.` },
      { type: `num`, q: `Quante sillabe ha "poeta" se si legge po-è-ta (grecismo, senza dittongo)?`, answer: 3, tol: 0, explain: `Po-è-ta: tre sillabe, perché le due vocali non fanno dittongo.` },
      { type: `mc`, q: `Con la pronuncia classica "vici" si legge…`, options: [`vìci`, `wìki`, `vìki`], answer: 1, explain: `Classica: v = /w/ e c sempre /k/: wìki.` },
      { type: `tf`, q: `Le parole latine di due sillabe hanno l'accento sulla seconda sillaba.`, answer: false, explain: `Hanno l'accento sulla penultima, cioè sulla prima: ròsa, sèrvus.` }
    ]
  }
});

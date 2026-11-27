TOPIC('it', {
  id: `l1-lat-indicativo-coniugazioni`,
  title: `L'indicativo delle quattro coniugazioni`,
  intro: `Il verbo è il cuore della frase latina: se lo riconosci e lo analizzi bene, la traduzione è a metà strada. In questa lezione impari a coniugare i verbi regolari nei tre tempi semplici dell'indicativo: <b>presente</b>, <b>imperfetto</b> e <b>futuro semplice</b>, sia alla <b>forma attiva</b> sia alla <b>forma passiva</b>, nelle quattro coniugazioni (più la 3ª "mista" in <i>-io</i>), e il verbo <b>sum</b>. Le regole sono poche e molto regolari: tema + segno del tempo + desinenza personale. Con un po' di allenamento coniugherai a memoria centinaia di verbi. ⚔️📜`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Come è fatto un verbo latino`,
      html: `<p>Un verbo latino è composto da <b>tema + (segno del tempo) + desinenza personale</b>. Per esempio <i>ama-ba-mus</i> = tema <i>ama-</i> + segno dell'imperfetto <i>-ba-</i> + desinenza <i>-mus</i> ("noi amavamo").</p>
<p>Ogni forma verbale ti dà quattro informazioni: <b>persona</b> (1ª, 2ª, 3ª), <b>numero</b> (singolare, plurale), <b>tempo</b> (presente, imperfetto, futuro…), <b>diatesi</b> (attiva o passiva), e in più il <b>modo</b> (qui sempre indicativo).</p>
<p><b>Il paradigma</b>: sul vocabolario ogni verbo è dato con quattro (o cinque) forme che permettono di costruire tutto il resto:</p>
<table>
<tr><th>Coniug.</th><th>Presente (1ª sing.)</th><th>2ª sing.</th><th>Perfetto</th><th>Supino</th><th>Infinito</th><th>Significato</th></tr>
<tr><td>1ª</td><td>amo</td><td>amas</td><td>amavi</td><td>amatum</td><td>amāre</td><td>amare</td></tr>
<tr><td>2ª</td><td>moneo</td><td>mones</td><td>monui</td><td>monitum</td><td>monēre</td><td>avvertire, ammonire</td></tr>
<tr><td>3ª</td><td>lego</td><td>legis</td><td>legi</td><td>lectum</td><td>legĕre</td><td>leggere</td></tr>
<tr><td>4ª</td><td>audio</td><td>audis</td><td>audivi</td><td>auditum</td><td>audīre</td><td>ascoltare</td></tr>
<tr><td>3ª mista</td><td>capio</td><td>capis</td><td>cepi</td><td>captum</td><td>capĕre</td><td>prendere</td></tr>
</table>
<p>Per i tempi del <b>presente</b> (presente, imperfetto, futuro) bastano la <b>1ª persona</b>, la <b>2ª persona</b> e l'<b>infinito</b> del paradigma. Il <b>tema del presente</b> si ottiene togliendo <b>-re</b> all'infinito: <i>ama-, mone-, lege-, audi-, cape-</i> (la 3ª ha l'ultima vocale che si modifica: <i>leg-</i> + vocale di collegamento).</p>`
    },
    {
      type: `text`, title: `2. Il presente indicativo attivo`,
      html: `<p>Le <b>desinenze personali attive</b> sono: <b>-o (-m), -s, -t, -mus, -tis, -nt</b>.</p>
<table>
<tr><th></th><th>1ª amāre</th><th>2ª monēre</th><th>3ª legĕre</th><th>4ª audīre</th><th>3ª mista capĕre</th></tr>
<tr><td>io</td><td>amo</td><td>moneo</td><td>lego</td><td>audio</td><td>capio</td></tr>
<tr><td>tu</td><td>amas</td><td>mones</td><td>legis</td><td>audis</td><td>capis</td></tr>
<tr><td>egli</td><td>amat</td><td>monet</td><td>legit</td><td>audit</td><td>capit</td></tr>
<tr><td>noi</td><td>amamus</td><td>monemus</td><td>legimus</td><td>audimus</td><td>capimus</td></tr>
<tr><td>voi</td><td>amatis</td><td>monetis</td><td>legitis</td><td>auditis</td><td>capitis</td></tr>
<tr><td>essi</td><td>amant</td><td>monent</td><td>legunt</td><td>audiunt</td><td>capiunt</td></tr>
</table>
<p>La <b>vocale tematica</b> è: <b>a</b> (1ª), <b>e</b> (2ª), <b>i/u/e breve</b> (3ª), <b>i</b> (4ª). Attenzione alle differenze:</p>
<ul>
<li>1ª coniugazione: la <i>a</i> cade davanti alla <i>o</i> (<i>amo</i>, non <s>amao</s>).</li>
<li>2ª: la <i>e</i> resta ovunque (<i>moneo, monent</i>).</li>
<li>3ª: la vocale di collegamento è <b>-i-</b> alla 2ª, 3ª sing. e 1ª, 2ª plur. (<i>legis, legit, legimus, legitis</i>), <b>-u-</b> alla 3ª plur. (<i>legunt</i>).</li>
<li>4ª e 3ª mista: la <i>-i-</i> resta in tutte le forme, e la 3ª plur. è <b>-iunt</b> (<i>audiunt, capiunt</i>).</li>
</ul>
<p><b>Valore</b>: il presente latino traduce il presente italiano (<i>amo</i> = amo, sto amando). Non c'è differenza tra "amo" e "sto amando".</p>`
    },
    {
      type: `svg`, title: `Formare una voce verbale`,
      caption: `Tema + segno del tempo + desinenza personale: la formula di tutte le voci verbali dell'indicativo attivo.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<text x="300" y="30" font-size="20" font-weight="bold" fill="#312e81" text-anchor="middle">COME SI COSTRUISCE UN VERBO</text>
<rect x="30" y="50" width="160" height="70" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="110" y="82" font-size="26" font-weight="bold" fill="#14532d" text-anchor="middle">ama-</text>
<text x="110" y="106" font-size="14" fill="#14532d" text-anchor="middle">TEMA (da amāre)</text>
<text x="212" y="92" font-size="30" fill="#334155" text-anchor="middle">+</text>
<rect x="232" y="50" width="136" height="70" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
<text x="300" y="82" font-size="26" font-weight="bold" fill="#78350f" text-anchor="middle">-ba-</text>
<text x="300" y="106" font-size="14" fill="#78350f" text-anchor="middle">SEGNO imperfetto</text>
<text x="390" y="92" font-size="30" fill="#334155" text-anchor="middle">+</text>
<rect x="410" y="50" width="160" height="70" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<text x="490" y="82" font-size="26" font-weight="bold" fill="#7f1d1d" text-anchor="middle">-mus</text>
<text x="490" y="106" font-size="14" fill="#7f1d1d" text-anchor="middle">DESINENZA (noi)</text>
<text x="300" y="165" font-size="24" font-weight="bold" fill="#312e81" text-anchor="middle">amabamus = noi amavamo</text>
<text x="300" y="205" font-size="16" fill="#334155" text-anchor="middle">Imperfetto: -ba- (-bam, -bas, -bat, -bamus, -batis, -bant)</text>
<text x="300" y="232" font-size="16" fill="#334155" text-anchor="middle">Futuro 1ª e 2ª: -bo, -bis, -bit, -bimus, -bitis, -bunt</text>
<text x="300" y="259" font-size="16" fill="#334155" text-anchor="middle">Futuro 3ª e 4ª: -am, -es, -et, -emus, -etis, -ent</text>
<text x="300" y="284" font-size="16" font-weight="bold" fill="#312e81" text-anchor="middle">Passivo: -r, -ris, -tur, -mur, -mini, -ntur</text>
</svg>`
    },
    {
      type: `example`, title: `Verbi in azione: il presente`,
      html: `<p><i>Magister pueros docet, pueri libros legunt, puellae cantant.</i></p>
<ul>
<li><b>docet</b>: 3ª sing. di <i>doceo, docēre</i> (insegnare): "il maestro insegna";</li>
<li><b>legunt</b>: 3ª plur. di <i>lego</i>: "i ragazzi leggono i libri";</li>
<li><b>cantant</b>: 3ª plur. di <i>canto, cantāre</i>: "le ragazze cantano".</li>
</ul>
<p>Osserva: <b>pueros</b> è accusativo plurale e dice chi viene istruito; <b>pueri</b> è nominativo plurale e fa da soggetto di <i>legunt</i>. Il verbo si mette in genere <b>in fondo</b> alla frase.</p>
<p>Il verbo concorda <b>in persona e numero</b> con il soggetto: <i>agricola laborat</i> (sing.), <i>agricolae laborant</i> (plur.). Il soggetto di 1ª e 2ª persona di solito non si esprime: <i>laboro</i> = (io) lavoro.</p>`
    },
    {
      type: `quiz`, title: `Mini-quiz: il presente`,
      questions: [
        { type: `text`, q: `Scrivi "essi ascoltano" (audio, audire).`, answer: [`audiunt`], explain: `4ª coniugazione: 3ª plurale in -iunt: audiunt.` },
        { type: `mc`, q: `"Legitis" significa…`, options: [`legge`, `leggete`, `leggono`], answer: 1, explain: `-tis = voi: legitis = voi leggete.` },
        { type: `mc`, q: `Come si ricava il tema del presente?`, options: [`togliendo -re all'infinito`, `togliendo -o alla 1ª persona`, `aggiungendo -s al perfetto`], answer: 0, explain: `Dall'infinito senza -re: ama-, mone-, lege-, audi-.` }
      ]
    },
    {
      type: `text`, title: `3. L'imperfetto indicativo attivo`,
      html: `<p>Esprime un'azione <b>passata non conclusa</b>: durativa, abituale, descrittiva (italiano: <i>amavo</i>, <i>stavo amando</i>). Si forma con il <b>tema + -ba- + desinenze</b>: <b>-bam, -bas, -bat, -bamus, -batis, -bant</b>. In 1ª coniugazione basta aggiungere al tema; nelle altre c'è una vocale di raccordo lunga <b>-ē-</b>: 2ª e 3ª <i>-ebam</i>; 4ª e 3ª mista <i>-iebam</i>.</p>
<table>
<tr><th></th><th>1ª</th><th>2ª</th><th>3ª</th><th>4ª</th><th>3ª mista</th></tr>
<tr><td>io</td><td>ama<b>bam</b></td><td>mone<b>bam</b></td><td>leg<b>ebam</b></td><td>audi<b>ebam</b></td><td>capi<b>ebam</b></td></tr>
<tr><td>tu</td><td>ama<b>bas</b></td><td>mone<b>bas</b></td><td>leg<b>ebas</b></td><td>audi<b>ebas</b></td><td>capi<b>ebas</b></td></tr>
<tr><td>egli</td><td>ama<b>bat</b></td><td>mone<b>bat</b></td><td>leg<b>ebat</b></td><td>audi<b>ebat</b></td><td>capi<b>ebat</b></td></tr>
<tr><td>noi</td><td>ama<b>bamus</b></td><td>mone<b>bamus</b></td><td>leg<b>ebamus</b></td><td>audi<b>ebamus</b></td><td>capi<b>ebamus</b></td></tr>
<tr><td>voi</td><td>ama<b>batis</b></td><td>mone<b>batis</b></td><td>leg<b>ebatis</b></td><td>audi<b>ebatis</b></td><td>capi<b>ebatis</b></td></tr>
<tr><td>essi</td><td>ama<b>bant</b></td><td>mone<b>bant</b></td><td>leg<b>ebant</b></td><td>audi<b>ebant</b></td><td>capi<b>ebant</b></td></tr>
</table>
<p>Trucco: la sillaba <b>-ba-</b> compare in tutte le forme dell'imperfetto; in <b>3ª e 4ª</b> si inserisce una <b>-e-</b> prima di -ba- (<i>-eba-</i>). Esempio: <i>Romani in foro conveniebant</i> ("i Romani si radunavano [di solito] nel foro").</p>`
    },
    {
      type: `text`, title: `4. Il futuro semplice attivo`,
      html: `<p>Indica un'azione che accadrà (italiano: <i>amerò</i>). Ha <b>due modelli</b>:</p>
<h4>A. 1ª e 2ª coniugazione: tema + <b>-bo, -bis, -bit, -bimus, -bitis, -bunt</b></h4>
<table>
<tr><th></th><th>1ª</th><th>2ª</th></tr>
<tr><td>io</td><td>ama<b>bo</b></td><td>mone<b>bo</b></td></tr>
<tr><td>tu</td><td>ama<b>bis</b></td><td>mone<b>bis</b></td></tr>
<tr><td>egli</td><td>ama<b>bit</b></td><td>mone<b>bit</b></td></tr>
<tr><td>noi</td><td>ama<b>bimus</b></td><td>mone<b>bimus</b></td></tr>
<tr><td>voi</td><td>ama<b>bitis</b></td><td>mone<b>bitis</b></td></tr>
<tr><td>essi</td><td>ama<b>bunt</b></td><td>mone<b>bunt</b></td></tr>
</table>
<h4>B. 3ª, 4ª e 3ª mista: tema + <b>-am, -es, -et, -emus, -etis, -ent</b></h4>
<table>
<tr><th></th><th>3ª</th><th>4ª</th><th>3ª mista</th></tr>
<tr><td>io</td><td>leg<b>am</b></td><td>audi<b>am</b></td><td>capi<b>am</b></td></tr>
<tr><td>tu</td><td>leg<b>es</b></td><td>audi<b>es</b></td><td>capi<b>es</b></td></tr>
<tr><td>egli</td><td>leg<b>et</b></td><td>audi<b>et</b></td><td>capi<b>et</b></td></tr>
<tr><td>noi</td><td>leg<b>emus</b></td><td>audi<b>emus</b></td><td>capi<b>emus</b></td></tr>
<tr><td>voi</td><td>leg<b>etis</b></td><td>audi<b>etis</b></td><td>capi<b>etis</b></td></tr>
<tr><td>essi</td><td>leg<b>ent</b></td><td>audi<b>ent</b></td><td>capi<b>ent</b></td></tr>
</table>
<p><b>Attenzione alle trappole!</b> La 1ª pers. sing. del futuro di 3ª e 4ª (<i>legam, audiam</i>) assomiglia a un accusativo (-am); il futuro di 3ª (<i>leges, leget</i>) ha le stesse desinenze del presente di 2ª (<i>mones, monet</i>): guarda sempre il tema per capire la coniugazione; le forme <i>amabo</i> / <i>amabam</i> si distinguono per il segno: <b>-bo</b> = futuro, <b>-bam</b> = imperfetto. Il tema ti dice la coniugazione.</p>`
    },
    {
      type: `remember`, title: `Tabella riassuntiva dei tempi del presente (attivo)`,
      html: `<table>
<tr><th>Tempo</th><th>1ª e 2ª</th><th>3ª e 4ª</th></tr>
<tr><td>Presente</td><td>tema + -o/-s/-t/-mus/-tis/-nt</td><td>tema + -o/-s/-t/-mus/-tis/-nt (3ª: vocale -i-/-u-; 4ª: -iunt)</td></tr>
<tr><td>Imperfetto</td><td>-ba- (amabam, monebam)</td><td>-eba- (legebam, audiebam)</td></tr>
<tr><td>Futuro</td><td>-bo, -bis, -bit… (amabo, monebo)</td><td>-am, -es, -et… (legam, audiam)</td></tr>
</table>
<p><b>Memoria</b>: imperfetto = <b>BA</b>, futuro 1ª/2ª = <b>BO/BI</b>, futuro 3ª/4ª = <b>A/E</b> ("am, es, et").</p>`
    },
    {
      type: `widget`, title: `Gioco: che tempo è?`,
      widget: `classify`,
      options: {
        groups: [`Presente`, `Imperfetto`, `Futuro`],
        items: [
          [`amant`, 0], [`legis`, 0], [`audimus`, 0], [`monetis`, 0],
          [`amabam`, 1], [`legebant`, 1], [`audiebat`, 1], [`monebamus`, 1],
          [`amabo`, 2], [`legam`, 2], [`audient`, 2], [`monebunt`, 2]
        ]
      },
      caption: `Segni del tempo: nessun segno = presente; -ba-/-eba- = imperfetto; -bo/-bi/-bu o -a/-e = futuro.`
    },
    {
      type: `text`, title: `5. La forma passiva`,
      html: `<p>Nella forma passiva il soggetto <b>subisce</b> l'azione: <i>Puella laudatur</i> = "La ragazza è lodata". Il complemento d'agente (chi compie l'azione) è espresso con <b>a / ab + ablativo</b> per le persone (<i>a magistro</i>) e con l'<b>ablativo semplice</b> per i complementi di causa efficiente o mezzo (<i>gladio</i>).</p>
<p>Le <b>desinenze personali passive</b> sono: <b>-r, -ris, -tur, -mur, -mini, -ntur</b> (al presente la 1ª sing. è <b>-or</b> con la <i>o</i> tematica).</p>
<table>
<tr><th>Presente passivo</th><th>1ª</th><th>2ª</th><th>3ª</th><th>4ª</th><th>3ª mista</th></tr>
<tr><td>io</td><td>amor</td><td>moneor</td><td>legor</td><td>audior</td><td>capior</td></tr>
<tr><td>tu</td><td>amaris</td><td>moneris</td><td>legeris</td><td>audiris</td><td>caperis</td></tr>
<tr><td>egli</td><td>amatur</td><td>monetur</td><td>legitur</td><td>auditur</td><td>capitur</td></tr>
<tr><td>noi</td><td>amamur</td><td>monemur</td><td>legimur</td><td>audimur</td><td>capimur</td></tr>
<tr><td>voi</td><td>amamini</td><td>monemini</td><td>legimini</td><td>audimini</td><td>capimini</td></tr>
<tr><td>essi</td><td>amantur</td><td>monentur</td><td>leguntur</td><td>audiuntur</td><td>capiuntur</td></tr>
</table>
<p>Imperfetto passivo: <b>tema + -ba- + -r, -ris, -tur, -mur, -mini, -ntur</b> con 1ª sing. <b>-bar</b> e 2ª sing. <b>-baris</b> (<i>amabar, amabaris, amabatur, amabamur, amabamini, amabantur</i>; <i>legebar, audiebar</i>…).</p>
<p>Futuro passivo:</p>
<ul>
<li><b>1ª e 2ª</b>: <i>amabor, amaberis, amabitur, amabimur, amabimini, amabuntur</i> (<i>monebor, moneberis…</i>);</li>
<li><b>3ª e 4ª</b>: <i>legar, legeris, legetur, legemur, legemini, legentur</i>; <i>audiar, audieris, audietur, audiemur, audiemini, audientur</i>.</li>
</ul>
<p>Nota: la <b>2ª sing.</b> del presente passivo della 3ª (<i>legeris</i>) coincide con il futuro passivo di 3ª (<i>legeris</i>): il contesto (e il tempo degli altri verbi) ti aiuterà a scegliere.</p>`
    },
    {
      type: `example`, title: `Attivo e passivo a confronto`,
      html: `<table>
<tr><th>Attivo</th><th>Passivo</th></tr>
<tr><td><i>Magister puerum laudat.</i><br>Il maestro loda il ragazzo.</td><td><i>Puer a magistro laudatur.</i><br>Il ragazzo è lodato dal maestro.</td></tr>
<tr><td><i>Agricolae agros arabant.</i><br>I contadini arano i campi.</td><td><i>Agri ab agricolis arabantur.</i><br>I campi erano arati dai contadini.</td></tr>
<tr><td><i>Poeta carmen scribet.</i><br>Il poeta scriverà un carme.</td><td><i>Carmen a poeta scribetur.</i><br>Un carme sarà scritto dal poeta.</td></tr>
</table>
<p>L'<b>oggetto</b> della frase attiva diventa il <b>soggetto</b> della passiva (accusativo ➜ nominativo); il vecchio soggetto diventa <b>complemento d'agente</b> (<i>a/ab</i> + ablativo). Il verbo passivo concorda con il nuovo soggetto in persona e numero.</p>`
    },
    {
      type: `text`, title: `6. Il verbo sum al presente, imperfetto e futuro`,
      html: `<p>Il verbo <i>essere</i> è irregolare ma è usato continuamente: <b>sum, es, fui, esse</b>.</p>
<table>
<tr><th></th><th>Presente</th><th>Imperfetto</th><th>Futuro</th></tr>
<tr><td>io</td><td>sum</td><td>eram</td><td>ero</td></tr>
<tr><td>tu</td><td>es</td><td>eras</td><td>eris</td></tr>
<tr><td>egli</td><td>est</td><td>erat</td><td>erit</td></tr>
<tr><td>noi</td><td>sumus</td><td>eramus</td><td>erimus</td></tr>
<tr><td>voi</td><td>estis</td><td>eratis</td><td>eritis</td></tr>
<tr><td>essi</td><td>sunt</td><td>erant</td><td>erunt</td></tr>
</table>
<p>L'imperfetto è regolare (tema <i>er-</i> + <i>-am, -as, -at…</i>); il futuro assomiglia a quello della 3ª (<i>-o, -is, -it, -imus, -itis, -unt</i>). Come visto, <i>sum</i> può essere <b>copula</b> (<i>Rosa est pulchra</i>) o <b>predicato verbale</b> (<i>Romae sumus</i>, "siamo a Roma"). I composti di <i>sum</i> si coniugano allo stesso modo: <i>adsum, adesse</i> (sono presente), <i>absum</i> (sono assente), <i>possum</i> (<i>pot-</i> + <i>sum</i>: posso).</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… "amabo" significa anche "per favore"?`,
      html: `<p>In latino <i>amabo te</i> (letteralmente "ti amerò") era una formula di cortesia usata soprattutto nel teatro comico (Plauto), con il valore di "ti prego, per favore". L'italiano "per piacere" ha una funzione simile. E <i>amabo</i> e <i>amabis</i> sono anche forme del futuro: dipende dal contesto.</p>`
    },
    {
      type: `curiosity`, title: `Lo sapevi che… l'italiano ha rinnovato il futuro?`,
      html: `<p>L'italiano <i>amerò</i> non deriva dal futuro latino <i>amabo</i>, ma da una costruzione del latino tardo: <i>amare habeo</i> ("ho da amare"). Per questo il futuro italiano (<i>amer-ò</i>) e quello francese (<i>aimer-ai</i>) contengono la forma abbreviata del verbo "avere" (<i>-ò</i>, <i>-ai</i>). Il futuro sintetico latino scomparve in parte perché le sue forme si confondevano con altre (<i>amabo</i> / <i>amabam</i>, <i>leges</i> presente di 2ª e futuro di 3ª).</p>`
    },
    {
      type: `alternatives`, title: `Altri modi per ricordare le coniugazioni`,
      intro: `Il verbo latino ha tante forme, ma poche regole: scegli il metodo che ti serve.`,
      tabs: [
        {
          label: `🔤 Il segno del tempo`,
          html: `<p>Guarda dove appare la sillaba <b>-ba-</b>:</p>
<ul>
<li><b>-ba-</b> subito dopo il tema ➜ <b>imperfetto</b> (<i>amabam</i>).</li>
<li><b>-bo-, -bi-, -bu-</b> dopo il tema ➜ <b>futuro</b> di 1ª/2ª (<i>amabo, amabit, amabunt</i>).</li>
<li><b>-a-, -e-</b> subito dopo il tema 3ª/4ª ➜ <b>futuro</b> di 3ª/4ª (<i>legam, legent</i>).</li>
<li>Nessun segno ➜ <b>presente</b> (<i>amat, legit</i>).</li>
</ul>`
        },
        {
          label: `📊 Griglia a colori`,
          html: `<p>Disegna una griglia 5 colonne (coniugazioni) × 3 righe (tempi). Usa un colore per le desinenze comuni (<b>-t, -mus, -tis, -nt</b>) e uno diverso per i segni del tempo. Vedrai che la parte difficile è davvero piccola: <b>3 segni</b> (-ba-, -bo/-bi/-bu, -a/-e) + le <b>6 desinenze personali</b>.</p>`
        },
        {
          label: `🔄 Dall'attivo al passivo`,
          html: `<p>La passiva si ottiene cambiando solo le desinenze: <b>-o ➜ -or</b>, <b>-s ➜ -ris</b>, <b>-t ➜ -tur</b>, <b>-mus ➜ -mur</b>, <b>-tis ➜ -mini</b>, <b>-nt ➜ -ntur</b>. Tema e segno del tempo restano uguali. Esempio: <i>amabat</i> ➜ <i>amabatur</i>, <i>legemus</i> ➜ <i>legemur</i>, <i>monebunt</i> ➜ <i>monebuntur</i>.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mappa: l'indicativo`,
      nodes: [
        { id: `verbo`, label: `Il verbo latino`, x: 50, y: 8, color: `#a855f7`, html: `Tema + segno del tempo + desinenza personale; attivo o passivo.`, why: `Il latino ha ereditato dall'indoeuropeo un sistema verbale ricco; nel latino classico i tempi sono 6 per l'indicativo, divisi in tempi del presente (infectum) e del perfetto (perfectum).` },
        { id: `inf`, label: `Infectum`, x: 22, y: 42, color: `#16a34a`, html: `Presente, imperfetto, futuro: formati sul tema del presente.`, why: `Il tema dell'<i>infectum</i> (azione non conclusa) si ricava dall'infinito presente; il tema del <i>perfectum</i> (azione conclusa) dal perfetto, che studierai più avanti.` },
        { id: `coniug`, label: `Quattro coniugazioni`, x: 50, y: 42, color: `#f59e0b`, html: `1ª -āre, 2ª -ēre, 3ª -ĕre, 4ª -īre.`, why: `Dipendono dalla vocale finale del tema (a, e, consonante, i). I grammatici le hanno ordinate così nelle scuole; in realtà sono nate da classi di verbi che l'indoeuropeo formava con suffissi diversi.` },
        { id: `att`, label: `Attivo / passivo`, x: 80, y: 42, color: `#3b82f6`, html: `Desinenze attive -o -s -t -mus -tis -nt; passive -r -ris -tur -mur -mini -ntur.`, why: `La -r della passiva è un elemento antichissimo che si ritrova nel celtico e in altre lingue italiche (osco-umbro): mostra che il passivo in -r è una caratteristica dell'area italo-celtica.` },
        { id: `ba`, label: `-ba- / -bo`, x: 35, y: 78, color: `#ef4444`, html: `Segni dell'imperfetto e del futuro.`, why: `Il suffisso -ba- dell'imperfetto e il futuro in -bo derivano molto probabilmente dalla radice indoeuropea <i>*bhu-</i> "essere, diventare" (la stessa di <i>fui</i> e dell'inglese <i>be</i>): in origine significavano "essere/diventare" unito al tema. Amabam = "ero amante".` },
        { id: `ita`, label: `Italiano`, x: 75, y: 82, color: `#06b6d4`, html: `Presente e imperfetto italiani derivano dal latino; il futuro è rinnovato.`, why: `Italiano <i>amavo</i> ≈ <i>amabam</i>; <i>amo</i> ≈ <i>amo</i>. Il passivo semplice si è perso: oggi si usa <i>essere</i> + participio (<i>sono amato</i>).` }
      ],
      edges: [
        [`verbo`, `inf`, `tempi`], [`verbo`, `coniug`, `si divide in`], [`verbo`, `att`, `diatesi`], [`inf`, `ba`, `segni`], [`coniug`, `ba`, `scelta`], [`ba`, `ita`, `eredità`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: imperfetto, futuro, passivo`,
      questions: [
        { type: `text`, q: `Coniuga "amo" al futuro, 3ª persona singolare (egli amerà).`, answer: [`amabit`], explain: `1ª coniugazione: tema ama- + -bit: amabit.` },
        { type: `mc`, q: `"Audiebamus" significa…`, options: [`noi ascoltavamo`, `noi ascolteremo`, `noi ascoltiamo`], answer: 0, explain: `Tema audi- + -ebamus: imperfetto, 1ª plurale.` },
        { type: `text`, q: `Traduci "essi sono amati" (presente passivo di amo).`, answer: [`amantur`], explain: `Tema ama- + -ntur: amantur.` },
        { type: `mc`, q: `Il futuro di "lego" alla 1ª persona singolare è…`, options: [`legabo`, `legam`, `legebo`], answer: 1, explain: `3ª coniugazione: -am, -es, -et…: legam, leges, leget.` }
      ]
    }
  ],
  glossary: [
    { t: `Paradigma`, d: `Le forme principali di un verbo sul vocabolario (es. amo, amas, amavi, amatum, amare).` },
    { t: `Tema del presente`, d: `Infinito senza -re: ama-, mone-, lege-, audi-.` },
    { t: `Desinenze attive`, d: `-o, -s, -t, -mus, -tis, -nt.` },
    { t: `Desinenze passive`, d: `-r (-or), -ris, -tur, -mur, -mini, -ntur.` },
    { t: `Imperfetto`, d: `Tempo del passato che indica un'azione non conclusa o abituale; segno -ba-.` },
    { t: `Futuro semplice`, d: `Azione che avverrà: -bo/-bi/-bu (1ª e 2ª) o -a/-e (3ª e 4ª).` },
    { t: `Diatesi`, d: `Forma del verbo: attiva (il soggetto agisce) o passiva (il soggetto subisce).` },
    { t: `Complemento d'agente`, d: `Chi compie l'azione nella frase passiva: a/ab + ablativo.` },
    { t: `Copula`, d: `Sum quando unisce soggetto e nome del predicato.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Come si forma il tema del presente?`, options: [`Togliendo -re all'infinito`, `Togliendo -o alla 1ª persona`, `Aggiungendo -bam al presente`], answer: 0, explain: `Esempio: amāre ➜ ama-; audīre ➜ audi-.` },
      { type: `text`, q: `Scrivi la 2ª persona singolare del presente di "moneo" (tu avverti).`, answer: [`mones`], explain: `mone- + -s: mones.` },
      { type: `text`, q: `Scrivi la 3ª persona plurale del presente di "lego".`, answer: [`legunt`], explain: `3ª coniugazione: legunt (vocale -u-).` },
      { type: `mc`, q: `"Monebatis" è…`, options: [`presente, 2ª plurale`, `imperfetto, 2ª plurale`, `futuro, 2ª plurale`], answer: 1, explain: `Segno -ba- + -tis: imperfetto "voi avvertivate".` },
      { type: `mc`, q: `"Audiet" è…`, options: [`futuro, 3ª singolare`, `imperfetto, 3ª singolare`, `presente, 3ª singolare`], answer: 0, explain: `4ª coniugazione, futuro in -et: "egli ascolterà".` },
      { type: `text`, q: `Scrivi "voi sarete" (futuro di sum).`, answer: [`eritis`], explain: `Futuro di sum: ero, eris, erit, erimus, eritis, erunt.` },
      { type: `mc`, q: `"Laudamur" significa…`, options: [`noi lodiamo`, `noi siamo lodati`, `essi sono lodati`], answer: 1, explain: `-mur = 1ª plurale passivo: noi siamo lodati.` },
      { type: `tf`, q: `"Amabo" e "amabam" sono lo stesso tempo.`, answer: false, explain: `Amabo è futuro, amabam è imperfetto.` },
      { type: `mc`, q: `Come si traduce "Puella a matre laudatur"?`, options: [`La ragazza loda la madre`, `La ragazza è lodata dalla madre`, `La madre loda la ragazza`], answer: 1, explain: `Laudatur è passivo: il soggetto puella subisce l'azione; a matre è il complemento d'agente.` },
      { type: `order`, q: `Metti in ordine le desinenze del presente attivo.`, items: [`-o`, `-s`, `-t`, `-mus`, `-tis`, `-nt`], explain: `Prima, seconda, terza singolare, poi prima, seconda, terza plurale.` }
    ]
  }
});

TOPIC('ru', {
  id: `m3-lat-verbo-sum`,
  title: `Глагол sum и спряжения`,
  intro: `<i>Sum, es, est…</i>: латинский глагол <b>«быть»</b> неправильный, как и в итальянском (и в русском!), и его нужно выучить первым. Потом мы увидим, что латинские глаголы делятся на <b>четыре спряжения</b>, которые узнают по <b>инфинитиву</b>, и что <b>настоящее время изъявительного наклонения</b> образуется с помощью шести всегда одинаковых окончаний: <b>-o, -s, -t, -mus, -tis, -nt</b>. С этими несколькими правилами ты сможешь спрягать сотни глаголов! 🏛️✍️`,
  minutes: 45,
  sections: [
    {
      type: `text`, title: `1. Глагол sum (быть)`,
      html: `<table>
<tr><th>Лицо</th><th>Латынь</th><th>Русский</th></tr>
<tr><td>1-е л. ед. ч.</td><td><b>sum</b></td><td>я есть / я нахожусь</td></tr>
<tr><td>2-е л. ед. ч.</td><td><b>es</b></td><td>ты есть</td></tr>
<tr><td>3-е л. ед. ч.</td><td><b>est</b></td><td>он/она есть</td></tr>
<tr><td>1-е л. мн. ч.</td><td><b>sumus</b></td><td>мы есть</td></tr>
<tr><td>2-е л. мн. ч.</td><td><b>estis</b></td><td>вы есть</td></tr>
<tr><td>3-е л. мн. ч.</td><td><b>sunt</b></td><td>они есть</td></tr>
</table>
<p>Парадигма (формы, которые ты найдёшь в словаре): <b>sum, es, fui, esse</b>. <i>Esse</i> — инфинитив («быть»), <i>fui</i> — перфект («был»).</p>
<p>В латыни <b>подлежащее-местоимение</b> обычно <b>не пишется</b>, как и в итальянском: окончания достаточно, чтобы понять, кто это. <i>Sumus amici</i> = (мы) друзья.</p>`
    },
    {
      type: `text`, title: `2. Как используется sum: связка и глагольное сказуемое`,
      html: `<p>Как и в итальянском, у <i>sum</i> два употребления:</p>
<ul>
<li><b>Связка</b>: соединяет подлежащее с именем или прилагательным (<b>именной частью сказуемого</b>), которое стоит в <b>номинативе</b>.<br><i>Rosa <b>est</b> pulchra.</i> = Роза красива. <i>Claudia <b>est</b> poeta.</i> = Клавдия — поэтесса.</li>
<li><b>Глагольное сказуемое</b>: означает «быть, находиться, существовать».<br><i>In silvā <b>est</b> casa.</i> = В лесу есть хижина. <i>Romae <b>sumus</b>.</i> = Мы в Риме.</li>
</ul>
<p>Особое употребление: <b>датив принадлежности</b>. Чтобы сказать «иметь», римляне часто говорили «у кого-то есть» (как по-русски «у меня есть»):</p>
<p><i><b>Mihi</b> est liber.</i> = Мне есть книга ➜ <b>У меня есть</b> книга. <i>Puellae est rosa.</i> = У девочки есть роза.</p>
<p><b>Сложные глаголы с sum</b>: <i>adsum</i> (присутствую), <i>absum</i> (отсутствую), <i>possum</i> (могу, от <i>pot-</i> + <i>sum</i>), <i>prosum</i> (приношу пользу), <i>desum</i> (не хватает).</p>`
    },
    {
      type: `svg`, title: `Sum: основа и окончания`,
      caption: `Личные окончания sum (-m, -s, -t, -mus, -tis, -nt) такие же, как почти у всех латинских глаголов, кроме первого лица.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fdf4ff"/>
<text x="300" y="32" font-size="20" font-weight="bold" fill="#701a75" text-anchor="middle">SUM, ES, FUI, ESSE = быть</text>
<g font-size="24" font-weight="bold">
<rect x="40" y="55" width="240" height="44" rx="8" fill="#ffffff" stroke="#c026d3" stroke-width="2"/><text x="70" y="86" fill="#0f172a">su<tspan fill="#c026d3">m</tspan></text><text x="270" y="86" font-size="17" fill="#475569" text-anchor="end">я есть</text>
<rect x="40" y="105" width="240" height="44" rx="8" fill="#ffffff" stroke="#c026d3" stroke-width="2"/><text x="70" y="136" fill="#0f172a">e<tspan fill="#c026d3">s</tspan></text><text x="270" y="136" font-size="17" fill="#475569" text-anchor="end">ты есть</text>
<rect x="40" y="155" width="240" height="44" rx="8" fill="#ffffff" stroke="#c026d3" stroke-width="2"/><text x="70" y="186" fill="#0f172a">es<tspan fill="#c026d3">t</tspan></text><text x="270" y="186" font-size="17" fill="#475569" text-anchor="end">он есть</text>
<rect x="320" y="55" width="240" height="44" rx="8" fill="#ffffff" stroke="#c026d3" stroke-width="2"/><text x="350" y="86" fill="#0f172a">su<tspan fill="#c026d3">mus</tspan></text><text x="550" y="86" font-size="17" fill="#475569" text-anchor="end">мы есть</text>
<rect x="320" y="105" width="240" height="44" rx="8" fill="#ffffff" stroke="#c026d3" stroke-width="2"/><text x="350" y="136" fill="#0f172a">es<tspan fill="#c026d3">tis</tspan></text><text x="550" y="136" font-size="17" fill="#475569" text-anchor="end">вы есть</text>
<rect x="320" y="155" width="240" height="44" rx="8" fill="#ffffff" stroke="#c026d3" stroke-width="2"/><text x="350" y="186" fill="#0f172a">su<tspan fill="#c026d3">nt</tspan></text><text x="550" y="186" font-size="17" fill="#475569" text-anchor="end">они есть</text>
</g>
<text x="160" y="230" font-size="16" fill="#701a75" text-anchor="middle" font-weight="bold">ЕДИНСТВЕННОЕ</text>
<text x="440" y="230" font-size="16" fill="#701a75" text-anchor="middle" font-weight="bold">МНОЖЕСТВЕННОЕ</text>
<text x="300" y="270" font-size="16" fill="#334155" text-anchor="middle">Две чередующиеся основы: <tspan font-weight="bold">su-</tspan> и <tspan font-weight="bold">es-</tspan> (как в итальянском «sono» / «è»)</text>
</svg>`
    },
    {
      type: `quiz`, title: `Мини-тест: глагол sum`,
      questions: [
        { type: `mc`, q: `«Estis» означает…`, options: [`он есть`, `вы есть`, `они есть`], answer: 1, explain: `estis = 2-е лицо множественного числа: вы есть.` },
        { type: `text`, q: `Как сказать «мы есть» (мы являемся)?`, answer: [`sumus`], explain: `sumus = мы есть.` },
        { type: `mc`, q: `«Mihi est equus» означает…`, options: [`Я — лошадь`, `У меня есть лошадь`, `Лошадь — мой друг`], answer: 1, explain: `Датив принадлежности: у меня есть лошадь.` }
      ]
    },
    {
      type: `text`, title: `3. Четыре спряжения`,
      html: `<p>Правильные латинские глаголы делятся на <b>четыре спряжения</b>, которые узнают по <b>инфинитиву настоящего времени</b> (третьей форме парадигмы):</p>
<table>
<tr><th>Спряжение</th><th>Инфинитив</th><th>Пример (парадигма)</th><th>Значение</th></tr>
<tr><td><b>1-е</b></td><td>-<b>āre</b> (долгое a)</td><td>amo, amas, amavi, amatum, amāre</td><td>любить</td></tr>
<tr><td><b>2-е</b></td><td>-<b>ēre</b> (долгое e)</td><td>moneo, mones, monui, monitum, monēre</td><td>предупреждать</td></tr>
<tr><td><b>3-е</b></td><td>-<b>ĕre</b> (краткое e)</td><td>lego, legis, legi, lectum, legĕre</td><td>читать</td></tr>
<tr><td><b>4-е</b></td><td>-<b>īre</b> (долгое i)</td><td>audio, audis, audivi, auditum, audīre</td><td>слушать</td></tr>
</table>
<p>У 2-го и 3-го спряжений инфинитив пишется одинаково (-ere): их различают по <b>2-му лицу единственного числа</b> в словаре (<i>mones</i> с <b>-es</b> = 2-е; <i>legis</i> с <b>-is</b> = 3-е) и по ударению: <i>monère</i>, но <i>lègere</i>, точно как в итальянском «vedére» и «lèggere».</p>
<p>Есть ещё «смешанное» 3-е спряжение (глаголы на <b>-io</b> с инфинитивом на -ĕre): <i>capio, capis, capĕre</i> (брать), <i>facio</i> (делать).</p>`
    },
    {
      type: `text`, title: `4. Настоящее время: основа + гласная + окончание`,
      html: `<p>Активные <b>личные окончания</b> всегда такие: <b>-o, -s, -t, -mus, -tis, -nt</b>.</p>
<table>
<tr><th></th><th>1-е amāre</th><th>2-е monēre</th><th>3-е legĕre</th><th>4-е audīre</th><th>3-е смешанное capĕre</th></tr>
<tr><td>я</td><td>am<b>o</b></td><td>mone<b>o</b></td><td>leg<b>o</b></td><td>audi<b>o</b></td><td>capi<b>o</b></td></tr>
<tr><td>ты</td><td>ama<b>s</b></td><td>mone<b>s</b></td><td>legi<b>s</b></td><td>audi<b>s</b></td><td>capi<b>s</b></td></tr>
<tr><td>он</td><td>ama<b>t</b></td><td>mone<b>t</b></td><td>legi<b>t</b></td><td>audi<b>t</b></td><td>capi<b>t</b></td></tr>
<tr><td>мы</td><td>ama<b>mus</b></td><td>mone<b>mus</b></td><td>legi<b>mus</b></td><td>audi<b>mus</b></td><td>capi<b>mus</b></td></tr>
<tr><td>вы</td><td>ama<b>tis</b></td><td>mone<b>tis</b></td><td>legi<b>tis</b></td><td>audi<b>tis</b></td><td>capi<b>tis</b></td></tr>
<tr><td>они</td><td>ama<b>nt</b></td><td>mone<b>nt</b></td><td>leg<b>unt</b></td><td>audi<b>unt</b></td><td>capi<b>unt</b></td></tr>
</table>
<p><b>Как образуется</b>: отбрось <b>-re</b> от инфинитива, и получишь <b>основу настоящего времени</b> (<i>ama-, mone-, audi-</i>); потом добавь окончания.</p>
<ul>
<li>1-е: гласная <i>a</i> основы исчезает перед -o: <s>amao</s> ➜ <b>amo</b>.</li>
<li>3-е: основа оканчивается на согласную (<i>leg-</i>): добавляется соединительная гласная <b>-i-</b> (<i>legis, legit</i>) и <b>-u-</b> в 3-м лице множественного числа (<i>legunt</i>).</li>
<li>4-е и 3-е смешанное: 3-е лицо множественного числа на <b>-iunt</b> (<i>audiunt, capiunt</i>).</li>
</ul>`
    },
    {
      type: `widget`, title: `Игра: к какому спряжению относится глагол?`,
      widget: `classify`,
      options: {
        groups: [`1-е -āre`, `2-е -ēre`, `3-е -ĕre`, `4-е -īre`],
        items: [
          [`laudo, laudas, laudāre (хвалить)`, 0], [`porto, portas, portāre (нести)`, 0], [`navigo, navigas, navigāre (плыть)`, 0],
          [`video, vides, vidēre (видеть)`, 1], [`habeo, habes, habēre (иметь)`, 1], [`timeo, times, timēre (бояться)`, 1],
          [`scribo, scribis, scribĕre (писать)`, 2], [`mitto, mittis, mittĕre (посылать)`, 2], [`dico, dicis, dicĕre (говорить)`, 2],
          [`dormio, dormis, dormīre (спать)`, 3], [`venio, venis, venīre (приходить)`, 3], [`sentio, sentis, sentīre (чувствовать)`, 3]
        ]
      },
      caption: `Посмотри на инфинитив и, для -ere, на второе лицо: -es (2-е) или -is (3-е)?`
    },
    {
      type: `example`, title: `Пример из жизни: перекличка в классе`,
      html: `<p>В Риме, как и сегодня во многих школах, когда учитель называл имена, ученики отвечали:</p>
<ul>
<li><i><b>Adsum!</b></i> = Я здесь! (сложное слово от sum: ad + sum)</li>
<li>А если кого-то не было: <i>Marcus <b>abest</b>.</i> = Марк отсутствует.</li>
</ul>
<p>До сих пор в некоторых школах и университетах отвечают «Adsum!». А итальянские слова «assente» (отсутствующий) и «presente» (присутствующий) происходят от <i>absens</i> и <i>praesens</i> — причастий от сложных глаголов с <i>sum</i>.</p>`
    },
    {
      type: `example`, title: `Пример из жизни: перевод короткой фразы`,
      html: `<p><i>Discipuli in scholā sunt; magistra fabulam narrat et discipuli audiunt.</i></p>
<ol>
<li><i>sunt</i> = находятся (глагольное сказуемое: «они находятся») ➜ <i>discipuli</i> номинатив множественного числа = ученики.</li>
<li><i>in scholā</i> = in + аблатив = в школе (место).</li>
<li><i>narrat</i> = рассказывает (1-е спряжение, 3-е лицо ед. ч.); <i>magistra</i> = учительница; <i>fabulam</i> = сказку (аккузатив).</li>
<li><i>audiunt</i> = слушают (4-е спряжение, 3-е лицо мн. ч., окончание -iunt).</li>
</ol>
<p>➜ <b>Ученики в школе; учительница рассказывает сказку, а ученики слушают.</b></p>`
    },
    {
      type: `curiosity`, title: `А ты знал, что… «sum» до сих пор живёт во многих языках?`,
      html: `<p>Сравни настоящее время глагола «быть»:</p>
<ul>
<li>🇮🇹 sono, sei, è, siamo, siete, sono</li>
<li>🇷🇴 румынский: <b>sunt</b>, ești, este, suntem, sunteți, <b>sunt</b> (почти как в латыни!)</li>
<li>🇪🇸 испанский: soy, eres, es, somos, sois, son</li>
<li>🇫🇷 французский: suis, es, est, sommes, êtes, sont</li>
</ul>
<p>А в неромантических языках: немецкое <i>ist</i>, английское <i>is</i>, русское <i>есть</i>, санскритское <i>asti</i>: все они происходят от одного индоевропейского корня <b>*es-</b>. Знаменитое <i>Cogito, ergo sum</i> (я мыслю, следовательно, я существую) принадлежит французскому философу <b>Декарту</b> (1644, в <i>Principia philosophiae</i>).</p>`
    },
    {
      type: `curiosity`, title: `А ты знал, что… «audio», «video» и «deficit» — латинские глаголы?`,
      html: `<p>Мы каждый день используем спряжённые латинские глаголы, сами того не зная:</p>
<ul>
<li><b>audio</b> = я слушаю (4-е спряжение);</li>
<li><b>video</b> = я вижу (2-е спряжение);</li>
<li><b>deficit</b> = не хватает (3-е лицо ед. ч. от <i>deficio</i>);</li>
<li><b>exit</b> = выходит (от глагола <i>exeo</i>), надпись на аварийных выходах;</li>
<li><b>placebo</b> = понравлюсь (будущее время от <i>placeo</i>).</li>
</ul>`
    },
    {
      type: `remember`, title: `Запомни`,
      html: `<ul>
<li><b>sum, es, est, sumus, estis, sunt</b> (парадигма: sum, es, fui, esse).</li>
<li>Sum = связка (+ именная часть сказуемого в номинативе) или «быть, находиться». <i>Mihi est</i> = у меня есть.</li>
<li>4 спряжения: -āre, -ēre, -ĕre, -īre.</li>
<li>Настоящее время: основа + <b>-o, -s, -t, -mus, -tis, -nt</b> (3-е: -unt; 4-е и смешанное: -iunt).</li>
<li>Подлежащее-местоимение обычно опускается.</li>
</ul>`
    },
    {
      type: `alternatives`, title: `Другие способы понять тему`,
      intro: `Таблицы глаголов можно выучить разными способами: найди свой.`,
      tabs: [
        {
          label: `🎵 Напев`,
          html: `<p>В английских школах дети учат окончания, напевая: <b>«O – S – T – MUS – TIS – NT!»</b> (читается «о, эс, ти, мус, тис, энт»), хлопая в ладоши на каждом слоге.</p>
<p>Потом этот ритм «прикладывают» к каждому глаголу: <i>a-mo, a-mas, a-mat, a-ma-mus, a-ma-tis, a-mant!</i> В Италии делают то же со стишком: <i>sum, es, est, sumus, estis, sunt</i>.</p>`
        },
        {
          label: `🧱 Основа + кирпичик`,
          html: `<p>Представь глагол как базовый кирпичик (<b>основу</b>), в который вставляется цветной кирпичик (<b>окончание</b>), показывающий, <b>кто</b> совершает действие.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0fdf4"/>
<rect x="40" y="90" width="170" height="70" rx="6" fill="#16a34a"/>
<circle cx="80" cy="85" r="10" fill="#16a34a"/><circle cx="125" cy="85" r="10" fill="#16a34a"/><circle cx="170" cy="85" r="10" fill="#16a34a"/>
<text x="125" y="135" font-size="30" fill="#fff" text-anchor="middle" font-weight="bold">ama-</text>
<text x="125" y="190" font-size="15" fill="#166534" text-anchor="middle">основа (= любить)</text>
<text x="235" y="135" font-size="34" fill="#0f172a" text-anchor="middle">+</text>
<g font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">
<rect x="270" y="30" width="80" height="44" rx="6" fill="#ef4444"/><text x="310" y="59">-s</text>
<rect x="270" y="80" width="80" height="44" rx="6" fill="#f97316"/><text x="310" y="109">-t</text>
<rect x="270" y="130" width="80" height="44" rx="6" fill="#3b82f6"/><text x="310" y="159">-mus</text>
<rect x="270" y="180" width="80" height="44" rx="6" fill="#a855f7"/><text x="310" y="209">-nt</text>
</g>
<g font-size="17" fill="#0f172a">
<text x="380" y="59">amas = ты любишь</text>
<text x="380" y="109">amat = он любит</text>
<text x="380" y="159">amamus = мы любим</text>
<text x="380" y="209">amant = они любят</text>
</g>
</svg>`
        },
        {
          label: `🇪🇸 Как в испанском и румынском`,
          html: `<p>Если ты знаешь <b>испанский</b>, латинское настоящее время покажется знакомым:</p>
<table>
<tr><th>Латынь</th><th>Испанский</th><th>Румынский</th><th>Русский</th></tr>
<tr><td>amo</td><td>amo</td><td>(eu) iubesc</td><td>люблю</td></tr>
<tr><td>amas</td><td>amas</td><td>iubești</td><td>любишь</td></tr>
<tr><td>amat</td><td>ama</td><td>iubește</td><td>любит</td></tr>
<tr><td>amamus</td><td>amamos</td><td>iubim</td><td>любим</td></tr>
<tr><td>amatis</td><td>amáis</td><td>iubiți</td><td>любите</td></tr>
<tr><td>amant</td><td>aman</td><td>iubesc</td><td>любят</td></tr>
</table>
<p>Испанский сохранил <b>-s</b> 2-го лица; итальянский превратил её в <b>-i</b> (<i>amas</i> ➜ ami). Румынский использует другой глагол для «любить», но прекрасно сохранил <i>sum</i>: <b>sunt</b>!</p>`
        },
        {
          label: `🧩 Соедини латынь и русский`,
          html: `<p>Соедини каждую латинскую глагольную форму с переводом.</p>`,
          widget: `match`,
          options: { pairs: [
            [`sunt`, `они есть`],
            [`es`, `ты есть`],
            [`laudamus`, `мы хвалим`],
            [`videtis`, `вы видите`],
            [`legunt`, `они читают`],
            [`audit`, `он слушает`],
            [`adsum`, `я присутствую`]
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Карта: латинский глагол`,
      nodes: [
        { id: `verbo`, label: `Латинский глагол`, x: 50, y: 6, color: `#64748b`, html: `Обозначает действие или состояние; меняется по лицу, числу, времени, наклонению.`, why: `Как и имена, индоевропейские глаголы были очень флективными: одно слово (<i>amamus</i>) говорит, кто, сколько, когда и как.` },
        { id: `sum`, label: `Sum`, x: 15, y: 30, color: `#c026d3`, html: `Неправильный глагол «быть»: sum, es, fui, esse.`, why: `Происходит от индоевропейского корня <b>*es-</b> (быть); перфект <i>fui</i> — от другого корня, <b>*bhu-</b> (становиться, расти), того же, что в английском <i>be</i>. Поэтому он неправильный: объединяет два древних глагола.` },
        { id: `cop`, label: `Связка / сказуемое`, x: 15, y: 60, color: `#e879f9`, html: `Соединяет подлежащее и именную часть сказуемого или означает «находиться».`, why: `Термин «связка» (copula) происходит от латинского <i>copula</i> = связь: как крючок, который соединяет подлежащее с его качеством.` },
        { id: `poss`, label: `Датив принадлежности`, x: 15, y: 88, color: `#a21caf`, html: `Mihi est liber = у меня есть книга.`, why: `Во многих древних языках принадлежность выражали как «у меня есть». Так и сейчас говорят по-русски (<i>у меня есть</i>) и по-ирландски.` },
        { id: `con`, label: `4 спряжения`, x: 55, y: 30, color: `#22c55e`, html: `-āre, -ēre, -ĕre, -īre.`, why: `Зависят от конечной гласной основы (a, e, согласная/краткая, i). Грамматик Элий Донат (IV век) насчитывал три, считая 3-е и 4-е вариантами одной группы; деление на четыре утвердилось позже в школьных грамматиках.` },
        { id: `tema`, label: `Основа настоящего времени`, x: 40, y: 60, color: `#16a34a`, html: `Инфинитив без -re: ama-, mone-, audi-.`, why: `Основа — это «удлинённый корень», несущий значение: отбросив окончание инфинитива, выделяем устойчивую часть.` },
        { id: `des`, label: `Окончания -o -s -t -mus -tis -nt`, x: 75, y: 60, color: `#3b82f6`, html: `Показывают лицо и число.`, why: `Это очень древние индоевропейские окончания: <i>-mus</i> и <i>-t</i> встречаются в греческом (<i>-men</i>, <i>-ti</i>) и в санскрите (<i>-masi</i>, <i>-ti</i>). Буква -m в <i>sum</i> — древнее 1-е лицо, которое у других глаголов превратилось в -o.` },
        { id: `ita`, label: `Наследие романских языков`, x: 75, y: 88, color: `#f59e0b`, html: `Итальянский, испанский, французский, румынский, португальский.`, why: `Латынь, на которой говорили по всей империи, медленно превратилась в романские языки: испанское <i>amas</i> и румынское <i>sunt</i> остались почти такими же, как в оригинале.` }
      ],
      edges: [
        [`verbo`, `sum`, `неправильный`], [`verbo`, `con`, `правильные`], [`sum`, `cop`, `употребления`], [`sum`, `poss`, `употребление`],
        [`con`, `tema`, `находится`], [`tema`, `des`, `+`], [`des`, `ita`, `сохраняются`]
      ]
    },
    {
      type: `quiz`, title: `Мини-тест: спряжения`,
      questions: [
        { type: `mc`, q: `«Спать» по-латыни (dormio, dormis, dormīre) относится к…`, options: [`1-му спряжению`, `3-му спряжению`, `4-му спряжению`], answer: 2, explain: `Инфинитив на -īre: 4-е спряжение.` },
        { type: `text`, q: `Проспрягай «laudo» (хвалить) в 3-м лице множественного числа.`, answer: [`laudant`], explain: `lauda- + nt = laudant (они хвалят).` },
        { type: `mc`, q: `«Legimus» означает…`, options: [`читаете`, `читаем`, `читают`], answer: 1, explain: `-mus = мы: legimus = мы читаем.` }
      ]
    }
  ],
  glossary: [
    { t: `Парадигма`, d: `Набор форм, по которым спрягают глагол (например, amo, amas, amavi, amatum, amare).` },
    { t: `Спряжение`, d: `Группа глаголов, изменяющихся одинаково; в латыни их четыре.` },
    { t: `Основа настоящего времени`, d: `Часть глагола, которую получают, отбрасывая -re от инфинитива.` },
    { t: `Личное окончание`, d: `Окончание, указывающее лицо и число: -o, -s, -t, -mus, -tis, -nt.` },
    { t: `Связка`, d: `Глагол «быть», когда он соединяет подлежащее и именную часть сказуемого.` },
    { t: `Именная часть сказуемого`, d: `Имя или прилагательное, которое вместе со связкой что-то сообщает о подлежащем; стоит в номинативе.` },
    { t: `Датив принадлежности`, d: `Конструкция «mihi est» = у меня есть.` },
    { t: `Adsum`, d: `«Я присутствую», сложное слово от sum.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `order`, q: `Расставь по порядку настоящее время sum.`, items: [`sum`, `es`, `est`, `sumus`, `estis`, `sunt`], explain: `я есть, ты есть, он есть, мы есть, вы есть, они есть.` },
      { type: `mc`, q: `«Est» означает…`, options: [`ты есть`, `он есть`, `они есть`], answer: 1, explain: `est = 3-е лицо единственного числа.` },
      { type: `mc`, q: `В предложении «Rosa est pulchra» слово «pulchra» — это…`, options: [`прямое дополнение`, `именная часть сказуемого`, `косвенное дополнение`], answer: 1, explain: `При связке: именная часть сказуемого, в номинативе.` },
      { type: `text`, q: `Как по-латыни «вы есть»?`, answer: [`estis`], explain: `estis.` },
      { type: `mc`, q: `Какой инфинитив относится ко 2-му спряжению?`, options: [`portāre`, `vidēre`, `mittĕre`], answer: 1, explain: `-ēre с долгим e: vidēre (видеть).` },
      { type: `text`, q: `Напиши 1-е лицо множественного числа от «amo» (мы любим).`, answer: [`amamus`], explain: `ama- + mus = amamus.` },
      { type: `text`, q: `Напиши 3-е лицо множественного числа от «audio» (они слушают).`, answer: [`audiunt`], explain: `4-е спряжение: audi- + unt = audiunt.` },
      { type: `tf`, q: `У «legunt» окончание -unt, потому что «lego» относится к 3-му спряжению.`, answer: true, explain: `3-е спряжение: 3-е лицо множественного числа на -unt.` },
      { type: `tf`, q: `В латыни подлежащее-местоимение пишется всегда.`, answer: false, explain: `Обычно его опускают: окончание уже показывает лицо.` },
      { type: `mc`, q: `«Puero est canis» означает…`, options: [`Мальчик — собака`, `У мальчика есть собака`, `Собака принадлежит бегущему мальчику`], answer: 1, explain: `Датив принадлежности: у мальчика есть собака.` },
      { type: `mc`, q: `«Video» по-латыни означает…`, options: [`я вижу`, `видеозапись`, `ты видишь`], answer: 0, explain: `video, vides, vidēre: 1-е лицо единственного числа = я вижу.` },
      { type: `num`, q: `Сколько правильных латинских спряжений?`, answer: 4, tol: 0, explain: `-āre, -ēre, -ĕre, -īre.` }
    ]
  }
});

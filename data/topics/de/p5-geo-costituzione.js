TOPIC('de', {
  id: `p5-geo-costituzione`,
  title: `Die Verfassung und der Staat`,
  intro: `Jedes Spiel hat seine Regeln, und auch ein Land braucht Regeln, die für alle gelten. In Italien ist die wichtigste Regel von allen die <b>Verfassung</b>. Heute entdecken wir, wie sie entstanden ist, was in ihr steht und wie der <b>Staat</b> funktioniert: <b>Parlament</b>, <b>Regierung</b> und <b>Justiz</b>.`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Was ist ein Staat?`,
      html: `<p>Ein <b>Staat</b> existiert, wenn drei Elemente zusammenkommen:</p>
<ul>
<li>das <b>Volk</b>: die Menschen, die Bürgerinnen und Bürger dieses Staates sind (in Italien etwa 59 Millionen);</li>
<li>das <b>Staatsgebiet</b>: das Land, das Meer vor der Küste und der Himmel darüber, innerhalb der Grenzen;</li>
<li>die <b>Souveränität</b>: die Macht, die eigenen Gesetze zu beschließen, ohne anderen Staaten gehorchen zu müssen.</li>
</ul>
<p>Italien ist eine <b>Republik</b>: Das Staatsoberhaupt ist kein König, der den Thron erbt, sondern ein <b>Präsident</b>, der für eine begrenzte Zeit gewählt wird. Und es ist eine <b>Demokratie</b>: Die Macht gehört dem Volk, das sie vor allem durch <b>Wahlen</b> ausübt.</p>`
    },
    {
      type: `text`, title: `2. Wie die Verfassung entstand`,
      html: `<p>Machen wir einen Schritt zurück, ans Ende des <b>Zweiten Weltkriegs</b> (1945). Italien war zwanzig Jahre lang vom <b>Faschismus</b> regiert worden, einer Diktatur, die den Menschen die Freiheit genommen hatte, und der König hatte dieses Regime unterstützt.</p>
<ol>
<li><b>2. Juni 1946</b>: Die Italiener stimmen in einer <b>Volksabstimmung</b> ab und wählen die <b>Republik</b> statt der Monarchie. Zum ersten Mal bei einer landesweiten Wahl stimmen auch die <b>Frauen</b> ab!</li>
<li>Am selben Tag wählen sie die <b>Verfassunggebende Versammlung</b>: 556 Personen (21 davon Frauen) mit sehr unterschiedlichen politischen Ansichten, die gemeinsam die neuen Regeln schreiben sollten.</li>
<li><b>22. Dezember 1947</b>: Die Versammlung nimmt die Verfassung mit 453 Stimmen dafür und 62 dagegen an.</li>
<li><b>1. Januar 1948</b>: Die Verfassung tritt in Kraft. Seitdem ist sie das <b>Grundgesetz</b> Italiens.</li>
</ol>
<p>Deshalb ist der <b>2. Juni</b> der <b>Tag der Republik</b>.</p>`
    },
    {
      type: `widget`, title: `Der Weg zur Verfassung`,
      widget: `timeline`,
      caption: `Tippe auf die Ereignisse, um zu sehen, wie es zur heutigen Verfassung kam.`,
      options: {
        unit: `Jahre`,
        events: [
          { year: 1848, label: `Albertinisches Statut (Regeln des Königreichs Sardinien, später Italiens)`, icon: `📜` },
          { year: 1861, label: `Das Königreich Italien entsteht`, icon: `🇮🇹` },
          { year: 1922, label: `Die faschistische Diktatur beginnt`, icon: `⛓️` },
          { year: 1945, label: `Ende des Zweiten Weltkriegs`, icon: `🕊️` },
          { year: 1946, label: `Volksabstimmung: Die Republik siegt, die Frauen stimmen ab`, icon: `🗳️` },
          { year: 1948, label: `Die Verfassung tritt in Kraft (1. Januar)`, icon: `📘` }
        ]
      }
    },
    {
      type: `text`, title: `3. Wie die Verfassung aufgebaut ist`,
      html: `<p>Die Verfassung hat <b>139 Artikel</b> (einige wurden später gestrichen) und 18 Schlussbestimmungen. Sie ist so gegliedert:</p>
<table>
<tr><th>Teil</th><th>Artikel</th><th>Wovon sie handelt</th></tr>
<tr><td><b>Grundprinzipien</b></td><td>1–12</td><td>Die Grundideen: Demokratie, Gleichheit, Arbeit, Frieden, Schutz der Umwelt …</td></tr>
<tr><td><b>Teil I</b> – Rechte und Pflichten der Bürger</td><td>13–54</td><td>Persönliche Freiheit, Schule, Gesundheit, Wahlrecht, Steuern zahlen …</td></tr>
<tr><td><b>Teil II</b> – Ordnung der Republik</td><td>55–139</td><td>Wie Parlament, Präsident, Regierung, Justiz, Regionen und Gemeinden funktionieren.</td></tr>
</table>
<p>Einige Artikel, die man kennen sollte:</p>
<ul>
<li><b>Art. 1</b>: „Italien ist eine demokratische, auf die Arbeit gegründete Republik. Die Souveränität gehört dem Volk …“</li>
<li><b>Art. 3</b>: Alle Bürger sind vor dem Gesetz <b>gleich</b>, ohne Unterschied des Geschlechts, der Rasse, der Sprache, der Religion, der politischen Meinung, der persönlichen und sozialen Verhältnisse.</li>
<li><b>Art. 9</b>: Die Republik schützt die Landschaft, die Kultur und (seit 2022) auch die <b>Umwelt</b> und die <b>Tiere</b>.</li>
<li><b>Art. 11</b>: Italien <b>lehnt den Krieg ab</b> als Mittel zur Lösung von Streitigkeiten zwischen Völkern.</li>
<li><b>Art. 12</b>: Die Flagge ist die <b>Trikolore</b> in Grün, Weiß und Rot, mit drei senkrechten Streifen.</li>
<li><b>Art. 34</b>: Die Schule steht allen offen; die Grundschulbildung ist verpflichtend und kostenlos.</li>
</ul>`
    },
    {
      type: `quiz`, title: `Mini-Quiz: die Entstehung der Verfassung`,
      questions: [
        { type: `mc`, q: `An welchem Tag wählten die Italiener die Republik?`, options: [`25. April 1945`, `2. Juni 1946`, `1. Januar 1948`], answer: 1, explain: `Die Volksabstimmung fand am 2. Juni 1946 statt: Deshalb ist das der Tag der Republik.` },
        { type: `tf`, q: `Die italienische Verfassung ist am 1. Januar 1948 in Kraft getreten.`, answer: true, explain: `Beschlossen am 22. Dezember 1947, gilt sie seit dem 1. Januar 1948.` },
        { type: `mc`, q: `Welcher Artikel sagt, dass alle Bürger vor dem Gesetz gleich sind?`, options: [`Art. 1`, `Art. 3`, `Art. 12`], answer: 1, explain: `Es ist Artikel 3, der Gleichheitsgrundsatz.` }
      ]
    },
    {
      type: `text`, title: `4. Die drei Gewalten: Wer macht was`,
      html: `<p>Damit nicht eine einzelne Person alle Macht hat (wie es in einer Diktatur geschieht), <b>teilt</b> die Verfassung sie <b>in drei</b>. Das ist die <b>Gewaltenteilung</b>:</p>
<ul>
<li>⚖️ <b>Gesetzgebende Gewalt (Legislative)</b> = <b>Gesetze machen</b>. Sie liegt beim <b>Parlament</b>, das aus zwei „Kammern“ besteht: der <b>Abgeordnetenkammer</b> (400 Abgeordnete, im Palazzo Montecitorio) und dem <b>Senat der Republik</b> (200 gewählte Senatoren plus einige Senatoren auf Lebenszeit, im Palazzo Madama). Abgeordnete und Senatoren werden alle <b>5 Jahre</b> von den Bürgern gewählt.</li>
<li>🏛️ <b>Ausführende Gewalt (Exekutive)</b> = <b>die Gesetze umsetzen</b> und das Land jeden Tag regieren. Sie liegt bei der <b>Regierung</b>: dem <b>Ministerpräsidenten</b> (Präsident des Ministerrats) und den <b>Ministern</b> (für Bildung, Gesundheit, Wirtschaft …). Ihr Sitz ist der Palazzo Chigi. Die Regierung muss das <b>Vertrauen</b> des Parlaments haben.</li>
<li>👩‍⚖️ <b>Rechtsprechende Gewalt (Judikative)</b> = <b>kontrollieren, dass die Gesetze eingehalten werden</b>, und über die urteilen, die sie verletzen. Sie liegt bei der <b>Justiz</b> (Richter und Staatsanwälte), die von allen anderen Gewalten <b>unabhängig</b> ist.</li>
</ul>
<p>Über den Parteien steht der <b>Präsident der Republik</b>, das <b>Staatsoberhaupt</b>: Er verkörpert die Einheit des Landes, unterzeichnet (verkündet) die Gesetze, ernennt den Ministerpräsidenten und ist Oberbefehlshaber der Streitkräfte. Er wird vom Parlament (zusammen mit 58 Delegierten der Regionen) gewählt, bleibt <b>7 Jahre</b> im Amt und wohnt im <b>Quirinal</b>.</p>
<p>Darüber, dass die Gesetze der Verfassung entsprechen, wacht das <b>Verfassungsgericht</b> (15 Richter).</p>`
    },
    {
      type: `svg`, title: `Das Schema der Staatsgewalten`,
      caption: `Die Bürger wählen das Parlament; das Parlament spricht der Regierung das Vertrauen aus; die Justiz ist unabhängig. Der Präsident der Republik sorgt für das Gleichgewicht.`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#f8fafc"/>
<rect x="190" y="12" width="220" height="56" rx="12" fill="#a855f7"/>
<text x="300" y="36" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Präsident der</text>
<text x="300" y="56" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">Republik (7 Jahre)</text>
<rect x="20" y="120" width="170" height="90" rx="12" fill="#3b82f6"/>
<text x="105" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">PARLAMENT</text>
<text x="105" y="170" font-size="14" text-anchor="middle" fill="#ffffff">Kammer + Senat</text>
<text x="105" y="192" font-size="14" text-anchor="middle" fill="#ffffff">MACHT die Gesetze</text>
<rect x="215" y="120" width="170" height="90" rx="12" fill="#22c55e"/>
<text x="300" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">REGIERUNG</text>
<text x="300" y="170" font-size="14" text-anchor="middle" fill="#ffffff">Premier + Minister</text>
<text x="300" y="192" font-size="14" text-anchor="middle" fill="#ffffff">WENDET Gesetze AN</text>
<rect x="410" y="120" width="170" height="90" rx="12" fill="#ef4444"/>
<text x="495" y="148" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">JUSTIZ</text>
<text x="495" y="170" font-size="14" text-anchor="middle" fill="#ffffff">unabhängige Richter</text>
<text x="495" y="192" font-size="14" text-anchor="middle" fill="#ffffff">SETZT Gesetze DURCH</text>
<line x1="190" y1="165" x2="215" y2="165" stroke="#0f172a" stroke-width="3"/>
<text x="202" y="110" font-size="13" text-anchor="middle" fill="#0f172a">Vertrauen</text>
<line x1="250" y1="68" x2="120" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="300" y1="68" x2="300" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<line x1="350" y1="68" x2="480" y2="120" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>
<rect x="120" y="262" width="360" height="60" rx="14" fill="#facc15"/>
<text x="300" y="290" font-size="18" text-anchor="middle" fill="#713f12" font-weight="bold">👥 DIE BÜRGER (souveränes Volk)</text>
<text x="300" y="310" font-size="14" text-anchor="middle" fill="#713f12">wählen ab 18 Jahren</text>
<line x1="160" y1="262" x2="105" y2="212" stroke="#ca8a04" stroke-width="4"/>
<text x="90" y="245" font-size="14" fill="#713f12" font-weight="bold">wählen</text>
</svg>`
    },
    {
      type: `widget`, title: `Spiel: Wer macht das?`,
      widget: `classify`,
      caption: `Ordne jede Handlung der richtigen Gewalt zu.`,
      options: {
        groups: [`⚖️ Parlament`, `🏛️ Regierung`, `👩‍⚖️ Justiz`],
        items: [
          [`Beschließt ein neues Gesetz über die Schule`, 0], [`Spricht der Regierung das Vertrauen aus`, 0], [`Berät und ändert einen Gesetzentwurf`, 0],
          [`Die Ministerin entscheidet, wie das Geld für die Schulen ausgegeben wird`, 1], [`Führt das Land jeden Tag`, 1], [`Schlägt den Staatshaushalt vor`, 1],
          [`Ein Richter entscheidet, wer in einem Streit recht hat`, 2], [`Verhandelt gegen den, der eine Straftat begangen hat`, 2]
        ]
      }
    },
    {
      type: `example`, title: `Beispiel aus der Praxis: Wie ein Gesetz entsteht`,
      html: `<p>Stell dir ein Gesetz vor, das vorschreibt, mehr Bäume in der Nähe von Schulen zu pflanzen.</p>
<ol>
<li><b>Vorschlag</b>: Ihn können die Regierung, ein Parlamentarier, eine Region, der CNEL (Nationalrat für Wirtschaft und Arbeit) oder <b>50.000 Bürger</b> mit ihren Unterschriften einbringen.</li>
<li><b>Beratung und Abstimmung in der Kammer</b>: Die Abgeordneten beraten darüber, ändern es und stimmen ab.</li>
<li><b>Beratung und Abstimmung im Senat</b>: Auch der Senat muss es <b>mit demselben Text</b> annehmen. Wenn sich etwas ändert, geht es zurück an die Kammer (das nennt man „Pendeln“, <i>navetta</i>).</li>
<li><b>Verkündung</b>: Der Präsident der Republik unterschreibt es (oder schickt es, wenn er nicht überzeugt ist, einmal an die Kammern zurück).</li>
<li><b>Veröffentlichung</b> im <b>Amtsblatt</b> (<i>Gazzetta Ufficiale</i>): Von da an, meist nach 15 Tagen, gilt es für alle.</li>
</ol>`
    },
    {
      type: `example`, title: `Beispiel aus der Praxis: Die Verfassung in deinem Tag`,
      html: `<ul>
<li>🏫 Du gehst kostenlos zur Schule: <b>Art. 34</b> (Recht auf Bildung).</li>
<li>🏥 Wenn du krank bist, wirst du behandelt, auch wenn du nicht zahlen kannst: <b>Art. 32</b> (Recht auf Gesundheit).</li>
<li>💬 Du darfst sagen, was du denkst, wenn du die anderen respektierst: <b>Art. 21</b> (Meinungsfreiheit).</li>
<li>⛪🕌🕍 Jeder darf der Religion folgen, die er will, oder keiner: <b>Art. 19</b>.</li>
<li>🧾 Deine Eltern zahlen Steuern je nachdem, wie viel sie verdienen: <b>Art. 53</b> (das ist eine <b>Pflicht</b>).</li>
<li>🌳 Der Park in der Nähe deines Hauses ist geschützt: <b>Art. 9</b>.</li>
</ul>
<p>Die Verfassung gibt nicht nur <b>Rechte</b>: Sie verlangt auch <b>Pflichten</b>, wie die Gesetze zu beachten, Steuern zu zahlen und anderen zu helfen (Art. 2: „unabdingbare Pflichten der Solidarität“).</p>`
    },
    {
      type: `text`, title: `5. Der Staat in deiner Nähe: Regionen und Gemeinden`,
      html: `<p>Die Republik ist nicht nur in Rom. Nach <b>Art. 114</b> besteht sie aus:</p>
<ul>
<li><b>Gemeinden</b> (etwa 7.900): geleitet vom <b>Bürgermeister</b> und vom Gemeinderat. Sie kümmern sich um Straßen, Grund- und Mittelschulen, Müll, Einwohnermeldeamt.</li>
<li><b>Metropolstädten</b> (14, wie Turin, Mailand, Rom, Neapel) und <b>Provinzen</b>.</li>
<li><b>Regionen</b> (20): Sie haben einen <b>Präsidenten</b> und einen Regionalrat; sie kümmern sich vor allem um Gesundheitswesen und lokalen Verkehr. 5 haben ein <b>Sonderstatut</b> (Aostatal, Trentino-Südtirol, Friaul-Julisch Venetien, Sizilien, Sardinien) und mehr Selbstverwaltung.</li>
<li>dem <b>Staat</b>.</li>
</ul>`
    },
    {
      type: `remember`, title: `Das solltest du dir merken`,
      html: `<ul>
<li>Verfassung: beschlossen am <b>22.12.1947</b>, in Kraft seit dem <b>1.1.1948</b>, <b>139 Artikel</b>.</li>
<li><b>Parlament</b> (Kammer 400 + Senat 200) → macht die Gesetze.</li>
<li><b>Regierung</b> (Ministerpräsident + Minister) → wendet die Gesetze an.</li>
<li><b>Justiz</b> → urteilt, unabhängig.</li>
<li><b>Präsident der Republik</b> → Staatsoberhaupt, 7 Jahre, Quirinal.</li>
</ul>`
    },
    {
      type: `curiosity`, title: `Wusstest du schon…? Es gab 21 „Mütter der Verfassung“`,
      html: `<p>In der Verfassunggebenden Versammlung saßen 21 Frauen unter 556 Mitgliedern. Es waren wenige, aber entscheidende: Auch dank ihnen steht in Artikel 3, dass alle gleich sind, „<b>ohne Unterschied des Geschlechts</b>“. Unter ihnen waren <b>Nilde Iotti</b>, die später die erste Frau als Präsidentin der Abgeordnetenkammer wurde, und <b>Teresa Mattei</b>, die jüngste: Sie war 25 Jahre alt.</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du schon…? Man kann die Verfassung ändern, aber nicht allzu leicht`,
      html: `<p>Ein normales Gesetz wird mit einer Abstimmung pro Kammer beschlossen. Um die Verfassung zu ändern, muss dagegen jede Kammer <b>zweimal</b> abstimmen, im Abstand von mindestens drei Monaten, und manchmal entscheiden die Bürger in einer <b>Volksabstimmung</b>. Das ist Absicht: Die wichtigsten Regeln sollen sich nicht wegen einer Laune des Augenblicks ändern. Eines kann man aber nie ändern: die <b>republikanische Staatsform</b> (Art. 139).</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du schon…? Es gibt drei Originalexemplare`,
      html: `<p>Die Verfassung wurde am 27. Dezember 1947 von <b>Enrico De Nicola</b> (vorläufiges Staatsoberhaupt), <b>Umberto Terracini</b> (Präsident der Versammlung) und <b>Alcide De Gasperi</b> (Regierungschef) unterzeichnet. Eines der drei Originalexemplare wird im Historischen Archiv des Präsidialamts der Republik aufbewahrt.</p>`
    },
    {
      type: `alternatives`, title: `Andere Wege, es zu verstehen`,
      intro: `Gewaltenteilung, Parlament, Regierung … wenn dir die Wörter abstrakt vorkommen, probier diese Wege.`,
      tabs: [
        {
          label: `⚽ Wie ein Spiel`,
          html: `<p>Denk an ein Fußballspiel:</p>
<ul>
<li>Wer die <b>Regeln</b> des Fußballs schreibt (die für alle geltenden Regeln), ist wie das <b>Parlament</b>.</li>
<li>Der <b>Trainer</b> und der Kapitän, die entscheiden, wie man das Spiel unter Beachtung der Regeln spielt, sind wie die <b>Regierung</b>.</li>
<li>Der <b>Schiedsrichter</b>, der Fouls pfeift und unparteiisch ist, ist wie die <b>Justiz</b>.</li>
<li>Die <b>Verfassung</b> ist das Buch der wichtigsten Regeln, die nicht einmal der Schiedsrichter ändern kann.</li>
</ul>
<p>Wenn der Trainer auch Schiedsrichter sein und mitten im Spiel die Regeln ändern könnte … würde er immer gewinnen! Deshalb sind die Gewalten getrennt.</p>`
        },
        {
          label: `🏫 Deine Klasse`,
          html: `<p>Versuch, eine „Klassenverfassung“ zu machen:</p>
<ol>
<li>Alle zusammen stimmen über die <b>Regeln</b> der Klasse ab (gesetzgebende Gewalt).</li>
<li>Ihr wählt einen <b>Klassensprecher</b>, der dafür sorgt, dass sie jeden Tag angewendet werden (ausführende Gewalt).</li>
<li>Ihr bestimmt eine <b>Schlichterin</b>, die bei einem Streit alle anhört und gerecht entscheidet (rechtsprechende Gewalt).</li>
</ol>
<p>Schreibt die Regeln auf ein Plakat: Ihr habt gerade das getan, was die Verfassunggebende Versammlung getan hat!</p>`
        },
        {
          label: `🌍 In anderen Ländern`,
          html: `<p>Fast alle Staaten der Welt haben eine Verfassung. Dreh den Globus:</p>
<ul>
<li>🇺🇸 <b>Vereinigte Staaten</b> (1787): die älteste geschriebene Verfassung, die noch gilt. Dort wird der Präsident von den Bürgern gewählt und leitet auch die Regierung.</li>
<li>🇫🇷 <b>Frankreich</b> (1958): Der vom Volk gewählte Präsident hat viele Befugnisse.</li>
<li>🇩🇪 <b>Deutschland</b> (1949): Sie heißt „Grundgesetz“; es gibt einen Bundeskanzler, ein bisschen wie unseren Ministerpräsidenten.</li>
<li>🇬🇧 <b>Vereinigtes Königreich</b>: Es hat keine in einem einzigen Text geschriebene Verfassung! Die Regeln sind in Gesetzen und Traditionen verstreut, und es gibt einen König.</li>
<li>🇮🇹 <b>Italien</b> (1948): parlamentarische Republik: Die Regierung hängt vom Vertrauen des Parlaments ab.</li>
</ul>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 38.9, lon: -77.0, label: `🇺🇸 Washington – 1787` },
              { lat: 48.85, lon: 2.35, label: `🇫🇷 Paris – 1958` },
              { lat: 52.52, lon: 13.4, label: `🇩🇪 Berlin – 1949` },
              { lat: 51.5, lon: -0.12, label: `🇬🇧 London – ungeschrieben` },
              { lat: 41.9, lon: 12.5, label: `🇮🇹 Rom – 1948`, color: `#22c55e` },
              { lat: 35.68, lon: 139.7, label: `🇯🇵 Tokio – 1947` },
              { lat: -15.8, lon: -47.9, label: `🇧🇷 Brasília – 1988` }
            ]
          }
        },
        {
          label: `🔗 Ordne die Paläste zu`,
          html: `<p>In Rom hat jede Gewalt ihren Palast. Ordne sie zu!</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`Quirinal`, `Präsident der Republik`],
              [`Montecitorio`, `Abgeordnetenkammer`],
              [`Palazzo Madama`, `Senat der Republik`],
              [`Palazzo Chigi`, `Ministerpräsident`],
              [`Palazzo della Consulta`, `Verfassungsgericht`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mindmap: Woher die Regeln des Staates kommen`,
      nodes: [
        { id: `popolo`, label: `Souveränes Volk`, x: 50, y: 8, color: `#eab308`, html: `Die Macht gehört den Bürgern (Art. 1).`, why: `Es ist die Idee der <b>Volkssouveränität</b>, entstanden in der Aufklärung: Jean-Jacques Rousseau (1762, „Der Gesellschaftsvertrag“) vertrat die Ansicht, dass gerechte Gesetze aus dem Willen aller kommen, nicht von einem von Gott gewählten König. Die Französische Revolution (1789) setzte sie in die Praxis um.` },
        { id: `cost`, label: `Verfassung 1948`, x: 50, y: 30, color: `#3b82f6`, html: `Das Grundgesetz, über allen anderen Gesetzen.`, why: `Sie wurde nach dem Faschismus und dem Krieg geschrieben, damit sich beides nicht wiederholt: Deshalb schützt sie die Rechte aller und teilt die Macht. Davor gab es das <b>Albertinische Statut</b> (1848), vom König gewährt und mit jedem beliebigen Gesetz änderbar: Der Faschismus höhlte es leicht aus.` },
        { id: `separ`, label: `Gewaltenteilung`, x: 18, y: 50, color: `#a855f7`, html: `Die Macht ist in gesetzgebende, ausführende und rechtsprechende geteilt.`, why: `Die Idee wurde vom französischen Philosophen <b>Montesquieu</b> 1748 erklärt („Vom Geist der Gesetze“): „Damit man die Macht nicht missbrauchen kann, muss die Macht die Macht aufhalten.“ Die amerikanischen Verfassungsväter nutzten sie 1787 als Erste.` },
        { id: `diritti`, label: `Rechte und Pflichten`, x: 82, y: 50, color: `#22c55e`, html: `Gleichheit, Freiheit, Schule, Gesundheit; Pflichten der Solidarität.`, why: `Sie kommen aus einer langen Geschichte: die englische Magna Carta (1215), die Erklärung der Menschenrechte (Frankreich, 1789) und, im selben Jahr 1948, die <b>Allgemeine Erklärung der Menschenrechte</b> der UNO.` },
        { id: `parl`, label: `Parlament`, x: 12, y: 80, color: `#2563eb`, html: `Kammer (400) und Senat (200): Sie machen die Gesetze.`, why: `Es ist das Herz der repräsentativen Demokratie: In einem Staat mit Millionen Menschen kann nicht jeder über jedes Gesetz abstimmen, also wählt man Vertreter. Die Zahl der Parlamentarier wurde (von 945 auf 600) durch eine Volksabstimmung im Jahr 2020 verringert.` },
        { id: `gov`, label: `Regierung`, x: 37, y: 80, color: `#16a34a`, html: `Ministerpräsident und Minister: Sie wenden die Gesetze an.`, why: `Italien ist eine <b>parlamentarische Republik</b>: Die Regierung entsteht aus dem Vertrauen des Parlaments und fällt, wenn sie es verliert. Die Verfassungsväter wählten das, um nach der Erfahrung mit Mussolini ein zu starkes Oberhaupt zu vermeiden.` },
        { id: `mag`, label: `Justiz`, x: 62, y: 80, color: `#dc2626`, html: `Unabhängige Richter, die das Gesetz auf konkrete Fälle anwenden.`, why: `Unter der Diktatur waren die Richter von der Regierung abhängig. Deshalb schafft die Verfassung den <b>Obersten Richterrat</b> (CSM), der anstelle der Regierung über Laufbahnen und Versetzungen der Richter entscheidet.` },
        { id: `pres`, label: `Präsident der Republik`, x: 87, y: 80, color: `#7c3aed`, html: `Staatsoberhaupt, Hüter der Verfassung, 7 Jahre.`, why: `Er ersetzt den König, erbt das Amt aber nicht: Er wird vom Parlament gewählt. Die Amtszeit von 7 Jahren ist länger als die der Kammern (5), damit er „über den Parteien“ steht und nicht an eine einzige Mehrheit gebunden ist.` }
      ],
      edges: [
        [`popolo`, `cost`, `wählt und schreibt`], [`cost`, `separ`, `legt fest`], [`cost`, `diritti`, `garantiert`],
        [`separ`, `parl`, `gesetzgebend`], [`separ`, `gov`, `ausführend`], [`separ`, `mag`, `rechtsprechend`],
        [`popolo`, `parl`, `wählt`], [`parl`, `gov`, `Vertrauen`], [`parl`, `pres`, `wählt`]
      ]
    },
    {
      type: `quiz`, title: `Mini-Quiz: die Gewalten des Staates`,
      questions: [
        { type: `mc`, q: `Wer macht in Italien die Gesetze?`, options: [`Die Regierung`, `Das Parlament`, `Die Justiz`], answer: 1, explain: `Die gesetzgebende Gewalt liegt beim Parlament (Kammer und Senat).` },
        { type: `num`, q: `Wie viele Jahre bleibt der Präsident der Republik im Amt?`, answer: 7, tol: 0, unit: `Jahre`, explain: `Die Amtszeit dauert 7 Jahre (Art. 85).` },
        { type: `tf`, q: `Die Richter müssen den Anweisungen der Regierung gehorchen.`, answer: false, explain: `Die Justiz ist von jeder anderen Gewalt unabhängig (Art. 104).` }
      ]
    }
  ],
  glossary: [
    { t: `Staat`, d: `Volk, das auf einem Gebiet mit einer eigenen souveränen Macht lebt.` },
    { t: `Verfassung`, d: `Das Grundgesetz eines Staates; alle anderen Gesetze müssen sie beachten.` },
    { t: `Republik`, d: `Staatsform, in der das Staatsoberhaupt für begrenzte Zeit gewählt wird und kein König ist.` },
    { t: `Demokratie`, d: `Herrschaftsform, in der die Macht dem Volk gehört, das sie durch Wahlen ausübt.` },
    { t: `Volksabstimmung`, d: `Abstimmung, bei der die Bürger direkt über eine Frage entscheiden.` },
    { t: `Verfassunggebende Versammlung`, d: `Die 556 im Jahr 1946 gewählten Personen, die die Verfassung schreiben sollten.` },
    { t: `Parlament`, d: `Abgeordnetenkammer und Senat: Sie haben die gesetzgebende Gewalt.` },
    { t: `Regierung`, d: `Ministerpräsident und Minister: Sie haben die ausführende Gewalt.` },
    { t: `Justiz`, d: `Die Gesamtheit der Richter: Sie hat die rechtsprechende Gewalt.` },
    { t: `Verkünden`, d: `Unterzeichnung eines Gesetzes durch den Präsidenten der Republik, damit es gültig wird.` },
    { t: `Gewaltenteilung`, d: `Grundsatz, nach dem das Machen, Anwenden und Durchsetzen der Gesetze verschiedenen Organen zusteht.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Welche drei Elemente hat ein Staat?`, options: [`Volk, Staatsgebiet, Souveränität`, `König, Heer, Steuern`, `Regionen, Provinzen, Gemeinden`], answer: 0, explain: `Ein Staat existiert, wenn ein Volk auf einem Gebiet mit einer souveränen Macht lebt.` },
      { type: `num`, q: `In welchem Jahr ist die italienische Verfassung in Kraft getreten?`, answer: 1948, tol: 0, explain: `Am 1. Januar 1948.` },
      { type: `order`, q: `Bring die Ereignisse in die richtige Reihenfolge.`, items: [`Albertinisches Statut`, `Faschistische Diktatur`, `Volksabstimmung Republik oder Monarchie`, `Inkrafttreten der Verfassung`], explain: `1848 → 1922 → 1946 → 1948.` },
      { type: `mc`, q: `Die ausführende Gewalt liegt…`, options: [`beim Parlament`, `bei der Regierung`, `bei der Justiz`], answer: 1, explain: `Die Regierung wendet die Gesetze an und führt das Land.` },
      { type: `text`, q: `Wie heißt der Palast, in dem der Präsident der Republik wohnt?`, answer: [`quirinal`, `der quirinal`, `palazzo del quirinale`, `quirinale`], explain: `Der Quirinal in Rom.` },
      { type: `num`, q: `Wie viele Abgeordnete hat die Kammer?`, answer: 400, tol: 0, explain: `Nach der Reform von 2020 gibt es 400 Abgeordnete und 200 gewählte Senatoren.` },
      { type: `tf`, q: `Bei der Volksabstimmung 1946 stimmten die Frauen zum ersten Mal bei einer landesweiten Wahl ab.`, answer: true, explain: `Es war das erste Mal für die italienischen Frauen bei einer landesweiten Wahl.` },
      { type: `mc`, q: `Was sagt Artikel 11?`, options: [`Dass die Flagge die Trikolore ist`, `Dass Italien den Krieg ablehnt`, `Dass die Schule verpflichtend ist`], answer: 1, explain: `Italien lehnt den Krieg als Mittel zur Lösung von Konflikten ab.` },
      { type: `order`, q: `Bring den Weg eines Gesetzes in die richtige Reihenfolge.`, items: [`Vorschlag`, `Annahme durch die Kammer`, `Annahme durch den Senat`, `Verkündung durch den Präsidenten`, `Veröffentlichung im Amtsblatt`], explain: `Vorschlag, Abstimmung der beiden Kammern, Unterschrift des Präsidenten, Veröffentlichung.` },
      { type: `mc`, q: `Wer hat als Erster die Gewaltenteilung erklärt?`, options: [`Montesquieu`, `Napoleon`, `Garibaldi`], answer: 0, explain: `Montesquieu, 1748, im Buch „Vom Geist der Gesetze“.` },
      { type: `tf`, q: `Es gibt 5 Regionen mit Sonderstatut.`, answer: true, explain: `Aostatal, Trentino-Südtirol, Friaul-Julisch Venetien, Sizilien und Sardinien.` },
      { type: `mc`, q: `Warum sind die Gewalten geteilt?`, options: [`Um Geld zu sparen`, `Damit niemand zu viel Macht hat und sie missbrauchen kann`, `Weil Europa es will`], answer: 1, explain: `Die Teilung der Macht schützt die Freiheit: „Die Macht hält die Macht auf.“` }
    ]
  }
});

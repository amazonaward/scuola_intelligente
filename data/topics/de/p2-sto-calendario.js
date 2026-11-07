TOPIC('de', {
  id: "p2-sto-calendario",
  title: "Der Kalender",
  intro: "Wann hast du Geburtstag? 🎂 Wie viele Tage sind es noch bis zu den Ferien? 🏖️ Der <b>Kalender</b> hilft uns, die lange Zeit zu zählen: <b>Tage</b>, <b>Wochen</b>, <b>Monate</b>, <b>Jahreszeiten</b> und <b>Jahre</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Der Tag und die Woche",
      html: `<p>Ein <b>Tag</b> dauert <b>24 Stunden</b>: Es gibt den hellen Teil (den Tag) und den dunklen Teil (die Nacht). 🌞🌙</p>
<p><b>7 Tage</b> bilden eine <b>Woche</b>:</p>
<p><b>Montag – Dienstag – Mittwoch – Donnerstag – Freitag – Samstag – Sonntag</b></p>
<p>Dann beginnt alles von vorn, wie in einem Kreis! 🔄</p>
<ul>
<li><b>Gestern</b> = der Tag vor heute.</li>
<li><b>Heute</b> = der Tag, in dem wir sind.</li>
<li><b>Morgen</b> = der Tag nach heute.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Das Rad der Woche",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<circle cx="300" cy="150" r="115" fill="none" stroke="#c4b5fd" stroke-width="10"/>
<g font-size="12" font-weight="bold" text-anchor="middle">
<circle cx="300" cy="35" r="34" fill="#fecaca"/><text x="300" y="40" fill="#7f1d1d">Montag</text>
<circle cx="390" cy="78" r="34" fill="#fed7aa"/><text x="390" y="83" fill="#7c2d12">Dienstag</text>
<circle cx="412" cy="175" r="34" fill="#fef08a"/><text x="412" y="180" fill="#713f12">Mittwoch</text>
<circle cx="350" cy="255" r="34" fill="#bbf7d0"/><text x="350" y="260" fill="#14532d">Donnerstag</text>
<circle cx="250" cy="255" r="34" fill="#bae6fd"/><text x="250" y="260" fill="#0c4a6e">Freitag</text>
<circle cx="188" cy="175" r="34" fill="#c7d2fe"/><text x="188" y="180" fill="#312e81">Samstag</text>
<circle cx="210" cy="78" r="34" fill="#f5d0fe"/><text x="210" y="83" fill="#701a75">Sonntag</text>
</g>
<text x="300" y="145" font-size="24" text-anchor="middle" fill="#5b21b6" font-weight="bold">7 Tage</text>
<text x="300" y="172" font-size="18" text-anchor="middle" fill="#5b21b6">und dann von vorn ↻</text>
</svg>`,
      caption: "Nach dem Sonntag kommt wieder der Montag: Die Woche ist ein Kreislauf."
    },
    {
      type: "text",
      title: "Die 12 Monate des Jahres",
      html: `<p>Ein <b>Jahr</b> hat <b>12 Monate</b>:</p>
<p>Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.</p>
<p>Die Monate sind nicht alle gleich lang. Ein Merkspruch hilft uns:</p>
<p>🎵 <i>„Dreißig Tage hat der September, April, Juni und November. Alle anderen haben einunddreißig, nur der Februar hat achtundzwanzig.“</i></p>
<p>Der kurze Monat ist der <b>Februar</b>: Er hat 28 Tage, aber alle 4 Jahre hat er <b>29</b>!</p>`
    },
    {
      type: "widget",
      title: "Wie viele Tage hat der Monat?",
      widget: "classify",
      options: {
        groups: ["30 Tage", "31 Tage", "28 oder 29 Tage"],
        items: [
          ["Januar", 1], ["Februar", 2], ["März", 1], ["April", 0],
          ["Mai", 1], ["Juni", 0], ["Juli", 1], ["August", 1],
          ["September", 0], ["Oktober", 1], ["November", 0], ["Dezember", 1]
        ]
      },
      caption: "Sprich den Merkspruch nach oder benutze den Knöchel-Trick (du findest ihn weiter unten)!"
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Tage und Monate",
      questions: [
        { type: "num", q: "Wie viele Tage hat eine Woche?", answer: 7, explain: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag: 7 Tage." },
        { type: "mc", q: "Wenn heute Mittwoch ist, ist morgen …", options: ["Dienstag", "Donnerstag", "Freitag"], answer: 1, explain: "Nach Mittwoch kommt Donnerstag." },
        { type: "mc", q: "Welcher Monat hat 28 oder 29 Tage?", options: ["Februar", "April", "August"], answer: 0, explain: "Der Februar ist der kürzeste Monat." }
      ]
    },
    {
      type: "text",
      title: "Die vier Jahreszeiten",
      html: `<p>Das Jahr ist auch in <b>4 Jahreszeiten</b> geteilt, jede dauert etwa 3 Monate:</p>
<ul>
<li>🌸 <b>Frühling</b>: ab etwa dem 21. März. Die Tage werden länger, die Blumen blühen auf.</li>
<li>☀️ <b>Sommer</b>: ab etwa dem 21. Juni. Es ist warm, die Tage sind am längsten.</li>
<li>🍂 <b>Herbst</b>: ab etwa dem 23. September. Die Blätter fallen, die Trauben werden geerntet.</li>
<li>❄️ <b>Winter</b>: ab etwa dem 21. Dezember. Es ist kalt, die Tage sind am kürzesten.</li>
</ul>
<p>Es gibt Jahreszeiten, weil die Erde <b>schräg geneigt</b> um die Sonne kreist: Ein halbes Jahr lang bekommt unsere Halbkugel die Strahlen steiler (es ist warm), das andere halbe Jahr flacher (es ist kalt).</p>`
    },
    {
      type: "svg",
      title: "Das Jahr in einem Kreis",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#ffffff"/>
<path d="M300 160 L300 20 A140 140 0 0 1 440 160 Z" fill="#bbf7d0" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L440 160 A140 140 0 0 1 300 300 Z" fill="#fde68a" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L300 300 A140 140 0 0 1 160 160 Z" fill="#fdba74" stroke="#ffffff" stroke-width="4"/>
<path d="M300 160 L160 160 A140 140 0 0 1 300 20 Z" fill="#bfdbfe" stroke="#ffffff" stroke-width="4"/>
<text x="360" y="95" font-size="34" text-anchor="middle">🌸</text>
<text x="360" y="245" font-size="34" text-anchor="middle">☀️</text>
<text x="240" y="245" font-size="34" text-anchor="middle">🍂</text>
<text x="240" y="95" font-size="34" text-anchor="middle">❄️</text>
<text x="470" y="60" font-size="18" fill="#166534" font-weight="bold">Frühling</text>
<text x="470" y="82" font-size="15" fill="#166534">Mär · Apr · Mai</text>
<text x="470" y="260" font-size="18" fill="#a16207" font-weight="bold">Sommer</text>
<text x="470" y="282" font-size="15" fill="#a16207">Jun · Jul · Aug</text>
<text x="20" y="260" font-size="18" fill="#c2410c" font-weight="bold">Herbst</text>
<text x="20" y="282" font-size="15" fill="#c2410c">Sep · Okt · Nov</text>
<text x="20" y="60" font-size="18" fill="#1d4ed8" font-weight="bold">Winter</text>
<text x="20" y="82" font-size="15" fill="#1d4ed8">Dez · Jan · Feb</text>
<circle cx="300" cy="160" r="30" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
<text x="300" y="167" font-size="16" text-anchor="middle" fill="#334155" font-weight="bold">Jahr</text>
</svg>`,
      caption: "Die 4 Jahreszeiten wiederholen sich jedes Jahr, immer in derselben Reihenfolge (die angegebenen Monate sind ungefähr: Die Jahreszeiten beginnen um den 21. des Monats)."
    },
    {
      type: "remember",
      title: "Die Zahlen des Kalenders",
      html: `<ul>
<li>1 <b>Woche</b> = 7 Tage</li>
<li>1 <b>Monat</b> = 28, 29, 30 oder 31 Tage (etwa 4 Wochen)</li>
<li>1 <b>Jahr</b> = 12 Monate = <b>365 Tage</b></li>
<li>alle 4 Jahre gibt es das <b>Schaltjahr</b> mit <b>366 Tagen</b> (dem 29. Februar). Die nächsten: <b>2028</b>, 2032 …</li>
<li>1 <b>Jahreszeit</b> = etwa 3 Monate; 4 Jahreszeiten in einem Jahr.</li>
</ul>`
    },
    {
      type: "example",
      title: "Beispiel: Wie lange noch bis zum Geburtstag? 🎂",
      html: `<p>Heute ist der <b>10. März</b>. Sofias Geburtstag ist am <b>17. März</b>.</p>
<p>Ich zähle auf dem Kalender: 11, 12, 13, 14, 15, 16, 17 → es sind noch <b>7 Tage</b>, also <b>eine Woche</b>!</p>
<p>Wenn heute Dienstag ist, ist auch der Geburtstag an einem Dienstag (7 Tage später ist man wieder beim selben Wochentag).</p>`
    },
    {
      type: "example",
      title: "Beispiel: Wie man das Datum schreibt ✏️",
      html: `<p>In Deutschland schreibt man das Datum: <b>Tag – Monat – Jahr</b>.</p>
<ul>
<li>In Worten: <b>Dienstag, der 3. November 2026</b>;</li>
<li>mit Zahlen: <b>3.11.2026</b> (11, weil der November der <b>11.</b> Monat ist).</li>
</ul>
<p>Im Heft schreiben wir jeden Morgen oben das Datum hin: So wissen wir, wann wir jede Arbeit gemacht haben.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Namen der Tage kommen vom Himmel",
      html: `<p>Die Römer gaben den Tagen die Namen der <b>Gestirne</b>, die sie am Himmel wandern sahen. Die Germanen übernahmen das und setzten ihre eigenen Götter an die Stelle der römischen:</p>
<ul>
<li><b>Montag</b> = Tag des <b>Mondes</b> 🌙; <b>Sonntag</b> = Tag der <b>Sonne</b> ☀️.</li>
<li><b>Dienstag</b> = Tag des Kriegsgottes <b>Ziu</b> (bei den Römern Mars); <b>Donnerstag</b> = Tag des Gottes <b>Donar</b> (bei den Römern Jupiter); <b>Freitag</b> = Tag der Göttin <b>Freya</b> (bei den Römern Venus).</li>
<li><b>Mittwoch</b> bedeutet einfach „Mitte der Woche“; <b>Samstag</b> kommt vom hebräischen <i>Schabbat</i>, dem Ruhetag.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Der September war der siebte Monat",
      html: `<p>Der erste Kalender Roms begann im <b>März</b>. Darum war der <b>Sept</b>ember der 7. Monat, der <b>Okt</b>ober der 8., der <b>Nov</b>ember der 9. und der <b>Dez</b>ember der 10.!</p>
<p>Später begann das Jahr im Januar, und die Namen blieben „falsch“. Der <b>Juli</b> heißt so zu Ehren von <b>Julius Caesar</b> und der <b>August</b> zu Ehren des Kaisers <b>Augustus</b>.</p>`
    },
    {
      type: "3d",
      title: "Reise durch die Zeit: die Geschichte des Kalenders",
      scene: "spacetime",
      caption: "Die Karte ist die Grundfläche, die Höhe ist die Zeit: Je weiter oben ein Ereignis liegt, desto jünger ist es. Tippe auf die Ereignisse und folge den Pfeilen von der Ursache zur Wirkung.",
      options: {
        lat: [20, 60],
        lon: [-10, 50],
        years: [-3000, 2000],
        places: [
          { lat: 30.05, lon: 31.23, label: "Ägypten" },
          { lat: 32.54, lon: 44.42, label: "Babylon" },
          { lat: 41.9, lon: 12.5, label: "Rom" },
          { lat: 24.47, lon: 39.61, label: "Medina" },
          { lat: 55.75, lon: 37.6, label: "Moskau" }
        ],
        events: [
          { id: "egizi", lat: 29.9, lon: 31.2, year: -2800, label: "Das ägyptische Jahr mit 365 Tagen", html: "Die Ägypter beobachten, dass die Nilfluten ungefähr alle 365 Tage wiederkehren. Sie schaffen einen Kalender mit <b>12 Monaten zu je 30 Tagen</b> plus <b>5 Festtagen</b>: zusammen 365!" },
          { id: "settimana", lat: 32.54, lon: 44.42, year: -600, label: "Die Woche mit 7 Tagen", html: "Bei den Babyloniern und den Hebräern verbreitet sich die <b>Woche mit 7 Tagen</b>. Vielleicht kommt sie vom Mond: Jede seiner Phasen (Neumond, zunehmender Mond, Vollmond, abnehmender Mond) dauert etwa 7 Tage." },
          { id: "romolo", lat: 41.9, lon: 12.5, year: -753, label: "Der Kalender des Romulus", html: "Der Legende nach gibt Romulus Rom einen Kalender mit <b>10 Monaten</b>, der im <b>März</b> beginnt. Später fügt König Numa den Januar und den Februar hinzu." },
          { id: "cesare", lat: 41.89, lon: 12.49, year: -46, label: "Julius Caesar reformiert den Kalender", html: "Der römische Kalender war voller Fehler. <b>Julius Caesar</b>, beraten vom Astronomen <b>Sosigenes von Alexandria</b>, schafft ein Jahr mit <b>365 Tagen</b> und einem zusätzlichen Tag <b>alle 4 Jahre</b> (das Schaltjahr). Das ist der <b>julianische Kalender</b>.", causes: ["egizi", "romolo"] },
          { id: "agosto", lat: 41.91, lon: 12.48, year: -8, label: "Der Monat August entsteht", html: "Der Monat <i>Sextilis</i> (der sechste) erhält den Namen <b>Augustus</b>, zu Ehren des ersten römischen Kaisers. Der Monat Julius Caesars war schon zum <b>Juli</b> geworden.", causes: ["cesare"] },
          { id: "dionigi", lat: 41.88, lon: 12.5, year: 525, label: "Die Jahre ab Christi Geburt", html: "Der Mönch <b>Dionysius Exiguus</b> schlägt in Rom vor, die Jahre ab der Geburt Jesu zu zählen. Darum sagen wir heute „vor Christus“ (v. Chr.) und „nach Christus“ (n. Chr.).", causes: ["cesare"] },
          { id: "egira", lat: 24.47, lon: 39.61, year: 622, label: "Der islamische Kalender", html: "Der Prophet <b>Mohammed</b> zieht von Mekka nach Medina (die <b>Hidschra</b>). Von diesem Jahr an zählt der islamische Kalender, der auf dem <b>Mond</b> beruht: 12 Mondmonate, etwa <b>354 Tage</b>.", causes: ["settimana"] },
          { id: "gregorio", lat: 41.9, lon: 12.45, year: 1582, label: "Der gregorianische Kalender", html: "Der julianische Kalender war ein wenig zu lang: In 1600 Jahren hatte er gegenüber den Jahreszeiten <b>10 Tage</b> Verspätung angesammelt. Papst <b>Gregor XIII.</b> bestimmt mit den Berechnungen des kalabrischen Arztes <b>Luigi Lilio</b>, dass auf Donnerstag, den <b>4. Oktober 1582</b>, Freitag, der <b>15. Oktober</b>, folgt. Das ist der Kalender, den wir heute benutzen!", causes: ["cesare", "dionigi"] },
          { id: "russia", lat: 55.75, lon: 37.6, year: 1918, label: "Russland wechselt den Kalender", html: "Russland benutzt noch den julianischen Kalender: Darum fand die „Oktoberrevolution“ von 1917 für uns im <b>November</b> statt! Im Jahr <b>1918</b> geht auch Russland zum gregorianischen Kalender über und überspringt 13 Tage.", causes: ["gregorio"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Rom, 1582: Du bist Papst Gregor XIII.",
      html: `<p>Die Astronomen bringen dir eine schlechte Nachricht: Der Kalender von Julius Caesar ist <b>ein klein wenig zu lang</b> (etwa 11 Minuten pro Jahr). Das scheint nichts, aber nach vielen Jahrhunderten hinkt der Kalender der Sonne um <b>10 Tage</b> hinterher!</p>
<p>Der wahre Frühling beginnt am 11. März statt am 21., und das <b>Osterfest</b>, das vom Frühling aus berechnet wird, droht auf den falschen Tag zu fallen.</p>`,
      question: "Was entscheidest du?",
      options: [
        { label: "Wir lassen alles, wie es ist: 10 Tage sind kein Problem.", outcome: "Die Verspätung würde weiter wachsen: In einigen tausend Jahren würde Weihnachten im Herbst und dann im Sommer liegen!" },
        { label: "Wir überspringen einmal 10 Tage und ändern die Regel der Schaltjahre.", outcome: "Der Kalender „springt“ einmal vorwärts und stimmt wieder mit der Sonne überein. Mit einer neuen Regel (alle 400 Jahre 3 Schaltjahre weglassen) wird der Fehler winzig klein." },
        { label: "Wir fügen ab und zu einen ganzen zusätzlichen Monat ein.", outcome: "Der Kalender würde durcheinandergeraten: Niemand wüsste mehr, in welchem Monat er sich befindet, und Verträge und Feste müssten alle neu gemacht werden." }
      ],
      answer: 1,
      explain: "Gregor XIII. wählte mit der Bulle <i>Inter gravissimas</i> den zweiten Weg: Auf <b>Donnerstag, den 4. Oktober 1582</b>, folgte sofort <b>Freitag, der 15. Oktober</b>. Neue Regel: Jahre, die auf „00“ enden, sind nur dann Schaltjahre, wenn sie sich durch 400 teilen lassen (das Jahr 2000 ja, das Jahr 1900 nein). Die Idee stammte vom kalabrischen Arzt <b>Luigi Lilio</b>. Italien, Spanien und Portugal wechselten sofort; andere Länder viel später: England 1752 und Russland 1918. Der gregorianische Kalender wird heute fast auf der ganzen Welt benutzt."
    },
    {
      type: "alternatives",
      title: "Andere Wege, den Kalender zu verstehen",
      intro: "Den Kalender kann man mit den Händen, mit dem Mond und mit verschiedenen Spielen lernen.",
      tabs: [
        {
          label: "✊ Der Knöchel-Trick",
          html: `<p>Ein Trick, den Kinder auf der <b>ganzen Welt</b> benutzen: Ballt die Hände zu Fäusten und halte sie nebeneinander. Zähle die Monate, indem du die <b>Knöchel</b> (die Spitzen) und die <b>Lücken</b> zwischen den Knöcheln antippst, von links nach rechts:</p>
<ul>
<li>auf dem <b>Knöchel</b> → Monat mit <b>31</b> Tagen;</li>
<li>in der <b>Lücke</b> → Monat mit <b>30</b> Tagen (oder Februar).</li>
</ul>
<p>Januar (Knöchel), Februar (Lücke), März (Knöchel) … Juli (letzter Knöchel der ersten Hand), August (erster Knöchel der anderen Hand)!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fff7ed"/>
<path d="M30 140 Q30 60 70 60 Q90 40 110 60 Q130 40 150 60 Q170 40 190 60 Q210 40 230 60 Q270 60 270 140 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<path d="M320 140 Q320 60 360 60 Q380 40 400 60 Q420 40 440 60 Q460 40 480 60 Q500 40 520 60 Q560 60 560 140 Z" fill="#fcd9b6" stroke="#9a3412" stroke-width="3"/>
<g font-size="14" font-weight="bold" text-anchor="middle">
<text x="90" y="34" fill="#b91c1c">JAN</text><text x="110" y="95" fill="#1d4ed8">FEB</text><text x="130" y="34" fill="#b91c1c">MÄR</text><text x="150" y="95" fill="#1d4ed8">APR</text>
<text x="170" y="34" fill="#b91c1c">MAI</text><text x="190" y="95" fill="#1d4ed8">JUN</text><text x="210" y="34" fill="#b91c1c">JUL</text>
<text x="380" y="34" fill="#b91c1c">AUG</text><text x="400" y="95" fill="#1d4ed8">SEP</text><text x="420" y="34" fill="#b91c1c">OKT</text><text x="440" y="95" fill="#1d4ed8">NOV</text><text x="460" y="34" fill="#b91c1c">DEZ</text>
</g>
<text x="300" y="185" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">rot, auf dem Knöchel = 31 Tage</text>
<text x="300" y="212" font-size="20" text-anchor="middle" fill="#1d4ed8" font-weight="bold">blau, in der Lücke = 30 Tage (Februar 28/29)</text>
</svg>`
        },
        {
          label: "🌙 Der Kalender des Mondes",
          html: `<p>Nicht alle zählen die Monate wie wir. Der <b>islamische</b> und der <b>chinesische</b> Kalender folgen dem <b>Mond</b>: Ein Monat geht von einem Neumond zum nächsten, etwa <b>29 ein halb Tage</b>.</p>
<p>12 Mondmonate ergeben etwa 354 Tage, 11 weniger als unser Jahr. Darum fällt der <b>Ramadan</b> jedes Jahr etwa 11 Tage früher, und das <b>chinesische Neujahr</b> wechselt jedes Jahr das Datum (zwischen dem 21. Januar und dem 20. Februar).</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🌑 Neumond", back: "Man sieht ihn nicht: Ein neuer Mondmonat beginnt" },
              { front: "🌓 Erstes Viertel", back: "Nach etwa 7 Tagen: halber Mond" },
              { front: "🌕 Vollmond", back: "Nach etwa 15 Tagen: ganz beleuchtet" },
              { front: "🌗 Letztes Viertel", back: "Nach etwa 22 Tagen: wieder halb" },
              { front: "📅 Mondmonat", back: "Etwa 29 ein halb Tage" }
            ]
          }
        },
        {
          label: "🌍 Die Jahreszeiten andersherum",
          html: `<p>Wenn bei uns <b>Winter</b> ist, ist in <b>Australien</b>, in Argentinien und in Südafrika <b>Sommer</b>! Warum? Die Erde ist geneigt: Wenn die Nordhälfte der Sonne zugewandt ist, ist die Südhälfte abgewandt, und umgekehrt. In Australien feiern viele <b>Weihnachten am Strand</b> 🎄🏖️. Dreh den Globus und vergleiche.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Italien: im Dezember ist Winter ❄️", color: "#2563eb" },
              { lat: -33.9, lon: 151.2, label: "Sydney: im Dezember ist Sommer ☀️", color: "#f97316" },
              { lat: -34.6, lon: -58.4, label: "Buenos Aires: im Dezember ist Sommer ☀️", color: "#f97316" },
              { lat: -33.9, lon: 18.4, label: "Kapstadt: im Dezember ist Sommer ☀️", color: "#f97316" },
              { lat: 40.7, lon: -74, label: "New York: im Dezember ist Winter ❄️", color: "#2563eb" }
            ]
          }
        },
        {
          label: "📜 Die Zeitleiste",
          html: `<p>Verfolge auf der Zeitleiste die Stationen des Kalenders, von den Ägyptern bis heute.</p>`,
          widget: "timeline",
          options: {
            unit: "Jahre",
            events: [
              { year: -2800, label: "Ägyptisches Jahr mit 365 Tagen", icon: "🌊" },
              { year: -46, label: "Kalender von Julius Caesar", icon: "🏛️" },
              { year: 525, label: "Jahre ab Christi Geburt", icon: "✝️" },
              { year: 622, label: "Beginn des islamischen Kalenders", icon: "🌙" },
              { year: 1582, label: "Gregorianischer Kalender", icon: "📅" },
              { year: 2028, label: "Nächstes Schaltjahr", icon: "🐸" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Kalenders: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "terra", label: "Die Erde dreht sich", x: 50, y: 6, color: "#0ea5e9", html: "Die Erde dreht sich um sich selbst und kreist um die Sonne.", why: "Der ganze Kalender entsteht aus drei Bewegungen am Himmel: Die Erde dreht sich um sich selbst (der Tag), der Mond kreist um die Erde (der Monat), die Erde kreist um die Sonne (das Jahr)." },
        { id: "giorno", label: "Tag", x: 15, y: 30, color: "#eab308", html: "24 Stunden: eine Drehung der Erde um sich selbst.", why: "Wenn unsere Seite der Erde der Sonne zugewandt ist, ist Tag, wenn sie abgewandt ist, ist Nacht. Es ist der einfachste Rhythmus zu sehen: Darum ist er die erste Einheit des Kalenders." },
        { id: "settimana", label: "Woche", x: 15, y: 60, color: "#a855f7", html: "7 Tage, mit den Namen von Gestirnen und Göttern.", why: "Die Woche mit 7 Tagen stammt aus dem alten Nahen Osten (Babylonier und Hebräer) und vielleicht von den Mondphasen, die jeweils etwa 7 Tage dauern. Die Römer übernahmen sie und gaben den Tagen die Namen von Mond, Mars, Merkur, Jupiter, Venus; die Germanen ersetzten manche davon durch ihre eigenen Götter." },
        { id: "mese", label: "Monat", x: 50, y: 35, color: "#64748b", html: "28–31 Tage: ursprünglich eine Runde des Mondes.", why: "„Monat“ und „Mond“ sind verwandt: Der Mond braucht etwa 29 ein halb Tage, um wieder gleich auszusehen. Unser Kalender hat die Monate etwas verlängert, damit genau 12 ins Jahr passen." },
        { id: "anno", label: "Jahr", x: 85, y: 30, color: "#16a34a", html: "365 Tage (366 in Schaltjahren): eine Runde der Erde um die Sonne.", why: "Eine Runde um die Sonne dauert etwa <b>365 Tage und 6 Stunden</b>. Diese 6 Stunden ergeben nach 4 Jahren einen ganzen Tag: Darum gibt es alle 4 Jahre den 29. Februar." },
        { id: "stagioni", label: "Jahreszeiten", x: 85, y: 60, color: "#f97316", html: "Frühling, Sommer, Herbst, Winter.", why: "Die Erdachse ist um etwa 23 ein halb Grad geneigt. Im Lauf des Jahres bekommt unsere Halbkugel die Sonnenstrahlen steiler (Sommer) oder schräger (Winter). Es hängt nicht vom Abstand zur Sonne ab: Im Januar ist die Erde sogar etwas näher dran!" },
        { id: "giuliano", label: "Kalender von Caesar", x: 35, y: 85, color: "#ef4444", html: "46 v. Chr.: 365 Tage und alle 4 Jahre ein Schalttag.", why: "<b>Julius Caesar</b> übernahm die Idee der 365 Tage von den Ägyptern, mit Hilfe des Astronomen <b>Sosigenes von Alexandria</b>, und fügte den Schalttag hinzu." },
        { id: "gregoriano", label: "Gregorianischer Kalender", x: 70, y: 88, color: "#db2777", html: "1582: der Kalender, den wir heute benutzen.", why: "Das wahre Jahr ist 11 Minuten kürzer als 365 Tage und 6 Stunden. Der Kalabrier <b>Luigi Lilio</b> fand die Korrektur, und Papst <b>Gregor XIII.</b> machte sie zum Gesetz: Man übersprang 10 Tage und änderte die Regel der Schaltjahre." }
      ],
      edges: [
        ["terra", "giorno", "um sich selbst:"],
        ["terra", "anno", "um die Sonne:"],
        ["terra", "mese", "der Mond kreist:"],
        ["giorno", "settimana", "7 bilden eine"],
        ["mese", "anno", "12 bilden ein"],
        ["anno", "stagioni", "geteilt in 4"],
        ["anno", "giuliano", "gemessen vom"],
        ["giuliano", "gregoriano", "verbessert vom"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Jahreszeiten, Jahre und Geschichte",
      questions: [
        { type: "mc", q: "Welche Jahreszeit kommt nach dem Sommer?", options: ["Frühling", "Herbst", "Winter"], answer: 1, explain: "Frühling → Sommer → Herbst → Winter." },
        { type: "num", q: "Wie viele Tage hat ein Schaltjahr?", answer: 366, explain: "Es hat einen Tag mehr: den 29. Februar." },
        { type: "mc", q: "Der Monat Juli trägt den Namen von …", options: ["Julius Caesar", "Augustus", "Romulus"], answer: 0, explain: "Der Juli kommt von Julius (Iulius) Caesar." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>1 Woche = <b>7 Tage</b>; 1 Jahr = <b>12 Monate</b> = <b>365 Tage</b>.</li>
<li>„Dreißig Tage hat der September, April, Juni und November …“</li>
<li>Alle 4 Jahre gibt es das <b>Schaltjahr</b> (366 Tage).</li>
<li>4 Jahreszeiten: <b>Frühling, Sommer, Herbst, Winter</b>.</li>
<li>Wir benutzen den <b>gregorianischen</b> Kalender (1582).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Kalender", d: "System, um die Zeit in Tage, Wochen, Monate und Jahre zu teilen und zu zählen." },
    { t: "Woche", d: "Gruppe von 7 Tagen." },
    { t: "Monat", d: "Jeder der 12 Teile des Jahres, mit 28 bis 31 Tagen." },
    { t: "Jahr", d: "365 Tage: die Zeit, die die Erde braucht, um einmal um die Sonne zu kreisen." },
    { t: "Schaltjahr", d: "Jahr mit 366 Tagen, mit dem 29. Februar; es kommt alle 4 Jahre." },
    { t: "Jahreszeit", d: "Jeder der 4 Teile des Jahres mit einem anderen Klima." },
    { t: "Datum", d: "Die Angabe von Tag, Monat und Jahr." },
    { t: "v. Chr. / n. Chr.", d: "Vor Christus / nach Christus: vor oder nach dem Jahr 1." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Wie viele Monate hat ein Jahr?", answer: 12, explain: "Von Januar bis Dezember: 12 Monate." },
      { type: "num", q: "Wie viele Tage hat ein normales Jahr?", answer: 365, explain: "Ein normales Jahr hat 365 Tage." },
      { type: "order", q: "Bring die Wochentage in die richtige Reihenfolge.", items: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"], explain: "Die Woche beginnt am Montag." },
      { type: "order", q: "Bring die Jahreszeiten in die richtige Reihenfolge, beginnend mit dem Frühling.", items: ["Frühling", "Sommer", "Herbst", "Winter"], explain: "Die Jahreszeiten wiederholen sich immer in dieser Reihenfolge." },
      { type: "mc", q: "Wie viele Tage hat der April?", options: ["30", "31", "28"], answer: 0, explain: "„Dreißig Tage hat der September, April, Juni und November.“" },
      { type: "mc", q: "Wenn heute Freitag ist, war gestern …", options: ["Samstag", "Donnerstag", "Sonntag"], answer: 1, explain: "Vor dem Freitag kommt der Donnerstag." },
      { type: "tf", q: "Der August hat 31 Tage.", answer: true, explain: "Der August liegt auf einem Knöchel: 31 Tage." },
      { type: "tf", q: "In Australien ist Sommer, wenn bei uns Winter ist.", answer: true, explain: "Australien und Europa liegen auf verschiedenen Halbkugeln: Die Jahreszeiten sind vertauscht." },
      { type: "text", q: "Wie heißt das Jahr mit 366 Tagen?", answer: ["Schaltjahr", "das Schaltjahr", "ein Schaltjahr"], explain: "Das Schaltjahr, mit dem 29. Februar." },
      { type: "mc", q: "Der Tag „Montag“ hat seinen Namen von …", options: ["dem Mond", "einem Kalender", "einem König"], answer: 0, explain: "Montag = Tag des Mondes." },
      { type: "mc", q: "Wer schuf 1582 den Kalender, den wir heute benutzen?", options: ["Julius Caesar", "Papst Gregor XIII.", "Galileo Galilei"], answer: 1, explain: "Der gregorianische Kalender, von Papst Gregor XIII." },
      { type: "num", q: "Heute ist der 5. Mai. In einer Woche: Welcher Tag im Mai ist dann?", answer: 12, explain: "5 + 7 = 12: der 12. Mai." }
    ]
  }
});

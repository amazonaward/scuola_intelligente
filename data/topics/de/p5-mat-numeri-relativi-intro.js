TOPIC('de', {
  id: "p5-mat-numeri-relativi-intro",
  title: "Die relativen Zahlen (ganze Zahlen)",
  intro: "Im Winter zeigt das Thermometer <b>−3 °C</b>, der Aufzug fährt in das Stockwerk <b>−1</b>, das Tote Meer liegt <b>430 Meter unter</b> dem Meeresspiegel. Für all das braucht man die Zahlen, die „unter null“ liegen: die <b>negativen Zahlen</b>. Zusammen mit den positiven und der Null bilden sie die <b>relativen Zahlen</b> (ganze Zahlen).",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Positive Zahlen, negative Zahlen und null",
      html: `<p>Bisher hast du die <b>natürlichen Zahlen</b> benutzt: 0, 1, 2, 3 … Aber manchmal muss man Mengen <b>unter null</b> angeben, oder <b>in der Gegenrichtung</b>.</p>
<ul>
<li>Die <b>positiven Zahlen</b> sind größer als null: Sie werden mit dem Vorzeichen <b>+</b> (oder ohne Vorzeichen) geschrieben: <b>+1, +2, +15</b>.</li>
<li>Die <b>negativen Zahlen</b> sind kleiner als null: Sie werden <b>immer</b> mit dem Vorzeichen <b>−</b> geschrieben: <b>−1, −2, −15</b>. Man liest „minus eins“, „minus zwei“ …</li>
<li>Die <b>Null</b> ist weder positiv noch negativ: Sie ist der <b>Ausgangspunkt</b> (der Ursprung).</li>
</ul>
<p>Zusammen bilden sie die <b>relativen Zahlen</b> (oder <b>ganzen Zahlen</b>). Sie heißen „relativ“, weil ihr Wert <b>relativ</b> zu einem Bezugspunkt ist: der Null.</p>`
    },
    {
      type: "svg",
      title: "Der Zahlenstrahl der relativen Zahlen",
      svg: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="220" fill="#f8fafc"/>
<line x1="20" y1="110" x2="620" y2="110" stroke="#1f2937" stroke-width="4"/>
<polygon points="620,100 638,110 620,120" fill="#1f2937"/>
<rect x="20" y="102" width="300" height="16" fill="#bfdbfe" opacity="0.6"/>
<rect x="320" y="102" width="300" height="16" fill="#fecaca" opacity="0.6"/>
<g stroke="#1f2937" stroke-width="3">
<line x1="70" y1="98" x2="70" y2="122"/><line x1="120" y1="98" x2="120" y2="122"/><line x1="170" y1="98" x2="170" y2="122"/><line x1="220" y1="98" x2="220" y2="122"/><line x1="270" y1="98" x2="270" y2="122"/>
<line x1="320" y1="90" x2="320" y2="130"/>
<line x1="370" y1="98" x2="370" y2="122"/><line x1="420" y1="98" x2="420" y2="122"/><line x1="470" y1="98" x2="470" y2="122"/><line x1="520" y1="98" x2="520" y2="122"/><line x1="570" y1="98" x2="570" y2="122"/>
</g>
<g font-size="18" text-anchor="middle" font-weight="bold">
<text x="70" y="152" fill="#1d4ed8">−5</text><text x="120" y="152" fill="#1d4ed8">−4</text><text x="170" y="152" fill="#1d4ed8">−3</text><text x="220" y="152" fill="#1d4ed8">−2</text><text x="270" y="152" fill="#1d4ed8">−1</text>
<text x="320" y="152" fill="#1f2937">0</text>
<text x="370" y="152" fill="#b91c1c">+1</text><text x="420" y="152" fill="#b91c1c">+2</text><text x="470" y="152" fill="#b91c1c">+3</text><text x="520" y="152" fill="#b91c1c">+4</text><text x="570" y="152" fill="#b91c1c">+5</text>
</g>
<text x="170" y="60" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">← NEGATIV</text>
<text x="470" y="60" font-size="18" text-anchor="middle" fill="#b91c1c" font-weight="bold">POSITIV →</text>
<text x="320" y="60" font-size="16" text-anchor="middle" fill="#1f2937">Ursprung</text>
<path d="M270,90 Q320,40 370,90" fill="none" stroke="#16a34a" stroke-width="3" stroke-dasharray="6 4"/>
<text x="320" y="196" font-size="15" text-anchor="middle" fill="#15803d">−1 und +1 sind Gegenzahlen: gleicher Abstand von 0, auf der entgegengesetzten Seite</text>
</svg>`,
      caption: "Rechts von der Null die positiven, links die negativen Zahlen. Je weiter rechts, desto größer ist die Zahl."
    },
    {
      type: "text",
      title: "Relative Zahlen vergleichen",
      html: `<p>Auf dem Zahlenstrahl ist <b>eine Zahl größer als alle, die links von ihr stehen</b>.</p>
<ul>
<li>Jede positive Zahl ist größer als null und als jede negative: <b>+1 &gt; −100</b>.</li>
<li>Von zwei negativen Zahlen ist <b>die größer, die näher bei null liegt</b>: <b>−2 &gt; −7</b>. (Denk an die Temperatur: −2 °C ist weniger kalt als −7 °C!)</li>
</ul>
<p>Der <b>Betrag</b> (Absolutwert) einer Zahl ist ihr <b>Abstand von null</b>, ohne Vorzeichen. Man schreibt ihn zwischen zwei Strichen: |−7| = 7, |+7| = 7.</p>
<p>Zwei Zahlen mit gleichem Betrag und verschiedenem Vorzeichen sind <b>Gegenzahlen</b>: +4 und −4. Ihre Summe ist <b>null</b>.</p>`
    },
    {
      type: "widget",
      title: "Erkunde den Zahlenstrahl",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 1, marks: [-6, 4] },
      caption: "Mache Sprünge auf dem Zahlenstrahl: nach rechts addierst du, nach links nimmst du weg. Wie viele Sprünge braucht man von −6 bis +4? (10)"
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Thermometer",
      html: `<p>Um 7 Uhr morgens zeigt das Thermometer in Cortina <b>−4 °C</b>. Mittags ist die Temperatur <b>um 9 Grad gestiegen</b>. Wie viel Grad sind es?</p>
<p>Ich beginne bei −4 und steige um 9: −4 + 9 = <b>+5 °C</b>.</p>
<p>Auf dem Zahlenstrahl: Von −4 mache ich 4 Sprünge bis 0, dann noch 5 Sprünge bis +5. Insgesamt 4 + 5 = 9 Sprünge. ✅</p>
<p>In der Nacht sinkt sie um 7 Grad: +5 − 7 = <b>−2 °C</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Aufzug im Hochhaus",
      html: `<p>In einem Gebäude ist das Erdgeschoss die <b>0</b>, die Garagen liegen in den Stockwerken <b>−1</b> und <b>−2</b>.</p>
<ul>
<li>Luca ist im Stockwerk +3 und fährt in die Garage −2: Wie viele Stockwerke sind das? Von +3 bis 0 sind es 3 Stockwerke, von 0 bis −2 noch 2: insgesamt <b>5 Stockwerke</b>.</li>
<li>In Italien und in Europa ist das Erdgeschoss die 0 und der „erste Stock“ ist der darüber. In den <b>Vereinigten Staaten</b> dagegen heißt das Erdgeschoss oft <b>1st floor</b>! Deshalb ist es wichtig zu wissen, wo die Null ist: Die Zahlen sind <b>relativ</b> zum Bezugspunkt.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: lesen und vergleichen",
      questions: [
        { type: "mc", q: "Welche Zahl ist größer?", options: ["−8", "−3", "−5"], answer: 1, explain: "Von den negativen Zahlen ist die größer, die näher bei null liegt: −3." },
        { type: "tf", q: "Die Null ist eine positive Zahl.", answer: false, explain: "Die Null ist weder positiv noch negativ." },
        { type: "num", q: "Was ist die Gegenzahl von +6?", answer: -6, explain: "Gleicher Abstand von null, entgegengesetztes Vorzeichen: −6." },
        { type: "num", q: "Wie viel ist |−12| (Betrag)?", answer: 12, explain: "Der Betrag ist der Abstand von null: 12." }
      ]
    },
    {
      type: "text",
      title: "Erste Rechnungen: steigen und sinken",
      html: `<p>Wir können schon einfache Additionen und Subtraktionen machen, wenn wir an den <b>Zahlenstrahl</b> (oder das Thermometer) denken:</p>
<ul>
<li>Eine positive Zahl <b>addieren</b> = <b>steigen</b> / nach rechts gehen: −3 + 5 = +2.</li>
<li>Eine positive Zahl <b>wegnehmen</b> = <b>sinken</b> / nach links gehen: 2 − 6 = −4.</li>
<li><b>Zwei negative Zahlen addieren</b>: Das ist, als hätte man zwei Schulden, die Schuld wächst! (−3) + (−4) = −7.</li>
<li>Die Summe zweier <b>Gegenzahlen</b> ist immer null: (+5) + (−5) = 0.</li>
</ul>
<p><b>Regel zum Addieren</b> zweier relativer Zahlen:</p>
<ol>
<li>Haben sie <b>gleiches Vorzeichen</b>: Du addierst die Beträge und behältst das Vorzeichen. (+3)+(+4)=+7; (−3)+(−4)=−7.</li>
<li>Haben sie <b>verschiedene Vorzeichen</b>: Du bildest die Differenz der Beträge und nimmst das Vorzeichen der Zahl, die „weiter von null entfernt“ ist. (−9)+(+4) = −5; (+9)+(−4) = +5.</li>
</ol>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die Kälterekorde",
      html: `<p>Die tiefste je mit Instrumenten auf der Erde gemessene Temperatur ist <b>−89,2 °C</b>, an der russischen Station <b>Wostok</b> in der Antarktis, am 21. Juli 1983. In Italien wurden Werte um <b>−50 °C</b> in Mulden der Dolomiten wie der Busa Fradusta (Pale di San Martino) registriert. Und im Weltraum? Die tiefstmögliche Temperatur, der <b>absolute Nullpunkt</b>, liegt bei <b>−273,15 °C</b>: Nichts kann kälter sein!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Unter dem Meeresspiegel",
      html: `<p>Auch <b>Höhen</b> sind relative Zahlen, gemessen vom <b>Meeresspiegel</b> aus (der Null). Der Everest liegt bei <b>+8.849 m</b>; das Ufer des <b>Toten Meeres</b> ist der tiefste Punkt auf dem Festland, bei etwa <b>−430 m</b> (und es sinkt jedes Jahr). Der <b>Marianengraben</b> im Pazifischen Ozean reicht bis fast <b>−11.000 m</b>! In Italien liegen einige Gebiete bei Ferrara und Venedig ein paar Meter <b>unter</b> dem Meeresspiegel.</p>`
    },
    {
      type: "svg",
      title: "Vom Everest zum Marianengraben",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="160" fill="#e0f2fe"/>
<rect y="160" width="640" height="160" fill="#1e3a8a"/>
<polygon points="40,160 160,40 280,160" fill="#78716c"/>
<polygon points="140,60 160,40 180,60" fill="#ffffff"/>
<polygon points="380,160 470,300 560,160" fill="#0f172a"/>
<line x1="0" y1="160" x2="640" y2="160" stroke="#0284c7" stroke-width="4"/>
<text x="600" y="152" font-size="16" text-anchor="end" fill="#0369a1" font-weight="bold">0 m Meeresspiegel</text>
<text x="160" y="30" font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">Everest +8849 m</text>
<text x="330" y="150" font-size="15" text-anchor="middle" fill="#1f2937">Totes Meer −430 m</text>
<circle cx="330" cy="164" r="6" fill="#facc15"/>
<text x="470" y="200" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">Marianengraben</text>
<text x="470" y="222" font-size="15" text-anchor="middle" fill="#ffffff">etwa −11 000 m</text>
<text x="110" y="250" font-size="16" fill="#bfdbfe">unter null → negativ</text>
<text x="110" y="100" font-size="16" fill="#1f2937">über null → positiv</text>
</svg>`,
      caption: "Höhen über dem Meeresspiegel sind positiv, Tiefen darunter sind negativ (Zeichnung nicht maßstabsgetreu)."
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Relative Zahlen</b> = positive (+), negative (−) und null.</li>
<li>Auf dem Zahlenstrahl: weiter <b>rechts</b> = <b>größer</b>. Bei negativen Zahlen gewinnt die, die näher bei 0 liegt.</li>
<li><b>Betrag</b> = Abstand von 0. <b>Gegenzahlen</b>: gleicher Abstand, verschiedenes Vorzeichen; zusammengezählt ergeben sie 0.</li>
<li>Gleiches Vorzeichen: Ich addiere und behalte das Vorzeichen. Verschiedenes Vorzeichen: Ich subtrahiere und nehme das Vorzeichen des „Stärkeren“.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, negative Zahlen zu verstehen",
      intro: "Negative Zahlen waren auch für große Mathematiker schwierig! Versuche sie mit Geld, farbigen Spielmarken, chinesischen Rechenstäbchen oder dem 3D-Aufzug zu verstehen.",
      tabs: [
        {
          label: "💰 Geld und Schulden",
          html: `<p>Denk an die positiven Zahlen als an das <b>Geld, das du hast</b>, und an die negativen als <b>Schulden</b> (Geld, das du zurückgeben musst).</p>
<ul>
<li>Du hast 10 € und schuldest deiner Schwester 4 €: 10 + (−4) = <b>6 €</b>, die wirklich dir gehören.</li>
<li>Du hast 3 €, schuldest aber 8 €: 3 + (−8) = <b>−5</b>: Du hast noch 5 € Schulden.</li>
<li>Zwei Schulden addieren sich: (−5) + (−2) = <b>−7</b>: Du schuldest 7 €.</li>
</ul>
<p>Genau so erklärte der indische Mathematiker <b>Brahmagupta</b> im Jahr <b>628 n. Chr.</b> die Regeln der negativen Zahlen: „Besitz“ und „Schulden“!</p>`
        },
        {
          label: "🔴🔵 Die Spielmarken",
          html: `<p>Benutze <b>rote Marken</b> (+1) und <b>blaue Marken</b> (−1). Eine rote und eine blaue Marke zusammen <b>heben sich auf</b>: Sie ergeben null (man nennt das „Nullpaar“).</p>
<p>Beispiel: (+5) + (−3). Lege 5 rote und 3 blaue hin, nimm die Nullpaare weg: Es bleiben <b>2 rote</b> → <b>+2</b>.</p>
<p>Diese Methode wird in den Schulen Singapurs und der angelsächsischen Länder viel benutzt („zero pairs“).</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fafafa"/>
<g stroke="#1f2937" stroke-width="2">
<circle cx="60" cy="70" r="24" fill="#ef4444"/><circle cx="120" cy="70" r="24" fill="#ef4444"/><circle cx="180" cy="70" r="24" fill="#ef4444"/><circle cx="240" cy="70" r="24" fill="#ef4444"/><circle cx="300" cy="70" r="24" fill="#ef4444"/>
<circle cx="60" cy="140" r="24" fill="#3b82f6"/><circle cx="120" cy="140" r="24" fill="#3b82f6"/><circle cx="180" cy="140" r="24" fill="#3b82f6"/>
</g>
<g font-size="22" fill="#ffffff" text-anchor="middle" font-weight="bold">
<text x="60" y="78">+</text><text x="120" y="78">+</text><text x="180" y="78">+</text><text x="240" y="78">+</text><text x="300" y="78">+</text>
<text x="60" y="148">−</text><text x="120" y="148">−</text><text x="180" y="148">−</text>
</g>
<rect x="30" y="40" width="180" height="130" rx="14" fill="none" stroke="#16a34a" stroke-width="4" stroke-dasharray="8 6"/>
<text x="120" y="200" font-size="16" text-anchor="middle" fill="#15803d">3 Nullpaare = 0</text>
<text x="450" y="90" font-size="22" text-anchor="middle" fill="#1f2937">(+5) + (−3)</text>
<text x="450" y="140" font-size="30" text-anchor="middle" fill="#dc2626" font-weight="bold">= +2</text>
</svg>`
        },
        {
          label: "🇨🇳 Die chinesischen Rechenstäbchen",
          html: `<p>Vor mehr als 2000 Jahren benutzten die Rechner im chinesischen Buch <b>„Neun Kapitel der mathematischen Kunst“</b> kleine <b>Stäbchen</b>: die <b>roten</b> für positive und die <b>schwarzen</b> für negative Zahlen. Sie hatten schon Regeln, um sie zu addieren und zu subtrahieren!</p>
<p>Kurios: In der Buchhaltung sagt man heute noch „<b>in den roten Zahlen</b> sein“ für „Schulden haben“. In China waren die Farben aber umgekehrt: Rot war positiv!</p>
<p>In Europa hielten viele Mathematiker die negativen Zahlen dagegen bis ins <b>16.–17. Jahrhundert</b> für „absurd“ oder „falsch“.</p>`
        },
        {
          label: "🧊 Das 3D-Hochhaus",
          html: `<p>Stell dir dieses Würfelmodell als <b>Hochhaus</b> von der Seite gesehen vor: Jeder Würfel ist ein Stockwerk. Die Straßenhöhe ist die <b>0</b>. Die Stockwerke über der Straße sind positiv, die darunter gegrabenen (Garagen, Keller) negativ.</p>
<p>Wenn das Gebäude 4 Stockwerke oberirdisch und 2 unterirdisch hat, sind es von der tiefsten Garage (−2) bis zum obersten Stock (+4) 4 − (−2) = <b>6 Stockwerke</b> Unterschied. Benutze die Regler, um verschiedene Türme zu bauen, und zähle die Stockwerke!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 6, b: 1 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der relativen Zahlen",
      nodes: [
        { id: "naturali", label: "Natürliche Zahlen", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3 … die Zahlen zum Zählen.", why: "Sie sind die ersten vom Menschen erfundenen Zahlen, um Gegenstände zu zählen. Mit ihnen kann man aber nicht immer subtrahieren: 3 − 5 hat unter den natürlichen Zahlen kein Ergebnis!" },
        { id: "relativi", label: "Relative Zahlen", x: 50, y: 28, color: "#2563eb", html: "Positive, negative und null: …, −2, −1, 0, +1, +2, …", why: "Sie wurden „erfunden“, damit man immer subtrahieren kann und um Größen zu messen, die zwei Richtungen haben (oben/unten, Gewinn/Verlust, warm/kalt)." },
        { id: "zero", label: "Die Null", x: 18, y: 28, color: "#1f2937", html: "Der Bezugspunkt: weder positiv noch negativ.", why: "Die Null als echte Zahl wurde in Indien festgelegt: <b>Brahmagupta</b> (628 n. Chr.) schrieb die Regeln zum Rechnen mit Null und negativen Zahlen auf. Sie kam mit den indisch-arabischen Ziffern nach Europa, auch dank Fibonacci (1202)." },
        { id: "positivi", label: "Positive", x: 82, y: 50, color: "#dc2626", html: "Größer als null: +1, +2, …", why: "Sie entsprechen den natürlichen Zahlen (außer der 0): Deshalb kann man das Zeichen + auch weglassen." },
        { id: "negativi", label: "Negative", x: 18, y: 50, color: "#3b82f6", html: "Kleiner als null: −1, −2, …", why: "In China vor über 2000 Jahren (schwarze Stäbchen) und in Indien als „Schulden“ benutzt. In Europa wurden sie erst im 16.–17. Jahrhundert voll akzeptiert." },
        { id: "retta", label: "Zahlenstrahl", x: 50, y: 56, color: "#16a34a", html: "Linie, auf der jede Zahl ihren Platz hat: rechts die positiven, links die negativen.", why: "Zahlen auf eine Linie zu setzen, mit der Null in der Mitte, verbreitete sich mit der analytischen Geometrie von <b>Descartes</b> (1637): So werden die negativen Zahlen einfach „Punkte auf der anderen Seite“." },
        { id: "assoluto", label: "Betrag", x: 25, y: 80, color: "#a855f7", html: "Der Abstand einer Zahl von null: |−5| = 5.", why: "Ein Abstand kann nicht negativ sein: Deshalb hat der Betrag kein Vorzeichen. Das Symbol |x| führte der deutsche Mathematiker <b>Karl Weierstraß</b> 1841 ein." },
        { id: "opposti", label: "Gegenzahlen", x: 55, y: 80, color: "#f97316", html: "Gleicher Betrag, verschiedenes Vorzeichen: +3 und −3. Zusammengezählt ergeben sie 0.", why: "Sie liegen symmetrisch zur Null auf dem Zahlenstrahl, wie ein Gegenstand und sein Spiegelbild." },
        { id: "usi", label: "Anwendungen im Leben", x: 85, y: 80, color: "#14b8a6", html: "Temperaturen, Höhen, Stockwerke, Bankkonten, Jahre v. Chr./n. Chr., Punktestände.", why: "Immer wenn eine Größe einen Bezugspunkt und zwei mögliche Richtungen hat, sind die relativen Zahlen das perfekte Werkzeug." }
      ],
      edges: [
        ["naturali", "relativi", "werden erweitert zu"],
        ["relativi", "zero", "Bezugspunkt"],
        ["relativi", "positivi", "umfassen"],
        ["relativi", "negativi", "umfassen"],
        ["relativi", "retta", "werden dargestellt auf dem"],
        ["retta", "assoluto", "Abstand von 0"],
        ["retta", "opposti", "symmetrisch"],
        ["positivi", "usi", "dienen für"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: relative Zahlen addieren",
      questions: [
        { type: "num", q: "(−6) + (+10) = ?", answer: 4, explain: "Verschiedene Vorzeichen: 10 − 6 = 4, die positive Zahl überwiegt: +4." },
        { type: "num", q: "(−4) + (−5) = ?", answer: -9, explain: "Gleiches Vorzeichen: 4 + 5 = 9, Vorzeichen minus: −9." },
        { type: "num", q: "Die Temperatur ist −2 °C und sinkt um 3 Grad. Wie viel Grad zeigt das Thermometer?", answer: -5, unit: "°C", explain: "−2 − 3 = −5 °C." }
      ]
    }
  ],
  glossary: [
    { t: "Relative Zahlen (ganze Zahlen)", d: "Menge der positiven Zahlen, der negativen Zahlen und der Null." },
    { t: "Positive Zahl", d: "Zahl größer als null, mit Vorzeichen + (z. B. +7)." },
    { t: "Negative Zahl", d: "Zahl kleiner als null, immer mit Vorzeichen − (z. B. −7)." },
    { t: "Ursprung", d: "Der Punkt auf dem Zahlenstrahl, der der Null entspricht." },
    { t: "Betrag (Absolutwert)", d: "Abstand einer Zahl von null, ohne Vorzeichen: |−7| = 7." },
    { t: "Gegenzahlen", d: "Zahlen mit gleichem Betrag und verschiedenem Vorzeichen (+4 und −4)." },
    { t: "Meeresspiegel", d: "Die Null, von der aus Höhen (+) und Tiefen (−) gemessen werden." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche Zahl ist kleiner?", options: ["−1", "0", "−10"], answer: 2, explain: "−10 ist nach links am weitesten von null entfernt: Sie ist die kleinste." },
      { type: "tf", q: "−5 ist größer als −2.", answer: false, explain: "−2 liegt näher bei null: −2 > −5." },
      { type: "order", q: "Ordne von der kleinsten zur größten Zahl.", items: ["−7", "−3", "0", "+2", "+5"], explain: "Auf dem Zahlenstrahl von links nach rechts: −7, −3, 0, +2, +5." },
      { type: "num", q: "Das Thermometer zeigt +3 °C, dann sinkt die Temperatur um 8 Grad. Wie warm ist es?", answer: -5, unit: "°C", explain: "3 − 8 = −5 °C." },
      { type: "num", q: "Du bist im Stockwerk −2 und fährst 5 Stockwerke nach oben. In welchem Stockwerk kommst du an?", answer: 3, explain: "−2 + 5 = +3." },
      { type: "num", q: "Wie viel ist |−15|?", answer: 15, explain: "Der Betrag ist der Abstand von null: 15." },
      { type: "mc", q: "Was ist die Gegenzahl von −9?", options: ["+9", "−9", "0"], answer: 0, explain: "Die Gegenzahl hat denselben Betrag und das entgegengesetzte Vorzeichen: +9." },
      { type: "num", q: "(+7) + (−7) = ?", answer: 0, explain: "Die Summe zweier Gegenzahlen ist null." },
      { type: "mc", q: "Welcher indische Mathematiker schrieb 628 n. Chr. die Regeln für die Null und die negativen Zahlen auf?", options: ["Pythagoras", "Brahmagupta", "Archimedes"], answer: 1, explain: "Brahmagupta, im Brahmasphutasiddhanta." },
      { type: "tf", q: "Die Null ist eine negative Zahl.", answer: false, explain: "Die Null ist weder positiv noch negativ." },
      { type: "num", q: "Tagsüber sind es +6 °C, nachts −4 °C. Um wie viel Grad ist die Temperatur gesunken?", answer: 10, unit: "°C", explain: "Von +6 bis 0 sind es 6 Grad, von 0 bis −4 noch 4: 10 Grad." }
    ],
    gen: [["intAdd", 3]]
  }
});

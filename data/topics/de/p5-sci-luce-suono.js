TOPIC('de', {
  id: "p5-sci-luce-suono",
  title: "Licht und Schall",
  intro: "Bei einem Gewitter siehst du zuerst den <b>Blitz</b> und hörst dann den <b>Donner</b>. Warum? Weil <b>Licht</b> und <b>Schall</b> sich ganz unterschiedlich ausbreiten! Wir finden heraus, wie sie sich <b>ausbreiten</b>, warum es <b>Schatten</b> gibt, wie <b>Regenbogen</b> und <b>Echo</b> entstehen und was <b>Schwingungen</b> sind.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Das Licht: Woher kommt es?",
      html: `<p><b>Licht</b> ist eine Form von Energie, die uns <b>sehen</b> lässt.</p>
<ul>
<li>Körper, die selbst Licht erzeugen, heißen <b>Lichtquellen</b> (oder leuchtende Körper): die <b>Sonne</b>, die Sterne, das Feuer, eine Glühbirne, ein Glühwürmchen.</li>
<li>Alle anderen Körper werden <b>beleuchtet</b>: Wir sehen sie, weil das Licht sie trifft und bis zu unseren Augen „zurückprallt“. Auch der <b>Mond</b> ist ein beleuchteter Körper: Er wirft das Licht der Sonne zurück!</li>
</ul>
<p>Das Licht <b>breitet sich geradlinig</b> in alle Richtungen aus und braucht keine Luft: Es durchquert sogar das <b>Vakuum</b> des Weltraums. Es ist das Schnellste im Universum: etwa <b>300 000 km pro Sekunde</b>. In einer Sekunde würde es mehr als 7-mal um die Erde fliegen!</p>`
    },
    {
      type: "text",
      title: "Durchsichtig, durchscheinend, undurchsichtig und die Schatten",
      html: `<p>Wenn das Licht auf einen Gegenstand trifft:</p>
<ul>
<li>lassen <b>durchsichtige</b> Körper es ganz hindurch: Du siehst gut durch sie hindurch (Glas, Luft, klares Wasser);</li>
<li>lassen <b>durchscheinende</b> Körper nur einen Teil hindurch: Du siehst verschwommene Formen (Milchglas, Backpapier, ein dünner Vorhang);</li>
<li>lassen <b>undurchsichtige</b> Körper es nicht hindurch: Hinter ihnen entsteht ein <b>Schatten</b> (Holz, Mauer, dein Körper).</li>
</ul>
<p>Der Schatten entsteht genau <b>deshalb, weil das Licht geradeaus geht</b> und nicht um die Gegenstände „herumbiegen“ kann. Je tiefer die Lichtquelle steht (wie die Sonne am Abend), desto <b>länger</b> ist der Schatten.</p>`
    },
    {
      type: "svg",
      title: "Wie ein Schatten entsteht",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="0" y="240" width="600" height="60" fill="#d9f99d"/>
<circle cx="70" cy="70" r="36" fill="#facc15" stroke="#ca8a04" stroke-width="4"/>
<g stroke="#f59e0b" stroke-width="3" stroke-dasharray="10 6">
<line x1="100" y1="88" x2="270" y2="150"/><line x1="100" y1="92" x2="560" y2="240"/>
<line x1="100" y1="80" x2="300" y2="100"/>
</g>
<rect x="255" y="150" width="30" height="90" fill="#78350f"/>
<circle cx="270" cy="128" r="30" fill="#16a34a"/>
<polygon points="285,240 560,240 285,150" fill="#334155" opacity="0.55"/>
<text x="70" y="135" font-size="18" text-anchor="middle" font-weight="bold">Sonne</text>
<text x="270" y="275" font-size="18" text-anchor="middle" font-weight="bold">undurchsichtiger Körper</text>
<text x="440" y="275" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e293b">Schatten</text>
<text x="420" y="130" font-size="16" fill="#92400e">die Strahlen gehen geradeaus</text>
</svg>`,
      caption: "Die Lichtstrahlen, die den Baum treffen, werden aufgehalten: Dahinter bleibt ein dunkler Bereich, der Schatten."
    },
    {
      type: "text",
      title: "Reflexion und Brechung",
      html: `<ul>
<li><b>Reflexion</b>: Das Licht „prallt“ an einer Oberfläche ab. An einer glatten, glänzenden Oberfläche, etwa einem <b>Spiegel</b> oder ruhigem Wasser, prallt es geordnet ab, und du siehst ein Bild. Regel: Der Winkel, in dem es ankommt, ist <b>gleich</b> dem Winkel, in dem es wieder wegfliegt.</li>
<li><b>Brechung</b>: Wenn das Licht von einem Stoff in einen anderen übergeht (z. B. von der Luft ins Wasser), <b>ändert es seine Geschwindigkeit</b> und wird dadurch <b>abgelenkt</b>. Deshalb sieht ein Bleistift in einem Glas Wasser <b>geknickt</b> aus! Die <b>Linsen</b> in Brillen, Lupen und Mikroskopen funktionieren dank der Brechung.</li>
</ul>`
    },
    {
      type: "text",
      title: "Die Farben des Lichts",
      html: `<p>Das Sonnenlicht sieht weiß aus, ist aber eine <b>Mischung aus allen Farben</b>. Lässt man es durch ein Glas-<b>Prisma</b> fallen, spaltet es sich in die Farben des <b>Regenbogens</b> auf: Rot, Orange, Gelb, Grün, Hellblau, Indigo, Violett.</p>
<p>Der <b>Regenbogen</b> entsteht, wenn die Sonne die Regentröpfchen beleuchtet: Jeder Tropfen wirkt wie ein kleines Prisma. Um ihn zu sehen, musst du die Sonne <b>im Rücken</b> und den Regen vor dir haben.</p>
<p>Und warum ist ein Apfel rot? Weil er alle Farben außer Rot <b>aufnimmt</b> (absorbiert); das Rot wird zu unseren Augen <b>zurückgeworfen</b>. Ein weißer Gegenstand wirft alle zurück, ein schwarzer nimmt alle auf (deshalb wird ein schwarzes T-Shirt im Sommer heißer!).</p>`
    },
    {
      type: "svg",
      title: "Das Prisma trennt die Farben",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<line x1="20" y1="150" x2="230" y2="125" stroke="#ffffff" stroke-width="7"/>
<polygon points="300,40 380,190 220,190" fill="#bae6fd" fill-opacity="0.35" stroke="#e0f2fe" stroke-width="3"/>
<g stroke-width="7">
<line x1="330" y1="120" x2="580" y2="70" stroke="#ef4444"/>
<line x1="330" y1="122" x2="580" y2="92" stroke="#f97316"/>
<line x1="330" y1="124" x2="580" y2="114" stroke="#facc15"/>
<line x1="330" y1="126" x2="580" y2="136" stroke="#22c55e"/>
<line x1="330" y1="128" x2="580" y2="158" stroke="#38bdf8"/>
<line x1="330" y1="130" x2="580" y2="180" stroke="#4f46e5"/>
<line x1="330" y1="132" x2="580" y2="202" stroke="#a855f7"/>
</g>
<line x1="230" y1="125" x2="330" y2="126" stroke="#ffffff" stroke-width="5"/>
<text x="90" y="120" font-size="18" fill="#ffffff">weißes Licht</text>
<text x="300" y="230" font-size="18" fill="#e0f2fe" text-anchor="middle">Prisma</text>
<text x="590" y="45" font-size="16" fill="#fca5a5" text-anchor="end">Rot: wird weniger abgelenkt</text>
<text x="590" y="235" font-size="16" fill="#d8b4fe" text-anchor="end">Violett: wird stärker abgelenkt</text>
</svg>`,
      caption: "Isaac Newton machte dieses Experiment 1666 und erkannte, dass weißes Licht aus allen Farben besteht."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: das Licht",
      questions: [
        { type: "mc", q: "Der Mond ist…", options: ["eine Lichtquelle", "ein beleuchteter Körper", "ein durchsichtiger Körper"], answer: 1, explain: "Der Mond erzeugt kein Licht: Er wirft das der Sonne zurück." },
        { type: "mc", q: "Ein dünner Vorhang, der ein wenig Licht durchlässt, ist…", options: ["durchsichtig", "durchscheinend", "undurchsichtig"], answer: 1, explain: "Er lässt nur einen Teil des Lichts hindurch: Er ist durchscheinend." },
        { type: "tf", q: "Schatten entstehen, weil sich das Licht geradlinig ausbreitet.", answer: true, explain: "Das Licht kann undurchsichtige Gegenstände nicht umgehen." }
      ]
    },
    {
      type: "text",
      title: "Der Schall: Alles entsteht durch eine Schwingung",
      html: `<p>Leg zwei Finger an den Hals und sag „aaaa“: Du spürst ein <b>Zittern</b>. Alle Töne entstehen, weil etwas <b>schwingt</b>, also sich blitzschnell hin und her bewegt: die Stimmbänder, die Saite einer Gitarre, das Fell einer Trommel.</p>
<p>Die Schwingung stößt die Luftteilchen in der Nähe an, die die nächsten anstoßen, und so weiter: Es entsteht eine <b>Schallwelle</b>, die bis zu unserem <b>Ohr</b> gelangt. Das ist ein bisschen wie eine „Welle“ im Stadion: Die Leute bleiben an ihrem Platz, aber die Welle wandert!</p>
<p>Der Schall braucht zur Ausbreitung einen <b>Stoff</b> (Luft, Wasser, Holz, Metall). <b>Im Vakuum breitet sich der Schall nicht aus</b>: Im Weltraum herrscht völlige Stille, selbst bei einer Explosion!</p>`
    },
    {
      type: "text",
      title: "Wie schnell ist der Schall?",
      html: `<table>
<tr><th>Stoff</th><th>Schallgeschwindigkeit (etwa)</th></tr>
<tr><td>🌬️ Luft (20 °C)</td><td>340 Meter pro Sekunde</td></tr>
<tr><td>💧 Wasser</td><td>1 500 Meter pro Sekunde</td></tr>
<tr><td>🔩 Stahl</td><td>5 000–6 000 Meter pro Sekunde</td></tr>
<tr><td>🌌 Vakuum</td><td>breitet sich nicht aus</td></tr>
</table>
<p>Für uns ist der Schall sehr schnell (in der Luft mehr als 1200 km/h), aber er ist fast <b>eine Million Mal langsamer</b> als das Licht. Deshalb sieht man den Blitz sofort und der Donner kommt später.</p>
<p>In festen und flüssigen Stoffen sind die Teilchen näher beieinander und „reichen“ den Stoß schneller weiter: Deshalb legten die Ureinwohner Nordamerikas das Ohr an den Boden oder an die Schienen, um Pferde und Züge kommen zu hören.</p>`
    },
    {
      type: "svg",
      title: "Blitz und Donner",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#1e293b"/>
<ellipse cx="110" cy="50" rx="90" ry="35" fill="#64748b"/>
<polygon points="110,80 85,140 108,140 90,200 140,120 115,120 130,80" fill="#fde047"/>
<rect x="0" y="230" width="600" height="50" fill="#365314"/>
<circle cx="520" cy="185" r="16" fill="#fcd34d"/>
<rect x="508" y="200" width="24" height="32" rx="6" fill="#3b82f6"/>
<line x1="150" y1="130" x2="495" y2="180" stroke="#fde047" stroke-width="3"/>
<text x="320" y="135" font-size="17" fill="#fde047" text-anchor="middle">Licht: kommt sofort an ⚡</text>
<g fill="none" stroke="#93c5fd" stroke-width="3">
<path d="M160 195 Q170 210 160 225"/><path d="M190 190 Q205 210 190 230"/><path d="M220 185 Q240 210 220 235"/>
</g>
<text x="320" y="215" font-size="17" fill="#93c5fd" text-anchor="middle">Schall: 340 m in jeder Sekunde… 🔊</text>
<text x="300" y="265" font-size="16" fill="#f8fafc" text-anchor="middle">zähle die Sekunden zwischen Blitz und Donner und teile durch 3 → Entfernung in km</text>
</svg>`,
      caption: "In 3 Sekunden legt der Schall etwa 1 km zurück (3 × 340 = 1020 m)."
    },
    {
      type: "text",
      title: "Die Eigenschaften des Schalls und das Echo",
      html: `<ul>
<li><b>Lautstärke</b>: <b>lauter</b> oder <b>leiser</b> Ton. Sie hängt davon ab, wie weit die Schwingung ausschlägt. Man misst sie in <b>Dezibel</b> (dB): ein Flüstern etwa 30 dB, ein Gespräch 60 dB, ein Rockkonzert über 100 dB. Über 85 dB kann das Gehör auf Dauer Schaden nehmen!</li>
<li><b>Tonhöhe</b>: <b>hoher</b> Ton (wie bei einer Trillerpfeife) oder <b>tiefer</b> Ton (wie bei einem Kontrabass). Sie hängt davon ab, wie viele Schwingungen pro Sekunde es gibt (die <b>Frequenz</b>): Je schneller sie sind, desto höher ist der Ton. Kürzere und straffere Saiten geben höhere Töne.</li>
<li><b>Klangfarbe</b>: Das ist die ganz besondere „Stimme“ jedes Instruments oder jeder Person. Dasselbe <i>C</i>, auf dem Klavier und auf der Trompete gespielt, klingt verschieden: Du erkennst die Klangfarbe!</li>
</ul>
<p>Das <b>Echo</b> ist ein <b>zurückgeworfener</b> Schall: Er prallt an einer weit entfernten Wand (einem Berg, einer Mauer) ab und kommt zurück. Damit du das Echo getrennt von deiner Stimme hörst, muss das Hindernis mindestens etwa <b>17 Meter</b> entfernt sein.</p>`
    },
    {
      type: "example",
      title: "Beispiel aus der Praxis: Wie weit ist das Gewitter entfernt?",
      html: `<p>Du siehst einen Blitz und fängst an zu zählen: „eins, zwei, drei …“. Den Donner hörst du nach <b>6 Sekunden</b>.</p>
<ul>
<li>Der Schall legt etwa <b>340 Meter</b> pro Sekunde zurück.</li>
<li>340 × 6 = <b>2 040 Meter</b>, also etwa <b>2 km</b>.</li>
<li>Schneller Trick: Sekunden <b>: 3</b> = Kilometer (6 : 3 = 2 km).</li>
</ul>
<p>Werden die Sekunden bei jedem Blitz weniger, dann <b>nähert</b> sich das Gewitter: Besser, du suchst Schutz in einem Gebäude! ⛈️</p>`
    },
    {
      type: "example",
      title: "Beispiel aus der Praxis: das Dosentelefon",
      html: `<p>Bau dir ein „Telefon“ aus zwei Joghurtbechern und einer 10 Meter langen Schnur:</p>
<ol>
<li>Mach ein kleines Loch in den Boden jedes Bechers;</li>
<li>zieh die Schnur durch und mach innen einen Knoten;</li>
<li>geht auseinander, bis die Schnur <b>straff gespannt</b> ist;</li>
<li>einer spricht in seinen Becher, der andere hält seinen ans Ohr.</li>
</ol>
<p>Es funktioniert, weil die Stimme den Boden des Bechers zum Schwingen bringt, die Schwingung an der <b>Schnur</b> (einem festen Körper) entlangläuft und den anderen Becher zum Schwingen bringt. Wenn die Schnur schlaff ist oder jemand sie berührt, hört die Schwingung auf und man hört nichts mehr!</p>`
    },
    {
      type: "widget",
      title: "Licht oder Schall?",
      widget: "classify",
      options: {
        groups: ["💡 Licht", "🔊 Schall", "💡🔊 Beides"],
        items: [
          ["Breitet sich auch im Vakuum aus", 0],
          ["Entsteht durch eine Schwingung", 1],
          ["Bewegt sich mit etwa 300 000 km pro Sekunde", 0],
          ["Bewegt sich mit etwa 340 m pro Sekunde in der Luft", 1],
          ["Kann zurückgeworfen werden (Spiegel / Echo)", 2],
          ["Wird mit einem Prisma in Farben zerlegt", 0],
          ["Wird in Dezibel gemessen", 1],
          ["Ist eine Form von Energie", 2]
        ]
      },
      caption: "Ordne jeden Satz der richtigen Gruppe zu."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon…? Das Licht der Vergangenheit",
      html: `<p>Das Sonnenlicht braucht etwa <b>8 Minuten und 20 Sekunden</b>, bis es bei uns ankommt. Die Sonne, die du siehst, ist also die Sonne von vor 8 Minuten!</p>
<p>Das Licht mancher Sterne, die du nachts siehst, ist vor hunderten oder tausenden von Jahren losgeflogen: In den Himmel zu schauen ist wie ein Blick in die <b>Vergangenheit</b>. Manche dieser Sterne gibt es vielleicht gar nicht mehr!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon…? Töne, die wir nicht hören",
      html: `<p>Wir hören Töne von etwa <b>20</b> bis <b>20 000</b> Schwingungen pro Sekunde (Hertz). Darunter liegt der <b>Infraschall</b>: <b>Elefanten</b> benutzen ihn, um sich über viele Kilometer Entfernung „zu unterhalten“. Darüber liegt der <b>Ultraschall</b>: <b>Fledermäuse</b> und <b>Delfine</b> senden ihn aus und hören auf das Echo, um im Dunkeln Beute und Hindernisse zu finden (das nennt man <b>Echoortung</b>).</p>
<p>Auch Ärzte benutzen Ultraschall für die <b>Ultraschalluntersuchung</b>, um ohne Schmerzen in den Körper hineinzusehen.</p>`
    },
    {
      type: "remember",
      title: "Das solltest du dir merken",
      html: `<table>
<tr><th></th><th>💡 Licht</th><th>🔊 Schall</th></tr>
<tr><td>Entsteht durch</td><td>Lichtquellen</td><td>Schwingungen</td></tr>
<tr><td>Im Vakuum</td><td>breitet sich aus</td><td>breitet sich nicht aus</td></tr>
<tr><td>Geschwindigkeit</td><td>300 000 km/s</td><td>340 m/s in der Luft</td></tr>
<tr><td>Prallt ab</td><td>Reflexion (Spiegel)</td><td>Echo</td></tr>
<tr><td>Eigenschaften</td><td>Farben</td><td>Lautstärke, Tonhöhe, Klangfarbe</td></tr>
</table>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Licht und Schall zu verstehen",
      intro: "Licht und Schall versteht man besser mit Experimenten, Vergleichen und Modellen. Such dir deinen Weg aus!",
      tabs: [
        {
          label: "🌊 Der Stein im Teich",
          html: `<p>Wirf einen Stein in einen Teich: Es entstehen <b>Kreise</b>, die sich ausbreiten. Das Wasser fließt nicht zum Ufer: Jeder Punkt hebt und senkt sich, aber die <b>Welle</b> wandert.</p>
<p>Der Schall macht in der Luft dasselbe, aber in <b>3D</b>: Er breitet sich wie eine immer größere <b>Kugel</b> um den Sprecher aus. Deshalb hören dich auch die Leute hinter dir. Und je größer die Kugel, desto „dünner“ und schwächer ist der Schall: Deshalb hört man aus der Ferne weniger.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#e0f2fe"/>
<g fill="none" stroke="#0284c7">
<circle cx="200" cy="120" r="20" stroke-width="5"/><circle cx="200" cy="120" r="50" stroke-width="4"/><circle cx="200" cy="120" r="80" stroke-width="3"/><circle cx="200" cy="120" r="110" stroke-width="2"/>
</g>
<circle cx="200" cy="120" r="7" fill="#78716c"/>
<text x="430" y="100" font-size="20" fill="#075985" text-anchor="middle">die Wellen breiten sich aus,</text>
<text x="430" y="130" font-size="20" fill="#075985" text-anchor="middle">das Wasser bleibt da</text>
<text x="430" y="170" font-size="18" fill="#0369a1" text-anchor="middle">weit weg = schwächere Welle</text>
</svg>`
        },
        {
          label: "🎸 Das schwingende Lineal",
          html: `<p>Halte ein <b>Lineal</b> an der Tischkante fest und bring den überstehenden Teil zum Schwingen:</p>
<ul>
<li>Steht ein <b>langes</b> Stück über, schwingt es <b>langsam</b> → <b>tiefer</b> Ton;</li>
<li>bei einem <b>kurzen</b> Stück schwingt es <b>schnell</b> → <b>hoher</b> Ton;</li>
<li>wenn du es <b>stärker</b> anstößt, schwingt es weiter aus → der Ton ist <b>lauter</b> (intensiver).</li>
</ul>
<p>Du hast gerade Tonhöhe und Lautstärke entdeckt! Es ist dasselbe Prinzip wie bei Gitarren, Geigen und Harfen.</p>`
        },
        {
          label: "🫙 Das Gläser-Xylofon",
          html: `<p>Stell 6 gleiche Gläser in eine Reihe, füll sie unterschiedlich hoch mit Wasser und schlag sie leicht mit einem Löffel an.</p>
<ul>
<li>Je mehr <b>Wasser</b> im Glas ist, desto <b>tiefer</b> ist der Ton (das Glas mit viel Wasser schwingt langsamer);</li>
<li>wenn du dagegen über Flaschen <b>bläst</b>, passiert das Gegenteil: mehr Wasser → weniger Luft → <b>höherer</b> Ton, denn es schwingt die Luftsäule!</li>
</ul>
<p>Mit etwas Geduld kannst du sie stimmen und <i>Bruder Jakob</i> spielen!</p>`,
          widget: "counter",
          options: { emoji: "🥛", max: 8 }
        },
        {
          label: "🔦 Taschenlampe und Spiegel",
          html: `<p>Mach in einem dunklen Zimmer mit etwas Staub (oder dem Dampf einer Dusche) eine <b>Taschenlampe</b> an: Du siehst den Strahl <b>geradeaus</b>.</p>
<p>Richte ihn jetzt auf einen <b>Spiegel</b>: Der Strahl prallt im selben Winkel ab, wie eine Billardkugel an der Bande. Mit 2–3 Spiegeln kannst du das Licht hinlenken, wohin du willst, wie bei einem <b>Periskop</b> von U-Booten.</p>
<p>Stell zum Schluss einen Bleistift in ein Glas Wasser und schau von der Seite darauf: Er sieht geknickt aus. Das ist die <b>Brechung</b>!</p>`
        },
        {
          label: "⚛️ Licht entsteht in Atomen (3D)",
          html: `<p>Woher kommt das Licht? Aus den <b>Atomen</b>! Wenn ein Atom Energie bekommt (zum Beispiel erhitzt wird), „springt“ ein Elektron auf eine weiter entfernte Bahn. Wenn es zurückfällt, gibt es die Energie als ein <b>Lichtpaket</b> wieder ab.</p>
<p>Jedes Element sendet bestimmte Farben aus: <b>Natrium</b> (Na) erzeugt das gelbe Licht der alten Straßenlaternen und das Gelb von Feuerwerken. Sieh dir das Atommodell an.</p>`,
          scene: "atom",
          options: { elements: ["H", "He", "Na"], element: "Na" }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mindmap zu Licht und Schall: Tippe auf einen Knoten und finde heraus, warum",
      nodes: [
        { id: "energia", label: "Energie", x: 50, y: 6, color: "#f59e0b", html: "Licht und Schall sind zwei Arten, wie Energie sich bewegt.", why: "Eine Solarzelle wandelt Licht in Strom um; ein sehr lauter Ton kann die Fensterscheiben zum Zittern bringen: Beide transportieren Energie von einem Ort zum anderen, ohne Materie zu transportieren." },
        { id: "luce", label: "Licht", x: 25, y: 26, color: "#eab308", html: "Energie, die uns sehen lässt; sie bewegt sich auch im Vakuum.", why: "1865 erkannte der Schotte <b>James Clerk Maxwell</b>, dass Licht eine elektromagnetische Welle ist, wie die Radiowellen. 1905 erklärte <b>Einstein</b>, dass es auch aus „Paketen“ von Energie besteht, den Photonen." },
        { id: "velluce", label: "300 000 km/s", x: 8, y: 48, color: "#facc15", html: "Die Lichtgeschwindigkeit.", why: "<b>Galilei</b> versuchte sie mit zwei Laternen auf zwei Hügeln zu messen, aber sie war zu schnell. 1676 schätzte sie der Däne <b>Ole Rømer</b> als Erster, indem er die Monde des Jupiter beobachtete. Es ist die höchste mögliche Geschwindigkeit im Universum." },
        { id: "rifl", label: "Reflexion und Brechung", x: 30, y: 62, color: "#38bdf8", html: "Das Licht prallt ab (Spiegel) oder wird abgelenkt, wenn es den Stoff wechselt (Linsen).", why: "Das Reflexionsgesetz kannten schon <b>Euklid</b> und <b>Heron</b>. Das Brechungsgesetz fanden <b>Ibn Sahl</b> (Bagdad, 984) und Jahrhunderte später <b>Snellius</b> und <b>Descartes</b>. Galilei nutzte es in seinem Fernrohr (1609)." },
        { id: "colori", label: "Farben", x: 15, y: 86, color: "#a855f7", html: "Weißes Licht enthält alle Farben des Regenbogens.", why: "<b>Isaac Newton</b> spaltete das Licht 1666 mit einem Prisma auf und setzte es mit einem zweiten Prisma wieder zusammen. Damit zeigte er, dass Weiß eine Mischung ist. Er war es, der 7 Farben wählte, wie die 7 Töne der Tonleiter." },
        { id: "suono", label: "Schall", x: 75, y: 26, color: "#2563eb", html: "Eine Schwingung, die sich als Welle in einem Stoff ausbreitet.", why: "Schon <b>Pythagoras</b> (6. Jh. v. Chr.) entdeckte, dass halb so lange Saiten eine Oktave höher klingen. 1660 stellte <b>Robert Boyle</b> einen Wecker unter eine Glasglocke und pumpte die Luft heraus: Der Ton verschwand. Das beweist, dass man einen Stoff braucht!" },
        { id: "velsuono", label: "340 m/s", x: 92, y: 48, color: "#0ea5e9", html: "Die Schallgeschwindigkeit in der Luft.", why: "Im 17. Jahrhundert maß man sie, indem man eine Kanone abfeuerte und die Zeit zwischen Blitz und Knall bei bekannter Entfernung stoppte. In Flüssigkeiten und festen Stoffen ist er schneller, weil dort die Teilchen näher beieinander und fester verbunden sind." },
        { id: "caratt", label: "Lautstärke, Tonhöhe, Klangfarbe", x: 70, y: 62, color: "#16a34a", html: "Die drei Eigenschaften des Schalls.", why: "Lautstärke = Ausschlag der Schwingung; Tonhöhe = Frequenz (Schwingungen pro Sekunde, gemessen in <b>Hertz</b>, nach dem deutschen Physiker Heinrich Hertz); Klangfarbe = Form der Welle, die bei jedem Instrument anders ist." },
        { id: "eco", label: "Echo und Echoortung", x: 85, y: 86, color: "#14b8a6", html: "Der Schall, der abprallt und zurückkommt.", why: "Der Name stammt von der Nymphe Echo aus der griechischen Mythologie. 1794 entdeckte der Italiener <b>Lazzaro Spallanzani</b>, dass Fledermäuse sich im Dunkeln mit dem Gehör orientieren; 1938 erkannte man, dass sie Ultraschall benutzen. Daraus entstanden Sonar und Ultraschalluntersuchung." }
      ],
      edges: [
        ["energia", "luce", "bewegt sich als"],
        ["energia", "suono", "bewegt sich als"],
        ["luce", "velluce", "Geschwindigkeit"],
        ["luce", "rifl", "kann erfahren"],
        ["rifl", "colori", "das Prisma trennt die"],
        ["suono", "velsuono", "Geschwindigkeit"],
        ["suono", "caratt", "hat"],
        ["suono", "eco", "zurückgeworfen wird zum"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: der Schall",
      questions: [
        { type: "mc", q: "Wodurch entsteht jeder Schall?", options: ["Durch ein Licht", "Durch eine Schwingung", "Durch den Wind"], answer: 1, explain: "Jeder Schall entsteht durch einen Gegenstand, der schwingt." },
        { type: "tf", q: "Im leeren Weltraum kann man eine Explosion hören.", answer: false, explain: "Der Schall braucht einen Stoff: Im Vakuum breitet er sich nicht aus." },
        { type: "num", q: "Zwischen Blitz und Donner vergehen 9 Sekunden. Wie viele km ist das Gewitter ungefähr entfernt?", answer: 3, unit: "km", explain: "9 : 3 = 3 km (340 × 9 = 3060 m)." }
      ]
    }
  ],
  glossary: [
    { t: "Lichtquelle", d: "Körper, der selbst Licht erzeugt, wie die Sonne oder eine Glühbirne." },
    { t: "Undurchsichtiger Körper", d: "Körper, der kein Licht hindurchlässt und einen Schatten wirft." },
    { t: "Durchsichtiger Körper", d: "Körper, der Licht hindurchlässt, sodass man durch ihn hindurchsehen kann." },
    { t: "Reflexion", d: "Zurückprallen des Lichts (oder des Schalls) an einer Oberfläche." },
    { t: "Brechung", d: "Ablenkung des Lichts, wenn es von einem Stoff in einen anderen übergeht." },
    { t: "Schwingung", d: "Schnelle Hin-und-her-Bewegung, die den Schall erzeugt." },
    { t: "Echo", d: "Von einem Hindernis zurückgeworfener Schall, der zu dem zurückkommt, der ihn erzeugt hat." },
    { t: "Dezibel", d: "Maßeinheit für die Lautstärke des Schalls." },
    { t: "Ultraschall", d: "Töne, die für das menschliche Ohr zu hoch sind und die Fledermäuse und Delfine nutzen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche davon ist eine Lichtquelle?", options: ["Der Mond", "Eine brennende Kerze", "Ein Spiegel"], answer: 1, explain: "Die Kerze erzeugt selbst Licht; Mond und Spiegel werfen es zurück." },
      { type: "mc", q: "Eine Backsteinmauer ist ein…", options: ["durchsichtiger Körper", "durchscheinender Körper", "undurchsichtiger Körper"], answer: 2, explain: "Sie lässt kein Licht hindurch: Sie ist undurchsichtig." },
      { type: "tf", q: "Das Licht breitet sich geradlinig aus.", answer: true, explain: "Deshalb entstehen Schatten." },
      { type: "text", q: "Wie heißt das Phänomen, durch das ein Bleistift in einem Glas Wasser geknickt aussieht?", answer: ["brechung", "die brechung", "lichtbrechung", "die lichtbrechung"], explain: "Das ist die Brechung: Das Licht wird abgelenkt, wenn es vom Wasser in die Luft übergeht." },
      { type: "mc", q: "Wer entdeckte mit einem Prisma, dass weißes Licht alle Farben enthält?", options: ["Galileo Galilei", "Isaac Newton", "Alessandro Volta"], answer: 1, explain: "Isaac Newton, im Jahr 1666." },
      { type: "mc", q: "Warum sehen wir den Blitz, bevor wir den Donner hören?", options: ["Weil der Donner später losgeht", "Weil das Licht viel schneller ist als der Schall", "Weil die Augen näher am Gehirn sind"], answer: 1, explain: "Das Licht bewegt sich mit 300 000 km/s, der Schall mit etwa 340 m/s." },
      { type: "mc", q: "In welchem Stoff ist der Schall am schnellsten?", options: ["Luft", "Wasser", "Stahl"], answer: 2, explain: "In festen Stoffen bewegt sich der Schall schneller: in Stahl mit etwa 5000 m/s." },
      { type: "mc", q: "Ein hoher Ton wird von… Schwingungen erzeugt.", options: ["langsamen", "schnellen", "keinen"], answer: 1, explain: "Mehr Schwingungen pro Sekunde = höherer Ton." },
      { type: "text", q: "Wie heißt der Schall, der von einer weit entfernten Wand abprallt und zurückkommt?", answer: ["echo", "das echo"], explain: "Das ist das Echo." },
      { type: "num", q: "Der Schall bewegt sich mit 340 m pro Sekunde. Wie viele Meter legt er in 5 Sekunden zurück?", answer: 1700, unit: "m", explain: "340 × 5 = 1700 m." },
      { type: "order", q: "Bring den Weg eines Tons in die richtige Reihenfolge.", items: ["Die Gitarrensaite schwingt", "Die Luft in der Nähe wird angestoßen", "Die Schallwelle wandert durch die Luft", "Das Trommelfell im Ohr schwingt", "Das Gehirn erkennt den Ton"], explain: "Schwingung → Welle im Stoff → Ohr → Gehirn." },
      { type: "tf", q: "Fledermäuse benutzen Ultraschall, um sich im Dunkeln zu orientieren.", answer: true, explain: "Sie senden Ultraschall aus und hören auf das Echo: Das ist die Echoortung." }
    ]
  }
});

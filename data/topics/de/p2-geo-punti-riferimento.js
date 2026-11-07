TOPIC('de', {
  id: "p2-geo-punti-riferimento",
  title: "Orientierungspunkte",
  intro: "Wie schaffst du es, dich nicht zu verlaufen, wenn du zur Schule oder in den Park gehst? 🤔 Du benutzt <b>Orientierungspunkte</b>: Dinge, die du um dich herum siehst und die dir helfen zu verstehen, <b>wo du bist</b> und <b>wohin du gehen musst</b>. Heute lernen wir, uns zu <b>orientieren</b> 🧭.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Was ist ein Orientierungspunkt? 📍",
      html: `<p>Ein <b>Orientierungspunkt</b> ist etwas, das man gut sieht und das sich <b>nicht bewegt</b>.</p>
<p>Zum Beispiel, um zur Oma zu kommen: <i>„Ich gehe am <b>Brunnen</b> ⛲ vorbei, biege in der Nähe der <b>Apotheke</b> ➕ ab und das Haus ist das mit der <b>grünen Tür</b> 🟩.“</i></p>
<p>Ein guter Orientierungspunkt ist:</p>
<ul>
<li>👀 <b>leicht zu sehen</b> (groß, bunt, hoch);</li>
<li>🧱 <b>fest</b>: Er bleibt immer dort;</li>
<li>⭐ <b>besonders</b>: Es gibt in der Nähe nicht viele gleiche.</li>
</ul>
<p><b>Sich orientieren</b> heißt verstehen, wo man sich befindet und welchen Weg man nehmen muss.</p>`
    },
    {
      type: "text",
      title: "Fest oder beweglich? 🌳🚗",
      html: `<p>Achtung: Nicht alle Dinge eignen sich als Orientierungspunkte!</p>
<table>
<tr><th>✅ Fest (geeignet)</th><th>❌ Beweglich (nicht geeignet)</th></tr>
<tr><td>⛪ eine Kirche</td><td>🚗 ein geparktes Auto</td></tr>
<tr><td>🌳 ein großer Baum</td><td>🐕 ein schlafender Hund</td></tr>
<tr><td>⛲ ein Brunnen</td><td>🚌 der Bus</td></tr>
<tr><td>🏔️ ein Berg</td><td>☁️ eine Wolke</td></tr>
<tr><td>🏫 die Schule</td><td>🧑 ein Mann, der auf der Bank sitzt</td></tr>
</table>
<p>Wenn ich sage <i>„Biege dort ab, wo das rote Auto steht“</i> und das Auto fährt weg … verlaufe ich mich! 😵</p>`
    },
    {
      type: "widget",
      title: "Spiel: fest oder beweglich?",
      widget: "classify",
      options: {
        groups: ["🧱 Fest: guter Orientierungspunkt", "🚶 Beweglich: nicht geeignet"],
        items: [
          ["⛪ Kirchturm", 0],
          ["🚲 Fahrrad", 1],
          ["🌉 Brücke", 0],
          ["🐈 Katze", 1],
          ["🏰 Burg", 0],
          ["🚚 Lastwagen", 1],
          ["🗼 Turm", 0],
          ["🎈 Luftballon", 1],
          ["🚦 Ampel", 0]
        ]
      },
      caption: "Ordne jedes Ding der richtigen Gruppe zu."
    },
    {
      type: "text",
      title: "Die Wörter zum Orientieren ↔️↕️",
      html: `<p>Um zu erklären, wo etwas ist, benutzen wir die <b>Wörter der Lage</b>. Sie hängen davon ab, <b>wer schaut</b>!</p>
<ul>
<li>⬆️⬇️ <b>über</b> / <b>unter</b>: Das Bild hängt <i>über</i> der Tafel.</li>
<li>➡️⬅️ <b>vor</b> / <b>hinter</b>: Der Garten ist <i>hinter</i> der Schule.</li>
<li>👈👉 <b>links</b> / <b>rechts</b>: Die Tür ist <i>rechts von mir</i>.</li>
<li>🤏📏 <b>nah</b> / <b>weit</b>: Das Café ist <i>nah</i> bei meinem Haus.</li>
<li>🎯 <b>in der Mitte</b> / <b>zwischen</b>: Die Bank steht <i>zwischen</i> zwei Bäumen.</li>
</ul>
<p>💡 <b>Trick für rechts:</b> Die rechte Hand ist meistens die, mit der du schreibst (wenn du Linkshänder bist, ist es die andere!). Viele Kinder tragen ein Armband am rechten Handgelenk.</p>`
    },
    {
      type: "svg",
      title: "Wo befindet es sich? Schau dir die Zeichnung an",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#bae6fd"/>
<rect y="230" width="600" height="90" fill="#86efac"/>
<rect x="230" y="110" width="150" height="120" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<polygon points="220,110 305,50 390,110" fill="#b91c1c"/>
<rect x="290" y="170" width="35" height="60" fill="#7c2d12"/>
<text x="305" y="150" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">SCHULE</text>
<rect x="95" y="160" width="16" height="70" fill="#78350f"/>
<circle cx="103" cy="140" r="40" fill="#16a34a"/>
<text x="103" y="265" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Baum</text>
<circle cx="490" cy="215" r="28" fill="#93c5fd" stroke="#1e40af" stroke-width="3"/>
<rect x="484" y="170" width="12" height="30" fill="#64748b"/>
<text x="490" y="265" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Brunnen</text>
<circle cx="520" cy="50" r="28" fill="#facc15"/>
<text x="520" y="100" font-size="16" text-anchor="middle" fill="#92400e" font-weight="bold">Sonne</text>
<rect x="400" y="280" width="60" height="22" rx="5" fill="#a16207"/>
<text x="430" y="297" font-size="13" text-anchor="middle" fill="#ffffff">Bank</text>
<text x="190" y="300" font-size="17" text-anchor="middle" fill="#0f172a">Der Baum ist LINKS von der Schule</text>
</svg>`,
      caption: "Wenn du die Zeichnung ansiehst: Der Baum ist links von der Schule, der Brunnen rechts, die Sonne über dem Brunnen."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Schau dir die Zeichnung an",
      questions: [
        { type: "mc", q: "Was ist in der Zeichnung rechts von der Schule?", options: ["Der Baum", "Der Brunnen", "Nichts"], answer: 1, explain: "Der Brunnen ist rechts von der Schule." },
        { type: "tf", q: "Ein geparktes Auto ist ein guter Orientierungspunkt.", answer: false, explain: "Autos fahren weg: Es ist kein fester Punkt." },
        { type: "mc", q: "Welches Wort ist das Gegenteil von „nah“?", options: ["unter", "weit", "hinter"], answer: 1, explain: "Nah ↔ weit." }
      ]
    },
    {
      type: "text",
      title: "Die Sonne: ein Orientierungspunkt am Himmel ☀️",
      html: `<p>Auch der Himmel hilft uns beim Orientieren!</p>
<ul>
<li>🌅 Morgens <b>geht</b> die Sonne im <b>OSTEN</b> <b>auf</b>.</li>
<li>🌞 Mittags steht sie hoch im <b>SÜDEN</b>.</li>
<li>🌇 Abends <b>geht</b> sie auf der gegenüberliegenden Seite <b>unter</b>, im <b>WESTEN</b>.</li>
<li>🧊 Hinter uns, wenn wir zur Mittagssonne schauen, liegt der <b>NORDEN</b>.</li>
</ul>
<p>Norden, Süden, Osten und Westen sind die <b>Himmelsrichtungen</b>. Sie sind für alle gleich, auf der ganzen Welt: Darum sind sie genauer als „rechts“ und „links“.</p>
<p>🧭 Der <b>Kompass</b> hat eine magnetische Nadel, die immer nach <b>Norden</b> zeigt.</p>`
    },
    {
      type: "svg",
      title: "Die Windrose",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fefce8"/>
<circle cx="300" cy="160" r="120" fill="#e0f2fe" stroke="#0369a1" stroke-width="4"/>
<polygon points="300,45 318,160 300,175 282,160" fill="#dc2626"/>
<polygon points="300,275 318,160 300,145 282,160" fill="#1e3a8a"/>
<polygon points="185,160 300,142 315,160 300,178" fill="#64748b"/>
<polygon points="415,160 300,142 285,160 300,178" fill="#f59e0b"/>
<circle cx="300" cy="160" r="8" fill="#0f172a"/>
<text x="300" y="30" font-size="22" text-anchor="middle" fill="#dc2626" font-weight="bold">N - Norden</text>
<text x="300" y="305" font-size="22" text-anchor="middle" fill="#1e3a8a" font-weight="bold">S - Süden</text>
<text x="490" y="168" font-size="22" text-anchor="middle" fill="#b45309" font-weight="bold">O - Osten</text>
<text x="105" y="168" font-size="22" text-anchor="middle" fill="#475569" font-weight="bold">W - Westen</text>
<text x="530" y="210" font-size="15" text-anchor="middle" fill="#b45309">die Sonne geht auf</text>
<text x="80" y="210" font-size="15" text-anchor="middle" fill="#475569">die Sonne geht unter</text>
</svg>`,
      caption: "Die Windrose zeigt die 4 Himmelsrichtungen. Die rote Nadel des Kompasses zeigt nach Norden."
    },
    {
      type: "example",
      title: "Praktisches Beispiel: der Weg zur Schule 🎒",
      html: `<p>Sara beschreibt ihren Weg mithilfe der Orientierungspunkte:</p>
<ol>
<li>🏠 Ich gehe aus dem Haus und laufe zur <b>Bäckerei</b> 🥖.</li>
<li>➡️ An der Bäckerei biege ich <b>rechts</b> ab.</li>
<li>⛲ Ich gehe geradeaus bis zum <b>Brunnen</b> auf dem Platz.</li>
<li>⬅️ Am Brunnen biege ich <b>links</b> ab.</li>
<li>🏫 Die Schule liegt <b>vor</b> mir, neben der <b>Kirche</b> ⛪.</li>
</ol>
<p>Probier es auch: Schreibe den Weg von deinem Zuhause zur Schule mit mindestens <b>3 Orientierungspunkten</b> auf!</p>`
    },
    {
      type: "example",
      title: "Praktisches Beispiel: verloren auf dem Spielplatz 🎠",
      html: `<p>Luca hat sich von der Mama entfernt und sieht sie nicht mehr. Was tut er?</p>
<ul>
<li>😮‍💨 Er bleibt stehen und atmet durch.</li>
<li>👀 Er sucht einen <b>Orientierungspunkt</b>, den er kennt: die große <b>gelbe Rutsche</b>, in der Nähe der Stelle, wo sie gesessen hatten.</li>
<li>🚶 Er geht zur Rutsche zurück und wartet dort.</li>
</ul>
<p>💡 Ein Rat: Wenn du an einen neuen Ort kommst, such dir mit deinen Eltern einen leicht sichtbaren <b>Treffpunkt</b> aus („Wir treffen uns unter der großen Uhr“).</p>`
    },
    {
      type: "3d",
      title: "Orientierungspunkte in der Natur 🏞️",
      scene: "terrain",
      caption: "Dreh die Landschaft und tippe auf die Teile: Es sind natürliche Orientierungspunkte, groß und fest.",
      options: {
        features: {
          mountain: { label: "Berg", html: "Man sieht ihn von sehr weit und er bewegt sich nie: ein perfekter Orientierungspunkt. Wer zum Beispiel in Turin wohnt, sieht die Alpen und den Monviso." },
          peak: { label: "Gipfel", html: "Die Spitze des Berges. Wanderer benutzen sie, um zu verstehen, in welche Richtung sie gehen müssen." },
          river: { label: "Fluss", html: "Wenn man einem Fluss folgt, kommt man zum Meer oder zu einem See. Viele Städte sind an Flüssen entstanden: „Ich wohne diesseits oder jenseits des Flusses“." },
          lake: { label: "See", html: "Eine große Fläche stillen Süßwassers: auch von oben leicht zu erkennen." },
          hill: { label: "Hügel", html: "Niedriger als der Berg. Auf Hügeln steht oft eine Burg oder eine Kirche, die man von weitem sieht." },
          valley: { label: "Tal", html: "Der tiefe Teil zwischen zwei Bergen. Oft gibt es dort einen Fluss, und die Hauptstraße führt hindurch." },
          sea: { label: "Meer", html: "An der Küste ist das Meer ein ausgezeichneter Anhaltspunkt: „Der Strand ist in diese Richtung“." }
        }
      }
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🗿",
      html: `<p>Im hohen Norden Kanadas, wo es nur Schnee und Eis gibt und alles gleich aussieht, bauen die <b>Inuit</b> die <b>Inukshuk</b>: Steinhaufen in Form eines Menschen. Sie dienen als <b>Orientierungspunkte</b>, um den Weg, einen guten Platz zum Fischen oder eine Gefahr anzuzeigen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🐝",
      html: `<p>Auch Tiere benutzen Orientierungspunkte! <b>Bienen</b> merken sich Bäume und Häuser, um zum Bienenstock zurückzufinden, und benutzen die <b>Sonne</b> als Kompass. <b>Brieftauben</b> finden aus Hunderten von Kilometern nach Hause zurück, mithilfe der Sonne, des Magnetfelds der Erde sowie der Flüsse und Straßen, die sie von oben sehen.</p>`
    },
    {
      type: "widget",
      title: "Finde die Orientierungspunkte auf dem Plan",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#dcfce7"/>
<rect x="0" y="130" width="600" height="40" fill="#9ca3af"/>
<rect x="280" y="0" width="40" height="300" fill="#9ca3af"/>
<rect x="60" y="40" width="120" height="70" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/>
<rect x="400" y="30" width="80" height="80" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<circle cx="440" cy="70" r="12" fill="#92400e"/>
<circle cx="300" cy="150" r="22" fill="#60a5fa" stroke="#1e40af" stroke-width="3"/>
<circle cx="120" cy="230" r="35" fill="#16a34a"/>
<rect x="400" y="200" width="120" height="70" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
</svg>`,
        spots: [
          { x: 120, y: 75, label: "Schule" },
          { x: 440, y: 70, label: "Kirche mit Kirchturm" },
          { x: 300, y: 150, label: "Brunnen" },
          { x: 120, y: 230, label: "Großer Baum" },
          { x: 460, y: 235, label: "Bibliothek" }
        ]
      },
      caption: "Klicke auf jeden Punkt und wähle den Namen. Der Brunnen liegt genau an der Kreuzung der beiden Straßen!"
    },
    {
      type: "alternatives",
      title: "Andere Wege, sich zu orientieren",
      intro: "In der Welt orientieren sich die Menschen auf viele verschiedene Arten. Probiere sie aus!",
      tabs: [
        {
          label: "🌊 Die polynesischen Seefahrer",
          html: `<p>Im Pazifischen Ozean reisten die <b>Polynesier</b> vor Tausenden von Jahren im Kanu von einer Insel zur anderen, über Tausende von Kilometern, <b>ohne Kompass und ohne Karten</b>!</p>
<ul>
<li>⭐ Nachts schauten sie auf die <b>Sterne</b>: Jeder geht an einer ganz bestimmten Stelle des Horizonts auf.</li>
<li>🌊 Sie spürten die Form der <b>Wellen</b> unter dem Kanu.</li>
<li>🐦 Sie folgten den <b>Meeresvögeln</b>, die abends zum Land zurückfliegen.</li>
<li>☁️ Sie suchten nach den <b>Wolken</b>, die über den Inseln stillstehen.</li>
</ul>
<p>Für sie waren die Sterne, die Wellen und die Vögel Orientierungspunkte!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -17.5, lon: -149.6, label: "Tahiti", color: "#f97316" },
              { lat: 19.6, lon: -155.5, label: "Hawaii", color: "#ef4444" },
              { lat: -41, lon: 174, label: "Neuseeland", color: "#22c55e" },
              { lat: -27.1, lon: -109.4, label: "Osterinsel", color: "#a855f7" }
            ],
            routes: [{ points: [0, 1], color: "#0ea5e9" }, { points: [0, 2], color: "#0ea5e9" }, { points: [0, 3], color: "#0ea5e9" }]
          }
        },
        {
          label: "🎶 Die „Traumpfade“ Australiens",
          html: `<p>Die <b>Aborigines</b> Australiens haben die <b>Songlines</b>, die „Lieder-Wege“: lange Lieder, die nacheinander die Orientierungspunkte der Reise beschreiben (einen Felsen, ein Wasserloch, einen Hügel).</p>
<p>Wenn man das Lied singt, erinnert man sich an den Weg! 🎵 Es ist ein bisschen, als würdest du einen Reim erfinden: <i>„Am Bäcker rechts, am Brunnen schlecht, dann links die Kirche, das ist richtig …“</i></p>`
        },
        {
          label: "🤖 Wie das Navi im Auto",
          html: `<p>Das <b>Navigationsgerät</b> (GPS) von Handys und Autos spricht genau mit Orientierungspunkten: <i>„In 200 Metern im Kreisverkehr die zweite Ausfahrt nehmen“</i>.</p>
<p>Es weiß, wo du bist, dank der <b>Satelliten</b>, die um die Erde kreisen 🛰️: Das Handy empfängt ihre Signale und berechnet seine Position. Aber auch das Navi braucht eine <b>Karte</b> und Wörter wie rechts, links, geradeaus.</p>`
        },
        {
          label: "🧍 Das Körperspiel",
          html: `<p>Stell dich in die Mitte des Zimmers. 🧍</p>
<ol>
<li>Zeige mit der rechten Hand auf die <b>Tür</b>.</li>
<li>Dreh dich um: Jetzt ist die Tür <b>hinter</b> dir!</li>
<li>Dreh dich noch einmal um eine Vierteldrehung: Ist sie jetzt <b>links</b>?</li>
</ol>
<p>Du hast entdeckt, dass sich <b>rechts, links, vorn und hinten ändern</b>, wenn du dich drehst, aber die Tür bleibt immer dort. Darum sind feste Orientierungspunkte so nützlich!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f1f5f9"/>
<circle cx="300" cy="80" r="26" fill="#fcd9b6" stroke="#92400e" stroke-width="2"/>
<rect x="278" y="108" width="44" height="70" rx="8" fill="#3b82f6"/>
<line x1="230" y1="130" x2="278" y2="125" stroke="#334155" stroke-width="8"/>
<line x1="322" y1="125" x2="370" y2="130" stroke="#334155" stroke-width="8"/>
<text x="160" y="140" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">LINKS</text>
<text x="450" y="140" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">RECHTS</text>
<text x="300" y="30" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">VORN (zu dir hin)</text>
<text x="300" y="208" font-size="16" text-anchor="middle" fill="#475569">Das Kind schaut dich an: Seine rechte Seite ist auf deiner linken!</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte: Wie wir uns orientieren",
      nodes: [
        { id: "orientarsi", label: "Sich orientieren", x: 50, y: 6, color: "#6366f1", html: "<p>Verstehen, wo wir sind und wohin wir gehen.</p>", why: "<p>Das Wort kommt vom <b>Orient</b>, also dem Osten, wo die Sonne aufgeht. Früher zeichnete man Landkarten und baute Kirchen „nach Osten ausgerichtet“: Sich zu orientieren hieß genau, den Osten zu finden.</p>" },
        { id: "riferimento", label: "Orientierungspunkte", x: 25, y: 30, color: "#f97316", html: "<p>Feste, gut sichtbare Dinge: eine Kirche, ein Baum, ein Brunnen.</p>", why: "<p>Unser Gehirn merkt sich <b>Bilder</b> besser als Wörter. Im Gehirn gibt es einen Teil, den <b>Hippocampus</b>, der eine Art „Karte“ der Orte erstellt: Die Wissenschaftler, die das entdeckten, bekamen 2014 den Nobelpreis.</p>" },
        { id: "posizione", label: "Wörter der Lage", x: 75, y: 30, color: "#0ea5e9", html: "<p>Über, unter, vor, hinter, rechts, links, nah, weit.</p>", why: "<p>Diese Wörter hängen davon ab, <b>wer schaut</b>: Dein Rechts ist das Links dessen, der dir gegenübersteht. Darum sind sie bequem, können aber verwirren.</p>" },
        { id: "fissi", label: "Fest und beweglich", x: 10, y: 55, color: "#16a34a", html: "<p>Nur Dinge, die sich nicht bewegen, sind gute Anhaltspunkte.</p>", why: "<p>Ein Anhaltspunkt muss immer am selben Ort sein, sonst funktioniert die Wegbeschreibung beim nächsten Mal nicht mehr.</p>" },
        { id: "sole", label: "Die Sonne", x: 45, y: 55, color: "#eab308", html: "<p>Sie geht im Osten auf und im Westen unter.</p>", why: "<p>Die Sonne scheint sich am Himmel zu bewegen, aber in Wirklichkeit dreht sich die <b>Erde</b> einmal am Tag von West nach Ost um sich selbst. Darum sehen wir die Sonne immer auf der Ostseite aufgehen.</p>" },
        { id: "cardinali", label: "Himmelsrichtungen", x: 75, y: 72, color: "#ef4444", html: "<p>Norden, Süden, Osten, Westen.</p>", why: "<p>Sie sind für alle auf der ganzen Welt gleich, weil sie von der Erde abhängen und nicht von uns. Man nennt sie auch „Kardinalrichtungen“, vom lateinischen <i>cardo</i>, Türangel: Sie sind die „Angeln“, um die sich die Orientierung dreht.</p>" },
        { id: "bussola", label: "Der Kompass", x: 45, y: 92, color: "#a855f7", html: "<p>Gerät mit einer Nadel, die nach Norden zeigt.</p>", why: "<p>Die Erde ist wie ein riesiger <b>Magnet</b>: Die Magnetnadel dreht sich nach Norden. Der Kompass wurde in <b>China</b> erfunden und kam im Mittelalter nach Europa; die Seeleute aus <b>Amalfi</b> benutzten ihn viel.</p>" },
        { id: "mappe", label: "Karten", x: 15, y: 85, color: "#14b8a6", html: "<p>Zeichnungen von Orten, von oben gesehen.</p>", why: "<p>Auf einer Karte sind die Orientierungspunkte mit <b>Symbolen</b> gezeichnet: So kann jeder den Weg auch an einem nie gesehenen Ort finden.</p>" }
      ],
      edges: [
        ["orientarsi", "riferimento", "mit den"],
        ["orientarsi", "posizione", "mit den"],
        ["riferimento", "fissi", "müssen sein"],
        ["orientarsi", "sole", "auch mit der"],
        ["sole", "cardinali", "zeigt die"],
        ["cardinali", "bussola", "gefunden mit dem"],
        ["riferimento", "mappe", "gezeichnet auf den"],
        ["posizione", "cardinali", "genauer:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Sonne und der Kompass",
      questions: [
        { type: "mc", q: "Auf welcher Seite geht die Sonne auf?", options: ["Norden", "Osten", "Westen"], answer: 1, explain: "Die Sonne geht im Osten auf." },
        { type: "mc", q: "Wohin zeigt die Nadel des Kompasses?", options: ["Nach Norden", "Zur Sonne", "Nach Hause"], answer: 0, explain: "Die Magnetnadel zeigt immer nach Norden." },
        { type: "num", q: "Wie viele Himmelsrichtungen gibt es?", answer: 4, tol: 0, explain: "Norden, Süden, Osten und Westen." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir 📌",
      html: `<ul>
<li>Ein <b>Orientierungspunkt</b> ist etwas <b>Festes</b> und <b>leicht zu Sehendes</b>.</li>
<li>Die Wörter der Lage (rechts, links, vor, hinter …) <b>ändern sich</b>, wenn wir uns drehen.</li>
<li>Die Sonne geht im <b>Osten</b> auf und im <b>Westen</b> unter.</li>
<li>Die <b>Himmelsrichtungen</b> sind Norden, Süden, Osten, Westen; der <b>Kompass</b> zeigt nach Norden.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Orientierungspunkt", d: "Etwas Festes und gut Sichtbares, das uns hilft, uns zu orientieren." },
    { t: "Sich orientieren", d: "Verstehen, wo man sich befindet und welche Richtung man nehmen muss." },
    { t: "Fest", d: "Was sich nie bewegt." },
    { t: "Beweglich", d: "Was man bewegen kann oder was sich von allein bewegt." },
    { t: "Himmelsrichtungen", d: "Norden, Süden, Osten, Westen: die für alle gleichen Richtungen." },
    { t: "Kompass", d: "Gerät mit einer Magnetnadel, die nach Norden zeigt." },
    { t: "Windrose", d: "Sternförmige Zeichnung, die die Himmelsrichtungen zeigt." },
    { t: "Weg", d: "Die Strecke, die man geht, um von einem Ort zum anderen zu kommen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist der beste Orientierungspunkt?", options: ["🐕 Ein Hund", "⛪ Ein Kirchturm", "☁️ Eine Wolke"], answer: 1, explain: "Der Kirchturm ist fest und von weitem zu sehen." },
      { type: "tf", q: "Ein Orientierungspunkt muss fest sein.", answer: true, explain: "Wenn er sich bewegt, hilft er uns nicht mehr, den Weg zu finden." },
      { type: "mc", q: "Das Gegenteil von „über“ ist …", options: ["unter", "hinter", "weit"], answer: 0, explain: "Über ↔ unter." },
      { type: "mc", q: "Die Sonne geht im … unter.", options: ["Osten", "Westen", "Norden"], answer: 1, explain: "Sie geht im Osten auf und im Westen unter." },
      { type: "text", q: "Wie heißt das Gerät, das nach Norden zeigt?", answer: ["Kompass", "der Kompass"], explain: "Der Kompass, mit seiner Magnetnadel." },
      { type: "order", q: "Bring Saras Weg in die richtige Reihenfolge: Haus → … → Schule.", items: ["Ich gehe aus dem Haus", "An der Bäckerei biege ich rechts ab", "Ich komme zum Brunnen", "Ich biege links ab", "Ich gehe in die Schule"], explain: "Das ist die Reihenfolge des im Beispiel beschriebenen Weges." },
      { type: "tf", q: "Wenn ich mich drehe, ändern sich mein Rechts und mein Links in Bezug auf die Dinge um mich herum.", answer: true, explain: "Rechts und links hängen davon ab, wie ich gedreht bin." },
      { type: "mc", q: "Eine Person steht dir gegenüber und hebt ihre rechte Hand. Auf welcher Seite siehst du sie?", options: ["Auf meiner rechten", "Auf meiner linken", "Über mir"], answer: 1, explain: "Wer dir gegenübersteht, ist umgekehrt gedreht: Seine rechte Seite ist auf deiner linken." },
      { type: "num", q: "Wie viele Himmelsrichtungen gibt es?", answer: 4, tol: 0, explain: "Norden, Süden, Osten, Westen." },
      { type: "mc", q: "Was bauen die Inuit, um den Weg anzuzeigen?", options: ["Inukshuk, Steinhaufen", "Ampeln", "Eistürme"], answer: 0, explain: "Inukshuk sind Orientierungspunkte aus Stein." },
      { type: "text", q: "Die Himmelsrichtung gegenüber dem Norden ist der …", answer: ["Süden", "der Süden", "Sueden"], explain: "Norden ↔ Süden, Osten ↔ Westen." }
    ]
  }
});

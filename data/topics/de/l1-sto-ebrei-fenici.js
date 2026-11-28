TOPIC('de', {
  id: "l1-sto-ebrei-fenici",
  title: "Hebräer, Phönizier und die Völker des Mittelmeerraums",
  intro: "Um <b>1200 v. Chr.</b> erlebt der Vordere Orient eine große Krise: Reiche brechen zusammen, Städte werden zerstört, die „Seevölker“ wandern. Aus den Trümmern gehen kleinere Völker hervor, die ein gewaltiges Erbe hinterlassen sollten. Die <b>Hebräer</b> entwickeln die Idee eines <b>einzigen Gottes</b> und einen Schatz an Gesetzen und Erzählungen, der Judentum, Christentum und Islam zugrunde liegt. Die <b>Phönizier</b>, geschickte Seefahrer und Händler, gründen Kolonien im ganzen Mittelmeer und verbreiten das <b>Alphabet</b>, von dem die heutigen Schriften abstammen. In dieser Lektion begegnen wir ihnen und ihren Nachbarn.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Der Vordere Orient nach 1200 v. Chr.",
      html: `<p>Um <b>1200 v. Chr.</b> brachen viele Kulturen der Bronzezeit fast gleichzeitig zusammen: Die Hethiter verschwanden, die mykenischen Städte und Ugarit wurden zerstört, Ägypten wurde geschwächt. Die Ägypter sprechen von den <b>Seevölkern</b>, rätselhaften Gruppen, die vom Meer her angriffen. Die Ursachen sind noch umstritten: Dürre, Erdbeben, Wanderungen, Zusammenbruch des Bronzehandels, innere Aufstände.</p>
<p>Im Machtvakuum entstehen oder erstarken <b>kleine Reiche</b> auf dem Landstreifen zwischen dem Mittelmeer und der syrisch-arabischen Wüste, in der Region <b>Kanaan</b> (heute Libanon, Israel, Palästina):</p>
<ul>
<li>die <b>Phönizier</b> an der Küste (Libanon);</li>
<li>die <b>Hebräer</b> (oder Israeliten) im Bergland des Landesinneren;</li>
<li>die <b>Philister</b> an der Südküste (daher „Palästina“);</li>
<li>die <b>Aramäer</b> in Syrien, deren Sprache zur Verkehrssprache des Vorderen Orients werden wird.</li>
</ul>
<p>Weiter westlich erscheint um das 7. Jh. v. Chr. im Königreich <b>Lydien</b> (Anatolien) eine weitere grundlegende Erfindung: das geprägte <b>Geld</b> (König Krösus).</p>`
    },
    {
      type: "3d",
      title: "3D-Karte: Phönizier und Hebräer im Mittelmeer",
      scene: "spacetime",
      caption: "Die Grundfläche ist das Mittelmeer, die Höhe ist die Zeit (1200–500 v. Chr.). Tippe auf die Ereignisse: Die Pfeile verbinden Ursachen und Wirkungen.",
      options: {
        lat: [29, 42],
        lon: [-8, 40],
        years: [-1250, -500],
        places: [
          { lat: 33.27, lon: 35.2, label: "Tyros" },
          { lat: 31.78, lon: 35.22, label: "Jerusalem" },
          { lat: 36.85, lon: 10.32, label: "Karthago" },
          { lat: 36.53, lon: -6.29, label: "Cádiz" }
        ],
        events: [
          { id: "mare", lat: 33.5, lon: 36.0, year: -1200, label: "Krise und Seevölker", html: "Um 1200 v. Chr. brechen viele Reiche der Bronzezeit zusammen: Raum für neue Völker und Stadtstaaten.", causes: [] },
          { id: "fenici", lat: 34.1, lon: 35.65, year: -1100, label: "Die phönizischen Städte", html: "Byblos, Sidon und Tyros werden zu Handelsmächten. Sie entwickeln ein <b>Alphabet mit 22 Zeichen</b> (nur Konsonanten).", causes: ["mare"] },
          { id: "davide", lat: 31.78, lon: 35.22, year: -1000, label: "David und Jerusalem", html: "König David eint die Stämme Israels und macht Jerusalem zur Hauptstadt (um 1000 v. Chr.). Sein Sohn Salomo baut den Tempel (um 960 v. Chr.).", causes: ["mare"] },
          { id: "cadice", lat: 36.53, lon: -6.29, year: -1000, label: "Gadir (Cádiz)", html: "Eine der ältesten phönizischen Kolonien im Westen (der Überlieferung nach um 1100 v. Chr.): Sie suchen Silber und Zinn aus Spanien.", causes: ["fenici"] },
          { id: "cartagine", lat: 36.85, lon: 10.32, year: -814, label: "Gründung Karthagos", html: "Nach der Überlieferung gründet 814 v. Chr. die Prinzessin Elissa-Dido von Tyros in Afrika Karthago („neue Stadt“), das zur größten Macht des westlichen Mittelmeers werden wird.", causes: ["fenici"] },
          { id: "scisma", lat: 32.2, lon: 35.2, year: -930, label: "Das Reich teilt sich", html: "Nach dem Tod Salomos (um 930 v. Chr.) spaltet sich das Reich: Israel im Norden (Hauptstadt Samaria) und Juda im Süden (Jerusalem).", causes: ["davide"] },
          { id: "assiri", lat: 32.2, lon: 35.2, year: -722, label: "Die Assyrer zerstören Israel", html: "722 v. Chr. erobern die Assyrer Samaria und deportieren einen großen Teil der Bevölkerung: die „zehn verlorenen Stämme“.", causes: ["scisma"] },
          { id: "babilonia", lat: 31.78, lon: 35.22, year: -586, label: "Zerstörung des Tempels", html: "586 v. Chr. erobert Nebukadnezar II. Jerusalem, zerstört den Tempel und deportiert die Oberschicht nach Babylon: Das ist das <b>babylonische Exil</b>. Die Hebräer halten viele heilige Texte schriftlich fest.", causes: ["assiri"] },
          { id: "ciro", lat: 31.78, lon: 35.22, year: -539, label: "Rückkehr aus Babylon", html: "539 v. Chr. erobert Kyros der Große, König der Perser, Babylon und erlaubt den Verbannten die Rückkehr. Der Zweite Tempel wird um 516 v. Chr. geweiht.", causes: ["babilonia"] }
        ]
      }
    },
    {
      type: "text",
      title: "2. Die Hebräer: eine Geschichte, ein Glaube",
      html: `<p>Unsere wichtigsten Quellen sind die heiligen Texte, die in der <b>hebräischen Bibel</b> (<i>Tanach</i>) gesammelt sind; Historiker lesen sie als religiöse und als historische Quelle, die mit der Archäologie abgeglichen werden muss.</p>
<ul>
<li><b>Die Erzväter</b>: Nach der Überlieferung verlässt <b>Abraham</b> Ur in Mesopotamien und zieht nach Kanaan, mit der Verheißung Gottes: ein Land und Nachkommen. Es folgen Isaak und Jakob (Israel).</li>
<li><b>Der Exodus</b>: Die Hebräer leben nach dem biblischen Bericht als Sklaven in Ägypten und werden von <b>Mose</b> nach Kanaan geführt (der Überlieferung nach im 13. Jh. v. Chr.). Am <b>Sinai</b> empfangen sie das Gesetz (die <b>Zehn Gebote</b>) und schließen einen <b>Bund</b> mit Gott. Das jüdische Pessachfest (<i>Pesach</i>) erinnert an diese Befreiung.</li>
<li><b>Richter und Könige</b>: Nach der Ansiedlung in Kanaan werden die zwölf Stämme von charismatischen Anführern (den Richtern) geführt. Zur Verteidigung gegen die Philister wählen sie einen König: <b>Saul</b>, dann <b>David</b> (um 1000 v. Chr.), der <b>Jerusalem</b> erobert, und <b>Salomo</b>, der Erbauer des Tempels.</li>
<li><b>Teilung</b> (um 930 v. Chr.): <b>Israel</b> im Norden und <b>Juda</b> im Süden. Die Assyrer zerstören Israel (722 v. Chr.), Babylon zerstört Juda (586 v. Chr.).</li>
<li><b>Rückkehr</b> dank der persischen Toleranz (539 v. Chr.): Wiederaufbau des Tempels und Festlegung der <b>Tora</b> als Gesetz. Das Volk von Juda erhält den Namen <b>Judäer</b> (daher „Juden“ im modernen Sinn).</li>
</ul>
<p>Achtung: Für die Historiker sind viele Einzelheiten (Exodus, Erzväter, Größe des Reiches Davids) umstritten, weil direkte archäologische Belege fehlen.</p>`
    },
    {
      type: "text",
      title: "3. Die große Neuerung: ein einziger Gott",
      html: `<p>Fast alle Völker der Antike waren <b>polytheistisch</b>: viele Götter, oft an eine Stadt, an ein Naturphänomen, an ein Handwerk gebunden. Die Hebräer entwickeln allmählich den <b>Monotheismus</b>: ein einziger Gott, <b>Jahwe</b>, Schöpfer von allem, unsichtbar (er darf nicht in Bildern dargestellt werden), gerecht und durch einen <b>Bund</b> mit seinem Volk verbunden.</p>
<ul>
<li>Gott ist nicht die Natur: Er steht <b>über</b> der Natur und der Geschichte. Die Geschichte hat einen Sinn und eine Richtung (Befreiung, Gerechtigkeit, Erwartung des Messias).</li>
<li>Das <b>Gesetz</b> betrifft das ganze Leben: Kult, Recht, Familie, Speisen, Umgang mit dem Fremden und dem Armen.</li>
<li>Die <b>Propheten</b> (Jesaja, Jeremia, Ezechiel ...) sagen nicht wie Wahrsager die Zukunft voraus, sondern mahnen Volk und Könige zu sozialer Gerechtigkeit und Treue.</li>
<li>Die heiligen Bücher (<b>Tora</b>, Propheten, Schriften) werden vor allem nach dem Exil schriftlich festgelegt und werden zur gemeinsamen Identität des Volkes, auch ohne Staat und ohne Tempel.</li>
</ul>
<p>Aus dem <b>Judentum</b> werden das <b>Christentum</b> (1. Jh. n. Chr.) und der <b>Islam</b> (7. Jh. n. Chr.) hervorgehen: die drei großen monotheistischen Religionen.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Hebräer",
      questions: [
        { type: "mc", q: "Wer führte die Hebräer der Überlieferung nach aus Ägypten?", options: ["Mose", "David", "Abraham"], answer: 0, explain: "Mose, der am Sinai das Gesetz empfing." },
        { type: "mc", q: "Welcher König machte Jerusalem zur Hauptstadt?", options: ["Saul", "David", "Nebukadnezar"], answer: 1, explain: "David, um 1000 v. Chr." },
        { type: "tf", q: "Der hebräische Monotheismus sah einen einzigen Gott vor, der nicht in Bildern dargestellt werden durfte.", answer: true, explain: "Gott ist einzig und unsichtbar." },
        { type: "mc", q: "Was war das babylonische Exil?", options: ["Die Deportation von Hebräern nach Babylon nach 586 v. Chr.", "Die Flucht aus Ägypten", "Eine Reise Abrahams"], answer: 0, explain: "Nebukadnezar II. zerstörte den Tempel und deportierte die Oberschicht." }
      ]
    },
    {
      type: "text",
      title: "4. Die Phönizier: Händler des Meeres",
      html: `<p>Die Phönizier bewohnten einen schmalen Küstenstreifen (heute Libanon), hinter dem mit <b>Zedern</b> bewachsene Berge lagen und wenig Platz für Felder war. Das Meer war ihr Weg zum Wachstum.</p>
<ul>
<li>Unabhängige <b>Stadtstaaten</b> (Byblos, Sidon, Tyros, Arwad), jeder mit eigenem König und eigener Flotte; sie bildeten nie ein einziges Reich. Tyros war die reichste, auf einer Insel vor der Küste erbaut.</li>
<li><b>Schiffe und Navigation</b>: Sie bauten Fracht- und Kriegsschiffe (aus Zedernholz) und orientierten sich an den Sternen, besonders am Kleinen Bären (dem „Phönizischen Stern“).</li>
<li><b>Waren</b>: Zedernholz, Glas, <b>Purpur</b> (ein Farbstoff aus der Murex-Schnecke, so kostbar, dass „Purpur“ zum Symbol von Königen und Kaisern wurde; der Name „Phönizier“ kommt vielleicht vom griechischen <i>phoinix</i>, „purpurrot“), Stoffe, Elfenbein, Metalle.</li>
<li><b>Handel</b>: Sie tauschten Erzeugnisse zwischen Orient und Okzident: Aus Spanien holten sie Silber und Zinn, aus Ägypten Leinen und Gold.</li>
</ul>
<p>Die Phönizier waren keine Eroberer: Sie suchten <b>Märkte und Anlegeplätze</b>, keine Gebiete. Ihre Herrschaft war die des Handels.</p>`
    },
    {
      type: "text",
      title: "5. Die Kolonien und Karthago",
      html: `<p>Zwischen dem 10. und 7. Jh. v. Chr. gründeten die Phönizier <b>Handelsniederlassungen</b> (Emporien) und Kolonien entlang der Routen des Mittelmeers: auf Zypern, auf Malta, auf <b>Sizilien</b> (Motya, Palermo/<i>Zyz</i>, Solunt), auf <b>Sardinien</b> (Nora, Tharros, Sulky), in Nordafrika (<b>Utica</b>, <b>Karthago</b>), in Spanien (<b>Gadir</b>, heute Cádiz).</p>
<p>Die wichtigste war <b>Karthago</b> (im heutigen Tunesien), der Überlieferung nach im Jahr <b>814 v. Chr.</b> von der tyrischen Prinzessin <b>Elissa (Dido)</b> gegründet. Als Tyros von den Assyrern und dann von Babylon geschwächt wurde, wurde Karthago zu einer eigenständigen Macht: Es hatte eine riesige Flotte, eine Aristokratie von Kaufleuten und ein Handelsreich im westlichen Mittelmeer. Es wurde zur großen Rivalin <b>Roms</b>, das es 146 v. Chr. zerstörte (wir werden es bei den Punischen Kriegen sehen; „punisch“ kommt von <i>poenus</i>, „Phönizier“).</p>`
    },
    {
      type: "svg",
      title: "Die Entstehung des Alphabets",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Ein Zeichen für jeden Laut: die Entwicklung des Buchstabens „A“</text>
<g stroke="#1e3a8a" stroke-width="4" fill="none">
<path d="M50 90 L80 140 L110 90 M80 140 L80 110" />
<path d="M200 150 L230 90 L260 150 M215 125 L245 125"/>
<path d="M350 150 L380 90 L410 150 M360 128 L400 128"/>
<path d="M490 150 L520 90 L550 150 M502 130 L538 130"/>
</g>
<g font-size="15" fill="#0f172a" text-anchor="middle">
<text x="80" y="185">Hieroglyphe:</text><text x="80" y="205">Rinderkopf</text>
<text x="230" y="185">phönizisch</text><text x="230" y="205">aleph („Rind“)</text>
<text x="380" y="185">griechisch</text><text x="380" y="205">alpha</text>
<text x="520" y="185">lateinisch</text><text x="520" y="205">A</text>
</g>
<g stroke="#b45309" stroke-width="3" fill="#b45309"><line x1="115" y1="115" x2="170" y2="115"/><polygon points="170,108 186,115 170,122"/>
<line x1="270" y1="115" x2="320" y2="115"/><polygon points="320,108 336,115 320,122"/>
<line x1="425" y1="115" x2="470" y2="115"/><polygon points="470,108 486,115 470,122"/></g>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#7c2d12">Vereinfachtes Schema: Die umgedrehte Form des Buchstabens erinnert an den Kopf eines Rindes.</text>
</svg>`,
      caption: "Das phönizische Alphabet (22 Zeichen, nur Konsonanten) wurde von den Griechen übernommen, die die Vokale hinzufügten; vom Griechischen stammen das lateinische und das kyrillische Alphabet ab."
    },
    {
      type: "text",
      title: "6. Das Alphabet: die Revolution der 22 Zeichen",
      html: `<p>Die früheren Schriftsysteme (Keilschrift, Hieroglyphen) hatten Hunderte von Zeichen und erforderten jahrelanges Lernen: Das war Sache der Schreiber. Das <b>phönizische Alphabet</b>, um <b>1200–1000 v. Chr.</b> aus früheren semitischen Schriften entwickelt, hat nur <b>22 Zeichen</b>, eines für jeden <b>Konsonanten</b>. Lesen und Schreiben zu lernen wird viel schneller und für Kaufleute nützlich.</p>
<ul>
<li>Der Name der ersten Buchstaben bedeutet einen Gegenstand: <i>aleph</i> = Rind, <i>bet</i> = Haus, <i>gimel</i> = Kamel. Daher <b>alpha, beta, gamma</b> und das Wort „Alphabet“.</li>
<li>Die <b>Griechen</b> (etwa 9.–8. Jh. v. Chr.) übernahmen das Alphabet und benutzten einige Zeichen für die <b>Vokale</b>, sodass es für indogermanische Sprachen geeignet wurde.</li>
<li>Vom Griechischen stammen das <b>etruskische</b>, dann das <b>lateinische</b> (unser) und das <b>kyrillische</b> Alphabet (Russisch, Bulgarisch ...) ab.</li>
<li>Auch das <b>Hebräische</b> und das <b>Arabische</b> stammen von semitischen Schriften ab, die der phönizischen nahestehen, und werden von rechts nach links geschrieben.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Tyros, um 800 v. Chr.: das Meer erkunden oder in der Heimat bleiben?",
      html: `<p>Du bist ein reicher Kaufmann in Tyros. Die Stadt ist überbevölkert, das Land knapp, die Assyrer verlangen immer drückendere Tribute. Einige Kapitäne erzählen, dass es jenseits des Meeres, im fernen Westen, Silber- und Zinnminen und Küsten ohne Reiche gibt. Aber die Reise dauert Wochen und das Risiko ist hoch.</p>`,
      question: "Wie entscheidest du dich?",
      options: [
        { label: "In Tyros bleiben und den Assyrern Tribut zahlen: Das Risiko lohnt sich nicht.", outcome: "Man vermeidet das Risiko, aber der Handel schrumpft und die Steuern steigen. Mit der Zeit würde Tyros an Reichtum und Bedeutung verlieren." },
        { label: "Handelsniederlassungen und Kolonien im westlichen Mittelmeer gründen, fern von den Reichen.", outcome: "Das ist die Wahl der Phönizier: Anlaufhäfen im Abstand von wenigen Segeltagen, Bündnisse mit den einheimischen Völkern und sichere Handelswege. Einige Kolonien wie Karthago werden so reich wie das Mutterland." },
        { label: "Ein Heer aufstellen und Nachbargebiete erobern, um das Reich zu vergrößern.", outcome: "Ein Handelsstadtstaat hat nicht die Mittel, einen Krieg gegen ein Reich wie das assyrische durchzuhalten: Es wäre ein viel zu riskantes Wagnis." }
      ],
      answer: 1,
      explain: "Die Phönizier entschieden sich für die <b>Ausdehnung über das Meer</b>: Die Kolonien sicherten Rohstoffe und Märkte. Als Tyros unter die Herrschaft der östlichen Reiche fiel, blühten die Kolonien, besonders Karthago, weiter."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Woher kommt das Wort „Bibliothek“?",
      html: `<p>Die phönizische Stadt <b>Byblos</b> exportierte ägyptischen Papyrus. Die Griechen nannten deshalb den Papyrus <i>byblos</i> und das aus Papyrus gefertigte „Buch“ <i>biblíon</i>. Daher:</p>
<ul>
<li><b>Bibel</b> (wörtlich: „die Bücher“), <b>Bibliothek</b> („Bücheraufbewahrung“), <b>Bibliografie</b>.</li>
</ul>
<p>Auch viele Wörter des Mittelmeerhandels stammen aus semitischen Sprachen: „Magazin“ und „Tarif“ (arabisch), „Kattun“ und „Zucker“ (arabisch). Wörter reisen wie Waren: Einem Wort zu folgen ist eine Art, Geschichte zu betreiben.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: einen alten Text kritisch lesen",
      html: `<p>Die Bibel ist eine historische Quelle über die Reiche Israel und Juda, aber kein neutraler Bericht: Sie ist ein religiöser Text, der über Jahrhunderte geschrieben und überarbeitet wurde. Wie nutzt sie der Historiker?</p>
<ol>
<li><b>Wer schreibt und wann?</b> Die Texte wurden lange redigiert und überarbeitet, größtenteils nach den Ereignissen.</li>
<li><b>Zu welchem Zweck?</b> Um eine religiöse Botschaft zu vermitteln: Gerechtigkeit und Treue zum Bund.</li>
<li><b>Was sagen andere Quellen?</b> Assyrische Inschriften (wie die Sanheribs, der Jerusalem belagert), babylonische Texte und archäologische Grabungen bestätigen einige Ereignisse und korrigieren andere.</li>
</ol>
<p>Zum Beispiel bestätigen die assyrischen Texte die Zerstörung Samarias im Jahr 722 v. Chr. und die Deportation seiner Bewohner. Das Abgleichen der Quellen ist die zentrale Methode der Geschichtswissenschaft.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Purpur kostete mehr als Gold",
      html: `<p>Um nur ein Gramm Purpurfarbstoff zu gewinnen, brauchte man Tausende von Murex-Schnecken, aus denen man eine Drüse herauslöste und sie einweichen ließ. Das Ergebnis war ein violettliches Rot, das nicht verblasste. In der Antike konnte ein Purpurstoff mehr als sein Gewicht in Silber kosten. Deshalb war er Königen, Priestern und in Rom Senatoren und Kaisern vorbehalten: „Im Purpur geboren werden“ hieß, in die Kaiserfamilie hineingeboren zu werden.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Umsegelung Afrikas",
      html: `<p>Der griechische Historiker Herodot berichtet, dass um <b>600 v. Chr.</b> der Pharao Necho II. eine Expedition phönizischer Seeleute beauftragte, Afrika zu umsegeln. Sie brachen vom Roten Meer auf, kehrten nach drei Jahren durch die Säulen des Herkules zurück und erzählten, sie hätten während der Fahrt „die Sonne zur Rechten“ gehabt: ein Detail, das Herodot nicht glaubte, das aber beweist, dass sie den Äquator nach Süden überquert hatten. Wenn die Reise wirklich stattfand, ginge sie der des Portugiesen Vasco da Gama um mehr als 2000 Jahre voraus.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Hebräer und Phönizier zu verstehen",
      intro: "Zwei kleine Völker, zwei enorme Erbschaften. Hier einige Merkhilfen.",
      tabs: [
        {
          label: "⚓ Werkzeug gegen Idee",
          html: `<p>Eine einfache Art: Die Phönizier haben <b>ein Werkzeug</b> hinterlassen, die Hebräer <b>eine Idee</b>.</p>
<ul>
<li><b>Phönizier → das Alphabet</b>: eine schnelle Art, jede Sprache zu schreiben; es hat die Kommunikation verändert.</li>
<li><b>Hebräer → der ethische Monotheismus</b>: ein einziger Gott, ein Gesetz, das auch Gerechtigkeit und Armut betrifft, ein heiliger Text, der ein Volk auch im Exil zusammenhält.</li>
</ul>
<p>Zwei Völker ohne große Heere und ohne weite Reiche haben eine dauerhaftere Spur hinterlassen als viele Imperien.</p>`
        },
        {
          label: "🗺️ Globus drehen",
          html: `<p>Drehe den Globus: die phönizischen Routen von der libanesischen Küste nach Cádiz und Karthago.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 33.27, lon: 35.2, label: "Tyros", color: "#7c3aed" },
              { lat: 35.1, lon: 33.4, label: "Zypern", color: "#f97316" },
              { lat: 35.9, lon: 14.4, label: "Malta", color: "#f97316" },
              { lat: 37.9, lon: 12.5, label: "Motya", color: "#f97316" },
              { lat: 36.85, lon: 10.32, label: "Karthago", color: "#ef4444" },
              { lat: 36.53, lon: -6.29, label: "Gadir (Cádiz)", color: "#f97316" },
              { lat: 31.78, lon: 35.22, label: "Jerusalem", color: "#2563eb" }
            ],
            routes: [{ points: [0, 1, 2, 4, 5], color: "#7c3aed" }]
          }
        },
        {
          label: "🔤 Buchstabe und Bedeutung zuordnen",
          html: `<p>Einige phönizische Buchstaben hatten einen Namen, der einen Gegenstand bezeichnete. Ordne sie ihren Bedeutungen zu.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Aleph", "Rind"],
              ["Bet", "Haus"],
              ["Gimel", "Kamel"],
              ["Mem", "Wasser"],
              ["Ayin", "Auge"]
            ]
          }
        },
        {
          label: "📅 Zeitleiste",
          html: `<p>Gehe die wichtigsten Daten von Hebräern und Phöniziern durch.</p>`,
          widget: "timeline",
          options: {
            unit: "Jahre",
            events: [
              { year: -1200, label: "Krise und Seevölker", icon: "🌊" },
              { year: -1000, label: "David in Jerusalem", icon: "👑" },
              { year: -960, label: "Tempel Salomos", icon: "🏛️" },
              { year: -930, label: "Teilung des Reiches", icon: "✂️" },
              { year: -814, label: "Karthago", icon: "⚓" },
              { year: -722, label: "Ende Israels", icon: "⚔️" },
              { year: -586, label: "Babylonisches Exil", icon: "⛓️" },
              { year: -539, label: "Rückkehr unter Kyros", icon: "🏠" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Mindmap: kleine Völker, große Erbschaften",
      nodes: [
        { id: "crisi", label: "Krise um 1200 v. Chr.", x: 50, y: 6, color: "#64748b", html: "Zusammenbruch von Reichen der Bronzezeit, Seevölker.", why: "Der Zusammenbruch der großen Reiche ließ Freiräume: Küstenstädte und Bergvölker konnten wachsen, ohne von einer Zentralgewalt erdrückt zu werden." },
        { id: "fenici", label: "Phönizier", x: 20, y: 32, color: "#7c3aed", html: "Handelsstadtstaaten an der libanesischen Küste.", why: "Wenig anbaubares Land und viel Holz: Ihre Ressource war das Meer. Sie wählten den Handel statt der Eroberung." },
        { id: "ebrei", label: "Hebräer", x: 80, y: 32, color: "#2563eb", html: "Stämme, dann Reiche Israel und Juda; Glaube an einen einzigen Gott.", why: "Ein kleines Volk, eingeklemmt zwischen großen Reichen (Ägypten, Assyrien, Babylon): Im Exil wurden Religion und geschriebenes Gesetz zu seinem eigentlichen Band." },
        { id: "colonie", label: "Kolonien und Karthago", x: 15, y: 60, color: "#f97316", html: "Phönizische Emporien vom Libanon bis Spanien; Karthago 814 v. Chr. gegründet.", why: "Sie suchten Metalle und sichere Märkte fern der östlichen Reiche; die Kolonien bildeten ein eigenständiges Netz, das Tyros überlebte." },
        { id: "alfabeto", label: "Alphabet", x: 50, y: 60, color: "#16a34a", html: "22 Konsonantenzeichen.", why: "Die Kaufleute brauchten eine einfache, schnelle Schrift für Verträge und Briefe: Das Alphabet machte sie vielen zugänglich, nicht nur den Schreibern." },
        { id: "mono", label: "Monotheismus", x: 85, y: 60, color: "#0ea5e9", html: "Ein Gott, ein Gesetz, ein Bund.", why: "Nach der Zerstörung des Tempels erlaubte die Idee eines Gottes, der nicht an einen Ort gebunden ist, die Identität im Exil zu bewahren, und bahnte den Weg für Christentum und Islam." },
        { id: "eredita", label: "Erbe im Mittelmeerraum", x: 50, y: 92, color: "#7c2d12", html: "Griechisches und lateinisches Alphabet; Bibel; Handel.", why: "Griechen und Römer erbten sowohl das Alphabet als auch die Seewege; aus dem Judentum gingen Christentum und Islam hervor." }
      ],
      edges: [
        ["crisi", "fenici", "schafft Raum für die"],
        ["crisi", "ebrei", "schafft Raum für die"],
        ["fenici", "colonie", "gründen"],
        ["fenici", "alfabeto", "verbreiten das"],
        ["ebrei", "mono", "entwickeln den"],
        ["colonie", "eredita", "hinterlassen Netze und Städte"],
        ["alfabeto", "eredita", "geht an Griechen und Römer"],
        ["mono", "eredita", "bringt Religionen hervor"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Phönizier",
      questions: [
        { type: "mc", q: "Wie viele Buchstaben (Konsonanten) hatte das phönizische Alphabet?", options: ["12", "22", "50"], answer: 1, explain: "Zweiundzwanzig Zeichen, nur Konsonanten." },
        { type: "tf", q: "Die Phönizier bildeten ein großes Reich unter einem einzigen König.", answer: false, explain: "Es waren unabhängige Stadtstaaten." },
        { type: "text", q: "Wie heißt die phönizische Kolonie in Nordafrika, die zur Großmacht wurde?", answer: ["Karthago"], explain: "Karthago, der Überlieferung nach 814 v. Chr. gegründet." },
        { type: "mc", q: "Wer fügte dem phönizischen Alphabet die Vokale hinzu?", options: ["Die Griechen", "Die Römer", "Die Ägypter"], answer: 0, explain: "Die Griechen passten die Zeichen an ihre Vokale an." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Nach der Krise um <b>1200 v. Chr.</b> treten kleinere Völker hervor: Phönizier, Hebräer, Philister, Aramäer.</li>
<li><b>Hebräer</b>: Abraham, Mose (Exodus, Gesetz), Reiche Davids und Salomos, Teilung in Israel und Juda, babylonisches Exil (586 v. Chr.). Erbe: <b>Monotheismus</b> und Tora.</li>
<li><b>Phönizier</b>: Stadtstaaten (Tyros, Sidon, Byblos), Handel, Purpur, Kolonien; <b>Karthago</b> (814 v. Chr.).</li>
<li>Phönizisches <b>Alphabet</b> mit 22 Konsonanten → griechisch (mit Vokalen) → lateinisch.</li>
<li>Das <b>Geld</b> entsteht in Lydien (7. Jh. v. Chr.).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Seevölker", d: "Gruppen von Eindringlingen, die um 1200 v. Chr. die Ostküsten des Mittelmeers angriffen." },
    { t: "Monotheismus", d: "Glaube an einen einzigen Gott." },
    { t: "Polytheismus", d: "Glaube an viele Götter." },
    { t: "Bund", d: "Vertrag zwischen Gott und dem jüdischen Volk, Grundlage des Gesetzes." },
    { t: "Tora", d: "Das Gesetz: die ersten fünf Bücher der hebräischen Bibel." },
    { t: "Prophet", d: "Wer im Namen Gottes spricht und das Volk zur Gerechtigkeit mahnt." },
    { t: "Babylonisches Exil", d: "Deportation der Hebräer von Juda nach Babylon nach 586 v. Chr." },
    { t: "Emporium", d: "Handelsniederlassung in fremdem Land." },
    { t: "Purpur", d: "Kostbarer Farbstoff aus der Murex-Schnecke." },
    { t: "Alphabet", d: "Schriftsystem, in dem jedes Zeichen einen Laut bezeichnet." },
    { t: "Punisch", d: "Bezogen auf die Phönizier des Westens und auf Karthago." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was geschah um 1200 v. Chr. im östlichen Mittelmeerraum?", options: ["Zusammenbruch vieler Reiche der Bronzezeit", "Entstehung des Römischen Reiches", "Erfindung des Geldes"], answer: 0, explain: "Allgemeine Krise mit den sogenannten Seevölkern." },
      { type: "mc", q: "Welcher Herrscher machte Jerusalem zur Hauptstadt der Hebräer?", options: ["David", "Salomo", "Saul"], answer: 0, explain: "David, um 1000 v. Chr. (Salomo baute dort den Tempel)." },
      { type: "tf", q: "Das hebräische Reich teilte sich in Israel (Norden) und Juda (Süden).", answer: true, explain: "Nach dem Tod Salomos, etwa 930 v. Chr." },
      { type: "mc", q: "Was war das babylonische Exil?", options: ["Die Deportation der Hebräer von Juda nach Babylon", "Die Flucht aus Ägypten", "Die Eroberung Kanaans"], answer: 0, explain: "Nach der Zerstörung des Tempels im Jahr 586 v. Chr." },
      { type: "text", q: "Wie heißt die wichtigste phönizische Stadt, die auf einer Insel lag und eine große Flotte hatte?", answer: ["Tyros", "Tyrus", "Tiro"], explain: "Tyros." },
      { type: "mc", q: "Warum gründeten die Phönizier Kolonien?", options: ["Um Handelsstützpunkte und Rohstoffe zu haben", "Um Gebietsreiche zu gründen", "Um den Monotheismus zu verbreiten"], answer: 0, explain: "Sie suchten Märkte und Metalle, keine Eroberung." },
      { type: "order", q: "Bringe die Ereignisse in die zeitliche Reihenfolge.", items: ["David in Jerusalem", "Gründung Karthagos", "Fall Samarias", "Zerstörung des Tempels", "Rückkehr der Verbannten unter Kyros"], explain: "Etwa 1000, 814, 722, 586, 539 v. Chr." },
      { type: "mc", q: "Was ist der Hauptunterschied zwischen dem phönizischen Alphabet und der Keilschrift?", options: ["Das Phönizische hat wenige Zeichen, eines pro Laut", "Das Phönizische hat Tausende von Zeichen", "Das Phönizische benutzt nur Bilder"], answer: 0, explain: "22 Zeichen gegenüber Hunderten." },
      { type: "num", q: "Wie viele Zeichen hatte das phönizische Alphabet?", answer: 22, tol: 0, explain: "Zweiundzwanzig Konsonanten." },
      { type: "tf", q: "Das lateinische Alphabet stammt vom griechischen ab, das vom phönizischen abstammt.", answer: true, explain: "Phönizisch → Griechisch → Etruskisch/Lateinisch." },
      { type: "mc", q: "Welche dieser Religionen stammt NICHT vom Judentum ab?", options: ["Christentum", "Islam", "Zoroastrismus"], answer: 2, explain: "Der Zoroastrismus ist die persische Religion, mit anderem Ursprung." }
    ]
  }
});

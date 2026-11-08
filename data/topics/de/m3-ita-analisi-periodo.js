TOPIC('de', {
  id: `m3-ita-analisi-periodo`,
  title: `Die Analyse des Satzgefüges (analisi del periodo)`,
  intro: `Ein komplexer Satz ist wie ein Gebäude: Es gibt ein tragendes Gerüst (den <b>Hauptsatz</b>, <i>proposizione principale</i>) und verbundene Räume (die <b>nebengeordneten</b> und die <b>untergeordneten</b> Sätze). Mit der Analyse des Satzgefüges lernen wir, lange Sätze zu zerlegen, zu verstehen, wer bestimmt und wer abhängt, und klarere Texte zu schreiben. Die Beispielsätze bleiben italienisch, denn es geht um die Grammatik des Italienischen; die Erklärungen sind auf Deutsch.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `Einfacher Satz, Satzgefüge und Teilsätze`,
      html: `<p>In der logischen Analyse (<i>analisi logica</i>) hast du den <b>einfachen Satz</b> (<i>frase semplice</i>) untersucht: ein einziges Prädikat (Verb) mit seinen Ergänzungen. Wenn in einem Satz <b>mehrere Verben in einer finiten oder infiniten Form</b> stehen, haben wir ein <b>Satzgefüge</b> (<i>periodo</i>, auch „komplexer Satz“).</p>
<p>Jeder Teil des Satzgefüges, der ein eigenes Prädikat hat, heißt <b>Teilsatz</b> (<i>proposizione</i>). Goldene Regel: <b>so viele Teilsätze, wie es Prädikate gibt</b>.</p>
<p>Beispiel: <i>"Quando sono arrivato, | Marco dormiva | e non ho voluto svegliarlo."</i> („Als ich ankam, schlief Marco, und ich wollte ihn nicht wecken.“) → drei Prädikate (<i>sono arrivato</i>, <i>dormiva</i>, <i>ho voluto svegliare</i>) → drei Teilsätze.</p>
<p>⚠️ Vorsicht bei den Modalverben (<i>volere, potere, dovere</i>) und den phraseologischen Verben (<i>stare per, cominciare a, smettere di</i>): Sie bilden mit dem folgenden Infinitiv <b>ein einziges Prädikat</b>. <i>"Devo studiare"</i> („Ich muss lernen“) ist nur ein Teilsatz.</p>`
    },
    {
      type: `text`,
      title: `Schritt 1 – Finde den Hauptsatz`,
      html: `<p>Der <b>Hauptsatz</b> (<i>proposizione principale</i>, auch unabhängiger Satz) ist der Teilsatz, der:</p>
<ul>
<li><b>allein einen vollständigen Sinn</b> hat;</li>
<li><b>von keinem anderen Teilsatz abhängt</b>;</li>
<li>meist das Verb im <b>Indikativ</b>, im <b>Konditional</b>, im <b>Imperativ</b> oder im auffordernden/wünschenden Konjunktiv hat (<i>"Magari piovesse!"</i> – „Wenn es doch regnen würde!“).</li>
</ul>
<p>Die Hauptsätze können sein: <b>Aussagesätze</b> (<i>enunciative</i>; sie bejahen oder verneinen: <i>"Oggi piove"</i>), <b>direkte Fragesätze</b> (<i>interrogative dirette</i>: <i>"Vieni?"</i>), <b>Ausrufesätze</b> (<i>esclamative</i>: <i>"Che bello!"</i>), <b>Aufforderungssätze</b> (<i>volitive</i>: <i>"Chiudi la porta"</i>), <b>Wunschsätze</b> (<i>desiderative</i>: <i>"Vorrei un gelato"</i>), <b>Zweifelsätze</b> (<i>dubitative</i>: <i>"Che fare?"</i>).</p>`
    },
    {
      type: `text`,
      title: `Schritt 2 – Nebenordnung und Unterordnung`,
      html: `<p>Teilsätze werden auf zwei Arten verbunden:</p>
<table>
<tr><th>Nebenordnung (Koordination, <i>paratassi</i>)</th><th>Unterordnung (Subordination, <i>ipotassi</i>)</th></tr>
<tr><td>Teilsätze <b>auf derselben Ebene</b>, keiner hängt vom anderen ab.</td><td>Ein Teilsatz <b>hängt</b> von einem anderen (dem übergeordneten Satz, <i>reggente</i>) ab und vervollständigt ihn.</td></tr>
<tr><td>Nebenordnende Konjunktionen: <i>e, né, o, ma, però, quindi, infatti, cioè, sia… sia</i>; oder nur das Komma (<b>Asyndeton</b>, <i>asindeto</i>).</td><td>Unterordnende Konjunktionen: <i>che, perché, quando, se, mentre, affinché, sebbene, poiché</i>; Relativpronomen; Verben in infiniter Form.</td></tr>
<tr><td><i>"Studio <b>e</b> ascolto musica."</i> („Ich lerne und höre Musik.“)</td><td><i>"Studio <b>perché</b> domani ho la verifica."</i> („Ich lerne, weil ich morgen die Klassenarbeit habe.“)</td></tr>
</table>
<p>Die nebengeordneten Sätze werden nach der Konjunktion eingeteilt: <b>kopulativ</b> (anreihend: e, né, anche), <b>adversativ</b> (entgegensetzend: ma, però, tuttavia), <b>disjunktiv</b> (ausschließend: o, oppure), <b>konklusiv</b> (folgernd: quindi, perciò, dunque), <b>deklarativ/explikativ</b> (erklärend: infatti, cioè), <b>korrelativ</b> (sia… sia, né… né).</p>`
    },
    {
      type: `svg`,
      title: `Das Baumschema eines Satzgefüges`,
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#f8fafc"/>
<text x="320" y="28" font-size="16" text-anchor="middle" fill="#334155">"Luca ha detto che verrà alla festa e porterà la torta, se finisce i compiti."</text>
<rect x="210" y="50" width="220" height="50" rx="10" fill="#2563eb"/>
<text x="320" y="73" font-size="16" text-anchor="middle" fill="#fff" font-weight="bold">HAUPTSATZ</text>
<text x="320" y="92" font-size="15" text-anchor="middle" fill="#fff">Luca ha detto</text>
<line x1="320" y1="100" x2="190" y2="150" stroke="#334155" stroke-width="3"/>
<rect x="60" y="150" width="240" height="50" rx="10" fill="#16a34a"/>
<text x="180" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">NEBENSATZ 1. Grades (Objektsatz)</text>
<text x="180" y="191" font-size="15" text-anchor="middle" fill="#fff">che verrà alla festa</text>
<line x1="300" y1="175" x2="350" y2="175" stroke="#f97316" stroke-width="4" stroke-dasharray="8 5"/>
<text x="325" y="165" font-size="14" text-anchor="middle" fill="#c2410c">e</text>
<rect x="350" y="150" width="250" height="50" rx="10" fill="#22c55e"/>
<text x="475" y="172" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">nebengeordnet zum Nebensatz 1. Grades</text>
<text x="475" y="191" font-size="15" text-anchor="middle" fill="#fff">(e) porterà la torta</text>
<line x1="180" y1="200" x2="180" y2="250" stroke="#334155" stroke-width="3"/>
<rect x="60" y="250" width="240" height="50" rx="10" fill="#a855f7"/>
<text x="180" y="272" font-size="15" text-anchor="middle" fill="#fff" font-weight="bold">NEBENSATZ 2. Grades (Konditionalsatz)</text>
<text x="180" y="291" font-size="15" text-anchor="middle" fill="#fff">se finisce i compiti</text>
<text x="470" y="275" font-size="14" fill="#334155">— durchgezogene Linie: hängt ab von</text>
<text x="470" y="298" font-size="14" fill="#c2410c">- - gestrichelt: Nebenordnung</text>
</svg>`,
      caption: `Der Hauptsatz steht oben; jeder Nebensatz „steigt“ einen Grad hinab; die nebengeordneten Sätze stehen auf derselben Ebene. (Luca hat gesagt, dass er zum Fest kommen und den Kuchen mitbringen wird, wenn er die Hausaufgaben fertig hat.)`
    },
    {
      type: `text`,
      title: `Schritt 3 – Explizite und implizite Form; die Grade`,
      html: `<p>Ein Nebensatz kann sein:</p>
<ul>
<li><b>explizit</b> (<i>esplicita</i>): Verb in einer <b>finiten</b> Form (Indikativ, Konjunktiv, Konditional), eingeleitet von einer Konjunktion oder einem Relativpronomen → <i>"Ti chiamo <b>quando arrivo</b>."</i> („Ich rufe dich an, wenn ich ankomme.“)</li>
<li><b>implizit</b> (<i>implicita</i>): Verb in einer <b>infiniten</b> Form (Infinitiv, Partizip, Gerundium) → <i>"Ti chiamo <b>arrivato</b> a casa"</i>, <i>"<b>Arrivando</b> a casa, ti chiamo."</i> („Wenn ich zu Hause angekommen bin, rufe ich dich an.“)</li>
</ul>
<p>Der <b>Grad</b> gibt den Abstand zum Hauptsatz an: Ein Nebensatz, der vom Hauptsatz abhängt, ist <b>1. Grades</b>; hängt er von einem Nebensatz 1. Grades ab, ist er <b>2. Grades</b>, und so weiter.</p>`
    },
    {
      type: `text`,
      title: `Schritt 4 – Die Arten der Nebensätze`,
      html: `<p>Viele Nebensätze entsprechen einer Ergänzung aus der logischen Analyse: Sie sind „in einen Satz verwandelte Ergänzungen“.</p>
<table>
<tr><th>Nebensatz</th><th>Antwortet auf …</th><th>Beispiel</th></tr>
<tr><td><b>Subjektsatz</b> (<i>soggettiva</i>)</td><td>dient als Subjekt</td><td><i>È importante <b>che tu venga</b>.</i> (Es ist wichtig, dass du kommst.)</td></tr>
<tr><td><b>Objektsatz</b> (<i>oggettiva</i>)</td><td>dient als Akkusativobjekt</td><td><i>So <b>che hai ragione</b>.</i> (Ich weiß, dass du recht hast.)</td></tr>
<tr><td><b>Inhaltssatz</b> (<i>dichiarativa</i>)</td><td>erklärt ein Nomen oder Pronomen</td><td><i>Ho la speranza <b>che vinca</b>.</i> (Ich habe die Hoffnung, dass er gewinnt.)</td></tr>
<tr><td><b>Indirekter Fragesatz</b> (<i>interrogativa indiretta</i>)</td><td>wiedergegebene Frage</td><td><i>Mi chiedo <b>se verrà</b>.</i> (Ich frage mich, ob er kommen wird.)</td></tr>
<tr><td><b>Relativsatz</b> (<i>relativa</i>)</td><td>wie ein Attribut</td><td><i>Il libro <b>che leggo</b> è bello.</i> (Das Buch, das ich lese, ist schön.)</td></tr>
<tr><td><b>Kausalsatz</b> (<i>causale</i>)</td><td>warum?</td><td><i>Resto a casa <b>perché piove</b>.</i> (Ich bleibe zu Hause, weil es regnet.)</td></tr>
<tr><td><b>Finalsatz</b> (<i>finale</i>)</td><td>zu welchem Zweck?</td><td><i>Studio <b>per superare l'esame</b>.</i> (Ich lerne, um die Prüfung zu bestehen.)</td></tr>
<tr><td><b>Temporalsatz</b> (<i>temporale</i>)</td><td>wann?</td><td><i><b>Mentre mangiavo</b>, squillò il telefono.</i> (Während ich aß, klingelte das Telefon.)</td></tr>
<tr><td><b>Konsekutivsatz</b> (<i>consecutiva</i>)</td><td>mit welcher Folge?</td><td><i>Era così stanco <b>che si addormentò</b>.</i> (Er war so müde, dass er einschlief.)</td></tr>
<tr><td><b>Konzessivsatz</b> (<i>concessiva</i>)</td><td>trotz welchen Umstands?</td><td><i><b>Sebbene piovesse</b>, uscimmo.</i> (Obwohl es regnete, gingen wir hinaus.)</td></tr>
<tr><td><b>Konditionalsatz</b> (<i>condizionale</i>, hypothetisches Satzgefüge)</td><td>unter welcher Bedingung?</td><td><i><b>Se studi</b>, sarai promosso.</i> (Wenn du lernst, wirst du versetzt.)</td></tr>
<tr><td><b>Modalsatz</b> (<i>modale</i>)</td><td>auf welche Weise?</td><td><i>Entrò <b>correndo</b>.</i> (Er kam rennend herein.)</td></tr>
<tr><td><b>Komparativsatz</b> (<i>comparativa</i>)</td><td>im Vergleich wozu?</td><td><i>È più facile <b>di quanto pensassi</b>.</i> (Es ist leichter, als ich dachte.)</td></tr>
</table>`
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Teilsätze und Verbindungen`,
      questions: [
        { type: `num`, q: `Wie viele Teilsätze gibt es in: "Quando torno a casa, mangio e poi faccio i compiti"?`, answer: 3, explain: `Drei Prädikate: torno, mangio, faccio → drei Teilsätze.` },
        { type: `mc`, q: `In "Esco, ma torno presto" ist der zweite Teilsatz …`, options: [`ein untergeordneter Kausalsatz`, `ein nebengeordneter adversativer Satz`, `ein interrogativer Hauptsatz`], answer: 1, explain: `"Ma" ist eine nebenordnende adversative Konjunktion: Die beiden Teilsätze stehen auf derselben Ebene.` },
        { type: `tf`, q: `"Voglio partire" enthält zwei Teilsätze.`, answer: false, explain: `"Volere" ist ein Modalverb: "voglio partire" ist ein einziges Prädikat, also nur ein Teilsatz.` }
      ]
    },
    {
      type: `example`,
      title: `Geführtes Beispiel: Wir analysieren ein Satzgefüge`,
      html: `<p><i>"Poiché era tardi, Anna chiamò sua madre per dirle che sarebbe tornata in autobus."</i> („Weil es spät war, rief Anna ihre Mutter an, um ihr zu sagen, dass sie mit dem Bus zurückkommen würde.“)</p>
<ol>
<li><b>Ich zähle die Prädikate</b>: era, chiamò, dire, sarebbe tornata → 4 Teilsätze.</li>
<li><b>Hauptsatz</b>: <i>Anna chiamò sua madre</i> (hat allein Sinn).</li>
<li><i>Poiché era tardi</i> → expliziter <b>Kausalsatz</b> 1. Grades.</li>
<li><i>per dirle</i> → impliziter <b>Finalsatz</b> (Infinitiv) 1. Grades.</li>
<li><i>che sarebbe tornata in autobus</i> → expliziter <b>Objektsatz</b> 2. Grades (hängt von „dirle“ ab).</li>
</ol>`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: implizit ↔ explizit umformen`,
      html: `<p>Wer von einer Form in die andere wechseln kann, schreibt besser und vermeidet Wiederholungen von „che“.</p>
<ul>
<li><i>"<b>Finiti</b> i compiti, uscì"</i> (impliziter Temporalsatz, Partizip) → <i>"<b>Dopo che ebbe finito</b> i compiti, uscì"</i> (explizit). („Nachdem er die Hausaufgaben beendet hatte, ging er hinaus.“)</li>
<li><i>"Penso <b>di avere ragione</b>"</i> (impliziter Objektsatz) → <i>"Penso <b>che io abbia ragione</b>"</i>: Die explizite Form klingt hier schwerfällig, weil das Subjekt dasselbe ist. Wenn das Subjekt übereinstimmt, bevorzugt man die <b>implizite</b> Form.</li>
<li><i>"<b>Sbagliando</b> s'impara"</i> (Gerundium mit kausaler/instrumentaler Bedeutung) → <i>"<b>Poiché si sbaglia</b>, s'impara"</i>. („Aus Fehlern lernt man.“)</li>
</ul>`
    },
    {
      type: `widget`,
      title: `Üb: nebengeordnet oder untergeordnet?`,
      widget: `classify`,
      options: {
        groups: [`Nebengeordnet (coordinata)`, `Untergeordnet (subordinata)`],
        items: [
          [`…ma non avevo l'ombrello`, 0],
          [`…perché avevo fame`, 1],
          [`…e poi sono uscito`, 0],
          [`…sebbene fosse stanco`, 1],
          [`…quindi ho deciso di restare`, 0],
          [`…che mi hai prestato`, 1],
          [`…oppure guardiamo un film`, 0],
          [`…affinché tu capisca`, 1],
          [`…infatti era già buio`, 0],
          [`…mentre leggevo`, 1]
        ]
      },
      caption: `Achte auf die Konjunktion: Die nebenordnenden stellen Sätze gleichrangig nebeneinander, die unterordnenden schaffen Abhängigkeit.`
    },
    {
      type: `widget`,
      title: `Ordne den Nebensatz seiner Art zu`,
      widget: `match`,
      options: {
        pairs: [
          [`Se piove`, `Konditionalsatz (condizionale)`],
          [`Benché fosse malato`, `Konzessivsatz (concessiva)`],
          [`Per non fare tardi`, `Finalsatz (finale)`],
          [`Mi domando chi sia`, `indirekter Fragesatz (interrogativa indiretta)`],
          [`Era così buio che non vedevo`, `Konsekutivsatz (consecutiva)`],
          [`Dopo aver mangiato`, `Temporalsatz (temporale)`]
        ]
      },
      caption: `Frag dich immer: Auf welche Frage antwortet dieser Teilsatz?`
    },
    {
      type: `curiosity`,
      title: `Wusstest du schon …? Parataxe und Hypotaxe in der Literatur`,
      html: `<p>Schriftsteller wählen ihren Stil auch nach der Syntax. <b>Giovanni Boccaccio</b> ahmte im <i>Decameron</i> (1349–1353) die lateinische Periode mit sehr langen Ketten von Nebensätzen nach. Jahrhunderte später bevorzugten <b>Giovanni Verga</b> und dann viele Autoren des 20. Jahrhunderts eine eher <b>parataktische</b> Syntax mit kurzen, nebengeordneten Sätzen, näher an der gesprochenen Sprache. Vergleiche einmal eine Seite aus den <i>Promessi sposi</i> mit einer aus <i>Se questo è un uomo</i> (Ist das ein Mensch?) von Primo Levi: Du wirst den Unterschied bemerken!</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du schon …? Das längste Satzgefüge`,
      html: `<p>Der französische Schriftsteller <b>Marcel Proust</b> schrieb in seinem Roman <i>Auf der Suche nach der verlorenen Zeit</i> ein Satzgefüge von über <b>900 Wörtern</b>! Im Italienischen ist Carlo Emilio Gadda für verschlungene Sätze voller Einschübe berühmt. Im Gegensatz dazu verwendet man in Zeitungsschlagzeilen und Nachrichten fast nur kurze Sätze: Die Syntax ändert sich mit dem Zweck des Textes.</p>`
    },
    {
      type: `remember`,
      title: `Merk dir: die Methode in 5 Schritten`,
      html: `<ol>
<li>Unterstreiche die <b>Prädikate</b> und teile das Satzgefüge in Teilsätze.</li>
<li>Finde den <b>Hauptsatz</b> (er hat allein Sinn).</li>
<li>Frag bei jedem anderen Teilsatz: Ist er <b>gleichrangig</b> (nebengeordnet) oder <b>hängt er ab</b> (untergeordnet)?</li>
<li>Gib bei den Nebensätzen an: <b>Art</b> (Kausal-, Finalsatz …), <b>Form</b> (explizit/implizit), <b>Grad</b>.</li>
<li>Zeichne das <b>Baumschema</b>.</li>
</ol>`
    },
    {
      type: `alternatives`,
      title: `Weitere Wege, die Analyse des Satzgefüges zu verstehen`,
      intro: `Wenn dich das traditionelle Schema verwirrt, probier einen dieser Wege: einen Vergleich, eine im Ausland benutzte Methode, ein 3D-Modell.`,
      tabs: [
        {
          label: `🏢 Das Gebäude`,
          html: `<p>Stell dir das Satzgefüge als <b>Haus</b> vor:</p>
<ul>
<li>der <b>Hauptsatz</b> ist das <b>Erdgeschoss</b>: Er steht allein;</li>
<li>die <b>Nebensätze 1. Grades</b> sind das <b>erste Stockwerk</b>: Sie stützen sich auf das Erdgeschoss;</li>
<li>die <b>2. Grades</b> liegen im <b>zweiten Stock</b>, auf den ersten gestützt;</li>
<li>die <b>nebengeordneten Sätze</b> sind <b>Zimmer nebeneinander auf demselben Stockwerk</b>, durch eine Tür verbunden (e, ma, o …).</li>
</ul>
<p>Nimmst du das Erdgeschoss weg, stürzt alles ein; nimmst du ein Zimmer im zweiten Stock weg, bleibt das Haus stehen. Deshalb ist der Hauptsatz der einzige, der allein trägt!</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#e0f2fe"/>
<rect x="100" y="200" width="400" height="60" fill="#2563eb"/>
<text x="300" y="237" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">Erdgeschoss: HAUPTSATZ</text>
<rect x="100" y="130" width="195" height="70" fill="#16a34a" stroke="#fff" stroke-width="3"/>
<rect x="305" y="130" width="195" height="70" fill="#22c55e" stroke="#fff" stroke-width="3"/>
<text x="197" y="170" font-size="16" text-anchor="middle" fill="#fff">1. Grad</text>
<text x="402" y="170" font-size="16" text-anchor="middle" fill="#fff">nebengeordnet (1. Grad)</text>
<rect x="100" y="60" width="195" height="70" fill="#a855f7" stroke="#fff" stroke-width="3"/>
<text x="197" y="100" font-size="16" text-anchor="middle" fill="#fff">2. Grad</text>
<polygon points="90,60 197,15 305,60" fill="#ef4444"/>
<rect x="290" y="150" width="30" height="40" fill="#f59e0b"/>
<text x="540" y="170" font-size="14" fill="#334155">Tür</text>
<text x="540" y="188" font-size="14" fill="#334155">= "e"</text>
</svg>`
        },
        {
          label: `🇬🇧 Die englische Methode: main & dependent clauses`,
          html: `<p>In englischen Schulen spricht man von der <b>main clause</b> (Hauptsatz) und der <b>subordinate</b> oder <b>dependent clause</b> (Nebensatz). Der Test, den sie lehren, ist ganz einfach: <b>„Can it stand alone?“</b> – Kann er als Satz allein stehen?</p>
<p>Die Nebensätze teilen sich nach ihrer Funktion in drei Familien:</p>
<ul>
<li><b>noun clauses</b> (funktionieren wie ein Nomen) → unsere Subjekt-, Objektsätze und indirekten Fragesätze (<i>soggettive, oggettive, interrogative indirette</i>);</li>
<li><b>adjective/relative clauses</b> (funktionieren wie ein Adjektiv) → unsere Relativsätze (<i>relative</i>);</li>
<li><b>adverbial clauses</b> (funktionieren wie ein Adverb) → Kausal-, Temporal-, Final-, Konzessivsätze …</li>
</ul>
<p>Drei Familien statt zwanzig Namen: Für den Anfang ist das leichter! Danach findest du in jeder Familie die italienischen Arten. (Das ist übrigens fast dasselbe, was du aus dem Deutschunterricht kennst.)</p>`
        },
        {
          label: `🧩 Durch ein Wort ersetzen`,
          html: `<p>Praktischer Trick: Versuche, den <b>Nebensatz durch ein einziges Wort zu ersetzen</b>. Die Wortart verrät dir die Art des Nebensatzes!</p>
<ul>
<li><i>"So <b>che hai vinto</b>"</i> → <i>"So <b>questo</b>"</i> (Nomen/Pronomen als Objekt) → <b>Objektsatz</b> (<i>oggettiva</i>).</li>
<li><i>"Il ragazzo <b>che corre</b> è mio fratello"</i> → <i>"Il ragazzo <b>veloce</b>"</i> (Adjektiv) → <b>Relativsatz</b> (<i>relativa</i>).</li>
<li><i>"Esco <b>quando smette di piovere</b>"</i> → <i>"Esco <b>dopo</b>"</i> (Zeitadverb) → <b>Temporalsatz</b> (<i>temporale</i>).</li>
<li><i>"Lo faccio <b>per aiutarti</b>"</i> → <i>"Lo faccio <b>per te</b>"</i> (Ergänzung des Zwecks) → <b>Finalsatz</b> (<i>finale</i>).</li>
</ul>`
        },
        {
          label: `🧊 Das Satzgefüge in 3D`,
          html: `<p>Sieh dir diesen „Turm“ aus Schichten an: Jede Schicht ist ein <b>Grad</b> der Unterordnung. Der Kern in der Mitte ist der <b>Hauptsatz</b>; je weiter du dich von der Mitte entfernst, desto „ferner“ und abhängiger ist der Teilsatz. Dreh das Modell: Du wirst merken, dass jede äußere Schicht nur existieren kann, wenn die innere sie trägt.</p>`,
          scene: `layers`,
          options: { layers: [
            { r: 1, color: `#c084fc`, label: `Nebensatz 3. Grades` },
            { r: 0.78, color: `#a855f7`, label: `Nebensatz 2. Grades` },
            { r: 0.56, color: `#22c55e`, label: `Nebensatz 1. Grades` },
            { r: 0.32, color: `#2563eb`, label: `Hauptsatz` }
          ] }
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Landkarte der Analyse des Satzgefüges: tippe einen Knoten an`,
      nodes: [
        { id: `periodo`, label: `Satzgefüge (periodo)`, x: 50, y: 6, color: `#0f172a`, html: `Komplexer Satz aus mehreren Teilsätzen, vom Großbuchstaben bis zum Schlusspunkt.`, why: `Der Begriff kommt aus dem Griechischen <i>períodos</i>, „Kreislauf, Umlauf“: Die griechischen Redner, wie Aristoteles in der <i>Rhetorik</i>, nannten so einen vollständigen Gedanken, der sich „im Kreis dreht“ und in sich schließt.` },
        { id: `proposizione`, label: `Teilsatz (proposizione)`, x: 50, y: 26, color: `#334155`, html: `Jeder Teil des Satzgefüges mit einem eigenen Prädikat.`, why: `Vom lateinischen <i>propositio</i>, „das Vorangestellte“, also eine Aussage. Man zählt nach den Prädikaten, weil das Verb Subjekt und Ergänzungen regiert.` },
        { id: `principale`, label: `Hauptsatz`, x: 15, y: 46, color: `#2563eb`, html: `Der unabhängige Teilsatz, der allein einen vollständigen Sinn hat.`, why: `Er ist unabhängig, weil er die wesentliche Botschaft enthält: Die anderen fügen Informationen hinzu. Deshalb finden wir in Hauptsätzen die Modi der Gewissheit oder des Willens (Indikativ, Imperativ, Konditional).` },
        { id: `coordinazione`, label: `Nebenordnung (Parataxe)`, x: 50, y: 50, color: `#f97316`, html: `Verbindung von Teilsätzen derselben Ebene mit e, ma, o, quindi …`, why: `Aus dem Griechischen <i>parà</i> (neben) + <i>táxis</i> (Ordnung): „nebeneinanderstellen“. Es ist die typische Syntax der gesprochenen Sprache und der einfacheren alten Sprachen, wie des homerischen Griechisch.` },
        { id: `subordinazione`, label: `Unterordnung (Hypotaxe)`, x: 85, y: 46, color: `#16a34a`, html: `Ein Teilsatz hängt von einem anderen (dem übergeordneten) ab und vervollständigt ihn.`, why: `Aus dem Griechischen <i>hypó</i> (unter) + <i>táxis</i>: „daruntersetzen“. Das klassische Latein Ciceros machte daraus eine Kunst, und das geschriebene Italienisch hat sie über Boccaccio und die Humanisten geerbt.` },
        { id: `forma`, label: `Explizit / implizit`, x: 70, y: 72, color: `#a855f7`, html: `Explizit: Verb in finiter Form. Implizit: Infinitiv, Partizip oder Gerundium.`, why: `Die infiniten Modi geben die Person nicht an, deshalb ergibt sich das Subjekt aus dem übergeordneten Satz: Darum verwendet man die implizite Form vor allem dann, wenn das Subjekt dasselbe ist.` },
        { id: `tipi`, label: `Arten von Nebensätzen`, x: 92, y: 72, color: `#22c55e`, html: `Subjekt-, Objekt-, Relativ-, Kausal-, Final-, Temporal-, Konzessiv-, Konsekutiv-, Konditionalsätze …`, why: `Viele entstehen aus einer zum Satz „erweiterten“ Ergänzung der logischen Analyse: Ergänzung des Grundes → Kausalsatz, des Zwecks → Finalsatz, der Zeit → Temporalsatz. Die Grammatik hat sie nach dem lateinischen Vorbild eingeteilt.` },
        { id: `gradi`, label: `Grade`, x: 40, y: 78, color: `#ef4444`, html: `Der Abstand eines Nebensatzes vom Hauptsatz: 1., 2., 3. Grad …`, why: `Man zählt die „Stufen“ der Abhängigkeit wie in einem Stammbaum: Tochter des Hauptsatzes = 1. Grad, „Enkelin“ = 2. Grad.` },
        { id: `logica`, label: `Logische Analyse`, x: 15, y: 90, color: `#64748b`, html: `Das Studium des einfachen Satzes: Subjekt, Prädikat, Ergänzungen.`, why: `Die Analyse des Satzgefüges ist dieselbe Logik auf höherer Ebene: Was im einfachen Satz eine Ergänzung ist, wird im Satzgefüge zu einem Teilsatz.` }
      ],
      edges: [
        [`periodo`, `proposizione`, `besteht aus`],
        [`proposizione`, `principale`, `einer ist der`],
        [`proposizione`, `coordinazione`, `verbunden durch`],
        [`proposizione`, `subordinazione`, `verbunden durch`],
        [`subordinazione`, `forma`, `kann sein`],
        [`subordinazione`, `tipi`, `teilt sich in`],
        [`subordinazione`, `gradi`, `gemessen in`],
        [`logica`, `tipi`, `Ergänzung → Satz`],
        [`principale`, `gradi`, `Grad 0`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Arten von Nebensätzen`,
      questions: [
        { type: `mc`, q: `"Sebbene fosse tardi, continuammo a giocare": Der erste Teilsatz ist …`, options: [`kausal`, `konzessiv`, `temporal`], answer: 1, explain: `"Sebbene" leitet einen Konzessivsatz ein: Er nennt eine Tatsache, die die Handlung des Hauptsatzes nicht verhindert. (Obwohl es spät war, spielten wir weiter.)` },
        { type: `mc`, q: `"Dimmi dove sei stato": "dove sei stato" ist …`, options: [`ein indirekter Fragesatz`, `ein Relativsatz`, `ein Lokalsatz`], answer: 0, explain: `Es ist eine wiedergegebene Frage, abhängig von "dimmi": indirekter Fragesatz (interrogativa indiretta). (Sag mir, wo du gewesen bist.)` },
        { type: `mc`, q: `"Uscendo, chiudi la porta": Der Nebensatz ist …`, options: [`explizit`, `implizit`], answer: 1, explain: `Das Gerundium "uscendo" ist eine infinite Form: impliziter Nebensatz (temporal). (Wenn du hinausgehst, schließ die Tür.)` }
      ]
    }
  ],
  glossary: [
    { t: `Periodo (Satzgefüge)`, d: `Komplexer Satz aus zwei oder mehr Teilsätzen.` },
    { t: `Proposizione (Teilsatz)`, d: `Teil des Satzgefüges, der ein Prädikat enthält.` },
    { t: `Principale (Hauptsatz)`, d: `Unabhängiger Teilsatz, der allein einen vollständigen Sinn hat.` },
    { t: `Reggente (übergeordneter Satz)`, d: `Teilsatz, von dem ein Nebensatz abhängt.` },
    { t: `Coordinata (nebengeordneter Satz)`, d: `Teilsatz, der mit einem anderen derselben Ebene verbunden ist (e, ma, o, quindi …).` },
    { t: `Subordinata (Nebensatz)`, d: `Teilsatz, der von einem anderen abhängt und dessen Sinn vervollständigt.` },
    { t: `Asindeto (Asyndeton)`, d: `Nebenordnung nur mit Satzzeichen, ohne Konjunktionen.` },
    { t: `Esplicita (explizit)`, d: `Nebensatz mit Verb in einer finiten Form.` },
    { t: `Implicita (implizit)`, d: `Nebensatz mit Verb in einer infiniten Form (Infinitiv, Partizip, Gerundium).` },
    { t: `Grado (Grad)`, d: `Grad der Abhängigkeit eines Nebensatzes vom Hauptsatz.` },
    { t: `Paratassi / ipotassi (Parataxe / Hypotaxe)`, d: `Satzbau durch Nebenordnung / durch Unterordnung.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `num`, q: `Wie viele Teilsätze gibt es in: "Mentre aspettavo l'autobus, ho letto un libro che mi aveva regalato Sara"?`, answer: 3, explain: `Prädikate: aspettavo, ho letto, aveva regalato → 3.` },
      { type: `mc`, q: `Welcher ist der Hauptsatz in "Se avessi tempo, verrei con voi"?`, options: [`Se avessi tempo`, `verrei con voi`], answer: 1, explain: `"Verrei con voi" hat allein Sinn; "se avessi tempo" ist ein Konditionalsatz. (Wenn ich Zeit hätte, würde ich mit euch kommen.)` },
      { type: `mc`, q: `"Corri, altrimenti perdi il treno": Der zweite Teilsatz ist ein nebengeordneter Satz, und zwar …`, options: [`kopulativ`, `disjunktiv`, `konklusiv`], answer: 1, explain: `"Altrimenti" entspricht "o" (sonst/oder): disjunktiver nebengeordneter Satz. (Lauf, sonst verpasst du den Zug.)` },
      { type: `mc`, q: `"È probabile che domani nevichi": "che domani nevichi" ist …`, options: [`ein Objektsatz`, `ein Subjektsatz`, `ein Inhaltssatz`], answer: 1, explain: `Er dient als Subjekt von "è probabile" (was ist wahrscheinlich? dass es schneit): Subjektsatz (soggettiva). (Es ist wahrscheinlich, dass es morgen schneit.)` },
      { type: `mc`, q: `"Parlava così piano che nessuno lo sentiva": Der Nebensatz ist …`, options: [`kausal`, `konsekutiv`, `final`], answer: 1, explain: `"Così… che" zeigt die Folge an: Konsekutivsatz. (Er sprach so leise, dass ihn niemand hörte.)` },
      { type: `tf`, q: `Ein impliziter Nebensatz hat das Verb im Indikativ oder im Konjunktiv.`, answer: false, explain: `Der implizite Nebensatz verwendet die infiniten Modi: Infinitiv, Partizip, Gerundium.` },
      { type: `tf`, q: `Ein Nebensatz 2. Grades hängt von einem Nebensatz 1. Grades ab.`, answer: true, explain: `Der Grad zählt die Ebenen der Abhängigkeit vom Hauptsatz.` },
      { type: `text`, q: `Wie heißt die Nebenordnung, die nur mit Kommas und ohne Konjunktionen erfolgt?`, answer: [`asindeto`, `l'asindeto`, `asyndeton`, `das asyndeton`, `coordinazione per asindeto`], explain: `Asyndeton (italienisch asindeto), aus dem Griechischen „ohne Verbindungen“.` },
      { type: `mc`, q: `"Ho comprato il libro che mi avevi consigliato": Der Nebensatz ist …`, options: [`ein Relativsatz`, `ein Objektsatz`, `ein Inhaltssatz`], answer: 0, explain: `"Che" ist ein Relativpronomen (= il quale), bezogen auf "libro": Relativsatz (relativa). (Ich habe das Buch gekauft, das du mir empfohlen hattest.)` },
      { type: `order`, q: `Bring die Schritte der Analyse des Satzgefüges in die richtige Reihenfolge.`, items: [`Die Prädikate unterstreichen`, `In Teilsätze teilen`, `Den Hauptsatz finden`, `Nebengeordnete und untergeordnete Sätze erkennen`, `Art, Form und Grad angeben`], explain: `Man beginnt bei den Verben, isoliert den Hauptsatz und klassifiziert dann alles andere.` },
      { type: `mc`, q: `"Per arrivare in tempo, prese un taxi": "per arrivare in tempo" ist …`, options: [`ein impliziter Finalsatz`, `ein expliziter Kausalsatz`, `ein impliziter Temporalsatz`], answer: 0, explain: `Er gibt den Zweck an und steht im Infinitiv: impliziter Finalsatz. (Um rechtzeitig anzukommen, nahm er ein Taxi.)` },
      { type: `tf`, q: `In "Devo finire i compiti" gibt es zwei Teilsätze.`, answer: false, explain: `"Dovere" ist ein Modalverb: Es bildet mit dem Infinitiv ein einziges Prädikat.` }
    ]
  }
});

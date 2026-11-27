TOPIC('de', {
  id: "l1-ita-testo-narrativo",
  title: "Der narrative Text",
  intro: "Wir erzählen Geschichten, seit es Sprache gibt: am Feuer, in Romanen, in Serien, in Videospielen. Aber wie ist eine Geschichte aufgebaut? In dieser Lektion lernst du die <b>Werkzeuge der Erzählanalyse</b> kennen: den Unterschied zwischen <b>Fabel und Handlungsgefüge (Plot)</b>, den <b>Erzähler</b> und die <b>Perspektive</b>, die <b>Figuren</b>, die <b>Zeit</b> und den <b>Raum</b>. Es sind dieselben Werkzeuge, die Kritiker, Drehbuchautoren und Schriftsteller benutzen.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Was ein narrativer Text ist",
      html: `<p>Ein <b>narrativer Text</b> erzählt eine Reihe von <b>Ereignissen</b> (wirklichen oder erfundenen), die zeitlich und durch Ursache und Wirkung miteinander verbunden sind und <b>Figuren</b> betreffen. Narrativ sind der Roman, die Erzählung, die Novelle, das Märchen, die Fabel, aber auch ein Zeitungsbericht, ein Comic, ein Film.</p>
<p>Ein narrativer Text besteht meist aus verschiedenen Arten von <b>Sequenzen</b>:</p>
<ul>
<li><b>erzählende</b>: berichten die Ereignisse und treiben die Handlung voran;</li>
<li><b>beschreibende</b>: stellen Orte, Personen, Gegenstände vor und halten die Handlung kurz an;</li>
<li><b>dialogische</b>: geben die Worte der Figuren wieder (direkte Rede);</li>
<li><b>reflektierende</b>: enthalten Gedanken und Kommentare des Erzählers oder der Figuren.</li>
</ul>
<p>Eine Geschichte hat eine typische Struktur in vier Phasen, die wir <b>Erzählschema</b> nennen:</p>
<ol>
<li><b>Ausgangssituation</b> (Gleichgewicht): wer, wo, wann.</li>
<li><b>Störung des Gleichgewichts</b> (Komplikation): Es passiert etwas, das die Geschichte in Gang setzt.</li>
<li><b>Verlauf</b> (Peripetien): Der Protagonist stellt sich Hindernissen (oft Höhepunkt oder <i>Klimax</i>).</li>
<li><b>Auflösung</b> und <b>Endsituation</b>: Das Problem wird gelöst, es entsteht ein neues Gleichgewicht (manchmal offen).</li>
</ol>`
    },
    {
      type: "svg",
      title: "Das Erzählschema",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<polyline points="30,230 130,230 200,170 290,120 380,60 470,170 570,200" fill="none" stroke="#2563eb" stroke-width="4"/>
<circle cx="30" cy="230" r="7" fill="#2563eb"/><circle cx="130" cy="230" r="7" fill="#dc2626"/><circle cx="380" cy="60" r="8" fill="#f59e0b"/><circle cx="570" cy="200" r="7" fill="#16a34a"/>
<text x="30" y="260" font-size="14" fill="#0f172a">Ausgangs-</text><text x="30" y="278" font-size="14" fill="#0f172a">situation</text>
<text x="105" y="205" font-size="14" fill="#dc2626" font-weight="bold">Störung</text><text x="105" y="222" font-size="14" fill="#dc2626" font-weight="bold">Gleichgewicht</text>
<text x="215" y="115" font-size="14" fill="#0f172a">Verlauf</text><text x="215" y="133" font-size="14" fill="#0f172a">(Peripetien)</text>
<text x="395" y="55" font-size="14" fill="#b45309" font-weight="bold">Klimax</text>
<text x="470" y="210" font-size="14" fill="#0f172a">Auflösung</text><text x="470" y="288" font-size="14" fill="#16a34a" font-weight="bold">Endsituation</text>
<text x="300" y="25" font-size="16" text-anchor="middle" font-weight="bold" fill="#0f172a">Die Spannung steigt und sinkt dann</text>
</svg>`,
      caption: "Die blaue Linie zeigt die Spannung der Erzählung: Sie wächst bis zur Klimax und löst sich dann auf."
    },
    {
      type: "text",
      title: "2. Fabel und Plot",
      html: `<p>Im 20. Jahrhundert haben die <b>russischen Formalisten</b> (Viktor Šklovskij, Boris Tomaševskij) zwei Ebenen unterschieden:</p>
<ul>
<li><b>Fabel</b> (\"fabula\"): die Ereignisse in der <b>chronologischen und ursächlichen Reihenfolge</b>, in der sie \"wirklich\" geschehen sind.</li>
<li><b>Plot</b> oder Handlungsgefüge (\"intreccio\"): die Ereignisse, wie der Autor sie <b>darzustellen wählt</b>, auch in anderer Reihenfolge (Vorausdeutungen, Rückblenden, Sprünge), um Spannung, Überraschung oder Bedeutung zu erzeugen.</li>
</ul>
<p>Beispiel: In einem Krimi beginnt die Fabel mit dem Verbrechen und führt zur Entdeckung des Täters; der Plot beginnt mit der Leiche und rekonstruiert <i>rückwärts</i>, wie es dazu gekommen ist. Die Fabel ist eine \"Chronik\"; der Plot ist die <b>Kunst</b> des Erzählens.</p>`
    },
    {
      type: "example",
      title: "Dieselbe Fabel, zwei Plots",
      html: `<p><b>Fabel</b>: (1) Sara verliert ihr Portemonnaie, (2) ein Passant findet es, (3) er bringt es zur Polizei, (4) Sara bekommt es zurück.</p>
<p><b>Plot A</b> (linear): 1-2-3-4, wie in der Reihenfolge der Ereignisse.</p>
<p><b>Plot B</b> (mit Rückblende): Er beginnt damit, dass Sara das Portemonnaie bei der Polizei abholt (4); dann geht es zurück: \"drei Stunden zuvor\" hatte sie es verloren (1) ... Der Leser fragt sich sofort, <i>wie es dazu gekommen ist</i>: Neugier entsteht. Die Geschichte ist identisch, die Wirkung ist anders.</p>`
    },
    {
      type: "widget",
      title: "Fabel oder Plot?",
      widget: "classify",
      options: { groups: ["Gehört zum Plot (Erzähltechnik)", "Gehört zur Fabel (Reihenfolge der Ereignisse)"], items: [["Rückblende", 0], ["Vorausdeutung", 0], ["Chronologische Reihenfolge der Ereignisse", 1], ["Erzählung, die am Ende beginnt", 0], ["Die tatsächliche Folge von Ursache und Wirkung", 1]] },
      caption: "Unterscheide die Techniken des Autors von der tatsächlichen Reihenfolge der Ereignisse."
    },
    {
      type: "text",
      title: "3. Der Erzähler und die Perspektive",
      html: `<p>Man darf den <b>Autor</b> (die reale Person, die schreibt) nicht mit dem <b>Erzähler</b> (der Stimme, die innerhalb des Textes erzählt) verwechseln. Der Erzähler kann sein:</p>
<ul>
<li><b>Außenstehend</b> (3. Person): nimmt nicht an der Geschichte teil (\"Lucia lief nach Hause ...\"). Er kann <b>allwissend</b> sein (weiß alles, auch die Gedanken) oder sich auf das beschränken, was man von außen beobachten kann.</li>
<li><b>Innenstehend</b> (1. Person): ist eine Figur der Geschichte, Protagonist oder Zeuge (\"Ich lief nach Hause ...\"). Er kennt nur, was er selbst weiß und sieht, und kann <b>unzuverlässig</b> sein.</li>
</ul>
<p>Der Theoretiker <b>Gérard Genette</b> (1930-2018) unterscheidet außerdem die <b>Fokalisierung</b>, also <i>aus welcher Perspektive</i> wir die Ereignisse sehen:</p>
<ul>
<li><b>Nullfokalisierung</b>: Der Erzähler weiß mehr als die Figuren (Allwissenheit). Z. B. <i>I promessi sposi</i> (Die Verlobten) von Manzoni.</li>
<li><b>Interne Fokalisierung</b>: Wir sehen mit den Augen einer Figur und wissen nur, was sie weiß.</li>
<li><b>Externe Fokalisierung</b>: Der Erzähler weiß weniger als die Figur und gibt nur wieder, was man sieht und hört, ohne die Gedanken zu erklären.</li>
</ul>
<p>Die <b>Worte der Figuren</b> werden auf drei Arten wiedergegeben: <b>direkte Rede</b> (Anführungszeichen oder Gedankenstriche: \"Ich komme\", sagte er), <b>indirekte Rede</b> (Er sagte, er werde kommen) und <b>erlebte Rede</b> (ohne Einleitung, die Stimme der Figur vermischt sich mit der des Erzählers: <i>Er ging zum Fenster. Wie öde, dieser Regen!</i>).</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Perspektive zu verstehen",
      intro: "Die Perspektive ist in einem Text am schwersten zu erkennen. Hier sind drei Bilder.",
      tabs: [
        { label: "🎥 Die Kamera", html: "<p>Denk dir den Erzähler als <b>Kamera</b>. Bei der <b>Nullfokalisierung</b> ist die Kamera eine Drohne, die alles von oben sieht, auch in die Häuser hinein. Bei der <b>internen Fokalisierung</b> ist sie ein Ego-Shooter-Videospiel: Du siehst nur, was die Figur sieht. Bei der <b>externen Fokalisierung</b> ist sie eine Überwachungskamera: Sie zeichnet Handlungen und Worte auf, aber keine Gedanken.</p>" },
        { label: "🔁 Schreib die Szene um", html: "<p>Der beste Weg, die Perspektive zu verstehen, ist, sie zu <b>verändern</b>. Szene: Ein Junge kommt zu spät zur Schule. <br><b>Außenstehend allwissend</b>: <i>Marco betrat besorgt das Klassenzimmer: Er wusste, dass der Lehrer schon wütend war.</i> <br><b>Innenstehend (1. Person)</b>: <i>Ich trat ein und mir gefror das Blut: Der Lehrer starrte mich an.</i> <br><b>Außenstehend objektiv</b>: <i>Marco öffnete die Tür. Der Lehrer hörte auf zu sprechen.</i><br>Es ändern sich der Ton, die Informationen und die Sympathie, die wir für die Figur empfinden.</p>" },
        { label: "👁️ Schema der Perspektiven", html: "<p>Das Schema zeigt, wie viel Wissen der Erzähler im Verhältnis zur Figur hat.</p>", svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="300" fill="#f8fafc"/><text x="300" y="30" font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a">Fokalisierung (Genette)</text><rect x="30" y="60" width="160" height="150" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/><text x="110" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">NULL</text><text x="110" y="125" font-size="14" text-anchor="middle" fill="#0f172a">Erzähler &gt; Figur</text><text x="110" y="150" font-size="14" text-anchor="middle" fill="#0f172a">weiß alles</text><text x="110" y="175" font-size="14" text-anchor="middle" fill="#0f172a">(Allwissenheit)</text><rect x="220" y="60" width="160" height="150" rx="10" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><text x="300" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">INTERN</text><text x="300" y="125" font-size="14" text-anchor="middle" fill="#0f172a">Erzähler = Figur</text><text x="300" y="150" font-size="14" text-anchor="middle" fill="#0f172a">sieht mit ihren Augen</text><rect x="410" y="60" width="160" height="150" rx="10" fill="#fecaca" stroke="#991b1b" stroke-width="2"/><text x="490" y="95" font-size="16" font-weight="bold" text-anchor="middle" fill="#0f172a">EXTERN</text><text x="490" y="125" font-size="14" text-anchor="middle" fill="#0f172a">Erzähler &lt; Figur</text><text x="490" y="150" font-size="14" text-anchor="middle" fill="#0f172a">nur Handlungen und Worte</text><text x="300" y="260" font-size="14" text-anchor="middle" fill="#0f172a">Die Perspektive bestimmt, was wir wissen und was wir empfinden</text></svg>` }
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Erzähler und Fabel",
      questions: [
        { type: "mc", q: "In einer Erzählung in der ersten Person ist der Erzähler ...", options: ["außenstehend", "innenstehend", "immer allwissend"], answer: 1, explain: "Wer \"ich\" sagt, ist eine Figur der Geschichte: innenstehender Erzähler." },
        { type: "tf", q: "Der Plot hält immer die chronologische Reihenfolge der Ereignisse ein.", answer: false, explain: "Der Plot kann die Reihenfolge durch Rückblenden und Vorausdeutungen verändern; die Fabel folgt der tatsächlichen Reihenfolge." },
        { type: "mc", q: "\"Er setzte sich. Wie öde, dieser Unterricht!\" ist ein Beispiel für ...", options: ["direkte Rede", "erlebte Rede", "Beschreibung"], answer: 1, explain: "Der Gedanke der Figur fließt ohne einleitende Verben und ohne Anführungszeichen in die Erzählung ein." }
      ]
    },
    {
      type: "text",
      title: "4. Die Figuren",
      html: `<p>Die Figuren sind die Wesen (Menschen, Tiere, Fabelwesen), die in der Geschichte handeln. Nach ihrer <b>Rolle</b> unterscheidet man:</p>
<ul>
<li><b>Protagonist</b>: die zentrale Figur, deren Geschichte wir verfolgen (im Märchen der <b>Held</b>).</li>
<li><b>Antagonist</b>: wer sich dem Protagonisten entgegenstellt.</li>
<li><b>Helfer</b> (oder Verbündeter): wer ihn unterstützt. <b>Nebenfiguren</b> vervollständigen die Handlung.</li>
</ul>
<p>Der englische Schriftsteller <b>E. M. Forster</b> (<i>Aspects of the Novel</i>, 1927) hat <b>flache</b> Figuren (durch nur eine Eigenschaft bestimmt, vorhersehbar) von <b>runden</b> Figuren (\"a tutto tondo\": komplex, fähig zu überraschen und sich zu verändern) unterschieden. Eine Figur kann sein:</p>
<ul>
<li><b>statisch</b> (verändert sich im Lauf der Geschichte nicht) oder <b>dynamisch</b> (wandelt sich);</li>
<li><b>Typ</b> (steht für eine Kategorie, etwa den Geizhals) oder <b>Individuum</b> (einzigartig).</li>
</ul>
<p>Der Leser lernt eine Figur auf verschiedene Weise kennen: durch <b>direkte Charakterisierung</b> (der Erzähler beschreibt sie: \"Er war ein geiziger Mann\") und <b>indirekte</b> (wir erschließen sie aus Handlungen, Worten, Entscheidungen und Gegenständen, die sie besitzt). Letztere wird in der modernen Erzählliteratur bevorzugt: <i>\"show, don't tell\"</i> (zeige, sag es nicht).</p>`
    },
    {
      type: "example",
      title: "Wie wir eine Figur \"sehen\"",
      html: `<p>Vergleiche zwei Arten, dieselbe Figur vorzustellen:</p>
<p><b>Direkt</b>: <i>\"Giulia war ein sehr großzügiger Mensch.\"</i></p>
<p><b>Indirekt</b>: <i>\"Giulia leerte ihr Portemonnaie für den Mann, der auf dem Bürgersteig saß, und ging dann zu Fuß nach Hause.\"</i></p>
<p>Im zweiten Fall erschließen wir es aus den Tatsachen: Der Leser denkt aktiv mit und ist deshalb stärker beteiligt.</p>`
    },
    {
      type: "text",
      title: "5. Zeit und Raum",
      html: `<p>Die <b>Zeit</b> hat zwei Dimensionen:</p>
<ul>
<li><b>Erzählte Zeit</b> (Zeit der Geschichte): die tatsächliche Dauer der Ereignisse (Jahre, ein Tag).</li>
<li><b>Erzählzeit</b> (Zeit des Erzählens): wie viel Raum der Text diesen Ereignissen widmet (Zeilen, Seiten).</li>
</ul>
<p>Das Verhältnis zwischen beiden erzeugt den <b>Rhythmus</b>:</p>
<ul>
<li><b>Szene</b>: erzählte Zeit ≈ Erzählzeit (vor allem Dialoge).</li>
<li><b>Zusammenfassung</b>: lange Zeiträume in wenigen Zeilen erzählt (\"Zehn Jahre vergingen\").</li>
<li><b>Ellipse</b>: Ein Zeitabschnitt wird ganz übersprungen.</li>
<li><b>Pause</b>: Die Erzählung hält an (Beschreibung, Reflexion), während die Geschichte nicht voranschreitet.</li>
<li><b>Dehnung</b>: Ein Augenblick dauert viele Zeilen (das lange Warten).</li>
</ul>
<p>Und zur Ordnung: <b>Analepse</b> (Rückblende: Sprung in die Vergangenheit), <b>Prolepse</b> (Vorausdeutung auf die Zukunft). Die Zeit kann <b>chronologisch</b> (äußere, die der Uhren) oder <b>psychologisch</b> (innere: Eine Stunde Langeweile scheint ewig) sein.</p>
<p>Der <b>Raum</b> ist der Ort der Handlung: <b>real</b> oder <b>imaginär</b>, <b>offen</b> oder <b>geschlossen</b>. Er ist nicht nur Kulisse: Er erzeugt Atmosphäre, drückt die Gemütslage aus, manchmal ist er ein Symbol (das Schloss, der Wald, das Meer).</p>`
    },
    {
      type: "curiosity",
      title: "\"I promessi sposi\" beginnen mit einer Landschaft",
      html: `<p>Der berühmte Anfang von Alessandro Manzoni, <i>\"Quel ramo del lago di Como, che volge a mezzogiorno...\"</i> (\"Jener Arm des Comer Sees, der sich nach Süden wendet ...\"), eröffnet die Geschichte mit einer <b>langen Beschreibung</b> der Orte (Erzählpause), noch bevor die Figuren eingeführt werden. Der Roman, der in der endgültigen Fassung 1840-42 erschien, hat einen <b>allwissenden</b>, oft ironischen außenstehenden Erzähler, der die Ereignisse kommentiert. Er gibt vor, ein Manuskript eines Anonymus aus dem 17. Jahrhundert neu zu schreiben: Das ist der Kunstgriff des \"gefundenen Manuskripts\".</p>`
    },
    {
      type: "curiosity",
      title: "Die Zeit in Videospielen und Serien",
      html: `<p>Serien verwenden ständig die besprochenen Techniken: die <i>Rückblende</i> (Analepse), die <i>Ellipse</i> (\"drei Monate später\") und den <i>Cliffhanger</i> (ein Schluss, der im Moment höchster Spannung offen bleibt, wie bei einer mittendrin abgebrochenen Serie). Auch Videospiele spielen mit der Perspektive: Die Ego-Kamera ist eine interne Fokalisierung, die Sicht von oben ist Allwissenheit.</p>`
    },
    {
      type: "conceptMap",
      title: "Mindmap: die Elemente des narrativen Textes",
      nodes: [
        { id: "tn", label: "Narrativer Text", x: 50, y: 8, color: "#3b82f6", html: "Erzählt zeitlich und durch Ursache und Wirkung verbundene Ereignisse, die von Figuren erlebt werden.", why: "Erzählen ist eine der ältesten Denkformen: Es ordnet die Erfahrung und macht sie mitteilbar." },
        { id: "fab", label: "Fabel und Plot", x: 18, y: 38, color: "#10b981", html: "Fabel = chronologische Reihenfolge der Ereignisse; Plot = vom Autor gewählte Reihenfolge.", why: "Unterscheidung der russischen Formalisten (1910er-1920er Jahre), um zu erklären, dass die Kunst in der Art des Erzählens liegt, nicht nur in dem, was erzählt wird." },
        { id: "nar", label: "Erzähler und Perspektive", x: 82, y: 38, color: "#f59e0b", html: "Außen- oder Innenerzähler; Null-, interne, externe Fokalisierung.", why: "Wer erzählt, bestimmt, was wir wissen und wie sehr wir ihm vertrauen. Genette (<i>Figures III</i>, 1972) hat die Begriffe systematisiert, um präzise zu analysieren." },
        { id: "per", label: "Figuren", x: 30, y: 72, color: "#8b5cf6", html: "Protagonist, Antagonist, Helfer; flach oder rund.", why: "Die Figuren geben der Handlung emotionalen Sinn: Forster (1927) zeigte, dass eine gut gebaute Figur auf überzeugende Weise überrascht." },
        { id: "ts", label: "Zeit und Raum", x: 70, y: 72, color: "#ef4444", html: "Erzählte Zeit und Erzählzeit; Analepse und Prolepse; Orte als Atmosphäre und Symbol.", why: "Die Erzählzeit erzeugt Rhythmus und Spannung; der Raum ist nicht nur Kulisse, sondern lädt die Handlung mit Bedeutung auf." }
      ],
      edges: [["tn", "fab", "gliedert sich in"], ["tn", "nar", "wird gefiltert durch"], ["tn", "per", "hat"], ["tn", "ts", "spielt in"]]
    },
    {
      type: "remember",
      title: "Zum Mitnehmen",
      html: `<p>Um einen narrativen Text zu analysieren, frag dich: <b>Wer erzählt?</b> (Erzähler), <b>von wo aus sieht er?</b> (Fokalisierung), <b>in welcher Reihenfolge?</b> (Fabel/Plot), <b>wer handelt?</b> (Figuren), <b>wann und wo?</b> (Zeit und Raum). Such dann die <b>Struktur</b>: Ausgangssituation, Störung, Verlauf, Auflösung.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Figuren, Zeit und Raum",
      questions: [
        { type: "mc", q: "Eine Figur, die auf einer einzigen Eigenschaft aufgebaut und vorhersehbar ist, ist nach Forster ...", options: ["rund", "flach", "dynamisch"], answer: 1, explain: "Forster nennt Figuren mit nur einem Merkmal \"flach\"." },
        { type: "mc", q: "\"Zehn Jahre später kehrte Anna ins Dorf zurück.\" Hier wird die Zeit behandelt mit ...", options: ["einer Pause", "einer Zusammenfassung/Ellipse", "einer Szene"], answer: 1, explain: "Zehn Jahre werden in wenigen Worten zusammengefasst." },
        { type: "tf", q: "Eine Rückblende ist eine Analepse.", answer: true, explain: "Sie ist ein Sprung zurück in der Zeit der Geschichte." }
      ]
    }
  ],
  glossary: [
    { t: "Fabel (fabula)", d: "Ereignisse in der chronologischen und ursächlichen Reihenfolge, in der sie geschehen sind." },
    { t: "Plot (intreccio)", d: "Ereignisse in der vom Autor gewählten Reihenfolge." },
    { t: "Erzähler", d: "Die Stimme, die die Geschichte erzählt, vom Autor zu unterscheiden." },
    { t: "Fokalisierung", d: "Die Perspektive, aus der die Ereignisse dargestellt werden." },
    { t: "Analepse", d: "Sprung zurück in der Zeit (Rückblende)." },
    { t: "Prolepse", d: "Vorwegnahme zukünftiger Ereignisse." },
    { t: "Ellipse", d: "Zeitsprung, bei dem ein Zeitraum nicht erzählt wird." },
    { t: "Klimax", d: "Der Moment höchster Spannung der Geschichte." },
    { t: "Antagonist", d: "Figur, die sich dem Protagonisten entgegenstellt." },
    { t: "Erlebte Rede", d: "Worte oder Gedanken der Figur verschmelzen ohne Signal mit der Stimme des Erzählers." },
    { t: "Cliffhanger", d: "Schluss einer Folge, der im Moment höchster Spannung offen bleibt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was unterscheidet die Fabel vom Plot?", options: ["Die Länge des Textes", "Die Reihenfolge, in der die Ereignisse dargestellt werden", "Die Zahl der Figuren", "Die Art des Erzählers"], answer: 1, explain: "Die Fabel folgt der chronologischen Reihenfolge; der Plot der vom Autor gewählten." },
      { type: "tf", q: "Autor und Erzähler sind immer dasselbe.", answer: false, explain: "Der Autor ist die reale Person; der Erzähler ist eine im Text geschaffene Stimme." },
      { type: "mc", q: "Bei interner Fokalisierung ...", options: ["weiß der Leser mehr als die Figuren", "weiß der Leser nur, was die Figur weiß", "kennt der Leser die Gedanken nicht und sieht nur Handlungen", "kennt der Leser die Zukunft"], answer: 1, explain: "Wir sehen die Geschichte mit den Augen einer Figur." },
      { type: "text", q: "Wie nennt man den Sprung zurück in der Zeit in einer Erzählung?", answer: ["Analepse", "Rückblende", "die Analepse", "Flashback", "analessi", "flashback"], explain: "Analepse (Rückblende): Ein vergangenes Ereignis wird wieder aufgerufen." },
      { type: "order", q: "Bring die Phasen des Erzählschemas in die richtige Reihenfolge.", items: ["Ausgangssituation", "Störung des Gleichgewichts", "Verlauf", "Auflösung"], explain: "Man beginnt mit dem Gleichgewicht, es wird gestört, entwickelt sich und löst sich schließlich auf." },
      { type: "mc", q: "\"Er war ein geiziger Mann\" ist ein Beispiel für ... Charakterisierung.", options: ["direkte", "indirekte", "ironische", "dialogische"], answer: 0, explain: "Der Erzähler nennt die Eigenschaft direkt." },
      { type: "mc", q: "Eine Beschreibung, die die Handlung anhält, ist ...", options: ["eine Szene", "eine Pause", "eine Ellipse", "eine Klimax"], answer: 1, explain: "Die erzählte Zeit steht still, während die Erzählung weitergeht: Pause." },
      { type: "num", q: "Wie viele Phasen hat das in der Lektion beschriebene Grundschema der Erzählung (Ausgangssituation, Störung, Verlauf, Auflösung)?", answer: 4, tol: 0, explain: "Es sind vier." },
      { type: "mc", q: "In \"I promessi sposi\" ist der Erzähler ...", options: ["innenstehend als Protagonist", "außenstehend allwissend", "außenstehend objektiv", "innenstehend als Zeuge"], answer: 1, explain: "Er erzählt von außen, weiß alles und kommentiert." }
    ]
  }
});

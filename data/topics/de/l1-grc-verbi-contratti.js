TOPIC('de', {
  id: `l1-grc-verbi-contratti`,
  title: `Die Contracta`,
  intro: `Du hast gelernt, dass das Präsens von <i>λύω</i> aus Stamm + Themavokal + Endung gebildet wird. Aber viele sehr häufige Verben wie <i>τιμάω</i> („ich ehre“), <i>φιλέω</i> („ich liebe“) und <i>δηλόω</i> („ich zeige“) haben einen Stamm, der auf einen <b>Vokal</b> (<b>α, ε, ο</b>) endet: Wenn Themavokal und Endung hinzukommen, <b>verschmelzen</b> (<b>kontrahieren</b>) die beiden benachbarten Vokale zu einem einzigen. Grammatisch ist das nicht schwer: Du musst nur eine Tabelle der Verschmelzungen und eine Akzentregel kennen. Diese Lektion zeigt dir, wie du Präsens und Imperfekt der <b>Contracta</b> bildest und erkennst: Es sind die Verben, denen ein Griechischleser am häufigsten begegnet. ✨🔗`,
  minutes: 50,
  sections: [
    {
      type: `text`, title: `1. Was sind Contracta`,
      html: `<p>Die <b>Contracta</b> (kontrahierte Verben) haben den Stamm auf <b>-α</b>, <b>-ε</b> oder <b>-ο</b>. Im Wörterbuch werden sie so zitiert:</p>
<ul>
<li><b>auf -άω</b>: <i>τιμάω, -ῶ</i> „ich ehre“, <i>νικάω, -ῶ</i> „ich siege“, <i>ὁράω, -ῶ</i> „ich sehe“, <i>τολμάω, -ῶ</i> „ich wage“, <i>ἐρωτάω, -ῶ</i> „ich frage“, <i>ἀγαπάω, -ῶ</i> „ich liebe“;</li>
<li><b>auf -έω</b>: <i>φιλέω, -ῶ</i> „ich liebe“, <i>ποιέω, -ῶ</i> „ich mache“, <i>καλέω, -ῶ</i> „ich rufe“, <i>οἰκέω, -ῶ</i> „ich wohne“, <i>μισέω, -ῶ</i> „ich hasse“, <i>ἀδικέω, -ῶ</i> „ich tue Unrecht“;</li>
<li><b>auf -όω</b>: <i>δηλόω, -ῶ</i> „ich zeige“, <i>ἐλευθερόω, -ῶ</i> „ich befreie“, <i>δουλόω, -ῶ</i> „ich versklave“, <i>ἀξιόω, -ῶ</i> „ich halte für würdig“, <i>στεφανόω, -ῶ</i> „ich kröne“.</li>
</ul>
<p>Die <b>unkontrahierten</b> Formen (<i>τιμάω, φιλέω, δηλόω</i>) sind nur theoretisch: Im Attischen schreibt und spricht man immer die <b>kontrahierten</b> (<i>τιμῶ, φιλῶ, δηλῶ</i>). Der Verbalstamm bleibt aber der „volle“, wenn die anderen Tempora gebildet werden.</p>`
    },
    {
      type: `text`, title: `2. Die Kontraktionstabelle`,
      html: `<p>Die drei Stammvokale verschmelzen nach diesen Regeln mit dem Themavokal oder der Endung:</p>
<table>
<tr><th>Stamm</th><th>+ ε</th><th>+ ει</th><th>+ ο</th><th>+ ου</th><th>+ ω</th><th>+ η</th><th>+ ῃ</th></tr>
<tr><td><b>α</b></td><td>α</td><td>ᾳ</td><td>ω</td><td>ω</td><td>ω</td><td>α</td><td>ᾳ</td></tr>
<tr><td><b>ε</b></td><td>ει</td><td>ει</td><td>ου</td><td>ου</td><td>ω</td><td>η</td><td>ῃ</td></tr>
<tr><td><b>ο</b></td><td>ου</td><td>οι</td><td>ου</td><td>ου</td><td>ω</td><td>ω</td><td>οι</td></tr>
</table>
<p>Merkregeln:</p>
<ul>
<li>Mit <b>ο oder ω</b> (also <i>ο, ου, ω</i>) ergibt die Kontraktion fast immer <b>ω</b> oder <b>ου</b>: <i>τιμάομεν ➜ τιμῶμεν</i>; <i>φιλέομεν ➜ φιλοῦμεν</i>.</li>
<li>Gleiche Vokale ergeben den Diphthong: <i>ε + ε = ει</i>, <i>ο + ο = ου</i>.</li>
<li>Erscheint ein <b>ι</b> (in <i>ει, ῃ</i>), bleibt es als <b>Iota subscriptum</b> (bei α: ᾳ) oder als Diphthong <b>-οι</b> (bei ο) erhalten.</li>
<li>Das <b>α</b> ist „stark“: <i>α + ε = α</i> (lang); <i>α + ει = ᾳ</i>.</li>
</ul>`
    },
    {
      type: `svg`, title: `Die Tabelle auf einen Blick`,
      caption: `Die Kontraktionen der drei Stammtypen. Lies die Zeile des Stamms und die Spalte des folgenden Vokals.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<text x="300" y="28" font-size="19" font-weight="bold" fill="#581c87" text-anchor="middle">KONTRAKTIONSTABELLE</text>
<rect x="20" y="48" width="82" height="40" fill="#e9d5ff"/><text x="61.0" y="75" font-size="16" font-weight="bold" fill="#581c87" text-anchor="middle">Vokal</text>
<rect x="102" y="48" width="66" height="40" fill="#e9d5ff" stroke="#fff"/><text x="135" y="75" font-size="17" font-weight="bold" fill="#581c87" text-anchor="middle">+ ε</text>
<rect x="168" y="48" width="66" height="40" fill="#e9d5ff" stroke="#fff"/><text x="201" y="75" font-size="17" font-weight="bold" fill="#581c87" text-anchor="middle">+ ει</text>
<rect x="234" y="48" width="66" height="40" fill="#e9d5ff" stroke="#fff"/><text x="267" y="75" font-size="17" font-weight="bold" fill="#581c87" text-anchor="middle">+ ο</text>
<rect x="300" y="48" width="66" height="40" fill="#e9d5ff" stroke="#fff"/><text x="333" y="75" font-size="17" font-weight="bold" fill="#581c87" text-anchor="middle">+ ου</text>
<rect x="366" y="48" width="66" height="40" fill="#e9d5ff" stroke="#fff"/><text x="399" y="75" font-size="17" font-weight="bold" fill="#581c87" text-anchor="middle">+ ω</text>
<rect x="432" y="48" width="66" height="40" fill="#e9d5ff" stroke="#fff"/><text x="465" y="75" font-size="17" font-weight="bold" fill="#581c87" text-anchor="middle">+ η</text>
<rect x="498" y="48" width="66" height="40" fill="#e9d5ff" stroke="#fff"/><text x="531" y="75" font-size="17" font-weight="bold" fill="#581c87" text-anchor="middle">+ ῃ</text>
<rect x="20" y="88" width="82" height="56" fill="#fde68a" stroke="#fff"/><text x="61.0" y="125" font-size="26" font-weight="bold" fill="#78350f" text-anchor="middle">α</text>
<rect x="102" y="88" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="135" y="125" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">α</text>
<rect x="168" y="88" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="201" y="125" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ᾳ</text>
<rect x="234" y="88" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="267" y="125" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ω</text>
<rect x="300" y="88" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="333" y="125" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ω</text>
<rect x="366" y="88" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="399" y="125" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ω</text>
<rect x="432" y="88" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="465" y="125" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">α</text>
<rect x="498" y="88" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="531" y="125" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ᾳ</text>
<rect x="20" y="144" width="82" height="56" fill="#bfdbfe" stroke="#fff"/><text x="61.0" y="181" font-size="26" font-weight="bold" fill="#1e3a8a" text-anchor="middle">ε</text>
<rect x="102" y="144" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="135" y="181" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ει</text>
<rect x="168" y="144" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="201" y="181" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ει</text>
<rect x="234" y="144" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="267" y="181" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ου</text>
<rect x="300" y="144" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="333" y="181" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ου</text>
<rect x="366" y="144" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="399" y="181" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ω</text>
<rect x="432" y="144" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="465" y="181" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">η</text>
<rect x="498" y="144" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="531" y="181" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ῃ</text>
<rect x="20" y="200" width="82" height="56" fill="#bbf7d0" stroke="#fff"/><text x="61.0" y="237" font-size="26" font-weight="bold" fill="#14532d" text-anchor="middle">ο</text>
<rect x="102" y="200" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="135" y="237" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ου</text>
<rect x="168" y="200" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="201" y="237" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">οι</text>
<rect x="234" y="200" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="267" y="237" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ου</text>
<rect x="300" y="200" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="333" y="237" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ου</text>
<rect x="366" y="200" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="399" y="237" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ω</text>
<rect x="432" y="200" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="465" y="237" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">ω</text>
<rect x="498" y="200" width="66" height="56" fill="#ffffff" stroke="#d8b4fe"/><text x="531" y="237" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">οι</text>
<text x="300" y="284" font-size="15" fill="#581c87" text-anchor="middle" font-weight="bold">z. B.: φιλέ-ετε ➜ φιλεῖτε (ε+ε=ει) • τιμά-ομεν ➜ τιμῶμεν (α+ο=ω)</text>
</svg>`
    },
    {
      type: `text`, title: `3. Präsens Indikativ`,
      html: `<h4>Aktiv</h4>
<table>
<tr><th>Person</th><th>τιμάω (α)</th><th>φιλέω (ε)</th><th>δηλόω (ο)</th></tr>
<tr><td>1. Sg.</td><td>τιμῶ</td><td>φιλῶ</td><td>δηλῶ</td></tr>
<tr><td>2. Sg.</td><td>τιμᾷς</td><td>φιλεῖς</td><td>δηλοῖς</td></tr>
<tr><td>3. Sg.</td><td>τιμᾷ</td><td>φιλεῖ</td><td>δηλοῖ</td></tr>
<tr><td>1. Pl.</td><td>τιμῶμεν</td><td>φιλοῦμεν</td><td>δηλοῦμεν</td></tr>
<tr><td>2. Pl.</td><td>τιμᾶτε</td><td>φιλεῖτε</td><td>δηλοῦτε</td></tr>
<tr><td>3. Pl.</td><td>τιμῶσι(ν)</td><td>φιλοῦσι(ν)</td><td>δηλοῦσι(ν)</td></tr>
</table>
<h4>Medio-Passiv</h4>
<table>
<tr><th>Person</th><th>τιμάω</th><th>φιλέω</th><th>δηλόω</th></tr>
<tr><td>1. Sg.</td><td>τιμῶμαι</td><td>φιλοῦμαι</td><td>δηλοῦμαι</td></tr>
<tr><td>2. Sg.</td><td>τιμᾷ</td><td>φιλῇ</td><td>δηλοῖ</td></tr>
<tr><td>3. Sg.</td><td>τιμᾶται</td><td>φιλεῖται</td><td>δηλοῦται</td></tr>
<tr><td>1. Pl.</td><td>τιμώμεθα</td><td>φιλούμεθα</td><td>δηλούμεθα</td></tr>
<tr><td>2. Pl.</td><td>τιμᾶσθε</td><td>φιλεῖσθε</td><td>δηλοῦσθε</td></tr>
<tr><td>3. Pl.</td><td>τιμῶνται</td><td>φιλοῦνται</td><td>δηλοῦνται</td></tr>
</table>
<p>Wie entstehen sie? Zum Beispiel die 2. Person Singular: <i>φιλέ-εις ➜ φιλεῖς</i> (ε + ει = ει); die 3. Person Plural: <i>δηλό-ουσι ➜ δηλοῦσι</i> (ο + ου = ου); die 2. Person Medio-Passiv: <i>τιμά-ῃ ➜ τιμᾷ</i> (α + ῃ = ᾳ).</p>
<h4>Imperativ und Infinitiv</h4>
<table>
<tr><th></th><th>τιμάω</th><th>φιλέω</th><th>δηλόω</th></tr>
<tr><td>Imp. 2. Sg.</td><td>τίμα</td><td>φίλει</td><td>δήλου</td></tr>
<tr><td>Imp. 2. Pl.</td><td>τιμᾶτε</td><td>φιλεῖτε</td><td>δηλοῦτε</td></tr>
<tr><td>Inf. Aktiv</td><td>τιμᾶν</td><td>φιλεῖν</td><td>δηλοῦν</td></tr>
<tr><td>Inf. Medio-Pass.</td><td>τιμᾶσθαι</td><td>φιλεῖσθαι</td><td>δηλοῦσθαι</td></tr>
</table>`
    },
    {
      type: `remember`, title: `Die Akzentregel bei den Kontraktionen`,
      html: `<p>Nach der Kontraktion hängt der Akzent davon ab, wo er <b>vor</b> der Verschmelzung stand:</p>
<ol>
<li>Stand der Akzent <b>vor</b> den beiden Vokalen, <b>bleibt er dort</b>: <i>ἐτίμαον ➜ ἐτίμων</i>; <i>ἐφίλεον ➜ ἐφίλουν</i>; <i>φίλεε ➜ φίλει</i>.</li>
<li>Stand der Akzent auf dem <b>ersten</b> der beiden Vokale, trägt die kontrahierte Silbe den <b>Zirkumflex</b>: <i>τιμάω ➜ τιμῶ</i>; <i>φιλέει ➜ φιλεῖ</i>.</li>
<li>Stand der Akzent auf dem <b>zweiten</b> der beiden Vokale, trägt die kontrahierte Silbe den <b>Akut</b>: <i>τιμαόμεθα ➜ τιμώμεθα</i>; <i>φιλεόμεθα ➜ φιλούμεθα</i>.</li>
</ol>
<p>Deshalb hat das Präsens immer den Zirkumflex: In den unkontrahierten Formen stand der Akzent auf dem Stammvokal, also dem <i>ersten</i> der beiden Vokale.</p>`
    },
    {
      type: `quiz`, title: `Mini-Quiz: Kontraktionen`,
      questions: [
        { type: `mc`, q: `φιλέ-ουσι wird kontrahiert zu …`, options: [`φιλοῦσι`, `φιλεῦσι`, `φιλῶσι`], answer: 0, explain: `ε + ου = ου, mit Zirkumflex: φιλοῦσι.` },
        { type: `mc`, q: `Wie wird τιμά-ετε kontrahiert?`, options: [`τιμᾶτε`, `τιμεῖτε`, `τιμοῦτε`], answer: 0, explain: `α + ε = α (lang), mit Zirkumflex: τιμᾶτε.` },
        { type: `text`, q: `Schreibe die 2. Person Singular Aktiv des Präsens von δηλόω.`, answer: [`δηλοῖς`, `δηλοις`], explain: `δηλό-εις ➜ δηλοῖς (ο + ει = οι).` },
        { type: `mc`, q: `Wie wird die 1. Person Singular von τιμάω gebildet?`, options: [`τιμάω ➜ τιμῶ`, `τιμάω ➜ τιμῷ`, `τιμάω ➜ τιμοῦ`], answer: 0, explain: `α + ω = ω, Zirkumflex: τιμῶ.` }
      ]
    },
    {
      type: `text`, title: `4. Imperfekt der Contracta`,
      html: `<p>Das Imperfekt fügt das <b>Augment</b> hinzu und kontrahiert die Vokale: <i>ἐτίμαον ➜ ἐτίμων</i>, <i>ἐφίλεον ➜ ἐφίλουν</i>, <i>ἐδήλοον ➜ ἐδήλουν</i>.</p>
<h4>Aktiv</h4>
<table>
<tr><th>Person</th><th>τιμάω</th><th>φιλέω</th><th>δηλόω</th></tr>
<tr><td>1. Sg.</td><td>ἐτίμων</td><td>ἐφίλουν</td><td>ἐδήλουν</td></tr>
<tr><td>2. Sg.</td><td>ἐτίμας</td><td>ἐφίλεις</td><td>ἐδήλους</td></tr>
<tr><td>3. Sg.</td><td>ἐτίμα</td><td>ἐφίλει</td><td>ἐδήλου</td></tr>
<tr><td>1. Pl.</td><td>ἐτιμῶμεν</td><td>ἐφιλοῦμεν</td><td>ἐδηλοῦμεν</td></tr>
<tr><td>2. Pl.</td><td>ἐτιμᾶτε</td><td>ἐφιλεῖτε</td><td>ἐδηλοῦτε</td></tr>
<tr><td>3. Pl.</td><td>ἐτίμων</td><td>ἐφίλουν</td><td>ἐδήλουν</td></tr>
</table>
<h4>Medio-Passiv</h4>
<table>
<tr><th>Person</th><th>τιμάω</th><th>φιλέω</th><th>δηλόω</th></tr>
<tr><td>1. Sg.</td><td>ἐτιμώμην</td><td>ἐφιλούμην</td><td>ἐδηλούμην</td></tr>
<tr><td>2. Sg.</td><td>ἐτιμῶ</td><td>ἐφιλοῦ</td><td>ἐδηλοῦ</td></tr>
<tr><td>3. Sg.</td><td>ἐτιμᾶτο</td><td>ἐφιλεῖτο</td><td>ἐδηλοῦτο</td></tr>
<tr><td>1. Pl.</td><td>ἐτιμώμεθα</td><td>ἐφιλούμεθα</td><td>ἐδηλούμεθα</td></tr>
<tr><td>2. Pl.</td><td>ἐτιμᾶσθε</td><td>ἐφιλεῖσθε</td><td>ἐδηλοῦσθε</td></tr>
<tr><td>3. Pl.</td><td>ἐτιμῶντο</td><td>ἐφιλοῦντο</td><td>ἐδηλοῦντο</td></tr>
</table>
<p>Ein interessanter Fall ist <b>ποιέω</b> („ich mache“): Imperfekt <i>ἐποίουν, ἐποίεις, ἐποίει, ἐποιοῦμεν, ἐποιεῖτε, ἐποίουν</i>, mit einem Augment ε- vor dem Stamm <i>ποιε-</i>.</p>
<p><b>Verben auf -άω mit η</b>: Wenige Verben (<i>ζάω</i> „ich lebe“, <i>πεινάω</i> „ich habe Hunger“, <i>διψάω</i> „ich habe Durst“) kontrahieren <i>α + ε</i> zu <b>η</b> statt zu α: <i>ζῶ, ζῇς, ζῇ, ζῶμεν, ζῆτε, ζῶσι(ν)</i>; Infinitiv <i>ζῆν</i>.</p>`
    },
    {
      type: `example`, title: `Sätze mit Contracta`,
      html: `<p><b>1. Οἱ πολῖται τὸν στρατηγὸν τιμῶσιν.</b> ➜ „Die Bürger ehren den Feldherrn.“ (τιμῶσιν: 3. Pl. von τιμάω)</p>
<p><b>2. Ὁ ποιητὴς τὴν χώραν φιλεῖ.</b> ➜ „Der Dichter liebt das Land.“</p>
<p><b>3. Οἱ στρατιῶται τοὺς πολεμίους νικῶσιν.</b> ➜ „Die Soldaten besiegen die Feinde.“</p>
<p><b>4. Ὁ δεσπότης τοὺς δούλους ἐλευθεροῖ.</b> ➜ „Der Herr befreit die Sklaven.“ (ἐλευθερόω ➜ ἐλευθερόει ➜ ἐλευθεροῖ)</p>
<p><b>5. Οἱ μαθηταὶ τὸν διδάσκαλον ἐρωτῶσιν.</b> ➜ „Die Schüler befragen den Lehrer.“</p>
<p><b>6. Οἱ ναῦται τὴν θάλατταν ἐφοβοῦντο.</b> ➜ „Die Seeleute fürchteten das Meer.“ (φοβέομαι ➜ Imperfekt ἐφοβοῦντο, 3. Pl.)</p>
<p><b>7. Οἱ πολῖται τὸν ποιητὴν ἐτίμων.</b> ➜ „Die Bürger ehrten den Dichter.“</p>
<p><b>8. Ἡ νῆσος ὑπὸ τῶν Περσῶν ἐδουλοῦτο.</b> ➜ „Die Insel wurde von den Persern versklavt.“ (Passiv, Imperfekt)</p>`
    },
    {
      type: `example`, title: `Wie man eine kontrahierte Form analysiert`,
      html: `<p>Analysiere <b>ἐφιλοῦντο</b>.</p>
<ol>
<li>Augment ε- ➜ historisches Tempus (Imperfekt).</li>
<li>Stamm <i>φιλ-</i>; die Endung <i>-οῦντο</i> enthält einen Zirkumflex: Rekonstruktion <i>φιλέ-οντο</i> ➜ ε + ο = ου.</li>
<li>Endung <i>-οντο</i>: 3. Person Plural Medio-Passiv der historischen Tempora.</li>
<li>Verb: <i>φιλέω</i> ➜ „sie wurden geliebt“ (Passiv) oder „sie liebten sich“ (Medium).</li>
</ol>
<p>Der Zirkumflex auf dem Endvokal ist der <b>Hinweis</b> auf die Kontraktion: Wenn du ihn siehst, zerlege die Silbe und probiere die drei Möglichkeiten durch (<i>-άω, -έω, -όω</i>).</p>`
    },
    {
      type: `widget`, title: `Spiel: Formen kontrahieren`,
      widget: `match`,
      options: {
        pairs: [
          [`τιμάομεν`, `τιμῶμεν`],
          [`φιλέετε`, `φιλεῖτε`],
          [`δηλόουσι`, `δηλοῦσι`],
          [`ἐτίμαον`, `ἐτίμων`],
          [`ἐφίλεες`, `ἐφίλεις`],
          [`τιμάῃ`, `τιμᾷ`]
        ]
      },
      caption: `Ordne jede unkontrahierte Form der kontrahierten attischen Form zu.`
    },
    {
      type: `curiosity`, title: `Wusstest du, dass … das Griechische kein „-ieren“ wie das Deutsche hat?`,
      html: `<p>Im Deutschen werden viele Verben mit dem Suffix <i>-ieren</i> gebildet (<i>studieren, probieren</i>), das aus dem Lateinischen stammt. Im Griechischen haben die Verben auf <b>-άω</b> einen ähnlichen Ursprung als Ableitungen: das Suffix <i>-ā-</i>, das Verben aus Nomen bildet: <i>τιμή</i> (Ehre) ➜ <i>τιμάω</i> „ich ehre“. Tatsächlich sind viele Contracta <b>denominal</b>: <i>νίκη</i> ➜ <i>νικάω</i>, <i>δῆλος</i> ➜ <i>δηλόω</i>, <i>φίλος</i> ➜ <i>φιλέω</i>. Das ist eine sehr produktive Art, Verben zu bilden.</p>`
    },
    {
      type: `curiosity`, title: `Wusstest du, dass … die Kontraktion ein Merkmal des Attischen ist?`,
      html: `<p>In den anderen Dialekten bleiben die Formen oft <b>unkontrahiert</b>: Bei Homer findest du <i>φιλέω, δηλόουσι, ἐτίμαον</i> und andere „offene“ Formen, und das Ionische Herodots kontrahiert nur teilweise. Das Attische, die Sprache Athens und der klassischen Literatur, hat systematisch kontrahiert. Was du in der Schule lernst, ist also das Griechisch Athens zur Zeit des Perikles.</p>`
    },
    {
      type: `alternatives`, title: `Weitere Wege, fehlerfrei zu kontrahieren`,
      intro: `24 Kontraktionen auswendig zu behalten ist schwer: So vereinfachst du sie.`,
      tabs: [
        {
          label: `🔑 Die drei Schlüssel`,
          html: `<ul>
<li><b>Schlüssel 1: „ο und ω gewinnen“</b>. Mit ο, ου, ω ist das Ergebnis <b>ω</b> oder <b>ου</b> (außer <i>ο + ει = οι</i>): <i>τιμῶμεν, τιμῶσι, φιλοῦμεν, δηλοῦσι</i>.</li>
<li><b>Schlüssel 2: „gleich = Diphthong“</b>: <i>ε + ε = ει</i> (<i>φιλεῖτε</i>), <i>ο + ο = ου</i> (<i>ἐδηλοῦμεν</i>).</li>
<li><b>Schlüssel 3: „das α frisst das ε“</b>: <i>α + ε = α</i> (<i>τιμᾶτε</i>), <i>α + ει = ᾳ</i> (<i>τιμᾷ</i>).</li>
</ul>`
        },
        {
          label: `🧮 Erkennen in drei Schritten`,
          html: `<ol>
<li>Bei einer Form mit Zirkumflex auf der Endung <b>vermute</b> eine Kontraktion.</li>
<li>Versuche, sie zu <b>zerlegen</b>: <i>-ῶμεν</i> kann von <i>-άομεν</i> oder <i>-όομεν</i> kommen; <i>-οῦμεν</i> von <i>-έομεν</i> oder <i>-όομεν</i>; <i>-εῖτε</i> von <i>-έετε</i>.</li>
<li>Prüfe im <b>Wörterbuch</b>, welches der drei Verben existiert: <i>τιμάω</i> (nicht <i>τιμέω</i>), <i>φιλέω</i> (nicht <i>φιλάω</i>), <i>δηλόω</i>.</li>
</ol>`
        },
        {
          label: `🇮🇹 Vergleich mit dem Lateinischen`,
          html: `<p>Das Lateinische hat eine ähnliche Kontraktion bei den Verben auf <i>-āre</i>: <i>amāvērunt ➜ amārunt</i>, <i>amavisti ➜ amasti</i>. Im Griechischen aber ist die Kontraktion ein allgemeines System, und das Ergebnis ist immer ein langer Vokal oder ein Diphthong. Die Länge der Vokale hat der griechischen Dichtung ihren Rhythmus gegeben.</p>`
        }
      ]
    },
    {
      type: `conceptMap`, title: `Mindmap: die Contracta`,
      nodes: [
        { id: `cont`, label: `Contracta`, x: 50, y: 8, color: `#a855f7`, html: `Verben mit Vokalstamm: -άω, -έω, -όω.`, why: `Der Endvokal des Stamms trifft auf den Themavokal und verschmilzt mit ihm: Das ist eine normale lautliche Erscheinung des Ionisch-Attischen, die <i>Kontraktion</i> benachbarter Vokale.` },
        { id: `tab`, label: `Kontraktionstabelle`, x: 20, y: 40, color: `#16a34a`, html: `α, ε, ο + ε, ει, ο, ου, ω, η, ῃ.`, why: `Die Regeln sind systematisch: Zwei gleiche kurze Vokale werden zu einem Diphthong; mit ο und ω überwiegt die velare Klangfarbe (ou, ō); mit α die offene (ā).` },
        { id: `acc`, label: `Akzent`, x: 80, y: 40, color: `#f59e0b`, html: `Zirkumflex, wenn der Akzent auf dem ersten Vokal stand; Akut, wenn auf dem zweiten.`, why: `Der Zirkumflex ist eine „steigend-fallende Melodie“ auf einem langen Vokal: Er entsteht gerade aus der Kontraktion zweier Silben zu einer (die erste mit Akut, die zweite ohne Akzent).` },
        { id: `imp`, label: `Imperfekt`, x: 50, y: 65, color: `#3b82f6`, html: `Augment + Kontraktion: ἐτίμων, ἐφίλουν, ἐδήλουν.`, why: `Das Augment ε- verbindet sich mit dem Stamm, und der Rest wird kontrahiert. Das Ergebnis ist eine verkürzte Form mit rezessivem Akzent.` },
        { id: `ita`, label: `Deutsch`, x: 85, y: 88, color: `#ef4444`, html: `Philanthrop, Poet, Demokratie.`, why: `Viele griechische Contracta stehen hinter deutschen Wörtern: <i>φιλέω</i> ➜ <i>Philo-</i> (Philosoph, Philanthrop); <i>ποιέω</i> ➜ <i>Poet</i>, <i>Poesie</i>; <i>καλέω</i> ➜ <i>Ekklesia</i> („einberufene Versammlung“); <i>μισέω</i> ➜ <i>Misanthrop</i>.` }
      ],
      edges: [
        [`cont`, `tab`, `werden gebildet mit`], [`cont`, `acc`, `hat Regel`], [`cont`, `imp`, `im Imperfekt`], [`cont`, `ita`, `Erbe`]
      ]
    },
    {
      type: `quiz`, title: `Mini-Quiz: kontrahiertes Imperfekt`,
      questions: [
        { type: `text`, q: `Schreibe die 3. Singular des Imperfekts Aktiv von φιλέω.`, answer: [`ἐφίλει`, `εφιλει`], explain: `ἐφίλεε ➜ ἐφίλει (ε + ε = ει).` },
        { type: `mc`, q: `ἐτίμων ist das Imperfekt von …`, options: [`τιμάω`, `τιμέω`, `τιμόω`], answer: 0, explain: `ἐτίμαον ➜ ἐτίμων (α + ο = ω): Verb auf -άω.` },
        { type: `mc`, q: `Wie wird ἐδηλό-ετο kontrahiert?`, options: [`ἐδηλοῦτο`, `ἐδηλεῖτο`, `ἐδηλῶτο`], answer: 0, explain: `ο + ε = ου.` },
        { type: `tf`, q: `Das Verb ζάω kontrahiert α + ε zu η (ζῇς).`, answer: true, explain: `Wie πεινάω und διψάω: ζῶ, ζῇς, ζῇ.` }
      ]
    }
  ],
  glossary: [
    { t: `Contractum`, d: `Verb mit Vokalstamm (α, ε, ο), der mit dem Themavokal verschmilzt.` },
    { t: `Kontraktion`, d: `Verschmelzung zweier benachbarter Vokale zu einem langen Vokal oder einem Diphthong.` },
    { t: `Denominales Verb`, d: `Von einem Nomen abgeleitetes Verb: τιμάω von τιμή.` },
    { t: `Zirkumflex`, d: `Akzent, der die Kontraktion einer akzentuierten Silbe mit der folgenden anzeigt.` },
    { t: `Theoretische Form`, d: `Unkontrahierte Form (τιμάω), die man rekonstruiert, im Attischen aber nicht schreibt.` },
    { t: `Verben auf -άω mit η`, d: `ζάω, πεινάω, διψάω: Die Kontraktion α + ε ergibt η.` },
    { t: `Stamm`, d: `Teil des Verbs, der bei der Flexion gleich bleibt.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Wie wird φιλέ-ει kontrahiert?`, options: [`φιλεῖ`, `φιλοῖ`, `φιλῇ`], answer: 0, explain: `ε + ει = ει: φιλεῖ.` },
      { type: `text`, q: `Schreibe die 1. Person Plural Aktiv des Präsens von τιμάω.`, answer: [`τιμῶμεν`, `τιμωμεν`], explain: `τιμά-ομεν ➜ τιμῶμεν.` },
      { type: `mc`, q: `δηλοῦσι ist die 3. Plural Präsens von …`, options: [`δηλόω`, `δηλάω`, `δηλέω`], answer: 0, explain: `δηλό-ουσι ➜ δηλοῦσι.` },
      { type: `mc`, q: `Welche Form steht im Imperfekt?`, options: [`ἐφίλουν`, `φιλοῦσι`, `φιλεῖν`], answer: 0, explain: `ἐφίλουν hat das Augment ε-.` },
      { type: `tf`, q: `Der Infinitiv Präsens Aktiv von τιμάω ist τιμᾶν.`, answer: true, explain: `τιμά-ειν ➜ τιμᾶν.` },
      { type: `mc`, q: `Wie übersetzt man „Οἱ πολῖται τὸν ποιητὴν ἐτίμων“?`, options: [`Die Bürger ehrten den Dichter`, `Die Bürger ehren den Dichter`, `Der Dichter ehrte die Bürger`], answer: 0, explain: `ἐτίμων ist das Imperfekt (3. Pl.) von τιμάω.` },
      { type: `mc`, q: `Welchen Akzent trägt die kontrahierte Silbe in τιμῶ?`, options: [`Zirkumflex`, `Akut`, `Gravis`], answer: 0, explain: `Der Akzent stand auf dem ersten Vokal: Die Kontraktion ergibt den Zirkumflex.` },
      { type: `mc`, q: `ε + ο ergibt …`, options: [`ου`, `ω`, `οι`], answer: 0, explain: `φιλέ-ομεν ➜ φιλοῦμεν.` },
      { type: `order`, q: `Bringe die Präsensformen 1. Sg., 3. Sg., 3. Pl. von φιλέω in die richtige Reihenfolge.`, items: [`φιλῶ`, `φιλεῖ`, `φιλοῦσι(ν)`], explain: `1. Sg. φιλῶ; 3. Sg. φιλεῖ; 3. Pl. φιλοῦσι(ν).` },
      { type: `mc`, q: `ἐδηλοῦντο ist …`, options: [`Imperfekt Medio-Passiv 3. Plural von δηλόω`, `Präsens Aktiv 3. Plural`, `Aorist`], answer: 0, explain: `Augment + Kontraktion ο+ο = ου + -ντο.` }
    ]
  }
});

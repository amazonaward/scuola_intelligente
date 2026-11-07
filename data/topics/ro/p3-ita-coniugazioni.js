TOPIC('ro', {
  id: "p3-ita-coniugazioni",
  title: "Cele trei conjugări (le tre coniugazioni)",
  intro: "Cantare, leggere, dormire: toate verbele italiene se termină în <b>-are</b>, <b>-ere</b> sau <b>-ire</b>. Acestea sunt cele <b>trei conjugări</b>, trei mari «familii» de verbe 👨‍👩‍👧. Învățăm să le recunoaștem și să conjugăm verbele la <b>trecut</b>, la <b>prezent</b> și la <b>viitor</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Infinitivul: numele verbului",
      html: `<p>Când cauți un verb în dicționar, îl găsești la <b>infinitiv</b> (<i>infinito</i>): <i>cantare, leggere, dormire</i>. Infinitivul este ca «numele de botez» al verbului: nu spune <b>cine</b> face acțiunea și nici <b>când</b>.</p>
<p>Fiecare verb la infinitiv are două părți:</p>
<ul>
<li><b>rădăcina</b> (<i>radice</i>), care poartă sensul și de obicei nu se schimbă: <b>cant</b>-are, <b>legg</b>-ere, <b>dorm</b>-ire;</li>
<li><b>desinența</b> (<i>desinenza</i>), partea finală care se schimbă: cant-<b>are</b>, cant-<b>o</b>, cant-<b>erò</b>.</li>
</ul>
<p>Uitându-ne tocmai la desinența infinitivului înțelegem cărei <b>conjugări</b> îi aparține verbul.</p>`
    },
    {
      type: "svg",
      title: "Cele trei familii de verbe",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="30" width="175" height="240" rx="18" fill="#fee2e2" stroke="#dc2626" stroke-width="4"/>
<rect x="212" y="30" width="175" height="240" rx="18" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
<rect x="405" y="30" width="175" height="240" rx="18" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>
<text x="107" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#991b1b">conjugarea 1</text>
<text x="300" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#166534">conjugarea 2</text>
<text x="492" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#1e40af">conjugarea 3</text>
<text x="107" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#dc2626">-ARE</text>
<text x="300" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#16a34a">-ERE</text>
<text x="492" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#2563eb">-IRE</text>
<g font-size="20" text-anchor="middle" fill="#1f2937">
<text x="107" y="160">cant-are 🎤</text><text x="107" y="192">gioc-are ⚽</text><text x="107" y="224">salt-are 🐸</text>
<text x="300" y="160">legg-ere 📖</text><text x="300" y="192">cred-ere 🤔</text><text x="300" y="224">corr-ere 🏃</text>
<text x="492" y="160">dorm-ire 😴</text><text x="492" y="192">part-ire 🚂</text><text x="492" y="224">fin-ire 🏁</text>
</g>
<text x="107" y="258" font-size="15" text-anchor="middle" fill="#7f1d1d">cea mai numeroasă</text>
<text x="300" y="258" font-size="15" text-anchor="middle" fill="#14532d">multe neregulate</text>
<text x="492" y="258" font-size="15" text-anchor="middle" fill="#1e3a8a">unele în -isc-</text>
</svg>`,
      caption: "Rădăcină + desinență: desinența infinitivului ne spune familia verbului."
    },
    {
      type: "widget",
      title: "Joc: în ce familie?",
      widget: "classify",
      options: {
        groups: ["-ARE (1)", "-ERE (2)", "-IRE (3)"],
        items: [
          ["🎨 disegnare", 0], ["🏊 nuotare", 0], ["🍝 mangiare", 0], ["👀 guardare", 0],
          ["✍️ scrivere", 1], ["👁️ vedere", 1], ["🏃 correre", 1], ["🙂 sorridere", 1],
          ["🎧 sentire", 2], ["🚪 aprire", 2], ["🧹 pulire", 2], ["🥣 servire", 2]
        ]
      },
      caption: "Uită-te doar la sfârșitul infinitivului și pune fiecare verb în familia lui."
    },
    {
      type: "text",
      title: "Prezentul: desinențele se schimbă după persoană",
      html: `<p>Verbul își schimbă desinența după <b>cine</b> face acțiunea (<b>persoana</b>):</p>
<table>
<tr><th>Persoana</th><th>CANT-ARE</th><th>CRED-ERE</th><th>DORM-IRE</th></tr>
<tr><td>io (eu)</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>tu</td><td>cant<b>i</b></td><td>cred<b>i</b></td><td>dorm<b>i</b></td></tr>
<tr><td>lui/lei (el/ea)</td><td>cant<b>a</b></td><td>cred<b>e</b></td><td>dorm<b>e</b></td></tr>
<tr><td>noi</td><td>cant<b>iamo</b></td><td>cred<b>iamo</b></td><td>dorm<b>iamo</b></td></tr>
<tr><td>voi</td><td>cant<b>ate</b></td><td>cred<b>ete</b></td><td>dorm<b>ite</b></td></tr>
<tr><td>loro (ei/ele)</td><td>cant<b>ano</b></td><td>cred<b>ono</b></td><td>dorm<b>ono</b></td></tr>
</table>
<p>Ai observat? Desinențele pentru <b>io</b> (-o), <b>tu</b> (-i) și <b>noi</b> (-iamo) sunt la fel pentru toate cele trei familii! La <b>voi</b> se vede vocala familiei: cant<b>a</b>te, cred<b>e</b>te, dorm<b>i</b>te.</p>
<p><b>Atenție:</b> multe verbe în -ire adaugă <b>-isc-</b> la unele persoane: fin<b>isc</b>o, fin<b>isc</b>i, fin<b>isc</b>e, finiamo, finite, fin<b>isc</b>ono. Tot așa fac și capire, pulire, colpire, preferire.</p>`
    },
    {
      type: "text",
      title: "Trecutul și viitorul",
      html: `<p>Verbul se schimbă și ca să spună <b>când</b> are loc acțiunea. Iată trei timpuri ale modului indicativ, la persoana «io»:</p>
<table>
<tr><th>Timpul</th><th>CANTARE</th><th>CREDERE</th><th>DORMIRE</th></tr>
<tr><td>⬅️ <b>Passato prossimo</b> (acțiune terminată)</td><td>ho cant<b>ato</b></td><td>ho cred<b>uto</b></td><td>ho dorm<b>ito</b></td></tr>
<tr><td>⬅️ <b>Imperfetto</b> (obicei, descriere)</td><td>cant<b>avo</b></td><td>cred<b>evo</b></td><td>dorm<b>ivo</b></td></tr>
<tr><td>⏺️ <b>Presente</b></td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>➡️ <b>Futuro semplice</b></td><td>cant<b>erò</b></td><td>cred<b>erò</b></td><td>dorm<b>irò</b></td></tr>
</table>
<ul>
<li><b>Passato prossimo</b> este un timp <b>compus</b>: auxiliar (avere sau essere) + <b>participiu trecut</b> în -ato, -uto, -ito. Ex.: «sono partito», «ho cantato».</li>
<li>La <b>viitor</b>, prima conjugare schimbă <b>a</b> în <b>e</b>: cant<b>a</b>re → cant<b>e</b>rò (nu «cantarò»!).</li>
<li>La viitor accentul cade pe ultima silabă: cante<b>rò</b>, cante<b>rà</b>: nu uita!</li>
</ul>`
    },
    {
      type: "svg",
      title: "Săgeata timpului",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<line x1="40" y1="140" x2="540" y2="140" stroke="#78350f" stroke-width="6"/>
<polygon points="540,125 575,140 540,155" fill="#78350f"/>
<circle cx="120" cy="140" r="16" fill="#a855f7"/>
<circle cx="300" cy="140" r="20" fill="#16a34a"/>
<circle cx="480" cy="140" r="16" fill="#2563eb"/>
<text x="120" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#7e22ce">TRECUT</text>
<text x="300" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#15803d">PREZENT</text>
<text x="480" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#1d4ed8">VIITOR</text>
<text x="120" y="95" font-size="18" text-anchor="middle" fill="#1f2937">ieri</text>
<text x="300" y="95" font-size="18" text-anchor="middle" fill="#1f2937">acum</text>
<text x="480" y="95" font-size="18" text-anchor="middle" fill="#1f2937">mâine</text>
<text x="120" y="190" font-size="20" text-anchor="middle" fill="#1f2937">ho giocato</text>
<text x="120" y="218" font-size="20" text-anchor="middle" fill="#1f2937">giocavo</text>
<text x="300" y="190" font-size="20" text-anchor="middle" fill="#1f2937">gioco</text>
<text x="480" y="190" font-size="20" text-anchor="middle" fill="#1f2937">giocherò</text>
<text x="480" y="225" font-size="15" text-anchor="middle" fill="#92400e">(c + h pentru sunetul dur)</text>
</svg>`,
      caption: "Același verb, giocare, își schimbă forma după momentul în care are loc acțiunea."
    },
    {
      type: "quiz",
      title: "Mini-test: familii și persoane",
      questions: [
        { type: "mc", q: "«Scrivere» aparține…", options: ["conjugării 1", "conjugării 2", "conjugării 3"], answer: 1, explain: "Se termină în -ere: conjugarea a doua." },
        { type: "text", q: "Conjugă «parlare» la prezent cu «noi».", answer: ["parliamo", "noi parliamo"], explain: "Noi parl-iamo." },
        { type: "mc", q: "Care este forma corectă a viitorului lui «cantare» (io)?", options: ["cantarò", "canterò", "cantirò"], answer: 1, explain: "La conjugarea 1, -a- devine -e-: canterò." }
      ]
    },
    {
      type: "example",
      title: "Exemplu practic: jurnalul lui Matteo",
      html: `<p><i>«Ieri <b>ho giocato</b> a calcio e <b>ho vinto</b>. Quando ero piccolo <b>dormivo</b> sempre dopo pranzo. Oggi <b>leggo</b> un fumetto. Domani <b>partirò</b> per la montagna e <b>camminerò</b> tanto.»</i></p>
<table>
<tr><th>Verbul</th><th>Infinitivul</th><th>Conjugarea</th><th>Timpul</th></tr>
<tr><td>ho giocato</td><td>giocare</td><td>1</td><td>passato prossimo</td></tr>
<tr><td>ho vinto</td><td>vincere</td><td>2</td><td>passato prossimo</td></tr>
<tr><td>dormivo</td><td>dormire</td><td>3</td><td>imperfetto</td></tr>
<tr><td>leggo</td><td>leggere</td><td>2</td><td>presente</td></tr>
<tr><td>partirò</td><td>partire</td><td>3</td><td>futuro</td></tr>
<tr><td>camminerò</td><td>camminare</td><td>1</td><td>futuro</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Exemplu practic: găsim infinitivul",
      html: `<p>Ca să afli conjugarea unui verb conjugat, trebuie mai întâi să te <b>întorci la infinitiv</b>. Întreabă-te: «Cum se numește a face această acțiune?»</p>
<ul>
<li>«Noi <b>ridiamo</b>» → ce facem? <b>ridere</b> → conjugarea 2.</li>
<li>«Voi <b>aprite</b>» → <b>aprire</b> → conjugarea 3.</li>
<li>«Loro <b>ballavano</b>» → <b>ballare</b> → conjugarea 1.</li>
<li>«Tu <b>capirai</b>» → <b>capire</b> → conjugarea 3.</li>
</ul>
<p>Truc: încearcă să pui în față «<b>Devo</b> …» (trebuie să): «Devo ridere», «Devo aprire», «Devo ballare». După «devo» verbul merge mereu la infinitiv!</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Verbele noi merg toate în -are",
      html: `<p>Când se naște un verb nou, în italiană se termină aproape întotdeauna în <b>-are</b>: <i>cliccare, chattare, postare, zoomare, scannerizzare, googlare</i>. Prima conjugare este cea mai mare familie (conține majoritatea verbelor italiene) și este și cea mai regulată: de aceea îi primește pe nou-veniți! 📱</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? În latină familiile erau patru",
      html: `<p><b>Latina</b>, limba din care provine italiana, avea <b>patru</b> conjugări: <i>amāre, timēre, legĕre, audīre</i>. Două dintre ele (cea a lui <i>timēre</i>, cu accentul pe «e», și cea a lui <i>legĕre</i>, cu accentul mai în spate) s-au unit în a noastră conjugare a 2-a. De aceea spunem te<b>mé</b>re, dar <b>lèg</b>gere: două accente diferite în aceeași familie!</p>`
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>Conjugarea 1: <b>-are</b> · a 2-a: <b>-ere</b> · a 3-a: <b>-ire</b>.</li>
<li>Verb = <b>rădăcină</b> (sens) + <b>desinență</b> (persoană și timp).</li>
<li>Persoane: io, tu, lui/lei (singular) · noi, voi, loro (plural).</li>
<li>Passato prossimo = auxiliar + participiu (-ato, -uto, -ito).</li>
<li>Viitor: cant-<b>erò</b> (-a- devine -e-), cred-<b>erò</b>, dorm-<b>irò</b>.</li>
<li>Essere și avere au o conjugare proprie: sunt neregulate.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege conjugările",
      intro: "Tabelele nu-ți intră în cap? Încearcă cu o mașinărie, cu o altă țară, cu cărți sau cu un joc de potrivire.",
      tabs: [
        {
          label: "⚙️ Mașina verbelor",
          html: `<p>Imaginează-ți o mașinărie cu două rotițe. Prima rotiță alege <b>cine</b> (io, tu, lui…), a doua alege <b>când</b> (ieri, azi, mâine). Pui înăuntru rădăcina, iar mașina lipește desinența potrivită!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f1f5f9"/>
<rect x="30" y="100" width="120" height="60" rx="10" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="90" y="138" font-size="24" font-weight="bold" text-anchor="middle" fill="#713f12">CANT-</text>
<path d="M155 130 L200 130" stroke="#334155" stroke-width="5"/>
<polygon points="200,120 218,130 200,140" fill="#334155"/>
<rect x="220" y="50" width="200" height="160" rx="20" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<circle cx="280" cy="110" r="38" fill="#f472b6" stroke="#9d174d" stroke-width="4"/>
<circle cx="360" cy="150" r="38" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<text x="280" y="117" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">CINE?</text>
<text x="360" y="157" font-size="18" font-weight="bold" text-anchor="middle" fill="#ffffff">CÂND?</text>
<text x="280" y="175" font-size="16" text-anchor="middle" fill="#1f2937">noi</text>
<text x="360" y="85" font-size="16" text-anchor="middle" fill="#1f2937">mâine</text>
<path d="M425 130 L470 130" stroke="#334155" stroke-width="5"/>
<polygon points="470,120 488,130 470,140" fill="#334155"/>
<rect x="490" y="100" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="540" y="128" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">cant-</text>
<text x="540" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">eremo</text>
</svg>`
        },
        {
          label: "🇬🇧 În engleză e mai ușor?",
          html: `<p>În <b>engleză</b> verbele se schimbă foarte puțin: de aceea englezii trebuie <b>mereu</b> să spună subiectul.</p>
<table>
<tr><th>Italiană</th><th>Engleză</th></tr>
<tr><td>canto, canti, canta</td><td>I sing, you sing, he sing<b>s</b></td></tr>
<tr><td>ho cantato</td><td>I sang (trecut)</td></tr>
<tr><td>canterò</td><td>I <b>will</b> sing (viitor cu «will»)</td></tr>
<tr><td>gioco → ho giocato</td><td>I play → I play<b>ed</b></td></tr>
</table>
<p>În italiană, în schimb, desinența spune deja cine face acțiunea: «<b>Cantiamo</b>!» înseamnă neapărat «noi cântăm». Putem chiar să nu spunem subiectul! (Ca și în română: «cântăm».)</p>`
        },
        {
          label: "🎵 Trucul vocalei",
          html: `<p>Fiecare familie are <b>vocala ei din inimă</b>, cea care stă înainte de -re:</p>
<ul>
<li>cant-<b>A</b>-re → cant<b>a</b>te, cant<b>a</b>vo, cant<b>a</b>to</li>
<li>cred-<b>E</b>-re → cred<b>e</b>te, cred<b>e</b>vo (dar credu-to)</li>
<li>dorm-<b>I</b>-re → dorm<b>i</b>te, dorm<b>i</b>vo, dorm<b>i</b>to</li>
</ul>
<p>La persoana <b>voi</b> și la <b>imperfect</b> vocala din inimă se vede mereu: dacă ți-o amintești, greșești mult mai puțin!</p>`
        },
        {
          label: "🃏 Cărțile verbelor",
          html: `<p>În față este un verb conjugat. Încearcă să spui infinitivul, conjugarea și timpul, apoi întoarce cartea.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "nuoteremo", back: "nuotare · 1 · viitor · noi" },
              { front: "hai letto", back: "leggere · 2 · passato prossimo · tu" },
              { front: "sentivano", back: "sentire · 3 · imperfect · loro" },
              { front: "corre", back: "correre · 2 · prezent · lui/lei" },
              { front: "finisco", back: "finire · 3 (cu -isc-) · prezent · io" },
              { front: "giocavate", back: "giocare · 1 · imperfect · voi" }
            ]
          }
        },
        {
          label: "🔗 Potrivește persoana și desinența",
          html: `<p>Verbul «dormire» la prezent: leagă fiecare persoană de forma ei.</p>`,
          widget: "match",
          options: { pairs: [["io", "dormo"], ["tu", "dormi"], ["lui", "dorme"], ["noi", "dormiamo"], ["voi", "dormite"], ["loro", "dormono"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta conjugărilor: atinge un nod și descoperă de ce",
      nodes: [
        { id: "verbo", label: "Verb", x: 50, y: 6, color: "#2563eb", html: "Cuvânt care arată o acțiune sau o stare.", why: "Fără verb nu există propoziție: este «motorul» care spune ce se întâmplă. Încă gramaticienii greci îl numeau <i>rhêma</i>, «ceea ce se spune» despre subiect." },
        { id: "infinito", label: "Infinitiv", x: 50, y: 26, color: "#0ea5e9", html: "Forma «de bază» a verbului: cantare, leggere, dormire.", why: "Se numește infinitiv pentru că este «nedefinit»: nu spune cine face acțiunea și nici când. De aceea dicționarele trec verbele la infinitiv." },
        { id: "are", label: "1: -are", x: 18, y: 46, color: "#dc2626", html: "Cea mai mare și mai regulată familie: amare, giocare.", why: "Vine din conjugarea latină 1 (<i>amāre</i>), deja foarte regulată: de aceea verbele noi (chattare, cliccare) intră aici." },
        { id: "ere", label: "2: -ere", x: 50, y: 46, color: "#16a34a", html: "Credere, leggere, vedere: multe verbe neregulate.", why: "S-a născut din unirea a două conjugări latine (<i>timēre</i> și <i>legĕre</i>). De aceea conține verbe cu accente diferite și multe nereguli (letto, scritto, visto)." },
        { id: "ire", label: "3: -ire", x: 82, y: 46, color: "#2563eb", html: "Dormire, partire, finire.", why: "Vine din conjugarea latină 4 (<i>audīre</i>). Adaosul <b>-isc-</b> (finisco) provine dintr-un sufix latin care arăta o acțiune care începe sau se dezvoltă (<i>-esco</i>)." },
        { id: "desinenza", label: "Rădăcină + desinență", x: 22, y: 70, color: "#f59e0b", html: "Cant- (sens) + -iamo (cine și când).", why: "Italiana, ca și latina, este o limbă «flexionară»: pune informațiile în interiorul cuvântului, schimbându-i sfârșitul. Așa un singur cuvânt («cantiamo») spune acțiunea, persoana, numărul și timpul." },
        { id: "persone", label: "Cele șase persoane", x: 50, y: 92, color: "#ec4899", html: "Io, tu, lui/lei, noi, voi, loro.", why: "Există trei persoane (cine vorbește, cine ascultă, despre cine se vorbește), fiecare la singular și la plural: 3 × 2 = 6 forme." },
        { id: "tempi", label: "Trecut, prezent, viitor", x: 78, y: 70, color: "#a855f7", html: "Ho cantato / cantavo · canto · canterò.", why: "Viitorul italian se naște din latina vorbită: «cantare habeo» (am de cântat) → «canterò». Într-adevăr, desinențele viitorului (-ò, -ai, -à, -emo, -ete, -anno) seamănă cu verbul avere!" },
        { id: "irregolari", label: "Verbe neregulate", x: 85, y: 90, color: "#64748b", html: "Essere, avere, andare, fare: nu urmează regulile.", why: "Sunt cele mai folosite verbe: de-a lungul secolelor, repetându-se mereu, s-au «tocit» și s-au transformat, ca o monedă care trece din mână în mână." }
      ],
      edges: [
        ["verbo", "infinito", "se caută la"],
        ["infinito", "are", "se termină în"],
        ["infinito", "ere", "se termină în"],
        ["infinito", "ire", "se termină în"],
        ["are", "desinenza", "se conjugă schimbând"],
        ["desinenza", "persone", "arată"],
        ["ire", "tempi", "și timpul"],
        ["tempi", "irregolari", "excepții:"],
        ["desinenza", "tempi", "arată"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: timpurile",
      questions: [
        { type: "mc", q: "«Partivamo» este…", options: ["prezent", "imperfect", "viitor"], answer: 1, explain: "Desinența -ivamo arată imperfectul (conjugarea 3)." },
        { type: "mc", q: "Participiul trecut al lui «dormire» este…", options: ["dormato", "dormuto", "dormito"], answer: 2, explain: "Conjugarea 3: -ito → dormito." },
        { type: "tf", q: "«Ho mangiato» este un timp compus.", answer: true, explain: "Este format din două cuvinte: auxiliarul «ho» și participiul «mangiato»." }
      ]
    }
  ],
  glossary: [
    { t: "Conjugare", d: "Familie de verbe cu aceeași desinență la infinitiv (-are, -ere, -ire); și ansamblul tuturor formelor unui verb." },
    { t: "Infinitiv", d: "Forma de bază a verbului, cea din dicționar (cantare)." },
    { t: "Rădăcină", d: "Partea verbului care poartă sensul (cant-)." },
    { t: "Desinență", d: "Partea finală a verbului care se schimbă după persoană și timp (-iamo, -erò)." },
    { t: "Persoană", d: "Cine face acțiunea: io, tu, lui/lei, noi, voi, loro." },
    { t: "Timp simplu", d: "Timp format dintr-un singur cuvânt (canto, cantavo, canterò)." },
    { t: "Timp compus", d: "Timp format din auxiliar + participiu (ho cantato)." },
    { t: "Participiu trecut", d: "Forma verbului în -ato, -uto, -ito." },
    { t: "Imperfect", d: "Timp trecut care descrie obiceiuri sau situații (giocavo)." },
    { t: "Viitor simplu", d: "Timp care arată o acțiune care va avea loc (giocherò)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Cărei conjugări îi aparține «capire»?", options: ["1", "2", "3"], answer: 2, explain: "Se termină în -ire: conjugarea 3." },
      { type: "mc", q: "Care este infinitivul lui «vedevamo»?", options: ["vedare", "vedere", "vedire"], answer: 1, explain: "Vedere, conjugarea 2." },
      { type: "text", q: "Conjugă «ballare» la viitor cu «io».", answer: ["ballero", "io ballero", "ballerò", "io ballerò"], explain: "Io ballerò: -a- devine -e-." },
      { type: "tf", q: "La prezent, desinența pentru «noi» este -iamo la toate cele trei conjugări.", answer: true, explain: "Cantiamo, crediamo, dormiamo." },
      { type: "mc", q: "În «Loro aprono la porta» verbul este la…", options: ["passato prossimo", "prezent", "viitor"], answer: 1, explain: "Aprono: prezentul lui aprire, persoana a 3-a plural." },
      { type: "mc", q: "Care formă este greșită?", options: ["voi correte", "voi dormite", "voi cantete"], answer: 2, explain: "Cantare este din conjugarea 1: voi cantate." },
      { type: "text", q: "Scrie participiul trecut al lui «credere».", answer: ["creduto"], explain: "Conjugarea 2: -uto → creduto." },
      { type: "mc", q: "Care verb primește -isc- la prezent?", options: ["dormire", "pulire", "partire"], answer: 1, explain: "Io pulisco, tu pulisci, lui pulisce." },
      { type: "order", q: "Pune în ordine de la trecut la viitor.", items: ["ho saltato", "salto", "salterò"], explain: "Passato prossimo, prezent, viitor." },
      { type: "mc", q: "În «Tu leggevi un fumetto» verbul este…", options: ["imperfect, conjugarea 2", "prezent, conjugarea 2", "imperfect, conjugarea 3"], answer: 0, explain: "Leggere (2), desinența -evi a imperfectului." },
      { type: "tf", q: "Verbele noi precum «chattare» intră de obicei în conjugarea 3.", answer: false, explain: "Intră în conjugarea 1, în -are." },
      { type: "text", q: "Conjugă «sentire» la prezent cu «voi».", answer: ["sentite", "voi sentite"], explain: "Voi sent-ite." }
    ]
  }
});

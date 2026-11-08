TOPIC('ro', {
  id: "m2-tec-programmazione",
  title: "Programare: variabile și cicluri",
  intro: "Orice aplicație, joc video sau robot funcționează datorită a două idei foarte simple: <b>variabilele</b>, care servesc să <b>rețină</b> datele, și <b>ciclurile</b>, care servesc să <b>repete</b> instrucțiunile fără a le rescrie. Le vom descoperi mai întâi cu blocuri (ca în Scratch) și apoi cu cod adevărat, în <b>Python</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Ce este o variabilă",
      html: `<p>O <b>variabilă</b> este ca o <b>cutie cu o etichetă</b>: eticheta este <b>numele</b>, înăuntru se află o <b>valoare</b> care se poate schimba pe parcursul programului.</p>
<ul>
<li><b>Crearea și atribuirea</b>: <code>puncte = 0</code> înseamnă «pune 0 în cutia numită puncte». Simbolul <code>=</code> în programare nu înseamnă «este egal», ci <b>«atribuie»</b>, «pune înăuntru».</li>
<li><b>Citirea</b>: <code>print(puncte)</code> afișează pe ecran conținutul cutiei.</li>
<li><b>Modificarea</b>: <code>puncte = puncte + 10</code> înseamnă «ia valoarea lui puncte, adaugă 10 și pune rezultatul înapoi în aceeași cutie».</li>
</ul>
<p>Valorile au un <b>tip</b>:</p>
<table>
<tr><th>Tip</th><th>Exemplu</th><th>Servește pentru</th></tr>
<tr><td><b>întreg</b> (int)</td><td><code>vieti = 3</code></td><td>numărat</td></tr>
<tr><td><b>zecimal</b> (float)</td><td><code>pret = 2.50</code></td><td>măsuri, bani (în Python se folosește punctul, nu virgula!)</td></tr>
<tr><td><b>șir de caractere</b> (str)</td><td><code>nume = "Sara"</code></td><td>texte, mereu între ghilimele</td></tr>
<tr><td><b>boolean</b> (bool)</td><td><code>castigat = False</code></td><td>adevărat/fals (True/False)</td></tr>
</table>
<p>Reguli pentru nume: fără spații (folosește <code>punctaj_max</code>), nu începe cu o cifră, alege nume care lasă să se înțeleagă conținutul.</p>`
    },
    {
      type: "svg",
      title: "Variabilele ca niște cutii",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g>
<polygon points="40,120 170,120 190,100 60,100" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<rect x="40" y="120" width="130" height="100" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="55" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#92400e" stroke-width="2"/>
<text x="105" y="208" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">puncte</text>
<text x="105" y="170" font-size="40" font-weight="bold" fill="#1f2937" text-anchor="middle">10</text>
</g>
<g>
<polygon points="230,120 360,120 380,100 250,100" fill="#a5b4fc" stroke="#3730a3" stroke-width="3"/>
<rect x="230" y="120" width="130" height="100" fill="#818cf8" stroke="#3730a3" stroke-width="3"/>
<rect x="245" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#3730a3" stroke-width="2"/>
<text x="295" y="208" font-size="16" font-weight="bold" fill="#3730a3" text-anchor="middle">nume</text>
<text x="295" y="168" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">"Sara"</text>
</g>
<g>
<polygon points="420,120 550,120 570,100 440,100" fill="#86efac" stroke="#166534" stroke-width="3"/>
<rect x="420" y="120" width="130" height="100" fill="#4ade80" stroke="#166534" stroke-width="3"/>
<rect x="435" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#166534" stroke-width="2"/>
<text x="485" y="208" font-size="16" font-weight="bold" fill="#166534" text-anchor="middle">castigat</text>
<text x="485" y="168" font-size="26" font-weight="bold" fill="#14532d" text-anchor="middle">False</text>
</g>
<text x="105" y="250" font-size="16" fill="#1f2937" text-anchor="middle">întreg</text>
<text x="295" y="250" font-size="16" fill="#1f2937" text-anchor="middle">șir de caractere</text>
<text x="485" y="250" font-size="16" fill="#1f2937" text-anchor="middle">boolean</text>
<text x="300" y="50" font-size="20" font-weight="bold" fill="#14532d" text-anchor="middle">etichetă = nume · conținut = valoare</text>
<text x="300" y="285" font-size="16" fill="#334155" text-anchor="middle">puncte = puncte + 10 → cutia «puncte» conține acum 20</text>
</svg>`,
      caption: "Fiecare variabilă are un nume (eticheta) și o valoare (conținutul). Conținutul se poate schimba, numele nu."
    },
    {
      type: "text",
      title: "Ce este un ciclu",
      html: `<p>Un <b>ciclu</b> (în engleză <i>loop</i>) este un bloc de instrucțiuni pe care calculatorul le <b>repetă</b>. Există două tipuri principale:</p>
<p><b>1. Ciclu cu contor</b> – repetă de un <b>număr fix</b> de ori. În Scratch este blocul «repetă de 10 ori»; în Python este <code>for</code>:</p>
<pre><code>for i in range(5):
    print("Salut!")</code></pre>
<p>Afișează «Salut!» de <b>5 ori</b>. Variabila <code>i</code> ia valorile 0, 1, 2, 3, 4 (în Python se începe să se numere de la 0!).</p>
<p><b>2. Ciclu cu condiție</b> – repetă <b>cât timp</b> o condiție este adevărată. În Scratch este «repetă până când…»; în Python este <code>while</code>:</p>
<pre><code>vieti = 3
while vieti &gt; 0:
    print("Mai joci!")
    vieti = vieti - 1</code></pre>
<p>Repetă cât timp <code>vieti</code> este mai mare decât 0: de 3 ori. Dacă uităm să micșorăm <code>vieti</code>, ciclul <b>nu se mai termină niciodată</b>: este un <b>ciclu infinit</b>, una dintre cele mai frecvente greșeli!</p>
<p>⚠️ În Python <b>indentarea</b> (cele 4 spații de la începutul rândului) este obligatorie: arată care instrucțiuni se află <b>în interiorul</b> ciclului.</p>`
    },
    {
      type: "widget",
      title: "De la bloc la cod",
      widget: "match",
      options: { pairs: [
        ["🟧 pune puncte la 0", "puncte = 0"],
        ["🟧 schimbă puncte cu 1", "puncte = puncte + 1"],
        ["🟨 repetă de 10 ori", "for i in range(10):"],
        ["🟨 repetă până când vieti = 0", "while vieti > 0:"],
        ["🟪 spune «Salut!»", "print(\"Salut!\")"],
        ["🟦 întreabă numele și așteaptă", "nume = input(\"Cum te cheamă?\")"]
      ] },
      caption: "Potrivește fiecare bloc în stil Scratch cu rândul de Python care face același lucru."
    },
    {
      type: "quiz",
      title: "Mini-test: variabile",
      questions: [
        { type: "num", q: "x = 5, apoi x = x + 3. Cât valorează x?", answer: 8, explain: "Se ia vechea valoare (5), se adaugă 3 și se pune înapoi în x: 8." },
        { type: "mc", q: "De ce tip este valoarea \"42\" (între ghilimele)?", options: ["Întreg", "Șir de caractere", "Boolean"], answer: 1, explain: "Tot ce se află între ghilimele este un șir de caractere, chiar dacă are cifre." },
        { type: "tf", q: "În programare «=» înseamnă «atribuie o valoare».", answer: true, explain: "Pentru a compara două valori se folosește în schimb «==»." }
      ]
    },
    {
      type: "example",
      title: "Exemplu practic: contorul și acumulatorul",
      html: `<p>Vrem să adunăm numerele de la 1 la 100. Tânărul <b>Carl Friedrich Gauss</b>, potrivit unei anecdote celebre, a făcut-o în minte în câteva secunde la 9 ani. Calculatorul o face cu un ciclu:</p>
<pre><code>suma = 0
for n in range(1, 101):
    suma = suma + n
print(suma)</code></pre>
<ul>
<li><code>n</code> este <b>contorul</b>: ia valorile 1, 2, 3… până la 100 (<code>range(1, 101)</code> se oprește <b>înainte</b> de 101).</li>
<li><code>suma</code> este <b>acumulatorul</b>: pornește de la 0 și la fiecare tur «acumulează» noul număr.</li>
</ul>
<p>Rezultat: <b>5050</b>. Trucul lui Gauss? 1+100 = 101, 2+99 = 101… sunt 50 de perechi: 50 × 101 = 5050.</p>`
    },
    {
      type: "example",
      title: "Exemplu practic: ghicește numărul",
      html: `<pre><code>secret = 7
incercare = 0
while incercare != secret:
    incercare = int(input("Ghicește (1-10): "))
    if incercare &lt; secret:
        print("Mai mare!")
    elif incercare &gt; secret:
        print("Mai mic!")
print("Bravo, ai ghicit!")</code></pre>
<p>Aici ciclul este un <code>while</code>: nu știm <b>de câte ori</b> va încerca jucătorul, așa că repetăm <b>cât timp</b> încercarea este diferită (<code>!=</code>) de numărul secret. <code>input</code> citește ce scrie utilizatorul; <code>int(...)</code> îl transformă din șir de caractere în număr întreg.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Prima programatoare",
      html: `<p>Primul program din istorie a fost scris de o femeie: <b>Ada Lovelace</b>, matematiciană engleză. În <b>1843</b>, în notele la un articol despre «mașina analitică» a lui Charles Babbage, a descris un procedeu pentru calculul <b>numerelor lui Bernoulli</b>, cu instrucțiuni care se repetau: un adevărat <b>ciclu</b>!</p>
<p>Mașina nu a fost niciodată construită, dar Ada înțelesese deja că aceste calculatoare ar putea lucra nu doar cu numere, ci și cu muzică și simboluri. În onoarea ei, un limbaj de programare se numește <b>Ada</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Știai că…? Primul „bug” a fost un insect adevărat",
      html: `<p>În <b>1947</b>, la Universitatea Harvard, tehnicienii care lucrau la calculatorul Mark II au găsit o defecțiune provocată de un <b>fluture de noapte</b> rămas prins într-un releu. L-au lipit cu scotch în registrul de lucru scriind «first actual case of bug being found». Din echipă făcea parte <b>Grace Hopper</b>, pionieră a limbajelor de programare. De atunci, erorile din programe se numesc <b>bug</b> (insecte), iar corectarea lor se numește <b>debug</b>.</p>
<p>Și numele <b>Python</b>? Nu vine de la șarpe: inventatorul lui, olandezul <b>Guido van Rossum</b>, care l-a publicat în <b>1991</b>, era fan al grupului comic englez <i>Monty Python</i>.</p>`
    },
    {
      type: "remember",
      title: "De reținut",
      html: `<ul>
<li><b>Variabilă</b> = nume + valoare care se poate schimba. <code>=</code> atribuie, <code>==</code> compară.</li>
<li>Tipuri: <b>int</b>, <b>float</b>, <b>str</b> (între ghilimele), <b>bool</b> (True/False).</li>
<li><b>for</b>: ciclu cu contor, numărul de repetări este cunoscut. <code>range(5)</code> → 0, 1, 2, 3, 4.</li>
<li><b>while</b>: ciclu cu condiție, repetă cât timp condiția este adevărată. Atenție la ciclurile infinite!</li>
<li><b>Contorul</b> numără turele; <b>acumulatorul</b> adună valorile.</li>
<li>În Python indentarea (4 spații) arată ce se află în interiorul ciclului.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege variabilele și ciclurile",
      intro: "Ți se pare că codul e chineză? Încearcă cu o analogie din viața de zi cu zi, cu blocurile colorate sau cu flashcard-urile.",
      tabs: [
        {
          label: "🏃 Antrenamentul",
          html: `<p>Antrenorul spune: «<b>Faceți 5 ture de teren</b>». Este un ciclu <b>for</b>: numărul de repetări este stabilit dinainte. Ca să nu greșești, numeri turele pe degete: degetele sunt <b>contorul</b>.</p>
<p>Apoi spune: «<b>Alergați până când fluier</b>». Este un ciclu <b>while</b>: nu știi câte ture vei face, continui cât timp condiția («nu a fluierat») este adevărată.</p>
<p><b>Tabela de marcaj</b> cu scorul meciului este o <b>variabilă</b>: are un nume (Gazde, Oaspeți) și o valoare care se schimbă la fiecare gol.</p>`
        },
        {
          label: "🧱 Scratch și Python comparate",
          html: `<p>Același program, «fă un pătrat», în două limbaje:</p>
<table>
<tr><th>Scratch (blocuri)</th><th>Python (text, cu modulul turtle)</th></tr>
<tr><td>când se dă clic pe steagul verde<br>repetă de 4 ori<br>&nbsp;&nbsp;mergi 100 de pași<br>&nbsp;&nbsp;rotește cu 90 de grade</td><td><code>import turtle</code><br><code>t = turtle.Turtle()</code><br><code>for i in range(4):</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.forward(100)</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.right(90)</code></td></tr>
</table>
<p>Blocul «repetă» din Scratch «îmbrățișează» instrucțiunile de repetat; în Python aceeași sarcină o face <b>indentarea</b>. Scratch a fost creat la <b>MIT</b>, în Boston, și lansat în 2007; turtle se inspiră din limbajul <b>Logo</b> (1967), cu faimoasa lui broască țestoasă.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<rect x="30" y="30" width="230" height="40" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="145" y="57" font-size="17" font-weight="bold" fill="#422006" text-anchor="middle">repetă de 4 ori</text>
<rect x="30" y="70" width="24" height="110" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<rect x="54" y="80" width="200" height="38" rx="8" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
<text x="154" y="105" font-size="16" fill="#ffffff" text-anchor="middle">mergi 100 de pași</text>
<rect x="54" y="128" width="200" height="38" rx="8" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
<text x="154" y="153" font-size="16" fill="#ffffff" text-anchor="middle">rotește cu 90°</text>
<rect x="30" y="180" width="230" height="22" rx="8" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="300" y="120" font-size="30" fill="#334155" text-anchor="middle">=</text>
<rect x="330" y="40" width="250" height="160" rx="10" fill="#1e293b"/>
<text x="345" y="80" font-size="16" fill="#f472b6" font-family="monospace">for i in range(4):</text>
<text x="375" y="115" font-size="16" fill="#a5f3fc" font-family="monospace">t.forward(100)</text>
<text x="375" y="150" font-size="16" fill="#a5f3fc" font-family="monospace">t.right(90)</text>
<text x="455" y="185" font-size="14" fill="#94a3b8" text-anchor="middle">indentare = în interiorul ciclului</text>
</svg>`
        },
        {
          label: "📝 Urmărire pe hârtie",
          html: `<p>O metodă folosită în școlile de informatică din toată lumea: <b>tabelul de urmărire</b>. Te prefaci că ești calculatorul și scrii, rând cu rând, valoarea fiecărei variabile.</p>
<pre><code>x = 1
for i in range(4):
    x = x * 2</code></pre>
<table>
<tr><th>tura</th><th>i</th><th>x înainte</th><th>x după</th></tr>
<tr><td>1</td><td>0</td><td>1</td><td>2</td></tr>
<tr><td>2</td><td>1</td><td>2</td><td>4</td></tr>
<tr><td>3</td><td>2</td><td>4</td><td>8</td></tr>
<tr><td>4</td><td>3</td><td>8</td><td>16</td></tr>
</table>
<p>La final <code>x</code> valorează <b>16</b>. Cu tabelul nu te pierzi niciodată, nici în cele mai lungi cicluri!</p>`
        },
        {
          label: "🃏 Flashcard-uri cu cuvinte-cheie",
          html: `<p>Întoarce cartonașele ca să repeți cuvintele-cheie ale programării.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "variabilă", back: "Cutie cu un nume care conține o valoare modificabilă" },
            { front: "=", back: "Atribuire: pui o valoare în variabilă" },
            { front: "==", back: "Comparație: sunt cele două valori egale?" },
            { front: "for", back: "Ciclu cu contor: numărul de repetări este cunoscut" },
            { front: "while", back: "Ciclu cu condiție: repetă cât timp este adevărat" },
            { front: "bug", back: "Eroare în program" },
            { front: "acumulator", back: "Variabilă care adună valorile la fiecare tură" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta programării",
      nodes: [
        { id: "algoritmo", label: "Algoritm", x: 50, y: 7, color: "#7c3aed", html: "Secvență finită de instrucțiuni precise pentru rezolvarea unei probleme.", why: "Numele vine de la matematicianul persan <b>al-Khwarizmi</b> (secolul al IX-lea), al cărui nume latinizat a devenit «algorismus». Un program este un algoritm scris într-un limbaj pe care calculatorul îl înțelege." },
        { id: "programma", label: "Program", x: 50, y: 27, color: "#2563eb", html: "Algoritm scris într-un limbaj de programare (Scratch, Python…).", why: "Calculatorul înțelege doar 0 și 1: limbajele de programare sunt o punte între noi și mașină. Un alt program (interpretor sau compilator) le traduce." },
        { id: "variabile", label: "Variabilă", x: 20, y: 47, color: "#f59e0b", html: "Nume + valoare modificabilă, salvată în memorie.", why: "Fizic este o zonă a memoriei RAM cu o adresă; numele ne servește nouă ca să nu trebuiască să ținem minte adrese numerice. Ideea de a folosi litere în locul numerelor vine din algebră (François Viète, 1591)." },
        { id: "tipi", label: "Tipuri de date", x: 8, y: 72, color: "#f97316", html: "int, float, str, bool.", why: "Calculatorul trebuie să știe cum să interpreteze biții: aceeași secvență de 0 și 1 poate fi un număr sau o literă. Tipul bool poartă numele lui George Boole (1815–1864), care a inventat algebra adevărat/fals." },
        { id: "assegna", label: "Atribuire =", x: 32, y: 72, color: "#eab308", html: "Pune o valoare într-o variabilă: x = x + 1.", why: "În matematică x = x + 1 este imposibil; în informatică înseamnă «calculează în dreapta, apoi salvează în stânga». Unele limbaje (precum Pascal) folosesc := tocmai ca să evite confuzia." },
        { id: "ciclo", label: "Ciclu", x: 80, y: 47, color: "#16a34a", html: "Instrucțiuni repetate: for sau while.", why: "Evită rescrierea de o mie de ori a aceluiași lucru. Ada Lovelace a descris încă din 1843 un procedeu repetat pentru mașina lui Babbage." },
        { id: "for", label: "for (contor)", x: 66, y: 72, color: "#22c55e", html: "Număr de repetări cunoscut: for i in range(10).", why: "Se folosește când știi dinainte de câte ori să repeți. Contorul i ține socoteala turelor." },
        { id: "while", label: "while (condiție)", x: 92, y: 72, color: "#14b8a6", html: "Repetă cât timp condiția este adevărată.", why: "Se folosește când nu știi de câte ori va fi nevoie (de ex. până când utilizatorul ghicește). Condiția trebuie să devină, mai devreme sau mai târziu, falsă, altfel ciclul este infinit." },
        { id: "debug", label: "Debug", x: 50, y: 93, color: "#ef4444", html: "Găsirea și corectarea erorilor (bug).", why: "De la celebrul caz al fluturelui de noapte din calculatorul Mark II (1947). A programa înseamnă și a greși și a corecta: este normal!" }
      ],
      edges: [
        ["algoritmo", "programma", "scris într-un limbaj"],
        ["programma", "variabile", "folosește"],
        ["programma", "ciclo", "folosește"],
        ["variabile", "tipi", "are un"],
        ["variabile", "assegna", "primește valori prin"],
        ["ciclo", "for", "tip"],
        ["ciclo", "while", "tip"],
        ["programma", "debug", "se corectează prin"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: cicluri",
      questions: [
        { type: "num", q: "De câte ori se afișează «Salut» cu: for i in range(7): print(\"Salut\")?", answer: 7, explain: "range(7) produce 0, 1, 2, 3, 4, 5, 6: șapte valori, șapte repetări." },
        { type: "mc", q: "Ce ciclu folosești dacă nu știi de câte ori va trebui să repeți?", options: ["for", "while", "niciunul dintre cele două"], answer: 1, explain: "while repetă cât timp o condiție este adevărată, fără un număr fix." },
        { type: "tf", q: "Codul «n = 5 / while n > 0: print(n)» se oprește singur.", answer: false, explain: "n nu se schimbă niciodată: condiția rămâne mereu adevărată, iar ciclul este infinit." }
      ]
    }
  ],
  glossary: [
    { t: "Variabilă", d: "Spațiu de memorie cu un nume care conține o valoare modificabilă." },
    { t: "Atribuire", d: "Instrucțiune care pune o valoare într-o variabilă (simbolul = în Python)." },
    { t: "Șir de caractere (string)", d: "Secvență de caractere, scrisă între ghilimele: \"salut\"." },
    { t: "Boolean", d: "Tip de date cu doar două valori: True (adevărat) și False (fals)." },
    { t: "Ciclu (loop)", d: "Grup de instrucțiuni repetate de mai multe ori." },
    { t: "for", d: "Ciclu cu contor, cu un număr de repetări stabilit." },
    { t: "while", d: "Ciclu cu condiție: repetă cât timp condiția este adevărată." },
    { t: "Contor", d: "Variabilă care numără turele unui ciclu." },
    { t: "Acumulator", d: "Variabilă care adună (acumulează) valori la fiecare tură." },
    { t: "Ciclu infinit", d: "Ciclu a cărui condiție nu devine niciodată falsă: programul nu se mai termină." },
    { t: "Bug / debug", d: "Eroare în program / activitatea de a o găsi și a o corecta." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Ce este o variabilă?", options: ["O eroare a programului", "Un recipient cu un nume pentru o valoare care se poate schimba", "Un tip de ciclu"], answer: 1, explain: "O variabilă este o «cutie» cu un nume și o valoare." },
      { type: "num", q: "a = 10, apoi a = a - 4, apoi a = a * 2. Cât valorează a?", answer: 12, explain: "10 − 4 = 6; 6 × 2 = 12." },
      { type: "mc", q: "Care valoare este boolean?", options: ["\"adevărat\"", "True", "1.5"], answer: 1, explain: "În Python, booleenii sunt True și False, fără ghilimele." },
      { type: "num", q: "x = 0; for i in range(5): x = x + 2. Cât valorează x la final?", answer: 10, explain: "Ciclul se execută de 5 ori și de fiecare dată adaugă 2: 5 × 2 = 10." },
      { type: "text", q: "Care cuvânt-cheie din Python creează un ciclu care repetă cât timp o condiție este adevărată?", answer: ["while"], explain: "while = «cât timp»." },
      { type: "tf", q: "range(3) produce numerele 1, 2, 3.", answer: false, explain: "range(3) produce 0, 1, 2: se pornește de la 0 și se oprește înainte de 3." },
      { type: "mc", q: "Ce se întâmplă dacă într-un ciclu while condiția nu devine niciodată falsă?", options: ["Programul se oprește imediat", "Se creează un ciclu infinit", "Calculatorul corectează singur eroarea"], answer: 1, explain: "Ciclul continuă la nesfârșit: este un ciclu infinit." },
      { type: "mc", q: "Care este diferența dintre = și == în Python?", options: ["Niciuna", "= atribuie, == compară", "= compară, == atribuie"], answer: 1, explain: "= pune o valoare într-o variabilă; == verifică dacă două valori sunt egale." },
      { type: "order", q: "Ordonează rândurile pentru a aduna numerele de la 1 la 10 și a afișa rezultatul.", items: ["suma = 0", "for n in range(1, 11):", "    suma = suma + n", "print(suma)"], explain: "Mai întâi se aduce acumulatorul la zero, apoi ciclul adună, în sfârșit se afișează." },
      { type: "num", q: "Cât face suma numerelor de la 1 la 100 calculată în exemplul lui Gauss?", answer: 5050, explain: "50 de perechi de 101: 50 × 101 = 5050." },
      { type: "text", q: "Cum se numește matematiciana care în 1843 a scris primul program din istorie? (nume de familie)", answer: ["lovelace", "ada lovelace"], explain: "Ada Lovelace, pentru mașina analitică a lui Charles Babbage." },
      { type: "num", q: "x = 1; for i in range(3): x = x * 3. Cât valorează x?", answer: 27, explain: "1 × 3 = 3, 3 × 3 = 9, 9 × 3 = 27." }
    ]
  }
});

TOPIC('ro', {
  id: "l1-mat-insiemi-logica",
  title: "Mulțimi și logică",
  intro: "„Toate pisicile sunt mamifere; Mițu este o pisică; deci Mițu este un mamifer.” A raționa corect nu este o artă misterioasă: are reguli precise. În această lecție învățăm limbajul cu care matematica pune ordine în lume, <b>mulțimile</b>, și pe cel cu care argumentează, <b>logica</b>: propoziții, conectori, implicații și cuantificatori. Sunt instrumentele pe care le vei folosi în toată matematica de liceu, dar și în drept, în informatică și în viața de zi cu zi (de exemplu pentru a demonta un raționament greșit).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Ce este o mulțime",
      html: `<p>O <b>mulțime</b> este o colecție de obiecte, numite <b>elemente</b>, bine definită: dat fiind un obiect, trebuie să se poată decide fără ambiguitate dacă aparține sau nu mulțimii. „Numerele pare mai mici decât 10” este o mulțime; „filmele frumoase” nu, pentru că „frumos” este subiectiv.</p>
<p>Notație: mulțimile se notează cu litere mari (A, B, C…), elementele cu litere mici. Se scrie:</p>
<ul>
<li><b>a ∈ A</b>: a <b>aparține</b> lui A; <b>a ∉ A</b>: nu aparține.</li>
<li><b>∅</b>: <b>mulțimea vidă</b>, fără elemente (de exemplu soluțiile reale ale ecuației x² = −1).</li>
<li>Mulțimile de numere: ℕ (naturale), ℤ (întregi), ℚ (raționale), ℝ (reale).</li>
</ul>
<p>Există trei moduri de a <b>defini</b> o mulțime:</p>
<ol>
<li><b>Enumerare</b>: A = {2, 4, 6, 8}. Ordinea nu contează, iar elementele nu se repetă: {1, 2, 3} = {3, 2, 1} = {1, 1, 2, 3}.</li>
<li><b>Proprietate caracteristică</b>: A = {x ∈ ℕ | x este par și x &lt; 10}. Se citește „x astfel încât”.</li>
<li><b>Diagrama Euler-Venn</b>: o linie închisă care înconjoară elementele. A fost folosită de Leonhard Euler (1768) și făcută sistematică de John Venn (1880).</li>
</ol>
<p>O mulțime este <b>finită</b> dacă are un număr finit de elemente (<b>cardinalul</b> ei |A| este acel număr), <b>infinită</b> în caz contrar (ℕ, ℤ, ℝ…). Georg Cantor (1845-1918) a întemeiat teoria mulțimilor și a arătat că și infinitele pot avea „mărimi” diferite: ℕ și ℝ sunt ambele infinite, dar nu au aceeași mărime.</p>`
    },
    {
      type: "text",
      title: "Submulțimi",
      html: `<p>B este o <b>submulțime</b> a lui A (B ⊆ A) dacă <b>fiecare</b> element al lui B aparține și lui A. Dacă în plus B ≠ A, B este o submulțime <b>proprie</b> (B ⊂ A).</p>
<p>Exemplu: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. De asemenea {2, 4} ⊂ {1, 2, 3, 4}.</p>
<ul>
<li>Mulțimea vidă este submulțime a <b>oricărei</b> mulțimi (∅ ⊆ A: nu există elemente care să încalce condiția).</li>
<li>Orice mulțime este submulțime a ei înseși (A ⊆ A).</li>
<li>Două mulțimi sunt <b>egale</b> dacă A ⊆ B și B ⊆ A, adică dacă au aceleași elemente.</li>
</ul>
<p>Mulțimea tuturor <b>submulțimilor</b> lui A se numește <b>mulțimea părților</b> 𝒫(A). Dacă A are n elemente, 𝒫(A) are <b>2<sup>n</sup></b>: pentru fiecare element alegem „este” sau „nu este”. Pentru A = {a, b, c} submulțimile sunt 2³ = 8: ∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}.</p>
<p>Atenție să nu confunzi ∈ și ⊂: 2 ∈ {1, 2, 3} (2 este un <i>element</i>), {2} ⊂ {1, 2, 3} (mulțimea {2} este o <i>submulțime</i>).</p>`
    },
    {
      type: "svg",
      title: "Operații cu mulțimi prin diagrame Venn",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="10" y="20" width="570" height="270" fill="none" stroke="#475569" stroke-width="2"/>
<text x="22" y="46" font-size="16" fill="#475569" font-weight="bold">U (mulțimea universală)</text>
<circle cx="230" cy="165" r="95" fill="#3b82f6" fill-opacity="0.35" stroke="#1d4ed8" stroke-width="3"/>
<circle cx="350" cy="165" r="95" fill="#f59e0b" fill-opacity="0.35" stroke="#b45309" stroke-width="3"/>
<text x="165" y="170" font-size="22" fill="#1e3a8a" font-weight="bold">A \\ B</text>
<text x="290" y="170" font-size="20" fill="#1f2937" font-weight="bold">A ∩ B</text>
<text x="370" y="170" font-size="22" fill="#78350f" font-weight="bold">B \\ A</text>
<text x="190" y="80" font-size="22" fill="#1d4ed8" font-weight="bold">A</text>
<text x="380" y="80" font-size="22" fill="#b45309" font-weight="bold">B</text>
<text x="480" y="130" font-size="14" fill="#1f2937">A ∪ B: toată partea colorată</text>
<text x="480" y="160" font-size="14" fill="#1f2937">A ∩ B: partea comună</text>
<text x="480" y="190" font-size="14" fill="#1f2937">A \\ B: doar în A</text>
<text x="480" y="220" font-size="14" fill="#1f2937">complementara: în afara lui A</text>
</svg>`,
      caption: "Reuniunea (tot ce se află în A sau în B), intersecția (ce se află în ambele), diferența (în A, dar nu în B) și complementara (în universul U, dar nu în A)."
    },
    {
      type: "text",
      title: "Operațiile cu mulțimi",
      html: `<p>Fie A și B două mulțimi conținute într-o mulțime <b>universală</b> U.</p>
<ul>
<li><b>Reuniunea</b> A ∪ B = {x | x ∈ A <b>sau</b> x ∈ B} („sau” este <i>inclusiv</i>: este bine și dacă se află în ambele).</li>
<li><b>Intersecția</b> A ∩ B = {x | x ∈ A <b>și</b> x ∈ B}. Dacă A ∩ B = ∅, cele două mulțimi sunt <b>disjuncte</b>.</li>
<li><b>Diferența</b> A \\ B = {x | x ∈ A și x ∉ B}.</li>
<li><b>Complementara</b> lui A față de U: Ā = U \\ A = {x ∈ U | x ∉ A}.</li>
<li><b>Produsul cartezian</b> A × B = {(a, b) | a ∈ A, b ∈ B}: mulțimea perechilor <i>ordonate</i>. Dacă |A| = m și |B| = n, atunci |A × B| = m·n. Își ia numele de la René Descartes (Cartesius), care prin planul cartezian a asociat fiecărui punct o pereche de numere (ℝ × ℝ).</li>
</ul>
<p>Proprietăți utile:</p>
<ul>
<li>comutativitate și asociativitate pentru ∪ și ∩; distributivitate: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C);</li>
<li><b>Legile lui De Morgan</b>: complementara lui A ∪ B este Ā ∩ B̄; complementara lui A ∩ B este Ā ∪ B̄ (Augustus De Morgan, 1806-1871);</li>
<li><b>Formula includerii și excluderii</b> pentru mulțimi finite: |A ∪ B| = |A| + |B| − |A ∩ B| (se scade intersecția, altfel ar fi numărată de două ori).</li>
</ul>
<p>O <b>partiție</b> a lui A este o familie de submulțimi nevide, disjuncte două câte două, a căror reuniune este A: de exemplu ℤ este partiționat în numere pare și impare.</p>`
    },
    {
      type: "example",
      title: "Exemplu: sondajul despre activități",
      html: `<p>Într-o clasă de 28 de elevi, 15 practică un sport (S), 12 cântă la un instrument (M) și 6 fac ambele lucruri. Câți nu fac nici una, nici alta?</p>
<ol>
<li>|S ∪ M| = |S| + |M| − |S ∩ M| = 15 + 12 − 6 = <b>21</b>.</li>
<li>Nu fac nici una, nici alta: 28 − 21 = <b>7</b> elevi.</li>
<li>Doar sport: 15 − 6 = 9; doar muzică: 12 − 6 = 6.</li>
</ol>
<p>Verificare: 9 + 6 + 6 + 7 = 28 ✔. Dacă am fi adunat pur și simplu 15 + 12 = 27, am fi numărat de două ori cei 6 care fac ambele: este greșeala clasică din sondaje.</p>`
    },
    {
      type: "widget",
      title: "Care zonă a diagramei?",
      widget: "classify",
      options: { groups: ["Doar A (multipli de 2)", "Doar B (multipli de 3)", "Și în A, și în B", "Nici în A, nici în B"], items: [
        ["1", 3], ["2", 0], ["3", 1], ["4", 0], ["5", 3], ["6", 2],
        ["8", 0], ["9", 1], ["10", 0], ["11", 3], ["12", 2], ["7", 3]
      ] },
      caption: "Cu A = multiplii lui 2 și B = multiplii lui 3 între 1 și 12: intersecția conține multiplii lui 6."
    },
    {
      type: "quiz",
      title: "Mini-test: mulțimi",
      questions: [
        { type: "num", q: "A = {1, 2, 3, 4} și B = {3, 4, 5}. Câte elemente are A ∪ B?", answer: 5, explain: "A ∪ B = {1, 2, 3, 4, 5}: 5 elemente (4 + 3 − 2 = 5)." },
        { type: "num", q: "Câte submulțimi are o mulțime cu 4 elemente?", answer: 16, explain: "2⁴ = 16, inclusiv ∅ și mulțimea însăși." },
        { type: "mc", q: "Care afirmație este corectă?", options: ["2 ⊂ {1, 2, 3}", "{2} ⊂ {1, 2, 3}", "{2} ∈ {1, 2, 3}"], answer: 1, explain: "{2} este o mulțime conținută în {1, 2, 3}, deci o submulțime; 2 este un element." }
      ]
    },
    {
      type: "text",
      title: "Propoziții și conectori logici",
      html: `<p>O <b>propoziție</b> (în logică, un enunț) este o afirmație despre care se poate spune fără ambiguitate că este <b>adevărată</b> (A) sau <b>falsă</b> (F). „7 este număr prim” (A) și „8 este impar” (F) sunt propoziții. „Cât este ceasul?” și „x + 1 = 5” (atâta timp cât nu știm cine este x) nu sunt. Aceasta din urmă este un <b>predicat</b>: devine propoziție când se înlocuiește x cu o valoare sau se folosește un cuantificator.</p>
<p>Cu ajutorul <b>conectorilor</b> se construiesc propoziții compuse, a căror valoare de adevăr depinde numai de cea a componentelor:</p>
<table>
<tr><th>Nume</th><th>Simbol</th><th>Se citește</th><th>Adevărată când…</th></tr>
<tr><td>Negația</td><td>¬p</td><td>non p</td><td>p este falsă</td></tr>
<tr><td>Conjuncția</td><td>p ∧ q</td><td>p și q</td><td>sunt adevărate <b>amândouă</b></td></tr>
<tr><td>Disjuncția</td><td>p ∨ q</td><td>p sau q (inclusiv)</td><td>cel puțin una este adevărată</td></tr>
<tr><td>Implicația</td><td>p ⇒ q</td><td>dacă p atunci q</td><td>este falsă doar dacă p este A și q este F</td></tr>
<tr><td>Echivalența</td><td>p ⇔ q</td><td>p dacă și numai dacă q</td><td>p și q au aceeași valoare</td></tr>
</table>
<p><b>Tabelul de adevăr</b> pentru p ⇒ q:</p>
<table>
<tr><th>p</th><th>q</th><th>p ⇒ q</th></tr>
<tr><td>A</td><td>A</td><td>A</td></tr>
<tr><td>A</td><td>F</td><td><b>F</b></td></tr>
<tr><td>F</td><td>A</td><td>A</td></tr>
<tr><td>F</td><td>F</td><td>A</td></tr>
</table>
<p>Implicația surprinde: dacă p este falsă, „p ⇒ q” este adevărată <i>oricare</i> ar fi q. Gândește-te la o promisiune: „dacă plouă mâine, îți aduc umbrela”. Dacă nu plouă, în niciun caz nu mi-am călcat promisiunea. Singurul mod de a mă contrazice este să plouă și să nu ți-o aduc.</p>`
    },
    {
      type: "example",
      title: "Exemplu: reciproca și contrapusa",
      html: `<p>Pornim de la: <b>p ⇒ q</b> = „dacă un număr este multiplu de 6, atunci este par” (adevărată).</p>
<ul>
<li><b>Reciproca</b>: q ⇒ p = „dacă este par, atunci este multiplu de 6” → <b>falsă</b> (4 este par, dar nu este multiplu de 6).</li>
<li><b>Contrapusa</b>: ¬q ⇒ ¬p = „dacă un număr nu este par (este impar), atunci nu este multiplu de 6” → <b>adevărată</b>. Contrapusa este <b>întotdeauna echivalentă</b> cu implicația de plecare.</li>
<li><b>Negația</b> implicației: p ∧ ¬q = „este multiplu de 6 și nu este par” → falsă, așa cum trebuie.</li>
</ul>
<p>Aceasta explică două moduri diferite de a spune:</p>
<ul>
<li>p este condiție <b>suficientă</b> pentru q (p ⇒ q): a fi multiplu de 6 ajunge pentru a fi par;</li>
<li>q este condiție <b>necesară</b> pentru p: dacă nu este par, nu poate fi multiplu de 6.</li>
</ul>
<p>Dacă sunt valabile ambele implicații (p ⇔ q), p este condiție necesară și suficientă pentru q. Exemplu: un număr este divizibil cu 6 dacă și numai dacă este divizibil cu 2 și cu 3.</p>`
    },
    {
      type: "text",
      title: "Tautologii, contradicții și raționamentul",
      html: `<p>O propoziție compusă este o <b>tautologie</b> dacă este adevărată pentru orice valori de adevăr ale componentelor (p ∨ ¬p: „ori plouă, ori nu plouă”), o <b>contradicție</b> dacă este întotdeauna falsă (p ∧ ¬p). Două propoziții sunt <b>logic echivalente</b> dacă au același tabel de adevăr. Echivalențe importante:</p>
<ul>
<li>p ⇒ q ≡ ¬q ⇒ ¬p (contrapoziția);</li>
<li>p ⇒ q ≡ ¬p ∨ q;</li>
<li><b>De Morgan</b>: ¬(p ∧ q) ≡ ¬p ∨ ¬q și ¬(p ∨ q) ≡ ¬p ∧ ¬q. Exemplu: negația lui „este înalt și blond” este „nu este înalt <i>sau</i> nu este blond”.</li>
</ul>
<p>Pe contrapoziție se bazează <b>demonstrația prin reducere la absurd</b>: pentru a demonstra p se presupune ¬p și se ajunge la o contradicție. Astfel au demonstrat vechii greci că √2 nu este rațional și că numerele prime sunt infinite.</p>
<p><b>Silogismele</b> lui Aristotel (secolul al IV-lea î.Hr.) sunt primul sistem de logică formală: „Toți oamenii sunt muritori; Socrate este om; deci Socrate este muritor”. În termeni de mulțimi: dacă U ⊆ M și s ∈ U, atunci s ∈ M. Logica și mulțimile sunt două fețe ale aceleiași monede: ∧ corespunde lui ∩, ∨ lui ∪, ¬ complementarei, ⇒ lui ⊆.</p>`
    },
    {
      type: "text",
      title: "Predicate și cuantificatori",
      html: `<p>Un <b>predicat</b> P(x) este o propoziție cu o variabilă care devine adevărată sau falsă când se fixează x. <b>Cuantificatorii</b> transformă un predicat într-o propoziție:</p>
<ul>
<li><b>∀x P(x)</b>: „pentru orice x este valabil P(x)” (cuantificatorul universal);</li>
<li><b>∃x P(x)</b>: „există cel puțin un x pentru care este valabil P(x)” (cuantificatorul existențial);</li>
<li><b>∃!x P(x)</b>: „există un singur x”.</li>
</ul>
<p>Exemple pe ℝ: ∀x, x² ≥ 0 (adevărată); ∃x, x² = 4 (adevărată: x = 2 sau −2); ∃x, x² = −1 (falsă pe ℝ); ∀x, x &gt; 3 (falsă: ajunge contraexemplul x = 0).</p>
<p><b>Cum se neagă</b> (foarte important):</p>
<ul>
<li>¬(∀x P(x)) ≡ ∃x ¬P(x): pentru a nega „toți” ajunge <b>un contraexemplu</b>. Negația lui „toți lebedele sunt albi” este „există cel puțin un lebăd care nu este alb” (nu „toți lebedele sunt negri”!). Lebedele negri au fost descoperiți cu adevărat în Australia, de către europeni, la sfârșitul secolului al XVII-lea.</li>
<li>¬(∃x P(x)) ≡ ∀x ¬P(x): pentru a nega „există” trebuie demonstrat că <b>niciun</b> element nu satisface proprietatea.</li>
</ul>
<p>O singură verificare numerică nu demonstrează niciodată o afirmație universală („este valabil pentru 1, 2, 3, 4… deci pentru toate” nu este o demonstrație), în timp ce un contraexemplu ajunge pentru a o infirma.</p>`
    },
    {
      type: "curiosity",
      title: "Paradoxul lui Russell",
      html: `<p>În 1901 filosoful și matematicianul Bertrand Russell a descoperit o problemă în teoria „naivă” a mulțimilor. Consideră „mulțimea R a tuturor mulțimilor care <b>nu</b> se conțin pe ele însele”. R se conține pe sine? Dacă da, prin definiție nu ar trebui să se conțină; dacă nu, ar trebui să se conțină. Contradicție! O versiune amuzantă: „Într-o țară bărbierul bărbierește toți și numai bărbații care nu se bărbieresc singuri. Cine îl bărbierește pe bărbier?”. Paradoxul i-a constrâns pe matematicieni să refondeze teoria cu reguli mai riguroase (axiomele Zermelo-Fraenkel). Arată că și matematica cere atenție când se vorbește despre „mulțimea tuturor mulțimilor”.</p>`
    },
    {
      type: "curiosity",
      title: "Boole, logica și smartphone-ul tău",
      html: `<p>În 1854 matematicianul englez George Boole a publicat <i>Legile gândirii</i>, în care arăta că logica poate fi tratată cu o algebră: astăzi numită <b>algebra booleană</b>, folosește doar două valori (1 = adevărat, 0 = fals) și operațiile AND, OR, NOT. În 1937 Claude Shannon a înțeles că întrerupătoarele electrice se comportă exact ca conectorii logici: două întrerupătoare <b>în serie</b> sunt un AND (curentul trece doar dacă ambele sunt închise), două <b>în paralel</b> un OR. Pe această idee se bazează toate circuitele digitale, de la calculatoare de buzunar la procesoarele computerelor.</p>`
    },
    {
      type: "alternatives",
      title: "Alte moduri de a înțelege logica",
      intro: "Tabelele de adevăr sunt precise, dar abstracte: iată alte imagini pentru a recunoaște conectorii.",
      tabs: [
        {
          label: "💡 Întrerupătoare",
          html: `<p>Gândește-te la un bec și la două întrerupătoare p și q (închis = adevărat).</p>
<ul>
<li><b>p ∧ q</b>: întrerupătoare <b>în serie</b>. Becul se aprinde doar dacă ambele sunt închise.</li>
<li><b>p ∨ q</b>: întrerupătoare <b>în paralel</b>. Ajunge ca unul să fie închis.</li>
<li><b>¬p</b>: un întrerupător „inversat”, aprins când p este stins.</li>
</ul>
<p>Practic, orice formulă logică este un circuit și invers. Încearcă desenând circuitele pentru ¬(p ∧ q) și ¬p ∨ ¬q: au același comportament (De Morgan!).</p>`
        },
        {
          label: "🧮 Cu mulțimile",
          html: `<p>Fiecărui predicat P(x) îi asociem mulțimea elementelor care îl satisfac, A = {x | P(x)}. Atunci: „P și Q” corespunde intersecției A ∩ B; „P sau Q” reuniunii A ∪ B; „non P” complementarei Ā; „P ⇒ Q” faptului că A ⊆ B. De exemplu „toate pătratele sunt romburi” înseamnă că mulțimea pătratelor este conținută în cea a romburilor: vezi asta desenând un cerc în interiorul altuia.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f0fdf4"/>
<ellipse cx="300" cy="130" rx="230" ry="105" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<ellipse cx="300" cy="140" rx="130" ry="65" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="300" y="40" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Romburi</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#14532d" font-weight="bold">Pătrate</text>
<text x="300" y="235" font-size="16" text-anchor="middle" fill="#1f2937">Pătrat ⇒ romb, dar romb ⇒ pătrat este fals</text>
</svg>`
        },
        {
          label: "⚖️ Promisiunea",
          html: `<p>Pentru a înțelege de ce „p ⇒ q” este adevărată când p este falsă, gândește-te la o promisiune: „dacă iau 10 la examen, îți dau un joc video cadou”. Când îmi <b>încalc</b> promisiunea? Doar dacă iau 10 și cadoul nu vine. Dacă iau 8, promisiunea rămâne adevărată, orice aș face: nu a fost contrazisă. Logica consideră falsă o implicație doar dacă se găsește cazul „premisă adevărată, concluzie falsă”.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta mulțimilor și a logicii",
      nodes: [
        { id: "insieme", label: "Mulțime", x: 25, y: 6, color: "#2563eb", html: "Colecție bine definită de elemente.", why: "Cantor (1870-1890) a introdus mulțimile pentru a studia infinitul. Astăzi sunt limbajul comun al întregii matematici: numerele, funcțiile și figurile sunt mulțimi cu o structură." },
        { id: "operazioni", label: "Reuniune, intersecție, diferență", x: 12, y: 32, color: "#16a34a", html: "Construiesc mulțimi noi din cele cunoscute.", why: "Urmează legile algebrei booleene: comutativitate, asociativitate, distributivitate și De Morgan. Boole (1854) le-a descoperit studiind logica." },
        { id: "cartesiano", label: "Produs cartezian", x: 12, y: 60, color: "#f59e0b", html: "Perechi ordonate (a, b).", why: "Descartes (1637) a asociat fiecărui punct al planului o pereche de numere. Funcțiile și relațiile sunt submulțimi ale unui produs cartezian." },
        { id: "proposizione", label: "Propoziție", x: 72, y: 6, color: "#9333ea", html: "Afirmație adevărată sau falsă, nu ambele.", why: "Principiul necontradicției și al terțului exclus, deja la Aristotel (secolul al IV-lea î.Hr.): pentru logica clasică orice propoziție este A sau F." },
        { id: "connettivi", label: "Conectori", x: 62, y: 32, color: "#ef4444", html: "¬, ∧, ∨, ⇒, ⇔ și tabelele de adevăr.", why: "Valoarea unei propoziții compuse depinde numai de valorile părților (vero-funcționalitate). Frege și Peano (sfârșitul secolului al XIX-lea) au fixat simbolurile moderne." },
        { id: "implicazione", label: "Implicația și contrapusa", x: 85, y: 55, color: "#0ea5e9", html: "p ⇒ q ≡ ¬q ⇒ ¬p.", why: "Stă la baza demonstrației prin reducere la absurd. Dacă p ⇒ q, p este suficientă și q este necesară: reciproca nu este valabilă în general." },
        { id: "quantificatori", label: "Cuantificatori ∀, ∃", x: 55, y: 62, color: "#22c55e", html: "Transformă un predicat într-o propoziție.", why: "Introduși de Frege (1879) și Peano. A nega un ∀ cere un contraexemplu: știința progresează așa (lebedele negri au infirmat „toți lebedele sunt albi”)." },
        { id: "dimostrazione", label: "Demonstrație", x: 50, y: 88, color: "#64748b", html: "Lanț de deducții de la axiome la teoreme.", why: "Elementele lui Euclid (circa 300 î.Hr.) sunt primul tratat care pornește de la axiome și deduce teoreme cu regulile logicii." }
      ],
      edges: [["insieme", "operazioni", "are"], ["insieme", "cartesiano", "are"], ["proposizione", "connettivi", "se combină cu"], ["connettivi", "implicazione", "include"], ["proposizione", "quantificatori", "generalizează"], ["operazioni", "connettivi", "corespund cu"], ["implicazione", "dimostrazione", "folosită în"], ["quantificatori", "dimostrazione", "folosiți în"]]
    },
    {
      type: "remember",
      title: "De ținut minte",
      html: `<ul>
<li>∪ = „sau” (inclusiv), ∩ = „și”, \\ = „dar nu”. |A ∪ B| = |A| + |B| − |A ∩ B|. O mulțime cu n elemente are 2<sup>n</sup> submulțimi.</li>
<li><b>p ⇒ q</b> este falsă <b>doar</b> dacă p este adevărată și q falsă. Este echivalentă cu contrapusa ¬q ⇒ ¬p, <b>nu</b> cu reciproca q ⇒ p.</li>
<li><b>De Morgan</b>: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q.</li>
<li>Negații: ¬(∀x P) ≡ ∃x ¬P; ¬(∃x P) ≡ ∀x ¬P.</li>
<li>Un contraexemplu infirmă o afirmație universală; o mie de exemple nu o demonstrează.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-test: logică",
      questions: [
        { type: "mc", q: "Care este negația lui „toți elevii au promovat testul”?", options: ["Niciun elev nu a promovat testul", "Cel puțin un elev nu a promovat testul", "Toți elevii nu au promovat testul"], answer: 1, explain: "Negația lui ∀ este ∃ cu predicatul negat: ajunge un elev care nu a promovat testul." },
        { type: "tf", q: "Dacă p ⇒ q este adevărată, atunci și q ⇒ p este adevărată.", answer: false, explain: "Reciproca nu este echivalentă: „dacă plouă, strada este udă” nu implică „dacă strada este udă, plouă”." },
        { type: "mc", q: "Propoziția p ∧ q este adevărată când…", options: ["cel puțin una dintre p și q este adevărată", "p și q sunt amândouă adevărate", "p și q sunt amândouă false"], answer: 1, explain: "Conjuncția („și”) cere ca ambele să fie adevărate." },
        { type: "mc", q: "Negația lui „x > 3 și x < 8” este…", options: ["x ≤ 3 și x ≥ 8", "x ≤ 3 sau x ≥ 8", "x < 3 sau x > 8"], answer: 1, explain: "De Morgan: negația unui „și” este un „sau” al negațiilor. Negând x > 3 se obține x ≤ 3, negând x < 8 se obține x ≥ 8." }
      ]
    }
  ],
  glossary: [
    { t: "Mulțime", d: "Colecție bine definită de obiecte, numite elemente." },
    { t: "Submulțime", d: "B ⊆ A dacă fiecare element al lui B aparține lui A." },
    { t: "Mulțimea vidă", d: "Mulțimea ∅ fără elemente; este submulțime a oricărei mulțimi." },
    { t: "Reuniune", d: "A ∪ B: elementele care se află în A sau în B (sau în ambele)." },
    { t: "Intersecție", d: "A ∩ B: elementele comune lui A și B." },
    { t: "Produs cartezian", d: "A × B: mulțimea perechilor ordonate (a, b) cu a în A și b în B." },
    { t: "Propoziție", d: "Afirmație despre care se poate spune că este adevărată sau falsă." },
    { t: "Conector", d: "Operație logică (non, și, sau, dacă… atunci, dacă și numai dacă) care compune propoziții." },
    { t: "Tautologie", d: "Propoziție compusă întotdeauna adevărată." },
    { t: "Contrapusa", d: "Propoziția ¬q ⇒ ¬p, echivalentă cu p ⇒ q." },
    { t: "Cuantificator", d: "Simbolul ∀ (pentru orice) sau ∃ (există) care precizează întinderea unui predicat." },
    { t: "Contraexemplu", d: "Un caz care infirmă o afirmație universală." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Care dintre următoarele este o mulțime bine definită?", options: ["Numerele prime mai mici decât 20", "Cele mai frumoase cântece", "Elevii simpatici"], answer: 0, explain: "Doar prima are un criteriu obiectiv de apartenență." },
      { type: "num", q: "A = {1, 2, 3, 4, 5, 6} și B = {4, 5, 6, 7, 8}. Câte elemente are A ∩ B?", answer: 3, explain: "A ∩ B = {4, 5, 6}: 3 elemente." },
      { type: "num", q: "Într-o școală, 40 de elevi studiază franceza, 35 spaniola și 15 ambele. Câți elevi studiază cel puțin una dintre cele două limbi?", answer: 60, explain: "|F ∪ S| = 40 + 35 − 15 = 60." },
      { type: "num", q: "Câte submulțimi are mulțimea {a, b, c, d, e}?", answer: 32, explain: "2⁵ = 32." },
      { type: "num", q: "A are 5 elemente și B are 4. Câte elemente are produsul cartezian A × B?", answer: 20, explain: "|A × B| = 5 × 4 = 20." },
      { type: "mc", q: "Implicația p ⇒ q este falsă când…", options: ["p este falsă și q este adevărată", "p este adevărată și q este falsă", "p și q sunt amândouă false"], answer: 1, explain: "Este singurul caz în care promisiunea este încălcată." },
      { type: "tf", q: "Contrapusa lui „dacă plouă, iau umbrela” este „dacă nu iau umbrela, nu plouă”.", answer: true, explain: "Contrapusa: ¬q ⇒ ¬p. Este echivalentă cu implicația de plecare." },
      { type: "mc", q: "Care este negația lui „există un număr prim par mai mare decât 2”?", options: ["Orice număr prim par este mai mic sau egal cu 2", "Există un număr prim impar", "Orice număr prim este par"], answer: 0, explain: "¬(∃x P(x)) ≡ ∀x ¬P(x): toate numerele prime pare sunt ≤ 2 (în realitate singurul este 2)." },
      { type: "tf", q: "Verificarea faptului că o afirmație este valabilă pentru primele 100 de numere naturale demonstrează valabilitatea ei pentru toate numerele naturale.", answer: false, explain: "O verificare pe cazuri particulare nu este o demonstrație. Un contraexemplu, în schimb, ajunge pentru a o infirma." },
      { type: "order", q: "Așază în ordine pașii pentru a nega „toate numerele x satisfac P(x)”.", items: ["Se scrie afirmația cu ∀x P(x)", "Se schimbă cuantificatorul ∀ în ∃", "Se neagă predicatul: ¬P(x)", "Se citește: există cel puțin un x pentru care P nu este valabil"], explain: "¬(∀x P(x)) ≡ ∃x ¬P(x)." },
      { type: "text", q: "Cum îl cheamă pe matematicianul care a întemeiat teoria mulțimilor în secolul al XIX-lea (inițiala C)?", answer: ["cantor", "georg cantor"], explain: "Georg Cantor (1845-1918) a întemeiat teoria mulțimilor." }
    ]
  }
});

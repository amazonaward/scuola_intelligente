TOPIC('ro', {
 "id": "m1-mat-frazioni",
 "title": "Fracțiile și operațiile cu ele",
 "intro": "În clasele primare ai cunoscut fracțiile ca „părți dintr-o tortă”. Acum devin adevărate <b>numere</b>: învățăm să le <b>clasificăm</b>, să le <b>simplificăm</b> cu c.m.m.d.c., să le <b>comparăm</b> cu c.m.m.m.c. și să facem cu ele cele <b>patru operații</b> și puterile, până la rezolvarea de probleme și de exerciții cu mai multe operații.",
 "minutes": 50,
 "sections": [
  {
   "type": "text",
   "title": "Fracția ca operator",
   "html": "<p>O fracție <b>a/b</b> (cu b ≠ 0) arată că întregul este împărțit în <b>b</b> părți egale și se iau <b>a</b> dintre ele.</p>\n<ul>\n<li><b>numitorul</b> (b, dedesubt) spune în câte părți egale se împarte întregul;</li>\n<li><b>numărătorul</b> (a, deasupra) spune câte părți se iau;</li>\n<li><b>linia de fracție</b> înseamnă „împărțit la”: 3/4 = 3 : 4 = 0,75.</li>\n</ul>\n<p>Fracția este un <b>operator</b>: acționează asupra unei mărimi. Pentru a calcula <b>3/4 din 200</b>: se împarte la numitor și se înmulțește cu numărătorul: 200 : 4 × 3 = 50 × 3 = <b>150</b>.</p>\n<p><b>Problema inversă</b>: „3/4 dintr-un număr sunt 150. Care este numărul?” Se face operația invers: 150 : 3 × 4 = 50 × 4 = <b>200</b>.</p>\n<p>Numitorul <b>nu poate fi 0</b>: nu se poate împărți un întreg în zero părți!</p>"
  },
  {
   "type": "text",
   "title": "Fracții subunitare, supraunitare, echiunitare",
   "html": "<table>\n<tr><th>Tipul</th><th>Regula</th><th>Exemple</th><th>Valoarea</th></tr>\n<tr><td><b>Subunitară</b> (proprie)</td><td>numărător &lt; numitor</td><td>2/5, 7/9</td><td>mai mică decât 1 întreg</td></tr>\n<tr><td><b>Supraunitară</b> (improprie)</td><td>numărător &gt; numitor (și nu multiplu)</td><td>7/4, 11/3</td><td>mai mare decât 1 întreg</td></tr>\n<tr><td><b>Aparentă</b></td><td>numărătorul multiplu al numitorului</td><td>8/4, 6/6, 0/5</td><td>un număr natural (2, 1, 0)</td></tr>\n</table>\n<p>O fracție supraunitară se poate scrie ca <b>număr mixt</b>: 7/4 = 1 întreg și 3/4 (pentru că 7 : 4 = 1 rest 3).</p>\n<p>Fracțiile cu numărătorul 1 (1/2, 1/3, 1/10…) se numesc <b>unitare</b>; cele cu numitorul 10, 100, 1000… se numesc <b>zecimale</b> (3/10 = 0,3).</p>"
  },
  {
   "type": "widget",
   "title": "Explorează fracțiile",
   "widget": "fractionPie",
   "options": {
    "n": 7,
    "d": 4
   },
   "caption": "Cu 7/4 trebuie mai mult de un întreg: este o fracție supraunitară. Mișcă cursoarele și caută o fracție aparentă (de ex. 8/4)."
  },
  {
   "type": "text",
   "title": "Fracții echivalente și simplificare",
   "html": "<p>Două fracții sunt <b>echivalente</b> dacă reprezintă aceeași cantitate: 1/2 = 2/4 = 3/6 = 50/100.</p>\n<p><b>Proprietatea de invarianță</b>: dacă înmulțim sau împărțim numărătorul și numitorul cu <b>același număr</b> (diferit de 0), obținem o fracție echivalentă.<br>3/5 = (3 × 4)/(5 × 4) = 12/20.</p>\n<p><b>Verificare rapidă</b> (produsul încrucișat): a/b = c/d dacă <b>a × d = b × c</b>. 3/5 și 12/20: 3 × 20 = 60 și 5 × 12 = 60 ✔️</p>\n<p><b>A simplifica</b> înseamnă a împărți numărătorul și numitorul la un divizor comun. O fracție este <b>ireductibilă</b> (adusă la forma cea mai simplă) când numărătorul și numitorul sunt <b>prime între ele</b> (c.m.m.d.c. = 1). Cel mai rapid mod: împărțim la <b>c.m.m.d.c.</b></p>\n<p>Exemplu: 36/48. c.m.m.d.c.(36, 48) = 12 → 36/48 = 3/4.<br>Sau pe etape: 36/48 = 18/24 = 9/12 = 3/4.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: tipuri și echivalențe",
   "questions": [
    {
     "type": "mc",
     "q": "Care fracție este aparentă?",
     "options": [
      "5/3",
      "12/4",
      "3/12",
      "7/8"
     ],
     "answer": 1,
     "explain": "12 este multiplu de 4: 12/4 = 3."
    },
    {
     "type": "num",
     "q": "Cât sunt 2/5 din 35?",
     "answer": 14,
     "tol": 0,
     "explain": "35 : 5 = 7; 7 × 2 = 14."
    },
    {
     "type": "mc",
     "q": "Simplifică până la fracția ireductibilă 24/36.",
     "options": [
      "12/18",
      "4/6",
      "2/3",
      "6/9"
     ],
     "answer": 2,
     "explain": "c.m.m.d.c.(24, 36) = 12: 24/36 = 2/3."
    },
    {
     "type": "tf",
     "q": "4/6 și 10/15 sunt echivalente.",
     "answer": true,
     "explain": "Amândouă se simplifică la 2/3; produs încrucișat: 4 × 15 = 60 = 6 × 10."
    }
   ]
  },
  {
   "type": "text",
   "title": "Compararea fracțiilor",
   "html": "<ul>\n<li><b>Același numitor</b>: este mai mare cea cu numărătorul mai mare. 5/8 &gt; 3/8.</li>\n<li><b>Același numărător</b>: este mai mare cea cu numitorul <b>mai mic</b> (părți mai mari!). 3/4 &gt; 3/7.</li>\n<li><b>Cazul general</b>: se transformă în fracții echivalente cu același numitor, <b>cel mai mic numitor comun</b>, adică <b>c.m.m.m.c.</b> al numitorilor.</li>\n</ul>\n<p>Exemplu: compară 5/6 și 7/9. c.m.m.m.c.(6, 9) = 18.<br>5/6 = 15/18; 7/9 = 14/18 → <b>5/6 &gt; 7/9</b>.</p>\n<p>Metoda rapidă a <b>produsului încrucișat</b>: 5 × 9 = 45 și 6 × 7 = 42; cum 45 &gt; 42, 5/6 &gt; 7/9.</p>\n<p>Fracțiile se pot așeza și pe <b>axa numerelor</b>: între 0 și 1 se află toate fracțiile subunitare. Între două fracții există întotdeauna încă una: de exemplu între 1/3 și 1/2 se află 5/12. Fracțiile sunt <b>dense</b>, spre deosebire de numerele naturale!</p>"
  },
  {
   "type": "svg",
   "title": "Fracții pe axă și comparare",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<line x1=\"40\" y1=\"70\" x2=\"560\" y2=\"70\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n<g stroke=\"#0f172a\" stroke-width=\"3\"><line x1=\"40\" y1=\"58\" x2=\"40\" y2=\"82\"/><line x1=\"300\" y1=\"58\" x2=\"300\" y2=\"82\"/><line x1=\"560\" y1=\"58\" x2=\"560\" y2=\"82\"/></g>\n<g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\"><text x=\"40\" y=\"105\">0</text><text x=\"300\" y=\"105\">1</text><text x=\"560\" y=\"105\">2</text></g>\n<circle cx=\"235\" cy=\"70\" r=\"8\" fill=\"#2563eb\"/><text x=\"235\" y=\"45\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1d4ed8\">3/4</text>\n<circle cx=\"495\" cy=\"70\" r=\"8\" fill=\"#dc2626\"/><text x=\"495\" y=\"45\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#b91c1c\">7/4</text>\n<circle cx=\"170\" cy=\"70\" r=\"8\" fill=\"#16a34a\"/><text x=\"170\" y=\"45\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#15803d\">1/2</text>\n<text x=\"40\" y=\"150\" font-size=\"17\" fill=\"#0f172a\">5/6 =</text>\n<g stroke=\"#ffffff\" stroke-width=\"2\">\n<rect x=\"100\" y=\"132\" width=\"330\" height=\"26\" fill=\"#e5e7eb\"/>\n<rect x=\"100\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/><rect x=\"155\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/><rect x=\"210\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/><rect x=\"265\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/><rect x=\"320\" y=\"132\" width=\"55\" height=\"26\" fill=\"#3b82f6\"/>\n</g>\n<text x=\"40\" y=\"200\" font-size=\"17\" fill=\"#0f172a\">7/9 =</text>\n<g stroke=\"#ffffff\" stroke-width=\"2\">\n<rect x=\"100\" y=\"182\" width=\"330\" height=\"26\" fill=\"#e5e7eb\"/>\n<rect x=\"100\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"136.7\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"173.3\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"210\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"246.7\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"283.3\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/><rect x=\"320\" y=\"182\" width=\"36.7\" height=\"26\" fill=\"#f97316\"/>\n</g>\n<text x=\"450\" y=\"152\" font-size=\"16\" fill=\"#1d4ed8\" font-weight=\"bold\">= 15/18</text>\n<text x=\"450\" y=\"202\" font-size=\"16\" fill=\"#c2410c\" font-weight=\"bold\">= 14/18</text>\n<text x=\"300\" y=\"245\" font-size=\"16\" text-anchor=\"middle\" fill=\"#334155\">bara albastră este puțin mai lungă: 5/6 &gt; 7/9</text>\n</svg>",
   "caption": "Fracțiile subunitare se află între 0 și 1, cele supraunitare după 1. Modelul cu bare ajută la compararea lor."
  },
  {
   "type": "text",
   "title": "Adunarea și scăderea",
   "html": "<p><b>Cu același numitor</b>: se adună (sau se scad) numărătorii și se păstrează numitorul.<br>2/9 + 5/9 = 7/9 &nbsp;&nbsp; 7/8 − 3/8 = 4/8 = 1/2</p>\n<p><b>Cu numitori diferiți</b>:</p>\n<ol>\n<li>se calculează <b>c.m.m.m.c. al numitorilor</b> (noul numitor comun);</li>\n<li>se împarte c.m.m.m.c. la fiecare numitor și rezultatul se înmulțește cu numărătorul;</li>\n<li>se adună (sau se scad) noii numărători;</li>\n<li>se <b>simplifică</b> rezultatul, dacă se poate.</li>\n</ol>\n<p>Exemplu: <b>3/4 + 5/6</b>. c.m.m.m.c.(4, 6) = 12.<br>12 : 4 × 3 = 9; 12 : 6 × 5 = 10 → 9/12 + 10/12 = <b>19/12</b> (= 1 și 7/12).</p>\n<p>Exemplu: <b>2 − 3/5</b> = 10/5 − 3/5 = <b>7/5</b> (un întreg este 5/5, doi întregi sunt 10/5).</p>\n<p><b>Greșeală de evitat</b>: 1/2 + 1/3 <b>nu</b> face 2/5! Face 3/6 + 2/6 = <b>5/6</b>. Numitorii nu se adună niciodată.</p>"
  },
  {
   "type": "text",
   "title": "Înmulțirea, împărțirea și puterea",
   "html": "<p><b>Înmulțirea</b>: numărător cu numărător, numitor cu numitor.<br>2/3 × 4/5 = 8/15</p>\n<p>Este bine să <b>simplificăm mai întâi</b>, chiar și „în cruce” (un numărător cu numitorul celeilalte fracții):<br>6/7 × 14/9 → 6 și 9 se împart la 3, 14 și 7 la 7 → 2/1 × 2/3 = <b>4/3</b>.</p>\n<p><b>Inversa</b> (sau reciproca) unei fracții se obține schimbând între ei numărătorul și numitorul: inversa lui 3/5 este 5/3. O fracție înmulțită cu inversa ei dă întotdeauna 1. Numărul 0 nu are inversă.</p>\n<p><b>Împărțirea</b>: se înmulțește prima fracție cu <b>inversa</b> celei de-a doua.<br>3/4 : 9/8 = 3/4 × 8/9 = (simplific 3 cu 9 și 4 cu 8) 1/1 × 2/3 = <b>2/3</b>.</p>\n<p><b>Puterea</b>: se ridică la putere atât numărătorul, cât și numitorul.<br>(2/3)³ = 2³/3³ = 8/27. Sunt valabile aceleași proprietăți ca la puterile numerelor naturale, iar (a/b)⁰ = 1.</p>\n<p>În <b>exercițiile cu mai multe operații</b> cu fracții ordinea este mereu aceeași: paranteze → puteri → × și : → + și −.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: tortul de ziua de naștere",
   "html": "<p>La petrecerea lui Matei, Luca mănâncă <b>1/4</b> din tort, iar Sofia <b>1/3</b>. Ce fracție din tort mai rămâne?</p>\n<ol>\n<li>Mâncat: 1/4 + 1/3 = 3/12 + 4/12 = <b>7/12</b>.</li>\n<li>Rămâne: 1 − 7/12 = 12/12 − 7/12 = <b>5/12</b>.</li>\n</ol>\n<p>Tortul cântărea <b>1.200 g</b>. Câte grame au rămas? 5/12 din 1.200 = 1.200 : 12 × 5 = <b>500 g</b>.</p>\n<p>Restul se împarte în porții de <b>1/24</b> din tort: câte felii se obțin? 5/12 : 1/24 = 5/12 × 24/1 = <b>10 felii</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: reducerea și problema inversă",
   "html": "<p><b>1.</b> O bicicletă costă <b>€ 240</b>. La reduceri se ieftinește cu <b>1/5</b>. Cât costă acum?<br>Reducere: 240 : 5 = € 48. Preț: 240 − 48 = <b>€ 192</b> (sau: plătesc 4/5 → 240 : 5 × 4 = 192).</p>\n<p><b>2.</b> Giulia a cheltuit <b>3/8</b> din economiile ei, adică <b>€ 45</b>. Cât avea în total?<br>Problema inversă: 45 : 3 × 8 = 15 × 8 = <b>€ 120</b>. Îi rămân 120 − 45 = <b>€ 75</b> (cei 5/8).</p>\n<p>O metodă bună pentru aceste probleme este <b>modelul cu bare</b>: desenează o bară împărțită în 8 părți, colorează 3 și scrie „45 €” deasupra. O parte valorează 15 €, bara întreagă 8 × 15 = 120 €.</p>"
  },
  {
   "type": "curiosity",
   "title": "Egiptenii foloseau numai fracții unitare",
   "html": "<p>Vechii egipteni scriau aproape toate fracțiile ca <b>sumă de fracții unitare diferite</b> (cu numărătorul 1). De exemplu 3/4 = 1/2 + 1/4 și 2/5 = 1/3 + 1/15. <b>Papirusul Rhind</b> (circa 1650 î.Hr.) conține un tabel pentru a scrie în acest fel 2/n.</p>\n<p>Pare complicat, dar era practic: ca să împartă 3 pâini la 4 persoane, fiecare primea o jumătate de pâine plus un sfert. Ușor de tăiat!</p>\n<p><b>Linia de fracție</b> orizontală pe care o folosim noi a fost făcută cunoscută în Europa de Fibonacci în <i>Liber abaci</i> (1202), care o învățase de la matematicienii arabi.</p>"
  },
  {
   "type": "curiosity",
   "title": "Fracțiile în muzică",
   "html": "<p>Notele muzicale sunt fracții! <b>Nota întreagă</b> durează 1 întreg, <b>nota doime</b> 1/2, <b>nota pătrime</b> 1/4, <b>nota optime</b> 1/8, <b>nota șaisprezecime</b> 1/16. O măsură de <b>3/4</b>, scrisă la începutul partiturii (valsul), înseamnă că fiecare măsură conține 3 note de 1/4.</p>\n<p>Și notele „se potrivesc între ele” datorită fracțiilor: <b>Pitagora</b> a descoperit că o coardă lungă cât jumătate (1/2) sună cu o <b>octavă</b> mai sus, iar una lungă cât 2/3 sună o <b>cvintă</b>. Fracțiile simple dau sunetele cele mai armonioase!</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege",
   "intro": "Dacă regulile despre fracții ți se par magie, încearcă aceste metode folosite în alte țări.",
   "tabs": [
    {
     "label": "🇸🇬 Modelul cu bare (Singapore)",
     "html": "<p>În Singapore, una dintre țările cu cele mai bune rezultate la matematică din lume, problemele cu fracții se rezolvă desenând <b>bare</b> (<i>bar model</i>). Problema: „2/5 dintr-o clasă sunt băieți. Fetele sunt 15. Câți elevi sunt în total?”</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"220\" fill=\"#ffffff\"/><g stroke=\"#0f172a\" stroke-width=\"2\"><rect x=\"50\" y=\"70\" width=\"100\" height=\"50\" fill=\"#93c5fd\"/><rect x=\"150\" y=\"70\" width=\"100\" height=\"50\" fill=\"#93c5fd\"/><rect x=\"250\" y=\"70\" width=\"100\" height=\"50\" fill=\"#f9a8d4\"/><rect x=\"350\" y=\"70\" width=\"100\" height=\"50\" fill=\"#f9a8d4\"/><rect x=\"450\" y=\"70\" width=\"100\" height=\"50\" fill=\"#f9a8d4\"/></g><g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\"><text x=\"150\" y=\"55\" fill=\"#1d4ed8\">băieți: 2/5</text><text x=\"400\" y=\"55\" fill=\"#be185d\">fete: 3/5 = 15</text><text x=\"300\" y=\"102\" fill=\"#0f172a\">5</text><text x=\"400\" y=\"102\" fill=\"#0f172a\">5</text><text x=\"500\" y=\"102\" fill=\"#0f172a\">5</text><text x=\"100\" y=\"102\" fill=\"#0f172a\">5</text><text x=\"200\" y=\"102\" fill=\"#0f172a\">5</text></g><text x=\"300\" y=\"160\" font-size=\"18\" text-anchor=\"middle\" fill=\"#0f172a\">3 părți = 15 → 1 parte = 5</text><text x=\"300\" y=\"195\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#15803d\">5 părți = 25 de elevi</text></svg>"
    },
    {
     "label": "🦋 Fluturele (SUA)",
     "html": "<p>În Statele Unite mulți elevi folosesc „<b>butterfly method</b>” pentru a aduna două fracții: se înmulțește <b>în cruce</b> (aripile fluturelui), se adună produsele pentru a obține numărătorul și se înmulțesc numitorii (corpul).</p><p>2/3 + 1/4: aripi 2 × 4 = 8 și 3 × 1 = 3 → numărător 8 + 3 = 11; corp 3 × 4 = 12 → <b>11/12</b>.</p><p>Funcționează întotdeauna, pentru că folosește produsul numitorilor ca numitor comun. Dar atenție: cu numere mari este mai bine c.m.m.m.c., altfel apoi trebuie să simplifici mult (1/6 + 1/9 cu fluturele dă 15/54 = 5/18).</p>"
    },
    {
     "label": "🧊 Înmulțirea cu aria (3D)",
     "html": "<p>Cum se vede 2/3 × 3/4? Ia un dreptunghi de <b>3 × 4 = 12</b> cubulețe (numitorul rezultatului). Colorează 2 rânduri din 3 și 3 coloane din 4: partea colorată de două ori este un dreptunghi de <b>2 × 3 = 6</b> cubulețe. Deci 2/3 × 3/4 = 6/12 = 1/2. Numărător cu numărător, numitor cu numitor: iată de ce!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "📏 Pe axa numerelor",
     "html": "<p>Împarte fiecare întreg în 4 părți: fiecare salt este 1/4. Numărând salturile poți aduna: 3/4 + 2/4 = 5 salturi = 5/4, adică un întreg și un sfert. Semnele arată 3 (= 3/4) și 5 (= 5/4) dacă te gândești la fiecare liniuță ca la un sfert.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 8,
      "step": 1,
      "marks": [
       3,
       5
      ]
     }
    },
    {
     "label": "🍕 Regula lui „de ce se întoarce”",
     "html": "<p>De ce, ca să împărțim, înmulțim cu inversa? Gândește-te la o întrebare concretă: <b>câte felii de 1/8 dintr-o pizza sunt în 3 pizze?</b> Fiecare pizza are 8 felii, deci 3 × 8 = 24. Ai calculat 3 : 1/8 = 3 × 8/1 = 24!</p><p>A împărți la o fracție înseamnă a te întreba „<b>de câte ori încape?</b>”. A împărți la 1/8 este ca și cum ai număra optimile: se înmulțește cu 8. Dacă feliile sunt de 3/8, încap de 3 ori mai puține: 3 × 8/3 = 8 felii.</p>"
    }
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: operații",
   "questions": [
    {
     "type": "mc",
     "q": "2/5 + 1/3 = ?",
     "options": [
      "3/8",
      "11/15",
      "3/15",
      "2/15"
     ],
     "answer": 1,
     "explain": "c.m.m.m.c.(5, 3) = 15: 6/15 + 5/15 = 11/15."
    },
    {
     "type": "mc",
     "q": "5/6 × 3/10 = ?",
     "options": [
      "15/60",
      "1/4",
      "8/16",
      "1/2"
     ],
     "answer": 1,
     "explain": "Simplific în cruce 5 cu 10 și 3 cu 6: 1/2 × 1/2 = 1/4."
    },
    {
     "type": "mc",
     "q": "4/9 : 2/3 = ?",
     "options": [
      "8/27",
      "2/3",
      "6/9",
      "3/2"
     ],
     "answer": 1,
     "explain": "4/9 × 3/2 = 12/18 = 2/3."
    },
    {
     "type": "tf",
     "q": "Inversa lui 7 este 1/7.",
     "answer": true,
     "explain": "7 = 7/1, schimbând între ei numărătorul și numitorul se obține 1/7. Într-adevăr 7 × 1/7 = 1."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta: de unde vin regulile fracțiilor",
   "nodes": [
    {
     "id": "dividere",
     "label": "Împărțirea în părți egale",
     "x": 50,
     "y": 5,
     "color": "#64748b",
     "html": "Nevoia de a împărți pâinea, pământul, moștenirea.",
     "why": "Egiptenii și babilonienii foloseau fracțiile încă de acum 4.000 de ani pentru a împărți recoltele și a măsura câmpurile după revărsările Nilului."
    },
    {
     "id": "frazione",
     "label": "Fracția a/b",
     "x": 50,
     "y": 20,
     "color": "#2563eb",
     "html": "Operator: împarte la b și înmulțește cu a.",
     "why": "Cuvântul vine din latinescul „frangere” = a rupe. O fracție este și rezultatul împărțirii a : b, de aceea b ≠ 0."
    },
    {
     "id": "tipi",
     "label": "Subunitare, supraunitare, aparente",
     "x": 15,
     "y": 34,
     "color": "#0ea5e9",
     "html": "Mai mici decât 1, mai mari decât 1, egale cu un număr natural.",
     "why": "Depinde de comparația dintre numărător și numitor: cele aparente arată că numerele naturale sunt un caz particular al fracțiilor."
    },
    {
     "id": "invariantiva",
     "label": "Proprietatea de invarianță",
     "x": 50,
     "y": 38,
     "color": "#16a34a",
     "html": "× sau : numărătorul și numitorul cu același număr.",
     "why": "Este aceeași proprietate de invarianță a împărțirii: (a × k) : (b × k) = a : b. Dacă tai fiecare felie în 2, feliile se dublează, dar cantitatea nu se schimbă."
    },
    {
     "id": "mcd",
     "label": "Simplificarea (c.m.m.d.c.)",
     "x": 25,
     "y": 56,
     "color": "#9333ea",
     "html": "Se împarte la c.m.m.d.c.: fracție ireductibilă.",
     "why": "Teorema fundamentală a aritmeticii asigură că forma ireductibilă este unică: fiecare număr rațional are un singur „reprezentant” în forma cea mai simplă."
    },
    {
     "id": "mcm",
     "label": "Numitor comun (c.m.m.m.c.)",
     "x": 75,
     "y": 56,
     "color": "#ea580c",
     "html": "Pentru a compara, a aduna și a scădea.",
     "why": "Se pot aduna numai „lucruri de același fel”: treimi cu treimi, sferturi cu sferturi. C.m.m.m.c. este cel mai mic „fel” comun."
    },
    {
     "id": "moltdiv",
     "label": "× și : (inversa)",
     "x": 25,
     "y": 76,
     "color": "#dc2626",
     "html": "Produs: num × num, numitor × numitor. Împărțire: × inversa.",
     "why": "Produsul se vede cu aria unui dreptunghi; a împărți la a/b înseamnă a te întreba de câte ori încape a/b în număr, adică a înmulți cu b/a."
    },
    {
     "id": "addsott",
     "label": "+ e −",
     "x": 75,
     "y": 76,
     "color": "#f59e0b",
     "html": "Același numitor, apoi se adună numărătorii.",
     "why": "1/2 + 1/3 ≠ 2/5: se vede cu un tort. Egiptenii evitau problema scriind totul ca sume de fracții unitare."
    },
    {
     "id": "razionali",
     "label": "Numerele raționale ℚ",
     "x": 50,
     "y": 93,
     "color": "#0f766e",
     "html": "Mulțimea tuturor fracțiilor: o nouă mulțime de numere.",
     "why": "Cu fracțiile împărțirea este întotdeauna posibilă (cu excepția lui 0). Numele vine din latinescul „ratio” = raport. Fibonacci (1202) a răspândit în Europa linia de fracție."
    }
   ],
   "edges": [
    [
     "dividere",
     "frazione",
     "apare"
    ],
    [
     "frazione",
     "tipi",
     "se clasifică"
    ],
    [
     "frazione",
     "invariantiva",
     "are"
    ],
    [
     "invariantiva",
     "mcd",
     "permite simplificarea"
    ],
    [
     "invariantiva",
     "mcm",
     "permite transformarea"
    ],
    [
     "mcd",
     "moltdiv",
     "simplifică mai întâi"
    ],
    [
     "mcm",
     "addsott",
     "servește la"
    ],
    [
     "moltdiv",
     "razionali",
     "formează"
    ],
    [
     "addsott",
     "razionali",
     "formează"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Fracție",
   "d": "Număr de forma a/b (b ≠ 0) care arată a părți dintr-un întreg împărțit în b părți egale."
  },
  {
   "t": "Numărător",
   "d": "Numărul de deasupra liniei de fracție: câte părți se iau."
  },
  {
   "t": "Numitor",
   "d": "Numărul de sub linie: în câte părți se împarte întregul."
  },
  {
   "t": "Fracție subunitară",
   "d": "Fracție cu numărătorul mai mic decât numitorul (valorează mai puțin de 1)."
  },
  {
   "t": "Fracție supraunitară",
   "d": "Fracție cu numărătorul mai mare decât numitorul (valorează mai mult de 1)."
  },
  {
   "t": "Fracție aparentă",
   "d": "Fracție cu numărătorul multiplu al numitorului: valorează un număr natural."
  },
  {
   "t": "Fracții echivalente",
   "d": "Fracții care reprezintă aceeași cantitate."
  },
  {
   "t": "Fracție ireductibilă",
   "d": "Fracție în care numărătorul și numitorul sunt prime între ele."
  },
  {
   "t": "Cel mai mic numitor comun",
   "d": "C.m.m.m.c. al numitorilor, folosit pentru a compara și a aduna."
  },
  {
   "t": "Inversa",
   "d": "Fracția obținută schimbând între ei numărătorul și numitorul."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Cât sunt 5/8 din 64?",
    "answer": 40,
    "tol": 0,
    "explain": "64 : 8 = 8; 8 × 5 = 40."
   },
   {
    "type": "num",
    "q": "3/7 dintr-un număr sunt 21. Care este numărul?",
    "answer": 49,
    "tol": 0,
    "explain": "Problema inversă: 21 : 3 × 7 = 49."
   },
   {
    "type": "mc",
    "q": "Fracția 9/4 este…",
    "options": [
     "subunitară",
     "supraunitară",
     "aparentă",
     "unitară"
    ],
    "answer": 1,
    "explain": "9 > 4 și 9 nu este multiplu de 4."
   },
   {
    "type": "mc",
    "q": "Care este fracția 45/60 adusă la forma ireductibilă?",
    "options": [
     "9/12",
     "3/4",
     "15/20",
     "5/6"
    ],
    "answer": 1,
    "explain": "c.m.m.d.c.(45, 60) = 15: 3/4."
   },
   {
    "type": "mc",
    "q": "Care fracție este mai mare?",
    "options": [
     "3/5",
     "4/7",
     "Sunt egale"
    ],
    "answer": 0,
    "explain": "Produs încrucișat: 3 × 7 = 21 > 5 × 4 = 20, deci 3/5 > 4/7."
   },
   {
    "type": "mc",
    "q": "5/6 − 1/4 = ?",
    "options": [
     "4/2",
     "7/12",
     "1/2",
     "4/24"
    ],
    "answer": 1,
    "explain": "c.m.m.m.c.(6, 4) = 12: 10/12 − 3/12 = 7/12."
   },
   {
    "type": "mc",
    "q": "(3/4)² = ?",
    "options": [
     "6/8",
     "9/16",
     "9/4",
     "3/16"
    ],
    "answer": 1,
    "explain": "Se ridică la pătrat numărătorul și numitorul: 9/16."
   },
   {
    "type": "mc",
    "q": "7/10 : 14/5 = ?",
    "options": [
     "1/4",
     "49/50",
     "4",
     "98/50"
    ],
    "answer": 0,
    "explain": "7/10 × 5/14 = (simplific 7 cu 14 și 5 cu 10) 1/2 × 1/2 = 1/4."
   },
   {
    "type": "tf",
    "q": "1/2 + 1/3 = 2/5",
    "answer": false,
    "explain": "Numitorii nu se adună: 3/6 + 2/6 = 5/6."
   },
   {
    "type": "num",
    "q": "O carte are 240 de pagini. Luca a citit 3/8 din ea. Câte pagini îi mai rămân?",
    "answer": 150,
    "tol": 0,
    "unit": "pagine",
    "explain": "Citite: 240 : 8 × 3 = 90. Îi rămân 240 − 90 = 150 (cele 5/8)."
   },
   {
    "type": "order",
    "q": "Pune în ordine de la cea mai mică la cea mai mare",
    "items": [
     "1/4",
     "1/3",
     "1/2",
     "2/3",
     "5/4"
    ],
    "explain": "În douăsprezecimi: 3/12, 4/12, 6/12, 8/12, 15/12."
   },
   {
    "type": "mc",
    "q": "Care este inversa lui 2/9?",
    "options": [
     "9/2",
     "2/9",
     "−2/9",
     "1/9"
    ],
    "answer": 0,
    "explain": "Se schimbă între ei numărătorul și numitorul: 9/2."
   }
  ],
  "gen": [
   [
    "fracEquiv",
    1
   ],
   [
    "fracAdd",
    2
   ]
  ]
 }
});

TOPIC('ro', {
 "id": "p4-mat-divisioni-due-cifre",
 "title": "Împărțirea cu împărțitor de două cifre",
 "intro": "450 de elevi pleacă în excursie cu autocare de 52 de locuri: câte autocare trebuie? Ca să răspunzi trebuie să împarți la un număr de <b>două cifre</b>. Pare greu, dar cu o bună <b>estimare</b>, câteva <b>strategii</b> și <b>proba</b> devine un joc de copii!",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Să recapitulăm: termenii împărțirii",
   "html": "<p>În împărțirea <b>864 : 24 = 36</b>:</p>\n<ul>\n<li><b>864</b> este <b>deîmpărțitul</b> (cantitatea care se împarte);</li>\n<li><b>24</b> este <b>împărțitorul</b> (în câte părți se împarte, sau cât de mare este fiecare grup);</li>\n<li><b>36</b> este <b>câtul</b> (rezultatul);</li>\n<li>dacă rămâne ceva, aceea este <b>restul</b>, care trebuie să fie întotdeauna <b>mai mic decât împărțitorul</b>.</li>\n</ul>\n<p>Împărțirea servește în două situații:</p>\n<ul>\n<li><b>a împărți în părți egale</b>: 864 de abțibilduri împărțite la 24 de copii → câte pentru fiecare?</li>\n<li><b>a cuprinde</b>: 864 de abțibilduri în pachețele de câte 24 → câte pachețele?</li>\n</ul>\n<p>Împărțirea este <b>operația inversă</b> înmulțirii: dacă 36 × 24 = 864, atunci 864 : 24 = 36.</p>"
  },
  {
   "type": "text",
   "title": "Pasul 1 – Estimarea câtului",
   "html": "<p>Secretul împărțirii la două cifre este să <b>estimezi</b>, adică să ghicești inteligent de câte ori „încape” împărțitorul în deîmpărțit.</p>\n<p><b>Trucul degetului</b>: acoperă cu degetul ultima cifră a împărțitorului și ultima cifră a bucății de deîmpărțit pe care o împarți.</p>\n<ul>\n<li>86 : 24 → acoperi 4 și 6 → <b>8 : 2 = 4</b>. Încearcă 4: 4 × 24 = 96. E mai mult decât 86! Prea mare → încearcă <b>3</b>: 3 × 24 = 72 ✅.</li>\n</ul>\n<p>Un truc și mai bun: <b>rotunjește împărțitorul</b> la cea mai apropiată zece. 24 e aproape de 20, 47 e aproape de 50, 31 e aproape de 30.</p>\n<ul>\n<li>145 : 31 → gândește 150 : 30 = <b>5</b> → 5 × 31 = 155, prea mult → <b>4</b>: 4 × 31 = 124 ✅ (rest 21).</li>\n</ul>\n<p>Dacă produsul este <b>prea mare</b>, scade numărul cu 1; dacă restul este <b>mai mare sau egal cu împărțitorul</b>, crește-l cu 1.</p>"
  },
  {
   "type": "text",
   "title": "Pasul 2 – Împărțirea în coloană, pas cu pas",
   "html": "<p>Să calculăm <b>864 : 24</b> cu metoda italiană („în L”).</p>\n<ol>\n<li><b>Iau cifrele</b>: 8 nu conține 24, deci iau <b>86</b>.</li>\n<li><b>Estimez</b>: în 86 de câte ori încape 24? 8 : 2 = 4, dar 4 × 24 = 96 &gt; 86 → <b>3</b>. Scriu 3 la cât.</li>\n<li><b>Înmulțesc și scad</b>: 3 × 24 = 72; 86 − 72 = <b>14</b>. Restul 14 este mai mic decât 24 ✅.</li>\n<li><b>Cobor</b> cifra următoare (4): obțin <b>144</b>.</li>\n<li><b>Estimez</b>: 144 : 24 → 14 : 2 = 7, dar 7 × 24 = 168, prea mult; 6 × 24 = <b>144</b> ✅. Scriu 6 la cât.</li>\n<li><b>Scad</b>: 144 − 144 = <b>0</b>. Nu mai sunt cifre de coborât: gata!</li>\n</ol>\n<p>Rezultat: <b>864 : 24 = 36</b>, rest <b>0</b>.</p>"
  },
  {
   "type": "svg",
   "title": "864 : 24 în coloană",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<g font-family=\"monospace\" font-size=\"34\" font-weight=\"bold\">\n<text x=\"80\" y=\"60\" fill=\"#1f2937\">8 6 4</text>\n<text x=\"300\" y=\"60\" fill=\"#2563eb\">2 4</text>\n<text x=\"300\" y=\"115\" fill=\"#16a34a\">3 6</text>\n<text x=\"80\" y=\"115\" fill=\"#dc2626\">7 2</text>\n<text x=\"40\" y=\"115\" fill=\"#dc2626\">−</text>\n<text x=\"80\" y=\"170\" fill=\"#1f2937\">1 4 4</text>\n<text x=\"80\" y=\"225\" fill=\"#dc2626\">1 4 4</text>\n<text x=\"40\" y=\"225\" fill=\"#dc2626\">−</text>\n<text x=\"160\" y=\"280\" fill=\"#1f2937\">0</text>\n</g>\n<line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"80\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<line x1=\"280\" y1=\"75\" x2=\"400\" y2=\"75\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<line x1=\"70\" y1=\"128\" x2=\"160\" y2=\"128\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"238\" x2=\"200\" y2=\"238\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<path d=\"M185 45 Q215 100 182 150\" stroke=\"#f97316\" stroke-width=\"3\" fill=\"none\" stroke-dasharray=\"6 5\"/>\n<text x=\"215\" y=\"105\" font-size=\"15\" fill=\"#c2410c\">cobor</text>\n<text x=\"215\" y=\"122\" font-size=\"15\" fill=\"#c2410c\">cifra 4</text>\n<g font-size=\"17\" fill=\"#334155\">\n<text x=\"420\" y=\"58\">← împărțitor</text>\n<text x=\"420\" y=\"113\">← cât</text>\n<text x=\"430\" y=\"170\">86 : 24 → 3</text>\n<text x=\"430\" y=\"195\">3 × 24 = 72</text>\n<text x=\"430\" y=\"230\">144 : 24 → 6</text>\n<text x=\"430\" y=\"255\">6 × 24 = 144</text>\n<text x=\"230\" y=\"282\">← rest</text>\n</g>\n</svg>",
   "caption": "Împărțitorul se scrie în dreapta sus, câtul dedesubt; în stânga se scriu produsele, scăderile și cifrele coborâte."
  },
  {
   "type": "text",
   "title": "Pasul 3 – Proba",
   "html": "<p>Ca să fii sigur de rezultat, fă <b>proba</b>, folosind operația inversă:</p>\n<p style=\"font-size:1.2em\"><b>cât × împărțitor + rest = deîmpărțit</b></p>\n<ul>\n<li>864 : 24 = 36 → probă: 36 × 24 = 864 ✅</li>\n<li>1.000 : 32 = 31 rest 8 → probă: 31 × 32 = 992; 992 + 8 = 1.000 ✅</li>\n</ul>\n<p>Ține minte și <b>verificarea restului</b>: restul trebuie să fie întotdeauna <b>mai mic decât împărțitorul</b>. Dacă obții 1.000 : 32 = 30 rest 40, e o greșeală: 40 &gt; 32, câtul era prea mic!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test: estimare și probă",
   "questions": [
    {
     "type": "mc",
     "q": "Pentru a estima 183 : 29 la ce împărțire „ușoară” te poți gândi?",
     "options": [
      "180 : 30",
      "100 : 20",
      "200 : 20"
     ],
     "answer": 0,
     "explain": "29 este aproape de 30 și 183 este aproape de 180: 180 : 30 = 6."
    },
    {
     "type": "num",
     "q": "Fă proba: un copil a găsit 500 : 23 = 21 rest 17. Cât face 21 × 23 + 17?",
     "answer": 500,
     "explain": "21 × 23 = 483; 483 + 17 = 500: împărțirea este corectă!"
    },
    {
     "type": "tf",
     "q": "La o împărțire la 15 restul poate fi 18.",
     "answer": false,
     "explain": "Restul trebuie să fie mai mic decât împărțitorul (15)."
    }
   ]
  },
  {
   "type": "text",
   "title": "Pasul 4 – Proprietatea invariantă: o scurtătură",
   "html": "<p>Dacă <b>înmulțești</b> sau <b>împarți</b> deîmpărțitul și împărțitorul cu <b>același număr</b>, câtul <b>nu se schimbă</b>. Aceasta este <b>proprietatea invariantă</b>.</p>\n<ul>\n<li>720 : 15 → dublez amândouă numerele → 1440 : 30 → împart la 10 → <b>144 : 3 = 48</b>. Mult mai ușor!</li>\n<li>600 : 25 → înmulțesc cu 4 → 2400 : 100 = <b>24</b>.</li>\n<li>840 : 40 → împart la 10 → 84 : 4 = <b>21</b>.</li>\n</ul>\n<p>Atenție: dacă în împărțire există un <b>rest</b>, câtul rămâne același, dar restul se schimbă (se înmulțește sau se împarte și el). Folosește această scurtătură mai ales la împărțirile exacte.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: autocarele excursiei",
   "html": "<p>450 de elevi trebuie să meargă în excursie. Fiecare autocar are <b>52 de locuri</b>. Câte autocare trebuie?</p>\n<ol>\n<li>Estimare: 450 : 50 = 9 → încerc 9 × 52 = 468 &gt; 450, prea mult → <b>8</b>.</li>\n<li>8 × 52 = 416; 450 − 416 = <b>34</b>. Deci 450 : 52 = <b>8 rest 34</b>.</li>\n<li>Proba: 8 × 52 + 34 = 416 + 34 = 450 ✅.</li>\n</ol>\n<p>Dar atenție la <b>sensul restului</b>! 8 autocare duc 416 elevi; rămân 34 de elevi pe jos. Mai trebuie un autocar: în total <b>9 autocare</b>.</p>\n<p>La probleme trebuie să te întrebi mereu: <b>restul se ignoră, se adaugă sau se folosește?</b></p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: ouăle în cutii",
   "html": "<p>O fermă adună <b>1.000 de ouă</b> și le pune în cutii de câte <b>12</b> (o duzină). Câte cutii pline? Câte ouă rămân?</p>\n<ol>\n<li>100 : 12 → 10 : 1 = 10? Prea mult! Câtul parțial este mereu o singură cifră (cel mult 9): încerc 9 → 9 × 12 = 108 &gt; 100 → <b>8</b>: 8 × 12 = 96; 100 − 96 = 4.</li>\n<li>Cobor 0: <b>40</b> : 12 → <b>3</b>: 3 × 12 = 36; 40 − 36 = 4.</li>\n<li>Rezultat: <b>1.000 : 12 = 83 rest 4</b>.</li>\n<li>Proba: 83 × 12 = 996; 996 + 4 = 1.000 ✅.</li>\n</ol>\n<p>Ferma umple <b>83 de cutii</b> și rămân <b>4 ouă</b> (pentru omletă!).</p>"
  },
  {
   "type": "3d",
   "title": "Împărțirea ca dreptunghi de cubulețe",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 6,
    "b": 12,
    "max": 12
   },
   "caption": "72 de cubulețe așezate în rânduri de câte 12: câte rânduri? 72 : 12 = 6. Orice împărțire exactă este un dreptunghi: deîmpărțit = total de cubulețe, împărțitor = cubulețe pe rând, cât = numărul de rânduri."
  },
  {
   "type": "curiosity",
   "title": "Știai că…? Metoda „în L” este italiană",
   "html": "<p>Felul de a scrie împărțirea pe care îl folosești tu, cu împărțitorul în dreapta sus și câtul dedesubt, este tipic <b>Italiei</b> și altor țări europene (Franța, Spania, America Latină). În <b>țările anglo-saxone</b> se folosește <b>„long division”</b>: deîmpărțitul stă sub un fel de „streașină” și câtul se scrie <b>deasupra</b>. În România și în Germania se scrie totul pe un rând: <i>864 : 24 = 36</i>, cu calculele dedesubt.</p>\n<p>Metoda se schimbă, dar pașii (estimează, înmulțește, scade, coboară) sunt mereu aceiași!</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că…? Împărțirea la zero este imposibilă",
   "html": "<p>Se poate împărți la 1, la 24, la 1.000… dar <b>niciodată la zero</b>! De ce? Fă proba: 8 : 0 = ? Ar trebui să existe un număr care, înmulțit cu 0, să dea 8. Dar orice număr înmulțit cu 0 dă 0! Deci împărțirea la zero <b>nu are sens</b>.</p>\n<p>Și calculatoarele știu asta: dacă încerci, scriu <b>„Error”</b> sau <b>„E”</b>.</p>"
  },
  {
   "type": "remember",
   "title": "De ținut minte",
   "html": "<ul>\n<li><b>Deîmpărțit : împărțitor = cât</b> (+ rest).</li>\n<li><b>Restul</b> este întotdeauna <b>mai mic decât împărțitorul</b>.</li>\n<li>Pași: <b>iau cifrele → estimez → înmulțesc → scad → cobor</b>, și o iau de la capăt.</li>\n<li>Pentru a estima <b>rotunjește împărțitorul</b> la zece (sau folosește trucul degetului).</li>\n<li>Produs prea mare → scade cu 1; rest prea mare → crește cu 1.</li>\n<li><b>Proba</b>: cât × împărțitor + rest = deîmpărțit.</li>\n<li><b>Proprietatea invariantă</b>: × sau : deîmpărțitul și împărțitorul cu același număr, câtul nu se schimbă.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a face împărțiri",
   "intro": "Dacă metoda în coloană te blochează, încearcă aceste căi: în bucăți mari (Anglia), cu sărituri înapoi, ca vechii egipteni sau cu tabelul multiplilor.",
   "tabs": [
    {
     "label": "🇬🇧 În bucăți mari (chunking)",
     "html": "<p>În școlile englezești se învață <b>chunking</b> („în bucăți”): în loc să ghicești cifra potrivită, scazi din deîmpărțit <b>bucăți mari și ușoare</b> (× 10, × 5, × 2…) până nu mai rămâne nimic.</p>\n<p><b>864 : 24</b></p>\n<table>\n<tr><th>Scad</th><th>De câte ori 24</th><th>Rămâne</th></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>624</td></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>384</td></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>144</td></tr>\n<tr><td>120 (= 24 × 5)</td><td>5</td><td>24</td></tr>\n<tr><td>24 (= 24 × 1)</td><td>1</td><td>0</td></tr>\n<tr><td><b>Total</b></td><td><b>36</b></td><td></td></tr>\n</table>\n<p>Este mai lung, dar <b>nu greșești niciodată estimarea</b>: folosești doar tabla înmulțirii pe care o știi bine!</p>"
    },
    {
     "label": "🐸 Sărituri înapoi",
     "html": "<p>A împărți înseamnă și: <b>de câte ori pot scădea împărțitorul?</b> Pe axă, pornești de la deîmpărțit și faci <b>sărituri înapoi</b> la fel de lungi ca împărțitorul, până ajungi la 0 (sau nu mai poți sări).</p>\n<p>Încearcă cu <b>96 : 24</b>: broasca pornește de la 96, setează săritura la 24 și apasă „−”. Numără săriturile: 96 → 72 → 48 → 24 → 0. Sunt <b>4 sărituri</b>: 96 : 24 = 4!</p>\n<p>Apoi încearcă cu 100 : 24: după 4 sărituri ajungi la 4 și nu mai poți sări. 4 este <b>restul</b>.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 100,
      "step": 24,
      "start": 96,
      "marks": [
       72,
       48,
       24,
       0
      ]
     }
    },
    {
     "label": "𓂀 Ca vechii egipteni (dublări)",
     "html": "<p>Vechii egipteni împărțeau folosind doar <b>dublările</b>! Pentru <b>864 : 24</b> scriau un tabel: 1 → 24, 2 → 48, 4 → 96, 8 → 192, 16 → 384, 32 → 768.</p>\n<p>Apoi căutau care rânduri adunate dau 864: <b>768 + 96 = 864</b>, adică rândurile <b>32</b> și <b>4</b>. Deci câtul este <b>32 + 4 = 36</b>!</p>\n<p>În widgetul de mai jos, care face „înmulțirea egipteană” 36 × 24, vezi chiar acest tabel: rândurile păstrate sunt cele care adunate dau 864.</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 36,
      "b": 24
     }
    },
    {
     "label": "📋 Tabelul multiplilor",
     "html": "<p>Dacă estimarea te sperie, înainte de a începe scrie <b>tabla înmulțirii împărțitorului</b>: așa nu mai trebuie să ghicești, trebuie doar să te uiți!</p>\n<p>Pentru a împărți la <b>24</b>:</p>\n<table>\n<tr><td>24 × 1 = 24</td><td>24 × 4 = 96</td><td>24 × 7 = 168</td></tr>\n<tr><td>24 × 2 = 48</td><td>24 × 5 = 120</td><td>24 × 8 = 192</td></tr>\n<tr><td>24 × 3 = 72</td><td>24 × 6 = 144</td><td>24 × 9 = 216</td></tr>\n</table>\n<p>Acum 86 : 24? Caut cel mai mare multiplu care nu depășește 86: <b>72</b> (× 3). Și 144 : 24? Există exact <b>144</b> (× 6). Cât: <b>36</b>.</p>\n<p>Truc rapid pentru a construi tabelul: adaugă de fiecare dată 24 la numărul precedent (24, 48, 72, 96…).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta împărțirii",
   "nodes": [
    {
     "id": "divisione",
     "label": "Împărțire",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Operație pentru a împărți în părți egale sau a grupa: deîmpărțit : împărțitor = cât.",
     "why": "S-a născut din nevoi practice: împărțirea recoltei, a rațiilor soldaților, a moștenirii. Egiptenii și babilonienii știau să împartă încă de acum 4000 de ani, primii cu dublări, ceilalți folosind tabele de numere inverse."
    },
    {
     "id": "inversa",
     "label": "Inversa înmulțirii",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "Dacă 36 × 24 = 864, atunci 864 : 24 = 36.",
     "why": "A împărți înseamnă a căuta factorul lipsă: 24 × ? = 864. De aceea cunoașterea bună a tablei înmulțirii este cheia împărțirii."
    },
    {
     "id": "termini",
     "label": "Deîmpărțit, împărțitor, cât, rest",
     "x": 50,
     "y": 28,
     "color": "#f59e0b",
     "html": "Cele patru nume ale împărțirii.",
     "why": "„Quoziente” (cât) vine din latinescul <i>quotiens</i>, „de câte ori”: de câte ori încape împărțitorul în deîmpărțit."
    },
    {
     "id": "resto",
     "label": "Rest < împărțitor",
     "x": 82,
     "y": 28,
     "color": "#ef4444",
     "html": "Ceea ce rămâne este întotdeauna mai mic decât împărțitorul.",
     "why": "Dacă restul ar fi egal sau mai mare decât împărțitorul, ar mai încăpea un grup întreg: câtul ar fi prea mic. Această idee stătea deja la baza calculelor lui <b>Euclid</b> (în jurul anului 300 î.Hr.), care folosea împărțirile cu rest în <i>Elementele</i> sale."
    },
    {
     "id": "stima",
     "label": "Estimare",
     "x": 18,
     "y": 58,
     "color": "#a855f7",
     "html": "A rotunji împărțitorul ca să ghicești cifra câtului.",
     "why": "Funcționează pentru că, rotunjind puțin împărțitorul, câtul se schimbă puțin. Cel mult trebuie să corectezi cu 1 sau 2: este un mod inteligent de a „încerca și corecta”."
    },
    {
     "id": "algoritmo",
     "label": "Algoritm în coloană",
     "x": 50,
     "y": 58,
     "color": "#0ea5e9",
     "html": "Iau cifrele, estimez, înmulțesc, scad, cobor.",
     "why": "Funcționează datorită <b>valorii poziționale</b>: se împarte mai întâi partea sutelor, apoi a zecilor, apoi a unităților. Metoda a ajuns în Europa cu cifrele indo-arabe; Fibonacci a explicat-o în <i>Liber Abaci</i> (1202) și în Italia a fost perfecționată în școlile de abac ale negustorilor."
    },
    {
     "id": "prova",
     "label": "Proba",
     "x": 82,
     "y": 58,
     "color": "#14b8a6",
     "html": "cât × împărțitor + rest = deîmpărțit.",
     "why": "Este chiar definiția împărțirii cu rest: deîmpărțit = împărțitor × cât + rest. Folosirea operației inverse este cea mai sigură verificare."
    },
    {
     "id": "invariantiva",
     "label": "Proprietatea invariantă",
     "x": 34,
     "y": 86,
     "color": "#64748b",
     "html": "× sau : deîmpărțitul și împărțitorul cu același număr, câtul nu se schimbă.",
     "why": "Dacă dublezi bomboanele și dublezi și copiii, fiecare primește tot același număr de bomboane! Este aceeași idee ca la fracțiile echivalente: 720/15 = 1440/30."
    },
    {
     "id": "zero",
     "label": "Niciodată la zero",
     "x": 66,
     "y": 86,
     "color": "#be185d",
     "html": "Împărțirea la zero nu are sens.",
     "why": "Niciun număr înmulțit cu 0 nu dă un număr diferit de 0, deci proba nu poate reuși niciodată. Matematicienii spun că împărțirea la zero este „imposibilă” sau „nedefinită”."
    }
   ],
   "edges": [
    [
     "divisione",
     "inversa",
     "este"
    ],
    [
     "divisione",
     "termini",
     "are"
    ],
    [
     "termini",
     "resto",
     "regulă"
    ],
    [
     "inversa",
     "stima",
     "ajută"
    ],
    [
     "stima",
     "algoritmo",
     "se folosește în"
    ],
    [
     "algoritmo",
     "prova",
     "se verifică cu"
    ],
    [
     "inversa",
     "prova",
     "se bazează pe"
    ],
    [
     "divisione",
     "invariantiva",
     "proprietate"
    ],
    [
     "divisione",
     "zero",
     "atenție"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: calculează",
   "questions": [
    {
     "type": "num",
     "q": "Cât face 672 : 32?",
     "answer": 21,
     "explain": "67 : 32 = 2 (64), rest 3; cobor 2 → 32 : 32 = 1. Cât 21."
    },
    {
     "type": "num",
     "q": "Folosește proprietatea invariantă: 900 : 25 = ?",
     "answer": 36,
     "explain": "× 4: 3600 : 100 = 36."
    },
    {
     "type": "mc",
     "q": "La 158 : 26 estimarea „160 : 30” dă 5. Câtul corect este…",
     "options": [
      "5",
      "6",
      "7"
     ],
     "answer": 1,
     "explain": "5 × 26 = 130, rest 28 ≥ 26: prea mic! 6 × 26 = 156, rest 2 ✅."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Deîmpărțit",
   "d": "Numărul care se împarte."
  },
  {
   "t": "Împărțitor",
   "d": "Numărul la care se împarte."
  },
  {
   "t": "Cât",
   "d": "Rezultatul împărțirii."
  },
  {
   "t": "Rest",
   "d": "Ceea ce rămâne; este întotdeauna mai mic decât împărțitorul."
  },
  {
   "t": "Estimare",
   "d": "Calcul aproximativ pentru a prevedea rezultatul."
  },
  {
   "t": "Proba",
   "d": "Verificarea rezultatului: cât × împărțitor + rest = deîmpărțit."
  },
  {
   "t": "Proprietatea invariantă",
   "d": "Înmulțind sau împărțind deîmpărțitul și împărțitorul cu același număr, câtul nu se schimbă."
  },
  {
   "t": "Împărțire exactă",
   "d": "Împărțire cu restul 0."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Cât face 336 : 14?",
    "answer": 24,
    "explain": "33 : 14 = 2 (28), rest 5; cobor 6 → 56 : 14 = 4. Cât 24."
   },
   {
    "type": "num",
    "q": "Cât face 945 : 45?",
    "answer": 21,
    "explain": "94 : 45 = 2 (90), rest 4; cobor 5 → 45 : 45 = 1. Cât 21."
   },
   {
    "type": "num",
    "q": "Care este restul lui 500 : 18?",
    "answer": 14,
    "explain": "500 : 18 = 27 rest 14 (27 × 18 = 486; 500 − 486 = 14)."
   },
   {
    "type": "mc",
    "q": "În 1.250 : 25 = 50, numărul 25 este…",
    "options": [
     "deîmpărțitul",
     "împărțitorul",
     "câtul"
    ],
    "answer": 1,
    "explain": "Numărul la care se împarte este împărțitorul."
   },
   {
    "type": "tf",
    "q": "Proba împărțirii se face cu înmulțirea.",
    "answer": true,
    "explain": "Cât × împărțitor + rest = deîmpărțit."
   },
   {
    "type": "tf",
    "q": "Dacă un copil găsește 300 : 40 = 6 rest 60, rezultatul este corect.",
    "answer": false,
    "explain": "Restul 60 este mai mare decât împărțitorul 40: câtul corect este 7 rest 20."
   },
   {
    "type": "mc",
    "q": "Care împărțire are același cât ca 480 : 16?",
    "options": [
     "240 : 8",
     "480 : 8",
     "240 : 16"
    ],
    "answer": 0,
    "explain": "Deîmpărțitul și împărțitorul împărțite amândouă la 2: proprietatea invariantă."
   },
   {
    "type": "order",
    "q": "Pune în ordine pașii împărțirii în coloană.",
    "items": [
     "Iau cifrele deîmpărțitului",
     "Estimez de câte ori încape împărțitorul",
     "Înmulțesc cifra cu împărțitorul",
     "Scad",
     "Cobor cifra următoare"
    ],
    "explain": "Iau, estimez, înmulțesc, scad, cobor: și o iau de la capăt."
   },
   {
    "type": "num",
    "q": "O școală are 380 de elevi și fiecare autocar duce 50 de persoane. Câte autocare trebuie ca să-i ducă pe toți?",
    "answer": 8,
    "explain": "380 : 50 = 7 rest 30: pentru cei 30 de elevi rămași mai trebuie un autocar, deci 8."
   },
   {
    "type": "num",
    "q": "Într-o bibliotecă sunt 1.008 cărți de pus în rafturi de câte 42 de cărți. Câte rafturi se umplu?",
    "answer": 24,
    "explain": "1.008 : 42 = 24 (42 × 24 = 1.008)."
   },
   {
    "type": "text",
    "q": "Cum se numește rezultatul împărțirii?",
    "answer": [
     "cât",
     "câtul"
    ],
    "explain": "Câtul."
   }
  ],
  "gen": [
   [
    "div2",
    3
   ]
  ]
 }
});

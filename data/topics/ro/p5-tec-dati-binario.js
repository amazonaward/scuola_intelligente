TOPIC('ro', {
 "id": "p5-tec-dati-binario",
 "title": "Date și cod binar",
 "intro": "Un computer îți poate arăta o poză, îți poate reda o melodie, îți poate scrie numele… și totuși înăuntrul lui cunoaște doar <b>două simboluri</b>: <b>0</b> și <b>1</b>. Cum face? Astăzi descoperim <b>codul binar</b>, <b>biții</b> și <b>octeții</b> (byte) și învățăm să scriem numere, litere și desene așa cum le „vede” un computer. 💻",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Ce sunt datele?",
   "html": "<p><b>Datele</b> sunt informații: un număr, un cuvânt, culoarea unui punct dintr-o poză, o notă muzicală, temperatura de azi.</p>\n<p>Computerul funcționează cu <b>electricitate</b>. Înăuntru se află miliarde de întrerupătoare minuscule, <b>tranzistoarele</b>, care pot fi doar în două stări:</p>\n<ul>\n<li>💡 <b>aprins</b> (trece curent) = <b>1</b></li>\n<li>⚫ <b>stins</b> (nu trece curent) = <b>0</b></li>\n</ul>\n<p>Fiecare 0 sau 1 se numește <b>bit</b> (de la <i>BInary digiT</i>, „cifră binară”). Este cea mai mică informație care există: un da sau un nu.</p>\n<p>Cu un singur bit se spune puțin (da/nu, aprins/stins). Dar punând <b>mulți biți la rând</b> se poate reprezenta <b>orice</b>!</p>"
  },
  {
   "type": "text",
   "title": "2. Câte combinații?",
   "html": "<p>Fiecare bit în plus <b>dublează</b> combinațiile posibile:</p>\n<table>\n<tr><th>Biți</th><th>Combinații</th><th>Câte sunt</th></tr>\n<tr><td>1</td><td>0 · 1</td><td>2</td></tr>\n<tr><td>2</td><td>00 · 01 · 10 · 11</td><td>4</td></tr>\n<tr><td>3</td><td>000 · 001 · 010 · 011 · 100 · 101 · 110 · 111</td><td>8</td></tr>\n<tr><td>4</td><td>…</td><td>16</td></tr>\n<tr><td><b>8</b></td><td>…</td><td><b>256</b></td></tr>\n</table>\n<p>Un grup de <b>8 biți</b> se numește <b>byte</b> (octet). Cu un byte se pot scrie <b>256</b> de valori diferite (de la 0 la 255): suficient pentru toate literele mari și mici, cifrele și semnele de punctuație!</p>"
  },
  {
   "type": "text",
   "title": "3. A număra în binar",
   "html": "<p>Noi numărăm în <b>baza 10</b>: folosim 10 cifre (0–9), iar fiecare poziție valorează de 10 ori cât cea din dreapta (unități, zeci, sute…).</p>\n<p>Computerul numără în <b>baza 2</b>: folosește 2 cifre (0 și 1), iar fiecare poziție valorează <b>dublul</b> celei din dreapta:</p>\n<table>\n<tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>\n</table>\n<p><b>Din binar în zecimal</b>: adună valorile pozițiilor în care este un <b>1</b>.</p>\n<p>Exemplu: <b>1101</b> ➜ 8 + 4 + 0 + 1 = <b>13</b>.</p>\n<p><b>Din zecimal în binar</b> (metoda împărțirilor la 2): împarți la 2 și scrii restul; continui până ajungi la 0; apoi citești resturile <b>de jos în sus</b>.</p>\n<p>Exemplu: 13 : 2 = 6 rest <b>1</b> · 6 : 2 = 3 rest <b>0</b> · 3 : 2 = 1 rest <b>1</b> · 1 : 2 = 0 rest <b>1</b> ➜ citesc de jos: <b>1101</b>. ✅</p>\n<p>Primele numere: 0 = 0 · 1 = 1 · 2 = 10 · 3 = 11 · 4 = 100 · 5 = 101 · 6 = 110 · 7 = 111 · 8 = 1000.</p>\n<p>⚠️ În binar „10” <b>nu</b> se citește „zece”, ci „unu-zero”, și valorează 2!</p>"
  },
  {
   "type": "svg",
   "title": "Becurile binare",
   "caption": "Fiecare bec aprins valorează numărul scris dedesubt. Aici sunt aprinse 8, 4 și 1: 8 + 4 + 1 = 13, adică 1101.",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#0f172a\"/>\n<text x=\"300\" y=\"34\" font-size=\"20\" text-anchor=\"middle\" fill=\"#f8fafc\" font-weight=\"bold\">Numărul 13 în binar</text>\n<g>\n<circle cx=\"120\" cy=\"105\" r=\"45\" fill=\"#facc15\"/><rect x=\"105\" y=\"148\" width=\"30\" height=\"20\" fill=\"#94a3b8\"/>\n<text x=\"120\" y=\"115\" font-size=\"30\" text-anchor=\"middle\" fill=\"#713f12\" font-weight=\"bold\">1</text>\n<text x=\"120\" y=\"200\" font-size=\"22\" text-anchor=\"middle\" fill=\"#facc15\" font-weight=\"bold\">8</text>\n</g>\n<g>\n<circle cx=\"240\" cy=\"105\" r=\"45\" fill=\"#facc15\"/><rect x=\"225\" y=\"148\" width=\"30\" height=\"20\" fill=\"#94a3b8\"/>\n<text x=\"240\" y=\"115\" font-size=\"30\" text-anchor=\"middle\" fill=\"#713f12\" font-weight=\"bold\">1</text>\n<text x=\"240\" y=\"200\" font-size=\"22\" text-anchor=\"middle\" fill=\"#facc15\" font-weight=\"bold\">4</text>\n</g>\n<g>\n<circle cx=\"360\" cy=\"105\" r=\"45\" fill=\"#334155\" stroke=\"#64748b\" stroke-width=\"3\"/><rect x=\"345\" y=\"148\" width=\"30\" height=\"20\" fill=\"#94a3b8\"/>\n<text x=\"360\" y=\"115\" font-size=\"30\" text-anchor=\"middle\" fill=\"#94a3b8\" font-weight=\"bold\">0</text>\n<text x=\"360\" y=\"200\" font-size=\"22\" text-anchor=\"middle\" fill=\"#64748b\" font-weight=\"bold\">2</text>\n</g>\n<g>\n<circle cx=\"480\" cy=\"105\" r=\"45\" fill=\"#facc15\"/><rect x=\"465\" y=\"148\" width=\"30\" height=\"20\" fill=\"#94a3b8\"/>\n<text x=\"480\" y=\"115\" font-size=\"30\" text-anchor=\"middle\" fill=\"#713f12\" font-weight=\"bold\">1</text>\n<text x=\"480\" y=\"200\" font-size=\"22\" text-anchor=\"middle\" fill=\"#facc15\" font-weight=\"bold\">1</text>\n</g>\n<text x=\"300\" y=\"240\" font-size=\"22\" text-anchor=\"middle\" fill=\"#f8fafc\" font-weight=\"bold\">8 + 4 + 0 + 1 = 13</text>\n</svg>"
  },
  {
   "type": "widget",
   "title": "Fiecare poziție valorează dublul",
   "widget": "numberLine",
   "caption": "Pe dreaptă sunt marcate „valorile” pozițiilor binare: 1, 2, 4, 8, 16, 32, 64. Vezi cum fiecare salt este dublul celui precedent!",
   "options": {
    "min": 0,
    "max": 64,
    "step": 1,
    "marks": [
     1,
     2,
     4,
     8,
     16,
     32,
     64
    ]
   }
  },
  {
   "type": "quiz",
   "title": "Mini-test: biți și numere",
   "questions": [
    {
     "type": "num",
     "q": "Cât valorează în zecimal numărul binar 101?",
     "answer": 5,
     "tol": 0,
     "explain": "4 + 0 + 1 = 5."
    },
    {
     "type": "num",
     "q": "Câți biți are un byte?",
     "answer": 8,
     "tol": 0,
     "unit": "bit",
     "explain": "1 byte = 8 biți."
    },
    {
     "type": "mc",
     "q": "Cum se scrie 6 în binar?",
     "options": [
      "110",
      "101",
      "111"
     ],
     "answer": 0,
     "explain": "4 + 2 + 0 = 6 ➜ 110."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Litere, imagini și sunete",
   "html": "<p><b>🔤 Literele</b>: fiecare caracter are un număr, stabilit de un cod la fel pentru toate computerele. Primul cod celebru este <b>ASCII</b> (1963): <b>A = 65</b>, B = 66, C = 67… a = 97, spațiu = 32. Numărul este apoi scris în binar: A = 65 = <b>01000001</b>. Astăzi se folosește <b>Unicode</b>, care conține mai mult de 150.000 de caractere din toate limbile lumii, inclusiv emoji 😀!</p>\n<p><b>🖼️ Imaginile</b>: o poză este împărțită într-o grilă de pătrățele, <b>pixelii</b>. Pentru fiecare pixel, computerul memorează culoarea prin trei numere: cât de mult <b>roșu</b>, cât de mult <b>verde</b> și cât de mult <b>albastru</b> (<b>RGB</b>), fiecare de la 0 la 255, adică un byte pentru fiecare. Amestecându-le rezultă mai mult de 16 milioane de culori!</p>\n<p><b>🎵 Sunetele</b>: microfonul măsoară de mii de ori pe secundă cât vibrează aerul (pentru muzica de pe CD-uri: de 44.100 de ori pe secundă) și salvează fiecare măsurătoare ca un număr.</p>\n<p>Totul, până la urmă, devine un șir foarte lung de 0 și 1.</p>"
  },
  {
   "type": "svg",
   "title": "Un desen făcut din biți",
   "caption": "Fiecare rând este un byte: 1 = pătrățel colorat, 0 = alb. Așa, într-un mod simplificat, memorează computerul o imagine alb-negru.",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<g font-size=\"16\" font-family=\"monospace\" fill=\"#0f172a\">\n<text x=\"20\" y=\"48\">0 1 1 0 0 1 1 0</text>\n<text x=\"20\" y=\"78\">1 1 1 1 1 1 1 1</text>\n<text x=\"20\" y=\"108\">1 1 1 1 1 1 1 1</text>\n<text x=\"20\" y=\"138\">1 1 1 1 1 1 1 1</text>\n<text x=\"20\" y=\"168\">0 1 1 1 1 1 1 0</text>\n<text x=\"20\" y=\"198\">0 0 1 1 1 1 0 0</text>\n<text x=\"20\" y=\"228\">0 0 0 1 1 0 0 0</text>\n<text x=\"20\" y=\"258\">0 0 0 0 0 0 0 0</text>\n</g>\n<text x=\"225\" y=\"150\" font-size=\"34\" fill=\"#64748b\">➜</text>\n<g stroke=\"#cbd5e1\" stroke-width=\"1\">\n<rect x=\"300\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"420\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"450\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"30\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n<rect x=\"300\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"330\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\"/>\n<rect x=\"300\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"330\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"90\" width=\"30\" height=\"30\" fill=\"#ef4444\"/>\n<rect x=\"300\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"330\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"120\" width=\"30\" height=\"30\" fill=\"#ef4444\"/>\n<rect x=\"300\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"360\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"510\" y=\"150\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n<rect x=\"300\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"360\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"390\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"480\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"510\" y=\"180\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n<rect x=\"300\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"360\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"390\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"420\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ef4444\"/><rect x=\"450\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"480\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"510\" y=\"210\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n<rect x=\"300\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"330\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"360\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"390\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"420\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"450\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"480\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/><rect x=\"510\" y=\"240\" width=\"30\" height=\"30\" fill=\"#ffffff\"/>\n</g>\n</svg>"
  },
  {
   "type": "text",
   "title": "5. Cât „cântăresc” datele?",
   "html": "<p>Așa cum metrii au kilometri, și byte-ii au multipli:</p>\n<table>\n<tr><th>Unitatea</th><th>Cât valorează (aproximativ)</th><th>Ce încape</th></tr>\n<tr><td><b>1 byte</b> (B)</td><td>8 biți</td><td>o literă</td></tr>\n<tr><td><b>1 kilobyte</b> (kB)</td><td>1.000 de byte</td><td>jumătate de pagină de text</td></tr>\n<tr><td><b>1 megabyte</b> (MB)</td><td>1.000 kB = 1 milion de byte</td><td>o carte întreagă doar cu text, sau o poză</td></tr>\n<tr><td><b>1 gigabyte</b> (GB)</td><td>1.000 MB = 1 miliard de byte</td><td>circa o oră de film</td></tr>\n<tr><td><b>1 terabyte</b> (TB)</td><td>1.000 GB</td><td>sute de mii de poze</td></tr>\n</table>\n<p>Notă: uneori, în informatică, multiplii valorează <b>1.024</b> în loc de 1.000 (pentru că 1024 = 2<sup>10</sup>). Deocamdată e suficient să ții minte „circa o mie”.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: scrie-ți numele în binar",
   "html": "<p>Să încercăm cu <b>CIAO</b> (salut în italiană). Folosim codul ASCII al majusculelor (A = 65, B = 66 … fiecare literă +1):</p>\n<table>\n<tr><th>Litera</th><th>Cod</th><th>Binar (8 biți)</th></tr>\n<tr><td>C</td><td>67</td><td>01000011</td></tr>\n<tr><td>I</td><td>73</td><td>01001001</td></tr>\n<tr><td>A</td><td>65</td><td>01000001</td></tr>\n<tr><td>O</td><td>79</td><td>01001111</td></tr>\n</table>\n<p>Verifică C: 64 + 2 + 1 = 67 ✅. Toate majusculele încep cu <b>010</b>; celelalte 5 cifre indică poziția în alfabet (C este a 3-a literă: 00011 = 3).</p>\n<p>Acum încearcă cu numele tău! Astfel 4 litere „cântăresc” 4 byte = 32 de biți.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu practic: un joc cu cartonașe binare",
   "html": "<p>Ia 5 cartonașe și desenează pe ele buline: <b>16, 8, 4, 2, 1</b>. Pune-le la rând cu bulinele la vedere (1) sau întoarse (0).</p>\n<ul>\n<li>Vrei să faci <b>10</b>? Întoarce cu fața în sus doar 8 și 2 ➜ <b>01010</b>.</li>\n<li>Vrei să faci <b>21</b>? 16 + 4 + 1 ➜ <b>10101</b>.</li>\n<li>Care este cel mai mare număr pe care îl poți face? Toate cu fața în sus: 16 + 8 + 4 + 2 + 1 = <b>31</b> = 11111.</li>\n</ul>\n<p>Această activitate vine de la <b>CS Unplugged</b>, un proiect neozeelandez pentru a învăța informatica <b>fără computer</b>.</p>"
  },
  {
   "type": "remember",
   "title": "De ținut minte",
   "html": "<ul>\n<li><b>Bit</b> = 0 sau 1, cea mai mică informație. <b>Byte</b> = 8 biți = 256 de valori.</li>\n<li>Binar ➜ zecimal: adună valorile (1, 2, 4, 8, 16…) unde este 1.</li>\n<li>Zecimal ➜ binar: împarte la 2 și citește resturile de jos în sus.</li>\n<li>Litere = coduri (ASCII/Unicode); imagini = pixeli cu RGB; sunete = măsurători ale vibrației.</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… binarul este mai vechi decât computerul?",
   "html": "<p>Matematicianul german <b>Gottfried Wilhelm Leibniz</b> a descris sistemul binar în <b>1703</b>, cu mai mult de 200 de ani înainte de primul computer! Era fascinat de faptul că doar cu 0 și 1 se pot scrie toate numerele. În 1854, englezul <b>George Boole</b> a inventat o algebră făcută doar din „adevărat” și „fals”, iar în 1937 americanul <b>Claude Shannon</b> și-a dat seama că ea se poate construi cu circuite electrice: se născuse ideea computerului digital.</p>"
  },
  {
   "type": "curiosity",
   "title": "Știai că… și alfabetul Braille este un cod binar?",
   "html": "<p>Alfabetul <b>Braille</b>, inventat în 1824 de francezul Louis Braille (rămas orb în copilărie), folosește celule de <b>6 puncte</b> în relief: fiecare punct fie există (1), fie nu (0). Câte combinații? 2 × 2 × 2 × 2 × 2 × 2 = <b>64</b>, suficient pentru toate literele, cifrele și semnele de punctuație. Louis Braille avea doar 15 ani!</p>"
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege",
   "intro": "Binarul pare ciudat doar pentru că suntem obișnuiți să numărăm cu 10 degete. Iată alte căi.",
   "tabs": [
    {
     "label": "🖐️ Numărat pe degete",
     "html": "<p>Cu degetele unei mâini, de obicei, ajungi la 5. Dar dacă fiecare deget este un bit (ridicat = 1, coborât = 0) și valorează dublul celui precedent:</p>\n<ul>\n<li>degetul mare = 1 · arătătorul = 2 · mijlociul = 4 · inelarul = 8 · degetul mic = 16</li>\n</ul>\n<p>Cu <b>o mână</b> ajungi la <b>31</b>, cu două mâini la <b>1023</b>! Încearcă: pentru 3 ridică degetul mare și arătătorul; pentru 5, degetul mare și mijlociul.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fef9c3\"/>\n<rect x=\"190\" y=\"120\" width=\"220\" height=\"90\" rx=\"40\" fill=\"#fdba74\"/>\n<rect x=\"150\" y=\"110\" width=\"40\" height=\"70\" rx=\"20\" fill=\"#fdba74\" transform=\"rotate(-35 170 145)\"/>\n<rect x=\"205\" y=\"30\" width=\"36\" height=\"100\" rx=\"18\" fill=\"#fdba74\"/>\n<rect x=\"250\" y=\"15\" width=\"36\" height=\"115\" rx=\"18\" fill=\"#fdba74\"/>\n<rect x=\"295\" y=\"25\" width=\"36\" height=\"105\" rx=\"18\" fill=\"#fdba74\"/>\n<rect x=\"340\" y=\"50\" width=\"34\" height=\"80\" rx=\"17\" fill=\"#fdba74\"/>\n<g font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#7c2d12\">\n<text x=\"140\" y=\"110\">1</text><text x=\"223\" y=\"25\">2</text><text x=\"268\" y=\"12\">4</text><text x=\"313\" y=\"20\">8</text><text x=\"357\" y=\"45\">16</text>\n</g>\n<text x=\"500\" y=\"110\" font-size=\"18\" text-anchor=\"middle\" fill=\"#7c2d12\" font-weight=\"bold\">toate sus =</text>\n<text x=\"500\" y=\"140\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">31</text>\n</svg>"
    },
    {
     "label": "🧮 Ca abacul",
     "html": "<p>Cunoști abacul: în coloana unităților, când ajungi la 10 bile, le scoți și pui 1 în coloana zecilor. Binarul este la fel, dar „schimbul” are loc la <b>2</b>: de îndată ce ai 2 bile într-o coloană, le scoți și pui 1 în coloana din stânga.</p>\n<p>Încearcă cu abacul de mai jos să numeri în baza 10 și imaginează-ți că fiecare coloană poate avea doar 0 sau 1 bilă: iată binarul!</p>",
     "widget": "abacus",
     "options": {
      "columns": [
       "S",
       "Z",
       "U"
      ],
      "value": 101
     }
    },
    {
     "label": "🔦 Mesaje cu lanterna",
     "html": "<p>Și alte coduri folosesc doar două semnale:</p>\n<ul>\n<li><b>Codul Morse</b> (Samuel Morse, anii '30 ai secolului al XIX-lea): punct și linie. SOS = · · · — — — · · ·</li>\n<li><b>I Ching</b> (China antică, acum circa 3000 de ani): linii întregi și întrerupte în grupuri de 6 = 64 de hexagrame. Leibniz le-a studiat și a văzut în ele binarul său!</li>\n<li><b>Pavilioane navale și fum</b>: există / nu există.</li>\n</ul>\n<p>Încearcă cu un prieten: cu lanterna, lumină lungă = 1, lumină scurtă = 0. Trimiteți-vă un număr!</p>"
    },
    {
     "label": "🔗 Potrivește",
     "html": "<p>Potrivește fiecare număr binar cu valoarea lui zecimală.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "1",
        "1"
       ],
       [
        "10",
        "2"
       ],
       [
        "11",
        "3"
       ],
       [
        "100",
        "4"
       ],
       [
        "111",
        "7"
       ],
       [
        "1000",
        "8"
       ],
       [
        "1010",
        "10"
       ],
       [
        "1111",
        "15"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Hartă: de la bit la computer",
   "nodes": [
    {
     "id": "bit",
     "label": "Bit (0/1)",
     "x": 50,
     "y": 8,
     "color": "#3b82f6",
     "html": "Cea mai mică unitate de informație.",
     "why": "Numele <i>bit</i> (binary digit) a fost propus de matematicianul John Tukey și folosit de <b>Claude Shannon</b> în 1948 în articolul care a întemeiat „teoria informației”."
    },
    {
     "id": "trans",
     "label": "Tranzistor",
     "x": 15,
     "y": 30,
     "color": "#64748b",
     "html": "Întrerupător electronic: aprins sau stins.",
     "why": "A fost inventat în <b>1947</b> la Bell Labs (SUA) de Bardeen, Brattain și Shockley, care au câștigat Premiul Nobel. Înainte se foloseau tuburi mari cât becurile. Astăzi un procesor conține miliarde de tranzistoare."
    },
    {
     "id": "base2",
     "label": "Baza 2",
     "x": 50,
     "y": 30,
     "color": "#a855f7",
     "html": "Fiecare poziție valorează dublul: 1, 2, 4, 8, 16…",
     "why": "Descrisă de <b>Leibniz</b> în 1703. Se folosește în computere pentru că a distinge doar două stări electrice (există curent / nu există) este mult mai sigur decât a distinge zece."
    },
    {
     "id": "boole",
     "label": "Logica lui Boole",
     "x": 85,
     "y": 30,
     "color": "#ef4444",
     "html": "Adevărat/fals, AND, OR, NOT.",
     "why": "<b>George Boole</b> (1854) a transformat raționamentul în calcule cu 0 și 1. În 1937, <b>Claude Shannon</b>, la 21 de ani, a demonstrat că circuitele cu întrerupătoare pot face aceste calcule."
    },
    {
     "id": "byte",
     "label": "Byte = 8 biți",
     "x": 30,
     "y": 55,
     "color": "#22c55e",
     "html": "256 de combinații: un caracter.",
     "why": "Cuvântul a fost inventat de Werner Buchholz la IBM în 1956. Cei 8 biți au devenit standard odată cu computerul IBM System/360 (1964), pentru că erau suficienți pentru litere, numere și simboluri."
    },
    {
     "id": "ascii",
     "label": "Coduri: ASCII, Unicode",
     "x": 12,
     "y": 80,
     "color": "#16a34a",
     "html": "Fiecare caracter are un număr.",
     "why": "<b>ASCII</b> (1963) a fost creat în SUA ca să poată computere diferite să-și schimbe texte între ele. Conținea doar alfabetul englez, așa că în 1991 s-a născut <b>Unicode</b>, pentru toate limbile lumii."
    },
    {
     "id": "pixel",
     "label": "Pixeli și RGB",
     "x": 42,
     "y": 80,
     "color": "#f97316",
     "html": "Imaginile ca grilă de culori.",
     "why": "„Pixel” vine de la <i>picture element</i>. Culorile se fac cu roșu, verde și albastru pentru că ochiul uman are trei tipuri de „senzori” (conuri) sensibili tocmai la aceste culori."
    },
    {
     "id": "units",
     "label": "kB, MB, GB, TB",
     "x": 75,
     "y": 62,
     "color": "#eab308",
     "html": "Multiplii byte-ului.",
     "why": "Se folosesc prefixele Sistemului Internațional (kilo = mie, mega = milion, giga = miliard). În informatică uneori valorează puteri ale lui 2 (1024): de aceea în 1998 au apărut denumirile kibibyte, mebibyte…"
    },
    {
     "id": "data",
     "label": "Date",
     "x": 75,
     "y": 88,
     "color": "#0ea5e9",
     "html": "Texte, poze, sunete, filme: totul devine numere.",
     "why": "A transforma o informație în numere se numește <b>digitalizare</b> (de la <i>digit</i>, cifră). Odată devenite numere, datele pot fi copiate fără erori, comprimate și trimise în toată lumea."
    }
   ],
   "edges": [
    [
     "trans",
     "bit",
     "memorează"
    ],
    [
     "base2",
     "bit",
     "folosește"
    ],
    [
     "boole",
     "bit",
     "calculează cu"
    ],
    [
     "bit",
     "byte",
     "8 formează"
    ],
    [
     "byte",
     "ascii",
     "codifică"
    ],
    [
     "byte",
     "pixel",
     "colorează"
    ],
    [
     "byte",
     "units",
     "se măsoară în"
    ],
    [
     "units",
     "data",
     "cantitate de"
    ],
    [
     "pixel",
     "data",
     "este un tip de"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-test: coduri și măsuri",
   "questions": [
    {
     "type": "mc",
     "q": "Ce înseamnă RGB?",
     "options": [
      "Roșu, Galben, Alb",
      "Roșu, Verde, Albastru (Red, Green, Blue)",
      "Rapid, Mare, Binar"
     ],
     "answer": 1,
     "explain": "Red, Green, Blue: cele trei culori care se amestecă pentru fiecare pixel."
    },
    {
     "type": "tf",
     "q": "1 megabyte este mai mare decât 1 gigabyte.",
     "answer": false,
     "explain": "1 GB ≈ 1000 MB."
    },
    {
     "type": "num",
     "q": "Câte combinații se pot face cu 3 biți?",
     "answer": 8,
     "tol": 0,
     "explain": "2 × 2 × 2 = 8."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Dată",
   "d": "O informație (număr, text, imagine, sunet) care poate fi memorată."
  },
  {
   "t": "Bit",
   "d": "Cifră binară: 0 sau 1."
  },
  {
   "t": "Byte",
   "d": "Grup de 8 biți; poate avea 256 de valori."
  },
  {
   "t": "Cod binar",
   "d": "Sistem care reprezintă informațiile doar cu 0 și 1."
  },
  {
   "t": "Baza 2",
   "d": "Sistem de numerație cu două cifre, în care fiecare poziție valorează dublul celei precedente."
  },
  {
   "t": "Tranzistor",
   "d": "Întrerupător electronic minuscul, „cărămida” computerelor."
  },
  {
   "t": "ASCII / Unicode",
   "d": "Coduri care atribuie un număr fiecărui caracter."
  },
  {
   "t": "Pixel",
   "d": "Cel mai mic pătrățel de culoare dintr-o imagine digitală."
  },
  {
   "t": "RGB",
   "d": "Roșu, verde, albastru: cele trei culori de bază ale imaginilor de pe ecran."
  },
  {
   "t": "A digitaliza",
   "d": "A transforma o informație în numere pe care computerul le poate folosi."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Cât valorează în zecimal numărul binar 1010?",
    "answer": 10,
    "tol": 0,
    "explain": "8 + 0 + 2 + 0 = 10."
   },
   {
    "type": "num",
    "q": "Cât valorează în zecimal numărul binar 11111?",
    "answer": 31,
    "tol": 0,
    "explain": "16 + 8 + 4 + 2 + 1 = 31."
   },
   {
    "type": "text",
    "q": "Scrie 9 în binar.",
    "answer": [
     "1001",
     "00001001"
    ],
    "explain": "9 = 8 + 1 ➜ 1001."
   },
   {
    "type": "mc",
    "q": "Câte valori diferite poate avea un byte?",
    "options": [
     "8",
     "100",
     "256"
    ],
    "answer": 2,
    "explain": "2 la puterea a opta = 256 (de la 0 la 255)."
   },
   {
    "type": "tf",
    "q": "Computerul folosește binarul pentru că tranzistoarele au două stări: aprins și stins.",
    "answer": true,
    "explain": "Două stări electrice sunt ușor de distins fără erori."
   },
   {
    "type": "order",
    "q": "Pune în ordine de la cel mai mic la cel mai mare.",
    "items": [
     "bit",
     "byte",
     "kilobyte",
     "megabyte",
     "gigabyte"
    ],
    "explain": "bit < byte (8 biți) < kB < MB < GB."
   },
   {
    "type": "mc",
    "q": "În codul ASCII litera A valorează…",
    "options": [
     "1",
     "65",
     "100"
    ],
    "answer": 1,
    "explain": "A = 65 = 01000001."
   },
   {
    "type": "mc",
    "q": "Cine a descris sistemul binar în 1703?",
    "options": [
     "Leibniz",
     "Galilei",
     "Leonardo da Vinci"
    ],
    "answer": 0,
    "explain": "Gottfried Wilhelm Leibniz."
   },
   {
    "type": "mc",
    "q": "O poză digitală este făcută din…",
    "options": [
     "pixeli",
     "byte muzicali",
     "tranzistoare colorate"
    ],
    "answer": 0,
    "explain": "O grilă de pixeli, fiecare cu culoarea lui RGB."
   },
   {
    "type": "num",
    "q": "În binar, cât valorează poziția din stânga lui 16?",
    "answer": 32,
    "tol": 0,
    "explain": "Fiecare poziție valorează dublul: 16 × 2 = 32."
   },
   {
    "type": "tf",
    "q": "În binar „10” valorează zece.",
    "answer": false,
    "explain": "În binar 10 = 2 (un 2 și zero de 1)."
   },
   {
    "type": "mc",
    "q": "Braille folosește celule de 6 puncte. Câte combinații există?",
    "options": [
     "12",
     "36",
     "64"
    ],
    "answer": 2,
    "explain": "2 la puterea a șasea = 64."
   }
  ],
  "gen": [
   [
    "power",
    2
   ]
  ]
 }
});

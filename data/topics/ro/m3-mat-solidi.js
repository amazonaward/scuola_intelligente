TOPIC('ro', {
 "id": "m3-mat-solidi",
 "title": "Corpurile geometrice: aria și volumul",
 "intro": "Cutii, doze, conuri de înghețată, mingi: suntem înconjurați de corpuri geometrice. Vom învăța să le recunoaștem, să calculăm cât material este necesar pentru a le construi (<b>aria</b>) și cât spațiu ocupă (<b>volumul</b>).",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Poliedre și corpuri de rotație",
   "html": "<p>Un <b>corp geometric</b> este o figură geometrică cu trei dimensiuni: lungime, lățime, înălțime. Se împart în două mari familii:</p><ul><li><b>Poliedrele</b>: delimitate doar de poligoane (<b>fețele</b>). Fețele se întâlnesc în <b>muchii</b>, muchiile în <b>vârfuri</b>. Exemple: cubul, paralelipipedul, prisma, piramida.</li><li><b>Corpurile de rotație</b>: se obțin rotind o figură plană în jurul unei axe. Au suprafețe curbe. Exemple: cilindrul (dreptunghi care se rotește), conul (triunghi dreptunghic care se rotește), sfera (semicerc care se rotește).</li></ul>"
  },
  {
   "type": "3d",
   "title": "Explorează corpurile în 3D",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "shapes": [
     "cube",
     "box",
     "prism",
     "pyramid",
     "cylinder",
     "cone",
     "sphere"
    ],
    "labels": true,
    "color": "#60a5fa"
   },
   "caption": "Rotește fiecare corp cu degetul sau cu mouse-ul. Numără fețele, muchiile și vârfurile poliedrelor."
  },
  {
   "type": "remember",
   "title": "Relația lui Euler",
   "html": "<p>În orice poliedru convex este valabil: <b>F + V − M = 2</b> (fețe + vârfuri − muchii).</p><p>Cub: 6 + 8 − 12 = 2 ✔ &nbsp; Piramidă cu baza pătrată: 5 + 5 − 8 = 2 ✔</p>"
  },
  {
   "type": "text",
   "title": "2. Aria și volumul: care este diferența?",
   "html": "<ul><li><b>Aria laterală</b> (A<sub>l</sub>) este aria fețelor laterale.</li><li><b>Aria totală</b> (A<sub>t</sub>) este A<sub>l</sub> + aria bazelor. Se măsoară în cm², m²…</li><li><b>Volumul</b> (V) este spațiul ocupat. Se măsoară în cm³, dm³, m³.</li></ul><p>Amintește-ți echivalențele: <b>1 dm³ = 1 litru</b>; 1 m³ = 1000 dm³ = 1000 litri; 1 cm³ = 1 ml.</p><p>Pentru a calcula aria este util să ne imaginăm <b>desfășurarea plană</b> a corpului: îl „deschidem” și îl întindem pe masă.</p>"
  },
  {
   "type": "svg",
   "title": "Desfășurarea cubului și a cilindrului",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#ffffff\"/><g fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"80\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"20\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"140\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"200\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"150\" width=\"60\" height=\"60\"/></g><text x=\"140\" y=\"250\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cub: 6 pătrate egale</text><text x=\"140\" y=\"275\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">S<tspan font-size=\"12\" dy=\"4\">t</tspan><tspan dy=\"-4\"> = 6 · s²</tspan></text><g stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"330\" y=\"95\" width=\"220\" height=\"90\" fill=\"#fed7aa\"/><circle cx=\"440\" cy=\"60\" r=\"35\" fill=\"#fdba74\"/><circle cx=\"440\" cy=\"220\" r=\"35\" fill=\"#fdba74\"/></g><text x=\"440\" y=\"145\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\">lungime = 2πr (cercul bazei)</text><text x=\"560\" y=\"145\" font-size=\"16\" font-family=\"sans-serif\">h</text><text x=\"440\" y=\"290\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Cilindru: 1 dreptunghi + 2 discuri</text></svg>",
   "caption": "Desfășurarea plană: cubul se deschide în 6 pătrate, cilindrul într-un dreptunghi (suprafața laterală) și două discuri."
  },
  {
   "type": "alternatives",
   "title": "Alte moduri de a înțelege: de ce formulele sunt așa",
   "intro": "Formulele volumelor nu trebuie doar învățate pe de rost: pot fi „văzute” și chiar atinse.",
   "tabs": [
    {
     "label": "🪙 Principiul lui Cavalieri",
     "html": "<p>Ia o stivă dreaptă de monede și apoi împinge-o într-o parte: devine strâmbă, dar monedele sunt aceleași, deci <b>volumul nu se schimbă</b>. Bonaventura Cavalieri (1635), elev al lui Galilei, a transformat asta într-un principiu: <b>dacă două corpuri au aceeași înălțime și, la fiecare înălțime, secțiuni cu aceeași arie, au același volum</b>. De aceea o prismă oblică are același volum cu una dreaptă: V = A<sub>bază</sub> × h.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><ellipse cx=\"150\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"400\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"420\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"438\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"453\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"463\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"469\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"471\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"468\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"462\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"454\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"150\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Stiva dreaptă</text><text x=\"440\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Stiva strâmbă</text><text x=\"300\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">Aceleași monede = același volum</text></svg>"
    },
    {
     "label": "📐 Desfășurări plane",
     "html": "<p>Taie corpul de-a lungul unor muchii și deschide-l pe masă: obții <b>desfășurarea</b>. Aria desfășurării este <b>aria totală</b>. Cilindrul devine un dreptunghi (lung cât lungimea cercului, 2πr) plus două discuri; conul un sector de disc plus un disc.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/><g transform=\"translate(20,40)\" stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#bfdbfe\"><rect x=\"50\" y=\"0\" width=\"50\" height=\"50\"/><rect x=\"0\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"100\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"150\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"100\" width=\"50\" height=\"50\"/></g><text x=\"120\" y=\"230\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Cub: 6 pătrate</text><g transform=\"translate(260,30)\" stroke=\"#166534\" stroke-width=\"2\" fill=\"#bbf7d0\"><circle cx=\"60\" cy=\"25\" r=\"25\"/><rect x=\"0\" y=\"50\" width=\"157\" height=\"80\"/><circle cx=\"60\" cy=\"155\" r=\"25\"/></g><text x=\"340\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Cilindru: dreptunghi</text><text x=\"340\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">lung de 2πr + 2 discuri</text><g transform=\"translate(470,40)\" stroke=\"#9a3412\" stroke-width=\"2\" fill=\"#fed7aa\"><path d=\"M60,0 L0,110 A125,125 0 0 0 120,110 Z\"/><circle cx=\"60\" cy=\"158\" r=\"28\"/></g><text x=\"530\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Con: sector</text><text x=\"530\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">de disc + disc</text></svg>"
    },
    {
     "label": "💧 Cu apă",
     "html": "<p>Ia un con și un cilindru de plastic cu <b>aceeași bază și aceeași înălțime</b>. Umple conul cu apă și toarn-o în cilindru: sunt necesare exact <b>3 conuri</b> ca să-l umpli. Iată de ce V<sub>con</sub> = πr²h : 3. Același lucru este valabil pentru piramidă și prismă. Arhimede a descoperit și că sfera are <b>2/3</b> din volumul cilindrului în care este înscrisă.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><g transform=\"translate(60,40)\"><polygon points=\"0,0 120,0 60,180\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">con plin cu apă</text></g><text x=\"235\" y=\"140\" font-size=\"28\" fill=\"#b91c1c\" font-weight=\"bold\">× 3 =</text><g transform=\"translate(340,40)\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#93c5fd\" opacity=\".85\"/><line x1=\"0\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><line x1=\"0\" y1=\"120\" x2=\"120\" y2=\"120\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">cilindru plin</text></g><text x=\"520\" y=\"100\" font-size=\"15\" fill=\"#1f2937\">aceeași bază</text><text x=\"520\" y=\"125\" font-size=\"15\" fill=\"#1f2937\">aceeași</text><text x=\"520\" y=\"148\" font-size=\"15\" fill=\"#1f2937\">înălțime</text></svg>"
    },
    {
     "label": "🧊 Cubulețe 3D",
     "html": "<p>Volumul este <b>numărul de cubulețe unitare</b> care umplu corpul. Un paralelipiped 4 × 3 × 2 conține 4 × 3 = 12 cubulețe pe strat și sunt 2 straturi: 24 de cubulețe. Schimbă măsurile cu cursoarele și numără!</p>",
     "scene": "blocks",
     "options": {
      "mode": "volume",
      "a": 4,
      "b": 3,
      "c": 2
     }
    },
    {
     "label": "🔺 3 piramide = 1 cub",
     "html": "<p>Un cub poate fi împărțit în <b>3 piramide egale</b> cu baza pătrată, toate cu vârful în același colț al cubului. Fiecare are deci o treime din volumul cubului: V = l² × l : 3. Rotește piramida și imaginează-ți că pui trei la un loc.</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 4,
      "h": 1.4,
      "labels": true
     }
    },
    {
     "label": "🇨🇳 Principiul lui Zu Geng (China)",
     "html": "<p>Cu mai bine de <b>o mie de ani înainte</b> de Cavalieri, în <b>China</b>, matematicianul <b>Zu Geng</b> (secolele V–VI d.Hr., fiul celebrului Zu Chongzhi) a scris același principiu: <b>dacă două corpuri au, la fiecare înălțime, secțiuni cu aceeași arie, volumele lor nu pot fi diferite</b>. În China azi se numește <b>principiul lui Zu Geng</b>.</p><p>Cu această idee Zu Geng a aflat <b>volumul sferei</b>. Iată raționamentul, pe scurt:</p><ol><li>Încă <b>Liu Hui</b> (secolul al III-lea) își imaginase doi cilindri de rază r care se intersectează în interiorul unui cub cu latura 2r: partea comună se numește <b>„dublul umbrelă pătrată”</b> (牟合方盖). Sfera se află în interiorul dublei umbrele.</li><li>Tăind la orice înălțime, secțiunea sferei este un <b>disc</b> înscris în secțiunea dublei umbrele, care este un <b>pătrat</b>. Discul și pătratul în care este înscris sunt mereu în raportul <b>π : 4</b>. Deci și: V<sub>sferă</sub> : V<sub>umbrelă</sub> = π : 4.</li><li>Zu Geng, cu principiul său, a demonstrat că dubla umbrelă ocupă <b>2/3 din cub</b>: 2/3 × (2r)³ = 16/3 r³.</li><li>Atunci V<sub>sferă</sub> = π/4 × 16/3 r³ = <b>4/3 π r³</b>, aceeași formulă pe care o folosești și tu!</li></ol>",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"290\" fill=\"#f8fafc\"/><rect x=\"60\" y=\"40\" width=\"220\" height=\"220\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><circle cx=\"170\" cy=\"150\" r=\"110\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"170\" y=\"155\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">disc</text><text x=\"170\" y=\"32\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" text-anchor=\"middle\" font-weight=\"bold\">pătrat</text><text x=\"310\" y=\"70\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Secțiunea la o anumită înălțime:</text><text x=\"310\" y=\"100\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e3a8a\">• a sferei → un disc</text><text x=\"310\" y=\"124\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#92400e\">• a „dublei umbrele”</text><text x=\"310\" y=\"146\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#92400e\">   → pătratul din jur</text><text x=\"310\" y=\"186\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">La fiecare înălțime:</text><text x=\"310\" y=\"212\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">disc : pătrat = π : 4</text><text x=\"310\" y=\"242\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">deci și volumele</text><text x=\"310\" y=\"264\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">sunt în raportul π : 4</text></svg>"
    },
    {
     "label": "𓂀 Trunchiul de piramidă din papirusul de la Moscova",
     "html": "<p><b>Papirusul de la Moscova</b> (Egipt, aproximativ 1850 î.Hr., păstrat azi la Muzeul Pușkin din Moscova) conține o problemă foarte faimoasă, numărul 14: volumul unui <b>trunchi de piramidă</b> cu baza pătrată, cu <b>înălțimea 6</b>, latura bazei mari <b>4</b> și latura bazei mici <b>2</b>.</p><p>Scribul procedează așa:</p><ol><li>4 × 4 = 16 (pătratul laturii mari)</li><li>4 × 2 = 8 (latura mare × latura mică)</li><li>2 × 2 = 4 (pătratul laturii mici)</li><li>16 + 8 + 4 = 28</li><li>o treime din 6 este 2; 28 × 2 = <b>56</b>.</li></ol><p>Este exact formula care se folosește și azi: <b>V = h/3 × (a² + a·b + b²)</b>. Acum aproape 4000 de ani!</p><p><b>Verificăm cu metoda noastră</b>: trunchiul este o piramidă mare căreia i s-a tăiat vârful. Latura trece de la 4 la 2 (se înjumătățește) urcând 6, deci piramida întreagă are înălțimea <b>12</b>, iar vârful tăiat are înălțimea 6.</p><ul><li>V<sub>mare</sub> = 4 × 4 × 12 : 3 = 64</li><li>V<sub>vârf</sub> = 2 × 2 × 6 : 3 = 8</li><li>V<sub>trunchi</sub> = 64 − 8 = <b>56</b> ✔</li></ul>",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"290\" fill=\"#fffbeb\"/><polygon points=\"120,250 400,250 460,200 180,200\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"210,110 330,110 355,88 235,88\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/><line x1=\"120\" y1=\"250\" x2=\"210\" y2=\"110\" stroke=\"#92400e\" stroke-width=\"2\"/><line x1=\"400\" y1=\"250\" x2=\"330\" y2=\"110\" stroke=\"#92400e\" stroke-width=\"2\"/><line x1=\"460\" y1=\"200\" x2=\"355\" y2=\"88\" stroke=\"#92400e\" stroke-width=\"2\"/><line x1=\"180\" y1=\"200\" x2=\"235\" y2=\"88\" stroke=\"#92400e\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><line x1=\"290\" y1=\"99\" x2=\"290\" y2=\"225\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"298\" y=\"170\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">h = 6</text><text x=\"260\" y=\"275\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">a = 4</text><text x=\"270\" y=\"80\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">b = 2</text><text x=\"470\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Scribul:</text><text x=\"470\" y=\"90\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">4 × 4 = 16</text><text x=\"470\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">4 × 2 = 8</text><text x=\"470\" y=\"134\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">2 × 2 = 4</text><text x=\"470\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">16 + 8 + 4 = 28</text><text x=\"470\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">28 × (6 : 3) = 56</text></svg>"
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Formularul",
   "html": "<table><tr><th>Corp</th><th>Aria laterală</th><th>Aria totală</th><th>Volumul</th></tr><tr><td>Cub (muchia s)</td><td>4·s²</td><td>6·s²</td><td>s³</td></tr><tr><td>Paralelipiped (a, b, c)</td><td>2p<sub>b</sub>·c = 2(a+b)·c</td><td>2(ab + bc + ac)</td><td>a·b·c</td></tr><tr><td>Prismă dreaptă</td><td>2p<sub>b</sub>·h</td><td>A<sub>l</sub> + 2·A<sub>b</sub></td><td>A<sub>b</sub>·h</td></tr><tr><td>Piramidă dreaptă (apotema a)</td><td>p<sub>b</sub>·a (semiperimetru × apotemă)</td><td>A<sub>l</sub> + A<sub>b</sub></td><td>A<sub>b</sub>·h / 3</td></tr><tr><td>Cilindru</td><td>2πr·h</td><td>2πr·h + 2πr²</td><td>πr²·h</td></tr><tr><td>Con (generatoarea g)</td><td>πr·g</td><td>πr·g + πr²</td><td>πr²·h / 3</td></tr><tr><td>Sferă</td><td>—</td><td>4πr²</td><td>4/3·πr³</td></tr></table><p>În con, generatoarea se află cu Pitagora: <b>g = √(r² + h²)</b>. În piramida cu baza pătrată de latură l, apotema piramidei: <b>a = √(h² + (l/2)²)</b>.</p>"
  },
  {
   "type": "remember",
   "title": "Regula lui „împărțit la 3”",
   "html": "<p>Piramida și conul au volumul egal cu <b>o treime</b> din cel al prismei și al cilindrului cu aceeași bază și aceeași înălțime. Cu un con plin cu apă se umple cilindrul corespunzător exact în <b>3 turnări</b>.</p>"
  },
  {
   "type": "example",
   "title": "Exemplu: câtă apă conține acvariul?",
   "html": "<p>Un acvariu în formă de paralelipiped măsoară 60 cm × 30 cm × 40 cm.</p><p>V = 60 × 30 × 40 = <b>72 000 cm³</b> = 72 dm³ = <b>72 de litri</b>.</p><p>Pentru a afla cât sticlă este necesară (fără capac): aria bazei 60×30 = 1800 cm², pereții 2·(60×40) + 2·(30×40) = 4800 + 2400 = 7200 cm². Total: <b>9000 cm²</b> = 0,9 m².</p>"
  },
  {
   "type": "example",
   "title": "Exemplu: eticheta dozei",
   "html": "<p>O doză cilindrică are raza 3,3 cm și înălțimea 11,5 cm.</p><ul><li>Etichetă (suprafața laterală): 2π·3,3·11,5 ≈ <b>238,4 cm²</b>.</li><li>Volum: π·3,3²·11,5 ≈ 3,14·10,89·11,5 ≈ <b>393 cm³</b>, adică aproximativ 0,39 litri: este doza de 33 cl, cu puțin spațiu gol în partea de sus!</li></ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-test 1",
   "questions": [
    {
     "type": "num",
     "q": "Volumul unui cub cu muchia de 5 cm?",
     "answer": 125,
     "tol": 0,
     "unit": "cm³",
     "explain": "V = s³ = 5 × 5 × 5 = 125 cm³."
    },
    {
     "type": "mc",
     "q": "Care dintre acestea este un corp de rotație?",
     "options": [
      "Prismă",
      "Piramidă",
      "Con",
      "Cub"
     ],
     "answer": 2,
     "explain": "Conul se obține rotind un triunghi dreptunghic în jurul unei catete."
    },
    {
     "type": "num",
     "q": "Câți litri sunt 3 dm³?",
     "answer": 3,
     "tol": 0,
     "unit": "litri",
     "explain": "1 dm³ = 1 litru."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Greutatea specifică: de la volum la greutate",
   "html": "<p>Fiecare material are o <b>greutate specifică</b> (gs): câte grame cântărește 1 cm³. <b>Greutate = Volum × gs</b>.</p><table><tr><th>Material</th><th>gs (g/cm³)</th></tr><tr><td>Plută</td><td>0,25</td></tr><tr><td>Lemn de brad</td><td>0,5</td></tr><tr><td>Apă</td><td>1</td></tr><tr><td>Sticlă</td><td>2,5</td></tr><tr><td>Fier</td><td>7,8</td></tr><tr><td>Aur</td><td>19,3</td></tr></table><p>Un cub de fier cu muchia de 10 cm: V = 1000 cm³ → greutate = 1000 × 7,8 = <b>7800 g = 7,8 kg</b>. Dacă gs este mai mică decât 1, obiectul <b>plutește</b> pe apă.</p>"
  },
  {
   "type": "curiosity",
   "title": "Premiul lui Arhimede",
   "html": "<p>Arhimede din Siracuza (secolul al III-lea î.Hr.) a demonstrat că volumul unei sfere este exact <b>2/3</b> din volumul cilindrului care o conține. Era atât de mândru de asta încât a vrut o sferă înscrisă într-un cilindru pe mormântul său. Secole mai târziu, Cicero a regăsit mormântul tocmai datorită acelui desen.</p>"
  },
  {
   "type": "curiosity",
   "title": "De ce sunt bulele sferice?",
   "html": "<p>Dintre toate corpurile cu același volum, <b>sfera</b> este cea cu aria cea mai mică. Pelicula de săpun „se întinde” pentru a ocupa cât mai puțină suprafață și astfel devine o sferă. Din același motiv animalele se încolăcesc ca o minge când este frig: reduc suprafața prin care pierd căldură.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-test 2",
   "questions": [
    {
     "type": "num",
     "q": "Un paralelipiped are dimensiunile 4 cm, 5 cm, 10 cm. Volumul?",
     "answer": 200,
     "tol": 0,
     "unit": "cm³",
     "explain": "V = 4 × 5 × 10 = 200 cm³."
    },
    {
     "type": "mc",
     "q": "Un cilindru și un con au aceeași bază și aceeași înălțime. Volumul conului este:",
     "options": [
      "egal",
      "jumătate",
      "o treime",
      "dublu"
     ],
     "answer": 2,
     "explain": "V con = πr²h / 3."
    },
    {
     "type": "tf",
     "q": "Într-un poliedru este valabil F + V − M = 2.",
     "answer": true,
     "explain": "Este relația lui Euler."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Harta conceptuală: de unde vin formulele",
   "nodes": [
    {
     "id": "unita",
     "label": "Unitatea de volum: cubulețul",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "<p>1 cm³ este un cub cu muchia de 1 cm; 1 dm³ = 1 litru.</p>",
     "why": "<p>A măsura înseamnă a compara cu o unitate. Pentru lungimi folosim un segment, pentru arii un pătrățel, pentru volume un cubuleț. Sistemul metric (Franța, 1795) a legat litrul de decimetrul cub.</p>"
    },
    {
     "id": "par",
     "label": "Paralelipiped: V = a·b·c",
     "x": 22,
     "y": 24,
     "color": "#2563eb",
     "html": "<p>Straturi de cubulețe: a·b cubulețe pe strat, c straturi.</p>",
     "why": "<p>Este o simplă numărare: rânduri × coloane × straturi. Funcționează și cu măsuri neîntregi, trecând la cubulețe din ce în ce mai mici.</p>"
    },
    {
     "id": "cav",
     "label": "Principiul lui Cavalieri",
     "x": 78,
     "y": 24,
     "color": "#7c3aed",
     "html": "<p>Aceleași secțiuni la fiecare înălțime → același volum.</p>",
     "why": "<p>Cavalieri (1635) gândea corpul ca pe o stivă de foi foarte subțiri („indivizibile”). Este o idee care anticipează calculul integral al lui Newton și Leibniz.</p>"
    },
    {
     "id": "prisma",
     "label": "Prismă și cilindru: V = A_b · h",
     "x": 50,
     "y": 44,
     "color": "#0d9488",
     "html": "<p>Aria bazei ori înălțimea.</p>",
     "why": "<p>Orice prismă are aceleași secțiuni ca un paralelipiped cu aceeași arie a bazei: după Cavalieri au același volum. Cilindrul este ca o prismă cu o infinitate de laturi.</p>"
    },
    {
     "id": "piramide",
     "label": "Piramidă și con: V = A_b · h : 3",
     "x": 22,
     "y": 66,
     "color": "#ea580c",
     "html": "<p>O treime din prisma corespunzătoare.</p>",
     "why": "<p>Euclid (Elementele, cartea XII) a demonstrat că o prismă triunghiulară se descompune în 3 piramide echivalente. Și mai înainte, egiptenii calculau volumul trunchiului de piramidă (Papirusul de la Moscova, aproximativ 1850 î.Hr.).</p>"
    },
    {
     "id": "sfera",
     "label": "Sferă: V = 4/3 π r³",
     "x": 78,
     "y": 66,
     "color": "#dc2626",
     "html": "<p>Și aria S = 4πr².</p>",
     "why": "<p>Arhimede (sec. III î.Hr.) a demonstrat că sfera are 2/3 din volumul și din aria cilindrului circumscris. Era atât de mândru de asta încât a vrut figura sferă-cilindru pe mormântul său.</p>"
    },
    {
     "id": "eulero",
     "label": "Relația lui Euler F + V − M = 2",
     "x": 22,
     "y": 90,
     "color": "#a855f7",
     "html": "<p>Este valabilă pentru orice poliedru convex.</p>",
     "why": "<p>Euler a publicat-o în 1758. Dacă adaugi un vârf tăind un colț, cresc împreună fețele, vârfurile și muchiile astfel încât suma rămâne 2: de aceea regula nu se schimbă niciodată.</p>"
    },
    {
     "id": "peso",
     "label": "Greutate = Volum × greutate specifică",
     "x": 78,
     "y": 90,
     "color": "#475569",
     "html": "<p>Din volum se află masa unui obiect.</p>",
     "why": "<p>Fiecare material are densitatea lui (apa 1 g/cm³, fierul aproximativ 7,8). Arhimede a înțeles că coroana lui Hieron nu era din aur pur măsurându-i volumul prin apa dezlocuită.</p>"
    }
   ],
   "edges": [
    [
     "unita",
     "par",
     "număr cubulețele"
    ],
    [
     "par",
     "prisma",
     "generalizează"
    ],
    [
     "cav",
     "prisma",
     "demonstrează"
    ],
    [
     "prisma",
     "piramide",
     "÷ 3"
    ],
    [
     "cav",
     "sfera",
     "folosit pentru"
    ],
    [
     "prisma",
     "sfera",
     "comparație cu cilindrul"
    ],
    [
     "prisma",
     "peso",
     "servește la"
    ],
    [
     "piramide",
     "eulero",
     "poliedre"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Poliedru",
   "d": "Corp delimitat de poligoane."
  },
  {
   "t": "Corp de rotație",
   "d": "Corp obținut rotind o figură plană în jurul unei drepte (axă)."
  },
  {
   "t": "Muchie",
   "d": "Segment în care se întâlnesc două fețe ale unui poliedru."
  },
  {
   "t": "Apotemă",
   "d": "În piramidă, înălțimea unei fețe laterale; în con, segmentul de la vârf la cercul bazei (generatoarea)."
  },
  {
   "t": "Desfășurare plană",
   "d": "Figura plană care se obține „deschizând” suprafața unui corp."
  },
  {
   "t": "Volum",
   "d": "Măsura spațiului ocupat de un corp."
  },
  {
   "t": "Greutate specifică",
   "d": "Greutatea unității de volum a unui material (de ex. g/cm³)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Aria totală a unui cub cu muchia de 3 cm?",
    "answer": 54,
    "tol": 0,
    "unit": "cm²",
    "explain": "6 × 3² = 54 cm²."
   },
   {
    "type": "num",
    "q": "Volumul unui cub cu muchia de 4 cm?",
    "answer": 64,
    "tol": 0,
    "unit": "cm³",
    "explain": "4³ = 64 cm³."
   },
   {
    "type": "num",
    "q": "O prismă are aria bazei 12 cm² și înălțimea 10 cm. Volumul?",
    "answer": 120,
    "tol": 0,
    "unit": "cm³",
    "explain": "V = A_b × h = 120 cm³."
   },
   {
    "type": "num",
    "q": "O piramidă are aria bazei 36 cm² și înălțimea 5 cm. Volumul?",
    "answer": 60,
    "tol": 0,
    "unit": "cm³",
    "explain": "V = 36 × 5 / 3 = 60 cm³."
   },
   {
    "type": "num",
    "q": "Con cu raza 3 cm și înălțimea 4 cm: cât măsoară apotema (generatoarea)?",
    "answer": 5,
    "tol": 0,
    "unit": "cm",
    "explain": "g = √(9 + 16) = 5 cm."
   },
   {
    "type": "mc",
    "q": "Volumul cilindrului se calculează cu:",
    "options": [
     "2πr·h",
     "πr²·h",
     "4πr²",
     "πr·a"
    ],
    "answer": 1,
    "explain": "Aria bazei (πr²) ori înălțimea."
   },
   {
    "type": "mc",
    "q": "Câte fețe, muchii și vârfuri are un cub?",
    "options": [
     "6, 12, 8",
     "6, 8, 12",
     "8, 12, 6",
     "4, 6, 4"
    ],
    "answer": 0,
    "explain": "6 fețe, 12 muchii, 8 vârfuri: 6 + 8 − 12 = 2."
   },
   {
    "type": "tf",
    "q": "1 m³ corespunde la 1000 de litri.",
    "answer": true,
    "explain": "1 m³ = 1000 dm³ și 1 dm³ = 1 l."
   },
   {
    "type": "num",
    "q": "Cilindru cu raza 2 cm și înălțimea 10 cm. Volumul (folosește π = 3,14)?",
    "answer": 125.6,
    "tol": 0.1,
    "unit": "cm³",
    "explain": "3,14 × 4 × 10 = 125,6 cm³."
   },
   {
    "type": "mc",
    "q": "Un obiect plutește pe apă dacă greutatea lui specifică este:",
    "options": [
     "mai mare decât 1",
     "mai mică decât 1",
     "egală cu 7,8",
     "oarecare"
    ],
    "answer": 1,
    "explain": "Dacă este mai puțin dens decât apa (gs < 1 g/cm³), plutește."
   },
   {
    "type": "text",
    "q": "Cum se numește corpul obținut rotind un dreptunghi în jurul unei laturi?",
    "answer": [
     "cilindru",
     "cilindrul",
     "un cilindru"
    ],
    "explain": "Este cilindrul."
   }
  ],
  "gen": [
   [
    "volCube",
    1
   ],
   [
    "volBox",
    1
   ]
  ]
 }
});

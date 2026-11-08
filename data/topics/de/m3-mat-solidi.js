TOPIC('de', {
 "id": "m3-mat-solidi",
 "title": "Körper: Oberfläche und Volumen",
 "intro": "Schachteln, Dosen, Eistüten, Bälle: Wir sind von Körpern umgeben. Wir lernen, sie zu erkennen, zu berechnen, wie viel Material man zum Bauen braucht (<b>Oberfläche</b>) und wie viel Raum sie einnehmen (<b>Volumen</b>).",
 "minutes": 40,
 "sections": [
  {
   "type": "text",
   "title": "1. Polyeder und Rotationskörper",
   "html": "<p>Ein <b>Körper</b> ist eine geometrische Figur mit drei Dimensionen: Länge, Breite, Höhe. Man teilt sie in zwei große Familien:</p><ul><li><b>Polyeder</b> (Vielflächner): nur von Vielecken begrenzt (den <b>Flächen</b>). Die Flächen treffen sich in den <b>Kanten</b>, die Kanten in den <b>Ecken</b>. Beispiele: Würfel, Quader, Prisma, Pyramide.</li><li><b>Rotationskörper</b>: Man erhält sie, indem man eine ebene Figur um eine Achse dreht. Sie haben gekrümmte Flächen. Beispiele: Zylinder (sich drehendes Rechteck), Kegel (sich drehendes rechtwinkliges Dreieck), Kugel (sich drehender Halbkreis).</li></ul>"
  },
  {
   "type": "3d",
   "title": "Erkunde die Körper in 3D",
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
   "caption": "Dreh jeden Körper mit dem Finger oder der Maus. Zähle Flächen, Kanten und Ecken der Polyeder."
  },
  {
   "type": "remember",
   "title": "Der Eulersche Polyedersatz",
   "html": "<p>Bei jedem konvexen Polyeder gilt: <b>E + F − K = 2</b> (Ecken + Flächen − Kanten).</p><p>Würfel: 8 + 6 − 12 = 2 ✔ &nbsp; Quadratische Pyramide: 5 + 5 − 8 = 2 ✔</p>"
  },
  {
   "type": "text",
   "title": "2. Oberfläche und Volumen: Was ist der Unterschied?",
   "html": "<ul><li>Die <b>Mantelfläche</b> (M) ist der Flächeninhalt der Seitenflächen.</li><li>Die <b>Oberfläche</b> (O) ist M + der Flächeninhalt der Grundflächen. Sie wird in cm², m² … gemessen.</li><li>Das <b>Volumen</b> (V) ist der eingenommene Raum. Es wird in cm³, dm³, m³ gemessen.</li></ul><p>Merke dir die Umrechnungen: <b>1 dm³ = 1 Liter</b>; 1 m³ = 1000 dm³ = 1000 Liter; 1 cm³ = 1 ml.</p><p>Um die Oberfläche zu berechnen, hilft es, sich das <b>Netz</b> (den ebenen Abriss) des Körpers vorzustellen: Wir „öffnen“ ihn und breiten ihn auf dem Tisch aus.</p>"
  },
  {
   "type": "svg",
   "title": "Das Netz von Würfel und Zylinder",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#ffffff\"/><g fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"80\" y=\"30\" width=\"60\" height=\"60\"/><rect x=\"20\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"140\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"200\" y=\"90\" width=\"60\" height=\"60\"/><rect x=\"80\" y=\"150\" width=\"60\" height=\"60\"/></g><text x=\"140\" y=\"250\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Würfel: 6 gleiche Quadrate</text><text x=\"140\" y=\"275\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">O = 6 · s²</text><g stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"330\" y=\"95\" width=\"220\" height=\"90\" fill=\"#fed7aa\"/><circle cx=\"440\" cy=\"60\" r=\"35\" fill=\"#fdba74\"/><circle cx=\"440\" cy=\"220\" r=\"35\" fill=\"#fdba74\"/></g><text x=\"440\" y=\"145\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\">Länge = 2πr (Umfang)</text><text x=\"560\" y=\"145\" font-size=\"16\" font-family=\"sans-serif\">h</text><text x=\"440\" y=\"290\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\">Zylinder: 1 Rechteck + 2 Kreise</text></svg>",
   "caption": "Das Netz: Der Würfel öffnet sich zu 6 Quadraten, der Zylinder zu einem Rechteck (der Mantelfläche) und zwei Kreisen."
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, es zu verstehen: Warum die Formeln so sind",
   "intro": "Die Volumenformeln muss man nicht nur auswendig lernen: Man kann sie „sehen“ und sogar anfassen.",
   "tabs": [
    {
     "label": "🪙 Prinzip von Cavalieri",
     "html": "<p>Nimm einen geraden Münzstapel und schiebe ihn zur Seite: Er wird schief, aber die Münzen sind dieselben, also <b>ändert sich das Volumen nicht</b>. Bonaventura Cavalieri (1635), ein Schüler Galileis, machte daraus ein Prinzip: <b>Wenn zwei Körper dieselbe Höhe haben und in jeder Höhe Schnitte mit demselben Flächeninhalt, haben sie dasselbe Volumen</b>. Deshalb hat ein schiefes Prisma dasselbe Volumen wie ein gerades: V = G × h.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><ellipse cx=\"150\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"150\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"400\" cy=\"255\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"420\" cy=\"235\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"438\" cy=\"215\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"453\" cy=\"195\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"463\" cy=\"175\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"469\" cy=\"155\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"471\" cy=\"135\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"468\" cy=\"115\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"462\" cy=\"95\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><ellipse cx=\"454\" cy=\"75\" rx=\"60\" ry=\"10\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"150\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Gerader Stapel</text><text x=\"440\" y=\"292\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Schiefer Stapel</text><text x=\"300\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">Dieselben Münzen = dasselbe Volumen</text></svg>"
    },
    {
     "label": "📐 Netze",
     "html": "<p>Schneide den Körper entlang einiger Kanten auf und breite ihn auf dem Tisch aus: Du erhältst das <b>Netz</b>. Der Flächeninhalt des Netzes ist die <b>Oberfläche</b>. Der Zylinder wird zu einem Rechteck (so lang wie der Umfang, 2πr) plus zwei Kreisen; der Kegel zu einem Kreissektor plus einem Kreis.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/><g transform=\"translate(20,40)\" stroke=\"#1e3a8a\" stroke-width=\"2\" fill=\"#bfdbfe\"><rect x=\"50\" y=\"0\" width=\"50\" height=\"50\"/><rect x=\"0\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"100\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"150\" y=\"50\" width=\"50\" height=\"50\"/><rect x=\"50\" y=\"100\" width=\"50\" height=\"50\"/></g><text x=\"120\" y=\"230\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Würfel: 6 Quadrate</text><g transform=\"translate(260,30)\" stroke=\"#166534\" stroke-width=\"2\" fill=\"#bbf7d0\"><circle cx=\"60\" cy=\"25\" r=\"25\"/><rect x=\"0\" y=\"50\" width=\"157\" height=\"80\"/><circle cx=\"60\" cy=\"155\" r=\"25\"/></g><text x=\"340\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Zylinder: Rechteck</text><text x=\"340\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">der Länge 2πr + 2 Kreise</text><g transform=\"translate(470,40)\" stroke=\"#9a3412\" stroke-width=\"2\" fill=\"#fed7aa\"><path d=\"M60,0 L0,110 A125,125 0 0 0 120,110 Z\"/><circle cx=\"60\" cy=\"158\" r=\"28\"/></g><text x=\"530\" y=\"230\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Kegel: Kreissektor</text><text x=\"530\" y=\"250\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">+ Kreis</text></svg>"
    },
    {
     "label": "💧 Mit Wasser",
     "html": "<p>Nimm einen Kegel und einen Zylinder aus Plastik mit <b>gleicher Grundfläche und gleicher Höhe</b>. Fülle den Kegel mit Wasser und schütte es in den Zylinder: Man braucht genau <b>3 Kegel</b>, um ihn zu füllen. Darum ist V<sub>Kegel</sub> = πr²h : 3. Dasselbe gilt für Pyramide und Prisma. Archimedes entdeckte auch, dass die Kugel <b>2/3</b> des Volumens des Zylinders hat, in den sie einbeschrieben ist.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><g transform=\"translate(60,40)\"><polygon points=\"0,0 120,0 60,180\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Kegel voller Wasser</text></g><text x=\"235\" y=\"140\" font-size=\"28\" fill=\"#b91c1c\" font-weight=\"bold\">× 3 =</text><g transform=\"translate(340,40)\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><rect x=\"0\" y=\"0\" width=\"120\" height=\"180\" fill=\"#93c5fd\" opacity=\".85\"/><line x1=\"0\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><line x1=\"0\" y1=\"120\" x2=\"120\" y2=\"120\" stroke=\"#1e3a8a\" stroke-dasharray=\"5 4\"/><text x=\"60\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">Zylinder voll</text></g><text x=\"520\" y=\"100\" font-size=\"15\" fill=\"#1f2937\">gleiche</text><text x=\"520\" y=\"125\" font-size=\"15\" fill=\"#1f2937\">Grundfläche</text><text x=\"520\" y=\"148\" font-size=\"15\" fill=\"#1f2937\">und Höhe</text></svg>"
    },
    {
     "label": "🧊 Würfelchen in 3D",
     "html": "<p>Das Volumen ist die <b>Anzahl der Einheitswürfel</b>, die den Körper füllen. Ein Quader 4 × 3 × 2 enthält 4 × 3 = 12 Würfelchen pro Schicht, und es gibt 2 Schichten: 24 Würfelchen. Ändere die Maße mit den Reglern und zähle!</p>",
     "scene": "blocks",
     "options": {
      "mode": "volume",
      "a": 4,
      "b": 3,
      "c": 2
     }
    },
    {
     "label": "🔺 3 Pyramiden = 1 Würfel",
     "html": "<p>Ein Würfel lässt sich in <b>3 gleiche quadratische Pyramiden</b> zerlegen, alle mit der Spitze in derselben Ecke des Würfels. Jede hat also ein Drittel des Würfelvolumens: V = a² × a : 3. Dreh die Pyramide und stell dir vor, drei zusammenzusetzen.</p>",
     "scene": "solid",
     "options": {
      "shape": "pyramid",
      "n": 4,
      "h": 1.4,
      "labels": true
     }
    },
    {
     "label": "🇨🇳 Das Prinzip von Zu Geng (China)",
     "html": "<p>Mehr als <b>tausend Jahre vor</b> Cavalieri schrieb in <b>China</b> der Mathematiker <b>Zu Geng</b> (5.–6. Jahrhundert n. Chr., Sohn des berühmten Zu Chongzhi) dasselbe Prinzip auf: <b>Wenn zwei Körper in jeder Höhe Schnitte mit demselben Flächeninhalt haben, können ihre Volumen nicht verschieden sein</b>. In China heißt es heute <b>Prinzip von Zu Geng</b>.</p><p>Mit dieser Idee fand Zu Geng das <b>Volumen der Kugel</b>. Hier die Überlegung, kurz:</p><ol><li>Schon <b>Liu Hui</b> (3. Jahrhundert) hatte sich zwei Zylinder mit dem Radius r vorgestellt, die sich in einem Würfel der Kantenlänge 2r kreuzen: Der gemeinsame Teil heißt <b>„doppelter quadratischer Schirm“</b> (牟合方盖). Die Kugel liegt im doppelten Schirm.</li><li>Schneidet man in beliebiger Höhe, ist der Schnitt der Kugel ein <b>Kreis</b>, einbeschrieben in den Schnitt des doppelten Schirms, ein <b>Quadrat</b>. Kreis und einbeschriebenes Quadrat stehen immer im Verhältnis <b>π : 4</b>. Also gilt auch: V<sub>Kugel</sub> : V<sub>Schirm</sub> = π : 4.</li><li>Zu Geng bewies mit seinem Prinzip, dass der doppelte Schirm <b>2/3 des Würfels</b> einnimmt: 2/3 × (2r)³ = 16/3 r³.</li><li>Dann ist V<sub>Kugel</sub> = π/4 × 16/3 r³ = <b>4/3 π r³</b>, dieselbe Formel, die du benutzt!</li></ol>",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"290\" fill=\"#f8fafc\"/><rect x=\"60\" y=\"40\" width=\"220\" height=\"220\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><circle cx=\"170\" cy=\"150\" r=\"110\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><text x=\"170\" y=\"155\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e3a8a\" text-anchor=\"middle\" font-weight=\"bold\">Kreis</text><text x=\"170\" y=\"32\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#92400e\" text-anchor=\"middle\" font-weight=\"bold\">Quadrat</text><text x=\"310\" y=\"70\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Schnitt in einer bestimmten Höhe:</text><text x=\"310\" y=\"100\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e3a8a\">• der Kugel → ein Kreis</text><text x=\"310\" y=\"124\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#92400e\">• des „doppelten Schirms“</text><text x=\"310\" y=\"146\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#92400e\">   → das Quadrat darum</text><text x=\"310\" y=\"186\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">In jeder Höhe:</text><text x=\"310\" y=\"212\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">Kreis : Quadrat = π : 4</text><text x=\"310\" y=\"242\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">also stehen auch die Volumen</text><text x=\"310\" y=\"264\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">im Verhältnis π : 4</text></svg>"
    },
    {
     "label": "𓂀 Der Pyramidenstumpf im Moskauer Papyrus",
     "html": "<p>Der <b>Moskauer Papyrus</b> (Ägypten, um 1850 v. Chr., heute im Puschkin-Museum in Moskau) enthält eine sehr berühmte Aufgabe, die Nummer 14: das Volumen eines quadratischen <b>Pyramidenstumpfs</b> mit der <b>Höhe 6</b>, der unteren Seitenlänge <b>4</b> und der oberen <b>2</b>.</p><p>Der Schreiber geht so vor:</p><ol><li>4 × 4 = 16 (Quadrat der großen Seite)</li><li>4 × 2 = 8 (große Seite × kleine Seite)</li><li>2 × 2 = 4 (Quadrat der kleinen Seite)</li><li>16 + 8 + 4 = 28</li><li>ein Drittel von 6 ist 2; 28 × 2 = <b>56</b>.</li></ol><p>Das ist genau die Formel, die man noch heute benutzt: <b>V = h/3 × (a² + a·b + b²)</b>. Vor fast 4000 Jahren!</p><p><b>Prüfen wir mit unserer Methode</b>: Der Stumpf ist eine große Pyramide, deren Spitze abgeschnitten wurde. Die Seitenlänge geht von 4 auf 2 zurück (halbiert sich) auf einer Höhe von 6, also ist die ganze Pyramide <b>12</b> hoch und die abgeschnittene Spitze 6 hoch.</p><ul><li>V<sub>groß</sub> = 4 × 4 × 12 : 3 = 64</li><li>V<sub>Spitze</sub> = 2 × 2 × 6 : 3 = 8</li><li>V<sub>Stumpf</sub> = 64 − 8 = <b>56</b> ✔</li></ul>",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"290\" fill=\"#fffbeb\"/><polygon points=\"120,250 400,250 460,200 180,200\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><polygon points=\"210,110 330,110 355,88 235,88\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/><line x1=\"120\" y1=\"250\" x2=\"210\" y2=\"110\" stroke=\"#92400e\" stroke-width=\"2\"/><line x1=\"400\" y1=\"250\" x2=\"330\" y2=\"110\" stroke=\"#92400e\" stroke-width=\"2\"/><line x1=\"460\" y1=\"200\" x2=\"355\" y2=\"88\" stroke=\"#92400e\" stroke-width=\"2\"/><line x1=\"180\" y1=\"200\" x2=\"235\" y2=\"88\" stroke=\"#92400e\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><line x1=\"290\" y1=\"99\" x2=\"290\" y2=\"225\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><text x=\"298\" y=\"170\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">h = 6</text><text x=\"260\" y=\"275\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">a = 4</text><text x=\"270\" y=\"80\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">b = 2</text><text x=\"470\" y=\"60\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Der Schreiber:</text><text x=\"470\" y=\"90\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">4 × 4 = 16</text><text x=\"470\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">4 × 2 = 8</text><text x=\"470\" y=\"134\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">2 × 2 = 4</text><text x=\"470\" y=\"156\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">16 + 8 + 4 = 28</text><text x=\"470\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">28 × (6 : 3) = 56</text></svg>"
    }
   ]
  },
  {
   "type": "text",
   "title": "3. Die Formelsammlung",
   "html": "<table><tr><th>Körper</th><th>Mantelfläche</th><th>Oberfläche</th><th>Volumen</th></tr><tr><td>Würfel (Kante s)</td><td>4·s²</td><td>6·s²</td><td>s³</td></tr><tr><td>Quader (a, b, c)</td><td>U<sub>G</sub>·c = 2(a+b)·c</td><td>2(ab + bc + ac)</td><td>a·b·c</td></tr><tr><td>Gerades Prisma</td><td>U<sub>G</sub>·h</td><td>M + 2·G</td><td>G·h</td></tr><tr><td>Gerade Pyramide (Höhe der Seitenfläche h<sub>s</sub>)</td><td>U<sub>G</sub>·h<sub>s</sub> / 2 (halber Umfang × h<sub>s</sub>)</td><td>M + G</td><td>G·h / 3</td></tr><tr><td>Zylinder</td><td>2πr·h</td><td>2πr·h + 2πr²</td><td>πr²·h</td></tr><tr><td>Kegel (Mantellinie s)</td><td>πr·s</td><td>πr·s + πr²</td><td>πr²·h / 3</td></tr><tr><td>Kugel</td><td>—</td><td>4πr²</td><td>4/3·πr³</td></tr></table><p>U<sub>G</sub> = Umfang der Grundfläche, G = Flächeninhalt der Grundfläche. Beim Kegel findet man die Mantellinie mit Pythagoras: <b>s = √(r² + h²)</b>. Bei der quadratischen Pyramide mit der Grundseite l: <b>h<sub>s</sub> = √(h² + (l/2)²)</b>.</p>"
  },
  {
   "type": "remember",
   "title": "Die „geteilt durch 3“-Regel",
   "html": "<p>Pyramide und Kegel haben ein Volumen, das <b>ein Drittel</b> von dem des Prismas und des Zylinders mit gleicher Grundfläche und gleicher Höhe beträgt. Mit einem vollen Wassergefäß in Kegelform füllt man den entsprechenden Zylinder in genau <b>3 Umfüllungen</b>.</p>"
  },
  {
   "type": "example",
   "title": "Beispiel: Wie viel Wasser fasst das Aquarium?",
   "html": "<p>Ein quaderförmiges Aquarium misst 60 cm × 30 cm × 40 cm.</p><p>V = 60 × 30 × 40 = <b>72 000 cm³</b> = 72 dm³ = <b>72 Liter</b>.</p><p>Um zu wissen, wie viel Glas man braucht (ohne Deckel): Grundfläche 60×30 = 1800 cm², Wände 2·(60×40) + 2·(30×40) = 4800 + 2400 = 7200 cm². Insgesamt: <b>9000 cm²</b> = 0,9 m².</p>"
  },
  {
   "type": "example",
   "title": "Beispiel: das Etikett der Dose",
   "html": "<p>Eine zylindrische Dose hat den Radius 3,3 cm und die Höhe 11,5 cm.</p><ul><li>Etikett (Mantelfläche): 2π·3,3·11,5 ≈ <b>238,4 cm²</b>.</li><li>Volumen: π·3,3²·11,5 ≈ 3,14·10,89·11,5 ≈ <b>393 cm³</b>, also etwa 0,39 Liter: Das ist die 33-cl-Dose, mit etwas Luft oben!</li></ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz 1",
   "questions": [
    {
     "type": "num",
     "q": "Volumen eines Würfels mit der Kante 5 cm?",
     "answer": 125,
     "tol": 0,
     "unit": "cm³",
     "explain": "V = s³ = 5 × 5 × 5 = 125 cm³."
    },
    {
     "type": "mc",
     "q": "Welcher dieser Körper ist ein Rotationskörper?",
     "options": [
      "Prisma",
      "Pyramide",
      "Kegel",
      "Würfel"
     ],
     "answer": 2,
     "explain": "Den Kegel erhält man, indem man ein rechtwinkliges Dreieck um eine Kathete dreht."
    },
    {
     "type": "num",
     "q": "Wie viele Liter sind 3 dm³?",
     "answer": 3,
     "tol": 0,
     "unit": "Liter",
     "explain": "1 dm³ = 1 Liter."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Dichte: vom Volumen zum Gewicht",
   "html": "<p>Jedes Material hat seine eigene <b>Dichte</b> (ρ): wie viele Gramm 1 cm³ wiegt. <b>Gewicht = Volumen × Dichte</b>.</p><table><tr><th>Material</th><th>Dichte (g/cm³)</th></tr><tr><td>Kork</td><td>0,25</td></tr><tr><td>Tannenholz</td><td>0,5</td></tr><tr><td>Wasser</td><td>1</td></tr><tr><td>Glas</td><td>2,5</td></tr><tr><td>Eisen</td><td>7,8</td></tr><tr><td>Gold</td><td>19,3</td></tr></table><p>Ein Eisenwürfel mit der Kante 10 cm: V = 1000 cm³ → Gewicht = 1000 × 7,8 = <b>7800 g = 7,8 kg</b>. Wenn die Dichte kleiner als 1 ist, <b>schwimmt</b> der Gegenstand auf dem Wasser.</p>"
  },
  {
   "type": "curiosity",
   "title": "Der Preis des Archimedes",
   "html": "<p>Archimedes von Syrakus (3. Jahrhundert v. Chr.) bewies, dass das Volumen einer Kugel genau <b>2/3</b> des Volumens des Zylinders ist, der sie umschließt. Er war darauf so stolz, dass er auf seinem Grab eine Kugel in einem Zylinder haben wollte. Jahrhunderte später fand Cicero das Grab gerade dank dieser Zeichnung wieder.</p>"
  },
  {
   "type": "curiosity",
   "title": "Warum sind Seifenblasen kugelförmig?",
   "html": "<p>Unter allen Körpern mit demselben Volumen hat die <b>Kugel</b> die kleinste Oberfläche. Die Seifenhaut „zieht sich zusammen“, um möglichst wenig Oberfläche einzunehmen, und so wird sie zur Kugel. Aus demselben Grund rollen sich Tiere bei Kälte zu einer Kugel zusammen: Sie verkleinern die Fläche, über die sie Wärme verlieren.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz 2",
   "questions": [
    {
     "type": "num",
     "q": "Ein Quader hat die Maße 4 cm, 5 cm, 10 cm. Volumen?",
     "answer": 200,
     "tol": 0,
     "unit": "cm³",
     "explain": "V = 4 × 5 × 10 = 200 cm³."
    },
    {
     "type": "mc",
     "q": "Ein Zylinder und ein Kegel haben gleiche Grundfläche und gleiche Höhe. Das Volumen des Kegels ist:",
     "options": [
      "gleich",
      "die Hälfte",
      "ein Drittel",
      "das Doppelte"
     ],
     "answer": 2,
     "explain": "V Kegel = πr²h / 3."
    },
    {
     "type": "tf",
     "q": "Bei einem Polyeder gilt E + F − K = 2.",
     "answer": true,
     "explain": "Das ist der Eulersche Polyedersatz."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Begriffslandkarte: Woher die Formeln kommen",
   "nodes": [
    {
     "id": "unita",
     "label": "Volumeneinheit: das Würfelchen",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "<p>1 cm³ ist ein Würfel mit 1 cm Kantenlänge; 1 dm³ = 1 Liter.</p>",
     "why": "<p>Messen heißt, mit einer Einheit zu vergleichen. Für Längen benutzen wir eine Strecke, für Flächen ein Quadrätchen, für Volumen ein Würfelchen. Das metrische System (Frankreich, 1795) verband den Liter mit dem Kubikdezimeter.</p>"
    },
    {
     "id": "par",
     "label": "Quader: V = a·b·c",
     "x": 22,
     "y": 24,
     "color": "#2563eb",
     "html": "<p>Schichten aus Würfelchen: a·b Würfelchen pro Schicht, c Schichten.</p>",
     "why": "<p>Es ist einfaches Zählen: Zeilen × Spalten × Schichten. Es funktioniert auch mit nicht ganzen Maßen, indem man zu immer kleineren Würfelchen übergeht.</p>"
    },
    {
     "id": "cav",
     "label": "Prinzip von Cavalieri",
     "x": 78,
     "y": 24,
     "color": "#7c3aed",
     "html": "<p>Gleiche Schnitte in jeder Höhe → gleiches Volumen.</p>",
     "why": "<p>Cavalieri (1635) stellte sich den Körper als Stapel hauchdünner Blätter vor („Unteilbare“). Es ist eine Idee, die die Integralrechnung von Newton und Leibniz vorwegnimmt.</p>"
    },
    {
     "id": "prisma",
     "label": "Prisma und Zylinder: V = G · h",
     "x": 50,
     "y": 44,
     "color": "#0d9488",
     "html": "<p>Grundfläche mal Höhe.</p>",
     "why": "<p>Jedes Prisma hat dieselben Schnitte wie ein Quader mit gleicher Grundfläche: Nach Cavalieri haben sie dasselbe Volumen. Der Zylinder ist wie ein Prisma mit unendlich vielen Seiten.</p>"
    },
    {
     "id": "piramide",
     "label": "Pyramide und Kegel: V = G · h : 3",
     "x": 22,
     "y": 66,
     "color": "#ea580c",
     "html": "<p>Ein Drittel des entsprechenden Prismas.</p>",
     "why": "<p>Euklid (Elemente, Buch XII) bewies, dass sich ein dreiseitiges Prisma in 3 gleichwertige Pyramiden zerlegen lässt. Schon früher berechneten die Ägypter das Volumen des Pyramidenstumpfs (Moskauer Papyrus, um 1850 v. Chr.).</p>"
    },
    {
     "id": "sfera",
     "label": "Kugel: V = 4/3 π r³",
     "x": 78,
     "y": 66,
     "color": "#dc2626",
     "html": "<p>Und Oberfläche O = 4πr².</p>",
     "why": "<p>Archimedes (3. Jh. v. Chr.) bewies, dass die Kugel 2/3 des Volumens und der Oberfläche des umschriebenen Zylinders hat. Er war darauf so stolz, dass er die Figur aus Kugel und Zylinder auf seinem Grab haben wollte.</p>"
    },
    {
     "id": "eulero",
     "label": "Eulerscher Satz E + F − K = 2",
     "x": 22,
     "y": 90,
     "color": "#a855f7",
     "html": "<p>Gilt für jedes konvexe Polyeder.</p>",
     "why": "<p>Euler veröffentlichte ihn 1758. Wenn du eine Ecke abschneidest und so eine hinzufügst, nehmen Flächen, Ecken und Kanten so zu, dass die Summe 2 bleibt: Darum ändert sich die Regel nie.</p>"
    },
    {
     "id": "peso",
     "label": "Gewicht = Volumen × Dichte",
     "x": 78,
     "y": 90,
     "color": "#475569",
     "html": "<p>Aus dem Volumen erhält man die Masse eines Gegenstands.</p>",
     "why": "<p>Jedes Material hat seine Dichte (Wasser 1 g/cm³, Eisen etwa 7,8). Archimedes erkannte, dass die Krone des Hieron nicht aus reinem Gold war, indem er ihr Volumen über das verdrängte Wasser maß.</p>"
    }
   ],
   "edges": [
    [
     "unita",
     "par",
     "ich zähle die Würfelchen"
    ],
    [
     "par",
     "prisma",
     "verallgemeinert"
    ],
    [
     "cav",
     "prisma",
     "beweist"
    ],
    [
     "prisma",
     "piramide",
     "÷ 3"
    ],
    [
     "cav",
     "sfera",
     "benutzt für"
    ],
    [
     "prisma",
     "sfera",
     "Vergleich mit dem Zylinder"
    ],
    [
     "prisma",
     "peso",
     "dient zur Berechnung von"
    ],
    [
     "piramide",
     "eulero",
     "Polyeder"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Polyeder",
   "d": "Von Vielecken begrenzter Körper."
  },
  {
   "t": "Rotationskörper",
   "d": "Körper, der entsteht, wenn man eine ebene Figur um eine Gerade (Achse) dreht."
  },
  {
   "t": "Kante",
   "d": "Strecke, in der sich zwei Flächen eines Polyeders treffen."
  },
  {
   "t": "Mantellinie / Höhe der Seitenfläche",
   "d": "Bei der Pyramide die Höhe einer Seitenfläche; beim Kegel die Strecke von der Spitze zum Rand der Grundfläche."
  },
  {
   "t": "Netz",
   "d": "Die ebene Figur, die man erhält, wenn man die Oberfläche eines Körpers „öffnet“."
  },
  {
   "t": "Volumen",
   "d": "Maß des Raumes, den ein Körper einnimmt."
  },
  {
   "t": "Dichte",
   "d": "Gewicht der Volumeneinheit eines Materials (z. B. g/cm³)."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Oberfläche eines Würfels mit der Kante 3 cm?",
    "answer": 54,
    "tol": 0,
    "unit": "cm²",
    "explain": "6 × 3² = 54 cm²."
   },
   {
    "type": "num",
    "q": "Volumen eines Würfels mit der Kante 4 cm?",
    "answer": 64,
    "tol": 0,
    "unit": "cm³",
    "explain": "4³ = 64 cm³."
   },
   {
    "type": "num",
    "q": "Ein Prisma hat die Grundfläche 12 cm² und die Höhe 10 cm. Volumen?",
    "answer": 120,
    "tol": 0,
    "unit": "cm³",
    "explain": "V = G × h = 120 cm³."
   },
   {
    "type": "num",
    "q": "Eine Pyramide hat die Grundfläche 36 cm² und die Höhe 5 cm. Volumen?",
    "answer": 60,
    "tol": 0,
    "unit": "cm³",
    "explain": "V = 36 × 5 / 3 = 60 cm³."
   },
   {
    "type": "num",
    "q": "Kegel mit dem Radius 3 cm und der Höhe 4 cm: Wie lang ist die Mantellinie?",
    "answer": 5,
    "tol": 0,
    "unit": "cm",
    "explain": "s = √(9 + 16) = 5 cm."
   },
   {
    "type": "mc",
    "q": "Das Volumen des Zylinders berechnet man mit:",
    "options": [
     "2πr·h",
     "πr²·h",
     "4πr²",
     "πr·a"
    ],
    "answer": 1,
    "explain": "Grundfläche (πr²) mal Höhe."
   },
   {
    "type": "mc",
    "q": "Wie viele Flächen, Kanten und Ecken hat ein Würfel?",
    "options": [
     "6, 12, 8",
     "6, 8, 12",
     "8, 12, 6",
     "4, 6, 4"
    ],
    "answer": 0,
    "explain": "6 Flächen, 12 Kanten, 8 Ecken: 8 + 6 − 12 = 2."
   },
   {
    "type": "tf",
    "q": "1 m³ entspricht 1000 Litern.",
    "answer": true,
    "explain": "1 m³ = 1000 dm³ und 1 dm³ = 1 l."
   },
   {
    "type": "num",
    "q": "Zylinder mit dem Radius 2 cm und der Höhe 10 cm. Volumen (benutze π = 3,14)?",
    "answer": 125.6,
    "tol": 0.1,
    "unit": "cm³",
    "explain": "3,14 × 4 × 10 = 125,6 cm³."
   },
   {
    "type": "mc",
    "q": "Ein Gegenstand schwimmt auf dem Wasser, wenn seine Dichte ist:",
    "options": [
     "größer als 1",
     "kleiner als 1",
     "gleich 7,8",
     "beliebig"
    ],
    "answer": 1,
    "explain": "Wenn er weniger dicht ist als Wasser (Dichte < 1 g/cm³), schwimmt er."
   },
   {
    "type": "text",
    "q": "Wie heißt der Körper, der entsteht, wenn man ein Rechteck um eine Seite dreht?",
    "answer": [
     "zylinder",
     "der zylinder",
     "cilindro",
     "il cilindro"
    ],
    "explain": "Es ist der Zylinder."
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

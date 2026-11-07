TOPIC('de', {
 "id": "p4-mat-frazioni",
 "title": "Die Brüche",
 "intro": "Wenn du eine Pizza mit deinen Freunden teilst, benutzt du schon <b>Brüche</b>! Wir lernen, sie zu lesen, zu schreiben, zu vergleichen und den Bruchteil einer Zahl zu berechnen.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Was ist ein Bruch?",
   "html": "<p>Ein <b>Bruch</b> gibt einen oder mehrere <b>gleich große Teile</b> eines Ganzen an.</p>\n<p>Um ein Ganzes in Teile zu <b>zerlegen</b>, muss man es in <b>lauter gleiche</b> Teile teilen. Jeder Teil heißt <b>Stammbruch</b>: zum Beispiel ¼ (ein Viertel) oder ⅓ (ein Drittel).</p>\n<p>Ein Bruch wird mit zwei Zahlen und einem Strich geschrieben:</p>\n<ul>\n<li>der <b>Nenner</b> (unten) sagt, in wie viele gleiche Teile das Ganze geteilt wurde;</li>\n<li>der <b>Zähler</b> (oben) sagt, wie viele Teile wir nehmen;</li>\n<li>der <b>Bruchstrich</b> steht dazwischen.</li>\n</ul>\n<p>Beispiel: <b>3/4</b> liest man „drei Viertel“: Das Ganze ist in 4 gleiche Teile geteilt und wir nehmen 3 davon.</p>"
  },
  {
   "type": "svg",
   "title": "Die Teile eines Bruchs",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/>\n<circle cx=\"150\" cy=\"150\" r=\"100\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<path d=\"M150 150 L150 50 A100 100 0 0 1 250 150 Z\" fill=\"#f97316\"/>\n<path d=\"M150 150 L250 150 A100 100 0 0 1 150 250 Z\" fill=\"#f97316\"/>\n<path d=\"M150 150 L150 250 A100 100 0 0 1 50 150 Z\" fill=\"#f97316\"/>\n<path d=\"M150 50 L150 250 M50 150 L250 150\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<text x=\"380\" y=\"110\" font-size=\"64\" font-weight=\"bold\" fill=\"#c2410c\" text-anchor=\"middle\">3</text>\n<line x1=\"340\" y1=\"130\" x2=\"420\" y2=\"130\" stroke=\"#1f2937\" stroke-width=\"6\"/>\n<text x=\"380\" y=\"190\" font-size=\"64\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">4</text>\n<text x=\"440\" y=\"100\" font-size=\"18\" fill=\"#c2410c\">Zähler: genommene Teile</text>\n<text x=\"440\" y=\"136\" font-size=\"18\" fill=\"#1f2937\">Bruchstrich</text>\n<text x=\"440\" y=\"180\" font-size=\"18\" fill=\"#1d4ed8\">Nenner:</text>\n<text x=\"440\" y=\"202\" font-size=\"18\" fill=\"#1d4ed8\">alle gleichen Teile</text>\n<text x=\"150\" y=\"285\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">3/4 der Pizza</text>\n</svg>",
   "caption": "Die Pizza ist in 4 gleiche Teile geteilt: Die 3 gefärbten sind die 3/4."
  },
  {
   "type": "widget",
   "title": "Baue die Brüche",
   "widget": "fractionPie",
   "options": {
    "n": 3,
    "d": 4
   },
   "caption": "Bewege die Regler: Ändere Zähler und Nenner und beobachte die Figur."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Brüche lesen",
   "questions": [
    {
     "type": "mc",
     "q": "Bei 2/5 ist der Nenner …",
     "options": [
      "2",
      "5",
      "7"
     ],
     "answer": 1,
     "explain": "Der Nenner ist die Zahl unter dem Strich: 5."
    },
    {
     "type": "mc",
     "q": "Wie liest man 5/8?",
     "options": [
      "Fünf Achtel",
      "Acht Fünftel",
      "Fünf und acht"
     ],
     "answer": 0,
     "explain": "Man liest zuerst den Zähler (fünf) und dann den Nenner als Ordnungszahl (Achtel)."
    },
    {
     "type": "tf",
     "q": "Für einen Bruch muss man das Ganze in gleiche Teile teilen.",
     "answer": true,
     "explain": "Die Teile müssen alle gleich sein, sonst ist es kein Bruch."
    }
   ]
  },
  {
   "type": "text",
   "title": "Echte, unechte und scheinbare Brüche",
   "html": "<ul>\n<li><b>Echter Bruch</b>: Der Zähler ist <b>kleiner</b> als der Nenner → er ist <b>weniger als ein Ganzes</b>. Z. B. 3/4, 2/5.</li>\n<li><b>Unechter Bruch</b>: Der Zähler ist <b>größer</b> als der Nenner → er ist <b>mehr als ein Ganzes</b>. Z. B. 5/4 (ein Ganzes und ein Viertel).</li>\n<li><b>Scheinbarer Bruch</b>: Der Zähler ist ein <b>Vielfaches</b> des Nenners → er ist gleich <b>einem oder mehreren Ganzen</b>. Z. B. 4/4 = 1, 6/3 = 2.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Gleichwertige Brüche und Vergleichen",
   "html": "<p>Zwei Brüche sind <b>gleichwertig</b>, wenn sie dieselbe <b>Menge</b> angeben, auch wenn sie mit verschiedenen Zahlen geschrieben sind.</p>\n<p>Beispiel: <b>1/2 = 2/4 = 4/8</b>. Eine halbe Pizza ist gleich zwei Viertel Pizza!</p>\n<p>Um einen gleichwertigen Bruch zu finden, <b>multipliziert</b> (erweitern) oder <b>dividiert</b> (kürzen) man Zähler und Nenner mit der <b>gleichen Zahl</b>: 1/2 → (×3) → 3/6.</p>\n<p><b>Vergleichen</b>:</p>\n<ul>\n<li>gleicher Nenner: Größer ist der Bruch mit dem größeren Zähler (3/5 &gt; 2/5);</li>\n<li>gleicher Zähler: Größer ist der Bruch mit dem kleineren Nenner (1/3 &gt; 1/6), weil die Teile größer sind!</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "1/2 = 2/4 = 4/8",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"3\">\n<rect x=\"120\" y=\"30\" width=\"200\" height=\"50\" fill=\"#60a5fa\"/>\n<rect x=\"320\" y=\"30\" width=\"200\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"120\" y=\"105\" width=\"100\" height=\"50\" fill=\"#34d399\"/>\n<rect x=\"220\" y=\"105\" width=\"100\" height=\"50\" fill=\"#34d399\"/>\n<rect x=\"320\" y=\"105\" width=\"100\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"420\" y=\"105\" width=\"100\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"120\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"170\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"220\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"270\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"320\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"370\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"420\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"470\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n</g>\n<text x=\"60\" y=\"64\" font-size=\"26\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">1/2</text>\n<text x=\"60\" y=\"139\" font-size=\"26\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">2/4</text>\n<text x=\"60\" y=\"214\" font-size=\"26\" font-weight=\"bold\" fill=\"#be185d\" text-anchor=\"middle\">4/8</text>\n<line x1=\"320\" y1=\"20\" x2=\"320\" y2=\"240\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n</svg>",
   "caption": "Die gefärbten Teile sind gleich lang: Die drei Brüche sind gleichwertig."
  },
  {
   "type": "text",
   "title": "Der Bruchteil einer Zahl",
   "html": "<p>So berechnest du den Bruchteil einer Zahl:</p>\n<ol>\n<li><b>teile</b> die Zahl durch den <b>Nenner</b> (so findest du, wie viel ein Teil ist);</li>\n<li><b>multipliziere</b> das Ergebnis mit dem <b>Zähler</b>.</li>\n</ol>\n<p>Beispiel: 3/4 von 20 → 20 : 4 = 5 → 5 × 3 = <b>15</b>.</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Die Geburtstagstorte",
   "html": "<p>Giulias Torte ist in <b>8 gleiche Stücke</b> geteilt. Die Freunde essen <b>5</b> davon.</p>\n<ul>\n<li>Sie haben <b>5/8</b> der Torte gegessen.</li>\n<li>Übrig bleiben 8 − 5 = 3 Stücke, also <b>3/8</b>.</li>\n<li>5/8 + 3/8 = 8/8 = <b>1 ganze Torte</b>.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Die Sammelbildchen",
   "html": "<p>Marco hat <b>24 Sammelbildchen</b> und schenkt seinem Freund Luca <b>2/3</b> davon. Wie viele Bildchen schenkt er ihm?</p>\n<ol>\n<li>24 : 3 = 8 (ein Drittel der Bildchen)</li>\n<li>8 × 2 = <b>16</b> verschenkte Bildchen</li>\n</ol>\n<p>Marco bleiben 24 − 16 = <b>8</b>, also 1/3.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …?",
   "html": "<p>Die alten <b>Ägypter</b> benutzten fast nur Brüche mit dem Zähler 1, wie 1/2, 1/3, 1/4 … Um 3/4 zu schreiben, sagten sie „1/2 + 1/4“!</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du schon …?",
   "html": "<p>Auch die Musik benutzt Brüche: Die Noten heißen <b>ganze Note, halbe Note (1/2), Viertelnote (1/4), Achtelnote (1/8)</b> … weil sie einen Bruchteil der Dauer der längsten Note dauern!</p>"
  },
  {
   "type": "remember",
   "title": "Zum Merken",
   "html": "<ul>\n<li>Nenner = in wie viele gleiche Teile ich teile; Zähler = wie viele Teile ich nehme.</li>\n<li>Echt &lt; 1, unecht &gt; 1, scheinbar = Ganze.</li>\n<li>Bruchteil einer Zahl: <b>durch den Nenner teilen, mal den Zähler nehmen</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, Brüche zu verstehen",
   "intro": "Nicht jeder versteht Brüche auf dieselbe Weise. Hier findest du dieselbe Idee erklärt mit Pizza, Schokolade, Zahlengerade, Geld, 3D-Würfeln und … so, wie es die alten Ägypter machten. Such dir aus, was zu dir passt!",
   "tabs": [
    {
     "label": "🍕 Die Pizza",
     "html": "<p>Eine ganze Pizza ist das <b>Ganze</b>. Wenn du sie in <b>8 gleiche Stücke</b> schneidest, ist jedes Stück <b>1/8</b> der Pizza.</p>\n<p>Wenn du 3 Stücke isst, hast du <b>3/8</b> gegessen: Der <b>Nenner</b> (8) sagt, in wie viele Stücke du geschnitten hast, der <b>Zähler</b> (3) sagt, wie viele Stücke du nimmst.</p>\n<p>Achtung: Die Stücke müssen <b>alle gleich</b> sein, sonst ist es kein richtiger Bruch … und jemand wird sauer!</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"170\" cy=\"140\" r=\"115\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"8\"/>\n<g stroke=\"#b45309\" stroke-width=\"4\">\n<line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"25\"/><line x1=\"170\" y1=\"140\" x2=\"251\" y2=\"59\"/><line x1=\"170\" y1=\"140\" x2=\"285\" y2=\"140\"/><line x1=\"170\" y1=\"140\" x2=\"251\" y2=\"221\"/>\n<line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"255\"/><line x1=\"170\" y1=\"140\" x2=\"89\" y2=\"221\"/><line x1=\"170\" y1=\"140\" x2=\"55\" y2=\"140\"/><line x1=\"170\" y1=\"140\" x2=\"89\" y2=\"59\"/>\n</g>\n<path d=\"M170,140 L170,25 A115,115 0 0,1 251,59 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<path d=\"M170,140 L251,59 A115,115 0 0,1 285,140 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<path d=\"M170,140 L285,140 A115,115 0 0,1 251,221 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<text x=\"330\" y=\"110\" font-size=\"30\" fill=\"#b91c1c\" font-weight=\"bold\">3 Stücke gegessen</text>\n<line x1=\"330\" y1=\"135\" x2=\"560\" y2=\"135\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<text x=\"330\" y=\"180\" font-size=\"30\" fill=\"#1f2937\" font-weight=\"bold\">8 Stücke insgesamt</text>\n<text x=\"330\" y=\"240\" font-size=\"34\" fill=\"#1d4ed8\" font-weight=\"bold\">= 3/8</text>\n</svg>"
    },
    {
     "label": "🍫 Die Schokoladentafel",
     "html": "<p>Eine Tafel Schokolade ist schon in gleiche Quadrate geteilt: Sie ist perfekt für Brüche!</p>\n<p>Diese Tafel hat <b>12 Quadrate</b>. Wenn du <b>4</b> verschenkst, hast du <b>4/12</b> der Tafel verschenkt. Aber schau genau hin: 4 Quadrate sind auch <b>eine Reihe von dreien</b>, also <b>1/3</b>. Also <b>4/12 = 1/3</b>: Das sind <b>gleichwertige Brüche</b>, also dieselbe Menge Schokolade auf verschiedene Arten geschrieben.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"40\" y=\"30\" width=\"320\" height=\"180\" rx=\"10\" fill=\"#78350f\"/>\n<g fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\">\n<rect x=\"50\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"40\" width=\"70\" height=\"50\"/>\n<rect x=\"50\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"98\" width=\"70\" height=\"50\"/>\n</g>\n<g fill=\"#fbbf24\" stroke=\"#451a03\" stroke-width=\"3\">\n<rect x=\"50\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"156\" width=\"70\" height=\"50\"/>\n</g>\n<text x=\"390\" y=\"100\" font-size=\"28\" fill=\"#1f2937\">4/12 verschenkt</text>\n<text x=\"390\" y=\"150\" font-size=\"28\" fill=\"#1f2937\">= 1 Reihe von 3</text>\n<text x=\"390\" y=\"200\" font-size=\"32\" fill=\"#b45309\" font-weight=\"bold\">= 1/3</text>\n</svg>"
    },
    {
     "label": "📏 Die Zahlengerade",
     "html": "<p>Brüche sind <b>Zahlen</b> und haben ihren Platz auf der Zahlengeraden, genau wie 0, 1, 2 …</p>\n<p>Teile die Strecke zwischen 0 und 1 in <b>4 gleiche Teile</b>: Jeder Sprung ist <b>1/4</b> lang. Nach 3 Sprüngen kommst du bei <b>3/4</b> an, nach 4 Sprüngen bei <b>4/4 = 1</b>, und wenn du mit 5 Sprüngen weitermachst, gehst du über 1 hinaus: <b>5/4</b> ist ein <b>unechter</b> Bruch, größer als das Ganze.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line x1=\"30\" y1=\"110\" x2=\"580\" y2=\"110\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<g stroke=\"#1f2937\" stroke-width=\"4\">\n<line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"125\"/><line x1=\"160\" y1=\"100\" x2=\"160\" y2=\"120\"/><line x1=\"270\" y1=\"100\" x2=\"270\" y2=\"120\"/><line x1=\"380\" y1=\"100\" x2=\"380\" y2=\"120\"/>\n<line x1=\"490\" y1=\"95\" x2=\"490\" y2=\"125\"/>\n</g>\n<g fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\">\n<path d=\"M50,95 Q105,40 160,95\"/><path d=\"M160,95 Q215,40 270,95\"/><path d=\"M270,95 Q325,40 380,95\"/>\n</g>\n<text x=\"50\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">0</text>\n<text x=\"160\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">1/4</text>\n<text x=\"270\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">2/4</text>\n<text x=\"380\" y=\"155\" font-size=\"22\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">3/4</text>\n<text x=\"490\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">1 = 4/4</text>\n<text x=\"215\" y=\"45\" font-size=\"18\" fill=\"#2563eb\">3 Sprünge von 1/4</text>\n</svg>"
    },
    {
     "label": "💶 Das Geld",
     "html": "<p>Mit Euro benutzt du Brüche schon, ohne es zu merken! Ein Euro sind <b>100 Cent</b>.</p>\n<ul>\n<li><b>1/2</b> Euro = 100 : 2 = <b>50 Cent</b> 🪙</li>\n<li><b>1/4</b> Euro = 100 : 4 = <b>25 Cent</b></li>\n<li><b>3/4</b> Euro = 25 × 3 = <b>75 Cent</b></li>\n<li><b>1/10</b> Euro = <b>10 Cent</b></li>\n<li><b>1/100</b> Euro = <b>1 Cent</b>: „Cent“ kommt nämlich von „hundert“, ein Cent ist „ein Hundertstel“ eines Euro!</li>\n</ul>\n<p>Probier es aus: Wenn du 20 € hast und 1/4 deines Geldes ausgibst, wie viel gibst du aus? 20 : 4 = <b>5 €</b>.</p>"
    },
    {
     "label": "🧊 Mit 3D-Würfeln",
     "html": "<p>Hier sind <b>12 Würfel</b>, in 3 Reihen zu je 4 angeordnet. Dreh das Modell und versuche, die Brüche zu sehen:</p>\n<ul>\n<li>eine Reihe mit 4 Würfeln ist <b>1/3</b> aller Würfel (4 von 12);</li>\n<li>eine Spalte mit 3 Würfeln ist <b>1/4</b> (3 von 12);</li>\n<li>6 Würfel sind <b>die Hälfte</b>: 6/12 = 1/2.</li>\n</ul>\n<p>Ändere die Zahlen mit den Reglern und such weitere Brüche!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "𓂀 Wie die alten Ägypter",
     "html": "<p>Die alten Ägypter benutzten fast nur Brüche mit dem Zähler 1 (wie 1/2, 1/3, 1/4 …), die wir heute <b>Stammbrüche</b> nennen. Die anderen schrieben sie als Summe verschiedener Brüche:</p>\n<ul>\n<li>3/4 schrieben sie <b>1/2 + 1/4</b></li>\n<li>2/5 schrieben sie <b>1/3 + 1/15</b></li>\n</ul>\n<p>Das scheint seltsam, ist aber sehr praktisch, um Dinge wirklich zu verteilen! Beispiel: <b>3 Brote unter 4 Personen</b> aufteilen. Ich schneide 2 Brote in der Mitte durch (4 Hälften) und 1 Brot in Viertel (4 Viertel): Jeder bekommt <b>1/2 + 1/4</b> Brot. Alle haben gleich große Stücke!</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Bruch-Landkarte: Tippe einen Knoten an und erfahre das Warum",
   "nodes": [
    {
     "id": "intero",
     "label": "Ganzes",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "Das Ganze, das wir teilen wollen: eine Pizza, eine Gruppe von Gegenständen, eine Zahl, ein Euro …",
     "why": "Ein Bruch hat nur Sinn, wenn wir wissen, was das Ganze ist: 1/2 einer kleinen Pizza ist nicht gleich 1/2 einer riesigen Pizza!"
    },
    {
     "id": "frazione",
     "label": "Bruch",
     "x": 50,
     "y": 30,
     "color": "#16a34a",
     "html": "Eine Zahl, die einen oder mehrere gleiche Teile eines Ganzen angibt, geschrieben mit zwei Zahlen und einem Strich.",
     "why": "Das Wort kommt vom lateinischen <i>frangere</i>, das „brechen“ bedeutet: Ein Bruch ist ein Ganzes, das in gleiche Teile „gebrochen“ ist. Brüche sind aus einem praktischen Bedürfnis entstanden: Ernten, Felder, Brot und Bier in gerechte Teile zu teilen."
    },
    {
     "id": "denominatore",
     "label": "Nenner",
     "x": 18,
     "y": 50,
     "color": "#f59e0b",
     "html": "Die Zahl unter dem Strich: in wie viele gleiche Teile das Ganze geteilt ist.",
     "why": "Er heißt so, weil er den Teilen den Namen gibt („nennt“): Nenner 4 → Viertel, 10 → Zehntel, 100 → Hundertstel. Je größer der Nenner, desto kleiner die Teile."
    },
    {
     "id": "numeratore",
     "label": "Zähler",
     "x": 82,
     "y": 50,
     "color": "#ef4444",
     "html": "Die Zahl über dem Strich: wie viele Teile wir nehmen.",
     "why": "Er heißt so, weil er die Teile, die wir nehmen, „zählt“."
    },
    {
     "id": "unita",
     "label": "Stammbruch",
     "x": 18,
     "y": 76,
     "color": "#a855f7",
     "html": "Ein Bruch mit dem Zähler 1, wie 1/2, 1/5, 1/10.",
     "why": "Das sind die ältesten Brüche: Die Ägypter benutzten vor fast 4000 Jahren vor allem sie. Der Papyrus Rhind (um 1650 v. Chr.), ein Übungsbuch eines Schreibers namens Ahmes, enthält Tabellen, um die anderen Brüche in Summen von Stammbrüchen zu verwandeln."
    },
    {
     "id": "tipi",
     "label": "Echte, unechte, scheinbare",
     "x": 50,
     "y": 62,
     "color": "#0ea5e9",
     "html": "Echt: kleiner als das Ganze (3/4). Unecht: größer (5/4). Scheinbar: ist eine ganze Zahl (8/4 = 2).",
     "why": "Man muss nur Zähler und Nenner vergleichen: Wenn du weniger Teile nimmst, als das Ganze hat, erreichst du das Ganze nicht; wenn du mehr nimmst, brauchst du ein zweites Ganzes."
    },
    {
     "id": "equivalenti",
     "label": "Gleichwertige Brüche",
     "x": 82,
     "y": 76,
     "color": "#14b8a6",
     "html": "Verschiedene Brüche, die dieselbe Menge angeben: 1/2 = 2/4 = 4/8.",
     "why": "Wenn du jeden Teil in zwei schneidest, verdoppeln sich die Teile insgesamt und auch die, die du nimmst: Die Menge ändert sich nicht. Deshalb kann man Zähler und Nenner mit derselben Zahl multiplizieren (oder dividieren)."
    },
    {
     "id": "storia",
     "label": "Der Bruchstrich",
     "x": 50,
     "y": 92,
     "color": "#64748b",
     "html": "Die Schreibweise der Brüche mit einer Zahl oben und einer unten, getrennt durch einen Strich.",
     "why": "Die Babylonier schrieben die Teile im Sechzigersystem (wie wir es noch heute mit Minuten und Sekunden tun). Den Bruchstrich benutzten arabische Mathematiker im Mittelalter, und nach Europa kam er durch <b>Leonardo Fibonacci</b> aus Pisa, der ihn 1202 in seinem <i>Liber Abaci</i> verwendete."
    }
   ],
   "edges": [
    [
     "intero",
     "frazione",
     "wird in gleiche Teile geteilt →"
    ],
    [
     "frazione",
     "denominatore",
     "unter dem Strich"
    ],
    [
     "frazione",
     "numeratore",
     "über dem Strich"
    ],
    [
     "frazione",
     "tipi",
     "kann sein"
    ],
    [
     "denominatore",
     "unita",
     "mit Zähler 1"
    ],
    [
     "numeratore",
     "equivalenti",
     "× gleiche Zahl"
    ],
    [
     "denominatore",
     "equivalenti",
     "× gleiche Zahl"
    ],
    [
     "frazione",
     "storia",
     "wird geschrieben mit"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Bruchtypen und Rechnen",
   "questions": [
    {
     "type": "mc",
     "q": "7/4 ist ein …",
     "options": [
      "echter Bruch",
      "unechter Bruch",
      "scheinbarer Bruch"
     ],
     "answer": 1,
     "explain": "Der Zähler (7) ist größer als der Nenner (4), aber kein Vielfaches davon: unecht."
    },
    {
     "type": "num",
     "q": "Wie viel ist 1/5 von 35?",
     "answer": 7,
     "explain": "35 : 5 = 7."
    },
    {
     "type": "mc",
     "q": "Welcher Bruch ist gleichwertig mit 2/3?",
     "options": [
      "4/6",
      "3/2",
      "2/6"
     ],
     "answer": 0,
     "explain": "Multipliziert man Zähler und Nenner mit 2: 4/6."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Bruch",
   "d": "Ein oder mehrere gleiche Teile eines Ganzen."
  },
  {
   "t": "Zähler",
   "d": "Die Zahl über dem Strich: wie viele Teile man nimmt."
  },
  {
   "t": "Nenner",
   "d": "Die Zahl unter dem Strich: in wie viele gleiche Teile das Ganze geteilt wird."
  },
  {
   "t": "Stammbruch",
   "d": "Ein einzelner Teil des Ganzen, mit Zähler 1 (z. B. 1/4)."
  },
  {
   "t": "Echter Bruch",
   "d": "Kleiner als ein Ganzes: Der Zähler ist kleiner als der Nenner."
  },
  {
   "t": "Unechter Bruch",
   "d": "Größer als ein Ganzes: Der Zähler ist größer als der Nenner."
  },
  {
   "t": "Scheinbarer Bruch",
   "d": "Gleich einem oder mehreren Ganzen: Der Zähler ist ein Vielfaches des Nenners."
  },
  {
   "t": "Gleichwertige Brüche",
   "d": "Verschiedene Brüche, die dieselbe Menge angeben."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Eine Pizza ist in 6 gleiche Teile geteilt und du isst 1 davon. Welchen Bruch hast du gegessen?",
    "options": [
     "6/1",
     "1/6",
     "5/6"
    ],
    "answer": 1,
    "explain": "1 Teil von 6: 1/6."
   },
   {
    "type": "mc",
    "q": "Welcher Bruch ist scheinbar?",
    "options": [
     "3/4",
     "9/3",
     "5/3"
    ],
    "answer": 1,
    "explain": "9/3 = 3 Ganze."
   },
   {
    "type": "tf",
    "q": "1/3 ist größer als 1/6.",
    "answer": true,
    "explain": "Gleicher Zähler: Die Drittel sind größer als die Sechstel."
   },
   {
    "type": "num",
    "q": "Wie viel ist 3/4 von 40?",
    "answer": 30,
    "explain": "40 : 4 = 10; 10 × 3 = 30."
   },
   {
    "type": "mc",
    "q": "Welcher Bruch ist größer?",
    "options": [
     "2/7",
     "5/7",
     "3/7"
    ],
    "answer": 1,
    "explain": "Gleicher Nenner: Der größere Zähler gewinnt."
   },
   {
    "type": "text",
    "q": "Wie heißt die Zahl unter dem Bruchstrich?",
    "answer": [
     "nenner",
     "der nenner"
    ],
    "explain": "Der Nenner."
   },
   {
    "type": "tf",
    "q": "4/8 und 1/2 sind gleichwertige Brüche.",
    "answer": true,
    "explain": "Teilt man 4/8 durch 4, erhält man 1/2."
   },
   {
    "type": "num",
    "q": "Wie viele Fünftel ergeben ein Ganzes?",
    "answer": 5,
    "explain": "5/5 = 1."
   },
   {
    "type": "order",
    "q": "Ordne vom kleinsten zum größten.",
    "items": [
     "1/8",
     "1/4",
     "1/2",
     "3/2"
    ],
    "explain": "Je größer der Nenner, desto kleiner die Teile; 3/2 ist mehr als ein Ganzes."
   },
   {
    "type": "num",
    "q": "Sara hat 18 Bonbons und isst 2/9 davon. Wie viele isst sie?",
    "answer": 4,
    "explain": "18 : 9 = 2; 2 × 2 = 4."
   }
  ],
  "gen": [
   [
    "fracOf",
    2
   ],
   [
    "fracEquiv",
    2
   ]
  ]
 }
});

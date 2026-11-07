TOPIC('de', {
 "id": "m1-geo-coordinate",
 "title": "Breite und Länge",
 "intro": "Wie kann man jeden beliebigen Punkt der Erde genau angeben, auch mitten im Ozean? Man benutzt ein gedachtes Netz aus <b>Breitenkreisen</b> und <b>Längenkreisen</b> (Meridianen), das <b>Gradnetz</b>. Jeder Ort hat seine „Adresse“ aus zwei Zahlen: der <b>geographischen Breite</b> und der <b>geographischen Länge</b>. Von der Länge hängen auch die <b>Zeitzonen</b> ab.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "1. Das Gradnetz",
   "html": "<p>Die Erde dreht sich um eine Achse, die durch den <b>Nordpol</b> und den <b>Südpol</b> verläuft. Auf dieser Grundlage haben die Geographen zwei Gruppen gedachter Linien gezogen:</p><ul><li><b>Breitenkreise</b>: waagerechte, zueinander parallele Kreise, die von West nach Ost um die Erde laufen. Der längste ist der <b>Äquator</b> (etwa <b>40.075 km</b>), der die Erde in die <b>nördliche Halbkugel</b> (Nord) und die <b>südliche Halbkugel</b> (Süd) teilt. Je näher man den Polen kommt, desto kleiner werden die Breitenkreise; die Pole sind nur Punkte.</li><li><b>Längenkreise (Meridiane)</b>: Halbkreise, die von einem Pol zum anderen gehen. Sie sind alle <b>gleich</b> (etwa 20.000 km). Der Bezugsmeridian verläuft durch die Sternwarte von <b>Greenwich</b> bei London (1884 auf der internationalen Konferenz in Washington gewählt) und teilt die Erde in die <b>östliche Halbkugel</b> (Ost) und die <b>westliche Halbkugel</b> (West).</li></ul>"
  },
  {
   "type": "svg",
   "title": "Breitenkreise und Längenkreise",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#0f172a\"/><circle cx=\"160\" cy=\"165\" r=\"120\" fill=\"#38bdf8\" stroke=\"#e0f2fe\" stroke-width=\"2\"/><g fill=\"none\" stroke=\"#fef08a\" stroke-width=\"2\"><ellipse cx=\"160\" cy=\"165\" rx=\"120\" ry=\"18\"/><ellipse cx=\"160\" cy=\"105\" rx=\"104\" ry=\"15\"/><ellipse cx=\"160\" cy=\"225\" rx=\"104\" ry=\"15\"/><ellipse cx=\"160\" cy=\"60\" rx=\"60\" ry=\"9\"/><ellipse cx=\"160\" cy=\"270\" rx=\"60\" ry=\"9\"/></g><ellipse cx=\"160\" cy=\"165\" rx=\"120\" ry=\"18\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"4\"/><text x=\"160\" y=\"30\" font-size=\"16\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#fef08a\">BREITENKREISE</text><text x=\"30\" y=\"170\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#fdba74\" text-anchor=\"end\">0°</text><circle cx=\"440\" cy=\"165\" r=\"120\" fill=\"#38bdf8\" stroke=\"#e0f2fe\" stroke-width=\"2\"/><g fill=\"none\" stroke=\"#bbf7d0\" stroke-width=\"2\"><ellipse cx=\"440\" cy=\"165\" rx=\"40\" ry=\"120\"/><ellipse cx=\"440\" cy=\"165\" rx=\"80\" ry=\"120\"/><ellipse cx=\"440\" cy=\"165\" rx=\"110\" ry=\"120\"/></g><line x1=\"440\" y1=\"45\" x2=\"440\" y2=\"285\" stroke=\"#ef4444\" stroke-width=\"4\"/><text x=\"440\" y=\"30\" font-size=\"16\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#bbf7d0\">LÄNGENKREISE</text><text x=\"448\" y=\"300\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#fca5a5\">Greenwich 0°</text><circle cx=\"440\" cy=\"45\" r=\"5\" fill=\"#ffffff\"/><text x=\"455\" y=\"50\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#ffffff\">Nordpol</text><text x=\"160\" y=\"196\" font-size=\"14\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#7c2d12\" font-weight=\"bold\">Äquator</text></svg>",
   "caption": "Links: die Breitenkreise, zu den Polen hin immer kleinere Kreise. Rechts: die Längenkreise, alle gleich, die sich an den Polen treffen."
  },
  {
   "type": "text",
   "title": "2. Breite und Länge",
   "html": "<p>Die Koordinaten werden in <b>Grad</b> (°) gemessen, unterteilt in <b>Minuten</b> (′, 1° = 60′) und <b>Sekunden</b> (″, 1′ = 60″), weil es <b>Winkel</b> sind, die vom Erdmittelpunkt aus gemessen werden.</p><ul><li><b>Geographische Breite</b>: Winkelabstand eines Punktes vom <b>Äquator</b>. Sie geht von <b>0°</b> (Äquator) bis <b>90°</b> (Pole) und wird mit <b>Nord</b> oder <b>Süd</b> angegeben. Alle Punkte desselben Breitenkreises haben dieselbe Breite.</li><li><b>Geographische Länge</b>: Winkelabstand eines Punktes vom <b>Meridian von Greenwich</b>. Sie geht von <b>0°</b> bis <b>180°</b> und wird mit <b>Ost</b> oder <b>West</b> angegeben. Alle Punkte desselben Längenkreises haben dieselbe Länge.</li></ul><p>Man schreibt immer <b>zuerst die Breite, dann die Länge</b>. Beispiel: <b>Rom 41° 54′ N, 12° 30′ O</b>. In Navigationsgeräten und im Internet benutzt man Dezimalgrade und Vorzeichen: 41,9 / 12,5 (Nord und Ost positiv, Süd und West negativ).</p>"
  },
  {
   "type": "remember",
   "title": "Ein Trick, um sie nicht zu verwechseln",
   "html": "<p><b>Breite</b> → „<b>breit</b>“: Die Linien sind <b>waagerecht</b> wie die Sprossen einer <b>Leiter</b>: Du steigst auf und ab zwischen Nord und Süd.<br><b>Länge</b> → „<b>lang</b>“: Die Meridiane sind <b>lange</b> Linien, die von Pol zu Pol gehen; du bewegst dich zwischen Ost und West.</p>"
  },
  {
   "type": "text",
   "title": "3. Die besonderen Breitenkreise",
   "html": "<p>Wegen der Neigung der Erdachse (etwa <b>23° 27′</b>) haben einige Breitenkreise eine astronomische Bedeutung:</p><table><tr><th>Breitenkreis</th><th>Breite</th><th>Warum er besonders ist</th></tr><tr><td>Äquator</td><td>0°</td><td>Die Sonne steht bei den Tagundnachtgleichen im Zenit (senkrecht)</td></tr><tr><td>Wendekreis des Krebses</td><td>23° 27′ N</td><td>Die Sonne steht am 21. Juni im Zenit</td></tr><tr><td>Wendekreis des Steinbocks</td><td>23° 27′ S</td><td>Die Sonne steht am 21.–22. Dezember im Zenit</td></tr><tr><td>Nördlicher Polarkreis</td><td>66° 33′ N</td><td>Jenseits davon gibt es mindestens einen Tag im Jahr mit Mitternachtssonne und einen mit Polarnacht</td></tr><tr><td>Südlicher Polarkreis</td><td>66° 33′ S</td><td>Dasselbe auf der südlichen Halbkugel</td></tr></table><p>Diese Breitenkreise begrenzen die <b>astronomischen Zonen</b> (heiße, gemäßigte, polare), die du in der Lektion über die Klimate kennenlernst.</p>"
  },
  {
   "type": "3d",
   "title": "Finde die Städte auf dem Globus",
   "scene": "globe",
   "options": {
    "points": [
     {
      "lat": 41.9,
      "lon": 12.5,
      "label": "Rom 41,9° N – 12,5° O",
      "color": "#16a34a"
     },
     {
      "lat": 45.46,
      "lon": 9.19,
      "label": "Mailand 45,5° N – 9,2° O",
      "color": "#16a34a"
     },
     {
      "lat": 51.48,
      "lon": 0,
      "label": "Greenwich 51,5° N – 0°",
      "color": "#dc2626"
     },
     {
      "lat": 40.71,
      "lon": -74,
      "label": "New York 40,7° N – 74° W",
      "color": "#2563eb"
     },
     {
      "lat": -33.87,
      "lon": 151.21,
      "label": "Sydney 33,9° S – 151,2° O",
      "color": "#f97316"
     },
     {
      "lat": -0.18,
      "lon": -78.47,
      "label": "Quito (fast am Äquator)",
      "color": "#a855f7"
     },
     {
      "lat": 35.68,
      "lon": 139.69,
      "label": "Tokio 35,7° N – 139,7° O",
      "color": "#f97316"
     },
     {
      "lat": -34.6,
      "lon": -58.38,
      "label": "Buenos Aires 34,6° S – 58,4° W",
      "color": "#2563eb"
     }
    ]
   },
   "caption": "Drehe den Globus: Beachte, dass Rom und New York fast dieselbe Breite haben (sie liegen fast auf demselben Breitenkreis), aber sehr unterschiedliche Längen."
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: Wie lang ist ein Grad?",
   "html": "<p>Ein Meridian geht von Pol zu Pol: 180° Breite auf etwa 20.000 km. Also <b>1° Breite ≈ 20.000 : 180 ≈ 111 km</b>.</p><p>Mailand liegt bei etwa 45,5° N, Rom bei etwa 41,9° N. Der Unterschied beträgt 45,5 − 41,9 = <b>3,6°</b>; 3,6 × 111 ≈ <b>400 km</b> in Nord-Süd-Richtung. (Die wirkliche Luftlinie beträgt etwa 480 km, weil Mailand auch weiter westlich liegt.)</p><p>Ein Längengrad dagegen ist nur am Äquator 111 km lang und wird zu den Polen hin kürzer, wo er null wird.</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz 1",
   "questions": [
    {
     "type": "mc",
     "q": "Welche Breite hat der Äquator?",
     "options": [
      "0°",
      "45°",
      "90°",
      "180°"
     ],
     "answer": 0,
     "explain": "Der Äquator ist der Bezugsbreitenkreis: 0°."
    },
    {
     "type": "mc",
     "q": "Welchen Höchstwert kann die Länge haben?",
     "options": [
      "90°",
      "180°",
      "360°",
      "23° 27′"
     ],
     "answer": 1,
     "explain": "180° Ost oder West: Darüber hinaus kommt man auf der anderen Seite zurück."
    },
    {
     "type": "tf",
     "q": "Alle Meridiane haben dieselbe Länge.",
     "answer": true,
     "explain": "Sie gehen alle von einem Pol zum anderen; die Breitenkreise dagegen werden zu den Polen hin kürzer."
    },
    {
     "type": "num",
     "q": "Wie viele km misst etwa 1° Breite?",
     "answer": 111,
     "tol": 2,
     "unit": "km",
     "explain": "20.000 km : 180° ≈ 111 km."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Die Zeitzonen",
   "html": "<p>Die Erde macht eine ganze Umdrehung (<b>360°</b>) in <b>24 Stunden</b>. In einer Stunde dreht sie sich also um 360 : 24 = <b>15°</b>. Deshalb wurde die Erde in <b>24 Zeitzonen</b> eingeteilt, Streifen von etwa 15° Länge: Innerhalb jeder Zone gilt dieselbe Uhrzeit.</p><ul><li>Die Bezugszone ist die von Greenwich: Die Uhrzeit heißt <b>UTC</b> (koordinierte Weltzeit).</li><li>Wenn man nach <b>Osten</b> reist, <b>addiert</b> man pro Zone eine Stunde (dort geht die Sonne früher auf); wenn man nach <b>Westen</b> reist, <b>zieht man ab</b>.</li><li><b>Italien</b> liegt in der Zone <b>UTC+1</b> (Mitteleuropäische Zeit); im Sommer, mit der <b>Sommerzeit</b>, wird es UTC+2.</li><li>Die Grenzen der Zeitzonen sind keine geraden Linien: Oft folgen sie den Staatsgrenzen. <b>China</b>, so breit wie 5 Zonen, benutzt eine einzige Uhrzeit für das ganze Land.</li></ul><p>Auf dem Meridian von 180° im Pazifischen Ozean verläuft (mit vielen Abweichungen) die <b>Datumsgrenze</b>: Wenn man sie nach Westen überquert, addiert man einen Tag, nach Osten zieht man ihn ab.</p>"
  },
  {
   "type": "example",
   "title": "Praxisbeispiel: den Onkel in New York anrufen",
   "html": "<p>In Rom ist es <b>18:00 Uhr</b> (Winter, UTC+1). New York liegt in der Zone <b>UTC−5</b>. Der Unterschied beträgt 1 − (−5) = <b>6 Stunden</b>, und New York liegt im Westen: Also ist es dort 18 − 6 = <b>12:00 Uhr</b>, Mittag. Der Onkel hat gerade Mittagspause!</p><p>Und in <b>Tokio</b> (UTC+9)? Unterschied 9 − 1 = 8 Stunden nach Osten: 18 + 8 = 26 → <b>2:00 Uhr nachts</b> am nächsten Tag. Besser nicht anrufen!</p>"
  },
  {
   "type": "widget",
   "title": "Der Zahlenstrahl der Zeitzonen",
   "widget": "numberLine",
   "options": {
    "min": -12,
    "max": 14,
    "step": 1,
    "marks": [
     -5,
     0,
     1,
     9
    ]
   },
   "caption": "Jeder Strich ist eine Zeitzone (UTC). Markiere: New York (−5), Greenwich (0), Italien (+1), Tokio (+9). Die Sprünge zwischen zwei Strichen zu zählen = Stundenunterschied. Kiribati benutzt sogar UTC+14!"
  },
  {
   "type": "curiosity",
   "title": "Das Problem der Länge",
   "html": "<p>Die Breite maß man schon im Mittelalter, indem man die Höhe des Polarsterns oder der Sonne beobachtete. Die Länge nicht: Man musste wissen, wie spät es <b>gleichzeitig</b> an Bord und im Abfahrtshafen war (jede Stunde Unterschied = 15°). Aber Pendeluhren auf schaukelnden Schiffen funktionierten nicht. Viele Schiffe gingen unter. 1714 setzte das englische Parlament einen enormen Preis für denjenigen aus, der das Problem lösen würde. Ihn gewann ein Tischler und Uhrmacher, <b>John Harrison</b>: Sein Schiffschronometer <b>H4</b>, 1761–62 erprobt, ging auf einer zweimonatigen Reise bis nach Jamaika nur um wenige Sekunden falsch.</p>"
  },
  {
   "type": "curiosity",
   "title": "Ein Ort mit allen Uhrzeiten",
   "html": "<p>Am <b>Nordpol</b> und am <b>Südpol</b> treffen sich alle Meridiane, also alle Zeitzonen! Wenn du um den Pol herumgehst, kannst du in wenigen Sekunden 24 Zonen durchqueren. Deshalb wählen die Forschungsstationen in der Antarktis der Einfachheit halber eine Uhrzeit: Die amerikanische Station <b>Amundsen-Scott</b>, genau am Südpol, benutzt die Zeit von Neuseeland, von wo der Nachschub kommt.</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege zum Verständnis",
   "intro": "Wenn dir Breite und Länge abstrakt vorkommen, probiere diese Methoden.",
   "tabs": [
    {
     "label": "🚢 Schiffe versenken",
     "html": "<p>Im Spiel „Schiffe versenken“ hat jedes Feld einen <b>Buchstaben</b> (Zeile) und eine <b>Zahl</b> (Spalte): „B4, getroffen!“ Die geographischen Koordinaten funktionieren genauso: Die Breite sagt, auf welcher „Zeile“ (Breitenkreis) du bist, die Länge, auf welcher „Spalte“ (Meridian). Der einzige Unterschied: Auf der Erde ist das Gitter um eine Kugel gewickelt, und die Zahlen beginnen in der Mitte (0°) und gehen nach Nord/Süd und Ost/West.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/><g stroke=\"#0369a1\" stroke-width=\"1.5\"><line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"280\"/><line x1=\"180\" y1=\"40\" x2=\"180\" y2=\"280\"/><line x1=\"260\" y1=\"40\" x2=\"260\" y2=\"280\"/><line x1=\"340\" y1=\"40\" x2=\"340\" y2=\"280\"/><line x1=\"420\" y1=\"40\" x2=\"420\" y2=\"280\"/><line x1=\"500\" y1=\"40\" x2=\"500\" y2=\"280\"/><line x1=\"100\" y1=\"40\" x2=\"500\" y2=\"40\"/><line x1=\"100\" y1=\"100\" x2=\"500\" y2=\"100\"/><line x1=\"100\" y1=\"160\" x2=\"500\" y2=\"160\"/><line x1=\"100\" y1=\"220\" x2=\"500\" y2=\"220\"/><line x1=\"100\" y1=\"280\" x2=\"500\" y2=\"280\"/></g><line x1=\"100\" y1=\"160\" x2=\"500\" y2=\"160\" stroke=\"#f97316\" stroke-width=\"4\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"280\" stroke=\"#dc2626\" stroke-width=\"4\"/><g font-family=\"sans-serif\" font-size=\"14\" fill=\"#0c4a6e\"><text x=\"510\" y=\"45\">60° N</text><text x=\"510\" y=\"105\">30° N</text><text x=\"510\" y=\"165\" fill=\"#c2410c\" font-weight=\"bold\">0° Äquator</text><text x=\"510\" y=\"225\">30° S</text><text x=\"85\" y=\"30\">90° W</text><text x=\"165\" y=\"30\">60° W</text><text x=\"285\" y=\"30\" fill=\"#b91c1c\" font-weight=\"bold\">0°</text><text x=\"400\" y=\"30\">60° O</text></g><circle cx=\"335\" cy=\"78\" r=\"10\" fill=\"#16a34a\"/><text x=\"350\" y=\"83\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#14532d\" font-weight=\"bold\">Rom ≈ 42° N, 12° O</text><circle cx=\"180\" cy=\"82\" r=\"10\" fill=\"#2563eb\"/><text x=\"110\" y=\"70\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e3a8a\">New York ≈ 41° N, 74° W</text></svg>"
    },
    {
     "label": "📐 Das Koordinatensystem",
     "html": "<p>In der Mathematik gibt man einen Punkt in der Ebene mit zwei Zahlen (x; y) an. Auf der Erde: Die <b>Länge</b> entspricht der <b>x</b>-Achse (rechts = Ost positiv, links = West negativ) und die <b>Breite</b> der <b>y</b>-Achse (oben = Nord positiv, unten = Süd negativ). Der Ursprung (0; 0) liegt im Golf von Guinea, wo der Äquator Greenwich trifft. Aber Achtung: In der Geographie schreibt man zuerst die Breite (y) und dann die Länge (x)!</p>"
    },
    {
     "label": "🍊 Die Orange in Spalten",
     "html": "<p>Nimm eine Orange: Die Spalten gehen von einem „Pol“ zum anderen wie die <b>Meridiane</b> und sind alle gleich wie die <b>Zeitzonen</b>. Wenn du sie in waagerechte Scheiben schneidest, ist jede Scheibe ein <b>Breitenkreis</b>: Die mittlere Scheibe (der Äquator) ist die größte, die zu den Enden hin werden immer kleiner. Eine Orange mit 24 Spalten wäre ein perfektes Modell der Zeitzonen!</p>"
    },
    {
     "label": "🌍 Globus mit Routen",
     "html": "<p>Folge auf dem Globus dem Breitenkreis von 40–42° N: Er verbindet Rom, Madrid, New York, Peking. Das sind alles Städte mit ähnlichen Jahreszeiten, weil sie die Sonne in ähnlichen Winkeln empfangen.</p>",
     "scene": "globe",
     "options": {
      "points": [
       {
        "lat": 41.9,
        "lon": 12.5,
        "label": "Rom",
        "color": "#16a34a"
       },
       {
        "lat": 40.42,
        "lon": -3.7,
        "label": "Madrid",
        "color": "#16a34a"
       },
       {
        "lat": 40.71,
        "lon": -74,
        "label": "New York",
        "color": "#16a34a"
       },
       {
        "lat": 39.9,
        "lon": 116.4,
        "label": "Peking",
        "color": "#16a34a"
       },
       {
        "lat": 41,
        "lon": 28.97,
        "label": "Istanbul",
        "color": "#16a34a"
       }
      ],
      "routes": [
       {
        "points": [
         2,
         1,
         0,
         4,
         3
        ],
        "color": "#f97316"
       }
      ]
     }
    }
   ]
  },
  {
   "type": "widget",
   "title": "Auf welcher Halbkugel liegt es?",
   "widget": "classify",
   "options": {
    "groups": [
     "Nördliche Halbkugel (Nord)",
     "Südliche Halbkugel (Süd)"
    ],
    "items": [
     [
      "🇮🇹 Rom",
      0
     ],
     [
      "🇦🇺 Sydney",
      1
     ],
     [
      "🇯🇵 Tokio",
      0
     ],
     [
      "🇦🇷 Buenos Aires",
      1
     ],
     [
      "🇿🇦 Kapstadt",
      1
     ],
     [
      "🇺🇸 New York",
      0
     ],
     [
      "🇧🇷 Rio de Janeiro",
      1
     ],
     [
      "🇪🇬 Kairo",
      0
     ]
    ]
   },
   "caption": "Merke dir: Die Städte der südlichen Halbkugel haben südliche Breite (S)."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz 2",
   "questions": [
    {
     "type": "num",
     "q": "Um wie viele Grad dreht sich die Erde in einer Stunde?",
     "answer": 15,
     "tol": 0,
     "unit": "°",
     "explain": "360° : 24 h = 15° pro Stunde."
    },
    {
     "type": "num",
     "q": "In Rom (UTC+1) ist es Mittag (12 Uhr). Wie spät ist es in Moskau (UTC+3)?",
     "answer": 14,
     "tol": 0,
     "unit": "h",
     "explain": "Moskau liegt 2 Zonen weiter östlich: 12 + 2 = 14."
    },
    {
     "type": "mc",
     "q": "Welcher Breitenkreis liegt bei 23° 27′ Nord?",
     "options": [
      "Wendekreis des Steinbocks",
      "Nördlicher Polarkreis",
      "Wendekreis des Krebses",
      "Äquator"
     ],
     "answer": 2,
     "explain": "Der Wendekreis des Krebses: Am 21. Juni steht die Sonne dort im Zenit."
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Begriffsnetz: die Adresse der Orte",
   "nodes": [
    {
     "id": "sfera",
     "label": "Rotierende Kugelerde",
     "x": 50,
     "y": 8,
     "color": "#0ea5e9",
     "html": "<p>Drehachse, Pole, Drehung in 24 Stunden.</p>",
     "why": "<p>Schon Eratosthenes (3. Jh. v. Chr.) maß den Erdumfang mit dem Schatten eines Stabes: Er fand einen Wert, der den wirklichen 40.000 km sehr nahe kam.</p>"
    },
    {
     "id": "angoli",
     "label": "Messung in Grad",
     "x": 82,
     "y": 22,
     "color": "#ca8a04",
     "html": "<p>Grad, Minuten, Sekunden (Sexagesimalsystem).</p>",
     "why": "<p>Der in 360° geteilte Kreis und die Unterteilungen durch 60 stammen von den babylonischen Astronomen, die im Sechzigersystem zählten (wie wir es bei Stunden und Minuten noch heute tun).</p>"
    },
    {
     "id": "paralleli",
     "label": "Breitenkreise → Breite",
     "x": 20,
     "y": 35,
     "color": "#f97316",
     "html": "<p>Von 0° (Äquator) bis 90° N oder S.</p>",
     "why": "<p>Der Äquator ist „natürlich“: Er ist der Kreis senkrecht zur Drehachse. Deshalb konnte man die Breite schon seit der Antike mit den Sternen messen.</p>"
    },
    {
     "id": "meridiani",
     "label": "Meridiane → Länge",
     "x": 50,
     "y": 40,
     "color": "#dc2626",
     "html": "<p>Von 0° (Greenwich) bis 180° O oder W.</p>",
     "why": "<p>Der Nullmeridian ist eine <b>Konvention</b>: Im Lauf der Zeit benutzte man viele (Paris, Rom, die Insel Ferro). 1884 wählten in Washington 25 Länder Greenwich, weil die meisten Seekarten es schon benutzten.</p>"
    },
    {
     "id": "tropici",
     "label": "Wendekreise und Polarkreise",
     "x": 15,
     "y": 70,
     "color": "#a855f7",
     "html": "<p>23° 27′ und 66° 33′.</p>",
     "why": "<p>Sie hängen von der Neigung der Erdachse ab (etwa 23,4°): Die Wendekreise liegen 23,4° vom Äquator entfernt, die Polarkreise bei 90° − 23,4° ≈ 66,6°.</p>"
    },
    {
     "id": "coordinate",
     "label": "Geographische Koordinaten",
     "x": 42,
     "y": 70,
     "color": "#16a34a",
     "html": "<p>Zuerst die Breite, dann die Länge.</p>",
     "why": "<p>Das Gradnetz wurde von Ptolemäus (2. Jh. n. Chr.) in seiner <i>Geographie</i> systematisch verwendet, die etwa 8.000 Orte mit ihren Koordinaten auflistete.</p>"
    },
    {
     "id": "fusi",
     "label": "Zeitzonen",
     "x": 78,
     "y": 62,
     "color": "#2563eb",
     "html": "<p>24 Zonen zu 15°, UTC, Sommerzeit, Datumsgrenze.</p>",
     "why": "<p>Bis ins 19. Jahrhundert benutzte jede Stadt die Zeit ihrer eigenen Sonne. Mit der Eisenbahn brauchte man gemeinsame Zeiten: Der Kanadier Sandford Fleming schlug die 24 Zonen vor (1879). Italien übernahm 1893 die Mitteleuropäische Zeit.</p>"
    },
    {
     "id": "gps",
     "label": "Navigation und GPS",
     "x": 68,
     "y": 90,
     "color": "#475569",
     "html": "<p>Vom Chronometer Harrisons zum GPS.</p>",
     "why": "<p>Die Länge zu messen erfordert, die <b>Zeit</b> zu messen: GPS funktioniert gerade dank der hochpräzisen Atomuhren an Bord der Satelliten.</p>"
    }
   ],
   "edges": [
    [
     "sfera",
     "paralleli",
     "Achse und Äquator"
    ],
    [
     "sfera",
     "meridiani",
     "Pole"
    ],
    [
     "angoli",
     "meridiani",
     "misst"
    ],
    [
     "angoli",
     "paralleli",
     "misst"
    ],
    [
     "paralleli",
     "tropici",
     "besondere"
    ],
    [
     "paralleli",
     "coordinate",
     "Breite"
    ],
    [
     "meridiani",
     "coordinate",
     "Länge"
    ],
    [
     "meridiani",
     "fusi",
     "15° = 1 Stunde"
    ],
    [
     "fusi",
     "gps",
     "Zeit"
    ]
   ]
  }
 ],
 "glossary": [
  {
   "t": "Gradnetz",
   "d": "Gesamtheit der Breiten- und Längenkreise, die man sich auf der Erde gezogen denkt."
  },
  {
   "t": "Breitenkreis",
   "d": "Gedachter Kreis parallel zum Äquator."
  },
  {
   "t": "Meridian (Längenkreis)",
   "d": "Gedachter Halbkreis, der die beiden Pole verbindet."
  },
  {
   "t": "Geographische Breite",
   "d": "Winkelabstand eines Punktes vom Äquator (0°–90° N oder S)."
  },
  {
   "t": "Geographische Länge",
   "d": "Winkelabstand eines Punktes vom Meridian von Greenwich (0°–180° O oder W)."
  },
  {
   "t": "Halbkugel",
   "d": "Hälfte der Erde: nördlich/südlich (durch den Äquator getrennt), östlich/westlich (durch Greenwich und 180°)."
  },
  {
   "t": "Zeitzone",
   "d": "Streifen von etwa 15° Länge, in dem dieselbe Uhrzeit gilt."
  },
  {
   "t": "UTC",
   "d": "Koordinierte Weltzeit, die weltweite Bezugszeit."
  },
  {
   "t": "Datumsgrenze",
   "d": "Linie in der Nähe des 180. Längengrades, an der sich das Kalenderdatum ändert."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Welche Linie teilt die Erde in nördliche und südliche Halbkugel?",
    "options": [
     "Der Meridian von Greenwich",
     "Der Äquator",
     "Der Wendekreis des Krebses",
     "Die Datumsgrenze"
    ],
    "answer": 1,
    "explain": "Der Äquator trennt Nord und Süd."
   },
   {
    "type": "text",
    "q": "Wie heißt der Grundmeridian (0°)?",
    "answer": [
     "greenwich",
     "meridian von greenwich",
     "der meridian von greenwich"
    ],
    "explain": "Er verläuft durch die Sternwarte von Greenwich bei London."
   },
   {
    "type": "mc",
    "q": "Wie schreibt man die Koordinaten eines Punktes?",
    "options": [
     "Zuerst die Länge, dann die Breite",
     "Zuerst die Breite, dann die Länge",
     "Nur die Breite",
     "Es gibt keine Reihenfolge"
    ],
    "answer": 1,
    "explain": "Z. B. Rom 41° 54′ N, 12° 30′ O."
   },
   {
    "type": "tf",
    "q": "Alle Breitenkreise sind gleich lang.",
    "answer": false,
    "explain": "Der Äquator ist der längste; zu den Polen hin werden sie kürzer."
   },
   {
    "type": "num",
    "q": "Wie viele Hauptzeitzonen gibt es?",
    "answer": 24,
    "tol": 0,
    "explain": "Eine für jede Stunde des Tages."
   },
   {
    "type": "num",
    "q": "In Rom (UTC+1) ist es 10 Uhr. Wie spät ist es in London (UTC+0)?",
    "answer": 9,
    "tol": 0,
    "unit": "h",
    "explain": "London liegt eine Zone weiter westlich: 10 − 1 = 9."
   },
   {
    "type": "num",
    "q": "Wenn es in Rom (UTC+1) 20 Uhr ist, wie spät ist es in Los Angeles (UTC−8)?",
    "answer": 11,
    "tol": 0,
    "unit": "h",
    "explain": "Unterschied 1 − (−8) = 9 Stunden nach Westen: 20 − 9 = 11."
   },
   {
    "type": "mc",
    "q": "Welche Breite hat der Südpol?",
    "options": [
     "0°",
     "90° N",
     "90° S",
     "180°"
    ],
    "answer": 2,
    "explain": "Die Pole haben die Breite 90°, Nord oder Süd."
   },
   {
    "type": "order",
    "q": "Ordne die Breitenkreise von Nord nach Süd",
    "items": [
     "Nördlicher Polarkreis",
     "Wendekreis des Krebses",
     "Äquator",
     "Wendekreis des Steinbocks",
     "Südlicher Polarkreis"
    ],
    "explain": "66° 33′ N, 23° 27′ N, 0°, 23° 27′ S, 66° 33′ S."
   },
   {
    "type": "mc",
    "q": "Warum war es schwierig, auf See die Länge zu messen?",
    "options": [
     "Es fehlten die Sterne",
     "Man brauchte genaue Uhren, die auf den Schiffen nicht funktionierten",
     "Der Kompass zeigte nicht nach Osten",
     "Das Meer war zu tief"
    ],
    "answer": 1,
    "explain": "Das Problem wurde im 18. Jahrhundert durch den Chronometer von John Harrison gelöst."
   },
   {
    "type": "tf",
    "q": "Rom und New York haben eine ähnliche Breite.",
    "answer": true,
    "explain": "Rom etwa 42° N, New York etwa 41° N."
   }
  ],
  "gen": [
   [
    "intAdd",
    2
   ]
  ]
 }
});

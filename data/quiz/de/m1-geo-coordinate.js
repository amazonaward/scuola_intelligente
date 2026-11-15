QBANK("de", "m1-geo-coordinate", {
 "f": [
  {
   "type": "mc",
   "q": "Welcher Breitenkreis liegt bei 66° 33′ Nord?",
   "options": [
    "Wendekreis des Steinbocks",
    "Nördlicher Polarkreis",
    "Südlicher Polarkreis"
   ],
   "answer": 1,
   "explain": "66° 33′ Nord ist der nördliche Polarkreis; der südliche Polarkreis liegt auf derselben Breite, aber im Süden."
  },
  {
   "type": "tf",
   "q": "Die Länge wird vom Äquator aus gemessen.",
   "answer": false,
   "explain": "Die Breite wird vom Äquator aus gemessen; die Länge vom Meridian von Greenwich."
  },
  {
   "type": "mc",
   "q": "Sydney liegt bei 33,9° Süd. In welcher Hemisphäre liegt es?",
   "options": [
    "Südlichen",
    "Nördlichen",
    "Westlichen"
   ],
   "answer": 0,
   "explain": "Süd bedeutet die Südhalbkugel, also unterhalb des Äquators."
  },
  {
   "type": "text",
   "q": "Mit welcher Abkürzung aus drei Buchstaben bezeichnet man die Greenwich-Zeit (koordinierte Weltzeit)?",
   "answer": [
    "utc"
   ],
   "explain": "UTC ist die Bezugszeit: Italien liegt in UTC+1 (UTC+2 in der Sommerzeit)."
  },
  {
   "type": "mc",
   "q": "Die Meridiane sind Halbkreise, die verlaufen…",
   "options": [
    "vom Äquator zu den Wendekreisen",
    "von West nach Ost",
    "von einem Pol zum anderen"
   ],
   "answer": 2,
   "explain": "Die Meridiane verbinden den Nordpol mit dem Südpol; die Breitenkreise verlaufen von West nach Ost."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Zwei Städte liegen auf demselben Meridian, die eine bei 52° N, die andere bei 40° N. Wie viele km liegen ungefähr dazwischen? (1° Breite ≈ 111 km)",
   "answer": 1332,
   "tol": 10,
   "unit": "km",
   "explain": "Unterschied: 52 − 40 = 12°. Entfernung: 12 × 111 = 1.332 km."
  },
  {
   "type": "mc",
   "q": "Ein Punkt hat die Koordinaten 34° S, 151° O. In welchen Hemisphären liegt er?",
   "options": [
    "Nördlich und westlich",
    "Nördlich und östlich",
    "Südlich und östlich",
    "Südlich und westlich"
   ],
   "answer": 2,
   "explain": "S = Süd → Südhalbkugel; O = Ost → Osthalbkugel."
  },
  {
   "type": "tf",
   "q": "China, so breit wie fünf Zeitzonen, benutzt fünf verschiedene Uhrzeiten.",
   "answer": false,
   "explain": "Zeitzonengrenzen folgen oft Staatsgrenzen: China verwendet eine einzige Uhrzeit für das ganze Land."
  },
  {
   "type": "text",
   "q": "Welches Instrument baute John Harrison, um das Längenproblem auf See zu lösen?",
   "answer": [
    "chronometer",
    "schiffschronometer",
    "das chronometer",
    "ein chronometer",
    "seechronometer",
    "uhr"
   ],
   "explain": "Harrisons Schiffschronometer behielt die Zeit des Heimathafens: Aus dem Unterschied zur Ortszeit ergibt sich die Länge (1 Stunde = 15°)."
  },
  {
   "type": "order",
   "q": "Ordne diese Städte von West nach Ost (nach Zeitzone).",
   "items": [
    "New York (UTC−5)",
    "London (UTC+0)",
    "Rom (UTC+1)",
    "Moskau (UTC+3)",
    "Tokio (UTC+9)"
   ],
   "explain": "Je weiter östlich, desto größer die UTC-Zahl: −5, 0, +1, +3, +9."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Auf einem Schiff steht die Sonne am höchsten (Ortsmittag), als der auf Greenwich eingestellte Chronometer 15:00 Uhr zeigt. Auf wie vielen Grad westlicher Länge befindet sich das Schiff?",
   "answer": 45,
   "tol": 0,
   "unit": "°",
   "explain": "Seit dem Mittag in Greenwich sind 3 Stunden vergangen, das Schiff liegt also im Westen: 3 × 15° = 45° West."
  },
  {
   "type": "mc",
   "q": "Ilaria sagt: „In Rom (UTC+1) ist es 15 Uhr, also ist es in New York (UTC−5) 21 Uhr, weil 15 + 6 = 21.“ Wo liegt der Fehler?",
   "options": [
    "Der Unterschied beträgt 4 Stunden, nicht 6",
    "Es gibt keinen Fehler",
    "New York liegt im Westen: man muss abziehen, also ist es 9 Uhr"
   ],
   "answer": 2,
   "explain": "Nach Westen kommt die Sonne später, die Uhrzeit ist also früher: 15 − 6 = 9."
  },
  {
   "type": "tf",
   "q": "Ein Längengrad ist überall auf der Erde etwa 111 km lang.",
   "answer": false,
   "explain": "Die Meridiane treffen sich an den Polen: Ein Längengrad misst am Äquator 111 km und schrumpft zu den Polen hin auf null."
  },
  {
   "type": "mc",
   "q": "Rom und New York haben fast dieselbe Breite, aber ihre Uhrzeiten unterscheiden sich stark. Warum?",
   "options": [
    "Weil die Uhrzeit von der Länge abhängt und die beiden Städte auf weit voneinander entfernten Meridianen liegen",
    "Weil die Uhrzeit von der Breite abhängt und New York weiter südlich liegt",
    "Weil New York auf der Südhalbkugel liegt"
   ],
   "answer": 0,
   "explain": "Zeitzonen sind Längenstreifen (je 15°): Der Zeitunterschied zwischen zwei Orten hängt von ihrem Ost-West-Abstand ab."
  },
  {
   "type": "num",
   "q": "Ein Flugzeug fliegt geradeaus nach Norden entlang eines Meridians vom Äquator bis zum 30. Breitenkreis Nord. Wie viele km legt es ungefähr zurück? (1° ≈ 111 km)",
   "answer": 3330,
   "tol": 30,
   "unit": "km",
   "explain": "Vom Äquator (0°) bis 30° N sind es 30 Grad: 30 × 111 = 3.330 km."
  }
 ]
});

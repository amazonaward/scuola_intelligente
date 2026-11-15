QBANK("de", "m1-geo-clima-ambienti", {
 "f": [
  {
   "type": "mc",
   "q": "Welches Gerät misst den Niederschlag?",
   "options": [
    "Anemometer",
    "Regenmesser",
    "Barometer"
   ],
   "answer": 1,
   "explain": "Der Regenmesser misst den Regen in Millimetern; das Anemometer misst den Wind, das Barometer den Luftdruck."
  },
  {
   "type": "tf",
   "q": "Mit zunehmender Höhe nimmt die Lufttemperatur im Durchschnitt ab.",
   "answer": true,
   "explain": "Im Durchschnitt sinkt die Temperatur um etwa 0,6 °C pro 100 m Aufstieg."
  },
  {
   "type": "mc",
   "q": "Welches Klima hat Palermo?",
   "options": [
    "Ozeanisch",
    "Mittelmeerklima",
    "Subarktisch"
   ],
   "answer": 1,
   "explain": "Palermo an der Küste Siziliens hat milde Winter und heiße, trockene Sommer: Mittelmeerklima."
  },
  {
   "type": "text",
   "q": "Wie heißt das Gerät, das die Windgeschwindigkeit misst?",
   "answer": [
    "anemometer",
    "das anemometer",
    "windmesser",
    "der windmesser"
   ],
   "explain": "Das Anemometer misst die Windgeschwindigkeit (die Windfahne zeigt die Richtung)."
  },
  {
   "type": "mc",
   "q": "Welches dieser Tiere lebt in der Tundra?",
   "options": [
    "Wildschwein",
    "Steinbock",
    "Rentier"
   ],
   "answer": 2,
   "explain": "Das Rentier lebt in der Tundra zwischen Moosen und Flechten. Wildschweine leben im Wald, Steinböcke in den Alpen."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Auf dem Gipfel eines 3.000 m hohen Berges hat es 2 °C. Wie viel Grad sind es ungefähr auf Meereshöhe (0 m)?",
   "answer": 20,
   "tol": 0.5,
   "unit": "°C",
   "explain": "Höhenunterschied 3.000 m → Abnahme von 3.000 : 100 × 0,6 = 18 °C. Unten ist es wärmer: 2 + 18 = 20 °C."
  },
  {
   "type": "num",
   "q": "Eine Stadt hat eine jährliche Temperaturschwankung von 20 °C und der wärmste Monat hat im Mittel 28 °C. Wie hoch ist der Mittelwert des kältesten Monats?",
   "answer": 8,
   "tol": 0,
   "unit": "°C",
   "explain": "Schwankung = wärmster − kältester, also kältester = 28 − 20 = 8 °C."
  },
  {
   "type": "mc",
   "q": "Warum nennt man die Alpengletscher «Thermometer» des Klimas?",
   "options": [
    "Weil sie in kalten Jahren länger werden und in warmen schrumpfen",
    "Weil sie Quecksilber enthalten",
    "Weil sie die Regenmenge messen"
   ],
   "answer": 0,
   "explain": "Die Länge eines Gletschers ändert sich mit der Temperatur: Wer sie über Jahre beobachtet, sieht den Klimawandel."
  },
  {
   "type": "tf",
   "q": "Die den feuchten Winden zugewandte Seite eines Berges bekommt mehr Regen als die andere Seite.",
   "answer": true,
   "explain": "Gebirge wirken als Barriere: Feuchte Luft steigt auf, kühlt ab und regnet auf der exponierten Seite ab."
  },
  {
   "type": "order",
   "q": "Ordne diese europäischen Naturräume von Nord nach Süd.",
   "items": [
    "Tundra",
    "Taiga",
    "Laubwald",
    "Mediterrane Macchie"
   ],
   "explain": "Von Nord nach Süd: Tundra, Taiga, Laubwald und schließlich Mittelmeer-Macchie."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Eine Seilbahn fährt von 1.000 m, wo es 25 °C hat, bis auf 2.800 m. Wie viel Grad sind es oben ungefähr?",
   "answer": 14.2,
   "tol": 0.2,
   "unit": "°C",
   "explain": "Höhenunterschied: 2.800 − 1.000 = 1.800 m. Abnahme: 1.800 : 100 × 0,6 = 10,8 °C. Oben: 25 − 10,8 = 14,2 °C."
  },
  {
   "type": "mc",
   "q": "Tromsø liegt nördlich des Polarkreises, doch sein Hafen friert im Winter nicht zu. Warum?",
   "options": [
    "Weil sie hoch gelegen ist",
    "Weil die Alpen sie vor kalten Winden schützen",
    "Weil eine warme Meeresströmung das Klima mildert"
   ],
   "answer": 2,
   "explain": "Der Golfstrom bringt warmes Wasser bis nach Norwegen und macht das Klima viel milder als an anderen Orten derselben Breite."
  },
  {
   "type": "tf",
   "q": "Zwei Städte auf derselben Breite haben immer dasselbe Klima.",
   "answer": false,
   "explain": "Meer, Strömungen, Winde und Höhe spielen auch eine Rolle: Irland ist mild, während Labrador (gleiche Breite) monatelang unter Schnee liegt."
  },
  {
   "type": "mc",
   "q": "Stadt A: Januar 4 °C, Juli 17 °C, Regen übers ganze Jahr. Stadt B: Januar −8 °C, Juli 20 °C, Regen vor allem im Sommer. Welche Aussage stimmt?",
   "options": [
    "A ist kontinental und B ozeanisch",
    "A ist ozeanisch und B kontinental",
    "Beide sind mediterran",
    "A ist mediterran und B polar"
   ],
   "answer": 1,
   "explain": "A: Schwankung 13 °C, milde Winter, Regen das ganze Jahr → ozeanisch. B: Schwankung 28 °C, eisige Winter, Sommerregen → kontinental."
  },
  {
   "type": "num",
   "q": "London: Januar 5 °C, Juli 19 °C. Moskau: Januar −6 °C, Juli 19 °C. Um wie viele Grad ist die Schwankung in Moskau größer als in London?",
   "answer": 11,
   "tol": 0,
   "unit": "°C",
   "explain": "London: 19 − 5 = 14 °C. Moskau: 19 − (−6) = 25 °C. Unterschied: 25 − 14 = 11 °C."
  }
 ]
});

QBANK("de", "m3-tec-robotica", {
 "f": [
  {
   "type": "mc",
   "q": "Welcher Teil eines Roboters arbeitet wie das „Gehirn“?",
   "options": [
    "Der Sensor",
    "Die Steuerung",
    "Der Aktor"
   ],
   "answer": 1,
   "explain": "Die Steuerung verarbeitet die Sensordaten und entscheidet, welche Befehle die Aktoren erhalten."
  },
  {
   "type": "tf",
   "q": "Ein Infrarotsensor kann einem Roboter helfen, einer schwarzen Linie auf dem Boden zu folgen.",
   "answer": true,
   "explain": "Richtig: Die schwarze Linie absorbiert Infrarotlicht, der helle Boden reflektiert es."
  },
  {
   "type": "text",
   "q": "Wie heißt die berühmte Mikrocontroller-Platine, die in Ivrea entstand und zum Roboterbau genutzt wird?",
   "answer": [
    "arduino"
   ],
   "explain": "Arduino entstand 2005 in Ivrea und wird weltweit zum Lernen von Elektronik und Robotik genutzt."
  },
  {
   "type": "mc",
   "q": "Welcher Sensor sagt einem Roboter, wie weit sich ein Motor gedreht hat?",
   "options": [
    "Ultraschall",
    "Kontakttaster",
    "Encoder"
   ],
   "answer": 2,
   "explain": "Der Encoder zählt Umdrehungen oder Bruchteile davon, so weiß man, wie viele Zentimeter sich der Roboter bewegt hat."
  },
  {
   "type": "num",
   "q": "In welchem Jahr schrieb der Schriftsteller Karel Čapek das Drama R.U.R., aus dem das Wort „Roboter“ stammt?",
   "answer": 1920,
   "explain": "Das Stück R.U.R. stammt von 1920; „Roboter“ kommt vom tschechischen robota, „Zwangsarbeit“."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Ein Schrittmotor macht 200 Schritte pro Umdrehung. Wie viele Schritte braucht man für 2,5 Umdrehungen?",
   "answer": 500,
   "unit": "Schritte",
   "explain": "200 × 2,5 = 500 Schritte."
  },
  {
   "type": "num",
   "q": "Ein Rad hat einen Umfang von 20 cm. Zählt der Encoder 15 Umdrehungen, wie viele Zentimeter hat der Roboter zurückgelegt?",
   "answer": 300,
   "unit": "cm",
   "explain": "Jede Umdrehung bringt 20 cm vorwärts: 15 × 20 = 300 cm (3 m)."
  },
  {
   "type": "mc",
   "q": "Ein Thermostat (geschlossener Regelkreis) hat das Ziel 20 °C und der Sensor misst 17 °C. Was tut die Steuerung?",
   "options": [
    "Schaltet die Heizung aus",
    "Schaltet die Heizung ein",
    "Tut nichts, weil der Timer nicht abgelaufen ist"
   ],
   "answer": 1,
   "explain": "Die Steuerung vergleicht den Messwert (17 °C) mit dem Ziel (20 °C) und handelt, um den Unterschied zu verkleinern."
  },
  {
   "type": "tf",
   "q": "Die SPS (PLC) ist ein robuster Computer, der in Fabriken Maschinen und Förderbänder steuert.",
   "answer": true,
   "explain": "Richtig: Die SPS (speicherprogrammierbare Steuerung) ist das robuste „Gehirn“ von Produktionslinien."
  },
  {
   "type": "order",
   "q": "Bringe die Arbeit einer automatischen Linie in einer Autofabrik in die richtige Reihenfolge.",
   "items": [
    "Ein Sensor erkennt die Karosserie auf dem Band",
    "Die SPS stoppt das Band",
    "Die Roboterarme schweißen",
    "Eine Kamera prüft die Qualität",
    "Das Band läuft wieder an"
   ],
   "explain": "Schema: Sensor ➜ Steuerung ➜ Aktoren (Arme) ➜ Qualitätskontrolle ➜ Neustart."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Ein Roboter orientiert sich nur mit den Encodern der Räder. Nach langer Strecke ist die geschätzte Position falsch. Warum?",
   "options": [
    "Die Räder können durchrutschen, und kleine Fehler summieren sich Umdrehung für Umdrehung",
    "Der Encoder funktioniert nach 10 Metern nicht mehr",
    "Der Roboter vergisst, dass er eine Steuerung hat",
    "Die Räder werden mit der Zeit breiter"
   ],
   "answer": 0,
   "explain": "Darum fügt man weitere Sensoren (Gyroskop, LiDAR, Kamera) hinzu, die die Position korrigieren."
  },
  {
   "type": "num",
   "q": "Ein Schrittmotor mit 200 Schritten pro Umdrehung bewegt über ein 1:5-Getriebe einen Arm (der Motor macht 5 Umdrehungen für 1 Umdrehung des Arms). Wie viele Schritte braucht man für eine volle Umdrehung des Arms?",
   "answer": 1000,
   "unit": "Schritte",
   "explain": "Der Motor muss 5 Umdrehungen machen: 5 × 200 = 1000 Schritte."
  },
  {
   "type": "mc",
   "q": "Eine Zeitschaltuhr-Bewässerung gießt jeden Tag 10 Minuten, auch wenn es regnet. Wie machst du daraus ein System mit geschlossenem Regelkreis?",
   "options": [
    "Indem man die Zeit verlängert",
    "Indem man einen Bodenfeuchtesensor einbaut, der das Wasser nur unter einem Schwellenwert einschaltet",
    "Indem man die Farbe der Rohre ändert",
    "Indem man den Timer durch einen genaueren ersetzt"
   ],
   "answer": 1,
   "explain": "Der geschlossene Regelkreis misst das Ergebnis (Feuchtigkeit) und vergleicht es mit dem Ziel: So wird bei Regen kein Wasser verschwendet."
  },
  {
   "type": "tf",
   "q": "Mehr Freiheitsgrade bei einem Roboterarm machen ihn immer einfacher zu steuern.",
   "answer": false,
   "explain": "Falsch: Mehr unabhängige Bewegungen machen den Arm vielseitiger, aber Berechnung und Steuerung aufwendiger."
  },
  {
   "type": "text",
   "q": "Wie heißt der Zielwert, den die Steuerung in einem geschlossenen Regelkreis mit dem Messwert des Sensors vergleicht?",
   "answer": [
    "sollwert",
    "soll-wert",
    "set-point",
    "setpoint",
    "zielwert"
   ],
   "explain": "Das ist der Sollwert (Set-Point): Die Steuerung berechnet die Differenz zwischen Sollwert und Messwert und gleicht sie aus."
  }
 ]
});

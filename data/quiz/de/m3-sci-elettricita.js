QBANK("de", "m3-sci-elettricita", {
 "f": [
  {
   "type": "mc",
   "q": "Was passiert zwischen zwei elektrischen Ladungen mit entgegengesetztem Vorzeichen?",
   "options": [
    "si respingono",
    "si attraggono",
    "non interagiscono"
   ],
   "answer": 1,
   "explain": "Entgegengesetzte Ladungen (eine positive, eine negative) ziehen sich an; gleichnamige Ladungen stoßen sich ab."
  },
  {
   "type": "tf",
   "q": "Kupfer ist ein guter Stromleiter.",
   "answer": true,
   "explain": "Metalle, besonders Kupfer, leiten den Strom leicht: Deshalb bestehen Stromkabel aus Kupfer."
  },
  {
   "type": "mc",
   "q": "Mit welchem Gerät misst man die Stärke des elektrischen Stroms?",
   "options": [
    "amperometro",
    "voltmetro",
    "termometro"
   ],
   "answer": 0,
   "explain": "Die Stromstärke in Ampere misst man mit einem Amperemeter; ein Voltmeter misst die Spannung."
  },
  {
   "type": "num",
   "q": "Wie viel Volt liefert eine normale Mignonzelle (Typ AA)?",
   "answer": 1.5,
   "tol": 0.01,
   "unit": "V",
   "explain": "Eine AA-Batterie liefert 1,5 V; deshalb ergeben drei Batterien in Reihe 4,5 V."
  },
  {
   "type": "text",
   "q": "Was ist die Maßeinheit der elektrischen Spannung?",
   "answer": [
    "volt",
    "das volt",
    "v"
   ],
   "explain": "Die elektrische Spannung misst man in Volt (V), zu Ehren von Alessandro Volta."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Eine 60-W-Glühlampe brennt 5 Stunden. Wie viele kWh verbraucht sie?",
   "answer": 0.3,
   "tol": 0.005,
   "unit": "kWh",
   "explain": "60 W = 0,06 kW. Energie = Leistung × Zeit = 0,06 × 5 = 0,3 kWh."
  },
  {
   "type": "num",
   "q": "In einem Stromkreis fließen 2 A durch einen Widerstand von 15 Ω. Wie groß ist die Spannung daran?",
   "answer": 30,
   "unit": "V",
   "explain": "Ohmsches Gesetz: U = R × I = 15 × 2 = 30 V."
  },
  {
   "type": "num",
   "q": "Drei Widerstände mit 5 Ω, 10 Ω und 15 Ω sind in Reihe geschaltet. Wie groß ist der Gesamtwiderstand?",
   "answer": 30,
   "unit": "Ω",
   "explain": "In Reihe addieren sich die Widerstände: 5 + 10 + 15 = 30 Ω."
  },
  {
   "type": "mc",
   "q": "Wie muss ein Voltmeter angeschlossen werden, um die Spannung an einer Glühlampe zu messen?",
   "options": [
    "in Reihe",
    "parallel",
    "nur an einem Anschluss"
   ],
   "answer": 1,
   "explain": "Das Voltmeter wird parallel zum Bauteil geschaltet, weil es die Potenzialdifferenz zwischen dessen beiden Enden misst."
  },
  {
   "type": "tf",
   "q": "Eine Sicherung schützt ein Gerät, wenn sie parallel dazu geschaltet ist.",
   "answer": false,
   "explain": "Falsch: Eine Sicherung wird in Reihe geschaltet, damit bei zu hohem Strom der Draht durchschmilzt und den Stromkreis unterbricht."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Ein Widerstand von 12 Ω und einer von 4 Ω sind parallel geschaltet. Wie groß ist der Gesamtwiderstand?",
   "answer": 3,
   "unit": "Ω",
   "explain": "Parallel: 1/R = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3, also R = 3 Ω. (Oder Produkt : Summe = 48 : 16 = 3 Ω.)"
  },
  {
   "type": "num",
   "q": "Eine 9-V-Batterie versorgt zwei in Reihe geschaltete Widerstände mit 100 Ω und 200 Ω. Wie viele Milliampere (mA) fließen im Stromkreis?",
   "answer": 30,
   "unit": "mA",
   "explain": "Gesamtwiderstand = 100 + 200 = 300 Ω. I = U : R = 9 : 300 = 0,03 A = 30 mA (1 A = 1000 mA)."
  },
  {
   "type": "mc",
   "q": "Ein 1500-W-Haartrockner hängt am 230-V-Netz. Wie viel Strom zieht er ungefähr?",
   "options": [
    "circa 0,15 A",
    "circa 345 A",
    "circa 6,5 A"
   ],
   "answer": 2,
   "explain": "Aus P = U × I folgt I = P : U = 1500 : 230 ≈ 6,5 A."
  },
  {
   "type": "tf",
   "q": "Wenn man eine zweite gleiche Glühlampe in Reihe zur ersten schaltet, steigt die Stromstärke im Stromkreis.",
   "answer": false,
   "explain": "Falsch: In Reihe addieren sich die Widerstände, der Gesamtwiderstand wächst und bei gleicher Spannung sinkt der Strom (I = U : R)."
  },
  {
   "type": "order",
   "q": "Bringe den Weg des Stroms vom Kraftwerk bis zur Steckdose zu Hause in die richtige Reihenfolge.",
   "items": [
    "Wasser oder Dampf dreht die Turbine",
    "Der Generator wandelt Bewegung in elektrischen Strom um",
    "Ein Transformator erhöht die Spannung",
    "Der Strom fließt über Hochspannungsleitungen",
    "Ein weiterer Transformator senkt die Spannung auf 230 V"
   ],
   "explain": "Die Turbine treibt den Generator an, der Strom erzeugt; die Spannung wird erhöht, um Verluste in den Leitungen zu verringern, und dann für den Haushalt auf 230 V gesenkt."
  }
 ]
});

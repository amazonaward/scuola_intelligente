QBANK("de", "m3-tec-elettricita-elettronica", {
 "f": [
  {
   "type": "mc",
   "q": "Welches Messgerät misst die Stärke des elektrischen Stroms?",
   "options": [
    "Voltmeter",
    "Amperemeter",
    "Ohmmeter"
   ],
   "answer": 1,
   "explain": "Das Amperemeter misst die Stromstärke in Ampere (A)."
  },
  {
   "type": "tf",
   "q": "Salzwasser leitet den elektrischen Strom nicht.",
   "answer": false,
   "explain": "Falsch: Gelöste Salze lassen Ladungen wandern, daher leitet Salzwasser."
  },
  {
   "type": "text",
   "q": "Wie heißt die Diode, die Licht aussendet? (Abkürzung aus drei Buchstaben)",
   "answer": [
    "led",
    "die led",
    "eine led"
   ],
   "explain": "LED = Light Emitting Diode, „lichtemittierende Diode“."
  },
  {
   "type": "mc",
   "q": "In welcher Einheit misst man die elektrische Leistung?",
   "options": [
    "Ohm",
    "Ampere",
    "Watt"
   ],
   "answer": 2,
   "explain": "Die Leistung wird in Watt (W) gemessen: P = V × I."
  },
  {
   "type": "num",
   "q": "Wie viele Volt hat eine normale AA-Batterie?",
   "answer": 1.5,
   "unit": "V",
   "explain": "Eine AA-Batterie liefert 1,5 V."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Ein Heizlüfter an 230 V nimmt 6 A auf. Welche Leistung in Watt hat er?",
   "answer": 1380,
   "unit": "W",
   "explain": "P = V × I = 230 × 6 = 1380 W."
  },
  {
   "type": "num",
   "q": "Ein Widerstand von 1000 Ω liegt an 5 V. Wie viele Milliampere (mA) fließen hindurch?",
   "answer": 5,
   "unit": "mA",
   "explain": "I = V ÷ R = 5 ÷ 1000 = 0,005 A = 5 mA."
  },
  {
   "type": "mc",
   "q": "Drei gleiche Glühlampen sind in Reihe an eine 9-V-Batterie angeschlossen. Welche Spannung liegt an jeder an?",
   "options": [
    "9 V",
    "3 V",
    "27 V"
   ],
   "answer": 1,
   "explain": "In Reihe teilt sich die Spannung gleichmäßig auf: 9 V ÷ 3 = 3 V."
  },
  {
   "type": "tf",
   "q": "Ein Transistor kann als Schalter funktionieren, der durch ein elektrisches Signal gesteuert wird.",
   "answer": true,
   "explain": "Richtig: Ein kleines Signal an einem Anschluss steuert einen größeren Strom. Chips enthalten Milliarden davon."
  },
  {
   "type": "order",
   "q": "Bringe die Schritte zur Berechnung des Vorwiderstands einer LED in die richtige Reihenfolge.",
   "items": [
    "Den gewünschten LED-Strom festlegen",
    "Die LED-Spannung von der Versorgungsspannung abziehen",
    "R = V ÷ I berechnen",
    "Den gleichen oder etwas größeren Normwert wählen"
   ],
   "explain": "Zuerst der Strom, dann die abzubauende Spannung, dann das ohmsche Gesetz, zuletzt der Normwert."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Du willst eine LED mit 2 V und 10 mA an einer 9-V-Batterie betreiben. Welcher Vorwiderstand (in Ω) ist nötig?",
   "answer": 700,
   "unit": "Ω",
   "explain": "Der Widerstand muss 9 − 2 = 7 V abbauen. 10 mA = 0,01 A, also R = 7 ÷ 0,01 = 700 Ω."
  },
  {
   "type": "num",
   "q": "Eine 100-W-Lampe brennt 8 Stunden. Energie kostet 0,25 € pro kWh. Wie viel kostet das (in €)?",
   "answer": 0.2,
   "tol": 0.005,
   "unit": "€",
   "explain": "100 W × 8 h = 800 Wh = 0,8 kWh. Kosten: 0,8 × 0,25 = 0,20 €."
  },
  {
   "type": "mc",
   "q": "Wenn sich die Spannung an einem Widerstand verdoppelt und der Widerstand gleich bleibt, was passiert mit dem Strom?",
   "options": [
    "Er halbiert sich",
    "Er verdoppelt sich",
    "Er bleibt gleich",
    "Er wird viermal so groß"
   ],
   "answer": 1,
   "explain": "Nach dem ohmschen Gesetz I = V ÷ R sind Spannung und Strom bei konstantem R direkt proportional."
  },
  {
   "type": "mc",
   "q": "Du möchtest einen Alarm, der nur auslöst, wenn sich vor der Tür eine Person bewegt. Welchen Sensor wählst du?",
   "options": [
    "Fotowiderstand (LDR)",
    "Thermistor (NTC)",
    "Passiver Infrarotsensor (PIR)"
   ],
   "answer": 2,
   "explain": "Der PIR erkennt die Bewegung warmer Körper; der Fotowiderstand misst nur Licht, der Thermistor die Temperatur."
  },
  {
   "type": "tf",
   "q": "Um die Spannung einer Batterie zu messen, schließt man das Amperemeter direkt an ihre beiden Pole an.",
   "answer": false,
   "explain": "Falsch: Spannung misst man mit dem Voltmeter; ein Amperemeter hat sehr geringen Widerstand und würde so einen Kurzschluss verursachen."
  }
 ]
});

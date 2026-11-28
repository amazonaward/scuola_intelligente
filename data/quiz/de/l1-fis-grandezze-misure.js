QBANK("de", "l1-fis-grandezze-misure", {
 "f": [
  { "type": "mc", "q": "Was ist die SI-Einheit der Länge?", "options": ["Das Meter", "Das Zentimeter", "Das Kilometer"], "answer": 0, "explain": "Die SI-Einheit der Länge ist das Meter (m)." },
  { "type": "tf", "q": "Die Sekunde ist die SI-Einheit der Zeit.", "answer": true, "explain": "Die Zeit misst man in Sekunden (s)." },
  { "type": "num", "q": "Wie viele Gramm sind 2 kg?", "answer": 2000, "tol": 0, "unit": "g", "explain": "1 kg = 1000 g, also 2 kg = 2000 g." },
  { "type": "mc", "q": "Welche dieser Eigenschaften ist KEINE physikalische Größe?", "options": ["Die Temperatur", "Die Sympathie", "Die Masse"], "answer": 1, "explain": "Sympathie lässt sich nicht objektiv messen." },
  { "type": "text", "q": "Wie lautet das Symbol des Kilogramms?", "answer": ["kg"], "explain": "Man schreibt kg." }
 ],
 "m": [
  { "type": "num", "q": "Rechne 0,75 km in Meter um.", "answer": 750, "tol": 0, "unit": "m", "explain": "0,75 × 1000 = 750 m." },
  { "type": "num", "q": "Rechne 18 km/h in m/s um.", "answer": 5, "tol": 0, "unit": "m/s", "explain": "18 : 3,6 = 5 m/s." },
  { "type": "mc", "q": "Was ist die SI-Einheit der Geschwindigkeit?", "options": ["m/s", "m·s", "kg/m", "s/m"], "answer": 0, "explain": "Geschwindigkeit ist Weg geteilt durch Zeit: m/s." },
  { "type": "mc", "q": "Wie schreibt man 3 400 000 in wissenschaftlicher Notation?", "options": ["3,4 × 10⁶", "34 × 10⁵", "3,4 × 10⁵", "0,34 × 10⁷"], "answer": 0, "explain": "Das Komma wird um 6 Stellen verschoben: 3,4 × 10⁶." },
  { "type": "tf", "q": "1 Liter ist gleich 1 dm³.", "answer": true, "explain": "Das ist die praktische Definition des Liters: das Volumen eines Würfels mit 1 dm Kantenlänge." }
 ],
 "d": [
  { "type": "mc", "q": "Eine Platte hat eine Fläche von 2,5 m². Wie viele cm² sind das?", "options": ["250", "2500", "25 000", "250 000"], "answer": 2, "explain": "1 m² = 10⁴ cm², also 2,5 m² = 2,5 × 10⁴ = 25 000 cm²." },
  { "type": "mc", "q": "Was ist die Größenordnung der Masse eines Elektrons, 9,11 × 10⁻³¹ kg?", "options": ["10⁻³⁰", "10⁻³¹", "10⁻³²", "10⁻²⁹"], "answer": 0, "explain": "Da 9,11 ≥ 5 ist, ist die Größenordnung 10⁻³¹⁺¹ = 10⁻³⁰." },
  { "type": "num", "q": "Berechne (6 × 10⁸) / (2 × 10³) und gib den Exponenten von 10 im Ergebnis an, geschrieben als 3 × 10ⁿ.", "answer": 5, "tol": 0, "explain": "6/2 = 3 und 8 − 3 = 5: Das Ergebnis ist 3 × 10⁵." },
  { "type": "mc", "q": "Ein Gegenstand hat die Dichte 2,7 g/cm³. Wie viel sind das in kg/m³?", "options": ["27", "270", "2700", "27 000"], "answer": 2, "explain": "1 g/cm³ = 1000 kg/m³, also 2,7 g/cm³ = 2700 kg/m³." },
  { "type": "mc", "q": "Warum ist die Formel v = s · t sicher falsch?", "options": ["Ihre Einheit ist m·s und nicht m/s", "Weil die Masse fehlt", "Weil v ein Kleinbuchstabe ist", "Sie ist nicht falsch"], "answer": 0, "explain": "Die Dimensionsanalyse zeigt: Die Geschwindigkeit verlangt den Quotienten s/t." }
 ]
});

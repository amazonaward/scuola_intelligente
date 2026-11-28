QBANK("de", "l1-fis-equilibrio-fluidi", {
 "f": [
  { "type": "mc", "q": "Was ist die SI-Einheit des Drucks?", "options": ["Newton", "Pascal", "Joule"], "answer": 1, "explain": "Den Druck misst man in Pascal: 1 Pa = 1 N/m²." },
  { "type": "num", "q": "Eine Kraft von 100 N wirkt senkrecht auf 2 m². Welchen Druck (in Pa) übt sie aus?", "answer": 50, "unit": "Pa", "explain": "p = F/A = 100/2 = 50 Pa." },
  { "type": "tf", "q": "Bei gleichem Gewicht übt eine Person mit Skiern auf den Schnee einen kleineren Druck aus als eine mit Wanderstiefeln.", "answer": true, "explain": "Die Skier haben eine viel größere Fläche: Bei gleicher Kraft ist der Druck p = F/A kleiner." },
  { "type": "text", "q": "Welcher Wissenschaftler aus Syrakus formulierte das Prinzip über den Auftrieb, den in ein Fluid getauchte Körper erfahren?", "answer": ["archimedes", "archimedes von syrakus"], "explain": "Archimedes von Syrakus (3. Jahrhundert v. Chr.) formulierte das Prinzip, das seinen Namen trägt." },
  { "type": "mc", "q": "Ein Gegenstand sinkt im Wasser, wenn seine Dichte …", "options": ["kleiner als 1000 kg/m³ ist", "gleich 1000 kg/m³ ist", "größer als 1000 kg/m³ ist"], "answer": 2, "explain": "Übersteigt die Dichte des Körpers die des Wassers, überwiegt die Gewichtskraft den Auftrieb, und der Körper sinkt." }
 ],
 "m": [
  { "type": "num", "q": "Welchen Druck (in Pa) übt Wasser (ρ = 1000 kg/m³, g = 10 m/s²) in 8 m Tiefe aus, ohne den Luftdruck?", "answer": 80000, "unit": "Pa", "explain": "p = ρ g h = 1000 × 10 × 8 = 80 000 Pa." },
  { "type": "mc", "q": "Nach dem Pascalschen Prinzip gilt in einem ruhenden Fluid für einen auf einen Punkt ausgeübten Druck:", "options": ["Er bleibt nur an diesem Punkt", "Er überträgt sich gleich auf jeden Punkt des Fluids", "Er nimmt mit dem Abstand ab"], "answer": 1, "explain": "Der Druck überträgt sich unverändert im ganzen Fluid und auf die Wände." },
  { "type": "num", "q": "Eine hydraulische Presse hat Kolben mit den Flächen 10 cm² und 500 cm². Drückt man den kleinen mit 20 N, welche Kraft (in N) erhält man am großen?", "answer": 1000, "unit": "N", "explain": "F2 = F1·A2/A1 = 20 × 500/10 = 1000 N." },
  { "type": "tf", "q": "Der Auftrieb auf einen ganz eingetauchten Körper hängt vom Volumen des Körpers ab, aber nicht von seiner Form.", "answer": true, "explain": "FA = ρ V g: Es zählt nur das Volumen des verdrängten Fluids." },
  { "type": "mc", "q": "Ein Eisblock (917 kg/m³) schwimmt im Wasser. Welcher Anteil seines Volumens ist ungefähr eingetaucht?", "options": ["8 %", "50 %", "92 %"], "answer": 2, "explain": "Der eingetauchte Anteil ist ρEis/ρWasser = 917/1000, etwa 92 %." }
 ],
 "d": [
  { "type": "num", "q": "Ein Holzwürfel mit 20 cm Kantenlänge und der Masse 6,4 kg ist ganz in Wasser getaucht (ρ = 1000 kg/m³, g = 10 m/s²). Mit welcher resultierenden Kraft (in N, positiv, wenn nach oben) wird er nach oben gedrückt?", "answer": 16, "unit": "N", "explain": "V = 0,008 m³: FA = 1000 × 0,008 × 10 = 80 N; F_G = 6,4 × 10 = 64 N. Resultierende nach oben: 80 − 64 = 16 N." },
  { "type": "num", "q": "In einem U-Rohr steht auf der einen Seite Wasser, auf der anderen Öl; die Wassersäule ist 20 cm hoch. Wenn die Dichte des Öls 800 kg/m³ beträgt, wie hoch (in cm) ist die Ölsäule, gemessen von derselben Trennfläche aus?", "answer": 25, "unit": "cm", "explain": "ρ1h1 = ρ2h2: 1000 × 20 = 800 × h, also h = 25 cm." },
  { "type": "mc", "q": "Warum ist die Quecksilbersäule eines Barometers etwa 760 mm hoch, während eine Wassersäule über 10 m hoch wäre?", "options": ["Weil Quecksilber viel dichter ist als Wasser (etwa 13,6-mal)", "Weil Quecksilber kälter ist", "Weil Quecksilber die Schwerkraft nicht spürt"], "answer": 0, "explain": "Die Säule muss pro Flächeneinheit eine Gewichtskraft haben, die dem Luftdruck entspricht: ρ g h = konstant. Bei 13,6-mal größerem ρ ist h 13,6-mal kleiner." },
  { "type": "tf", "q": "Wenn ein Taucher in Meerwasser von 10 m auf 30 m Tiefe sinkt, steigt der Gesamtdruck um etwa 2 atm.", "answer": true, "explain": "Alle 10 m Wasser kommt etwa 1 atm hinzu: 20 m mehr entsprechen etwa 2 atm mehr." },
  { "type": "mc", "q": "Ein mit Waren beladenes Boot sinkt tiefer ins Wasser ein. Was geschieht mit dem Auftrieb?", "options": ["Er nimmt ab", "Er nimmt zu, bis er der neuen Gewichtskraft gleich ist", "Er bleibt gleich, und das Boot sinkt"], "answer": 1, "explain": "Beim tieferen Eintauchen verdrängt das Boot mehr Wasser: Der Auftrieb wächst, bis er der gesamten Gewichtskraft gleich ist und das Gleichgewicht wiederhergestellt ist." }
 ]
});

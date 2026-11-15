QBANK("de", "m3-mat-cerchio", {
 "f": [
  {
   "type": "mc",
   "q": "Der Radius eines Kreises ist der Abstand zwischen…",
   "options": [
    "dem Mittelpunkt und einem Punkt auf dem Kreis",
    "zwei beliebigen Punkten auf dem Kreis",
    "zwei gegenüberliegenden Punkten auf dem Kreis"
   ],
   "answer": 0,
   "explain": "Der Radius verbindet den Mittelpunkt mit einem beliebigen Punkt auf dem Kreis."
  },
  {
   "type": "num",
   "q": "Der Radius eines Rades beträgt 7 cm. Wie lang ist der Durchmesser?",
   "answer": 14,
   "unit": "cm",
   "explain": "Der Durchmesser ist doppelt so lang wie der Radius: 7 × 2 = 14 cm."
  },
  {
   "type": "tf",
   "q": "Der Durchmesser ist doppelt so lang wie der Radius.",
   "answer": true,
   "explain": "d = 2r: Der Durchmesser geht durch den Mittelpunkt und verbindet zwei gegenüberliegende Punkte, besteht also aus zwei Radien."
  },
  {
   "type": "mc",
   "q": "Welche Formel gibt den Umfang des Kreises an?",
   "options": [
    "πr²",
    "πr",
    "2πr"
   ],
   "answer": 2,
   "explain": "Der Umfang ist C = 2πr (oder πd). πr² ist dagegen die Formel für den Flächeninhalt."
  },
  {
   "type": "text",
   "q": "Wie heißt der Teil eines Kreises zwischen zwei Radien? (zwei Wörter)",
   "answer": [
    "kreissektor",
    "der kreissektor",
    "sektor",
    "kreisausschnitt"
   ],
   "explain": "Der Teil der Kreisfläche zwischen zwei Radien ist der Kreissektor, wie ein Tortenstück."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Eine Pizza hat einen Durchmesser von 30 cm. Wie lang ist ihr Rand, also der Umfang? (π = 3,14)",
   "answer": 94.2,
   "tol": 0.05,
   "unit": "cm",
   "explain": "C = π × d = 3,14 × 30 = 94,2 cm."
  },
  {
   "type": "num",
   "q": "Wie groß ist der Flächeninhalt eines Kreises mit Radius 6 cm? (π = 3,14)",
   "answer": 113.04,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "A = π × r² = 3,14 × 6² = 3,14 × 36 = 113,04 cm²."
  },
  {
   "type": "mc",
   "q": "Ein Kreis hat einen Flächeninhalt von 78,5 cm². Wie lang ist der Radius? (π = 3,14)",
   "options": [
    "10 cm",
    "5 cm",
    "25 cm"
   ],
   "answer": 1,
   "explain": "r² = A : π = 78,5 : 3,14 = 25, also r = √25 = 5 cm."
  },
  {
   "type": "tf",
   "q": "Verdoppelt sich der Radius eines Kreises, verdoppelt sich auch sein Umfang.",
   "answer": true,
   "explain": "C = 2πr ist proportional zum Radius: doppelter Radius, doppelter Umfang (der Flächeninhalt wird dagegen viermal so groß)."
  },
  {
   "type": "mc",
   "q": "Ein Bogen von 180° entspricht…",
   "options": [
    "un quarto della circonferenza",
    "l'intera circonferenza",
    "metà della circonferenza"
   ],
   "answer": 2,
   "explain": "180° ist die Hälfte von 360°, also ist der Bogen ein Halbkreisbogen: der halbe Umfang."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Ein Fahrradrad hat einen Radius von 35 cm. Wie viele Meter legt es in 100 vollen Umdrehungen zurück? (π = 3,14)",
   "answer": 219.8,
   "tol": 0.05,
   "unit": "m",
   "explain": "Eine Umdrehung = 2 × 3,14 × 35 = 219,8 cm. In 100 Umdrehungen: 219,8 × 100 = 21 980 cm = 219,8 m."
  },
  {
   "type": "num",
   "q": "Ein runder Brunnen mit Radius 12 m ist von einem 1 m breiten Weg umgeben. Wie groß ist die Fläche des Weges? (π = 3,14)",
   "answer": 78.5,
   "tol": 0.05,
   "unit": "m²",
   "explain": "Der Weg ist ein Kreisring mit R = 13 m und r = 12 m: A = 3,14 × (13² − 12²) = 3,14 × (169 − 144) = 3,14 × 25 = 78,5 m²."
  },
  {
   "type": "mc",
   "q": "Ein Kreis hat einen Durchmesser von 14 cm. Eine Gerade ist 7 cm von seinem Mittelpunkt entfernt. Wie liegt die Gerade zum Kreis?",
   "options": [
    "secante",
    "esterna",
    "tangente"
   ],
   "answer": 2,
   "explain": "Der Radius ist 14 : 2 = 7 cm. Der Abstand zum Mittelpunkt ist gleich dem Radius, also hat die Gerade genau einen Punkt gemeinsam: Sie ist Tangente."
  },
  {
   "type": "num",
   "q": "Ein Kreissektor hat den Radius 10 cm und einen Mittelpunktswinkel von 72°. Wie groß ist seine Fläche? (π = 3,14)",
   "answer": 62.8,
   "tol": 0.05,
   "unit": "cm²",
   "explain": "Kreisfläche = 3,14 × 10² = 314 cm². 72° sind 72/360 = 1/5 des Vollwinkels, also 314 : 5 = 62,8 cm²."
  },
  {
   "type": "order",
   "q": "Ordne diese Kreise vom kürzesten zum längsten Umfang.",
   "items": [
    "Kreis mit Radius 2 cm",
    "Kreis mit Durchmesser 6 cm",
    "Kreis mit Radius 4 cm",
    "Kreis mit Durchmesser 10 cm"
   ],
   "explain": "Mit π = 3,14: Radius 2 cm → 12,56 cm; Durchmesser 6 cm → 18,84 cm; Radius 4 cm → 25,12 cm; Durchmesser 10 cm → 31,4 cm."
  }
 ]
});

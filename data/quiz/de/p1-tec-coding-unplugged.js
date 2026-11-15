QBANK("de", "p1-tec-coding-unplugged", {
 "f": [
  {
   "type": "mc",
   "q": "Welcher Pfeil sagt dem Roboter «geh vor»?",
   "options": [
    "⬇️",
    "⬆️",
    "⬅️"
   ],
   "answer": 1,
   "explain": "Der Pfeil nach oben ⬆️ heißt vorwärts gehen."
  },
  {
   "type": "tf",
   "q": "Ein Roboter braucht Anweisungen, um sich zu bewegen.",
   "answer": true,
   "explain": "Der Roboter denkt nicht selbst: Er bewegt sich nur, wenn wir ihm Anweisungen geben."
  },
  {
   "type": "mc",
   "q": "Der Roboter soll ein Feld nach rechts gehen. Welchen Pfeil nimmst du?",
   "options": [
    "⬅️",
    "⬇️",
    "➡️"
   ],
   "answer": 2,
   "explain": "Der Pfeil ➡️ bringt den Roboter nach rechts."
  },
  {
   "type": "text",
   "q": "Wer Programme für Computer schreibt, heißt…",
   "answer": [
    "programmierer",
    "der programmierer",
    "programmiererin",
    "die programmiererin"
   ],
   "explain": "Der Programmierer schreibt die Anweisungen für den Computer."
  },
  {
   "type": "order",
   "q": "Bring den Algorithmus zum Anziehen in Ordnung.",
   "items": [
    "Ich ziehe die Socken an",
    "Ich ziehe die Schuhe an",
    "Ich binde die Schuhe zu"
   ],
   "explain": "Socken zieht man vor den Schuhen an, zubinden kommt danach."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Der Roboter steht auf Feld 1. Er geht 2 Felder vor, dann noch 3. Auf welchem Feld kommt er an?",
   "answer": 6,
   "explain": "1 + 2 = 3, dann 3 + 3 = 6. Er kommt auf Feld 6."
  },
  {
   "type": "mc",
   "q": "Welches Programm lässt den Roboter 5 Schritte vorwärts gehen?",
   "options": [
    "🔁 Wiederhole 3-mal: ⬆️",
    "🔁 Wiederhole 5-mal: ⬆️",
    "⬆️"
   ],
   "answer": 1,
   "explain": "Wiederhole 5-mal ⬆️ ergibt 5 Schritte vorwärts."
  },
  {
   "type": "tf",
   "q": "Wenn der Roboter den Stern nicht erreicht, steckt vielleicht ein Fehler im Programm.",
   "answer": true,
   "explain": "Ein Fehler (Bug) kann den Roboter an die falsche Stelle schicken."
  },
  {
   "type": "text",
   "q": "Wenn wir einen Fehler im Programm finden und beheben, nennt man das…",
   "answer": [
    "debuggen",
    "debugging",
    "debug",
    "fehlerbehebung"
   ],
   "explain": "Fehler finden und beheben heißt debuggen."
  },
  {
   "type": "order",
   "q": "Bring den Algorithmus zum Zähneputzen in Ordnung.",
   "items": [
    "Ich gebe Zahnpasta auf die Bürste",
    "Ich putze die Zähne",
    "Ich spüle den Mund aus",
    "Ich räume die Bürste weg"
   ],
   "explain": "Zahnpasta drauf, putzen, ausspülen, dann die Bürste wegräumen."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Welches Programm lässt den Roboter NICHT 6 Schritte vorwärts gehen?",
   "options": [
    "🔁 Wiederhole 3-mal: ⬆️⬆️",
    "🔁 Wiederhole 6-mal: ⬆️",
    "🔁 Wiederhole 2-mal: ⬆️⬆️"
   ],
   "answer": 2,
   "explain": "Wiederhole 2-mal ⬆️⬆️ ergibt 2 × 2 = 4 Schritte. Die anderen: 3 × 2 = 6 und 6 × 1 = 6."
  },
  {
   "type": "num",
   "q": "Programm: 🔁 Wiederhole 3-mal: ⬆️⬆️, dann ➡️. Wie viele Schritte ⬆️ macht der Roboter insgesamt?",
   "answer": 6,
   "explain": "Jedes Mal macht er 2 Schritte ⬆️. 3 × 2 = 6 Schritte ⬆️ (➡️ ist eine andere Bewegung).",
   "unit": "Schritte"
  },
  {
   "type": "tf",
   "q": "Wenn du die Reihenfolge der Anweisungen änderst, kann der Roboter einen anderen Weg nehmen.",
   "answer": true,
   "explain": "Die Reihenfolge zählt: ⬆️➡️ und ➡️⬆️ bringen den Roboter an verschiedene Orte."
  },
  {
   "type": "text",
   "q": "Wie heißt die Idee, dieselbe Anweisung mehrmals zu wiederholen? Eine…",
   "answer": [
    "schleife",
    "eine schleife",
    "wiederholung"
   ],
   "explain": "Eine Schleife wiederholt Anweisungen, so wird das Programm kürzer."
  },
  {
   "type": "order",
   "q": "Bring den Algorithmus zum Überqueren der Straße in Ordnung.",
   "items": [
    "Ich bleibe auf dem Gehweg stehen",
    "Ich schaue nach links und rechts",
    "Ich gehe über den Zebrastreifen",
    "Ich gehe auf dem anderen Gehweg weiter"
   ],
   "explain": "Erst stehen bleiben, dann schauen, dann über den Zebrastreifen gehen und auf der anderen Seite ankommen."
  }
 ]
});

QBANK("de", "p4-tec-condizioni", {
 "f": [
  {
   "type": "mc",
   "q": "In englischen Programmiersprachen: Welches Wort bedeutet „dann“?",
   "options": [
    "if",
    "then",
    "else"
   ],
   "answer": 1,
   "explain": "if = wenn, then = dann, else = sonst."
  },
  {
   "type": "tf",
   "q": "Das Zeichen „>“ bedeutet „größer als“.",
   "answer": true,
   "explain": "Richtig: 7 > 5 liest man „7 ist größer als 5“."
  },
  {
   "type": "mc",
   "q": "Eine automatische Tür nutzt die Regel „WENN der Sensor eine Person sieht, DANN öffne“. Was prüft die Tür?",
   "options": [
    "Wie spät es ist",
    "Welche Farbe die Kleidung hat",
    "Ob eine Person davorsteht"
   ],
   "answer": 2,
   "explain": "Die Bedingung lautet „Sieht der Sensor eine Person?“: Wenn sie wahr ist, öffnet sich die Tür."
  },
  {
   "type": "tf",
   "q": "Wenn die Bedingung falsch ist, führt der Computer die Aktion nach DANN trotzdem aus.",
   "answer": false,
   "explain": "Falsch: Wenn die Bedingung falsch ist, wird die Aktion nach DANN übersprungen."
  },
  {
   "type": "text",
   "q": "Wie nennt man in einem Programm einen Wert, der sich während des Spiels ändern kann, wie „Punkte“ oder „Leben“?",
   "answer": [
    "variable",
    "die variable",
    "eine variable"
   ],
   "explain": "Eine Variable ist wie eine beschriftete Kiste, in der das Programm einen veränderbaren Wert aufbewahrt."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "Münzen = 12. WENN Münzen > 10 DANN sage „Kauf den Hut“ SONST sage „Spar“. Was sagt das Programm?",
   "options": [
    "Spar",
    "Kauf den Hut",
    "Beide Sätze"
   ],
   "answer": 1,
   "explain": "12 > 10 ist wahr, also wird die Aktion nach DANN ausgeführt."
  },
  {
   "type": "num",
   "q": "Punkte = 8. WENN Punkte > 5 DANN wird Punkte zu Punkte + 10 SONST wird Punkte zu Punkte − 1. Wie viele Punkte sind es am Ende?",
   "answer": 18,
   "tol": 0,
   "explain": "8 > 5 ist wahr, also rechnen wir Punkte + 10: 8 + 10 = 18."
  },
  {
   "type": "tf",
   "q": "(4 > 2) ODER (1 > 9) ist wahr.",
   "answer": true,
   "explain": "Richtig: 4 > 2 ist wahr, und bei ODER genügt eine wahre Bedingung."
  },
  {
   "type": "mc",
   "q": "WENN ich Hunger habe UND der Kühlschrank leer ist DANN bestelle ich Pizza. Ich habe Hunger, aber im Kühlschrank ist Käse. Bestelle ich Pizza?",
   "options": [
    "Ja, ich bestelle Pizza",
    "Nein, weil nicht beide Bedingungen wahr sind",
    "Das hängt vom Tag ab"
   ],
   "answer": 1,
   "explain": "Bei UND müssen beide Bedingungen wahr sein: Der Kühlschrank ist nicht leer, also wird die Aktion nicht ausgeführt."
  },
  {
   "type": "order",
   "q": "Ordne die Schritte eines Programms, das „Du hast gewonnen!“ sagt, wenn die Punkte über 10 liegen.",
   "items": [
    "Die Variable Punkte erstellen",
    "Bei jedem gefangenen Apfel 1 zu den Punkten addieren",
    "Prüfen, ob Punkte > 10",
    "Wenn wahr, „Du hast gewonnen!“ anzeigen"
   ],
   "explain": "Zuerst braucht man die Variable, dann ändern sich die Punkte, dann wird die Bedingung geprüft und nur wenn sie wahr ist, erscheint die Nachricht."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Ein Mitschüler schreibt: WENN es regnet DANN nimm den Schirm SONST nimm den Schirm. Was ist das Problem?",
   "options": [
    "Beide Aktionen sind gleich: Die Bedingung ist nutzlos",
    "Der UND-Operator fehlt",
    "„Es regnet“ kann keine Bedingung sein"
   ],
   "answer": 0,
   "explain": "Egal wie die Antwort ist, das Programm tut dasselbe: Die WENN…SONST-Entscheidung ist nutzlos."
  },
  {
   "type": "tf",
   "q": "(7 > 3) UND NICHT (2 > 5) ist wahr.",
   "answer": true,
   "explain": "7 > 3 ist wahr. 2 > 5 ist falsch, und NICHT dreht es zu wahr um. Wahr UND wahr = wahr."
  },
  {
   "type": "mc",
   "q": "Regel: WENN (Samstag ODER Sonntag ist) UND es nicht regnet DANN gehe ich in den Park. Heute ist Sonntag und es regnet. Gehe ich in den Park?",
   "options": [
    "Ja, weil Sonntag ist",
    "Nein, weil es regnet",
    "Ja, weil nicht Samstag ist"
   ],
   "answer": 1,
   "explain": "(Samstag ODER Sonntag) ist wahr, aber „es regnet nicht“ ist falsch: Bei UND müssen beide wahr sein, also gehe ich nicht."
  },
  {
   "type": "num",
   "q": "Punkte = 6. Erste Prüfung: WENN Punkte > 5 DANN wird Punkte zu Punkte × 2. Zweite Prüfung: WENN Punkte > 10 DANN wird Punkte zu Punkte − 3. Wie viele Punkte sind es am Ende?",
   "answer": 9,
   "tol": 0,
   "explain": "Erste Prüfung: 6 > 5 ist wahr, also 6 × 2 = 12. Zweite Prüfung: 12 > 10 ist wahr, also 12 − 3 = 9."
  },
  {
   "type": "mc",
   "q": "Thermostat: WENN Temperatur < 20 DANN schalte die Heizung an SONST schalte sie aus. Die Temperatur beträgt genau 20 °C. Was macht die Heizung?",
   "options": [
    "Das kann man nicht sagen",
    "Sie schaltet sich ein",
    "Sie bleibt aus"
   ],
   "answer": 2,
   "explain": "20 < 20 ist falsch (20 ist nicht kleiner als 20), also wird die Aktion nach SONST ausgeführt: Die Heizung ist aus."
  }
 ]
});

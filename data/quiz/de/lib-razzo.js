QBANK("de", "lib-razzo", {
 "f": [
  {
   "type": "mc",
   "q": "In welchem Teil der Rakete reisen die Astronauten?",
   "options": [
    "Im Treibstofftank",
    "In der Kapsel",
    "In den Düsen"
   ],
   "answer": 1,
   "explain": "Die Astronauten sitzen in der Besatzungskapsel ganz oben auf der Rakete."
  },
  {
   "type": "tf",
   "q": "Die erste Stufe ist der größte und schwerste Teil der Rakete.",
   "answer": true,
   "explain": "Sie enthält viel Treibstoff und die stärksten Triebwerke."
  },
  {
   "type": "text",
   "q": "Wie heißen die großen „Glocken“ unter den Triebwerken, aus denen die heißen Gase strömen?",
   "answer": [
    "düsen",
    "die düsen",
    "düse",
    "die düse",
    "triebwerksdüsen",
    "schubdüsen"
   ],
   "explain": "Die Düsen lassen die sehr schnellen Gase nach unten ausströmen."
  },
  {
   "type": "num",
   "q": "Um in die Umlaufbahn zu kommen, muss eine Rakete 28 000 km/h erreichen. Wenn sie jetzt 10 000 km/h schnell ist, wie viele km/h fehlen noch?",
   "answer": 18000,
   "unit": "km/h",
   "explain": "28 000 − 10 000 = 18 000 km/h."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "Wozu dient der Rettungsturm über der Kapsel?",
   "options": [
    "Um die Kapsel in wenigen Sekunden wegzubringen, wenn beim Start etwas schiefgeht",
    "Um die Kapsel landen zu lassen",
    "Um den Astronauten im All Sauerstoff zu geben",
    "Um die Rakete zu steuern"
   ],
   "answer": 0,
   "explain": "Er ist eine kleine Notfallrakete, die die Kapsel wegreißt und weit wegbringt."
  },
  {
   "type": "num",
   "q": "Um in einer niedrigen Umlaufbahn zu bleiben, braucht man etwa 7,8 km pro Sekunde. Wie viele Kilometer legt eine Kapsel in 10 Sekunden zurück?",
   "answer": 78,
   "unit": "km",
   "explain": "7,8 × 10 = 78 km."
  },
  {
   "type": "tf",
   "q": "Die zweite Stufe arbeitet mitten in der Atmosphäre, wo es viel Luft gibt.",
   "answer": false,
   "explain": "Die zweite Stufe arbeitet im Vakuum, fast ohne Luft, und bringt die Nutzlast in die Umlaufbahn."
  },
  {
   "type": "order",
   "q": "Bringe die Etappen des Starts in die richtige Reihenfolge.",
   "items": [
    "Die Triebwerke der ersten Stufe zünden",
    "Die erste Stufe trennt sich ab",
    "Die zweite Stufe zündet",
    "Die Kapsel erreicht die Umlaufbahn"
   ],
   "explain": "Zuerst schiebt die erste Stufe; wenn sie leer ist, trennt sie sich ab; die zweite bringt die Kapsel in die Umlaufbahn."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Warum hat das Triebwerk der zweiten Stufe eine viel längere Düse als die der ersten?",
   "options": [
    "Damit es größer aussieht",
    "Damit die Gase langsamer ausströmen",
    "Weil die zweite Stufe keinen Treibstoff hat",
    "Weil sich die Gase im Vakuum mehr ausdehnen können und besser schieben"
   ],
   "answer": 3,
   "explain": "Außerhalb der Atmosphäre bremst keine Luft die Gase: Eine lange Düse lässt sie noch stärker beschleunigen."
  },
  {
   "type": "num",
   "q": "Die erste Stufe hat 30 Tonnen Treibstoff und 90 Tonnen flüssigen Sauerstoff und verbrennt alles in 150 Sekunden. Wie viele Tonnen pro Sekunde verbrennt sie im Durchschnitt?",
   "answer": 0.8,
   "tol": 0.01,
   "unit": "t/s",
   "explain": "Insgesamt: 30 + 90 = 120 t. 120 ÷ 150 = 0,8 t pro Sekunde."
  },
  {
   "type": "tf",
   "q": "Der Hitzeschild der Kapsel schützt die Astronauten beim Aufstieg vor der Kälte des Weltraums.",
   "answer": false,
   "explain": "Er wird beim Wiedereintritt gebraucht: Die Luft vor der Kapsel wird bei hoher Geschwindigkeit extrem heiß."
  },
  {
   "type": "order",
   "q": "Bringe die Rückkehr der Kapsel zur Erde in die richtige Reihenfolge.",
   "items": [
    "Die Kapsel tritt in die Atmosphäre ein",
    "Der Hitzeschild schützt sie vor der Hitze",
    "Die Fallschirme öffnen sich",
    "Die Kapsel setzt auf Land oder Meer auf"
   ],
   "explain": "Sie kommt sehr schnell herein, der Schild schützt sie, dann bremsen die Fallschirme für die Landung."
  }
 ]
});

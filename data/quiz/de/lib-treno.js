QBANK("de", "lib-treno", {
 "f": [
  {
   "type": "mc",
   "q": "Wo sitzt der Lokführer?",
   "options": [
    "Im Drehgestell",
    "Im Führerstand",
    "Auf dem Stromabnehmer"
   ],
   "answer": 1,
   "explain": "Der Führerstand ist vorne: Er hat Hebel, Bildschirme und Funk."
  },
  {
   "type": "tf",
   "q": "Der Zug hat ein Lenkrad, um die Richtung zu wählen.",
   "answer": false,
   "explain": "Ein Zug hat kein Lenkrad: Die Gleise bestimmen, wohin er fährt."
  },
  {
   "type": "text",
   "q": "Die erste italienische Eisenbahn, 1839 eröffnet, fuhr von Neapel in welche Stadt?",
   "answer": [
    "portici",
    "nach portici"
   ],
   "explain": "Die Strecke Neapel–Portici war 7 km lang und wurde von einer Dampflok befahren."
  },
  {
   "type": "mc",
   "q": "Woraus bestehen die Räder des Zuges und die Schienen?",
   "options": [
    "Aus Gummi",
    "Aus Holz",
    "Aus Stahl"
   ],
   "answer": 2,
   "explain": "Stahlräder auf Stahlschienen haben sehr wenig Reibung."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Ein Hochgeschwindigkeitszug fährt 300 km/h. Wie viele km legt er in 20 Minuten zurück?",
   "answer": 100,
   "unit": "km",
   "explain": "20 Minuten sind ein Drittel einer Stunde: 300 ÷ 3 = 100 km."
  },
  {
   "type": "order",
   "q": "Bringe in die richtige Reihenfolge, was beim Bremsen des Zuges passiert.",
   "items": [
    "Der Lokführer zieht den Bremshebel",
    "Die Motoren werden zu Generatoren und bremsen den Zug",
    "Der erzeugte Strom fließt zurück in die Leitung",
    "Die Scheibenbremsen greifen ein"
   ],
   "explain": "Zuerst bremst der Elektromotor und erzeugt Strom; danach helfen die Scheibenbremsen."
  },
  {
   "type": "mc",
   "q": "Wozu dient der Transformator unter dem Zugboden?",
   "options": [
    "Er senkt die Spannung von 25 000 Volt auf einige Tausend",
    "Er erhöht die Spannung des Drahtes noch mehr",
    "Er regelt die Geschwindigkeit der Motoren"
   ],
   "answer": 0,
   "explain": "Der Strom aus der Leitung ist für die Motoren zu stark: Der Transformator senkt die Spannung. Den Strom zu dosieren ist Aufgabe des Stromrichters."
  },
  {
   "type": "tf",
   "q": "Die Zugspitze ist lang und glatt, weil bei hoher Geschwindigkeit der Luftwiderstand die größte Mühe ist.",
   "answer": true,
   "explain": "Eine stromlinienförmige Nase teilt die Luft und spart Energie."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Pro Person und Kilometer stößt der Zug bis zu 10-mal weniger CO₂ aus als das Auto. Wenn ein Auto 120 g CO₂ pro Person und km ausstößt, wie viele Gramm stößt der Zug höchstens pro Person und km aus?",
   "answer": 12,
   "unit": "g",
   "explain": "120 ÷ 10 = 12 g CO₂."
  },
  {
   "type": "mc",
   "q": "Anna sagt: „Ein Zug mit 300 km/h kann wie ein Auto im letzten Moment bremsen.“ Was ist der Fehler?",
   "options": [
    "Der Zug bremst nur dank der Oberleitung",
    "Der Zug hat keine Bremsen",
    "Ein Zug mit 300 km/h braucht mehr als 3 km zum Anhalten"
   ],
   "answer": 2,
   "explain": "Der Zug ist sehr schnell und schwer: Er braucht mehr als 3 km zum Anhalten, der Lokführer muss also viel früher bremsen."
  },
  {
   "type": "mc",
   "q": "Warum kann ein Zug Kurven fahren, ohne von den Schienen zu rutschen?",
   "options": [
    "Weil er ein verstecktes Lenkrad hat",
    "Weil sich die Drehgestelle unter dem Wagenkasten etwas drehen können",
    "Weil die Räder aus Gummi sind"
   ],
   "answer": 1,
   "explain": "Unter dem Wagenkasten drehen sich die Drehgestelle (je 4 Räder) leicht und folgen der Kurve; der Spurkranz hält die Räder auf der Schiene."
  },
  {
   "type": "tf",
   "q": "Der Strom, der den Zug antreibt, fließt über die Räder und die Schienen zum Kraftwerk zurück.",
   "answer": true,
   "explain": "Der Stromkreis schließt sich: Leitung, Stromabnehmer, Motoren, Räder und Schienen."
  }
 ]
});

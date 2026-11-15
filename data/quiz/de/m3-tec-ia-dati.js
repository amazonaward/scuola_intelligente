QBANK("de", "m3-tec-ia-dati", {
 "f": [
  {
   "type": "mc",
   "q": "Welche dieser Daten sind unstrukturiert?",
   "options": [
    "Eine Notentabelle",
    "Ein Foto",
    "Eine Preisliste"
   ],
   "answer": 1,
   "explain": "Fotos, Texte, Audio und Video sind nicht in Tabellen geordnet: Das sind unstrukturierte Daten, die große Mehrheit."
  },
  {
   "type": "tf",
   "q": "Ein großes Sprachmodell (LLM) wird vor allem darauf trainiert, das nächste Wort eines Textes vorherzusagen.",
   "answer": true,
   "explain": "Richtig: Durch viele Wiederholungen der Vorhersage schreibt das Modell ganze Sätze."
  },
  {
   "type": "text",
   "q": "Wie heißt die kleinste Informationseinheit des Computers, die 0 oder 1 beträgt?",
   "answer": [
    "bit",
    "das bit",
    "ein bit"
   ],
   "explain": "Das Bit (0 oder 1) ist die Grundeinheit: Jede Information im Computer wird zu einer Bitfolge."
  },
  {
   "type": "mc",
   "q": "In welchem Spiel besiegte das Programm AlphaGo 2016 den Meister Lee Sedol?",
   "options": [
    "Schach",
    "Dame",
    "Go"
   ],
   "answer": 2,
   "explain": "AlphaGo gewann im Go, einem Spiel mit mehr möglichen Stellungen als Atomen im beobachtbaren Universum."
  },
  {
   "type": "num",
   "q": "In welchem Jahr besiegte der Computer Deep Blue den Schachmeister Garri Kasparow?",
   "answer": 1997,
   "explain": "IBMs Deep Blue siegte 1997, vor allem durch Rechnen mit roher Gewalt."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Wie viele Bits sind in 3 Byte? (1 Byte = 8 Bit)",
   "answer": 24,
   "unit": "Bit",
   "explain": "3 × 8 = 24 Bit."
  },
  {
   "type": "mc",
   "q": "Eine Plattform gruppiert Nutzer mit ähnlichem Geschmack, ohne vorgegebene Labels. Welche Lernart nutzt sie?",
   "options": [
    "Überwacht",
    "Unüberwacht",
    "Gar kein Lernen"
   ],
   "answer": 1,
   "explain": "Ohne Labels findet das Modell selbst Gruppen und Muster in den Daten: Das ist unüberwachtes Lernen."
  },
  {
   "type": "mc",
   "q": "Was ist die „Filterblase“ (Filter Bubble)?",
   "options": [
    "Fast nur Inhalte und Ideen zu sehen, die denen ähneln, die man schon mag",
    "Ein Filter, der Viren vom Computer entfernt",
    "Ein Festplattenfehler"
   ],
   "answer": 0,
   "explain": "Vorschläge nach deinem Geschmack können dich in einer Blase einschließen und dir immer dieselben Ideen zeigen."
  },
  {
   "type": "tf",
   "q": "Ein künstliches Neuron sendet nur dann ein Signal an die nächsten Neuronen, wenn die gewichtete Summe seiner Eingaben eine Schwelle überschreitet.",
   "answer": true,
   "explain": "Richtig: Das Neuron multipliziert Eingaben mit Gewichten, addiert und „feuert“, wenn die Schwelle überschritten wird."
  },
  {
   "type": "order",
   "q": "Bringe die Schritte, mit denen ein Chatbot (LLM) einen Satz schreibt, in die richtige Reihenfolge.",
   "items": [
    "Es erhält den Ausgangstext",
    "Es berechnet die Wahrscheinlichkeit möglicher nächster Wörter",
    "Es wählt das passendste Wort",
    "Es hängt das Wort an und wiederholt den Zyklus"
   ],
   "explain": "Das Modell „weiß“ keine Fakten: Es berechnet Wahrscheinlichkeiten und wiederholt den Zyklus Wort für Wort."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Ein Modell erreicht 99 % richtige Antworten bei den Trainingsdaten, aber nur 70 % bei ungesehenen Testdaten. Was ist das wahrscheinlichste Problem?",
   "options": [
    "Das Modell hat die Beispiele „auswendig gelernt“, statt zu verallgemeinern",
    "Der Computer hat zu wenig Arbeitsspeicher",
    "Die Testdaten sind zu leicht",
    "Das Modell ist zu einfach und hat zu wenig gelernt"
   ],
   "answer": 0,
   "explain": "Das ist Überanpassung (Overfitting): Das Modell ist bei bekannten Daten gut, bei neuen aber schlecht."
  },
  {
   "type": "num",
   "q": "Ein Neuron hat die Eingaben 2 und 3, die Gewichte 1,5 und −2 und den Bias 4. Wie groß ist die gewichtete Summe plus Bias?",
   "answer": 1,
   "explain": "2 × 1,5 = 3; 3 × (−2) = −6; 3 − 6 + 4 = 1."
  },
  {
   "type": "mc",
   "q": "Eine Fotobearbeitungs-App verlangt zum Funktionieren Zugriff auf alle Kontakte und den Standort. Welcher Datenschutzgrundsatz wird missachtet?",
   "options": [
    "Es sollten nur die für den Zweck wirklich nötigen Daten erhoben werden (Datenminimierung)",
    "Personenbezogene Daten müssen immer veröffentlicht werden",
    "Je mehr Daten gesammelt werden, desto besser für den Nutzer",
    "Eine Einwilligung ist nie nötig"
   ],
   "answer": 0,
   "explain": "Die DSGVO verlangt, nur nötige Daten zu erheben: Eine Foto-App braucht keine Kontakte."
  },
  {
   "type": "tf",
   "q": "Der Computer Deep Blue besiegte Kasparow 1997 vor allem mit neuronalen Netzen wie denen moderner Chatbots.",
   "answer": false,
   "explain": "Falsch: Deep Blue beruhte vor allem auf Rechnen mit roher Gewalt; neuronale Netze brauchte erst AlphaGo 2016."
  },
  {
   "type": "mc",
   "q": "Eine Krankheit betrifft 1 von 1000 Personen. Ein Modell sagt immer „gesund“ und hat 99,9 % Genauigkeit. Warum ist es kein gutes Modell?",
   "options": [
    "Es erkennt nie einen Kranken: Genauigkeit allein täuscht, wenn Fälle selten sind",
    "Weil 99,9 % für ein Modell zu wenig ist",
    "Weil es immer „krank“ sagen sollte",
    "Weil es nicht genug Bits verwendet"
   ],
   "answer": 0,
   "explain": "Das Modell versagt genau im einzigen wichtigen Fall: Man muss auch ansehen, wie viele Kranke es findet, nicht nur den Gesamtprozentsatz."
  }
 ]
});

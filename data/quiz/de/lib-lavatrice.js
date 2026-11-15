QBANK("de", "lib-lavatrice", {
  "f": [
    {
      "type": "mc",
      "q": "Wohin kommt das Waschmittel, bevor die Waschmaschine startet?",
      "options": [
        "In die Waschmittelschublade",
        "In die Ablaufpumpe",
        "In das Bullauge"
      ],
      "answer": 0,
      "explain": "Das einströmende Wasser fließt durch die Schublade und spült das Waschmittel in die Trommel."
    },
    {
      "type": "tf",
      "q": "Während des Waschens verriegelt sich das Bullauge von selbst, sodass man es mit Wasser darin nicht öffnen kann.",
      "answer": true,
      "explain": "Die Türverriegelung verhindert, dass Wasser ausläuft."
    },
    {
      "type": "text",
      "q": "Wie heißt die große, gelochte «Tonne», in die du die Wäsche legst?",
      "answer": [
        "trommel",
        "die trommel",
        "wäschetrommel",
        "die wäschetrommel"
      ],
      "explain": "Die Trommel dreht sich in der Waschmittelwanne und hebt die Wäsche mit ihren Mitnehmern an."
    },
    {
      "type": "mc",
      "q": "Welche Wahl spart am meisten Energie?",
      "options": [
        "Immer bei 90 °C waschen",
        "Bei 30 °C waschen, wenn die Wäsche nur wenig schmutzig ist",
        "Auch saubere Wäsche bei 60 °C waschen"
      ],
      "answer": 1,
      "explain": "Das Erwärmen des Wassers verbraucht am meisten: Bei 30 °C braucht man weniger als die Hälfte der Energie von 60 °C."
    }
  ],
  "m": [
    {
      "type": "num",
      "q": "Ein Waschgang bei 30 °C verbraucht 0,5 kWh, einer bei 60 °C 1,2 kWh. Wie viele kWh spart man bei 10 Waschgängen mit 30 °C statt 60 °C?",
      "answer": 7,
      "unit": "kWh",
      "explain": "1,2 − 0,5 = 0,7 kWh pro Waschgang; 0,7 × 10 = 7 kWh."
    },
    {
      "type": "mc",
      "q": "Warum muss die Waschmaschine auf ihren verstellbaren Füßen waagerecht stehen?",
      "options": [
        "Damit sie mit weniger Wasser wäscht",
        "Damit sie weniger Schaum macht",
        "Weil sie sonst beim Schleudern vibriert und «wandert»",
        "Damit sie schneller heiß wird"
      ],
      "answer": 2,
      "explain": "Steht sie nicht gerade, lassen die Schleudervibrationen sie wackeln und verrutschen."
    },
    {
      "type": "tf",
      "q": "Das große Rad (die Riemenscheibe) an der Trommel dreht sich langsamer als das kleine Rad am Motor, aber mit mehr Kraft.",
      "answer": true,
      "explain": "Der Riemen verbindet die beiden Räder: Das große dreht sich langsamer und mit mehr Kraft."
    },
    {
      "type": "order",
      "q": "Bringe in die richtige Reihenfolge, wie das Wasser in die Waschmaschine gelangt.",
      "items": [
        "Die Steuerplatine öffnet das Magnetventil",
        "Das Wasser fließt durch die Schublade und nimmt das Waschmittel mit",
        "Das Wasser läuft in die Wanne",
        "Der Druckwächter meldet «genug» und das Ventil schließt sich"
      ],
      "explain": "Das Wasser läuft nur so lange ein, bis der Drucksensor merkt, dass es genug ist: Dann schließt das Ventil."
    }
  ],
  "d": [
    {
      "type": "mc",
      "q": "Nach einem Umzug «wandert» die Waschmaschine und poltert beim Schleudern. Was prüfst du zuerst?",
      "options": [
        "Ob das Waschmittel in der richtigen Schublade ist",
        "Ob die Pumpe verstopft ist",
        "Ob das Heizelement heiß ist",
        "Ob sie auf den Füßen waagerecht steht und die Wäsche gut in der Trommel verteilt ist"
      ],
      "answer": 3,
      "explain": "Eine Maschine, die nicht gerade steht oder bei der alle Wäsche auf einer Seite liegt, vibriert stark: Das prüft man zuerst."
    },
    {
      "type": "num",
      "q": "Der Motor dreht sich mit 6000 Umdrehungen pro Minute. Das große Rad an der Trommel hat einen 5-mal größeren Durchmesser als das kleine Rad am Motor. Mit wie vielen Umdrehungen pro Minute dreht sich die Trommel?",
      "answer": 1200,
      "unit": "U/min",
      "explain": "Bei einem Riemenantrieb dreht sich ein 5-mal größeres Rad 5-mal langsamer: 6000 : 5 = 1200 Umdrehungen pro Minute."
    },
    {
      "type": "tf",
      "q": "Das Heizelement dreht die Trommel, weil der Strom es wie einen Motor bewegt.",
      "answer": false,
      "explain": "Falsch: Das Heizelement wird heiß, wenn Strom hindurchfließt, und erwärmt das Wasser. Die Trommel dreht der Elektromotor."
    },
    {
      "type": "mc",
      "q": "Synthetische Stoffe wie Fleece verlieren bei jeder Wäsche winzige Kunststofffasern. Welche Wahl hilft am meisten, das Problem zu verringern?",
      "options": [
        "Immer bei 90 °C waschen",
        "Einen speziellen Beutel oder Filter verwenden, der die Fasern zurückhält",
        "Mehr Waschmittel verwenden",
        "Länger schleudern"
      ],
      "answer": 1,
      "explain": "Spezielle Beutel und Filter halten Mikroplastik zurück, damit es nicht bis ins Meer gelangt."
    }
  ]
});

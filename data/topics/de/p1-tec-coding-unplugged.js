TOPIC('de', {
 "id": "p1-tec-coding-unplugged",
 "title": "Programmieren ohne Computer",
 "intro": "Computer und Roboter sind richtig gut… aber sie machen <b>nur das, was wir ihnen sagen</b>! 🤖 Damit sie funktionieren, brauchen sie <b>klare Anweisungen</b> in der <b>richtigen Reihenfolge</b>. Das nennt man <b>Programmieren</b> (auf Englisch <i>Coding</i>). Und das Schöne ist: Man kann es <b>ohne Computer</b> lernen – mit dem Körper, mit Pfeilen und ein bisschen Fantasie! ➡️⬆️",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "Was ist eine Anweisung?",
   "html": "<p>Eine <b>Anweisung</b> ist ein genauer Befehl, der sagt, <b>was zu tun ist</b>: „Geh einen Schritt vor“, „Dreh dich nach rechts“, „Klatsch in die Hände“.</p>\n<p>Viele Anweisungen hintereinander bilden eine <b>Abfolge</b>. Wenn die Abfolge ein Problem löst, nennt man sie <b>Algorithmus</b>.</p>\n<p>👉 Auch du benutzt jeden Tag Algorithmen, ohne es zu wissen! Zum Zähneputzen:</p>\n<ol>\n<li>Ich nehme die Zahnbürste 🪥</li>\n<li>Ich gebe Zahnpasta darauf</li>\n<li>Ich putze die Zähne</li>\n<li>Ich spüle den Mund aus 💧</li>\n<li>Ich wasche die Zahnbürste ab und räume sie weg</li>\n</ol>\n<p>Wenn du die Zahnpasta erst <b>nach</b> dem Putzen nimmst… klappt es nicht! Die <b>Reihenfolge</b> ist ganz wichtig.</p>"
  },
  {
   "type": "svg",
   "title": "Der Roboter auf dem Spielfeld",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"320\" fill=\"#f1f5f9\"/>\n<g stroke=\"#334155\" stroke-width=\"2\">\n<rect x=\"30\" y=\"30\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"95\" y=\"30\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"160\" y=\"30\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"225\" y=\"30\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/>\n<rect x=\"30\" y=\"95\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"95\" y=\"95\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"160\" y=\"95\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"225\" y=\"95\" width=\"65\" height=\"65\" fill=\"#ffffff\"/>\n<rect x=\"30\" y=\"160\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"95\" y=\"160\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"160\" y=\"160\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"225\" y=\"160\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/>\n<rect x=\"30\" y=\"225\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"95\" y=\"225\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"160\" y=\"225\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"225\" y=\"225\" width=\"65\" height=\"65\" fill=\"#ffffff\"/>\n</g>\n<text x=\"62\" y=\"272\" font-size=\"40\" text-anchor=\"middle\">🤖</text>\n<text x=\"257\" y=\"77\" font-size=\"40\" text-anchor=\"middle\">⭐</text>\n<text x=\"192\" y=\"207\" font-size=\"38\" text-anchor=\"middle\">🪨</text>\n<path d=\"M62 245 V60 M62 60 H240\" stroke=\"#ef4444\" stroke-width=\"5\" fill=\"none\" stroke-dasharray=\"10 6\"/>\n<text x=\"440\" y=\"60\" font-size=\"22\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">Programm:</text>\n<text x=\"440\" y=\"100\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\">⬆️ ⬆️ ⬆️</text>\n<text x=\"440\" y=\"140\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\">➡️ ➡️ ➡️</text>\n<text x=\"440\" y=\"190\" font-size=\"18\" text-anchor=\"middle\" fill=\"#166534\">Der Roboter erreicht den Stern!</text>\n<text x=\"440\" y=\"225\" font-size=\"18\" text-anchor=\"middle\" fill=\"#334155\">und stößt nicht an den Stein 🪨</text>\n<text x=\"440\" y=\"275\" font-size=\"16\" text-anchor=\"middle\" fill=\"#64748b\">1 Pfeil = 1 Feld</text>\n</svg>",
   "caption": "Der Roboter startet unten links. Mit 3 Schritten nach oben und 3 nach rechts erreicht er den Stern ⭐ und weicht dem Stein aus."
  },
  {
   "type": "remember",
   "title": "Die Regeln für gute Programmierer",
   "html": "<p>1️⃣ Die Anweisungen müssen <b>klar</b> sein: „geh da rüber“ ❌ – „geh 2 Schritte vor“ ✅</p>\n<p>2️⃣ Sie müssen <b>in der richtigen Reihenfolge</b> sein: zuerst, dann, danach, zum Schluss.</p>\n<p>3️⃣ Der Roboter <b>denkt nicht</b>: Er macht genau das, was dasteht, auch wenn es falsch ist!</p>\n<p>4️⃣ Wenn etwas nicht klappt, gibt es einen <b>Bug</b> (einen Fehler): Wir suchen ihn und verbessern ihn. Fehler machen gehört zum Spiel! 🐞</p>"
  },
  {
   "type": "widget",
   "title": "Spiel: die Pfeile des Roboters",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "⬆️",
      "ein Schritt vor (nach oben)"
     ],
     [
      "⬇️",
      "ein Schritt zurück (nach unten)"
     ],
     [
      "➡️",
      "ein Schritt nach rechts"
     ],
     [
      "⬅️",
      "ein Schritt nach links"
     ],
     [
      "🔁",
      "wiederhole"
     ],
     [
      "🛑",
      "halt an"
     ]
    ]
   },
   "caption": "Jedes Zeichen ist ein Befehl. Ordne es seiner Bedeutung zu."
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Anweisungen in der richtigen Reihenfolge",
   "questions": [
    {
     "type": "order",
     "q": "Bring den Algorithmus zum Händewaschen in die richtige Reihenfolge:",
     "items": [
      "Ich drehe das Wasser auf 🚰",
      "Ich nehme Seife 🧼",
      "Ich reibe die Hände gut ein",
      "Ich spüle ab",
      "Ich trockne mich ab 🧻"
     ],
     "explain": "Zuerst macht man die Hände nass, dann Seife, einreiben, abspülen und abtrocknen."
    },
    {
     "type": "tf",
     "q": "Ein Roboter versteht die Anweisung „geh ein bisschen da rüber“.",
     "answer": false,
     "explain": "Der Roboter braucht genaue Anweisungen: wie viele Schritte und in welche Richtung."
    },
    {
     "type": "mc",
     "q": "Ein Fehler in einem Programm heißt…",
     "options": [
      "Bug",
      "Byte",
      "Bus"
     ],
     "answer": 0,
     "explain": "Bug – das ist Englisch und bedeutet „Käfer“ oder „Insekt“."
    }
   ]
  },
  {
   "type": "example",
   "title": "Beispiel: das Spiel vom Menschen-Roboter 🧍➡️🤖",
   "html": "<p>Malt in der Turnhalle oder auf dem Schulhof mit Kreide ein Gitter aus Quadraten auf den Boden (oder benutzt die Fliesen).</p>\n<ol>\n<li>Ein Kind ist der <b>Roboter</b> 🤖 und stellt sich auf das Startfeld.</li>\n<li>Ein anderes Kind ist der <b>Programmierer</b> 🧑‍💻 und schreibt auf ein Blatt die Pfeile, die zum Schatz 💎 führen.</li>\n<li>Der Programmierer liest die Pfeile einen nach dem anderen vor, und der Roboter führt sie aus.</li>\n<li>Kommt der Roboter beim Schatz an? 🎉 Wenn nicht, sucht gemeinsam den <b>Bug</b> und verbessert ihn!</li>\n</ol>\n<p>Danach tauscht ihr die Rollen.</p>"
  },
  {
   "type": "example",
   "title": "Beispiel: das Brot von Papa-Roboter 🥪",
   "html": "<p>Ein Spiel, das man in Schulen auf der ganzen Welt kennt: Bitte einen Erwachsenen, den <b>Roboter</b> zu spielen, der ein Brot schmiert und dabei <b>genau</b> deine Anweisungen befolgt.</p>\n<p>🧒 „Tu die Marmelade aufs Brot!“<br>🤖 (Papa stellt das geschlossene Glas auf das Brot 😂)</p>\n<p>Der Roboter weiß nicht, dass er das Glas <b>öffnen</b> und ein <b>Messer</b> nehmen muss! Du musst ihm alles sagen:</p>\n<p>„Öffne das Glas. Nimm das Messer. Steck das Messer in die Marmelade. Streich die Marmelade auf die Brotscheibe.“ ✅</p>\n<p>Deshalb müssen Programmierer <b>sehr genau</b> sein.</p>"
  },
  {
   "type": "text",
   "title": "Wiederholen: die Schleife 🔁",
   "html": "<p>Wenn der Roboter 5 Schritte vorgehen soll, können wir schreiben: ⬆️ ⬆️ ⬆️ ⬆️ ⬆️</p>\n<p>Schneller geht es so: <b>🔁 wiederhole 5-mal: ⬆️</b></p>\n<p>Das nennt man <b>Schleife</b> (auf Englisch <i>loop</i>). Auch Lieder haben Schleifen: Der Refrain wiederholt sich!</p>\n<p>💃 Probier dieses Tanz-Programm aus: <b>wiederhole 3-mal</b> [klatsch in die Hände 👏, spring 🦘, dreh dich im Kreis 🔄].</p>"
  },
  {
   "type": "widget",
   "title": "Spiel: klare oder unklare Anweisung?",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ Klar (der Roboter versteht)",
     "❌ Unklar (der Roboter versteht nicht)"
    ],
    "items": [
     [
      "geh 3 Schritte vor",
      0
     ],
     [
      "dreh dich nach rechts",
      0
     ],
     [
      "wiederhole 2-mal: spring",
      0
     ],
     [
      "nimm den roten Ball",
      0
     ],
     [
      "geh ein bisschen da rüber",
      1
     ],
     [
      "mach etwas Schönes",
      1
     ],
     [
      "lauf, solange du Lust hast",
      1
     ],
     [
      "nimm das Ding da",
      1
     ]
    ]
   },
   "caption": "Ein Roboter braucht genaue Anweisungen. Welche versteht er und welche nicht?"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass… der erste „Bug“ eine echte Motte war? 🦋",
   "html": "<p>Im Jahr <b>1947</b> blieb in den USA ein riesiger Computer namens <b>Harvard Mark II</b> stehen. Die Wissenschaftler aus dem Team von <b>Grace Hopper</b> suchten das Problem und fanden… eine <b>Motte</b>, die zwischen den Schaltkreisen feststeckte! Sie klebten sie mit Klebeband in ihr Heft und schrieben: „erster Fall eines gefundenen <b>Bugs</b> (Insekts)“. Seitdem heißen Fehler in Programmen <b>Bugs</b> 🐞, und sie zu beheben nennt man <b>Debugging</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Wusstest du, dass… die erste Programmiererin vor 180 Jahren lebte? 👩‍💻",
   "html": "<p>Im Jahr <b>1843</b> schrieb <b>Ada Lovelace</b> in England Anweisungen für eine Rechenmaschine, die ihr Freund Charles Babbage erfunden hatte: die „Analytische Maschine“. Die Maschine wurde nie gebaut, aber Adas Anweisungen gelten als das <b>erste Programm</b> der Geschichte! Ada stellte sich schon damals vor, dass Maschinen eines Tages sogar Musik komponieren könnten. 🎶</p>"
  },
  {
   "type": "alternatives",
   "title": "Andere Wege, Programmieren zu lernen",
   "intro": "<p>Programmieren kann man auf viele verschiedene Arten lernen. Probier die aus, die dir am besten gefällt!</p>",
   "tabs": [
    {
     "label": "🇮🇹 CodyRoby",
     "html": "<p><b>CodyRoby</b> ist ein Kartenspiel, das in Italien an der Universität Urbino von Professor <b>Alessandro Bogliolo</b> für die „Code Week“ (Programmierwoche) erfunden wurde.</p>\n<p>Jede Karte ist ein Befehl: 🟨 <b>geh vorwärts</b>, 🟥 <b>dreh dich nach rechts</b>, 🟦 <b>dreh dich nach links</b>. Auf einem Spielfeld legen die Spieler die Karten hintereinander, um Roby den Roboter ins Ziel zu führen!</p>"
    },
    {
     "label": "🐝 Der Bienen-Roboter",
     "html": "<p>In sehr vielen Schulen auf der Welt (vor allem in England, wo er erfunden wurde) benutzt man den <b>Bee-Bot</b>, einen kleinen Roboter in Form einer <b>Biene</b> 🐝.</p>\n<p>Auf dem Rücken hat er Tasten mit Pfeilen: Drück ⬆️ ⬆️ ➡️ ⬆️ und dann <b>GO</b>, und die Biene bewegt sich auf dem Teppich nach deinem Programm. Jeder Schritt ist 15 cm lang!</p>"
    },
    {
     "label": "🍳 Das Rezept",
     "html": "<p>Ein <b>Rezept</b> ist tatsächlich ein Algorithmus! Es hat <b>Zutaten</b> (was du brauchst) und <b>Schritte</b> in der richtigen Reihenfolge (was du tun musst).</p>\n<p>🥤 <b>Algorithmus für einen Bananen-Shake:</b><br>1. Schäl die Banane 🍌<br>2. Schneide sie in kleine Stücke (mit einem Erwachsenen!)<br>3. Gib sie mit der Milch in den Mixer 🥛<br>4. Mixe 30 Sekunden lang<br>5. Gieß den Shake ins Glas und trink! 😋</p>\n<p>Wenn du Schritt 4 vor Schritt 3 machst… mixt du nur Luft!</p>"
    },
    {
     "label": "🎨 Pixel-Kunst",
     "html": "<p>Auch Malen kann Programmieren sein! Folge im karierten Heft dem Code Zeile für Zeile: <b>⬜ = weiß lassen</b>, <b>🟥 = ausmalen</b>.</p>\n<p>Zeile 1: ⬜🟥⬜🟥⬜<br>Zeile 2: 🟥🟥🟥🟥🟥<br>Zeile 3: ⬜🟥🟥🟥⬜<br>Zeile 4: ⬜⬜🟥⬜⬜</p>\n<p>Was kommt heraus? Ein <b>Herz</b>! ❤️ Die Bilder auf dem Computerbildschirm sind genau so gemacht: aus vielen kleinen Quadraten, die man <b>Pixel</b> nennt.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"240\" fill=\"#ffffff\"/>\n<g stroke=\"#94a3b8\" stroke-width=\"2\">\n<rect x=\"200\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"320\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n<rect x=\"200\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"240\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/>\n<rect x=\"200\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n<rect x=\"200\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"280\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"360\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n</g>\n<text x=\"300\" y=\"220\" font-size=\"20\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">4 Zeilen Code = ein Pixel-Herz</text>\n</svg>"
    },
    {
     "label": "🧊 Der Roboter in 3D",
     "html": "<p>Stell dir vor, jeder Würfel ist ein Feld auf dem Spielfeld des Roboters. Es gibt 4 Reihen mit je 4 Feldern: <b>16 Felder</b>. Dreh das Spielfeld und erfinde einen Weg von der Ecke vor dir bis zur gegenüberliegenden Ecke: Wie viele Pfeile brauchst du?</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 4,
      "b": 4
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Mindmap zum Programmieren",
   "nodes": [
    {
     "id": "coding",
     "label": "Programmieren",
     "x": 50,
     "y": 8,
     "color": "#8b5cf6",
     "html": "<p>Einer Maschine Anweisungen in einer Sprache geben, die sie versteht.</p>",
     "why": "<p>Computer bestehen aus Schaltkreisen, die nur ganz einfache Befehle ausführen können. Mit dem Programmieren sagen Menschen ihnen, was sie tun sollen.</p>"
    },
    {
     "id": "istr",
     "label": "Anweisung",
     "x": 18,
     "y": 30,
     "color": "#22c55e",
     "html": "<p>Ein genauer Befehl: „ein Schritt vor“.</p>",
     "why": "<p>Maschinen können nicht raten: Deshalb darf jede Anweisung nur eine einzige mögliche Bedeutung haben.</p>"
    },
    {
     "id": "seq",
     "label": "Abfolge",
     "x": 50,
     "y": 34,
     "color": "#3b82f6",
     "html": "<p>Anweisungen hintereinander in der richtigen Reihenfolge.</p>",
     "why": "<p>Der Computer führt eine Anweisung nach der anderen aus, von der ersten bis zur letzten. Ändert man die Reihenfolge, ändert sich das Ergebnis.</p>"
    },
    {
     "id": "algo",
     "label": "Algorithmus",
     "x": 82,
     "y": 30,
     "color": "#f97316",
     "html": "<p>Eine Abfolge, die ein Problem löst.</p>",
     "why": "<p>Das Wort kommt vom Namen <b>al-Chwarizmi</b>, einem persischen Mathematiker, der vor mehr als 1100 Jahren in Bagdad lebte und Bücher darüber schrieb, wie man Schritt für Schritt rechnet.</p>"
    },
    {
     "id": "ciclo",
     "label": "Schleife (loop) 🔁",
     "x": 22,
     "y": 64,
     "color": "#eab308",
     "html": "<p>Dieselben Anweisungen mehrmals wiederholen.</p>",
     "why": "<p>So muss man nicht tausendmal dasselbe schreiben. Maschinen können wiederholen, ohne je müde zu werden.</p>"
    },
    {
     "id": "bug",
     "label": "Bug 🐞",
     "x": 50,
     "y": 66,
     "color": "#ef4444",
     "html": "<p>Ein Fehler im Programm.</p>",
     "why": "<p>Der Name verbreitete sich, nachdem das Team von Grace Hopper 1947 eine Motte im Computer Harvard Mark II gefunden hatte. Einen Fehler zu beheben heißt „Debugging“.</p>"
    },
    {
     "id": "robot",
     "label": "Roboter und Computer",
     "x": 80,
     "y": 64,
     "color": "#14b8a6",
     "html": "<p>Die Maschinen, die Programme ausführen.</p>",
     "why": "<p>Das Wort „Roboter“ wurde 1920 vom tschechischen Schriftsteller Karel Čapek erfunden: Es kommt von <i>robota</i>, das bedeutet „schwere Arbeit“.</p>"
    },
    {
     "id": "ada",
     "label": "Ada Lovelace",
     "x": 35,
     "y": 92,
     "color": "#ec4899",
     "html": "<p>Die erste Programmiererin (1843).</p>",
     "why": "<p>Sie schrieb einen Algorithmus für die Analytische Maschine von Charles Babbage, mehr als 100 Jahre vor den elektronischen Computern.</p>"
    },
    {
     "id": "unplugged",
     "label": "Unplugged",
     "x": 68,
     "y": 92,
     "color": "#64748b",
     "html": "<p>Programmieren ohne Computer: mit dem Körper, mit Karten, mit Pfeilen.</p>",
     "why": "<p>„Unplugged“ heißt „ohne Stecker“. Das Denken von Programmierern (informatisches Denken) kann man auch ohne Bildschirm trainieren.</p>"
    }
   ],
   "edges": [
    [
     "coding",
     "istr",
     "benutzt"
    ],
    [
     "coding",
     "seq",
     ""
    ],
    [
     "coding",
     "algo",
     ""
    ],
    [
     "istr",
     "seq",
     "hintereinander bilden"
    ],
    [
     "seq",
     "algo",
     "wenn sie ein Problem löst"
    ],
    [
     "seq",
     "ciclo",
     "wiederholt sich mit"
    ],
    [
     "seq",
     "bug",
     "kann haben"
    ],
    [
     "algo",
     "robot",
     "ausgeführt von"
    ],
    [
     "robot",
     "ada",
     ""
    ],
    [
     "ciclo",
     "unplugged",
     ""
    ],
    [
     "bug",
     "unplugged",
     ""
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-Quiz: Pfeile und Schleifen",
   "questions": [
    {
     "type": "num",
     "q": "🔁 Wiederhole 4-mal: ⬆️. Wie viele Schritte macht der Roboter?",
     "answer": 4,
     "explain": "Die Schleife wiederholt den Pfeil 4-mal: 4 Schritte."
    },
    {
     "type": "mc",
     "q": "Welches Programm bringt den Roboter auf dem Bild zum Stern?",
     "options": [
      "⬆️⬆️⬆️ ➡️➡️➡️",
      "➡️➡️ ⬆️",
      "⬇️⬇️⬇️"
     ],
     "answer": 0,
     "explain": "3 Schritte nach oben und 3 nach rechts."
    },
    {
     "type": "tf",
     "q": "Ein Algorithmus ist eine Abfolge von Anweisungen, die ein Problem löst.",
     "answer": true,
     "explain": "Genau, wie ein Rezept!"
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Programmieren (Coding)",
   "d": "Anweisungen schreiben, die eine Maschine ausführen kann."
  },
  {
   "t": "Anweisung",
   "d": "Ein klarer und genauer Befehl."
  },
  {
   "t": "Abfolge",
   "d": "Anweisungen hintereinander in der richtigen Reihenfolge."
  },
  {
   "t": "Algorithmus",
   "d": "Eine Abfolge von Anweisungen, die ein Problem löst."
  },
  {
   "t": "Schleife (loop)",
   "d": "Anweisungen, die mehrmals wiederholt werden."
  },
  {
   "t": "Bug",
   "d": "Ein Fehler im Programm."
  },
  {
   "t": "Debugging",
   "d": "Fehler finden und beheben."
  },
  {
   "t": "Unplugged",
   "d": "Ohne Computer, „ohne Stecker“."
  },
  {
   "t": "Pixel",
   "d": "Kleines farbiges Quadrat, aus dem die Bilder auf dem Bildschirm bestehen."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Ein Algorithmus ist…",
    "options": [
     "eine Art Roboter",
     "eine Abfolge von Anweisungen, die ein Problem löst",
     "ein Ballspiel"
    ],
    "answer": 1,
    "explain": "Wie ein Rezept: Schritte in der richtigen Reihenfolge."
   },
   {
    "type": "tf",
    "q": "Der Roboter macht genau das, was wir ihm sagen, auch wenn es falsch ist.",
    "answer": true,
    "explain": "Der Roboter denkt nicht: Er führt aus."
   },
   {
    "type": "order",
    "q": "Bring den Algorithmus zum Einpflanzen eines Samens in die richtige Reihenfolge:",
    "items": [
     "Ich fülle Erde in den Topf 🪴",
     "Ich mache mit dem Finger ein kleines Loch",
     "Ich lege den Samen in das Loch 🌱",
     "Ich bedecke ihn mit Erde",
     "Ich gieße 💧"
    ],
    "explain": "Jeder Schritt bereitet den nächsten vor."
   },
   {
    "type": "mc",
    "q": "Welche Anweisung ist für einen Roboter klar?",
    "options": [
     "geh da rüber",
     "geh 2 Schritte vor",
     "mach irgendwas"
    ],
    "answer": 1,
    "explain": "Sie sagt, wie viele Schritte und in welche Richtung."
   },
   {
    "type": "num",
    "q": "Das Programm ist ➡️➡️➡️⬆️⬆️. Wie viele Schritte macht der Roboter insgesamt?",
    "answer": 5,
    "explain": "3 + 2 = 5 Schritte."
   },
   {
    "type": "text",
    "q": "Wie nennt man einen Fehler in einem Programm?",
    "answer": [
     "bug",
     "ein bug",
     "der bug"
    ],
    "explain": "Bug = Insekt: Erinnerst du dich an die Motte von 1947?"
   },
   {
    "type": "mc",
    "q": "🔁 „Wiederhole 3-mal: spring“ ist…",
    "options": [
     "eine Schleife",
     "ein Bug",
     "ein Pixel"
    ],
    "answer": 0,
    "explain": "Anweisungen zu wiederholen ist eine Schleife (loop)."
   },
   {
    "type": "mc",
    "q": "Wer gilt als die erste Programmiererin der Geschichte?",
    "options": [
     "Ada Lovelace",
     "Grace Hopper",
     "Marie Curie"
    ],
    "answer": 0,
    "explain": "Ada Lovelace, im Jahr 1843."
   },
   {
    "type": "tf",
    "q": "Zum Programmieren braucht man unbedingt einen Computer.",
    "answer": false,
    "explain": "Es geht auch unplugged: mit dem Körper, mit Karten, mit Pfeilen."
   },
   {
    "type": "mc",
    "q": "Der Roboter steht auf einem Feld und soll 2 Felder nach links. Das richtige Programm:",
    "options": [
     "➡️➡️",
     "⬅️⬅️",
     "⬆️⬆️"
    ],
    "answer": 1,
    "explain": "Zwei Pfeile nach links."
   },
   {
    "type": "order",
    "q": "Bring die Arbeit des Programmierers in die richtige Reihenfolge:",
    "items": [
     "ich schreibe die Anweisungen",
     "der Roboter führt sie aus",
     "ich prüfe, ob er richtig ankommt",
     "wenn es einen Bug gibt, behebe ich ihn"
    ],
    "explain": "Schreiben, ausprobieren, prüfen, verbessern: Das ist der Kreislauf des Programmierers."
   }
  ]
 }
});

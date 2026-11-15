QBANK("de", "m2-tec-energia", {
 "f": [
  {
   "type": "mc",
   "q": "Welche Einheit wird meist für den Stromverbrauch zu Hause benutzt?",
   "options": [
    "Die Kilowattstunde (kWh)",
    "Der Meter (m)",
    "Das Gramm (g)"
   ],
   "answer": 0,
   "explain": "Auf der Rechnung wird elektrische Energie in Kilowattstunden (kWh) angegeben."
  },
  {
   "type": "tf",
   "q": "Erdöl und Erdgas sind fossile Brennstoffe.",
   "answer": true,
   "explain": "Sie sind in Millionen von Jahren aus Resten von Lebewesen entstanden und gehen irgendwann zur Neige."
  },
  {
   "type": "mc",
   "q": "Was dreht die Rotorblätter eines Windkraftwerks?",
   "options": [
    "Dampf",
    "Wasser aus einem Stausee",
    "Der Wind"
   ],
   "answer": 2,
   "explain": "Im Windrad drehen die vom Wind angeschobenen Blätter den Generator."
  },
  {
   "type": "num",
   "q": "Wie viele Hertz hat der Wechselstrom aus der Steckdose in Italien?",
   "answer": 50,
   "tol": 0,
   "unit": "Hz",
   "explain": "Das italienische Stromnetz hat eine Frequenz von 50 Hertz (und 230 Volt)."
  },
  {
   "type": "order",
   "q": "Bring die Energieumwandlungen in einem Wasserkraftwerk in die richtige Reihenfolge.",
   "items": [
    "Wasser im Stausee (Lageenergie)",
    "Fallendes Wasser (Bewegungsenergie)",
    "Turbine und Generator",
    "Elektrische Energie"
   ],
   "explain": "Wasser oben hat Lageenergie, beim Fallen Bewegungsenergie; Turbine und Generator machen daraus Strom."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Ein Bügeleisen mit 1,2 kW ist 2,5 Stunden eingeschaltet. Wie viele kWh verbraucht es?",
   "answer": 3,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "Energie = Leistung × Zeit = 1,2 × 2,5 = 3 kWh."
  },
  {
   "type": "num",
   "q": "Eine LED-Lampe mit 8 W brennt 30 Tage lang täglich 5 Stunden. Wie viele kWh verbraucht sie insgesamt?",
   "answer": 1.2,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "8 W = 0,008 kW; 0,008 × 5 × 30 = 1,2 kWh."
  },
  {
   "type": "mc",
   "q": "Welche Umwandlungskette beschreibt ein Windkraftwerk?",
   "options": [
    "Bewegungsenergie des Windes → mechanische Energie des Rotors → elektrische",
    "Chemisch → thermisch → mechanisch → elektrisch",
    "Lageenergie des Wassers → kinetisch → elektrisch"
   ],
   "answer": 0,
   "explain": "Wind hat Bewegungsenergie, sie dreht den Rotor und der Generator erzeugt elektrische Energie."
  },
  {
   "type": "text",
   "q": "Wie heißt das Gerät, das den Gleichstrom von Solarmodulen in Wechselstrom umwandelt?",
   "answer": [
    "wechselrichter",
    "der wechselrichter",
    "inverter",
    "ein wechselrichter"
   ],
   "explain": "Der Wechselrichter macht den Strom für das Netz und die Haushaltsgeräte nutzbar."
  },
  {
   "type": "mc",
   "q": "Warum baut man Wasserkraftwerke in den Bergen?",
   "options": [
    "Man braucht einen großen Höhenunterschied: Je höher das Wasser fällt, desto mehr Energie hat es",
    "Weil in den Bergen immer Wind weht",
    "Weil es oben wärmer ist"
   ],
   "answer": 0,
   "explain": "Je höher das Wasser herabfällt, desto mehr Energie hat es: Man braucht einen großen Höhenunterschied."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Eine Glühlampe mit 40 W und eine LED mit 5 W leuchten gleich hell. Sie brennen 30 Tage lang täglich 4 Stunden, 1 kWh kostet 0,25 €. Wie viel Euro spart man mit der LED?",
   "answer": 1.05,
   "tol": 0.01,
   "unit": "€",
   "explain": "Unterschied 35 W = 0,035 kW; 0,035 × 4 × 30 = 4,2 kWh; 4,2 × 0,25 = 1,05 €."
  },
  {
   "type": "tf",
   "q": "Ein Kraftwerk hat einen Wirkungsgrad von 40 %: Die 60 von 100, die nicht zu Strom werden, sind Energie, die spurlos verschwindet.",
   "answer": false,
   "explain": "Falsch: Energie geht nie verloren; der nicht nutzbare Teil wird zu Wärme und geht an die Umgebung."
  },
  {
   "type": "mc",
   "q": "Welche dieser Aussagen ist FALSCH?",
   "options": [
    "Der Transformator erhöht die Spannung, um Verluste beim Transport zu verringern",
    "Der Generator wandelt mechanische in elektrische Energie um",
    "Ein Atomkraftwerk stößt im Betrieb viel CO₂ aus",
    "Photovoltaik braucht keine Turbinen"
   ],
   "answer": 2,
   "explain": "Ein Atomkraftwerk stößt im Betrieb kein CO₂ aus, erzeugt aber radioaktiven Abfall: Der Fehler ist die Aussage, es stoße viel CO₂ aus."
  },
  {
   "type": "mc",
   "q": "In einer Region scheint mittags viel Sonne, aber abends steigt der Stromverbrauch. Welche Lösung hilft am besten?",
   "options": [
    "Speicher wie Batterien oder Pumpspeicherkraftwerke nutzen",
    "Mehr Strommasten bauen",
    "Die Spannung auf 380 000 V erhöhen"
   ],
   "answer": 0,
   "explain": "Abends liefert die Sonne nichts: Der Überschuss muss in Batterien oder Pumpspeicherkraftwerken gespeichert werden."
  },
  {
   "type": "order",
   "q": "Bring den Weg des Stroms vom Kraftwerk bis zur Steckdose in die richtige Reihenfolge.",
   "items": [
    "Generator",
    "Transformator, der die Spannung erhöht",
    "Hochspannungsleitungen",
    "Umspannwerk, das die Spannung senkt",
    "Steckdose zu Hause mit 230 V"
   ],
   "explain": "Die Spannung wird für den Transport erhöht und dann stufenweise auf 230 V gesenkt."
  }
 ]
});

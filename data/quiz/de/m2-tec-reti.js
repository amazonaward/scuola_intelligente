QBANK("de", "m2-tec-reti", {
 "f": [
  {
   "type": "mc",
   "q": "Welches Netz reicht nur wenige Meter, wie Bluetooth-Kopfhörer am Handy?",
   "options": [
    "PAN",
    "WAN",
    "MAN"
   ],
   "answer": 0,
   "explain": "Ein PAN (Personal Area Network) ist ein persönliches Netz: Es reicht wenige Meter."
  },
  {
   "type": "tf",
   "q": "Ein Server ist ein Computer, der Clients Dienste oder Inhalte liefert.",
   "answer": true,
   "explain": "Der Client fragt an, der Server antwortet, zum Beispiel mit einer Seite oder einem Video."
  },
  {
   "type": "mc",
   "q": "Wer hat das World Wide Web am CERN in Genf erfunden?",
   "options": [
    "Tim Berners-Lee",
    "Vinton Cerf",
    "Guglielmo Marconi"
   ],
   "answer": 0,
   "explain": "Der Engländer Tim Berners-Lee schlug das Web 1989 vor."
  },
  {
   "type": "text",
   "q": "Wie heißt die Antenne, mit der man sich ins WLAN einwählt?",
   "answer": [
    "access point",
    "der access point",
    "zugangspunkt",
    "der zugangspunkt",
    "wlan-access-point"
   ],
   "explain": "Der Access Point (Zugangspunkt) ist die WLAN-Antenne."
  },
  {
   "type": "tf",
   "q": "WLAN sendet Daten mit Lichtimpulsen in einem Glasfaden.",
   "answer": false,
   "explain": "Falsch: WLAN nutzt Funkwellen; Lichtimpulse gehören zur Glasfaser."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Eine Serienfolge ist 750 MB groß, deine Verbindung hat 50 Mbit/s. Wie viele Sekunden dauert der Download (Idealbedingungen)?",
   "answer": 120,
   "tol": 0,
   "unit": "s",
   "explain": "750 × 8 = 6000 Mbit; 6000 ÷ 50 = 120 Sekunden."
  },
  {
   "type": "mc",
   "q": "Wozu dient ein Switch?",
   "options": [
    "Er verbindet die Geräte desselben LANs miteinander",
    "Er übersetzt Seitennamen in IP-Adressen",
    "Er dient als WLAN-Antenne"
   ],
   "answer": 0,
   "explain": "Ein Switch verbindet per Kabel die Geräte desselben lokalen Netzes (LAN)."
  },
  {
   "type": "mc",
   "q": "Warum wurde IPv6 eingeführt?",
   "options": [
    "Weil IPv4 langsamer ist",
    "Weil die IPv4-Adressen nicht für alle Geräte der Welt reichen",
    "Weil IPv6 kein DNS nutzt"
   ],
   "answer": 1,
   "explain": "IPv4 hat etwa 4,3 Milliarden Adressen: zu wenige für alle Geräte; IPv6 bietet praktisch unendlich viele."
  },
  {
   "type": "num",
   "q": "Ein Video ist 25 MB groß. Wie viele Mbit sind das?",
   "answer": 200,
   "tol": 0,
   "unit": "Mbit",
   "explain": "1 Byte = 8 Bit, also 25 × 8 = 200 Mbit."
  },
  {
   "type": "text",
   "q": "Welche Abkürzung hat das verschlüsselte Web-Protokoll mit dem Schloss?",
   "answer": [
    "https"
   ],
   "explain": "HTTPS ist die verschlüsselte, sichere Version von HTTP."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Ein Spiel ist 1,2 GB (= 1200 MB) groß. Wie viele Sekunden länger dauert der Download mit ADSL (16 Mbit/s) als mit Glasfaser (400 Mbit/s)?",
   "answer": 576,
   "tol": 0,
   "unit": "s",
   "explain": "1200 × 8 = 9600 Mbit. ADSL: 9600 ÷ 16 = 600 s. Glasfaser: 9600 ÷ 400 = 24 s. Unterschied: 600 − 24 = 576 s."
  },
  {
   "type": "num",
   "q": "Eine Werbung verspricht eine Verbindung mit 200 Mbit/s. Wie viele MB pro Sekunde kann man höchstens herunterladen?",
   "answer": 25,
   "tol": 0,
   "unit": "MB/s",
   "explain": "Man teilt durch 8: 200 ÷ 8 = 25 MB/s."
  },
  {
   "type": "mc",
   "q": "Ein Seekabel reißt, aber das Internet funktioniert fast wie vorher weiter. Warum?",
   "options": [
    "Router leiten die Pakete über andere Wege",
    "Alle Daten laufen ohnehin über Satelliten",
    "Die Pakete erzeugen sich selbst neu"
   ],
   "answer": 0,
   "explain": "Router schicken Pakete auf dem freiesten Weg: Fällt ein Weg aus, nehmen sie einen anderen."
  },
  {
   "type": "tf",
   "q": "Geht ein Paket unterwegs verloren, kommt die Datei unvollständig an, weil TCP nichts tun kann.",
   "answer": false,
   "explain": "Falsch: TCP merkt, dass ein Paket fehlt, fordert es erneut an und bringt dann alles in Ordnung."
  },
  {
   "type": "order",
   "q": "Ordne die Netze nach ihrer Ausdehnung vom kleinsten zum größten.",
   "items": [
    "PAN (Kopfhörer und Handy)",
    "LAN (eine Schule)",
    "MAN (eine Stadt)",
    "WAN (Kontinente, das Internet)"
   ],
   "explain": "Von den wenigen Metern eines PAN bis zu den Kontinenten eines WAN."
  }
 ]
});

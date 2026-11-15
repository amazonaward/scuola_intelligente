QBANK("de", "p1-sto-prima-dopo", {
 "f": [
  {
   "type": "mc",
   "q": "Was machst du vor dem Essen?",
   "options": [
    "Ich wasche mir die Hände",
    "Ich gehe ins Bett",
    "Ich gehe zum Spielen raus"
   ],
   "answer": 0,
   "explain": "Vor dem Essen wäscht man sich die Hände."
  },
  {
   "type": "tf",
   "q": "Gestern kommt vor heute.",
   "answer": true,
   "explain": "Gestern ist schon vorbei: Es kommt vor heute."
  },
  {
   "type": "mc",
   "q": "Morgen kommt…",
   "options": [
    "vor heute",
    "nach heute",
    "zusammen mit gestern"
   ],
   "answer": 1,
   "explain": "Morgen ist noch nicht da: Es kommt nach heute."
  },
  {
   "type": "text",
   "q": "Das Gegenteil von «vor» ist…",
   "answer": [
    "nach",
    "danach"
   ],
   "explain": "Vor und nach sind Gegenteile."
  },
  {
   "type": "order",
   "q": "Bring in Ordnung: So macht man ein Brötchen.",
   "items": [
    "Ich nehme das Brot",
    "Ich schneide es",
    "Ich lege Schinken darauf",
    "Ich esse es"
   ],
   "explain": "Erst das Brot, dann schneidet man es, belegt es und isst es am Ende."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Carla kommt am Montag und fährt am Donnerstag. Wie viele Tage vergehen von Montag bis Donnerstag?",
   "answer": 3,
   "explain": "Ab Montag: Dienstag (1), Mittwoch (2), Donnerstag (3). Es vergehen 3 Tage.",
   "unit": "Tage"
  },
  {
   "type": "mc",
   "q": "Zuerst der Samen, dann das Pflänzchen. Was kommt nach dem Pflänzchen?",
   "options": [
    "Die Blume",
    "Der Samen",
    "Die Erde"
   ],
   "answer": 0,
   "explain": "Der Samen wird zum Pflänzchen und dann bekommt es eine Blume."
  },
  {
   "type": "tf",
   "q": "Nach dem Sonnenuntergang kommt sofort der Morgen.",
   "answer": false,
   "explain": "Nach dem Sonnenuntergang kommen der Abend und die Nacht. Der Morgen kommt nach der Nacht."
  },
  {
   "type": "text",
   "q": "Welcher Tag kommt nach dem Montag?",
   "answer": [
    "dienstag",
    "der dienstag"
   ],
   "explain": "Nach dem Montag kommt der Dienstag."
  },
  {
   "type": "order",
   "q": "Es regnet! Bring in Ordnung, was du tust.",
   "items": [
    "Ich sehe, dass es regnet",
    "Ich nehme den Schirm",
    "Ich verlasse das Haus",
    "Ich komme trocken nach Hause"
   ],
   "explain": "Erst siehst du den Regen, dann nimmst du den Schirm, gehst raus und kommst trocken zurück."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Anna kommt vor Luca. Luca kommt vor Marco. Wer kommt als Letzter?",
   "options": [
    "Anna",
    "Luca",
    "Marco"
   ],
   "answer": 2,
   "explain": "Die Reihenfolge ist Anna, Luca, Marco: Der Letzte ist Marco."
  },
  {
   "type": "num",
   "q": "Ich bin der Fünfte in der Reihe. Wie viele Kinder stehen vor mir?",
   "answer": 4,
   "explain": "Der Fünfte hat 4 Kinder vor sich: das erste, zweite, dritte und vierte.",
   "unit": "Kinder"
  },
  {
   "type": "tf",
   "q": "Wenn A vor B kommt und B vor C, dann kommt C vor A.",
   "answer": false,
   "explain": "Die Reihenfolge ist A, B, C. Also kommt C zuletzt, nach A."
  },
  {
   "type": "text",
   "q": "Nach dem Winter kommt der…",
   "answer": [
    "frühling",
    "fruehling",
    "der frühling"
   ],
   "explain": "Die Jahreszeiten sind: Frühling, Sommer, Herbst, Winter. Nach dem Winter beginnt wieder der Frühling."
  },
  {
   "type": "order",
   "q": "Bring in Ordnung, vom ältesten zum jüngsten.",
   "items": [
    "Die Dinosaurier",
    "Die Menschen der Urzeit",
    "Die alten Römer",
    "Heute"
   ],
   "explain": "Die Dinosaurier sind die ältesten. Dann die Urzeit, dann die Römer, zuletzt heute."
  }
 ]
});

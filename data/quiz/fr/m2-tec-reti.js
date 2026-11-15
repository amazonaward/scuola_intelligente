QBANK("fr", "m2-tec-reti", {
 "f": [
  {
   "type": "mc",
   "q": "Quel réseau couvre seulement quelques mètres, comme des écouteurs Bluetooth reliés au téléphone ?",
   "options": [
    "PAN",
    "WAN",
    "MAN"
   ],
   "answer": 0,
   "explain": "Un PAN (Personal Area Network) est un réseau personnel : il couvre quelques mètres."
  },
  {
   "type": "tf",
   "q": "Un serveur est un ordinateur qui fournit des services ou des contenus aux clients.",
   "answer": true,
   "explain": "Le client demande, le serveur répond, par exemple en envoyant une page ou une vidéo."
  },
  {
   "type": "mc",
   "q": "Qui a inventé le World Wide Web au CERN de Genève ?",
   "options": [
    "Tim Berners-Lee",
    "Vinton Cerf",
    "Guglielmo Marconi"
   ],
   "answer": 0,
   "explain": "L'Anglais Tim Berners-Lee a proposé le Web en 1989."
  },
  {
   "type": "text",
   "q": "Comment s'appelle l'antenne qui permet de se connecter au Wi-Fi ?",
   "answer": [
    "point d'accès",
    "le point d'accès",
    "access point",
    "un point d'accès"
   ],
   "explain": "Le point d'accès est l'antenne du Wi-Fi."
  },
  {
   "type": "tf",
   "q": "Le Wi-Fi transmet les données avec des impulsions de lumière dans un fil de verre.",
   "answer": false,
   "explain": "Faux : le Wi-Fi utilise des ondes radio ; les impulsions de lumière sont celles de la fibre optique."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un épisode de série pèse 750 Mo et ta connexion est de 50 Mbit/s. Combien de secondes faut-il pour le télécharger (conditions idéales) ?",
   "answer": 120,
   "tol": 0,
   "unit": "s",
   "explain": "750 × 8 = 6000 Mbit ; 6000 ÷ 50 = 120 secondes."
  },
  {
   "type": "mc",
   "q": "À quoi sert un switch (commutateur) ?",
   "options": [
    "Il relie entre eux les appareils d'un même LAN",
    "Il traduit les noms de sites en adresses IP",
    "Il sert d'antenne Wi-Fi"
   ],
   "answer": 0,
   "explain": "Le switch relie par câbles les appareils d'un même réseau local (LAN)."
  },
  {
   "type": "mc",
   "q": "Pourquoi l'IPv6 a-t-il été introduit ?",
   "options": [
    "Parce que l'IPv4 est plus lent",
    "Parce que les adresses IPv4 ne suffisent pas pour tous les appareils du monde",
    "Parce que l'IPv6 n'utilise pas le DNS"
   ],
   "answer": 1,
   "explain": "L'IPv4 offre environ 4,3 milliards d'adresses : trop peu pour tous les appareils ; l'IPv6 en offre un nombre pratiquement infini."
  },
  {
   "type": "num",
   "q": "Une vidéo pèse 25 Mo. Combien de Mbit cela fait-il ?",
   "answer": 200,
   "tol": 0,
   "unit": "Mbit",
   "explain": "1 octet = 8 bits, donc 25 × 8 = 200 Mbit."
  },
  {
   "type": "text",
   "q": "Quel sigle désigne le protocole chiffré du Web, celui du cadenas ?",
   "answer": [
    "https"
   ],
   "explain": "HTTPS est la version chiffrée et sécurisée de HTTP."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un jeu pèse 1,2 Go (= 1200 Mo). Combien de secondes de plus faut-il pour le télécharger avec une ADSL de 16 Mbit/s qu'avec une fibre de 400 Mbit/s ?",
   "answer": 576,
   "tol": 0,
   "unit": "s",
   "explain": "1200 × 8 = 9600 Mbit. ADSL : 9600 ÷ 16 = 600 s. Fibre : 9600 ÷ 400 = 24 s. Différence : 600 − 24 = 576 s."
  },
  {
   "type": "num",
   "q": "Une publicité promet une connexion de 200 Mbit/s. Combien de Mo par seconde peut-on télécharger au maximum ?",
   "answer": 25,
   "tol": 0,
   "unit": "Mo/s",
   "explain": "On divise par 8 : 200 ÷ 8 = 25 Mo/s."
  },
  {
   "type": "mc",
   "q": "Un câble sous-marin se rompt, mais Internet continue de fonctionner presque comme avant. Pourquoi ?",
   "options": [
    "Les routeurs dirigent les paquets par d'autres chemins",
    "Toutes les données passent de toute façon par les satellites",
    "Les paquets se recréent tout seuls"
   ],
   "answer": 0,
   "explain": "Les routeurs envoient les paquets par la route la plus libre : si un chemin est coupé, ils en utilisent un autre."
  },
  {
   "type": "tf",
   "q": "Si un paquet se perd en route, le fichier arrive incomplet car TCP n'y peut rien.",
   "answer": false,
   "explain": "Faux : TCP s'aperçoit qu'un paquet manque et le fait renvoyer, puis remet tout dans l'ordre."
  },
  {
   "type": "order",
   "q": "Mets les réseaux dans l'ordre, du plus petit au plus étendu.",
   "items": [
    "PAN (écouteurs et téléphone)",
    "LAN (une école)",
    "MAN (une ville)",
    "WAN (continents, Internet)"
   ],
   "explain": "Des quelques mètres du PAN jusqu'aux continents du WAN."
  }
 ]
});

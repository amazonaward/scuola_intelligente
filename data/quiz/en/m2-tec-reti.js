QBANK("en", "m2-tec-reti", {
 "f": [
  {
   "type": "mc",
   "q": "Which network covers only a few metres, like Bluetooth headphones linked to a phone?",
   "options": [
    "PAN",
    "WAN",
    "MAN"
   ],
   "answer": 0,
   "explain": "A PAN (Personal Area Network) is a personal network: it covers a few metres."
  },
  {
   "type": "tf",
   "q": "A server is a computer that provides services or content to clients.",
   "answer": true,
   "explain": "The client asks, the server answers, for example by sending a page or a video."
  },
  {
   "type": "mc",
   "q": "Who invented the World Wide Web at CERN in Geneva?",
   "options": [
    "Tim Berners-Lee",
    "Vinton Cerf",
    "Guglielmo Marconi"
   ],
   "answer": 0,
   "explain": "The Englishman Tim Berners-Lee proposed the Web in 1989."
  },
  {
   "type": "text",
   "q": "What is the antenna that lets you connect to Wi-Fi called?",
   "answer": [
    "access point",
    "the access point",
    "an access point",
    "wireless access point"
   ],
   "explain": "The access point is the Wi-Fi antenna."
  },
  {
   "type": "tf",
   "q": "Wi-Fi sends data with pulses of light inside a glass thread.",
   "answer": false,
   "explain": "False: Wi-Fi uses radio waves; pulses of light belong to optical fibre."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A series episode is 750 MB and your connection is 50 Mbit/s. How many seconds are needed to download it (ideal conditions)?",
   "answer": 120,
   "tol": 0,
   "unit": "s",
   "explain": "750 × 8 = 6000 Mbit; 6000 ÷ 50 = 120 seconds."
  },
  {
   "type": "mc",
   "q": "What is a switch for?",
   "options": [
    "It connects the devices of the same LAN to each other",
    "It translates site names into IP addresses",
    "It works as a Wi-Fi antenna"
   ],
   "answer": 0,
   "explain": "A switch connects, with cables, the devices of the same local network (LAN)."
  },
  {
   "type": "mc",
   "q": "Why was IPv6 introduced?",
   "options": [
    "Because IPv4 is slower",
    "Because IPv4 addresses are not enough for all the devices in the world",
    "Because IPv6 does not use DNS"
   ],
   "answer": 1,
   "explain": "IPv4 has about 4.3 billion addresses: too few for all devices; IPv6 offers a practically infinite number."
  },
  {
   "type": "num",
   "q": "A video weighs 25 MB. How many Mbit is that?",
   "answer": 200,
   "tol": 0,
   "unit": "Mbit",
   "explain": "1 byte = 8 bits, so 25 × 8 = 200 Mbit."
  },
  {
   "type": "text",
   "q": "What acronym names the encrypted Web protocol, the one with the padlock?",
   "answer": [
    "https"
   ],
   "explain": "HTTPS is the encrypted, secure version of HTTP."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "A game is 1.2 GB (= 1200 MB). How many more seconds are needed to download it with a 16 Mbit/s ADSL than with a 400 Mbit/s fibre line?",
   "answer": 576,
   "tol": 0,
   "unit": "s",
   "explain": "1200 × 8 = 9600 Mbit. ADSL: 9600 ÷ 16 = 600 s. Fibre: 9600 ÷ 400 = 24 s. Difference: 600 − 24 = 576 s."
  },
  {
   "type": "num",
   "q": "An advert promises a 200 Mbit/s connection. How many MB per second can be downloaded at most?",
   "answer": 25,
   "tol": 0,
   "unit": "MB/s",
   "explain": "Divide by 8: 200 ÷ 8 = 25 MB/s."
  },
  {
   "type": "mc",
   "q": "A submarine cable breaks, but the Internet keeps working almost as before. Why?",
   "options": [
    "Routers send the packets along other routes",
    "All data goes through satellites anyway",
    "Packets recreate themselves"
   ],
   "answer": 0,
   "explain": "Routers send packets along the freest route: if one path fails they use another."
  },
  {
   "type": "tf",
   "q": "If a packet gets lost on the way, the file arrives incomplete because TCP can do nothing about it.",
   "answer": false,
   "explain": "False: TCP notices a packet is missing and has it sent again, then puts everything in order."
  },
  {
   "type": "order",
   "q": "Put the networks in order from smallest to largest by extent.",
   "items": [
    "PAN (headphones and phone)",
    "LAN (a school)",
    "MAN (a city)",
    "WAN (continents, the Internet)"
   ],
   "explain": "From the few metres of a PAN to the continents of a WAN."
  }
 ]
});

QBANK("it", "m2-tec-reti", {
 "f": [
  {
   "type": "mc",
   "q": "Quale rete copre solo pochi metri, come le cuffie Bluetooth collegate al telefono?",
   "options": [
    "PAN",
    "WAN",
    "MAN"
   ],
   "answer": 0,
   "explain": "La PAN (Personal Area Network) è la rete personale: copre pochi metri."
  },
  {
   "type": "tf",
   "q": "Un server è un computer che fornisce servizi o contenuti ai client.",
   "answer": true,
   "explain": "Il client chiede, il server risponde, per esempio inviando una pagina o un video."
  },
  {
   "type": "mc",
   "q": "Chi inventò il World Wide Web al CERN di Ginevra?",
   "options": [
    "Tim Berners-Lee",
    "Vinton Cerf",
    "Guglielmo Marconi"
   ],
   "answer": 0,
   "explain": "L'inglese Tim Berners-Lee propose il Web nel 1989."
  },
  {
   "type": "text",
   "q": "Come si chiama l'antenna che permette di collegarsi al Wi-Fi?",
   "answer": [
    "access point",
    "punto di accesso",
    "l'access point",
    "il punto di accesso"
   ],
   "explain": "L'access point è l'antenna del Wi-Fi."
  },
  {
   "type": "tf",
   "q": "Il Wi-Fi trasmette i dati con impulsi di luce dentro un filo di vetro.",
   "answer": false,
   "explain": "Falso: il Wi-Fi usa onde radio; gli impulsi di luce sono della fibra ottica."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un episodio di una serie pesa 750 MB e la tua connessione è di 50 Mbit/s. Quanti secondi servono per scaricarlo (condizioni ideali)?",
   "answer": 120,
   "tol": 0,
   "unit": "s",
   "explain": "750 × 8 = 6000 Mbit; 6000 ÷ 50 = 120 secondi."
  },
  {
   "type": "mc",
   "q": "A che cosa serve uno switch?",
   "options": [
    "Collega tra loro i dispositivi di una stessa LAN",
    "Traduce i nomi dei siti in indirizzi IP",
    "Fa da antenna per il Wi-Fi"
   ],
   "answer": 0,
   "explain": "Lo switch collega con i cavi i dispositivi di una stessa rete locale (LAN)."
  },
  {
   "type": "mc",
   "q": "Perché è stato introdotto l'IPv6?",
   "options": [
    "Perché IPv4 è più lento",
    "Perché gli indirizzi IPv4 non bastano per tutti i dispositivi del mondo",
    "Perché IPv6 non usa il DNS"
   ],
   "answer": 1,
   "explain": "Gli indirizzi IPv4 sono circa 4,3 miliardi: troppo pochi per tutti i dispositivi; IPv6 ne offre un numero praticamente infinito."
  },
  {
   "type": "num",
   "q": "Un video pesa 25 MB. Quanti Mbit sono?",
   "answer": 200,
   "tol": 0,
   "unit": "Mbit",
   "explain": "1 byte = 8 bit, quindi 25 × 8 = 200 Mbit."
  },
  {
   "type": "text",
   "q": "Con quale sigla si indica il protocollo del Web cifrato, quello del lucchetto?",
   "answer": [
    "https"
   ],
   "explain": "HTTPS è la versione cifrata e sicura di HTTP."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un gioco pesa 1,2 GB (= 1200 MB). Quanti secondi in più servono per scaricarlo con una ADSL da 16 Mbit/s rispetto a una fibra da 400 Mbit/s?",
   "answer": 576,
   "tol": 0,
   "unit": "s",
   "explain": "1200 × 8 = 9600 Mbit. ADSL: 9600 ÷ 16 = 600 s. Fibra: 9600 ÷ 400 = 24 s. Differenza: 600 − 24 = 576 s."
  },
  {
   "type": "num",
   "q": "Una pubblicità promette una connessione da 200 Mbit/s. Quanti MB al secondo si scaricano al massimo?",
   "answer": 25,
   "tol": 0,
   "unit": "MB/s",
   "explain": "Si divide per 8: 200 ÷ 8 = 25 MB/s."
  },
  {
   "type": "mc",
   "q": "Un cavo sottomarino si rompe, ma Internet continua a funzionare quasi come prima. Perché?",
   "options": [
    "I router instradano i pacchetti su altri percorsi",
    "Tutti i dati passano comunque dai satelliti",
    "I pacchetti si ricreano da soli"
   ],
   "answer": 0,
   "explain": "I router mandano i pacchetti sulla strada più libera: se un percorso non funziona ne usano un altro."
  },
  {
   "type": "tf",
   "q": "Se un pacchetto si perde durante il viaggio, il file arriva incompleto perché TCP non può farci niente.",
   "answer": false,
   "explain": "Falso: TCP si accorge che manca un pacchetto e lo fa rispedire, poi rimette tutto in ordine."
  },
  {
   "type": "order",
   "q": "Metti in ordine le reti dalla più piccola alla più grande per estensione.",
   "items": [
    "PAN (cuffie e telefono)",
    "LAN (una scuola)",
    "MAN (una città)",
    "WAN (continenti, Internet)"
   ],
   "explain": "Si va dai pochi metri della PAN fino ai continenti della WAN."
  }
 ]
});

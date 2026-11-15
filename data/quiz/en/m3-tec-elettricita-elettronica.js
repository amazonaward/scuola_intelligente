QBANK("en", "m3-tec-elettricita-elettronica", {
 "f": [
  {
   "type": "mc",
   "q": "Which instrument measures the intensity of electric current?",
   "options": [
    "Voltmeter",
    "Ammeter",
    "Ohmmeter"
   ],
   "answer": 1,
   "explain": "The ammeter measures current intensity in amperes (A)."
  },
  {
   "type": "tf",
   "q": "Salt water does not conduct electricity.",
   "answer": false,
   "explain": "False: dissolved salts let charges move, so salt water conducts."
  },
  {
   "type": "text",
   "q": "What is the diode that emits light called? (three-letter acronym)",
   "answer": [
    "led",
    "an led",
    "the led"
   ],
   "explain": "LED = Light Emitting Diode."
  },
  {
   "type": "mc",
   "q": "In which unit is electric power measured?",
   "options": [
    "Ohm",
    "Ampere",
    "Watt"
   ],
   "answer": 2,
   "explain": "Power is measured in watts (W): P = V × I."
  },
  {
   "type": "num",
   "q": "How many volts does an ordinary AA battery have?",
   "answer": 1.5,
   "unit": "V",
   "explain": "An AA battery supplies 1.5 V."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A heater connected to 230 V draws 6 A. How many watts of power does it have?",
   "answer": 1380,
   "unit": "W",
   "explain": "P = V × I = 230 × 6 = 1380 W."
  },
  {
   "type": "num",
   "q": "A 1000 Ω resistor is connected to 5 V. How many milliamperes (mA) flow through it?",
   "answer": 5,
   "unit": "mA",
   "explain": "I = V ÷ R = 5 ÷ 1000 = 0.005 A = 5 mA."
  },
  {
   "type": "mc",
   "q": "Three identical bulbs are connected in series to a 9 V battery. What voltage is across each one?",
   "options": [
    "9 V",
    "3 V",
    "27 V"
   ],
   "answer": 1,
   "explain": "In series the voltage is shared equally: 9 V ÷ 3 = 3 V."
  },
  {
   "type": "tf",
   "q": "A transistor can work as a switch controlled by an electrical signal.",
   "answer": true,
   "explain": "True: a small signal on one terminal controls a larger current. Chips contain billions of them."
  },
  {
   "type": "order",
   "q": "Put the steps for calculating a LED's protective resistor in order.",
   "items": [
    "Decide the LED's wanted current",
    "Subtract the LED voltage from the supply voltage",
    "Calculate R = V ÷ I",
    "Choose the standard value equal or slightly larger"
   ],
   "explain": "First the current, then the voltage to absorb, then Ohm's law, finally the standard value."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "You want to light a 2 V, 10 mA LED with a 9 V battery. What series resistor (in Ω) is needed?",
   "answer": 700,
   "unit": "Ω",
   "explain": "The resistor must absorb 9 − 2 = 7 V. 10 mA = 0.01 A, so R = 7 ÷ 0.01 = 700 Ω."
  },
  {
   "type": "num",
   "q": "A 100 W lamp stays on for 8 hours. Energy costs €0.25 per kWh. How much does it cost (in €)?",
   "answer": 0.2,
   "tol": 0.005,
   "unit": "€",
   "explain": "100 W × 8 h = 800 Wh = 0.8 kWh. Cost: 0.8 × 0.25 = €0.20."
  },
  {
   "type": "mc",
   "q": "If the voltage across a resistor doubles and its resistance stays the same, what happens to the current?",
   "options": [
    "It halves",
    "It doubles",
    "It stays the same",
    "It becomes four times larger"
   ],
   "answer": 1,
   "explain": "By Ohm's law I = V ÷ R: with constant R, voltage and current are directly proportional."
  },
  {
   "type": "mc",
   "q": "You want an alarm that goes off only when a person moves in front of the door. Which sensor do you choose?",
   "options": [
    "Photoresistor (LDR)",
    "Thermistor (NTC)",
    "Passive infrared (PIR) sensor"
   ],
   "answer": 2,
   "explain": "The PIR detects the movement of warm bodies; the photoresistor only senses light and the thermistor temperature."
  },
  {
   "type": "tf",
   "q": "To measure a battery's voltage, you connect the ammeter directly across its two terminals.",
   "answer": false,
   "explain": "False: voltage is measured with a voltmeter; an ammeter has very low resistance and connected like this would cause a short circuit."
  }
 ]
});

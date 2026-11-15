QBANK("en", "m3-sci-elettricita", {
 "f": [
  {
   "type": "mc",
   "q": "What happens between two electric charges of opposite sign?",
   "options": [
    "si respingono",
    "si attraggono",
    "non interagiscono"
   ],
   "answer": 1,
   "explain": "Charges of opposite sign (one positive and one negative) attract each other; charges of the same sign repel."
  },
  {
   "type": "tf",
   "q": "Copper is a good conductor of electricity.",
   "answer": true,
   "explain": "Metals, and copper in particular, let current pass easily: that is why electric wires are made of copper."
  },
  {
   "type": "mc",
   "q": "Which instrument measures the intensity of an electric current?",
   "options": [
    "amperometro",
    "voltmetro",
    "termometro"
   ],
   "answer": 0,
   "explain": "Current intensity, in amperes, is measured with an ammeter; a voltmeter measures voltage."
  },
  {
   "type": "num",
   "q": "A normal AA battery provides a voltage of how many volts?",
   "answer": 1.5,
   "tol": 0.01,
   "unit": "V",
   "explain": "An AA alkaline or zinc-carbon battery gives 1.5 V; that is why three batteries in series give 4.5 V."
  },
  {
   "type": "text",
   "q": "What is the unit of measurement of electric voltage?",
   "answer": [
    "volt",
    "the volt",
    "volts",
    "v"
   ],
   "explain": "Electric voltage is measured in volts (V), in honour of Alessandro Volta."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A 60 W bulb stays on for 5 hours. How many kWh does it use?",
   "answer": 0.3,
   "tol": 0.005,
   "unit": "kWh",
   "explain": "60 W = 0.06 kW. Energy = power × time = 0.06 × 5 = 0.3 kWh."
  },
  {
   "type": "num",
   "q": "A current of 2 A flows through a 15 Ω resistor in a circuit. What is the voltage across it?",
   "answer": 30,
   "unit": "V",
   "explain": "Ohm's law: V = R × I = 15 × 2 = 30 V."
  },
  {
   "type": "num",
   "q": "Three resistors of 5 Ω, 10 Ω and 15 Ω are connected in series. What is the total resistance?",
   "answer": 30,
   "unit": "Ω",
   "explain": "In series, resistances add up: 5 + 10 + 15 = 30 Ω."
  },
  {
   "type": "mc",
   "q": "How must a voltmeter be connected to measure the voltage across a bulb?",
   "options": [
    "in series",
    "in parallel",
    "to one terminal only"
   ],
   "answer": 1,
   "explain": "A voltmeter is connected in parallel with the component, because it measures the potential difference between its two ends."
  },
  {
   "type": "tf",
   "q": "A fuse protects an appliance if it is connected in parallel with it.",
   "answer": false,
   "explain": "False: a fuse must be connected in series, so that when the current is too high the wire melts and breaks the circuit."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "A 12 Ω resistor and a 4 Ω resistor are connected in parallel. What is the total resistance?",
   "answer": 3,
   "unit": "Ω",
   "explain": "In parallel: 1/R = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3, so R = 3 Ω. (Or product ÷ sum = 48 ÷ 16 = 3 Ω.)"
  },
  {
   "type": "num",
   "q": "A 9 V battery powers two resistors in series, 100 Ω and 200 Ω. How many milliamperes (mA) flow in the circuit?",
   "answer": 30,
   "unit": "mA",
   "explain": "Total resistance = 100 + 200 = 300 Ω. I = V ÷ R = 9 ÷ 300 = 0.03 A = 30 mA (1 A = 1000 mA)."
  },
  {
   "type": "mc",
   "q": "A 1500 W hair dryer is plugged into the 230 V mains. About how much current does it draw?",
   "options": [
    "circa 0,15 A",
    "circa 345 A",
    "circa 6,5 A"
   ],
   "answer": 2,
   "explain": "From P = V × I we get I = P ÷ V = 1500 ÷ 230 ≈ 6.5 A."
  },
  {
   "type": "tf",
   "q": "If you add a second identical bulb in series with the first, the current in the circuit increases.",
   "answer": false,
   "explain": "False: in series, resistances add up, the total resistance grows and, at the same voltage, the current decreases (I = V ÷ R)."
  },
  {
   "type": "order",
   "q": "Put the journey of electricity from the power plant to the wall socket in order.",
   "items": [
    "Water or steam turns the turbine",
    "The alternator turns movement into electric current",
    "A transformer raises the voltage",
    "The current travels along high-voltage lines",
    "Another transformer lowers the voltage to 230 V"
   ],
   "explain": "The turbine drives the alternator, which produces current; the voltage is raised to reduce losses along the lines and then lowered to 230 V for home use."
  }
 ]
});

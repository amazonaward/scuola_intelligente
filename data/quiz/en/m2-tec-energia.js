QBANK("en", "m2-tec-energia", {
 "f": [
  {
   "type": "mc",
   "q": "Which unit is usually used to measure the electricity used at home?",
   "options": [
    "The kilowatt-hour (kWh)",
    "The metre (m)",
    "The gram (g)"
   ],
   "answer": 0,
   "explain": "On the bill, electrical energy is measured in kilowatt-hours (kWh)."
  },
  {
   "type": "tf",
   "q": "Oil and natural gas are fossil fuels.",
   "answer": true,
   "explain": "They formed over millions of years from the remains of living things and they run out."
  },
  {
   "type": "mc",
   "q": "What turns the blades of a wind power plant?",
   "options": [
    "Steam",
    "Water from a reservoir",
    "The wind"
   ],
   "answer": 2,
   "explain": "In a wind turbine the blades pushed by the wind turn the alternator."
  },
  {
   "type": "num",
   "q": "How many hertz does the alternating current from home sockets in Italy have?",
   "answer": 50,
   "tol": 0,
   "unit": "Hz",
   "explain": "The Italian grid has a frequency of 50 hertz (and 230 volts)."
  },
  {
   "type": "order",
   "q": "Put the energy transformations in a hydroelectric plant in order.",
   "items": [
    "Water in the reservoir (potential energy)",
    "Falling water (kinetic energy)",
    "Turbine and alternator",
    "Electrical energy"
   ],
   "explain": "Water up high has potential energy, falling it has kinetic energy, the turbine and alternator turn it into electricity."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A 1.2 kW iron stays on for 2.5 hours. How many kWh does it use?",
   "answer": 3,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "Energy = power × time = 1.2 × 2.5 = 3 kWh."
  },
  {
   "type": "num",
   "q": "An 8 W LED bulb is on 5 hours a day for 30 days. How many kWh does it use in total?",
   "answer": 1.2,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "8 W = 0.008 kW; 0.008 × 5 × 30 = 1.2 kWh."
  },
  {
   "type": "mc",
   "q": "Which chain of transformations describes a wind power plant?",
   "options": [
    "Kinetic energy of the wind → mechanical energy of the rotor → electrical",
    "Chemical → thermal → mechanical → electrical",
    "Potential energy of water → kinetic → electrical"
   ],
   "answer": 0,
   "explain": "Wind has kinetic energy, it turns the rotor, and the alternator makes electrical energy."
  },
  {
   "type": "text",
   "q": "What is the device called that turns the direct current of solar panels into alternating current?",
   "answer": [
    "inverter",
    "the inverter",
    "an inverter",
    "a inverter"
   ],
   "explain": "The inverter makes the current suitable for the grid and for home appliances."
  },
  {
   "type": "mc",
   "q": "Why are hydroelectric plants built in the mountains?",
   "options": [
    "A big drop in height is needed: the higher the water falls from, the more energy it has",
    "Because there is always wind in the mountains",
    "Because it is warmer up high"
   ],
   "answer": 0,
   "explain": "The higher the water falls from, the more energy it has: a big drop in height is needed."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "A 40 W incandescent bulb and a 5 W LED give the same light. If they are on 4 hours a day for 30 days and 1 kWh costs €0.25, how many euros are saved with the LED?",
   "answer": 1.05,
   "tol": 0.01,
   "unit": "€",
   "explain": "Difference 35 W = 0.035 kW; 0.035 × 4 × 30 = 4.2 kWh; 4.2 × 0.25 = €1.05."
  },
  {
   "type": "tf",
   "q": "A power plant has an efficiency of 40%: the 60 out of 100 that do not become electricity is energy that vanishes into nothing.",
   "answer": false,
   "explain": "False: energy is never destroyed; the part that is not useful turns into heat and is lost."
  },
  {
   "type": "mc",
   "q": "Which of these statements is FALSE?",
   "options": [
    "The transformer raises the voltage to reduce losses in transport",
    "The alternator turns mechanical energy into electrical energy",
    "A nuclear plant emits a lot of CO₂ while running",
    "Photovoltaics do not use turbines"
   ],
   "answer": 2,
   "explain": "Nuclear plants do not emit CO₂ while running, but they produce radioactive waste: saying they emit a lot is the mistake."
  },
  {
   "type": "mc",
   "q": "In a region there is a lot of sun at noon but electricity use rises in the evening. Which solution solves the problem best?",
   "options": [
    "Use storage systems such as batteries or pumped-storage plants",
    "Build more pylons",
    "Raise the voltage to 380,000 V"
   ],
   "answer": 0,
   "explain": "The sun does not produce in the evening: the surplus energy must be stored with batteries or pumped-storage plants."
  },
  {
   "type": "order",
   "q": "Put the path of electricity from the power plant to the home socket in order.",
   "items": [
    "Alternator",
    "Transformer that raises the voltage",
    "High-voltage power lines",
    "Substation that lowers the voltage",
    "Home socket at 230 V"
   ],
   "explain": "The voltage is raised for transport and then lowered step by step to 230 V."
  }
 ]
});

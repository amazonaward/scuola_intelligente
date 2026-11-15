QBANK("en", "lib-treno", {
 "f": [
  {
   "type": "mc",
   "q": "Where does the train driver sit?",
   "options": [
    "In the bogie",
    "In the driver's cab",
    "On the pantograph"
   ],
   "answer": 1,
   "explain": "The cab is at the front: it has the levers, the screens and the radio."
  },
  {
   "type": "tf",
   "q": "The train has a steering wheel to choose where to go.",
   "answer": false,
   "explain": "A train has no steering wheel: the track decides where it goes."
  },
  {
   "type": "text",
   "q": "The first Italian railway, opened in 1839, ran from Naples to which town?",
   "answer": [
    "portici",
    "to portici"
   ],
   "explain": "The Naples–Portici line was 7 km long and was run by a steam locomotive."
  },
  {
   "type": "mc",
   "q": "What material are a train's wheels and rails made of?",
   "options": [
    "Rubber",
    "Wood",
    "Steel"
   ],
   "answer": 2,
   "explain": "Steel wheels on steel rails have very little friction."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A high-speed train travels at 300 km/h. How many km does it cover in 20 minutes?",
   "answer": 100,
   "unit": "km",
   "explain": "20 minutes is a third of an hour: 300 ÷ 3 = 100 km."
  },
  {
   "type": "order",
   "q": "Put what happens when the train brakes in order.",
   "items": [
    "The driver pulls the brake lever",
    "The motors become generators and slow the train",
    "The electricity produced goes back into the line",
    "The disc brakes come in"
   ],
   "explain": "First the electric motor brakes and makes electricity; then the disc brakes help."
  },
  {
   "type": "mc",
   "q": "What is the transformer under the train floor for?",
   "options": [
    "To lower the voltage from 25,000 volts to a few thousand",
    "To raise the wire's voltage even more",
    "To control the speed of the motors"
   ],
   "answer": 0,
   "explain": "The current from the wire is too strong for the motors: the transformer lowers the voltage. Controlling the current is the converter's job."
  },
  {
   "type": "tf",
   "q": "The train's nose is long and smooth because at high speed air resistance is the biggest effort to overcome.",
   "answer": true,
   "explain": "A streamlined shape cuts through the air and uses less energy."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Per person and per km a train emits up to 10 times less CO₂ than a car. If a car emits 120 g of CO₂ per person per km, how many grams does the train emit at most per person per km?",
   "answer": 12,
   "unit": "g",
   "explain": "120 ÷ 10 = 12 g of CO₂."
  },
  {
   "type": "mc",
   "q": "Anna says: \"A train at 300 km/h can brake at the last moment, like a car.\" What is the mistake?",
   "options": [
    "The train brakes only thanks to the overhead wire",
    "The train has no brakes",
    "A train at 300 km/h needs more than 3 km to stop"
   ],
   "answer": 2,
   "explain": "The train is very fast and heavy: it needs more than 3 km to stop, so the driver must brake well in advance."
  },
  {
   "type": "mc",
   "q": "Why can a train go round bends without slipping off the rails?",
   "options": [
    "Because it has a hidden steering wheel",
    "Because the bogies can turn a little under the body",
    "Because the wheels are made of rubber"
   ],
   "answer": 1,
   "explain": "Under the body the bogies (4 wheels each) swivel slightly and follow the bend; the flange keeps the wheels on the rail."
  },
  {
   "type": "tf",
   "q": "The electric current that powers the train returns to the power station through the wheels and the rails.",
   "answer": true,
   "explain": "The circuit closes: wire, pantograph, motors, wheels and rails."
  }
 ]
});

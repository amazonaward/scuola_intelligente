QBANK("en", "m3-tec-robotica", {
 "f": [
  {
   "type": "mc",
   "q": "Which part of a robot works as the \"brain\"?",
   "options": [
    "The sensor",
    "The controller",
    "The actuator"
   ],
   "answer": 1,
   "explain": "The controller processes sensor data and decides which commands to give the actuators."
  },
  {
   "type": "tf",
   "q": "An infrared sensor can help a robot follow a black line on the floor.",
   "answer": true,
   "explain": "True: the black line absorbs infrared light, the light floor reflects it."
  },
  {
   "type": "text",
   "q": "What is the famous microcontroller board born in Ivrea and used to build robots called?",
   "answer": [
    "arduino"
   ],
   "explain": "Arduino was born in Ivrea in 2005 and is used worldwide to learn electronics and robotics."
  },
  {
   "type": "mc",
   "q": "Which sensor tells a robot how far a motor has turned?",
   "options": [
    "Ultrasonic",
    "Contact button",
    "Encoder"
   ],
   "answer": 2,
   "explain": "The encoder counts turns or fractions of a turn, so the robot knows how many centimetres it has moved."
  },
  {
   "type": "num",
   "q": "In what year did the writer Karel Čapek write the play R.U.R., which gave us the word \"robot\"?",
   "answer": 1920,
   "explain": "The play R.U.R. dates from 1920; \"robot\" comes from the Czech robota, \"forced labour\"."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "A stepper motor makes 200 steps per turn. How many steps are needed for 2.5 turns?",
   "answer": 500,
   "unit": "steps",
   "explain": "200 × 2.5 = 500 steps."
  },
  {
   "type": "num",
   "q": "A wheel has a circumference of 20 cm. If the encoder counts 15 turns, how many centimetres has the robot travelled?",
   "answer": 300,
   "unit": "cm",
   "explain": "Each turn moves it forward 20 cm: 15 × 20 = 300 cm (3 m)."
  },
  {
   "type": "mc",
   "q": "A thermostat (closed loop) has a goal of 20 °C and the sensor reads 17 °C. What does the controller do?",
   "options": [
    "Turns the heating off",
    "Turns the heating on",
    "Does nothing because the timer has not expired"
   ],
   "answer": 1,
   "explain": "The controller compares the measurement (17 °C) with the goal (20 °C) and acts to reduce the difference."
  },
  {
   "type": "tf",
   "q": "The PLC is a rugged computer used in factories to control machines and conveyor belts.",
   "answer": true,
   "explain": "True: the PLC (programmable logic controller) is the rugged \"brain\" of production lines."
  },
  {
   "type": "order",
   "q": "Put in order the work of an automatic line in a car factory.",
   "items": [
    "A sensor detects the body on the belt",
    "The PLC stops the belt",
    "The robot arms weld",
    "A camera checks the quality",
    "The belt restarts"
   ],
   "explain": "Pattern: sensor ➜ controller ➜ actuators (arms) ➜ quality check ➜ restart."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "A robot navigates using only wheel encoders. After a long distance its estimated position becomes wrong. Why?",
   "options": [
    "Wheels can slip and small errors add up turn after turn",
    "The encoder stops working after 10 metres",
    "The robot forgets it has a controller",
    "The wheels widen over time"
   ],
   "answer": 0,
   "explain": "That is why other sensors (gyroscope, LiDAR, camera) are added to correct the position."
  },
  {
   "type": "num",
   "q": "A 200-step-per-turn stepper moves an arm through a 1:5 gearbox (the motor makes 5 turns for 1 turn of the arm). How many steps are needed for one full turn of the arm?",
   "answer": 1000,
   "unit": "steps",
   "explain": "The motor must make 5 turns: 5 × 200 = 1000 steps."
  },
  {
   "type": "mc",
   "q": "A timer-controlled sprinkler waters for 10 minutes every day, even when it rains. How do you turn it into a closed-loop system?",
   "options": [
    "By lengthening the timer",
    "By adding a soil moisture sensor that turns on the water only below a threshold",
    "By changing the colour of the pipes",
    "By replacing the timer with a more precise timer"
   ],
   "answer": 1,
   "explain": "A closed loop measures the result (moisture) and compares it with the goal: so no water is wasted when it rains."
  },
  {
   "type": "tf",
   "q": "Adding more degrees of freedom to a robotic arm always makes it simpler to control.",
   "answer": false,
   "explain": "False: more independent movements make the arm more versatile but the calculations and control more complex."
  },
  {
   "type": "text",
   "q": "What is the goal value that the controller compares with the sensor's measurement in a closed-loop system called?",
   "answer": [
    "set-point",
    "setpoint",
    "set point",
    "target",
    "target value",
    "goal"
   ],
   "explain": "It is the set-point: the controller computes the difference between set-point and measurement and corrects it."
  }
 ]
});

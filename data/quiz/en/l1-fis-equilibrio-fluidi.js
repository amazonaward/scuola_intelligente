QBANK("en", "l1-fis-equilibrio-fluidi", {
 "f": [
  { "type": "mc", "q": "What is the unit of pressure in the International System?", "options": ["newton", "pascal", "joule"], "answer": 1, "explain": "Pressure is measured in pascals: 1 Pa = 1 N/m²." },
  { "type": "num", "q": "A force of 100 N acts perpendicularly on 2 m². What pressure (in Pa) does it exert?", "answer": 50, "unit": "Pa", "explain": "p = F/S = 100/2 = 50 Pa." },
  { "type": "tf", "q": "For the same weight, a person on skis exerts a lower pressure on the snow than a person in boots.", "answer": true, "explain": "Skis have a much larger area: for the same force, the pressure p = F/S is lower." },
  { "type": "text", "q": "Which scientist from Syracuse stated the principle about the upward push on bodies immersed in a fluid?", "answer": ["archimedes", "archimedes of syracuse"], "explain": "Archimedes of Syracuse (3rd century BC) formulated the principle that bears his name." },
  { "type": "mc", "q": "An object sinks in water when its density is…", "options": ["less than 1000 kg/m³", "equal to 1000 kg/m³", "greater than 1000 kg/m³"], "answer": 2, "explain": "If the density of the body is greater than that of water, the weight beats the upthrust and the body sinks." }
 ],
 "m": [
  { "type": "num", "q": "What pressure (in Pa) does water (ρ = 1000 kg/m³, g = 10 m/s²) exert at a depth of 8 m, excluding the atmosphere?", "answer": 80000, "unit": "Pa", "explain": "p = ρ g h = 1000 × 10 × 8 = 80 000 Pa." },
  { "type": "mc", "q": "According to Pascal's principle, in a fluid in equilibrium a pressure applied at one point…", "options": ["stays only at that point", "is transmitted equally to every point of the fluid", "decreases with distance"], "answer": 1, "explain": "The pressure is transmitted unchanged throughout the fluid and to the walls." },
  { "type": "num", "q": "A hydraulic press has pistons with areas of 10 cm² and 500 cm². Pushing the small one with 20 N, what force (in N) do you get on the large one?", "answer": 1000, "unit": "N", "explain": "F2 = F1·S2/S1 = 20 × 500/10 = 1000 N." },
  { "type": "tf", "q": "The Archimedes upthrust on a completely immersed body depends on the body's volume but not on its shape.", "answer": true, "explain": "FA = ρ V g: only the volume of fluid displaced counts." },
  { "type": "mc", "q": "A block of ice (917 kg/m³) floats in water. Roughly what fraction of its volume is under water?", "options": ["8%", "50%", "92%"], "answer": 2, "explain": "The immersed fraction is ρice/ρwater = 917/1000, about 92%." }
 ],
 "d": [
  { "type": "num", "q": "A wooden cube with 20 cm sides and a mass of 6.4 kg is held completely under water (ρ = 1000 kg/m³, g = 10 m/s²). What is the resultant force on it (in N, positive if upwards)?", "answer": 16, "unit": "N", "explain": "V = 0.008 m³: FA = 1000 × 0.008 × 10 = 80 N; P = 6.4 × 10 = 64 N. Resultant upwards: 80 − 64 = 16 N." },
  { "type": "num", "q": "A U-tube contains water on one side and oil on the other; the water column is 20 cm high. If the density of the oil is 800 kg/m³, how high (in cm) is the oil column, measured from the same interface?", "answer": 25, "unit": "cm", "explain": "ρ1h1 = ρ2h2: 1000 × 20 = 800 × h, so h = 25 cm." },
  { "type": "mc", "q": "Why is the mercury column of a barometer about 760 mm high, while a column of water would be over 10 m high?", "options": ["Because mercury is much denser than water (about 13.6 times)", "Because mercury is colder", "Because mercury is not affected by gravity"], "answer": 0, "explain": "The column must have a weight per unit area equal to atmospheric pressure: ρ g h = constant. With ρ 13.6 times greater, h is 13.6 times smaller." },
  { "type": "tf", "q": "A diver going down from 10 m to 30 m in sea water experiences an increase in total pressure of about 2 atm.", "answer": true, "explain": "Every 10 m of water adds about 1 atm: 20 m more corresponds to about 2 atm more." },
  { "type": "mc", "q": "A boat loaded with goods sits lower in the water. What happens to the Archimedes upthrust?", "options": ["It decreases", "It increases, until it equals the new weight", "It stays the same and the boat sinks"], "answer": 1, "explain": "Sitting lower, the boat displaces more water: the upthrust grows until it equals the total weight and equilibrium is restored." }
 ]
});

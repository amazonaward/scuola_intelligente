QBANK("en", "l2-fis-temperatura-calore", {
  f: [
    { type: "mc", q: "At what temperature does water boil at normal atmospheric pressure?", options: ["50 °C", "100 °C", "212 °C"], answer: 1, explain: "At 1 atm water boils at 100 °C." },
    { type: "tf", q: "Heat flows spontaneously from the colder body to the hotter one.", answer: false, explain: "It flows from the hotter to the colder one, until thermal equilibrium." },
    { type: "text", q: "What is the temperature of −273.15 °C called?", answer: ["absolute zero", "the absolute zero", "0 k"], explain: "It is absolute zero, 0 K." },
    { type: "mc", q: "Which material is a good thermal insulator?", options: ["Copper", "Aluminium", "Polystyrene"], answer: 2, explain: "Polystyrene contains still air and conducts very little." },
    { type: "num", q: "Convert 20 °C into kelvin (use 273).", answer: 293, tol: 0.5, unit: "K", explain: "20 + 273 = 293 K." }
  ],
  m: [
    { type: "num", q: "How much heat is needed to warm 3 kg of water by 5 K? (c = 4186 J/(kg·K))", answer: 62790, tol: 100, unit: "J", explain: "Q = 3 · 4186 · 5 = 62 790 J." },
    { type: "mc", q: "A radiator heats a room mainly by...", options: ["Conduction", "Convection", "Melting"], answer: 1, explain: "Warm air rises and cold air sinks: convection currents." },
    { type: "num", q: "A 5 m bar with λ = 10·10⁻⁶ K⁻¹ is heated by 40 K. How much does it lengthen, in mm?", answer: 2, tol: 0.05, unit: "mm", explain: "ΔL = 10·10⁻⁶ · 5 · 40 = 2·10⁻³ m." },
    { type: "tf", q: "If two bodies are in contact and have the same temperature, there is no net exchange of heat.", answer: true, explain: "That is thermal equilibrium." },
    { type: "num", q: "You mix 100 g of water at 60 °C with 100 g of water at 20 °C. What is the final temperature?", answer: 40, tol: 0.5, unit: "°C", explain: "Equal masses: the average of the two temperatures." }
  ],
  d: [
    { type: "num", q: "Convert 95 °F into degrees Celsius (round to a whole number).", answer: 35, tol: 0.5, unit: "°C", explain: "(95 − 32)/1.8 = 35 °C." },
    { type: "num", q: "A 2 kg block of aluminium (c = 900 J/(kg·K)) gives out 36 000 J. By how many kelvin does it cool?", answer: 20, tol: 0.2, unit: "K", explain: "ΔT = Q/(m·c) = 36000/(2·900) = 20 K." },
    { type: "num", q: "How much energy is needed to evaporate 100 g of water already at 100 °C (L = 2.26·10⁶ J/kg)?", answer: 226000, tol: 500, unit: "J", explain: "Q = 0.1 · 2.26·10⁶ = 2.26·10⁵ J." },
    { type: "mc", q: "Why does a pond freeze starting from the surface?", options: ["The bottom is warmer and less dense", "Water is densest at about 4 °C, so colder water rises", "Ice is heavier than water", "Because of radiation from the Sun"], answer: 1, explain: "When water cools below 4 °C it expands and becomes less dense: it rises to the surface and freezes." },
    { type: "tf", q: "A vacuum flask with an evacuated gap between its walls hinders conduction and convection.", answer: true, explain: "With no matter between the walls there is no conduction or convection; the reflective surfaces reduce radiation." }
  ]
});

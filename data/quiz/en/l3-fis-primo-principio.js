QBANK("en", "l3-fis-primo-principio", {
  f: [
    { type: "mc", q: "What does the first law of thermodynamics state?", options: ["Heat flows from hot to cold", "Energy is conserved (ΔU = Q − W)", "Entropy always increases", "Temperature cannot fall below 0 K"], answer: 1, explain: "It is the conservation of energy for thermodynamic systems." },
    { type: "num", q: "A gas receives 100 J of heat and does no work. By how much does U increase?", answer: 100, tol: 0, unit: "J", explain: "ΔU = Q − W = 100 − 0 = 100 J." },
    { type: "tf", q: "The work done by a gas expanding at constant pressure is W = p·ΔV.", answer: true, explain: "It is the area of the rectangle under the isobaric line on the (V, p) diagram." },
    { type: "mc", q: "In the mechanical equivalent of heat, how many joules is 1 cal?", options: ["0.24 J", "1 J", "4.186 J", "100 J"], answer: 2, explain: "1 cal = 4.186 J (Joule)." },
    { type: "mc", q: "In which process is the volume constant?", options: ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"], answer: 2, explain: "Isochoric = at constant volume." }
  ],
  m: [
    { type: "num", q: "A gas at 2·10⁵ Pa expands from 3 L to 8 L. How much work does it do?", answer: 1000, tol: 0, unit: "J", explain: "W = 2·10⁵ × 5·10⁻³ = 1000 J." },
    { type: "num", q: "A system gives out 50 J of heat and 120 J of work is done on it (W = −120 J). What is ΔU?", answer: 70, tol: 0, unit: "J", explain: "ΔU = Q − W = −50 − (−120) = +70 J." },
    { type: "tf", q: "In an isothermal process of an ideal gas the change in internal energy is zero.", answer: true, explain: "U depends only on T." },
    { type: "num", q: "How much heat is needed to heat 1 mol of diatomic gas (C_V = 5/2 R, R = 8.31) by 10 K at constant volume?", answer: 208, tol: 1, unit: "J", explain: "Q = n·(5/2)R·ΔT = 2.5 × 8.31 × 10 ≈ 208 J." },
    { type: "mc", q: "A perpetual motion machine of the first kind claims to:", options: ["Produce work without any energy being supplied", "Convert all heat into work", "Reach absolute zero", "Make heat flow from cold to hot"], answer: 0, explain: "It would violate the first law, that is, the conservation of energy." }
  ],
  d: [
    { type: "num", q: "One mole of ideal gas expands isothermally at 300 K, doubling its volume. How much work does it do? (R = 8.31; ln 2 = 0.693)", answer: 1728, tol: 5, unit: "J", explain: "W = nRT·ln(2) = 8.31 × 300 × 0.693 ≈ 1728 J." },
    { type: "num", q: "A monatomic gas (n = 1 mol, R = 8.31) expands adiabatically, doing 623 J of work. By how much does its temperature change (in K)?", answer: -50, tol: 1, unit: "K", explain: "ΔU = −W = −623 J = (3/2)·R·ΔT ⟹ ΔT = −623/12.47 ≈ −50 K." },
    { type: "num", q: "In a cycle the gas absorbs 1500 J and gives out 900 J to the surroundings. How much net work does it do?", answer: 600, tol: 0, unit: "J", explain: "ΔU = 0 ⟹ W = Q_net = 1500 − 900 = 600 J." },
    { type: "tf", q: "To heat a gas by a given ΔT, more heat is needed at constant pressure than at constant volume.", answer: true, explain: "C_P = C_V + R: at constant pressure part of the heat goes into the work of expansion." },
    { type: "mc", q: "On the (V, p) diagram, a cycle traversed clockwise has a net work that is:", options: ["Negative", "Zero", "Positive and equal to the enclosed area", "Equal to the heat given out"], answer: 2, explain: "Clockwise, the gas does more work in expansion than is done on it in compression." }
  ]
});

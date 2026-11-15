QBANK("ro", "m2-tec-energia", {
 "f": [
  {
   "type": "mc",
   "q": "Ce unitate de măsură se folosește de obicei pentru energia electrică consumată acasă?",
   "options": [
    "Kilowatt-ora (kWh)",
    "Metrul (m)",
    "Gramul (g)"
   ],
   "answer": 0,
   "explain": "Pe factură, energia electrică se măsoară în kilowați-oră (kWh)."
  },
  {
   "type": "tf",
   "q": "Petrolul și gazele naturale sunt combustibili fosili.",
   "answer": true,
   "explain": "S-au format în milioane de ani din rămășițele ființelor vii și se epuizează."
  },
  {
   "type": "mc",
   "q": "Ce face să se rotească palele unei centrale eoliene?",
   "options": [
    "Aburul",
    "Apa dintr-un baraj",
    "Vântul"
   ],
   "answer": 2,
   "explain": "În aerogenerator, palele împinse de vânt rotesc alternatorul."
  },
  {
   "type": "num",
   "q": "Câți herți are curentul alternativ din prizele de acasă din Italia?",
   "answer": 50,
   "tol": 0,
   "unit": "Hz",
   "explain": "Rețeaua electrică italiană are frecvența de 50 herți (și 230 de volți)."
  },
  {
   "type": "order",
   "q": "Pune în ordine transformările de energie dintr-o centrală hidroelectrică.",
   "items": [
    "Apa din lac (energie potențială)",
    "Apa care coboară (energie cinetică)",
    "Turbina și alternatorul",
    "Energie electrică"
   ],
   "explain": "Apa de sus are energie potențială, căzând are energie cinetică, iar turbina și alternatorul o transformă în electricitate."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un fier de călcat de 1,2 kW rămâne pornit 2,5 ore. Câți kWh consumă?",
   "answer": 3,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "Energia = putere × timp = 1,2 × 2,5 = 3 kWh."
  },
  {
   "type": "num",
   "q": "Un bec LED de 8 W stă aprins 5 ore pe zi timp de 30 de zile. Câți kWh consumă în total?",
   "answer": 1.2,
   "tol": 0.01,
   "unit": "kWh",
   "explain": "8 W = 0,008 kW; 0,008 × 5 × 30 = 1,2 kWh."
  },
  {
   "type": "mc",
   "q": "Ce lanț de transformări descrie o centrală eoliană?",
   "options": [
    "Cinetică a vântului → mecanică a rotorului → electrică",
    "Chimică → termică → mecanică → electrică",
    "Potențială a apei → cinetică → electrică"
   ],
   "answer": 0,
   "explain": "Vântul are energie cinetică, aceasta rotește rotorul, iar alternatorul produce energie electrică."
  },
  {
   "type": "text",
   "q": "Cum se numește aparatul care transformă curentul continuu al panourilor fotovoltaice în curent alternativ?",
   "answer": [
    "invertor",
    "invertorul",
    "un invertor"
   ],
   "explain": "Invertorul face curentul potrivit pentru rețea și pentru aparatele din casă."
  },
  {
   "type": "mc",
   "q": "De ce se construiesc centralele hidroelectrice la munte?",
   "options": [
    "E nevoie de o denivelare mare: cu cât apa cade de mai sus, cu atât are mai multă energie",
    "Pentru că la munte bate mereu vântul",
    "Pentru că sus este mai cald"
   ],
   "answer": 0,
   "explain": "Cu cât apa cade de mai sus, cu atât are mai multă energie: e nevoie de o denivelare mare."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "Un bec cu incandescență de 40 W și un LED de 5 W dau aceeași lumină. Dacă stau aprinse 4 ore pe zi timp de 30 de zile, iar 1 kWh costă 0,25 €, câți euro se economisesc cu LED-ul?",
   "answer": 1.05,
   "tol": 0.01,
   "unit": "€",
   "explain": "Diferența 35 W = 0,035 kW; 0,035 × 4 × 30 = 4,2 kWh; 4,2 × 0,25 = 1,05 €."
  },
  {
   "type": "tf",
   "q": "O centrală are randamentul de 40%: cele 60 din 100 care nu devin electricitate sunt energie care dispare în neant.",
   "answer": false,
   "explain": "Fals: energia nu se distruge; partea inutilă se transformă în căldură și se pierde."
  },
  {
   "type": "mc",
   "q": "Care dintre aceste afirmații este FALSĂ?",
   "options": [
    "Transformatorul ridică tensiunea pentru a reduce pierderile la transport",
    "Alternatorul transformă energia mecanică în energie electrică",
    "O centrală nucleară emite mult CO₂ în timpul funcționării",
    "Fotovoltaicul nu folosește turbine"
   ],
   "answer": 2,
   "explain": "Centrala nucleară nu emite CO₂ în funcționare, dar produce deșeuri radioactive: greșeala este să spui că emite mult CO₂."
  },
  {
   "type": "mc",
   "q": "Într-o regiune este mult soare la prânz, dar seara consumul de electricitate crește. Care soluție rezolvă cel mai bine problema?",
   "options": [
    "Folosirea sistemelor de stocare, precum bateriile sau centralele cu acumulare prin pompare",
    "Construirea mai multor piloni",
    "Creșterea tensiunii la 380 000 V"
   ],
   "answer": 0,
   "explain": "Soarele nu produce seara: energia în plus trebuie stocată cu baterii sau în centrale cu acumulare prin pompare."
  },
  {
   "type": "order",
   "q": "Pune în ordine drumul electricității de la centrală până la priza de acasă.",
   "items": [
    "Alternator",
    "Transformator care ridică tensiunea",
    "Linii electrice de înaltă tensiune",
    "Stație care coboară tensiunea",
    "Priza de acasă la 230 V"
   ],
   "explain": "Tensiunea este ridicată pentru transport și apoi coborâtă treptat până la 230 V."
  }
 ]
});

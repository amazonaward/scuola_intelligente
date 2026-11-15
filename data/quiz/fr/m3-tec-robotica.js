QBANK("fr", "m3-tec-robotica", {
 "f": [
  {
   "type": "mc",
   "q": "Quelle partie d'un robot joue le rôle de « cerveau » ?",
   "options": [
    "Le capteur",
    "Le contrôleur",
    "L'actionneur"
   ],
   "answer": 1,
   "explain": "Le contrôleur traite les données des capteurs et décide des ordres à donner aux actionneurs."
  },
  {
   "type": "tf",
   "q": "Un capteur infrarouge peut aider un robot à suivre une ligne noire au sol.",
   "answer": true,
   "explain": "Vrai : la ligne noire absorbe la lumière infrarouge, le sol clair la reflète."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la célèbre carte à microcontrôleur née à Ivrea et utilisée pour construire des robots ?",
   "answer": [
    "arduino",
    "carte arduino"
   ],
   "explain": "Arduino est né à Ivrea en 2005 et est utilisé dans le monde entier pour apprendre l'électronique et la robotique."
  },
  {
   "type": "mc",
   "q": "Quel capteur indique à un robot de combien un moteur a tourné ?",
   "options": [
    "Ultrasons",
    "Bouton de contact",
    "Codeur (encodeur)"
   ],
   "answer": 2,
   "explain": "Le codeur compte les tours ou fractions de tour : on sait ainsi de combien de centimètres le robot s'est déplacé."
  },
  {
   "type": "num",
   "q": "En quelle année l'écrivain Karel Čapek écrivit-il la pièce R.U.R., d'où vient le mot « robot » ?",
   "answer": 1920,
   "explain": "La pièce R.U.R. date de 1920 ; « robot » vient du tchèque robota, « travail forcé »."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Un moteur pas à pas fait 200 pas par tour. Combien de pas faut-il pour 2,5 tours ?",
   "answer": 500,
   "unit": "pas",
   "explain": "200 × 2,5 = 500 pas."
  },
  {
   "type": "num",
   "q": "Une roue a une circonférence de 20 cm. Si le codeur compte 15 tours, combien de centimètres le robot a-t-il parcourus ?",
   "answer": 300,
   "unit": "cm",
   "explain": "Chaque tour avance de 20 cm : 15 × 20 = 300 cm (3 m)."
  },
  {
   "type": "mc",
   "q": "Un thermostat (boucle fermée) a pour objectif 20 °C et le capteur mesure 17 °C. Que fait le contrôleur ?",
   "options": [
    "Éteint le chauffage",
    "Allume le chauffage",
    "Ne fait rien car le minuteur n'est pas écoulé"
   ],
   "answer": 1,
   "explain": "Le contrôleur compare la mesure (17 °C) à l'objectif (20 °C) et agit pour réduire l'écart."
  },
  {
   "type": "tf",
   "q": "L'automate programmable (PLC) est un ordinateur robuste utilisé dans les usines pour commander machines et tapis roulants.",
   "answer": true,
   "explain": "Vrai : l'automate programmable est le « cerveau » robuste des lignes de production."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre le travail d'une ligne automatique dans une usine automobile.",
   "items": [
    "Un capteur détecte la caisse sur le tapis",
    "L'automate arrête le tapis",
    "Les bras robotisés soudent",
    "Une caméra contrôle la qualité",
    "Le tapis repart"
   ],
   "explain": "Schéma : capteur ➜ contrôleur ➜ actionneurs (bras) ➜ contrôle qualité ➜ redémarrage."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Un robot s'oriente uniquement avec les codeurs de ses roues. Après un long trajet, sa position estimée devient fausse. Pourquoi ?",
   "options": [
    "Les roues peuvent patiner et de petites erreurs s'accumulent tour après tour",
    "Le codeur cesse de fonctionner après 10 mètres",
    "Le robot oublie qu'il a un contrôleur",
    "Les roues s'élargissent avec le temps"
   ],
   "answer": 0,
   "explain": "C'est pourquoi on ajoute d'autres capteurs (gyroscope, LiDAR, caméra) qui corrigent la position."
  },
  {
   "type": "num",
   "q": "Un moteur pas à pas de 200 pas par tour entraîne un bras via un réducteur 1:5 (le moteur fait 5 tours pour 1 tour du bras). Combien de pas faut-il pour un tour complet du bras ?",
   "answer": 1000,
   "unit": "pas",
   "explain": "Le moteur doit faire 5 tours : 5 × 200 = 1000 pas."
  },
  {
   "type": "mc",
   "q": "Un arroseur à minuteur arrose 10 minutes chaque jour, même quand il pleut. Comment le transformer en système en boucle fermée ?",
   "options": [
    "En allongeant la durée du minuteur",
    "En ajoutant un capteur d'humidité du sol qui active l'eau seulement sous un seuil",
    "En changeant la couleur des tuyaux",
    "En remplaçant le minuteur par un minuteur plus précis"
   ],
   "answer": 1,
   "explain": "La boucle fermée mesure le résultat (humidité) et le compare à l'objectif : on ne gaspille pas d'eau quand il pleut."
  },
  {
   "type": "tf",
   "q": "Ajouter plus de degrés de liberté à un bras robotique le rend toujours plus simple à commander.",
   "answer": false,
   "explain": "Faux : plus de mouvements indépendants rendent le bras plus polyvalent mais les calculs et la commande plus complexes."
  },
  {
   "type": "text",
   "q": "Comment s'appelle la valeur objectif que le contrôleur compare à la mesure du capteur dans un système en boucle fermée ?",
   "answer": [
    "consigne",
    "valeur de consigne",
    "set-point",
    "setpoint",
    "objectif"
   ],
   "explain": "C'est la consigne (set-point) : le contrôleur calcule l'écart entre consigne et mesure et le corrige."
  }
 ]
});

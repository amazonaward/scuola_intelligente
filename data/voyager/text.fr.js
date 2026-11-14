VOYAGER_TEXT({
  lang: 'fr',
  title: 'Le voyage des Voyager',
  intro: `<p>En 1977, la NASA a lancé deux sondes jumelles, <b>Voyager 1</b> et <b>Voyager 2</b>, pour visiter les planètes géantes du Système solaire. Elles devaient fonctionner cinq ans. Aujourd’hui, près d’un demi-siècle plus tard, elles sont toujours en vie et voyagent dans l’espace entre les étoiles, plus loin que n’importe quel autre objet construit par l’être humain.</p>
<p>Sur la carte, tu vois leurs vraies trajectoires, calculées à partir des positions des planètes. Touche un événement dans la frise chronologique et la carte saute à ce jour-là : tu peux suivre les sondes depuis le départ jusqu’à aujourd’hui.</p>`,
  probes: {
    v1: `<p><b>Voyager 1</b> est partie en second (5 septembre 1977) mais, sur une trajectoire plus rapide, elle a vite dépassé sa jumelle. Elle a visité Jupiter (1979) et Saturne (1980) puis, après son passage rapproché de Titan, sa route a été infléchie hors du plan des planètes, vers le nord. Depuis 2012, elle est dans l’espace interstellaire et c’est l’objet humain le plus lointain : elle file à environ 17 km par seconde (plus de 60 000 km/h).</p>
<p>Elle pèse environ 800 kg, possède une antenne de 3,7 m et produit son énergie avec des générateurs au plutonium.</p>`,
    v2: `<p><b>Voyager 2</b> est partie la première (20 août 1977) sur une route plus lente. C’est la seule sonde à avoir jamais visité <b>les quatre</b> planètes géantes : Jupiter (1979), Saturne (1981), Uranus (1986) et Neptune (1989). Depuis 2018, elle est elle aussi dans l’espace interstellaire et file à environ 15 km par seconde.</p>
<p>Elle pèse environ 800 kg, possède une antenne de 3,7 m et produit son énergie avec des générateurs au plutonium.</p>`
  },
  events: [
    { date: '1977-08-20', probe: 'v2', icon: '🚀', title: 'Voyager 2 décolle',
      html: `<p>Une fusée Titan-Centaur lance Voyager 2 depuis Cap Canaveral, en Floride. Bien qu’elle soit la « numéro 2 », elle part la première !</p>
<p>La mission est possible grâce à une chance rare : environ tous les 176 ans, Jupiter, Saturne, Uranus et Neptune sont disposées de façon à pouvoir être visitées l’une après l’autre en un seul voyage. Les scientifiques l’ont appelé le <b>Grand Tour</b>.</p>`,
      photo: 'voyager 2 launch' },
    { date: '1977-09-05', probe: 'v1', icon: '🚀', title: 'Voyager 1 décolle',
      html: `<p>Seize jours après sa jumelle, Voyager 1 décolle à son tour. Elle suit une route plus rapide et plus directe vers Jupiter et Saturne, et arrivera donc avant Voyager 2 près de ces deux planètes.</p>
<p>À bord, comme sur Voyager 2, se trouve un disque d’or avec les sons et les images de la Terre, prévu pour quiconque le retrouvera un jour.</p>`,
      photo: 'voyager 1 launch' },
    { date: '1977-09-18', probe: 'v1', icon: '🌍', title: 'La première photo de la Terre et de la Lune ensemble',
      html: `<p>À peine partie, Voyager 1 se retourne et prend une photo où la Terre et la Lune apparaissent sur la même image, à environ 11 millions de kilomètres. C’est la première fois qu’on voit notre planète et son satellite ensemble depuis l’espace.</p>`,
      photo: 'voyager 1 earth moon first image' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌋', title: 'Jupiter : des volcans sur Io !',
      html: `<p>Voyager 1 passe à environ 280 000 km de Jupiter. Quelques jours plus tard, une ingénieure de la NASA, Linda Morabito, remarque sur une photo d’Io un nuage au-dessus du bord de la lune : c’est l’éruption d’un volcan !</p>
<p>C’était la première fois qu’on découvrait des volcans actifs en dehors de la Terre. Io est la lune la plus volcanique du Système solaire : Jupiter la « presse » avec sa gravité et son intérieur chauffe.</p>`,
      photo: 'voyager io volcano' },
    { date: '1979-03-05', probe: 'v1', planet: 'jupiter', icon: '🌀', title: 'La Grande Tache rouge et un anneau caché',
      html: `<p>De près, la Grande Tache rouge se révèle être une gigantesque tempête qui tourne dans le sens inverse des aiguilles d’une montre, plus large que la Terre et observée depuis des siècles. Les photos montrent des tourbillons et des courants tout autour.</p>
<p>Voyager 1 découvre aussi que Jupiter possède un anneau mince et très faible, impossible à voir depuis la Terre, fait de poussière.</p>`,
      photo: 'voyager jupiter great red spot' },
    { date: '1979-07-09', probe: 'v2', planet: 'jupiter', icon: '🧊', title: 'Jupiter : la croûte fissurée d’Europe',
      html: `<p>Voyager 2 passe à environ 570 000 km de Jupiter et photographie ses lunes. Europe apparaît comme une boule de glace lisse, striée de longues lignes sombres, comme des fissures dans une coquille d’œuf, et avec très peu de cratères.</p>
<p>Peu de cratères signifient une surface jeune. Sous la glace, il pourrait y avoir un océan d’eau liquide : aujourd’hui, Europe est l’un des endroits les plus intéressants où chercher la vie.</p>`,
      photo: 'voyager europa jupiter' },
    { date: '1980-11-11', probe: 'v1', planet: 'saturn', icon: '🟠', title: 'Saturne : l’épaisse atmosphère de Titan',
      html: `<p>Voyager 1 passe près de Titan, la grande lune de Saturne, et découvre qu’elle a une atmosphère beaucoup plus dense que celle de la Terre, faite surtout d’azote, comme la nôtre. Une brume orange cache la surface.</p>
<p>Titan est la seule lune du Système solaire à avoir une atmosphère aussi épaisse. Les photos n’ont pas pu voir le sol : il a fallu d’autres missions pour le dévoiler.</p>`,
      photo: 'voyager titan atmosphere' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '🪐', title: 'Saturne : les anneaux sont pleins de détails',
      html: `<p>Voyager 1 passe à environ 125 000 km de Saturne et voit que les anneaux ne sont pas quelques cercles lisses, mais des milliers de fins anneaux, semblables aux sillons d’un disque. Dans l’anneau F, mince et éloigné, certains endroits paraissent entrelacés comme une tresse.</p>
<p>Elle découvre aussi deux petites lunes « bergères », Prométhée et Pandore, qui, par leur gravité, gardent l’anneau F en ordre, comme des chiens qui guident un troupeau.</p>`,
      photo: 'voyager saturn rings' },
    { date: '1980-11-12', probe: 'v1', planet: 'saturn', icon: '↗️', title: 'Voyager 1 quitte le plan des planètes',
      html: `<p>Le passage près de Titan avait été choisi exprès, mais il a un prix : la gravité de Titan et de Saturne infléchit la route de Voyager 1 vers le nord, hors du plan sur lequel tournent les planètes.</p>
<p>À partir de ce moment, elle ne peut plus visiter Uranus et Neptune, mais son voyage continue vers l’espace entre les étoiles. Ce fut un choix : étudier Titan de près valait plus qu’un Grand Tour complet pour cette sonde.</p>` },
    { date: '1981-08-26', probe: 'v2', planet: 'saturn', icon: '🪐', title: 'Voyager 2 à Saturne',
      html: `<p>Voyager 2 passe à Saturne environ neuf mois après sa jumelle, avec une autre vue des anneaux et des lunes. Elle photographie des structures sombres et changeantes dans les anneaux, et étudie des lunes comme Encelade et Téthys.</p>
<p>Après le passage, la plateforme des caméras se bloque pendant un moment ; les ingénieurs la remettent en marche depuis la Terre et la sonde peut continuer vers Uranus grâce à l’élan gravitationnel de Saturne.</p>`,
      photo: 'voyager 2 saturn' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🔵', title: 'Uranus : dix nouvelles lunes et Miranda',
      html: `<p>Voyager 2 est la première, et jusqu’ici la seule, sonde à visiter Uranus. Elle passe à environ 81 000 km des nuages et découvre dix nouvelles petites lunes.</p>
<p>La lune Miranda ressemble à une mosaïque faite de morceaux qui n’ont rien à voir entre eux : falaises très hautes, sillons et plaines, comme si elle avait été brisée puis remontée de travers. Sur Miranda, il y a une falaise énorme, haute d’environ 20 km.</p>`,
      photo: 'voyager miranda' },
    { date: '1986-01-24', probe: 'v2', planet: 'uranus', icon: '🧲', title: 'Uranus : un champ magnétique de travers et des anneaux',
      html: `<p>Uranus est une planète « couchée » sur le côté. Voyager 2 découvre que son champ magnétique est très incliné, d’environ 60°, par rapport à l’axe de rotation et qu’il ne passe même pas par le centre de la planète.</p>
<p>La sonde étudie aussi les anneaux, sombres et fins, et en trouve de nouveaux. La planète elle-même paraît bleu-vert et presque sans nuages visibles.</p>`,
      photo: 'voyager uranus' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌀', title: 'Neptune : la Grande Tache sombre',
      html: `<p>Voyager 2 arrive à Neptune après 12 ans de voyage et passe à environ 4 900 km du pôle nord. Sur la planète bleue, elle voit une tempête ovale aussi grande que la Terre, la <b>Grande Tache sombre</b>.</p>
<p>Elle mesure aussi les vents les plus rapides du Système solaire, environ 2 000 km/h, bien que Neptune soit si loin du Soleil et en reçoive très peu de chaleur. Elle découvre en outre de nouvelles lunes et des anneaux en forme d’arcs.</p>`,
      photo: 'voyager neptune great dark spot' },
    { date: '1989-08-25', probe: 'v2', planet: 'neptune', icon: '🌫️', title: 'Triton : des geysers d’azote',
      html: `<p>Quelques heures après Neptune, Voyager 2 frôle la lune Triton, à environ 40 000 km. C’est l’un des endroits les plus froids jamais visités : environ −235 °C.</p>
<p>Les photos montrent de petits nuages sombres qui s’élèvent du sol : ce sont des geysers d’azote, qui jaillissent de la glace. Triton tourne à l’envers par rapport à Neptune : c’est peut-être un objet capturé de la ceinture de Kuiper. Voyager 2 est toujours la seule sonde à avoir visité Uranus et Neptune.</p>`,
      photo: 'voyager triton' },
    { date: '1990-02-14', probe: 'v1', icon: '🖼️', title: 'Le portrait de famille',
      html: `<p>Alors qu’elle quitte le Système solaire, Voyager 1 se retourne et prend 60 photos où l’on voit six planètes : Vénus, la Terre, Jupiter, Saturne, Uranus et Neptune. Mercure était trop près du Soleil, Mars dans son éblouissement, Pluton trop petite et trop sombre.</p>
<p>C’est le « portrait de famille » du Système solaire, vu de l’extérieur pour la première et jusqu’ici l’unique fois.</p>`,
      photo: 'voyager family portrait' },
    { date: '1990-02-14', probe: 'v1', icon: '🔵', title: 'Le Pâle Point bleu',
      html: `<p>Sur l’une de ces photos, prise à environ six milliards de kilomètres, la Terre est un point presque invisible dans un rayon de lumière. L’idée de la prendre venait de l’astronome Carl Sagan.</p>
<p>Sagan en a tiré une réflexion célèbre : toute l’histoire humaine, chaque personne, chaque guerre et chaque joie, s’est déroulée sur ce minuscule grain de poussière. Pour lui, c’était une raison de plus de prendre soin les uns des autres et de notre maison.</p>`,
      photo: 'pale blue dot' },
    { date: '1990-02-14', probe: 'v1', icon: '📷', title: 'Les caméras sont éteintes',
      html: `<p>Après le portrait de famille, les caméras de Voyager 1 sont éteintes pour toujours. Il n’y avait plus rien de proche à photographier, et les éteindre économisait de l’énergie et de la mémoire pour les instruments qui mesurent l’espace autour de la sonde.</p>
<p>Depuis, les Voyager n’envoient plus de photos, mais continuent à mesurer les champs magnétiques, les particules et les ondes.</p>` },
    { date: '1998-02-17', probe: 'v1', icon: '🏁', title: 'Voyager 1 est l’objet humain le plus lointain',
      html: `<p>Voyager 1 dépasse Pioneer 10, une sonde lancée avant elle, à environ 70 fois la distance entre la Terre et le Soleil. Depuis ce jour, c’est l’objet construit par l’être humain le plus éloigné de la Terre, et chaque jour son avance augmente.</p>` },
    { date: '2004-12-16', probe: 'v1', icon: '💨', title: 'Voyager 1 traverse le choc terminal',
      html: `<p>À environ 94 fois la distance Terre-Soleil, le vent solaire, le flux de particules qui sort du Soleil, ralentit d’un coup, comme l’eau quand elle frappe le fond d’un évier. Cette zone s’appelle le <b>choc terminal</b> (termination shock).</p>
<p>Voyager 1 est la première sonde à y entrer : elle découvre que la bulle du Soleil est plus aplatie que prévu.</p>` },
    { date: '2007-08-30', probe: 'v2', icon: '💨', title: 'Voyager 2 traverse aussi le choc terminal',
      html: `<p>Voyager 2 traverse la même frontière, à une distance plus petite du Soleil. Les deux mesures ensemble montrent que la bulle n’est pas symétrique : au sud, elle est plus « comprimée » qu’au nord.</p>` },
    { date: '2012-08-25', probe: 'v1', icon: '🌌', title: 'Voyager 1 entre dans l’espace interstellaire',
      html: `<p>Le 25 août 2012, les instruments de Voyager 1 mesurent un changement soudain : les particules du vent solaire disparaissent presque, tandis que celles qui viennent de l’espace entre les étoiles augmentent.</p>
<p>Les scientifiques ont mis quelques mois à le comprendre, mais c’était arrivé : Voyager 1 avait traversé l’<b>héliopause</b> et était devenue le premier objet humain dans l’espace interstellaire.</p>` },
    { date: '2017-11-28', probe: 'v1', icon: '🔥', title: 'Les propulseurs se rallument après 37 ans',
      html: `<p>Les petites fusées qui servent à orienter Voyager 1 vers la Terre perdaient en efficacité. Les ingénieurs ont alors essayé celles de secours, qui n’étaient plus utilisées depuis 1980, quand la sonde était passée près de Saturne.</p>
<p>Après 37 ans, les propulseurs ont fonctionné du premier coup, avec des impulsions de seulement 10 millisecondes. La mission a pu être prolongée de quelques années.</p>` },
    { date: '2018-11-05', probe: 'v2', icon: '🌌', title: 'Voyager 2 sort aussi de l’héliosphère',
      html: `<p>Voyager 2 traverse l’héliopause et atteint l’espace interstellaire. Cette fois, contrairement à sa jumelle, elle a encore en état de marche l’instrument qui mesure le plasma, si bien que les scientifiques peuvent voir directement le passage.</p>
<p>Les deux sondes, dans des directions différentes, montrent que la frontière est stable et bien définie.</p>` },
    { date: '2023-11-14', probe: 'v1', icon: '⚠️', title: 'Voyager 1 commence à envoyer des données incompréhensibles',
      html: `<p>Vers la mi-novembre 2023, Voyager 1 continue de recevoir les commandes mais les données qu’elle envoie sont une suite confuse de zéros et de uns. Personne ne parvenait à comprendre l’état de santé de la sonde.</p>
<p>Le problème venait de l’un des ordinateurs de bord, le système de données de vol, et plus précisément d’une puce de mémoire abîmée après 46 ans dans l’espace.</p>` },
    { date: '2024-04-20', probe: 'v1', icon: '🛠️', title: 'La réparation à 24 milliards de kilomètres',
      html: `<p>Les ingénieurs ne pouvaient pas réparer la puce, alors ils ont déplacé le programme vers d’autres zones libres de la mémoire, en le découpant en parties plus petites. À chaque étape, il fallait attendre des heures pour que les signaux fassent l’aller-retour.</p>
<p>En avril 2024, Voyager 1 a recommencé à envoyer des données utiles sur son état, et peu après aussi les données scientifiques de ses instruments.</p>` },
    { date: '2025-03-01', probe: 'both', icon: '🔌', title: 'On éteint des instruments pour économiser l’énergie',
      html: `<p>Les générateurs au plutonium perdent environ 4 watts par an. Pour ne pas se retrouver sans courant, les ingénieurs éteignent l’un après l’autre les instruments les moins essentiels et les chauffages.</p>
<p>Il en reste quelques-uns allumés sur chaque sonde. Si tout va bien, les Voyager pourront encore nous parler jusqu’aux années 2030.</p>` },
    { date: '2026-11-15', probe: 'v1', icon: '⏱️', title: 'Un jour-lumière de la maison',
      html: `<p>En ce moment, Voyager 1 atteint la distance d’environ un jour-lumière : la lumière, et avec elle les signaux radio, met 24 heures pour arriver jusque-là. Un message et sa réponse demandent donc presque deux jours.</p>
<p>Voyager 2 est encore plus proche, à environ 20 heures-lumière. Le voyage continuera pour toujours, mais la sonde ne reviendra jamais.</p>` }
  ],
  sections: [
    { icon: '📀', title: 'Le Disque d’or',
      html: `<p>Sur chaque Voyager se trouve un disque de cuivre plaqué or, comme un message dans une bouteille. Il contient :</p>
<ul>
<li><b>des salutations en 55 langues</b>, du sumérien ancien aux langues modernes, plus un salut de l’ONU et un message du président américain Carter ;</li>
<li><b>des sons de la Terre</b> : vagues, vent, tonnerre, animaux, chant des baleines, un baiser, le rire d’un enfant ;</li>
<li><b>environ 90 minutes de musique</b> du monde entier, de Bach et Beethoven aux chants traditionnels et au rock ;</li>
<li><b>115 images</b> codées en signaux, qui montrent la Terre, les gens, les maisons, la nourriture.</li>
</ul>
<p>Sur la pochette, il y a des instructions dessinées pour faire jouer le disque et une carte de la position du Soleil, faite avec les fréquences de 14 <b>pulsars</b>, des étoiles qui clignotent à des rythmes très réguliers. Plus que pour des extraterrestres, c’est un message pour nous-mêmes.</p>` },
    { icon: '📡', title: 'Comment font-elles pour nous parler encore',
      html: `<p>Les Voyager n’utilisent pas de panneaux solaires, parce que le Soleil est trop loin. Elles ont à la place des générateurs au <b>plutonium</b> (RTG) qui transforment en électricité la chaleur du plutonium qui se désintègre lentement. Au début, ils donnaient environ 470 watts ; aujourd’hui beaucoup moins, et ils baissent d’environ 4 watts par an.</p>
<p>L’émetteur de bord n’utilise qu’environ <b>23 watts</b>, comme l’ampoule d’un frigo. Quand le signal arrive sur Terre, il est très faible, des milliards de fois plus faible que celui d’une montre numérique. Pour le capter, il faut les grandes antennes de 70 mètres du <b>Deep Space Network</b>, à Goldstone (Californie), Madrid et Canberra, de sorte qu’au moins une soit toujours tournée vers les sondes pendant que la Terre tourne.</p>
<p>Les sondes répondent avec une antenne parabolique de 3,7 m, pointée exactement vers la Terre. Le débit de transmission est d’environ 160 bits par seconde : des milliers de fois plus lent qu’une vieille connexion téléphonique.</p>` },
    { icon: '🎯', title: 'Les frondes gravitationnelles',
      html: `<p>Une fusée ne suffisait pas pour aller jusqu’à Neptune. Les Voyager ont utilisé la <b>gravité des planètes</b> : en passant près de Jupiter, une sonde est attirée, courbe sa trajectoire et repart avec plus de vitesse, en « volant » un peu du mouvement de la planète, qui est si lourde qu’elle ne s’en aperçoit pas.</p>
<p>Chaque planète était une fronde vers la suivante. C’est pour cela que le Grand Tour a été possible avec une sonde d’environ 800 kg et peu de carburant : chacune a utilisé Jupiter, Saturne et ainsi de suite pour changer de route et de vitesse sans presque rien consommer.</p>` },
    { icon: '🫧', title: 'Qu’est-ce que l’héliosphère',
      html: `<p>Le Soleil émet en permanence le <b>vent solaire</b>, un flux de particules chargées qui s’écoule à des centaines de km par seconde et qui gonfle une gigantesque bulle autour du Système solaire : l’<b>héliosphère</b>.</p>
<p>Plus loin, le vent ralentit au choc terminal, puis s’accumule dans l’héliosphère externe, et enfin rencontre le gaz qui se trouve entre les étoiles. La limite, là où le vent solaire ne pousse plus, s’appelle l’<b>héliopause</b>. Au-delà de cette limite, c’est l’espace interstellaire.</p>
<p>Attention : les Voyager ont quitté l’héliosphère, mais pas le Système solaire ! Le nuage d’Oort, une énorme coquille de comètes, commence à environ 300 ans d’elles et ne finira que dans des dizaines de milliers d’années.</p>` },
    { icon: '📏', title: 'À quelle distance sont-elles',
      html: `<p>Voyager 1 est à plus de 25 milliards de kilomètres de la Terre, soit environ 170 fois la distance Terre-Soleil. Si la Terre était à un pas du Soleil, Voyager 1 serait à presque 170 pas.</p>
<p>La lumière met environ 8 minutes pour arriver du Soleil, près de 5 heures et demie jusqu’à Neptune et environ un jour jusqu’à Voyager 1. Un avion de ligne, à 900 km/h, mettrait plus de 3 000 ans.</p>
<p>Et pourtant, dans l’espace interstellaire, ces distances sont petites : l’étoile la plus proche, Proxima du Centaure, est à 4,2 années-lumière, soit plus de 1 500 fois plus loin que Voyager 1 aujourd’hui.</p>` },
    { icon: '♾️', title: 'Et ensuite ?',
      html: `<p>Tôt ou tard, les Voyager cesseront de parler, quand l’énergie ne suffira plus. Mais elles continueront à voyager en silence pendant des milliards d’années, sans que rien ne les arrête.</p>
<p>Dans environ 40 000 ans, Voyager 1 passera à environ 1,6 année-lumière de l’étoile <b>Gliese 445</b>, tandis que Voyager 2 passera à environ 1,7 année-lumière de <b>Ross 248</b>. Ce ne sont pas des rencontres rapprochées : ce sont seulement les points les plus proches de leur long voyage. Avec le disque d’or à bord, elles resteront un témoignage de ce que nous sommes.</p>` }
  ],
  quiz: [
    { type: 'mc', q: 'Pourquoi le « Grand Tour » a-t-il été possible en 1977 ?', options: ['Parce que les fusées étaient beaucoup plus puissantes', 'Parce que les quatre planètes géantes étaient disposées de façon favorable, ce qui arrive environ tous les 176 ans', 'Parce que les planètes étaient très proches de la Terre'], answer: 1, explain: 'Jupiter, Saturne, Uranus et Neptune étaient alignées de façon à pouvoir être visitées l’une après l’autre, en utilisant la gravité de chacune pour atteindre la suivante.' },
    { type: 'tf', q: 'Voyager 2 est partie avant Voyager 1.', answer: true, explain: 'Voyager 2 est partie le 20 août 1977, Voyager 1 le 5 septembre. Mais Voyager 1 a pris une route plus rapide et a atteint Jupiter et Saturne la première.' },
    { type: 'mc', q: 'Quelle découverte Voyager 1 a-t-elle faite sur la lune Io ?', options: ['Elle a un océan d’eau sous la glace', 'Elle a des volcans actifs', 'Elle a une atmosphère semblable à celle de la Terre'], answer: 1, explain: 'Ce fut la première découverte de volcans actifs en dehors de la Terre.' },
    { type: 'mc', q: 'Quelle lune de Jupiter a montré une surface de glace fissurée et avec peu de cratères ?', options: ['Europe', 'Io', 'Triton'], answer: 0, explain: 'Europe, photographiée par Voyager 2 en 1979, pourrait avoir un océan sous la glace.' },
    { type: 'tf', q: 'Voyager 1 a aussi visité Uranus et Neptune.', answer: false, explain: 'Après Titan, sa route a été infléchie hors du plan des planètes. Uranus et Neptune n’ont été visitées que par Voyager 2.' },
    { type: 'num', q: 'À peu près à quelle vitesse soufflent les vents sur Neptune découverts par Voyager 2 ? (km/h)', answer: 2000, tol: 300, unit: 'km/h', explain: 'Les vents de Neptune sont les plus rapides du Système solaire, environ 2 000 km/h.' },
    { type: 'mc', q: 'Que montre la photo du « Pâle Point bleu » ?', options: ['La Terre vue d’environ six milliards de kilomètres', 'Neptune vue de près', 'Le Soleil depuis la surface de Jupiter'], answer: 0, explain: 'La Terre est un minuscule point dans un rayon de lumière. Carl Sagan en a tiré une célèbre réflexion sur notre petitesse et sur la valeur de notre maison.' },
    { type: 'order', q: 'Mets ces événements dans l’ordre', items: ['Lancement des Voyager (1977)', 'Voyager 2 à Uranus (1986)', 'Pâle Point bleu (1990)', 'Voyager 1 dans l’espace interstellaire (2012)'], explain: 'Du lancement (1977) à Uranus (1986), puis la photo de la Terre (1990), enfin la sortie de l’héliosphère (2012).' },
    { type: 'mc', q: 'Comment les Voyager produisent-elles de l’énergie ?', options: ['Avec des panneaux solaires géants', 'Avec des générateurs au plutonium', 'Avec des batteries rechargeables'], answer: 1, explain: 'Les générateurs au plutonium (RTG) transforment la chaleur en électricité. Le Soleil est trop loin pour des panneaux solaires.' },
    { type: 'mc', q: 'Comment s’appelle le réseau de grandes antennes qui communique avec les Voyager ?', options: ['Deep Space Network', 'Hubble Network', 'Star Link'], answer: 0, explain: 'Le Deep Space Network a des antennes de 70 mètres à Goldstone, Madrid et Canberra.' },
    { type: 'tf', q: 'Le Disque d’or contient des salutations en 55 langues.', answer: true, explain: 'Il contient aussi des sons de la Terre, environ 90 minutes de musique et 115 images.' },
    { type: 'num', q: 'Dans combien d’années environ Voyager 1 passera-t-elle près de l’étoile Gliese 445 ? (ans)', answer: 40000, tol: 5000, unit: 'ans', explain: 'Dans environ 40 000 ans, elle passera à environ 1,6 année-lumière de l’étoile.' }
  ]
});

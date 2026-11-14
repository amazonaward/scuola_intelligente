BODY_TEXT({
  lang: "en",
  title: "The human body",
  intro: "<p>Your body is a team of <b>organs</b> that work together, day and night. Spin the model, pull the pieces apart, tap an organ and find out what it does, how it works and who it teams up with.</p>",
  systems: {
    pelle: { name: "The skin", intro: "<p>The skin is the biggest organ of the body: it wraps around you like a made-to-measure suit. It protects you from bumps, germs and sunlight, controls your temperature with sweat, and lets you feel heat, cold, pressure and pain thanks to millions of tiny sensors.</p>" },
    scheletro: { name: "The skeleton", intro: "<p>The skeleton is the body's framework: about 206 bones in an adult, joined together by joints, ligaments and tendons. It holds the body up, protects delicate organs, lets you move together with the muscles and, in the bone marrow, makes blood cells.</p>" },
    muscoli: { name: "The muscles", intro: "<p>There are more than 600 muscles in the body. They work by getting shorter (contracting) and then relaxing, and they pull on the bones through the tendons. We control some of them ourselves, while others, like the muscles of the stomach, work all by themselves. They also produce heat.</p>" },
    nervoso: { name: "The nervous system", intro: "<p>This is the body's command and communication network. The brain and the spinal cord make up the central system; the nerves are the \"cables\" that carry information from the body to the brain and orders from the brain to the muscles and organs. Signals travel as tiny electrical impulses.</p>" },
    sensi: { name: "The senses", intro: "<p>Sight, hearing, smell and taste (and touch, with the skin) are the body's windows on the world. Each sense organ turns light, sounds, smells or flavors into nerve signals, which the brain interprets.</p>" },
    circolatorio: { name: "The circulatory system", intro: "<p>The heart is the pump that pushes blood through a network of tubes, the blood vessels. Arteries carry blood away from the heart, veins bring it back. Blood delivers oxygen and nutrients to every cell and carries away waste, which is why it never stops.</p>" },
    respiratorio: { name: "The respiratory system", intro: "<p>Its job is to let oxygen in and carbon dioxide out. Air passes through the nose, windpipe and bronchi to the lungs, where oxygen enters the blood. The diaphragm, a muscle under the lungs, moves the air like a bellows.</p>" },
    digerente: { name: "The digestive system", intro: "<p>It turns food into substances small enough to pass into the blood. Food travels along a long tube about 8-9 meters long: mouth, esophagus, stomach, small intestine and large intestine. The liver, gallbladder and pancreas help with special juices.</p>" },
    urinario: { name: "The urinary system", intro: "<p>This is the body's filtering system. The kidneys clean the blood, remove waste and extra water and turn them into urine, which flows down into the bladder until it is time to go to the bathroom.</p>" },
    endocrino: { name: "The endocrine system", intro: "<p>The endocrine glands make hormones, chemical messengers that travel in the blood and tell the organs what to do: grow, use sugars, react to a scare. They act more slowly than nerves, but their effects last longer.</p>" },
    immunitario: { name: "The immune system", intro: "<p>This is the body's defense army. White blood cells and other cells recognize viruses, bacteria and other intruders and get rid of them. The spleen, thymus and lymph nodes are the bases where these cells are made, trained and keep watch.</p>" }
  },
  organs: {
    pelle: {
      name: "The skin", label: "Skin",
      what: "<p>The skin covers the whole body like a suit. It protects you from bumps, dirt and germs, keeps you cool when you sweat, and lets you feel heat, cold and a gentle touch.</p>",
      how: "<p>It is made of three layers: the <b>epidermis</b> (thin and waterproof, constantly renewing itself), the <b>dermis</b> (with vessels, nerves, sweat glands and hair roots) and the <b>hypodermis</b> (fat that insulates and cushions). In an adult it measures about 1.8 m² and weighs 3-4 kg. The cells of the epidermis are renewed about every 4 weeks. The pigment <b>melanin</b> filters the sun's UV rays. To cool the body, the vessels widen and sweat evaporates; in the cold, the vessels get narrower.</p>",
      links: [
        { to: "nervi", text: "Nerve endings in the skin send signals of touch, temperature and pain to the brain through the nerves." },
        { to: "vene", text: "Blood flowing in the vessels close to the surface gives off extra heat and helps control temperature." },
        { to: "muscoli", text: "Under the skin, muscles produce heat; when you are cold, the tiny muscles of your hairs give you goosebumps." }
      ],
      problems: [
        { title: "Sunburn", causes: "too much sun without protection, especially in the middle of the day.", effects: "the skin turns red, stings and then peels; UV rays can damage cells in the long term.", prevent: "sunscreen, a hat, a T-shirt, shade during the hot hours, drinking water." },
        { title: "Eczema and dry skin", causes: "sensitive skin, harsh soap, dry air, sometimes allergies.", effects: "itching, redness and cracked skin, which protects less well.", prevent: "wash with gentle cleansers, moisturize the skin; if the itching doesn't go away, talk to an adult or the doctor." }
      ],
      fact: "Every day we lose millions of skin cells: a lot of the dust in your home is made of them, too!"
    },
    cranio: {
      name: "The skull", label: "Skull",
      what: "<p>The skull is the box of bone that protects the brain. It also gives shape to the face and holds the eyes, ears and nose.</p>",
      how: "<p>It is made of 22 bones: 8 form the braincase and 14 form the face. Almost all of them are joined by rigid seams called <b>sutures</b>; the only movable joint is the <b>jaw</b> (mandible), which lets you chew and talk. In newborns the bones are not fused yet (the \"soft spots\"), so the head can pass through during birth and the brain has room to grow. A big hole at the base, the <b>foramen magnum</b>, lets the spinal cord pass through.</p>",
      links: [
        { to: "cervello", text: "It surrounds and protects the brain like a natural helmet." },
        { to: "colonna", text: "It rests on the spine, which holds it up and lets it move." },
        { to: "occhi", text: "The eye sockets are two hollows in the skull where the eyes stay safe." },
        { to: "midollo", text: "Through the hole at the base of the skull, the brain connects to the spinal cord." }
      ],
      problems: [
        { title: "Blows to the head", causes: "falls or crashes on a bike, in sports, in games.", effects: "the brain can get shaken, causing a headache or dizziness.", prevent: "a helmet on a bike, scooter and skis; if you bump your head, tell an adult right away and get checked." }
      ],
      fact: "The skull bones of an adult fit together like a jigsaw puzzle."
    },
    colonna: {
      name: "The spine", label: "Spine",
      what: "<p>It is the axis of the body: it keeps you upright, lets you bend and turn, and protects the spinal cord that runs inside it.</p>",
      how: "<p>It is made of 33-34 stacked <b>vertebrae</b>: 7 in the neck, 12 in the chest, 5 in the lower back, then the sacrum and the tailbone (fused vertebrae). Between one vertebra and the next there are <b>intervertebral discs</b>, elastic cushions that absorb shocks. Seen from the side it has four \"S\"-shaped curves that make it flexible and able to absorb impacts. The back muscles keep it straight. The spinal cord runs through the canal inside it.</p>",
      links: [
        { to: "midollo", text: "The vertebrae form a canal that protects the spinal cord." },
        { to: "costole", text: "The chest vertebrae connect to the ribs, and together they form the rib cage." },
        { to: "bacino", text: "At the bottom it rests on the pelvis, which supports the weight of the body." },
        { to: "muscoli", text: "The back muscles keep it straight and make it move." }
      ],
      problems: [
        { title: "Back pain and poor posture", causes: "sitting too much or slouching, heavy backpacks carried on one shoulder, too little exercise.", effects: "tight muscles and back pain; over time you can lose good posture.", prevent: "wear your backpack on both shoulders and don't overload it, take breaks while studying, play sports and active games; if the pain lasts, talk to an adult or the doctor." }
      ],
      fact: "In the morning you are a little taller than in the evening: during the night the discs between the vertebrae \"swell up\" again."
    },
    costole: {
      name: "The ribs", label: "Ribs",
      what: "<p>The ribs form a cage that protects the heart and lungs. They move a little when you breathe.</p>",
      how: "<p>There are 12 pairs of curved bones, attached at the back to the chest vertebrae. The first 7 pairs connect at the front to the <b>breastbone</b> (sternum) through cartilage; the other 5 are joined indirectly or are free. This structure, the <b>rib cage</b>, is rigid enough to protect and flexible enough to expand: when you breathe in, the muscles between the ribs lift them and the chest widens, letting air in. They also contain red marrow, which makes blood cells.</p>",
      links: [
        { to: "polmoni", text: "They form a cage around the lungs and move with every breath." },
        { to: "cuore", text: "They protect the heart from bumps." },
        { to: "colonna", text: "At the back they hook onto the chest vertebrae." },
        { to: "diaframma", text: "Together with the diaphragm they change the volume of the chest and let air in and out." }
      ],
      problems: [
        { title: "Bruised or cracked ribs", causes: "falls or hard blows to the chest.", effects: "pain, especially when breathing deeply or laughing.", prevent: "protective gear in contact sports and care in games; if your chest hurts after a blow, tell an adult." }
      ],
      fact: "Ribs heal by themselves: they are among the bones that heal best."
    },
    bacino: {
      name: "The pelvis", label: "Pelvis",
      what: "<p>The pelvis is the bowl-shaped bone above the legs. It supports the weight of the body and protects the organs in the lower belly.</p>",
      how: "<p>The pelvis is made of the two <b>hip bones</b> (each formed by the joining of the ilium, ischium and pubis), joined to each other at the front and to the <b>sacrum</b> at the back. It passes the weight of the trunk to the legs through the hip joints, where the head of the thigh bone turns inside a socket called the acetabulum. It protects the bladder and intestines. It is a sturdy bone that keeps growing until the end of the teenage years.</p>",
      links: [
        { to: "colonna", text: "The sacrum at the bottom of the spine is fused to the pelvis." },
        { to: "ossa_gambe", text: "The thigh bone fits into the hip bone, forming the joint that lets you walk." },
        { to: "vescica", text: "It forms a protective bowl for the bladder and part of the intestines." }
      ],
      problems: [
        { title: "Hip bruises", causes: "falls on your side, for example on skates or snow.", effects: "pain and a bruise, sometimes trouble walking for a few days.", prevent: "protective gear when you skate or ski, suitable shoes; if you can't put weight on your leg, tell an adult." }
      ],
      fact: "The pelvis is the body's center of gravity, where your weight balances."
    },
    ossa_braccia: {
      name: "The arm bones", label: "Arm bones",
      what: "<p>The shoulder, arm, forearm and hand are supported by bones that let you grab, throw and write.</p>",
      how: "<p>Each arm has: the <b>humerus</b> (upper arm), the <b>radius</b> and <b>ulna</b> (forearm), 8 wrist bones (carpals), 5 hand bones (metacarpals) and 14 finger bones (phalanges), for a total of 30 bones per limb, plus the shoulder blade and the collarbone. The shoulder is the most mobile joint in the body, but also one of the most prone to dislocation. The radius and ulna can cross over each other and let you turn the palm of your hand. The \"opposable\" thumb lets you grip with precision.</p>",
      links: [
        { to: "muscoli", text: "Muscles pull the bones with tendons: the biceps bends the elbow and the triceps straightens it." },
        { to: "nervi", text: "The nerves of the arm give commands and carry sensations from the fingers." },
        { to: "costole", text: "The collarbone and shoulder blade connect the arm to the chest." }
      ],
      problems: [
        { title: "Fractures", causes: "falls with your hands out in front, games and sports.", effects: "pain, swelling and trouble moving the arm; in a cast the bone heals in a few weeks.", prevent: "protective gear in sports, calcium and vitamin D in your diet, outdoor play; if you fall and it hurts a lot, tell an adult right away." }
      ],
      fact: "More than a quarter of all the bones in the body are found in the hands and wrists."
    },
    ossa_gambe: {
      name: "The leg bones", label: "Leg bones",
      what: "<p>The leg bones are long and strong: they hold up the body and let you walk, run and jump.</p>",
      how: "<p>Each leg has the <b>femur</b> (the longest and strongest bone in the body, about a quarter of your height), the <b>kneecap</b>, the <b>tibia</b> and the <b>fibula</b>, then 7 ankle bones (tarsals), 5 foot bones (metatarsals) and 14 toe bones (phalanges). The knee is a big joint reinforced by ligaments. The foot has an arch that works like a spring and absorbs shocks. The long bones grow from the <b>growth plates</b>, which close at the end of the teenage years.</p>",
      links: [
        { to: "bacino", text: "The femur turns in the socket of the hip bone." },
        { to: "muscoli", text: "The quadriceps and calf muscles pull the leg bones and let you walk and run." },
        { to: "cervelletto", text: "The cerebellum coordinates movement and balance when you walk and jump." }
      ],
      problems: [
        { title: "Sprains and fractures", causes: "jumps, slips, unsuitable shoes.", effects: "pain and swelling in the ankle or knee, trouble walking.", prevent: "warm up before sports, wear suitable shoes and train gradually; if it hurts to put your foot down, talk to an adult or the doctor." }
      ],
      fact: "The femur can bear many times your weight, and for the same weight it is stronger than concrete."
    },
    muscoli: {
      name: "The muscles", label: "Muscles",
      what: "<p>Muscles make you move: run, jump, smile, breathe. They are made of fibers that get shorter and then relax.</p>",
      how: "<p>There are over 600 muscles in the body. <b>Skeletal muscles</b> are voluntary and attach to the bones with <b>tendons</b>; <b>smooth muscles</b> (stomach, intestines, vessels) work on their own; <b>cardiac muscle</b> is found only in the heart. A muscle can only pull, which is why it works in pairs: for example the biceps and the triceps (agonist and antagonist). To contract, it uses energy obtained from sugars and oxygen; some of it becomes heat, which warms you up when you move. Exercise makes the fibers stronger.</p>",
      links: [
        { to: "nervi", text: "The nerves send the order to contract to the muscles." },
        { to: "ossa_braccia", text: "They pull the bones with tendons, and so they move joints like the elbow." },
        { to: "cuore", text: "The heart is a special muscle that works without stopping." },
        { to: "vene", text: "When muscles contract they squeeze the veins and help the blood return to the heart." }
      ],
      problems: [
        { title: "Cramps and pulled muscles", causes: "effort without warming up, too little water, tiredness.", effects: "the muscle tightens painfully or gets hurt; it needs rest.", prevent: "warm-up and stretching, drinking water, increasing effort a little at a time." }
      ],
      fact: "The strongest muscle for its size is the masseter, which moves the jaw."
    },
    diaframma: {
      name: "The diaphragm", label: "Diaphragm",
      what: "<p>It is a dome-shaped muscle under the lungs. It moves up and down and so lets air in and out when you breathe.</p>",
      how: "<p>The diaphragm separates the chest from the belly. When you breathe in it <b>contracts</b> and moves down, the chest widens and the pressure in the lungs drops: air comes in. When you breathe out it <b>relaxes</b> and moves back up, and air goes out. It works automatically, about 12-20 times a minute at rest, but we can control it (to sing or hold our breath). A hiccup is a sudden, involuntary contraction of the diaphragm, cut short by the closing of the glottis.</p>",
      links: [
        { to: "polmoni", text: "When it moves down the lungs fill with air, when it moves up it pushes the air out." },
        { to: "costole", text: "It works together with the muscles between the ribs to widen the chest." },
        { to: "stomaco", text: "Below it, in the belly, are the stomach and liver; it moves over them with every breath." },
        { to: "nervi", text: "The phrenic nerve sends it the orders to contract." }
      ],
      problems: [
        { title: "Hiccups", causes: "eating too fast, fizzy drinks, laughing.", effects: "the diaphragm contracts in jerks and makes the typical \"hic\"; it usually goes away by itself.", prevent: "eat slowly and chew well; if it doesn't go away for hours, talk to an adult." }
      ],
      fact: "The diaphragm works your whole life without ever resting, even while you sleep."
    },
    cervello: {
      name: "The brain", label: "Brain",
      what: "<p>It is the body's command center. It thinks, remembers, learns, feels emotions and directs everything you do, even while you sleep.</p>",
      how: "<p>It weighs about 1.3-1.4 kg and contains about 86 billion nerve cells, the <b>neurons</b>, linked by trillions of connections (synapses). The biggest part, the <b>cortex</b>, is divided into two hemispheres and into lobes: it processes sight, hearing, movement, language and thought. Inside there are areas that control emotions, memory, sleep, hunger and thirst. It uses about 20% of the body's energy even though it weighs only 2%. Neurons communicate with electrical signals and chemicals, the neurotransmitters.</p>",
      links: [
        { to: "midollo", text: "It sends and receives the body's signals through the spinal cord." },
        { to: "cervelletto", text: "The cerebellum, below it, makes movements precise and coordinated." },
        { to: "occhi", text: "The back lobe turns the signals from the eyes into the images you see." },
        { to: "cranio", text: "The skull protects it like a helmet." },
        { to: "tiroide", text: "Together with the pituitary, a small gland at its base, it controls many endocrine glands." }
      ],
      problems: [
        { title: "Headaches", causes: "tiredness, too little water, tension, too much screen time.", effects: "pain in the head and trouble concentrating.", prevent: "get enough sleep, drink water, take breaks from screens; if headaches are frequent, talk to an adult or the doctor." },
        { title: "Too little sleep", causes: "going to bed late, screens in the evening.", effects: "less attention and memory, more irritability; the brain can't \"tidy up\".", prevent: "regular bedtimes, no screens before sleep, a dark and quiet room." }
      ],
      fact: "The brain is about 75% water and has no pain receptors: headaches start around it."
    },
    cervelletto: {
      name: "The cerebellum", label: "Cerebellum",
      what: "<p>It is the part of the brain that helps you keep your balance and make precise movements, like riding a bike or catching a ball.</p>",
      how: "<p>It sits in the lower back part of the head. It weighs about a tenth of the brain but contains more than half of its neurons. It receives information from muscles, joints, the inner ear (balance) and the eyes, compares it with the movements the brain has ordered and corrects mistakes in real time. That is why, with practice, movements become smoother and more automatic: learning to ride a bike \"trains\" the cerebellum.</p>",
      links: [
        { to: "cervello", text: "It receives movement orders from the brain and fine-tunes them." },
        { to: "orecchie", text: "The inner ear tells it how the head is tilted, which is useful for balance." },
        { to: "muscoli", text: "It coordinates the muscles so they work together with precision." },
        { to: "midollo", text: "It exchanges information with the body through the spinal cord." }
      ],
      problems: [
        { title: "Dizziness and loss of balance", causes: "spinning around, tiredness, sometimes inner ear illnesses.", effects: "everything seems to spin and it is hard to stand.", prevent: "sit down until it passes; if it happens often, talk to an adult or the doctor." }
      ],
      fact: "After spinning around many times, you get dizzy because the fluid in your ear keeps moving."
    },
    midollo: {
      name: "The spinal cord", label: "Spinal cord",
      what: "<p>It is a long cord of nerves inside the spine. It carries messages between the brain and the rest of the body, like a highway.</p>",
      how: "<p>About 45 cm long, it runs down from the brain inside the canal of the vertebrae. 31 pairs of <b>spinal nerves</b> come out of it. It carries <b>sensory</b> signals (from the body to the brain) and <b>motor</b> signals (from the brain to the muscles). It can also handle <b>reflexes</b> on its own: when you touch something very hot, the signal reaches the spinal cord, which immediately orders the muscle to pull away, even before the brain \"feels\" the pain. It is protected by vertebrae, membranes and fluid.</p>",
      links: [
        { to: "cervello", text: "It is the link between the brain and the whole body." },
        { to: "nervi", text: "The spinal nerves that reach the arms, legs and organs come out of the spinal cord." },
        { to: "muscoli", text: "Orders to move travel from the brain to the spinal cord and then to the muscles." },
        { to: "colonna", text: "The spine surrounds and protects it." }
      ],
      problems: [
        { title: "Blows to the back", causes: "hard falls or accidents.", effects: "they can damage the spinal cord and cause loss of feeling or movement; that is why it is so well protected.", prevent: "seat belts, a helmet, care when diving into shallow water and in dangerous sports." }
      ],
      fact: "The knee-jerk reflex (the little kick when the doctor taps your knee) is handled by the spinal cord, without going through the brain."
    },
    nervi: {
      name: "The nerves", label: "Nerves",
      what: "<p>Nerves are thin \"cables\" that carry messages all over the body: they tell the brain what you feel and carry the order to move to the muscles.</p>",
      how: "<p>Each nerve is a bundle of nerve fibers (extensions of neurons, the <b>axons</b>). Many are wrapped in <b>myelin</b>, a fatty sheath that lets signals travel at over 100 m/s. There are <b>sensory</b>, <b>motor</b> and mixed nerves. The peripheral nervous system also includes the <b>autonomic</b> system, which controls heartbeat, digestion and breathing without you thinking about it. A signal passes from one neuron to the next through synapses, using chemicals.</p>",
      links: [
        { to: "midollo", text: "The spinal nerves start from the spinal cord and branch out through the body." },
        { to: "muscoli", text: "Motor nerves order the muscles to contract." },
        { to: "pelle", text: "Sensory nerves carry touch, heat, cold and pain from the skin to the brain." },
        { to: "cuore", text: "The autonomic system automatically controls the rhythm of the heart." }
      ],
      problems: [
        { title: "Pins and needles from a bad position", causes: "staying in one position for a long time, crossed legs or a leaning elbow.", effects: "a nerve gets squashed and you feel tingling or \"sleeping\" legs.", prevent: "change position often and move around; it usually passes in a few minutes." }
      ],
      fact: "The sciatic nerve, in the leg, is the longest nerve in the body."
    },
    occhi: {
      name: "The eyes", label: "Eyes",
      what: "<p>With your eyes you see shapes, colors and movement. They catch light and turn it into signals for the brain.</p>",
      how: "<p>Light enters through the <b>cornea</b>, passes through the pupil (which gets wider or narrower depending on the light, controlled by the iris) and the <b>lens</b>, which focuses the image onto the <b>retina</b>. There the <b>cones</b> (about 6 million, for colors) and the <b>rods</b> (about 120 million, for dim light) turn light into electrical signals. The <b>optic nerve</b> carries them to the brain, which flips the image the right way up (it is upside down on the retina) and interprets it. The eyelids and tears keep the eye clean.</p>",
      links: [
        { to: "cervello", text: "The optic nerve carries the signals to the brain, which turns them into images." },
        { to: "cranio", text: "The eye sockets of the skull protect the eyes." },
        { to: "muscoli", text: "Six tiny muscles per eye make them move in all directions." },
        { to: "naso", text: "Tears flow through small channels in the corners of the eyes down to the nose: that is why your nose runs when you cry." }
      ],
      problems: [
        { title: "Nearsightedness and tired eyes", causes: "too much time close up to screens and books, too little time outdoors, sometimes heredity too.", effects: "faraway objects look blurry, and the eyes get tired and hurt.", prevent: "take breaks from screens (look far away every 20 minutes), good light, play outdoors; if things look blurry, talk to an adult about an eye exam." }
      ],
      fact: "We blink about 15-20 times a minute to keep the eye moist."
    },
    orecchie: {
      name: "The ears", label: "Ears",
      what: "<p>The ears let you hear sounds. But that's not all: the secret of your balance is in the ear, too.</p>",
      how: "<p>The outer ear collects sounds and sends them down the canal to the <b>eardrum</b>, a membrane that vibrates. The vibration passes to three tiny bones (hammer, anvil and stirrup) in the middle ear, which make it stronger. In the inner ear the <b>cochlea</b>, a spiral tube filled with fluid, turns the vibrations into nerve signals sent to the brain. Next to it are the <b>semicircular canals</b>, which sense head movements and help with balance. The Eustachian tube links the ear to the throat and balances the pressure.</p>",
      links: [
        { to: "cervello", text: "The auditory nerve carries sounds to the brain, which recognizes them." },
        { to: "cervelletto", text: "Information from the semicircular canals helps the cerebellum keep your balance." },
        { to: "naso", text: "The Eustachian tube links the middle ear to the nose and throat; that is why a cold can give you an earache." }
      ],
      problems: [
        { title: "Ear infection", causes: "a cold that spreads to the middle ear.", effects: "earache and muffled hearing for a few days.", prevent: "blow your nose gently, wash your hands; if you feel pain in your ear, tell an adult." },
        { title: "Noise that is too loud", causes: "loud music, especially with headphones.", effects: "the cells of the inner ear can get damaged and hearing gets weaker.", prevent: "moderate volume, breaks from headphones, protect your ears in very noisy places." }
      ],
      fact: "The three little bones of the ear are the smallest bones in the body: the stirrup is only about 3 mm long."
    },
    naso: {
      name: "The nose", label: "Nose",
      what: "<p>The nose lets air in, warms and cleans it, and lets you smell odors.</p>",
      how: "<p>Air passes through the <b>nasal cavities</b>, lined with mucus and hairs that trap dust and germs, and is warmed and moistened before it reaches the lungs. At the top, a small patch of tissue with millions of <b>smell</b> cells recognizes the molecules of odors and sends signals to the brain. Taste and smell work together: with a blocked nose, flavors seem much weaker. The nose is connected to the ears and eyes through small channels.</p>",
      links: [
        { to: "trachea", text: "Clean, warm air flows from the nose down to the windpipe." },
        { to: "lingua", text: "Smell and taste work together: much of the flavor of food is really smell." },
        { to: "cervello", text: "The olfactory nerve carries odors to the brain, where they are also linked to emotions and memories." },
        { to: "occhi", text: "Tears pass from the eyes to the nose through the tear ducts." }
      ],
      problems: [
        { title: "Cold", causes: "viruses that spread through sneezes and unwashed hands.", effects: "a blocked or runny nose, and a weaker sense of smell and taste for a few days.", prevent: "wash your hands often, use disposable tissues, sneeze into your elbow, sleep and eat well." },
        { title: "Pollen allergy", causes: "the immune system reacts to pollen.", effects: "sneezing, an itchy nose and red eyes in spring.", prevent: "if it happens every year, talk to an adult and the doctor." }
      ],
      fact: "We can recognize thousands of different odors, and smell is the sense most closely tied to memories."
    },
    lingua: {
      name: "The tongue", label: "Tongue",
      what: "<p>The tongue tastes flavors, mixes the food while you chew and helps you talk.</p>",
      how: "<p>It is a muscle covered with small bumps, the <b>taste papillae</b>, with thousands of taste buds that recognize the basic flavors: sweet, salty, sour, bitter and umami. When you chew, it pushes the food between your teeth, mixes it with <b>saliva</b> (which contains an enzyme, amylase, that starts to digest starch) and forms the <b>bolus</b>, which it then pushes toward the throat to be swallowed. By moving very precisely, it also lets us pronounce words.</p>",
      links: [
        { to: "esofago", text: "It pushes the bolus of food toward the throat and then the esophagus." },
        { to: "naso", text: "Together with the nose it lets you recognize the full flavor of food." },
        { to: "cervello", text: "Nerves carry information about flavors to the brain." }
      ],
      problems: [
        { title: "Cavities and a dirty mouth", causes: "sugars and poor tooth cleaning; the bacteria in the mouth make acids.", effects: "teeth get damaged and you can have bad breath.", prevent: "brush your teeth after meals and in the evening, few sweets and sugary drinks, visits to the dentist." }
      ],
      fact: "Every tongue has a unique pattern, like fingerprints."
    },
    cuore: {
      name: "The heart", label: "Heart",
      what: "<p>The heart is a muscular pump about the size of your fist. It beats all your life to push blood all around the body.</p>",
      how: "<p>It is a muscle with four chambers: two <b>atria</b> (which receive the blood) and two <b>ventricles</b> (which push it out), separated by valves that make it go in only one direction. The right side sends blood to the lungs (pulmonary circulation), the left side sends it to the whole body (systemic circulation). At rest it beats 60-100 times a minute, about 100,000 times a day, and pumps about 5 liters of blood a minute. The beat is controlled by a group of cells, the natural pacemaker, and speeds up with effort.</p>",
      links: [
        { to: "polmoni", text: "The right side sends oxygen-poor blood to the lungs (pulmonary circulation); it comes back full of oxygen." },
        { to: "arterie", text: "From the left ventricle the oxygen-rich blood leaves through the aorta and the arteries." },
        { to: "vene", text: "The veins bring back to the heart the blood that has already delivered its oxygen." },
        { to: "nervi", text: "The autonomic nervous system speeds up or slows down its beat." }
      ],
      problems: [
        { title: "Heart attack and heart disease", causes: "smoking, high cholesterol, high blood pressure, lack of exercise, poor diet (mostly in adults).", effects: "part of the heart receives less blood and oxygen and struggles to pump, and the whole body can suffer.", prevent: "move every day, eat fruit, vegetables and little salt, don't smoke, sleep well." }
      ],
      fact: "The heart starts beating only about 3 weeks after conception and never stops again."
    },
    arterie: {
      name: "The arteries", label: "Arteries",
      what: "<p>Arteries are the tubes that carry oxygen-rich blood from the heart to all parts of the body.</p>",
      how: "<p>They have thick, elastic walls and can withstand the pressure of the blood pushed by the heart. The biggest, the <b>aorta</b>, is about 2-3 cm across and branches into smaller and smaller arteries down to the very thin <b>capillaries</b>, where exchanges with the cells take place. The \"beat\" you feel at your wrist is the pressure wave that travels through the arteries with every heartbeat. <b>Blood pressure</b> is measured with two numbers: the upper one (heart squeezing) and the lower one (heart relaxed). The pulmonary arteries are an exception: they carry oxygen-poor blood to the lungs.</p>",
      links: [
        { to: "cuore", text: "They start from the heart, which fills them with blood at every beat." },
        { to: "vene", text: "After the capillaries the blood reaches the veins and returns to the heart." },
        { to: "reni", text: "The renal arteries carry the blood to be filtered to the kidneys." },
        { to: "cervello", text: "The arteries of the neck bring the brain the oxygen it needs so much." }
      ],
      problems: [
        { title: "High blood pressure", causes: "too much salt, too little exercise, being overweight, smoking.", effects: "the artery walls are under strain and the heart works harder; over time problems can develop.", prevent: "little salt, lots of fruit and vegetables, exercise, don't smoke; the doctor checks your blood pressure." }
      ],
      fact: "If you lined up all your blood vessels you would get about 100,000 km, more than two times around the Earth."
    },
    vene: {
      name: "The veins", label: "Veins",
      what: "<p>Veins bring the blood back to the heart after it has delivered its oxygen and picked up the waste.</p>",
      how: "<p>They have thinner walls than arteries and a lower pressure. In the veins of the legs there are pocket-shaped <b>valves</b> that stop the blood from flowing back down. The return toward the heart is helped by the <b>muscles</b>, which squeeze the veins when they contract, and by the movement of breathing. The two biggest veins, the superior and inferior vena cava, carry the blood to the right atrium. The pulmonary veins are an exception: they carry oxygen-rich blood from the lungs to the heart. The bluish color of veins under the skin is an optical effect.</p>",
      links: [
        { to: "cuore", text: "The vena cava carry the blood into the right atrium of the heart." },
        { to: "muscoli", text: "The leg muscles, when they contract, push the blood up toward the heart." },
        { to: "intestino_tenue", text: "From the intestine, a special vein carries nutrients to the liver." },
        { to: "polmoni", text: "The pulmonary veins bring the oxygen-rich blood back to the heart." }
      ],
      problems: [
        { title: "Heavy legs", causes: "standing or sitting still for a long time, poor circulation.", effects: "blood pools in the legs and they feel swollen and tired.", prevent: "move often, take breaks, walk, don't keep your legs still for hours." }
      ],
      fact: "About 60-70% of the body's blood is in the veins at any moment."
    },
    trachea: {
      name: "The windpipe", label: "Windpipe",
      what: "<p>The windpipe (trachea) is the tube that carries air from the throat to the lungs. It has rings of cartilage that keep it open.</p>",
      how: "<p>It is about 10-12 cm long and is made of 16-20 \"C\"-shaped rings of cartilage that keep it always open, lined inside with cells that have tiny cilia and mucus. The mucus traps dust and germs and the cilia push it toward the throat, where it is swallowed or coughed out. At the bottom it splits into two <b>bronchi</b>, one for each lung, which branch into smaller and smaller tubes (bronchioles). Above it, the <b>larynx</b> contains the vocal cords, and the <b>epiglottis</b> closes the windpipe when you swallow.</p>",
      links: [
        { to: "naso", text: "It receives air from the nose and mouth, already warmed and cleaned." },
        { to: "polmoni", text: "It splits into the two bronchi that carry air to the lungs." },
        { to: "esofago", text: "It runs in front of the esophagus; the epiglottis closes it when you swallow so food doesn't go in." }
      ],
      problems: [
        { title: "Cough and bronchitis", causes: "viruses, smoke, polluted air.", effects: "mucus increases, the throat gets irritated and the cough tries to clean the airways.", prevent: "avoid smoke, even secondhand, wash your hands, air out rooms; if the cough lasts, talk to an adult or the doctor." }
      ],
      fact: "A cough can push air out at tens of meters per second."
    },
    polmoni: {
      name: "The lungs", label: "Lungs",
      what: "<p>The lungs are two big \"sponges\" that take oxygen from the air and send it into the blood, and let carbon dioxide out.</p>",
      how: "<p>In the lungs the bronchi branch into thousands of bronchioles that end in about 300-500 million <b>alveoli</b>, tiny sacs surrounded by capillaries. Their walls are very thin: oxygen passes into the blood and carbon dioxide passes from the blood into the air, by <b>diffusion</b>. All together, the surface of the alveoli is about as big as half a tennis court (50-70 m²). The right lung has three lobes, the left has two, to leave room for the heart. At rest we breathe 12-20 times a minute.</p>",
      links: [
        { to: "cuore", text: "The heart sends oxygen-poor blood to the lungs and receives it back full of oxygen." },
        { to: "diaframma", text: "The diaphragm makes them swell and shrink with every breath." },
        { to: "trachea", text: "Air arrives from the windpipe through the bronchi." },
        { to: "costole", text: "The ribs protect them like a cage." },
        { to: "vene", text: "From the pulmonary veins comes out the oxygen-rich blood heading to the heart." }
      ],
      problems: [
        { title: "Asthma", causes: "allergies, infections, cold air or smoke can narrow the bronchi.", effects: "shortness of breath, coughing and wheezing, because air passes with difficulty.", prevent: "avoid smoke and dust, follow the doctor's advice if you have asthma and keep your medicine with you." },
        { title: "Pneumonia", causes: "infections by viruses or bacteria.", effects: "the alveoli fill with fluid and less oxygen passes into the blood; medical care is needed.", prevent: "vaccinations, wash your hands, don't smoke, sleep and eat well." }
      ],
      fact: "Laid out side by side, the alveoli would cover a surface dozens of times bigger than your skin."
    },
    esofago: {
      name: "The esophagus", label: "Esophagus",
      what: "<p>The esophagus is the tube that carries food from the throat to the stomach. It works even upside down!</p>",
      how: "<p>It is about 25 cm long. Its muscular walls contract in waves, called <b>peristalsis</b>, that push the food down without needing gravity. At the beginning and at the end there are two muscular \"valves\" (sphincters): the one at the bottom opens to let food into the stomach and then closes to stop it from coming back up. When some acidic stomach juice comes back up, you feel the burning called \"reflux\".</p>",
      links: [
        { to: "lingua", text: "It receives the chewed food that the tongue pushes toward the throat." },
        { to: "stomaco", text: "At the bottom it opens into the stomach, where food is digested." },
        { to: "trachea", text: "It passes behind the windpipe: when you swallow, the epiglottis closes the windpipe." },
        { to: "diaframma", text: "It passes through the diaphragm to enter the belly." }
      ],
      problems: [
        { title: "Heartburn", causes: "big or very fatty meals, eating in a rush, fizzy drinks.", effects: "a burning feeling behind the breastbone, when some acid comes back up.", prevent: "eat slowly, moderate portions, don't go to bed right after dinner; if it happens often, talk to an adult or the doctor." }
      ],
      fact: "Food travels down the esophagus in just a few seconds."
    },
    stomaco: {
      name: "The stomach", label: "Stomach",
      what: "<p>The stomach is a muscular bag that mixes food with special juices and turns it into a mush.</p>",
      how: "<p>It can hold about 1-1.5 liters. Its muscular walls knead the food for 2-4 hours, mixing it with <b>gastric juice</b>, rich in hydrochloric acid (which kills many germs) and in enzymes like pepsin, which begin to digest proteins. A layer of mucus protects the wall from the acid. The result is <b>chyme</b>, which passes in small amounts into the small intestine through a valve, the pylorus.</p>",
      links: [
        { to: "esofago", text: "It receives food from the esophagus." },
        { to: "intestino_tenue", text: "The chyme passes in small amounts into the small intestine." },
        { to: "fegato", text: "It sits near the liver, which prepares the bile used in the later stages of digestion." },
        { to: "nervi", text: "The nerves tell the stomach when it is time to work and send the feeling of hunger." }
      ],
      problems: [
        { title: "Stomachache and gastritis", causes: "eating too fast, too much food, stress, infections.", effects: "pain or burning and nausea, digestion is harder.", prevent: "eat calmly, at regular times, avoid too much fatty or spicy food; if the pain lasts, talk to an adult or the doctor." }
      ],
      fact: "The lining of the stomach is renewed every few days, so the acid doesn't ruin it."
    },
    fegato: {
      name: "The liver", label: "Liver",
      what: "<p>The liver is the body's big \"factory\": it cleans the blood, stores energy and prepares substances useful for digesting.</p>",
      how: "<p>It is the biggest internal organ (about 1.5 kg) and has over 500 functions. Through the <b>portal vein</b> it receives the blood loaded with nutrients from the intestine: it processes them, stores sugar in the form of <b>glycogen</b> and gives it back when needed. It makes some substances (like medicines) less harmful, produces blood proteins and <b>bile</b>, which helps digest fats. It can regenerate after damage: a part that has been lost can grow back.</p>",
      links: [
        { to: "cistifellea", text: "The bile made by the liver is stored in the gallbladder." },
        { to: "intestino_tenue", text: "It receives the absorbed nutrients from the intestine, and sends bile into the intestine." },
        { to: "pancreas", text: "The pancreas and the liver together control the amount of sugar in the blood." },
        { to: "vene", text: "The portal vein and the vena cava carry blood into and out of the liver." }
      ],
      problems: [
        { title: "Overworked liver", causes: "too many fatty and sweet foods, too little exercise, alcohol (in adults), some medicines taken without supervision.", effects: "the liver has a harder time working and fat builds up; over time it can be damaged.", prevent: "eat a varied diet, move, take medicine only with an adult, no alcohol for kids and teens." }
      ],
      fact: "The liver is the only internal organ that can largely regenerate."
    },
    cistifellea: {
      name: "The gallbladder", label: "Gallbladder",
      what: "<p>It is a small bag under the liver where bile is stored, the liquid that helps digest fats.</p>",
      how: "<p>It is shaped like a small pear, about 8-10 cm long. Bile is made by the liver all the time and arrives in the gallbladder, which <b>concentrates</b> it by removing water. When you eat fatty foods, a hormone makes the gallbladder contract, squeezing the bile into the <b>duodenum</b> (the first part of the small intestine). Bile works like a detergent: it breaks fats into tiny droplets, so the enzymes can attack them. You can live without a gallbladder, too.</p>",
      links: [
        { to: "fegato", text: "It stores the bile made by the liver." },
        { to: "intestino_tenue", text: "It pours the bile into the duodenum when it is needed to digest fats." },
        { to: "pancreas", text: "Its duct joins the pancreas duct before opening into the duodenum." }
      ],
      problems: [
        { title: "Gallstones", causes: "bile too rich in cholesterol, a fatty diet, being overweight (more in adults).", effects: "tiny \"pebbles\" can block the duct and cause pain after meals.", prevent: "a varied diet with fiber, exercise, avoid drastic diets; with strong belly pain tell an adult right away." }
      ],
      fact: "Bile is yellow-green and gives the typical brown color to poop."
    },
    pancreas: {
      name: "The pancreas", label: "Pancreas",
      what: "<p>The pancreas does two jobs: it makes juices to digest food and it makes a hormone, insulin, that manages the sugar in the blood.</p>",
      how: "<p>It is a gland about 15 cm long behind the stomach. As an <b>exocrine</b> gland it makes pancreatic juice, rich in enzymes that digest sugars, proteins and fats and in bicarbonate that neutralizes stomach acid; it sends it to the duodenum. As an <b>endocrine</b> gland, the \"islets of Langerhans\" make two opposite hormones: <b>insulin</b> (lowers blood sugar by letting sugar into the cells) and <b>glucagon</b> (raises it by releasing the sugar stored in the liver).</p>",
      links: [
        { to: "intestino_tenue", text: "It pours into the duodenum the enzymes that digest food." },
        { to: "fegato", text: "Insulin and glucagon tell the liver when to store or release sugar." },
        { to: "stomaco", text: "It sits behind the stomach, and neutralizes the acid that arrives from there." },
        { to: "muscoli", text: "Thanks to insulin, the muscles take from the blood the sugar they need to work." }
      ],
      problems: [
        { title: "Diabetes", causes: "the body makes too little insulin or doesn't use it well; there are different forms, some also linked to being overweight and inactive.", effects: "sugar stays high in the blood, with thirst, tiredness and, over time, damage to other organs like the eyes and kidneys.", prevent: "a balanced diet, few sugary drinks, exercise; people with diabetes are treated with their doctor." }
      ],
      fact: "The islets of Langerhans are only 1-2% of the pancreas, but without insulin the cells could not use sugar."
    },
    intestino_tenue: {
      name: "The small intestine", label: "Small int.",
      what: "<p>It is the long tube coiled in your belly where food finishes being digested and nutrients pass into the blood.</p>",
      how: "<p>It is about 6-7 meters long and divided into the duodenum, jejunum and ileum. Pancreatic juice, bile and intestinal juices arrive here and break down carbohydrates into simple sugars, proteins into amino acids and fats into fatty acids. The wall is full of folds and tiny bumps, the <b>villi</b>, which increase the absorbing surface to about 30 m² (more than a big living room). Sugars and amino acids pass into the capillaries, which carry them to the liver through the portal vein; fats pass into the lymph vessels.</p>",
      links: [
        { to: "stomaco", text: "It receives chyme from the stomach, in small amounts." },
        { to: "pancreas", text: "The pancreas sends it the enzymes to complete digestion." },
        { to: "cistifellea", text: "The bile from the gallbladder helps digest fats." },
        { to: "intestino_crasso", text: "What isn't absorbed passes to the large intestine." },
        { to: "vene", text: "The absorbed nutrients enter the blood and arrive at the liver." }
      ],
      problems: [
        { title: "Food intolerances and allergies", causes: "the body doesn't digest a substance well (like lactose) or the immune system reacts to a food.", effects: "bloating, stomachache, diarrhea, sometimes other symptoms.", prevent: "if a food often makes you feel sick, talk to an adult and the doctor, who will tell you what to do." },
        { title: "Stomach bug (gastroenteritis)", causes: "viruses or bacteria picked up from dirty hands or badly stored food.", effects: "diarrhea, vomiting, stomachache and loss of water.", prevent: "wash your hands before eating, wash fruit and vegetables, store food properly, drink water." }
      ],
      fact: "Thanks to its folds and villi, the surface of the small intestine is much bigger than the tube makes you think."
    },
    intestino_crasso: {
      name: "The large intestine", label: "Large int.",
      what: "<p>It is the last stretch of digestion: it takes back the water from the food that is no longer needed and prepares the waste to be sent out.</p>",
      how: "<p>It is about 1.5 meters long and wider than the small intestine. It includes the <b>cecum</b> (with the appendix), the <b>colon</b> and the <b>rectum</b>. Here water and salts are absorbed again, so the leftovers become more solid, the <b>stool</b>. Billions of helpful bacteria live here, the <b>microbiota</b>, which digest fiber, make some vitamins (like K) and protect against harmful bacteria. The stool stays in the rectum until it is passed. The trip through the whole digestive system takes about 1 to 3 days.</p>",
      links: [
        { to: "intestino_tenue", text: "It receives from the small intestine the leftovers that can't be digested and are still very watery." },
        { to: "reni", text: "Together with the kidneys it helps the body keep the right balance of water." },
        { to: "vene", text: "The water and some vitamins it takes back pass into the blood." }
      ],
      problems: [
        { title: "Constipation", causes: "too little fiber, too little water, too little exercise, holding it in instead of going to the bathroom.", effects: "the stool gets hard and pooping is difficult and hurts.", prevent: "fruit, vegetables, whole grains, drink water, move, go to the bathroom when you need to." }
      ],
      fact: "More bacteria live in the intestine than there are cells in the rest of the whole body."
    },
    reni: {
      name: "The kidneys", label: "Kidneys",
      what: "<p>The kidneys are two bean-shaped organs that clean the blood and make urine.</p>",
      how: "<p>Each kidney is about the size of a fist and contains about a million filters called <b>nephrons</b>. Every day about 180 liters of blood plasma are filtered, but almost all of it goes back into the blood: the kidneys take back water and useful substances and let out only about 1.5 liters of <b>urine</b>, with waste like urea and extra salt. In this way they control the amount of water, the salt and the blood pressure. They also make a hormone, <b>erythropoietin</b>, that tells the bone marrow to make red blood cells.</p>",
      links: [
        { to: "vescica", text: "Urine flows from the kidneys to the bladder through the two ureters." },
        { to: "arterie", text: "The renal arteries bring the blood to be filtered, the veins carry it back clean." },
        { to: "surrenali", text: "On top of each kidney sits an adrenal gland." },
        { to: "cuore", text: "The kidneys control the volume of the blood and so help the heart regulate pressure." }
      ],
      problems: [
        { title: "Urinary infections and stones", causes: "too little water, poor hygiene, sometimes salts that build up.", effects: "burning when you pee, or pain in the sides; the kidneys work less well.", prevent: "drink water throughout the day, little salt, go to the bathroom without holding it in; if it stings, tell an adult." }
      ],
      fact: "The kidneys filter all the blood in the body many times a day."
    },
    vescica: {
      name: "The bladder", label: "Bladder",
      what: "<p>The bladder is a stretchy bag where urine collects until you go to the bathroom.</p>",
      how: "<p>It is a hollow muscular organ. Urine arrives from the kidneys through the ureters and builds up: an adult's bladder can hold about half a liter. When it is full, receptors in the wall send a signal to the brain and you feel the urge. Two sphincters keep it closed: one automatic and one that we control. When you decide to go to the bathroom, the muscle in the wall contracts, the sphincter relaxes and the urine leaves through the <b>urethra</b>. Children learn to control the bladder in the first years of life.</p>",
      links: [
        { to: "reni", text: "It receives the urine made by the kidneys." },
        { to: "bacino", text: "It stays safe inside the bowl of the pelvis." },
        { to: "nervi", text: "The nerves warn the brain when it is full and coordinate emptying." }
      ],
      problems: [
        { title: "Cystitis", causes: "bacteria that travel up from the urethra, too little water, holding it in too long.", effects: "burning and a frequent need to pee.", prevent: "drink water, don't hold your pee too long, personal hygiene; if you feel burning, tell an adult or the doctor." }
      ],
      fact: "The bladder stretches like a balloon and starts to let you know when it is about a third full."
    },
    tiroide: {
      name: "The thyroid", label: "Thyroid",
      what: "<p>The thyroid is a small butterfly-shaped gland in the neck. It makes hormones that control how fast the body works.</p>",
      how: "<p>It weighs 15-25 g and makes the hormones <b>thyroxine (T4)</b> and <b>triiodothyronine (T3)</b>, which control the metabolism: the speed at which cells use energy. They affect growth, temperature, heartbeat and brain development in children. To make them it needs <b>iodine</b>, found in fish and iodized salt. Production is controlled by the pituitary gland with the hormone TSH, in a feedback control loop that keeps the levels steady.</p>",
      links: [
        { to: "cervello", text: "The hypothalamus and pituitary in the brain control how much thyroxine to make." },
        { to: "cuore", text: "Thyroid hormones affect the heart rate." },
        { to: "ossa_gambe", text: "They are needed for the regular growth of bones in kids and teens." }
      ],
      problems: [
        { title: "Thyroid too slow or too fast", causes: "lack of iodine or disorders of the body's defenses.", effects: "if it works too little you feel sleepy and cold, if it works too much you feel jumpy and lose weight.", prevent: "use iodized salt in moderation, eat fish; blood tests can check it: talk to the doctor." }
      ],
      fact: "Its name comes from the Greek word for \"shield\", because of the shape of the cartilage nearby."
    },
    surrenali: {
      name: "The adrenal glands", label: "Adrenals",
      what: "<p>They are two small glands on top of the kidneys. They make hormones that help us react to a scare or an important task.</p>",
      how: "<p>Each adrenal gland has two parts. The <b>medulla</b> makes <b>adrenaline</b> and <b>noradrenaline</b> in moments of stress: the heart beats harder, breathing speeds up, the muscles get more blood, a response called \"fight or flight\". The <b>cortex</b> makes <b>cortisol</b> (which helps manage stress and sugars) and <b>aldosterone</b>, which controls salt and water together with the kidneys. They are controlled by the pituitary gland and the nervous system.</p>",
      links: [
        { to: "reni", text: "They rest on the upper part of the kidneys; aldosterone tells the kidneys how much salt to keep." },
        { to: "cuore", text: "Adrenaline makes the heart beat harder and faster." },
        { to: "cervello", text: "The brain, faced with danger or a strong emotion, sets them into action." },
        { to: "muscoli", text: "They get the muscles ready for action by sending them more sugar and blood." }
      ],
      problems: [
        { title: "Long-lasting stress", causes: "constant worries, too little sleep, too many commitments.", effects: "high cortisol for too long: tiredness, trouble sleeping, a stomachache.", prevent: "sleep well, play and move outdoors, talk about your worries with an adult you trust." }
      ],
      fact: "Adrenaline acts in a few seconds: that is why your heart pounds as soon as you get scared."
    },
    milza: {
      name: "The spleen", label: "Spleen",
      what: "<p>The spleen is a soft organ on the left side of the belly. It filters the blood and helps the body defend itself from germs.</p>",
      how: "<p>About the size of a fist, it has two tissues: the <b>red pulp</b>, which filters the blood and removes old or damaged red blood cells (after about 120 days) and keeps a reserve of them; and the <b>white pulp</b>, rich in lymphocytes, which recognize germs in the blood and make antibodies. The iron from the red blood cells is recovered and reused. You can live without a spleen, but you are a little more exposed to certain infections, and vaccinations are useful.</p>",
      links: [
        { to: "stomaco", text: "It sits next to the stomach, under the left ribs." },
        { to: "arterie", text: "It receives blood from its own artery and filters it." },
        { to: "linfonodi", text: "Together with the lymph nodes it is part of the lymphatic defense system." },
        { to: "costole", text: "The ribs protect it from bumps." }
      ],
      problems: [
        { title: "Blows to the left side", causes: "hard knocks in contact sports or falls.", effects: "the spleen can get hurt and cause pain in the left side.", prevent: "use protective gear and be careful in games; if you have strong pain after a blow, tell an adult right away." }
      ],
      fact: "It is the biggest organ of the lymphatic system."
    },
    timo: {
      name: "The thymus", label: "Thymus",
      what: "<p>The thymus is a small gland behind the breastbone. It is the \"school\" where some defense cells learn to recognize germs.</p>",
      how: "<p>It is bigger in children and gets smaller as you grow and then in adulthood. Here the <b>T lymphocytes</b> mature (the T is for thymus), which are born in the bone marrow. In the thymus they learn to tell the body's own cells from foreign ones: those that make mistakes are removed, to stop the immune system from attacking the body itself. T lymphocytes then move into the blood, the lymph nodes and the spleen, where they coordinate the defense.</p>",
      links: [
        { to: "linfonodi", text: "The T lymphocytes that leave the thymus head for the lymph nodes." },
        { to: "milza", text: "The spleen also hosts T and B lymphocytes that have completed their training." },
        { to: "cuore", text: "It sits in front of the heart, behind the breastbone." }
      ],
      problems: [
        { title: "Immature or weak defenses", causes: "the immune system develops during childhood and is affected by sleep, food and vaccines.", effects: "if the defenses work less well, you get sick more easily.", prevent: "vaccinations, good sleep, a varied diet, washing your hands; if you get sick often, talk to the doctor." }
      ],
      fact: "The thymus is most active during childhood and the teenage years, then it shrinks."
    },
    linfonodi: {
      name: "The lymph nodes", label: "Lymph nodes",
      what: "<p>Lymph nodes are small bean-shaped glands spread through the body (neck, armpits, groin). They are the checkpoints that stop germs.</p>",
      how: "<p>They are connected to each other by lymph vessels, which collect the <b>lymph</b>, a clear fluid that flows out of the tissues. The lymph passes through the lymph nodes, where there are many <b>lymphocytes</b> and macrophages that filter and destroy bacteria, viruses and damaged cells. When there is an infection the lymphocytes multiply, and the lymph node swells and may hurt a little: it is a sign that it is working. In the end the lymph returns to the blood near the heart. There are about 600 in the body.</p>",
      links: [
        { to: "milza", text: "The spleen and the lymph nodes are together part of the lymphatic system." },
        { to: "timo", text: "They receive the T lymphocytes made in the thymus." },
        { to: "vene", text: "The collected lymph goes back into circulation by pouring into the big veins near the heart." },
        { to: "intestino_tenue", text: "The fats absorbed in the intestine travel in the lymph vessels." }
      ],
      problems: [
        { title: "Swollen glands", causes: "a sore throat, a cold or other infections.", effects: "you feel tender \"little balls\" under your chin that usually shrink by themselves.", prevent: "rest, drink, wash your hands; if they stay swollen for a long time, talk to an adult or the doctor." }
      ],
      fact: "The lymph nodes in the neck often swell when you have a sore throat: it means your body is defending itself."
    }
  },
  tour: [
    { icon: "🧍", title: "The whole body", html: "<p>This is the body with the <b>skin</b>, which protects it from the outside. Underneath are muscles, bones and organs. Use the \"Explode\" slider to pull the pieces apart and see them better.</p>", focus: ["pelle"], explode: 0, view: { rx: 0.1, ry: -0.4 } },
    { icon: "🦴", title: "Skeleton and muscles", html: "<p>The <b>bones</b> are the framework that holds everything up and protects the heart, lungs and brain. The <b>muscles</b> pull the bones and make you move.</p>", focus: ["cranio", "colonna", "costole", "bacino", "ossa_braccia", "ossa_gambe", "muscoli"], explode: 0.4 },
    { icon: "🧠", title: "Command center", html: "<p>The <b>brain</b> gives the orders, the <b>cerebellum</b> coordinates movements, the <b>spinal cord</b> and the <b>nerves</b> carry messages all over the body.</p>", focus: ["cervello", "cervelletto", "midollo", "nervi"], explode: 0.3, view: { rx: 0.05, ry: 0.4 }, zoom: 1.2 },
    { icon: "👀", title: "The senses", html: "<p>Eyes, ears, nose and tongue catch light, sounds, smells and flavors and send them to the brain as signals.</p>", focus: ["occhi", "orecchie", "naso", "lingua"], explode: 0.3, zoom: 1.4 },
    { icon: "🫀", title: "Heart and blood", html: "<p>The <b>heart</b> is a pump that pushes blood into the <b>arteries</b>; the <b>veins</b> bring it back. Blood delivers oxygen and nutrients to every cell.</p>", focus: ["cuore", "arterie", "vene"], explode: 0.2 },
    { icon: "🫁", title: "Breathing", html: "<p>Air comes in through the nose, goes down the <b>windpipe</b> and reaches the <b>lungs</b>, where oxygen enters the blood. The <b>diaphragm</b> moves the air like a bellows.</p>", focus: ["naso", "trachea", "polmoni", "diaframma"], explode: 0.4, view: { rx: 0.1, ry: -0.2 } },
    { icon: "🍽️", title: "Digesting", html: "<p>Food goes down the <b>esophagus</b> into the <b>stomach</b>, then into the <b>small intestine</b>, where the <b>liver</b>, <b>gallbladder</b> and <b>pancreas</b> help with digestion. In the <b>large intestine</b> the water is taken back.</p>", focus: ["esofago", "stomaco", "fegato", "cistifellea", "pancreas", "intestino_tenue", "intestino_crasso"], explode: 0.5 },
    { icon: "🚽", title: "Filtering and cleaning", html: "<p>The <b>kidneys</b> filter the blood and make urine, which flows down into the <b>bladder</b>.</p>", focus: ["reni", "vescica"], explode: 0.5 },
    { icon: "⚗️", title: "Hormones", html: "<p>The <b>thyroid</b>, <b>adrenal glands</b> and <b>pancreas</b> send hormones into the blood, chemical messengers that control growth, energy and reactions to stress.</p>", focus: ["tiroide", "surrenali", "pancreas"], explode: 0.5 },
    { icon: "🛡️", title: "The defenses", html: "<p>The <b>spleen</b>, <b>thymus</b> and <b>lymph nodes</b> are the base of the white blood cells, which recognize and remove viruses and bacteria.</p>", focus: ["milza", "timo", "linfonodi"], explode: 0.5 }
  ],
  quiz: [
    { type: "mc", q: "Which organ lets oxygen pass from the air into the blood?", options: ["The stomach", "The lungs", "The kidneys"], answer: 1, explain: "In the alveoli of the lungs, oxygen passes into the blood and carbon dioxide passes into the air." },
    { type: "tf", q: "Arteries always carry oxygen-rich blood, except those that go to the lungs.", answer: true, explain: "Arteries carry blood away from the heart; the pulmonary artery carries oxygen-poor blood to the lungs." },
    { type: "mc", q: "Where is bile stored?", options: ["In the gallbladder", "In the stomach", "In the bladder"], answer: 0, explain: "The liver makes bile and the gallbladder stores it until it is needed to digest fats." },
    { type: "order", q: "Put the path of food in order.", items: ["Mouth", "Esophagus", "Stomach", "Small intestine", "Large intestine"], explain: "Food travels along a long tube: it is chewed, goes down the esophagus into the stomach, then it is absorbed in the small intestine and the large intestine takes back the water." },
    { type: "tf", q: "Insulin, made by the pancreas, helps sugar get into the cells.", answer: true, explain: "Insulin lowers the amount of sugar in the blood by letting it into the cells." },
    { type: "mc", q: "Which part of the nervous system protects and connects the brain to the body, inside the spine?", options: ["The cerebellum", "The spinal cord", "The thymus"], answer: 1, explain: "The spinal cord, protected by the vertebrae, carries signals between the brain and the nerves of the body." },
    { type: "num", q: "Roughly how many liters of blood does an adult have?", answer: 5, tol: 1, unit: "liters", explain: "An adult has about 5 liters of blood, 7-8% of body weight." },
    { type: "mc", q: "Which organ makes urine by filtering the blood?", options: ["The kidneys", "The bladder", "The liver"], answer: 0, explain: "The kidneys filter the blood and make urine; the bladder only collects it." },
    { type: "tf", q: "The diaphragm contracts when you breathe in.", answer: true, explain: "By contracting it moves down, the chest widens and air flows into the lungs." },
    { type: "order", q: "Put the path of a movement order in order.", items: ["Brain", "Spinal cord", "Nerves", "Muscles"], explain: "The brain decides, the spinal cord and the nerves carry the signal and the muscle contracts." },
    { type: "mc", q: "Where do T lymphocytes mature?", options: ["In the thymus", "In the spleen", "In the stomach"], answer: 0, explain: "In the thymus, T lymphocytes learn to recognize what is foreign to the body, and that is why they are called \"T\"." },
    { type: "num", q: "About how many meters long is an adult's small intestine?", answer: 6, tol: 1, unit: "m", explain: "The small intestine is about 6-7 meters long: folded up in the belly, it absorbs the nutrients." },
    { type: "mc", q: "Which pairing is correct?", options: ["Heart and lungs: the blood picks up oxygen", "Esophagus and kidneys: they carry urine", "Thyroid and bladder: they make bile"], answer: 0, explain: "The heart sends oxygen-poor blood to the lungs, and it comes back full of oxygen." },
    { type: "tf", q: "The cerebellum is mainly used to digest food.", answer: false, explain: "The cerebellum coordinates movement and balance." }
  ]
});

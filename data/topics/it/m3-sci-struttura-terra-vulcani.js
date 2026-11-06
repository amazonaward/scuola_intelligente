TOPIC('it', {
  "id": "m3-sci-struttura-terra-vulcani",
  "title": "La struttura della Terra, vulcani e terremoti",
  "intro": "La Terra sembra immobile, ma sotto i nostri piedi è un pianeta vivo: è fatta di strati con temperature altissime, la sua superficie è divisa in placche che si muovono e, dove si scontrano o si allontanano, nascono vulcani, terremoti e montagne.",
  "minutes": 40,
  "sections": [
    {
      "type": "text",
      "title": "1. Come conosciamo l'interno della Terra?",
      "html": "<p>Il foro più profondo mai scavato, il pozzo superprofondo di Kola in Russia, arriva a circa <b>12 km</b>: meno dello 0,2% del raggio terrestre (circa <b>6371 km</b>). Come facciamo allora a sapere cosa c'è dentro?</p><p>Grazie alle <b>onde sismiche</b> dei terremoti: viaggiano attraverso la Terra e cambiano velocità e direzione quando attraversano materiali diversi. Le onde <b>S</b> non passano nei liquidi: per questo sappiamo che il <b>nucleo esterno è liquido</b>.</p>"
    },
    {
      "type": "3d",
      "title": "Gli strati della Terra",
      "scene": "layers",
      "options": {
        "layers": [
          {
            "r": 1,
            "color": "#65a30d",
            "label": "Crosta (5–70 km)"
          },
          {
            "r": 0.97,
            "color": "#ea580c",
            "label": "Mantello (fino a 2900 km)"
          },
          {
            "r": 0.55,
            "color": "#facc15",
            "label": "Nucleo esterno liquido"
          },
          {
            "r": 0.19,
            "color": "#fef9c3",
            "label": "Nucleo interno solido"
          }
        ]
      },
      "caption": "Ruota il modello: lo spicchio tagliato mostra gli strati. Le proporzioni dei raggi sono quasi reali (la crosta è sottilissima!)."
    },
    {
      "type": "text",
      "title": "2. Gli strati, uno per uno",
      "html": "<table><tr><th>Strato</th><th>Profondità</th><th>Stato e composizione</th><th>Temperatura</th></tr><tr><td><b>Crosta</b></td><td>0–35 km (continenti, fino a 70 sotto le catene montuose); 5–10 km (oceani)</td><td>Solida, rocce granitiche (continentale) e basaltiche (oceanica)</td><td>fino a ~1000 °C alla base</td></tr><tr><td><b>Mantello</b></td><td>fino a ~2900 km</td><td>Rocce di silicati di ferro e magnesio; solido ma capace di «scorrere» lentamente</td><td>1000–3700 °C</td></tr><tr><td><b>Nucleo esterno</b></td><td>2900–5150 km</td><td>Liquido, ferro e nichel</td><td>~4000–5000 °C</td></tr><tr><td><b>Nucleo interno</b></td><td>5150–6371 km</td><td>Solido (per l'enorme pressione), ferro e nichel</td><td>~5000–5500 °C, come la superficie del Sole</td></tr></table><p>La crosta più la parte alta e rigida del mantello formano la <b>litosfera</b> (circa 100 km), che «galleggia» sull'<b>astenosfera</b>, più calda e plastica.</p>"
    },
    {
      "type": "curiosity",
      "title": "La Terra è una calamita",
      "html": "<p>Il ferro liquido in movimento nel nucleo esterno genera il <b>campo magnetico terrestre</b>: è per questo che l'ago della bussola punta verso Nord. Il campo magnetico ci protegge dal vento solare e crea le <b>aurore polari</b>. Nel corso della storia della Terra i poli magnetici si sono invertiti centinaia di volte!</p>"
    },
    {
      "type": "text",
      "title": "3. La tettonica delle placche",
      "html": "<p>Nel 1912 il tedesco <b>Alfred Wegener</b> notò che le coste di Sud America e Africa combaciano come pezzi di un puzzle e propose la <b>deriva dei continenti</b>: 250–300 milioni di anni fa le terre emerse formavano un unico supercontinente, la <b>Pangea</b>.</p><p>Oggi sappiamo che la litosfera è divisa in circa <b>15 grandi placche</b> che si muovono di pochi centimetri all'anno, spinte dai <b>moti convettivi</b> del mantello. I margini tra le placche possono essere:</p><ul><li><b>divergenti</b>: le placche si allontanano, il magma risale e crea nuova crosta (dorsali oceaniche, come quella medio-atlantica; l'Islanda);</li><li><b>convergenti</b>: le placche si scontrano; una può scendere sotto l'altra (<b>subduzione</b>), formando fosse oceaniche, vulcani e catene montuose (Ande, Himalaya, Alpi);</li><li><b>trasformi</b>: le placche scorrono una accanto all'altra (faglia di Sant'Andrea, in California).</li></ul>"
    },
    {
      "type": "svg",
      "title": "Margini tra le placche",
      "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#e0f2fe\"/><rect x=\"0\" y=\"180\" width=\"600\" height=\"120\" fill=\"#fb923c\"/><text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#7c2d12\">mantello (astenosfera): moti convettivi</text><rect x=\"0\" y=\"130\" width=\"190\" height=\"50\" fill=\"#a16207\"/><rect x=\"210\" y=\"130\" width=\"170\" height=\"50\" fill=\"#a16207\"/><polygon points=\"190,180 210,180 205,120 195,120\" fill=\"#dc2626\"/><path d=\"M200 230 L200 190\" stroke=\"#dc2626\" stroke-width=\"4\"/><text x=\"150\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">←</text><text x=\"230\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"200\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">DIVERGENTE</text><text x=\"200\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">dorsale oceanica</text><polygon points=\"380,130 470,130 600,130 600,180 470,180 380,180\" fill=\"#a16207\"/><polygon points=\"380,130 470,130 520,250 470,250\" fill=\"#854d0e\"/><polygon points=\"470,130 520,70 570,130\" fill=\"#57534e\"/><polygon points=\"512,80 528,80 520,60\" fill=\"#dc2626\"/><text x=\"430\" y=\"120\" font-size=\"20\" font-family=\"sans-serif\">→</text><text x=\"490\" y=\"40\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">CONVERGENTE</text><text x=\"490\" y=\"62\" font-size=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#1e3a8a\">subduzione + vulcano</text></svg>",
      "caption": "A sinistra due placche si allontanano e il magma risale; a destra una placca scende sotto l'altra e alimenta un vulcano."
    },
    {
      "type": "alternatives",
      "title": "Altri modi per capirlo: modelli e prove",
      "intro": "Nessuno è mai sceso nel mantello. Come facciamo a sapere com'è fatta la Terra? Con modelli che aiutano a immaginare e con prove indirette.",
      "tabs": [
        {
          "label": "🥚 L'uovo sodo",
          "html": "<p>Taglia a metà un uovo sodo: guscio, albume e tuorlo ricordano crosta, mantello e nucleo. Se schiacci il guscio si rompe in pezzi che restano «galleggianti» sull'albume: proprio come le placche sul mantello.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><ellipse cx=\"160\" cy=\"150\" rx=\"110\" ry=\"130\" fill=\"#fff\" stroke=\"#a16207\" stroke-width=\"5\"/><circle cx=\"160\" cy=\"165\" r=\"62\" fill=\"#facc15\"/><text x=\"160\" y=\"172\" font-size=\"16\" text-anchor=\"middle\" fill=\"#713f12\">tuorlo</text><text x=\"160\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#57534e\">albume</text><text x=\"300\" y=\"70\" font-size=\"17\" fill=\"#1f2937\">guscio → crosta (sottile e rigida, si rompe)</text><text x=\"300\" y=\"120\" font-size=\"17\" fill=\"#1f2937\">albume → mantello (solido ma «plastico»)</text><text x=\"300\" y=\"170\" font-size=\"17\" fill=\"#1f2937\">tuorlo → nucleo (al centro, denso)</text><text x=\"300\" y=\"230\" font-size=\"15\" fill=\"#b91c1c\">Attenzione: in proporzione la crosta</text><text x=\"300\" y=\"252\" font-size=\"15\" fill=\"#b91c1c\">è ancora più sottile del guscio!</text></svg>"
        },
        {
          "label": "🍑 La pesca",
          "html": "<p>Una pesca tagliata ha quattro parti: la buccia sottile, la polpa spessa, il nocciolo duro e il seme dentro. È un modello a quattro strati, come la Terra con il nucleo diviso in esterno e interno.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/><circle cx=\"160\" cy=\"150\" r=\"125\" fill=\"#fdba74\" stroke=\"#c2410c\" stroke-width=\"4\"/><path d=\"M160,150 L160,25 A125,125 0 0 1 285,150 Z\" fill=\"#fde68a\" stroke=\"#c2410c\" stroke-width=\"2\"/><ellipse cx=\"160\" cy=\"150\" rx=\"55\" ry=\"68\" fill=\"#92400e\"/><ellipse cx=\"160\" cy=\"150\" rx=\"20\" ry=\"26\" fill=\"#78350f\" stroke=\"#fde68a\" stroke-dasharray=\"3 3\"/><text x=\"310\" y=\"80\" font-size=\"17\" fill=\"#1f2937\">buccia → crosta</text><text x=\"310\" y=\"130\" font-size=\"17\" fill=\"#1f2937\">polpa → mantello</text><text x=\"310\" y=\"180\" font-size=\"17\" fill=\"#1f2937\">nocciolo → nucleo esterno</text><text x=\"310\" y=\"230\" font-size=\"17\" fill=\"#1f2937\">seme → nucleo interno</text></svg>"
        },
        {
          "label": "🌊 Le onde sismiche",
          "html": "<p>È la prova vera. Le onde dei terremoti attraversano la Terra: le <b>onde P</b> passano nei solidi e nei liquidi, le <b>onde S</b> solo nei solidi. Dall'altra parte del pianeta c'è una <b>zona d'ombra</b> dove le onde S non arrivano: vuol dire che a una certa profondità c'è un <b>liquido</b>, il nucleo esterno. Così R. D. Oldham (1906) individuò il nucleo, B. Gutenberg (1914) ne misurò la profondità (circa 2900 km) e la danese Inge Lehmann (1936) scoprì il nucleo interno solido.</p>",
          "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"320\" fill=\"#0f172a\"/><circle cx=\"300\" cy=\"160\" r=\"140\" fill=\"#ea580c\"/><circle cx=\"300\" cy=\"160\" r=\"77\" fill=\"#facc15\"/><circle cx=\"300\" cy=\"160\" r=\"27\" fill=\"#fef9c3\"/><circle cx=\"300\" cy=\"20\" r=\"7\" fill=\"#fff\"/><text x=\"312\" y=\"16\" font-size=\"14\" fill=\"#fff\">terremoto</text><path d=\"M300,20 Q215,80 175,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 Q385,80 425,225\" stroke=\"#60a5fa\" stroke-width=\"3\" fill=\"none\"/><path d=\"M300,20 L300,300\" stroke=\"#a7f3d0\" stroke-width=\"3\" stroke-dasharray=\"7 4\"/><path d=\"M178,235 A140,140 0 0 0 422,235\" stroke=\"#f87171\" stroke-width=\"8\" fill=\"none\" opacity=\".7\"/><text x=\"300\" y=\"315\" font-size=\"14\" text-anchor=\"middle\" fill=\"#fecaca\">zona d'ombra delle onde S</text><text x=\"20\" y=\"40\" font-size=\"14\" fill=\"#93c5fd\">onde S: solo nei solidi</text><text x=\"20\" y=\"62\" font-size=\"14\" fill=\"#a7f3d0\">onde P: solidi e liquidi</text></svg>"
        },
        {
          "label": "🍪 Biscotti e crema",
          "html": "<p>Prendi un biscotto con la crema e spezzalo in due: i due pezzi sono le <b>placche</b>, la crema è il mantello che si deforma. Allontanali (margine <b>divergente</b>): la crema esce nel mezzo come il magma nelle dorsali. Spingili uno contro l'altro (margine <b>convergente</b>): uno si alza o finisce sotto l'altro, come nelle catene montuose e nelle fosse oceaniche. Falli strisciare di lato (margine <b>trasforme</b>): si incastrano e poi scattano, come in un terremoto.</p>"
        },
        {
          "label": "🏔️ Paesaggio 3D",
          "html": "<p>Ruota il paesaggio e tocca le sue parti: vulcano, montagna, mare… Ognuna è il risultato dei movimenti interni della Terra o dell'erosione.</p>",
          "scene": "terrain",
          "options": {
            "features": {
              "volcano": {
                "label": "Vulcano",
                "html": "<p>Si forma dove il magma risale in superficie: ai margini delle placche (Etna, vulcani delle Ande) o sopra un «punto caldo» (Hawaii).</p>"
              },
              "mountain": {
                "label": "Catena montuosa",
                "html": "<p>Nasce dallo scontro tra placche (Alpi, Himalaya): la crosta si piega e si solleva.</p>"
              },
              "sea": {
                "label": "Mare",
                "html": "<p>Sotto i mari la crosta è oceanica: più sottile (5–10 km) e più pesante di quella continentale.</p>"
              }
            }
          }
        }
      ]
    },
    {
      "type": "quiz",
      "title": "Mini-quiz 1",
      "questions": [
        {
          "type": "mc",
          "q": "Quale strato della Terra è liquido?",
          "options": [
            "Crosta",
            "Mantello",
            "Nucleo esterno",
            "Nucleo interno"
          ],
          "answer": 2,
          "explain": "Il nucleo esterno è ferro e nichel fuso; lo dimostra il fatto che le onde S non lo attraversano."
        },
        {
          "type": "num",
          "q": "Quanto misura circa il raggio della Terra in km?",
          "answer": 6371,
          "tol": 30,
          "unit": "km",
          "explain": "Circa 6371 km."
        },
        {
          "type": "text",
          "q": "Come si chiamava il supercontinente unico di circa 250 milioni di anni fa?",
          "answer": [
            "pangea",
            "la pangea"
          ],
          "explain": "La Pangea, che significa «tutta la Terra»."
        }
      ]
    },
    {
      "type": "text",
      "title": "4. I vulcani",
      "html": "<p>Un <b>vulcano</b> è una spaccatura della crosta da cui esce il <b>magma</b>, roccia fusa ricca di gas. Quando arriva in superficie si chiama <b>lava</b>.</p><ul><li><b>Vulcani a scudo</b> (Hawaii): lava fluida e povera di silice, eruzioni <b>effusive</b> e tranquille; forma larga e poco ripida.</li><li><b>Stratovulcani</b> (Vesuvio, Etna in parte, Fuji): lava viscosa e ricca di gas, eruzioni <b>esplosive</b> con ceneri, lapilli, bombe e <b>nubi ardenti</b> (flussi piroclastici).</li></ul><p>Fenomeni legati al vulcanismo: <b>geyser</b>, <b>fumarole</b>, <b>sorgenti termali</b>, soffioni boraciferi (Larderello, in Toscana, dove nel 1904 si accese la prima lampadina con energia geotermica).</p>"
    },
    {
      "type": "widget",
      "title": "Le parti del vulcano",
      "widget": "labelDiagram",
      "options": {
        "svg": "<svg viewBox=\"0 0 600 360\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"360\" fill=\"#e0f2fe\"/><ellipse cx=\"300\" cy=\"40\" rx=\"120\" ry=\"28\" fill=\"#9ca3af\" opacity=\"0.8\"/><ellipse cx=\"250\" cy=\"55\" rx=\"60\" ry=\"20\" fill=\"#6b7280\" opacity=\"0.8\"/><polygon points=\"60,280 270,90 330,90 540,280\" fill=\"#78716c\"/><polygon points=\"120,240 280,110 320,110 480,240\" fill=\"#a8a29e\" opacity=\"0.6\"/><rect x=\"0\" y=\"280\" width=\"600\" height=\"80\" fill=\"#57534e\"/><ellipse cx=\"300\" cy=\"325\" rx=\"110\" ry=\"28\" fill=\"#ea580c\"/><rect x=\"290\" y=\"95\" width=\"20\" height=\"230\" fill=\"#ea580c\"/><path d=\"M310 200 L420 200\" stroke=\"#ea580c\" stroke-width=\"10\"/><path d=\"M305 95 Q340 140 360 220 Q370 250 390 270\" stroke=\"#f97316\" stroke-width=\"10\" fill=\"none\"/></svg>",
        "spots": [
          {
            "x": 300,
            "y": 325,
            "label": "Camera magmatica"
          },
          {
            "x": 300,
            "y": 230,
            "label": "Camino principale"
          },
          {
            "x": 300,
            "y": 92,
            "label": "Cratere"
          },
          {
            "x": 415,
            "y": 200,
            "label": "Camino secondario"
          },
          {
            "x": 300,
            "y": 40,
            "label": "Nube di ceneri e gas"
          },
          {
            "x": 385,
            "y": 265,
            "label": "Colata di lava"
          },
          {
            "x": 150,
            "y": 250,
            "label": "Cono vulcanico"
          }
        ]
      },
      "caption": "Clicca su ogni punto e scegli il nome giusto."
    },
    {
      "type": "3d",
      "title": "Paesaggio 3D: forme nate dalla Terra che si muove",
      "scene": "terrain",
      "options": {
        "features": {
          "volcano": {
            "label": "Vulcano",
            "html": "<p>Il magma sale dalla <b>camera magmatica</b> lungo il <b>camino</b> ed esce dal <b>cratere</b>. Strato dopo strato di lava e ceneri costruisce il cono. In Italia: Etna, Vesuvio, Stromboli, Campi Flegrei.</p>"
          },
          "mountain": {
            "label": "Catena montuosa",
            "html": "<p>Le Alpi sono nate dallo scontro tra la placca africana (con la microplacca adriatica) e quella euroasiatica, a partire da circa 65 milioni di anni fa. Lo scontro continua ancora oggi: per questo in Italia ci sono terremoti.</p>"
          },
          "peak": {
            "label": "Vetta",
            "html": "<p>Le vette più alte sono quelle più giovani: le montagne antiche (come gli Urali) sono state consumate dall'erosione per centinaia di milioni di anni.</p>"
          },
          "valley": {
            "label": "Valle",
            "html": "<p>Scavata dai fiumi (forma a V) o dai ghiacciai (forma a U). L'erosione lavora contro il sollevamento delle montagne.</p>"
          },
          "sea": {
            "label": "Mare",
            "html": "<p>I fondali oceanici si allargano nelle dorsali e scendono nel mantello nelle fosse (subduzione). Il fondale più antico ha «solo» circa 180 milioni di anni.</p>"
          },
          "island": {
            "label": "Isola",
            "html": "<p>Molte isole sono vulcaniche: nate da eruzioni sottomarine, come le Eolie, l'Islanda (sulla dorsale atlantica) e le Hawaii (su un punto caldo).</p>"
          },
          "lake": {
            "label": "Lago",
            "html": "<p>Alcuni laghi occupano antichi crateri (lago di Bolsena, di Bracciano, di Albano): sono i laghi vulcanici. Altri sono stati scavati dai ghiacciai, come il lago di Garda.</p>"
          },
          "plain": {
            "label": "Pianura",
            "html": "<p>La Pianura Padana è un'enorme fossa riempita dai detriti portati da Po e affluenti. Sotto i sedimenti, le placche continuano a muoversi.</p>"
          }
        }
      },
      "caption": "Ruota il paesaggio e tocca le parti per leggere come si sono formate."
    },
    {
      "type": "3d",
      "title": "Il globo dei vulcani e dei terremoti",
      "scene": "globe",
      "options": {
        "points": [
          {
            "lat": -38.24,
            "lon": -73.05,
            "label": "Valdivia, Cile – terremoto 1960 (M 9,5, il più forte mai registrato)",
            "color": "#dc2626"
          },
          {
            "lat": -16.5,
            "lon": -72,
            "label": "Ande peruviane",
            "color": "#f97316"
          },
          {
            "lat": 19,
            "lon": -98.6,
            "label": "Popocatépetl, Messico",
            "color": "#f97316"
          },
          {
            "lat": 46.2,
            "lon": -122.18,
            "label": "Monte Sant'Elena, USA – eruzione 1980",
            "color": "#f97316"
          },
          {
            "lat": 61.3,
            "lon": -152.25,
            "label": "Alaska",
            "color": "#f97316"
          },
          {
            "lat": 56.06,
            "lon": 160.64,
            "label": "Kamčatka",
            "color": "#f97316"
          },
          {
            "lat": 35.36,
            "lon": 138.73,
            "label": "Monte Fuji, Giappone",
            "color": "#f97316"
          },
          {
            "lat": 15.14,
            "lon": 120.35,
            "label": "Pinatubo, Filippine – eruzione 1991",
            "color": "#f97316"
          },
          {
            "lat": -6.1,
            "lon": 105.42,
            "label": "Krakatoa, Indonesia – eruzione 1883",
            "color": "#f97316"
          },
          {
            "lat": 19.41,
            "lon": -155.29,
            "label": "Kīlauea, Hawaii (punto caldo)",
            "color": "#eab308"
          },
          {
            "lat": 63.63,
            "lon": -19.62,
            "label": "Islanda – dorsale medio-atlantica",
            "color": "#eab308"
          },
          {
            "lat": 37.75,
            "lon": 14.99,
            "label": "Etna",
            "color": "#f97316"
          },
          {
            "lat": 40.82,
            "lon": 14.43,
            "label": "Vesuvio – Pompei 79 d.C.",
            "color": "#f97316"
          },
          {
            "lat": 38.3,
            "lon": 142.37,
            "label": "Tōhoku, Giappone – terremoto e tsunami 2011",
            "color": "#dc2626"
          },
          {
            "lat": 3.3,
            "lon": 95.98,
            "label": "Sumatra – terremoto e tsunami 2004",
            "color": "#dc2626"
          },
          {
            "lat": 38.2,
            "lon": 15.55,
            "label": "Messina – terremoto 1908",
            "color": "#dc2626"
          },
          {
            "lat": 0,
            "lon": -17,
            "label": "",
            "color": "#eab308"
          },
          {
            "lat": -35,
            "lon": -15,
            "label": "",
            "color": "#eab308"
          }
        ],
        "routes": [
          {
            "points": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "color": "#ef4444"
          },
          {
            "points": [
              10,
              16,
              17
            ],
            "color": "#eab308"
          }
        ]
      },
      "caption": "In rosso la «Cintura di fuoco del Pacifico», dove si trova circa il 75% dei vulcani attivi; in giallo un tratto della dorsale medio-atlantica. Ruota il globo: vulcani e terremoti si concentrano lungo i margini delle placche."
    },
    {
      "type": "example",
      "title": "Esempio: i vulcani italiani",
      "html": "<p>L'Italia è uno dei Paesi più vulcanici d'Europa perché si trova dove la placca africana spinge contro quella euroasiatica.</p><ul><li><b>Etna</b> (Sicilia, circa 3350 m): il vulcano attivo più alto d'Europa, eruzioni frequenti.</li><li><b>Stromboli</b>: piccole esplosioni continue ogni 10–20 minuti, da migliaia di anni («Faro del Mediterraneo»).</li><li><b>Vesuvio</b>: nel <b>79 d.C.</b> seppellì Pompei ed Ercolano; l'ultima eruzione è del 1944. Oggi è sorvegliato giorno e notte dall'Osservatorio Vesuviano, il più antico del mondo (1841).</li><li><b>Campi Flegrei</b>: una grande caldera vicino a Napoli, dove il suolo si alza e si abbassa (<b>bradisismo</b>).</li></ul>"
    },
    {
      "type": "text",
      "title": "5. I terremoti",
      "html": "<p>Le rocce della crosta, spinte dal movimento delle placche, accumulano energia finché si spezzano lungo una <b>faglia</b>. L'energia si libera di colpo sotto forma di <b>onde sismiche</b>.</p><ul><li><b>Ipocentro</b>: il punto in profondità dove ha origine la rottura.</li><li><b>Epicentro</b>: il punto in superficie esattamente sopra l'ipocentro, dove il terremoto è più forte.</li></ul><p>I terremoti si registrano con il <b>sismografo</b> e si misurano con due scale:</p><ul><li><b>Magnitudo</b> (Richter, oggi magnitudo momento): misura l'<b>energia</b> liberata. Ogni grado in più corrisponde a circa <b>32 volte</b> più energia.</li><li><b>Scala Mercalli</b> (12 gradi): misura gli <b>effetti</b> su persone ed edifici.</li></ul>"
    },
    {
      "type": "example",
      "title": "Esempio: cosa fare durante un terremoto",
      "html": "<ol><li><b>Al chiuso</b>: riparati sotto un tavolo robusto o vicino a un muro portante; stai lontano da finestre, vetri e mobili che possono cadere.</li><li><b>Non usare l'ascensore</b> e non correre per le scale durante la scossa.</li><li><b>All'aperto</b>: allontanati da edifici, alberi e linee elettriche.</li><li>Dopo la scossa esci con calma e raggiungi l'<b>area di attesa</b> indicata dal piano di protezione civile del tuo Comune.</li></ol><p>I terremoti non si possono prevedere, ma si possono costruire <b>edifici antisismici</b> che resistono alle scosse: è la vera prevenzione.</p>"
    },
    {
      "type": "curiosity",
      "title": "L'Himalaya cresce ancora",
      "html": "<p>L'India si muove verso nord e preme contro l'Asia da circa 50 milioni di anni: lo scontro ha sollevato l'<b>Himalaya</b>. L'Everest (8849 m) cresce ancora di qualche millimetro all'anno. Sulle sue cime si trovano fossili di animali marini: un tempo quelle rocce erano il fondo di un oceano!</p>"
    },
    {
      "type": "quiz",
      "title": "Mini-quiz 2",
      "questions": [
        {
          "type": "mc",
          "q": "Il punto in superficie sopra l'origine del terremoto si chiama:",
          "options": [
            "Ipocentro",
            "Epicentro",
            "Faglia",
            "Cratere"
          ],
          "answer": 1,
          "explain": "L'epicentro è sopra l'ipocentro."
        },
        {
          "type": "mc",
          "q": "Quale scala misura gli effetti di un terremoto?",
          "options": [
            "Richter",
            "Mercalli",
            "Celsius",
            "Beaufort"
          ],
          "answer": 1,
          "explain": "La scala Mercalli misura i danni e gli effetti; la magnitudo l'energia."
        },
        {
          "type": "tf",
          "q": "Il Vesuvio distrusse Pompei nel 79 d.C.",
          "answer": true,
          "explain": "L'eruzione seppellì Pompei, Ercolano e Stabia."
        }
      ]
    },
    {
      "type": "conceptMap",
      "title": "Mappa concettuale: dalla deriva dei continenti alla tettonica",
      "nodes": [
        {
          "id": "indizi",
          "label": "Gli indizi di Wegener",
          "x": 20,
          "y": 8,
          "color": "#16a34a",
          "html": "<p>Coste che combaciano (Sud America–Africa), stessi fossili (Mesosaurus, Glossopteris) su continenti lontani, stesse rocce, tracce di antichi ghiacciai ai tropici.</p>",
          "why": "<p>Se i continenti fossero sempre stati dove sono oggi, come avrebbe fatto un rettile d'acqua dolce come il Mesosaurus ad attraversare l'oceano? La spiegazione più semplice è che un tempo i continenti fossero uniti.</p>"
        },
        {
          "id": "wegener",
          "label": "Deriva dei continenti (1912)",
          "x": 50,
          "y": 8,
          "color": "#2563eb",
          "html": "<p>Alfred Wegener: i continenti si spostano; 250 milioni di anni fa formavano la Pangea.</p>",
          "why": "<p>Wegener era un meteorologo, non un geologo, e le sue idee furono a lungo respinte.</p>"
        },
        {
          "id": "motore",
          "label": "Il problema: quale motore?",
          "x": 80,
          "y": 8,
          "color": "#b91c1c",
          "html": "<p>Wegener non sapeva spiegare <b>quale forza</b> spostasse i continenti.</p>",
          "why": "<p>Una buona teoria scientifica deve spiegare non solo il «cosa» ma anche il «come». Senza un meccanismo, la maggior parte dei geologi dell'epoca non la accettò. È un esempio di come la scienza avanza: le idee vengono messe alla prova.</p>"
        },
        {
          "id": "onde",
          "label": "Onde sismiche e struttura interna",
          "x": 20,
          "y": 40,
          "color": "#ea580c",
          "html": "<p>Crosta, mantello, nucleo esterno liquido, nucleo interno solido.</p>",
          "why": "<p>Le onde P e S cambiano velocità e direzione passando da un materiale all'altro: studiandole da migliaia di stazioni sismiche si ricostruisce l'interno della Terra (Oldham, Gutenberg, Lehmann, Mohorovičić).</p>"
        },
        {
          "id": "fondali",
          "label": "Dorsali e fondali oceanici",
          "x": 50,
          "y": 40,
          "color": "#0891b2",
          "html": "<p>Negli anni '50 si scoprono le dorsali, montagne sottomarine lunghe decine di migliaia di km.</p>",
          "why": "<p>Marie Tharp e Bruce Heezen mapparono il fondo dell'Atlantico con gli ecoscandagli e trovarono una lunga fenditura centrale. Harry Hess (1962) propose l'<b>espansione dei fondali</b>: nuova crosta nasce nelle dorsali e si allarga.</p>"
        },
        {
          "id": "magnetismo",
          "label": "Strisce magnetiche",
          "x": 80,
          "y": 40,
          "color": "#7c3aed",
          "html": "<p>Le rocce del fondale registrano il campo magnetico terrestre, che si inverte nel tempo.</p>",
          "why": "<p>Vine e Matthews (1963) notarono strisce magnetiche simmetriche ai due lati delle dorsali: la prova che il fondale si forma al centro e si allontana, come un nastro trasportatore.</p>"
        },
        {
          "id": "convezione",
          "label": "Moti convettivi nel mantello",
          "x": 30,
          "y": 70,
          "color": "#dc2626",
          "html": "<p>Il calore interno fa salire lentamente le rocce calde e scendere quelle fredde.</p>",
          "why": "<p>È lo stesso fenomeno dell'acqua che bolle in una pentola, ma lentissimo (pochi centimetri all'anno). È il «motore» che mancava a Wegener.</p>"
        },
        {
          "id": "tettonica",
          "label": "Tettonica delle placche (anni '60)",
          "x": 65,
          "y": 70,
          "color": "#1d4ed8",
          "html": "<p>La litosfera è divisa in placche che si muovono di 2–10 cm all'anno.</p>",
          "why": "<p>Unisce tutte le prove: struttura interna, dorsali, magnetismo, distribuzione di vulcani e terremoti. Oggi i satelliti GPS misurano direttamente lo spostamento dei continenti: l'Atlantico si allarga di circa 2–3 cm all'anno.</p>"
        },
        {
          "id": "effetti",
          "label": "Vulcani, terremoti, montagne",
          "x": 50,
          "y": 92,
          "color": "#475569",
          "html": "<p>Si concentrano lungo i margini delle placche.</p>",
          "why": "<p>Dove le placche si allontanano risale magma; dove si scontrano si formano montagne e fosse; dove scorrono si accumula tensione che si libera nei terremoti. Per questo l'Italia, al confine tra placca africana ed euroasiatica, ha vulcani e terremoti.</p>"
        }
      ],
      "edges": [
        [
          "indizi",
          "wegener",
          "portano a"
        ],
        [
          "wegener",
          "motore",
          "manca"
        ],
        [
          "onde",
          "convezione",
          "rivelano il mantello"
        ],
        [
          "fondali",
          "tettonica",
          "prova"
        ],
        [
          "magnetismo",
          "tettonica",
          "prova"
        ],
        [
          "motore",
          "convezione",
          "risposta"
        ],
        [
          "convezione",
          "tettonica",
          "muove"
        ],
        [
          "wegener",
          "tettonica",
          "diventa"
        ],
        [
          "tettonica",
          "effetti",
          "spiega"
        ]
      ]
    }
  ],
  "glossary": [
    {
      "t": "Litosfera",
      "d": "Involucro rigido formato da crosta e parte superiore del mantello, diviso in placche."
    },
    {
      "t": "Astenosfera",
      "d": "Parte del mantello calda e plastica su cui si muovono le placche."
    },
    {
      "t": "Subduzione",
      "d": "Processo in cui una placca scende sotto un'altra."
    },
    {
      "t": "Magma",
      "d": "Roccia fusa con gas, sotto la superficie. In superficie si chiama lava."
    },
    {
      "t": "Faglia",
      "d": "Frattura della crosta lungo la quale le rocce si spostano."
    },
    {
      "t": "Ipocentro",
      "d": "Punto in profondità dove ha origine un terremoto."
    },
    {
      "t": "Epicentro",
      "d": "Punto della superficie sopra l'ipocentro."
    },
    {
      "t": "Magnitudo",
      "d": "Misura dell'energia liberata da un terremoto."
    },
    {
      "t": "Bradisismo",
      "d": "Lento sollevamento e abbassamento del suolo in zone vulcaniche."
    }
  ],
  "verifica": {
    "pass": 0.7,
    "questions": [
      {
        "type": "order",
        "q": "Metti in ordine gli strati dalla superficie al centro",
        "items": [
          "Crosta",
          "Mantello",
          "Nucleo esterno",
          "Nucleo interno"
        ],
        "explain": "Crosta, mantello, nucleo esterno (liquido), nucleo interno (solido)."
      },
      {
        "type": "mc",
        "q": "Di cosa è fatto principalmente il nucleo?",
        "options": [
          "Granito",
          "Ferro e nichel",
          "Silicio e ossigeno",
          "Acqua"
        ],
        "answer": 1,
        "explain": "Ferro e nichel."
      },
      {
        "type": "tf",
        "q": "Il nucleo interno è solido nonostante la temperatura altissima.",
        "answer": true,
        "explain": "L'enorme pressione impedisce al ferro di fondere."
      },
      {
        "type": "mc",
        "q": "Chi propose la teoria della deriva dei continenti?",
        "options": [
          "Darwin",
          "Wegener",
          "Galileo",
          "Richter"
        ],
        "answer": 1,
        "explain": "Alfred Wegener, nel 1912."
      },
      {
        "type": "mc",
        "q": "Cosa succede in un margine divergente?",
        "options": [
          "Le placche si scontrano",
          "Le placche si allontanano e si forma nuova crosta",
          "Le placche scorrono di lato",
          "Nulla"
        ],
        "answer": 1,
        "explain": "Il magma risale e crea nuova crosta oceanica: è il caso delle dorsali."
      },
      {
        "type": "mc",
        "q": "Le eruzioni esplosive sono tipiche di lave:",
        "options": [
          "fluide e povere di gas",
          "viscose e ricche di gas",
          "fredde",
          "di acqua"
        ],
        "answer": 1,
        "explain": "Il gas intrappolato nella lava viscosa esplode."
      },
      {
        "type": "text",
        "q": "Come si chiama il vulcano attivo più alto d'Europa?",
        "answer": [
          "etna",
          "l'etna",
          "l etna"
        ],
        "explain": "L'Etna, in Sicilia."
      },
      {
        "type": "tf",
        "q": "La magnitudo misura i danni agli edifici.",
        "answer": false,
        "explain": "La magnitudo misura l'energia; i danni si misurano con la scala Mercalli."
      },
      {
        "type": "mc",
        "q": "Durante un terremoto in casa è meglio:",
        "options": [
          "Prendere l'ascensore",
          "Ripararsi sotto un tavolo robusto",
          "Affacciarsi alla finestra",
          "Correre per le scale"
        ],
        "answer": 1,
        "explain": "Ci si ripara sotto un tavolo o vicino a un muro portante."
      },
      {
        "type": "mc",
        "q": "Come si formò l'Himalaya?",
        "options": [
          "Da un vulcano",
          "Dallo scontro tra placca indiana e placca euroasiatica",
          "Dall'erosione",
          "Da un meteorite"
        ],
        "answer": 1,
        "explain": "È una catena nata da un margine convergente."
      },
      {
        "type": "num",
        "q": "Circa quanti km è profondo il confine tra mantello e nucleo?",
        "answer": 2900,
        "tol": 100,
        "unit": "km",
        "explain": "Circa 2900 km."
      }
    ]
  }
});

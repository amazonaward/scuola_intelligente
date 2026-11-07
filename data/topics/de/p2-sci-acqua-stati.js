TOPIC('de', {
  id: "p2-sci-acqua-stati",
  title: "Das Wasser und seine Zustände",
  intro: "Wasser ist ein echter Verwandlungskünstler 🎩: Es kann harter <b>Eis</b> 🧊, fließendes <b>Wasser</b> 💧 oder unsichtbarer <b>Dampf</b> ♨️ sein. Das sind die drei <b>Zustände</b> des Wassers: <b>fest</b>, <b>flüssig</b> und <b>gasförmig</b>.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Drei Arten, Wasser zu sein",
      html: `<ul>
<li>🧊 <b>Fest</b>: das <b>Eis</b>, der <b>Schnee</b>, der Hagel. Es hat eine <b>eigene Form</b>: Ein Eiswürfel bleibt ein Würfel, auch wenn du ihn auf einen Teller legst.</li>
<li>💧 <b>Flüssig</b>: das <b>Wasser</b> aus dem Wasserhahn, aus dem Meer, vom Regen. Es hat <b>keine eigene Form</b>: Es nimmt die Form des Gefäßes an (Glas, Flasche, Wanne).</li>
<li>♨️ <b>Gasförmig</b>: der <b>Wasserdampf</b>. Er ist <b>unsichtbar</b> und verteilt sich überall in der Luft.</li>
</ul>
<p>Es ist immer <b>dasselbe Wasser</b>! Nur sein Zustand ändert sich.</p>`
    },
    {
      type: "svg",
      title: "Fest, flüssig, gasförmig",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<rect x="60" y="110" width="90" height="90" rx="10" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<path d="M75 125 L100 125" stroke="#ffffff" stroke-width="6"/>
<path d="M250 100 L265 220 L335 220 L350 100" fill="none" stroke="#475569" stroke-width="4"/>
<path d="M256 150 L262 216 L338 216 L344 150 Z" fill="#3b82f6"/>
<path d="M465 210 Q450 180 470 160 Q490 140 470 115 Q455 95 475 75" stroke="#94a3b8" stroke-width="6" fill="none" stroke-dasharray="4 8"/>
<path d="M505 210 Q490 180 510 160 Q530 140 510 115 Q495 95 515 75" stroke="#94a3b8" stroke-width="6" fill="none" stroke-dasharray="4 8"/>
<path d="M440 220 L540 220 L530 250 L450 250 Z" fill="#64748b"/>
<text x="105" y="60" font-size="24" text-anchor="middle" font-weight="bold" fill="#0369a1">FEST</text>
<text x="300" y="60" font-size="24" text-anchor="middle" font-weight="bold" fill="#1d4ed8">FLÜSSIG</text>
<text x="490" y="45" font-size="24" text-anchor="middle" font-weight="bold" fill="#475569">GASFÖRMIG</text>
<text x="105" y="240" font-size="17" text-anchor="middle" fill="#0c4a6e">Eis</text>
<text x="105" y="262" font-size="15" text-anchor="middle" fill="#0c4a6e">eigene Form</text>
<text x="300" y="250" font-size="17" text-anchor="middle" fill="#1e3a8a">Wasser</text>
<text x="300" y="272" font-size="15" text-anchor="middle" fill="#1e3a8a">Form des Gefäßes</text>
<text x="490" y="275" font-size="17" text-anchor="middle" fill="#334155">Dampf: verteilt sich</text>
</svg>`,
      caption: "Das Eis hat eine eigene Form, das Wasser nimmt die Form des Glases an, der Dampf verteilt sich in der Luft."
    },
    {
      type: "text",
      title: "Was lässt den Zustand wechseln? Die Wärme!",
      html: `<p>🔥 Wenn wir <b>erwärmen</b>:</p>
<ul>
<li>🧊 → 💧 das Eis <b>schmilzt</b> und wird zu Wasser: <b>Schmelzen</b> (passiert bei <b>0 °C</b>);</li>
<li>💧 → ♨️ das Wasser wird zu Dampf: <b>Verdunsten</b>. Wenn wir es stark erhitzen, bei <b>100 °C</b>, <b>kocht</b> es: <b>Sieden</b>.</li>
</ul>
<p>❄️ Wenn wir <b>abkühlen</b>:</p>
<ul>
<li>♨️ → 💧 der Dampf wird wieder zu Tröpfchen: <b>Kondensieren</b>;</li>
<li>💧 → 🧊 das Wasser <b>gefriert</b>: <b>Erstarren</b> (bei <b>0 °C</b>).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Der Kreis der Veränderungen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<circle cx="100" cy="150" r="60" fill="#bae6fd" stroke="#0284c7" stroke-width="4"/>
<circle cx="300" cy="150" r="60" fill="#93c5fd" stroke="#1d4ed8" stroke-width="4"/>
<circle cx="500" cy="150" r="60" fill="#e2e8f0" stroke="#64748b" stroke-width="4"/>
<text x="100" y="162" font-size="38" text-anchor="middle">🧊</text>
<text x="300" y="162" font-size="38" text-anchor="middle">💧</text>
<text x="500" y="162" font-size="38" text-anchor="middle">♨️</text>
<path d="M150 115 Q200 70 250 115" stroke="#dc2626" stroke-width="5" fill="none"/><polygon points="242,104 258,122 238,124" fill="#dc2626"/>
<path d="M350 115 Q400 70 450 115" stroke="#dc2626" stroke-width="5" fill="none"/><polygon points="442,104 458,122 438,124" fill="#dc2626"/>
<path d="M450 185 Q400 230 350 185" stroke="#2563eb" stroke-width="5" fill="none"/><polygon points="358,196 342,178 362,176" fill="#2563eb"/>
<path d="M250 185 Q200 230 150 185" stroke="#2563eb" stroke-width="5" fill="none"/><polygon points="158,196 142,178 162,176" fill="#2563eb"/>
<text x="200" y="62" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">Schmelzen 🔥</text>
<text x="400" y="62" font-size="17" text-anchor="middle" fill="#b91c1c" font-weight="bold">Verdunsten 🔥</text>
<text x="400" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">Kondensieren ❄️</text>
<text x="200" y="250" font-size="17" text-anchor="middle" fill="#1d4ed8" font-weight="bold">Erstarren ❄️</text>
<text x="100" y="235" font-size="15" text-anchor="middle" fill="#0c4a6e">fest</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#1e3a8a">flüssig</text>
<text x="500" y="235" font-size="15" text-anchor="middle" fill="#334155">gasförmig</text>
<text x="300" y="25" font-size="16" text-anchor="middle" fill="#7f1d1d">rot = erwärmen · blau = abkühlen</text>
</svg>`,
      caption: "Die roten Pfeile entstehen beim Erwärmen, die blauen beim Abkühlen."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die drei Zustände",
      questions: [
        { type: "mc", q: "Eis ist Wasser im … Zustand.", options: ["festen", "flüssigen", "gasförmigen"], answer: 0, explain: "Eis ist fest: Es hat eine eigene Form." },
        { type: "tf", q: "Flüssiges Wasser nimmt die Form des Gefäßes an.", answer: true, explain: "Im Glas hat es die Form des Glases, in der Flasche die der Flasche." },
        { type: "mc", q: "Was passiert mit Eis, wenn du es erwärmst?", options: ["Es schmilzt", "Es wird härter", "Es verschwindet im Nichts"], answer: 0, explain: "Eis schmilzt und wird zu flüssigem Wasser: Das ist das Schmelzen." }
      ]
    },
    {
      type: "example",
      title: "Beispiel: das Eis am Stiel in der Sonne 🍧",
      html: `<p>Im Sommer <b>schmilzt</b> ein Eis am Stiel in der Sonne: Die Wärme lässt es von <b>fest</b> zu <b>flüssig</b> werden (Schmelzen).</p>
<p>Der Saft, der auf den heißen Asphalt tropft, <b>verschwindet</b> nach einer Weile: Er ist <b>verdunstet</b>, zu unsichtbarem Dampf in der Luft geworden.</p>`
    },
    {
      type: "example",
      title: "Beispiel: der Badezimmerspiegel 🪞",
      html: `<p>Nach einer heißen Dusche <b>beschlägt</b> der Spiegel.</p>
<p>Der Dampf des heißen Wassers berührt den Spiegel, der <b>kälter</b> ist, und wird wieder zu vielen Tröpfchen: Das ist das <b>Kondensieren</b>. Du kannst sogar mit dem Finger darauf schreiben!</p>
<p>Dasselbe passiert, wenn eine kalte Flasche aus dem Kühlschrank „schwitzt“.</p>`
    },
    {
      type: "widget",
      title: "Welcher Zustand ist es?",
      widget: "classify",
      options: {
        groups: ["🧊 Fest", "💧 Flüssig", "♨️ Gasförmig"],
        items: [
          ["❄️ Schnee", 0],
          ["🌧️ Regen", 1],
          ["Dampf aus dem Topf", 2],
          ["🧊 Eiswürfel im Gefrierfach", 0],
          ["🌊 Meer", 1],
          ["unsichtbare Feuchtigkeit in der Luft", 2],
          ["Hagel", 0],
          ["🚿 Duschwasser", 1]
        ]
      },
      caption: "Vorsicht: Das weiße „Wölkchen“ über dem Topf besteht aus Tröpfchen, die schon kondensiert sind. Echter Dampf ist unsichtbar!"
    },
    {
      type: "3d",
      title: "Das Wassermolekül",
      scene: "molecule",
      options: {
        atoms: [
          { x: 0, y: 0, z: 0, r: 0.6, color: "#ef4444", label: "O (Sauerstoff)" },
          { x: 0.76, y: 0.58, z: 0, r: 0.38, color: "#f8fafc", label: "H (Wasserstoff)" },
          { x: -0.76, y: 0.58, z: 0, r: 0.38, color: "#f8fafc", label: "H (Wasserstoff)" }
        ],
        bonds: [[0, 1], [0, 2]]
      },
      caption: "Wasser besteht aus winzigen Teilchen, den H₂O-Molekülen: ein Sauerstoffatom und zwei Wasserstoffatome. Sie sind so klein, dass in einem Tropfen Milliarden von Milliarden davon stecken! Dreh es."
    },
    {
      type: "text",
      title: "Was tun die Teilchen?",
      html: `<p>Die Wassermoleküle bewegen sich <b>immer</b>. Die Wärme lässt sie sich <b>stärker</b> bewegen:</p>
<ul>
<li>🧊 im <b>Eis</b> sind sie <b>nah beieinander und bleiben an ihrem Platz</b>: Sie schwingen nur, wie Kinder in einer Reihe, die sich an den Händen halten;</li>
<li>💧 im <b>Wasser</b> sind sie nah beieinander, aber sie <b>gleiten</b> aneinander vorbei, wie Kinder, die im Hof spazieren gehen;</li>
<li>♨️ im <b>Dampf</b> sind sie <b>weit auseinander</b> und flitzen überallhin, wie Kinder, die auf einer riesigen Wiese Fangen spielen.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Eis schwimmt",
      html: `<p>Fast alle Stoffe ziehen sich zusammen, wenn sie fest werden. Wasser nicht! Wenn es gefriert, <b>dehnt</b> es sich aus (um etwa ein Zehntel): Darum kann eine volle Flasche, die man im Gefrierfach vergessen hat, <b>platzen</b>. 💥</p>
<p>Aus demselben Grund ist Eis leichter als Wasser und <b>schwimmt</b>: Eisberge schwimmen im Meer, und im Winter gefrieren Seen nur an der Oberfläche. Darunter schwimmen die Fische weiter! 🐟</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? In den Bergen gart die Pasta schlechter",
      html: `<p>In der Stadt kocht Wasser bei <b>100 °C</b>. Hoch oben in den Bergen „drückt“ die Luft weniger auf das Wasser und es kocht früher: Auf dem Gipfel des <b>Mount Everest</b> (8849 m) kocht es schon bei etwa <b>70 °C</b>!</p>
<p>Darum garen dort oben Nudeln und Eier viel langsamer. 🍝🏔️</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Zustände des Wassers zu verstehen",
      intro: "Wenn dich schwierige Wörter verwirren, probiere Spiele, Zeichnungen und 3D.",
      tabs: [
        {
          label: "💃 Der Tanz der Teilchen",
          html: `<p>Spielt es in der Klasse! Jedes Kind ist ein Wassermolekül.</p>
<ul>
<li>🧊 <b>Eis</b>: Alle stehen eng, ihr haltet euch an den Händen und wippt auf der Stelle.</li>
<li>💧 Die Lehrerin sagt „<b>Ich erwärme!</b>“: Ihr lasst die Hände los und geht dicht beieinander, ihr gleitet aneinander vorbei.</li>
<li>♨️ „<b>Ich erwärme noch mehr!</b>“: Ihr rennt durch die ganze Turnhalle, weit auseinander.</li>
<li>❄️ „<b>Ich kühle ab!</b>“: Ihr werdet langsamer und kommt wieder näher zusammen …</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="20" y="30" width="170" height="150" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
<rect x="215" y="30" width="170" height="150" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="410" y="30" width="170" height="150" fill="#f1f5f9" stroke="#64748b" stroke-width="3"/>
<g fill="#38bdf8" stroke="#0369a1" stroke-width="2">
<circle cx="55" cy="65" r="14"/><circle cx="90" cy="65" r="14"/><circle cx="125" cy="65" r="14"/><circle cx="160" cy="65" r="14"/>
<circle cx="55" cy="100" r="14"/><circle cx="90" cy="100" r="14"/><circle cx="125" cy="100" r="14"/><circle cx="160" cy="100" r="14"/>
<circle cx="55" cy="135" r="14"/><circle cx="90" cy="135" r="14"/><circle cx="125" cy="135" r="14"/><circle cx="160" cy="135" r="14"/>
</g>
<g fill="#3b82f6" stroke="#1e3a8a" stroke-width="2">
<circle cx="245" cy="150" r="14"/><circle cx="275" cy="160" r="14"/><circle cx="305" cy="148" r="14"/><circle cx="340" cy="158" r="14"/>
<circle cx="260" cy="122" r="14"/><circle cx="292" cy="120" r="14"/><circle cx="325" cy="125" r="14"/><circle cx="360" cy="130" r="14"/>
</g>
<g fill="#cbd5e1" stroke="#475569" stroke-width="2">
<circle cx="440" cy="60" r="14"/><circle cx="540" cy="80" r="14"/><circle cx="480" cy="150" r="14"/><circle cx="555" cy="155" r="14"/><circle cx="500" cy="95" r="14"/>
</g>
<text x="105" y="205" font-size="18" text-anchor="middle" fill="#0369a1" font-weight="bold">Eis: in Reih und Glied</text>
<text x="300" y="205" font-size="18" text-anchor="middle" fill="#1d4ed8" font-weight="bold">Wasser: gleiten</text>
<text x="495" y="205" font-size="18" text-anchor="middle" fill="#475569" font-weight="bold">Dampf: flitzen</text>
</svg>`
        },
        {
          label: "🇺🇸 Die amerikanischen Grade",
          html: `<p>In Deutschland messen wir die Temperatur in <b>Grad Celsius</b> (°C): Eis schmilzt bei <b>0 °C</b> und Wasser kocht bei <b>100 °C</b>.</p>
<p>In den <b>Vereinigten Staaten</b> benutzen sie <b>Grad Fahrenheit</b> (°F): Dort schmilzt Eis bei <b>32 °F</b> und Wasser kocht bei <b>212 °F</b>! Wenn ein amerikanisches Kind sagt „draußen sind es 90 Grad“, verbrennt es nicht: Das sind etwa 32 °C, ein Sommertag.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Eis schmilzt", "0 °C = 32 °F"],
              ["Wasser kocht", "100 °C = 212 °F"],
              ["Unser Körper", "etwa 37 °C = 98,6 °F"],
              ["Ein schöner Sommertag", "etwa 30 °C = 86 °F"]
            ]
          }
        },
        {
          label: "🌍 Das Wasser auf dem Planeten",
          html: `<p>Auf der Erde gibt es Wasser in allen drei Zuständen: <b>fest</b> im Eis der Pole und der Berge, <b>flüssig</b> in Meeren, Seen und Flüssen, <b>gasförmig</b> in der Luft. Die Meere bedecken etwa <b>7 Zehntel</b> der Erdoberfläche: Darum sieht die Erde aus dem Weltall wie ein blauer Planet aus! Dreh den Globus.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -80, lon: 0, label: "🧊 Antarktis: Eis", color: "#38bdf8" },
              { lat: 72, lon: -40, label: "🧊 Grönland: Eis", color: "#38bdf8" },
              { lat: 0, lon: -150, label: "💧 Pazifischer Ozean", color: "#1d4ed8" },
              { lat: 46, lon: 8, label: "🏔️ Gletscher der Alpen", color: "#7dd3fc" },
              { lat: -3, lon: -60, label: "♨️ Amazonas: sehr feuchte Luft", color: "#64748b" }
            ]
          }
        },
        {
          label: "🃏 Karten zu den Veränderungen",
          html: `<p>Dreh die Karten um und wiederhole die Namen der Zustandsänderungen.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🧊 → 💧", back: "Schmelzen (beim Erwärmen, bei 0 °C)" },
              { front: "💧 → 🧊", back: "Erstarren (beim Abkühlen, bei 0 °C)" },
              { front: "💧 → ♨️", back: "Verdunsten (Sieden bei 100 °C)" },
              { front: "♨️ → 💧", back: "Kondensieren (beim Abkühlen)" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Zustände des Wassers: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "molecole", label: "H₂O-Moleküle", x: 50, y: 8, color: "#ef4444", html: "Winzig kleine Teilchen, aus denen Wasser besteht: 1 Sauerstoff + 2 Wasserstoff.", why: "In den Jahren <b>1783–1784</b> bewies der Franzose <b>Antoine Lavoisier</b>, dass Wasser kein „Element“ ist, wie man 2000 Jahre lang geglaubt hatte, sondern aus zwei Gasen besteht: Wasserstoff und Sauerstoff. Der Engländer Henry Cavendish hatte schon Wasser erhalten, indem er Wasserstoff verbrannte." },
        { id: "calore", label: "Wärme", x: 50, y: 32, color: "#f97316", html: "Mehr Wärme = unruhigere Teilchen.", why: "Wärme ist Energie: Sie lässt die Moleküle immer schneller werden. Wenn sie sich stark genug bewegen, lösen sie sich voneinander und das Wasser ändert seinen Zustand." },
        { id: "solido", label: "Fest (Eis)", x: 15, y: 55, color: "#0ea5e9", html: "Eigene Form und eigenes Volumen; Teilchen bleiben an ihrem Platz.", why: "Im Eis „haken“ sich die Moleküle zu vielen Sechsecken ein: Darum haben Schneeflocken <b>6 Zacken</b>. Diese Struktur hat viele leere Zwischenräume: Darum schwimmt Eis." },
        { id: "liquido", label: "Flüssig (Wasser)", x: 50, y: 60, color: "#2563eb", html: "Eigenes Volumen, aber die Form des Gefäßes; Teilchen, die gleiten.", why: "Die Moleküle bleiben nah beieinander, weil sie sich anziehen, aber sie können aneinander vorbeigleiten. Darum kann man Wasser gießen, und es füllt jede Ecke des Glases." },
        { id: "gas", label: "Gasförmig (Dampf)", x: 85, y: 55, color: "#64748b", html: "Weder eigene Form noch eigenes Volumen; Teilchen weit auseinander, die flitzen.", why: "Die Moleküle sind so schnell, dass sie sich ganz voneinander lösen und den ganzen Raum ausfüllen, den sie finden. Darum kommt der Kuchenduft bis ins Zimmer!" },
        { id: "termometro", label: "Thermometer und Grad", x: 20, y: 85, color: "#a855f7", html: "Gerät, das die Temperatur in Grad misst.", why: "Im Jahr <b>1742</b> erfand der Schwede <b>Anders Celsius</b> seine Skala mit zwei Fixpunkten des Wassers. Am Anfang hatte er sie aber „verkehrt herum“ gemacht: 0 für kochendes Wasser und 100 für Eis! Kurz darauf wurde sie umgedreht, und so benutzen wir sie heute." },
        { id: "punti", label: "0 °C und 100 °C", x: 55, y: 85, color: "#16a34a", html: "Wasser gefriert bei 0 °C und kocht bei 100 °C (auf Meereshöhe).", why: "Das sind „runde“ Zahlen, weil die Celsius-Skala genau am Wasser aufgebaut wurde. In den Bergen kocht Wasser schon unter 100 °C, weil die Luft weniger drückt." },
        { id: "ciclo", label: "Wasserkreislauf", x: 85, y: 85, color: "#14b8a6", html: "In der Natur wechselt das Wasser ständig seinen Zustand: Meere, Wolken, Regen.", why: "Die Sonne lässt das Meer verdunsten, der Dampf steigt auf und kondensiert zu Wolken, dann fällt er als Regen oder Schnee zurück. Es ist seit Milliarden von Jahren immer dasselbe Wasser: Vielleicht hast du einen Schluck Wasser getrunken, den auch schon ein Dinosaurier getrunken hat! 🦕" }
      ],
      edges: [
        ["molecole", "calore", "werden unruhig durch"],
        ["calore", "solido", "wenig"],
        ["calore", "liquido", "mehr"],
        ["calore", "gas", "viel"],
        ["solido", "liquido", "Schmelzen"],
        ["liquido", "gas", "Verdunsten"],
        ["termometro", "punti", "misst"],
        ["liquido", "punti", "ändert den Zustand bei"],
        ["gas", "ciclo", "bildet die Wolken des"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Veränderungen",
      questions: [
        { type: "mc", q: "Bei wie viel Grad kocht Wasser (auf Meereshöhe)?", options: ["0 °C", "37 °C", "100 °C"], answer: 2, explain: "Wasser kocht bei 100 °C." },
        { type: "mc", q: "Der beschlagene Spiegel nach der Dusche ist ein Beispiel für …", options: ["Schmelzen", "Kondensieren", "Erstarren"], answer: 1, explain: "Der Dampf berührt den kalten Spiegel und wird wieder flüssig: Kondensieren." },
        { type: "tf", q: "Eis geht im Wasser unter.", answer: false, explain: "Eis ist leichter als Wasser und schwimmt." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Wasser hat 3 Zustände: <b>fest</b> (Eis), <b>flüssig</b> (Wasser), <b>gasförmig</b> (Dampf).</li>
<li>Beim Erwärmen: <b>Schmelzen</b> (🧊→💧) und <b>Verdunsten</b> (💧→♨️).</li>
<li>Beim Abkühlen: <b>Kondensieren</b> (♨️→💧) und <b>Erstarren</b> (💧→🧊).</li>
<li>Es gefriert bei <b>0 °C</b>, es kocht bei <b>100 °C</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Fester Zustand", d: "Hat eigene Form und eigenes Volumen, wie Eis." },
    { t: "Flüssiger Zustand", d: "Hat ein eigenes Volumen, nimmt aber die Form des Gefäßes an, wie Wasser." },
    { t: "Gasförmiger Zustand", d: "Hat weder eigene Form noch eigenes Volumen und verteilt sich überall, wie Dampf." },
    { t: "Schmelzen", d: "Übergang von fest zu flüssig." },
    { t: "Erstarren", d: "Übergang von flüssig zu fest." },
    { t: "Verdunsten", d: "Übergang von flüssig zu gasförmig." },
    { t: "Kondensieren", d: "Übergang von gasförmig zu flüssig." },
    { t: "Sieden", d: "Schnelles Verdampfen mit Blasen, bei 100 °C." },
    { t: "Thermometer", d: "Gerät, das die Temperatur misst." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "In welchem Zustand befindet sich Schnee?", options: ["Fest", "Flüssig", "Gasförmig"], answer: 0, explain: "Schnee ist festes Wasser." },
      { type: "mc", q: "Wie heißt der Übergang von Eis zu Wasser?", options: ["Schmelzen", "Kondensieren", "Verdunsten"], answer: 0, explain: "Das Schmelzen: Der Festkörper wird flüssig." },
      { type: "num", q: "Bei wie viel Grad Celsius gefriert Wasser?", answer: 0, unit: "°C", explain: "Wasser gefriert bei 0 °C." },
      { type: "num", q: "Bei wie viel Grad Celsius kocht Wasser auf Meereshöhe?", answer: 100, unit: "°C", explain: "Wasser kocht bei 100 °C." },
      { type: "tf", q: "Wasserdampf ist unsichtbar.", answer: true, explain: "Echter Dampf ist unsichtbar; das weiße „Wölkchen“ besteht aus Tröpfchen." },
      { type: "tf", q: "Flüssiges Wasser hat eine eigene Form.", answer: false, explain: "Wasser nimmt die Form des Gefäßes an." },
      { type: "mc", q: "Aufgehängte Wäsche trocknet, weil das Wasser …", options: ["gefriert", "verdunstet", "kondensiert"], answer: 1, explain: "Wärme und Wind lassen das Wasser in der Wäsche verdunsten." },
      { type: "order", q: "Bring in die richtige Reihenfolge: ein Eiswürfel in einem Topf auf dem Herd.", items: ["Festes Eis", "Das Eis schmilzt", "Flüssiges Wasser", "Das Wasser kocht und wird zu Dampf"], explain: "Beim Erwärmen: zuerst das Schmelzen, dann das Verdunsten." },
      { type: "text", q: "Wie heißt der Übergang von Dampf zu flüssigem Wasser?", answer: ["Kondensieren", "das Kondensieren", "Kondensation", "die Kondensation"], explain: "Das Kondensieren." },
      { type: "mc", q: "Warum kann eine volle Wasserflasche im Gefrierfach platzen?", options: ["Weil sich Wasser beim Gefrieren ausdehnt", "Weil das Gefrierfach zu warm ist", "Weil Eis schwer ist"], answer: 0, explain: "Beim Gefrieren nimmt das Wasser an Volumen zu." },
      { type: "mc", q: "Was lässt das Wasser seinen Zustand ändern?", options: ["Die Farbe", "Die Wärme", "Der Lärm"], answer: 1, explain: "Beim Erwärmen oder Abkühlen ändert das Wasser seinen Zustand." },
      { type: "tf", q: "Eis, Wasser und Dampf sind derselbe Stoff.", answer: true, explain: "Alle bestehen aus H₂O-Molekülen: Nur der Zustand ändert sich." }
    ]
  }
});

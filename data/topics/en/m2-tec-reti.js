TOPIC('en', {
  id: "m2-tec-reti",
  title: "Networks and the Internet",
  intro: "When you send a message to a friend in Australia, it takes less than a second to arrive, crossing cables under the ocean, routers and antennas. How does it do that? In this lesson we find out what a <b>network</b> is, how the <b>Internet</b> works and how <b>data</b> travels, split into lots of tiny <b>packets</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "What is a network?",
      html: `<p>A <b>computer network</b> is a group of devices (computers, smartphones, printers, consoles…) <b>connected</b> to each other to exchange data and share resources.</p>
<p>Networks are classified by their <b>size</b>:</p>
<ul>
<li><b>PAN</b> (Personal Area Network): a few metres, for example Bluetooth headphones and a phone.</li>
<li><b>LAN</b> (Local Area Network): a home, a school, an office. The Wi-Fi at home is a wireless LAN (WLAN).</li>
<li><b>MAN</b> (Metropolitan Area Network): a city.</li>
<li><b>WAN</b> (Wide Area Network): regions, countries, continents.</li>
</ul>
<p>The <b>Internet</b> is the biggest WAN in the world: it is a <b>network of networks</b>, that is, millions of different networks linked together with shared rules.</p>`
    },
    {
      type: "text",
      title: "Who is in a network?",
      html: `<ul>
<li><b>Client</b>: the device that <b>asks for</b> a service (your phone opening a video).</li>
<li><b>Server</b>: the computer that <b>provides</b> the service (the computer that stores the video and sends it). Many servers are gathered in huge <b>data centres</b>.</li>
<li><b>Router</b>: the "sorter" that decides the path of the data between one network and another. The one at home connects your LAN to the Internet.</li>
<li><b>Switch</b>: connects the devices of one LAN to each other with cables.</li>
<li><b>Access point</b>: the Wi-Fi antenna.</li>
</ul>
<p>The <b>transmission media</b> can be: <b>copper</b> cables (electrical signals), <b>optical fibre</b> (pulses of <b>light</b> in a glass thread as thin as a hair) and <b>radio waves</b> (Wi-Fi, 4G/5G mobile networks, satellites).</p>`
    },
    {
      type: "svg",
      title: "From your home to the server",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<rect x="15" y="40" width="190" height="220" rx="16" fill="#e0f2fe" stroke="#0369a1" stroke-width="3" stroke-dasharray="8 5"/>
<text x="110" y="65" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">Home LAN</text>
<rect x="35" y="90" width="50" height="80" rx="8" fill="#1e293b"/>
<rect x="41" y="98" width="38" height="58" fill="#38bdf8"/>
<text x="60" y="190" font-size="14" fill="#0f172a" text-anchor="middle">client</text>
<rect x="35" y="205" width="70" height="40" rx="4" fill="#475569"/>
<rect x="42" y="211" width="56" height="26" fill="#a5f3fc"/>
<rect x="125" y="140" width="65" height="35" rx="8" fill="#f97316" stroke="#7c2d12" stroke-width="2"/>
<text x="157" y="163" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">router</text>
<path d="M85 130 Q 110 130 125 150" fill="none" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="5 4"/>
<line x1="105" y1="225" x2="125" y2="170" stroke="#0ea5e9" stroke-width="3"/>
<ellipse cx="330" cy="150" rx="105" ry="70" fill="#c7d2fe" stroke="#4338ca" stroke-width="3"/>
<text x="330" y="140" font-size="22" font-weight="bold" fill="#3730a3" text-anchor="middle">INTERNET</text>
<text x="330" y="165" font-size="14" fill="#3730a3" text-anchor="middle">network of networks</text>
<circle cx="270" cy="110" r="8" fill="#f97316"/>
<circle cx="390" cy="115" r="8" fill="#f97316"/>
<circle cx="300" cy="195" r="8" fill="#f97316"/>
<circle cx="380" cy="190" r="8" fill="#f97316"/>
<line x1="190" y1="157" x2="228" y2="155" stroke="#dc2626" stroke-width="4"/>
<line x1="433" y1="150" x2="470" y2="150" stroke="#dc2626" stroke-width="4"/>
<rect x="470" y="80" width="110" height="160" rx="10" fill="#334155"/>
<rect x="482" y="95" width="86" height="25" rx="4" fill="#22c55e"/>
<rect x="482" y="130" width="86" height="25" rx="4" fill="#22c55e"/>
<rect x="482" y="165" width="86" height="25" rx="4" fill="#22c55e"/>
<text x="525" y="222" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">server</text>
<text x="300" y="275" font-size="15" fill="#1f2937" text-anchor="middle">the orange dots are the routers that sort the packets</text>
</svg>`,
      caption: "The client asks, the routers sort, the server answers. Between your home and the server there can be as many as 15–20 routers."
    },
    {
      type: "text",
      title: "IP addresses and DNS: how to find the way",
      html: `<p>To send a letter you need an address. On the Internet every connected device has an <b>IP address</b> (Internet Protocol).</p>
<ul>
<li><b>IPv4</b>: 4 numbers from <b>0 to 255</b> separated by dots, for example <code>192.168.1.10</code>. That is 32 bits in all, about <b>4.3 billion</b> addresses: far too few for all the devices in the world!</li>
<li><b>IPv6</b>: 128 bits, written in hexadecimal (<code>2001:db8::1</code>). The possible addresses are a number with 39 digits: practically endless.</li>
</ul>
<p>But we don't type numbers, we type names like <code>www.wikipedia.org</code>. The <b>DNS</b> (Domain Name System) is the Internet's "address book": it translates the name into the server's IP address. It works like the contacts list on a phone: you look up "Grandma" and the phone dials the number.</p>`
    },
    {
      type: "text",
      title: "Packets and the TCP/IP protocol",
      html: `<p>Data does not travel in one single piece: it is split into <b>packets</b> (usually at most about 1500 bytes each). Every packet contains:</p>
<ul>
<li>the <b>IP address of the sender</b> and that of the <b>receiver</b>;</li>
<li>a <b>sequence number</b> (to put the pieces back together);</li>
<li>a small piece of the actual <b>data</b>.</li>
</ul>
<p>Routers send each packet along the <b>least busy route at that moment</b>: packets of the same message can take different paths and arrive out of order. This method is called <b>packet switching</b>.</p>
<p>The rules everybody follows are called <b>protocols</b>. The most important are <b>IP</b> (brings each packet to the right address) and <b>TCP</b> (checks that they all arrive, puts them back in order and has lost ones sent again). Together they make up <b>TCP/IP</b>, invented by <b>Vinton Cerf</b> and <b>Robert Kahn</b> in 1974.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: networks and addresses",
      questions: [
        { type: "mc", q: "The Wi-Fi network in your home is a…", options: ["WAN", "LAN", "MAN"], answer: 1, explain: "It covers a small area (the home): it is a local area network, a LAN (wireless: WLAN)." },
        { type: "tf", q: "The DNS translates website names into IP addresses.", answer: true, explain: "It is the Internet's \"phone book\"." },
        { type: "mc", q: "Which of these is a valid IPv4 address?", options: ["192.168.1.300", "10.0.0.25", "256.1.1.1"], answer: 1, explain: "Each number in an IPv4 address goes from 0 to 255: 300 and 256 are too big." }
      ]
    },
    {
      type: "3d",
      title: "The highways under the sea",
      scene: "globe",
      options: {
        points: [
          { lat: 45.46, lon: 9.19, label: "Milan", color: "#ef4444" },
          { lat: 43.3, lon: 5.37, label: "Marseille", color: "#f97316" },
          { lat: 31.2, lon: 29.92, label: "Alexandria, Egypt", color: "#f97316" },
          { lat: 19.07, lon: 72.88, label: "Mumbai", color: "#f97316" },
          { lat: 1.35, lon: 103.82, label: "Singapore", color: "#f97316" },
          { lat: 51.5, lon: -0.13, label: "London", color: "#2563eb" },
          { lat: 40.71, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: -33.87, lon: 151.21, label: "Sydney", color: "#16a34a" }
        ],
        routes: [
          { points: [0, 1, 2, 3, 4, 7], color: "#f97316" },
          { points: [0, 5, 6], color: "#2563eb" }
        ]
      },
      caption: "More than 95% of the data between continents travels in undersea optical-fibre cables, not through satellites. Rotate the globe and follow two possible routes for your packets."
    },
    {
      type: "example",
      title: "Worked example: what happens when you open a website",
      html: `<ol>
<li>You type <code>www.esempio.it</code> into the browser.</li>
<li>The computer asks the <b>DNS</b>: "What is the IP of www.esempio.it?" and gets back, for example, <code>93.184.216.34</code>.</li>
<li>The browser sends the server a <b>request</b> (<b>HTTP</b> protocol, or <b>HTTPS</b> if it is encrypted: the padlock 🔒).</li>
<li>The request, split into packets, goes through your <b>router</b>, then through the routers of your Internet provider and of other networks.</li>
<li>The <b>server</b> answers by sending the page, also in packets.</li>
<li><b>TCP</b> puts the packets back in order; the browser <b>draws</b> the page. All in a few tenths of a second!</li>
</ol>`
    },
    {
      type: "example",
      title: "Worked example: how long does a download take?",
      html: `<p>The speed of a connection is measured in <b>bits per second</b> (Mbit/s = millions of bits per second). File sizes, instead, are measured in <b>bytes</b>. Careful: <b>1 byte = 8 bits</b>!</p>
<p>You want to download a game of <b>500 MB</b> (megabytes) with a <b>100 Mbit/s</b> connection:</p>
<ol>
<li>I convert to bits: 500 × 8 = <b>4000 Mbit</b>.</li>
<li>I divide by the speed: 4000 ÷ 100 = <b>40 seconds</b> (in ideal conditions).</li>
</ol>
<p>With an old 8 Mbit/s ADSL line it would take 4000 ÷ 8 = 500 seconds, more than 8 minutes. With 1 Gbit/s fibre (1000 Mbit/s) just 4 seconds are enough!</p>`
    },
    {
      type: "widget",
      title: "Match the terms",
      widget: "match",
      options: { pairs: [
        ["Router", "Sorts packets between networks"],
        ["Server", "Provides services and content"],
        ["DNS", "Translates names into IP addresses"],
        ["Packet", "Small piece of data with sender and receiver"],
        ["Optical fibre", "Carries data with pulses of light"],
        ["TCP", "Checks that all the packets arrive in order"]
      ] },
      caption: "Link each word to its definition."
    },
    {
      type: "curiosity",
      title: "Did you know…? The first message was \"LO\"",
      html: `<p>On <b>29 October 1969</b> two computers of the <b>ARPANET</b> network, the ancestor of the Internet, one at UCLA university in Los Angeles and one at the Stanford Research Institute, tried to exchange the first message: the word <b>LOGIN</b>. After the first two letters, "L" and "O", the system crashed!</p>
<p>So the first message in the history of the Internet was "<b>LO</b>", which in old-fashioned English means… "look!". An hour later the connection worked in full.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The Internet and the Web are not the same thing",
      html: `<p>The <b>Internet</b> is the physical network (cables, routers, protocols). The <b>World Wide Web</b> is just <b>one</b> of the services that travel over the Internet, like email or video calls.</p>
<p>The Web was invented at <b>CERN</b> in Geneva by the Englishman <b>Tim Berners-Lee</b>: he proposed it in <b>1989</b> and the first website went online in 1991. On 30 April 1993 CERN made it free and open to everyone.</p>
<p>And Italy? On <b>30 April 1986</b> the CNUCE centre in <b>Pisa</b> was the first in Italy to connect to the Internet, by satellite, with the United States.</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Network = connected devices. By size: PAN, LAN, MAN, WAN. Internet = network of networks.</li>
<li>The <b>client</b> asks, the <b>server</b> answers, the <b>router</b> sorts.</li>
<li>Every device has an <b>IP address</b>; the <b>DNS</b> translates names into IPs.</li>
<li>Data travels in <b>packets</b> that can follow different routes; <b>TCP/IP</b> guides them and puts them in order.</li>
<li>Speed in bits/s, files in bytes: <b>1 byte = 8 bits</b>.</li>
<li>Internet ≠ Web: the Web is a service of the Internet.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the Internet",
      intro: "The Internet is invisible, but you can picture it in many ways. Choose the one that helps you most.",
      tabs: [
        {
          label: "✉️ Numbered postcards",
          html: `<p>You have to send a friend a whole book, but the post office only accepts <b>postcards</b>. So:</p>
<ol>
<li>you copy the book onto 300 postcards and <b>number</b> them (1/300, 2/300…);</li>
<li>on each one you write the <b>sender</b> and the <b>receiver</b>;</li>
<li>you post them: some go through Bologna, others through Florence, depending on which trucks are free (the <b>routers</b>);</li>
<li>your friend receives them out of order, <b>puts them back in order</b> using the numbers and, if one is missing, asks you to send it again (that is the job of <b>TCP</b>).</li>
</ol>
<p>This is exactly <b>packet switching</b>!</p>`
        },
        {
          label: "🛣️ The road network",
          html: `<p>Think of the Internet as the road network:</p>
<ul>
<li>the <b>cables</b> are the roads (fibre is the motorway, the old copper twisted pair a little lane);</li>
<li>the <b>routers</b> are the roundabouts with the signposts;</li>
<li>the <b>IP addresses</b> are the addresses of the houses;</li>
<li>the <b>DNS</b> is the satnav that turns "Grandma's house" into a street and house number;</li>
<li>the <b>packets</b> are the cars: if there is traffic on one road, the satnav picks another.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#dcfce7"/>
<path d="M40 130 L200 60 L400 60 L560 130" fill="none" stroke="#475569" stroke-width="22"/>
<path d="M40 130 L200 200 L400 200 L560 130" fill="none" stroke="#475569" stroke-width="22"/>
<path d="M200 60 L400 200" fill="none" stroke="#64748b" stroke-width="14"/>
<circle cx="200" cy="60" r="22" fill="#f97316"/>
<circle cx="400" cy="60" r="22" fill="#f97316"/>
<circle cx="200" cy="200" r="22" fill="#f97316"/>
<circle cx="400" cy="200" r="22" fill="#f97316"/>
<rect x="10" y="105" width="50" height="50" fill="#2563eb"/>
<text x="35" y="137" font-size="20" text-anchor="middle">🏠</text>
<rect x="540" y="105" width="50" height="50" fill="#334155"/>
<text x="565" y="137" font-size="20" text-anchor="middle">🖥️</text>
<text x="280" y="55" font-size="22" text-anchor="middle">🚗</text>
<text x="300" y="215" font-size="22" text-anchor="middle">🚙</text>
<text x="300" y="140" font-size="22" text-anchor="middle">🚕</text>
<text x="300" y="250" font-size="15" fill="#14532d" text-anchor="middle">orange roundabouts = routers · cars = packets choosing different roads</text>
</svg>`
        },
        {
          label: "🔦 Optical fibre",
          html: `<p>Try this experiment (with an adult): in a dark room let a jet of water run out of a bottle with a hole in it and shine a torch on the hole from the other side. The light <b>follows the curve</b> of the water instead of going straight out!</p>
<p>This is <b>total internal reflection</b>: the light bounces off the inner walls and stays "trapped". In optical fibre the same thing happens inside a thread of ultra-pure glass: pulses of light (on = 1, off = 0) travel for tens of kilometres. The experiment was already shown in 1842 by the Swiss physicist <b>Daniel Colladon</b>.</p>`
        },
        {
          label: "⏳ Timeline",
          html: `<p>From a network of a few computers to billions of devices.</p>`,
          widget: "timeline",
          options: { unit: "years", events: [
            { year: 1969, label: "ARPANET: first message \"LO\"", icon: "📡" },
            { year: 1971, label: "First email (Ray Tomlinson, the @ symbol)", icon: "📧" },
            { year: 1974, label: "Cerf and Kahn describe TCP/IP", icon: "📜" },
            { year: 1986, label: "Pisa: Italy connects to the Internet", icon: "🇮🇹" },
            { year: 1991, label: "Tim Berners-Lee puts the first website online", icon: "🌐" },
            { year: 1997, label: "The Wi-Fi standard is born (IEEE 802.11)", icon: "📶" },
            { year: 2007, label: "Touchscreen smartphones: the Internet in your pocket", icon: "📱" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Internet map",
      nodes: [
        { id: "rete", label: "Computer network", x: 50, y: 7, color: "#7c3aed", html: "Devices connected to exchange data and resources.", why: "The first networks were born in the 1960s to share the universities' very expensive computers. The idea of a network with no centre, which keeps working even if one node fails, was studied by Paul Baran (USA) and Donald Davies (United Kingdom)." },
        { id: "internet", label: "Internet", x: 50, y: 27, color: "#2563eb", html: "The worldwide network made of millions of connected networks.", why: "It comes from ARPANET (1969), a project funded by the American Department of Defense. In 1983 ARPANET adopted TCP/IP: this is considered the birth date of the modern Internet." },
        { id: "clientserver", label: "Client and server", x: 15, y: 45, color: "#0ea5e9", html: "The client asks, the server answers.", why: "Dividing up the jobs means the data can be kept in one place (the server) and used from millions of different devices." },
        { id: "ip", label: "IP address", x: 40, y: 50, color: "#f59e0b", html: "Number that identifies every connected device.", why: "IPv4 (1981) uses 32 bits: 2³² ≈ 4.3 billion addresses. With the explosion of smartphones and connected objects they were no longer enough: IPv6 was born, with 128 bits." },
        { id: "dns", label: "DNS", x: 40, y: 72, color: "#eab308", html: "Translates website names into IP addresses.", why: "Invented by Paul Mockapetris in 1983: before that there was a single file with all the names, updated by hand, which could no longer cope." },
        { id: "pacchetti", label: "Packets", x: 65, y: 50, color: "#ef4444", html: "Small pieces of data with sender, receiver and sequence number.", why: "Splitting data into packets lets many users share the lines and get around breakdowns: if one road is cut, the packets take another." },
        { id: "tcpip", label: "TCP/IP", x: 65, y: 72, color: "#16a34a", html: "The rules (protocols) shared by the whole Internet.", why: "Written by Vinton Cerf and Robert Kahn in 1974 to make different networks talk to each other. That is why they are called \"the fathers of the Internet\"." },
        { id: "mezzi", label: "Physical media", x: 88, y: 45, color: "#64748b", html: "Copper, optical fibre, radio waves, satellites.", why: "Optical fibre uses the total reflection of light; the first transatlantic telegraph cable was already laid in 1858. Today more than 500 undersea cables connect the continents." },
        { id: "web", label: "World Wide Web", x: 50, y: 92, color: "#a855f7", html: "The service of pages linked by links, on top of the Internet.", why: "Invented by Tim Berners-Lee at CERN (1989–1991) to let scientists share documents. It uses the HTTP protocol and the HTML language." }
      ],
      edges: [
        ["rete", "internet", "the biggest one is"],
        ["internet", "clientserver", "model"],
        ["internet", "ip", "identifies with"],
        ["ip", "dns", "found through"],
        ["internet", "pacchetti", "carries"],
        ["pacchetti", "tcpip", "governed by"],
        ["internet", "mezzi", "travels over"],
        ["tcpip", "web", "runs on top"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: packets and speed",
      questions: [
        { type: "num", q: "How many bits are there in 1 byte?", answer: 8, explain: "1 byte = 8 bits." },
        { type: "tf", q: "The packets of the same message always follow the same route.", answer: false, explain: "Each packet can take the least busy route; TCP puts them back in order when they arrive." },
        { type: "num", q: "A 50 MB file with a 100 Mbit/s connection: how many seconds does it take (in ideal conditions)?", answer: 4, unit: "s", explain: "50 × 8 = 400 Mbit; 400 ÷ 100 = 4 s." }
      ]
    }
  ],
  glossary: [
    { t: "Network", d: "A group of devices connected to exchange data." },
    { t: "LAN / WAN", d: "Local area network (home, school) / wide area network (countries, continents)." },
    { t: "Client", d: "Device that requests a service." },
    { t: "Server", d: "Computer that provides services and content to other devices." },
    { t: "Router", d: "Device that directs packets between different networks." },
    { t: "IP address", d: "Number that identifies a device on a network (IPv4 or IPv6)." },
    { t: "DNS", d: "System that translates website names into IP addresses." },
    { t: "Packet", d: "Small portion of data with addresses and a sequence number." },
    { t: "Protocol", d: "A set of rules for communicating on a network (TCP, IP, HTTP…)." },
    { t: "Optical fibre", d: "Glass thread that carries data with pulses of light." },
    { t: "Bit / byte", d: "Units of information: 1 byte = 8 bits." },
    { t: "World Wide Web", d: "Service of pages linked by links that runs on the Internet." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the Internet?", options: ["One single huge computer", "A network of networks connected all over the world", "A program for browsing"], answer: 1, explain: "The Internet connects millions of different networks with shared rules." },
      { type: "mc", q: "Which device sorts packets between different networks?", options: ["Router", "Printer", "Monitor"], answer: 0, explain: "The router decides the path of the packets." },
      { type: "tf", q: "The Internet and the World Wide Web are the same thing.", answer: false, explain: "The Web is one of the services that run on the Internet, like email." },
      { type: "num", q: "What is the biggest number that can appear in each of the 4 parts of an IPv4 address?", answer: 255, explain: "Each part is 8 bits: from 0 to 255." },
      { type: "text", q: "What is the system that translates www.nomesito.it into an IP address called? (acronym)", answer: ["dns"], explain: "DNS = Domain Name System." },
      { type: "order", q: "Put in order what happens when you open a website.", items: ["You type the address in the browser", "The DNS finds the IP address", "The browser sends the request to the server", "The server answers with the packets", "The browser shows the page"], explain: "Name → IP → request → answer → display." },
      { type: "mc", q: "What travels inside an optical fibre?", options: ["Electric current", "Pulses of light", "Sound waves"], answer: 1, explain: "The fibre carries bits as flashes of light." },
      { type: "num", q: "A 200 MB file with a 400 Mbit/s connection: how many seconds does it take (in ideal conditions)?", answer: 4, unit: "s", explain: "200 × 8 = 1600 Mbit; 1600 ÷ 400 = 4 s." },
      { type: "mc", q: "What is the job of the TCP protocol?", options: ["Giving names to websites", "Checking that all the packets arrive and putting them back in order", "Turning on the Wi-Fi"], answer: 1, explain: "TCP makes sure the data arrives complete and in order." },
      { type: "text", q: "In which research centre in Geneva was the World Wide Web born? (acronym)", answer: ["cern", "the cern"], explain: "At CERN, thanks to Tim Berners-Lee." },
      { type: "mc", q: "In which year did ARPANET send its first message?", options: ["1959", "1969", "1991"], answer: 1, explain: "On 29 October 1969, between UCLA and the Stanford Research Institute." },
      { type: "tf", q: "Most of the data between continents travels in undersea cables.", answer: true, explain: "More than 95% of intercontinental traffic goes through the optical-fibre cables on the ocean floor." }
    ]
  }
});

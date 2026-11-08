TOPIC('de', {
  id: "m1-mat-frazioni",
  title: "Brüche und das Rechnen mit Brüchen",
  intro: "In der Grundschule hast du Brüche als „Stücke einer Torte“ kennengelernt. Jetzt werden sie zu echten <b>Zahlen</b>: Wir lernen, sie zu <b>ordnen</b>, mit dem ggT zu <b>kürzen</b>, mit dem kgV zu <b>vergleichen</b> und mit ihnen die <b>vier Grundrechenarten</b> und Potenzen auszuführen – bis hin zu Sachaufgaben und Termen.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Der Bruch als Operator",
      html: `<p>Ein Bruch <b>a/b</b> (mit b ≠ 0) bedeutet: Das Ganze wird in <b>b</b> gleiche Teile geteilt und davon werden <b>a</b> Teile genommen.</p>
<ul>
<li>Der <b>Nenner</b> (b, unten) sagt, in wie viele gleiche Teile das Ganze geteilt wird;</li>
<li>der <b>Zähler</b> (a, oben) sagt, wie viele Teile man nimmt;</li>
<li>der <b>Bruchstrich</b> bedeutet „geteilt durch“: 3/4 = 3 : 4 = 0,75.</li>
</ul>
<p>Der Bruch ist ein <b>Operator</b>: Er wirkt auf eine Größe. Um <b>3/4 von 200</b> zu berechnen, teilt man durch den Nenner und multipliziert mit dem Zähler: 200 : 4 × 3 = 50 × 3 = <b>150</b>.</p>
<p><b>Die Umkehraufgabe</b>: „3/4 einer Zahl sind 150. Wie heißt die Zahl?“ Man rechnet rückwärts: 150 : 3 × 4 = 50 × 4 = <b>200</b>.</p>
<p>Der Nenner <b>darf nicht 0 sein</b>: Man kann ein Ganzes nicht in null Teile teilen!</p>`
    },
    {
      type: "text",
      title: "Echte Brüche, unechte Brüche, Scheinbrüche",
      html: `<table>
<tr><th>Art</th><th>Regel</th><th>Beispiele</th><th>Wert</th></tr>
<tr><td><b>Echter Bruch</b></td><td>Zähler &lt; Nenner</td><td>2/5, 7/9</td><td>kleiner als 1 Ganzes</td></tr>
<tr><td><b>Unechter Bruch</b></td><td>Zähler &gt; Nenner (und kein Vielfaches)</td><td>7/4, 11/3</td><td>größer als 1 Ganzes</td></tr>
<tr><td><b>Scheinbruch</b></td><td>Zähler ist ein Vielfaches des Nenners</td><td>8/4, 6/6, 0/5</td><td>eine natürliche Zahl (2, 1, 0)</td></tr>
</table>
<p>Einen unechten Bruch kann man als <b>gemischte Zahl</b> schreiben: 7/4 = 1 Ganzes und 3/4 (denn 7 : 4 = 1 Rest 3).</p>
<p>Brüche mit Zähler 1 (1/2, 1/3, 1/10 …) heißen <b>Stammbrüche</b>; solche mit Nenner 10, 100, 1000 … heißen <b>Dezimalbrüche</b> (3/10 = 0,3).</p>`
    },
    {
      type: "widget",
      title: "Erkunde die Brüche",
      widget: "fractionPie",
      options: { n: 7, d: 4 },
      caption: "Bei 7/4 braucht man mehr als ein Ganzes: Das ist ein unechter Bruch. Bewege die Regler und suche einen Scheinbruch (z. B. 8/4)."
    },
    {
      type: "text",
      title: "Gleichwertige Brüche und Kürzen",
      html: `<p>Zwei Brüche sind <b>gleichwertig</b> (gleich groß), wenn sie dieselbe Menge darstellen: 1/2 = 2/4 = 3/6 = 50/100.</p>
<p><b>Erweitern und Kürzen</b>: Multipliziert oder dividiert man Zähler und Nenner mit derselben Zahl (ungleich 0), erhält man einen gleichwertigen Bruch.<br>3/5 = (3 × 4)/(5 × 4) = 12/20.</p>
<p><b>Schnelle Probe</b> (Kreuzprodukt): a/b = c/d, wenn <b>a × d = b × c</b>. 3/5 und 12/20: 3 × 20 = 60 und 5 × 12 = 60 ✔️</p>
<p><b>Kürzen</b> heißt, Zähler und Nenner durch einen gemeinsamen Teiler zu dividieren. Ein Bruch ist <b>vollständig gekürzt</b>, wenn Zähler und Nenner <b>teilerfremd</b> sind (ggT = 1). Am schnellsten geht es, wenn man durch den <b>ggT</b> teilt.</p>
<p>Beispiel: 36/48. ggT(36, 48) = 12 → 36/48 = 3/4.<br>Oder schrittweise: 36/48 = 18/24 = 9/12 = 3/4.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Arten und Gleichwertigkeit",
      questions: [
        { type: "mc", q: "Welcher Bruch ist ein Scheinbruch?", options: ["5/3", "12/4", "3/12", "7/8"], answer: 1, explain: "12 ist ein Vielfaches von 4: 12/4 = 3." },
        { type: "num", q: "Wie viel sind 2/5 von 35?", answer: 14, tol: 0, explain: "35 : 5 = 7; 7 × 2 = 14." },
        { type: "mc", q: "Kürze 24/36 vollständig.", options: ["12/18", "4/6", "2/3", "6/9"], answer: 2, explain: "ggT(24, 36) = 12: 24/36 = 2/3." },
        { type: "tf", q: "4/6 und 10/15 sind gleichwertig.", answer: true, explain: "Beide lassen sich zu 2/3 kürzen; Kreuzprodukt: 4 × 15 = 60 = 6 × 10." }
      ]
    },
    {
      type: "text",
      title: "Brüche vergleichen",
      html: `<ul>
<li><b>Gleicher Nenner</b>: Der Bruch mit dem größeren Zähler ist größer. 5/8 &gt; 3/8.</li>
<li><b>Gleicher Zähler</b>: Der Bruch mit dem <b>kleineren</b> Nenner ist größer (die Teile sind größer!). 3/4 &gt; 3/7.</li>
<li><b>Allgemeiner Fall</b>: Man verwandelt sie in gleichwertige Brüche mit demselben Nenner, dem <b>Hauptnenner</b>, also dem <b>kgV</b> der Nenner.</li>
</ul>
<p>Beispiel: Vergleiche 5/6 und 7/9. kgV(6, 9) = 18.<br>5/6 = 15/18; 7/9 = 14/18 → <b>5/6 &gt; 7/9</b>.</p>
<p>Schnelle Methode mit dem <b>Kreuzprodukt</b>: 5 × 9 = 45 und 6 × 7 = 42; da 45 &gt; 42, gilt 5/6 &gt; 7/9.</p>
<p>Brüche kann man auch auf den <b>Zahlenstrahl</b> legen: Zwischen 0 und 1 liegen alle echten Brüche. Zwischen zwei Brüchen liegt immer noch ein weiterer: Zum Beispiel liegt zwischen 1/3 und 1/2 der Bruch 5/12. Brüche liegen <b>dicht</b> – anders als die natürlichen Zahlen!</p>`
    },
    {
      type: "svg",
      title: "Brüche auf dem Zahlenstrahl und im Vergleich",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<line x1="40" y1="70" x2="560" y2="70" stroke="#0f172a" stroke-width="3"/>
<g stroke="#0f172a" stroke-width="3"><line x1="40" y1="58" x2="40" y2="82"/><line x1="300" y1="58" x2="300" y2="82"/><line x1="560" y1="58" x2="560" y2="82"/></g>
<g font-size="18" font-weight="bold" text-anchor="middle" fill="#0f172a"><text x="40" y="105">0</text><text x="300" y="105">1</text><text x="560" y="105">2</text></g>
<circle cx="235" cy="70" r="8" fill="#2563eb"/><text x="235" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#1d4ed8">3/4</text>
<circle cx="495" cy="70" r="8" fill="#dc2626"/><text x="495" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#b91c1c">7/4</text>
<circle cx="170" cy="70" r="8" fill="#16a34a"/><text x="170" y="45" font-size="17" font-weight="bold" text-anchor="middle" fill="#15803d">1/2</text>
<text x="40" y="150" font-size="17" fill="#0f172a">5/6 =</text>
<g stroke="#ffffff" stroke-width="2">
<rect x="100" y="132" width="330" height="26" fill="#e5e7eb"/>
<rect x="100" y="132" width="55" height="26" fill="#3b82f6"/><rect x="155" y="132" width="55" height="26" fill="#3b82f6"/><rect x="210" y="132" width="55" height="26" fill="#3b82f6"/><rect x="265" y="132" width="55" height="26" fill="#3b82f6"/><rect x="320" y="132" width="55" height="26" fill="#3b82f6"/>
</g>
<text x="40" y="200" font-size="17" fill="#0f172a">7/9 =</text>
<g stroke="#ffffff" stroke-width="2">
<rect x="100" y="182" width="330" height="26" fill="#e5e7eb"/>
<rect x="100" y="182" width="36.7" height="26" fill="#f97316"/><rect x="136.7" y="182" width="36.7" height="26" fill="#f97316"/><rect x="173.3" y="182" width="36.7" height="26" fill="#f97316"/><rect x="210" y="182" width="36.7" height="26" fill="#f97316"/><rect x="246.7" y="182" width="36.7" height="26" fill="#f97316"/><rect x="283.3" y="182" width="36.7" height="26" fill="#f97316"/><rect x="320" y="182" width="36.7" height="26" fill="#f97316"/>
</g>
<text x="450" y="152" font-size="16" fill="#1d4ed8" font-weight="bold">= 15/18</text>
<text x="450" y="202" font-size="16" fill="#c2410c" font-weight="bold">= 14/18</text>
<text x="300" y="245" font-size="16" text-anchor="middle" fill="#334155">der blaue Balken ist etwas länger: 5/6 &gt; 7/9</text>
</svg>`,
      caption: "Echte Brüche liegen zwischen 0 und 1, unechte Brüche hinter der 1. Das Streifenmodell hilft beim Vergleichen."
    },
    {
      type: "text",
      title: "Addition und Subtraktion",
      html: `<p><b>Mit gleichem Nenner</b>: Man addiert (oder subtrahiert) die Zähler und behält den Nenner.<br>2/9 + 5/9 = 7/9 &nbsp;&nbsp; 7/8 − 3/8 = 4/8 = 1/2</p>
<p><b>Mit verschiedenen Nennern</b>:</p>
<ol>
<li>Man berechnet das <b>kgV der Nenner</b> (der neue gemeinsame Nenner);</li>
<li>man teilt das kgV durch jeden Nenner und multipliziert das Ergebnis mit dem Zähler;</li>
<li>man addiert (oder subtrahiert) die neuen Zähler;</li>
<li>man <b>kürzt</b> das Ergebnis, wenn möglich.</li>
</ol>
<p>Beispiel: <b>3/4 + 5/6</b>. kgV(4, 6) = 12.<br>12 : 4 × 3 = 9; 12 : 6 × 5 = 10 → 9/12 + 10/12 = <b>19/12</b> (= 1 und 7/12).</p>
<p>Beispiel: <b>2 − 3/5</b> = 10/5 − 3/5 = <b>7/5</b> (ein Ganzes sind 5/5, zwei Ganze sind 10/5).</p>
<p><b>Typischer Fehler</b>: 1/2 + 1/3 ergibt <b>nicht</b> 2/5! Es ergibt 3/6 + 2/6 = <b>5/6</b>. Nenner werden nie addiert.</p>`
    },
    {
      type: "text",
      title: "Multiplikation, Division und Potenz",
      html: `<p><b>Multiplikation</b>: Zähler mal Zähler, Nenner mal Nenner.<br>2/3 × 4/5 = 8/15</p>
<p>Es lohnt sich, <b>vorher zu kürzen</b>, auch „über Kreuz“ (ein Zähler mit dem Nenner des anderen Bruchs):<br>6/7 × 14/9 → 6 und 9 werden durch 3 geteilt, 14 und 7 durch 7 → 2/1 × 2/3 = <b>4/3</b>.</p>
<p><b>Der Kehrwert</b> eines Bruchs entsteht, indem man Zähler und Nenner vertauscht: Der Kehrwert von 3/5 ist 5/3. Ein Bruch mal sein Kehrwert ergibt immer 1. Die 0 hat keinen Kehrwert.</p>
<p><b>Division</b>: Man multipliziert den ersten Bruch mit dem <b>Kehrwert</b> des zweiten.<br>3/4 : 9/8 = 3/4 × 8/9 = (ich kürze 3 mit 9 und 4 mit 8) 1/1 × 2/3 = <b>2/3</b>.</p>
<p><b>Potenz</b>: Man potenziert sowohl den Zähler als auch den Nenner.<br>(2/3)³ = 2³/3³ = 8/27. Es gelten dieselben Rechenregeln wie bei Potenzen natürlicher Zahlen, und (a/b)⁰ = 1.</p>
<p>In <b>Termen</b> mit Brüchen gilt immer dieselbe Reihenfolge: Klammern → Potenzen → Punktrechnung (× und :) → Strichrechnung (+ und −).</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Die Geburtstagstorte",
      html: `<p>Auf Matteos Fest isst Luca <b>1/4</b> der Torte und Sofia <b>1/3</b>. Welcher Bruchteil der Torte bleibt übrig?</p>
<ol>
<li>Gegessen: 1/4 + 1/3 = 3/12 + 4/12 = <b>7/12</b>.</li>
<li>Übrig: 1 − 7/12 = 12/12 − 7/12 = <b>5/12</b>.</li>
</ol>
<p>Die Torte wog <b>1.200 g</b>. Wie viele Gramm bleiben übrig? 5/12 von 1.200 = 1.200 : 12 × 5 = <b>500 g</b>.</p>
<p>Der Rest wird in Stücke von <b>1/24</b> der Torte geteilt: Wie viele Stücke erhält man? 5/12 : 1/24 = 5/12 × 24/1 = <b>10 Stücke</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Der Preisnachlass und die Umkehraufgabe",
      html: `<p><b>1.</b> Ein Fahrrad kostet <b>€ 240</b>. Im Ausverkauf wird es um <b>1/5</b> billiger. Was kostet es jetzt?<br>Nachlass: 240 : 5 = € 48. Preis: 240 − 48 = <b>€ 192</b> (oder: Ich zahle 4/5 → 240 : 5 × 4 = 192).</p>
<p><b>2.</b> Giulia hat <b>3/8</b> ihrer Ersparnisse ausgegeben, das sind <b>€ 45</b>. Wie viel hatte sie insgesamt?<br>Umkehraufgabe: 45 : 3 × 8 = 15 × 8 = <b>€ 120</b>. Ihr bleiben 120 − 45 = <b>€ 75</b> (die 5/8).</p>
<p>Eine gute Methode für solche Aufgaben ist das <b>Streifenmodell</b>: Zeichne einen Streifen, der in 8 Teile geteilt ist, färbe 3 davon und schreibe „45 €“ darüber. Ein Teil ist 15 € wert, der ganze Streifen 8 × 15 = 120 €.</p>`
    },
    {
      type: "curiosity",
      title: "Die Ägypter benutzten nur Stammbrüche",
      html: `<p>Die alten Ägypter schrieben fast alle Brüche als <b>Summe verschiedener Stammbrüche</b> (mit Zähler 1). Zum Beispiel 3/4 = 1/2 + 1/4 und 2/5 = 1/3 + 1/15. Der <b>Papyrus Rhind</b> (um 1650 v. Chr.) enthält eine Tabelle, um 2/n auf diese Weise zu schreiben.</p>
<p>Das klingt kompliziert, war aber praktisch: Um 3 Brote unter 4 Personen aufzuteilen, bekommt jeder ein halbes Brot plus ein Viertel. Leicht zu schneiden!</p>
<p>Den waagrechten <b>Bruchstrich</b>, den wir benutzen, machte in Europa Fibonacci in seinem <i>Liber abaci</i> (1202) bekannt; er hatte ihn von arabischen Mathematikern gelernt.</p>`
    },
    {
      type: "curiosity",
      title: "Brüche in der Musik",
      html: `<p>Musiknoten sind Brüche! Die <b>ganze Note</b> dauert 1 Ganzes, die <b>halbe Note</b> 1/2, die <b>Viertelnote</b> 1/4, die <b>Achtelnote</b> 1/8, die <b>Sechzehntelnote</b> 1/16. Ein <b>3/4</b>-Takt, der am Anfang der Noten steht (der Walzer), bedeutet, dass jeder Takt 3 Noten zu je 1/4 enthält.</p>
<p>Auch dass Töne „gut zusammenpassen“, verdanken sie den Brüchen: <b>Pythagoras</b> entdeckte, dass eine halb so lange Saite (1/2) eine <b>Oktave</b> höher klingt und eine Saite von 2/3 der Länge eine <b>Quinte</b>. Einfache Brüche ergeben die harmonischsten Klänge!</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege zum Verstehen",
      intro: "Wenn dir die Regeln für Brüche wie Zauberei vorkommen, probiere diese Methoden aus anderen Ländern.",
      tabs: [
        {
          label: "🇸🇬 Streifenmodell (Singapur)",
          html: `<p>In Singapur, einem der Länder mit den besten Mathematikergebnissen der Welt, löst man Aufgaben mit Brüchen, indem man <b>Streifen</b> zeichnet (<i>bar model</i>). Aufgabe: „2/5 einer Klasse sind Jungen. Es gibt 15 Mädchen. Wie viele Schüler sind es insgesamt?“</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#ffffff"/><g stroke="#0f172a" stroke-width="2"><rect x="50" y="70" width="100" height="50" fill="#93c5fd"/><rect x="150" y="70" width="100" height="50" fill="#93c5fd"/><rect x="250" y="70" width="100" height="50" fill="#f9a8d4"/><rect x="350" y="70" width="100" height="50" fill="#f9a8d4"/><rect x="450" y="70" width="100" height="50" fill="#f9a8d4"/></g><g font-size="18" font-weight="bold" text-anchor="middle"><text x="150" y="55" fill="#1d4ed8">Jungen: 2/5</text><text x="400" y="55" fill="#be185d">Mädchen: 3/5 = 15</text><text x="300" y="102" fill="#0f172a">5</text><text x="400" y="102" fill="#0f172a">5</text><text x="500" y="102" fill="#0f172a">5</text><text x="100" y="102" fill="#0f172a">5</text><text x="200" y="102" fill="#0f172a">5</text></g><text x="300" y="160" font-size="18" text-anchor="middle" fill="#0f172a">3 Teile = 15 → 1 Teil = 5</text><text x="300" y="195" font-size="20" font-weight="bold" text-anchor="middle" fill="#15803d">5 Teile = 25 Schüler</text></svg>`
        },
        {
          label: "🦋 Der Schmetterling (USA)",
          html: `<p>In den Vereinigten Staaten benutzen viele Schüler die „<b>Butterfly-Methode</b>“, um zwei Brüche zu addieren: Man multipliziert <b>über Kreuz</b> (die Flügel des Schmetterlings), addiert die Produkte und erhält den Zähler, und multipliziert die Nenner (der Körper).</p><p>2/3 + 1/4: Flügel 2 × 4 = 8 und 3 × 1 = 3 → Zähler 8 + 3 = 11; Körper 3 × 4 = 12 → <b>11/12</b>.</p><p>Das funktioniert immer, weil das Produkt der Nenner als gemeinsamer Nenner dient. Aber Vorsicht: Bei großen Zahlen lohnt sich das kgV, sonst muss man danach viel kürzen (1/6 + 1/9 ergibt mit dem Schmetterling 15/54 = 5/18).</p>`
        },
        {
          label: "🧊 Multiplizieren mit der Fläche (3D)",
          html: `<p>Wie sieht man 2/3 × 3/4? Nimm ein Rechteck aus <b>3 × 4 = 12</b> Würfelchen (der Nenner des Ergebnisses). Färbe 2 Zeilen von 3 und 3 Spalten von 4: Der doppelt gefärbte Teil ist ein Rechteck aus <b>2 × 3 = 6</b> Würfelchen. Also ist 2/3 × 3/4 = 6/12 = 1/2. Zähler mal Zähler, Nenner mal Nenner: Darum funktioniert es!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 3, b: 4 }
        },
        {
          label: "📏 Auf dem Zahlenstrahl",
          html: "<p>Teile jedes Ganze in 4 Teile: Jeder Sprung ist 1/4. Wenn du die Sprünge zählst, kannst du addieren: 3/4 + 2/4 = 5 Sprünge = 5/4, also ein Ganzes und ein Viertel. Die Markierungen zeigen 3 (= 3/4) und 5 (= 5/4), wenn du dir jeden Strich als ein Viertel denkst.</p>",
          widget: "numberLine",
          options: { min: 0, max: 8, step: 1, marks: [3, 5] }
        },
        {
          label: "🍕 Warum man den Bruch „umdreht“",
          html: `<p>Warum multipliziert man beim Teilen mit dem Kehrwert? Denk an eine konkrete Frage: <b>Wie viele Pizzastücke zu 1/8 gibt es in 3 Pizzen?</b> Jede Pizza hat 8 Stücke, also 3 × 8 = 24. Du hast 3 : 1/8 = 3 × 8/1 = 24 gerechnet!</p><p>Durch einen Bruch zu teilen heißt zu fragen: „<b>Wie oft passt er hinein?</b>“ Durch 1/8 zu teilen heißt, die Achtel zu zählen: Man multipliziert mit 8. Wenn die Stücke 3/8 groß sind, passen sie dreimal weniger oft hinein: 3 × 8/3 = 8 Stücke.</p>`
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Rechenarten",
      questions: [
        { type: "mc", q: "2/5 + 1/3 = ?", options: ["3/8", "11/15", "3/15", "2/15"], answer: 1, explain: "kgV(5, 3) = 15: 6/15 + 5/15 = 11/15." },
        { type: "mc", q: "5/6 × 3/10 = ?", options: ["15/60", "1/4", "8/16", "1/2"], answer: 1, explain: "Ich kürze über Kreuz 5 mit 10 und 3 mit 6: 1/2 × 1/2 = 1/4." },
        { type: "mc", q: "4/9 : 2/3 = ?", options: ["8/27", "2/3", "6/9", "3/2"], answer: 1, explain: "4/9 × 3/2 = 12/18 = 2/3." },
        { type: "tf", q: "Der Kehrwert von 7 ist 1/7.", answer: true, explain: "7 = 7/1, vertauscht ergibt das 1/7. Tatsächlich ist 7 × 1/7 = 1." }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte: Woher die Regeln der Bruchrechnung kommen",
      nodes: [
        { id: "dividere", label: "In gleiche Teile teilen", x: 50, y: 5, color: "#64748b", html: "Das Bedürfnis, Brot, Land und Erbschaften aufzuteilen.", why: "Ägypter und Babylonier benutzten Brüche schon vor 4.000 Jahren, um Ernten zu verteilen und Felder nach den Nilüberschwemmungen zu vermessen." },
        { id: "frazione", label: "Bruch a/b", x: 50, y: 20, color: "#2563eb", html: "Operator: Teile durch b und multipliziere mit a.", why: "Das Wort kommt vom lateinischen „frangere“ = brechen. Ein Bruch ist auch das Ergebnis der Division a : b, darum ist b ≠ 0." },
        { id: "tipi", label: "Echte, unechte Brüche, Scheinbrüche", x: 15, y: 34, color: "#0ea5e9", html: "Kleiner als 1, größer als 1, gleich einer natürlichen Zahl.", why: "Es hängt vom Vergleich zwischen Zähler und Nenner ab: Scheinbrüche zeigen, dass die natürlichen Zahlen ein Sonderfall der Brüche sind." },
        { id: "invariantiva", label: "Erweitern und Kürzen", x: 50, y: 38, color: "#16a34a", html: "Zähler und Nenner mit derselben Zahl × oder :.", why: "Es ist dieselbe Eigenschaft wie bei der Division: (a × k) : (b × k) = a : b. Jedes Stück in 2 zu schneiden verdoppelt die Stücke, ändert aber nicht die Menge." },
        { id: "mcd", label: "Kürzen (ggT)", x: 25, y: 56, color: "#9333ea", html: "Man teilt durch den ggT: vollständig gekürzter Bruch.", why: "Der Fundamentalsatz der Arithmetik garantiert, dass die gekürzte Form eindeutig ist: Jede rationale Zahl hat nur einen „Vertreter“ in gekürzter Form." },
        { id: "mcm", label: "Hauptnenner (kgV)", x: 75, y: 56, color: "#ea580c", html: "Zum Vergleichen, Addieren und Subtrahieren.", why: "Man kann nur „Gleichartiges“ addieren: Drittel mit Dritteln, Viertel mit Vierteln. Das kgV ist die kleinste gemeinsame „Art“." },
        { id: "moltdiv", label: "× und : (Kehrwert)", x: 25, y: 76, color: "#dc2626", html: "Produkt: Zähler × Zähler, Nenner × Nenner. Division: × den Kehrwert.", why: "Das Produkt sieht man an der Fläche eines Rechtecks; durch a/b zu teilen heißt zu fragen, wie oft a/b in die Zahl passt, also mit b/a zu multiplizieren." },
        { id: "addsott", label: "+ und −", x: 75, y: 76, color: "#f59e0b", html: "Gleicher Nenner, dann werden die Zähler addiert.", why: "1/2 + 1/3 ≠ 2/5: Das sieht man an einer Torte. Die Ägypter umgingen das Problem, indem sie alles als Summe von Stammbrüchen schrieben." },
        { id: "razionali", label: "Rationale Zahlen ℚ", x: 50, y: 93, color: "#0f766e", html: "Die Menge aller Brüche: eine neue Zahlenmenge.", why: "Mit Brüchen ist das Teilen immer möglich (außer durch 0). Der Name kommt vom lateinischen „ratio“ = Verhältnis. Fibonacci (1202) machte den Bruchstrich in Europa bekannt." }
      ],
      edges: [["dividere", "frazione", "führt zu"], ["frazione", "tipi", "wird eingeteilt in"], ["frazione", "invariantiva", "hat die Eigenschaft"], ["invariantiva", "mcd", "erlaubt das Kürzen"], ["invariantiva", "mcm", "erlaubt das Umformen"], ["mcd", "moltdiv", "vorher kürzen"], ["mcm", "addsott", "nötig für"], ["moltdiv", "razionali", "bilden"], ["addsott", "razionali", "bilden"]]
    }
  ],
  glossary: [
    { t: "Bruch", d: "Zahl der Form a/b (b ≠ 0), die a Teile eines in b gleiche Teile geteilten Ganzen angibt." },
    { t: "Zähler", d: "Die Zahl über dem Bruchstrich: wie viele Teile man nimmt." },
    { t: "Nenner", d: "Die Zahl unter dem Bruchstrich: in wie viele Teile das Ganze geteilt wird." },
    { t: "Echter Bruch", d: "Bruch mit einem Zähler, der kleiner als der Nenner ist (er ist weniger als 1 wert)." },
    { t: "Unechter Bruch", d: "Bruch mit einem Zähler, der größer als der Nenner ist (er ist mehr als 1 wert)." },
    { t: "Scheinbruch", d: "Bruch, dessen Zähler ein Vielfaches des Nenners ist: Er hat den Wert einer natürlichen Zahl." },
    { t: "Gleichwertige Brüche", d: "Brüche, die dieselbe Menge darstellen." },
    { t: "Vollständig gekürzt", d: "Bruch, bei dem Zähler und Nenner teilerfremd sind." },
    { t: "Hauptnenner", d: "Das kgV der Nenner, das man zum Vergleichen und Addieren benutzt." },
    { t: "Kehrwert", d: "Bruch, den man erhält, wenn man Zähler und Nenner vertauscht." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Wie viel sind 5/8 von 64?", answer: 40, tol: 0, explain: "64 : 8 = 8; 8 × 5 = 40." },
      { type: "num", q: "3/7 einer Zahl sind 21. Wie heißt die Zahl?", answer: 49, tol: 0, explain: "Umkehraufgabe: 21 : 3 × 7 = 49." },
      { type: "mc", q: "Der Bruch 9/4 ist …", options: ["echt", "unecht", "ein Scheinbruch", "ein Stammbruch"], answer: 1, explain: "9 > 4 und 9 ist kein Vielfaches von 4." },
      { type: "mc", q: "Wie lautet der Bruch 45/60 vollständig gekürzt?", options: ["9/12", "3/4", "15/20", "5/6"], answer: 1, explain: "ggT(45, 60) = 15: 3/4." },
      { type: "mc", q: "Welcher Bruch ist größer?", options: ["3/5", "4/7", "Sie sind gleich"], answer: 0, explain: "Kreuzprodukt: 3 × 7 = 21 > 5 × 4 = 20, also 3/5 > 4/7." },
      { type: "mc", q: "5/6 − 1/4 = ?", options: ["4/2", "7/12", "1/2", "4/24"], answer: 1, explain: "kgV(6, 4) = 12: 10/12 − 3/12 = 7/12." },
      { type: "mc", q: "(3/4)² = ?", options: ["6/8", "9/16", "9/4", "3/16"], answer: 1, explain: "Man quadriert Zähler und Nenner: 9/16." },
      { type: "mc", q: "7/10 : 14/5 = ?", options: ["1/4", "49/50", "4", "98/50"], answer: 0, explain: "7/10 × 5/14 = (ich kürze 7 mit 14 und 5 mit 10) 1/2 × 1/2 = 1/4." },
      { type: "tf", q: "1/2 + 1/3 = 2/5", answer: false, explain: "Nenner werden nicht addiert: 3/6 + 2/6 = 5/6." },
      { type: "num", q: "Ein Buch hat 240 Seiten. Luca hat 3/8 davon gelesen. Wie viele Seiten fehlen ihm noch?", answer: 150, tol: 0, unit: "Seiten", explain: "Gelesen: 240 : 8 × 3 = 90. Es fehlen 240 − 90 = 150 (die 5/8)." },
      { type: "order", q: "Ordne vom kleinsten zum größten", items: ["1/4", "1/3", "1/2", "2/3", "5/4"], explain: "In Zwölfteln: 3/12, 4/12, 6/12, 8/12, 15/12." },
      { type: "mc", q: "Was ist der Kehrwert von 2/9?", options: ["9/2", "2/9", "−2/9", "1/9"], answer: 0, explain: "Man vertauscht Zähler und Nenner: 9/2." }
    ],
    gen: [["fracEquiv", 1], ["fracAdd", 2]]
  }
});

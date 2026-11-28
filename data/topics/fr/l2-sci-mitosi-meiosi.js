TOPIC('fr', {
  id: "l2-sci-mitosi-meiosi",
  title: "Mitose et méiose",
  intro: "Un nouveau-né est issu d'une seule cellule, le zygote. Adulte, il aura des dizaines de milliers de milliards de cellules, et il continuera à en produire des millions chaque seconde pour remplacer les anciennes. Comment une cellule devient-elle deux cellules sans perdre la moindre information génétique ? Et comment deux parents produisent-ils un enfant qui n'est identique à aucun des deux ? Les réponses sont la <b>mitose</b>, qui produit des copies identiques, et la <b>méiose</b>, qui produit les gamètes, chaque fois différents. Avec le <b>cycle cellulaire</b>, elles sont le sujet de cette leçon.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Chromosomes, ADN et nombre de chromosomes",
      html: `<p>L'ADN d'une cellule eucaryote est réparti en molécules linéaires enroulées autour de protéines (les <i>histones</i>) : c'est la <b>chromatine</b>. Au moment de la division, la chromatine se condense jusqu'à former les <b>chromosomes</b>, visibles au microscope optique. Un chromosome dupliqué est composé de deux <b>chromatides sœurs</b>, des copies identiques réunies en un point appelé <b>centromère</b>.</p>
<p>Dans l'espèce humaine, chaque cellule du corps (cellule <b>somatique</b>) possède <b>46 chromosomes</b>, organisés en <b>23 paires de chromosomes homologues</b> : dans chaque paire, un chromosome vient du père et l'autre de la mère. Les homologues ont la même forme et les mêmes gènes (même s'ils peuvent en porter des versions différentes, les <b>allèles</b>). Vingt-deux paires sont des <b>autosomes</b> ; la vingt-troisième est la paire des <b>chromosomes sexuels</b> : XX chez la femme, XY chez l'homme.</p>
<ul>
<li>Une cellule avec des paires complètes est <b>diploïde</b> (<b>2n</b>) : chez l'être humain, 2n = 46.</li>
<li>Les <b>gamètes</b> (ovule et spermatozoïde) n'ont qu'un chromosome par paire : ils sont <b>haploïdes</b> (<b>n</b>) : chez l'être humain, n = 23.</li>
<li>La fécondation réunit deux gamètes : n + n = 2n, et le nombre d'origine est rétabli.</li>
</ul>
<p>Le nombre de chromosomes est propre à chaque espèce, mais il ne dit pas à quel point un organisme est « évolué » : le chimpanzé a 48 chromosomes, le chien 78, le pois 14, le riz 24, un carassin environ 100, et une espèce de fourmi australienne (<i>Myrmecia pilosula</i>) seulement 2 (et les mâles 1).</p>`
    },
    {
      type: "text",
      title: "Le cycle cellulaire",
      html: `<p>Une cellule qui se divise parcourt un trajet cyclique : le <b>cycle cellulaire</b>. Il comprend deux grandes périodes :</p>
<ul>
<li>L'<b>interphase</b> : c'est la période de croissance et de préparation (elle occupe en général 90 % du cycle, environ 22-23 heures sur 24 pour une cellule humaine en culture). Elle comprend :
<ul>
<li><b>G1</b> (Gap 1) : la cellule grandit, assure ses fonctions, produit des protéines et des organites ;</li>
<li><b>S</b> (synthèse) : l'ADN est <b>répliqué</b> ; à la fin, chaque chromosome est formé de deux chromatides sœurs. Le centrosome se duplique ;</li>
<li><b>G2</b> (Gap 2) : nouvelle croissance, contrôle de la réplication, préparation à la division.</li>
</ul></li>
<li>La <b>phase M</b> (mitose + cytodiérèse) : division du noyau puis du cytoplasme, environ une heure.</li>
</ul>
<p>Certaines cellules sortent du cycle et restent dans une phase de repos, <b>G0</b> : les neurones matures et les cellules musculaires ne se divisent plus ; d'autres (comme celles du foie) peuvent rentrer dans le cycle si une réparation est nécessaire.</p>
<p>Le cycle est surveillé par des <b>points de contrôle</b> (checkpoints), surtout à la fin de G1, en G2 et en métaphase, où des protéines comme les <b>cyclines</b> et les <b>kinases dépendantes des cyclines</b> (Cdk) décident s'il faut continuer : « l'ADN est-il intact ? a-t-il été copié en entier ? les chromosomes sont-ils tous attachés au fuseau ? ». Si l'ADN est endommagé, la protéine <b>p53</b> bloque le cycle ou déclenche la mort cellulaire programmée (<b>apoptose</b>). Si ces contrôles échouent, la cellule peut devenir cancéreuse.</p>`
    },
    {
      type: "svg",
      title: "Le cycle cellulaire",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="300" cy="150" r="110" fill="none" stroke="#cbd5e1" stroke-width="40"/>
<path d="M300 40 A110 110 0 0 1 395 205" fill="none" stroke="#22c55e" stroke-width="40"/>
<path d="M395 205 A110 110 0 0 1 220 240" fill="none" stroke="#f59e0b" stroke-width="40"/>
<path d="M220 240 A110 110 0 0 1 190 85" fill="none" stroke="#3b82f6" stroke-width="40"/>
<path d="M190 85 A110 110 0 0 1 300 40" fill="none" stroke="#ef4444" stroke-width="40"/>
<text x="300" y="150" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">Cycle</text>
<text x="300" y="172" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">cellulaire</text>
<text x="450" y="95" font-size="16" font-weight="bold" fill="#166534">G1 : croissance</text>
<text x="440" y="250" font-size="16" font-weight="bold" fill="#92400e">S : réplication ADN</text>
<text x="60" y="230" font-size="16" font-weight="bold" fill="#1e40af">G2 : préparation</text>
<text x="60" y="55" font-size="16" font-weight="bold" fill="#991b1b">M : division</text>
<text x="300" y="285" font-size="14" fill="#475569" text-anchor="middle">G1 + S + G2 = interphase (la plus grande partie du temps)</text>
</svg>`,
      caption: "Le cycle d'une cellule : G1, S et G2 forment l'interphase ; la phase M (mitose et cytodiérèse) est brève."
    },
    {
      type: "text",
      title: "La mitose en cinq étapes",
      html: `<p>La <b>mitose</b> (terme introduit par Walther Flemming en 1882, du grec <i>mitos</i>, fil) répartit les chromosomes dupliqués entre deux noyaux identiques. Une cellule 2n produit deux cellules 2n, génétiquement identiques à la cellule mère.</p>
<ol>
<li><b>Prophase</b> : la chromatine se condense en chromosomes (chacun avec deux chromatides sœurs) ; le nucléole disparaît ; les centrosomes migrent vers les pôles et, à partir des centrioles, se forme le <b>fuseau mitotique</b> de microtubules. En <b>prométaphase</b>, l'enveloppe nucléaire se fragmente et les microtubules s'attachent aux chromosomes au niveau des <b>kinétochores</b> (structures protéiques du centromère).</li>
<li><b>Métaphase</b> : les chromosomes s'alignent dans le plan équatorial de la cellule (<b>plaque métaphasique</b>). C'est le meilleur moment pour compter et photographier les chromosomes (le <b>caryotype</b>).</li>
<li><b>Anaphase</b> : les centromères se divisent et les chromatides sœurs, devenues des chromosomes à part entière, sont tirées vers des pôles opposés par le raccourcissement des microtubules. Chaque pôle reçoit un jeu complet.</li>
<li><b>Télophase</b> : les chromosomes se décondensent, l'enveloppe nucléaire et les nucléoles réapparaissent : deux noyaux fils.</li>
<li><b>Cytodiérèse</b> (ce n'est pas une phase de la mitose, mais elle l'accompagne) : le cytoplasme se divise. Dans les cellules animales, un <b>anneau contractile</b> d'actine et de myosine forme un sillon d'étranglement ; dans les cellules végétales, la paroi empêche l'étranglement et il se forme une <b>plaque cellulaire</b> au milieu de la cellule, qui devient la nouvelle paroi.</li>
</ol>
<p>Résultat : <b>deux cellules filles qui ont le même nombre de chromosomes et le même ADN que la cellule mère</b>.</p>`
    },
    {
      type: "svg",
      title: "Les phases de la mitose (cellule avec 2n = 4)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g fill="#fff" stroke="#475569" stroke-width="3"><circle cx="70" cy="130" r="55"/><circle cx="195" cy="130" r="55"/><circle cx="320" cy="130" r="55"/><circle cx="445" cy="130" r="55"/></g>
<ellipse cx="540" cy="130" rx="55" ry="45" fill="#fff" stroke="#475569" stroke-width="3"/>
<g stroke-width="6" stroke-linecap="round" fill="none">
<path d="M45 115 l10 15 M60 110 l10 18" stroke="#dc2626"/><path d="M70 140 l12 -10 M88 148 l14 -8" stroke="#2563eb"/>
<line x1="170" y1="110" x2="190" y2="125" stroke="#dc2626"/><line x1="190" y1="110" x2="170" y2="125" stroke="#dc2626"/><line x1="210" y1="140" x2="225" y2="155" stroke="#2563eb"/><line x1="225" y1="140" x2="210" y2="155" stroke="#2563eb"/>
<line x1="320" y1="85" x2="320" y2="175" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
<path d="M305 100 l30 0 M305 125 l30 0" stroke="#dc2626"/><path d="M305 150 l30 0 M305 170 l30 0" stroke="#2563eb"/>
<path d="M425 90 l12 -8 M452 90 l-12 -8 M425 170 l12 8 M452 170 l-12 8" stroke="#dc2626"/><path d="M428 110 l10 -8 M450 110 l-10 -8 M428 150 l10 8 M450 150 l-10 8" stroke="#2563eb"/>
<circle cx="520" cy="130" r="16" fill="#fecaca" stroke="#dc2626" stroke-width="3"/><circle cx="560" cy="130" r="16" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
<line x1="540" y1="87" x2="540" y2="173" stroke="#475569" stroke-width="4" stroke-dasharray="3 3"/>
</g>
<text x="70" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Prophase</text>
<text x="195" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Prométaphase</text>
<text x="320" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Métaphase</text>
<text x="445" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Anaphase</text>
<text x="540" y="220" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Télophase</text>
<text x="300" y="265" font-size="14" fill="#475569" text-anchor="middle">Rouge et bleu : deux paires de chromosomes homologues (une paire de grands, une de petits)</text>
</svg>`,
      caption: "En métaphase, les chromosomes sont dans le plan équatorial ; en anaphase, les chromatides sœurs se séparent vers des pôles opposés."
    },
    {
      type: "widget",
      title: "Que se passe-t-il à chaque phase ?",
      widget: "match",
      options: { pairs: [
        ["Prophase", "La chromatine se condense en chromosomes, le fuseau se forme"],
        ["Métaphase", "Les chromosomes s'alignent dans le plan équatorial"],
        ["Anaphase", "Les chromatides sœurs se séparent vers les pôles"],
        ["Télophase", "Les enveloppes nucléaires se reforment"],
        ["Cytodiérèse", "Le cytoplasme se divise en deux cellules"],
        ["Phase S", "L'ADN est répliqué"]
      ] },
      caption: "Associe chaque phase à sa description."
    },
    {
      type: "example",
      title: "Compter les cellules : la croissance exponentielle",
      html: `<p>À chaque mitose, le nombre de cellules double. À partir d'une seule cellule, après <i>n</i> divisions, on en a <b>2ⁿ</b> :</p>
<ul>
<li>après 10 divisions : 2¹⁰ = <b>1024</b> ;</li>
<li>après 20 : 2²⁰ ≈ <b>un million</b> ;</li>
<li>après 30 : 2³⁰ ≈ <b>un milliard</b>.</li>
</ul>
<p>Avec une division toutes les 24 heures, au bout de 30 jours, une cellule en aurait donné plus d'un milliard. Si toutes les divisions se faisaient sans frein, le corps serait hors de contrôle : voilà pourquoi l'organisme régule le cycle par de nombreux freins. Un cancer naît justement de cellules qui ont perdu leurs freins (mutations dans les gènes qui régulent le cycle, comme <i>p53</i>) et qui continuent à se diviser. Une bactérie comme <i>Escherichia coli</i>, avec une division toutes les 20 minutes, accomplit 30 générations en 10 heures : à partir d'une seule cellule, il en naîtrait plus d'un milliard.</p>`
    },
    {
      type: "text",
      title: "La reproduction asexuée",
      html: `<p>Lorsqu'un organisme se reproduit uniquement par mitose (ou par simple division cellulaire), sans fusion de gamètes, on parle de <b>reproduction asexuée</b> : les descendants sont des <b>clones</b> du parent, génétiquement identiques (sauf mutations). Elle est rapide et ne demande qu'un seul individu, mais elle ne produit pas de diversité.</p>
<ul>
<li><b>Division binaire</b> (scissiparité) : chez les bactéries (sans mitose, avec duplication du chromosome circulaire) et chez des protistes comme l'amibe et la paramécie.</li>
<li><b>Bourgeonnement</b> : un « bourgeon » se développe sur le parent puis s'en détache (hydre, levures).</li>
<li><b>Fragmentation et régénération</b> : un fragment peut redonner un individu entier (planaires, étoiles de mer).</li>
<li><b>Multiplication végétative</b> chez les plantes : stolons (fraisier), bulbes, tubercules (pomme de terre), boutures.</li>
<li><b>Parthénogenèse</b> : développement d'un ovule non fécondé (abeilles mâles, certains lézards et insectes).</li>
</ul>
<p>La <b>reproduction sexuée</b>, en revanche, réunit le matériel génétique de deux parents grâce aux gamètes. Elle coûte davantage (il faut trouver un partenaire) mais produit de la <b>diversité</b>, qui donne à l'espèce plus de chances de s'adapter quand l'environnement change : les parasites et les maladies, par exemple, ont du mal à « se spécialiser » sur des génomes toujours nouveaux.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : cycle et mitose",
      questions: [
        { type: "mc", q: "Pendant quelle phase de l'interphase l'ADN est-il répliqué ?", options: ["G1", "S", "G2"], answer: 1, explain: "S signifie synthèse : une copie de tout l'ADN est fabriquée." },
        { type: "num", q: "Une cellule somatique humaine entre en mitose. Combien de chromosomes aura chaque cellule fille ?", answer: 46, explain: "La mitose conserve le nombre de chromosomes : 2n = 46." },
        { type: "tf", q: "En anaphase, ce sont les chromosomes homologues qui se séparent.", answer: false, explain: "En anaphase de mitose, ce sont les chromatides sœurs qui se séparent ; les homologues se séparent en anaphase I de la méiose." }
      ]
    },
    {
      type: "text",
      title: "La méiose : diviser par deux pour recombiner",
      html: `<p>La <b>méiose</b> a lieu dans les organes reproducteurs (testicules et ovaires) et transforme une cellule diploïde (2n) en <b>quatre cellules haploïdes</b> (n), toutes différentes les unes des autres. Elle comporte <b>une seule réplication de l'ADN</b>, suivie de <b>deux divisions successives</b> : la méiose I et la méiose II.</p>
<p><b>Méiose I</b> (division réductionnelle : de 2n à n) :</p>
<ul>
<li><b>Prophase I</b> : les homologues s'apparient étroitement (<b>synapsis</b>) et forment des <b>tétrades</b> (4 chromatides). Entre chromatides non sœurs a lieu le <b>crossing-over</b> (enjambement) : elles échangent des segments d'ADN aux points appelés <b>chiasmas</b>. Chaque chromosome devient une mosaïque de matériel maternel et paternel.</li>
<li><b>Métaphase I</b> : les <b>paires</b> d'homologues s'alignent dans le plan équatorial. L'orientation de chaque paire vers un pôle ou l'autre est aléatoire : c'est l'<b>assortiment indépendant</b> (brassage interchromosomique).</li>
<li><b>Anaphase I</b> : ce sont les <b>homologues</b> qui se séparent (pas les chromatides !), chacun étant encore formé de deux chromatides.</li>
<li><b>Télophase I</b> et cytodiérèse : deux cellules haploïdes (n), aux chromosomes encore dupliqués.</li>
</ul>
<p><b>Méiose II</b> (division équationnelle, semblable à une mitose, sans nouvelle réplication) : en anaphase II, ce sont les <b>chromatides sœurs</b> qui se séparent. Résultat final : <b>4 cellules haploïdes</b> aux chromosomes simples.</p>
<p>Chez l'être humain, la <b>spermatogenèse</b> produit quatre spermatozoïdes à partir de chaque cellule ; l'<b>ovogenèse</b> ne produit qu'un seul gros ovule (les trois autres produits, les globules polaires, sont petits et dégénèrent), car l'ovule doit contenir les réserves nécessaires au début du développement de l'embryon. L'ovogenèse commence avant la naissance et s'arrête en prophase I ; elle ne reprend que des années, voire des décennies plus tard, à la puberté, avec l'ovulation.</p>`
    },
    {
      type: "svg",
      title: "Mitose et méiose comparées (cellule 2n = 4)",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="25" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">MITOSE</text>
<text x="450" y="25" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">MÉIOSE</text>
<line x1="300" y1="10" x2="300" y2="290" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
<circle cx="150" cy="75" r="30" fill="#fff" stroke="#475569" stroke-width="3"/>
<text x="150" y="82" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2n</text>
<path d="M150 108 L150 135" stroke="#475569" stroke-width="3"/><text x="170" y="125" font-size="14" fill="#475569">1 division</text>
<circle cx="105" cy="170" r="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/><circle cx="195" cy="170" r="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
<text x="105" y="176" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2n</text><text x="195" y="176" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">2n</text>
<text x="150" y="235" font-size="14" fill="#1e293b" text-anchor="middle">2 cellules identiques</text>
<text x="150" y="260" font-size="14" fill="#1e293b" text-anchor="middle">croissance, réparation, clonage</text>
<circle cx="450" cy="75" r="30" fill="#fff" stroke="#475569" stroke-width="3"/>
<text x="450" y="82" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2n</text>
<path d="M450 108 L450 125" stroke="#475569" stroke-width="3"/>
<circle cx="400" cy="145" r="20" fill="#fef3c7" stroke="#b45309" stroke-width="3"/><circle cx="500" cy="145" r="20" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
<text x="400" y="151" font-size="14" font-weight="bold" fill="#92400e" text-anchor="middle">n</text><text x="500" y="151" font-size="14" font-weight="bold" fill="#92400e" text-anchor="middle">n</text>
<g fill="#dcfce7" stroke="#15803d" stroke-width="3"><circle cx="370" cy="200" r="17"/><circle cx="430" cy="200" r="17"/><circle cx="470" cy="200" r="17"/><circle cx="530" cy="200" r="17"/></g>
<g font-size="14" font-weight="bold" fill="#166534" text-anchor="middle"><text x="370" y="206">n</text><text x="430" y="206">n</text><text x="470" y="206">n</text><text x="530" y="206">n</text></g>
<text x="450" y="245" font-size="14" fill="#1e293b" text-anchor="middle">2 divisions, 4 cellules différentes</text>
<text x="450" y="268" font-size="14" fill="#1e293b" text-anchor="middle">production des gamètes</text>
</svg>`,
      caption: "La mitose conserve le nombre de chromosomes ; la méiose le divise par deux et produit des cellules génétiquement différentes."
    },
    {
      type: "text",
      title: "Pourquoi la méiose crée de la diversité",
      html: `<p>Trois mécanismes, qui se cumulent, rendent pratiquement unique chaque individu (sauf les vrais jumeaux, monozygotes) :</p>
<ol>
<li>Le <b>crossing-over</b> en prophase I : il mélange les gènes à l'intérieur de chaque paire d'homologues (en général 1 à 3 échanges par paire) ;</li>
<li>L'<b>assortiment indépendant</b> des chromosomes en métaphase I : avec <i>n</i> paires, 2ⁿ combinaisons sont possibles. Chez l'être humain, 2²³ = <b>8 388 608</b> gamètes différents, sans même compter le crossing-over ;</li>
<li>La <b>fécondation au hasard</b> : quel spermatozoïde rencontre quel ovule ? Les combinaisons possibles sont (2²³)² ≈ <b>70 000 milliards</b> (7 × 10¹³), avant même le crossing-over.</li>
</ol>
<p>Sans la méiose, le nombre de chromosomes doublerait à chaque génération : la méiose le divise par deux pour que la fécondation le rétablisse.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz : méiose et diversité",
      questions: [
        { type: "mc", q: "Combien de divisions cellulaires la méiose comprend-elle ?", options: ["Une", "Deux", "Quatre"], answer: 1, explain: "La méiose I (réductionnelle) et la méiose II (équationnelle)." },
        { type: "num", q: "Combien de gamètes différents une cellule avec n = 4 peut-elle produire, par le seul assortiment indépendant ?", answer: 16, explain: "2⁴ = 16." },
        { type: "tf", q: "La fécondation rétablit le nombre diploïde de chromosomes.", answer: true, explain: "n + n = 2n : les deux gamètes haploïdes forment le zygote diploïde." }
      ]
    },
    {
      type: "example",
      title: "Les erreurs de la méiose : quand les chromosomes ne se séparent pas",
      html: `<p>Il arrive que les homologues (en anaphase I) ou les chromatides (en anaphase II) ne se séparent pas : c'est la <b>non-disjonction</b>. On obtient des gamètes avec un chromosome en trop ou en moins ; s'ils participent à la fécondation, on a des <b>aneuploïdies</b> :</p>
<ul>
<li><b>Trisomie 21</b> (syndrome de Down) : trois chromosomes 21 (47 chromosomes). Elle fut décrite en 1866 par Langdon Down ; en 1959, <b>Jérôme Lejeune</b> en découvrit la cause chromosomique. La probabilité augmente avec l'âge de la mère : environ 1 sur 1500 à 20 ans, 1 sur 100 à 40 ans ;</li>
<li><b>Syndrome de Turner</b> : une femme avec un seul X (45, X) ;</li>
<li><b>Syndrome de Klinefelter</b> : un homme avec des chromosomes XXY (47).</li>
</ul>
<p>Beaucoup d'autres aneuploïdies sont incompatibles avec la vie et provoquent des fausses couches précoces. On peut les détecter grâce au <b>caryotype</b>, c'est-à-dire la photographie ordonnée des chromosomes en métaphase.</p>`
    },
    {
      type: "widget",
      title: "Mitose ou méiose ?",
      widget: "classify",
      options: { groups: ["Mitose", "Méiose", "Les deux"], items: [
        ["Produit des cellules génétiquement identiques", 0],
        ["Produit les gamètes", 1],
        ["Est précédée de la réplication de l'ADN", 2],
        ["Le crossing-over a lieu", 1],
        ["Deux divisions successives", 1],
        ["Sert à la croissance et à la réparation des tissus", 0],
        ["Des fuseaux de microtubules se forment", 2],
        ["Les cellules filles sont haploïdes", 1]
      ] },
      caption: "Toutes deux commencent après une duplication de l'ADN et utilisent le fuseau, mais leurs résultats sont très différents."
    },
    {
      type: "alternatives",
      title: "D'autres façons de comprendre mitose et méiose",
      intro: "Ces deux divisions se confondent facilement : voici trois autres façons de les distinguer.",
      tabs: [
        {
          label: "🧦 Les chaussettes : paires et photocopies",
          html: `<p>Imagine que tu as 23 paires de chaussettes (les paires d'homologues : une de papa, une de maman). Avant la division, tu fais une <b>photocopie</b> de chacune (réplication). <b>Mitose</b> : tu répartis le tout dans deux boîtes, chacune avec 23 paires complètes, comme l'original. <b>Méiose</b> : en deux temps : d'abord tu sépares les paires (de chaque paire, une chaussette par boîte, choisie au hasard), puis tu sépares les photocopies : en tout 4 boîtes, chacune avec 23 chaussettes, chaque fois différentes. En plus, au passage, tu échanges des morceaux entre les chaussettes d'une même paire (crossing-over).</p>`
        },
        {
          label: "🃏 Le jeu de cartes",
          html: `<p>Tu as un paquet formé de deux jeux de 23 cartes chacun (23 du père, 23 de la mère). Pour faire un gamète, tu <b>tires une carte de chaque paire</b> à pile ou face : chaque gamète est une main de 23 cartes. Combien de mains différentes ? 2 choix pour chacune des 23 paires : 2²³ ≈ 8,4 millions. Si l'enfant reçoit deux mains (une de chaque parent), il y a environ 70 000 milliards de combinaisons possibles.</p>`
        },
        {
          label: "🎯 Tableau récapitulatif",
          html: `<table>
<tr><th></th><th>Mitose</th><th>Méiose</th></tr>
<tr><td>Cellules où elle a lieu</td><td>somatiques</td><td>germinales (gonades)</td></tr>
<tr><td>Nombre de divisions</td><td>1</td><td>2</td></tr>
<tr><td>Cellules produites</td><td>2</td><td>4</td></tr>
<tr><td>Nombre de chromosomes</td><td>reste 2n</td><td>de 2n à n</td></tr>
<tr><td>Cellules filles</td><td>identiques à la cellule mère</td><td>différentes entre elles</td></tr>
<tr><td>Crossing-over</td><td>non</td><td>oui (prophase I)</td></tr>
<tr><td>Fonction</td><td>croissance, réparation, reproduction asexuée</td><td>reproduction sexuée</td></tr>
</table>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Les cellules HeLa : la cellule immortelle",
      html: `<p>En 1951, une Américaine, <b>Henrietta Lacks</b>, mourut d'un cancer du col de l'utérus. À partir des cellules de sa tumeur, prélevées à son insu, on obtint la première lignée cellulaire humaine capable de se diviser indéfiniment en laboratoire : les <b>cellules HeLa</b>. Elles ont perdu les « freins » normaux du cycle cellulaire et ne vieillissent pas. Elles ont servi à mettre au point le vaccin contre la poliomyélite, à étudier le cancer et les virus, à tester des médicaments. Cette histoire a ouvert un grand débat éthique sur le consentement éclairé des patients, et la famille Lacks a aujourd'hui son mot à dire sur l'utilisation des données génétiques.</p>`
    },
    {
      type: "curiosity",
      title: "Le télomère et le nombre de divisions",
      html: `<p>Les cellules humaines normales cultivées en laboratoire se divisent au maximum environ 50 à 60 fois (la <b>limite de Hayflick</b>, 1961). La raison se trouve dans les <b>télomères</b>, des séquences répétées aux extrémités des chromosomes qui raccourcissent à chaque réplication, comme les embouts des lacets. Quand ils deviennent trop courts, la cellule cesse de se diviser. Les cellules souches, les cellules germinales et les cellules cancéreuses utilisent une enzyme, la <b>télomérase</b>, pour les reconstruire. Pour leurs découvertes sur les télomères, Blackburn, Greider et Szostak ont reçu le prix Nobel en 2009.</p>`
    },
    {
      type: "conceptMap",
      title: "Carte de la division cellulaire : touche les nœuds et découvre le pourquoi",
      nodes: [
        { id: "ciclo", label: "Cycle cellulaire", x: 50, y: 6, color: "#3b82f6", html: "Interphase (G1, S, G2) et phase M.", why: "Le cycle cellulaire est régulé par les cyclines et les Cdk, découvertes par Hartwell, Nurse et Hunt (prix Nobel 2001) en étudiant des levures et des œufs d'oursin. Un système aussi fondamental est resté pratiquement identique chez tous les eucaryotes." },
        { id: "mitosi", label: "Mitose", x: 20, y: 34, color: "#22c55e", html: "Une division, deux cellules identiques.", why: "Flemming (1882) l'observa en colorant des cellules de salamandre : les fils de chromatine disparaissaient puis réapparaissaient en deux moitiés. Il comprit ainsi que le noyau ne se contente pas de se couper en deux, mais répartit les fils avec précision." },
        { id: "meiosi", label: "Méiose", x: 80, y: 34, color: "#a855f7", html: "Deux divisions, quatre gamètes haploïdes.", why: "Oscar Hertwig (1876) observa la fécondation chez l'oursin ; on en déduisit que les gamètes doivent avoir la moitié des chromosomes, sinon leur nombre doublerait à chaque génération. Van Beneden (1883) le confirma chez l'ascaris, et Weismann en tira en 1887 la nécessité d'une division réductionnelle." },
        { id: "crossing", label: "Crossing-over", x: 80, y: 62, color: "#f59e0b", html: "Échange de segments entre homologues.", why: "Thomas Hunt Morgan et son équipe (1910-1915), en étudiant la mouche drosophile, comprirent que les gènes sont alignés sur les chromosomes et que les échanges entre homologues en mélangent les combinaisons ; c'est ainsi que naquirent les premières cartes génétiques." },
        { id: "asex", label: "Reproduction asexuée", x: 20, y: 62, color: "#14b8a6", html: "Des clones par mitose.", why: "Elle fonctionne bien dans un milieu stable et elle est très rapide ; mais elle risque de produire une population toute identique, vulnérable à un seul parasite." },
        { id: "var", label: "Diversité", x: 50, y: 82, color: "#ef4444", html: "Des gamètes toujours différents grâce au crossing-over, à l'assortiment et à la fécondation.", why: "Sans diversité, il n'y a pas d'évolution par sélection naturelle : Darwin l'observait sans en connaître la cause, qui ne fut éclaircie que par la génétique du XX<sup>e</sup> siècle." },
        { id: "err", label: "Erreurs et cancer", x: 50, y: 52, color: "#06b6d4", html: "Non-disjonction, perte du contrôle du cycle.", why: "Lejeune (1959) découvrit que la trisomie 21 est due à un chromosome 21 supplémentaire ; Boveri proposa en 1914 que les tumeurs proviennent de chromosomes anormaux, une idée confirmée des décennies plus tard." }
      ],
      edges: [
        ["ciclo", "mitosi", "se termine par"],
        ["ciclo", "meiosi", "prépare"],
        ["meiosi", "crossing", "comprend"],
        ["mitosi", "asex", "est à la base de"],
        ["crossing", "var", "produit"],
        ["meiosi", "var", "produit"],
        ["mitosi", "err", "si déréglée"],
        ["meiosi", "err", "si mal faite"]
      ]
    },
    {
      type: "remember",
      title: "À retenir",
      html: `<ul><li>Cycle cellulaire : G1 → S (réplication de l'ADN) → G2 → M.</li><li>Mitose : prophase, métaphase, anaphase, télophase ; 2 cellules 2n identiques.</li><li>Méiose : 2 divisions, 4 cellules n différentes ; crossing-over en prophase I ; les homologues se séparent en anaphase I et les chromatides en anaphase II.</li><li>Être humain : 2n = 46, n = 23. Gamètes possibles : 2²³ ≈ 8,4 millions.</li></ul>`
    }
  ],
  glossary: [
    { t: "Chromosome", d: "Structure formée d'une molécule d'ADN associée à des protéines, visible pendant la division." },
    { t: "Chromatides sœurs", d: "Les deux copies identiques d'un chromosome dupliqué, réunies au centromère." },
    { t: "Homologues", d: "Paire de chromosomes portant les mêmes gènes, l'un d'origine maternelle et l'autre paternelle." },
    { t: "Diploïde (2n)", d: "Cellule possédant deux jeux de chromosomes." },
    { t: "Haploïde (n)", d: "Cellule possédant un seul jeu de chromosomes, comme les gamètes." },
    { t: "Interphase", d: "Période du cycle cellulaire entre deux divisions (G1, S, G2)." },
    { t: "Mitose", d: "Division du noyau qui produit deux cellules identiques à la cellule mère." },
    { t: "Méiose", d: "Double division qui produit quatre cellules haploïdes." },
    { t: "Crossing-over", d: "Échange de segments d'ADN entre chromosomes homologues en prophase I." },
    { t: "Gamète", d: "Cellule sexuelle haploïde (ovule ou spermatozoïde)." },
    { t: "Cytodiérèse", d: "Division du cytoplasme à la fin de la mitose ou de la méiose." },
    { t: "Non-disjonction", d: "Absence de séparation des chromosomes, à l'origine des aneuploïdies." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Combien de chromosomes possède un spermatozoïde humain ?", answer: 23, explain: "Les gamètes sont haploïdes : n = 23." },
      { type: "mc", q: "Pendant quelle phase de la mitose les chromosomes s'alignent-ils dans le plan équatorial ?", options: ["La prophase", "La métaphase", "La télophase"], answer: 1, explain: "La métaphase est la phase de l'alignement sur la plaque métaphasique." },
      { type: "tf", q: "À la fin de la mitose, les cellules filles sont génétiquement identiques à la cellule mère.", answer: true, explain: "La mitose répartit des copies identiques de l'ADN." },
      { type: "mc", q: "Le crossing-over a lieu...", options: ["en anaphase de mitose", "en prophase I de la méiose", "en télophase II"], answer: 1, explain: "Les homologues appariés échangent des segments d'ADN en prophase I." },
      { type: "num", q: "Combien de gamètes différents un organisme avec n = 3 (2n = 6) peut-il produire, en tenant compte seulement de l'assortiment indépendant ?", answer: 8, explain: "2ⁿ = 2³ = 8." },
      { type: "mc", q: "Combien de cellules haploïdes obtient-on à l'issue d'une méiose complète ?", options: ["2", "4", "8"], answer: 1, explain: "Deux divisions successives après une seule réplication produisent 4 cellules." },
      { type: "text", q: "Comment s'appelle la phase du cycle cellulaire pendant laquelle l'ADN est répliqué ? (une lettre)", answer: ["s", "phase s", "la phase s"], explain: "C'est la phase S, de synthèse de l'ADN." },
      { type: "order", q: "Remets dans l'ordre les phases de la mitose.", items: ["Prophase", "Métaphase", "Anaphase", "Télophase"], explain: "Condensation, alignement, séparation des chromatides, reconstitution des noyaux." },
      { type: "mc", q: "Quelle est la cause de la trisomie 21 (syndrome de Down) ?", options: ["Trois exemplaires du chromosome 21", "L'absence du chromosome X", "Une infection virale"], answer: 0, explain: "Une non-disjonction aboutit à trois copies du chromosome 21 (47 chromosomes)." },
      { type: "tf", q: "En anaphase I de la méiose, ce sont les chromatides sœurs qui se séparent.", answer: false, explain: "En anaphase I, ce sont les homologues qui se séparent ; les chromatides sœurs se séparent en anaphase II." }
    ]
  }
});

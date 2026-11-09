/* DONNÉES : le seul fichier à modifier pour ajouter ou changer des projets. */
var ME = {
  name: "Moussa Soulama",
  tagline: "Étudiant ingénieur en data science à l'ENSAI",
  github: "https://github.com/SoulamaMoussa",
  linkedin: "https://www.linkedin.com/in/moussa-soulama"
};

var PROJECTS = [
  
  {
  id: "ipoo-sports-data",
  title: "IPOO : traitement et exploration de données sportives multi-disciplines",
  date: "18 Janvier Au 17 Avril 2026",
  summary: "Comment concevoir une application capable de traiter et d'explorer des données sportives hétérogènes ? Développement d'un outil Python appliqué au football, tennis, basketball et aux échecs.",
  image: "images/sport.jpg",
  tags: ["Python", "Data Processing", "Développement logiciel"],
  stack: ["Python", "Streamlit", "Programmation orientée objet", "Tests unitaires", "Ruff"],
  repo: "URL_GITHUB_A_COMPLETER",
  lead: "Développer une application modulaire capable de traiter différentes structures de données sportives et de rendre leur exploitation accessible à travers une interface interactive.",
  stats: [
    ["4", "disciplines sportives étudiées"],
    ["4", "jeux de données exploités"],
    ["1", "application interactive développée avec Streamlit"]
  ],
  sections: [
    ["Objectif", "Les données sportives proviennent de sources variées et présentent des structures différentes selon les disciplines. L'objectif est de concevoir une application générique permettant d'importer, de traiter, de structurer et d'explorer ces données, tout en proposant une interface facilitant leur exploitation."],

    ["Données", "Quatre cas d'application ont été étudiés : la Ligue 1 française (saison 2015-2016), l'ATP Tour 2024, la NBA (saison 2022-2023) et un tournoi d'échecs. Cette diversité permet de confronter les traitements à des structures de données hétérogènes et à des problématiques propres à chaque discipline."],

    ["Démarche", "Analyse des structures des jeux de données, conception de traitements adaptés à chaque discipline, organisation des opérations de manipulation des données et développement de fonctionnalités d'exploration. L'enjeu est de mutualiser les traitements communs tout en préservant les spécificités de chaque source."],

    ["Architecture logicielle", "Développement d'une architecture modulaire en programmation orientée objet, organisée autour de packages dédiés aux modèles, à la manipulation des données et aux services. Une interface interactive avec Streamlit permet d'accéder aux fonctionnalités de l'application. Un mécanisme de configuration facilite son adaptation aux différents cas d'utilisation."],

    ["Résultats", "Développement d'une application de traitement et d'exploration de données validée sur quatre contextes sportifs : football, tennis, basketball et échecs. La conception modulaire permet de prendre en charge des structures de données différentes au sein d'un même environnement applicatif."],

    ["Assurance qualité", "Mise en place de tests unitaires et de tests de couverture pour vérifier la fiabilité des traitements. Utilisation de Ruff pour contrôler la qualité et le style du code Python, ainsi que rédaction d'une documentation technique pour faciliter la maintenance et l'évolution de l'application."],

    ["Conclusion", "Ce projet m'a permis de mobiliser des compétences en traitement de données et en ingénierie logicielle, depuis l'analyse des structures sources jusqu'au développement d'une application interactive. Il met en évidence l'importance de la modularité, de la réutilisabilité du code et de la validation des traitements dans la conception d'outils de données."],

    ["Perspectives", "Étendre l'application à de nouvelles disciplines sportives, enrichir les fonctionnalités d'analyse statistique et de visualisation, et automatiser davantage les étapes de préparation des données afin de renforcer la généricité et la robustesse de l'outil."]
  ]
},
  
  {
    id: "energy-customer-churn",
    title: "Prédiction du désabonnement client dans le secteur de l'énergie",
    date: "En cours",
    summary: "Quels clients risquent de quitter leur fournisseur d'énergie, et les prix jouent-ils un rôle ? Projet de classification en cours de réalisation.",
    tags: ["Python", "Machine learning", "Churn"],
    stack: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "Jupyter"],
    repo: "https://github.com/SoulamaMoussa/Energy_Customer_Churn_Prediction.git",
    lead: "Repérer à temps les clients à risque de quitter un fournisseur d'énergie, et comprendre le rôle des prix dans cette décision.",
    stats: [],
    note: "Projet en cours : seul le code est consultable pour l'instant. Les résultats et la conclusion seront ajoutés à la fin de l'analyse.",
    sections: [
      ["Objectif", "Un fournisseur d'énergie perd des revenus quand un client le quitte, et recruter un nouveau client coûte cher. Le projet cherche à identifier les caractéristiques associées au désabonnement, à étudier le rôle des prix et de leurs variations, et à évaluer dans quelle mesure des modèles de classification repèrent les clients à risque."],
      ["Données", "Deux jeux de données reliés par l'identifiant client : les caractéristiques des clients (contrat, consommation, indicateurs financiers, départ ou non) et l'historique des prix de l'énergie (heures pleines et creuses)."],
      ["Démarche prévue", "Analyse exploratoire, création d'indicateurs de variation des prix, puis entraînement et comparaison de modèles de classification. L'évaluation s'appuiera sur des métriques adaptées aux classes déséquilibrées (matrice de confusion, précision, rappel, F1-score, ROC-AUC), avec une attention particulière aux faux négatifs."],
      ["Statut", "Le dépôt contient le code et les notebooks de travail. Je publierai les résultats et leur interprétation une fois l'analyse terminée."]
    ]
  },
  
    {
    id: "malnutrition-nouna",
    title: "Malnutrition infantile à Nouna : dépendance spatiale et facteurs associés",
    date: "12 Décembre 2024 Au 12 Mars 2025",
    summary: "Où la malnutrition se concentre-t-elle chez les enfants de moins de 5 ans, et pourquoi ? Analyse spatiale sur 1 999 enfants.",
    image: "images/nouna-apercu.png",
    tags: ["Statistique spatiale", "Santé publique", "Régression logistique"],
    stack: ["Indice de Moran", "Régression logistique ordinale", "Données climatiques"],
    repo: "https://github.com/SoulamaMoussa/child_malnutrition_spatial.git",
    lead: "Identifier les villages à risque pour aider à cibler les interventions nutritionnelles quand les moyens sont limités.",
    stats: [
      ["46 %", "des enfants malnutris sur 1 999 étudiés"],
      ["5", "villages du nord avec des foyers significatifs"],
      ["2022", "année de la collecte de données"]
    ],
    sections: [
      ["Objectif", "Une organisation de nutrition aux moyens limités doit choisir où intervenir en priorité. La malnutrition est-elle répartie au hasard dans l'observatoire de Nouna, où sont les foyers à risque, et quels facteurs y sont associés ?"],
      ["Données", "1 999 enfants de moins de 5 ans et leurs mères, interrogés de juillet à août 2022 : mesures anthropométriques, caractéristiques sociodémographiques et économiques, et données climatiques de cinq stations météorologiques."],
      ["Démarche", "État nutritionnel en trois niveaux à partir des z-scores OMS, indice de Moran global et local pour détecter les foyers, puis régression logistique ordinale pour identifier les facteurs associés."],
      ["Résultats", "46 % des enfants sont malnutris, dont 18 % cumulent plusieurs formes. La répartition n'est pas aléatoire : des foyers significatifs apparaissent dans plusieurs villages du nord. Le contexte climatique, la richesse du ménage et le niveau d'études de la mère sont associés à l'état nutritionnel."],
      ["Conclusion", "La malnutrition est fortement liée à la localisation et au climat. Les interventions doivent cibler en priorité les villages à risque et intégrer l'analyse spatiale aux programmes de nutrition."],
      ["Perspectives", "Identifier précisément les facteurs explicatifs qui influencent la formation des clusters observés: Modèles de régression spatiale et analyser l'évolution des clusteurs de malnutrition au fil du temps "]
    ]
  },
  {
    id: "ipc-burkina-faso",
    title: "Prévision de l'indice des prix à la consommation au Burkina Faso",
    date: "5 au 30 Juin 2023",
    summary: "Quelle méthode prévoit le mieux l'évolution des prix ? Comparaison de trois modèles sur 8 ans de données mensuelles.",
    image: "images/ipc-apercu.png",
    imageAlt: "Courbe de l'indice des prix de 2015 à mai 2023 et prévision du lissage exponentiel",
    tags: ["R", "Séries temporelles", "ARIMA"],
    stack: ["R", "forecast", "tseries", "Lissage exponentiel", "ARIMA"],
    repo: "https://github.com/SoulamaMoussa/Prediction_indice_prix.git",
    lead: "Prévoir l'indice des prix pour aider à préparer des décisions budgétaires, et savoir quelle méthode croire.",
    stats: [
      ["+24 %", "de hausse des prix entre 2014 et mai 2023"],
      ["≈ 2,2 pts", "écart typique du meilleur modèle sur 5 mois"],
      ["3", "méthodes comparées"]
    ],
    sections: [
      ["Objectif", "Une équipe qui prépare un budget doit anticiper les prix des prochains mois. Parmi trois méthodes classiques, laquelle prévoit le mieux l'indice sur des mois qu'elle n'a pas vus, et avec quelle précision ?"],
      ["Données", "Indice global des prix à la consommation (base 100 en 2014), mensuel, de janvier 2015 à mai 2023, source INSD. Apprentissage sur 96 mois, test sur janvier-mai 2023."],
      ["Démarche", "Analyse exploratoire, lissage exponentiel double, régression linéaire sur une sous-période, puis ARIMA : test de Dickey-Fuller, différenciation, corrélogrammes, choix par le critère BIC, diagnostic des résidus."],
      ["Résultats", "Erreur quadratique moyenne sur le jeu de test : 4,98 pour le lissage exponentiel double, 13,95 pour la régression et 52,14 pour l'ARIMA(10,1,1)."],
      ["Conclusion", "Le modèle le plus simple est le plus fiable : le lissage exponentiel double s'écarte d'environ 2,2 points d'indice, moins de 2 % du niveau de l'indice. L'ARIMA, avec 12 paramètres pour 96 observations, surestime la hausse."],
      ["Limites", "Jeu de test court. Pistes : validation sur plusieurs fenêtres chronologiques, comparaison à une prévision de référence simple, ARIMA plus parcimonieux."],
      ["Équipe", "Projet réalisé en groupe avec Oumar Kaboré et Nestor Cédric Nana."]
    ]
  }
];

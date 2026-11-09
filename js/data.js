/* DONNÉES : le seul fichier à modifier pour ajouter ou changer des projets. */
var ME = {
  name: "Moussa Soulama",
  tagline: "Étudiant ingénieur en data science à l'ENSAI",
  github: "https://github.com/SoulamaMoussa",
  linkedin: "https://www.linkedin.com/in/moussa-soulama"
};

var PROJECTS = [
    {
    id: "malnutrition-nouna",
    title: "Malnutrition infantile à Nouna : dépendance spatiale et facteurs associés",
    date: "12 Décembre 2024 Au 12 Mars 2025",
    summary: "Où la malnutrition se concentre-t-elle chez les enfants de moins de 5 ans, et pourquoi ? Analyse spatiale sur 1 999 enfants.",
    image: "images/malnu_cover.png",
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

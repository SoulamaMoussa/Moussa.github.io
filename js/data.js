/* DONNÉES : le seul fichier à modifier pour ajouter ou changer des projets. */
var ME = {
  name: "Moussa Soulama",
  tagline: "Étudiant ingénieur en data science à l'ENSAI",
  github: "https://github.com/SoulamaMoussa",
  linkedin: "https://www.linkedin.com/in/TON-PROFIL"
};

var PROJECTS = [
  {
    id: "ipc-burkina-faso",
    title: "Prévision de l'indice des prix à la consommation au Burkina Faso",
    date: "Projet académique",
    summary: "Quelle méthode prévoit le mieux l'évolution des prix ? Comparaison de trois modèles sur 8 ans de données mensuelles.",
    image: "images/ipc-apercu.png",
    imageAlt: "Courbe de l'indice des prix de 2015 à mai 2023 et prévision du lissage exponentiel",
    tags: ["R", "Séries temporelles", "ARIMA"],
    stack: ["R", "forecast", "tseries", "Lissage exponentiel", "ARIMA"],
    repo: "https://github.com/SoulamaMoussa/NOM-DU-REPO",
    lead: "Prévoir l'indice des prix pour aider à préparer des décisions budgétaires, et savoir quelle méthode croire.",
    stats: [
      ["+24 %", "de hausse des prix entre 2014 et mai 2023"],
      ["≈ 2,2 pts", "écart typique du meilleur modèle sur 5 mois"],
      ["3", "méthodes comparées"]
    ],
    note: "Exercice académique réalisé en groupe dans un cours de séries temporelles, pas un système de prévision opérationnel. Le jeu de test est court (5 mois), donc le classement des méthodes mérite d'être confirmé.",
    sections: [
      ["Objectif", "Une équipe qui prépare un budget doit anticiper les prix des prochains mois. Parmi trois méthodes classiques, laquelle prévoit le mieux l'indice sur des mois qu'elle n'a pas vus, et avec quelle précision ?"],
      ["Données", "Indice global des prix à la consommation (base 100 en 2014), mensuel, de janvier 2015 à mai 2023, source INSD. Apprentissage sur 96 mois, test sur janvier-mai 2023."],
      ["Démarche", "Analyse exploratoire, lissage exponentiel double, régression linéaire sur une sous-période, puis ARIMA : test de Dickey-Fuller, différenciation, corrélogrammes, choix par le critère BIC, diagnostic des résidus."],
      ["Résultats", "Erreur quadratique moyenne sur le jeu de test : 4,98 pour le lissage exponentiel double, 13,95 pour la régression et 52,14 pour l'ARIMA(10,1,1)."],
      ["Conclusion", "Le modèle le plus simple est le plus fiable : le lissage exponentiel double s'écarte d'environ 2,2 points d'indice, moins de 2 % du niveau de l'indice. L'ARIMA, avec 12 paramètres pour 96 observations, surestime la hausse."],
      ["Limites", "Jeu de test court. Pistes : validation sur plusieurs fenêtres chronologiques, comparaison à une prévision de référence simple, ARIMA plus parcimonieux."],
      ["Équipe", "Projet réalisé en groupe avec Oumar Kaboré et Nestor Cédric Nana."]
    ]
  },
];

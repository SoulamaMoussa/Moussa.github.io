/* DONNÉES : le seul fichier à modifier pour ajouter ou changer des projets. */
var ME = {
  name: "Moussa Soulama",
  tagline: "Étudiant ingénieur en data science à l'ENSAI",
  github: "https://github.com/TON-PSEUDO",
  linkedin: "https://www.linkedin.com/in/TON-PROFIL"
};

var PROJECTS = [
  {
    id: "projet-1",
    title: "[Titre du projet 1]",
    date: "Octobre 2026",
    summary: "[Une ou deux phrases : le problème, les données, le résultat.]",
    tags: ["Python", "Statistiques"],
    stack: ["Python", "pandas", "pytest"],
    repo: "https://github.com/TON-PSEUDO/PROJET-1",
    lead: "[Ce que tu voulais comprendre ou démontrer, en une phrase.]",
    stats: [["[0,00]", "[indicateur 1]"], ["[+0 %]", "[indicateur 2]"], ["[00]", "[indicateur 3]"]],
    note: "Ce travail a été réalisé à titre personnel, pour apprendre. [Précise ici si une IA t'a aidé et pour quoi.]",
    sections: [
      ["Objectif", "[Le problème à résoudre et pourquoi il t'intéresse.]"],
      ["Démarche", "[Les étapes : données, méthode, outils.]"],
      ["Résultats", "[Ce que tu as obtenu, avec des chiffres.]"],
      ["Ce que j'en retiens", "[Ce que tu as appris, les limites.]"],
      ["Reproduire", "[Comment relancer ton code.]"]
    ]
  },
  {
    id: "projet-2",
    title: "[Titre du projet 2]",
    date: "Septembre 2026",
    summary: "[Une ou deux phrases : le problème, les données, le résultat.]",
    tags: ["R", "Visualisation"],
    stack: ["R", "ggplot2"],
    repo: "https://github.com/TON-PSEUDO/PROJET-2",
    lead: "[Ce que tu voulais comprendre ou démontrer, en une phrase.]",
    stats: [],
    note: "",
    sections: [["Objectif", "[…]"], ["Démarche", "[…]"], ["Résultats", "[…]"]]
  },
  var PROJECTS = [
  {
    id: "ipc-burkina-faso",
    title: "Prévision de l'indice des prix à la consommation au Burkina Faso",
    date: "Projet académique",
    summary: "Quelle méthode prévoit le mieux l'évolution des prix ? Comparaison de trois modèles sur 8 ans de données mensuelles.",
    image: "ipc-apercu.png",
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
];

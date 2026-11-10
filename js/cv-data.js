/* DONNÉES DU CV : le seul fichier à modifier pour mettre à jour la page « Mon CV ».
   Les projets de l'onglet « Projets » viennent automatiquement de data.js. */
var CV = {
  intro: "Étudiant en deuxième année du cycle ingénieur à l'ENSAI, je développe des compétences en statistique, traitement de données et apprentissage automatique. Je m'intéresse particulièrement aux applications de la Data Science dans les secteurs financier, bancaire et de la santé.",
  email: "moussa.soulama@ensai.fr",
  projectsLabel: "Projets académiques et personnels",
  pdf: "",   /* ex. "cv-moussa-soulama.pdf" : le fichier doit être déposé à la racine du dépôt. Laisse vide pour masquer le bouton. */

  /* TÂCHES RÉALISÉES PAR PROJET (clé = « id » du projet dans data.js).
     Brouillon rédigé d'après la méthode décrite de chaque projet : garde seulement ce que TU as fait
     (surtout pour les projets en groupe) et reformule avec tes mots. Format : [["Titre court", "Détail"], ...] */
  projectTasks: {
    "energy-customer-churn": [
      ["Analyse exploratoire", "étude des deux jeux de données (clients et prix) et du déséquilibre de la variable cible"],
      ["Variables", "création d'indicateurs de variation des prix"],
      ["Modélisation", "entraînement et comparaison de modèles de classification, évaluation adaptée aux classes déséquilibrées"]
    ],
    "gestion-resultats-sportifs": [
      ["Contexte", "Projet de groupe de traitement de données, en première année à l'ENSAI."],
      ["Problème", "Comment traiter les résultats de plusieurs sports dans une même application ?"],
      ["Méthode", "Architecture en quatre packages : modèles, données, services et interface. Configuration pilotée par des fichiers JSON. Interface avec Streamlit."],
      ["Résultat", "Une application Python qui traite les résultats de football, tennis, basketball et échecs. Elle inclut un simulateur du tournoi MSI 2024 de League of Legends."]
    ],
    "ipc-burkina-faso": [
      ["Analyse exploratoire", "étude de la tendance et de la saisonnalité de l'indice des prix"],
      ["Prévision", "lissage exponentiel double, régression sur une sous-période et modèle ARIMA"],
      ["Validation", "tests de stationnarité (Dickey-Fuller), diagnostic des résidus, choix du modèle par le critère BIC"],
      ["Comparaison", "évaluation des trois méthodes par l'erreur quadratique moyenne sur des mois mis de côté"]
    ],
  },

  experience: [
    {
      id: "emplois",
      label: "Expérience professionnelle",
      icon: "job",
      items: [
        {
          period: "Décembre 2024 – Mars 2025",
          duration: "4 mois",
          title: "Data Analyst (stage)",
          org: "Centre de Recherche en Santé de Nouna (CRSN)",
          place: "Nouna, Burkina Faso",
          summary: "Étude de la distribution spatiale de la malnutrition chez les enfants de moins de 5 ans dans l'observatoire de Nouna, et des facteurs individuels, socio-économiques et climatiques associés.",
          bullets: [
            ["Plan méthodologique", "conception du plan d'analyse de l'étude"],
            ["Préparation des données", "nettoyage et fusion de bases de données de sources multiples"],
            ["Analyse spatiale", "indice de Moran global et local pour repérer les foyers de malnutrition"],
            ["Modélisation", "régression logistique ordinale afin d'identifier les facteurs liés à la malnutrition enfantile"],
            ["Restitution", "interprétation des résultats et rédaction du rapport final, avec des recommandations pour cibler les villages à risque"]
          ],
          tags: ["R", "Statistique spatiale", "Régression logistique ordinale", "Nettoyage de données"],
          links: [["Voir le projet et le code", "projet.html?id=malnutrition-nouna"]]
        },
        {
          period: "Août – Décembre 2024",
          duration: "5 mois",
          title: "Superviseur de données d'enquête (CDD temps partiel)",
          org: "Centre de Recherche en Santé de Nouna (CRSN)",
          place: "Nouna, Burkina Faso",
          summary: "Enquête 2024 du système de surveillance démographique et de santé de Nouna.",
          bullets: [
            ["Coordination", "encadrement quotidien des enquêteurs et gestion des listes de ménages"],
            ["Assistance technique", "appui sur tablettes pour faciliter la collecte des données"],
            ["Qualité des données", "vérification de la cohérence et de la qualité des données collectées"],
            ["Retours correctifs", "retours aux enquêteurs en cas d'erreurs et validation finale des questionnaires"],
            ["Suivi de l'étude", "production de tableaux de bord hebdomadaires et d'analyses ad-hoc"],
            ["Reporting", "comptes rendus réguliers au responsable du projet sur l'avancement et la qualité des données"]
          ],
          tags: ["Analyse de données", "Contrôle qualité", "Reporting", "Communication"]
        }
      ]
    }
  ],

  education: [
    { org: "Ecole Nationale de la Statistique et de l'Analyse de l'Information - ENSAI", place: "Bruz, France", period: "2025 – 2027", degree: "Cycle ingénieur – Data Science" },
    { org: "Université Nazi Boni", place: "Bobo-Dioulasso Burkina Faso", period: "2021-2024", degree: "Licence Statistique-Informatique" },
    { org: "Baccalauréat général", place: "Côte d'Ivoire", period: "2020-2021", degree: "Série D" }
  ],

  certifications: [],   /* ex. { name: "Nom", issuer: "Organisme", period: "2026", logo: "images/logo.png", link: "https://..." } */

  skills: [
    ["Langages", "Python, R, SQL, Git, C++"],
    ["Statistiques", "Statistique inférentielle, Sondages, "],
    ["Apprentissage supervisé", "Séries temporelles, Classification, Régression linéaires généralisées, Random Forest, KNN, QDA, LDA"],
     ["Apprentisage non supervisée", "K-means, CAH, ACP, MCA, AFC"]
    ["Traitement de données", "Pandas, NumPy, tidyverse"],
    ["Visualisation des données et Data Storytelling", "ggplot, Matplotlib, Seaborn, Streamlit"],
    ["Outils et bibliotheques", "GitHub, Jupyter, VS Code, PostgreSQL,"]
  ]
};

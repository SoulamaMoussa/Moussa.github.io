/* DONNÉES DU CV : le seul fichier à modifier pour mettre à jour la page « Mon CV ».
   Chaque expérience ou projet suit le même schéma : Contexte, Problème, Méthode, Résultat.
   Règle d'écriture : phrases courtes, chiffres précis, une idée par phrase. */
var CV = {
  intro: "Étudiant ingénieur en data science à l'ENSAI. Je travaille sur des données de santé et de prix, avec R et Python. Je cherche un stage en data science, statistique ou analyse quantitative.",
  email: "moussa.soulama@ensai.fr",
  projectsLabel: "Projets académiques et personnels",
  pdf: "",   /* ex. "cv-moussa-soulama.pdf" : fichier à déposer à la racine du dépôt. Vide = bouton masqué. */

  /* ----- EXPÉRIENCES (un onglet par groupe) ----- */
  experience: [
    {
      id: "emplois",
      label: "Expérience professionnelle",
      icon: "job",
      items: [
        {
          period: "Déc. 2024 – Mars 2025",
          duration: "4 mois",
          title: "Data Analyst (stage)",
          org: "Centre de Recherche en Santé de Nouna (CRSN)",
          place: "Nouna, Burkina Faso",
          facts: [
            ["Contexte", "Observatoire de santé de Nouna, en contexte de crise sécuritaire. Données sur 1 999 enfants de moins de 5 ans."],
            ["Problème", "Comment la malnutrition infantile est-elle répartie ? Quels facteurs sociodémographiques et environnementaux y sont liés ?"],
            ["Méthode", "Revue de littérature, puis plan méthodologique pour choisir les modèles adaptés. Fusion et nettoyage de bases de plusieurs sources. Indice de Moran global et local pour l'analyse spatiale. Régression logistique ordinale pour identifier les facteurs."],
            ["Résultat", "46 % des enfants sont malnutris. La dépendance entre villages est marquée dans le nord de la zone. Facteurs liés : sexe, niveau d'études de la mère, températures moyennes, précipitations. Rapport final avec recommandations pour cibler les villages à risque."]
          ],
          tags: ["R", "Statistique spatiale", "Régression logistique ordinale"],
          links: [["Voir le projet et le code", "projet.html?id=malnutrition-nouna"]]
        },
        {
          period: "Août – Déc. 2024",
          duration: "5 mois",
          title: "Superviseur de collecte de données (CDD)",
          org: "Centre de Recherche en Santé de Nouna (CRSN)",
          place: "Nouna, Burkina Faso",
          facts: [
            ["Contexte", "Enquête 2024 du système de surveillance démographique et de santé de Nouna. Collecte sur tablettes."],
            ["Problème", "Comment garantir des données fiables pendant la collecte ?"],
            ["Méthode", "Participation à la formation des enquêteurs. Contrôle de la cohérence des données collectées. Retours aux enquêteurs en cas d'erreur et validation finale des questionnaires. Analyse exploratoire des premières données."],
            ["Livrable", "Un tableau de bord pour suivre l'évolution de l'enquête, et un compte rendu hebdomadaire au responsable du projet."]
          ],
          tags: ["Contrôle qualité", "Tableau de bord", "Reporting"]
        }
      ]
    },
    {
      id: "virtuelle",
      label: "Expérience virtuelle",
      icon: "job",
      items: [
        {
          period: "1er – 13 oct. 2026",
          title: "Consultant data scientist",
          org: "BCG X",
          place: "simulation en ligne",
          facts: [
            ["Contexte", "Une entreprise d'énergie voit ses clients partir chez des concurrents."],
            ["Problème", "Quel client risque de se désabonner ? Le prix influence-t-il ce départ ?"],
            ["Méthode", "Analyse exploratoire des données. Forêt aléatoire (Random Forest) pour prédire la probabilité de départ. Évaluation du modèle et test de l'apport des variations de prix."],
            ["Livrable", "Rapport final avec recommandations, pour présenter les résultats et les décisions qu'ils permettent."]
          ],
          tags: ["Python", "Random Forest", "Classification"]
        }
      ]
    }
  ],

  /* ----- PROJETS ACADÉMIQUES ET PERSONNELS ----- */
  /* « page » : lien vers la fiche détaillée sur le site (laisse vide s'il n'y en a pas). */
  projects: [
    {
      period: "12 janv. – 13 mars 2026",
      title: "Application de traitement de données sportives",
      org: "ENSAI",
      place: "projet de groupe",
      page: "projet.html?id=gestion-resultats-sportifs",
      facts: [
        ["Contexte", "Projet de groupe de traitement de données, en première année à l'ENSAI."],
        ["Problème", "Comment suivre les compétitions de plusieurs sports avec une seule application ?"],
        ["Méthode", "Diagramme de base de données et de classes. Tests unitaires et d'intégration. Interface Streamlit."],
        ["Livrable", "Un rapport, et une présentation des résultats aux parties prenantes."]
      ],
      tags: ["Python", "Streamlit", "Tests"]
    },
    {
      period: "En cours",
      title: "Application de vente de livres (backend)",
      org: "ENSAI",
      place: "système de recommandation",
      page: "",
      facts: [
        ["Contexte", "Application de vente de livres avec interactions entre utilisateurs."],
        ["Méthode", "Diagramme de base de données. Algorithmes de recommandation selon plusieurs indicateurs : livres populaires, tendances, suivis."]
      ],
      tags: ["Base de données", "Recommandation"]
    },
    {
      period: "1re année",
      title: "Inégalités scolaires dans l'OCDE (PISA 2022)",
      org: "ENSAI",
      place: "projet de groupe",
      page: "",
      facts: [
        ["Contexte", "Projet de groupe en première année à l'ENSAI, sur les systèmes d'éducation de l'OCDE."],
        ["Méthode", "Analyse exploratoire, puis analyse en composantes principales (ACP) pour repérer les pays les plus et les moins performants. Classification ascendante hiérarchique (CAH) sur les axes de l'ACP pour classer les pays."]
      ],
      tags: ["R", "ACP", "CAH"]
    },
    {
      period: "2023",
      title: "Prévision de l'indice des prix du Burkina Faso",
      org: "Université Nazi Boni",
      place: "projet de groupe, cours de séries temporelles",
      page: "projet.html?id=ipc-burkina-faso",
      facts: [
        ["Contexte", "Indice des prix à la consommation du Burkina Faso, mensuel, de 2015 à mai 2023 (INSD)."],
        ["Problème", "Quelle méthode prévoit le mieux l'indice sur cinq mois ?"],
        ["Méthode", "Comparaison de trois méthodes : lissage exponentiel, régression, ARIMA. Évaluation des modèles et prédiction."],
        ["Résultat", "Le lissage exponentiel double est le plus précis (erreur quadratique 4,98, contre 13,95 et 52,14). Test sur cinq mois seulement."]
      ],
      tags: ["R", "Séries temporelles", "ARIMA"]
    }
  ],

  education: [
    { org: "ENSAI", place: "Rennes", period: "2026 – 2027", degree: "2e année, cycle ingénieur en data science" },
    { org: "ENSAI", place: "Bruz", period: "2025 – 2026", degree: "1re année, cycle ingénieur en data science" },
    { org: "Université Nazi Boni", place: "Burkina Faso", period: "2022 – 2025", degree: "Licence Statistique-Informatique" }
  ],

  certifications: [],   /* ex. { name: "Nom", issuer: "Organisme", period: "2026", logo: "images/logo.png", link: "https://..." } */

  skills: [
    ["Langages", "Python, R, SQL, Git"],
    ["Bibliothèques", "ggplot2, tidyverse, pandas, NumPy, Streamlit"],
    ["Statistiques", "Régression linéaire et logistique, séries temporelles, ACP, classification (CAH), économétrie, sondages"],
    ["Machine learning", "k-NN, CART, forêts aléatoires, LDA, QDA, k-means"],
    ["Langues", "Français (langue maternelle), anglais (B1)"],
    ["Centres d'intérêt", "Football, vélo"]
  ]
};

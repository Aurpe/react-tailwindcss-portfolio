// projectsData.js

//import Image1 from '../images/booki/mockup_booki.svg';
import Image2 from '../images/booki/homepage_Booki.png';
import Image3 from '../images/booki/activites-booki.webp';
import Image4 from '../images/kasa/kasa_desktop_mobile.webp';
import Image5 from '../images/ohmyfood/mockup_ohmyfood.webp';

// Ajoutez un tableau de projets pour mieux gérer plusieurs projets
const getProjectDetail = [
  {
    id: 'booki',  // Identifiant unique pour chaque projet
    ProjectHeader: {
      title: "création page web HMTL et CSS",
      publishDate: "Mars 2024",
      tags: "Frontend",
    },
    ProjectImages: [
      {
        id: 2,
        title: "Homepage Booki",
        img: Image2,
      },
      {
        id: 3,
        title: "Activités Booki",
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Informations client",
      CompanyInfo: [
        {
          id: 1,
          title: "Projet Kasa",
          details: "Entreprise de location d'hebergement",
        },
        {
          id: 4,
          title: "Projet Oh my Food",
          details: "Entreprise de restauration",
        },
        
      ],
      ObjectivesHeading: "Objectifs",
      ObjectivesDetails:
        ' maîtriser les bases essentielles du développement front-end et de design responsive.',
      Technologies: [
        {
          title: "Outils& Technologies",
          techs: ["HTML", "CSS",],
        },
      ],
      ProjectDetailsHeading: 'Challenges',
      ProjectDetails: [
        {
          id: 1,
          details:
            "Création d'une interface responsive : Adapter la page d'accueil aux formats mobile, tablette et desktop en utilisant des media queries et un design flexible.",
        },
        {
          id: 2,
          details:
            "Reproduction fidèle des maquettes : Intégrer les designs Figma avec précision en respectant les couleurs, typographies et proportions.",
        },
        {
          id: 3,
          details:
            "Développement de composants personnalisés : Concevoir des éléments d'interface (boutons, cartes, menus) en HTML et CSS.",
        },
        {
          id: 4,
          details:
            "Optimisation de l'expérience utilisateur : Assurer une navigation fluide et un design intuitif sur toutes les tailles d'écran.Intégration d'images optimisées pour garantir des temps de chargement rapides tout en préservant la qualité visuelle.",
        },
      ],
    },
    
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image4,
        },
      ],
    },
  },

  // Ajouter un autre projet (exemple pour Kasa)
  
  {
    id: 'ohmyfood',  // Identifiant unique pour ce projet
    ProjectHeader: {
      title: "Mobile Application UI",
      publishDate: "Mai 2024",
      tags: "Frontend/Mobile",
    },
    ProjectImages: [
      {
        id: 1,
        title: "mockup ohmyfood",
        img: Image5,
      },
    ],
    ProjectInfo: {
      ClientHeading: "Information client",
      CompanyInfo: [
        {
          id: 1,
          title: "Projet open classrooms",
          details: "Oh My food",
        },
        {
          id: 2,
          title: "Entreprise de restauration",
          details: "Design & Development",
        },
        
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
      "Développer une interface mobile-first en intégrant les maquettes Figma pour créer un site optimisé pour les appareils mobiles tout en assurant sa compatibilité avec les tailles d'écran plus grandes (tablettes et desktop),Améliorer l'UX/UI grâce à l'implémentation d'animations CSS pour rendre l'expérience plus interactive et engageante.Optimiser le développement CSS avec SASS, permettant de structurer les styles de manière plus organisée et maintenable.",
      Technologies: [
        {
          title: "Outils & Technologies",
          techs: ["HTML", "SASS",],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:
          "Implémentation d'animations CSS : Ajouter des animations CSS pour rendre l'interface plus dynamique et interactive, améliorant ainsi l'expérience utilisateur du site. Utilisation de SASS : Organiser et maintenir le code CSS de manière plus efficace en utilisant SASS, ce qui permet une meilleure gestion des styles et des fonctionnalités avancées comme les variables et les mixins."
        },
        {
          id: 2,
          details:
          "Création d'une interface mobile-first : Concevoir un site web en partant du principe que le mobile est la priorité, puis l'adapter aux tailles d'écran plus grandes, garantissant ainsi une expérience utilisateur fluide et optimisée pour les appareils mobiles."
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Projet Booki",
          img: Image2,
        },
        {
          id: 2,
          title: "Projet Kasa",
          img: Image4,
        },
      ],
    },
  },

  // Vous pouvez ajouter d'autres projets ici selon le même format.
];

export default getProjectDetail;


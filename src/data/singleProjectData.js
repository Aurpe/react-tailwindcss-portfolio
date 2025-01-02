import Image1 from '../images/booki/homepage_Booki.png';
import Image2 from '../images/booki/activites-booki.webp';
//import Image3 from '../images/booki/imageBooki.webp';
import Image4 from '../images/ohmyfood/mockup_ohmyfood.webp';
import Image5 from '../images/kasa/kasa_desktop_mobile.webp';

export const singleProjectData = {
  ProjectHeader: {
    title: "Création de la page d'accueil d'une page HTML et CSS",
    publishDate: 'Mars 2024',
    tags: 'Frontend',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Kabul Project Management UI',
      img: Image1,
    },
    {
      id: 2,
      title: 'Kabul Project Management UI',
      img: Image2,
    },
   ,
  ],
  ProjectInfo: {
    ClientHeading: 'Informations client',
    CompanyInfo: [
      {
        id: 1,
        title: 'BOOKI',
        details: 'Agence de voyage',
      },
      
      
    ],
    ObjectivesHeading: 'Objectifs',
    ObjectivesDetails: ' maîtriser les bases essentielles du développement front-end et de design responsive.',
    Technologies: [
      {
        title: 'Outils & Technologies',
        techs: ['HTML', 'CSS']
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
    title: 'Related Projects',
    Projects: [
      {
        id: 1,
        title: 'Projet OH My Food',
        img: Image4,
      },
      {
        id: 2,
        title: 'Projet Kasa',
        img: Image5,
      },
      
    ],
  },
};





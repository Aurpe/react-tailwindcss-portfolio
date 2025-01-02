// ProjectDetail.js
/*import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';

const getProjectDetails = (id) => {
  switch (id) {
    case 1:
      return {
        title: "OH MY FOOD",
        description: "Améliorez l'interface d'un site mobile avec des animations CSS",
        technologies: ["HTML", "CSS", "Sass", "Animations"],
        challenges: [
          "Mise en place d'animations CSS avancées",
          "Design responsive mobile-first",
          "Utilisation de Sass pour une meilleure organisation du code"
        ]
      };
    case 2:
      return {
        title: "KASA",
        description: "Création d'une application web de location immobilière avec React",
        technologies: ["React", "JavaScript", "CSS", "React Router"],
        challenges: [
          "Développement d'une SPA avec React",
          "Gestion des états et props",
          "Mise en place du routing"
        ]
      };
    case 3:
      return {
        title: "BOOKI",
        description: "Création de la page d'accueil d'une agence de voyage avec HTML & CSS",
        technologies: ["HTML", "CSS"],
        challenges: [
          "Intégration responsive",
          "Respect de la maquette Figma",
          "Optimisation des performances"
        ]
      };
    default:
      return null;
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));
  const details = getProjectDetails(parseInt(id));

  if (!project || !details) return <div>Projet non trouvé</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={project.img} alt={project.title} className="w-full rounded-lg shadow-lg mb-6" />
      
      <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
      <p className="text-xl mb-6">{details.description}</p>

      <h2 className="text-2xl font-bold mb-3">Technologies</h2>
      <div className="flex gap-2 mb-6">
        {details.technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-3">Challenges</h2>
      <ul className="list-disc pl-6">
        {details.challenges.map((challenge, index) => (
          <li key={index} className="mb-2">{challenge}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;*/
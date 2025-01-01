import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  // Vérification que RelatedProject et ses propriétés existent
  if (!singleProjectData.RelatedProject) {
    return <p>Loading related projects...</p>; // Affiche un message de chargement si les données sont absentes
  }

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {singleProjectData.RelatedProject.title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {singleProjectData.RelatedProject.Projects.map((project) => (
          <div key={project.id} className="flex flex-col items-center">
            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl cursor-pointer"
            />
            <p className="text-center mt-2">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;


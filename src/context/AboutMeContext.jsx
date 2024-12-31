import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  // On initialise l'état avec les données About Me
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,      // Fournit les données About Me
        setAboutMe,   // Permet de mettre à jour les données About Me
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;


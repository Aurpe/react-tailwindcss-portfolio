import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';
import './css/App.css';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle'));

function App() {
  return (
    <Router>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <AppHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            {/* Route dynamique pour afficher un projet spécifique */}
            <Route path="projects/:id" element={<ProjectSingle />} />
          </Routes>
        </Suspense>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;





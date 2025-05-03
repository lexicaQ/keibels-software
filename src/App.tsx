import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/Index';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import projectsData from './data/projectsData';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />
  },
  {
    path: "/resume",
    element: <Resume />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/projects/:projectId",
    element: <ProjectDetailPage projects={projectsData} />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/imprint",
    element: <Imprint />
  },
  {
    path: "/privacy",
    element: <Privacy />
  }
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App

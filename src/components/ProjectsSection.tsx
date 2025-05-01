
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Laptop, Smartphone } from 'lucide-react';
import DeviceFrame from './DeviceFrame';
import { useIsMobile } from '../hooks/use-mobile';

const projects = [
  {
    id: "copyclipcloud",
    title: "CopyClipCloud",
    slogan: "Dein smarter Clipboard-Manager",
    platform: "macOS App",
    year: "2025"
  },
  {
    id: "apptimer",
    title: "AppTimer",
    slogan: "Lokale Kontrolle. Sicher testen.",
    platform: "iOS App",
    year: "2023"
  },
  {
    id: "zentro",
    title: "Zentro",
    slogan: "Dein Lieferfokus – punktgenau",
    platform: "iOS App",
    year: "2023"
  },
  {
    id: "nightmanager",
    title: "NightManager",
    slogan: "Einschlafen mit Klang",
    platform: "iOS App",
    year: "2024"
  },
  {
    id: "todomanager",
    title: "ToDoManager",
    slogan: "Klar organisiert. Schnell erledigt.",
    platform: "macOS App",
    year: "2025"
  },
  {
    id: "copychecker",
    title: "CopyChecker",
    slogan: "Wissen, was du kopiert hast",
    platform: "iOS App",
    year: "2024"
  },
];

const ProjectsSection: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, projectId: string) => {
    if (isMobile) {
      e.preventDefault();
      navigate(`/projects/${projectId}`);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">MEINE PROJEKTE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group h-full"
            >
              <a 
                href={`/projects/${project.id}`}
                onClick={(e) => handleProjectClick(e, project.id)}
                className="block h-full"
              >
                <div className="h-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-3">
                      <span className="flex items-center text-xs font-medium text-white bg-black px-2.5 py-1 rounded-full">
                        {project.platform === 'iOS App' ? 
                          <Smartphone size={14} className="mr-1" /> : 
                          <Laptop size={14} className="mr-1" />
                        }
                        {project.platform}
                      </span>
                      <span className="text-xs text-gray-500">{project.year}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.slogan}</p>
                    
                    <div className="mt-auto flex items-center text-sm font-medium">
                      Details
                      <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                  
                  <div className="h-40 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`transform ${index % 2 === 0 ? 'rotate-[-5deg]' : 'rotate-[5deg]'} scale-75 opacity-80 group-hover:scale-80 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500`}>
                        <DeviceFrame
                          type={project.platform === 'iOS App' ? 'ios' : 'macos'}
                          aspectRatio={project.platform === 'iOS App' ? 'portrait' : 'landscape'}
                          className="shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/projects')}
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
          >
            Alle Projekte ansehen
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

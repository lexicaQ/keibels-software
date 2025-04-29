
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight } from 'lucide-react';
import projectsData from '../data/projectsData';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedPlatform 
    ? projectsData.filter(project => project.platform === selectedPlatform) 
    : projectsData;

  const platforms = Array.from(new Set(projectsData.map(project => project.platform)));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meine Projekte</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Eine Sammlung meiner App-Entwicklungen für verschiedene Plattformen. Jedes Projekt wurde mit Fokus auf Benutzererfahrung, modernes Design und Funktionalität entwickelt.
            </p>
          </header>
          
          <div className="mb-8 flex flex-wrap gap-3">
            <button 
              className={`px-4 py-2 rounded-full border ${selectedPlatform === null 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
              onClick={() => setSelectedPlatform(null)}
            >
              Alle
            </button>
            
            {platforms.map((platform, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-full border ${selectedPlatform === platform 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
                onClick={() => setSelectedPlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>
          
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transition-all duration-500 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10">
                  <div>
                    <div className="md:flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-600 italic">{project.slogan}</p>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0 space-x-4">
                        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{project.platform}</span>
                        <span className="text-sm font-medium">{project.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8">
                      {project.description.length > 180 
                        ? `${project.description.substring(0, 180)}...` 
                        : project.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-end">
                      <Link 
                        to={`/projects/${project.id}`}
                        className="flex items-center px-6 py-3 bg-black text-white rounded-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group"
                      >
                        Mehr Details
                        <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-end">
                    <div className={`transform transition-all duration-500 ${index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'} hover:scale-105`}>
                      {project.appContent && project.appContent(true)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;

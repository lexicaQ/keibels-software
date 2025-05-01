
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import IOSSimulator from './IOSSimulator';
import { ArrowLeft } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  slogan: string;
  description: string;
  highlights: string[];
  features?: Feature[];
  platform: string;
  year: string;
  appContent: (isAnimating: boolean) => React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  techStack?: string[];
}

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const { projectId } = useParams<{ projectId: string }>();
  
  const project = projects.find(p => p.id.toLowerCase() === projectId?.toLowerCase());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Projekt nicht gefunden</h1>
            <Link to="/projects" className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg">
              <ArrowLeft className="mr-2" size={18} />
              Zurück zu Projekten
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="mr-2" size={18} />
              Zurück zu Projekten
            </Link>
          </div>
          
          {/* Header */}
          <header className="mb-16">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="max-w-2xl">
                <div className="mb-2 flex items-center">
                  <span className="px-3 py-1 bg-black text-white text-sm rounded-full mr-3">{project.platform}</span>
                  <span className="text-gray-500">{project.year}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-gray-600 italic mb-6">{project.slogan}</p>
                <p className="text-lg text-gray-700">{project.description}</p>
              </div>
              
              <div className="flex-shrink-0">
                <IOSSimulator 
                  appContent={project.appContent(isAnimating)} 
                  color={project.backgroundColor || 'black'}
                />
              </div>
            </div>
          </header>
          
          {/* Highlights */}
          <section 
            className="mb-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
            style={{ 
              backgroundColor: project.backgroundColor ? `${project.backgroundColor}10` : 'white',
              color: project.textColor || 'inherit'
            }}
          >
            <h2 className="text-3xl font-bold mb-8">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100"
                >
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mb-4">
                    <span className="text-white font-medium">{index + 1}</span>
                  </div>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Features */}
          {project.features && (
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Funktionen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-6 p-6 rounded-xl bg-white shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1 ${
                      index % 3 === 0 ? "hover:shadow-black/10" : 
                      index % 3 === 1 ? "hover:shadow-gray-400/20" : 
                      "hover:shadow-gray-500/10"
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                        <span className="text-white text-2xl">{feature.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Tech Stack */}
          {project.techStack && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Technologien</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

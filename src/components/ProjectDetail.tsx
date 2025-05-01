
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
  year: number | string;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
  techStack?: string[];
  mockups?: {
    desktop?: string[];
    mobile?: string[];
  };
  testimonial?: {
    author: string;
    role: string;
    text: string;
    image: string;
  };
  problem?: string;
  solution?: string;
  appContent?: (isAnimating: boolean) => React.ReactNode;
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

  // Custom icons to replace emojis for feature icons
  const getFeatureIcon = (iconText: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "📋": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="2" width="12" height="20" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M9 7H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 11H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 15H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "🔍": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
          <path d="M20 20L16 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "🖼️": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="white"/>
          <path d="M20 16L15 11L8 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "📱": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="2" width="10" height="20" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M11 18H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "🔒": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="10" width="14" height="11" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M8 10V6C8 3.79086 9.79086 2 12 2V2C14.2091 2 16 3.79086 16 6V10" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="15" r="1" fill="white"/>
        </svg>
      ),
      "⌨️": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M7 10H7.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M11 10H11.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 10H15.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 14H7.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M11 14H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 14H17.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "⏱️": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="13" r="9" stroke="white" strokeWidth="2"/>
          <path d="M12 8V13L15 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 4L17 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 4V2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "📊": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 20H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 20V12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 20V8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 20V10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 20V4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "🔔": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V3C8.6862 3 6 5.6862 6 9V14.7619C6 15.0645 6 15.2157 5.96145 15.3486C5.92809 15.4648 5.87282 15.5732 5.80045 15.6671C5.71832 15.7744 5.59245 15.8561 5.34072 16.0194L4 17V17H20V17L18.6593 16.0194C18.4076 15.8561 18.2817 15.7744 18.1996 15.6671C18.1272 15.5732 18.0719 15.4648 18.0386 15.3486C18 15.2157 18 15.0645 18 14.7619V9V9C18 5.6862 15.3138 3 12 3V3Z" stroke="white" strokeWidth="2"/>
          <path d="M10 17V18C10 19.1046 10.8954 20 12 20V20C13.1046 20 14 19.1046 14 18V17" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      "🎚️": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="16" height="20" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M8 6H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 16V18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3" fill="white"/>
        </svg>
      ),
      "⏲️": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="13" r="8" stroke="white" strokeWidth="2"/>
          <path d="M12 9V13L14 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 5H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 5V3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "🗺️": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3L2 5V19L8 17L16 19L22 17V3L16 5L8 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 3V17" stroke="white" strokeWidth="2"/>
          <path d="M16 5V19" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      "📍": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2"/>
          <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      "📏": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 16L21 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 16L3 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 16L7 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M11 16L11 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 16L15 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 16L19 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      "🚦": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="2" width="6" height="20" rx="3" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="7" r="2" fill="white"/>
          <circle cx="12" cy="12" r="2" fill="white"/>
          <circle cx="12" cy="17" r="2" fill="white"/>
        </svg>
      ),
      "default": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          <path d="M12 8V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    
    return iconMap[iconText] || iconMap["default"];
  };

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
                    className={`flex gap-6 p-6 rounded-xl bg-black/90 text-white shadow-lg border border-black/10 transition-transform duration-300 hover:-translate-y-1 ${
                      index % 3 === 0 ? "hover:shadow-black/10" : 
                      index % 3 === 1 ? "hover:shadow-gray-400/20" : 
                      "hover:shadow-gray-500/10"
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center">
                        {getFeatureIcon(feature.icon)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
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

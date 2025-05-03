
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight, Laptop, Smartphone } from 'lucide-react';
import projectsData from '../data/projectsData';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Animation variants for container animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for item animations
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Get the correct screenshot based on project ID
  const getProjectScreenshot = (id: string) => {
    switch(id) {
      case 'copyclipcloud':
        return "/lovable-uploads/425434aa-0f1f-43b0-a36e-6667edfa2c9d.png";
      case 'apptimer':
        return "/lovable-uploads/00c41542-7a3b-4c8a-9808-8a57caab29cd.png";
      case 'zentro':
        return "/lovable-uploads/f309b3f3-c5db-4782-8bbf-d76ed553e43b.png";
      case 'nightmanager':
        return "/lovable-uploads/4a2f84a9-773a-44d4-bd25-d6e9fd2679ad.png";
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <header className="mb-16 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Meine Projekte</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Eine Sammlung meiner App-Entwicklungen für verschiedene Plattformen. Jedes Projekt wurde mit Fokus auf Benutzererfahrung, modernes Design und Funktionalität entwickelt.
            </p>

            <div className="mt-6 relative h-1 bg-gradient-to-r from-white/50 to-white/10 w-full max-w-md rounded-full">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-[150px] opacity-40"></div>
            <div className="absolute top-20 -left-10 w-40 h-40 bg-white/3 rounded-full blur-[100px] opacity-40"></div>
          </header>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
          >
            {projectsData.map((project, index) => {
              const screenshot = getProjectScreenshot(project.id);
              
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="relative" 
                  onMouseEnter={() => setHoveredProject(project.id)} 
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Link to={`/projects/${project.id}`} className="block h-full">
                    <div 
                      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] ${
                        hoveredProject === project.id ? 'transform scale-[1.03] shadow-lg' : ''
                      }`}
                    >
                      {screenshot && (
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={screenshot} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        </div>
                      )}
                      
                      <div className="p-6 flex flex-col h-full relative z-10">
                        <div className="flex justify-between items-center mb-3">
                          <Badge variant="outline" className={`${project.platform === 'iOS App' ? 'bg-white text-black' : 'bg-white text-black'} border-none`}>
                            {project.platform === 'iOS App' ? <Smartphone size={14} className="mr-1" /> : <Laptop size={14} className="mr-1" />}
                            {project.platform}
                          </Badge>
                          <span className="text-xs font-medium text-gray-400">{project.year}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-1 text-white">{project.title}</h2>
                        <p className="text-gray-300 text-sm italic mb-3">{project.slogan}</p>
                        
                        <div className="mb-4 flex-grow">
                          <p className="text-sm text-gray-400 line-clamp-2 mb-2">
                            {project.description?.substring(0, 80)}...
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.highlights?.slice(0, 2).map((highlight, idx) => (
                              <span key={idx} className="inline-block text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                                {highlight.substring(0, 25)}{highlight.length > 25 ? '...' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Separator className="my-4 bg-white/5" />
                        
                        <div className="mt-auto">
                          <div className={`
                            flex items-center justify-center w-full px-4 py-2 
                            bg-white/10 hover:bg-white/15
                            text-white text-sm rounded-lg transition-all duration-300`
                          }>
                            Details ansehen
                            <ArrowRight size={14} className={`ml-2 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;

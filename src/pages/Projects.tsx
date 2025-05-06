
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight, Laptop, Smartphone, Code, Star } from 'lucide-react';
import projectsData from '../data/projectsData';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ProjectImage from '../components/ProjectImage';
import { getProjectImage } from '../utils/projectImages';

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
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-white/6 rounded-full blur-[180px] opacity-50"></div>
            <div className="absolute top-20 -left-10 w-60 h-60 bg-white/5 rounded-full blur-[150px] opacity-50"></div>
          </header>
          
          <motion.div 
            className="space-y-8" 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
          >
            {projectsData.map((project, index) => {
              const projectImage = getProjectImage(project.id);
              
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="relative" 
                  onMouseEnter={() => setHoveredProject(project.id)} 
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] ${
                      hoveredProject === project.id ? 'transform scale-[1.01] shadow-lg' : ''
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                      <div className="md:col-span-3 flex flex-col">
                        <div className="flex justify-between items-center mb-3">
                          <Badge variant="outline" className="bg-white/10 text-white border-none py-1.5">
                            {project.platform === 'iOS App' ? <Smartphone size={14} className="mr-1" /> : <Laptop size={14} className="mr-1" />}
                            {project.platform}
                          </Badge>
                          <span className="text-xs font-medium text-gray-400">{project.year}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-1 text-white">{project.title}</h2>
                        <p className="text-gray-300 text-sm italic mb-3">{project.slogan}</p>
                        
                        <div className="mt-2">
                          <p className="text-sm text-gray-400 mb-4">
                            {project.description?.substring(0, 150)}...
                          </p>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          {project.highlights?.slice(0, 3).map((highlight, idx) => (
                            <div key={idx} className="flex items-center">
                              <Star className="w-4 h-4 text-white/40 mr-2" />
                              <span className="text-sm text-gray-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-auto">
                          <Link to={`/projects/${project.id}`} className="inline-block">
                            <div className="border-t border-white/10 pt-3 w-full">
                              <div className="flex items-center text-white hover:text-white/80 transition-colors">
                                <span className="font-medium">Projekt ansehen</span>
                                <ArrowRight size={16} className="ml-2" />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="w-full h-full max-h-48 md:max-h-none rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-black/50 p-1.5 border border-white/10">
                          {project.platform === 'macOS App' ? (
                            <div className="h-full w-full rounded-md bg-gradient-to-br from-gray-800 to-black flex items-center justify-center p-4">
                              <div className="flex flex-col items-center justify-center">
                                <Code size={36} className="text-white/60 mb-3" />
                                <div className="text-white text-lg font-medium">{project.title}</div>
                              </div>
                            </div>
                          ) : (
                            <img 
                              src={projectImage} 
                              alt={project.title}
                              className="h-full w-full object-contain transition-all duration-500"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
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


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight, Laptop, Smartphone, ExternalLink, Play } from 'lucide-react';
import projectsData from '../data/projectsData';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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

  // Animation for device frame
  const deviceFrameVariants = {
    idle: { 
      y: 0,
      rotate: 0,
      scale: 1
    },
    hover: { 
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Animation for screen content
  const screenContentVariants = {
    idle: { 
      opacity: 0.7
    },
    hover: { 
      opacity: 1
    }
  };

  return <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meine Projekte</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Eine Sammlung meiner App-Entwicklungen für verschiedene Plattformen. Jedes Projekt wurde mit Fokus auf Benutzererfahrung, modernes Design und Funktionalität entwickelt.
            </p>

            <div className="mt-6 relative h-1 bg-gray-200 w-full max-w-md">
              {/* Glass decoration */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
            </div>
          </header>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
          >
            {projectsData.map((project, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="relative" 
                onMouseEnter={() => setHoveredProject(project.id)} 
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link to={`/projects/${project.id}`} className="block h-full">
                  <div className={`bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full flex flex-col hover:shadow-xl ${hoveredProject === project.id ? 'transform scale-[1.02]' : ''}`}>
                    {/* Decorative gradients */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gray-50 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
                    
                    <div className="p-6 flex flex-col h-full relative z-10">
                      {/* Platform badge */}
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="bg-black text-white border-none">
                          {project.platform === 'iOS App' ? (
                            <Smartphone size={14} className="mr-1" />
                          ) : (
                            <Laptop size={14} className="mr-1" />
                          )}
                          {project.platform}
                        </Badge>
                        <span className="text-xs font-medium text-gray-500">{project.year}</span>
                      </div>
                      
                      {/* Project title and slogan */}
                      <h2 className="text-xl font-bold mb-1">{project.title}</h2>
                      <p className="text-gray-600 text-sm italic mb-3">{project.slogan}</p>
                      
                      {/* App visualization */}
                      <div className="relative h-[180px] mb-4 flex items-center justify-center">
                        <motion.div 
                          className="relative transform transition-all w-full h-full flex items-center justify-center"
                          variants={deviceFrameVariants}
                          initial="idle"
                          animate={hoveredProject === project.id ? "hover" : "idle"}
                        >
                          {/* Device frame based on platform */}
                          {project.platform === 'iOS App' ? (
                            // Phone device
                            <div className="relative w-[80px] h-[160px]">
                              {/* Phone frame */}
                              <div className="absolute inset-0 bg-black rounded-[20px] shadow-lg"></div>
                              
                              {/* Screen */}
                              <motion.div 
                                className="absolute inset-[2px] rounded-[18px] overflow-hidden bg-gray-100"
                                variants={screenContentVariants}
                                initial="idle"
                                animate={hoveredProject === project.id ? "hover" : "idle"}
                              >
                                {/* Screen content */}
                                <div className="w-full h-full relative">
                                  {project.appContent && project.appContent(hoveredProject === project.id)}
                                  
                                  {/* Play button overlay on hover */}
                                  {hoveredProject === project.id && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-[2px]">
                                      <motion.div 
                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 15 }}
                                      >
                                        <Play size={14} className="text-black ml-0.5" />
                                      </motion.div>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                              
                              {/* Home indicator */}
                              <div className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-[30%] h-[3px] bg-white rounded-full"></div>
                            </div>
                          ) : (
                            // Mac device
                            <div className="relative w-[160px] h-[110px]">
                              {/* Laptop base */}
                              <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gray-800 rounded-b-md"></div>
                              
                              {/* Laptop screen */}
                              <div className="absolute top-0 left-0 right-0 bottom-[6px] bg-gray-800 rounded-md shadow-lg p-[2px]">
                                <motion.div 
                                  className="w-full h-full bg-gray-100 rounded-sm overflow-hidden"
                                  variants={screenContentVariants}
                                  initial="idle"
                                  animate={hoveredProject === project.id ? "hover" : "idle"}
                                >
                                  {/* Screen content */}
                                  {project.appContent && project.appContent(hoveredProject === project.id)}
                                  
                                  {/* Preview overlay on hover */}
                                  {hoveredProject === project.id && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-[2px]">
                                      <motion.div 
                                        className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-xs flex items-center"
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                      >
                                        <ExternalLink size={10} className="mr-1" /> Preview
                                      </motion.div>
                                    </div>
                                  )}
                                </motion.div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Project highlights */}
                      <div className="mb-4 flex-grow">
                        <p className="text-sm text-gray-700 line-clamp-3 mb-2">
                          {project.description.substring(0, 100)}...
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.highlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              <span className="text-xs">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* View details button */}
                      <div className="mt-auto">
                        <div className={`flex items-center justify-center w-full px-4 py-2 bg-black text-white text-sm rounded-lg transition-all duration-300 ${hoveredProject === project.id ? 'shadow-lg' : ''}`}>
                          Details ansehen
                          <ArrowRight size={14} className={`ml-2 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Projects;

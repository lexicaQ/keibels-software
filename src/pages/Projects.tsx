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
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
            {projectsData.map((project, index) => <motion.div key={index} variants={itemVariants} className="relative" onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
                <Link to={`/projects/${project.id}`} className="block h-full">
                  <div className={`bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full flex flex-col hover:shadow-xl ${hoveredProject === project.id ? 'transform scale-[1.02]' : ''}`}>
                    {/* Decorative gradients */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gray-50 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
                    
                    <div className="p-6 flex flex-col h-full relative z-10">
                      {/* Platform badge */}
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="bg-black text-white border-none">
                          {project.platform === 'iOS App' ? <Smartphone size={14} className="mr-1" /> : <Laptop size={14} className="mr-1" />}
                          {project.platform}
                        </Badge>
                        <span className="text-xs font-medium text-gray-500">{project.year}</span>
                      </div>
                      
                      {/* Project title and slogan */}
                      <h2 className="text-xl font-bold mb-1">{project.title}</h2>
                      <p className="text-gray-600 text-sm italic mb-3">{project.slogan}</p>
                      
                      {/* App visualization */}
                      
                      
                      {/* Project highlights */}
                      <div className="mb-4 flex-grow">
                        <p className="text-sm text-gray-700 line-clamp-3 mb-2">
                          {project.description.substring(0, 100)}...
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.highlights.slice(0, 2).map((highlight, idx) => <li key={idx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              <span className="text-xs">{highlight}</span>
                            </li>)}
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
              </motion.div>)}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Projects;
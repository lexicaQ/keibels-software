import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight } from 'lucide-react';
import projectsData from '../data/projectsData';
import { motion } from 'framer-motion';
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
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meine Projekte</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Eine Sammlung meiner App-Entwicklungen für verschiedene Plattformen. Jedes Projekt wurde mit Fokus auf Benutzererfahrung, modernes Design und Funktionalität entwickelt.
            </p>

            <div className="mt-6 relative h-1 bg-gray-200 w-full max-w-md">
              
            </div>
          </header>
          
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12" variants={containerVariants} initial="hidden" animate="visible">
            {projectsData.map((project, index) => <motion.div key={index} variants={itemVariants} className="relative" onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
                <Link to={`/projects/${project.id}`}>
                  <div className={`bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl ${hoveredProject === project.id ? 'transform scale-[1.02]' : ''}`}>
                    <div className="relative p-8 md:p-10">
                      {/* Decorative elements */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gray-50 rounded-full opacity-20 blur-3xl"></div>
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-100 rounded-full opacity-20 blur-3xl"></div>

                      <div className="relative z-10">
                        {/* Platform badge */}
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-sm bg-black text-white px-3 py-1 rounded-full">{project.platform}</span>
                          <span className="text-sm font-medium text-gray-500">{project.year}</span>
                        </div>
                        
                        {/* Project title and slogan */}
                        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-600 italic mb-6">{project.slogan}</p>
                        
                        {/* Project description */}
                        <p className="text-lg text-gray-700 mb-8 line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* App visualization */}
                        <div className="relative h-[300px] mb-8 flex items-center justify-center">
                          <div className="relative transform transition-all duration-700 hover:scale-105">
                            {/* App frame */}
                            <div className="absolute inset-0 bg-black rounded-[40px] shadow-xl transform"></div>
                            
                            {/* App screen */}
                            <div className="absolute inset-[3px] rounded-[38px] overflow-hidden bg-white">
                              {/* App content */}
                              <div className="w-full h-full relative">
                                {project.appContent && project.appContent(hoveredProject === project.id)}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Project highlights */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.highlights.slice(0, 4).map((highlight, idx) => <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                <span className="text-sm">{highlight}</span>
                              </li>)}
                          </ul>
                        </div>
                        
                        {/* View details button */}
                        <div className="flex justify-end">
                          <div className={`flex items-center px-6 py-3 bg-black text-white rounded-lg transition-all duration-300 group ${hoveredProject === project.id ? 'translate-y-[-2px] shadow-lg' : ''}`}>
                            Mehr Details
                            <ArrowRight size={18} className={`ml-2 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
                          </div>
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight, Laptop, Smartphone, Code, Star, Tag, Calendar } from 'lucide-react';
import projectsData from '../data/projectsData';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

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

  // Function to get icon based on platform
  const getPlatformIcon = (platform: string) => {
    return platform === 'iOS App' ? 
      <div className="w-8 h-8 bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center rounded-full">
        <Smartphone className="w-4 h-4 text-white" />
      </div> : 
      <div className="w-8 h-8 bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center rounded-full">
        <Laptop className="w-4 h-4 text-white" />
      </div>;
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Helmet>
        <title>KEIBEL SOFTWARE | Innovative Projekte & App Entwicklung</title>
        <meta name="description" content="Entdecken Sie meine Softwareprojekte für iOS und macOS. Innovative Apps mit modernster Technologie und benutzerfreundlichem Design." />
        <meta property="og:title" content="KEIBEL SOFTWARE | Premium App Entwicklung" />
        <meta property="og:description" content="Innovative App- und Software-Lösungen für iOS und macOS. Moderne Projekte mit Fokus auf Benutzerfreundlichkeit und Design." />
        <meta property="og:image" content="/lovable-uploads/bbb0c50f-bc0c-4cfe-aeff-8b5c288801fd.png" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="KEIBEL SOFTWARE | Premium App Entwicklung" />
        <meta property="twitter:description" content="Innovative App- und Software-Lösungen für iOS und macOS. Moderne Projekte mit Fokus auf Benutzerfreundlichkeit und Design." />
        <meta property="twitter:image" content="/lovable-uploads/bbb0c50f-bc0c-4cfe-aeff-8b5c288801fd.png" />
      </Helmet>
      
      <Navbar />
      
      <div className="pt-16 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <header className="mb-12 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Meine Projekte</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
              Eine Sammlung meiner App-Entwicklungen für verschiedene Plattformen. Jedes Projekt wurde mit Fokus auf Benutzererfahrung, modernes Design und Funktionalität entwickelt.
            </p>

            <div className="mt-4 relative h-1 bg-gradient-to-r from-white/50 to-white/10 w-full max-w-md rounded-full mx-auto">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-white/6 rounded-full blur-[180px] opacity-50"></div>
            <div className="absolute top-20 -left-10 w-60 h-60 bg-white/5 rounded-full blur-[150px] opacity-50"></div>
          </header>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
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
                <Link to={`/projects/${project.id}`}>
                  <Card className={`h-full bg-white/5 backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/30 shadow-xl ${hoveredProject === project.id ? 'transform scale-[1.02] shadow-2xl shadow-white/5' : ''}`}>
                    <CardContent className="p-6">
                      <div className="space-y-5">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            {/* Updated platform icon with better styling */}
                            {getPlatformIcon(project.platform)}
                            <div>
                              <h2 className="text-xl font-bold text-white">{project.title}</h2>
                              <p className="text-sm text-gray-300">{project.slogan}</p>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-gray-400 flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full border border-white/10">
                            <Calendar size={12} />
                            {project.year}
                          </span>
                        </div>
                        
                        <Separator className="bg-white/20" />
                        
                        <div className="space-y-4">
                          <p className="text-gray-300 leading-relaxed">
                            {project.description?.substring(0, 120)}
                            {project.description && project.description.length > 120 ? '...' : ''}
                          </p>
                          
                          <div className="grid grid-cols-1 gap-3">
                            {project.highlights?.slice(0, 3).map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                  <Star className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm text-gray-300">{highlight.length > 35 ? highlight.substring(0, 35) + '...' : highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <span className={`inline-flex items-center gap-2 px-4 py-2 bg-white/20 border-white/30 text-white rounded-md hover:bg-white/30 transition-all duration-300 text-sm`}>
                            Projekt ansehen
                            <ArrowRight size={16} className={`transition-transform duration-300 ${hoveredProject === project.id ? 'transform translate-x-1' : ''}`} />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;

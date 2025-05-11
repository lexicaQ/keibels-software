
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowRight, Laptop, Smartphone, Code, Star, Tag, Calendar, ExternalLink } from 'lucide-react';
import projectsData from '../data/projectsData';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

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
      <Smartphone className="w-5 h-5 text-white" /> : 
      <Laptop className="w-5 h-5 text-white" />;
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
                  <Card className={`h-full bg-white/5 backdrop-blur-sm border border-white/20 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/30 shadow-xl ${
                    hoveredProject === project.id ? 'transform scale-[1.02] shadow-2xl shadow-white/5' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            {/* Larger, white icon with better styling */}
                            <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm p-2 border border-white/20">
                              {getPlatformIcon(project.platform)}
                            </div>
                            <div>
                              <h2 className="text-xl font-bold text-white">{project.title}</h2>
                              <p className="text-sm text-gray-300">{project.slogan}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge variant="outline" className="bg-white/15 text-white border-white/20">
                              {project.platform}
                            </Badge>
                            <div className="text-xs font-medium text-gray-400 flex items-center gap-1">
                              <Calendar size={12} />
                              {project.year}
                            </div>
                          </div>
                        </div>
                        
                        <Separator className="bg-white/20" />
                        
                        <div className="space-y-4">
                          <p className="text-gray-300 leading-relaxed">
                            {project.description?.substring(0, 180)}
                            {project.description && project.description.length > 180 ? '...' : ''}
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.highlights?.slice(0, 4).map((highlight, idx) => {
                              // Trim the highlight if it's too long
                              const trimmedHighlight = highlight.length > 30 ? 
                                highlight.substring(0, 30) : highlight;
                              
                              return (
                                <div key={idx} className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                                    <Star className="w-3 h-3 text-white" />
                                  </div>
                                  <span className="text-sm text-gray-300">{trimmedHighlight}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button 
                            variant="outline" 
                            className={`flex items-center gap-2 bg-white/10 border-white/20 transition-all duration-300 ${
                              hoveredProject === project.id ? 'text-white bg-white/20' : 'text-gray-300'
                            }`}
                          >
                            Projekt ansehen
                            <ArrowRight size={16} className={`transition-transform duration-300 ${
                              hoveredProject === project.id ? 'transform translate-x-1' : ''
                            }`} />
                          </Button>
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

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import { ArrowLeft, Star, Check, Link as LinkIcon, ExternalLink, Code, Laptop, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import ProjectImage from './ProjectImage';
import { getProjectImage } from '../utils/projectImages';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

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
  appContent?: (isAnimating: boolean) => React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  techStack?: string[];
  releaseStatus?: string;
  userRating?: number;
  useCases?: string[];
  updates?: {
    version: string;
    date: string;
    changes: string[];
  }[];
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
      setTimeout(() => setIsAnimating(true), 300);
    }, 400);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Projekt nicht gefunden</h1>
            <Link to="/projects" className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all">
              <ArrowLeft className="mr-2" size={18} />
              Zurück zu Projekten
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Custom icon mapping function
  const getFeatureIcon = (iconName: string) => {
    switch(iconName) {
      case '⭐️': return <Star className="text-white" size={20} />;
      case '✓': return <Check className="text-white" size={20} />;
      case '🔗': return <LinkIcon className="text-white" size={20} />;
      case '📱': return <Smartphone className="text-white" size={20} />;
      case '💻': return <Laptop className="text-white" size={20} />;
      case '🔍': return <Code className="text-white" size={20} />;
      default: return <Star className="text-white" size={20} />;
    }
  };

  const projectImage = getProjectImage(project.id);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const isMacOSApp = project.platform === 'macOS App';

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="mr-2" size={18} />
              Zurück zu Projekten
            </Link>
          </motion.div>
          
          {/* Hero section with app screenshot - Improved layout with right-aligned image */}
          <section className="relative mb-16">
            {/* Enhanced background effects */}
            <motion.div 
              className="absolute top-0 left-0 w-108 h-108 bg-white/6 rounded-full blur-[200px] opacity-50 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5 }}
            ></motion.div>
            
            <motion.div 
              className="absolute bottom-0 right-0 w-96 h-96 bg-white/4 rounded-full blur-[180px] opacity-40 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 z-10 relative overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.05)]"
            >
              <div className="flex flex-col md:flex-row gap-10 z-10 relative">
                <div className="w-full md:w-3/5 z-10">
                  <div className="flex items-center mb-4">
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="px-3 py-1 bg-white text-black text-sm font-medium rounded-full mr-3 shadow-md flex items-center"
                    >
                      {project.platform === 'iOS App' ? (
                        <span className="flex items-center">
                          <Smartphone size={14} className="mr-1" />
                          {project.platform}
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Laptop size={14} className="mr-1" />
                          {project.platform}
                        </span>
                      )}
                    </motion.span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-400 border border-gray-600 px-2 py-0.5 rounded-full text-xs"
                    >
                      {project.year}
                    </motion.span>
                  </div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                  >
                    {project.title}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-300 italic mb-6"
                  >
                    {project.slogan}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {project.releaseStatus && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 flex items-center"
                    >
                      <span className="text-sm font-medium text-gray-300 mr-2">Status:</span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full shadow-inner ${project.releaseStatus === 'Veröffentlicht' ? 'bg-green-900/40 text-green-400 border border-green-500/30' : 'bg-yellow-900/40 text-yellow-400 border border-yellow-500/30'}`}>
                        {project.releaseStatus || 'In Entwicklung'}
                      </span>
                    </motion.div>
                  )}
                </div>
                
                <div className="w-full md:w-2/5 flex items-start justify-center relative">
                  {/* Fixing the visual bug with an overlay that covers the line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5"></div>
                  
                  <motion.div 
                    className="relative w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <ProjectImage 
                      imageUrl={projectImage} 
                      alt={project.title}
                      className="rounded-xl max-h-[400px] mx-auto shadow-2xl" 
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-[50px]"></div>
            </motion.div>
          </section>
          
          {/* Highlights section - Modernized layout with structured design */}
          <motion.section 
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-6 flex items-center"
            >
              <Star className="mr-3 text-white" size={20} />
              Highlights
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-lg p-5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black shrink-0">
                      <span className="font-medium">{index + 1}</span>
                    </div>
                    <p className="text-gray-300">{highlight}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Features section - Modern layout with structured content */}
          {project.features && (
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold mb-6 flex items-center"
              >
                <Check className="mr-3 text-white" size={20} />
                Funktionen
              </motion.h2>
              
              <Card className="bg-white/5 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="flex gap-4 p-4 border border-white/20 rounded-lg bg-white/5"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shadow-inner">
                            {getFeatureIcon(feature.icon)}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1 text-white">{feature.title}</h3>
                          <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}

          {/* Use Cases section (new) */}
          {project.useCases && (
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold mb-6 flex items-center"
              >
                <Laptop className="mr-3 text-white" size={20} />
                Anwendungsfälle
              </motion.h2>
              
              <Card className="bg-white/5 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.useCases.map((useCase, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="p-4 border border-white/20 rounded-lg bg-white/5"
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center mr-3">
                            <span className="text-white font-medium">{index + 1}</span>
                          </div>
                          <p className="text-gray-300">{useCase}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}

          {/* Updates section */}
          {project.updates && (
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold mb-6 flex items-center"
              >
                <ArrowRight className="mr-3 text-white" size={20} />
                Updates
              </motion.h2>
              
              <Card className="bg-white/5 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {project.updates.map((update, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="p-4 border border-white/20 rounded-lg bg-white/5"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-bold text-lg">Version {update.version}</span>
                          <span className="text-xs text-gray-400">{update.date}</span>
                        </div>
                        <div className="space-y-2">
                          {update.changes.map((change, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 mr-2"></div>
                              <p className="text-sm text-gray-300">{change}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}
          
          {/* Tech Stack section */}
          {project.techStack && (
            <motion.section
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold mb-6 flex items-center"
              >
                <Code className="mr-3 text-white" size={20} />
                Technologien
              </motion.h2>
              
              <Card className="bg-white/5 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.techStack.map((tech, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <Separator className="my-6 bg-white/20" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-lg font-medium mb-1">Entwicklungszeit</h4>
                      <p className="text-sm text-gray-400">4 Wochen</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Updates</h4>
                      <p className="text-sm text-gray-400">Regelmäßig</p>
                    </div>
                    {project.platform === 'iOS App' && (
                      <div>
                        <h4 className="text-lg font-medium mb-1">iOS Version</h4>
                        <p className="text-sm text-gray-400">15.0+</p>
                      </div>
                    )}
                    {project.platform === 'macOS App' && (
                      <div>
                        <h4 className="text-lg font-medium mb-1">macOS Version</h4>
                        <p className="text-sm text-gray-400">12.0+</p>
                      </div>
                    )}
                    {project.userRating && (
                      <div>
                        <h4 className="text-lg font-medium mb-1">Nutzerbewertung</h4>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < Math.floor(project.userRating!) ? "text-white fill-white" : "text-gray-500"}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-400">{project.userRating}/5</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}
          
          {/* Neu: Dokumentation / Spezifikationen */}
          <motion.section
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-6 flex items-center"
            >
              <ExternalLink className="mr-3 text-white" size={20} />
              Dokumentation
            </motion.h2>
            
            <Card className="bg-white/5 border-white/20 text-white">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    variants={itemVariants}
                    className="p-4 border border-white/20 rounded-lg bg-white/5"
                  >
                    <h3 className="text-lg font-bold mb-3 text-white">Benutzerhandbuch</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Eine vollständige Anleitung zur Verwendung aller Funktionen dieser Anwendung.
                      Enthält Tipps zur Optimierung Ihres Workflows.
                    </p>
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 bg-white/10 border-white/20 text-gray-300 hover:bg-white/15"
                      >
                        PDF herunterladen
                        <ArrowRight size={14} />
                      </Button>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="p-4 border border-white/20 rounded-lg bg-white/5"
                  >
                    <h3 className="text-lg font-bold mb-3 text-white">Technische Spezifikation</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Detaillierte technische Informationen zur Architektur und implementierten Features.
                      Ideal für Entwickler und technisch versierte Benutzer.
                    </p>
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 bg-white/10 border-white/20 text-gray-300 hover:bg-white/15"
                      >
                        Spezifikation ansehen
                        <ArrowRight size={14} />
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

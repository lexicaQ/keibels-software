import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import { ArrowLeft, Star, Check, Link as LinkIcon, ExternalLink, Code, Laptop, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import ProjectImage from './ProjectImage';
import { getProjectImage } from '../utils/projectImages';

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
          
          {/* Hero section with app screenshot */}
          <section className="relative mb-20">
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
              className="flex flex-col md:flex-row gap-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 z-10 relative"
            >
              <div className="w-full md:w-1/2 z-10">
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 ${isMacOSApp ? 'bg-white' : 'bg-white'} text-black text-sm font-medium rounded-full mr-3`}>
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
                  </span>
                  <span className="text-gray-400">{project.year}</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{project.title}</h1>
                <p className="text-xl text-gray-300 italic mb-6">{project.slogan}</p>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <motion.div 
                  className="relative w-full"
                  initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* New modern white blurry background for images */}
                  <div className="absolute inset-0 bg-white/8 blur-2xl rounded-3xl transform scale-105"></div>
                  <div className="relative z-10 p-4">
                    <ProjectImage 
                      imageUrl={projectImage} 
                      alt={project.title}
                      className="rounded-xl shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>
          
          {/* Highlights section - Improved layout with smaller containers */}
          <motion.section 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-8 flex items-center"
            >
              <Star className="mr-3 text-white" size={24} />
              Highlights
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)]"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <span className="font-medium">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          {/* Features section - Improved layout with smaller containers */}
          {project.features && (
            <motion.section
              className="mb-20"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold mb-8 flex items-center"
              >
                <Check className="mr-3 text-white" size={24} />
                Funktionen
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}  
                    className="flex gap-4 backdrop-blur-lg bg-white/5 border border-white/10 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
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
            </motion.section>
          )}
          
          {/* Tech Stack section - Improved presentation */}
          {project.techStack && (
            <motion.section
              className="mb-20"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold mb-8 flex items-center"
              >
                <Code className="mr-3 text-white" size={24} />
                Technologien
              </motion.h2>
              
              <motion.div
                variants={itemVariants}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-sm font-medium hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10">
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
                  </div>
                </div>
              </motion.div>
            </motion.section>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

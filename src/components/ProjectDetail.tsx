
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import { ArrowLeft, Star, Check, Link as LinkIcon, ExternalLink, Code, Laptop, Smartphone, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

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
  const contentRef = useRef<HTMLDivElement>(null);
  
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

  // Find the right screenshot based on project ID
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
      case 'todomanager':
        return "/lovable-uploads/c0d5dc91-7451-4e20-a60d-82c907cfd8b6.png";
      case 'copychecker':
        return "/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png";
      default:
        return null;
    }
  };

  const projectScreenshot = getProjectScreenshot(project.id);
  
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

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden" ref={contentRef}>
      <Navbar />
      
      {/* Subtle white line below navbar */}
      <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
      
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
            <motion.div 
              className="absolute top-0 -left-40 w-80 h-80 bg-white/5 rounded-full blur-[200px] opacity-40 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1.5 }}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 z-10 relative"
            >
              <div className="w-full md:w-1/2 z-10">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-white text-black text-sm font-medium rounded-full mr-3">
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
                {projectScreenshot ? (
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Modern glass background effect - completely white and blurry */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-3xl scale-105 transform -rotate-2"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 rounded-3xl"></div>
                    
                    <img 
                      src={projectScreenshot} 
                      alt={project.title}
                      className="relative z-10 max-w-full max-h-[500px] object-contain rounded-3xl shadow-[0_10px_40px_rgba(255,255,255,0.15)] transform rotate-2"
                    />
                  </motion.div>
                ) : null}
              </div>
            </motion.div>
          </section>
          
          {/* Highlights section - more compact, elegant layout */}
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
              <Star className="mr-3 text-white" size={22} />
              Highlights
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {project.highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
                      {index + 1}
                    </div>
                    <div className="h-px flex-grow bg-white/10"></div>
                  </div>
                  <p className="text-gray-300 text-sm">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
          
          {/* Features section - more elegant and informative layout */}
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
                <Check className="mr-3 text-white" size={22} />
                Funktionen
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}  
                    className="flex backdrop-blur-lg bg-white/5 border border-white/10 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/8"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center mr-4">
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* Tech Stack section - cleaner, more informative design */}
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
                <Code className="mr-3 text-white" size={22} />
                Technologien
              </motion.h2>
              
              <motion.div
                variants={itemVariants}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/10 rounded-full text-sm font-medium hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-4">
                    <h3 className="text-base font-medium mb-2 text-white">Entwicklungszeit</h3>
                    <p className="text-gray-400">4 Wochen</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-4">
                    <h3 className="text-base font-medium mb-2 text-white">Updates</h3>
                    <p className="text-gray-400">Regelmäßig</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-4">
                    <h3 className="text-base font-medium mb-2 text-white">Kompatibilität</h3>
                    <p className="text-gray-400">
                      {project.platform === 'iOS App' ? 'iOS 15.0+' : 'macOS 12.0+'}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Add decorative blur element */}
              <div className="absolute bottom-40 right-10 w-64 h-64 bg-white/5 rounded-full blur-[150px] opacity-30 z-0"></div>
            </motion.section>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

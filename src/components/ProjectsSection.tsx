
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Laptop, Smartphone } from 'lucide-react';
import DeviceFrame from './DeviceFrame';
import { useIsMobile } from '../hooks/use-mobile';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import ProjectImage from './ProjectImage';
import { getProjectImage } from '../utils/projectImages';

const projects = [
  {
    id: "copyclipcloud",
    title: "CopyClipCloud",
    slogan: "Dein smarter Clipboard-Manager",
    platform: "macOS App",
    year: "2025",
    image: getProjectImage("copyclipcloud")
  },
  {
    id: "apptimer",
    title: "AppTimer",
    slogan: "Lokale Kontrolle. Sicher testen.",
    platform: "iOS App",
    year: "2023",
    image: getProjectImage("apptimer")
  },
  {
    id: "zentro",
    title: "Zentro",
    slogan: "Dein Lieferfokus – punktgenau",
    platform: "iOS App",
    year: "2023",
    image: getProjectImage("zentro")
  },
  {
    id: "nightmanager",
    title: "NightManager",
    slogan: "Einschlafen mit Klang",
    platform: "iOS App",
    year: "2024",
    image: getProjectImage("nightmanager")
  },
  {
    id: "todomanager",
    title: "ToDoManager",
    slogan: "Klar organisiert. Schnell erledigt.",
    platform: "macOS App",
    year: "2025",
    image: getProjectImage("todomanager")
  },
  {
    id: "copychecker",
    title: "CopyChecker",
    slogan: "Wissen, was du kopiert hast",
    platform: "iOS App",
    year: "2024",
    image: getProjectImage("copychecker")
  },
];

const ProjectsSection: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleProjectClick = (e: React.MouseEvent<HTMLDivElement>, projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="projects" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Enhanced background effects with more white blur elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/4 rounded-full blur-[180px] opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-108 h-108 bg-white/3 rounded-full blur-[200px] opacity-50"></div>
        <div className="absolute top-1/2 right-1/6 w-80 h-80 bg-white/4 rounded-full blur-[150px] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">MEINE PROJEKTE</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-12"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                onClick={(e) => handleProjectClick(e, project.id)}
                className="cursor-pointer h-full"
              >
                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] ${
                  hoveredProject === project.id ? 'transform scale-[1.02]' : ''
                }`}>
                  <div className="p-5 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center text-xs font-medium text-white bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                        {project.platform === 'iOS App' ? 
                          <Smartphone size={14} className="mr-1" /> : 
                          <Laptop size={14} className="mr-1" />
                        }
                        {project.platform}
                      </span>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{project.slogan}</p>
                    
                    {/* Image section - larger and more prominent */}
                    <div className="mt-1 mb-3">
                      <div className="w-full h-28 rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-black/50 p-1.5 border border-white/10">
                        {project.platform === 'macOS App' ? (
                          <div className="h-full w-full rounded-md bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                            <div className="text-white text-center font-medium">{project.title}</div>
                          </div>
                        ) : (
                          <div className="h-full w-full flex items-center justify-center">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="h-full object-contain transition-all duration-500"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Separator className="mt-auto mb-3 bg-white/5" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/70">Details ansehen</span>
                      <ArrowRight size={16} className="text-white/70" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <motion.button 
            onClick={() => navigate('/projects')}
            className="relative px-8 py-3 border border-white/20 rounded-lg overflow-hidden group transition-all duration-300 hover:bg-white/15"
            whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10 flex items-center font-medium">
              Alle Projekte ansehen
              <ArrowRight size={18} className="ml-2" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

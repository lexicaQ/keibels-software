
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Laptop, Smartphone, Zap, Code, CheckCircle, Clock, Star, Tag, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: "copyclipcloud",
    title: "CopyClipCloud",
    description: "Eine Cloud-basierte Lösung für das einfache Teilen von Texten zwischen Geräten",
    platform: "macOS App",
    year: "2025",
    icon: <Code size={18} />
  },
  {
    id: "apptimer",
    title: "AppTimer",
    description: "Verfolge deine App-Nutzung und bleibe produktiv",
    platform: "iOS App",
    year: "2023",
    icon: <Clock size={18} />
  },
  {
    id: "zentro",
    title: "Zentro",
    description: "Eine Produktivitäts-App für bewusstes und fokussiertes Arbeiten",
    platform: "iOS App",
    year: "2023",
    icon: <Zap size={18} />
  },
  {
    id: "nightmanager",
    title: "NightManager",
    description: "Optimiere deinen Schlaf mit dieser intelligenten Sleep-Tracking App",
    platform: "iOS App",
    year: "2024",
    icon: <Star size={18} />
  },
  {
    id: "todomanager",
    title: "ToDoManager",
    description: "Aufgaben effizient verwalten und priorisieren mit moderner Technik",
    platform: "macOS App",
    year: "2025",
    icon: <CheckCircle size={18} />
  },
  {
    id: "copychecker",
    title: "CopyChecker",
    description: "Überprüfe und optimiere deine Texte auf Stil und Grammatik",
    platform: "iOS App",
    year: "2024",
    icon: <Code size={18} />
  },
];

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Function to get platform icon
  const getPlatformIcon = (platform: string) => {
    return platform === 'iOS App' ? 
      <div className="w-6 h-6 bg-white/10 flex items-center justify-center rounded-full">
        <Smartphone size={12} className="text-white" />
      </div> : 
      <div className="w-6 h-6 bg-white/10 flex items-center justify-center rounded-full">
        <Laptop size={12} className="text-white" />
      </div>;
  };

  return (
    <section id="projects" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/3 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/2 rounded-full blur-[180px] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">MEINE PROJEKTE</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
            Entdecken Sie meine Sammlung an Premium-Software-Projekten. Jedes Projekt wurde mit besonderem Fokus auf Benutzerfreundlichkeit und technische Innovation entwickelt.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
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
                onClick={() => handleProjectClick(project.id)}
                className="cursor-pointer h-full"
              >
                <div className={`h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-400 flex flex-col hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] ${
                  hoveredProject === project.id ? 'transform scale-[1.02] bg-white/8 border-white/20' : ''
                }`}>
                  <div className="p-5 flex flex-col h-full">
                    {/* Platform badge and year */}
                    <div className="flex justify-between items-center mb-5">
                      <div className="flex items-center gap-2">
                        {getPlatformIcon(project.platform)}
                        <span className="text-xs font-medium text-white/80">
                          {project.platform}
                        </span>
                      </div>
                      <span className="text-xs text-white/60 flex items-center gap-1 border border-white/10 px-2 py-0.5 rounded-full">
                        <Tag size={10} />
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Project title and icon */}
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 bg-white/8 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                          {project.icon}
                        </div>
                        <h3 className="text-lg font-bold">{project.title}</h3>
                      </div>
                      <p className="text-sm text-white/70">{project.description}</p>
                    </div>
                    
                    <Separator className="bg-white/10 my-3" />
                    
                    {/* Features list - more compact */}
                    <div className="space-y-2 mb-auto">
                      <div className="flex items-center text-xs text-white/60">
                        <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center mr-2">
                          <Star size={9} className="text-white" />
                        </div>
                        <span>Moderne Benutzeroberfläche</span>
                      </div>
                      <div className="flex items-center text-xs text-white/60">
                        <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center mr-2">
                          <Star size={9} className="text-white" />
                        </div>
                        <span>Cloud-Synchronisierung</span>
                      </div>
                    </div>
                    
                    {/* View details button */}
                    <div className="pt-4 mt-2 flex items-center justify-between">
                      <span className={`text-xs ${hoveredProject === project.id ? 'text-white' : 'text-white/70'}`}>
                        Details ansehen
                      </span>
                      <ArrowRight 
                        size={14} 
                        className={`${hoveredProject === project.id ? 'text-white transform translate-x-1' : 'text-white/70'} transition-all duration-300`} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 text-center">
          <motion.button 
            onClick={() => navigate('/projects')}
            className="inline-flex items-center px-6 py-2 border border-white/20 rounded-lg transition-all duration-300 hover:bg-white/10 text-sm text-white group"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Alle Projekte ansehen
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

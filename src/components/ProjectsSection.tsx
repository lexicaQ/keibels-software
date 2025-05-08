
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
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">MEINE PROJEKTE</h2>
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
                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-400 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] ${
                  hoveredProject === project.id ? 'transform scale-[1.02]' : ''
                }`}>
                  <div className="p-5 flex flex-col h-full">
                    {/* Platform badge and year */}
                    <div className="flex justify-between items-center mb-5">
                      <Badge variant="outline" className="flex items-center gap-1 text-xs font-medium text-white bg-white/8 border-white/15">
                        {project.platform === 'iOS App' ? 
                          <Smartphone size={12} /> : 
                          <Laptop size={12} />
                        }
                        {project.platform}
                      </Badge>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Tag size={12} />
                        {project.year}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {/* Project icon */}
                      <div className="w-10 h-10 bg-white/8 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      
                      {/* Project title */}
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                    
                    {/* Project description - new addition */}
                    <p className="text-sm text-white/70 mb-4">{project.description}</p>
                    
                    {/* Features list - new addition */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-white/60">
                        <Bookmark size={12} className="mr-2" />
                        <span>Moderne Benutzeroberfläche</span>
                      </div>
                      <div className="flex items-center text-xs text-white/60">
                        <Bookmark size={12} className="mr-2" />
                        <span>Cloud-Synchronisierung</span>
                      </div>
                      <div className="flex items-center text-xs text-white/60">
                        <Bookmark size={12} className="mr-2" />
                        <span>Regelmäßige Updates</span>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10 my-3" />
                    
                    <div className="pt-2 mt-auto flex items-center justify-between">
                      <span className="text-xs text-white/70">Details anzeigen</span>
                      <ArrowRight size={14} className="text-white/70" />
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
            className="relative px-6 py-2 border border-white/20 rounded-lg overflow-hidden group transition-all duration-300 hover:bg-white/10 text-sm"
            whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(255,255,255,0.08)" }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10 flex items-center font-medium">
              Alle Projekte ansehen
              <ArrowRight size={16} className="ml-2" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

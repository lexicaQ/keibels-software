
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Laptop, Smartphone, Zap, Code, CheckCircle, Clock, Star } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const projects = [
  {
    id: "copyclipcloud",
    title: "CopyClipCloud",
    slogan: "Dein smarter Clipboard-Manager",
    platform: "macOS App",
    year: "2025",
    icon: <Code size={18} />,
    highlights: ["Cloud-Sync", "Kategorisierung"]
  },
  {
    id: "apptimer",
    title: "AppTimer",
    slogan: "Lokale Kontrolle. Sicher testen.",
    platform: "iOS App",
    year: "2023",
    icon: <Clock size={18} />,
    highlights: ["Echtzeit-Timer", "Visuelle Warnungen"]
  },
  {
    id: "zentro",
    title: "Zentro",
    slogan: "Dein Lieferfokus – punktgenau",
    platform: "iOS App",
    year: "2023",
    icon: <Zap size={18} />,
    highlights: ["Präzise Navigation", "Echtzeit-Updates"]
  },
  {
    id: "nightmanager",
    title: "NightManager",
    slogan: "Einschlafen mit Klang",
    platform: "iOS App",
    year: "2024",
    icon: <Star size={18} />,
    highlights: ["Automatische Steuerung", "Schlaf-Tracking"]
  },
  {
    id: "todomanager",
    title: "ToDoManager",
    slogan: "Klar organisiert. Schnell erledigt.",
    platform: "macOS App",
    year: "2025",
    icon: <CheckCircle size={18} />,
    highlights: ["Smarte Listen", "Zeitplanung"]
  },
  {
    id: "copychecker",
    title: "CopyChecker",
    slogan: "Wissen, was du kopiert hast",
    platform: "iOS App",
    year: "2024",
    icon: <Code size={18} />,
    highlights: ["Echtzeit-Overlay", "Datensicherheit"]
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
                    {/* Platform badge and year */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="flex items-center text-xs font-medium text-white bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                        {project.platform === 'iOS App' ? 
                          <Smartphone size={14} className="mr-1" /> : 
                          <Laptop size={14} className="mr-1" />
                        }
                        {project.platform}
                      </span>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </div>
                    
                    {/* Project icon - new elegant feature */}
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    
                    {/* Project title and slogan */}
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{project.slogan}</p>
                    
                    {/* Elegant bullet points - new feature */}
                    <div className="space-y-3 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/60 mr-2"></div>
                          <span className="text-sm text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="mt-auto mb-4 bg-white/10" />
                    
                    <div className="border-t border-white/10 pt-3 mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/70">Projekt ansehen</span>
                        <ArrowRight size={16} className="text-white/70" />
                      </div>
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

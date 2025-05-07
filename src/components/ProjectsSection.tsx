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
          <div className="w-16 h-1 bg-white mx-auto mb-10"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
                onClick={(e) => handleProjectClick(e, project.id)}
                className="cursor-pointer h-full"
              >
                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-400 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] ${
                  hoveredProject === project.id ? 'transform scale-[1.02]' : ''
                }`}>
                  <div className="p-4 flex flex-col h-full">
                    {/* Platform badge and year */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="flex items-center text-xs font-medium text-white bg-white/8 px-2 py-0.5 rounded-full border border-white/15">
                        {project.platform === 'iOS App' ? 
                          <Smartphone size={12} className="mr-1" /> : 
                          <Laptop size={12} className="mr-1" />
                        }
                        {project.platform}
                      </span>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </div>
                    
                    {/* Project icon */}
                    <div className="w-10 h-10 bg-white/8 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    
                    {/* Project title and slogan */}
                    <h3 className="text-base font-bold mb-1">{project.title}</h3>
                    <p className="text-xs text-gray-400 mb-3">{project.slogan}</p>
                    
                    {/* Bullet points */}
                    <div className="space-y-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-1 h-1 rounded-full bg-white/50 mr-2"></div>
                          <span className="text-xs text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="mt-auto mb-3 bg-white/10" />
                    
                    <div className="pt-2 mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">Projekt ansehen</span>
                        <ArrowRight size={14} className="text-white/60" />
                      </div>
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

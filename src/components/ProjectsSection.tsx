
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Laptop, Smartphone, ArrowUpRight } from 'lucide-react';
import DeviceFrame from './DeviceFrame';
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
    image: "/lovable-uploads/425434aa-0f1f-43b0-a36e-6667edfa2c9d.png"
  },
  {
    id: "apptimer",
    title: "AppTimer",
    slogan: "Lokale Kontrolle. Sicher testen.",
    platform: "iOS App",
    year: "2023",
    image: "/lovable-uploads/00c41542-7a3b-4c8a-9808-8a57caab29cd.png"
  },
  {
    id: "zentro",
    title: "Zentro",
    slogan: "Dein Lieferfokus – punktgenau",
    platform: "iOS App",
    year: "2023",
    image: "/lovable-uploads/f309b3f3-c5db-4782-8bbf-d76ed553e43b.png"
  },
  {
    id: "nightmanager",
    title: "NightManager",
    slogan: "Einschlafen mit Klang",
    platform: "iOS App",
    year: "2024",
    image: "/lovable-uploads/4a2f84a9-773a-44d4-bd25-d6e9fd2679ad.png"
  },
  {
    id: "todomanager",
    title: "ToDoManager",
    slogan: "Klar organisiert. Schnell erledigt.",
    platform: "macOS App",
    year: "2025"
  },
  {
    id: "copychecker",
    title: "CopyChecker",
    slogan: "Wissen, was du kopiert hast",
    platform: "iOS App",
    year: "2024"
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
      {/* Background effects - smoother, more blurry */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/3 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/2 rounded-full blur-[200px] opacity-40"></div>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                onClick={(e) => handleProjectClick(e, project.id)}
                className="cursor-pointer h-full"
              >
                <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] ${
                  hoveredProject === project.id ? 'transform scale-[1.03]' : ''
                }`}>
                  {project.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                      <div className="absolute bottom-3 right-3 bg-white text-black p-1 rounded-full transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`transform ${index % 2 === 0 ? 'rotate-[-5deg]' : 'rotate-[5deg]'} scale-75 group-hover:scale-80 group-hover:rotate-0 transition-all duration-500`}>
                          <DeviceFrame
                            type={project.platform === 'iOS App' ? 'ios' : 'macos'}
                            aspectRatio={project.platform === 'iOS App' ? 'portrait' : 'landscape'}
                            className="shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white text-black p-1 rounded-full transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-3">
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
                    <p className="text-sm text-gray-400 mb-4">{project.slogan}</p>
                    
                    <Separator className="my-4 bg-white/5" />
                    
                    <div className="mt-auto flex items-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      Details
                      <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${hoveredProject === project.id ? 'translate-x-1' : ''}`} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.button 
            onClick={() => navigate('/projects')}
            className="relative px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden group"
            whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(255,255,255,0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10 flex items-center font-medium">
              Alle Projekte ansehen
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-white/20 to-white/5"></div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

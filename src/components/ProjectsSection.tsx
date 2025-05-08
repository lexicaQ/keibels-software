
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Laptop, Smartphone, Zap, Code, CheckCircle, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const projects = [
  {
    id: "copyclipcloud",
    title: "CopyClipCloud",
    platform: "macOS App",
    year: "2025",
    icon: <Code size={18} />
  },
  {
    id: "apptimer",
    title: "AppTimer",
    platform: "iOS App",
    year: "2023",
    icon: <Clock size={18} />
  },
  {
    id: "zentro",
    title: "Zentro",
    platform: "iOS App",
    year: "2023",
    icon: <Zap size={18} />
  },
  {
    id: "nightmanager",
    title: "NightManager",
    platform: "iOS App",
    year: "2024",
    icon: <Star size={18} />
  },
  {
    id: "todomanager",
    title: "ToDoManager",
    platform: "macOS App",
    year: "2025",
    icon: <CheckCircle size={18} />
  },
  {
    id: "copychecker",
    title: "CopyChecker",
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
                onClick={() => handleProjectClick(project.id)}
                className="cursor-pointer h-full"
              >
                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-400 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] ${
                  hoveredProject === project.id ? 'transform scale-[1.02]' : ''
                }`}>
                  <div className="p-5 flex flex-col h-full">
                    {/* Platform badge and year */}
                    <div className="flex justify-between items-center mb-5">
                      <span className="flex items-center text-xs font-medium text-white bg-white/8 px-2.5 py-1 rounded-full border border-white/15">
                        {project.platform === 'iOS App' ? 
                          <Smartphone size={12} className="mr-1.5" /> : 
                          <Laptop size={12} className="mr-1.5" />
                        }
                        {project.platform}
                      </span>
                      <span className="text-xs text-gray-400">{project.year}</span>
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

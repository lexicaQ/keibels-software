
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">ÜBER MICH</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-3xl mx-auto">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="h-full flex"
          >
            <div className="h-64 w-full border border-gray-300 overflow-hidden rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                alt="Maxim Keibel" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-lg shadow-md p-5 border border-gray-300 h-auto"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Maxim Keibel</h3>
              <p className="text-base text-gray-700 mb-3">
                Ich bin ein leidenschaftlicher Software-Entwickler mit Schwerpunkt auf modernen Web- und App-Technologien.
              </p>
              <p className="text-sm text-gray-700 mb-3">
                Mit mehr als 5 Jahren Erfahrung entwickle ich digitale Lösungen, die nicht nur funktional, sondern auch ästhetisch ansprechend sind.
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-1">Meine Fähigkeiten:</h4>
                <div className="grid grid-cols-2 gap-1">
                  <div className="flex items-center text-xs"><span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>App-Entwicklung</div>
                  <div className="flex items-center text-xs"><span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>Web-Design</div>
                  <div className="flex items-center text-xs"><span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>UI/UX Design</div>
                  <div className="flex items-center text-xs"><span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>Frontend-Entwicklung</div>
                </div>
              </div>
            </div>
            
            <div>
              <Link to="/about">
                <Button variant="outline" className="w-full border border-black px-3 py-1.5 text-sm hover:bg-black hover:text-white transition-all duration-300">
                  Mehr über mich erfahren
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

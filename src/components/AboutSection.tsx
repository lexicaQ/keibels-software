
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">ÜBER MICH</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch max-w-5xl mx-auto">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative h-full"
          >
            <img 
              src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
              alt="Maxim Keibel" 
              className="rounded-lg shadow-lg w-full h-full object-cover max-h-[400px]"
            />
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-lg shadow-lg p-6 border border-black h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">Maxim Keibel</h3>
              <p className="text-lg text-gray-700 mb-3">
                Ich bin ein leidenschaftlicher Software-Entwickler mit Schwerpunkt auf modernen Web- und App-Technologien.
              </p>
              <p className="text-gray-700 mb-4">
                Mit mehr als 5 Jahren Erfahrung entwickle ich digitale Lösungen, die nicht nur funktional, sondern auch ästhetisch ansprechend sind. Mein Fokus liegt auf der Schaffung von benutzerfreundlichen Anwendungen und intuitiven Benutzeroberflächen.
              </p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Meine Fähigkeiten:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-2"></span>App-Entwicklung</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-2"></span>Web-Design</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-2"></span>UI/UX Design</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-2"></span>Frontend-Entwicklung</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-2"></span>Backend-Entwicklung</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-black rounded-full mr-2"></span>Datenbank-Design</li>
                </ul>
              </div>
            </div>
            
            <div>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300">
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

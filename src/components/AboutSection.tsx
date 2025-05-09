
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gray-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-[120px] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            ÜBER MICH
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '4rem' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-black mx-auto"
          ></motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center bg-white rounded-xl p-6 shadow-lg"
          >
            {/* Image Column */}
            <motion.div 
              variants={containerVariants}
              className="md:col-span-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gray-100 rounded-full blur-xl opacity-70"></div>
                <div className="relative h-56 w-56 md:h-64 md:w-64 overflow-hidden rounded-full shadow-xl border-4 border-white">
                  <img 
                    src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                    alt="Maxim Keibel" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Content Column */}
            <motion.div 
              variants={containerVariants}
              className="md:col-span-3 flex flex-col space-y-4"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Maxim Keibel</h3>
                <p className="text-base text-gray-700">
                  Ich bin ein leidenschaftlicher Software-Entwickler mit Schwerpunkt auf modernen Web- und App-Technologien.
                </p>
                <p className="text-sm text-gray-600">
                  Mit mehr als 5 Jahren Erfahrung entwickle ich digitale Lösungen, die nicht nur funktional, sondern auch ästhetisch ansprechend sind.
                </p>
              </div>
              
              <div className="pt-3">
                <h4 className="font-semibold mb-2 text-gray-800">Meine Fähigkeiten:</h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>App-Entwicklung</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Web-Design</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>UI/UX Design</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Frontend-Entwicklung</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/about">
                  <Button variant="outline" className="w-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    Mehr über mich erfahren
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

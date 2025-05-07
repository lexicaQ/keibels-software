
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">KONTAKT</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-5 border border-gray-300 h-full md:col-span-3"
          >
            <h3 className="text-lg font-bold mb-2">Lassen Sie uns zusammenarbeiten</h3>
            <p className="text-gray-700 mb-4 text-xs">
              Ich bin stets offen für spannende Projekte und neue Herausforderungen. 
              Wenn Sie eine Idee haben oder eine Beratung wünschen, kontaktieren Sie mich gerne.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center mr-2">
                  <Phone className="text-white" size={12} />
                </div>
                <div>
                  <p className="font-semibold text-xs">Telefon</p>
                  <a href="tel:+491734429624" className="text-gray-700 hover:text-black transition-colors text-xs">+49 173 4429624</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center mr-2">
                  <Mail className="text-white" size={12} />
                </div>
                <div>
                  <p className="font-semibold text-xs">E-Mail</p>
                  <a href="mailto:maxim.keibel@icloud.com" className="text-gray-700 hover:text-black transition-colors text-xs">maxim.keibel@icloud.com</a>
                </div>
              </div>
            </div>
            
            <Link to="/contact">
              <Button className="bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300 text-xs py-1 px-3 h-auto">
                Details ansehen
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center h-full md:col-span-2"
          >
            <div className="h-48 w-full border border-gray-300 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                alt="Maxim Keibel" 
                className="w-full h-full object-cover grayscale" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

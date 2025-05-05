
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">KONTAKT</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6 border border-black h-full"
          >
            <h3 className="text-2xl font-bold mb-4">Lassen Sie uns zusammenarbeiten</h3>
            <p className="text-gray-700 mb-6">
              Ich bin stets offen für spannende Projekte und neue Herausforderungen. 
              Wenn Sie eine Idee haben oder eine Beratung wünschen, kontaktieren Sie mich gerne.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-3">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+491734429624" className="text-gray-700 hover:text-black transition-colors">+49 173 4429624</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-3">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <a href="mailto:maxim.keibel@icloud.com" className="text-gray-700 hover:text-black transition-colors">maxim.keibel@icloud.com</a>
                </div>
              </div>
            </div>
            
            <Link to="/contact">
              <Button className="bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300">
                Details ansehen
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center h-full"
          >
            <div className="rounded-lg shadow-lg overflow-hidden border border-black max-w-xs max-h-[300px]">
              <img 
                src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                alt="Maxim Keibel" 
                className="w-full h-full object-cover grayscale" 
              />
            </div>
          </motion.div>
        </div>
        
        {/* Quote container below has been removed as requested */}
      </div>
    </section>
  );
};

export default ContactSection;

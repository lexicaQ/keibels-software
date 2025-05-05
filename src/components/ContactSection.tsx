
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">KONTAKT</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 border border-black"
          >
            <h3 className="text-2xl font-bold mb-6">Lassen Sie uns zusammenarbeiten</h3>
            <p className="text-gray-700 mb-8">
              Ich bin stets offen für spannende Projekte und neue Herausforderungen. 
              Wenn Sie eine Idee haben oder eine Beratung wünschen, kontaktieren Sie mich gerne.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+491734429624" className="text-gray-700 hover:text-black transition-colors">+49 173 4429624</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mr-4">
                  <Mail className="text-white" size={20} />
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
            className="flex justify-center"
          >
            <div className="rounded-lg shadow-lg overflow-hidden border border-black max-w-md">
              <img 
                src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                alt="Maxim Keibel" 
                className="w-full h-auto grayscale" 
              />
            </div>
          </motion.div>
        </div>
        
        {/* Added smaller text container below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto text-center bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200"
        >
          <p className="text-xl font-medium italic text-gray-800">
            "Qualität ist nicht nur ein Wort, sondern mein täglicher Anspruch. Ich entwickle nicht nur Software – ich kreiere digitale Erlebnisse."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

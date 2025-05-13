
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Clock, ExternalLink, Calendar, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">KONTAKT</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-300 h-full md:col-span-3"
          >
            <h3 className="text-xl font-bold mb-3">Lassen Sie uns zusammenarbeiten</h3>
            <p className="text-gray-700 mb-5">
              Ich bin stets offen für spannende Projekte und neue Herausforderungen. 
              Wenn Sie eine Idee haben oder eine Beratung wünschen, kontaktieren Sie mich gerne.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-3 shrink-0">
                  <Phone className="text-white" size={15} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Telefon</p>
                  <a href="tel:+491734429624" className="text-gray-700 hover:text-black transition-colors">+49 173 4429624</a>
                  <p className="text-xs text-gray-500 mt-1">Montag - Freitag: 09:00 - 18:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-3 shrink-0">
                  <Mail className="text-white" size={15} />
                </div>
                <div>
                  <p className="font-semibold text-sm">E-Mail</p>
                  <a href="mailto:maxim.keibel@icloud.com" className="text-gray-700 hover:text-black transition-colors">maxim.keibel@icloud.com</a>
                  <p className="text-xs text-gray-500 mt-1">Antwort innerhalb von 24 Stunden</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-3 shrink-0">
                  <MapPin className="text-white" size={15} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Adresse</p>
                  <p className="text-gray-700">Am Ring 3, 85737 Ismaning</p>
                  <p className="text-xs text-gray-500 mt-1">München, Deutschland</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-3 shrink-0">
                  <Linkedin className="text-white" size={15} />
                </div>
                <div>
                  <p className="font-semibold text-sm">LinkedIn</p>
                  <a href="#" className="text-gray-700 hover:text-black transition-colors flex items-center">
                    Profil ansehen
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Für berufliche Anfragen</p>
                </div>
              </div>
            </div>
            
            <Separator className="my-5" />
            
            <div className="flex items-center mb-4">
              <Clock size={18} className="mr-2 text-gray-600" />
              <h4 className="font-semibold">Verfügbarkeit</h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center">
                <Calendar size={14} className="mr-2 text-gray-500" />
                <p className="text-sm text-gray-700">Täglich: 15:00 - 22:00 Uhr</p>
              </div>
              <div className="flex items-center">
                <Headphones size={14} className="mr-2 text-gray-500" />
                <p className="text-sm text-gray-700">Beratungstermine nach Vereinbarung</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Link to="/contact" className="inline-block">
                <Button className="bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300 px-5">
                  Details ansehen
                </Button>
              </Link>
              <p className="text-sm text-gray-600 italic">
                <span className="hidden sm:inline">•</span> Interaktives 3D-Modell mit schwarzem Hintergrund auf der Kontaktseite verfügbar
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center h-full md:col-span-2"
          >
            <div className="h-full w-full border border-gray-300 overflow-hidden rounded-lg shadow-lg">
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

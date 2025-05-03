
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { Building, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const Imprint = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Subtle white line below navbar */}
      <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
      
      <motion.div 
        className="pt-24 pb-20 flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Impressum</h1>
            
            <div className="mb-16 relative">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-[200px] opacity-40 z-0"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-[200px] opacity-40 z-0"></div>
              
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 mb-8 relative z-10">
                <h2 className="flex items-center text-2xl font-bold mb-6 text-white">
                  <Building className="mr-2" size={24} />
                  Angaben gemäß § 5 TMG
                </h2>
                
                <Separator className="mb-6 bg-white/10" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Inhaber</h3>
                    <p className="text-gray-300 mb-2">Maxim Keibel</p>
                    <p className="text-gray-300 mb-2">KEIBEL SOFTWARE</p>
                    <p className="text-gray-300 mb-2">Am Ring 3</p>
                    <p className="text-gray-300 mb-2">85737 Ismaning</p>
                    <p className="text-gray-300">Deutschland</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Kontakt</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone size={18} className="mr-2 text-gray-400" />
                        <a href="tel:+491734429624" className="text-gray-300 hover:text-white transition-colors">+49 1734429624</a>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail size={18} className="mr-2 text-gray-400" />
                        <a href="mailto:maxim.keibel@icloud.com" className="text-gray-300 hover:text-white transition-colors">maxim.keibel@icloud.com</a>
                      </div>
                      
                      <div className="flex items-center">
                        <Globe size={18} className="mr-2 text-gray-400" />
                        <a href="https://www.keibel-software.de" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">www.keibel-software.de</a>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin size={18} className="mr-2 text-gray-400" />
                        <span className="text-gray-300">Am Ring 3, 85737 Ismaning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Haftungsausschluss</h2>
                
                <Separator className="mb-6 bg-white/10" />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Haftung für Inhalte</h3>
                    <p className="text-gray-300 text-sm">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Haftung für Links</h3>
                    <p className="text-gray-300 text-sm">
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Urheberrecht</h3>
                    <p className="text-gray-300 text-sm">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Imprint;


import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl">
            Haben Sie eine Frage oder möchten Sie mehr über meine Arbeit erfahren? 
            Ich freue mich darauf, von Ihnen zu hören.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-black">
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                
                <div className="space-y-6">
                  <a href="tel:+491734429624" className="flex items-start group hover:text-gray-600 transition-colors">
                    <Phone className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-black">Telefon</h3>
                      <p className="text-gray-700">+49 1734429624</p>
                    </div>
                  </a>
                  
                  <a href="mailto:maxim.keibel@icloud.com" className="flex items-start group hover:text-gray-600 transition-colors">
                    <Mail className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-black">E-Mail</h3>
                      <p className="text-gray-700">maxim.keibel@icloud.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-gray-700">Am Ring 3, Ismaning</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white text-black rounded-xl shadow-lg p-8 border border-black">
                <h2 className="text-2xl font-bold mb-6">Verfügbarkeit</h2>
                <p className="mb-4">
                  Ich bin derzeit für neue Projekte und Zusammenarbeit verfügbar. 
                  Meine üblichen Antwortzeiten:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span>Montag - Freitag:</span>
                    <span>9:00 - 18:00 Uhr</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Wochenende:</span>
                    <span>Nach Vereinbarung</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold mb-3">Bevorzugte Kontaktmethode:</h3>
                  <p>E-Mail oder Telefon</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-black">
                <img 
                  src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                  alt="Maxim Keibel" 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-black">
                <h2 className="text-2xl font-bold mb-4">Lass uns zusammenarbeiten!</h2>
                <p className="text-gray-700">
                  Ich freue mich auf spannende Projekte und neue Herausforderungen. 
                  Kontaktieren Sie mich für eine unverbindliche Beratung oder um Ihr Projekt zu besprechen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
